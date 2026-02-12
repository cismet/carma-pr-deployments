import{d as w,e as p,f as i,g as y,P as z,h as _,i as D,k as A,l as g,E as L,m as E,T,M as b,r as c,W as R,j as d,V as U,c as B}from"./index-Dfa64LQT.js";import{u as O}from"./useTileset-q5V4Pl7l.js";import{B as x}from"./button-B93-pBT4.js";import"./index-BQ4gJjjw.js";const V=`
#define USE_NORMAL_SHADING
uniform float view_distance; // Maximum distance for shadow effect
uniform vec3 viewArea_color; // Color for visible areas
uniform vec3 shadowArea_color; // Color for invisible areas
uniform float percentShade; // Mix number for color blending
uniform sampler2D colorTexture; // Texture for color
uniform sampler2D shadowMap; // Shadow map texture
uniform sampler2D depthTexture; // Depth texture
uniform mat4 shadowMap_matrix; // Shadow map matrix
uniform vec3 viewPosition_WC;  // Uniform for view position
uniform vec3 cameraPosition_WC;  // Uniform for camera position
uniform vec4 shadowMap_camera_positionEC; // Light position in eye coordinates
uniform vec4 shadowMap_camera_directionEC; // Light direction in eye coordinates
uniform vec3 ellipsoidInverseRadii;
uniform vec3 shadowMap_camera_up; // Light up direction
uniform vec3 shadowMap_camera_dir; // Light direction
uniform vec3 shadowMap_camera_right; // Light right direction
uniform vec4 shadowMap_normalOffsetScaleDistanceMaxDistanceAndDarkness; // Shadow map parameters
uniform vec4 shadowMap_texelSizeDepthBiasAndNormalShadingSmooth; // Shadow map parameters
uniform vec4 _shadowMap_cascadeSplits[2];
uniform mat4 _shadowMap_cascadeMatrices[4];
uniform vec4 _shadowMap_cascadeDistances;
uniform bool exclude_terrain;

in vec2 v_textureCoordinates;
out vec4 FragColor;

vec4 toEye(in vec2 uv, in float depth){
    float x = uv.x * 2.0 - 1.0;
    float y = uv.y * 2.0 - 1.0;
    vec4 camPosition = czm_inverseProjection * vec4(x, y, depth, 1.0);
    float reciprocalW = 1.0 / camPosition.w;
    camPosition *= reciprocalW;
    return camPosition;
}

// This function gets the depth from a depth texture.
float getDepth(in vec4 depth){
    // Unpack the depth value from the depth texture
    float z_window = czm_unpackDepth(depth);
    // Reverse the logarithmic depth value to get the linear depth
    z_window = czm_reverseLogDepth(z_window);
    // Get the near and far values of the depth range
    float n_range = czm_depthRange.near;
    float f_range = czm_depthRange.far;
    // Convert the depth value from window coordinates to normalized device coordinates
    return (2.0 * z_window - n_range - f_range) / (f_range - n_range);
}

/**
 * Projects a point onto a plane.
 *
 * @param planeNormal - A vector representing the normal of the plane.
 * @param planeOrigin - A point on the plane.
 * @param point - The point to be projected onto the plane.
 * @return The projection of the point on the plane.
 */
vec3 pointProjectOnPlane(in vec3 planeNormal, in vec3 planeOrigin, in vec3 point){
    // Calculate the vector from the plane origin to the point
    vec3 v01 = point - planeOrigin;

    // Calculate the perpendicular distance from the point to the plane
    float d = dot(planeNormal, v01);

    // Subtract the product of the plane normal and d from the point
    // to get the projection of the point on the plane
    return (point - planeNormal * d);
}

/**
 * Calculates the magnitude (length) of a vector.
 *
 * @param pt - The input vector.
 * @return The magnitude of the vector.
 */
float point2mag(vec3 point){
    // Square each component of the vector, add them together,
    // and take the square root of the result
    return sqrt(point.x*point.x + point.y*point.y + point.z*point.z);
}

/**
 * Main function for the fragment shader.
 */
void main()
{
    // Get the color and depth at the current texture coordinates
    vec4 color = texture(colorTexture, v_textureCoordinates);
    vec4 cDepth = texture(depthTexture, v_textureCoordinates);

    // Get the depth and position in eye coordinates
    float depth = getDepth(cDepth);
    vec4 positionEC = toEye(v_textureCoordinates, depth);

    // If the depth is at its maximum value, set the fragment color to the texture color and return
    if(cDepth.r >= 1.0){
        FragColor = color;
        return;
    }

    //check to see if we are within distance of the view target
    float cameraDistance = length(cameraPosition_WC.xyz - viewPosition_WC.xyz);

    // Get the fragment position in world coordinates
    vec4 fragPosition_WC = vec4(v_textureCoordinates, 0.0, 1.0);

    if (
        cDepth.r >= 1.0 ||
        (exclude_terrain && czm_ellipsoidContainsPoint(ellipsoidInverseRadii, positionEC.xyz))
        ){
        FragColor = color;
        return;
    }

    // Initialize shadow parameters
    czm_shadowParameters shadowParameters;
    shadowParameters.texelStepSize = shadowMap_texelSizeDepthBiasAndNormalShadingSmooth.xy;
    shadowParameters.depthBias = shadowMap_texelSizeDepthBiasAndNormalShadingSmooth.z;
    shadowParameters.normalShadingSmooth = shadowMap_texelSizeDepthBiasAndNormalShadingSmooth.w;
    shadowParameters.darkness = shadowMap_normalOffsetScaleDistanceMaxDistanceAndDarkness.w;

    // Adjust the depth bias
    shadowParameters.depthBias *= max(depth * 0.01, 1.0);

    // Calculate the direction in eye coordinates
    vec3 directionEC = normalize(positionEC.xyz - shadowMap_camera_positionEC.xyz);

    // Calculate the dot product of the normal and the negative direction
   float nDotL = clamp(dot(vec3(1.0), -directionEC), 0.0, 1.0);

    // Calculate the shadow position
    vec4 shadowPosition = shadowMap_matrix * positionEC;
    shadowPosition /= shadowPosition.w;

    // If the shadow position is outside the [0, 1] range in any dimension, set the fragment color to the texture color and return
    if (any(lessThan(shadowPosition.xyz, vec3(0.0))) || any(greaterThan(shadowPosition.xyz, vec3(1.0))))
    {
        FragColor = color;
        return;
    }

    // If the distance between the coordinates and the viewpoint is greater than the maximum distance, the shadow effect is discarded
    vec4 lw = czm_inverseView*  vec4(shadowMap_camera_positionEC.xyz, 1.0);
    vec4 vw = czm_inverseView* vec4(positionEC.xyz, 1.0);

    if(distance(lw.xyz,vw.xyz)>view_distance){
        FragColor = color;
        return;
    }

    // Set the shadow parameters
    shadowParameters.texCoords = shadowPosition.xy;
    shadowParameters.depth = shadowPosition.z;
    shadowParameters.nDotL = nDotL;

    // Calculate the shadow visibility
    float visibility = czm_shadowVisibility(shadowMap, shadowParameters);

    // If the visibility is 1.0, mix the color with the visible color
    if(visibility==1.0){

    // Transform positionEC to world coordinates

    // Use world coordinates to calculate grid lines
    float gridLineWidth = 0.05; // Adjust line width as needed
    // TODO get ratio for frustum from camera specs, not viewport
    vec2 gridLines = vec2(5.0, 5.0);
    vec2 gridRatio = normalize(gridLines);
    vec2 widthUniform = gridLineWidth * gridRatio;
    vec2 halfWidth = widthUniform / 2.0;
    float gridX = step(widthUniform.x, abs(fract(halfWidth.x + shadowPosition.x * gridLines.x) ));
    float gridY = step(widthUniform.y, abs(fract(halfWidth.y + shadowPosition.y * gridLines.y) ));

    // Combine grid lines
    float grid = min(gridX, gridY);

    // Set grid color to white
    vec4 gridColor = vec4(1.0, 1.0, 1.0, 0.5);

    FragColor = mix(texture(colorTexture, v_textureCoordinates),vec4(viewArea_color,1.0),percentShade);

    FragColor = mix(gridColor,FragColor,grid);
    }else{
        if(abs(shadowPosition.z-0.0)<0.01){
            FragColor = color;
            return;
        }
        FragColor = mix(texture(colorTexture, v_textureCoordinates),vec4(shadowArea_color,1.0),percentShade);
    }
}`,l={cameraPosition:new w,viewPosition:new w,viewAreaColor:new p(0,1,0),shadowAreaColor:new p(1,0,0),alpha:.5,frustum:!0,size:4096,depthBias:2e-12};class k{constructor(e,t={}){this.viewer=e,this._isDestroyed=!1,this.cameraPosition=typeof t.cameraPosition.getValue=="function"?t.cameraPosition:new w(t.cameraPosition),this.viewPosition=typeof t.viewPosition.getValue=="function"?t.viewPosition:new w(t.viewPosition),this.viewAreaColor=t.viewAreaColor??l.viewAreaColor,this.shadowAreaColor=t.shadowAreaColor??l.shadowAreaColor,this.alpha=t.alpha??l.alpha,this.size=t.size??l.size,this.frustum=t.frustum??l.frustum,this.depthBias=t.depthBias??l.depthBias,this.preUpdateListener=null,this.cameraPosition&&this.viewPosition&&this._addToScene()}get _getVectors(){let e=this.cameraPosition.getValue(this.viewer.clock.currentTime),t=this.viewPosition.getValue(this.viewer.clock.currentTime),a=Number(i.distance(t,e).toFixed(1));if(a>1e4){let o=1-1e4/a;e=i.lerp(e,t,o,new i)}return{positionVector:e,viewVector:t}}destroy(){this.preUpdateListener&&(this.viewer.scene.preUpdate.removeEventListener(this.preUpdateListener),this.preUpdateListener=null),this.viewShadowMap&&(this.viewShadowMap.dispose(),this.viewShadowMap=null),this.postProcess&&(this.viewer.scene.postProcessStages.remove(this.postProcess),this.postProcess=null),this.viewer.scene.primitives.remove(this);for(let e in this)this.hasOwnProperty(e)&&delete this[e];this._isDestroyed=!0}isDestroyed(){return this._isDestroyed}_addToScene(){this._createShadowMap(),this._addPostProcess(),this.viewer.scene.primitives.add(this)}_createShadowMap(e){let{positionVector:t,viewVector:a}=this._getVectors;const o=Number(i.distance(a,t).toFixed(1));if(o>1e4){const u=1-1e4/o;t=i.lerp(t,a,u,new i)}const s=this.viewer.scene,r=new y(s);r.position=t,r.direction=i.subtract(a,t,new i(0,0,0)),r.up=i.normalize(t,new i(0,0,0)),r.frustum=new z({fov:_.toRadians(26),aspectRatio:s.canvas.clientWidth/s.canvas.clientHeight,near:.1,far:o}),e?this.viewShadowMap._lightCamera.position=t:this.viewShadowMap=new D({lightCamera:r,enable:!0,isPointLight:!1,isSpotLight:!0,cascadesEnabled:!1,context:s.context,size:this.size,pointLightRadius:o,fromLightSource:!1,maximumDistance:o}),this.viewShadowMap.normalOffset=!0,this.viewShadowMap._terrainBias.depthBias=0}_addPostProcess(){const e=this,t=this.viewShadowMap,a=t._isPointLight?t._pointBias:t._primitiveBias;this.postProcess=this.viewer.scene.postProcessStages.add(new A({fragmentShader:V,uniforms:{view_distance:function(){return e.distance},viewArea_color:function(){return e.viewAreaColor},shadowArea_color:function(){return e.shadowAreaColor},percentShade:function(){return e.alpha},shadowMap:function(){return t._shadowMapTexture},_shadowMap_cascadeSplits:function(){return t._cascadeSplits},_shadowMap_cascadeMatrices:function(){return t._cascadeMatrices},_shadowMap_cascadeDistances:function(){return t._cascadeDistances},shadowMap_matrix:function(){return t._shadowMapMatrix},shadowMap_camera_positionEC:function(){return t._lightPositionEC},shadowMap_camera_directionEC:function(){return t._lightDirectionEC},cameraPosition_WC:function(){return e.viewer.camera.positionWC},viewPosition_WC:function(){return e.viewPosition.getValue(e.viewer.clock.currentTime)},shadowMap_camera_up:function(){return t._lightCamera.up},shadowMap_camera_dir:function(){return t._lightCamera.direction},shadowMap_camera_right:function(){return t._lightCamera.right},ellipsoidInverseRadii:function(){let o=e.viewer.scene.globe.ellipsoid.radii;return new i(1/o.x,1/o.y,1/o.z)},shadowMap_texelSizeDepthBiasAndNormalShadingSmooth:function(){var o=new E;return o.x=1/t._textureSize.x,o.y=1/t._textureSize.y,g.fromElements(o.x,o.y,this.depthBias,a.normalShadingSmooth,this.combinedUniforms1)},shadowMap_normalOffsetScaleDistanceMaxDistanceAndDarkness:function(){return g.fromElements(a.normalOffsetScale,t._distance,t.maximumDistance,t._darkness,this.combinedUniforms2)},exclude_terrain:function(){return e.viewer.terrainProvider instanceof L}}})),this.preUpdateListener&&this.viewer.scene.preUpdate.removeEventListener(this.preUpdateListener),this.preUpdateListener=()=>{this.viewShadowMap._shadowMapTexture?this.postProcess.enabled=!0:this.postProcess.enabled=!1},this.viewer.scene.preUpdate.addEventListener(this.preUpdateListener)}update(e){this._createShadowMap(!0),e.shadowMaps.push(this.viewShadowMap)}destroy(){this.preUpdateListener&&this.viewer.scene.preUpdate.removeEventListener(this.preUpdateListener),this.viewer.scene.postProcessStages.remove(this.postProcess);for(let e in this)this.hasOwnProperty(e)&&delete this[e]}get size(){return this._size}set size(e){this._size=e}get depthBias(){return this._depthBias}set depthBias(e){this._depthBias=e}get cameraPosition(){return this._cameraPosition}set cameraPosition(e){this._cameraPosition=e}get viewPosition(){return this._viewPosition}set viewPosition(e){this._viewPosition=e}get frustum(){return this._frustum}set frustum(e){this._frustum=e}get distance(){return this._distance}set distance(e){this._distance=e}get viewAreaColor(){return this._viewAreaColor}set viewAreaColor(e){this._viewAreaColor=e}get shadowAreaColor(){return this._shadowAreaColor}set shadowAreaColor(e){this._shadowAreaColor=e}get alpha(){return this._alpha}set alpha(e){this._alpha=e}}const v={longitude:7.201578,latitude:51.256565,height:363},W=(h,{heading:e,pitch:t,range:a})=>{const o=T.eastNorthUpToFixedFrame(h),s=new i(Math.cos(t)*Math.cos(e),Math.cos(t)*Math.sin(e),Math.sin(t)),r=i.multiplyByScalar(s,a,new i);return b.multiplyByPointAsVector(o,r,new i)},f=i.fromDegrees(v.longitude,v.latitude,v.height),F=W(f,{heading:_.toRadians(30),pitch:_.toRadians(-25),range:200}),P=i.add(f,F,new i),q=()=>{const h=c.useRef(null),e=c.useRef(null),t=c.useRef(null),{tilesetRef:a,tilesetReady:o}=O(R.url,e.current),s=c.useRef(null),r=c.useRef(null);c.useEffect(()=>((async()=>{try{if(h.current){const n=new U(h.current,B);e.current=n,s.current=n.entities.add({position:P,point:{pixelSize:10,color:p.LIME}}),r.current=n.entities.add({position:f,point:{pixelSize:10,color:p.YELLOW}}),n.zoomTo([r.current,s.current])}}catch(n){console.error("Initialization error:",n)}})(),()=>{e.current&&e.current.destroy()}),[]),c.useEffect(()=>{e.current.scene&&o&&(t.current=new k(e.current,{cameraPosition:f,viewPosition:P,viewAreaColor:new p(.5,1,.5),shadowAreaColor:new p(.2,.2,.2),alpha:.5,frustum:!0,size:1024}),e.current.scene.requestRender())},[o]);const u=()=>{if(e.current&&r.current&&s.current){const m=r.current.position.getValue(e.current.clock.currentTime),n=s.current.position.getValue(e.current.clock.currentTime),S=i.normalize(i.subtract(n,m,new i),new i),M=i.normalize(m,new i);e.current.camera.flyTo({destination:m,orientation:{direction:S,up:M},duration:2})}},C=()=>{e.current&&e.current.zoomTo([r.current,s.current])};return d.jsxs(d.Fragment,{children:[d.jsx("div",{ref:h,style:{width:"100%",height:"100vh"}}),";",d.jsxs("div",{style:{position:"absolute",bottom:10,right:10,left:10,padding:"10px",background:"rgba(255, 255, 255, 0.85)"},children:[d.jsx(x,{onClick:C,children:"go to Overview "}),d.jsx(x,{onClick:u,children:"view from Camera "})]})]})};export{q as default};
