const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/shadow-projection-debug-publisher-BeTsjeXk.js","assets/vendor-react-core-DEDd919A.js","assets/vendor-ui-DLatTdJt.js","assets/index-CuvipjA2.js","assets/vendor-ui-icons-BOZWyjM8.js","assets/vendor-cismap-DVxLdo2i.js","assets/vendor-leaflet-BbYkptA6.js","assets/vendor-cismap-DCHbl3AQ.css","assets/vendor-cesium-COY8x_Hs.js","assets/vendor-maplibre-ojH_DVgs.js","assets/index-CbMI6cqb.css","assets/shadow-sun-vector-CMkhLARD.js","assets/ShadowProjectionDebugView-obt3a6lp.js","assets/ViewStateVisualizer-CCQqeliq.js","assets/ShadowSimulationDisplaySettingsPanel-zElByz2N.js","assets/ShadowSimulationCurveSettings-F3f1vm7b.js"])))=>i.map(i=>d[i]);
import{r as Y,d as Gc}from"./vendor-react-core-DEDd919A.js";import{O as jc,d as Yc}from"./vendor-ui-DLatTdJt.js";import{b as Cr,ab as Ri,ac as Kt,ad as Ir,ae as qc,af as mo,c as Nr,ag as Qn,ah as te,ai as ke,aj as je,ak as yt,al as Dr,am as Ae,an as Zt,ao as Ot,a1 as fo,X as po,_ as Kc,a3 as Zn,a4 as Xt,h as Xc,ap as go,aq as Se,ar as Gt,as as jt,I as k,at as Lr,au as J,av as ot,V as x,aw as $c,d as Oe,ax as vo,ay as Qc,az as Zc,aA as yo,aB as D,aC as Ei,aD as So,O as Jn,aE as wo,aF as Ys,k as es,aG as Jc,aH as Pn,aI as qs,aJ as ts,aK as el,aL as tl,aM as Ks,aN as rl,aO as il,aP as nl,aQ as _o,aR as bt,aS as sl,aT as xo,J as Xs,aU as Ye,aV as al,D as To,aW as ol,j as cl,aX as en,aY as ll,aZ as ul,a_ as hi,a$ as Mo,b0 as Yt,b1 as dl,b2 as On,b3 as rs,b4 as bo,b5 as hl,b6 as ml,b7 as $t,b8 as fl,b9 as pl,ba as $s,bb as gl,bc as vl,bd as Dt,be as is,bf as Fr,bg as pi,G as ns,aa as ze,bh as Jr,bi as yl,bj as Ro,bk as Sl,bl as tn,bm as Qs,bn as wl,bo as Eo,w as _l,bp as xe,bq as rn,br as nn,bs as xl,bt as Ao,bu as Tl,bv as Ml,bw as sn,bx as bl,by as Rl,bz as El,bA as an,bB as Zs,bC as pr,bD as Al,bE as Cl,t as gi,bF as Il,bG as Js,bH as Dl,bI as Pl,bJ as Ol,a0 as Nl,bK as Ll,bL as Fl,bM as Bl,bN as Ul,bO as ea,a6 as ta,a8 as Hl}from"./index-CuvipjA2.js";import{F as Nn,bc as zl,bi as kl,x as Vl}from"./vendor-ui-icons-BOZWyjM8.js";import{a as Wl}from"./vendor-maplibre-ojH_DVgs.js";import"./vendor-cismap-DVxLdo2i.js";import"./vendor-leaflet-BbYkptA6.js";const ra=20;class Gl{constructor(e,t=256*1024**2){this.renderer=e,this.maximumBytes=t,this.quad.frustumCulled=!1,this.scene.add(this.quad)}target=null;key=null;broken=!1;captures=0;reuses=0;scene=new Cr;camera=new Ri;material=new Kt({glslVersion:Ir,uniforms:{color:{value:null},depth:{value:null}},vertexShader:`out vec2 uvCopy;
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
      }`,depthTest:!0,depthFunc:qc,depthWrite:!0,transparent:!0,blending:mo});quad=new Nr(new Qn(2,2),this.material);get stats(){return{captures:this.captures,reuses:this.reuses,bytes:this.target?this.target.width*this.target.height*ra:0,broken:this.broken}}invalidate(){this.key=null}render(e,t,i,n){var f,y;const s=this.renderer;if(this.broken||!Number.isInteger(t)||!Number.isInteger(i)||t<1||i<1||t>s.capabilities.maxTextureSize||i>s.capabilities.maxTextureSize||t*i*ra>this.maximumBytes||!s.extensions.has("EXT_color_buffer_float"))return this.releaseTarget(),n(),!1;const a=s.getRenderTarget(),o=s.getActiveCubeFace(),c=s.getActiveMipmapLevel(),l=s.getViewport(new te),u=s.getScissor(new te),d=s.getScissorTest(),p=s.getClearColor(new ke),g=s.getClearAlpha(),h=s.autoClear,v=()=>{s.setRenderTarget(a,o,c),s.setViewport(l),s.setScissor(u),s.setScissorTest(d),s.setClearColor(p,g),s.autoClear=h};try{if(((f=this.target)==null?void 0:f.width)!==t||((y=this.target)==null?void 0:y.height)!==i){this.releaseTarget(),this.target=new je(t,i,{type:yt,format:Dr,minFilter:Ae,magFilter:Ae,depthTexture:new Zt(t,i,Ot),samples:0});try{s.initRenderTarget(this.target)}catch{return this.broken=!0,this.releaseTarget(),v(),n(),!1}}const T=JSON.stringify([e,t,i,s.outputColorSpace,s.toneMapping,s.toneMappingExposure,a==null?void 0:a.texture.colorSpace]);return s.autoClear=!1,this.key!==T?(this.key=null,s.setRenderTarget(this.target),s.setViewport(new te(0,0,t,i)),s.setScissorTest(!1),s.setClearColor(0,0),s.clear(!0,!0,!1),n(),this.key=T,this.captures+=1):this.reuses+=1,v(),s.autoClear=!1,this.material.uniforms.color.value=this.target.texture,this.material.uniforms.depth.value=this.target.depthTexture,s.render(this.scene,this.camera),!0}catch(T){throw this.invalidate(),T}finally{v()}}releaseTarget(){var e,t,i;(t=(e=this.target)==null?void 0:e.depthTexture)==null||t.dispose(),(i=this.target)==null||i.dispose(),this.target=null,this.key=null}dispose(){this.releaseTarget(),this.broken=!0,this.material.dispose(),this.quad.geometry.dispose()}}const ia=(r,e,t,i,n)=>{const s=i+e,a=Math.floor(s),o=s-a;if(a===0)return{dateState:r,yearDayProgress:o};const c=n?{year:r.year,dayOfYear:(r.dayOfYear-1+a)%fo(r.year)+1}:Kc(r,a);return{dateState:(n?{...r,...c}:Zn({...r,...c},t))??r,yearDayProgress:o}},na=(r,e,t,i,n)=>{if(!n)return{dateState:{...r,minutes:(r.minutes+e)%1440},yearDayProgress:0};const s=po(r,t),a=Math.ceil(s.sunriseMinutes),o=Math.floor(s.sunsetMinutes),l=(i&&(r.minutes<a||r.minutes>o)?a:r.minutes)+e;return{dateState:{...r,minutes:l>o?a+(i?(l-a)%Math.max(1,o-a):0):l},yearDayProgress:0}},jl=(r,e,t,i,n,s={})=>{const a=e??t;if(!(r!=null&&r.enabled)||!r.isAnimating)return{dateState:a,yearDayProgress:n};const o=s.elapsedMs!==void 0,c=(r.animationMode??Xt.DAY)===Xt.YEAR,l=r.animationDaylightOnly!==!1,u=r.animationCycleSeconds;if(o&&u!==void 0&&u>0){const p=Math.max(0,s.elapsedMs??0)/(u*1e3);if(c)return ia(a,p*fo(a.year),i,n,!0);const g=po(a,i),h=l?Math.max(1,g.sunsetMinutes-g.sunriseMinutes):1440;return na(a,p*h,i,!0,l)}const d=(r.animationSpeed??4)*(o?Math.max(0,s.elapsedMs??0)*60/1e3:1);return c?ia(a,d/(o?4:2),i,n,o):na(a,d,i,o,l)},ei=3,Yl=.5,nt=64,sa=.01,aa=(r,e,t)=>Math.min(t**2,Math.max(nt**2,Math.floor(r!==void 0&&Number.isFinite(r)&&r>0?r:e))),oa=(r,e)=>{const{mapSize:t,maxMapSize:i,elevationSine:n,sunDiscGuardMeters:s,groundTexelFit:a}=e,o=r.right-r.left+2*s,c=r.top-r.bottom+2*s,l=Math.max(sa,Math.abs(n)),d=2*(a?ei+Yl:ei);let p=t,g=t,h=!1,v=!1;const f=e.groundTexelTargetMeters;if(f!==void 0&&(!Number.isFinite(f)||f<=0))throw new RangeError("Shadow ground texel target must be positive and finite");if(f!==void 0){const W=se=>Math.max(nt,2**Math.ceil(Math.log2(se))),V=W(o/f+d),O=W(c/(f*l)+d);p=Math.min(i,V),g=Math.min(i,O),h=p<V||g<O}else if(a){const W=o*l/c,V=e.mapTexelBudget??t*t,O=d*(W+1),se=V-d*d,P=2*se/(O+Math.sqrt(O**2+4*W*se)),X=W*P+d,H=P+d;h=X>i||H>i;const q=Math.max(o,c)/(t-d),le=Math.min(t,Math.max(nt,Math.ceil((o/q+d)/nt)*nt)),oe=Math.min(t,Math.max(nt,Math.ceil((c/q+d)/nt)*nt));v=X<le||H<oe;const _e=Math.min(Math.max(X,le,V/i),i,V/oe),A=re=>Math.floor(re/nt+1e-9)*nt;p=Math.max(le,A(_e)),g=Math.max(oe,A(Math.min(i,V/p)))}const y=e.mapDimensions;y&&(v||(v=p!==y.width||g!==y.height),p=y.width,g=y.height);const T=o/Math.max(1,p-d),R=c/Math.max(1,g-d),C=Math.max(T,R,Number.EPSILON),b=a?T:C,I=a?R:C,N=Math.round((r.left+r.right)/2/b)*b,E=Math.round((r.bottom+r.top)/2/I)*I,L=b*p,F=I*g;return{left:N-L/2,right:N+L/2,bottom:E-F/2,top:E+F/2,mapWidth:p,mapHeight:g,metersPerTexelX:b,metersPerTexelY:I,guardMetersX:b*ei,guardMetersY:I*ei,groundTexelWidthMeters:b,groundTexelHeightMeters:Math.abs(n)>Number.EPSILON?I/Math.abs(n):1/0,groundTexelFitLimited:a&&(h||v||Math.abs(n)<sa)}},ql=(r,e,t)=>{if(t<=0)return{planarMeters:0,depthMeters:0};const i=Math.sqrt(Math.max(0,1-e**2)),n=i>Math.sin(t)?Math.asin(Math.sin(t)/i):Math.PI;return{planarMeters:2*r*Math.sin(Math.min(Math.PI,n+t)/2),depthMeters:2*r*Math.sin(t/2)}},Pr=Xc(.53/2),Kl=Math.PI*(3-Math.sqrt(5)),Xl=(r,e)=>{const t=Math.max(1,Math.floor(e)),i=(Math.floor(r)%t+t)%t,n=Pr*Math.sqrt((i+.5)/t),s=i*Kl;return{angularRadius:n,tangentA:Math.cos(s)*n,tangentB:Math.sin(s)*n}},$l=r=>{const e=Math.floor(r/2)+1,t=r%2===0?1:-1;return[t*(e*.7548776662466927%1-.5),t*(e*.5698402909980532%1-.5)]},ss=(r,e,t)=>Zn(e,t)??r,Ql=(r,e,t,i)=>ss(r,{...r,year:e,dayOfYear:t},i),Zl=(r,e,t=new Date)=>{const i=go(t,r.timeZone);return ss(r,{...i,minutes:r.minutes},e)},Jl=(r,e,t=new Date)=>{const i=go(t,r.timeZone);return Zn(i,e)??r},eu=(r,e)=>({latitude:(r==null?void 0:r.latitude)??e.latitude,longitude:(r==null?void 0:r.longitude)??e.longitude}),tu=(r,e)=>r.latitude===e.latitude&&r.longitude===e.longitude,ca=(r,e,t)=>{const i=r==null?void 0:r.getCenter();return eu(i?{latitude:i.lat,longitude:i.lng}:null,{latitude:e,longitude:t})},ru=(r,e,t)=>{const[i,n]=Y.useState(()=>ca(r,e,t));return Y.useEffect(()=>{const s=()=>{const a=ca(r,e,t);n(o=>tu(o,a)?o:a)};if(s(),!!r)return r.on(Se.MOVE_END,s),()=>{r.off(Se.MOVE_END,s)}},[e,t,r]),i},gr="flex h-9 min-w-0 items-center justify-center whitespace-nowrap rounded-md border border-neutral-300 bg-white px-1 text-center text-sm text-neutral-800 transition-colors hover:border-amber-500 hover:text-amber-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/40",Co="h-8 whitespace-nowrap border-r border-neutral-300 px-3 text-sm text-neutral-700 transition-colors last:border-r-0 hover:text-amber-700",Zp=[{label:"120 FPS",value:Gt.FPS_120},{label:"60 FPS",value:Gt.FPS_60},{label:"30 FPS",value:Gt.FPS_30},{label:"Ultra",value:Gt.ULTRA}],Jp=[{label:"0,25 px",value:.25},{label:"0,5 px",value:.5},{label:"1 px",value:1},{label:"2 px",value:2},{label:"4 px",value:4}],eg=[{value:jt.HDR_16,label:"HDR · 16 Bit (Experiment)"},{value:jt.HDR_16_32,label:"HDR · 16/32 Bit (Standard)"},{value:jt.HDR_32,label:"HDR · 32 Bit (ohne MSAA)"},{value:jt.SDR_8,label:"SDR · 8 Bit (Experiment)"}],iu=r=>`${String(r).padStart(2,"0")}:00`,nu=(r,e,t)=>({"--shadow-range-progress":`${t>e?Math.max(0,Math.min(100,(r-e)/(t-e)*100)):0}%`});var su={exports:{}};(function(r,e){(function(t,i){r.exports=i(jc)})(Gc,function(t){function i(c){return c&&typeof c=="object"&&"default"in c?c:{default:c}}var n=i(t),s={s:"ein paar Sekunden",m:["eine Minute","einer Minute"],mm:"%d Minuten",h:["eine Stunde","einer Stunde"],hh:"%d Stunden",d:["ein Tag","einem Tag"],dd:["%d Tage","%d Tagen"],M:["ein Monat","einem Monat"],MM:["%d Monate","%d Monaten"],y:["ein Jahr","einem Jahr"],yy:["%d Jahre","%d Jahren"]};function a(c,l,u){var d=s[u];return Array.isArray(d)&&(d=d[l?0:1]),d.replace("%d",c)}var o={name:"de",weekdays:"Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),weekdaysShort:"So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),weekdaysMin:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),months:"Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sept._Okt._Nov._Dez.".split("_"),ordinal:function(c){return c+"."},weekStart:1,yearStart:4,formats:{LTS:"HH:mm:ss",LT:"HH:mm",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY HH:mm",LLLL:"dddd, D. MMMM YYYY HH:mm"},relativeTime:{future:"in %s",past:"vor %s",s:a,m:a,mm:a,h:a,hh:a,d:a,dd:a,M:a,MM:a,y:a,yy:a}};return n.default.locale(o,null,!0),o})})(su);const au=({value:r,onChange:e})=>k.jsx("div",{role:"group","aria-label":"Animationsgeschwindigkeit",className:"flex shrink-0 overflow-hidden rounded-md border border-neutral-300",children:[1,4,12].map(t=>k.jsxs("button",{type:"button",className:`${Co} px-3 ${r===t?"bg-amber-50 font-medium text-amber-700":"bg-white"}`,"aria-pressed":r===t,onClick:()=>e(t),children:[t,"×"]},t))}),ou=1e3/30,cu=250,lu=({dateState:r,setDateState:e,location:t,shadowState:i,onFrame:n,realtime:s=!1})=>{const a=Y.useRef(null),o=Y.useRef(null),c=Y.useRef(r),l=Y.useRef(r),u=Y.useRef(e),d=Y.useRef(n);l.current=r,u.current=e,d.current=n;const{animationMode:p,animationSpeed:g,animationCycleSeconds:h,animationDaylightOnly:v,enabled:f,isAnimating:y}=i,T=f&&(y??!1);return Y.useEffect(()=>{const R=r!==c.current;if(c.current=r,!!R){if(r===o.current){T||(a.current=null);return}a.current=null}},[T,r]),Y.useEffect(()=>{if(!T)return;const R={animationMode:p,animationSpeed:g,animationCycleSeconds:h,animationDaylightOnly:v,enabled:f,isAnimating:y};let C=0,b=performance.now(),I=b;const N=V=>{o.current=V,u.current(V)},E=V=>{const O=a.current??l.current,se=jl(R,O,O,t,C,s?{elapsedMs:V-I}:void 0);I=V,C=se.yearDayProgress,a.current=se.dateState,d.current(se.dateState),V-b>=cu&&(b=V,N(se.dateState))};let L=0;const F=V=>{E(V),L=requestAnimationFrame(F)},W=s?void 0:window.setInterval(()=>E(performance.now()),ou);return s&&(L=requestAnimationFrame(F)),()=>{W!==void 0&&window.clearInterval(W),s&&cancelAnimationFrame(L);const V=a.current;V&&V!==o.current&&N(V)}},[T,p,g,h,v,f,y,t,s]),a},la=new WeakMap,ua=(r,e,t,i,n="shadow-and-color")=>{const s=()=>t.render(r,i);if(e===void 0)return s(),!0;const a=r.getObjectById(e);if(!a)return!1;let o=la.get(a);if(!o){const l=new Set;a.traverse(u=>l.add(u)),la.set(a,l),o=l}if(n==="color-only"){const l=new Set;for(let d=a.parent;d;d=d.parent)l.add(d);const u=[];r.traverse(d=>{d.isMesh&&d.visible&&!o.has(d)&&!l.has(d)&&(u.push(d),d.visible=!1)});try{return s(),!0}finally{for(const d of u)d.visible=!0}}const c=t.renderBufferDirect;t.renderBufferDirect=function(...l){const[u,,,,d]=l;u===i&&d.isMesh&&!o.has(d)||c.apply(this,l)};try{return s(),!0}finally{t.renderBufferDirect=c}},da=[[0,1],[1,3],[3,2],[2,0],[4,5],[5,7],[7,6],[6,4],[0,4],[1,5],[2,6],[3,7]],uu=({min:r,max:e})=>[new x(r.x,r.y,r.z),new x(e.x,r.y,r.z),new x(r.x,e.y,r.z),new x(e.x,e.y,r.z),new x(r.x,r.y,e.z),new x(e.x,r.y,e.z),new x(r.x,e.y,e.z),new x(e.x,e.y,e.z)],du=r=>[r.coordinateSystem===$c?0:-1,1].flatMap(t=>[-1,1].flatMap(i=>[-1,1].map(n=>new x(n,i,t).unproject(r)))),on=(r,e,t)=>r.every(i=>i.distanceToPoint(e)>=-t),ha=(r,e,t)=>e.x>=r.min.x-t&&e.x<=r.max.x+t&&e.y>=r.min.y-t&&e.y<=r.max.y+t&&e.z>=r.min.z-t&&e.z<=r.max.z+t,Ln=(r,e,t)=>{r.some(i=>i.distanceToSquared(e)<=t)||r.push(e)},ma=(r,e,t,i,n,s)=>{const a=e.clone().sub(r);for(const o of t){const c=o.distanceToPoint(r),l=o.distanceToPoint(e),u=c-l;if(Math.abs(u)<=Number.EPSILON)continue;const d=c/u;if(d<0||d>1)continue;const p=r.clone().addScaledVector(a,d);i(p)&&Ln(n,p,s)}},Io=(r,e,t=1e-6)=>{if(e.isEmpty())return[];r.updateMatrixWorld(!0);const i=new Lr().setFromProjectionMatrix(new J().multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),r.coordinateSystem,r.reversedDepth);if(!i.intersectsBox(e))return[];const n=t*t,s=uu(e),a=du(r),o=[];for(const l of s)on(i.planes,l,t)&&Ln(o,l,n);for(const l of a)ha(e,l,t)&&Ln(o,l,n);for(const[l,u]of da)ma(s[l],s[u],i.planes,d=>on(i.planes,d,t),o,n);const c=[new ot(new x(1,0,0),-e.min.x),new ot(new x(-1,0,0),e.max.x),new ot(new x(0,1,0),-e.min.y),new ot(new x(0,-1,0),e.max.y),new ot(new x(0,0,1),-e.min.z),new ot(new x(0,0,-1),e.max.z)];for(const[l,u]of da)ma(a[l],a[u],c,d=>ha(e,d,t)&&on(i.planes,d,t),o,n);return o},Do=(r,e)=>{const t=Br(r).map(o=>new te(o.x,o.y,o.z,1).applyMatrix4(e));if(t.some(o=>o.w<=0))return new te(0,0,1,1);const i=Math.max(0,(Math.min(...t.map(o=>o.x/o.w))+1)/2),n=Math.max(0,(Math.min(...t.map(o=>o.y/o.w))+1)/2),s=Math.min(1,(Math.max(...t.map(o=>o.x/o.w))+1)/2),a=Math.min(1,(Math.max(...t.map(o=>o.y/o.w))+1)/2);return new te(i,n,Math.max(0,s-i),Math.max(0,a-n))},Br=r=>[r.min.x,r.max.x].flatMap(e=>[r.min.y,r.max.y].flatMap(t=>[r.min.z,r.max.z].map(i=>new x(e,t,i)))),Po=(r,e,t)=>{const i=e.elements,n=Br(r).map(o=>new te(o.x,o.y,o.z,1).applyMatrix4(e)),s=Math.min(...n.map(o=>o.w));if(s<=0)return 1/0;let a=0;for(const[o,c]of[[0,t.x],[1,t.y]])for(let l=0;l<3;l+=1){const u=Math.max(...n.map(d=>Math.abs(i[l*4+o]*d.w-(o===0?d.x:d.y)*i[l*4+3])));a+=(c*.5*u/(s*s))**2}return Math.sqrt(a)},hu=(r,e,t,i)=>{if(!(i>0&&Number.isFinite(i))||!(t.x>0&&t.y>0))throw new RangeError("Shadow page projection requires a positive pixel target and viewport");const n=new J().multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),s=new Set;for(const{id:o,bounds:c}of r){if(s.has(o)||c.isEmpty()||![...c.min.toArray(),...c.max.toArray()].every(Number.isFinite))throw new RangeError("Receiver cells require unique IDs and finite, nonempty bounds");s.add(o)}const a=new Lr().setFromProjectionMatrix(n);return r.filter(({bounds:o})=>a.intersectsBox(o)).map(o=>({...o,screenBounds:Do(o.bounds,n),groundTexelTargetMeters:Math.max(1e-9,i/Po(o.bounds,n,t))}))},mu=(r,e,t,i,n)=>r.clone().union(r.clone().translate(e.clone().normalize().multiplyScalar(t))).expandByScalar(2*t*Math.sin(i/2)+n),fu=(r,e)=>r.flatMap(({bounds:t})=>Io(e,t).length>0?Br(t):[]),ti={WEST:"west",EAST:"east",SOUTH:"south",NORTH:"north"},vr=({bounds:r})=>(r.max.x-r.min.x)*(r.max.z-r.min.z),pu=(r,e)=>r.min.z===e.min.z&&r.max.z===e.max.z&&(r.max.x===e.min.x||e.max.x===r.min.x)||r.min.x===e.min.x&&r.max.x===e.max.x&&(r.max.z===e.min.z||e.max.z===r.min.z),gu=r=>{const e=new Map(r.map(i=>[i.id,i]));let t=!0;for(;t;){t=!1;for(const i of e.values()){if(Math.min(i.bounds.max.x-i.bounds.min.x,i.bounds.max.z-i.bounds.min.z)>=i.fragmentMergeWidthMeters)continue;const s=vr(i),a=[...e.values()].filter(o=>o!==i&&(vr(o)>s||vr(o)===s&&o.id<i.id)&&pu(i.bounds,o.bounds)).sort((o,c)=>vr(c)-vr(o)||(o.id<c.id?-1:o.id>c.id?1:0))[0];if(a){e.set(a.id,{...a,bounds:a.bounds.clone().union(i.bounds)}),e.delete(i.id),t=!0;break}}}return[...e.values()].map(({id:i,bounds:n})=>({id:i,bounds:n}))},cn=r=>({west:r.min.x,east:r.max.x,south:r.min.z,north:r.max.z}),Oo=(r,e)=>r.west<e.east&&r.east>e.west&&r.south<e.north&&r.north>e.south,vu=(r,e,t)=>{if(!Oo(r,e))return[r];const i=Math.max(r.west,e.west),n=Math.min(r.east,e.east),s=Math.max(r.south,e.south),a=Math.min(r.north,e.north);return[{...r,east:i,side:ti.WEST},{...r,west:n,side:ti.EAST},{west:i,east:n,south:r.south,north:s,side:ti.SOUTH},{west:i,east:n,south:a,north:r.north,side:ti.NORTH}].filter(o=>o.west<o.east&&o.south<o.north).map(({side:o,...c})=>({...c,splitPath:[...r.splitPath,t,o]}))},yu=r=>{const e=new Set;for(const{id:n,bounds:s}of r){if(e.has(n)||s.isEmpty()||![...s.min.toArray(),...s.max.toArray()].every(Number.isFinite))throw new RangeError("Receiver tiles require unique IDs and finite bounds");e.add(n)}const t=[...r].sort((n,s)=>n.id<s.id?-1:n.id>s.id?1:0);if(t.every(({receiverObjectId:n})=>n!==void 0))return t;const i=t.flatMap(({id:n,bounds:s},a)=>{const o=cn(s);return o.west===o.east||o.south===o.north?[]:t.slice(0,a).reduce((l,u)=>l.flatMap(d=>vu(d,cn(u.bounds),u.id)),[{...o,splitPath:[]}]).map(l=>{const u=t.reduce((d,p)=>Oo(l,cn(p.bounds))?[Math.min(d[0],p.bounds.min.y),Math.max(d[1],p.bounds.max.y)]:d,[s.min.y,s.max.y]);return{fragmentMergeWidthMeters:l.splitPath.length===0?0:Math.max(.1,.01*Math.min(o.east-o.west,o.north-o.south)),id:l.splitPath.length===0?n:JSON.stringify([n,...l.splitPath]),bounds:new Oe(new x(l.west,u[0],l.south),new x(l.east,u[1],l.north))}})});return gu(i)},Su=(r,e=16)=>{if(!Number.isInteger(e)||e<=0||r.length===0)return[];const i=r.reduce((c,l)=>c.union(l.bounds),new Oe).getCenter(new x),n=new Set(r.map(({id:c})=>c)),s=new Map;for(const c of r){const l=c.bounds.max.x-c.bounds.min.x;if(!(l>0&&Number.isFinite(l)))continue;const u=Math.round(c.bounds.min.x/l),d=Math.round(c.bounds.min.z/l);for(let p=-1;p<=1;p+=1)for(let g=-1;g<=1;g+=1){const h=`${l}:${u+p}:${d+g}`;n.has(h)||s.has(h)||s.set(h,{id:h,bounds:c.bounds.clone().translate(new x(p*l,0,g*l))})}}const a=Array.from({length:8},()=>[]);for(const c of s.values()){const l=c.bounds.getCenter(new x).sub(i),u=(Math.round(Math.atan2(l.z,l.x)/(Math.PI/4))+8)%8;a[u].push(c)}for(const c of a)c.sort((l,u)=>l.bounds.distanceToPoint(i)-u.bounds.distanceToPoint(i)||l.id.localeCompare(u.id));const o=[];for(let c=0;o.length<e;c+=1){const l=a.flatMap(u=>u[c]?[u[c]]:[]);if(l.length===0)break;o.push(...l.slice(0,e-o.length))}return o},wu=(r,e)=>{const t=r.getCenter(new x);let i=null,n=1/0;for(const s of e){const a=s.receiverBounds.distanceToPoint(t);a<n&&Number.isInteger(s.terrainLevel)&&(n=a,i=s.terrainLevel)}return i};/**
 * postprocessing v6.39.4 build Mon Jul 27 2026
 * https://github.com/pmndrs/postprocessing
 * Copyright 2015-2026 Raoul van Rüschen
 * @license Zlib
 */var _u=(()=>{const r=new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),e=new Float32Array([0,0,2,0,0,2]),t=new wo;return t.setAttribute("position",new Ys(r,3)),t.setAttribute("uv",new Ys(e,2)),t})(),xu=class Fn{static get fullscreenGeometry(){return _u}constructor(e="Pass",t=new Cr,i=new Jn){this.name=e,this.renderer=null,this.scene=t,this.camera=i,this.screen=null,this.rtt=!0,this.needsSwap=!0,this.needsDepthBlit=!1,this.needsDepthTexture=!1,this.enabled=!0}get renderToScreen(){return!this.rtt}set renderToScreen(e){if(this.rtt===e){const t=this.fullscreenMaterial;t!==null&&(t.needsUpdate=!0),this.rtt=!e}}set mainScene(e){}set mainCamera(e){}setRenderer(e){this.renderer=e}isEnabled(){return this.enabled}setEnabled(e){this.enabled=e}get fullscreenMaterial(){return this.screen!==null?this.screen.material:null}set fullscreenMaterial(e){let t=this.screen;t!==null?t.material=e:(t=new Nr(Fn.fullscreenGeometry,e),t.frustumCulled=!1,this.scene===null&&(this.scene=new Cr),this.scene.add(t),this.screen=t)}getFullscreenMaterial(){return this.fullscreenMaterial}setFullscreenMaterial(e){this.fullscreenMaterial=e}getDepthTexture(){return null}setDepthTexture(e,t=yo){}render(e,t,i,n,s){throw new Error("Render method not implemented!")}setSize(e,t){}initialize(e,t,i){}dispose(){for(const e of Object.keys(this)){const t=this[e];(t instanceof je||t instanceof Ei||t instanceof So||t instanceof Fn)&&this[e].dispose()}this.fullscreenMaterial!==null&&this.fullscreenMaterial.dispose()}},No={NONE:0,DEPTH:1,CONVOLUTION:2},Z={SKIP:9,SET:30,ADD:0,ALPHA:1,AVERAGE:2,COLOR:3,COLOR_BURN:4,COLOR_DODGE:5,DARKEN:6,DIFFERENCE:7,DIVIDE:8,DST:9,EXCLUSION:10,HARD_LIGHT:11,HARD_MIX:12,HUE:13,INVERT:14,INVERT_RGB:15,LIGHTEN:16,LINEAR_BURN:17,LINEAR_DODGE:18,LINEAR_LIGHT:19,LUMINOSITY:20,MULTIPLY:21,NEGATION:22,NORMAL:23,OVERLAY:24,PIN_LIGHT:25,REFLECT:26,SATURATION:27,SCREEN:28,SOFT_LIGHT:29,SRC:30,SUBTRACT:31,VIVID_LIGHT:32},Tu="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Mu="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,src.a*opacity);}",bu="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=(dst.rgb+src.rgb)*0.5;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Ru="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.xy,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Eu="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=mix(step(0.0,b)*(1.0-min(vec3(1.0),(1.0-a)/max(b,1e-9))),vec3(1.0),step(1.0,a));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Au="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=step(0.0,a)*mix(min(vec3(1.0),a/max(1.0-b,1e-9)),vec3(1.0),step(1.0,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Cu="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Iu="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=abs(dst.rgb-src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Du="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb/max(src.rgb,1e-9);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Pu="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-2.0*dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Ou="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb,1.0);vec3 b=min(src.rgb,1.0);vec3 c=mix(2.0*a*b,1.0-2.0*(1.0-a)*(1.0-b),step(0.5,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Nu="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=step(1.0,dst.rgb+src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Lu="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.x,a.yz));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Fu="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Bu="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=src.rgb*max(1.0-dst.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Uu="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Hu="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",zu="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb+src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",ku="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(2.0*src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Vu="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.xy,b.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Wu="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Gu="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-abs(1.0-dst.rgb-src.rgb),0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",ju="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,opacity);}",Yu="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=2.0*src.rgb*dst.rgb;vec3 b=1.0-2.0*(1.0-src.rgb)*(1.0-dst.rgb);vec3 c=mix(a,b,step(0.5,dst.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",qu="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 c=mix(mix(src2,dst.rgb,step(0.5*dst.rgb,src.rgb)),max(src2-1.0,vec3(0.0)),step(dst.rgb,src2-1.0));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Ku="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb*dst.rgb/max(1.0-src.rgb,1e-9),1.0);vec3 c=mix(a,src.rgb,step(1.0,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Xu="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.x,b.y,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",$u="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-min(dst.rgb*src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Qu="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 d=dst.rgb+(src2-1.0);vec3 w=step(0.5,src.rgb);vec3 a=dst.rgb-(1.0-src2)*dst.rgb*(1.0-dst.rgb);vec3 b=mix(d*(sqrt(dst.rgb)-dst.rgb),d*dst.rgb*((16.0*dst.rgb-12.0)*dst.rgb+3.0),w*(1.0-step(0.25,dst.rgb)));vec3 c=mix(a,b,w);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Zu="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return src;}",Ju="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",ed="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=mix(max(1.0-min((1.0-dst.rgb)/(2.0*src.rgb),1.0),0.0),min(dst.rgb/(2.0*(1.0-src.rgb)),1.0),step(0.5,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",td=new Map([[Z.ADD,Tu],[Z.ALPHA,Mu],[Z.AVERAGE,bu],[Z.COLOR,Ru],[Z.COLOR_BURN,Eu],[Z.COLOR_DODGE,Au],[Z.DARKEN,Cu],[Z.DIFFERENCE,Iu],[Z.DIVIDE,Du],[Z.DST,null],[Z.EXCLUSION,Pu],[Z.HARD_LIGHT,Ou],[Z.HARD_MIX,Nu],[Z.HUE,Lu],[Z.INVERT,Fu],[Z.INVERT_RGB,Bu],[Z.LIGHTEN,Uu],[Z.LINEAR_BURN,Hu],[Z.LINEAR_DODGE,zu],[Z.LINEAR_LIGHT,ku],[Z.LUMINOSITY,Vu],[Z.MULTIPLY,Wu],[Z.NEGATION,Gu],[Z.NORMAL,ju],[Z.OVERLAY,Yu],[Z.PIN_LIGHT,qu],[Z.REFLECT,Ku],[Z.SATURATION,Xu],[Z.SCREEN,$u],[Z.SOFT_LIGHT,Qu],[Z.SRC,Zu],[Z.SUBTRACT,Ju],[Z.VIVID_LIGHT,ed]]),rd=class extends vo{constructor(r,e=1){super(),this._blendFunction=r,this.opacity=new D(e)}getOpacity(){return this.opacity.value}setOpacity(r){this.opacity.value=r}get blendFunction(){return this._blendFunction}set blendFunction(r){this._blendFunction=r,this.dispatchEvent({type:"change"})}getBlendFunction(){return this.blendFunction}setBlendFunction(r){this.blendFunction=r}getShaderCode(){return td.get(this.blendFunction)}},id=class extends vo{constructor(r,e,{attributes:t=No.NONE,blendFunction:i=Z.NORMAL,defines:n=new Map,uniforms:s=new Map,extensions:a=null,vertexShader:o=null}={}){super(),this.name=r,this.renderer=null,this.attributes=t,this.fragmentShader=e,this.vertexShader=o,this.defines=n,this.uniforms=s,this.extensions=a,this.blendMode=new rd(i),this.blendMode.addEventListener("change",c=>this.setChanged()),this._inputColorSpace=Qc,this._outputColorSpace=Zc}get inputColorSpace(){return this._inputColorSpace}set inputColorSpace(r){this._inputColorSpace=r,this.setChanged()}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(r){this._outputColorSpace=r,this.setChanged()}set mainScene(r){}set mainCamera(r){}getName(){return this.name}setRenderer(r){this.renderer=r}getDefines(){return this.defines}getUniforms(){return this.uniforms}getExtensions(){return this.extensions}getBlendMode(){return this.blendMode}getAttributes(){return this.attributes}setAttributes(r){this.attributes=r,this.setChanged()}getFragmentShader(){return this.fragmentShader}setFragmentShader(r){this.fragmentShader=r,this.setChanged()}getVertexShader(){return this.vertexShader}setVertexShader(r){this.vertexShader=r,this.setChanged()}setChanged(){this.dispatchEvent({type:"change"})}setDepthTexture(r,e=yo){}update(r,e,t){}setSize(r,e){}initialize(r,e,t){}dispose(){for(const r of Object.keys(this)){const e=this[r];(e instanceof je||e instanceof Ei||e instanceof So||e instanceof xu)&&this[r].dispose()}}};const nd=new x;function Lo(r,e,t=new x,i){const{x:n,y:s,z:a}=r,o=e.x,c=e.y,l=e.z,u=n*n*o,d=s*s*c,p=a*a*l,g=u+d+p,h=Math.sqrt(1/g);if(!Number.isFinite(h))return;const v=nd.copy(r).multiplyScalar(h);if(g<((i==null?void 0:i.centerTolerance)??.1))return t.copy(v);const f=v.multiply(e).multiplyScalar(2);let y=(1-h)*r.length()/(f.length()/2),T=0,R,C,b,I;do{y-=T,R=1/(1+y*o),C=1/(1+y*c),b=1/(1+y*l);const N=R*R,E=C*C,L=b*b,F=N*R,W=E*C,V=L*b;I=u*N+d*E+p*L-1,T=I/((u*F*o+d*W*c+p*V*l)*-2)}while(Math.abs(I)>1e-12);return t.set(n*R,s*C,a*b)}const ri=new x,fa=new x,pa=new x,Bn=class{constructor(e,t,i){this.radii=new x(e,t,i)}get minimumRadius(){return Math.min(this.radii.x,this.radii.y,this.radii.z)}get maximumRadius(){return Math.max(this.radii.x,this.radii.y,this.radii.z)}reciprocalRadii(e=new x){const{x:t,y:i,z:n}=this.radii;return e.set(1/t,1/i,1/n)}reciprocalRadiiSquared(e=new x){const{x:t,y:i,z:n}=this.radii;return e.set(1/t**2,1/i**2,1/n**2)}projectOnSurface(e,t=new x,i){return Lo(e,this.reciprocalRadiiSquared(),t,i)}getSurfaceNormal(e,t=new x){return t.multiplyVectors(this.reciprocalRadiiSquared(ri),e).normalize()}getEastNorthUpVectors(e,t=new x,i=new x,n=new x){this.getSurfaceNormal(e,n),t.set(-e.y,e.x,0).normalize(),i.crossVectors(n,t).normalize()}getEastNorthUpFrame(e,t=new J){const i=ri,n=fa,s=pa;return this.getEastNorthUpVectors(e,i,n,s),t.makeBasis(i,n,s).setPosition(e)}getIntersection(e,t=new x){const i=this.reciprocalRadii(ri),n=fa.copy(i).multiply(e.origin),s=pa.copy(i).multiply(e.direction),a=n.lengthSq(),o=s.lengthSq(),c=n.dot(s),l=c**2-o*(a-1);if(a===1)return t.copy(e.origin);if(a>1){if(c>=0||l<0)return;const u=Math.sqrt(l),d=(-c-u)/o,p=(-c+u)/o;return e.at(Math.min(d,p),t)}if(a<1){const u=c**2-o*(a-1),d=Math.sqrt(u),p=(-c+d)/o;return e.at(p,t)}if(c<0)return e.at(-c/o,t)}getOsculatingSphereCenter(e,t,i=new x){const n=this.radii.x**2,s=ri.set(e.x/n,e.y/n,e.z/this.radii.z**2).normalize();return i.copy(s.multiplyScalar(-t).add(e))}};Bn.WGS84=new Bn(6378137,6378137,6356752314245179e-9);let ct=Bn;const ii=new x,ga=new x,xr=class Un{constructor(e=0,t=0,i=0){this.longitude=e,this.latitude=t,this.height=i}set(e,t,i){return this.longitude=e,this.latitude=t,i!=null&&(this.height=i),this}clone(){return new Un(this.longitude,this.latitude,this.height)}copy(e){return this.longitude=e.longitude,this.latitude=e.latitude,this.height=e.height,this}equals(e){return e.longitude===this.longitude&&e.latitude===this.latitude&&e.height===this.height}setLongitude(e){return this.longitude=e,this}setLatitude(e){return this.latitude=e,this}setHeight(e){return this.height=e,this}normalize(){return this.longitude<Un.MIN_LONGITUDE&&(this.longitude+=Math.PI*2),this}setFromECEF(e,t){const i=((t==null?void 0:t.ellipsoid)??ct.WGS84).reciprocalRadiiSquared(ii),n=Lo(e,i,ga,t);if(n==null)throw new Error(`Could not project position to ellipsoid surface: ${e.toArray()}`);const s=ii.multiplyVectors(n,i).normalize();this.longitude=Math.atan2(s.y,s.x),this.latitude=Math.asin(s.z);const a=ii.subVectors(e,n);return this.height=Math.sign(a.dot(e))*a.length(),this}toECEF(e=new x,t){const i=(t==null?void 0:t.ellipsoid)??ct.WGS84,n=ii.multiplyVectors(i.radii,i.radii),s=Math.cos(this.latitude),a=ga.set(s*Math.cos(this.longitude),s*Math.sin(this.longitude),Math.sin(this.latitude)).normalize();return e.multiplyVectors(n,a),e.divideScalar(Math.sqrt(a.dot(e))).add(a.multiplyScalar(this.height))}fromArray(e,t=0){return this.longitude=e[t],this.latitude=e[t+1],this.height=e[t+2],this}toArray(e=[],t=0){return e[t]=this.longitude,e[t+1]=this.latitude,e[t+2]=this.height,e}*[Symbol.iterator](){yield this.longitude,yield this.latitude,yield this.height}};xr.MIN_LONGITUDE=-Math.PI,xr.MAX_LONGITUDE=Math.PI,xr.MIN_LATITUDE=-Math.PI/2,xr.MAX_LATITUDE=Math.PI/2;let Fo=xr;var sd="Invariant failed";function Bo(r,e){if(!r)throw new Error(sd)}class ad extends ts{load(e,t,i,n){const s=new el(this.manager);s.setResponseType("arraybuffer"),s.setRequestHeader(this.requestHeader),s.setPath(this.path),s.setWithCredentials(this.withCredentials),s.load(e,a=>{Bo(a instanceof ArrayBuffer);try{t(a)}catch(o){n!=null?n(o):console.error(o),this.manager.itemError(e)}},i,n)}}const od="This is not an object",cd="This is not a Float16Array object",va="This constructor is not a subclass of Float16Array",Uo="The constructor property value is not an object",ld="Species constructor didn't return TypedArray object",ud="Derived constructor created TypedArray object which was too small length",Rr="Attempting to access detached ArrayBuffer",Hn="Cannot convert undefined or null to object",zn="Cannot mix BigInt and other types, use explicit conversions",ya="@@iterator property is not callable",Sa="Reduce of empty array with no initial value",dd="The comparison function must be either a function or undefined",ln="Offset is out of bounds";function he(r){return(e,...t)=>Fe(r,e,t)}function ir(r,e){return he(Jt(r,e).get)}const{apply:Fe,construct:Tr,defineProperty:hd,get:un,getOwnPropertyDescriptor:Jt,getPrototypeOf:Ur,has:kn,ownKeys:Ho,set:wa,setPrototypeOf:zo}=Reflect,md=Proxy,{EPSILON:fd,MAX_SAFE_INTEGER:_a,isFinite:ko,isNaN:er}=Number,{iterator:lt,species:pd,toStringTag:as,for:gd}=Symbol,tr=Object,{create:Ai,defineProperty:Hr,freeze:vd,is:xa}=tr,Vn=tr.prototype,yd=Vn.__lookupGetter__?he(Vn.__lookupGetter__):(r,e)=>{if(r==null)throw ge(Hn);let t=tr(r);do{const i=Jt(t,e);if(i!==void 0)return St(i,"get")?i.get:void 0}while((t=Ur(t))!==null)},St=tr.hasOwn||he(Vn.hasOwnProperty),Vo=Array,Wo=Vo.isArray,Ci=Vo.prototype,Sd=he(Ci.join),wd=he(Ci.push),_d=he(Ci.toLocaleString),os=Ci[lt],xd=he(os),{abs:Td,trunc:Go}=Math,Ii=ArrayBuffer,Md=Ii.isView,jo=Ii.prototype,bd=he(jo.slice),Rd=ir(jo,"byteLength"),Wn=typeof SharedArrayBuffer<"u"?SharedArrayBuffer:null,Ed=Wn&&ir(Wn.prototype,"byteLength"),cs=Ur(Uint8Array),Ad=cs.from,Me=cs.prototype,Cd=Me[lt],Id=he(Me.keys),Dd=he(Me.values),Pd=he(Me.entries),Od=he(Me.set),Ta=he(Me.reverse),Nd=he(Me.fill),Ld=he(Me.copyWithin),Ma=he(Me.sort),yr=he(Me.slice),Fd=he(Me.subarray),Te=ir(Me,"buffer"),Ct=ir(Me,"byteOffset"),ne=ir(Me,"length"),Yo=ir(Me,as),Bd=Uint8Array,He=Uint16Array,ba=(...r)=>Fe(Ad,He,r),ls=Uint32Array,Ud=Float32Array,Nt=Ur([][lt]()),Di=he(Nt.next),Hd=he(function*(){}().next),zd=Ur(Nt),kd=DataView.prototype,Vd=he(kd.getUint16),ge=TypeError,dn=RangeError,qo=WeakSet,Ko=qo.prototype,Wd=he(Ko.add),Gd=he(Ko.has),Pi=WeakMap,us=Pi.prototype,vi=he(us.get),jd=he(us.has),ds=he(us.set),Xo=new Pi,Yd=Ai(null,{next:{value:function(){const r=vi(Xo,this);return Di(r)}},[lt]:{value:function(){return this}}});function Mr(r){if(r[lt]===os&&Nt.next===Di)return r;const e=Ai(Yd);return ds(Xo,e,xd(r)),e}const $o=new Pi,Qo=Ai(zd,{next:{value:function(){const r=vi($o,this);return Hd(r)},writable:!0,configurable:!0}});for(const r of Ho(Nt))r!=="next"&&Hr(Qo,r,Jt(Nt,r));function Ra(r){const e=Ai(Qo);return ds($o,e,r),e}function yi(r){return r!==null&&typeof r=="object"||typeof r=="function"}function Ea(r){return r!==null&&typeof r=="object"}function Si(r){return Yo(r)!==void 0}function Gn(r){const e=Yo(r);return e==="BigInt64Array"||e==="BigUint64Array"}function qd(r){try{return Wo(r)?!1:(Rd(r),!0)}catch{return!1}}function Zo(r){if(Wn===null)return!1;try{return Ed(r),!0}catch{return!1}}function Kd(r){return qd(r)||Zo(r)}function Aa(r){return Wo(r)?r[lt]===os&&Nt.next===Di:!1}function Xd(r){return Si(r)?r[lt]===Cd&&Nt.next===Di:!1}function ni(r){if(typeof r!="string")return!1;const e=+r;return r!==e+""||!ko(e)?!1:e===Go(e)}const wi=gd("__Float16Array__");function $d(r){if(!Ea(r))return!1;const e=Ur(r);if(!Ea(e))return!1;const t=e.constructor;if(t===void 0)return!1;if(!yi(t))throw ge(Uo);return kn(t,wi)}const jn=1/fd;function Qd(r){return r+jn-jn}const Jo=6103515625e-14,Zd=65504,ec=.0009765625,Ca=ec*Jo,Jd=ec*jn;function eh(r){const e=+r;if(!ko(e)||e===0)return e;const t=e>0?1:-1,i=Td(e);if(i<Jo)return t*Qd(i/Ca)*Ca;const n=(1+Jd)*i,s=n-(n-i);return s>Zd||er(s)?t*(1/0):t*s}const tc=new Ii(4),rc=new Ud(tc),ic=new ls(tc),Je=new He(512),et=new Bd(512);for(let r=0;r<256;++r){const e=r-127;e<-24?(Je[r]=0,Je[r|256]=32768,et[r]=24,et[r|256]=24):e<-14?(Je[r]=1024>>-e-14,Je[r|256]=1024>>-e-14|32768,et[r]=-e-1,et[r|256]=-e-1):e<=15?(Je[r]=e+15<<10,Je[r|256]=e+15<<10|32768,et[r]=13,et[r|256]=13):e<128?(Je[r]=31744,Je[r|256]=64512,et[r]=24,et[r|256]=24):(Je[r]=31744,Je[r|256]=64512,et[r]=13,et[r|256]=13)}function st(r){rc[0]=eh(r);const e=ic[0],t=e>>23&511;return Je[t]+((e&8388607)>>et[t])}const hs=new ls(2048);for(let r=1;r<1024;++r){let e=r<<13,t=0;for(;!(e&8388608);)e<<=1,t-=8388608;e&=-8388609,t+=947912704,hs[r]=e|t}for(let r=1024;r<2048;++r)hs[r]=939524096+(r-1024<<13);const nr=new ls(64);for(let r=1;r<31;++r)nr[r]=r<<23;nr[31]=1199570944;nr[32]=2147483648;for(let r=33;r<63;++r)nr[r]=2147483648+(r-32<<23);nr[63]=3347054592;const nc=new He(64);for(let r=1;r<64;++r)r!==32&&(nc[r]=1024);function ae(r){const e=r>>10;return ic[0]=hs[nc[e]+(r&1023)]+nr[e],rc[0]}function vt(r){const e=+r;return er(e)||e===0?0:Go(e)}function hn(r){const e=vt(r);return e<0?0:e<_a?e:_a}function si(r,e){if(!yi(r))throw ge(od);const t=r.constructor;if(t===void 0)return e;if(!yi(t))throw ge(Uo);return t[pd]??e}function Er(r){if(Zo(r))return!1;try{return bd(r,0,0),!1}catch{}return!0}function Ia(r,e){const t=er(r),i=er(e);if(t&&i)return 0;if(t)return 1;if(i||r<e)return-1;if(r>e)return 1;if(r===0&&e===0){const n=xa(r,0),s=xa(e,0);if(!n&&s)return-1;if(n&&!s)return 1}return 0}const ms=2,_i=new Pi;function qt(r){return jd(_i,r)||!Md(r)&&$d(r)}function ie(r){if(!qt(r))throw ge(cd)}function ai(r,e){const t=qt(r),i=Si(r);if(!t&&!i)throw ge(ld);if(typeof e=="number"){let n;if(t){const s=K(r);n=ne(s)}else n=ne(r);if(n<e)throw ge(ud)}if(Gn(r))throw ge(zn)}function K(r){const e=vi(_i,r);if(e!==void 0){const n=Te(e);if(Er(n))throw ge(Rr);return e}const t=r.buffer;if(Er(t))throw ge(Rr);const i=Tr(ce,[t,r.byteOffset,r.length],r.constructor);return vi(_i,i)}function Da(r){const e=ne(r),t=[];for(let i=0;i<e;++i)t[i]=ae(r[i]);return t}const sc=new qo;for(const r of Ho(Me)){if(r===as)continue;const e=Jt(Me,r);St(e,"get")&&typeof e.get=="function"&&Wd(sc,e.get)}const th=vd({get(r,e,t){return ni(e)&&St(r,e)?ae(un(r,e)):Gd(sc,yd(r,e))?un(r,e):un(r,e,t)},set(r,e,t,i){return ni(e)&&St(r,e)?wa(r,e,st(t)):wa(r,e,t,i)},getOwnPropertyDescriptor(r,e){if(ni(e)&&St(r,e)){const t=Jt(r,e);return t.value=ae(t.value),t}return Jt(r,e)},defineProperty(r,e,t){return ni(e)&&St(r,e)&&St(t,"value")&&(t.value=st(t.value)),hd(r,e,t)}});class ce{constructor(e,t,i){let n;if(qt(e))n=Tr(He,[K(e)],new.target);else if(yi(e)&&!Kd(e)){let a,o;if(Si(e)){a=e,o=ne(e);const c=Te(e);if(Er(c))throw ge(Rr);if(Gn(e))throw ge(zn);const l=new Ii(o*ms);n=Tr(He,[l],new.target)}else{const c=e[lt];if(c!=null&&typeof c!="function")throw ge(ya);c!=null?Aa(e)?(a=e,o=e.length):(a=[...e],o=a.length):(a=e,o=hn(a.length)),n=Tr(He,[o],new.target)}for(let c=0;c<o;++c)n[c]=st(a[c])}else n=Tr(He,arguments,new.target);const s=new md(n,th);return ds(_i,s,n),s}static from(e,...t){const i=this;if(!kn(i,wi))throw ge(va);if(i===ce){if(qt(e)&&t.length===0){const u=K(e),d=new He(Te(u),Ct(u),ne(u));return new ce(Te(yr(d)))}if(t.length===0)return new ce(Te(ba(e,st)));const c=t[0],l=t[1];return new ce(Te(ba(e,function(u,...d){return st(Fe(c,this,[u,...Mr(d)]))},l)))}let n,s;const a=e[lt];if(a!=null&&typeof a!="function")throw ge(ya);if(a!=null)Aa(e)?(n=e,s=e.length):Xd(e)?(n=e,s=ne(e)):(n=[...e],s=n.length);else{if(e==null)throw ge(Hn);n=tr(e),s=hn(n.length)}const o=new i(s);if(t.length===0)for(let c=0;c<s;++c)o[c]=n[c];else{const c=t[0],l=t[1];for(let u=0;u<s;++u)o[u]=Fe(c,l,[n[u],u])}return o}static of(...e){const t=this;if(!kn(t,wi))throw ge(va);const i=e.length;if(t===ce){const s=new ce(i),a=K(s);for(let o=0;o<i;++o)a[o]=st(e[o]);return s}const n=new t(i);for(let s=0;s<i;++s)n[s]=e[s];return n}keys(){ie(this);const e=K(this);return Id(e)}values(){ie(this);const e=K(this);return Ra(function*(){for(const t of Dd(e))yield ae(t)}())}entries(){ie(this);const e=K(this);return Ra(function*(){for(const[t,i]of Pd(e))yield[t,ae(i)]}())}at(e){ie(this);const t=K(this),i=ne(t),n=vt(e),s=n>=0?n:i+n;if(!(s<0||s>=i))return ae(t[s])}with(e,t){ie(this);const i=K(this),n=ne(i),s=vt(e),a=s>=0?s:n+s,o=+t;if(a<0||a>=n)throw dn(ln);const c=new He(Te(i),Ct(i),ne(i)),l=new ce(Te(yr(c))),u=K(l);return u[a]=st(o),l}map(e,...t){ie(this);const i=K(this),n=ne(i),s=t[0],a=si(i,ce);if(a===ce){const c=new ce(n),l=K(c);for(let u=0;u<n;++u){const d=ae(i[u]);l[u]=st(Fe(e,s,[d,u,this]))}return c}const o=new a(n);ai(o,n);for(let c=0;c<n;++c){const l=ae(i[c]);o[c]=Fe(e,s,[l,c,this])}return o}filter(e,...t){ie(this);const i=K(this),n=ne(i),s=t[0],a=[];for(let l=0;l<n;++l){const u=ae(i[l]);Fe(e,s,[u,l,this])&&wd(a,u)}const o=si(i,ce),c=new o(a);return ai(c),c}reduce(e,...t){ie(this);const i=K(this),n=ne(i);if(n===0&&t.length===0)throw ge(Sa);let s,a;t.length===0?(s=ae(i[0]),a=1):(s=t[0],a=0);for(let o=a;o<n;++o)s=e(s,ae(i[o]),o,this);return s}reduceRight(e,...t){ie(this);const i=K(this),n=ne(i);if(n===0&&t.length===0)throw ge(Sa);let s,a;t.length===0?(s=ae(i[n-1]),a=n-2):(s=t[0],a=n-1);for(let o=a;o>=0;--o)s=e(s,ae(i[o]),o,this);return s}forEach(e,...t){ie(this);const i=K(this),n=ne(i),s=t[0];for(let a=0;a<n;++a)Fe(e,s,[ae(i[a]),a,this])}find(e,...t){ie(this);const i=K(this),n=ne(i),s=t[0];for(let a=0;a<n;++a){const o=ae(i[a]);if(Fe(e,s,[o,a,this]))return o}}findIndex(e,...t){ie(this);const i=K(this),n=ne(i),s=t[0];for(let a=0;a<n;++a){const o=ae(i[a]);if(Fe(e,s,[o,a,this]))return a}return-1}findLast(e,...t){ie(this);const i=K(this),n=ne(i),s=t[0];for(let a=n-1;a>=0;--a){const o=ae(i[a]);if(Fe(e,s,[o,a,this]))return o}}findLastIndex(e,...t){ie(this);const i=K(this),n=ne(i),s=t[0];for(let a=n-1;a>=0;--a){const o=ae(i[a]);if(Fe(e,s,[o,a,this]))return a}return-1}every(e,...t){ie(this);const i=K(this),n=ne(i),s=t[0];for(let a=0;a<n;++a)if(!Fe(e,s,[ae(i[a]),a,this]))return!1;return!0}some(e,...t){ie(this);const i=K(this),n=ne(i),s=t[0];for(let a=0;a<n;++a)if(Fe(e,s,[ae(i[a]),a,this]))return!0;return!1}set(e,...t){ie(this);const i=K(this),n=vt(t[0]);if(n<0)throw dn(ln);if(e==null)throw ge(Hn);if(Gn(e))throw ge(zn);if(qt(e))return Od(K(this),K(e),n);if(Si(e)){const c=Te(e);if(Er(c))throw ge(Rr)}const s=ne(i),a=tr(e),o=hn(a.length);if(n===1/0||o+n>s)throw dn(ln);for(let c=0;c<o;++c)i[c+n]=st(a[c])}reverse(){ie(this);const e=K(this);return Ta(e),this}toReversed(){ie(this);const e=K(this),t=new He(Te(e),Ct(e),ne(e)),i=new ce(Te(yr(t))),n=K(i);return Ta(n),i}fill(e,...t){ie(this);const i=K(this);return Nd(i,st(e),...Mr(t)),this}copyWithin(e,t,...i){ie(this);const n=K(this);return Ld(n,e,t,...Mr(i)),this}sort(e){ie(this);const t=K(this),i=e!==void 0?e:Ia;return Ma(t,(n,s)=>i(ae(n),ae(s))),this}toSorted(e){ie(this);const t=K(this);if(e!==void 0&&typeof e!="function")throw new ge(dd);const i=e!==void 0?e:Ia,n=new He(Te(t),Ct(t),ne(t)),s=new ce(Te(yr(n))),a=K(s);return Ma(a,(o,c)=>i(ae(o),ae(c))),s}slice(e,t){ie(this);const i=K(this),n=si(i,ce);if(n===ce){const h=new He(Te(i),Ct(i),ne(i));return new ce(Te(yr(h,e,t)))}const s=ne(i),a=vt(e),o=t===void 0?s:vt(t);let c;a===-1/0?c=0:a<0?c=s+a>0?s+a:0:c=s<a?s:a;let l;o===-1/0?l=0:o<0?l=s+o>0?s+o:0:l=s<o?s:o;const u=l-c>0?l-c:0,d=new n(u);if(ai(d,u),u===0)return d;const p=Te(i);if(Er(p))throw ge(Rr);let g=0;for(;c<l;)d[g]=ae(i[c]),++c,++g;return d}subarray(e,t){ie(this);const i=K(this),n=si(i,ce),s=new He(Te(i),Ct(i),ne(i)),a=Fd(s,e,t),o=new n(Te(a),Ct(a),ne(a));return ai(o),o}indexOf(e,...t){ie(this);const i=K(this),n=ne(i);let s=vt(t[0]);if(s===1/0)return-1;s<0&&(s+=n,s<0&&(s=0));for(let a=s;a<n;++a)if(St(i,a)&&ae(i[a])===e)return a;return-1}lastIndexOf(e,...t){ie(this);const i=K(this),n=ne(i);let s=t.length>=1?vt(t[0]):n-1;if(s===-1/0)return-1;s>=0?s=s<n-1?s:n-1:s+=n;for(let a=s;a>=0;--a)if(St(i,a)&&ae(i[a])===e)return a;return-1}includes(e,...t){ie(this);const i=K(this),n=ne(i);let s=vt(t[0]);if(s===1/0)return!1;s<0&&(s+=n,s<0&&(s=0));const a=er(e);for(let o=s;o<n;++o){const c=ae(i[o]);if(a&&er(c)||c===e)return!0}return!1}join(e){ie(this);const t=K(this),i=Da(t);return Sd(i,e)}toLocaleString(...e){ie(this);const t=K(this),i=Da(t);return _d(i,...Mr(e))}get[as](){if(qt(this))return"Float16Array"}}Hr(ce,"BYTES_PER_ELEMENT",{value:ms});Hr(ce,wi,{});zo(ce,cs);const xi=ce.prototype;Hr(xi,"BYTES_PER_ELEMENT",{value:ms});Hr(xi,lt,{value:xi.values,writable:!0,configurable:!0});zo(xi,Me);function rh(r,e,...t){return ae(Vd(r,e,...Mr(t)))}function ih(r){return r instanceof Int8Array||r instanceof Uint8Array||r instanceof Uint8ClampedArray||r instanceof Int16Array||r instanceof Uint16Array||r instanceof Int32Array||r instanceof Uint32Array||r instanceof ce||r instanceof Float32Array||r instanceof Float64Array}let oi;function nh(){if(oi!=null)return oi;const r=new Uint32Array([268435456]);return oi=new Uint8Array(r.buffer,r.byteOffset,r.byteLength)[0]===0,oi}function sh(r,e,t,i=!0){if(i===nh())return new e(r);const n=Object.assign(new DataView(r),{getFloat16(a,o){return rh(this,a,o)}}),s=new e(n.byteLength/e.BYTES_PER_ELEMENT);for(let a=0,o=0;a<s.length;++a,o+=e.BYTES_PER_ELEMENT)s[a]=n[t](o,i);return s}const mn=(r,e)=>sh(r,ce,"getFloat16",e);class ah extends ts{load(e,t,i,n){const s=new ad(this.manager);s.setRequestHeader(this.requestHeader),s.setPath(this.path),s.setWithCredentials(this.withCredentials),s.load(e,a=>{try{t(this.parseTypedArray(a))}catch(o){n!=null?n(o):console.error(o),this.manager.itemError(e)}},i,n)}}function oh(r){return class extends ah{constructor(){super(...arguments),this.parseTypedArray=r}}}function ch(r){const e=r instanceof Int8Array?tl:r instanceof Uint8Array?Ks:r instanceof Uint8ClampedArray?Ks:r instanceof Int16Array?rl:r instanceof Uint16Array?il:r instanceof Int32Array?nl:r instanceof Uint32Array?Ot:r instanceof ce?_o:r instanceof Float32Array?yt:r instanceof Float64Array?yt:null;return Bo(e!=null),e}const lh={format:Dr,minFilter:qs,magFilter:qs};class uh extends ts{constructor(){super(...arguments),this.parameters={}}load(e,t,i,n){const s=new this.Texture,a=new this.TypedArrayLoader(this.manager);a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(this.withCredentials),a.load(e,o=>{s.image.data=o instanceof ce?new Uint16Array(o.buffer):o;const{width:c,height:l,depth:u,...d}=this.parameters;c!=null&&(s.image.width=c),l!=null&&(s.image.height=l),"depth"in s.image&&u!=null&&(s.image.depth=u),s.type=ch(o),Object.assign(s,d),s.needsUpdate=!0,t(s)},i,n)}}function ac(r,e,t){return class extends uh{constructor(){super(...arguments),this.Texture=r,this.TypedArrayLoader=oh(e),this.parameters={...lh,...t}}}}function dh(r,e){return ac(Jc,r,e)}function hh(r,e){return ac(Pn,r,e)}function mh(r,e){return new(dh(r,e))}function Pa(r,e){return new(hh(r,e))}const Ti=es.clamp,Yn=es.degToRad;function fh(r,e,t,i=0,n=1){return es.mapLinear(r,e,t,i,n)}function ph(r){return Math.min(Math.max(r,0),1)}function Ne(r){return(e,t)=>{e instanceof Ei?Object.defineProperty(e,t,{enumerable:!0,get(){var i;return((i=this.defines)==null?void 0:i[r])!=null},set(i){var n;i!==this[t]&&(i?(this.defines??(this.defines={}),this.defines[r]="1"):(n=this.defines)==null||delete n[r],this.needsUpdate=!0)}}):Object.defineProperty(e,t,{enumerable:!0,get(){return this.defines.has(r)},set(i){i!==this[t]&&(i?this.defines.set(r,"1"):this.defines.delete(r),this.setChanged())}})}}function gh(r,{min:e=Number.MIN_SAFE_INTEGER,max:t=Number.MAX_SAFE_INTEGER}={}){return(i,n)=>{i instanceof Ei?Object.defineProperty(i,n,{enumerable:!0,get(){var s;const a=(s=this.defines)==null?void 0:s[r];return a!=null?parseInt(a):0},set(s){const a=this[n];s!==a&&(this.defines??(this.defines={}),this.defines[r]=Ti(s,e,t).toFixed(0),this.needsUpdate=!0)}}):Object.defineProperty(i,n,{enumerable:!0,get(){const s=this.defines.get(r);return s!=null?parseInt(s):0},set(s){const a=this[n];s!==a&&(this.defines.set(r,Ti(s,e,t).toFixed(0)),this.setChanged())}})}}var zr=Uint8Array,oc=Uint16Array,vh=Uint32Array,yh=new zr([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Sh=new zr([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),cc=function(r,e){for(var t=new oc(31),i=0;i<31;++i)t[i]=e+=1<<r[i-1];for(var n=new vh(t[30]),i=1;i<30;++i)for(var s=t[i];s<t[i+1];++s)n[s]=s-t[i]<<5|i;return[t,n]},lc=cc(yh,2),wh=lc[0],_h=lc[1];wh[28]=258,_h[258]=28;cc(Sh,0);var xh=new oc(32768);for(var me=0;me<32768;++me){var xt=(me&43690)>>>1|(me&21845)<<1;xt=(xt&52428)>>>2|(xt&13107)<<2,xt=(xt&61680)>>>4|(xt&3855)<<4,xh[me]=((xt&65280)>>>8|(xt&255)<<8)>>>1}var Oi=new zr(288);for(var me=0;me<144;++me)Oi[me]=8;for(var me=144;me<256;++me)Oi[me]=9;for(var me=256;me<280;++me)Oi[me]=7;for(var me=280;me<288;++me)Oi[me]=8;var Th=new zr(32);for(var me=0;me<32;++me)Th[me]=5;var Mh=new zr(0),bh=typeof TextDecoder<"u"&&new TextDecoder,Rh=0;try{bh.decode(Mh,{stream:!0}),Rh=1}catch{}const Eh=/^[ \t]*#include +"([\w\d./]+)"/gm;function Lt(r,e){return r.replace(Eh,(t,i)=>{const n=i.split("/").reduce((s,a)=>typeof s!="string"&&s!=null?s[a]:void 0,e);if(typeof n!="string")throw new Error(`Could not find include for ${i}.`);return Lt(n,e)})}const Ah=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*(?:i\s*\+\+|\+\+\s*i)\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ch(r,e,t,i){let n="";for(let s=parseInt(e);s<parseInt(t);++s)n+=i.replace(/\[\s*i\s*\]/g,"["+s+"]").replace(/UNROLLED_LOOP_INDEX/g,`${s}`);return n}function Ih(r){return r.replace(Ah,Ch)}const Dh=`// Reference: https://github.com/mrdoob/three.js/blob/r171/examples/jsm/csm/CSMShader.js

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
`,Ph=`// cSpell:words logdepthbuf

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
`,Oh=`// Reference: https://advances.realtimerendering.com/s2014/index.html#_NEXT_GENERATION_POST

float interleavedGradientNoise(const vec2 coord) {
  const vec3 magic = vec3(0.06711056, 0.00583715, 52.9829189);
  return fract(magic.z * fract(dot(coord, magic.xy)));
}
`,Nh=`#if !defined(saturate)
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
`,Lh=`// Reference: https://jcgt.org/published/0003/02/01/paper.pdf

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
`,Fh=`float raySphereFirstIntersection(
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
`,Bh=`vec3 screenToView(
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
`,Uh=`// Reference: https://www.gamedev.net/tutorials/programming/graphics/contact-hardening-soft-shadows-made-fast-r4906/

vec2 vogelDisk(const int index, const int sampleCount, const float phi) {
  const float goldenAngle = 2.39996322972865332;
  float r = sqrt(float(index) + 0.5) / sqrt(float(sampleCount));
  float theta = float(index) * goldenAngle + phi;
  return r * vec2(cos(theta), sin(theta));
}
`,Hh=Dh,zh=Ph,kh=Oh,Vh=Nh,Wh=Lh,uc=Fh,Gh=Bh,jh=Uh,fs=`// Based on the following work and adapted to Three.js.
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
`,rr=`uniform vec3 u_solar_irradiance;
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
`,Yh=["solarIrradiance","sunAngularRadius","bottomRadius","topRadius","rayleighScattering","mieScattering","miePhaseFunctionG","muSMin","skyRadianceToLuminance","sunRadianceToLuminance","luminousEfficiency"];function qh(r,e){if(e!=null)for(const t of Yh){const i=e[t];i!=null&&(r[t]instanceof x?r[t].copy(i):r[t]=i)}}const qn=class{constructor(e){this.solarIrradiance=new x(1.474,1.8504,1.91198),this.sunAngularRadius=.004675,this.bottomRadius=636e4,this.topRadius=642e4,this.rayleighScattering=new x(.005802,.013558,.0331),this.mieScattering=new x(.003996,.003996,.003996),this.miePhaseFunctionG=.8,this.muSMin=Math.cos(Yn(120)),this.skyRadianceToLuminance=new x(114974.916437,71305.954816,65310.548555),this.sunRadianceToLuminance=new x(98242.786222,69954.398112,66475.012354),this.luminousEfficiency=new x(.2126,.7152,.0722),this.skyRadianceToRelativeLuminance=new x,this.sunRadianceToRelativeLuminance=new x,qh(this,e);const t=this.luminousEfficiency.dot(this.skyRadianceToLuminance);this.skyRadianceToRelativeLuminance.copy(this.skyRadianceToLuminance).divideScalar(t),this.sunRadianceToRelativeLuminance.copy(this.sunRadianceToLuminance).divideScalar(t)}};qn.DEFAULT=new qn;let Ni=qn;const Li=64,Fi=16,ps=32,gs=128,vs=32,ys=8,Kh=ys*vs,Xh=gs,$h=ps,Bi=256,Ui=64,Qt=1/1e3,Qh="82e00c5222d6cbc222af69abdf6d3f4fc9f63030",fn=`https://media.githubusercontent.com/media/takram-design-engineering/three-geospatial/${Qh}/packages/atmosphere/assets`,Zh=new x;function Hi(r,e,t,i,n=!0){const s=t.projectOnSurface(r,Zh);return s!=null?t.getOsculatingSphereCenter(!n||s.lengthSq()<r.lengthSq()?s:r,e,i):i.setScalar(0)}const Jh=`precision highp sampler2DArray;

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
`,em=`uniform mat4 inverseViewMatrix;
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
`,dc=`vec3 getLunarRadiance(const float moonAngularRadius) {
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
`;var tm=Object.defineProperty,qe=(r,e,t,i)=>{for(var n=void 0,s=r.length-1,a;s>=0;s--)(a=r[s])&&(n=a(e,t,n)||n);return n&&tm(e,t,n),n};const rm=new x,im=new x,nm=new Fo,sm={blendFunction:Z.NORMAL,octEncodedNormal:!1,reconstructNormal:!1,ellipsoid:ct.WGS84,correctAltitude:!0,correctGeometricError:!0,photometric:!0,sunIrradiance:!1,skyIrradiance:!1,transmittance:!0,inscatter:!0,irradianceScale:1,sky:!1,sun:!0,moon:!0,moonAngularRadius:.0045,lunarRadianceScale:1};class Ke extends id{constructor(e=new Ri,t,i=Ni.DEFAULT){const{blendFunction:n,normalBuffer:s=null,octEncodedNormal:a,reconstructNormal:o,irradianceTexture:c=null,scatteringTexture:l=null,transmittanceTexture:u=null,ellipsoid:d,correctAltitude:p,correctGeometricError:g,photometric:h,sunDirection:v,sunIrradiance:f,skyIrradiance:y,transmittance:T,inscatter:R,irradianceScale:C,sky:b,sun:I,moon:N,moonDirection:E,moonAngularRadius:L,lunarRadianceScale:F}={...sm,...t};super("AerialPerspectiveEffect",Ih(Lt(Jh,{core:{depth:zh,packing:Wh,math:Vh,transform:Gh,raySphereIntersection:uc,cascadedShadowMaps:Hh,interleavedGradientNoise:kh,vogelDisk:jh},parameters:rr,functions:fs,sky:dc})),{blendFunction:n,vertexShader:Lt(em,{parameters:rr}),attributes:No.DEPTH,uniforms:new Map(Object.entries({normalBuffer:new D(s),projectionMatrix:new D(new J),viewMatrix:new D(new J),inverseProjectionMatrix:new D(new J),inverseViewMatrix:new D(new J),cameraPosition:new D(new x),bottomRadius:new D(i.bottomRadius),ellipsoidRadii:new D(new x),ellipsoidCenter:new D(new x),inverseEllipsoidMatrix:new D(new J),altitudeCorrection:new D(new x),sunDirection:new D((v==null?void 0:v.clone())??new x),irradianceScale:new D(C),idealSphereAlpha:new D(0),moonDirection:new D((E==null?void 0:E.clone())??new x),moonAngularRadius:new D(L),lunarRadianceScale:new D(F),overlayBuffer:new D(null),shadowBuffer:new D(null),shadowMapSize:new D(new bt),shadowIntervals:new D([]),shadowMatrices:new D([]),inverseShadowMatrices:new D([]),shadowFar:new D(0),shadowTopHeight:new D(0),shadowRadius:new D(3),stbnTexture:new D(null),frame:new D(0),shadowLengthBuffer:new D(null),u_solar_irradiance:new D(i.solarIrradiance),u_sun_angular_radius:new D(i.sunAngularRadius),u_bottom_radius:new D(i.bottomRadius*Qt),u_top_radius:new D(i.topRadius*Qt),u_rayleigh_scattering:new D(i.rayleighScattering),u_mie_scattering:new D(i.mieScattering),u_mie_phase_function_g:new D(i.miePhaseFunctionG),u_mu_s_min:new D(i.muSMin),u_irradiance_texture:new D(c),u_scattering_texture:new D(l),u_single_mie_scattering_texture:new D(l),u_transmittance_texture:new D(u)})),defines:new Map([["TRANSMITTANCE_TEXTURE_WIDTH",Bi.toFixed(0)],["TRANSMITTANCE_TEXTURE_HEIGHT",Ui.toFixed(0)],["SCATTERING_TEXTURE_R_SIZE",ps.toFixed(0)],["SCATTERING_TEXTURE_MU_SIZE",gs.toFixed(0)],["SCATTERING_TEXTURE_MU_S_SIZE",vs.toFixed(0)],["SCATTERING_TEXTURE_NU_SIZE",ys.toFixed(0)],["IRRADIANCE_TEXTURE_WIDTH",Li.toFixed(0)],["IRRADIANCE_TEXTURE_HEIGHT",Fi.toFixed(0)],["METER_TO_LENGTH_UNIT",Qt.toFixed(7)],["SUN_SPECTRAL_RADIANCE_TO_LUMINANCE",`vec3(${i.sunRadianceToRelativeLuminance.toArray().map(W=>W.toFixed(12)).join(",")})`],["SKY_SPECTRAL_RADIANCE_TO_LUMINANCE",`vec3(${i.skyRadianceToRelativeLuminance.toArray().map(W=>W.toFixed(12)).join(",")})`]])}),this.camera=e,this.atmosphere=i,this.ellipsoidMatrix=new J,this.overlay=null,this.shadow=null,this.shadowLength=null,this.shadowSampleCount=8,this.octEncodedNormal=a,this.reconstructNormal=o,this.ellipsoid=d,this.correctAltitude=p,this.correctGeometricError=g,this.photometric=h,this.sunIrradiance=f,this.skyIrradiance=y,this.transmittance=T,this.inscatter=R,this.sky=b,this.sun=I,this.moon=N}get mainCamera(){return this.camera}set mainCamera(e){this.camera=e}copyCameraSettings(e){const{projectionMatrix:t,matrixWorldInverse:i,projectionMatrixInverse:n,matrixWorld:s}=e,a=this.uniforms;a.get("projectionMatrix").value.copy(t),a.get("viewMatrix").value.copy(i),a.get("inverseProjectionMatrix").value.copy(n),a.get("inverseViewMatrix").value.copy(s);const o=e.getWorldPosition(a.get("cameraPosition").value),c=a.get("inverseEllipsoidMatrix").value.copy(this.ellipsoidMatrix).invert(),l=rm.copy(o).applyMatrix4(c).sub(a.get("ellipsoidCenter").value);try{const d=nm.setFromECEF(l).height,p=im.set(0,this.ellipsoid.maximumRadius,-d).applyMatrix4(t);a.get("idealSphereAlpha").value=ph(fh(p.y,41.5,13.8,0,1))}catch{return}const u=a.get("altitudeCorrection");this.correctAltitude?Hi(l,this.atmosphere.bottomRadius,this.ellipsoid,u.value):u.value.setScalar(0)}updateComposition(){const{uniforms:e,defines:t,overlay:i,shadow:n,shadowLength:s}=this,a=t.has("HAS_OVERLAY"),o=i!=null;o!==a&&(o?t.set("HAS_OVERLAY","1"):(t.delete("HAS_OVERLAY"),e.get("overlayBuffer").value=null),this.setChanged()),o&&(e.get("overlayBuffer").value=i.map);const c=t.has("HAS_SHADOW"),l=n!=null;if(l!==c&&(l?t.set("HAS_SHADOW","1"):(t.delete("HAS_SHADOW"),e.get("shadowBuffer").value=null),this.setChanged()),l){const p=t.get("SHADOW_CASCADE_COUNT"),g=`${n.cascadeCount}`;p!==g&&(t.set("SHADOW_CASCADE_COUNT",n.cascadeCount.toFixed(0)),this.setChanged()),e.get("shadowBuffer").value=n.map,e.get("shadowMapSize").value=n.mapSize,e.get("shadowIntervals").value=n.intervals,e.get("shadowMatrices").value=n.matrices,e.get("inverseShadowMatrices").value=n.inverseMatrices,e.get("shadowFar").value=n.far,e.get("shadowTopHeight").value=n.topHeight}const u=t.has("HAS_SHADOW_LENGTH"),d=s!=null;d!==u&&(d?t.set("HAS_SHADOW_LENGTH","1"):(t.delete("HAS_SHADOW_LENGTH"),e.get("shadowLengthBuffer").value=null),this.setChanged()),d&&(e.get("shadowLengthBuffer").value=s.map)}update(e,t,i){this.copyCameraSettings(this.camera),this.updateComposition(),++this.uniforms.get("frame").value}get normalBuffer(){return this.uniforms.get("normalBuffer").value}set normalBuffer(e){this.uniforms.get("normalBuffer").value=e}get irradianceTexture(){return this.uniforms.get("u_irradiance_texture").value}set irradianceTexture(e){this.uniforms.get("u_irradiance_texture").value=e}get scatteringTexture(){return this.uniforms.get("u_scattering_texture").value}set scatteringTexture(e){this.uniforms.get("u_scattering_texture").value=e,this.uniforms.get("u_single_mie_scattering_texture").value=e}get transmittanceTexture(){return this.uniforms.get("u_transmittance_texture").value}set transmittanceTexture(e){this.uniforms.get("u_transmittance_texture").value=e}get useHalfFloat(){return!0}set useHalfFloat(e){}get ellipsoid(){return this._ellipsoid}set ellipsoid(e){this._ellipsoid=e,this.uniforms.get("ellipsoidRadii").value.copy(e.radii)}get ellipsoidCenter(){return this.uniforms.get("ellipsoidCenter").value}get sunDirection(){return this.uniforms.get("sunDirection").value}get irradianceScale(){return this.uniforms.get("irradianceScale").value}set irradianceScale(e){this.uniforms.get("irradianceScale").value=e}get moonDirection(){return this.uniforms.get("moonDirection").value}get moonAngularRadius(){return this.uniforms.get("moonAngularRadius").value}set moonAngularRadius(e){this.uniforms.get("moonAngularRadius").value=e}get lunarRadianceScale(){return this.uniforms.get("lunarRadianceScale").value}set lunarRadianceScale(e){this.uniforms.get("lunarRadianceScale").value=e}get stbnTexture(){return this.uniforms.get("stbnTexture").value}set stbnTexture(e){this.uniforms.get("stbnTexture").value=e}get shadowRadius(){return this.uniforms.get("shadowRadius").value}set shadowRadius(e){this.uniforms.get("shadowRadius").value=e}}qe([Ne("OCT_ENCODED_NORMAL")],Ke.prototype,"octEncodedNormal");qe([Ne("RECONSTRUCT_NORMAL")],Ke.prototype,"reconstructNormal");qe([Ne("CORRECT_GEOMETRIC_ERROR")],Ke.prototype,"correctGeometricError");qe([Ne("PHOTOMETRIC")],Ke.prototype,"photometric");qe([Ne("SUN_IRRADIANCE")],Ke.prototype,"sunIrradiance");qe([Ne("SKY_IRRADIANCE")],Ke.prototype,"skyIrradiance");qe([Ne("TRANSMITTANCE")],Ke.prototype,"transmittance");qe([Ne("INSCATTER")],Ke.prototype,"inscatter");qe([Ne("SKY")],Ke.prototype,"sky");qe([Ne("SUN")],Ke.prototype,"sun");qe([Ne("MOON")],Ke.prototype,"moon");qe([gh("SHADOW_SAMPLE_COUNT",{min:1,max:16})],Ke.prototype,"shadowSampleCount");var am=Object.defineProperty,om=(r,e,t,i)=>{for(var n=void 0,s=r.length-1,a;s>=0;s--)(a=r[s])&&(n=a(e,t,n)||n);return n&&am(e,t,n),n};const cm=new x;function lm(r,e){let t="",i="";for(let n=1;n<e;++n)t+=`layout(location = ${n}) out float renderTarget${n};
`,i+=`renderTarget${n} = 0.0;
`;return r.replace("#include <mrt_layout>",t).replace("#include <mrt_output>",i)}const Ss={ellipsoid:ct.WGS84,correctAltitude:!0,photometric:!0,renderTargetCount:1};class ws extends sl{constructor(e,t=Ni.DEFAULT){const{irradianceTexture:i=null,scatteringTexture:n=null,transmittanceTexture:s=null,useHalfFloat:a,ellipsoid:o,correctAltitude:c,photometric:l,sunDirection:u,sunAngularRadius:d,renderTargetCount:p,...g}={...Ss,...e};super({toneMapped:!1,depthWrite:!1,depthTest:!1,...g,uniforms:{cameraPosition:new D(new x),ellipsoidCenter:new D(new x),inverseEllipsoidMatrix:new D(new J),altitudeCorrection:new D(new x),sunDirection:new D((u==null?void 0:u.clone())??new x),u_solar_irradiance:new D(t.solarIrradiance),u_sun_angular_radius:new D(d??t.sunAngularRadius),u_bottom_radius:new D(t.bottomRadius*Qt),u_top_radius:new D(t.topRadius*Qt),u_rayleigh_scattering:new D(t.rayleighScattering),u_mie_scattering:new D(t.mieScattering),u_mie_phase_function_g:new D(t.miePhaseFunctionG),u_mu_s_min:new D(t.muSMin),u_irradiance_texture:new D(i),u_scattering_texture:new D(n),u_single_mie_scattering_texture:new D(n),u_transmittance_texture:new D(s),...g.uniforms},defines:{PI:`${Math.PI}`,TRANSMITTANCE_TEXTURE_WIDTH:Bi.toFixed(0),TRANSMITTANCE_TEXTURE_HEIGHT:Ui.toFixed(0),SCATTERING_TEXTURE_R_SIZE:ps.toFixed(0),SCATTERING_TEXTURE_MU_SIZE:gs.toFixed(0),SCATTERING_TEXTURE_MU_S_SIZE:vs.toFixed(0),SCATTERING_TEXTURE_NU_SIZE:ys.toFixed(0),IRRADIANCE_TEXTURE_WIDTH:Li.toFixed(0),IRRADIANCE_TEXTURE_HEIGHT:Fi.toFixed(0),METER_TO_LENGTH_UNIT:Qt.toFixed(7),SUN_SPECTRAL_RADIANCE_TO_LUMINANCE:`vec3(${t.sunRadianceToRelativeLuminance.toArray().map(h=>h.toFixed(12)).join(",")})`,SKY_SPECTRAL_RADIANCE_TO_LUMINANCE:`vec3(${t.skyRadianceToRelativeLuminance.toArray().map(h=>h.toFixed(12)).join(",")})`,...g.defines}}),this.atmosphere=t,this.ellipsoidMatrix=new J,this.atmosphere=t,this.ellipsoid=o,this.correctAltitude=c,this.photometric=l,this.renderTargetCount=p}copyCameraSettings(e){const t=this.uniforms,i=e.getWorldPosition(t.cameraPosition.value),n=t.inverseEllipsoidMatrix.value.copy(this.ellipsoidMatrix).invert(),s=cm.copy(i).applyMatrix4(n).sub(t.ellipsoidCenter.value),a=t.altitudeCorrection.value;this.correctAltitude?Hi(s,this.atmosphere.bottomRadius,this.ellipsoid,a):a.setScalar(0)}onBeforeCompile(e,t){e.fragmentShader=lm(e.fragmentShader,this.renderTargetCount)}onBeforeRender(e,t,i,n,s,a){this.copyCameraSettings(i)}get irradianceTexture(){return this.uniforms.u_irradiance_texture.value}set irradianceTexture(e){this.uniforms.u_irradiance_texture.value=e}get scatteringTexture(){return this.uniforms.u_scattering_texture.value}set scatteringTexture(e){this.uniforms.u_scattering_texture.value=e,this.uniforms.u_single_mie_scattering_texture.value=e}get transmittanceTexture(){return this.uniforms.u_transmittance_texture.value}set transmittanceTexture(e){this.uniforms.u_transmittance_texture.value=e}get useHalfFloat(){return!0}set useHalfFloat(e){}get ellipsoidCenter(){return this.uniforms.ellipsoidCenter.value}get sunDirection(){return this.uniforms.sunDirection.value}get sunAngularRadius(){return this.uniforms.u_sun_angular_radius.value}set sunAngularRadius(e){this.uniforms.u_sun_angular_radius.value=e}get renderTargetCount(){return this._renderTargetCount}set renderTargetCount(e){e!==this.renderTargetCount&&(this._renderTargetCount=e,this.needsUpdate=!0)}}om([Ne("PHOTOMETRIC")],ws.prototype,"photometric");var at;(function(r){r.Sun="Sun",r.Moon="Moon",r.Mercury="Mercury",r.Venus="Venus",r.Earth="Earth",r.Mars="Mars",r.Jupiter="Jupiter",r.Saturn="Saturn",r.Uranus="Uranus",r.Neptune="Neptune",r.Pluto="Pluto",r.SSB="SSB",r.EMB="EMB",r.Star1="Star1",r.Star2="Star2",r.Star3="Star3",r.Star4="Star4",r.Star5="Star5",r.Star6="Star6",r.Star7="Star7",r.Star8="Star8"})(at||(at={}));at.Star1,at.Star2,at.Star3,at.Star4,at.Star5,at.Star6,at.Star7,at.Star8;var Oa;(function(r){r[r.From2000=0]="From2000",r[r.Into2000=1]="Into2000"})(Oa||(Oa={}));var Na;(function(r){r[r.Pericenter=0]="Pericenter",r[r.Apocenter=1]="Apocenter"})(Na||(Na={}));var La;(function(r){r.Penumbral="penumbral",r.Partial="partial",r.Annular="annular",r.Total="total"})(La||(La={}));var Fa;(function(r){r[r.Invalid=0]="Invalid",r[r.Ascending=1]="Ascending",r[r.Descending=-1]="Descending"})(Fa||(Fa={}));function hc(r){return Math.sqrt(Math.max(r,0))}function um(r){return Math.max(r,0)}function dm(r,e,t){const{bottomRadius:i}=r;return t<0&&e**2*(t**2-1)+i**2>=0}function hm(r,e,t){const{topRadius:i}=r,n=e**2*(t**2-1)+i**2;return um(-e*t+hc(n))}function Mi(r,e){return .5/e+r*(1-1/e)}var mm="Invariant failed";function fm(r,e){if(!r)throw new Error(mm)}const pm=new x,Ba=new x,gm=new x;function ci(r,e,t){const i=e*4;return t.set(r[i],r[i+1],r[i+2])}function mc(r,e,t){const{width:i,height:n}=r.image;fm(ih(r.image.data));let s=r.image.data;r.type===_o&&s instanceof Uint16Array&&(s=new ce(s.buffer));const a=Ti(e.x,0,1)*(i-1),o=Ti(e.y,0,1)*(n-1),c=Math.floor(a),l=Math.floor(o),u=a-c,d=o-l,p=u,g=d,h=c%i,v=(h+1)%i,f=l%n,y=(f+1)%n,T=ci(s,f*i+h,pm),R=ci(s,f*i+v,Ba),C=T.lerp(R,p),b=ci(s,y*i+h,Ba),I=ci(s,y*i+v,gm),N=b.lerp(I,p);return t.copy(C.lerp(N,g))}function vm(r,e,t,i){const{topRadius:n,bottomRadius:s}=r,a=Math.sqrt(n**2-s**2),o=hc(e**2-s**2),c=hm(r,e,t),l=n-e,u=o+a,d=(c-l)/(u-l),p=o/a;return i.set(Mi(d,Bi),Mi(p,Ui))}const ym=new x,pn=new x,Sm=new bt;function Ua(r,e,t,i=new ke,{ellipsoid:n=ct.WGS84,correctAltitude:s=!0,photometric:a=!0}={},o=Ni.DEFAULT){const c=ym.copy(e);if(s){const v=n.projectOnSurface(e,pn);v!=null&&c.sub(n.getOsculatingSphereCenter(v,o.bottomRadius,pn))}const l=pn;let u=c.length(),d=c.dot(t);const{topRadius:p}=o,g=-d-Math.sqrt(d**2-u**2+p**2);if(g>0&&(u=p,d+=g),u>p)l.set(1,1,1);else{const v=d/u;if(dm(o,u,v))l.setScalar(0);else{const f=vm(o,u,v,Sm);mc(r,f,l)}}const h=l.multiply(o.solarIrradiance);return a&&h.multiply(o.sunRadianceToRelativeLuminance),i.setFromVector3(h)}var kr=Uint8Array,fc=Uint16Array,wm=Uint32Array,_m=new kr([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),xm=new kr([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),pc=function(r,e){for(var t=new fc(31),i=0;i<31;++i)t[i]=e+=1<<r[i-1];for(var n=new wm(t[30]),i=1;i<30;++i)for(var s=t[i];s<t[i+1];++s)n[s]=s-t[i]<<5|i;return[t,n]},gc=pc(_m,2),Tm=gc[0],Mm=gc[1];Tm[28]=258,Mm[258]=28;pc(xm,0);var bm=new fc(32768);for(var fe=0;fe<32768;++fe){var Tt=(fe&43690)>>>1|(fe&21845)<<1;Tt=(Tt&52428)>>>2|(Tt&13107)<<2,Tt=(Tt&61680)>>>4|(Tt&3855)<<4,bm[fe]=((Tt&65280)>>>8|(Tt&255)<<8)>>>1}var zi=new kr(288);for(var fe=0;fe<144;++fe)zi[fe]=8;for(var fe=144;fe<256;++fe)zi[fe]=9;for(var fe=256;fe<280;++fe)zi[fe]=7;for(var fe=280;fe<288;++fe)zi[fe]=8;var Rm=new kr(32);for(var fe=0;fe<32;++fe)Rm[fe]=5;var Em=new kr(0),Am=typeof TextDecoder<"u"&&new TextDecoder,Cm=0;try{Am.decode(Em,{stream:!0}),Cm=1}catch{}function Im({topRadius:r,bottomRadius:e},t,i,n){const s=(t-e)/(r-e),a=i*.5+.5;return n.set(Mi(a,Li),Mi(s,Fi))}const Dm=1/Math.sqrt(Math.PI),gn=Math.sqrt(3)/(2*Math.sqrt(Math.PI)),Pm=new x,vn=new x,Om=new bt,Nm=new J,Lm={ellipsoid:ct.WGS84,correctAltitude:!0,photometric:!0};class Fm extends xo{constructor(e,t=Ni.DEFAULT){super(),this.atmosphere=t,this.ellipsoidCenter=new x,this.ellipsoidMatrix=new J;const{irradianceTexture:i=null,ellipsoid:n,correctAltitude:s,photometric:a,sunDirection:o}={...Lm,...e};this.irradianceTexture=i,this.ellipsoid=n,this.correctAltitude=s,this.photometric=a,this.sunDirection=(o==null?void 0:o.clone())??new x}update(){if(this.irradianceTexture==null)return;const e=Nm.copy(this.ellipsoidMatrix).invert(),t=this.getWorldPosition(Pm).applyMatrix4(e).sub(this.ellipsoidCenter);if(this.correctAltitude){const l=this.ellipsoid.projectOnSurface(t,vn);l!=null&&t.sub(Hi(l,this.atmosphere.bottomRadius,this.ellipsoid,vn))}const i=t.length(),n=t.dot(this.sunDirection)/i,s=Im(this.atmosphere,i,n,Om),a=mc(this.irradianceTexture,s,vn);this.photometric&&a.multiply(this.atmosphere.skyRadianceToRelativeLuminance);const o=this.ellipsoid.getSurfaceNormal(t).applyMatrix4(this.ellipsoidMatrix),c=this.sh.coefficients;c[0].copy(a).multiplyScalar(Dm),c[1].copy(a).multiplyScalar(gn*o.y),c[2].copy(a).multiplyScalar(gn*o.z),c[3].copy(a).multiplyScalar(gn*o.x)}}const Bm=`precision highp float;
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
`,Um=`precision highp float;
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
`;var Hm=Object.defineProperty,vc=(r,e,t,i)=>{for(var n=void 0,s=r.length-1,a;s>=0;s--)(a=r[s])&&(n=a(e,t,n)||n);return n&&Hm(e,t,n),n};const zm={...Ss,sun:!0,moon:!0,moonAngularRadius:.0045,lunarRadianceScale:1};class _s extends ws{constructor(e){const{sun:t,moon:i,moonDirection:n,moonAngularRadius:s,lunarRadianceScale:a,groundAlbedo:o,...c}={...zm,...e};super({name:"SkyMaterial",glslVersion:Ir,vertexShader:Lt(Um,{parameters:rr}),fragmentShader:Lt(Bm,{core:{raySphereIntersection:uc},parameters:rr,functions:fs,sky:dc}),...c,uniforms:{inverseProjectionMatrix:new D(new J),inverseViewMatrix:new D(new J),moonDirection:new D((n==null?void 0:n.clone())??new x),moonAngularRadius:new D(s),lunarRadianceScale:new D(a),groundAlbedo:new D((o==null?void 0:o.clone())??new ke(0)),shadowLengthBuffer:new D(null),...c.uniforms},defines:{PERSPECTIVE_CAMERA:"1"},depthTest:!0}),this.shadowLength=null,this.sun=t,this.moon=i}onBeforeRender(e,t,i,n,s,a){super.onBeforeRender(e,t,i,n,s,a);const{uniforms:o,defines:c}=this;o.inverseProjectionMatrix.value.copy(i.projectionMatrixInverse),o.inverseViewMatrix.value.copy(i.matrixWorld);const l=c.PERSPECTIVE_CAMERA!=null,u=i.isPerspectiveCamera===!0;u!==l&&(u?c.PERSPECTIVE_CAMERA="1":delete c.PERSPECTIVE_CAMERA,this.needsUpdate=!0);const d=this.groundAlbedo,p=c.GROUND_ALBEDO!=null,g=d.r!==0||d.g!==0||d.b!==0;g!==p&&(g?this.defines.GROUND_ALBEDO="1":delete this.defines.GROUND_ALBEDO,this.needsUpdate=!0);const h=this.shadowLength,v=c.HAS_SHADOW_LENGTH!=null,f=h!=null;f!==v&&(f?c.HAS_SHADOW_LENGTH="1":(delete c.HAS_SHADOW_LENGTH,o.shadowLengthBuffer.value=null),this.needsUpdate=!0),f&&(o.shadowLengthBuffer.value=h.map)}get moonDirection(){return this.uniforms.moonDirection.value}get moonAngularRadius(){return this.uniforms.moonAngularRadius.value}set moonAngularRadius(e){this.uniforms.moonAngularRadius.value=e}get lunarRadianceScale(){return this.uniforms.lunarRadianceScale.value}set lunarRadianceScale(e){this.uniforms.lunarRadianceScale.value=e}get groundAlbedo(){return this.uniforms.groundAlbedo.value}}vc([Ne("SUN")],_s.prototype,"sun");vc([Ne("MOON")],_s.prototype,"moon");const km=`precision highp float;
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
`,Vm=`precision highp float;
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
`;var Wm=Object.defineProperty,Gm=(r,e,t,i)=>{for(var n=void 0,s=r.length-1,a;s>=0;s--)(a=r[s])&&(n=a(e,t,n)||n);return n&&Wm(e,t,n),n};const jm={...Ss,pointSize:1,radianceScale:1,background:!0};class Ym extends ws{constructor(e){const{pointSize:t,radianceScale:i,background:n,...s}={...jm,...e};super({name:"StarsMaterial",glslVersion:Ir,vertexShader:Lt(Vm,{parameters:rr}),fragmentShader:Lt(km,{parameters:rr,functions:fs}),...s,uniforms:{projectionMatrix:new D(new J),modelViewMatrix:new D(new J),viewMatrix:new D(new J),matrixWorld:new D(new J),cameraFar:new D(0),pointSize:new D(0),magnitudeRange:new D(new bt(-2,8)),radianceScale:new D(i),...s.uniforms},defines:{PERSPECTIVE_CAMERA:"1"}}),this.pointSize=t,this.background=n}onBeforeRender(e,t,i,n,s,a){super.onBeforeRender(e,t,i,n,s,a);const o=this.uniforms;o.projectionMatrix.value.copy(i.projectionMatrix),o.modelViewMatrix.value.copy(i.modelViewMatrix),o.viewMatrix.value.copy(i.matrixWorldInverse),o.matrixWorld.value.copy(s.matrixWorld),o.cameraFar.value=i.far,o.pointSize.value=this.pointSize*e.getPixelRatio();const c=i.isPerspectiveCamera===!0;this.defines.PERSPECTIVE_CAMERA!=null!==c&&(c?this.defines.PERSPECTIVE_CAMERA="1":delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}get magnitudeRange(){return this.uniforms.magnitudeRange.value}get radianceScale(){return this.uniforms.radianceScale.value}set radianceScale(e){this.uniforms.radianceScale.value=e}}Gm([Ne("BACKGROUND")],Ym.prototype,"background");const Ha=new ke("#fff2d8"),za=1e-8,yn=3e4,ka=-1e3,Va=1e7,qm=5e6,Km=8e6,Or=r=>Number.isFinite(r.x)&&Number.isFinite(r.y)&&Number.isFinite(r.z),Wa=r=>!Number.isFinite(r.longitude)||Math.abs(r.longitude)>180?"longitude must be a finite value in degrees within [-180, 180]":!Number.isFinite(r.latitude)||Math.abs(r.latitude)>90?"latitude must be a finite value in degrees within [-90, 90]":!Number.isFinite(r.altitudeMeters)||r.altitudeMeters<ka||r.altitudeMeters>Va?`altitudeMeters must be within [${ka}, ${Va}]`:null,Xm=(r,e,t)=>{if(!Number.isFinite(r.getTime()))return"instant must be a valid Date";const i=Wa(e);if(i)return`observer ${i}`;if(!t)return null;const n=Wa(t.observer);return n?`sky reference observer ${n}`:Or(t.scenePosition)?null:"sky reference scenePosition must contain finite metre coordinates"},yc=r=>{if(!Or(r.directionToSunECEF))return"sun direction contains a non-finite component";if(Math.abs(r.directionToSunECEF.length()-1)>1e-6)return"sun direction is not normalized";if(!r.ecefToSceneMatrix.elements.every(Number.isFinite))return"ECEF-to-scene matrix contains a non-finite component";const e=r.ecefToSceneMatrix.elements,t=[new x(e[0],e[4],e[8]),new x(e[1],e[5],e[9]),new x(e[2],e[6],e[10])];if(t.some(s=>Math.abs(s.length()-1)>1e-6)||Math.abs(t[0].dot(t[1]))>1e-6||Math.abs(t[0].dot(t[2]))>1e-6||Math.abs(t[1].dot(t[2]))>1e-6||Math.abs(e[3])>1e-12||Math.abs(e[7])>1e-12||Math.abs(e[11])>1e-12||Math.abs(e[12])>1e-12||Math.abs(e[13])>1e-12||Math.abs(e[14])>1e-12||Math.abs(e[15]-1)>1e-12)return"ECEF-to-scene matrix is not an affine orthonormal rotation";const i=r.ecefToSceneMatrix.determinant();if(!Number.isFinite(i)||Math.abs(i-1)>1e-6)return"ECEF-to-scene matrix is not a proper orthonormal rotation";if(!Or(r.ellipsoidCenterECEF))return"ellipsoid center contains a non-finite component";const n=r.ellipsoidCenterECEF.length();return n<qm||n>Km?"ellipsoid center is outside the plausible WGS84 distance range":null},$m=r=>{var t;const e=yc(r.skyFrame);return e||(Or(r.directionToSun)?Math.abs(r.directionToSun.length()-1)>1e-6?"scene sun direction is not normalized":![r.color.r,r.color.g,r.color.b].every(Number.isFinite)||![r.radiance.r,r.radiance.g,r.radiance.b].every(Number.isFinite)||!Number.isFinite(r.relativeIntensity)||r.relativeIntensity<0||r.relativeIntensity>1||!Number.isFinite(r.azimuthDegrees)||!Number.isFinite(r.elevationDegrees)?"sunlight color, intensity, or angles contain invalid values":(t=r.skyIrradianceCoefficients)!=null&&t.some(i=>!Or(i))?"sky irradiance contains a non-finite coefficient":null:"scene sun direction contains a non-finite component")},Sn={useTransmittanceLut:!0,useIrradianceLut:!0},Qm=({east:r,north:e,up:t})=>new J().set(r.x,r.y,r.z,0,t.x,t.y,t.z,0,-e.x,-e.y,-e.z,0,0,0,0,1);function xs({longitude:r,latitude:e,altitudeMeters:t}){const i=new Fo(Yn(r),Yn(e),t).toECEF(),n=new x,s=new x,a=new x;return ct.WGS84.getEastNorthUpVectors(i,n,s,a),{observerECEF:i,east:n,north:s,up:a}}const Sc=(r,{east:e,north:t,up:i},n)=>n.set(r.dot(e),r.dot(i),-r.dot(t)).normalize(),wc=(r,e,t)=>{const i=t?xs(t.observer):e,n=Qm(i);t!=null&&t.sceneFromLocal&&n.premultiply(t.sceneFromLocal);const s=n.clone().invert(),a=((t==null?void 0:t.scenePosition)??new x).clone().applyMatrix4(s).sub(i.observerECEF);return{directionToSunECEF:r.clone(),ecefToSceneMatrix:n,ellipsoidCenterECEF:a}},Zm=(r,e,{observerECEF:t,east:i,north:n,up:s})=>r!=null&&r.irradianceTexture?(r.ellipsoidMatrix.set(i.x,i.y,i.z,0,s.x,s.y,s.z,0,-n.x,-n.y,-n.z,0,0,0,0,1),r.ellipsoidCenter.copy(t).negate(),r.sunDirection.copy(e),r.position.set(0,0,0),r.updateMatrixWorld(!0),r.update(),r.sh.coefficients.map(a=>a.clone())):null,_c=r=>{const e=Xs(Math.asin(Ye(r.y,-1,1)));return{azimuthDegrees:(Xs(Math.atan2(r.x,-r.z))+360)%360,elevationDegrees:e}},Jm=(r,e)=>{const t=xs(e.observer),i=Sc(r.skyFrame.directionToSunECEF,t,new x);return e.sceneFromLocal&&i.transformDirection(e.sceneFromLocal),{...r,directionToSun:i,..._c(i),skyFrame:wc(r.skyFrame.directionToSunECEF,t,e)}},ef=(r,e,t,i=null,n)=>{const s=xs(e),{observerECEF:a,up:o}=s,c=new x(...al(r)),l=Sc(c,s,new x);n!=null&&n.sceneFromLocal&&l.transformDirection(n.sceneFromLocal);const u=wc(c,s,n),d=Zm(i,c,s),{azimuthDegrees:p,elevationDegrees:g}=_c(l);if(!t){const R=Math.sqrt(Ye(l.y,0,1));return{directionToSun:l,color:Ha.clone(),relativeIntensity:R,radiance:Ha.clone().multiplyScalar(R),atmosphericTransmittanceReady:!1,atmosphericIrradianceReady:d!==null,skyIrradianceCoefficients:d,azimuthDegrees:p,elevationDegrees:g,skyFrame:u}}const h=Ua(t,a,c,new ke,{ellipsoid:ct.WGS84,correctAltitude:!0,photometric:!0}),v=Ua(t,a,o,new ke,{ellipsoid:ct.WGS84,correctAltitude:!0,photometric:!0}),f=Math.max(h.r,h.g,h.b,0),y=Math.max(v.r,v.g,v.b,za),T=f>za?h.clone().multiplyScalar(1/f):new ke(0,0,0);return{directionToSun:l,color:T,relativeIntensity:Ye(f/y,0,1),radiance:h,atmosphericTransmittanceReady:!0,atmosphericIrradianceReady:d!==null,skyIrradianceCoefficients:d,azimuthDegrees:p,elevationDegrees:g,skyFrame:u}};class tf{transmittanceTexture=null;irradianceTexture=null;scatteringTexture=null;skyLightProbe=new Fm({ellipsoid:ct.WGS84,correctAltitude:!0,photometric:!0});transmittanceLoading=!1;irradianceLoading=!1;scatteringLoading=!1;transmittanceRetryAt=0;irradianceRetryAt=0;scatteringRetryAt=0;disposed=!1;get ready(){return this.transmittanceTexture!==null&&this.irradianceTexture!==null}get skyReady(){return this.skyTextures!==null}get skyTextures(){return!this.transmittanceTexture||!this.irradianceTexture||!this.scatteringTexture?null:{transmittanceTexture:this.transmittanceTexture,irradianceTexture:this.irradianceTexture,scatteringTexture:this.scatteringTexture}}get isSkyLoading(){return this.transmittanceLoading||this.irradianceLoading||this.scatteringLoading}isLoadingFor(e=Sn){return e.useTransmittanceLut&&this.transmittanceLoading||e.useIrradianceLut&&this.irradianceLoading}ensure(e,t=Sn){if(this.disposed)return;const i=()=>{this.isLoadingFor(t)||e()};t.useTransmittanceLut&&this.ensureTransmittance(i),t.useIrradianceLut&&this.ensureIrradiance(i)}ensureSky(e){if(this.disposed||this.skyReady)return;let t=!1;const i=()=>{!t&&!this.isSkyLoading&&(t=!0,e())};this.ensureTransmittance(i),this.ensureIrradiance(i),this.ensureScattering(i)}ensureTransmittance(e){this.transmittanceTexture||this.transmittanceLoading||Date.now()<this.transmittanceRetryAt||(this.transmittanceLoading=!0,Pa(mn,{width:Bi,height:Ui}).load(`${fn}/transmittance.bin`,t=>{if(this.transmittanceLoading=!1,this.disposed){t.dispose();return}this.transmittanceRetryAt=0,this.transmittanceTexture=t,e()},void 0,t=>{this.transmittanceLoading=!1,this.disposed||(this.transmittanceRetryAt=Date.now()+yn,console.error("[SHADOW] Takram transmittance LUT failed",t),e())}))}ensureIrradiance(e){this.irradianceTexture||this.irradianceLoading||Date.now()<this.irradianceRetryAt||(this.irradianceLoading=!0,Pa(mn,{width:Li,height:Fi}).load(`${fn}/irradiance.bin`,t=>{if(this.irradianceLoading=!1,this.disposed){t.dispose();return}this.irradianceRetryAt=0,this.irradianceTexture=t,this.skyLightProbe.irradianceTexture=t,e()},void 0,t=>{this.irradianceLoading=!1,this.disposed||(this.irradianceRetryAt=Date.now()+yn,console.error("[SHADOW] Takram irradiance LUT failed",t),e())}))}ensureScattering(e){this.scatteringTexture||this.scatteringLoading||Date.now()<this.scatteringRetryAt||(this.scatteringLoading=!0,mh(mn,{width:Kh,height:Xh,depth:$h}).load(`${fn}/scattering.bin`,t=>{if(this.scatteringLoading=!1,this.disposed){t.dispose();return}this.scatteringRetryAt=0,this.scatteringTexture=t,e()},void 0,t=>{this.scatteringLoading=!1,this.disposed||(this.scatteringRetryAt=Date.now()+yn,console.error("[SHADOW] Takram scattering LUT failed",t),e())}))}evaluate(e,t,i=Sn,n){return ef(e,t,i.useTransmittanceLut?this.transmittanceTexture:null,i.useIrradianceLut?this.skyLightProbe:null,n)}dispose(){var e,t,i;this.disposed||(this.disposed=!0,this.transmittanceLoading=!1,this.irradianceLoading=!1,this.scatteringLoading=!1,this.transmittanceRetryAt=0,this.irradianceRetryAt=0,this.scatteringRetryAt=0,(e=this.transmittanceTexture)==null||e.dispose(),(t=this.irradianceTexture)==null||t.dispose(),(i=this.scatteringTexture)==null||i.dispose(),this.transmittanceTexture=null,this.irradianceTexture=null,this.scatteringTexture=null,this.skyLightProbe.irradianceTexture=null,this.skyLightProbe.sh.zero())}}const rf="shadow-simulation-atmospheric-sky",Vr=2,mi="carmaOutputToSrgb",wn="carmaDisplayExposure",nf=new x;class sf extends _s{observerScenePosition=new x;hasObserverScenePosition=!1;viewCamera=null;copyCameraSettings(e){if(super.copyCameraSettings(e),!this.hasObserverScenePosition)return;const t=this.uniforms;if(t.cameraPosition.value.copy(this.observerScenePosition),!this.correctAltitude)return;const i=nf.copy(this.observerScenePosition).applyMatrix4(t.inverseEllipsoidMatrix.value).sub(t.ellipsoidCenter.value);Hi(i,this.atmosphere.bottomRadius,this.ellipsoid,t.altitudeCorrection.value)}onBeforeRender(e,t,i,n,s,a){super.onBeforeRender(e,t,this.viewCamera??i,n,s,a)}}const af=r=>{r.uniforms.toneMappingExposure=new D(1),r.uniforms[mi]=new D(!1),r.uniforms[wn]=new D(Vr),r.fragmentShader=r.fragmentShader.replace("precision highp sampler3D;",`precision highp sampler3D;

uniform bool ${mi};
uniform float ${wn};
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
  }`).replace("outputColor.a = 1.0;",`outputColor.rgb *= ${wn};
  outputColor.a = 1.0;
  if (${mi}) {
    // SkyMaterial is raw GLSL: match terrain's AgX on the display target.
    // Offscreen samples stay linear HDR until the shared final composite.
    outputColor.rgb = AgXToneMapping(outputColor.rgb);
    outputColor = carmaLinearToSrgb(outputColor);
  }`)},of=r=>{const e=new sf({groundAlbedo:r,moon:!1,photometric:!0,side:To,sun:!0});af(e),e.depthTest=!1,e.depthWrite=!1;const t=new wo;t.setAttribute("position",new ol([-1,-1,0,3,-1,0,-1,3,0],3));const i=new Nr(t,e);return i.name=rf,i.visible=!1,i.frustumCulled=!1,i.renderOrder=-100,i.castShadow=!1,i.receiveShadow=!1,i.onBeforeRender=n=>{e.uniforms.toneMappingExposure.value=n.toneMappingExposure,e.uniforms[mi].value=n.getRenderTarget()===null},{mesh:i,update(n,s){return s?yc(n)?!1:(i.visible=!0,e.irradianceTexture=s.irradianceTexture,e.scatteringTexture=s.scatteringTexture,e.transmittanceTexture=s.transmittanceTexture,e.sunDirection.copy(n.directionToSunECEF),e.ellipsoidCenter.copy(n.ellipsoidCenterECEF),e.ellipsoidMatrix.copy(n.ecefToSceneMatrix),!0):(i.visible=!1,!1)},updateViewCamera(n){e.viewCamera=n},updateObserverScenePosition(n){e.observerScenePosition.copy(n),e.hasObserverScenePosition=!0},updateGroundAlbedo(n){e.groundAlbedo.copy(n)},dispose(){t.dispose(),e.dispose()}}},cf=2048,xc=8192,Ga=2,ja=50,lf=1e4,uf=.04,_n=25,df=4,hf=1.2,mf=.2,Ya=.05,ff=8,pf=300,gf=new x(0,1,0),qa=(r,e,t=new J)=>t.lookAt(r,e,gf).setPosition(r).invert(),vf=(r,e)=>{if(r.length===0)return null;const t=r.map(h=>h.clone().applyMatrix4(e)),i=Math.min(...t.map(({x:h})=>h)),n=Math.max(...t.map(({x:h})=>h)),s=Math.min(...t.map(({y:h})=>h)),a=Math.max(...t.map(({y:h})=>h)),o=t.map(({z:h})=>-h),c=Math.max(0,Math.min(...o)),l=Math.max(c+.01,Math.max(...o)),u=(i+n)/2,d=(s+a)/2,p=Math.max((n-i)/2,Ga/2),g=Math.max((a-s)/2,Ga/2);return{left:u-p,right:u+p,bottom:d-g,top:d+g,near:c,far:l}},yf=(r,e=xc)=>r>=16?e:Math.min(e,cf*Math.sqrt(r));class Tc{constructor(e){this.host=e,this.lights=Array.from({length:1},()=>{const t=new cl(16777215,0);return t.name="shadow-simulation-sun",t.visible=!1,t.castShadow=!1,t.shadow.camera.name="shadow-simulation-shadow-camera",t.shadow.autoUpdate=!1,t.shadow.radius=0,t.shadow.bias=0,t.shadow.normalBias=Ya,e.add(t,t.target),t})}lights;softSun=!1;lastSoftFit=null;maxShadowMapSize=xc;mapAllocation=null;disposed=!1;setMaxShadowMapSize(e){if(!Number.isFinite(e)||e<=0)return;const t=Math.max(256,Math.floor(e));this.disposed||this.maxShadowMapSize===t||(this.maxShadowMapSize=t)}setSoftSun(e){this.disposed||this.softSun===e||(e||this.restoreSunDiscCenter(),this.softSun=e,e||(this.lastSoftFit=null))}applySunDiscSample(e,t,i=!0){if(this.disposed)return;const n=this.lastSoftFit;if(!n)return;const s=Math.max(1,Math.floor(t)),a=(Math.floor(e)%s+s)%s,{angularRadius:o,tangentA:c,tangentB:l}=Xl(a,s),u=n.tangentA.clone().multiplyScalar(c).addScaledVector(n.tangentB,l).normalize(),d=n.directionToSun.clone().multiplyScalar(Math.cos(o)).addScaledVector(u,Math.sin(o)).normalize(),p=this.lights[0],[g,h]=i&&s>1?$l(a):[0,0],v=p.shadow.camera,f=n.rasterBounds,y=g*(f.right-f.left)/p.shadow.mapSize.x,T=h*(f.top-f.bottom)/p.shadow.mapSize.y;v.left=f.left+y,v.right=f.right+y,v.bottom=f.bottom+T,v.top=f.top+T,v.updateProjectionMatrix(),p.position.copy(d).multiplyScalar(n.lightDistance).add(n.anchorPosition),p.updateMatrixWorld(!0),p.target.updateMatrixWorld(!0),p.shadow.updateMatrices(p),p.shadow.needsUpdate=!0}restoreSunDiscCenter(){if(this.disposed||!this.lastSoftFit)return;const e=this.lastSoftFit,t=this.lights[0],i=t.shadow.camera;i.left=e.rasterBounds.left,i.right=e.rasterBounds.right,i.bottom=e.rasterBounds.bottom,i.top=e.rasterBounds.top,i.updateProjectionMatrix(),t.position.copy(e.directionToSun).multiplyScalar(e.lightDistance).add(e.anchorPosition),t.updateMatrixWorld(!0),t.target.updateMatrixWorld(!0),t.shadow.updateMatrices(t),t.shadow.needsUpdate=!0}invalidate(){this.lights[0].shadow.needsUpdate=!0}update({receiverWorldPoints:e,receiverAnchorWorldPosition:t,minimumElevationMeters:i,maximumElevationMeters:n,directionToSun:s,color:a,intensity:o,shadowIntensity:c,quality:l,groundTexelFit:u=!0,stabilizeMapSize:d=!1,mapTexelBudget:p,casterMapTexelBudget:g,groundTexelTargetMeters:h,maxReceiverBiasMeters:v}){var z,Ve;if(this.disposed)return null;if(e.length===0){for(const Le of this.lights)Le.visible=!1,Le.castShadow=!1,Le.intensity=0,Le.shadow.needsUpdate=!1;return null}const f=s.clone().normalize(),y=Math.max(0,n-i),T=Math.max(uf,f.y),R=Ye((y+pf)/T+ja,ja,lf),C=R+y+_n,b=yf(l,this.maxShadowMapSize),I=aa(p,Math.floor(b)**2,this.maxShadowMapSize),N=Math.floor(Math.sqrt(I)),E=new ke(a),L=t.clone(),F=e.reduce((Le,w)=>Math.max(Le,w.distanceTo(t)),0),W=F+C,V=this.lights[0];V.position.copy(f).multiplyScalar(W).add(L),V.target.position.copy(L),V.updateMatrixWorld(!0),V.target.updateMatrixWorld(!0),V.shadow.updateMatrices(V);const O=vf(e,qa(V.position,V.target.position));if(!O)return null;const se=ql(F,f.y,this.softSun?Pr:0),P=this.softSun?Math.max(Math.tan(Pr)*W,se.planarMeters):0,X={maxMapSize:this.maxShadowMapSize,elevationSine:f.y,sunDiscGuardMeters:P,groundTexelFit:u,groundTexelTargetMeters:h},H=oa(O,{...X,mapSize:N,mapTexelBudget:I,mapDimensions:d&&((z=this.mapAllocation)==null?void 0:z.texelBudget)===I&&this.mapAllocation.maxMapSize===this.maxShadowMapSize&&this.mapAllocation.groundTexelFit===u?this.mapAllocation:void 0}),q=aa(g,I,this.maxShadowMapSize),le=g===void 0?H:oa(O,{...X,mapSize:Math.floor(Math.sqrt(q)),mapTexelBudget:q});this.mapAllocation={width:H.mapWidth,height:H.mapHeight,texelBudget:I,maxMapSize:this.maxShadowMapSize,groundTexelFit:u};const oe=Math.max(H.metersPerTexelX,H.metersPerTexelY),_e=Math.max(H.guardMetersX,H.guardMetersY),A={left:H.left,right:H.right,bottom:H.bottom,top:H.top,near:Math.max(.01,O.near-se.depthMeters-R-y-_n),far:Math.max(1,O.far+se.depthMeters+y+_n)};A.far=Math.max(A.near+1,A.far);const re=Ye(oe*hf/Math.max(mf,f.y),Ya,ff),Ee=-Ye(oe*df/Math.max(A.far-A.near,1),Number.EPSILON,.01),Ce=new x;Math.abs(f.y)>.99?Ce.set(1,0,0):Ce.crossVectors(new x(0,1,0),f).normalize();const Rt=new x().crossVectors(f,Ce),ue=this.lights[0];ue.visible=!0,ue.castShadow=!0,ue.intensity=o,ue.color.copy(E),ue.shadow.intensity=Ye(c,0,1),ue.shadow.needsUpdate=!0,(ue.shadow.mapSize.x!==H.mapWidth||ue.shadow.mapSize.y!==H.mapHeight)&&((Ve=ue.shadow.map)==null||Ve.dispose(),ue.shadow.map=null,ue.shadow.mapSize.set(H.mapWidth,H.mapHeight)),ue.position.copy(f).multiplyScalar(W).add(L),ue.target.position.copy(L);const be=v!==void 0&&Number.isFinite(v)?Math.max(0,v):1/0;ue.shadow.bias=Math.max(Ee,-be/(A.far-A.near)),ue.shadow.normalBias=Math.min(re,be);const Re=ue.shadow.camera;Re.left=A.left,Re.right=A.right,Re.bottom=A.bottom,Re.top=A.top,Re.near=A.near,Re.far=A.far,Re.updateProjectionMatrix(),ue.updateMatrixWorld(!0),ue.target.updateMatrixWorld(!0),ue.shadow.updateMatrices(ue),this.lastSoftFit=this.softSun?{directionToSun:f.clone(),tangentA:Ce,tangentB:Rt,anchorPosition:L.clone(),lightDistance:W,rasterBounds:A}:null;const Ie=V.shadow.camera;return{sampleCount:1,totalShadowTexels:H.mapWidth*H.mapHeight,mapTexelBudget:h===void 0?I:void 0,casterReachMeters:R,casterMetersPerTexel:[le.metersPerTexelX,le.metersPerTexelY],camera:{receiverPointCount:e.length,receiverLeftMeters:O.left,receiverRightMeters:O.right,receiverBottomMeters:O.bottom,receiverTopMeters:O.top,leftMeters:Ie.left,rightMeters:Ie.right,bottomMeters:Ie.bottom,topMeters:Ie.top,nearMeters:Ie.near,farMeters:Ie.far,shadowMapWidth:H.mapWidth,shadowMapHeight:H.mapHeight,viewMatrixElements:[...qa(V.position,V.target.position).elements],projectionMatrixElements:[...Ie.projectionMatrix.elements],guardMeters:_e,metersPerTexel:oe,metersPerTexelX:H.metersPerTexelX,metersPerTexelY:H.metersPerTexelY,groundTexelWidthMeters:H.groundTexelWidthMeters,groundTexelHeightMeters:H.groundTexelHeightMeters,groundTexelFitLimited:H.groundTexelFitLimited,groundTexelFit:u,groundTexelTargetMeters:h}}}dispose(){var e;if(!this.disposed){this.disposed=!0;for(const t of this.lights)(e=t.shadow.map)==null||e.dispose(),this.host.remove(t.target,t)}}}const Mt=r=>{var e;(e=r.depthTexture)==null||e.dispose(),r.dispose()},It=(r,e)=>r*e*8;class Sf{entries=new Map;retainedBytes=0;capacityBytes=0;activeVariantIds=null;hits=0;misses=0;get bytes(){return this.retainedBytes}get count(){return this.entries.size}get availableBytes(){return Math.max(0,this.capacityBytes-this.retainedBytes)}has(e){return this.entries.has(e)}setActiveVariants(e){this.activeVariantIds=e}setBudget(e,t){this.capacityBytes=Math.max(0,e-t),this.evictInactive(0);for(const i of this.entries.keys()){if(this.retainedBytes<=this.capacityBytes)break;this.remove(i)}}get(e){const t=this.entries.get(e);return t?this.hits+=1:this.misses+=1,t==null?void 0:t.target}admit(e,t,i,n=t,s={}){var o;if(this.entries.has(e))return!1;const a=It(i.width,i.height);return a>this.capacityBytes||(s.evictInactive!==!1&&((o=this.activeVariantIds)!=null&&o.has(n))&&this.evictInactive(a),this.retainedBytes+a>this.capacityBytes)?!1:(this.entries.set(e,{pageId:t,variantId:n,target:i,bytes:a}),this.retainedBytes+=a,!0)}invalidate(e){for(const[t,i]of this.entries)i.pageId===e&&this.remove(t)}clear(){for(const e of this.entries.keys())this.remove(e)}evictInactive(e){if(this.activeVariantIds)for(const[t,i]of this.entries){if(this.retainedBytes+e<=this.capacityBytes)break;this.activeVariantIds.has(i.variantId)||this.remove(t)}}remove(e){const t=this.entries.get(e);t&&(this.entries.delete(e),this.retainedBytes-=t.bytes,Mt(t.target))}}const wf=16,xn=4;class _f{constructor(e,t,i,n=4096,s=e){if(this.scene=e,this.renderer=t,this.memoryBudgetBytes=i,this.host=s,!Number.isFinite(i)||!(i>=It(64,64)))throw new RangeError("Shadow page budget must fit at least one 64-square page");if(!Number.isFinite(n)||n<64)throw new RangeError("Maximum shadow page size must be finite and at least 64");if(t.shadowMap.type!==en)throw new Error("Tiled shadow reference requires the shared PCF shadow path");this.maxMapSize=Math.max(64,2**Math.floor(Math.log2(Math.min(n,t.capabilities.maxTextureSize,Math.sqrt(i/8)))))}pages=new Map;activePageIds=new Set;activeSamples=1;prewarmPageIds=new Set;prewarmSamples=1;prewarmRevision=0;prewarmSink=null;prewarmCamera=new ll([]);cache=new Sf;scratchBytes=0;depthRenders=0;colorPasses=0;disposed=!1;streamedTarget=null;maxMapSize;setView(e,t,i,n,s,a){if(this.disposed)return;if(this.clearPrewarmView(),![s.directionToSun.x,s.directionToSun.y,s.directionToSun.z].every(Number.isFinite)||s.directionToSun.lengthSq()===0||s.directionToSun.y<=0)throw new RangeError("Tiled shadow reference requires a finite sun direction above the horizon");const o=hu(e,t,i,n);this.activePageIds=new Set(o.map(({id:l})=>l));for(const l of o)this.configurePage(l,s,a);const c=Math.max(32,this.activePageIds.size*2);for(const[l,u]of this.pages){if(this.pages.size<=c)break;this.activePageIds.has(l)||(this.cache.invalidate(l),u.controller.dispose(),this.pages.delete(l))}this.updateActiveVariants(),this.scratchBytes=Math.max(0,...Array.from(this.activePageIds,l=>{const u=this.pages.get(l);return It(u.width,u.height)})),this.streamedTarget&&It(this.streamedTarget.width,this.streamedTarget.height)>this.scratchBytes&&(Mt(this.streamedTarget),this.streamedTarget=null),this.cache.setBudget(this.memoryBudgetBytes,this.reservedBytes)}updatePresentation(e){if(this.disposed)return;e.updateMatrixWorld(!0);const t=new J().multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i=new Lr().setFromProjectionMatrix(t),n=new Set;for(const[s,a]of this.pages)i.intersectsBox(a.receiverBounds)&&(a.screenBounds.copy(Do(a.receiverBounds,t)),n.add(s));this.activePageIds=n,this.updateActiveVariants()}get reservedBytes(){return this.scratchBytes+(this.prewarmSink?xn:0)}setPrewarmView(e,t,i,n,s,a){if(this.clearPrewarmView(),this.disposed)return;if(!Number.isSafeInteger(a)||a<1||a>4096||!(n>0&&Number.isFinite(n))||![i.x,i.y].every(l=>l>0&&Number.isFinite(l))||!s.directionToSun.toArray().every(Number.isFinite)||s.directionToSun.y<=0)throw new RangeError("Invalid shadow prewarm view");const o=new J().multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),c=new Set;for(const{id:l,bounds:u}of e){if(c.has(l)||u.isEmpty()||![...u.min.toArray(),...u.max.toArray()].every(Number.isFinite))throw new RangeError("Prewarm cells require unique IDs and finite bounds");c.add(l)}this.prewarmSamples=a;for(const l of e){if(this.prewarmPageIds.size>=wf)break;this.activePageIds.has(l.id)||!this.pages.has(l.id)&&this.pages.size>=Math.max(32,this.activePageIds.size*2)||(this.configurePage({...l,screenBounds:new te,groundTexelTargetMeters:Math.max(1e-9,2*n/Po(l.bounds,o,i))},s),this.prewarmPageIds.add(l.id))}}clearPrewarmView(){this.prewarmPageIds.clear(),this.prewarmRevision+=1}get prewarmPages(){const e=[...this.prewarmPageIds].map(i=>{const n=this.pages.get(i),s=this.countPrewarmSamples(i,n);return{id:i,receiverBounds:n.receiverBounds.clone(),casterBounds:n.casterBounds.clone(),width:n.width,height:n.height,samples:this.prewarmSamples,cachedSamples:s,sampleBudget:s,limited:n.limited,canPrewarm:!1}});let t=this.cache.availableBytes-(this.prewarmSink?0:xn);for(;t>0;){const i=e.filter(n=>n.sampleBudget<n.samples&&It(n.width,n.height)<=t).sort((n,s)=>n.sampleBudget-s.sampleBudget);if(i.length===0)break;for(const n of i){const s=It(n.width,n.height);s>t||(n.sampleBudget+=1,t-=s)}}return e.map(i=>({...i,canPrewarm:i.sampleBudget>i.cachedSamples}))}canPrewarm(e){return!this.disposed&&this.prewarmPages.some(t=>t.id===e&&t.canPrewarm)}countPrewarmSamples(e,t){const i=JSON.stringify([e,t.projectionKey,this.prewarmSamples]);let n=0;for(let s=0;s<this.prewarmSamples;s+=1)this.cache.has(JSON.stringify([i,s]))&&(n+=1);return n}prewarmNext(e,t,i={}){var v,f;const n=this.pages.get(t),s=!this.disposed&&this.prewarmPageIds.has(t)&&!!n,a=(y,T=!1)=>{var C;const R=s?this.countPrewarmSamples(t,n):0;return{pageId:t,rendered:y,cachedSamples:R,totalSamples:s?this.prewarmSamples:0,complete:s&&R===this.prewarmSamples,budgetLimited:T,aborted:((C=i.signal)==null?void 0:C.aborted)===!0}};if(!s||(v=i.signal)!=null&&v.aborted)return a(0);const o=this.prewarmRevision,c=n.contentRevision;if(this.renderer.shadowMap.type!==en)throw new Error("Shadow prewarm requires the shared PCF shadow path");const l=JSON.stringify([t,n.projectionKey,this.prewarmSamples]);let u=0;for(;u<this.prewarmSamples&&this.cache.has(JSON.stringify([l,u]));)u+=1;if(u===this.prewarmSamples)return a(0);if(!this.canPrewarm(t)||It(n.width,n.height)+(this.prewarmSink?0:xn)>this.cache.availableBytes)return a(0,!0);this.prewarmSink||(this.prewarmSink=new je(1,1,{depthBuffer:!1}),this.cache.setBudget(this.memoryBudgetBytes,this.reservedBytes));const p=n.controller.lights[0];this.prewarmSamples===1?n.controller.restoreSunDiscCenter():n.controller.applySunDiscSample(u,this.prewarmSamples),p.shadow.map=null,p.shadow.needsUpdate=!0;const g=p.visible;p.visible=!0,this.prewarmCamera.layers.mask=e.layers.mask,this.prewarmCamera.matrixAutoUpdate=!1,this.prewarmCamera.matrixWorldAutoUpdate=!1,this.prewarmCamera.matrixWorld.copy(e.matrixWorld),this.prewarmCamera.matrixWorldInverse.copy(e.matrixWorldInverse),this.prewarmCamera.projectionMatrix.copy(e.projectionMatrix);let h=0;try{this.renderPrewarmDepth(p);const y=p.shadow.map;y&&(h=1,this.depthRenders+=1,((f=i.signal)!=null&&f.aborted||o!==this.prewarmRevision||c!==n.contentRevision||!this.prewarmPageIds.has(t)||!this.cache.admit(JSON.stringify([l,u]),t,y,l,{evictInactive:!1}))&&Mt(y))}catch(y){throw p.shadow.map&&Mt(p.shadow.map),y}finally{p.visible=g,p.shadow.map=null}return a(h)}renderPrewarmDepth(e){const{renderer:t,scene:i}=this,n=t.getContext(),s=t.getRenderTarget(),a=t.getActiveCubeFace(),o=t.getActiveMipmapLevel(),c=t.getViewport(new te),l=t.getScissor(new te),u=t.getScissorTest(),d=n.getParameter(n.DRAW_FRAMEBUFFER_BINDING),p=n.getParameter(n.READ_FRAMEBUFFER_BINDING),g=new te().fromArray(n.getParameter(n.VIEWPORT)),h=new te().fromArray(n.getParameter(n.SCISSOR_BOX)),v=n.isEnabled(n.SCISSOR_TEST),f=n.isEnabled(n.DEPTH_TEST),y=n.getParameter(n.DEPTH_RANGE),T=n.getParameter(n.DEPTH_WRITEMASK),R=n.getParameter(n.DEPTH_FUNC),C=n.getParameter(n.DEPTH_CLEAR_VALUE),b=n.getParameter(n.COLOR_CLEAR_VALUE),I=n.getParameter(n.COLOR_WRITEMASK),N=t.clippingPlanes,E=t.autoClear,L=i.background,F=t.xr.enabled,W=t.shadowMap.enabled,V=t.shadowMap.autoUpdate,O=t.shadowMap.needsUpdate,se=[];i.traverse(P=>{const X=P;X.isLight&&X.castShadow&&X!==e&&se.push(X)});try{t.resetState(),t.autoClear=!1,t.xr.enabled=!1,t.shadowMap.enabled=!0,t.shadowMap.autoUpdate=!0;for(const P of se)P.castShadow=!1;i.background=null,t.clippingPlanes=N,t.setRenderTarget(this.prewarmSink),n.depthRange(0,1),t.render(i,this.prewarmCamera)}finally{t.clippingPlanes=N,t.autoClear=E,t.xr.enabled=F,t.shadowMap.enabled=W,t.shadowMap.autoUpdate=V,t.shadowMap.needsUpdate=O;for(const P of se)P.castShadow=!0;i.background=L,t.resetState(),t.setRenderTarget(s,a,o),t.setViewport(c),t.setScissor(l),t.setScissorTest(u),t.state.bindFramebuffer(n.DRAW_FRAMEBUFFER,d),t.state.bindFramebuffer(n.READ_FRAMEBUFFER,p),t.state.viewport(g),t.state.scissor(h),t.state.setScissorTest(v),f?t.state.enable(n.DEPTH_TEST):t.state.disable(n.DEPTH_TEST),n.depthRange(y[0],y[1]),n.depthMask(T),n.depthFunc(R),n.clearDepth(C),n.clearColor(b[0],b[1],b[2],b[3]),n.colorMask(I[0],I[1],I[2],I[3])}}configurePage(e,t,i){let n=this.pages.get(e.id);if(!n){const u=new Tc(this.host);u.setMaxShadowMapSize(this.maxMapSize),u.setSoftSun(!0),n={controller:u,projectionKey:"",lightingKey:"",presentationKey:"",corridor:new Oe,planes:[],width:0,height:0,limited:!1,screenBounds:e.screenBounds,receiverBounds:e.bounds.clone(),groundTexelTargetMeters:e.groundTexelTargetMeters,casterBounds:new Oe,contentRevision:0,casterRevision:null}}this.pages.delete(e.id),this.pages.set(e.id,n);const s=n.controller.update({...t,maxReceiverBiasMeters:i?i(e.bounds,e.groundTexelTargetMeters):t.maxReceiverBiasMeters,receiverWorldPoints:Br(e.bounds),receiverAnchorWorldPosition:e.bounds.getCenter(new x),minimumElevationMeters:e.bounds.min.y,maximumElevationMeters:e.bounds.max.y,quality:4,groundTexelFit:!0,groundTexelTargetMeters:e.groundTexelTargetMeters});if(!s)return;const a=n.controller.lights[0];a.visible=!1;const o=s.camera,c=e.receiverObjectId===void 0?"spatial-partition-v1":"native-object-v1",l=JSON.stringify([c,o.viewMatrixElements,o.projectionMatrixElements,o.shadowMapWidth,o.shadowMapHeight,a.shadow.bias,a.shadow.normalBias,e.bounds.min,e.bounds.max]);n.projectionKey=l,n.lightingKey=JSON.stringify([t.directionToSun,t.shadowIntensity,e.bounds.min,e.bounds.max]),n.presentationKey=JSON.stringify([c,t.directionToSun,t.shadowIntensity,e.bounds.min.x,e.bounds.min.z,e.bounds.max.x,e.bounds.max.z]),n.receiverBounds.copy(e.bounds),n.receiverObjectId=e.receiverObjectId,n.groundTexelTargetMeters=e.groundTexelTargetMeters,n.screenBounds=e.screenBounds,n.width=o.shadowMapWidth,n.height=o.shadowMapHeight,n.limited=(o.groundTexelWidthMeters??1/0)>e.groundTexelTargetMeters*1.001||(o.groundTexelHeightMeters??1/0)>e.groundTexelTargetMeters*1.001,n.casterBounds.copy(mu(e.bounds,t.directionToSun,s.casterReachMeters+e.bounds.getSize(new x).length(),Pr,o.guardMeters)),n.corridor.union(n.casterBounds),n.planes=[new ot(new x(1,0,0),-e.bounds.min.x),new ot(new x(-1,0,0),e.bounds.max.x),new ot(new x(0,0,1),-e.bounds.min.z),new ot(new x(0,0,-1),e.bounds.max.z)]}invalidateCasters(e){const t=e instanceof Oe?[e]:e,i=[];for(const[n,s]of this.pages)t.some(a=>s.corridor.intersectsBox(a))&&(s.contentRevision+=1,this.cache.invalidate(n),i.push(n));return i}setCasterRevision(e,t){const i=this.pages.get(e);return!i||t===null||i.casterRevision===t?!1:(i.casterRevision=t,i.contentRevision+=1,this.cache.invalidate(e),!0)}renderSample(e,t,i){this.renderSamples(e,this.activePageIds,t,i)}renderPageSample(e,t,i,n,s){return this.disposed||!this.activePageIds.has(t)?!1:this.renderSamples(e,[t],i,n,s)>0}renderPageColor(e,t){const i=this.pages.get(t);if(this.disposed||!i||!this.activePageIds.has(t))return!1;const{renderer:n,scene:s}=this,a=n.clippingPlanes,o=n.autoClear,c=s.background,l=n.shadowMap.autoUpdate,u=n.shadowMap.needsUpdate;n.autoClear=!1,n.shadowMap.autoUpdate=!1,n.shadowMap.needsUpdate=!1,n.clippingPlanes=[...a,...i.planes],s.background=null;try{const d=ua(s,i.receiverObjectId,n,e,"color-only");return d&&(this.colorPasses+=1),d}finally{n.clippingPlanes=a,n.autoClear=o,n.shadowMap.autoUpdate=l,n.shadowMap.needsUpdate=u,s.background=c}}get accumulationPages(){return[...this.activePageIds].map(e=>{const t=this.pages.get(e),i=t.controller.lights[0];return{id:e,receiverObjectId:t.receiverObjectId,contentKey:JSON.stringify([t.lightingKey,t.contentRevision]),casterRevision:t.casterRevision,presentationKey:t.presentationKey,revision:JSON.stringify([t.projectionKey,t.contentRevision,i.color.toArray(),i.intensity,i.shadow.intensity]),screenBounds:t.screenBounds.clone(),receiverBounds:t.receiverBounds.clone(),groundTexelTargetMeters:t.groundTexelTargetMeters}})}areCastersReady(e,t){const i=this.pages.get(e);return!!(i&&t(i.casterBounds))}getPageGeometry(e){const t=this.pages.get(e);return t?{casterBounds:t.casterBounds.clone(),receiverBounds:t.receiverBounds.clone(),width:t.width,height:t.height,projectionKey:t.projectionKey}:null}get supportsOpaqueAccumulation(){let e=!0;return this.scene.traverseVisible(t=>{const i=t;if(!(!i.isMesh||!i.receiveShadow))for(const n of Array.isArray(i.material)?i.material:[i.material])n.visible&&(n.transparent||!n.depthWrite||!n.depthTest)&&(e=!1)}),e}renderSamples(e,t,i,n,s){if(this.disposed)return 0;if(this.renderer.shadowMap.type!==en)throw new Error("Shadow page cache must be recreated after changing the depth/filter format");if(!Number.isInteger(n)||n<1||!Number.isInteger(i)||i<0||i>=n)throw new RangeError("Shadow sample must lie within its finite-disc sequence");n!==this.activeSamples&&(this.activeSamples=n,this.updateActiveVariants());const{renderer:a,scene:o}=this,c=a.clippingPlanes,l=a.autoClear,u=o.background,d=a.getRenderTarget(),p=d==null?void 0:d.scissor.clone(),g=d==null?void 0:d.scissorTest;let h=0;a.autoClear=!1,o.background=null;try{for(const v of t){const f=this.pages.get(v),y=f.controller.lights[0];n===1?f.controller.restoreSunDiscCenter():f.controller.applySunDiscSample(i,n);const T=JSON.stringify([v,f.projectionKey,n]),R=JSON.stringify([T,i]),C=this.cache.get(R);if(!C&&this.streamedTarget&&(this.streamedTarget.width!==f.width||this.streamedTarget.height!==f.height)&&(Mt(this.streamedTarget),this.streamedTarget=null),y.shadow.map=C??this.streamedTarget,C||(this.streamedTarget=null),y.shadow.needsUpdate=!C,y.visible=!0,a.clippingPlanes=[...c,...f.planes],d){const{x:b,y:I,z:N,w:E}=s??f.screenBounds,L=Math.floor(b*d.width),F=Math.floor(I*d.height);d.scissor.set(L,F,Math.ceil((b+N)*d.width)-L,Math.ceil((I+E)*d.height)-F),d.scissorTest=!0,a.setRenderTarget(d)}try{if(ua(o,f.receiverObjectId,a,e)&&(this.colorPasses+=1,h+=1),!C&&y.shadow.map){this.depthRenders+=1;const I=y.shadow.map;this.cache.admit(R,v,I,T)||(this.streamedTarget=I)}}catch(b){throw!C&&y.shadow.map&&Mt(y.shadow.map),b}finally{y.visible=!1,y.shadow.map=null}}}finally{a.clippingPlanes=c,a.autoClear=l,o.background=u,d&&p&&(d.scissor.copy(p),d.scissorTest=g??!1,a.setRenderTarget(d))}return h}get stats(){const e=[...this.activePageIds].map(t=>this.pages.get(t));return{pages:e.length,cachedSamplePages:this.cache.count,cacheBytes:this.cache.bytes,scratchBytes:this.reservedBytes,hits:this.cache.hits,misses:this.cache.misses,depthRenders:this.depthRenders,colorPasses:this.colorPasses,limitedPages:e.filter(t=>t.limited).length,dimensions:e.map(t=>`${t.width}×${t.height}`)}}clearCache(){this.cache.clear();for(const e of this.pages.values())e.contentRevision+=1}updateActiveVariants(){this.cache.setActiveVariants(new Set([...this.activePageIds].flatMap(e=>[...new Set([1,this.activeSamples])].map(t=>JSON.stringify([e,this.pages.get(e).projectionKey,t])))))}get pageLevels(){return[...this.activePageIds].map(e=>{const t=this.pages.get(e);return{id:e,level:Math.max(0,Math.round(Math.log2(this.maxMapSize/Math.max(t.width,t.height)))),width:t.width,height:t.height}})}dispose(){var e;if(!this.disposed){this.disposed=!0,this.cache.clear(),this.streamedTarget&&Mt(this.streamedTarget),this.streamedTarget=null,(e=this.prewarmSink)==null||e.dispose(),this.prewarmSink=null,this.clearPrewarmView(),this.scratchBytes=0;for(const t of this.pages.values())t.controller.dispose();this.pages.clear(),this.activePageIds.clear()}}}const xf=async({pages:r,signal:e,prepare:t,render:i,yieldToInput:n})=>{let s=0,a=0,o=0,c=!1;try{for(const l of r){if(e.aborted)break;if(l.cachedSamples>=l.samples){s+=1;continue}if(!l.canPrewarm){c=!0;continue}if(await n(e),e.aborted)break;const u=await t(l,e);try{if(e.aborted)break;if(!u.covered||!u.isCurrent()){a+=1;continue}const d=Math.min(l.samples,l.sampleBudget);d<l.samples&&(c=!0);for(let p=l.cachedSamples;p<d&&(await n(e),!(e.aborted||!u.isCurrent()));p+=1){const g=i(l.id,u.group,e);if(o+=g.rendered,g.complete){s+=1;break}if(g.budgetLimited){c=!0;break}if(g.aborted||!g.rendered)break}}finally{u.dispose()}}}catch(l){if(!e.aborted)throw l}return{offered:r.length,completed:s,skippedCoverage:a,renderedSamples:o,budgetLimited:c,aborted:e.aborted}},Tf=r=>{const e=globalThis.scheduler;return e!=null&&e.postTask?e.postTask(()=>{},{priority:"background",delay:0,signal:r}):Promise.reject(new Error("Background scheduler unavailable"))},Mf=({getRequest:r})=>{let e=!1,t=null,i=null,n=!1;const s=()=>{n=!1,i==null||i.abort()},a=()=>{if(!e){if(i){n=!0;return}try{const o=globalThis.scheduler;if(typeof(o==null?void 0:o.postTask)!="function")return;const c=r();if(!c||c.key===t)return;t=c.key;const l=new AbortController;i=l;let u=!1;const d=()=>{if(i!==l||u)return;i=null;const p=n;n=!1,p&&a()};try{o.postTask(async()=>{if(e||l.signal.aborted)return;const p=r();if(!(!p||p.key!==c.key)){u=!0;try{await p.run(l.signal)}finally{u=!1,d()}}},{priority:"background",delay:150,signal:l.signal}).then(d,d)}catch{d()}}catch{}}};return{onSettled:a,cancel:s,dispose(){e=!0,s()}}},Mc=(r,e,t)=>JSON.stringify([r.matrixWorldInverse.elements,r.projectionMatrix.elements,e,t]),bf=(r,e)=>{if(!Number.isFinite(e)||e<r.length*8)throw new RangeError("Capture budget must fit at least one scalar/depth pixel per page");const t=[...r].sort((n,s)=>n.id<s.id?-1:n.id>s.id?1:0).map(({id:n,plan:s,screenArea:a})=>({id:n,plan:s,width:s.width,height:s.height,weight:2**Math.floor(Math.log2(Math.max(1/65536,Math.min(1,a))))}));let i=t.reduce((n,s)=>n+s.width*s.height,0);for(;i*8>e;){let n;for(const a of t)a.width===1&&a.height===1||(!n||a.width*a.height/a.weight>n.width*n.height/n.weight)&&(n=a);if(!n)break;const s=n.width*n.height;n.width>=n.height&&n.width>1?n.width/=2:n.height/=2,i-=s-n.width*n.height}return new Map(t.map(({id:n,plan:s,width:a,height:o})=>[n,a===s.width&&o===s.height?s:{...s,width:a,height:o,limited:!0,key:Mc(s.camera,a,o)}]))},Rf=(r,e,t)=>{const{groundTexelTargetMeters:i,maximumDimension:n,maximumPixels:s}=t;if(r.isEmpty()||![...r.min.toArray(),...r.max.toArray(),...e.toArray()].every(Number.isFinite)||!(i>0&&Number.isFinite(i))||!(n>=1&&Number.isFinite(n))||!(s>=1&&Number.isFinite(s)))throw new RangeError("Receiver capture requires finite bounds and positive allocation limits");const a=r.getCenter(new x),o=r.getSize(new x).length()*.5,c=Math.max(.001,o*.001),l=new Jn;l.quaternion.copy(e).normalize(),l.position.copy(a).add(new x(0,0,o+c+1).applyQuaternion(l.quaternion)),l.updateMatrixWorld(!0);const u=new Oe().setFromPoints(Br(r).map(y=>y.applyMatrix4(l.matrixWorldInverse)));l.left=u.min.x-c,l.right=u.max.x+c,l.bottom=u.min.y-c,l.top=u.max.y+c,l.near=Math.max(.001,-u.max.z-c),l.far=Math.max(l.near+.001,-u.min.z+c),l.updateProjectionMatrix();const d=y=>2**Math.ceil(Math.log2(Math.max(1,y/i))),p=d(l.right-l.left),g=d(l.top-l.bottom),h=2**Math.floor(Math.log2(n));let v=Math.min(p,h),f=Math.min(g,h);for(;v*f>s;)v>=f&&v>1?v/=2:f/=2;return{camera:l,width:v,height:f,limited:v<p||f<g,key:Mc(l,v,f)}},Ef=r=>new ul().setFromRotationMatrix(new J().extractRotation(r.matrixWorld)),bi={namespace:"shadow-corridor-visibility",schema:"visibility-depth-world-basis-v1",maximumPayloadBytes:32*1024**2,maximumRecordBytes:33*1024**2,maximumIdentityCharacters:65536},li={read:"read",write:"write",writePacked:"write-packed"},Ge=r=>{if(!r||!Number.isInteger(r.samples)||r.samples<1||r.samples>4096)return null;const e=[r.source,r.dateTime,r.corridor,r.resolution,r.geometryFingerprint];return e.some(t=>typeof t!="string"||t.length===0)||e.reduce((t,i)=>t+i.length,0)>bi.maximumIdentityCharacters?null:JSON.stringify([bi.schema,...e,r.samples])},Tn=(r,e)=>Array.isArray(r)&&r.length===e&&r.every(Number.isFinite),bc=r=>{if(!r||typeof r!="object")return!1;const e=r,t=e.width*e.height;return Number.isSafeInteger(e.width)&&e.width>0&&Number.isSafeInteger(e.height)&&e.height>0&&Number.isSafeInteger(t)&&t*8<=bi.maximumPayloadBytes&&Tn(e.captureMatrix,16)&&Tn(e.worldBasis,16)&&Tn(e.crop,4)&&e.crop[0]>=0&&e.crop[1]>=0&&e.crop[2]>0&&e.crop[3]>0&&e.crop[0]+e.crop[2]<=1.000001&&e.crop[1]+e.crop[3]<=1.000001},Ka=r=>{if(!bc(r))return!1;const e=r,t=e.width*e.height;return e.visibility instanceof Float32Array&&e.visibility.length===t&&e.depth instanceof Float32Array&&e.depth.length===t},Af=r=>{if(!bc(r))return!1;const e=r;return e.rgba instanceof Float32Array&&e.rgba.length===e.width*e.height*4},Sr=64,Kn=256*1024**2,Mn=Kn,Cf=128*1024**2,Xa=8,$a=32*1024**2,If=4,wr=r=>{var e;r.target?((e=r.target.depthTexture)==null||e.dispose(),r.target.dispose()):(r.visibility.dispose(),r.depth.dispose())},Df=(r,e)=>r.elements.every((t,i)=>Number.isFinite(t)&&Math.abs(t-e.elements[i])<=1e-10*Math.max(1,Math.abs(t)));class Rc{constructor(e){this.renderer=e,this.copyQuad.frustumCulled=!1,this.copyScene.add(this.copyQuad)}captures=new Map;visiblePageIds=new Set;samples=0;replayCount=0;matchingPages=0;persistence;persistenceGeneration=0;disposed=!1;restoreAttempts=new Set;pendingRestores=new Map;restoreRequests=new Map;pendingWrites=new Map;persistenceOffers=new WeakMap;persistenceAttempted=new WeakSet;persistenceTimer=null;readbackBusy=!1;readbackBytes=0;packMaterial=new Kt({uniforms:{visibility:{value:null},depth:{value:null}},vertexShader:"varying vec2 uvCopy; void main() { uvCopy = position.xy * 0.5 + 0.5; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:"uniform sampler2D visibility; uniform sampler2D depth; varying vec2 uvCopy; void main() { gl_FragColor = vec4(texture2D(visibility, uvCopy).r, texture2D(depth, uvCopy).r, 0.0, 1.0); }",depthTest:!1,depthWrite:!1,blending:hi,toneMapped:!1});materials=new Map;unsupportedMaterials=new WeakSet;captureSupported=!0;contentRevision=0;get revision(){return this.contentRevision}get supportsCapture(){return this.captureSupported}copyScene=new Cr;copyCamera=new Ri;copyMaterial=new Kt({uniforms:{source:{value:null},crop:{value:new te}},vertexShader:"varying vec2 uvCopy; void main() { uvCopy = position.xy * 0.5 + 0.5; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:"uniform sampler2D source; uniform vec4 crop; varying vec2 uvCopy; void main() { gl_FragColor = vec4(texture2D(source, crop.xy + uvCopy * crop.zw).r, 0.0, 0.0, 1.0); }",depthTest:!1,depthWrite:!1,blending:hi,toneMapped:!1});copyQuad=new Nr(new Qn(2,2),this.copyMaterial);downsampleMaterial=new Kt({uniforms:{source:{value:null},depth:{value:null},texel:{value:new bt}},vertexShader:"varying vec2 uvCopy; void main() { uvCopy = position.xy * 0.5 + 0.5; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:`uniform sampler2D source; uniform sampler2D depth;
      uniform vec2 texel; varying vec2 uvCopy;
      void main() {
        vec2 d = texel * 0.25;
        float visibility = (texture2D(source, uvCopy + d).r
          + texture2D(source, uvCopy - d).r
          + texture2D(source, uvCopy + vec2(d.x, -d.y)).r
          + texture2D(source, uvCopy + vec2(-d.x, d.y)).r) * 0.25;
        gl_FragColor = vec4(visibility, 0.0, 0.0, 1.0);
        gl_FragDepth = texture2D(depth, uvCopy).r;
      }`,depthTest:!0,depthFunc:Mo,depthWrite:!0,blending:hi,toneMapped:!1});uniforms={carmaCaptureVisibility:{value:!1},carmaRetainedEnabled:{value:!1},carmaRetainedColor:{value:null},carmaRetainedDepth:{value:null},carmaRetainedMatrix:{value:new J},carmaRetainedCrop:{value:new te(0,0,1,1)},carmaRetainedCount:{value:0},carmaRetainedBounds:{value:Array.from({length:Sr},()=>new te)}};get memoryBytes(){return[...this.captures.values()].reduce((e,t)=>e+t.bytes,this.readbackBytes)}getCapturedSize(e){const t=this.captures.get(e);return t?{width:t.width,height:t.height,samples:t.samples}:null}get stats(){return{pages:this.captures.size,samples:this.samples,matchingPages:this.matchingPages,replays:this.replayCount,bytes:this.memoryBytes}}beginFrame(e=[]){this.matchingPages=0,this.visiblePageIds=new Set(e.map(t=>t.id)),this.schedulePersistence()}has(e,t){var n;const i=this.captures.get(e.id);if(!this.canReplay(e)||(i==null?void 0:i.casterRevision)!==e.casterRevision)return!1;if(i&&i.samples>1&&i.samples>=t&&e.captureSize&&e.presentationKey&&i.crop.x===0&&i.crop.y===0&&i.crop.z===1&&i.crop.w===1)return i.width>=e.captureSize.width&&i.height>=e.captureSize.height;if(i!=null&&i.restored){const s=this.restoreRequests.get(e.id),a=(n=this.persistence)==null?void 0:n.identity(e,t);if(e.ready===!1||!(s!=null&&s.expected)||!a||Ge(a)!==i.persistentKey||!Df(i.matrix,s.expected))return!1;const o=e.screenBounds,c=i.crop;if(c.x>o.x+1e-6||c.y>o.y+1e-6||c.x+c.z<o.x+o.z-1e-6||c.y+c.w<o.y+o.w-1e-6)return!1}return(i==null?void 0:i.revision)===(e.contentKey??e.revision)&&i.samples===t}hasAtLeast(e,t){const i=this.captures.get(e.id);return!!(i&&i.samples>=t&&this.has(e,i.samples))}downsample(e,t,i){var f;if(!Number.isInteger(t)||!Number.isInteger(i)||t<1||i<1)return!1;const n=this.captures.get(e.id);if(!n||!this.canReplay(e))return!1;const s=Math.max(t,Math.ceil(n.width/2)),a=Math.max(i,Math.ceil(n.height/2));if(s>n.width||a>n.height||s*a>=n.width*n.height)return!1;const o=new je(s,a,{type:yt,format:Yt,minFilter:Ae,magFilter:Ae,depthTexture:new Zt(s,a,Ot),samples:0}),c=this.renderer,l=c.getRenderTarget(),u=c.getActiveCubeFace(),d=c.getActiveMipmapLevel(),p=c.getViewport(new te),g=c.getScissor(new te),h=c.getScissorTest(),v=c.autoClear;try{c.initRenderTarget(o),this.downsampleMaterial.uniforms.source.value=n.visibility,this.downsampleMaterial.uniforms.depth.value=n.depth,this.downsampleMaterial.uniforms.texel.value.set(1/s,1/a),this.copyQuad.material=this.downsampleMaterial,c.autoClear=!1,c.setRenderTarget(o),c.setViewport(new te(0,0,s,a)),c.setScissorTest(!1),c.render(this.copyScene,this.copyCamera)}catch(y){throw(f=o.depthTexture)==null||f.dispose(),o.dispose(),y}finally{this.copyQuad.material=this.copyMaterial,c.setRenderTarget(l,u,d),c.setViewport(p),c.setScissor(g),c.setScissorTest(h),c.autoClear=v}return this.captures.set(e.id,{...n,target:o,visibility:o.texture,depth:o.depthTexture,width:s,height:a,bytes:s*a*8}),this.pendingWrites.delete(e.id),wr(n),this.contentRevision+=1,!0}isRestorePending(e,t){var s;const i=this.pendingRestores.get(e.id);if(!i||i.samples!==t)return!1;const n=(s=this.persistence)==null?void 0:s.identity(e,t);return!!(n&&Ge(n)===i.key)}setPersistence(e){this.persistence!==e&&(this.cancelPendingPersistence(),this.persistence=e)}cancelPendingPersistence(){var e;(e=this.persistence)==null||e.cache.cancelPending(),this.persistenceGeneration+=1,this.restoreAttempts.clear(),this.pendingRestores.clear(),this.restoreRequests.clear(),this.pendingWrites.clear(),this.persistenceOffers=new WeakMap,this.persistenceAttempted=new WeakSet,this.persistenceTimer!==null&&clearTimeout(this.persistenceTimer),this.persistenceTimer=null}beginSolarTransition(){this.cancelPendingPersistence()}canPresent(e){return this.canReplay(e)}prepareRestore(e,t,i){if(this.disposed)return;if(this.restoreRequests.set(e.id,{page:e,samples:t,expected:i==null?void 0:i.clone()}),this.restoreRequests.size>Sr*2){for(const l of this.restoreRequests.keys())if(l!==e.id&&!this.visiblePageIds.has(l)){this.restoreRequests.delete(l);break}}const n=this.persistence;if(!(n!=null&&n.cache.enabled)||n.cache.busy||e.ready===!1||this.hasAtLeast(e,t))return;const s=n.identity(e,t),a=s&&Ge(s);if(!s||!a||this.restoreAttempts.has(a))return;this.restoreAttempts.add(a),this.restoreAttempts.size>Sr*4&&this.restoreAttempts.delete(this.restoreAttempts.values().next().value);const o=this.persistenceGeneration,c=this.captures.get(e.id);this.pendingRestores.set(e.id,{key:a,samples:t}),n.cache.read(s).then(l=>{const u=this.restoreRequests.get(e.id),d=u&&n.identity(u.page,t);if(!l||this.disposed||this.persistenceGeneration!==o||this.persistence!==n||!u||u.page.ready===!1||!d||Ge(d)!==a||this.captures.get(e.id)!==c)return;const p=new J().fromArray(l.worldBasis),g=n.worldBasis();if(!p.elements.every(Number.isFinite)||p.determinant()===0||!g.elements.every(Number.isFinite)||g.determinant()===0)return;const h=new J().fromArray(l.captureMatrix).multiply(p.invert()).multiply(g),v=[...new Set([l.visibility.buffer,l.depth.buffer])].reduce((R,C)=>R+C.byteLength,0),f=l.width*l.height*Xa+v;if(!this.admit(e.id,f))return;const y=new Pn(l.visibility,l.width,l.height,Yt,yt),T=new Pn(l.depth,l.width,l.height,Yt,yt);for(const R of[y,T])R.minFilter=Ae,R.magFilter=Ae,R.generateMipmaps=!1,R.needsUpdate=!0;c&&wr(c),this.captures.delete(e.id),this.captures.set(e.id,{target:null,visibility:y,depth:T,width:l.width,height:l.height,bytes:f,restored:!0,persistentKey:a,persistentIdentity:l.identity,revision:u.page.contentKey??u.page.revision,casterRevision:u.page.casterRevision,presentationKey:u.page.presentationKey??u.page.contentKey??u.page.revision,samples:l.identity.samples,matrix:h,crop:new te().fromArray(l.crop)}),this.samples=l.identity.samples,this.contentRevision+=1}).catch(()=>{}).finally(()=>{var l,u;!this.disposed&&o===this.persistenceGeneration&&(((l=this.pendingRestores.get(e.id))==null?void 0:l.key)===a&&this.pendingRestores.delete(e.id),(u=n.requestRepaint)==null||u.call(n),this.schedulePersistence())})}admit(e,t,i=!1){var a;const n=i?Math.min(((a=this.captures.get(e))==null?void 0:a.bytes)??0,Cf):0,s=Mn+n;for(const[o,c]of this.captures){if(t+this.memoryBytes<=s)break;o===e||this.visiblePageIds.has(o)||(wr(c),this.captures.delete(o),this.contentRevision+=1,this.pendingWrites.delete(o))}return t+this.memoryBytes<=s}publish(e,t,i,n,s){var L;if(!this.captureSupported)return!1;const a=n.screenBounds,o=Math.max(0,Math.floor(a.x*e.width)),c=Math.max(0,Math.floor(a.y*e.height)),l=Math.min(e.width,Math.ceil((a.x+a.z)*e.width)),u=Math.min(e.height,Math.ceil((a.y+a.w)*e.height)),d=l-o,p=u-c,g=d*p*Xa;if(d<=0||p<=0||g>Mn||!t.depthTexture||!this.admit(n.id,g,!0))return!1;const h=this.renderer,v=h.getRenderTarget(),f=h.getActiveCubeFace(),y=h.getActiveMipmapLevel(),T=h.getViewport(new te),R=h.getScissor(new te),C=h.getScissorTest(),b=h.autoClear,I=new je(d,p,{type:yt,format:Yt,minFilter:Ae,magFilter:Ae,depthTexture:new Zt(d,p,Ot),samples:0});try{h.initRenderTarget(I);const F=new dl(new bt(o,c),new bt(l,u));this.copyMaterial.uniforms.source.value=e.texture,this.copyMaterial.uniforms.crop.value.set(o/e.width,c/e.height,d/e.width,p/e.height),h.autoClear=!1,h.setRenderTarget(I),h.setViewport(new te(0,0,d,p)),h.setScissorTest(!1),h.render(this.copyScene,this.copyCamera),h.copyTextureToTexture(t.depthTexture,I.depthTexture,F)}catch(F){throw(L=I.depthTexture)==null||L.dispose(),I.dispose(),F}finally{h.setRenderTarget(v,f,y),h.setViewport(T),h.setScissor(R),h.setScissorTest(C),h.autoClear=b}const N=this.captures.get(n.id);N&&wr(N),this.samples=s,this.captures.delete(n.id);const E={target:I,visibility:I.texture,depth:I.depthTexture,width:d,height:p,bytes:g,restored:!1,revision:n.contentKey??n.revision,casterRevision:n.casterRevision,samples:s,presentationKey:n.presentationKey??n.contentKey??n.revision,matrix:new J().multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),crop:new te(o/e.width,c/e.height,d/e.width,p/e.height)};return this.captures.set(n.id,E),this.contentRevision+=1,this.queuePersistence(n,E),!0}queuePersistence(e,t){const i=this.persistence;if(!(i!=null&&i.cache.enabled)||e.ready===!1||this.disposed)return;const n=i.identity(e,t.samples),s=n&&Ge(n),a=i.worldBasis();!n||n.samples!==t.samples||!s||!a.elements.every(Number.isFinite)||a.determinant()===0||t.width*t.height*16>$a||(this.pendingWrites.delete(e.id),this.persistenceOffers.set(t,{page:e,capture:t,identity:n,key:s,worldBasis:[...a.elements]}),this.schedulePersistence())}schedulePersistence(){var e;if(!(this.disposed||this.persistenceTimer!==null||this.readbackBusy||!((e=this.persistence)!=null&&e.cache.enabled)||this.persistence.cache.busy)){for(const[t,i]of this.pendingWrites)this.captures.get(t)!==i.capture&&this.pendingWrites.delete(t);for(const t of[!0,!1])for(const[i,n]of this.captures){if(this.pendingWrites.size>=If)break;const s=this.persistenceOffers.get(n);this.visiblePageIds.has(i)===t&&s&&!this.persistenceAttempted.has(n)&&!this.pendingWrites.has(i)&&this.pendingWrites.set(i,s)}this.pendingWrites.size!==0&&(this.persistenceTimer=setTimeout(()=>{this.persistenceTimer=null,this.persistNextCapture()},0))}}persistNextCapture(){var h,v,f;const e=this.persistence;if(this.disposed||this.readbackBusy||!(e!=null&&e.cache.enabled)||e.cache.busy||typeof this.renderer.readRenderTargetPixelsAsync!="function")return;const t=[...this.pendingWrites.entries()].find(([y,T])=>this.captures.get(y)===T.capture);if(!t){this.pendingWrites.clear();return}const[i,n]=t,s=((h=this.restoreRequests.get(i))==null?void 0:h.page)??n.page,a=e.identity(s,n.capture.samples);if(s.ready===!1||!a||Ge(a)!==n.key){this.pendingWrites.delete(i),this.persistenceAttempted.add(n.capture),this.schedulePersistence();return}const{capture:o}=n,c=o.width*o.height*16;if(c>$a||this.memoryBytes+c*2>Mn){this.pendingWrites.delete(i),this.persistenceAttempted.add(o),this.schedulePersistence();return}const l=this.persistenceGeneration,u={target:null,pixels:null,reading:null},d=()=>{const y=this.renderer,T=y.getRenderTarget(),R=y.getActiveCubeFace(),C=y.getActiveMipmapLevel(),b=y.getViewport(new te),I=y.getScissor(new te),N=y.getScissorTest(),E=y.autoClear,L=this.copyQuad.material;try{u.target=new je(o.width,o.height,{format:Dr,type:yt,depthBuffer:!1,minFilter:Ae,magFilter:Ae}),y.initRenderTarget(u.target),u.pixels=new Float32Array(o.width*o.height*4),this.packMaterial.uniforms.visibility.value=o.visibility,this.packMaterial.uniforms.depth.value=o.depth,this.copyQuad.material=this.packMaterial,y.autoClear=!1,y.setRenderTarget(u.target),y.setViewport(new te(0,0,o.width,o.height)),y.setScissorTest(!1),y.render(this.copyScene,this.copyCamera),u.reading=y.readRenderTargetPixelsAsync(u.target,0,0,o.width,o.height,u.pixels)}finally{this.copyQuad.material=L,y.setRenderTarget(T,R,C),y.setViewport(b),y.setScissor(I),y.setScissorTest(N),y.autoClear=E}};try{if(e.runIdleRender){if(!e.runIdleRender(d)&&!u.target)return}else d()}catch{(v=u.target)==null||v.dispose(),this.pendingWrites.delete(i),this.persistenceAttempted.add(o),this.schedulePersistence();return}if(!u.reading||!u.target||!u.pixels){(f=u.target)==null||f.dispose();return}const p=u.target,g=u.pixels;this.pendingWrites.delete(i),this.persistenceAttempted.add(o),this.readbackBusy=!0,this.readbackBytes=c*2,u.reading.then(async()=>{var R;const y=((R=this.restoreRequests.get(i))==null?void 0:R.page)??n.page,T=e.identity(y,o.samples);this.disposed||l!==this.persistenceGeneration||this.persistence!==e||y.ready===!1||!T||Ge(T)!==n.key||await e.cache.writePacked(n.identity,{width:o.width,height:o.height,rgba:g,captureMatrix:[...o.matrix.elements],crop:o.crop.toArray(),worldBasis:n.worldBasis})}).catch(()=>{}).finally(()=>{var y;p.dispose(),this.readbackBusy=!1,this.readbackBytes=0,this.disposed||((y=e.requestRepaint)==null||y.call(e),this.schedulePersistence())})}canReplay(e){var i;const t=this.captures.get(e.id);if(!t||t.presentationKey!==(e.presentationKey??e.contentKey??e.revision))return!1;if(t.restored){const n=(i=this.persistence)==null?void 0:i.identity(e,t.samples),s=t.persistentIdentity;if(e.captureSize&&s)return!!(n&&n.source===s.source&&n.dateTime===s.dateTime&&n.corridor===s.corridor&&n.geometryFingerprint===s.geometryFingerprint&&n.samples===s.samples);if(!n||Ge(n)!==t.persistentKey)return!1}return!0}activate(e){const t=this.captures.get(e.id);this.captures.delete(e.id),this.captures.set(e.id,t),this.uniforms.carmaRetainedMatrix.value.copy(t.matrix),this.uniforms.carmaRetainedCrop.value.copy(t.crop),this.uniforms.carmaRetainedColor.value=t.visibility,this.uniforms.carmaRetainedDepth.value=t.depth,this.matchingPages+=1,this.replayCount+=1,this.uniforms.carmaRetainedCount.value=1;const i=e.receiverBounds;this.uniforms.carmaRetainedBounds.value[0].set(i.min.x,i.min.z,i.max.x,i.max.z),this.uniforms.carmaRetainedEnabled.value=!0}renderNative(e,t,i){if(t.length===0)return i(),new Set;this.configureScene(e);const n=new Map(t.filter(u=>u.receiverObjectId!==void 0&&this.canPresent(u)).map(u=>[u.receiverObjectId,u])),s=[],a=new Map;e.traverseVisible(u=>{const d=u;if(!d.isMesh)return;let p;for(let g=d;g&&(p=n.get(g.id),!p);g=g.parent);s.push({mesh:d,page:p});for(const g of Array.isArray(d.material)?d.material:[d.material]){let h=a.get(g);h||a.set(g,h=new Set),h.add(p==null?void 0:p.id)}});const o=new Set;for(const u of a.values())if(!(u.size<2))for(const d of u)d!==void 0&&o.add(d);const c=new Set,l=[];for(const{mesh:u,page:d}of s){const p=u.onBeforeRender,g=d!==void 0&&!o.has(d.id);u.onBeforeRender=(...h)=>{p.call(u,...h),this.uniforms.carmaRetainedEnabled.value=!1,g&&this.activate(d)},g&&c.add(d.id),l.push(()=>{u.onBeforeRender=p})}this.uniforms.carmaRetainedEnabled.value=!1;try{return i(),c}finally{this.uniforms.carmaRetainedEnabled.value=!1;for(const u of l)u()}}render(e,t,i,n){if(!this.canPresent(t))return n();this.configureScene(e),this.activate(t);try{return n()}finally{this.uniforms.carmaRetainedEnabled.value=!1}}capture(e,t){this.captureSupported=!0,this.configureScene(e),this.uniforms.carmaCaptureVisibility.value=!0;try{return t()}finally{this.uniforms.carmaCaptureVisibility.value=!1}}configureScene(e){e.traverseVisible(t=>{const i=t;if(!(!i.isMesh||!i.receiveShadow)){if(i.isInstancedMesh||i.isSkinnedMesh){this.captureSupported=!1;return}for(const n of Array.isArray(i.material)?i.material:[i.material]){if(this.unsupportedMaterials.has(n)&&(this.captureSupported=!1),!(n.isMeshStandardMaterial||n.isMeshLambertMaterial||n.isMeshPhongMaterial)||n.transparent){this.captureSupported=!1;continue}this.materials.has(n)||this.configure(n)}}})}configure(e){const t=e.onBeforeCompile,i=e.customProgramCacheKey,n=this.uniforms,s=(l,u)=>{t.call(e,l,u);const d=/getShadow\( directionalShadowMap\[ i \][^;]+?\)/;if(!l.vertexShader.includes("#include <common>")||!l.vertexShader.includes("#include <project_vertex>")||!l.fragmentShader.includes("#include <common>")||!l.fragmentShader.includes("#include <lights_fragment_begin>")||!l.fragmentShader.includes("#include <dithering_fragment>")||!d.test(On.lights_fragment_begin)){this.unsupportedMaterials.add(e),this.captureSupported=!1;return}this.unsupportedMaterials.delete(e),Object.assign(l.uniforms,n),l.vertexShader=l.vertexShader.replace("#include <common>",`#include <common>
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
uniform vec4 carmaRetainedBounds[${Sr}];
varying vec4 vCarmaRetainedClip;
varying vec2 vCarmaRetainedWorld;
float carmaRetainedCoverage(float fallbackCoverage) {
  vec3 ndc = vCarmaRetainedClip.xyz / vCarmaRetainedClip.w;
  vec2 uv = ndc.xy * 0.5 + 0.5;
  uv = (uv - carmaRetainedCrop.xy) / carmaRetainedCrop.zw;
  if (!carmaRetainedEnabled || carmaCaptureVisibility || vCarmaRetainedClip.w <= 0.0) return fallbackCoverage;
  bool owned = false;
  for (int i = 0; i < ${Sr}; i++) {
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
`);const p=On.lights_fragment_begin.replace(d,g=>`(carmaCapturedCoverage = ${g}, carmaRetainedCoverage(carmaCapturedCoverage))`);l.fragmentShader=l.fragmentShader.replace("#include <lights_fragment_begin>",`float carmaCapturedCoverage = 1.0;
${p}`).replace("#include <dithering_fragment>",`#include <dithering_fragment>
if (carmaCaptureVisibility) gl_FragColor.rgb = vec3(carmaCapturedCoverage);`)},a=()=>`${i.call(e)}|retained-corridor-visibility-v4`;e.onBeforeCompile=s,e.customProgramCacheKey=a,e.needsUpdate=!0;const o=()=>{e.onBeforeCompile===s&&(e.onBeforeCompile=t),e.customProgramCacheKey===a&&(e.customProgramCacheKey=i),e.removeEventListener("dispose",c),e.needsUpdate=!0},c=()=>{o(),this.materials.delete(e)};e.addEventListener("dispose",c),this.materials.set(e,o)}dispose(){this.disposed=!0,this.setPersistence(void 0);for(const e of this.captures.values())wr(e);this.captures.clear(),this.uniforms.carmaRetainedEnabled.value=!1,this.uniforms.carmaRetainedColor.value=null,this.uniforms.carmaRetainedDepth.value=null,this.copyQuad.geometry.dispose(),this.copyMaterial.dispose(),this.downsampleMaterial.dispose(),this.packMaterial.dispose();for(const e of this.materials.values())e();this.materials.clear()}}const Pt=64,fi=512*1024**2,Ze={inactive:"inactive",dimensions:"dimensions",budget:"budget",msaa:"msaa",format:"format",receivers:"receivers",pages:"pages",renderer:"renderer",disposed:"disposed"},Qa=`
  out vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`,Pf=`
  layout(location = 0) out highp vec4 outColor;
  in vec2 vUv;
  uniform sampler2D tPrevious;
  uniform sampler2D tReference;
  uniform sampler2D tReferenceDepth;
  uniform sampler2D tSample;
  uniform sampler2D tSampleDepth;
  uniform mat4 uInverseViewProjection;
  uniform vec4 uBounds[${Pt}];
  uniform int uBoundsCount;
  uniform bool uRefresh;
  uniform bool uResetAll;
  uniform float uWeights[${Pt}];
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
    for (int i = 0; i < ${Pt}; i++) {
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
`,Of=`
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
`;class Nf{constructor(e,t){this.renderer=e,this.ownsPresentation=t===void 0,this.presentation=t??new Rc(e),this.quad.frustumCulled=!1,this.fullscreenScene.add(this.quad)}fullscreenScene=new Cr;fullscreenCamera=new Jn(-1,1,1,-1,0,1);blendMaterial=new Kt({glslVersion:Ir,vertexShader:Qa,fragmentShader:Pf,uniforms:{tPrevious:{value:null},tReference:{value:null},tReferenceDepth:{value:null},tSample:{value:null},tSampleDepth:{value:null},uInverseViewProjection:{value:new J},uBounds:{value:Array.from({length:Pt},()=>new te)},uBoundsCount:{value:0},uRefresh:{value:!1},uResetAll:{value:!1},uWeights:{value:new Float32Array(Pt).fill(1)}},depthTest:!1,depthWrite:!1,blending:hi});compositeMaterial=new Kt({glslVersion:Ir,vertexShader:Qa,fragmentShader:Of,uniforms:{tColor:{value:null},tDepth:{value:null},uOutputDither:{value:!1}},dithering:!0,transparent:!0,blending:mo,depthTest:!0,depthFunc:Mo,depthWrite:!0});quad=new Nr(new Qn(2,2),this.blendMaterial);referenceTarget=null;sampleTarget=null;readTarget=null;writeTarget=null;pages=new Map;stateKey="";targetKey="";cursor=0;totalSamples=1;broken=!1;disposed=!1;allocatedBytes=0;lastFallbackReason=null;presentation;publishedStateKeys=new Map;publicationRetryMs=250;ownsPresentation;get pageProgress(){return[...this.pages].map(([e,t])=>({id:e,samples:t.samples,totalSamples:this.totalSamples,ready:t.page.ready!==!1,published:this.publishedStateKeys.get(e)===JSON.stringify([this.stateKey,t.page.revision])}))}get memoryBytes(){return this.allocatedBytes+this.presentation.memoryBytes}get fallbackReason(){return this.lastFallbackReason}render(e,t,i){var E,L;if(this.disposed)return this.fallback(Ze.disposed);if(this.broken)return this.fallback(Ze.renderer);if(!i.active)return this.stateKey="",this.lastFallbackReason=Ze.inactive,null;const{width:n,height:s,samples:a}=i,o=rs((E=i.options)==null?void 0:E.format),c=((L=i.options)==null?void 0:L.msaaSamples)??bo.msaaSamples,l=n*s,u=i.visibilityOnly?Yt:Dr,d=i.visibilityOnly?1:4,p=l*(2*(o.bytesPerPixel*d/4+4)+2*o.accumulationBytesPerPixel*d/4);if(!Number.isInteger(n)||n<1||!Number.isInteger(s)||s<1||!Number.isInteger(a)||a<1||n>this.renderer.capabilities.maxTextureSize||s>this.renderer.capabilities.maxTextureSize)return this.fallback(Ze.dimensions);if(i.maxRenderTargetPixels!==void 0&&(!(i.maxRenderTargetPixels>0)||l>i.maxRenderTargetPixels)||p+this.presentation.memoryBytes>fi)return this.fallback(Ze.budget);if(o.format!==Dr)return this.fallback(Ze.format);if(c!==0)return this.fallback(Ze.msaa);if(!t.supportsOpaqueAccumulation)return this.fallback(Ze.receivers);const g=t.accumulationPages.map(F=>{var W;return{...F,ready:F.ready!==!1&&(((W=i.isPageReady)==null?void 0:W.call(i,F.id))??!0)}});if(g.length===0||g.length>Pt)return this.fallback(Ze.pages);this.lastFallbackReason=null;const h=this.renderer,v=h.getRenderTarget(),f=h.getActiveCubeFace(),y=h.getActiveMipmapLevel(),T=h.getClearColor(new ke),R=h.getClearAlpha(),C=h.autoClear,b=h.getViewport(new te),I=h.getScissor(new te),N=h.getScissorTest();try{h.autoClear=!1;const F=JSON.stringify([n,s,o.type,o.accumulationType,u]);if(this.targetKey!==F){this.releaseTargets();const A={type:o.type,format:u,minFilter:Ae,magFilter:Ae,depthBuffer:!0,samples:0};this.referenceTarget=new je(n,s,{...A,depthTexture:new Zt(n,s,Ot)}),this.sampleTarget=new je(n,s,{...A,depthTexture:new Zt(n,s,Ot)});const re={type:o.accumulationType,format:u,minFilter:Ae,magFilter:Ae,depthBuffer:!1};this.readTarget=new je(n,s,re),this.writeTarget=new je(n,s,re),this.targetKey=F,this.allocatedBytes=p}const W=JSON.stringify([i.viewKey,i.visibilityOnly?0:i.styleEpoch,a,F]),V=this.stateKey!==W,O=new Set(g.map(({id:A})=>A)),se=[...this.pages.values()].filter(({page:A})=>!O.has(A.id)).map(({page:A})=>A),X=[...V?g:g.filter(A=>{var Ee;const re=(Ee=this.pages.get(A.id))==null?void 0:Ee.page;return(re==null?void 0:re.revision)!==A.revision||(re==null?void 0:re.ready)===!1&&A.ready}),...se].flatMap(A=>[A.screenBounds,...this.pages.has(A.id)?[this.pages.get(A.id).page.screenBounds]:[]]),H=V?g:g.filter(A=>X.some(re=>this.overlaps(A.screenBounds,re)));this.blendMaterial.uniforms.uInverseViewProjection.value.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse).invert(),V&&(this.pages.clear(),this.cursor=0);for(const A of se)this.pages.delete(A.id);for(const A of H)this.publishedStateKeys.delete(A.id);H.length>0&&(this.publicationRetryMs=250),this.cursor%=Math.max(1,g.length);for(const A of g){const re=this.pages.get(A.id);re?re.page=A:this.pages.set(A.id,{page:A,samples:0})}if(this.totalSamples=a,H.length>0||se.length>0){this.clearTarget(this.referenceTarget),t.renderSample(e,0,a),this.blend(H,!0,V,H.map(()=>1));for(const A of H)this.pages.get(A.id).samples=1}else{const A=[...this.pages.values()],re=performance.now(),Ee=i.maxPagesPerFrame??4,Ce=Number.isFinite(Ee)?Math.min(Pt,Math.max(1,Math.floor(Ee))):4,Rt=i.maxFrameCpuMilliseconds??4,ue=Number.isFinite(Rt)?Math.max(0,Rt):4;let be=0;do{const Re=[],Ie=this.cursor;for(let z=0;z<A.length;z+=1){const Ve=(Ie+z)%A.length,Le=A[Ve];if(!(Le.samples>=a||Le.page.ready===!1)){if(Re.length===0&&this.clearTarget(this.sampleTarget),!t.renderPageSample(e,Le.page.id,Le.samples,a))return this.fallback(Ze.pages);if(Re.push(Le),be+=1,this.cursor=(Ve+1)%A.length,be>=Ce||performance.now()-re>=ue)break}}if(Re.length===0)break;this.blend(Re.map(({page:z})=>z),!1,!1,Re.map(z=>1/(z.samples+1)));for(const z of Re)z.samples+=1}while(be<Ce&&performance.now()-re<ue)}this.stateKey=W,h.setRenderTarget(v,f,y),h.setViewport(b),h.setScissor(I),h.setScissorTest(N),this.quad.material=this.compositeMaterial;const q=[...this.pages.values()].every(A=>A.samples>=a);this.compositeMaterial.uniforms.tColor.value=q?this.readTarget.texture:this.referenceTarget.texture,this.compositeMaterial.uniforms.tDepth.value=this.referenceTarget.depthTexture,this.compositeMaterial.uniforms.uOutputDither.value=v===null,i.visibilityOnly||h.render(this.fullscreenScene,this.fullscreenCamera);let le=!1;for(const{page:A,samples:re}of this.pages.values()){if(A.ready===!1||re<a)continue;const Ee=JSON.stringify([W,A.revision]);if(this.publishedStateKeys.get(A.id)!==Ee)try{this.presentation.publish(this.readTarget,this.referenceTarget,e,A,a)?this.publishedStateKeys.set(A.id,Ee):le=!0}catch(Ce){le=!0,console.error("[shadow-simulation] retaining previous corridor capture after copy failure",Ce)}}for(const A of this.publishedStateKeys.keys())O.has(A)||this.publishedStateKeys.delete(A);const oe=[...this.pages.values()].reduce((A,{page:re,samples:Ee})=>{const Ce=re.ready!==!1&&this.publishedStateKeys.get(re.id)===JSON.stringify([W,re.revision]);return A+(Ce?a:Math.min(Ee,a-1))},0),_e=le?this.publicationRetryMs:void 0;return this.publicationRetryMs=le?Math.min(4e3,this.publicationRetryMs*2):250,{progress:oe/(this.pages.size*a),settled:oe===this.pages.size*a,..._e===void 0?{}:{retryAfterMs:_e},needsRepaint:[...this.pages.values()].some(A=>A.samples<a&&A.page.ready!==!1)}}catch(F){return this.broken=!0,console.error("[shadow-simulation] corridor accumulation failed; using direct rendering",F),this.fallback(Ze.renderer)}finally{h.autoClear=C,h.setClearColor(T,R),h.setRenderTarget(v,f,y),h.setViewport(b),h.setScissor(I),h.setScissorTest(N)}}overlaps(e,t){return e.x<=t.x+t.z&&e.x+e.z>=t.x&&e.y<=t.y+t.w&&e.y+e.w>=t.y}clearTarget(e){this.renderer.setRenderTarget(e),this.renderer.setClearColor(0,0),this.renderer.clear(!0,!0,!1)}blend(e,t,i,n){const s=this.blendMaterial.uniforms;s.tPrevious.value=this.readTarget.texture,s.tReference.value=this.referenceTarget.texture,s.tReferenceDepth.value=this.referenceTarget.depthTexture,s.tSample.value=this.sampleTarget.texture,s.tSampleDepth.value=this.sampleTarget.depthTexture,s.uBoundsCount.value=e.length,e.forEach(({receiverBounds:o},c)=>s.uBounds.value[c].set(o.min.x,o.min.z,o.max.x,o.max.z)),s.uRefresh.value=t,s.uResetAll.value=i,s.uWeights.value.set(n),this.quad.material=this.blendMaterial,this.renderer.setRenderTarget(this.writeTarget),this.renderer.render(this.fullscreenScene,this.fullscreenCamera);const a=this.readTarget;this.readTarget=this.writeTarget,this.writeTarget=a}releaseTargets(){var e;for(const t of[this.referenceTarget,this.sampleTarget,this.readTarget,this.writeTarget])(e=t==null?void 0:t.depthTexture)==null||e.dispose(),t==null||t.dispose();this.referenceTarget=null,this.sampleTarget=null,this.readTarget=null,this.writeTarget=null,this.stateKey="",this.targetKey="",this.allocatedBytes=0,this.pages.clear()}releaseScratch(e=!1){e?(this.stateKey="",this.pages.clear()):this.releaseTargets(),this.publishedStateKeys.clear(),this.cursor=0}fallback(e){return this.lastFallbackReason=e,this.releaseTargets(),null}dispose(){this.disposed||(this.disposed=!0,this.releaseTargets(),this.ownsPresentation&&this.presentation.dispose(),this.quad.geometry.dispose(),this.blendMaterial.dispose(),this.compositeMaterial.dispose())}}const Za=2e4;let Lf=0;var ho;class Ff{enabled=hl((ho=globalThis.location)==null?void 0:ho.hostname);reportId=++Lf;nextCorridorId=0;labels=new Map;pending=new Map;timer;context;observe(e,t){var s;if(!this.enabled)return;const i=performance.now();for(const{id:a}of e)this.labels.has(a)||this.labels.set(a,`C${this.reportId}.${++this.nextCorridorId}`);this.context={total:e.length,ready:e.filter(a=>a.ready).length,completed:e.filter(a=>a.published).length,samples:e.reduce((a,o)=>a+o.samples,0),activeId:t.activeId?this.labels.get(t.activeId):null,memoryBytes:t.memoryBytes,fallbackReason:t.fallbackReason,publicationRetries:(s=t.publicationRetries)==null?void 0:s.map(([a,o])=>({id:this.labels.get(a),attempts:o.attempts,retryInMs:Math.max(0,Math.round(o.retryAt-i))}))};const n=new Set(e.map(({id:a})=>a));for(const a of this.pending.keys())n.has(a)||this.pending.delete(a);for(const a of this.labels.keys())n.has(a)||this.labels.delete(a);for(const a of e){if(a.published){this.pending.delete(a.id);continue}const o=this.pending.get(a.id),c=!o||a.samples>o.progress.samples;this.pending.set(a.id,{progress:a,advancedAt:c?i:o.advancedAt,reported:c?!1:o.reported})}this.schedule()}pause(){clearTimeout(this.timer),this.timer=void 0,this.pending.clear()}schedule(){if(this.timer!==void 0)return;let e=1/0;for(const t of this.pending.values())t.reported||(e=Math.min(e,t.advancedAt+Za));Number.isFinite(e)&&(this.timer=setTimeout(()=>{var n;this.timer=void 0;const t=performance.now(),i=[];for(const s of this.pending.values())s.reported||t-s.advancedAt<Za||(s.reported=!0,i.push({...s.progress,id:this.labels.get(s.progress.id),file:(n=s.progress.id.match(/\/([^/"\\]+\.b3dm)/))==null?void 0:n[1],stalledMilliseconds:Math.round(t-s.advancedAt),waitingForReadiness:!s.progress.ready}));i.length>0&&console.warn("[shadow-simulation] corridors without progress for 20 seconds",JSON.stringify({corridors:i,scheduler:this.context})),this.schedule()},Math.max(0,e-performance.now())))}}class Bf{constructor(e){this.renderer=e,this.presentation=new Rc(e),this.scratch=new Nf(e,this.presentation)}presentation;scratch;captures=[];activeId=null;activeCapture=null;cursor=0;samples=1;disposed=!1;watchdog=new Ff;publicationRetries=new Map;restoreOpportunities=new Map;allocationKey="";allocations=new Map;plans=new Map;get memoryBytes(){return this.scratch.memoryBytes}get fallbackReason(){return this.presentation.supportsCapture?this.scratch.fallbackReason:"receivers"}get capturePages(){return this.captures.map(({page:e})=>e)}get pageProgress(){const e=this.scratch.pageProgress;return this.captures.map(({page:t,plan:i,ready:n})=>{const s=n&&this.presentation.has(t,this.samples),a=e.find(({id:o})=>o===t.id);return{id:t.id,samples:s?this.samples:(a==null?void 0:a.samples)??0,totalSamples:this.samples,ready:n,published:s,limited:i.limited,width:i.width,height:i.height}})}updateCaptures(e,t,i,n=!0){var h;const s=Ef(e),a=rs((h=i.options)==null?void 0:h.format),o=2*(a.bytesPerPixel/4+4)+2*a.accumulationBytesPerPixel/4+8,c=Math.max(1,Math.floor(Math.min(i.maxRenderTargetPixels??i.width*i.height,fi/2/o))),l=t.accumulationPages.map(v=>{const f=this.plans.get(v.id),y=(f==null?void 0:f.orientation)??s,T={groundTexelTargetMeters:v.groundTexelTargetMeters??1,maximumDimension:this.renderer.capabilities.maxTextureSize,maximumPixels:c},R=JSON.stringify([v.receiverBounds.min,v.receiverBounds.max,y.toArray(),T]),C=(f==null?void 0:f.inputs)===R?f.plan:Rf(v.receiverBounds,y,T);return this.plans.set(v.id,{inputs:R,plan:C,orientation:y}),C.camera.layers.mask=e.layers.mask,{page:v,plan:C}}),u=l.find(({page:v})=>{var f;return this.activeId===v.id&&((f=this.activeCapture)==null?void 0:f.page.id)===v.id&&this.activeCapture.page.contentKey===JSON.stringify([v.contentKey??v.revision,this.activeCapture.plan.key])}),d=u?this.activeCapture.plan:null,p=JSON.stringify(l.map(({page:v,plan:f})=>[v.id,f.key,v.screenBounds.z*v.screenBounds.w]));if(p!==this.allocationKey){const v=new Map(bf(l.filter(({page:f})=>f.id!==(u==null?void 0:u.page.id)).map(({page:f,plan:y})=>({id:f.id,plan:y,screenArea:f.screenBounds.z*f.screenBounds.w})),Kn-(d?d.width*d.height*8:0)));u&&d&&v.set(u.page.id,d),this.allocationKey=p,this.allocations=v}this.captures=l.map(({page:v,plan:f})=>{var C;const y=this.allocations.get(v.id)??f,T=JSON.stringify([v.contentKey??v.revision,y.key]),R=(!n||v.ready!==!1)&&(((C=i.isPageReady)==null?void 0:C.call(i,v.id))??!0);return{page:{...v,ready:R,captureKey:JSON.stringify([y.camera.quaternion.toArray(),y.width,y.height]),captureSize:{width:y.width,height:y.height},contentKey:T,revision:T,screenBounds:new te(0,0,1,1)},plan:y,ready:R}});const g=new Set(this.captures.map(({page:v})=>v.id));for(const v of this.plans.keys())g.has(v)||this.plans.delete(v);for(const[v,f]of this.publicationRetries){const y=this.captures.find(({page:T})=>T.id===v);(!y||y.page.contentKey!==f.contentKey)&&this.publicationRetries.delete(v)}this.presentation.beginFrame(this.capturePages);for(const{page:v,plan:f}of this.captures)this.presentation.prepareRestore(v,i.samples,new J().multiplyMatrices(f.camera.projectionMatrix,f.camera.matrixWorldInverse));i.active&&this.reportProgress()}reportProgress(){this.watchdog.enabled&&this.watchdog.observe(this.pageProgress,{activeId:this.activeId,memoryBytes:this.memoryBytes,fallbackReason:this.fallbackReason,publicationRetries:[...this.publicationRetries.entries()]})}yieldForRestore(e,t){if(!this.presentation.isRestorePending(e,t))return!1;const i=JSON.stringify([e.id,t]),n=e.contentKey??e.revision;if(this.restoreOpportunities.get(i)===n)return!1;if(this.restoreOpportunities.set(i,n),this.restoreOpportunities.size>1024){const s=this.restoreOpportunities.keys().next().value;s!==void 0&&this.restoreOpportunities.delete(s)}return!0}render(e,t,i){var p;if(this.disposed)return null;if(!i.active)return this.watchdog.pause(),null;if(this.samples=i.samples,this.updateCaptures(e,t,i),!this.presentation.supportsCapture)return this.scratch.releaseScratch(),this.activeId=null,null;const n=performance.now();let s,a=this.captures.find(({page:g})=>g.id===this.activeId);const o=a&&!a.ready&&this.captures.some(({page:g,ready:h})=>h&&g.id!==(a==null?void 0:a.page.id)&&!this.presentation.has(g,i.samples));if((!a||o||this.presentation.has(a.page,i.samples))&&(this.scratch.releaseScratch(!0),this.activeId=null,a=void 0),a){const g=this.publicationRetries.get(a.page.id);g&&g.retryAt>n&&(s=Math.ceil(g.retryAt-n))}if(!a&&this.captures.length>0)for(let g=0;g<this.captures.length;g+=1){const h=(this.cursor+g)%this.captures.length,v=this.captures[h];if(!v.ready||this.presentation.has(v.page,i.samples)||this.yieldForRestore(v.page,i.samples))continue;const f=this.publicationRetries.get(v.page.id);if(f&&f.retryAt>n){s=Math.min(s??1/0,Math.ceil(f.retryAt-n));continue}a=v,s=void 0,this.activeId=v.page.id,this.activeCapture=v,this.cursor=(h+1)%this.captures.length;break}let c=null;if(a!=null&&a.ready&&s===void 0){this.activeCapture=a;const{page:g,plan:h}=a,v=(f,y,T)=>t.renderPageSample(f,g.id,y,T,g.screenBounds);if(c=this.scratch.render(h.camera,{accumulationPages:[g],supportsOpaqueAccumulation:t.supportsOpaqueAccumulation,renderSample:v,renderPageSample:(f,y,T,R)=>v(f,T,R)},{...i,width:h.width,height:h.height,viewKey:h.key,visibilityOnly:!0,isPageReady:void 0,maxPagesPerFrame:i.maxPagesPerFrame??4}),c!=null&&c.settled)this.publicationRetries.delete(g.id),this.scratch.releaseScratch(!0),this.activeId=null;else if((c==null?void 0:c.retryAfterMs)!==void 0){const f=(((p=this.publicationRetries.get(g.id))==null?void 0:p.attempts)??0)+1;s=Math.max(250,c.retryAfterMs);const y=f>=3;y&&(s=Math.max(1e3,s)),this.publicationRetries.set(g.id,{contentKey:g.contentKey,attempts:y?0:f,retryAt:n+s}),y&&(this.scratch.releaseScratch(),this.activeId=null,this.captures.some(({page:T,ready:R})=>{var C;return R&&T.id!==g.id&&!this.presentation.has(T,i.samples)&&(((C=this.publicationRetries.get(T.id))==null?void 0:C.retryAt)??0)<=n})&&(s=void 0))}if(!c)return null}!this.activeId&&!this.captures.some(({page:g,ready:h})=>h&&!this.presentation.has(g,i.samples))&&this.scratch.releaseScratch();const l=this.pageProgress;this.reportProgress();const u=l.reduce((g,h)=>g+(h.published?i.samples:Math.min(h.samples,i.samples-1)),0),d=l.length*i.samples;return{progress:d>0?u/d:1,settled:d===u,needsRepaint:l.some(g=>g.ready&&!g.published)&&s===void 0,...s===void 0?{}:{retryAfterMs:s}}}renderHard(e,t,i){var I;if(this.disposed||!i.active)return{published:0,needsRepaint:!1};if(this.updateCaptures(e,t,{...i,samples:1},i.isPageReady===void 0),!t.supportsOpaqueAccumulation||!this.presentation.supportsCapture||!this.renderer.extensions.has("EXT_color_buffer_float"))return{published:0,needsRepaint:!1};const n=new Map(this.captures.map(({page:N})=>[N.id,this.presentation.getCapturedSize(N.id)])),s=this.captures.reduce((N,{page:E,plan:L})=>{const F=n.get(E.id);return N+Math.max(L.width*L.height,F?F.width*F.height:0)*8},0)>Kn,a=({page:N,plan:E})=>{const L=n.get(N.id);return L?(L.width*L.height-E.width*E.height)*8:0},o=this.captures.filter(({page:N,plan:E,ready:L})=>{if(!L)return!1;const F=n.get(N.id);return this.presentation.hasAtLeast(N,1)&&(!s||!F||F.width*F.height<=E.width*E.height)?!1:!(F&&F.samples>1&&!s&&(F.width!==E.width||F.height!==E.height)&&this.presentation.canReplay(N))});s&&o.sort((N,E)=>a(E)-a(N));const c=o.find(({page:N})=>!this.yieldForRestore(N,1));if(!c)return{published:0,needsRepaint:o.length>0};const{page:l,plan:u}=c;if(s&&this.presentation.hasAtLeast(l,1)&&a(c)>0){const N=n.get(l.id),E=Math.max(u.width,Math.ceil(N.width/2))*Math.max(u.height,Math.ceil(N.height/2))*8;if(this.memoryBytes+E>fi)return{published:0,needsRepaint:!1,retryAfterMs:1e3};try{const L=this.presentation.downsample(l,u.width,u.height);return{published:L?1:0,needsRepaint:L,...L?{}:{retryAfterMs:1e3}}}catch{return{published:0,needsRepaint:!1,retryAfterMs:1e3}}}if(this.memoryBytes+u.width*u.height*16>fi)return{published:0,needsRepaint:!1,retryAfterMs:1e3};const d=this.renderer,p=d.getRenderTarget(),g=d.getActiveCubeFace(),h=d.getActiveMipmapLevel(),v=d.getViewport(new te),f=d.getScissor(new te),y=d.getScissorTest(),T=d.autoClear,R=d.getClearColor(new ke),C=d.getClearAlpha(),b=new je(u.width,u.height,{type:yt,format:Yt,minFilter:Ae,magFilter:Ae,samples:0,depthTexture:new Zt(u.width,u.height,Ot)});try{d.initRenderTarget(b),d.autoClear=!1,d.setRenderTarget(b),d.setViewport(new te(0,0,u.width,u.height)),d.setScissorTest(!1),d.setClearColor(0,0),d.clear(!0,!0,!1);const E=t.renderPageSample(u.camera,l.id,0,1,l.screenBounds)&&this.presentation.publish(b,b,u.camera,l,1);return{published:E?1:0,needsRepaint:E&&o.length>1,...E?{}:{retryAfterMs:1e3}}}catch(N){return console.warn("[shadow-simulation] retaining completed corridor after hard-stage capture failure",N),{published:0,needsRepaint:!1,retryAfterMs:1e3}}finally{d.setRenderTarget(p,g,h),d.setViewport(v),d.setScissor(f),d.setScissorTest(y),d.setClearColor(R,C),d.autoClear=T,(I=b.depthTexture)==null||I.dispose(),b.dispose()}}pausePending(){this.watchdog.pause()}cancelPending(){this.watchdog.pause(),this.activeId!==null&&this.scratch.releaseScratch(),this.activeId=null,this.publicationRetries.clear(),this.restoreOpportunities.clear()}dispose(){this.disposed||(this.disposed=!0,this.watchdog.pause(),this.scratch.dispose(),this.presentation.dispose(),this.captures=[],this.plans.clear(),this.allocations=new Map,this.publicationRetries.clear(),this.restoreOpportunities.clear())}}const Uf=750,Hf=5e3,Ja=new Set,zf=r=>{const e=ml({assetUrl:r,production:!0});let t=null,i=!1,n=!1,s=0,a=null;const o=()=>{if(t&&(t.onmessage=null,t.onerror=null,t.onmessageerror=null,t.terminate(),t=null),a){const d=a;a=null,clearTimeout(d.timer),d.finish(null)}},c=()=>{n=!0,o()},l=(d,p=[])=>{if(!e||i||n||a||typeof Worker>"u")return Promise.resolve(null);try{return t||(t=new Worker(new URL("https://cismet.github.io/carma-pr-deployments/812/geoportal/assets/shadow-corridor-cache.worker-BGnqjqO2.js",import.meta.url),{type:"module"}),t.onerror=c,t.onmessageerror=c,t.onmessage=g=>{var v;if(!a||((v=g.data)==null?void 0:v.id)!==a.id)return;const h=a;a=null,clearTimeout(h.timer),h.finish(g.data)}),new Promise(g=>{const h=setTimeout(c,d.operation===li.read?Uf:Hf);a={id:d.id,timer:h,finish:g};try{t.postMessage(d,p)}catch{c()}})}catch{return c(),Promise.resolve(null)}},u={cancelPending:o,get enabled(){return!!(e&&!i&&!n&&typeof Worker<"u")},get busy(){return a!==null},async read(d){const p=Ge(d);if(!p)return null;const g=await l({id:++s,producerAssetUrl:e??"",identity:d,operation:li.read}),h=g==null?void 0:g.record;return!i&&(h==null?void 0:h.schema)===bi.schema&&Ge(h.identity)===p&&Ka(h)?h:null},async write(d,p,g){if(!Ge(d)||!Ka(p))return!1;const h=[p.visibility,p.depth];if(h.some(f=>!(f.buffer instanceof ArrayBuffer)||f.byteOffset!==0||f.byteLength!==f.buffer.byteLength))return!1;const v=await l({id:++s,producerAssetUrl:e??"",identity:d,operation:li.write,capture:p,costs:g},[...new Set(h.map(f=>f.buffer))]);return!i&&(v==null?void 0:v.written)===!0},async writePacked(d,p,g){if(!Ge(d)||!Af(p)||!(p.rgba.buffer instanceof ArrayBuffer)||p.rgba.byteOffset!==0||p.rgba.byteLength!==p.rgba.buffer.byteLength)return!1;const h=await l({id:++s,producerAssetUrl:e??"",identity:d,operation:li.writePacked,capture:p,costs:g},[p.rgba.buffer]);return!i&&(h==null?void 0:h.written)===!0},dispose(){i=!0,o(),Ja.delete(u)}};return Ja.add(u),u};class kf{constructor(e,t,i){this.scene=e,this.renderer=t,this.host=i,this.frameCache=new Gl(t),this.pages=new _f(e,t,i.maximumMapSize**2*8*2,i.maximumMapSize,i.frame),this.accumulation=new Bf(t),i.worldBasis&&i.corridorRevision&&i.dateTimeKey&&this.accumulation.presentation.setPersistence({cache:this.persistentCache,identity:(n,s)=>{var u,d,p;const a=this.pages.getPageGeometry(n.id),o=(u=i.dateTimeKey)==null?void 0:u.call(i);if(!a||!o||!n.captureKey)return null;const c=s===1?(d=i.receiverStageError)==null?void 0:d.call(i,n.receiverBounds):void 0,l=(p=i.corridorRevision)==null?void 0:p.call(i,a.casterBounds,c,n.receiverBounds);return l?{source:"shared-scene-corridor-v2",dateTime:o,corridor:n.id,resolution:JSON.stringify([a.width,a.height,n.captureKey]),geometryFingerprint:l,samples:s}:null},worldBasis:i.worldBasis,runIdleRender:i.runIdleRender,requestRepaint:i.requestRepaint})}pages;viewKey="";idleStats=null;accumulation;persistentCache=zf(import.meta.url);accumulationSettled=!1;viewport=new bt(1,1);lastFrame=null;frameCache;presentedPageIds=new Set;casterRevisionsDirty=!0;casterRevisionCursor=0;hardRetryTimer=null;update(e,t,i,n,s=t.renderCamera){this.viewport.copy(t.viewport);const a=JSON.stringify([e.map(({id:o,bounds:c,receiverObjectId:l})=>[o,c.min,c.max,l]),s.projectionMatrix.elements,s.matrixWorldInverse.elements,t.viewport,i,n]);a!==this.viewKey&&(this.pages.setView(e,s,t.viewport,n,i,this.host.receiverBiasLimit),this.viewKey=a,this.casterRevisionsDirty=!0,this.casterRevisionCursor=0)}updatePresentation(e,t=e.renderCamera){this.viewport.copy(e.viewport),this.pages.updatePresentation(t)}invalidateContent(e){(e==null?void 0:e.length)!==0&&(this.casterRevisionsDirty=!0,this.casterRevisionCursor=0,this.frameCache.invalidate(),e?e.length>0&&this.pages.invalidateCasters(e):this.pages.clearCache())}async prewarm({cells:e,frame:t,lighting:i,targetPixels:n,samples:s,prepare:a,signal:o,yieldToInput:c=Tf,planningCamera:l}){if(o.aborted)return null;this.idleStats=null,this.pages.setPrewarmView(e,l??t.renderCamera,t.viewport,n,i,s);try{return this.idleStats=await xf({pages:this.pages.prewarmPages,signal:o,prepare:a,yieldToInput:c,render:(u,d,p)=>{if(d!=null&&d.parent)throw new Error("Idle caster lease must own an unmounted group");const g=this.host.light.visible;this.host.light.visible=!1,d&&this.scene.add(d);try{let h=null;const v=()=>{h=this.pages.prewarmNext(t.renderCamera,u,{signal:p})};return this.host.runIdleRender?this.host.runIdleRender(v):v(),h??{pageId:u,rendered:0,cachedSamples:0,totalSamples:s,complete:!1,budgetLimited:!1,aborted:!0}}finally{d&&this.scene.remove(d),this.host.light.visible=g}}}),this.idleStats}finally{this.pages.clearPrewarmView()}}renderProgressive(e,t){if(this.lastFrame=t,!t.active)return this.pausePending(),null;if(this.pages.accumulationPages.length===0)return this.accumulationSettled=!1,null;const i=this.renderWithHost(e,()=>{const a=this.captureHard(e);if(this.casterRevisionsDirty&&this.host.corridorRevision)return null;const o=this.accumulation.presentation.capture(this.scene,()=>this.accumulation.render(e,this.pages,{...t,visibilityOnly:!0,maxPagesPerFrame:Math.min(t.samples,64),maxFrameCpuMilliseconds:t.maxFrameCpuMilliseconds??2,isPageReady:c=>this.isPageReady(c,!1)}));return o&&this.renderContent(e,null,t.samples),o&&{...o,settled:o.settled&&!a.needsRepaint,needsRepaint:o.needsRepaint||a.needsRepaint}});if(!i)return this.accumulationSettled=!1,null;const n="retryAfterMs"in i?i.retryAfterMs:void 0;n!==void 0&&this.hardRetryTimer===null&&(this.hardRetryTimer=globalThis.setTimeout(()=>{var a,o;this.hardRetryTimer=null,(o=(a=this.host).requestRepaint)==null||o.call(a)},Math.max(1,n)));const s=i.settled&&!this.accumulationSettled;return this.accumulationSettled=i.settled,{...i,settled:s}}render(e,t,i,n=!0){return this.pages.accumulationPages.length===0?!1:(this.renderWithHost(e,()=>{n&&this.captureHard(e),this.renderContent(e,t,i,!n)}),!0)}cancelPending(e=!1){this.accumulation.cancelPending(),e&&this.accumulation.presentation.beginSolarTransition(),this.pausePending()}pausePending(){this.accumulation.pausePending(),this.hardRetryTimer!==null&&(globalThis.clearTimeout(this.hardRetryTimer),this.hardRetryTimer=null),this.accumulationSettled=!1}isPageReady(e,t){var n,s;const i=this.pages.getPageGeometry(e);return i?!this.host.isCorridorReady||this.host.isCorridorReady(i.casterBounds,t?(s=(n=this.host).receiverStageError)==null?void 0:s.call(n,i.receiverBounds):void 0,i.receiverBounds):!1}captureHard(e){var i,n,s,a,o,c;if(this.casterRevisionsDirty&&this.host.corridorRevision){const l=this.pages.accumulationPages,u=performance.now();let d=0;for(;this.casterRevisionCursor<l.length;){if(d>=4||d>0&&performance.now()-u>=4)return(n=(i=this.host).requestRepaint)==null||n.call(i),{published:0,needsRepaint:!0};const p=l[this.casterRevisionCursor++];d+=1;const g=this.pages.getPageGeometry(p.id);if(!g)continue;const h=this.host.corridorRevision(g.casterBounds,(a=(s=this.host).receiverStageError)==null?void 0:a.call(s,g.receiverBounds),g.receiverBounds);this.pages.setCasterRevision(p.id,h)&&this.frameCache.invalidate()}this.casterRevisionsDirty=!1,this.casterRevisionCursor=0}const t=this.accumulation.presentation.capture(this.scene,()=>{var l;return this.accumulation.renderHard(e,this.pages,{...this.lastFrame,width:this.viewport.x,height:this.viewport.y,viewKey:this.viewKey,styleEpoch:((l=this.lastFrame)==null?void 0:l.styleEpoch)??0,samples:1,active:!0,isPageReady:u=>this.isPageReady(u,!0)})});return t.needsRepaint&&((c=(o=this.host).requestRepaint)==null||c.call(o)),t.retryAfterMs!==void 0&&this.hardRetryTimer===null&&(this.hardRetryTimer=globalThis.setTimeout(()=>{var l,u;this.hardRetryTimer=null,(u=(l=this.host).requestRepaint)==null||u.call(l)},t.retryAfterMs)),t}renderContent(e,t,i,n=!1){var u,d,p,g,h;const s=this.accumulation.capturePages;this.accumulation.presentation.beginFrame(s);const a=s.map(v=>{const f=this.accumulation.presentation.canPresent(v);return{page:v,replay:f,ready:f||(!this.host.corridorRevision||!this.casterRevisionsDirty)&&this.isPageReady(v.id,!0)}});let o=!1;const c=()=>{this.presentedPageIds.clear();const v=this.host.light.visible,f=t===null&&a.some(({replay:y})=>y);this.host.light.visible=!0;try{let y=new Set;t===null?y=this.accumulation.presentation.renderNative(this.scene,a.filter(T=>T.replay).map(T=>T.page),()=>this.renderer.render(this.scene,e)):this.renderer.render(this.scene,e);for(const{page:T,replay:R,ready:C}of a){if(!C)continue;if(y.has(T.id)){this.presentedPageIds.add(T.id);continue}if(t===null&&!R){this.presentedPageIds.add(T.id);continue}if(n&&!R){this.presentedPageIds.add(T.id);continue}const b=n||f&&R;this.host.light.visible=b,this.accumulation.presentation.render(this.scene,T,i,()=>b?this.pages.renderPageColor(e,T.id):this.pages.renderPageSample(e,T.id,t??0,t===null?1:i))?this.presentedPageIds.add(T.id):o=!0}}finally{this.host.light.visible=v}};if((u=this.lastFrame)!=null&&u.active&&t===null&&this.accumulation.presentation.supportsCapture){const v=JSON.stringify([this.viewKey,e.projectionMatrix.elements,e.matrixWorldInverse.elements,e.layers.mask,this.lastFrame.styleEpoch,((p=(d=this.host).visualEpoch)==null?void 0:p.call(d))??0,this.accumulation.presentation.revision,a.map(({page:f,replay:y,ready:T})=>[f.id,f.contentKey??f.revision,y,T])]);this.frameCache.render(v,this.lastFrame.width,this.lastFrame.height,c),o&&this.frameCache.invalidate()}else this.frameCache.invalidate(),c();const l=a.filter(({page:v,replay:f})=>this.presentedPageIds.has(v.id)&&(this.accumulation.presentation.hasAtLeast(v,1)||!f&&(t===null||i===1))).map(({page:v})=>v);l.length>0&&((h=(g=this.host).onPresentedPages)==null||h.call(g,l,s))}renderWithHost(e,t){const{renderer:i,host:n}=this,s=n.light.visible,a=n.sky.visible,o=n.overlay.visible,c=i.autoClear;n.light.visible=!1,i.autoClear=!1;try{a&&this.renderHostObject(n.sky,e),n.sky.visible=!1,n.overlay.visible=!1;const l=t();return l!==null&&o&&(n.overlay.visible=!0,this.renderHostObject(n.overlay,e)),l}finally{i.autoClear=c,n.light.visible=s,n.sky.visible=a,n.overlay.visible=o}}renderHostObject(e,t){const i=this.scene.children.filter(n=>n!==e&&n.visible);for(const n of i)n.visible=!1;try{this.renderer.render(this.scene,t)}finally{for(const n of i)n.visible=!0}}get pageLevels(){return this.pages.pageLevels}get stats(){return{...this.pages.stats,framePresentation:this.frameCache.stats,corridorAccumulation:{retained:this.accumulation.presentation.stats,pageSamples:this.accumulation.pageProgress,memoryBytes:this.accumulation.memoryBytes,fallbackReason:this.accumulation.fallbackReason},...this.idleStats?{idlePrewarm:this.idleStats}:{},...this.host.auditCorridors?{corridorAudit:this.host.auditCorridors(this.pages.accumulationPages.flatMap(e=>{const t=this.pages.getPageGeometry(e.id);return t?[{id:e.id,casterBounds:t.casterBounds,receiverBounds:t.receiverBounds}]:[]}))}:{}}}dispose(){this.hardRetryTimer!==null&&globalThis.clearTimeout(this.hardRetryTimer),this.hardRetryTimer=null,this.accumulation.dispose(),this.frameCache.dispose(),this.persistentCache.dispose(),this.pages.dispose()}}function Vf(){const r=new WeakSet;return e=>{let t=!1;for(const i of e)if(!(!i.providesTerrain||!i.hasRenderableContent)&&(t=!0,r.has(i)||i.hasRenderableContent()))return r.add(i),!1;return t}}const bn=(r,e,t)=>JSON.stringify([r.min.toArray(),r.max.toArray(),e,t==null?void 0:t.min.toArray(),t==null?void 0:t.max.toArray()]),Wf=(r,e)=>{const t=new Map(r.map(s=>[s.id,s])),i=[],n=s=>i.push(new Oe(new x(...s.minimum),new x(...s.maximum)));for(const s of e){const a=t.get(s.id);a&&s.minimum.every((c,l)=>c===a.minimum[l])&&s.maximum.every((c,l)=>c===a.maximum[l])||(a&&n(a),n(s)),t.delete(s.id)}for(const s of t.values())n(s);return i},Gf=(r,e,t)=>{const i=new Set(t.map(({id:n})=>n));return r.filter(n=>{if(n.loadReason===$t.SHADOW)return!1;const s=e.filter(({bounds:a})=>n.minimum[0]<a.max.x&&n.maximum[0]>a.min.x&&n.minimum[2]<a.max.z&&n.maximum[2]>a.min.z);return s.length>0&&s.every(({id:a})=>i.has(a))}).map(({id:n})=>n)},jf=(r,e,t)=>{if(![r,e,t].every(Number.isFinite)||t<=0)throw new RangeError("Invalid shared-scene Mercator basis");return new J().set(t,0,0,r,0,0,t,e,0,t,0,0,0,0,0,1)},eo=(r,e,t)=>fl(e.reduce((i,n)=>{if(n.loadReason===$t.SHADOW)return i;const[s,,a]=n.minimum,[o,,c]=n.maximum;return s<r.max.x&&o>r.min.x&&a<r.max.z&&c>r.min.z&&Number.isFinite(n.errorPixels)?Math.max(i,n.errorPixels):i},t),t),Yf=({stageErrorPixels:r,targetErrorPixels:e,groundTexelTargetMeters:t,finalBiasMeters:i,maximumCoarseBiasMeters:n,metersPerPixel:s=0})=>{const a=Math.max(i,Math.min(n,Math.max(0,s)*.1)),o=Math.max(1,Math.min(n/i,r/Math.max(e,.25)));return Math.max(a,Math.min(n,i*o,Math.max(i,t*2)))},qf=({id:r,casterBounds:e,sunElevationDegrees:t,regions:i,volumes:n})=>{const s=new Set(i.flatMap(u=>u.selectedTileIds)),a=new Map(n.map(u=>[u.id,u])),o=[],c=[];let l=0;for(const u of s){const d=a.get(u);if(!d){o.push(u);continue}d.loadReason===$t.SHADOW&&(l+=1),e.intersectsBox(new Oe(new x(...d.minimum),new x(...d.maximum)))||c.push(u)}return{id:r,ready:i.length>0&&i.every(u=>u.ready),selectedTiles:s.size,offscreenTiles:l,reviewCount:t>=10&&s.size>10,nearHorizon:t<10,exactPrismTested:i.length>0&&i.every(u=>u.receiverPrismTested),visitedNodes:i.reduce((u,d)=>u+d.visitedNodes,0),broadPhaseNodes:i.reduce((u,d)=>u+d.broadPhaseNodes,0),rejectedPrismNodes:i.reduce((u,d)=>u+d.rejectedPrismNodes,0),missingPublishedVolumes:o,outsideEnvelope:c,selectedTileIds:[...s].sort()}},Kf=1024,Xf=2048,$f=4096,Qf=1e6,Zf=2e6,to=(r,e=gl())=>{const t=Math.max(256,Math.floor(r)),i=pl(e);return i===$s.PHONE?{maxShadowMapSize:Math.min(t,Kf),maxAccumulationPixels:Qf}:i===$s.TABLET?{maxShadowMapSize:Math.min(t,Xf),maxAccumulationPixels:Zf}:{maxShadowMapSize:Math.min(t,$f),maxAccumulationPixels:Number.POSITIVE_INFINITY}},Jf=(r,e)=>{if(r===Number.POSITIVE_INFINITY)return r;const t=rs(e.format),i=e.msaaSamples??bo.msaaSamples,n=2*(t.bytesPerPixel+4)*(1+Math.max(0,i))+3*t.accumulationBytesPerPixel;return Math.min(r,Math.floor(256*1024*1024/n))},ro=(r,e=is,t=2560*1440,i=1)=>Math.floor(Math.max(256**2,Math.min(r**2,Dt[e].depthSize**2*(Number.isFinite(t)&&t>0?t/(2560*1440):1)*i**2))),io=new WeakMap,ep=r=>{const e=io.get(r);if(e)return e;const t=r.getContext(),i=t.getInternalformatParameter(t.RENDERBUFFER,t.DEPTH_COMPONENT24,t.SAMPLES),n=a=>[0,...Array.from(t.getInternalformatParameter(t.RENDERBUFFER,a,t.SAMPLES)).filter(o=>i.includes(o))],s={maxTextureSize:r.capabilities.maxTextureSize,maxRenderbufferSize:t.getParameter(t.MAX_RENDERBUFFER_SIZE),hdrSamples:n(t.RGBA16F),sdrSamples:n(t.RGBA8)};return io.set(r,s),s},tp=(r,e)=>{if(r.shadowBufferFormat===jt.HDR_32)return 0;const t=r.shadowMsaaSamples===vl?1/0:r.shadowMsaaSamples;return Math.max(0,...e.filter(i=>Number.isFinite(i)&&i<=t))},wt=new WeakMap,Ec=r=>{let e=wt.get(r);return e||(e={snapshot:null,listeners:new Set,demandListeners:new Set},wt.set(r,e)),e},ig=r=>{var e;return((e=wt.get(r))==null?void 0:e.snapshot)??null},ng=(r,e)=>{const t=Ec(r),i=t.listeners.size===0;if(t.listeners.add(e),i)for(const n of t.demandListeners)n(!0);return()=>{if(!(!t.listeners.delete(e)||t.listeners.size>0)){t.snapshot=null;for(const n of t.demandListeners)n(!1);t.demandListeners.size===0&&wt.delete(r)}}},rp=(r,e)=>{const t=Ec(r);return t.demandListeners.add(e),t.listeners.size>0&&e(!0),()=>{t.demandListeners.delete(e),t.listeners.size===0&&t.demandListeners.size===0&&wt.delete(r)}},Xn=r=>{var e;return(((e=wt.get(r))==null?void 0:e.listeners.size)??0)>0},sg=(r,e)=>{const t=wt.get(r);if(t!=null&&t.listeners.size){t.snapshot=e;for(const i of t.listeners)i()}},Rn=r=>{const e=wt.get(r);if(e){e.snapshot=null;for(const t of e.listeners)t();e.listeners.size===0&&e.demandListeners.size===0&&wt.delete(r)}};let $n;const ag=r=>{$n=r},ip=(...r)=>{const[e]=r;let t,i=!1,n=!1,s=null;const a=()=>{if(!(n||!Xn(e)))return!t&&$n&&(t=$n(...r)),!t&&!i&&(i=!0,Fr(()=>import("./shadow-projection-debug-publisher-BeTsjeXk.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10])).then(o=>{n||!Xn(e)||(t=o.createShadowProjectionDebugPublisher(...r),t.setSnapshot(s),t.publish())}).catch(o=>{n||console.error("Unable to load shadow diagnostics",o)}).finally(()=>{i=!1})),t};return{publish:()=>{var o;return(o=a())==null?void 0:o.publish()},setSnapshot(o){var c;s=o,(c=a())==null||c.setSnapshot(o)},markStale:()=>{var o;return(o=a())==null?void 0:o.markStale()},reset(){s=null,t==null||t.reset()},dispose(){n=!0,s=null,t==null||t.dispose()}}},no=.01,np=500,En=1500,An=(r=is)=>({lastFrameMs:null,sampleDurationMs:0,sampleCount:0,recoveryDurationMs:0,updateIntervalMs:Dt[r].targetFps?1e3/Dt[r].targetFps:0,targetFrameMs:Dt[r].targetFps?1e3/Dt[r].targetFps:0,depthScale:1,trial:null,adaptationBlocked:!1}),Cn=(r,e,t,{enabled:i=!0,allowCadenceReduction:n=!0}={})=>{var v,f;if(r.targetFrameMs===0)return r;if(!i)return r.lastFrameMs===null&&r.updateIntervalMs===r.targetFrameMs&&r.depthScale===1&&!r.adaptationBlocked?r:{...r,lastFrameMs:null,sampleDurationMs:0,sampleCount:0,recoveryDurationMs:0,updateIntervalMs:r.targetFrameMs,depthScale:1,trial:null,adaptationBlocked:!1};if(!t||!Number.isFinite(e))return r.lastFrameMs===null?r:{...r,lastFrameMs:null,sampleDurationMs:0,sampleCount:0,recoveryDurationMs:0,depthScale:1,trial:null,adaptationBlocked:!1};const s=r.lastFrameMs===null?0:e-r.lastFrameMs;if(s<=0)return{...r,lastFrameMs:e};const a=r.sampleDurationMs+s,o=r.sampleCount+1;if(a<np)return{...r,lastFrameMs:e,sampleDurationMs:a,sampleCount:o};const c=a/o,l=r.targetFrameMs;if(r.trial&&c>=r.trial.baselineFrameMs*.95||r.adaptationBlocked)return{...r,lastFrameMs:e,sampleDurationMs:0,sampleCount:0,trial:null,adaptationBlocked:!0,updateIntervalMs:((v=r.trial)==null?void 0:v.updateIntervalMs)??r.updateIntervalMs,depthScale:((f=r.trial)==null?void 0:f.depthScale)??r.depthScale};const p=c<l/1.2?r.recoveryDurationMs+a:0,g=n?c>l+no?Math.min(l*4,r.updateIntervalMs+l):p>=En?Math.max(l,r.updateIntervalMs-l):r.updateIntervalMs:l,h=c>l+no&&(!n||r.updateIntervalMs>=l*4)?Math.max(.5,r.depthScale-.25):p>=En?Math.min(1,r.depthScale+.25):r.depthScale;return{...r,lastFrameMs:e,sampleDurationMs:0,sampleCount:0,recoveryDurationMs:p>=En?0:p,updateIntervalMs:g,depthScale:h,trial:g>r.updateIntervalMs||h<r.depthScale?{baselineFrameMs:c,updateIntervalMs:r.updateIntervalMs,depthScale:r.depthScale}:null,adaptationBlocked:!1}},so=4e3,Ac=(r,e,t)=>{r.updateMatrixWorld(!0),t==null||t.updateMatrixWorld(!0);const i=t?new Lr().setFromProjectionMatrix(new J().multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),t.coordinateSystem,t.reversedDepth):null;let n=e,s=e;const a=new Oe;return r.traverseVisible(o=>{var l,u;const c=o;c.userData[pi.OVERLAY]||!c.isMesh&&!c.isInstancedMesh||!((u=(l=c.geometry)==null?void 0:l.getAttribute("position"))!=null&&u.count)||(c.geometry.boundingBox||c.geometry.computeBoundingBox(),c.geometry.boundingBox&&(a.copy(c.geometry.boundingBox).applyMatrix4(c.matrixWorld),!(i&&!i.intersectsBox(a))&&(n=Math.min(n,a.min.y),s=Math.max(s,a.max.y))))}),[n,s]},sp=(r,e,t,i)=>{var o;const n=e.filter(c=>c.providesTerrain).flatMap(c=>{var u;const l=(u=c.getViewElevationRange)==null?void 0:u.call(c,t);return l?[l]:[]});if(n.length>0)return[Math.min(...n.map(c=>c[0])),Math.max(...n.map(c=>c[1]))];let[s,a]=Ac(r,i,t);for(const c of e){const l=(o=c.getViewElevationRange)==null?void 0:o.call(c,t);l&&(s=Math.min(s,l[0]),a=Math.max(a,l[1]))}return[s,a]},ap=[[-1,-1],[-1,1],[1,-1],[1,1]],op=[[0,1],[1,3],[3,2],[2,0],[4,5],[5,7],[7,6],[6,4],[0,4],[1,5],[2,6],[3,7]],cp=(r,e,t,i)=>{r.updateMatrixWorld(!0);const n=Math.min(e,t),s=Math.max(e,t),a=[-1,1].flatMap(c=>ap.map(([l,u])=>new x(l,u,c).unproject(r))),o=a.filter(c=>c.y>=n&&c.y<=s).map(c=>c.clone());for(const[c,l]of op){const u=a[c],d=a[l],p=d.y-u.y;if(!(Math.abs(p)<=Number.EPSILON))for(const g of[n,s]){const h=(g-u.y)/p;h<0||h>1||o.push(u.clone().lerp(d,h))}}for(const c of o){const l=c.clone().sub(i),u=Math.hypot(l.x,l.z);if(u<=so)continue;const d=so/u;l.x*=d,l.z*=d,c.copy(i).add(l)}return o},lp=`
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
`,ao="float getShadow( sampler2DShadow shadowMap,",In="#elif defined( SHADOWMAP_TYPE_VSM )",up=()=>{const r=On.shadowmap_pars_fragment;if(!r.includes(ao)||!r.includes(In))throw new Error("Three PCF shader changed; validate receiver-plane shadow integration");return`uniform bool carmaReceiverPlaneShadow;
${r.replace(ao,"float carmaOriginalGetShadow( sampler2DShadow shadowMap,").replace(In,`${lp}
${In}`)}`},oo=new WeakMap,dp=(r,e)=>{const t=oo.get(r);if(t)return e!==void 0&&t.value!==e&&(t.value=e,r.needsUpdate=!0),t;const i={value:e??!1},n=r.onBeforeCompile,s=r.customProgramCacheKey(),a=up();return r.onBeforeCompile=function(o,c){n.call(this,o,c),o.uniforms.carmaReceiverPlaneShadow=i,o.fragmentShader=o.fragmentShader.replace("#include <shadowmap_pars_fragment>",a)},r.customProgramCacheKey=()=>`${s}|carma-receiver-plane-pcf-v3|${i.value?"mesh":"stock"}`,r.needsUpdate=!0,oo.set(r,i),i},Cc=(r,e=!1)=>{if(r.userData[pi.OVERLAY])return;r.castShadow=r.userData.disableShadowCasting!==!0;const t=Array.isArray(r.material)?r.material:[r.material];if(r.receiveShadow=t.some(i=>i.visible&&i.colorWrite),!r.userData.isShadowTerrainSurface)for(const i of t)i.shadowSide??(i.shadowSide=To),dp(i,e)},br=(r,e=!1)=>{r.traverseVisible(t=>{const i=t;!i.isMesh&&!i.isInstancedMesh||Cc(i,e)})},hp=r=>r.visible&&r.opacity>0,mp=(r,e)=>{let t=r;for(;t&&t!==e;){if(!t.visible)return!1;t=t.parent}return(Array.isArray(r.material)?r.material:[r.material]).some(hp)},co=r=>{r.traverse(e=>{const t=e;if(!t.isMesh&&!t.isInstancedMesh)return;const i=Array.isArray(t.material)?t.material:[t.material];for(const n of i)n.dispose()})},fp=(r,e)=>{const t=e.uniformColor!==null&&Ye(e.uniformColorMix??1,0,1)>=1;r.traverse(i=>{const n=i;if(!n.userData.isBuilding)return;const s=Array.isArray(n.material)?n.material:[n.material];for(const a of s){e.fullOpacity&&(a.opacity=1,a.transparent=!1,a.depthWrite=!0);const o=a;t&&e.uniformColor&&o.color&&(o.color.set(e.uniformColor),o.vertexColors=!1),a.needsUpdate=!0}})},pp=(r,e,t)=>{var d;const i=(d=e._originMerc)==null?void 0:d.toLngLat();if(!i)return null;const n=new ns;n.name=`shadow-simulation-copy-${e.id}`;const s=new Map;let a=t,o=!1;const c=()=>{for(const[p,g]of s)p.visible=g;s.clear()},l=()=>{if(o)return;c(),co(n),n.clear(),e.scene.updateMatrixWorld(!0);const p=[];e.scene.traverse(g=>{var v,f;const h=g;!h.isMesh&&!h.isInstancedMesh||(f=(v=h.geometry)==null?void 0:v.getAttribute("position"))!=null&&f.count&&mp(h,e.scene)&&p.push(h)});for(const g of p){const h=g.clone(!1);h.name=`${g.name||"mesh"}-shadow-simulation-copy`,h.visible=!0,h.matrixAutoUpdate=!1,h.matrix.copy(g.matrixWorld),h.material=Array.isArray(g.material)?g.material.map(v=>v.clone()):g.material.clone(),Cc(h),s.set(g,g.visible),g.visible=!1,n.add(h)}n.visible=n.children.length>0,fp(n,a)},u={id:`shadow-simulation-generic-${e.id}`,originLngLat:[i.lng,i.lat],root:n,update:()=>{},dispose:()=>{o||(o=!0,c(),co(n),n.clear())}};return l(),n.visible?(r.addRuntime(u),{runtime:u,sync:l,updateBuildingAppearance(p){a=p,l()}}):(u.dispose(),null)},Ic=2500,Dc=.5,gp="shadow-simulation-sky-light",vp=r=>{const e=new Oe().setFromObject(r.scene);e.isEmpty()?r.center.set(0,0,0):e.getCenter(r.center)},yp=(r,e,t,i)=>{const n=new Tc(e),a=n.lights[0].target,o=new ns;o.visible=!1,o.userData[pi.OVERLAY]=!0;const c=new xo(void 0,0);c.name=gp;const l=of(i);l.mesh.userData[pi.OVERLAY]=!0;const u=new Map;r.traverse(p=>{const g=p;g.isAmbientLight&&u.set(g,g.intensity)});const d={scene:r,frame:e,controller:n,skyLight:c,atmosphericSky:l,ambientLightIntensities:u,lightTarget:a,sunVector:null,sunVectorRoot:o,center:new x,shadowCameraOffsetMeters:Math.max(Ic,t*1.5),shadowAreaMeters:t,sunVectorLengthMeters:t*Dc,sunVectorVisible:!1,shadowQuality:is,shadowIntensity:1,directionToSun:new x(0,1,0),sunColor:new ke(16773848),sunIntensity:Vr,receiverWorldPoints:[],minimumElevationMeters:0,maximumElevationMeters:0,dirty:!0};return br(r),vp(d),r.add(c),r.add(l.mesh),d},Sp=(r,e)=>{r.scene.traverse(i=>{const n=i;n.isAmbientLight&&!r.ambientLightIntensities.has(n)&&r.ambientLightIntensities.set(n,n.intensity)});const t=e.skyIrradianceCoefficients;if((t==null?void 0:t.length)===r.skyLight.sh.coefficients.length){t.forEach((i,n)=>{r.skyLight.sh.coefficients[n].copy(i)}),r.skyLight.intensity=Vr;for(const i of r.ambientLightIntensities.keys())i.intensity=0;return}r.skyLight.sh.zero(),r.skyLight.intensity=0;for(const[i,n]of r.ambientLightIntensities)i.intensity=n},lo=(r,e,t=16773848,i,n=!0)=>{var a;const s=e.clone().normalize();r.directionToSun.copy(s),r.sunColor.set(t),r.lightTarget.position.copy(r.center);for(const o of r.controller.lights)o.target.position.copy(r.center),o.position.copy(s).multiplyScalar(r.shadowCameraOffsetMeters).add(r.center),o.color.copy(r.sunColor);(a=r.sunVector)==null||a.update(r.center,s,r.sunVectorLengthMeters),r.sunVectorRoot.visible=r.sunVectorVisible&&!!r.sunVector,r.sunIntensity=i??Vr;for(const o of r.controller.lights)o.intensity=r.sunIntensity;r.lightTarget.updateMatrixWorld(!0);for(const o of r.controller.lights)o.updateMatrixWorld(!0);n&&(r.controller.invalidate(),r.dirty=!0)},wp=r=>{var e;for(const[t,i]of r.ambientLightIntensities)t.intensity=i;r.scene.remove(r.skyLight),r.scene.remove(r.atmosphericSky.mesh),r.sunVectorRoot.removeFromParent(),(e=r.sunVector)==null||e.dispose(),r.atmosphericSky.dispose(),r.controller.dispose()},_p={[ze.STANDARD]:0,[ze.HIGH]:1,[ze.MAX]:1,[ze.ULTRA]:1,[ze.EXTREME]:1},xp=128,Tp={[ze.STANDARD]:0,[ze.HIGH]:0,[ze.MAX]:1,[ze.ULTRA]:2,[ze.EXTREME]:3},Mp=(r,e,t,i)=>{var u,d;const n=r==null?void 0:r.tileManager;if(!r||!n||!Number.isFinite(n.deltaZoom)||!Number.isFinite(n.tileSize)||!n.tileManager)return()=>{};const s={deltaZoom:n.deltaZoom,terrainTileSize:n.tileSize,sourceTileSize:n.tileManager.tileSize,meshSize:r.meshSize,calculateTileZoom:(u=n.tileManager._source)==null?void 0:u.calculateTileZoom},o=1-_p[t],c=e*2**o;n.deltaZoom=o,n.tileSize=c,n.tileManager.tileSize=c,r.meshSize=xp;const l=Tp[t];if(l>0&&n.tileManager._source){s.calculateTileZoom||i==null||i();const p=n.tileManager._source.calculateTileZoom;p&&(n.tileManager._source.calculateTileZoom=(...g)=>p(...g)+l)}return r._meshCache={},(d=n.freeRtt)==null||d.call(n),()=>{var p;n.deltaZoom=s.deltaZoom,n.tileSize=s.terrainTileSize,n.tileManager.tileSize=s.sourceTileSize,r.meshSize=s.meshSize,n.tileManager._source&&(n.tileManager._source.calculateTileZoom=s.calculateTileZoom),r._meshCache={},(p=n.freeRtt)==null||p.call(n)}},_r="carma-shadow-map-style-base",Ar={OPAQUE:"opaque",LABELS:"labels"},bp=(r,e=Ro,t=()=>!0,i=()=>Ar.OPAQUE,n=ze.MAX)=>{const s=e.id,a=r;if(typeof a.getTerrain!="function"||typeof a.getSource!="function"||typeof a.setTerrain!="function")return Object.assign(()=>{},{refresh:()=>{}});const o=a.getTerrain(),c=new Map,l=new Map;let u=!1,d=!1,p=!1,g=null,h=!1,v,f=null,y=()=>{},T=null;const R=()=>{g&&(h?delete g.getMeshFrameDelta:g.getMeshFrameDelta=v,g=null,v=void 0,h=!1)},C=()=>{const P=a.terrain;!P||P===g||(R(),typeof P.getMeshFrameDelta=="function"&&(h=!Object.prototype.hasOwnProperty.call(P,"getMeshFrameDelta"),v=P.getMeshFrameDelta,P.getMeshFrameDelta=()=>0,g=P))},b=()=>{var X;const P=a.terrain;!P||P===f||(y(),f=P,y=Mp(P,e.tileSize,n,()=>{var H;(H=r.setSourceTileLodParams)==null||H.call(r,9.314,3,e.id)}),(X=r.triggerRepaint)==null||X.call(r))},I=P=>`${P.type}:${String(P.source)}:${String(P["source-layer"])}`,N=()=>{var H;const X=r.getStyle().layers??[];for(const q of X){if(!Sl(q))continue;const le=I(q);let oe=l.get(q.id);const _e=r.getLayoutProperty(q.id,"visibility");!oe||oe.signature!==le?(oe={signature:le,value:_e},l.set(q.id,oe)):_e!=="none"&&(oe.value=_e),_e!=="none"&&r.setLayoutProperty(q.id,"visibility","none")}if(t()){r.getLayer(_r)||(r.addLayer({id:_r,type:"background",paint:{"background-color":tn.baseColor,"background-opacity":tn.opacity}},(H=X[0])==null?void 0:H.id),p=!0);for(const q of X){if(q.id===_r||q.type==="custom")continue;const le=tn.opaqueDrapeProperties.get(q.type);if(!le)continue;const oe=I(q);let _e=c.get(q.id);const A=r.getPaintProperty(q.id,le);!_e||_e.signature!==oe?(_e={signature:oe,property:le,value:A},c.set(q.id,_e)):A!==1&&(_e.value=A),A!==1&&r.setPaintProperty(q.id,le,1)}}},E=P=>{var X;for(const[H,q]of P)try{const le=(X=r.getStyle().layers)==null?void 0:X.find(({id:oe})=>oe===H);le&&I(le)===q.signature&&r.getLayoutProperty(H,"visibility")==="none"&&r.setLayoutProperty(H,"visibility",q.value===void 0?null:q.value)}catch{}P.clear()},L=()=>{var P;for(const[X,H]of c)try{const q=(P=r.getStyle().layers)==null?void 0:P.find(({id:le})=>le===X);q&&I(q)===H.signature&&r.getPaintProperty(X,H.property)===1&&r.setPaintProperty(X,H.property,H.value===void 0?null:H.value)}catch{}if(c.clear(),p){p=!1;try{r.getLayer(_r)&&r.removeLayer(_r)}catch{}}},F=()=>{if(!(u||d)){d=!0;try{if(Jr(r)){R(),y(),y=()=>{},f=null,L(),E(l),a.getTerrain()&&a.setTerrain(null),T=null;return}if(!a.getSource(s)&&r.isStyleLoaded()&&r.addSource(s,{type:"raster-dem",tiles:[e.url],tileSize:e.tileSize,minzoom:e.minzoom,maxzoom:e.maxzoom,encoding:e.encoding,bounds:[...e.bounds]}),i()===Ar.LABELS?(L(),E(l)):N(),a.getSource(s)){const P=a.getTerrain();((P==null?void 0:P.source)!==s||(P.exaggeration??1)!==1)&&a.setTerrain({source:s,exaggeration:1}),b(),C()}T=null}catch(P){const X=P instanceof Error?P.message:String(P);X!==T&&(T=X,console.error("[shadow-simulation] MapLibre terrain setup failed",P))}finally{d=!1}}},W=()=>{d||F()};r.on(Se.STYLE_DATA,F),r.on(Se.TERRAIN,W);let V=Jr(r);const O=yl(r,()=>{const P=Jr(r);P!==V&&(V=P,F())});return F(),Object.assign(()=>{if(!u){u=!0,O(),r.off(Se.STYLE_DATA,F),r.off(Se.TERRAIN,W),R(),y(),f=null,L(),E(l);try{!Jr(r)&&o&&a.getSource(o.source)!==void 0?a.setTerrain(o):a.getTerrain()&&a.setTerrain(null)}catch{}}},{refresh:()=>{!u&&!d&&F()}})},uo=1e3,Rp=(r,e,t,i)=>{let n=Number.NEGATIVE_INFINITY,s=null,a=null;const o=u=>{s=null,n=performance.now();const d=`#${u.color.getHexString()}`;if(t()||e(d),!r.isStyleLoaded())return;const p=[1.5,u.azimuthDegrees,90-u.elevationDegrees],g=Ye(u.relativeIntensity,0,1),h=r.getLight(),v=h.position;h.anchor==="map"&&Array.isArray(v)&&v.length===p.length&&v.every((f,y)=>f===p[y])&&h.color===d&&h.intensity===g||r.setLight({anchor:"map",position:p,color:d,intensity:g})},c=()=>{a!==null&&(globalThis.clearTimeout(a),a=null);const u=s;u&&o(u)};return{apply:u=>{if(s=u,!t()&&!i()){c();return}const d=performance.now()-n;if(d>=uo){c();return}a===null&&(a=globalThis.setTimeout(()=>{a=null;const p=s;p&&o(p)},uo-d))},flush(u){u&&(s=u),c()},dispose(){a!==null&&(globalThis.clearTimeout(a),a=null)}}},Dn=new J,Ep=(r,e)=>{const t=()=>{var o,c;return((c=(o=e())==null?void 0:o.localFrame)==null?void 0:c.currentToReference)??(r==null?void 0:r.currentToReference)??Dn},i=new Qs,n=new Ri;return{frameFromScene:t,getFrameCamera:o=>{const c=o.renderCamera,{localFrame:l}=o;if(!l||l.currentToReference.equals(Dn))return c;const u=c instanceof Qs?i.copy(c,!1):n.copy(c,!1);return u.matrixAutoUpdate=!1,u.matrixWorldAutoUpdate=!1,u.matrixWorld.multiplyMatrices(l.currentToReference,c.matrixWorld),u.matrixWorld.decompose(u.position,u.quaternion,u.scale),u.matrix.copy(u.matrixWorld),u.matrixWorldInverse.multiplyMatrices(c.matrixWorldInverse,l.referenceToCurrent),u},toFrameVolumes:(o,c)=>{if(o!=null&&o.mountsOnLocalFrame||c.length===0)return c;const l=t();if(l.equals(Dn))return c;const u=new Oe;return c.map(d=>(u.min.set(...d.minimum),u.max.set(...d.maximum),u.applyMatrix4(l),{...d,minimum:[u.min.x,u.min.y,u.min.z],maximum:[u.max.x,u.max.y,u.max.z]}))}}},Ap=900,ui=.01,Cp=.25,Ip=1e3,Dp=10,Pp="shadow-simulation-raster-dem",Op=200,di=100,Np=1e3,Lp=(r,e={})=>{var Hs,zs,ks,Vs,Ws,Gs,js;const{shadowAreaMeters:t,terrain:i,mapLibreTerrain:n,terrainQuality:s=ze.MAX}=e,a=wl();let o=i;const c=t??Ap,l=r.getLight();let u=!0;const d=()=>{const m=xe(r).filter(S=>S.providesTerrain===!0);return m.length>0&&m.every(S=>S.mapStyleProjectionBlend===Ml.OVERLAY)?Ar.LABELS:Ar.OPAQUE},p=bp(r,n??Ro,()=>u,d,a?ze.STANDARD:s),g=()=>{O.setMeshLabelStyle(d()===Ar.LABELS)};let h=null,v={fullOpacity:!0,uniformColor:null,uniformColorMix:0,textureSaturation:1,textureColorCorrection:!0},f=1,y=null;const T=()=>{var m,S;return y??((S=(m=xe(r).find(_=>_.providesTerrain===!0))==null?void 0:m.getErrorTarget)==null?void 0:S.call(m))??Cl};let R=a?sn:void 0;const C=new WeakMap;let b=null,I={useTransmittanceLut:!0,useIrradianceLut:!0},N=!1,E=!1,L=!1,F=null,W=new ke(((Hs=o==null?void 0:o.material)==null?void 0:Hs.color)??Eo);const V=()=>{var m,S,_,M;if(u){F==null||F(),F=null,(S=(m=O.layer).setMapStyleProjectionVisible)==null||S.call(m,!0);return}(M=(_=O.layer).setMapStyleProjectionVisible)==null||M.call(_,!1),F??(F=bl(r))},O=_l(r),se=(m,S)=>{var _,M;return{observer:{longitude:m[0],latitude:m[1],altitudeMeters:0},scenePosition:((M=(_=O.layer).projectLngLatToScene)==null?void 0:M.call(_,[m[0],m[1]],di))??new x(0,di,0),sceneFromLocal:S}};let P=null;const X=((ks=(zs=O.layer).getLocalFrame)==null?void 0:ks.call(zs))??null;let H=(X==null?void 0:X.revision)??0,q=X?se(X.lngLat,X.sceneFromLocalRotation):se([r.getCenter().lng,r.getCenter().lat]);const{frameFromScene:le,getFrameCamera:oe,toFrameVolumes:_e}=Ep(X,()=>P),A=new tf;let re=()=>{},Ee=m=>re(m),Ce=null,Rt=0;const ue=m=>{if(!o)return null;const S=r.getCenter(),{errorTargetPixels:_,motionErrorTargetPixels:M,shadowLevelOffset:Q,minimumLevel:U,maximumLevel:B,maxSelectionTiles:G,requestConcurrency:ee,maxCacheBytes:de,maxCachedMeshes:ye,maxCachedMeshBytes:pe,meshSegments:ve,maximumMeshSegments:j,noDataHeightMeters:we,heightRangeMeters:kt,material:Vt,...Qr}=Rl(o,a);return El(`${Pp}-${++Rt}`,Qr,m??[S.lng,S.lat],{errorTargetPixels:_??an,motionErrorTargetPixels:M,shadowLevelOffset:Q,minimumLevel:U,maximumLevel:B,maxSelectionTiles:G,requestConcurrency:ee,maxCacheBytes:de,maxCachedMeshes:ye,maxCachedMeshBytes:pe,meshSegments:ve??Qr.tileSize,maximumMeshSegments:j,noDataHeightMeters:we,heightRangeMeters:kt,material:Vt,receivesMapStyleTexture:!0,onContentChanged:pt=>Ee(pt),onError:pt=>{const fr=pt instanceof Error?pt.message:String(pt);fr!==Ce&&(Ce=fr,console.error("[shadow-simulation] Raster DEM terrain runtime failed",pt))}})},be=()=>xe(r).some(m=>m.providesTerrain===!0),Re=()=>xe(r).every(m=>{var S,_;return!m.providesTerrain||(((S=m.hasRenderableContent)==null?void 0:S.call(m))??((_=m.isMainViewReady)==null?void 0:_.call(m))??!0)});let Ie=xe(r).filter(m=>m.providesTerrain),z=be()?null:ue(),Ve=z===null;z&&O.layer.addRuntime(z);const Le=((Ws=(Vs=O.layer).getLocalFrameGroup)==null?void 0:Ws.call(Vs))??O.layer.getScene(),w=yp(O.layer.getScene(),Le,c,W),Pc=new x;let Wr=0,Gr=0;const Be=Mf({getRequest:()=>{var _;if(N||!o||!z||!Ve||pr(r)||L||E||Xe!==0||!tt||!Ht||!P)return null;const m=(_=z.getIdlePrefetchAvailability)==null?void 0:_.call(z);if(!(m!=null&&m.ready))return null;const S=z;return{key:JSON.stringify([Rt,Wr,Gr,P.renderCamera.projectionMatrix.elements,P.renderCamera.matrixWorldInverse.elements,P.viewport.x,P.viewport.y]),run:async M=>{var U;if(await S.prefetchIdleTerrain(M),M.aborted||!Pe()||!$||!P||!O.layer.runIdleRender||dt.size>0||ht().some(B=>B!==S&&B!==zt)||_t.some(({id:B})=>!/^\d+:[-\d]+:[-\d]+$/.test(B)))return;const Q=((U=S.getIdleShadowRegions)==null?void 0:U.call(S))??[];Q.length===0||!S.prepareIdleShadowRegion||(await $.prewarm({cells:Su(_t),frame:P,planningCamera:oe(P),lighting:{directionToSun:w.directionToSun,color:w.sunColor,intensity:w.sunIntensity,shadowIntensity:w.shadowIntensity},targetPixels:Dt[w.shadowQuality].shadowTexelErrorPixels,samples:mr(),signal:M,prepare:async(B,G)=>{const ee=wu(B.receiverBounds,Q);return ee===null?{covered:!1,group:null,isCurrent:()=>!1,dispose:()=>{}}:S.prepareIdleShadowRegion({receiverBounds:B.receiverBounds,casterBounds:B.casterBounds,terrainLevel:ee},G)}}),M.aborted||Qe.publish())}}}});let ut=null,ki="";const jr=(m,S,_)=>{const M=`${m}:${S}`;M!==ki&&(ki=M,console.error(`[SHADOW] Atmospheric update rejected; retaining last valid frame (${m}: ${S})`,{phase:m,reason:S,..._}))},Oc=()=>{ki=""},Ue=()=>{Be.cancel(),Wr+=1,Gr+=1},sr=Rp(r,m=>O.setLocationLabelColor(m),()=>E,()=>L),Ft=m=>{const S={longitude:q.observer.longitude,latitude:q.observer.latitude,altitudeMeters:di},_=Xm(m.instant,S,q);if(_)return jr("sunlight input",_,{observer:S,skyReference:q}),b;A.ensure(()=>{if(N||!h)return;Ue();const U=Ft(h);U&&sr.apply(U),r.triggerRepaint()},I),A.ensureSky(()=>{N||!h||(Ue(),Ft(h),r.triggerRepaint())});let M;try{M=A.evaluate(m.instant,S,I,q)}catch(U){return jr("sunlight generation","generator threw",{observer:S,error:U}),b}const Q=$m(M);return Q?(jr("sunlight output",Q,{observer:S,sample:M}),b):(Oc(),b=M,w.atmosphericSky.update(M.skyFrame,A.skyTextures),Sp(w,M),lo(w,M.directionToSun.clone().transformDirection(le()),M.radiance,Vr),M)};re=m=>{N||(Be.cancel(),$==null||$.invalidateContent(m),w.controller.invalidate(),w.dirty=!0)};const dt=new Map,ht=()=>{const m=xe(r);return z&&!m.includes(z)?[z,...m]:m};let Bt=null,mt=null,We=null,ft=null,Ts=[];const Ms=()=>ht().flatMap(m=>{var S;return _e(m,((S=m.getActiveTileVolumes)==null?void 0:S.call(m))??[])}),ar=()=>Bt??Ms(),bs=(m,S=ui*4)=>{if(!be())return;const _=ar(),M=T(),Q=m?eo(m,_,M):Math.max(M,..._.filter(({loadReason:B})=>B!==$t.SHADOW).map(({errorPixels:B})=>B).filter(B=>Number.isFinite(B)));let U=1/0;for(const B of _){if(B.loadReason===$t.SHADOW||m&&(B.minimum[0]>=m.max.x||B.maximum[0]<=m.min.x||B.minimum[2]>=m.max.z||B.maximum[2]<=m.min.z))continue;const G=B.geometricError,ee=B.errorPixels;G!==void 0&&ee!==void 0&&Number.isFinite(G)&&Number.isFinite(ee)&&G>0&&ee>0&&(U=Math.min(U,G/ee))}return Yf({stageErrorPixels:Q,targetErrorPixels:M,groundTexelTargetMeters:S,finalBiasMeters:ui,maximumCoarseBiasMeters:Cp,metersPerPixel:Number.isFinite(U)?U:0})},Rs=m=>{const S=Bt,_=mt,M=We,Q=ft;if(Bt=S??Ms(),mt=_??new Map,We=M??new Map,ft=Q??new Map,!S){const U=Wf(Ts,Bt);U.length>0&&($==null||$.invalidateContent(U),lr.length=0),Ts=Bt}try{return m()}finally{Bt=S,mt=_,We=M,ft=Q}};let Et=null,or=null,Vi=Number.NEGATIVE_INFINITY,Wi=!1;const Es=new WeakMap,Nc=m=>{var M,Q,U;if(!m)return"none";const S=r.getCenter(),_=r.getCanvas();return[Math.round(S.lng*1e7),Math.round(S.lat*1e7),Math.round((((M=r.getZoom)==null?void 0:M.call(r))??0)*1e4),Math.round((((Q=r.getBearing)==null?void 0:Q.call(r))??0)*1e3),Math.round((((U=r.getPitch)==null?void 0:U.call(r))??0)*1e3),`${_.clientWidth||_.width}x${_.clientHeight||_.height}`,(h==null?void 0:h.azimuthDegrees)??"no-sun",(h==null?void 0:h.elevationDegrees)??"no-sun",w.shadowQuality].join(";")},cr=m=>{var G,ee,de,ye,pe,ve;if(E){const j=performance.now();if(j-Vi<Np){Wi=!0;return}Vi=j}or=m,Wi=!1;const S=Nc(m),_=P==null?void 0:P.renderCamera,M=m&&_?new Lr().setFromProjectionMatrix(new J().multiplyMatrices(_.projectionMatrix,_.matrixWorldInverse),_.coordinateSystem,_.reversedDepth):null,Q=new Oe,U=M?_e(z,((G=z==null?void 0:z.getActiveTileVolumes)==null?void 0:G.call(z))??[]).filter(j=>(Q.min.fromArray(j.minimum),Q.max.fromArray(j.maximum),M.intersectsBox(Q))):void 0,B=[...xe(r),...z?[z]:[]];for(const j of new Set(B)){if((ee=j.setShadowStagePresentationGate)==null||ee.call(j,!1),!j.providesTerrain){j===z?(de=j.setErrorTarget)==null||de.call(j,(o==null?void 0:o.errorTargetPixels)??an):(ye=j.setErrorTargetOverride)==null||ye.call(j,y),(pe=j.setShadowView)==null||pe.call(j,m?{...m,terrainReceivers:U}:null);continue}Es.get(j)!==S&&(Es.set(j,S),(ve=j.setShadowView)==null||ve.call(j,m))}},Gi=m=>{var S;Et=m;for(const _ of new Set([...xe(r),...z?[z]:[]]))(S=_.setLiveShadowView)==null||S.call(_,m);L||cr(m)};let tt=!a;a&&(w.shadowQuality=Gt.FPS_120);let ji={},De=rn(nn(ji,a),w.shadowQuality),rt=null;const Yr=()=>({format:De.shadowBufferFormat,msaaSamples:De.shadowBufferLayout===Zs.TILED?0:tp(De,(De.shadowBufferFormat===jt.SDR_8?rt==null?void 0:rt.sdrSamples:rt==null?void 0:rt.hdrSamples)??[0,2,4])});let Ut=Yr(),Xe=0,Yi=!1,qr=!1;const lr=[];let $e=!0,qi=[],As="",it=An(w.shadowQuality),Kr=Number.POSITIVE_INFINITY,Ht=!0,At=to(4096);w.controller.setMaxShadowMapSize(At.maxShadowMapSize);let $=null,Ki=null,_t=[];const Pe=()=>De.shadowBufferLayout===Zs.TILED,ur=()=>{$==null||$.dispose(),$=null,Ki=null,_t=[]},Qe=ip(r,()=>({bufferLayout:De.shadowBufferLayout,sunDiscSamples:De.shadowSunDiscSamples,tiledStats:Pe()?($==null?void 0:$.stats)??null:null}));w.controller.setSoftSun(tt);const dr=(m,S)=>Math.round(m/S)*S,Lc=m=>{var _,M,Q,U;const S=r.getCenter();return[dr(S.lng,1e-7),dr(S.lat,1e-7),dr(((_=r.getZoom)==null?void 0:_.call(r))??0,1e-4),dr(((M=r.getBearing)==null?void 0:M.call(r))??0,.001),dr(((Q=r.getPitch)==null?void 0:Q.call(r))??0,.001),`${m.viewport.x}x${m.viewport.y}`,(U=m.cssViewport)==null?void 0:U.toArray().join("x")].join(";")},hr=(m=!0,S=!0,_)=>{var ee,de,ye,pe;const M=r.getCenter(),Q=(z==null?void 0:z.getElevation(M.lng,M.lat))??0,U=(de=(ee=O.layer).projectLngLatToScene)==null?void 0:de.call(ee,[M.lng,M.lat],Q);if(!U){h&&Ft(h),S&&r.triggerRepaint();return}w.center.copy(U).applyMatrix4(le()),ut??(ut=Ac(w.scene,U.y));const[B,G]=ut;if(_){const ve=cp(oe(_),B,G,w.center);if(ve.length>0){const j=new Oe().setFromPoints(ve).getSize(new x),we=Math.max(...ve.map(kt=>kt.distanceTo(w.center)));w.sunVectorLengthMeters=Math.min(j.x,j.z)*Dc,w.shadowAreaMeters=Math.max(t??0,Dp,we*2),qi=ve}}else $e=!0;if(w.shadowCameraOffsetMeters=Math.max(Ic,w.shadowAreaMeters*1.5),w.receiverWorldPoints=qi,w.minimumElevationMeters=B,w.maximumElevationMeters=G,w.dirty=!0,h&&(m||!b))Ft(h);else{w.lightTarget.position.copy(w.center);for(const ve of w.controller.lights)ve.target.position.copy(w.center),ve.target.updateMatrixWorld(!0);(ye=w.sunVector)==null||ye.root.position.copy(w.center),(pe=w.sunVector)==null||pe.root.updateMatrixWorld(!0)}S&&r.triggerRepaint()},zt={id:"shadow-simulation-controller",originLngLat:[r.getCenter().lng,r.getCenter().lat],root:new ns,updatePriority:Op,update(m){var pt,fr;P=m;const{localFrame:S}=m;S&&S.revision!==H&&(H=S.revision,q=se(S.lngLat,S.sceneFromLocalRotation),b&&(b=Jm(b,q),w.atmosphericSky.update(b.skyFrame,A.skyTextures)));const _=(fr=(pt=O.layer).getRenderer)==null?void 0:fr.call(pt);_&&!rt&&(rt=ep(_),Ut=Yr(),At=to(Math.min(rt.maxTextureSize,rt.maxRenderbufferSize)),w.controller.setMaxShadowMapSize(At.maxShadowMapSize)),Kr=Jf(At.maxAccumulationPixels,Ut),Ht=m.viewport.x*m.viewport.y<=Kr,it=Cn(it,performance.now(),L,{enabled:De.shadowAdaptiveQuality,allowCadenceReduction:!Pe()});const M=Math.max(0,m.lodCamera.position.y-m.lookTarget.y),Q=di+M,U=q.scenePosition.y+M;![...m.lodCamera.matrixWorld.elements,...m.lodCamera.projectionMatrix.elements].every(Number.isFinite)||!Number.isFinite(Q)||!Number.isFinite(U)?jr("render camera","local Three.js camera matrix or altitude is invalid",{altitudeMeters:Q,cameraHeightAboveTargetMeters:M,matrixWorld:m.lodCamera.matrixWorld.elements,projectionMatrix:m.lodCamera.projectionMatrix.elements}):(w.atmosphericSky.updateViewCamera(m.lodCamera),w.atmosphericSky.updateObserverScenePosition(Pc.set(q.scenePosition.x,U,q.scenePosition.z)));const G=Lc(m);if(($e||G!==As)&&(performance.now(),As=G,ut=L?ut??[w.minimumElevationMeters,w.maximumElevationMeters]:sp(w.scene,xe(r),m.renderCamera,w.center.y),hr(!1,!1,m),$e=!1),!w.dirty)return;w.sunVectorVisible&&w.sunVector&&w.sunVector.root.cone.position.y!==w.sunVectorLengthMeters&&lo(w,w.directionToSun,w.sunColor,w.sunIntensity),Wr+=1;const ee=ar(),de=ee.flatMap(({minimum:Wt,maximum:gt})=>Io(oe(m),new Oe(new x(...Wt),new x(...gt))));if(w.receiverWorldPoints=de.length>0?de:qi,w.receiverWorldPoints.length===0||!h){Gi(null),Qe.setSnapshot(null),Rn(r);return}if(Pe()){_t=yu(ee.filter(({loadReason:gt})=>gt!==$t.SHADOW).map(({id:gt,minimum:Zr,maximum:Zi,receiverObjectId:Ji})=>({id:gt,receiverObjectId:Ji,bounds:new Oe(new x(...Zr),new x(...Zi))})));const Wt=fu(_t,oe(m));Wt.length>0&&(w.receiverWorldPoints=[...Wt])}const ye=ro(At.maxShadowMapSize,w.shadowQuality,m.viewport.x*m.viewport.y,L?it.depthScale:1),pe=m.cssViewport??m.viewport,ve=ro(At.maxShadowMapSize,w.shadowQuality,pe.x*pe.y,L?it.depthScale:1),j=w.controller.update({maxReceiverBiasMeters:bs(),receiverWorldPoints:w.receiverWorldPoints,receiverAnchorWorldPosition:w.center,minimumElevationMeters:w.minimumElevationMeters,maximumElevationMeters:w.maximumElevationMeters,directionToSun:w.directionToSun,color:w.sunColor,intensity:w.sunIntensity,shadowIntensity:w.shadowIntensity,quality:w.shadowQuality,mapTexelBudget:ye,casterMapTexelBudget:ve,groundTexelFit:De.shadowGroundTexelFit,stabilizeMapSize:L});if(w.dirty=!1,!j){Gi(null),Qe.setSnapshot(null),Rn(r);return}const we=j.camera,kt=w.controller.lights[0].shadow.camera,Vt=b==null?void 0:b.skyFrame.directionToSunECEF;Gi({camera:kt,directionToSunECEF:Vt?[Vt.x,Vt.y,Vt.z]:void 0,casterAngularRadiusRadians:tt?Pr:0,shadowMapSize:{width:(we.rightMeters-we.leftMeters)/j.casterMetersPerTexel[0],height:(we.topMeters-we.bottomMeters)/j.casterMetersPerTexel[1]}});const Qr=Xn(r);if(we&&Qr){m.lodCamera.updateMatrixWorld(!0),m.lodCamera.updateProjectionMatrix();const Wt=ht().flatMap(gt=>{var Zr;return(((Zr=gt.getActiveTileVolumes)==null?void 0:Zr.call(gt))??[]).map(({id:Zi,loadReason:Ji,minimum:Vc,maximum:Wc})=>({id:Zi,loadReason:Ji,minimum:Vc,maximum:Wc}))});Qe.setSnapshot({bufferLayout:De.shadowBufferLayout,sunDiscSamples:De.shadowSunDiscSamples,tiledStats:null,cameraRangeMeters:kt.position.distanceTo(w.controller.lights[0].target.position),leftMeters:we.leftMeters,rightMeters:we.rightMeters,bottomMeters:we.bottomMeters,topMeters:we.topMeters,nearMeters:we.nearMeters,farMeters:we.farMeters,projectionMatrixElements:we.projectionMatrixElements,shadowMapWidth:we.shadowMapWidth,shadowMapHeight:we.shadowMapHeight,minimumElevationMeters:w.minimumElevationMeters,maximumElevationMeters:w.maximumElevationMeters,sceneAnchorPositionElements:w.center.toArray(),mainCamera:{viewMatrixElements:[...m.lodCamera.matrixWorldInverse.elements],projectionMatrixElements:[...m.lodCamera.projectionMatrix.elements],nearMeters:m.lodCamera.near,farMeters:m.lodCamera.far,viewportWidth:m.viewport.x,viewportHeight:m.viewport.y},tileVolumes:Wt,shadow:j,atmosphericSunlight:b?{azimuthDegrees:b.azimuthDegrees,elevationDegrees:b.elevationDegrees,relativeIntensity:b.relativeIntensity,color:`#${b.color.getHexString()}`,transmittanceReady:b.atmosphericTransmittanceReady,irradianceReady:b.atmosphericIrradianceReady}:null}),Qe.publish()}},dispose:()=>{}};O.layer.addRuntime(zt);const mr=()=>De.shadowSunDiscSamples,Cs=()=>{var _,M;if(!Pe()||!P||w.directionToSun.y<=0)return null;const m=(M=(_=O.layer).getRenderer)==null?void 0:M.call(_);if(!m)return null;let S=!1;if(!$||Ki!==m){const Q=_t;ur(),_t=Q,Ki=m,$=new kf(w.scene,m,{light:w.controller.lights[0],sky:w.atmosphericSky.mesh,overlay:w.sunVectorRoot,frame:w.frame,maximumMapSize:At.maxShadowMapSize,isCorridorReady:(U,B,G)=>{const ee=bn(U,B,G),de=mt==null?void 0:mt.get(ee);if(de!==void 0)return de;const ye=ht().every(pe=>{var ve;return((ve=pe.isShadowRegionReady)==null?void 0:ve.call(pe,U,B,G))??(pe.getRequestDemand?pe.getRequestDemand()===0:!pe.providesTerrain||!pr(r))});return mt==null||mt.set(ee,ye),ye},receiverStageError:U=>{const B=bn(U),G=ft==null?void 0:ft.get(B);if(G!==void 0)return G;const ee=eo(U,ar(),be()?T():(o==null?void 0:o.errorTargetPixels)??an);return ft==null||ft.set(B,ee),ee},receiverBiasLimit:(U,B)=>bs(U,B)??ui,onPresentedPages:(U,B)=>{var ee;const G=Gf(ar(),B.map(({id:de,receiverBounds:ye})=>({id:de,bounds:ye})),U.map(({id:de,receiverBounds:ye})=>({id:de,bounds:ye})));if(G.length!==0)for(const de of ht())(ee=de.acknowledgeShadowStage)==null||ee.call(de,G)},corridorRevision:(U,B,G)=>{var ve;const ee=bn(U,B,G),de=We==null?void 0:We.get(ee);if(de!==void 0)return de;const ye=[];for(const j of ht()){if(j===zt)continue;const we=(ve=j.getShadowRegionRevision)==null?void 0:ve.call(j,U,B,G);if(!we)return We==null||We.set(ee,null),null;ye.push(JSON.stringify([j.id,we]))}const pe=ye.length?JSON.stringify(ye.sort()):null;return We==null||We.set(ee,pe),pe},dateTimeKey:()=>(h==null?void 0:h.instant.toISOString())??null,worldBasis:()=>{const U=O.layer.projectSceneToLngLat([0,0,0]);if(!U)throw new Error("Shared scene origin is not initialized");const B=Wl.MercatorCoordinate.fromLngLat(U,0);return jf(B.x,B.y,B.meterInMercatorCoordinateUnits())},requestRepaint:()=>r.triggerRepaint(),visualEpoch:()=>Gr,auditCorridors:U=>{const B=ar(),G=ht();return U.map(({id:ee,casterBounds:de,receiverBounds:ye})=>qf({id:ee,casterBounds:de,sunElevationDegrees:(h==null?void 0:h.elevationDegrees)??0,volumes:B,regions:G.flatMap(pe=>{var j;const ve=(j=pe.getShadowRegionDiagnostics)==null?void 0:j.call(pe,de,void 0,ye);return ve?[ve]:[]})}))},runIdleRender:U=>{var B,G;return((G=(B=O.layer).runIdleRender)==null?void 0:G.call(B,U))??!1}}),S=!0}return!L||S?$.update(_t,P,{maxReceiverBiasMeters:be()?ui:void 0,directionToSun:w.directionToSun,color:w.sunColor,intensity:w.sunIntensity,shadowIntensity:w.shadowIntensity},Dt[w.shadowQuality].shadowTexelErrorPixels,oe(P)):$.updatePresentation(P,oe(P)),$},Fc=Vf(),Xr=()=>Pe()&&Fc(ht()),Is={onSettled:Be.onSettled,onPresented:()=>{var S;const m=performance.now();for(const _ of xe(r))(S=_.onShadowPresented)==null||S.call(_,m)},get options(){return Ut},get maxRenderTargetPixels(){return Kr},get rounds(){return mr()},epoch:()=>Wr,visualEpoch:()=>Gr,pending:()=>Ht&&tt&&!E&&(!Ve||Xr()||!Pe()&&!Re()||!Pe()&&pr(r)||L||!Pe()&&Xe!==0),active:()=>Ht&&tt&&Ve&&!Xr()&&(Pe()||Re())&&(Pe()||!pr(r))&&!L&&!E&&(Pe()||Xe===0)&&h!==null&&Et!==null&&w.receiverWorldPoints.length>0,retainSettledFrame:()=>Ht&&tt&&h!==null&&Et!==null&&w.receiverWorldPoints.length>0,prepareRound:m=>{Pe()||w.controller.applySunDiscSample(m,mr())},finishRound:()=>w.controller.restoreSunDiscCenter(),get renderProgressive(){if(Pe())return(m,S)=>!tt||E||!Ht?null:Rs(()=>{if(Xr())return null;const _=Cs();if(!_)return null;const M=_.renderProgressive(m,{...S,samples:mr(),maxRenderTargetPixels:Kr,options:Ut});return Qe.publish(),M})},renderScene:(m,S)=>!tt||E||!Pe()?!1:Rs(()=>{if(Xr())return!1;const _=Cs();if(!_)return!1;const M=_.render(m,S,mr(),!L);return Qe.publish(),M})};(js=(Gs=O.layer).setAccumulationController)==null||js.call(Gs,Is);const $r=()=>{ut=null,$e=!0,hr()};Ee=m=>{re(m),$r()};const Ds=()=>{Be.cancel(),$==null||$.pausePending(),it=Cn(it,performance.now(),!1),L=!0,$e=!0},Xi=()=>{Be.cancel(),$e=!0},Ps=()=>{L=!1,it=Cn(it,performance.now(),!1),Yi?(Yi=!1,Qi()):$r(),b&&sr.flush(b),or!==Et&&cr(Et)},Os=()=>{Xi(),r.triggerRepaint()};r.on(Se.MOVE_START,Ds),r.on(Se.MOVE,Xi),r.on(Se.MOVE_END,Ps),r.on(Se.RESIZE,Os);const $i=m=>{m.ready.then(S=>{!S||N||z!==m||(Ve=!0,$r(),r.triggerRepaint())})},Ns=()=>{var M,Q,U,B;const m=xe(r).filter(G=>G.providesTerrain);if(m.length!==Ie.length||m.some(G=>!Ie.includes(G))){Ie=m,ur(),(Q=(M=O.layer).setAccumulationController)==null||Q.call(M,null),(B=(U=O.layer).setAccumulationController)==null||B.call(U,Is);for(const G of w.controller.lights)G.shadow.map&&(Mt(G.shadow.map),G.shadow.map=null);Ue()}const S=be();if(!o)return;if(S){Be.cancel(),Ve=!0;const G=z;z=null,G&&O.layer.hasRuntime(G.id)&&O.layer.removeRuntime(G.id),ut=null,$e=!0;return}if(z)return;const _=ue();_&&(Be.cancel(),Ve=!1,z=_,_.setMaterialColor(`#${W.getHexString()}`),_.setShadowView(or),O.layer.addRuntime(_),$i(_),ut=null,$e=!0)};z&&$i(z),hr();const Ls=()=>{if(N)return;const m=new Set(Al(r));for(const[S,_]of dt)m.has(S)||(O.layer.removeRuntime(_.runtime.id),dt.delete(S));for(const S of m){const _=dt.get(S);if(_){_.sync();continue}if(!S.scene)continue;const M=pp(O.layer,S,v);M&&dt.set(S,M)}br(O.layer.getScene(),be()),$r(),r.triggerRepaint()},Bc=xl(r,Ls);Ls(),g();const Qi=()=>{var m,S,_;if(!N){Xe&&(window.clearTimeout(Xe),Xe=0),qr?$==null||$.invalidateContent():lr.length>0&&($==null||$.invalidateContent(lr)),qr=!1,lr.length=0,Be.cancel(),Ns(),p.refresh(),g();for(const M of xe(r))M.providesTerrain&&((m=M.setErrorTargetOverride)==null||m.call(M,y),(!C.has(M)||C.get(M)!==R)&&((S=M.setCacheBudget)==null||S.call(M,R),C.set(M,R))),(_=M.setShadowSimulationStyle)==null||_.call(M,v);cr(or),dt.size>0&&br(O.layer.getScene(),be()),w.controller.invalidate(),w.dirty=!0,$e=!0,ut=null,r.triggerRepaint()}},Uc=Ao(r,m=>{if(N)return;const S=m==null?void 0:m.bounds;if(m===void 0){const _=xe(r).filter(M=>M.providesTerrain);(_.length!==Ie.length||_.some(M=>!Ie.includes(M)))&&(Ns(),p.refresh(),g())}for(const _ of(m==null?void 0:m.roots)??[])br(_,be());if((S==null?void 0:S.length)===0){r.triggerRepaint();return}if(S===void 0?qr=!0:S.length>0&&lr.push(...S.map(_=>_.clone())),Be.cancel(),S===void 0&&ht().some(_=>_!==zt&&!_.getActiveTileVolumes)&&(qr=!0),L){Yi=!0,r.triggerRepaint();return}r.triggerRepaint(),!Xe&&(Xe=window.setTimeout(()=>{Xe=0,Qi()},Ip))}),Hc=Tl(r,()=>{pr(r)&&Be.cancel(),N||r.triggerRepaint()});Qi();const Fs=m=>{const S=b??Ft(m);S&&sr.apply(S)},zc=m=>{(h==null?void 0:h.instant.getTime())!==m.instant.getTime()&&($==null||$.cancelPending(!0),Ue(),h=m,hr(),Fs(m))},Bs=()=>{N||h&&Fs(h)};r.on(Se.STYLE_LOAD,Bs);const Us=()=>{Qe.markStale(),w.dirty=!0,r.triggerRepaint()},kc=rp(r,m=>{m?Us():Qe.reset()});return{updateSolarPosition:zc,updateMeshCacheBudget(m){var _;a&&(m=Math.min(m??sn,sn));const S=m!==void 0&&Number.isFinite(m)&&m>0?m:void 0;if(!(R===S&&xe(r).filter(M=>M.providesTerrain).every(M=>C.has(M)&&C.get(M)===S))){R=S;for(const M of xe(r))M.providesTerrain&&((_=M.setCacheBudget)==null||_.call(M,S),C.set(M,S));r.triggerRepaint()}},updateTerrain(m){if(o===m||(Be.cancel(),o=m,!m||be()))return;const S=z,_=ue(S==null?void 0:S.originLngLat);_&&(_.setMaterialColor(`#${W.getHexString()}`),_.setShadowView(or),S&&_.adoptPresentation(S),z=_,O.layer.addRuntime(_),S&&O.layer.removeRuntime(S.id),$i(_),ut=null,$e=!0,Ue(),Ee(),r.triggerRepaint())},updateTerrainColor(m){const S=new ke(m);W.equals(S)||(Ue(),z==null||z.setMaterialColor(m),w.atmosphericSky.updateGroundAlbedo(S),W=S)},updateMeshErrorTarget(m){var S;if(y!==m){y=m;for(const _ of xe(r))(S=_.setErrorTargetOverride)==null||S.call(_,m);r.triggerRepaint()}},updateBuildingAppearance(m){var S;if(!(v.fullOpacity===m.fullOpacity&&v.uniformColor===m.uniformColor&&(v.uniformColorMix??1)===(m.uniformColorMix??1)&&(v.textureSaturation??1)===(m.textureSaturation??1)&&(v.textureColorCorrection??!1)===(m.textureColorCorrection??!1))){Ue(),$==null||$.invalidateContent(),v=m;for(const _ of dt.values())_.updateBuildingAppearance(m);for(const _ of xe(r))(S=_.setShadowSimulationStyle)==null||S.call(_,m);br(O.layer.getScene(),be()),w.controller.invalidate(),w.dirty=!0,r.triggerRepaint()}},updateShadowQuality(m){a&&(m=Gt.FPS_120),w.shadowQuality!==m&&(Ue(),w.shadowQuality=m,De=rn(nn(ji,a),m),Ut=Yr(),it=An(m),w.dirty=!0,hr(),w.controller.invalidate())},updateRenderQuality(m){m=nn(m,a);const S=De,_=rn(m,w.shadowQuality);ji={...m},De=_;const M=S.shadowAdaptiveQuality!==_.shadowAdaptiveQuality;(M||S.shadowBufferLayout!==_.shadowBufferLayout)&&(it=An(w.shadowQuality)),!(!M&&S.shadowBufferLayout===_.shadowBufferLayout&&S.shadowBufferFormat===_.shadowBufferFormat&&S.shadowSunDiscSamples===_.shadowSunDiscSamples&&S.shadowMsaaSamples===_.shadowMsaaSamples&&S.shadowGroundTexelFit===_.shadowGroundTexelFit)&&(Ut=Yr(),Ue(),S.shadowBufferLayout!==_.shadowBufferLayout&&(ur(),$e=!0),(M||S.shadowGroundTexelFit!==_.shadowGroundTexelFit||S.shadowBufferLayout!==_.shadowBufferLayout)&&(w.dirty=!0,w.controller.invalidate()),Qe.publish(),r.triggerRepaint())},updateSoftSunShadows(m){m=m&&!a,tt!==m&&(Ue(),tt=m,ur(),w.controller.setSoftSun(m),w.controller.invalidate(),w.dirty=!0,r.triggerRepaint())},updateTimeAnimating(m){E!==m&&(Be.cancel(),E=m,m&&($==null||$.pausePending()),m||(sr.flush(),Vi=Number.NEGATIVE_INFINITY,Wi&&!L&&cr(Et),w.dirty=!0),r.triggerRepaint())},refreshProjectionDebug:Us,updateShadowIntensity(m){const S=Ye(m,0,1);if(f!==S){Ue(),f=S,w.shadowIntensity=f;for(const _ of w.controller.lights)_.shadow.intensity=f;r.triggerRepaint()}},updateMapStyleContentVisibility(m){u!==m&&(u=m,V(),r.triggerRepaint())},updateMapStyleElevationVisibility(m,S){O.setMapStyleElevationVisibility(m,S),r.triggerRepaint()},updateMapStyleLabelOverlayVisibility(m){O.setPointLabelOverlayVisible(m),r.triggerRepaint()},updateSunDebugVectorVisibility(m){w.sunVectorVisible!==m&&(Ue(),w.sunVectorVisible=m,w.sunVectorRoot.visible=m&&!!h,m?(w.frame.add(w.sunVectorRoot),Fr(async()=>{const{buildSunVector:S}=await import("./shadow-sun-vector-CMkhLARD.js");return{buildSunVector:S}},__vite__mapDeps([11,3,1,4,5,6,2,7,8,9,10])).then(({buildSunVector:S})=>{if(N||!w.sunVectorVisible||w.sunVector)return;const _=S();w.sunVector=_,w.sunVectorRoot.add(_.root),_.update(w.center,w.directionToSun,w.sunVectorLengthMeters),_.root.visible=!0,w.sunVectorRoot.visible=!!h,r.triggerRepaint()}).catch(S=>{N||console.error("Unable to load sun-vector diagnostics",S)})):(w.frame.remove(w.sunVectorRoot),w.sunVector&&(w.sunVectorRoot.remove(w.sunVector.root),w.sunVector.dispose(),w.sunVector=null)),r.triggerRepaint())},updateAtmosphericLutUsage(m){I.useTransmittanceLut===m.useTransmittanceLut&&I.useIrradianceLut===m.useIrradianceLut||(Ue(),I=m,b=null,h&&(Ft(h),re()),r.triggerRepaint())},dispose(){var m,S,_,M,Q,U;if(!N){N=!0,Be.dispose(),kc(),ur(),Qe.dispose(),Xe&&window.clearTimeout(Xe),sr.dispose(),Rn(r),r.off(Se.STYLE_LOAD,Bs),r.off(Se.MOVE_START,Ds),r.off(Se.MOVE,Xi),r.off(Se.MOVE_END,Ps),r.off(Se.RESIZE,Os),Bc(),Uc(),Hc(),Et=null,cr(null);for(const B of xe(r))(m=B.setShadowSimulationStyle)==null||m.call(B,null),(S=B.setErrorTargetOverride)==null||S.call(B,null);for(const B of dt.values())O.layer.hasRuntime(B.runtime.id)&&O.layer.removeRuntime(B.runtime.id);dt.clear();try{F==null||F()}catch{}F=null,(M=(_=O.layer).setMapStyleProjectionVisible)==null||M.call(_,!0),p(),O.layer.hasRuntime(zt.id)&&O.layer.removeRuntime(zt.id),z&&O.layer.hasRuntime(z.id)&&O.layer.removeRuntime(z.id),A.dispose(),wp(w),(U=(Q=O.layer).setAccumulationController)==null||U.call(Q,null),O.release();try{r.isStyleLoaded()&&r.setLight(l)}catch{}}}}},Fp=({tiledShadows:r=!1,libreMap:e,shadowAreaMeters:t,terrain:i,mapLibreTerrain:n,terrainQuality:s,location:a,state:o,dateState:c,setDateState:l})=>{const u=Y.useRef(null),d=lu({dateState:c,setDateState:l,location:a,shadowState:o,onFrame:f=>{var y;o.enabled&&((y=u.current)==null||y.updateSolarPosition(gi(f,a)))}}),p=Y.useMemo(()=>Il(i,Js(o.shadowQuality),o.terrainErrorTarget),[i,o.shadowQuality,o.terrainErrorTarget]),g=Y.useRef(p);g.current=p;const[h,v]=Y.useState(0);return Y.useEffect(()=>{if(!e||!o.enabled)return;let f=null,y=null,T=null;const R=()=>{e.off(Se.STYLE_DATA,C),e.off(Se.STYLE_LOAD,C),e.off(Se.IDLE,C)},C=()=>{f||y!==null||T!==null||!e.isStyleLoaded()||(y=requestAnimationFrame(()=>{y=null,T=setTimeout(()=>{T=null,e.isStyleLoaded()&&(R(),f=Lp(e,{shadowAreaMeters:t,terrain:g.current,mapLibreTerrain:n,terrainQuality:s}),u.current=f,v(b=>b+1))},0)}))};return e.on(Se.STYLE_DATA,C),e.on(Se.STYLE_LOAD,C),e.on(Se.IDLE,C),C(),()=>{R(),y!==null&&cancelAnimationFrame(y),T!==null&&clearTimeout(T),u.current=null,f==null||f.dispose(),f=null}},[e,t,o.enabled,n,s]),Y.useEffect(()=>{var f;(f=u.current)==null||f.updateTerrain(p)},[p,h]),Y.useEffect(()=>{var y;if(!o.enabled)return;const f=d.current??c;(y=u.current)==null||y.updateSolarPosition(gi(f,a))},[d,c,a,o.enabled,h]),Y.useEffect(()=>{var f;o.enabled&&((f=u.current)==null||f.updateShadowQuality(Js(o.shadowQuality)))},[o.enabled,o.shadowQuality,h]),Y.useEffect(()=>{var f;o.enabled&&((f=u.current)==null||f.updateRenderQuality({shadowAdaptiveQuality:o.shadowAdaptiveQuality,shadowBufferLayout:r?o.shadowBufferLayout:void 0,shadowBufferFormat:o.shadowBufferFormat,shadowSunDiscSamples:o.shadowSunDiscSamples,shadowMsaaSamples:o.shadowMsaaSamples,shadowGroundTexelFit:o.shadowGroundTexelFit}))},[o.enabled,r,o.shadowAdaptiveQuality,o.shadowBufferLayout,o.shadowBufferFormat,o.shadowSunDiscSamples,o.shadowMsaaSamples,o.shadowGroundTexelFit,h]),Y.useEffect(()=>{var f;o.enabled&&((f=u.current)==null||f.updateMeshErrorTarget(o.meshErrorTarget??null))},[o.enabled,o.meshErrorTarget,h]),Y.useEffect(()=>{var f;o.enabled&&((f=u.current)==null||f.updateMeshCacheBudget(o.meshCacheBudgetBytes))},[o.enabled,o.meshCacheBudgetBytes,h]),Y.useEffect(()=>{var f;o.enabled&&((f=u.current)==null||f.updateSoftSunShadows(o.softSunShadows??!0))},[o.enabled,o.softSunShadows,h]),Y.useEffect(()=>{var f;o.enabled&&((f=u.current)==null||f.updateTimeAnimating(o.isAnimating??!1))},[o.enabled,o.isAnimating,h]),Y.useEffect(()=>{var f;o.enabled&&((f=u.current)==null||f.updateShadowIntensity(o.shadowIntensity??1))},[o.enabled,o.shadowIntensity,h]),Y.useEffect(()=>{var f;o.enabled&&((f=u.current)==null||f.updateMapStyleContentVisibility(o.showMapStyleContent??!0))},[o.enabled,o.showMapStyleContent,h]),Y.useEffect(()=>{var f;o.enabled&&((f=u.current)==null||f.updateMapStyleLabelOverlayVisibility((o.showMapStyleContent??!0)&&(o.showMapStyleLabels??!0)))},[o.enabled,o.showMapStyleContent,o.showMapStyleLabels,h]),Y.useEffect(()=>{var f;o.enabled&&((f=u.current)==null||f.updateMapStyleElevationVisibility(o.showMapStyleElevationLines??!1,o.showMapStyleElevationLabels??!1))},[o.enabled,o.showMapStyleElevationLines,o.showMapStyleElevationLabels,h]),Y.useEffect(()=>{var f;o.enabled&&((f=u.current)==null||f.updateSunDebugVectorVisibility((o.showProjectionDebugView??!1)&&(o.showSunDebugVector??!0)))},[o.enabled,o.showProjectionDebugView,o.showSunDebugVector,h]),Y.useEffect(()=>{if(!e)return;const f=o.enabled&&(o.showProjectionDebugView??!1)&&(o.showTileBounds??!0);if(!f)return;const y=new Set,T=()=>{var b;const C=xe(e);for(const I of y)C.includes(I)||y.delete(I);for(const I of C)y.has(I)||((b=I.setTileBoundsVisible)==null||b.call(I,f),y.add(I))};T();const R=Ao(e,T);return()=>{var C;R();for(const b of xe(e))(C=b.setTileBoundsVisible)==null||C.call(b,!1)}},[e,h,o.enabled,o.showProjectionDebugView,o.showTileBounds]),Y.useEffect(()=>{var f;o.enabled&&((f=u.current)==null||f.updateAtmosphericLutUsage({useTransmittanceLut:o.useTransmittanceLut??!0,useIrradianceLut:o.useSkyIrradianceLut??!0}))},[o.enabled,o.useSkyIrradianceLut,o.useTransmittanceLut,h]),Y.useEffect(()=>{var f;o.enabled&&((f=u.current)==null||f.updateTerrainColor(o.terrainColor??Eo))},[o.enabled,o.terrainColor,h]),Y.useEffect(()=>{var f;o.enabled&&((f=u.current)==null||f.updateBuildingAppearance({fullOpacity:o.buildingsFullOpacity??!0,uniformColor:o.buildingColor??Dl,uniformColorMix:Ye(o.buildingColorMix??Pl,0,1),textureColorCorrection:o.meshTextureColorCorrection??!0,textureSaturation:Ye(o.meshTextureSaturation??Ol,0,1)}))},[o.buildingColor,o.buildingColorMix,o.buildingsFullOpacity,o.enabled,o.meshTextureSaturation,o.meshTextureColorCorrection,h]),null},Bp=r=>({...r,animationMode:Xt.DAY,animationSpeed:4,isAnimating:!1,shadowIntensity:1,meshTextureColorCorrection:!0,showSunDebugVector:!0,showTileBounds:!0,showProjectionDebugView:!1,showDisplaySettings:!1,showMapStyleContent:!0,showMapStyleLabels:!0,showMapStyleElevationLines:!1,showMapStyleElevationLabels:!1,useTransmittanceLut:!0,useSkyIrradianceLut:!0,shadowBufferLayout:void 0,shadowBufferFormat:void 0,shadowSunDiscSamples:void 0,shadowMsaaSamples:void 0,shadowGroundTexelFit:void 0,shadowAdaptiveQuality:void 0}),Up=({location:r,state:e,setState:t,dateState:i,setDateState:n})=>{const s=e.animationMode??Xt.DAY,a=e.animationSpeed??4,o=(c,l)=>n(Ql(i,i.year,Nl(i.year,c,l),r));return k.jsxs(k.Fragment,{children:[k.jsxs("section",{className:"min-w-0",children:[k.jsx("h3",{className:"mb-1.5 text-xs font-medium uppercase tracking-wide text-neutral-500",children:"Datum"}),k.jsxs("div",{className:"grid grid-cols-2 gap-2","data-test-id":"shadow-date-shortcuts",children:[k.jsx("button",{type:"button",className:gr,onClick:()=>n(Zl(i,r)),children:"Heute"}),k.jsx("button",{type:"button",className:gr,onClick:()=>o(2,21),children:"21. März"}),k.jsx("button",{type:"button",className:gr,onClick:()=>o(5,21),children:"21. Juni"}),k.jsx("button",{type:"button",className:gr,onClick:()=>o(11,21),children:"21. Dezember"})]})]}),k.jsxs("section",{children:[k.jsx("h3",{className:"mb-1.5 text-xs font-medium uppercase tracking-wide text-neutral-500",children:"Uhrzeit"}),k.jsx("div",{className:"grid grid-cols-4 gap-2",children:[9,12,15,18].map(c=>k.jsx("button",{type:"button",className:gr,onClick:()=>n(ss(i,{...i,minutes:c*60},r)),children:iu(c)},c))})]}),k.jsxs("section",{children:[k.jsx("h3",{className:"mb-1.5 text-xs font-medium uppercase tracking-wide text-neutral-500",children:"Animation"}),k.jsxs("div",{className:"flex flex-wrap items-center gap-x-3 gap-y-2",children:[k.jsx("div",{className:"flex shrink-0 overflow-hidden rounded-md border border-neutral-300",children:[[Xt.DAY,"Tagesverlauf"],[Xt.YEAR,"Jahresverlauf"]].map(([c,l])=>k.jsx("button",{type:"button",className:`${Co} ${s===c?"bg-amber-50 font-medium text-amber-700":"bg-white"}`,"aria-pressed":s===c,onClick:()=>{const u=c;t({...e,animationMode:u,isAnimating:s===u?!e.isAnimating:!0})},children:l},c))}),k.jsx(au,{value:a,onChange:c=>t({...e,animationSpeed:c})})]})]})]})},Hp=({location:r,state:e,setState:t,dateState:i,setDateState:n})=>{const s=e.shadowIntensity??1,a=Y.useMemo(()=>gi(i,r),[i,r]);return k.jsxs("div",{className:"w-full","data-test-id":"shadow-simulation-secondary-panel",children:[k.jsxs("div",{className:"mb-2 flex flex-wrap items-center justify-between gap-x-4 gap-y-2",children:[k.jsxs("span",{className:"whitespace-nowrap text-sm tabular-nums text-neutral-500",children:["Höhe ",a.elevationDegrees.toFixed(0),"° · Azimut"," ",a.azimuthDegrees.toFixed(0),"°"]}),k.jsx("div",{className:"flex items-center gap-5 text-sm text-neutral-600",children:k.jsxs("button",{type:"button",className:"flex items-center gap-2 whitespace-nowrap hover:text-amber-700",onClick:()=>{t(Bp(e)),n(Jl(i,r))},children:[k.jsx(Nn,{icon:zl}),"Zurücksetzen"]})})]}),k.jsxs("div",{className:"grid grid-cols-1 gap-x-8 gap-y-4 lg:grid-cols-2",children:[k.jsx(Up,{location:r,state:e,setState:t,dateState:i,setDateState:n}),k.jsxs("section",{className:"min-w-0",children:[k.jsxs("h3",{className:"mb-1.5 flex items-center gap-1 text-xs font-medium uppercase tracking-wide text-neutral-500",children:["Darstellung",k.jsx("button",{type:"button",className:"inline-flex items-center justify-center p-1 text-neutral-700 hover:text-amber-700","aria-label":"Darstellungseinstellungen",title:"Darstellungseinstellungen","aria-expanded":e.showDisplaySettings??!1,onClick:()=>t({...e,showDisplaySettings:!e.showDisplaySettings}),"data-test-id":"shadow-simulation-display-settings",children:k.jsx(Nn,{icon:kl})})]}),k.jsxs("label",{className:"grid grid-cols-[110px_minmax(0,1fr)_42px] items-center gap-3 text-sm text-neutral-700",children:[k.jsx("span",{children:"Intensität"}),k.jsx("input",{type:"range",min:0,max:1,step:.01,value:s,onChange:o=>t({...e,shadowIntensity:Number(o.currentTarget.value)}),className:"shadow-simulation-range min-w-0 cursor-pointer",style:nu(s,0,1),"aria-label":"Schattenintensität","data-test-id":"shadow-simulation-intensity"}),k.jsxs("span",{className:"text-right tabular-nums",children:[Math.round(s*100),"%"]})]})]})]})]})},zp=Y.lazy(()=>Fr(()=>import("./ShadowProjectionDebugView-obt3a6lp.js"),__vite__mapDeps([12,3,1,4,5,6,2,7,8,9,10,13])).then(r=>({default:r.ShadowProjectionDebugView}))),kp=Y.lazy(()=>Fr(()=>import("./ShadowSimulationDisplaySettingsPanel-zElByz2N.js"),__vite__mapDeps([14,3,1,4,5,6,2,7,8,9,10])).then(r=>({default:r.ShadowSimulationDisplaySettingsPanel}))),Vp=Y.lazy(()=>Fr(()=>import("./ShadowSimulationCurveSettings-F3f1vm7b.js"),__vite__mapDeps([15,3,1,4,5,6,2,7,8,9,10])).then(r=>({default:r.ShadowSimulationCurveSettings}))),Wp="#1677ff",og=({config:r,debugEnabled:e=!0,libreMap:t,targeted:i,sharedState:n,setSharedState:s,sharedDateState:a,setSharedDateState:o})=>{var O,se;const{year:c,initialDayOfYear:l,initialMinutes:u,latitude:d=ta.latitude,longitude:p=ta.longitude,timeZone:g=Hl,shadowAreaMeters:h,terrain:v,terrainSources:f,mapLibreTerrain:y,controlPosition:T="topleft",controlOrder:R=70,experimentalTiledShadows:C=!1}=r??{},b=ru(t,d,p),I=Y.useMemo(()=>Ll({terrain:v,terrainSources:f}),[v,f]),N=Y.useMemo(()=>a??Fl({year:c,initialDayOfYear:l,initialMinutes:u,timeZone:g},b),[a,l,u,b,g,c]),E=n??I,L=Y.useMemo(()=>e?E:{...E,showProjectionDebugView:!1,showTileDiagnostics:!1},[e,E]),F=a??N,W=Y.useMemo(()=>f??(v?[{label:v.id,terrain:v}]:void 0),[v,f]),V=((O=W==null?void 0:W.find(({terrain:P})=>P.id===E.terrainSourceId))==null?void 0:O.terrain)??((se=W==null?void 0:W[0])==null?void 0:se.terrain);return Y.useEffect(()=>{n||s(I)},[I,s,n]),Y.useEffect(()=>{a||o(N)},[N,o,a]),i?k.jsx(Hp,{location:b,state:E,setState:s,dateState:F,setDateState:o}):k.jsxs(k.Fragment,{children:[t&&k.jsx(Bl,{position:T,order:R,children:k.jsx(Yc,{title:E.enabled?"Schattensimulation ausschalten":"Schattensimulation einschalten",placement:"right",children:k.jsx(Ul,{onClick:()=>s({...E,enabled:!E.enabled}),dataTestId:"shadow-simulation-control-button","aria-label":E.enabled?"Schattensimulation ausschalten":"Schattensimulation einschalten","aria-pressed":E.enabled,children:k.jsx(Nn,{icon:Vl,style:E.enabled?{color:Wp}:void 0})})})}),k.jsx(Fp,{tiledShadows:C,libreMap:t,shadowAreaMeters:h,terrain:V,mapLibreTerrain:y,terrainQuality:E.terrainQuality,location:b,state:L,dateState:F,setDateState:o}),E.controlStyle===ea.CURVE&&k.jsx(Y.Suspense,{fallback:null,children:k.jsx(Vp,{location:b,dateState:F,setDateState:o,onClose:()=>s({...E,controlStyle:ea.QUICK})})}),E.showDisplaySettings&&k.jsx(Y.Suspense,{fallback:null,children:k.jsx(kp,{tiledShadows:C,debugEnabled:e,state:E,setState:s,terrainSources:W,map:t})}),e&&E.enabled&&E.showProjectionDebugView&&t&&k.jsx(Y.Suspense,{fallback:null,children:k.jsx(zp,{map:t,solarPosition:gi(F,b),settings:{showSunDebugVector:E.showSunDebugVector??!0,showTileBounds:E.showTileBounds??!0},onSettingsChange:P=>s({...E,...P}),onClose:()=>s({...E,showProjectionDebugView:!1})})})]})};export{Jp as M,Pr as S,ru as a,nu as b,ss as c,au as d,og as e,oa as f,Xl as g,ng as h,ig as i,eg as j,Zp as k,Xn as l,ag as m,sg as p,ua as r,$l as s,lu as u};
