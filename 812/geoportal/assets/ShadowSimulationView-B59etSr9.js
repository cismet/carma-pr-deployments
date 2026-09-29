const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/shadow-sun-vector-BbV1W7vN.js","assets/index-BJhRxDqs.js","assets/vendor-react-core-CwrcegUJ.js","assets/vendor-ui-icons-F4ThQIkJ.js","assets/vendor-cismap-DRowzj82.js","assets/vendor-leaflet-CJN6VdU1.js","assets/vendor-ui-Bem38lHV.js","assets/vendor-cismap-DCHbl3AQ.css","assets/vendor-cesium-CARmC0vB.js","assets/vendor-maplibre-BRH1aW5K.js","assets/index-DqZFQRtA.css","assets/ShadowProjectionDebugView-CUioHpAx.js","assets/ViewStateVisualizer-BMrym2-7.js","assets/ShadowSimulationDisplaySettingsPanel-sjkjgGTZ.js","assets/ShadowSimulationCurveSettings-BquFQa4L.js"])))=>i.map(i=>d[i]);
import{r as j,d as Jc}from"./vendor-react-core-CwrcegUJ.js";import{O as el,d as tl}from"./vendor-ui-Bem38lHV.js";import{b as Nr,ab as Ci,ac as er,ad as Or,ae as rl,af as _o,c as Br,ag as rs,ah as ie,ai as Ge,aj as Ye,ak as xt,al as Lr,am as De,an as ir,ao as Bt,a1 as xo,X as To,_ as il,a3 as is,a4 as tr,ap as bo,aq as we,ar as $t,as as Qt,I as z,at as Ur,au as ee,av as ct,V as T,aw as nl,e as Le,ax as Mo,ay as sl,az as al,aA as Ro,aB as D,aC as Ii,aD as Eo,O as ns,aE as Ao,aF as Js,k as ss,aG as ol,aH as Hn,aI as ea,aJ as as,aK as cl,aL as ll,aM as ta,aN as ul,aO as dl,aP as hl,aQ as Co,aR as It,aS as ml,aT as Io,J as ra,aU as qe,aV as fl,D as Do,aW as pl,j as gl,d as vl,aX as zn,aY as cn,aZ as yl,a_ as Sl,a$ as pi,b0 as Po,b1 as Zt,b2 as wl,b3 as os,b4 as No,b5 as _l,b6 as xl,b7 as Tl,aa as Ve,b8 as bl,b9 as Ml,ba as Rl,bb as Lt,bc as cs,bd as El,be as Oo,bf as Lo,w as Al,bg as ia,bh as Te,bi as ln,bj as un,G as ls,bk as Cl,bl as Fo,bm as Il,bn as Di,bo as ri,bp as Dl,bq as yi,br as dn,bs as Pl,bt as Nl,bu as Ol,bv as hn,bw as na,bx as Sr,by as Ll,bz as Fl,bA as mn,bB as Bl,t as Si,bC as Ul,bD as sa,bE as Hl,bF as zl,bG as kl,a0 as Vl,bH as Gl,bI as Wl,bJ as jl,bK as Yl,bL as aa,a6 as oa,a8 as ql}from"./index-BJhRxDqs.js";import{F as kn,bc as Kl,bi as Xl,x as $l}from"./vendor-ui-icons-F4ThQIkJ.js";import{a as Ql}from"./vendor-maplibre-BRH1aW5K.js";import"./vendor-cismap-DRowzj82.js";import"./vendor-leaflet-CJN6VdU1.js";const ca=20;class Zl{constructor(e,r=256*1024**2){this.renderer=e,this.maximumBytes=r,this.quad.frustumCulled=!1,this.scene.add(this.quad)}target=null;key=null;broken=!1;captures=0;reuses=0;scene=new Nr;camera=new Ci;material=new er({glslVersion:Or,uniforms:{color:{value:null},depth:{value:null}},vertexShader:`out vec2 uvCopy;
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
      }`,depthTest:!0,depthFunc:rl,depthWrite:!0,transparent:!0,blending:_o});quad=new Br(new rs(2,2),this.material);get stats(){return{captures:this.captures,reuses:this.reuses,bytes:this.target?this.target.width*this.target.height*ca:0,broken:this.broken}}invalidate(){this.key=null}render(e,r,i,n){var f,S;const s=this.renderer;if(this.broken||!Number.isInteger(r)||!Number.isInteger(i)||r<1||i<1||r>s.capabilities.maxTextureSize||i>s.capabilities.maxTextureSize||r*i*ca>this.maximumBytes||!s.extensions.has("EXT_color_buffer_float"))return this.releaseTarget(),n(),!1;const a=s.getRenderTarget(),o=s.getActiveCubeFace(),c=s.getActiveMipmapLevel(),l=s.getViewport(new ie),u=s.getScissor(new ie),d=s.getScissorTest(),g=s.getClearColor(new Ge),p=s.getClearAlpha(),h=s.autoClear,y=()=>{s.setRenderTarget(a,o,c),s.setViewport(l),s.setScissor(u),s.setScissorTest(d),s.setClearColor(g,p),s.autoClear=h};try{if(((f=this.target)==null?void 0:f.width)!==r||((S=this.target)==null?void 0:S.height)!==i){this.releaseTarget(),this.target=new Ye(r,i,{type:xt,format:Lr,minFilter:De,magFilter:De,depthTexture:new ir(r,i,Bt),samples:0});try{s.initRenderTarget(this.target)}catch{return this.broken=!0,this.releaseTarget(),y(),n(),!1}}const b=JSON.stringify([e,r,i,s.outputColorSpace,s.toneMapping,s.toneMappingExposure,a==null?void 0:a.texture.colorSpace]);return s.autoClear=!1,this.key!==b?(this.key=null,s.setRenderTarget(this.target),s.setViewport(new ie(0,0,r,i)),s.setScissorTest(!1),s.setClearColor(0,0),s.clear(!0,!0,!1),n(),this.key=b,this.captures+=1):this.reuses+=1,y(),s.autoClear=!1,this.material.uniforms.color.value=this.target.texture,this.material.uniforms.depth.value=this.target.depthTexture,s.render(this.scene,this.camera),!0}catch(b){throw this.invalidate(),b}finally{y()}}releaseTarget(){var e,r,i;(r=(e=this.target)==null?void 0:e.depthTexture)==null||r.dispose(),(i=this.target)==null||i.dispose(),this.target=null,this.key=null}dispose(){this.releaseTarget(),this.broken=!0,this.material.dispose(),this.quad.geometry.dispose()}}const la=(t,e,r,i,n)=>{const s=i+e,a=Math.floor(s),o=s-a;if(a===0)return{dateState:t,yearDayProgress:o};const c=n?{year:t.year,dayOfYear:(t.dayOfYear-1+a)%xo(t.year)+1}:il(t,a);return{dateState:(n?{...t,...c}:is({...t,...c},r))??t,yearDayProgress:o}},ua=(t,e,r,i,n)=>{if(!n)return{dateState:{...t,minutes:(t.minutes+e)%1440},yearDayProgress:0};const s=To(t,r),a=Math.ceil(s.sunriseMinutes),o=Math.floor(s.sunsetMinutes),l=(i&&(t.minutes<a||t.minutes>o)?a:t.minutes)+e;return{dateState:{...t,minutes:l>o?a+(i?(l-a)%Math.max(1,o-a):0):l},yearDayProgress:0}},Jl=(t,e,r,i,n,s={})=>{const a=e??r;if(!(t!=null&&t.enabled)||!t.isAnimating)return{dateState:a,yearDayProgress:n};const o=s.elapsedMs!==void 0,c=(t.animationMode??tr.DAY)===tr.YEAR,l=t.animationDaylightOnly!==!1,u=t.animationCycleSeconds;if(o&&u!==void 0&&u>0){const g=Math.max(0,s.elapsedMs??0)/(u*1e3);if(c)return la(a,g*xo(a.year),i,n,!0);const p=To(a,i),h=l?Math.max(1,p.sunsetMinutes-p.sunriseMinutes):1440;return ua(a,g*h,i,!0,l)}const d=(t.animationSpeed??4)*(o?Math.max(0,s.elapsedMs??0)*60/1e3:1);return c?la(a,d/(o?4:2),i,n,o):ua(a,d,i,o,l)},ii=3,eu=.5,st=64,da=.01,ha=(t,e,r)=>Math.min(r**2,Math.max(st**2,Math.floor(t!==void 0&&Number.isFinite(t)&&t>0?t:e))),ma=(t,e)=>{const{mapSize:r,maxMapSize:i,elevationSine:n,sunDiscGuardMeters:s,groundTexelFit:a}=e,o=t.right-t.left+2*s,c=t.top-t.bottom+2*s,l=Math.max(da,Math.abs(n)),d=2*(a?ii+eu:ii);let g=r,p=r,h=!1,y=!1;const f=e.groundTexelTargetMeters;if(f!==void 0&&(!Number.isFinite(f)||f<=0))throw new RangeError("Shadow ground texel target must be positive and finite");if(f!==void 0){const G=fe=>Math.max(st,2**Math.ceil(Math.log2(fe))),H=G(o/f+d),X=G(c/(f*l)+d);g=Math.min(i,H),p=Math.min(i,X),h=g<H||p<X}else if(a){const G=o*l/c,H=e.mapTexelBudget??r*r,X=d*(G+1),fe=H-d*d,M=2*fe/(X+Math.sqrt(X**2+4*G*fe)),Z=G*M+d,F=M+d;h=Z>i||F>i;const te=Math.max(o,c)/(r-d),$=Math.min(r,Math.max(st,Math.ceil((o/te+d)/st)*st)),de=Math.min(r,Math.max(st,Math.ceil((c/te+d)/st)*st));y=Z<$||F<de;const be=Math.min(Math.max(Z,$,H/i),i,H/de),P=J=>Math.floor(J/st+1e-9)*st;g=Math.max($,P(be)),p=Math.max(de,P(Math.min(i,H/g)))}const S=e.mapDimensions;S&&(y||(y=g!==S.width||p!==S.height),g=S.width,p=S.height);const b=o/Math.max(1,g-d),A=c/Math.max(1,p-d),C=Math.max(b,A,Number.EPSILON),R=a?b:C,I=a?A:C,E=Math.round((t.left+t.right)/2/R)*R,O=Math.round((t.bottom+t.top)/2/I)*I,B=R*g,U=I*p;return{left:E-B/2,right:E+B/2,bottom:O-U/2,top:O+U/2,mapWidth:g,mapHeight:p,metersPerTexelX:R,metersPerTexelY:I,guardMetersX:R*ii,guardMetersY:I*ii,groundTexelWidthMeters:R,groundTexelHeightMeters:Math.abs(n)>Number.EPSILON?I/Math.abs(n):1/0,groundTexelFitLimited:a&&(h||y||Math.abs(n)<da)}},tu=(t,e,r)=>{if(r<=0)return{planarMeters:0,depthMeters:0};const i=Math.sqrt(Math.max(0,1-e**2)),n=i>Math.sin(r)?Math.asin(Math.sin(r)/i):Math.PI;return{planarMeters:2*t*Math.sin(Math.min(Math.PI,n+r)/2),depthMeters:2*t*Math.sin(r/2)}},ru=t=>{const e=Math.floor(t/2)+1,r=t%2===0?1:-1;return[r*(e*.7548776662466927%1-.5),r*(e*.5698402909980532%1-.5)]},us=(t,e,r)=>is(e,r)??t,iu=(t,e,r,i)=>us(t,{...t,year:e,dayOfYear:r},i),nu=(t,e,r=new Date)=>{const i=bo(r,t.timeZone);return us(t,{...i,minutes:t.minutes},e)},su=(t,e,r=new Date)=>{const i=bo(r,t.timeZone);return is(i,e)??t},au=(t,e)=>({latitude:(t==null?void 0:t.latitude)??e.latitude,longitude:(t==null?void 0:t.longitude)??e.longitude}),ou=(t,e)=>t.latitude===e.latitude&&t.longitude===e.longitude,fa=(t,e,r)=>{const i=t==null?void 0:t.getCenter();return au(i?{latitude:i.lat,longitude:i.lng}:null,{latitude:e,longitude:r})},cu=(t,e,r)=>{const[i,n]=j.useState(()=>fa(t,e,r));return j.useEffect(()=>{const s=()=>{const a=fa(t,e,r);n(o=>ou(o,a)?o:a)};if(s(),!!t)return t.on(we.MOVE_END,s),()=>{t.off(we.MOVE_END,s)}},[e,r,t]),i},wr="flex h-9 min-w-0 items-center justify-center whitespace-nowrap rounded-md border border-neutral-300 bg-white px-1 text-center text-sm text-neutral-800 transition-colors hover:border-amber-500 hover:text-amber-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/40",Bo="h-8 whitespace-nowrap border-r border-neutral-300 px-3 text-sm text-neutral-700 transition-colors last:border-r-0 hover:text-amber-700",ig=[{label:"120 FPS",value:$t.FPS_120},{label:"60 FPS",value:$t.FPS_60},{label:"30 FPS",value:$t.FPS_30},{label:"Ultra",value:$t.ULTRA}],ng=[{label:"0,25 px",value:.25},{label:"0,5 px",value:.5},{label:"1 px",value:1},{label:"2 px",value:2},{label:"4 px",value:4}],sg=[{value:Qt.HDR_16,label:"HDR · 16 Bit (Experiment)"},{value:Qt.HDR_16_32,label:"HDR · 16/32 Bit (Standard)"},{value:Qt.HDR_32,label:"HDR · 32 Bit (ohne MSAA)"},{value:Qt.SDR_8,label:"SDR · 8 Bit (Experiment)"}],lu=t=>`${String(t).padStart(2,"0")}:00`,uu=(t,e,r)=>({"--shadow-range-progress":`${r>e?Math.max(0,Math.min(100,(t-e)/(r-e)*100)):0}%`});var du={exports:{}};(function(t,e){(function(r,i){t.exports=i(el)})(Jc,function(r){function i(c){return c&&typeof c=="object"&&"default"in c?c:{default:c}}var n=i(r),s={s:"ein paar Sekunden",m:["eine Minute","einer Minute"],mm:"%d Minuten",h:["eine Stunde","einer Stunde"],hh:"%d Stunden",d:["ein Tag","einem Tag"],dd:["%d Tage","%d Tagen"],M:["ein Monat","einem Monat"],MM:["%d Monate","%d Monaten"],y:["ein Jahr","einem Jahr"],yy:["%d Jahre","%d Jahren"]};function a(c,l,u){var d=s[u];return Array.isArray(d)&&(d=d[l?0:1]),d.replace("%d",c)}var o={name:"de",weekdays:"Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),weekdaysShort:"So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),weekdaysMin:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),months:"Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sept._Okt._Nov._Dez.".split("_"),ordinal:function(c){return c+"."},weekStart:1,yearStart:4,formats:{LTS:"HH:mm:ss",LT:"HH:mm",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY HH:mm",LLLL:"dddd, D. MMMM YYYY HH:mm"},relativeTime:{future:"in %s",past:"vor %s",s:a,m:a,mm:a,h:a,hh:a,d:a,dd:a,M:a,MM:a,y:a,yy:a}};return n.default.locale(o,null,!0),o})})(du);const hu=({value:t,onChange:e})=>z.jsx("div",{role:"group","aria-label":"Animationsgeschwindigkeit",className:"flex shrink-0 overflow-hidden rounded-md border border-neutral-300",children:[1,4,12].map(r=>z.jsxs("button",{type:"button",className:`${Bo} px-3 ${t===r?"bg-amber-50 font-medium text-amber-700":"bg-white"}`,"aria-pressed":t===r,onClick:()=>e(r),children:[r,"×"]},r))}),mu=1e3/30,fu=250,pu=({dateState:t,setDateState:e,location:r,shadowState:i,onFrame:n,realtime:s=!1})=>{const a=j.useRef(null),o=j.useRef(null),c=j.useRef(t),l=j.useRef(t),u=j.useRef(e),d=j.useRef(n);l.current=t,u.current=e,d.current=n;const{animationMode:g,animationSpeed:p,animationCycleSeconds:h,animationDaylightOnly:y,enabled:f,isAnimating:S}=i,b=f&&(S??!1);return j.useEffect(()=>{const A=t!==c.current;if(c.current=t,!!A){if(t===o.current){b||(a.current=null);return}a.current=null}},[b,t]),j.useEffect(()=>{if(!b)return;const A={animationMode:g,animationSpeed:p,animationCycleSeconds:h,animationDaylightOnly:y,enabled:f,isAnimating:S};let C=0,R=performance.now(),I=R;const E=H=>{o.current=H,u.current(H)},O=H=>{const X=a.current??l.current,fe=Jl(A,X,X,r,C,s?{elapsedMs:H-I}:void 0);I=H,C=fe.yearDayProgress,a.current=fe.dateState,d.current(fe.dateState),H-R>=fu&&(R=H,E(fe.dateState))};let B=0;const U=H=>{O(H),B=requestAnimationFrame(U)},G=s?void 0:window.setInterval(()=>O(performance.now()),mu);return s&&(B=requestAnimationFrame(U)),()=>{G!==void 0&&window.clearInterval(G),s&&cancelAnimationFrame(B);const H=a.current;H&&H!==o.current&&E(H)}},[b,g,p,h,y,f,S,r,s]),a},pa=new WeakMap,ga=(t,e,r,i,n="shadow-and-color")=>{const s=()=>r.render(t,i);if(e===void 0)return s(),!0;const a=t.getObjectById(e);if(!a)return!1;let o=pa.get(a);if(!o){const l=new Set;a.traverse(u=>l.add(u)),pa.set(a,l),o=l}if(n==="color-only"){const l=new Set;for(let d=a.parent;d;d=d.parent)l.add(d);const u=[];t.traverse(d=>{d.isMesh&&d.visible&&!o.has(d)&&!l.has(d)&&(u.push(d),d.visible=!1)});try{return s(),!0}finally{for(const d of u)d.visible=!0}}const c=r.renderBufferDirect;r.renderBufferDirect=function(...l){const[u,,,,d]=l;u===i&&d.isMesh&&!o.has(d)||c.apply(this,l)};try{return s(),!0}finally{r.renderBufferDirect=c}},va=[[0,1],[1,3],[3,2],[2,0],[4,5],[5,7],[7,6],[6,4],[0,4],[1,5],[2,6],[3,7]],gu=({min:t,max:e})=>[new T(t.x,t.y,t.z),new T(e.x,t.y,t.z),new T(t.x,e.y,t.z),new T(e.x,e.y,t.z),new T(t.x,t.y,e.z),new T(e.x,t.y,e.z),new T(t.x,e.y,e.z),new T(e.x,e.y,e.z)],vu=t=>[t.coordinateSystem===nl?0:-1,1].flatMap(r=>[-1,1].flatMap(i=>[-1,1].map(n=>new T(n,i,r).unproject(t)))),fn=(t,e,r)=>t.every(i=>i.distanceToPoint(e)>=-r),ya=(t,e,r)=>e.x>=t.min.x-r&&e.x<=t.max.x+r&&e.y>=t.min.y-r&&e.y<=t.max.y+r&&e.z>=t.min.z-r&&e.z<=t.max.z+r,Vn=(t,e,r)=>{t.some(i=>i.distanceToSquared(e)<=r)||t.push(e)},Sa=(t,e,r,i,n,s)=>{const a=e.clone().sub(t);for(const o of r){const c=o.distanceToPoint(t),l=o.distanceToPoint(e),u=c-l;if(Math.abs(u)<=Number.EPSILON)continue;const d=c/u;if(d<0||d>1)continue;const g=t.clone().addScaledVector(a,d);i(g)&&Vn(n,g,s)}},Uo=(t,e,r=1e-6)=>{if(e.isEmpty())return[];t.updateMatrixWorld(!0);const i=new Ur().setFromProjectionMatrix(new ee().multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),t.coordinateSystem,t.reversedDepth);if(!i.intersectsBox(e))return[];const n=r*r,s=gu(e),a=vu(t),o=[];for(const l of s)fn(i.planes,l,r)&&Vn(o,l,n);for(const l of a)ya(e,l,r)&&Vn(o,l,n);for(const[l,u]of va)Sa(s[l],s[u],i.planes,d=>fn(i.planes,d,r),o,n);const c=[new ct(new T(1,0,0),-e.min.x),new ct(new T(-1,0,0),e.max.x),new ct(new T(0,1,0),-e.min.y),new ct(new T(0,-1,0),e.max.y),new ct(new T(0,0,1),-e.min.z),new ct(new T(0,0,-1),e.max.z)];for(const[l,u]of va)Sa(a[l],a[u],c,d=>ya(e,d,r)&&fn(i.planes,d,r),o,n);return o},Ho=(t,e)=>{const r=Hr(t).map(o=>new ie(o.x,o.y,o.z,1).applyMatrix4(e));if(r.some(o=>o.w<=0))return new ie(0,0,1,1);const i=Math.max(0,(Math.min(...r.map(o=>o.x/o.w))+1)/2),n=Math.max(0,(Math.min(...r.map(o=>o.y/o.w))+1)/2),s=Math.min(1,(Math.max(...r.map(o=>o.x/o.w))+1)/2),a=Math.min(1,(Math.max(...r.map(o=>o.y/o.w))+1)/2);return new ie(i,n,Math.max(0,s-i),Math.max(0,a-n))},Hr=t=>[t.min.x,t.max.x].flatMap(e=>[t.min.y,t.max.y].flatMap(r=>[t.min.z,t.max.z].map(i=>new T(e,r,i)))),zo=(t,e,r)=>{const i=e.elements,n=Hr(t).map(o=>new ie(o.x,o.y,o.z,1).applyMatrix4(e)),s=Math.min(...n.map(o=>o.w));if(s<=0)return 1/0;let a=0;for(const[o,c]of[[0,r.x],[1,r.y]])for(let l=0;l<3;l+=1){const u=Math.max(...n.map(d=>Math.abs(i[l*4+o]*d.w-(o===0?d.x:d.y)*i[l*4+3])));a+=(c*.5*u/(s*s))**2}return Math.sqrt(a)},yu=(t,e,r,i)=>{if(!(i>0&&Number.isFinite(i))||!(r.x>0&&r.y>0))throw new RangeError("Shadow page projection requires a positive pixel target and viewport");const n=new ee().multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),s=new Set;for(const{id:o,bounds:c}of t){if(s.has(o)||c.isEmpty()||![...c.min.toArray(),...c.max.toArray()].every(Number.isFinite))throw new RangeError("Receiver cells require unique IDs and finite, nonempty bounds");s.add(o)}const a=new Ur().setFromProjectionMatrix(n);return t.filter(({bounds:o})=>a.intersectsBox(o)).map(o=>({...o,screenBounds:Ho(o.bounds,n),groundTexelTargetMeters:Math.max(1e-9,i/zo(o.bounds,n,r))}))},Su=(t,e,r,i,n)=>t.clone().union(t.clone().translate(e.clone().normalize().multiplyScalar(r))).expandByScalar(2*r*Math.sin(i/2)+n),wu=(t,e)=>t.flatMap(({bounds:r})=>Uo(e,r).length>0?Hr(r):[]),ni={WEST:"west",EAST:"east",SOUTH:"south",NORTH:"north"},_r=({bounds:t})=>(t.max.x-t.min.x)*(t.max.z-t.min.z),_u=(t,e)=>t.min.z===e.min.z&&t.max.z===e.max.z&&(t.max.x===e.min.x||e.max.x===t.min.x)||t.min.x===e.min.x&&t.max.x===e.max.x&&(t.max.z===e.min.z||e.max.z===t.min.z),xu=t=>{const e=new Map(t.map(i=>[i.id,i]));let r=!0;for(;r;){r=!1;for(const i of e.values()){if(Math.min(i.bounds.max.x-i.bounds.min.x,i.bounds.max.z-i.bounds.min.z)>=i.fragmentMergeWidthMeters)continue;const s=_r(i),a=[...e.values()].filter(o=>o!==i&&(_r(o)>s||_r(o)===s&&o.id<i.id)&&_u(i.bounds,o.bounds)).sort((o,c)=>_r(c)-_r(o)||(o.id<c.id?-1:o.id>c.id?1:0))[0];if(a){e.set(a.id,{...a,bounds:a.bounds.clone().union(i.bounds)}),e.delete(i.id),r=!0;break}}}return[...e.values()].map(({id:i,bounds:n})=>({id:i,bounds:n}))},pn=t=>({west:t.min.x,east:t.max.x,south:t.min.z,north:t.max.z}),ko=(t,e)=>t.west<e.east&&t.east>e.west&&t.south<e.north&&t.north>e.south,Tu=(t,e,r)=>{if(!ko(t,e))return[t];const i=Math.max(t.west,e.west),n=Math.min(t.east,e.east),s=Math.max(t.south,e.south),a=Math.min(t.north,e.north);return[{...t,east:i,side:ni.WEST},{...t,west:n,side:ni.EAST},{west:i,east:n,south:t.south,north:s,side:ni.SOUTH},{west:i,east:n,south:a,north:t.north,side:ni.NORTH}].filter(o=>o.west<o.east&&o.south<o.north).map(({side:o,...c})=>({...c,splitPath:[...t.splitPath,r,o]}))},bu=t=>{const e=new Set;for(const{id:n,bounds:s}of t){if(e.has(n)||s.isEmpty()||![...s.min.toArray(),...s.max.toArray()].every(Number.isFinite))throw new RangeError("Receiver tiles require unique IDs and finite bounds");e.add(n)}const r=[...t].sort((n,s)=>n.id<s.id?-1:n.id>s.id?1:0);if(r.every(({receiverObjectId:n})=>n!==void 0))return r;const i=r.flatMap(({id:n,bounds:s},a)=>{const o=pn(s);return o.west===o.east||o.south===o.north?[]:r.slice(0,a).reduce((l,u)=>l.flatMap(d=>Tu(d,pn(u.bounds),u.id)),[{...o,splitPath:[]}]).map(l=>{const u=r.reduce((d,g)=>ko(l,pn(g.bounds))?[Math.min(d[0],g.bounds.min.y),Math.max(d[1],g.bounds.max.y)]:d,[s.min.y,s.max.y]);return{fragmentMergeWidthMeters:l.splitPath.length===0?0:Math.max(.1,.01*Math.min(o.east-o.west,o.north-o.south)),id:l.splitPath.length===0?n:JSON.stringify([n,...l.splitPath]),bounds:new Le(new T(l.west,u[0],l.south),new T(l.east,u[1],l.north))}})});return xu(i)},Mu=(t,e=16)=>{if(!Number.isInteger(e)||e<=0||t.length===0)return[];const i=t.reduce((c,l)=>c.union(l.bounds),new Le).getCenter(new T),n=new Set(t.map(({id:c})=>c)),s=new Map;for(const c of t){const l=c.bounds.max.x-c.bounds.min.x;if(!(l>0&&Number.isFinite(l)))continue;const u=Math.round(c.bounds.min.x/l),d=Math.round(c.bounds.min.z/l);for(let g=-1;g<=1;g+=1)for(let p=-1;p<=1;p+=1){const h=`${l}:${u+g}:${d+p}`;n.has(h)||s.has(h)||s.set(h,{id:h,bounds:c.bounds.clone().translate(new T(g*l,0,p*l))})}}const a=Array.from({length:8},()=>[]);for(const c of s.values()){const l=c.bounds.getCenter(new T).sub(i),u=(Math.round(Math.atan2(l.z,l.x)/(Math.PI/4))+8)%8;a[u].push(c)}for(const c of a)c.sort((l,u)=>l.bounds.distanceToPoint(i)-u.bounds.distanceToPoint(i)||l.id.localeCompare(u.id));const o=[];for(let c=0;o.length<e;c+=1){const l=a.flatMap(u=>u[c]?[u[c]]:[]);if(l.length===0)break;o.push(...l.slice(0,e-o.length))}return o},Ru=(t,e)=>{const r=t.getCenter(new T);let i=null,n=1/0;for(const s of e){const a=s.receiverBounds.distanceToPoint(r);a<n&&Number.isInteger(s.terrainLevel)&&(n=a,i=s.terrainLevel)}return i};/**
 * postprocessing v6.39.4 build Mon Jul 27 2026
 * https://github.com/pmndrs/postprocessing
 * Copyright 2015-2026 Raoul van Rüschen
 * @license Zlib
 */var Eu=(()=>{const t=new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),e=new Float32Array([0,0,2,0,0,2]),r=new Ao;return r.setAttribute("position",new Js(t,3)),r.setAttribute("uv",new Js(e,2)),r})(),Au=class Gn{static get fullscreenGeometry(){return Eu}constructor(e="Pass",r=new Nr,i=new ns){this.name=e,this.renderer=null,this.scene=r,this.camera=i,this.screen=null,this.rtt=!0,this.needsSwap=!0,this.needsDepthBlit=!1,this.needsDepthTexture=!1,this.enabled=!0}get renderToScreen(){return!this.rtt}set renderToScreen(e){if(this.rtt===e){const r=this.fullscreenMaterial;r!==null&&(r.needsUpdate=!0),this.rtt=!e}}set mainScene(e){}set mainCamera(e){}setRenderer(e){this.renderer=e}isEnabled(){return this.enabled}setEnabled(e){this.enabled=e}get fullscreenMaterial(){return this.screen!==null?this.screen.material:null}set fullscreenMaterial(e){let r=this.screen;r!==null?r.material=e:(r=new Br(Gn.fullscreenGeometry,e),r.frustumCulled=!1,this.scene===null&&(this.scene=new Nr),this.scene.add(r),this.screen=r)}getFullscreenMaterial(){return this.fullscreenMaterial}setFullscreenMaterial(e){this.fullscreenMaterial=e}getDepthTexture(){return null}setDepthTexture(e,r=Ro){}render(e,r,i,n,s){throw new Error("Render method not implemented!")}setSize(e,r){}initialize(e,r,i){}dispose(){for(const e of Object.keys(this)){const r=this[e];(r instanceof Ye||r instanceof Ii||r instanceof Eo||r instanceof Gn)&&this[e].dispose()}this.fullscreenMaterial!==null&&this.fullscreenMaterial.dispose()}},Vo={NONE:0,DEPTH:1,CONVOLUTION:2},Q={SKIP:9,SET:30,ADD:0,ALPHA:1,AVERAGE:2,COLOR:3,COLOR_BURN:4,COLOR_DODGE:5,DARKEN:6,DIFFERENCE:7,DIVIDE:8,DST:9,EXCLUSION:10,HARD_LIGHT:11,HARD_MIX:12,HUE:13,INVERT:14,INVERT_RGB:15,LIGHTEN:16,LINEAR_BURN:17,LINEAR_DODGE:18,LINEAR_LIGHT:19,LUMINOSITY:20,MULTIPLY:21,NEGATION:22,NORMAL:23,OVERLAY:24,PIN_LIGHT:25,REFLECT:26,SATURATION:27,SCREEN:28,SOFT_LIGHT:29,SRC:30,SUBTRACT:31,VIVID_LIGHT:32},Cu="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Iu="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,src.a*opacity);}",Du="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=(dst.rgb+src.rgb)*0.5;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Pu="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.xy,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Nu="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=mix(step(0.0,b)*(1.0-min(vec3(1.0),(1.0-a)/max(b,1e-9))),vec3(1.0),step(1.0,a));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Ou="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=step(0.0,a)*mix(min(vec3(1.0),a/max(1.0-b,1e-9)),vec3(1.0),step(1.0,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Lu="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Fu="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=abs(dst.rgb-src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Bu="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb/max(src.rgb,1e-9);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Uu="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-2.0*dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Hu="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb,1.0);vec3 b=min(src.rgb,1.0);vec3 c=mix(2.0*a*b,1.0-2.0*(1.0-a)*(1.0-b),step(0.5,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",zu="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=step(1.0,dst.rgb+src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",ku="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.x,a.yz));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Vu="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Gu="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=src.rgb*max(1.0-dst.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Wu="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",ju="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Yu="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb+src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",qu="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(2.0*src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Ku="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.xy,b.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Xu="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",$u="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-abs(1.0-dst.rgb-src.rgb),0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Qu="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,opacity);}",Zu="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=2.0*src.rgb*dst.rgb;vec3 b=1.0-2.0*(1.0-src.rgb)*(1.0-dst.rgb);vec3 c=mix(a,b,step(0.5,dst.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Ju="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 c=mix(mix(src2,dst.rgb,step(0.5*dst.rgb,src.rgb)),max(src2-1.0,vec3(0.0)),step(dst.rgb,src2-1.0));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",ed="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb*dst.rgb/max(1.0-src.rgb,1e-9),1.0);vec3 c=mix(a,src.rgb,step(1.0,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",td="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.x,b.y,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",rd="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-min(dst.rgb*src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",id="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 d=dst.rgb+(src2-1.0);vec3 w=step(0.5,src.rgb);vec3 a=dst.rgb-(1.0-src2)*dst.rgb*(1.0-dst.rgb);vec3 b=mix(d*(sqrt(dst.rgb)-dst.rgb),d*dst.rgb*((16.0*dst.rgb-12.0)*dst.rgb+3.0),w*(1.0-step(0.25,dst.rgb)));vec3 c=mix(a,b,w);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",nd="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return src;}",sd="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",ad="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=mix(max(1.0-min((1.0-dst.rgb)/(2.0*src.rgb),1.0),0.0),min(dst.rgb/(2.0*(1.0-src.rgb)),1.0),step(0.5,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",od=new Map([[Q.ADD,Cu],[Q.ALPHA,Iu],[Q.AVERAGE,Du],[Q.COLOR,Pu],[Q.COLOR_BURN,Nu],[Q.COLOR_DODGE,Ou],[Q.DARKEN,Lu],[Q.DIFFERENCE,Fu],[Q.DIVIDE,Bu],[Q.DST,null],[Q.EXCLUSION,Uu],[Q.HARD_LIGHT,Hu],[Q.HARD_MIX,zu],[Q.HUE,ku],[Q.INVERT,Vu],[Q.INVERT_RGB,Gu],[Q.LIGHTEN,Wu],[Q.LINEAR_BURN,ju],[Q.LINEAR_DODGE,Yu],[Q.LINEAR_LIGHT,qu],[Q.LUMINOSITY,Ku],[Q.MULTIPLY,Xu],[Q.NEGATION,$u],[Q.NORMAL,Qu],[Q.OVERLAY,Zu],[Q.PIN_LIGHT,Ju],[Q.REFLECT,ed],[Q.SATURATION,td],[Q.SCREEN,rd],[Q.SOFT_LIGHT,id],[Q.SRC,nd],[Q.SUBTRACT,sd],[Q.VIVID_LIGHT,ad]]),cd=class extends Mo{constructor(t,e=1){super(),this._blendFunction=t,this.opacity=new D(e)}getOpacity(){return this.opacity.value}setOpacity(t){this.opacity.value=t}get blendFunction(){return this._blendFunction}set blendFunction(t){this._blendFunction=t,this.dispatchEvent({type:"change"})}getBlendFunction(){return this.blendFunction}setBlendFunction(t){this.blendFunction=t}getShaderCode(){return od.get(this.blendFunction)}},ld=class extends Mo{constructor(t,e,{attributes:r=Vo.NONE,blendFunction:i=Q.NORMAL,defines:n=new Map,uniforms:s=new Map,extensions:a=null,vertexShader:o=null}={}){super(),this.name=t,this.renderer=null,this.attributes=r,this.fragmentShader=e,this.vertexShader=o,this.defines=n,this.uniforms=s,this.extensions=a,this.blendMode=new cd(i),this.blendMode.addEventListener("change",c=>this.setChanged()),this._inputColorSpace=sl,this._outputColorSpace=al}get inputColorSpace(){return this._inputColorSpace}set inputColorSpace(t){this._inputColorSpace=t,this.setChanged()}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t,this.setChanged()}set mainScene(t){}set mainCamera(t){}getName(){return this.name}setRenderer(t){this.renderer=t}getDefines(){return this.defines}getUniforms(){return this.uniforms}getExtensions(){return this.extensions}getBlendMode(){return this.blendMode}getAttributes(){return this.attributes}setAttributes(t){this.attributes=t,this.setChanged()}getFragmentShader(){return this.fragmentShader}setFragmentShader(t){this.fragmentShader=t,this.setChanged()}getVertexShader(){return this.vertexShader}setVertexShader(t){this.vertexShader=t,this.setChanged()}setChanged(){this.dispatchEvent({type:"change"})}setDepthTexture(t,e=Ro){}update(t,e,r){}setSize(t,e){}initialize(t,e,r){}dispose(){for(const t of Object.keys(this)){const e=this[t];(e instanceof Ye||e instanceof Ii||e instanceof Eo||e instanceof Au)&&this[t].dispose()}}};const ud=new T;function Go(t,e,r=new T,i){const{x:n,y:s,z:a}=t,o=e.x,c=e.y,l=e.z,u=n*n*o,d=s*s*c,g=a*a*l,p=u+d+g,h=Math.sqrt(1/p);if(!Number.isFinite(h))return;const y=ud.copy(t).multiplyScalar(h);if(p<((i==null?void 0:i.centerTolerance)??.1))return r.copy(y);const f=y.multiply(e).multiplyScalar(2);let S=(1-h)*t.length()/(f.length()/2),b=0,A,C,R,I;do{S-=b,A=1/(1+S*o),C=1/(1+S*c),R=1/(1+S*l);const E=A*A,O=C*C,B=R*R,U=E*A,G=O*C,H=B*R;I=u*E+d*O+g*B-1,b=I/((u*U*o+d*G*c+g*H*l)*-2)}while(Math.abs(I)>1e-12);return r.set(n*A,s*C,a*R)}const si=new T,wa=new T,_a=new T,Wn=class{constructor(e,r,i){this.radii=new T(e,r,i)}get minimumRadius(){return Math.min(this.radii.x,this.radii.y,this.radii.z)}get maximumRadius(){return Math.max(this.radii.x,this.radii.y,this.radii.z)}reciprocalRadii(e=new T){const{x:r,y:i,z:n}=this.radii;return e.set(1/r,1/i,1/n)}reciprocalRadiiSquared(e=new T){const{x:r,y:i,z:n}=this.radii;return e.set(1/r**2,1/i**2,1/n**2)}projectOnSurface(e,r=new T,i){return Go(e,this.reciprocalRadiiSquared(),r,i)}getSurfaceNormal(e,r=new T){return r.multiplyVectors(this.reciprocalRadiiSquared(si),e).normalize()}getEastNorthUpVectors(e,r=new T,i=new T,n=new T){this.getSurfaceNormal(e,n),r.set(-e.y,e.x,0).normalize(),i.crossVectors(n,r).normalize()}getEastNorthUpFrame(e,r=new ee){const i=si,n=wa,s=_a;return this.getEastNorthUpVectors(e,i,n,s),r.makeBasis(i,n,s).setPosition(e)}getIntersection(e,r=new T){const i=this.reciprocalRadii(si),n=wa.copy(i).multiply(e.origin),s=_a.copy(i).multiply(e.direction),a=n.lengthSq(),o=s.lengthSq(),c=n.dot(s),l=c**2-o*(a-1);if(a===1)return r.copy(e.origin);if(a>1){if(c>=0||l<0)return;const u=Math.sqrt(l),d=(-c-u)/o,g=(-c+u)/o;return e.at(Math.min(d,g),r)}if(a<1){const u=c**2-o*(a-1),d=Math.sqrt(u),g=(-c+d)/o;return e.at(g,r)}if(c<0)return e.at(-c/o,r)}getOsculatingSphereCenter(e,r,i=new T){const n=this.radii.x**2,s=si.set(e.x/n,e.y/n,e.z/this.radii.z**2).normalize();return i.copy(s.multiplyScalar(-r).add(e))}};Wn.WGS84=new Wn(6378137,6378137,6356752314245179e-9);let lt=Wn;const ai=new T,xa=new T,Rr=class jn{constructor(e=0,r=0,i=0){this.longitude=e,this.latitude=r,this.height=i}set(e,r,i){return this.longitude=e,this.latitude=r,i!=null&&(this.height=i),this}clone(){return new jn(this.longitude,this.latitude,this.height)}copy(e){return this.longitude=e.longitude,this.latitude=e.latitude,this.height=e.height,this}equals(e){return e.longitude===this.longitude&&e.latitude===this.latitude&&e.height===this.height}setLongitude(e){return this.longitude=e,this}setLatitude(e){return this.latitude=e,this}setHeight(e){return this.height=e,this}normalize(){return this.longitude<jn.MIN_LONGITUDE&&(this.longitude+=Math.PI*2),this}setFromECEF(e,r){const i=((r==null?void 0:r.ellipsoid)??lt.WGS84).reciprocalRadiiSquared(ai),n=Go(e,i,xa,r);if(n==null)throw new Error(`Could not project position to ellipsoid surface: ${e.toArray()}`);const s=ai.multiplyVectors(n,i).normalize();this.longitude=Math.atan2(s.y,s.x),this.latitude=Math.asin(s.z);const a=ai.subVectors(e,n);return this.height=Math.sign(a.dot(e))*a.length(),this}toECEF(e=new T,r){const i=(r==null?void 0:r.ellipsoid)??lt.WGS84,n=ai.multiplyVectors(i.radii,i.radii),s=Math.cos(this.latitude),a=xa.set(s*Math.cos(this.longitude),s*Math.sin(this.longitude),Math.sin(this.latitude)).normalize();return e.multiplyVectors(n,a),e.divideScalar(Math.sqrt(a.dot(e))).add(a.multiplyScalar(this.height))}fromArray(e,r=0){return this.longitude=e[r],this.latitude=e[r+1],this.height=e[r+2],this}toArray(e=[],r=0){return e[r]=this.longitude,e[r+1]=this.latitude,e[r+2]=this.height,e}*[Symbol.iterator](){yield this.longitude,yield this.latitude,yield this.height}};Rr.MIN_LONGITUDE=-Math.PI,Rr.MAX_LONGITUDE=Math.PI,Rr.MIN_LATITUDE=-Math.PI/2,Rr.MAX_LATITUDE=Math.PI/2;let Wo=Rr;var dd="Invariant failed";function jo(t,e){if(!t)throw new Error(dd)}class hd extends as{load(e,r,i,n){const s=new cl(this.manager);s.setResponseType("arraybuffer"),s.setRequestHeader(this.requestHeader),s.setPath(this.path),s.setWithCredentials(this.withCredentials),s.load(e,a=>{jo(a instanceof ArrayBuffer);try{r(a)}catch(o){n!=null?n(o):console.error(o),this.manager.itemError(e)}},i,n)}}const md="This is not an object",fd="This is not a Float16Array object",Ta="This constructor is not a subclass of Float16Array",Yo="The constructor property value is not an object",pd="Species constructor didn't return TypedArray object",gd="Derived constructor created TypedArray object which was too small length",Ir="Attempting to access detached ArrayBuffer",Yn="Cannot convert undefined or null to object",qn="Cannot mix BigInt and other types, use explicit conversions",ba="@@iterator property is not callable",Ma="Reduce of empty array with no initial value",vd="The comparison function must be either a function or undefined",gn="Offset is out of bounds";function ue(t){return(e,...r)=>Be(t,e,r)}function cr(t,e){return ue(nr(t,e).get)}const{apply:Be,construct:Er,defineProperty:yd,get:vn,getOwnPropertyDescriptor:nr,getPrototypeOf:zr,has:Kn,ownKeys:qo,set:Ra,setPrototypeOf:Ko}=Reflect,Sd=Proxy,{EPSILON:wd,MAX_SAFE_INTEGER:Ea,isFinite:Xo,isNaN:sr}=Number,{iterator:ut,species:_d,toStringTag:ds,for:xd}=Symbol,ar=Object,{create:Pi,defineProperty:kr,freeze:Td,is:Aa}=ar,Xn=ar.prototype,bd=Xn.__lookupGetter__?ue(Xn.__lookupGetter__):(t,e)=>{if(t==null)throw ge(Yn);let r=ar(t);do{const i=nr(r,e);if(i!==void 0)return Tt(i,"get")?i.get:void 0}while((r=zr(r))!==null)},Tt=ar.hasOwn||ue(Xn.hasOwnProperty),$o=Array,Qo=$o.isArray,Ni=$o.prototype,Md=ue(Ni.join),Rd=ue(Ni.push),Ed=ue(Ni.toLocaleString),hs=Ni[ut],Ad=ue(hs),{abs:Cd,trunc:Zo}=Math,Oi=ArrayBuffer,Id=Oi.isView,Jo=Oi.prototype,Dd=ue(Jo.slice),Pd=cr(Jo,"byteLength"),$n=typeof SharedArrayBuffer<"u"?SharedArrayBuffer:null,Nd=$n&&cr($n.prototype,"byteLength"),ms=zr(Uint8Array),Od=ms.from,Ae=ms.prototype,Ld=Ae[ut],Fd=ue(Ae.keys),Bd=ue(Ae.values),Ud=ue(Ae.entries),Hd=ue(Ae.set),Ca=ue(Ae.reverse),zd=ue(Ae.fill),kd=ue(Ae.copyWithin),Ia=ue(Ae.sort),xr=ue(Ae.slice),Vd=ue(Ae.subarray),Ee=cr(Ae,"buffer"),Nt=cr(Ae,"byteOffset"),se=cr(Ae,"length"),ec=cr(Ae,ds),Gd=Uint8Array,ke=Uint16Array,Da=(...t)=>Be(Od,ke,t),fs=Uint32Array,Wd=Float32Array,Ut=zr([][ut]()),Li=ue(Ut.next),jd=ue(function*(){}().next),Yd=zr(Ut),qd=DataView.prototype,Kd=ue(qd.getUint16),ge=TypeError,yn=RangeError,tc=WeakSet,rc=tc.prototype,Xd=ue(rc.add),$d=ue(rc.has),Fi=WeakMap,ps=Fi.prototype,wi=ue(ps.get),Qd=ue(ps.has),gs=ue(ps.set),ic=new Fi,Zd=Pi(null,{next:{value:function(){const t=wi(ic,this);return Li(t)}},[ut]:{value:function(){return this}}});function Ar(t){if(t[ut]===hs&&Ut.next===Li)return t;const e=Pi(Zd);return gs(ic,e,Ad(t)),e}const nc=new Fi,sc=Pi(Yd,{next:{value:function(){const t=wi(nc,this);return jd(t)},writable:!0,configurable:!0}});for(const t of qo(Ut))t!=="next"&&kr(sc,t,nr(Ut,t));function Pa(t){const e=Pi(sc);return gs(nc,e,t),e}function _i(t){return t!==null&&typeof t=="object"||typeof t=="function"}function Na(t){return t!==null&&typeof t=="object"}function xi(t){return ec(t)!==void 0}function Qn(t){const e=ec(t);return e==="BigInt64Array"||e==="BigUint64Array"}function Jd(t){try{return Qo(t)?!1:(Pd(t),!0)}catch{return!1}}function ac(t){if($n===null)return!1;try{return Nd(t),!0}catch{return!1}}function eh(t){return Jd(t)||ac(t)}function Oa(t){return Qo(t)?t[ut]===hs&&Ut.next===Li:!1}function th(t){return xi(t)?t[ut]===Ld&&Ut.next===Li:!1}function oi(t){if(typeof t!="string")return!1;const e=+t;return t!==e+""||!Xo(e)?!1:e===Zo(e)}const Ti=xd("__Float16Array__");function rh(t){if(!Na(t))return!1;const e=zr(t);if(!Na(e))return!1;const r=e.constructor;if(r===void 0)return!1;if(!_i(r))throw ge(Yo);return Kn(r,Ti)}const Zn=1/wd;function ih(t){return t+Zn-Zn}const oc=6103515625e-14,nh=65504,cc=.0009765625,La=cc*oc,sh=cc*Zn;function ah(t){const e=+t;if(!Xo(e)||e===0)return e;const r=e>0?1:-1,i=Cd(e);if(i<oc)return r*ih(i/La)*La;const n=(1+sh)*i,s=n-(n-i);return s>nh||sr(s)?r*(1/0):r*s}const lc=new Oi(4),uc=new Wd(lc),dc=new fs(lc),et=new ke(512),tt=new Gd(512);for(let t=0;t<256;++t){const e=t-127;e<-24?(et[t]=0,et[t|256]=32768,tt[t]=24,tt[t|256]=24):e<-14?(et[t]=1024>>-e-14,et[t|256]=1024>>-e-14|32768,tt[t]=-e-1,tt[t|256]=-e-1):e<=15?(et[t]=e+15<<10,et[t|256]=e+15<<10|32768,tt[t]=13,tt[t|256]=13):e<128?(et[t]=31744,et[t|256]=64512,tt[t]=24,tt[t|256]=24):(et[t]=31744,et[t|256]=64512,tt[t]=13,tt[t|256]=13)}function at(t){uc[0]=ah(t);const e=dc[0],r=e>>23&511;return et[r]+((e&8388607)>>tt[r])}const vs=new fs(2048);for(let t=1;t<1024;++t){let e=t<<13,r=0;for(;!(e&8388608);)e<<=1,r-=8388608;e&=-8388609,r+=947912704,vs[t]=e|r}for(let t=1024;t<2048;++t)vs[t]=939524096+(t-1024<<13);const lr=new fs(64);for(let t=1;t<31;++t)lr[t]=t<<23;lr[31]=1199570944;lr[32]=2147483648;for(let t=33;t<63;++t)lr[t]=2147483648+(t-32<<23);lr[63]=3347054592;const hc=new ke(64);for(let t=1;t<64;++t)t!==32&&(hc[t]=1024);function ae(t){const e=t>>10;return dc[0]=vs[hc[e]+(t&1023)]+lr[e],uc[0]}function _t(t){const e=+t;return sr(e)||e===0?0:Zo(e)}function Sn(t){const e=_t(t);return e<0?0:e<Ea?e:Ea}function ci(t,e){if(!_i(t))throw ge(md);const r=t.constructor;if(r===void 0)return e;if(!_i(r))throw ge(Yo);return r[_d]??e}function Dr(t){if(ac(t))return!1;try{return Dd(t,0,0),!1}catch{}return!0}function Fa(t,e){const r=sr(t),i=sr(e);if(r&&i)return 0;if(r)return 1;if(i||t<e)return-1;if(t>e)return 1;if(t===0&&e===0){const n=Aa(t,0),s=Aa(e,0);if(!n&&s)return-1;if(n&&!s)return 1}return 0}const ys=2,bi=new Fi;function Jt(t){return Qd(bi,t)||!Id(t)&&rh(t)}function ne(t){if(!Jt(t))throw ge(fd)}function li(t,e){const r=Jt(t),i=xi(t);if(!r&&!i)throw ge(pd);if(typeof e=="number"){let n;if(r){const s=q(t);n=se(s)}else n=se(t);if(n<e)throw ge(gd)}if(Qn(t))throw ge(qn)}function q(t){const e=wi(bi,t);if(e!==void 0){const n=Ee(e);if(Dr(n))throw ge(Ir);return e}const r=t.buffer;if(Dr(r))throw ge(Ir);const i=Er(oe,[r,t.byteOffset,t.length],t.constructor);return wi(bi,i)}function Ba(t){const e=se(t),r=[];for(let i=0;i<e;++i)r[i]=ae(t[i]);return r}const mc=new tc;for(const t of qo(Ae)){if(t===ds)continue;const e=nr(Ae,t);Tt(e,"get")&&typeof e.get=="function"&&Xd(mc,e.get)}const oh=Td({get(t,e,r){return oi(e)&&Tt(t,e)?ae(vn(t,e)):$d(mc,bd(t,e))?vn(t,e):vn(t,e,r)},set(t,e,r,i){return oi(e)&&Tt(t,e)?Ra(t,e,at(r)):Ra(t,e,r,i)},getOwnPropertyDescriptor(t,e){if(oi(e)&&Tt(t,e)){const r=nr(t,e);return r.value=ae(r.value),r}return nr(t,e)},defineProperty(t,e,r){return oi(e)&&Tt(t,e)&&Tt(r,"value")&&(r.value=at(r.value)),yd(t,e,r)}});class oe{constructor(e,r,i){let n;if(Jt(e))n=Er(ke,[q(e)],new.target);else if(_i(e)&&!eh(e)){let a,o;if(xi(e)){a=e,o=se(e);const c=Ee(e);if(Dr(c))throw ge(Ir);if(Qn(e))throw ge(qn);const l=new Oi(o*ys);n=Er(ke,[l],new.target)}else{const c=e[ut];if(c!=null&&typeof c!="function")throw ge(ba);c!=null?Oa(e)?(a=e,o=e.length):(a=[...e],o=a.length):(a=e,o=Sn(a.length)),n=Er(ke,[o],new.target)}for(let c=0;c<o;++c)n[c]=at(a[c])}else n=Er(ke,arguments,new.target);const s=new Sd(n,oh);return gs(bi,s,n),s}static from(e,...r){const i=this;if(!Kn(i,Ti))throw ge(Ta);if(i===oe){if(Jt(e)&&r.length===0){const u=q(e),d=new ke(Ee(u),Nt(u),se(u));return new oe(Ee(xr(d)))}if(r.length===0)return new oe(Ee(Da(e,at)));const c=r[0],l=r[1];return new oe(Ee(Da(e,function(u,...d){return at(Be(c,this,[u,...Ar(d)]))},l)))}let n,s;const a=e[ut];if(a!=null&&typeof a!="function")throw ge(ba);if(a!=null)Oa(e)?(n=e,s=e.length):th(e)?(n=e,s=se(e)):(n=[...e],s=n.length);else{if(e==null)throw ge(Yn);n=ar(e),s=Sn(n.length)}const o=new i(s);if(r.length===0)for(let c=0;c<s;++c)o[c]=n[c];else{const c=r[0],l=r[1];for(let u=0;u<s;++u)o[u]=Be(c,l,[n[u],u])}return o}static of(...e){const r=this;if(!Kn(r,Ti))throw ge(Ta);const i=e.length;if(r===oe){const s=new oe(i),a=q(s);for(let o=0;o<i;++o)a[o]=at(e[o]);return s}const n=new r(i);for(let s=0;s<i;++s)n[s]=e[s];return n}keys(){ne(this);const e=q(this);return Fd(e)}values(){ne(this);const e=q(this);return Pa(function*(){for(const r of Bd(e))yield ae(r)}())}entries(){ne(this);const e=q(this);return Pa(function*(){for(const[r,i]of Ud(e))yield[r,ae(i)]}())}at(e){ne(this);const r=q(this),i=se(r),n=_t(e),s=n>=0?n:i+n;if(!(s<0||s>=i))return ae(r[s])}with(e,r){ne(this);const i=q(this),n=se(i),s=_t(e),a=s>=0?s:n+s,o=+r;if(a<0||a>=n)throw yn(gn);const c=new ke(Ee(i),Nt(i),se(i)),l=new oe(Ee(xr(c))),u=q(l);return u[a]=at(o),l}map(e,...r){ne(this);const i=q(this),n=se(i),s=r[0],a=ci(i,oe);if(a===oe){const c=new oe(n),l=q(c);for(let u=0;u<n;++u){const d=ae(i[u]);l[u]=at(Be(e,s,[d,u,this]))}return c}const o=new a(n);li(o,n);for(let c=0;c<n;++c){const l=ae(i[c]);o[c]=Be(e,s,[l,c,this])}return o}filter(e,...r){ne(this);const i=q(this),n=se(i),s=r[0],a=[];for(let l=0;l<n;++l){const u=ae(i[l]);Be(e,s,[u,l,this])&&Rd(a,u)}const o=ci(i,oe),c=new o(a);return li(c),c}reduce(e,...r){ne(this);const i=q(this),n=se(i);if(n===0&&r.length===0)throw ge(Ma);let s,a;r.length===0?(s=ae(i[0]),a=1):(s=r[0],a=0);for(let o=a;o<n;++o)s=e(s,ae(i[o]),o,this);return s}reduceRight(e,...r){ne(this);const i=q(this),n=se(i);if(n===0&&r.length===0)throw ge(Ma);let s,a;r.length===0?(s=ae(i[n-1]),a=n-2):(s=r[0],a=n-1);for(let o=a;o>=0;--o)s=e(s,ae(i[o]),o,this);return s}forEach(e,...r){ne(this);const i=q(this),n=se(i),s=r[0];for(let a=0;a<n;++a)Be(e,s,[ae(i[a]),a,this])}find(e,...r){ne(this);const i=q(this),n=se(i),s=r[0];for(let a=0;a<n;++a){const o=ae(i[a]);if(Be(e,s,[o,a,this]))return o}}findIndex(e,...r){ne(this);const i=q(this),n=se(i),s=r[0];for(let a=0;a<n;++a){const o=ae(i[a]);if(Be(e,s,[o,a,this]))return a}return-1}findLast(e,...r){ne(this);const i=q(this),n=se(i),s=r[0];for(let a=n-1;a>=0;--a){const o=ae(i[a]);if(Be(e,s,[o,a,this]))return o}}findLastIndex(e,...r){ne(this);const i=q(this),n=se(i),s=r[0];for(let a=n-1;a>=0;--a){const o=ae(i[a]);if(Be(e,s,[o,a,this]))return a}return-1}every(e,...r){ne(this);const i=q(this),n=se(i),s=r[0];for(let a=0;a<n;++a)if(!Be(e,s,[ae(i[a]),a,this]))return!1;return!0}some(e,...r){ne(this);const i=q(this),n=se(i),s=r[0];for(let a=0;a<n;++a)if(Be(e,s,[ae(i[a]),a,this]))return!0;return!1}set(e,...r){ne(this);const i=q(this),n=_t(r[0]);if(n<0)throw yn(gn);if(e==null)throw ge(Yn);if(Qn(e))throw ge(qn);if(Jt(e))return Hd(q(this),q(e),n);if(xi(e)){const c=Ee(e);if(Dr(c))throw ge(Ir)}const s=se(i),a=ar(e),o=Sn(a.length);if(n===1/0||o+n>s)throw yn(gn);for(let c=0;c<o;++c)i[c+n]=at(a[c])}reverse(){ne(this);const e=q(this);return Ca(e),this}toReversed(){ne(this);const e=q(this),r=new ke(Ee(e),Nt(e),se(e)),i=new oe(Ee(xr(r))),n=q(i);return Ca(n),i}fill(e,...r){ne(this);const i=q(this);return zd(i,at(e),...Ar(r)),this}copyWithin(e,r,...i){ne(this);const n=q(this);return kd(n,e,r,...Ar(i)),this}sort(e){ne(this);const r=q(this),i=e!==void 0?e:Fa;return Ia(r,(n,s)=>i(ae(n),ae(s))),this}toSorted(e){ne(this);const r=q(this);if(e!==void 0&&typeof e!="function")throw new ge(vd);const i=e!==void 0?e:Fa,n=new ke(Ee(r),Nt(r),se(r)),s=new oe(Ee(xr(n))),a=q(s);return Ia(a,(o,c)=>i(ae(o),ae(c))),s}slice(e,r){ne(this);const i=q(this),n=ci(i,oe);if(n===oe){const h=new ke(Ee(i),Nt(i),se(i));return new oe(Ee(xr(h,e,r)))}const s=se(i),a=_t(e),o=r===void 0?s:_t(r);let c;a===-1/0?c=0:a<0?c=s+a>0?s+a:0:c=s<a?s:a;let l;o===-1/0?l=0:o<0?l=s+o>0?s+o:0:l=s<o?s:o;const u=l-c>0?l-c:0,d=new n(u);if(li(d,u),u===0)return d;const g=Ee(i);if(Dr(g))throw ge(Ir);let p=0;for(;c<l;)d[p]=ae(i[c]),++c,++p;return d}subarray(e,r){ne(this);const i=q(this),n=ci(i,oe),s=new ke(Ee(i),Nt(i),se(i)),a=Vd(s,e,r),o=new n(Ee(a),Nt(a),se(a));return li(o),o}indexOf(e,...r){ne(this);const i=q(this),n=se(i);let s=_t(r[0]);if(s===1/0)return-1;s<0&&(s+=n,s<0&&(s=0));for(let a=s;a<n;++a)if(Tt(i,a)&&ae(i[a])===e)return a;return-1}lastIndexOf(e,...r){ne(this);const i=q(this),n=se(i);let s=r.length>=1?_t(r[0]):n-1;if(s===-1/0)return-1;s>=0?s=s<n-1?s:n-1:s+=n;for(let a=s;a>=0;--a)if(Tt(i,a)&&ae(i[a])===e)return a;return-1}includes(e,...r){ne(this);const i=q(this),n=se(i);let s=_t(r[0]);if(s===1/0)return!1;s<0&&(s+=n,s<0&&(s=0));const a=sr(e);for(let o=s;o<n;++o){const c=ae(i[o]);if(a&&sr(c)||c===e)return!0}return!1}join(e){ne(this);const r=q(this),i=Ba(r);return Md(i,e)}toLocaleString(...e){ne(this);const r=q(this),i=Ba(r);return Ed(i,...Ar(e))}get[ds](){if(Jt(this))return"Float16Array"}}kr(oe,"BYTES_PER_ELEMENT",{value:ys});kr(oe,Ti,{});Ko(oe,ms);const Mi=oe.prototype;kr(Mi,"BYTES_PER_ELEMENT",{value:ys});kr(Mi,ut,{value:Mi.values,writable:!0,configurable:!0});Ko(Mi,Ae);function ch(t,e,...r){return ae(Kd(t,e,...Ar(r)))}function lh(t){return t instanceof Int8Array||t instanceof Uint8Array||t instanceof Uint8ClampedArray||t instanceof Int16Array||t instanceof Uint16Array||t instanceof Int32Array||t instanceof Uint32Array||t instanceof oe||t instanceof Float32Array||t instanceof Float64Array}let ui;function uh(){if(ui!=null)return ui;const t=new Uint32Array([268435456]);return ui=new Uint8Array(t.buffer,t.byteOffset,t.byteLength)[0]===0,ui}function dh(t,e,r,i=!0){if(i===uh())return new e(t);const n=Object.assign(new DataView(t),{getFloat16(a,o){return ch(this,a,o)}}),s=new e(n.byteLength/e.BYTES_PER_ELEMENT);for(let a=0,o=0;a<s.length;++a,o+=e.BYTES_PER_ELEMENT)s[a]=n[r](o,i);return s}const wn=(t,e)=>dh(t,oe,"getFloat16",e);class hh extends as{load(e,r,i,n){const s=new hd(this.manager);s.setRequestHeader(this.requestHeader),s.setPath(this.path),s.setWithCredentials(this.withCredentials),s.load(e,a=>{try{r(this.parseTypedArray(a))}catch(o){n!=null?n(o):console.error(o),this.manager.itemError(e)}},i,n)}}function mh(t){return class extends hh{constructor(){super(...arguments),this.parseTypedArray=t}}}function fh(t){const e=t instanceof Int8Array?ll:t instanceof Uint8Array?ta:t instanceof Uint8ClampedArray?ta:t instanceof Int16Array?ul:t instanceof Uint16Array?dl:t instanceof Int32Array?hl:t instanceof Uint32Array?Bt:t instanceof oe?Co:t instanceof Float32Array?xt:t instanceof Float64Array?xt:null;return jo(e!=null),e}const ph={format:Lr,minFilter:ea,magFilter:ea};class gh extends as{constructor(){super(...arguments),this.parameters={}}load(e,r,i,n){const s=new this.Texture,a=new this.TypedArrayLoader(this.manager);a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(this.withCredentials),a.load(e,o=>{s.image.data=o instanceof oe?new Uint16Array(o.buffer):o;const{width:c,height:l,depth:u,...d}=this.parameters;c!=null&&(s.image.width=c),l!=null&&(s.image.height=l),"depth"in s.image&&u!=null&&(s.image.depth=u),s.type=fh(o),Object.assign(s,d),s.needsUpdate=!0,r(s)},i,n)}}function fc(t,e,r){return class extends gh{constructor(){super(...arguments),this.Texture=t,this.TypedArrayLoader=mh(e),this.parameters={...ph,...r}}}}function vh(t,e){return fc(ol,t,e)}function yh(t,e){return fc(Hn,t,e)}function Sh(t,e){return new(vh(t,e))}function Ua(t,e){return new(yh(t,e))}const Ri=ss.clamp,Jn=ss.degToRad;function wh(t,e,r,i=0,n=1){return ss.mapLinear(t,e,r,i,n)}function _h(t){return Math.min(Math.max(t,0),1)}function Fe(t){return(e,r)=>{e instanceof Ii?Object.defineProperty(e,r,{enumerable:!0,get(){var i;return((i=this.defines)==null?void 0:i[t])!=null},set(i){var n;i!==this[r]&&(i?(this.defines??(this.defines={}),this.defines[t]="1"):(n=this.defines)==null||delete n[t],this.needsUpdate=!0)}}):Object.defineProperty(e,r,{enumerable:!0,get(){return this.defines.has(t)},set(i){i!==this[r]&&(i?this.defines.set(t,"1"):this.defines.delete(t),this.setChanged())}})}}function xh(t,{min:e=Number.MIN_SAFE_INTEGER,max:r=Number.MAX_SAFE_INTEGER}={}){return(i,n)=>{i instanceof Ii?Object.defineProperty(i,n,{enumerable:!0,get(){var s;const a=(s=this.defines)==null?void 0:s[t];return a!=null?parseInt(a):0},set(s){const a=this[n];s!==a&&(this.defines??(this.defines={}),this.defines[t]=Ri(s,e,r).toFixed(0),this.needsUpdate=!0)}}):Object.defineProperty(i,n,{enumerable:!0,get(){const s=this.defines.get(t);return s!=null?parseInt(s):0},set(s){const a=this[n];s!==a&&(this.defines.set(t,Ri(s,e,r).toFixed(0)),this.setChanged())}})}}var Vr=Uint8Array,pc=Uint16Array,Th=Uint32Array,bh=new Vr([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Mh=new Vr([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),gc=function(t,e){for(var r=new pc(31),i=0;i<31;++i)r[i]=e+=1<<t[i-1];for(var n=new Th(r[30]),i=1;i<30;++i)for(var s=r[i];s<r[i+1];++s)n[s]=s-r[i]<<5|i;return[r,n]},vc=gc(bh,2),Rh=vc[0],Eh=vc[1];Rh[28]=258,Eh[258]=28;gc(Mh,0);var Ah=new pc(32768);for(var he=0;he<32768;++he){var Et=(he&43690)>>>1|(he&21845)<<1;Et=(Et&52428)>>>2|(Et&13107)<<2,Et=(Et&61680)>>>4|(Et&3855)<<4,Ah[he]=((Et&65280)>>>8|(Et&255)<<8)>>>1}var Bi=new Vr(288);for(var he=0;he<144;++he)Bi[he]=8;for(var he=144;he<256;++he)Bi[he]=9;for(var he=256;he<280;++he)Bi[he]=7;for(var he=280;he<288;++he)Bi[he]=8;var Ch=new Vr(32);for(var he=0;he<32;++he)Ch[he]=5;var Ih=new Vr(0),Dh=typeof TextDecoder<"u"&&new TextDecoder,Ph=0;try{Dh.decode(Ih,{stream:!0}),Ph=1}catch{}const Nh=/^[ \t]*#include +"([\w\d./]+)"/gm;function Ht(t,e){return t.replace(Nh,(r,i)=>{const n=i.split("/").reduce((s,a)=>typeof s!="string"&&s!=null?s[a]:void 0,e);if(typeof n!="string")throw new Error(`Could not find include for ${i}.`);return Ht(n,e)})}const Oh=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*(?:i\s*\+\+|\+\+\s*i)\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lh(t,e,r,i){let n="";for(let s=parseInt(e);s<parseInt(r);++s)n+=i.replace(/\[\s*i\s*\]/g,"["+s+"]").replace(/UNROLLED_LOOP_INDEX/g,`${s}`);return n}function Fh(t){return t.replace(Oh,Lh)}const Bh=`// Reference: https://github.com/mrdoob/three.js/blob/r171/examples/jsm/csm/CSMShader.js

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
`,Uh=`// cSpell:words logdepthbuf

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
`,Hh=`// Reference: https://advances.realtimerendering.com/s2014/index.html#_NEXT_GENERATION_POST

float interleavedGradientNoise(const vec2 coord) {
  const vec3 magic = vec3(0.06711056, 0.00583715, 52.9829189);
  return fract(magic.z * fract(dot(coord, magic.xy)));
}
`,zh=`#if !defined(saturate)
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
`,Vh=`float raySphereFirstIntersection(
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
`,Gh=`vec3 screenToView(
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
`,jh=Bh,Yh=Uh,qh=Hh,Kh=zh,Xh=kh,yc=Vh,$h=Gh,Qh=Wh,Ss=`// Based on the following work and adapted to Three.js.
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
`,Zh=["solarIrradiance","sunAngularRadius","bottomRadius","topRadius","rayleighScattering","mieScattering","miePhaseFunctionG","muSMin","skyRadianceToLuminance","sunRadianceToLuminance","luminousEfficiency"];function Jh(t,e){if(e!=null)for(const r of Zh){const i=e[r];i!=null&&(t[r]instanceof T?t[r].copy(i):t[r]=i)}}const es=class{constructor(e){this.solarIrradiance=new T(1.474,1.8504,1.91198),this.sunAngularRadius=.004675,this.bottomRadius=636e4,this.topRadius=642e4,this.rayleighScattering=new T(.005802,.013558,.0331),this.mieScattering=new T(.003996,.003996,.003996),this.miePhaseFunctionG=.8,this.muSMin=Math.cos(Jn(120)),this.skyRadianceToLuminance=new T(114974.916437,71305.954816,65310.548555),this.sunRadianceToLuminance=new T(98242.786222,69954.398112,66475.012354),this.luminousEfficiency=new T(.2126,.7152,.0722),this.skyRadianceToRelativeLuminance=new T,this.sunRadianceToRelativeLuminance=new T,Jh(this,e);const r=this.luminousEfficiency.dot(this.skyRadianceToLuminance);this.skyRadianceToRelativeLuminance.copy(this.skyRadianceToLuminance).divideScalar(r),this.sunRadianceToRelativeLuminance.copy(this.sunRadianceToLuminance).divideScalar(r)}};es.DEFAULT=new es;let Ui=es;const Hi=64,zi=16,ws=32,_s=128,xs=32,Ts=8,em=Ts*xs,tm=_s,rm=ws,ki=256,Vi=64,rr=1/1e3,im="82e00c5222d6cbc222af69abdf6d3f4fc9f63030",_n=`https://media.githubusercontent.com/media/takram-design-engineering/three-geospatial/${im}/packages/atmosphere/assets`,nm=new T;function Gi(t,e,r,i,n=!0){const s=r.projectOnSurface(t,nm);return s!=null?r.getOsculatingSphereCenter(!n||s.lengthSq()<t.lengthSq()?s:t,e,i):i.setScalar(0)}const sm=`precision highp sampler2DArray;

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
`,am=`uniform mat4 inverseViewMatrix;
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
`,Sc=`vec3 getLunarRadiance(const float moonAngularRadius) {
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
`;var om=Object.defineProperty,Ke=(t,e,r,i)=>{for(var n=void 0,s=t.length-1,a;s>=0;s--)(a=t[s])&&(n=a(e,r,n)||n);return n&&om(e,r,n),n};const cm=new T,lm=new T,um=new Wo,dm={blendFunction:Q.NORMAL,octEncodedNormal:!1,reconstructNormal:!1,ellipsoid:lt.WGS84,correctAltitude:!0,correctGeometricError:!0,photometric:!0,sunIrradiance:!1,skyIrradiance:!1,transmittance:!0,inscatter:!0,irradianceScale:1,sky:!1,sun:!0,moon:!0,moonAngularRadius:.0045,lunarRadianceScale:1};class Xe extends ld{constructor(e=new Ci,r,i=Ui.DEFAULT){const{blendFunction:n,normalBuffer:s=null,octEncodedNormal:a,reconstructNormal:o,irradianceTexture:c=null,scatteringTexture:l=null,transmittanceTexture:u=null,ellipsoid:d,correctAltitude:g,correctGeometricError:p,photometric:h,sunDirection:y,sunIrradiance:f,skyIrradiance:S,transmittance:b,inscatter:A,irradianceScale:C,sky:R,sun:I,moon:E,moonDirection:O,moonAngularRadius:B,lunarRadianceScale:U}={...dm,...r};super("AerialPerspectiveEffect",Fh(Ht(sm,{core:{depth:Yh,packing:Xh,math:Kh,transform:$h,raySphereIntersection:yc,cascadedShadowMaps:jh,interleavedGradientNoise:qh,vogelDisk:Qh},parameters:or,functions:Ss,sky:Sc})),{blendFunction:n,vertexShader:Ht(am,{parameters:or}),attributes:Vo.DEPTH,uniforms:new Map(Object.entries({normalBuffer:new D(s),projectionMatrix:new D(new ee),viewMatrix:new D(new ee),inverseProjectionMatrix:new D(new ee),inverseViewMatrix:new D(new ee),cameraPosition:new D(new T),bottomRadius:new D(i.bottomRadius),ellipsoidRadii:new D(new T),ellipsoidCenter:new D(new T),inverseEllipsoidMatrix:new D(new ee),altitudeCorrection:new D(new T),sunDirection:new D((y==null?void 0:y.clone())??new T),irradianceScale:new D(C),idealSphereAlpha:new D(0),moonDirection:new D((O==null?void 0:O.clone())??new T),moonAngularRadius:new D(B),lunarRadianceScale:new D(U),overlayBuffer:new D(null),shadowBuffer:new D(null),shadowMapSize:new D(new It),shadowIntervals:new D([]),shadowMatrices:new D([]),inverseShadowMatrices:new D([]),shadowFar:new D(0),shadowTopHeight:new D(0),shadowRadius:new D(3),stbnTexture:new D(null),frame:new D(0),shadowLengthBuffer:new D(null),u_solar_irradiance:new D(i.solarIrradiance),u_sun_angular_radius:new D(i.sunAngularRadius),u_bottom_radius:new D(i.bottomRadius*rr),u_top_radius:new D(i.topRadius*rr),u_rayleigh_scattering:new D(i.rayleighScattering),u_mie_scattering:new D(i.mieScattering),u_mie_phase_function_g:new D(i.miePhaseFunctionG),u_mu_s_min:new D(i.muSMin),u_irradiance_texture:new D(c),u_scattering_texture:new D(l),u_single_mie_scattering_texture:new D(l),u_transmittance_texture:new D(u)})),defines:new Map([["TRANSMITTANCE_TEXTURE_WIDTH",ki.toFixed(0)],["TRANSMITTANCE_TEXTURE_HEIGHT",Vi.toFixed(0)],["SCATTERING_TEXTURE_R_SIZE",ws.toFixed(0)],["SCATTERING_TEXTURE_MU_SIZE",_s.toFixed(0)],["SCATTERING_TEXTURE_MU_S_SIZE",xs.toFixed(0)],["SCATTERING_TEXTURE_NU_SIZE",Ts.toFixed(0)],["IRRADIANCE_TEXTURE_WIDTH",Hi.toFixed(0)],["IRRADIANCE_TEXTURE_HEIGHT",zi.toFixed(0)],["METER_TO_LENGTH_UNIT",rr.toFixed(7)],["SUN_SPECTRAL_RADIANCE_TO_LUMINANCE",`vec3(${i.sunRadianceToRelativeLuminance.toArray().map(G=>G.toFixed(12)).join(",")})`],["SKY_SPECTRAL_RADIANCE_TO_LUMINANCE",`vec3(${i.skyRadianceToRelativeLuminance.toArray().map(G=>G.toFixed(12)).join(",")})`]])}),this.camera=e,this.atmosphere=i,this.ellipsoidMatrix=new ee,this.overlay=null,this.shadow=null,this.shadowLength=null,this.shadowSampleCount=8,this.octEncodedNormal=a,this.reconstructNormal=o,this.ellipsoid=d,this.correctAltitude=g,this.correctGeometricError=p,this.photometric=h,this.sunIrradiance=f,this.skyIrradiance=S,this.transmittance=b,this.inscatter=A,this.sky=R,this.sun=I,this.moon=E}get mainCamera(){return this.camera}set mainCamera(e){this.camera=e}copyCameraSettings(e){const{projectionMatrix:r,matrixWorldInverse:i,projectionMatrixInverse:n,matrixWorld:s}=e,a=this.uniforms;a.get("projectionMatrix").value.copy(r),a.get("viewMatrix").value.copy(i),a.get("inverseProjectionMatrix").value.copy(n),a.get("inverseViewMatrix").value.copy(s);const o=e.getWorldPosition(a.get("cameraPosition").value),c=a.get("inverseEllipsoidMatrix").value.copy(this.ellipsoidMatrix).invert(),l=cm.copy(o).applyMatrix4(c).sub(a.get("ellipsoidCenter").value);try{const d=um.setFromECEF(l).height,g=lm.set(0,this.ellipsoid.maximumRadius,-d).applyMatrix4(r);a.get("idealSphereAlpha").value=_h(wh(g.y,41.5,13.8,0,1))}catch{return}const u=a.get("altitudeCorrection");this.correctAltitude?Gi(l,this.atmosphere.bottomRadius,this.ellipsoid,u.value):u.value.setScalar(0)}updateComposition(){const{uniforms:e,defines:r,overlay:i,shadow:n,shadowLength:s}=this,a=r.has("HAS_OVERLAY"),o=i!=null;o!==a&&(o?r.set("HAS_OVERLAY","1"):(r.delete("HAS_OVERLAY"),e.get("overlayBuffer").value=null),this.setChanged()),o&&(e.get("overlayBuffer").value=i.map);const c=r.has("HAS_SHADOW"),l=n!=null;if(l!==c&&(l?r.set("HAS_SHADOW","1"):(r.delete("HAS_SHADOW"),e.get("shadowBuffer").value=null),this.setChanged()),l){const g=r.get("SHADOW_CASCADE_COUNT"),p=`${n.cascadeCount}`;g!==p&&(r.set("SHADOW_CASCADE_COUNT",n.cascadeCount.toFixed(0)),this.setChanged()),e.get("shadowBuffer").value=n.map,e.get("shadowMapSize").value=n.mapSize,e.get("shadowIntervals").value=n.intervals,e.get("shadowMatrices").value=n.matrices,e.get("inverseShadowMatrices").value=n.inverseMatrices,e.get("shadowFar").value=n.far,e.get("shadowTopHeight").value=n.topHeight}const u=r.has("HAS_SHADOW_LENGTH"),d=s!=null;d!==u&&(d?r.set("HAS_SHADOW_LENGTH","1"):(r.delete("HAS_SHADOW_LENGTH"),e.get("shadowLengthBuffer").value=null),this.setChanged()),d&&(e.get("shadowLengthBuffer").value=s.map)}update(e,r,i){this.copyCameraSettings(this.camera),this.updateComposition(),++this.uniforms.get("frame").value}get normalBuffer(){return this.uniforms.get("normalBuffer").value}set normalBuffer(e){this.uniforms.get("normalBuffer").value=e}get irradianceTexture(){return this.uniforms.get("u_irradiance_texture").value}set irradianceTexture(e){this.uniforms.get("u_irradiance_texture").value=e}get scatteringTexture(){return this.uniforms.get("u_scattering_texture").value}set scatteringTexture(e){this.uniforms.get("u_scattering_texture").value=e,this.uniforms.get("u_single_mie_scattering_texture").value=e}get transmittanceTexture(){return this.uniforms.get("u_transmittance_texture").value}set transmittanceTexture(e){this.uniforms.get("u_transmittance_texture").value=e}get useHalfFloat(){return!0}set useHalfFloat(e){}get ellipsoid(){return this._ellipsoid}set ellipsoid(e){this._ellipsoid=e,this.uniforms.get("ellipsoidRadii").value.copy(e.radii)}get ellipsoidCenter(){return this.uniforms.get("ellipsoidCenter").value}get sunDirection(){return this.uniforms.get("sunDirection").value}get irradianceScale(){return this.uniforms.get("irradianceScale").value}set irradianceScale(e){this.uniforms.get("irradianceScale").value=e}get moonDirection(){return this.uniforms.get("moonDirection").value}get moonAngularRadius(){return this.uniforms.get("moonAngularRadius").value}set moonAngularRadius(e){this.uniforms.get("moonAngularRadius").value=e}get lunarRadianceScale(){return this.uniforms.get("lunarRadianceScale").value}set lunarRadianceScale(e){this.uniforms.get("lunarRadianceScale").value=e}get stbnTexture(){return this.uniforms.get("stbnTexture").value}set stbnTexture(e){this.uniforms.get("stbnTexture").value=e}get shadowRadius(){return this.uniforms.get("shadowRadius").value}set shadowRadius(e){this.uniforms.get("shadowRadius").value=e}}Ke([Fe("OCT_ENCODED_NORMAL")],Xe.prototype,"octEncodedNormal");Ke([Fe("RECONSTRUCT_NORMAL")],Xe.prototype,"reconstructNormal");Ke([Fe("CORRECT_GEOMETRIC_ERROR")],Xe.prototype,"correctGeometricError");Ke([Fe("PHOTOMETRIC")],Xe.prototype,"photometric");Ke([Fe("SUN_IRRADIANCE")],Xe.prototype,"sunIrradiance");Ke([Fe("SKY_IRRADIANCE")],Xe.prototype,"skyIrradiance");Ke([Fe("TRANSMITTANCE")],Xe.prototype,"transmittance");Ke([Fe("INSCATTER")],Xe.prototype,"inscatter");Ke([Fe("SKY")],Xe.prototype,"sky");Ke([Fe("SUN")],Xe.prototype,"sun");Ke([Fe("MOON")],Xe.prototype,"moon");Ke([xh("SHADOW_SAMPLE_COUNT",{min:1,max:16})],Xe.prototype,"shadowSampleCount");var hm=Object.defineProperty,mm=(t,e,r,i)=>{for(var n=void 0,s=t.length-1,a;s>=0;s--)(a=t[s])&&(n=a(e,r,n)||n);return n&&hm(e,r,n),n};const fm=new T;function pm(t,e){let r="",i="";for(let n=1;n<e;++n)r+=`layout(location = ${n}) out float renderTarget${n};
`,i+=`renderTarget${n} = 0.0;
`;return t.replace("#include <mrt_layout>",r).replace("#include <mrt_output>",i)}const bs={ellipsoid:lt.WGS84,correctAltitude:!0,photometric:!0,renderTargetCount:1};class Ms extends ml{constructor(e,r=Ui.DEFAULT){const{irradianceTexture:i=null,scatteringTexture:n=null,transmittanceTexture:s=null,useHalfFloat:a,ellipsoid:o,correctAltitude:c,photometric:l,sunDirection:u,sunAngularRadius:d,renderTargetCount:g,...p}={...bs,...e};super({toneMapped:!1,depthWrite:!1,depthTest:!1,...p,uniforms:{cameraPosition:new D(new T),ellipsoidCenter:new D(new T),inverseEllipsoidMatrix:new D(new ee),altitudeCorrection:new D(new T),sunDirection:new D((u==null?void 0:u.clone())??new T),u_solar_irradiance:new D(r.solarIrradiance),u_sun_angular_radius:new D(d??r.sunAngularRadius),u_bottom_radius:new D(r.bottomRadius*rr),u_top_radius:new D(r.topRadius*rr),u_rayleigh_scattering:new D(r.rayleighScattering),u_mie_scattering:new D(r.mieScattering),u_mie_phase_function_g:new D(r.miePhaseFunctionG),u_mu_s_min:new D(r.muSMin),u_irradiance_texture:new D(i),u_scattering_texture:new D(n),u_single_mie_scattering_texture:new D(n),u_transmittance_texture:new D(s),...p.uniforms},defines:{PI:`${Math.PI}`,TRANSMITTANCE_TEXTURE_WIDTH:ki.toFixed(0),TRANSMITTANCE_TEXTURE_HEIGHT:Vi.toFixed(0),SCATTERING_TEXTURE_R_SIZE:ws.toFixed(0),SCATTERING_TEXTURE_MU_SIZE:_s.toFixed(0),SCATTERING_TEXTURE_MU_S_SIZE:xs.toFixed(0),SCATTERING_TEXTURE_NU_SIZE:Ts.toFixed(0),IRRADIANCE_TEXTURE_WIDTH:Hi.toFixed(0),IRRADIANCE_TEXTURE_HEIGHT:zi.toFixed(0),METER_TO_LENGTH_UNIT:rr.toFixed(7),SUN_SPECTRAL_RADIANCE_TO_LUMINANCE:`vec3(${r.sunRadianceToRelativeLuminance.toArray().map(h=>h.toFixed(12)).join(",")})`,SKY_SPECTRAL_RADIANCE_TO_LUMINANCE:`vec3(${r.skyRadianceToRelativeLuminance.toArray().map(h=>h.toFixed(12)).join(",")})`,...p.defines}}),this.atmosphere=r,this.ellipsoidMatrix=new ee,this.atmosphere=r,this.ellipsoid=o,this.correctAltitude=c,this.photometric=l,this.renderTargetCount=g}copyCameraSettings(e){const r=this.uniforms,i=e.getWorldPosition(r.cameraPosition.value),n=r.inverseEllipsoidMatrix.value.copy(this.ellipsoidMatrix).invert(),s=fm.copy(i).applyMatrix4(n).sub(r.ellipsoidCenter.value),a=r.altitudeCorrection.value;this.correctAltitude?Gi(s,this.atmosphere.bottomRadius,this.ellipsoid,a):a.setScalar(0)}onBeforeCompile(e,r){e.fragmentShader=pm(e.fragmentShader,this.renderTargetCount)}onBeforeRender(e,r,i,n,s,a){this.copyCameraSettings(i)}get irradianceTexture(){return this.uniforms.u_irradiance_texture.value}set irradianceTexture(e){this.uniforms.u_irradiance_texture.value=e}get scatteringTexture(){return this.uniforms.u_scattering_texture.value}set scatteringTexture(e){this.uniforms.u_scattering_texture.value=e,this.uniforms.u_single_mie_scattering_texture.value=e}get transmittanceTexture(){return this.uniforms.u_transmittance_texture.value}set transmittanceTexture(e){this.uniforms.u_transmittance_texture.value=e}get useHalfFloat(){return!0}set useHalfFloat(e){}get ellipsoidCenter(){return this.uniforms.ellipsoidCenter.value}get sunDirection(){return this.uniforms.sunDirection.value}get sunAngularRadius(){return this.uniforms.u_sun_angular_radius.value}set sunAngularRadius(e){this.uniforms.u_sun_angular_radius.value=e}get renderTargetCount(){return this._renderTargetCount}set renderTargetCount(e){e!==this.renderTargetCount&&(this._renderTargetCount=e,this.needsUpdate=!0)}}mm([Fe("PHOTOMETRIC")],Ms.prototype,"photometric");var ot;(function(t){t.Sun="Sun",t.Moon="Moon",t.Mercury="Mercury",t.Venus="Venus",t.Earth="Earth",t.Mars="Mars",t.Jupiter="Jupiter",t.Saturn="Saturn",t.Uranus="Uranus",t.Neptune="Neptune",t.Pluto="Pluto",t.SSB="SSB",t.EMB="EMB",t.Star1="Star1",t.Star2="Star2",t.Star3="Star3",t.Star4="Star4",t.Star5="Star5",t.Star6="Star6",t.Star7="Star7",t.Star8="Star8"})(ot||(ot={}));ot.Star1,ot.Star2,ot.Star3,ot.Star4,ot.Star5,ot.Star6,ot.Star7,ot.Star8;var Ha;(function(t){t[t.From2000=0]="From2000",t[t.Into2000=1]="Into2000"})(Ha||(Ha={}));var za;(function(t){t[t.Pericenter=0]="Pericenter",t[t.Apocenter=1]="Apocenter"})(za||(za={}));var ka;(function(t){t.Penumbral="penumbral",t.Partial="partial",t.Annular="annular",t.Total="total"})(ka||(ka={}));var Va;(function(t){t[t.Invalid=0]="Invalid",t[t.Ascending=1]="Ascending",t[t.Descending=-1]="Descending"})(Va||(Va={}));function wc(t){return Math.sqrt(Math.max(t,0))}function gm(t){return Math.max(t,0)}function vm(t,e,r){const{bottomRadius:i}=t;return r<0&&e**2*(r**2-1)+i**2>=0}function ym(t,e,r){const{topRadius:i}=t,n=e**2*(r**2-1)+i**2;return gm(-e*r+wc(n))}function Ei(t,e){return .5/e+t*(1-1/e)}var Sm="Invariant failed";function wm(t,e){if(!t)throw new Error(Sm)}const _m=new T,Ga=new T,xm=new T;function di(t,e,r){const i=e*4;return r.set(t[i],t[i+1],t[i+2])}function _c(t,e,r){const{width:i,height:n}=t.image;wm(lh(t.image.data));let s=t.image.data;t.type===Co&&s instanceof Uint16Array&&(s=new oe(s.buffer));const a=Ri(e.x,0,1)*(i-1),o=Ri(e.y,0,1)*(n-1),c=Math.floor(a),l=Math.floor(o),u=a-c,d=o-l,g=u,p=d,h=c%i,y=(h+1)%i,f=l%n,S=(f+1)%n,b=di(s,f*i+h,_m),A=di(s,f*i+y,Ga),C=b.lerp(A,g),R=di(s,S*i+h,Ga),I=di(s,S*i+y,xm),E=R.lerp(I,g);return r.copy(C.lerp(E,p))}function Tm(t,e,r,i){const{topRadius:n,bottomRadius:s}=t,a=Math.sqrt(n**2-s**2),o=wc(e**2-s**2),c=ym(t,e,r),l=n-e,u=o+a,d=(c-l)/(u-l),g=o/a;return i.set(Ei(d,ki),Ei(g,Vi))}const bm=new T,xn=new T,Mm=new It;function Wa(t,e,r,i=new Ge,{ellipsoid:n=lt.WGS84,correctAltitude:s=!0,photometric:a=!0}={},o=Ui.DEFAULT){const c=bm.copy(e);if(s){const y=n.projectOnSurface(e,xn);y!=null&&c.sub(n.getOsculatingSphereCenter(y,o.bottomRadius,xn))}const l=xn;let u=c.length(),d=c.dot(r);const{topRadius:g}=o,p=-d-Math.sqrt(d**2-u**2+g**2);if(p>0&&(u=g,d+=p),u>g)l.set(1,1,1);else{const y=d/u;if(vm(o,u,y))l.setScalar(0);else{const f=Tm(o,u,y,Mm);_c(t,f,l)}}const h=l.multiply(o.solarIrradiance);return a&&h.multiply(o.sunRadianceToRelativeLuminance),i.setFromVector3(h)}var Gr=Uint8Array,xc=Uint16Array,Rm=Uint32Array,Em=new Gr([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Am=new Gr([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Tc=function(t,e){for(var r=new xc(31),i=0;i<31;++i)r[i]=e+=1<<t[i-1];for(var n=new Rm(r[30]),i=1;i<30;++i)for(var s=r[i];s<r[i+1];++s)n[s]=s-r[i]<<5|i;return[r,n]},bc=Tc(Em,2),Cm=bc[0],Im=bc[1];Cm[28]=258,Im[258]=28;Tc(Am,0);var Dm=new xc(32768);for(var me=0;me<32768;++me){var At=(me&43690)>>>1|(me&21845)<<1;At=(At&52428)>>>2|(At&13107)<<2,At=(At&61680)>>>4|(At&3855)<<4,Dm[me]=((At&65280)>>>8|(At&255)<<8)>>>1}var Wi=new Gr(288);for(var me=0;me<144;++me)Wi[me]=8;for(var me=144;me<256;++me)Wi[me]=9;for(var me=256;me<280;++me)Wi[me]=7;for(var me=280;me<288;++me)Wi[me]=8;var Pm=new Gr(32);for(var me=0;me<32;++me)Pm[me]=5;var Nm=new Gr(0),Om=typeof TextDecoder<"u"&&new TextDecoder,Lm=0;try{Om.decode(Nm,{stream:!0}),Lm=1}catch{}function Fm({topRadius:t,bottomRadius:e},r,i,n){const s=(r-e)/(t-e),a=i*.5+.5;return n.set(Ei(a,Hi),Ei(s,zi))}const Bm=1/Math.sqrt(Math.PI),Tn=Math.sqrt(3)/(2*Math.sqrt(Math.PI)),Um=new T,bn=new T,Hm=new It,zm=new ee,km={ellipsoid:lt.WGS84,correctAltitude:!0,photometric:!0};class Vm extends Io{constructor(e,r=Ui.DEFAULT){super(),this.atmosphere=r,this.ellipsoidCenter=new T,this.ellipsoidMatrix=new ee;const{irradianceTexture:i=null,ellipsoid:n,correctAltitude:s,photometric:a,sunDirection:o}={...km,...e};this.irradianceTexture=i,this.ellipsoid=n,this.correctAltitude=s,this.photometric=a,this.sunDirection=(o==null?void 0:o.clone())??new T}update(){if(this.irradianceTexture==null)return;const e=zm.copy(this.ellipsoidMatrix).invert(),r=this.getWorldPosition(Um).applyMatrix4(e).sub(this.ellipsoidCenter);if(this.correctAltitude){const l=this.ellipsoid.projectOnSurface(r,bn);l!=null&&r.sub(Gi(l,this.atmosphere.bottomRadius,this.ellipsoid,bn))}const i=r.length(),n=r.dot(this.sunDirection)/i,s=Fm(this.atmosphere,i,n,Hm),a=_c(this.irradianceTexture,s,bn);this.photometric&&a.multiply(this.atmosphere.skyRadianceToRelativeLuminance);const o=this.ellipsoid.getSurfaceNormal(r).applyMatrix4(this.ellipsoidMatrix),c=this.sh.coefficients;c[0].copy(a).multiplyScalar(Bm),c[1].copy(a).multiplyScalar(Tn*o.y),c[2].copy(a).multiplyScalar(Tn*o.z),c[3].copy(a).multiplyScalar(Tn*o.x)}}const Gm=`precision highp float;
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
`;var jm=Object.defineProperty,Mc=(t,e,r,i)=>{for(var n=void 0,s=t.length-1,a;s>=0;s--)(a=t[s])&&(n=a(e,r,n)||n);return n&&jm(e,r,n),n};const Ym={...bs,sun:!0,moon:!0,moonAngularRadius:.0045,lunarRadianceScale:1};class Rs extends Ms{constructor(e){const{sun:r,moon:i,moonDirection:n,moonAngularRadius:s,lunarRadianceScale:a,groundAlbedo:o,...c}={...Ym,...e};super({name:"SkyMaterial",glslVersion:Or,vertexShader:Ht(Wm,{parameters:or}),fragmentShader:Ht(Gm,{core:{raySphereIntersection:yc},parameters:or,functions:Ss,sky:Sc}),...c,uniforms:{inverseProjectionMatrix:new D(new ee),inverseViewMatrix:new D(new ee),moonDirection:new D((n==null?void 0:n.clone())??new T),moonAngularRadius:new D(s),lunarRadianceScale:new D(a),groundAlbedo:new D((o==null?void 0:o.clone())??new Ge(0)),shadowLengthBuffer:new D(null),...c.uniforms},defines:{PERSPECTIVE_CAMERA:"1"},depthTest:!0}),this.shadowLength=null,this.sun=r,this.moon=i}onBeforeRender(e,r,i,n,s,a){super.onBeforeRender(e,r,i,n,s,a);const{uniforms:o,defines:c}=this;o.inverseProjectionMatrix.value.copy(i.projectionMatrixInverse),o.inverseViewMatrix.value.copy(i.matrixWorld);const l=c.PERSPECTIVE_CAMERA!=null,u=i.isPerspectiveCamera===!0;u!==l&&(u?c.PERSPECTIVE_CAMERA="1":delete c.PERSPECTIVE_CAMERA,this.needsUpdate=!0);const d=this.groundAlbedo,g=c.GROUND_ALBEDO!=null,p=d.r!==0||d.g!==0||d.b!==0;p!==g&&(p?this.defines.GROUND_ALBEDO="1":delete this.defines.GROUND_ALBEDO,this.needsUpdate=!0);const h=this.shadowLength,y=c.HAS_SHADOW_LENGTH!=null,f=h!=null;f!==y&&(f?c.HAS_SHADOW_LENGTH="1":(delete c.HAS_SHADOW_LENGTH,o.shadowLengthBuffer.value=null),this.needsUpdate=!0),f&&(o.shadowLengthBuffer.value=h.map)}get moonDirection(){return this.uniforms.moonDirection.value}get moonAngularRadius(){return this.uniforms.moonAngularRadius.value}set moonAngularRadius(e){this.uniforms.moonAngularRadius.value=e}get lunarRadianceScale(){return this.uniforms.lunarRadianceScale.value}set lunarRadianceScale(e){this.uniforms.lunarRadianceScale.value=e}get groundAlbedo(){return this.uniforms.groundAlbedo.value}}Mc([Fe("SUN")],Rs.prototype,"sun");Mc([Fe("MOON")],Rs.prototype,"moon");const qm=`precision highp float;
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
`,Km=`precision highp float;
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
`;var Xm=Object.defineProperty,$m=(t,e,r,i)=>{for(var n=void 0,s=t.length-1,a;s>=0;s--)(a=t[s])&&(n=a(e,r,n)||n);return n&&Xm(e,r,n),n};const Qm={...bs,pointSize:1,radianceScale:1,background:!0};class Zm extends Ms{constructor(e){const{pointSize:r,radianceScale:i,background:n,...s}={...Qm,...e};super({name:"StarsMaterial",glslVersion:Or,vertexShader:Ht(Km,{parameters:or}),fragmentShader:Ht(qm,{parameters:or,functions:Ss}),...s,uniforms:{projectionMatrix:new D(new ee),modelViewMatrix:new D(new ee),viewMatrix:new D(new ee),matrixWorld:new D(new ee),cameraFar:new D(0),pointSize:new D(0),magnitudeRange:new D(new It(-2,8)),radianceScale:new D(i),...s.uniforms},defines:{PERSPECTIVE_CAMERA:"1"}}),this.pointSize=r,this.background=n}onBeforeRender(e,r,i,n,s,a){super.onBeforeRender(e,r,i,n,s,a);const o=this.uniforms;o.projectionMatrix.value.copy(i.projectionMatrix),o.modelViewMatrix.value.copy(i.modelViewMatrix),o.viewMatrix.value.copy(i.matrixWorldInverse),o.matrixWorld.value.copy(s.matrixWorld),o.cameraFar.value=i.far,o.pointSize.value=this.pointSize*e.getPixelRatio();const c=i.isPerspectiveCamera===!0;this.defines.PERSPECTIVE_CAMERA!=null!==c&&(c?this.defines.PERSPECTIVE_CAMERA="1":delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}get magnitudeRange(){return this.uniforms.magnitudeRange.value}get radianceScale(){return this.uniforms.radianceScale.value}set radianceScale(e){this.uniforms.radianceScale.value=e}}$m([Fe("BACKGROUND")],Zm.prototype,"background");const ja=new Ge("#fff2d8"),Ya=1e-8,Mn=3e4,qa=-1e3,Ka=1e7,Jm=5e6,ef=8e6,Fr=t=>Number.isFinite(t.x)&&Number.isFinite(t.y)&&Number.isFinite(t.z),Xa=t=>!Number.isFinite(t.longitude)||Math.abs(t.longitude)>180?"longitude must be a finite value in degrees within [-180, 180]":!Number.isFinite(t.latitude)||Math.abs(t.latitude)>90?"latitude must be a finite value in degrees within [-90, 90]":!Number.isFinite(t.altitudeMeters)||t.altitudeMeters<qa||t.altitudeMeters>Ka?`altitudeMeters must be within [${qa}, ${Ka}]`:null,tf=(t,e,r)=>{if(!Number.isFinite(t.getTime()))return"instant must be a valid Date";const i=Xa(e);if(i)return`observer ${i}`;if(!r)return null;const n=Xa(r.observer);return n?`sky reference observer ${n}`:Fr(r.scenePosition)?null:"sky reference scenePosition must contain finite metre coordinates"},Rc=t=>{if(!Fr(t.directionToSunECEF))return"sun direction contains a non-finite component";if(Math.abs(t.directionToSunECEF.length()-1)>1e-6)return"sun direction is not normalized";if(!t.ecefToSceneMatrix.elements.every(Number.isFinite))return"ECEF-to-scene matrix contains a non-finite component";const e=t.ecefToSceneMatrix.elements,r=[new T(e[0],e[4],e[8]),new T(e[1],e[5],e[9]),new T(e[2],e[6],e[10])];if(r.some(s=>Math.abs(s.length()-1)>1e-6)||Math.abs(r[0].dot(r[1]))>1e-6||Math.abs(r[0].dot(r[2]))>1e-6||Math.abs(r[1].dot(r[2]))>1e-6||Math.abs(e[3])>1e-12||Math.abs(e[7])>1e-12||Math.abs(e[11])>1e-12||Math.abs(e[12])>1e-12||Math.abs(e[13])>1e-12||Math.abs(e[14])>1e-12||Math.abs(e[15]-1)>1e-12)return"ECEF-to-scene matrix is not an affine orthonormal rotation";const i=t.ecefToSceneMatrix.determinant();if(!Number.isFinite(i)||Math.abs(i-1)>1e-6)return"ECEF-to-scene matrix is not a proper orthonormal rotation";if(!Fr(t.ellipsoidCenterECEF))return"ellipsoid center contains a non-finite component";const n=t.ellipsoidCenterECEF.length();return n<Jm||n>ef?"ellipsoid center is outside the plausible WGS84 distance range":null},rf=t=>{var r;const e=Rc(t.skyFrame);return e||(Fr(t.directionToSun)?Math.abs(t.directionToSun.length()-1)>1e-6?"scene sun direction is not normalized":![t.color.r,t.color.g,t.color.b].every(Number.isFinite)||![t.radiance.r,t.radiance.g,t.radiance.b].every(Number.isFinite)||!Number.isFinite(t.relativeIntensity)||t.relativeIntensity<0||t.relativeIntensity>1||!Number.isFinite(t.azimuthDegrees)||!Number.isFinite(t.elevationDegrees)?"sunlight color, intensity, or angles contain invalid values":(r=t.skyIrradianceCoefficients)!=null&&r.some(i=>!Fr(i))?"sky irradiance contains a non-finite coefficient":null:"scene sun direction contains a non-finite component")},Rn={useTransmittanceLut:!0,useIrradianceLut:!0},nf=({east:t,north:e,up:r})=>new ee().set(t.x,t.y,t.z,0,r.x,r.y,r.z,0,-e.x,-e.y,-e.z,0,0,0,0,1);function Es({longitude:t,latitude:e,altitudeMeters:r}){const i=new Wo(Jn(t),Jn(e),r).toECEF(),n=new T,s=new T,a=new T;return lt.WGS84.getEastNorthUpVectors(i,n,s,a),{observerECEF:i,east:n,north:s,up:a}}const Ec=(t,{east:e,north:r,up:i},n)=>n.set(t.dot(e),t.dot(i),-t.dot(r)).normalize(),Ac=(t,e,r)=>{const i=r?Es(r.observer):e,n=nf(i);r!=null&&r.sceneFromLocal&&n.premultiply(r.sceneFromLocal);const s=n.clone().invert(),a=((r==null?void 0:r.scenePosition)??new T).clone().applyMatrix4(s).sub(i.observerECEF);return{directionToSunECEF:t.clone(),ecefToSceneMatrix:n,ellipsoidCenterECEF:a}},sf=(t,e,{observerECEF:r,east:i,north:n,up:s})=>t!=null&&t.irradianceTexture?(t.ellipsoidMatrix.set(i.x,i.y,i.z,0,s.x,s.y,s.z,0,-n.x,-n.y,-n.z,0,0,0,0,1),t.ellipsoidCenter.copy(r).negate(),t.sunDirection.copy(e),t.position.set(0,0,0),t.updateMatrixWorld(!0),t.update(),t.sh.coefficients.map(a=>a.clone())):null,Cc=t=>{const e=ra(Math.asin(qe(t.y,-1,1)));return{azimuthDegrees:(ra(Math.atan2(t.x,-t.z))+360)%360,elevationDegrees:e}},af=(t,e)=>{const r=Es(e.observer),i=Ec(t.skyFrame.directionToSunECEF,r,new T);return e.sceneFromLocal&&i.transformDirection(e.sceneFromLocal),{...t,directionToSun:i,...Cc(i),skyFrame:Ac(t.skyFrame.directionToSunECEF,r,e)}},of=(t,e,r,i=null,n)=>{const s=Es(e),{observerECEF:a,up:o}=s,c=new T(...fl(t)),l=Ec(c,s,new T);n!=null&&n.sceneFromLocal&&l.transformDirection(n.sceneFromLocal);const u=Ac(c,s,n),d=sf(i,c,s),{azimuthDegrees:g,elevationDegrees:p}=Cc(l);if(!r){const A=Math.sqrt(qe(l.y,0,1));return{directionToSun:l,color:ja.clone(),relativeIntensity:A,radiance:ja.clone().multiplyScalar(A),atmosphericTransmittanceReady:!1,atmosphericIrradianceReady:d!==null,skyIrradianceCoefficients:d,azimuthDegrees:g,elevationDegrees:p,skyFrame:u}}const h=Wa(r,a,c,new Ge,{ellipsoid:lt.WGS84,correctAltitude:!0,photometric:!0}),y=Wa(r,a,o,new Ge,{ellipsoid:lt.WGS84,correctAltitude:!0,photometric:!0}),f=Math.max(h.r,h.g,h.b,0),S=Math.max(y.r,y.g,y.b,Ya),b=f>Ya?h.clone().multiplyScalar(1/f):new Ge(0,0,0);return{directionToSun:l,color:b,relativeIntensity:qe(f/S,0,1),radiance:h,atmosphericTransmittanceReady:!0,atmosphericIrradianceReady:d!==null,skyIrradianceCoefficients:d,azimuthDegrees:g,elevationDegrees:p,skyFrame:u}};class cf{transmittanceTexture=null;irradianceTexture=null;scatteringTexture=null;skyLightProbe=new Vm({ellipsoid:lt.WGS84,correctAltitude:!0,photometric:!0});transmittanceLoading=!1;irradianceLoading=!1;scatteringLoading=!1;transmittanceRetryAt=0;irradianceRetryAt=0;scatteringRetryAt=0;disposed=!1;get ready(){return this.transmittanceTexture!==null&&this.irradianceTexture!==null}get skyReady(){return this.skyTextures!==null}get skyTextures(){return!this.transmittanceTexture||!this.irradianceTexture||!this.scatteringTexture?null:{transmittanceTexture:this.transmittanceTexture,irradianceTexture:this.irradianceTexture,scatteringTexture:this.scatteringTexture}}get isSkyLoading(){return this.transmittanceLoading||this.irradianceLoading||this.scatteringLoading}isLoadingFor(e=Rn){return e.useTransmittanceLut&&this.transmittanceLoading||e.useIrradianceLut&&this.irradianceLoading}ensure(e,r=Rn){if(this.disposed)return;const i=()=>{this.isLoadingFor(r)||e()};r.useTransmittanceLut&&this.ensureTransmittance(i),r.useIrradianceLut&&this.ensureIrradiance(i)}ensureSky(e){if(this.disposed||this.skyReady)return;let r=!1;const i=()=>{!r&&!this.isSkyLoading&&(r=!0,e())};this.ensureTransmittance(i),this.ensureIrradiance(i),this.ensureScattering(i)}ensureTransmittance(e){this.transmittanceTexture||this.transmittanceLoading||Date.now()<this.transmittanceRetryAt||(this.transmittanceLoading=!0,Ua(wn,{width:ki,height:Vi}).load(`${_n}/transmittance.bin`,r=>{if(this.transmittanceLoading=!1,this.disposed){r.dispose();return}this.transmittanceRetryAt=0,this.transmittanceTexture=r,e()},void 0,r=>{this.transmittanceLoading=!1,this.disposed||(this.transmittanceRetryAt=Date.now()+Mn,console.error("[SHADOW] Takram transmittance LUT failed",r),e())}))}ensureIrradiance(e){this.irradianceTexture||this.irradianceLoading||Date.now()<this.irradianceRetryAt||(this.irradianceLoading=!0,Ua(wn,{width:Hi,height:zi}).load(`${_n}/irradiance.bin`,r=>{if(this.irradianceLoading=!1,this.disposed){r.dispose();return}this.irradianceRetryAt=0,this.irradianceTexture=r,this.skyLightProbe.irradianceTexture=r,e()},void 0,r=>{this.irradianceLoading=!1,this.disposed||(this.irradianceRetryAt=Date.now()+Mn,console.error("[SHADOW] Takram irradiance LUT failed",r),e())}))}ensureScattering(e){this.scatteringTexture||this.scatteringLoading||Date.now()<this.scatteringRetryAt||(this.scatteringLoading=!0,Sh(wn,{width:em,height:tm,depth:rm}).load(`${_n}/scattering.bin`,r=>{if(this.scatteringLoading=!1,this.disposed){r.dispose();return}this.scatteringRetryAt=0,this.scatteringTexture=r,e()},void 0,r=>{this.scatteringLoading=!1,this.disposed||(this.scatteringRetryAt=Date.now()+Mn,console.error("[SHADOW] Takram scattering LUT failed",r),e())}))}evaluate(e,r,i=Rn,n){return of(e,r,i.useTransmittanceLut?this.transmittanceTexture:null,i.useIrradianceLut?this.skyLightProbe:null,n)}dispose(){var e,r,i;this.disposed||(this.disposed=!0,this.transmittanceLoading=!1,this.irradianceLoading=!1,this.scatteringLoading=!1,this.transmittanceRetryAt=0,this.irradianceRetryAt=0,this.scatteringRetryAt=0,(e=this.transmittanceTexture)==null||e.dispose(),(r=this.irradianceTexture)==null||r.dispose(),(i=this.scatteringTexture)==null||i.dispose(),this.transmittanceTexture=null,this.irradianceTexture=null,this.scatteringTexture=null,this.skyLightProbe.irradianceTexture=null,this.skyLightProbe.sh.zero())}}const lf="shadow-simulation-atmospheric-sky",Wr=2,gi="carmaOutputToSrgb",En="carmaDisplayExposure",uf=new T;class df extends Rs{observerScenePosition=new T;hasObserverScenePosition=!1;viewCamera=null;copyCameraSettings(e){if(super.copyCameraSettings(e),!this.hasObserverScenePosition)return;const r=this.uniforms;if(r.cameraPosition.value.copy(this.observerScenePosition),!this.correctAltitude)return;const i=uf.copy(this.observerScenePosition).applyMatrix4(r.inverseEllipsoidMatrix.value).sub(r.ellipsoidCenter.value);Gi(i,this.atmosphere.bottomRadius,this.ellipsoid,r.altitudeCorrection.value)}onBeforeRender(e,r,i,n,s,a){super.onBeforeRender(e,r,this.viewCamera??i,n,s,a)}}const hf=t=>{t.uniforms.toneMappingExposure=new D(1),t.uniforms[gi]=new D(!1),t.uniforms[En]=new D(Wr),t.fragmentShader=t.fragmentShader.replace("precision highp sampler3D;",`precision highp sampler3D;

uniform bool ${gi};
uniform float ${En};
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
  }`).replace("outputColor.a = 1.0;",`outputColor.rgb *= ${En};
  outputColor.a = 1.0;
  if (${gi}) {
    // SkyMaterial is raw GLSL: match terrain's AgX on the display target.
    // Offscreen samples stay linear HDR until the shared final composite.
    outputColor.rgb = AgXToneMapping(outputColor.rgb);
    outputColor = carmaLinearToSrgb(outputColor);
  }`)},mf=t=>{const e=new df({groundAlbedo:t,moon:!1,photometric:!0,side:Do,sun:!0});hf(e),e.depthTest=!1,e.depthWrite=!1;const r=new Ao;r.setAttribute("position",new pl([-1,-1,0,3,-1,0,-1,3,0],3));const i=new Br(r,e);return i.name=lf,i.visible=!1,i.frustumCulled=!1,i.renderOrder=-100,i.castShadow=!1,i.receiveShadow=!1,i.onBeforeRender=n=>{e.uniforms.toneMappingExposure.value=n.toneMappingExposure,e.uniforms[gi].value=n.getRenderTarget()===null},{mesh:i,update(n,s){return s?Rc(n)?!1:(i.visible=!0,e.irradianceTexture=s.irradianceTexture,e.scatteringTexture=s.scatteringTexture,e.transmittanceTexture=s.transmittanceTexture,e.sunDirection.copy(n.directionToSunECEF),e.ellipsoidCenter.copy(n.ellipsoidCenterECEF),e.ellipsoidMatrix.copy(n.ecefToSceneMatrix),!0):(i.visible=!1,!1)},updateViewCamera(n){e.viewCamera=n},updateObserverScenePosition(n){e.observerScenePosition.copy(n),e.hasObserverScenePosition=!0},updateGroundAlbedo(n){e.groundAlbedo.copy(n)},dispose(){r.dispose(),e.dispose()}}},ff=2048,Ic=8192,$a=2,Qa=50,pf=1e4,gf=.04,An=25,vf=4,yf=1.2,Sf=.2,Za=.05,wf=8,Pr=vl(.53/2),_f=Math.PI*(3-Math.sqrt(5)),xf=300,Tf=new T(0,1,0),Ja=(t,e,r=new ee)=>r.lookAt(t,e,Tf).setPosition(t).invert(),bf=(t,e)=>{if(t.length===0)return null;const r=t.map(h=>h.clone().applyMatrix4(e)),i=Math.min(...r.map(({x:h})=>h)),n=Math.max(...r.map(({x:h})=>h)),s=Math.min(...r.map(({y:h})=>h)),a=Math.max(...r.map(({y:h})=>h)),o=r.map(({z:h})=>-h),c=Math.max(0,Math.min(...o)),l=Math.max(c+.01,Math.max(...o)),u=(i+n)/2,d=(s+a)/2,g=Math.max((n-i)/2,$a/2),p=Math.max((a-s)/2,$a/2);return{left:u-g,right:u+g,bottom:d-p,top:d+p,near:c,far:l}},Mf=(t,e=Ic)=>t>=16?e:Math.min(e,ff*Math.sqrt(t));class Dc{constructor(e){this.host=e,this.lights=Array.from({length:1},()=>{const r=new gl(16777215,0);return r.name="shadow-simulation-sun",r.visible=!1,r.castShadow=!1,r.shadow.camera.name="shadow-simulation-shadow-camera",r.shadow.autoUpdate=!1,r.shadow.radius=0,r.shadow.bias=0,r.shadow.normalBias=Za,e.add(r,r.target),r})}lights;softSun=!1;lastSoftFit=null;maxShadowMapSize=Ic;mapAllocation=null;disposed=!1;setMaxShadowMapSize(e){if(!Number.isFinite(e)||e<=0)return;const r=Math.max(256,Math.floor(e));this.disposed||this.maxShadowMapSize===r||(this.maxShadowMapSize=r)}setSoftSun(e){this.disposed||this.softSun===e||(e||this.restoreSunDiscCenter(),this.softSun=e,e||(this.lastSoftFit=null))}applySunDiscSample(e,r,i=!0){if(this.disposed)return;const n=this.lastSoftFit;if(!n)return;const s=Math.max(1,Math.floor(r)),a=(Math.floor(e)%s+s)%s,o=Pr*Math.sqrt((a+.5)/s),c=a*_f,l=Math.cos(c)*o,u=Math.sin(c)*o,d=n.tangentA.clone().multiplyScalar(l).addScaledVector(n.tangentB,u).normalize(),g=n.directionToSun.clone().multiplyScalar(Math.cos(o)).addScaledVector(d,Math.sin(o)).normalize(),p=this.lights[0],[h,y]=i&&s>1?ru(a):[0,0],f=p.shadow.camera,S=n.rasterBounds,b=h*(S.right-S.left)/p.shadow.mapSize.x,A=y*(S.top-S.bottom)/p.shadow.mapSize.y;f.left=S.left+b,f.right=S.right+b,f.bottom=S.bottom+A,f.top=S.top+A,f.updateProjectionMatrix(),p.position.copy(g).multiplyScalar(n.lightDistance).add(n.anchorPosition),p.updateMatrixWorld(!0),p.target.updateMatrixWorld(!0),p.shadow.updateMatrices(p),p.shadow.needsUpdate=!0}restoreSunDiscCenter(){if(this.disposed||!this.lastSoftFit)return;const e=this.lastSoftFit,r=this.lights[0],i=r.shadow.camera;i.left=e.rasterBounds.left,i.right=e.rasterBounds.right,i.bottom=e.rasterBounds.bottom,i.top=e.rasterBounds.top,i.updateProjectionMatrix(),r.position.copy(e.directionToSun).multiplyScalar(e.lightDistance).add(e.anchorPosition),r.updateMatrixWorld(!0),r.target.updateMatrixWorld(!0),r.shadow.updateMatrices(r),r.shadow.needsUpdate=!0}invalidate(){this.lights[0].shadow.needsUpdate=!0}update({receiverWorldPoints:e,receiverAnchorWorldPosition:r,minimumElevationMeters:i,maximumElevationMeters:n,directionToSun:s,color:a,intensity:o,shadowIntensity:c,quality:l,groundTexelFit:u=!0,stabilizeMapSize:d=!1,mapTexelBudget:g,casterMapTexelBudget:p,groundTexelTargetMeters:h,maxReceiverBiasMeters:y}){var ve,Mt;if(this.disposed)return null;if(e.length===0){for(const Re of this.lights)Re.visible=!1,Re.castShadow=!1,Re.intensity=0,Re.shadow.needsUpdate=!1;return null}const f=s.clone().normalize(),S=Math.max(0,n-i),b=Math.max(gf,f.y),A=qe((S+xf)/b+Qa,Qa,pf),C=A+S+An,R=Mf(l,this.maxShadowMapSize),I=ha(g,Math.floor(R)**2,this.maxShadowMapSize),E=Math.floor(Math.sqrt(I)),O=new Ge(a),B=r.clone(),U=e.reduce((Re,Y)=>Math.max(Re,Y.distanceTo(r)),0),G=U+C,H=this.lights[0];H.position.copy(f).multiplyScalar(G).add(B),H.target.position.copy(B),H.updateMatrixWorld(!0),H.target.updateMatrixWorld(!0),H.shadow.updateMatrices(H);const X=bf(e,Ja(H.position,H.target.position));if(!X)return null;const fe=tu(U,f.y,this.softSun?Pr:0),M=this.softSun?Math.max(Math.tan(Pr)*G,fe.planarMeters):0,Z={maxMapSize:this.maxShadowMapSize,elevationSine:f.y,sunDiscGuardMeters:M,groundTexelFit:u,groundTexelTargetMeters:h},F=ma(X,{...Z,mapSize:E,mapTexelBudget:I,mapDimensions:d&&((ve=this.mapAllocation)==null?void 0:ve.texelBudget)===I&&this.mapAllocation.maxMapSize===this.maxShadowMapSize&&this.mapAllocation.groundTexelFit===u?this.mapAllocation:void 0}),te=ha(p,I,this.maxShadowMapSize),$=p===void 0?F:ma(X,{...Z,mapSize:Math.floor(Math.sqrt(te)),mapTexelBudget:te});this.mapAllocation={width:F.mapWidth,height:F.mapHeight,texelBudget:I,maxMapSize:this.maxShadowMapSize,groundTexelFit:u};const de=Math.max(F.metersPerTexelX,F.metersPerTexelY),be=Math.max(F.guardMetersX,F.guardMetersY),P={left:F.left,right:F.right,bottom:F.bottom,top:F.top,near:Math.max(.01,X.near-fe.depthMeters-A-S-An),far:Math.max(1,X.far+fe.depthMeters+S+An)};P.far=Math.max(P.near+1,P.far);const J=qe(de*yf/Math.max(Sf,f.y),Za,wf),Pe=-qe(de*vf/Math.max(P.far-P.near,1),Number.EPSILON,.01),Me=new T;Math.abs(f.y)>.99?Me.set(1,0,0):Me.crossVectors(new T(0,1,0),f).normalize();const dt=new T().crossVectors(f,Me),ce=this.lights[0];ce.visible=!0,ce.castShadow=!0,ce.intensity=o,ce.color.copy(O),ce.shadow.intensity=qe(c,0,1),ce.shadow.needsUpdate=!0,(ce.shadow.mapSize.x!==F.mapWidth||ce.shadow.mapSize.y!==F.mapHeight)&&((Mt=ce.shadow.map)==null||Mt.dispose(),ce.shadow.map=null,ce.shadow.mapSize.set(F.mapWidth,F.mapHeight)),ce.position.copy(f).multiplyScalar(G).add(B),ce.target.position.copy(B);const ht=y!==void 0&&Number.isFinite(y)?Math.max(0,y):1/0;ce.shadow.bias=Math.max(Pe,-ht/(P.far-P.near)),ce.shadow.normalBias=Math.min(J,ht);const Ce=ce.shadow.camera;Ce.left=P.left,Ce.right=P.right,Ce.bottom=P.bottom,Ce.top=P.top,Ce.near=P.near,Ce.far=P.far,Ce.updateProjectionMatrix(),ce.updateMatrixWorld(!0),ce.target.updateMatrixWorld(!0),ce.shadow.updateMatrices(ce),this.lastSoftFit=this.softSun?{directionToSun:f.clone(),tangentA:Me,tangentB:dt,anchorPosition:B.clone(),lightDistance:G,rasterBounds:P}:null;const Ue=H.shadow.camera;return{sampleCount:1,totalShadowTexels:F.mapWidth*F.mapHeight,mapTexelBudget:h===void 0?I:void 0,casterReachMeters:A,casterMetersPerTexel:[$.metersPerTexelX,$.metersPerTexelY],camera:{receiverPointCount:e.length,receiverLeftMeters:X.left,receiverRightMeters:X.right,receiverBottomMeters:X.bottom,receiverTopMeters:X.top,leftMeters:Ue.left,rightMeters:Ue.right,bottomMeters:Ue.bottom,topMeters:Ue.top,nearMeters:Ue.near,farMeters:Ue.far,shadowMapWidth:F.mapWidth,shadowMapHeight:F.mapHeight,viewMatrixElements:[...Ja(H.position,H.target.position).elements],projectionMatrixElements:[...Ue.projectionMatrix.elements],guardMeters:be,metersPerTexel:de,metersPerTexelX:F.metersPerTexelX,metersPerTexelY:F.metersPerTexelY,groundTexelWidthMeters:F.groundTexelWidthMeters,groundTexelHeightMeters:F.groundTexelHeightMeters,groundTexelFitLimited:F.groundTexelFitLimited,groundTexelFit:u,groundTexelTargetMeters:h}}}dispose(){var e;if(!this.disposed){this.disposed=!0;for(const r of this.lights)(e=r.shadow.map)==null||e.dispose(),this.host.remove(r.target,r)}}}const Rf=`
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
`,eo="float getShadow( sampler2DShadow shadowMap,",Cn="#elif defined( SHADOWMAP_TYPE_VSM )",Ef=()=>{const t=zn.shadowmap_pars_fragment;if(!t.includes(eo)||!t.includes(Cn))throw new Error("Three PCF shader changed; validate receiver-plane shadow integration");return`uniform bool carmaReceiverPlaneShadow;
${t.replace(eo,"float carmaOriginalGetShadow( sampler2DShadow shadowMap,").replace(Cn,`${Rf}
${Cn}`)}`},to=new WeakMap,Af=(t,e)=>{const r=to.get(t);if(r)return e!==void 0&&r.value!==e&&(r.value=e,t.needsUpdate=!0),r;const i={value:e??!1},n=t.onBeforeCompile,s=t.customProgramCacheKey(),a=Ef();return t.onBeforeCompile=function(o,c){n.call(this,o,c),o.uniforms.carmaReceiverPlaneShadow=i,o.fragmentShader=o.fragmentShader.replace("#include <shadowmap_pars_fragment>",a)},t.customProgramCacheKey=()=>`${s}|carma-receiver-plane-pcf-v3|${i.value?"mesh":"stock"}`,t.needsUpdate=!0,to.set(t,i),i},Ct=t=>{var e;(e=t.depthTexture)==null||e.dispose(),t.dispose()},Ot=(t,e)=>t*e*8;class Cf{entries=new Map;retainedBytes=0;capacityBytes=0;activeVariantIds=null;hits=0;misses=0;get bytes(){return this.retainedBytes}get count(){return this.entries.size}get availableBytes(){return Math.max(0,this.capacityBytes-this.retainedBytes)}has(e){return this.entries.has(e)}setActiveVariants(e){this.activeVariantIds=e}setBudget(e,r){this.capacityBytes=Math.max(0,e-r),this.evictInactive(0);for(const i of this.entries.keys()){if(this.retainedBytes<=this.capacityBytes)break;this.remove(i)}}get(e){const r=this.entries.get(e);return r?this.hits+=1:this.misses+=1,r==null?void 0:r.target}admit(e,r,i,n=r,s={}){var o;if(this.entries.has(e))return!1;const a=Ot(i.width,i.height);return a>this.capacityBytes||(s.evictInactive!==!1&&((o=this.activeVariantIds)!=null&&o.has(n))&&this.evictInactive(a),this.retainedBytes+a>this.capacityBytes)?!1:(this.entries.set(e,{pageId:r,variantId:n,target:i,bytes:a}),this.retainedBytes+=a,!0)}invalidate(e){for(const[r,i]of this.entries)i.pageId===e&&this.remove(r)}clear(){for(const e of this.entries.keys())this.remove(e)}evictInactive(e){if(this.activeVariantIds)for(const[r,i]of this.entries){if(this.retainedBytes+e<=this.capacityBytes)break;this.activeVariantIds.has(i.variantId)||this.remove(r)}}remove(e){const r=this.entries.get(e);r&&(this.entries.delete(e),this.retainedBytes-=r.bytes,Ct(r.target))}}const If=16,In=4;class Df{constructor(e,r,i,n=4096,s=e){if(this.scene=e,this.renderer=r,this.memoryBudgetBytes=i,this.host=s,!Number.isFinite(i)||!(i>=Ot(64,64)))throw new RangeError("Shadow page budget must fit at least one 64-square page");if(!Number.isFinite(n)||n<64)throw new RangeError("Maximum shadow page size must be finite and at least 64");if(r.shadowMap.type!==cn)throw new Error("Tiled shadow reference requires the shared PCF shadow path");this.maxMapSize=Math.max(64,2**Math.floor(Math.log2(Math.min(n,r.capabilities.maxTextureSize,Math.sqrt(i/8)))))}pages=new Map;activePageIds=new Set;activeSamples=1;prewarmPageIds=new Set;prewarmSamples=1;prewarmRevision=0;prewarmSink=null;prewarmCamera=new yl([]);cache=new Cf;scratchBytes=0;depthRenders=0;colorPasses=0;disposed=!1;streamedTarget=null;maxMapSize;setView(e,r,i,n,s,a){if(this.disposed)return;if(this.clearPrewarmView(),![s.directionToSun.x,s.directionToSun.y,s.directionToSun.z].every(Number.isFinite)||s.directionToSun.lengthSq()===0||s.directionToSun.y<=0)throw new RangeError("Tiled shadow reference requires a finite sun direction above the horizon");const o=yu(e,r,i,n);this.activePageIds=new Set(o.map(({id:l})=>l));for(const l of o)this.configurePage(l,s,a);const c=Math.max(32,this.activePageIds.size*2);for(const[l,u]of this.pages){if(this.pages.size<=c)break;this.activePageIds.has(l)||(this.cache.invalidate(l),u.controller.dispose(),this.pages.delete(l))}this.updateActiveVariants(),this.scratchBytes=Math.max(0,...Array.from(this.activePageIds,l=>{const u=this.pages.get(l);return Ot(u.width,u.height)})),this.streamedTarget&&Ot(this.streamedTarget.width,this.streamedTarget.height)>this.scratchBytes&&(Ct(this.streamedTarget),this.streamedTarget=null),this.cache.setBudget(this.memoryBudgetBytes,this.reservedBytes)}updatePresentation(e){if(this.disposed)return;e.updateMatrixWorld(!0);const r=new ee().multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i=new Ur().setFromProjectionMatrix(r),n=new Set;for(const[s,a]of this.pages)i.intersectsBox(a.receiverBounds)&&(a.screenBounds.copy(Ho(a.receiverBounds,r)),n.add(s));this.activePageIds=n,this.updateActiveVariants()}get reservedBytes(){return this.scratchBytes+(this.prewarmSink?In:0)}setPrewarmView(e,r,i,n,s,a){if(this.clearPrewarmView(),this.disposed)return;if(!Number.isSafeInteger(a)||a<1||a>4096||!(n>0&&Number.isFinite(n))||![i.x,i.y].every(l=>l>0&&Number.isFinite(l))||!s.directionToSun.toArray().every(Number.isFinite)||s.directionToSun.y<=0)throw new RangeError("Invalid shadow prewarm view");const o=new ee().multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),c=new Set;for(const{id:l,bounds:u}of e){if(c.has(l)||u.isEmpty()||![...u.min.toArray(),...u.max.toArray()].every(Number.isFinite))throw new RangeError("Prewarm cells require unique IDs and finite bounds");c.add(l)}this.prewarmSamples=a;for(const l of e){if(this.prewarmPageIds.size>=If)break;this.activePageIds.has(l.id)||!this.pages.has(l.id)&&this.pages.size>=Math.max(32,this.activePageIds.size*2)||(this.configurePage({...l,screenBounds:new ie,groundTexelTargetMeters:Math.max(1e-9,2*n/zo(l.bounds,o,i))},s),this.prewarmPageIds.add(l.id))}}clearPrewarmView(){this.prewarmPageIds.clear(),this.prewarmRevision+=1}get prewarmPages(){const e=[...this.prewarmPageIds].map(i=>{const n=this.pages.get(i),s=this.countPrewarmSamples(i,n);return{id:i,receiverBounds:n.receiverBounds.clone(),casterBounds:n.casterBounds.clone(),width:n.width,height:n.height,samples:this.prewarmSamples,cachedSamples:s,sampleBudget:s,limited:n.limited,canPrewarm:!1}});let r=this.cache.availableBytes-(this.prewarmSink?0:In);for(;r>0;){const i=e.filter(n=>n.sampleBudget<n.samples&&Ot(n.width,n.height)<=r).sort((n,s)=>n.sampleBudget-s.sampleBudget);if(i.length===0)break;for(const n of i){const s=Ot(n.width,n.height);s>r||(n.sampleBudget+=1,r-=s)}}return e.map(i=>({...i,canPrewarm:i.sampleBudget>i.cachedSamples}))}canPrewarm(e){return!this.disposed&&this.prewarmPages.some(r=>r.id===e&&r.canPrewarm)}countPrewarmSamples(e,r){const i=JSON.stringify([e,r.projectionKey,this.prewarmSamples]);let n=0;for(let s=0;s<this.prewarmSamples;s+=1)this.cache.has(JSON.stringify([i,s]))&&(n+=1);return n}prewarmNext(e,r,i={}){var y,f;const n=this.pages.get(r),s=!this.disposed&&this.prewarmPageIds.has(r)&&!!n,a=(S,b=!1)=>{var C;const A=s?this.countPrewarmSamples(r,n):0;return{pageId:r,rendered:S,cachedSamples:A,totalSamples:s?this.prewarmSamples:0,complete:s&&A===this.prewarmSamples,budgetLimited:b,aborted:((C=i.signal)==null?void 0:C.aborted)===!0}};if(!s||(y=i.signal)!=null&&y.aborted)return a(0);const o=this.prewarmRevision,c=n.contentRevision;if(this.renderer.shadowMap.type!==cn)throw new Error("Shadow prewarm requires the shared PCF shadow path");const l=JSON.stringify([r,n.projectionKey,this.prewarmSamples]);let u=0;for(;u<this.prewarmSamples&&this.cache.has(JSON.stringify([l,u]));)u+=1;if(u===this.prewarmSamples)return a(0);if(!this.canPrewarm(r)||Ot(n.width,n.height)+(this.prewarmSink?0:In)>this.cache.availableBytes)return a(0,!0);this.prewarmSink||(this.prewarmSink=new Ye(1,1,{depthBuffer:!1}),this.cache.setBudget(this.memoryBudgetBytes,this.reservedBytes));const g=n.controller.lights[0];this.prewarmSamples===1?n.controller.restoreSunDiscCenter():n.controller.applySunDiscSample(u,this.prewarmSamples),g.shadow.map=null,g.shadow.needsUpdate=!0;const p=g.visible;g.visible=!0,this.prewarmCamera.layers.mask=e.layers.mask,this.prewarmCamera.matrixAutoUpdate=!1,this.prewarmCamera.matrixWorldAutoUpdate=!1,this.prewarmCamera.matrixWorld.copy(e.matrixWorld),this.prewarmCamera.matrixWorldInverse.copy(e.matrixWorldInverse),this.prewarmCamera.projectionMatrix.copy(e.projectionMatrix);let h=0;try{this.renderPrewarmDepth(g);const S=g.shadow.map;S&&(h=1,this.depthRenders+=1,((f=i.signal)!=null&&f.aborted||o!==this.prewarmRevision||c!==n.contentRevision||!this.prewarmPageIds.has(r)||!this.cache.admit(JSON.stringify([l,u]),r,S,l,{evictInactive:!1}))&&Ct(S))}catch(S){throw g.shadow.map&&Ct(g.shadow.map),S}finally{g.visible=p,g.shadow.map=null}return a(h)}renderPrewarmDepth(e){const{renderer:r,scene:i}=this,n=r.getContext(),s=r.getRenderTarget(),a=r.getActiveCubeFace(),o=r.getActiveMipmapLevel(),c=r.getViewport(new ie),l=r.getScissor(new ie),u=r.getScissorTest(),d=n.getParameter(n.DRAW_FRAMEBUFFER_BINDING),g=n.getParameter(n.READ_FRAMEBUFFER_BINDING),p=new ie().fromArray(n.getParameter(n.VIEWPORT)),h=new ie().fromArray(n.getParameter(n.SCISSOR_BOX)),y=n.isEnabled(n.SCISSOR_TEST),f=n.isEnabled(n.DEPTH_TEST),S=n.getParameter(n.DEPTH_RANGE),b=n.getParameter(n.DEPTH_WRITEMASK),A=n.getParameter(n.DEPTH_FUNC),C=n.getParameter(n.DEPTH_CLEAR_VALUE),R=n.getParameter(n.COLOR_CLEAR_VALUE),I=n.getParameter(n.COLOR_WRITEMASK),E=r.clippingPlanes,O=r.autoClear,B=i.background,U=r.xr.enabled,G=r.shadowMap.enabled,H=r.shadowMap.autoUpdate,X=r.shadowMap.needsUpdate,fe=[];i.traverse(M=>{const Z=M;Z.isLight&&Z.castShadow&&Z!==e&&fe.push(Z)});try{r.resetState(),r.autoClear=!1,r.xr.enabled=!1,r.shadowMap.enabled=!0,r.shadowMap.autoUpdate=!0;for(const M of fe)M.castShadow=!1;i.background=null,r.clippingPlanes=E,r.setRenderTarget(this.prewarmSink),n.depthRange(0,1),r.render(i,this.prewarmCamera)}finally{r.clippingPlanes=E,r.autoClear=O,r.xr.enabled=U,r.shadowMap.enabled=G,r.shadowMap.autoUpdate=H,r.shadowMap.needsUpdate=X;for(const M of fe)M.castShadow=!0;i.background=B,r.resetState(),r.setRenderTarget(s,a,o),r.setViewport(c),r.setScissor(l),r.setScissorTest(u),r.state.bindFramebuffer(n.DRAW_FRAMEBUFFER,d),r.state.bindFramebuffer(n.READ_FRAMEBUFFER,g),r.state.viewport(p),r.state.scissor(h),r.state.setScissorTest(y),f?r.state.enable(n.DEPTH_TEST):r.state.disable(n.DEPTH_TEST),n.depthRange(S[0],S[1]),n.depthMask(b),n.depthFunc(A),n.clearDepth(C),n.clearColor(R[0],R[1],R[2],R[3]),n.colorMask(I[0],I[1],I[2],I[3])}}configurePage(e,r,i){let n=this.pages.get(e.id);if(!n){const u=new Dc(this.host);u.setMaxShadowMapSize(this.maxMapSize),u.setSoftSun(!0),n={controller:u,projectionKey:"",lightingKey:"",presentationKey:"",corridor:new Le,planes:[],width:0,height:0,limited:!1,screenBounds:e.screenBounds,receiverBounds:e.bounds.clone(),groundTexelTargetMeters:e.groundTexelTargetMeters,casterBounds:new Le,contentRevision:0,casterRevision:null}}this.pages.delete(e.id),this.pages.set(e.id,n);const s=n.controller.update({...r,maxReceiverBiasMeters:i?i(e.bounds,e.groundTexelTargetMeters):r.maxReceiverBiasMeters,receiverWorldPoints:Hr(e.bounds),receiverAnchorWorldPosition:e.bounds.getCenter(new T),minimumElevationMeters:e.bounds.min.y,maximumElevationMeters:e.bounds.max.y,quality:4,groundTexelFit:!0,groundTexelTargetMeters:e.groundTexelTargetMeters});if(!s)return;const a=n.controller.lights[0];a.visible=!1;const o=s.camera,c=e.receiverObjectId===void 0?"spatial-partition-v1":"native-object-v1",l=JSON.stringify([c,o.viewMatrixElements,o.projectionMatrixElements,o.shadowMapWidth,o.shadowMapHeight,a.shadow.bias,a.shadow.normalBias,e.bounds.min,e.bounds.max]);n.projectionKey=l,n.lightingKey=JSON.stringify([r.directionToSun,r.shadowIntensity,e.bounds.min,e.bounds.max]),n.presentationKey=JSON.stringify([c,r.directionToSun,r.shadowIntensity,e.bounds.min.x,e.bounds.min.z,e.bounds.max.x,e.bounds.max.z]),n.receiverBounds.copy(e.bounds),n.receiverObjectId=e.receiverObjectId,n.groundTexelTargetMeters=e.groundTexelTargetMeters,n.screenBounds=e.screenBounds,n.width=o.shadowMapWidth,n.height=o.shadowMapHeight,n.limited=(o.groundTexelWidthMeters??1/0)>e.groundTexelTargetMeters*1.001||(o.groundTexelHeightMeters??1/0)>e.groundTexelTargetMeters*1.001,n.casterBounds.copy(Su(e.bounds,r.directionToSun,s.casterReachMeters+e.bounds.getSize(new T).length(),Pr,o.guardMeters)),n.corridor.union(n.casterBounds),n.planes=[new ct(new T(1,0,0),-e.bounds.min.x),new ct(new T(-1,0,0),e.bounds.max.x),new ct(new T(0,0,1),-e.bounds.min.z),new ct(new T(0,0,-1),e.bounds.max.z)]}invalidateCasters(e){const r=e instanceof Le?[e]:e,i=[];for(const[n,s]of this.pages)r.some(a=>s.corridor.intersectsBox(a))&&(s.contentRevision+=1,this.cache.invalidate(n),i.push(n));return i}setCasterRevision(e,r){const i=this.pages.get(e);return!i||r===null||i.casterRevision===r?!1:(i.casterRevision=r,i.contentRevision+=1,this.cache.invalidate(e),!0)}renderSample(e,r,i){this.renderSamples(e,this.activePageIds,r,i)}renderPageSample(e,r,i,n,s){return this.disposed||!this.activePageIds.has(r)?!1:this.renderSamples(e,[r],i,n,s)>0}renderPageColor(e,r){const i=this.pages.get(r);if(this.disposed||!i||!this.activePageIds.has(r))return!1;const{renderer:n,scene:s}=this,a=n.clippingPlanes,o=n.autoClear,c=s.background,l=n.shadowMap.autoUpdate,u=n.shadowMap.needsUpdate;n.autoClear=!1,n.shadowMap.autoUpdate=!1,n.shadowMap.needsUpdate=!1,n.clippingPlanes=[...a,...i.planes],s.background=null;try{const d=ga(s,i.receiverObjectId,n,e,"color-only");return d&&(this.colorPasses+=1),d}finally{n.clippingPlanes=a,n.autoClear=o,n.shadowMap.autoUpdate=l,n.shadowMap.needsUpdate=u,s.background=c}}get accumulationPages(){return[...this.activePageIds].map(e=>{const r=this.pages.get(e),i=r.controller.lights[0];return{id:e,receiverObjectId:r.receiverObjectId,contentKey:JSON.stringify([r.lightingKey,r.contentRevision]),casterRevision:r.casterRevision,presentationKey:r.presentationKey,revision:JSON.stringify([r.projectionKey,r.contentRevision,i.color.toArray(),i.intensity,i.shadow.intensity]),screenBounds:r.screenBounds.clone(),receiverBounds:r.receiverBounds.clone(),groundTexelTargetMeters:r.groundTexelTargetMeters}})}areCastersReady(e,r){const i=this.pages.get(e);return!!(i&&r(i.casterBounds))}getPageGeometry(e){const r=this.pages.get(e);return r?{casterBounds:r.casterBounds.clone(),receiverBounds:r.receiverBounds.clone(),width:r.width,height:r.height,projectionKey:r.projectionKey}:null}get supportsOpaqueAccumulation(){let e=!0;return this.scene.traverseVisible(r=>{const i=r;if(!(!i.isMesh||!i.receiveShadow))for(const n of Array.isArray(i.material)?i.material:[i.material])n.visible&&(n.transparent||!n.depthWrite||!n.depthTest)&&(e=!1)}),e}renderSamples(e,r,i,n,s){if(this.disposed)return 0;if(this.renderer.shadowMap.type!==cn)throw new Error("Shadow page cache must be recreated after changing the depth/filter format");if(!Number.isInteger(n)||n<1||!Number.isInteger(i)||i<0||i>=n)throw new RangeError("Shadow sample must lie within its finite-disc sequence");n!==this.activeSamples&&(this.activeSamples=n,this.updateActiveVariants());const{renderer:a,scene:o}=this,c=a.clippingPlanes,l=a.autoClear,u=o.background,d=a.getRenderTarget(),g=d==null?void 0:d.scissor.clone(),p=d==null?void 0:d.scissorTest;let h=0;a.autoClear=!1,o.background=null;try{for(const y of r){const f=this.pages.get(y),S=f.controller.lights[0];n===1?f.controller.restoreSunDiscCenter():f.controller.applySunDiscSample(i,n);const b=JSON.stringify([y,f.projectionKey,n]),A=JSON.stringify([b,i]),C=this.cache.get(A);if(!C&&this.streamedTarget&&(this.streamedTarget.width!==f.width||this.streamedTarget.height!==f.height)&&(Ct(this.streamedTarget),this.streamedTarget=null),S.shadow.map=C??this.streamedTarget,C||(this.streamedTarget=null),S.shadow.needsUpdate=!C,S.visible=!0,a.clippingPlanes=[...c,...f.planes],d){const{x:R,y:I,z:E,w:O}=s??f.screenBounds,B=Math.floor(R*d.width),U=Math.floor(I*d.height);d.scissor.set(B,U,Math.ceil((R+E)*d.width)-B,Math.ceil((I+O)*d.height)-U),d.scissorTest=!0,a.setRenderTarget(d)}try{if(ga(o,f.receiverObjectId,a,e)&&(this.colorPasses+=1,h+=1),!C&&S.shadow.map){this.depthRenders+=1;const I=S.shadow.map;this.cache.admit(A,y,I,b)||(this.streamedTarget=I)}}catch(R){throw!C&&S.shadow.map&&Ct(S.shadow.map),R}finally{S.visible=!1,S.shadow.map=null}}}finally{a.clippingPlanes=c,a.autoClear=l,o.background=u,d&&g&&(d.scissor.copy(g),d.scissorTest=p??!1,a.setRenderTarget(d))}return h}get stats(){const e=[...this.activePageIds].map(r=>this.pages.get(r));return{pages:e.length,cachedSamplePages:this.cache.count,cacheBytes:this.cache.bytes,scratchBytes:this.reservedBytes,hits:this.cache.hits,misses:this.cache.misses,depthRenders:this.depthRenders,colorPasses:this.colorPasses,limitedPages:e.filter(r=>r.limited).length,dimensions:e.map(r=>`${r.width}×${r.height}`)}}clearCache(){this.cache.clear();for(const e of this.pages.values())e.contentRevision+=1}updateActiveVariants(){this.cache.setActiveVariants(new Set([...this.activePageIds].flatMap(e=>[...new Set([1,this.activeSamples])].map(r=>JSON.stringify([e,this.pages.get(e).projectionKey,r])))))}get pageLevels(){return[...this.activePageIds].map(e=>{const r=this.pages.get(e);return{id:e,level:Math.max(0,Math.round(Math.log2(this.maxMapSize/Math.max(r.width,r.height)))),width:r.width,height:r.height}})}dispose(){var e;if(!this.disposed){this.disposed=!0,this.cache.clear(),this.streamedTarget&&Ct(this.streamedTarget),this.streamedTarget=null,(e=this.prewarmSink)==null||e.dispose(),this.prewarmSink=null,this.clearPrewarmView(),this.scratchBytes=0;for(const r of this.pages.values())r.controller.dispose();this.pages.clear(),this.activePageIds.clear()}}}const Pf=async({pages:t,signal:e,prepare:r,render:i,yieldToInput:n})=>{let s=0,a=0,o=0,c=!1;try{for(const l of t){if(e.aborted)break;if(l.cachedSamples>=l.samples){s+=1;continue}if(!l.canPrewarm){c=!0;continue}if(await n(e),e.aborted)break;const u=await r(l,e);try{if(e.aborted)break;if(!u.covered||!u.isCurrent()){a+=1;continue}const d=Math.min(l.samples,l.sampleBudget);d<l.samples&&(c=!0);for(let g=l.cachedSamples;g<d&&(await n(e),!(e.aborted||!u.isCurrent()));g+=1){const p=i(l.id,u.group,e);if(o+=p.rendered,p.complete){s+=1;break}if(p.budgetLimited){c=!0;break}if(p.aborted||!p.rendered)break}}finally{u.dispose()}}}catch(l){if(!e.aborted)throw l}return{offered:t.length,completed:s,skippedCoverage:a,renderedSamples:o,budgetLimited:c,aborted:e.aborted}},Nf=t=>{const e=globalThis.scheduler;return e!=null&&e.postTask?e.postTask(()=>{},{priority:"background",delay:0,signal:t}):Promise.reject(new Error("Background scheduler unavailable"))},Of=({getRequest:t})=>{let e=!1,r=null,i=null,n=!1;const s=()=>{n=!1,i==null||i.abort()},a=()=>{if(!e){if(i){n=!0;return}try{const o=globalThis.scheduler;if(typeof(o==null?void 0:o.postTask)!="function")return;const c=t();if(!c||c.key===r)return;r=c.key;const l=new AbortController;i=l;let u=!1;const d=()=>{if(i!==l||u)return;i=null;const g=n;n=!1,g&&a()};try{o.postTask(async()=>{if(e||l.signal.aborted)return;const g=t();if(!(!g||g.key!==c.key)){u=!0;try{await g.run(l.signal)}finally{u=!1,d()}}},{priority:"background",delay:150,signal:l.signal}).then(d,d)}catch{d()}}catch{}}};return{onSettled:a,cancel:s,dispose(){e=!0,s()}}},Pc=(t,e,r)=>JSON.stringify([t.matrixWorldInverse.elements,t.projectionMatrix.elements,e,r]),Lf=(t,e)=>{if(!Number.isFinite(e)||e<t.length*8)throw new RangeError("Capture budget must fit at least one scalar/depth pixel per page");const r=[...t].sort((n,s)=>n.id<s.id?-1:n.id>s.id?1:0).map(({id:n,plan:s,screenArea:a})=>({id:n,plan:s,width:s.width,height:s.height,weight:2**Math.floor(Math.log2(Math.max(1/65536,Math.min(1,a))))}));let i=r.reduce((n,s)=>n+s.width*s.height,0);for(;i*8>e;){let n;for(const a of r)a.width===1&&a.height===1||(!n||a.width*a.height/a.weight>n.width*n.height/n.weight)&&(n=a);if(!n)break;const s=n.width*n.height;n.width>=n.height&&n.width>1?n.width/=2:n.height/=2,i-=s-n.width*n.height}return new Map(r.map(({id:n,plan:s,width:a,height:o})=>[n,a===s.width&&o===s.height?s:{...s,width:a,height:o,limited:!0,key:Pc(s.camera,a,o)}]))},Ff=(t,e,r)=>{const{groundTexelTargetMeters:i,maximumDimension:n,maximumPixels:s}=r;if(t.isEmpty()||![...t.min.toArray(),...t.max.toArray(),...e.toArray()].every(Number.isFinite)||!(i>0&&Number.isFinite(i))||!(n>=1&&Number.isFinite(n))||!(s>=1&&Number.isFinite(s)))throw new RangeError("Receiver capture requires finite bounds and positive allocation limits");const a=t.getCenter(new T),o=t.getSize(new T).length()*.5,c=Math.max(.001,o*.001),l=new ns;l.quaternion.copy(e).normalize(),l.position.copy(a).add(new T(0,0,o+c+1).applyQuaternion(l.quaternion)),l.updateMatrixWorld(!0);const u=new Le().setFromPoints(Hr(t).map(S=>S.applyMatrix4(l.matrixWorldInverse)));l.left=u.min.x-c,l.right=u.max.x+c,l.bottom=u.min.y-c,l.top=u.max.y+c,l.near=Math.max(.001,-u.max.z-c),l.far=Math.max(l.near+.001,-u.min.z+c),l.updateProjectionMatrix();const d=S=>2**Math.ceil(Math.log2(Math.max(1,S/i))),g=d(l.right-l.left),p=d(l.top-l.bottom),h=2**Math.floor(Math.log2(n));let y=Math.min(g,h),f=Math.min(p,h);for(;y*f>s;)y>=f&&y>1?y/=2:f/=2;return{camera:l,width:y,height:f,limited:y<g||f<p,key:Pc(l,y,f)}},Bf=t=>new Sl().setFromRotationMatrix(new ee().extractRotation(t.matrixWorld)),Ai={namespace:"shadow-corridor-visibility",schema:"visibility-depth-world-basis-v1",maximumPayloadBytes:32*1024**2,maximumRecordBytes:33*1024**2,maximumIdentityCharacters:65536},hi={read:"read",write:"write",writePacked:"write-packed"},je=t=>{if(!t||!Number.isInteger(t.samples)||t.samples<1||t.samples>4096)return null;const e=[t.source,t.dateTime,t.corridor,t.resolution,t.geometryFingerprint];return e.some(r=>typeof r!="string"||r.length===0)||e.reduce((r,i)=>r+i.length,0)>Ai.maximumIdentityCharacters?null:JSON.stringify([Ai.schema,...e,t.samples])},Dn=(t,e)=>Array.isArray(t)&&t.length===e&&t.every(Number.isFinite),Nc=t=>{if(!t||typeof t!="object")return!1;const e=t,r=e.width*e.height;return Number.isSafeInteger(e.width)&&e.width>0&&Number.isSafeInteger(e.height)&&e.height>0&&Number.isSafeInteger(r)&&r*8<=Ai.maximumPayloadBytes&&Dn(e.captureMatrix,16)&&Dn(e.worldBasis,16)&&Dn(e.crop,4)&&e.crop[0]>=0&&e.crop[1]>=0&&e.crop[2]>0&&e.crop[3]>0&&e.crop[0]+e.crop[2]<=1.000001&&e.crop[1]+e.crop[3]<=1.000001},ro=t=>{if(!Nc(t))return!1;const e=t,r=e.width*e.height;return e.visibility instanceof Float32Array&&e.visibility.length===r&&e.depth instanceof Float32Array&&e.depth.length===r},Uf=t=>{if(!Nc(t))return!1;const e=t;return e.rgba instanceof Float32Array&&e.rgba.length===e.width*e.height*4},Tr=64,ts=256*1024**2,Pn=ts,Hf=128*1024**2,io=8,no=32*1024**2,zf=4,br=t=>{var e;t.target?((e=t.target.depthTexture)==null||e.dispose(),t.target.dispose()):(t.visibility.dispose(),t.depth.dispose())},kf=(t,e)=>t.elements.every((r,i)=>Number.isFinite(r)&&Math.abs(r-e.elements[i])<=1e-10*Math.max(1,Math.abs(r)));class Oc{constructor(e){this.renderer=e,this.copyQuad.frustumCulled=!1,this.copyScene.add(this.copyQuad)}captures=new Map;visiblePageIds=new Set;samples=0;replayCount=0;matchingPages=0;persistence;persistenceGeneration=0;disposed=!1;restoreAttempts=new Set;pendingRestores=new Map;restoreRequests=new Map;pendingWrites=new Map;persistenceOffers=new WeakMap;persistenceAttempted=new WeakSet;persistenceTimer=null;readbackBusy=!1;readbackBytes=0;packMaterial=new er({uniforms:{visibility:{value:null},depth:{value:null}},vertexShader:"varying vec2 uvCopy; void main() { uvCopy = position.xy * 0.5 + 0.5; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:"uniform sampler2D visibility; uniform sampler2D depth; varying vec2 uvCopy; void main() { gl_FragColor = vec4(texture2D(visibility, uvCopy).r, texture2D(depth, uvCopy).r, 0.0, 1.0); }",depthTest:!1,depthWrite:!1,blending:pi,toneMapped:!1});materials=new Map;unsupportedMaterials=new WeakSet;captureSupported=!0;contentRevision=0;get revision(){return this.contentRevision}get supportsCapture(){return this.captureSupported}copyScene=new Nr;copyCamera=new Ci;copyMaterial=new er({uniforms:{source:{value:null},crop:{value:new ie}},vertexShader:"varying vec2 uvCopy; void main() { uvCopy = position.xy * 0.5 + 0.5; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:"uniform sampler2D source; uniform vec4 crop; varying vec2 uvCopy; void main() { gl_FragColor = vec4(texture2D(source, crop.xy + uvCopy * crop.zw).r, 0.0, 0.0, 1.0); }",depthTest:!1,depthWrite:!1,blending:pi,toneMapped:!1});copyQuad=new Br(new rs(2,2),this.copyMaterial);downsampleMaterial=new er({uniforms:{source:{value:null},depth:{value:null},texel:{value:new It}},vertexShader:"varying vec2 uvCopy; void main() { uvCopy = position.xy * 0.5 + 0.5; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:`uniform sampler2D source; uniform sampler2D depth;
      uniform vec2 texel; varying vec2 uvCopy;
      void main() {
        vec2 d = texel * 0.25;
        float visibility = (texture2D(source, uvCopy + d).r
          + texture2D(source, uvCopy - d).r
          + texture2D(source, uvCopy + vec2(d.x, -d.y)).r
          + texture2D(source, uvCopy + vec2(-d.x, d.y)).r) * 0.25;
        gl_FragColor = vec4(visibility, 0.0, 0.0, 1.0);
        gl_FragDepth = texture2D(depth, uvCopy).r;
      }`,depthTest:!0,depthFunc:Po,depthWrite:!0,blending:pi,toneMapped:!1});uniforms={carmaCaptureVisibility:{value:!1},carmaRetainedEnabled:{value:!1},carmaRetainedColor:{value:null},carmaRetainedDepth:{value:null},carmaRetainedMatrix:{value:new ee},carmaRetainedCrop:{value:new ie(0,0,1,1)},carmaRetainedCount:{value:0},carmaRetainedBounds:{value:Array.from({length:Tr},()=>new ie)}};get memoryBytes(){return[...this.captures.values()].reduce((e,r)=>e+r.bytes,this.readbackBytes)}getCapturedSize(e){const r=this.captures.get(e);return r?{width:r.width,height:r.height,samples:r.samples}:null}get stats(){return{pages:this.captures.size,samples:this.samples,matchingPages:this.matchingPages,replays:this.replayCount,bytes:this.memoryBytes}}beginFrame(e=[]){this.matchingPages=0,this.visiblePageIds=new Set(e.map(r=>r.id)),this.schedulePersistence()}has(e,r){var n;const i=this.captures.get(e.id);if(!this.canReplay(e)||(i==null?void 0:i.casterRevision)!==e.casterRevision)return!1;if(i&&i.samples>1&&i.samples>=r&&e.captureSize&&e.presentationKey&&i.crop.x===0&&i.crop.y===0&&i.crop.z===1&&i.crop.w===1)return i.width>=e.captureSize.width&&i.height>=e.captureSize.height;if(i!=null&&i.restored){const s=this.restoreRequests.get(e.id),a=(n=this.persistence)==null?void 0:n.identity(e,r);if(e.ready===!1||!(s!=null&&s.expected)||!a||je(a)!==i.persistentKey||!kf(i.matrix,s.expected))return!1;const o=e.screenBounds,c=i.crop;if(c.x>o.x+1e-6||c.y>o.y+1e-6||c.x+c.z<o.x+o.z-1e-6||c.y+c.w<o.y+o.w-1e-6)return!1}return(i==null?void 0:i.revision)===(e.contentKey??e.revision)&&i.samples===r}hasAtLeast(e,r){const i=this.captures.get(e.id);return!!(i&&i.samples>=r&&this.has(e,i.samples))}downsample(e,r,i){var f;if(!Number.isInteger(r)||!Number.isInteger(i)||r<1||i<1)return!1;const n=this.captures.get(e.id);if(!n||!this.canReplay(e))return!1;const s=Math.max(r,Math.ceil(n.width/2)),a=Math.max(i,Math.ceil(n.height/2));if(s>n.width||a>n.height||s*a>=n.width*n.height)return!1;const o=new Ye(s,a,{type:xt,format:Zt,minFilter:De,magFilter:De,depthTexture:new ir(s,a,Bt),samples:0}),c=this.renderer,l=c.getRenderTarget(),u=c.getActiveCubeFace(),d=c.getActiveMipmapLevel(),g=c.getViewport(new ie),p=c.getScissor(new ie),h=c.getScissorTest(),y=c.autoClear;try{c.initRenderTarget(o),this.downsampleMaterial.uniforms.source.value=n.visibility,this.downsampleMaterial.uniforms.depth.value=n.depth,this.downsampleMaterial.uniforms.texel.value.set(1/s,1/a),this.copyQuad.material=this.downsampleMaterial,c.autoClear=!1,c.setRenderTarget(o),c.setViewport(new ie(0,0,s,a)),c.setScissorTest(!1),c.render(this.copyScene,this.copyCamera)}catch(S){throw(f=o.depthTexture)==null||f.dispose(),o.dispose(),S}finally{this.copyQuad.material=this.copyMaterial,c.setRenderTarget(l,u,d),c.setViewport(g),c.setScissor(p),c.setScissorTest(h),c.autoClear=y}return this.captures.set(e.id,{...n,target:o,visibility:o.texture,depth:o.depthTexture,width:s,height:a,bytes:s*a*8}),this.pendingWrites.delete(e.id),br(n),this.contentRevision+=1,!0}isRestorePending(e,r){var s;const i=this.pendingRestores.get(e.id);if(!i||i.samples!==r)return!1;const n=(s=this.persistence)==null?void 0:s.identity(e,r);return!!(n&&je(n)===i.key)}setPersistence(e){this.persistence!==e&&(this.cancelPendingPersistence(),this.persistence=e)}cancelPendingPersistence(){var e;(e=this.persistence)==null||e.cache.cancelPending(),this.persistenceGeneration+=1,this.restoreAttempts.clear(),this.pendingRestores.clear(),this.restoreRequests.clear(),this.pendingWrites.clear(),this.persistenceOffers=new WeakMap,this.persistenceAttempted=new WeakSet,this.persistenceTimer!==null&&clearTimeout(this.persistenceTimer),this.persistenceTimer=null}beginSolarTransition(){this.cancelPendingPersistence()}canPresent(e){return this.canReplay(e)}prepareRestore(e,r,i){if(this.disposed)return;if(this.restoreRequests.set(e.id,{page:e,samples:r,expected:i==null?void 0:i.clone()}),this.restoreRequests.size>Tr*2){for(const l of this.restoreRequests.keys())if(l!==e.id&&!this.visiblePageIds.has(l)){this.restoreRequests.delete(l);break}}const n=this.persistence;if(!(n!=null&&n.cache.enabled)||n.cache.busy||e.ready===!1||this.hasAtLeast(e,r))return;const s=n.identity(e,r),a=s&&je(s);if(!s||!a||this.restoreAttempts.has(a))return;this.restoreAttempts.add(a),this.restoreAttempts.size>Tr*4&&this.restoreAttempts.delete(this.restoreAttempts.values().next().value);const o=this.persistenceGeneration,c=this.captures.get(e.id);this.pendingRestores.set(e.id,{key:a,samples:r}),n.cache.read(s).then(l=>{const u=this.restoreRequests.get(e.id),d=u&&n.identity(u.page,r);if(!l||this.disposed||this.persistenceGeneration!==o||this.persistence!==n||!u||u.page.ready===!1||!d||je(d)!==a||this.captures.get(e.id)!==c)return;const g=new ee().fromArray(l.worldBasis),p=n.worldBasis();if(!g.elements.every(Number.isFinite)||g.determinant()===0||!p.elements.every(Number.isFinite)||p.determinant()===0)return;const h=new ee().fromArray(l.captureMatrix).multiply(g.invert()).multiply(p),y=[...new Set([l.visibility.buffer,l.depth.buffer])].reduce((A,C)=>A+C.byteLength,0),f=l.width*l.height*io+y;if(!this.admit(e.id,f))return;const S=new Hn(l.visibility,l.width,l.height,Zt,xt),b=new Hn(l.depth,l.width,l.height,Zt,xt);for(const A of[S,b])A.minFilter=De,A.magFilter=De,A.generateMipmaps=!1,A.needsUpdate=!0;c&&br(c),this.captures.delete(e.id),this.captures.set(e.id,{target:null,visibility:S,depth:b,width:l.width,height:l.height,bytes:f,restored:!0,persistentKey:a,persistentIdentity:l.identity,revision:u.page.contentKey??u.page.revision,casterRevision:u.page.casterRevision,presentationKey:u.page.presentationKey??u.page.contentKey??u.page.revision,samples:l.identity.samples,matrix:h,crop:new ie().fromArray(l.crop)}),this.samples=l.identity.samples,this.contentRevision+=1}).catch(()=>{}).finally(()=>{var l,u;!this.disposed&&o===this.persistenceGeneration&&(((l=this.pendingRestores.get(e.id))==null?void 0:l.key)===a&&this.pendingRestores.delete(e.id),(u=n.requestRepaint)==null||u.call(n),this.schedulePersistence())})}admit(e,r,i=!1){var a;const n=i?Math.min(((a=this.captures.get(e))==null?void 0:a.bytes)??0,Hf):0,s=Pn+n;for(const[o,c]of this.captures){if(r+this.memoryBytes<=s)break;o===e||this.visiblePageIds.has(o)||(br(c),this.captures.delete(o),this.contentRevision+=1,this.pendingWrites.delete(o))}return r+this.memoryBytes<=s}publish(e,r,i,n,s){var B;if(!this.captureSupported)return!1;const a=n.screenBounds,o=Math.max(0,Math.floor(a.x*e.width)),c=Math.max(0,Math.floor(a.y*e.height)),l=Math.min(e.width,Math.ceil((a.x+a.z)*e.width)),u=Math.min(e.height,Math.ceil((a.y+a.w)*e.height)),d=l-o,g=u-c,p=d*g*io;if(d<=0||g<=0||p>Pn||!r.depthTexture||!this.admit(n.id,p,!0))return!1;const h=this.renderer,y=h.getRenderTarget(),f=h.getActiveCubeFace(),S=h.getActiveMipmapLevel(),b=h.getViewport(new ie),A=h.getScissor(new ie),C=h.getScissorTest(),R=h.autoClear,I=new Ye(d,g,{type:xt,format:Zt,minFilter:De,magFilter:De,depthTexture:new ir(d,g,Bt),samples:0});try{h.initRenderTarget(I);const U=new wl(new It(o,c),new It(l,u));this.copyMaterial.uniforms.source.value=e.texture,this.copyMaterial.uniforms.crop.value.set(o/e.width,c/e.height,d/e.width,g/e.height),h.autoClear=!1,h.setRenderTarget(I),h.setViewport(new ie(0,0,d,g)),h.setScissorTest(!1),h.render(this.copyScene,this.copyCamera),h.copyTextureToTexture(r.depthTexture,I.depthTexture,U)}catch(U){throw(B=I.depthTexture)==null||B.dispose(),I.dispose(),U}finally{h.setRenderTarget(y,f,S),h.setViewport(b),h.setScissor(A),h.setScissorTest(C),h.autoClear=R}const E=this.captures.get(n.id);E&&br(E),this.samples=s,this.captures.delete(n.id);const O={target:I,visibility:I.texture,depth:I.depthTexture,width:d,height:g,bytes:p,restored:!1,revision:n.contentKey??n.revision,casterRevision:n.casterRevision,samples:s,presentationKey:n.presentationKey??n.contentKey??n.revision,matrix:new ee().multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),crop:new ie(o/e.width,c/e.height,d/e.width,g/e.height)};return this.captures.set(n.id,O),this.contentRevision+=1,this.queuePersistence(n,O),!0}queuePersistence(e,r){const i=this.persistence;if(!(i!=null&&i.cache.enabled)||e.ready===!1||this.disposed)return;const n=i.identity(e,r.samples),s=n&&je(n),a=i.worldBasis();!n||n.samples!==r.samples||!s||!a.elements.every(Number.isFinite)||a.determinant()===0||r.width*r.height*16>no||(this.pendingWrites.delete(e.id),this.persistenceOffers.set(r,{page:e,capture:r,identity:n,key:s,worldBasis:[...a.elements]}),this.schedulePersistence())}schedulePersistence(){var e;if(!(this.disposed||this.persistenceTimer!==null||this.readbackBusy||!((e=this.persistence)!=null&&e.cache.enabled)||this.persistence.cache.busy)){for(const[r,i]of this.pendingWrites)this.captures.get(r)!==i.capture&&this.pendingWrites.delete(r);for(const r of[!0,!1])for(const[i,n]of this.captures){if(this.pendingWrites.size>=zf)break;const s=this.persistenceOffers.get(n);this.visiblePageIds.has(i)===r&&s&&!this.persistenceAttempted.has(n)&&!this.pendingWrites.has(i)&&this.pendingWrites.set(i,s)}this.pendingWrites.size!==0&&(this.persistenceTimer=setTimeout(()=>{this.persistenceTimer=null,this.persistNextCapture()},0))}}persistNextCapture(){var h,y,f;const e=this.persistence;if(this.disposed||this.readbackBusy||!(e!=null&&e.cache.enabled)||e.cache.busy||typeof this.renderer.readRenderTargetPixelsAsync!="function")return;const r=[...this.pendingWrites.entries()].find(([S,b])=>this.captures.get(S)===b.capture);if(!r){this.pendingWrites.clear();return}const[i,n]=r,s=((h=this.restoreRequests.get(i))==null?void 0:h.page)??n.page,a=e.identity(s,n.capture.samples);if(s.ready===!1||!a||je(a)!==n.key){this.pendingWrites.delete(i),this.persistenceAttempted.add(n.capture),this.schedulePersistence();return}const{capture:o}=n,c=o.width*o.height*16;if(c>no||this.memoryBytes+c*2>Pn){this.pendingWrites.delete(i),this.persistenceAttempted.add(o),this.schedulePersistence();return}const l=this.persistenceGeneration,u={target:null,pixels:null,reading:null},d=()=>{const S=this.renderer,b=S.getRenderTarget(),A=S.getActiveCubeFace(),C=S.getActiveMipmapLevel(),R=S.getViewport(new ie),I=S.getScissor(new ie),E=S.getScissorTest(),O=S.autoClear,B=this.copyQuad.material;try{u.target=new Ye(o.width,o.height,{format:Lr,type:xt,depthBuffer:!1,minFilter:De,magFilter:De}),S.initRenderTarget(u.target),u.pixels=new Float32Array(o.width*o.height*4),this.packMaterial.uniforms.visibility.value=o.visibility,this.packMaterial.uniforms.depth.value=o.depth,this.copyQuad.material=this.packMaterial,S.autoClear=!1,S.setRenderTarget(u.target),S.setViewport(new ie(0,0,o.width,o.height)),S.setScissorTest(!1),S.render(this.copyScene,this.copyCamera),u.reading=S.readRenderTargetPixelsAsync(u.target,0,0,o.width,o.height,u.pixels)}finally{this.copyQuad.material=B,S.setRenderTarget(b,A,C),S.setViewport(R),S.setScissor(I),S.setScissorTest(E),S.autoClear=O}};try{if(e.runIdleRender){if(!e.runIdleRender(d)&&!u.target)return}else d()}catch{(y=u.target)==null||y.dispose(),this.pendingWrites.delete(i),this.persistenceAttempted.add(o),this.schedulePersistence();return}if(!u.reading||!u.target||!u.pixels){(f=u.target)==null||f.dispose();return}const g=u.target,p=u.pixels;this.pendingWrites.delete(i),this.persistenceAttempted.add(o),this.readbackBusy=!0,this.readbackBytes=c*2,u.reading.then(async()=>{var A;const S=((A=this.restoreRequests.get(i))==null?void 0:A.page)??n.page,b=e.identity(S,o.samples);this.disposed||l!==this.persistenceGeneration||this.persistence!==e||S.ready===!1||!b||je(b)!==n.key||await e.cache.writePacked(n.identity,{width:o.width,height:o.height,rgba:p,captureMatrix:[...o.matrix.elements],crop:o.crop.toArray(),worldBasis:n.worldBasis})}).catch(()=>{}).finally(()=>{var S;g.dispose(),this.readbackBusy=!1,this.readbackBytes=0,this.disposed||((S=e.requestRepaint)==null||S.call(e),this.schedulePersistence())})}canReplay(e){var i;const r=this.captures.get(e.id);if(!r||r.presentationKey!==(e.presentationKey??e.contentKey??e.revision))return!1;if(r.restored){const n=(i=this.persistence)==null?void 0:i.identity(e,r.samples),s=r.persistentIdentity;if(e.captureSize&&s)return!!(n&&n.source===s.source&&n.dateTime===s.dateTime&&n.corridor===s.corridor&&n.geometryFingerprint===s.geometryFingerprint&&n.samples===s.samples);if(!n||je(n)!==r.persistentKey)return!1}return!0}activate(e){const r=this.captures.get(e.id);this.captures.delete(e.id),this.captures.set(e.id,r),this.uniforms.carmaRetainedMatrix.value.copy(r.matrix),this.uniforms.carmaRetainedCrop.value.copy(r.crop),this.uniforms.carmaRetainedColor.value=r.visibility,this.uniforms.carmaRetainedDepth.value=r.depth,this.matchingPages+=1,this.replayCount+=1,this.uniforms.carmaRetainedCount.value=1;const i=e.receiverBounds;this.uniforms.carmaRetainedBounds.value[0].set(i.min.x,i.min.z,i.max.x,i.max.z),this.uniforms.carmaRetainedEnabled.value=!0}renderNative(e,r,i){if(r.length===0)return i(),new Set;this.configureScene(e);const n=new Map(r.filter(u=>u.receiverObjectId!==void 0&&this.canPresent(u)).map(u=>[u.receiverObjectId,u])),s=[],a=new Map;e.traverseVisible(u=>{const d=u;if(!d.isMesh)return;let g;for(let p=d;p&&(g=n.get(p.id),!g);p=p.parent);s.push({mesh:d,page:g});for(const p of Array.isArray(d.material)?d.material:[d.material]){let h=a.get(p);h||a.set(p,h=new Set),h.add(g==null?void 0:g.id)}});const o=new Set;for(const u of a.values())if(!(u.size<2))for(const d of u)d!==void 0&&o.add(d);const c=new Set,l=[];for(const{mesh:u,page:d}of s){const g=u.onBeforeRender,p=d!==void 0&&!o.has(d.id);u.onBeforeRender=(...h)=>{g.call(u,...h),this.uniforms.carmaRetainedEnabled.value=!1,p&&this.activate(d)},p&&c.add(d.id),l.push(()=>{u.onBeforeRender=g})}this.uniforms.carmaRetainedEnabled.value=!1;try{return i(),c}finally{this.uniforms.carmaRetainedEnabled.value=!1;for(const u of l)u()}}render(e,r,i,n){if(!this.canPresent(r))return n();this.configureScene(e),this.activate(r);try{return n()}finally{this.uniforms.carmaRetainedEnabled.value=!1}}capture(e,r){this.captureSupported=!0,this.configureScene(e),this.uniforms.carmaCaptureVisibility.value=!0;try{return r()}finally{this.uniforms.carmaCaptureVisibility.value=!1}}configureScene(e){e.traverseVisible(r=>{const i=r;if(!(!i.isMesh||!i.receiveShadow)){if(i.isInstancedMesh||i.isSkinnedMesh){this.captureSupported=!1;return}for(const n of Array.isArray(i.material)?i.material:[i.material]){if(this.unsupportedMaterials.has(n)&&(this.captureSupported=!1),!(n.isMeshStandardMaterial||n.isMeshLambertMaterial||n.isMeshPhongMaterial)||n.transparent){this.captureSupported=!1;continue}this.materials.has(n)||this.configure(n)}}})}configure(e){const r=e.onBeforeCompile,i=e.customProgramCacheKey,n=this.uniforms,s=(l,u)=>{r.call(e,l,u);const d=/getShadow\( directionalShadowMap\[ i \][^;]+?\)/;if(!l.vertexShader.includes("#include <common>")||!l.vertexShader.includes("#include <project_vertex>")||!l.fragmentShader.includes("#include <common>")||!l.fragmentShader.includes("#include <lights_fragment_begin>")||!l.fragmentShader.includes("#include <dithering_fragment>")||!d.test(zn.lights_fragment_begin)){this.unsupportedMaterials.add(e),this.captureSupported=!1;return}this.unsupportedMaterials.delete(e),Object.assign(l.uniforms,n),l.vertexShader=l.vertexShader.replace("#include <common>",`#include <common>
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
`);const g=zn.lights_fragment_begin.replace(d,p=>`(carmaCapturedCoverage = ${p}, carmaRetainedCoverage(carmaCapturedCoverage))`);l.fragmentShader=l.fragmentShader.replace("#include <lights_fragment_begin>",`float carmaCapturedCoverage = 1.0;
${g}`).replace("#include <dithering_fragment>",`#include <dithering_fragment>
if (carmaCaptureVisibility) gl_FragColor.rgb = vec3(carmaCapturedCoverage);`)},a=()=>`${i.call(e)}|retained-corridor-visibility-v4`;e.onBeforeCompile=s,e.customProgramCacheKey=a,e.needsUpdate=!0;const o=()=>{e.onBeforeCompile===s&&(e.onBeforeCompile=r),e.customProgramCacheKey===a&&(e.customProgramCacheKey=i),e.removeEventListener("dispose",c),e.needsUpdate=!0},c=()=>{o(),this.materials.delete(e)};e.addEventListener("dispose",c),this.materials.set(e,o)}dispose(){this.disposed=!0,this.setPersistence(void 0);for(const e of this.captures.values())br(e);this.captures.clear(),this.uniforms.carmaRetainedEnabled.value=!1,this.uniforms.carmaRetainedColor.value=null,this.uniforms.carmaRetainedDepth.value=null,this.copyQuad.geometry.dispose(),this.copyMaterial.dispose(),this.downsampleMaterial.dispose(),this.packMaterial.dispose();for(const e of this.materials.values())e();this.materials.clear()}}const Ft=64,vi=512*1024**2,Je={inactive:"inactive",dimensions:"dimensions",budget:"budget",msaa:"msaa",format:"format",receivers:"receivers",pages:"pages",renderer:"renderer",disposed:"disposed"},so=`
  out vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`,Vf=`
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
`,Gf=`
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
`;class Wf{constructor(e,r){this.renderer=e,this.ownsPresentation=r===void 0,this.presentation=r??new Oc(e),this.quad.frustumCulled=!1,this.fullscreenScene.add(this.quad)}fullscreenScene=new Nr;fullscreenCamera=new ns(-1,1,1,-1,0,1);blendMaterial=new er({glslVersion:Or,vertexShader:so,fragmentShader:Vf,uniforms:{tPrevious:{value:null},tReference:{value:null},tReferenceDepth:{value:null},tSample:{value:null},tSampleDepth:{value:null},uInverseViewProjection:{value:new ee},uBounds:{value:Array.from({length:Ft},()=>new ie)},uBoundsCount:{value:0},uRefresh:{value:!1},uResetAll:{value:!1},uWeights:{value:new Float32Array(Ft).fill(1)}},depthTest:!1,depthWrite:!1,blending:pi});compositeMaterial=new er({glslVersion:Or,vertexShader:so,fragmentShader:Gf,uniforms:{tColor:{value:null},tDepth:{value:null},uOutputDither:{value:!1}},dithering:!0,transparent:!0,blending:_o,depthTest:!0,depthFunc:Po,depthWrite:!0});quad=new Br(new rs(2,2),this.blendMaterial);referenceTarget=null;sampleTarget=null;readTarget=null;writeTarget=null;pages=new Map;stateKey="";targetKey="";cursor=0;totalSamples=1;broken=!1;disposed=!1;allocatedBytes=0;lastFallbackReason=null;presentation;publishedStateKeys=new Map;publicationRetryMs=250;ownsPresentation;get pageProgress(){return[...this.pages].map(([e,r])=>({id:e,samples:r.samples,totalSamples:this.totalSamples,ready:r.page.ready!==!1,published:this.publishedStateKeys.get(e)===JSON.stringify([this.stateKey,r.page.revision])}))}get memoryBytes(){return this.allocatedBytes+this.presentation.memoryBytes}get fallbackReason(){return this.lastFallbackReason}render(e,r,i){var O,B;if(this.disposed)return this.fallback(Je.disposed);if(this.broken)return this.fallback(Je.renderer);if(!i.active)return this.stateKey="",this.lastFallbackReason=Je.inactive,null;const{width:n,height:s,samples:a}=i,o=os((O=i.options)==null?void 0:O.format),c=((B=i.options)==null?void 0:B.msaaSamples)??No.msaaSamples,l=n*s,u=i.visibilityOnly?Zt:Lr,d=i.visibilityOnly?1:4,g=l*(2*(o.bytesPerPixel*d/4+4)+2*o.accumulationBytesPerPixel*d/4);if(!Number.isInteger(n)||n<1||!Number.isInteger(s)||s<1||!Number.isInteger(a)||a<1||n>this.renderer.capabilities.maxTextureSize||s>this.renderer.capabilities.maxTextureSize)return this.fallback(Je.dimensions);if(i.maxRenderTargetPixels!==void 0&&(!(i.maxRenderTargetPixels>0)||l>i.maxRenderTargetPixels)||g+this.presentation.memoryBytes>vi)return this.fallback(Je.budget);if(o.format!==Lr)return this.fallback(Je.format);if(c!==0)return this.fallback(Je.msaa);if(!r.supportsOpaqueAccumulation)return this.fallback(Je.receivers);const p=r.accumulationPages.map(U=>{var G;return{...U,ready:U.ready!==!1&&(((G=i.isPageReady)==null?void 0:G.call(i,U.id))??!0)}});if(p.length===0||p.length>Ft)return this.fallback(Je.pages);this.lastFallbackReason=null;const h=this.renderer,y=h.getRenderTarget(),f=h.getActiveCubeFace(),S=h.getActiveMipmapLevel(),b=h.getClearColor(new Ge),A=h.getClearAlpha(),C=h.autoClear,R=h.getViewport(new ie),I=h.getScissor(new ie),E=h.getScissorTest();try{h.autoClear=!1;const U=JSON.stringify([n,s,o.type,o.accumulationType,u]);if(this.targetKey!==U){this.releaseTargets();const P={type:o.type,format:u,minFilter:De,magFilter:De,depthBuffer:!0,samples:0};this.referenceTarget=new Ye(n,s,{...P,depthTexture:new ir(n,s,Bt)}),this.sampleTarget=new Ye(n,s,{...P,depthTexture:new ir(n,s,Bt)});const J={type:o.accumulationType,format:u,minFilter:De,magFilter:De,depthBuffer:!1};this.readTarget=new Ye(n,s,J),this.writeTarget=new Ye(n,s,J),this.targetKey=U,this.allocatedBytes=g}const G=JSON.stringify([i.viewKey,i.visibilityOnly?0:i.styleEpoch,a,U]),H=this.stateKey!==G,X=new Set(p.map(({id:P})=>P)),fe=[...this.pages.values()].filter(({page:P})=>!X.has(P.id)).map(({page:P})=>P),Z=[...H?p:p.filter(P=>{var Pe;const J=(Pe=this.pages.get(P.id))==null?void 0:Pe.page;return(J==null?void 0:J.revision)!==P.revision||(J==null?void 0:J.ready)===!1&&P.ready}),...fe].flatMap(P=>[P.screenBounds,...this.pages.has(P.id)?[this.pages.get(P.id).page.screenBounds]:[]]),F=H?p:p.filter(P=>Z.some(J=>this.overlaps(P.screenBounds,J)));this.blendMaterial.uniforms.uInverseViewProjection.value.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse).invert(),H&&(this.pages.clear(),this.cursor=0);for(const P of fe)this.pages.delete(P.id);for(const P of F)this.publishedStateKeys.delete(P.id);F.length>0&&(this.publicationRetryMs=250),this.cursor%=Math.max(1,p.length);for(const P of p){const J=this.pages.get(P.id);J?J.page=P:this.pages.set(P.id,{page:P,samples:0})}if(this.totalSamples=a,F.length>0||fe.length>0){this.clearTarget(this.referenceTarget),r.renderSample(e,0,a),this.blend(F,!0,H,F.map(()=>1));for(const P of F)this.pages.get(P.id).samples=1}else{const P=[...this.pages.values()],J=performance.now(),Pe=i.maxPagesPerFrame??4,Me=Number.isFinite(Pe)?Math.min(Ft,Math.max(1,Math.floor(Pe))):4,dt=i.maxFrameCpuMilliseconds??4,ce=Number.isFinite(dt)?Math.max(0,dt):4;let ht=0;do{const Ce=[],Ue=this.cursor;for(let ve=0;ve<P.length;ve+=1){const Mt=(Ue+ve)%P.length,Re=P[Mt];if(!(Re.samples>=a||Re.page.ready===!1)){if(Ce.length===0&&this.clearTarget(this.sampleTarget),!r.renderPageSample(e,Re.page.id,Re.samples,a))return this.fallback(Je.pages);if(Ce.push(Re),ht+=1,this.cursor=(Mt+1)%P.length,ht>=Me||performance.now()-J>=ce)break}}if(Ce.length===0)break;this.blend(Ce.map(({page:ve})=>ve),!1,!1,Ce.map(ve=>1/(ve.samples+1)));for(const ve of Ce)ve.samples+=1}while(ht<Me&&performance.now()-J<ce)}this.stateKey=G,h.setRenderTarget(y,f,S),h.setViewport(R),h.setScissor(I),h.setScissorTest(E),this.quad.material=this.compositeMaterial;const te=[...this.pages.values()].every(P=>P.samples>=a);this.compositeMaterial.uniforms.tColor.value=te?this.readTarget.texture:this.referenceTarget.texture,this.compositeMaterial.uniforms.tDepth.value=this.referenceTarget.depthTexture,this.compositeMaterial.uniforms.uOutputDither.value=y===null,i.visibilityOnly||h.render(this.fullscreenScene,this.fullscreenCamera);let $=!1;for(const{page:P,samples:J}of this.pages.values()){if(P.ready===!1||J<a)continue;const Pe=JSON.stringify([G,P.revision]);if(this.publishedStateKeys.get(P.id)!==Pe)try{this.presentation.publish(this.readTarget,this.referenceTarget,e,P,a)?this.publishedStateKeys.set(P.id,Pe):$=!0}catch(Me){$=!0,console.error("[shadow-simulation] retaining previous corridor capture after copy failure",Me)}}for(const P of this.publishedStateKeys.keys())X.has(P)||this.publishedStateKeys.delete(P);const de=[...this.pages.values()].reduce((P,{page:J,samples:Pe})=>{const Me=J.ready!==!1&&this.publishedStateKeys.get(J.id)===JSON.stringify([G,J.revision]);return P+(Me?a:Math.min(Pe,a-1))},0),be=$?this.publicationRetryMs:void 0;return this.publicationRetryMs=$?Math.min(4e3,this.publicationRetryMs*2):250,{progress:de/(this.pages.size*a),settled:de===this.pages.size*a,...be===void 0?{}:{retryAfterMs:be},needsRepaint:[...this.pages.values()].some(P=>P.samples<a&&P.page.ready!==!1)}}catch(U){return this.broken=!0,console.error("[shadow-simulation] corridor accumulation failed; using direct rendering",U),this.fallback(Je.renderer)}finally{h.autoClear=C,h.setClearColor(b,A),h.setRenderTarget(y,f,S),h.setViewport(R),h.setScissor(I),h.setScissorTest(E)}}overlaps(e,r){return e.x<=r.x+r.z&&e.x+e.z>=r.x&&e.y<=r.y+r.w&&e.y+e.w>=r.y}clearTarget(e){this.renderer.setRenderTarget(e),this.renderer.setClearColor(0,0),this.renderer.clear(!0,!0,!1)}blend(e,r,i,n){const s=this.blendMaterial.uniforms;s.tPrevious.value=this.readTarget.texture,s.tReference.value=this.referenceTarget.texture,s.tReferenceDepth.value=this.referenceTarget.depthTexture,s.tSample.value=this.sampleTarget.texture,s.tSampleDepth.value=this.sampleTarget.depthTexture,s.uBoundsCount.value=e.length,e.forEach(({receiverBounds:o},c)=>s.uBounds.value[c].set(o.min.x,o.min.z,o.max.x,o.max.z)),s.uRefresh.value=r,s.uResetAll.value=i,s.uWeights.value.set(n),this.quad.material=this.blendMaterial,this.renderer.setRenderTarget(this.writeTarget),this.renderer.render(this.fullscreenScene,this.fullscreenCamera);const a=this.readTarget;this.readTarget=this.writeTarget,this.writeTarget=a}releaseTargets(){var e;for(const r of[this.referenceTarget,this.sampleTarget,this.readTarget,this.writeTarget])(e=r==null?void 0:r.depthTexture)==null||e.dispose(),r==null||r.dispose();this.referenceTarget=null,this.sampleTarget=null,this.readTarget=null,this.writeTarget=null,this.stateKey="",this.targetKey="",this.allocatedBytes=0,this.pages.clear()}releaseScratch(e=!1){e?(this.stateKey="",this.pages.clear()):this.releaseTargets(),this.publishedStateKeys.clear(),this.cursor=0}fallback(e){return this.lastFallbackReason=e,this.releaseTargets(),null}dispose(){this.disposed||(this.disposed=!0,this.releaseTargets(),this.ownsPresentation&&this.presentation.dispose(),this.quad.geometry.dispose(),this.blendMaterial.dispose(),this.compositeMaterial.dispose())}}const ao=2e4;let jf=0;var wo;class Yf{enabled=_l((wo=globalThis.location)==null?void 0:wo.hostname);reportId=++jf;nextCorridorId=0;labels=new Map;pending=new Map;timer;context;observe(e,r){var s;if(!this.enabled)return;const i=performance.now();for(const{id:a}of e)this.labels.has(a)||this.labels.set(a,`C${this.reportId}.${++this.nextCorridorId}`);this.context={total:e.length,ready:e.filter(a=>a.ready).length,completed:e.filter(a=>a.published).length,samples:e.reduce((a,o)=>a+o.samples,0),activeId:r.activeId?this.labels.get(r.activeId):null,memoryBytes:r.memoryBytes,fallbackReason:r.fallbackReason,publicationRetries:(s=r.publicationRetries)==null?void 0:s.map(([a,o])=>({id:this.labels.get(a),attempts:o.attempts,retryInMs:Math.max(0,Math.round(o.retryAt-i))}))};const n=new Set(e.map(({id:a})=>a));for(const a of this.pending.keys())n.has(a)||this.pending.delete(a);for(const a of this.labels.keys())n.has(a)||this.labels.delete(a);for(const a of e){if(a.published){this.pending.delete(a.id);continue}const o=this.pending.get(a.id),c=!o||a.samples>o.progress.samples;this.pending.set(a.id,{progress:a,advancedAt:c?i:o.advancedAt,reported:c?!1:o.reported})}this.schedule()}pause(){clearTimeout(this.timer),this.timer=void 0,this.pending.clear()}schedule(){if(this.timer!==void 0)return;let e=1/0;for(const r of this.pending.values())r.reported||(e=Math.min(e,r.advancedAt+ao));Number.isFinite(e)&&(this.timer=setTimeout(()=>{var n;this.timer=void 0;const r=performance.now(),i=[];for(const s of this.pending.values())s.reported||r-s.advancedAt<ao||(s.reported=!0,i.push({...s.progress,id:this.labels.get(s.progress.id),file:(n=s.progress.id.match(/\/([^/"\\]+\.b3dm)/))==null?void 0:n[1],stalledMilliseconds:Math.round(r-s.advancedAt),waitingForReadiness:!s.progress.ready}));i.length>0&&console.warn("[shadow-simulation] corridors without progress for 20 seconds",JSON.stringify({corridors:i,scheduler:this.context})),this.schedule()},Math.max(0,e-performance.now())))}}class qf{constructor(e){this.renderer=e,this.presentation=new Oc(e),this.scratch=new Wf(e,this.presentation)}presentation;scratch;captures=[];activeId=null;activeCapture=null;cursor=0;samples=1;disposed=!1;watchdog=new Yf;publicationRetries=new Map;restoreOpportunities=new Map;allocationKey="";allocations=new Map;plans=new Map;get memoryBytes(){return this.scratch.memoryBytes}get fallbackReason(){return this.presentation.supportsCapture?this.scratch.fallbackReason:"receivers"}get capturePages(){return this.captures.map(({page:e})=>e)}get pageProgress(){const e=this.scratch.pageProgress;return this.captures.map(({page:r,plan:i,ready:n})=>{const s=n&&this.presentation.has(r,this.samples),a=e.find(({id:o})=>o===r.id);return{id:r.id,samples:s?this.samples:(a==null?void 0:a.samples)??0,totalSamples:this.samples,ready:n,published:s,limited:i.limited,width:i.width,height:i.height}})}updateCaptures(e,r,i,n=!0){var h;const s=Bf(e),a=os((h=i.options)==null?void 0:h.format),o=2*(a.bytesPerPixel/4+4)+2*a.accumulationBytesPerPixel/4+8,c=Math.max(1,Math.floor(Math.min(i.maxRenderTargetPixels??i.width*i.height,vi/2/o))),l=r.accumulationPages.map(y=>{const f=this.plans.get(y.id),S=(f==null?void 0:f.orientation)??s,b={groundTexelTargetMeters:y.groundTexelTargetMeters??1,maximumDimension:this.renderer.capabilities.maxTextureSize,maximumPixels:c},A=JSON.stringify([y.receiverBounds.min,y.receiverBounds.max,S.toArray(),b]),C=(f==null?void 0:f.inputs)===A?f.plan:Ff(y.receiverBounds,S,b);return this.plans.set(y.id,{inputs:A,plan:C,orientation:S}),C.camera.layers.mask=e.layers.mask,{page:y,plan:C}}),u=l.find(({page:y})=>{var f;return this.activeId===y.id&&((f=this.activeCapture)==null?void 0:f.page.id)===y.id&&this.activeCapture.page.contentKey===JSON.stringify([y.contentKey??y.revision,this.activeCapture.plan.key])}),d=u?this.activeCapture.plan:null,g=JSON.stringify(l.map(({page:y,plan:f})=>[y.id,f.key,y.screenBounds.z*y.screenBounds.w]));if(g!==this.allocationKey){const y=new Map(Lf(l.filter(({page:f})=>f.id!==(u==null?void 0:u.page.id)).map(({page:f,plan:S})=>({id:f.id,plan:S,screenArea:f.screenBounds.z*f.screenBounds.w})),ts-(d?d.width*d.height*8:0)));u&&d&&y.set(u.page.id,d),this.allocationKey=g,this.allocations=y}this.captures=l.map(({page:y,plan:f})=>{var C;const S=this.allocations.get(y.id)??f,b=JSON.stringify([y.contentKey??y.revision,S.key]),A=(!n||y.ready!==!1)&&(((C=i.isPageReady)==null?void 0:C.call(i,y.id))??!0);return{page:{...y,ready:A,captureKey:JSON.stringify([S.camera.quaternion.toArray(),S.width,S.height]),captureSize:{width:S.width,height:S.height},contentKey:b,revision:b,screenBounds:new ie(0,0,1,1)},plan:S,ready:A}});const p=new Set(this.captures.map(({page:y})=>y.id));for(const y of this.plans.keys())p.has(y)||this.plans.delete(y);for(const[y,f]of this.publicationRetries){const S=this.captures.find(({page:b})=>b.id===y);(!S||S.page.contentKey!==f.contentKey)&&this.publicationRetries.delete(y)}this.presentation.beginFrame(this.capturePages);for(const{page:y,plan:f}of this.captures)this.presentation.prepareRestore(y,i.samples,new ee().multiplyMatrices(f.camera.projectionMatrix,f.camera.matrixWorldInverse));i.active&&this.reportProgress()}reportProgress(){this.watchdog.enabled&&this.watchdog.observe(this.pageProgress,{activeId:this.activeId,memoryBytes:this.memoryBytes,fallbackReason:this.fallbackReason,publicationRetries:[...this.publicationRetries.entries()]})}yieldForRestore(e,r){if(!this.presentation.isRestorePending(e,r))return!1;const i=JSON.stringify([e.id,r]),n=e.contentKey??e.revision;if(this.restoreOpportunities.get(i)===n)return!1;if(this.restoreOpportunities.set(i,n),this.restoreOpportunities.size>1024){const s=this.restoreOpportunities.keys().next().value;s!==void 0&&this.restoreOpportunities.delete(s)}return!0}render(e,r,i){var g;if(this.disposed)return null;if(!i.active)return this.watchdog.pause(),null;if(this.samples=i.samples,this.updateCaptures(e,r,i),!this.presentation.supportsCapture)return this.scratch.releaseScratch(),this.activeId=null,null;const n=performance.now();let s,a=this.captures.find(({page:p})=>p.id===this.activeId);const o=a&&!a.ready&&this.captures.some(({page:p,ready:h})=>h&&p.id!==(a==null?void 0:a.page.id)&&!this.presentation.has(p,i.samples));if((!a||o||this.presentation.has(a.page,i.samples))&&(this.scratch.releaseScratch(!0),this.activeId=null,a=void 0),a){const p=this.publicationRetries.get(a.page.id);p&&p.retryAt>n&&(s=Math.ceil(p.retryAt-n))}if(!a&&this.captures.length>0)for(let p=0;p<this.captures.length;p+=1){const h=(this.cursor+p)%this.captures.length,y=this.captures[h];if(!y.ready||this.presentation.has(y.page,i.samples)||this.yieldForRestore(y.page,i.samples))continue;const f=this.publicationRetries.get(y.page.id);if(f&&f.retryAt>n){s=Math.min(s??1/0,Math.ceil(f.retryAt-n));continue}a=y,s=void 0,this.activeId=y.page.id,this.activeCapture=y,this.cursor=(h+1)%this.captures.length;break}let c=null;if(a!=null&&a.ready&&s===void 0){this.activeCapture=a;const{page:p,plan:h}=a,y=(f,S,b)=>r.renderPageSample(f,p.id,S,b,p.screenBounds);if(c=this.scratch.render(h.camera,{accumulationPages:[p],supportsOpaqueAccumulation:r.supportsOpaqueAccumulation,renderSample:y,renderPageSample:(f,S,b,A)=>y(f,b,A)},{...i,width:h.width,height:h.height,viewKey:h.key,visibilityOnly:!0,isPageReady:void 0,maxPagesPerFrame:i.maxPagesPerFrame??4}),c!=null&&c.settled)this.publicationRetries.delete(p.id),this.scratch.releaseScratch(!0),this.activeId=null;else if((c==null?void 0:c.retryAfterMs)!==void 0){const f=(((g=this.publicationRetries.get(p.id))==null?void 0:g.attempts)??0)+1;s=Math.max(250,c.retryAfterMs);const S=f>=3;S&&(s=Math.max(1e3,s)),this.publicationRetries.set(p.id,{contentKey:p.contentKey,attempts:S?0:f,retryAt:n+s}),S&&(this.scratch.releaseScratch(),this.activeId=null,this.captures.some(({page:b,ready:A})=>{var C;return A&&b.id!==p.id&&!this.presentation.has(b,i.samples)&&(((C=this.publicationRetries.get(b.id))==null?void 0:C.retryAt)??0)<=n})&&(s=void 0))}if(!c)return null}!this.activeId&&!this.captures.some(({page:p,ready:h})=>h&&!this.presentation.has(p,i.samples))&&this.scratch.releaseScratch();const l=this.pageProgress;this.reportProgress();const u=l.reduce((p,h)=>p+(h.published?i.samples:Math.min(h.samples,i.samples-1)),0),d=l.length*i.samples;return{progress:d>0?u/d:1,settled:d===u,needsRepaint:l.some(p=>p.ready&&!p.published)&&s===void 0,...s===void 0?{}:{retryAfterMs:s}}}renderHard(e,r,i){var I;if(this.disposed||!i.active)return{published:0,needsRepaint:!1};if(this.updateCaptures(e,r,{...i,samples:1},i.isPageReady===void 0),!r.supportsOpaqueAccumulation||!this.presentation.supportsCapture||!this.renderer.extensions.has("EXT_color_buffer_float"))return{published:0,needsRepaint:!1};const n=new Map(this.captures.map(({page:E})=>[E.id,this.presentation.getCapturedSize(E.id)])),s=this.captures.reduce((E,{page:O,plan:B})=>{const U=n.get(O.id);return E+Math.max(B.width*B.height,U?U.width*U.height:0)*8},0)>ts,a=({page:E,plan:O})=>{const B=n.get(E.id);return B?(B.width*B.height-O.width*O.height)*8:0},o=this.captures.filter(({page:E,plan:O,ready:B})=>{if(!B)return!1;const U=n.get(E.id);return this.presentation.hasAtLeast(E,1)&&(!s||!U||U.width*U.height<=O.width*O.height)?!1:!(U&&U.samples>1&&!s&&(U.width!==O.width||U.height!==O.height)&&this.presentation.canReplay(E))});s&&o.sort((E,O)=>a(O)-a(E));const c=o.find(({page:E})=>!this.yieldForRestore(E,1));if(!c)return{published:0,needsRepaint:o.length>0};const{page:l,plan:u}=c;if(s&&this.presentation.hasAtLeast(l,1)&&a(c)>0){const E=n.get(l.id),O=Math.max(u.width,Math.ceil(E.width/2))*Math.max(u.height,Math.ceil(E.height/2))*8;if(this.memoryBytes+O>vi)return{published:0,needsRepaint:!1,retryAfterMs:1e3};try{const B=this.presentation.downsample(l,u.width,u.height);return{published:B?1:0,needsRepaint:B,...B?{}:{retryAfterMs:1e3}}}catch{return{published:0,needsRepaint:!1,retryAfterMs:1e3}}}if(this.memoryBytes+u.width*u.height*16>vi)return{published:0,needsRepaint:!1,retryAfterMs:1e3};const d=this.renderer,g=d.getRenderTarget(),p=d.getActiveCubeFace(),h=d.getActiveMipmapLevel(),y=d.getViewport(new ie),f=d.getScissor(new ie),S=d.getScissorTest(),b=d.autoClear,A=d.getClearColor(new Ge),C=d.getClearAlpha(),R=new Ye(u.width,u.height,{type:xt,format:Zt,minFilter:De,magFilter:De,samples:0,depthTexture:new ir(u.width,u.height,Bt)});try{d.initRenderTarget(R),d.autoClear=!1,d.setRenderTarget(R),d.setViewport(new ie(0,0,u.width,u.height)),d.setScissorTest(!1),d.setClearColor(0,0),d.clear(!0,!0,!1);const O=r.renderPageSample(u.camera,l.id,0,1,l.screenBounds)&&this.presentation.publish(R,R,u.camera,l,1);return{published:O?1:0,needsRepaint:O&&o.length>1,...O?{}:{retryAfterMs:1e3}}}catch(E){return console.warn("[shadow-simulation] retaining completed corridor after hard-stage capture failure",E),{published:0,needsRepaint:!1,retryAfterMs:1e3}}finally{d.setRenderTarget(g,p,h),d.setViewport(y),d.setScissor(f),d.setScissorTest(S),d.setClearColor(A,C),d.autoClear=b,(I=R.depthTexture)==null||I.dispose(),R.dispose()}}pausePending(){this.watchdog.pause()}cancelPending(){this.watchdog.pause(),this.activeId!==null&&this.scratch.releaseScratch(),this.activeId=null,this.publicationRetries.clear(),this.restoreOpportunities.clear()}dispose(){this.disposed||(this.disposed=!0,this.watchdog.pause(),this.scratch.dispose(),this.presentation.dispose(),this.captures=[],this.plans.clear(),this.allocations=new Map,this.publicationRetries.clear(),this.restoreOpportunities.clear())}}const Kf=750,Xf=5e3,oo=new Set,$f=t=>{const e=xl({assetUrl:t,production:!0});let r=null,i=!1,n=!1,s=0,a=null;const o=()=>{if(r&&(r.onmessage=null,r.onerror=null,r.onmessageerror=null,r.terminate(),r=null),a){const d=a;a=null,clearTimeout(d.timer),d.finish(null)}},c=()=>{n=!0,o()},l=(d,g=[])=>{if(!e||i||n||a||typeof Worker>"u")return Promise.resolve(null);try{return r||(r=new Worker(new URL("https://cismet.github.io/carma-pr-deployments/812/geoportal/assets/shadow-corridor-cache.worker-CIFlUk2u.js",import.meta.url),{type:"module"}),r.onerror=c,r.onmessageerror=c,r.onmessage=p=>{var y;if(!a||((y=p.data)==null?void 0:y.id)!==a.id)return;const h=a;a=null,clearTimeout(h.timer),h.finish(p.data)}),new Promise(p=>{const h=setTimeout(c,d.operation===hi.read?Kf:Xf);a={id:d.id,timer:h,finish:p};try{r.postMessage(d,g)}catch{c()}})}catch{return c(),Promise.resolve(null)}},u={cancelPending:o,get enabled(){return!!(e&&!i&&!n&&typeof Worker<"u")},get busy(){return a!==null},async read(d){const g=je(d);if(!g)return null;const p=await l({id:++s,producerAssetUrl:e??"",identity:d,operation:hi.read}),h=p==null?void 0:p.record;return!i&&(h==null?void 0:h.schema)===Ai.schema&&je(h.identity)===g&&ro(h)?h:null},async write(d,g,p){if(!je(d)||!ro(g))return!1;const h=[g.visibility,g.depth];if(h.some(f=>!(f.buffer instanceof ArrayBuffer)||f.byteOffset!==0||f.byteLength!==f.buffer.byteLength))return!1;const y=await l({id:++s,producerAssetUrl:e??"",identity:d,operation:hi.write,capture:g,costs:p},[...new Set(h.map(f=>f.buffer))]);return!i&&(y==null?void 0:y.written)===!0},async writePacked(d,g,p){if(!je(d)||!Uf(g)||!(g.rgba.buffer instanceof ArrayBuffer)||g.rgba.byteOffset!==0||g.rgba.byteLength!==g.rgba.buffer.byteLength)return!1;const h=await l({id:++s,producerAssetUrl:e??"",identity:d,operation:hi.writePacked,capture:g,costs:p},[g.rgba.buffer]);return!i&&(h==null?void 0:h.written)===!0},dispose(){i=!0,o(),oo.delete(u)}};return oo.add(u),u};class Qf{constructor(e,r,i){this.scene=e,this.renderer=r,this.host=i,this.frameCache=new Zl(r),this.pages=new Df(e,r,i.maximumMapSize**2*8*2,i.maximumMapSize,i.frame),this.accumulation=new qf(r),i.worldBasis&&i.corridorRevision&&i.dateTimeKey&&this.accumulation.presentation.setPersistence({cache:this.persistentCache,identity:(n,s)=>{var u,d,g;const a=this.pages.getPageGeometry(n.id),o=(u=i.dateTimeKey)==null?void 0:u.call(i);if(!a||!o||!n.captureKey)return null;const c=s===1?(d=i.receiverStageError)==null?void 0:d.call(i,n.receiverBounds):void 0,l=(g=i.corridorRevision)==null?void 0:g.call(i,a.casterBounds,c,n.receiverBounds);return l?{source:"shared-scene-corridor-v2",dateTime:o,corridor:n.id,resolution:JSON.stringify([a.width,a.height,n.captureKey]),geometryFingerprint:l,samples:s}:null},worldBasis:i.worldBasis,runIdleRender:i.runIdleRender,requestRepaint:i.requestRepaint})}pages;viewKey="";idleStats=null;accumulation;persistentCache=$f(import.meta.url);accumulationSettled=!1;viewport=new It(1,1);lastFrame=null;frameCache;presentedPageIds=new Set;casterRevisionsDirty=!0;casterRevisionCursor=0;hardRetryTimer=null;update(e,r,i,n,s=r.renderCamera){this.viewport.copy(r.viewport);const a=JSON.stringify([e.map(({id:o,bounds:c,receiverObjectId:l})=>[o,c.min,c.max,l]),s.projectionMatrix.elements,s.matrixWorldInverse.elements,r.viewport,i,n]);a!==this.viewKey&&(this.pages.setView(e,s,r.viewport,n,i,this.host.receiverBiasLimit),this.viewKey=a,this.casterRevisionsDirty=!0,this.casterRevisionCursor=0)}updatePresentation(e,r=e.renderCamera){this.viewport.copy(e.viewport),this.pages.updatePresentation(r)}invalidateContent(e){(e==null?void 0:e.length)!==0&&(this.casterRevisionsDirty=!0,this.casterRevisionCursor=0,this.frameCache.invalidate(),e?e.length>0&&this.pages.invalidateCasters(e):this.pages.clearCache())}async prewarm({cells:e,frame:r,lighting:i,targetPixels:n,samples:s,prepare:a,signal:o,yieldToInput:c=Nf,planningCamera:l}){if(o.aborted)return null;this.idleStats=null,this.pages.setPrewarmView(e,l??r.renderCamera,r.viewport,n,i,s);try{return this.idleStats=await Pf({pages:this.pages.prewarmPages,signal:o,prepare:a,yieldToInput:c,render:(u,d,g)=>{if(d!=null&&d.parent)throw new Error("Idle caster lease must own an unmounted group");const p=this.host.light.visible;this.host.light.visible=!1,d&&this.scene.add(d);try{let h=null;const y=()=>{h=this.pages.prewarmNext(r.renderCamera,u,{signal:g})};return this.host.runIdleRender?this.host.runIdleRender(y):y(),h??{pageId:u,rendered:0,cachedSamples:0,totalSamples:s,complete:!1,budgetLimited:!1,aborted:!0}}finally{d&&this.scene.remove(d),this.host.light.visible=p}}}),this.idleStats}finally{this.pages.clearPrewarmView()}}renderProgressive(e,r){if(this.lastFrame=r,!r.active)return this.pausePending(),null;if(this.pages.accumulationPages.length===0)return this.accumulationSettled=!1,null;const i=this.renderWithHost(e,()=>{const a=this.captureHard(e);if(this.casterRevisionsDirty&&this.host.corridorRevision)return null;const o=this.accumulation.presentation.capture(this.scene,()=>this.accumulation.render(e,this.pages,{...r,visibilityOnly:!0,maxPagesPerFrame:Math.min(r.samples,64),maxFrameCpuMilliseconds:r.maxFrameCpuMilliseconds??2,isPageReady:c=>this.isPageReady(c,!1)}));return o&&this.renderContent(e,null,r.samples),o&&{...o,settled:o.settled&&!a.needsRepaint,needsRepaint:o.needsRepaint||a.needsRepaint}});if(!i)return this.accumulationSettled=!1,null;const n="retryAfterMs"in i?i.retryAfterMs:void 0;n!==void 0&&this.hardRetryTimer===null&&(this.hardRetryTimer=globalThis.setTimeout(()=>{var a,o;this.hardRetryTimer=null,(o=(a=this.host).requestRepaint)==null||o.call(a)},Math.max(1,n)));const s=i.settled&&!this.accumulationSettled;return this.accumulationSettled=i.settled,{...i,settled:s}}render(e,r,i,n=!0){return this.pages.accumulationPages.length===0?!1:(this.renderWithHost(e,()=>{n&&this.captureHard(e),this.renderContent(e,r,i,!n)}),!0)}cancelPending(e=!1){this.accumulation.cancelPending(),e&&this.accumulation.presentation.beginSolarTransition(),this.pausePending()}pausePending(){this.accumulation.pausePending(),this.hardRetryTimer!==null&&(globalThis.clearTimeout(this.hardRetryTimer),this.hardRetryTimer=null),this.accumulationSettled=!1}isPageReady(e,r){var n,s;const i=this.pages.getPageGeometry(e);return i?!this.host.isCorridorReady||this.host.isCorridorReady(i.casterBounds,r?(s=(n=this.host).receiverStageError)==null?void 0:s.call(n,i.receiverBounds):void 0,i.receiverBounds):!1}captureHard(e){var i,n,s,a,o,c;if(this.casterRevisionsDirty&&this.host.corridorRevision){const l=this.pages.accumulationPages,u=performance.now();let d=0;for(;this.casterRevisionCursor<l.length;){if(d>=4||d>0&&performance.now()-u>=4)return(n=(i=this.host).requestRepaint)==null||n.call(i),{published:0,needsRepaint:!0};const g=l[this.casterRevisionCursor++];d+=1;const p=this.pages.getPageGeometry(g.id);if(!p)continue;const h=this.host.corridorRevision(p.casterBounds,(a=(s=this.host).receiverStageError)==null?void 0:a.call(s,p.receiverBounds),p.receiverBounds);this.pages.setCasterRevision(g.id,h)&&this.frameCache.invalidate()}this.casterRevisionsDirty=!1,this.casterRevisionCursor=0}const r=this.accumulation.presentation.capture(this.scene,()=>{var l;return this.accumulation.renderHard(e,this.pages,{...this.lastFrame,width:this.viewport.x,height:this.viewport.y,viewKey:this.viewKey,styleEpoch:((l=this.lastFrame)==null?void 0:l.styleEpoch)??0,samples:1,active:!0,isPageReady:u=>this.isPageReady(u,!0)})});return r.needsRepaint&&((c=(o=this.host).requestRepaint)==null||c.call(o)),r.retryAfterMs!==void 0&&this.hardRetryTimer===null&&(this.hardRetryTimer=globalThis.setTimeout(()=>{var l,u;this.hardRetryTimer=null,(u=(l=this.host).requestRepaint)==null||u.call(l)},r.retryAfterMs)),r}renderContent(e,r,i,n=!1){var u,d,g,p,h;const s=this.accumulation.capturePages;this.accumulation.presentation.beginFrame(s);const a=s.map(y=>{const f=this.accumulation.presentation.canPresent(y);return{page:y,replay:f,ready:f||(!this.host.corridorRevision||!this.casterRevisionsDirty)&&this.isPageReady(y.id,!0)}});let o=!1;const c=()=>{this.presentedPageIds.clear();const y=this.host.light.visible,f=r===null&&a.some(({replay:S})=>S);this.host.light.visible=!0;try{let S=new Set;r===null?S=this.accumulation.presentation.renderNative(this.scene,a.filter(b=>b.replay).map(b=>b.page),()=>this.renderer.render(this.scene,e)):this.renderer.render(this.scene,e);for(const{page:b,replay:A,ready:C}of a){if(!C)continue;if(S.has(b.id)){this.presentedPageIds.add(b.id);continue}if(r===null&&!A){this.presentedPageIds.add(b.id);continue}if(n&&!A){this.presentedPageIds.add(b.id);continue}const R=n||f&&A;this.host.light.visible=R,this.accumulation.presentation.render(this.scene,b,i,()=>R?this.pages.renderPageColor(e,b.id):this.pages.renderPageSample(e,b.id,r??0,r===null?1:i))?this.presentedPageIds.add(b.id):o=!0}}finally{this.host.light.visible=y}};if((u=this.lastFrame)!=null&&u.active&&r===null&&this.accumulation.presentation.supportsCapture){const y=JSON.stringify([this.viewKey,e.projectionMatrix.elements,e.matrixWorldInverse.elements,e.layers.mask,this.lastFrame.styleEpoch,((g=(d=this.host).visualEpoch)==null?void 0:g.call(d))??0,this.accumulation.presentation.revision,a.map(({page:f,replay:S,ready:b})=>[f.id,f.contentKey??f.revision,S,b])]);this.frameCache.render(y,this.lastFrame.width,this.lastFrame.height,c),o&&this.frameCache.invalidate()}else this.frameCache.invalidate(),c();const l=a.filter(({page:y,replay:f})=>this.presentedPageIds.has(y.id)&&(this.accumulation.presentation.hasAtLeast(y,1)||!f&&(r===null||i===1))).map(({page:y})=>y);l.length>0&&((h=(p=this.host).onPresentedPages)==null||h.call(p,l,s))}renderWithHost(e,r){const{renderer:i,host:n}=this,s=n.light.visible,a=n.sky.visible,o=n.overlay.visible,c=i.autoClear;n.light.visible=!1,i.autoClear=!1;try{a&&this.renderHostObject(n.sky,e),n.sky.visible=!1,n.overlay.visible=!1;const l=r();return l!==null&&o&&(n.overlay.visible=!0,this.renderHostObject(n.overlay,e)),l}finally{i.autoClear=c,n.light.visible=s,n.sky.visible=a,n.overlay.visible=o}}renderHostObject(e,r){const i=this.scene.children.filter(n=>n!==e&&n.visible);for(const n of i)n.visible=!1;try{this.renderer.render(this.scene,r)}finally{for(const n of i)n.visible=!0}}get pageLevels(){return this.pages.pageLevels}get stats(){return{...this.pages.stats,framePresentation:this.frameCache.stats,corridorAccumulation:{retained:this.accumulation.presentation.stats,pageSamples:this.accumulation.pageProgress,memoryBytes:this.accumulation.memoryBytes,fallbackReason:this.accumulation.fallbackReason},...this.idleStats?{idlePrewarm:this.idleStats}:{},...this.host.auditCorridors?{corridorAudit:this.host.auditCorridors(this.pages.accumulationPages.flatMap(e=>{const r=this.pages.getPageGeometry(e.id);return r?[{id:e.id,casterBounds:r.casterBounds,receiverBounds:r.receiverBounds}]:[]}))}:{}}}dispose(){this.hardRetryTimer!==null&&globalThis.clearTimeout(this.hardRetryTimer),this.hardRetryTimer=null,this.accumulation.dispose(),this.frameCache.dispose(),this.persistentCache.dispose(),this.pages.dispose()}}function Zf(){const t=new WeakSet;return e=>{let r=!1;for(const i of e)if(!(!i.providesTerrain||!i.hasRenderableContent)&&(r=!0,t.has(i)||i.hasRenderableContent()))return t.add(i),!1;return r}}const Nn=(t,e,r)=>JSON.stringify([t.min.toArray(),t.max.toArray(),e,r==null?void 0:r.min.toArray(),r==null?void 0:r.max.toArray()]),Jf=(t,e)=>{const r=new Map(t.map(s=>[s.id,s])),i=[],n=s=>i.push(new Le(new T(...s.minimum),new T(...s.maximum)));for(const s of e){const a=r.get(s.id);a&&s.minimum.every((c,l)=>c===a.minimum[l])&&s.maximum.every((c,l)=>c===a.maximum[l])||(a&&n(a),n(s)),r.delete(s.id)}for(const s of r.values())n(s);return i},ep=(t,e,r)=>{const i=new Set(r.map(({id:n})=>n));return t.filter(n=>{if(n.loadReason==="shadow")return!1;const s=e.filter(({bounds:a})=>n.minimum[0]<a.max.x&&n.maximum[0]>a.min.x&&n.minimum[2]<a.max.z&&n.maximum[2]>a.min.z);return s.length>0&&s.every(({id:a})=>i.has(a))}).map(({id:n})=>n)},tp=(t,e,r)=>{if(![t,e,r].every(Number.isFinite)||r<=0)throw new RangeError("Invalid shared-scene Mercator basis");return new ee().set(r,0,0,t,0,0,r,e,0,r,0,0,0,0,0,1)},co=(t,e,r)=>Tl(e.reduce((i,n)=>{if(n.loadReason==="shadow")return i;const[s,,a]=n.minimum,[o,,c]=n.maximum;return s<t.max.x&&o>t.min.x&&a<t.max.z&&c>t.min.z&&Number.isFinite(n.errorPixels)?Math.max(i,n.errorPixels):i},r),r),rp=({stageErrorPixels:t,targetErrorPixels:e,groundTexelTargetMeters:r,finalBiasMeters:i,maximumCoarseBiasMeters:n,metersPerPixel:s=0})=>{const a=Math.max(i,Math.min(n,Math.max(0,s)*.1)),o=Math.max(1,Math.min(n/i,t/Math.max(e,.25)));return Math.max(a,Math.min(n,i*o,Math.max(i,r*2)))},ip=({id:t,casterBounds:e,sunElevationDegrees:r,regions:i,volumes:n})=>{const s=new Set(i.flatMap(u=>u.selectedTileIds)),a=new Map(n.map(u=>[u.id,u])),o=[],c=[];let l=0;for(const u of s){const d=a.get(u);if(!d){o.push(u);continue}d.loadReason==="shadow"&&(l+=1),e.intersectsBox(new Le(new T(...d.minimum),new T(...d.maximum)))||c.push(u)}return{id:t,ready:i.length>0&&i.every(u=>u.ready),selectedTiles:s.size,offscreenTiles:l,reviewCount:r>=10&&s.size>10,nearHorizon:r<10,exactPrismTested:i.length>0&&i.every(u=>u.receiverPrismTested),visitedNodes:i.reduce((u,d)=>u+d.visitedNodes,0),broadPhaseNodes:i.reduce((u,d)=>u+d.broadPhaseNodes,0),rejectedPrismNodes:i.reduce((u,d)=>u+d.rejectedPrismNodes,0),missingPublishedVolumes:o,outsideEnvelope:c,selectedTileIds:[...s].sort()}},np={[Ve.STANDARD]:0,[Ve.HIGH]:1,[Ve.MAX]:1,[Ve.ULTRA]:1,[Ve.EXTREME]:1},sp=128,ap={[Ve.STANDARD]:0,[Ve.HIGH]:0,[Ve.MAX]:1,[Ve.ULTRA]:2,[Ve.EXTREME]:3},op=(t,e,r,i)=>{var u,d;const n=t==null?void 0:t.tileManager;if(!t||!n||!Number.isFinite(n.deltaZoom)||!Number.isFinite(n.tileSize)||!n.tileManager)return()=>{};const s={deltaZoom:n.deltaZoom,terrainTileSize:n.tileSize,sourceTileSize:n.tileManager.tileSize,meshSize:t.meshSize,calculateTileZoom:(u=n.tileManager._source)==null?void 0:u.calculateTileZoom},o=1-np[r],c=e*2**o;n.deltaZoom=o,n.tileSize=c,n.tileManager.tileSize=c,t.meshSize=sp;const l=ap[r];if(l>0&&n.tileManager._source){s.calculateTileZoom||i==null||i();const g=n.tileManager._source.calculateTileZoom;g&&(n.tileManager._source.calculateTileZoom=(...p)=>g(...p)+l)}return t._meshCache={},(d=n.freeRtt)==null||d.call(n),()=>{var g;n.deltaZoom=s.deltaZoom,n.tileSize=s.terrainTileSize,n.tileManager.tileSize=s.sourceTileSize,t.meshSize=s.meshSize,n.tileManager._source&&(n.tileManager._source.calculateTileZoom=s.calculateTileZoom),t._meshCache={},(g=n.freeRtt)==null||g.call(n)}},cp=1024,lp=2048,up=4096,dp=1e6,hp=2e6,lo=(t,e=Ml())=>{const r=Math.max(256,Math.floor(t)),i=bl(e);return i==="phone"?{maxShadowMapSize:Math.min(r,cp),maxAccumulationPixels:dp}:i==="tablet"?{maxShadowMapSize:Math.min(r,lp),maxAccumulationPixels:hp}:{maxShadowMapSize:Math.min(r,up),maxAccumulationPixels:Number.POSITIVE_INFINITY}},mp=(t,e)=>{if(t===Number.POSITIVE_INFINITY)return t;const r=os(e.format),i=e.msaaSamples??No.msaaSamples,n=2*(r.bytesPerPixel+4)*(1+Math.max(0,i))+3*r.accumulationBytesPerPixel;return Math.min(t,Math.floor(256*1024*1024/n))},uo=(t,e=cs,r=2560*1440,i=1)=>Math.floor(Math.max(256**2,Math.min(t**2,Lt[e].depthSize**2*(Number.isFinite(r)&&r>0?r/(2560*1440):1)*i**2))),ho=new WeakMap,fp=t=>{const e=ho.get(t);if(e)return e;const r=t.getContext(),i=r.getInternalformatParameter(r.RENDERBUFFER,r.DEPTH_COMPONENT24,r.SAMPLES),n=a=>[0,...Array.from(r.getInternalformatParameter(r.RENDERBUFFER,a,r.SAMPLES)).filter(o=>i.includes(o))],s={maxTextureSize:t.capabilities.maxTextureSize,maxRenderbufferSize:r.getParameter(r.MAX_RENDERBUFFER_SIZE),hdrSamples:n(r.RGBA16F),sdrSamples:n(r.RGBA8)};return ho.set(t,s),s},pp=(t,e)=>{if(t.shadowBufferFormat===Qt.HDR_32)return 0;const r=t.shadowMsaaSamples===Rl?1/0:t.shadowMsaaSamples;return Math.max(0,...e.filter(i=>Number.isFinite(i)&&i<=r))},bt=new WeakMap,Lc=t=>{let e=bt.get(t);return e||(e={snapshot:null,listeners:new Set,demandListeners:new Set},bt.set(t,e)),e},cg=t=>{var e;return((e=bt.get(t))==null?void 0:e.snapshot)??null},lg=(t,e)=>{const r=Lc(t),i=r.listeners.size===0;if(r.listeners.add(e),i)for(const n of r.demandListeners)n(!0);return()=>{if(!(!r.listeners.delete(e)||r.listeners.size>0)){r.snapshot=null;for(const n of r.demandListeners)n(!1);r.demandListeners.size===0&&bt.delete(t)}}},gp=(t,e)=>{const r=Lc(t);return r.demandListeners.add(e),r.listeners.size>0&&e(!0),()=>{r.demandListeners.delete(e),r.listeners.size===0&&r.demandListeners.size===0&&bt.delete(t)}},mo=t=>{var e;return(((e=bt.get(t))==null?void 0:e.listeners.size)??0)>0},vp=(t,e)=>{const r=bt.get(t);if(r!=null&&r.listeners.size){r.snapshot=e;for(const i of r.listeners)i()}},On=t=>{const e=bt.get(t);if(e){e.snapshot=null;for(const r of e.listeners)r();e.listeners.size===0&&e.demandListeners.size===0&&bt.delete(t)}},fo=.01,yp=500,Ln=1500,Fn=(t=cs)=>({lastFrameMs:null,sampleDurationMs:0,sampleCount:0,recoveryDurationMs:0,updateIntervalMs:Lt[t].targetFps?1e3/Lt[t].targetFps:0,targetFrameMs:Lt[t].targetFps?1e3/Lt[t].targetFps:0,depthScale:1,trial:null,adaptationBlocked:!1}),Bn=(t,e,r,{enabled:i=!0,allowCadenceReduction:n=!0}={})=>{var y,f;if(t.targetFrameMs===0)return t;if(!i)return t.lastFrameMs===null&&t.updateIntervalMs===t.targetFrameMs&&t.depthScale===1&&!t.adaptationBlocked?t:{...t,lastFrameMs:null,sampleDurationMs:0,sampleCount:0,recoveryDurationMs:0,updateIntervalMs:t.targetFrameMs,depthScale:1,trial:null,adaptationBlocked:!1};if(!r||!Number.isFinite(e))return t.lastFrameMs===null?t:{...t,lastFrameMs:null,sampleDurationMs:0,sampleCount:0,recoveryDurationMs:0,depthScale:1,trial:null,adaptationBlocked:!1};const s=t.lastFrameMs===null?0:e-t.lastFrameMs;if(s<=0)return{...t,lastFrameMs:e};const a=t.sampleDurationMs+s,o=t.sampleCount+1;if(a<yp)return{...t,lastFrameMs:e,sampleDurationMs:a,sampleCount:o};const c=a/o,l=t.targetFrameMs;if(t.trial&&c>=t.trial.baselineFrameMs*.95||t.adaptationBlocked)return{...t,lastFrameMs:e,sampleDurationMs:0,sampleCount:0,trial:null,adaptationBlocked:!0,updateIntervalMs:((y=t.trial)==null?void 0:y.updateIntervalMs)??t.updateIntervalMs,depthScale:((f=t.trial)==null?void 0:f.depthScale)??t.depthScale};const g=c<l/1.2?t.recoveryDurationMs+a:0,p=n?c>l+fo?Math.min(l*4,t.updateIntervalMs+l):g>=Ln?Math.max(l,t.updateIntervalMs-l):t.updateIntervalMs:l,h=c>l+fo&&(!n||t.updateIntervalMs>=l*4)?Math.max(.5,t.depthScale-.25):g>=Ln?Math.min(1,t.depthScale+.25):t.depthScale;return{...t,lastFrameMs:e,sampleDurationMs:0,sampleCount:0,recoveryDurationMs:g>=Ln?0:g,updateIntervalMs:p,depthScale:h,trial:p>t.updateIntervalMs||h<t.depthScale?{baselineFrameMs:c,updateIntervalMs:t.updateIntervalMs,depthScale:t.depthScale}:null,adaptationBlocked:!1}},Sp=900,mi=.01,wp=.25,_p=1e3,po=4e3,xp=10,Fc=2500,Tp="shadow-simulation-raster-dem",bp=200,Bc=.5,Mp="shadow-simulation-sky-light",fi=100,go=1e3,Rp=1e3,vo=100,Mr="carma-shadow-map-style-base",Ep=(t,e=Oo,r=()=>!0,i=()=>"opaque",n=Ve.MAX)=>{const s=e.id,a=t;if(typeof a.getTerrain!="function"||typeof a.getSource!="function"||typeof a.setTerrain!="function")return Object.assign(()=>{},{refresh:()=>{}});const o=a.getTerrain(),c=new Map,l=new Map;let u=!1,d=!1,g=!1,p=null,h=!1,y,f=null,S=()=>{},b=null;const A=()=>{p&&(h?delete p.getMeshFrameDelta:p.getMeshFrameDelta=y,p=null,y=void 0,h=!1)},C=()=>{const M=a.terrain;!M||M===p||(A(),typeof M.getMeshFrameDelta=="function"&&(h=!Object.prototype.hasOwnProperty.call(M,"getMeshFrameDelta"),y=M.getMeshFrameDelta,M.getMeshFrameDelta=()=>0,p=M))},R=()=>{var Z;const M=a.terrain;!M||M===f||(S(),f=M,S=op(M,e.tileSize,n,()=>{var F;(F=t.setSourceTileLodParams)==null||F.call(t,9.314,3,e.id)}),(Z=t.triggerRepaint)==null||Z.call(t))},I=M=>`${M.type}:${String(M.source)}:${String(M["source-layer"])}`,E=()=>{var F;const Z=t.getStyle().layers??[];for(const te of Z){if(!Fl(te))continue;const $=I(te);let de=l.get(te.id);const be=t.getLayoutProperty(te.id,"visibility");!de||de.signature!==$?(de={signature:$,value:be},l.set(te.id,de)):be!=="none"&&(de.value=be),be!=="none"&&t.setLayoutProperty(te.id,"visibility","none")}if(r()){t.getLayer(Mr)||(t.addLayer({id:Mr,type:"background",paint:{"background-color":mn.baseColor,"background-opacity":mn.opacity}},(F=Z[0])==null?void 0:F.id),g=!0);for(const te of Z){if(te.id===Mr||te.type==="custom")continue;const $=mn.opaqueDrapeProperties.get(te.type);if(!$)continue;const de=I(te);let be=c.get(te.id);const P=t.getPaintProperty(te.id,$);!be||be.signature!==de?(be={signature:de,property:$,value:P},c.set(te.id,be)):P!==1&&(be.value=P),P!==1&&t.setPaintProperty(te.id,$,1)}}},O=M=>{var Z;for(const[F,te]of M)try{const $=(Z=t.getStyle().layers)==null?void 0:Z.find(({id:de})=>de===F);$&&I($)===te.signature&&t.getLayoutProperty(F,"visibility")==="none"&&t.setLayoutProperty(F,"visibility",te.value===void 0?null:te.value)}catch{}M.clear()},B=()=>{var M;for(const[Z,F]of c)try{const te=(M=t.getStyle().layers)==null?void 0:M.find(({id:$})=>$===Z);te&&I(te)===F.signature&&t.getPaintProperty(Z,F.property)===1&&t.setPaintProperty(Z,F.property,F.value===void 0?null:F.value)}catch{}if(c.clear(),g){g=!1;try{t.getLayer(Mr)&&t.removeLayer(Mr)}catch{}}},U=()=>{if(!(u||d)){d=!0;try{if(ri(t)){A(),S(),S=()=>{},f=null,B(),O(l),a.getTerrain()&&a.setTerrain(null),b=null;return}if(!a.getSource(s)&&t.isStyleLoaded()&&t.addSource(s,{type:"raster-dem",tiles:[e.url],tileSize:e.tileSize,minzoom:e.minzoom,maxzoom:e.maxzoom,encoding:e.encoding,bounds:[...e.bounds]}),i()==="labels"?(B(),O(l)):E(),a.getSource(s)){const M=a.getTerrain();((M==null?void 0:M.source)!==s||(M.exaggeration??1)!==1)&&a.setTerrain({source:s,exaggeration:1}),R(),C()}b=null}catch(M){const Z=M instanceof Error?M.message:String(M);Z!==b&&(b=Z,console.error("[shadow-simulation] MapLibre terrain setup failed",M))}finally{d=!1}}},G=()=>{d||U()};t.on(we.STYLE_DATA,U),t.on(we.TERRAIN,G);let H=ri(t);const X=Dl(t,()=>{const M=ri(t);M!==H&&(H=M,U())});return U(),Object.assign(()=>{if(!u){u=!0,X(),t.off(we.STYLE_DATA,U),t.off(we.TERRAIN,G),A(),S(),f=null,B(),O(l);try{!ri(t)&&o&&a.getSource(o.source)!==void 0?a.setTerrain(o):a.getTerrain()&&a.setTerrain(null)}catch{}}},{refresh:()=>{!u&&!d&&U()}})},Uc=(t,e=!1)=>{if(t.userData[yi.OVERLAY])return;t.castShadow=t.userData.disableShadowCasting!==!0;const r=Array.isArray(t.material)?t.material:[t.material];if(t.receiveShadow=r.some(i=>i.visible&&i.colorWrite),!t.userData.isShadowTerrainSurface)for(const i of r)i.shadowSide??(i.shadowSide=Do),Af(i,e)},Cr=(t,e=!1)=>{t.traverseVisible(r=>{const i=r;!i.isMesh&&!i.isInstancedMesh||Uc(i,e)})},Ap=t=>t.visible&&t.opacity>0,Cp=(t,e)=>{let r=t;for(;r&&r!==e;){if(!r.visible)return!1;r=r.parent}return(Array.isArray(t.material)?t.material:[t.material]).some(Ap)},yo=t=>{t.traverse(e=>{const r=e;if(!r.isMesh&&!r.isInstancedMesh)return;const i=Array.isArray(r.material)?r.material:[r.material];for(const n of i)n.dispose()})},Hc=(t,e,r)=>{t.updateMatrixWorld(!0),r==null||r.updateMatrixWorld(!0);const i=r?new Ur().setFromProjectionMatrix(new ee().multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),r.coordinateSystem,r.reversedDepth):null;let n=e,s=e;const a=new Le;return t.traverseVisible(o=>{var l,u;const c=o;c.userData[yi.OVERLAY]||!c.isMesh&&!c.isInstancedMesh||!((u=(l=c.geometry)==null?void 0:l.getAttribute("position"))!=null&&u.count)||(c.geometry.boundingBox||c.geometry.computeBoundingBox(),c.geometry.boundingBox&&(a.copy(c.geometry.boundingBox).applyMatrix4(c.matrixWorld),!(i&&!i.intersectsBox(a))&&(n=Math.min(n,a.min.y),s=Math.max(s,a.max.y))))}),[n,s]},Ip=(t,e,r,i)=>{var o;const n=e.filter(c=>c.providesTerrain).flatMap(c=>{var u;const l=(u=c.getViewElevationRange)==null?void 0:u.call(c,r);return l?[l]:[]});if(n.length>0)return[Math.min(...n.map(c=>c[0])),Math.max(...n.map(c=>c[1]))];let[s,a]=Hc(t,i,r);for(const c of e){const l=(o=c.getViewElevationRange)==null?void 0:o.call(c,r);l&&(s=Math.min(s,l[0]),a=Math.max(a,l[1]))}return[s,a]},Dp=[[-1,-1],[-1,1],[1,-1],[1,1]],Pp=[[0,1],[1,3],[3,2],[2,0],[4,5],[5,7],[7,6],[6,4],[0,4],[1,5],[2,6],[3,7]],Np=(t,e,r,i)=>{t.updateMatrixWorld(!0);const n=Math.min(e,r),s=Math.max(e,r),a=[-1,1].flatMap(c=>Dp.map(([l,u])=>new T(l,u,c).unproject(t))),o=a.filter(c=>c.y>=n&&c.y<=s).map(c=>c.clone());for(const[c,l]of Pp){const u=a[c],d=a[l],g=d.y-u.y;if(!(Math.abs(g)<=Number.EPSILON))for(const p of[n,s]){const h=(p-u.y)/g;h<0||h>1||o.push(u.clone().lerp(d,h))}}for(const c of o){const l=c.clone().sub(i),u=Math.hypot(l.x,l.z);if(u<=po)continue;const d=po/u;l.x*=d,l.z*=d,c.copy(i).add(l)}return o},Op=(t,e)=>{const r=e.uniformColor!==null&&qe(e.uniformColorMix??1,0,1)>=1;t.traverse(i=>{const n=i;if(!n.userData.isBuilding)return;const s=Array.isArray(n.material)?n.material:[n.material];for(const a of s){e.fullOpacity&&(a.opacity=1,a.transparent=!1,a.depthWrite=!0);const o=a;r&&e.uniformColor&&o.color&&(o.color.set(e.uniformColor),o.vertexColors=!1),a.needsUpdate=!0}})},Lp=(t,e,r)=>{var d;const i=(d=e._originMerc)==null?void 0:d.toLngLat();if(!i)return null;const n=new ls;n.name=`shadow-simulation-copy-${e.id}`;const s=new Map;let a=r,o=!1;const c=()=>{for(const[g,p]of s)g.visible=p;s.clear()},l=()=>{if(o)return;c(),yo(n),n.clear(),e.scene.updateMatrixWorld(!0);const g=[];e.scene.traverse(p=>{var y,f;const h=p;!h.isMesh&&!h.isInstancedMesh||(f=(y=h.geometry)==null?void 0:y.getAttribute("position"))!=null&&f.count&&Cp(h,e.scene)&&g.push(h)});for(const p of g){const h=p.clone(!1);h.name=`${p.name||"mesh"}-shadow-simulation-copy`,h.visible=!0,h.matrixAutoUpdate=!1,h.matrix.copy(p.matrixWorld),h.material=Array.isArray(p.material)?p.material.map(y=>y.clone()):p.material.clone(),Uc(h),s.set(p,p.visible),p.visible=!1,n.add(h)}n.visible=n.children.length>0,Op(n,a)},u={id:`shadow-simulation-generic-${e.id}`,originLngLat:[i.lng,i.lat],root:n,update:()=>{},dispose:()=>{o||(o=!0,c(),yo(n),n.clear())}};return l(),n.visible?(t.addRuntime(u),{runtime:u,sync:l,updateBuildingAppearance(g){a=g,l()}}):(u.dispose(),null)},Fp=t=>{const e=new Le().setFromObject(t.scene);e.isEmpty()?t.center.set(0,0,0):e.getCenter(t.center)},Bp=(t,e,r,i)=>{const n=new Dc(e),a=n.lights[0].target,o=new ls;o.visible=!1,o.userData[yi.OVERLAY]=!0;const c=new Io(void 0,0);c.name=Mp;const l=mf(i);l.mesh.userData[yi.OVERLAY]=!0;const u=new Map;t.traverse(g=>{const p=g;p.isAmbientLight&&u.set(p,p.intensity)});const d={scene:t,frame:e,controller:n,skyLight:c,atmosphericSky:l,ambientLightIntensities:u,lightTarget:a,sunVector:null,sunVectorRoot:o,center:new T,shadowCameraOffsetMeters:Math.max(Fc,r*1.5),shadowAreaMeters:r,sunVectorLengthMeters:r*Bc,sunVectorVisible:!1,shadowQuality:cs,shadowIntensity:1,directionToSun:new T(0,1,0),sunColor:new Ge(16773848),sunIntensity:Wr,receiverWorldPoints:[],minimumElevationMeters:0,maximumElevationMeters:0,dirty:!0};return Cr(t),Fp(d),t.add(c),t.add(l.mesh),d},Up=(t,e)=>{t.scene.traverse(i=>{const n=i;n.isAmbientLight&&!t.ambientLightIntensities.has(n)&&t.ambientLightIntensities.set(n,n.intensity)});const r=e.skyIrradianceCoefficients;if((r==null?void 0:r.length)===t.skyLight.sh.coefficients.length){r.forEach((i,n)=>{t.skyLight.sh.coefficients[n].copy(i)}),t.skyLight.intensity=Wr;for(const i of t.ambientLightIntensities.keys())i.intensity=0;return}t.skyLight.sh.zero(),t.skyLight.intensity=0;for(const[i,n]of t.ambientLightIntensities)i.intensity=n},Un=new ee,So=(t,e,r=16773848,i,n=!0)=>{var a;const s=e.clone().normalize();t.directionToSun.copy(s),t.sunColor.set(r),t.lightTarget.position.copy(t.center);for(const o of t.controller.lights)o.target.position.copy(t.center),o.position.copy(s).multiplyScalar(t.shadowCameraOffsetMeters).add(t.center),o.color.copy(t.sunColor);(a=t.sunVector)==null||a.update(t.center,s,t.sunVectorLengthMeters),t.sunVectorRoot.visible=t.sunVectorVisible&&!!t.sunVector,t.sunIntensity=i??Wr;for(const o of t.controller.lights)o.intensity=t.sunIntensity;t.lightTarget.updateMatrixWorld(!0);for(const o of t.controller.lights)o.updateMatrixWorld(!0);n&&(t.controller.invalidate(),t.dirty=!0)},Hp=t=>{var e;for(const[r,i]of t.ambientLightIntensities)r.intensity=i;t.scene.remove(t.skyLight),t.scene.remove(t.atmosphericSky.mesh),t.scene.remove(t.sunVectorRoot),(e=t.sunVector)==null||e.dispose(),t.atmosphericSky.dispose(),t.controller.dispose()},zp=(t,e={})=>{var Ys,qs,Ks,Xs,$s,Qs,Zs;const{shadowAreaMeters:r,terrain:i,mapLibreTerrain:n,terrainQuality:s=Ve.MAX}=e,a=El();let o=i;const c=r??Sp,l=t.getLight();let u=!0;const d=()=>{const m=Te(t).filter(v=>v.providesTerrain===!0);return m.length>0&&m.every(v=>v.mapStyleProjectionBlend==="overlay")?"labels":"opaque"},g=Ep(t,n??Oo,()=>u,d,a?Ve.STANDARD:s),p=()=>{M.setMeshLabelStyle(d()==="labels")};let h=null,y={fullOpacity:!0,uniformColor:null,uniformColorMix:0,textureSaturation:1,textureColorCorrection:!0},f=1,S=null;const b=()=>{var m,v;return S??((v=(m=Te(t).find(w=>w.providesTerrain===!0))==null?void 0:m.getErrorTarget)==null?void 0:v.call(m))??Bl};let A=a?dn:void 0;const C=new WeakMap;let R=null,I={useTransmittanceLut:!0,useIrradianceLut:!0},E=!1,O=!1,B=Number.NEGATIVE_INFINITY,U=null,G=null,H=null,X=new Ge(((Ys=o==null?void 0:o.material)==null?void 0:Ys.color)??Lo);const fe=()=>{var m,v,w,x;if(u){H==null||H(),H=null,(v=(m=M.layer).setMapStyleProjectionVisible)==null||v.call(m,!0);return}(x=(w=M.layer).setMapStyleProjectionVisible)==null||x.call(w,!1),H??(H=Pl(t))},M=Al(t),Z=(m,v)=>{var w,x;return{observer:{longitude:m[0],latitude:m[1],altitudeMeters:0},scenePosition:((x=(w=M.layer).projectLngLatToScene)==null?void 0:x.call(w,[m[0],m[1]],fi))??new T(0,fi,0),sceneFromLocal:v}},F=((Ks=(qs=M.layer).getLocalFrame)==null?void 0:Ks.call(qs))??null;let te=(F==null?void 0:F.revision)??0,$=F?Z(F.lngLat,F.sceneFromLocalRotation):Z([t.getCenter().lng,t.getCenter().lat]);const de=()=>{var m;return((m=xe==null?void 0:xe.localFrame)==null?void 0:m.currentToReference)??(F==null?void 0:F.currentToReference)??Un},be=new ia,P=new Ci,J=m=>{const v=m.renderCamera,{localFrame:w}=m;if(!w||w.currentToReference.equals(Un))return v;const x=v instanceof ia?be.copy(v,!1):P.copy(v,!1);return x.matrixAutoUpdate=!1,x.matrixWorldAutoUpdate=!1,x.matrixWorld.multiplyMatrices(w.currentToReference,v.matrixWorld),x.matrixWorld.decompose(x.position,x.quaternion,x.scale),x.matrix.copy(x.matrixWorld),x.matrixWorldInverse.multiplyMatrices(v.matrixWorldInverse,w.referenceToCurrent),x},Pe=(m,v)=>{if(m!=null&&m.mountsOnLocalFrame||v.length===0)return v;const w=de();if(w.equals(Un))return v;const x=new Le;return v.map(V=>(x.min.set(...V.minimum),x.max.set(...V.maximum),x.applyMatrix4(w),{...V,minimum:[x.min.x,x.min.y,x.min.z],maximum:[x.max.x,x.max.y,x.max.z]}))},Me=new cf;let dt=()=>{},ce=m=>dt(m),ht=null,Ce=0;const Ue=m=>{if(!o)return null;const v=t.getCenter(),{errorTargetPixels:w,motionErrorTargetPixels:x,shadowLevelOffset:V,minimumLevel:L,maximumLevel:N,maxSelectionTiles:k,requestConcurrency:re,maxCacheBytes:le,maxCachedMeshes:Se,maxCachedMeshBytes:pe,meshSegments:ye,maximumMeshSegments:W,noDataHeightMeters:_e,heightRangeMeters:qt,material:Kt,...ei}=Nl(o,a);return Ol(`${Tp}-${++Ce}`,ei,m??[v.lng,v.lat],{errorTargetPixels:w??hn,motionErrorTargetPixels:x,shadowLevelOffset:V,minimumLevel:L,maximumLevel:N,maxSelectionTiles:k,requestConcurrency:re,maxCacheBytes:le,maxCachedMeshes:Se,maxCachedMeshBytes:pe,meshSegments:ye??ei.tileSize,maximumMeshSegments:W,noDataHeightMeters:_e,heightRangeMeters:qt,material:Kt,receivesMapStyleTexture:!0,onContentChanged:St=>ce(St),onError:St=>{const yr=St instanceof Error?St.message:String(St);yr!==ht&&(ht=yr,console.error("[shadow-simulation] Raster DEM terrain runtime failed",St))}})},ve=()=>Te(t).some(m=>m.providesTerrain===!0),Mt=()=>Te(t).every(m=>{var v,w;return!m.providesTerrain||(((v=m.hasRenderableContent)==null?void 0:v.call(m))??((w=m.isMainViewReady)==null?void 0:w.call(m))??!0)});let Re=Te(t).filter(m=>m.providesTerrain),Y=ve()?null:Ue(),zt=Y===null;Y&&M.layer.addRuntime(Y);const zc=(($s=(Xs=M.layer).getLocalFrameGroup)==null?void 0:$s.call(Xs))??M.layer.getScene(),_=Bp(M.layer.getScene(),zc,c,X),kc=new T;let jr=0,Yr=0;const He=Of({getRequest:()=>{var w;if(E||!o||!Y||!zt||Sr(t)||Ie||O||Qe!==0||!rt||!Wt||!xe)return null;const m=(w=Y.getIdlePrefetchAvailability)==null?void 0:w.call(Y);if(!(m!=null&&m.ready))return null;const v=Y;return{key:JSON.stringify([Ce,jr,Yr,xe.renderCamera.projectionMatrix.elements,xe.renderCamera.matrixWorldInverse.elements,xe.viewport.x,xe.viewport.y]),run:async x=>{var L;if(await v.prefetchIdleTerrain(x),x.aborted||!Oe()||!K||!xe||!M.layer.runIdleRender||ft.size>0||pt().some(N=>N!==v&&N!==Yt)||Rt.some(({id:N})=>!/^\d+:[-\d]+:[-\d]+$/.test(N)))return;const V=((L=v.getIdleShadowRegions)==null?void 0:L.call(v))??[];V.length===0||!v.prepareIdleShadowRegion||(await K.prewarm({cells:Mu(Rt),frame:xe,planningCamera:J(xe),lighting:{directionToSun:_.directionToSun,color:_.sunColor,intensity:_.sunIntensity,shadowIntensity:_.shadowIntensity},targetPixels:Lt[_.shadowQuality].shadowTexelErrorPixels,samples:vr(),signal:x,prepare:async(N,k)=>{const re=Ru(N.receiverBounds,V);return re===null?{covered:!1,group:null,isCurrent:()=>!1,dispose:()=>{}}:v.prepareIdleShadowRegion({receiverBounds:N.receiverBounds,casterBounds:N.casterBounds,terrainLevel:re},k)}}),x.aborted||jt())}}}});let mt=null,ji="";const qr=(m,v,w)=>{const x=`${m}:${v}`;x!==ji&&(ji=x,console.error(`[SHADOW] Atmospheric update rejected; retaining last valid frame (${m}: ${v})`,{phase:m,reason:v,...w}))},Vc=()=>{ji=""},ze=()=>{He.cancel(),jr+=1,Yr+=1},As=m=>{U=null,B=performance.now();const v=`#${m.color.getHexString()}`;if(O||M.setLocationLabelColor(v),!t.isStyleLoaded())return;const w=[1.5,m.azimuthDegrees,90-m.elevationDegrees],x=qe(m.relativeIntensity,0,1),V=t.getLight(),L=V.position;V.anchor==="map"&&Array.isArray(L)&&L.length===w.length&&L.every((N,k)=>N===w[k])&&V.color===v&&V.intensity===x||t.setLight({anchor:"map",position:w,color:v,intensity:x})},Kr=()=>{G!==null&&(globalThis.clearTimeout(G),G=null);const m=U;m&&As(m)},Cs=m=>{if(U=m,!O&&!Ie){Kr();return}const v=performance.now()-B;if(v>=go){Kr();return}G===null&&(G=globalThis.setTimeout(()=>{G=null;const w=U;w&&As(w)},go-v))},kt=m=>{const v={longitude:$.observer.longitude,latitude:$.observer.latitude,altitudeMeters:fi},w=tf(m.instant,v,$);if(w)return qr("sunlight input",w,{observer:v,skyReference:$}),R;Me.ensure(()=>{if(E||!h)return;ze();const L=kt(h);L&&Cs(L),t.triggerRepaint()},I),Me.ensureSky(()=>{E||!h||(ze(),kt(h),t.triggerRepaint())});let x;try{x=Me.evaluate(m.instant,v,I,$)}catch(L){return qr("sunlight generation","generator threw",{observer:v,error:L}),R}const V=rf(x);return V?(qr("sunlight output",V,{observer:v,sample:x}),R):(Vc(),R=x,_.atmosphericSky.update(x.skyFrame,Me.skyTextures),Up(_,x),So(_,x.directionToSun.clone().transformDirection(de()),x.radiance,Wr),x)};dt=m=>{E||(He.cancel(),K==null||K.invalidateContent(m),_.controller.invalidate(),_.dirty=!0)};const ft=new Map,pt=()=>{const m=Te(t);return Y&&!m.includes(Y)?[Y,...m]:m};let Vt=null,gt=null,We=null,vt=null,Is=[];const Ds=()=>pt().flatMap(m=>{var v;return Pe(m,((v=m.getActiveTileVolumes)==null?void 0:v.call(m))??[])}),ur=()=>Vt??Ds(),Ps=(m,v=mi*4)=>{if(!ve())return;const w=ur(),x=b(),V=m?co(m,w,x):Math.max(x,...w.filter(({loadReason:N})=>N!=="shadow").map(({errorPixels:N})=>N).filter(N=>Number.isFinite(N)));let L=1/0;for(const N of w){if(N.loadReason==="shadow"||m&&(N.minimum[0]>=m.max.x||N.maximum[0]<=m.min.x||N.minimum[2]>=m.max.z||N.maximum[2]<=m.min.z))continue;const k=N.geometricError,re=N.errorPixels;k!==void 0&&re!==void 0&&Number.isFinite(k)&&Number.isFinite(re)&&k>0&&re>0&&(L=Math.min(L,k/re))}return rp({stageErrorPixels:V,targetErrorPixels:x,groundTexelTargetMeters:v,finalBiasMeters:mi,maximumCoarseBiasMeters:wp,metersPerPixel:Number.isFinite(L)?L:0})},Ns=m=>{const v=Vt,w=gt,x=We,V=vt;if(Vt=v??Ds(),gt=w??new Map,We=x??new Map,vt=V??new Map,!v){const L=Jf(Is,Vt);L.length>0&&(K==null||K.invalidateContent(L),mr.length=0),Is=Vt}try{return m()}finally{Vt=v,gt=w,We=x,vt=V}};let Ie=!1,Dt=null,dr=null,Yi=Number.NEGATIVE_INFINITY,qi=!1;const Os=new WeakMap,Gc=m=>{var x,V,L;if(!m)return"none";const v=t.getCenter(),w=t.getCanvas();return[Math.round(v.lng*1e7),Math.round(v.lat*1e7),Math.round((((x=t.getZoom)==null?void 0:x.call(t))??0)*1e4),Math.round((((V=t.getBearing)==null?void 0:V.call(t))??0)*1e3),Math.round((((L=t.getPitch)==null?void 0:L.call(t))??0)*1e3),`${w.clientWidth||w.width}x${w.clientHeight||w.height}`,(h==null?void 0:h.azimuthDegrees)??"no-sun",(h==null?void 0:h.elevationDegrees)??"no-sun",_.shadowQuality].join(";")},hr=m=>{var k,re,le,Se,pe,ye;if(O){const W=performance.now();if(W-Yi<Rp){qi=!0;return}Yi=W}dr=m,qi=!1;const v=Gc(m),w=xe==null?void 0:xe.renderCamera,x=m&&w?new Ur().setFromProjectionMatrix(new ee().multiplyMatrices(w.projectionMatrix,w.matrixWorldInverse),w.coordinateSystem,w.reversedDepth):null,V=new Le,L=x?Pe(Y,((k=Y==null?void 0:Y.getActiveTileVolumes)==null?void 0:k.call(Y))??[]).filter(W=>(V.min.fromArray(W.minimum),V.max.fromArray(W.maximum),x.intersectsBox(V))):void 0,N=[...Te(t),...Y?[Y]:[]];for(const W of new Set(N)){if((re=W.setShadowStagePresentationGate)==null||re.call(W,!1),!W.providesTerrain){W===Y?(le=W.setErrorTarget)==null||le.call(W,(o==null?void 0:o.errorTargetPixels)??hn):(Se=W.setErrorTargetOverride)==null||Se.call(W,S),(pe=W.setShadowView)==null||pe.call(W,m?{...m,terrainReceivers:L}:null);continue}Os.get(W)!==v&&(Os.set(W,v),(ye=W.setShadowView)==null||ye.call(W,m))}},Ki=m=>{var v;Dt=m;for(const w of new Set([...Te(t),...Y?[Y]:[]]))(v=w.setLiveShadowView)==null||v.call(w,m);Ie||hr(m)};let Xi=Number.NEGATIVE_INFINITY,$e=null,yt=null,$i=null,Qi="",rt=!a;a&&(_.shadowQuality=$t.FPS_120);let Zi={},Ne=ln(un(Zi,a),_.shadowQuality),it=null;const Xr=()=>({format:Ne.shadowBufferFormat,msaaSamples:Ne.shadowBufferLayout===na.TILED?0:pp(Ne,(Ne.shadowBufferFormat===Qt.SDR_8?it==null?void 0:it.sdrSamples:it==null?void 0:it.hdrSamples)??[0,2,4])});let Gt=Xr(),Qe=0,Ji=!1,$r=!1;const mr=[];let Ze=!0,en=[],Ls="",nt=Fn(_.shadowQuality),Qr=Number.POSITIVE_INFINITY,Wt=!0,Pt=lo(4096);_.controller.setMaxShadowMapSize(Pt.maxShadowMapSize);let xe=null,K=null,tn=null,Rt=[];const Oe=()=>Ne.shadowBufferLayout===na.TILED,fr=()=>{K==null||K.dispose(),K=null,tn=null,Rt=[]},jt=()=>{if(E||!yt||!mo(t))return;const m=performance.now()-Xi;if(m<vo){$e??($e=globalThis.setTimeout(()=>{$e=null,jt()},vo-m));return}$e!==null&&(globalThis.clearTimeout($e),$e=null);const v=Ne.shadowBufferLayout,w=Ne.shadowSunDiscSamples,x=Oe()?(K==null?void 0:K.stats)??null:null,V=JSON.stringify([v,w,x]);$i===yt&&Qi===V||(Xi=performance.now(),$i=yt,Qi=V,vp(t,{...yt,bufferLayout:v,sunDiscSamples:w,tiledStats:x}))};_.controller.setSoftSun(rt);const pr=(m,v)=>Math.round(m/v)*v,Wc=m=>{var w,x,V,L;const v=t.getCenter();return[pr(v.lng,1e-7),pr(v.lat,1e-7),pr(((w=t.getZoom)==null?void 0:w.call(t))??0,1e-4),pr(((x=t.getBearing)==null?void 0:x.call(t))??0,.001),pr(((V=t.getPitch)==null?void 0:V.call(t))??0,.001),`${m.viewport.x}x${m.viewport.y}`,(L=m.cssViewport)==null?void 0:L.toArray().join("x")].join(";")},gr=(m=!0,v=!0,w)=>{var re,le,Se,pe;const x=t.getCenter(),V=(Y==null?void 0:Y.getElevation(x.lng,x.lat))??0,L=(le=(re=M.layer).projectLngLatToScene)==null?void 0:le.call(re,[x.lng,x.lat],V);if(!L){h&&kt(h),v&&t.triggerRepaint();return}_.center.copy(L).applyMatrix4(de()),mt??(mt=Hc(_.scene,L.y));const[N,k]=mt;if(w){const ye=Np(J(w),N,k,_.center);if(ye.length>0){const W=new Le().setFromPoints(ye).getSize(new T),_e=Math.max(...ye.map(qt=>qt.distanceTo(_.center)));_.sunVectorLengthMeters=Math.min(W.x,W.z)*Bc,_.shadowAreaMeters=Math.max(r??0,xp,_e*2),en=ye}}else Ze=!0;if(_.shadowCameraOffsetMeters=Math.max(Fc,_.shadowAreaMeters*1.5),_.receiverWorldPoints=en,_.minimumElevationMeters=N,_.maximumElevationMeters=k,_.dirty=!0,h&&(m||!R))kt(h);else{_.lightTarget.position.copy(_.center);for(const ye of _.controller.lights)ye.target.position.copy(_.center),ye.target.updateMatrixWorld(!0);(Se=_.sunVector)==null||Se.root.position.copy(_.center),(pe=_.sunVector)==null||pe.root.updateMatrixWorld(!0)}v&&t.triggerRepaint()},Yt={id:"shadow-simulation-controller",originLngLat:[t.getCenter().lng,t.getCenter().lat],root:new ls,updatePriority:bp,update(m){var St,yr;xe=m;const{localFrame:v}=m;v&&v.revision!==te&&(te=v.revision,$=Z(v.lngLat,v.sceneFromLocalRotation),R&&(R=af(R,$),_.atmosphericSky.update(R.skyFrame,Me.skyTextures)));const w=(yr=(St=M.layer).getRenderer)==null?void 0:yr.call(St);w&&!it&&(it=fp(w),Gt=Xr(),Pt=lo(Math.min(it.maxTextureSize,it.maxRenderbufferSize)),_.controller.setMaxShadowMapSize(Pt.maxShadowMapSize)),Qr=mp(Pt.maxAccumulationPixels,Gt),Wt=m.viewport.x*m.viewport.y<=Qr,nt=Bn(nt,performance.now(),Ie,{enabled:Ne.shadowAdaptiveQuality,allowCadenceReduction:!Oe()});const x=Math.max(0,m.lodCamera.position.y-m.lookTarget.y),V=fi+x,L=$.scenePosition.y+x;![...m.lodCamera.matrixWorld.elements,...m.lodCamera.projectionMatrix.elements].every(Number.isFinite)||!Number.isFinite(V)||!Number.isFinite(L)?qr("render camera","local Three.js camera matrix or altitude is invalid",{altitudeMeters:V,cameraHeightAboveTargetMeters:x,matrixWorld:m.lodCamera.matrixWorld.elements,projectionMatrix:m.lodCamera.projectionMatrix.elements}):(_.atmosphericSky.updateViewCamera(m.lodCamera),_.atmosphericSky.updateObserverScenePosition(kc.set($.scenePosition.x,L,$.scenePosition.z)));const k=Wc(m);if((Ze||k!==Ls)&&(performance.now(),Ls=k,mt=Ie?mt??[_.minimumElevationMeters,_.maximumElevationMeters]:Ip(_.scene,Te(t),m.renderCamera,_.center.y),gr(!1,!1,m),Ze=!1),!_.dirty)return;_.sunVectorVisible&&_.sunVector&&_.sunVector.root.cone.position.y!==_.sunVectorLengthMeters&&So(_,_.directionToSun,_.sunColor,_.sunIntensity),jr+=1;const re=ur(),le=re.flatMap(({minimum:Xt,maximum:wt})=>Uo(J(m),new Le(new T(...Xt),new T(...wt))));if(_.receiverWorldPoints=le.length>0?le:en,_.receiverWorldPoints.length===0||!h){Ki(null),yt=null,On(t);return}if(Oe()){Rt=bu(re.filter(({loadReason:wt})=>wt!=="shadow").map(({id:wt,minimum:ti,maximum:an,receiverObjectId:on})=>({id:wt,receiverObjectId:on,bounds:new Le(new T(...ti),new T(...an))})));const Xt=wu(Rt,J(m));Xt.length>0&&(_.receiverWorldPoints=[...Xt])}const Se=uo(Pt.maxShadowMapSize,_.shadowQuality,m.viewport.x*m.viewport.y,Ie?nt.depthScale:1),pe=m.cssViewport??m.viewport,ye=uo(Pt.maxShadowMapSize,_.shadowQuality,pe.x*pe.y,Ie?nt.depthScale:1),W=_.controller.update({maxReceiverBiasMeters:Ps(),receiverWorldPoints:_.receiverWorldPoints,receiverAnchorWorldPosition:_.center,minimumElevationMeters:_.minimumElevationMeters,maximumElevationMeters:_.maximumElevationMeters,directionToSun:_.directionToSun,color:_.sunColor,intensity:_.sunIntensity,shadowIntensity:_.shadowIntensity,quality:_.shadowQuality,mapTexelBudget:Se,casterMapTexelBudget:ye,groundTexelFit:Ne.shadowGroundTexelFit,stabilizeMapSize:Ie});if(_.dirty=!1,!W){Ki(null),yt=null,On(t);return}const _e=W.camera,qt=_.controller.lights[0].shadow.camera,Kt=R==null?void 0:R.skyFrame.directionToSunECEF;Ki({camera:qt,directionToSunECEF:Kt?[Kt.x,Kt.y,Kt.z]:void 0,casterAngularRadiusRadians:rt?Pr:0,shadowMapSize:{width:(_e.rightMeters-_e.leftMeters)/W.casterMetersPerTexel[0],height:(_e.topMeters-_e.bottomMeters)/W.casterMetersPerTexel[1]}});const ei=mo(t);if(_e&&ei){m.lodCamera.updateMatrixWorld(!0),m.lodCamera.updateProjectionMatrix();const Xt=pt().flatMap(wt=>{var ti;return(((ti=wt.getActiveTileVolumes)==null?void 0:ti.call(wt))??[]).map(({id:an,loadReason:on,minimum:Qc,maximum:Zc})=>({id:an,loadReason:on,minimum:Qc,maximum:Zc}))});yt={bufferLayout:Ne.shadowBufferLayout,sunDiscSamples:Ne.shadowSunDiscSamples,tiledStats:null,cameraRangeMeters:qt.position.distanceTo(_.controller.lights[0].target.position),leftMeters:_e.leftMeters,rightMeters:_e.rightMeters,bottomMeters:_e.bottomMeters,topMeters:_e.topMeters,nearMeters:_e.nearMeters,farMeters:_e.farMeters,projectionMatrixElements:_e.projectionMatrixElements,shadowMapWidth:_e.shadowMapWidth,shadowMapHeight:_e.shadowMapHeight,minimumElevationMeters:_.minimumElevationMeters,maximumElevationMeters:_.maximumElevationMeters,sceneAnchorPositionElements:_.center.toArray(),mainCamera:{viewMatrixElements:[...m.lodCamera.matrixWorldInverse.elements],projectionMatrixElements:[...m.lodCamera.projectionMatrix.elements],nearMeters:m.lodCamera.near,farMeters:m.lodCamera.far,viewportWidth:m.viewport.x,viewportHeight:m.viewport.y},tileVolumes:Xt,shadow:W,atmosphericSunlight:R?{azimuthDegrees:R.azimuthDegrees,elevationDegrees:R.elevationDegrees,relativeIntensity:R.relativeIntensity,color:`#${R.color.getHexString()}`,transmittanceReady:R.atmosphericTransmittanceReady,irradianceReady:R.atmosphericIrradianceReady}:null},jt()}},dispose:()=>{}};M.layer.addRuntime(Yt);const vr=()=>Ne.shadowSunDiscSamples,Fs=()=>{var w,x;if(!Oe()||!xe||_.directionToSun.y<=0)return null;const m=(x=(w=M.layer).getRenderer)==null?void 0:x.call(w);if(!m)return null;let v=!1;if(!K||tn!==m){const V=Rt;fr(),Rt=V,tn=m,K=new Qf(_.scene,m,{light:_.controller.lights[0],sky:_.atmosphericSky.mesh,overlay:_.sunVectorRoot,frame:_.frame,maximumMapSize:Pt.maxShadowMapSize,isCorridorReady:(L,N,k)=>{const re=Nn(L,N,k),le=gt==null?void 0:gt.get(re);if(le!==void 0)return le;const Se=pt().every(pe=>{var ye;return((ye=pe.isShadowRegionReady)==null?void 0:ye.call(pe,L,N,k))??(pe.getRequestDemand?pe.getRequestDemand()===0:!pe.providesTerrain||!Sr(t))});return gt==null||gt.set(re,Se),Se},receiverStageError:L=>{const N=Nn(L),k=vt==null?void 0:vt.get(N);if(k!==void 0)return k;const re=co(L,ur(),ve()?b():(o==null?void 0:o.errorTargetPixels)??hn);return vt==null||vt.set(N,re),re},receiverBiasLimit:(L,N)=>Ps(L,N)??mi,onPresentedPages:(L,N)=>{var re;const k=ep(ur(),N.map(({id:le,receiverBounds:Se})=>({id:le,bounds:Se})),L.map(({id:le,receiverBounds:Se})=>({id:le,bounds:Se})));if(k.length!==0)for(const le of pt())(re=le.acknowledgeShadowStage)==null||re.call(le,k)},corridorRevision:(L,N,k)=>{var ye;const re=Nn(L,N,k),le=We==null?void 0:We.get(re);if(le!==void 0)return le;const Se=[];for(const W of pt()){if(W===Yt)continue;const _e=(ye=W.getShadowRegionRevision)==null?void 0:ye.call(W,L,N,k);if(!_e)return We==null||We.set(re,null),null;Se.push(JSON.stringify([W.id,_e]))}const pe=Se.length?JSON.stringify(Se.sort()):null;return We==null||We.set(re,pe),pe},dateTimeKey:()=>(h==null?void 0:h.instant.toISOString())??null,worldBasis:()=>{const L=M.layer.projectSceneToLngLat([0,0,0]);if(!L)throw new Error("Shared scene origin is not initialized");const N=Ql.MercatorCoordinate.fromLngLat(L,0);return tp(N.x,N.y,N.meterInMercatorCoordinateUnits())},requestRepaint:()=>t.triggerRepaint(),visualEpoch:()=>Yr,auditCorridors:L=>{const N=ur(),k=pt();return L.map(({id:re,casterBounds:le,receiverBounds:Se})=>ip({id:re,casterBounds:le,sunElevationDegrees:(h==null?void 0:h.elevationDegrees)??0,volumes:N,regions:k.flatMap(pe=>{var W;const ye=(W=pe.getShadowRegionDiagnostics)==null?void 0:W.call(pe,le,void 0,Se);return ye?[ye]:[]})}))},runIdleRender:L=>{var N,k;return((k=(N=M.layer).runIdleRender)==null?void 0:k.call(N,L))??!1}}),v=!0}return!Ie||v?K.update(Rt,xe,{maxReceiverBiasMeters:ve()?mi:void 0,directionToSun:_.directionToSun,color:_.sunColor,intensity:_.sunIntensity,shadowIntensity:_.shadowIntensity},Lt[_.shadowQuality].shadowTexelErrorPixels,J(xe)):K.updatePresentation(xe,J(xe)),K},jc=Zf(),Zr=()=>Oe()&&jc(pt()),Bs={onSettled:He.onSettled,onPresented:()=>{var v;const m=performance.now();for(const w of Te(t))(v=w.onShadowPresented)==null||v.call(w,m)},get options(){return Gt},get maxRenderTargetPixels(){return Qr},get rounds(){return vr()},epoch:()=>jr,visualEpoch:()=>Yr,pending:()=>Wt&&rt&&!O&&(!zt||Zr()||!Oe()&&!Mt()||!Oe()&&Sr(t)||Ie||!Oe()&&Qe!==0),active:()=>Wt&&rt&&zt&&!Zr()&&(Oe()||Mt())&&(Oe()||!Sr(t))&&!Ie&&!O&&(Oe()||Qe===0)&&h!==null&&Dt!==null&&_.receiverWorldPoints.length>0,retainSettledFrame:()=>Wt&&rt&&h!==null&&Dt!==null&&_.receiverWorldPoints.length>0,prepareRound:m=>{Oe()||_.controller.applySunDiscSample(m,vr())},finishRound:()=>_.controller.restoreSunDiscCenter(),get renderProgressive(){if(Oe())return(m,v)=>!rt||O||!Wt?null:Ns(()=>{if(Zr())return null;const w=Fs();if(!w)return null;const x=w.renderProgressive(m,{...v,samples:vr(),maxRenderTargetPixels:Qr,options:Gt});return jt(),x})},renderScene:(m,v)=>!rt||O||!Oe()?!1:Ns(()=>{if(Zr())return!1;const w=Fs();if(!w)return!1;const x=w.render(m,v,vr(),!Ie);return jt(),x})};(Zs=(Qs=M.layer).setAccumulationController)==null||Zs.call(Qs,Bs);const Jr=()=>{mt=null,Ze=!0,gr()};ce=m=>{dt(m),Jr()};const Us=()=>{He.cancel(),K==null||K.pausePending(),nt=Bn(nt,performance.now(),!1),Ie=!0,Ze=!0},rn=()=>{He.cancel(),Ze=!0},Hs=()=>{Ie=!1,nt=Bn(nt,performance.now(),!1),Ji?(Ji=!1,sn()):Jr(),R&&(U=R,Kr()),dr!==Dt&&hr(Dt)},zs=()=>{rn(),t.triggerRepaint()};t.on(we.MOVE_START,Us),t.on(we.MOVE,rn),t.on(we.MOVE_END,Hs),t.on(we.RESIZE,zs);const nn=m=>{m.ready.then(v=>{!v||E||Y!==m||(zt=!0,Jr(),t.triggerRepaint())})},ks=()=>{var x,V,L,N;const m=Te(t).filter(k=>k.providesTerrain);if(m.length!==Re.length||m.some(k=>!Re.includes(k))){Re=m,fr(),(V=(x=M.layer).setAccumulationController)==null||V.call(x,null),(N=(L=M.layer).setAccumulationController)==null||N.call(L,Bs);for(const k of _.controller.lights)k.shadow.map&&(Ct(k.shadow.map),k.shadow.map=null);ze()}const v=ve();if(!o)return;if(v){He.cancel(),zt=!0;const k=Y;Y=null,k&&M.layer.hasRuntime(k.id)&&M.layer.removeRuntime(k.id),mt=null,Ze=!0;return}if(Y)return;const w=Ue();w&&(He.cancel(),zt=!1,Y=w,w.setMaterialColor(`#${X.getHexString()}`),w.setShadowView(dr),M.layer.addRuntime(w),nn(w),mt=null,Ze=!0)};Y&&nn(Y),gr();const Vs=()=>{if(E)return;const m=new Set(Ll(t));for(const[v,w]of ft)m.has(v)||(M.layer.removeRuntime(w.runtime.id),ft.delete(v));for(const v of m){const w=ft.get(v);if(w){w.sync();continue}if(!v.scene)continue;const x=Lp(M.layer,v,y);x&&ft.set(v,x)}Cr(M.layer.getScene(),ve()),Jr(),t.triggerRepaint()},Yc=Cl(t,Vs);Vs(),p();const sn=()=>{var m,v,w;if(!E){Qe&&(window.clearTimeout(Qe),Qe=0),$r?K==null||K.invalidateContent():mr.length>0&&(K==null||K.invalidateContent(mr)),$r=!1,mr.length=0,He.cancel(),ks(),g.refresh(),p();for(const x of Te(t))x.providesTerrain&&((m=x.setErrorTargetOverride)==null||m.call(x,S),(!C.has(x)||C.get(x)!==A)&&((v=x.setCacheBudget)==null||v.call(x,A),C.set(x,A))),(w=x.setShadowSimulationStyle)==null||w.call(x,y);hr(dr),ft.size>0&&Cr(M.layer.getScene(),ve()),_.controller.invalidate(),_.dirty=!0,Ze=!0,mt=null,t.triggerRepaint()}},qc=Fo(t,m=>{if(E)return;const v=m==null?void 0:m.bounds;if(m===void 0){const w=Te(t).filter(x=>x.providesTerrain);(w.length!==Re.length||w.some(x=>!Re.includes(x)))&&(ks(),g.refresh(),p())}for(const w of(m==null?void 0:m.roots)??[])Cr(w,ve());if((v==null?void 0:v.length)===0){t.triggerRepaint();return}if(v===void 0?$r=!0:v.length>0&&mr.push(...v.map(w=>w.clone())),He.cancel(),v===void 0&&pt().some(w=>w!==Yt&&!w.getActiveTileVolumes)&&($r=!0),Ie){Ji=!0,t.triggerRepaint();return}t.triggerRepaint(),!Qe&&(Qe=window.setTimeout(()=>{Qe=0,sn()},_p))}),Kc=Il(t,()=>{Sr(t)&&He.cancel(),E||t.triggerRepaint()});sn();const Gs=m=>{const v=R??kt(m);v&&Cs(v)},Xc=m=>{(h==null?void 0:h.instant.getTime())!==m.instant.getTime()&&(K==null||K.cancelPending(!0),ze(),h=m,gr(),Gs(m))},Ws=()=>{E||h&&Gs(h)};t.on(we.STYLE_LOAD,Ws);const js=()=>{Xi=Number.NEGATIVE_INFINITY,_.dirty=!0,t.triggerRepaint()},$c=gp(t,m=>{m?js():($e!==null&&globalThis.clearTimeout($e),$e=null,yt=null,$i=null,Qi="")});return{updateSolarPosition:Xc,updateMeshCacheBudget(m){var w;a&&(m=Math.min(m??dn,dn));const v=m!==void 0&&Number.isFinite(m)&&m>0?m:void 0;if(!(A===v&&Te(t).filter(x=>x.providesTerrain).every(x=>C.has(x)&&C.get(x)===v))){A=v;for(const x of Te(t))x.providesTerrain&&((w=x.setCacheBudget)==null||w.call(x,v),C.set(x,v));t.triggerRepaint()}},updateTerrain(m){if(o===m||(He.cancel(),o=m,!m||ve()))return;const v=Y,w=Ue(v==null?void 0:v.originLngLat);w&&(w.setMaterialColor(`#${X.getHexString()}`),w.setShadowView(dr),v&&w.adoptPresentation(v),Y=w,M.layer.addRuntime(w),v&&M.layer.removeRuntime(v.id),nn(w),mt=null,Ze=!0,ze(),ce(),t.triggerRepaint())},updateTerrainColor(m){const v=new Ge(m);X.equals(v)||(ze(),Y==null||Y.setMaterialColor(m),_.atmosphericSky.updateGroundAlbedo(v),X=v)},updateMeshErrorTarget(m){var v;if(S!==m){S=m;for(const w of Te(t))(v=w.setErrorTargetOverride)==null||v.call(w,m);t.triggerRepaint()}},updateBuildingAppearance(m){var v;if(!(y.fullOpacity===m.fullOpacity&&y.uniformColor===m.uniformColor&&(y.uniformColorMix??1)===(m.uniformColorMix??1)&&(y.textureSaturation??1)===(m.textureSaturation??1)&&(y.textureColorCorrection??!1)===(m.textureColorCorrection??!1))){ze(),K==null||K.invalidateContent(),y=m;for(const w of ft.values())w.updateBuildingAppearance(m);for(const w of Te(t))(v=w.setShadowSimulationStyle)==null||v.call(w,m);Cr(M.layer.getScene(),ve()),_.controller.invalidate(),_.dirty=!0,t.triggerRepaint()}},updateShadowQuality(m){a&&(m=$t.FPS_120),_.shadowQuality!==m&&(ze(),_.shadowQuality=m,Ne=ln(un(Zi,a),m),Gt=Xr(),nt=Fn(m),_.dirty=!0,gr(),_.controller.invalidate())},updateRenderQuality(m){m=un(m,a);const v=Ne,w=ln(m,_.shadowQuality);Zi={...m},Ne=w;const x=v.shadowAdaptiveQuality!==w.shadowAdaptiveQuality;(x||v.shadowBufferLayout!==w.shadowBufferLayout)&&(nt=Fn(_.shadowQuality)),!(!x&&v.shadowBufferLayout===w.shadowBufferLayout&&v.shadowBufferFormat===w.shadowBufferFormat&&v.shadowSunDiscSamples===w.shadowSunDiscSamples&&v.shadowMsaaSamples===w.shadowMsaaSamples&&v.shadowGroundTexelFit===w.shadowGroundTexelFit)&&(Gt=Xr(),ze(),v.shadowBufferLayout!==w.shadowBufferLayout&&(fr(),Ze=!0),(x||v.shadowGroundTexelFit!==w.shadowGroundTexelFit||v.shadowBufferLayout!==w.shadowBufferLayout)&&(_.dirty=!0,_.controller.invalidate()),jt(),t.triggerRepaint())},updateSoftSunShadows(m){m=m&&!a,rt!==m&&(ze(),rt=m,fr(),_.controller.setSoftSun(m),_.controller.invalidate(),_.dirty=!0,t.triggerRepaint())},updateTimeAnimating(m){O!==m&&(He.cancel(),O=m,m&&(K==null||K.pausePending()),m||(Kr(),Yi=Number.NEGATIVE_INFINITY,qi&&!Ie&&hr(Dt),_.dirty=!0),t.triggerRepaint())},refreshProjectionDebug:js,updateShadowIntensity(m){const v=qe(m,0,1);if(f!==v){ze(),f=v,_.shadowIntensity=f;for(const w of _.controller.lights)w.shadow.intensity=f;t.triggerRepaint()}},updateMapStyleContentVisibility(m){u!==m&&(u=m,fe(),t.triggerRepaint())},updateMapStyleElevationVisibility(m,v){M.setMapStyleElevationVisibility(m,v),t.triggerRepaint()},updateMapStyleLabelOverlayVisibility(m){M.setPointLabelOverlayVisible(m),t.triggerRepaint()},updateSunDebugVectorVisibility(m){_.sunVectorVisible!==m&&(ze(),_.sunVectorVisible=m,_.sunVectorRoot.visible=m&&!!h,m?(_.frame.add(_.sunVectorRoot),Di(async()=>{const{buildSunVector:v}=await import("./shadow-sun-vector-BbV1W7vN.js");return{buildSunVector:v}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10])).then(({buildSunVector:v})=>{if(E||!_.sunVectorVisible||_.sunVector)return;const w=v();_.sunVector=w,_.sunVectorRoot.add(w.root),w.update(_.center,_.directionToSun,_.sunVectorLengthMeters),w.root.visible=!0,_.sunVectorRoot.visible=!!h,t.triggerRepaint()}).catch(v=>{E||console.error("Unable to load sun-vector diagnostics",v)})):(_.frame.remove(_.sunVectorRoot),_.sunVector&&(_.sunVectorRoot.remove(_.sunVector.root),_.sunVector.dispose(),_.sunVector=null)),t.triggerRepaint())},updateAtmosphericLutUsage(m){I.useTransmittanceLut===m.useTransmittanceLut&&I.useIrradianceLut===m.useIrradianceLut||(ze(),I=m,R=null,h&&(kt(h),dt()),t.triggerRepaint())},dispose(){var m,v,w,x,V,L;if(!E){E=!0,He.dispose(),$c(),fr(),$e!==null&&(globalThis.clearTimeout($e),$e=null),yt=null,Qe&&window.clearTimeout(Qe),G!==null&&(globalThis.clearTimeout(G),G=null),On(t),t.off(we.STYLE_LOAD,Ws),t.off(we.MOVE_START,Us),t.off(we.MOVE,rn),t.off(we.MOVE_END,Hs),t.off(we.RESIZE,zs),Yc(),qc(),Kc(),Dt=null,hr(null);for(const N of Te(t))(m=N.setShadowSimulationStyle)==null||m.call(N,null),(v=N.setErrorTargetOverride)==null||v.call(N,null);for(const N of ft.values())M.layer.hasRuntime(N.runtime.id)&&M.layer.removeRuntime(N.runtime.id);ft.clear();try{H==null||H()}catch{}H=null,(x=(w=M.layer).setMapStyleProjectionVisible)==null||x.call(w,!0),g(),M.layer.hasRuntime(Yt.id)&&M.layer.removeRuntime(Yt.id),Y&&M.layer.hasRuntime(Y.id)&&M.layer.removeRuntime(Y.id),Me.dispose(),Hp(_),(L=(V=M.layer).setAccumulationController)==null||L.call(V,null),M.release();try{t.isStyleLoaded()&&t.setLight(l)}catch{}}}}},kp=({tiledShadows:t=!1,libreMap:e,shadowAreaMeters:r,terrain:i,mapLibreTerrain:n,terrainQuality:s,location:a,state:o,dateState:c,setDateState:l})=>{const u=j.useRef(null),d=pu({dateState:c,setDateState:l,location:a,shadowState:o,onFrame:f=>{var S;o.enabled&&((S=u.current)==null||S.updateSolarPosition(Si(f,a)))}}),g=j.useMemo(()=>Ul(i,sa(o.shadowQuality),o.terrainErrorTarget),[i,o.shadowQuality,o.terrainErrorTarget]),p=j.useRef(g);p.current=g;const[h,y]=j.useState(0);return j.useEffect(()=>{if(!e||!o.enabled)return;let f=null,S=null,b=null;const A=()=>{e.off(we.STYLE_DATA,C),e.off(we.STYLE_LOAD,C),e.off(we.IDLE,C)},C=()=>{f||S!==null||b!==null||!e.isStyleLoaded()||(S=requestAnimationFrame(()=>{S=null,b=setTimeout(()=>{b=null,e.isStyleLoaded()&&(A(),f=zp(e,{shadowAreaMeters:r,terrain:p.current,mapLibreTerrain:n,terrainQuality:s}),u.current=f,y(R=>R+1))},0)}))};return e.on(we.STYLE_DATA,C),e.on(we.STYLE_LOAD,C),e.on(we.IDLE,C),C(),()=>{A(),S!==null&&cancelAnimationFrame(S),b!==null&&clearTimeout(b),u.current=null,f==null||f.dispose(),f=null}},[e,r,o.enabled,n,s]),j.useEffect(()=>{var f;(f=u.current)==null||f.updateTerrain(g)},[g,h]),j.useEffect(()=>{var S;if(!o.enabled)return;const f=d.current??c;(S=u.current)==null||S.updateSolarPosition(Si(f,a))},[d,c,a,o.enabled,h]),j.useEffect(()=>{var f;o.enabled&&((f=u.current)==null||f.updateShadowQuality(sa(o.shadowQuality)))},[o.enabled,o.shadowQuality,h]),j.useEffect(()=>{var f;o.enabled&&((f=u.current)==null||f.updateRenderQuality({shadowAdaptiveQuality:o.shadowAdaptiveQuality,shadowBufferLayout:t?o.shadowBufferLayout:void 0,shadowBufferFormat:o.shadowBufferFormat,shadowSunDiscSamples:o.shadowSunDiscSamples,shadowMsaaSamples:o.shadowMsaaSamples,shadowGroundTexelFit:o.shadowGroundTexelFit}))},[o.enabled,t,o.shadowAdaptiveQuality,o.shadowBufferLayout,o.shadowBufferFormat,o.shadowSunDiscSamples,o.shadowMsaaSamples,o.shadowGroundTexelFit,h]),j.useEffect(()=>{var f;o.enabled&&((f=u.current)==null||f.updateMeshErrorTarget(o.meshErrorTarget??null))},[o.enabled,o.meshErrorTarget,h]),j.useEffect(()=>{var f;o.enabled&&((f=u.current)==null||f.updateMeshCacheBudget(o.meshCacheBudgetBytes))},[o.enabled,o.meshCacheBudgetBytes,h]),j.useEffect(()=>{var f;o.enabled&&((f=u.current)==null||f.updateSoftSunShadows(o.softSunShadows??!0))},[o.enabled,o.softSunShadows,h]),j.useEffect(()=>{var f;o.enabled&&((f=u.current)==null||f.updateTimeAnimating(o.isAnimating??!1))},[o.enabled,o.isAnimating,h]),j.useEffect(()=>{var f;o.enabled&&((f=u.current)==null||f.updateShadowIntensity(o.shadowIntensity??1))},[o.enabled,o.shadowIntensity,h]),j.useEffect(()=>{var f;o.enabled&&((f=u.current)==null||f.updateMapStyleContentVisibility(o.showMapStyleContent??!0))},[o.enabled,o.showMapStyleContent,h]),j.useEffect(()=>{var f;o.enabled&&((f=u.current)==null||f.updateMapStyleLabelOverlayVisibility((o.showMapStyleContent??!0)&&(o.showMapStyleLabels??!0)))},[o.enabled,o.showMapStyleContent,o.showMapStyleLabels,h]),j.useEffect(()=>{var f;o.enabled&&((f=u.current)==null||f.updateMapStyleElevationVisibility(o.showMapStyleElevationLines??!1,o.showMapStyleElevationLabels??!1))},[o.enabled,o.showMapStyleElevationLines,o.showMapStyleElevationLabels,h]),j.useEffect(()=>{var f;o.enabled&&((f=u.current)==null||f.updateSunDebugVectorVisibility((o.showProjectionDebugView??!1)&&(o.showSunDebugVector??!0)))},[o.enabled,o.showProjectionDebugView,o.showSunDebugVector,h]),j.useEffect(()=>{if(!e)return;const f=o.enabled&&(o.showProjectionDebugView??!1)&&(o.showTileBounds??!0);if(!f)return;const S=new Set,b=()=>{var R;const C=Te(e);for(const I of S)C.includes(I)||S.delete(I);for(const I of C)S.has(I)||((R=I.setTileBoundsVisible)==null||R.call(I,f),S.add(I))};b();const A=Fo(e,b);return()=>{var C;A();for(const R of Te(e))(C=R.setTileBoundsVisible)==null||C.call(R,!1)}},[e,h,o.enabled,o.showProjectionDebugView,o.showTileBounds]),j.useEffect(()=>{var f;o.enabled&&((f=u.current)==null||f.updateAtmosphericLutUsage({useTransmittanceLut:o.useTransmittanceLut??!0,useIrradianceLut:o.useSkyIrradianceLut??!0}))},[o.enabled,o.useSkyIrradianceLut,o.useTransmittanceLut,h]),j.useEffect(()=>{var f;o.enabled&&((f=u.current)==null||f.updateTerrainColor(o.terrainColor??Lo))},[o.enabled,o.terrainColor,h]),j.useEffect(()=>{var f;o.enabled&&((f=u.current)==null||f.updateBuildingAppearance({fullOpacity:o.buildingsFullOpacity??!0,uniformColor:o.buildingColor??Hl,uniformColorMix:qe(o.buildingColorMix??zl,0,1),textureColorCorrection:o.meshTextureColorCorrection??!0,textureSaturation:qe(o.meshTextureSaturation??kl,0,1)}))},[o.buildingColor,o.buildingColorMix,o.buildingsFullOpacity,o.enabled,o.meshTextureSaturation,o.meshTextureColorCorrection,h]),null},Vp=t=>({...t,animationMode:tr.DAY,animationSpeed:4,isAnimating:!1,shadowIntensity:1,meshTextureColorCorrection:!0,showSunDebugVector:!0,showTileBounds:!0,showProjectionDebugView:!1,showDisplaySettings:!1,showMapStyleContent:!0,showMapStyleLabels:!0,showMapStyleElevationLines:!1,showMapStyleElevationLabels:!1,useTransmittanceLut:!0,useSkyIrradianceLut:!0,shadowBufferLayout:void 0,shadowBufferFormat:void 0,shadowSunDiscSamples:void 0,shadowMsaaSamples:void 0,shadowGroundTexelFit:void 0,shadowAdaptiveQuality:void 0}),Gp=({location:t,state:e,setState:r,dateState:i,setDateState:n})=>{const s=e.animationMode??tr.DAY,a=e.animationSpeed??4,o=(c,l)=>n(iu(i,i.year,Vl(i.year,c,l),t));return z.jsxs(z.Fragment,{children:[z.jsxs("section",{className:"min-w-0",children:[z.jsx("h3",{className:"mb-1.5 text-xs font-medium uppercase tracking-wide text-neutral-500",children:"Datum"}),z.jsxs("div",{className:"grid grid-cols-2 gap-2","data-test-id":"shadow-date-shortcuts",children:[z.jsx("button",{type:"button",className:wr,onClick:()=>n(nu(i,t)),children:"Heute"}),z.jsx("button",{type:"button",className:wr,onClick:()=>o(2,21),children:"21. März"}),z.jsx("button",{type:"button",className:wr,onClick:()=>o(5,21),children:"21. Juni"}),z.jsx("button",{type:"button",className:wr,onClick:()=>o(11,21),children:"21. Dezember"})]})]}),z.jsxs("section",{children:[z.jsx("h3",{className:"mb-1.5 text-xs font-medium uppercase tracking-wide text-neutral-500",children:"Uhrzeit"}),z.jsx("div",{className:"grid grid-cols-4 gap-2",children:[9,12,15,18].map(c=>z.jsx("button",{type:"button",className:wr,onClick:()=>n(us(i,{...i,minutes:c*60},t)),children:lu(c)},c))})]}),z.jsxs("section",{children:[z.jsx("h3",{className:"mb-1.5 text-xs font-medium uppercase tracking-wide text-neutral-500",children:"Animation"}),z.jsxs("div",{className:"flex flex-wrap items-center gap-x-3 gap-y-2",children:[z.jsx("div",{className:"flex shrink-0 overflow-hidden rounded-md border border-neutral-300",children:[[tr.DAY,"Tagesverlauf"],[tr.YEAR,"Jahresverlauf"]].map(([c,l])=>z.jsx("button",{type:"button",className:`${Bo} ${s===c?"bg-amber-50 font-medium text-amber-700":"bg-white"}`,"aria-pressed":s===c,onClick:()=>{const u=c;r({...e,animationMode:u,isAnimating:s===u?!e.isAnimating:!0})},children:l},c))}),z.jsx(hu,{value:a,onChange:c=>r({...e,animationSpeed:c})})]})]})]})},Wp=({location:t,state:e,setState:r,dateState:i,setDateState:n})=>{const s=e.shadowIntensity??1,a=j.useMemo(()=>Si(i,t),[i,t]);return z.jsxs("div",{className:"w-full","data-test-id":"shadow-simulation-secondary-panel",children:[z.jsxs("div",{className:"mb-2 flex flex-wrap items-center justify-between gap-x-4 gap-y-2",children:[z.jsxs("span",{className:"whitespace-nowrap text-sm tabular-nums text-neutral-500",children:["Höhe ",a.elevationDegrees.toFixed(0),"° · Azimut"," ",a.azimuthDegrees.toFixed(0),"°"]}),z.jsx("div",{className:"flex items-center gap-5 text-sm text-neutral-600",children:z.jsxs("button",{type:"button",className:"flex items-center gap-2 whitespace-nowrap hover:text-amber-700",onClick:()=>{r(Vp(e)),n(su(i,t))},children:[z.jsx(kn,{icon:Kl}),"Zurücksetzen"]})})]}),z.jsxs("div",{className:"grid grid-cols-1 gap-x-8 gap-y-4 lg:grid-cols-2",children:[z.jsx(Gp,{location:t,state:e,setState:r,dateState:i,setDateState:n}),z.jsxs("section",{className:"min-w-0",children:[z.jsxs("h3",{className:"mb-1.5 flex items-center gap-1 text-xs font-medium uppercase tracking-wide text-neutral-500",children:["Darstellung",z.jsx("button",{type:"button",className:"inline-flex items-center justify-center p-1 text-neutral-700 hover:text-amber-700","aria-label":"Darstellungseinstellungen",title:"Darstellungseinstellungen","aria-expanded":e.showDisplaySettings??!1,onClick:()=>r({...e,showDisplaySettings:!e.showDisplaySettings}),"data-test-id":"shadow-simulation-display-settings",children:z.jsx(kn,{icon:Xl})})]}),z.jsxs("label",{className:"grid grid-cols-[110px_minmax(0,1fr)_42px] items-center gap-3 text-sm text-neutral-700",children:[z.jsx("span",{children:"Intensität"}),z.jsx("input",{type:"range",min:0,max:1,step:.01,value:s,onChange:o=>r({...e,shadowIntensity:Number(o.currentTarget.value)}),className:"shadow-simulation-range min-w-0 cursor-pointer",style:uu(s,0,1),"aria-label":"Schattenintensität","data-test-id":"shadow-simulation-intensity"}),z.jsxs("span",{className:"text-right tabular-nums",children:[Math.round(s*100),"%"]})]})]})]})]})},jp=j.lazy(()=>Di(()=>import("./ShadowProjectionDebugView-CUioHpAx.js"),__vite__mapDeps([11,1,2,3,4,5,6,7,8,9,10,12])).then(t=>({default:t.ShadowProjectionDebugView}))),Yp=j.lazy(()=>Di(()=>import("./ShadowSimulationDisplaySettingsPanel-sjkjgGTZ.js"),__vite__mapDeps([13,1,2,3,4,5,6,7,8,9,10])).then(t=>({default:t.ShadowSimulationDisplaySettingsPanel}))),qp=j.lazy(()=>Di(()=>import("./ShadowSimulationCurveSettings-BquFQa4L.js"),__vite__mapDeps([14,1,2,3,4,5,6,7,8,9,10])).then(t=>({default:t.ShadowSimulationCurveSettings}))),Kp="#1677ff",ug=({config:t,libreMap:e,targeted:r,sharedState:i,setSharedState:n,sharedDateState:s,setSharedDateState:a})=>{var G,H;const{year:o,initialDayOfYear:c,initialMinutes:l,latitude:u=oa.latitude,longitude:d=oa.longitude,timeZone:g=ql,shadowAreaMeters:p,terrain:h,terrainSources:y,mapLibreTerrain:f,controlPosition:S="topleft",controlOrder:b=70,experimentalTiledShadows:A=!1}=t??{},C=cu(e,u,d),R=j.useMemo(()=>Gl({terrain:h,terrainSources:y}),[h,y]),I=j.useMemo(()=>s??Wl({year:o,initialDayOfYear:c,initialMinutes:l,timeZone:g},C),[s,c,l,C,g,o]),E=i??R,O=s??I,B=j.useMemo(()=>y??(h?[{label:h.id,terrain:h}]:void 0),[h,y]),U=((G=B==null?void 0:B.find(({terrain:X})=>X.id===E.terrainSourceId))==null?void 0:G.terrain)??((H=B==null?void 0:B[0])==null?void 0:H.terrain);return j.useEffect(()=>{i||n(R)},[R,n,i]),j.useEffect(()=>{s||a(I)},[I,a,s]),r?z.jsx(Wp,{location:C,state:E,setState:n,dateState:O,setDateState:a}):z.jsxs(z.Fragment,{children:[e&&z.jsx(jl,{position:S,order:b,children:z.jsx(tl,{title:E.enabled?"Schattensimulation ausschalten":"Schattensimulation einschalten",placement:"right",children:z.jsx(Yl,{onClick:()=>n({...E,enabled:!E.enabled}),dataTestId:"shadow-simulation-control-button","aria-label":E.enabled?"Schattensimulation ausschalten":"Schattensimulation einschalten","aria-pressed":E.enabled,children:z.jsx(kn,{icon:$l,style:E.enabled?{color:Kp}:void 0})})})}),z.jsx(kp,{tiledShadows:A,libreMap:e,shadowAreaMeters:p,terrain:U,mapLibreTerrain:f,terrainQuality:E.terrainQuality,location:C,state:E,dateState:O,setDateState:a}),E.controlStyle===aa.CURVE&&z.jsx(j.Suspense,{fallback:null,children:z.jsx(qp,{location:C,dateState:O,setDateState:a,onClose:()=>n({...E,controlStyle:aa.QUICK})})}),E.showDisplaySettings&&z.jsx(j.Suspense,{fallback:null,children:z.jsx(Yp,{tiledShadows:A,state:E,setState:n,terrainSources:B,map:e})}),E.enabled&&E.showProjectionDebugView&&e&&z.jsx(j.Suspense,{fallback:null,children:z.jsx(jp,{map:e,solarPosition:Si(O,C),settings:{showSunDebugVector:E.showSunDebugVector??!0,showTileBounds:E.showTileBounds??!0},onSettingsChange:X=>n({...E,...X}),onClose:()=>n({...E,showProjectionDebugView:!1})})})]})};export{ng as M,hu as S,cu as a,us as b,ug as c,lg as d,cg as e,ma as f,uu as g,sg as h,ig as i,ga as r,ru as s,pu as u};
