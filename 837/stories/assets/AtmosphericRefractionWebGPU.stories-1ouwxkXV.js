import{j as u}from"./jsx-runtime-DNp_qQjF.js";import{r as w}from"./index-CSJjS6Ct.js";import{j as ie,k as L,u as ge,aF as he,S as ve,v as se,P as ye,V as xe}from"./three.module-ChcGQZK5.js";import"./wms-uhWQECSC.js";import{N as be,c as we,p as Te,l as Re,b as ke,A as Me,a as Ee}from"./reference-surface-frame-Biz1pD2S.js";import{N as Se}from"./terrain-CDUojVZ_.js";import{E as le,h as ze}from"./camera-local-mercator-fit-TrXujZmM.js";import"./angles-DdEU-Mjq.js";import{a as Ge}from"./raster-dem-terrain-tile-source-DoPlsW9a.js";import"./clamp-co6UzHBn.js";import"./index-tR1Ti_vO.js";import"./maplibre-gl-BvLDYGIs.js";import"./iframe-k7RAVkdg.js";import"./pi-MErR2jrQ.js";import"./raster-dem-tile-smTnDsnN.js";const ue={ideal:{temperature:15,pressure:970,lapse:-6.5,inversion:0,layer:450,depth:100,visibility:1e12},mixed:{temperature:15,pressure:970,lapse:-6.5,inversion:0,layer:450,depth:100,visibility:8e4},inversion:{temperature:5,pressure:990,lapse:-6.5,inversion:5,layer:450,depth:100,visibility:25e3},haze:{temperature:24,pressure:975,lapse:-6.5,inversion:2,layer:600,depth:150,visibility:12e3},custom:{temperature:15,pressure:970,lapse:-6.5,inversion:0,layer:450,depth:100,visibility:8e4}},U=le.toFixed(1),De=`
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
    let height=y+previousZ*previousZ/(2*${U});
    let bend=select(0.0,curvature(height),right);
    y+=slopeY*step+0.5*bend*step*step;slopeY+=bend*step;
    if(settings.charts>0.5){
      chartSlope=-0.03418;
      for(var c=1u;c<=8u;c++){
        let d=f32(c)*5000.0;let angularWidth=100.0/d;
        let center=chartSlope+angularWidth*0.5;
        if(previousZ<d && z>=d && abs(slope.x-center)<angularWidth*0.5){
          let ground=heightAt(center*d,d);
          let centerHeight=max(settings.eye+100.0,ground+80.0)-d*d/(2*${U});
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
      let base=settings.towerBase-d*d/(2*${U});
      let radius=4.2;
      let peak=settings.towerHeight;
      if(abs(slope.x*d)<radius && rayY>=base && rayY<=base+peak){return filtered(vec3f(0.65,0.68,0.72),d,sky);}
    }
    let h=heightAt(slope.x*z,z);
    if(h > -1000 && y<h-z*z/(2*${U})){
      return filtered(mix(vec3f(0.12,0.22,0.13),vec3f(0.65,0.61,0.42),clamp(h/900,0.0,1.0)),z,sky);
    }
    previousZ=z;
  }
  return vec4f(sky,1);
}
`,ce=d=>{const O=w.useRef(null),[pe,T]=w.useState("Initializing WebGPU…"),q=w.useRef(d);q.current={...d,...d.preset==="custom"?{}:ue[d.preset]};const N=w.useRef(()=>{});return w.useEffect(()=>N.current(),[d]),w.useEffect(()=>{const s=O.current;if(!s)return;const o=new AbortController;let t,m,p,R,W=()=>{},$=()=>{};return(async()=>{if(!navigator.gpu){T("WebGPU unavailable in this browser. No fallback renderer started.");return}const E=await navigator.gpu.requestAdapter();if(!E)throw new Error("No WebGPU adapter available");if(t=await E.requestDevice(),o.signal.aborted){t.destroy();return}t.lost.then(e=>{o.signal.aborted||T(`WebGPU device lost: ${e.message}`)});const _=s.getContext("webgpu");if(!_)throw new Error("No WebGPU canvas context");const V=navigator.gpu.getPreferredCanvasFormat();_.configure({device:t,format:V,alphaMode:"opaque"});const C=t.createShaderModule({code:De}),Z=(await C.getCompilationInfo()).messages.filter(e=>e.type==="error");if(Z.length)throw new Error(Z.map(e=>e.message).join("; "));const K=await t.createRenderPipelineAsync({layout:"auto",vertex:{module:C,entryPoint:"vertex"},fragment:{module:C,entryPoint:"fragment",targets:[{format:V}]},primitive:{topology:"triangle-list"}});if(o.signal.aborted)return;const f=await Ge(Se,{maxCacheBytes:32*1024**2,meshSegments:16});if(W=()=>f.release(),o.signal.aborted){W();return}const g=[7.20158,51.25656],h=be[0],H=361.3477,v=await ze([g,[h.longitudeDegrees,h.latitudeDegrees]]),X=we(g,le),S=Te(X,h.longitudeDegrees,h.latitudeDegrees,0,Ee.WGS84_ECEF),B=Math.hypot(S.x,S.z),y=new ie(S.x,S.z).normalize(),J=new ie(-y.y,y.x),a=128,c=1024,z=B+4e3,j=2500,Q=new Float32Array(a*c).fill(-1e4),x=Array.from({length:a*c},(e,r)=>{const n=Math.floor(r/a)/(c-1)*z,i=(r%a/(a-1)*2-1)*j;return Re(X,y.x*n+J.x*i,y.y*n+J.y*i)}),G=[x[0],x[a-1],x[(c-1)*a],x[c*a-1]],F=f.getTileGridIdsForBounds({west:Math.min(...G.map(e=>e[0])),east:Math.max(...G.map(e=>e[0])),south:Math.min(...G.map(e=>e[1])),north:Math.max(...G.map(e=>e[1]))},10).filter(e=>f.getTileDataAvailable(e)).map(e=>({id:e,bounds:f.getTileBounds(e),samples:[]}));x.forEach((e,r)=>{const n=F.find(i=>e[0]>=i.bounds.west&&e[0]<=i.bounds.east&&e[1]>=i.bounds.south&&e[1]<=i.bounds.north);n==null||n.samples.push(r)});let ee=0;for(const e of F.filter(r=>r.samples.length).slice(0,32)){if(o.signal.aborted)return;T(`Loading terrain corridor ${++ee}/${Math.min(32,F.length)}…`),await f.requestTile(e.id,o.signal,2);for(const r of e.samples){const n=x[r],i=f.sampleHeight(n[0],n[1]);i!==void 0&&i>-1e3&&(Q[r]=i+L.lerp(v[0],v[1],Math.min(1,Math.floor(r/a)/(c-1)*z/B)))}await new Promise(r=>setTimeout(r,0))}if(o.signal.aborted)return;m=t.createTexture({size:[a,c],format:"r32float",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST}),t.queue.writeTexture({texture:m},Q,{bytesPerRow:a*4},{width:a,height:c}),p=t.createBuffer({size:80,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});const I=t.createTexture({size:[512,256],format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST|GPUTextureUsage.RENDER_ATTACHMENT}),b=new ge({alpha:!1,preserveDrawingBuffer:!0});b.setSize(512,256),b.toneMapping=he,b.toneMappingExposure=2;const Y=new ve;Y.background=new se("#7895b0");const l=new ye(4,2,1,1e5);l.position.set(0,H+v[0],0),l.lookAt(y.x*1e3,l.position.y-1.74533,y.y*1e3);const k=ke(new se("#556044"));Y.add(k.mesh);const M=new Me;let te="";$=()=>{M.dispose(),k.dispose(),b.dispose(),I.destroy()};const de=t.createBindGroup({layout:K.getBindGroupLayout(0),entries:[{binding:0,resource:m.createView()},{binding:1,resource:{buffer:p}},{binding:2,resource:I.createView()},{binding:3,resource:t.createSampler({magFilter:"linear",minFilter:"linear"})}]}),D=()=>{if(o.signal.aborted||!t||!p)return;s.width=Math.min(960,Math.max(2,s.clientWidth)),s.height=Math.min(540,Math.max(2,Math.round(s.width*s.clientHeight/Math.max(1,s.clientWidth))));const e=q.current,r=s.width*.5/s.height,n=Math.max(e.verticalFov,e.charts?L.radToDeg(2*Math.atan(.04/r)):0),i=[n,r,e.sunHour,M.skyReady].join("/");if(i!==te){te=i,l.fov=n,l.aspect=r,l.updateProjectionMatrix(),l.updateMatrixWorld();const me=new Date(Date.UTC(2026,8,14,Math.floor(e.sunHour),Math.round(e.sunHour%1*60))),fe=M.evaluate(me,{longitude:g[0],latitude:g[1],altitudeMeters:H+v[0]},void 0,{observer:{longitude:g[0],latitude:g[1],altitudeMeters:0},scenePosition:new xe});k.update(fe.skyFrame,M.skyTextures),k.updateViewCamera(l),k.updateObserverScenePosition(l.position),b.render(Y,l),t.queue.copyExternalImageToTexture({source:b.domElement},{texture:I},{width:512,height:256})}t.queue.writeBuffer(p,0,new Float32Array([s.width,s.height,z,j,H+v[0],0,L.degToRad(n),B,h.heightMeters,h.groundNormalHeightMeters+v[1],q.current.steps,0,e.temperature,e.pressure,e.lapse,e.inversion,e.layer,e.depth,e.visibility,e.charts?1:0]));const re=t.createCommandEncoder(),P=re.beginRenderPass({colorAttachments:[{view:_.getCurrentTexture().createView(),loadOp:"clear",storeOp:"store",clearValue:{r:0,g:0,b:0,a:1}}]});P.setPipeline(K),P.setBindGroup(0,de),P.draw(3),P.end(),t.queue.submit([re.finish()])};N.current=D,M.ensureSky(()=>{o.signal.aborted||D()}),R=new ResizeObserver(D),R.observe(s),D(),T(`${ee} source tiles · 0.5 MiB height texture · ${Math.round(z/(c-1))} × ${Math.round(2*j/(a-1))} m samples · render-on-change only`)})().catch(E=>{o.signal.aborted||T(String(E))}),()=>{o.abort(),N.current=()=>{},R==null||R.disconnect(),W(),$(),m==null||m.destroy(),p==null||p.destroy(),t==null||t.destroy()}},[]),u.jsxs("div",{style:{height:"100vh",display:"flex",flexDirection:"column",background:"#15202b",color:"white",font:"13px system-ui"},children:[u.jsxs("header",{style:{padding:8},children:[u.jsx("strong",{children:"Experimental WebGPU · Toelleturm → Nordhelle"}),u.jsx("div",{children:"Left: straight rays. Right: layered dry-air optical density, hydrostatic pressure approximation and temperature gradient. Presets are illustrative, not measured Wuppertal weather. Both: addon sky + approximate RGB extinction."}),u.jsx("div",{children:pe}),d.preset==="ideal"&&u.jsx("div",{children:"Ideal upper bound: extinction disabled, refraction retained. Not attainable weather or a universal maximum viewing distance."}),u.jsx("div",{children:"100 m sRGB primary/secondary + black/white charts every 5 km (5–40 km), disjoint angular slots. Pressure is at observer height; layer height is ellipsoidal. Sun hour UTC."}),u.jsx("div",{children:"Real raster corridor; simplified cylindrical WDR tower. Constant-radius Earth, linear datum interpolation. 10 cm vertical accuracy NOT established; NoData and unsampled ridges are not visibility proof."})]}),u.jsx("canvas",{ref:O,style:{flex:1,minHeight:0,width:"100%",objectFit:"fill"}}),u.jsx("footer",{style:{padding:6},children:"Geobasis NRW · GCG2016 · © OpenStreetMap contributors · resource landmark provenance. No main-loader modifications."})]})};ce.__docgenInfo={description:"",methods:[],displayName:"RefractionExperiment",props:{preset:{required:!0,tsType:{name:"union",raw:"keyof typeof presets",elements:[{name:"literal",value:"ideal"},{name:"literal",value:"mixed"},{name:"literal",value:"inversion"},{name:"literal",value:"haze"},{name:"literal",value:"custom"}]},description:""},temperature:{required:!0,tsType:{name:"number"},description:""},pressure:{required:!0,tsType:{name:"number"},description:""},lapse:{required:!0,tsType:{name:"number"},description:""},inversion:{required:!0,tsType:{name:"number"},description:""},layer:{required:!0,tsType:{name:"number"},description:""},depth:{required:!0,tsType:{name:"number"},description:""},visibility:{required:!0,tsType:{name:"number"},description:""},charts:{required:!0,tsType:{name:"boolean"},description:""},sunHour:{required:!0,tsType:{name:"number"},description:""},verticalFov:{required:!0,tsType:{name:"number"},description:""},steps:{required:!0,tsType:{name:"number"},description:""}}};const Ze={title:"Terrain and Atmosphere/Terrain Horizon",id:"terrain-and-atmosphere-refraction-webgpu",component:ce,parameters:{layout:"fullscreen"},args:{preset:"mixed",...ue.mixed,charts:!0,sunHour:12,verticalFov:4,steps:512},argTypes:{preset:{control:"select",options:["ideal","mixed","inversion","haze","custom"]},temperature:{control:{type:"range",min:-10,max:35,step:1},if:{arg:"preset",eq:"custom"}},pressure:{control:{type:"range",min:930,max:1030,step:1},if:{arg:"preset",eq:"custom"}},lapse:{control:{type:"range",min:-15,max:5,step:.5},if:{arg:"preset",eq:"custom"}},inversion:{control:{type:"range",min:-5,max:10,step:.5},if:{arg:"preset",eq:"custom"}},layer:{control:{type:"range",min:200,max:1500,step:10},if:{arg:"preset",eq:"custom"}},depth:{control:{type:"range",min:20,max:400,step:10},if:{arg:"preset",eq:"custom"}},visibility:{control:{type:"range",min:1e3,max:15e4,step:1e3},if:{arg:"preset",eq:"custom"}},charts:{control:"boolean"},sunHour:{control:{type:"range",min:4,max:20,step:.25}},verticalFov:{control:{type:"range",min:1,max:4,step:.1}},steps:{control:"inline-radio",options:[128,256,512,1024]}}},A={name:"Refraction · WebGPU experiment"};var ae,ne,oe;A.parameters={...A.parameters,docs:{...(ae=A.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  name: "Refraction · WebGPU experiment"
}`,...(oe=(ne=A.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};const Ke=["Refraction"];export{A as Refraction,Ke as __namedExportsOrder,Ze as default};
