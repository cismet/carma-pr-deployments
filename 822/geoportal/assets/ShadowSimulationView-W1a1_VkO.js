const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/shadow-projection-debug-publisher-BVlfruS1.js","assets/vendor-react-core-DEDd919A.js","assets/vendor-ui-DQOUGosH.js","assets/index-ymN7IhDn.js","assets/vendor-ui-icons-Ckzirxsv.js","assets/vendor-cismap-CfFyEHRr.js","assets/vendor-leaflet-BbYkptA6.js","assets/vendor-cismap-BxSQKlIf.css","assets/vendor-cesium-COY8x_Hs.js","assets/vendor-maplibre-ojH_DVgs.js","assets/index-4p36kYlU.css","assets/shadow-sun-vector-Cjh8_hvV.js","assets/ShadowProjectionDebugView-BCgRWoER.js","assets/ViewStateVisualizer-Ca5Gs2Ux.js","assets/ShadowSimulationDisplaySettingsPanel-CYMb2_gb.js","assets/ShadowSimulationCurveSettings-BXbyJ8se.js"])))=>i.map(i=>d[i]);
import{r as k,d as Kc}from"./vendor-react-core-DEDd919A.js";import{O as Xc,d as $c}from"./vendor-ui-DQOUGosH.js";import{b as Pr,ab as Ei,ac as Jt,ad as Or,ae as Qc,af as yo,c as Br,ag as es,ah as te,ai as ke,aj as je,ak as wt,al as Nr,am as Ce,an as ir,ao as Bt,a1 as So,X as wo,_ as Zc,a3 as ts,a4 as er,h as Jc,ap as _o,aq as _e,ar as Xt,as as $t,I as z,at as Ur,au as Q,av as lt,V as x,aw as el,d as Pe,ax as xo,ay as tl,az as rl,aA as To,aB as I,aC as Ai,aD as Mo,O as rs,aE as bo,aF as $s,k as is,aG as il,aH as Nn,aI as Qs,aJ as ns,aK as nl,aL as sl,aM as Zs,aN as al,aO as ol,aP as cl,aQ as Ro,aR as Ct,aS as ll,aT as Eo,J as Js,aU as Ye,aV as ul,D as Ao,aW as dl,j as hl,aX as rn,aY as ml,aZ as fl,a_ as mi,a$ as Co,b0 as Qt,b1 as pl,b2 as Ln,b3 as ss,b4 as Io,b5 as gl,b6 as vl,b7 as tr,b8 as yl,b9 as Sl,ba as ea,bb as wl,bc as _l,bd as Lt,be as as,bf as Hr,bg as gi,G as os,aa as He,bh as ei,bi as xl,bj as Do,bk as Tl,bl as nn,bm as ta,bn as Ml,bo as Po,w as bl,bp as be,bq as sn,br as an,bs as Rl,bt as Oo,bu as El,bv as Al,bw as on,bx as Cl,by as Il,bz as Dl,bA as cn,bB as ra,bC as Sr,bD as Pl,bE as Ol,t as vi,bF as Nl,bG as ia,bH as Ll,bI as Fl,bJ as Bl,a0 as Ul,bK as Hl,bL as kl,bM as zl,bN as Vl,bO as na,a6 as sa,a8 as Wl}from"./index-ymN7IhDn.js";import{F as Fn,bc as Gl,bi as jl,z as Yl}from"./vendor-ui-icons-Ckzirxsv.js";import{a as ql}from"./vendor-maplibre-ojH_DVgs.js";import"./vendor-cismap-CfFyEHRr.js";import"./vendor-leaflet-BbYkptA6.js";const aa=20;class Kl{constructor(e,t=256*1024**2){this.renderer=e,this.maximumBytes=t,this.quad.frustumCulled=!1,this.scene.add(this.quad)}target=null;key=null;broken=!1;captures=0;reuses=0;scene=new Pr;camera=new Ei;material=new Jt({glslVersion:Or,uniforms:{color:{value:null},depth:{value:null}},vertexShader:`out vec2 uvCopy;
      void main() { uvCopy = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`,fragmentShader:`
      layout(location = 0) out highp vec4 outputColor;
      in vec2 uvCopy;
      uniform sampler2D color;
      uniform sampler2D depth;
      void main() {
        vec4 value = texture(color, uvCopy);
        if (value.a == 0.0) discard;
        #ifdef TONE_MAPPING
          value.rgb = toneMapping(value.rgb);
        #endif
        outputColor = linearToOutputTexel(value);
        // Offscreen capture uses [0,1]; restore the host framebuffer's actual
        // depth range, including MapLibre's reserved overlay range.
        gl_FragDepth = mix(gl_DepthRange.near, gl_DepthRange.far, texture(depth, uvCopy).r);
      }`,depthTest:!0,depthFunc:Qc,depthWrite:!0,transparent:!0,blending:yo});quad=new Br(new es(2,2),this.material);get stats(){return{captures:this.captures,reuses:this.reuses,bytes:this.target?this.target.width*this.target.height*aa:0,broken:this.broken}}invalidate(){this.key=null}render(e,t,i,n){var y,g;const s=this.renderer;if(this.broken||!Number.isInteger(t)||!Number.isInteger(i)||t<1||i<1||t>s.capabilities.maxTextureSize||i>s.capabilities.maxTextureSize||t*i*aa>this.maximumBytes||!s.extensions.has("EXT_color_buffer_float"))return this.releaseTarget(),n(),!1;const a=s.getRenderTarget(),o=s.getActiveCubeFace(),c=s.getActiveMipmapLevel(),l=s.getViewport(new te),u=s.getScissor(new te),d=s.getScissorTest(),f=s.getClearColor(new ke),p=s.getClearAlpha(),h=s.autoClear,v=()=>{s.setRenderTarget(a,o,c),s.setViewport(l),s.setScissor(u),s.setScissorTest(d),s.setClearColor(f,p),s.autoClear=h};try{if(((y=this.target)==null?void 0:y.width)!==t||((g=this.target)==null?void 0:g.height)!==i){this.releaseTarget(),this.target=new je(t,i,{type:wt,format:Nr,minFilter:Ce,magFilter:Ce,depthTexture:new ir(t,i,Bt),samples:0});try{s.initRenderTarget(this.target)}catch{return this.broken=!0,this.releaseTarget(),v(),n(),!1}}const T=JSON.stringify([e,t,i,s.outputColorSpace,s.toneMapping,s.toneMappingExposure,a==null?void 0:a.texture.colorSpace]);return s.autoClear=!1,this.key!==T?(this.key=null,s.setRenderTarget(this.target),s.setViewport(new te(0,0,t,i)),s.setScissorTest(!1),s.setClearColor(0,0),s.clear(!0,!0,!1),n(),this.key=T,this.captures+=1):this.reuses+=1,v(),s.autoClear=!1,this.material.uniforms.color.value=this.target.texture,this.material.uniforms.depth.value=this.target.depthTexture,s.render(this.scene,this.camera),!0}catch(T){throw this.invalidate(),T}finally{v()}}releaseTarget(){var e,t,i;(t=(e=this.target)==null?void 0:e.depthTexture)==null||t.dispose(),(i=this.target)==null||i.dispose(),this.target=null,this.key=null}dispose(){this.releaseTarget(),this.broken=!0,this.material.dispose(),this.quad.geometry.dispose()}}const oa=(r,e,t,i,n)=>{const s=i+e,a=Math.floor(s),o=s-a;if(a===0)return{dateState:r,yearDayProgress:o};const c=n?{year:r.year,dayOfYear:(r.dayOfYear-1+a)%So(r.year)+1}:Zc(r,a);return{dateState:(n?{...r,...c}:ts({...r,...c},t))??r,yearDayProgress:o}},ca=(r,e,t,i,n)=>{if(!n)return{dateState:{...r,minutes:(r.minutes+e)%1440},yearDayProgress:0};const s=wo(r,t),a=Math.ceil(s.sunriseMinutes),o=Math.floor(s.sunsetMinutes),l=(i&&(r.minutes<a||r.minutes>o)?a:r.minutes)+e;return{dateState:{...r,minutes:l>o?a+(i?(l-a)%Math.max(1,o-a):0):l},yearDayProgress:0}},Xl=(r,e,t,i,n,s={})=>{const a=e??t;if(!(r!=null&&r.enabled)||!r.isAnimating)return{dateState:a,yearDayProgress:n};const o=s.elapsedMs!==void 0,c=(r.animationMode??er.DAY)===er.YEAR,l=r.animationDaylightOnly!==!1,u=r.animationCycleSeconds;if(o&&u!==void 0&&u>0){const f=Math.max(0,s.elapsedMs??0)/(u*1e3);if(c)return oa(a,f*So(a.year),i,n,!0);const p=wo(a,i),h=l?Math.max(1,p.sunsetMinutes-p.sunriseMinutes):1440;return ca(a,f*h,i,!0,l)}const d=(r.animationSpeed??4)*(o?Math.max(0,s.elapsedMs??0)*60/1e3:1);return c?oa(a,d/(o?4:2),i,n,o):ca(a,d,i,o,l)},ti=3,$l=.5,at=64,la=.01,ua=(r,e,t)=>Math.min(t**2,Math.max(at**2,Math.floor(r!==void 0&&Number.isFinite(r)&&r>0?r:e))),da=(r,e)=>{const{mapSize:t,maxMapSize:i,elevationSine:n,sunDiscGuardMeters:s,groundTexelFit:a}=e,o=r.right-r.left+2*s,c=r.top-r.bottom+2*s,l=Math.max(la,Math.abs(n)),d=2*(a?ti+$l:ti);let f=t,p=t,h=!1,v=!1;const y=e.groundTexelTargetMeters;if(y!==void 0&&(!Number.isFinite(y)||y<=0))throw new RangeError("Shadow ground texel target must be positive and finite");if(y!==void 0){const Y=ne=>Math.max(at,2**Math.ceil(Math.log2(ne))),G=Y(o/y+d),B=Y(c/(y*l)+d);f=Math.min(i,G),p=Math.min(i,B),h=f<G||p<B}else if(a){const Y=o*l/c,G=e.mapTexelBudget??t*t,B=d*(Y+1),ne=G-d*d,A=2*ne/(B+Math.sqrt(B**2+4*Y*ne)),V=Y*A+d,re=A+d;h=V>i||re>i;const q=Math.max(o,c)/(t-d),le=Math.min(t,Math.max(at,Math.ceil((o/q+d)/at)*at)),ue=Math.min(t,Math.max(at,Math.ceil((c/q+d)/at)*at));v=V<le||re<ue;const xe=Math.min(Math.max(V,le,G/i),i,G/ue),P=ie=>Math.floor(ie/at+1e-9)*at;f=Math.max(le,P(xe)),p=Math.max(ue,P(Math.min(i,G/f)))}const g=e.mapDimensions;g&&(v||(v=f!==g.width||p!==g.height),f=g.width,p=g.height);const T=o/Math.max(1,f-d),R=c/Math.max(1,p-d),O=Math.max(T,R,Number.EPSILON),b=a?T:O,D=a?R:O,C=Math.round((r.left+r.right)/2/b)*b,E=Math.round((r.bottom+r.top)/2/D)*D,N=b*f,F=D*p;return{left:C-N/2,right:C+N/2,bottom:E-F/2,top:E+F/2,mapWidth:f,mapHeight:p,metersPerTexelX:b,metersPerTexelY:D,guardMetersX:b*ti,guardMetersY:D*ti,groundTexelWidthMeters:b,groundTexelHeightMeters:Math.abs(n)>Number.EPSILON?D/Math.abs(n):1/0,groundTexelFitLimited:a&&(h||v||Math.abs(n)<la)}},Ql=(r,e,t)=>{if(t<=0)return{planarMeters:0,depthMeters:0};const i=Math.sqrt(Math.max(0,1-e**2)),n=i>Math.sin(t)?Math.asin(Math.sin(t)/i):Math.PI;return{planarMeters:2*r*Math.sin(Math.min(Math.PI,n+t)/2),depthMeters:2*r*Math.sin(t/2)}},Lr=Jc(.53/2),Zl=Math.PI*(3-Math.sqrt(5)),Jl=(r,e)=>{const t=Math.max(1,Math.floor(e)),i=(Math.floor(r)%t+t)%t,n=Lr*Math.sqrt((i+.5)/t),s=i*Zl;return{angularRadius:n,tangentA:Math.cos(s)*n,tangentB:Math.sin(s)*n}},eu=r=>{const e=Math.floor(r/2)+1,t=r%2===0?1:-1;return[t*(e*.7548776662466927%1-.5),t*(e*.5698402909980532%1-.5)]},cs=(r,e,t)=>ts(e,t)??r,tu=(r,e,t,i)=>cs(r,{...r,year:e,dayOfYear:t},i),ru=(r,e,t=new Date)=>{const i=_o(t,r.timeZone);return cs(r,{...i,minutes:r.minutes},e)},iu=(r,e,t=new Date)=>{const i=_o(t,r.timeZone);return ts(i,e)??r},Bn=new WeakMap,No=r=>{let e=Bn.get(r);return e||(e={owners:new Set,listeners:new Set},Bn.set(r,e)),e},ng=r=>{const e=k.useMemo(()=>Symbol("shadow-time-control"),[r]),t=k.useCallback(i=>{if(!r)return;const n=No(r),s=n.owners.size>0;i?n.owners.add(e):n.owners.delete(e),s!==n.owners.size>0&&n.listeners.forEach(a=>a())},[r,e]);return k.useEffect(()=>()=>t(!1),[t]),t},nu=r=>{const e=k.useCallback(i=>{if(!r)return()=>{};const{listeners:n}=No(r);return n.add(i),()=>{n.delete(i)}},[r]),t=k.useCallback(()=>{var i;return r!==null&&(((i=Bn.get(r))==null?void 0:i.owners.size)??0)>0},[r]);return k.useSyncExternalStore(e,t,()=>!1)},su=(r,e)=>({latitude:(r==null?void 0:r.latitude)??e.latitude,longitude:(r==null?void 0:r.longitude)??e.longitude}),au=(r,e)=>r.latitude===e.latitude&&r.longitude===e.longitude,ha=(r,e,t)=>{const i=r==null?void 0:r.getCenter();return su(i?{latitude:i.lat,longitude:i.lng}:null,{latitude:e,longitude:t})},ou=(r,e,t)=>{const[i,n]=k.useState(()=>ha(r,e,t));return k.useEffect(()=>{const s=()=>{const a=ha(r,e,t);n(o=>au(o,a)?o:a)};if(s(),!!r)return r.on(_e.MOVE_END,s),()=>{r.off(_e.MOVE_END,s)}},[e,t,r]),i},wr="flex h-9 min-w-0 items-center justify-center whitespace-nowrap rounded-md border border-neutral-300 bg-white px-1 text-center text-sm text-neutral-800 transition-colors hover:border-amber-500 hover:text-amber-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/40",Lo="h-8 whitespace-nowrap border-r border-neutral-300 px-3 text-sm text-neutral-700 transition-colors last:border-r-0 hover:text-amber-700",sg=[{label:"120 FPS",value:Xt.FPS_120},{label:"60 FPS",value:Xt.FPS_60},{label:"30 FPS",value:Xt.FPS_30},{label:"Ultra",value:Xt.ULTRA}],ag=[{label:"0,25 px",value:.25},{label:"0,5 px",value:.5},{label:"1 px",value:1},{label:"2 px",value:2},{label:"4 px",value:4}],og=[{value:$t.HDR_16,label:"HDR · 16 Bit (Experiment)"},{value:$t.HDR_16_32,label:"HDR · 16/32 Bit (Standard)"},{value:$t.HDR_32,label:"HDR · 32 Bit (ohne MSAA)"},{value:$t.SDR_8,label:"SDR · 8 Bit (Experiment)"}],cu=r=>`${String(r).padStart(2,"0")}:00`,lu=(r,e,t)=>({"--shadow-range-progress":`${t>e?Math.max(0,Math.min(100,(r-e)/(t-e)*100)):0}%`});var uu={exports:{}};(function(r,e){(function(t,i){r.exports=i(Xc)})(Kc,function(t){function i(c){return c&&typeof c=="object"&&"default"in c?c:{default:c}}var n=i(t),s={s:"ein paar Sekunden",m:["eine Minute","einer Minute"],mm:"%d Minuten",h:["eine Stunde","einer Stunde"],hh:"%d Stunden",d:["ein Tag","einem Tag"],dd:["%d Tage","%d Tagen"],M:["ein Monat","einem Monat"],MM:["%d Monate","%d Monaten"],y:["ein Jahr","einem Jahr"],yy:["%d Jahre","%d Jahren"]};function a(c,l,u){var d=s[u];return Array.isArray(d)&&(d=d[l?0:1]),d.replace("%d",c)}var o={name:"de",weekdays:"Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),weekdaysShort:"So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),weekdaysMin:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),months:"Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sept._Okt._Nov._Dez.".split("_"),ordinal:function(c){return c+"."},weekStart:1,yearStart:4,formats:{LTS:"HH:mm:ss",LT:"HH:mm",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY HH:mm",LLLL:"dddd, D. MMMM YYYY HH:mm"},relativeTime:{future:"in %s",past:"vor %s",s:a,m:a,mm:a,h:a,hh:a,d:a,dd:a,M:a,MM:a,y:a,yy:a}};return n.default.locale(o,null,!0),o})})(uu);const du=({value:r,onChange:e})=>z.jsx("div",{role:"group","aria-label":"Animationsgeschwindigkeit",className:"flex shrink-0 overflow-hidden rounded-md border border-neutral-300",children:[1,4,12].map(t=>z.jsxs("button",{type:"button",className:`${Lo} px-3 ${r===t?"bg-amber-50 font-medium text-amber-700":"bg-white"}`,"aria-pressed":r===t,onClick:()=>e(t),children:[t,"×"]},t))}),hu=1e3/30,mu=250,fu=({dateState:r,setDateState:e,location:t,shadowState:i,onFrame:n,realtime:s=!1})=>{const a=k.useRef(null),o=k.useRef(null),c=k.useRef(r),l=k.useRef(r),u=k.useRef(e),d=k.useRef(n);l.current=r,u.current=e,d.current=n;const{animationMode:f,animationSpeed:p,animationCycleSeconds:h,animationDaylightOnly:v,enabled:y,isAnimating:g}=i,T=y&&(g??!1);return k.useEffect(()=>{const R=r!==c.current;if(c.current=r,!!R){if(r===o.current){T||(a.current=null);return}a.current=null}},[T,r]),k.useEffect(()=>{if(!T)return;const R={animationMode:f,animationSpeed:p,animationCycleSeconds:h,animationDaylightOnly:v,enabled:y,isAnimating:g};let O=0,b=performance.now(),D=b;const C=G=>{o.current=G,u.current(G)},E=G=>{const B=a.current??l.current,ne=Xl(R,B,B,t,O,s?{elapsedMs:G-D}:void 0);D=G,O=ne.yearDayProgress,a.current=ne.dateState,d.current(ne.dateState),G-b>=mu&&(b=G,C(ne.dateState))};let N=0;const F=G=>{E(G),N=requestAnimationFrame(F)},Y=s?void 0:window.setInterval(()=>E(performance.now()),hu);return s&&(N=requestAnimationFrame(F)),()=>{Y!==void 0&&window.clearInterval(Y),s&&cancelAnimationFrame(N);const G=a.current;G&&G!==o.current&&C(G)}},[T,f,p,h,v,y,g,t,s]),a},ma=new WeakMap,fa=(r,e,t,i,n="shadow-and-color")=>{const s=()=>t.render(r,i);if(e===void 0)return s(),!0;const a=r.getObjectById(e);if(!a)return!1;let o=ma.get(a);if(!o){const l=new Set;a.traverse(u=>l.add(u)),ma.set(a,l),o=l}if(n==="color-only"){const l=new Set;for(let d=a.parent;d;d=d.parent)l.add(d);const u=[];r.traverse(d=>{d.isMesh&&d.visible&&!o.has(d)&&!l.has(d)&&(u.push(d),d.visible=!1)});try{return s(),!0}finally{for(const d of u)d.visible=!0}}const c=t.renderBufferDirect;t.renderBufferDirect=function(...l){const[u,,,,d]=l;u===i&&d.isMesh&&!o.has(d)||c.apply(this,l)};try{return s(),!0}finally{t.renderBufferDirect=c}},pa=[[0,1],[1,3],[3,2],[2,0],[4,5],[5,7],[7,6],[6,4],[0,4],[1,5],[2,6],[3,7]],pu=({min:r,max:e})=>[new x(r.x,r.y,r.z),new x(e.x,r.y,r.z),new x(r.x,e.y,r.z),new x(e.x,e.y,r.z),new x(r.x,r.y,e.z),new x(e.x,r.y,e.z),new x(r.x,e.y,e.z),new x(e.x,e.y,e.z)],gu=r=>[r.coordinateSystem===el?0:-1,1].flatMap(t=>[-1,1].flatMap(i=>[-1,1].map(n=>new x(n,i,t).unproject(r)))),ln=(r,e,t)=>r.every(i=>i.distanceToPoint(e)>=-t),ga=(r,e,t)=>e.x>=r.min.x-t&&e.x<=r.max.x+t&&e.y>=r.min.y-t&&e.y<=r.max.y+t&&e.z>=r.min.z-t&&e.z<=r.max.z+t,Un=(r,e,t)=>{r.some(i=>i.distanceToSquared(e)<=t)||r.push(e)},va=(r,e,t,i,n,s)=>{const a=e.clone().sub(r);for(const o of t){const c=o.distanceToPoint(r),l=o.distanceToPoint(e),u=c-l;if(Math.abs(u)<=Number.EPSILON)continue;const d=c/u;if(d<0||d>1)continue;const f=r.clone().addScaledVector(a,d);i(f)&&Un(n,f,s)}},Fo=(r,e,t=1e-6)=>{if(e.isEmpty())return[];r.updateMatrixWorld(!0);const i=new Ur().setFromProjectionMatrix(new Q().multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),r.coordinateSystem,r.reversedDepth);if(!i.intersectsBox(e))return[];const n=t*t,s=pu(e),a=gu(r),o=[];for(const l of s)ln(i.planes,l,t)&&Un(o,l,n);for(const l of a)ga(e,l,t)&&Un(o,l,n);for(const[l,u]of pa)va(s[l],s[u],i.planes,d=>ln(i.planes,d,t),o,n);const c=[new lt(new x(1,0,0),-e.min.x),new lt(new x(-1,0,0),e.max.x),new lt(new x(0,1,0),-e.min.y),new lt(new x(0,-1,0),e.max.y),new lt(new x(0,0,1),-e.min.z),new lt(new x(0,0,-1),e.max.z)];for(const[l,u]of pa)va(a[l],a[u],c,d=>ga(e,d,t)&&ln(i.planes,d,t),o,n);return o},Bo=(r,e)=>{const t=kr(r).map(o=>new te(o.x,o.y,o.z,1).applyMatrix4(e));if(t.some(o=>o.w<=0))return new te(0,0,1,1);const i=Math.max(0,(Math.min(...t.map(o=>o.x/o.w))+1)/2),n=Math.max(0,(Math.min(...t.map(o=>o.y/o.w))+1)/2),s=Math.min(1,(Math.max(...t.map(o=>o.x/o.w))+1)/2),a=Math.min(1,(Math.max(...t.map(o=>o.y/o.w))+1)/2);return new te(i,n,Math.max(0,s-i),Math.max(0,a-n))},kr=r=>[r.min.x,r.max.x].flatMap(e=>[r.min.y,r.max.y].flatMap(t=>[r.min.z,r.max.z].map(i=>new x(e,t,i)))),Uo=(r,e,t)=>{const i=e.elements,n=kr(r).map(o=>new te(o.x,o.y,o.z,1).applyMatrix4(e)),s=Math.min(...n.map(o=>o.w));if(s<=0)return 1/0;let a=0;for(const[o,c]of[[0,t.x],[1,t.y]])for(let l=0;l<3;l+=1){const u=Math.max(...n.map(d=>Math.abs(i[l*4+o]*d.w-(o===0?d.x:d.y)*i[l*4+3])));a+=(c*.5*u/(s*s))**2}return Math.sqrt(a)},vu=(r,e,t,i)=>{if(!(i>0&&Number.isFinite(i))||!(t.x>0&&t.y>0))throw new RangeError("Shadow page projection requires a positive pixel target and viewport");const n=new Q().multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),s=new Set;for(const{id:o,bounds:c}of r){if(s.has(o)||c.isEmpty()||![...c.min.toArray(),...c.max.toArray()].every(Number.isFinite))throw new RangeError("Receiver cells require unique IDs and finite, nonempty bounds");s.add(o)}const a=new Ur().setFromProjectionMatrix(n);return r.filter(({bounds:o})=>a.intersectsBox(o)).map(o=>({...o,screenBounds:Bo(o.bounds,n),groundTexelTargetMeters:Math.max(1e-9,i/Uo(o.bounds,n,t))}))},yu=(r,e,t,i,n)=>r.clone().union(r.clone().translate(e.clone().normalize().multiplyScalar(t))).expandByScalar(2*t*Math.sin(i/2)+n),Su=(r,e)=>r.flatMap(({bounds:t})=>Fo(e,t).length>0?kr(t):[]),ri={WEST:"west",EAST:"east",SOUTH:"south",NORTH:"north"},_r=({bounds:r})=>(r.max.x-r.min.x)*(r.max.z-r.min.z),wu=(r,e)=>r.min.z===e.min.z&&r.max.z===e.max.z&&(r.max.x===e.min.x||e.max.x===r.min.x)||r.min.x===e.min.x&&r.max.x===e.max.x&&(r.max.z===e.min.z||e.max.z===r.min.z),_u=r=>{const e=new Map(r.map(i=>[i.id,i]));let t=!0;for(;t;){t=!1;for(const i of e.values()){if(Math.min(i.bounds.max.x-i.bounds.min.x,i.bounds.max.z-i.bounds.min.z)>=i.fragmentMergeWidthMeters)continue;const s=_r(i),a=[...e.values()].filter(o=>o!==i&&(_r(o)>s||_r(o)===s&&o.id<i.id)&&wu(i.bounds,o.bounds)).sort((o,c)=>_r(c)-_r(o)||(o.id<c.id?-1:o.id>c.id?1:0))[0];if(a){e.set(a.id,{...a,bounds:a.bounds.clone().union(i.bounds)}),e.delete(i.id),t=!0;break}}}return[...e.values()].map(({id:i,bounds:n})=>({id:i,bounds:n}))},un=r=>({west:r.min.x,east:r.max.x,south:r.min.z,north:r.max.z}),Ho=(r,e)=>r.west<e.east&&r.east>e.west&&r.south<e.north&&r.north>e.south,xu=(r,e,t)=>{if(!Ho(r,e))return[r];const i=Math.max(r.west,e.west),n=Math.min(r.east,e.east),s=Math.max(r.south,e.south),a=Math.min(r.north,e.north);return[{...r,east:i,side:ri.WEST},{...r,west:n,side:ri.EAST},{west:i,east:n,south:r.south,north:s,side:ri.SOUTH},{west:i,east:n,south:a,north:r.north,side:ri.NORTH}].filter(o=>o.west<o.east&&o.south<o.north).map(({side:o,...c})=>({...c,splitPath:[...r.splitPath,t,o]}))},Tu=r=>{const e=new Set;for(const{id:n,bounds:s}of r){if(e.has(n)||s.isEmpty()||![...s.min.toArray(),...s.max.toArray()].every(Number.isFinite))throw new RangeError("Receiver tiles require unique IDs and finite bounds");e.add(n)}const t=[...r].sort((n,s)=>n.id<s.id?-1:n.id>s.id?1:0);if(t.every(({receiverObjectId:n})=>n!==void 0))return t;const i=t.flatMap(({id:n,bounds:s},a)=>{const o=un(s);return o.west===o.east||o.south===o.north?[]:t.slice(0,a).reduce((l,u)=>l.flatMap(d=>xu(d,un(u.bounds),u.id)),[{...o,splitPath:[]}]).map(l=>{const u=t.reduce((d,f)=>Ho(l,un(f.bounds))?[Math.min(d[0],f.bounds.min.y),Math.max(d[1],f.bounds.max.y)]:d,[s.min.y,s.max.y]);return{fragmentMergeWidthMeters:l.splitPath.length===0?0:Math.max(.1,.01*Math.min(o.east-o.west,o.north-o.south)),id:l.splitPath.length===0?n:JSON.stringify([n,...l.splitPath]),bounds:new Pe(new x(l.west,u[0],l.south),new x(l.east,u[1],l.north))}})});return _u(i)},Mu=(r,e=16)=>{if(!Number.isInteger(e)||e<=0||r.length===0)return[];const i=r.reduce((c,l)=>c.union(l.bounds),new Pe).getCenter(new x),n=new Set(r.map(({id:c})=>c)),s=new Map;for(const c of r){const l=c.bounds.max.x-c.bounds.min.x;if(!(l>0&&Number.isFinite(l)))continue;const u=Math.round(c.bounds.min.x/l),d=Math.round(c.bounds.min.z/l);for(let f=-1;f<=1;f+=1)for(let p=-1;p<=1;p+=1){const h=`${l}:${u+f}:${d+p}`;n.has(h)||s.has(h)||s.set(h,{id:h,bounds:c.bounds.clone().translate(new x(f*l,0,p*l))})}}const a=Array.from({length:8},()=>[]);for(const c of s.values()){const l=c.bounds.getCenter(new x).sub(i),u=(Math.round(Math.atan2(l.z,l.x)/(Math.PI/4))+8)%8;a[u].push(c)}for(const c of a)c.sort((l,u)=>l.bounds.distanceToPoint(i)-u.bounds.distanceToPoint(i)||l.id.localeCompare(u.id));const o=[];for(let c=0;o.length<e;c+=1){const l=a.flatMap(u=>u[c]?[u[c]]:[]);if(l.length===0)break;o.push(...l.slice(0,e-o.length))}return o},bu=(r,e)=>{const t=r.getCenter(new x);let i=null,n=1/0;for(const s of e){const a=s.receiverBounds.distanceToPoint(t);a<n&&Number.isInteger(s.terrainLevel)&&(n=a,i=s.terrainLevel)}return i};/**
 * postprocessing v6.39.4 build Mon Jul 27 2026
 * https://github.com/pmndrs/postprocessing
 * Copyright 2015-2026 Raoul van Rüschen
 * @license Zlib
 */var Ru=(()=>{const r=new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),e=new Float32Array([0,0,2,0,0,2]),t=new bo;return t.setAttribute("position",new $s(r,3)),t.setAttribute("uv",new $s(e,2)),t})(),Eu=class Hn{static get fullscreenGeometry(){return Ru}constructor(e="Pass",t=new Pr,i=new rs){this.name=e,this.renderer=null,this.scene=t,this.camera=i,this.screen=null,this.rtt=!0,this.needsSwap=!0,this.needsDepthBlit=!1,this.needsDepthTexture=!1,this.enabled=!0}get renderToScreen(){return!this.rtt}set renderToScreen(e){if(this.rtt===e){const t=this.fullscreenMaterial;t!==null&&(t.needsUpdate=!0),this.rtt=!e}}set mainScene(e){}set mainCamera(e){}setRenderer(e){this.renderer=e}isEnabled(){return this.enabled}setEnabled(e){this.enabled=e}get fullscreenMaterial(){return this.screen!==null?this.screen.material:null}set fullscreenMaterial(e){let t=this.screen;t!==null?t.material=e:(t=new Br(Hn.fullscreenGeometry,e),t.frustumCulled=!1,this.scene===null&&(this.scene=new Pr),this.scene.add(t),this.screen=t)}getFullscreenMaterial(){return this.fullscreenMaterial}setFullscreenMaterial(e){this.fullscreenMaterial=e}getDepthTexture(){return null}setDepthTexture(e,t=To){}render(e,t,i,n,s){throw new Error("Render method not implemented!")}setSize(e,t){}initialize(e,t,i){}dispose(){for(const e of Object.keys(this)){const t=this[e];(t instanceof je||t instanceof Ai||t instanceof Mo||t instanceof Hn)&&this[e].dispose()}this.fullscreenMaterial!==null&&this.fullscreenMaterial.dispose()}},ko={NONE:0,DEPTH:1,CONVOLUTION:2},J={SKIP:9,SET:30,ADD:0,ALPHA:1,AVERAGE:2,COLOR:3,COLOR_BURN:4,COLOR_DODGE:5,DARKEN:6,DIFFERENCE:7,DIVIDE:8,DST:9,EXCLUSION:10,HARD_LIGHT:11,HARD_MIX:12,HUE:13,INVERT:14,INVERT_RGB:15,LIGHTEN:16,LINEAR_BURN:17,LINEAR_DODGE:18,LINEAR_LIGHT:19,LUMINOSITY:20,MULTIPLY:21,NEGATION:22,NORMAL:23,OVERLAY:24,PIN_LIGHT:25,REFLECT:26,SATURATION:27,SCREEN:28,SOFT_LIGHT:29,SRC:30,SUBTRACT:31,VIVID_LIGHT:32},Au="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Cu="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,src.a*opacity);}",Iu="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=(dst.rgb+src.rgb)*0.5;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Du="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.xy,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Pu="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=mix(step(0.0,b)*(1.0-min(vec3(1.0),(1.0-a)/max(b,1e-9))),vec3(1.0),step(1.0,a));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Ou="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=step(0.0,a)*mix(min(vec3(1.0),a/max(1.0-b,1e-9)),vec3(1.0),step(1.0,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Nu="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Lu="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=abs(dst.rgb-src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Fu="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb/max(src.rgb,1e-9);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Bu="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-2.0*dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Uu="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb,1.0);vec3 b=min(src.rgb,1.0);vec3 c=mix(2.0*a*b,1.0-2.0*(1.0-a)*(1.0-b),step(0.5,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Hu="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=step(1.0,dst.rgb+src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",ku="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.x,a.yz));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",zu="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Vu="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=src.rgb*max(1.0-dst.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Wu="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Gu="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",ju="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb+src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Yu="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(2.0*src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",qu="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.xy,b.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Ku="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Xu="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-abs(1.0-dst.rgb-src.rgb),0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",$u="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,opacity);}",Qu="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=2.0*src.rgb*dst.rgb;vec3 b=1.0-2.0*(1.0-src.rgb)*(1.0-dst.rgb);vec3 c=mix(a,b,step(0.5,dst.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Zu="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 c=mix(mix(src2,dst.rgb,step(0.5*dst.rgb,src.rgb)),max(src2-1.0,vec3(0.0)),step(dst.rgb,src2-1.0));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Ju="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb*dst.rgb/max(1.0-src.rgb,1e-9),1.0);vec3 c=mix(a,src.rgb,step(1.0,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",ed="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.x,b.y,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",td="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-min(dst.rgb*src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",rd="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 d=dst.rgb+(src2-1.0);vec3 w=step(0.5,src.rgb);vec3 a=dst.rgb-(1.0-src2)*dst.rgb*(1.0-dst.rgb);vec3 b=mix(d*(sqrt(dst.rgb)-dst.rgb),d*dst.rgb*((16.0*dst.rgb-12.0)*dst.rgb+3.0),w*(1.0-step(0.25,dst.rgb)));vec3 c=mix(a,b,w);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",id="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return src;}",nd="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",sd="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=mix(max(1.0-min((1.0-dst.rgb)/(2.0*src.rgb),1.0),0.0),min(dst.rgb/(2.0*(1.0-src.rgb)),1.0),step(0.5,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",ad=new Map([[J.ADD,Au],[J.ALPHA,Cu],[J.AVERAGE,Iu],[J.COLOR,Du],[J.COLOR_BURN,Pu],[J.COLOR_DODGE,Ou],[J.DARKEN,Nu],[J.DIFFERENCE,Lu],[J.DIVIDE,Fu],[J.DST,null],[J.EXCLUSION,Bu],[J.HARD_LIGHT,Uu],[J.HARD_MIX,Hu],[J.HUE,ku],[J.INVERT,zu],[J.INVERT_RGB,Vu],[J.LIGHTEN,Wu],[J.LINEAR_BURN,Gu],[J.LINEAR_DODGE,ju],[J.LINEAR_LIGHT,Yu],[J.LUMINOSITY,qu],[J.MULTIPLY,Ku],[J.NEGATION,Xu],[J.NORMAL,$u],[J.OVERLAY,Qu],[J.PIN_LIGHT,Zu],[J.REFLECT,Ju],[J.SATURATION,ed],[J.SCREEN,td],[J.SOFT_LIGHT,rd],[J.SRC,id],[J.SUBTRACT,nd],[J.VIVID_LIGHT,sd]]),od=class extends xo{constructor(r,e=1){super(),this._blendFunction=r,this.opacity=new I(e)}getOpacity(){return this.opacity.value}setOpacity(r){this.opacity.value=r}get blendFunction(){return this._blendFunction}set blendFunction(r){this._blendFunction=r,this.dispatchEvent({type:"change"})}getBlendFunction(){return this.blendFunction}setBlendFunction(r){this.blendFunction=r}getShaderCode(){return ad.get(this.blendFunction)}},cd=class extends xo{constructor(r,e,{attributes:t=ko.NONE,blendFunction:i=J.NORMAL,defines:n=new Map,uniforms:s=new Map,extensions:a=null,vertexShader:o=null}={}){super(),this.name=r,this.renderer=null,this.attributes=t,this.fragmentShader=e,this.vertexShader=o,this.defines=n,this.uniforms=s,this.extensions=a,this.blendMode=new od(i),this.blendMode.addEventListener("change",c=>this.setChanged()),this._inputColorSpace=tl,this._outputColorSpace=rl}get inputColorSpace(){return this._inputColorSpace}set inputColorSpace(r){this._inputColorSpace=r,this.setChanged()}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(r){this._outputColorSpace=r,this.setChanged()}set mainScene(r){}set mainCamera(r){}getName(){return this.name}setRenderer(r){this.renderer=r}getDefines(){return this.defines}getUniforms(){return this.uniforms}getExtensions(){return this.extensions}getBlendMode(){return this.blendMode}getAttributes(){return this.attributes}setAttributes(r){this.attributes=r,this.setChanged()}getFragmentShader(){return this.fragmentShader}setFragmentShader(r){this.fragmentShader=r,this.setChanged()}getVertexShader(){return this.vertexShader}setVertexShader(r){this.vertexShader=r,this.setChanged()}setChanged(){this.dispatchEvent({type:"change"})}setDepthTexture(r,e=To){}update(r,e,t){}setSize(r,e){}initialize(r,e,t){}dispose(){for(const r of Object.keys(this)){const e=this[r];(e instanceof je||e instanceof Ai||e instanceof Mo||e instanceof Eu)&&this[r].dispose()}}};const ld=new x;function zo(r,e,t=new x,i){const{x:n,y:s,z:a}=r,o=e.x,c=e.y,l=e.z,u=n*n*o,d=s*s*c,f=a*a*l,p=u+d+f,h=Math.sqrt(1/p);if(!Number.isFinite(h))return;const v=ld.copy(r).multiplyScalar(h);if(p<((i==null?void 0:i.centerTolerance)??.1))return t.copy(v);const y=v.multiply(e).multiplyScalar(2);let g=(1-h)*r.length()/(y.length()/2),T=0,R,O,b,D;do{g-=T,R=1/(1+g*o),O=1/(1+g*c),b=1/(1+g*l);const C=R*R,E=O*O,N=b*b,F=C*R,Y=E*O,G=N*b;D=u*C+d*E+f*N-1,T=D/((u*F*o+d*Y*c+f*G*l)*-2)}while(Math.abs(D)>1e-12);return t.set(n*R,s*O,a*b)}const ii=new x,ya=new x,Sa=new x,kn=class{constructor(e,t,i){this.radii=new x(e,t,i)}get minimumRadius(){return Math.min(this.radii.x,this.radii.y,this.radii.z)}get maximumRadius(){return Math.max(this.radii.x,this.radii.y,this.radii.z)}reciprocalRadii(e=new x){const{x:t,y:i,z:n}=this.radii;return e.set(1/t,1/i,1/n)}reciprocalRadiiSquared(e=new x){const{x:t,y:i,z:n}=this.radii;return e.set(1/t**2,1/i**2,1/n**2)}projectOnSurface(e,t=new x,i){return zo(e,this.reciprocalRadiiSquared(),t,i)}getSurfaceNormal(e,t=new x){return t.multiplyVectors(this.reciprocalRadiiSquared(ii),e).normalize()}getEastNorthUpVectors(e,t=new x,i=new x,n=new x){this.getSurfaceNormal(e,n),t.set(-e.y,e.x,0).normalize(),i.crossVectors(n,t).normalize()}getEastNorthUpFrame(e,t=new Q){const i=ii,n=ya,s=Sa;return this.getEastNorthUpVectors(e,i,n,s),t.makeBasis(i,n,s).setPosition(e)}getIntersection(e,t=new x){const i=this.reciprocalRadii(ii),n=ya.copy(i).multiply(e.origin),s=Sa.copy(i).multiply(e.direction),a=n.lengthSq(),o=s.lengthSq(),c=n.dot(s),l=c**2-o*(a-1);if(a===1)return t.copy(e.origin);if(a>1){if(c>=0||l<0)return;const u=Math.sqrt(l),d=(-c-u)/o,f=(-c+u)/o;return e.at(Math.min(d,f),t)}if(a<1){const u=c**2-o*(a-1),d=Math.sqrt(u),f=(-c+d)/o;return e.at(f,t)}if(c<0)return e.at(-c/o,t)}getOsculatingSphereCenter(e,t,i=new x){const n=this.radii.x**2,s=ii.set(e.x/n,e.y/n,e.z/this.radii.z**2).normalize();return i.copy(s.multiplyScalar(-t).add(e))}};kn.WGS84=new kn(6378137,6378137,6356752314245179e-9);let ut=kn;const ni=new x,wa=new x,Rr=class zn{constructor(e=0,t=0,i=0){this.longitude=e,this.latitude=t,this.height=i}set(e,t,i){return this.longitude=e,this.latitude=t,i!=null&&(this.height=i),this}clone(){return new zn(this.longitude,this.latitude,this.height)}copy(e){return this.longitude=e.longitude,this.latitude=e.latitude,this.height=e.height,this}equals(e){return e.longitude===this.longitude&&e.latitude===this.latitude&&e.height===this.height}setLongitude(e){return this.longitude=e,this}setLatitude(e){return this.latitude=e,this}setHeight(e){return this.height=e,this}normalize(){return this.longitude<zn.MIN_LONGITUDE&&(this.longitude+=Math.PI*2),this}setFromECEF(e,t){const i=((t==null?void 0:t.ellipsoid)??ut.WGS84).reciprocalRadiiSquared(ni),n=zo(e,i,wa,t);if(n==null)throw new Error(`Could not project position to ellipsoid surface: ${e.toArray()}`);const s=ni.multiplyVectors(n,i).normalize();this.longitude=Math.atan2(s.y,s.x),this.latitude=Math.asin(s.z);const a=ni.subVectors(e,n);return this.height=Math.sign(a.dot(e))*a.length(),this}toECEF(e=new x,t){const i=(t==null?void 0:t.ellipsoid)??ut.WGS84,n=ni.multiplyVectors(i.radii,i.radii),s=Math.cos(this.latitude),a=wa.set(s*Math.cos(this.longitude),s*Math.sin(this.longitude),Math.sin(this.latitude)).normalize();return e.multiplyVectors(n,a),e.divideScalar(Math.sqrt(a.dot(e))).add(a.multiplyScalar(this.height))}fromArray(e,t=0){return this.longitude=e[t],this.latitude=e[t+1],this.height=e[t+2],this}toArray(e=[],t=0){return e[t]=this.longitude,e[t+1]=this.latitude,e[t+2]=this.height,e}*[Symbol.iterator](){yield this.longitude,yield this.latitude,yield this.height}};Rr.MIN_LONGITUDE=-Math.PI,Rr.MAX_LONGITUDE=Math.PI,Rr.MIN_LATITUDE=-Math.PI/2,Rr.MAX_LATITUDE=Math.PI/2;let Vo=Rr;var ud="Invariant failed";function Wo(r,e){if(!r)throw new Error(ud)}class dd extends ns{load(e,t,i,n){const s=new nl(this.manager);s.setResponseType("arraybuffer"),s.setRequestHeader(this.requestHeader),s.setPath(this.path),s.setWithCredentials(this.withCredentials),s.load(e,a=>{Wo(a instanceof ArrayBuffer);try{t(a)}catch(o){n!=null?n(o):console.error(o),this.manager.itemError(e)}},i,n)}}const hd="This is not an object",md="This is not a Float16Array object",_a="This constructor is not a subclass of Float16Array",Go="The constructor property value is not an object",fd="Species constructor didn't return TypedArray object",pd="Derived constructor created TypedArray object which was too small length",Cr="Attempting to access detached ArrayBuffer",Vn="Cannot convert undefined or null to object",Wn="Cannot mix BigInt and other types, use explicit conversions",xa="@@iterator property is not callable",Ta="Reduce of empty array with no initial value",gd="The comparison function must be either a function or undefined",dn="Offset is out of bounds";function me(r){return(e,...t)=>Le(r,e,t)}function cr(r,e){return me(nr(r,e).get)}const{apply:Le,construct:Er,defineProperty:vd,get:hn,getOwnPropertyDescriptor:nr,getPrototypeOf:zr,has:Gn,ownKeys:jo,set:Ma,setPrototypeOf:Yo}=Reflect,yd=Proxy,{EPSILON:Sd,MAX_SAFE_INTEGER:ba,isFinite:qo,isNaN:sr}=Number,{iterator:dt,species:wd,toStringTag:ls,for:_d}=Symbol,ar=Object,{create:Ci,defineProperty:Vr,freeze:xd,is:Ra}=ar,jn=ar.prototype,Td=jn.__lookupGetter__?me(jn.__lookupGetter__):(r,e)=>{if(r==null)throw ve(Vn);let t=ar(r);do{const i=nr(t,e);if(i!==void 0)return _t(i,"get")?i.get:void 0}while((t=zr(t))!==null)},_t=ar.hasOwn||me(jn.hasOwnProperty),Ko=Array,Xo=Ko.isArray,Ii=Ko.prototype,Md=me(Ii.join),bd=me(Ii.push),Rd=me(Ii.toLocaleString),us=Ii[dt],Ed=me(us),{abs:Ad,trunc:$o}=Math,Di=ArrayBuffer,Cd=Di.isView,Qo=Di.prototype,Id=me(Qo.slice),Dd=cr(Qo,"byteLength"),Yn=typeof SharedArrayBuffer<"u"?SharedArrayBuffer:null,Pd=Yn&&cr(Yn.prototype,"byteLength"),ds=zr(Uint8Array),Od=ds.from,Ee=ds.prototype,Nd=Ee[dt],Ld=me(Ee.keys),Fd=me(Ee.values),Bd=me(Ee.entries),Ud=me(Ee.set),Ea=me(Ee.reverse),Hd=me(Ee.fill),kd=me(Ee.copyWithin),Aa=me(Ee.sort),xr=me(Ee.slice),zd=me(Ee.subarray),Re=cr(Ee,"buffer"),Ot=cr(Ee,"byteOffset"),ae=cr(Ee,"length"),Zo=cr(Ee,ls),Vd=Uint8Array,Ue=Uint16Array,Ca=(...r)=>Le(Od,Ue,r),hs=Uint32Array,Wd=Float32Array,Ut=zr([][dt]()),Pi=me(Ut.next),Gd=me(function*(){}().next),jd=zr(Ut),Yd=DataView.prototype,qd=me(Yd.getUint16),ve=TypeError,mn=RangeError,Jo=WeakSet,ec=Jo.prototype,Kd=me(ec.add),Xd=me(ec.has),Oi=WeakMap,ms=Oi.prototype,yi=me(ms.get),$d=me(ms.has),fs=me(ms.set),tc=new Oi,Qd=Ci(null,{next:{value:function(){const r=yi(tc,this);return Pi(r)}},[dt]:{value:function(){return this}}});function Ar(r){if(r[dt]===us&&Ut.next===Pi)return r;const e=Ci(Qd);return fs(tc,e,Ed(r)),e}const rc=new Oi,ic=Ci(jd,{next:{value:function(){const r=yi(rc,this);return Gd(r)},writable:!0,configurable:!0}});for(const r of jo(Ut))r!=="next"&&Vr(ic,r,nr(Ut,r));function Ia(r){const e=Ci(ic);return fs(rc,e,r),e}function Si(r){return r!==null&&typeof r=="object"||typeof r=="function"}function Da(r){return r!==null&&typeof r=="object"}function wi(r){return Zo(r)!==void 0}function qn(r){const e=Zo(r);return e==="BigInt64Array"||e==="BigUint64Array"}function Zd(r){try{return Xo(r)?!1:(Dd(r),!0)}catch{return!1}}function nc(r){if(Yn===null)return!1;try{return Pd(r),!0}catch{return!1}}function Jd(r){return Zd(r)||nc(r)}function Pa(r){return Xo(r)?r[dt]===us&&Ut.next===Pi:!1}function eh(r){return wi(r)?r[dt]===Nd&&Ut.next===Pi:!1}function si(r){if(typeof r!="string")return!1;const e=+r;return r!==e+""||!qo(e)?!1:e===$o(e)}const _i=_d("__Float16Array__");function th(r){if(!Da(r))return!1;const e=zr(r);if(!Da(e))return!1;const t=e.constructor;if(t===void 0)return!1;if(!Si(t))throw ve(Go);return Gn(t,_i)}const Kn=1/Sd;function rh(r){return r+Kn-Kn}const sc=6103515625e-14,ih=65504,ac=.0009765625,Oa=ac*sc,nh=ac*Kn;function sh(r){const e=+r;if(!qo(e)||e===0)return e;const t=e>0?1:-1,i=Ad(e);if(i<sc)return t*rh(i/Oa)*Oa;const n=(1+nh)*i,s=n-(n-i);return s>ih||sr(s)?t*(1/0):t*s}const oc=new Di(4),cc=new Wd(oc),lc=new hs(oc),et=new Ue(512),tt=new Vd(512);for(let r=0;r<256;++r){const e=r-127;e<-24?(et[r]=0,et[r|256]=32768,tt[r]=24,tt[r|256]=24):e<-14?(et[r]=1024>>-e-14,et[r|256]=1024>>-e-14|32768,tt[r]=-e-1,tt[r|256]=-e-1):e<=15?(et[r]=e+15<<10,et[r|256]=e+15<<10|32768,tt[r]=13,tt[r|256]=13):e<128?(et[r]=31744,et[r|256]=64512,tt[r]=24,tt[r|256]=24):(et[r]=31744,et[r|256]=64512,tt[r]=13,tt[r|256]=13)}function ot(r){cc[0]=sh(r);const e=lc[0],t=e>>23&511;return et[t]+((e&8388607)>>tt[t])}const ps=new hs(2048);for(let r=1;r<1024;++r){let e=r<<13,t=0;for(;!(e&8388608);)e<<=1,t-=8388608;e&=-8388609,t+=947912704,ps[r]=e|t}for(let r=1024;r<2048;++r)ps[r]=939524096+(r-1024<<13);const lr=new hs(64);for(let r=1;r<31;++r)lr[r]=r<<23;lr[31]=1199570944;lr[32]=2147483648;for(let r=33;r<63;++r)lr[r]=2147483648+(r-32<<23);lr[63]=3347054592;const uc=new Ue(64);for(let r=1;r<64;++r)r!==32&&(uc[r]=1024);function oe(r){const e=r>>10;return lc[0]=ps[uc[e]+(r&1023)]+lr[e],cc[0]}function St(r){const e=+r;return sr(e)||e===0?0:$o(e)}function fn(r){const e=St(r);return e<0?0:e<ba?e:ba}function ai(r,e){if(!Si(r))throw ve(hd);const t=r.constructor;if(t===void 0)return e;if(!Si(t))throw ve(Go);return t[wd]??e}function Ir(r){if(nc(r))return!1;try{return Id(r,0,0),!1}catch{}return!0}function Na(r,e){const t=sr(r),i=sr(e);if(t&&i)return 0;if(t)return 1;if(i||r<e)return-1;if(r>e)return 1;if(r===0&&e===0){const n=Ra(r,0),s=Ra(e,0);if(!n&&s)return-1;if(n&&!s)return 1}return 0}const gs=2,xi=new Oi;function Zt(r){return $d(xi,r)||!Cd(r)&&th(r)}function se(r){if(!Zt(r))throw ve(md)}function oi(r,e){const t=Zt(r),i=wi(r);if(!t&&!i)throw ve(fd);if(typeof e=="number"){let n;if(t){const s=X(r);n=ae(s)}else n=ae(r);if(n<e)throw ve(pd)}if(qn(r))throw ve(Wn)}function X(r){const e=yi(xi,r);if(e!==void 0){const n=Re(e);if(Ir(n))throw ve(Cr);return e}const t=r.buffer;if(Ir(t))throw ve(Cr);const i=Er(ce,[t,r.byteOffset,r.length],r.constructor);return yi(xi,i)}function La(r){const e=ae(r),t=[];for(let i=0;i<e;++i)t[i]=oe(r[i]);return t}const dc=new Jo;for(const r of jo(Ee)){if(r===ls)continue;const e=nr(Ee,r);_t(e,"get")&&typeof e.get=="function"&&Kd(dc,e.get)}const ah=xd({get(r,e,t){return si(e)&&_t(r,e)?oe(hn(r,e)):Xd(dc,Td(r,e))?hn(r,e):hn(r,e,t)},set(r,e,t,i){return si(e)&&_t(r,e)?Ma(r,e,ot(t)):Ma(r,e,t,i)},getOwnPropertyDescriptor(r,e){if(si(e)&&_t(r,e)){const t=nr(r,e);return t.value=oe(t.value),t}return nr(r,e)},defineProperty(r,e,t){return si(e)&&_t(r,e)&&_t(t,"value")&&(t.value=ot(t.value)),vd(r,e,t)}});class ce{constructor(e,t,i){let n;if(Zt(e))n=Er(Ue,[X(e)],new.target);else if(Si(e)&&!Jd(e)){let a,o;if(wi(e)){a=e,o=ae(e);const c=Re(e);if(Ir(c))throw ve(Cr);if(qn(e))throw ve(Wn);const l=new Di(o*gs);n=Er(Ue,[l],new.target)}else{const c=e[dt];if(c!=null&&typeof c!="function")throw ve(xa);c!=null?Pa(e)?(a=e,o=e.length):(a=[...e],o=a.length):(a=e,o=fn(a.length)),n=Er(Ue,[o],new.target)}for(let c=0;c<o;++c)n[c]=ot(a[c])}else n=Er(Ue,arguments,new.target);const s=new yd(n,ah);return fs(xi,s,n),s}static from(e,...t){const i=this;if(!Gn(i,_i))throw ve(_a);if(i===ce){if(Zt(e)&&t.length===0){const u=X(e),d=new Ue(Re(u),Ot(u),ae(u));return new ce(Re(xr(d)))}if(t.length===0)return new ce(Re(Ca(e,ot)));const c=t[0],l=t[1];return new ce(Re(Ca(e,function(u,...d){return ot(Le(c,this,[u,...Ar(d)]))},l)))}let n,s;const a=e[dt];if(a!=null&&typeof a!="function")throw ve(xa);if(a!=null)Pa(e)?(n=e,s=e.length):eh(e)?(n=e,s=ae(e)):(n=[...e],s=n.length);else{if(e==null)throw ve(Vn);n=ar(e),s=fn(n.length)}const o=new i(s);if(t.length===0)for(let c=0;c<s;++c)o[c]=n[c];else{const c=t[0],l=t[1];for(let u=0;u<s;++u)o[u]=Le(c,l,[n[u],u])}return o}static of(...e){const t=this;if(!Gn(t,_i))throw ve(_a);const i=e.length;if(t===ce){const s=new ce(i),a=X(s);for(let o=0;o<i;++o)a[o]=ot(e[o]);return s}const n=new t(i);for(let s=0;s<i;++s)n[s]=e[s];return n}keys(){se(this);const e=X(this);return Ld(e)}values(){se(this);const e=X(this);return Ia(function*(){for(const t of Fd(e))yield oe(t)}())}entries(){se(this);const e=X(this);return Ia(function*(){for(const[t,i]of Bd(e))yield[t,oe(i)]}())}at(e){se(this);const t=X(this),i=ae(t),n=St(e),s=n>=0?n:i+n;if(!(s<0||s>=i))return oe(t[s])}with(e,t){se(this);const i=X(this),n=ae(i),s=St(e),a=s>=0?s:n+s,o=+t;if(a<0||a>=n)throw mn(dn);const c=new Ue(Re(i),Ot(i),ae(i)),l=new ce(Re(xr(c))),u=X(l);return u[a]=ot(o),l}map(e,...t){se(this);const i=X(this),n=ae(i),s=t[0],a=ai(i,ce);if(a===ce){const c=new ce(n),l=X(c);for(let u=0;u<n;++u){const d=oe(i[u]);l[u]=ot(Le(e,s,[d,u,this]))}return c}const o=new a(n);oi(o,n);for(let c=0;c<n;++c){const l=oe(i[c]);o[c]=Le(e,s,[l,c,this])}return o}filter(e,...t){se(this);const i=X(this),n=ae(i),s=t[0],a=[];for(let l=0;l<n;++l){const u=oe(i[l]);Le(e,s,[u,l,this])&&bd(a,u)}const o=ai(i,ce),c=new o(a);return oi(c),c}reduce(e,...t){se(this);const i=X(this),n=ae(i);if(n===0&&t.length===0)throw ve(Ta);let s,a;t.length===0?(s=oe(i[0]),a=1):(s=t[0],a=0);for(let o=a;o<n;++o)s=e(s,oe(i[o]),o,this);return s}reduceRight(e,...t){se(this);const i=X(this),n=ae(i);if(n===0&&t.length===0)throw ve(Ta);let s,a;t.length===0?(s=oe(i[n-1]),a=n-2):(s=t[0],a=n-1);for(let o=a;o>=0;--o)s=e(s,oe(i[o]),o,this);return s}forEach(e,...t){se(this);const i=X(this),n=ae(i),s=t[0];for(let a=0;a<n;++a)Le(e,s,[oe(i[a]),a,this])}find(e,...t){se(this);const i=X(this),n=ae(i),s=t[0];for(let a=0;a<n;++a){const o=oe(i[a]);if(Le(e,s,[o,a,this]))return o}}findIndex(e,...t){se(this);const i=X(this),n=ae(i),s=t[0];for(let a=0;a<n;++a){const o=oe(i[a]);if(Le(e,s,[o,a,this]))return a}return-1}findLast(e,...t){se(this);const i=X(this),n=ae(i),s=t[0];for(let a=n-1;a>=0;--a){const o=oe(i[a]);if(Le(e,s,[o,a,this]))return o}}findLastIndex(e,...t){se(this);const i=X(this),n=ae(i),s=t[0];for(let a=n-1;a>=0;--a){const o=oe(i[a]);if(Le(e,s,[o,a,this]))return a}return-1}every(e,...t){se(this);const i=X(this),n=ae(i),s=t[0];for(let a=0;a<n;++a)if(!Le(e,s,[oe(i[a]),a,this]))return!1;return!0}some(e,...t){se(this);const i=X(this),n=ae(i),s=t[0];for(let a=0;a<n;++a)if(Le(e,s,[oe(i[a]),a,this]))return!0;return!1}set(e,...t){se(this);const i=X(this),n=St(t[0]);if(n<0)throw mn(dn);if(e==null)throw ve(Vn);if(qn(e))throw ve(Wn);if(Zt(e))return Ud(X(this),X(e),n);if(wi(e)){const c=Re(e);if(Ir(c))throw ve(Cr)}const s=ae(i),a=ar(e),o=fn(a.length);if(n===1/0||o+n>s)throw mn(dn);for(let c=0;c<o;++c)i[c+n]=ot(a[c])}reverse(){se(this);const e=X(this);return Ea(e),this}toReversed(){se(this);const e=X(this),t=new Ue(Re(e),Ot(e),ae(e)),i=new ce(Re(xr(t))),n=X(i);return Ea(n),i}fill(e,...t){se(this);const i=X(this);return Hd(i,ot(e),...Ar(t)),this}copyWithin(e,t,...i){se(this);const n=X(this);return kd(n,e,t,...Ar(i)),this}sort(e){se(this);const t=X(this),i=e!==void 0?e:Na;return Aa(t,(n,s)=>i(oe(n),oe(s))),this}toSorted(e){se(this);const t=X(this);if(e!==void 0&&typeof e!="function")throw new ve(gd);const i=e!==void 0?e:Na,n=new Ue(Re(t),Ot(t),ae(t)),s=new ce(Re(xr(n))),a=X(s);return Aa(a,(o,c)=>i(oe(o),oe(c))),s}slice(e,t){se(this);const i=X(this),n=ai(i,ce);if(n===ce){const h=new Ue(Re(i),Ot(i),ae(i));return new ce(Re(xr(h,e,t)))}const s=ae(i),a=St(e),o=t===void 0?s:St(t);let c;a===-1/0?c=0:a<0?c=s+a>0?s+a:0:c=s<a?s:a;let l;o===-1/0?l=0:o<0?l=s+o>0?s+o:0:l=s<o?s:o;const u=l-c>0?l-c:0,d=new n(u);if(oi(d,u),u===0)return d;const f=Re(i);if(Ir(f))throw ve(Cr);let p=0;for(;c<l;)d[p]=oe(i[c]),++c,++p;return d}subarray(e,t){se(this);const i=X(this),n=ai(i,ce),s=new Ue(Re(i),Ot(i),ae(i)),a=zd(s,e,t),o=new n(Re(a),Ot(a),ae(a));return oi(o),o}indexOf(e,...t){se(this);const i=X(this),n=ae(i);let s=St(t[0]);if(s===1/0)return-1;s<0&&(s+=n,s<0&&(s=0));for(let a=s;a<n;++a)if(_t(i,a)&&oe(i[a])===e)return a;return-1}lastIndexOf(e,...t){se(this);const i=X(this),n=ae(i);let s=t.length>=1?St(t[0]):n-1;if(s===-1/0)return-1;s>=0?s=s<n-1?s:n-1:s+=n;for(let a=s;a>=0;--a)if(_t(i,a)&&oe(i[a])===e)return a;return-1}includes(e,...t){se(this);const i=X(this),n=ae(i);let s=St(t[0]);if(s===1/0)return!1;s<0&&(s+=n,s<0&&(s=0));const a=sr(e);for(let o=s;o<n;++o){const c=oe(i[o]);if(a&&sr(c)||c===e)return!0}return!1}join(e){se(this);const t=X(this),i=La(t);return Md(i,e)}toLocaleString(...e){se(this);const t=X(this),i=La(t);return Rd(i,...Ar(e))}get[ls](){if(Zt(this))return"Float16Array"}}Vr(ce,"BYTES_PER_ELEMENT",{value:gs});Vr(ce,_i,{});Yo(ce,ds);const Ti=ce.prototype;Vr(Ti,"BYTES_PER_ELEMENT",{value:gs});Vr(Ti,dt,{value:Ti.values,writable:!0,configurable:!0});Yo(Ti,Ee);function oh(r,e,...t){return oe(qd(r,e,...Ar(t)))}function ch(r){return r instanceof Int8Array||r instanceof Uint8Array||r instanceof Uint8ClampedArray||r instanceof Int16Array||r instanceof Uint16Array||r instanceof Int32Array||r instanceof Uint32Array||r instanceof ce||r instanceof Float32Array||r instanceof Float64Array}let ci;function lh(){if(ci!=null)return ci;const r=new Uint32Array([268435456]);return ci=new Uint8Array(r.buffer,r.byteOffset,r.byteLength)[0]===0,ci}function uh(r,e,t,i=!0){if(i===lh())return new e(r);const n=Object.assign(new DataView(r),{getFloat16(a,o){return oh(this,a,o)}}),s=new e(n.byteLength/e.BYTES_PER_ELEMENT);for(let a=0,o=0;a<s.length;++a,o+=e.BYTES_PER_ELEMENT)s[a]=n[t](o,i);return s}const pn=(r,e)=>uh(r,ce,"getFloat16",e);class dh extends ns{load(e,t,i,n){const s=new dd(this.manager);s.setRequestHeader(this.requestHeader),s.setPath(this.path),s.setWithCredentials(this.withCredentials),s.load(e,a=>{try{t(this.parseTypedArray(a))}catch(o){n!=null?n(o):console.error(o),this.manager.itemError(e)}},i,n)}}function hh(r){return class extends dh{constructor(){super(...arguments),this.parseTypedArray=r}}}function mh(r){const e=r instanceof Int8Array?sl:r instanceof Uint8Array?Zs:r instanceof Uint8ClampedArray?Zs:r instanceof Int16Array?al:r instanceof Uint16Array?ol:r instanceof Int32Array?cl:r instanceof Uint32Array?Bt:r instanceof ce?Ro:r instanceof Float32Array?wt:r instanceof Float64Array?wt:null;return Wo(e!=null),e}const fh={format:Nr,minFilter:Qs,magFilter:Qs};class ph extends ns{constructor(){super(...arguments),this.parameters={}}load(e,t,i,n){const s=new this.Texture,a=new this.TypedArrayLoader(this.manager);a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(this.withCredentials),a.load(e,o=>{s.image.data=o instanceof ce?new Uint16Array(o.buffer):o;const{width:c,height:l,depth:u,...d}=this.parameters;c!=null&&(s.image.width=c),l!=null&&(s.image.height=l),"depth"in s.image&&u!=null&&(s.image.depth=u),s.type=mh(o),Object.assign(s,d),s.needsUpdate=!0,t(s)},i,n)}}function hc(r,e,t){return class extends ph{constructor(){super(...arguments),this.Texture=r,this.TypedArrayLoader=hh(e),this.parameters={...fh,...t}}}}function gh(r,e){return hc(il,r,e)}function vh(r,e){return hc(Nn,r,e)}function yh(r,e){return new(gh(r,e))}function Fa(r,e){return new(vh(r,e))}const Mi=is.clamp,Xn=is.degToRad;function Sh(r,e,t,i=0,n=1){return is.mapLinear(r,e,t,i,n)}function wh(r){return Math.min(Math.max(r,0),1)}function Oe(r){return(e,t)=>{e instanceof Ai?Object.defineProperty(e,t,{enumerable:!0,get(){var i;return((i=this.defines)==null?void 0:i[r])!=null},set(i){var n;i!==this[t]&&(i?(this.defines??(this.defines={}),this.defines[r]="1"):(n=this.defines)==null||delete n[r],this.needsUpdate=!0)}}):Object.defineProperty(e,t,{enumerable:!0,get(){return this.defines.has(r)},set(i){i!==this[t]&&(i?this.defines.set(r,"1"):this.defines.delete(r),this.setChanged())}})}}function _h(r,{min:e=Number.MIN_SAFE_INTEGER,max:t=Number.MAX_SAFE_INTEGER}={}){return(i,n)=>{i instanceof Ai?Object.defineProperty(i,n,{enumerable:!0,get(){var s;const a=(s=this.defines)==null?void 0:s[r];return a!=null?parseInt(a):0},set(s){const a=this[n];s!==a&&(this.defines??(this.defines={}),this.defines[r]=Mi(s,e,t).toFixed(0),this.needsUpdate=!0)}}):Object.defineProperty(i,n,{enumerable:!0,get(){const s=this.defines.get(r);return s!=null?parseInt(s):0},set(s){const a=this[n];s!==a&&(this.defines.set(r,Mi(s,e,t).toFixed(0)),this.setChanged())}})}}var Wr=Uint8Array,mc=Uint16Array,xh=Uint32Array,Th=new Wr([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Mh=new Wr([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),fc=function(r,e){for(var t=new mc(31),i=0;i<31;++i)t[i]=e+=1<<r[i-1];for(var n=new xh(t[30]),i=1;i<30;++i)for(var s=t[i];s<t[i+1];++s)n[s]=s-t[i]<<5|i;return[t,n]},pc=fc(Th,2),bh=pc[0],Rh=pc[1];bh[28]=258,Rh[258]=28;fc(Mh,0);var Eh=new mc(32768);for(var fe=0;fe<32768;++fe){var Rt=(fe&43690)>>>1|(fe&21845)<<1;Rt=(Rt&52428)>>>2|(Rt&13107)<<2,Rt=(Rt&61680)>>>4|(Rt&3855)<<4,Eh[fe]=((Rt&65280)>>>8|(Rt&255)<<8)>>>1}var Ni=new Wr(288);for(var fe=0;fe<144;++fe)Ni[fe]=8;for(var fe=144;fe<256;++fe)Ni[fe]=9;for(var fe=256;fe<280;++fe)Ni[fe]=7;for(var fe=280;fe<288;++fe)Ni[fe]=8;var Ah=new Wr(32);for(var fe=0;fe<32;++fe)Ah[fe]=5;var Ch=new Wr(0),Ih=typeof TextDecoder<"u"&&new TextDecoder,Dh=0;try{Ih.decode(Ch,{stream:!0}),Dh=1}catch{}const Ph=/^[ \t]*#include +"([\w\d./]+)"/gm;function Ht(r,e){return r.replace(Ph,(t,i)=>{const n=i.split("/").reduce((s,a)=>typeof s!="string"&&s!=null?s[a]:void 0,e);if(typeof n!="string")throw new Error(`Could not find include for ${i}.`);return Ht(n,e)})}const Oh=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*(?:i\s*\+\+|\+\+\s*i)\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nh(r,e,t,i){let n="";for(let s=parseInt(e);s<parseInt(t);++s)n+=i.replace(/\[\s*i\s*\]/g,"["+s+"]").replace(/UNROLLED_LOOP_INDEX/g,`${s}`);return n}function Lh(r){return r.replace(Oh,Nh)}const Fh=`// Reference: https://github.com/mrdoob/three.js/blob/r171/examples/jsm/csm/CSMShader.js

#ifndef SHADOW_CASCADE_COUNT
#error "SHADOW_CASCADE_COUNT macro must be defined."
#endif // SHADOW_CASCADE_COUNT

int getCascadeIndex(
  const mat4 viewMatrix,
  const vec3 worldPosition,
  const vec2 intervals[SHADOW_CASCADE_COUNT],
  const float near,
  const float far
) {
  vec4 viewPosition = viewMatrix * vec4(worldPosition, 1.0);
  float depth = viewZToOrthographicDepth(viewPosition.z, near, far);
  vec2 interval;
  #pragma unroll_loop_start
  for (int i = 0; i < 4; ++i) {
    #if UNROLLED_LOOP_INDEX < SHADOW_CASCADE_COUNT
    interval = intervals[i];
    if (depth >= interval.x && depth < interval.y) {
      return UNROLLED_LOOP_INDEX;
    }
    #endif // UNROLLED_LOOP_INDEX < SHADOW_CASCADE_COUNT
  }
  #pragma unroll_loop_end
  return SHADOW_CASCADE_COUNT - 1;
}

int getFadedCascadeIndex(
  const mat4 viewMatrix,
  const vec3 worldPosition,
  const vec2 intervals[SHADOW_CASCADE_COUNT],
  const float near,
  const float far,
  const float jitter
) {
  vec4 viewPosition = viewMatrix * vec4(worldPosition, 1.0);
  float depth = viewZToOrthographicDepth(viewPosition.z, near, far);

  vec2 interval;
  float intervalCenter;
  float closestEdge;
  float margin;
  int nextIndex = -1;
  int prevIndex = -1;
  float alpha;

  #pragma unroll_loop_start
  for (int i = 0; i < 4; ++i) {
    #if UNROLLED_LOOP_INDEX < SHADOW_CASCADE_COUNT
    interval = intervals[i];
    intervalCenter = (interval.x + interval.y) * 0.5;
    closestEdge = depth < intervalCenter ? interval.x : interval.y;
    margin = closestEdge * closestEdge * 0.5;
    interval += margin * vec2(-0.5, 0.5);

    #if UNROLLED_LOOP_INDEX < SHADOW_CASCADE_COUNT - 1
    if (depth >= interval.x && depth < interval.y) {
      prevIndex = nextIndex;
      nextIndex = UNROLLED_LOOP_INDEX;
      alpha = saturate(min(depth - interval.x, interval.y - depth) / margin);
    }
    #else // UNROLLED_LOOP_INDEX < SHADOW_CASCADE_COUNT - 1
    // Don't fade out the last cascade.
    if (depth >= interval.x) {
      prevIndex = nextIndex;
      nextIndex = UNROLLED_LOOP_INDEX;
      alpha = saturate((depth - interval.x) / margin);
    }
    #endif // UNROLLED_LOOP_INDEX < SHADOW_CASCADE_COUNT - 1
    #endif // UNROLLED_LOOP_INDEX < SHADOW_CASCADE_COUNT
  }
  #pragma unroll_loop_end

  return jitter <= alpha
    ? nextIndex
    : prevIndex;
}
`,Bh=`// cSpell:words logdepthbuf

float reverseLogDepth(const float depth, const float near, const float far) {
  #ifdef USE_LOGDEPTHBUF
  float d = pow(2.0, depth * log2(far + 1.0)) - 1.0;
  float a = far / (far - near);
  float b = far * near / (near - far);
  return a + b / d;
  #else // USE_LOGDEPTHBUF
  return depth;
  #endif // USE_LOGDEPTHBUF
}

float linearizeDepth(const float depth, const float near, const float far) {
  float ndc = depth * 2.0 - 1.0;
  return 2.0 * near * far / (far + near - ndc * (far - near));
}
`,Uh=`// Reference: https://advances.realtimerendering.com/s2014/index.html#_NEXT_GENERATION_POST

float interleavedGradientNoise(const vec2 coord) {
  const vec3 magic = vec3(0.06711056, 0.00583715, 52.9829189);
  return fract(magic.z * fract(dot(coord, magic.xy)));
}
`,Hh=`#if !defined(saturate)
#define saturate(a) clamp(a, 0.0, 1.0)
#endif // !defined(saturate)

float remap(const float x, const float min1, const float max1, const float min2, const float max2) {
  return min2 + (x - min1) / (max1 - min1) * (max2 - min2);
}

vec2 remap(const vec2 x, const vec2 min1, const vec2 max1, const vec2 min2, const vec2 max2) {
  return min2 + (x - min1) / (max1 - min1) * (max2 - min2);
}

vec3 remap(const vec3 x, const vec3 min1, const vec3 max1, const vec3 min2, const vec3 max2) {
  return min2 + (x - min1) / (max1 - min1) * (max2 - min2);
}

vec4 remap(const vec4 x, const vec4 min1, const vec4 max1, const vec4 min2, const vec4 max2) {
  return min2 + (x - min1) / (max1 - min1) * (max2 - min2);
}

float remapClamped(
  const float x,
  const float min1,
  const float max1,
  const float min2,
  const float max2
) {
  return clamp(min2 + (x - min1) / (max1 - min1) * (max2 - min2), min2, max2);
}

vec2 remapClamped(
  const vec2 x,
  const vec2 min1,
  const vec2 max1,
  const vec2 min2,
  const vec2 max2
) {
  return clamp(min2 + (x - min1) / (max1 - min1) * (max2 - min2), min2, max2);
}

vec3 remapClamped(
  const vec3 x,
  const vec3 min1,
  const vec3 max1,
  const vec3 min2,
  const vec3 max2
) {
  return clamp(min2 + (x - min1) / (max1 - min1) * (max2 - min2), min2, max2);
}

vec4 remapClamped(
  const vec4 x,
  const vec4 min1,
  const vec4 max1,
  const vec4 min2,
  const vec4 max2
) {
  return clamp(min2 + (x - min1) / (max1 - min1) * (max2 - min2), min2, max2);
}

// Implicitly remap to 0 and 1
float remap(const float x, const float min1, const float max1) {
  return (x - min1) / (max1 - min1);
}

vec2 remap(const vec2 x, const vec2 min1, const vec2 max1) {
  return (x - min1) / (max1 - min1);
}

vec3 remap(const vec3 x, const vec3 min1, const vec3 max1) {
  return (x - min1) / (max1 - min1);
}

vec4 remap(const vec4 x, const vec4 min1, const vec4 max1) {
  return (x - min1) / (max1 - min1);
}

float remapClamped(const float x, const float min1, const float max1) {
  return saturate((x - min1) / (max1 - min1));
}

vec2 remapClamped(const vec2 x, const vec2 min1, const vec2 max1) {
  return saturate((x - min1) / (max1 - min1));
}

vec3 remapClamped(const vec3 x, const vec3 min1, const vec3 max1) {
  return saturate((x - min1) / (max1 - min1));
}

vec4 remapClamped(const vec4 x, const vec4 min1, const vec4 max1) {
  return saturate((x - min1) / (max1 - min1));
}
`,kh=`// Reference: https://jcgt.org/published/0003/02/01/paper.pdf

vec2 signNotZero(vec2 v) {
  return vec2(v.x >= 0.0 ? 1.0 : -1.0, v.y >= 0.0 ? 1.0 : -1.0);
}

vec2 packNormalToVec2(vec3 v) {
  vec2 p = v.xy * (1.0 / (abs(v.x) + abs(v.y) + abs(v.z)));
  return v.z <= 0.0
    ? (1.0 - abs(p.yx)) * signNotZero(p)
    : p;
}

vec3 unpackVec2ToNormal(vec2 e) {
  vec3 v = vec3(e.xy, 1.0 - abs(e.x) - abs(e.y));
  if (v.z < 0.0) {
    v.xy = (1.0 - abs(v.yx)) * signNotZero(v.xy);
  }
  return normalize(v);
}
`,zh=`float raySphereFirstIntersection(
  const vec3 origin,
  const vec3 direction,
  const vec3 center,
  const float radius
) {
  vec3 a = origin - center;
  float b = 2.0 * dot(direction, a);
  float c = dot(a, a) - radius * radius;
  float discriminant = b * b - 4.0 * c;
  return discriminant < 0.0
    ? -1.0
    : (-b - sqrt(discriminant)) * 0.5;
}

float raySphereFirstIntersection(const vec3 origin, const vec3 direction, const float radius) {
  return raySphereFirstIntersection(origin, direction, vec3(0.0), radius);
}

vec4 raySphereFirstIntersection(
  const vec3 origin,
  const vec3 direction,
  const vec3 center,
  const vec4 radius
) {
  vec3 a = origin - center;
  float b = 2.0 * dot(direction, a);
  vec4 c = dot(a, a) - radius * radius;
  vec4 discriminant = b * b - 4.0 * c;
  vec4 mask = step(discriminant, vec4(0.0));
  return mix((-b - sqrt(max(vec4(0.0), discriminant))) * 0.5, vec4(-1.0), mask);
}

vec4 raySphereFirstIntersection(const vec3 origin, const vec3 direction, const vec4 radius) {
  return raySphereFirstIntersection(origin, direction, vec3(0.0), radius);
}

float raySphereSecondIntersection(
  const vec3 origin,
  const vec3 direction,
  const vec3 center,
  const float radius
) {
  vec3 a = origin - center;
  float b = 2.0 * dot(direction, a);
  float c = dot(a, a) - radius * radius;
  float discriminant = b * b - 4.0 * c;
  return discriminant < 0.0
    ? -1.0
    : (-b + sqrt(discriminant)) * 0.5;
}

float raySphereSecondIntersection(const vec3 origin, const vec3 direction, const float radius) {
  return raySphereSecondIntersection(origin, direction, vec3(0.0), radius);
}

vec4 raySphereSecondIntersection(
  const vec3 origin,
  const vec3 direction,
  const vec3 center,
  const vec4 radius
) {
  vec3 a = origin - center;
  float b = 2.0 * dot(direction, a);
  vec4 c = dot(a, a) - radius * radius;
  vec4 discriminant = b * b - 4.0 * c;
  vec4 mask = step(discriminant, vec4(0.0));
  return mix((-b + sqrt(max(vec4(0.0), discriminant))) * 0.5, vec4(-1.0), mask);
}

vec4 raySphereSecondIntersection(const vec3 origin, const vec3 direction, const vec4 radius) {
  return raySphereSecondIntersection(origin, direction, vec3(0.0), radius);
}

void raySphereIntersections(
  const vec3 origin,
  const vec3 direction,
  const vec3 center,
  const float radius,
  out float intersection1,
  out float intersection2
) {
  vec3 a = origin - center;
  float b = 2.0 * dot(direction, a);
  float c = dot(a, a) - radius * radius;
  float discriminant = b * b - 4.0 * c;
  if (discriminant < 0.0) {
    intersection1 = -1.0;
    intersection2 = -1.0;
    return;
  } else {
    float Q = sqrt(discriminant);
    intersection1 = (-b - Q) * 0.5;
    intersection2 = (-b + Q) * 0.5;
  }
}

void raySphereIntersections(
  const vec3 origin,
  const vec3 direction,
  const float radius,
  out float intersection1,
  out float intersection2
) {
  raySphereIntersections(origin, direction, vec3(0.0), radius, intersection1, intersection2);
}

void raySphereIntersections(
  const vec3 origin,
  const vec3 direction,
  const vec3 center,
  const vec4 radius,
  out vec4 intersection1,
  out vec4 intersection2
) {
  vec3 a = origin - center;
  float b = 2.0 * dot(direction, a);
  vec4 c = dot(a, a) - radius * radius;
  vec4 discriminant = b * b - 4.0 * c;
  vec4 mask = step(discriminant, vec4(0.0));
  vec4 Q = sqrt(max(vec4(0.0), discriminant));
  intersection1 = mix((-b - Q) * 0.5, vec4(-1.0), mask);
  intersection2 = mix((-b + Q) * 0.5, vec4(-1.0), mask);
}

void raySphereIntersections(
  const vec3 origin,
  const vec3 direction,
  const vec4 radius,
  out vec4 intersection1,
  out vec4 intersection2
) {
  raySphereIntersections(origin, direction, vec3(0.0), radius, intersection1, intersection2);
}
`,Vh=`vec3 screenToView(
  const vec2 uv,
  const float depth,
  const float viewZ,
  const mat4 projectionMatrix,
  const mat4 inverseProjectionMatrix
) {
  vec4 clip = vec4(vec3(uv, depth) * 2.0 - 1.0, 1.0);
  float clipW = projectionMatrix[2][3] * viewZ + projectionMatrix[3][3];
  clip *= clipW;
  return (inverseProjectionMatrix * clip).xyz;
}
`,Wh=`// Reference: https://www.gamedev.net/tutorials/programming/graphics/contact-hardening-soft-shadows-made-fast-r4906/

vec2 vogelDisk(const int index, const int sampleCount, const float phi) {
  const float goldenAngle = 2.39996322972865332;
  float r = sqrt(float(index) + 0.5) / sqrt(float(sampleCount));
  float theta = float(index) * goldenAngle + phi;
  return r * vec2(cos(theta), sin(theta));
}
`,Gh=Fh,jh=Bh,Yh=Uh,qh=Hh,Kh=kh,gc=zh,Xh=Vh,$h=Wh,vs=`// Based on the following work and adapted to Three.js.
// This file includes runtime functions only. Please refer to Bruneton's source
// code for the whole picture. It has detailed comments.
// https://github.com/ebruneton/precomputed_atmospheric_scattering/blob/master/atmosphere/functions.glsl

/**
 * Copyright (c) 2017 Eric Bruneton
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 * 1. Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright
 *    notice, this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 * 3. Neither the name of the copyright holders nor the names of its
 *    contributors may be used to endorse or promote products derived from
 *    this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF
 * THE POSSIBILITY OF SUCH DAMAGE.
 *
 * Precomputed Atmospheric Scattering
 * Copyright (c) 2008 INRIA
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 * 1. Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright
 *    notice, this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 * 3. Neither the name of the copyright holders nor the names of its
 *    contributors may be used to endorse or promote products derived from
 *    this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF
 * THE POSSIBILITY OF SUCH DAMAGE.
 */

float ClampCosine(float mu) {
  return clamp(mu, float(-1.0), float(1.0));
}

float ClampDistance(float d) {
  return max(d, 0.0);
}

float ClampRadius(float r) {
  return clamp(r, u_bottom_radius, u_top_radius);
}

float SafeSqrt(float a) {
  return sqrt(max(a, 0.0));
}

float DistanceToTopAtmosphereBoundary(float r, float mu) {
  float discriminant = r * r * (mu * mu - 1.0) + u_top_radius * u_top_radius;
  return ClampDistance(-r * mu + SafeSqrt(discriminant));
}

bool RayIntersectsGround(float r, float mu) {
  return mu < 0.0 && r * r * (mu * mu - 1.0) + u_bottom_radius * u_bottom_radius >= 0.0;
}

float GetTextureCoordFromUnitRange(float x, int texture_size) {
  return 0.5 / float(texture_size) + x * (1.0 - 1.0 / float(texture_size));
}

vec2 GetTransmittanceTextureUvFromRMu(float r, float mu) {
  float H = sqrt(u_top_radius * u_top_radius - u_bottom_radius * u_bottom_radius);
  float rho = SafeSqrt(r * r - u_bottom_radius * u_bottom_radius);
  float d = DistanceToTopAtmosphereBoundary(r, mu);
  float d_min = u_top_radius - r;
  float d_max = rho + H;
  float x_mu = (d - d_min) / (d_max - d_min);
  float x_r = rho / H;
  return vec2(
    GetTextureCoordFromUnitRange(x_mu, TRANSMITTANCE_TEXTURE_WIDTH),
    GetTextureCoordFromUnitRange(x_r, TRANSMITTANCE_TEXTURE_HEIGHT)
  );
}

vec3 GetTransmittanceToTopAtmosphereBoundary(
  const sampler2D u_transmittance_texture,
  float r,
  float mu
) {
  vec2 uv = GetTransmittanceTextureUvFromRMu(r, mu);
  return vec3(texture(u_transmittance_texture, uv));
}

vec3 GetTransmittance(
  const sampler2D u_transmittance_texture,
  float r,
  float mu,
  float d,
  bool ray_r_mu_intersects_ground
) {
  float r_d = ClampRadius(sqrt(d * d + 2.0 * r * mu * d + r * r));
  float mu_d = ClampCosine((r * mu + d) / r_d);
  if (ray_r_mu_intersects_ground) {
    return min(
      GetTransmittanceToTopAtmosphereBoundary(u_transmittance_texture, r_d, -mu_d) /
        GetTransmittanceToTopAtmosphereBoundary(u_transmittance_texture, r, -mu),
      vec3(1.0)
    );
  } else {
    return min(
      GetTransmittanceToTopAtmosphereBoundary(u_transmittance_texture, r, mu) /
        GetTransmittanceToTopAtmosphereBoundary(u_transmittance_texture, r_d, mu_d),
      vec3(1.0)
    );
  }
}

vec3 GetTransmittanceToSun(const sampler2D u_transmittance_texture, float r, float mu_s) {
  float sin_theta_h = u_bottom_radius / r;
  float cos_theta_h = -sqrt(max(1.0 - sin_theta_h * sin_theta_h, 0.0));
  return GetTransmittanceToTopAtmosphereBoundary(u_transmittance_texture, r, mu_s) *
  smoothstep(
    -sin_theta_h * u_sun_angular_radius,
    sin_theta_h * u_sun_angular_radius,
    mu_s - cos_theta_h
  );
}

float RayleighPhaseFunction(float nu) {
  float k = 3.0 / (16.0 * PI);
  return k * (1.0 + nu * nu);
}

float MiePhaseFunction(float g, float nu) {
  float k = 3.0 / (8.0 * PI) * (1.0 - g * g) / (2.0 + g * g);
  return k * (1.0 + nu * nu) / pow(1.0 + g * g - 2.0 * g * nu, 1.5);
}

vec4 GetScatteringTextureUvwzFromRMuMuSNu(
  float r,
  float mu,
  float mu_s,
  float nu,
  bool ray_r_mu_intersects_ground
) {
  float H = sqrt(u_top_radius * u_top_radius - u_bottom_radius * u_bottom_radius);
  float rho = SafeSqrt(r * r - u_bottom_radius * u_bottom_radius);
  float u_r = GetTextureCoordFromUnitRange(rho / H, SCATTERING_TEXTURE_R_SIZE);
  float r_mu = r * mu;
  float discriminant = r_mu * r_mu - r * r + u_bottom_radius * u_bottom_radius;
  float u_mu;
  if (ray_r_mu_intersects_ground) {
    float d = -r_mu - SafeSqrt(discriminant);
    float d_min = r - u_bottom_radius;
    float d_max = rho;
    u_mu =
      0.5 -
      0.5 *
        GetTextureCoordFromUnitRange(
          d_max == d_min
            ? 0.0
            : (d - d_min) / (d_max - d_min),
          SCATTERING_TEXTURE_MU_SIZE / 2
        );
  } else {
    float d = -r_mu + SafeSqrt(discriminant + H * H);
    float d_min = u_top_radius - r;
    float d_max = rho + H;
    u_mu =
      0.5 +
      0.5 *
        GetTextureCoordFromUnitRange((d - d_min) / (d_max - d_min), SCATTERING_TEXTURE_MU_SIZE / 2);
  }
  float d = DistanceToTopAtmosphereBoundary(u_bottom_radius, mu_s);
  float d_min = u_top_radius - u_bottom_radius;
  float d_max = H;
  float a = (d - d_min) / (d_max - d_min);
  float D = DistanceToTopAtmosphereBoundary(u_bottom_radius, u_mu_s_min);
  float A = (D - d_min) / (d_max - d_min);
  float u_mu_s = GetTextureCoordFromUnitRange(
    max(1.0 - a / A, 0.0) / (1.0 + a),
    SCATTERING_TEXTURE_MU_S_SIZE
  );
  float u_nu = (nu + 1.0) / 2.0;
  return vec4(u_nu, u_mu_s, u_mu, u_r);
}

vec2 GetIrradianceTextureUvFromRMuS(float r, float mu_s) {
  float x_r = (r - u_bottom_radius) / (u_top_radius - u_bottom_radius);
  float x_mu_s = mu_s * 0.5 + 0.5;
  return vec2(
    GetTextureCoordFromUnitRange(x_mu_s, IRRADIANCE_TEXTURE_WIDTH),
    GetTextureCoordFromUnitRange(x_r, IRRADIANCE_TEXTURE_HEIGHT)
  );
}

vec3 GetIrradiance(const sampler2D u_irradiance_texture, float r, float mu_s) {
  vec2 uv = GetIrradianceTextureUvFromRMuS(r, mu_s);
  return vec3(texture(u_irradiance_texture, uv));
}

vec3 GetExtrapolatedSingleMieScattering(const vec4 scattering) {
  if (scattering.r <= 0.0) {
    return vec3(0.0);
  }
  return scattering.rgb *
  scattering.a /
  scattering.r *
  (u_rayleigh_scattering.r / u_mie_scattering.r) *
  (u_mie_scattering / u_rayleigh_scattering);
}

vec3 GetCombinedScattering(
  const sampler3D u_scattering_texture,
  const sampler3D u_single_mie_scattering_texture,
  float r,
  float mu,
  float mu_s,
  float nu,
  bool ray_r_mu_intersects_ground,
  out vec3 single_mie_scattering
) {
  vec4 uvwz = GetScatteringTextureUvwzFromRMuMuSNu(r, mu, mu_s, nu, ray_r_mu_intersects_ground);
  float tex_coord_x = uvwz.x * float(SCATTERING_TEXTURE_NU_SIZE - 1);
  float tex_x = floor(tex_coord_x);
  float lerp = tex_coord_x - tex_x;
  vec3 uvw0 = vec3((tex_x + uvwz.y) / float(SCATTERING_TEXTURE_NU_SIZE), uvwz.z, uvwz.w);
  vec3 uvw1 = vec3((tex_x + 1.0 + uvwz.y) / float(SCATTERING_TEXTURE_NU_SIZE), uvwz.z, uvwz.w);
  vec4 combined_scattering =
    texture(u_scattering_texture, uvw0) * (1.0 - lerp) + texture(u_scattering_texture, uvw1) * lerp;
  vec3 scattering = vec3(combined_scattering);
  single_mie_scattering = GetExtrapolatedSingleMieScattering(combined_scattering);
  return scattering;
}

vec3 GetSkyRadiance(
  const sampler2D u_transmittance_texture,
  const sampler3D u_scattering_texture,
  const sampler3D u_single_mie_scattering_texture,
  vec3 camera,
  const vec3 view_ray,
  float shadow_length,
  const vec3 sun_direction,
  out vec3 transmittance
) {
  float r = length(camera);
  float rmu = dot(camera, view_ray);
  float distance_to_top_atmosphere_boundary =
    -rmu - SafeSqrt(rmu * rmu - r * r + u_top_radius * u_top_radius);
  if (distance_to_top_atmosphere_boundary > 0.0) {
    camera = camera + view_ray * distance_to_top_atmosphere_boundary;
    r = u_top_radius;
    rmu += distance_to_top_atmosphere_boundary;
  } else if (r > u_top_radius) {
    transmittance = vec3(1.0);
    return vec3(0.0);
  }
  float mu = rmu / r;
  float mu_s = dot(camera, sun_direction) / r;
  float nu = dot(view_ray, sun_direction);
  bool ray_r_mu_intersects_ground = RayIntersectsGround(r, mu);
  transmittance = ray_r_mu_intersects_ground
    ? vec3(0.0)
    : GetTransmittanceToTopAtmosphereBoundary(u_transmittance_texture, r, mu);
  vec3 single_mie_scattering;
  vec3 scattering;

  if (shadow_length == 0.0) {
    scattering = GetCombinedScattering(
      u_scattering_texture,
      u_single_mie_scattering_texture,
      r,
      mu,
      mu_s,
      nu,
      ray_r_mu_intersects_ground,
      single_mie_scattering
    );
  } else {
    float d = shadow_length;
    float r_p = ClampRadius(sqrt(d * d + 2.0 * r * mu * d + r * r));
    float mu_p = (r * mu + d) / r_p;
    float mu_s_p = (r * mu_s + d * nu) / r_p;
    scattering = GetCombinedScattering(
      u_scattering_texture,
      u_single_mie_scattering_texture,
      r_p,
      mu_p,
      mu_s_p,
      nu,
      ray_r_mu_intersects_ground,
      single_mie_scattering
    );
    vec3 shadow_transmittance = GetTransmittance(
      u_transmittance_texture,
      r,
      mu,
      shadow_length,
      ray_r_mu_intersects_ground
    );
    scattering = scattering * shadow_transmittance;
    single_mie_scattering = single_mie_scattering * shadow_transmittance;
  }
  return scattering * RayleighPhaseFunction(nu) +
  single_mie_scattering * MiePhaseFunction(u_mie_phase_function_g, nu);
}

vec3 GetSkyRadianceToPoint(
  const sampler2D u_transmittance_texture,
  const sampler3D u_scattering_texture,
  const sampler3D u_single_mie_scattering_texture,
  vec3 camera,
  const vec3 point,
  float shadow_length,
  const vec3 sun_direction,
  out vec3 transmittance
) {
  vec3 view_ray = normalize(point - camera);
  float r = length(camera);
  float rmu = dot(camera, view_ray);
  float distance_to_top_atmosphere_boundary =
    -rmu - sqrt(rmu * rmu - r * r + u_top_radius * u_top_radius);
  if (distance_to_top_atmosphere_boundary > 0.0) {
    camera = camera + view_ray * distance_to_top_atmosphere_boundary;
    r = u_top_radius;
    rmu += distance_to_top_atmosphere_boundary;
  }
  float mu = rmu / r;
  float mu_s = dot(camera, sun_direction) / r;
  float nu = dot(view_ray, sun_direction);
  float d = length(point - camera);
  bool ray_r_mu_intersects_ground = RayIntersectsGround(r, mu);

  // Hack to avoid rendering artifacts near the horizon, due to finite
  // atmosphere texture resolution and finite floating point precision.
  // See: https://github.com/ebruneton/precomputed_atmospheric_scattering/pull/32
  if (!ray_r_mu_intersects_ground) {
    float mu_horiz = -SafeSqrt(1.0 - u_bottom_radius / r * (u_bottom_radius / r));
    mu = max(mu, mu_horiz + 0.004);
  }

  transmittance = GetTransmittance(u_transmittance_texture, r, mu, d, ray_r_mu_intersects_ground);
  vec3 single_mie_scattering;
  vec3 scattering = GetCombinedScattering(
    u_scattering_texture,
    u_single_mie_scattering_texture,
    r,
    mu,
    mu_s,
    nu,
    ray_r_mu_intersects_ground,
    single_mie_scattering
  );
  d = max(d - shadow_length, 0.0);
  float r_p = ClampRadius(sqrt(d * d + 2.0 * r * mu * d + r * r));
  float mu_p = (r * mu + d) / r_p;
  float mu_s_p = (r * mu_s + d * nu) / r_p;
  vec3 single_mie_scattering_p;
  vec3 scattering_p = GetCombinedScattering(
    u_scattering_texture,
    u_single_mie_scattering_texture,
    r_p,
    mu_p,
    mu_s_p,
    nu,
    ray_r_mu_intersects_ground,
    single_mie_scattering_p
  );
  vec3 shadow_transmittance = transmittance;
  if (shadow_length > 0.0) {
    shadow_transmittance = GetTransmittance(
      u_transmittance_texture,
      r,
      mu,
      d,
      ray_r_mu_intersects_ground
    );
  }
  scattering = scattering - shadow_transmittance * scattering_p;
  single_mie_scattering = single_mie_scattering - shadow_transmittance * single_mie_scattering_p;
  single_mie_scattering = GetExtrapolatedSingleMieScattering(
    vec4(scattering, single_mie_scattering.r)
  );
  single_mie_scattering = single_mie_scattering * smoothstep(float(0.0), float(0.01), mu_s);
  return scattering * RayleighPhaseFunction(nu) +
  single_mie_scattering * MiePhaseFunction(u_mie_phase_function_g, nu);
}

vec3 GetSunAndSkyIrradiance(
  const sampler2D u_transmittance_texture,
  const sampler2D u_irradiance_texture,
  const vec3 point,
  const vec3 sun_direction,
  out vec3 sky_irradiance
) {
  float r = length(point);
  float mu_s = dot(point, sun_direction) / r;
  sky_irradiance = GetIrradiance(u_irradiance_texture, r, mu_s);
  return u_solar_irradiance * GetTransmittanceToSun(u_transmittance_texture, r, mu_s);
}

vec3 GetSunAndSkyIrradiance(
  const sampler2D u_transmittance_texture,
  const sampler2D u_irradiance_texture,
  const vec3 point,
  const vec3 normal,
  const vec3 sun_direction,
  out vec3 sky_irradiance
) {
  float r = length(point);
  float mu_s = dot(point, sun_direction) / r;
  sky_irradiance =
    GetIrradiance(u_irradiance_texture, r, mu_s) * (1.0 + dot(normal, point) / r) * 0.5;
  return u_solar_irradiance *
  GetTransmittanceToSun(u_transmittance_texture, r, mu_s) *
  max(dot(normal, sun_direction), 0.0);
}

vec3 GetSolarRadiance() {
  vec3 radiance = u_solar_irradiance / (PI * u_sun_angular_radius * u_sun_angular_radius);
  #ifdef PHOTOMETRIC
  radiance *= SUN_SPECTRAL_RADIANCE_TO_LUMINANCE;
  #endif // PHOTOMETRIC
  return radiance;
}

vec3 GetSkyRadiance(
  vec3 camera,
  vec3 view_ray,
  float shadow_length,
  vec3 sun_direction,
  out vec3 transmittance
) {
  vec3 radiance = GetSkyRadiance(
    u_transmittance_texture,
    u_scattering_texture,
    u_single_mie_scattering_texture,
    camera,
    view_ray,
    shadow_length,
    sun_direction,
    transmittance
  );
  #ifdef PHOTOMETRIC
  radiance *= SKY_SPECTRAL_RADIANCE_TO_LUMINANCE;
  #endif // PHOTOMETRIC
  return radiance;
}

vec3 GetSkyRadianceToPoint(
  vec3 camera,
  vec3 point,
  float shadow_length,
  vec3 sun_direction,
  out vec3 transmittance
) {
  vec3 inscatter = GetSkyRadianceToPoint(
    u_transmittance_texture,
    u_scattering_texture,
    u_single_mie_scattering_texture,
    camera,
    point,
    shadow_length,
    sun_direction,
    transmittance
  );
  #ifdef PHOTOMETRIC
  inscatter *= SKY_SPECTRAL_RADIANCE_TO_LUMINANCE;
  #endif // PHOTOMETRIC
  return inscatter;
}

vec3 GetSunAndSkyIrradiance(vec3 point, vec3 sun_direction, out vec3 sky_irradiance) {
  vec3 sun_irradiance = GetSunAndSkyIrradiance(
    u_transmittance_texture,
    u_irradiance_texture,
    point,
    sun_direction,
    sky_irradiance
  );
  #ifdef PHOTOMETRIC
  sun_irradiance *= SUN_SPECTRAL_RADIANCE_TO_LUMINANCE;
  sky_irradiance *= SKY_SPECTRAL_RADIANCE_TO_LUMINANCE;
  #endif // PHOTOMETRIC
  return sun_irradiance;
}

vec3 GetSunAndSkyIrradiance(vec3 point, vec3 normal, vec3 sun_direction, out vec3 sky_irradiance) {
  vec3 sun_irradiance = GetSunAndSkyIrradiance(
    u_transmittance_texture,
    u_irradiance_texture,
    point,
    normal,
    sun_direction,
    sky_irradiance
  );
  #ifdef PHOTOMETRIC
  sun_irradiance *= SUN_SPECTRAL_RADIANCE_TO_LUMINANCE;
  sky_irradiance *= SKY_SPECTRAL_RADIANCE_TO_LUMINANCE;
  #endif // PHOTOMETRIC
  return sun_irradiance;
}
`,or=`uniform vec3 u_solar_irradiance;
uniform float u_sun_angular_radius;
uniform float u_bottom_radius;
uniform float u_top_radius;
uniform vec3 u_rayleigh_scattering;
uniform vec3 u_mie_scattering;
uniform float u_mie_phase_function_g;
uniform float u_mu_s_min;

uniform sampler2D u_transmittance_texture;
uniform sampler3D u_scattering_texture;
uniform sampler3D u_single_mie_scattering_texture;
uniform sampler2D u_irradiance_texture;
`,Qh=["solarIrradiance","sunAngularRadius","bottomRadius","topRadius","rayleighScattering","mieScattering","miePhaseFunctionG","muSMin","skyRadianceToLuminance","sunRadianceToLuminance","luminousEfficiency"];function Zh(r,e){if(e!=null)for(const t of Qh){const i=e[t];i!=null&&(r[t]instanceof x?r[t].copy(i):r[t]=i)}}const $n=class{constructor(e){this.solarIrradiance=new x(1.474,1.8504,1.91198),this.sunAngularRadius=.004675,this.bottomRadius=636e4,this.topRadius=642e4,this.rayleighScattering=new x(.005802,.013558,.0331),this.mieScattering=new x(.003996,.003996,.003996),this.miePhaseFunctionG=.8,this.muSMin=Math.cos(Xn(120)),this.skyRadianceToLuminance=new x(114974.916437,71305.954816,65310.548555),this.sunRadianceToLuminance=new x(98242.786222,69954.398112,66475.012354),this.luminousEfficiency=new x(.2126,.7152,.0722),this.skyRadianceToRelativeLuminance=new x,this.sunRadianceToRelativeLuminance=new x,Zh(this,e);const t=this.luminousEfficiency.dot(this.skyRadianceToLuminance);this.skyRadianceToRelativeLuminance.copy(this.skyRadianceToLuminance).divideScalar(t),this.sunRadianceToRelativeLuminance.copy(this.sunRadianceToLuminance).divideScalar(t)}};$n.DEFAULT=new $n;let Li=$n;const Fi=64,Bi=16,ys=32,Ss=128,ws=32,_s=8,Jh=_s*ws,em=Ss,tm=ys,Ui=256,Hi=64,rr=1/1e3,rm="82e00c5222d6cbc222af69abdf6d3f4fc9f63030",gn=`https://media.githubusercontent.com/media/takram-design-engineering/three-geospatial/${rm}/packages/atmosphere/assets`,im=new x;function ki(r,e,t,i,n=!0){const s=t.projectOnSurface(r,im);return s!=null?t.getOsculatingSphereCenter(!n||s.lengthSq()<r.lengthSq()?s:r,e,i):i.setScalar(0)}const nm=`precision highp sampler2DArray;

#include "core/depth"
#include "core/math"
#include "core/packing"
#include "core/transform"
#ifdef HAS_SHADOW
#include "core/raySphereIntersection"
#include "core/cascadedShadowMaps"
#include "core/interleavedGradientNoise"
#include "core/vogelDisk"
#endif // HAS_SHADOW
#include "parameters"
#include "functions"
#include "sky"

uniform sampler2D normalBuffer;

uniform mat4 projectionMatrix;
uniform mat4 viewMatrix;
uniform mat4 inverseProjectionMatrix;
uniform mat4 inverseViewMatrix;
uniform float bottomRadius;
uniform vec3 ellipsoidCenter;
uniform mat4 inverseEllipsoidMatrix;
uniform vec3 sunDirection;
uniform vec3 moonDirection;
uniform float moonAngularRadius;
uniform float lunarRadianceScale;
uniform float irradianceScale;
uniform float idealSphereAlpha;

#ifdef HAS_OVERLAY
uniform sampler2D overlayBuffer;
#endif // HAS_OVERLAY

#ifdef HAS_SHADOW
uniform sampler2DArray shadowBuffer;
uniform vec2 shadowIntervals[SHADOW_CASCADE_COUNT];
uniform mat4 shadowMatrices[SHADOW_CASCADE_COUNT];
uniform mat4 inverseShadowMatrices[SHADOW_CASCADE_COUNT];
uniform float shadowFar;
uniform float shadowTopHeight;
uniform float shadowRadius;
uniform sampler3D stbnTexture;
uniform int frame;
#endif // HAS_SHADOW

#ifdef HAS_SHADOW_LENGTH
uniform sampler2D shadowLengthBuffer;
#endif // HAS_SHADOW_LENGTH

varying vec3 vCameraPosition;
varying vec3 vRayDirection;
varying vec3 vEllipsoidCenter;
varying vec3 vGeometryEllipsoidCenter;
varying vec3 vEllipsoidRadiiSquared;

vec3 readNormal(const vec2 uv) {
  #ifdef OCT_ENCODED_NORMAL
  return unpackVec2ToNormal(texture(normalBuffer, uv).xy);
  #else // OCT_ENCODED_NORMAL
  return 2.0 * texture(normalBuffer, uv).xyz - 1.0;
  #endif // OCT_ENCODED_NORMAL
}

void correctGeometricError(inout vec3 positionECEF, inout vec3 normalECEF) {
  // TODO: The error is pronounced at the edge of the ellipsoid due to the
  // large difference between the sphere position and the unprojected position
  // at the current fragment. Calculating the sphere position from the fragment
  // UV may resolve this.

  // Correct way is slerp, but this will be small-angle interpolation anyways.
  vec3 sphereNormal = normalize(positionECEF / vEllipsoidRadiiSquared);
  vec3 spherePosition = u_bottom_radius * sphereNormal;
  normalECEF = mix(normalECEF, sphereNormal, idealSphereAlpha);
  positionECEF = mix(positionECEF, spherePosition, idealSphereAlpha);
}

#if defined(SUN_IRRADIANCE) || defined(SKY_IRRADIANCE)

vec3 getSunSkyIrradiance(
  const vec3 positionECEF,
  const vec3 normal,
  const vec3 inputColor,
  const float sunTransmittance
) {
  // Assume lambertian BRDF. If both SUN_IRRADIANCE and SKY_IRRADIANCE are not
  // defined, regard the inputColor as radiance at the texel.
  vec3 albedo = inputColor * irradianceScale * RECIPROCAL_PI;
  vec3 skyIrradiance;
  vec3 sunIrradiance = GetSunAndSkyIrradiance(positionECEF, normal, sunDirection, skyIrradiance);

  #ifdef HAS_SHADOW
  sunIrradiance *= sunTransmittance;
  #endif // HAS_SHADOW

  #if defined(SUN_IRRADIANCE) && defined(SKY_IRRADIANCE)
  return albedo * (sunIrradiance + skyIrradiance);
  #elif defined(SUN_IRRADIANCE)
  return albedo * sunIrradiance;
  #elif defined(SKY_IRRADIANCE)
  return albedo * skyIrradiance;
  #endif // defined(SUN_IRRADIANCE) && defined(SKY_IRRADIANCE)
}

#endif // defined(SUN_IRRADIANCE) || defined(SKY_IRRADIANCE)

#if defined(TRANSMITTANCE) || defined(INSCATTER)

void applyTransmittanceInscatter(const vec3 positionECEF, float shadowLength, inout vec3 radiance) {
  vec3 transmittance;
  vec3 inscatter = GetSkyRadianceToPoint(
    vCameraPosition - vGeometryEllipsoidCenter,
    positionECEF,
    shadowLength,
    sunDirection,
    transmittance
  );
  #ifdef TRANSMITTANCE
  radiance = radiance * transmittance;
  #endif // TRANSMITTANCE
  #ifdef INSCATTER
  radiance = radiance + inscatter;
  #endif // INSCATTER
}

#endif // defined(TRANSMITTANCE) || defined(INSCATTER)

#ifdef HAS_SHADOW

float getSTBN() {
  ivec3 size = textureSize(stbnTexture, 0);
  vec3 scale = 1.0 / vec3(size);
  return texture(stbnTexture, vec3(gl_FragCoord.xy, float(frame % size.z)) * scale).r;
}

vec2 getShadowUv(const vec3 worldPosition, const int cascadeIndex) {
  vec4 clip = shadowMatrices[cascadeIndex] * vec4(worldPosition, 1.0);
  clip /= clip.w;
  return clip.xy * 0.5 + 0.5;
}

float getDistanceToShadowTop(const vec3 positionECEF) {
  // Distance to the top of the shadows along the sun direction, which matches
  // the ray origin of BSM.
  return raySphereSecondIntersection(
    positionECEF / METER_TO_LENGTH_UNIT, // TODO: Make units consistent
    sunDirection,
    vec3(0.0),
    bottomRadius + shadowTopHeight
  );
}

float readShadowOpticalDepth(const vec2 uv, const float distanceToTop, const int cascadeIndex) {
  // r: frontDepth, g: meanExtinction, b: maxOpticalDepth, a: maxOpticalDepthTail
  vec4 shadow = texture(shadowBuffer, vec3(uv, float(cascadeIndex)));
  // Omit adding maxOpticalDepthTail to avoid pronounced aliasing. Ground
  // shadow will be attenuated by inscatter anyways.
  return min(shadow.b, shadow.g * max(0.0, distanceToTop - shadow.r));
}

float sampleShadowOpticalDepthPCF(
  const vec3 worldPosition,
  const float distanceToTop,
  const float radius,
  const int cascadeIndex
) {
  vec2 uv = getShadowUv(worldPosition, cascadeIndex);
  if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) {
    return 0.0;
  }

  vec2 texelSize = vec2(1.0) / vec2(textureSize(shadowBuffer, 0).xy);
  float sum = 0.0;
  vec2 offset;
  #pragma unroll_loop_start
  for (int i = 0; i < 16; ++i) {
    #if UNROLLED_LOOP_INDEX < SHADOW_SAMPLE_COUNT
    offset = vogelDisk(
      UNROLLED_LOOP_INDEX,
      SHADOW_SAMPLE_COUNT,
      interleavedGradientNoise(gl_FragCoord.xy) * PI2
    );
    sum += readShadowOpticalDepth(uv + offset * radius * texelSize, distanceToTop, cascadeIndex);
    #endif // UNROLLED_LOOP_INDEX < SHADOW_SAMPLE_COUNT
  }
  #pragma unroll_loop_end
  return sum / float(SHADOW_SAMPLE_COUNT);
}

float sampleShadowOpticalDepth(
  const vec3 worldPosition,
  const vec3 positionECEF,
  const float radius,
  const float jitter
) {
  float distanceToTop = getDistanceToShadowTop(positionECEF);
  if (distanceToTop <= 0.0) {
    return 0.0;
  }
  int cascadeIndex = getFadedCascadeIndex(
    viewMatrix,
    worldPosition,
    shadowIntervals,
    cameraNear,
    shadowFar,
    jitter
  );
  return cascadeIndex >= 0
    ? sampleShadowOpticalDepthPCF(worldPosition, distanceToTop, radius, cascadeIndex)
    : 0.0;
}

float getShadowRadius(const vec3 worldPosition) {
  vec4 clip = shadowMatrices[0] * vec4(worldPosition, 1.0);
  clip /= clip.w;

  // Offset by 1px in each direction in shadow's clip coordinates.
  vec2 shadowSize = vec2(textureSize(shadowBuffer, 0));
  vec3 offset = vec3(2.0 / shadowSize, 0.0);
  vec4 clipX = clip + offset.xzzz;
  vec4 clipY = clip + offset.zyzz;

  // Convert back to world space.
  vec4 worldX = inverseShadowMatrices[0] * clipX;
  vec4 worldY = inverseShadowMatrices[0] * clipY;

  // Project into the main camera's clip space.
  mat4 viewProjectionMatrix = projectionMatrix * viewMatrix;
  vec4 projected = viewProjectionMatrix * vec4(worldPosition, 1.0);
  vec4 projectedX = viewProjectionMatrix * worldX;
  vec4 projectedY = viewProjectionMatrix * worldY;
  projected /= projected.w;
  projectedX /= projectedX.w;
  projectedY /= projectedY.w;

  // Take the mean of pixel sizes.
  vec2 center = (projected.xy * 0.5 + 0.5) * resolution;
  vec2 offsetX = (projectedX.xy * 0.5 + 0.5) * resolution;
  vec2 offsetY = (projectedY.xy * 0.5 + 0.5) * resolution;
  float size = max(length(offsetX - center), length(offsetY - center));

  return remapClamped(size, 10.0, 50.0, 0.0, shadowRadius);
}

#endif // HAS_SHADOW

void mainImage(const vec4 inputColor, const vec2 uv, out vec4 outputColor) {
  float shadowLength = 0.0;
  #ifdef HAS_SHADOW_LENGTH
  shadowLength = texture(shadowLengthBuffer, uv).r;
  #endif // HAS_SHADOW_LENGTH

  #ifdef HAS_OVERLAY
  vec4 overlay = texture(overlayBuffer, uv);
  if (overlay.a == 1.0) {
    outputColor = overlay;
    return;
  }
  #endif // HAS_OVERLAY

  float depth = readDepth(uv);
  if (depth >= 1.0 - 1e-7) {
    #ifdef SKY
    vec3 rayDirection = normalize(vRayDirection);
    outputColor.rgb = getSkyRadiance(
      vCameraPosition - vEllipsoidCenter,
      rayDirection,
      shadowLength,
      sunDirection,
      moonDirection,
      moonAngularRadius,
      lunarRadianceScale
    );
    outputColor.a = 1.0;
    #else // SKY
    outputColor = inputColor;
    #endif // SKY

    #ifdef HAS_OVERLAY
    outputColor.rgb = outputColor.rgb * (1.0 - overlay.a) + overlay.rgb;
    #endif // HAS_OVERLAY
    return;
  }
  depth = reverseLogDepth(depth, cameraNear, cameraFar);

  // Reconstruct position and normal in world space.
  vec3 viewPosition = screenToView(
    uv,
    depth,
    getViewZ(depth),
    projectionMatrix,
    inverseProjectionMatrix
  );
  vec3 viewNormal;
  #ifdef RECONSTRUCT_NORMAL
  vec3 dx = dFdx(viewPosition);
  vec3 dy = dFdy(viewPosition);
  viewNormal = normalize(cross(dx, dy));
  #else // RECONSTRUCT_NORMAL
  viewNormal = readNormal(uv);
  #endif // RECONSTRUCT_NORMAL

  vec3 worldPosition = (inverseViewMatrix * vec4(viewPosition, 1.0)).xyz;
  vec3 worldNormal = normalize(mat3(inverseViewMatrix) * viewNormal);
  mat3 rotation = mat3(inverseEllipsoidMatrix);
  vec3 positionECEF = rotation * worldPosition * METER_TO_LENGTH_UNIT - vGeometryEllipsoidCenter;
  vec3 normalECEF = rotation * worldNormal;

  #ifdef CORRECT_GEOMETRIC_ERROR
  correctGeometricError(positionECEF, normalECEF);
  #endif // CORRECT_GEOMETRIC_ERROR

  #ifdef HAS_SHADOW
  float stbn = getSTBN();
  float radius = getShadowRadius(worldPosition);
  float opticalDepth = sampleShadowOpticalDepth(worldPosition, positionECEF, radius, stbn);
  float sunTransmittance = exp(-opticalDepth);
  #else // HAS_SHADOW
  float sunTransmittance = 1.0;
  #endif // HAS_SHADOW

  vec3 radiance;
  #if defined(SUN_IRRADIANCE) || defined(SKY_IRRADIANCE)
  radiance = getSunSkyIrradiance(positionECEF, normalECEF, inputColor.rgb, sunTransmittance);
  #else // defined(SUN_IRRADIANCE) || defined(SKY_IRRADIANCE)
  radiance = inputColor.rgb;
  #endif // defined(SUN_IRRADIANCE) || defined(SKY_IRRADIANCE)

  #if defined(TRANSMITTANCE) || defined(INSCATTER)
  applyTransmittanceInscatter(positionECEF, shadowLength, radiance);
  #endif // defined(TRANSMITTANCE) || defined(INSCATTER)

  outputColor = vec4(radiance, inputColor.a);

  #ifdef HAS_OVERLAY
  outputColor.rgb = outputColor.rgb * (1.0 - overlay.a) + overlay.rgb;
  #endif // HAS_OVERLAY
}
`,sm=`uniform mat4 inverseViewMatrix;
uniform mat4 inverseProjectionMatrix;
uniform vec3 cameraPosition;
uniform vec3 ellipsoidCenter;
uniform mat4 inverseEllipsoidMatrix;
uniform vec3 altitudeCorrection;
uniform vec3 ellipsoidRadii;
uniform float idealSphereAlpha;

varying vec3 vCameraPosition;
varying vec3 vRayDirection;
varying vec3 vEllipsoidCenter;
varying vec3 vGeometryEllipsoidCenter;
varying vec3 vEllipsoidRadiiSquared;

void getCameraRay(out vec3 origin, out vec3 direction) {
  bool isPerspective = inverseProjectionMatrix[2][3] != 0.0; // 4th entry in the 3rd column

  if (isPerspective) {
    // Calculate the camera ray for a perspective camera.
    vec4 viewPosition = inverseProjectionMatrix * vec4(position, 1.0);
    vec4 worldDirection = inverseViewMatrix * vec4(viewPosition.xyz, 0.0);
    origin = cameraPosition;
    direction = worldDirection.xyz;
  } else {
    // Unprojected points to calculate direction.
    vec4 nearPoint = inverseProjectionMatrix * vec4(position.xy, -1.0, 1.0);
    vec4 farPoint = inverseProjectionMatrix * vec4(position.xy, -0.9, 1.0);
    nearPoint /= nearPoint.w;
    farPoint /= farPoint.w;

    // Calculate world values.
    vec4 worldDirection = inverseViewMatrix * vec4(farPoint.xyz - nearPoint.xyz, 0.0);
    vec4 worldOrigin = inverseViewMatrix * nearPoint;

    // Outputs
    direction = worldDirection.xyz;
    origin = worldOrigin.xyz;
  }
}

void mainSupport() {
  vec3 direction, origin;
  getCameraRay(origin, direction);

  mat3 rotation = mat3(inverseEllipsoidMatrix);
  vCameraPosition = rotation * origin.xyz * METER_TO_LENGTH_UNIT;
  vRayDirection = rotation * direction.xyz;

  vEllipsoidCenter = (ellipsoidCenter + altitudeCorrection) * METER_TO_LENGTH_UNIT;
  #ifdef CORRECT_GEOMETRIC_ERROR
  // Gradually turn off altitude correction for aerial perspective as geometric
  // error correction takes effect.
  // See: https://github.com/takram-design-engineering/three-geospatial/pull/23#issuecomment-2542914656
  vGeometryEllipsoidCenter =
    (ellipsoidCenter + mix(altitudeCorrection, vec3(0.0), idealSphereAlpha)) * METER_TO_LENGTH_UNIT;
  #else
  vGeometryEllipsoidCenter = vEllipsoidCenter;
  #endif // CORRECT_GEOMETRIC_ERROR

  vec3 radii = ellipsoidRadii * METER_TO_LENGTH_UNIT;
  vEllipsoidRadiiSquared = radii * radii;
}
`,vc=`vec3 getLunarRadiance(const float moonAngularRadius) {
  // Not a physical number but the order of 10^-6 relative to the sun may fit.
  vec3 radiance = u_solar_irradiance * 0.000002 / (PI * moonAngularRadius * moonAngularRadius);
  #ifdef PHOTOMETRIC
  radiance *= SUN_SPECTRAL_RADIANCE_TO_LUMINANCE;
  #endif // PHOTOMETRIC
  return radiance;
}

float intersectSphere(const vec3 ray, const vec3 point, const float radius) {
  vec3 P = -point;
  float PoR = dot(P, ray);
  float D = dot(P, P) - radius * radius;
  return -PoR - sqrt(PoR * PoR - D);
}

float orenNayarDiffuse(const vec3 L, const vec3 V, const vec3 N) {
  float NoL = dot(N, L);
  float NoV = dot(N, V);
  float s = dot(L, V) - NoL * NoV;
  float t = mix(1.0, max(NoL, NoV), step(0.0, s));
  return max(0.0, NoL) * (0.62406015 + 0.41284404 * s / t);
}

vec3 getSkyRadiance(
  const vec3 cameraPosition,
  const vec3 rayDirection,
  float shadowLength,
  const vec3 sunDirection,
  const vec3 moonDirection,
  const float moonAngularRadius,
  const float lunarRadianceScale
) {
  vec3 transmittance;
  vec3 radiance = GetSkyRadiance(
    cameraPosition,
    rayDirection,
    shadowLength,
    sunDirection,
    transmittance
  );

  // Rendering celestial objects without perspective doesn't make sense.
  #ifdef PERSPECTIVE_CAMERA

  #if defined(SUN) || defined(MOON)
  vec3 ddx = dFdx(rayDirection);
  vec3 ddy = dFdy(rayDirection);
  float fragmentAngle = length(ddx + ddy) / length(rayDirection);
  #endif // defined(SUN) || defined(MOON)

  #ifdef SUN
  float viewDotSun = dot(rayDirection, sunDirection);
  if (viewDotSun > cos(u_sun_angular_radius)) {
    float angle = acos(clamp(viewDotSun, -1.0, 1.0));
    float antialias = smoothstep(u_sun_angular_radius, u_sun_angular_radius - fragmentAngle, angle);
    radiance += transmittance * GetSolarRadiance() * antialias;
  }
  #endif // SUN

  #ifdef MOON
  float intersection = intersectSphere(rayDirection, moonDirection, moonAngularRadius);
  if (intersection > 0.0) {
    vec3 normal = normalize(moonDirection - rayDirection * intersection);
    float diffuse = orenNayarDiffuse(-sunDirection, rayDirection, normal);
    float viewDotMoon = dot(rayDirection, moonDirection);
    float angle = acos(clamp(viewDotMoon, -1.0, 1.0));
    float antialias = smoothstep(moonAngularRadius, moonAngularRadius - fragmentAngle, angle);
    radiance +=
      transmittance *
      getLunarRadiance(moonAngularRadius) *
      lunarRadianceScale *
      diffuse *
      antialias;
  }
  #endif // MOON

  #endif // PERSPECTIVE_CAMERA

  return radiance;
}
`;var am=Object.defineProperty,qe=(r,e,t,i)=>{for(var n=void 0,s=r.length-1,a;s>=0;s--)(a=r[s])&&(n=a(e,t,n)||n);return n&&am(e,t,n),n};const om=new x,cm=new x,lm=new Vo,um={blendFunction:J.NORMAL,octEncodedNormal:!1,reconstructNormal:!1,ellipsoid:ut.WGS84,correctAltitude:!0,correctGeometricError:!0,photometric:!0,sunIrradiance:!1,skyIrradiance:!1,transmittance:!0,inscatter:!0,irradianceScale:1,sky:!1,sun:!0,moon:!0,moonAngularRadius:.0045,lunarRadianceScale:1};class Ke extends cd{constructor(e=new Ei,t,i=Li.DEFAULT){const{blendFunction:n,normalBuffer:s=null,octEncodedNormal:a,reconstructNormal:o,irradianceTexture:c=null,scatteringTexture:l=null,transmittanceTexture:u=null,ellipsoid:d,correctAltitude:f,correctGeometricError:p,photometric:h,sunDirection:v,sunIrradiance:y,skyIrradiance:g,transmittance:T,inscatter:R,irradianceScale:O,sky:b,sun:D,moon:C,moonDirection:E,moonAngularRadius:N,lunarRadianceScale:F}={...um,...t};super("AerialPerspectiveEffect",Lh(Ht(nm,{core:{depth:jh,packing:Kh,math:qh,transform:Xh,raySphereIntersection:gc,cascadedShadowMaps:Gh,interleavedGradientNoise:Yh,vogelDisk:$h},parameters:or,functions:vs,sky:vc})),{blendFunction:n,vertexShader:Ht(sm,{parameters:or}),attributes:ko.DEPTH,uniforms:new Map(Object.entries({normalBuffer:new I(s),projectionMatrix:new I(new Q),viewMatrix:new I(new Q),inverseProjectionMatrix:new I(new Q),inverseViewMatrix:new I(new Q),cameraPosition:new I(new x),bottomRadius:new I(i.bottomRadius),ellipsoidRadii:new I(new x),ellipsoidCenter:new I(new x),inverseEllipsoidMatrix:new I(new Q),altitudeCorrection:new I(new x),sunDirection:new I((v==null?void 0:v.clone())??new x),irradianceScale:new I(O),idealSphereAlpha:new I(0),moonDirection:new I((E==null?void 0:E.clone())??new x),moonAngularRadius:new I(N),lunarRadianceScale:new I(F),overlayBuffer:new I(null),shadowBuffer:new I(null),shadowMapSize:new I(new Ct),shadowIntervals:new I([]),shadowMatrices:new I([]),inverseShadowMatrices:new I([]),shadowFar:new I(0),shadowTopHeight:new I(0),shadowRadius:new I(3),stbnTexture:new I(null),frame:new I(0),shadowLengthBuffer:new I(null),u_solar_irradiance:new I(i.solarIrradiance),u_sun_angular_radius:new I(i.sunAngularRadius),u_bottom_radius:new I(i.bottomRadius*rr),u_top_radius:new I(i.topRadius*rr),u_rayleigh_scattering:new I(i.rayleighScattering),u_mie_scattering:new I(i.mieScattering),u_mie_phase_function_g:new I(i.miePhaseFunctionG),u_mu_s_min:new I(i.muSMin),u_irradiance_texture:new I(c),u_scattering_texture:new I(l),u_single_mie_scattering_texture:new I(l),u_transmittance_texture:new I(u)})),defines:new Map([["TRANSMITTANCE_TEXTURE_WIDTH",Ui.toFixed(0)],["TRANSMITTANCE_TEXTURE_HEIGHT",Hi.toFixed(0)],["SCATTERING_TEXTURE_R_SIZE",ys.toFixed(0)],["SCATTERING_TEXTURE_MU_SIZE",Ss.toFixed(0)],["SCATTERING_TEXTURE_MU_S_SIZE",ws.toFixed(0)],["SCATTERING_TEXTURE_NU_SIZE",_s.toFixed(0)],["IRRADIANCE_TEXTURE_WIDTH",Fi.toFixed(0)],["IRRADIANCE_TEXTURE_HEIGHT",Bi.toFixed(0)],["METER_TO_LENGTH_UNIT",rr.toFixed(7)],["SUN_SPECTRAL_RADIANCE_TO_LUMINANCE",`vec3(${i.sunRadianceToRelativeLuminance.toArray().map(Y=>Y.toFixed(12)).join(",")})`],["SKY_SPECTRAL_RADIANCE_TO_LUMINANCE",`vec3(${i.skyRadianceToRelativeLuminance.toArray().map(Y=>Y.toFixed(12)).join(",")})`]])}),this.camera=e,this.atmosphere=i,this.ellipsoidMatrix=new Q,this.overlay=null,this.shadow=null,this.shadowLength=null,this.shadowSampleCount=8,this.octEncodedNormal=a,this.reconstructNormal=o,this.ellipsoid=d,this.correctAltitude=f,this.correctGeometricError=p,this.photometric=h,this.sunIrradiance=y,this.skyIrradiance=g,this.transmittance=T,this.inscatter=R,this.sky=b,this.sun=D,this.moon=C}get mainCamera(){return this.camera}set mainCamera(e){this.camera=e}copyCameraSettings(e){const{projectionMatrix:t,matrixWorldInverse:i,projectionMatrixInverse:n,matrixWorld:s}=e,a=this.uniforms;a.get("projectionMatrix").value.copy(t),a.get("viewMatrix").value.copy(i),a.get("inverseProjectionMatrix").value.copy(n),a.get("inverseViewMatrix").value.copy(s);const o=e.getWorldPosition(a.get("cameraPosition").value),c=a.get("inverseEllipsoidMatrix").value.copy(this.ellipsoidMatrix).invert(),l=om.copy(o).applyMatrix4(c).sub(a.get("ellipsoidCenter").value);try{const d=lm.setFromECEF(l).height,f=cm.set(0,this.ellipsoid.maximumRadius,-d).applyMatrix4(t);a.get("idealSphereAlpha").value=wh(Sh(f.y,41.5,13.8,0,1))}catch{return}const u=a.get("altitudeCorrection");this.correctAltitude?ki(l,this.atmosphere.bottomRadius,this.ellipsoid,u.value):u.value.setScalar(0)}updateComposition(){const{uniforms:e,defines:t,overlay:i,shadow:n,shadowLength:s}=this,a=t.has("HAS_OVERLAY"),o=i!=null;o!==a&&(o?t.set("HAS_OVERLAY","1"):(t.delete("HAS_OVERLAY"),e.get("overlayBuffer").value=null),this.setChanged()),o&&(e.get("overlayBuffer").value=i.map);const c=t.has("HAS_SHADOW"),l=n!=null;if(l!==c&&(l?t.set("HAS_SHADOW","1"):(t.delete("HAS_SHADOW"),e.get("shadowBuffer").value=null),this.setChanged()),l){const f=t.get("SHADOW_CASCADE_COUNT"),p=`${n.cascadeCount}`;f!==p&&(t.set("SHADOW_CASCADE_COUNT",n.cascadeCount.toFixed(0)),this.setChanged()),e.get("shadowBuffer").value=n.map,e.get("shadowMapSize").value=n.mapSize,e.get("shadowIntervals").value=n.intervals,e.get("shadowMatrices").value=n.matrices,e.get("inverseShadowMatrices").value=n.inverseMatrices,e.get("shadowFar").value=n.far,e.get("shadowTopHeight").value=n.topHeight}const u=t.has("HAS_SHADOW_LENGTH"),d=s!=null;d!==u&&(d?t.set("HAS_SHADOW_LENGTH","1"):(t.delete("HAS_SHADOW_LENGTH"),e.get("shadowLengthBuffer").value=null),this.setChanged()),d&&(e.get("shadowLengthBuffer").value=s.map)}update(e,t,i){this.copyCameraSettings(this.camera),this.updateComposition(),++this.uniforms.get("frame").value}get normalBuffer(){return this.uniforms.get("normalBuffer").value}set normalBuffer(e){this.uniforms.get("normalBuffer").value=e}get irradianceTexture(){return this.uniforms.get("u_irradiance_texture").value}set irradianceTexture(e){this.uniforms.get("u_irradiance_texture").value=e}get scatteringTexture(){return this.uniforms.get("u_scattering_texture").value}set scatteringTexture(e){this.uniforms.get("u_scattering_texture").value=e,this.uniforms.get("u_single_mie_scattering_texture").value=e}get transmittanceTexture(){return this.uniforms.get("u_transmittance_texture").value}set transmittanceTexture(e){this.uniforms.get("u_transmittance_texture").value=e}get useHalfFloat(){return!0}set useHalfFloat(e){}get ellipsoid(){return this._ellipsoid}set ellipsoid(e){this._ellipsoid=e,this.uniforms.get("ellipsoidRadii").value.copy(e.radii)}get ellipsoidCenter(){return this.uniforms.get("ellipsoidCenter").value}get sunDirection(){return this.uniforms.get("sunDirection").value}get irradianceScale(){return this.uniforms.get("irradianceScale").value}set irradianceScale(e){this.uniforms.get("irradianceScale").value=e}get moonDirection(){return this.uniforms.get("moonDirection").value}get moonAngularRadius(){return this.uniforms.get("moonAngularRadius").value}set moonAngularRadius(e){this.uniforms.get("moonAngularRadius").value=e}get lunarRadianceScale(){return this.uniforms.get("lunarRadianceScale").value}set lunarRadianceScale(e){this.uniforms.get("lunarRadianceScale").value=e}get stbnTexture(){return this.uniforms.get("stbnTexture").value}set stbnTexture(e){this.uniforms.get("stbnTexture").value=e}get shadowRadius(){return this.uniforms.get("shadowRadius").value}set shadowRadius(e){this.uniforms.get("shadowRadius").value=e}}qe([Oe("OCT_ENCODED_NORMAL")],Ke.prototype,"octEncodedNormal");qe([Oe("RECONSTRUCT_NORMAL")],Ke.prototype,"reconstructNormal");qe([Oe("CORRECT_GEOMETRIC_ERROR")],Ke.prototype,"correctGeometricError");qe([Oe("PHOTOMETRIC")],Ke.prototype,"photometric");qe([Oe("SUN_IRRADIANCE")],Ke.prototype,"sunIrradiance");qe([Oe("SKY_IRRADIANCE")],Ke.prototype,"skyIrradiance");qe([Oe("TRANSMITTANCE")],Ke.prototype,"transmittance");qe([Oe("INSCATTER")],Ke.prototype,"inscatter");qe([Oe("SKY")],Ke.prototype,"sky");qe([Oe("SUN")],Ke.prototype,"sun");qe([Oe("MOON")],Ke.prototype,"moon");qe([_h("SHADOW_SAMPLE_COUNT",{min:1,max:16})],Ke.prototype,"shadowSampleCount");var dm=Object.defineProperty,hm=(r,e,t,i)=>{for(var n=void 0,s=r.length-1,a;s>=0;s--)(a=r[s])&&(n=a(e,t,n)||n);return n&&dm(e,t,n),n};const mm=new x;function fm(r,e){let t="",i="";for(let n=1;n<e;++n)t+=`layout(location = ${n}) out float renderTarget${n};
`,i+=`renderTarget${n} = 0.0;
`;return r.replace("#include <mrt_layout>",t).replace("#include <mrt_output>",i)}const xs={ellipsoid:ut.WGS84,correctAltitude:!0,photometric:!0,renderTargetCount:1};class Ts extends ll{constructor(e,t=Li.DEFAULT){const{irradianceTexture:i=null,scatteringTexture:n=null,transmittanceTexture:s=null,useHalfFloat:a,ellipsoid:o,correctAltitude:c,photometric:l,sunDirection:u,sunAngularRadius:d,renderTargetCount:f,...p}={...xs,...e};super({toneMapped:!1,depthWrite:!1,depthTest:!1,...p,uniforms:{cameraPosition:new I(new x),ellipsoidCenter:new I(new x),inverseEllipsoidMatrix:new I(new Q),altitudeCorrection:new I(new x),sunDirection:new I((u==null?void 0:u.clone())??new x),u_solar_irradiance:new I(t.solarIrradiance),u_sun_angular_radius:new I(d??t.sunAngularRadius),u_bottom_radius:new I(t.bottomRadius*rr),u_top_radius:new I(t.topRadius*rr),u_rayleigh_scattering:new I(t.rayleighScattering),u_mie_scattering:new I(t.mieScattering),u_mie_phase_function_g:new I(t.miePhaseFunctionG),u_mu_s_min:new I(t.muSMin),u_irradiance_texture:new I(i),u_scattering_texture:new I(n),u_single_mie_scattering_texture:new I(n),u_transmittance_texture:new I(s),...p.uniforms},defines:{PI:`${Math.PI}`,TRANSMITTANCE_TEXTURE_WIDTH:Ui.toFixed(0),TRANSMITTANCE_TEXTURE_HEIGHT:Hi.toFixed(0),SCATTERING_TEXTURE_R_SIZE:ys.toFixed(0),SCATTERING_TEXTURE_MU_SIZE:Ss.toFixed(0),SCATTERING_TEXTURE_MU_S_SIZE:ws.toFixed(0),SCATTERING_TEXTURE_NU_SIZE:_s.toFixed(0),IRRADIANCE_TEXTURE_WIDTH:Fi.toFixed(0),IRRADIANCE_TEXTURE_HEIGHT:Bi.toFixed(0),METER_TO_LENGTH_UNIT:rr.toFixed(7),SUN_SPECTRAL_RADIANCE_TO_LUMINANCE:`vec3(${t.sunRadianceToRelativeLuminance.toArray().map(h=>h.toFixed(12)).join(",")})`,SKY_SPECTRAL_RADIANCE_TO_LUMINANCE:`vec3(${t.skyRadianceToRelativeLuminance.toArray().map(h=>h.toFixed(12)).join(",")})`,...p.defines}}),this.atmosphere=t,this.ellipsoidMatrix=new Q,this.atmosphere=t,this.ellipsoid=o,this.correctAltitude=c,this.photometric=l,this.renderTargetCount=f}copyCameraSettings(e){const t=this.uniforms,i=e.getWorldPosition(t.cameraPosition.value),n=t.inverseEllipsoidMatrix.value.copy(this.ellipsoidMatrix).invert(),s=mm.copy(i).applyMatrix4(n).sub(t.ellipsoidCenter.value),a=t.altitudeCorrection.value;this.correctAltitude?ki(s,this.atmosphere.bottomRadius,this.ellipsoid,a):a.setScalar(0)}onBeforeCompile(e,t){e.fragmentShader=fm(e.fragmentShader,this.renderTargetCount)}onBeforeRender(e,t,i,n,s,a){this.copyCameraSettings(i)}get irradianceTexture(){return this.uniforms.u_irradiance_texture.value}set irradianceTexture(e){this.uniforms.u_irradiance_texture.value=e}get scatteringTexture(){return this.uniforms.u_scattering_texture.value}set scatteringTexture(e){this.uniforms.u_scattering_texture.value=e,this.uniforms.u_single_mie_scattering_texture.value=e}get transmittanceTexture(){return this.uniforms.u_transmittance_texture.value}set transmittanceTexture(e){this.uniforms.u_transmittance_texture.value=e}get useHalfFloat(){return!0}set useHalfFloat(e){}get ellipsoidCenter(){return this.uniforms.ellipsoidCenter.value}get sunDirection(){return this.uniforms.sunDirection.value}get sunAngularRadius(){return this.uniforms.u_sun_angular_radius.value}set sunAngularRadius(e){this.uniforms.u_sun_angular_radius.value=e}get renderTargetCount(){return this._renderTargetCount}set renderTargetCount(e){e!==this.renderTargetCount&&(this._renderTargetCount=e,this.needsUpdate=!0)}}hm([Oe("PHOTOMETRIC")],Ts.prototype,"photometric");var ct;(function(r){r.Sun="Sun",r.Moon="Moon",r.Mercury="Mercury",r.Venus="Venus",r.Earth="Earth",r.Mars="Mars",r.Jupiter="Jupiter",r.Saturn="Saturn",r.Uranus="Uranus",r.Neptune="Neptune",r.Pluto="Pluto",r.SSB="SSB",r.EMB="EMB",r.Star1="Star1",r.Star2="Star2",r.Star3="Star3",r.Star4="Star4",r.Star5="Star5",r.Star6="Star6",r.Star7="Star7",r.Star8="Star8"})(ct||(ct={}));ct.Star1,ct.Star2,ct.Star3,ct.Star4,ct.Star5,ct.Star6,ct.Star7,ct.Star8;var Ba;(function(r){r[r.From2000=0]="From2000",r[r.Into2000=1]="Into2000"})(Ba||(Ba={}));var Ua;(function(r){r[r.Pericenter=0]="Pericenter",r[r.Apocenter=1]="Apocenter"})(Ua||(Ua={}));var Ha;(function(r){r.Penumbral="penumbral",r.Partial="partial",r.Annular="annular",r.Total="total"})(Ha||(Ha={}));var ka;(function(r){r[r.Invalid=0]="Invalid",r[r.Ascending=1]="Ascending",r[r.Descending=-1]="Descending"})(ka||(ka={}));function yc(r){return Math.sqrt(Math.max(r,0))}function pm(r){return Math.max(r,0)}function gm(r,e,t){const{bottomRadius:i}=r;return t<0&&e**2*(t**2-1)+i**2>=0}function vm(r,e,t){const{topRadius:i}=r,n=e**2*(t**2-1)+i**2;return pm(-e*t+yc(n))}function bi(r,e){return .5/e+r*(1-1/e)}var ym="Invariant failed";function Sm(r,e){if(!r)throw new Error(ym)}const wm=new x,za=new x,_m=new x;function li(r,e,t){const i=e*4;return t.set(r[i],r[i+1],r[i+2])}function Sc(r,e,t){const{width:i,height:n}=r.image;Sm(ch(r.image.data));let s=r.image.data;r.type===Ro&&s instanceof Uint16Array&&(s=new ce(s.buffer));const a=Mi(e.x,0,1)*(i-1),o=Mi(e.y,0,1)*(n-1),c=Math.floor(a),l=Math.floor(o),u=a-c,d=o-l,f=u,p=d,h=c%i,v=(h+1)%i,y=l%n,g=(y+1)%n,T=li(s,y*i+h,wm),R=li(s,y*i+v,za),O=T.lerp(R,f),b=li(s,g*i+h,za),D=li(s,g*i+v,_m),C=b.lerp(D,f);return t.copy(O.lerp(C,p))}function xm(r,e,t,i){const{topRadius:n,bottomRadius:s}=r,a=Math.sqrt(n**2-s**2),o=yc(e**2-s**2),c=vm(r,e,t),l=n-e,u=o+a,d=(c-l)/(u-l),f=o/a;return i.set(bi(d,Ui),bi(f,Hi))}const Tm=new x,vn=new x,Mm=new Ct;function Va(r,e,t,i=new ke,{ellipsoid:n=ut.WGS84,correctAltitude:s=!0,photometric:a=!0}={},o=Li.DEFAULT){const c=Tm.copy(e);if(s){const v=n.projectOnSurface(e,vn);v!=null&&c.sub(n.getOsculatingSphereCenter(v,o.bottomRadius,vn))}const l=vn;let u=c.length(),d=c.dot(t);const{topRadius:f}=o,p=-d-Math.sqrt(d**2-u**2+f**2);if(p>0&&(u=f,d+=p),u>f)l.set(1,1,1);else{const v=d/u;if(gm(o,u,v))l.setScalar(0);else{const y=xm(o,u,v,Mm);Sc(r,y,l)}}const h=l.multiply(o.solarIrradiance);return a&&h.multiply(o.sunRadianceToRelativeLuminance),i.setFromVector3(h)}var Gr=Uint8Array,wc=Uint16Array,bm=Uint32Array,Rm=new Gr([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Em=new Gr([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),_c=function(r,e){for(var t=new wc(31),i=0;i<31;++i)t[i]=e+=1<<r[i-1];for(var n=new bm(t[30]),i=1;i<30;++i)for(var s=t[i];s<t[i+1];++s)n[s]=s-t[i]<<5|i;return[t,n]},xc=_c(Rm,2),Am=xc[0],Cm=xc[1];Am[28]=258,Cm[258]=28;_c(Em,0);var Im=new wc(32768);for(var pe=0;pe<32768;++pe){var Et=(pe&43690)>>>1|(pe&21845)<<1;Et=(Et&52428)>>>2|(Et&13107)<<2,Et=(Et&61680)>>>4|(Et&3855)<<4,Im[pe]=((Et&65280)>>>8|(Et&255)<<8)>>>1}var zi=new Gr(288);for(var pe=0;pe<144;++pe)zi[pe]=8;for(var pe=144;pe<256;++pe)zi[pe]=9;for(var pe=256;pe<280;++pe)zi[pe]=7;for(var pe=280;pe<288;++pe)zi[pe]=8;var Dm=new Gr(32);for(var pe=0;pe<32;++pe)Dm[pe]=5;var Pm=new Gr(0),Om=typeof TextDecoder<"u"&&new TextDecoder,Nm=0;try{Om.decode(Pm,{stream:!0}),Nm=1}catch{}function Lm({topRadius:r,bottomRadius:e},t,i,n){const s=(t-e)/(r-e),a=i*.5+.5;return n.set(bi(a,Fi),bi(s,Bi))}const Fm=1/Math.sqrt(Math.PI),yn=Math.sqrt(3)/(2*Math.sqrt(Math.PI)),Bm=new x,Sn=new x,Um=new Ct,Hm=new Q,km={ellipsoid:ut.WGS84,correctAltitude:!0,photometric:!0};class zm extends Eo{constructor(e,t=Li.DEFAULT){super(),this.atmosphere=t,this.ellipsoidCenter=new x,this.ellipsoidMatrix=new Q;const{irradianceTexture:i=null,ellipsoid:n,correctAltitude:s,photometric:a,sunDirection:o}={...km,...e};this.irradianceTexture=i,this.ellipsoid=n,this.correctAltitude=s,this.photometric=a,this.sunDirection=(o==null?void 0:o.clone())??new x}update(){if(this.irradianceTexture==null)return;const e=Hm.copy(this.ellipsoidMatrix).invert(),t=this.getWorldPosition(Bm).applyMatrix4(e).sub(this.ellipsoidCenter);if(this.correctAltitude){const l=this.ellipsoid.projectOnSurface(t,Sn);l!=null&&t.sub(ki(l,this.atmosphere.bottomRadius,this.ellipsoid,Sn))}const i=t.length(),n=t.dot(this.sunDirection)/i,s=Lm(this.atmosphere,i,n,Um),a=Sc(this.irradianceTexture,s,Sn);this.photometric&&a.multiply(this.atmosphere.skyRadianceToRelativeLuminance);const o=this.ellipsoid.getSurfaceNormal(t).applyMatrix4(this.ellipsoidMatrix),c=this.sh.coefficients;c[0].copy(a).multiplyScalar(Fm),c[1].copy(a).multiplyScalar(yn*o.y),c[2].copy(a).multiplyScalar(yn*o.z),c[3].copy(a).multiplyScalar(yn*o.x)}}const Vm=`precision highp float;
precision highp sampler3D;

#define RECIPROCAL_PI (0.3183098861837907)

#include "core/raySphereIntersection"
#include "parameters"
#include "functions"
#include "sky"

uniform vec3 sunDirection;
uniform vec3 moonDirection;
uniform float moonAngularRadius;
uniform float lunarRadianceScale;
uniform vec3 groundAlbedo;

#ifdef HAS_SHADOW_LENGTH
uniform sampler2D shadowLengthBuffer;
#endif // HAS_SHADOW_LENGTH

in vec2 vUv;
in vec3 vCameraPosition;
in vec3 vRayDirection;
in vec3 vEllipsoidCenter;

layout(location = 0) out vec4 outputColor;

#include <mrt_layout>

bool rayIntersectsGround(const vec3 cameraPosition, const vec3 rayDirection) {
  float r = length(cameraPosition);
  float mu = dot(cameraPosition, rayDirection) / r;
  return mu < 0.0 && r * r * (mu * mu - 1.0) + u_bottom_radius * u_bottom_radius >= 0.0;
}

void main() {
  float shadowLength = 0.0;
  #ifdef HAS_SHADOW_LENGTH
  shadowLength = texture(shadowLengthBuffer, vUv).r;
  #endif // HAS_SHADOW_LENGTH

  vec3 cameraPosition = vCameraPosition - vEllipsoidCenter;
  vec3 rayDirection = normalize(vRayDirection);

  #ifdef GROUND_ALBEDO

  bool intersectsGround = rayIntersectsGround(cameraPosition, rayDirection);
  if (intersectsGround) {
    float distanceToGround = raySphereFirstIntersection(
      cameraPosition,
      rayDirection,
      u_bottom_radius
    );
    vec3 groundPosition = rayDirection * distanceToGround + cameraPosition;
    vec3 surfaceNormal = normalize(groundPosition);
    vec3 skyIrradiance;
    vec3 sunIrradiance = GetSunAndSkyIrradiance(
      cameraPosition,
      surfaceNormal,
      sunDirection,
      skyIrradiance
    );
    vec3 transmittance;
    vec3 inscatter = GetSkyRadianceToPoint(
      cameraPosition,
      u_bottom_radius * surfaceNormal,
      shadowLength,
      sunDirection,
      transmittance
    );
    vec3 radiance = groundAlbedo * RECIPROCAL_PI * (sunIrradiance + skyIrradiance);
    outputColor.rgb = radiance * transmittance + inscatter;
  } else {
    outputColor.rgb = getSkyRadiance(
      cameraPosition,
      rayDirection,
      shadowLength,
      sunDirection,
      moonDirection,
      moonAngularRadius,
      lunarRadianceScale
    );
  }

  #else // GROUND_ALBEDO

  outputColor.rgb = getSkyRadiance(
    cameraPosition,
    rayDirection,
    shadowLength,
    sunDirection,
    moonDirection,
    moonAngularRadius,
    lunarRadianceScale
  );

  #endif // GROUND_ALBEDO

  outputColor.a = 1.0;

  #include <mrt_output>
}
`,Wm=`precision highp float;
precision highp sampler3D;

#include "parameters"

uniform mat4 inverseProjectionMatrix;
uniform mat4 inverseViewMatrix;
uniform vec3 cameraPosition;
uniform vec3 ellipsoidCenter;
uniform mat4 inverseEllipsoidMatrix;
uniform vec3 altitudeCorrection;

layout(location = 0) in vec3 position;

out vec2 vUv;
out vec3 vCameraPosition;
out vec3 vRayDirection;
out vec3 vEllipsoidCenter;

void getCameraRay(out vec3 origin, out vec3 direction) {
  bool isPerspective = inverseProjectionMatrix[2][3] != 0.0; // 4th entry in the 3rd column

  if (isPerspective) {
    // Calculate the camera ray for a perspective camera.
    vec4 viewPosition = inverseProjectionMatrix * vec4(position, 1.0);
    vec4 worldDirection = inverseViewMatrix * vec4(viewPosition.xyz, 0.0);
    origin = cameraPosition;
    direction = worldDirection.xyz;
  } else {
    // Unprojected points to calculate direction.
    vec4 nearPoint = inverseProjectionMatrix * vec4(position.xy, -1.0, 1.0);
    vec4 farPoint = inverseProjectionMatrix * vec4(position.xy, -0.9, 1.0);
    nearPoint /= nearPoint.w;
    farPoint /= farPoint.w;

    // Calculate world values
    vec4 worldDirection = inverseViewMatrix * vec4(farPoint.xyz - nearPoint.xyz, 0.0);
    vec4 worldOrigin = inverseViewMatrix * nearPoint;

    // Outputs
    direction = worldDirection.xyz;
    origin = worldOrigin.xyz;
  }
}

void main() {
  vUv = position.xy * 0.5 + 0.5;

  vec3 direction, origin;
  getCameraRay(origin, direction);

  mat3 rotation = mat3(inverseEllipsoidMatrix);
  vCameraPosition = rotation * origin.xyz * METER_TO_LENGTH_UNIT;
  vRayDirection = rotation * direction.xyz;
  vEllipsoidCenter = (ellipsoidCenter + altitudeCorrection) * METER_TO_LENGTH_UNIT;

  gl_Position = vec4(position.xy, 1.0, 1.0);
}
`;var Gm=Object.defineProperty,Tc=(r,e,t,i)=>{for(var n=void 0,s=r.length-1,a;s>=0;s--)(a=r[s])&&(n=a(e,t,n)||n);return n&&Gm(e,t,n),n};const jm={...xs,sun:!0,moon:!0,moonAngularRadius:.0045,lunarRadianceScale:1};class Ms extends Ts{constructor(e){const{sun:t,moon:i,moonDirection:n,moonAngularRadius:s,lunarRadianceScale:a,groundAlbedo:o,...c}={...jm,...e};super({name:"SkyMaterial",glslVersion:Or,vertexShader:Ht(Wm,{parameters:or}),fragmentShader:Ht(Vm,{core:{raySphereIntersection:gc},parameters:or,functions:vs,sky:vc}),...c,uniforms:{inverseProjectionMatrix:new I(new Q),inverseViewMatrix:new I(new Q),moonDirection:new I((n==null?void 0:n.clone())??new x),moonAngularRadius:new I(s),lunarRadianceScale:new I(a),groundAlbedo:new I((o==null?void 0:o.clone())??new ke(0)),shadowLengthBuffer:new I(null),...c.uniforms},defines:{PERSPECTIVE_CAMERA:"1"},depthTest:!0}),this.shadowLength=null,this.sun=t,this.moon=i}onBeforeRender(e,t,i,n,s,a){super.onBeforeRender(e,t,i,n,s,a);const{uniforms:o,defines:c}=this;o.inverseProjectionMatrix.value.copy(i.projectionMatrixInverse),o.inverseViewMatrix.value.copy(i.matrixWorld);const l=c.PERSPECTIVE_CAMERA!=null,u=i.isPerspectiveCamera===!0;u!==l&&(u?c.PERSPECTIVE_CAMERA="1":delete c.PERSPECTIVE_CAMERA,this.needsUpdate=!0);const d=this.groundAlbedo,f=c.GROUND_ALBEDO!=null,p=d.r!==0||d.g!==0||d.b!==0;p!==f&&(p?this.defines.GROUND_ALBEDO="1":delete this.defines.GROUND_ALBEDO,this.needsUpdate=!0);const h=this.shadowLength,v=c.HAS_SHADOW_LENGTH!=null,y=h!=null;y!==v&&(y?c.HAS_SHADOW_LENGTH="1":(delete c.HAS_SHADOW_LENGTH,o.shadowLengthBuffer.value=null),this.needsUpdate=!0),y&&(o.shadowLengthBuffer.value=h.map)}get moonDirection(){return this.uniforms.moonDirection.value}get moonAngularRadius(){return this.uniforms.moonAngularRadius.value}set moonAngularRadius(e){this.uniforms.moonAngularRadius.value=e}get lunarRadianceScale(){return this.uniforms.lunarRadianceScale.value}set lunarRadianceScale(e){this.uniforms.lunarRadianceScale.value=e}get groundAlbedo(){return this.uniforms.groundAlbedo.value}}Tc([Oe("SUN")],Ms.prototype,"sun");Tc([Oe("MOON")],Ms.prototype,"moon");const Ym=`precision highp float;
precision highp sampler3D;

#include "parameters"
#include "functions"

uniform vec3 sunDirection;

in vec3 vCameraPosition;
in vec3 vRayDirection;
in vec3 vEllipsoidCenter;

layout(location = 0) out vec4 outputColor;

#include <mrt_layout>

in vec3 vColor;

void main() {
  #if !defined(PERSPECTIVE_CAMERA)
  outputColor = vec4(0.0);
  discard; // Rendering celestial objects without perspective doesn't make sense.
  #endif // !defined(PERSPECTIVE_CAMERA)

  #ifdef BACKGROUND
  vec3 cameraPosition = vCameraPosition - vEllipsoidCenter;
  vec3 rayDirection = normalize(vRayDirection);
  float r = length(cameraPosition);
  float mu = dot(cameraPosition, rayDirection) / r;

  if (RayIntersectsGround(r, mu)) {
    discard;
  }

  vec3 transmittance;
  vec3 radiance = GetSkyRadiance(
    vCameraPosition - vEllipsoidCenter,
    normalize(vRayDirection),
    0.0,
    sunDirection,
    transmittance
  );
  radiance += transmittance * vColor;
  outputColor = vec4(radiance, 1.0);
  #else // BACKGROUND
  outputColor = vec4(vColor, 1.0);
  #endif // BACKGROUND

  #include <mrt_output>
}
`,qm=`precision highp float;
precision highp sampler3D;

#include "parameters"

#define saturate(x) clamp(x, 0.0, 1.0)

uniform mat4 projectionMatrix;
uniform mat4 modelViewMatrix;
uniform mat4 viewMatrix;
uniform mat4 matrixWorld;
uniform vec3 cameraPosition;
uniform float cameraFar;
uniform vec3 ellipsoidCenter;
uniform mat4 inverseEllipsoidMatrix;
uniform vec3 altitudeCorrection;
uniform float pointSize;
uniform vec2 magnitudeRange;
uniform float radianceScale;

layout(location = 0) in vec3 position;
layout(location = 1) in float magnitude;
layout(location = 2) in vec3 color;

out vec3 vCameraPosition;
out vec3 vRayDirection;
out vec3 vEllipsoidCenter;
out vec3 vColor;

void main() {
  // Magnitude is stored between 0 to 1 within the given range.
  float m = mix(magnitudeRange.x, magnitudeRange.y, magnitude);
  vec3 v = pow(vec3(10.0), -vec3(magnitudeRange, m) / 2.5);
  vColor = vec3(radianceScale * color);
  vColor *= saturate((v.z - v.y) / (v.x - v.y));

  #ifdef BACKGROUND
  vec3 worldDirection = normalize(matrixWorld * vec4(position, 1.0)).xyz;
  mat3 rotation = mat3(inverseEllipsoidMatrix);
  vCameraPosition = rotation * cameraPosition * METER_TO_LENGTH_UNIT;
  vRayDirection = rotation * worldDirection;
  vEllipsoidCenter = (ellipsoidCenter + altitudeCorrection) * METER_TO_LENGTH_UNIT;
  gl_Position =
    projectionMatrix * viewMatrix * vec4(cameraPosition + worldDirection * cameraFar, 1.0);
  #else // BACKGROUND
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  #endif // BACKGROUND

  gl_PointSize = pointSize;
}
`;var Km=Object.defineProperty,Xm=(r,e,t,i)=>{for(var n=void 0,s=r.length-1,a;s>=0;s--)(a=r[s])&&(n=a(e,t,n)||n);return n&&Km(e,t,n),n};const $m={...xs,pointSize:1,radianceScale:1,background:!0};class Qm extends Ts{constructor(e){const{pointSize:t,radianceScale:i,background:n,...s}={...$m,...e};super({name:"StarsMaterial",glslVersion:Or,vertexShader:Ht(qm,{parameters:or}),fragmentShader:Ht(Ym,{parameters:or,functions:vs}),...s,uniforms:{projectionMatrix:new I(new Q),modelViewMatrix:new I(new Q),viewMatrix:new I(new Q),matrixWorld:new I(new Q),cameraFar:new I(0),pointSize:new I(0),magnitudeRange:new I(new Ct(-2,8)),radianceScale:new I(i),...s.uniforms},defines:{PERSPECTIVE_CAMERA:"1"}}),this.pointSize=t,this.background=n}onBeforeRender(e,t,i,n,s,a){super.onBeforeRender(e,t,i,n,s,a);const o=this.uniforms;o.projectionMatrix.value.copy(i.projectionMatrix),o.modelViewMatrix.value.copy(i.modelViewMatrix),o.viewMatrix.value.copy(i.matrixWorldInverse),o.matrixWorld.value.copy(s.matrixWorld),o.cameraFar.value=i.far,o.pointSize.value=this.pointSize*e.getPixelRatio();const c=i.isPerspectiveCamera===!0;this.defines.PERSPECTIVE_CAMERA!=null!==c&&(c?this.defines.PERSPECTIVE_CAMERA="1":delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}get magnitudeRange(){return this.uniforms.magnitudeRange.value}get radianceScale(){return this.uniforms.radianceScale.value}set radianceScale(e){this.uniforms.radianceScale.value=e}}Xm([Oe("BACKGROUND")],Qm.prototype,"background");const Wa=new ke("#fff2d8"),Ga=1e-8,wn=3e4,ja=-1e3,Ya=1e7,Zm=5e6,Jm=8e6,Fr=r=>Number.isFinite(r.x)&&Number.isFinite(r.y)&&Number.isFinite(r.z),qa=r=>!Number.isFinite(r.longitude)||Math.abs(r.longitude)>180?"longitude must be a finite value in degrees within [-180, 180]":!Number.isFinite(r.latitude)||Math.abs(r.latitude)>90?"latitude must be a finite value in degrees within [-90, 90]":!Number.isFinite(r.altitudeMeters)||r.altitudeMeters<ja||r.altitudeMeters>Ya?`altitudeMeters must be within [${ja}, ${Ya}]`:null,ef=(r,e,t)=>{if(!Number.isFinite(r.getTime()))return"instant must be a valid Date";const i=qa(e);if(i)return`observer ${i}`;if(!t)return null;const n=qa(t.observer);return n?`sky reference observer ${n}`:Fr(t.scenePosition)?null:"sky reference scenePosition must contain finite metre coordinates"},Mc=r=>{if(!Fr(r.directionToSunECEF))return"sun direction contains a non-finite component";if(Math.abs(r.directionToSunECEF.length()-1)>1e-6)return"sun direction is not normalized";if(!r.ecefToSceneMatrix.elements.every(Number.isFinite))return"ECEF-to-scene matrix contains a non-finite component";const e=r.ecefToSceneMatrix.elements,t=[new x(e[0],e[4],e[8]),new x(e[1],e[5],e[9]),new x(e[2],e[6],e[10])];if(t.some(s=>Math.abs(s.length()-1)>1e-6)||Math.abs(t[0].dot(t[1]))>1e-6||Math.abs(t[0].dot(t[2]))>1e-6||Math.abs(t[1].dot(t[2]))>1e-6||Math.abs(e[3])>1e-12||Math.abs(e[7])>1e-12||Math.abs(e[11])>1e-12||Math.abs(e[12])>1e-12||Math.abs(e[13])>1e-12||Math.abs(e[14])>1e-12||Math.abs(e[15]-1)>1e-12)return"ECEF-to-scene matrix is not an affine orthonormal rotation";const i=r.ecefToSceneMatrix.determinant();if(!Number.isFinite(i)||Math.abs(i-1)>1e-6)return"ECEF-to-scene matrix is not a proper orthonormal rotation";if(!Fr(r.ellipsoidCenterECEF))return"ellipsoid center contains a non-finite component";const n=r.ellipsoidCenterECEF.length();return n<Zm||n>Jm?"ellipsoid center is outside the plausible WGS84 distance range":null},tf=r=>{var t;const e=Mc(r.skyFrame);return e||(Fr(r.directionToSun)?Math.abs(r.directionToSun.length()-1)>1e-6?"scene sun direction is not normalized":![r.color.r,r.color.g,r.color.b].every(Number.isFinite)||![r.radiance.r,r.radiance.g,r.radiance.b].every(Number.isFinite)||!Number.isFinite(r.relativeIntensity)||r.relativeIntensity<0||r.relativeIntensity>1||!Number.isFinite(r.azimuthDegrees)||!Number.isFinite(r.elevationDegrees)?"sunlight color, intensity, or angles contain invalid values":(t=r.skyIrradianceCoefficients)!=null&&t.some(i=>!Fr(i))?"sky irradiance contains a non-finite coefficient":null:"scene sun direction contains a non-finite component")},_n={useTransmittanceLut:!0,useIrradianceLut:!0},rf=({east:r,north:e,up:t})=>new Q().set(r.x,r.y,r.z,0,t.x,t.y,t.z,0,-e.x,-e.y,-e.z,0,0,0,0,1);function bs({longitude:r,latitude:e,altitudeMeters:t}){const i=new Vo(Xn(r),Xn(e),t).toECEF(),n=new x,s=new x,a=new x;return ut.WGS84.getEastNorthUpVectors(i,n,s,a),{observerECEF:i,east:n,north:s,up:a}}const bc=(r,{east:e,north:t,up:i},n)=>n.set(r.dot(e),r.dot(i),-r.dot(t)).normalize(),Rc=(r,e,t)=>{const i=t?bs(t.observer):e,n=rf(i);t!=null&&t.sceneFromLocal&&n.premultiply(t.sceneFromLocal);const s=n.clone().invert(),a=((t==null?void 0:t.scenePosition)??new x).clone().applyMatrix4(s).sub(i.observerECEF);return{directionToSunECEF:r.clone(),ecefToSceneMatrix:n,ellipsoidCenterECEF:a}},nf=(r,e,{observerECEF:t,east:i,north:n,up:s})=>r!=null&&r.irradianceTexture?(r.ellipsoidMatrix.set(i.x,i.y,i.z,0,s.x,s.y,s.z,0,-n.x,-n.y,-n.z,0,0,0,0,1),r.ellipsoidCenter.copy(t).negate(),r.sunDirection.copy(e),r.position.set(0,0,0),r.updateMatrixWorld(!0),r.update(),r.sh.coefficients.map(a=>a.clone())):null,Ec=r=>{const e=Js(Math.asin(Ye(r.y,-1,1)));return{azimuthDegrees:(Js(Math.atan2(r.x,-r.z))+360)%360,elevationDegrees:e}},sf=(r,e)=>{const t=bs(e.observer),i=bc(r.skyFrame.directionToSunECEF,t,new x);return e.sceneFromLocal&&i.transformDirection(e.sceneFromLocal),{...r,directionToSun:i,...Ec(i),skyFrame:Rc(r.skyFrame.directionToSunECEF,t,e)}},af=(r,e,t,i=null,n)=>{const s=bs(e),{observerECEF:a,up:o}=s,c=new x(...ul(r)),l=bc(c,s,new x);n!=null&&n.sceneFromLocal&&l.transformDirection(n.sceneFromLocal);const u=Rc(c,s,n),d=nf(i,c,s),{azimuthDegrees:f,elevationDegrees:p}=Ec(l);if(!t){const R=Math.sqrt(Ye(l.y,0,1));return{directionToSun:l,color:Wa.clone(),relativeIntensity:R,radiance:Wa.clone().multiplyScalar(R),atmosphericTransmittanceReady:!1,atmosphericIrradianceReady:d!==null,skyIrradianceCoefficients:d,azimuthDegrees:f,elevationDegrees:p,skyFrame:u}}const h=Va(t,a,c,new ke,{ellipsoid:ut.WGS84,correctAltitude:!0,photometric:!0}),v=Va(t,a,o,new ke,{ellipsoid:ut.WGS84,correctAltitude:!0,photometric:!0}),y=Math.max(h.r,h.g,h.b,0),g=Math.max(v.r,v.g,v.b,Ga),T=y>Ga?h.clone().multiplyScalar(1/y):new ke(0,0,0);return{directionToSun:l,color:T,relativeIntensity:Ye(y/g,0,1),radiance:h,atmosphericTransmittanceReady:!0,atmosphericIrradianceReady:d!==null,skyIrradianceCoefficients:d,azimuthDegrees:f,elevationDegrees:p,skyFrame:u}};class of{transmittanceTexture=null;irradianceTexture=null;scatteringTexture=null;skyLightProbe=new zm({ellipsoid:ut.WGS84,correctAltitude:!0,photometric:!0});transmittanceLoading=!1;irradianceLoading=!1;scatteringLoading=!1;transmittanceRetryAt=0;irradianceRetryAt=0;scatteringRetryAt=0;disposed=!1;get ready(){return this.transmittanceTexture!==null&&this.irradianceTexture!==null}get skyReady(){return this.skyTextures!==null}get skyTextures(){return!this.transmittanceTexture||!this.irradianceTexture||!this.scatteringTexture?null:{transmittanceTexture:this.transmittanceTexture,irradianceTexture:this.irradianceTexture,scatteringTexture:this.scatteringTexture}}get isSkyLoading(){return this.transmittanceLoading||this.irradianceLoading||this.scatteringLoading}isLoadingFor(e=_n){return e.useTransmittanceLut&&this.transmittanceLoading||e.useIrradianceLut&&this.irradianceLoading}ensure(e,t=_n){if(this.disposed)return;const i=()=>{this.isLoadingFor(t)||e()};t.useTransmittanceLut&&this.ensureTransmittance(i),t.useIrradianceLut&&this.ensureIrradiance(i)}ensureSky(e){if(this.disposed||this.skyReady)return;let t=!1;const i=()=>{!t&&!this.isSkyLoading&&(t=!0,e())};this.ensureTransmittance(i),this.ensureIrradiance(i),this.ensureScattering(i)}ensureTransmittance(e){this.transmittanceTexture||this.transmittanceLoading||Date.now()<this.transmittanceRetryAt||(this.transmittanceLoading=!0,Fa(pn,{width:Ui,height:Hi}).load(`${gn}/transmittance.bin`,t=>{if(this.transmittanceLoading=!1,this.disposed){t.dispose();return}this.transmittanceRetryAt=0,this.transmittanceTexture=t,e()},void 0,t=>{this.transmittanceLoading=!1,this.disposed||(this.transmittanceRetryAt=Date.now()+wn,console.error("[SHADOW] Takram transmittance LUT failed",t),e())}))}ensureIrradiance(e){this.irradianceTexture||this.irradianceLoading||Date.now()<this.irradianceRetryAt||(this.irradianceLoading=!0,Fa(pn,{width:Fi,height:Bi}).load(`${gn}/irradiance.bin`,t=>{if(this.irradianceLoading=!1,this.disposed){t.dispose();return}this.irradianceRetryAt=0,this.irradianceTexture=t,this.skyLightProbe.irradianceTexture=t,e()},void 0,t=>{this.irradianceLoading=!1,this.disposed||(this.irradianceRetryAt=Date.now()+wn,console.error("[SHADOW] Takram irradiance LUT failed",t),e())}))}ensureScattering(e){this.scatteringTexture||this.scatteringLoading||Date.now()<this.scatteringRetryAt||(this.scatteringLoading=!0,yh(pn,{width:Jh,height:em,depth:tm}).load(`${gn}/scattering.bin`,t=>{if(this.scatteringLoading=!1,this.disposed){t.dispose();return}this.scatteringRetryAt=0,this.scatteringTexture=t,e()},void 0,t=>{this.scatteringLoading=!1,this.disposed||(this.scatteringRetryAt=Date.now()+wn,console.error("[SHADOW] Takram scattering LUT failed",t),e())}))}evaluate(e,t,i=_n,n){return af(e,t,i.useTransmittanceLut?this.transmittanceTexture:null,i.useIrradianceLut?this.skyLightProbe:null,n)}dispose(){var e,t,i;this.disposed||(this.disposed=!0,this.transmittanceLoading=!1,this.irradianceLoading=!1,this.scatteringLoading=!1,this.transmittanceRetryAt=0,this.irradianceRetryAt=0,this.scatteringRetryAt=0,(e=this.transmittanceTexture)==null||e.dispose(),(t=this.irradianceTexture)==null||t.dispose(),(i=this.scatteringTexture)==null||i.dispose(),this.transmittanceTexture=null,this.irradianceTexture=null,this.scatteringTexture=null,this.skyLightProbe.irradianceTexture=null,this.skyLightProbe.sh.zero())}}const cf="shadow-simulation-atmospheric-sky",jr=2,fi="carmaOutputToSrgb",xn="carmaDisplayExposure",lf=new x;class uf extends Ms{observerScenePosition=new x;hasObserverScenePosition=!1;viewCamera=null;copyCameraSettings(e){if(super.copyCameraSettings(e),!this.hasObserverScenePosition)return;const t=this.uniforms;if(t.cameraPosition.value.copy(this.observerScenePosition),!this.correctAltitude)return;const i=lf.copy(this.observerScenePosition).applyMatrix4(t.inverseEllipsoidMatrix.value).sub(t.ellipsoidCenter.value);ki(i,this.atmosphere.bottomRadius,this.ellipsoid,t.altitudeCorrection.value)}onBeforeRender(e,t,i,n,s,a){super.onBeforeRender(e,t,this.viewCamera??i,n,s,a)}}const df=r=>{r.uniforms.toneMappingExposure=new I(1),r.uniforms[fi]=new I(!1),r.uniforms[xn]=new I(jr),r.fragmentShader=r.fragmentShader.replace("precision highp sampler3D;",`precision highp sampler3D;

uniform bool ${fi};
uniform float ${xn};
#include <tonemapping_pars_fragment>

vec4 carmaLinearToSrgb(vec4 value) {
  return vec4(
    mix(
      pow(value.rgb, vec3(0.41666)) * 1.055 - vec3(0.055),
      value.rgb * 12.92,
      vec3(lessThanEqual(value.rgb, vec3(0.0031308)))
    ),
    value.a
  );
}`).replace("vec3 rayDirection = normalize(vRayDirection);",`vec3 rayDirection = normalize(vRayDirection);

  // The actual ground is rendered by streamed Three geometry. Do not let the
  // atmosphere shader add a second ellipsoid/zero-ground backdrop below it.
  // Rays that would hit that synthetic ground sample the tangent atmosphere
  // instead, so missing terrain reveals sky rather than a dark plane.
  if (rayIntersectsGround(cameraPosition, rayDirection)) {
    vec3 localUp = normalize(cameraPosition);
    float radius = max(length(cameraPosition), u_bottom_radius);
    float tangentMu = -sqrt(max(
      0.0,
      1.0 - u_bottom_radius * u_bottom_radius / (radius * radius)
    )) + 1e-5;
    vec3 tangent = rayDirection - localUp * dot(rayDirection, localUp);
    if (dot(tangent, tangent) < 1e-8) {
      tangent = normalize(cross(localUp, vec3(1.0, 0.0, 0.0)));
      if (dot(tangent, tangent) < 1e-8) {
        tangent = normalize(cross(localUp, vec3(0.0, 0.0, 1.0)));
      }
    } else {
      tangent = normalize(tangent);
    }
    rayDirection = normalize(
      tangent * sqrt(max(0.0, 1.0 - tangentMu * tangentMu)) +
      localUp * tangentMu
    );
  }`).replace("outputColor.a = 1.0;",`outputColor.rgb *= ${xn};
  outputColor.a = 1.0;
  if (${fi}) {
    // SkyMaterial is raw GLSL: match terrain's AgX on the display target.
    // Offscreen samples stay linear HDR until the shared final composite.
    outputColor.rgb = AgXToneMapping(outputColor.rgb);
    outputColor = carmaLinearToSrgb(outputColor);
  }`)},hf=r=>{const e=new uf({groundAlbedo:r,moon:!1,photometric:!0,side:Ao,sun:!0});df(e),e.depthTest=!1,e.depthWrite=!1;const t=new bo;t.setAttribute("position",new dl([-1,-1,0,3,-1,0,-1,3,0],3));const i=new Br(t,e);return i.name=cf,i.visible=!1,i.frustumCulled=!1,i.renderOrder=-100,i.castShadow=!1,i.receiveShadow=!1,i.onBeforeRender=n=>{e.uniforms.toneMappingExposure.value=n.toneMappingExposure,e.uniforms[fi].value=n.getRenderTarget()===null},{mesh:i,update(n,s){return s?Mc(n)?!1:(i.visible=!0,e.irradianceTexture=s.irradianceTexture,e.scatteringTexture=s.scatteringTexture,e.transmittanceTexture=s.transmittanceTexture,e.sunDirection.copy(n.directionToSunECEF),e.ellipsoidCenter.copy(n.ellipsoidCenterECEF),e.ellipsoidMatrix.copy(n.ecefToSceneMatrix),!0):(i.visible=!1,!1)},updateViewCamera(n){e.viewCamera=n},updateObserverScenePosition(n){e.observerScenePosition.copy(n),e.hasObserverScenePosition=!0},updateGroundAlbedo(n){e.groundAlbedo.copy(n)},dispose(){t.dispose(),e.dispose()}}},mf=(r,e,t,i)=>{if(!r)return e;const n=i+r.guardMetersX,s=i+r.guardMetersY,a=f=>t.left-n>=f.left&&t.right+n<=f.right&&t.bottom-s>=f.bottom&&t.top+s<=f.top;if(a(r))return r;const o=r.right-r.left,c=r.top-r.bottom,l=Math.round((t.left+t.right)/2/r.metersPerTexelX)*r.metersPerTexelX,u=Math.round((t.bottom+t.top)/2/r.metersPerTexelY)*r.metersPerTexelY,d={...r,left:l-o/2,right:l+o/2,bottom:u-c/2,top:u+c/2};return a(d)?d:e},ff=(r,e)=>{const t=r.shadow,i=t.camera,n=t.updateMatrices,s=i.matrixAutoUpdate,a=i.matrixWorldAutoUpdate,o=new Q,c=new Q,l=new Q,u=new Q,d=new x,f=new x(0,1,0);return t.updateMatrices=function(p){i.matrixAutoUpdate=s,i.matrixWorldAutoUpdate=a,n.call(this,p);const h=r.parent;p!==r||!h||!e()||(h.updateWorldMatrix(!0,!1),u.copy(h.matrixWorld).invert(),r.target.getWorldPosition(d).applyMatrix4(u),c.lookAt(r.position,d,f).setPosition(r.position),o.copy(i.matrixWorld),i.matrixWorld.multiplyMatrices(h.matrixWorld,c),i.matrix.copy(i.matrixWorld),i.matrixWorldInverse.copy(i.matrixWorld).invert(),i.position.setFromMatrixPosition(i.matrixWorld),i.matrixAutoUpdate=!1,i.matrixWorldAutoUpdate=!1,t.matrix.multiply(o).multiply(i.matrixWorldInverse),l.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),t.getFrustum().setFromProjectionMatrix(l,i.coordinateSystem,i.reversedDepth))},()=>{t.updateMatrices=n,i.matrixAutoUpdate=s,i.matrixWorldAutoUpdate=a}},pf=2048,Ac=8192,Ka=2,Xa=50,gf=1e4,vf=.04,Tn=25,yf=4,Sf=1.2,wf=.2,$a=.05,_f=8,xf=300,Tf=new x(0,1,0),Qa=(r,e,t=new Q)=>t.lookAt(r,e,Tf).setPosition(r).invert(),Mf=(r,e)=>{if(r.length===0)return null;const t=r.map(h=>h.clone().applyMatrix4(e)),i=Math.min(...t.map(({x:h})=>h)),n=Math.max(...t.map(({x:h})=>h)),s=Math.min(...t.map(({y:h})=>h)),a=Math.max(...t.map(({y:h})=>h)),o=t.map(({z:h})=>-h),c=Math.max(0,Math.min(...o)),l=Math.max(c+.01,Math.max(...o)),u=(i+n)/2,d=(s+a)/2,f=Math.max((n-i)/2,Ka/2),p=Math.max((a-s)/2,Ka/2);return{left:u-f,right:u+f,bottom:d-p,top:d+p,near:c,far:l}},bf=(r,e=Ac)=>r>=16?e:Math.min(e,pf*Math.sqrt(r));class Cc{constructor(e){this.host=e,this.lights=Array.from({length:1},()=>{const t=new hl(16777215,0);return t.name="shadow-simulation-sun",t.visible=!1,t.castShadow=!1,t.shadow.camera.name="shadow-simulation-shadow-camera",t.shadow.autoUpdate=!1,t.shadow.radius=0,t.shadow.bias=0,t.shadow.normalBias=$a,e.add(t,t.target),this.restoreShadowCameras.push(ff(t,()=>this.mountedShadowCamera)),t})}lights;softSun=!1;lastSoftFit=null;maxShadowMapSize=Ac;mapAllocation=null;disposed=!1;mountedShadowCamera=!1;restoreShadowCameras=[];retainedRaster=null;setMaxShadowMapSize(e){if(!Number.isFinite(e)||e<=0)return;const t=Math.max(256,Math.floor(e));this.disposed||this.maxShadowMapSize===t||(this.maxShadowMapSize=t)}setSoftSun(e){this.disposed||this.softSun===e||(e||this.restoreSunDiscCenter(),this.softSun=e,e||(this.lastSoftFit=null))}applySunDiscSample(e,t,i=!0){if(this.disposed)return;const n=this.lastSoftFit;if(!n)return;const s=Math.max(1,Math.floor(t)),a=(Math.floor(e)%s+s)%s,{angularRadius:o,tangentA:c,tangentB:l}=Jl(a,s),u=n.tangentA.clone().multiplyScalar(c).addScaledVector(n.tangentB,l).normalize(),d=n.directionToSun.clone().multiplyScalar(Math.cos(o)).addScaledVector(u,Math.sin(o)).normalize(),f=this.lights[0],[p,h]=i&&s>1?eu(a):[0,0],v=f.shadow.camera,y=n.rasterBounds,g=p*(y.right-y.left)/f.shadow.mapSize.x,T=h*(y.top-y.bottom)/f.shadow.mapSize.y;v.left=y.left+g,v.right=y.right+g,v.bottom=y.bottom+T,v.top=y.top+T,v.updateProjectionMatrix(),f.position.copy(d).multiplyScalar(n.lightDistance).add(n.anchorPosition),f.updateMatrixWorld(!0),f.target.updateMatrixWorld(!0),f.shadow.updateMatrices(f),f.shadow.needsUpdate=!0}restoreSunDiscCenter(){if(this.disposed||!this.lastSoftFit)return;const e=this.lastSoftFit,t=this.lights[0],i=t.shadow.camera;i.left=e.rasterBounds.left,i.right=e.rasterBounds.right,i.bottom=e.rasterBounds.bottom,i.top=e.rasterBounds.top,i.updateProjectionMatrix(),t.position.copy(e.directionToSun).multiplyScalar(e.lightDistance).add(e.anchorPosition),t.updateMatrixWorld(!0),t.target.updateMatrixWorld(!0),t.shadow.updateMatrices(t),t.shadow.needsUpdate=!0}invalidate(){this.lights[0].shadow.needsUpdate=!0}update({receiverWorldPoints:e,receiverAnchorWorldPosition:t,minimumElevationMeters:i,maximumElevationMeters:n,directionToSun:s,color:a,intensity:o,shadowIntensity:c,quality:l,groundTexelFit:u=!0,stabilizeMapSize:d=!1,mapTexelBudget:f,casterMapTexelBudget:p,groundTexelTargetMeters:h,maxReceiverBiasMeters:v,receiverBiasMeters:y,rasterKey:g,mountedShadowCamera:T=!1}){var Ve,kt;if(this.disposed)return null;if(this.mountedShadowCamera=T,e.length===0){for(const Xe of this.lights)Xe.visible=!1,Xe.castShadow=!1,Xe.intensity=0,Xe.shadow.needsUpdate=!1;return null}const R=s.clone().normalize(),O=Math.max(0,n-i),b=Math.max(vf,R.y),D=Ye((O+xf)/b+Xa,Xa,gf),C=D+O+Tn,E=bf(l,this.maxShadowMapSize),N=ua(f,Math.floor(E)**2,this.maxShadowMapSize),F=Math.floor(Math.sqrt(N)),Y=new ke(a),G=t.clone(),B=e.reduce((Xe,Vi)=>Math.max(Xe,Vi.distanceTo(t)),0),ne=B+C,A=this.lights[0];A.position.copy(R).multiplyScalar(ne).add(G),A.target.position.copy(G),A.updateMatrixWorld(!0),A.target.updateMatrixWorld(!0),A.shadow.updateMatrices(A);const V=Mf(e,Qa(A.position,A.target.position));if(!V)return null;const re=Ql(B,R.y,this.softSun?Lr:0),q=this.softSun?Math.max(Math.tan(Lr)*ne,re.planarMeters):0,le={maxMapSize:this.maxShadowMapSize,elevationSine:R.y,sunDiscGuardMeters:q,groundTexelFit:u,groundTexelTargetMeters:h},ue=da(V,{...le,mapSize:F,mapTexelBudget:N,mapDimensions:d&&((Ve=this.mapAllocation)==null?void 0:Ve.texelBudget)===N&&this.mapAllocation.maxMapSize===this.maxShadowMapSize&&this.mapAllocation.groundTexelFit===u?this.mapAllocation:void 0}),xe=JSON.stringify([g,N,this.maxShadowMapSize,u,h,this.softSun]),P=this.retainedRaster,ie=g!==void 0&&(P==null?void 0:P.key)===xe&&P.anchor.distanceToSquared(G)<1e-18&&P.direction.distanceToSquared(R)<1e-18,K=mf(ie?P.fit:void 0,ue,V,q);this.retainedRaster=g===void 0?null:{key:xe,anchor:G.clone(),direction:R.clone(),fit:K};const Fe=ua(p,N,this.maxShadowMapSize),Tt=p===void 0?K:da(V,{...le,mapSize:Math.floor(Math.sqrt(Fe)),mapTexelBudget:Fe});this.mapAllocation={width:K.mapWidth,height:K.mapHeight,texelBudget:N,maxMapSize:this.maxShadowMapSize,groundTexelFit:u};const rt=Math.max(K.metersPerTexelX,K.metersPerTexelY),ye=Math.max(K.guardMetersX,K.guardMetersY),he={left:K.left,right:K.right,bottom:K.bottom,top:K.top,near:Math.max(.01,V.near-re.depthMeters-D-O-Tn),far:Math.max(1,V.far+re.depthMeters+O+Tn)};he.far=Math.max(he.near+1,he.far);const ht=Ye(rt*Sf/Math.max(wf,R.y),$a,_f),H=-Ye(rt*yf/Math.max(he.far-he.near,1),Number.EPSILON,.01),Ne=new x;Math.abs(R.y)>.99?Ne.set(1,0,0):Ne.crossVectors(new x(0,1,0),R).normalize();const mt=new x().crossVectors(R,Ne),w=this.lights[0];w.visible=!0,w.castShadow=!0,w.intensity=o,w.color.copy(Y),w.shadow.intensity=Ye(c,0,1),w.shadow.needsUpdate=!0,(w.shadow.mapSize.x!==K.mapWidth||w.shadow.mapSize.y!==K.mapHeight)&&((kt=w.shadow.map)==null||kt.dispose(),w.shadow.map=null,w.shadow.mapSize.set(K.mapWidth,K.mapHeight)),w.position.copy(R).multiplyScalar(ne).add(G),w.target.position.copy(G);const Yr=v!==void 0&&Number.isFinite(v)?Math.max(0,v):1/0,Mt=y!==void 0&&Number.isFinite(y)?Math.max(0,y):void 0;w.shadow.bias=Math.max(Mt===void 0?H:-Mt/(he.far-he.near),-Yr/(he.far-he.near)),w.shadow.normalBias=Math.min(Mt??ht,Yr);const ze=w.shadow.camera;ze.left=he.left,ze.right=he.right,ze.bottom=he.bottom,ze.top=he.top,ze.near=he.near,ze.far=he.far,ze.updateProjectionMatrix(),w.updateMatrixWorld(!0),w.target.updateMatrixWorld(!0),w.shadow.updateMatrices(w),this.lastSoftFit=this.softSun?{directionToSun:R.clone(),tangentA:Ne,tangentB:mt,anchorPosition:G.clone(),lightDistance:ne,rasterBounds:he}:null;const Te=A.shadow.camera;return{sampleCount:1,totalShadowTexels:K.mapWidth*K.mapHeight,mapTexelBudget:h===void 0?N:void 0,casterReachMeters:D,casterMetersPerTexel:[Tt.metersPerTexelX,Tt.metersPerTexelY],camera:{receiverPointCount:e.length,receiverLeftMeters:V.left,receiverRightMeters:V.right,receiverBottomMeters:V.bottom,receiverTopMeters:V.top,leftMeters:Te.left,rightMeters:Te.right,bottomMeters:Te.bottom,topMeters:Te.top,nearMeters:Te.near,farMeters:Te.far,shadowMapWidth:K.mapWidth,shadowMapHeight:K.mapHeight,viewMatrixElements:[...Qa(A.position,A.target.position).elements],projectionMatrixElements:[...Te.projectionMatrix.elements],guardMeters:ye,metersPerTexel:rt,metersPerTexelX:K.metersPerTexelX,metersPerTexelY:K.metersPerTexelY,groundTexelWidthMeters:K.groundTexelWidthMeters,groundTexelHeightMeters:K.groundTexelHeightMeters,groundTexelFitLimited:K.groundTexelFitLimited,groundTexelFit:u,groundTexelTargetMeters:h}}}dispose(){var e;if(!this.disposed){this.disposed=!0;for(const t of this.restoreShadowCameras)t();for(const t of this.lights)(e=t.shadow.map)==null||e.dispose(),this.host.remove(t.target,t)}}}const At=r=>{var e;(e=r.depthTexture)==null||e.dispose(),r.dispose()},Nt=(r,e)=>r*e*8;class Rf{entries=new Map;retainedBytes=0;capacityBytes=0;activeVariantIds=null;hits=0;misses=0;get bytes(){return this.retainedBytes}get count(){return this.entries.size}get availableBytes(){return Math.max(0,this.capacityBytes-this.retainedBytes)}has(e){return this.entries.has(e)}setActiveVariants(e){this.activeVariantIds=e}setBudget(e,t){this.capacityBytes=Math.max(0,e-t),this.evictInactive(0);for(const i of this.entries.keys()){if(this.retainedBytes<=this.capacityBytes)break;this.remove(i)}}get(e){const t=this.entries.get(e);return t?this.hits+=1:this.misses+=1,t==null?void 0:t.target}admit(e,t,i,n=t,s={}){var o;if(this.entries.has(e))return!1;const a=Nt(i.width,i.height);return a>this.capacityBytes||(s.evictInactive!==!1&&((o=this.activeVariantIds)!=null&&o.has(n))&&this.evictInactive(a),this.retainedBytes+a>this.capacityBytes)?!1:(this.entries.set(e,{pageId:t,variantId:n,target:i,bytes:a}),this.retainedBytes+=a,!0)}invalidate(e){for(const[t,i]of this.entries)i.pageId===e&&this.remove(t)}clear(){for(const e of this.entries.keys())this.remove(e)}evictInactive(e){if(this.activeVariantIds)for(const[t,i]of this.entries){if(this.retainedBytes+e<=this.capacityBytes)break;this.activeVariantIds.has(i.variantId)||this.remove(t)}}remove(e){const t=this.entries.get(e);t&&(this.entries.delete(e),this.retainedBytes-=t.bytes,At(t.target))}}const Ef=16,Mn=4;class Af{constructor(e,t,i,n=4096,s=e){if(this.scene=e,this.renderer=t,this.memoryBudgetBytes=i,this.host=s,!Number.isFinite(i)||!(i>=Nt(64,64)))throw new RangeError("Shadow page budget must fit at least one 64-square page");if(!Number.isFinite(n)||n<64)throw new RangeError("Maximum shadow page size must be finite and at least 64");if(t.shadowMap.type!==rn)throw new Error("Tiled shadow reference requires the shared PCF shadow path");this.maxMapSize=Math.max(64,2**Math.floor(Math.log2(Math.min(n,t.capabilities.maxTextureSize,Math.sqrt(i/8)))))}pages=new Map;activePageIds=new Set;activeSamples=1;prewarmPageIds=new Set;prewarmSamples=1;prewarmRevision=0;prewarmSink=null;prewarmCamera=new ml([]);cache=new Rf;scratchBytes=0;depthRenders=0;colorPasses=0;disposed=!1;streamedTarget=null;maxMapSize;setView(e,t,i,n,s,a){if(this.disposed)return;if(this.clearPrewarmView(),![s.directionToSun.x,s.directionToSun.y,s.directionToSun.z].every(Number.isFinite)||s.directionToSun.lengthSq()===0||s.directionToSun.y<=0)throw new RangeError("Tiled shadow reference requires a finite sun direction above the horizon");const o=vu(e,t,i,n);this.activePageIds=new Set(o.map(({id:l})=>l));for(const l of o)this.configurePage(l,s,a);const c=Math.max(32,this.activePageIds.size*2);for(const[l,u]of this.pages){if(this.pages.size<=c)break;this.activePageIds.has(l)||(this.cache.invalidate(l),u.controller.dispose(),this.pages.delete(l))}this.updateActiveVariants(),this.scratchBytes=Math.max(0,...Array.from(this.activePageIds,l=>{const u=this.pages.get(l);return Nt(u.width,u.height)})),this.streamedTarget&&Nt(this.streamedTarget.width,this.streamedTarget.height)>this.scratchBytes&&(At(this.streamedTarget),this.streamedTarget=null),this.cache.setBudget(this.memoryBudgetBytes,this.reservedBytes)}updatePresentation(e){if(this.disposed)return;e.updateMatrixWorld(!0);const t=new Q().multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i=new Ur().setFromProjectionMatrix(t),n=new Set;for(const[s,a]of this.pages)i.intersectsBox(a.receiverBounds)&&(a.screenBounds.copy(Bo(a.receiverBounds,t)),n.add(s));this.activePageIds=n,this.updateActiveVariants()}get reservedBytes(){return this.scratchBytes+(this.prewarmSink?Mn:0)}setPrewarmView(e,t,i,n,s,a){if(this.clearPrewarmView(),this.disposed)return;if(!Number.isSafeInteger(a)||a<1||a>4096||!(n>0&&Number.isFinite(n))||![i.x,i.y].every(l=>l>0&&Number.isFinite(l))||!s.directionToSun.toArray().every(Number.isFinite)||s.directionToSun.y<=0)throw new RangeError("Invalid shadow prewarm view");const o=new Q().multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),c=new Set;for(const{id:l,bounds:u}of e){if(c.has(l)||u.isEmpty()||![...u.min.toArray(),...u.max.toArray()].every(Number.isFinite))throw new RangeError("Prewarm cells require unique IDs and finite bounds");c.add(l)}this.prewarmSamples=a;for(const l of e){if(this.prewarmPageIds.size>=Ef)break;this.activePageIds.has(l.id)||!this.pages.has(l.id)&&this.pages.size>=Math.max(32,this.activePageIds.size*2)||(this.configurePage({...l,screenBounds:new te,groundTexelTargetMeters:Math.max(1e-9,2*n/Uo(l.bounds,o,i))},s),this.prewarmPageIds.add(l.id))}}clearPrewarmView(){this.prewarmPageIds.clear(),this.prewarmRevision+=1}get prewarmPages(){const e=[...this.prewarmPageIds].map(i=>{const n=this.pages.get(i),s=this.countPrewarmSamples(i,n);return{id:i,receiverBounds:n.receiverBounds.clone(),casterBounds:n.casterBounds.clone(),width:n.width,height:n.height,samples:this.prewarmSamples,cachedSamples:s,sampleBudget:s,limited:n.limited,canPrewarm:!1}});let t=this.cache.availableBytes-(this.prewarmSink?0:Mn);for(;t>0;){const i=e.filter(n=>n.sampleBudget<n.samples&&Nt(n.width,n.height)<=t).sort((n,s)=>n.sampleBudget-s.sampleBudget);if(i.length===0)break;for(const n of i){const s=Nt(n.width,n.height);s>t||(n.sampleBudget+=1,t-=s)}}return e.map(i=>({...i,canPrewarm:i.sampleBudget>i.cachedSamples}))}canPrewarm(e){return!this.disposed&&this.prewarmPages.some(t=>t.id===e&&t.canPrewarm)}countPrewarmSamples(e,t){const i=JSON.stringify([e,t.projectionKey,this.prewarmSamples]);let n=0;for(let s=0;s<this.prewarmSamples;s+=1)this.cache.has(JSON.stringify([i,s]))&&(n+=1);return n}prewarmNext(e,t,i={}){var v,y;const n=this.pages.get(t),s=!this.disposed&&this.prewarmPageIds.has(t)&&!!n,a=(g,T=!1)=>{var O;const R=s?this.countPrewarmSamples(t,n):0;return{pageId:t,rendered:g,cachedSamples:R,totalSamples:s?this.prewarmSamples:0,complete:s&&R===this.prewarmSamples,budgetLimited:T,aborted:((O=i.signal)==null?void 0:O.aborted)===!0}};if(!s||(v=i.signal)!=null&&v.aborted)return a(0);const o=this.prewarmRevision,c=n.contentRevision;if(this.renderer.shadowMap.type!==rn)throw new Error("Shadow prewarm requires the shared PCF shadow path");const l=JSON.stringify([t,n.projectionKey,this.prewarmSamples]);let u=0;for(;u<this.prewarmSamples&&this.cache.has(JSON.stringify([l,u]));)u+=1;if(u===this.prewarmSamples)return a(0);if(!this.canPrewarm(t)||Nt(n.width,n.height)+(this.prewarmSink?0:Mn)>this.cache.availableBytes)return a(0,!0);this.prewarmSink||(this.prewarmSink=new je(1,1,{depthBuffer:!1}),this.cache.setBudget(this.memoryBudgetBytes,this.reservedBytes));const f=n.controller.lights[0];this.prewarmSamples===1?n.controller.restoreSunDiscCenter():n.controller.applySunDiscSample(u,this.prewarmSamples),f.shadow.map=null,f.shadow.needsUpdate=!0;const p=f.visible;f.visible=!0,this.prewarmCamera.layers.mask=e.layers.mask,this.prewarmCamera.matrixAutoUpdate=!1,this.prewarmCamera.matrixWorldAutoUpdate=!1,this.prewarmCamera.matrixWorld.copy(e.matrixWorld),this.prewarmCamera.matrixWorldInverse.copy(e.matrixWorldInverse),this.prewarmCamera.projectionMatrix.copy(e.projectionMatrix);let h=0;try{this.renderPrewarmDepth(f);const g=f.shadow.map;g&&(h=1,this.depthRenders+=1,((y=i.signal)!=null&&y.aborted||o!==this.prewarmRevision||c!==n.contentRevision||!this.prewarmPageIds.has(t)||!this.cache.admit(JSON.stringify([l,u]),t,g,l,{evictInactive:!1}))&&At(g))}catch(g){throw f.shadow.map&&At(f.shadow.map),g}finally{f.visible=p,f.shadow.map=null}return a(h)}renderPrewarmDepth(e){const{renderer:t,scene:i}=this,n=t.getContext(),s=t.getRenderTarget(),a=t.getActiveCubeFace(),o=t.getActiveMipmapLevel(),c=t.getViewport(new te),l=t.getScissor(new te),u=t.getScissorTest(),d=n.getParameter(n.DRAW_FRAMEBUFFER_BINDING),f=n.getParameter(n.READ_FRAMEBUFFER_BINDING),p=new te().fromArray(n.getParameter(n.VIEWPORT)),h=new te().fromArray(n.getParameter(n.SCISSOR_BOX)),v=n.isEnabled(n.SCISSOR_TEST),y=n.isEnabled(n.DEPTH_TEST),g=n.getParameter(n.DEPTH_RANGE),T=n.getParameter(n.DEPTH_WRITEMASK),R=n.getParameter(n.DEPTH_FUNC),O=n.getParameter(n.DEPTH_CLEAR_VALUE),b=n.getParameter(n.COLOR_CLEAR_VALUE),D=n.getParameter(n.COLOR_WRITEMASK),C=t.clippingPlanes,E=t.autoClear,N=i.background,F=t.xr.enabled,Y=t.shadowMap.enabled,G=t.shadowMap.autoUpdate,B=t.shadowMap.needsUpdate,ne=[];i.traverse(A=>{const V=A;V.isLight&&V.castShadow&&V!==e&&ne.push(V)});try{t.resetState(),t.autoClear=!1,t.xr.enabled=!1,t.shadowMap.enabled=!0,t.shadowMap.autoUpdate=!0;for(const A of ne)A.castShadow=!1;i.background=null,t.clippingPlanes=C,t.setRenderTarget(this.prewarmSink),n.depthRange(0,1),t.render(i,this.prewarmCamera)}finally{t.clippingPlanes=C,t.autoClear=E,t.xr.enabled=F,t.shadowMap.enabled=Y,t.shadowMap.autoUpdate=G,t.shadowMap.needsUpdate=B;for(const A of ne)A.castShadow=!0;i.background=N,t.resetState(),t.setRenderTarget(s,a,o),t.setViewport(c),t.setScissor(l),t.setScissorTest(u),t.state.bindFramebuffer(n.DRAW_FRAMEBUFFER,d),t.state.bindFramebuffer(n.READ_FRAMEBUFFER,f),t.state.viewport(p),t.state.scissor(h),t.state.setScissorTest(v),y?t.state.enable(n.DEPTH_TEST):t.state.disable(n.DEPTH_TEST),n.depthRange(g[0],g[1]),n.depthMask(T),n.depthFunc(R),n.clearDepth(O),n.clearColor(b[0],b[1],b[2],b[3]),n.colorMask(D[0],D[1],D[2],D[3])}}configurePage(e,t,i){let n=this.pages.get(e.id);if(!n){const u=new Cc(this.host);u.setMaxShadowMapSize(this.maxMapSize),u.setSoftSun(!0),n={controller:u,projectionKey:"",lightingKey:"",presentationKey:"",corridor:new Pe,planes:[],width:0,height:0,limited:!1,screenBounds:e.screenBounds,receiverBounds:e.bounds.clone(),groundTexelTargetMeters:e.groundTexelTargetMeters,casterBounds:new Pe,contentRevision:0,casterRevision:null}}this.pages.delete(e.id),this.pages.set(e.id,n);const s=n.controller.update({...t,maxReceiverBiasMeters:i?i(e.bounds,e.groundTexelTargetMeters):t.maxReceiverBiasMeters,receiverWorldPoints:kr(e.bounds),receiverAnchorWorldPosition:e.bounds.getCenter(new x),minimumElevationMeters:e.bounds.min.y,maximumElevationMeters:e.bounds.max.y,quality:4,groundTexelFit:!0,groundTexelTargetMeters:e.groundTexelTargetMeters});if(!s)return;const a=n.controller.lights[0];a.visible=!1;const o=s.camera,c=e.receiverObjectId===void 0?"spatial-partition-v1":"native-object-v1",l=JSON.stringify([c,o.viewMatrixElements,o.projectionMatrixElements,o.shadowMapWidth,o.shadowMapHeight,a.shadow.bias,a.shadow.normalBias,e.bounds.min,e.bounds.max]);n.projectionKey=l,n.lightingKey=JSON.stringify([t.directionToSun,t.shadowIntensity,e.bounds.min,e.bounds.max]),n.presentationKey=JSON.stringify([c,t.directionToSun,t.shadowIntensity,e.bounds.min.x,e.bounds.min.z,e.bounds.max.x,e.bounds.max.z]),n.receiverBounds.copy(e.bounds),n.receiverObjectId=e.receiverObjectId,n.groundTexelTargetMeters=e.groundTexelTargetMeters,n.screenBounds=e.screenBounds,n.width=o.shadowMapWidth,n.height=o.shadowMapHeight,n.limited=(o.groundTexelWidthMeters??1/0)>e.groundTexelTargetMeters*1.001||(o.groundTexelHeightMeters??1/0)>e.groundTexelTargetMeters*1.001,n.casterBounds.copy(yu(e.bounds,t.directionToSun,s.casterReachMeters+e.bounds.getSize(new x).length(),Lr,o.guardMeters)),n.corridor.union(n.casterBounds),n.planes=[new lt(new x(1,0,0),-e.bounds.min.x),new lt(new x(-1,0,0),e.bounds.max.x),new lt(new x(0,0,1),-e.bounds.min.z),new lt(new x(0,0,-1),e.bounds.max.z)]}invalidateCasters(e){const t=e instanceof Pe?[e]:e,i=[];for(const[n,s]of this.pages)t.some(a=>s.corridor.intersectsBox(a))&&(s.contentRevision+=1,this.cache.invalidate(n),i.push(n));return i}setCasterRevision(e,t){const i=this.pages.get(e);return!i||t===null||i.casterRevision===t?!1:(i.casterRevision=t,i.contentRevision+=1,this.cache.invalidate(e),!0)}renderSample(e,t,i){this.renderSamples(e,this.activePageIds,t,i)}renderPageSample(e,t,i,n,s){return this.disposed||!this.activePageIds.has(t)?!1:this.renderSamples(e,[t],i,n,s)>0}renderPageColor(e,t){const i=this.pages.get(t);if(this.disposed||!i||!this.activePageIds.has(t))return!1;const{renderer:n,scene:s}=this,a=n.clippingPlanes,o=n.autoClear,c=s.background,l=n.shadowMap.autoUpdate,u=n.shadowMap.needsUpdate;n.autoClear=!1,n.shadowMap.autoUpdate=!1,n.shadowMap.needsUpdate=!1,n.clippingPlanes=[...a,...i.planes],s.background=null;try{const d=fa(s,i.receiverObjectId,n,e,"color-only");return d&&(this.colorPasses+=1),d}finally{n.clippingPlanes=a,n.autoClear=o,n.shadowMap.autoUpdate=l,n.shadowMap.needsUpdate=u,s.background=c}}get accumulationPages(){return[...this.activePageIds].map(e=>{const t=this.pages.get(e),i=t.controller.lights[0];return{id:e,receiverObjectId:t.receiverObjectId,contentKey:JSON.stringify([t.lightingKey,t.contentRevision]),casterRevision:t.casterRevision,presentationKey:t.presentationKey,revision:JSON.stringify([t.projectionKey,t.contentRevision,i.color.toArray(),i.intensity,i.shadow.intensity]),screenBounds:t.screenBounds.clone(),receiverBounds:t.receiverBounds.clone(),groundTexelTargetMeters:t.groundTexelTargetMeters}})}areCastersReady(e,t){const i=this.pages.get(e);return!!(i&&t(i.casterBounds))}getPageGeometry(e){const t=this.pages.get(e);return t?{casterBounds:t.casterBounds.clone(),receiverBounds:t.receiverBounds.clone(),width:t.width,height:t.height,projectionKey:t.projectionKey}:null}get supportsOpaqueAccumulation(){let e=!0;return this.scene.traverseVisible(t=>{const i=t;if(!(!i.isMesh||!i.receiveShadow))for(const n of Array.isArray(i.material)?i.material:[i.material])n.visible&&(n.transparent||!n.depthWrite||!n.depthTest)&&(e=!1)}),e}renderSamples(e,t,i,n,s){if(this.disposed)return 0;if(this.renderer.shadowMap.type!==rn)throw new Error("Shadow page cache must be recreated after changing the depth/filter format");if(!Number.isInteger(n)||n<1||!Number.isInteger(i)||i<0||i>=n)throw new RangeError("Shadow sample must lie within its finite-disc sequence");n!==this.activeSamples&&(this.activeSamples=n,this.updateActiveVariants());const{renderer:a,scene:o}=this,c=a.clippingPlanes,l=a.autoClear,u=o.background,d=a.getRenderTarget(),f=d==null?void 0:d.scissor.clone(),p=d==null?void 0:d.scissorTest;let h=0;a.autoClear=!1,o.background=null;try{for(const v of t){const y=this.pages.get(v),g=y.controller.lights[0];n===1?y.controller.restoreSunDiscCenter():y.controller.applySunDiscSample(i,n);const T=JSON.stringify([v,y.projectionKey,n]),R=JSON.stringify([T,i]),O=this.cache.get(R);if(!O&&this.streamedTarget&&(this.streamedTarget.width!==y.width||this.streamedTarget.height!==y.height)&&(At(this.streamedTarget),this.streamedTarget=null),g.shadow.map=O??this.streamedTarget,O||(this.streamedTarget=null),g.shadow.needsUpdate=!O,g.visible=!0,a.clippingPlanes=[...c,...y.planes],d){const{x:b,y:D,z:C,w:E}=s??y.screenBounds,N=Math.floor(b*d.width),F=Math.floor(D*d.height);d.scissor.set(N,F,Math.ceil((b+C)*d.width)-N,Math.ceil((D+E)*d.height)-F),d.scissorTest=!0,a.setRenderTarget(d)}try{if(fa(o,y.receiverObjectId,a,e)&&(this.colorPasses+=1,h+=1),!O&&g.shadow.map){this.depthRenders+=1;const D=g.shadow.map;this.cache.admit(R,v,D,T)||(this.streamedTarget=D)}}catch(b){throw!O&&g.shadow.map&&At(g.shadow.map),b}finally{g.visible=!1,g.shadow.map=null}}}finally{a.clippingPlanes=c,a.autoClear=l,o.background=u,d&&f&&(d.scissor.copy(f),d.scissorTest=p??!1,a.setRenderTarget(d))}return h}get stats(){const e=[...this.activePageIds].map(t=>this.pages.get(t));return{pages:e.length,cachedSamplePages:this.cache.count,cacheBytes:this.cache.bytes,scratchBytes:this.reservedBytes,hits:this.cache.hits,misses:this.cache.misses,depthRenders:this.depthRenders,colorPasses:this.colorPasses,limitedPages:e.filter(t=>t.limited).length,dimensions:e.map(t=>`${t.width}×${t.height}`)}}clearCache(){this.cache.clear();for(const e of this.pages.values())e.contentRevision+=1}updateActiveVariants(){this.cache.setActiveVariants(new Set([...this.activePageIds].flatMap(e=>[...new Set([1,this.activeSamples])].map(t=>JSON.stringify([e,this.pages.get(e).projectionKey,t])))))}get pageLevels(){return[...this.activePageIds].map(e=>{const t=this.pages.get(e);return{id:e,level:Math.max(0,Math.round(Math.log2(this.maxMapSize/Math.max(t.width,t.height)))),width:t.width,height:t.height}})}dispose(){var e;if(!this.disposed){this.disposed=!0,this.cache.clear(),this.streamedTarget&&At(this.streamedTarget),this.streamedTarget=null,(e=this.prewarmSink)==null||e.dispose(),this.prewarmSink=null,this.clearPrewarmView(),this.scratchBytes=0;for(const t of this.pages.values())t.controller.dispose();this.pages.clear(),this.activePageIds.clear()}}}const Cf=async({pages:r,signal:e,prepare:t,render:i,yieldToInput:n})=>{let s=0,a=0,o=0,c=!1;try{for(const l of r){if(e.aborted)break;if(l.cachedSamples>=l.samples){s+=1;continue}if(!l.canPrewarm){c=!0;continue}if(await n(e),e.aborted)break;const u=await t(l,e);try{if(e.aborted)break;if(!u.covered||!u.isCurrent()){a+=1;continue}const d=Math.min(l.samples,l.sampleBudget);d<l.samples&&(c=!0);for(let f=l.cachedSamples;f<d&&(await n(e),!(e.aborted||!u.isCurrent()));f+=1){const p=i(l.id,u.group,e);if(o+=p.rendered,p.complete){s+=1;break}if(p.budgetLimited){c=!0;break}if(p.aborted||!p.rendered)break}}finally{u.dispose()}}}catch(l){if(!e.aborted)throw l}return{offered:r.length,completed:s,skippedCoverage:a,renderedSamples:o,budgetLimited:c,aborted:e.aborted}},If=r=>{const e=globalThis.scheduler;return e!=null&&e.postTask?e.postTask(()=>{},{priority:"background",delay:0,signal:r}):Promise.reject(new Error("Background scheduler unavailable"))},Df=({getRequest:r})=>{let e=!1,t=null,i=null,n=!1;const s=()=>{n=!1,i==null||i.abort()},a=()=>{if(!e){if(i){n=!0;return}try{const o=globalThis.scheduler;if(typeof(o==null?void 0:o.postTask)!="function")return;const c=r();if(!c||c.key===t)return;t=c.key;const l=new AbortController;i=l;let u=!1;const d=()=>{if(i!==l||u)return;i=null;const f=n;n=!1,f&&a()};try{o.postTask(async()=>{if(e||l.signal.aborted)return;const f=r();if(!(!f||f.key!==c.key)){u=!0;try{await f.run(l.signal)}finally{u=!1,d()}}},{priority:"background",delay:150,signal:l.signal}).then(d,d)}catch{d()}}catch{}}};return{onSettled:a,cancel:s,dispose(){e=!0,s()}}},Ic=(r,e,t)=>JSON.stringify([r.matrixWorldInverse.elements,r.projectionMatrix.elements,e,t]),Pf=(r,e)=>{if(!Number.isFinite(e)||e<r.length*8)throw new RangeError("Capture budget must fit at least one scalar/depth pixel per page");const t=[...r].sort((n,s)=>n.id<s.id?-1:n.id>s.id?1:0).map(({id:n,plan:s,screenArea:a})=>({id:n,plan:s,width:s.width,height:s.height,weight:2**Math.floor(Math.log2(Math.max(1/65536,Math.min(1,a))))}));let i=t.reduce((n,s)=>n+s.width*s.height,0);for(;i*8>e;){let n;for(const a of t)a.width===1&&a.height===1||(!n||a.width*a.height/a.weight>n.width*n.height/n.weight)&&(n=a);if(!n)break;const s=n.width*n.height;n.width>=n.height&&n.width>1?n.width/=2:n.height/=2,i-=s-n.width*n.height}return new Map(t.map(({id:n,plan:s,width:a,height:o})=>[n,a===s.width&&o===s.height?s:{...s,width:a,height:o,limited:!0,key:Ic(s.camera,a,o)}]))},Of=(r,e,t)=>{const{groundTexelTargetMeters:i,maximumDimension:n,maximumPixels:s}=t;if(r.isEmpty()||![...r.min.toArray(),...r.max.toArray(),...e.toArray()].every(Number.isFinite)||!(i>0&&Number.isFinite(i))||!(n>=1&&Number.isFinite(n))||!(s>=1&&Number.isFinite(s)))throw new RangeError("Receiver capture requires finite bounds and positive allocation limits");const a=r.getCenter(new x),o=r.getSize(new x).length()*.5,c=Math.max(.001,o*.001),l=new rs;l.quaternion.copy(e).normalize(),l.position.copy(a).add(new x(0,0,o+c+1).applyQuaternion(l.quaternion)),l.updateMatrixWorld(!0);const u=new Pe().setFromPoints(kr(r).map(g=>g.applyMatrix4(l.matrixWorldInverse)));l.left=u.min.x-c,l.right=u.max.x+c,l.bottom=u.min.y-c,l.top=u.max.y+c,l.near=Math.max(.001,-u.max.z-c),l.far=Math.max(l.near+.001,-u.min.z+c),l.updateProjectionMatrix();const d=g=>2**Math.ceil(Math.log2(Math.max(1,g/i))),f=d(l.right-l.left),p=d(l.top-l.bottom),h=2**Math.floor(Math.log2(n));let v=Math.min(f,h),y=Math.min(p,h);for(;v*y>s;)v>=y&&v>1?v/=2:y/=2;return{camera:l,width:v,height:y,limited:v<f||y<p,key:Ic(l,v,y)}},Nf=r=>new fl().setFromRotationMatrix(new Q().extractRotation(r.matrixWorld)),Ri={namespace:"shadow-corridor-visibility",schema:"visibility-depth-world-basis-v1",maximumPayloadBytes:32*1024**2,maximumRecordBytes:33*1024**2,maximumIdentityCharacters:65536},ui={read:"read",write:"write",writePacked:"write-packed"},Ge=r=>{if(!r||!Number.isInteger(r.samples)||r.samples<1||r.samples>4096)return null;const e=[r.source,r.dateTime,r.corridor,r.resolution,r.geometryFingerprint];return e.some(t=>typeof t!="string"||t.length===0)||e.reduce((t,i)=>t+i.length,0)>Ri.maximumIdentityCharacters?null:JSON.stringify([Ri.schema,...e,r.samples])},bn=(r,e)=>Array.isArray(r)&&r.length===e&&r.every(Number.isFinite),Dc=r=>{if(!r||typeof r!="object")return!1;const e=r,t=e.width*e.height;return Number.isSafeInteger(e.width)&&e.width>0&&Number.isSafeInteger(e.height)&&e.height>0&&Number.isSafeInteger(t)&&t*8<=Ri.maximumPayloadBytes&&bn(e.captureMatrix,16)&&bn(e.worldBasis,16)&&bn(e.crop,4)&&e.crop[0]>=0&&e.crop[1]>=0&&e.crop[2]>0&&e.crop[3]>0&&e.crop[0]+e.crop[2]<=1.000001&&e.crop[1]+e.crop[3]<=1.000001},Za=r=>{if(!Dc(r))return!1;const e=r,t=e.width*e.height;return e.visibility instanceof Float32Array&&e.visibility.length===t&&e.depth instanceof Float32Array&&e.depth.length===t},Lf=r=>{if(!Dc(r))return!1;const e=r;return e.rgba instanceof Float32Array&&e.rgba.length===e.width*e.height*4},Tr=64,Qn=256*1024**2,Rn=Qn,Ff=128*1024**2,Ja=8,eo=32*1024**2,Bf=4,Mr=r=>{var e;r.target?((e=r.target.depthTexture)==null||e.dispose(),r.target.dispose()):(r.visibility.dispose(),r.depth.dispose())},Uf=(r,e)=>r.elements.every((t,i)=>Number.isFinite(t)&&Math.abs(t-e.elements[i])<=1e-10*Math.max(1,Math.abs(t)));class Pc{constructor(e){this.renderer=e,this.copyQuad.frustumCulled=!1,this.copyScene.add(this.copyQuad)}captures=new Map;visiblePageIds=new Set;samples=0;replayCount=0;matchingPages=0;persistence;persistenceGeneration=0;disposed=!1;restoreAttempts=new Set;pendingRestores=new Map;restoreRequests=new Map;pendingWrites=new Map;persistenceOffers=new WeakMap;persistenceAttempted=new WeakSet;persistenceTimer=null;readbackBusy=!1;readbackBytes=0;packMaterial=new Jt({uniforms:{visibility:{value:null},depth:{value:null}},vertexShader:"varying vec2 uvCopy; void main() { uvCopy = position.xy * 0.5 + 0.5; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:"uniform sampler2D visibility; uniform sampler2D depth; varying vec2 uvCopy; void main() { gl_FragColor = vec4(texture2D(visibility, uvCopy).r, texture2D(depth, uvCopy).r, 0.0, 1.0); }",depthTest:!1,depthWrite:!1,blending:mi,toneMapped:!1});materials=new Map;unsupportedMaterials=new WeakSet;captureSupported=!0;contentRevision=0;get revision(){return this.contentRevision}get supportsCapture(){return this.captureSupported}copyScene=new Pr;copyCamera=new Ei;copyMaterial=new Jt({uniforms:{source:{value:null},crop:{value:new te}},vertexShader:"varying vec2 uvCopy; void main() { uvCopy = position.xy * 0.5 + 0.5; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:"uniform sampler2D source; uniform vec4 crop; varying vec2 uvCopy; void main() { gl_FragColor = vec4(texture2D(source, crop.xy + uvCopy * crop.zw).r, 0.0, 0.0, 1.0); }",depthTest:!1,depthWrite:!1,blending:mi,toneMapped:!1});copyQuad=new Br(new es(2,2),this.copyMaterial);downsampleMaterial=new Jt({uniforms:{source:{value:null},depth:{value:null},texel:{value:new Ct}},vertexShader:"varying vec2 uvCopy; void main() { uvCopy = position.xy * 0.5 + 0.5; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:`uniform sampler2D source; uniform sampler2D depth;
      uniform vec2 texel; varying vec2 uvCopy;
      void main() {
        vec2 d = texel * 0.25;
        float visibility = (texture2D(source, uvCopy + d).r
          + texture2D(source, uvCopy - d).r
          + texture2D(source, uvCopy + vec2(d.x, -d.y)).r
          + texture2D(source, uvCopy + vec2(-d.x, d.y)).r) * 0.25;
        gl_FragColor = vec4(visibility, 0.0, 0.0, 1.0);
        gl_FragDepth = texture2D(depth, uvCopy).r;
      }`,depthTest:!0,depthFunc:Co,depthWrite:!0,blending:mi,toneMapped:!1});uniforms={carmaCaptureVisibility:{value:!1},carmaRetainedEnabled:{value:!1},carmaRetainedColor:{value:null},carmaRetainedDepth:{value:null},carmaRetainedMatrix:{value:new Q},carmaRetainedCrop:{value:new te(0,0,1,1)},carmaRetainedCount:{value:0},carmaRetainedBounds:{value:Array.from({length:Tr},()=>new te)}};get memoryBytes(){return[...this.captures.values()].reduce((e,t)=>e+t.bytes,this.readbackBytes)}getCapturedSize(e){const t=this.captures.get(e);return t?{width:t.width,height:t.height,samples:t.samples}:null}get stats(){return{pages:this.captures.size,samples:this.samples,matchingPages:this.matchingPages,replays:this.replayCount,bytes:this.memoryBytes}}beginFrame(e=[]){this.matchingPages=0,this.visiblePageIds=new Set(e.map(t=>t.id)),this.schedulePersistence()}has(e,t){var n;const i=this.captures.get(e.id);if(!this.canReplay(e)||(i==null?void 0:i.casterRevision)!==e.casterRevision)return!1;if(i&&i.samples>1&&i.samples>=t&&e.captureSize&&e.presentationKey&&i.crop.x===0&&i.crop.y===0&&i.crop.z===1&&i.crop.w===1)return i.width>=e.captureSize.width&&i.height>=e.captureSize.height;if(i!=null&&i.restored){const s=this.restoreRequests.get(e.id),a=(n=this.persistence)==null?void 0:n.identity(e,t);if(e.ready===!1||!(s!=null&&s.expected)||!a||Ge(a)!==i.persistentKey||!Uf(i.matrix,s.expected))return!1;const o=e.screenBounds,c=i.crop;if(c.x>o.x+1e-6||c.y>o.y+1e-6||c.x+c.z<o.x+o.z-1e-6||c.y+c.w<o.y+o.w-1e-6)return!1}return(i==null?void 0:i.revision)===(e.contentKey??e.revision)&&i.samples===t}hasAtLeast(e,t){const i=this.captures.get(e.id);return!!(i&&i.samples>=t&&this.has(e,i.samples))}downsample(e,t,i){var y;if(!Number.isInteger(t)||!Number.isInteger(i)||t<1||i<1)return!1;const n=this.captures.get(e.id);if(!n||!this.canReplay(e))return!1;const s=Math.max(t,Math.ceil(n.width/2)),a=Math.max(i,Math.ceil(n.height/2));if(s>n.width||a>n.height||s*a>=n.width*n.height)return!1;const o=new je(s,a,{type:wt,format:Qt,minFilter:Ce,magFilter:Ce,depthTexture:new ir(s,a,Bt),samples:0}),c=this.renderer,l=c.getRenderTarget(),u=c.getActiveCubeFace(),d=c.getActiveMipmapLevel(),f=c.getViewport(new te),p=c.getScissor(new te),h=c.getScissorTest(),v=c.autoClear;try{c.initRenderTarget(o),this.downsampleMaterial.uniforms.source.value=n.visibility,this.downsampleMaterial.uniforms.depth.value=n.depth,this.downsampleMaterial.uniforms.texel.value.set(1/s,1/a),this.copyQuad.material=this.downsampleMaterial,c.autoClear=!1,c.setRenderTarget(o),c.setViewport(new te(0,0,s,a)),c.setScissorTest(!1),c.render(this.copyScene,this.copyCamera)}catch(g){throw(y=o.depthTexture)==null||y.dispose(),o.dispose(),g}finally{this.copyQuad.material=this.copyMaterial,c.setRenderTarget(l,u,d),c.setViewport(f),c.setScissor(p),c.setScissorTest(h),c.autoClear=v}return this.captures.set(e.id,{...n,target:o,visibility:o.texture,depth:o.depthTexture,width:s,height:a,bytes:s*a*8}),this.pendingWrites.delete(e.id),Mr(n),this.contentRevision+=1,!0}isRestorePending(e,t){var s;const i=this.pendingRestores.get(e.id);if(!i||i.samples!==t)return!1;const n=(s=this.persistence)==null?void 0:s.identity(e,t);return!!(n&&Ge(n)===i.key)}setPersistence(e){this.persistence!==e&&(this.cancelPendingPersistence(),this.persistence=e)}cancelPendingPersistence(){var e;(e=this.persistence)==null||e.cache.cancelPending(),this.persistenceGeneration+=1,this.restoreAttempts.clear(),this.pendingRestores.clear(),this.restoreRequests.clear(),this.pendingWrites.clear(),this.persistenceOffers=new WeakMap,this.persistenceAttempted=new WeakSet,this.persistenceTimer!==null&&clearTimeout(this.persistenceTimer),this.persistenceTimer=null}beginSolarTransition(){this.cancelPendingPersistence()}canPresent(e){return this.canReplay(e)}prepareRestore(e,t,i){if(this.disposed)return;if(this.restoreRequests.set(e.id,{page:e,samples:t,expected:i==null?void 0:i.clone()}),this.restoreRequests.size>Tr*2){for(const l of this.restoreRequests.keys())if(l!==e.id&&!this.visiblePageIds.has(l)){this.restoreRequests.delete(l);break}}const n=this.persistence;if(!(n!=null&&n.cache.enabled)||n.cache.busy||e.ready===!1||this.hasAtLeast(e,t))return;const s=n.identity(e,t),a=s&&Ge(s);if(!s||!a||this.restoreAttempts.has(a))return;this.restoreAttempts.add(a),this.restoreAttempts.size>Tr*4&&this.restoreAttempts.delete(this.restoreAttempts.values().next().value);const o=this.persistenceGeneration,c=this.captures.get(e.id);this.pendingRestores.set(e.id,{key:a,samples:t}),n.cache.read(s).then(l=>{const u=this.restoreRequests.get(e.id),d=u&&n.identity(u.page,t);if(!l||this.disposed||this.persistenceGeneration!==o||this.persistence!==n||!u||u.page.ready===!1||!d||Ge(d)!==a||this.captures.get(e.id)!==c)return;const f=new Q().fromArray(l.worldBasis),p=n.worldBasis();if(!f.elements.every(Number.isFinite)||f.determinant()===0||!p.elements.every(Number.isFinite)||p.determinant()===0)return;const h=new Q().fromArray(l.captureMatrix).multiply(f.invert()).multiply(p),v=[...new Set([l.visibility.buffer,l.depth.buffer])].reduce((R,O)=>R+O.byteLength,0),y=l.width*l.height*Ja+v;if(!this.admit(e.id,y))return;const g=new Nn(l.visibility,l.width,l.height,Qt,wt),T=new Nn(l.depth,l.width,l.height,Qt,wt);for(const R of[g,T])R.minFilter=Ce,R.magFilter=Ce,R.generateMipmaps=!1,R.needsUpdate=!0;c&&Mr(c),this.captures.delete(e.id),this.captures.set(e.id,{target:null,visibility:g,depth:T,width:l.width,height:l.height,bytes:y,restored:!0,persistentKey:a,persistentIdentity:l.identity,revision:u.page.contentKey??u.page.revision,casterRevision:u.page.casterRevision,presentationKey:u.page.presentationKey??u.page.contentKey??u.page.revision,samples:l.identity.samples,matrix:h,crop:new te().fromArray(l.crop)}),this.samples=l.identity.samples,this.contentRevision+=1}).catch(()=>{}).finally(()=>{var l,u;!this.disposed&&o===this.persistenceGeneration&&(((l=this.pendingRestores.get(e.id))==null?void 0:l.key)===a&&this.pendingRestores.delete(e.id),(u=n.requestRepaint)==null||u.call(n),this.schedulePersistence())})}admit(e,t,i=!1){var a;const n=i?Math.min(((a=this.captures.get(e))==null?void 0:a.bytes)??0,Ff):0,s=Rn+n;for(const[o,c]of this.captures){if(t+this.memoryBytes<=s)break;o===e||this.visiblePageIds.has(o)||(Mr(c),this.captures.delete(o),this.contentRevision+=1,this.pendingWrites.delete(o))}return t+this.memoryBytes<=s}publish(e,t,i,n,s){var N;if(!this.captureSupported)return!1;const a=n.screenBounds,o=Math.max(0,Math.floor(a.x*e.width)),c=Math.max(0,Math.floor(a.y*e.height)),l=Math.min(e.width,Math.ceil((a.x+a.z)*e.width)),u=Math.min(e.height,Math.ceil((a.y+a.w)*e.height)),d=l-o,f=u-c,p=d*f*Ja;if(d<=0||f<=0||p>Rn||!t.depthTexture||!this.admit(n.id,p,!0))return!1;const h=this.renderer,v=h.getRenderTarget(),y=h.getActiveCubeFace(),g=h.getActiveMipmapLevel(),T=h.getViewport(new te),R=h.getScissor(new te),O=h.getScissorTest(),b=h.autoClear,D=new je(d,f,{type:wt,format:Qt,minFilter:Ce,magFilter:Ce,depthTexture:new ir(d,f,Bt),samples:0});try{h.initRenderTarget(D);const F=new pl(new Ct(o,c),new Ct(l,u));this.copyMaterial.uniforms.source.value=e.texture,this.copyMaterial.uniforms.crop.value.set(o/e.width,c/e.height,d/e.width,f/e.height),h.autoClear=!1,h.setRenderTarget(D),h.setViewport(new te(0,0,d,f)),h.setScissorTest(!1),h.render(this.copyScene,this.copyCamera),h.copyTextureToTexture(t.depthTexture,D.depthTexture,F)}catch(F){throw(N=D.depthTexture)==null||N.dispose(),D.dispose(),F}finally{h.setRenderTarget(v,y,g),h.setViewport(T),h.setScissor(R),h.setScissorTest(O),h.autoClear=b}const C=this.captures.get(n.id);C&&Mr(C),this.samples=s,this.captures.delete(n.id);const E={target:D,visibility:D.texture,depth:D.depthTexture,width:d,height:f,bytes:p,restored:!1,revision:n.contentKey??n.revision,casterRevision:n.casterRevision,samples:s,presentationKey:n.presentationKey??n.contentKey??n.revision,matrix:new Q().multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),crop:new te(o/e.width,c/e.height,d/e.width,f/e.height)};return this.captures.set(n.id,E),this.contentRevision+=1,this.queuePersistence(n,E),!0}queuePersistence(e,t){const i=this.persistence;if(!(i!=null&&i.cache.enabled)||e.ready===!1||this.disposed)return;const n=i.identity(e,t.samples),s=n&&Ge(n),a=i.worldBasis();!n||n.samples!==t.samples||!s||!a.elements.every(Number.isFinite)||a.determinant()===0||t.width*t.height*16>eo||(this.pendingWrites.delete(e.id),this.persistenceOffers.set(t,{page:e,capture:t,identity:n,key:s,worldBasis:[...a.elements]}),this.schedulePersistence())}schedulePersistence(){var e;if(!(this.disposed||this.persistenceTimer!==null||this.readbackBusy||!((e=this.persistence)!=null&&e.cache.enabled)||this.persistence.cache.busy)){for(const[t,i]of this.pendingWrites)this.captures.get(t)!==i.capture&&this.pendingWrites.delete(t);for(const t of[!0,!1])for(const[i,n]of this.captures){if(this.pendingWrites.size>=Bf)break;const s=this.persistenceOffers.get(n);this.visiblePageIds.has(i)===t&&s&&!this.persistenceAttempted.has(n)&&!this.pendingWrites.has(i)&&this.pendingWrites.set(i,s)}this.pendingWrites.size!==0&&(this.persistenceTimer=setTimeout(()=>{this.persistenceTimer=null,this.persistNextCapture()},0))}}persistNextCapture(){var h,v,y;const e=this.persistence;if(this.disposed||this.readbackBusy||!(e!=null&&e.cache.enabled)||e.cache.busy||typeof this.renderer.readRenderTargetPixelsAsync!="function")return;const t=[...this.pendingWrites.entries()].find(([g,T])=>this.captures.get(g)===T.capture);if(!t){this.pendingWrites.clear();return}const[i,n]=t,s=((h=this.restoreRequests.get(i))==null?void 0:h.page)??n.page,a=e.identity(s,n.capture.samples);if(s.ready===!1||!a||Ge(a)!==n.key){this.pendingWrites.delete(i),this.persistenceAttempted.add(n.capture),this.schedulePersistence();return}const{capture:o}=n,c=o.width*o.height*16;if(c>eo||this.memoryBytes+c*2>Rn){this.pendingWrites.delete(i),this.persistenceAttempted.add(o),this.schedulePersistence();return}const l=this.persistenceGeneration,u={target:null,pixels:null,reading:null},d=()=>{const g=this.renderer,T=g.getRenderTarget(),R=g.getActiveCubeFace(),O=g.getActiveMipmapLevel(),b=g.getViewport(new te),D=g.getScissor(new te),C=g.getScissorTest(),E=g.autoClear,N=this.copyQuad.material;try{u.target=new je(o.width,o.height,{format:Nr,type:wt,depthBuffer:!1,minFilter:Ce,magFilter:Ce}),g.initRenderTarget(u.target),u.pixels=new Float32Array(o.width*o.height*4),this.packMaterial.uniforms.visibility.value=o.visibility,this.packMaterial.uniforms.depth.value=o.depth,this.copyQuad.material=this.packMaterial,g.autoClear=!1,g.setRenderTarget(u.target),g.setViewport(new te(0,0,o.width,o.height)),g.setScissorTest(!1),g.render(this.copyScene,this.copyCamera),u.reading=g.readRenderTargetPixelsAsync(u.target,0,0,o.width,o.height,u.pixels)}finally{this.copyQuad.material=N,g.setRenderTarget(T,R,O),g.setViewport(b),g.setScissor(D),g.setScissorTest(C),g.autoClear=E}};try{if(e.runIdleRender){if(!e.runIdleRender(d)&&!u.target)return}else d()}catch{(v=u.target)==null||v.dispose(),this.pendingWrites.delete(i),this.persistenceAttempted.add(o),this.schedulePersistence();return}if(!u.reading||!u.target||!u.pixels){(y=u.target)==null||y.dispose();return}const f=u.target,p=u.pixels;this.pendingWrites.delete(i),this.persistenceAttempted.add(o),this.readbackBusy=!0,this.readbackBytes=c*2,u.reading.then(async()=>{var R;const g=((R=this.restoreRequests.get(i))==null?void 0:R.page)??n.page,T=e.identity(g,o.samples);this.disposed||l!==this.persistenceGeneration||this.persistence!==e||g.ready===!1||!T||Ge(T)!==n.key||await e.cache.writePacked(n.identity,{width:o.width,height:o.height,rgba:p,captureMatrix:[...o.matrix.elements],crop:o.crop.toArray(),worldBasis:n.worldBasis})}).catch(()=>{}).finally(()=>{var g;f.dispose(),this.readbackBusy=!1,this.readbackBytes=0,this.disposed||((g=e.requestRepaint)==null||g.call(e),this.schedulePersistence())})}canReplay(e){var i;const t=this.captures.get(e.id);if(!t||t.presentationKey!==(e.presentationKey??e.contentKey??e.revision))return!1;if(t.restored){const n=(i=this.persistence)==null?void 0:i.identity(e,t.samples),s=t.persistentIdentity;if(e.captureSize&&s)return!!(n&&n.source===s.source&&n.dateTime===s.dateTime&&n.corridor===s.corridor&&n.geometryFingerprint===s.geometryFingerprint&&n.samples===s.samples);if(!n||Ge(n)!==t.persistentKey)return!1}return!0}activate(e){const t=this.captures.get(e.id);this.captures.delete(e.id),this.captures.set(e.id,t),this.uniforms.carmaRetainedMatrix.value.copy(t.matrix),this.uniforms.carmaRetainedCrop.value.copy(t.crop),this.uniforms.carmaRetainedColor.value=t.visibility,this.uniforms.carmaRetainedDepth.value=t.depth,this.matchingPages+=1,this.replayCount+=1,this.uniforms.carmaRetainedCount.value=1;const i=e.receiverBounds;this.uniforms.carmaRetainedBounds.value[0].set(i.min.x,i.min.z,i.max.x,i.max.z),this.uniforms.carmaRetainedEnabled.value=!0}renderNative(e,t,i){if(t.length===0)return i(),new Set;this.configureScene(e);const n=new Map(t.filter(u=>u.receiverObjectId!==void 0&&this.canPresent(u)).map(u=>[u.receiverObjectId,u])),s=[],a=new Map;e.traverseVisible(u=>{const d=u;if(!d.isMesh)return;let f;for(let p=d;p&&(f=n.get(p.id),!f);p=p.parent);s.push({mesh:d,page:f});for(const p of Array.isArray(d.material)?d.material:[d.material]){let h=a.get(p);h||a.set(p,h=new Set),h.add(f==null?void 0:f.id)}});const o=new Set;for(const u of a.values())if(!(u.size<2))for(const d of u)d!==void 0&&o.add(d);const c=new Set,l=[];for(const{mesh:u,page:d}of s){const f=u.onBeforeRender,p=d!==void 0&&!o.has(d.id);u.onBeforeRender=(...h)=>{f.call(u,...h),this.uniforms.carmaRetainedEnabled.value=!1,p&&this.activate(d)},p&&c.add(d.id),l.push(()=>{u.onBeforeRender=f})}this.uniforms.carmaRetainedEnabled.value=!1;try{return i(),c}finally{this.uniforms.carmaRetainedEnabled.value=!1;for(const u of l)u()}}render(e,t,i,n){if(!this.canPresent(t))return n();this.configureScene(e),this.activate(t);try{return n()}finally{this.uniforms.carmaRetainedEnabled.value=!1}}capture(e,t){this.captureSupported=!0,this.configureScene(e),this.uniforms.carmaCaptureVisibility.value=!0;try{return t()}finally{this.uniforms.carmaCaptureVisibility.value=!1}}configureScene(e){e.traverseVisible(t=>{const i=t;if(!(!i.isMesh||!i.receiveShadow)){if(i.isInstancedMesh||i.isSkinnedMesh){this.captureSupported=!1;return}for(const n of Array.isArray(i.material)?i.material:[i.material]){if(this.unsupportedMaterials.has(n)&&(this.captureSupported=!1),!(n.isMeshStandardMaterial||n.isMeshLambertMaterial||n.isMeshPhongMaterial)||n.transparent){this.captureSupported=!1;continue}this.materials.has(n)||this.configure(n)}}})}configure(e){const t=e.onBeforeCompile,i=e.customProgramCacheKey,n=this.uniforms,s=(l,u)=>{t.call(e,l,u);const d=/getShadow\( directionalShadowMap\[ i \][^;]+?\)/;if(!l.vertexShader.includes("#include <common>")||!l.vertexShader.includes("#include <project_vertex>")||!l.fragmentShader.includes("#include <common>")||!l.fragmentShader.includes("#include <lights_fragment_begin>")||!l.fragmentShader.includes("#include <dithering_fragment>")||!d.test(Ln.lights_fragment_begin)){this.unsupportedMaterials.add(e),this.captureSupported=!1;return}this.unsupportedMaterials.delete(e),Object.assign(l.uniforms,n),l.vertexShader=l.vertexShader.replace("#include <common>",`#include <common>
uniform mat4 carmaRetainedMatrix;
varying vec4 vCarmaRetainedClip;
varying vec2 vCarmaRetainedWorld;
`).replace("#include <project_vertex>",`#include <project_vertex>
vec4 retainedWorld = modelMatrix * vec4(transformed, 1.0);
vCarmaRetainedClip = carmaRetainedMatrix * retainedWorld;
vCarmaRetainedWorld = retainedWorld.xz;
`),l.fragmentShader=l.fragmentShader.replace("#include <common>",`#include <common>
uniform bool carmaRetainedEnabled;
uniform bool carmaCaptureVisibility;
uniform sampler2D carmaRetainedColor;
uniform sampler2D carmaRetainedDepth;
uniform vec4 carmaRetainedCrop;
uniform int carmaRetainedCount;
uniform vec4 carmaRetainedBounds[${Tr}];
varying vec4 vCarmaRetainedClip;
varying vec2 vCarmaRetainedWorld;
float carmaRetainedCoverage(float fallbackCoverage) {
  vec3 ndc = vCarmaRetainedClip.xyz / vCarmaRetainedClip.w;
  vec2 uv = ndc.xy * 0.5 + 0.5;
  uv = (uv - carmaRetainedCrop.xy) / carmaRetainedCrop.zw;
  if (!carmaRetainedEnabled || carmaCaptureVisibility || vCarmaRetainedClip.w <= 0.0) return fallbackCoverage;
  bool owned = false;
  for (int i = 0; i < ${Tr}; i++) {
    if (i >= carmaRetainedCount) break;
    vec4 b = carmaRetainedBounds[i];
    if (vCarmaRetainedWorld.x >= b.x && vCarmaRetainedWorld.y >= b.y &&
        vCarmaRetainedWorld.x < b.z && vCarmaRetainedWorld.y < b.w) owned = true;
  }
  if (owned && all(greaterThanEqual(uv, vec2(0.0))) && all(lessThanEqual(uv, vec2(1.0)))) {
    float depth = texture2D(carmaRetainedDepth, uv).r;
    // Depth is only a capture-coverage marker. Per-fragment depth matching
    // rejected valid triangle-edge samples and exposed hard-shadow patches.
    // Baked visibility intentionally survives observer motion; see
    // BAKED-VISIBILITY-20260909 in three/TILED_SHADOW_PAGES.md.
    if (depth < 1.0) {
      return texture2D(carmaRetainedColor, uv).r;
    }
  }
  return fallbackCoverage;
}
`);const f=Ln.lights_fragment_begin.replace(d,p=>`(carmaCapturedCoverage = ${p}, carmaRetainedCoverage(carmaCapturedCoverage))`);l.fragmentShader=l.fragmentShader.replace("#include <lights_fragment_begin>",`float carmaCapturedCoverage = 1.0;
${f}`).replace("#include <dithering_fragment>",`#include <dithering_fragment>
if (carmaCaptureVisibility) gl_FragColor.rgb = vec3(carmaCapturedCoverage);`)},a=()=>`${i.call(e)}|retained-corridor-visibility-v4`;e.onBeforeCompile=s,e.customProgramCacheKey=a,e.needsUpdate=!0;const o=()=>{e.onBeforeCompile===s&&(e.onBeforeCompile=t),e.customProgramCacheKey===a&&(e.customProgramCacheKey=i),e.removeEventListener("dispose",c),e.needsUpdate=!0},c=()=>{o(),this.materials.delete(e)};e.addEventListener("dispose",c),this.materials.set(e,o)}dispose(){this.disposed=!0,this.setPersistence(void 0);for(const e of this.captures.values())Mr(e);this.captures.clear(),this.uniforms.carmaRetainedEnabled.value=!1,this.uniforms.carmaRetainedColor.value=null,this.uniforms.carmaRetainedDepth.value=null,this.copyQuad.geometry.dispose(),this.copyMaterial.dispose(),this.downsampleMaterial.dispose(),this.packMaterial.dispose();for(const e of this.materials.values())e();this.materials.clear()}}const Ft=64,pi=512*1024**2,Je={inactive:"inactive",dimensions:"dimensions",budget:"budget",msaa:"msaa",format:"format",receivers:"receivers",pages:"pages",renderer:"renderer",disposed:"disposed"},to=`
  out vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`,Hf=`
  layout(location = 0) out highp vec4 outColor;
  in vec2 vUv;
  uniform sampler2D tPrevious;
  uniform sampler2D tReference;
  uniform sampler2D tReferenceDepth;
  uniform sampler2D tSample;
  uniform sampler2D tSampleDepth;
  uniform mat4 uInverseViewProjection;
  uniform vec4 uBounds[${Ft}];
  uniform int uBoundsCount;
  uniform bool uRefresh;
  uniform bool uResetAll;
  uniform float uWeights[${Ft}];
  void main() {
    vec4 reference = texture(tReference, vUv);
    float depth = texture(tReferenceDepth, vUv).r;
    if (uResetAll || depth >= 1.0) {
      outColor = reference;
      return;
    }
    vec4 position = uInverseViewProjection * vec4(vUv * 2.0 - 1.0, depth * 2.0 - 1.0, 1.0);
    vec2 world = position.xz / position.w;
    bool owned = false;
    float weight = 0.0;
    for (int i = 0; i < ${Ft}; i++) {
      if (i >= uBoundsCount) break;
      vec4 bounds = uBounds[i];
      if (world.x >= bounds.x && world.y >= bounds.y &&
        world.x < bounds.z && world.y < bounds.w) {
        owned = true;
        weight = uWeights[i];
        break;
      }
    }
    vec4 previous = texture(tPrevious, vUv);
    if (!owned) {
      outColor = previous;
    } else if (uRefresh) {
      outColor = reference;
    } else {
      float sampleDepth = texture(tSampleDepth, vUv).r;
      // Screen rectangles overlap. Only the camera's nearest actual surface
      // belongs to this update, never a hidden receiver from another page.
      outColor = abs(sampleDepth - depth) <= 0.000001
        ? mix(previous, texture(tSample, vUv), weight)
        : previous;
    }
  }
`,kf=`
#include <common>
#include <dithering_pars_fragment>
  layout(location = 0) out highp vec4 outColor;
  in vec2 vUv;
  uniform sampler2D tColor;
  uniform sampler2D tDepth;
  uniform bool uOutputDither;
  void main() {
    vec4 color = texture(tColor, vUv);
    if (color.a < 0.004) discard;
    #ifdef TONE_MAPPING
      color.rgb = toneMapping(color.rgb);
    #endif
    outColor = linearToOutputTexel(color);
    #ifdef DITHERING
      if (uOutputDither) outColor.rgb = dithering(outColor.rgb);
    #endif
    gl_FragDepth = texture(tDepth, vUv).r;
  }
`;class zf{constructor(e,t){this.renderer=e,this.ownsPresentation=t===void 0,this.presentation=t??new Pc(e),this.quad.frustumCulled=!1,this.fullscreenScene.add(this.quad)}fullscreenScene=new Pr;fullscreenCamera=new rs(-1,1,1,-1,0,1);blendMaterial=new Jt({glslVersion:Or,vertexShader:to,fragmentShader:Hf,uniforms:{tPrevious:{value:null},tReference:{value:null},tReferenceDepth:{value:null},tSample:{value:null},tSampleDepth:{value:null},uInverseViewProjection:{value:new Q},uBounds:{value:Array.from({length:Ft},()=>new te)},uBoundsCount:{value:0},uRefresh:{value:!1},uResetAll:{value:!1},uWeights:{value:new Float32Array(Ft).fill(1)}},depthTest:!1,depthWrite:!1,blending:mi});compositeMaterial=new Jt({glslVersion:Or,vertexShader:to,fragmentShader:kf,uniforms:{tColor:{value:null},tDepth:{value:null},uOutputDither:{value:!1}},dithering:!0,transparent:!0,blending:yo,depthTest:!0,depthFunc:Co,depthWrite:!0});quad=new Br(new es(2,2),this.blendMaterial);referenceTarget=null;sampleTarget=null;readTarget=null;writeTarget=null;pages=new Map;stateKey="";targetKey="";cursor=0;totalSamples=1;broken=!1;disposed=!1;allocatedBytes=0;lastFallbackReason=null;presentation;publishedStateKeys=new Map;publicationRetryMs=250;ownsPresentation;get pageProgress(){return[...this.pages].map(([e,t])=>({id:e,samples:t.samples,totalSamples:this.totalSamples,ready:t.page.ready!==!1,published:this.publishedStateKeys.get(e)===JSON.stringify([this.stateKey,t.page.revision])}))}get memoryBytes(){return this.allocatedBytes+this.presentation.memoryBytes}get fallbackReason(){return this.lastFallbackReason}render(e,t,i){var E,N;if(this.disposed)return this.fallback(Je.disposed);if(this.broken)return this.fallback(Je.renderer);if(!i.active)return this.stateKey="",this.lastFallbackReason=Je.inactive,null;const{width:n,height:s,samples:a}=i,o=ss((E=i.options)==null?void 0:E.format),c=((N=i.options)==null?void 0:N.msaaSamples)??Io.msaaSamples,l=n*s,u=i.visibilityOnly?Qt:Nr,d=i.visibilityOnly?1:4,f=l*(2*(o.bytesPerPixel*d/4+4)+2*o.accumulationBytesPerPixel*d/4);if(!Number.isInteger(n)||n<1||!Number.isInteger(s)||s<1||!Number.isInteger(a)||a<1||n>this.renderer.capabilities.maxTextureSize||s>this.renderer.capabilities.maxTextureSize)return this.fallback(Je.dimensions);if(i.maxRenderTargetPixels!==void 0&&(!(i.maxRenderTargetPixels>0)||l>i.maxRenderTargetPixels)||f+this.presentation.memoryBytes>pi)return this.fallback(Je.budget);if(o.format!==Nr)return this.fallback(Je.format);if(c!==0)return this.fallback(Je.msaa);if(!t.supportsOpaqueAccumulation)return this.fallback(Je.receivers);const p=t.accumulationPages.map(F=>{var Y;return{...F,ready:F.ready!==!1&&(((Y=i.isPageReady)==null?void 0:Y.call(i,F.id))??!0)}});if(p.length===0||p.length>Ft)return this.fallback(Je.pages);this.lastFallbackReason=null;const h=this.renderer,v=h.getRenderTarget(),y=h.getActiveCubeFace(),g=h.getActiveMipmapLevel(),T=h.getClearColor(new ke),R=h.getClearAlpha(),O=h.autoClear,b=h.getViewport(new te),D=h.getScissor(new te),C=h.getScissorTest();try{h.autoClear=!1;const F=JSON.stringify([n,s,o.type,o.accumulationType,u]);if(this.targetKey!==F){this.releaseTargets();const P={type:o.type,format:u,minFilter:Ce,magFilter:Ce,depthBuffer:!0,samples:0};this.referenceTarget=new je(n,s,{...P,depthTexture:new ir(n,s,Bt)}),this.sampleTarget=new je(n,s,{...P,depthTexture:new ir(n,s,Bt)});const ie={type:o.accumulationType,format:u,minFilter:Ce,magFilter:Ce,depthBuffer:!1};this.readTarget=new je(n,s,ie),this.writeTarget=new je(n,s,ie),this.targetKey=F,this.allocatedBytes=f}const Y=JSON.stringify([i.viewKey,i.visibilityOnly?0:i.styleEpoch,a,F]),G=this.stateKey!==Y,B=new Set(p.map(({id:P})=>P)),ne=[...this.pages.values()].filter(({page:P})=>!B.has(P.id)).map(({page:P})=>P),V=[...G?p:p.filter(P=>{var K;const ie=(K=this.pages.get(P.id))==null?void 0:K.page;return(ie==null?void 0:ie.revision)!==P.revision||(ie==null?void 0:ie.ready)===!1&&P.ready}),...ne].flatMap(P=>[P.screenBounds,...this.pages.has(P.id)?[this.pages.get(P.id).page.screenBounds]:[]]),re=G?p:p.filter(P=>V.some(ie=>this.overlaps(P.screenBounds,ie)));this.blendMaterial.uniforms.uInverseViewProjection.value.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse).invert(),G&&(this.pages.clear(),this.cursor=0);for(const P of ne)this.pages.delete(P.id);for(const P of re)this.publishedStateKeys.delete(P.id);re.length>0&&(this.publicationRetryMs=250),this.cursor%=Math.max(1,p.length);for(const P of p){const ie=this.pages.get(P.id);ie?ie.page=P:this.pages.set(P.id,{page:P,samples:0})}if(this.totalSamples=a,re.length>0||ne.length>0){this.clearTarget(this.referenceTarget),t.renderSample(e,0,a),this.blend(re,!0,G,re.map(()=>1));for(const P of re)this.pages.get(P.id).samples=1}else{const P=[...this.pages.values()],ie=performance.now(),K=i.maxPagesPerFrame??4,Fe=Number.isFinite(K)?Math.min(Ft,Math.max(1,Math.floor(K))):4,Tt=i.maxFrameCpuMilliseconds??4,rt=Number.isFinite(Tt)?Math.max(0,Tt):4;let ye=0;do{const he=[],ht=this.cursor;for(let H=0;H<P.length;H+=1){const Ne=(ht+H)%P.length,mt=P[Ne];if(!(mt.samples>=a||mt.page.ready===!1)){if(he.length===0&&this.clearTarget(this.sampleTarget),!t.renderPageSample(e,mt.page.id,mt.samples,a))return this.fallback(Je.pages);if(he.push(mt),ye+=1,this.cursor=(Ne+1)%P.length,ye>=Fe||performance.now()-ie>=rt)break}}if(he.length===0)break;this.blend(he.map(({page:H})=>H),!1,!1,he.map(H=>1/(H.samples+1)));for(const H of he)H.samples+=1}while(ye<Fe&&performance.now()-ie<rt)}this.stateKey=Y,h.setRenderTarget(v,y,g),h.setViewport(b),h.setScissor(D),h.setScissorTest(C),this.quad.material=this.compositeMaterial;const q=[...this.pages.values()].every(P=>P.samples>=a);this.compositeMaterial.uniforms.tColor.value=q?this.readTarget.texture:this.referenceTarget.texture,this.compositeMaterial.uniforms.tDepth.value=this.referenceTarget.depthTexture,this.compositeMaterial.uniforms.uOutputDither.value=v===null,i.visibilityOnly||h.render(this.fullscreenScene,this.fullscreenCamera);let le=!1;for(const{page:P,samples:ie}of this.pages.values()){if(P.ready===!1||ie<a)continue;const K=JSON.stringify([Y,P.revision]);if(this.publishedStateKeys.get(P.id)!==K)try{this.presentation.publish(this.readTarget,this.referenceTarget,e,P,a)?this.publishedStateKeys.set(P.id,K):le=!0}catch(Fe){le=!0,console.error("[shadow-simulation] retaining previous corridor capture after copy failure",Fe)}}for(const P of this.publishedStateKeys.keys())B.has(P)||this.publishedStateKeys.delete(P);const ue=[...this.pages.values()].reduce((P,{page:ie,samples:K})=>{const Fe=ie.ready!==!1&&this.publishedStateKeys.get(ie.id)===JSON.stringify([Y,ie.revision]);return P+(Fe?a:Math.min(K,a-1))},0),xe=le?this.publicationRetryMs:void 0;return this.publicationRetryMs=le?Math.min(4e3,this.publicationRetryMs*2):250,{progress:ue/(this.pages.size*a),settled:ue===this.pages.size*a,...xe===void 0?{}:{retryAfterMs:xe},needsRepaint:[...this.pages.values()].some(P=>P.samples<a&&P.page.ready!==!1)}}catch(F){return this.broken=!0,console.error("[shadow-simulation] corridor accumulation failed; using direct rendering",F),this.fallback(Je.renderer)}finally{h.autoClear=O,h.setClearColor(T,R),h.setRenderTarget(v,y,g),h.setViewport(b),h.setScissor(D),h.setScissorTest(C)}}overlaps(e,t){return e.x<=t.x+t.z&&e.x+e.z>=t.x&&e.y<=t.y+t.w&&e.y+e.w>=t.y}clearTarget(e){this.renderer.setRenderTarget(e),this.renderer.setClearColor(0,0),this.renderer.clear(!0,!0,!1)}blend(e,t,i,n){const s=this.blendMaterial.uniforms;s.tPrevious.value=this.readTarget.texture,s.tReference.value=this.referenceTarget.texture,s.tReferenceDepth.value=this.referenceTarget.depthTexture,s.tSample.value=this.sampleTarget.texture,s.tSampleDepth.value=this.sampleTarget.depthTexture,s.uBoundsCount.value=e.length,e.forEach(({receiverBounds:o},c)=>s.uBounds.value[c].set(o.min.x,o.min.z,o.max.x,o.max.z)),s.uRefresh.value=t,s.uResetAll.value=i,s.uWeights.value.set(n),this.quad.material=this.blendMaterial,this.renderer.setRenderTarget(this.writeTarget),this.renderer.render(this.fullscreenScene,this.fullscreenCamera);const a=this.readTarget;this.readTarget=this.writeTarget,this.writeTarget=a}releaseTargets(){var e;for(const t of[this.referenceTarget,this.sampleTarget,this.readTarget,this.writeTarget])(e=t==null?void 0:t.depthTexture)==null||e.dispose(),t==null||t.dispose();this.referenceTarget=null,this.sampleTarget=null,this.readTarget=null,this.writeTarget=null,this.stateKey="",this.targetKey="",this.allocatedBytes=0,this.pages.clear()}releaseScratch(e=!1){e?(this.stateKey="",this.pages.clear()):this.releaseTargets(),this.publishedStateKeys.clear(),this.cursor=0}fallback(e){return this.lastFallbackReason=e,this.releaseTargets(),null}dispose(){this.disposed||(this.disposed=!0,this.releaseTargets(),this.ownsPresentation&&this.presentation.dispose(),this.quad.geometry.dispose(),this.blendMaterial.dispose(),this.compositeMaterial.dispose())}}const ro=2e4;let Vf=0;var vo;class Wf{enabled=gl((vo=globalThis.location)==null?void 0:vo.hostname);reportId=++Vf;nextCorridorId=0;labels=new Map;pending=new Map;timer;context;observe(e,t){var s;if(!this.enabled)return;const i=performance.now();for(const{id:a}of e)this.labels.has(a)||this.labels.set(a,`C${this.reportId}.${++this.nextCorridorId}`);this.context={total:e.length,ready:e.filter(a=>a.ready).length,completed:e.filter(a=>a.published).length,samples:e.reduce((a,o)=>a+o.samples,0),activeId:t.activeId?this.labels.get(t.activeId):null,memoryBytes:t.memoryBytes,fallbackReason:t.fallbackReason,publicationRetries:(s=t.publicationRetries)==null?void 0:s.map(([a,o])=>({id:this.labels.get(a),attempts:o.attempts,retryInMs:Math.max(0,Math.round(o.retryAt-i))}))};const n=new Set(e.map(({id:a})=>a));for(const a of this.pending.keys())n.has(a)||this.pending.delete(a);for(const a of this.labels.keys())n.has(a)||this.labels.delete(a);for(const a of e){if(a.published){this.pending.delete(a.id);continue}const o=this.pending.get(a.id),c=!o||a.samples>o.progress.samples;this.pending.set(a.id,{progress:a,advancedAt:c?i:o.advancedAt,reported:c?!1:o.reported})}this.schedule()}pause(){clearTimeout(this.timer),this.timer=void 0,this.pending.clear()}schedule(){if(this.timer!==void 0)return;let e=1/0;for(const t of this.pending.values())t.reported||(e=Math.min(e,t.advancedAt+ro));Number.isFinite(e)&&(this.timer=setTimeout(()=>{var n;this.timer=void 0;const t=performance.now(),i=[];for(const s of this.pending.values())s.reported||t-s.advancedAt<ro||(s.reported=!0,i.push({...s.progress,id:this.labels.get(s.progress.id),file:(n=s.progress.id.match(/\/([^/"\\]+\.b3dm)/))==null?void 0:n[1],stalledMilliseconds:Math.round(t-s.advancedAt),waitingForReadiness:!s.progress.ready}));i.length>0&&console.warn("[shadow-simulation] corridors without progress for 20 seconds",JSON.stringify({corridors:i,scheduler:this.context})),this.schedule()},Math.max(0,e-performance.now())))}}class Gf{constructor(e){this.renderer=e,this.presentation=new Pc(e),this.scratch=new zf(e,this.presentation)}presentation;scratch;captures=[];activeId=null;activeCapture=null;cursor=0;samples=1;disposed=!1;watchdog=new Wf;publicationRetries=new Map;restoreOpportunities=new Map;allocationKey="";allocations=new Map;plans=new Map;get memoryBytes(){return this.scratch.memoryBytes}get fallbackReason(){return this.presentation.supportsCapture?this.scratch.fallbackReason:"receivers"}get capturePages(){return this.captures.map(({page:e})=>e)}get pageProgress(){const e=this.scratch.pageProgress;return this.captures.map(({page:t,plan:i,ready:n})=>{const s=n&&this.presentation.has(t,this.samples),a=e.find(({id:o})=>o===t.id);return{id:t.id,samples:s?this.samples:(a==null?void 0:a.samples)??0,totalSamples:this.samples,ready:n,published:s,limited:i.limited,width:i.width,height:i.height}})}updateCaptures(e,t,i,n=!0){var h;const s=Nf(e),a=ss((h=i.options)==null?void 0:h.format),o=2*(a.bytesPerPixel/4+4)+2*a.accumulationBytesPerPixel/4+8,c=Math.max(1,Math.floor(Math.min(i.maxRenderTargetPixels??i.width*i.height,pi/2/o))),l=t.accumulationPages.map(v=>{const y=this.plans.get(v.id),g=(y==null?void 0:y.orientation)??s,T={groundTexelTargetMeters:v.groundTexelTargetMeters??1,maximumDimension:this.renderer.capabilities.maxTextureSize,maximumPixels:c},R=JSON.stringify([v.receiverBounds.min,v.receiverBounds.max,g.toArray(),T]),O=(y==null?void 0:y.inputs)===R?y.plan:Of(v.receiverBounds,g,T);return this.plans.set(v.id,{inputs:R,plan:O,orientation:g}),O.camera.layers.mask=e.layers.mask,{page:v,plan:O}}),u=l.find(({page:v})=>{var y;return this.activeId===v.id&&((y=this.activeCapture)==null?void 0:y.page.id)===v.id&&this.activeCapture.page.contentKey===JSON.stringify([v.contentKey??v.revision,this.activeCapture.plan.key])}),d=u?this.activeCapture.plan:null,f=JSON.stringify(l.map(({page:v,plan:y})=>[v.id,y.key,v.screenBounds.z*v.screenBounds.w]));if(f!==this.allocationKey){const v=new Map(Pf(l.filter(({page:y})=>y.id!==(u==null?void 0:u.page.id)).map(({page:y,plan:g})=>({id:y.id,plan:g,screenArea:y.screenBounds.z*y.screenBounds.w})),Qn-(d?d.width*d.height*8:0)));u&&d&&v.set(u.page.id,d),this.allocationKey=f,this.allocations=v}this.captures=l.map(({page:v,plan:y})=>{var O;const g=this.allocations.get(v.id)??y,T=JSON.stringify([v.contentKey??v.revision,g.key]),R=(!n||v.ready!==!1)&&(((O=i.isPageReady)==null?void 0:O.call(i,v.id))??!0);return{page:{...v,ready:R,captureKey:JSON.stringify([g.camera.quaternion.toArray(),g.width,g.height]),captureSize:{width:g.width,height:g.height},contentKey:T,revision:T,screenBounds:new te(0,0,1,1)},plan:g,ready:R}});const p=new Set(this.captures.map(({page:v})=>v.id));for(const v of this.plans.keys())p.has(v)||this.plans.delete(v);for(const[v,y]of this.publicationRetries){const g=this.captures.find(({page:T})=>T.id===v);(!g||g.page.contentKey!==y.contentKey)&&this.publicationRetries.delete(v)}this.presentation.beginFrame(this.capturePages);for(const{page:v,plan:y}of this.captures)this.presentation.prepareRestore(v,i.samples,new Q().multiplyMatrices(y.camera.projectionMatrix,y.camera.matrixWorldInverse));i.active&&this.reportProgress()}reportProgress(){this.watchdog.enabled&&this.watchdog.observe(this.pageProgress,{activeId:this.activeId,memoryBytes:this.memoryBytes,fallbackReason:this.fallbackReason,publicationRetries:[...this.publicationRetries.entries()]})}yieldForRestore(e,t){if(!this.presentation.isRestorePending(e,t))return!1;const i=JSON.stringify([e.id,t]),n=e.contentKey??e.revision;if(this.restoreOpportunities.get(i)===n)return!1;if(this.restoreOpportunities.set(i,n),this.restoreOpportunities.size>1024){const s=this.restoreOpportunities.keys().next().value;s!==void 0&&this.restoreOpportunities.delete(s)}return!0}render(e,t,i){var f;if(this.disposed)return null;if(!i.active)return this.watchdog.pause(),null;if(this.samples=i.samples,this.updateCaptures(e,t,i),!this.presentation.supportsCapture)return this.scratch.releaseScratch(),this.activeId=null,null;const n=performance.now();let s,a=this.captures.find(({page:p})=>p.id===this.activeId);const o=a&&!a.ready&&this.captures.some(({page:p,ready:h})=>h&&p.id!==(a==null?void 0:a.page.id)&&!this.presentation.has(p,i.samples));if((!a||o||this.presentation.has(a.page,i.samples))&&(this.scratch.releaseScratch(!0),this.activeId=null,a=void 0),a){const p=this.publicationRetries.get(a.page.id);p&&p.retryAt>n&&(s=Math.ceil(p.retryAt-n))}if(!a&&this.captures.length>0)for(let p=0;p<this.captures.length;p+=1){const h=(this.cursor+p)%this.captures.length,v=this.captures[h];if(!v.ready||this.presentation.has(v.page,i.samples)||this.yieldForRestore(v.page,i.samples))continue;const y=this.publicationRetries.get(v.page.id);if(y&&y.retryAt>n){s=Math.min(s??1/0,Math.ceil(y.retryAt-n));continue}a=v,s=void 0,this.activeId=v.page.id,this.activeCapture=v,this.cursor=(h+1)%this.captures.length;break}let c=null;if(a!=null&&a.ready&&s===void 0){this.activeCapture=a;const{page:p,plan:h}=a,v=(y,g,T)=>t.renderPageSample(y,p.id,g,T,p.screenBounds);if(c=this.scratch.render(h.camera,{accumulationPages:[p],supportsOpaqueAccumulation:t.supportsOpaqueAccumulation,renderSample:v,renderPageSample:(y,g,T,R)=>v(y,T,R)},{...i,width:h.width,height:h.height,viewKey:h.key,visibilityOnly:!0,isPageReady:void 0,maxPagesPerFrame:i.maxPagesPerFrame??4}),c!=null&&c.settled)this.publicationRetries.delete(p.id),this.scratch.releaseScratch(!0),this.activeId=null;else if((c==null?void 0:c.retryAfterMs)!==void 0){const y=(((f=this.publicationRetries.get(p.id))==null?void 0:f.attempts)??0)+1;s=Math.max(250,c.retryAfterMs);const g=y>=3;g&&(s=Math.max(1e3,s)),this.publicationRetries.set(p.id,{contentKey:p.contentKey,attempts:g?0:y,retryAt:n+s}),g&&(this.scratch.releaseScratch(),this.activeId=null,this.captures.some(({page:T,ready:R})=>{var O;return R&&T.id!==p.id&&!this.presentation.has(T,i.samples)&&(((O=this.publicationRetries.get(T.id))==null?void 0:O.retryAt)??0)<=n})&&(s=void 0))}if(!c)return null}!this.activeId&&!this.captures.some(({page:p,ready:h})=>h&&!this.presentation.has(p,i.samples))&&this.scratch.releaseScratch();const l=this.pageProgress;this.reportProgress();const u=l.reduce((p,h)=>p+(h.published?i.samples:Math.min(h.samples,i.samples-1)),0),d=l.length*i.samples;return{progress:d>0?u/d:1,settled:d===u,needsRepaint:l.some(p=>p.ready&&!p.published)&&s===void 0,...s===void 0?{}:{retryAfterMs:s}}}renderHard(e,t,i){var D;if(this.disposed||!i.active)return{published:0,needsRepaint:!1};if(this.updateCaptures(e,t,{...i,samples:1},i.isPageReady===void 0),!t.supportsOpaqueAccumulation||!this.presentation.supportsCapture||!this.renderer.extensions.has("EXT_color_buffer_float"))return{published:0,needsRepaint:!1};const n=new Map(this.captures.map(({page:C})=>[C.id,this.presentation.getCapturedSize(C.id)])),s=this.captures.reduce((C,{page:E,plan:N})=>{const F=n.get(E.id);return C+Math.max(N.width*N.height,F?F.width*F.height:0)*8},0)>Qn,a=({page:C,plan:E})=>{const N=n.get(C.id);return N?(N.width*N.height-E.width*E.height)*8:0},o=this.captures.filter(({page:C,plan:E,ready:N})=>{if(!N)return!1;const F=n.get(C.id);return this.presentation.hasAtLeast(C,1)&&(!s||!F||F.width*F.height<=E.width*E.height)?!1:!(F&&F.samples>1&&!s&&(F.width!==E.width||F.height!==E.height)&&this.presentation.canReplay(C))});s&&o.sort((C,E)=>a(E)-a(C));const c=o.find(({page:C})=>!this.yieldForRestore(C,1));if(!c)return{published:0,needsRepaint:o.length>0};const{page:l,plan:u}=c;if(s&&this.presentation.hasAtLeast(l,1)&&a(c)>0){const C=n.get(l.id),E=Math.max(u.width,Math.ceil(C.width/2))*Math.max(u.height,Math.ceil(C.height/2))*8;if(this.memoryBytes+E>pi)return{published:0,needsRepaint:!1,retryAfterMs:1e3};try{const N=this.presentation.downsample(l,u.width,u.height);return{published:N?1:0,needsRepaint:N,...N?{}:{retryAfterMs:1e3}}}catch{return{published:0,needsRepaint:!1,retryAfterMs:1e3}}}if(this.memoryBytes+u.width*u.height*16>pi)return{published:0,needsRepaint:!1,retryAfterMs:1e3};const d=this.renderer,f=d.getRenderTarget(),p=d.getActiveCubeFace(),h=d.getActiveMipmapLevel(),v=d.getViewport(new te),y=d.getScissor(new te),g=d.getScissorTest(),T=d.autoClear,R=d.getClearColor(new ke),O=d.getClearAlpha(),b=new je(u.width,u.height,{type:wt,format:Qt,minFilter:Ce,magFilter:Ce,samples:0,depthTexture:new ir(u.width,u.height,Bt)});try{d.initRenderTarget(b),d.autoClear=!1,d.setRenderTarget(b),d.setViewport(new te(0,0,u.width,u.height)),d.setScissorTest(!1),d.setClearColor(0,0),d.clear(!0,!0,!1);const E=t.renderPageSample(u.camera,l.id,0,1,l.screenBounds)&&this.presentation.publish(b,b,u.camera,l,1);return{published:E?1:0,needsRepaint:E&&o.length>1,...E?{}:{retryAfterMs:1e3}}}catch(C){return console.warn("[shadow-simulation] retaining completed corridor after hard-stage capture failure",C),{published:0,needsRepaint:!1,retryAfterMs:1e3}}finally{d.setRenderTarget(f,p,h),d.setViewport(v),d.setScissor(y),d.setScissorTest(g),d.setClearColor(R,O),d.autoClear=T,(D=b.depthTexture)==null||D.dispose(),b.dispose()}}pausePending(){this.watchdog.pause()}cancelPending(){this.watchdog.pause(),this.activeId!==null&&this.scratch.releaseScratch(),this.activeId=null,this.publicationRetries.clear(),this.restoreOpportunities.clear()}dispose(){this.disposed||(this.disposed=!0,this.watchdog.pause(),this.scratch.dispose(),this.presentation.dispose(),this.captures=[],this.plans.clear(),this.allocations=new Map,this.publicationRetries.clear(),this.restoreOpportunities.clear())}}const jf=750,Yf=5e3,io=new Set,qf=r=>{const e=vl({assetUrl:r,production:!0});let t=null,i=!1,n=!1,s=0,a=null;const o=()=>{if(t&&(t.onmessage=null,t.onerror=null,t.onmessageerror=null,t.terminate(),t=null),a){const d=a;a=null,clearTimeout(d.timer),d.finish(null)}},c=()=>{n=!0,o()},l=(d,f=[])=>{if(!e||i||n||a||typeof Worker>"u")return Promise.resolve(null);try{return t||(t=new Worker(new URL("https://cismet.github.io/carma-pr-deployments/822/geoportal/assets/shadow-corridor-cache.worker-BGnqjqO2.js",import.meta.url),{type:"module"}),t.onerror=c,t.onmessageerror=c,t.onmessage=p=>{var v;if(!a||((v=p.data)==null?void 0:v.id)!==a.id)return;const h=a;a=null,clearTimeout(h.timer),h.finish(p.data)}),new Promise(p=>{const h=setTimeout(c,d.operation===ui.read?jf:Yf);a={id:d.id,timer:h,finish:p};try{t.postMessage(d,f)}catch{c()}})}catch{return c(),Promise.resolve(null)}},u={cancelPending:o,get enabled(){return!!(e&&!i&&!n&&typeof Worker<"u")},get busy(){return a!==null},async read(d){const f=Ge(d);if(!f)return null;const p=await l({id:++s,producerAssetUrl:e??"",identity:d,operation:ui.read}),h=p==null?void 0:p.record;return!i&&(h==null?void 0:h.schema)===Ri.schema&&Ge(h.identity)===f&&Za(h)?h:null},async write(d,f,p){if(!Ge(d)||!Za(f))return!1;const h=[f.visibility,f.depth];if(h.some(y=>!(y.buffer instanceof ArrayBuffer)||y.byteOffset!==0||y.byteLength!==y.buffer.byteLength))return!1;const v=await l({id:++s,producerAssetUrl:e??"",identity:d,operation:ui.write,capture:f,costs:p},[...new Set(h.map(y=>y.buffer))]);return!i&&(v==null?void 0:v.written)===!0},async writePacked(d,f,p){if(!Ge(d)||!Lf(f)||!(f.rgba.buffer instanceof ArrayBuffer)||f.rgba.byteOffset!==0||f.rgba.byteLength!==f.rgba.buffer.byteLength)return!1;const h=await l({id:++s,producerAssetUrl:e??"",identity:d,operation:ui.writePacked,capture:f,costs:p},[f.rgba.buffer]);return!i&&(h==null?void 0:h.written)===!0},dispose(){i=!0,o(),io.delete(u)}};return io.add(u),u};class Kf{constructor(e,t,i){this.scene=e,this.renderer=t,this.host=i,this.frameCache=new Kl(t),this.pages=new Af(e,t,i.maximumMapSize**2*8*2,i.maximumMapSize,i.frame),this.accumulation=new Gf(t),i.worldBasis&&i.corridorRevision&&i.dateTimeKey&&this.accumulation.presentation.setPersistence({cache:this.persistentCache,identity:(n,s)=>{var u,d,f;const a=this.pages.getPageGeometry(n.id),o=(u=i.dateTimeKey)==null?void 0:u.call(i);if(!a||!o||!n.captureKey)return null;const c=s===1?(d=i.receiverStageError)==null?void 0:d.call(i,n.receiverBounds):void 0,l=(f=i.corridorRevision)==null?void 0:f.call(i,a.casterBounds,c,n.receiverBounds);return l?{source:"shared-scene-corridor-v2",dateTime:o,corridor:n.id,resolution:JSON.stringify([a.width,a.height,n.captureKey]),geometryFingerprint:l,samples:s}:null},worldBasis:i.worldBasis,runIdleRender:i.runIdleRender,requestRepaint:i.requestRepaint})}pages;viewKey="";idleStats=null;accumulation;persistentCache=qf(import.meta.url);accumulationSettled=!1;viewport=new Ct(1,1);lastFrame=null;frameCache;presentedPageIds=new Set;casterRevisionsDirty=!0;casterRevisionCursor=0;hardRetryTimer=null;update(e,t,i,n,s=t.renderCamera){this.viewport.copy(t.viewport);const a=JSON.stringify([e.map(({id:o,bounds:c,receiverObjectId:l})=>[o,c.min,c.max,l]),s.projectionMatrix.elements,s.matrixWorldInverse.elements,t.viewport,i,n]);a!==this.viewKey&&(this.pages.setView(e,s,t.viewport,n,i,this.host.receiverBiasLimit),this.viewKey=a,this.casterRevisionsDirty=!0,this.casterRevisionCursor=0)}updatePresentation(e,t=e.renderCamera){this.viewport.copy(e.viewport),this.pages.updatePresentation(t)}invalidateContent(e){(e==null?void 0:e.length)!==0&&(this.casterRevisionsDirty=!0,this.casterRevisionCursor=0,this.frameCache.invalidate(),e?e.length>0&&this.pages.invalidateCasters(e):this.pages.clearCache())}async prewarm({cells:e,frame:t,lighting:i,targetPixels:n,samples:s,prepare:a,signal:o,yieldToInput:c=If,planningCamera:l}){if(o.aborted)return null;this.idleStats=null,this.pages.setPrewarmView(e,l??t.renderCamera,t.viewport,n,i,s);try{return this.idleStats=await Cf({pages:this.pages.prewarmPages,signal:o,prepare:a,yieldToInput:c,render:(u,d,f)=>{if(d!=null&&d.parent)throw new Error("Idle caster lease must own an unmounted group");const p=this.host.light.visible;this.host.light.visible=!1,d&&this.scene.add(d);try{let h=null;const v=()=>{h=this.pages.prewarmNext(t.renderCamera,u,{signal:f})};return this.host.runIdleRender?this.host.runIdleRender(v):v(),h??{pageId:u,rendered:0,cachedSamples:0,totalSamples:s,complete:!1,budgetLimited:!1,aborted:!0}}finally{d&&this.scene.remove(d),this.host.light.visible=p}}}),this.idleStats}finally{this.pages.clearPrewarmView()}}renderProgressive(e,t){if(this.lastFrame=t,!t.active)return this.pausePending(),null;if(this.pages.accumulationPages.length===0)return this.accumulationSettled=!1,null;const i=this.renderWithHost(e,()=>{const a=this.captureHard(e);if(this.casterRevisionsDirty&&this.host.corridorRevision)return null;const o=this.accumulation.presentation.capture(this.scene,()=>this.accumulation.render(e,this.pages,{...t,visibilityOnly:!0,maxPagesPerFrame:Math.min(t.samples,64),maxFrameCpuMilliseconds:t.maxFrameCpuMilliseconds??2,isPageReady:c=>this.isPageReady(c,!1)}));return o&&this.renderContent(e,null,t.samples),o&&{...o,settled:o.settled&&!a.needsRepaint,needsRepaint:o.needsRepaint||a.needsRepaint}});if(!i)return this.accumulationSettled=!1,null;const n="retryAfterMs"in i?i.retryAfterMs:void 0;n!==void 0&&this.hardRetryTimer===null&&(this.hardRetryTimer=globalThis.setTimeout(()=>{var a,o;this.hardRetryTimer=null,(o=(a=this.host).requestRepaint)==null||o.call(a)},Math.max(1,n)));const s=i.settled&&!this.accumulationSettled;return this.accumulationSettled=i.settled,{...i,settled:s}}render(e,t,i,n=!0){return this.pages.accumulationPages.length===0?!1:(this.renderWithHost(e,()=>{n&&this.captureHard(e),this.renderContent(e,t,i,!n)}),!0)}cancelPending(e=!1){this.accumulation.cancelPending(),e&&this.accumulation.presentation.beginSolarTransition(),this.pausePending()}pausePending(){this.accumulation.pausePending(),this.hardRetryTimer!==null&&(globalThis.clearTimeout(this.hardRetryTimer),this.hardRetryTimer=null),this.accumulationSettled=!1}isPageReady(e,t){var n,s;const i=this.pages.getPageGeometry(e);return i?!this.host.isCorridorReady||this.host.isCorridorReady(i.casterBounds,t?(s=(n=this.host).receiverStageError)==null?void 0:s.call(n,i.receiverBounds):void 0,i.receiverBounds):!1}captureHard(e){var i,n,s,a,o,c;if(this.casterRevisionsDirty&&this.host.corridorRevision){const l=this.pages.accumulationPages,u=performance.now();let d=0;for(;this.casterRevisionCursor<l.length;){if(d>=4||d>0&&performance.now()-u>=4)return(n=(i=this.host).requestRepaint)==null||n.call(i),{published:0,needsRepaint:!0};const f=l[this.casterRevisionCursor++];d+=1;const p=this.pages.getPageGeometry(f.id);if(!p)continue;const h=this.host.corridorRevision(p.casterBounds,(a=(s=this.host).receiverStageError)==null?void 0:a.call(s,p.receiverBounds),p.receiverBounds);this.pages.setCasterRevision(f.id,h)&&this.frameCache.invalidate()}this.casterRevisionsDirty=!1,this.casterRevisionCursor=0}const t=this.accumulation.presentation.capture(this.scene,()=>{var l;return this.accumulation.renderHard(e,this.pages,{...this.lastFrame,width:this.viewport.x,height:this.viewport.y,viewKey:this.viewKey,styleEpoch:((l=this.lastFrame)==null?void 0:l.styleEpoch)??0,samples:1,active:!0,isPageReady:u=>this.isPageReady(u,!0)})});return t.needsRepaint&&((c=(o=this.host).requestRepaint)==null||c.call(o)),t.retryAfterMs!==void 0&&this.hardRetryTimer===null&&(this.hardRetryTimer=globalThis.setTimeout(()=>{var l,u;this.hardRetryTimer=null,(u=(l=this.host).requestRepaint)==null||u.call(l)},t.retryAfterMs)),t}renderContent(e,t,i,n=!1){var u,d,f,p,h;const s=this.accumulation.capturePages;this.accumulation.presentation.beginFrame(s);const a=s.map(v=>{const y=this.accumulation.presentation.canPresent(v);return{page:v,replay:y,ready:y||(!this.host.corridorRevision||!this.casterRevisionsDirty)&&this.isPageReady(v.id,!0)}});let o=!1;const c=()=>{this.presentedPageIds.clear();const v=this.host.light.visible,y=t===null&&a.some(({replay:g})=>g);this.host.light.visible=!0;try{let g=new Set;t===null?g=this.accumulation.presentation.renderNative(this.scene,a.filter(T=>T.replay).map(T=>T.page),()=>this.renderer.render(this.scene,e)):this.renderer.render(this.scene,e);for(const{page:T,replay:R,ready:O}of a){if(!O)continue;if(g.has(T.id)){this.presentedPageIds.add(T.id);continue}if(t===null&&!R){this.presentedPageIds.add(T.id);continue}if(n&&!R){this.presentedPageIds.add(T.id);continue}const b=n||y&&R;this.host.light.visible=b,this.accumulation.presentation.render(this.scene,T,i,()=>b?this.pages.renderPageColor(e,T.id):this.pages.renderPageSample(e,T.id,t??0,t===null?1:i))?this.presentedPageIds.add(T.id):o=!0}}finally{this.host.light.visible=v}};if((u=this.lastFrame)!=null&&u.active&&t===null&&this.accumulation.presentation.supportsCapture){const v=JSON.stringify([this.viewKey,e.projectionMatrix.elements,e.matrixWorldInverse.elements,e.layers.mask,this.lastFrame.styleEpoch,((f=(d=this.host).visualEpoch)==null?void 0:f.call(d))??0,this.accumulation.presentation.revision,a.map(({page:y,replay:g,ready:T})=>[y.id,y.contentKey??y.revision,g,T])]);this.frameCache.render(v,this.lastFrame.width,this.lastFrame.height,c),o&&this.frameCache.invalidate()}else this.frameCache.invalidate(),c();const l=a.filter(({page:v,replay:y})=>this.presentedPageIds.has(v.id)&&(this.accumulation.presentation.hasAtLeast(v,1)||!y&&(t===null||i===1))).map(({page:v})=>v);l.length>0&&((h=(p=this.host).onPresentedPages)==null||h.call(p,l,s))}renderWithHost(e,t){const{renderer:i,host:n}=this,s=n.light.visible,a=n.sky.visible,o=n.overlay.visible,c=i.autoClear;n.light.visible=!1,i.autoClear=!1;try{a&&this.renderHostObject(n.sky,e),n.sky.visible=!1,n.overlay.visible=!1;const l=t();return l!==null&&o&&(n.overlay.visible=!0,this.renderHostObject(n.overlay,e)),l}finally{i.autoClear=c,n.light.visible=s,n.sky.visible=a,n.overlay.visible=o}}renderHostObject(e,t){const i=this.scene.children.filter(n=>n!==e&&n.visible);for(const n of i)n.visible=!1;try{this.renderer.render(this.scene,t)}finally{for(const n of i)n.visible=!0}}get pageLevels(){return this.pages.pageLevels}get stats(){return{...this.pages.stats,framePresentation:this.frameCache.stats,corridorAccumulation:{retained:this.accumulation.presentation.stats,pageSamples:this.accumulation.pageProgress,memoryBytes:this.accumulation.memoryBytes,fallbackReason:this.accumulation.fallbackReason},...this.idleStats?{idlePrewarm:this.idleStats}:{},...this.host.auditCorridors?{corridorAudit:this.host.auditCorridors(this.pages.accumulationPages.flatMap(e=>{const t=this.pages.getPageGeometry(e.id);return t?[{id:e.id,casterBounds:t.casterBounds,receiverBounds:t.receiverBounds}]:[]}))}:{}}}dispose(){this.hardRetryTimer!==null&&globalThis.clearTimeout(this.hardRetryTimer),this.hardRetryTimer=null,this.accumulation.dispose(),this.frameCache.dispose(),this.persistentCache.dispose(),this.pages.dispose()}}function Xf(){const r=new WeakSet;return e=>{let t=!1;for(const i of e)if(!(!i.providesTerrain||!i.hasRenderableContent)&&(t=!0,r.has(i)||i.hasRenderableContent()))return r.add(i),!1;return t}}const En=(r,e,t)=>JSON.stringify([r.min.toArray(),r.max.toArray(),e,t==null?void 0:t.min.toArray(),t==null?void 0:t.max.toArray()]),$f=(r,e)=>{const t=new Map(r.map(s=>[s.id,s])),i=[],n=s=>i.push(new Pe(new x(...s.minimum),new x(...s.maximum)));for(const s of e){const a=t.get(s.id);a&&s.minimum.every((c,l)=>c===a.minimum[l])&&s.maximum.every((c,l)=>c===a.maximum[l])||(a&&n(a),n(s)),t.delete(s.id)}for(const s of t.values())n(s);return i},Qf=(r,e,t)=>{const i=new Set(t.map(({id:n})=>n));return r.filter(n=>{if(n.loadReason===tr.SHADOW)return!1;const s=e.filter(({bounds:a})=>n.minimum[0]<a.max.x&&n.maximum[0]>a.min.x&&n.minimum[2]<a.max.z&&n.maximum[2]>a.min.z);return s.length>0&&s.every(({id:a})=>i.has(a))}).map(({id:n})=>n)},Zf=(r,e,t)=>{if(![r,e,t].every(Number.isFinite)||t<=0)throw new RangeError("Invalid shared-scene Mercator basis");return new Q().set(t,0,0,r,0,0,t,e,0,t,0,0,0,0,0,1)},no=(r,e,t)=>yl(e.reduce((i,n)=>{if(n.loadReason===tr.SHADOW)return i;const[s,,a]=n.minimum,[o,,c]=n.maximum;return s<r.max.x&&o>r.min.x&&a<r.max.z&&c>r.min.z&&Number.isFinite(n.errorPixels)?Math.max(i,n.errorPixels):i},t),t),Jf=({stageErrorPixels:r,targetErrorPixels:e,groundTexelTargetMeters:t,finalBiasMeters:i,maximumCoarseBiasMeters:n,metersPerPixel:s=0})=>{const a=Math.max(i,Math.min(n,Math.max(0,s)*.1)),o=Math.max(1,Math.min(n/i,r/Math.max(e,.25)));return Math.max(a,Math.min(n,i*o,Math.max(i,t*2)))},ep=({id:r,casterBounds:e,sunElevationDegrees:t,regions:i,volumes:n})=>{const s=new Set(i.flatMap(u=>u.selectedTileIds)),a=new Map(n.map(u=>[u.id,u])),o=[],c=[];let l=0;for(const u of s){const d=a.get(u);if(!d){o.push(u);continue}d.loadReason===tr.SHADOW&&(l+=1),e.intersectsBox(new Pe(new x(...d.minimum),new x(...d.maximum)))||c.push(u)}return{id:r,ready:i.length>0&&i.every(u=>u.ready),selectedTiles:s.size,offscreenTiles:l,reviewCount:t>=10&&s.size>10,nearHorizon:t<10,exactPrismTested:i.length>0&&i.every(u=>u.receiverPrismTested),visitedNodes:i.reduce((u,d)=>u+d.visitedNodes,0),broadPhaseNodes:i.reduce((u,d)=>u+d.broadPhaseNodes,0),rejectedPrismNodes:i.reduce((u,d)=>u+d.rejectedPrismNodes,0),missingPublishedVolumes:o,outsideEnvelope:c,selectedTileIds:[...s].sort()}},tp=1024,rp=2048,ip=4096,np=1e6,sp=2e6,so=(r,e=wl())=>{const t=Math.max(256,Math.floor(r)),i=Sl(e);return i===ea.PHONE?{maxShadowMapSize:Math.min(t,tp),maxAccumulationPixels:np}:i===ea.TABLET?{maxShadowMapSize:Math.min(t,rp),maxAccumulationPixels:sp}:{maxShadowMapSize:Math.min(t,ip),maxAccumulationPixels:Number.POSITIVE_INFINITY}},ap=(r,e)=>{if(r===Number.POSITIVE_INFINITY)return r;const t=ss(e.format),i=e.msaaSamples??Io.msaaSamples,n=2*(t.bytesPerPixel+4)*(1+Math.max(0,i))+3*t.accumulationBytesPerPixel;return Math.min(r,Math.floor(256*1024*1024/n))},ao=(r,e=as,t=2560*1440,i=1)=>Math.floor(Math.max(256**2,Math.min(r**2,Lt[e].depthSize**2*(Number.isFinite(t)&&t>0?t/(2560*1440):1)*i**2))),oo=new WeakMap,op=r=>{const e=oo.get(r);if(e)return e;const t=r.getContext(),i=t.getInternalformatParameter(t.RENDERBUFFER,t.DEPTH_COMPONENT24,t.SAMPLES),n=a=>[0,...Array.from(t.getInternalformatParameter(t.RENDERBUFFER,a,t.SAMPLES)).filter(o=>i.includes(o))],s={maxTextureSize:r.capabilities.maxTextureSize,maxRenderbufferSize:t.getParameter(t.MAX_RENDERBUFFER_SIZE),hdrSamples:n(t.RGBA16F),sdrSamples:n(t.RGBA8)};return oo.set(r,s),s},cp=(r,e)=>{if(r.shadowBufferFormat===$t.HDR_32)return 0;const t=r.shadowMsaaSamples===_l?1/0:r.shadowMsaaSamples;return Math.max(0,...e.filter(i=>Number.isFinite(i)&&i<=t))},xt=new WeakMap,Oc=r=>{let e=xt.get(r);return e||(e={snapshot:null,listeners:new Set,demandListeners:new Set},xt.set(r,e)),e},ug=r=>{var e;return((e=xt.get(r))==null?void 0:e.snapshot)??null},dg=(r,e)=>{const t=Oc(r),i=t.listeners.size===0;if(t.listeners.add(e),i)for(const n of t.demandListeners)n(!0);return()=>{if(!(!t.listeners.delete(e)||t.listeners.size>0)){t.snapshot=null;for(const n of t.demandListeners)n(!1);t.demandListeners.size===0&&xt.delete(r)}}},lp=(r,e)=>{const t=Oc(r);return t.demandListeners.add(e),t.listeners.size>0&&e(!0),()=>{t.demandListeners.delete(e),t.listeners.size===0&&t.demandListeners.size===0&&xt.delete(r)}},Zn=r=>{var e;return(((e=xt.get(r))==null?void 0:e.listeners.size)??0)>0},hg=(r,e)=>{const t=xt.get(r);if(t!=null&&t.listeners.size){t.snapshot=e;for(const i of t.listeners)i()}},An=r=>{const e=xt.get(r);if(e){e.snapshot=null;for(const t of e.listeners)t();e.listeners.size===0&&e.demandListeners.size===0&&xt.delete(r)}};let Jn;const mg=r=>{Jn=r},up=(...r)=>{const[e]=r;let t,i=!1,n=!1,s=null;const a=()=>{if(!(n||!Zn(e)))return!t&&Jn&&(t=Jn(...r)),!t&&!i&&(i=!0,Hr(()=>import("./shadow-projection-debug-publisher-BVlfruS1.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10])).then(o=>{n||!Zn(e)||(t=o.createShadowProjectionDebugPublisher(...r),t.setSnapshot(s),t.publish())}).catch(o=>{n||console.error("Unable to load shadow diagnostics",o)}).finally(()=>{i=!1})),t};return{publish:()=>{var o;return(o=a())==null?void 0:o.publish()},setSnapshot(o){var c;s=o,(c=a())==null||c.setSnapshot(o)},markStale:()=>{var o;return(o=a())==null?void 0:o.markStale()},reset(){s=null,t==null||t.reset()},dispose(){n=!0,s=null,t==null||t.dispose()}}},co=.01,dp=500,Cn=1500,In=(r=as)=>({lastFrameMs:null,sampleDurationMs:0,sampleCount:0,recoveryDurationMs:0,updateIntervalMs:Lt[r].targetFps?1e3/Lt[r].targetFps:0,targetFrameMs:Lt[r].targetFps?1e3/Lt[r].targetFps:0,depthScale:1,trial:null,adaptationBlocked:!1}),Dn=(r,e,t,{enabled:i=!0,allowCadenceReduction:n=!0}={})=>{var v,y;if(r.targetFrameMs===0)return r;if(!i)return r.lastFrameMs===null&&r.updateIntervalMs===r.targetFrameMs&&r.depthScale===1&&!r.adaptationBlocked?r:{...r,lastFrameMs:null,sampleDurationMs:0,sampleCount:0,recoveryDurationMs:0,updateIntervalMs:r.targetFrameMs,depthScale:1,trial:null,adaptationBlocked:!1};if(!t||!Number.isFinite(e))return r.lastFrameMs===null?r:{...r,lastFrameMs:null,sampleDurationMs:0,sampleCount:0,recoveryDurationMs:0,depthScale:1,trial:null,adaptationBlocked:!1};const s=r.lastFrameMs===null?0:e-r.lastFrameMs;if(s<=0)return{...r,lastFrameMs:e};const a=r.sampleDurationMs+s,o=r.sampleCount+1;if(a<dp)return{...r,lastFrameMs:e,sampleDurationMs:a,sampleCount:o};const c=a/o,l=r.targetFrameMs;if(r.trial&&c>=r.trial.baselineFrameMs*.95||r.adaptationBlocked)return{...r,lastFrameMs:e,sampleDurationMs:0,sampleCount:0,trial:null,adaptationBlocked:!0,updateIntervalMs:((v=r.trial)==null?void 0:v.updateIntervalMs)??r.updateIntervalMs,depthScale:((y=r.trial)==null?void 0:y.depthScale)??r.depthScale};const f=c<l/1.2?r.recoveryDurationMs+a:0,p=n?c>l+co?Math.min(l*4,r.updateIntervalMs+l):f>=Cn?Math.max(l,r.updateIntervalMs-l):r.updateIntervalMs:l,h=c>l+co&&(!n||r.updateIntervalMs>=l*4)?Math.max(.5,r.depthScale-.25):f>=Cn?Math.min(1,r.depthScale+.25):r.depthScale;return{...r,lastFrameMs:e,sampleDurationMs:0,sampleCount:0,recoveryDurationMs:f>=Cn?0:f,updateIntervalMs:p,depthScale:h,trial:p>r.updateIntervalMs||h<r.depthScale?{baselineFrameMs:c,updateIntervalMs:r.updateIntervalMs,depthScale:r.depthScale}:null,adaptationBlocked:!1}},lo=4e3,Nc=(r,e,t)=>{r.updateMatrixWorld(!0),t==null||t.updateMatrixWorld(!0);const i=t?new Ur().setFromProjectionMatrix(new Q().multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),t.coordinateSystem,t.reversedDepth):null;let n=e,s=e;const a=new Pe;return r.traverseVisible(o=>{var l,u;const c=o;c.userData[gi.OVERLAY]||!c.isMesh&&!c.isInstancedMesh||!((u=(l=c.geometry)==null?void 0:l.getAttribute("position"))!=null&&u.count)||(c.geometry.boundingBox||c.geometry.computeBoundingBox(),c.geometry.boundingBox&&(a.copy(c.geometry.boundingBox).applyMatrix4(c.matrixWorld),!(i&&!i.intersectsBox(a))&&(n=Math.min(n,a.min.y),s=Math.max(s,a.max.y))))}),[n,s]},hp=(r,e,t,i)=>{var o;const n=e.filter(c=>c.providesTerrain).flatMap(c=>{var u;const l=(u=c.getViewElevationRange)==null?void 0:u.call(c,t);return l?[l]:[]});if(n.length>0)return[Math.min(...n.map(c=>c[0])),Math.max(...n.map(c=>c[1]))];let[s,a]=Nc(r,i,t);for(const c of e){const l=(o=c.getViewElevationRange)==null?void 0:o.call(c,t);l&&(s=Math.min(s,l[0]),a=Math.max(a,l[1]))}return[s,a]},mp=[[-1,-1],[-1,1],[1,-1],[1,1]],fp=[[0,1],[1,3],[3,2],[2,0],[4,5],[5,7],[7,6],[6,4],[0,4],[1,5],[2,6],[3,7]],pp=(r,e,t,i)=>{r.updateMatrixWorld(!0);const n=Math.min(e,t),s=Math.max(e,t),a=[-1,1].flatMap(c=>mp.map(([l,u])=>new x(l,u,c).unproject(r))),o=a.filter(c=>c.y>=n&&c.y<=s).map(c=>c.clone());for(const[c,l]of fp){const u=a[c],d=a[l],f=d.y-u.y;if(!(Math.abs(f)<=Number.EPSILON))for(const p of[n,s]){const h=(p-u.y)/f;h<0||h>1||o.push(u.clone().lerp(d,h))}}for(const c of o){const l=c.clone().sub(i),u=Math.hypot(l.x,l.z);if(u<=lo)continue;const d=lo/u;l.x*=d,l.z*=d,c.copy(i).add(l)}return o},gp=`
float carmaReceiverPlaneTap(sampler2DShadow map, vec2 uv, vec3 receiver, vec2 gradient) {
  // Clamp the reference plane AND the depth fetch to the same texel centre.
  // CLAMP_TO_EDGE alone only clamps the fetch, creating false self-shadows for
  // sloped receivers whose bilinear footprint crosses the texture boundary.
  vec2 halfTexel = vec2(0.5) / vec2(textureSize(map, 0));
  uv = clamp(uv, halfTexel, vec2(1.0) - halfTexel);
  return texture(map, vec3(uv, receiver.z + dot(gradient, uv - receiver.xy)));
}
float getShadow(sampler2DShadow map, vec2 size, float intensity, float bias, float radius, vec4 coord) {
  if (!carmaReceiverPlaneShadow) return carmaOriginalGetShadow(map, size, intensity, bias, radius, coord);
  vec3 receiver = coord.xyz / coord.w;
  vec3 dx = dFdx(receiver);
  vec3 dy = dFdy(receiver);
  float determinant = dx.x * dy.y - dx.y * dy.x;
  float scale = max(length(dx.xy) * length(dy.xy), 1e-20);
  vec2 gradient = abs(determinant) > scale * 1e-5
    ? vec2(dy.y * dx.z - dx.y * dy.z, dx.x * dy.z - dy.x * dx.z) / determinant
    : vec2(0.0);
  receiver.z += bias;
  if (any(lessThan(receiver.xy, vec2(0.0))) || any(greaterThan(receiver.xy, vec2(1.0))) || receiver.z > 1.0) return 1.0;
  vec2 pixel = receiver.xy * size - 0.5;
  vec2 fraction = fract(pixel);
  vec2 uv = (floor(pixel) + 0.5) / size;
  vec2 stepUV = 1.0 / size;
  float a = carmaReceiverPlaneTap(map, uv, receiver, gradient);
  float b = carmaReceiverPlaneTap(map, uv + vec2(stepUV.x, 0.0), receiver, gradient);
  float c = carmaReceiverPlaneTap(map, uv + vec2(0.0, stepUV.y), receiver, gradient);
  float d = carmaReceiverPlaneTap(map, uv + stepUV, receiver, gradient);
  return mix(1.0, mix(mix(a, b, fraction.x), mix(c, d, fraction.x), fraction.y), intensity);
}
`,uo="float getShadow( sampler2DShadow shadowMap,",Pn="#elif defined( SHADOWMAP_TYPE_VSM )",vp=()=>{const r=Ln.shadowmap_pars_fragment;if(!r.includes(uo)||!r.includes(Pn))throw new Error("Three PCF shader changed; validate receiver-plane shadow integration");return`uniform bool carmaReceiverPlaneShadow;
${r.replace(uo,"float carmaOriginalGetShadow( sampler2DShadow shadowMap,").replace(Pn,`${gp}
${Pn}`)}`},ho=new WeakMap,mo=(r,e)=>{const t=ho.get(r);if(t)return e!==void 0&&t.value!==e&&(t.value=e,r.needsUpdate=!0),t;const i={value:e??!1},n=r.onBeforeCompile,s=r.customProgramCacheKey(),a=vp();return r.onBeforeCompile=function(o,c){n.call(this,o,c),o.uniforms.carmaReceiverPlaneShadow=i,o.fragmentShader=o.fragmentShader.replace("#include <shadowmap_pars_fragment>",a)},r.customProgramCacheKey=()=>`${s}|carma-receiver-plane-pcf-v3|${i.value?"mesh":"stock"}`,r.needsUpdate=!0,ho.set(r,i),i},Lc=(r,e=!1)=>{if(r.userData[gi.OVERLAY])return;r.castShadow=r.userData.disableShadowCasting!==!0;const t=Array.isArray(r.material)?r.material:[r.material];r.receiveShadow=t.some(i=>i.visible&&i.colorWrite);for(const i of t)r.userData.isShadowTerrainSurface?mo(i,!0):(i.shadowSide??(i.shadowSide=Ao),mo(i,e))},Kt=(r,e=!1)=>{r.traverseVisible(t=>{const i=t;!i.isMesh&&!i.isInstancedMesh||Lc(i,e)})},yp=r=>r.visible&&r.opacity>0,Sp=(r,e)=>{let t=r;for(;t&&t!==e;){if(!t.visible)return!1;t=t.parent}return(Array.isArray(r.material)?r.material:[r.material]).some(yp)},fo=r=>{r.traverse(e=>{const t=e;if(!t.isMesh&&!t.isInstancedMesh)return;const i=Array.isArray(t.material)?t.material:[t.material];for(const n of i)n.dispose()})},wp=(r,e)=>{const t=e.uniformColor!==null&&Ye(e.uniformColorMix??1,0,1)>=1;r.traverse(i=>{const n=i;if(!n.userData.isBuilding)return;const s=Array.isArray(n.material)?n.material:[n.material];for(const a of s){e.fullOpacity&&(a.opacity=1,a.transparent=!1,a.depthWrite=!0);const o=a;t&&e.uniformColor&&o.color&&(o.color.set(e.uniformColor),o.vertexColors=!1),a.needsUpdate=!0}})},_p=(r,e,t)=>{var d;const i=(d=e._originMerc)==null?void 0:d.toLngLat();if(!i)return null;const n=new os;n.name=`shadow-simulation-copy-${e.id}`;const s=new Map;let a=t,o=!1;const c=()=>{for(const[f,p]of s)f.visible=p;s.clear()},l=()=>{if(o)return;c(),fo(n),n.clear(),e.scene.updateMatrixWorld(!0);const f=[];e.scene.traverse(p=>{var v,y;const h=p;!h.isMesh&&!h.isInstancedMesh||(y=(v=h.geometry)==null?void 0:v.getAttribute("position"))!=null&&y.count&&Sp(h,e.scene)&&f.push(h)});for(const p of f){const h=p.clone(!1);h.name=`${p.name||"mesh"}-shadow-simulation-copy`,h.visible=!0,h.matrixAutoUpdate=!1,h.matrix.copy(p.matrixWorld),h.material=Array.isArray(p.material)?p.material.map(v=>v.clone()):p.material.clone(),Lc(h),s.set(p,p.visible),p.visible=!1,n.add(h)}n.visible=n.children.length>0,wp(n,a)},u={id:`shadow-simulation-generic-${e.id}`,originLngLat:[i.lng,i.lat],root:n,update:()=>{},dispose:()=>{o||(o=!0,c(),fo(n),n.clear())}};return l(),n.visible?(r.addRuntime(u),{runtime:u,sync:l,updateBuildingAppearance(f){a=f,l()}}):(u.dispose(),null)},Fc=2500,Bc=.5,xp="shadow-simulation-sky-light",Tp=r=>{const e=new Pe().setFromObject(r.scene);e.isEmpty()?r.center.set(0,0,0):e.getCenter(r.center)},Mp=(r,e,t,i)=>{const n=new Cc(e),a=n.lights[0].target,o=new os;o.visible=!1,o.userData[gi.OVERLAY]=!0;const c=new Eo(void 0,0);c.name=xp;const l=hf(i);l.mesh.userData[gi.OVERLAY]=!0;const u=new Map;r.traverse(f=>{const p=f;p.isAmbientLight&&u.set(p,p.intensity)});const d={scene:r,frame:e,controller:n,skyLight:c,atmosphericSky:l,ambientLightIntensities:u,lightTarget:a,sunVector:null,sunVectorRoot:o,center:new x,shadowCameraOffsetMeters:Math.max(Fc,t*1.5),shadowAreaMeters:t,sunVectorLengthMeters:t*Bc,sunVectorVisible:!1,shadowQuality:as,shadowIntensity:1,directionToSun:new x(0,1,0),sunColor:new ke(16773848),sunIntensity:jr,receiverWorldPoints:[],minimumElevationMeters:0,maximumElevationMeters:0,dirty:!0};return Kt(r),Tp(d),r.add(c),r.add(l.mesh),d},bp=(r,e)=>{r.scene.traverse(i=>{const n=i;n.isAmbientLight&&!r.ambientLightIntensities.has(n)&&r.ambientLightIntensities.set(n,n.intensity)});const t=e.skyIrradianceCoefficients;if((t==null?void 0:t.length)===r.skyLight.sh.coefficients.length){t.forEach((i,n)=>{r.skyLight.sh.coefficients[n].copy(i)}),r.skyLight.intensity=jr;for(const i of r.ambientLightIntensities.keys())i.intensity=0;return}r.skyLight.sh.zero(),r.skyLight.intensity=0;for(const[i,n]of r.ambientLightIntensities)i.intensity=n},po=(r,e,t=16773848,i,n=!0)=>{var a;const s=e.clone().normalize();r.directionToSun.copy(s),r.sunColor.set(t);for(const o of r.controller.lights)o.color.copy(r.sunColor);(a=r.sunVector)==null||a.update(r.center,s,r.sunVectorLengthMeters),r.sunVectorRoot.visible=r.sunVectorVisible&&!!r.sunVector,r.sunIntensity=i??jr;for(const o of r.controller.lights)o.intensity=r.sunIntensity;r.lightTarget.updateMatrixWorld(!0);for(const o of r.controller.lights)o.updateMatrixWorld(!0);n&&(r.controller.invalidate(),r.dirty=!0)},Rp=r=>{var e;for(const[t,i]of r.ambientLightIntensities)t.intensity=i;r.scene.remove(r.skyLight),r.scene.remove(r.atmosphericSky.mesh),r.sunVectorRoot.removeFromParent(),(e=r.sunVector)==null||e.dispose(),r.atmosphericSky.dispose(),r.controller.dispose()},Ep={[He.STANDARD]:0,[He.HIGH]:1,[He.MAX]:1,[He.ULTRA]:1,[He.EXTREME]:1},Ap=128,Cp={[He.STANDARD]:0,[He.HIGH]:0,[He.MAX]:1,[He.ULTRA]:2,[He.EXTREME]:3},Ip=(r,e,t,i)=>{var u,d;const n=r==null?void 0:r.tileManager;if(!r||!n||!Number.isFinite(n.deltaZoom)||!Number.isFinite(n.tileSize)||!n.tileManager)return()=>{};const s={deltaZoom:n.deltaZoom,terrainTileSize:n.tileSize,sourceTileSize:n.tileManager.tileSize,meshSize:r.meshSize,calculateTileZoom:(u=n.tileManager._source)==null?void 0:u.calculateTileZoom},o=1-Ep[t],c=e*2**o;n.deltaZoom=o,n.tileSize=c,n.tileManager.tileSize=c,r.meshSize=Ap;const l=Cp[t];if(l>0&&n.tileManager._source){s.calculateTileZoom||i==null||i();const f=n.tileManager._source.calculateTileZoom;f&&(n.tileManager._source.calculateTileZoom=(...p)=>f(...p)+l)}return r._meshCache={},(d=n.freeRtt)==null||d.call(n),()=>{var f;n.deltaZoom=s.deltaZoom,n.tileSize=s.terrainTileSize,n.tileManager.tileSize=s.sourceTileSize,r.meshSize=s.meshSize,n.tileManager._source&&(n.tileManager._source.calculateTileZoom=s.calculateTileZoom),r._meshCache={},(f=n.freeRtt)==null||f.call(n)}},br="carma-shadow-map-style-base",Dr={OPAQUE:"opaque",LABELS:"labels"},Dp=(r,e=Do,t=()=>!0,i=()=>Dr.OPAQUE,n=He.MAX)=>{const s=e.id,a=r;if(typeof a.getTerrain!="function"||typeof a.getSource!="function"||typeof a.setTerrain!="function")return Object.assign(()=>{},{refresh:()=>{}});const o=a.getTerrain(),c=new Map,l=new Map;let u=!1,d=!1,f=!1,p=null,h=!1,v,y=null,g=()=>{},T=null;const R=()=>{p&&(h?delete p.getMeshFrameDelta:p.getMeshFrameDelta=v,p=null,v=void 0,h=!1)},O=()=>{const A=a.terrain;!A||A===p||(R(),typeof A.getMeshFrameDelta=="function"&&(h=!Object.prototype.hasOwnProperty.call(A,"getMeshFrameDelta"),v=A.getMeshFrameDelta,A.getMeshFrameDelta=()=>0,p=A))},b=()=>{var V;const A=a.terrain;!A||A===y||(g(),y=A,g=Ip(A,e.tileSize,n,()=>{var re;(re=r.setSourceTileLodParams)==null||re.call(r,9.314,3,e.id)}),(V=r.triggerRepaint)==null||V.call(r))},D=A=>`${A.type}:${String(A.source)}:${String(A["source-layer"])}`,C=()=>{var re;const V=r.getStyle().layers??[];for(const q of V){if(!Tl(q))continue;const le=D(q);let ue=l.get(q.id);const xe=r.getLayoutProperty(q.id,"visibility");!ue||ue.signature!==le?(ue={signature:le,value:xe},l.set(q.id,ue)):xe!=="none"&&(ue.value=xe),xe!=="none"&&r.setLayoutProperty(q.id,"visibility","none")}if(t()){r.getLayer(br)||(r.addLayer({id:br,type:"background",paint:{"background-color":nn.baseColor,"background-opacity":nn.opacity}},(re=V[0])==null?void 0:re.id),f=!0);for(const q of V){if(q.id===br||q.type==="custom")continue;const le=nn.opaqueDrapeProperties.get(q.type);if(!le)continue;const ue=D(q);let xe=c.get(q.id);const P=r.getPaintProperty(q.id,le);!xe||xe.signature!==ue?(xe={signature:ue,property:le,value:P},c.set(q.id,xe)):P!==1&&(xe.value=P),P!==1&&r.setPaintProperty(q.id,le,1)}}},E=A=>{var V;for(const[re,q]of A)try{const le=(V=r.getStyle().layers)==null?void 0:V.find(({id:ue})=>ue===re);le&&D(le)===q.signature&&r.getLayoutProperty(re,"visibility")==="none"&&r.setLayoutProperty(re,"visibility",q.value===void 0?null:q.value)}catch{}A.clear()},N=()=>{var A;for(const[V,re]of c)try{const q=(A=r.getStyle().layers)==null?void 0:A.find(({id:le})=>le===V);q&&D(q)===re.signature&&r.getPaintProperty(V,re.property)===1&&r.setPaintProperty(V,re.property,re.value===void 0?null:re.value)}catch{}if(c.clear(),f){f=!1;try{r.getLayer(br)&&r.removeLayer(br)}catch{}}},F=()=>{if(!(u||d)){d=!0;try{if(ei(r)){R(),g(),g=()=>{},y=null,N(),E(l),a.getTerrain()&&a.setTerrain(null),T=null;return}if(!a.getSource(s)&&r.isStyleLoaded()&&r.addSource(s,{type:"raster-dem",tiles:[e.url],tileSize:e.tileSize,minzoom:e.minzoom,maxzoom:e.maxzoom,encoding:e.encoding,bounds:[...e.bounds]}),i()===Dr.LABELS?(N(),E(l)):C(),a.getSource(s)){const A=a.getTerrain();((A==null?void 0:A.source)!==s||(A.exaggeration??1)!==1)&&a.setTerrain({source:s,exaggeration:1}),b(),O()}T=null}catch(A){const V=A instanceof Error?A.message:String(A);V!==T&&(T=V,console.error("[shadow-simulation] MapLibre terrain setup failed",A))}finally{d=!1}}},Y=()=>{d||F()};r.on(_e.STYLE_DATA,F),r.on(_e.TERRAIN,Y);let G=ei(r);const B=xl(r,()=>{const A=ei(r);A!==G&&(G=A,F())});return F(),Object.assign(()=>{if(!u){u=!0,B(),r.off(_e.STYLE_DATA,F),r.off(_e.TERRAIN,Y),R(),g(),y=null,N(),E(l);try{!ei(r)&&o&&a.getSource(o.source)!==void 0?a.setTerrain(o):a.getTerrain()&&a.setTerrain(null)}catch{}}},{refresh:()=>{!u&&!d&&F()}})},go=1e3,Pp=(r,e,t,i)=>{let n=Number.NEGATIVE_INFINITY,s=null,a=null;const o=u=>{s=null,n=performance.now();const d=`#${u.color.getHexString()}`;if(t()||e(d),!r.isStyleLoaded())return;const f=[1.5,u.azimuthDegrees,90-u.elevationDegrees],p=Ye(u.relativeIntensity,0,1),h=r.getLight(),v=h.position;h.anchor==="map"&&Array.isArray(v)&&v.length===f.length&&v.every((y,g)=>y===f[g])&&h.color===d&&h.intensity===p||r.setLight({anchor:"map",position:f,color:d,intensity:p})},c=()=>{a!==null&&(globalThis.clearTimeout(a),a=null);const u=s;u&&o(u)};return{apply:u=>{if(s=u,!t()&&!i()){c();return}const d=performance.now()-n;if(d>=go){c();return}a===null&&(a=globalThis.setTimeout(()=>{a=null;const f=s;f&&o(f)},go-d))},flush(u){u&&(s=u),c()},dispose(){a!==null&&(globalThis.clearTimeout(a),a=null)}}},On=new Q,Op=(r,e)=>{const t=()=>{var o,c;return((c=(o=e())==null?void 0:o.localFrame)==null?void 0:c.currentToReference)??(r==null?void 0:r.currentToReference)??On},i=new ta,n=new Ei;return{frameFromScene:t,getFrameCamera:o=>{const c=o.renderCamera,{localFrame:l}=o;if(!l||l.currentToReference.equals(On))return c;const u=c instanceof ta?i.copy(c,!1):n.copy(c,!1);return u.matrixAutoUpdate=!1,u.matrixWorldAutoUpdate=!1,u.matrixWorld.multiplyMatrices(l.currentToReference,c.matrixWorld),u.matrixWorld.decompose(u.position,u.quaternion,u.scale),u.matrix.copy(u.matrixWorld),u.matrixWorldInverse.multiplyMatrices(c.matrixWorldInverse,l.referenceToCurrent),u},toFrameVolumes:(o,c)=>{if(o!=null&&o.mountsOnLocalFrame||c.length===0)return c;const l=t();if(l.equals(On))return c;const u=new Pe;return c.map(d=>(u.min.set(...d.minimum),u.max.set(...d.maximum),u.applyMatrix4(l),{...d,minimum:[u.min.x,u.min.y,u.min.z],maximum:[u.max.x,u.max.y,u.max.z]}))}}},Np=900,di=.01,Lp=.25,Fp=1e3,Bp=10,Up="shadow-simulation-raster-dem",Hp=200,hi=100,kp=1e3,zp=(r,e={})=>{var Ws,Gs,js,Ys,qs,Ks,Xs;const{shadowAreaMeters:t,terrain:i,mapLibreTerrain:n,terrainQuality:s=He.MAX}=e,a=Ml();let o=i;const c=t??Np,l=r.getLight();let u=!0;const d=()=>{const m=be(r).filter(S=>S.providesTerrain===!0);return m.length>0&&m.every(S=>S.mapStyleProjectionBlend===Al.OVERLAY)?Dr.LABELS:Dr.OPAQUE},f=Dp(r,n??Do,()=>u,d,a?He.STANDARD:s),p=()=>{B.setMeshLabelStyle(d()===Dr.LABELS)};let h=null,v={fullOpacity:!0,uniformColor:null,uniformColorMix:0,textureSaturation:1,textureColorCorrection:!0},y=1,g=null;const T=()=>{var m,S;return g??((S=(m=be(r).find(_=>_.providesTerrain===!0))==null?void 0:m.getErrorTarget)==null?void 0:S.call(m))??Ol};let R=a?on:void 0;const O=new WeakMap;let b=null,D={useTransmittanceLut:!0,useIrradianceLut:!0},C=!1,E=!1,N=!1,F=null,Y=new ke(((Ws=o==null?void 0:o.material)==null?void 0:Ws.color)??Po);const G=()=>{var m,S,_,M;if(u){F==null||F(),F=null,(S=(m=B.layer).setMapStyleProjectionVisible)==null||S.call(m,!0);return}(M=(_=B.layer).setMapStyleProjectionVisible)==null||M.call(_,!1),F??(F=Cl(r))},B=bl(r,{mapStylePresentation:!0}),ne=(m,S)=>{var _,M;return{observer:{longitude:m[0],latitude:m[1],altitudeMeters:0},scenePosition:((M=(_=B.layer).projectLngLatToScene)==null?void 0:M.call(_,[m[0],m[1]],hi))??new x(0,hi,0),sceneFromLocal:S}};let A=null;const V=((js=(Gs=B.layer).getLocalFrame)==null?void 0:js.call(Gs))??null;let re=(V==null?void 0:V.revision)??0,q=V?ne(V.lngLat,V.sceneFromLocalRotation):ne([r.getCenter().lng,r.getCenter().lat]);const{frameFromScene:le,getFrameCamera:ue,toFrameVolumes:xe}=Op(V,()=>A),P=new of;let ie=()=>{},K=m=>ie(m),Fe=null,Tt=0;const rt=m=>{if(!o)return null;const S=r.getCenter(),{errorTargetPixels:_,motionErrorTargetPixels:M,shadowLevelOffset:Z,minimumLevel:U,maximumLevel:L,maxSelectionTiles:W,requestConcurrency:ee,maxCacheBytes:de,maxCachedMeshes:we,maxCachedMeshBytes:ge,meshSegments:Se,maximumMeshSegments:j,noDataHeightMeters:Me,heightRangeMeters:Yt,geometryProjection:qt,heightOffsetMeters:Ji,heightOffsetRangeMeters:Zr,material:Jr,...yt}=Il(o,a);return Dl(`${Up}-${++Tt}`,yt,m??[S.lng,S.lat],{errorTargetPixels:_??cn,motionErrorTargetPixels:M,shadowLevelOffset:Z,minimumLevel:U,maximumLevel:L,maxSelectionTiles:W,requestConcurrency:ee,maxCacheBytes:de,maxCachedMeshes:we,maxCachedMeshBytes:ge,meshSegments:Se??yt.tileSize,maximumMeshSegments:j,noDataHeightMeters:Me,heightRangeMeters:Yt,geometryProjection:qt??"ecef",heightOffsetMeters:Ji,heightOffsetRangeMeters:Zr,material:Jr,receivesMapStyleTexture:!0,onContentChanged:Ae=>K(Ae),onError:Ae=>{const Pt=Ae instanceof Error?Ae.message:String(Ae);Pt!==Fe&&(Fe=Pt,console.error("[shadow-simulation] Raster DEM terrain runtime failed",Ae))}})},ye=()=>be(r).some(m=>m.providesTerrain===!0),he=()=>be(r).every(m=>{var S,_;return!m.providesTerrain||(((S=m.hasRenderableContent)==null?void 0:S.call(m))??((_=m.isMainViewReady)==null?void 0:_.call(m))??!0)});let ht=be(r).filter(m=>m.providesTerrain),H=ye()?null:rt(),Ne=H===null;H&&B.layer.addRuntime(H);const mt=((qs=(Ys=B.layer).getLocalFrameGroup)==null?void 0:qs.call(Ys))??B.layer.getScene(),w=Mp(B.layer.getScene(),mt,c,Y),Yr=new x;let Mt=0,ze=0;const Te=Df({getRequest:()=>{var _;if(C||!o||!H||!Ne||Sr(r)||N||E||$e!==0||!it||!Gt||!A)return null;const m=(_=H.getIdlePrefetchAvailability)==null?void 0:_.call(H);if(!(m!=null&&m.ready))return null;const S=H;return{key:JSON.stringify([Tt,Mt,ze,A.renderCamera.projectionMatrix.elements,A.renderCamera.matrixWorldInverse.elements,A.viewport.x,A.viewport.y]),run:async M=>{var U;if(await S.prefetchIdleTerrain(M),M.aborted||!De()||!$||!A||!B.layer.runIdleRender||ft.size>0||pt().some(L=>L!==S&&L!==jt)||bt.some(({id:L})=>!/^\d+:[-\d]+:[-\d]+$/.test(L)))return;const Z=((U=S.getIdleShadowRegions)==null?void 0:U.call(S))??[];Z.length===0||!S.prepareIdleShadowRegion||(await $.prewarm({cells:Mu(bt),frame:A,planningCamera:ue(A),lighting:{directionToSun:w.directionToSun,color:w.sunColor,intensity:w.sunIntensity,shadowIntensity:w.shadowIntensity},targetPixels:Lt[w.shadowQuality].shadowTexelErrorPixels,samples:yr(),signal:M,prepare:async(L,W)=>{const ee=bu(L.receiverBounds,Z);return ee===null?{covered:!1,group:null,isCurrent:()=>!1,dispose:()=>{}}:S.prepareIdleShadowRegion({receiverBounds:L.receiverBounds,casterBounds:L.casterBounds,terrainLevel:ee},W)}}),M.aborted||Ze.publish())}}}});let Ve=null,kt="";const Xe=(m,S,_)=>{const M=`${m}:${S}`;M!==kt&&(kt=M,console.error(`[SHADOW] Atmospheric update rejected; retaining last valid frame (${m}: ${S})`,{phase:m,reason:S,..._}))},Vi=()=>{kt=""},Be=()=>{Te.cancel(),Mt+=1,ze+=1},ur=Pp(r,m=>B.setLocationLabelColor(m),()=>E,()=>N),zt=m=>{const S={longitude:q.observer.longitude,latitude:q.observer.latitude,altitudeMeters:hi},_=ef(m.instant,S,q);if(_)return Xe("sunlight input",_,{observer:S,skyReference:q}),b;P.ensure(()=>{if(C||!h)return;Be();const U=zt(h);U&&ur.apply(U),r.triggerRepaint()},D),P.ensureSky(()=>{C||!h||(Be(),zt(h),r.triggerRepaint())});let M;try{M=P.evaluate(m.instant,S,D,q)}catch(U){return Xe("sunlight generation","generator threw",{observer:S,error:U}),b}const Z=tf(M);return Z?(Xe("sunlight output",Z,{observer:S,sample:M}),b):(Vi(),b=M,w.atmosphericSky.update(M.skyFrame,P.skyTextures),bp(w,M),po(w,M.directionToSun.clone().transformDirection(le()),M.radiance,jr),M)};ie=m=>{C||(Te.cancel(),$==null||$.invalidateContent(m),w.controller.invalidate(),w.dirty=!0)};const ft=new Map,pt=()=>{const m=be(r);return H&&!m.includes(H)?[H,...m]:m};let Vt=null,gt=null,We=null,vt=null,Rs=[];const Es=()=>pt().flatMap(m=>{var S;return xe(m,((S=m.getActiveTileVolumes)==null?void 0:S.call(m))??[])}),dr=()=>Vt??Es(),As=(m,S=di*4)=>{if(!ye())return;const _=dr(),M=T(),Z=m?no(m,_,M):Math.max(M,..._.filter(({loadReason:L})=>L!==tr.SHADOW).map(({errorPixels:L})=>L).filter(L=>Number.isFinite(L)));let U=1/0;for(const L of _){if(L.loadReason===tr.SHADOW||m&&(L.minimum[0]>=m.max.x||L.maximum[0]<=m.min.x||L.minimum[2]>=m.max.z||L.maximum[2]<=m.min.z))continue;const W=L.geometricError,ee=L.errorPixels;W!==void 0&&ee!==void 0&&Number.isFinite(W)&&Number.isFinite(ee)&&W>0&&ee>0&&(U=Math.min(U,W/ee))}return Jf({stageErrorPixels:Z,targetErrorPixels:M,groundTexelTargetMeters:S,finalBiasMeters:di,maximumCoarseBiasMeters:Lp,metersPerPixel:Number.isFinite(U)?U:0})},Cs=m=>{const S=Vt,_=gt,M=We,Z=vt;if(Vt=S??Es(),gt=_??new Map,We=M??new Map,vt=Z??new Map,!S){const U=$f(Rs,Vt);U.length>0&&($==null||$.invalidateContent(U),fr.length=0),Rs=Vt}try{return m()}finally{Vt=S,gt=_,We=M,vt=Z}};let It=null,hr=null,Wi=Number.NEGATIVE_INFINITY,Gi=!1;const Is=new WeakMap,Uc=m=>{var M,Z,U;if(!m)return"none";const S=r.getCenter(),_=r.getCanvas();return[Math.round(S.lng*1e7),Math.round(S.lat*1e7),Math.round((((M=r.getZoom)==null?void 0:M.call(r))??0)*1e4),Math.round((((Z=r.getBearing)==null?void 0:Z.call(r))??0)*1e3),Math.round((((U=r.getPitch)==null?void 0:U.call(r))??0)*1e3),`${_.clientWidth||_.width}x${_.clientHeight||_.height}`,(h==null?void 0:h.azimuthDegrees)??"no-sun",(h==null?void 0:h.elevationDegrees)??"no-sun",w.shadowQuality].join(";")},mr=m=>{var W,ee,de,we,ge,Se;if(E){const j=performance.now();if(j-Wi<kp){Gi=!0;return}Wi=j}hr=m,Gi=!1;const S=Uc(m),_=A?ue(A):null,M=m&&_?new Ur().setFromProjectionMatrix(new Q().multiplyMatrices(_.projectionMatrix,_.matrixWorldInverse),_.coordinateSystem,_.reversedDepth):null,Z=new Pe,U=M?xe(H,((W=H==null?void 0:H.getActiveTileVolumes)==null?void 0:W.call(H))??[]).filter(j=>(Z.min.fromArray(j.minimum),Z.max.fromArray(j.maximum),M.intersectsBox(Z))):void 0,L=[...be(r),...H?[H]:[]];for(const j of new Set(L)){if((ee=j.setShadowStagePresentationGate)==null||ee.call(j,!1),!j.providesTerrain){j===H?(de=j.setErrorTarget)==null||de.call(j,(o==null?void 0:o.errorTargetPixels)??cn):(we=j.setErrorTargetOverride)==null||we.call(j,g),(ge=j.setShadowView)==null||ge.call(j,m?{...m,terrainReceivers:U}:null);continue}Is.get(j)!==S&&(Is.set(j,S),(Se=j.setShadowView)==null||Se.call(j,m))}},ji=m=>{var S;It=m;for(const _ of new Set([...be(r),...H?[H]:[]]))(S=_.setLiveShadowView)==null||S.call(_,m);N||mr(m)};let it=!a;a&&(w.shadowQuality=Xt.FPS_120);let Yi={},Ie=sn(an(Yi,a),w.shadowQuality),nt=null;const qr=()=>({format:Ie.shadowBufferFormat,msaaSamples:Ie.shadowBufferLayout===ra.TILED?0:cp(Ie,(Ie.shadowBufferFormat===$t.SDR_8?nt==null?void 0:nt.sdrSamples:nt==null?void 0:nt.hdrSamples)??[0,2,4])});let Wt=qr(),$e=0,qi=!1,Kr=!1;const fr=[];let Qe=!0,Ki=[],Ds="",st=In(w.shadowQuality),Xr=Number.POSITIVE_INFINITY,Gt=!0,Dt=so(4096);w.controller.setMaxShadowMapSize(Dt.maxShadowMapSize);let $=null,Xi=null,bt=[];const De=()=>Ie.shadowBufferLayout===ra.TILED,pr=()=>{$==null||$.dispose(),$=null,Xi=null,bt=[]},Ze=up(r,()=>({bufferLayout:Ie.shadowBufferLayout,sunDiscSamples:Ie.shadowSunDiscSamples,tiledStats:De()?($==null?void 0:$.stats)??null:null}));w.controller.setSoftSun(it);const gr=(m,S)=>Math.round(m/S)*S,Hc=m=>{var _,M,Z,U;const S=r.getCenter();return[gr(S.lng,1e-7),gr(S.lat,1e-7),gr(((_=r.getZoom)==null?void 0:_.call(r))??0,1e-4),gr(((M=r.getBearing)==null?void 0:M.call(r))??0,.001),gr(((Z=r.getPitch)==null?void 0:Z.call(r))??0,.001),`${m.viewport.x}x${m.viewport.y}`,(U=m.cssViewport)==null?void 0:U.toArray().join("x")].join(";")},vr=(m=!0,S=!0,_)=>{var ee,de,we,ge;const M=r.getCenter(),Z=(H==null?void 0:H.getElevation(M.lng,M.lat))??0,U=(de=(ee=B.layer).projectLngLatToScene)==null?void 0:de.call(ee,[M.lng,M.lat],Z);if(!U){h&&zt(h),S&&r.triggerRepaint();return}w.center.copy(U).applyMatrix4(le()),Ve??(Ve=Nc(w.scene,U.y));const[L,W]=Ve;if(_){const Se=pp(ue(_),L,W,w.center);if(Se.length>0){const j=new Pe().setFromPoints(Se).getSize(new x),Me=Math.max(...Se.map(Yt=>Yt.distanceTo(w.center)));w.sunVectorLengthMeters=Math.min(j.x,j.z)*Bc,w.shadowAreaMeters=Math.max(t??0,Bp,Me*2),Ki=Se}}else Qe=!0;if(w.shadowCameraOffsetMeters=Math.max(Fc,w.shadowAreaMeters*1.5),w.receiverWorldPoints=Ki,w.minimumElevationMeters=L,w.maximumElevationMeters=W,w.dirty=!0,h&&(m||!b))zt(h);else{w.lightTarget.position.copy(w.center);for(const Se of w.controller.lights)Se.target.position.copy(w.center),Se.target.updateMatrixWorld(!0);(we=w.sunVector)==null||we.root.position.copy(w.center),(ge=w.sunVector)==null||ge.root.updateMatrixWorld(!0)}S&&r.triggerRepaint()},jt={id:"shadow-simulation-controller",originLngLat:[r.getCenter().lng,r.getCenter().lat],root:new os,updatePriority:Hp,update(m){var Zr,Jr;A=m;const{localFrame:S}=m;S&&S.revision!==re&&(re=S.revision,q=ne(S.lngLat,S.sceneFromLocalRotation),b&&(b=sf(b,q),w.atmosphericSky.update(b.skyFrame,P.skyTextures)));const _=(Jr=(Zr=B.layer).getRenderer)==null?void 0:Jr.call(Zr);_&&!nt&&(nt=op(_),Wt=qr(),Dt=so(Math.min(nt.maxTextureSize,nt.maxRenderbufferSize)),w.controller.setMaxShadowMapSize(Dt.maxShadowMapSize)),Xr=ap(Dt.maxAccumulationPixels,Wt),Gt=m.viewport.x*m.viewport.y<=Xr,st=Dn(st,performance.now(),N,{enabled:Ie.shadowAdaptiveQuality,allowCadenceReduction:!De()});const M=Math.max(0,m.lodCamera.position.y-m.lookTarget.y),Z=hi+M,U=q.scenePosition.y+M;![...m.lodCamera.matrixWorld.elements,...m.lodCamera.projectionMatrix.elements].every(Number.isFinite)||!Number.isFinite(Z)||!Number.isFinite(U)?Xe("render camera","local Three.js camera matrix or altitude is invalid",{altitudeMeters:Z,cameraHeightAboveTargetMeters:M,matrixWorld:m.lodCamera.matrixWorld.elements,projectionMatrix:m.lodCamera.projectionMatrix.elements}):(w.atmosphericSky.updateViewCamera(m.lodCamera),w.atmosphericSky.updateObserverScenePosition(Yr.set(q.scenePosition.x,U,q.scenePosition.z)));const W=Hc(m);if((Qe||W!==Ds)&&(performance.now(),Ds=W,Ve=N?Ve??[w.minimumElevationMeters,w.maximumElevationMeters]:hp(w.scene,be(r),m.renderCamera,w.center.y),vr(!1,!1,m),Qe=!1),!w.dirty)return;w.sunVectorVisible&&w.sunVector&&w.sunVector.root.cone.position.y!==w.sunVectorLengthMeters&&po(w,w.directionToSun,w.sunColor,w.sunIntensity),Mt+=1;const ee=dr(),de=ee.flatMap(({minimum:yt,maximum:Ae})=>Fo(ue(m),new Pe(new x(...yt),new x(...Ae))));if(w.receiverWorldPoints=de.length>0?de:Ki,w.receiverWorldPoints.length===0||!h){ji(null),Ze.setSnapshot(null),An(r);return}if(De()){bt=Tu(ee.filter(({loadReason:Ae})=>Ae!==tr.SHADOW).map(({id:Ae,minimum:Pt,maximum:en,receiverObjectId:tn})=>({id:Ae,receiverObjectId:tn,bounds:new Pe(new x(...Pt),new x(...en))})));const yt=Su(bt,ue(m));yt.length>0&&(w.receiverWorldPoints=[...yt])}const we=ao(Dt.maxShadowMapSize,w.shadowQuality,m.viewport.x*m.viewport.y,N&&ye()?st.depthScale:1),ge=m.cssViewport??m.viewport,Se=ao(Dt.maxShadowMapSize,w.shadowQuality,ge.x*ge.y,N?st.depthScale:1),j=w.controller.update({maxReceiverBiasMeters:As(),receiverBiasMeters:ye()?void 0:.5,mountedShadowCamera:!ye(),rasterKey:ye()?void 0:String(r.getZoom()),receiverWorldPoints:w.receiverWorldPoints,receiverAnchorWorldPosition:ye()?w.center:new x,minimumElevationMeters:w.minimumElevationMeters,maximumElevationMeters:w.maximumElevationMeters,directionToSun:w.directionToSun,color:w.sunColor,intensity:w.sunIntensity,shadowIntensity:w.shadowIntensity,quality:w.shadowQuality,mapTexelBudget:we,casterMapTexelBudget:Se,groundTexelFit:ye()?Ie.shadowGroundTexelFit:!1,stabilizeMapSize:N});if(w.dirty=!1,!j){ji(null),Ze.setSnapshot(null),An(r);return}const Me=j.camera,Yt=w.controller.lights[0].shadow.camera,qt=b==null?void 0:b.skyFrame.directionToSunECEF;ji({camera:Yt,directionToSunECEF:qt?[qt.x,qt.y,qt.z]:void 0,casterAngularRadiusRadians:it?Lr:0,shadowMapSize:{width:(Me.rightMeters-Me.leftMeters)/j.casterMetersPerTexel[0],height:(Me.topMeters-Me.bottomMeters)/j.casterMetersPerTexel[1]}});const Ji=Zn(r);if(Me&&Ji){m.lodCamera.updateMatrixWorld(!0),m.lodCamera.updateProjectionMatrix();const yt=pt().flatMap(Ae=>{var Pt;return(((Pt=Ae.getActiveTileVolumes)==null?void 0:Pt.call(Ae))??[]).map(({id:en,loadReason:tn,minimum:Yc,maximum:qc})=>({id:en,loadReason:tn,minimum:Yc,maximum:qc}))});Ze.setSnapshot({bufferLayout:Ie.shadowBufferLayout,sunDiscSamples:Ie.shadowSunDiscSamples,tiledStats:null,cameraRangeMeters:Yt.position.distanceTo(w.controller.lights[0].target.position),leftMeters:Me.leftMeters,rightMeters:Me.rightMeters,bottomMeters:Me.bottomMeters,topMeters:Me.topMeters,nearMeters:Me.nearMeters,farMeters:Me.farMeters,projectionMatrixElements:Me.projectionMatrixElements,shadowMapWidth:Me.shadowMapWidth,shadowMapHeight:Me.shadowMapHeight,minimumElevationMeters:w.minimumElevationMeters,maximumElevationMeters:w.maximumElevationMeters,sceneAnchorPositionElements:w.center.toArray(),mainCamera:{viewMatrixElements:[...m.lodCamera.matrixWorldInverse.elements],projectionMatrixElements:[...m.lodCamera.projectionMatrix.elements],nearMeters:m.lodCamera.near,farMeters:m.lodCamera.far,viewportWidth:m.viewport.x,viewportHeight:m.viewport.y},tileVolumes:yt,shadow:j,atmosphericSunlight:b?{azimuthDegrees:b.azimuthDegrees,elevationDegrees:b.elevationDegrees,relativeIntensity:b.relativeIntensity,color:`#${b.color.getHexString()}`,transmittanceReady:b.atmosphericTransmittanceReady,irradianceReady:b.atmosphericIrradianceReady}:null}),Ze.publish()}},dispose:()=>{}};B.layer.addRuntime(jt);const yr=()=>Ie.shadowSunDiscSamples,Ps=()=>{var _,M;if(!De()||!A||w.directionToSun.y<=0)return null;const m=(M=(_=B.layer).getRenderer)==null?void 0:M.call(_);if(!m)return null;let S=!1;if(!$||Xi!==m){const Z=bt;pr(),bt=Z,Xi=m,$=new Kf(w.scene,m,{light:w.controller.lights[0],sky:w.atmosphericSky.mesh,overlay:w.sunVectorRoot,frame:w.frame,maximumMapSize:Dt.maxShadowMapSize,isCorridorReady:(U,L,W)=>{const ee=En(U,L,W),de=gt==null?void 0:gt.get(ee);if(de!==void 0)return de;const we=pt().every(ge=>{var Se;return((Se=ge.isShadowRegionReady)==null?void 0:Se.call(ge,U,L,W))??(ge.getRequestDemand?ge.getRequestDemand()===0:!ge.providesTerrain||!Sr(r))});return gt==null||gt.set(ee,we),we},receiverStageError:U=>{const L=En(U),W=vt==null?void 0:vt.get(L);if(W!==void 0)return W;const ee=no(U,dr(),ye()?T():(o==null?void 0:o.errorTargetPixels)??cn);return vt==null||vt.set(L,ee),ee},receiverBiasLimit:(U,L)=>As(U,L)??di,onPresentedPages:(U,L)=>{var ee;const W=Qf(dr(),L.map(({id:de,receiverBounds:we})=>({id:de,bounds:we})),U.map(({id:de,receiverBounds:we})=>({id:de,bounds:we})));if(W.length!==0)for(const de of pt())(ee=de.acknowledgeShadowStage)==null||ee.call(de,W)},corridorRevision:(U,L,W)=>{var Se;const ee=En(U,L,W),de=We==null?void 0:We.get(ee);if(de!==void 0)return de;const we=[];for(const j of pt()){if(j===jt)continue;const Me=(Se=j.getShadowRegionRevision)==null?void 0:Se.call(j,U,L,W);if(!Me)return We==null||We.set(ee,null),null;we.push(JSON.stringify([j.id,Me]))}const ge=we.length?JSON.stringify(we.sort()):null;return We==null||We.set(ee,ge),ge},dateTimeKey:()=>(h==null?void 0:h.instant.toISOString())??null,worldBasis:()=>{const U=B.layer.projectSceneToLngLat([0,0,0]);if(!U)throw new Error("Shared scene origin is not initialized");const L=ql.MercatorCoordinate.fromLngLat(U,0);return Zf(L.x,L.y,L.meterInMercatorCoordinateUnits())},requestRepaint:()=>r.triggerRepaint(),visualEpoch:()=>ze,auditCorridors:U=>{const L=dr(),W=pt();return U.map(({id:ee,casterBounds:de,receiverBounds:we})=>ep({id:ee,casterBounds:de,sunElevationDegrees:(h==null?void 0:h.elevationDegrees)??0,volumes:L,regions:W.flatMap(ge=>{var j;const Se=(j=ge.getShadowRegionDiagnostics)==null?void 0:j.call(ge,de,void 0,we);return Se?[Se]:[]})}))},runIdleRender:U=>{var L,W;return((W=(L=B.layer).runIdleRender)==null?void 0:W.call(L,U))??!1}}),S=!0}return!N||S?$.update(bt,A,{maxReceiverBiasMeters:ye()?di:void 0,directionToSun:w.directionToSun,color:w.sunColor,intensity:w.sunIntensity,shadowIntensity:w.shadowIntensity},Lt[w.shadowQuality].shadowTexelErrorPixels,ue(A)):$.updatePresentation(A,ue(A)),$},kc=Xf(),$r=()=>De()&&kc(pt()),Os={onSettled:Te.onSettled,onPresented:()=>{var S;const m=performance.now();for(const _ of be(r))(S=_.onShadowPresented)==null||S.call(_,m)},get options(){return Wt},get maxRenderTargetPixels(){return Xr},get rounds(){return yr()},epoch:()=>Mt,visualEpoch:()=>ze,pending:()=>Gt&&it&&!E&&(!Ne||$r()||!De()&&!he()||!De()&&Sr(r)||N||!De()&&$e!==0),active:()=>Gt&&it&&Ne&&!$r()&&(De()||he())&&(De()||!Sr(r))&&!N&&!E&&(De()||$e===0)&&h!==null&&It!==null&&w.receiverWorldPoints.length>0,retainSettledFrame:()=>!E&&Gt&&it&&h!==null&&It!==null&&w.receiverWorldPoints.length>0,prepareRound:m=>{De()||w.controller.applySunDiscSample(m,yr())},finishRound:()=>w.controller.restoreSunDiscCenter(),get renderProgressive(){if(De())return(m,S)=>!it||E||!Gt?null:Cs(()=>{if($r())return null;const _=Ps();if(!_)return null;const M=_.renderProgressive(m,{...S,samples:yr(),maxRenderTargetPixels:Xr,options:Wt});return Ze.publish(),M})},renderScene:(m,S)=>!it||E||!De()?!1:Cs(()=>{if($r())return!1;const _=Ps();if(!_)return!1;const M=_.render(m,S,yr(),!N);return Ze.publish(),M})};(Xs=(Ks=B.layer).setAccumulationController)==null||Xs.call(Ks,Os);const Qr=()=>{Ve=null,Qe=!0,vr()};K=m=>{ie(m),Qr()};const Ns=()=>{Te.cancel(),$==null||$.pausePending(),st=Dn(st,performance.now(),!1),N=!0,Qe=!0},$i=()=>{Te.cancel(),Qe=!0},Ls=()=>{N=!1,st=Dn(st,performance.now(),!1),qi?(qi=!1,Zi()):Qr(),b&&ur.flush(b),hr!==It&&mr(It)},Fs=()=>{$i(),r.triggerRepaint()};r.on(_e.MOVE_START,Ns),r.on(_e.MOVE,$i),r.on(_e.MOVE_END,Ls),r.on(_e.RESIZE,Fs);const Qi=m=>{m.ready.then(S=>{!S||C||H!==m||(Ne=!0,Qr(),r.triggerRepaint())})},Bs=()=>{var M,Z,U,L;const m=be(r).filter(W=>W.providesTerrain);if(m.length!==ht.length||m.some(W=>!ht.includes(W))){ht=m,pr(),(Z=(M=B.layer).setAccumulationController)==null||Z.call(M,null),(L=(U=B.layer).setAccumulationController)==null||L.call(U,Os);for(const W of w.controller.lights)W.shadow.map&&(At(W.shadow.map),W.shadow.map=null);Be()}const S=ye();if(!o)return;if(S){Te.cancel(),Ne=!0;const W=H;H=null,W&&B.layer.hasRuntime(W.id)&&B.layer.removeRuntime(W.id),Ve=null,Qe=!0;return}if(H)return;const _=rt();_&&(Te.cancel(),Ne=!1,H=_,_.setMaterialColor(`#${Y.getHexString()}`),_.setShadowView(hr),B.layer.addRuntime(_),Qi(_),Ve=null,Qe=!0)};H&&Qi(H),vr();const Us=()=>{if(C)return;const m=new Set(Pl(r));for(const[S,_]of ft)m.has(S)||(B.layer.removeRuntime(_.runtime.id),ft.delete(S));for(const S of m){const _=ft.get(S);if(_){_.sync();continue}if(!S.scene)continue;const M=_p(B.layer,S,v);M&&ft.set(S,M)}Kt(B.layer.getScene(),ye()),Qr(),r.triggerRepaint()},zc=Rl(r,Us);Us(),p();const Hs=new WeakSet,Zi=()=>{var m,S,_;if(!C){$e&&(window.clearTimeout($e),$e=0),Kr?$==null||$.invalidateContent():fr.length>0&&($==null||$.invalidateContent(fr)),Kr=!1,fr.length=0,Te.cancel(),Bs(),f.refresh(),p();for(const M of be(r))M.providesTerrain&&((m=M.setErrorTargetOverride)==null||m.call(M,g),(!O.has(M)||O.get(M)!==R)&&((S=M.setCacheBudget)==null||S.call(M,R),O.set(M,R))),(_=M.setShadowSimulationStyle)==null||_.call(M,v),Hs.has(M)||(Kt(M.root,ye()),Hs.add(M));mr(hr),ft.size>0&&Kt(B.layer.getScene(),ye()),w.controller.invalidate(),w.dirty=!0,Qe=!0,Ve=null,r.triggerRepaint()}},Vc=Oo(r,m=>{if(C)return;const S=m==null?void 0:m.bounds;if(m===void 0){const _=be(r).filter(M=>M.providesTerrain);(_.length!==ht.length||_.some(M=>!ht.includes(M)))&&(Bs(),f.refresh(),p())}for(const _ of(m==null?void 0:m.roots)??[])Kt(_,ye());if((S==null?void 0:S.length)===0){r.triggerRepaint();return}if(S===void 0?Kr=!0:S.length>0&&fr.push(...S.map(_=>_.clone())),Te.cancel(),S===void 0&&pt().some(_=>_!==jt&&!_.getActiveTileVolumes)&&(Kr=!0),N){qi=!0,r.triggerRepaint();return}r.triggerRepaint(),!$e&&($e=window.setTimeout(()=>{$e=0,Zi()},Fp))}),Wc=El(r,()=>{Sr(r)&&Te.cancel(),C||r.triggerRepaint()});Zi();const ks=m=>{const S=b??zt(m);S&&ur.apply(S)},Gc=m=>{(h==null?void 0:h.instant.getTime())!==m.instant.getTime()&&($==null||$.cancelPending(!0),Be(),h=m,vr(),ks(m))},zs=()=>{C||h&&ks(h)};r.on(_e.STYLE_LOAD,zs);const Vs=()=>{Ze.markStale(),w.dirty=!0,r.triggerRepaint()},jc=lp(r,m=>{m?Vs():Ze.reset()});return{updateSolarPosition:Gc,updateMeshCacheBudget(m){var _;a&&(m=Math.min(m??on,on));const S=m!==void 0&&Number.isFinite(m)&&m>0?m:void 0;if(!(R===S&&be(r).filter(M=>M.providesTerrain).every(M=>O.has(M)&&O.get(M)===S))){R=S;for(const M of be(r))M.providesTerrain&&((_=M.setCacheBudget)==null||_.call(M,S),O.set(M,S));r.triggerRepaint()}},updateTerrain(m){if(o===m||(Te.cancel(),o=m,!m||ye()))return;const S=H,_=rt(S==null?void 0:S.originLngLat);_&&(_.setMaterialColor(`#${Y.getHexString()}`),_.setShadowView(hr),S&&_.adoptPresentation(S),H=_,B.layer.addRuntime(_),S&&B.layer.removeRuntime(S.id),Qi(_),Ve=null,Qe=!0,Be(),K(),r.triggerRepaint())},updateTerrainColor(m){const S=new ke(m);Y.equals(S)||(Be(),H==null||H.setMaterialColor(m),w.atmosphericSky.updateGroundAlbedo(S),Y=S)},updateMeshErrorTarget(m){var S;if(g!==m){g=m;for(const _ of be(r))(S=_.setErrorTargetOverride)==null||S.call(_,m);r.triggerRepaint()}},updateBuildingAppearance(m){var S;if(!(v.fullOpacity===m.fullOpacity&&v.uniformColor===m.uniformColor&&(v.uniformColorMix??1)===(m.uniformColorMix??1)&&(v.textureSaturation??1)===(m.textureSaturation??1)&&(v.textureColorCorrection??!1)===(m.textureColorCorrection??!1))){Be(),$==null||$.invalidateContent(),v=m;for(const _ of ft.values())_.updateBuildingAppearance(m);for(const _ of be(r))(S=_.setShadowSimulationStyle)==null||S.call(_,m);Kt(B.layer.getScene(),ye()),w.controller.invalidate(),w.dirty=!0,r.triggerRepaint()}},updateShadowQuality(m){a&&(m=Xt.FPS_120),w.shadowQuality!==m&&(Be(),w.shadowQuality=m,Ie=sn(an(Yi,a),m),Wt=qr(),st=In(m),w.dirty=!0,vr(),w.controller.invalidate())},updateRenderQuality(m){m=an(m,a);const S=Ie,_=sn(m,w.shadowQuality);Yi={...m},Ie=_;const M=S.shadowAdaptiveQuality!==_.shadowAdaptiveQuality;(M||S.shadowBufferLayout!==_.shadowBufferLayout)&&(st=In(w.shadowQuality)),!(!M&&S.shadowBufferLayout===_.shadowBufferLayout&&S.shadowBufferFormat===_.shadowBufferFormat&&S.shadowSunDiscSamples===_.shadowSunDiscSamples&&S.shadowMsaaSamples===_.shadowMsaaSamples&&S.shadowGroundTexelFit===_.shadowGroundTexelFit)&&(Wt=qr(),Be(),S.shadowBufferLayout!==_.shadowBufferLayout&&(pr(),Qe=!0),(M||S.shadowGroundTexelFit!==_.shadowGroundTexelFit||S.shadowBufferLayout!==_.shadowBufferLayout)&&(w.dirty=!0,w.controller.invalidate()),Ze.publish(),r.triggerRepaint())},updateSoftSunShadows(m){m=m&&!a,it!==m&&(Be(),it=m,pr(),w.controller.setSoftSun(m),w.controller.invalidate(),w.dirty=!0,r.triggerRepaint())},updateTimeAnimating(m){E!==m&&(Te.cancel(),E=m,m&&($==null||$.pausePending()),m||(ur.flush(),Wi=Number.NEGATIVE_INFINITY,Gi&&!N&&mr(It),w.dirty=!0),r.triggerRepaint())},refreshProjectionDebug:Vs,updateShadowIntensity(m){const S=Ye(m,0,1);if(y!==S){Be(),y=S,w.shadowIntensity=y;for(const _ of w.controller.lights)_.shadow.intensity=y;r.triggerRepaint()}},updateMapStyleContentVisibility(m){u!==m&&(u=m,G(),r.triggerRepaint())},updateMapStyleElevationVisibility(m,S){B.setMapStyleElevationVisibility(m,S),r.triggerRepaint()},updateMapStyleLabelOverlayVisibility(m){B.setPointLabelOverlayVisible(m),r.triggerRepaint()},updateSunDebugVectorVisibility(m){w.sunVectorVisible!==m&&(Be(),w.sunVectorVisible=m,w.sunVectorRoot.visible=m&&!!h,m?(w.frame.add(w.sunVectorRoot),Hr(async()=>{const{buildSunVector:S}=await import("./shadow-sun-vector-Cjh8_hvV.js");return{buildSunVector:S}},__vite__mapDeps([11,3,1,4,5,6,2,7,8,9,10])).then(({buildSunVector:S})=>{if(C||!w.sunVectorVisible||w.sunVector)return;const _=S();w.sunVector=_,w.sunVectorRoot.add(_.root),_.update(w.center,w.directionToSun,w.sunVectorLengthMeters),_.root.visible=!0,w.sunVectorRoot.visible=!!h,r.triggerRepaint()}).catch(S=>{C||console.error("Unable to load sun-vector diagnostics",S)})):(w.frame.remove(w.sunVectorRoot),w.sunVector&&(w.sunVectorRoot.remove(w.sunVector.root),w.sunVector.dispose(),w.sunVector=null)),r.triggerRepaint())},updateAtmosphericLutUsage(m){D.useTransmittanceLut===m.useTransmittanceLut&&D.useIrradianceLut===m.useIrradianceLut||(Be(),D=m,b=null,h&&(zt(h),ie()),r.triggerRepaint())},dispose(){var m,S,_,M,Z,U;if(!C){C=!0,Te.dispose(),jc(),pr(),Ze.dispose(),$e&&window.clearTimeout($e),ur.dispose(),An(r),r.off(_e.STYLE_LOAD,zs),r.off(_e.MOVE_START,Ns),r.off(_e.MOVE,$i),r.off(_e.MOVE_END,Ls),r.off(_e.RESIZE,Fs),zc(),Vc(),Wc(),It=null,mr(null);for(const L of be(r))(m=L.setShadowSimulationStyle)==null||m.call(L,null),(S=L.setErrorTargetOverride)==null||S.call(L,null);for(const L of ft.values())B.layer.hasRuntime(L.runtime.id)&&B.layer.removeRuntime(L.runtime.id);ft.clear();try{F==null||F()}catch{}F=null,(M=(_=B.layer).setMapStyleProjectionVisible)==null||M.call(_,!0),f(),B.layer.hasRuntime(jt.id)&&B.layer.removeRuntime(jt.id),H&&B.layer.hasRuntime(H.id)&&B.layer.removeRuntime(H.id),P.dispose(),Rp(w),(U=(Z=B.layer).setAccumulationController)==null||U.call(Z,null),B.release();try{r.isStyleLoaded()&&r.setLight(l)}catch{}}}}},Vp=({tiledShadows:r=!1,libreMap:e,shadowAreaMeters:t,terrain:i,mapLibreTerrain:n,terrainQuality:s,location:a,state:o,dateState:c,setDateState:l})=>{const u=k.useRef(null),d=nu(e),f=fu({dateState:c,setDateState:l,location:a,shadowState:o,onFrame:g=>{var T;o.enabled&&((T=u.current)==null||T.updateSolarPosition(vi(g,a)))}}),p=k.useMemo(()=>Nl(i?{...i,geometryProjection:o.terrainGeometryProjection??i.geometryProjection??"ecef"}:void 0,ia(o.shadowQuality),o.terrainErrorTarget),[i,o.shadowQuality,o.terrainErrorTarget,o.terrainGeometryProjection]),h=k.useRef(p);h.current=p;const[v,y]=k.useState(0);return k.useEffect(()=>{if(!e||!o.enabled)return;let g=null,T=null,R=null;const O=()=>{e.off(_e.STYLE_DATA,b),e.off(_e.STYLE_LOAD,b),e.off(_e.IDLE,b)},b=()=>{g||T!==null||R!==null||!e.isStyleLoaded()||(T=requestAnimationFrame(()=>{T=null,R=setTimeout(()=>{R=null,e.isStyleLoaded()&&(O(),g=zp(e,{shadowAreaMeters:t,terrain:h.current,mapLibreTerrain:n,terrainQuality:s}),u.current=g,y(D=>D+1))},0)}))};return e.on(_e.STYLE_DATA,b),e.on(_e.STYLE_LOAD,b),e.on(_e.IDLE,b),b(),()=>{O(),T!==null&&cancelAnimationFrame(T),R!==null&&clearTimeout(R),u.current=null,g==null||g.dispose(),g=null}},[e,t,o.enabled,n,s]),k.useEffect(()=>{var g;(g=u.current)==null||g.updateTerrain(p)},[p,v]),k.useEffect(()=>{var T;if(!o.enabled)return;const g=f.current??c;(T=u.current)==null||T.updateSolarPosition(vi(g,a))},[f,c,a,o.enabled,v]),k.useEffect(()=>{var g;o.enabled&&((g=u.current)==null||g.updateShadowQuality(ia(o.shadowQuality)))},[o.enabled,o.shadowQuality,v]),k.useEffect(()=>{var g;o.enabled&&((g=u.current)==null||g.updateRenderQuality({shadowAdaptiveQuality:o.shadowAdaptiveQuality,shadowBufferLayout:r?o.shadowBufferLayout:void 0,shadowBufferFormat:o.shadowBufferFormat,shadowSunDiscSamples:o.shadowSunDiscSamples,shadowMsaaSamples:o.shadowMsaaSamples,shadowGroundTexelFit:o.shadowGroundTexelFit}))},[o.enabled,r,o.shadowAdaptiveQuality,o.shadowBufferLayout,o.shadowBufferFormat,o.shadowSunDiscSamples,o.shadowMsaaSamples,o.shadowGroundTexelFit,v]),k.useEffect(()=>{var g;o.enabled&&((g=u.current)==null||g.updateMeshErrorTarget(o.meshErrorTarget??null))},[o.enabled,o.meshErrorTarget,v]),k.useEffect(()=>{var g;o.enabled&&((g=u.current)==null||g.updateMeshCacheBudget(o.meshCacheBudgetBytes))},[o.enabled,o.meshCacheBudgetBytes,v]),k.useEffect(()=>{var g;o.enabled&&((g=u.current)==null||g.updateSoftSunShadows(o.softSunShadows??!0))},[o.enabled,o.softSunShadows,v]),k.useEffect(()=>{var g;o.enabled&&((g=u.current)==null||g.updateTimeAnimating((o.isAnimating??!1)||d))},[o.enabled,o.isAnimating,d,v]),k.useEffect(()=>{var g;o.enabled&&((g=u.current)==null||g.updateShadowIntensity(o.shadowIntensity??1))},[o.enabled,o.shadowIntensity,v]),k.useEffect(()=>{var g;o.enabled&&((g=u.current)==null||g.updateMapStyleContentVisibility(o.showMapStyleContent??!0))},[o.enabled,o.showMapStyleContent,v]),k.useEffect(()=>{var g;o.enabled&&((g=u.current)==null||g.updateMapStyleLabelOverlayVisibility((o.showMapStyleContent??!0)&&(o.showMapStyleLabels??!0)))},[o.enabled,o.showMapStyleContent,o.showMapStyleLabels,v]),k.useEffect(()=>{var g;o.enabled&&((g=u.current)==null||g.updateMapStyleElevationVisibility(o.showMapStyleElevationLines??!1,o.showMapStyleElevationLabels??!1))},[o.enabled,o.showMapStyleElevationLines,o.showMapStyleElevationLabels,v]),k.useEffect(()=>{var g;o.enabled&&((g=u.current)==null||g.updateSunDebugVectorVisibility((o.showProjectionDebugView??!1)&&(o.showSunDebugVector??!0)))},[o.enabled,o.showProjectionDebugView,o.showSunDebugVector,v]),k.useEffect(()=>{if(!e)return;const g=o.enabled&&(o.showProjectionDebugView??!1)&&(o.showTileBounds??!0);if(!g)return;const T=new Set,R=()=>{var D;const b=be(e);for(const C of T)b.includes(C)||T.delete(C);for(const C of b)T.has(C)||((D=C.setTileBoundsVisible)==null||D.call(C,g),T.add(C))};R();const O=Oo(e,R);return()=>{var b;O();for(const D of be(e))(b=D.setTileBoundsVisible)==null||b.call(D,!1)}},[e,v,o.enabled,o.showProjectionDebugView,o.showTileBounds]),k.useEffect(()=>{var g;o.enabled&&((g=u.current)==null||g.updateAtmosphericLutUsage({useTransmittanceLut:o.useTransmittanceLut??!0,useIrradianceLut:o.useSkyIrradianceLut??!0}))},[o.enabled,o.useSkyIrradianceLut,o.useTransmittanceLut,v]),k.useEffect(()=>{var g;o.enabled&&((g=u.current)==null||g.updateTerrainColor(o.terrainColor??Po))},[o.enabled,o.terrainColor,v]),k.useEffect(()=>{var g;o.enabled&&((g=u.current)==null||g.updateBuildingAppearance({fullOpacity:o.buildingsFullOpacity??!0,uniformColor:o.buildingColor??Ll,uniformColorMix:Ye(o.buildingColorMix??Fl,0,1),textureColorCorrection:o.meshTextureColorCorrection??!0,textureSaturation:Ye(o.meshTextureSaturation??Bl,0,1)}))},[o.buildingColor,o.buildingColorMix,o.buildingsFullOpacity,o.enabled,o.meshTextureSaturation,o.meshTextureColorCorrection,v]),null},Wp=r=>({...r,animationMode:er.DAY,animationSpeed:4,isAnimating:!1,shadowIntensity:1,meshTextureColorCorrection:!0,showSunDebugVector:!0,showTileBounds:!0,showProjectionDebugView:!1,showDisplaySettings:!1,showMapStyleContent:!0,showMapStyleLabels:!0,showMapStyleElevationLines:!1,showMapStyleElevationLabels:!1,useTransmittanceLut:!0,useSkyIrradianceLut:!0,shadowBufferLayout:void 0,shadowBufferFormat:void 0,shadowSunDiscSamples:void 0,shadowMsaaSamples:void 0,shadowGroundTexelFit:void 0,shadowAdaptiveQuality:void 0}),Gp=({location:r,state:e,setState:t,dateState:i,setDateState:n})=>{const s=e.animationMode??er.DAY,a=e.animationSpeed??4,o=(c,l)=>n(tu(i,i.year,Ul(i.year,c,l),r));return z.jsxs(z.Fragment,{children:[z.jsxs("section",{className:"min-w-0",children:[z.jsx("h3",{className:"mb-1.5 text-xs font-medium uppercase tracking-wide text-neutral-500",children:"Datum"}),z.jsxs("div",{className:"grid grid-cols-2 gap-2","data-test-id":"shadow-date-shortcuts",children:[z.jsx("button",{type:"button",className:wr,onClick:()=>n(ru(i,r)),children:"Heute"}),z.jsx("button",{type:"button",className:wr,onClick:()=>o(2,21),children:"21. März"}),z.jsx("button",{type:"button",className:wr,onClick:()=>o(5,21),children:"21. Juni"}),z.jsx("button",{type:"button",className:wr,onClick:()=>o(11,21),children:"21. Dezember"})]})]}),z.jsxs("section",{children:[z.jsx("h3",{className:"mb-1.5 text-xs font-medium uppercase tracking-wide text-neutral-500",children:"Uhrzeit"}),z.jsx("div",{className:"grid grid-cols-4 gap-2",children:[9,12,15,18].map(c=>z.jsx("button",{type:"button",className:wr,onClick:()=>n(cs(i,{...i,minutes:c*60},r)),children:cu(c)},c))})]}),z.jsxs("section",{children:[z.jsx("h3",{className:"mb-1.5 text-xs font-medium uppercase tracking-wide text-neutral-500",children:"Animation"}),z.jsxs("div",{className:"flex flex-wrap items-center gap-x-3 gap-y-2",children:[z.jsx("div",{className:"flex shrink-0 overflow-hidden rounded-md border border-neutral-300",children:[[er.DAY,"Tagesverlauf"],[er.YEAR,"Jahresverlauf"]].map(([c,l])=>z.jsx("button",{type:"button",className:`${Lo} ${s===c?"bg-amber-50 font-medium text-amber-700":"bg-white"}`,"aria-pressed":s===c,onClick:()=>{const u=c;t({...e,animationMode:u,isAnimating:s===u?!e.isAnimating:!0})},children:l},c))}),z.jsx(du,{value:a,onChange:c=>t({...e,animationSpeed:c})})]})]})]})},jp=({location:r,state:e,setState:t,dateState:i,setDateState:n})=>{const s=e.shadowIntensity??1,a=k.useMemo(()=>vi(i,r),[i,r]);return z.jsxs("div",{className:"w-full","data-test-id":"shadow-simulation-secondary-panel",children:[z.jsxs("div",{className:"mb-2 flex flex-wrap items-center justify-between gap-x-4 gap-y-2",children:[z.jsxs("span",{className:"whitespace-nowrap text-sm tabular-nums text-neutral-500",children:["Höhe ",a.elevationDegrees.toFixed(0),"° · Azimut"," ",a.azimuthDegrees.toFixed(0),"°"]}),z.jsx("div",{className:"flex items-center gap-5 text-sm text-neutral-600",children:z.jsxs("button",{type:"button",className:"flex items-center gap-2 whitespace-nowrap hover:text-amber-700",onClick:()=>{t(Wp(e)),n(iu(i,r))},children:[z.jsx(Fn,{icon:Gl}),"Zurücksetzen"]})})]}),z.jsxs("div",{className:"grid grid-cols-1 gap-x-8 gap-y-4 lg:grid-cols-2",children:[z.jsx(Gp,{location:r,state:e,setState:t,dateState:i,setDateState:n}),z.jsxs("section",{className:"min-w-0",children:[z.jsxs("h3",{className:"mb-1.5 flex items-center gap-1 text-xs font-medium uppercase tracking-wide text-neutral-500",children:["Darstellung",z.jsx("button",{type:"button",className:"inline-flex items-center justify-center p-1 text-neutral-700 hover:text-amber-700","aria-label":"Darstellungseinstellungen",title:"Darstellungseinstellungen","aria-expanded":e.showDisplaySettings??!1,onClick:()=>t({...e,showDisplaySettings:!e.showDisplaySettings}),"data-test-id":"shadow-simulation-display-settings",children:z.jsx(Fn,{icon:jl})})]}),z.jsxs("label",{className:"grid grid-cols-[110px_minmax(0,1fr)_42px] items-center gap-3 text-sm text-neutral-700",children:[z.jsx("span",{children:"Intensität"}),z.jsx("input",{type:"range",min:0,max:1,step:.01,value:s,onChange:o=>t({...e,shadowIntensity:Number(o.currentTarget.value)}),className:"shadow-simulation-range min-w-0 cursor-pointer",style:lu(s,0,1),"aria-label":"Schattenintensität","data-test-id":"shadow-simulation-intensity"}),z.jsxs("span",{className:"text-right tabular-nums",children:[Math.round(s*100),"%"]})]})]})]})]})},Yp=k.lazy(()=>Hr(()=>import("./ShadowProjectionDebugView-BCgRWoER.js"),__vite__mapDeps([12,3,1,4,5,6,2,7,8,9,10,13])).then(r=>({default:r.ShadowProjectionDebugView}))),qp=k.lazy(()=>Hr(()=>import("./ShadowSimulationDisplaySettingsPanel-CYMb2_gb.js"),__vite__mapDeps([14,3,1,4,5,6,2,7,8,9,10])).then(r=>({default:r.ShadowSimulationDisplaySettingsPanel}))),Kp=k.lazy(()=>Hr(()=>import("./ShadowSimulationCurveSettings-BXbyJ8se.js"),__vite__mapDeps([15,3,1,4,5,6,2,7,8,9,10])).then(r=>({default:r.ShadowSimulationCurveSettings}))),Xp="#1677ff",fg=({config:r,debugEnabled:e=!0,libreMap:t,targeted:i,sharedState:n,setSharedState:s,sharedDateState:a,setSharedDateState:o})=>{var B,ne;const{year:c,initialDayOfYear:l,initialMinutes:u,latitude:d=sa.latitude,longitude:f=sa.longitude,timeZone:p=Wl,shadowAreaMeters:h,terrain:v,terrainSources:y,mapLibreTerrain:g,controlPosition:T="topleft",controlOrder:R=70,experimentalTiledShadows:O=!1}=r??{},b=ou(t,d,f),D=k.useMemo(()=>Hl({terrain:v,terrainSources:y}),[v,y]),C=k.useMemo(()=>a??kl({year:c,initialDayOfYear:l,initialMinutes:u,timeZone:p},b),[a,l,u,b,p,c]),E=n??D,N=k.useMemo(()=>e?E:{...E,showProjectionDebugView:!1,showTileDiagnostics:!1},[e,E]),F=a??C,Y=k.useMemo(()=>y??(v?[{label:v.id,terrain:v}]:void 0),[v,y]),G=((B=Y==null?void 0:Y.find(({terrain:A})=>A.id===E.terrainSourceId))==null?void 0:B.terrain)??((ne=Y==null?void 0:Y[0])==null?void 0:ne.terrain);return k.useEffect(()=>{n||s(D)},[D,s,n]),k.useEffect(()=>{a||o(C)},[C,o,a]),i?z.jsx(jp,{location:b,state:E,setState:s,dateState:F,setDateState:o}):z.jsxs(z.Fragment,{children:[t&&z.jsx(zl,{position:T,order:R,children:z.jsx($c,{title:E.enabled?"Schattensimulation ausschalten":"Schattensimulation einschalten",placement:"right",children:z.jsx(Vl,{onClick:()=>s({...E,enabled:!E.enabled}),dataTestId:"shadow-simulation-control-button","aria-label":E.enabled?"Schattensimulation ausschalten":"Schattensimulation einschalten","aria-pressed":E.enabled,children:z.jsx(Fn,{icon:Yl,style:E.enabled?{color:Xp}:void 0})})})}),z.jsx(Vp,{tiledShadows:O,libreMap:t,shadowAreaMeters:h,terrain:G,mapLibreTerrain:g,terrainQuality:E.terrainQuality,location:b,state:N,dateState:F,setDateState:o}),E.controlStyle===na.CURVE&&z.jsx(k.Suspense,{fallback:null,children:z.jsx(Kp,{location:b,dateState:F,setDateState:o,onClose:()=>s({...E,controlStyle:na.QUICK})})}),E.showDisplaySettings&&z.jsx(k.Suspense,{fallback:null,children:z.jsx(qp,{tiledShadows:O,debugEnabled:e,state:E,setState:s,terrainSources:Y,map:t})}),e&&E.enabled&&E.showProjectionDebugView&&t&&z.jsx(k.Suspense,{fallback:null,children:z.jsx(Yp,{map:t,solarPosition:vi(F,b),settings:{showSunDebugVector:E.showSunDebugVector??!0,showTileBounds:E.showTileBounds??!0},onSettingsChange:A=>s({...E,...A}),onClose:()=>s({...E,showProjectionDebugView:!1})})})]})};export{ag as M,Lr as S,ng as a,ou as b,lu as c,cs as d,du as e,da as f,Jl as g,fg as h,dg as i,ug as j,og as k,sg as l,Zn as m,mg as n,hg as p,fa as r,eu as s,fu as u};
