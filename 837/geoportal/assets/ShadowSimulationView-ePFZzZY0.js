const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/shadow-projection-debug-publisher-DZzroiS7.js","assets/vendor-react-core-nSLEt-kx.js","assets/vendor-ui-BRGBpckI.js","assets/index-BPWjfuNZ.js","assets/vendor-ui-icons-B2g0E1lD.js","assets/vendor-cismap-l44rweJS.js","assets/vendor-leaflet-BCK9PR08.js","assets/vendor-cismap-DFOYsXcv.css","assets/vendor-cesium-qVYT48MC.js","assets/vendor-maplibre-BxIxTH3k.js","assets/index-C12fECmn.css","assets/shadow-sun-vector-CeKFxK1_.js","assets/ShadowProjectionDebugView-VkE8yPjC.js","assets/ViewStateVisualizer-D-2ZFDE_.js","assets/ShadowSimulationDisplaySettingsPanel-BzCatQRg.js","assets/ShadowSimulationCurveSettings-BX5R2cmD.js"])))=>i.map(i=>d[i]);
import{r as G,d as kc}from"./vendor-react-core-nSLEt-kx.js";import{O as Wc,d as Vc}from"./vendor-ui-BRGBpckI.js";import{b as Cr,ab as bi,ac as Zt,ad as Dr,ae as jc,af as vo,c as Lr,ag as Jn,ah as ie,ai as Be,aj as Ve,ak as yt,al as Nr,am as Ce,an as tr,ao as Lt,a1 as So,X as yo,_ as Yc,a3 as es,a4 as Jt,h as Kc,ap as To,aq as Se,ar as qt,as as Xt,I as z,at as Fr,au as J,av as ct,V as _,aw as qc,d as Pe,ax as wo,ay as Xc,az as $c,aA as _o,aB as P,aC as Ai,aD as xo,O as ts,aE as Eo,aF as $s,k as rs,aG as is,aH as Qs,aI as Qc,aJ as Zc,aK as Zs,aL as Jc,aM as el,aN as tl,aO as Ro,aP as At,aQ as rl,aR as bo,aS as il,aT as hi,aU as nl,J as Js,aV as je,aW as sl,D as Ao,aX as al,j as ol,aY as Ji,aZ as cl,a_ as ll,a$ as li,b0 as Mo,b1 as $t,b2 as ul,b3 as On,b4 as ns,b5 as Io,b6 as dl,b7 as hl,b8 as er,b9 as ml,ba as pl,bb as ea,bc as fl,bd as gl,be as bt,bf as ss,bg as Br,bh as mi,G as as,aa as Ge,bi as Qr,bj as vl,bk as Co,bl as Sl,bm as yl,bn as en,bo as ta,bp as Tl,bq as Do,w as wl,br as xe,bs as tn,bt as rn,bu as _l,bv as No,bw as xl,bx as El,by as nn,bz as Rl,bA as bl,bB as Al,bC as sn,bD as ra,bE as vr,bF as Ml,bG as Il,bH as Cl,bI as Dl,t as pi,bJ as Nl,bK as ia,bL as Pl,bM as Ol,bN as Ll,a0 as Fl,bO as Bl,bP as Hl,bQ as Ul,bR as Gl,bS as na,a6 as sa,a8 as zl}from"./index-BPWjfuNZ.js";import{F as Ln,be as kl,bk as Wl,y as Vl}from"./vendor-ui-icons-B2g0E1lD.js";import{a as jl}from"./vendor-maplibre-BxIxTH3k.js";import"./vendor-cismap-l44rweJS.js";import"./vendor-leaflet-BCK9PR08.js";const aa=20;class Yl{constructor(e,r=256*1024**2){this.renderer=e,this.maximumBytes=r,this.quad.frustumCulled=!1,this.scene.add(this.quad)}target=null;key=null;broken=!1;captures=0;reuses=0;scene=new Cr;camera=new bi;material=new Zt({glslVersion:Dr,uniforms:{color:{value:null},depth:{value:null}},vertexShader:`out vec2 uvCopy;
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
      }`,depthTest:!0,depthFunc:jc,depthWrite:!0,transparent:!0,blending:vo});quad=new Lr(new Jn(2,2),this.material);get stats(){return{captures:this.captures,reuses:this.reuses,bytes:this.target?this.target.width*this.target.height*aa:0,broken:this.broken}}invalidate(){this.key=null}render(e,r,i,n){var S,g;const s=this.renderer;if(this.broken||!Number.isInteger(r)||!Number.isInteger(i)||r<1||i<1||r>s.capabilities.maxTextureSize||i>s.capabilities.maxTextureSize||r*i*aa>this.maximumBytes||!s.extensions.has("EXT_color_buffer_float"))return this.releaseTarget(),n(),!1;const a=s.getRenderTarget(),o=s.getActiveCubeFace(),c=s.getActiveMipmapLevel(),l=s.getViewport(new ie),u=s.getScissor(new ie),d=s.getScissorTest(),p=s.getClearColor(new Be),f=s.getClearAlpha(),h=s.autoClear,v=()=>{s.setRenderTarget(a,o,c),s.setViewport(l),s.setScissor(u),s.setScissorTest(d),s.setClearColor(p,f),s.autoClear=h};try{if(((S=this.target)==null?void 0:S.width)!==r||((g=this.target)==null?void 0:g.height)!==i){this.releaseTarget(),this.target=new Ve(r,i,{type:yt,format:Nr,minFilter:Ce,magFilter:Ce,depthTexture:new tr(r,i,Lt),samples:0});try{s.initRenderTarget(this.target)}catch{return this.broken=!0,this.releaseTarget(),v(),n(),!1}}const x=JSON.stringify([e,r,i,s.outputColorSpace,s.toneMapping,s.toneMappingExposure,a==null?void 0:a.texture.colorSpace]);return s.autoClear=!1,this.key!==x?(this.key=null,s.setRenderTarget(this.target),s.setViewport(new ie(0,0,r,i)),s.setScissorTest(!1),s.setClearColor(0,0),s.clear(!0,!0,!1),n(),this.key=x,this.captures+=1):this.reuses+=1,v(),s.autoClear=!1,this.material.uniforms.color.value=this.target.texture,this.material.uniforms.depth.value=this.target.depthTexture,s.render(this.scene,this.camera),!0}catch(x){throw this.invalidate(),x}finally{v()}}releaseTarget(){var e,r,i;(r=(e=this.target)==null?void 0:e.depthTexture)==null||r.dispose(),(i=this.target)==null||i.dispose(),this.target=null,this.key=null}dispose(){this.releaseTarget(),this.broken=!0,this.material.dispose(),this.quad.geometry.dispose()}}const oa=(t,e,r,i,n)=>{const s=i+e,a=Math.floor(s),o=s-a;if(a===0)return{dateState:t,yearDayProgress:o};const c=n?{year:t.year,dayOfYear:(t.dayOfYear-1+a)%So(t.year)+1}:Yc(t,a);return{dateState:(n?{...t,...c}:es({...t,...c},r))??t,yearDayProgress:o}},ca=(t,e,r,i,n)=>{if(!n)return{dateState:{...t,minutes:(t.minutes+e)%1440},yearDayProgress:0};const s=yo(t,r),a=Math.ceil(s.sunriseMinutes),o=Math.floor(s.sunsetMinutes),l=(i&&(t.minutes<a||t.minutes>o)?a:t.minutes)+e;return{dateState:{...t,minutes:l>o?a+(i?(l-a)%Math.max(1,o-a):0):l},yearDayProgress:0}},Kl=(t,e,r,i,n,s={})=>{const a=e??r;if(!(t!=null&&t.enabled)||!t.isAnimating)return{dateState:a,yearDayProgress:n};const o=s.elapsedMs!==void 0,c=(t.animationMode??Jt.DAY)===Jt.YEAR,l=t.animationDaylightOnly!==!1,u=t.animationCycleSeconds;if(o&&u!==void 0&&u>0){const p=Math.max(0,s.elapsedMs??0)/(u*1e3);if(c)return oa(a,p*So(a.year),i,n,!0);const f=yo(a,i),h=l?Math.max(1,f.sunsetMinutes-f.sunriseMinutes):1440;return ca(a,p*h,i,!0,l)}const d=(t.animationSpeed??4)*(o?Math.max(0,s.elapsedMs??0)*60/1e3:1);return c?oa(a,d/(o?4:2),i,n,o):ca(a,d,i,o,l)},Zr=3,ql=.5,st=64,la=.01,ua=(t,e,r)=>Math.min(r**2,Math.max(st**2,Math.floor(t!==void 0&&Number.isFinite(t)&&t>0?t:e))),da=(t,e)=>{const{mapSize:r,maxMapSize:i,elevationSine:n,sunDiscGuardMeters:s,groundTexelFit:a}=e,o=t.right-t.left+2*s,c=t.top-t.bottom+2*s,l=Math.max(la,Math.abs(n)),d=2*(a?Zr+ql:Zr);let p=r,f=r,h=!1,v=!1;const S=e.groundTexelTargetMeters;if(S!==void 0&&(!Number.isFinite(S)||S<=0))throw new RangeError("Shadow ground texel target must be positive and finite");if(S!==void 0){const j=oe=>Math.max(st,2**Math.ceil(Math.log2(oe))),K=j(o/S+d),O=j(c/(S*l)+d);p=Math.min(i,K),f=Math.min(i,O),h=p<K||f<O}else if(a){const j=o*l/c,K=e.mapTexelBudget??r*r,O=d*(j+1),oe=K-d*d,C=2*oe/(O+Math.sqrt(O**2+4*j*oe)),k=j*C+d,X=C+d;h=k>i||X>i;const Y=Math.max(o,c)/(r-d),ue=Math.min(r,Math.max(st,Math.ceil((o/Y+d)/st)*st)),ce=Math.min(r,Math.max(st,Math.ceil((c/Y+d)/st)*st));v=k<ue||X<ce;const we=Math.min(Math.max(k,ue,K/i),i,K/ce),L=Q=>Math.floor(Q/st+1e-9)*st;p=Math.max(ue,L(we)),f=Math.max(ce,L(Math.min(i,K/p)))}const g=e.mapDimensions;g&&(v||(v=p!==g.width||f!==g.height),p=g.width,f=g.height);const x=o/Math.max(1,p-d),b=c/Math.max(1,f-d),I=Math.max(x,b,Number.EPSILON),R=a?x:I,D=a?b:I,A=Math.round((t.left+t.right)/2/R)*R,M=Math.round((t.bottom+t.top)/2/D)*D,B=R*p,N=D*f;return{left:A-B/2,right:A+B/2,bottom:M-N/2,top:M+N/2,mapWidth:p,mapHeight:f,metersPerTexelX:R,metersPerTexelY:D,guardMetersX:R*Zr,guardMetersY:D*Zr,groundTexelWidthMeters:R,groundTexelHeightMeters:Math.abs(n)>Number.EPSILON?D/Math.abs(n):1/0,groundTexelFitLimited:a&&(h||v||Math.abs(n)<la)}},Xl=(t,e,r)=>{if(r<=0)return{planarMeters:0,depthMeters:0};const i=Math.sqrt(Math.max(0,1-e**2)),n=i>Math.sin(r)?Math.asin(Math.sin(r)/i):Math.PI;return{planarMeters:2*t*Math.sin(Math.min(Math.PI,n+r)/2),depthMeters:2*t*Math.sin(r/2)}},Pr=Kc(.53/2),$l=Math.PI*(3-Math.sqrt(5)),Ql=(t,e)=>{const r=Math.max(1,Math.floor(e)),i=(Math.floor(t)%r+r)%r,n=Pr*Math.sqrt((i+.5)/r),s=i*$l;return{angularRadius:n,tangentA:Math.cos(s)*n,tangentB:Math.sin(s)*n}},Zl=t=>{const e=Math.floor(t/2)+1,r=t%2===0?1:-1;return[r*(e*.7548776662466927%1-.5),r*(e*.5698402909980532%1-.5)]},os=(t,e,r)=>es(e,r)??t,Jl=(t,e,r,i)=>os(t,{...t,year:e,dayOfYear:r},i),eu=(t,e,r=new Date)=>{const i=To(r,t.timeZone);return os(t,{...i,minutes:t.minutes},e)},tu=(t,e,r=new Date)=>{const i=To(r,t.timeZone);return es(i,e)??t},Fn=new WeakMap,Po=t=>{let e=Fn.get(t);return e||(e={owners:new Set,listeners:new Set},Fn.set(t,e)),e},Af=t=>{const e=G.useMemo(()=>Symbol("shadow-time-control"),[t]),r=G.useCallback(i=>{if(!t)return;const n=Po(t),s=n.owners.size>0;i?n.owners.add(e):n.owners.delete(e),s!==n.owners.size>0&&n.listeners.forEach(a=>a())},[t,e]);return G.useEffect(()=>()=>r(!1),[r]),r},ru=t=>{const e=G.useCallback(i=>{if(!t)return()=>{};const{listeners:n}=Po(t);return n.add(i),()=>{n.delete(i)}},[t]),r=G.useCallback(()=>{var i;return t!==null&&(((i=Fn.get(t))==null?void 0:i.owners.size)??0)>0},[t]);return G.useSyncExternalStore(e,r,()=>!1)},iu=(t,e)=>({latitude:(t==null?void 0:t.latitude)??e.latitude,longitude:(t==null?void 0:t.longitude)??e.longitude}),nu=(t,e)=>t.latitude===e.latitude&&t.longitude===e.longitude,ha=(t,e,r)=>{const i=t==null?void 0:t.getCenter();return iu(i?{latitude:i.lat,longitude:i.lng}:null,{latitude:e,longitude:r})},su=(t,e,r)=>{const[i,n]=G.useState(()=>ha(t,e,r));return G.useEffect(()=>{const s=()=>{const a=ha(t,e,r);n(o=>nu(o,a)?o:a)};if(s(),!!t)return t.on(Se.MOVE_END,s),()=>{t.off(Se.MOVE_END,s)}},[e,r,t]),i},Sr="flex h-9 min-w-0 items-center justify-center whitespace-nowrap rounded-md border border-neutral-300 bg-white px-1 text-center text-sm text-neutral-800 transition-colors hover:border-amber-500 hover:text-amber-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/40",Oo="h-8 whitespace-nowrap border-r border-neutral-300 px-3 text-sm text-neutral-700 transition-colors last:border-r-0 hover:text-amber-700",Mf=[{label:"120 FPS",value:qt.FPS_120},{label:"60 FPS",value:qt.FPS_60},{label:"30 FPS",value:qt.FPS_30},{label:"Ultra",value:qt.ULTRA}],If=[{label:"0,25 px",value:.25},{label:"0,5 px",value:.5},{label:"1 px",value:1},{label:"2 px",value:2},{label:"4 px",value:4}],Cf=[{value:Xt.HDR_16,label:"HDR · 16 Bit (Experiment)"},{value:Xt.HDR_16_32,label:"HDR · 16/32 Bit (Standard)"},{value:Xt.HDR_32,label:"HDR · 32 Bit (ohne MSAA)"},{value:Xt.SDR_8,label:"SDR · 8 Bit (Experiment)"}],au=t=>`${String(t).padStart(2,"0")}:00`,ou=(t,e,r)=>({"--shadow-range-progress":`${r>e?Math.max(0,Math.min(100,(t-e)/(r-e)*100)):0}%`});var cu={exports:{}};(function(t,e){(function(r,i){t.exports=i(Wc)})(kc,function(r){function i(c){return c&&typeof c=="object"&&"default"in c?c:{default:c}}var n=i(r),s={s:"ein paar Sekunden",m:["eine Minute","einer Minute"],mm:"%d Minuten",h:["eine Stunde","einer Stunde"],hh:"%d Stunden",d:["ein Tag","einem Tag"],dd:["%d Tage","%d Tagen"],M:["ein Monat","einem Monat"],MM:["%d Monate","%d Monaten"],y:["ein Jahr","einem Jahr"],yy:["%d Jahre","%d Jahren"]};function a(c,l,u){var d=s[u];return Array.isArray(d)&&(d=d[l?0:1]),d.replace("%d",c)}var o={name:"de",weekdays:"Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),weekdaysShort:"So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),weekdaysMin:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),months:"Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sept._Okt._Nov._Dez.".split("_"),ordinal:function(c){return c+"."},weekStart:1,yearStart:4,formats:{LTS:"HH:mm:ss",LT:"HH:mm",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY HH:mm",LLLL:"dddd, D. MMMM YYYY HH:mm"},relativeTime:{future:"in %s",past:"vor %s",s:a,m:a,mm:a,h:a,hh:a,d:a,dd:a,M:a,MM:a,y:a,yy:a}};return n.default.locale(o,null,!0),o})})(cu);const lu=({value:t,onChange:e})=>z.jsx("div",{role:"group","aria-label":"Animationsgeschwindigkeit",className:"flex shrink-0 overflow-hidden rounded-md border border-neutral-300",children:[1,4,12].map(r=>z.jsxs("button",{type:"button",className:`${Oo} px-3 ${t===r?"bg-amber-50 font-medium text-amber-700":"bg-white"}`,"aria-pressed":t===r,onClick:()=>e(r),children:[r,"×"]},r))}),uu=1e3/30,du=250,hu=({dateState:t,setDateState:e,location:r,shadowState:i,onFrame:n,realtime:s=!1})=>{const a=G.useRef(null),o=G.useRef(null),c=G.useRef(t),l=G.useRef(t),u=G.useRef(e),d=G.useRef(n);l.current=t,u.current=e,d.current=n;const{animationMode:p,animationSpeed:f,animationCycleSeconds:h,animationDaylightOnly:v,enabled:S,isAnimating:g}=i,x=S&&(g??!1);return G.useEffect(()=>{const b=t!==c.current;if(c.current=t,!!b){if(t===o.current){x||(a.current=null);return}a.current=null}},[x,t]),G.useEffect(()=>{if(!x)return;const b={animationMode:p,animationSpeed:f,animationCycleSeconds:h,animationDaylightOnly:v,enabled:S,isAnimating:g};let I=0,R=performance.now(),D=R;const A=K=>{o.current=K,u.current(K)},M=K=>{const O=a.current??l.current,oe=Kl(b,O,O,r,I,s?{elapsedMs:K-D}:void 0);D=K,I=oe.yearDayProgress,a.current=oe.dateState,d.current(oe.dateState),K-R>=du&&(R=K,A(oe.dateState))};let B=0;const N=K=>{M(K),B=requestAnimationFrame(N)},j=s?void 0:window.setInterval(()=>M(performance.now()),uu);return s&&(B=requestAnimationFrame(N)),()=>{j!==void 0&&window.clearInterval(j),s&&cancelAnimationFrame(B);const K=a.current;K&&K!==o.current&&A(K)}},[x,p,f,h,v,S,g,r,s]),a},ma=new WeakMap,pa=(t,e,r,i,n="shadow-and-color")=>{const s=()=>r.render(t,i);if(e===void 0)return s(),!0;const a=t.getObjectById(e);if(!a)return!1;let o=ma.get(a);if(!o){const l=new Set;a.traverse(u=>l.add(u)),ma.set(a,l),o=l}if(n==="color-only"){const l=new Set;for(let d=a.parent;d;d=d.parent)l.add(d);const u=[];t.traverse(d=>{d.isMesh&&d.visible&&!o.has(d)&&!l.has(d)&&(u.push(d),d.visible=!1)});try{return s(),!0}finally{for(const d of u)d.visible=!0}}const c=r.renderBufferDirect;r.renderBufferDirect=function(...l){const[u,,,,d]=l;u===i&&d.isMesh&&!o.has(d)||c.apply(this,l)};try{return s(),!0}finally{r.renderBufferDirect=c}},fa=[[0,1],[1,3],[3,2],[2,0],[4,5],[5,7],[7,6],[6,4],[0,4],[1,5],[2,6],[3,7]],mu=({min:t,max:e})=>[new _(t.x,t.y,t.z),new _(e.x,t.y,t.z),new _(t.x,e.y,t.z),new _(e.x,e.y,t.z),new _(t.x,t.y,e.z),new _(e.x,t.y,e.z),new _(t.x,e.y,e.z),new _(e.x,e.y,e.z)],pu=t=>[t.coordinateSystem===qc?0:-1,1].flatMap(r=>[-1,1].flatMap(i=>[-1,1].map(n=>new _(n,i,r).unproject(t)))),an=(t,e,r)=>t.every(i=>i.distanceToPoint(e)>=-r),ga=(t,e,r)=>e.x>=t.min.x-r&&e.x<=t.max.x+r&&e.y>=t.min.y-r&&e.y<=t.max.y+r&&e.z>=t.min.z-r&&e.z<=t.max.z+r,Bn=(t,e,r)=>{t.some(i=>i.distanceToSquared(e)<=r)||t.push(e)},va=(t,e,r,i,n,s)=>{const a=e.clone().sub(t);for(const o of r){const c=o.distanceToPoint(t),l=o.distanceToPoint(e),u=c-l;if(Math.abs(u)<=Number.EPSILON)continue;const d=c/u;if(d<0||d>1)continue;const p=t.clone().addScaledVector(a,d);i(p)&&Bn(n,p,s)}},Lo=(t,e,r=1e-6)=>{if(e.isEmpty())return[];t.updateMatrixWorld(!0);const i=new Fr().setFromProjectionMatrix(new J().multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),t.coordinateSystem,t.reversedDepth);if(!i.intersectsBox(e))return[];const n=r*r,s=mu(e),a=pu(t),o=[];for(const l of s)an(i.planes,l,r)&&Bn(o,l,n);for(const l of a)ga(e,l,r)&&Bn(o,l,n);for(const[l,u]of fa)va(s[l],s[u],i.planes,d=>an(i.planes,d,r),o,n);const c=[new ct(new _(1,0,0),-e.min.x),new ct(new _(-1,0,0),e.max.x),new ct(new _(0,1,0),-e.min.y),new ct(new _(0,-1,0),e.max.y),new ct(new _(0,0,1),-e.min.z),new ct(new _(0,0,-1),e.max.z)];for(const[l,u]of fa)va(a[l],a[u],c,d=>ga(e,d,r)&&an(i.planes,d,r),o,n);return o},Fo=(t,e)=>{const r=Hr(t).map(o=>new ie(o.x,o.y,o.z,1).applyMatrix4(e));if(r.some(o=>o.w<=0))return new ie(0,0,1,1);const i=Math.max(0,(Math.min(...r.map(o=>o.x/o.w))+1)/2),n=Math.max(0,(Math.min(...r.map(o=>o.y/o.w))+1)/2),s=Math.min(1,(Math.max(...r.map(o=>o.x/o.w))+1)/2),a=Math.min(1,(Math.max(...r.map(o=>o.y/o.w))+1)/2);return new ie(i,n,Math.max(0,s-i),Math.max(0,a-n))},Hr=t=>[t.min.x,t.max.x].flatMap(e=>[t.min.y,t.max.y].flatMap(r=>[t.min.z,t.max.z].map(i=>new _(e,r,i)))),Bo=(t,e,r)=>{const i=e.elements,n=Hr(t).map(o=>new ie(o.x,o.y,o.z,1).applyMatrix4(e)),s=Math.min(...n.map(o=>o.w));if(s<=0)return 1/0;let a=0;for(const[o,c]of[[0,r.x],[1,r.y]])for(let l=0;l<3;l+=1){const u=Math.max(...n.map(d=>Math.abs(i[l*4+o]*d.w-(o===0?d.x:d.y)*i[l*4+3])));a+=(c*.5*u/(s*s))**2}return Math.sqrt(a)},fu=(t,e,r,i)=>{if(!(i>0&&Number.isFinite(i))||!(r.x>0&&r.y>0))throw new RangeError("Shadow page projection requires a positive pixel target and viewport");const n=new J().multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),s=new Set;for(const{id:o,bounds:c}of t){if(s.has(o)||c.isEmpty()||![...c.min.toArray(),...c.max.toArray()].every(Number.isFinite))throw new RangeError("Receiver cells require unique IDs and finite, nonempty bounds");s.add(o)}const a=new Fr().setFromProjectionMatrix(n);return t.filter(({bounds:o})=>a.intersectsBox(o)).map(o=>({...o,screenBounds:Fo(o.bounds,n),groundTexelTargetMeters:Math.max(1e-9,i/Bo(o.bounds,n,r))}))},gu=(t,e,r,i,n)=>t.clone().union(t.clone().translate(e.clone().normalize().multiplyScalar(r))).expandByScalar(2*r*Math.sin(i/2)+n),vu=(t,e)=>t.flatMap(({bounds:r})=>Lo(e,r).length>0?Hr(r):[]),Jr={WEST:"west",EAST:"east",SOUTH:"south",NORTH:"north"},yr=({bounds:t})=>(t.max.x-t.min.x)*(t.max.z-t.min.z),Su=(t,e)=>t.min.z===e.min.z&&t.max.z===e.max.z&&(t.max.x===e.min.x||e.max.x===t.min.x)||t.min.x===e.min.x&&t.max.x===e.max.x&&(t.max.z===e.min.z||e.max.z===t.min.z),yu=t=>{const e=new Map(t.map(i=>[i.id,i]));let r=!0;for(;r;){r=!1;for(const i of e.values()){if(Math.min(i.bounds.max.x-i.bounds.min.x,i.bounds.max.z-i.bounds.min.z)>=i.fragmentMergeWidthMeters)continue;const s=yr(i),a=[...e.values()].filter(o=>o!==i&&(yr(o)>s||yr(o)===s&&o.id<i.id)&&Su(i.bounds,o.bounds)).sort((o,c)=>yr(c)-yr(o)||(o.id<c.id?-1:o.id>c.id?1:0))[0];if(a){e.set(a.id,{...a,bounds:a.bounds.clone().union(i.bounds)}),e.delete(i.id),r=!0;break}}}return[...e.values()].map(({id:i,bounds:n})=>({id:i,bounds:n}))},on=t=>({west:t.min.x,east:t.max.x,south:t.min.z,north:t.max.z}),Ho=(t,e)=>t.west<e.east&&t.east>e.west&&t.south<e.north&&t.north>e.south,Tu=(t,e,r)=>{if(!Ho(t,e))return[t];const i=Math.max(t.west,e.west),n=Math.min(t.east,e.east),s=Math.max(t.south,e.south),a=Math.min(t.north,e.north);return[{...t,east:i,side:Jr.WEST},{...t,west:n,side:Jr.EAST},{west:i,east:n,south:t.south,north:s,side:Jr.SOUTH},{west:i,east:n,south:a,north:t.north,side:Jr.NORTH}].filter(o=>o.west<o.east&&o.south<o.north).map(({side:o,...c})=>({...c,splitPath:[...t.splitPath,r,o]}))},wu=t=>{const e=new Set;for(const{id:n,bounds:s}of t){if(e.has(n)||s.isEmpty()||![...s.min.toArray(),...s.max.toArray()].every(Number.isFinite))throw new RangeError("Receiver tiles require unique IDs and finite bounds");e.add(n)}const r=[...t].sort((n,s)=>n.id<s.id?-1:n.id>s.id?1:0);if(r.every(({receiverObjectId:n})=>n!==void 0))return r;const i=r.flatMap(({id:n,bounds:s},a)=>{const o=on(s);return o.west===o.east||o.south===o.north?[]:r.slice(0,a).reduce((l,u)=>l.flatMap(d=>Tu(d,on(u.bounds),u.id)),[{...o,splitPath:[]}]).map(l=>{const u=r.reduce((d,p)=>Ho(l,on(p.bounds))?[Math.min(d[0],p.bounds.min.y),Math.max(d[1],p.bounds.max.y)]:d,[s.min.y,s.max.y]);return{fragmentMergeWidthMeters:l.splitPath.length===0?0:Math.max(.1,.01*Math.min(o.east-o.west,o.north-o.south)),id:l.splitPath.length===0?n:JSON.stringify([n,...l.splitPath]),bounds:new Pe(new _(l.west,u[0],l.south),new _(l.east,u[1],l.north))}})});return yu(i)},_u=(t,e=16)=>{if(!Number.isInteger(e)||e<=0||t.length===0)return[];const i=t.reduce((c,l)=>c.union(l.bounds),new Pe).getCenter(new _),n=new Set(t.map(({id:c})=>c)),s=new Map;for(const c of t){const l=c.bounds.max.x-c.bounds.min.x;if(!(l>0&&Number.isFinite(l)))continue;const u=Math.round(c.bounds.min.x/l),d=Math.round(c.bounds.min.z/l);for(let p=-1;p<=1;p+=1)for(let f=-1;f<=1;f+=1){const h=`${l}:${u+p}:${d+f}`;n.has(h)||s.has(h)||s.set(h,{id:h,bounds:c.bounds.clone().translate(new _(p*l,0,f*l))})}}const a=Array.from({length:8},()=>[]);for(const c of s.values()){const l=c.bounds.getCenter(new _).sub(i),u=(Math.round(Math.atan2(l.z,l.x)/(Math.PI/4))+8)%8;a[u].push(c)}for(const c of a)c.sort((l,u)=>l.bounds.distanceToPoint(i)-u.bounds.distanceToPoint(i)||l.id.localeCompare(u.id));const o=[];for(let c=0;o.length<e;c+=1){const l=a.flatMap(u=>u[c]?[u[c]]:[]);if(l.length===0)break;o.push(...l.slice(0,e-o.length))}return o},xu=(t,e)=>{const r=t.getCenter(new _);let i=null,n=1/0;for(const s of e){const a=s.receiverBounds.distanceToPoint(r);a<n&&Number.isInteger(s.terrainLevel)&&(n=a,i=s.terrainLevel)}return i};/**
 * postprocessing v6.39.5 build Wed Sep 09 2026
 * https://github.com/pmndrs/postprocessing
 * Copyright 2015-2026 Raoul van Rüschen
 * @license Zlib
 */var Eu=(()=>{const t=new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),e=new Float32Array([0,0,2,0,0,2]),r=new Eo;return r.setAttribute("position",new $s(t,3)),r.setAttribute("uv",new $s(e,2)),r})(),Ru=class Hn{static get fullscreenGeometry(){return Eu}constructor(e="Pass",r=new Cr,i=new ts){this.name=e,this.renderer=null,this.scene=r,this.camera=i,this.screen=null,this.rtt=!0,this.needsSwap=!0,this.needsDepthBlit=!1,this.needsDepthTexture=!1,this.enabled=!0}get renderToScreen(){return!this.rtt}set renderToScreen(e){if(this.rtt===e){const r=this.fullscreenMaterial;r!==null&&(r.needsUpdate=!0),this.rtt=!e}}set mainScene(e){}set mainCamera(e){}setRenderer(e){this.renderer=e}isEnabled(){return this.enabled}setEnabled(e){this.enabled=e}get fullscreenMaterial(){return this.screen!==null?this.screen.material:null}set fullscreenMaterial(e){let r=this.screen;r!==null?r.material=e:(r=new Lr(Hn.fullscreenGeometry,e),r.frustumCulled=!1,this.scene===null&&(this.scene=new Cr),this.scene.add(r),this.screen=r)}getFullscreenMaterial(){return this.fullscreenMaterial}setFullscreenMaterial(e){this.fullscreenMaterial=e}getDepthTexture(){return null}setDepthTexture(e,r=_o){}render(e,r,i,n,s){throw new Error("Render method not implemented!")}setSize(e,r){}initialize(e,r,i){}dispose(){for(const e of Object.keys(this)){const r=this[e];(r instanceof Ve||r instanceof Ai||r instanceof xo||r instanceof Hn)&&this[e].dispose()}this.fullscreenMaterial!==null&&this.fullscreenMaterial.dispose()}},Uo={NONE:0,DEPTH:1,CONVOLUTION:2},te={SKIP:9,SET:30,ADD:0,ALPHA:1,AVERAGE:2,COLOR:3,COLOR_BURN:4,COLOR_DODGE:5,DARKEN:6,DIFFERENCE:7,DIVIDE:8,DST:9,EXCLUSION:10,HARD_LIGHT:11,HARD_MIX:12,HUE:13,INVERT:14,INVERT_RGB:15,LIGHTEN:16,LINEAR_BURN:17,LINEAR_DODGE:18,LINEAR_LIGHT:19,LUMINOSITY:20,MULTIPLY:21,NEGATION:22,NORMAL:23,OVERLAY:24,PIN_LIGHT:25,REFLECT:26,SATURATION:27,SCREEN:28,SOFT_LIGHT:29,SRC:30,SUBTRACT:31,VIVID_LIGHT:32},bu="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Au="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,src.a*opacity);}",Mu="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=(dst.rgb+src.rgb)*0.5;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Iu="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.xy,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Cu="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=mix(step(0.0,b)*(1.0-min(vec3(1.0),(1.0-a)/max(b,1e-9))),vec3(1.0),step(1.0,a));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Du="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=step(0.0,a)*mix(min(vec3(1.0),a/max(1.0-b,1e-9)),vec3(1.0),step(1.0,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Nu="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Pu="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=abs(dst.rgb-src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Ou="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb/max(src.rgb,1e-9);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Lu="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-2.0*dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Fu="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb,1.0);vec3 b=min(src.rgb,1.0);vec3 c=mix(2.0*a*b,1.0-2.0*(1.0-a)*(1.0-b),step(0.5,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Bu="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=step(1.0,dst.rgb+src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Hu="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.x,a.yz));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Uu="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Gu="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=src.rgb*max(1.0-dst.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",zu="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",ku="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Wu="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb+src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Vu="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(2.0*src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",ju="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.xy,b.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Yu="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Ku="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-abs(1.0-dst.rgb-src.rgb),0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",qu="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,opacity);}",Xu="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=2.0*src.rgb*dst.rgb;vec3 b=1.0-2.0*(1.0-src.rgb)*(1.0-dst.rgb);vec3 c=mix(a,b,step(0.5,dst.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",$u="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 c=mix(mix(src2,dst.rgb,step(0.5*dst.rgb,src.rgb)),max(src2-1.0,vec3(0.0)),step(dst.rgb,src2-1.0));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Qu="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb*dst.rgb/max(1.0-src.rgb,1e-9),1.0);vec3 c=mix(a,src.rgb,step(1.0,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Zu="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.x,b.y,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Ju="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-min(dst.rgb*src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",ed="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 d=dst.rgb+(src2-1.0);vec3 w=step(0.5,src.rgb);vec3 a=dst.rgb-(1.0-src2)*dst.rgb*(1.0-dst.rgb);vec3 b=mix(d*(sqrt(dst.rgb)-dst.rgb),d*dst.rgb*((16.0*dst.rgb-12.0)*dst.rgb+3.0),w*(1.0-step(0.25,dst.rgb)));vec3 c=mix(a,b,w);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",td="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return src;}",rd="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",id="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=mix(max(1.0-min((1.0-dst.rgb)/(2.0*src.rgb),1.0),0.0),min(dst.rgb/(2.0*(1.0-src.rgb)),1.0),step(0.5,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",nd=new Map([[te.ADD,bu],[te.ALPHA,Au],[te.AVERAGE,Mu],[te.COLOR,Iu],[te.COLOR_BURN,Cu],[te.COLOR_DODGE,Du],[te.DARKEN,Nu],[te.DIFFERENCE,Pu],[te.DIVIDE,Ou],[te.DST,null],[te.EXCLUSION,Lu],[te.HARD_LIGHT,Fu],[te.HARD_MIX,Bu],[te.HUE,Hu],[te.INVERT,Uu],[te.INVERT_RGB,Gu],[te.LIGHTEN,zu],[te.LINEAR_BURN,ku],[te.LINEAR_DODGE,Wu],[te.LINEAR_LIGHT,Vu],[te.LUMINOSITY,ju],[te.MULTIPLY,Yu],[te.NEGATION,Ku],[te.NORMAL,qu],[te.OVERLAY,Xu],[te.PIN_LIGHT,$u],[te.REFLECT,Qu],[te.SATURATION,Zu],[te.SCREEN,Ju],[te.SOFT_LIGHT,ed],[te.SRC,td],[te.SUBTRACT,rd],[te.VIVID_LIGHT,id]]),sd=class extends wo{constructor(t,e=1){super(),this._blendFunction=t,this.opacity=new P(e)}getOpacity(){return this.opacity.value}setOpacity(t){this.opacity.value=t}get blendFunction(){return this._blendFunction}set blendFunction(t){this._blendFunction=t,this.dispatchEvent({type:"change"})}getBlendFunction(){return this.blendFunction}setBlendFunction(t){this.blendFunction=t}getShaderCode(){return nd.get(this.blendFunction)}},ad=class extends wo{constructor(t,e,{attributes:r=Uo.NONE,blendFunction:i=te.NORMAL,defines:n=new Map,uniforms:s=new Map,extensions:a=null,vertexShader:o=null}={}){super(),this.name=t,this.renderer=null,this.attributes=r,this.fragmentShader=e,this.vertexShader=o,this.defines=n,this.uniforms=s,this.extensions=a,this.blendMode=new sd(i),this.blendMode.addEventListener("change",c=>this.setChanged()),this._inputColorSpace=Xc,this._outputColorSpace=$c}get inputColorSpace(){return this._inputColorSpace}set inputColorSpace(t){this._inputColorSpace=t,this.setChanged()}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t,this.setChanged()}set mainScene(t){}set mainCamera(t){}getName(){return this.name}setRenderer(t){this.renderer=t}getDefines(){return this.defines}getUniforms(){return this.uniforms}getExtensions(){return this.extensions}getBlendMode(){return this.blendMode}getAttributes(){return this.attributes}setAttributes(t){this.attributes=t,this.setChanged()}getFragmentShader(){return this.fragmentShader}setFragmentShader(t){this.fragmentShader=t,this.setChanged()}getVertexShader(){return this.vertexShader}setVertexShader(t){this.vertexShader=t,this.setChanged()}setChanged(){this.dispatchEvent({type:"change"})}setDepthTexture(t,e=_o){}update(t,e,r){}setSize(t,e){}initialize(t,e,r){}dispose(){for(const t of Object.keys(this)){const e=this[t];(e instanceof Ve||e instanceof Ai||e instanceof xo||e instanceof Ru)&&this[t].dispose()}}},od="Invariant failed";function fi(t,e){if(!t)throw new Error(od)}const cd=new _;function Go(t,e,r=new _,i){const{x:n,y:s,z:a}=t,o=e.x,c=e.y,l=e.z,u=n*n*o,d=s*s*c,p=a*a*l,f=u+d+p,h=Math.sqrt(1/f);if(!Number.isFinite(h))return;const v=cd.copy(t).multiplyScalar(h);if(f<((i==null?void 0:i.centerTolerance)??.1))return r.copy(v);const S=v.multiply(e).multiplyScalar(2);let g=(1-h)*t.length()/(S.length()/2),x=0,b,I,R,D;do{g-=x,b=1/(1+g*o),I=1/(1+g*c),R=1/(1+g*l);const A=b*b,M=I*I,B=R*R,N=A*b,j=M*I,K=B*R;D=u*A+d*M+p*B-1,x=D/((u*N*o+d*j*c+p*K*l)*-2)}while(Math.abs(D)>1e-12);return r.set(n*b,s*I,a*R)}const jt=new _,cn=new _,ln=new _,Un=class{constructor(e,r,i){this.radii=new _(e,r,i)}get minimumRadius(){return Math.min(this.radii.x,this.radii.y,this.radii.z)}get maximumRadius(){return Math.max(this.radii.x,this.radii.y,this.radii.z)}get flattening(){return 1-this.minimumRadius/this.maximumRadius}get eccentricity(){return Math.sqrt(this.eccentricitySquared)}get eccentricitySquared(){const e=this.maximumRadius**2,r=this.minimumRadius**2;return(e-r)/e}reciprocalRadii(e=new _){const{x:r,y:i,z:n}=this.radii;return e.set(1/r,1/i,1/n)}reciprocalRadiiSquared(e=new _){const{x:r,y:i,z:n}=this.radii;return e.set(1/r**2,1/i**2,1/n**2)}projectOnSurface(e,r=new _,i){return Go(e,this.reciprocalRadiiSquared(),r,i)}getSurfaceNormal(e,r=new _){return r.multiplyVectors(this.reciprocalRadiiSquared(jt),e).normalize()}getEastNorthUpVectors(e,r=new _,i=new _,n=new _){this.getSurfaceNormal(e,n),r.set(-e.y,e.x,0).normalize(),i.crossVectors(n,r).normalize()}getEastNorthUpFrame(e,r=new J){const i=jt,n=cn,s=ln;return this.getEastNorthUpVectors(e,i,n,s),r.makeBasis(i,n,s).setPosition(e)}getNorthUpEastFrame(e,r=new J){const i=jt,n=cn,s=ln;return this.getEastNorthUpVectors(e,i,n,s),r.makeBasis(n,s,i).setPosition(e)}getIntersection(e,r=new _){const i=this.reciprocalRadii(jt),n=cn.copy(i).multiply(e.origin),s=ln.copy(i).multiply(e.direction),a=n.lengthSq(),o=s.lengthSq(),c=n.dot(s),l=c**2-o*(a-1);if(a===1)return r.copy(e.origin);if(a>1){if(c>=0||l<0)return;const u=Math.sqrt(l),d=(-c-u)/o,p=(-c+u)/o;return e.at(Math.min(d,p),r)}if(a<1){const u=c**2-o*(a-1),d=Math.sqrt(u),p=(-c+d)/o;return e.at(p,r)}if(c<0)return e.at(-c/o,r)}getOsculatingSphereCenter(e,r,i=new _){fi(this.radii.x===this.radii.y);const n=this.radii.x**2,s=this.radii.z**2,a=jt.set(e.x/n,e.y/n,e.z/s).normalize();return i.copy(a.multiplyScalar(-r).add(e))}getNormalAtHorizon(e,r,i=new _){fi(this.radii.x===this.radii.y);const n=this.radii.x**2,s=this.radii.z**2,a=e,o=r;let c=(a.x*o.x+a.y*o.y)/n+a.z*o.z/s;c/=(a.x**2+a.y**2)/n+a.z**2/s;const l=jt.copy(o).multiplyScalar(-c).add(e);return i.set(l.x/n,l.y/n,l.z/s).normalize()}};Un.WGS84=new Un(6378137,6378137,6356752314245179e-9);let lt=Un;const ei=new _,Sa=new _,Er=class Gn{constructor(e=0,r=0,i=0){this.longitude=e,this.latitude=r,this.height=i}set(e,r,i){return this.longitude=e,this.latitude=r,i!=null&&(this.height=i),this}clone(){return new Gn(this.longitude,this.latitude,this.height)}copy(e){return this.longitude=e.longitude,this.latitude=e.latitude,this.height=e.height,this}equals(e){return e.longitude===this.longitude&&e.latitude===this.latitude&&e.height===this.height}setLongitude(e){return this.longitude=e,this}setLatitude(e){return this.latitude=e,this}setHeight(e){return this.height=e,this}normalize(){return this.longitude<Gn.MIN_LONGITUDE&&(this.longitude+=Math.PI*2),this}setFromECEF(e,r){const i=((r==null?void 0:r.ellipsoid)??lt.WGS84).reciprocalRadiiSquared(ei),n=Go(e,i,Sa,r);if(n==null)throw new Error(`Could not project position to ellipsoid surface: ${e.toArray()}`);const s=ei.multiplyVectors(n,i).normalize();this.longitude=Math.atan2(s.y,s.x),this.latitude=Math.asin(s.z);const a=ei.subVectors(e,n);return this.height=Math.sign(a.dot(e))*a.length(),this}toECEF(e=new _,r){const i=(r==null?void 0:r.ellipsoid)??lt.WGS84,n=ei.multiplyVectors(i.radii,i.radii),s=Math.cos(this.latitude),a=Sa.set(s*Math.cos(this.longitude),s*Math.sin(this.longitude),Math.sin(this.latitude)).normalize();return e.multiplyVectors(n,a),e.divideScalar(Math.sqrt(a.dot(e))).add(a.multiplyScalar(this.height))}fromArray(e,r=0){return this.longitude=e[r],this.latitude=e[r+1],this.height=e[r+2],this}toArray(e=[],r=0){return e[r]=this.longitude,e[r+1]=this.latitude,e[r+2]=this.height,e}*[Symbol.iterator](){yield this.longitude,yield this.latitude,yield this.height}};Er.MIN_LONGITUDE=-Math.PI,Er.MAX_LONGITUDE=Math.PI,Er.MIN_LATITUDE=-Math.PI/2,Er.MAX_LATITUDE=Math.PI/2;let zo=Er;class ld extends is{load(e,r,i,n){const s=new Qc(this.manager);s.setResponseType("arraybuffer"),s.setRequestHeader(this.requestHeader),s.setPath(this.path),s.setWithCredentials(this.withCredentials),s.load(e,a=>{fi(a instanceof ArrayBuffer);try{r(a)}catch(o){n!=null?n(o):console.error(o),this.manager.itemError(e)}},i,n)}}const ud="This is not an object",dd="This is not a Float16Array object",ya="This constructor is not a subclass of Float16Array",ko="The constructor property value is not an object",hd="Species constructor didn't return TypedArray object",md="Derived constructor created TypedArray object which was too small length",Ar="Attempting to access detached ArrayBuffer",zn="Cannot convert undefined or null to object",kn="Cannot mix BigInt and other types, use explicit conversions",Ta="@@iterator property is not callable",wa="Reduce of empty array with no initial value",pd="The comparison function must be either a function or undefined",un="Offset is out of bounds";function he(t){return(e,...r)=>Fe(t,e,r)}function sr(t,e){return he(rr(t,e).get)}const{apply:Fe,construct:Rr,defineProperty:fd,get:dn,getOwnPropertyDescriptor:rr,getPrototypeOf:Ur,has:Wn,ownKeys:Wo,set:_a,setPrototypeOf:Vo}=Reflect,gd=Proxy,{EPSILON:vd,MAX_SAFE_INTEGER:xa,isFinite:jo,isNaN:ir}=Number,{iterator:ut,species:Sd,toStringTag:cs,for:yd}=Symbol,nr=Object,{create:Mi,defineProperty:Gr,freeze:Td,is:Ea}=nr,Vn=nr.prototype,wd=Vn.__lookupGetter__?he(Vn.__lookupGetter__):(t,e)=>{if(t==null)throw fe(zn);let r=nr(t);do{const i=rr(r,e);if(i!==void 0)return Tt(i,"get")?i.get:void 0}while((r=Ur(r))!==null)},Tt=nr.hasOwn||he(Vn.hasOwnProperty),Yo=Array,Ko=Yo.isArray,Ii=Yo.prototype,_d=he(Ii.join),xd=he(Ii.push),Ed=he(Ii.toLocaleString),ls=Ii[ut],Rd=he(ls),{abs:bd,trunc:qo}=Math,Ci=ArrayBuffer,Ad=Ci.isView,Xo=Ci.prototype,Md=he(Xo.slice),Id=sr(Xo,"byteLength"),jn=typeof SharedArrayBuffer<"u"?SharedArrayBuffer:null,Cd=jn&&sr(jn.prototype,"byteLength"),us=Ur(Uint8Array),Dd=us.from,be=us.prototype,Nd=be[ut],Pd=he(be.keys),Od=he(be.values),Ld=he(be.entries),Fd=he(be.set),Ra=he(be.reverse),Bd=he(be.fill),Hd=he(be.copyWithin),ba=he(be.sort),Tr=he(be.slice),Ud=he(be.subarray),Ee=sr(be,"buffer"),Nt=sr(be,"byteOffset"),se=sr(be,"length"),$o=sr(be,cs),Gd=Uint8Array,Ue=Uint16Array,Aa=(...t)=>Fe(Dd,Ue,t),ds=Uint32Array,zd=Float32Array,Ft=Ur([][ut]()),Di=he(Ft.next),kd=he(function*(){}().next),Wd=Ur(Ft),Vd=DataView.prototype,jd=he(Vd.getUint16),fe=TypeError,hn=RangeError,Qo=WeakSet,Zo=Qo.prototype,Yd=he(Zo.add),Kd=he(Zo.has),Ni=WeakMap,hs=Ni.prototype,gi=he(hs.get),qd=he(hs.has),ms=he(hs.set),Jo=new Ni,Xd=Mi(null,{next:{value:function(){const t=gi(Jo,this);return Di(t)}},[ut]:{value:function(){return this}}});function br(t){if(t[ut]===ls&&Ft.next===Di)return t;const e=Mi(Xd);return ms(Jo,e,Rd(t)),e}const ec=new Ni,tc=Mi(Wd,{next:{value:function(){const t=gi(ec,this);return kd(t)},writable:!0,configurable:!0}});for(const t of Wo(Ft))t!=="next"&&Gr(tc,t,rr(Ft,t));function Ma(t){const e=Mi(tc);return ms(ec,e,t),e}function vi(t){return t!==null&&typeof t=="object"||typeof t=="function"}function Ia(t){return t!==null&&typeof t=="object"}function Si(t){return $o(t)!==void 0}function Yn(t){const e=$o(t);return e==="BigInt64Array"||e==="BigUint64Array"}function $d(t){try{return Ko(t)?!1:(Id(t),!0)}catch{return!1}}function rc(t){if(jn===null)return!1;try{return Cd(t),!0}catch{return!1}}function Qd(t){return $d(t)||rc(t)}function Ca(t){return Ko(t)?t[ut]===ls&&Ft.next===Di:!1}function Zd(t){return Si(t)?t[ut]===Nd&&Ft.next===Di:!1}function ti(t){if(typeof t!="string")return!1;const e=+t;return t!==e+""||!jo(e)?!1:e===qo(e)}const yi=yd("__Float16Array__");function Jd(t){if(!Ia(t))return!1;const e=Ur(t);if(!Ia(e))return!1;const r=e.constructor;if(r===void 0)return!1;if(!vi(r))throw fe(ko);return Wn(r,yi)}const Kn=1/vd;function eh(t){return t+Kn-Kn}const ic=6103515625e-14,th=65504,nc=.0009765625,Da=nc*ic,rh=nc*Kn;function ih(t){const e=+t;if(!jo(e)||e===0)return e;const r=e>0?1:-1,i=bd(e);if(i<ic)return r*eh(i/Da)*Da;const n=(1+rh)*i,s=n-(n-i);return s>th||ir(s)?r*(1/0):r*s}const sc=new Ci(4),ac=new zd(sc),oc=new ds(sc),Je=new Ue(512),et=new Gd(512);for(let t=0;t<256;++t){const e=t-127;e<-24?(Je[t]=0,Je[t|256]=32768,et[t]=24,et[t|256]=24):e<-14?(Je[t]=1024>>-e-14,Je[t|256]=1024>>-e-14|32768,et[t]=-e-1,et[t|256]=-e-1):e<=15?(Je[t]=e+15<<10,Je[t|256]=e+15<<10|32768,et[t]=13,et[t|256]=13):e<128?(Je[t]=31744,Je[t|256]=64512,et[t]=24,et[t|256]=24):(Je[t]=31744,Je[t|256]=64512,et[t]=13,et[t|256]=13)}function at(t){ac[0]=ih(t);const e=oc[0],r=e>>23&511;return Je[r]+((e&8388607)>>et[r])}const ps=new ds(2048);for(let t=1;t<1024;++t){let e=t<<13,r=0;for(;!(e&8388608);)e<<=1,r-=8388608;e&=-8388609,r+=947912704,ps[t]=e|r}for(let t=1024;t<2048;++t)ps[t]=939524096+(t-1024<<13);const ar=new ds(64);for(let t=1;t<31;++t)ar[t]=t<<23;ar[31]=1199570944;ar[32]=2147483648;for(let t=33;t<63;++t)ar[t]=2147483648+(t-32<<23);ar[63]=3347054592;const cc=new Ue(64);for(let t=1;t<64;++t)t!==32&&(cc[t]=1024);function ae(t){const e=t>>10;return oc[0]=ps[cc[e]+(t&1023)]+ar[e],ac[0]}function St(t){const e=+t;return ir(e)||e===0?0:qo(e)}function mn(t){const e=St(t);return e<0?0:e<xa?e:xa}function ri(t,e){if(!vi(t))throw fe(ud);const r=t.constructor;if(r===void 0)return e;if(!vi(r))throw fe(ko);return r[Sd]??e}function Mr(t){if(rc(t))return!1;try{return Md(t,0,0),!1}catch{}return!0}function Na(t,e){const r=ir(t),i=ir(e);if(r&&i)return 0;if(r)return 1;if(i||t<e)return-1;if(t>e)return 1;if(t===0&&e===0){const n=Ea(t,0),s=Ea(e,0);if(!n&&s)return-1;if(n&&!s)return 1}return 0}const fs=2,Ti=new Ni;function Qt(t){return qd(Ti,t)||!Ad(t)&&Jd(t)}function ne(t){if(!Qt(t))throw fe(dd)}function ii(t,e){const r=Qt(t),i=Si(t);if(!r&&!i)throw fe(hd);if(typeof e=="number"){let n;if(r){const s=q(t);n=se(s)}else n=se(t);if(n<e)throw fe(md)}if(Yn(t))throw fe(kn)}function q(t){const e=gi(Ti,t);if(e!==void 0){const n=Ee(e);if(Mr(n))throw fe(Ar);return e}const r=t.buffer;if(Mr(r))throw fe(Ar);const i=Rr(dt,[r,t.byteOffset,t.length],t.constructor);return gi(Ti,i)}function Pa(t){const e=se(t),r=[];for(let i=0;i<e;++i)r[i]=ae(t[i]);return r}const lc=new Qo;for(const t of Wo(be)){if(t===cs)continue;const e=rr(be,t);Tt(e,"get")&&typeof e.get=="function"&&Yd(lc,e.get)}const nh=Td({get(t,e,r){return ti(e)&&Tt(t,e)?ae(dn(t,e)):Kd(lc,wd(t,e))?dn(t,e):dn(t,e,r)},set(t,e,r,i){return ti(e)&&Tt(t,e)?_a(t,e,at(r)):_a(t,e,r,i)},getOwnPropertyDescriptor(t,e){if(ti(e)&&Tt(t,e)){const r=rr(t,e);return r.value=ae(r.value),r}return rr(t,e)},defineProperty(t,e,r){return ti(e)&&Tt(t,e)&&Tt(r,"value")&&(r.value=at(r.value)),fd(t,e,r)}});let dt=class Re{constructor(e,r,i){let n;if(Qt(e))n=Rr(Ue,[q(e)],new.target);else if(vi(e)&&!Qd(e)){let a,o;if(Si(e)){a=e,o=se(e);const c=Ee(e);if(Mr(c))throw fe(Ar);if(Yn(e))throw fe(kn);const l=new Ci(o*fs);n=Rr(Ue,[l],new.target)}else{const c=e[ut];if(c!=null&&typeof c!="function")throw fe(Ta);c!=null?Ca(e)?(a=e,o=e.length):(a=[...e],o=a.length):(a=e,o=mn(a.length)),n=Rr(Ue,[o],new.target)}for(let c=0;c<o;++c)n[c]=at(a[c])}else n=Rr(Ue,arguments,new.target);const s=new gd(n,nh);return ms(Ti,s,n),s}static from(e,...r){const i=this;if(!Wn(i,yi))throw fe(ya);if(i===Re){if(Qt(e)&&r.length===0){const u=q(e),d=new Ue(Ee(u),Nt(u),se(u));return new Re(Ee(Tr(d)))}if(r.length===0)return new Re(Ee(Aa(e,at)));const c=r[0],l=r[1];return new Re(Ee(Aa(e,function(u,...d){return at(Fe(c,this,[u,...br(d)]))},l)))}let n,s;const a=e[ut];if(a!=null&&typeof a!="function")throw fe(Ta);if(a!=null)Ca(e)?(n=e,s=e.length):Zd(e)?(n=e,s=se(e)):(n=[...e],s=n.length);else{if(e==null)throw fe(zn);n=nr(e),s=mn(n.length)}const o=new i(s);if(r.length===0)for(let c=0;c<s;++c)o[c]=n[c];else{const c=r[0],l=r[1];for(let u=0;u<s;++u)o[u]=Fe(c,l,[n[u],u])}return o}static of(...e){const r=this;if(!Wn(r,yi))throw fe(ya);const i=e.length;if(r===Re){const s=new Re(i),a=q(s);for(let o=0;o<i;++o)a[o]=at(e[o]);return s}const n=new r(i);for(let s=0;s<i;++s)n[s]=e[s];return n}keys(){ne(this);const e=q(this);return Pd(e)}values(){ne(this);const e=q(this);return Ma(function*(){for(const r of Od(e))yield ae(r)}())}entries(){ne(this);const e=q(this);return Ma(function*(){for(const[r,i]of Ld(e))yield[r,ae(i)]}())}at(e){ne(this);const r=q(this),i=se(r),n=St(e),s=n>=0?n:i+n;if(!(s<0||s>=i))return ae(r[s])}with(e,r){ne(this);const i=q(this),n=se(i),s=St(e),a=s>=0?s:n+s,o=+r;if(a<0||a>=n)throw hn(un);const c=new Ue(Ee(i),Nt(i),se(i)),l=new Re(Ee(Tr(c))),u=q(l);return u[a]=at(o),l}map(e,...r){ne(this);const i=q(this),n=se(i),s=r[0],a=ri(i,Re);if(a===Re){const c=new Re(n),l=q(c);for(let u=0;u<n;++u){const d=ae(i[u]);l[u]=at(Fe(e,s,[d,u,this]))}return c}const o=new a(n);ii(o,n);for(let c=0;c<n;++c){const l=ae(i[c]);o[c]=Fe(e,s,[l,c,this])}return o}filter(e,...r){ne(this);const i=q(this),n=se(i),s=r[0],a=[];for(let l=0;l<n;++l){const u=ae(i[l]);Fe(e,s,[u,l,this])&&xd(a,u)}const o=ri(i,Re),c=new o(a);return ii(c),c}reduce(e,...r){ne(this);const i=q(this),n=se(i);if(n===0&&r.length===0)throw fe(wa);let s,a;r.length===0?(s=ae(i[0]),a=1):(s=r[0],a=0);for(let o=a;o<n;++o)s=e(s,ae(i[o]),o,this);return s}reduceRight(e,...r){ne(this);const i=q(this),n=se(i);if(n===0&&r.length===0)throw fe(wa);let s,a;r.length===0?(s=ae(i[n-1]),a=n-2):(s=r[0],a=n-1);for(let o=a;o>=0;--o)s=e(s,ae(i[o]),o,this);return s}forEach(e,...r){ne(this);const i=q(this),n=se(i),s=r[0];for(let a=0;a<n;++a)Fe(e,s,[ae(i[a]),a,this])}find(e,...r){ne(this);const i=q(this),n=se(i),s=r[0];for(let a=0;a<n;++a){const o=ae(i[a]);if(Fe(e,s,[o,a,this]))return o}}findIndex(e,...r){ne(this);const i=q(this),n=se(i),s=r[0];for(let a=0;a<n;++a){const o=ae(i[a]);if(Fe(e,s,[o,a,this]))return a}return-1}findLast(e,...r){ne(this);const i=q(this),n=se(i),s=r[0];for(let a=n-1;a>=0;--a){const o=ae(i[a]);if(Fe(e,s,[o,a,this]))return o}}findLastIndex(e,...r){ne(this);const i=q(this),n=se(i),s=r[0];for(let a=n-1;a>=0;--a){const o=ae(i[a]);if(Fe(e,s,[o,a,this]))return a}return-1}every(e,...r){ne(this);const i=q(this),n=se(i),s=r[0];for(let a=0;a<n;++a)if(!Fe(e,s,[ae(i[a]),a,this]))return!1;return!0}some(e,...r){ne(this);const i=q(this),n=se(i),s=r[0];for(let a=0;a<n;++a)if(Fe(e,s,[ae(i[a]),a,this]))return!0;return!1}set(e,...r){ne(this);const i=q(this),n=St(r[0]);if(n<0)throw hn(un);if(e==null)throw fe(zn);if(Yn(e))throw fe(kn);if(Qt(e))return Fd(q(this),q(e),n);if(Si(e)){const c=Ee(e);if(Mr(c))throw fe(Ar)}const s=se(i),a=nr(e),o=mn(a.length);if(n===1/0||o+n>s)throw hn(un);for(let c=0;c<o;++c)i[c+n]=at(a[c])}reverse(){ne(this);const e=q(this);return Ra(e),this}toReversed(){ne(this);const e=q(this),r=new Ue(Ee(e),Nt(e),se(e)),i=new Re(Ee(Tr(r))),n=q(i);return Ra(n),i}fill(e,...r){ne(this);const i=q(this);return Bd(i,at(e),...br(r)),this}copyWithin(e,r,...i){ne(this);const n=q(this);return Hd(n,e,r,...br(i)),this}sort(e){ne(this);const r=q(this),i=e!==void 0?e:Na;return ba(r,(n,s)=>i(ae(n),ae(s))),this}toSorted(e){ne(this);const r=q(this);if(e!==void 0&&typeof e!="function")throw new fe(pd);const i=e!==void 0?e:Na,n=new Ue(Ee(r),Nt(r),se(r)),s=new Re(Ee(Tr(n))),a=q(s);return ba(a,(o,c)=>i(ae(o),ae(c))),s}slice(e,r){ne(this);const i=q(this),n=ri(i,Re);if(n===Re){const h=new Ue(Ee(i),Nt(i),se(i));return new Re(Ee(Tr(h,e,r)))}const s=se(i),a=St(e),o=r===void 0?s:St(r);let c;a===-1/0?c=0:a<0?c=s+a>0?s+a:0:c=s<a?s:a;let l;o===-1/0?l=0:o<0?l=s+o>0?s+o:0:l=s<o?s:o;const u=l-c>0?l-c:0,d=new n(u);if(ii(d,u),u===0)return d;const p=Ee(i);if(Mr(p))throw fe(Ar);let f=0;for(;c<l;)d[f]=ae(i[c]),++c,++f;return d}subarray(e,r){ne(this);const i=q(this),n=ri(i,Re),s=new Ue(Ee(i),Nt(i),se(i)),a=Ud(s,e,r),o=new n(Ee(a),Nt(a),se(a));return ii(o),o}indexOf(e,...r){ne(this);const i=q(this),n=se(i);let s=St(r[0]);if(s===1/0)return-1;s<0&&(s+=n,s<0&&(s=0));for(let a=s;a<n;++a)if(Tt(i,a)&&ae(i[a])===e)return a;return-1}lastIndexOf(e,...r){ne(this);const i=q(this),n=se(i);let s=r.length>=1?St(r[0]):n-1;if(s===-1/0)return-1;s>=0?s=s<n-1?s:n-1:s+=n;for(let a=s;a>=0;--a)if(Tt(i,a)&&ae(i[a])===e)return a;return-1}includes(e,...r){ne(this);const i=q(this),n=se(i);let s=St(r[0]);if(s===1/0)return!1;s<0&&(s+=n,s<0&&(s=0));const a=ir(e);for(let o=s;o<n;++o){const c=ae(i[o]);if(a&&ir(c)||c===e)return!0}return!1}join(e){ne(this);const r=q(this),i=Pa(r);return _d(i,e)}toLocaleString(...e){ne(this);const r=q(this),i=Pa(r);return Ed(i,...br(e))}get[cs](){if(Qt(this))return"Float16Array"}};Gr(dt,"BYTES_PER_ELEMENT",{value:fs});Gr(dt,yi,{});Vo(dt,us);const wi=dt.prototype;Gr(wi,"BYTES_PER_ELEMENT",{value:fs});Gr(wi,ut,{value:wi.values,writable:!0,configurable:!0});Vo(wi,be);function sh(t,e,...r){return ae(jd(t,e,...br(r)))}function Oa(t){return t instanceof Int8Array||t instanceof Uint8Array||t instanceof Uint8ClampedArray||t instanceof Int16Array||t instanceof Uint16Array||t instanceof Int32Array||t instanceof Uint32Array||t instanceof dt||t instanceof Float32Array||t instanceof Float64Array}class ah extends is{constructor(e,r){super(r),this.parser=e}load(e,r,i,n){const s=new ld(this.manager);s.setRequestHeader(this.requestHeader),s.setPath(this.path),s.setWithCredentials(this.withCredentials),s.load(e,a=>{try{r(this.parser(a))}catch(o){n!=null?n(o):console.error(o),this.manager.itemError(e)}},i,n)}}function oh(t){const e=t instanceof Int8Array?Zc:t instanceof Uint8Array?Zs:t instanceof Uint8ClampedArray?Zs:t instanceof Int16Array?Jc:t instanceof Uint16Array?el:t instanceof Int32Array?tl:t instanceof Uint32Array?Lt:t instanceof dt?Ro:t instanceof Float32Array?yt:t instanceof Float64Array?yt:null;return fi(e!=null),e}class pn extends is{constructor(e,r,i={},n){super(n),this.textureClass=e,this.parser=r,this.options={format:Nr,minFilter:Qs,magFilter:Qs,...i}}load(e,r,i,n){const s=new this.textureClass,a=new ah(this.parser,this.manager);return a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(this.withCredentials),a.load(e,o=>{s.image.data=o instanceof dt?new Uint16Array(o.buffer):o;const{width:c,height:l,depth:u,...d}=this.options;c!=null&&(s.image.width=c),l!=null&&(s.image.height=l),"depth"in s.image&&u!=null&&(s.image.depth=u),s.type=oh(o),Object.assign(s,d),s.needsUpdate=!0,r==null||r(s)},i,n),s}}const _i=rs.clamp,qn=rs.degToRad;function ch(t,e,r,i=0,n=1){return rs.mapLinear(t,e,r,i,n)}function lh(t){return Math.min(Math.max(t,0),1)}function Te(t){return(e,r)=>{e instanceof Ai?Object.defineProperty(e,r,{enumerable:!0,get(){var i;return((i=this.defines)==null?void 0:i[t])!=null},set(i){var n;i!==this[r]&&(i?(this.defines??(this.defines={}),this.defines[t]="1"):(n=this.defines)==null||delete n[t],this.needsUpdate=!0)}}):Object.defineProperty(e,r,{enumerable:!0,get(){return this.defines.has(t)},set(i){i!==this[r]&&(i?this.defines.set(t,"1"):this.defines.delete(t),this.setChanged())}})}}function La(t){return typeof t=="number"?Math.floor(t):typeof t=="string"?parseInt(t,10):typeof t=="boolean"?+t:0}function uh(t,{min:e=Number.MIN_SAFE_INTEGER,max:r=Number.MAX_SAFE_INTEGER}={}){return(i,n)=>{i instanceof Ai?Object.defineProperty(i,n,{enumerable:!0,get(){var a;const s=(a=this.defines)==null?void 0:a[t];return s!=null?La(s):0},set(s){const a=this[n];s!==a&&(this.defines??(this.defines={}),this.defines[t]=_i(s,e,r).toFixed(0),this.needsUpdate=!0)}}):Object.defineProperty(i,n,{enumerable:!0,get(){const s=this.defines.get(t);return s!=null?La(s):0},set(s){const a=this[n];s!==a&&(this.defines.set(t,_i(s,e,r).toFixed(0)),this.setChanged())}})}}const dh=/^[ \t]*#include +"([\w\d./]+)"/gm;function Pi(t,e){return t.replace(dh,(r,i)=>{const n=i.split("/").reduce((s,a)=>typeof s!="string"&&s!=null?s[a]:void 0,e);if(typeof n!="string")throw new Error(`Could not find include for ${i}.`);return Pi(n,e)})}let ni;function hh(){if(ni!=null)return ni;const t=new Uint32Array([268435456]);return ni=new Uint8Array(t.buffer,t.byteOffset,t.byteLength)[0]===0,ni}function mh(t,e,r,i=!0){if(i===hh())return new e(t);const n=Object.assign(new DataView(t),{getFloat16(a,o){return sh(this,a,o)}}),s=new e(n.byteLength/e.BYTES_PER_ELEMENT);for(let a=0,o=0;a<s.length;++a,o+=e.BYTES_PER_ELEMENT)s[a]=n[r](o,i);return s}const fn=(t,e)=>mh(t,dt,"getFloat16",e);const ph=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*(?:i\s*\+\+|\+\+\s*i)\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fh(t,e,r,i){let n="";for(let s=parseInt(e,10);s<parseInt(r,10);++s)n+=i.replace(/\[\s*i\s*\]/g,`[${s}]`).replace(/UNROLLED_LOOP_INDEX/g,`${s}`);return n}function gh(t){return t.replace(ph,fh)}const vh=`// Reference: https://github.com/mrdoob/three.js/blob/r171/examples/jsm/csm/CSMShader.js

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
`,Sh=`// cSpell:words logdepthbuf

#ifdef DEPTH_PACKING
float readDepthValue(const sampler2D depthBuffer, const vec2 uv) {
  #if DEPTH_PACKING == 3201
  return unpackRGBAToDepth(texture(depthBuffer, uv));
  #else // DEPTH_PACKING == 3201
  return texture(depthBuffer, uv).r;
  #endif // DEPTH_PACKING == 3201
}
#endif // DEPTH_PACKING

float reverseLogDepth(const float depth, const float near, const float far) {
  #if defined(USE_LOGDEPTHBUF) || defined(USE_LOGARITHMIC_DEPTH_BUFFER)
  float d = pow(2.0, depth * log2(far + 1.0)) - 1.0;
  float a = far / (far - near);
  float b = far * near / (near - far);
  return a + b / d;
  #else // defined(USE_LOGARITHMIC_DEPTH_BUFFER) || defined(USE_LOGARITHMIC_DEPTH_BUFFER)
  return depth;
  #endif // defined(USE_LOGARITHMIC_DEPTH_BUFFER) || defined(USE_LOGARITHMIC_DEPTH_BUFFER)
}

float linearizeDepth(const float depth, const float near, const float far) {
  float ndc = depth * 2.0 - 1.0;
  return 2.0 * near * far / (far + near - ndc * (far - near));
}
`,yh=`// Reference: https://advances.realtimerendering.com/s2014/index.html#_NEXT_GENERATION_POST

float interleavedGradientNoise(const vec2 coord) {
  const vec3 magic = vec3(0.06711056, 0.00583715, 52.9829189);
  return fract(magic.z * fract(dot(coord, magic.xy)));
}
`,Th=`#if !defined(saturate)
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
`,wh=`// Reference: https://jcgt.org/published/0003/02/01/paper.pdf

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
`,_h=`float raySphereFirstIntersection(
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
`,xh=`vec3 screenToView(
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
`,Eh=`// Reference: https://www.gamedev.net/tutorials/programming/graphics/contact-hardening-soft-shadows-made-fast-r4906/

vec2 vogelDisk(const int index, const int sampleCount, const float phi) {
  const float goldenAngle = 2.39996322972865332;
  float r = sqrt(float(index) + 0.5) / sqrt(float(sampleCount));
  float theta = float(index) * goldenAngle + phi;
  return r * vec2(cos(theta), sin(theta));
}
`,Rh=vh,bh=Sh,Ah=yh,Mh=Th,Ih=wh,uc=_h,Ch=xh,Dh=Eh,Nh="eac103980f20c0956f2d3215833e73514be08462",gn=`https://media.githubusercontent.com/media/takram-design-engineering/three-geospatial/${Nh}/packages/atmosphere/assets`,Oi=64,Li=16,gs=32,vs=128,Ss=32,ys=8,Ph=ys*Ss,Oh=vs,Lh=gs,Fi=256,Bi=64,xi=1/1e3,Fh=new _;function Hi(t,e,r,i){const n=r.projectOnSurface(t,Fh);return n!=null?r.getOsculatingSphereCenter(n,e,i).negate():i.setScalar(0)}const Ts=`// Based on: https://github.com/ebruneton/precomputed_atmospheric_scattering/blob/master/atmosphere/functions.glsl

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

Number ClampCosine(const Number mu) {
  return clamp(mu, Number(-1.0), Number(1.0));
}

Length ClampDistance(const Length d) {
  return max(d, 0.0 * m);
}

Length ClampRadius(const AtmosphereParameters atmosphere, const Length r) {
  return clamp(r, atmosphere.bottom_radius, atmosphere.top_radius);
}

Length SafeSqrt(const Area a) {
  return sqrt(max(a, 0.0 * m2));
}

Length DistanceToTopAtmosphereBoundary(const AtmosphereParameters atmosphere,
    const Length r, const Number mu) {
  assert(r <= atmosphere.top_radius);
  assert(mu >= -1.0 && mu <= 1.0);
  Area discriminant = r * r * (mu * mu - 1.0) +
      atmosphere.top_radius * atmosphere.top_radius;
  return ClampDistance(-r * mu + SafeSqrt(discriminant));
}

Length DistanceToBottomAtmosphereBoundary(const AtmosphereParameters atmosphere,
    const Length r, const Number mu) {
  assert(r >= atmosphere.bottom_radius);
  assert(mu >= -1.0 && mu <= 1.0);
  Area discriminant = r * r * (mu * mu - 1.0) +
      atmosphere.bottom_radius * atmosphere.bottom_radius;
  return ClampDistance(-r * mu - SafeSqrt(discriminant));
}

bool RayIntersectsGround(const AtmosphereParameters atmosphere,
    const Length r, const Number mu) {
  assert(r >= atmosphere.bottom_radius);
  assert(mu >= -1.0 && mu <= 1.0);
  return mu < 0.0 && r * r * (mu * mu - 1.0) +
      atmosphere.bottom_radius * atmosphere.bottom_radius >= 0.0 * m2;
}

Number GetTextureCoordFromUnitRange(const Number x, const int texture_size) {
  return 0.5 / Number(texture_size) + x * (1.0 - 1.0 / Number(texture_size));
}

vec2 GetTransmittanceTextureUvFromRMu(const AtmosphereParameters atmosphere,
    const Length r, const Number mu) {
  assert(r >= atmosphere.bottom_radius && r <= atmosphere.top_radius);
  assert(mu >= -1.0 && mu <= 1.0);
  // Distance to top atmosphere boundary for a horizontal ray at ground level.
  Length H = sqrt(atmosphere.top_radius * atmosphere.top_radius -
      atmosphere.bottom_radius * atmosphere.bottom_radius);
  // Distance to the horizon.
  Length rho =
      SafeSqrt(r * r - atmosphere.bottom_radius * atmosphere.bottom_radius);
  // Distance to the top atmosphere boundary for the ray (r,mu), and its minimum
  // and maximum values over all mu - obtained for (r,1) and (r,mu_horizon).
  Length d = DistanceToTopAtmosphereBoundary(atmosphere, r, mu);
  Length d_min = atmosphere.top_radius - r;
  Length d_max = rho + H;
  Number x_mu = (d - d_min) / (d_max - d_min);
  Number x_r = rho / H;
  return vec2(GetTextureCoordFromUnitRange(x_mu, TRANSMITTANCE_TEXTURE_WIDTH),
              GetTextureCoordFromUnitRange(x_r, TRANSMITTANCE_TEXTURE_HEIGHT));
}

DimensionlessSpectrum GetTransmittanceToTopAtmosphereBoundary(
    const AtmosphereParameters atmosphere,
    const TransmittanceTexture transmittance_texture,
    const Length r, const Number mu) {
  assert(r >= atmosphere.bottom_radius && r <= atmosphere.top_radius);
  vec2 uv = GetTransmittanceTextureUvFromRMu(atmosphere, r, mu);
  // @shotamatsuda: Added for the precomputation stage in half-float precision.
  #ifdef TRANSMITTANCE_PRECISION_LOG
  // Manually interpolate the transmittance instead of the optical depth.
  const vec2 size = vec2(TRANSMITTANCE_TEXTURE_WIDTH, TRANSMITTANCE_TEXTURE_HEIGHT);
  const vec3 texel_size = vec3(1.0 / size, 0.0);
  vec2 coord = (uv * size) - 0.5;
  vec2 i = (floor(coord) + 0.5) * texel_size.xy;
  vec2 f = fract(coord);
  vec4 t1 = exp(-texture(transmittance_texture, i));
  vec4 t2 = exp(-texture(transmittance_texture, i + texel_size.xz));
  vec4 t3 = exp(-texture(transmittance_texture, i + texel_size.zy));
  vec4 t4 = exp(-texture(transmittance_texture, i + texel_size.xy));
  return DimensionlessSpectrum(mix(mix(t1, t2, f.x), mix(t3, t4, f.x), f.y));
  #else // TRANSMITTANCE_PRECISION_LOG
  return DimensionlessSpectrum(texture(transmittance_texture, uv));
  #endif // TRANSMITTANCE_PRECISION_LOG
}

DimensionlessSpectrum GetTransmittance(
    const AtmosphereParameters atmosphere,
    const TransmittanceTexture transmittance_texture,
    const Length r, const Number mu, const Length d,
    const bool ray_r_mu_intersects_ground) {
  assert(r >= atmosphere.bottom_radius && r <= atmosphere.top_radius);
  assert(mu >= -1.0 && mu <= 1.0);
  assert(d >= 0.0 * m);

  Length r_d = ClampRadius(atmosphere, sqrt(d * d + 2.0 * r * mu * d + r * r));
  Number mu_d = ClampCosine((r * mu + d) / r_d);

  if (ray_r_mu_intersects_ground) {
    return min(
        GetTransmittanceToTopAtmosphereBoundary(
            atmosphere, transmittance_texture, r_d, -mu_d) /
        GetTransmittanceToTopAtmosphereBoundary(
            atmosphere, transmittance_texture, r, -mu),
        DimensionlessSpectrum(1.0));
  } else {
    return min(
        GetTransmittanceToTopAtmosphereBoundary(
            atmosphere, transmittance_texture, r, mu) /
        GetTransmittanceToTopAtmosphereBoundary(
            atmosphere, transmittance_texture, r_d, mu_d),
        DimensionlessSpectrum(1.0));
  }
}

DimensionlessSpectrum GetTransmittanceToSun(
    const AtmosphereParameters atmosphere,
    const TransmittanceTexture transmittance_texture,
    const Length r, const Number mu_s) {
  Number sin_theta_h = atmosphere.bottom_radius / r;
  Number cos_theta_h = -sqrt(max(1.0 - sin_theta_h * sin_theta_h, 0.0));
  return GetTransmittanceToTopAtmosphereBoundary(
          atmosphere, transmittance_texture, r, mu_s) *
      smoothstep(-sin_theta_h * atmosphere.sun_angular_radius / rad,
                 sin_theta_h * atmosphere.sun_angular_radius / rad,
                 mu_s - cos_theta_h);
}

InverseSolidAngle RayleighPhaseFunction(const Number nu) {
  InverseSolidAngle k = 3.0 / (16.0 * PI * sr);
  return k * (1.0 + nu * nu);
}

InverseSolidAngle MiePhaseFunction(const Number g, const Number nu) {
  InverseSolidAngle k = 3.0 / (8.0 * PI * sr) * (1.0 - g * g) / (2.0 + g * g);
  return k * (1.0 + nu * nu) / pow(1.0 + g * g - 2.0 * g * nu, 1.5);
}

vec4 GetScatteringTextureUvwzFromRMuMuSNu(const AtmosphereParameters atmosphere,
    const Length r, const Number mu, const Number mu_s, const Number nu,
    const bool ray_r_mu_intersects_ground) {
  assert(r >= atmosphere.bottom_radius && r <= atmosphere.top_radius);
  assert(mu >= -1.0 && mu <= 1.0);
  assert(mu_s >= -1.0 && mu_s <= 1.0);
  assert(nu >= -1.0 && nu <= 1.0);

  // Distance to top atmosphere boundary for a horizontal ray at ground level.
  Length H = sqrt(atmosphere.top_radius * atmosphere.top_radius -
      atmosphere.bottom_radius * atmosphere.bottom_radius);
  // Distance to the horizon.
  Length rho =
      SafeSqrt(r * r - atmosphere.bottom_radius * atmosphere.bottom_radius);
  Number u_r = GetTextureCoordFromUnitRange(rho / H, SCATTERING_TEXTURE_R_SIZE);

  // Discriminant of the quadratic equation for the intersections of the ray
  // (r,mu) with the ground (see RayIntersectsGround).
  Length r_mu = r * mu;
  Area discriminant =
      r_mu * r_mu - r * r + atmosphere.bottom_radius * atmosphere.bottom_radius;
  Number u_mu;
  if (ray_r_mu_intersects_ground) {
    // Distance to the ground for the ray (r,mu), and its minimum and maximum
    // values over all mu - obtained for (r,-1) and (r,mu_horizon).
    Length d = -r_mu - SafeSqrt(discriminant);
    Length d_min = r - atmosphere.bottom_radius;
    Length d_max = rho;
    u_mu = 0.5 - 0.5 * GetTextureCoordFromUnitRange(d_max == d_min ? 0.0 :
        (d - d_min) / (d_max - d_min), SCATTERING_TEXTURE_MU_SIZE / 2);
  } else {
    // Distance to the top atmosphere boundary for the ray (r,mu), and its
    // minimum and maximum values over all mu - obtained for (r,1) and
    // (r,mu_horizon).
    Length d = -r_mu + SafeSqrt(discriminant + H * H);
    Length d_min = atmosphere.top_radius - r;
    Length d_max = rho + H;
    u_mu = 0.5 + 0.5 * GetTextureCoordFromUnitRange(
        (d - d_min) / (d_max - d_min), SCATTERING_TEXTURE_MU_SIZE / 2);
  }

  Length d = DistanceToTopAtmosphereBoundary(
      atmosphere, atmosphere.bottom_radius, mu_s);
  Length d_min = atmosphere.top_radius - atmosphere.bottom_radius;
  Length d_max = H;
  Number a = (d - d_min) / (d_max - d_min);
  Length D = DistanceToTopAtmosphereBoundary(
      atmosphere, atmosphere.bottom_radius, atmosphere.mu_s_min);
  Number A = (D - d_min) / (d_max - d_min);
  // An ad-hoc function equal to 0 for mu_s = mu_s_min (because then d = D and
  // thus a = A), equal to 1 for mu_s = 1 (because then d = d_min and thus
  // a = 0), and with a large slope around mu_s = 0, to get more texture
  // samples near the horizon.
  Number u_mu_s = GetTextureCoordFromUnitRange(
      max(1.0 - a / A, 0.0) / (1.0 + a), SCATTERING_TEXTURE_MU_S_SIZE);

  Number u_nu = (nu + 1.0) / 2.0;
  return vec4(u_nu, u_mu_s, u_mu, u_r);
}

vec2 GetIrradianceTextureUvFromRMuS(const AtmosphereParameters atmosphere,
    const Length r, const Number mu_s) {
  assert(r >= atmosphere.bottom_radius && r <= atmosphere.top_radius);
  assert(mu_s >= -1.0 && mu_s <= 1.0);
  Number x_r = (r - atmosphere.bottom_radius) /
      (atmosphere.top_radius - atmosphere.bottom_radius);
  Number x_mu_s = mu_s * 0.5 + 0.5;
  return vec2(GetTextureCoordFromUnitRange(x_mu_s, IRRADIANCE_TEXTURE_WIDTH),
              GetTextureCoordFromUnitRange(x_r, IRRADIANCE_TEXTURE_HEIGHT));
}

IrradianceSpectrum GetIrradiance(
    const AtmosphereParameters atmosphere,
    const IrradianceTexture irradiance_texture,
    const Length r, const Number mu_s) {
  vec2 uv = GetIrradianceTextureUvFromRMuS(atmosphere, r, mu_s);
  return IrradianceSpectrum(texture(irradiance_texture, uv));
}
`,ws=`// Based on: https://github.com/ebruneton/precomputed_atmospheric_scattering/blob/master/atmosphere/definitions.glsl

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
 */

#define assert(x)

#define Length float
#define Wavelength float
#define Angle float
#define SolidAngle float
#define Power float
#define LuminousPower float

#define Number float
#define InverseLength float
#define Area float
#define Volume float
#define NumberDensity float
#define Irradiance float
#define Radiance float
#define SpectralPower float
#define SpectralIrradiance float
#define SpectralRadiance float
#define SpectralRadianceDensity float
#define ScatteringCoefficient float
#define InverseSolidAngle float
#define LuminousIntensity float
#define Luminance float
#define Illuminance float

// A generic function from Wavelength to some other type.
#define AbstractSpectrum vec3
// A function from Wavelength to Number.
#define DimensionlessSpectrum vec3
// A function from Wavelength to SpectralPower.
#define PowerSpectrum vec3
// A function from Wavelength to SpectralIrradiance.
#define IrradianceSpectrum vec3
// A function from Wavelength to SpectralRadiance.
#define RadianceSpectrum vec3
// A function from Wavelength to SpectralRadianceDensity.
#define RadianceDensitySpectrum vec3
// A function from Wavelength to ScatteringCoefficient.
#define ScatteringSpectrum vec3

// A position in 3D (3 length values).
#define Position vec3
// A unit direction vector in 3D (3 unit-less values).
#define Direction vec3
// A vector of 3 luminance values.
#define Luminance3 vec3
// A vector of 3 illuminance values.
#define Illuminance3 vec3

#define TransmittanceTexture sampler2D
#define AbstractScatteringTexture sampler3D
#define ReducedScatteringTexture sampler3D
#define ScatteringTexture sampler3D
#define ScatteringDensityTexture sampler3D
#define IrradianceTexture sampler2D

const Length m = 1.0;
const Wavelength nm = 1.0;
const Angle rad = 1.0;
const SolidAngle sr = 1.0;
const Power watt = 1.0;
const LuminousPower lm = 1.0;

#if !defined(PI)
const float PI = 3.14159265358979323846;
#endif // !defined(PI)

const Length km = 1000.0 * m;
const Area m2 = m * m;
const Volume m3 = m * m * m;
const Angle pi = PI * rad;
const Angle deg = pi / 180.0;
const Irradiance watt_per_square_meter = watt / m2;
const Radiance watt_per_square_meter_per_sr = watt / (m2 * sr);
const SpectralIrradiance watt_per_square_meter_per_nm = watt / (m2 * nm);
const SpectralRadiance watt_per_square_meter_per_sr_per_nm = watt / (m2 * sr * nm);
const SpectralRadianceDensity watt_per_cubic_meter_per_sr_per_nm = watt / (m3 * sr * nm);
const LuminousIntensity cd = lm / sr;
const LuminousIntensity kcd = 1000.0 * cd;
const Luminance cd_per_square_meter = cd / m2;
const Luminance kcd_per_square_meter = kcd / m2;

struct DensityProfileLayer {
  Length width;
  Number exp_term;
  InverseLength exp_scale;
  InverseLength linear_term;
  Number constant_term;
};

struct DensityProfile {
  DensityProfileLayer layers[2];
};

// See AtmosphereParameter.ts for further details.
struct AtmosphereParameters {
  IrradianceSpectrum solar_irradiance;
  Angle sun_angular_radius;
  Length bottom_radius;
  Length top_radius;
  DensityProfile rayleigh_density;
  ScatteringSpectrum rayleigh_scattering;
  DensityProfile mie_density;
  ScatteringSpectrum mie_scattering;
  ScatteringSpectrum mie_extinction;
  Number mie_phase_function_g;
  DensityProfile absorption_density;
  ScatteringSpectrum absorption_extinction;
  DimensionlessSpectrum ground_albedo;
  Number mu_s_min;
};
`,_s=`// Based on: https://github.com/ebruneton/precomputed_atmospheric_scattering/blob/master/atmosphere/functions.glsl

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

#ifdef COMBINED_SCATTERING_TEXTURES
vec3 GetExtrapolatedSingleMieScattering(
    const AtmosphereParameters atmosphere, const vec4 scattering) {
  // Algebraically this can never be negative, but rounding errors can produce
  // that effect for sufficiently short view rays.
  // @shotamatsuda: Avoid division by infinitesimal values.
  // See https://github.com/takram-design-engineering/three-geospatial/issues/47
  if (scattering.r < 1e-5) {
    return vec3(0.0);
  }
  return scattering.rgb * scattering.a / scattering.r *
	    (atmosphere.rayleigh_scattering.r / atmosphere.mie_scattering.r) *
	    (atmosphere.mie_scattering / atmosphere.rayleigh_scattering);
}
#endif // COMBINED_SCATTERING_TEXTURES

IrradianceSpectrum GetCombinedScattering(
    const AtmosphereParameters atmosphere,
    const ReducedScatteringTexture scattering_texture,
    const ReducedScatteringTexture single_mie_scattering_texture,
    const Length r, const Number mu, const Number mu_s, const Number nu,
    const bool ray_r_mu_intersects_ground,
    out IrradianceSpectrum single_mie_scattering) {
  vec4 uvwz = GetScatteringTextureUvwzFromRMuMuSNu(
      atmosphere, r, mu, mu_s, nu, ray_r_mu_intersects_ground);
  Number tex_coord_x = uvwz.x * Number(SCATTERING_TEXTURE_NU_SIZE - 1);
  Number tex_x = floor(tex_coord_x);
  Number lerp = tex_coord_x - tex_x;
  vec3 uvw0 = vec3((tex_x + uvwz.y) / Number(SCATTERING_TEXTURE_NU_SIZE),
      uvwz.z, uvwz.w);
  vec3 uvw1 = vec3((tex_x + 1.0 + uvwz.y) / Number(SCATTERING_TEXTURE_NU_SIZE),
      uvwz.z, uvwz.w);
#ifdef COMBINED_SCATTERING_TEXTURES
  vec4 combined_scattering =
      texture(scattering_texture, uvw0) * (1.0 - lerp) +
      texture(scattering_texture, uvw1) * lerp;
  IrradianceSpectrum scattering = IrradianceSpectrum(combined_scattering);
  single_mie_scattering =
      GetExtrapolatedSingleMieScattering(atmosphere, combined_scattering);
#else // COMBINED_SCATTERING_TEXTURES
  IrradianceSpectrum scattering = IrradianceSpectrum(
      texture(scattering_texture, uvw0) * (1.0 - lerp) +
      texture(scattering_texture, uvw1) * lerp);
  single_mie_scattering = IrradianceSpectrum(
      texture(single_mie_scattering_texture, uvw0) * (1.0 - lerp) +
      texture(single_mie_scattering_texture, uvw1) * lerp);
#endif // COMBINED_SCATTERING_TEXTURES
  return scattering;
}

// @shotamatsuda: Added for reading higher-order scattering texture.
#ifdef HAS_HIGHER_ORDER_SCATTERING_TEXTURE
IrradianceSpectrum GetScattering(
    const AtmosphereParameters atmosphere,
    const ReducedScatteringTexture scattering_texture,
    const Length r, const Number mu, const Number mu_s, const Number nu,
    const bool ray_r_mu_intersects_ground) {
  vec4 uvwz = GetScatteringTextureUvwzFromRMuMuSNu(
      atmosphere, r, mu, mu_s, nu, ray_r_mu_intersects_ground);
  Number tex_coord_x = uvwz.x * Number(SCATTERING_TEXTURE_NU_SIZE - 1);
  Number tex_x = floor(tex_coord_x);
  Number lerp = tex_coord_x - tex_x;
  vec3 uvw0 = vec3((tex_x + uvwz.y) / Number(SCATTERING_TEXTURE_NU_SIZE),
      uvwz.z, uvwz.w);
  vec3 uvw1 = vec3((tex_x + 1.0 + uvwz.y) / Number(SCATTERING_TEXTURE_NU_SIZE),
      uvwz.z, uvwz.w);
  IrradianceSpectrum scattering = IrradianceSpectrum(
      texture(scattering_texture, uvw0) * (1.0 - lerp) +
      texture(scattering_texture, uvw1) * lerp);
  return scattering;
}
#endif // HAS_HIGHER_ORDER_SCATTERING_TEXTURE

RadianceSpectrum GetSkyRadiance(
    const AtmosphereParameters atmosphere,
    const TransmittanceTexture transmittance_texture,
    const ReducedScatteringTexture scattering_texture,
    const ReducedScatteringTexture single_mie_scattering_texture,
    Position camera, const Direction view_ray, const Length shadow_length,
    const Direction sun_direction,
    out DimensionlessSpectrum transmittance) {
  // Compute the distance to the top atmosphere boundary along the view ray,
  // assuming the viewer is in space (or NaN if the view ray does not intersect
  // the atmosphere).
  Length r = length(camera);
  Length rmu = dot(camera, view_ray);
  // @shotamatsuda: Use SafeSqrt instead.
  // See: https://github.com/takram-design-engineering/three-geospatial/pull/26
  Length distance_to_top_atmosphere_boundary = -rmu -
      SafeSqrt(rmu * rmu - r * r +
          atmosphere.top_radius * atmosphere.top_radius);
  // If the viewer is in space and the view ray intersects the atmosphere, move
  // the viewer to the top atmosphere boundary (along the view ray):
  if (distance_to_top_atmosphere_boundary > 0.0 * m) {
    camera = camera + view_ray * distance_to_top_atmosphere_boundary;
    r = atmosphere.top_radius;
    rmu += distance_to_top_atmosphere_boundary;
  } else if (r > atmosphere.top_radius) {
    // If the view ray does not intersect the atmosphere, simply return 0.
    transmittance = DimensionlessSpectrum(1.0);
    return RadianceSpectrum(0.0 * watt_per_square_meter_per_sr_per_nm);
  }
  // Compute the r, mu, mu_s and nu parameters needed for the texture lookups.
  Number mu = rmu / r;
  Number mu_s = dot(camera, sun_direction) / r;
  Number nu = dot(view_ray, sun_direction);

  // @shotamatsuda: For rendering points below the bottom atmosphere.
  #ifdef GROUND
  bool ray_r_mu_intersects_ground = RayIntersectsGround(atmosphere, r, mu);
  #else // GROUND
  bool ray_r_mu_intersects_ground = false;
  #endif // GROUND

  transmittance = ray_r_mu_intersects_ground ? DimensionlessSpectrum(0.0) :
      GetTransmittanceToTopAtmosphereBoundary(
          atmosphere, transmittance_texture, r, mu);
  IrradianceSpectrum single_mie_scattering;
  IrradianceSpectrum scattering;
  if (shadow_length == 0.0 * m) {
    scattering = GetCombinedScattering(
        atmosphere, scattering_texture, single_mie_scattering_texture,
        r, mu, mu_s, nu, ray_r_mu_intersects_ground,
        single_mie_scattering);
  } else {
    // Case of light shafts (shadow_length is the total length noted l in our
    // paper): we omit the scattering between the camera and the point at
    // distance l, by implementing Eq. (18) of the paper (shadow_transmittance
    // is the T(x,x_s) term, scattering is the S|x_s=x+lv term).
    Length d = shadow_length;
    Length r_p =
        ClampRadius(atmosphere, sqrt(d * d + 2.0 * r * mu * d + r * r));
    Number mu_p = (r * mu + d) / r_p;
    Number mu_s_p = (r * mu_s + d * nu) / r_p;

    scattering = GetCombinedScattering(
        atmosphere, scattering_texture, single_mie_scattering_texture,
        r_p, mu_p, mu_s_p, nu, ray_r_mu_intersects_ground,
        single_mie_scattering);
    DimensionlessSpectrum shadow_transmittance =
        GetTransmittance(atmosphere, transmittance_texture,
            r, mu, shadow_length, ray_r_mu_intersects_ground);
    // @shotamatsuda: Occlude only single Rayleigh scattering by the shadow.
#ifdef HAS_HIGHER_ORDER_SCATTERING_TEXTURE
    IrradianceSpectrum higher_order_scattering = GetScattering(
        atmosphere, higher_order_scattering_texture,
        r_p, mu_p, mu_s_p, nu, ray_r_mu_intersects_ground);
    IrradianceSpectrum single_scattering = scattering - higher_order_scattering;
    scattering = single_scattering * shadow_transmittance + higher_order_scattering;
#else // HAS_HIGHER_ORDER_SCATTERING_TEXTURE
    scattering = scattering * shadow_transmittance;
#endif // HAS_HIGHER_ORDER_SCATTERING_TEXTURE
    single_mie_scattering = single_mie_scattering * shadow_transmittance;
  }
  return scattering * RayleighPhaseFunction(nu) + single_mie_scattering *
      MiePhaseFunction(atmosphere.mie_phase_function_g, nu);
}

// @shotamatsuda: Returns the point on the ray closest to the origin.
vec3 ClosestPointOnRay(const Position camera, const Position point) {
  Position ray = point - camera;
  Number t = clamp(-dot(camera, ray) / dot(ray, ray), 0.0, 1.0);
  return camera + t * ray;
}

vec2 RaySphereIntersections(
    const Position camera, const Direction direction, const Length radius) {
  float b = 2.0 * dot(direction, camera);
  float c = dot(camera, camera) - radius * radius;
  float discriminant = b * b - 4.0 * c;
  float Q = sqrt(discriminant);
  return vec2(-b - Q, -b + Q) * 0.5;
}

// @shotamatsuda: Clip the view ray at the bottom atmosphere boundary.
bool ClipAtBottomAtmosphere(
    const AtmosphereParameters atmosphere,
    const Direction view_ray, inout Position camera, inout Position point) {
  const Length eps = 0.0;
  Length bottom_radius = atmosphere.bottom_radius + eps;
  Length r_camera = length(camera);
  Length r_point = length(point);
  bool camera_below = r_camera < bottom_radius;
  bool point_below = r_point < bottom_radius;

  vec2 t = RaySphereIntersections(camera, view_ray, bottom_radius);
  Position intersection = camera + view_ray * (camera_below ? t.y : t.x);
  camera = camera_below ? intersection : camera;
  point = point_below ? intersection : point;

  return camera_below && point_below;
}

RadianceSpectrum GetSkyRadianceToPoint(
    const AtmosphereParameters atmosphere,
    const TransmittanceTexture transmittance_texture,
    const ReducedScatteringTexture scattering_texture,
    const ReducedScatteringTexture single_mie_scattering_texture,
    Position camera, Position point, const Length shadow_length,
    const Direction sun_direction, out DimensionlessSpectrum transmittance) {
  // @shotamatsuda: Avoid artifacts when the ray does not intersect the top
  // atmosphere boundary.
  if (length(ClosestPointOnRay(camera, point)) > atmosphere.top_radius) {
    transmittance = vec3(1.0);
    return vec3(0.0);
  }

  Direction view_ray = normalize(point - camera);
  if (ClipAtBottomAtmosphere(atmosphere, view_ray, camera, point)) {
    transmittance = vec3(1.0);
    return vec3(0.0);
  }

  // Compute the distance to the top atmosphere boundary along the view ray,
  // assuming the viewer is in space (or NaN if the view ray does not intersect
  // the atmosphere).
  Length r = length(camera);
  Length rmu = dot(camera, view_ray);
  // @shotamatsuda: Use SafeSqrt instead.
  // See: https://github.com/takram-design-engineering/three-geospatial/pull/26
  Length distance_to_top_atmosphere_boundary = -rmu -
      SafeSqrt(rmu * rmu - r * r +
          atmosphere.top_radius * atmosphere.top_radius);
  // If the viewer is in space and the view ray intersects the atmosphere, move
  // the viewer to the top atmosphere boundary (along the view ray):
  if (distance_to_top_atmosphere_boundary > 0.0 * m) {
    camera = camera + view_ray * distance_to_top_atmosphere_boundary;
    r = atmosphere.top_radius;
    rmu += distance_to_top_atmosphere_boundary;
  }

  // Compute the r, mu, mu_s and nu parameters for the first texture lookup.
  Number mu = rmu / r;
  Number mu_s = dot(camera, sun_direction) / r;
  Number nu = dot(view_ray, sun_direction);
  Length d = length(point - camera);
  bool ray_r_mu_intersects_ground = RayIntersectsGround(atmosphere, r, mu);

  // @shotamatsuda: Hack to avoid rendering artifacts near the horizon, due to
  // finite atmosphere texture resolution and finite floating point precision.
  // See: https://github.com/ebruneton/precomputed_atmospheric_scattering/pull/32
  if (!ray_r_mu_intersects_ground) {
    Number mu_horizon = -SafeSqrt(1.0 -
        (atmosphere.bottom_radius * atmosphere.bottom_radius) / (r * r));
    const Number eps = 0.004;
    mu = max(mu, mu_horizon + eps);
  }

  transmittance = GetTransmittance(atmosphere, transmittance_texture,
      r, mu, d, ray_r_mu_intersects_ground);

  IrradianceSpectrum single_mie_scattering;
  IrradianceSpectrum scattering = GetCombinedScattering(
      atmosphere, scattering_texture, single_mie_scattering_texture,
      r, mu, mu_s, nu, ray_r_mu_intersects_ground,
      single_mie_scattering);

  // Compute the r, mu, mu_s and nu parameters for the second texture lookup.
  // If shadow_length is not 0 (case of light shafts), we want to ignore the
  // scattering along the last shadow_length meters of the view ray, which we
  // do by subtracting shadow_length from d (this way scattering_p is equal to
  // the S|x_s=x_0-lv term in Eq. (17) of our paper).
  d = max(d - shadow_length, 0.0 * m);
  Length r_p = ClampRadius(atmosphere, sqrt(d * d + 2.0 * r * mu * d + r * r));
  Number mu_p = (r * mu + d) / r_p;
  Number mu_s_p = (r * mu_s + d * nu) / r_p;

  IrradianceSpectrum single_mie_scattering_p;
  IrradianceSpectrum scattering_p = GetCombinedScattering(
      atmosphere, scattering_texture, single_mie_scattering_texture,
      r_p, mu_p, mu_s_p, nu, ray_r_mu_intersects_ground,
      single_mie_scattering_p);

  // Combine the lookup results to get the scattering between camera and point.
  DimensionlessSpectrum shadow_transmittance = transmittance;
  if (shadow_length > 0.0 * m) {
    // This is the T(x,x_s) term in Eq. (17) of our paper, for light shafts.
    shadow_transmittance = GetTransmittance(atmosphere, transmittance_texture,
        r, mu, d, ray_r_mu_intersects_ground);
  }
  // @shotamatsuda: Occlude only single Rayleigh scattering by the shadow.
#ifdef HAS_HIGHER_ORDER_SCATTERING_TEXTURE
  IrradianceSpectrum higher_order_scattering = GetScattering(
      atmosphere, higher_order_scattering_texture,
      r, mu, mu_s, nu, ray_r_mu_intersects_ground);
  IrradianceSpectrum single_scattering = scattering - higher_order_scattering;
  IrradianceSpectrum higher_order_scattering_p = GetScattering(
      atmosphere, higher_order_scattering_texture,
      r_p, mu_p, mu_s_p, nu, ray_r_mu_intersects_ground);
  IrradianceSpectrum single_scattering_p =
      scattering_p - higher_order_scattering_p;
  scattering =
      single_scattering - shadow_transmittance * single_scattering_p +
      higher_order_scattering - transmittance * higher_order_scattering_p;
#else // HAS_HIGHER_ORDER_SCATTERING_TEXTURE
  scattering = scattering - shadow_transmittance * scattering_p;
#endif // HAS_HIGHER_ORDER_SCATTERING_TEXTURE

  single_mie_scattering =
      single_mie_scattering - shadow_transmittance * single_mie_scattering_p;
#ifdef COMBINED_SCATTERING_TEXTURES
  single_mie_scattering = GetExtrapolatedSingleMieScattering(
      atmosphere, vec4(scattering, single_mie_scattering.r));
#endif // COMBINED_SCATTERING_TEXTURES

  // Hack to avoid rendering artifacts when the sun is below the horizon.
  single_mie_scattering = single_mie_scattering *
      smoothstep(Number(0.0), Number(0.01), mu_s);

  return scattering * RayleighPhaseFunction(nu) + single_mie_scattering *
      MiePhaseFunction(atmosphere.mie_phase_function_g, nu);
}

IrradianceSpectrum GetSunAndSkyIrradiance(
    const AtmosphereParameters atmosphere,
    const TransmittanceTexture transmittance_texture,
    const IrradianceTexture irradiance_texture,
    const Position point, const Direction normal, const Direction sun_direction,
    out IrradianceSpectrum sky_irradiance) {
  Length r = length(point);
  Number mu_s = dot(point, sun_direction) / r;

  // Indirect irradiance (approximated if the surface is not horizontal).
  sky_irradiance = GetIrradiance(atmosphere, irradiance_texture, r, mu_s) *
      (1.0 + dot(normal, point) / r) * 0.5;

  // Direct irradiance.
  return atmosphere.solar_irradiance *
      GetTransmittanceToSun(
          atmosphere, transmittance_texture, r, mu_s) *
      max(dot(normal, sun_direction), 0.0);
}

// @shotamatsuda: Added for the clouds.
IrradianceSpectrum GetSunAndSkyScalarIrradiance(
    const AtmosphereParameters atmosphere,
    const TransmittanceTexture transmittance_texture,
    const IrradianceTexture irradiance_texture,
    const Position point, const Direction sun_direction,
    out IrradianceSpectrum sky_irradiance) {
  Length r = length(point);
  Number mu_s = dot(point, sun_direction) / r;

  // Indirect irradiance. Integral over sphere yields 2π.
  sky_irradiance = GetIrradiance(atmosphere, irradiance_texture, r, mu_s) *
      2.0 * PI;

  // Direct irradiance. Omit the cosine term.
  return atmosphere.solar_irradiance *
      GetTransmittanceToSun(atmosphere, transmittance_texture, r, mu_s);
}

Luminance3 GetSolarLuminance() {
  return ATMOSPHERE.solar_irradiance /
      (PI * ATMOSPHERE.sun_angular_radius * ATMOSPHERE.sun_angular_radius) *
      SUN_SPECTRAL_RADIANCE_TO_LUMINANCE;
}

Luminance3 GetSkyLuminance(
    const Position camera, Direction view_ray, const Length shadow_length,
    const Direction sun_direction, out DimensionlessSpectrum transmittance) {
  return GetSkyRadiance(ATMOSPHERE, transmittance_texture,
      scattering_texture, single_mie_scattering_texture,
      camera, view_ray, shadow_length, sun_direction,
      transmittance) * SKY_SPECTRAL_RADIANCE_TO_LUMINANCE;
}

Luminance3 GetSkyLuminanceToPoint(
    const Position camera, const Position point, const Length shadow_length,
    const Direction sun_direction, out DimensionlessSpectrum transmittance) {
  return GetSkyRadianceToPoint(ATMOSPHERE, transmittance_texture,
      scattering_texture, single_mie_scattering_texture,
      camera, point, shadow_length, sun_direction, transmittance) *
      SKY_SPECTRAL_RADIANCE_TO_LUMINANCE;
}

Illuminance3 GetSunAndSkyIlluminance(
    const Position p, const Direction normal, const Direction sun_direction,
    out IrradianceSpectrum sky_irradiance) {
  IrradianceSpectrum sun_irradiance = GetSunAndSkyIrradiance(
      ATMOSPHERE, transmittance_texture, irradiance_texture, p, normal,
      sun_direction, sky_irradiance);
  sky_irradiance *= SKY_SPECTRAL_RADIANCE_TO_LUMINANCE;
  return sun_irradiance * SUN_SPECTRAL_RADIANCE_TO_LUMINANCE;
}

// @shotamatsuda: Added for the clouds.
Illuminance3 GetSunAndSkyScalarIlluminance(
    const Position p, const Direction sun_direction,
    out IrradianceSpectrum sky_irradiance) {
  IrradianceSpectrum sun_irradiance = GetSunAndSkyScalarIrradiance(
      ATMOSPHERE, transmittance_texture, irradiance_texture, p,
      sun_direction, sky_irradiance);
  sky_irradiance *= SKY_SPECTRAL_RADIANCE_TO_LUMINANCE;
  return sun_irradiance * SUN_SPECTRAL_RADIANCE_TO_LUMINANCE;
}

#define GetSolarRadiance GetSolarLuminance
#define GetSkyRadiance GetSkyLuminance
#define GetSkyRadianceToPoint GetSkyLuminanceToPoint
#define GetSunAndSkyIrradiance GetSunAndSkyIlluminance
#define GetSunAndSkyScalarIrradiance GetSunAndSkyScalarIlluminance
`,Bh=new _(.2126,.7152,.0722),Hh=["solarIrradiance","sunAngularRadius","bottomRadius","topRadius","rayleighDensity","rayleighScattering","mieDensity","mieScattering","mieExtinction","miePhaseFunctionG","absorptionDensity","absorptionExtinction","groundAlbedo","muSMin","skyRadianceToLuminance","sunRadianceToLuminance"];function Uh(t,e){if(e!=null)for(const r of Hh){const i=e[r];i!=null&&(t[r]instanceof _?t[r].copy(i):t[r]=i)}}class Yt{constructor(e,r,i,n,s){this.width=e,this.expTerm=r,this.expScale=i,this.linearTerm=n,this.constantTerm=s}toUniform(){return new P({width:this.width,exp_term:this.expTerm,exp_scale:this.expScale,linear_term:this.linearTerm,constant_term:this.constantTerm})}}const Xn=class{constructor(e){this.solarIrradiance=new _(1.474,1.8504,1.91198),this.sunAngularRadius=.004675,this.bottomRadius=636e4,this.topRadius=642e4,this.rayleighDensity=[new Yt(0,0,0,0,0),new Yt(0,1,-.125,0,0)],this.rayleighScattering=new _(.005802,.013558,.0331),this.mieDensity=[new Yt(0,0,0,0,0),new Yt(0,1,-.833333,0,0)],this.mieScattering=new _(.003996,.003996,.003996),this.mieExtinction=new _(.00444,.00444,.00444),this.miePhaseFunctionG=.8,this.absorptionDensity=[new Yt(25,0,0,1/15,-2/3),new Yt(0,0,0,-1/15,8/3)],this.absorptionExtinction=new _(65e-5,.001881,85e-6),this.groundAlbedo=new Be().setScalar(.1),this.muSMin=Math.cos(qn(120)),this.sunRadianceToLuminance=new _(98242.786222,69954.398112,66475.012354),this.skyRadianceToLuminance=new _(114974.916437,71305.954816,65310.548555),this.sunRadianceToRelativeLuminance=new _,this.skyRadianceToRelativeLuminance=new _,Uh(this,e);const r=Bh.dot(this.sunRadianceToLuminance);this.sunRadianceToRelativeLuminance.copy(this.sunRadianceToLuminance).divideScalar(r),this.skyRadianceToRelativeLuminance.copy(this.skyRadianceToLuminance).divideScalar(r)}toUniform(){return new P({solar_irradiance:this.solarIrradiance,sun_angular_radius:this.sunAngularRadius,bottom_radius:this.bottomRadius*xi,top_radius:this.topRadius*xi,rayleigh_density:{layers:this.rayleighDensity.map(e=>e.toUniform().value)},rayleigh_scattering:this.rayleighScattering,mie_density:{layers:this.mieDensity.map(e=>e.toUniform().value)},mie_scattering:this.mieScattering,mie_extinction:this.mieExtinction,mie_phase_function_g:this.miePhaseFunctionG,absorption_density:{layers:this.absorptionDensity.map(e=>e.toUniform().value)},absorption_extinction:this.absorptionExtinction,ground_albedo:this.groundAlbedo,mu_s_min:this.muSMin})}};Xn.DEFAULT=new Xn;let Ui=Xn;const Gh=`precision highp sampler2DArray;

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

#include "bruneton/definitions"

uniform AtmosphereParameters ATMOSPHERE;
uniform vec3 SUN_SPECTRAL_RADIANCE_TO_LUMINANCE;
uniform vec3 SKY_SPECTRAL_RADIANCE_TO_LUMINANCE;

uniform sampler2D transmittance_texture;
uniform sampler3D scattering_texture;
uniform sampler2D irradiance_texture;
uniform sampler3D single_mie_scattering_texture;
uniform sampler3D higher_order_scattering_texture;

#include "bruneton/common"
#include "bruneton/runtime"

uniform sampler2D normalBuffer;

uniform mat4 projectionMatrix;
uniform mat4 viewMatrix;
uniform mat4 inverseProjectionMatrix;
uniform mat4 inverseViewMatrix;
uniform float bottomRadius;
uniform mat4 worldToECEFMatrix;
uniform float geometricErrorCorrectionAmount;
uniform vec3 sunDirection;
uniform float cosSunAngularRadius;
uniform vec3 moonDirection;
uniform float moonAngularRadius;
uniform float lunarRadianceScale;
uniform float albedoScale;

#include "sky"

#ifdef HAS_LIGHTING_MASK
uniform sampler2D lightingMaskBuffer;
#endif // HAS_LIGHTING_MASK

// prettier-ignore
#define LIGHTING_MASK_CHANNEL_ LIGHTING_MASK_CHANNEL

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
varying vec3 vGeometryAltitudeCorrection;
varying vec3 vEllipsoidRadiiSquared;

vec3 readNormal(const vec2 uv, out bool degenerate) {
  vec3 normal = texture(normalBuffer, uv).xyz;
  degenerate = normal == vec3(0.0);
  #ifdef OCT_ENCODED_NORMAL
  return unpackVec2ToNormal(normal.xy);
  #else // OCT_ENCODED_NORMAL
  return 2.0 * normal - 1.0;
  #endif // OCT_ENCODED_NORMAL
}

void correctGeometricError(inout vec3 positionECEF, inout vec3 normalECEF) {
  // TODO: The error is pronounced at the edge of the ellipsoid due to the
  // large difference between the sphere position and the unprojected position
  // at the current fragment. Calculating the sphere position from the fragment
  // UV may resolve this.

  // Correct way is slerp, but this will be small-angle interpolation anyways.
  vec3 sphereNormal = normalize(positionECEF / vEllipsoidRadiiSquared);
  vec3 spherePosition = ATMOSPHERE.bottom_radius * sphereNormal;
  normalECEF = mix(normalECEF, sphereNormal, geometricErrorCorrectionAmount);
  positionECEF = mix(positionECEF, spherePosition, geometricErrorCorrectionAmount);
}

#if defined(SUN_LIGHT) || defined(SKY_LIGHT)

vec3 getSunSkyIrradiance(
  const vec3 positionECEF,
  const vec3 normal,
  const vec3 inputColor,
  const float sunTransmittance
) {
  // Assume lambertian BRDF. If both SUN_LIGHT and SKY_LIGHT are not defined,
  // regard the inputColor as radiance at the texel.
  vec3 diffuse = inputColor * albedoScale * RECIPROCAL_PI;
  vec3 skyIrradiance;
  vec3 sunIrradiance = GetSunAndSkyIrradiance(positionECEF, normal, sunDirection, skyIrradiance);

  #ifdef HAS_SHADOW
  sunIrradiance *= sunTransmittance;
  #endif // HAS_SHADOW

  #if defined(SUN_LIGHT) && defined(SKY_LIGHT)
  return diffuse * (sunIrradiance + skyIrradiance);
  #elif defined(SUN_LIGHT)
  return diffuse * sunIrradiance;
  #elif defined(SKY_LIGHT)
  return diffuse * skyIrradiance;
  #endif // defined(SUN_LIGHT) && defined(SKY_LIGHT)
}

#endif // defined(SUN_LIGHT) || defined(SKY_LIGHT)

#if defined(TRANSMITTANCE) || defined(INSCATTER)

void applyTransmittanceInscatter(const vec3 positionECEF, float shadowLength, inout vec3 radiance) {
  vec3 transmittance;
  vec3 inscatter = GetSkyRadianceToPoint(
    vCameraPosition,
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
  #if defined(HAS_LIGHTING_MASK) && defined(DEBUG_SHOW_LIGHTING_MASK)
  outputColor.rgb = vec3(texture(lightingMaskBuffer, uv).LIGHTING_MASK_CHANNEL_);
  outputColor.a = 1.0;
  return;
  #endif // defined(HAS_LIGHTING_MASK) && defined(DEBUG_SHOW_LIGHTING_MASK)

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

  vec3 rayDirection = normalize(vRayDirection);
  vec3 dRDdx = dFdx(rayDirection);
  vec3 dRDdy = dFdy(rayDirection);
  float fragmentAngle = length(dRDdx + dRDdy) / length(rayDirection);

  float depth = readDepthValue(depthBuffer, uv);
  if (depth >= 1.0 - 1e-8) {
    #ifdef SKY
    outputColor.rgb = getSkyRadiance(
      vCameraPosition,
      rayDirection,
      shadowLength,
      sunDirection,
      moonDirection,
      moonAngularRadius,
      lunarRadianceScale,
      fragmentAngle
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
  vec3 worldPosition = (inverseViewMatrix * vec4(viewPosition, 1.0)).xyz;
  vec3 positionECEF = (worldToECEFMatrix * vec4(worldPosition, 1.0)).xyz;
  positionECEF = positionECEF * METER_TO_LENGTH_UNIT + vGeometryAltitudeCorrection;

  vec3 viewNormal;
  bool degenerateNormal = false;
  #ifdef RECONSTRUCT_NORMAL
  vec3 dVPdx = dFdx(viewPosition);
  vec3 dVPdy = dFdy(viewPosition);
  viewNormal = normalize(cross(dVPdx, dVPdy));
  #elif defined(HAS_NORMALS)
  viewNormal = readNormal(uv, degenerateNormal);
  #endif // defined(HAS_NORMALS)

  #if defined(RECONSTRUCT_NORMAL) || defined(HAS_NORMALS)
  vec3 worldNormal = (inverseViewMatrix * vec4(viewNormal, 0.0)).xyz;
  vec3 normalECEF = (worldToECEFMatrix * vec4(worldNormal, 0.0)).xyz;
  #else // defined(RECONSTRUCT_NORMAL) || defined(HAS_NORMALS)
  vec3 normalECEF = normalize(positionECEF);
  #endif // defined(RECONSTRUCT_NORMAL) || defined(HAS_NORMALS)

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
  #if defined(SUN_LIGHT) || defined(SKY_LIGHT)
  // WORKAROUND: When both post-process lighting and sky options are enabled,
  // stars have degenerate normals. We use this to disable irradiance, which is
  // irrelevant for them.
  if (!degenerateNormal) {
    radiance = getSunSkyIrradiance(positionECEF, normalECEF, inputColor.rgb, sunTransmittance);
  } else {
    radiance = inputColor.rgb;
  }
  #ifdef HAS_LIGHTING_MASK
  float lightingMask = texture(lightingMaskBuffer, uv).LIGHTING_MASK_CHANNEL_;
  radiance = mix(inputColor.rgb, radiance, lightingMask);
  #endif // HAS_LIGHTING_MASK
  #else // defined(SUN_LIGHT) || defined(SKY_LIGHT)
  radiance = inputColor.rgb;
  #endif // defined(SUN_LIGHT) || defined(SKY_LIGHT)

  #if defined(TRANSMITTANCE) || defined(INSCATTER)
  applyTransmittanceInscatter(positionECEF, shadowLength, radiance);
  #endif // defined(TRANSMITTANCE) || defined(INSCATTER)

  outputColor = vec4(radiance, inputColor.a);

  #ifdef HAS_OVERLAY
  outputColor.rgb = outputColor.rgb * (1.0 - overlay.a) + overlay.rgb;
  #endif // HAS_OVERLAY
}
`,zh=`uniform mat4 inverseViewMatrix;
uniform mat4 inverseProjectionMatrix;
uniform vec3 cameraPosition;
uniform mat4 worldToECEFMatrix;
uniform vec3 altitudeCorrection;
uniform float geometricErrorCorrectionAmount;
uniform vec3 ellipsoidRadii;

varying vec3 vCameraPosition;
varying vec3 vRayDirection;
varying vec3 vGeometryAltitudeCorrection;
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

  vec3 cameraPositionECEF = (worldToECEFMatrix * vec4(origin, 1.0)).xyz;
  vCameraPosition = (cameraPositionECEF + altitudeCorrection) * METER_TO_LENGTH_UNIT;
  vRayDirection = (worldToECEFMatrix * vec4(direction, 0.0)).xyz;

  vGeometryAltitudeCorrection = altitudeCorrection * METER_TO_LENGTH_UNIT;
  // Gradually turn off the altitude correction on geometries as the geometric
  // error correction takes effect, because that on the ideal sphere will be
  // over corrected.
  // See: https://github.com/takram-design-engineering/three-geospatial/pull/23#issuecomment-2542914656
  #ifdef CORRECT_GEOMETRIC_ERROR
  vGeometryAltitudeCorrection *= 1.0 - geometricErrorCorrectionAmount;
  #endif // CORRECT_GEOMETRIC_ERROR

  vec3 radii = ellipsoidRadii * METER_TO_LENGTH_UNIT;
  vEllipsoidRadiiSquared = radii * radii;
}
`,dc=`vec3 getLunarRadiance(const float moonAngularRadius) {
  // Not a physical number but the order of 10^-6 relative to the sun may fit.
  vec3 radiance =
    ATMOSPHERE.solar_irradiance *
    0.000002 /
    (PI * moonAngularRadius * moonAngularRadius) *
    SUN_SPECTRAL_RADIANCE_TO_LUMINANCE;
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
  const float shadowLength,
  const vec3 sunDirection,
  const vec3 moonDirection,
  const float moonAngularRadius,
  const float lunarRadianceScale,
  const float fragmentAngle
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

  #ifdef SUN
  float viewDotSun = dot(rayDirection, sunDirection);
  if (viewDotSun > cosSunAngularRadius) {
    float angle = acos(clamp(viewDotSun, -1.0, 1.0));
    float antialias = smoothstep(
      ATMOSPHERE.sun_angular_radius,
      ATMOSPHERE.sun_angular_radius - fragmentAngle,
      angle
    );
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
`;var kh=Object.defineProperty,Oe=(t,e,r,i)=>{for(var n=void 0,s=t.length-1,a;s>=0;s--)(a=t[s])&&(n=a(e,r,n)||n);return n&&kh(e,r,n),n};const Wh=new _,Vh=new _,jh=new zo,Yh={blendFunction:te.NORMAL,octEncodedNormal:!1,reconstructNormal:!1,ellipsoid:lt.WGS84,correctAltitude:!0,correctGeometricError:!0,sunLight:!1,skyLight:!1,transmittance:!0,inscatter:!0,albedoScale:1,sky:!1,sun:!0,moon:!0,moonAngularRadius:.0045,lunarRadianceScale:1,ground:!0};class Le extends ad{constructor(e=new bi,r,i=Ui.DEFAULT){const{blendFunction:n,normalBuffer:s=null,octEncodedNormal:a,reconstructNormal:o,irradianceTexture:c=null,scatteringTexture:l=null,transmittanceTexture:u=null,singleMieScatteringTexture:d=null,higherOrderScatteringTexture:p=null,ellipsoid:f,correctAltitude:h,correctGeometricError:v,sunDirection:S,sunLight:g,skyLight:x,transmittance:b,inscatter:I,albedoScale:R,sky:D,sun:A,moon:M,moonDirection:B,moonAngularRadius:N,lunarRadianceScale:j,ground:K}={...Yh,...r};super("AerialPerspectiveEffect",gh(Pi(Gh,{core:{depth:bh,packing:Ih,math:Mh,transform:Ch,raySphereIntersection:uc,cascadedShadowMaps:Rh,interleavedGradientNoise:Ah,vogelDisk:Dh},bruneton:{common:Ts,definitions:ws,runtime:_s},sky:dc})),{blendFunction:n,vertexShader:zh,attributes:Uo.DEPTH,uniforms:new Map(Object.entries({normalBuffer:new P(s),projectionMatrix:new P(new J),viewMatrix:new P(new J),inverseProjectionMatrix:new P(new J),inverseViewMatrix:new P(new J),cameraPosition:new P(new _),bottomRadius:new P(i.bottomRadius),ellipsoidRadii:new P(new _),worldToECEFMatrix:new P(new J),altitudeCorrection:new P(new _),geometricErrorCorrectionAmount:new P(0),sunDirection:new P((S==null?void 0:S.clone())??new _),cosSunAngularRadius:new P(i.sunAngularRadius),albedoScale:new P(R),moonDirection:new P((B==null?void 0:B.clone())??new _),moonAngularRadius:new P(N),lunarRadianceScale:new P(j),overlayBuffer:new P(null),shadowBuffer:new P(null),shadowMapSize:new P(new At),shadowIntervals:new P([]),shadowMatrices:new P([]),inverseShadowMatrices:new P([]),shadowFar:new P(0),shadowTopHeight:new P(0),shadowRadius:new P(3),stbnTexture:new P(null),frame:new P(0),shadowLengthBuffer:new P(null),lightingMaskBuffer:new P(null),ATMOSPHERE:i.toUniform(),SUN_SPECTRAL_RADIANCE_TO_LUMINANCE:new P(i.sunRadianceToRelativeLuminance),SKY_SPECTRAL_RADIANCE_TO_LUMINANCE:new P(i.skyRadianceToRelativeLuminance),irradiance_texture:new P(c),scattering_texture:new P(l),transmittance_texture:new P(u),single_mie_scattering_texture:new P(null),higher_order_scattering_texture:new P(null)})),defines:new Map([["TRANSMITTANCE_TEXTURE_WIDTH",Fi.toFixed(0)],["TRANSMITTANCE_TEXTURE_HEIGHT",Bi.toFixed(0)],["SCATTERING_TEXTURE_R_SIZE",gs.toFixed(0)],["SCATTERING_TEXTURE_MU_SIZE",vs.toFixed(0)],["SCATTERING_TEXTURE_MU_S_SIZE",Ss.toFixed(0)],["SCATTERING_TEXTURE_NU_SIZE",ys.toFixed(0)],["IRRADIANCE_TEXTURE_WIDTH",Oi.toFixed(0)],["IRRADIANCE_TEXTURE_HEIGHT",Li.toFixed(0)],["METER_TO_LENGTH_UNIT",xi.toFixed(7)]])}),this.camera=e,this.atmosphere=i,this.overlay=null,this.shadow=null,this.shadowLength=null,this.lightingMask=null,this.hasNormals=!1,this.combinedScatteringTextures=!1,this.hasHigherOrderScatteringTexture=!1,this.shadowSampleCount=8,this.octEncodedNormal=a,this.reconstructNormal=o,this.singleMieScatteringTexture=d,this.higherOrderScatteringTexture=p,this.ellipsoid=f,this.correctAltitude=h,this.correctGeometricError=v,this.sunLight=g,this.skyLight=x,this.transmittance=b,this.inscatter=I,this.sky=D,this.sun=A,this.moon=M,this.ground=K}get mainCamera(){return this.camera}set mainCamera(e){this.camera=e}copyCameraSettings(e){const{projectionMatrix:r,matrixWorldInverse:i,projectionMatrixInverse:n,matrixWorld:s}=e,a=this.uniforms;a.get("projectionMatrix").value.copy(r),a.get("viewMatrix").value.copy(i),a.get("inverseProjectionMatrix").value.copy(n),a.get("inverseViewMatrix").value.copy(s);const o=e.getWorldPosition(a.get("cameraPosition").value),c=a.get("worldToECEFMatrix").value,l=Wh.copy(o).applyMatrix4(c);try{const d=jh.setFromECEF(l).height,p=Vh.set(0,this.ellipsoid.maximumRadius,-Math.max(0,d)).applyMatrix4(r);a.get("geometricErrorCorrectionAmount").value=lh(ch(p.y,41.5,13.8,0,1))}catch{return}const u=a.get("altitudeCorrection");this.correctAltitude?Hi(l,this.atmosphere.bottomRadius,this.ellipsoid,u.value):u.value.setScalar(0)}updateOverlay(){let e=!1;const{uniforms:r,defines:i,overlay:n}=this,s=i.has("HAS_OVERLAY"),a=n!=null;return a!==s&&(a?i.set("HAS_OVERLAY","1"):(i.delete("HAS_OVERLAY"),r.get("overlayBuffer").value=null),e=!0),a&&(r.get("overlayBuffer").value=n.map),e}updateShadow(){let e=!1;const{uniforms:r,defines:i,shadow:n}=this,s=i.has("HAS_SHADOW"),a=n!=null;if(a!==s&&(a?i.set("HAS_SHADOW","1"):(i.delete("HAS_SHADOW"),r.get("shadowBuffer").value=null),e=!0),a){const o=i.get("SHADOW_CASCADE_COUNT"),c=`${n.cascadeCount}`;o!==c&&(i.set("SHADOW_CASCADE_COUNT",n.cascadeCount.toFixed(0)),e=!0),r.get("shadowBuffer").value=n.map,r.get("shadowMapSize").value=n.mapSize,r.get("shadowIntervals").value=n.intervals,r.get("shadowMatrices").value=n.matrices,r.get("inverseShadowMatrices").value=n.inverseMatrices,r.get("shadowFar").value=n.far,r.get("shadowTopHeight").value=n.topHeight}return e}updateShadowLength(){let e=!1;const{uniforms:r,defines:i,shadowLength:n}=this,s=i.has("HAS_SHADOW_LENGTH"),a=n!=null;return a!==s&&(a?i.set("HAS_SHADOW_LENGTH","1"):(i.delete("HAS_SHADOW_LENGTH"),r.get("shadowLengthBuffer").value=null),e=!0),a&&(r.get("shadowLengthBuffer").value=n.map),e}updateLightingMask(){let e=!1;const{uniforms:r,defines:i,lightingMask:n}=this,s=i.has("HAS_LIGHTING_MASK"),a=n!=null;if(a!==s&&(a?i.set("HAS_LIGHTING_MASK","1"):(i.delete("HAS_LIGHTING_MASK"),r.get("lightingMaskBuffer").value=null),e=!0),a){r.get("lightingMaskBuffer").value=n.map;const o=i.get("LIGHTING_MASK_CHANNEL"),c=n.channel;c!==o&&(/^[rgba]$/.test(c)?(i.set("LIGHTING_MASK_CHANNEL",c),e=!0):console.error(`Expression validation failed: ${c}`))}return e}update(e,r,i){this.copyCameraSettings(this.camera);let n=!1;n||(n=this.updateOverlay()),n||(n=this.updateShadow()),n||(n=this.updateShadowLength()),n||(n=this.updateLightingMask()),n&&this.setChanged(),++this.uniforms.get("frame").value}get normalBuffer(){return this.uniforms.get("normalBuffer").value}set normalBuffer(e){this.uniforms.get("normalBuffer").value=e,this.hasNormals=e!=null}get irradianceTexture(){return this.uniforms.get("irradiance_texture").value}set irradianceTexture(e){this.uniforms.get("irradiance_texture").value=e}get scatteringTexture(){return this.uniforms.get("scattering_texture").value}set scatteringTexture(e){this.uniforms.get("scattering_texture").value=e}get transmittanceTexture(){return this.uniforms.get("transmittance_texture").value}set transmittanceTexture(e){this.uniforms.get("transmittance_texture").value=e}get singleMieScatteringTexture(){return this.uniforms.get("single_mie_scattering_texture").value}set singleMieScatteringTexture(e){this.uniforms.get("single_mie_scattering_texture").value=e,this.combinedScatteringTextures=e==null}get higherOrderScatteringTexture(){return this.uniforms.get("higher_order_scattering_texture").value}set higherOrderScatteringTexture(e){this.uniforms.get("higher_order_scattering_texture").value=e,this.hasHigherOrderScatteringTexture=e!=null}get ellipsoid(){return this._ellipsoid}set ellipsoid(e){this._ellipsoid=e,this.uniforms.get("ellipsoidRadii").value.copy(e.radii)}get worldToECEFMatrix(){return this.uniforms.get("worldToECEFMatrix").value}get sunDirection(){return this.uniforms.get("sunDirection").value}get sunAngularRadius(){return this.uniforms.get("ATMOSPHERE").value.sun_angular_radius}set sunAngularRadius(e){this.uniforms.get("ATMOSPHERE").value.sun_angular_radius=e,this.uniforms.get("cosSunAngularRadius").value=Math.cos(e)}get albedoScale(){return this.uniforms.get("albedoScale").value}set albedoScale(e){this.uniforms.get("albedoScale").value=e}get moonDirection(){return this.uniforms.get("moonDirection").value}get moonAngularRadius(){return this.uniforms.get("moonAngularRadius").value}set moonAngularRadius(e){this.uniforms.get("moonAngularRadius").value=e}get lunarRadianceScale(){return this.uniforms.get("lunarRadianceScale").value}set lunarRadianceScale(e){this.uniforms.get("lunarRadianceScale").value=e}get stbnTexture(){return this.uniforms.get("stbnTexture").value}set stbnTexture(e){this.uniforms.get("stbnTexture").value=e}get shadowRadius(){return this.uniforms.get("shadowRadius").value}set shadowRadius(e){this.uniforms.get("shadowRadius").value=e}}Oe([Te("OCT_ENCODED_NORMAL")],Le.prototype,"octEncodedNormal");Oe([Te("RECONSTRUCT_NORMAL")],Le.prototype,"reconstructNormal");Oe([Te("HAS_NORMALS")],Le.prototype,"hasNormals");Oe([Te("COMBINED_SCATTERING_TEXTURES")],Le.prototype,"combinedScatteringTextures");Oe([Te("HAS_HIGHER_ORDER_SCATTERING_TEXTURE")],Le.prototype,"hasHigherOrderScatteringTexture");Oe([Te("CORRECT_GEOMETRIC_ERROR")],Le.prototype,"correctGeometricError");Oe([Te("SUN_LIGHT")],Le.prototype,"sunLight");Oe([Te("SKY_LIGHT")],Le.prototype,"skyLight");Oe([Te("TRANSMITTANCE")],Le.prototype,"transmittance");Oe([Te("INSCATTER")],Le.prototype,"inscatter");Oe([Te("SKY")],Le.prototype,"sky");Oe([Te("SUN")],Le.prototype,"sun");Oe([Te("MOON")],Le.prototype,"moon");Oe([Te("GROUND")],Le.prototype,"ground");Oe([uh("SHADOW_SAMPLE_COUNT",{min:1,max:16})],Le.prototype,"shadowSampleCount");var Kh=Object.defineProperty,hc=(t,e,r,i)=>{for(var n=void 0,s=t.length-1,a;s>=0;s--)(a=t[s])&&(n=a(e,r,n)||n);return n&&Kh(e,r,n),n};const qh=new _;function Xh(t,e){let r="",i="";for(let n=1;n<e;++n)r+=`layout(location = ${n}) out float renderTarget${n};
`,i+=`renderTarget${n} = 0.0;
`;return t.replace("#include <mrt_layout>",r).replace("#include <mrt_output>",i)}const xs={ellipsoid:lt.WGS84,correctAltitude:!0,renderTargetCount:1};class Gi extends rl{constructor(e,r=Ui.DEFAULT){const{irradianceTexture:i=null,scatteringTexture:n=null,transmittanceTexture:s=null,singleMieScatteringTexture:a=null,higherOrderScatteringTexture:o=null,ellipsoid:c,correctAltitude:l,sunDirection:u,sunAngularRadius:d,renderTargetCount:p,...f}={...xs,...e};super({toneMapped:!1,depthWrite:!1,depthTest:!1,...f,uniforms:{cameraPosition:new P(new _),worldToECEFMatrix:new P(new J),altitudeCorrection:new P(new _),sunDirection:new P((u==null?void 0:u.clone())??new _),cosSunAngularRadius:new P(r.sunAngularRadius),ATMOSPHERE:r.toUniform(),SUN_SPECTRAL_RADIANCE_TO_LUMINANCE:new P(r.sunRadianceToRelativeLuminance),SKY_SPECTRAL_RADIANCE_TO_LUMINANCE:new P(r.skyRadianceToRelativeLuminance),irradiance_texture:new P(i),scattering_texture:new P(n),transmittance_texture:new P(s),single_mie_scattering_texture:new P(null),higher_order_scattering_texture:new P(null),...f.uniforms},defines:{PI:`${Math.PI}`,TRANSMITTANCE_TEXTURE_WIDTH:Fi.toFixed(0),TRANSMITTANCE_TEXTURE_HEIGHT:Bi.toFixed(0),SCATTERING_TEXTURE_R_SIZE:gs.toFixed(0),SCATTERING_TEXTURE_MU_SIZE:vs.toFixed(0),SCATTERING_TEXTURE_MU_S_SIZE:Ss.toFixed(0),SCATTERING_TEXTURE_NU_SIZE:ys.toFixed(0),IRRADIANCE_TEXTURE_WIDTH:Oi.toFixed(0),IRRADIANCE_TEXTURE_HEIGHT:Li.toFixed(0),METER_TO_LENGTH_UNIT:xi.toFixed(7),...f.defines}}),this.atmosphere=r,this.combinedScatteringTextures=!1,this.hasHigherOrderScatteringTexture=!1,this.singleMieScatteringTexture=a,this.higherOrderScatteringTexture=o,this.ellipsoid=c,this.correctAltitude=l,d!=null&&(this.sunAngularRadius=d),this.renderTargetCount=p}copyCameraSettings(e){const r=this.uniforms,i=e.getWorldPosition(r.cameraPosition.value),n=qh.copy(i).applyMatrix4(r.worldToECEFMatrix.value),s=r.altitudeCorrection.value;this.correctAltitude?Hi(n,this.atmosphere.bottomRadius,this.ellipsoid,s):s.setScalar(0)}onBeforeCompile(e,r){e.fragmentShader=Xh(e.fragmentShader,this.renderTargetCount)}onBeforeRender(e,r,i,n,s,a){this.copyCameraSettings(i)}get irradianceTexture(){return this.uniforms.irradiance_texture.value}set irradianceTexture(e){this.uniforms.irradiance_texture.value=e}get scatteringTexture(){return this.uniforms.scattering_texture.value}set scatteringTexture(e){this.uniforms.scattering_texture.value=e}get transmittanceTexture(){return this.uniforms.transmittance_texture.value}set transmittanceTexture(e){this.uniforms.transmittance_texture.value=e}get singleMieScatteringTexture(){return this.uniforms.single_mie_scattering_texture.value}set singleMieScatteringTexture(e){this.uniforms.single_mie_scattering_texture.value=e,this.combinedScatteringTextures=e==null}get higherOrderScatteringTexture(){return this.uniforms.higher_order_scattering_texture.value}set higherOrderScatteringTexture(e){this.uniforms.higher_order_scattering_texture.value=e,this.hasHigherOrderScatteringTexture=e!=null}get worldToECEFMatrix(){return this.uniforms.worldToECEFMatrix.value}get sunDirection(){return this.uniforms.sunDirection.value}get sunAngularRadius(){return this.uniforms.ATMOSPHERE.value.sun_angular_radius}set sunAngularRadius(e){this.uniforms.ATMOSPHERE.value.sun_angular_radius=e,this.uniforms.cosSunAngularRadius.value=Math.cos(e)}get renderTargetCount(){return this._renderTargetCount}set renderTargetCount(e){e!==this.renderTargetCount&&(this._renderTargetCount=e,this.needsUpdate=!0)}}hc([Te("COMBINED_SCATTERING_TEXTURES")],Gi.prototype,"combinedScatteringTextures");hc([Te("HAS_HIGHER_ORDER_SCATTERING_TEXTURE")],Gi.prototype,"hasHigherOrderScatteringTexture");var ot;(function(t){t.Sun="Sun",t.Moon="Moon",t.Mercury="Mercury",t.Venus="Venus",t.Earth="Earth",t.Mars="Mars",t.Jupiter="Jupiter",t.Saturn="Saturn",t.Uranus="Uranus",t.Neptune="Neptune",t.Pluto="Pluto",t.SSB="SSB",t.EMB="EMB",t.Star1="Star1",t.Star2="Star2",t.Star3="Star3",t.Star4="Star4",t.Star5="Star5",t.Star6="Star6",t.Star7="Star7",t.Star8="Star8"})(ot||(ot={}));ot.Star1,ot.Star2,ot.Star3,ot.Star4,ot.Star5,ot.Star6,ot.Star7,ot.Star8;var Fa;(function(t){t[t.From2000=0]="From2000",t[t.Into2000=1]="Into2000"})(Fa||(Fa={}));var Ba;(function(t){t[t.Pericenter=0]="Pericenter",t[t.Apocenter=1]="Apocenter"})(Ba||(Ba={}));var Ha;(function(t){t.Penumbral="penumbral",t.Partial="partial",t.Annular="annular",t.Total="total"})(Ha||(Ha={}));var Ua;(function(t){t[t.Invalid=0]="Invalid",t[t.Ascending=1]="Ascending",t[t.Descending=-1]="Descending"})(Ua||(Ua={}));function mc(t){return Math.sqrt(Math.max(t,0))}function $h(t){return Math.max(t,0)}function Qh(t,e,r){const{bottomRadius:i}=t;return r<0&&e**2*(r**2-1)+i**2>=0}function Zh(t,e,r){const{topRadius:i}=t,n=e**2*(r**2-1)+i**2;return $h(-e*r+mc(n))}function Ei(t,e){return .5/e+t*(1-1/e)}const Jh=new _,Ga=new _,em=new _,za=new WeakMap;function tm(t){t.image;let e=Oa(t.image.data)?t.image.data:Oa(t.userData.imageData)?t.userData.imageData:void 0;if(t.type===Ro&&e instanceof Uint16Array){const r=za.get(e.buffer);r==null?(e=new dt(e.buffer),za.set(e.buffer,e)):e=r}return e}function si(t,e,r){const i=e*4;return r.set(t[i],t[i+1],t[i+2])}function pc(t,e,r){const i=tm(t);if(i==null)return r.setScalar(0);t.image;const{width:n,height:s}=t.image,a=_i(e.x,0,1)*(n-1),o=_i(e.y,0,1)*(s-1),c=Math.floor(a),l=Math.floor(o),u=a-c,d=o-l,p=u,f=d,h=c%n,v=(h+1)%n,S=l%s,g=(S+1)%s,x=si(i,S*n+h,Jh),b=si(i,S*n+v,Ga),I=x.lerp(b,p),R=si(i,g*n+h,Ga),D=si(i,g*n+v,em),A=R.lerp(D,p);return r.copy(I.lerp(A,f))}function rm(t,e,r,i){const{topRadius:n,bottomRadius:s}=t,a=Math.sqrt(n**2-s**2),o=mc(e**2-s**2),c=Zh(t,e,r),l=n-e,u=o+a,d=(c-l)/(u-l),p=o/a;return i.set(Ei(d,Fi),Ei(p,Bi))}const im=new _,vn=new _,nm=new At;function ka(t,e,r,i=new Be,{ellipsoid:n=lt.WGS84,correctAltitude:s=!0}={},a=Ui.DEFAULT){const o=im.copy(e);if(s){const h=n.projectOnSurface(e,vn);h!=null&&o.sub(n.getOsculatingSphereCenter(h,a.bottomRadius,vn))}const c=vn;let l=o.length(),u=o.dot(r);const{topRadius:d}=a,p=-u-Math.sqrt(u**2-l**2+d**2);if(p>0&&(l=d,u+=p),l>d)c.set(1,1,1);else{const h=u/l;if(Qh(a,l,h))c.setScalar(0);else{const v=rm(a,l,h,nm);pc(t,v,c)}}const f=c.multiply(a.solarIrradiance).multiply(a.sunRadianceToRelativeLuminance);return i.setFromVector3(f)}function sm({topRadius:t,bottomRadius:e},r,i,n){const s=(r-e)/(t-e),a=i*.5+.5;return n.set(Ei(a,Oi),Ei(s,Li))}const am=1/Math.sqrt(Math.PI),Sn=Math.sqrt(3)/(2*Math.sqrt(Math.PI)),om=new _,yn=new _,cm=new At,lm=new il,um={ellipsoid:lt.WGS84,correctAltitude:!0};class dm extends bo{constructor(e,r=Ui.DEFAULT){super(),this.atmosphere=r,this.worldToECEFMatrix=new J;const{irradianceTexture:i=null,ellipsoid:n,correctAltitude:s,sunDirection:a}={...um,...e};this.irradianceTexture=i,this.ellipsoid=n,this.correctAltitude=s,this.sunDirection=(a==null?void 0:a.clone())??new _}update(){if(this.irradianceTexture==null)return;const e=this.worldToECEFMatrix,r=lm.setFromMatrix4(e).transpose(),i=this.getWorldPosition(om).applyMatrix4(e);if(this.correctAltitude){const u=this.ellipsoid.projectOnSurface(i,yn);u!=null&&i.add(Hi(u,this.atmosphere.bottomRadius,this.ellipsoid,yn))}const n=i.length(),s=i.dot(this.sunDirection)/n,a=sm(this.atmosphere,n,s,cm),o=pc(this.irradianceTexture,a,yn);o.multiply(this.atmosphere.skyRadianceToRelativeLuminance);const c=this.ellipsoid.getSurfaceNormal(i).applyMatrix3(r),l=this.sh.coefficients;l[0].copy(o).multiplyScalar(am),l[1].copy(o).multiplyScalar(Sn*c.y),l[2].copy(o).multiplyScalar(Sn*c.z),l[3].copy(o).multiplyScalar(Sn*c.x)}}const hm=`precision highp float;
precision highp sampler3D;

#define RECIPROCAL_PI 0.3183098861837907

#include "core/raySphereIntersection"

#include "bruneton/definitions"

uniform AtmosphereParameters ATMOSPHERE;
uniform vec3 SUN_SPECTRAL_RADIANCE_TO_LUMINANCE;
uniform vec3 SKY_SPECTRAL_RADIANCE_TO_LUMINANCE;

uniform sampler2D transmittance_texture;
uniform sampler3D scattering_texture;
uniform sampler2D irradiance_texture;
uniform sampler3D single_mie_scattering_texture;
uniform sampler3D higher_order_scattering_texture;

#include "bruneton/common"
#include "bruneton/runtime"

uniform vec3 sunDirection;
uniform float cosSunAngularRadius;
uniform vec3 moonDirection;
uniform float moonAngularRadius;
uniform float lunarRadianceScale;
uniform vec3 groundAlbedo;

#include "sky"

#ifdef HAS_SHADOW_LENGTH
uniform sampler2D shadowLengthBuffer;
#endif // HAS_SHADOW_LENGTH

in vec2 vUv;
in vec3 vCameraPosition;
in vec3 vRayDirection;

layout(location = 0) out vec4 outputColor;

#include <mrt_layout>

void main() {
  float shadowLength = 0.0;
  #ifdef HAS_SHADOW_LENGTH
  shadowLength = texture(shadowLengthBuffer, vUv).r;
  #endif // HAS_SHADOW_LENGTH

  vec3 cameraPosition = vCameraPosition;
  vec3 rayDirection = normalize(vRayDirection);
  vec3 dRDdx = dFdx(rayDirection);
  vec3 dRDdy = dFdy(rayDirection);
  float fragmentAngle = length(dRDdx + dRDdy) / length(rayDirection);

  #ifdef GROUND_ALBEDO

  float r = length(cameraPosition);
  float mu = dot(cameraPosition, rayDirection) / r;
  bool intersectsGround = RayIntersectsGround(ATMOSPHERE, r, mu);
  if (intersectsGround) {
    float distanceToGround = raySphereFirstIntersection(
      cameraPosition,
      rayDirection,
      ATMOSPHERE.bottom_radius
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
      ATMOSPHERE.bottom_radius * surfaceNormal,
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
      lunarRadianceScale,
      fragmentAngle
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
    lunarRadianceScale,
    fragmentAngle
  );

  #endif // GROUND_ALBEDO

  outputColor.a = 1.0;

  #include <mrt_output>
}
`,mm=`precision highp float;
precision highp sampler3D;

uniform mat4 inverseProjectionMatrix;
uniform mat4 inverseViewMatrix;
uniform vec3 cameraPosition;
uniform mat4 worldToECEFMatrix;
uniform vec3 altitudeCorrection;

layout(location = 0) in vec3 position;

out vec2 vUv;
out vec3 vCameraPosition;
out vec3 vRayDirection;

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

  vec3 cameraPositionECEF = (worldToECEFMatrix * vec4(origin, 1.0)).xyz;
  vCameraPosition = (cameraPositionECEF + altitudeCorrection) * METER_TO_LENGTH_UNIT;
  vRayDirection = (worldToECEFMatrix * vec4(direction, 0.0)).xyz;

  gl_Position = vec4(position.xy, 1.0, 1.0);
}
`;var pm=Object.defineProperty,Es=(t,e,r,i)=>{for(var n=void 0,s=t.length-1,a;s>=0;s--)(a=t[s])&&(n=a(e,r,n)||n);return n&&pm(e,r,n),n};const fm={...xs,sun:!0,moon:!0,moonAngularRadius:.0045,lunarRadianceScale:1,ground:!0,groundAlbedo:new Be(0)};class zi extends Gi{constructor(e){const{sun:r,moon:i,moonDirection:n,moonAngularRadius:s,lunarRadianceScale:a,ground:o,groundAlbedo:c,...l}={...fm,...e};super({name:"SkyMaterial",glslVersion:Dr,vertexShader:mm,fragmentShader:Pi(hm,{core:{raySphereIntersection:uc},bruneton:{common:Ts,definitions:ws,runtime:_s},sky:dc}),...l,uniforms:{inverseProjectionMatrix:new P(new J),inverseViewMatrix:new P(new J),moonDirection:new P((n==null?void 0:n.clone())??new _),moonAngularRadius:new P(s),lunarRadianceScale:new P(a),groundAlbedo:new P(c.clone()),shadowLengthBuffer:new P(null),...l.uniforms},defines:{PERSPECTIVE_CAMERA:"1"},depthWrite:!1,depthTest:!0}),this.shadowLength=null,this.sun=r,this.moon=i,this.ground=o}onBeforeRender(e,r,i,n,s,a){super.onBeforeRender(e,r,i,n,s,a);const{uniforms:o,defines:c}=this;o.inverseProjectionMatrix.value.copy(i.projectionMatrixInverse),o.inverseViewMatrix.value.copy(i.matrixWorld);const l=c.PERSPECTIVE_CAMERA!=null,u=i.isPerspectiveCamera===!0;u!==l&&(u?c.PERSPECTIVE_CAMERA="1":delete c.PERSPECTIVE_CAMERA,this.needsUpdate=!0);const d=this.groundAlbedo,p=c.GROUND_ALBEDO!=null,f=d.r!==0||d.g!==0||d.b!==0;f!==p&&(f?this.defines.GROUND_ALBEDO="1":delete this.defines.GROUND_ALBEDO,this.needsUpdate=!0);const h=this.shadowLength,v=c.HAS_SHADOW_LENGTH!=null,S=h!=null;S!==v&&(S?c.HAS_SHADOW_LENGTH="1":(delete c.HAS_SHADOW_LENGTH,o.shadowLengthBuffer.value=null),this.needsUpdate=!0),S&&(o.shadowLengthBuffer.value=h.map)}get moonDirection(){return this.uniforms.moonDirection.value}get moonAngularRadius(){return this.uniforms.moonAngularRadius.value}set moonAngularRadius(e){this.uniforms.moonAngularRadius.value=e}get lunarRadianceScale(){return this.uniforms.lunarRadianceScale.value}set lunarRadianceScale(e){this.uniforms.lunarRadianceScale.value=e}get groundAlbedo(){return this.uniforms.groundAlbedo.value}}Es([Te("SUN")],zi.prototype,"sun");Es([Te("MOON")],zi.prototype,"moon");Es([Te("GROUND")],zi.prototype,"ground");const gm=`precision highp float;
precision highp sampler3D;

#include "bruneton/definitions"

uniform AtmosphereParameters ATMOSPHERE;
uniform vec3 SUN_SPECTRAL_RADIANCE_TO_LUMINANCE;
uniform vec3 SKY_SPECTRAL_RADIANCE_TO_LUMINANCE;

uniform sampler2D transmittance_texture;
uniform sampler3D scattering_texture;
uniform sampler2D irradiance_texture;
uniform sampler3D single_mie_scattering_texture;
uniform sampler3D higher_order_scattering_texture;

#include "bruneton/common"
#include "bruneton/runtime"

uniform vec3 sunDirection;

in vec3 vCameraPosition;
in vec3 vRayDirection;

layout(location = 0) out vec4 outputColor;

#include <mrt_layout>

in vec3 vColor;

void main() {
  #if !defined(PERSPECTIVE_CAMERA)
  outputColor = vec4(0.0);
  discard; // Rendering celestial objects without perspective doesn't make sense.
  #endif // !defined(PERSPECTIVE_CAMERA)

  #ifdef BACKGROUND
  vec3 rayDirection = normalize(vRayDirection);
  float r = length(vCameraPosition);
  float mu = dot(vCameraPosition, rayDirection) / r;

  if (RayIntersectsGround(ATMOSPHERE, r, mu)) {
    discard;
  }

  vec3 transmittance;
  vec3 radiance = GetSkyRadiance(
    vCameraPosition,
    normalize(vRayDirection),
    0.0, // Shadow length
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
`,vm=`precision highp float;
precision highp sampler3D;

#define saturate(x) clamp(x, 0.0, 1.0)

uniform mat4 projectionMatrix;
uniform mat4 modelViewMatrix;
uniform mat4 viewMatrix;
uniform mat4 matrixWorld;
uniform vec3 cameraPosition;
uniform float cameraFar;
uniform mat4 worldToECEFMatrix;
uniform vec3 altitudeCorrection;
uniform float pointSize;
uniform vec2 magnitudeRange;
uniform float intensity;

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
  vColor = vec3(intensity * color);
  vColor *= saturate((v.z - v.y) / (v.x - v.y));

  #ifdef BACKGROUND
  vec3 worldDirection = normalize(matrixWorld * vec4(position, 1.0)).xyz;
  vec3 cameraPositionECEF = (worldToECEFMatrix * vec4(cameraPosition, 1.0)).xyz;
  vCameraPosition = (cameraPositionECEF + altitudeCorrection) * METER_TO_LENGTH_UNIT;
  vRayDirection = (worldToECEFMatrix * vec4(worldDirection, 0.0)).xyz;
  gl_Position =
    projectionMatrix * viewMatrix * vec4(cameraPosition + worldDirection * cameraFar, 1.0);
  #else // BACKGROUND
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  #endif // BACKGROUND

  gl_PointSize = pointSize;
}
`;var Sm=Object.defineProperty,fc=(t,e,r,i)=>{for(var n=void 0,s=t.length-1,a;s>=0;s--)(a=t[s])&&(n=a(e,r,n)||n);return n&&Sm(e,r,n),n};const ym={...xs,pointSize:1,intensity:1,background:!0,ground:!0};class gc extends Gi{constructor(e){const{pointSize:r,intensity:i,background:n,ground:s,...a}={...ym,...e};super({name:"StarsMaterial",glslVersion:Dr,vertexShader:vm,fragmentShader:Pi(gm,{bruneton:{common:Ts,definitions:ws,runtime:_s}}),...a,uniforms:{projectionMatrix:new P(new J),modelViewMatrix:new P(new J),viewMatrix:new P(new J),matrixWorld:new P(new J),cameraFar:new P(0),pointSize:new P(0),magnitudeRange:new P(new At(-2,8)),intensity:new P(i),...a.uniforms},defines:{PERSPECTIVE_CAMERA:"1"},depthWrite:!0,depthTest:!0}),this.pointSize=r,this.background=n,this.ground=s}onBeforeRender(e,r,i,n,s,a){super.onBeforeRender(e,r,i,n,s,a);const o=this.uniforms;o.projectionMatrix.value.copy(i.projectionMatrix),o.modelViewMatrix.value.copy(i.modelViewMatrix),o.viewMatrix.value.copy(i.matrixWorldInverse),o.matrixWorld.value.copy(s.matrixWorld),o.cameraFar.value=i.far,o.pointSize.value=this.pointSize*e.getPixelRatio();const c=i.isPerspectiveCamera===!0;this.defines.PERSPECTIVE_CAMERA!=null!==c&&(c?this.defines.PERSPECTIVE_CAMERA="1":delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}get magnitudeRange(){return this.uniforms.magnitudeRange.value}get intensity(){return this.uniforms.intensity.value}set intensity(e){this.uniforms.intensity.value=e}}fc([Te("BACKGROUND")],gc.prototype,"background");fc([Te("GROUND")],gc.prototype,"ground");const Wa=new Be("#fff2d8"),Va=1e-8,Tn=3e4,ja=-1e3,Ya=1e7,Tm=5e6,wm=8e6,_m=new _,Or=t=>Number.isFinite(t.x)&&Number.isFinite(t.y)&&Number.isFinite(t.z),Ka=t=>!Number.isFinite(t.longitude)||Math.abs(t.longitude)>180?"longitude must be a finite value in degrees within [-180, 180]":!Number.isFinite(t.latitude)||Math.abs(t.latitude)>90?"latitude must be a finite value in degrees within [-90, 90]":!Number.isFinite(t.altitudeMeters)||t.altitudeMeters<ja||t.altitudeMeters>Ya?`altitudeMeters must be within [${ja}, ${Ya}]`:null,xm=(t,e,r)=>{if(!Number.isFinite(t.getTime()))return"instant must be a valid Date";const i=Ka(e);if(i)return`observer ${i}`;if(!r)return null;const n=Ka(r.observer);return n?`sky reference observer ${n}`:Or(r.scenePosition)?null:"sky reference scenePosition must contain finite metre coordinates"},vc=t=>{if(!Or(t.directionToSunECEF))return"sun direction contains a non-finite component";if(Math.abs(t.directionToSunECEF.length()-1)>1e-6)return"sun direction is not normalized";if(!t.ecefToSceneMatrix.elements.every(Number.isFinite))return"ECEF-to-scene matrix contains a non-finite component";const e=t.ecefToSceneMatrix.elements,r=[new _(e[0],e[4],e[8]),new _(e[1],e[5],e[9]),new _(e[2],e[6],e[10])];if(r.some(s=>Math.abs(s.length()-1)>1e-6)||Math.abs(r[0].dot(r[1]))>1e-6||Math.abs(r[0].dot(r[2]))>1e-6||Math.abs(r[1].dot(r[2]))>1e-6||Math.abs(e[3])>1e-12||Math.abs(e[7])>1e-12||Math.abs(e[11])>1e-12||Math.abs(e[12])>1e-12||Math.abs(e[13])>1e-12||Math.abs(e[14])>1e-12||Math.abs(e[15]-1)>1e-12)return"ECEF-to-scene matrix is not an affine orthonormal rotation";const i=t.ecefToSceneMatrix.determinant();if(!Number.isFinite(i)||Math.abs(i-1)>1e-6)return"ECEF-to-scene matrix is not a proper orthonormal rotation";if(!Or(t.ellipsoidCenterECEF))return"ellipsoid center contains a non-finite component";const n=t.ellipsoidCenterECEF.length();return n<Tm||n>wm?"ellipsoid center is outside the plausible WGS84 distance range":null},Em=t=>{var r;const e=vc(t.skyFrame);return e||(Or(t.directionToSun)?Math.abs(t.directionToSun.length()-1)>1e-6?"scene sun direction is not normalized":![t.color.r,t.color.g,t.color.b].every(Number.isFinite)||![t.radiance.r,t.radiance.g,t.radiance.b].every(Number.isFinite)||!Number.isFinite(t.relativeIntensity)||t.relativeIntensity<0||t.relativeIntensity>1||!Number.isFinite(t.azimuthDegrees)||!Number.isFinite(t.elevationDegrees)?"sunlight color, intensity, or angles contain invalid values":(r=t.skyIrradianceCoefficients)!=null&&r.some(i=>!Or(i))?"sky irradiance contains a non-finite coefficient":null:"scene sun direction contains a non-finite component")},wn={useTransmittanceLut:!0,useIrradianceLut:!0},Rm=({east:t,north:e,up:r})=>new J().set(t.x,t.y,t.z,0,r.x,r.y,r.z,0,-e.x,-e.y,-e.z,0,0,0,0,1);function Rs({longitude:t,latitude:e,altitudeMeters:r}){const i=new zo(qn(t),qn(e),r).toECEF(),n=new _,s=new _,a=new _;return lt.WGS84.getEastNorthUpVectors(i,n,s,a),{observerECEF:i,east:n,north:s,up:a}}const Sc=(t,{east:e,north:r,up:i},n)=>n.set(t.dot(e),t.dot(i),-t.dot(r)).normalize(),yc=(t,e,r)=>{const i=r?Rs(r.observer):e,n=Rm(i);r!=null&&r.sceneFromLocal&&n.premultiply(r.sceneFromLocal);const s=n.clone().invert(),a=((r==null?void 0:r.scenePosition)??new _).clone().applyMatrix4(s).sub(i.observerECEF);return{directionToSunECEF:t.clone(),ecefToSceneMatrix:n,ellipsoidCenterECEF:a}},bm=(t,e,{observerECEF:r,east:i,north:n,up:s})=>t!=null&&t.irradianceTexture?(t.worldToECEFMatrix.makeBasis(i,s,_m.copy(n).negate()).setPosition(r),t.sunDirection.copy(e),t.position.set(0,0,0),t.updateMatrixWorld(!0),t.update(),t.sh.coefficients.map(a=>a.clone())):null,Tc=t=>{const e=Js(Math.asin(je(t.y,-1,1)));return{azimuthDegrees:(Js(Math.atan2(t.x,-t.z))+360)%360,elevationDegrees:e}},Am=(t,e)=>{const r=Rs(e.observer),i=Sc(t.skyFrame.directionToSunECEF,r,new _);return e.sceneFromLocal&&i.transformDirection(e.sceneFromLocal),{...t,directionToSun:i,...Tc(i),skyFrame:yc(t.skyFrame.directionToSunECEF,r,e)}},Mm=(t,e,r,i=null,n)=>{const s=Rs(e),{observerECEF:a,up:o}=s,c=new _(...sl(t)),l=Sc(c,s,new _);n!=null&&n.sceneFromLocal&&l.transformDirection(n.sceneFromLocal);const u=yc(c,s,n),d=bm(i,c,s),{azimuthDegrees:p,elevationDegrees:f}=Tc(l);if(!r){const b=Math.sqrt(je(l.y,0,1));return{directionToSun:l,color:Wa.clone(),relativeIntensity:b,radiance:Wa.clone().multiplyScalar(b),atmosphericTransmittanceReady:!1,atmosphericIrradianceReady:d!==null,skyIrradianceCoefficients:d,azimuthDegrees:p,elevationDegrees:f,skyFrame:u}}const h=ka(r,a,c,new Be,{ellipsoid:lt.WGS84,correctAltitude:!0}),v=ka(r,a,o,new Be,{ellipsoid:lt.WGS84,correctAltitude:!0}),S=Math.max(h.r,h.g,h.b,0),g=Math.max(v.r,v.g,v.b,Va),x=S>Va?h.clone().multiplyScalar(1/S):new Be(0,0,0);return{directionToSun:l,color:x,relativeIntensity:je(S/g,0,1),radiance:h,atmosphericTransmittanceReady:!0,atmosphericIrradianceReady:d!==null,skyIrradianceCoefficients:d,azimuthDegrees:p,elevationDegrees:f,skyFrame:u}};class Im{transmittanceTexture=null;irradianceTexture=null;scatteringTexture=null;skyLightProbe=new dm({ellipsoid:lt.WGS84,correctAltitude:!0});transmittanceLoading=!1;irradianceLoading=!1;scatteringLoading=!1;transmittanceRetryAt=0;irradianceRetryAt=0;scatteringRetryAt=0;disposed=!1;get ready(){return this.transmittanceTexture!==null&&this.irradianceTexture!==null}get skyReady(){return this.skyTextures!==null}get skyTextures(){return!this.transmittanceTexture||!this.irradianceTexture||!this.scatteringTexture?null:{transmittanceTexture:this.transmittanceTexture,irradianceTexture:this.irradianceTexture,scatteringTexture:this.scatteringTexture}}get isSkyLoading(){return this.transmittanceLoading||this.irradianceLoading||this.scatteringLoading}isLoadingFor(e=wn){return e.useTransmittanceLut&&this.transmittanceLoading||e.useIrradianceLut&&this.irradianceLoading}ensure(e,r=wn){if(this.disposed)return;const i=()=>{this.isLoadingFor(r)||e()};r.useTransmittanceLut&&this.ensureTransmittance(i),r.useIrradianceLut&&this.ensureIrradiance(i)}ensureSky(e){if(this.disposed||this.skyReady)return;let r=!1;const i=()=>{!r&&!this.isSkyLoading&&(r=!0,e())};this.ensureTransmittance(i),this.ensureIrradiance(i),this.ensureScattering(i)}ensureTransmittance(e){this.transmittanceTexture||this.transmittanceLoading||Date.now()<this.transmittanceRetryAt||(this.transmittanceLoading=!0,new pn(hi,fn,{width:Fi,height:Bi}).load(`${gn}/transmittance.bin`,r=>{if(this.transmittanceLoading=!1,this.disposed){r.dispose();return}this.transmittanceRetryAt=0,this.transmittanceTexture=r,e()},void 0,r=>{this.transmittanceLoading=!1,this.disposed||(this.transmittanceRetryAt=Date.now()+Tn,console.error("[SHADOW] Takram transmittance LUT failed",r),e())}))}ensureIrradiance(e){this.irradianceTexture||this.irradianceLoading||Date.now()<this.irradianceRetryAt||(this.irradianceLoading=!0,new pn(hi,fn,{width:Oi,height:Li}).load(`${gn}/irradiance.bin`,r=>{if(this.irradianceLoading=!1,this.disposed){r.dispose();return}this.irradianceRetryAt=0,this.irradianceTexture=r,this.skyLightProbe.irradianceTexture=r,e()},void 0,r=>{this.irradianceLoading=!1,this.disposed||(this.irradianceRetryAt=Date.now()+Tn,console.error("[SHADOW] Takram irradiance LUT failed",r),e())}))}ensureScattering(e){this.scatteringTexture||this.scatteringLoading||Date.now()<this.scatteringRetryAt||(this.scatteringLoading=!0,new pn(nl,fn,{width:Ph,height:Oh,depth:Lh}).load(`${gn}/scattering.bin`,r=>{if(this.scatteringLoading=!1,this.disposed){r.dispose();return}this.scatteringRetryAt=0,this.scatteringTexture=r,e()},void 0,r=>{this.scatteringLoading=!1,this.disposed||(this.scatteringRetryAt=Date.now()+Tn,console.error("[SHADOW] Takram scattering LUT failed",r),e())}))}evaluate(e,r,i=wn,n){return Mm(e,r,i.useTransmittanceLut?this.transmittanceTexture:null,i.useIrradianceLut?this.skyLightProbe:null,n)}dispose(){var e,r,i;this.disposed||(this.disposed=!0,this.transmittanceLoading=!1,this.irradianceLoading=!1,this.scatteringLoading=!1,this.transmittanceRetryAt=0,this.irradianceRetryAt=0,this.scatteringRetryAt=0,(e=this.transmittanceTexture)==null||e.dispose(),(r=this.irradianceTexture)==null||r.dispose(),(i=this.scatteringTexture)==null||i.dispose(),this.transmittanceTexture=null,this.irradianceTexture=null,this.scatteringTexture=null,this.skyLightProbe.irradianceTexture=null,this.skyLightProbe.sh.zero())}}const Cm="shadow-simulation-atmospheric-sky",zr=2,Dm=-100,ui="carmaOutputToSrgb",_n="carmaDisplayExposure",Nm=new _,Pm=new _;class Om extends zi{observerScenePosition=new _;hasObserverScenePosition=!1;viewCamera=null;copyCameraSettings(e){if(super.copyCameraSettings(e),!this.hasObserverScenePosition)return;const r=this.uniforms;if(r.cameraPosition.value.copy(this.observerScenePosition),!this.correctAltitude)return;const i=Nm.copy(this.observerScenePosition).applyMatrix4(r.worldToECEFMatrix.value);Hi(i,this.atmosphere.bottomRadius,this.ellipsoid,r.altitudeCorrection.value)}onBeforeRender(e,r,i,n,s,a){super.onBeforeRender(e,r,this.viewCamera??i,n,s,a)}}const Lm=t=>{t.uniforms.toneMappingExposure=new P(1),t.uniforms[ui]=new P(!1),t.uniforms[_n]=new P(zr),t.fragmentShader=t.fragmentShader.replace("precision highp sampler3D;",`precision highp sampler3D;

uniform bool ${ui};
uniform float ${_n};
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
  if (RayIntersectsGround(
    ATMOSPHERE,
    length(cameraPosition),
    dot(cameraPosition, rayDirection) / length(cameraPosition)
  )) {
    vec3 localUp = normalize(cameraPosition);
    float radius = max(length(cameraPosition), ATMOSPHERE.bottom_radius);
    float tangentMu = -sqrt(max(
      0.0,
      1.0 - ATMOSPHERE.bottom_radius * ATMOSPHERE.bottom_radius / (radius * radius)
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
  }`).replace("outputColor.a = 1.0;",`outputColor.rgb *= ${_n};
  outputColor.a = 1.0;
  if (${ui}) {
    // SkyMaterial is raw GLSL: match terrain's AgX on the display target.
    // Offscreen samples stay linear HDR until the shared final composite.
    outputColor.rgb = AgXToneMapping(outputColor.rgb);
    outputColor = carmaLinearToSrgb(outputColor);
  }`)},Fm=t=>{const e=new Om({groundAlbedo:t,moon:!1,side:Ao,sun:!0});Lm(e),e.depthTest=!1,e.depthWrite=!1;const r=new Eo;r.setAttribute("position",new al([-1,-1,0,3,-1,0,-1,3,0],3));const i=new Lr(r,e);return i.name=Cm,i.visible=!1,i.frustumCulled=!1,i.renderOrder=Dm,i.castShadow=!1,i.receiveShadow=!1,i.onBeforeRender=n=>{e.uniforms.toneMappingExposure.value=n.toneMappingExposure,e.uniforms[ui].value=n.getRenderTarget()===null},{mesh:i,update(n,s){return s?vc(n)?!1:(i.visible=!0,e.irradianceTexture=s.irradianceTexture,e.scatteringTexture=s.scatteringTexture,e.transmittanceTexture=s.transmittanceTexture,e.sunDirection.copy(n.directionToSunECEF),e.worldToECEFMatrix.copy(n.ecefToSceneMatrix).invert().setPosition(Pm.copy(n.ellipsoidCenterECEF).negate()),!0):(i.visible=!1,!1)},updateViewCamera(n){e.viewCamera=n},updateObserverScenePosition(n){e.observerScenePosition.copy(n),e.hasObserverScenePosition=!0},updateGroundAlbedo(n){e.groundAlbedo.copy(n)},dispose(){r.dispose(),e.dispose()}}},Bm=(t,e,r,i)=>{if(!t)return e;const n=i+t.guardMetersX,s=i+t.guardMetersY,a=p=>r.left-n>=p.left&&r.right+n<=p.right&&r.bottom-s>=p.bottom&&r.top+s<=p.top;if(a(t))return t;const o=t.right-t.left,c=t.top-t.bottom,l=Math.round((r.left+r.right)/2/t.metersPerTexelX)*t.metersPerTexelX,u=Math.round((r.bottom+r.top)/2/t.metersPerTexelY)*t.metersPerTexelY,d={...t,left:l-o/2,right:l+o/2,bottom:u-c/2,top:u+c/2};return a(d)?d:e},Hm=t=>{const e=t.receiverTexelMeters!==void 0&&Number.isFinite(t.receiverTexelMeters)&&t.receiverTexelMeters>0?t.receiverTexelMeters:t.metersPerTexel,r=je(e*1.2/Math.max(.2,t.elevationSine),.05,8),i=Math.max(t.depthRangeMeters,1),n=-je(e*4/i,Number.EPSILON,.01),s=t.maxReceiverBiasMeters!==void 0&&Number.isFinite(t.maxReceiverBiasMeters)?Math.max(0,t.maxReceiverBiasMeters):1/0,a=t.receiverBiasMeters!==void 0&&Number.isFinite(t.receiverBiasMeters)?Math.max(0,t.receiverBiasMeters):void 0;return{bias:Math.max(a===void 0?n:-a/i,-s/i),normalBias:Math.min(a??r,s)}},Um=(t,e)=>{const r=t.shadow,i=r.camera,n=r.updateMatrices,s=i.matrixAutoUpdate,a=i.matrixWorldAutoUpdate,o=new J,c=new J,l=new J,u=new J,d=new _,p=new _(0,1,0);return r.updateMatrices=function(f){i.matrixAutoUpdate=s,i.matrixWorldAutoUpdate=a,n.call(this,f);const h=t.parent;f!==t||!h||!e()||(h.updateWorldMatrix(!0,!1),u.copy(h.matrixWorld).invert(),t.target.getWorldPosition(d).applyMatrix4(u),c.lookAt(t.position,d,p).setPosition(t.position),o.copy(i.matrixWorld),i.matrixWorld.multiplyMatrices(h.matrixWorld,c),i.matrix.copy(i.matrixWorld),i.matrixWorldInverse.copy(i.matrixWorld).invert(),i.position.setFromMatrixPosition(i.matrixWorld),i.matrixAutoUpdate=!1,i.matrixWorldAutoUpdate=!1,r.matrix.multiply(o).multiply(i.matrixWorldInverse),l.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),r.getFrustum().setFromProjectionMatrix(l,i.coordinateSystem,i.reversedDepth))},()=>{r.updateMatrices=n,i.matrixAutoUpdate=s,i.matrixWorldAutoUpdate=a}},Gm=2048,wc=8192,qa=2,Xa=50,zm=1e4,km=.04,xn=25,Wm=.05,Vm=300,jm=new _(0,1,0),$a=(t,e,r=new J)=>r.lookAt(t,e,jm).setPosition(t).invert(),Ym=(t,e)=>{if(t.length===0)return null;const r=t.map(h=>h.clone().applyMatrix4(e)),i=Math.min(...r.map(({x:h})=>h)),n=Math.max(...r.map(({x:h})=>h)),s=Math.min(...r.map(({y:h})=>h)),a=Math.max(...r.map(({y:h})=>h)),o=r.map(({z:h})=>-h),c=Math.max(0,Math.min(...o)),l=Math.max(c+.01,Math.max(...o)),u=(i+n)/2,d=(s+a)/2,p=Math.max((n-i)/2,qa/2),f=Math.max((a-s)/2,qa/2);return{left:u-p,right:u+p,bottom:d-f,top:d+f,near:c,far:l}},Km=(t,e=wc)=>t>=16?e:Math.min(e,Gm*Math.sqrt(t));class _c{constructor(e){this.host=e,this.lights=Array.from({length:1},()=>{const r=new ol(16777215,0);return r.name="shadow-simulation-sun",r.visible=!1,r.castShadow=!1,r.shadow.camera.name="shadow-simulation-shadow-camera",r.shadow.autoUpdate=!1,r.shadow.radius=0,r.shadow.bias=0,r.shadow.normalBias=Wm,e.add(r,r.target),this.restoreShadowCameras.push(Um(r,()=>this.mountedShadowCamera)),r})}lights;softSun=!1;lastSoftFit=null;maxShadowMapSize=wc;mapAllocation=null;disposed=!1;mountedShadowCamera=!1;restoreShadowCameras=[];retainedRaster=null;setMaxShadowMapSize(e){if(!Number.isFinite(e)||e<=0)return;const r=Math.max(256,Math.floor(e));this.disposed||this.maxShadowMapSize===r||(this.maxShadowMapSize=r)}setSoftSun(e){this.disposed||this.softSun===e||(e||this.restoreSunDiscCenter(),this.softSun=e,e||(this.lastSoftFit=null))}applySunDiscSample(e,r,i=!0){if(this.disposed)return;const n=this.lastSoftFit;if(!n)return;const s=Math.max(1,Math.floor(r)),a=(Math.floor(e)%s+s)%s,{angularRadius:o,tangentA:c,tangentB:l}=Ql(a,s),u=n.tangentA.clone().multiplyScalar(c).addScaledVector(n.tangentB,l).normalize(),d=n.directionToSun.clone().multiplyScalar(Math.cos(o)).addScaledVector(u,Math.sin(o)).normalize(),p=this.lights[0],[f,h]=i&&s>1?Zl(a):[0,0],v=p.shadow.camera,S=n.rasterBounds,g=f*(S.right-S.left)/p.shadow.mapSize.x,x=h*(S.top-S.bottom)/p.shadow.mapSize.y;v.left=S.left+g,v.right=S.right+g,v.bottom=S.bottom+x,v.top=S.top+x,v.updateProjectionMatrix(),p.position.copy(d).multiplyScalar(n.lightDistance).add(n.anchorPosition),p.updateMatrixWorld(!0),p.target.updateMatrixWorld(!0),p.shadow.updateMatrices(p),p.shadow.needsUpdate=!0}restoreSunDiscCenter(){if(this.disposed||!this.lastSoftFit)return;const e=this.lastSoftFit,r=this.lights[0],i=r.shadow.camera;i.left=e.rasterBounds.left,i.right=e.rasterBounds.right,i.bottom=e.rasterBounds.bottom,i.top=e.rasterBounds.top,i.updateProjectionMatrix(),r.position.copy(e.directionToSun).multiplyScalar(e.lightDistance).add(e.anchorPosition),r.updateMatrixWorld(!0),r.target.updateMatrixWorld(!0),r.shadow.updateMatrices(r),r.shadow.needsUpdate=!0}invalidate(){this.lights[0].shadow.needsUpdate=!0}update({receiverWorldPoints:e,receiverAnchorWorldPosition:r,minimumElevationMeters:i,maximumElevationMeters:n,directionToSun:s,color:a,intensity:o,shadowIntensity:c,quality:l,groundTexelFit:u=!0,stabilizeMapSize:d=!1,mapTexelBudget:p,casterMapTexelBudget:f,groundTexelTargetMeters:h,maxReceiverBiasMeters:v,receiverBiasMeters:S,receiverTexelMeters:g,rasterKey:x,mountedShadowCamera:b=!1}){var Mt,Me;if(this.disposed)return null;if(this.mountedShadowCamera=b,e.length===0){for(const Ie of this.lights)Ie.visible=!1,Ie.castShadow=!1,Ie.intensity=0,Ie.shadow.needsUpdate=!1;return null}const I=s.clone().normalize(),R=Math.max(0,n-i),D=Math.max(km,I.y),A=je((R+Vm)/D+Xa,Xa,zm),M=A+R+xn,B=Km(l,this.maxShadowMapSize),N=ua(p,Math.floor(B)**2,this.maxShadowMapSize),j=Math.floor(Math.sqrt(N)),K=new Be(a),O=r.clone(),oe=e.reduce((Ie,or)=>Math.max(Ie,or.distanceTo(r)),0),C=oe+M,k=this.lights[0];k.position.copy(I).multiplyScalar(C).add(O),k.target.position.copy(O),k.updateMatrixWorld(!0),k.target.updateMatrixWorld(!0),k.shadow.updateMatrices(k);const X=Ym(e,$a(k.position,k.target.position));if(!X)return null;const Y=Xl(oe,I.y,this.softSun?Pr:0),ue=this.softSun?Math.max(Math.tan(Pr)*C,Y.planarMeters):0,ce={maxMapSize:this.maxShadowMapSize,elevationSine:I.y,sunDiscGuardMeters:ue,groundTexelFit:u,groundTexelTargetMeters:h},we=da(X,{...ce,mapSize:j,mapTexelBudget:N,mapDimensions:d&&((Mt=this.mapAllocation)==null?void 0:Mt.texelBudget)===N&&this.mapAllocation.maxMapSize===this.maxShadowMapSize&&this.mapAllocation.groundTexelFit===u?this.mapAllocation:void 0}),L=JSON.stringify([x,N,this.maxShadowMapSize,u,h,this.softSun]),Q=this.retainedRaster,Ae=x!==void 0&&(Q==null?void 0:Q.key)===L&&Q.anchor.distanceToSquared(O)<1e-18&&Q.direction.distanceToSquared(I)<1e-18,Z=Bm(Ae?Q.fit:void 0,we,X,ue);this.retainedRaster=x===void 0?null:{key:L,anchor:O.clone(),direction:I.clone(),fit:Z};const _t=ua(f,N,this.maxShadowMapSize),ht=f===void 0?Z:da(X,{...ce,mapSize:Math.floor(Math.sqrt(_t)),mapTexelBudget:_t});this.mapAllocation={width:Z.mapWidth,height:Z.mapHeight,texelBudget:N,maxMapSize:this.maxShadowMapSize,groundTexelFit:u};const me=Math.max(Z.metersPerTexelX,Z.metersPerTexelY),Ye=Math.max(Z.guardMetersX,Z.guardMetersY),_e={left:Z.left,right:Z.right,bottom:Z.bottom,top:Z.top,near:Math.max(.01,X.near-Y.depthMeters-A-R-xn),far:Math.max(1,X.far+Y.depthMeters+R+xn)};_e.far=Math.max(_e.near+1,_e.far);const H=new _;Math.abs(I.y)>.99?H.set(1,0,0):H.crossVectors(new _(0,1,0),I).normalize();const Ke=new _().crossVectors(I,H),le=this.lights[0];le.visible=!0,le.castShadow=!0,le.intensity=o,le.color.copy(K),le.shadow.intensity=je(c,0,1),le.shadow.needsUpdate=!0,(le.shadow.mapSize.x!==Z.mapWidth||le.shadow.mapSize.y!==Z.mapHeight)&&((Me=le.shadow.map)==null||Me.dispose(),le.shadow.map=null,le.shadow.mapSize.set(Z.mapWidth,Z.mapHeight)),le.position.copy(I).multiplyScalar(C).add(O),le.target.position.copy(O);const T=Hm({metersPerTexel:me,receiverTexelMeters:g,elevationSine:I.y,depthRangeMeters:_e.far-_e.near,maxReceiverBiasMeters:v,receiverBiasMeters:S});le.shadow.bias=T.bias,le.shadow.normalBias=T.normalBias;const mt=le.shadow.camera;mt.left=_e.left,mt.right=_e.right,mt.bottom=_e.bottom,mt.top=_e.top,mt.near=_e.near,mt.far=_e.far,mt.updateProjectionMatrix(),le.updateMatrixWorld(!0),le.target.updateMatrixWorld(!0),le.shadow.updateMatrices(le),this.lastSoftFit=this.softSun?{directionToSun:I.clone(),tangentA:H,tangentB:Ke,anchorPosition:O.clone(),lightDistance:C,rasterBounds:_e}:null;const ze=k.shadow.camera;return{sampleCount:1,totalShadowTexels:Z.mapWidth*Z.mapHeight,mapTexelBudget:h===void 0?N:void 0,casterReachMeters:A,casterMetersPerTexel:[ht.metersPerTexelX,ht.metersPerTexelY],camera:{receiverPointCount:e.length,receiverLeftMeters:X.left,receiverRightMeters:X.right,receiverBottomMeters:X.bottom,receiverTopMeters:X.top,leftMeters:ze.left,rightMeters:ze.right,bottomMeters:ze.bottom,topMeters:ze.top,nearMeters:ze.near,farMeters:ze.far,shadowMapWidth:Z.mapWidth,shadowMapHeight:Z.mapHeight,viewMatrixElements:[...$a(k.position,k.target.position).elements],projectionMatrixElements:[...ze.projectionMatrix.elements],guardMeters:Ye,metersPerTexel:me,metersPerTexelX:Z.metersPerTexelX,metersPerTexelY:Z.metersPerTexelY,groundTexelWidthMeters:Z.groundTexelWidthMeters,groundTexelHeightMeters:Z.groundTexelHeightMeters,groundTexelFitLimited:Z.groundTexelFitLimited,groundTexelFit:u,groundTexelTargetMeters:h}}}dispose(){var e;if(!this.disposed){this.disposed=!0;for(const r of this.restoreShadowCameras)r();for(const r of this.lights)(e=r.shadow.map)==null||e.dispose(),this.host.remove(r.target,r)}}}const Rt=t=>{var e;(e=t.depthTexture)==null||e.dispose(),t.dispose()},Pt=(t,e)=>t*e*8;class qm{entries=new Map;retainedBytes=0;capacityBytes=0;activeVariantIds=null;hits=0;misses=0;get bytes(){return this.retainedBytes}get count(){return this.entries.size}get availableBytes(){return Math.max(0,this.capacityBytes-this.retainedBytes)}has(e){return this.entries.has(e)}setActiveVariants(e){this.activeVariantIds=e}setBudget(e,r){this.capacityBytes=Math.max(0,e-r),this.evictInactive(0);for(const i of this.entries.keys()){if(this.retainedBytes<=this.capacityBytes)break;this.remove(i)}}get(e){const r=this.entries.get(e);return r?this.hits+=1:this.misses+=1,r==null?void 0:r.target}admit(e,r,i,n=r,s={}){var o;if(this.entries.has(e))return!1;const a=Pt(i.width,i.height);return a>this.capacityBytes||(s.evictInactive!==!1&&((o=this.activeVariantIds)!=null&&o.has(n))&&this.evictInactive(a),this.retainedBytes+a>this.capacityBytes)?!1:(this.entries.set(e,{pageId:r,variantId:n,target:i,bytes:a}),this.retainedBytes+=a,!0)}invalidate(e){for(const[r,i]of this.entries)i.pageId===e&&this.remove(r)}clear(){for(const e of this.entries.keys())this.remove(e)}evictInactive(e){if(this.activeVariantIds)for(const[r,i]of this.entries){if(this.retainedBytes+e<=this.capacityBytes)break;this.activeVariantIds.has(i.variantId)||this.remove(r)}}remove(e){const r=this.entries.get(e);r&&(this.entries.delete(e),this.retainedBytes-=r.bytes,Rt(r.target))}}const Xm=16,En=4;class $m{constructor(e,r,i,n=4096,s=e){if(this.scene=e,this.renderer=r,this.memoryBudgetBytes=i,this.host=s,!Number.isFinite(i)||!(i>=Pt(64,64)))throw new RangeError("Shadow page budget must fit at least one 64-square page");if(!Number.isFinite(n)||n<64)throw new RangeError("Maximum shadow page size must be finite and at least 64");if(r.shadowMap.type!==Ji)throw new Error("Tiled shadow reference requires the shared PCF shadow path");this.maxMapSize=Math.max(64,2**Math.floor(Math.log2(Math.min(n,r.capabilities.maxTextureSize,Math.sqrt(i/8)))))}pages=new Map;activePageIds=new Set;activeSamples=1;prewarmPageIds=new Set;prewarmSamples=1;prewarmRevision=0;prewarmSink=null;prewarmCamera=new cl([]);cache=new qm;scratchBytes=0;depthRenders=0;colorPasses=0;disposed=!1;streamedTarget=null;maxMapSize;setView(e,r,i,n,s,a){if(this.disposed)return;if(this.clearPrewarmView(),![s.directionToSun.x,s.directionToSun.y,s.directionToSun.z].every(Number.isFinite)||s.directionToSun.lengthSq()===0||s.directionToSun.y<=0)throw new RangeError("Tiled shadow reference requires a finite sun direction above the horizon");const o=fu(e,r,i,n);this.activePageIds=new Set(o.map(({id:l})=>l));for(const l of o)this.configurePage(l,s,a);const c=Math.max(32,this.activePageIds.size*2);for(const[l,u]of this.pages){if(this.pages.size<=c)break;this.activePageIds.has(l)||(this.cache.invalidate(l),u.controller.dispose(),this.pages.delete(l))}this.updateActiveVariants(),this.scratchBytes=Math.max(0,...Array.from(this.activePageIds,l=>{const u=this.pages.get(l);return Pt(u.width,u.height)})),this.streamedTarget&&Pt(this.streamedTarget.width,this.streamedTarget.height)>this.scratchBytes&&(Rt(this.streamedTarget),this.streamedTarget=null),this.cache.setBudget(this.memoryBudgetBytes,this.reservedBytes)}updatePresentation(e){if(this.disposed)return;e.updateMatrixWorld(!0);const r=new J().multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i=new Fr().setFromProjectionMatrix(r),n=new Set;for(const[s,a]of this.pages)i.intersectsBox(a.receiverBounds)&&(a.screenBounds.copy(Fo(a.receiverBounds,r)),n.add(s));this.activePageIds=n,this.updateActiveVariants()}get reservedBytes(){return this.scratchBytes+(this.prewarmSink?En:0)}setPrewarmView(e,r,i,n,s,a){if(this.clearPrewarmView(),this.disposed)return;if(!Number.isSafeInteger(a)||a<1||a>4096||!(n>0&&Number.isFinite(n))||![i.x,i.y].every(l=>l>0&&Number.isFinite(l))||!s.directionToSun.toArray().every(Number.isFinite)||s.directionToSun.y<=0)throw new RangeError("Invalid shadow prewarm view");const o=new J().multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),c=new Set;for(const{id:l,bounds:u}of e){if(c.has(l)||u.isEmpty()||![...u.min.toArray(),...u.max.toArray()].every(Number.isFinite))throw new RangeError("Prewarm cells require unique IDs and finite bounds");c.add(l)}this.prewarmSamples=a;for(const l of e){if(this.prewarmPageIds.size>=Xm)break;this.activePageIds.has(l.id)||!this.pages.has(l.id)&&this.pages.size>=Math.max(32,this.activePageIds.size*2)||(this.configurePage({...l,screenBounds:new ie,groundTexelTargetMeters:Math.max(1e-9,2*n/Bo(l.bounds,o,i))},s),this.prewarmPageIds.add(l.id))}}clearPrewarmView(){this.prewarmPageIds.clear(),this.prewarmRevision+=1}get prewarmPages(){const e=[...this.prewarmPageIds].map(i=>{const n=this.pages.get(i),s=this.countPrewarmSamples(i,n);return{id:i,receiverBounds:n.receiverBounds.clone(),casterBounds:n.casterBounds.clone(),width:n.width,height:n.height,samples:this.prewarmSamples,cachedSamples:s,sampleBudget:s,limited:n.limited,canPrewarm:!1}});let r=this.cache.availableBytes-(this.prewarmSink?0:En);for(;r>0;){const i=e.filter(n=>n.sampleBudget<n.samples&&Pt(n.width,n.height)<=r).sort((n,s)=>n.sampleBudget-s.sampleBudget);if(i.length===0)break;for(const n of i){const s=Pt(n.width,n.height);s>r||(n.sampleBudget+=1,r-=s)}}return e.map(i=>({...i,canPrewarm:i.sampleBudget>i.cachedSamples}))}canPrewarm(e){return!this.disposed&&this.prewarmPages.some(r=>r.id===e&&r.canPrewarm)}countPrewarmSamples(e,r){const i=JSON.stringify([e,r.projectionKey,this.prewarmSamples]);let n=0;for(let s=0;s<this.prewarmSamples;s+=1)this.cache.has(JSON.stringify([i,s]))&&(n+=1);return n}prewarmNext(e,r,i={}){var v,S;const n=this.pages.get(r),s=!this.disposed&&this.prewarmPageIds.has(r)&&!!n,a=(g,x=!1)=>{var I;const b=s?this.countPrewarmSamples(r,n):0;return{pageId:r,rendered:g,cachedSamples:b,totalSamples:s?this.prewarmSamples:0,complete:s&&b===this.prewarmSamples,budgetLimited:x,aborted:((I=i.signal)==null?void 0:I.aborted)===!0}};if(!s||(v=i.signal)!=null&&v.aborted)return a(0);const o=this.prewarmRevision,c=n.contentRevision;if(this.renderer.shadowMap.type!==Ji)throw new Error("Shadow prewarm requires the shared PCF shadow path");const l=JSON.stringify([r,n.projectionKey,this.prewarmSamples]);let u=0;for(;u<this.prewarmSamples&&this.cache.has(JSON.stringify([l,u]));)u+=1;if(u===this.prewarmSamples)return a(0);if(!this.canPrewarm(r)||Pt(n.width,n.height)+(this.prewarmSink?0:En)>this.cache.availableBytes)return a(0,!0);this.prewarmSink||(this.prewarmSink=new Ve(1,1,{depthBuffer:!1}),this.cache.setBudget(this.memoryBudgetBytes,this.reservedBytes));const p=n.controller.lights[0];this.prewarmSamples===1?n.controller.restoreSunDiscCenter():n.controller.applySunDiscSample(u,this.prewarmSamples),p.shadow.map=null,p.shadow.needsUpdate=!0;const f=p.visible;p.visible=!0,this.prewarmCamera.layers.mask=e.layers.mask,this.prewarmCamera.matrixAutoUpdate=!1,this.prewarmCamera.matrixWorldAutoUpdate=!1,this.prewarmCamera.matrixWorld.copy(e.matrixWorld),this.prewarmCamera.matrixWorldInverse.copy(e.matrixWorldInverse),this.prewarmCamera.projectionMatrix.copy(e.projectionMatrix);let h=0;try{this.renderPrewarmDepth(p);const g=p.shadow.map;g&&(h=1,this.depthRenders+=1,((S=i.signal)!=null&&S.aborted||o!==this.prewarmRevision||c!==n.contentRevision||!this.prewarmPageIds.has(r)||!this.cache.admit(JSON.stringify([l,u]),r,g,l,{evictInactive:!1}))&&Rt(g))}catch(g){throw p.shadow.map&&Rt(p.shadow.map),g}finally{p.visible=f,p.shadow.map=null}return a(h)}renderPrewarmDepth(e){const{renderer:r,scene:i}=this,n=r.getContext(),s=r.getRenderTarget(),a=r.getActiveCubeFace(),o=r.getActiveMipmapLevel(),c=r.getViewport(new ie),l=r.getScissor(new ie),u=r.getScissorTest(),d=n.getParameter(n.DRAW_FRAMEBUFFER_BINDING),p=n.getParameter(n.READ_FRAMEBUFFER_BINDING),f=new ie().fromArray(n.getParameter(n.VIEWPORT)),h=new ie().fromArray(n.getParameter(n.SCISSOR_BOX)),v=n.isEnabled(n.SCISSOR_TEST),S=n.isEnabled(n.DEPTH_TEST),g=n.getParameter(n.DEPTH_RANGE),x=n.getParameter(n.DEPTH_WRITEMASK),b=n.getParameter(n.DEPTH_FUNC),I=n.getParameter(n.DEPTH_CLEAR_VALUE),R=n.getParameter(n.COLOR_CLEAR_VALUE),D=n.getParameter(n.COLOR_WRITEMASK),A=r.clippingPlanes,M=r.autoClear,B=i.background,N=r.xr.enabled,j=r.shadowMap.enabled,K=r.shadowMap.autoUpdate,O=r.shadowMap.needsUpdate,oe=[];i.traverse(C=>{const k=C;k.isLight&&k.castShadow&&k!==e&&oe.push(k)});try{r.resetState(),r.autoClear=!1,r.xr.enabled=!1,r.shadowMap.enabled=!0,r.shadowMap.autoUpdate=!0;for(const C of oe)C.castShadow=!1;i.background=null,r.clippingPlanes=A,r.setRenderTarget(this.prewarmSink),n.depthRange(0,1),r.render(i,this.prewarmCamera)}finally{r.clippingPlanes=A,r.autoClear=M,r.xr.enabled=N,r.shadowMap.enabled=j,r.shadowMap.autoUpdate=K,r.shadowMap.needsUpdate=O;for(const C of oe)C.castShadow=!0;i.background=B,r.resetState(),r.setRenderTarget(s,a,o),r.setViewport(c),r.setScissor(l),r.setScissorTest(u),r.state.bindFramebuffer(n.DRAW_FRAMEBUFFER,d),r.state.bindFramebuffer(n.READ_FRAMEBUFFER,p),r.state.viewport(f),r.state.scissor(h),r.state.setScissorTest(v),S?r.state.enable(n.DEPTH_TEST):r.state.disable(n.DEPTH_TEST),n.depthRange(g[0],g[1]),n.depthMask(x),n.depthFunc(b),n.clearDepth(I),n.clearColor(R[0],R[1],R[2],R[3]),n.colorMask(D[0],D[1],D[2],D[3])}}configurePage(e,r,i){let n=this.pages.get(e.id);if(!n){const u=new _c(this.host);u.setMaxShadowMapSize(this.maxMapSize),u.setSoftSun(!0),n={controller:u,projectionKey:"",lightingKey:"",presentationKey:"",corridor:new Pe,planes:[],width:0,height:0,limited:!1,screenBounds:e.screenBounds,receiverBounds:e.bounds.clone(),groundTexelTargetMeters:e.groundTexelTargetMeters,casterBounds:new Pe,contentRevision:0,casterRevision:null}}this.pages.delete(e.id),this.pages.set(e.id,n);const s=n.controller.update({...r,maxReceiverBiasMeters:i?i(e.bounds,e.groundTexelTargetMeters):r.maxReceiverBiasMeters,receiverWorldPoints:Hr(e.bounds),receiverAnchorWorldPosition:e.bounds.getCenter(new _),minimumElevationMeters:e.bounds.min.y,maximumElevationMeters:e.bounds.max.y,quality:4,groundTexelFit:!0,groundTexelTargetMeters:e.groundTexelTargetMeters});if(!s)return;const a=n.controller.lights[0];a.visible=!1;const o=s.camera,c=e.receiverObjectId===void 0?"spatial-partition-v1":"native-object-v1",l=JSON.stringify([c,o.viewMatrixElements,o.projectionMatrixElements,o.shadowMapWidth,o.shadowMapHeight,a.shadow.bias,a.shadow.normalBias,e.bounds.min,e.bounds.max]);n.projectionKey=l,n.lightingKey=JSON.stringify([r.directionToSun,r.shadowIntensity,e.bounds.min,e.bounds.max]),n.presentationKey=JSON.stringify([c,r.directionToSun,r.shadowIntensity,e.bounds.min.x,e.bounds.min.z,e.bounds.max.x,e.bounds.max.z]),n.receiverBounds.copy(e.bounds),n.receiverObjectId=e.receiverObjectId,n.groundTexelTargetMeters=e.groundTexelTargetMeters,n.screenBounds=e.screenBounds,n.width=o.shadowMapWidth,n.height=o.shadowMapHeight,n.limited=(o.groundTexelWidthMeters??1/0)>e.groundTexelTargetMeters*1.001||(o.groundTexelHeightMeters??1/0)>e.groundTexelTargetMeters*1.001,n.casterBounds.copy(gu(e.bounds,r.directionToSun,s.casterReachMeters+e.bounds.getSize(new _).length(),Pr,o.guardMeters)),n.corridor.union(n.casterBounds),n.planes=[new ct(new _(1,0,0),-e.bounds.min.x),new ct(new _(-1,0,0),e.bounds.max.x),new ct(new _(0,0,1),-e.bounds.min.z),new ct(new _(0,0,-1),e.bounds.max.z)]}invalidateCasters(e){const r=e instanceof Pe?[e]:e,i=[];for(const[n,s]of this.pages)r.some(a=>s.corridor.intersectsBox(a))&&(s.contentRevision+=1,this.cache.invalidate(n),i.push(n));return i}setCasterRevision(e,r){const i=this.pages.get(e);return!i||r===null||i.casterRevision===r?!1:(i.casterRevision=r,i.contentRevision+=1,this.cache.invalidate(e),!0)}renderSample(e,r,i){this.renderSamples(e,this.activePageIds,r,i)}renderPageSample(e,r,i,n,s){return this.disposed||!this.activePageIds.has(r)?!1:this.renderSamples(e,[r],i,n,s)>0}renderPageColor(e,r){const i=this.pages.get(r);if(this.disposed||!i||!this.activePageIds.has(r))return!1;const{renderer:n,scene:s}=this,a=n.clippingPlanes,o=n.autoClear,c=s.background,l=n.shadowMap.autoUpdate,u=n.shadowMap.needsUpdate;n.autoClear=!1,n.shadowMap.autoUpdate=!1,n.shadowMap.needsUpdate=!1,n.clippingPlanes=[...a,...i.planes],s.background=null;try{const d=pa(s,i.receiverObjectId,n,e,"color-only");return d&&(this.colorPasses+=1),d}finally{n.clippingPlanes=a,n.autoClear=o,n.shadowMap.autoUpdate=l,n.shadowMap.needsUpdate=u,s.background=c}}get accumulationPages(){return[...this.activePageIds].map(e=>{const r=this.pages.get(e),i=r.controller.lights[0];return{id:e,receiverObjectId:r.receiverObjectId,contentKey:JSON.stringify([r.lightingKey,r.contentRevision]),casterRevision:r.casterRevision,presentationKey:r.presentationKey,revision:JSON.stringify([r.projectionKey,r.contentRevision,i.color.toArray(),i.intensity,i.shadow.intensity]),screenBounds:r.screenBounds.clone(),receiverBounds:r.receiverBounds.clone(),groundTexelTargetMeters:r.groundTexelTargetMeters}})}areCastersReady(e,r){const i=this.pages.get(e);return!!(i&&r(i.casterBounds))}getPageGeometry(e){const r=this.pages.get(e);return r?{casterBounds:r.casterBounds.clone(),receiverBounds:r.receiverBounds.clone(),width:r.width,height:r.height,projectionKey:r.projectionKey}:null}get supportsOpaqueAccumulation(){let e=!0;return this.scene.traverseVisible(r=>{const i=r;if(!(!i.isMesh||!i.receiveShadow))for(const n of Array.isArray(i.material)?i.material:[i.material])n.visible&&(n.transparent||!n.depthWrite||!n.depthTest)&&(e=!1)}),e}renderSamples(e,r,i,n,s){if(this.disposed)return 0;if(this.renderer.shadowMap.type!==Ji)throw new Error("Shadow page cache must be recreated after changing the depth/filter format");if(!Number.isInteger(n)||n<1||!Number.isInteger(i)||i<0||i>=n)throw new RangeError("Shadow sample must lie within its finite-disc sequence");n!==this.activeSamples&&(this.activeSamples=n,this.updateActiveVariants());const{renderer:a,scene:o}=this,c=a.clippingPlanes,l=a.autoClear,u=o.background,d=a.getRenderTarget(),p=d==null?void 0:d.scissor.clone(),f=d==null?void 0:d.scissorTest;let h=0;a.autoClear=!1,o.background=null;try{for(const v of r){const S=this.pages.get(v),g=S.controller.lights[0];n===1?S.controller.restoreSunDiscCenter():S.controller.applySunDiscSample(i,n);const x=JSON.stringify([v,S.projectionKey,n]),b=JSON.stringify([x,i]),I=this.cache.get(b);if(!I&&this.streamedTarget&&(this.streamedTarget.width!==S.width||this.streamedTarget.height!==S.height)&&(Rt(this.streamedTarget),this.streamedTarget=null),g.shadow.map=I??this.streamedTarget,I||(this.streamedTarget=null),g.shadow.needsUpdate=!I,g.visible=!0,a.clippingPlanes=[...c,...S.planes],d){const{x:R,y:D,z:A,w:M}=s??S.screenBounds,B=Math.floor(R*d.width),N=Math.floor(D*d.height);d.scissor.set(B,N,Math.ceil((R+A)*d.width)-B,Math.ceil((D+M)*d.height)-N),d.scissorTest=!0,a.setRenderTarget(d)}try{if(pa(o,S.receiverObjectId,a,e)&&(this.colorPasses+=1,h+=1),!I&&g.shadow.map){this.depthRenders+=1;const D=g.shadow.map;this.cache.admit(b,v,D,x)||(this.streamedTarget=D)}}catch(R){throw!I&&g.shadow.map&&Rt(g.shadow.map),R}finally{g.visible=!1,g.shadow.map=null}}}finally{a.clippingPlanes=c,a.autoClear=l,o.background=u,d&&p&&(d.scissor.copy(p),d.scissorTest=f??!1,a.setRenderTarget(d))}return h}get stats(){const e=[...this.activePageIds].map(r=>this.pages.get(r));return{pages:e.length,cachedSamplePages:this.cache.count,cacheBytes:this.cache.bytes,scratchBytes:this.reservedBytes,hits:this.cache.hits,misses:this.cache.misses,depthRenders:this.depthRenders,colorPasses:this.colorPasses,limitedPages:e.filter(r=>r.limited).length,dimensions:e.map(r=>`${r.width}×${r.height}`)}}clearCache(){this.cache.clear();for(const e of this.pages.values())e.contentRevision+=1}updateActiveVariants(){this.cache.setActiveVariants(new Set([...this.activePageIds].flatMap(e=>[...new Set([1,this.activeSamples])].map(r=>JSON.stringify([e,this.pages.get(e).projectionKey,r])))))}get pageLevels(){return[...this.activePageIds].map(e=>{const r=this.pages.get(e);return{id:e,level:Math.max(0,Math.round(Math.log2(this.maxMapSize/Math.max(r.width,r.height)))),width:r.width,height:r.height}})}dispose(){var e;if(!this.disposed){this.disposed=!0,this.cache.clear(),this.streamedTarget&&Rt(this.streamedTarget),this.streamedTarget=null,(e=this.prewarmSink)==null||e.dispose(),this.prewarmSink=null,this.clearPrewarmView(),this.scratchBytes=0;for(const r of this.pages.values())r.controller.dispose();this.pages.clear(),this.activePageIds.clear()}}}const Qm=async({pages:t,signal:e,prepare:r,render:i,yieldToInput:n})=>{let s=0,a=0,o=0,c=!1;try{for(const l of t){if(e.aborted)break;if(l.cachedSamples>=l.samples){s+=1;continue}if(!l.canPrewarm){c=!0;continue}if(await n(e),e.aborted)break;const u=await r(l,e);try{if(e.aborted)break;if(!u.covered||!u.isCurrent()){a+=1;continue}const d=Math.min(l.samples,l.sampleBudget);d<l.samples&&(c=!0);for(let p=l.cachedSamples;p<d&&(await n(e),!(e.aborted||!u.isCurrent()));p+=1){const f=i(l.id,u.group,e);if(o+=f.rendered,f.complete){s+=1;break}if(f.budgetLimited){c=!0;break}if(f.aborted||!f.rendered)break}}finally{u.dispose()}}}catch(l){if(!e.aborted)throw l}return{offered:t.length,completed:s,skippedCoverage:a,renderedSamples:o,budgetLimited:c,aborted:e.aborted}},Zm=t=>{const e=globalThis.scheduler;return e!=null&&e.postTask?e.postTask(()=>{},{priority:"background",delay:0,signal:t}):Promise.reject(new Error("Background scheduler unavailable"))},Jm=({getRequest:t})=>{let e=!1,r=null,i=null,n=!1;const s=()=>{n=!1,i==null||i.abort()},a=()=>{if(!e){if(i){n=!0;return}try{const o=globalThis.scheduler;if(typeof(o==null?void 0:o.postTask)!="function")return;const c=t();if(!c||c.key===r)return;r=c.key;const l=new AbortController;i=l;let u=!1;const d=()=>{if(i!==l||u)return;i=null;const p=n;n=!1,p&&a()};try{o.postTask(async()=>{if(e||l.signal.aborted)return;const p=t();if(!(!p||p.key!==c.key)){u=!0;try{await p.run(l.signal)}finally{u=!1,d()}}},{priority:"background",delay:150,signal:l.signal}).then(d,d)}catch{d()}}catch{}}};return{onSettled:a,cancel:s,dispose(){e=!0,s()}}},xc=(t,e,r)=>JSON.stringify([t.matrixWorldInverse.elements,t.projectionMatrix.elements,e,r]),ep=(t,e)=>{if(!Number.isFinite(e)||e<t.length*8)throw new RangeError("Capture budget must fit at least one scalar/depth pixel per page");const r=[...t].sort((n,s)=>n.id<s.id?-1:n.id>s.id?1:0).map(({id:n,plan:s,screenArea:a})=>({id:n,plan:s,width:s.width,height:s.height,weight:2**Math.floor(Math.log2(Math.max(1/65536,Math.min(1,a))))}));let i=r.reduce((n,s)=>n+s.width*s.height,0);for(;i*8>e;){let n;for(const a of r)a.width===1&&a.height===1||(!n||a.width*a.height/a.weight>n.width*n.height/n.weight)&&(n=a);if(!n)break;const s=n.width*n.height;n.width>=n.height&&n.width>1?n.width/=2:n.height/=2,i-=s-n.width*n.height}return new Map(r.map(({id:n,plan:s,width:a,height:o})=>[n,a===s.width&&o===s.height?s:{...s,width:a,height:o,limited:!0,key:xc(s.camera,a,o)}]))},tp=(t,e,r)=>{const{groundTexelTargetMeters:i,maximumDimension:n,maximumPixels:s}=r;if(t.isEmpty()||![...t.min.toArray(),...t.max.toArray(),...e.toArray()].every(Number.isFinite)||!(i>0&&Number.isFinite(i))||!(n>=1&&Number.isFinite(n))||!(s>=1&&Number.isFinite(s)))throw new RangeError("Receiver capture requires finite bounds and positive allocation limits");const a=t.getCenter(new _),o=t.getSize(new _).length()*.5,c=Math.max(.001,o*.001),l=new ts;l.quaternion.copy(e).normalize(),l.position.copy(a).add(new _(0,0,o+c+1).applyQuaternion(l.quaternion)),l.updateMatrixWorld(!0);const u=new Pe().setFromPoints(Hr(t).map(g=>g.applyMatrix4(l.matrixWorldInverse)));l.left=u.min.x-c,l.right=u.max.x+c,l.bottom=u.min.y-c,l.top=u.max.y+c,l.near=Math.max(.001,-u.max.z-c),l.far=Math.max(l.near+.001,-u.min.z+c),l.updateProjectionMatrix();const d=g=>2**Math.ceil(Math.log2(Math.max(1,g/i))),p=d(l.right-l.left),f=d(l.top-l.bottom),h=2**Math.floor(Math.log2(n));let v=Math.min(p,h),S=Math.min(f,h);for(;v*S>s;)v>=S&&v>1?v/=2:S/=2;return{camera:l,width:v,height:S,limited:v<p||S<f,key:xc(l,v,S)}},rp=t=>new ll().setFromRotationMatrix(new J().extractRotation(t.matrixWorld)),Ri={namespace:"shadow-corridor-visibility",schema:"visibility-depth-world-basis-v1",maximumPayloadBytes:32*1024**2,maximumRecordBytes:33*1024**2,maximumIdentityCharacters:65536},ai={read:"read",write:"write",writePacked:"write-packed"},We=t=>{if(!t||!Number.isInteger(t.samples)||t.samples<1||t.samples>4096)return null;const e=[t.source,t.dateTime,t.corridor,t.resolution,t.geometryFingerprint];return e.some(r=>typeof r!="string"||r.length===0)||e.reduce((r,i)=>r+i.length,0)>Ri.maximumIdentityCharacters?null:JSON.stringify([Ri.schema,...e,t.samples])},Rn=(t,e)=>Array.isArray(t)&&t.length===e&&t.every(Number.isFinite),Ec=t=>{if(!t||typeof t!="object")return!1;const e=t,r=e.width*e.height;return Number.isSafeInteger(e.width)&&e.width>0&&Number.isSafeInteger(e.height)&&e.height>0&&Number.isSafeInteger(r)&&r*8<=Ri.maximumPayloadBytes&&Rn(e.captureMatrix,16)&&Rn(e.worldBasis,16)&&Rn(e.crop,4)&&e.crop[0]>=0&&e.crop[1]>=0&&e.crop[2]>0&&e.crop[3]>0&&e.crop[0]+e.crop[2]<=1.000001&&e.crop[1]+e.crop[3]<=1.000001},Qa=t=>{if(!Ec(t))return!1;const e=t,r=e.width*e.height;return e.visibility instanceof Float32Array&&e.visibility.length===r&&e.depth instanceof Float32Array&&e.depth.length===r},ip=t=>{if(!Ec(t))return!1;const e=t;return e.rgba instanceof Float32Array&&e.rgba.length===e.width*e.height*4},wr=64,$n=256*1024**2,bn=$n,np=128*1024**2,Za=8,Ja=32*1024**2,sp=4,_r=t=>{var e;t.target?((e=t.target.depthTexture)==null||e.dispose(),t.target.dispose()):(t.visibility.dispose(),t.depth.dispose())},ap=(t,e)=>t.elements.every((r,i)=>Number.isFinite(r)&&Math.abs(r-e.elements[i])<=1e-10*Math.max(1,Math.abs(r)));class Rc{constructor(e){this.renderer=e,this.copyQuad.frustumCulled=!1,this.copyScene.add(this.copyQuad)}captures=new Map;visiblePageIds=new Set;samples=0;replayCount=0;matchingPages=0;persistence;persistenceGeneration=0;disposed=!1;restoreAttempts=new Set;pendingRestores=new Map;restoreRequests=new Map;pendingWrites=new Map;persistenceOffers=new WeakMap;persistenceAttempted=new WeakSet;persistenceTimer=null;readbackBusy=!1;readbackBytes=0;packMaterial=new Zt({uniforms:{visibility:{value:null},depth:{value:null}},vertexShader:"varying vec2 uvCopy; void main() { uvCopy = position.xy * 0.5 + 0.5; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:"uniform sampler2D visibility; uniform sampler2D depth; varying vec2 uvCopy; void main() { gl_FragColor = vec4(texture2D(visibility, uvCopy).r, texture2D(depth, uvCopy).r, 0.0, 1.0); }",depthTest:!1,depthWrite:!1,blending:li,toneMapped:!1});materials=new Map;unsupportedMaterials=new WeakSet;captureSupported=!0;contentRevision=0;get revision(){return this.contentRevision}get supportsCapture(){return this.captureSupported}copyScene=new Cr;copyCamera=new bi;copyMaterial=new Zt({uniforms:{source:{value:null},crop:{value:new ie}},vertexShader:"varying vec2 uvCopy; void main() { uvCopy = position.xy * 0.5 + 0.5; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:"uniform sampler2D source; uniform vec4 crop; varying vec2 uvCopy; void main() { gl_FragColor = vec4(texture2D(source, crop.xy + uvCopy * crop.zw).r, 0.0, 0.0, 1.0); }",depthTest:!1,depthWrite:!1,blending:li,toneMapped:!1});copyQuad=new Lr(new Jn(2,2),this.copyMaterial);downsampleMaterial=new Zt({uniforms:{source:{value:null},depth:{value:null},texel:{value:new At}},vertexShader:"varying vec2 uvCopy; void main() { uvCopy = position.xy * 0.5 + 0.5; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:`uniform sampler2D source; uniform sampler2D depth;
      uniform vec2 texel; varying vec2 uvCopy;
      void main() {
        vec2 d = texel * 0.25;
        float visibility = (texture2D(source, uvCopy + d).r
          + texture2D(source, uvCopy - d).r
          + texture2D(source, uvCopy + vec2(d.x, -d.y)).r
          + texture2D(source, uvCopy + vec2(-d.x, d.y)).r) * 0.25;
        gl_FragColor = vec4(visibility, 0.0, 0.0, 1.0);
        gl_FragDepth = texture2D(depth, uvCopy).r;
      }`,depthTest:!0,depthFunc:Mo,depthWrite:!0,blending:li,toneMapped:!1});uniforms={carmaCaptureVisibility:{value:!1},carmaRetainedEnabled:{value:!1},carmaRetainedColor:{value:null},carmaRetainedDepth:{value:null},carmaRetainedMatrix:{value:new J},carmaRetainedCrop:{value:new ie(0,0,1,1)},carmaRetainedCount:{value:0},carmaRetainedBounds:{value:Array.from({length:wr},()=>new ie)}};get memoryBytes(){return[...this.captures.values()].reduce((e,r)=>e+r.bytes,this.readbackBytes)}getCapturedSize(e){const r=this.captures.get(e);return r?{width:r.width,height:r.height,samples:r.samples}:null}get stats(){return{pages:this.captures.size,samples:this.samples,matchingPages:this.matchingPages,replays:this.replayCount,bytes:this.memoryBytes}}beginFrame(e=[]){this.matchingPages=0,this.visiblePageIds=new Set(e.map(r=>r.id)),this.schedulePersistence()}has(e,r){var n;const i=this.captures.get(e.id);if(!this.canReplay(e)||(i==null?void 0:i.casterRevision)!==e.casterRevision)return!1;if(i&&i.samples>1&&i.samples>=r&&e.captureSize&&e.presentationKey&&i.crop.x===0&&i.crop.y===0&&i.crop.z===1&&i.crop.w===1)return i.width>=e.captureSize.width&&i.height>=e.captureSize.height;if(i!=null&&i.restored){const s=this.restoreRequests.get(e.id),a=(n=this.persistence)==null?void 0:n.identity(e,r);if(e.ready===!1||!(s!=null&&s.expected)||!a||We(a)!==i.persistentKey||!ap(i.matrix,s.expected))return!1;const o=e.screenBounds,c=i.crop;if(c.x>o.x+1e-6||c.y>o.y+1e-6||c.x+c.z<o.x+o.z-1e-6||c.y+c.w<o.y+o.w-1e-6)return!1}return(i==null?void 0:i.revision)===(e.contentKey??e.revision)&&i.samples===r}hasAtLeast(e,r){const i=this.captures.get(e.id);return!!(i&&i.samples>=r&&this.has(e,i.samples))}downsample(e,r,i){var S;if(!Number.isInteger(r)||!Number.isInteger(i)||r<1||i<1)return!1;const n=this.captures.get(e.id);if(!n||!this.canReplay(e))return!1;const s=Math.max(r,Math.ceil(n.width/2)),a=Math.max(i,Math.ceil(n.height/2));if(s>n.width||a>n.height||s*a>=n.width*n.height)return!1;const o=new Ve(s,a,{type:yt,format:$t,minFilter:Ce,magFilter:Ce,depthTexture:new tr(s,a,Lt),samples:0}),c=this.renderer,l=c.getRenderTarget(),u=c.getActiveCubeFace(),d=c.getActiveMipmapLevel(),p=c.getViewport(new ie),f=c.getScissor(new ie),h=c.getScissorTest(),v=c.autoClear;try{c.initRenderTarget(o),this.downsampleMaterial.uniforms.source.value=n.visibility,this.downsampleMaterial.uniforms.depth.value=n.depth,this.downsampleMaterial.uniforms.texel.value.set(1/s,1/a),this.copyQuad.material=this.downsampleMaterial,c.autoClear=!1,c.setRenderTarget(o),c.setViewport(new ie(0,0,s,a)),c.setScissorTest(!1),c.render(this.copyScene,this.copyCamera)}catch(g){throw(S=o.depthTexture)==null||S.dispose(),o.dispose(),g}finally{this.copyQuad.material=this.copyMaterial,c.setRenderTarget(l,u,d),c.setViewport(p),c.setScissor(f),c.setScissorTest(h),c.autoClear=v}return this.captures.set(e.id,{...n,target:o,visibility:o.texture,depth:o.depthTexture,width:s,height:a,bytes:s*a*8}),this.pendingWrites.delete(e.id),_r(n),this.contentRevision+=1,!0}isRestorePending(e,r){var s;const i=this.pendingRestores.get(e.id);if(!i||i.samples!==r)return!1;const n=(s=this.persistence)==null?void 0:s.identity(e,r);return!!(n&&We(n)===i.key)}setPersistence(e){this.persistence!==e&&(this.cancelPendingPersistence(),this.persistence=e)}cancelPendingPersistence(){var e;(e=this.persistence)==null||e.cache.cancelPending(),this.persistenceGeneration+=1,this.restoreAttempts.clear(),this.pendingRestores.clear(),this.restoreRequests.clear(),this.pendingWrites.clear(),this.persistenceOffers=new WeakMap,this.persistenceAttempted=new WeakSet,this.persistenceTimer!==null&&clearTimeout(this.persistenceTimer),this.persistenceTimer=null}beginSolarTransition(){this.cancelPendingPersistence()}canPresent(e){return this.canReplay(e)}prepareRestore(e,r,i){if(this.disposed)return;if(this.restoreRequests.set(e.id,{page:e,samples:r,expected:i==null?void 0:i.clone()}),this.restoreRequests.size>wr*2){for(const l of this.restoreRequests.keys())if(l!==e.id&&!this.visiblePageIds.has(l)){this.restoreRequests.delete(l);break}}const n=this.persistence;if(!(n!=null&&n.cache.enabled)||n.cache.busy||e.ready===!1||this.hasAtLeast(e,r))return;const s=n.identity(e,r),a=s&&We(s);if(!s||!a||this.restoreAttempts.has(a))return;this.restoreAttempts.add(a),this.restoreAttempts.size>wr*4&&this.restoreAttempts.delete(this.restoreAttempts.values().next().value);const o=this.persistenceGeneration,c=this.captures.get(e.id);this.pendingRestores.set(e.id,{key:a,samples:r}),n.cache.read(s).then(l=>{const u=this.restoreRequests.get(e.id),d=u&&n.identity(u.page,r);if(!l||this.disposed||this.persistenceGeneration!==o||this.persistence!==n||!u||u.page.ready===!1||!d||We(d)!==a||this.captures.get(e.id)!==c)return;const p=new J().fromArray(l.worldBasis),f=n.worldBasis();if(!p.elements.every(Number.isFinite)||p.determinant()===0||!f.elements.every(Number.isFinite)||f.determinant()===0)return;const h=new J().fromArray(l.captureMatrix).multiply(p.invert()).multiply(f),v=[...new Set([l.visibility.buffer,l.depth.buffer])].reduce((b,I)=>b+I.byteLength,0),S=l.width*l.height*Za+v;if(!this.admit(e.id,S))return;const g=new hi(l.visibility,l.width,l.height,$t,yt),x=new hi(l.depth,l.width,l.height,$t,yt);for(const b of[g,x])b.minFilter=Ce,b.magFilter=Ce,b.generateMipmaps=!1,b.needsUpdate=!0;c&&_r(c),this.captures.delete(e.id),this.captures.set(e.id,{target:null,visibility:g,depth:x,width:l.width,height:l.height,bytes:S,restored:!0,persistentKey:a,persistentIdentity:l.identity,revision:u.page.contentKey??u.page.revision,casterRevision:u.page.casterRevision,presentationKey:u.page.presentationKey??u.page.contentKey??u.page.revision,samples:l.identity.samples,matrix:h,crop:new ie().fromArray(l.crop)}),this.samples=l.identity.samples,this.contentRevision+=1}).catch(()=>{}).finally(()=>{var l,u;!this.disposed&&o===this.persistenceGeneration&&(((l=this.pendingRestores.get(e.id))==null?void 0:l.key)===a&&this.pendingRestores.delete(e.id),(u=n.requestRepaint)==null||u.call(n),this.schedulePersistence())})}admit(e,r,i=!1){var a;const n=i?Math.min(((a=this.captures.get(e))==null?void 0:a.bytes)??0,np):0,s=bn+n;for(const[o,c]of this.captures){if(r+this.memoryBytes<=s)break;o===e||this.visiblePageIds.has(o)||(_r(c),this.captures.delete(o),this.contentRevision+=1,this.pendingWrites.delete(o))}return r+this.memoryBytes<=s}publish(e,r,i,n,s){var B;if(!this.captureSupported)return!1;const a=n.screenBounds,o=Math.max(0,Math.floor(a.x*e.width)),c=Math.max(0,Math.floor(a.y*e.height)),l=Math.min(e.width,Math.ceil((a.x+a.z)*e.width)),u=Math.min(e.height,Math.ceil((a.y+a.w)*e.height)),d=l-o,p=u-c,f=d*p*Za;if(d<=0||p<=0||f>bn||!r.depthTexture||!this.admit(n.id,f,!0))return!1;const h=this.renderer,v=h.getRenderTarget(),S=h.getActiveCubeFace(),g=h.getActiveMipmapLevel(),x=h.getViewport(new ie),b=h.getScissor(new ie),I=h.getScissorTest(),R=h.autoClear,D=new Ve(d,p,{type:yt,format:$t,minFilter:Ce,magFilter:Ce,depthTexture:new tr(d,p,Lt),samples:0});try{h.initRenderTarget(D);const N=new ul(new At(o,c),new At(l,u));this.copyMaterial.uniforms.source.value=e.texture,this.copyMaterial.uniforms.crop.value.set(o/e.width,c/e.height,d/e.width,p/e.height),h.autoClear=!1,h.setRenderTarget(D),h.setViewport(new ie(0,0,d,p)),h.setScissorTest(!1),h.render(this.copyScene,this.copyCamera),h.copyTextureToTexture(r.depthTexture,D.depthTexture,N)}catch(N){throw(B=D.depthTexture)==null||B.dispose(),D.dispose(),N}finally{h.setRenderTarget(v,S,g),h.setViewport(x),h.setScissor(b),h.setScissorTest(I),h.autoClear=R}const A=this.captures.get(n.id);A&&_r(A),this.samples=s,this.captures.delete(n.id);const M={target:D,visibility:D.texture,depth:D.depthTexture,width:d,height:p,bytes:f,restored:!1,revision:n.contentKey??n.revision,casterRevision:n.casterRevision,samples:s,presentationKey:n.presentationKey??n.contentKey??n.revision,matrix:new J().multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),crop:new ie(o/e.width,c/e.height,d/e.width,p/e.height)};return this.captures.set(n.id,M),this.contentRevision+=1,this.queuePersistence(n,M),!0}queuePersistence(e,r){const i=this.persistence;if(!(i!=null&&i.cache.enabled)||e.ready===!1||this.disposed)return;const n=i.identity(e,r.samples),s=n&&We(n),a=i.worldBasis();!n||n.samples!==r.samples||!s||!a.elements.every(Number.isFinite)||a.determinant()===0||r.width*r.height*16>Ja||(this.pendingWrites.delete(e.id),this.persistenceOffers.set(r,{page:e,capture:r,identity:n,key:s,worldBasis:[...a.elements]}),this.schedulePersistence())}schedulePersistence(){var e;if(!(this.disposed||this.persistenceTimer!==null||this.readbackBusy||!((e=this.persistence)!=null&&e.cache.enabled)||this.persistence.cache.busy)){for(const[r,i]of this.pendingWrites)this.captures.get(r)!==i.capture&&this.pendingWrites.delete(r);for(const r of[!0,!1])for(const[i,n]of this.captures){if(this.pendingWrites.size>=sp)break;const s=this.persistenceOffers.get(n);this.visiblePageIds.has(i)===r&&s&&!this.persistenceAttempted.has(n)&&!this.pendingWrites.has(i)&&this.pendingWrites.set(i,s)}this.pendingWrites.size!==0&&(this.persistenceTimer=setTimeout(()=>{this.persistenceTimer=null,this.persistNextCapture()},0))}}persistNextCapture(){var h,v,S;const e=this.persistence;if(this.disposed||this.readbackBusy||!(e!=null&&e.cache.enabled)||e.cache.busy||typeof this.renderer.readRenderTargetPixelsAsync!="function")return;const r=[...this.pendingWrites.entries()].find(([g,x])=>this.captures.get(g)===x.capture);if(!r){this.pendingWrites.clear();return}const[i,n]=r,s=((h=this.restoreRequests.get(i))==null?void 0:h.page)??n.page,a=e.identity(s,n.capture.samples);if(s.ready===!1||!a||We(a)!==n.key){this.pendingWrites.delete(i),this.persistenceAttempted.add(n.capture),this.schedulePersistence();return}const{capture:o}=n,c=o.width*o.height*16;if(c>Ja||this.memoryBytes+c*2>bn){this.pendingWrites.delete(i),this.persistenceAttempted.add(o),this.schedulePersistence();return}const l=this.persistenceGeneration,u={target:null,pixels:null,reading:null},d=()=>{const g=this.renderer,x=g.getRenderTarget(),b=g.getActiveCubeFace(),I=g.getActiveMipmapLevel(),R=g.getViewport(new ie),D=g.getScissor(new ie),A=g.getScissorTest(),M=g.autoClear,B=this.copyQuad.material;try{u.target=new Ve(o.width,o.height,{format:Nr,type:yt,depthBuffer:!1,minFilter:Ce,magFilter:Ce}),g.initRenderTarget(u.target),u.pixels=new Float32Array(o.width*o.height*4),this.packMaterial.uniforms.visibility.value=o.visibility,this.packMaterial.uniforms.depth.value=o.depth,this.copyQuad.material=this.packMaterial,g.autoClear=!1,g.setRenderTarget(u.target),g.setViewport(new ie(0,0,o.width,o.height)),g.setScissorTest(!1),g.render(this.copyScene,this.copyCamera),u.reading=g.readRenderTargetPixelsAsync(u.target,0,0,o.width,o.height,u.pixels)}finally{this.copyQuad.material=B,g.setRenderTarget(x,b,I),g.setViewport(R),g.setScissor(D),g.setScissorTest(A),g.autoClear=M}};try{if(e.runIdleRender){if(!e.runIdleRender(d)&&!u.target)return}else d()}catch{(v=u.target)==null||v.dispose(),this.pendingWrites.delete(i),this.persistenceAttempted.add(o),this.schedulePersistence();return}if(!u.reading||!u.target||!u.pixels){(S=u.target)==null||S.dispose();return}const p=u.target,f=u.pixels;this.pendingWrites.delete(i),this.persistenceAttempted.add(o),this.readbackBusy=!0,this.readbackBytes=c*2,u.reading.then(async()=>{var b;const g=((b=this.restoreRequests.get(i))==null?void 0:b.page)??n.page,x=e.identity(g,o.samples);this.disposed||l!==this.persistenceGeneration||this.persistence!==e||g.ready===!1||!x||We(x)!==n.key||await e.cache.writePacked(n.identity,{width:o.width,height:o.height,rgba:f,captureMatrix:[...o.matrix.elements],crop:o.crop.toArray(),worldBasis:n.worldBasis})}).catch(()=>{}).finally(()=>{var g;p.dispose(),this.readbackBusy=!1,this.readbackBytes=0,this.disposed||((g=e.requestRepaint)==null||g.call(e),this.schedulePersistence())})}canReplay(e){var i;const r=this.captures.get(e.id);if(!r||r.presentationKey!==(e.presentationKey??e.contentKey??e.revision))return!1;if(r.restored){const n=(i=this.persistence)==null?void 0:i.identity(e,r.samples),s=r.persistentIdentity;if(e.captureSize&&s)return!!(n&&n.source===s.source&&n.dateTime===s.dateTime&&n.corridor===s.corridor&&n.geometryFingerprint===s.geometryFingerprint&&n.samples===s.samples);if(!n||We(n)!==r.persistentKey)return!1}return!0}activate(e){const r=this.captures.get(e.id);this.captures.delete(e.id),this.captures.set(e.id,r),this.uniforms.carmaRetainedMatrix.value.copy(r.matrix),this.uniforms.carmaRetainedCrop.value.copy(r.crop),this.uniforms.carmaRetainedColor.value=r.visibility,this.uniforms.carmaRetainedDepth.value=r.depth,this.matchingPages+=1,this.replayCount+=1,this.uniforms.carmaRetainedCount.value=1;const i=e.receiverBounds;this.uniforms.carmaRetainedBounds.value[0].set(i.min.x,i.min.z,i.max.x,i.max.z),this.uniforms.carmaRetainedEnabled.value=!0}renderNative(e,r,i){if(r.length===0)return i(),new Set;this.configureScene(e);const n=new Map(r.filter(u=>u.receiverObjectId!==void 0&&this.canPresent(u)).map(u=>[u.receiverObjectId,u])),s=[],a=new Map;e.traverseVisible(u=>{const d=u;if(!d.isMesh)return;let p;for(let f=d;f&&(p=n.get(f.id),!p);f=f.parent);s.push({mesh:d,page:p});for(const f of Array.isArray(d.material)?d.material:[d.material]){let h=a.get(f);h||a.set(f,h=new Set),h.add(p==null?void 0:p.id)}});const o=new Set;for(const u of a.values())if(!(u.size<2))for(const d of u)d!==void 0&&o.add(d);const c=new Set,l=[];for(const{mesh:u,page:d}of s){const p=u.onBeforeRender,f=d!==void 0&&!o.has(d.id);u.onBeforeRender=(...h)=>{p.call(u,...h),this.uniforms.carmaRetainedEnabled.value=!1,f&&this.activate(d)},f&&c.add(d.id),l.push(()=>{u.onBeforeRender=p})}this.uniforms.carmaRetainedEnabled.value=!1;try{return i(),c}finally{this.uniforms.carmaRetainedEnabled.value=!1;for(const u of l)u()}}render(e,r,i,n){if(!this.canPresent(r))return n();this.configureScene(e),this.activate(r);try{return n()}finally{this.uniforms.carmaRetainedEnabled.value=!1}}capture(e,r){this.captureSupported=!0,this.configureScene(e),this.uniforms.carmaCaptureVisibility.value=!0;try{return r()}finally{this.uniforms.carmaCaptureVisibility.value=!1}}configureScene(e){e.traverseVisible(r=>{const i=r;if(!(!i.isMesh||!i.receiveShadow)){if(i.isInstancedMesh||i.isSkinnedMesh){this.captureSupported=!1;return}for(const n of Array.isArray(i.material)?i.material:[i.material]){if(this.unsupportedMaterials.has(n)&&(this.captureSupported=!1),!(n.isMeshStandardMaterial||n.isMeshLambertMaterial||n.isMeshPhongMaterial)||n.transparent){this.captureSupported=!1;continue}this.materials.has(n)||this.configure(n)}}})}configure(e){const r=e.onBeforeCompile,i=e.customProgramCacheKey,n=this.uniforms,s=(l,u)=>{r.call(e,l,u);const d=/getShadow\( directionalShadowMap\[ i \][^;]+?\)/;if(!l.vertexShader.includes("#include <common>")||!l.vertexShader.includes("#include <project_vertex>")||!l.fragmentShader.includes("#include <common>")||!l.fragmentShader.includes("#include <lights_fragment_begin>")||!l.fragmentShader.includes("#include <dithering_fragment>")||!d.test(On.lights_fragment_begin)){this.unsupportedMaterials.add(e),this.captureSupported=!1;return}this.unsupportedMaterials.delete(e),Object.assign(l.uniforms,n),l.vertexShader=l.vertexShader.replace("#include <common>",`#include <common>
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
uniform vec4 carmaRetainedBounds[${wr}];
varying vec4 vCarmaRetainedClip;
varying vec2 vCarmaRetainedWorld;
float carmaRetainedCoverage(float fallbackCoverage) {
  vec3 ndc = vCarmaRetainedClip.xyz / vCarmaRetainedClip.w;
  vec2 uv = ndc.xy * 0.5 + 0.5;
  uv = (uv - carmaRetainedCrop.xy) / carmaRetainedCrop.zw;
  if (!carmaRetainedEnabled || carmaCaptureVisibility || vCarmaRetainedClip.w <= 0.0) return fallbackCoverage;
  bool owned = false;
  for (int i = 0; i < ${wr}; i++) {
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
`);const p=On.lights_fragment_begin.replace(d,f=>`(carmaCapturedCoverage = ${f}, carmaRetainedCoverage(carmaCapturedCoverage))`);l.fragmentShader=l.fragmentShader.replace("#include <lights_fragment_begin>",`float carmaCapturedCoverage = 1.0;
${p}`).replace("#include <dithering_fragment>",`#include <dithering_fragment>
if (carmaCaptureVisibility) gl_FragColor.rgb = vec3(carmaCapturedCoverage);`)},a=()=>`${i.call(e)}|retained-corridor-visibility-v4`;e.onBeforeCompile=s,e.customProgramCacheKey=a,e.needsUpdate=!0;const o=()=>{e.onBeforeCompile===s&&(e.onBeforeCompile=r),e.customProgramCacheKey===a&&(e.customProgramCacheKey=i),e.removeEventListener("dispose",c),e.needsUpdate=!0},c=()=>{o(),this.materials.delete(e)};e.addEventListener("dispose",c),this.materials.set(e,o)}dispose(){this.disposed=!0,this.setPersistence(void 0);for(const e of this.captures.values())_r(e);this.captures.clear(),this.uniforms.carmaRetainedEnabled.value=!1,this.uniforms.carmaRetainedColor.value=null,this.uniforms.carmaRetainedDepth.value=null,this.copyQuad.geometry.dispose(),this.copyMaterial.dispose(),this.downsampleMaterial.dispose(),this.packMaterial.dispose();for(const e of this.materials.values())e();this.materials.clear()}}const Ot=64,di=512*1024**2,Ze={inactive:"inactive",dimensions:"dimensions",budget:"budget",msaa:"msaa",format:"format",receivers:"receivers",pages:"pages",renderer:"renderer",disposed:"disposed"},eo=`
  out vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`,op=`
  layout(location = 0) out highp vec4 outColor;
  in vec2 vUv;
  uniform sampler2D tPrevious;
  uniform sampler2D tReference;
  uniform sampler2D tReferenceDepth;
  uniform sampler2D tSample;
  uniform sampler2D tSampleDepth;
  uniform mat4 uInverseViewProjection;
  uniform vec4 uBounds[${Ot}];
  uniform int uBoundsCount;
  uniform bool uRefresh;
  uniform bool uResetAll;
  uniform float uWeights[${Ot}];
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
    for (int i = 0; i < ${Ot}; i++) {
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
`,cp=`
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
`;class lp{constructor(e,r){this.renderer=e,this.ownsPresentation=r===void 0,this.presentation=r??new Rc(e),this.quad.frustumCulled=!1,this.fullscreenScene.add(this.quad)}fullscreenScene=new Cr;fullscreenCamera=new ts(-1,1,1,-1,0,1);blendMaterial=new Zt({glslVersion:Dr,vertexShader:eo,fragmentShader:op,uniforms:{tPrevious:{value:null},tReference:{value:null},tReferenceDepth:{value:null},tSample:{value:null},tSampleDepth:{value:null},uInverseViewProjection:{value:new J},uBounds:{value:Array.from({length:Ot},()=>new ie)},uBoundsCount:{value:0},uRefresh:{value:!1},uResetAll:{value:!1},uWeights:{value:new Float32Array(Ot).fill(1)}},depthTest:!1,depthWrite:!1,blending:li});compositeMaterial=new Zt({glslVersion:Dr,vertexShader:eo,fragmentShader:cp,uniforms:{tColor:{value:null},tDepth:{value:null},uOutputDither:{value:!1}},dithering:!0,transparent:!0,blending:vo,depthTest:!0,depthFunc:Mo,depthWrite:!0});quad=new Lr(new Jn(2,2),this.blendMaterial);referenceTarget=null;sampleTarget=null;readTarget=null;writeTarget=null;pages=new Map;stateKey="";targetKey="";cursor=0;totalSamples=1;broken=!1;disposed=!1;allocatedBytes=0;lastFallbackReason=null;presentation;publishedStateKeys=new Map;publicationRetryMs=250;ownsPresentation;get pageProgress(){return[...this.pages].map(([e,r])=>({id:e,samples:r.samples,totalSamples:this.totalSamples,ready:r.page.ready!==!1,published:this.publishedStateKeys.get(e)===JSON.stringify([this.stateKey,r.page.revision])}))}get memoryBytes(){return this.allocatedBytes+this.presentation.memoryBytes}get fallbackReason(){return this.lastFallbackReason}render(e,r,i){var M,B;if(this.disposed)return this.fallback(Ze.disposed);if(this.broken)return this.fallback(Ze.renderer);if(!i.active)return this.stateKey="",this.lastFallbackReason=Ze.inactive,null;const{width:n,height:s,samples:a}=i,o=ns((M=i.options)==null?void 0:M.format),c=((B=i.options)==null?void 0:B.msaaSamples)??Io.msaaSamples,l=n*s,u=i.visibilityOnly?$t:Nr,d=i.visibilityOnly?1:4,p=l*(2*(o.bytesPerPixel*d/4+4)+2*o.accumulationBytesPerPixel*d/4);if(!Number.isInteger(n)||n<1||!Number.isInteger(s)||s<1||!Number.isInteger(a)||a<1||n>this.renderer.capabilities.maxTextureSize||s>this.renderer.capabilities.maxTextureSize)return this.fallback(Ze.dimensions);if(i.maxRenderTargetPixels!==void 0&&(!(i.maxRenderTargetPixels>0)||l>i.maxRenderTargetPixels)||p+this.presentation.memoryBytes>di)return this.fallback(Ze.budget);if(o.format!==Nr)return this.fallback(Ze.format);if(c!==0)return this.fallback(Ze.msaa);if(!r.supportsOpaqueAccumulation)return this.fallback(Ze.receivers);const f=r.accumulationPages.map(N=>{var j;return{...N,ready:N.ready!==!1&&(((j=i.isPageReady)==null?void 0:j.call(i,N.id))??!0)}});if(f.length===0||f.length>Ot)return this.fallback(Ze.pages);this.lastFallbackReason=null;const h=this.renderer,v=h.getRenderTarget(),S=h.getActiveCubeFace(),g=h.getActiveMipmapLevel(),x=h.getClearColor(new Be),b=h.getClearAlpha(),I=h.autoClear,R=h.getViewport(new ie),D=h.getScissor(new ie),A=h.getScissorTest();try{h.autoClear=!1;const N=JSON.stringify([n,s,o.type,o.accumulationType,u]);if(this.targetKey!==N){this.releaseTargets();const L={type:o.type,format:u,minFilter:Ce,magFilter:Ce,depthBuffer:!0,samples:0};this.referenceTarget=new Ve(n,s,{...L,depthTexture:new tr(n,s,Lt)}),this.sampleTarget=new Ve(n,s,{...L,depthTexture:new tr(n,s,Lt)});const Q={type:o.accumulationType,format:u,minFilter:Ce,magFilter:Ce,depthBuffer:!1};this.readTarget=new Ve(n,s,Q),this.writeTarget=new Ve(n,s,Q),this.targetKey=N,this.allocatedBytes=p}const j=JSON.stringify([i.viewKey,i.visibilityOnly?0:i.styleEpoch,a,N]),K=this.stateKey!==j,O=new Set(f.map(({id:L})=>L)),oe=[...this.pages.values()].filter(({page:L})=>!O.has(L.id)).map(({page:L})=>L),k=[...K?f:f.filter(L=>{var Ae;const Q=(Ae=this.pages.get(L.id))==null?void 0:Ae.page;return(Q==null?void 0:Q.revision)!==L.revision||(Q==null?void 0:Q.ready)===!1&&L.ready}),...oe].flatMap(L=>[L.screenBounds,...this.pages.has(L.id)?[this.pages.get(L.id).page.screenBounds]:[]]),X=K?f:f.filter(L=>k.some(Q=>this.overlaps(L.screenBounds,Q)));this.blendMaterial.uniforms.uInverseViewProjection.value.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse).invert(),K&&(this.pages.clear(),this.cursor=0);for(const L of oe)this.pages.delete(L.id);for(const L of X)this.publishedStateKeys.delete(L.id);X.length>0&&(this.publicationRetryMs=250),this.cursor%=Math.max(1,f.length);for(const L of f){const Q=this.pages.get(L.id);Q?Q.page=L:this.pages.set(L.id,{page:L,samples:0})}if(this.totalSamples=a,X.length>0||oe.length>0){this.clearTarget(this.referenceTarget),r.renderSample(e,0,a),this.blend(X,!0,K,X.map(()=>1));for(const L of X)this.pages.get(L.id).samples=1}else{const L=[...this.pages.values()],Q=performance.now(),Ae=i.maxPagesPerFrame??4,Z=Number.isFinite(Ae)?Math.min(Ot,Math.max(1,Math.floor(Ae))):4,_t=i.maxFrameCpuMilliseconds??4,ht=Number.isFinite(_t)?Math.max(0,_t):4;let me=0;do{const Ye=[],_e=this.cursor;for(let H=0;H<L.length;H+=1){const Ke=(_e+H)%L.length,le=L[Ke];if(!(le.samples>=a||le.page.ready===!1)){if(Ye.length===0&&this.clearTarget(this.sampleTarget),!r.renderPageSample(e,le.page.id,le.samples,a))return this.fallback(Ze.pages);if(Ye.push(le),me+=1,this.cursor=(Ke+1)%L.length,me>=Z||performance.now()-Q>=ht)break}}if(Ye.length===0)break;this.blend(Ye.map(({page:H})=>H),!1,!1,Ye.map(H=>1/(H.samples+1)));for(const H of Ye)H.samples+=1}while(me<Z&&performance.now()-Q<ht)}this.stateKey=j,h.setRenderTarget(v,S,g),h.setViewport(R),h.setScissor(D),h.setScissorTest(A),this.quad.material=this.compositeMaterial;const Y=[...this.pages.values()].every(L=>L.samples>=a);this.compositeMaterial.uniforms.tColor.value=Y?this.readTarget.texture:this.referenceTarget.texture,this.compositeMaterial.uniforms.tDepth.value=this.referenceTarget.depthTexture,this.compositeMaterial.uniforms.uOutputDither.value=v===null,i.visibilityOnly||h.render(this.fullscreenScene,this.fullscreenCamera);let ue=!1;for(const{page:L,samples:Q}of this.pages.values()){if(L.ready===!1||Q<a)continue;const Ae=JSON.stringify([j,L.revision]);if(this.publishedStateKeys.get(L.id)!==Ae)try{this.presentation.publish(this.readTarget,this.referenceTarget,e,L,a)?this.publishedStateKeys.set(L.id,Ae):ue=!0}catch(Z){ue=!0,console.error("[shadow-simulation] retaining previous corridor capture after copy failure",Z)}}for(const L of this.publishedStateKeys.keys())O.has(L)||this.publishedStateKeys.delete(L);const ce=[...this.pages.values()].reduce((L,{page:Q,samples:Ae})=>{const Z=Q.ready!==!1&&this.publishedStateKeys.get(Q.id)===JSON.stringify([j,Q.revision]);return L+(Z?a:Math.min(Ae,a-1))},0),we=ue?this.publicationRetryMs:void 0;return this.publicationRetryMs=ue?Math.min(4e3,this.publicationRetryMs*2):250,{progress:ce/(this.pages.size*a),settled:ce===this.pages.size*a,...we===void 0?{}:{retryAfterMs:we},needsRepaint:[...this.pages.values()].some(L=>L.samples<a&&L.page.ready!==!1)}}catch(N){return this.broken=!0,console.error("[shadow-simulation] corridor accumulation failed; using direct rendering",N),this.fallback(Ze.renderer)}finally{h.autoClear=I,h.setClearColor(x,b),h.setRenderTarget(v,S,g),h.setViewport(R),h.setScissor(D),h.setScissorTest(A)}}overlaps(e,r){return e.x<=r.x+r.z&&e.x+e.z>=r.x&&e.y<=r.y+r.w&&e.y+e.w>=r.y}clearTarget(e){this.renderer.setRenderTarget(e),this.renderer.setClearColor(0,0),this.renderer.clear(!0,!0,!1)}blend(e,r,i,n){const s=this.blendMaterial.uniforms;s.tPrevious.value=this.readTarget.texture,s.tReference.value=this.referenceTarget.texture,s.tReferenceDepth.value=this.referenceTarget.depthTexture,s.tSample.value=this.sampleTarget.texture,s.tSampleDepth.value=this.sampleTarget.depthTexture,s.uBoundsCount.value=e.length,e.forEach(({receiverBounds:o},c)=>s.uBounds.value[c].set(o.min.x,o.min.z,o.max.x,o.max.z)),s.uRefresh.value=r,s.uResetAll.value=i,s.uWeights.value.set(n),this.quad.material=this.blendMaterial,this.renderer.setRenderTarget(this.writeTarget),this.renderer.render(this.fullscreenScene,this.fullscreenCamera);const a=this.readTarget;this.readTarget=this.writeTarget,this.writeTarget=a}releaseTargets(){var e;for(const r of[this.referenceTarget,this.sampleTarget,this.readTarget,this.writeTarget])(e=r==null?void 0:r.depthTexture)==null||e.dispose(),r==null||r.dispose();this.referenceTarget=null,this.sampleTarget=null,this.readTarget=null,this.writeTarget=null,this.stateKey="",this.targetKey="",this.allocatedBytes=0,this.pages.clear()}releaseScratch(e=!1){e?(this.stateKey="",this.pages.clear()):this.releaseTargets(),this.publishedStateKeys.clear(),this.cursor=0}fallback(e){return this.lastFallbackReason=e,this.releaseTargets(),null}dispose(){this.disposed||(this.disposed=!0,this.releaseTargets(),this.ownsPresentation&&this.presentation.dispose(),this.quad.geometry.dispose(),this.blendMaterial.dispose(),this.compositeMaterial.dispose())}}const to=2e4;let up=0;var go;class dp{enabled=dl((go=globalThis.location)==null?void 0:go.hostname);reportId=++up;nextCorridorId=0;labels=new Map;pending=new Map;timer;context;observe(e,r){var s;if(!this.enabled)return;const i=performance.now();for(const{id:a}of e)this.labels.has(a)||this.labels.set(a,`C${this.reportId}.${++this.nextCorridorId}`);this.context={total:e.length,ready:e.filter(a=>a.ready).length,completed:e.filter(a=>a.published).length,samples:e.reduce((a,o)=>a+o.samples,0),activeId:r.activeId?this.labels.get(r.activeId):null,memoryBytes:r.memoryBytes,fallbackReason:r.fallbackReason,publicationRetries:(s=r.publicationRetries)==null?void 0:s.map(([a,o])=>({id:this.labels.get(a),attempts:o.attempts,retryInMs:Math.max(0,Math.round(o.retryAt-i))}))};const n=new Set(e.map(({id:a})=>a));for(const a of this.pending.keys())n.has(a)||this.pending.delete(a);for(const a of this.labels.keys())n.has(a)||this.labels.delete(a);for(const a of e){if(a.published){this.pending.delete(a.id);continue}const o=this.pending.get(a.id),c=!o||a.samples>o.progress.samples;this.pending.set(a.id,{progress:a,advancedAt:c?i:o.advancedAt,reported:c?!1:o.reported})}this.schedule()}pause(){clearTimeout(this.timer),this.timer=void 0,this.pending.clear()}schedule(){if(this.timer!==void 0)return;let e=1/0;for(const r of this.pending.values())r.reported||(e=Math.min(e,r.advancedAt+to));Number.isFinite(e)&&(this.timer=setTimeout(()=>{var n;this.timer=void 0;const r=performance.now(),i=[];for(const s of this.pending.values())s.reported||r-s.advancedAt<to||(s.reported=!0,i.push({...s.progress,id:this.labels.get(s.progress.id),file:(n=s.progress.id.match(/\/([^/"\\]+\.b3dm)/))==null?void 0:n[1],stalledMilliseconds:Math.round(r-s.advancedAt),waitingForReadiness:!s.progress.ready}));i.length>0&&console.warn("[shadow-simulation] corridors without progress for 20 seconds",JSON.stringify({corridors:i,scheduler:this.context})),this.schedule()},Math.max(0,e-performance.now())))}}class hp{constructor(e){this.renderer=e,this.presentation=new Rc(e),this.scratch=new lp(e,this.presentation)}presentation;scratch;captures=[];activeId=null;activeCapture=null;cursor=0;samples=1;disposed=!1;watchdog=new dp;publicationRetries=new Map;restoreOpportunities=new Map;allocationKey="";allocations=new Map;plans=new Map;get memoryBytes(){return this.scratch.memoryBytes}get fallbackReason(){return this.presentation.supportsCapture?this.scratch.fallbackReason:"receivers"}get capturePages(){return this.captures.map(({page:e})=>e)}get pageProgress(){const e=this.scratch.pageProgress;return this.captures.map(({page:r,plan:i,ready:n})=>{const s=n&&this.presentation.has(r,this.samples),a=e.find(({id:o})=>o===r.id);return{id:r.id,samples:s?this.samples:(a==null?void 0:a.samples)??0,totalSamples:this.samples,ready:n,published:s,limited:i.limited,width:i.width,height:i.height}})}updateCaptures(e,r,i,n=!0){var h;const s=rp(e),a=ns((h=i.options)==null?void 0:h.format),o=2*(a.bytesPerPixel/4+4)+2*a.accumulationBytesPerPixel/4+8,c=Math.max(1,Math.floor(Math.min(i.maxRenderTargetPixels??i.width*i.height,di/2/o))),l=r.accumulationPages.map(v=>{const S=this.plans.get(v.id),g=(S==null?void 0:S.orientation)??s,x={groundTexelTargetMeters:v.groundTexelTargetMeters??1,maximumDimension:this.renderer.capabilities.maxTextureSize,maximumPixels:c},b=JSON.stringify([v.receiverBounds.min,v.receiverBounds.max,g.toArray(),x]),I=(S==null?void 0:S.inputs)===b?S.plan:tp(v.receiverBounds,g,x);return this.plans.set(v.id,{inputs:b,plan:I,orientation:g}),I.camera.layers.mask=e.layers.mask,{page:v,plan:I}}),u=l.find(({page:v})=>{var S;return this.activeId===v.id&&((S=this.activeCapture)==null?void 0:S.page.id)===v.id&&this.activeCapture.page.contentKey===JSON.stringify([v.contentKey??v.revision,this.activeCapture.plan.key])}),d=u?this.activeCapture.plan:null,p=JSON.stringify(l.map(({page:v,plan:S})=>[v.id,S.key,v.screenBounds.z*v.screenBounds.w]));if(p!==this.allocationKey){const v=new Map(ep(l.filter(({page:S})=>S.id!==(u==null?void 0:u.page.id)).map(({page:S,plan:g})=>({id:S.id,plan:g,screenArea:S.screenBounds.z*S.screenBounds.w})),$n-(d?d.width*d.height*8:0)));u&&d&&v.set(u.page.id,d),this.allocationKey=p,this.allocations=v}this.captures=l.map(({page:v,plan:S})=>{var I;const g=this.allocations.get(v.id)??S,x=JSON.stringify([v.contentKey??v.revision,g.key]),b=(!n||v.ready!==!1)&&(((I=i.isPageReady)==null?void 0:I.call(i,v.id))??!0);return{page:{...v,ready:b,captureKey:JSON.stringify([g.camera.quaternion.toArray(),g.width,g.height]),captureSize:{width:g.width,height:g.height},contentKey:x,revision:x,screenBounds:new ie(0,0,1,1)},plan:g,ready:b}});const f=new Set(this.captures.map(({page:v})=>v.id));for(const v of this.plans.keys())f.has(v)||this.plans.delete(v);for(const[v,S]of this.publicationRetries){const g=this.captures.find(({page:x})=>x.id===v);(!g||g.page.contentKey!==S.contentKey)&&this.publicationRetries.delete(v)}this.presentation.beginFrame(this.capturePages);for(const{page:v,plan:S}of this.captures)this.presentation.prepareRestore(v,i.samples,new J().multiplyMatrices(S.camera.projectionMatrix,S.camera.matrixWorldInverse));i.active&&this.reportProgress()}reportProgress(){this.watchdog.enabled&&this.watchdog.observe(this.pageProgress,{activeId:this.activeId,memoryBytes:this.memoryBytes,fallbackReason:this.fallbackReason,publicationRetries:[...this.publicationRetries.entries()]})}yieldForRestore(e,r){if(!this.presentation.isRestorePending(e,r))return!1;const i=JSON.stringify([e.id,r]),n=e.contentKey??e.revision;if(this.restoreOpportunities.get(i)===n)return!1;if(this.restoreOpportunities.set(i,n),this.restoreOpportunities.size>1024){const s=this.restoreOpportunities.keys().next().value;s!==void 0&&this.restoreOpportunities.delete(s)}return!0}render(e,r,i){var p;if(this.disposed)return null;if(!i.active)return this.watchdog.pause(),null;if(this.samples=i.samples,this.updateCaptures(e,r,i),!this.presentation.supportsCapture)return this.scratch.releaseScratch(),this.activeId=null,null;const n=performance.now();let s,a=this.captures.find(({page:f})=>f.id===this.activeId);const o=a&&!a.ready&&this.captures.some(({page:f,ready:h})=>h&&f.id!==(a==null?void 0:a.page.id)&&!this.presentation.has(f,i.samples));if((!a||o||this.presentation.has(a.page,i.samples))&&(this.scratch.releaseScratch(!0),this.activeId=null,a=void 0),a){const f=this.publicationRetries.get(a.page.id);f&&f.retryAt>n&&(s=Math.ceil(f.retryAt-n))}if(!a&&this.captures.length>0)for(let f=0;f<this.captures.length;f+=1){const h=(this.cursor+f)%this.captures.length,v=this.captures[h];if(!v.ready||this.presentation.has(v.page,i.samples)||this.yieldForRestore(v.page,i.samples))continue;const S=this.publicationRetries.get(v.page.id);if(S&&S.retryAt>n){s=Math.min(s??1/0,Math.ceil(S.retryAt-n));continue}a=v,s=void 0,this.activeId=v.page.id,this.activeCapture=v,this.cursor=(h+1)%this.captures.length;break}let c=null;if(a!=null&&a.ready&&s===void 0){this.activeCapture=a;const{page:f,plan:h}=a,v=(S,g,x)=>r.renderPageSample(S,f.id,g,x,f.screenBounds);if(c=this.scratch.render(h.camera,{accumulationPages:[f],supportsOpaqueAccumulation:r.supportsOpaqueAccumulation,renderSample:v,renderPageSample:(S,g,x,b)=>v(S,x,b)},{...i,width:h.width,height:h.height,viewKey:h.key,visibilityOnly:!0,isPageReady:void 0,maxPagesPerFrame:i.maxPagesPerFrame??4}),c!=null&&c.settled)this.publicationRetries.delete(f.id),this.scratch.releaseScratch(!0),this.activeId=null;else if((c==null?void 0:c.retryAfterMs)!==void 0){const S=(((p=this.publicationRetries.get(f.id))==null?void 0:p.attempts)??0)+1;s=Math.max(250,c.retryAfterMs);const g=S>=3;g&&(s=Math.max(1e3,s)),this.publicationRetries.set(f.id,{contentKey:f.contentKey,attempts:g?0:S,retryAt:n+s}),g&&(this.scratch.releaseScratch(),this.activeId=null,this.captures.some(({page:x,ready:b})=>{var I;return b&&x.id!==f.id&&!this.presentation.has(x,i.samples)&&(((I=this.publicationRetries.get(x.id))==null?void 0:I.retryAt)??0)<=n})&&(s=void 0))}if(!c)return null}!this.activeId&&!this.captures.some(({page:f,ready:h})=>h&&!this.presentation.has(f,i.samples))&&this.scratch.releaseScratch();const l=this.pageProgress;this.reportProgress();const u=l.reduce((f,h)=>f+(h.published?i.samples:Math.min(h.samples,i.samples-1)),0),d=l.length*i.samples;return{progress:d>0?u/d:1,settled:d===u,needsRepaint:l.some(f=>f.ready&&!f.published)&&s===void 0,...s===void 0?{}:{retryAfterMs:s}}}renderHard(e,r,i){var D;if(this.disposed||!i.active)return{published:0,needsRepaint:!1};if(this.updateCaptures(e,r,{...i,samples:1},i.isPageReady===void 0),!r.supportsOpaqueAccumulation||!this.presentation.supportsCapture||!this.renderer.extensions.has("EXT_color_buffer_float"))return{published:0,needsRepaint:!1};const n=new Map(this.captures.map(({page:A})=>[A.id,this.presentation.getCapturedSize(A.id)])),s=this.captures.reduce((A,{page:M,plan:B})=>{const N=n.get(M.id);return A+Math.max(B.width*B.height,N?N.width*N.height:0)*8},0)>$n,a=({page:A,plan:M})=>{const B=n.get(A.id);return B?(B.width*B.height-M.width*M.height)*8:0},o=this.captures.filter(({page:A,plan:M,ready:B})=>{if(!B)return!1;const N=n.get(A.id);return this.presentation.hasAtLeast(A,1)&&(!s||!N||N.width*N.height<=M.width*M.height)?!1:!(N&&N.samples>1&&!s&&(N.width!==M.width||N.height!==M.height)&&this.presentation.canReplay(A))});s&&o.sort((A,M)=>a(M)-a(A));const c=o.find(({page:A})=>!this.yieldForRestore(A,1));if(!c)return{published:0,needsRepaint:o.length>0};const{page:l,plan:u}=c;if(s&&this.presentation.hasAtLeast(l,1)&&a(c)>0){const A=n.get(l.id),M=Math.max(u.width,Math.ceil(A.width/2))*Math.max(u.height,Math.ceil(A.height/2))*8;if(this.memoryBytes+M>di)return{published:0,needsRepaint:!1,retryAfterMs:1e3};try{const B=this.presentation.downsample(l,u.width,u.height);return{published:B?1:0,needsRepaint:B,...B?{}:{retryAfterMs:1e3}}}catch{return{published:0,needsRepaint:!1,retryAfterMs:1e3}}}if(this.memoryBytes+u.width*u.height*16>di)return{published:0,needsRepaint:!1,retryAfterMs:1e3};const d=this.renderer,p=d.getRenderTarget(),f=d.getActiveCubeFace(),h=d.getActiveMipmapLevel(),v=d.getViewport(new ie),S=d.getScissor(new ie),g=d.getScissorTest(),x=d.autoClear,b=d.getClearColor(new Be),I=d.getClearAlpha(),R=new Ve(u.width,u.height,{type:yt,format:$t,minFilter:Ce,magFilter:Ce,samples:0,depthTexture:new tr(u.width,u.height,Lt)});try{d.initRenderTarget(R),d.autoClear=!1,d.setRenderTarget(R),d.setViewport(new ie(0,0,u.width,u.height)),d.setScissorTest(!1),d.setClearColor(0,0),d.clear(!0,!0,!1);const M=r.renderPageSample(u.camera,l.id,0,1,l.screenBounds)&&this.presentation.publish(R,R,u.camera,l,1);return{published:M?1:0,needsRepaint:M&&o.length>1,...M?{}:{retryAfterMs:1e3}}}catch(A){return console.warn("[shadow-simulation] retaining completed corridor after hard-stage capture failure",A),{published:0,needsRepaint:!1,retryAfterMs:1e3}}finally{d.setRenderTarget(p,f,h),d.setViewport(v),d.setScissor(S),d.setScissorTest(g),d.setClearColor(b,I),d.autoClear=x,(D=R.depthTexture)==null||D.dispose(),R.dispose()}}pausePending(){this.watchdog.pause()}cancelPending(){this.watchdog.pause(),this.activeId!==null&&this.scratch.releaseScratch(),this.activeId=null,this.publicationRetries.clear(),this.restoreOpportunities.clear()}dispose(){this.disposed||(this.disposed=!0,this.watchdog.pause(),this.scratch.dispose(),this.presentation.dispose(),this.captures=[],this.plans.clear(),this.allocations=new Map,this.publicationRetries.clear(),this.restoreOpportunities.clear())}}const mp=750,pp=5e3,ro=new Set,fp=t=>{const e=hl({assetUrl:t,production:!0});let r=null,i=!1,n=!1,s=0,a=null;const o=()=>{if(r&&(r.onmessage=null,r.onerror=null,r.onmessageerror=null,r.terminate(),r=null),a){const d=a;a=null,clearTimeout(d.timer),d.finish(null)}},c=()=>{n=!0,o()},l=(d,p=[])=>{if(!e||i||n||a||typeof Worker>"u")return Promise.resolve(null);try{return r||(r=new Worker(new URL("https://cismet.github.io/carma-pr-deployments/837/geoportal/assets/shadow-corridor-cache.worker-BqzYLnOC.js",import.meta.url),{type:"module"}),r.onerror=c,r.onmessageerror=c,r.onmessage=f=>{var v;if(!a||((v=f.data)==null?void 0:v.id)!==a.id)return;const h=a;a=null,clearTimeout(h.timer),h.finish(f.data)}),new Promise(f=>{const h=setTimeout(c,d.operation===ai.read?mp:pp);a={id:d.id,timer:h,finish:f};try{r.postMessage(d,p)}catch{c()}})}catch{return c(),Promise.resolve(null)}},u={cancelPending:o,get enabled(){return!!(e&&!i&&!n&&typeof Worker<"u")},get busy(){return a!==null},async read(d){const p=We(d);if(!p)return null;const f=await l({id:++s,producerAssetUrl:e??"",identity:d,operation:ai.read}),h=f==null?void 0:f.record;return!i&&(h==null?void 0:h.schema)===Ri.schema&&We(h.identity)===p&&Qa(h)?h:null},async write(d,p,f){if(!We(d)||!Qa(p))return!1;const h=[p.visibility,p.depth];if(h.some(S=>!(S.buffer instanceof ArrayBuffer)||S.byteOffset!==0||S.byteLength!==S.buffer.byteLength))return!1;const v=await l({id:++s,producerAssetUrl:e??"",identity:d,operation:ai.write,capture:p,costs:f},[...new Set(h.map(S=>S.buffer))]);return!i&&(v==null?void 0:v.written)===!0},async writePacked(d,p,f){if(!We(d)||!ip(p)||!(p.rgba.buffer instanceof ArrayBuffer)||p.rgba.byteOffset!==0||p.rgba.byteLength!==p.rgba.buffer.byteLength)return!1;const h=await l({id:++s,producerAssetUrl:e??"",identity:d,operation:ai.writePacked,capture:p,costs:f},[p.rgba.buffer]);return!i&&(h==null?void 0:h.written)===!0},dispose(){i=!0,o(),ro.delete(u)}};return ro.add(u),u};class gp{constructor(e,r,i){this.scene=e,this.renderer=r,this.host=i,this.frameCache=new Yl(r),this.pages=new $m(e,r,i.maximumMapSize**2*8*2,i.maximumMapSize,i.frame),this.accumulation=new hp(r),i.worldBasis&&i.corridorRevision&&i.dateTimeKey&&this.accumulation.presentation.setPersistence({cache:this.persistentCache,identity:(n,s)=>{var u,d,p;const a=this.pages.getPageGeometry(n.id),o=(u=i.dateTimeKey)==null?void 0:u.call(i);if(!a||!o||!n.captureKey)return null;const c=s===1?(d=i.receiverStageError)==null?void 0:d.call(i,n.receiverBounds):void 0,l=(p=i.corridorRevision)==null?void 0:p.call(i,a.casterBounds,c,n.receiverBounds);return l?{source:"shared-scene-corridor-v2",dateTime:o,corridor:n.id,resolution:JSON.stringify([a.width,a.height,n.captureKey]),geometryFingerprint:l,samples:s}:null},worldBasis:i.worldBasis,runIdleRender:i.runIdleRender,requestRepaint:i.requestRepaint})}pages;viewKey="";idleStats=null;accumulation;persistentCache=fp(import.meta.url);accumulationSettled=!1;viewport=new At(1,1);lastFrame=null;frameCache;presentedPageIds=new Set;casterRevisionsDirty=!0;casterRevisionCursor=0;hardRetryTimer=null;update(e,r,i,n,s=r.renderCamera){this.viewport.copy(r.viewport);const a=JSON.stringify([e.map(({id:o,bounds:c,receiverObjectId:l})=>[o,c.min,c.max,l]),s.projectionMatrix.elements,s.matrixWorldInverse.elements,r.viewport,i,n]);a!==this.viewKey&&(this.pages.setView(e,s,r.viewport,n,i,this.host.receiverBiasLimit),this.viewKey=a,this.casterRevisionsDirty=!0,this.casterRevisionCursor=0)}updatePresentation(e,r=e.renderCamera){this.viewport.copy(e.viewport),this.pages.updatePresentation(r)}invalidateContent(e){(e==null?void 0:e.length)!==0&&(this.casterRevisionsDirty=!0,this.casterRevisionCursor=0,this.frameCache.invalidate(),e?e.length>0&&this.pages.invalidateCasters(e):this.pages.clearCache())}async prewarm({cells:e,frame:r,lighting:i,targetPixels:n,samples:s,prepare:a,signal:o,yieldToInput:c=Zm,planningCamera:l}){if(o.aborted)return null;this.idleStats=null,this.pages.setPrewarmView(e,l??r.renderCamera,r.viewport,n,i,s);try{return this.idleStats=await Qm({pages:this.pages.prewarmPages,signal:o,prepare:a,yieldToInput:c,render:(u,d,p)=>{if(d!=null&&d.parent)throw new Error("Idle caster lease must own an unmounted group");const f=this.host.light.visible;this.host.light.visible=!1,d&&this.scene.add(d);try{let h=null;const v=()=>{h=this.pages.prewarmNext(r.renderCamera,u,{signal:p})};return this.host.runIdleRender?this.host.runIdleRender(v):v(),h??{pageId:u,rendered:0,cachedSamples:0,totalSamples:s,complete:!1,budgetLimited:!1,aborted:!0}}finally{d&&this.scene.remove(d),this.host.light.visible=f}}}),this.idleStats}finally{this.pages.clearPrewarmView()}}renderProgressive(e,r){if(this.lastFrame=r,!r.active)return this.pausePending(),null;if(this.pages.accumulationPages.length===0)return this.accumulationSettled=!1,null;const i=this.renderWithHost(e,()=>{const a=this.captureHard(e);if(this.casterRevisionsDirty&&this.host.corridorRevision)return null;const o=this.accumulation.presentation.capture(this.scene,()=>this.accumulation.render(e,this.pages,{...r,visibilityOnly:!0,maxPagesPerFrame:Math.min(r.samples,64),maxFrameCpuMilliseconds:r.maxFrameCpuMilliseconds??2,isPageReady:c=>this.isPageReady(c,!1)}));return o&&this.renderContent(e,null,r.samples),o&&{...o,settled:o.settled&&!a.needsRepaint,needsRepaint:o.needsRepaint||a.needsRepaint}});if(!i)return this.accumulationSettled=!1,null;const n="retryAfterMs"in i?i.retryAfterMs:void 0;n!==void 0&&this.hardRetryTimer===null&&(this.hardRetryTimer=globalThis.setTimeout(()=>{var a,o;this.hardRetryTimer=null,(o=(a=this.host).requestRepaint)==null||o.call(a)},Math.max(1,n)));const s=i.settled&&!this.accumulationSettled;return this.accumulationSettled=i.settled,{...i,settled:s}}render(e,r,i,n=!0){return this.pages.accumulationPages.length===0?!1:(this.renderWithHost(e,()=>{n&&this.captureHard(e),this.renderContent(e,r,i,!n)}),!0)}cancelPending(e=!1){this.accumulation.cancelPending(),e&&this.accumulation.presentation.beginSolarTransition(),this.pausePending()}pausePending(){this.accumulation.pausePending(),this.hardRetryTimer!==null&&(globalThis.clearTimeout(this.hardRetryTimer),this.hardRetryTimer=null),this.accumulationSettled=!1}isPageReady(e,r){var n,s;const i=this.pages.getPageGeometry(e);return i?!this.host.isCorridorReady||this.host.isCorridorReady(i.casterBounds,r?(s=(n=this.host).receiverStageError)==null?void 0:s.call(n,i.receiverBounds):void 0,i.receiverBounds):!1}captureHard(e){var i,n,s,a,o,c;if(this.casterRevisionsDirty&&this.host.corridorRevision){const l=this.pages.accumulationPages,u=performance.now();let d=0;for(;this.casterRevisionCursor<l.length;){if(d>=4||d>0&&performance.now()-u>=4)return(n=(i=this.host).requestRepaint)==null||n.call(i),{published:0,needsRepaint:!0};const p=l[this.casterRevisionCursor++];d+=1;const f=this.pages.getPageGeometry(p.id);if(!f)continue;const h=this.host.corridorRevision(f.casterBounds,(a=(s=this.host).receiverStageError)==null?void 0:a.call(s,f.receiverBounds),f.receiverBounds);this.pages.setCasterRevision(p.id,h)&&this.frameCache.invalidate()}this.casterRevisionsDirty=!1,this.casterRevisionCursor=0}const r=this.accumulation.presentation.capture(this.scene,()=>{var l;return this.accumulation.renderHard(e,this.pages,{...this.lastFrame,width:this.viewport.x,height:this.viewport.y,viewKey:this.viewKey,styleEpoch:((l=this.lastFrame)==null?void 0:l.styleEpoch)??0,samples:1,active:!0,isPageReady:u=>this.isPageReady(u,!0)})});return r.needsRepaint&&((c=(o=this.host).requestRepaint)==null||c.call(o)),r.retryAfterMs!==void 0&&this.hardRetryTimer===null&&(this.hardRetryTimer=globalThis.setTimeout(()=>{var l,u;this.hardRetryTimer=null,(u=(l=this.host).requestRepaint)==null||u.call(l)},r.retryAfterMs)),r}renderContent(e,r,i,n=!1){var u,d,p,f,h;const s=this.accumulation.capturePages;this.accumulation.presentation.beginFrame(s);const a=s.map(v=>{const S=this.accumulation.presentation.canPresent(v);return{page:v,replay:S,ready:S||(!this.host.corridorRevision||!this.casterRevisionsDirty)&&this.isPageReady(v.id,!0)}});let o=!1;const c=()=>{this.presentedPageIds.clear();const v=this.host.light.visible,S=r===null&&a.some(({replay:g})=>g);this.host.light.visible=!0;try{let g=new Set;r===null?g=this.accumulation.presentation.renderNative(this.scene,a.filter(x=>x.replay).map(x=>x.page),()=>this.renderer.render(this.scene,e)):this.renderer.render(this.scene,e);for(const{page:x,replay:b,ready:I}of a){if(!I)continue;if(g.has(x.id)){this.presentedPageIds.add(x.id);continue}if(r===null&&!b){this.presentedPageIds.add(x.id);continue}if(n&&!b){this.presentedPageIds.add(x.id);continue}const R=n||S&&b;this.host.light.visible=R,this.accumulation.presentation.render(this.scene,x,i,()=>R?this.pages.renderPageColor(e,x.id):this.pages.renderPageSample(e,x.id,r??0,r===null?1:i))?this.presentedPageIds.add(x.id):o=!0}}finally{this.host.light.visible=v}};if((u=this.lastFrame)!=null&&u.active&&r===null&&this.accumulation.presentation.supportsCapture){const v=JSON.stringify([this.viewKey,e.projectionMatrix.elements,e.matrixWorldInverse.elements,e.layers.mask,this.lastFrame.styleEpoch,this.lastFrame.presentationRevision??"",((p=(d=this.host).visualEpoch)==null?void 0:p.call(d))??0,this.accumulation.presentation.revision,a.map(({page:S,replay:g,ready:x})=>[S.id,S.contentKey??S.revision,g,x])]);this.frameCache.render(v,this.lastFrame.width,this.lastFrame.height,c),o&&this.frameCache.invalidate()}else this.frameCache.invalidate(),c();const l=a.filter(({page:v,replay:S})=>this.presentedPageIds.has(v.id)&&(this.accumulation.presentation.hasAtLeast(v,1)||!S&&(r===null||i===1))).map(({page:v})=>v);l.length>0&&((h=(f=this.host).onPresentedPages)==null||h.call(f,l,s))}renderWithHost(e,r){const{renderer:i,host:n}=this,s=n.light.visible,a=n.sky.visible,o=n.overlay.visible,c=i.autoClear;n.light.visible=!1,i.autoClear=!1;try{a&&this.renderHostObject(n.sky,e),n.sky.visible=!1,n.overlay.visible=!1;const l=r();return l!==null&&o&&(n.overlay.visible=!0,this.renderHostObject(n.overlay,e)),l}finally{i.autoClear=c,n.light.visible=s,n.sky.visible=a,n.overlay.visible=o}}renderHostObject(e,r){const i=this.scene.children.filter(n=>n!==e&&n.visible);for(const n of i)n.visible=!1;try{this.renderer.render(this.scene,r)}finally{for(const n of i)n.visible=!0}}get pageLevels(){return this.pages.pageLevels}get stats(){return{...this.pages.stats,framePresentation:this.frameCache.stats,corridorAccumulation:{retained:this.accumulation.presentation.stats,pageSamples:this.accumulation.pageProgress,memoryBytes:this.accumulation.memoryBytes,fallbackReason:this.accumulation.fallbackReason},...this.idleStats?{idlePrewarm:this.idleStats}:{},...this.host.auditCorridors?{corridorAudit:this.host.auditCorridors(this.pages.accumulationPages.flatMap(e=>{const r=this.pages.getPageGeometry(e.id);return r?[{id:e.id,casterBounds:r.casterBounds,receiverBounds:r.receiverBounds}]:[]}))}:{}}}dispose(){this.hardRetryTimer!==null&&globalThis.clearTimeout(this.hardRetryTimer),this.hardRetryTimer=null,this.accumulation.dispose(),this.frameCache.dispose(),this.persistentCache.dispose(),this.pages.dispose()}}function vp(){const t=new WeakSet;return e=>{let r=!1;for(const i of e)if(!(!i.providesTerrain||!i.hasRenderableContent)&&(r=!0,t.has(i)||i.hasRenderableContent()))return t.add(i),!1;return r}}const An=(t,e,r)=>JSON.stringify([t.min.toArray(),t.max.toArray(),e,r==null?void 0:r.min.toArray(),r==null?void 0:r.max.toArray()]),Sp=(t,e)=>{const r=new Map(t.map(s=>[s.id,s])),i=[],n=s=>i.push(new Pe(new _(...s.minimum),new _(...s.maximum)));for(const s of e){const a=r.get(s.id);a&&s.minimum.every((c,l)=>c===a.minimum[l])&&s.maximum.every((c,l)=>c===a.maximum[l])||(a&&n(a),n(s)),r.delete(s.id)}for(const s of r.values())n(s);return i},yp=(t,e,r)=>{const i=new Set(r.map(({id:n})=>n));return t.filter(n=>{if(n.loadReason===er.SHADOW)return!1;const s=e.filter(({bounds:a})=>n.minimum[0]<a.max.x&&n.maximum[0]>a.min.x&&n.minimum[2]<a.max.z&&n.maximum[2]>a.min.z);return s.length>0&&s.every(({id:a})=>i.has(a))}).map(({id:n})=>n)},Tp=(t,e,r)=>{if(![t,e,r].every(Number.isFinite)||r<=0)throw new RangeError("Invalid shared-scene Mercator basis");return new J().set(r,0,0,t,0,0,r,e,0,r,0,0,0,0,0,1)},io=(t,e,r)=>ml(e.reduce((i,n)=>{if(n.loadReason===er.SHADOW)return i;const[s,,a]=n.minimum,[o,,c]=n.maximum;return s<t.max.x&&o>t.min.x&&a<t.max.z&&c>t.min.z&&Number.isFinite(n.errorPixels)?Math.max(i,n.errorPixels):i},r),r),wp=({stageErrorPixels:t,targetErrorPixels:e,groundTexelTargetMeters:r,finalBiasMeters:i,maximumCoarseBiasMeters:n,metersPerPixel:s=0})=>{const a=Math.max(i,Math.min(n,Math.max(0,s)*.1)),o=Math.max(1,Math.min(n/i,t/Math.max(e,.25)));return Math.max(a,Math.min(n,i*o,Math.max(i,r*2)))},_p=({id:t,casterBounds:e,sunElevationDegrees:r,regions:i,volumes:n})=>{const s=new Set(i.flatMap(u=>u.selectedTileIds)),a=new Map(n.map(u=>[u.id,u])),o=[],c=[];let l=0;for(const u of s){const d=a.get(u);if(!d){o.push(u);continue}d.loadReason===er.SHADOW&&(l+=1),e.intersectsBox(new Pe(new _(...d.minimum),new _(...d.maximum)))||c.push(u)}return{id:t,ready:i.length>0&&i.every(u=>u.ready),selectedTiles:s.size,offscreenTiles:l,reviewCount:r>=10&&s.size>10,nearHorizon:r<10,exactPrismTested:i.length>0&&i.every(u=>u.receiverPrismTested),visitedNodes:i.reduce((u,d)=>u+d.visitedNodes,0),broadPhaseNodes:i.reduce((u,d)=>u+d.broadPhaseNodes,0),rejectedPrismNodes:i.reduce((u,d)=>u+d.rejectedPrismNodes,0),missingPublishedVolumes:o,outsideEnvelope:c,selectedTileIds:[...s].sort()}},xp=1024,Ep=2048,Rp=4096,bp=1e6,Ap=2e6,no=(t,e=fl())=>{const r=Math.max(256,Math.floor(t)),i=pl(e);return i===ea.PHONE?{maxShadowMapSize:Math.min(r,xp),maxAccumulationPixels:bp}:i===ea.TABLET?{maxShadowMapSize:Math.min(r,Ep),maxAccumulationPixels:Ap}:{maxShadowMapSize:Math.min(r,Rp),maxAccumulationPixels:Number.POSITIVE_INFINITY}},Mp=(t,e)=>{if(t===Number.POSITIVE_INFINITY)return t;const r=ns(e.format),i=e.msaaSamples??Io.msaaSamples,n=2*(r.bytesPerPixel+4)*(1+Math.max(0,i))+3*r.accumulationBytesPerPixel;return Math.min(t,Math.floor(256*1024*1024/n))},so=(t,e=ss,r=2560*1440,i=1)=>Math.floor(Math.max(256**2,Math.min(t**2,bt[e].depthSize**2*(Number.isFinite(r)&&r>0?r/(2560*1440):1)*i**2))),ao=new WeakMap,Ip=t=>{const e=ao.get(t);if(e)return e;const r=t.getContext(),i=r.getInternalformatParameter(r.RENDERBUFFER,r.DEPTH_COMPONENT24,r.SAMPLES),n=a=>[0,...Array.from(r.getInternalformatParameter(r.RENDERBUFFER,a,r.SAMPLES)).filter(o=>i.includes(o))],s={maxTextureSize:t.capabilities.maxTextureSize,maxRenderbufferSize:r.getParameter(r.MAX_RENDERBUFFER_SIZE),hdrSamples:n(r.RGBA16F),sdrSamples:n(r.RGBA8)};return ao.set(t,s),s},Cp=(t,e)=>{if(t.shadowBufferFormat===Xt.HDR_32)return 0;const r=t.shadowMsaaSamples===gl?1/0:t.shadowMsaaSamples;return Math.max(0,...e.filter(i=>Number.isFinite(i)&&i<=r))},wt=new WeakMap,bc=t=>{let e=wt.get(t);return e||(e={snapshot:null,listeners:new Set,demandListeners:new Set},wt.set(t,e)),e},Pf=t=>{var e;return((e=wt.get(t))==null?void 0:e.snapshot)??null},Of=(t,e)=>{const r=bc(t),i=r.listeners.size===0;if(r.listeners.add(e),i)for(const n of r.demandListeners)n(!0);return()=>{if(!(!r.listeners.delete(e)||r.listeners.size>0)){r.snapshot=null;for(const n of r.demandListeners)n(!1);r.demandListeners.size===0&&wt.delete(t)}}},Dp=(t,e)=>{const r=bc(t);return r.demandListeners.add(e),r.listeners.size>0&&e(!0),()=>{r.demandListeners.delete(e),r.listeners.size===0&&r.demandListeners.size===0&&wt.delete(t)}},Qn=t=>{var e;return(((e=wt.get(t))==null?void 0:e.listeners.size)??0)>0},Lf=(t,e)=>{const r=wt.get(t);if(r!=null&&r.listeners.size){r.snapshot=e;for(const i of r.listeners)i()}},Mn=t=>{const e=wt.get(t);if(e){e.snapshot=null;for(const r of e.listeners)r();e.listeners.size===0&&e.demandListeners.size===0&&wt.delete(t)}};let Zn;const Ff=t=>{Zn=t},Np=(...t)=>{const[e]=t;let r,i=!1,n=!1,s=null;const a=()=>{if(!(n||!Qn(e)))return!r&&Zn&&(r=Zn(...t)),!r&&!i&&(i=!0,Br(()=>import("./shadow-projection-debug-publisher-DZzroiS7.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10])).then(o=>{n||!Qn(e)||(r=o.createShadowProjectionDebugPublisher(...t),r.setSnapshot(s),r.publish())}).catch(o=>{n||console.error("Unable to load shadow diagnostics",o)}).finally(()=>{i=!1})),r};return{publish:()=>{var o;return(o=a())==null?void 0:o.publish()},setSnapshot(o){var c;s=o,(c=a())==null||c.setSnapshot(o)},markStale:()=>{var o;return(o=a())==null?void 0:o.markStale()},reset(){s=null,r==null||r.reset()},dispose(){n=!0,s=null,r==null||r.dispose()}}},oo=.01,Pp=500,In=1500,Cn=(t=ss)=>({lastFrameMs:null,sampleDurationMs:0,sampleCount:0,recoveryDurationMs:0,updateIntervalMs:bt[t].targetFps?1e3/bt[t].targetFps:0,targetFrameMs:bt[t].targetFps?1e3/bt[t].targetFps:0,depthScale:1,trial:null,adaptationBlocked:!1}),Dn=(t,e,r,{enabled:i=!0,allowCadenceReduction:n=!0}={})=>{var v,S;if(t.targetFrameMs===0)return t;if(!i)return t.lastFrameMs===null&&t.updateIntervalMs===t.targetFrameMs&&t.depthScale===1&&!t.adaptationBlocked?t:{...t,lastFrameMs:null,sampleDurationMs:0,sampleCount:0,recoveryDurationMs:0,updateIntervalMs:t.targetFrameMs,depthScale:1,trial:null,adaptationBlocked:!1};if(!r||!Number.isFinite(e))return t.lastFrameMs===null?t:{...t,lastFrameMs:null,sampleDurationMs:0,sampleCount:0,recoveryDurationMs:0,depthScale:1,trial:null,adaptationBlocked:!1};const s=t.lastFrameMs===null?0:e-t.lastFrameMs;if(s<=0)return{...t,lastFrameMs:e};const a=t.sampleDurationMs+s,o=t.sampleCount+1;if(a<Pp)return{...t,lastFrameMs:e,sampleDurationMs:a,sampleCount:o};const c=a/o,l=t.targetFrameMs;if(t.trial&&c>=t.trial.baselineFrameMs*.95||t.adaptationBlocked)return{...t,lastFrameMs:e,sampleDurationMs:0,sampleCount:0,trial:null,adaptationBlocked:!0,updateIntervalMs:((v=t.trial)==null?void 0:v.updateIntervalMs)??t.updateIntervalMs,depthScale:((S=t.trial)==null?void 0:S.depthScale)??t.depthScale};const p=c<l/1.2?t.recoveryDurationMs+a:0,f=n?c>l+oo?Math.min(l*4,t.updateIntervalMs+l):p>=In?Math.max(l,t.updateIntervalMs-l):t.updateIntervalMs:l,h=c>l+oo&&(!n||t.updateIntervalMs>=l*4)?Math.max(.5,t.depthScale-.25):p>=In?Math.min(1,t.depthScale+.25):t.depthScale;return{...t,lastFrameMs:e,sampleDurationMs:0,sampleCount:0,recoveryDurationMs:p>=In?0:p,updateIntervalMs:f,depthScale:h,trial:f>t.updateIntervalMs||h<t.depthScale?{baselineFrameMs:c,updateIntervalMs:t.updateIntervalMs,depthScale:t.depthScale}:null,adaptationBlocked:!1}},co=4e3,Ac=(t,e,r)=>{t.updateMatrixWorld(!0),r==null||r.updateMatrixWorld(!0);const i=r?new Fr().setFromProjectionMatrix(new J().multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),r.coordinateSystem,r.reversedDepth):null;let n=e,s=e;const a=new Pe;return t.traverseVisible(o=>{var l,u;const c=o;if(!(c.userData[mi.OVERLAY]||!c.isMesh&&!c.isInstancedMesh||!((u=(l=c.geometry)==null?void 0:l.getAttribute("position"))!=null&&u.count))){for(let d=c;d;d=d.parent)if(d.userData.renderAsOverlay===!0)return;c.geometry.boundingBox||c.geometry.computeBoundingBox(),c.geometry.boundingBox&&(a.copy(c.geometry.boundingBox).applyMatrix4(c.matrixWorld),!(i&&!i.intersectsBox(a))&&(n=Math.min(n,a.min.y),s=Math.max(s,a.max.y)))}}),[n,s]},Op=(t,e,r,i)=>{var o;const n=e.filter(c=>c.providesTerrain&&!c.renderAsOverlay).flatMap(c=>{var u;const l=(u=c.getViewElevationRange)==null?void 0:u.call(c,r);return l?[l]:[]});if(n.length>0)return[Math.min(...n.map(c=>c[0])),Math.max(...n.map(c=>c[1]))];let[s,a]=Ac(t,i,r);for(const c of e){if(c.renderAsOverlay)continue;const l=(o=c.getViewElevationRange)==null?void 0:o.call(c,r);l&&(s=Math.min(s,l[0]),a=Math.max(a,l[1]))}return[s,a]},Lp=[[-1,-1],[-1,1],[1,-1],[1,1]],Fp=[[0,1],[1,3],[3,2],[2,0],[4,5],[5,7],[7,6],[6,4],[0,4],[1,5],[2,6],[3,7]],Bp=(t,e,r,i)=>{t.updateMatrixWorld(!0);const n=Math.min(e,r),s=Math.max(e,r),a=[-1,1].flatMap(c=>Lp.map(([l,u])=>new _(l,u,c).unproject(t))),o=a.filter(c=>c.y>=n&&c.y<=s).map(c=>c.clone());for(const[c,l]of Fp){const u=a[c],d=a[l],p=d.y-u.y;if(!(Math.abs(p)<=Number.EPSILON))for(const f of[n,s]){const h=(f-u.y)/p;h<0||h>1||o.push(u.clone().lerp(d,h))}}for(const c of o){const l=c.clone().sub(i),u=Math.hypot(l.x,l.z);if(u<=co)continue;const d=co/u;l.x*=d,l.z*=d,c.copy(i).add(l)}return o},Hp=`
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
`,lo="float getShadow( sampler2DShadow shadowMap,",Nn="#elif defined( SHADOWMAP_TYPE_VSM )",Up=()=>{const t=On.shadowmap_pars_fragment;if(!t.includes(lo)||!t.includes(Nn))throw new Error("Three PCF shader changed; validate receiver-plane shadow integration");return`uniform bool carmaReceiverPlaneShadow;
${t.replace(lo,"float carmaOriginalGetShadow( sampler2DShadow shadowMap,").replace(Nn,`${Hp}
${Nn}`)}`},uo=new WeakMap,ho=(t,e)=>{const r=uo.get(t);if(r)return e!==void 0&&r.value!==e&&(r.value=e,t.needsUpdate=!0),r;const i={value:e??!1},n=t.onBeforeCompile,s=t.customProgramCacheKey(),a=Up();return t.onBeforeCompile=function(o,c){n.call(this,o,c),o.uniforms.carmaReceiverPlaneShadow=i,o.fragmentShader=o.fragmentShader.replace("#include <shadowmap_pars_fragment>",a)},t.customProgramCacheKey=()=>`${s}|carma-receiver-plane-pcf-v3|${i.value?"mesh":"stock"}`,t.needsUpdate=!0,uo.set(t,i),i},Mc=(t,e=!1)=>{for(let i=t;i;i=i.parent)if(i.userData.renderAsOverlay===!0){t.castShadow=!1,t.receiveShadow=!1;return}if(t.userData[mi.OVERLAY])return;t.castShadow=t.userData.disableShadowCasting!==!0;const r=Array.isArray(t.material)?t.material:[t.material];t.receiveShadow=r.some(i=>i.visible&&i.colorWrite);for(const i of r)t.userData.isShadowTerrainSurface?ho(i,!0):(i.shadowSide??(i.shadowSide=Ao),ho(i,e))},Kt=(t,e=!1)=>{t.traverseVisible(r=>{const i=r;!i.isMesh&&!i.isInstancedMesh||Mc(i,e)})},Gp=t=>t.visible&&t.opacity>0,zp=(t,e)=>{let r=t;for(;r&&r!==e;){if(!r.visible)return!1;r=r.parent}return(Array.isArray(t.material)?t.material:[t.material]).some(Gp)},mo=t=>{t.traverse(e=>{const r=e;if(!r.isMesh&&!r.isInstancedMesh)return;const i=Array.isArray(r.material)?r.material:[r.material];for(const n of i)n.dispose()})},kp=(t,e)=>{const r=e.uniformColor!==null&&je(e.uniformColorMix??1,0,1)>=1;t.traverse(i=>{const n=i;if(!n.userData.isBuilding)return;const s=Array.isArray(n.material)?n.material:[n.material];for(const a of s){e.fullOpacity&&(a.opacity=1,a.transparent=!1,a.depthWrite=!0);const o=a;r&&e.uniformColor&&o.color&&(o.color.set(e.uniformColor),o.vertexColors=!1),a.needsUpdate=!0}})},Wp=(t,e,r)=>{var d;const i=(d=e._originMerc)==null?void 0:d.toLngLat();if(!i)return null;const n=new as;n.name=`shadow-simulation-copy-${e.id}`;const s=new Map;let a=r,o=!1;const c=()=>{for(const[p,f]of s)p.visible=f;s.clear()},l=()=>{if(o)return;c(),mo(n),n.clear(),e.scene.updateMatrixWorld(!0);const p=[];e.scene.traverse(f=>{var v,S;const h=f;!h.isMesh&&!h.isInstancedMesh||(S=(v=h.geometry)==null?void 0:v.getAttribute("position"))!=null&&S.count&&zp(h,e.scene)&&p.push(h)});for(const f of p){const h=f.clone(!1);h.name=`${f.name||"mesh"}-shadow-simulation-copy`,h.visible=!0,h.matrixAutoUpdate=!1,h.matrix.copy(f.matrixWorld),h.matrixWorldNeedsUpdate=!0,h.material=Array.isArray(f.material)?f.material.map(v=>v.clone()):f.material.clone(),Mc(h),s.set(f,f.visible),f.visible=!1,n.add(h)}n.visible=n.children.length>0,kp(n,a)},u={id:`shadow-simulation-generic-${e.id}`,originLngLat:[i.lng,i.lat],root:n,update:()=>{},dispose:()=>{o||(o=!0,c(),mo(n),n.clear())}};return l(),n.visible?(t.addRuntime(u),{runtime:u,sync:l,updateBuildingAppearance(p){a=p,l()}}):(u.dispose(),null)},Ic=2500,Cc=.5,Vp="shadow-simulation-sky-light",jp=t=>{const e=new Pe().setFromObject(t.scene);e.isEmpty()?t.center.set(0,0,0):e.getCenter(t.center)},Yp=(t,e,r,i)=>{const n=new _c(e),a=n.lights[0].target,o=new as;o.visible=!1,o.userData[mi.OVERLAY]=!0;const c=new bo(void 0,0);c.name=Vp;const l=Fm(i);l.mesh.userData[mi.OVERLAY]=!0;const u=new Map;t.traverse(p=>{const f=p;f.isAmbientLight&&u.set(f,f.intensity)});const d={scene:t,frame:e,controller:n,skyLight:c,atmosphericSky:l,ambientLightIntensities:u,lightTarget:a,sunVector:null,sunVectorRoot:o,center:new _,shadowCameraOffsetMeters:Math.max(Ic,r*1.5),shadowAreaMeters:r,sunVectorLengthMeters:r*Cc,sunVectorVisible:!1,shadowQuality:ss,shadowIntensity:1,directionToSun:new _(0,1,0),sunColor:new Be(16773848),sunIntensity:zr,receiverWorldPoints:[],minimumElevationMeters:0,maximumElevationMeters:0,dirty:!0};return Kt(t),jp(d),t.add(c),t.add(l.mesh),d},Kp=(t,e)=>{t.scene.traverse(i=>{const n=i;n.isAmbientLight&&!t.ambientLightIntensities.has(n)&&t.ambientLightIntensities.set(n,n.intensity)});const r=e.skyIrradianceCoefficients;if((r==null?void 0:r.length)===t.skyLight.sh.coefficients.length){r.forEach((i,n)=>{t.skyLight.sh.coefficients[n].copy(i)}),t.skyLight.intensity=zr;for(const i of t.ambientLightIntensities.keys())i.intensity=0;return}t.skyLight.sh.zero(),t.skyLight.intensity=0;for(const[i,n]of t.ambientLightIntensities)i.intensity=n},po=(t,e,r=16773848,i,n=!0)=>{var a;const s=e.clone().normalize();t.directionToSun.copy(s),t.sunColor.set(r);for(const o of t.controller.lights)o.color.copy(t.sunColor);(a=t.sunVector)==null||a.update(t.center,s,t.sunVectorLengthMeters),t.sunVectorRoot.visible=t.sunVectorVisible&&!!t.sunVector,t.sunIntensity=i??zr;for(const o of t.controller.lights)o.intensity=t.sunIntensity;t.lightTarget.updateMatrixWorld(!0);for(const o of t.controller.lights)o.updateMatrixWorld(!0);n&&(t.controller.invalidate(),t.dirty=!0)},qp=t=>{var e;for(const[r,i]of t.ambientLightIntensities)r.intensity=i;t.scene.remove(t.skyLight),t.scene.remove(t.atmosphericSky.mesh),t.sunVectorRoot.removeFromParent(),(e=t.sunVector)==null||e.dispose(),t.atmosphericSky.dispose(),t.controller.dispose()},Xp={[Ge.STANDARD]:0,[Ge.HIGH]:1,[Ge.MAX]:1,[Ge.ULTRA]:1,[Ge.EXTREME]:1},$p=128,Qp={[Ge.STANDARD]:0,[Ge.HIGH]:0,[Ge.MAX]:1,[Ge.ULTRA]:2,[Ge.EXTREME]:3},Zp=(t,e,r,i)=>{var u,d;const n=t==null?void 0:t.tileManager;if(!t||!n||!Number.isFinite(n.deltaZoom)||!Number.isFinite(n.tileSize)||!n.tileManager)return()=>{};const s={deltaZoom:n.deltaZoom,terrainTileSize:n.tileSize,sourceTileSize:n.tileManager.tileSize,meshSize:t.meshSize,calculateTileZoom:(u=n.tileManager._source)==null?void 0:u.calculateTileZoom},o=1-Xp[r],c=e*2**o;n.deltaZoom=o,n.tileSize=c,n.tileManager.tileSize=c,t.meshSize=$p;const l=Qp[r];if(l>0&&n.tileManager._source){s.calculateTileZoom||i==null||i();const p=n.tileManager._source.calculateTileZoom;p&&(n.tileManager._source.calculateTileZoom=(...f)=>p(...f)+l)}return t._meshCache={},(d=n.freeRtt)==null||d.call(n),()=>{var p;n.deltaZoom=s.deltaZoom,n.tileSize=s.terrainTileSize,n.tileManager.tileSize=s.sourceTileSize,t.meshSize=s.meshSize,n.tileManager._source&&(n.tileManager._source.calculateTileZoom=s.calculateTileZoom),t._meshCache={},(p=n.freeRtt)==null||p.call(n)}},xr="carma-shadow-map-style-base",Ir={OPAQUE:"opaque",LABELS:"labels"},Jp=(t,e=Co,r=()=>!0,i=()=>Ir.OPAQUE,n=Ge.MAX)=>{const s=e.id,a=t;if(typeof a.getTerrain!="function"||typeof a.getSource!="function"||typeof a.setTerrain!="function")return Object.assign(()=>{},{refresh:()=>{}});const o=a.getTerrain(),c=new Map,l=new Map;let u=!1,d=!1,p=!1,f=null,h=!1,v,S=null,g=()=>{},x=null;const b=()=>{f&&(h?delete f.getMeshFrameDelta:f.getMeshFrameDelta=v,f=null,v=void 0,h=!1)},I=()=>{const C=a.terrain;!C||C===f||(b(),typeof C.getMeshFrameDelta=="function"&&(h=!Object.prototype.hasOwnProperty.call(C,"getMeshFrameDelta"),v=C.getMeshFrameDelta,C.getMeshFrameDelta=()=>0,f=C))},R=()=>{var k;const C=a.terrain;!C||C===S||(g(),S=C,g=Zp(C,e.tileSize,n,()=>{var X;(X=t.setSourceTileLodParams)==null||X.call(t,9.314,3,e.id)}),(k=t.triggerRepaint)==null||k.call(t))},D=C=>`${C.type}:${String(C.source)}:${String(C["source-layer"])}`,A=()=>{var X;const k=t.getStyle().layers??[];for(const Y of k){if(!yl(Y))continue;const ue=D(Y);let ce=l.get(Y.id);const we=t.getLayoutProperty(Y.id,"visibility");!ce||ce.signature!==ue?(ce={signature:ue,value:we},l.set(Y.id,ce)):we!=="none"&&(ce.value=we),we!=="none"&&t.setLayoutProperty(Y.id,"visibility","none")}if(r()){t.getLayer(xr)||(t.addLayer({id:xr,type:"background",paint:{"background-color":en.baseColor,"background-opacity":en.opacity}},(X=k[0])==null?void 0:X.id),p=!0);for(const Y of k){if(Y.id===xr||Y.type==="custom")continue;const ue=en.opaqueDrapeProperties.get(Y.type);if(!ue)continue;const ce=D(Y);let we=c.get(Y.id);const L=t.getPaintProperty(Y.id,ue);!we||we.signature!==ce?(we={signature:ce,property:ue,value:L},c.set(Y.id,we)):L!==1&&(we.value=L),L!==1&&t.setPaintProperty(Y.id,ue,1)}}},M=C=>{var k;for(const[X,Y]of C)try{const ue=(k=t.getStyle().layers)==null?void 0:k.find(({id:ce})=>ce===X);ue&&D(ue)===Y.signature&&t.getLayoutProperty(X,"visibility")==="none"&&t.setLayoutProperty(X,"visibility",Y.value===void 0?null:Y.value)}catch{}C.clear()},B=()=>{var C;for(const[k,X]of c)try{const Y=(C=t.getStyle().layers)==null?void 0:C.find(({id:ue})=>ue===k);Y&&D(Y)===X.signature&&t.getPaintProperty(k,X.property)===1&&t.setPaintProperty(k,X.property,X.value===void 0?null:X.value)}catch{}if(c.clear(),p){p=!1;try{t.getLayer(xr)&&t.removeLayer(xr)}catch{}}},N=()=>{if(!(u||d)){d=!0;try{if(Qr(t)){b(),g(),g=()=>{},S=null,B(),M(l),a.getTerrain()&&a.setTerrain(null),x=null;return}if(!a.getSource(s)&&t.isStyleLoaded()&&t.addSource(s,{type:"raster-dem",tiles:[Sl(e)],tileSize:e.tileSize,minzoom:e.minzoom,maxzoom:e.maxzoom,encoding:e.encoding,bounds:[...e.bounds]}),i()===Ir.LABELS?(B(),M(l)):A(),a.getSource(s)){const C=a.getTerrain();((C==null?void 0:C.source)!==s||(C.exaggeration??1)!==1)&&a.setTerrain({source:s,exaggeration:1}),R(),I()}x=null}catch(C){const k=C instanceof Error?C.message:String(C);k!==x&&(x=k,console.error("[shadow-simulation] MapLibre terrain setup failed",C))}finally{d=!1}}},j=()=>{d||N()};t.on(Se.STYLE_DATA,N),t.on(Se.TERRAIN,j);let K=Qr(t);const O=vl(t,()=>{const C=Qr(t);C!==K&&(K=C,N())});return N(),Object.assign(()=>{if(!u){u=!0,O(),t.off(Se.STYLE_DATA,N),t.off(Se.TERRAIN,j),b(),g(),S=null,B(),M(l);try{!Qr(t)&&o&&a.getSource(o.source)!==void 0?a.setTerrain(o):a.getTerrain()&&a.setTerrain(null)}catch{}}},{refresh:()=>{!u&&!d&&N()}})},fo=1e3,ef=(t,e,r,i)=>{let n=Number.NEGATIVE_INFINITY,s=null,a=null;const o=u=>{s=null,n=performance.now();const d=`#${u.color.getHexString()}`;if(r()||e(d),!t.isStyleLoaded())return;const p=[1.5,u.azimuthDegrees,90-u.elevationDegrees],f=je(u.relativeIntensity,0,1),h=t.getLight(),v=h.position;h.anchor==="map"&&Array.isArray(v)&&v.length===p.length&&v.every((S,g)=>S===p[g])&&h.color===d&&h.intensity===f||t.setLight({anchor:"map",position:p,color:d,intensity:f})},c=()=>{a!==null&&(globalThis.clearTimeout(a),a=null);const u=s;u&&o(u)};return{apply:u=>{if(s=u,!r()&&!i()){c();return}const d=performance.now()-n;if(d>=fo){c();return}a===null&&(a=globalThis.setTimeout(()=>{a=null;const p=s;p&&o(p)},fo-d))},flush(u){u&&(s=u),c()},dispose(){a!==null&&(globalThis.clearTimeout(a),a=null)}}},Pn=new J,tf=(t,e)=>{const r=()=>{var o,c;return((c=(o=e())==null?void 0:o.localFrame)==null?void 0:c.currentToReference)??(t==null?void 0:t.currentToReference)??Pn},i=new ta,n=new bi;return{frameFromScene:r,getFrameCamera:o=>{const c=o.renderCamera,{localFrame:l}=o;if(!l||l.currentToReference.equals(Pn))return c;const u=c instanceof ta?i.copy(c,!1):n.copy(c,!1);return u.matrixAutoUpdate=!1,u.matrixWorldAutoUpdate=!1,u.matrixWorld.multiplyMatrices(l.currentToReference,c.matrixWorld),u.matrixWorld.decompose(u.position,u.quaternion,u.scale),u.matrix.copy(u.matrixWorld),u.matrixWorldInverse.multiplyMatrices(c.matrixWorldInverse,l.referenceToCurrent),u},toFrameVolumes:(o,c)=>{if(o!=null&&o.mountsOnLocalFrame||c.length===0)return c;const l=r();if(l.equals(Pn))return c;const u=new Pe;return c.map(d=>(u.min.set(...d.minimum),u.max.set(...d.maximum),u.applyMatrix4(l),{...d,minimum:[u.min.x,u.min.y,u.min.z],maximum:[u.max.x,u.max.y,u.max.z]}))}}},rf=900,oi=.01,nf=.25,sf=1e3,af=10,of="shadow-simulation-raster-dem",cf=200,ci=100,lf=1e3,uf=(t,e={})=>{var Ws,Vs,js,Ys,Ks,qs,Xs;const{shadowAreaMeters:r,terrain:i,mapLibreTerrain:n,terrainQuality:s=Ge.MAX}=e,a=Tl();let o=i;const c=r??rf,l=t.getLight();let u=!0;const d=()=>{const m=xe(t).filter(y=>y.providesTerrain===!0);return m.length>0&&m.every(y=>y.mapStyleProjectionBlend===El.OVERLAY)?Ir.LABELS:Ir.OPAQUE},p=Jp(t,n??Co,()=>u,d,a?Ge.STANDARD:s),f=()=>{O.setMeshLabelStyle(d()===Ir.LABELS)};let h=null,v={fullOpacity:!0,uniformColor:null,uniformColorMix:0,textureSaturation:1,textureColorCorrection:!0},S=1,g=null;const x=()=>{var m,y;return g??((y=(m=xe(t).find(w=>w.providesTerrain===!0))==null?void 0:m.getErrorTarget)==null?void 0:y.call(m))??Dl};let b=a?nn:void 0;const I=new WeakMap;let R=null,D={useTransmittanceLut:!0,useIrradianceLut:!0},A=!1,M=!1,B=!1,N=null,j=new Be(((Ws=o==null?void 0:o.material)==null?void 0:Ws.color)??Do);const K=()=>{var m,y,w,E;if(u){N==null||N(),N=null,(y=(m=O.layer).setMapStyleProjectionVisible)==null||y.call(m,!0);return}(E=(w=O.layer).setMapStyleProjectionVisible)==null||E.call(w,!1),N??(N=Rl(t))},O=wl(t,{mapStylePresentation:!0}),oe=(m,y)=>{var w,E;return{observer:{longitude:m[0],latitude:m[1],altitudeMeters:0},scenePosition:((E=(w=O.layer).projectLngLatToScene)==null?void 0:E.call(w,[m[0],m[1]],ci))??new _(0,ci,0),sceneFromLocal:y}};let C=null;const k=((js=(Vs=O.layer).getLocalFrame)==null?void 0:js.call(Vs))??null;let X=(k==null?void 0:k.revision)??0,Y=k?oe(k.lngLat,k.sceneFromLocalRotation):oe([t.getCenter().lng,t.getCenter().lat]);const{frameFromScene:ue,getFrameCamera:ce,toFrameVolumes:we}=tf(k,()=>C),L=new Im;let Q=()=>{},Ae=m=>Q(m),Z=null,_t=0;const ht=m=>{if(!o)return null;const y=t.getCenter(),{errorTargetPixels:w,motionErrorTargetPixels:E,shadowLevelOffset:ee,minimumLevel:U,maximumLevel:F,maxSelectionTiles:W,requestConcurrency:re,maxCacheBytes:de,maxCachedMeshes:ve,maxCachedMeshBytes:pe,persistBaseTiles:ge,baseRasterEdgePixels:V,baseCoverageMemoryShare:ye,meshSegments:kt,maximumMeshSegments:Wt,noDataHeightMeters:Zi,heightRangeMeters:qr,geometryProjection:Xr,heightOffsetMeters:$r,heightOffsetRangeMeters:Et,material:Qe,...Dt}=bl(o,a);return Al(`${of}-${++_t}`,Dt,m??[y.lng,y.lat],{errorTargetPixels:w??sn,motionErrorTargetPixels:E,shadowLevelOffset:ee,minimumLevel:U,maximumLevel:F,maxSelectionTiles:W,requestConcurrency:re,maxCacheBytes:de,maxCachedMeshes:ve,maxCachedMeshBytes:pe,persistBaseTiles:ge,baseRasterEdgePixels:V,baseCoverageMemoryShare:ye,meshSegments:kt??Dt.tileSize,maximumMeshSegments:Wt,noDataHeightMeters:Zi,heightRangeMeters:qr,geometryProjection:Xr??"ecef",heightOffsetMeters:$r,heightOffsetRangeMeters:Et,material:Qe,receivesMapStyleTexture:!0,onContentChanged:nt=>Ae(nt),onError:nt=>{const Vt=nt instanceof Error?nt.message:String(nt);Vt!==Z&&(Z=Vt,console.error("[shadow-simulation] Raster DEM terrain runtime failed",nt))}})},me=()=>xe(t).some(m=>m.providesTerrain===!0),Ye=()=>xe(t).every(m=>{var y,w;return!m.providesTerrain||(((y=m.hasRenderableContent)==null?void 0:y.call(m))??((w=m.isMainViewReady)==null?void 0:w.call(m))??!0)});let _e=xe(t).filter(m=>m.providesTerrain),H=me()?null:ht(),Ke=H===null;H&&O.layer.addRuntime(H);const le=((Ks=(Ys=O.layer).getLocalFrameGroup)==null?void 0:Ks.call(Ys))??O.layer.getScene(),T=Yp(O.layer.getScene(),le,c,j),mt=new _;let ze=0,Mt=0;const Me=Jm({getRequest:()=>{var w;if(A||!o||!H||!Ke||vr(t)||B||M||qe!==0||!C)return null;const m=(w=H.getIdlePrefetchAvailability)==null?void 0:w.call(H);if(!(m!=null&&m.ready))return null;const y=H;return{key:JSON.stringify([_t,ze,Mt,C.renderCamera.projectionMatrix.elements,C.renderCamera.matrixWorldInverse.elements,C.viewport.x,C.viewport.y]),run:async E=>{var U;if(await y.prefetchIdleTerrain(E),E.aborted||!tt||!Gt||!Ne()||!$||!C||!O.layer.runIdleRender||pt.size>0||ft().some(F=>F!==y&&F!==zt)||xt.some(({id:F})=>!/^\d+:[-\d]+:[-\d]+$/.test(F)))return;const ee=((U=y.getIdleShadowRegions)==null?void 0:U.call(y))??[];ee.length===0||!y.prepareIdleShadowRegion||(await $.prewarm({cells:_u(xt),frame:C,planningCamera:ce(C),lighting:{directionToSun:T.directionToSun,color:T.sunColor,intensity:T.sunIntensity,shadowIntensity:T.shadowIntensity},targetPixels:bt[T.shadowQuality].shadowTexelErrorPixels,samples:gr(),signal:E,prepare:async(F,W)=>{const re=xu(F.receiverBounds,ee);return re===null?{covered:!1,group:null,isCurrent:()=>!1,dispose:()=>{}}:y.prepareIdleShadowRegion({receiverBounds:F.receiverBounds,casterBounds:F.casterBounds,terrainLevel:re},W)}}),E.aborted||$e.publish())}}}});let Ie=null,or="";const kr=(m,y,w)=>{const E=`${m}:${y}`;E!==or&&(or=E,console.error(`[SHADOW] Atmospheric update rejected; retaining last valid frame (${m}: ${y})`,{phase:m,reason:y,...w}))},Dc=()=>{or=""},He=()=>{Me.cancel(),ze+=1,Mt+=1},cr=ef(t,m=>O.setLocationLabelColor(m),()=>M,()=>B),Bt=m=>{const y={longitude:Y.observer.longitude,latitude:Y.observer.latitude,altitudeMeters:ci},w=xm(m.instant,y,Y);if(w)return kr("sunlight input",w,{observer:y,skyReference:Y}),R;L.ensure(()=>{if(A||!h)return;He();const U=Bt(h);U&&cr.apply(U),t.triggerRepaint()},D),L.ensureSky(()=>{A||!h||(He(),Bt(h),t.triggerRepaint())});let E;try{E=L.evaluate(m.instant,y,D,Y)}catch(U){return kr("sunlight generation","generator threw",{observer:y,error:U}),R}const ee=Em(E);return ee?(kr("sunlight output",ee,{observer:y,sample:E}),R):(Dc(),R=E,T.atmosphericSky.update(E.skyFrame,L.skyTextures),Kp(T,E),po(T,E.directionToSun.clone().transformDirection(ue()),E.radiance,zr),E)};Q=m=>{A||(Me.cancel(),$==null||$.invalidateContent(m),T.controller.invalidate(),T.dirty=!0)};const pt=new Map,ft=()=>{const m=xe(t);return H&&!m.includes(H)?[H,...m]:m};let Ht=null,gt=null,ke=null,vt=null,bs=[];const As=()=>ft().flatMap(m=>{var y;return we(m,((y=m.getActiveTileVolumes)==null?void 0:y.call(m))??[])}),lr=()=>Ht??As(),Ms=(m,y=oi*4)=>{if(!me())return;const w=lr(),E=x(),ee=m?io(m,w,E):Math.max(E,...w.filter(({loadReason:F})=>F!==er.SHADOW).map(({errorPixels:F})=>F).filter(F=>Number.isFinite(F)));let U=1/0;for(const F of w){if(F.loadReason===er.SHADOW||m&&(F.minimum[0]>=m.max.x||F.maximum[0]<=m.min.x||F.minimum[2]>=m.max.z||F.maximum[2]<=m.min.z))continue;const W=F.geometricError,re=F.errorPixels;W!==void 0&&re!==void 0&&Number.isFinite(W)&&Number.isFinite(re)&&W>0&&re>0&&(U=Math.min(U,W/re))}return wp({stageErrorPixels:ee,targetErrorPixels:E,groundTexelTargetMeters:y,finalBiasMeters:oi,maximumCoarseBiasMeters:nf,metersPerPixel:Number.isFinite(U)?U:0})},Is=m=>{const y=Ht,w=gt,E=ke,ee=vt;if(Ht=y??As(),gt=w??new Map,ke=E??new Map,vt=ee??new Map,!y){const U=Sp(bs,Ht);U.length>0&&($==null||$.invalidateContent(U),hr.length=0),bs=Ht}try{return m()}finally{Ht=y,gt=w,ke=E,vt=ee}};let It=null,ur=null,ki=Number.NEGATIVE_INFINITY,Wi=!1;const Cs=new WeakMap,Nc=m=>{var E,ee,U;if(!m)return"none";const y=t.getCenter(),w=t.getCanvas();return[Math.round(y.lng*1e7),Math.round(y.lat*1e7),Math.round((((E=t.getZoom)==null?void 0:E.call(t))??0)*1e4),Math.round((((ee=t.getBearing)==null?void 0:ee.call(t))??0)*1e3),Math.round((((U=t.getPitch)==null?void 0:U.call(t))??0)*1e3),`${w.clientWidth||w.width}x${w.clientHeight||w.height}`,(h==null?void 0:h.azimuthDegrees)??"no-sun",(h==null?void 0:h.elevationDegrees)??"no-sun",T.shadowQuality].join(";")},dr=m=>{var W,re,de,ve,pe,ge;if(M){const V=performance.now();if(V-ki<lf){Wi=!0;return}ki=V}ur=m,Wi=!1;const y=Nc(m),w=C?ce(C):null,E=m&&w?new Fr().setFromProjectionMatrix(new J().multiplyMatrices(w.projectionMatrix,w.matrixWorldInverse),w.coordinateSystem,w.reversedDepth):null,ee=new Pe,U=E?we(H,((W=H==null?void 0:H.getActiveTileVolumes)==null?void 0:W.call(H))??[]).filter(V=>(ee.min.fromArray(V.minimum),ee.max.fromArray(V.maximum),E.intersectsBox(ee))):void 0,F=[...xe(t),...H?[H]:[]];for(const V of new Set(F)){if((re=V.setShadowStagePresentationGate)==null||re.call(V,!1),!V.providesTerrain){V===H?(de=V.setErrorTarget)==null||de.call(V,(o==null?void 0:o.errorTargetPixels)??sn):(ve=V.setErrorTargetOverride)==null||ve.call(V,g),(pe=V.setShadowView)==null||pe.call(V,m?{...m,terrainReceivers:U}:null);continue}Cs.get(V)!==y&&(Cs.set(V,y),(ge=V.setShadowView)==null||ge.call(V,m))}},Vi=m=>{var y;It=m;for(const w of new Set([...xe(t),...H?[H]:[]]))(y=w.setLiveShadowView)==null||y.call(w,m);B||dr(m)};let tt=!a;a&&(T.shadowQuality=qt.FPS_120);let ji={},De=tn(rn(ji,a),T.shadowQuality),rt=null;const Wr=()=>({format:De.shadowBufferFormat,msaaSamples:De.shadowBufferLayout===ra.TILED?0:Cp(De,(De.shadowBufferFormat===Xt.SDR_8?rt==null?void 0:rt.sdrSamples:rt==null?void 0:rt.hdrSamples)??[0,2,4])});let Ut=Wr(),qe=0,Yi=!1,Vr=!1;const hr=[];let Xe=!0,Ki=[],Ds="",it=Cn(T.shadowQuality),jr=Number.POSITIVE_INFINITY,Gt=!0,Ct=no(4096);T.controller.setMaxShadowMapSize(Ct.maxShadowMapSize);let $=null,qi=null,xt=[];const Ne=()=>De.shadowBufferLayout===ra.TILED,mr=()=>{$==null||$.dispose(),$=null,qi=null,xt=[]},$e=Np(t,()=>({bufferLayout:De.shadowBufferLayout,sunDiscSamples:De.shadowSunDiscSamples,tiledStats:Ne()?($==null?void 0:$.stats)??null:null}));T.controller.setSoftSun(tt);const pr=(m,y)=>Math.round(m/y)*y,Pc=m=>{var w,E,ee,U;const y=t.getCenter();return[pr(y.lng,1e-7),pr(y.lat,1e-7),pr(((w=t.getZoom)==null?void 0:w.call(t))??0,1e-4),pr(((E=t.getBearing)==null?void 0:E.call(t))??0,.001),pr(((ee=t.getPitch)==null?void 0:ee.call(t))??0,.001),`${m.viewport.x}x${m.viewport.y}`,(U=m.cssViewport)==null?void 0:U.toArray().join("x")].join(";")},fr=(m=!0,y=!0,w)=>{var re,de,ve,pe;const E=t.getCenter(),ee=(H==null?void 0:H.getElevation(E.lng,E.lat))??0,U=(de=(re=O.layer).projectLngLatToScene)==null?void 0:de.call(re,[E.lng,E.lat],ee);if(!U){h&&Bt(h),y&&t.triggerRepaint();return}T.center.copy(U).applyMatrix4(ue()),Ie??(Ie=Ac(T.scene,U.y));const[F,W]=Ie;if(w){const ge=Bp(ce(w),F,W,T.center);if(ge.length>0){const V=new Pe().setFromPoints(ge).getSize(new _),ye=Math.max(...ge.map(kt=>kt.distanceTo(T.center)));T.sunVectorLengthMeters=Math.min(V.x,V.z)*Cc,T.shadowAreaMeters=Math.max(r??0,af,ye*2),Ki=ge}}else Xe=!0;if(T.shadowCameraOffsetMeters=Math.max(Ic,T.shadowAreaMeters*1.5),T.receiverWorldPoints=Ki,T.minimumElevationMeters=F,T.maximumElevationMeters=W,T.dirty=!0,h&&(m||!R))Bt(h);else{T.lightTarget.position.copy(T.center);for(const ge of T.controller.lights)ge.target.position.copy(T.center),ge.target.updateMatrixWorld(!0);(ve=T.sunVector)==null||ve.root.position.copy(T.center),(pe=T.sunVector)==null||pe.root.updateMatrixWorld(!0)}y&&t.triggerRepaint()},zt={id:"shadow-simulation-controller",originLngLat:[t.getCenter().lng,t.getCenter().lat],root:new as,updatePriority:cf,update(m){var qr,Xr,$r;C=m;const{localFrame:y}=m;y&&y.revision!==X&&(X=y.revision,Y=oe(y.lngLat,y.sceneFromLocalRotation),R&&(R=Am(R,Y),T.atmosphericSky.update(R.skyFrame,L.skyTextures)));const w=(Xr=(qr=O.layer).getRenderer)==null?void 0:Xr.call(qr);w&&!rt&&(rt=Ip(w),Ut=Wr(),Ct=no(Math.min(rt.maxTextureSize,rt.maxRenderbufferSize)),T.controller.setMaxShadowMapSize(Ct.maxShadowMapSize)),jr=Mp(Ct.maxAccumulationPixels,Ut),Gt=m.viewport.x*m.viewport.y<=jr,it=Dn(it,performance.now(),B,{enabled:De.shadowAdaptiveQuality,allowCadenceReduction:!Ne()});const E=Math.max(0,m.lodCamera.position.y-m.lookTarget.y),ee=ci+E,U=Y.scenePosition.y+E;![...m.lodCamera.matrixWorld.elements,...m.lodCamera.projectionMatrix.elements].every(Number.isFinite)||!Number.isFinite(ee)||!Number.isFinite(U)?kr("render camera","local Three.js camera matrix or altitude is invalid",{altitudeMeters:ee,cameraHeightAboveTargetMeters:E,matrixWorld:m.lodCamera.matrixWorld.elements,projectionMatrix:m.lodCamera.projectionMatrix.elements}):(T.atmosphericSky.updateViewCamera(m.lodCamera),T.atmosphericSky.updateObserverScenePosition(mt.set(Y.scenePosition.x,U,Y.scenePosition.z)));const W=Pc(m);if((Xe||W!==Ds)&&(performance.now(),Ds=W,Ie=B?Ie??[T.minimumElevationMeters,T.maximumElevationMeters]:Op(T.scene,xe(t),m.renderCamera,T.center.y),fr(!1,!1,m),Xe=!1),!T.dirty)return;T.sunVectorVisible&&T.sunVector&&T.sunVector.root.cone.position.y!==T.sunVectorLengthMeters&&po(T,T.directionToSun,T.sunColor,T.sunIntensity),ze+=1;const re=lr(),de=re.flatMap(({minimum:Et,maximum:Qe})=>Lo(ce(m),new Pe(new _(...Et),new _(...Qe))));if(T.receiverWorldPoints=de.length>0?de:Ki,T.receiverWorldPoints.length===0||!h){Vi(null),$e.setSnapshot(null),Mn(t);return}if(Ne()){xt=wu(re.filter(({loadReason:Qe})=>Qe!==er.SHADOW).map(({id:Qe,minimum:Dt,maximum:nt,receiverObjectId:Vt})=>({id:Qe,receiverObjectId:Vt,bounds:new Pe(new _(...Dt),new _(...nt))})));const Et=vu(xt,ce(m));Et.length>0&&(T.receiverWorldPoints=[...Et])}const ve=so(Ct.maxShadowMapSize,T.shadowQuality,m.viewport.x*m.viewport.y,B&&me()?it.depthScale:1),pe=m.cssViewport??m.viewport,ge=so(Ct.maxShadowMapSize,T.shadowQuality,pe.x*pe.y,B?it.depthScale:1),V=T.controller.update({maxReceiverBiasMeters:Ms(),receiverTexelMeters:me()?void 0:Il(t.getZoom(),Cl((($r=H==null?void 0:H.originLngLat)==null?void 0:$r[1])??t.getCenter().lat),{tileSize:512})*bt[T.shadowQuality].shadowTexelErrorPixels,mountedShadowCamera:!me(),rasterKey:me()?void 0:String(t.getZoom()),receiverWorldPoints:T.receiverWorldPoints,receiverAnchorWorldPosition:me()?T.center:new _,minimumElevationMeters:T.minimumElevationMeters,maximumElevationMeters:T.maximumElevationMeters,directionToSun:T.directionToSun,color:T.sunColor,intensity:T.sunIntensity,shadowIntensity:T.shadowIntensity,quality:T.shadowQuality,mapTexelBudget:ve,casterMapTexelBudget:ge,groundTexelFit:me()?De.shadowGroundTexelFit:!1,stabilizeMapSize:B});if(T.dirty=!1,!V){Vi(null),$e.setSnapshot(null),Mn(t);return}const ye=V.camera,kt=T.controller.lights[0].shadow.camera,Wt=R==null?void 0:R.skyFrame.directionToSunECEF;Vi({camera:kt,directionToSunECEF:Wt?[Wt.x,Wt.y,Wt.z]:void 0,casterAngularRadiusRadians:tt?Pr:0,shadowMapSize:{width:(ye.rightMeters-ye.leftMeters)/V.casterMetersPerTexel[0],height:(ye.topMeters-ye.bottomMeters)/V.casterMetersPerTexel[1]}});const Zi=Qn(t);if(ye&&Zi){m.lodCamera.updateMatrixWorld(!0),m.lodCamera.updateProjectionMatrix();const Et=ft().flatMap(Qe=>{var Dt;return(((Dt=Qe.getActiveTileVolumes)==null?void 0:Dt.call(Qe))??[]).map(({id:nt,loadReason:Vt,minimum:Gc,maximum:zc})=>({id:nt,loadReason:Vt,minimum:Gc,maximum:zc}))});$e.setSnapshot({bufferLayout:De.shadowBufferLayout,sunDiscSamples:De.shadowSunDiscSamples,tiledStats:null,cameraRangeMeters:kt.position.distanceTo(T.controller.lights[0].target.position),leftMeters:ye.leftMeters,rightMeters:ye.rightMeters,bottomMeters:ye.bottomMeters,topMeters:ye.topMeters,nearMeters:ye.nearMeters,farMeters:ye.farMeters,projectionMatrixElements:ye.projectionMatrixElements,shadowMapWidth:ye.shadowMapWidth,shadowMapHeight:ye.shadowMapHeight,minimumElevationMeters:T.minimumElevationMeters,maximumElevationMeters:T.maximumElevationMeters,sceneAnchorPositionElements:T.center.toArray(),mainCamera:{viewMatrixElements:[...m.lodCamera.matrixWorldInverse.elements],projectionMatrixElements:[...m.lodCamera.projectionMatrix.elements],nearMeters:m.lodCamera.near,farMeters:m.lodCamera.far,viewportWidth:m.viewport.x,viewportHeight:m.viewport.y},tileVolumes:Et,shadow:V,atmosphericSunlight:R?{azimuthDegrees:R.azimuthDegrees,elevationDegrees:R.elevationDegrees,relativeIntensity:R.relativeIntensity,color:`#${R.color.getHexString()}`,transmittanceReady:R.atmosphericTransmittanceReady,irradianceReady:R.atmosphericIrradianceReady}:null}),$e.publish()}},dispose:()=>{}};O.layer.addRuntime(zt);const gr=()=>De.shadowSunDiscSamples,Ns=()=>{var w,E;if(!Ne()||!C||T.directionToSun.y<=0)return null;const m=(E=(w=O.layer).getRenderer)==null?void 0:E.call(w);if(!m)return null;let y=!1;if(!$||qi!==m){const ee=xt;mr(),xt=ee,qi=m,$=new gp(T.scene,m,{light:T.controller.lights[0],sky:T.atmosphericSky.mesh,overlay:T.sunVectorRoot,frame:T.frame,maximumMapSize:Ct.maxShadowMapSize,isCorridorReady:(U,F,W)=>{const re=An(U,F,W),de=gt==null?void 0:gt.get(re);if(de!==void 0)return de;const ve=ft().every(pe=>{var ge;return((ge=pe.isShadowRegionReady)==null?void 0:ge.call(pe,U,F,W))??(pe.getRequestDemand?pe.getRequestDemand()===0:!pe.providesTerrain||!vr(t))});return gt==null||gt.set(re,ve),ve},receiverStageError:U=>{const F=An(U),W=vt==null?void 0:vt.get(F);if(W!==void 0)return W;const re=io(U,lr(),me()?x():(o==null?void 0:o.errorTargetPixels)??sn);return vt==null||vt.set(F,re),re},receiverBiasLimit:(U,F)=>Ms(U,F)??oi,onPresentedPages:(U,F)=>{var re;const W=yp(lr(),F.map(({id:de,receiverBounds:ve})=>({id:de,bounds:ve})),U.map(({id:de,receiverBounds:ve})=>({id:de,bounds:ve})));if(W.length!==0)for(const de of ft())(re=de.acknowledgeShadowStage)==null||re.call(de,W)},corridorRevision:(U,F,W)=>{var ge;const re=An(U,F,W),de=ke==null?void 0:ke.get(re);if(de!==void 0)return de;const ve=[];for(const V of ft()){if(V===zt)continue;const ye=(ge=V.getShadowRegionRevision)==null?void 0:ge.call(V,U,F,W);if(!ye)return ke==null||ke.set(re,null),null;ve.push(JSON.stringify([V.id,ye]))}const pe=ve.length?JSON.stringify(ve.sort()):null;return ke==null||ke.set(re,pe),pe},dateTimeKey:()=>(h==null?void 0:h.instant.toISOString())??null,worldBasis:()=>{const U=O.layer.projectSceneToLngLat([0,0,0]);if(!U)throw new Error("Shared scene origin is not initialized");const F=jl.MercatorCoordinate.fromLngLat(U,0);return Tp(F.x,F.y,F.meterInMercatorCoordinateUnits())},requestRepaint:()=>t.triggerRepaint(),visualEpoch:()=>Mt,auditCorridors:U=>{const F=lr(),W=ft();return U.map(({id:re,casterBounds:de,receiverBounds:ve})=>_p({id:re,casterBounds:de,sunElevationDegrees:(h==null?void 0:h.elevationDegrees)??0,volumes:F,regions:W.flatMap(pe=>{var V;const ge=(V=pe.getShadowRegionDiagnostics)==null?void 0:V.call(pe,de,void 0,ve);return ge?[ge]:[]})}))},runIdleRender:U=>{var F,W;return((W=(F=O.layer).runIdleRender)==null?void 0:W.call(F,U))??!1}}),y=!0}return!B||y?$.update(xt,C,{maxReceiverBiasMeters:me()?oi:void 0,directionToSun:T.directionToSun,color:T.sunColor,intensity:T.sunIntensity,shadowIntensity:T.shadowIntensity},bt[T.shadowQuality].shadowTexelErrorPixels,ce(C)):$.updatePresentation(C,ce(C)),$},Oc=vp(),Yr=()=>Ne()&&Oc(ft()),Ps={onSettled:Me.onSettled,onPresented:()=>{var y;const m=performance.now();for(const w of xe(t))(y=w.onShadowPresented)==null||y.call(w,m)},get options(){return Ut},get maxRenderTargetPixels(){return jr},get rounds(){return gr()},epoch:()=>ze,visualEpoch:()=>Mt,pending:()=>Gt&&tt&&!M&&(!Ke||Yr()||!Ne()&&!Ye()||!Ne()&&vr(t)||B||!Ne()&&qe!==0),active:()=>Gt&&tt&&Ke&&!Yr()&&(Ne()||Ye())&&(Ne()||!vr(t))&&!B&&!M&&(Ne()||qe===0)&&h!==null&&It!==null&&T.receiverWorldPoints.length>0,retainSettledFrame:()=>!M&&Gt&&tt&&h!==null&&It!==null&&T.receiverWorldPoints.length>0,prepareRound:m=>{Ne()||T.controller.applySunDiscSample(m,gr())},finishRound:()=>T.controller.restoreSunDiscCenter(),get renderProgressive(){if(Ne())return(m,y)=>!tt||M||!Gt?null:Is(()=>{if(Yr())return null;const w=Ns();if(!w)return null;const E=w.renderProgressive(m,{...y,samples:gr(),maxRenderTargetPixels:jr,options:Ut});return $e.publish(),E})},renderScene:(m,y)=>!tt||M||!Ne()?!1:Is(()=>{if(Yr())return!1;const w=Ns();if(!w)return!1;const E=w.render(m,y,gr(),!B);return $e.publish(),E})};(Xs=(qs=O.layer).setAccumulationController)==null||Xs.call(qs,Ps);const Kr=()=>{Ie=null,Xe=!0,fr()};Ae=m=>{Q(m),Kr()};const Os=()=>{Me.cancel(),$==null||$.pausePending(),it=Dn(it,performance.now(),!1),B=!0,Xe=!0},Xi=()=>{Me.cancel(),Xe=!0},Ls=()=>{B=!1,it=Dn(it,performance.now(),!1),Yi?(Yi=!1,Qi()):Kr(),R&&cr.flush(R),ur!==It&&dr(It)},Fs=()=>{Xi(),t.triggerRepaint()};t.on(Se.MOVE_START,Os),t.on(Se.MOVE,Xi),t.on(Se.MOVE_END,Ls),t.on(Se.RESIZE,Fs);const $i=m=>{m.ready.then(y=>{!y||A||H!==m||(Ke=!0,Kr(),t.triggerRepaint())})},Bs=()=>{var E,ee,U,F;const m=xe(t).filter(W=>W.providesTerrain);if(m.length!==_e.length||m.some(W=>!_e.includes(W))){_e=m,mr(),(ee=(E=O.layer).setAccumulationController)==null||ee.call(E,null),(F=(U=O.layer).setAccumulationController)==null||F.call(U,Ps);for(const W of T.controller.lights)W.shadow.map&&(Rt(W.shadow.map),W.shadow.map=null);He()}const y=me();if(!o)return;if(y){Me.cancel(),Ke=!0;const W=H;H=null,W&&O.layer.hasRuntime(W.id)&&O.layer.removeRuntime(W.id),Ie=null,Xe=!0;return}if(H)return;const w=ht();w&&(Me.cancel(),Ke=!1,H=w,w.setMaterialColor(`#${j.getHexString()}`),w.setShadowView(ur),O.layer.addRuntime(w),$i(w),Ie=null,Xe=!0)};H&&$i(H),fr();const Hs=()=>{if(A)return;const m=new Set(Ml(t));for(const[y,w]of pt)m.has(y)||(O.layer.removeRuntime(w.runtime.id),pt.delete(y));for(const y of m){const w=pt.get(y);if(w){w.sync();continue}if(!y.scene)continue;const E=Wp(O.layer,y,v);E&&pt.set(y,E)}Kt(O.layer.getScene(),me()),Kr(),t.triggerRepaint()},Lc=_l(t,Hs);Hs(),f();const Us=new WeakSet,Qi=()=>{var m,y,w;if(!A){qe&&(window.clearTimeout(qe),qe=0),Vr?$==null||$.invalidateContent():hr.length>0&&($==null||$.invalidateContent(hr)),Vr=!1,hr.length=0,Me.cancel(),Bs(),p.refresh(),f();for(const E of xe(t))E.providesTerrain&&((m=E.setErrorTargetOverride)==null||m.call(E,g),(!I.has(E)||I.get(E)!==b)&&((y=E.setCacheBudget)==null||y.call(E,b),I.set(E,b))),(w=E.setShadowSimulationStyle)==null||w.call(E,v),Us.has(E)||(Kt(E.root,me()),Us.add(E));dr(ur),pt.size>0&&Kt(O.layer.getScene(),me()),T.controller.invalidate(),T.dirty=!0,Xe=!0,Ie=null,t.triggerRepaint()}},Fc=No(t,m=>{if(A)return;const y=m==null?void 0:m.bounds;if(m===void 0){const w=xe(t).filter(E=>E.providesTerrain);(w.length!==_e.length||w.some(E=>!_e.includes(E)))&&(Bs(),p.refresh(),f())}for(const w of(m==null?void 0:m.roots)??[])Kt(w,me());if((y==null?void 0:y.length)===0){t.triggerRepaint();return}if(y===void 0?Vr=!0:y.length>0&&hr.push(...y.map(w=>w.clone())),Me.cancel(),y===void 0&&ft().some(w=>w!==zt&&!w.getActiveTileVolumes)&&(Vr=!0),B){Yi=!0,t.triggerRepaint();return}t.triggerRepaint(),!qe&&(qe=window.setTimeout(()=>{qe=0,Qi()},sf))}),Bc=xl(t,()=>{vr(t)&&Me.cancel(),A||t.triggerRepaint()});Qi();const Gs=m=>{const y=R??Bt(m);y&&cr.apply(y)},Hc=m=>{(h==null?void 0:h.instant.getTime())!==m.instant.getTime()&&($==null||$.cancelPending(!0),He(),h=m,fr(),Gs(m))},zs=()=>{A||h&&Gs(h)};t.on(Se.STYLE_LOAD,zs);const ks=()=>{$e.markStale(),T.dirty=!0,t.triggerRepaint()},Uc=Dp(t,m=>{m?ks():$e.reset()});return{updateSolarPosition:Hc,updateMeshCacheBudget(m){var w;a&&(m=Math.min(m??nn,nn));const y=m!==void 0&&Number.isFinite(m)&&m>0?m:void 0;if(!(b===y&&xe(t).filter(E=>E.providesTerrain).every(E=>I.has(E)&&I.get(E)===y))){b=y;for(const E of xe(t))E.providesTerrain&&((w=E.setCacheBudget)==null||w.call(E,y),I.set(E,y));t.triggerRepaint()}},updateTerrain(m){if(o===m||(Me.cancel(),o=m,!m||me()))return;const y=H,w=ht(y==null?void 0:y.originLngLat);w&&(w.setMaterialColor(`#${j.getHexString()}`),w.setShadowView(ur),y&&w.adoptPresentation(y),H=w,O.layer.addRuntime(w),y&&O.layer.removeRuntime(y.id),$i(w),Ie=null,Xe=!0,He(),Ae(),t.triggerRepaint())},updateTerrainColor(m){const y=new Be(m);j.equals(y)||(He(),H==null||H.setMaterialColor(m),T.atmosphericSky.updateGroundAlbedo(y),j=y)},updateMeshErrorTarget(m){var y;if(g!==m){g=m;for(const w of xe(t))(y=w.setErrorTargetOverride)==null||y.call(w,m);t.triggerRepaint()}},updateBuildingAppearance(m){var y;if(!(v.fullOpacity===m.fullOpacity&&v.uniformColor===m.uniformColor&&(v.uniformColorMix??1)===(m.uniformColorMix??1)&&(v.textureSaturation??1)===(m.textureSaturation??1)&&(v.textureColorCorrection??!1)===(m.textureColorCorrection??!1))){He(),$==null||$.invalidateContent(),v=m;for(const w of pt.values())w.updateBuildingAppearance(m);for(const w of xe(t))(y=w.setShadowSimulationStyle)==null||y.call(w,m);Kt(O.layer.getScene(),me()),T.controller.invalidate(),T.dirty=!0,t.triggerRepaint()}},updateShadowQuality(m){a&&(m=qt.FPS_120),T.shadowQuality!==m&&(He(),T.shadowQuality=m,De=tn(rn(ji,a),m),Ut=Wr(),it=Cn(m),T.dirty=!0,fr(),T.controller.invalidate())},updateRenderQuality(m){m=rn(m,a);const y=De,w=tn(m,T.shadowQuality);ji={...m},De=w;const E=y.shadowAdaptiveQuality!==w.shadowAdaptiveQuality;(E||y.shadowBufferLayout!==w.shadowBufferLayout)&&(it=Cn(T.shadowQuality)),!(!E&&y.shadowBufferLayout===w.shadowBufferLayout&&y.shadowBufferFormat===w.shadowBufferFormat&&y.shadowSunDiscSamples===w.shadowSunDiscSamples&&y.shadowMsaaSamples===w.shadowMsaaSamples&&y.shadowGroundTexelFit===w.shadowGroundTexelFit)&&(Ut=Wr(),He(),y.shadowBufferLayout!==w.shadowBufferLayout&&(mr(),Xe=!0),(E||y.shadowGroundTexelFit!==w.shadowGroundTexelFit||y.shadowBufferLayout!==w.shadowBufferLayout)&&(T.dirty=!0,T.controller.invalidate()),$e.publish(),t.triggerRepaint())},updateSoftSunShadows(m){m=m&&!a,tt!==m&&(He(),tt=m,mr(),T.controller.setSoftSun(m),T.controller.invalidate(),T.dirty=!0,t.triggerRepaint())},updateTimeAnimating(m){M!==m&&(Me.cancel(),M=m,m&&($==null||$.pausePending()),m||(cr.flush(),ki=Number.NEGATIVE_INFINITY,Wi&&!B&&dr(It),T.dirty=!0),t.triggerRepaint())},refreshProjectionDebug:ks,updateShadowIntensity(m){const y=je(m,0,1);if(S!==y){He(),S=y,T.shadowIntensity=S;for(const w of T.controller.lights)w.shadow.intensity=S;t.triggerRepaint()}},updateMapStyleContentVisibility(m){u!==m&&(u=m,K(),t.triggerRepaint())},updateMapStyleElevationVisibility(m,y){O.setMapStyleElevationVisibility(m,y),t.triggerRepaint()},updateMapStyleLabelOverlayVisibility(m){O.setPointLabelOverlayVisible(m),t.triggerRepaint()},updateSunDebugVectorVisibility(m){T.sunVectorVisible!==m&&(He(),T.sunVectorVisible=m,T.sunVectorRoot.visible=m&&!!h,m?(T.frame.add(T.sunVectorRoot),Br(async()=>{const{buildSunVector:y}=await import("./shadow-sun-vector-CeKFxK1_.js");return{buildSunVector:y}},__vite__mapDeps([11,3,1,4,5,6,2,7,8,9,10])).then(({buildSunVector:y})=>{if(A||!T.sunVectorVisible||T.sunVector)return;const w=y();T.sunVector=w,T.sunVectorRoot.add(w.root),w.update(T.center,T.directionToSun,T.sunVectorLengthMeters),w.root.visible=!0,T.sunVectorRoot.visible=!!h,t.triggerRepaint()}).catch(y=>{A||console.error("Unable to load sun-vector diagnostics",y)})):(T.frame.remove(T.sunVectorRoot),T.sunVector&&(T.sunVectorRoot.remove(T.sunVector.root),T.sunVector.dispose(),T.sunVector=null)),t.triggerRepaint())},updateAtmosphericLutUsage(m){D.useTransmittanceLut===m.useTransmittanceLut&&D.useIrradianceLut===m.useIrradianceLut||(He(),D=m,R=null,h&&(Bt(h),Q()),t.triggerRepaint())},dispose(){var m,y,w,E,ee,U;if(!A){A=!0,Me.dispose(),Uc(),mr(),$e.dispose(),qe&&window.clearTimeout(qe),cr.dispose(),Mn(t),t.off(Se.STYLE_LOAD,zs),t.off(Se.MOVE_START,Os),t.off(Se.MOVE,Xi),t.off(Se.MOVE_END,Ls),t.off(Se.RESIZE,Fs),Lc(),Fc(),Bc(),It=null,dr(null);for(const F of xe(t))(m=F.setShadowSimulationStyle)==null||m.call(F,null),(y=F.setErrorTargetOverride)==null||y.call(F,null);for(const F of pt.values())O.layer.hasRuntime(F.runtime.id)&&O.layer.removeRuntime(F.runtime.id);pt.clear();try{N==null||N()}catch{}N=null,(E=(w=O.layer).setMapStyleProjectionVisible)==null||E.call(w,!0),p(),O.layer.hasRuntime(zt.id)&&O.layer.removeRuntime(zt.id),H&&O.layer.hasRuntime(H.id)&&O.layer.removeRuntime(H.id),L.dispose(),qp(T),(U=(ee=O.layer).setAccumulationController)==null||U.call(ee,null),O.release();try{t.isStyleLoaded()&&t.setLight(l)}catch{}}}}},df=({tiledShadows:t=!1,libreMap:e,shadowAreaMeters:r,terrain:i,mapLibreTerrain:n,terrainQuality:s,location:a,state:o,dateState:c,setDateState:l})=>{const u=G.useRef(null),d=ru(e),p=hu({dateState:c,setDateState:l,location:a,shadowState:o,onFrame:g=>{var x;o.enabled&&((x=u.current)==null||x.updateSolarPosition(pi(g,a)))}}),f=G.useMemo(()=>Nl(i?{...i,geometryProjection:o.terrainGeometryProjection??i.geometryProjection??"ecef"}:void 0,ia(o.shadowQuality),o.terrainErrorTarget),[i,o.shadowQuality,o.terrainErrorTarget,o.terrainGeometryProjection]),h=G.useRef(f);h.current=f;const[v,S]=G.useState(0);return G.useEffect(()=>{if(!e||!o.enabled)return;let g=null,x=null,b=null;const I=()=>{e.off(Se.STYLE_DATA,R),e.off(Se.STYLE_LOAD,R),e.off(Se.IDLE,R)},R=()=>{g||x!==null||b!==null||!e.isStyleLoaded()||(x=requestAnimationFrame(()=>{x=null,b=setTimeout(()=>{b=null,e.isStyleLoaded()&&(I(),g=uf(e,{shadowAreaMeters:r,terrain:h.current,mapLibreTerrain:n,terrainQuality:s}),u.current=g,S(D=>D+1))},0)}))};return e.on(Se.STYLE_DATA,R),e.on(Se.STYLE_LOAD,R),e.on(Se.IDLE,R),R(),()=>{I(),x!==null&&cancelAnimationFrame(x),b!==null&&clearTimeout(b),u.current=null,g==null||g.dispose(),g=null}},[e,r,o.enabled,n,s]),G.useEffect(()=>{var g;(g=u.current)==null||g.updateTerrain(f)},[f,v]),G.useEffect(()=>{var x;if(!o.enabled)return;const g=p.current??c;(x=u.current)==null||x.updateSolarPosition(pi(g,a))},[p,c,a,o.enabled,v]),G.useEffect(()=>{var g;o.enabled&&((g=u.current)==null||g.updateShadowQuality(ia(o.shadowQuality)))},[o.enabled,o.shadowQuality,v]),G.useEffect(()=>{var g;o.enabled&&((g=u.current)==null||g.updateRenderQuality({shadowAdaptiveQuality:o.shadowAdaptiveQuality,shadowBufferLayout:t?o.shadowBufferLayout:void 0,shadowBufferFormat:o.shadowBufferFormat,shadowSunDiscSamples:o.shadowSunDiscSamples,shadowMsaaSamples:o.shadowMsaaSamples,shadowGroundTexelFit:o.shadowGroundTexelFit}))},[o.enabled,t,o.shadowAdaptiveQuality,o.shadowBufferLayout,o.shadowBufferFormat,o.shadowSunDiscSamples,o.shadowMsaaSamples,o.shadowGroundTexelFit,v]),G.useEffect(()=>{var g;o.enabled&&((g=u.current)==null||g.updateMeshErrorTarget(o.meshErrorTarget??null))},[o.enabled,o.meshErrorTarget,v]),G.useEffect(()=>{var g;o.enabled&&((g=u.current)==null||g.updateMeshCacheBudget(o.meshCacheBudgetBytes))},[o.enabled,o.meshCacheBudgetBytes,v]),G.useEffect(()=>{var g;o.enabled&&((g=u.current)==null||g.updateSoftSunShadows(o.softSunShadows??!0))},[o.enabled,o.softSunShadows,v]),G.useEffect(()=>{var g;o.enabled&&((g=u.current)==null||g.updateTimeAnimating((o.isAnimating??!1)||d))},[o.enabled,o.isAnimating,d,v]),G.useEffect(()=>{var g;o.enabled&&((g=u.current)==null||g.updateShadowIntensity(o.shadowIntensity??1))},[o.enabled,o.shadowIntensity,v]),G.useEffect(()=>{var g;o.enabled&&((g=u.current)==null||g.updateMapStyleContentVisibility(o.showMapStyleContent??!0))},[o.enabled,o.showMapStyleContent,v]),G.useEffect(()=>{var g;o.enabled&&((g=u.current)==null||g.updateMapStyleLabelOverlayVisibility((o.showMapStyleContent??!0)&&(o.showMapStyleLabels??!0)))},[o.enabled,o.showMapStyleContent,o.showMapStyleLabels,v]),G.useEffect(()=>{var g;o.enabled&&((g=u.current)==null||g.updateMapStyleElevationVisibility(o.showMapStyleElevationLines??!1,o.showMapStyleElevationLabels??!1))},[o.enabled,o.showMapStyleElevationLines,o.showMapStyleElevationLabels,v]),G.useEffect(()=>{var g;o.enabled&&((g=u.current)==null||g.updateSunDebugVectorVisibility((o.showProjectionDebugView??!1)&&(o.showSunDebugVector??!0)))},[o.enabled,o.showProjectionDebugView,o.showSunDebugVector,v]),G.useEffect(()=>{if(!e)return;const g=o.enabled&&(o.showProjectionDebugView??!1)&&(o.showTileBounds??!0);if(!g)return;const x=new Set,b=()=>{var D;const R=xe(e);for(const A of x)R.includes(A)||x.delete(A);for(const A of R)x.has(A)||((D=A.setTileBoundsVisible)==null||D.call(A,g),x.add(A))};b();const I=No(e,b);return()=>{var R;I();for(const D of xe(e))(R=D.setTileBoundsVisible)==null||R.call(D,!1)}},[e,v,o.enabled,o.showProjectionDebugView,o.showTileBounds]),G.useEffect(()=>{var g;o.enabled&&((g=u.current)==null||g.updateAtmosphericLutUsage({useTransmittanceLut:o.useTransmittanceLut??!0,useIrradianceLut:o.useSkyIrradianceLut??!0}))},[o.enabled,o.useSkyIrradianceLut,o.useTransmittanceLut,v]),G.useEffect(()=>{var g;o.enabled&&((g=u.current)==null||g.updateTerrainColor(o.terrainColor??Do))},[o.enabled,o.terrainColor,v]),G.useEffect(()=>{var g;o.enabled&&((g=u.current)==null||g.updateBuildingAppearance({fullOpacity:o.buildingsFullOpacity??!0,uniformColor:o.buildingColor??Pl,uniformColorMix:je(o.buildingColorMix??Ol,0,1),textureColorCorrection:o.meshTextureColorCorrection??!0,textureSaturation:je(o.meshTextureSaturation??Ll,0,1)}))},[o.buildingColor,o.buildingColorMix,o.buildingsFullOpacity,o.enabled,o.meshTextureSaturation,o.meshTextureColorCorrection,v]),null},hf=t=>({...t,animationMode:Jt.DAY,animationSpeed:4,isAnimating:!1,shadowIntensity:1,meshTextureColorCorrection:!0,showSunDebugVector:!0,showTileBounds:!0,showProjectionDebugView:!1,showDisplaySettings:!1,showMapStyleContent:!0,showMapStyleLabels:!0,showMapStyleElevationLines:!1,showMapStyleElevationLabels:!1,useTransmittanceLut:!0,useSkyIrradianceLut:!0,shadowBufferLayout:void 0,shadowBufferFormat:void 0,shadowSunDiscSamples:void 0,shadowMsaaSamples:void 0,shadowGroundTexelFit:void 0,shadowAdaptiveQuality:void 0}),mf=({location:t,state:e,setState:r,dateState:i,setDateState:n})=>{const s=e.animationMode??Jt.DAY,a=e.animationSpeed??4,o=(c,l)=>n(Jl(i,i.year,Fl(i.year,c,l),t));return z.jsxs(z.Fragment,{children:[z.jsxs("section",{className:"min-w-0",children:[z.jsx("h3",{className:"mb-1.5 text-xs font-medium uppercase tracking-wide text-neutral-500",children:"Datum"}),z.jsxs("div",{className:"grid grid-cols-2 gap-2","data-test-id":"shadow-date-shortcuts",children:[z.jsx("button",{type:"button",className:Sr,onClick:()=>n(eu(i,t)),children:"Heute"}),z.jsx("button",{type:"button",className:Sr,onClick:()=>o(2,21),children:"21. März"}),z.jsx("button",{type:"button",className:Sr,onClick:()=>o(5,21),children:"21. Juni"}),z.jsx("button",{type:"button",className:Sr,onClick:()=>o(11,21),children:"21. Dezember"})]})]}),z.jsxs("section",{children:[z.jsx("h3",{className:"mb-1.5 text-xs font-medium uppercase tracking-wide text-neutral-500",children:"Uhrzeit"}),z.jsx("div",{className:"grid grid-cols-4 gap-2",children:[9,12,15,18].map(c=>z.jsx("button",{type:"button",className:Sr,onClick:()=>n(os(i,{...i,minutes:c*60},t)),children:au(c)},c))})]}),z.jsxs("section",{children:[z.jsx("h3",{className:"mb-1.5 text-xs font-medium uppercase tracking-wide text-neutral-500",children:"Animation"}),z.jsxs("div",{className:"flex flex-wrap items-center gap-x-3 gap-y-2",children:[z.jsx("div",{className:"flex shrink-0 overflow-hidden rounded-md border border-neutral-300",children:[[Jt.DAY,"Tagesverlauf"],[Jt.YEAR,"Jahresverlauf"]].map(([c,l])=>z.jsx("button",{type:"button",className:`${Oo} ${s===c?"bg-amber-50 font-medium text-amber-700":"bg-white"}`,"aria-pressed":s===c,onClick:()=>{const u=c;r({...e,animationMode:u,isAnimating:s===u?!e.isAnimating:!0})},children:l},c))}),z.jsx(lu,{value:a,onChange:c=>r({...e,animationSpeed:c})})]})]})]})},pf=({location:t,state:e,setState:r,dateState:i,setDateState:n})=>{const s=e.shadowIntensity??1,a=G.useMemo(()=>pi(i,t),[i,t]);return z.jsxs("div",{className:"w-full","data-test-id":"shadow-simulation-secondary-panel",children:[z.jsxs("div",{className:"mb-2 flex flex-wrap items-center justify-between gap-x-4 gap-y-2",children:[z.jsxs("span",{className:"whitespace-nowrap text-sm tabular-nums text-neutral-500",children:["Höhe ",a.elevationDegrees.toFixed(0),"° · Azimut"," ",a.azimuthDegrees.toFixed(0),"°"]}),z.jsx("div",{className:"flex items-center gap-5 text-sm text-neutral-600",children:z.jsxs("button",{type:"button",className:"flex items-center gap-2 whitespace-nowrap hover:text-amber-700",onClick:()=>{r(hf(e)),n(tu(i,t))},children:[z.jsx(Ln,{icon:kl}),"Zurücksetzen"]})})]}),z.jsxs("div",{className:"grid grid-cols-1 gap-x-8 gap-y-4 lg:grid-cols-2",children:[z.jsx(mf,{location:t,state:e,setState:r,dateState:i,setDateState:n}),z.jsxs("section",{className:"min-w-0",children:[z.jsxs("h3",{className:"mb-1.5 flex items-center gap-1 text-xs font-medium uppercase tracking-wide text-neutral-500",children:["Darstellung",z.jsx("button",{type:"button",className:"inline-flex items-center justify-center p-1 text-neutral-700 hover:text-amber-700","aria-label":"Darstellungseinstellungen",title:"Darstellungseinstellungen","aria-expanded":e.showDisplaySettings??!1,onClick:()=>r({...e,showDisplaySettings:!e.showDisplaySettings}),"data-test-id":"shadow-simulation-display-settings",children:z.jsx(Ln,{icon:Wl})})]}),z.jsxs("label",{className:"grid grid-cols-[110px_minmax(0,1fr)_42px] items-center gap-3 text-sm text-neutral-700",children:[z.jsx("span",{children:"Intensität"}),z.jsx("input",{type:"range",min:0,max:1,step:.01,value:s,onChange:o=>r({...e,shadowIntensity:Number(o.currentTarget.value)}),className:"shadow-simulation-range min-w-0 cursor-pointer",style:ou(s,0,1),"aria-label":"Schattenintensität","data-test-id":"shadow-simulation-intensity"}),z.jsxs("span",{className:"text-right tabular-nums",children:[Math.round(s*100),"%"]})]})]})]})]})},ff=G.lazy(()=>Br(()=>import("./ShadowProjectionDebugView-VkE8yPjC.js"),__vite__mapDeps([12,3,1,4,5,6,2,7,8,9,10,13])).then(t=>({default:t.ShadowProjectionDebugView}))),gf=G.lazy(()=>Br(()=>import("./ShadowSimulationDisplaySettingsPanel-BzCatQRg.js"),__vite__mapDeps([14,3,1,4,5,6,2,7,8,9,10])).then(t=>({default:t.ShadowSimulationDisplaySettingsPanel}))),vf=G.lazy(()=>Br(()=>import("./ShadowSimulationCurveSettings-BX5R2cmD.js"),__vite__mapDeps([15,3,1,4,5,6,2,7,8,9,10])).then(t=>({default:t.ShadowSimulationCurveSettings}))),Sf="#1677ff",Bf=({config:t,debugEnabled:e=!0,libreMap:r,targeted:i,sharedState:n,setSharedState:s,sharedDateState:a,setSharedDateState:o})=>{var O,oe;const{year:c,initialDayOfYear:l,initialMinutes:u,latitude:d=sa.latitude,longitude:p=sa.longitude,timeZone:f=zl,shadowAreaMeters:h,terrain:v,terrainSources:S,mapLibreTerrain:g,controlPosition:x="topleft",controlOrder:b=70,experimentalTiledShadows:I=!1}=t??{},R=su(r,d,p),D=G.useMemo(()=>Bl({terrain:v,terrainSources:S}),[v,S]),A=G.useMemo(()=>a??Hl({year:c,initialDayOfYear:l,initialMinutes:u,timeZone:f},R),[a,l,u,R,f,c]),M=n??D,B=G.useMemo(()=>e?M:{...M,showProjectionDebugView:!1,showTileDiagnostics:!1},[e,M]),N=a??A,j=G.useMemo(()=>S??(v?[{label:v.id,terrain:v}]:void 0),[v,S]),K=((O=j==null?void 0:j.find(({terrain:C})=>C.id===M.terrainSourceId))==null?void 0:O.terrain)??((oe=j==null?void 0:j[0])==null?void 0:oe.terrain);return G.useEffect(()=>{n||s(D)},[D,s,n]),G.useEffect(()=>{a||o(A)},[A,o,a]),i?z.jsx(pf,{location:R,state:M,setState:s,dateState:N,setDateState:o}):z.jsxs(z.Fragment,{children:[r&&z.jsx(Ul,{position:x,order:b,children:z.jsx(Vc,{title:M.enabled?"Schattensimulation ausschalten":"Schattensimulation einschalten",placement:"right",children:z.jsx(Gl,{onClick:()=>s({...M,enabled:!M.enabled}),dataTestId:"shadow-simulation-control-button","aria-label":M.enabled?"Schattensimulation ausschalten":"Schattensimulation einschalten","aria-pressed":M.enabled,children:z.jsx(Ln,{icon:Vl,style:M.enabled?{color:Sf}:void 0})})})}),z.jsx(df,{tiledShadows:I,libreMap:r,shadowAreaMeters:h,terrain:K,mapLibreTerrain:g,terrainQuality:M.terrainQuality,location:R,state:B,dateState:N,setDateState:o}),M.controlStyle===na.CURVE&&z.jsx(G.Suspense,{fallback:null,children:z.jsx(vf,{location:R,dateState:N,setDateState:o,onClose:()=>s({...M,controlStyle:na.QUICK})})}),M.showDisplaySettings&&z.jsx(G.Suspense,{fallback:null,children:z.jsx(gf,{tiledShadows:I,debugEnabled:e,state:M,setState:s,terrainSources:j,map:r})}),e&&M.enabled&&M.showProjectionDebugView&&r&&z.jsx(G.Suspense,{fallback:null,children:z.jsx(ff,{map:r,solarPosition:pi(N,R),settings:{showSunDebugVector:M.showSunDebugVector??!0,showTileBounds:M.showTileBounds??!0},onSettingsChange:C=>s({...M,...C}),onClose:()=>s({...M,showProjectionDebugView:!1})})})]})};export{If as M,Pr as S,Af as a,su as b,ou as c,os as d,lu as e,da as f,Ql as g,Bf as h,Of as i,Pf as j,Cf as k,Mf as l,Qn as m,Ff as n,Lf as p,pa as r,Zl as s,hu as u};
