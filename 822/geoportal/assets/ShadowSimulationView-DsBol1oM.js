const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/shadow-projection-debug-publisher-N3qGz6sv.js","assets/vendor-react-core-DEDd919A.js","assets/vendor-ui-DQOUGosH.js","assets/index-D3tzdhRL.js","assets/vendor-ui-icons-CLargI07.js","assets/vendor-cismap-D3REM11k.js","assets/vendor-leaflet-BbYkptA6.js","assets/vendor-cismap-BxSQKlIf.css","assets/vendor-cesium-COY8x_Hs.js","assets/vendor-maplibre-ojH_DVgs.js","assets/index-DR62Y55n.css","assets/shadow-sun-vector-DzcaYs6_.js","assets/ShadowProjectionDebugView-3dJ0MAps.js","assets/ViewStateVisualizer-bmIbESHY.js","assets/ShadowSimulationDisplaySettingsPanel-CmXNJ7xL.js","assets/ShadowSimulationCurveSettings-DvVTZpOc.js"])))=>i.map(i=>d[i]);
import{r as k,d as Kc}from"./vendor-react-core-DEDd919A.js";import{O as Xc,d as $c}from"./vendor-ui-DQOUGosH.js";import{b as Nr,ab as Ii,ac as er,ad as Lr,ae as Qc,af as vo,c as Hr,ag as es,ah as ie,ai as ke,aj as Ge,ak as wt,al as Fr,am as De,an as nr,ao as Ut,a1 as yo,X as So,_ as Zc,a3 as ts,a4 as tr,h as Jc,ap as wo,aq as xe,ar as $t,as as Qt,I as z,at as kr,au as Q,av as ut,V as _,aw as el,d as Ne,ax as xo,ay as tl,az as rl,aA as _o,aB as I,aC as Di,aD as To,O as rs,aE as Mo,aF as $s,k as is,aG as il,aH as Nn,aI as Qs,aJ as ns,aK as nl,aL as sl,aM as Zs,aN as al,aO as ol,aP as cl,aQ as bo,aR as It,aS as ll,aT as Ro,J as Js,aU as je,aV as ul,D as Eo,aW as dl,j as hl,aX as rn,aY as ml,aZ as fl,a_ as gi,a$ as Ao,b0 as Zt,b1 as pl,b2 as Ln,b3 as ss,b4 as Co,b5 as gl,b6 as vl,b7 as rr,b8 as yl,b9 as Sl,ba as ea,bb as wl,bc as xl,bd as Ct,be as as,bf as zr,bg as Si,G as os,aa as He,bh as ii,bi as _l,bj as Io,bk as Tl,bl as Ml,bm as nn,bn as ta,bo as bl,bp as Do,w as Rl,bq as be,br as sn,bs as an,bt as El,bu as Po,bv as Al,bw as Cl,bx as on,by as Il,bz as Dl,bA as Pl,bB as cn,bC as ra,bD as xr,bE as Ol,bF as Nl,bG as Ll,bH as Fl,t as wi,bI as Bl,bJ as ia,bK as Ul,bL as Hl,bM as kl,a0 as zl,bN as Vl,bO as Wl,bP as Gl,bQ as jl,bR as na,a6 as sa,a8 as Yl}from"./index-D3tzdhRL.js";import{F as Fn,bd as ql,bj as Kl,z as Xl}from"./vendor-ui-icons-CLargI07.js";import{a as $l}from"./vendor-maplibre-ojH_DVgs.js";import"./vendor-cismap-D3REM11k.js";import"./vendor-leaflet-BbYkptA6.js";const aa=20;class Ql{constructor(e,r=256*1024**2){this.renderer=e,this.maximumBytes=r,this.quad.frustumCulled=!1,this.scene.add(this.quad)}target=null;key=null;broken=!1;captures=0;reuses=0;scene=new Nr;camera=new Ii;material=new er({glslVersion:Lr,uniforms:{color:{value:null},depth:{value:null}},vertexShader:`out vec2 uvCopy;
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
      }`,depthTest:!0,depthFunc:Qc,depthWrite:!0,transparent:!0,blending:vo});quad=new Hr(new es(2,2),this.material);get stats(){return{captures:this.captures,reuses:this.reuses,bytes:this.target?this.target.width*this.target.height*aa:0,broken:this.broken}}invalidate(){this.key=null}render(e,r,i,n){var y,g;const s=this.renderer;if(this.broken||!Number.isInteger(r)||!Number.isInteger(i)||r<1||i<1||r>s.capabilities.maxTextureSize||i>s.capabilities.maxTextureSize||r*i*aa>this.maximumBytes||!s.extensions.has("EXT_color_buffer_float"))return this.releaseTarget(),n(),!1;const a=s.getRenderTarget(),o=s.getActiveCubeFace(),c=s.getActiveMipmapLevel(),l=s.getViewport(new ie),u=s.getScissor(new ie),d=s.getScissorTest(),f=s.getClearColor(new ke),p=s.getClearAlpha(),h=s.autoClear,v=()=>{s.setRenderTarget(a,o,c),s.setViewport(l),s.setScissor(u),s.setScissorTest(d),s.setClearColor(f,p),s.autoClear=h};try{if(((y=this.target)==null?void 0:y.width)!==r||((g=this.target)==null?void 0:g.height)!==i){this.releaseTarget(),this.target=new Ge(r,i,{type:wt,format:Fr,minFilter:De,magFilter:De,depthTexture:new nr(r,i,Ut),samples:0});try{s.initRenderTarget(this.target)}catch{return this.broken=!0,this.releaseTarget(),v(),n(),!1}}const T=JSON.stringify([e,r,i,s.outputColorSpace,s.toneMapping,s.toneMappingExposure,a==null?void 0:a.texture.colorSpace]);return s.autoClear=!1,this.key!==T?(this.key=null,s.setRenderTarget(this.target),s.setViewport(new ie(0,0,r,i)),s.setScissorTest(!1),s.setClearColor(0,0),s.clear(!0,!0,!1),n(),this.key=T,this.captures+=1):this.reuses+=1,v(),s.autoClear=!1,this.material.uniforms.color.value=this.target.texture,this.material.uniforms.depth.value=this.target.depthTexture,s.render(this.scene,this.camera),!0}catch(T){throw this.invalidate(),T}finally{v()}}releaseTarget(){var e,r,i;(r=(e=this.target)==null?void 0:e.depthTexture)==null||r.dispose(),(i=this.target)==null||i.dispose(),this.target=null,this.key=null}dispose(){this.releaseTarget(),this.broken=!0,this.material.dispose(),this.quad.geometry.dispose()}}const oa=(t,e,r,i,n)=>{const s=i+e,a=Math.floor(s),o=s-a;if(a===0)return{dateState:t,yearDayProgress:o};const c=n?{year:t.year,dayOfYear:(t.dayOfYear-1+a)%yo(t.year)+1}:Zc(t,a);return{dateState:(n?{...t,...c}:ts({...t,...c},r))??t,yearDayProgress:o}},ca=(t,e,r,i,n)=>{if(!n)return{dateState:{...t,minutes:(t.minutes+e)%1440},yearDayProgress:0};const s=So(t,r),a=Math.ceil(s.sunriseMinutes),o=Math.floor(s.sunsetMinutes),l=(i&&(t.minutes<a||t.minutes>o)?a:t.minutes)+e;return{dateState:{...t,minutes:l>o?a+(i?(l-a)%Math.max(1,o-a):0):l},yearDayProgress:0}},Zl=(t,e,r,i,n,s={})=>{const a=e??r;if(!(t!=null&&t.enabled)||!t.isAnimating)return{dateState:a,yearDayProgress:n};const o=s.elapsedMs!==void 0,c=(t.animationMode??tr.DAY)===tr.YEAR,l=t.animationDaylightOnly!==!1,u=t.animationCycleSeconds;if(o&&u!==void 0&&u>0){const f=Math.max(0,s.elapsedMs??0)/(u*1e3);if(c)return oa(a,f*yo(a.year),i,n,!0);const p=So(a,i),h=l?Math.max(1,p.sunsetMinutes-p.sunriseMinutes):1440;return ca(a,f*h,i,!0,l)}const d=(t.animationSpeed??4)*(o?Math.max(0,s.elapsedMs??0)*60/1e3:1);return c?oa(a,d/(o?4:2),i,n,o):ca(a,d,i,o,l)},ni=3,Jl=.5,ot=64,la=.01,ua=(t,e,r)=>Math.min(r**2,Math.max(ot**2,Math.floor(t!==void 0&&Number.isFinite(t)&&t>0?t:e))),da=(t,e)=>{const{mapSize:r,maxMapSize:i,elevationSine:n,sunDiscGuardMeters:s,groundTexelFit:a}=e,o=t.right-t.left+2*s,c=t.top-t.bottom+2*s,l=Math.max(la,Math.abs(n)),d=2*(a?ni+Jl:ni);let f=r,p=r,h=!1,v=!1;const y=e.groundTexelTargetMeters;if(y!==void 0&&(!Number.isFinite(y)||y<=0))throw new RangeError("Shadow ground texel target must be positive and finite");if(y!==void 0){const j=oe=>Math.max(ot,2**Math.ceil(Math.log2(oe))),K=j(o/y+d),N=j(c/(y*l)+d);f=Math.min(i,K),p=Math.min(i,N),h=f<K||p<N}else if(a){const j=o*l/c,K=e.mapTexelBudget??r*r,N=d*(j+1),oe=K-d*d,D=2*oe/(N+Math.sqrt(N**2+4*j*oe)),V=j*D+d,X=D+d;h=V>i||X>i;const Y=Math.max(o,c)/(r-d),de=Math.min(r,Math.max(ot,Math.ceil((o/Y+d)/ot)*ot)),ce=Math.min(r,Math.max(ot,Math.ceil((c/Y+d)/ot)*ot));v=V<de||X<ce;const Te=Math.min(Math.max(V,de,K/i),i,K/ce),L=Z=>Math.floor(Z/ot+1e-9)*ot;f=Math.max(de,L(Te)),p=Math.max(ce,L(Math.min(i,K/f)))}const g=e.mapDimensions;g&&(v||(v=f!==g.width||p!==g.height),f=g.width,p=g.height);const T=o/Math.max(1,f-d),R=c/Math.max(1,p-d),C=Math.max(T,R,Number.EPSILON),b=a?T:C,P=a?R:C,A=Math.round((t.left+t.right)/2/b)*b,E=Math.round((t.bottom+t.top)/2/P)*P,B=b*f,O=P*p;return{left:A-B/2,right:A+B/2,bottom:E-O/2,top:E+O/2,mapWidth:f,mapHeight:p,metersPerTexelX:b,metersPerTexelY:P,guardMetersX:b*ni,guardMetersY:P*ni,groundTexelWidthMeters:b,groundTexelHeightMeters:Math.abs(n)>Number.EPSILON?P/Math.abs(n):1/0,groundTexelFitLimited:a&&(h||v||Math.abs(n)<la)}},eu=(t,e,r)=>{if(r<=0)return{planarMeters:0,depthMeters:0};const i=Math.sqrt(Math.max(0,1-e**2)),n=i>Math.sin(r)?Math.asin(Math.sin(r)/i):Math.PI;return{planarMeters:2*t*Math.sin(Math.min(Math.PI,n+r)/2),depthMeters:2*t*Math.sin(r/2)}},Br=Jc(.53/2),tu=Math.PI*(3-Math.sqrt(5)),ru=(t,e)=>{const r=Math.max(1,Math.floor(e)),i=(Math.floor(t)%r+r)%r,n=Br*Math.sqrt((i+.5)/r),s=i*tu;return{angularRadius:n,tangentA:Math.cos(s)*n,tangentB:Math.sin(s)*n}},iu=t=>{const e=Math.floor(t/2)+1,r=t%2===0?1:-1;return[r*(e*.7548776662466927%1-.5),r*(e*.5698402909980532%1-.5)]},cs=(t,e,r)=>ts(e,r)??t,nu=(t,e,r,i)=>cs(t,{...t,year:e,dayOfYear:r},i),su=(t,e,r=new Date)=>{const i=wo(r,t.timeZone);return cs(t,{...i,minutes:t.minutes},e)},au=(t,e,r=new Date)=>{const i=wo(r,t.timeZone);return ts(i,e)??t},Bn=new WeakMap,Oo=t=>{let e=Bn.get(t);return e||(e={owners:new Set,listeners:new Set},Bn.set(t,e)),e},sg=t=>{const e=k.useMemo(()=>Symbol("shadow-time-control"),[t]),r=k.useCallback(i=>{if(!t)return;const n=Oo(t),s=n.owners.size>0;i?n.owners.add(e):n.owners.delete(e),s!==n.owners.size>0&&n.listeners.forEach(a=>a())},[t,e]);return k.useEffect(()=>()=>r(!1),[r]),r},ou=t=>{const e=k.useCallback(i=>{if(!t)return()=>{};const{listeners:n}=Oo(t);return n.add(i),()=>{n.delete(i)}},[t]),r=k.useCallback(()=>{var i;return t!==null&&(((i=Bn.get(t))==null?void 0:i.owners.size)??0)>0},[t]);return k.useSyncExternalStore(e,r,()=>!1)},cu=(t,e)=>({latitude:(t==null?void 0:t.latitude)??e.latitude,longitude:(t==null?void 0:t.longitude)??e.longitude}),lu=(t,e)=>t.latitude===e.latitude&&t.longitude===e.longitude,ha=(t,e,r)=>{const i=t==null?void 0:t.getCenter();return cu(i?{latitude:i.lat,longitude:i.lng}:null,{latitude:e,longitude:r})},uu=(t,e,r)=>{const[i,n]=k.useState(()=>ha(t,e,r));return k.useEffect(()=>{const s=()=>{const a=ha(t,e,r);n(o=>lu(o,a)?o:a)};if(s(),!!t)return t.on(xe.MOVE_END,s),()=>{t.off(xe.MOVE_END,s)}},[e,r,t]),i},_r="flex h-9 min-w-0 items-center justify-center whitespace-nowrap rounded-md border border-neutral-300 bg-white px-1 text-center text-sm text-neutral-800 transition-colors hover:border-amber-500 hover:text-amber-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/40",No="h-8 whitespace-nowrap border-r border-neutral-300 px-3 text-sm text-neutral-700 transition-colors last:border-r-0 hover:text-amber-700",ag=[{label:"120 FPS",value:$t.FPS_120},{label:"60 FPS",value:$t.FPS_60},{label:"30 FPS",value:$t.FPS_30},{label:"Ultra",value:$t.ULTRA}],og=[{label:"0,25 px",value:.25},{label:"0,5 px",value:.5},{label:"1 px",value:1},{label:"2 px",value:2},{label:"4 px",value:4}],cg=[{value:Qt.HDR_16,label:"HDR · 16 Bit (Experiment)"},{value:Qt.HDR_16_32,label:"HDR · 16/32 Bit (Standard)"},{value:Qt.HDR_32,label:"HDR · 32 Bit (ohne MSAA)"},{value:Qt.SDR_8,label:"SDR · 8 Bit (Experiment)"}],du=t=>`${String(t).padStart(2,"0")}:00`,hu=(t,e,r)=>({"--shadow-range-progress":`${r>e?Math.max(0,Math.min(100,(t-e)/(r-e)*100)):0}%`});var mu={exports:{}};(function(t,e){(function(r,i){t.exports=i(Xc)})(Kc,function(r){function i(c){return c&&typeof c=="object"&&"default"in c?c:{default:c}}var n=i(r),s={s:"ein paar Sekunden",m:["eine Minute","einer Minute"],mm:"%d Minuten",h:["eine Stunde","einer Stunde"],hh:"%d Stunden",d:["ein Tag","einem Tag"],dd:["%d Tage","%d Tagen"],M:["ein Monat","einem Monat"],MM:["%d Monate","%d Monaten"],y:["ein Jahr","einem Jahr"],yy:["%d Jahre","%d Jahren"]};function a(c,l,u){var d=s[u];return Array.isArray(d)&&(d=d[l?0:1]),d.replace("%d",c)}var o={name:"de",weekdays:"Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),weekdaysShort:"So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),weekdaysMin:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),months:"Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sept._Okt._Nov._Dez.".split("_"),ordinal:function(c){return c+"."},weekStart:1,yearStart:4,formats:{LTS:"HH:mm:ss",LT:"HH:mm",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY HH:mm",LLLL:"dddd, D. MMMM YYYY HH:mm"},relativeTime:{future:"in %s",past:"vor %s",s:a,m:a,mm:a,h:a,hh:a,d:a,dd:a,M:a,MM:a,y:a,yy:a}};return n.default.locale(o,null,!0),o})})(mu);const fu=({value:t,onChange:e})=>z.jsx("div",{role:"group","aria-label":"Animationsgeschwindigkeit",className:"flex shrink-0 overflow-hidden rounded-md border border-neutral-300",children:[1,4,12].map(r=>z.jsxs("button",{type:"button",className:`${No} px-3 ${t===r?"bg-amber-50 font-medium text-amber-700":"bg-white"}`,"aria-pressed":t===r,onClick:()=>e(r),children:[r,"×"]},r))}),pu=1e3/30,gu=250,vu=({dateState:t,setDateState:e,location:r,shadowState:i,onFrame:n,realtime:s=!1})=>{const a=k.useRef(null),o=k.useRef(null),c=k.useRef(t),l=k.useRef(t),u=k.useRef(e),d=k.useRef(n);l.current=t,u.current=e,d.current=n;const{animationMode:f,animationSpeed:p,animationCycleSeconds:h,animationDaylightOnly:v,enabled:y,isAnimating:g}=i,T=y&&(g??!1);return k.useEffect(()=>{const R=t!==c.current;if(c.current=t,!!R){if(t===o.current){T||(a.current=null);return}a.current=null}},[T,t]),k.useEffect(()=>{if(!T)return;const R={animationMode:f,animationSpeed:p,animationCycleSeconds:h,animationDaylightOnly:v,enabled:y,isAnimating:g};let C=0,b=performance.now(),P=b;const A=K=>{o.current=K,u.current(K)},E=K=>{const N=a.current??l.current,oe=Zl(R,N,N,r,C,s?{elapsedMs:K-P}:void 0);P=K,C=oe.yearDayProgress,a.current=oe.dateState,d.current(oe.dateState),K-b>=gu&&(b=K,A(oe.dateState))};let B=0;const O=K=>{E(K),B=requestAnimationFrame(O)},j=s?void 0:window.setInterval(()=>E(performance.now()),pu);return s&&(B=requestAnimationFrame(O)),()=>{j!==void 0&&window.clearInterval(j),s&&cancelAnimationFrame(B);const K=a.current;K&&K!==o.current&&A(K)}},[T,f,p,h,v,y,g,r,s]),a},ma=new WeakMap,fa=(t,e,r,i,n="shadow-and-color")=>{const s=()=>r.render(t,i);if(e===void 0)return s(),!0;const a=t.getObjectById(e);if(!a)return!1;let o=ma.get(a);if(!o){const l=new Set;a.traverse(u=>l.add(u)),ma.set(a,l),o=l}if(n==="color-only"){const l=new Set;for(let d=a.parent;d;d=d.parent)l.add(d);const u=[];t.traverse(d=>{d.isMesh&&d.visible&&!o.has(d)&&!l.has(d)&&(u.push(d),d.visible=!1)});try{return s(),!0}finally{for(const d of u)d.visible=!0}}const c=r.renderBufferDirect;r.renderBufferDirect=function(...l){const[u,,,,d]=l;u===i&&d.isMesh&&!o.has(d)||c.apply(this,l)};try{return s(),!0}finally{r.renderBufferDirect=c}},pa=[[0,1],[1,3],[3,2],[2,0],[4,5],[5,7],[7,6],[6,4],[0,4],[1,5],[2,6],[3,7]],yu=({min:t,max:e})=>[new _(t.x,t.y,t.z),new _(e.x,t.y,t.z),new _(t.x,e.y,t.z),new _(e.x,e.y,t.z),new _(t.x,t.y,e.z),new _(e.x,t.y,e.z),new _(t.x,e.y,e.z),new _(e.x,e.y,e.z)],Su=t=>[t.coordinateSystem===el?0:-1,1].flatMap(r=>[-1,1].flatMap(i=>[-1,1].map(n=>new _(n,i,r).unproject(t)))),ln=(t,e,r)=>t.every(i=>i.distanceToPoint(e)>=-r),ga=(t,e,r)=>e.x>=t.min.x-r&&e.x<=t.max.x+r&&e.y>=t.min.y-r&&e.y<=t.max.y+r&&e.z>=t.min.z-r&&e.z<=t.max.z+r,Un=(t,e,r)=>{t.some(i=>i.distanceToSquared(e)<=r)||t.push(e)},va=(t,e,r,i,n,s)=>{const a=e.clone().sub(t);for(const o of r){const c=o.distanceToPoint(t),l=o.distanceToPoint(e),u=c-l;if(Math.abs(u)<=Number.EPSILON)continue;const d=c/u;if(d<0||d>1)continue;const f=t.clone().addScaledVector(a,d);i(f)&&Un(n,f,s)}},Lo=(t,e,r=1e-6)=>{if(e.isEmpty())return[];t.updateMatrixWorld(!0);const i=new kr().setFromProjectionMatrix(new Q().multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),t.coordinateSystem,t.reversedDepth);if(!i.intersectsBox(e))return[];const n=r*r,s=yu(e),a=Su(t),o=[];for(const l of s)ln(i.planes,l,r)&&Un(o,l,n);for(const l of a)ga(e,l,r)&&Un(o,l,n);for(const[l,u]of pa)va(s[l],s[u],i.planes,d=>ln(i.planes,d,r),o,n);const c=[new ut(new _(1,0,0),-e.min.x),new ut(new _(-1,0,0),e.max.x),new ut(new _(0,1,0),-e.min.y),new ut(new _(0,-1,0),e.max.y),new ut(new _(0,0,1),-e.min.z),new ut(new _(0,0,-1),e.max.z)];for(const[l,u]of pa)va(a[l],a[u],c,d=>ga(e,d,r)&&ln(i.planes,d,r),o,n);return o},Fo=(t,e)=>{const r=Vr(t).map(o=>new ie(o.x,o.y,o.z,1).applyMatrix4(e));if(r.some(o=>o.w<=0))return new ie(0,0,1,1);const i=Math.max(0,(Math.min(...r.map(o=>o.x/o.w))+1)/2),n=Math.max(0,(Math.min(...r.map(o=>o.y/o.w))+1)/2),s=Math.min(1,(Math.max(...r.map(o=>o.x/o.w))+1)/2),a=Math.min(1,(Math.max(...r.map(o=>o.y/o.w))+1)/2);return new ie(i,n,Math.max(0,s-i),Math.max(0,a-n))},Vr=t=>[t.min.x,t.max.x].flatMap(e=>[t.min.y,t.max.y].flatMap(r=>[t.min.z,t.max.z].map(i=>new _(e,r,i)))),Bo=(t,e,r)=>{const i=e.elements,n=Vr(t).map(o=>new ie(o.x,o.y,o.z,1).applyMatrix4(e)),s=Math.min(...n.map(o=>o.w));if(s<=0)return 1/0;let a=0;for(const[o,c]of[[0,r.x],[1,r.y]])for(let l=0;l<3;l+=1){const u=Math.max(...n.map(d=>Math.abs(i[l*4+o]*d.w-(o===0?d.x:d.y)*i[l*4+3])));a+=(c*.5*u/(s*s))**2}return Math.sqrt(a)},wu=(t,e,r,i)=>{if(!(i>0&&Number.isFinite(i))||!(r.x>0&&r.y>0))throw new RangeError("Shadow page projection requires a positive pixel target and viewport");const n=new Q().multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),s=new Set;for(const{id:o,bounds:c}of t){if(s.has(o)||c.isEmpty()||![...c.min.toArray(),...c.max.toArray()].every(Number.isFinite))throw new RangeError("Receiver cells require unique IDs and finite, nonempty bounds");s.add(o)}const a=new kr().setFromProjectionMatrix(n);return t.filter(({bounds:o})=>a.intersectsBox(o)).map(o=>({...o,screenBounds:Fo(o.bounds,n),groundTexelTargetMeters:Math.max(1e-9,i/Bo(o.bounds,n,r))}))},xu=(t,e,r,i,n)=>t.clone().union(t.clone().translate(e.clone().normalize().multiplyScalar(r))).expandByScalar(2*r*Math.sin(i/2)+n),_u=(t,e)=>t.flatMap(({bounds:r})=>Lo(e,r).length>0?Vr(r):[]),si={WEST:"west",EAST:"east",SOUTH:"south",NORTH:"north"},Tr=({bounds:t})=>(t.max.x-t.min.x)*(t.max.z-t.min.z),Tu=(t,e)=>t.min.z===e.min.z&&t.max.z===e.max.z&&(t.max.x===e.min.x||e.max.x===t.min.x)||t.min.x===e.min.x&&t.max.x===e.max.x&&(t.max.z===e.min.z||e.max.z===t.min.z),Mu=t=>{const e=new Map(t.map(i=>[i.id,i]));let r=!0;for(;r;){r=!1;for(const i of e.values()){if(Math.min(i.bounds.max.x-i.bounds.min.x,i.bounds.max.z-i.bounds.min.z)>=i.fragmentMergeWidthMeters)continue;const s=Tr(i),a=[...e.values()].filter(o=>o!==i&&(Tr(o)>s||Tr(o)===s&&o.id<i.id)&&Tu(i.bounds,o.bounds)).sort((o,c)=>Tr(c)-Tr(o)||(o.id<c.id?-1:o.id>c.id?1:0))[0];if(a){e.set(a.id,{...a,bounds:a.bounds.clone().union(i.bounds)}),e.delete(i.id),r=!0;break}}}return[...e.values()].map(({id:i,bounds:n})=>({id:i,bounds:n}))},un=t=>({west:t.min.x,east:t.max.x,south:t.min.z,north:t.max.z}),Uo=(t,e)=>t.west<e.east&&t.east>e.west&&t.south<e.north&&t.north>e.south,bu=(t,e,r)=>{if(!Uo(t,e))return[t];const i=Math.max(t.west,e.west),n=Math.min(t.east,e.east),s=Math.max(t.south,e.south),a=Math.min(t.north,e.north);return[{...t,east:i,side:si.WEST},{...t,west:n,side:si.EAST},{west:i,east:n,south:t.south,north:s,side:si.SOUTH},{west:i,east:n,south:a,north:t.north,side:si.NORTH}].filter(o=>o.west<o.east&&o.south<o.north).map(({side:o,...c})=>({...c,splitPath:[...t.splitPath,r,o]}))},Ru=t=>{const e=new Set;for(const{id:n,bounds:s}of t){if(e.has(n)||s.isEmpty()||![...s.min.toArray(),...s.max.toArray()].every(Number.isFinite))throw new RangeError("Receiver tiles require unique IDs and finite bounds");e.add(n)}const r=[...t].sort((n,s)=>n.id<s.id?-1:n.id>s.id?1:0);if(r.every(({receiverObjectId:n})=>n!==void 0))return r;const i=r.flatMap(({id:n,bounds:s},a)=>{const o=un(s);return o.west===o.east||o.south===o.north?[]:r.slice(0,a).reduce((l,u)=>l.flatMap(d=>bu(d,un(u.bounds),u.id)),[{...o,splitPath:[]}]).map(l=>{const u=r.reduce((d,f)=>Uo(l,un(f.bounds))?[Math.min(d[0],f.bounds.min.y),Math.max(d[1],f.bounds.max.y)]:d,[s.min.y,s.max.y]);return{fragmentMergeWidthMeters:l.splitPath.length===0?0:Math.max(.1,.01*Math.min(o.east-o.west,o.north-o.south)),id:l.splitPath.length===0?n:JSON.stringify([n,...l.splitPath]),bounds:new Ne(new _(l.west,u[0],l.south),new _(l.east,u[1],l.north))}})});return Mu(i)},Eu=(t,e=16)=>{if(!Number.isInteger(e)||e<=0||t.length===0)return[];const i=t.reduce((c,l)=>c.union(l.bounds),new Ne).getCenter(new _),n=new Set(t.map(({id:c})=>c)),s=new Map;for(const c of t){const l=c.bounds.max.x-c.bounds.min.x;if(!(l>0&&Number.isFinite(l)))continue;const u=Math.round(c.bounds.min.x/l),d=Math.round(c.bounds.min.z/l);for(let f=-1;f<=1;f+=1)for(let p=-1;p<=1;p+=1){const h=`${l}:${u+f}:${d+p}`;n.has(h)||s.has(h)||s.set(h,{id:h,bounds:c.bounds.clone().translate(new _(f*l,0,p*l))})}}const a=Array.from({length:8},()=>[]);for(const c of s.values()){const l=c.bounds.getCenter(new _).sub(i),u=(Math.round(Math.atan2(l.z,l.x)/(Math.PI/4))+8)%8;a[u].push(c)}for(const c of a)c.sort((l,u)=>l.bounds.distanceToPoint(i)-u.bounds.distanceToPoint(i)||l.id.localeCompare(u.id));const o=[];for(let c=0;o.length<e;c+=1){const l=a.flatMap(u=>u[c]?[u[c]]:[]);if(l.length===0)break;o.push(...l.slice(0,e-o.length))}return o},Au=(t,e)=>{const r=t.getCenter(new _);let i=null,n=1/0;for(const s of e){const a=s.receiverBounds.distanceToPoint(r);a<n&&Number.isInteger(s.terrainLevel)&&(n=a,i=s.terrainLevel)}return i};/**
 * postprocessing v6.39.4 build Mon Jul 27 2026
 * https://github.com/pmndrs/postprocessing
 * Copyright 2015-2026 Raoul van Rüschen
 * @license Zlib
 */var Cu=(()=>{const t=new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),e=new Float32Array([0,0,2,0,0,2]),r=new Mo;return r.setAttribute("position",new $s(t,3)),r.setAttribute("uv",new $s(e,2)),r})(),Iu=class Hn{static get fullscreenGeometry(){return Cu}constructor(e="Pass",r=new Nr,i=new rs){this.name=e,this.renderer=null,this.scene=r,this.camera=i,this.screen=null,this.rtt=!0,this.needsSwap=!0,this.needsDepthBlit=!1,this.needsDepthTexture=!1,this.enabled=!0}get renderToScreen(){return!this.rtt}set renderToScreen(e){if(this.rtt===e){const r=this.fullscreenMaterial;r!==null&&(r.needsUpdate=!0),this.rtt=!e}}set mainScene(e){}set mainCamera(e){}setRenderer(e){this.renderer=e}isEnabled(){return this.enabled}setEnabled(e){this.enabled=e}get fullscreenMaterial(){return this.screen!==null?this.screen.material:null}set fullscreenMaterial(e){let r=this.screen;r!==null?r.material=e:(r=new Hr(Hn.fullscreenGeometry,e),r.frustumCulled=!1,this.scene===null&&(this.scene=new Nr),this.scene.add(r),this.screen=r)}getFullscreenMaterial(){return this.fullscreenMaterial}setFullscreenMaterial(e){this.fullscreenMaterial=e}getDepthTexture(){return null}setDepthTexture(e,r=_o){}render(e,r,i,n,s){throw new Error("Render method not implemented!")}setSize(e,r){}initialize(e,r,i){}dispose(){for(const e of Object.keys(this)){const r=this[e];(r instanceof Ge||r instanceof Di||r instanceof To||r instanceof Hn)&&this[e].dispose()}this.fullscreenMaterial!==null&&this.fullscreenMaterial.dispose()}},Ho={NONE:0,DEPTH:1,CONVOLUTION:2},te={SKIP:9,SET:30,ADD:0,ALPHA:1,AVERAGE:2,COLOR:3,COLOR_BURN:4,COLOR_DODGE:5,DARKEN:6,DIFFERENCE:7,DIVIDE:8,DST:9,EXCLUSION:10,HARD_LIGHT:11,HARD_MIX:12,HUE:13,INVERT:14,INVERT_RGB:15,LIGHTEN:16,LINEAR_BURN:17,LINEAR_DODGE:18,LINEAR_LIGHT:19,LUMINOSITY:20,MULTIPLY:21,NEGATION:22,NORMAL:23,OVERLAY:24,PIN_LIGHT:25,REFLECT:26,SATURATION:27,SCREEN:28,SOFT_LIGHT:29,SRC:30,SUBTRACT:31,VIVID_LIGHT:32},Du="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Pu="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,src.a*opacity);}",Ou="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=(dst.rgb+src.rgb)*0.5;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Nu="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.xy,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Lu="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=mix(step(0.0,b)*(1.0-min(vec3(1.0),(1.0-a)/max(b,1e-9))),vec3(1.0),step(1.0,a));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Fu="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=step(0.0,a)*mix(min(vec3(1.0),a/max(1.0-b,1e-9)),vec3(1.0),step(1.0,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Bu="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Uu="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=abs(dst.rgb-src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Hu="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb/max(src.rgb,1e-9);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",ku="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-2.0*dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",zu="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb,1.0);vec3 b=min(src.rgb,1.0);vec3 c=mix(2.0*a*b,1.0-2.0*(1.0-a)*(1.0-b),step(0.5,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Vu="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=step(1.0,dst.rgb+src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Wu="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.x,a.yz));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Gu="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",ju="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=src.rgb*max(1.0-dst.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Yu="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",qu="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Ku="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb+src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Xu="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(2.0*src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",$u="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.xy,b.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Qu="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Zu="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-abs(1.0-dst.rgb-src.rgb),0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Ju="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,opacity);}",ed="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=2.0*src.rgb*dst.rgb;vec3 b=1.0-2.0*(1.0-src.rgb)*(1.0-dst.rgb);vec3 c=mix(a,b,step(0.5,dst.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",td="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 c=mix(mix(src2,dst.rgb,step(0.5*dst.rgb,src.rgb)),max(src2-1.0,vec3(0.0)),step(dst.rgb,src2-1.0));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",rd="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb*dst.rgb/max(1.0-src.rgb,1e-9),1.0);vec3 c=mix(a,src.rgb,step(1.0,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",id="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.x,b.y,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",nd="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-min(dst.rgb*src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",sd="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 d=dst.rgb+(src2-1.0);vec3 w=step(0.5,src.rgb);vec3 a=dst.rgb-(1.0-src2)*dst.rgb*(1.0-dst.rgb);vec3 b=mix(d*(sqrt(dst.rgb)-dst.rgb),d*dst.rgb*((16.0*dst.rgb-12.0)*dst.rgb+3.0),w*(1.0-step(0.25,dst.rgb)));vec3 c=mix(a,b,w);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",ad="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return src;}",od="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",cd="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=mix(max(1.0-min((1.0-dst.rgb)/(2.0*src.rgb),1.0),0.0),min(dst.rgb/(2.0*(1.0-src.rgb)),1.0),step(0.5,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",ld=new Map([[te.ADD,Du],[te.ALPHA,Pu],[te.AVERAGE,Ou],[te.COLOR,Nu],[te.COLOR_BURN,Lu],[te.COLOR_DODGE,Fu],[te.DARKEN,Bu],[te.DIFFERENCE,Uu],[te.DIVIDE,Hu],[te.DST,null],[te.EXCLUSION,ku],[te.HARD_LIGHT,zu],[te.HARD_MIX,Vu],[te.HUE,Wu],[te.INVERT,Gu],[te.INVERT_RGB,ju],[te.LIGHTEN,Yu],[te.LINEAR_BURN,qu],[te.LINEAR_DODGE,Ku],[te.LINEAR_LIGHT,Xu],[te.LUMINOSITY,$u],[te.MULTIPLY,Qu],[te.NEGATION,Zu],[te.NORMAL,Ju],[te.OVERLAY,ed],[te.PIN_LIGHT,td],[te.REFLECT,rd],[te.SATURATION,id],[te.SCREEN,nd],[te.SOFT_LIGHT,sd],[te.SRC,ad],[te.SUBTRACT,od],[te.VIVID_LIGHT,cd]]),ud=class extends xo{constructor(t,e=1){super(),this._blendFunction=t,this.opacity=new I(e)}getOpacity(){return this.opacity.value}setOpacity(t){this.opacity.value=t}get blendFunction(){return this._blendFunction}set blendFunction(t){this._blendFunction=t,this.dispatchEvent({type:"change"})}getBlendFunction(){return this.blendFunction}setBlendFunction(t){this.blendFunction=t}getShaderCode(){return ld.get(this.blendFunction)}},dd=class extends xo{constructor(t,e,{attributes:r=Ho.NONE,blendFunction:i=te.NORMAL,defines:n=new Map,uniforms:s=new Map,extensions:a=null,vertexShader:o=null}={}){super(),this.name=t,this.renderer=null,this.attributes=r,this.fragmentShader=e,this.vertexShader=o,this.defines=n,this.uniforms=s,this.extensions=a,this.blendMode=new ud(i),this.blendMode.addEventListener("change",c=>this.setChanged()),this._inputColorSpace=tl,this._outputColorSpace=rl}get inputColorSpace(){return this._inputColorSpace}set inputColorSpace(t){this._inputColorSpace=t,this.setChanged()}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t,this.setChanged()}set mainScene(t){}set mainCamera(t){}getName(){return this.name}setRenderer(t){this.renderer=t}getDefines(){return this.defines}getUniforms(){return this.uniforms}getExtensions(){return this.extensions}getBlendMode(){return this.blendMode}getAttributes(){return this.attributes}setAttributes(t){this.attributes=t,this.setChanged()}getFragmentShader(){return this.fragmentShader}setFragmentShader(t){this.fragmentShader=t,this.setChanged()}getVertexShader(){return this.vertexShader}setVertexShader(t){this.vertexShader=t,this.setChanged()}setChanged(){this.dispatchEvent({type:"change"})}setDepthTexture(t,e=_o){}update(t,e,r){}setSize(t,e){}initialize(t,e,r){}dispose(){for(const t of Object.keys(this)){const e=this[t];(e instanceof Ge||e instanceof Di||e instanceof To||e instanceof Iu)&&this[t].dispose()}}};const hd=new _;function ko(t,e,r=new _,i){const{x:n,y:s,z:a}=t,o=e.x,c=e.y,l=e.z,u=n*n*o,d=s*s*c,f=a*a*l,p=u+d+f,h=Math.sqrt(1/p);if(!Number.isFinite(h))return;const v=hd.copy(t).multiplyScalar(h);if(p<((i==null?void 0:i.centerTolerance)??.1))return r.copy(v);const y=v.multiply(e).multiplyScalar(2);let g=(1-h)*t.length()/(y.length()/2),T=0,R,C,b,P;do{g-=T,R=1/(1+g*o),C=1/(1+g*c),b=1/(1+g*l);const A=R*R,E=C*C,B=b*b,O=A*R,j=E*C,K=B*b;P=u*A+d*E+f*B-1,T=P/((u*O*o+d*j*c+f*K*l)*-2)}while(Math.abs(P)>1e-12);return r.set(n*R,s*C,a*b)}const ai=new _,ya=new _,Sa=new _,kn=class{constructor(e,r,i){this.radii=new _(e,r,i)}get minimumRadius(){return Math.min(this.radii.x,this.radii.y,this.radii.z)}get maximumRadius(){return Math.max(this.radii.x,this.radii.y,this.radii.z)}reciprocalRadii(e=new _){const{x:r,y:i,z:n}=this.radii;return e.set(1/r,1/i,1/n)}reciprocalRadiiSquared(e=new _){const{x:r,y:i,z:n}=this.radii;return e.set(1/r**2,1/i**2,1/n**2)}projectOnSurface(e,r=new _,i){return ko(e,this.reciprocalRadiiSquared(),r,i)}getSurfaceNormal(e,r=new _){return r.multiplyVectors(this.reciprocalRadiiSquared(ai),e).normalize()}getEastNorthUpVectors(e,r=new _,i=new _,n=new _){this.getSurfaceNormal(e,n),r.set(-e.y,e.x,0).normalize(),i.crossVectors(n,r).normalize()}getEastNorthUpFrame(e,r=new Q){const i=ai,n=ya,s=Sa;return this.getEastNorthUpVectors(e,i,n,s),r.makeBasis(i,n,s).setPosition(e)}getIntersection(e,r=new _){const i=this.reciprocalRadii(ai),n=ya.copy(i).multiply(e.origin),s=Sa.copy(i).multiply(e.direction),a=n.lengthSq(),o=s.lengthSq(),c=n.dot(s),l=c**2-o*(a-1);if(a===1)return r.copy(e.origin);if(a>1){if(c>=0||l<0)return;const u=Math.sqrt(l),d=(-c-u)/o,f=(-c+u)/o;return e.at(Math.min(d,f),r)}if(a<1){const u=c**2-o*(a-1),d=Math.sqrt(u),f=(-c+d)/o;return e.at(f,r)}if(c<0)return e.at(-c/o,r)}getOsculatingSphereCenter(e,r,i=new _){const n=this.radii.x**2,s=ai.set(e.x/n,e.y/n,e.z/this.radii.z**2).normalize();return i.copy(s.multiplyScalar(-r).add(e))}};kn.WGS84=new kn(6378137,6378137,6356752314245179e-9);let dt=kn;const oi=new _,wa=new _,Ar=class zn{constructor(e=0,r=0,i=0){this.longitude=e,this.latitude=r,this.height=i}set(e,r,i){return this.longitude=e,this.latitude=r,i!=null&&(this.height=i),this}clone(){return new zn(this.longitude,this.latitude,this.height)}copy(e){return this.longitude=e.longitude,this.latitude=e.latitude,this.height=e.height,this}equals(e){return e.longitude===this.longitude&&e.latitude===this.latitude&&e.height===this.height}setLongitude(e){return this.longitude=e,this}setLatitude(e){return this.latitude=e,this}setHeight(e){return this.height=e,this}normalize(){return this.longitude<zn.MIN_LONGITUDE&&(this.longitude+=Math.PI*2),this}setFromECEF(e,r){const i=((r==null?void 0:r.ellipsoid)??dt.WGS84).reciprocalRadiiSquared(oi),n=ko(e,i,wa,r);if(n==null)throw new Error(`Could not project position to ellipsoid surface: ${e.toArray()}`);const s=oi.multiplyVectors(n,i).normalize();this.longitude=Math.atan2(s.y,s.x),this.latitude=Math.asin(s.z);const a=oi.subVectors(e,n);return this.height=Math.sign(a.dot(e))*a.length(),this}toECEF(e=new _,r){const i=(r==null?void 0:r.ellipsoid)??dt.WGS84,n=oi.multiplyVectors(i.radii,i.radii),s=Math.cos(this.latitude),a=wa.set(s*Math.cos(this.longitude),s*Math.sin(this.longitude),Math.sin(this.latitude)).normalize();return e.multiplyVectors(n,a),e.divideScalar(Math.sqrt(a.dot(e))).add(a.multiplyScalar(this.height))}fromArray(e,r=0){return this.longitude=e[r],this.latitude=e[r+1],this.height=e[r+2],this}toArray(e=[],r=0){return e[r]=this.longitude,e[r+1]=this.latitude,e[r+2]=this.height,e}*[Symbol.iterator](){yield this.longitude,yield this.latitude,yield this.height}};Ar.MIN_LONGITUDE=-Math.PI,Ar.MAX_LONGITUDE=Math.PI,Ar.MIN_LATITUDE=-Math.PI/2,Ar.MAX_LATITUDE=Math.PI/2;let zo=Ar;var md="Invariant failed";function Vo(t,e){if(!t)throw new Error(md)}class fd extends ns{load(e,r,i,n){const s=new nl(this.manager);s.setResponseType("arraybuffer"),s.setRequestHeader(this.requestHeader),s.setPath(this.path),s.setWithCredentials(this.withCredentials),s.load(e,a=>{Vo(a instanceof ArrayBuffer);try{r(a)}catch(o){n!=null?n(o):console.error(o),this.manager.itemError(e)}},i,n)}}const pd="This is not an object",gd="This is not a Float16Array object",xa="This constructor is not a subclass of Float16Array",Wo="The constructor property value is not an object",vd="Species constructor didn't return TypedArray object",yd="Derived constructor created TypedArray object which was too small length",Dr="Attempting to access detached ArrayBuffer",Vn="Cannot convert undefined or null to object",Wn="Cannot mix BigInt and other types, use explicit conversions",_a="@@iterator property is not callable",Ta="Reduce of empty array with no initial value",Sd="The comparison function must be either a function or undefined",dn="Offset is out of bounds";function me(t){return(e,...r)=>Fe(t,e,r)}function lr(t,e){return me(sr(t,e).get)}const{apply:Fe,construct:Cr,defineProperty:wd,get:hn,getOwnPropertyDescriptor:sr,getPrototypeOf:Wr,has:Gn,ownKeys:Go,set:Ma,setPrototypeOf:jo}=Reflect,xd=Proxy,{EPSILON:_d,MAX_SAFE_INTEGER:ba,isFinite:Yo,isNaN:ar}=Number,{iterator:ht,species:Td,toStringTag:ls,for:Md}=Symbol,or=Object,{create:Pi,defineProperty:Gr,freeze:bd,is:Ra}=or,jn=or.prototype,Rd=jn.__lookupGetter__?me(jn.__lookupGetter__):(t,e)=>{if(t==null)throw ye(Vn);let r=or(t);do{const i=sr(r,e);if(i!==void 0)return xt(i,"get")?i.get:void 0}while((r=Wr(r))!==null)},xt=or.hasOwn||me(jn.hasOwnProperty),qo=Array,Ko=qo.isArray,Oi=qo.prototype,Ed=me(Oi.join),Ad=me(Oi.push),Cd=me(Oi.toLocaleString),us=Oi[ht],Id=me(us),{abs:Dd,trunc:Xo}=Math,Ni=ArrayBuffer,Pd=Ni.isView,$o=Ni.prototype,Od=me($o.slice),Nd=lr($o,"byteLength"),Yn=typeof SharedArrayBuffer<"u"?SharedArrayBuffer:null,Ld=Yn&&lr(Yn.prototype,"byteLength"),ds=Wr(Uint8Array),Fd=ds.from,Ee=ds.prototype,Bd=Ee[ht],Ud=me(Ee.keys),Hd=me(Ee.values),kd=me(Ee.entries),zd=me(Ee.set),Ea=me(Ee.reverse),Vd=me(Ee.fill),Wd=me(Ee.copyWithin),Aa=me(Ee.sort),Mr=me(Ee.slice),Gd=me(Ee.subarray),Re=lr(Ee,"buffer"),Lt=lr(Ee,"byteOffset"),se=lr(Ee,"length"),Qo=lr(Ee,ls),jd=Uint8Array,Ue=Uint16Array,Ca=(...t)=>Fe(Fd,Ue,t),hs=Uint32Array,Yd=Float32Array,Ht=Wr([][ht]()),Li=me(Ht.next),qd=me(function*(){}().next),Kd=Wr(Ht),Xd=DataView.prototype,$d=me(Xd.getUint16),ye=TypeError,mn=RangeError,Zo=WeakSet,Jo=Zo.prototype,Qd=me(Jo.add),Zd=me(Jo.has),Fi=WeakMap,ms=Fi.prototype,xi=me(ms.get),Jd=me(ms.has),fs=me(ms.set),ec=new Fi,eh=Pi(null,{next:{value:function(){const t=xi(ec,this);return Li(t)}},[ht]:{value:function(){return this}}});function Ir(t){if(t[ht]===us&&Ht.next===Li)return t;const e=Pi(eh);return fs(ec,e,Id(t)),e}const tc=new Fi,rc=Pi(Kd,{next:{value:function(){const t=xi(tc,this);return qd(t)},writable:!0,configurable:!0}});for(const t of Go(Ht))t!=="next"&&Gr(rc,t,sr(Ht,t));function Ia(t){const e=Pi(rc);return fs(tc,e,t),e}function _i(t){return t!==null&&typeof t=="object"||typeof t=="function"}function Da(t){return t!==null&&typeof t=="object"}function Ti(t){return Qo(t)!==void 0}function qn(t){const e=Qo(t);return e==="BigInt64Array"||e==="BigUint64Array"}function th(t){try{return Ko(t)?!1:(Nd(t),!0)}catch{return!1}}function ic(t){if(Yn===null)return!1;try{return Ld(t),!0}catch{return!1}}function rh(t){return th(t)||ic(t)}function Pa(t){return Ko(t)?t[ht]===us&&Ht.next===Li:!1}function ih(t){return Ti(t)?t[ht]===Bd&&Ht.next===Li:!1}function ci(t){if(typeof t!="string")return!1;const e=+t;return t!==e+""||!Yo(e)?!1:e===Xo(e)}const Mi=Md("__Float16Array__");function nh(t){if(!Da(t))return!1;const e=Wr(t);if(!Da(e))return!1;const r=e.constructor;if(r===void 0)return!1;if(!_i(r))throw ye(Wo);return Gn(r,Mi)}const Kn=1/_d;function sh(t){return t+Kn-Kn}const nc=6103515625e-14,ah=65504,sc=.0009765625,Oa=sc*nc,oh=sc*Kn;function ch(t){const e=+t;if(!Yo(e)||e===0)return e;const r=e>0?1:-1,i=Dd(e);if(i<nc)return r*sh(i/Oa)*Oa;const n=(1+oh)*i,s=n-(n-i);return s>ah||ar(s)?r*(1/0):r*s}const ac=new Ni(4),oc=new Yd(ac),cc=new hs(ac),tt=new Ue(512),rt=new jd(512);for(let t=0;t<256;++t){const e=t-127;e<-24?(tt[t]=0,tt[t|256]=32768,rt[t]=24,rt[t|256]=24):e<-14?(tt[t]=1024>>-e-14,tt[t|256]=1024>>-e-14|32768,rt[t]=-e-1,rt[t|256]=-e-1):e<=15?(tt[t]=e+15<<10,tt[t|256]=e+15<<10|32768,rt[t]=13,rt[t|256]=13):e<128?(tt[t]=31744,tt[t|256]=64512,rt[t]=24,rt[t|256]=24):(tt[t]=31744,tt[t|256]=64512,rt[t]=13,rt[t|256]=13)}function ct(t){oc[0]=ch(t);const e=cc[0],r=e>>23&511;return tt[r]+((e&8388607)>>rt[r])}const ps=new hs(2048);for(let t=1;t<1024;++t){let e=t<<13,r=0;for(;!(e&8388608);)e<<=1,r-=8388608;e&=-8388609,r+=947912704,ps[t]=e|r}for(let t=1024;t<2048;++t)ps[t]=939524096+(t-1024<<13);const ur=new hs(64);for(let t=1;t<31;++t)ur[t]=t<<23;ur[31]=1199570944;ur[32]=2147483648;for(let t=33;t<63;++t)ur[t]=2147483648+(t-32<<23);ur[63]=3347054592;const lc=new Ue(64);for(let t=1;t<64;++t)t!==32&&(lc[t]=1024);function ae(t){const e=t>>10;return cc[0]=ps[lc[e]+(t&1023)]+ur[e],oc[0]}function St(t){const e=+t;return ar(e)||e===0?0:Xo(e)}function fn(t){const e=St(t);return e<0?0:e<ba?e:ba}function li(t,e){if(!_i(t))throw ye(pd);const r=t.constructor;if(r===void 0)return e;if(!_i(r))throw ye(Wo);return r[Td]??e}function Pr(t){if(ic(t))return!1;try{return Od(t,0,0),!1}catch{}return!0}function Na(t,e){const r=ar(t),i=ar(e);if(r&&i)return 0;if(r)return 1;if(i||t<e)return-1;if(t>e)return 1;if(t===0&&e===0){const n=Ra(t,0),s=Ra(e,0);if(!n&&s)return-1;if(n&&!s)return 1}return 0}const gs=2,bi=new Fi;function Jt(t){return Jd(bi,t)||!Pd(t)&&nh(t)}function ne(t){if(!Jt(t))throw ye(gd)}function ui(t,e){const r=Jt(t),i=Ti(t);if(!r&&!i)throw ye(vd);if(typeof e=="number"){let n;if(r){const s=q(t);n=se(s)}else n=se(t);if(n<e)throw ye(yd)}if(qn(t))throw ye(Wn)}function q(t){const e=xi(bi,t);if(e!==void 0){const n=Re(e);if(Pr(n))throw ye(Dr);return e}const r=t.buffer;if(Pr(r))throw ye(Dr);const i=Cr(ue,[r,t.byteOffset,t.length],t.constructor);return xi(bi,i)}function La(t){const e=se(t),r=[];for(let i=0;i<e;++i)r[i]=ae(t[i]);return r}const uc=new Zo;for(const t of Go(Ee)){if(t===ls)continue;const e=sr(Ee,t);xt(e,"get")&&typeof e.get=="function"&&Qd(uc,e.get)}const lh=bd({get(t,e,r){return ci(e)&&xt(t,e)?ae(hn(t,e)):Zd(uc,Rd(t,e))?hn(t,e):hn(t,e,r)},set(t,e,r,i){return ci(e)&&xt(t,e)?Ma(t,e,ct(r)):Ma(t,e,r,i)},getOwnPropertyDescriptor(t,e){if(ci(e)&&xt(t,e)){const r=sr(t,e);return r.value=ae(r.value),r}return sr(t,e)},defineProperty(t,e,r){return ci(e)&&xt(t,e)&&xt(r,"value")&&(r.value=ct(r.value)),wd(t,e,r)}});class ue{constructor(e,r,i){let n;if(Jt(e))n=Cr(Ue,[q(e)],new.target);else if(_i(e)&&!rh(e)){let a,o;if(Ti(e)){a=e,o=se(e);const c=Re(e);if(Pr(c))throw ye(Dr);if(qn(e))throw ye(Wn);const l=new Ni(o*gs);n=Cr(Ue,[l],new.target)}else{const c=e[ht];if(c!=null&&typeof c!="function")throw ye(_a);c!=null?Pa(e)?(a=e,o=e.length):(a=[...e],o=a.length):(a=e,o=fn(a.length)),n=Cr(Ue,[o],new.target)}for(let c=0;c<o;++c)n[c]=ct(a[c])}else n=Cr(Ue,arguments,new.target);const s=new xd(n,lh);return fs(bi,s,n),s}static from(e,...r){const i=this;if(!Gn(i,Mi))throw ye(xa);if(i===ue){if(Jt(e)&&r.length===0){const u=q(e),d=new Ue(Re(u),Lt(u),se(u));return new ue(Re(Mr(d)))}if(r.length===0)return new ue(Re(Ca(e,ct)));const c=r[0],l=r[1];return new ue(Re(Ca(e,function(u,...d){return ct(Fe(c,this,[u,...Ir(d)]))},l)))}let n,s;const a=e[ht];if(a!=null&&typeof a!="function")throw ye(_a);if(a!=null)Pa(e)?(n=e,s=e.length):ih(e)?(n=e,s=se(e)):(n=[...e],s=n.length);else{if(e==null)throw ye(Vn);n=or(e),s=fn(n.length)}const o=new i(s);if(r.length===0)for(let c=0;c<s;++c)o[c]=n[c];else{const c=r[0],l=r[1];for(let u=0;u<s;++u)o[u]=Fe(c,l,[n[u],u])}return o}static of(...e){const r=this;if(!Gn(r,Mi))throw ye(xa);const i=e.length;if(r===ue){const s=new ue(i),a=q(s);for(let o=0;o<i;++o)a[o]=ct(e[o]);return s}const n=new r(i);for(let s=0;s<i;++s)n[s]=e[s];return n}keys(){ne(this);const e=q(this);return Ud(e)}values(){ne(this);const e=q(this);return Ia(function*(){for(const r of Hd(e))yield ae(r)}())}entries(){ne(this);const e=q(this);return Ia(function*(){for(const[r,i]of kd(e))yield[r,ae(i)]}())}at(e){ne(this);const r=q(this),i=se(r),n=St(e),s=n>=0?n:i+n;if(!(s<0||s>=i))return ae(r[s])}with(e,r){ne(this);const i=q(this),n=se(i),s=St(e),a=s>=0?s:n+s,o=+r;if(a<0||a>=n)throw mn(dn);const c=new Ue(Re(i),Lt(i),se(i)),l=new ue(Re(Mr(c))),u=q(l);return u[a]=ct(o),l}map(e,...r){ne(this);const i=q(this),n=se(i),s=r[0],a=li(i,ue);if(a===ue){const c=new ue(n),l=q(c);for(let u=0;u<n;++u){const d=ae(i[u]);l[u]=ct(Fe(e,s,[d,u,this]))}return c}const o=new a(n);ui(o,n);for(let c=0;c<n;++c){const l=ae(i[c]);o[c]=Fe(e,s,[l,c,this])}return o}filter(e,...r){ne(this);const i=q(this),n=se(i),s=r[0],a=[];for(let l=0;l<n;++l){const u=ae(i[l]);Fe(e,s,[u,l,this])&&Ad(a,u)}const o=li(i,ue),c=new o(a);return ui(c),c}reduce(e,...r){ne(this);const i=q(this),n=se(i);if(n===0&&r.length===0)throw ye(Ta);let s,a;r.length===0?(s=ae(i[0]),a=1):(s=r[0],a=0);for(let o=a;o<n;++o)s=e(s,ae(i[o]),o,this);return s}reduceRight(e,...r){ne(this);const i=q(this),n=se(i);if(n===0&&r.length===0)throw ye(Ta);let s,a;r.length===0?(s=ae(i[n-1]),a=n-2):(s=r[0],a=n-1);for(let o=a;o>=0;--o)s=e(s,ae(i[o]),o,this);return s}forEach(e,...r){ne(this);const i=q(this),n=se(i),s=r[0];for(let a=0;a<n;++a)Fe(e,s,[ae(i[a]),a,this])}find(e,...r){ne(this);const i=q(this),n=se(i),s=r[0];for(let a=0;a<n;++a){const o=ae(i[a]);if(Fe(e,s,[o,a,this]))return o}}findIndex(e,...r){ne(this);const i=q(this),n=se(i),s=r[0];for(let a=0;a<n;++a){const o=ae(i[a]);if(Fe(e,s,[o,a,this]))return a}return-1}findLast(e,...r){ne(this);const i=q(this),n=se(i),s=r[0];for(let a=n-1;a>=0;--a){const o=ae(i[a]);if(Fe(e,s,[o,a,this]))return o}}findLastIndex(e,...r){ne(this);const i=q(this),n=se(i),s=r[0];for(let a=n-1;a>=0;--a){const o=ae(i[a]);if(Fe(e,s,[o,a,this]))return a}return-1}every(e,...r){ne(this);const i=q(this),n=se(i),s=r[0];for(let a=0;a<n;++a)if(!Fe(e,s,[ae(i[a]),a,this]))return!1;return!0}some(e,...r){ne(this);const i=q(this),n=se(i),s=r[0];for(let a=0;a<n;++a)if(Fe(e,s,[ae(i[a]),a,this]))return!0;return!1}set(e,...r){ne(this);const i=q(this),n=St(r[0]);if(n<0)throw mn(dn);if(e==null)throw ye(Vn);if(qn(e))throw ye(Wn);if(Jt(e))return zd(q(this),q(e),n);if(Ti(e)){const c=Re(e);if(Pr(c))throw ye(Dr)}const s=se(i),a=or(e),o=fn(a.length);if(n===1/0||o+n>s)throw mn(dn);for(let c=0;c<o;++c)i[c+n]=ct(a[c])}reverse(){ne(this);const e=q(this);return Ea(e),this}toReversed(){ne(this);const e=q(this),r=new Ue(Re(e),Lt(e),se(e)),i=new ue(Re(Mr(r))),n=q(i);return Ea(n),i}fill(e,...r){ne(this);const i=q(this);return Vd(i,ct(e),...Ir(r)),this}copyWithin(e,r,...i){ne(this);const n=q(this);return Wd(n,e,r,...Ir(i)),this}sort(e){ne(this);const r=q(this),i=e!==void 0?e:Na;return Aa(r,(n,s)=>i(ae(n),ae(s))),this}toSorted(e){ne(this);const r=q(this);if(e!==void 0&&typeof e!="function")throw new ye(Sd);const i=e!==void 0?e:Na,n=new Ue(Re(r),Lt(r),se(r)),s=new ue(Re(Mr(n))),a=q(s);return Aa(a,(o,c)=>i(ae(o),ae(c))),s}slice(e,r){ne(this);const i=q(this),n=li(i,ue);if(n===ue){const h=new Ue(Re(i),Lt(i),se(i));return new ue(Re(Mr(h,e,r)))}const s=se(i),a=St(e),o=r===void 0?s:St(r);let c;a===-1/0?c=0:a<0?c=s+a>0?s+a:0:c=s<a?s:a;let l;o===-1/0?l=0:o<0?l=s+o>0?s+o:0:l=s<o?s:o;const u=l-c>0?l-c:0,d=new n(u);if(ui(d,u),u===0)return d;const f=Re(i);if(Pr(f))throw ye(Dr);let p=0;for(;c<l;)d[p]=ae(i[c]),++c,++p;return d}subarray(e,r){ne(this);const i=q(this),n=li(i,ue),s=new Ue(Re(i),Lt(i),se(i)),a=Gd(s,e,r),o=new n(Re(a),Lt(a),se(a));return ui(o),o}indexOf(e,...r){ne(this);const i=q(this),n=se(i);let s=St(r[0]);if(s===1/0)return-1;s<0&&(s+=n,s<0&&(s=0));for(let a=s;a<n;++a)if(xt(i,a)&&ae(i[a])===e)return a;return-1}lastIndexOf(e,...r){ne(this);const i=q(this),n=se(i);let s=r.length>=1?St(r[0]):n-1;if(s===-1/0)return-1;s>=0?s=s<n-1?s:n-1:s+=n;for(let a=s;a>=0;--a)if(xt(i,a)&&ae(i[a])===e)return a;return-1}includes(e,...r){ne(this);const i=q(this),n=se(i);let s=St(r[0]);if(s===1/0)return!1;s<0&&(s+=n,s<0&&(s=0));const a=ar(e);for(let o=s;o<n;++o){const c=ae(i[o]);if(a&&ar(c)||c===e)return!0}return!1}join(e){ne(this);const r=q(this),i=La(r);return Ed(i,e)}toLocaleString(...e){ne(this);const r=q(this),i=La(r);return Cd(i,...Ir(e))}get[ls](){if(Jt(this))return"Float16Array"}}Gr(ue,"BYTES_PER_ELEMENT",{value:gs});Gr(ue,Mi,{});jo(ue,ds);const Ri=ue.prototype;Gr(Ri,"BYTES_PER_ELEMENT",{value:gs});Gr(Ri,ht,{value:Ri.values,writable:!0,configurable:!0});jo(Ri,Ee);function uh(t,e,...r){return ae($d(t,e,...Ir(r)))}function dh(t){return t instanceof Int8Array||t instanceof Uint8Array||t instanceof Uint8ClampedArray||t instanceof Int16Array||t instanceof Uint16Array||t instanceof Int32Array||t instanceof Uint32Array||t instanceof ue||t instanceof Float32Array||t instanceof Float64Array}let di;function hh(){if(di!=null)return di;const t=new Uint32Array([268435456]);return di=new Uint8Array(t.buffer,t.byteOffset,t.byteLength)[0]===0,di}function mh(t,e,r,i=!0){if(i===hh())return new e(t);const n=Object.assign(new DataView(t),{getFloat16(a,o){return uh(this,a,o)}}),s=new e(n.byteLength/e.BYTES_PER_ELEMENT);for(let a=0,o=0;a<s.length;++a,o+=e.BYTES_PER_ELEMENT)s[a]=n[r](o,i);return s}const pn=(t,e)=>mh(t,ue,"getFloat16",e);class fh extends ns{load(e,r,i,n){const s=new fd(this.manager);s.setRequestHeader(this.requestHeader),s.setPath(this.path),s.setWithCredentials(this.withCredentials),s.load(e,a=>{try{r(this.parseTypedArray(a))}catch(o){n!=null?n(o):console.error(o),this.manager.itemError(e)}},i,n)}}function ph(t){return class extends fh{constructor(){super(...arguments),this.parseTypedArray=t}}}function gh(t){const e=t instanceof Int8Array?sl:t instanceof Uint8Array?Zs:t instanceof Uint8ClampedArray?Zs:t instanceof Int16Array?al:t instanceof Uint16Array?ol:t instanceof Int32Array?cl:t instanceof Uint32Array?Ut:t instanceof ue?bo:t instanceof Float32Array?wt:t instanceof Float64Array?wt:null;return Vo(e!=null),e}const vh={format:Fr,minFilter:Qs,magFilter:Qs};class yh extends ns{constructor(){super(...arguments),this.parameters={}}load(e,r,i,n){const s=new this.Texture,a=new this.TypedArrayLoader(this.manager);a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(this.withCredentials),a.load(e,o=>{s.image.data=o instanceof ue?new Uint16Array(o.buffer):o;const{width:c,height:l,depth:u,...d}=this.parameters;c!=null&&(s.image.width=c),l!=null&&(s.image.height=l),"depth"in s.image&&u!=null&&(s.image.depth=u),s.type=gh(o),Object.assign(s,d),s.needsUpdate=!0,r(s)},i,n)}}function dc(t,e,r){return class extends yh{constructor(){super(...arguments),this.Texture=t,this.TypedArrayLoader=ph(e),this.parameters={...vh,...r}}}}function Sh(t,e){return dc(il,t,e)}function wh(t,e){return dc(Nn,t,e)}function xh(t,e){return new(Sh(t,e))}function Fa(t,e){return new(wh(t,e))}const Ei=is.clamp,Xn=is.degToRad;function _h(t,e,r,i=0,n=1){return is.mapLinear(t,e,r,i,n)}function Th(t){return Math.min(Math.max(t,0),1)}function Le(t){return(e,r)=>{e instanceof Di?Object.defineProperty(e,r,{enumerable:!0,get(){var i;return((i=this.defines)==null?void 0:i[t])!=null},set(i){var n;i!==this[r]&&(i?(this.defines??(this.defines={}),this.defines[t]="1"):(n=this.defines)==null||delete n[t],this.needsUpdate=!0)}}):Object.defineProperty(e,r,{enumerable:!0,get(){return this.defines.has(t)},set(i){i!==this[r]&&(i?this.defines.set(t,"1"):this.defines.delete(t),this.setChanged())}})}}function Mh(t,{min:e=Number.MIN_SAFE_INTEGER,max:r=Number.MAX_SAFE_INTEGER}={}){return(i,n)=>{i instanceof Di?Object.defineProperty(i,n,{enumerable:!0,get(){var s;const a=(s=this.defines)==null?void 0:s[t];return a!=null?parseInt(a):0},set(s){const a=this[n];s!==a&&(this.defines??(this.defines={}),this.defines[t]=Ei(s,e,r).toFixed(0),this.needsUpdate=!0)}}):Object.defineProperty(i,n,{enumerable:!0,get(){const s=this.defines.get(t);return s!=null?parseInt(s):0},set(s){const a=this[n];s!==a&&(this.defines.set(t,Ei(s,e,r).toFixed(0)),this.setChanged())}})}}var jr=Uint8Array,hc=Uint16Array,bh=Uint32Array,Rh=new jr([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Eh=new jr([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),mc=function(t,e){for(var r=new hc(31),i=0;i<31;++i)r[i]=e+=1<<t[i-1];for(var n=new bh(r[30]),i=1;i<30;++i)for(var s=r[i];s<r[i+1];++s)n[s]=s-r[i]<<5|i;return[r,n]},fc=mc(Rh,2),Ah=fc[0],Ch=fc[1];Ah[28]=258,Ch[258]=28;mc(Eh,0);var Ih=new hc(32768);for(var fe=0;fe<32768;++fe){var Rt=(fe&43690)>>>1|(fe&21845)<<1;Rt=(Rt&52428)>>>2|(Rt&13107)<<2,Rt=(Rt&61680)>>>4|(Rt&3855)<<4,Ih[fe]=((Rt&65280)>>>8|(Rt&255)<<8)>>>1}var Bi=new jr(288);for(var fe=0;fe<144;++fe)Bi[fe]=8;for(var fe=144;fe<256;++fe)Bi[fe]=9;for(var fe=256;fe<280;++fe)Bi[fe]=7;for(var fe=280;fe<288;++fe)Bi[fe]=8;var Dh=new jr(32);for(var fe=0;fe<32;++fe)Dh[fe]=5;var Ph=new jr(0),Oh=typeof TextDecoder<"u"&&new TextDecoder,Nh=0;try{Oh.decode(Ph,{stream:!0}),Nh=1}catch{}const Lh=/^[ \t]*#include +"([\w\d./]+)"/gm;function kt(t,e){return t.replace(Lh,(r,i)=>{const n=i.split("/").reduce((s,a)=>typeof s!="string"&&s!=null?s[a]:void 0,e);if(typeof n!="string")throw new Error(`Could not find include for ${i}.`);return kt(n,e)})}const Fh=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*(?:i\s*\+\+|\+\+\s*i)\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bh(t,e,r,i){let n="";for(let s=parseInt(e);s<parseInt(r);++s)n+=i.replace(/\[\s*i\s*\]/g,"["+s+"]").replace(/UNROLLED_LOOP_INDEX/g,`${s}`);return n}function Uh(t){return t.replace(Fh,Bh)}const Hh=`// Reference: https://github.com/mrdoob/three.js/blob/r171/examples/jsm/csm/CSMShader.js

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
`,kh=`// cSpell:words logdepthbuf

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
`,zh=`// Reference: https://advances.realtimerendering.com/s2014/index.html#_NEXT_GENERATION_POST

float interleavedGradientNoise(const vec2 coord) {
  const vec3 magic = vec3(0.06711056, 0.00583715, 52.9829189);
  return fract(magic.z * fract(dot(coord, magic.xy)));
}
`,Vh=`#if !defined(saturate)
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
`,Wh=`// Reference: https://jcgt.org/published/0003/02/01/paper.pdf

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
`,Gh=`float raySphereFirstIntersection(
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
`,jh=`vec3 screenToView(
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
`,Yh=`// Reference: https://www.gamedev.net/tutorials/programming/graphics/contact-hardening-soft-shadows-made-fast-r4906/

vec2 vogelDisk(const int index, const int sampleCount, const float phi) {
  const float goldenAngle = 2.39996322972865332;
  float r = sqrt(float(index) + 0.5) / sqrt(float(sampleCount));
  float theta = float(index) * goldenAngle + phi;
  return r * vec2(cos(theta), sin(theta));
}
`,qh=Hh,Kh=kh,Xh=zh,$h=Vh,Qh=Wh,pc=Gh,Zh=jh,Jh=Yh,vs=`// Based on the following work and adapted to Three.js.
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
`,cr=`uniform vec3 u_solar_irradiance;
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
`,em=["solarIrradiance","sunAngularRadius","bottomRadius","topRadius","rayleighScattering","mieScattering","miePhaseFunctionG","muSMin","skyRadianceToLuminance","sunRadianceToLuminance","luminousEfficiency"];function tm(t,e){if(e!=null)for(const r of em){const i=e[r];i!=null&&(t[r]instanceof _?t[r].copy(i):t[r]=i)}}const $n=class{constructor(e){this.solarIrradiance=new _(1.474,1.8504,1.91198),this.sunAngularRadius=.004675,this.bottomRadius=636e4,this.topRadius=642e4,this.rayleighScattering=new _(.005802,.013558,.0331),this.mieScattering=new _(.003996,.003996,.003996),this.miePhaseFunctionG=.8,this.muSMin=Math.cos(Xn(120)),this.skyRadianceToLuminance=new _(114974.916437,71305.954816,65310.548555),this.sunRadianceToLuminance=new _(98242.786222,69954.398112,66475.012354),this.luminousEfficiency=new _(.2126,.7152,.0722),this.skyRadianceToRelativeLuminance=new _,this.sunRadianceToRelativeLuminance=new _,tm(this,e);const r=this.luminousEfficiency.dot(this.skyRadianceToLuminance);this.skyRadianceToRelativeLuminance.copy(this.skyRadianceToLuminance).divideScalar(r),this.sunRadianceToRelativeLuminance.copy(this.sunRadianceToLuminance).divideScalar(r)}};$n.DEFAULT=new $n;let Ui=$n;const Hi=64,ki=16,ys=32,Ss=128,ws=32,xs=8,rm=xs*ws,im=Ss,nm=ys,zi=256,Vi=64,ir=1/1e3,sm="82e00c5222d6cbc222af69abdf6d3f4fc9f63030",gn=`https://media.githubusercontent.com/media/takram-design-engineering/three-geospatial/${sm}/packages/atmosphere/assets`,am=new _;function Wi(t,e,r,i,n=!0){const s=r.projectOnSurface(t,am);return s!=null?r.getOsculatingSphereCenter(!n||s.lengthSq()<t.lengthSq()?s:t,e,i):i.setScalar(0)}const om=`precision highp sampler2DArray;

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
`,cm=`uniform mat4 inverseViewMatrix;
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
`,gc=`vec3 getLunarRadiance(const float moonAngularRadius) {
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
`;var lm=Object.defineProperty,Ye=(t,e,r,i)=>{for(var n=void 0,s=t.length-1,a;s>=0;s--)(a=t[s])&&(n=a(e,r,n)||n);return n&&lm(e,r,n),n};const um=new _,dm=new _,hm=new zo,mm={blendFunction:te.NORMAL,octEncodedNormal:!1,reconstructNormal:!1,ellipsoid:dt.WGS84,correctAltitude:!0,correctGeometricError:!0,photometric:!0,sunIrradiance:!1,skyIrradiance:!1,transmittance:!0,inscatter:!0,irradianceScale:1,sky:!1,sun:!0,moon:!0,moonAngularRadius:.0045,lunarRadianceScale:1};class qe extends dd{constructor(e=new Ii,r,i=Ui.DEFAULT){const{blendFunction:n,normalBuffer:s=null,octEncodedNormal:a,reconstructNormal:o,irradianceTexture:c=null,scatteringTexture:l=null,transmittanceTexture:u=null,ellipsoid:d,correctAltitude:f,correctGeometricError:p,photometric:h,sunDirection:v,sunIrradiance:y,skyIrradiance:g,transmittance:T,inscatter:R,irradianceScale:C,sky:b,sun:P,moon:A,moonDirection:E,moonAngularRadius:B,lunarRadianceScale:O}={...mm,...r};super("AerialPerspectiveEffect",Uh(kt(om,{core:{depth:Kh,packing:Qh,math:$h,transform:Zh,raySphereIntersection:pc,cascadedShadowMaps:qh,interleavedGradientNoise:Xh,vogelDisk:Jh},parameters:cr,functions:vs,sky:gc})),{blendFunction:n,vertexShader:kt(cm,{parameters:cr}),attributes:Ho.DEPTH,uniforms:new Map(Object.entries({normalBuffer:new I(s),projectionMatrix:new I(new Q),viewMatrix:new I(new Q),inverseProjectionMatrix:new I(new Q),inverseViewMatrix:new I(new Q),cameraPosition:new I(new _),bottomRadius:new I(i.bottomRadius),ellipsoidRadii:new I(new _),ellipsoidCenter:new I(new _),inverseEllipsoidMatrix:new I(new Q),altitudeCorrection:new I(new _),sunDirection:new I((v==null?void 0:v.clone())??new _),irradianceScale:new I(C),idealSphereAlpha:new I(0),moonDirection:new I((E==null?void 0:E.clone())??new _),moonAngularRadius:new I(B),lunarRadianceScale:new I(O),overlayBuffer:new I(null),shadowBuffer:new I(null),shadowMapSize:new I(new It),shadowIntervals:new I([]),shadowMatrices:new I([]),inverseShadowMatrices:new I([]),shadowFar:new I(0),shadowTopHeight:new I(0),shadowRadius:new I(3),stbnTexture:new I(null),frame:new I(0),shadowLengthBuffer:new I(null),u_solar_irradiance:new I(i.solarIrradiance),u_sun_angular_radius:new I(i.sunAngularRadius),u_bottom_radius:new I(i.bottomRadius*ir),u_top_radius:new I(i.topRadius*ir),u_rayleigh_scattering:new I(i.rayleighScattering),u_mie_scattering:new I(i.mieScattering),u_mie_phase_function_g:new I(i.miePhaseFunctionG),u_mu_s_min:new I(i.muSMin),u_irradiance_texture:new I(c),u_scattering_texture:new I(l),u_single_mie_scattering_texture:new I(l),u_transmittance_texture:new I(u)})),defines:new Map([["TRANSMITTANCE_TEXTURE_WIDTH",zi.toFixed(0)],["TRANSMITTANCE_TEXTURE_HEIGHT",Vi.toFixed(0)],["SCATTERING_TEXTURE_R_SIZE",ys.toFixed(0)],["SCATTERING_TEXTURE_MU_SIZE",Ss.toFixed(0)],["SCATTERING_TEXTURE_MU_S_SIZE",ws.toFixed(0)],["SCATTERING_TEXTURE_NU_SIZE",xs.toFixed(0)],["IRRADIANCE_TEXTURE_WIDTH",Hi.toFixed(0)],["IRRADIANCE_TEXTURE_HEIGHT",ki.toFixed(0)],["METER_TO_LENGTH_UNIT",ir.toFixed(7)],["SUN_SPECTRAL_RADIANCE_TO_LUMINANCE",`vec3(${i.sunRadianceToRelativeLuminance.toArray().map(j=>j.toFixed(12)).join(",")})`],["SKY_SPECTRAL_RADIANCE_TO_LUMINANCE",`vec3(${i.skyRadianceToRelativeLuminance.toArray().map(j=>j.toFixed(12)).join(",")})`]])}),this.camera=e,this.atmosphere=i,this.ellipsoidMatrix=new Q,this.overlay=null,this.shadow=null,this.shadowLength=null,this.shadowSampleCount=8,this.octEncodedNormal=a,this.reconstructNormal=o,this.ellipsoid=d,this.correctAltitude=f,this.correctGeometricError=p,this.photometric=h,this.sunIrradiance=y,this.skyIrradiance=g,this.transmittance=T,this.inscatter=R,this.sky=b,this.sun=P,this.moon=A}get mainCamera(){return this.camera}set mainCamera(e){this.camera=e}copyCameraSettings(e){const{projectionMatrix:r,matrixWorldInverse:i,projectionMatrixInverse:n,matrixWorld:s}=e,a=this.uniforms;a.get("projectionMatrix").value.copy(r),a.get("viewMatrix").value.copy(i),a.get("inverseProjectionMatrix").value.copy(n),a.get("inverseViewMatrix").value.copy(s);const o=e.getWorldPosition(a.get("cameraPosition").value),c=a.get("inverseEllipsoidMatrix").value.copy(this.ellipsoidMatrix).invert(),l=um.copy(o).applyMatrix4(c).sub(a.get("ellipsoidCenter").value);try{const d=hm.setFromECEF(l).height,f=dm.set(0,this.ellipsoid.maximumRadius,-d).applyMatrix4(r);a.get("idealSphereAlpha").value=Th(_h(f.y,41.5,13.8,0,1))}catch{return}const u=a.get("altitudeCorrection");this.correctAltitude?Wi(l,this.atmosphere.bottomRadius,this.ellipsoid,u.value):u.value.setScalar(0)}updateComposition(){const{uniforms:e,defines:r,overlay:i,shadow:n,shadowLength:s}=this,a=r.has("HAS_OVERLAY"),o=i!=null;o!==a&&(o?r.set("HAS_OVERLAY","1"):(r.delete("HAS_OVERLAY"),e.get("overlayBuffer").value=null),this.setChanged()),o&&(e.get("overlayBuffer").value=i.map);const c=r.has("HAS_SHADOW"),l=n!=null;if(l!==c&&(l?r.set("HAS_SHADOW","1"):(r.delete("HAS_SHADOW"),e.get("shadowBuffer").value=null),this.setChanged()),l){const f=r.get("SHADOW_CASCADE_COUNT"),p=`${n.cascadeCount}`;f!==p&&(r.set("SHADOW_CASCADE_COUNT",n.cascadeCount.toFixed(0)),this.setChanged()),e.get("shadowBuffer").value=n.map,e.get("shadowMapSize").value=n.mapSize,e.get("shadowIntervals").value=n.intervals,e.get("shadowMatrices").value=n.matrices,e.get("inverseShadowMatrices").value=n.inverseMatrices,e.get("shadowFar").value=n.far,e.get("shadowTopHeight").value=n.topHeight}const u=r.has("HAS_SHADOW_LENGTH"),d=s!=null;d!==u&&(d?r.set("HAS_SHADOW_LENGTH","1"):(r.delete("HAS_SHADOW_LENGTH"),e.get("shadowLengthBuffer").value=null),this.setChanged()),d&&(e.get("shadowLengthBuffer").value=s.map)}update(e,r,i){this.copyCameraSettings(this.camera),this.updateComposition(),++this.uniforms.get("frame").value}get normalBuffer(){return this.uniforms.get("normalBuffer").value}set normalBuffer(e){this.uniforms.get("normalBuffer").value=e}get irradianceTexture(){return this.uniforms.get("u_irradiance_texture").value}set irradianceTexture(e){this.uniforms.get("u_irradiance_texture").value=e}get scatteringTexture(){return this.uniforms.get("u_scattering_texture").value}set scatteringTexture(e){this.uniforms.get("u_scattering_texture").value=e,this.uniforms.get("u_single_mie_scattering_texture").value=e}get transmittanceTexture(){return this.uniforms.get("u_transmittance_texture").value}set transmittanceTexture(e){this.uniforms.get("u_transmittance_texture").value=e}get useHalfFloat(){return!0}set useHalfFloat(e){}get ellipsoid(){return this._ellipsoid}set ellipsoid(e){this._ellipsoid=e,this.uniforms.get("ellipsoidRadii").value.copy(e.radii)}get ellipsoidCenter(){return this.uniforms.get("ellipsoidCenter").value}get sunDirection(){return this.uniforms.get("sunDirection").value}get irradianceScale(){return this.uniforms.get("irradianceScale").value}set irradianceScale(e){this.uniforms.get("irradianceScale").value=e}get moonDirection(){return this.uniforms.get("moonDirection").value}get moonAngularRadius(){return this.uniforms.get("moonAngularRadius").value}set moonAngularRadius(e){this.uniforms.get("moonAngularRadius").value=e}get lunarRadianceScale(){return this.uniforms.get("lunarRadianceScale").value}set lunarRadianceScale(e){this.uniforms.get("lunarRadianceScale").value=e}get stbnTexture(){return this.uniforms.get("stbnTexture").value}set stbnTexture(e){this.uniforms.get("stbnTexture").value=e}get shadowRadius(){return this.uniforms.get("shadowRadius").value}set shadowRadius(e){this.uniforms.get("shadowRadius").value=e}}Ye([Le("OCT_ENCODED_NORMAL")],qe.prototype,"octEncodedNormal");Ye([Le("RECONSTRUCT_NORMAL")],qe.prototype,"reconstructNormal");Ye([Le("CORRECT_GEOMETRIC_ERROR")],qe.prototype,"correctGeometricError");Ye([Le("PHOTOMETRIC")],qe.prototype,"photometric");Ye([Le("SUN_IRRADIANCE")],qe.prototype,"sunIrradiance");Ye([Le("SKY_IRRADIANCE")],qe.prototype,"skyIrradiance");Ye([Le("TRANSMITTANCE")],qe.prototype,"transmittance");Ye([Le("INSCATTER")],qe.prototype,"inscatter");Ye([Le("SKY")],qe.prototype,"sky");Ye([Le("SUN")],qe.prototype,"sun");Ye([Le("MOON")],qe.prototype,"moon");Ye([Mh("SHADOW_SAMPLE_COUNT",{min:1,max:16})],qe.prototype,"shadowSampleCount");var fm=Object.defineProperty,pm=(t,e,r,i)=>{for(var n=void 0,s=t.length-1,a;s>=0;s--)(a=t[s])&&(n=a(e,r,n)||n);return n&&fm(e,r,n),n};const gm=new _;function vm(t,e){let r="",i="";for(let n=1;n<e;++n)r+=`layout(location = ${n}) out float renderTarget${n};
`,i+=`renderTarget${n} = 0.0;
`;return t.replace("#include <mrt_layout>",r).replace("#include <mrt_output>",i)}const _s={ellipsoid:dt.WGS84,correctAltitude:!0,photometric:!0,renderTargetCount:1};class Ts extends ll{constructor(e,r=Ui.DEFAULT){const{irradianceTexture:i=null,scatteringTexture:n=null,transmittanceTexture:s=null,useHalfFloat:a,ellipsoid:o,correctAltitude:c,photometric:l,sunDirection:u,sunAngularRadius:d,renderTargetCount:f,...p}={..._s,...e};super({toneMapped:!1,depthWrite:!1,depthTest:!1,...p,uniforms:{cameraPosition:new I(new _),ellipsoidCenter:new I(new _),inverseEllipsoidMatrix:new I(new Q),altitudeCorrection:new I(new _),sunDirection:new I((u==null?void 0:u.clone())??new _),u_solar_irradiance:new I(r.solarIrradiance),u_sun_angular_radius:new I(d??r.sunAngularRadius),u_bottom_radius:new I(r.bottomRadius*ir),u_top_radius:new I(r.topRadius*ir),u_rayleigh_scattering:new I(r.rayleighScattering),u_mie_scattering:new I(r.mieScattering),u_mie_phase_function_g:new I(r.miePhaseFunctionG),u_mu_s_min:new I(r.muSMin),u_irradiance_texture:new I(i),u_scattering_texture:new I(n),u_single_mie_scattering_texture:new I(n),u_transmittance_texture:new I(s),...p.uniforms},defines:{PI:`${Math.PI}`,TRANSMITTANCE_TEXTURE_WIDTH:zi.toFixed(0),TRANSMITTANCE_TEXTURE_HEIGHT:Vi.toFixed(0),SCATTERING_TEXTURE_R_SIZE:ys.toFixed(0),SCATTERING_TEXTURE_MU_SIZE:Ss.toFixed(0),SCATTERING_TEXTURE_MU_S_SIZE:ws.toFixed(0),SCATTERING_TEXTURE_NU_SIZE:xs.toFixed(0),IRRADIANCE_TEXTURE_WIDTH:Hi.toFixed(0),IRRADIANCE_TEXTURE_HEIGHT:ki.toFixed(0),METER_TO_LENGTH_UNIT:ir.toFixed(7),SUN_SPECTRAL_RADIANCE_TO_LUMINANCE:`vec3(${r.sunRadianceToRelativeLuminance.toArray().map(h=>h.toFixed(12)).join(",")})`,SKY_SPECTRAL_RADIANCE_TO_LUMINANCE:`vec3(${r.skyRadianceToRelativeLuminance.toArray().map(h=>h.toFixed(12)).join(",")})`,...p.defines}}),this.atmosphere=r,this.ellipsoidMatrix=new Q,this.atmosphere=r,this.ellipsoid=o,this.correctAltitude=c,this.photometric=l,this.renderTargetCount=f}copyCameraSettings(e){const r=this.uniforms,i=e.getWorldPosition(r.cameraPosition.value),n=r.inverseEllipsoidMatrix.value.copy(this.ellipsoidMatrix).invert(),s=gm.copy(i).applyMatrix4(n).sub(r.ellipsoidCenter.value),a=r.altitudeCorrection.value;this.correctAltitude?Wi(s,this.atmosphere.bottomRadius,this.ellipsoid,a):a.setScalar(0)}onBeforeCompile(e,r){e.fragmentShader=vm(e.fragmentShader,this.renderTargetCount)}onBeforeRender(e,r,i,n,s,a){this.copyCameraSettings(i)}get irradianceTexture(){return this.uniforms.u_irradiance_texture.value}set irradianceTexture(e){this.uniforms.u_irradiance_texture.value=e}get scatteringTexture(){return this.uniforms.u_scattering_texture.value}set scatteringTexture(e){this.uniforms.u_scattering_texture.value=e,this.uniforms.u_single_mie_scattering_texture.value=e}get transmittanceTexture(){return this.uniforms.u_transmittance_texture.value}set transmittanceTexture(e){this.uniforms.u_transmittance_texture.value=e}get useHalfFloat(){return!0}set useHalfFloat(e){}get ellipsoidCenter(){return this.uniforms.ellipsoidCenter.value}get sunDirection(){return this.uniforms.sunDirection.value}get sunAngularRadius(){return this.uniforms.u_sun_angular_radius.value}set sunAngularRadius(e){this.uniforms.u_sun_angular_radius.value=e}get renderTargetCount(){return this._renderTargetCount}set renderTargetCount(e){e!==this.renderTargetCount&&(this._renderTargetCount=e,this.needsUpdate=!0)}}pm([Le("PHOTOMETRIC")],Ts.prototype,"photometric");var lt;(function(t){t.Sun="Sun",t.Moon="Moon",t.Mercury="Mercury",t.Venus="Venus",t.Earth="Earth",t.Mars="Mars",t.Jupiter="Jupiter",t.Saturn="Saturn",t.Uranus="Uranus",t.Neptune="Neptune",t.Pluto="Pluto",t.SSB="SSB",t.EMB="EMB",t.Star1="Star1",t.Star2="Star2",t.Star3="Star3",t.Star4="Star4",t.Star5="Star5",t.Star6="Star6",t.Star7="Star7",t.Star8="Star8"})(lt||(lt={}));lt.Star1,lt.Star2,lt.Star3,lt.Star4,lt.Star5,lt.Star6,lt.Star7,lt.Star8;var Ba;(function(t){t[t.From2000=0]="From2000",t[t.Into2000=1]="Into2000"})(Ba||(Ba={}));var Ua;(function(t){t[t.Pericenter=0]="Pericenter",t[t.Apocenter=1]="Apocenter"})(Ua||(Ua={}));var Ha;(function(t){t.Penumbral="penumbral",t.Partial="partial",t.Annular="annular",t.Total="total"})(Ha||(Ha={}));var ka;(function(t){t[t.Invalid=0]="Invalid",t[t.Ascending=1]="Ascending",t[t.Descending=-1]="Descending"})(ka||(ka={}));function vc(t){return Math.sqrt(Math.max(t,0))}function ym(t){return Math.max(t,0)}function Sm(t,e,r){const{bottomRadius:i}=t;return r<0&&e**2*(r**2-1)+i**2>=0}function wm(t,e,r){const{topRadius:i}=t,n=e**2*(r**2-1)+i**2;return ym(-e*r+vc(n))}function Ai(t,e){return .5/e+t*(1-1/e)}var xm="Invariant failed";function _m(t,e){if(!t)throw new Error(xm)}const Tm=new _,za=new _,Mm=new _;function hi(t,e,r){const i=e*4;return r.set(t[i],t[i+1],t[i+2])}function yc(t,e,r){const{width:i,height:n}=t.image;_m(dh(t.image.data));let s=t.image.data;t.type===bo&&s instanceof Uint16Array&&(s=new ue(s.buffer));const a=Ei(e.x,0,1)*(i-1),o=Ei(e.y,0,1)*(n-1),c=Math.floor(a),l=Math.floor(o),u=a-c,d=o-l,f=u,p=d,h=c%i,v=(h+1)%i,y=l%n,g=(y+1)%n,T=hi(s,y*i+h,Tm),R=hi(s,y*i+v,za),C=T.lerp(R,f),b=hi(s,g*i+h,za),P=hi(s,g*i+v,Mm),A=b.lerp(P,f);return r.copy(C.lerp(A,p))}function bm(t,e,r,i){const{topRadius:n,bottomRadius:s}=t,a=Math.sqrt(n**2-s**2),o=vc(e**2-s**2),c=wm(t,e,r),l=n-e,u=o+a,d=(c-l)/(u-l),f=o/a;return i.set(Ai(d,zi),Ai(f,Vi))}const Rm=new _,vn=new _,Em=new It;function Va(t,e,r,i=new ke,{ellipsoid:n=dt.WGS84,correctAltitude:s=!0,photometric:a=!0}={},o=Ui.DEFAULT){const c=Rm.copy(e);if(s){const v=n.projectOnSurface(e,vn);v!=null&&c.sub(n.getOsculatingSphereCenter(v,o.bottomRadius,vn))}const l=vn;let u=c.length(),d=c.dot(r);const{topRadius:f}=o,p=-d-Math.sqrt(d**2-u**2+f**2);if(p>0&&(u=f,d+=p),u>f)l.set(1,1,1);else{const v=d/u;if(Sm(o,u,v))l.setScalar(0);else{const y=bm(o,u,v,Em);yc(t,y,l)}}const h=l.multiply(o.solarIrradiance);return a&&h.multiply(o.sunRadianceToRelativeLuminance),i.setFromVector3(h)}var Yr=Uint8Array,Sc=Uint16Array,Am=Uint32Array,Cm=new Yr([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Im=new Yr([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),wc=function(t,e){for(var r=new Sc(31),i=0;i<31;++i)r[i]=e+=1<<t[i-1];for(var n=new Am(r[30]),i=1;i<30;++i)for(var s=r[i];s<r[i+1];++s)n[s]=s-r[i]<<5|i;return[r,n]},xc=wc(Cm,2),Dm=xc[0],Pm=xc[1];Dm[28]=258,Pm[258]=28;wc(Im,0);var Om=new Sc(32768);for(var pe=0;pe<32768;++pe){var Et=(pe&43690)>>>1|(pe&21845)<<1;Et=(Et&52428)>>>2|(Et&13107)<<2,Et=(Et&61680)>>>4|(Et&3855)<<4,Om[pe]=((Et&65280)>>>8|(Et&255)<<8)>>>1}var Gi=new Yr(288);for(var pe=0;pe<144;++pe)Gi[pe]=8;for(var pe=144;pe<256;++pe)Gi[pe]=9;for(var pe=256;pe<280;++pe)Gi[pe]=7;for(var pe=280;pe<288;++pe)Gi[pe]=8;var Nm=new Yr(32);for(var pe=0;pe<32;++pe)Nm[pe]=5;var Lm=new Yr(0),Fm=typeof TextDecoder<"u"&&new TextDecoder,Bm=0;try{Fm.decode(Lm,{stream:!0}),Bm=1}catch{}function Um({topRadius:t,bottomRadius:e},r,i,n){const s=(r-e)/(t-e),a=i*.5+.5;return n.set(Ai(a,Hi),Ai(s,ki))}const Hm=1/Math.sqrt(Math.PI),yn=Math.sqrt(3)/(2*Math.sqrt(Math.PI)),km=new _,Sn=new _,zm=new It,Vm=new Q,Wm={ellipsoid:dt.WGS84,correctAltitude:!0,photometric:!0};class Gm extends Ro{constructor(e,r=Ui.DEFAULT){super(),this.atmosphere=r,this.ellipsoidCenter=new _,this.ellipsoidMatrix=new Q;const{irradianceTexture:i=null,ellipsoid:n,correctAltitude:s,photometric:a,sunDirection:o}={...Wm,...e};this.irradianceTexture=i,this.ellipsoid=n,this.correctAltitude=s,this.photometric=a,this.sunDirection=(o==null?void 0:o.clone())??new _}update(){if(this.irradianceTexture==null)return;const e=Vm.copy(this.ellipsoidMatrix).invert(),r=this.getWorldPosition(km).applyMatrix4(e).sub(this.ellipsoidCenter);if(this.correctAltitude){const l=this.ellipsoid.projectOnSurface(r,Sn);l!=null&&r.sub(Wi(l,this.atmosphere.bottomRadius,this.ellipsoid,Sn))}const i=r.length(),n=r.dot(this.sunDirection)/i,s=Um(this.atmosphere,i,n,zm),a=yc(this.irradianceTexture,s,Sn);this.photometric&&a.multiply(this.atmosphere.skyRadianceToRelativeLuminance);const o=this.ellipsoid.getSurfaceNormal(r).applyMatrix4(this.ellipsoidMatrix),c=this.sh.coefficients;c[0].copy(a).multiplyScalar(Hm),c[1].copy(a).multiplyScalar(yn*o.y),c[2].copy(a).multiplyScalar(yn*o.z),c[3].copy(a).multiplyScalar(yn*o.x)}}const jm=`precision highp float;
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
`,Ym=`precision highp float;
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
`;var qm=Object.defineProperty,_c=(t,e,r,i)=>{for(var n=void 0,s=t.length-1,a;s>=0;s--)(a=t[s])&&(n=a(e,r,n)||n);return n&&qm(e,r,n),n};const Km={..._s,sun:!0,moon:!0,moonAngularRadius:.0045,lunarRadianceScale:1};class Ms extends Ts{constructor(e){const{sun:r,moon:i,moonDirection:n,moonAngularRadius:s,lunarRadianceScale:a,groundAlbedo:o,...c}={...Km,...e};super({name:"SkyMaterial",glslVersion:Lr,vertexShader:kt(Ym,{parameters:cr}),fragmentShader:kt(jm,{core:{raySphereIntersection:pc},parameters:cr,functions:vs,sky:gc}),...c,uniforms:{inverseProjectionMatrix:new I(new Q),inverseViewMatrix:new I(new Q),moonDirection:new I((n==null?void 0:n.clone())??new _),moonAngularRadius:new I(s),lunarRadianceScale:new I(a),groundAlbedo:new I((o==null?void 0:o.clone())??new ke(0)),shadowLengthBuffer:new I(null),...c.uniforms},defines:{PERSPECTIVE_CAMERA:"1"},depthTest:!0}),this.shadowLength=null,this.sun=r,this.moon=i}onBeforeRender(e,r,i,n,s,a){super.onBeforeRender(e,r,i,n,s,a);const{uniforms:o,defines:c}=this;o.inverseProjectionMatrix.value.copy(i.projectionMatrixInverse),o.inverseViewMatrix.value.copy(i.matrixWorld);const l=c.PERSPECTIVE_CAMERA!=null,u=i.isPerspectiveCamera===!0;u!==l&&(u?c.PERSPECTIVE_CAMERA="1":delete c.PERSPECTIVE_CAMERA,this.needsUpdate=!0);const d=this.groundAlbedo,f=c.GROUND_ALBEDO!=null,p=d.r!==0||d.g!==0||d.b!==0;p!==f&&(p?this.defines.GROUND_ALBEDO="1":delete this.defines.GROUND_ALBEDO,this.needsUpdate=!0);const h=this.shadowLength,v=c.HAS_SHADOW_LENGTH!=null,y=h!=null;y!==v&&(y?c.HAS_SHADOW_LENGTH="1":(delete c.HAS_SHADOW_LENGTH,o.shadowLengthBuffer.value=null),this.needsUpdate=!0),y&&(o.shadowLengthBuffer.value=h.map)}get moonDirection(){return this.uniforms.moonDirection.value}get moonAngularRadius(){return this.uniforms.moonAngularRadius.value}set moonAngularRadius(e){this.uniforms.moonAngularRadius.value=e}get lunarRadianceScale(){return this.uniforms.lunarRadianceScale.value}set lunarRadianceScale(e){this.uniforms.lunarRadianceScale.value=e}get groundAlbedo(){return this.uniforms.groundAlbedo.value}}_c([Le("SUN")],Ms.prototype,"sun");_c([Le("MOON")],Ms.prototype,"moon");const Xm=`precision highp float;
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
`,$m=`precision highp float;
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
`;var Qm=Object.defineProperty,Zm=(t,e,r,i)=>{for(var n=void 0,s=t.length-1,a;s>=0;s--)(a=t[s])&&(n=a(e,r,n)||n);return n&&Qm(e,r,n),n};const Jm={..._s,pointSize:1,radianceScale:1,background:!0};class ef extends Ts{constructor(e){const{pointSize:r,radianceScale:i,background:n,...s}={...Jm,...e};super({name:"StarsMaterial",glslVersion:Lr,vertexShader:kt($m,{parameters:cr}),fragmentShader:kt(Xm,{parameters:cr,functions:vs}),...s,uniforms:{projectionMatrix:new I(new Q),modelViewMatrix:new I(new Q),viewMatrix:new I(new Q),matrixWorld:new I(new Q),cameraFar:new I(0),pointSize:new I(0),magnitudeRange:new I(new It(-2,8)),radianceScale:new I(i),...s.uniforms},defines:{PERSPECTIVE_CAMERA:"1"}}),this.pointSize=r,this.background=n}onBeforeRender(e,r,i,n,s,a){super.onBeforeRender(e,r,i,n,s,a);const o=this.uniforms;o.projectionMatrix.value.copy(i.projectionMatrix),o.modelViewMatrix.value.copy(i.modelViewMatrix),o.viewMatrix.value.copy(i.matrixWorldInverse),o.matrixWorld.value.copy(s.matrixWorld),o.cameraFar.value=i.far,o.pointSize.value=this.pointSize*e.getPixelRatio();const c=i.isPerspectiveCamera===!0;this.defines.PERSPECTIVE_CAMERA!=null!==c&&(c?this.defines.PERSPECTIVE_CAMERA="1":delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}get magnitudeRange(){return this.uniforms.magnitudeRange.value}get radianceScale(){return this.uniforms.radianceScale.value}set radianceScale(e){this.uniforms.radianceScale.value=e}}Zm([Le("BACKGROUND")],ef.prototype,"background");const Wa=new ke("#fff2d8"),Ga=1e-8,wn=3e4,ja=-1e3,Ya=1e7,tf=5e6,rf=8e6,Ur=t=>Number.isFinite(t.x)&&Number.isFinite(t.y)&&Number.isFinite(t.z),qa=t=>!Number.isFinite(t.longitude)||Math.abs(t.longitude)>180?"longitude must be a finite value in degrees within [-180, 180]":!Number.isFinite(t.latitude)||Math.abs(t.latitude)>90?"latitude must be a finite value in degrees within [-90, 90]":!Number.isFinite(t.altitudeMeters)||t.altitudeMeters<ja||t.altitudeMeters>Ya?`altitudeMeters must be within [${ja}, ${Ya}]`:null,nf=(t,e,r)=>{if(!Number.isFinite(t.getTime()))return"instant must be a valid Date";const i=qa(e);if(i)return`observer ${i}`;if(!r)return null;const n=qa(r.observer);return n?`sky reference observer ${n}`:Ur(r.scenePosition)?null:"sky reference scenePosition must contain finite metre coordinates"},Tc=t=>{if(!Ur(t.directionToSunECEF))return"sun direction contains a non-finite component";if(Math.abs(t.directionToSunECEF.length()-1)>1e-6)return"sun direction is not normalized";if(!t.ecefToSceneMatrix.elements.every(Number.isFinite))return"ECEF-to-scene matrix contains a non-finite component";const e=t.ecefToSceneMatrix.elements,r=[new _(e[0],e[4],e[8]),new _(e[1],e[5],e[9]),new _(e[2],e[6],e[10])];if(r.some(s=>Math.abs(s.length()-1)>1e-6)||Math.abs(r[0].dot(r[1]))>1e-6||Math.abs(r[0].dot(r[2]))>1e-6||Math.abs(r[1].dot(r[2]))>1e-6||Math.abs(e[3])>1e-12||Math.abs(e[7])>1e-12||Math.abs(e[11])>1e-12||Math.abs(e[12])>1e-12||Math.abs(e[13])>1e-12||Math.abs(e[14])>1e-12||Math.abs(e[15]-1)>1e-12)return"ECEF-to-scene matrix is not an affine orthonormal rotation";const i=t.ecefToSceneMatrix.determinant();if(!Number.isFinite(i)||Math.abs(i-1)>1e-6)return"ECEF-to-scene matrix is not a proper orthonormal rotation";if(!Ur(t.ellipsoidCenterECEF))return"ellipsoid center contains a non-finite component";const n=t.ellipsoidCenterECEF.length();return n<tf||n>rf?"ellipsoid center is outside the plausible WGS84 distance range":null},sf=t=>{var r;const e=Tc(t.skyFrame);return e||(Ur(t.directionToSun)?Math.abs(t.directionToSun.length()-1)>1e-6?"scene sun direction is not normalized":![t.color.r,t.color.g,t.color.b].every(Number.isFinite)||![t.radiance.r,t.radiance.g,t.radiance.b].every(Number.isFinite)||!Number.isFinite(t.relativeIntensity)||t.relativeIntensity<0||t.relativeIntensity>1||!Number.isFinite(t.azimuthDegrees)||!Number.isFinite(t.elevationDegrees)?"sunlight color, intensity, or angles contain invalid values":(r=t.skyIrradianceCoefficients)!=null&&r.some(i=>!Ur(i))?"sky irradiance contains a non-finite coefficient":null:"scene sun direction contains a non-finite component")},xn={useTransmittanceLut:!0,useIrradianceLut:!0},af=({east:t,north:e,up:r})=>new Q().set(t.x,t.y,t.z,0,r.x,r.y,r.z,0,-e.x,-e.y,-e.z,0,0,0,0,1);function bs({longitude:t,latitude:e,altitudeMeters:r}){const i=new zo(Xn(t),Xn(e),r).toECEF(),n=new _,s=new _,a=new _;return dt.WGS84.getEastNorthUpVectors(i,n,s,a),{observerECEF:i,east:n,north:s,up:a}}const Mc=(t,{east:e,north:r,up:i},n)=>n.set(t.dot(e),t.dot(i),-t.dot(r)).normalize(),bc=(t,e,r)=>{const i=r?bs(r.observer):e,n=af(i);r!=null&&r.sceneFromLocal&&n.premultiply(r.sceneFromLocal);const s=n.clone().invert(),a=((r==null?void 0:r.scenePosition)??new _).clone().applyMatrix4(s).sub(i.observerECEF);return{directionToSunECEF:t.clone(),ecefToSceneMatrix:n,ellipsoidCenterECEF:a}},of=(t,e,{observerECEF:r,east:i,north:n,up:s})=>t!=null&&t.irradianceTexture?(t.ellipsoidMatrix.set(i.x,i.y,i.z,0,s.x,s.y,s.z,0,-n.x,-n.y,-n.z,0,0,0,0,1),t.ellipsoidCenter.copy(r).negate(),t.sunDirection.copy(e),t.position.set(0,0,0),t.updateMatrixWorld(!0),t.update(),t.sh.coefficients.map(a=>a.clone())):null,Rc=t=>{const e=Js(Math.asin(je(t.y,-1,1)));return{azimuthDegrees:(Js(Math.atan2(t.x,-t.z))+360)%360,elevationDegrees:e}},cf=(t,e)=>{const r=bs(e.observer),i=Mc(t.skyFrame.directionToSunECEF,r,new _);return e.sceneFromLocal&&i.transformDirection(e.sceneFromLocal),{...t,directionToSun:i,...Rc(i),skyFrame:bc(t.skyFrame.directionToSunECEF,r,e)}},lf=(t,e,r,i=null,n)=>{const s=bs(e),{observerECEF:a,up:o}=s,c=new _(...ul(t)),l=Mc(c,s,new _);n!=null&&n.sceneFromLocal&&l.transformDirection(n.sceneFromLocal);const u=bc(c,s,n),d=of(i,c,s),{azimuthDegrees:f,elevationDegrees:p}=Rc(l);if(!r){const R=Math.sqrt(je(l.y,0,1));return{directionToSun:l,color:Wa.clone(),relativeIntensity:R,radiance:Wa.clone().multiplyScalar(R),atmosphericTransmittanceReady:!1,atmosphericIrradianceReady:d!==null,skyIrradianceCoefficients:d,azimuthDegrees:f,elevationDegrees:p,skyFrame:u}}const h=Va(r,a,c,new ke,{ellipsoid:dt.WGS84,correctAltitude:!0,photometric:!0}),v=Va(r,a,o,new ke,{ellipsoid:dt.WGS84,correctAltitude:!0,photometric:!0}),y=Math.max(h.r,h.g,h.b,0),g=Math.max(v.r,v.g,v.b,Ga),T=y>Ga?h.clone().multiplyScalar(1/y):new ke(0,0,0);return{directionToSun:l,color:T,relativeIntensity:je(y/g,0,1),radiance:h,atmosphericTransmittanceReady:!0,atmosphericIrradianceReady:d!==null,skyIrradianceCoefficients:d,azimuthDegrees:f,elevationDegrees:p,skyFrame:u}};class uf{transmittanceTexture=null;irradianceTexture=null;scatteringTexture=null;skyLightProbe=new Gm({ellipsoid:dt.WGS84,correctAltitude:!0,photometric:!0});transmittanceLoading=!1;irradianceLoading=!1;scatteringLoading=!1;transmittanceRetryAt=0;irradianceRetryAt=0;scatteringRetryAt=0;disposed=!1;get ready(){return this.transmittanceTexture!==null&&this.irradianceTexture!==null}get skyReady(){return this.skyTextures!==null}get skyTextures(){return!this.transmittanceTexture||!this.irradianceTexture||!this.scatteringTexture?null:{transmittanceTexture:this.transmittanceTexture,irradianceTexture:this.irradianceTexture,scatteringTexture:this.scatteringTexture}}get isSkyLoading(){return this.transmittanceLoading||this.irradianceLoading||this.scatteringLoading}isLoadingFor(e=xn){return e.useTransmittanceLut&&this.transmittanceLoading||e.useIrradianceLut&&this.irradianceLoading}ensure(e,r=xn){if(this.disposed)return;const i=()=>{this.isLoadingFor(r)||e()};r.useTransmittanceLut&&this.ensureTransmittance(i),r.useIrradianceLut&&this.ensureIrradiance(i)}ensureSky(e){if(this.disposed||this.skyReady)return;let r=!1;const i=()=>{!r&&!this.isSkyLoading&&(r=!0,e())};this.ensureTransmittance(i),this.ensureIrradiance(i),this.ensureScattering(i)}ensureTransmittance(e){this.transmittanceTexture||this.transmittanceLoading||Date.now()<this.transmittanceRetryAt||(this.transmittanceLoading=!0,Fa(pn,{width:zi,height:Vi}).load(`${gn}/transmittance.bin`,r=>{if(this.transmittanceLoading=!1,this.disposed){r.dispose();return}this.transmittanceRetryAt=0,this.transmittanceTexture=r,e()},void 0,r=>{this.transmittanceLoading=!1,this.disposed||(this.transmittanceRetryAt=Date.now()+wn,console.error("[SHADOW] Takram transmittance LUT failed",r),e())}))}ensureIrradiance(e){this.irradianceTexture||this.irradianceLoading||Date.now()<this.irradianceRetryAt||(this.irradianceLoading=!0,Fa(pn,{width:Hi,height:ki}).load(`${gn}/irradiance.bin`,r=>{if(this.irradianceLoading=!1,this.disposed){r.dispose();return}this.irradianceRetryAt=0,this.irradianceTexture=r,this.skyLightProbe.irradianceTexture=r,e()},void 0,r=>{this.irradianceLoading=!1,this.disposed||(this.irradianceRetryAt=Date.now()+wn,console.error("[SHADOW] Takram irradiance LUT failed",r),e())}))}ensureScattering(e){this.scatteringTexture||this.scatteringLoading||Date.now()<this.scatteringRetryAt||(this.scatteringLoading=!0,xh(pn,{width:rm,height:im,depth:nm}).load(`${gn}/scattering.bin`,r=>{if(this.scatteringLoading=!1,this.disposed){r.dispose();return}this.scatteringRetryAt=0,this.scatteringTexture=r,e()},void 0,r=>{this.scatteringLoading=!1,this.disposed||(this.scatteringRetryAt=Date.now()+wn,console.error("[SHADOW] Takram scattering LUT failed",r),e())}))}evaluate(e,r,i=xn,n){return lf(e,r,i.useTransmittanceLut?this.transmittanceTexture:null,i.useIrradianceLut?this.skyLightProbe:null,n)}dispose(){var e,r,i;this.disposed||(this.disposed=!0,this.transmittanceLoading=!1,this.irradianceLoading=!1,this.scatteringLoading=!1,this.transmittanceRetryAt=0,this.irradianceRetryAt=0,this.scatteringRetryAt=0,(e=this.transmittanceTexture)==null||e.dispose(),(r=this.irradianceTexture)==null||r.dispose(),(i=this.scatteringTexture)==null||i.dispose(),this.transmittanceTexture=null,this.irradianceTexture=null,this.scatteringTexture=null,this.skyLightProbe.irradianceTexture=null,this.skyLightProbe.sh.zero())}}const df="shadow-simulation-atmospheric-sky",qr=2,vi="carmaOutputToSrgb",_n="carmaDisplayExposure",hf=new _;class mf extends Ms{observerScenePosition=new _;hasObserverScenePosition=!1;viewCamera=null;copyCameraSettings(e){if(super.copyCameraSettings(e),!this.hasObserverScenePosition)return;const r=this.uniforms;if(r.cameraPosition.value.copy(this.observerScenePosition),!this.correctAltitude)return;const i=hf.copy(this.observerScenePosition).applyMatrix4(r.inverseEllipsoidMatrix.value).sub(r.ellipsoidCenter.value);Wi(i,this.atmosphere.bottomRadius,this.ellipsoid,r.altitudeCorrection.value)}onBeforeRender(e,r,i,n,s,a){super.onBeforeRender(e,r,this.viewCamera??i,n,s,a)}}const ff=t=>{t.uniforms.toneMappingExposure=new I(1),t.uniforms[vi]=new I(!1),t.uniforms[_n]=new I(qr),t.fragmentShader=t.fragmentShader.replace("precision highp sampler3D;",`precision highp sampler3D;

uniform bool ${vi};
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
  }`).replace("outputColor.a = 1.0;",`outputColor.rgb *= ${_n};
  outputColor.a = 1.0;
  if (${vi}) {
    // SkyMaterial is raw GLSL: match terrain's AgX on the display target.
    // Offscreen samples stay linear HDR until the shared final composite.
    outputColor.rgb = AgXToneMapping(outputColor.rgb);
    outputColor = carmaLinearToSrgb(outputColor);
  }`)},pf=t=>{const e=new mf({groundAlbedo:t,moon:!1,photometric:!0,side:Eo,sun:!0});ff(e),e.depthTest=!1,e.depthWrite=!1;const r=new Mo;r.setAttribute("position",new dl([-1,-1,0,3,-1,0,-1,3,0],3));const i=new Hr(r,e);return i.name=df,i.visible=!1,i.frustumCulled=!1,i.renderOrder=-100,i.castShadow=!1,i.receiveShadow=!1,i.onBeforeRender=n=>{e.uniforms.toneMappingExposure.value=n.toneMappingExposure,e.uniforms[vi].value=n.getRenderTarget()===null},{mesh:i,update(n,s){return s?Tc(n)?!1:(i.visible=!0,e.irradianceTexture=s.irradianceTexture,e.scatteringTexture=s.scatteringTexture,e.transmittanceTexture=s.transmittanceTexture,e.sunDirection.copy(n.directionToSunECEF),e.ellipsoidCenter.copy(n.ellipsoidCenterECEF),e.ellipsoidMatrix.copy(n.ecefToSceneMatrix),!0):(i.visible=!1,!1)},updateViewCamera(n){e.viewCamera=n},updateObserverScenePosition(n){e.observerScenePosition.copy(n),e.hasObserverScenePosition=!0},updateGroundAlbedo(n){e.groundAlbedo.copy(n)},dispose(){r.dispose(),e.dispose()}}},gf=(t,e,r,i)=>{if(!t)return e;const n=i+t.guardMetersX,s=i+t.guardMetersY,a=f=>r.left-n>=f.left&&r.right+n<=f.right&&r.bottom-s>=f.bottom&&r.top+s<=f.top;if(a(t))return t;const o=t.right-t.left,c=t.top-t.bottom,l=Math.round((r.left+r.right)/2/t.metersPerTexelX)*t.metersPerTexelX,u=Math.round((r.bottom+r.top)/2/t.metersPerTexelY)*t.metersPerTexelY,d={...t,left:l-o/2,right:l+o/2,bottom:u-c/2,top:u+c/2};return a(d)?d:e},vf=t=>{const e=t.receiverTexelMeters!==void 0&&Number.isFinite(t.receiverTexelMeters)&&t.receiverTexelMeters>0?t.receiverTexelMeters:t.metersPerTexel,r=je(e*1.2/Math.max(.2,t.elevationSine),.05,8),i=Math.max(t.depthRangeMeters,1),n=-je(e*4/i,Number.EPSILON,.01),s=t.maxReceiverBiasMeters!==void 0&&Number.isFinite(t.maxReceiverBiasMeters)?Math.max(0,t.maxReceiverBiasMeters):1/0,a=t.receiverBiasMeters!==void 0&&Number.isFinite(t.receiverBiasMeters)?Math.max(0,t.receiverBiasMeters):void 0;return{bias:Math.max(a===void 0?n:-a/i,-s/i),normalBias:Math.min(a??r,s)}},yf=(t,e)=>{const r=t.shadow,i=r.camera,n=r.updateMatrices,s=i.matrixAutoUpdate,a=i.matrixWorldAutoUpdate,o=new Q,c=new Q,l=new Q,u=new Q,d=new _,f=new _(0,1,0);return r.updateMatrices=function(p){i.matrixAutoUpdate=s,i.matrixWorldAutoUpdate=a,n.call(this,p);const h=t.parent;p!==t||!h||!e()||(h.updateWorldMatrix(!0,!1),u.copy(h.matrixWorld).invert(),t.target.getWorldPosition(d).applyMatrix4(u),c.lookAt(t.position,d,f).setPosition(t.position),o.copy(i.matrixWorld),i.matrixWorld.multiplyMatrices(h.matrixWorld,c),i.matrix.copy(i.matrixWorld),i.matrixWorldInverse.copy(i.matrixWorld).invert(),i.position.setFromMatrixPosition(i.matrixWorld),i.matrixAutoUpdate=!1,i.matrixWorldAutoUpdate=!1,r.matrix.multiply(o).multiply(i.matrixWorldInverse),l.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),r.getFrustum().setFromProjectionMatrix(l,i.coordinateSystem,i.reversedDepth))},()=>{r.updateMatrices=n,i.matrixAutoUpdate=s,i.matrixWorldAutoUpdate=a}},Sf=2048,Ec=8192,Ka=2,Xa=50,wf=1e4,xf=.04,Tn=25,_f=.05,Tf=300,Mf=new _(0,1,0),$a=(t,e,r=new Q)=>r.lookAt(t,e,Mf).setPosition(t).invert(),bf=(t,e)=>{if(t.length===0)return null;const r=t.map(h=>h.clone().applyMatrix4(e)),i=Math.min(...r.map(({x:h})=>h)),n=Math.max(...r.map(({x:h})=>h)),s=Math.min(...r.map(({y:h})=>h)),a=Math.max(...r.map(({y:h})=>h)),o=r.map(({z:h})=>-h),c=Math.max(0,Math.min(...o)),l=Math.max(c+.01,Math.max(...o)),u=(i+n)/2,d=(s+a)/2,f=Math.max((n-i)/2,Ka/2),p=Math.max((a-s)/2,Ka/2);return{left:u-f,right:u+f,bottom:d-p,top:d+p,near:c,far:l}},Rf=(t,e=Ec)=>t>=16?e:Math.min(e,Sf*Math.sqrt(t));class Ac{constructor(e){this.host=e,this.lights=Array.from({length:1},()=>{const r=new hl(16777215,0);return r.name="shadow-simulation-sun",r.visible=!1,r.castShadow=!1,r.shadow.camera.name="shadow-simulation-shadow-camera",r.shadow.autoUpdate=!1,r.shadow.radius=0,r.shadow.bias=0,r.shadow.normalBias=_f,e.add(r,r.target),this.restoreShadowCameras.push(yf(r,()=>this.mountedShadowCamera)),r})}lights;softSun=!1;lastSoftFit=null;maxShadowMapSize=Ec;mapAllocation=null;disposed=!1;mountedShadowCamera=!1;restoreShadowCameras=[];retainedRaster=null;setMaxShadowMapSize(e){if(!Number.isFinite(e)||e<=0)return;const r=Math.max(256,Math.floor(e));this.disposed||this.maxShadowMapSize===r||(this.maxShadowMapSize=r)}setSoftSun(e){this.disposed||this.softSun===e||(e||this.restoreSunDiscCenter(),this.softSun=e,e||(this.lastSoftFit=null))}applySunDiscSample(e,r,i=!0){if(this.disposed)return;const n=this.lastSoftFit;if(!n)return;const s=Math.max(1,Math.floor(r)),a=(Math.floor(e)%s+s)%s,{angularRadius:o,tangentA:c,tangentB:l}=ru(a,s),u=n.tangentA.clone().multiplyScalar(c).addScaledVector(n.tangentB,l).normalize(),d=n.directionToSun.clone().multiplyScalar(Math.cos(o)).addScaledVector(u,Math.sin(o)).normalize(),f=this.lights[0],[p,h]=i&&s>1?iu(a):[0,0],v=f.shadow.camera,y=n.rasterBounds,g=p*(y.right-y.left)/f.shadow.mapSize.x,T=h*(y.top-y.bottom)/f.shadow.mapSize.y;v.left=y.left+g,v.right=y.right+g,v.bottom=y.bottom+T,v.top=y.top+T,v.updateProjectionMatrix(),f.position.copy(d).multiplyScalar(n.lightDistance).add(n.anchorPosition),f.updateMatrixWorld(!0),f.target.updateMatrixWorld(!0),f.shadow.updateMatrices(f),f.shadow.needsUpdate=!0}restoreSunDiscCenter(){if(this.disposed||!this.lastSoftFit)return;const e=this.lastSoftFit,r=this.lights[0],i=r.shadow.camera;i.left=e.rasterBounds.left,i.right=e.rasterBounds.right,i.bottom=e.rasterBounds.bottom,i.top=e.rasterBounds.top,i.updateProjectionMatrix(),r.position.copy(e.directionToSun).multiplyScalar(e.lightDistance).add(e.anchorPosition),r.updateMatrixWorld(!0),r.target.updateMatrixWorld(!0),r.shadow.updateMatrices(r),r.shadow.needsUpdate=!0}invalidate(){this.lights[0].shadow.needsUpdate=!0}update({receiverWorldPoints:e,receiverAnchorWorldPosition:r,minimumElevationMeters:i,maximumElevationMeters:n,directionToSun:s,color:a,intensity:o,shadowIntensity:c,quality:l,groundTexelFit:u=!0,stabilizeMapSize:d=!1,mapTexelBudget:f,casterMapTexelBudget:p,groundTexelTargetMeters:h,maxReceiverBiasMeters:v,receiverBiasMeters:y,receiverTexelMeters:g,rasterKey:T,mountedShadowCamera:R=!1}){var Dt,Ce;if(this.disposed)return null;if(this.mountedShadowCamera=R,e.length===0){for(const Ie of this.lights)Ie.visible=!1,Ie.castShadow=!1,Ie.intensity=0,Ie.shadow.needsUpdate=!1;return null}const C=s.clone().normalize(),b=Math.max(0,n-i),P=Math.max(xf,C.y),A=je((b+Tf)/P+Xa,Xa,wf),E=A+b+Tn,B=Rf(l,this.maxShadowMapSize),O=ua(f,Math.floor(B)**2,this.maxShadowMapSize),j=Math.floor(Math.sqrt(O)),K=new ke(a),N=r.clone(),oe=e.reduce((Ie,dr)=>Math.max(Ie,dr.distanceTo(r)),0),D=oe+E,V=this.lights[0];V.position.copy(C).multiplyScalar(D).add(N),V.target.position.copy(N),V.updateMatrixWorld(!0),V.target.updateMatrixWorld(!0),V.shadow.updateMatrices(V);const X=bf(e,$a(V.position,V.target.position));if(!X)return null;const Y=eu(oe,C.y,this.softSun?Br:0),de=this.softSun?Math.max(Math.tan(Br)*D,Y.planarMeters):0,ce={maxMapSize:this.maxShadowMapSize,elevationSine:C.y,sunDiscGuardMeters:de,groundTexelFit:u,groundTexelTargetMeters:h},Te=da(X,{...ce,mapSize:j,mapTexelBudget:O,mapDimensions:d&&((Dt=this.mapAllocation)==null?void 0:Dt.texelBudget)===O&&this.mapAllocation.maxMapSize===this.maxShadowMapSize&&this.mapAllocation.groundTexelFit===u?this.mapAllocation:void 0}),L=JSON.stringify([T,O,this.maxShadowMapSize,u,h,this.softSun]),Z=this.retainedRaster,Ae=T!==void 0&&(Z==null?void 0:Z.key)===L&&Z.anchor.distanceToSquared(N)<1e-18&&Z.direction.distanceToSquared(C)<1e-18,J=gf(Ae?Z.fit:void 0,Te,X,de);this.retainedRaster=T===void 0?null:{key:L,anchor:N.clone(),direction:C.clone(),fit:J};const Tt=ua(p,O,this.maxShadowMapSize),mt=p===void 0?J:da(X,{...ce,mapSize:Math.floor(Math.sqrt(Tt)),mapTexelBudget:Tt});this.mapAllocation={width:J.mapWidth,height:J.mapHeight,texelBudget:O,maxMapSize:this.maxShadowMapSize,groundTexelFit:u};const ge=Math.max(J.metersPerTexelX,J.metersPerTexelY),Ke=Math.max(J.guardMetersX,J.guardMetersY),Me={left:J.left,right:J.right,bottom:J.bottom,top:J.top,near:Math.max(.01,X.near-Y.depthMeters-A-b-Tn),far:Math.max(1,X.far+Y.depthMeters+b+Tn)};Me.far=Math.max(Me.near+1,Me.far);const U=new _;Math.abs(C.y)>.99?U.set(1,0,0):U.crossVectors(new _(0,1,0),C).normalize();const Xe=new _().crossVectors(C,U),le=this.lights[0];le.visible=!0,le.castShadow=!0,le.intensity=o,le.color.copy(K),le.shadow.intensity=je(c,0,1),le.shadow.needsUpdate=!0,(le.shadow.mapSize.x!==J.mapWidth||le.shadow.mapSize.y!==J.mapHeight)&&((Ce=le.shadow.map)==null||Ce.dispose(),le.shadow.map=null,le.shadow.mapSize.set(J.mapWidth,J.mapHeight)),le.position.copy(C).multiplyScalar(D).add(N),le.target.position.copy(N);const w=vf({metersPerTexel:ge,receiverTexelMeters:g,elevationSine:C.y,depthRangeMeters:Me.far-Me.near,maxReceiverBiasMeters:v,receiverBiasMeters:y});le.shadow.bias=w.bias,le.shadow.normalBias=w.normalBias;const ft=le.shadow.camera;ft.left=Me.left,ft.right=Me.right,ft.bottom=Me.bottom,ft.top=Me.top,ft.near=Me.near,ft.far=Me.far,ft.updateProjectionMatrix(),le.updateMatrixWorld(!0),le.target.updateMatrixWorld(!0),le.shadow.updateMatrices(le),this.lastSoftFit=this.softSun?{directionToSun:C.clone(),tangentA:U,tangentB:Xe,anchorPosition:N.clone(),lightDistance:D,rasterBounds:Me}:null;const ze=V.shadow.camera;return{sampleCount:1,totalShadowTexels:J.mapWidth*J.mapHeight,mapTexelBudget:h===void 0?O:void 0,casterReachMeters:A,casterMetersPerTexel:[mt.metersPerTexelX,mt.metersPerTexelY],camera:{receiverPointCount:e.length,receiverLeftMeters:X.left,receiverRightMeters:X.right,receiverBottomMeters:X.bottom,receiverTopMeters:X.top,leftMeters:ze.left,rightMeters:ze.right,bottomMeters:ze.bottom,topMeters:ze.top,nearMeters:ze.near,farMeters:ze.far,shadowMapWidth:J.mapWidth,shadowMapHeight:J.mapHeight,viewMatrixElements:[...$a(V.position,V.target.position).elements],projectionMatrixElements:[...ze.projectionMatrix.elements],guardMeters:Ke,metersPerTexel:ge,metersPerTexelX:J.metersPerTexelX,metersPerTexelY:J.metersPerTexelY,groundTexelWidthMeters:J.groundTexelWidthMeters,groundTexelHeightMeters:J.groundTexelHeightMeters,groundTexelFitLimited:J.groundTexelFitLimited,groundTexelFit:u,groundTexelTargetMeters:h}}}dispose(){var e;if(!this.disposed){this.disposed=!0;for(const r of this.restoreShadowCameras)r();for(const r of this.lights)(e=r.shadow.map)==null||e.dispose(),this.host.remove(r.target,r)}}}const At=t=>{var e;(e=t.depthTexture)==null||e.dispose(),t.dispose()},Ft=(t,e)=>t*e*8;class Ef{entries=new Map;retainedBytes=0;capacityBytes=0;activeVariantIds=null;hits=0;misses=0;get bytes(){return this.retainedBytes}get count(){return this.entries.size}get availableBytes(){return Math.max(0,this.capacityBytes-this.retainedBytes)}has(e){return this.entries.has(e)}setActiveVariants(e){this.activeVariantIds=e}setBudget(e,r){this.capacityBytes=Math.max(0,e-r),this.evictInactive(0);for(const i of this.entries.keys()){if(this.retainedBytes<=this.capacityBytes)break;this.remove(i)}}get(e){const r=this.entries.get(e);return r?this.hits+=1:this.misses+=1,r==null?void 0:r.target}admit(e,r,i,n=r,s={}){var o;if(this.entries.has(e))return!1;const a=Ft(i.width,i.height);return a>this.capacityBytes||(s.evictInactive!==!1&&((o=this.activeVariantIds)!=null&&o.has(n))&&this.evictInactive(a),this.retainedBytes+a>this.capacityBytes)?!1:(this.entries.set(e,{pageId:r,variantId:n,target:i,bytes:a}),this.retainedBytes+=a,!0)}invalidate(e){for(const[r,i]of this.entries)i.pageId===e&&this.remove(r)}clear(){for(const e of this.entries.keys())this.remove(e)}evictInactive(e){if(this.activeVariantIds)for(const[r,i]of this.entries){if(this.retainedBytes+e<=this.capacityBytes)break;this.activeVariantIds.has(i.variantId)||this.remove(r)}}remove(e){const r=this.entries.get(e);r&&(this.entries.delete(e),this.retainedBytes-=r.bytes,At(r.target))}}const Af=16,Mn=4;class Cf{constructor(e,r,i,n=4096,s=e){if(this.scene=e,this.renderer=r,this.memoryBudgetBytes=i,this.host=s,!Number.isFinite(i)||!(i>=Ft(64,64)))throw new RangeError("Shadow page budget must fit at least one 64-square page");if(!Number.isFinite(n)||n<64)throw new RangeError("Maximum shadow page size must be finite and at least 64");if(r.shadowMap.type!==rn)throw new Error("Tiled shadow reference requires the shared PCF shadow path");this.maxMapSize=Math.max(64,2**Math.floor(Math.log2(Math.min(n,r.capabilities.maxTextureSize,Math.sqrt(i/8)))))}pages=new Map;activePageIds=new Set;activeSamples=1;prewarmPageIds=new Set;prewarmSamples=1;prewarmRevision=0;prewarmSink=null;prewarmCamera=new ml([]);cache=new Ef;scratchBytes=0;depthRenders=0;colorPasses=0;disposed=!1;streamedTarget=null;maxMapSize;setView(e,r,i,n,s,a){if(this.disposed)return;if(this.clearPrewarmView(),![s.directionToSun.x,s.directionToSun.y,s.directionToSun.z].every(Number.isFinite)||s.directionToSun.lengthSq()===0||s.directionToSun.y<=0)throw new RangeError("Tiled shadow reference requires a finite sun direction above the horizon");const o=wu(e,r,i,n);this.activePageIds=new Set(o.map(({id:l})=>l));for(const l of o)this.configurePage(l,s,a);const c=Math.max(32,this.activePageIds.size*2);for(const[l,u]of this.pages){if(this.pages.size<=c)break;this.activePageIds.has(l)||(this.cache.invalidate(l),u.controller.dispose(),this.pages.delete(l))}this.updateActiveVariants(),this.scratchBytes=Math.max(0,...Array.from(this.activePageIds,l=>{const u=this.pages.get(l);return Ft(u.width,u.height)})),this.streamedTarget&&Ft(this.streamedTarget.width,this.streamedTarget.height)>this.scratchBytes&&(At(this.streamedTarget),this.streamedTarget=null),this.cache.setBudget(this.memoryBudgetBytes,this.reservedBytes)}updatePresentation(e){if(this.disposed)return;e.updateMatrixWorld(!0);const r=new Q().multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i=new kr().setFromProjectionMatrix(r),n=new Set;for(const[s,a]of this.pages)i.intersectsBox(a.receiverBounds)&&(a.screenBounds.copy(Fo(a.receiverBounds,r)),n.add(s));this.activePageIds=n,this.updateActiveVariants()}get reservedBytes(){return this.scratchBytes+(this.prewarmSink?Mn:0)}setPrewarmView(e,r,i,n,s,a){if(this.clearPrewarmView(),this.disposed)return;if(!Number.isSafeInteger(a)||a<1||a>4096||!(n>0&&Number.isFinite(n))||![i.x,i.y].every(l=>l>0&&Number.isFinite(l))||!s.directionToSun.toArray().every(Number.isFinite)||s.directionToSun.y<=0)throw new RangeError("Invalid shadow prewarm view");const o=new Q().multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),c=new Set;for(const{id:l,bounds:u}of e){if(c.has(l)||u.isEmpty()||![...u.min.toArray(),...u.max.toArray()].every(Number.isFinite))throw new RangeError("Prewarm cells require unique IDs and finite bounds");c.add(l)}this.prewarmSamples=a;for(const l of e){if(this.prewarmPageIds.size>=Af)break;this.activePageIds.has(l.id)||!this.pages.has(l.id)&&this.pages.size>=Math.max(32,this.activePageIds.size*2)||(this.configurePage({...l,screenBounds:new ie,groundTexelTargetMeters:Math.max(1e-9,2*n/Bo(l.bounds,o,i))},s),this.prewarmPageIds.add(l.id))}}clearPrewarmView(){this.prewarmPageIds.clear(),this.prewarmRevision+=1}get prewarmPages(){const e=[...this.prewarmPageIds].map(i=>{const n=this.pages.get(i),s=this.countPrewarmSamples(i,n);return{id:i,receiverBounds:n.receiverBounds.clone(),casterBounds:n.casterBounds.clone(),width:n.width,height:n.height,samples:this.prewarmSamples,cachedSamples:s,sampleBudget:s,limited:n.limited,canPrewarm:!1}});let r=this.cache.availableBytes-(this.prewarmSink?0:Mn);for(;r>0;){const i=e.filter(n=>n.sampleBudget<n.samples&&Ft(n.width,n.height)<=r).sort((n,s)=>n.sampleBudget-s.sampleBudget);if(i.length===0)break;for(const n of i){const s=Ft(n.width,n.height);s>r||(n.sampleBudget+=1,r-=s)}}return e.map(i=>({...i,canPrewarm:i.sampleBudget>i.cachedSamples}))}canPrewarm(e){return!this.disposed&&this.prewarmPages.some(r=>r.id===e&&r.canPrewarm)}countPrewarmSamples(e,r){const i=JSON.stringify([e,r.projectionKey,this.prewarmSamples]);let n=0;for(let s=0;s<this.prewarmSamples;s+=1)this.cache.has(JSON.stringify([i,s]))&&(n+=1);return n}prewarmNext(e,r,i={}){var v,y;const n=this.pages.get(r),s=!this.disposed&&this.prewarmPageIds.has(r)&&!!n,a=(g,T=!1)=>{var C;const R=s?this.countPrewarmSamples(r,n):0;return{pageId:r,rendered:g,cachedSamples:R,totalSamples:s?this.prewarmSamples:0,complete:s&&R===this.prewarmSamples,budgetLimited:T,aborted:((C=i.signal)==null?void 0:C.aborted)===!0}};if(!s||(v=i.signal)!=null&&v.aborted)return a(0);const o=this.prewarmRevision,c=n.contentRevision;if(this.renderer.shadowMap.type!==rn)throw new Error("Shadow prewarm requires the shared PCF shadow path");const l=JSON.stringify([r,n.projectionKey,this.prewarmSamples]);let u=0;for(;u<this.prewarmSamples&&this.cache.has(JSON.stringify([l,u]));)u+=1;if(u===this.prewarmSamples)return a(0);if(!this.canPrewarm(r)||Ft(n.width,n.height)+(this.prewarmSink?0:Mn)>this.cache.availableBytes)return a(0,!0);this.prewarmSink||(this.prewarmSink=new Ge(1,1,{depthBuffer:!1}),this.cache.setBudget(this.memoryBudgetBytes,this.reservedBytes));const f=n.controller.lights[0];this.prewarmSamples===1?n.controller.restoreSunDiscCenter():n.controller.applySunDiscSample(u,this.prewarmSamples),f.shadow.map=null,f.shadow.needsUpdate=!0;const p=f.visible;f.visible=!0,this.prewarmCamera.layers.mask=e.layers.mask,this.prewarmCamera.matrixAutoUpdate=!1,this.prewarmCamera.matrixWorldAutoUpdate=!1,this.prewarmCamera.matrixWorld.copy(e.matrixWorld),this.prewarmCamera.matrixWorldInverse.copy(e.matrixWorldInverse),this.prewarmCamera.projectionMatrix.copy(e.projectionMatrix);let h=0;try{this.renderPrewarmDepth(f);const g=f.shadow.map;g&&(h=1,this.depthRenders+=1,((y=i.signal)!=null&&y.aborted||o!==this.prewarmRevision||c!==n.contentRevision||!this.prewarmPageIds.has(r)||!this.cache.admit(JSON.stringify([l,u]),r,g,l,{evictInactive:!1}))&&At(g))}catch(g){throw f.shadow.map&&At(f.shadow.map),g}finally{f.visible=p,f.shadow.map=null}return a(h)}renderPrewarmDepth(e){const{renderer:r,scene:i}=this,n=r.getContext(),s=r.getRenderTarget(),a=r.getActiveCubeFace(),o=r.getActiveMipmapLevel(),c=r.getViewport(new ie),l=r.getScissor(new ie),u=r.getScissorTest(),d=n.getParameter(n.DRAW_FRAMEBUFFER_BINDING),f=n.getParameter(n.READ_FRAMEBUFFER_BINDING),p=new ie().fromArray(n.getParameter(n.VIEWPORT)),h=new ie().fromArray(n.getParameter(n.SCISSOR_BOX)),v=n.isEnabled(n.SCISSOR_TEST),y=n.isEnabled(n.DEPTH_TEST),g=n.getParameter(n.DEPTH_RANGE),T=n.getParameter(n.DEPTH_WRITEMASK),R=n.getParameter(n.DEPTH_FUNC),C=n.getParameter(n.DEPTH_CLEAR_VALUE),b=n.getParameter(n.COLOR_CLEAR_VALUE),P=n.getParameter(n.COLOR_WRITEMASK),A=r.clippingPlanes,E=r.autoClear,B=i.background,O=r.xr.enabled,j=r.shadowMap.enabled,K=r.shadowMap.autoUpdate,N=r.shadowMap.needsUpdate,oe=[];i.traverse(D=>{const V=D;V.isLight&&V.castShadow&&V!==e&&oe.push(V)});try{r.resetState(),r.autoClear=!1,r.xr.enabled=!1,r.shadowMap.enabled=!0,r.shadowMap.autoUpdate=!0;for(const D of oe)D.castShadow=!1;i.background=null,r.clippingPlanes=A,r.setRenderTarget(this.prewarmSink),n.depthRange(0,1),r.render(i,this.prewarmCamera)}finally{r.clippingPlanes=A,r.autoClear=E,r.xr.enabled=O,r.shadowMap.enabled=j,r.shadowMap.autoUpdate=K,r.shadowMap.needsUpdate=N;for(const D of oe)D.castShadow=!0;i.background=B,r.resetState(),r.setRenderTarget(s,a,o),r.setViewport(c),r.setScissor(l),r.setScissorTest(u),r.state.bindFramebuffer(n.DRAW_FRAMEBUFFER,d),r.state.bindFramebuffer(n.READ_FRAMEBUFFER,f),r.state.viewport(p),r.state.scissor(h),r.state.setScissorTest(v),y?r.state.enable(n.DEPTH_TEST):r.state.disable(n.DEPTH_TEST),n.depthRange(g[0],g[1]),n.depthMask(T),n.depthFunc(R),n.clearDepth(C),n.clearColor(b[0],b[1],b[2],b[3]),n.colorMask(P[0],P[1],P[2],P[3])}}configurePage(e,r,i){let n=this.pages.get(e.id);if(!n){const u=new Ac(this.host);u.setMaxShadowMapSize(this.maxMapSize),u.setSoftSun(!0),n={controller:u,projectionKey:"",lightingKey:"",presentationKey:"",corridor:new Ne,planes:[],width:0,height:0,limited:!1,screenBounds:e.screenBounds,receiverBounds:e.bounds.clone(),groundTexelTargetMeters:e.groundTexelTargetMeters,casterBounds:new Ne,contentRevision:0,casterRevision:null}}this.pages.delete(e.id),this.pages.set(e.id,n);const s=n.controller.update({...r,maxReceiverBiasMeters:i?i(e.bounds,e.groundTexelTargetMeters):r.maxReceiverBiasMeters,receiverWorldPoints:Vr(e.bounds),receiverAnchorWorldPosition:e.bounds.getCenter(new _),minimumElevationMeters:e.bounds.min.y,maximumElevationMeters:e.bounds.max.y,quality:4,groundTexelFit:!0,groundTexelTargetMeters:e.groundTexelTargetMeters});if(!s)return;const a=n.controller.lights[0];a.visible=!1;const o=s.camera,c=e.receiverObjectId===void 0?"spatial-partition-v1":"native-object-v1",l=JSON.stringify([c,o.viewMatrixElements,o.projectionMatrixElements,o.shadowMapWidth,o.shadowMapHeight,a.shadow.bias,a.shadow.normalBias,e.bounds.min,e.bounds.max]);n.projectionKey=l,n.lightingKey=JSON.stringify([r.directionToSun,r.shadowIntensity,e.bounds.min,e.bounds.max]),n.presentationKey=JSON.stringify([c,r.directionToSun,r.shadowIntensity,e.bounds.min.x,e.bounds.min.z,e.bounds.max.x,e.bounds.max.z]),n.receiverBounds.copy(e.bounds),n.receiverObjectId=e.receiverObjectId,n.groundTexelTargetMeters=e.groundTexelTargetMeters,n.screenBounds=e.screenBounds,n.width=o.shadowMapWidth,n.height=o.shadowMapHeight,n.limited=(o.groundTexelWidthMeters??1/0)>e.groundTexelTargetMeters*1.001||(o.groundTexelHeightMeters??1/0)>e.groundTexelTargetMeters*1.001,n.casterBounds.copy(xu(e.bounds,r.directionToSun,s.casterReachMeters+e.bounds.getSize(new _).length(),Br,o.guardMeters)),n.corridor.union(n.casterBounds),n.planes=[new ut(new _(1,0,0),-e.bounds.min.x),new ut(new _(-1,0,0),e.bounds.max.x),new ut(new _(0,0,1),-e.bounds.min.z),new ut(new _(0,0,-1),e.bounds.max.z)]}invalidateCasters(e){const r=e instanceof Ne?[e]:e,i=[];for(const[n,s]of this.pages)r.some(a=>s.corridor.intersectsBox(a))&&(s.contentRevision+=1,this.cache.invalidate(n),i.push(n));return i}setCasterRevision(e,r){const i=this.pages.get(e);return!i||r===null||i.casterRevision===r?!1:(i.casterRevision=r,i.contentRevision+=1,this.cache.invalidate(e),!0)}renderSample(e,r,i){this.renderSamples(e,this.activePageIds,r,i)}renderPageSample(e,r,i,n,s){return this.disposed||!this.activePageIds.has(r)?!1:this.renderSamples(e,[r],i,n,s)>0}renderPageColor(e,r){const i=this.pages.get(r);if(this.disposed||!i||!this.activePageIds.has(r))return!1;const{renderer:n,scene:s}=this,a=n.clippingPlanes,o=n.autoClear,c=s.background,l=n.shadowMap.autoUpdate,u=n.shadowMap.needsUpdate;n.autoClear=!1,n.shadowMap.autoUpdate=!1,n.shadowMap.needsUpdate=!1,n.clippingPlanes=[...a,...i.planes],s.background=null;try{const d=fa(s,i.receiverObjectId,n,e,"color-only");return d&&(this.colorPasses+=1),d}finally{n.clippingPlanes=a,n.autoClear=o,n.shadowMap.autoUpdate=l,n.shadowMap.needsUpdate=u,s.background=c}}get accumulationPages(){return[...this.activePageIds].map(e=>{const r=this.pages.get(e),i=r.controller.lights[0];return{id:e,receiverObjectId:r.receiverObjectId,contentKey:JSON.stringify([r.lightingKey,r.contentRevision]),casterRevision:r.casterRevision,presentationKey:r.presentationKey,revision:JSON.stringify([r.projectionKey,r.contentRevision,i.color.toArray(),i.intensity,i.shadow.intensity]),screenBounds:r.screenBounds.clone(),receiverBounds:r.receiverBounds.clone(),groundTexelTargetMeters:r.groundTexelTargetMeters}})}areCastersReady(e,r){const i=this.pages.get(e);return!!(i&&r(i.casterBounds))}getPageGeometry(e){const r=this.pages.get(e);return r?{casterBounds:r.casterBounds.clone(),receiverBounds:r.receiverBounds.clone(),width:r.width,height:r.height,projectionKey:r.projectionKey}:null}get supportsOpaqueAccumulation(){let e=!0;return this.scene.traverseVisible(r=>{const i=r;if(!(!i.isMesh||!i.receiveShadow))for(const n of Array.isArray(i.material)?i.material:[i.material])n.visible&&(n.transparent||!n.depthWrite||!n.depthTest)&&(e=!1)}),e}renderSamples(e,r,i,n,s){if(this.disposed)return 0;if(this.renderer.shadowMap.type!==rn)throw new Error("Shadow page cache must be recreated after changing the depth/filter format");if(!Number.isInteger(n)||n<1||!Number.isInteger(i)||i<0||i>=n)throw new RangeError("Shadow sample must lie within its finite-disc sequence");n!==this.activeSamples&&(this.activeSamples=n,this.updateActiveVariants());const{renderer:a,scene:o}=this,c=a.clippingPlanes,l=a.autoClear,u=o.background,d=a.getRenderTarget(),f=d==null?void 0:d.scissor.clone(),p=d==null?void 0:d.scissorTest;let h=0;a.autoClear=!1,o.background=null;try{for(const v of r){const y=this.pages.get(v),g=y.controller.lights[0];n===1?y.controller.restoreSunDiscCenter():y.controller.applySunDiscSample(i,n);const T=JSON.stringify([v,y.projectionKey,n]),R=JSON.stringify([T,i]),C=this.cache.get(R);if(!C&&this.streamedTarget&&(this.streamedTarget.width!==y.width||this.streamedTarget.height!==y.height)&&(At(this.streamedTarget),this.streamedTarget=null),g.shadow.map=C??this.streamedTarget,C||(this.streamedTarget=null),g.shadow.needsUpdate=!C,g.visible=!0,a.clippingPlanes=[...c,...y.planes],d){const{x:b,y:P,z:A,w:E}=s??y.screenBounds,B=Math.floor(b*d.width),O=Math.floor(P*d.height);d.scissor.set(B,O,Math.ceil((b+A)*d.width)-B,Math.ceil((P+E)*d.height)-O),d.scissorTest=!0,a.setRenderTarget(d)}try{if(fa(o,y.receiverObjectId,a,e)&&(this.colorPasses+=1,h+=1),!C&&g.shadow.map){this.depthRenders+=1;const P=g.shadow.map;this.cache.admit(R,v,P,T)||(this.streamedTarget=P)}}catch(b){throw!C&&g.shadow.map&&At(g.shadow.map),b}finally{g.visible=!1,g.shadow.map=null}}}finally{a.clippingPlanes=c,a.autoClear=l,o.background=u,d&&f&&(d.scissor.copy(f),d.scissorTest=p??!1,a.setRenderTarget(d))}return h}get stats(){const e=[...this.activePageIds].map(r=>this.pages.get(r));return{pages:e.length,cachedSamplePages:this.cache.count,cacheBytes:this.cache.bytes,scratchBytes:this.reservedBytes,hits:this.cache.hits,misses:this.cache.misses,depthRenders:this.depthRenders,colorPasses:this.colorPasses,limitedPages:e.filter(r=>r.limited).length,dimensions:e.map(r=>`${r.width}×${r.height}`)}}clearCache(){this.cache.clear();for(const e of this.pages.values())e.contentRevision+=1}updateActiveVariants(){this.cache.setActiveVariants(new Set([...this.activePageIds].flatMap(e=>[...new Set([1,this.activeSamples])].map(r=>JSON.stringify([e,this.pages.get(e).projectionKey,r])))))}get pageLevels(){return[...this.activePageIds].map(e=>{const r=this.pages.get(e);return{id:e,level:Math.max(0,Math.round(Math.log2(this.maxMapSize/Math.max(r.width,r.height)))),width:r.width,height:r.height}})}dispose(){var e;if(!this.disposed){this.disposed=!0,this.cache.clear(),this.streamedTarget&&At(this.streamedTarget),this.streamedTarget=null,(e=this.prewarmSink)==null||e.dispose(),this.prewarmSink=null,this.clearPrewarmView(),this.scratchBytes=0;for(const r of this.pages.values())r.controller.dispose();this.pages.clear(),this.activePageIds.clear()}}}const If=async({pages:t,signal:e,prepare:r,render:i,yieldToInput:n})=>{let s=0,a=0,o=0,c=!1;try{for(const l of t){if(e.aborted)break;if(l.cachedSamples>=l.samples){s+=1;continue}if(!l.canPrewarm){c=!0;continue}if(await n(e),e.aborted)break;const u=await r(l,e);try{if(e.aborted)break;if(!u.covered||!u.isCurrent()){a+=1;continue}const d=Math.min(l.samples,l.sampleBudget);d<l.samples&&(c=!0);for(let f=l.cachedSamples;f<d&&(await n(e),!(e.aborted||!u.isCurrent()));f+=1){const p=i(l.id,u.group,e);if(o+=p.rendered,p.complete){s+=1;break}if(p.budgetLimited){c=!0;break}if(p.aborted||!p.rendered)break}}finally{u.dispose()}}}catch(l){if(!e.aborted)throw l}return{offered:t.length,completed:s,skippedCoverage:a,renderedSamples:o,budgetLimited:c,aborted:e.aborted}},Df=t=>{const e=globalThis.scheduler;return e!=null&&e.postTask?e.postTask(()=>{},{priority:"background",delay:0,signal:t}):Promise.reject(new Error("Background scheduler unavailable"))},Pf=({getRequest:t})=>{let e=!1,r=null,i=null,n=!1;const s=()=>{n=!1,i==null||i.abort()},a=()=>{if(!e){if(i){n=!0;return}try{const o=globalThis.scheduler;if(typeof(o==null?void 0:o.postTask)!="function")return;const c=t();if(!c||c.key===r)return;r=c.key;const l=new AbortController;i=l;let u=!1;const d=()=>{if(i!==l||u)return;i=null;const f=n;n=!1,f&&a()};try{o.postTask(async()=>{if(e||l.signal.aborted)return;const f=t();if(!(!f||f.key!==c.key)){u=!0;try{await f.run(l.signal)}finally{u=!1,d()}}},{priority:"background",delay:150,signal:l.signal}).then(d,d)}catch{d()}}catch{}}};return{onSettled:a,cancel:s,dispose(){e=!0,s()}}},Cc=(t,e,r)=>JSON.stringify([t.matrixWorldInverse.elements,t.projectionMatrix.elements,e,r]),Of=(t,e)=>{if(!Number.isFinite(e)||e<t.length*8)throw new RangeError("Capture budget must fit at least one scalar/depth pixel per page");const r=[...t].sort((n,s)=>n.id<s.id?-1:n.id>s.id?1:0).map(({id:n,plan:s,screenArea:a})=>({id:n,plan:s,width:s.width,height:s.height,weight:2**Math.floor(Math.log2(Math.max(1/65536,Math.min(1,a))))}));let i=r.reduce((n,s)=>n+s.width*s.height,0);for(;i*8>e;){let n;for(const a of r)a.width===1&&a.height===1||(!n||a.width*a.height/a.weight>n.width*n.height/n.weight)&&(n=a);if(!n)break;const s=n.width*n.height;n.width>=n.height&&n.width>1?n.width/=2:n.height/=2,i-=s-n.width*n.height}return new Map(r.map(({id:n,plan:s,width:a,height:o})=>[n,a===s.width&&o===s.height?s:{...s,width:a,height:o,limited:!0,key:Cc(s.camera,a,o)}]))},Nf=(t,e,r)=>{const{groundTexelTargetMeters:i,maximumDimension:n,maximumPixels:s}=r;if(t.isEmpty()||![...t.min.toArray(),...t.max.toArray(),...e.toArray()].every(Number.isFinite)||!(i>0&&Number.isFinite(i))||!(n>=1&&Number.isFinite(n))||!(s>=1&&Number.isFinite(s)))throw new RangeError("Receiver capture requires finite bounds and positive allocation limits");const a=t.getCenter(new _),o=t.getSize(new _).length()*.5,c=Math.max(.001,o*.001),l=new rs;l.quaternion.copy(e).normalize(),l.position.copy(a).add(new _(0,0,o+c+1).applyQuaternion(l.quaternion)),l.updateMatrixWorld(!0);const u=new Ne().setFromPoints(Vr(t).map(g=>g.applyMatrix4(l.matrixWorldInverse)));l.left=u.min.x-c,l.right=u.max.x+c,l.bottom=u.min.y-c,l.top=u.max.y+c,l.near=Math.max(.001,-u.max.z-c),l.far=Math.max(l.near+.001,-u.min.z+c),l.updateProjectionMatrix();const d=g=>2**Math.ceil(Math.log2(Math.max(1,g/i))),f=d(l.right-l.left),p=d(l.top-l.bottom),h=2**Math.floor(Math.log2(n));let v=Math.min(f,h),y=Math.min(p,h);for(;v*y>s;)v>=y&&v>1?v/=2:y/=2;return{camera:l,width:v,height:y,limited:v<f||y<p,key:Cc(l,v,y)}},Lf=t=>new fl().setFromRotationMatrix(new Q().extractRotation(t.matrixWorld)),Ci={namespace:"shadow-corridor-visibility",schema:"visibility-depth-world-basis-v1",maximumPayloadBytes:32*1024**2,maximumRecordBytes:33*1024**2,maximumIdentityCharacters:65536},mi={read:"read",write:"write",writePacked:"write-packed"},We=t=>{if(!t||!Number.isInteger(t.samples)||t.samples<1||t.samples>4096)return null;const e=[t.source,t.dateTime,t.corridor,t.resolution,t.geometryFingerprint];return e.some(r=>typeof r!="string"||r.length===0)||e.reduce((r,i)=>r+i.length,0)>Ci.maximumIdentityCharacters?null:JSON.stringify([Ci.schema,...e,t.samples])},bn=(t,e)=>Array.isArray(t)&&t.length===e&&t.every(Number.isFinite),Ic=t=>{if(!t||typeof t!="object")return!1;const e=t,r=e.width*e.height;return Number.isSafeInteger(e.width)&&e.width>0&&Number.isSafeInteger(e.height)&&e.height>0&&Number.isSafeInteger(r)&&r*8<=Ci.maximumPayloadBytes&&bn(e.captureMatrix,16)&&bn(e.worldBasis,16)&&bn(e.crop,4)&&e.crop[0]>=0&&e.crop[1]>=0&&e.crop[2]>0&&e.crop[3]>0&&e.crop[0]+e.crop[2]<=1.000001&&e.crop[1]+e.crop[3]<=1.000001},Qa=t=>{if(!Ic(t))return!1;const e=t,r=e.width*e.height;return e.visibility instanceof Float32Array&&e.visibility.length===r&&e.depth instanceof Float32Array&&e.depth.length===r},Ff=t=>{if(!Ic(t))return!1;const e=t;return e.rgba instanceof Float32Array&&e.rgba.length===e.width*e.height*4},br=64,Qn=256*1024**2,Rn=Qn,Bf=128*1024**2,Za=8,Ja=32*1024**2,Uf=4,Rr=t=>{var e;t.target?((e=t.target.depthTexture)==null||e.dispose(),t.target.dispose()):(t.visibility.dispose(),t.depth.dispose())},Hf=(t,e)=>t.elements.every((r,i)=>Number.isFinite(r)&&Math.abs(r-e.elements[i])<=1e-10*Math.max(1,Math.abs(r)));class Dc{constructor(e){this.renderer=e,this.copyQuad.frustumCulled=!1,this.copyScene.add(this.copyQuad)}captures=new Map;visiblePageIds=new Set;samples=0;replayCount=0;matchingPages=0;persistence;persistenceGeneration=0;disposed=!1;restoreAttempts=new Set;pendingRestores=new Map;restoreRequests=new Map;pendingWrites=new Map;persistenceOffers=new WeakMap;persistenceAttempted=new WeakSet;persistenceTimer=null;readbackBusy=!1;readbackBytes=0;packMaterial=new er({uniforms:{visibility:{value:null},depth:{value:null}},vertexShader:"varying vec2 uvCopy; void main() { uvCopy = position.xy * 0.5 + 0.5; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:"uniform sampler2D visibility; uniform sampler2D depth; varying vec2 uvCopy; void main() { gl_FragColor = vec4(texture2D(visibility, uvCopy).r, texture2D(depth, uvCopy).r, 0.0, 1.0); }",depthTest:!1,depthWrite:!1,blending:gi,toneMapped:!1});materials=new Map;unsupportedMaterials=new WeakSet;captureSupported=!0;contentRevision=0;get revision(){return this.contentRevision}get supportsCapture(){return this.captureSupported}copyScene=new Nr;copyCamera=new Ii;copyMaterial=new er({uniforms:{source:{value:null},crop:{value:new ie}},vertexShader:"varying vec2 uvCopy; void main() { uvCopy = position.xy * 0.5 + 0.5; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:"uniform sampler2D source; uniform vec4 crop; varying vec2 uvCopy; void main() { gl_FragColor = vec4(texture2D(source, crop.xy + uvCopy * crop.zw).r, 0.0, 0.0, 1.0); }",depthTest:!1,depthWrite:!1,blending:gi,toneMapped:!1});copyQuad=new Hr(new es(2,2),this.copyMaterial);downsampleMaterial=new er({uniforms:{source:{value:null},depth:{value:null},texel:{value:new It}},vertexShader:"varying vec2 uvCopy; void main() { uvCopy = position.xy * 0.5 + 0.5; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:`uniform sampler2D source; uniform sampler2D depth;
      uniform vec2 texel; varying vec2 uvCopy;
      void main() {
        vec2 d = texel * 0.25;
        float visibility = (texture2D(source, uvCopy + d).r
          + texture2D(source, uvCopy - d).r
          + texture2D(source, uvCopy + vec2(d.x, -d.y)).r
          + texture2D(source, uvCopy + vec2(-d.x, d.y)).r) * 0.25;
        gl_FragColor = vec4(visibility, 0.0, 0.0, 1.0);
        gl_FragDepth = texture2D(depth, uvCopy).r;
      }`,depthTest:!0,depthFunc:Ao,depthWrite:!0,blending:gi,toneMapped:!1});uniforms={carmaCaptureVisibility:{value:!1},carmaRetainedEnabled:{value:!1},carmaRetainedColor:{value:null},carmaRetainedDepth:{value:null},carmaRetainedMatrix:{value:new Q},carmaRetainedCrop:{value:new ie(0,0,1,1)},carmaRetainedCount:{value:0},carmaRetainedBounds:{value:Array.from({length:br},()=>new ie)}};get memoryBytes(){return[...this.captures.values()].reduce((e,r)=>e+r.bytes,this.readbackBytes)}getCapturedSize(e){const r=this.captures.get(e);return r?{width:r.width,height:r.height,samples:r.samples}:null}get stats(){return{pages:this.captures.size,samples:this.samples,matchingPages:this.matchingPages,replays:this.replayCount,bytes:this.memoryBytes}}beginFrame(e=[]){this.matchingPages=0,this.visiblePageIds=new Set(e.map(r=>r.id)),this.schedulePersistence()}has(e,r){var n;const i=this.captures.get(e.id);if(!this.canReplay(e)||(i==null?void 0:i.casterRevision)!==e.casterRevision)return!1;if(i&&i.samples>1&&i.samples>=r&&e.captureSize&&e.presentationKey&&i.crop.x===0&&i.crop.y===0&&i.crop.z===1&&i.crop.w===1)return i.width>=e.captureSize.width&&i.height>=e.captureSize.height;if(i!=null&&i.restored){const s=this.restoreRequests.get(e.id),a=(n=this.persistence)==null?void 0:n.identity(e,r);if(e.ready===!1||!(s!=null&&s.expected)||!a||We(a)!==i.persistentKey||!Hf(i.matrix,s.expected))return!1;const o=e.screenBounds,c=i.crop;if(c.x>o.x+1e-6||c.y>o.y+1e-6||c.x+c.z<o.x+o.z-1e-6||c.y+c.w<o.y+o.w-1e-6)return!1}return(i==null?void 0:i.revision)===(e.contentKey??e.revision)&&i.samples===r}hasAtLeast(e,r){const i=this.captures.get(e.id);return!!(i&&i.samples>=r&&this.has(e,i.samples))}downsample(e,r,i){var y;if(!Number.isInteger(r)||!Number.isInteger(i)||r<1||i<1)return!1;const n=this.captures.get(e.id);if(!n||!this.canReplay(e))return!1;const s=Math.max(r,Math.ceil(n.width/2)),a=Math.max(i,Math.ceil(n.height/2));if(s>n.width||a>n.height||s*a>=n.width*n.height)return!1;const o=new Ge(s,a,{type:wt,format:Zt,minFilter:De,magFilter:De,depthTexture:new nr(s,a,Ut),samples:0}),c=this.renderer,l=c.getRenderTarget(),u=c.getActiveCubeFace(),d=c.getActiveMipmapLevel(),f=c.getViewport(new ie),p=c.getScissor(new ie),h=c.getScissorTest(),v=c.autoClear;try{c.initRenderTarget(o),this.downsampleMaterial.uniforms.source.value=n.visibility,this.downsampleMaterial.uniforms.depth.value=n.depth,this.downsampleMaterial.uniforms.texel.value.set(1/s,1/a),this.copyQuad.material=this.downsampleMaterial,c.autoClear=!1,c.setRenderTarget(o),c.setViewport(new ie(0,0,s,a)),c.setScissorTest(!1),c.render(this.copyScene,this.copyCamera)}catch(g){throw(y=o.depthTexture)==null||y.dispose(),o.dispose(),g}finally{this.copyQuad.material=this.copyMaterial,c.setRenderTarget(l,u,d),c.setViewport(f),c.setScissor(p),c.setScissorTest(h),c.autoClear=v}return this.captures.set(e.id,{...n,target:o,visibility:o.texture,depth:o.depthTexture,width:s,height:a,bytes:s*a*8}),this.pendingWrites.delete(e.id),Rr(n),this.contentRevision+=1,!0}isRestorePending(e,r){var s;const i=this.pendingRestores.get(e.id);if(!i||i.samples!==r)return!1;const n=(s=this.persistence)==null?void 0:s.identity(e,r);return!!(n&&We(n)===i.key)}setPersistence(e){this.persistence!==e&&(this.cancelPendingPersistence(),this.persistence=e)}cancelPendingPersistence(){var e;(e=this.persistence)==null||e.cache.cancelPending(),this.persistenceGeneration+=1,this.restoreAttempts.clear(),this.pendingRestores.clear(),this.restoreRequests.clear(),this.pendingWrites.clear(),this.persistenceOffers=new WeakMap,this.persistenceAttempted=new WeakSet,this.persistenceTimer!==null&&clearTimeout(this.persistenceTimer),this.persistenceTimer=null}beginSolarTransition(){this.cancelPendingPersistence()}canPresent(e){return this.canReplay(e)}prepareRestore(e,r,i){if(this.disposed)return;if(this.restoreRequests.set(e.id,{page:e,samples:r,expected:i==null?void 0:i.clone()}),this.restoreRequests.size>br*2){for(const l of this.restoreRequests.keys())if(l!==e.id&&!this.visiblePageIds.has(l)){this.restoreRequests.delete(l);break}}const n=this.persistence;if(!(n!=null&&n.cache.enabled)||n.cache.busy||e.ready===!1||this.hasAtLeast(e,r))return;const s=n.identity(e,r),a=s&&We(s);if(!s||!a||this.restoreAttempts.has(a))return;this.restoreAttempts.add(a),this.restoreAttempts.size>br*4&&this.restoreAttempts.delete(this.restoreAttempts.values().next().value);const o=this.persistenceGeneration,c=this.captures.get(e.id);this.pendingRestores.set(e.id,{key:a,samples:r}),n.cache.read(s).then(l=>{const u=this.restoreRequests.get(e.id),d=u&&n.identity(u.page,r);if(!l||this.disposed||this.persistenceGeneration!==o||this.persistence!==n||!u||u.page.ready===!1||!d||We(d)!==a||this.captures.get(e.id)!==c)return;const f=new Q().fromArray(l.worldBasis),p=n.worldBasis();if(!f.elements.every(Number.isFinite)||f.determinant()===0||!p.elements.every(Number.isFinite)||p.determinant()===0)return;const h=new Q().fromArray(l.captureMatrix).multiply(f.invert()).multiply(p),v=[...new Set([l.visibility.buffer,l.depth.buffer])].reduce((R,C)=>R+C.byteLength,0),y=l.width*l.height*Za+v;if(!this.admit(e.id,y))return;const g=new Nn(l.visibility,l.width,l.height,Zt,wt),T=new Nn(l.depth,l.width,l.height,Zt,wt);for(const R of[g,T])R.minFilter=De,R.magFilter=De,R.generateMipmaps=!1,R.needsUpdate=!0;c&&Rr(c),this.captures.delete(e.id),this.captures.set(e.id,{target:null,visibility:g,depth:T,width:l.width,height:l.height,bytes:y,restored:!0,persistentKey:a,persistentIdentity:l.identity,revision:u.page.contentKey??u.page.revision,casterRevision:u.page.casterRevision,presentationKey:u.page.presentationKey??u.page.contentKey??u.page.revision,samples:l.identity.samples,matrix:h,crop:new ie().fromArray(l.crop)}),this.samples=l.identity.samples,this.contentRevision+=1}).catch(()=>{}).finally(()=>{var l,u;!this.disposed&&o===this.persistenceGeneration&&(((l=this.pendingRestores.get(e.id))==null?void 0:l.key)===a&&this.pendingRestores.delete(e.id),(u=n.requestRepaint)==null||u.call(n),this.schedulePersistence())})}admit(e,r,i=!1){var a;const n=i?Math.min(((a=this.captures.get(e))==null?void 0:a.bytes)??0,Bf):0,s=Rn+n;for(const[o,c]of this.captures){if(r+this.memoryBytes<=s)break;o===e||this.visiblePageIds.has(o)||(Rr(c),this.captures.delete(o),this.contentRevision+=1,this.pendingWrites.delete(o))}return r+this.memoryBytes<=s}publish(e,r,i,n,s){var B;if(!this.captureSupported)return!1;const a=n.screenBounds,o=Math.max(0,Math.floor(a.x*e.width)),c=Math.max(0,Math.floor(a.y*e.height)),l=Math.min(e.width,Math.ceil((a.x+a.z)*e.width)),u=Math.min(e.height,Math.ceil((a.y+a.w)*e.height)),d=l-o,f=u-c,p=d*f*Za;if(d<=0||f<=0||p>Rn||!r.depthTexture||!this.admit(n.id,p,!0))return!1;const h=this.renderer,v=h.getRenderTarget(),y=h.getActiveCubeFace(),g=h.getActiveMipmapLevel(),T=h.getViewport(new ie),R=h.getScissor(new ie),C=h.getScissorTest(),b=h.autoClear,P=new Ge(d,f,{type:wt,format:Zt,minFilter:De,magFilter:De,depthTexture:new nr(d,f,Ut),samples:0});try{h.initRenderTarget(P);const O=new pl(new It(o,c),new It(l,u));this.copyMaterial.uniforms.source.value=e.texture,this.copyMaterial.uniforms.crop.value.set(o/e.width,c/e.height,d/e.width,f/e.height),h.autoClear=!1,h.setRenderTarget(P),h.setViewport(new ie(0,0,d,f)),h.setScissorTest(!1),h.render(this.copyScene,this.copyCamera),h.copyTextureToTexture(r.depthTexture,P.depthTexture,O)}catch(O){throw(B=P.depthTexture)==null||B.dispose(),P.dispose(),O}finally{h.setRenderTarget(v,y,g),h.setViewport(T),h.setScissor(R),h.setScissorTest(C),h.autoClear=b}const A=this.captures.get(n.id);A&&Rr(A),this.samples=s,this.captures.delete(n.id);const E={target:P,visibility:P.texture,depth:P.depthTexture,width:d,height:f,bytes:p,restored:!1,revision:n.contentKey??n.revision,casterRevision:n.casterRevision,samples:s,presentationKey:n.presentationKey??n.contentKey??n.revision,matrix:new Q().multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),crop:new ie(o/e.width,c/e.height,d/e.width,f/e.height)};return this.captures.set(n.id,E),this.contentRevision+=1,this.queuePersistence(n,E),!0}queuePersistence(e,r){const i=this.persistence;if(!(i!=null&&i.cache.enabled)||e.ready===!1||this.disposed)return;const n=i.identity(e,r.samples),s=n&&We(n),a=i.worldBasis();!n||n.samples!==r.samples||!s||!a.elements.every(Number.isFinite)||a.determinant()===0||r.width*r.height*16>Ja||(this.pendingWrites.delete(e.id),this.persistenceOffers.set(r,{page:e,capture:r,identity:n,key:s,worldBasis:[...a.elements]}),this.schedulePersistence())}schedulePersistence(){var e;if(!(this.disposed||this.persistenceTimer!==null||this.readbackBusy||!((e=this.persistence)!=null&&e.cache.enabled)||this.persistence.cache.busy)){for(const[r,i]of this.pendingWrites)this.captures.get(r)!==i.capture&&this.pendingWrites.delete(r);for(const r of[!0,!1])for(const[i,n]of this.captures){if(this.pendingWrites.size>=Uf)break;const s=this.persistenceOffers.get(n);this.visiblePageIds.has(i)===r&&s&&!this.persistenceAttempted.has(n)&&!this.pendingWrites.has(i)&&this.pendingWrites.set(i,s)}this.pendingWrites.size!==0&&(this.persistenceTimer=setTimeout(()=>{this.persistenceTimer=null,this.persistNextCapture()},0))}}persistNextCapture(){var h,v,y;const e=this.persistence;if(this.disposed||this.readbackBusy||!(e!=null&&e.cache.enabled)||e.cache.busy||typeof this.renderer.readRenderTargetPixelsAsync!="function")return;const r=[...this.pendingWrites.entries()].find(([g,T])=>this.captures.get(g)===T.capture);if(!r){this.pendingWrites.clear();return}const[i,n]=r,s=((h=this.restoreRequests.get(i))==null?void 0:h.page)??n.page,a=e.identity(s,n.capture.samples);if(s.ready===!1||!a||We(a)!==n.key){this.pendingWrites.delete(i),this.persistenceAttempted.add(n.capture),this.schedulePersistence();return}const{capture:o}=n,c=o.width*o.height*16;if(c>Ja||this.memoryBytes+c*2>Rn){this.pendingWrites.delete(i),this.persistenceAttempted.add(o),this.schedulePersistence();return}const l=this.persistenceGeneration,u={target:null,pixels:null,reading:null},d=()=>{const g=this.renderer,T=g.getRenderTarget(),R=g.getActiveCubeFace(),C=g.getActiveMipmapLevel(),b=g.getViewport(new ie),P=g.getScissor(new ie),A=g.getScissorTest(),E=g.autoClear,B=this.copyQuad.material;try{u.target=new Ge(o.width,o.height,{format:Fr,type:wt,depthBuffer:!1,minFilter:De,magFilter:De}),g.initRenderTarget(u.target),u.pixels=new Float32Array(o.width*o.height*4),this.packMaterial.uniforms.visibility.value=o.visibility,this.packMaterial.uniforms.depth.value=o.depth,this.copyQuad.material=this.packMaterial,g.autoClear=!1,g.setRenderTarget(u.target),g.setViewport(new ie(0,0,o.width,o.height)),g.setScissorTest(!1),g.render(this.copyScene,this.copyCamera),u.reading=g.readRenderTargetPixelsAsync(u.target,0,0,o.width,o.height,u.pixels)}finally{this.copyQuad.material=B,g.setRenderTarget(T,R,C),g.setViewport(b),g.setScissor(P),g.setScissorTest(A),g.autoClear=E}};try{if(e.runIdleRender){if(!e.runIdleRender(d)&&!u.target)return}else d()}catch{(v=u.target)==null||v.dispose(),this.pendingWrites.delete(i),this.persistenceAttempted.add(o),this.schedulePersistence();return}if(!u.reading||!u.target||!u.pixels){(y=u.target)==null||y.dispose();return}const f=u.target,p=u.pixels;this.pendingWrites.delete(i),this.persistenceAttempted.add(o),this.readbackBusy=!0,this.readbackBytes=c*2,u.reading.then(async()=>{var R;const g=((R=this.restoreRequests.get(i))==null?void 0:R.page)??n.page,T=e.identity(g,o.samples);this.disposed||l!==this.persistenceGeneration||this.persistence!==e||g.ready===!1||!T||We(T)!==n.key||await e.cache.writePacked(n.identity,{width:o.width,height:o.height,rgba:p,captureMatrix:[...o.matrix.elements],crop:o.crop.toArray(),worldBasis:n.worldBasis})}).catch(()=>{}).finally(()=>{var g;f.dispose(),this.readbackBusy=!1,this.readbackBytes=0,this.disposed||((g=e.requestRepaint)==null||g.call(e),this.schedulePersistence())})}canReplay(e){var i;const r=this.captures.get(e.id);if(!r||r.presentationKey!==(e.presentationKey??e.contentKey??e.revision))return!1;if(r.restored){const n=(i=this.persistence)==null?void 0:i.identity(e,r.samples),s=r.persistentIdentity;if(e.captureSize&&s)return!!(n&&n.source===s.source&&n.dateTime===s.dateTime&&n.corridor===s.corridor&&n.geometryFingerprint===s.geometryFingerprint&&n.samples===s.samples);if(!n||We(n)!==r.persistentKey)return!1}return!0}activate(e){const r=this.captures.get(e.id);this.captures.delete(e.id),this.captures.set(e.id,r),this.uniforms.carmaRetainedMatrix.value.copy(r.matrix),this.uniforms.carmaRetainedCrop.value.copy(r.crop),this.uniforms.carmaRetainedColor.value=r.visibility,this.uniforms.carmaRetainedDepth.value=r.depth,this.matchingPages+=1,this.replayCount+=1,this.uniforms.carmaRetainedCount.value=1;const i=e.receiverBounds;this.uniforms.carmaRetainedBounds.value[0].set(i.min.x,i.min.z,i.max.x,i.max.z),this.uniforms.carmaRetainedEnabled.value=!0}renderNative(e,r,i){if(r.length===0)return i(),new Set;this.configureScene(e);const n=new Map(r.filter(u=>u.receiverObjectId!==void 0&&this.canPresent(u)).map(u=>[u.receiverObjectId,u])),s=[],a=new Map;e.traverseVisible(u=>{const d=u;if(!d.isMesh)return;let f;for(let p=d;p&&(f=n.get(p.id),!f);p=p.parent);s.push({mesh:d,page:f});for(const p of Array.isArray(d.material)?d.material:[d.material]){let h=a.get(p);h||a.set(p,h=new Set),h.add(f==null?void 0:f.id)}});const o=new Set;for(const u of a.values())if(!(u.size<2))for(const d of u)d!==void 0&&o.add(d);const c=new Set,l=[];for(const{mesh:u,page:d}of s){const f=u.onBeforeRender,p=d!==void 0&&!o.has(d.id);u.onBeforeRender=(...h)=>{f.call(u,...h),this.uniforms.carmaRetainedEnabled.value=!1,p&&this.activate(d)},p&&c.add(d.id),l.push(()=>{u.onBeforeRender=f})}this.uniforms.carmaRetainedEnabled.value=!1;try{return i(),c}finally{this.uniforms.carmaRetainedEnabled.value=!1;for(const u of l)u()}}render(e,r,i,n){if(!this.canPresent(r))return n();this.configureScene(e),this.activate(r);try{return n()}finally{this.uniforms.carmaRetainedEnabled.value=!1}}capture(e,r){this.captureSupported=!0,this.configureScene(e),this.uniforms.carmaCaptureVisibility.value=!0;try{return r()}finally{this.uniforms.carmaCaptureVisibility.value=!1}}configureScene(e){e.traverseVisible(r=>{const i=r;if(!(!i.isMesh||!i.receiveShadow)){if(i.isInstancedMesh||i.isSkinnedMesh){this.captureSupported=!1;return}for(const n of Array.isArray(i.material)?i.material:[i.material]){if(this.unsupportedMaterials.has(n)&&(this.captureSupported=!1),!(n.isMeshStandardMaterial||n.isMeshLambertMaterial||n.isMeshPhongMaterial)||n.transparent){this.captureSupported=!1;continue}this.materials.has(n)||this.configure(n)}}})}configure(e){const r=e.onBeforeCompile,i=e.customProgramCacheKey,n=this.uniforms,s=(l,u)=>{r.call(e,l,u);const d=/getShadow\( directionalShadowMap\[ i \][^;]+?\)/;if(!l.vertexShader.includes("#include <common>")||!l.vertexShader.includes("#include <project_vertex>")||!l.fragmentShader.includes("#include <common>")||!l.fragmentShader.includes("#include <lights_fragment_begin>")||!l.fragmentShader.includes("#include <dithering_fragment>")||!d.test(Ln.lights_fragment_begin)){this.unsupportedMaterials.add(e),this.captureSupported=!1;return}this.unsupportedMaterials.delete(e),Object.assign(l.uniforms,n),l.vertexShader=l.vertexShader.replace("#include <common>",`#include <common>
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
uniform vec4 carmaRetainedBounds[${br}];
varying vec4 vCarmaRetainedClip;
varying vec2 vCarmaRetainedWorld;
float carmaRetainedCoverage(float fallbackCoverage) {
  vec3 ndc = vCarmaRetainedClip.xyz / vCarmaRetainedClip.w;
  vec2 uv = ndc.xy * 0.5 + 0.5;
  uv = (uv - carmaRetainedCrop.xy) / carmaRetainedCrop.zw;
  if (!carmaRetainedEnabled || carmaCaptureVisibility || vCarmaRetainedClip.w <= 0.0) return fallbackCoverage;
  bool owned = false;
  for (int i = 0; i < ${br}; i++) {
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
if (carmaCaptureVisibility) gl_FragColor.rgb = vec3(carmaCapturedCoverage);`)},a=()=>`${i.call(e)}|retained-corridor-visibility-v4`;e.onBeforeCompile=s,e.customProgramCacheKey=a,e.needsUpdate=!0;const o=()=>{e.onBeforeCompile===s&&(e.onBeforeCompile=r),e.customProgramCacheKey===a&&(e.customProgramCacheKey=i),e.removeEventListener("dispose",c),e.needsUpdate=!0},c=()=>{o(),this.materials.delete(e)};e.addEventListener("dispose",c),this.materials.set(e,o)}dispose(){this.disposed=!0,this.setPersistence(void 0);for(const e of this.captures.values())Rr(e);this.captures.clear(),this.uniforms.carmaRetainedEnabled.value=!1,this.uniforms.carmaRetainedColor.value=null,this.uniforms.carmaRetainedDepth.value=null,this.copyQuad.geometry.dispose(),this.copyMaterial.dispose(),this.downsampleMaterial.dispose(),this.packMaterial.dispose();for(const e of this.materials.values())e();this.materials.clear()}}const Bt=64,yi=512*1024**2,et={inactive:"inactive",dimensions:"dimensions",budget:"budget",msaa:"msaa",format:"format",receivers:"receivers",pages:"pages",renderer:"renderer",disposed:"disposed"},eo=`
  out vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`,kf=`
  layout(location = 0) out highp vec4 outColor;
  in vec2 vUv;
  uniform sampler2D tPrevious;
  uniform sampler2D tReference;
  uniform sampler2D tReferenceDepth;
  uniform sampler2D tSample;
  uniform sampler2D tSampleDepth;
  uniform mat4 uInverseViewProjection;
  uniform vec4 uBounds[${Bt}];
  uniform int uBoundsCount;
  uniform bool uRefresh;
  uniform bool uResetAll;
  uniform float uWeights[${Bt}];
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
    for (int i = 0; i < ${Bt}; i++) {
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
`,zf=`
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
`;class Vf{constructor(e,r){this.renderer=e,this.ownsPresentation=r===void 0,this.presentation=r??new Dc(e),this.quad.frustumCulled=!1,this.fullscreenScene.add(this.quad)}fullscreenScene=new Nr;fullscreenCamera=new rs(-1,1,1,-1,0,1);blendMaterial=new er({glslVersion:Lr,vertexShader:eo,fragmentShader:kf,uniforms:{tPrevious:{value:null},tReference:{value:null},tReferenceDepth:{value:null},tSample:{value:null},tSampleDepth:{value:null},uInverseViewProjection:{value:new Q},uBounds:{value:Array.from({length:Bt},()=>new ie)},uBoundsCount:{value:0},uRefresh:{value:!1},uResetAll:{value:!1},uWeights:{value:new Float32Array(Bt).fill(1)}},depthTest:!1,depthWrite:!1,blending:gi});compositeMaterial=new er({glslVersion:Lr,vertexShader:eo,fragmentShader:zf,uniforms:{tColor:{value:null},tDepth:{value:null},uOutputDither:{value:!1}},dithering:!0,transparent:!0,blending:vo,depthTest:!0,depthFunc:Ao,depthWrite:!0});quad=new Hr(new es(2,2),this.blendMaterial);referenceTarget=null;sampleTarget=null;readTarget=null;writeTarget=null;pages=new Map;stateKey="";targetKey="";cursor=0;totalSamples=1;broken=!1;disposed=!1;allocatedBytes=0;lastFallbackReason=null;presentation;publishedStateKeys=new Map;publicationRetryMs=250;ownsPresentation;get pageProgress(){return[...this.pages].map(([e,r])=>({id:e,samples:r.samples,totalSamples:this.totalSamples,ready:r.page.ready!==!1,published:this.publishedStateKeys.get(e)===JSON.stringify([this.stateKey,r.page.revision])}))}get memoryBytes(){return this.allocatedBytes+this.presentation.memoryBytes}get fallbackReason(){return this.lastFallbackReason}render(e,r,i){var E,B;if(this.disposed)return this.fallback(et.disposed);if(this.broken)return this.fallback(et.renderer);if(!i.active)return this.stateKey="",this.lastFallbackReason=et.inactive,null;const{width:n,height:s,samples:a}=i,o=ss((E=i.options)==null?void 0:E.format),c=((B=i.options)==null?void 0:B.msaaSamples)??Co.msaaSamples,l=n*s,u=i.visibilityOnly?Zt:Fr,d=i.visibilityOnly?1:4,f=l*(2*(o.bytesPerPixel*d/4+4)+2*o.accumulationBytesPerPixel*d/4);if(!Number.isInteger(n)||n<1||!Number.isInteger(s)||s<1||!Number.isInteger(a)||a<1||n>this.renderer.capabilities.maxTextureSize||s>this.renderer.capabilities.maxTextureSize)return this.fallback(et.dimensions);if(i.maxRenderTargetPixels!==void 0&&(!(i.maxRenderTargetPixels>0)||l>i.maxRenderTargetPixels)||f+this.presentation.memoryBytes>yi)return this.fallback(et.budget);if(o.format!==Fr)return this.fallback(et.format);if(c!==0)return this.fallback(et.msaa);if(!r.supportsOpaqueAccumulation)return this.fallback(et.receivers);const p=r.accumulationPages.map(O=>{var j;return{...O,ready:O.ready!==!1&&(((j=i.isPageReady)==null?void 0:j.call(i,O.id))??!0)}});if(p.length===0||p.length>Bt)return this.fallback(et.pages);this.lastFallbackReason=null;const h=this.renderer,v=h.getRenderTarget(),y=h.getActiveCubeFace(),g=h.getActiveMipmapLevel(),T=h.getClearColor(new ke),R=h.getClearAlpha(),C=h.autoClear,b=h.getViewport(new ie),P=h.getScissor(new ie),A=h.getScissorTest();try{h.autoClear=!1;const O=JSON.stringify([n,s,o.type,o.accumulationType,u]);if(this.targetKey!==O){this.releaseTargets();const L={type:o.type,format:u,minFilter:De,magFilter:De,depthBuffer:!0,samples:0};this.referenceTarget=new Ge(n,s,{...L,depthTexture:new nr(n,s,Ut)}),this.sampleTarget=new Ge(n,s,{...L,depthTexture:new nr(n,s,Ut)});const Z={type:o.accumulationType,format:u,minFilter:De,magFilter:De,depthBuffer:!1};this.readTarget=new Ge(n,s,Z),this.writeTarget=new Ge(n,s,Z),this.targetKey=O,this.allocatedBytes=f}const j=JSON.stringify([i.viewKey,i.visibilityOnly?0:i.styleEpoch,a,O]),K=this.stateKey!==j,N=new Set(p.map(({id:L})=>L)),oe=[...this.pages.values()].filter(({page:L})=>!N.has(L.id)).map(({page:L})=>L),V=[...K?p:p.filter(L=>{var Ae;const Z=(Ae=this.pages.get(L.id))==null?void 0:Ae.page;return(Z==null?void 0:Z.revision)!==L.revision||(Z==null?void 0:Z.ready)===!1&&L.ready}),...oe].flatMap(L=>[L.screenBounds,...this.pages.has(L.id)?[this.pages.get(L.id).page.screenBounds]:[]]),X=K?p:p.filter(L=>V.some(Z=>this.overlaps(L.screenBounds,Z)));this.blendMaterial.uniforms.uInverseViewProjection.value.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse).invert(),K&&(this.pages.clear(),this.cursor=0);for(const L of oe)this.pages.delete(L.id);for(const L of X)this.publishedStateKeys.delete(L.id);X.length>0&&(this.publicationRetryMs=250),this.cursor%=Math.max(1,p.length);for(const L of p){const Z=this.pages.get(L.id);Z?Z.page=L:this.pages.set(L.id,{page:L,samples:0})}if(this.totalSamples=a,X.length>0||oe.length>0){this.clearTarget(this.referenceTarget),r.renderSample(e,0,a),this.blend(X,!0,K,X.map(()=>1));for(const L of X)this.pages.get(L.id).samples=1}else{const L=[...this.pages.values()],Z=performance.now(),Ae=i.maxPagesPerFrame??4,J=Number.isFinite(Ae)?Math.min(Bt,Math.max(1,Math.floor(Ae))):4,Tt=i.maxFrameCpuMilliseconds??4,mt=Number.isFinite(Tt)?Math.max(0,Tt):4;let ge=0;do{const Ke=[],Me=this.cursor;for(let U=0;U<L.length;U+=1){const Xe=(Me+U)%L.length,le=L[Xe];if(!(le.samples>=a||le.page.ready===!1)){if(Ke.length===0&&this.clearTarget(this.sampleTarget),!r.renderPageSample(e,le.page.id,le.samples,a))return this.fallback(et.pages);if(Ke.push(le),ge+=1,this.cursor=(Xe+1)%L.length,ge>=J||performance.now()-Z>=mt)break}}if(Ke.length===0)break;this.blend(Ke.map(({page:U})=>U),!1,!1,Ke.map(U=>1/(U.samples+1)));for(const U of Ke)U.samples+=1}while(ge<J&&performance.now()-Z<mt)}this.stateKey=j,h.setRenderTarget(v,y,g),h.setViewport(b),h.setScissor(P),h.setScissorTest(A),this.quad.material=this.compositeMaterial;const Y=[...this.pages.values()].every(L=>L.samples>=a);this.compositeMaterial.uniforms.tColor.value=Y?this.readTarget.texture:this.referenceTarget.texture,this.compositeMaterial.uniforms.tDepth.value=this.referenceTarget.depthTexture,this.compositeMaterial.uniforms.uOutputDither.value=v===null,i.visibilityOnly||h.render(this.fullscreenScene,this.fullscreenCamera);let de=!1;for(const{page:L,samples:Z}of this.pages.values()){if(L.ready===!1||Z<a)continue;const Ae=JSON.stringify([j,L.revision]);if(this.publishedStateKeys.get(L.id)!==Ae)try{this.presentation.publish(this.readTarget,this.referenceTarget,e,L,a)?this.publishedStateKeys.set(L.id,Ae):de=!0}catch(J){de=!0,console.error("[shadow-simulation] retaining previous corridor capture after copy failure",J)}}for(const L of this.publishedStateKeys.keys())N.has(L)||this.publishedStateKeys.delete(L);const ce=[...this.pages.values()].reduce((L,{page:Z,samples:Ae})=>{const J=Z.ready!==!1&&this.publishedStateKeys.get(Z.id)===JSON.stringify([j,Z.revision]);return L+(J?a:Math.min(Ae,a-1))},0),Te=de?this.publicationRetryMs:void 0;return this.publicationRetryMs=de?Math.min(4e3,this.publicationRetryMs*2):250,{progress:ce/(this.pages.size*a),settled:ce===this.pages.size*a,...Te===void 0?{}:{retryAfterMs:Te},needsRepaint:[...this.pages.values()].some(L=>L.samples<a&&L.page.ready!==!1)}}catch(O){return this.broken=!0,console.error("[shadow-simulation] corridor accumulation failed; using direct rendering",O),this.fallback(et.renderer)}finally{h.autoClear=C,h.setClearColor(T,R),h.setRenderTarget(v,y,g),h.setViewport(b),h.setScissor(P),h.setScissorTest(A)}}overlaps(e,r){return e.x<=r.x+r.z&&e.x+e.z>=r.x&&e.y<=r.y+r.w&&e.y+e.w>=r.y}clearTarget(e){this.renderer.setRenderTarget(e),this.renderer.setClearColor(0,0),this.renderer.clear(!0,!0,!1)}blend(e,r,i,n){const s=this.blendMaterial.uniforms;s.tPrevious.value=this.readTarget.texture,s.tReference.value=this.referenceTarget.texture,s.tReferenceDepth.value=this.referenceTarget.depthTexture,s.tSample.value=this.sampleTarget.texture,s.tSampleDepth.value=this.sampleTarget.depthTexture,s.uBoundsCount.value=e.length,e.forEach(({receiverBounds:o},c)=>s.uBounds.value[c].set(o.min.x,o.min.z,o.max.x,o.max.z)),s.uRefresh.value=r,s.uResetAll.value=i,s.uWeights.value.set(n),this.quad.material=this.blendMaterial,this.renderer.setRenderTarget(this.writeTarget),this.renderer.render(this.fullscreenScene,this.fullscreenCamera);const a=this.readTarget;this.readTarget=this.writeTarget,this.writeTarget=a}releaseTargets(){var e;for(const r of[this.referenceTarget,this.sampleTarget,this.readTarget,this.writeTarget])(e=r==null?void 0:r.depthTexture)==null||e.dispose(),r==null||r.dispose();this.referenceTarget=null,this.sampleTarget=null,this.readTarget=null,this.writeTarget=null,this.stateKey="",this.targetKey="",this.allocatedBytes=0,this.pages.clear()}releaseScratch(e=!1){e?(this.stateKey="",this.pages.clear()):this.releaseTargets(),this.publishedStateKeys.clear(),this.cursor=0}fallback(e){return this.lastFallbackReason=e,this.releaseTargets(),null}dispose(){this.disposed||(this.disposed=!0,this.releaseTargets(),this.ownsPresentation&&this.presentation.dispose(),this.quad.geometry.dispose(),this.blendMaterial.dispose(),this.compositeMaterial.dispose())}}const to=2e4;let Wf=0;var go;class Gf{enabled=gl((go=globalThis.location)==null?void 0:go.hostname);reportId=++Wf;nextCorridorId=0;labels=new Map;pending=new Map;timer;context;observe(e,r){var s;if(!this.enabled)return;const i=performance.now();for(const{id:a}of e)this.labels.has(a)||this.labels.set(a,`C${this.reportId}.${++this.nextCorridorId}`);this.context={total:e.length,ready:e.filter(a=>a.ready).length,completed:e.filter(a=>a.published).length,samples:e.reduce((a,o)=>a+o.samples,0),activeId:r.activeId?this.labels.get(r.activeId):null,memoryBytes:r.memoryBytes,fallbackReason:r.fallbackReason,publicationRetries:(s=r.publicationRetries)==null?void 0:s.map(([a,o])=>({id:this.labels.get(a),attempts:o.attempts,retryInMs:Math.max(0,Math.round(o.retryAt-i))}))};const n=new Set(e.map(({id:a})=>a));for(const a of this.pending.keys())n.has(a)||this.pending.delete(a);for(const a of this.labels.keys())n.has(a)||this.labels.delete(a);for(const a of e){if(a.published){this.pending.delete(a.id);continue}const o=this.pending.get(a.id),c=!o||a.samples>o.progress.samples;this.pending.set(a.id,{progress:a,advancedAt:c?i:o.advancedAt,reported:c?!1:o.reported})}this.schedule()}pause(){clearTimeout(this.timer),this.timer=void 0,this.pending.clear()}schedule(){if(this.timer!==void 0)return;let e=1/0;for(const r of this.pending.values())r.reported||(e=Math.min(e,r.advancedAt+to));Number.isFinite(e)&&(this.timer=setTimeout(()=>{var n;this.timer=void 0;const r=performance.now(),i=[];for(const s of this.pending.values())s.reported||r-s.advancedAt<to||(s.reported=!0,i.push({...s.progress,id:this.labels.get(s.progress.id),file:(n=s.progress.id.match(/\/([^/"\\]+\.b3dm)/))==null?void 0:n[1],stalledMilliseconds:Math.round(r-s.advancedAt),waitingForReadiness:!s.progress.ready}));i.length>0&&console.warn("[shadow-simulation] corridors without progress for 20 seconds",JSON.stringify({corridors:i,scheduler:this.context})),this.schedule()},Math.max(0,e-performance.now())))}}class jf{constructor(e){this.renderer=e,this.presentation=new Dc(e),this.scratch=new Vf(e,this.presentation)}presentation;scratch;captures=[];activeId=null;activeCapture=null;cursor=0;samples=1;disposed=!1;watchdog=new Gf;publicationRetries=new Map;restoreOpportunities=new Map;allocationKey="";allocations=new Map;plans=new Map;get memoryBytes(){return this.scratch.memoryBytes}get fallbackReason(){return this.presentation.supportsCapture?this.scratch.fallbackReason:"receivers"}get capturePages(){return this.captures.map(({page:e})=>e)}get pageProgress(){const e=this.scratch.pageProgress;return this.captures.map(({page:r,plan:i,ready:n})=>{const s=n&&this.presentation.has(r,this.samples),a=e.find(({id:o})=>o===r.id);return{id:r.id,samples:s?this.samples:(a==null?void 0:a.samples)??0,totalSamples:this.samples,ready:n,published:s,limited:i.limited,width:i.width,height:i.height}})}updateCaptures(e,r,i,n=!0){var h;const s=Lf(e),a=ss((h=i.options)==null?void 0:h.format),o=2*(a.bytesPerPixel/4+4)+2*a.accumulationBytesPerPixel/4+8,c=Math.max(1,Math.floor(Math.min(i.maxRenderTargetPixels??i.width*i.height,yi/2/o))),l=r.accumulationPages.map(v=>{const y=this.plans.get(v.id),g=(y==null?void 0:y.orientation)??s,T={groundTexelTargetMeters:v.groundTexelTargetMeters??1,maximumDimension:this.renderer.capabilities.maxTextureSize,maximumPixels:c},R=JSON.stringify([v.receiverBounds.min,v.receiverBounds.max,g.toArray(),T]),C=(y==null?void 0:y.inputs)===R?y.plan:Nf(v.receiverBounds,g,T);return this.plans.set(v.id,{inputs:R,plan:C,orientation:g}),C.camera.layers.mask=e.layers.mask,{page:v,plan:C}}),u=l.find(({page:v})=>{var y;return this.activeId===v.id&&((y=this.activeCapture)==null?void 0:y.page.id)===v.id&&this.activeCapture.page.contentKey===JSON.stringify([v.contentKey??v.revision,this.activeCapture.plan.key])}),d=u?this.activeCapture.plan:null,f=JSON.stringify(l.map(({page:v,plan:y})=>[v.id,y.key,v.screenBounds.z*v.screenBounds.w]));if(f!==this.allocationKey){const v=new Map(Of(l.filter(({page:y})=>y.id!==(u==null?void 0:u.page.id)).map(({page:y,plan:g})=>({id:y.id,plan:g,screenArea:y.screenBounds.z*y.screenBounds.w})),Qn-(d?d.width*d.height*8:0)));u&&d&&v.set(u.page.id,d),this.allocationKey=f,this.allocations=v}this.captures=l.map(({page:v,plan:y})=>{var C;const g=this.allocations.get(v.id)??y,T=JSON.stringify([v.contentKey??v.revision,g.key]),R=(!n||v.ready!==!1)&&(((C=i.isPageReady)==null?void 0:C.call(i,v.id))??!0);return{page:{...v,ready:R,captureKey:JSON.stringify([g.camera.quaternion.toArray(),g.width,g.height]),captureSize:{width:g.width,height:g.height},contentKey:T,revision:T,screenBounds:new ie(0,0,1,1)},plan:g,ready:R}});const p=new Set(this.captures.map(({page:v})=>v.id));for(const v of this.plans.keys())p.has(v)||this.plans.delete(v);for(const[v,y]of this.publicationRetries){const g=this.captures.find(({page:T})=>T.id===v);(!g||g.page.contentKey!==y.contentKey)&&this.publicationRetries.delete(v)}this.presentation.beginFrame(this.capturePages);for(const{page:v,plan:y}of this.captures)this.presentation.prepareRestore(v,i.samples,new Q().multiplyMatrices(y.camera.projectionMatrix,y.camera.matrixWorldInverse));i.active&&this.reportProgress()}reportProgress(){this.watchdog.enabled&&this.watchdog.observe(this.pageProgress,{activeId:this.activeId,memoryBytes:this.memoryBytes,fallbackReason:this.fallbackReason,publicationRetries:[...this.publicationRetries.entries()]})}yieldForRestore(e,r){if(!this.presentation.isRestorePending(e,r))return!1;const i=JSON.stringify([e.id,r]),n=e.contentKey??e.revision;if(this.restoreOpportunities.get(i)===n)return!1;if(this.restoreOpportunities.set(i,n),this.restoreOpportunities.size>1024){const s=this.restoreOpportunities.keys().next().value;s!==void 0&&this.restoreOpportunities.delete(s)}return!0}render(e,r,i){var f;if(this.disposed)return null;if(!i.active)return this.watchdog.pause(),null;if(this.samples=i.samples,this.updateCaptures(e,r,i),!this.presentation.supportsCapture)return this.scratch.releaseScratch(),this.activeId=null,null;const n=performance.now();let s,a=this.captures.find(({page:p})=>p.id===this.activeId);const o=a&&!a.ready&&this.captures.some(({page:p,ready:h})=>h&&p.id!==(a==null?void 0:a.page.id)&&!this.presentation.has(p,i.samples));if((!a||o||this.presentation.has(a.page,i.samples))&&(this.scratch.releaseScratch(!0),this.activeId=null,a=void 0),a){const p=this.publicationRetries.get(a.page.id);p&&p.retryAt>n&&(s=Math.ceil(p.retryAt-n))}if(!a&&this.captures.length>0)for(let p=0;p<this.captures.length;p+=1){const h=(this.cursor+p)%this.captures.length,v=this.captures[h];if(!v.ready||this.presentation.has(v.page,i.samples)||this.yieldForRestore(v.page,i.samples))continue;const y=this.publicationRetries.get(v.page.id);if(y&&y.retryAt>n){s=Math.min(s??1/0,Math.ceil(y.retryAt-n));continue}a=v,s=void 0,this.activeId=v.page.id,this.activeCapture=v,this.cursor=(h+1)%this.captures.length;break}let c=null;if(a!=null&&a.ready&&s===void 0){this.activeCapture=a;const{page:p,plan:h}=a,v=(y,g,T)=>r.renderPageSample(y,p.id,g,T,p.screenBounds);if(c=this.scratch.render(h.camera,{accumulationPages:[p],supportsOpaqueAccumulation:r.supportsOpaqueAccumulation,renderSample:v,renderPageSample:(y,g,T,R)=>v(y,T,R)},{...i,width:h.width,height:h.height,viewKey:h.key,visibilityOnly:!0,isPageReady:void 0,maxPagesPerFrame:i.maxPagesPerFrame??4}),c!=null&&c.settled)this.publicationRetries.delete(p.id),this.scratch.releaseScratch(!0),this.activeId=null;else if((c==null?void 0:c.retryAfterMs)!==void 0){const y=(((f=this.publicationRetries.get(p.id))==null?void 0:f.attempts)??0)+1;s=Math.max(250,c.retryAfterMs);const g=y>=3;g&&(s=Math.max(1e3,s)),this.publicationRetries.set(p.id,{contentKey:p.contentKey,attempts:g?0:y,retryAt:n+s}),g&&(this.scratch.releaseScratch(),this.activeId=null,this.captures.some(({page:T,ready:R})=>{var C;return R&&T.id!==p.id&&!this.presentation.has(T,i.samples)&&(((C=this.publicationRetries.get(T.id))==null?void 0:C.retryAt)??0)<=n})&&(s=void 0))}if(!c)return null}!this.activeId&&!this.captures.some(({page:p,ready:h})=>h&&!this.presentation.has(p,i.samples))&&this.scratch.releaseScratch();const l=this.pageProgress;this.reportProgress();const u=l.reduce((p,h)=>p+(h.published?i.samples:Math.min(h.samples,i.samples-1)),0),d=l.length*i.samples;return{progress:d>0?u/d:1,settled:d===u,needsRepaint:l.some(p=>p.ready&&!p.published)&&s===void 0,...s===void 0?{}:{retryAfterMs:s}}}renderHard(e,r,i){var P;if(this.disposed||!i.active)return{published:0,needsRepaint:!1};if(this.updateCaptures(e,r,{...i,samples:1},i.isPageReady===void 0),!r.supportsOpaqueAccumulation||!this.presentation.supportsCapture||!this.renderer.extensions.has("EXT_color_buffer_float"))return{published:0,needsRepaint:!1};const n=new Map(this.captures.map(({page:A})=>[A.id,this.presentation.getCapturedSize(A.id)])),s=this.captures.reduce((A,{page:E,plan:B})=>{const O=n.get(E.id);return A+Math.max(B.width*B.height,O?O.width*O.height:0)*8},0)>Qn,a=({page:A,plan:E})=>{const B=n.get(A.id);return B?(B.width*B.height-E.width*E.height)*8:0},o=this.captures.filter(({page:A,plan:E,ready:B})=>{if(!B)return!1;const O=n.get(A.id);return this.presentation.hasAtLeast(A,1)&&(!s||!O||O.width*O.height<=E.width*E.height)?!1:!(O&&O.samples>1&&!s&&(O.width!==E.width||O.height!==E.height)&&this.presentation.canReplay(A))});s&&o.sort((A,E)=>a(E)-a(A));const c=o.find(({page:A})=>!this.yieldForRestore(A,1));if(!c)return{published:0,needsRepaint:o.length>0};const{page:l,plan:u}=c;if(s&&this.presentation.hasAtLeast(l,1)&&a(c)>0){const A=n.get(l.id),E=Math.max(u.width,Math.ceil(A.width/2))*Math.max(u.height,Math.ceil(A.height/2))*8;if(this.memoryBytes+E>yi)return{published:0,needsRepaint:!1,retryAfterMs:1e3};try{const B=this.presentation.downsample(l,u.width,u.height);return{published:B?1:0,needsRepaint:B,...B?{}:{retryAfterMs:1e3}}}catch{return{published:0,needsRepaint:!1,retryAfterMs:1e3}}}if(this.memoryBytes+u.width*u.height*16>yi)return{published:0,needsRepaint:!1,retryAfterMs:1e3};const d=this.renderer,f=d.getRenderTarget(),p=d.getActiveCubeFace(),h=d.getActiveMipmapLevel(),v=d.getViewport(new ie),y=d.getScissor(new ie),g=d.getScissorTest(),T=d.autoClear,R=d.getClearColor(new ke),C=d.getClearAlpha(),b=new Ge(u.width,u.height,{type:wt,format:Zt,minFilter:De,magFilter:De,samples:0,depthTexture:new nr(u.width,u.height,Ut)});try{d.initRenderTarget(b),d.autoClear=!1,d.setRenderTarget(b),d.setViewport(new ie(0,0,u.width,u.height)),d.setScissorTest(!1),d.setClearColor(0,0),d.clear(!0,!0,!1);const E=r.renderPageSample(u.camera,l.id,0,1,l.screenBounds)&&this.presentation.publish(b,b,u.camera,l,1);return{published:E?1:0,needsRepaint:E&&o.length>1,...E?{}:{retryAfterMs:1e3}}}catch(A){return console.warn("[shadow-simulation] retaining completed corridor after hard-stage capture failure",A),{published:0,needsRepaint:!1,retryAfterMs:1e3}}finally{d.setRenderTarget(f,p,h),d.setViewport(v),d.setScissor(y),d.setScissorTest(g),d.setClearColor(R,C),d.autoClear=T,(P=b.depthTexture)==null||P.dispose(),b.dispose()}}pausePending(){this.watchdog.pause()}cancelPending(){this.watchdog.pause(),this.activeId!==null&&this.scratch.releaseScratch(),this.activeId=null,this.publicationRetries.clear(),this.restoreOpportunities.clear()}dispose(){this.disposed||(this.disposed=!0,this.watchdog.pause(),this.scratch.dispose(),this.presentation.dispose(),this.captures=[],this.plans.clear(),this.allocations=new Map,this.publicationRetries.clear(),this.restoreOpportunities.clear())}}const Yf=750,qf=5e3,ro=new Set,Kf=t=>{const e=vl({assetUrl:t,production:!0});let r=null,i=!1,n=!1,s=0,a=null;const o=()=>{if(r&&(r.onmessage=null,r.onerror=null,r.onmessageerror=null,r.terminate(),r=null),a){const d=a;a=null,clearTimeout(d.timer),d.finish(null)}},c=()=>{n=!0,o()},l=(d,f=[])=>{if(!e||i||n||a||typeof Worker>"u")return Promise.resolve(null);try{return r||(r=new Worker(new URL("https://cismet.github.io/carma-pr-deployments/822/geoportal/assets/shadow-corridor-cache.worker-BqzYLnOC.js",import.meta.url),{type:"module"}),r.onerror=c,r.onmessageerror=c,r.onmessage=p=>{var v;if(!a||((v=p.data)==null?void 0:v.id)!==a.id)return;const h=a;a=null,clearTimeout(h.timer),h.finish(p.data)}),new Promise(p=>{const h=setTimeout(c,d.operation===mi.read?Yf:qf);a={id:d.id,timer:h,finish:p};try{r.postMessage(d,f)}catch{c()}})}catch{return c(),Promise.resolve(null)}},u={cancelPending:o,get enabled(){return!!(e&&!i&&!n&&typeof Worker<"u")},get busy(){return a!==null},async read(d){const f=We(d);if(!f)return null;const p=await l({id:++s,producerAssetUrl:e??"",identity:d,operation:mi.read}),h=p==null?void 0:p.record;return!i&&(h==null?void 0:h.schema)===Ci.schema&&We(h.identity)===f&&Qa(h)?h:null},async write(d,f,p){if(!We(d)||!Qa(f))return!1;const h=[f.visibility,f.depth];if(h.some(y=>!(y.buffer instanceof ArrayBuffer)||y.byteOffset!==0||y.byteLength!==y.buffer.byteLength))return!1;const v=await l({id:++s,producerAssetUrl:e??"",identity:d,operation:mi.write,capture:f,costs:p},[...new Set(h.map(y=>y.buffer))]);return!i&&(v==null?void 0:v.written)===!0},async writePacked(d,f,p){if(!We(d)||!Ff(f)||!(f.rgba.buffer instanceof ArrayBuffer)||f.rgba.byteOffset!==0||f.rgba.byteLength!==f.rgba.buffer.byteLength)return!1;const h=await l({id:++s,producerAssetUrl:e??"",identity:d,operation:mi.writePacked,capture:f,costs:p},[f.rgba.buffer]);return!i&&(h==null?void 0:h.written)===!0},dispose(){i=!0,o(),ro.delete(u)}};return ro.add(u),u};class Xf{constructor(e,r,i){this.scene=e,this.renderer=r,this.host=i,this.frameCache=new Ql(r),this.pages=new Cf(e,r,i.maximumMapSize**2*8*2,i.maximumMapSize,i.frame),this.accumulation=new jf(r),i.worldBasis&&i.corridorRevision&&i.dateTimeKey&&this.accumulation.presentation.setPersistence({cache:this.persistentCache,identity:(n,s)=>{var u,d,f;const a=this.pages.getPageGeometry(n.id),o=(u=i.dateTimeKey)==null?void 0:u.call(i);if(!a||!o||!n.captureKey)return null;const c=s===1?(d=i.receiverStageError)==null?void 0:d.call(i,n.receiverBounds):void 0,l=(f=i.corridorRevision)==null?void 0:f.call(i,a.casterBounds,c,n.receiverBounds);return l?{source:"shared-scene-corridor-v2",dateTime:o,corridor:n.id,resolution:JSON.stringify([a.width,a.height,n.captureKey]),geometryFingerprint:l,samples:s}:null},worldBasis:i.worldBasis,runIdleRender:i.runIdleRender,requestRepaint:i.requestRepaint})}pages;viewKey="";idleStats=null;accumulation;persistentCache=Kf(import.meta.url);accumulationSettled=!1;viewport=new It(1,1);lastFrame=null;frameCache;presentedPageIds=new Set;casterRevisionsDirty=!0;casterRevisionCursor=0;hardRetryTimer=null;update(e,r,i,n,s=r.renderCamera){this.viewport.copy(r.viewport);const a=JSON.stringify([e.map(({id:o,bounds:c,receiverObjectId:l})=>[o,c.min,c.max,l]),s.projectionMatrix.elements,s.matrixWorldInverse.elements,r.viewport,i,n]);a!==this.viewKey&&(this.pages.setView(e,s,r.viewport,n,i,this.host.receiverBiasLimit),this.viewKey=a,this.casterRevisionsDirty=!0,this.casterRevisionCursor=0)}updatePresentation(e,r=e.renderCamera){this.viewport.copy(e.viewport),this.pages.updatePresentation(r)}invalidateContent(e){(e==null?void 0:e.length)!==0&&(this.casterRevisionsDirty=!0,this.casterRevisionCursor=0,this.frameCache.invalidate(),e?e.length>0&&this.pages.invalidateCasters(e):this.pages.clearCache())}async prewarm({cells:e,frame:r,lighting:i,targetPixels:n,samples:s,prepare:a,signal:o,yieldToInput:c=Df,planningCamera:l}){if(o.aborted)return null;this.idleStats=null,this.pages.setPrewarmView(e,l??r.renderCamera,r.viewport,n,i,s);try{return this.idleStats=await If({pages:this.pages.prewarmPages,signal:o,prepare:a,yieldToInput:c,render:(u,d,f)=>{if(d!=null&&d.parent)throw new Error("Idle caster lease must own an unmounted group");const p=this.host.light.visible;this.host.light.visible=!1,d&&this.scene.add(d);try{let h=null;const v=()=>{h=this.pages.prewarmNext(r.renderCamera,u,{signal:f})};return this.host.runIdleRender?this.host.runIdleRender(v):v(),h??{pageId:u,rendered:0,cachedSamples:0,totalSamples:s,complete:!1,budgetLimited:!1,aborted:!0}}finally{d&&this.scene.remove(d),this.host.light.visible=p}}}),this.idleStats}finally{this.pages.clearPrewarmView()}}renderProgressive(e,r){if(this.lastFrame=r,!r.active)return this.pausePending(),null;if(this.pages.accumulationPages.length===0)return this.accumulationSettled=!1,null;const i=this.renderWithHost(e,()=>{const a=this.captureHard(e);if(this.casterRevisionsDirty&&this.host.corridorRevision)return null;const o=this.accumulation.presentation.capture(this.scene,()=>this.accumulation.render(e,this.pages,{...r,visibilityOnly:!0,maxPagesPerFrame:Math.min(r.samples,64),maxFrameCpuMilliseconds:r.maxFrameCpuMilliseconds??2,isPageReady:c=>this.isPageReady(c,!1)}));return o&&this.renderContent(e,null,r.samples),o&&{...o,settled:o.settled&&!a.needsRepaint,needsRepaint:o.needsRepaint||a.needsRepaint}});if(!i)return this.accumulationSettled=!1,null;const n="retryAfterMs"in i?i.retryAfterMs:void 0;n!==void 0&&this.hardRetryTimer===null&&(this.hardRetryTimer=globalThis.setTimeout(()=>{var a,o;this.hardRetryTimer=null,(o=(a=this.host).requestRepaint)==null||o.call(a)},Math.max(1,n)));const s=i.settled&&!this.accumulationSettled;return this.accumulationSettled=i.settled,{...i,settled:s}}render(e,r,i,n=!0){return this.pages.accumulationPages.length===0?!1:(this.renderWithHost(e,()=>{n&&this.captureHard(e),this.renderContent(e,r,i,!n)}),!0)}cancelPending(e=!1){this.accumulation.cancelPending(),e&&this.accumulation.presentation.beginSolarTransition(),this.pausePending()}pausePending(){this.accumulation.pausePending(),this.hardRetryTimer!==null&&(globalThis.clearTimeout(this.hardRetryTimer),this.hardRetryTimer=null),this.accumulationSettled=!1}isPageReady(e,r){var n,s;const i=this.pages.getPageGeometry(e);return i?!this.host.isCorridorReady||this.host.isCorridorReady(i.casterBounds,r?(s=(n=this.host).receiverStageError)==null?void 0:s.call(n,i.receiverBounds):void 0,i.receiverBounds):!1}captureHard(e){var i,n,s,a,o,c;if(this.casterRevisionsDirty&&this.host.corridorRevision){const l=this.pages.accumulationPages,u=performance.now();let d=0;for(;this.casterRevisionCursor<l.length;){if(d>=4||d>0&&performance.now()-u>=4)return(n=(i=this.host).requestRepaint)==null||n.call(i),{published:0,needsRepaint:!0};const f=l[this.casterRevisionCursor++];d+=1;const p=this.pages.getPageGeometry(f.id);if(!p)continue;const h=this.host.corridorRevision(p.casterBounds,(a=(s=this.host).receiverStageError)==null?void 0:a.call(s,p.receiverBounds),p.receiverBounds);this.pages.setCasterRevision(f.id,h)&&this.frameCache.invalidate()}this.casterRevisionsDirty=!1,this.casterRevisionCursor=0}const r=this.accumulation.presentation.capture(this.scene,()=>{var l;return this.accumulation.renderHard(e,this.pages,{...this.lastFrame,width:this.viewport.x,height:this.viewport.y,viewKey:this.viewKey,styleEpoch:((l=this.lastFrame)==null?void 0:l.styleEpoch)??0,samples:1,active:!0,isPageReady:u=>this.isPageReady(u,!0)})});return r.needsRepaint&&((c=(o=this.host).requestRepaint)==null||c.call(o)),r.retryAfterMs!==void 0&&this.hardRetryTimer===null&&(this.hardRetryTimer=globalThis.setTimeout(()=>{var l,u;this.hardRetryTimer=null,(u=(l=this.host).requestRepaint)==null||u.call(l)},r.retryAfterMs)),r}renderContent(e,r,i,n=!1){var u,d,f,p,h;const s=this.accumulation.capturePages;this.accumulation.presentation.beginFrame(s);const a=s.map(v=>{const y=this.accumulation.presentation.canPresent(v);return{page:v,replay:y,ready:y||(!this.host.corridorRevision||!this.casterRevisionsDirty)&&this.isPageReady(v.id,!0)}});let o=!1;const c=()=>{this.presentedPageIds.clear();const v=this.host.light.visible,y=r===null&&a.some(({replay:g})=>g);this.host.light.visible=!0;try{let g=new Set;r===null?g=this.accumulation.presentation.renderNative(this.scene,a.filter(T=>T.replay).map(T=>T.page),()=>this.renderer.render(this.scene,e)):this.renderer.render(this.scene,e);for(const{page:T,replay:R,ready:C}of a){if(!C)continue;if(g.has(T.id)){this.presentedPageIds.add(T.id);continue}if(r===null&&!R){this.presentedPageIds.add(T.id);continue}if(n&&!R){this.presentedPageIds.add(T.id);continue}const b=n||y&&R;this.host.light.visible=b,this.accumulation.presentation.render(this.scene,T,i,()=>b?this.pages.renderPageColor(e,T.id):this.pages.renderPageSample(e,T.id,r??0,r===null?1:i))?this.presentedPageIds.add(T.id):o=!0}}finally{this.host.light.visible=v}};if((u=this.lastFrame)!=null&&u.active&&r===null&&this.accumulation.presentation.supportsCapture){const v=JSON.stringify([this.viewKey,e.projectionMatrix.elements,e.matrixWorldInverse.elements,e.layers.mask,this.lastFrame.styleEpoch,((f=(d=this.host).visualEpoch)==null?void 0:f.call(d))??0,this.accumulation.presentation.revision,a.map(({page:y,replay:g,ready:T})=>[y.id,y.contentKey??y.revision,g,T])]);this.frameCache.render(v,this.lastFrame.width,this.lastFrame.height,c),o&&this.frameCache.invalidate()}else this.frameCache.invalidate(),c();const l=a.filter(({page:v,replay:y})=>this.presentedPageIds.has(v.id)&&(this.accumulation.presentation.hasAtLeast(v,1)||!y&&(r===null||i===1))).map(({page:v})=>v);l.length>0&&((h=(p=this.host).onPresentedPages)==null||h.call(p,l,s))}renderWithHost(e,r){const{renderer:i,host:n}=this,s=n.light.visible,a=n.sky.visible,o=n.overlay.visible,c=i.autoClear;n.light.visible=!1,i.autoClear=!1;try{a&&this.renderHostObject(n.sky,e),n.sky.visible=!1,n.overlay.visible=!1;const l=r();return l!==null&&o&&(n.overlay.visible=!0,this.renderHostObject(n.overlay,e)),l}finally{i.autoClear=c,n.light.visible=s,n.sky.visible=a,n.overlay.visible=o}}renderHostObject(e,r){const i=this.scene.children.filter(n=>n!==e&&n.visible);for(const n of i)n.visible=!1;try{this.renderer.render(this.scene,r)}finally{for(const n of i)n.visible=!0}}get pageLevels(){return this.pages.pageLevels}get stats(){return{...this.pages.stats,framePresentation:this.frameCache.stats,corridorAccumulation:{retained:this.accumulation.presentation.stats,pageSamples:this.accumulation.pageProgress,memoryBytes:this.accumulation.memoryBytes,fallbackReason:this.accumulation.fallbackReason},...this.idleStats?{idlePrewarm:this.idleStats}:{},...this.host.auditCorridors?{corridorAudit:this.host.auditCorridors(this.pages.accumulationPages.flatMap(e=>{const r=this.pages.getPageGeometry(e.id);return r?[{id:e.id,casterBounds:r.casterBounds,receiverBounds:r.receiverBounds}]:[]}))}:{}}}dispose(){this.hardRetryTimer!==null&&globalThis.clearTimeout(this.hardRetryTimer),this.hardRetryTimer=null,this.accumulation.dispose(),this.frameCache.dispose(),this.persistentCache.dispose(),this.pages.dispose()}}function $f(){const t=new WeakSet;return e=>{let r=!1;for(const i of e)if(!(!i.providesTerrain||!i.hasRenderableContent)&&(r=!0,t.has(i)||i.hasRenderableContent()))return t.add(i),!1;return r}}const En=(t,e,r)=>JSON.stringify([t.min.toArray(),t.max.toArray(),e,r==null?void 0:r.min.toArray(),r==null?void 0:r.max.toArray()]),Qf=(t,e)=>{const r=new Map(t.map(s=>[s.id,s])),i=[],n=s=>i.push(new Ne(new _(...s.minimum),new _(...s.maximum)));for(const s of e){const a=r.get(s.id);a&&s.minimum.every((c,l)=>c===a.minimum[l])&&s.maximum.every((c,l)=>c===a.maximum[l])||(a&&n(a),n(s)),r.delete(s.id)}for(const s of r.values())n(s);return i},Zf=(t,e,r)=>{const i=new Set(r.map(({id:n})=>n));return t.filter(n=>{if(n.loadReason===rr.SHADOW)return!1;const s=e.filter(({bounds:a})=>n.minimum[0]<a.max.x&&n.maximum[0]>a.min.x&&n.minimum[2]<a.max.z&&n.maximum[2]>a.min.z);return s.length>0&&s.every(({id:a})=>i.has(a))}).map(({id:n})=>n)},Jf=(t,e,r)=>{if(![t,e,r].every(Number.isFinite)||r<=0)throw new RangeError("Invalid shared-scene Mercator basis");return new Q().set(r,0,0,t,0,0,r,e,0,r,0,0,0,0,0,1)},io=(t,e,r)=>yl(e.reduce((i,n)=>{if(n.loadReason===rr.SHADOW)return i;const[s,,a]=n.minimum,[o,,c]=n.maximum;return s<t.max.x&&o>t.min.x&&a<t.max.z&&c>t.min.z&&Number.isFinite(n.errorPixels)?Math.max(i,n.errorPixels):i},r),r),ep=({stageErrorPixels:t,targetErrorPixels:e,groundTexelTargetMeters:r,finalBiasMeters:i,maximumCoarseBiasMeters:n,metersPerPixel:s=0})=>{const a=Math.max(i,Math.min(n,Math.max(0,s)*.1)),o=Math.max(1,Math.min(n/i,t/Math.max(e,.25)));return Math.max(a,Math.min(n,i*o,Math.max(i,r*2)))},tp=({id:t,casterBounds:e,sunElevationDegrees:r,regions:i,volumes:n})=>{const s=new Set(i.flatMap(u=>u.selectedTileIds)),a=new Map(n.map(u=>[u.id,u])),o=[],c=[];let l=0;for(const u of s){const d=a.get(u);if(!d){o.push(u);continue}d.loadReason===rr.SHADOW&&(l+=1),e.intersectsBox(new Ne(new _(...d.minimum),new _(...d.maximum)))||c.push(u)}return{id:t,ready:i.length>0&&i.every(u=>u.ready),selectedTiles:s.size,offscreenTiles:l,reviewCount:r>=10&&s.size>10,nearHorizon:r<10,exactPrismTested:i.length>0&&i.every(u=>u.receiverPrismTested),visitedNodes:i.reduce((u,d)=>u+d.visitedNodes,0),broadPhaseNodes:i.reduce((u,d)=>u+d.broadPhaseNodes,0),rejectedPrismNodes:i.reduce((u,d)=>u+d.rejectedPrismNodes,0),missingPublishedVolumes:o,outsideEnvelope:c,selectedTileIds:[...s].sort()}},rp=1024,ip=2048,np=4096,sp=1e6,ap=2e6,no=(t,e=wl())=>{const r=Math.max(256,Math.floor(t)),i=Sl(e);return i===ea.PHONE?{maxShadowMapSize:Math.min(r,rp),maxAccumulationPixels:sp}:i===ea.TABLET?{maxShadowMapSize:Math.min(r,ip),maxAccumulationPixels:ap}:{maxShadowMapSize:Math.min(r,np),maxAccumulationPixels:Number.POSITIVE_INFINITY}},op=(t,e)=>{if(t===Number.POSITIVE_INFINITY)return t;const r=ss(e.format),i=e.msaaSamples??Co.msaaSamples,n=2*(r.bytesPerPixel+4)*(1+Math.max(0,i))+3*r.accumulationBytesPerPixel;return Math.min(t,Math.floor(256*1024*1024/n))},so=(t,e=as,r=2560*1440,i=1)=>Math.floor(Math.max(256**2,Math.min(t**2,Ct[e].depthSize**2*(Number.isFinite(r)&&r>0?r/(2560*1440):1)*i**2))),ao=new WeakMap,cp=t=>{const e=ao.get(t);if(e)return e;const r=t.getContext(),i=r.getInternalformatParameter(r.RENDERBUFFER,r.DEPTH_COMPONENT24,r.SAMPLES),n=a=>[0,...Array.from(r.getInternalformatParameter(r.RENDERBUFFER,a,r.SAMPLES)).filter(o=>i.includes(o))],s={maxTextureSize:t.capabilities.maxTextureSize,maxRenderbufferSize:r.getParameter(r.MAX_RENDERBUFFER_SIZE),hdrSamples:n(r.RGBA16F),sdrSamples:n(r.RGBA8)};return ao.set(t,s),s},lp=(t,e)=>{if(t.shadowBufferFormat===Qt.HDR_32)return 0;const r=t.shadowMsaaSamples===xl?1/0:t.shadowMsaaSamples;return Math.max(0,...e.filter(i=>Number.isFinite(i)&&i<=r))},_t=new WeakMap,Pc=t=>{let e=_t.get(t);return e||(e={snapshot:null,listeners:new Set,demandListeners:new Set},_t.set(t,e)),e},dg=t=>{var e;return((e=_t.get(t))==null?void 0:e.snapshot)??null},hg=(t,e)=>{const r=Pc(t),i=r.listeners.size===0;if(r.listeners.add(e),i)for(const n of r.demandListeners)n(!0);return()=>{if(!(!r.listeners.delete(e)||r.listeners.size>0)){r.snapshot=null;for(const n of r.demandListeners)n(!1);r.demandListeners.size===0&&_t.delete(t)}}},up=(t,e)=>{const r=Pc(t);return r.demandListeners.add(e),r.listeners.size>0&&e(!0),()=>{r.demandListeners.delete(e),r.listeners.size===0&&r.demandListeners.size===0&&_t.delete(t)}},Zn=t=>{var e;return(((e=_t.get(t))==null?void 0:e.listeners.size)??0)>0},mg=(t,e)=>{const r=_t.get(t);if(r!=null&&r.listeners.size){r.snapshot=e;for(const i of r.listeners)i()}},An=t=>{const e=_t.get(t);if(e){e.snapshot=null;for(const r of e.listeners)r();e.listeners.size===0&&e.demandListeners.size===0&&_t.delete(t)}};let Jn;const fg=t=>{Jn=t},dp=(...t)=>{const[e]=t;let r,i=!1,n=!1,s=null;const a=()=>{if(!(n||!Zn(e)))return!r&&Jn&&(r=Jn(...t)),!r&&!i&&(i=!0,zr(()=>import("./shadow-projection-debug-publisher-N3qGz6sv.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10])).then(o=>{n||!Zn(e)||(r=o.createShadowProjectionDebugPublisher(...t),r.setSnapshot(s),r.publish())}).catch(o=>{n||console.error("Unable to load shadow diagnostics",o)}).finally(()=>{i=!1})),r};return{publish:()=>{var o;return(o=a())==null?void 0:o.publish()},setSnapshot(o){var c;s=o,(c=a())==null||c.setSnapshot(o)},markStale:()=>{var o;return(o=a())==null?void 0:o.markStale()},reset(){s=null,r==null||r.reset()},dispose(){n=!0,s=null,r==null||r.dispose()}}},oo=.01,hp=500,Cn=1500,In=(t=as)=>({lastFrameMs:null,sampleDurationMs:0,sampleCount:0,recoveryDurationMs:0,updateIntervalMs:Ct[t].targetFps?1e3/Ct[t].targetFps:0,targetFrameMs:Ct[t].targetFps?1e3/Ct[t].targetFps:0,depthScale:1,trial:null,adaptationBlocked:!1}),Dn=(t,e,r,{enabled:i=!0,allowCadenceReduction:n=!0}={})=>{var v,y;if(t.targetFrameMs===0)return t;if(!i)return t.lastFrameMs===null&&t.updateIntervalMs===t.targetFrameMs&&t.depthScale===1&&!t.adaptationBlocked?t:{...t,lastFrameMs:null,sampleDurationMs:0,sampleCount:0,recoveryDurationMs:0,updateIntervalMs:t.targetFrameMs,depthScale:1,trial:null,adaptationBlocked:!1};if(!r||!Number.isFinite(e))return t.lastFrameMs===null?t:{...t,lastFrameMs:null,sampleDurationMs:0,sampleCount:0,recoveryDurationMs:0,depthScale:1,trial:null,adaptationBlocked:!1};const s=t.lastFrameMs===null?0:e-t.lastFrameMs;if(s<=0)return{...t,lastFrameMs:e};const a=t.sampleDurationMs+s,o=t.sampleCount+1;if(a<hp)return{...t,lastFrameMs:e,sampleDurationMs:a,sampleCount:o};const c=a/o,l=t.targetFrameMs;if(t.trial&&c>=t.trial.baselineFrameMs*.95||t.adaptationBlocked)return{...t,lastFrameMs:e,sampleDurationMs:0,sampleCount:0,trial:null,adaptationBlocked:!0,updateIntervalMs:((v=t.trial)==null?void 0:v.updateIntervalMs)??t.updateIntervalMs,depthScale:((y=t.trial)==null?void 0:y.depthScale)??t.depthScale};const f=c<l/1.2?t.recoveryDurationMs+a:0,p=n?c>l+oo?Math.min(l*4,t.updateIntervalMs+l):f>=Cn?Math.max(l,t.updateIntervalMs-l):t.updateIntervalMs:l,h=c>l+oo&&(!n||t.updateIntervalMs>=l*4)?Math.max(.5,t.depthScale-.25):f>=Cn?Math.min(1,t.depthScale+.25):t.depthScale;return{...t,lastFrameMs:e,sampleDurationMs:0,sampleCount:0,recoveryDurationMs:f>=Cn?0:f,updateIntervalMs:p,depthScale:h,trial:p>t.updateIntervalMs||h<t.depthScale?{baselineFrameMs:c,updateIntervalMs:t.updateIntervalMs,depthScale:t.depthScale}:null,adaptationBlocked:!1}},co=4e3,Oc=(t,e,r)=>{t.updateMatrixWorld(!0),r==null||r.updateMatrixWorld(!0);const i=r?new kr().setFromProjectionMatrix(new Q().multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),r.coordinateSystem,r.reversedDepth):null;let n=e,s=e;const a=new Ne;return t.traverseVisible(o=>{var l,u;const c=o;c.userData[Si.OVERLAY]||!c.isMesh&&!c.isInstancedMesh||!((u=(l=c.geometry)==null?void 0:l.getAttribute("position"))!=null&&u.count)||(c.geometry.boundingBox||c.geometry.computeBoundingBox(),c.geometry.boundingBox&&(a.copy(c.geometry.boundingBox).applyMatrix4(c.matrixWorld),!(i&&!i.intersectsBox(a))&&(n=Math.min(n,a.min.y),s=Math.max(s,a.max.y))))}),[n,s]},mp=(t,e,r,i)=>{var o;const n=e.filter(c=>c.providesTerrain).flatMap(c=>{var u;const l=(u=c.getViewElevationRange)==null?void 0:u.call(c,r);return l?[l]:[]});if(n.length>0)return[Math.min(...n.map(c=>c[0])),Math.max(...n.map(c=>c[1]))];let[s,a]=Oc(t,i,r);for(const c of e){const l=(o=c.getViewElevationRange)==null?void 0:o.call(c,r);l&&(s=Math.min(s,l[0]),a=Math.max(a,l[1]))}return[s,a]},fp=[[-1,-1],[-1,1],[1,-1],[1,1]],pp=[[0,1],[1,3],[3,2],[2,0],[4,5],[5,7],[7,6],[6,4],[0,4],[1,5],[2,6],[3,7]],gp=(t,e,r,i)=>{t.updateMatrixWorld(!0);const n=Math.min(e,r),s=Math.max(e,r),a=[-1,1].flatMap(c=>fp.map(([l,u])=>new _(l,u,c).unproject(t))),o=a.filter(c=>c.y>=n&&c.y<=s).map(c=>c.clone());for(const[c,l]of pp){const u=a[c],d=a[l],f=d.y-u.y;if(!(Math.abs(f)<=Number.EPSILON))for(const p of[n,s]){const h=(p-u.y)/f;h<0||h>1||o.push(u.clone().lerp(d,h))}}for(const c of o){const l=c.clone().sub(i),u=Math.hypot(l.x,l.z);if(u<=co)continue;const d=co/u;l.x*=d,l.z*=d,c.copy(i).add(l)}return o},vp=`
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
`,lo="float getShadow( sampler2DShadow shadowMap,",Pn="#elif defined( SHADOWMAP_TYPE_VSM )",yp=()=>{const t=Ln.shadowmap_pars_fragment;if(!t.includes(lo)||!t.includes(Pn))throw new Error("Three PCF shader changed; validate receiver-plane shadow integration");return`uniform bool carmaReceiverPlaneShadow;
${t.replace(lo,"float carmaOriginalGetShadow( sampler2DShadow shadowMap,").replace(Pn,`${vp}
${Pn}`)}`},uo=new WeakMap,ho=(t,e)=>{const r=uo.get(t);if(r)return e!==void 0&&r.value!==e&&(r.value=e,t.needsUpdate=!0),r;const i={value:e??!1},n=t.onBeforeCompile,s=t.customProgramCacheKey(),a=yp();return t.onBeforeCompile=function(o,c){n.call(this,o,c),o.uniforms.carmaReceiverPlaneShadow=i,o.fragmentShader=o.fragmentShader.replace("#include <shadowmap_pars_fragment>",a)},t.customProgramCacheKey=()=>`${s}|carma-receiver-plane-pcf-v3|${i.value?"mesh":"stock"}`,t.needsUpdate=!0,uo.set(t,i),i},Nc=(t,e=!1)=>{if(t.userData[Si.OVERLAY])return;t.castShadow=t.userData.disableShadowCasting!==!0;const r=Array.isArray(t.material)?t.material:[t.material];t.receiveShadow=r.some(i=>i.visible&&i.colorWrite);for(const i of r)t.userData.isShadowTerrainSurface?ho(i,!0):(i.shadowSide??(i.shadowSide=Eo),ho(i,e))},Xt=(t,e=!1)=>{t.traverseVisible(r=>{const i=r;!i.isMesh&&!i.isInstancedMesh||Nc(i,e)})},Sp=t=>t.visible&&t.opacity>0,wp=(t,e)=>{let r=t;for(;r&&r!==e;){if(!r.visible)return!1;r=r.parent}return(Array.isArray(t.material)?t.material:[t.material]).some(Sp)},mo=t=>{t.traverse(e=>{const r=e;if(!r.isMesh&&!r.isInstancedMesh)return;const i=Array.isArray(r.material)?r.material:[r.material];for(const n of i)n.dispose()})},xp=(t,e)=>{const r=e.uniformColor!==null&&je(e.uniformColorMix??1,0,1)>=1;t.traverse(i=>{const n=i;if(!n.userData.isBuilding)return;const s=Array.isArray(n.material)?n.material:[n.material];for(const a of s){e.fullOpacity&&(a.opacity=1,a.transparent=!1,a.depthWrite=!0);const o=a;r&&e.uniformColor&&o.color&&(o.color.set(e.uniformColor),o.vertexColors=!1),a.needsUpdate=!0}})},_p=(t,e,r)=>{var d;const i=(d=e._originMerc)==null?void 0:d.toLngLat();if(!i)return null;const n=new os;n.name=`shadow-simulation-copy-${e.id}`;const s=new Map;let a=r,o=!1;const c=()=>{for(const[f,p]of s)f.visible=p;s.clear()},l=()=>{if(o)return;c(),mo(n),n.clear(),e.scene.updateMatrixWorld(!0);const f=[];e.scene.traverse(p=>{var v,y;const h=p;!h.isMesh&&!h.isInstancedMesh||(y=(v=h.geometry)==null?void 0:v.getAttribute("position"))!=null&&y.count&&wp(h,e.scene)&&f.push(h)});for(const p of f){const h=p.clone(!1);h.name=`${p.name||"mesh"}-shadow-simulation-copy`,h.visible=!0,h.matrixAutoUpdate=!1,h.matrix.copy(p.matrixWorld),h.material=Array.isArray(p.material)?p.material.map(v=>v.clone()):p.material.clone(),Nc(h),s.set(p,p.visible),p.visible=!1,n.add(h)}n.visible=n.children.length>0,xp(n,a)},u={id:`shadow-simulation-generic-${e.id}`,originLngLat:[i.lng,i.lat],root:n,update:()=>{},dispose:()=>{o||(o=!0,c(),mo(n),n.clear())}};return l(),n.visible?(t.addRuntime(u),{runtime:u,sync:l,updateBuildingAppearance(f){a=f,l()}}):(u.dispose(),null)},Lc=2500,Fc=.5,Tp="shadow-simulation-sky-light",Mp=t=>{const e=new Ne().setFromObject(t.scene);e.isEmpty()?t.center.set(0,0,0):e.getCenter(t.center)},bp=(t,e,r,i)=>{const n=new Ac(e),a=n.lights[0].target,o=new os;o.visible=!1,o.userData[Si.OVERLAY]=!0;const c=new Ro(void 0,0);c.name=Tp;const l=pf(i);l.mesh.userData[Si.OVERLAY]=!0;const u=new Map;t.traverse(f=>{const p=f;p.isAmbientLight&&u.set(p,p.intensity)});const d={scene:t,frame:e,controller:n,skyLight:c,atmosphericSky:l,ambientLightIntensities:u,lightTarget:a,sunVector:null,sunVectorRoot:o,center:new _,shadowCameraOffsetMeters:Math.max(Lc,r*1.5),shadowAreaMeters:r,sunVectorLengthMeters:r*Fc,sunVectorVisible:!1,shadowQuality:as,shadowIntensity:1,directionToSun:new _(0,1,0),sunColor:new ke(16773848),sunIntensity:qr,receiverWorldPoints:[],minimumElevationMeters:0,maximumElevationMeters:0,dirty:!0};return Xt(t),Mp(d),t.add(c),t.add(l.mesh),d},Rp=(t,e)=>{t.scene.traverse(i=>{const n=i;n.isAmbientLight&&!t.ambientLightIntensities.has(n)&&t.ambientLightIntensities.set(n,n.intensity)});const r=e.skyIrradianceCoefficients;if((r==null?void 0:r.length)===t.skyLight.sh.coefficients.length){r.forEach((i,n)=>{t.skyLight.sh.coefficients[n].copy(i)}),t.skyLight.intensity=qr;for(const i of t.ambientLightIntensities.keys())i.intensity=0;return}t.skyLight.sh.zero(),t.skyLight.intensity=0;for(const[i,n]of t.ambientLightIntensities)i.intensity=n},fo=(t,e,r=16773848,i,n=!0)=>{var a;const s=e.clone().normalize();t.directionToSun.copy(s),t.sunColor.set(r);for(const o of t.controller.lights)o.color.copy(t.sunColor);(a=t.sunVector)==null||a.update(t.center,s,t.sunVectorLengthMeters),t.sunVectorRoot.visible=t.sunVectorVisible&&!!t.sunVector,t.sunIntensity=i??qr;for(const o of t.controller.lights)o.intensity=t.sunIntensity;t.lightTarget.updateMatrixWorld(!0);for(const o of t.controller.lights)o.updateMatrixWorld(!0);n&&(t.controller.invalidate(),t.dirty=!0)},Ep=t=>{var e;for(const[r,i]of t.ambientLightIntensities)r.intensity=i;t.scene.remove(t.skyLight),t.scene.remove(t.atmosphericSky.mesh),t.sunVectorRoot.removeFromParent(),(e=t.sunVector)==null||e.dispose(),t.atmosphericSky.dispose(),t.controller.dispose()},Ap={[He.STANDARD]:0,[He.HIGH]:1,[He.MAX]:1,[He.ULTRA]:1,[He.EXTREME]:1},Cp=128,Ip={[He.STANDARD]:0,[He.HIGH]:0,[He.MAX]:1,[He.ULTRA]:2,[He.EXTREME]:3},Dp=(t,e,r,i)=>{var u,d;const n=t==null?void 0:t.tileManager;if(!t||!n||!Number.isFinite(n.deltaZoom)||!Number.isFinite(n.tileSize)||!n.tileManager)return()=>{};const s={deltaZoom:n.deltaZoom,terrainTileSize:n.tileSize,sourceTileSize:n.tileManager.tileSize,meshSize:t.meshSize,calculateTileZoom:(u=n.tileManager._source)==null?void 0:u.calculateTileZoom},o=1-Ap[r],c=e*2**o;n.deltaZoom=o,n.tileSize=c,n.tileManager.tileSize=c,t.meshSize=Cp;const l=Ip[r];if(l>0&&n.tileManager._source){s.calculateTileZoom||i==null||i();const f=n.tileManager._source.calculateTileZoom;f&&(n.tileManager._source.calculateTileZoom=(...p)=>f(...p)+l)}return t._meshCache={},(d=n.freeRtt)==null||d.call(n),()=>{var f;n.deltaZoom=s.deltaZoom,n.tileSize=s.terrainTileSize,n.tileManager.tileSize=s.sourceTileSize,t.meshSize=s.meshSize,n.tileManager._source&&(n.tileManager._source.calculateTileZoom=s.calculateTileZoom),t._meshCache={},(f=n.freeRtt)==null||f.call(n)}},Er="carma-shadow-map-style-base",Or={OPAQUE:"opaque",LABELS:"labels"},Pp=(t,e=Io,r=()=>!0,i=()=>Or.OPAQUE,n=He.MAX)=>{const s=e.id,a=t;if(typeof a.getTerrain!="function"||typeof a.getSource!="function"||typeof a.setTerrain!="function")return Object.assign(()=>{},{refresh:()=>{}});const o=a.getTerrain(),c=new Map,l=new Map;let u=!1,d=!1,f=!1,p=null,h=!1,v,y=null,g=()=>{},T=null;const R=()=>{p&&(h?delete p.getMeshFrameDelta:p.getMeshFrameDelta=v,p=null,v=void 0,h=!1)},C=()=>{const D=a.terrain;!D||D===p||(R(),typeof D.getMeshFrameDelta=="function"&&(h=!Object.prototype.hasOwnProperty.call(D,"getMeshFrameDelta"),v=D.getMeshFrameDelta,D.getMeshFrameDelta=()=>0,p=D))},b=()=>{var V;const D=a.terrain;!D||D===y||(g(),y=D,g=Dp(D,e.tileSize,n,()=>{var X;(X=t.setSourceTileLodParams)==null||X.call(t,9.314,3,e.id)}),(V=t.triggerRepaint)==null||V.call(t))},P=D=>`${D.type}:${String(D.source)}:${String(D["source-layer"])}`,A=()=>{var X;const V=t.getStyle().layers??[];for(const Y of V){if(!Ml(Y))continue;const de=P(Y);let ce=l.get(Y.id);const Te=t.getLayoutProperty(Y.id,"visibility");!ce||ce.signature!==de?(ce={signature:de,value:Te},l.set(Y.id,ce)):Te!=="none"&&(ce.value=Te),Te!=="none"&&t.setLayoutProperty(Y.id,"visibility","none")}if(r()){t.getLayer(Er)||(t.addLayer({id:Er,type:"background",paint:{"background-color":nn.baseColor,"background-opacity":nn.opacity}},(X=V[0])==null?void 0:X.id),f=!0);for(const Y of V){if(Y.id===Er||Y.type==="custom")continue;const de=nn.opaqueDrapeProperties.get(Y.type);if(!de)continue;const ce=P(Y);let Te=c.get(Y.id);const L=t.getPaintProperty(Y.id,de);!Te||Te.signature!==ce?(Te={signature:ce,property:de,value:L},c.set(Y.id,Te)):L!==1&&(Te.value=L),L!==1&&t.setPaintProperty(Y.id,de,1)}}},E=D=>{var V;for(const[X,Y]of D)try{const de=(V=t.getStyle().layers)==null?void 0:V.find(({id:ce})=>ce===X);de&&P(de)===Y.signature&&t.getLayoutProperty(X,"visibility")==="none"&&t.setLayoutProperty(X,"visibility",Y.value===void 0?null:Y.value)}catch{}D.clear()},B=()=>{var D;for(const[V,X]of c)try{const Y=(D=t.getStyle().layers)==null?void 0:D.find(({id:de})=>de===V);Y&&P(Y)===X.signature&&t.getPaintProperty(V,X.property)===1&&t.setPaintProperty(V,X.property,X.value===void 0?null:X.value)}catch{}if(c.clear(),f){f=!1;try{t.getLayer(Er)&&t.removeLayer(Er)}catch{}}},O=()=>{if(!(u||d)){d=!0;try{if(ii(t)){R(),g(),g=()=>{},y=null,B(),E(l),a.getTerrain()&&a.setTerrain(null),T=null;return}if(!a.getSource(s)&&t.isStyleLoaded()&&t.addSource(s,{type:"raster-dem",tiles:[Tl(e)],tileSize:e.tileSize,minzoom:e.minzoom,maxzoom:e.maxzoom,encoding:e.encoding,bounds:[...e.bounds]}),i()===Or.LABELS?(B(),E(l)):A(),a.getSource(s)){const D=a.getTerrain();((D==null?void 0:D.source)!==s||(D.exaggeration??1)!==1)&&a.setTerrain({source:s,exaggeration:1}),b(),C()}T=null}catch(D){const V=D instanceof Error?D.message:String(D);V!==T&&(T=V,console.error("[shadow-simulation] MapLibre terrain setup failed",D))}finally{d=!1}}},j=()=>{d||O()};t.on(xe.STYLE_DATA,O),t.on(xe.TERRAIN,j);let K=ii(t);const N=_l(t,()=>{const D=ii(t);D!==K&&(K=D,O())});return O(),Object.assign(()=>{if(!u){u=!0,N(),t.off(xe.STYLE_DATA,O),t.off(xe.TERRAIN,j),R(),g(),y=null,B(),E(l);try{!ii(t)&&o&&a.getSource(o.source)!==void 0?a.setTerrain(o):a.getTerrain()&&a.setTerrain(null)}catch{}}},{refresh:()=>{!u&&!d&&O()}})},po=1e3,Op=(t,e,r,i)=>{let n=Number.NEGATIVE_INFINITY,s=null,a=null;const o=u=>{s=null,n=performance.now();const d=`#${u.color.getHexString()}`;if(r()||e(d),!t.isStyleLoaded())return;const f=[1.5,u.azimuthDegrees,90-u.elevationDegrees],p=je(u.relativeIntensity,0,1),h=t.getLight(),v=h.position;h.anchor==="map"&&Array.isArray(v)&&v.length===f.length&&v.every((y,g)=>y===f[g])&&h.color===d&&h.intensity===p||t.setLight({anchor:"map",position:f,color:d,intensity:p})},c=()=>{a!==null&&(globalThis.clearTimeout(a),a=null);const u=s;u&&o(u)};return{apply:u=>{if(s=u,!r()&&!i()){c();return}const d=performance.now()-n;if(d>=po){c();return}a===null&&(a=globalThis.setTimeout(()=>{a=null;const f=s;f&&o(f)},po-d))},flush(u){u&&(s=u),c()},dispose(){a!==null&&(globalThis.clearTimeout(a),a=null)}}},On=new Q,Np=(t,e)=>{const r=()=>{var o,c;return((c=(o=e())==null?void 0:o.localFrame)==null?void 0:c.currentToReference)??(t==null?void 0:t.currentToReference)??On},i=new ta,n=new Ii;return{frameFromScene:r,getFrameCamera:o=>{const c=o.renderCamera,{localFrame:l}=o;if(!l||l.currentToReference.equals(On))return c;const u=c instanceof ta?i.copy(c,!1):n.copy(c,!1);return u.matrixAutoUpdate=!1,u.matrixWorldAutoUpdate=!1,u.matrixWorld.multiplyMatrices(l.currentToReference,c.matrixWorld),u.matrixWorld.decompose(u.position,u.quaternion,u.scale),u.matrix.copy(u.matrixWorld),u.matrixWorldInverse.multiplyMatrices(c.matrixWorldInverse,l.referenceToCurrent),u},toFrameVolumes:(o,c)=>{if(o!=null&&o.mountsOnLocalFrame||c.length===0)return c;const l=r();if(l.equals(On))return c;const u=new Ne;return c.map(d=>(u.min.set(...d.minimum),u.max.set(...d.maximum),u.applyMatrix4(l),{...d,minimum:[u.min.x,u.min.y,u.min.z],maximum:[u.max.x,u.max.y,u.max.z]}))}}},Lp=900,fi=.01,Fp=.25,Bp=1e3,Up=10,Hp="shadow-simulation-raster-dem",kp=200,pi=100,zp=1e3,Vp=(t,e={})=>{var Ws,Gs,js,Ys,qs,Ks,Xs;const{shadowAreaMeters:r,terrain:i,mapLibreTerrain:n,terrainQuality:s=He.MAX}=e,a=bl();let o=i;const c=r??Lp,l=t.getLight();let u=!0;const d=()=>{const m=be(t).filter(S=>S.providesTerrain===!0);return m.length>0&&m.every(S=>S.mapStyleProjectionBlend===Cl.OVERLAY)?Or.LABELS:Or.OPAQUE},f=Pp(t,n??Io,()=>u,d,a?He.STANDARD:s),p=()=>{N.setMeshLabelStyle(d()===Or.LABELS)};let h=null,v={fullOpacity:!0,uniformColor:null,uniformColorMix:0,textureSaturation:1,textureColorCorrection:!0},y=1,g=null;const T=()=>{var m,S;return g??((S=(m=be(t).find(x=>x.providesTerrain===!0))==null?void 0:m.getErrorTarget)==null?void 0:S.call(m))??Fl};let R=a?on:void 0;const C=new WeakMap;let b=null,P={useTransmittanceLut:!0,useIrradianceLut:!0},A=!1,E=!1,B=!1,O=null,j=new ke(((Ws=o==null?void 0:o.material)==null?void 0:Ws.color)??Do);const K=()=>{var m,S,x,M;if(u){O==null||O(),O=null,(S=(m=N.layer).setMapStyleProjectionVisible)==null||S.call(m,!0);return}(M=(x=N.layer).setMapStyleProjectionVisible)==null||M.call(x,!1),O??(O=Il(t))},N=Rl(t,{mapStylePresentation:!0}),oe=(m,S)=>{var x,M;return{observer:{longitude:m[0],latitude:m[1],altitudeMeters:0},scenePosition:((M=(x=N.layer).projectLngLatToScene)==null?void 0:M.call(x,[m[0],m[1]],pi))??new _(0,pi,0),sceneFromLocal:S}};let D=null;const V=((js=(Gs=N.layer).getLocalFrame)==null?void 0:js.call(Gs))??null;let X=(V==null?void 0:V.revision)??0,Y=V?oe(V.lngLat,V.sceneFromLocalRotation):oe([t.getCenter().lng,t.getCenter().lat]);const{frameFromScene:de,getFrameCamera:ce,toFrameVolumes:Te}=Np(V,()=>D),L=new uf;let Z=()=>{},Ae=m=>Z(m),J=null,Tt=0;const mt=m=>{if(!o)return null;const S=t.getCenter(),{errorTargetPixels:x,motionErrorTargetPixels:M,shadowLevelOffset:ee,minimumLevel:H,maximumLevel:F,maxSelectionTiles:W,requestConcurrency:re,maxCacheBytes:he,maxCachedMeshes:we,maxCachedMeshBytes:ve,persistBaseTiles:Se,baseRasterEdgePixels:G,baseCoverageMemoryShare:_e,meshSegments:Yt,maximumMeshSegments:qt,noDataHeightMeters:tn,heightRangeMeters:ei,geometryProjection:ti,heightOffsetMeters:ri,heightOffsetRangeMeters:bt,material:Je,...Nt}=Dl(o,a);return Pl(`${Hp}-${++Tt}`,Nt,m??[S.lng,S.lat],{errorTargetPixels:x??cn,motionErrorTargetPixels:M,shadowLevelOffset:ee,minimumLevel:H,maximumLevel:F,maxSelectionTiles:W,requestConcurrency:re,maxCacheBytes:he,maxCachedMeshes:we,maxCachedMeshBytes:ve,persistBaseTiles:Se,baseRasterEdgePixels:G,baseCoverageMemoryShare:_e,meshSegments:Yt??Nt.tileSize,maximumMeshSegments:qt,noDataHeightMeters:tn,heightRangeMeters:ei,geometryProjection:ti??"ecef",heightOffsetMeters:ri,heightOffsetRangeMeters:bt,material:Je,receivesMapStyleTexture:!0,onContentChanged:at=>Ae(at),onError:at=>{const Kt=at instanceof Error?at.message:String(at);Kt!==J&&(J=Kt,console.error("[shadow-simulation] Raster DEM terrain runtime failed",at))}})},ge=()=>be(t).some(m=>m.providesTerrain===!0),Ke=()=>be(t).every(m=>{var S,x;return!m.providesTerrain||(((S=m.hasRenderableContent)==null?void 0:S.call(m))??((x=m.isMainViewReady)==null?void 0:x.call(m))??!0)});let Me=be(t).filter(m=>m.providesTerrain),U=ge()?null:mt(),Xe=U===null;U&&N.layer.addRuntime(U);const le=((qs=(Ys=N.layer).getLocalFrameGroup)==null?void 0:qs.call(Ys))??N.layer.getScene(),w=bp(N.layer.getScene(),le,c,j),ft=new _;let ze=0,Dt=0;const Ce=Pf({getRequest:()=>{var x;if(A||!o||!U||!Xe||xr(t)||B||E||$e!==0||!D)return null;const m=(x=U.getIdlePrefetchAvailability)==null?void 0:x.call(U);if(!(m!=null&&m.ready))return null;const S=U;return{key:JSON.stringify([Tt,ze,Dt,D.renderCamera.projectionMatrix.elements,D.renderCamera.matrixWorldInverse.elements,D.viewport.x,D.viewport.y]),run:async M=>{var H;if(await S.prefetchIdleTerrain(M),M.aborted||!it||!Gt||!Oe()||!$||!D||!N.layer.runIdleRender||pt.size>0||gt().some(F=>F!==S&&F!==jt)||Mt.some(({id:F})=>!/^\d+:[-\d]+:[-\d]+$/.test(F)))return;const ee=((H=S.getIdleShadowRegions)==null?void 0:H.call(S))??[];ee.length===0||!S.prepareIdleShadowRegion||(await $.prewarm({cells:Eu(Mt),frame:D,planningCamera:ce(D),lighting:{directionToSun:w.directionToSun,color:w.sunColor,intensity:w.sunIntensity,shadowIntensity:w.shadowIntensity},targetPixels:Ct[w.shadowQuality].shadowTexelErrorPixels,samples:wr(),signal:M,prepare:async(F,W)=>{const re=Au(F.receiverBounds,ee);return re===null?{covered:!1,group:null,isCurrent:()=>!1,dispose:()=>{}}:S.prepareIdleShadowRegion({receiverBounds:F.receiverBounds,casterBounds:F.casterBounds,terrainLevel:re},W)}}),M.aborted||Ze.publish())}}}});let Ie=null,dr="";const Kr=(m,S,x)=>{const M=`${m}:${S}`;M!==dr&&(dr=M,console.error(`[SHADOW] Atmospheric update rejected; retaining last valid frame (${m}: ${S})`,{phase:m,reason:S,...x}))},Bc=()=>{dr=""},Be=()=>{Ce.cancel(),ze+=1,Dt+=1},hr=Op(t,m=>N.setLocationLabelColor(m),()=>E,()=>B),zt=m=>{const S={longitude:Y.observer.longitude,latitude:Y.observer.latitude,altitudeMeters:pi},x=nf(m.instant,S,Y);if(x)return Kr("sunlight input",x,{observer:S,skyReference:Y}),b;L.ensure(()=>{if(A||!h)return;Be();const H=zt(h);H&&hr.apply(H),t.triggerRepaint()},P),L.ensureSky(()=>{A||!h||(Be(),zt(h),t.triggerRepaint())});let M;try{M=L.evaluate(m.instant,S,P,Y)}catch(H){return Kr("sunlight generation","generator threw",{observer:S,error:H}),b}const ee=sf(M);return ee?(Kr("sunlight output",ee,{observer:S,sample:M}),b):(Bc(),b=M,w.atmosphericSky.update(M.skyFrame,L.skyTextures),Rp(w,M),fo(w,M.directionToSun.clone().transformDirection(de()),M.radiance,qr),M)};Z=m=>{A||(Ce.cancel(),$==null||$.invalidateContent(m),w.controller.invalidate(),w.dirty=!0)};const pt=new Map,gt=()=>{const m=be(t);return U&&!m.includes(U)?[U,...m]:m};let Vt=null,vt=null,Ve=null,yt=null,Rs=[];const Es=()=>gt().flatMap(m=>{var S;return Te(m,((S=m.getActiveTileVolumes)==null?void 0:S.call(m))??[])}),mr=()=>Vt??Es(),As=(m,S=fi*4)=>{if(!ge())return;const x=mr(),M=T(),ee=m?io(m,x,M):Math.max(M,...x.filter(({loadReason:F})=>F!==rr.SHADOW).map(({errorPixels:F})=>F).filter(F=>Number.isFinite(F)));let H=1/0;for(const F of x){if(F.loadReason===rr.SHADOW||m&&(F.minimum[0]>=m.max.x||F.maximum[0]<=m.min.x||F.minimum[2]>=m.max.z||F.maximum[2]<=m.min.z))continue;const W=F.geometricError,re=F.errorPixels;W!==void 0&&re!==void 0&&Number.isFinite(W)&&Number.isFinite(re)&&W>0&&re>0&&(H=Math.min(H,W/re))}return ep({stageErrorPixels:ee,targetErrorPixels:M,groundTexelTargetMeters:S,finalBiasMeters:fi,maximumCoarseBiasMeters:Fp,metersPerPixel:Number.isFinite(H)?H:0})},Cs=m=>{const S=Vt,x=vt,M=Ve,ee=yt;if(Vt=S??Es(),vt=x??new Map,Ve=M??new Map,yt=ee??new Map,!S){const H=Qf(Rs,Vt);H.length>0&&($==null||$.invalidateContent(H),gr.length=0),Rs=Vt}try{return m()}finally{Vt=S,vt=x,Ve=M,yt=ee}};let Pt=null,fr=null,ji=Number.NEGATIVE_INFINITY,Yi=!1;const Is=new WeakMap,Uc=m=>{var M,ee,H;if(!m)return"none";const S=t.getCenter(),x=t.getCanvas();return[Math.round(S.lng*1e7),Math.round(S.lat*1e7),Math.round((((M=t.getZoom)==null?void 0:M.call(t))??0)*1e4),Math.round((((ee=t.getBearing)==null?void 0:ee.call(t))??0)*1e3),Math.round((((H=t.getPitch)==null?void 0:H.call(t))??0)*1e3),`${x.clientWidth||x.width}x${x.clientHeight||x.height}`,(h==null?void 0:h.azimuthDegrees)??"no-sun",(h==null?void 0:h.elevationDegrees)??"no-sun",w.shadowQuality].join(";")},pr=m=>{var W,re,he,we,ve,Se;if(E){const G=performance.now();if(G-ji<zp){Yi=!0;return}ji=G}fr=m,Yi=!1;const S=Uc(m),x=D?ce(D):null,M=m&&x?new kr().setFromProjectionMatrix(new Q().multiplyMatrices(x.projectionMatrix,x.matrixWorldInverse),x.coordinateSystem,x.reversedDepth):null,ee=new Ne,H=M?Te(U,((W=U==null?void 0:U.getActiveTileVolumes)==null?void 0:W.call(U))??[]).filter(G=>(ee.min.fromArray(G.minimum),ee.max.fromArray(G.maximum),M.intersectsBox(ee))):void 0,F=[...be(t),...U?[U]:[]];for(const G of new Set(F)){if((re=G.setShadowStagePresentationGate)==null||re.call(G,!1),!G.providesTerrain){G===U?(he=G.setErrorTarget)==null||he.call(G,(o==null?void 0:o.errorTargetPixels)??cn):(we=G.setErrorTargetOverride)==null||we.call(G,g),(ve=G.setShadowView)==null||ve.call(G,m?{...m,terrainReceivers:H}:null);continue}Is.get(G)!==S&&(Is.set(G,S),(Se=G.setShadowView)==null||Se.call(G,m))}},qi=m=>{var S;Pt=m;for(const x of new Set([...be(t),...U?[U]:[]]))(S=x.setLiveShadowView)==null||S.call(x,m);B||pr(m)};let it=!a;a&&(w.shadowQuality=$t.FPS_120);let Ki={},Pe=sn(an(Ki,a),w.shadowQuality),nt=null;const Xr=()=>({format:Pe.shadowBufferFormat,msaaSamples:Pe.shadowBufferLayout===ra.TILED?0:lp(Pe,(Pe.shadowBufferFormat===Qt.SDR_8?nt==null?void 0:nt.sdrSamples:nt==null?void 0:nt.hdrSamples)??[0,2,4])});let Wt=Xr(),$e=0,Xi=!1,$r=!1;const gr=[];let Qe=!0,$i=[],Ds="",st=In(w.shadowQuality),Qr=Number.POSITIVE_INFINITY,Gt=!0,Ot=no(4096);w.controller.setMaxShadowMapSize(Ot.maxShadowMapSize);let $=null,Qi=null,Mt=[];const Oe=()=>Pe.shadowBufferLayout===ra.TILED,vr=()=>{$==null||$.dispose(),$=null,Qi=null,Mt=[]},Ze=dp(t,()=>({bufferLayout:Pe.shadowBufferLayout,sunDiscSamples:Pe.shadowSunDiscSamples,tiledStats:Oe()?($==null?void 0:$.stats)??null:null}));w.controller.setSoftSun(it);const yr=(m,S)=>Math.round(m/S)*S,Hc=m=>{var x,M,ee,H;const S=t.getCenter();return[yr(S.lng,1e-7),yr(S.lat,1e-7),yr(((x=t.getZoom)==null?void 0:x.call(t))??0,1e-4),yr(((M=t.getBearing)==null?void 0:M.call(t))??0,.001),yr(((ee=t.getPitch)==null?void 0:ee.call(t))??0,.001),`${m.viewport.x}x${m.viewport.y}`,(H=m.cssViewport)==null?void 0:H.toArray().join("x")].join(";")},Sr=(m=!0,S=!0,x)=>{var re,he,we,ve;const M=t.getCenter(),ee=(U==null?void 0:U.getElevation(M.lng,M.lat))??0,H=(he=(re=N.layer).projectLngLatToScene)==null?void 0:he.call(re,[M.lng,M.lat],ee);if(!H){h&&zt(h),S&&t.triggerRepaint();return}w.center.copy(H).applyMatrix4(de()),Ie??(Ie=Oc(w.scene,H.y));const[F,W]=Ie;if(x){const Se=gp(ce(x),F,W,w.center);if(Se.length>0){const G=new Ne().setFromPoints(Se).getSize(new _),_e=Math.max(...Se.map(Yt=>Yt.distanceTo(w.center)));w.sunVectorLengthMeters=Math.min(G.x,G.z)*Fc,w.shadowAreaMeters=Math.max(r??0,Up,_e*2),$i=Se}}else Qe=!0;if(w.shadowCameraOffsetMeters=Math.max(Lc,w.shadowAreaMeters*1.5),w.receiverWorldPoints=$i,w.minimumElevationMeters=F,w.maximumElevationMeters=W,w.dirty=!0,h&&(m||!b))zt(h);else{w.lightTarget.position.copy(w.center);for(const Se of w.controller.lights)Se.target.position.copy(w.center),Se.target.updateMatrixWorld(!0);(we=w.sunVector)==null||we.root.position.copy(w.center),(ve=w.sunVector)==null||ve.root.updateMatrixWorld(!0)}S&&t.triggerRepaint()},jt={id:"shadow-simulation-controller",originLngLat:[t.getCenter().lng,t.getCenter().lat],root:new os,updatePriority:kp,update(m){var ei,ti,ri;D=m;const{localFrame:S}=m;S&&S.revision!==X&&(X=S.revision,Y=oe(S.lngLat,S.sceneFromLocalRotation),b&&(b=cf(b,Y),w.atmosphericSky.update(b.skyFrame,L.skyTextures)));const x=(ti=(ei=N.layer).getRenderer)==null?void 0:ti.call(ei);x&&!nt&&(nt=cp(x),Wt=Xr(),Ot=no(Math.min(nt.maxTextureSize,nt.maxRenderbufferSize)),w.controller.setMaxShadowMapSize(Ot.maxShadowMapSize)),Qr=op(Ot.maxAccumulationPixels,Wt),Gt=m.viewport.x*m.viewport.y<=Qr,st=Dn(st,performance.now(),B,{enabled:Pe.shadowAdaptiveQuality,allowCadenceReduction:!Oe()});const M=Math.max(0,m.lodCamera.position.y-m.lookTarget.y),ee=pi+M,H=Y.scenePosition.y+M;![...m.lodCamera.matrixWorld.elements,...m.lodCamera.projectionMatrix.elements].every(Number.isFinite)||!Number.isFinite(ee)||!Number.isFinite(H)?Kr("render camera","local Three.js camera matrix or altitude is invalid",{altitudeMeters:ee,cameraHeightAboveTargetMeters:M,matrixWorld:m.lodCamera.matrixWorld.elements,projectionMatrix:m.lodCamera.projectionMatrix.elements}):(w.atmosphericSky.updateViewCamera(m.lodCamera),w.atmosphericSky.updateObserverScenePosition(ft.set(Y.scenePosition.x,H,Y.scenePosition.z)));const W=Hc(m);if((Qe||W!==Ds)&&(performance.now(),Ds=W,Ie=B?Ie??[w.minimumElevationMeters,w.maximumElevationMeters]:mp(w.scene,be(t),m.renderCamera,w.center.y),Sr(!1,!1,m),Qe=!1),!w.dirty)return;w.sunVectorVisible&&w.sunVector&&w.sunVector.root.cone.position.y!==w.sunVectorLengthMeters&&fo(w,w.directionToSun,w.sunColor,w.sunIntensity),ze+=1;const re=mr(),he=re.flatMap(({minimum:bt,maximum:Je})=>Lo(ce(m),new Ne(new _(...bt),new _(...Je))));if(w.receiverWorldPoints=he.length>0?he:$i,w.receiverWorldPoints.length===0||!h){qi(null),Ze.setSnapshot(null),An(t);return}if(Oe()){Mt=Ru(re.filter(({loadReason:Je})=>Je!==rr.SHADOW).map(({id:Je,minimum:Nt,maximum:at,receiverObjectId:Kt})=>({id:Je,receiverObjectId:Kt,bounds:new Ne(new _(...Nt),new _(...at))})));const bt=_u(Mt,ce(m));bt.length>0&&(w.receiverWorldPoints=[...bt])}const we=so(Ot.maxShadowMapSize,w.shadowQuality,m.viewport.x*m.viewport.y,B&&ge()?st.depthScale:1),ve=m.cssViewport??m.viewport,Se=so(Ot.maxShadowMapSize,w.shadowQuality,ve.x*ve.y,B?st.depthScale:1),G=w.controller.update({maxReceiverBiasMeters:As(),receiverTexelMeters:ge()?void 0:Nl(t.getZoom(),Ll(((ri=U==null?void 0:U.originLngLat)==null?void 0:ri[1])??t.getCenter().lat),{tileSize:512})*Ct[w.shadowQuality].shadowTexelErrorPixels,mountedShadowCamera:!ge(),rasterKey:ge()?void 0:String(t.getZoom()),receiverWorldPoints:w.receiverWorldPoints,receiverAnchorWorldPosition:ge()?w.center:new _,minimumElevationMeters:w.minimumElevationMeters,maximumElevationMeters:w.maximumElevationMeters,directionToSun:w.directionToSun,color:w.sunColor,intensity:w.sunIntensity,shadowIntensity:w.shadowIntensity,quality:w.shadowQuality,mapTexelBudget:we,casterMapTexelBudget:Se,groundTexelFit:ge()?Pe.shadowGroundTexelFit:!1,stabilizeMapSize:B});if(w.dirty=!1,!G){qi(null),Ze.setSnapshot(null),An(t);return}const _e=G.camera,Yt=w.controller.lights[0].shadow.camera,qt=b==null?void 0:b.skyFrame.directionToSunECEF;qi({camera:Yt,directionToSunECEF:qt?[qt.x,qt.y,qt.z]:void 0,casterAngularRadiusRadians:it?Br:0,shadowMapSize:{width:(_e.rightMeters-_e.leftMeters)/G.casterMetersPerTexel[0],height:(_e.topMeters-_e.bottomMeters)/G.casterMetersPerTexel[1]}});const tn=Zn(t);if(_e&&tn){m.lodCamera.updateMatrixWorld(!0),m.lodCamera.updateProjectionMatrix();const bt=gt().flatMap(Je=>{var Nt;return(((Nt=Je.getActiveTileVolumes)==null?void 0:Nt.call(Je))??[]).map(({id:at,loadReason:Kt,minimum:Yc,maximum:qc})=>({id:at,loadReason:Kt,minimum:Yc,maximum:qc}))});Ze.setSnapshot({bufferLayout:Pe.shadowBufferLayout,sunDiscSamples:Pe.shadowSunDiscSamples,tiledStats:null,cameraRangeMeters:Yt.position.distanceTo(w.controller.lights[0].target.position),leftMeters:_e.leftMeters,rightMeters:_e.rightMeters,bottomMeters:_e.bottomMeters,topMeters:_e.topMeters,nearMeters:_e.nearMeters,farMeters:_e.farMeters,projectionMatrixElements:_e.projectionMatrixElements,shadowMapWidth:_e.shadowMapWidth,shadowMapHeight:_e.shadowMapHeight,minimumElevationMeters:w.minimumElevationMeters,maximumElevationMeters:w.maximumElevationMeters,sceneAnchorPositionElements:w.center.toArray(),mainCamera:{viewMatrixElements:[...m.lodCamera.matrixWorldInverse.elements],projectionMatrixElements:[...m.lodCamera.projectionMatrix.elements],nearMeters:m.lodCamera.near,farMeters:m.lodCamera.far,viewportWidth:m.viewport.x,viewportHeight:m.viewport.y},tileVolumes:bt,shadow:G,atmosphericSunlight:b?{azimuthDegrees:b.azimuthDegrees,elevationDegrees:b.elevationDegrees,relativeIntensity:b.relativeIntensity,color:`#${b.color.getHexString()}`,transmittanceReady:b.atmosphericTransmittanceReady,irradianceReady:b.atmosphericIrradianceReady}:null}),Ze.publish()}},dispose:()=>{}};N.layer.addRuntime(jt);const wr=()=>Pe.shadowSunDiscSamples,Ps=()=>{var x,M;if(!Oe()||!D||w.directionToSun.y<=0)return null;const m=(M=(x=N.layer).getRenderer)==null?void 0:M.call(x);if(!m)return null;let S=!1;if(!$||Qi!==m){const ee=Mt;vr(),Mt=ee,Qi=m,$=new Xf(w.scene,m,{light:w.controller.lights[0],sky:w.atmosphericSky.mesh,overlay:w.sunVectorRoot,frame:w.frame,maximumMapSize:Ot.maxShadowMapSize,isCorridorReady:(H,F,W)=>{const re=En(H,F,W),he=vt==null?void 0:vt.get(re);if(he!==void 0)return he;const we=gt().every(ve=>{var Se;return((Se=ve.isShadowRegionReady)==null?void 0:Se.call(ve,H,F,W))??(ve.getRequestDemand?ve.getRequestDemand()===0:!ve.providesTerrain||!xr(t))});return vt==null||vt.set(re,we),we},receiverStageError:H=>{const F=En(H),W=yt==null?void 0:yt.get(F);if(W!==void 0)return W;const re=io(H,mr(),ge()?T():(o==null?void 0:o.errorTargetPixels)??cn);return yt==null||yt.set(F,re),re},receiverBiasLimit:(H,F)=>As(H,F)??fi,onPresentedPages:(H,F)=>{var re;const W=Zf(mr(),F.map(({id:he,receiverBounds:we})=>({id:he,bounds:we})),H.map(({id:he,receiverBounds:we})=>({id:he,bounds:we})));if(W.length!==0)for(const he of gt())(re=he.acknowledgeShadowStage)==null||re.call(he,W)},corridorRevision:(H,F,W)=>{var Se;const re=En(H,F,W),he=Ve==null?void 0:Ve.get(re);if(he!==void 0)return he;const we=[];for(const G of gt()){if(G===jt)continue;const _e=(Se=G.getShadowRegionRevision)==null?void 0:Se.call(G,H,F,W);if(!_e)return Ve==null||Ve.set(re,null),null;we.push(JSON.stringify([G.id,_e]))}const ve=we.length?JSON.stringify(we.sort()):null;return Ve==null||Ve.set(re,ve),ve},dateTimeKey:()=>(h==null?void 0:h.instant.toISOString())??null,worldBasis:()=>{const H=N.layer.projectSceneToLngLat([0,0,0]);if(!H)throw new Error("Shared scene origin is not initialized");const F=$l.MercatorCoordinate.fromLngLat(H,0);return Jf(F.x,F.y,F.meterInMercatorCoordinateUnits())},requestRepaint:()=>t.triggerRepaint(),visualEpoch:()=>Dt,auditCorridors:H=>{const F=mr(),W=gt();return H.map(({id:re,casterBounds:he,receiverBounds:we})=>tp({id:re,casterBounds:he,sunElevationDegrees:(h==null?void 0:h.elevationDegrees)??0,volumes:F,regions:W.flatMap(ve=>{var G;const Se=(G=ve.getShadowRegionDiagnostics)==null?void 0:G.call(ve,he,void 0,we);return Se?[Se]:[]})}))},runIdleRender:H=>{var F,W;return((W=(F=N.layer).runIdleRender)==null?void 0:W.call(F,H))??!1}}),S=!0}return!B||S?$.update(Mt,D,{maxReceiverBiasMeters:ge()?fi:void 0,directionToSun:w.directionToSun,color:w.sunColor,intensity:w.sunIntensity,shadowIntensity:w.shadowIntensity},Ct[w.shadowQuality].shadowTexelErrorPixels,ce(D)):$.updatePresentation(D,ce(D)),$},kc=$f(),Zr=()=>Oe()&&kc(gt()),Os={onSettled:Ce.onSettled,onPresented:()=>{var S;const m=performance.now();for(const x of be(t))(S=x.onShadowPresented)==null||S.call(x,m)},get options(){return Wt},get maxRenderTargetPixels(){return Qr},get rounds(){return wr()},epoch:()=>ze,visualEpoch:()=>Dt,pending:()=>Gt&&it&&!E&&(!Xe||Zr()||!Oe()&&!Ke()||!Oe()&&xr(t)||B||!Oe()&&$e!==0),active:()=>Gt&&it&&Xe&&!Zr()&&(Oe()||Ke())&&(Oe()||!xr(t))&&!B&&!E&&(Oe()||$e===0)&&h!==null&&Pt!==null&&w.receiverWorldPoints.length>0,retainSettledFrame:()=>!E&&Gt&&it&&h!==null&&Pt!==null&&w.receiverWorldPoints.length>0,prepareRound:m=>{Oe()||w.controller.applySunDiscSample(m,wr())},finishRound:()=>w.controller.restoreSunDiscCenter(),get renderProgressive(){if(Oe())return(m,S)=>!it||E||!Gt?null:Cs(()=>{if(Zr())return null;const x=Ps();if(!x)return null;const M=x.renderProgressive(m,{...S,samples:wr(),maxRenderTargetPixels:Qr,options:Wt});return Ze.publish(),M})},renderScene:(m,S)=>!it||E||!Oe()?!1:Cs(()=>{if(Zr())return!1;const x=Ps();if(!x)return!1;const M=x.render(m,S,wr(),!B);return Ze.publish(),M})};(Xs=(Ks=N.layer).setAccumulationController)==null||Xs.call(Ks,Os);const Jr=()=>{Ie=null,Qe=!0,Sr()};Ae=m=>{Z(m),Jr()};const Ns=()=>{Ce.cancel(),$==null||$.pausePending(),st=Dn(st,performance.now(),!1),B=!0,Qe=!0},Zi=()=>{Ce.cancel(),Qe=!0},Ls=()=>{B=!1,st=Dn(st,performance.now(),!1),Xi?(Xi=!1,en()):Jr(),b&&hr.flush(b),fr!==Pt&&pr(Pt)},Fs=()=>{Zi(),t.triggerRepaint()};t.on(xe.MOVE_START,Ns),t.on(xe.MOVE,Zi),t.on(xe.MOVE_END,Ls),t.on(xe.RESIZE,Fs);const Ji=m=>{m.ready.then(S=>{!S||A||U!==m||(Xe=!0,Jr(),t.triggerRepaint())})},Bs=()=>{var M,ee,H,F;const m=be(t).filter(W=>W.providesTerrain);if(m.length!==Me.length||m.some(W=>!Me.includes(W))){Me=m,vr(),(ee=(M=N.layer).setAccumulationController)==null||ee.call(M,null),(F=(H=N.layer).setAccumulationController)==null||F.call(H,Os);for(const W of w.controller.lights)W.shadow.map&&(At(W.shadow.map),W.shadow.map=null);Be()}const S=ge();if(!o)return;if(S){Ce.cancel(),Xe=!0;const W=U;U=null,W&&N.layer.hasRuntime(W.id)&&N.layer.removeRuntime(W.id),Ie=null,Qe=!0;return}if(U)return;const x=mt();x&&(Ce.cancel(),Xe=!1,U=x,x.setMaterialColor(`#${j.getHexString()}`),x.setShadowView(fr),N.layer.addRuntime(x),Ji(x),Ie=null,Qe=!0)};U&&Ji(U),Sr();const Us=()=>{if(A)return;const m=new Set(Ol(t));for(const[S,x]of pt)m.has(S)||(N.layer.removeRuntime(x.runtime.id),pt.delete(S));for(const S of m){const x=pt.get(S);if(x){x.sync();continue}if(!S.scene)continue;const M=_p(N.layer,S,v);M&&pt.set(S,M)}Xt(N.layer.getScene(),ge()),Jr(),t.triggerRepaint()},zc=El(t,Us);Us(),p();const Hs=new WeakSet,en=()=>{var m,S,x;if(!A){$e&&(window.clearTimeout($e),$e=0),$r?$==null||$.invalidateContent():gr.length>0&&($==null||$.invalidateContent(gr)),$r=!1,gr.length=0,Ce.cancel(),Bs(),f.refresh(),p();for(const M of be(t))M.providesTerrain&&((m=M.setErrorTargetOverride)==null||m.call(M,g),(!C.has(M)||C.get(M)!==R)&&((S=M.setCacheBudget)==null||S.call(M,R),C.set(M,R))),(x=M.setShadowSimulationStyle)==null||x.call(M,v),Hs.has(M)||(Xt(M.root,ge()),Hs.add(M));pr(fr),pt.size>0&&Xt(N.layer.getScene(),ge()),w.controller.invalidate(),w.dirty=!0,Qe=!0,Ie=null,t.triggerRepaint()}},Vc=Po(t,m=>{if(A)return;const S=m==null?void 0:m.bounds;if(m===void 0){const x=be(t).filter(M=>M.providesTerrain);(x.length!==Me.length||x.some(M=>!Me.includes(M)))&&(Bs(),f.refresh(),p())}for(const x of(m==null?void 0:m.roots)??[])Xt(x,ge());if((S==null?void 0:S.length)===0){t.triggerRepaint();return}if(S===void 0?$r=!0:S.length>0&&gr.push(...S.map(x=>x.clone())),Ce.cancel(),S===void 0&&gt().some(x=>x!==jt&&!x.getActiveTileVolumes)&&($r=!0),B){Xi=!0,t.triggerRepaint();return}t.triggerRepaint(),!$e&&($e=window.setTimeout(()=>{$e=0,en()},Bp))}),Wc=Al(t,()=>{xr(t)&&Ce.cancel(),A||t.triggerRepaint()});en();const ks=m=>{const S=b??zt(m);S&&hr.apply(S)},Gc=m=>{(h==null?void 0:h.instant.getTime())!==m.instant.getTime()&&($==null||$.cancelPending(!0),Be(),h=m,Sr(),ks(m))},zs=()=>{A||h&&ks(h)};t.on(xe.STYLE_LOAD,zs);const Vs=()=>{Ze.markStale(),w.dirty=!0,t.triggerRepaint()},jc=up(t,m=>{m?Vs():Ze.reset()});return{updateSolarPosition:Gc,updateMeshCacheBudget(m){var x;a&&(m=Math.min(m??on,on));const S=m!==void 0&&Number.isFinite(m)&&m>0?m:void 0;if(!(R===S&&be(t).filter(M=>M.providesTerrain).every(M=>C.has(M)&&C.get(M)===S))){R=S;for(const M of be(t))M.providesTerrain&&((x=M.setCacheBudget)==null||x.call(M,S),C.set(M,S));t.triggerRepaint()}},updateTerrain(m){if(o===m||(Ce.cancel(),o=m,!m||ge()))return;const S=U,x=mt(S==null?void 0:S.originLngLat);x&&(x.setMaterialColor(`#${j.getHexString()}`),x.setShadowView(fr),S&&x.adoptPresentation(S),U=x,N.layer.addRuntime(x),S&&N.layer.removeRuntime(S.id),Ji(x),Ie=null,Qe=!0,Be(),Ae(),t.triggerRepaint())},updateTerrainColor(m){const S=new ke(m);j.equals(S)||(Be(),U==null||U.setMaterialColor(m),w.atmosphericSky.updateGroundAlbedo(S),j=S)},updateMeshErrorTarget(m){var S;if(g!==m){g=m;for(const x of be(t))(S=x.setErrorTargetOverride)==null||S.call(x,m);t.triggerRepaint()}},updateBuildingAppearance(m){var S;if(!(v.fullOpacity===m.fullOpacity&&v.uniformColor===m.uniformColor&&(v.uniformColorMix??1)===(m.uniformColorMix??1)&&(v.textureSaturation??1)===(m.textureSaturation??1)&&(v.textureColorCorrection??!1)===(m.textureColorCorrection??!1))){Be(),$==null||$.invalidateContent(),v=m;for(const x of pt.values())x.updateBuildingAppearance(m);for(const x of be(t))(S=x.setShadowSimulationStyle)==null||S.call(x,m);Xt(N.layer.getScene(),ge()),w.controller.invalidate(),w.dirty=!0,t.triggerRepaint()}},updateShadowQuality(m){a&&(m=$t.FPS_120),w.shadowQuality!==m&&(Be(),w.shadowQuality=m,Pe=sn(an(Ki,a),m),Wt=Xr(),st=In(m),w.dirty=!0,Sr(),w.controller.invalidate())},updateRenderQuality(m){m=an(m,a);const S=Pe,x=sn(m,w.shadowQuality);Ki={...m},Pe=x;const M=S.shadowAdaptiveQuality!==x.shadowAdaptiveQuality;(M||S.shadowBufferLayout!==x.shadowBufferLayout)&&(st=In(w.shadowQuality)),!(!M&&S.shadowBufferLayout===x.shadowBufferLayout&&S.shadowBufferFormat===x.shadowBufferFormat&&S.shadowSunDiscSamples===x.shadowSunDiscSamples&&S.shadowMsaaSamples===x.shadowMsaaSamples&&S.shadowGroundTexelFit===x.shadowGroundTexelFit)&&(Wt=Xr(),Be(),S.shadowBufferLayout!==x.shadowBufferLayout&&(vr(),Qe=!0),(M||S.shadowGroundTexelFit!==x.shadowGroundTexelFit||S.shadowBufferLayout!==x.shadowBufferLayout)&&(w.dirty=!0,w.controller.invalidate()),Ze.publish(),t.triggerRepaint())},updateSoftSunShadows(m){m=m&&!a,it!==m&&(Be(),it=m,vr(),w.controller.setSoftSun(m),w.controller.invalidate(),w.dirty=!0,t.triggerRepaint())},updateTimeAnimating(m){E!==m&&(Ce.cancel(),E=m,m&&($==null||$.pausePending()),m||(hr.flush(),ji=Number.NEGATIVE_INFINITY,Yi&&!B&&pr(Pt),w.dirty=!0),t.triggerRepaint())},refreshProjectionDebug:Vs,updateShadowIntensity(m){const S=je(m,0,1);if(y!==S){Be(),y=S,w.shadowIntensity=y;for(const x of w.controller.lights)x.shadow.intensity=y;t.triggerRepaint()}},updateMapStyleContentVisibility(m){u!==m&&(u=m,K(),t.triggerRepaint())},updateMapStyleElevationVisibility(m,S){N.setMapStyleElevationVisibility(m,S),t.triggerRepaint()},updateMapStyleLabelOverlayVisibility(m){N.setPointLabelOverlayVisible(m),t.triggerRepaint()},updateSunDebugVectorVisibility(m){w.sunVectorVisible!==m&&(Be(),w.sunVectorVisible=m,w.sunVectorRoot.visible=m&&!!h,m?(w.frame.add(w.sunVectorRoot),zr(async()=>{const{buildSunVector:S}=await import("./shadow-sun-vector-DzcaYs6_.js");return{buildSunVector:S}},__vite__mapDeps([11,3,1,4,5,6,2,7,8,9,10])).then(({buildSunVector:S})=>{if(A||!w.sunVectorVisible||w.sunVector)return;const x=S();w.sunVector=x,w.sunVectorRoot.add(x.root),x.update(w.center,w.directionToSun,w.sunVectorLengthMeters),x.root.visible=!0,w.sunVectorRoot.visible=!!h,t.triggerRepaint()}).catch(S=>{A||console.error("Unable to load sun-vector diagnostics",S)})):(w.frame.remove(w.sunVectorRoot),w.sunVector&&(w.sunVectorRoot.remove(w.sunVector.root),w.sunVector.dispose(),w.sunVector=null)),t.triggerRepaint())},updateAtmosphericLutUsage(m){P.useTransmittanceLut===m.useTransmittanceLut&&P.useIrradianceLut===m.useIrradianceLut||(Be(),P=m,b=null,h&&(zt(h),Z()),t.triggerRepaint())},dispose(){var m,S,x,M,ee,H;if(!A){A=!0,Ce.dispose(),jc(),vr(),Ze.dispose(),$e&&window.clearTimeout($e),hr.dispose(),An(t),t.off(xe.STYLE_LOAD,zs),t.off(xe.MOVE_START,Ns),t.off(xe.MOVE,Zi),t.off(xe.MOVE_END,Ls),t.off(xe.RESIZE,Fs),zc(),Vc(),Wc(),Pt=null,pr(null);for(const F of be(t))(m=F.setShadowSimulationStyle)==null||m.call(F,null),(S=F.setErrorTargetOverride)==null||S.call(F,null);for(const F of pt.values())N.layer.hasRuntime(F.runtime.id)&&N.layer.removeRuntime(F.runtime.id);pt.clear();try{O==null||O()}catch{}O=null,(M=(x=N.layer).setMapStyleProjectionVisible)==null||M.call(x,!0),f(),N.layer.hasRuntime(jt.id)&&N.layer.removeRuntime(jt.id),U&&N.layer.hasRuntime(U.id)&&N.layer.removeRuntime(U.id),L.dispose(),Ep(w),(H=(ee=N.layer).setAccumulationController)==null||H.call(ee,null),N.release();try{t.isStyleLoaded()&&t.setLight(l)}catch{}}}}},Wp=({tiledShadows:t=!1,libreMap:e,shadowAreaMeters:r,terrain:i,mapLibreTerrain:n,terrainQuality:s,location:a,state:o,dateState:c,setDateState:l})=>{const u=k.useRef(null),d=ou(e),f=vu({dateState:c,setDateState:l,location:a,shadowState:o,onFrame:g=>{var T;o.enabled&&((T=u.current)==null||T.updateSolarPosition(wi(g,a)))}}),p=k.useMemo(()=>Bl(i?{...i,geometryProjection:o.terrainGeometryProjection??i.geometryProjection??"ecef"}:void 0,ia(o.shadowQuality),o.terrainErrorTarget),[i,o.shadowQuality,o.terrainErrorTarget,o.terrainGeometryProjection]),h=k.useRef(p);h.current=p;const[v,y]=k.useState(0);return k.useEffect(()=>{if(!e||!o.enabled)return;let g=null,T=null,R=null;const C=()=>{e.off(xe.STYLE_DATA,b),e.off(xe.STYLE_LOAD,b),e.off(xe.IDLE,b)},b=()=>{g||T!==null||R!==null||!e.isStyleLoaded()||(T=requestAnimationFrame(()=>{T=null,R=setTimeout(()=>{R=null,e.isStyleLoaded()&&(C(),g=Vp(e,{shadowAreaMeters:r,terrain:h.current,mapLibreTerrain:n,terrainQuality:s}),u.current=g,y(P=>P+1))},0)}))};return e.on(xe.STYLE_DATA,b),e.on(xe.STYLE_LOAD,b),e.on(xe.IDLE,b),b(),()=>{C(),T!==null&&cancelAnimationFrame(T),R!==null&&clearTimeout(R),u.current=null,g==null||g.dispose(),g=null}},[e,r,o.enabled,n,s]),k.useEffect(()=>{var g;(g=u.current)==null||g.updateTerrain(p)},[p,v]),k.useEffect(()=>{var T;if(!o.enabled)return;const g=f.current??c;(T=u.current)==null||T.updateSolarPosition(wi(g,a))},[f,c,a,o.enabled,v]),k.useEffect(()=>{var g;o.enabled&&((g=u.current)==null||g.updateShadowQuality(ia(o.shadowQuality)))},[o.enabled,o.shadowQuality,v]),k.useEffect(()=>{var g;o.enabled&&((g=u.current)==null||g.updateRenderQuality({shadowAdaptiveQuality:o.shadowAdaptiveQuality,shadowBufferLayout:t?o.shadowBufferLayout:void 0,shadowBufferFormat:o.shadowBufferFormat,shadowSunDiscSamples:o.shadowSunDiscSamples,shadowMsaaSamples:o.shadowMsaaSamples,shadowGroundTexelFit:o.shadowGroundTexelFit}))},[o.enabled,t,o.shadowAdaptiveQuality,o.shadowBufferLayout,o.shadowBufferFormat,o.shadowSunDiscSamples,o.shadowMsaaSamples,o.shadowGroundTexelFit,v]),k.useEffect(()=>{var g;o.enabled&&((g=u.current)==null||g.updateMeshErrorTarget(o.meshErrorTarget??null))},[o.enabled,o.meshErrorTarget,v]),k.useEffect(()=>{var g;o.enabled&&((g=u.current)==null||g.updateMeshCacheBudget(o.meshCacheBudgetBytes))},[o.enabled,o.meshCacheBudgetBytes,v]),k.useEffect(()=>{var g;o.enabled&&((g=u.current)==null||g.updateSoftSunShadows(o.softSunShadows??!0))},[o.enabled,o.softSunShadows,v]),k.useEffect(()=>{var g;o.enabled&&((g=u.current)==null||g.updateTimeAnimating((o.isAnimating??!1)||d))},[o.enabled,o.isAnimating,d,v]),k.useEffect(()=>{var g;o.enabled&&((g=u.current)==null||g.updateShadowIntensity(o.shadowIntensity??1))},[o.enabled,o.shadowIntensity,v]),k.useEffect(()=>{var g;o.enabled&&((g=u.current)==null||g.updateMapStyleContentVisibility(o.showMapStyleContent??!0))},[o.enabled,o.showMapStyleContent,v]),k.useEffect(()=>{var g;o.enabled&&((g=u.current)==null||g.updateMapStyleLabelOverlayVisibility((o.showMapStyleContent??!0)&&(o.showMapStyleLabels??!0)))},[o.enabled,o.showMapStyleContent,o.showMapStyleLabels,v]),k.useEffect(()=>{var g;o.enabled&&((g=u.current)==null||g.updateMapStyleElevationVisibility(o.showMapStyleElevationLines??!1,o.showMapStyleElevationLabels??!1))},[o.enabled,o.showMapStyleElevationLines,o.showMapStyleElevationLabels,v]),k.useEffect(()=>{var g;o.enabled&&((g=u.current)==null||g.updateSunDebugVectorVisibility((o.showProjectionDebugView??!1)&&(o.showSunDebugVector??!0)))},[o.enabled,o.showProjectionDebugView,o.showSunDebugVector,v]),k.useEffect(()=>{if(!e)return;const g=o.enabled&&(o.showProjectionDebugView??!1)&&(o.showTileBounds??!0);if(!g)return;const T=new Set,R=()=>{var P;const b=be(e);for(const A of T)b.includes(A)||T.delete(A);for(const A of b)T.has(A)||((P=A.setTileBoundsVisible)==null||P.call(A,g),T.add(A))};R();const C=Po(e,R);return()=>{var b;C();for(const P of be(e))(b=P.setTileBoundsVisible)==null||b.call(P,!1)}},[e,v,o.enabled,o.showProjectionDebugView,o.showTileBounds]),k.useEffect(()=>{var g;o.enabled&&((g=u.current)==null||g.updateAtmosphericLutUsage({useTransmittanceLut:o.useTransmittanceLut??!0,useIrradianceLut:o.useSkyIrradianceLut??!0}))},[o.enabled,o.useSkyIrradianceLut,o.useTransmittanceLut,v]),k.useEffect(()=>{var g;o.enabled&&((g=u.current)==null||g.updateTerrainColor(o.terrainColor??Do))},[o.enabled,o.terrainColor,v]),k.useEffect(()=>{var g;o.enabled&&((g=u.current)==null||g.updateBuildingAppearance({fullOpacity:o.buildingsFullOpacity??!0,uniformColor:o.buildingColor??Ul,uniformColorMix:je(o.buildingColorMix??Hl,0,1),textureColorCorrection:o.meshTextureColorCorrection??!0,textureSaturation:je(o.meshTextureSaturation??kl,0,1)}))},[o.buildingColor,o.buildingColorMix,o.buildingsFullOpacity,o.enabled,o.meshTextureSaturation,o.meshTextureColorCorrection,v]),null},Gp=t=>({...t,animationMode:tr.DAY,animationSpeed:4,isAnimating:!1,shadowIntensity:1,meshTextureColorCorrection:!0,showSunDebugVector:!0,showTileBounds:!0,showProjectionDebugView:!1,showDisplaySettings:!1,showMapStyleContent:!0,showMapStyleLabels:!0,showMapStyleElevationLines:!1,showMapStyleElevationLabels:!1,useTransmittanceLut:!0,useSkyIrradianceLut:!0,shadowBufferLayout:void 0,shadowBufferFormat:void 0,shadowSunDiscSamples:void 0,shadowMsaaSamples:void 0,shadowGroundTexelFit:void 0,shadowAdaptiveQuality:void 0}),jp=({location:t,state:e,setState:r,dateState:i,setDateState:n})=>{const s=e.animationMode??tr.DAY,a=e.animationSpeed??4,o=(c,l)=>n(nu(i,i.year,zl(i.year,c,l),t));return z.jsxs(z.Fragment,{children:[z.jsxs("section",{className:"min-w-0",children:[z.jsx("h3",{className:"mb-1.5 text-xs font-medium uppercase tracking-wide text-neutral-500",children:"Datum"}),z.jsxs("div",{className:"grid grid-cols-2 gap-2","data-test-id":"shadow-date-shortcuts",children:[z.jsx("button",{type:"button",className:_r,onClick:()=>n(su(i,t)),children:"Heute"}),z.jsx("button",{type:"button",className:_r,onClick:()=>o(2,21),children:"21. März"}),z.jsx("button",{type:"button",className:_r,onClick:()=>o(5,21),children:"21. Juni"}),z.jsx("button",{type:"button",className:_r,onClick:()=>o(11,21),children:"21. Dezember"})]})]}),z.jsxs("section",{children:[z.jsx("h3",{className:"mb-1.5 text-xs font-medium uppercase tracking-wide text-neutral-500",children:"Uhrzeit"}),z.jsx("div",{className:"grid grid-cols-4 gap-2",children:[9,12,15,18].map(c=>z.jsx("button",{type:"button",className:_r,onClick:()=>n(cs(i,{...i,minutes:c*60},t)),children:du(c)},c))})]}),z.jsxs("section",{children:[z.jsx("h3",{className:"mb-1.5 text-xs font-medium uppercase tracking-wide text-neutral-500",children:"Animation"}),z.jsxs("div",{className:"flex flex-wrap items-center gap-x-3 gap-y-2",children:[z.jsx("div",{className:"flex shrink-0 overflow-hidden rounded-md border border-neutral-300",children:[[tr.DAY,"Tagesverlauf"],[tr.YEAR,"Jahresverlauf"]].map(([c,l])=>z.jsx("button",{type:"button",className:`${No} ${s===c?"bg-amber-50 font-medium text-amber-700":"bg-white"}`,"aria-pressed":s===c,onClick:()=>{const u=c;r({...e,animationMode:u,isAnimating:s===u?!e.isAnimating:!0})},children:l},c))}),z.jsx(fu,{value:a,onChange:c=>r({...e,animationSpeed:c})})]})]})]})},Yp=({location:t,state:e,setState:r,dateState:i,setDateState:n})=>{const s=e.shadowIntensity??1,a=k.useMemo(()=>wi(i,t),[i,t]);return z.jsxs("div",{className:"w-full","data-test-id":"shadow-simulation-secondary-panel",children:[z.jsxs("div",{className:"mb-2 flex flex-wrap items-center justify-between gap-x-4 gap-y-2",children:[z.jsxs("span",{className:"whitespace-nowrap text-sm tabular-nums text-neutral-500",children:["Höhe ",a.elevationDegrees.toFixed(0),"° · Azimut"," ",a.azimuthDegrees.toFixed(0),"°"]}),z.jsx("div",{className:"flex items-center gap-5 text-sm text-neutral-600",children:z.jsxs("button",{type:"button",className:"flex items-center gap-2 whitespace-nowrap hover:text-amber-700",onClick:()=>{r(Gp(e)),n(au(i,t))},children:[z.jsx(Fn,{icon:ql}),"Zurücksetzen"]})})]}),z.jsxs("div",{className:"grid grid-cols-1 gap-x-8 gap-y-4 lg:grid-cols-2",children:[z.jsx(jp,{location:t,state:e,setState:r,dateState:i,setDateState:n}),z.jsxs("section",{className:"min-w-0",children:[z.jsxs("h3",{className:"mb-1.5 flex items-center gap-1 text-xs font-medium uppercase tracking-wide text-neutral-500",children:["Darstellung",z.jsx("button",{type:"button",className:"inline-flex items-center justify-center p-1 text-neutral-700 hover:text-amber-700","aria-label":"Darstellungseinstellungen",title:"Darstellungseinstellungen","aria-expanded":e.showDisplaySettings??!1,onClick:()=>r({...e,showDisplaySettings:!e.showDisplaySettings}),"data-test-id":"shadow-simulation-display-settings",children:z.jsx(Fn,{icon:Kl})})]}),z.jsxs("label",{className:"grid grid-cols-[110px_minmax(0,1fr)_42px] items-center gap-3 text-sm text-neutral-700",children:[z.jsx("span",{children:"Intensität"}),z.jsx("input",{type:"range",min:0,max:1,step:.01,value:s,onChange:o=>r({...e,shadowIntensity:Number(o.currentTarget.value)}),className:"shadow-simulation-range min-w-0 cursor-pointer",style:hu(s,0,1),"aria-label":"Schattenintensität","data-test-id":"shadow-simulation-intensity"}),z.jsxs("span",{className:"text-right tabular-nums",children:[Math.round(s*100),"%"]})]})]})]})]})},qp=k.lazy(()=>zr(()=>import("./ShadowProjectionDebugView-3dJ0MAps.js"),__vite__mapDeps([12,3,1,4,5,6,2,7,8,9,10,13])).then(t=>({default:t.ShadowProjectionDebugView}))),Kp=k.lazy(()=>zr(()=>import("./ShadowSimulationDisplaySettingsPanel-CmXNJ7xL.js"),__vite__mapDeps([14,3,1,4,5,6,2,7,8,9,10])).then(t=>({default:t.ShadowSimulationDisplaySettingsPanel}))),Xp=k.lazy(()=>zr(()=>import("./ShadowSimulationCurveSettings-DvVTZpOc.js"),__vite__mapDeps([15,3,1,4,5,6,2,7,8,9,10])).then(t=>({default:t.ShadowSimulationCurveSettings}))),$p="#1677ff",pg=({config:t,debugEnabled:e=!0,libreMap:r,targeted:i,sharedState:n,setSharedState:s,sharedDateState:a,setSharedDateState:o})=>{var N,oe;const{year:c,initialDayOfYear:l,initialMinutes:u,latitude:d=sa.latitude,longitude:f=sa.longitude,timeZone:p=Yl,shadowAreaMeters:h,terrain:v,terrainSources:y,mapLibreTerrain:g,controlPosition:T="topleft",controlOrder:R=70,experimentalTiledShadows:C=!1}=t??{},b=uu(r,d,f),P=k.useMemo(()=>Vl({terrain:v,terrainSources:y}),[v,y]),A=k.useMemo(()=>a??Wl({year:c,initialDayOfYear:l,initialMinutes:u,timeZone:p},b),[a,l,u,b,p,c]),E=n??P,B=k.useMemo(()=>e?E:{...E,showProjectionDebugView:!1,showTileDiagnostics:!1},[e,E]),O=a??A,j=k.useMemo(()=>y??(v?[{label:v.id,terrain:v}]:void 0),[v,y]),K=((N=j==null?void 0:j.find(({terrain:D})=>D.id===E.terrainSourceId))==null?void 0:N.terrain)??((oe=j==null?void 0:j[0])==null?void 0:oe.terrain);return k.useEffect(()=>{n||s(P)},[P,s,n]),k.useEffect(()=>{a||o(A)},[A,o,a]),i?z.jsx(Yp,{location:b,state:E,setState:s,dateState:O,setDateState:o}):z.jsxs(z.Fragment,{children:[r&&z.jsx(Gl,{position:T,order:R,children:z.jsx($c,{title:E.enabled?"Schattensimulation ausschalten":"Schattensimulation einschalten",placement:"right",children:z.jsx(jl,{onClick:()=>s({...E,enabled:!E.enabled}),dataTestId:"shadow-simulation-control-button","aria-label":E.enabled?"Schattensimulation ausschalten":"Schattensimulation einschalten","aria-pressed":E.enabled,children:z.jsx(Fn,{icon:Xl,style:E.enabled?{color:$p}:void 0})})})}),z.jsx(Wp,{tiledShadows:C,libreMap:r,shadowAreaMeters:h,terrain:K,mapLibreTerrain:g,terrainQuality:E.terrainQuality,location:b,state:B,dateState:O,setDateState:o}),E.controlStyle===na.CURVE&&z.jsx(k.Suspense,{fallback:null,children:z.jsx(Xp,{location:b,dateState:O,setDateState:o,onClose:()=>s({...E,controlStyle:na.QUICK})})}),E.showDisplaySettings&&z.jsx(k.Suspense,{fallback:null,children:z.jsx(Kp,{tiledShadows:C,debugEnabled:e,state:E,setState:s,terrainSources:j,map:r})}),e&&E.enabled&&E.showProjectionDebugView&&r&&z.jsx(k.Suspense,{fallback:null,children:z.jsx(qp,{map:r,solarPosition:wi(O,b),settings:{showSunDebugVector:E.showSunDebugVector??!0,showTileBounds:E.showTileBounds??!0},onSettingsChange:D=>s({...E,...D}),onClose:()=>s({...E,showProjectionDebugView:!1})})})]})};export{og as M,Br as S,sg as a,uu as b,hu as c,cs as d,fu as e,da as f,ru as g,pg as h,hg as i,dg as j,cg as k,ag as l,Zn as m,fg as n,mg as p,fa as r,iu as s,vu as u};
