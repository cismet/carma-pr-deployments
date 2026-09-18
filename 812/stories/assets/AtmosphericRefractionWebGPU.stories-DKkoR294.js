import{j as c}from"./jsx-runtime-DNp_qQjF.js";import{r as w}from"./index-CSJjS6Ct.js";import{j as re,k as L,q as de,r as fe,S as me,s as se,P as ge,V as he}from"./three.module-BsINTyXW.js";import"./wms-uhWQECSC.js";import{N as ve,c as ye,p as xe,l as be,b as we,T as Te,A as ke}from"./maplibre-three-reference-surfaces-DwI8uH5E.js";import{N as Me}from"./terrain-CDUojVZ_.js";import{b as Re}from"./gcg2016-RydMRdXg.js";import"./angles-o81lIhgd.js";import{a as Se}from"./raster-dem-terrain-tile-source-gnuY1_Gd.js";import"./clamp-co6UzHBn.js";import"./index-M0u9yaJ4.js";import"./maplibre-gl-BvLDYGIs.js";import"./iframe-DXfmEPgy.js";import"./pi-mVFkAveX.js";const Ee=`
struct Settings { size: vec2f, range: f32, halfWidth: f32, eye: f32, k: f32, fov: f32, towerDistance: f32, towerHeight: f32, towerBase: f32, steps: f32, spare: f32, temperature:f32, pressure:f32, lapse:f32, inversion:f32, layer:f32, depth:f32, visibility:f32, charts:f32 }
@group(0) @binding(0) var terrain: texture_2d<f32>;
@group(0) @binding(1) var<uniform> settings: Settings;
@group(0) @binding(2) var skyTexture: texture_2d<f32>;
@group(0) @binding(3) var skySampler: sampler;
@vertex fn vertex(@builtin(vertex_index) index:u32)->@builtin(position) vec4f {
  let p=array<vec2f,3>(vec2f(-1,-1),vec2f(3,-1),vec2f(-1,3));return vec4f(p[index],0,1);
}
fn heightAt(x:f32,z:f32)->f32 {
  let uv=vec2f(x/settings.halfWidth*0.5+0.5,z/settings.range);
  if(any(uv<vec2f(0)) || any(uv>vec2f(1))){return -10000;}
  let dimensions=vec2i(textureDimensions(terrain));
  let p=uv*vec2f(dimensions-vec2i(1));let a=vec2i(floor(p));let b=min(a+vec2i(1),dimensions-vec2i(1));let t=fract(p);
  let h00=textureLoad(terrain,a,0).r;let h10=textureLoad(terrain,vec2i(b.x,a.y),0).r;
  let h01=textureLoad(terrain,vec2i(a.x,b.y),0).r;let h11=textureLoad(terrain,b,0).r;
  if(min(min(h00,h10),min(h01,h11)) < -1000){return -10000;}
  return mix(mix(h00,h10,t.x),mix(h01,h11,t.x),t.y);
}
fn curvature(height:f32)->f32 {
  let dz=height-settings.eye;
  let u=(height-settings.layer)/max(10.0,settings.depth);
  let temperature=max(220.0,settings.temperature+273.15+settings.lapse*dz/1000.0+0.5*settings.inversion*(tanh(u)-tanh((settings.eye-settings.layer)/max(10.0,settings.depth))));
  let gradient=settings.lapse/1000.0+0.5*settings.inversion/max(10.0,settings.depth)*(1.0-tanh(u)*tanh(u));
  let pressure=settings.pressure*exp(-9.80665*dz/(287.05*0.5*(temperature+settings.temperature+273.15)));
  // Dry-air optical density approximation at 550 nm, not full Ciddor.
  let refractivity=0.0002778*(pressure/1013.25)*(288.15/temperature);
  return refractivity*(-9.80665/(287.05*temperature)-gradient/temperature);
}
fn filtered(color:vec3f,distance:f32,sky:vec3f)->vec4f {
  let transmission=exp(-vec3f(0.8,1.0,1.35)*3.912*distance/max(100.0,settings.visibility));
  let linearSky=pow(sky,vec3f(2.2));
  return vec4f(pow(max(vec3f(0),color*transmission+linearSky*(vec3f(1)-transmission)),vec3f(1.0/2.2)),1);
}
fn chartColor(uv:vec2f,km:u32)->vec3f {
  if(uv.y<0.22){
    let glyphs=array<u32,12>(31599u,11415u,29671u,29647u,23497u,31183u,31215u,29257u,31727u,31695u,23861u,4077u);
    let cell=vec2u(clamp(uv/vec2f(1,0.22),vec2f(0),vec2f(0.999))*vec2f(17,7));
    let column=cell.x/4u;let x=cell.x%4u;
    let codes=array<u32,4>(km/10u,km%10u,10u,11u);
    if(column<4u && x<3u && cell.y>=1u && cell.y<=5u && !(column==0u && km<10u)){
      let bit=14u-((cell.y-1u)*3u+x);
      if(((glyphs[codes[column]]>>bit)&1u)==1u){return vec3f(0);}
    }
    return vec3f(1);
  }
  let colors=array<vec3f,8>(vec3f(1),vec3f(0),vec3f(1,0,0),vec3f(0,1,0),vec3f(0,0,1),vec3f(0,1,1),vec3f(1,0,1),vec3f(1,1,0));
  let cell=vec2u(clamp(vec2f(uv.x,(uv.y-0.22)/0.78),vec2f(0),vec2f(0.999))*vec2f(4,2));
  return colors[cell.y*4+cell.x];
}
@fragment fn fragment(@builtin(position) frag:vec4f)->@location(0) vec4f {
  let right=frag.x>=settings.size.x*0.5;
  let uv=vec2f(fract(frag.x/(settings.size.x*0.5)),frag.y/settings.size.y);
  let aspect=settings.size.x*0.5/settings.size.y;
  let slope=vec2f((uv.x*2-1)*aspect,1-uv.y*2)*tan(settings.fov*0.5)+vec2f(0,-0.00174533);
  let sky=textureSampleLevel(skyTexture,skySampler,uv,0).rgb;
  var y=settings.eye;var slopeY=slope.y;var previousZ=0.0;
  let step=settings.range/settings.steps;
  var chartSlope=-0.03418; // Eight disjoint 100m / distance angular intervals.
  for(var i=1u;i<=1024u;i++){
    if(f32(i)>settings.steps){break;}
    let z=f32(i)*step;
    let oldY=y;
    let height=y+previousZ*previousZ/(2*6371000.0);
    let bend=select(0.0,curvature(height),right);
    y+=slopeY*step+0.5*bend*step*step;slopeY+=bend*step;
    if(settings.charts>0.5){
      chartSlope=-0.03418;
      for(var c=1u;c<=8u;c++){
        let d=f32(c)*5000.0;let angularWidth=100.0/d;
        let center=chartSlope+angularWidth*0.5;
        if(previousZ<d && z>=d && abs(slope.x-center)<angularWidth*0.5){
          let ground=heightAt(center*d,d);
          let centerHeight=max(settings.eye+100.0,ground+80.0)-d*d/(2*6371000.0);
          let rayY=mix(oldY,y,(d-previousZ)/step);
          if(abs(rayY-centerHeight)<50.0){
            return filtered(chartColor(vec2f((slope.x-center)/angularWidth+0.5,0.5-(rayY-centerHeight)/100.0),c*5u),d,sky);
          }
        }
        chartSlope+=angularWidth+0.002;
      }
    }
    if(previousZ<settings.towerDistance && z>=settings.towerDistance){
      let d=settings.towerDistance;
      let rayY=mix(oldY,y,(d-previousZ)/step);
      let base=settings.towerBase-d*d/(2*6371000.0);
      let radius=4.2;
      let peak=settings.towerHeight;
      if(abs(slope.x*d)<radius && rayY>=base && rayY<=base+peak){return filtered(vec3f(0.65,0.68,0.72),d,sky);}
    }
    let h=heightAt(slope.x*z,z);
    if(h > -1000 && y<h-z*z/(2*6371000.0)){
      return filtered(mix(vec3f(0.12,0.22,0.13),vec3f(0.65,0.61,0.42),clamp(h/900,0.0,1.0)),z,sky);
    }
    previousZ=z;
  }
  return vec4f(sky,1);
}
`,oe={ideal:{temperature:15,pressure:970,lapse:-6.5,inversion:0,layer:450,depth:100,visibility:1e12},mixed:{temperature:15,pressure:970,lapse:-6.5,inversion:0,layer:450,depth:100,visibility:8e4},inversion:{temperature:5,pressure:990,lapse:-6.5,inversion:5,layer:450,depth:100,visibility:25e3},haze:{temperature:24,pressure:975,lapse:-6.5,inversion:2,layer:600,depth:150,visibility:12e3},custom:{temperature:15,pressure:970,lapse:-6.5,inversion:0,layer:450,depth:100,visibility:8e4}},ze=d=>{const O=w.useRef(null),[le,T]=w.useState("Initializing WebGPU…"),A=w.useRef(d);A.current={...d,...d.preset==="custom"?{}:oe[d.preset]};const N=w.useRef(()=>{});return w.useEffect(()=>N.current(),[d]),w.useEffect(()=>{const i=O.current;if(!i)return;const o=new AbortController;let t,f,p,k,W=()=>{},I=()=>{};return(async()=>{if(!navigator.gpu){T("WebGPU unavailable in this browser. No fallback renderer started.");return}const S=await navigator.gpu.requestAdapter();if(!S)throw new Error("No WebGPU adapter available");if(t=await S.requestDevice(),o.signal.aborted){t.destroy();return}t.lost.then(e=>{o.signal.aborted||T(`WebGPU device lost: ${e.message}`)});const C=i.getContext("webgpu");if(!C)throw new Error("No WebGPU canvas context");const V=navigator.gpu.getPreferredCanvasFormat();C.configure({device:t,format:V,alphaMode:"opaque"});const H=t.createShaderModule({code:Ee}),Z=(await H.getCompilationInfo()).messages.filter(e=>e.type==="error");if(Z.length)throw new Error(Z.map(e=>e.message).join("; "));const $=await t.createRenderPipelineAsync({layout:"auto",vertex:{module:H,entryPoint:"vertex"},fragment:{module:H,entryPoint:"fragment",targets:[{format:V}]},primitive:{topology:"triangle-list"}});if(o.signal.aborted)return;const m=await Se(Me,{maxCacheBytes:32*1024**2,meshSegments:16});if(W=()=>m.release(),o.signal.aborted){W();return}const g=[7.20158,51.25656],h=ve[0],_=361.3477,v=await Re([g,[h.longitudeDegrees,h.latitudeDegrees]]),K=ye(g,6371e3),E=xe(K,h.longitudeDegrees,h.latitudeDegrees,0,Te.WGS84_ECEF),B=Math.hypot(E.x,E.z),y=new re(E.x,E.z).normalize(),X=new re(-y.y,y.x),a=128,u=1024,z=B+4e3,j=2500,J=new Float32Array(a*u).fill(-1e4),x=Array.from({length:a*u},(e,r)=>{const n=Math.floor(r/a)/(u-1)*z,s=(r%a/(a-1)*2-1)*j;return be(K,y.x*n+X.x*s,y.y*n+X.y*s)}),G=[x[0],x[a-1],x[(u-1)*a],x[u*a-1]],q=m.getTileGridIdsForBounds({west:Math.min(...G.map(e=>e[0])),east:Math.max(...G.map(e=>e[0])),south:Math.min(...G.map(e=>e[1])),north:Math.max(...G.map(e=>e[1]))},10).filter(e=>m.getTileDataAvailable(e)).map(e=>({id:e,bounds:m.getTileBounds(e),samples:[]}));x.forEach((e,r)=>{const n=q.find(s=>e[0]>=s.bounds.west&&e[0]<=s.bounds.east&&e[1]>=s.bounds.south&&e[1]<=s.bounds.north);n==null||n.samples.push(r)});let Q=0;for(const e of q.filter(r=>r.samples.length).slice(0,32)){if(o.signal.aborted)return;T(`Loading terrain corridor ${++Q}/${Math.min(32,q.length)}…`),await m.requestTile(e.id,o.signal,2);for(const r of e.samples){const n=x[r],s=m.sampleHeight(n[0],n[1]);s!==void 0&&s>-1e3&&(J[r]=s+L.lerp(v[0],v[1],Math.min(1,Math.floor(r/a)/(u-1)*z/B)))}await new Promise(r=>setTimeout(r,0))}if(o.signal.aborted)return;f=t.createTexture({size:[a,u],format:"r32float",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST}),t.queue.writeTexture({texture:f},J,{bytesPerRow:a*4},{width:a,height:u}),p=t.createBuffer({size:80,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});const Y=t.createTexture({size:[512,256],format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST|GPUTextureUsage.RENDER_ATTACHMENT}),b=new de({alpha:!1,preserveDrawingBuffer:!0});b.setSize(512,256),b.toneMapping=fe,b.toneMappingExposure=2;const F=new me;F.background=new se("#7895b0");const l=new ge(4,2,1,1e5);l.position.set(0,_+v[0],0),l.lookAt(y.x*1e3,l.position.y-1.74533,y.y*1e3);const M=we(new se("#556044"));F.add(M.mesh);const R=new ke;let ee="";I=()=>{R.dispose(),M.dispose(),b.dispose(),Y.destroy()};const ce=t.createBindGroup({layout:$.getBindGroupLayout(0),entries:[{binding:0,resource:f.createView()},{binding:1,resource:{buffer:p}},{binding:2,resource:Y.createView()},{binding:3,resource:t.createSampler({magFilter:"linear",minFilter:"linear"})}]}),P=()=>{if(o.signal.aborted||!t||!p)return;i.width=Math.min(960,Math.max(2,i.clientWidth)),i.height=Math.min(540,Math.max(2,Math.round(i.width*i.clientHeight/Math.max(1,i.clientWidth))));const e=A.current,r=i.width*.5/i.height,n=Math.max(e.verticalFov,e.charts?L.radToDeg(2*Math.atan(.04/r)):0),s=[n,r,e.sunHour,R.skyReady].join("/");if(s!==ee){ee=s,l.fov=n,l.aspect=r,l.updateProjectionMatrix(),l.updateMatrixWorld();const ue=new Date(Date.UTC(2026,8,14,Math.floor(e.sunHour),Math.round(e.sunHour%1*60))),pe=R.evaluate(ue,{longitude:g[0],latitude:g[1],altitudeMeters:_+v[0]},void 0,{observer:{longitude:g[0],latitude:g[1],altitudeMeters:0},scenePosition:new he});M.update(pe.skyFrame,R.skyTextures),M.updateViewCamera(l),M.updateObserverScenePosition(l.position),b.render(F,l),t.queue.copyExternalImageToTexture({source:b.domElement},{texture:Y},{width:512,height:256})}t.queue.writeBuffer(p,0,new Float32Array([i.width,i.height,z,j,_+v[0],0,L.degToRad(n),B,h.heightMeters,h.groundNormalHeightMeters+v[1],A.current.steps,0,e.temperature,e.pressure,e.lapse,e.inversion,e.layer,e.depth,e.visibility,e.charts?1:0]));const te=t.createCommandEncoder(),D=te.beginRenderPass({colorAttachments:[{view:C.getCurrentTexture().createView(),loadOp:"clear",storeOp:"store",clearValue:{r:0,g:0,b:0,a:1}}]});D.setPipeline($),D.setBindGroup(0,ce),D.draw(3),D.end(),t.queue.submit([te.finish()])};N.current=P,R.ensureSky(()=>{o.signal.aborted||P()}),k=new ResizeObserver(P),k.observe(i),P(),T(`${Q} source tiles · 0.5 MiB height texture · ${Math.round(z/(u-1))} × ${Math.round(2*j/(a-1))} m samples · render-on-change only`)})().catch(S=>{o.signal.aborted||T(String(S))}),()=>{o.abort(),N.current=()=>{},k==null||k.disconnect(),W(),I(),f==null||f.destroy(),p==null||p.destroy(),t==null||t.destroy()}},[]),c.jsxs("div",{style:{height:"100vh",display:"flex",flexDirection:"column",background:"#15202b",color:"white",font:"13px system-ui"},children:[c.jsxs("header",{style:{padding:8},children:[c.jsx("strong",{children:"Experimental WebGPU · Toelleturm → Nordhelle"}),c.jsx("div",{children:"Left: straight rays. Right: layered dry-air optical density, hydrostatic pressure approximation and temperature gradient. Presets are illustrative, not measured Wuppertal weather. Both: addon sky + approximate RGB extinction."}),c.jsx("div",{children:le}),d.preset==="ideal"&&c.jsx("div",{children:"Ideal upper bound: extinction disabled, refraction retained. Not attainable weather or a universal maximum viewing distance."}),c.jsx("div",{children:"100 m sRGB primary/secondary + black/white charts every 5 km (5–40 km), disjoint angular slots. Pressure is at observer height; layer height is ellipsoidal. Sun hour UTC."}),c.jsx("div",{children:"Real raster corridor; simplified cylindrical WDR tower. Constant-radius Earth, linear datum interpolation. 10 cm vertical accuracy NOT established; NoData and unsampled ridges are not visibility proof."})]}),c.jsx("canvas",{ref:O,style:{flex:1,minHeight:0,width:"100%",objectFit:"fill"}}),c.jsx("footer",{style:{padding:6},children:"Geobasis NRW · GCG2016 · © OpenStreetMap contributors · resource landmark provenance. No main-loader modifications."})]})},Ie={title:"Terrain and Atmosphere/Terrain Horizon",id:"terrain-and-atmosphere-refraction-webgpu",component:ze,parameters:{layout:"fullscreen"},args:{preset:"mixed",...oe.mixed,charts:!0,sunHour:12,verticalFov:4,steps:512},argTypes:{preset:{control:"select",options:["ideal","mixed","inversion","haze","custom"]},temperature:{control:{type:"range",min:-10,max:35,step:1},if:{arg:"preset",eq:"custom"}},pressure:{control:{type:"range",min:930,max:1030,step:1},if:{arg:"preset",eq:"custom"}},lapse:{control:{type:"range",min:-15,max:5,step:.5},if:{arg:"preset",eq:"custom"}},inversion:{control:{type:"range",min:-5,max:10,step:.5},if:{arg:"preset",eq:"custom"}},layer:{control:{type:"range",min:200,max:1500,step:10},if:{arg:"preset",eq:"custom"}},depth:{control:{type:"range",min:20,max:400,step:10},if:{arg:"preset",eq:"custom"}},visibility:{control:{type:"range",min:1e3,max:15e4,step:1e3},if:{arg:"preset",eq:"custom"}},charts:{control:"boolean"},sunHour:{control:{type:"range",min:4,max:20,step:.25}},verticalFov:{control:{type:"range",min:1,max:4,step:.1}},steps:{control:"inline-radio",options:[128,256,512,1024]}}},U={name:"Refraction · WebGPU experiment"};var ie,ae,ne;U.parameters={...U.parameters,docs:{...(ie=U.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  name: "Refraction · WebGPU experiment"
}`,...(ne=(ae=U.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};const Ve=["Refraction"];export{U as Refraction,Ve as __namedExportsOrder,Ie as default};
