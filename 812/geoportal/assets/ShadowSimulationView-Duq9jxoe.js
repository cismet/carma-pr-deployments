const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/shadow-sun-vector-BcBYDcaW.js","assets/index-C1xA47Y3.js","assets/vendor-react-core-DEDd919A.js","assets/vendor-ui-icons-BMlNI4jU.js","assets/vendor-cismap-o37xWsMy.js","assets/vendor-leaflet-BbYkptA6.js","assets/vendor-ui-U6gFCo6J.js","assets/vendor-cismap-DCHbl3AQ.css","assets/vendor-cesium-COY8x_Hs.js","assets/vendor-maplibre-ojH_DVgs.js","assets/index-CbMI6cqb.css","assets/ShadowProjectionDebugView-DZKwvn60.js","assets/ViewStateVisualizer-CnARhJri.js","assets/ShadowSimulationDisplaySettingsPanel-BWvYlYrj.js","assets/ShadowSimulationCurveSettings-BNtx9aVe.js"])))=>i.map(i=>d[i]);
import{r as j,d as Gc}from"./vendor-react-core-DEDd919A.js";import{O as jc,d as Yc}from"./vendor-ui-U6gFCo6J.js";import{b as Cr,ab as Mi,ac as Kt,ad as Ir,ae as qc,af as ho,c as Or,ag as Xn,ah as te,ai as ke,aj as je,ak as yt,al as Dr,am as Ae,an as Zt,ao as Nt,a1 as mo,X as fo,_ as Kc,a3 as $n,a4 as Xt,h as Xc,ap as po,aq as Se,ar as Gt,as as jt,I as k,at as Lr,au as J,av as ot,V as x,aw as $c,d as Ne,ax as go,ay as Qc,az as Zc,aA as vo,aB as D,aC as Ri,aD as yo,O as Qn,aE as So,aF as Gs,k as Zn,aG as Jc,aH as Pn,aI as js,aJ as Jn,aK as el,aL as tl,aM as Ys,aN as rl,aO as il,aP as nl,aQ as wo,aR as Mt,aS as sl,aT as _o,J as qs,aU as Ye,aV as al,D as xo,aW as ol,j as cl,aX as en,aY as ll,aZ as ul,a_ as di,a$ as To,b0 as Yt,b1 as dl,b2 as Nn,b3 as es,b4 as bo,b5 as hl,b6 as ml,b7 as $t,b8 as fl,b9 as pl,ba as Ks,bb as gl,bc as vl,bd as Dt,be as ts,bf as fi,G as rs,aa as ze,bg as Zr,bh as yl,bi as Mo,bj as Sl,bk as tn,bl as Xs,bm as wl,bn as Ro,w as _l,bo as xe,bp as rn,bq as nn,br as xl,bs as Eo,bt as Tl,bu as Ei,bv as bl,bw as sn,bx as Ml,by as Rl,bz as El,bA as an,bB as $s,bC as pr,bD as Al,bE as Cl,t as pi,bF as Il,bG as Qs,bH as Dl,bI as Pl,bJ as Nl,a0 as Ol,bK as Ll,bL as Fl,bM as Bl,bN as Ul,bO as Zs,a6 as Js,a8 as Hl}from"./index-C1xA47Y3.js";import{F as On,bc as zl,bi as kl,x as Vl}from"./vendor-ui-icons-BMlNI4jU.js";import{a as Wl}from"./vendor-maplibre-ojH_DVgs.js";import"./vendor-cismap-o37xWsMy.js";import"./vendor-leaflet-BbYkptA6.js";const ea=20;class Gl{constructor(e,r=256*1024**2){this.renderer=e,this.maximumBytes=r,this.quad.frustumCulled=!1,this.scene.add(this.quad)}target=null;key=null;broken=!1;captures=0;reuses=0;scene=new Cr;camera=new Mi;material=new Kt({glslVersion:Ir,uniforms:{color:{value:null},depth:{value:null}},vertexShader:`out vec2 uvCopy;
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
      }`,depthTest:!0,depthFunc:qc,depthWrite:!0,transparent:!0,blending:ho});quad=new Or(new Xn(2,2),this.material);get stats(){return{captures:this.captures,reuses:this.reuses,bytes:this.target?this.target.width*this.target.height*ea:0,broken:this.broken}}invalidate(){this.key=null}render(e,r,i,n){var f,y;const s=this.renderer;if(this.broken||!Number.isInteger(r)||!Number.isInteger(i)||r<1||i<1||r>s.capabilities.maxTextureSize||i>s.capabilities.maxTextureSize||r*i*ea>this.maximumBytes||!s.extensions.has("EXT_color_buffer_float"))return this.releaseTarget(),n(),!1;const a=s.getRenderTarget(),o=s.getActiveCubeFace(),c=s.getActiveMipmapLevel(),l=s.getViewport(new te),u=s.getScissor(new te),d=s.getScissorTest(),p=s.getClearColor(new ke),g=s.getClearAlpha(),h=s.autoClear,v=()=>{s.setRenderTarget(a,o,c),s.setViewport(l),s.setScissor(u),s.setScissorTest(d),s.setClearColor(p,g),s.autoClear=h};try{if(((f=this.target)==null?void 0:f.width)!==r||((y=this.target)==null?void 0:y.height)!==i){this.releaseTarget(),this.target=new je(r,i,{type:yt,format:Dr,minFilter:Ae,magFilter:Ae,depthTexture:new Zt(r,i,Nt),samples:0});try{s.initRenderTarget(this.target)}catch{return this.broken=!0,this.releaseTarget(),v(),n(),!1}}const T=JSON.stringify([e,r,i,s.outputColorSpace,s.toneMapping,s.toneMappingExposure,a==null?void 0:a.texture.colorSpace]);return s.autoClear=!1,this.key!==T?(this.key=null,s.setRenderTarget(this.target),s.setViewport(new te(0,0,r,i)),s.setScissorTest(!1),s.setClearColor(0,0),s.clear(!0,!0,!1),n(),this.key=T,this.captures+=1):this.reuses+=1,v(),s.autoClear=!1,this.material.uniforms.color.value=this.target.texture,this.material.uniforms.depth.value=this.target.depthTexture,s.render(this.scene,this.camera),!0}catch(T){throw this.invalidate(),T}finally{v()}}releaseTarget(){var e,r,i;(r=(e=this.target)==null?void 0:e.depthTexture)==null||r.dispose(),(i=this.target)==null||i.dispose(),this.target=null,this.key=null}dispose(){this.releaseTarget(),this.broken=!0,this.material.dispose(),this.quad.geometry.dispose()}}const ta=(t,e,r,i,n)=>{const s=i+e,a=Math.floor(s),o=s-a;if(a===0)return{dateState:t,yearDayProgress:o};const c=n?{year:t.year,dayOfYear:(t.dayOfYear-1+a)%mo(t.year)+1}:Kc(t,a);return{dateState:(n?{...t,...c}:$n({...t,...c},r))??t,yearDayProgress:o}},ra=(t,e,r,i,n)=>{if(!n)return{dateState:{...t,minutes:(t.minutes+e)%1440},yearDayProgress:0};const s=fo(t,r),a=Math.ceil(s.sunriseMinutes),o=Math.floor(s.sunsetMinutes),l=(i&&(t.minutes<a||t.minutes>o)?a:t.minutes)+e;return{dateState:{...t,minutes:l>o?a+(i?(l-a)%Math.max(1,o-a):0):l},yearDayProgress:0}},jl=(t,e,r,i,n,s={})=>{const a=e??r;if(!(t!=null&&t.enabled)||!t.isAnimating)return{dateState:a,yearDayProgress:n};const o=s.elapsedMs!==void 0,c=(t.animationMode??Xt.DAY)===Xt.YEAR,l=t.animationDaylightOnly!==!1,u=t.animationCycleSeconds;if(o&&u!==void 0&&u>0){const p=Math.max(0,s.elapsedMs??0)/(u*1e3);if(c)return ta(a,p*mo(a.year),i,n,!0);const g=fo(a,i),h=l?Math.max(1,g.sunsetMinutes-g.sunriseMinutes):1440;return ra(a,p*h,i,!0,l)}const d=(t.animationSpeed??4)*(o?Math.max(0,s.elapsedMs??0)*60/1e3:1);return c?ta(a,d/(o?4:2),i,n,o):ra(a,d,i,o,l)},Jr=3,Yl=.5,nt=64,ia=.01,na=(t,e,r)=>Math.min(r**2,Math.max(nt**2,Math.floor(t!==void 0&&Number.isFinite(t)&&t>0?t:e))),sa=(t,e)=>{const{mapSize:r,maxMapSize:i,elevationSine:n,sunDiscGuardMeters:s,groundTexelFit:a}=e,o=t.right-t.left+2*s,c=t.top-t.bottom+2*s,l=Math.max(ia,Math.abs(n)),d=2*(a?Jr+Yl:Jr);let p=r,g=r,h=!1,v=!1;const f=e.groundTexelTargetMeters;if(f!==void 0&&(!Number.isFinite(f)||f<=0))throw new RangeError("Shadow ground texel target must be positive and finite");if(f!==void 0){const Y=de=>Math.max(nt,2**Math.ceil(Math.log2(de))),V=Y(o/f+d),N=Y(c/(f*l)+d);p=Math.min(i,V),g=Math.min(i,N),h=p<V||g<N}else if(a){const Y=o*l/c,V=e.mapTexelBudget??r*r,N=d*(Y+1),de=V-d*d,O=2*de/(N+Math.sqrt(N**2+4*Y*de)),X=Y*O+d,H=O+d;h=X>i||H>i;const q=Math.max(o,c)/(r-d),ce=Math.min(r,Math.max(nt,Math.ceil((o/q+d)/nt)*nt)),ae=Math.min(r,Math.max(nt,Math.ceil((c/q+d)/nt)*nt));v=X<ce||H<ae;const _e=Math.min(Math.max(X,ce,V/i),i,V/ae),C=re=>Math.floor(re/nt+1e-9)*nt;p=Math.max(ce,C(_e)),g=Math.max(ae,C(Math.min(i,V/p)))}const y=e.mapDimensions;y&&(v||(v=p!==y.width||g!==y.height),p=y.width,g=y.height);const T=o/Math.max(1,p-d),E=c/Math.max(1,g-d),A=Math.max(T,E,Number.EPSILON),M=a?T:A,I=a?E:A,R=Math.round((t.left+t.right)/2/M)*M,F=Math.round((t.bottom+t.top)/2/I)*I,P=M*p,B=I*g;return{left:R-P/2,right:R+P/2,bottom:F-B/2,top:F+B/2,mapWidth:p,mapHeight:g,metersPerTexelX:M,metersPerTexelY:I,guardMetersX:M*Jr,guardMetersY:I*Jr,groundTexelWidthMeters:M,groundTexelHeightMeters:Math.abs(n)>Number.EPSILON?I/Math.abs(n):1/0,groundTexelFitLimited:a&&(h||v||Math.abs(n)<ia)}},ql=(t,e,r)=>{if(r<=0)return{planarMeters:0,depthMeters:0};const i=Math.sqrt(Math.max(0,1-e**2)),n=i>Math.sin(r)?Math.asin(Math.sin(r)/i):Math.PI;return{planarMeters:2*t*Math.sin(Math.min(Math.PI,n+r)/2),depthMeters:2*t*Math.sin(r/2)}},Pr=Xc(.53/2),Kl=Math.PI*(3-Math.sqrt(5)),Xl=(t,e)=>{const r=Math.max(1,Math.floor(e)),i=(Math.floor(t)%r+r)%r,n=Pr*Math.sqrt((i+.5)/r),s=i*Kl;return{angularRadius:n,tangentA:Math.cos(s)*n,tangentB:Math.sin(s)*n}},$l=t=>{const e=Math.floor(t/2)+1,r=t%2===0?1:-1;return[r*(e*.7548776662466927%1-.5),r*(e*.5698402909980532%1-.5)]},is=(t,e,r)=>$n(e,r)??t,Ql=(t,e,r,i)=>is(t,{...t,year:e,dayOfYear:r},i),Zl=(t,e,r=new Date)=>{const i=po(r,t.timeZone);return is(t,{...i,minutes:t.minutes},e)},Jl=(t,e,r=new Date)=>{const i=po(r,t.timeZone);return $n(i,e)??t},eu=(t,e)=>({latitude:(t==null?void 0:t.latitude)??e.latitude,longitude:(t==null?void 0:t.longitude)??e.longitude}),tu=(t,e)=>t.latitude===e.latitude&&t.longitude===e.longitude,aa=(t,e,r)=>{const i=t==null?void 0:t.getCenter();return eu(i?{latitude:i.lat,longitude:i.lng}:null,{latitude:e,longitude:r})},ru=(t,e,r)=>{const[i,n]=j.useState(()=>aa(t,e,r));return j.useEffect(()=>{const s=()=>{const a=aa(t,e,r);n(o=>tu(o,a)?o:a)};if(s(),!!t)return t.on(Se.MOVE_END,s),()=>{t.off(Se.MOVE_END,s)}},[e,r,t]),i},gr="flex h-9 min-w-0 items-center justify-center whitespace-nowrap rounded-md border border-neutral-300 bg-white px-1 text-center text-sm text-neutral-800 transition-colors hover:border-amber-500 hover:text-amber-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/40",Ao="h-8 whitespace-nowrap border-r border-neutral-300 px-3 text-sm text-neutral-700 transition-colors last:border-r-0 hover:text-amber-700",Jp=[{label:"120 FPS",value:Gt.FPS_120},{label:"60 FPS",value:Gt.FPS_60},{label:"30 FPS",value:Gt.FPS_30},{label:"Ultra",value:Gt.ULTRA}],eg=[{label:"0,25 px",value:.25},{label:"0,5 px",value:.5},{label:"1 px",value:1},{label:"2 px",value:2},{label:"4 px",value:4}],tg=[{value:jt.HDR_16,label:"HDR · 16 Bit (Experiment)"},{value:jt.HDR_16_32,label:"HDR · 16/32 Bit (Standard)"},{value:jt.HDR_32,label:"HDR · 32 Bit (ohne MSAA)"},{value:jt.SDR_8,label:"SDR · 8 Bit (Experiment)"}],iu=t=>`${String(t).padStart(2,"0")}:00`,nu=(t,e,r)=>({"--shadow-range-progress":`${r>e?Math.max(0,Math.min(100,(t-e)/(r-e)*100)):0}%`});var su={exports:{}};(function(t,e){(function(r,i){t.exports=i(jc)})(Gc,function(r){function i(c){return c&&typeof c=="object"&&"default"in c?c:{default:c}}var n=i(r),s={s:"ein paar Sekunden",m:["eine Minute","einer Minute"],mm:"%d Minuten",h:["eine Stunde","einer Stunde"],hh:"%d Stunden",d:["ein Tag","einem Tag"],dd:["%d Tage","%d Tagen"],M:["ein Monat","einem Monat"],MM:["%d Monate","%d Monaten"],y:["ein Jahr","einem Jahr"],yy:["%d Jahre","%d Jahren"]};function a(c,l,u){var d=s[u];return Array.isArray(d)&&(d=d[l?0:1]),d.replace("%d",c)}var o={name:"de",weekdays:"Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),weekdaysShort:"So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),weekdaysMin:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),months:"Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sept._Okt._Nov._Dez.".split("_"),ordinal:function(c){return c+"."},weekStart:1,yearStart:4,formats:{LTS:"HH:mm:ss",LT:"HH:mm",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY HH:mm",LLLL:"dddd, D. MMMM YYYY HH:mm"},relativeTime:{future:"in %s",past:"vor %s",s:a,m:a,mm:a,h:a,hh:a,d:a,dd:a,M:a,MM:a,y:a,yy:a}};return n.default.locale(o,null,!0),o})})(su);const au=({value:t,onChange:e})=>k.jsx("div",{role:"group","aria-label":"Animationsgeschwindigkeit",className:"flex shrink-0 overflow-hidden rounded-md border border-neutral-300",children:[1,4,12].map(r=>k.jsxs("button",{type:"button",className:`${Ao} px-3 ${t===r?"bg-amber-50 font-medium text-amber-700":"bg-white"}`,"aria-pressed":t===r,onClick:()=>e(r),children:[r,"×"]},r))}),ou=1e3/30,cu=250,lu=({dateState:t,setDateState:e,location:r,shadowState:i,onFrame:n,realtime:s=!1})=>{const a=j.useRef(null),o=j.useRef(null),c=j.useRef(t),l=j.useRef(t),u=j.useRef(e),d=j.useRef(n);l.current=t,u.current=e,d.current=n;const{animationMode:p,animationSpeed:g,animationCycleSeconds:h,animationDaylightOnly:v,enabled:f,isAnimating:y}=i,T=f&&(y??!1);return j.useEffect(()=>{const E=t!==c.current;if(c.current=t,!!E){if(t===o.current){T||(a.current=null);return}a.current=null}},[T,t]),j.useEffect(()=>{if(!T)return;const E={animationMode:p,animationSpeed:g,animationCycleSeconds:h,animationDaylightOnly:v,enabled:f,isAnimating:y};let A=0,M=performance.now(),I=M;const R=V=>{o.current=V,u.current(V)},F=V=>{const N=a.current??l.current,de=jl(E,N,N,r,A,s?{elapsedMs:V-I}:void 0);I=V,A=de.yearDayProgress,a.current=de.dateState,d.current(de.dateState),V-M>=cu&&(M=V,R(de.dateState))};let P=0;const B=V=>{F(V),P=requestAnimationFrame(B)},Y=s?void 0:window.setInterval(()=>F(performance.now()),ou);return s&&(P=requestAnimationFrame(B)),()=>{Y!==void 0&&window.clearInterval(Y),s&&cancelAnimationFrame(P);const V=a.current;V&&V!==o.current&&R(V)}},[T,p,g,h,v,f,y,r,s]),a},oa=new WeakMap,ca=(t,e,r,i,n="shadow-and-color")=>{const s=()=>r.render(t,i);if(e===void 0)return s(),!0;const a=t.getObjectById(e);if(!a)return!1;let o=oa.get(a);if(!o){const l=new Set;a.traverse(u=>l.add(u)),oa.set(a,l),o=l}if(n==="color-only"){const l=new Set;for(let d=a.parent;d;d=d.parent)l.add(d);const u=[];t.traverse(d=>{d.isMesh&&d.visible&&!o.has(d)&&!l.has(d)&&(u.push(d),d.visible=!1)});try{return s(),!0}finally{for(const d of u)d.visible=!0}}const c=r.renderBufferDirect;r.renderBufferDirect=function(...l){const[u,,,,d]=l;u===i&&d.isMesh&&!o.has(d)||c.apply(this,l)};try{return s(),!0}finally{r.renderBufferDirect=c}},la=[[0,1],[1,3],[3,2],[2,0],[4,5],[5,7],[7,6],[6,4],[0,4],[1,5],[2,6],[3,7]],uu=({min:t,max:e})=>[new x(t.x,t.y,t.z),new x(e.x,t.y,t.z),new x(t.x,e.y,t.z),new x(e.x,e.y,t.z),new x(t.x,t.y,e.z),new x(e.x,t.y,e.z),new x(t.x,e.y,e.z),new x(e.x,e.y,e.z)],du=t=>[t.coordinateSystem===$c?0:-1,1].flatMap(r=>[-1,1].flatMap(i=>[-1,1].map(n=>new x(n,i,r).unproject(t)))),on=(t,e,r)=>t.every(i=>i.distanceToPoint(e)>=-r),ua=(t,e,r)=>e.x>=t.min.x-r&&e.x<=t.max.x+r&&e.y>=t.min.y-r&&e.y<=t.max.y+r&&e.z>=t.min.z-r&&e.z<=t.max.z+r,Ln=(t,e,r)=>{t.some(i=>i.distanceToSquared(e)<=r)||t.push(e)},da=(t,e,r,i,n,s)=>{const a=e.clone().sub(t);for(const o of r){const c=o.distanceToPoint(t),l=o.distanceToPoint(e),u=c-l;if(Math.abs(u)<=Number.EPSILON)continue;const d=c/u;if(d<0||d>1)continue;const p=t.clone().addScaledVector(a,d);i(p)&&Ln(n,p,s)}},Co=(t,e,r=1e-6)=>{if(e.isEmpty())return[];t.updateMatrixWorld(!0);const i=new Lr().setFromProjectionMatrix(new J().multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),t.coordinateSystem,t.reversedDepth);if(!i.intersectsBox(e))return[];const n=r*r,s=uu(e),a=du(t),o=[];for(const l of s)on(i.planes,l,r)&&Ln(o,l,n);for(const l of a)ua(e,l,r)&&Ln(o,l,n);for(const[l,u]of la)da(s[l],s[u],i.planes,d=>on(i.planes,d,r),o,n);const c=[new ot(new x(1,0,0),-e.min.x),new ot(new x(-1,0,0),e.max.x),new ot(new x(0,1,0),-e.min.y),new ot(new x(0,-1,0),e.max.y),new ot(new x(0,0,1),-e.min.z),new ot(new x(0,0,-1),e.max.z)];for(const[l,u]of la)da(a[l],a[u],c,d=>ua(e,d,r)&&on(i.planes,d,r),o,n);return o},Io=(t,e)=>{const r=Fr(t).map(o=>new te(o.x,o.y,o.z,1).applyMatrix4(e));if(r.some(o=>o.w<=0))return new te(0,0,1,1);const i=Math.max(0,(Math.min(...r.map(o=>o.x/o.w))+1)/2),n=Math.max(0,(Math.min(...r.map(o=>o.y/o.w))+1)/2),s=Math.min(1,(Math.max(...r.map(o=>o.x/o.w))+1)/2),a=Math.min(1,(Math.max(...r.map(o=>o.y/o.w))+1)/2);return new te(i,n,Math.max(0,s-i),Math.max(0,a-n))},Fr=t=>[t.min.x,t.max.x].flatMap(e=>[t.min.y,t.max.y].flatMap(r=>[t.min.z,t.max.z].map(i=>new x(e,r,i)))),Do=(t,e,r)=>{const i=e.elements,n=Fr(t).map(o=>new te(o.x,o.y,o.z,1).applyMatrix4(e)),s=Math.min(...n.map(o=>o.w));if(s<=0)return 1/0;let a=0;for(const[o,c]of[[0,r.x],[1,r.y]])for(let l=0;l<3;l+=1){const u=Math.max(...n.map(d=>Math.abs(i[l*4+o]*d.w-(o===0?d.x:d.y)*i[l*4+3])));a+=(c*.5*u/(s*s))**2}return Math.sqrt(a)},hu=(t,e,r,i)=>{if(!(i>0&&Number.isFinite(i))||!(r.x>0&&r.y>0))throw new RangeError("Shadow page projection requires a positive pixel target and viewport");const n=new J().multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),s=new Set;for(const{id:o,bounds:c}of t){if(s.has(o)||c.isEmpty()||![...c.min.toArray(),...c.max.toArray()].every(Number.isFinite))throw new RangeError("Receiver cells require unique IDs and finite, nonempty bounds");s.add(o)}const a=new Lr().setFromProjectionMatrix(n);return t.filter(({bounds:o})=>a.intersectsBox(o)).map(o=>({...o,screenBounds:Io(o.bounds,n),groundTexelTargetMeters:Math.max(1e-9,i/Do(o.bounds,n,r))}))},mu=(t,e,r,i,n)=>t.clone().union(t.clone().translate(e.clone().normalize().multiplyScalar(r))).expandByScalar(2*r*Math.sin(i/2)+n),fu=(t,e)=>t.flatMap(({bounds:r})=>Co(e,r).length>0?Fr(r):[]),ei={WEST:"west",EAST:"east",SOUTH:"south",NORTH:"north"},vr=({bounds:t})=>(t.max.x-t.min.x)*(t.max.z-t.min.z),pu=(t,e)=>t.min.z===e.min.z&&t.max.z===e.max.z&&(t.max.x===e.min.x||e.max.x===t.min.x)||t.min.x===e.min.x&&t.max.x===e.max.x&&(t.max.z===e.min.z||e.max.z===t.min.z),gu=t=>{const e=new Map(t.map(i=>[i.id,i]));let r=!0;for(;r;){r=!1;for(const i of e.values()){if(Math.min(i.bounds.max.x-i.bounds.min.x,i.bounds.max.z-i.bounds.min.z)>=i.fragmentMergeWidthMeters)continue;const s=vr(i),a=[...e.values()].filter(o=>o!==i&&(vr(o)>s||vr(o)===s&&o.id<i.id)&&pu(i.bounds,o.bounds)).sort((o,c)=>vr(c)-vr(o)||(o.id<c.id?-1:o.id>c.id?1:0))[0];if(a){e.set(a.id,{...a,bounds:a.bounds.clone().union(i.bounds)}),e.delete(i.id),r=!0;break}}}return[...e.values()].map(({id:i,bounds:n})=>({id:i,bounds:n}))},cn=t=>({west:t.min.x,east:t.max.x,south:t.min.z,north:t.max.z}),Po=(t,e)=>t.west<e.east&&t.east>e.west&&t.south<e.north&&t.north>e.south,vu=(t,e,r)=>{if(!Po(t,e))return[t];const i=Math.max(t.west,e.west),n=Math.min(t.east,e.east),s=Math.max(t.south,e.south),a=Math.min(t.north,e.north);return[{...t,east:i,side:ei.WEST},{...t,west:n,side:ei.EAST},{west:i,east:n,south:t.south,north:s,side:ei.SOUTH},{west:i,east:n,south:a,north:t.north,side:ei.NORTH}].filter(o=>o.west<o.east&&o.south<o.north).map(({side:o,...c})=>({...c,splitPath:[...t.splitPath,r,o]}))},yu=t=>{const e=new Set;for(const{id:n,bounds:s}of t){if(e.has(n)||s.isEmpty()||![...s.min.toArray(),...s.max.toArray()].every(Number.isFinite))throw new RangeError("Receiver tiles require unique IDs and finite bounds");e.add(n)}const r=[...t].sort((n,s)=>n.id<s.id?-1:n.id>s.id?1:0);if(r.every(({receiverObjectId:n})=>n!==void 0))return r;const i=r.flatMap(({id:n,bounds:s},a)=>{const o=cn(s);return o.west===o.east||o.south===o.north?[]:r.slice(0,a).reduce((l,u)=>l.flatMap(d=>vu(d,cn(u.bounds),u.id)),[{...o,splitPath:[]}]).map(l=>{const u=r.reduce((d,p)=>Po(l,cn(p.bounds))?[Math.min(d[0],p.bounds.min.y),Math.max(d[1],p.bounds.max.y)]:d,[s.min.y,s.max.y]);return{fragmentMergeWidthMeters:l.splitPath.length===0?0:Math.max(.1,.01*Math.min(o.east-o.west,o.north-o.south)),id:l.splitPath.length===0?n:JSON.stringify([n,...l.splitPath]),bounds:new Ne(new x(l.west,u[0],l.south),new x(l.east,u[1],l.north))}})});return gu(i)},Su=(t,e=16)=>{if(!Number.isInteger(e)||e<=0||t.length===0)return[];const i=t.reduce((c,l)=>c.union(l.bounds),new Ne).getCenter(new x),n=new Set(t.map(({id:c})=>c)),s=new Map;for(const c of t){const l=c.bounds.max.x-c.bounds.min.x;if(!(l>0&&Number.isFinite(l)))continue;const u=Math.round(c.bounds.min.x/l),d=Math.round(c.bounds.min.z/l);for(let p=-1;p<=1;p+=1)for(let g=-1;g<=1;g+=1){const h=`${l}:${u+p}:${d+g}`;n.has(h)||s.has(h)||s.set(h,{id:h,bounds:c.bounds.clone().translate(new x(p*l,0,g*l))})}}const a=Array.from({length:8},()=>[]);for(const c of s.values()){const l=c.bounds.getCenter(new x).sub(i),u=(Math.round(Math.atan2(l.z,l.x)/(Math.PI/4))+8)%8;a[u].push(c)}for(const c of a)c.sort((l,u)=>l.bounds.distanceToPoint(i)-u.bounds.distanceToPoint(i)||l.id.localeCompare(u.id));const o=[];for(let c=0;o.length<e;c+=1){const l=a.flatMap(u=>u[c]?[u[c]]:[]);if(l.length===0)break;o.push(...l.slice(0,e-o.length))}return o},wu=(t,e)=>{const r=t.getCenter(new x);let i=null,n=1/0;for(const s of e){const a=s.receiverBounds.distanceToPoint(r);a<n&&Number.isInteger(s.terrainLevel)&&(n=a,i=s.terrainLevel)}return i};/**
 * postprocessing v6.39.4 build Mon Jul 27 2026
 * https://github.com/pmndrs/postprocessing
 * Copyright 2015-2026 Raoul van Rüschen
 * @license Zlib
 */var _u=(()=>{const t=new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),e=new Float32Array([0,0,2,0,0,2]),r=new So;return r.setAttribute("position",new Gs(t,3)),r.setAttribute("uv",new Gs(e,2)),r})(),xu=class Fn{static get fullscreenGeometry(){return _u}constructor(e="Pass",r=new Cr,i=new Qn){this.name=e,this.renderer=null,this.scene=r,this.camera=i,this.screen=null,this.rtt=!0,this.needsSwap=!0,this.needsDepthBlit=!1,this.needsDepthTexture=!1,this.enabled=!0}get renderToScreen(){return!this.rtt}set renderToScreen(e){if(this.rtt===e){const r=this.fullscreenMaterial;r!==null&&(r.needsUpdate=!0),this.rtt=!e}}set mainScene(e){}set mainCamera(e){}setRenderer(e){this.renderer=e}isEnabled(){return this.enabled}setEnabled(e){this.enabled=e}get fullscreenMaterial(){return this.screen!==null?this.screen.material:null}set fullscreenMaterial(e){let r=this.screen;r!==null?r.material=e:(r=new Or(Fn.fullscreenGeometry,e),r.frustumCulled=!1,this.scene===null&&(this.scene=new Cr),this.scene.add(r),this.screen=r)}getFullscreenMaterial(){return this.fullscreenMaterial}setFullscreenMaterial(e){this.fullscreenMaterial=e}getDepthTexture(){return null}setDepthTexture(e,r=vo){}render(e,r,i,n,s){throw new Error("Render method not implemented!")}setSize(e,r){}initialize(e,r,i){}dispose(){for(const e of Object.keys(this)){const r=this[e];(r instanceof je||r instanceof Ri||r instanceof yo||r instanceof Fn)&&this[e].dispose()}this.fullscreenMaterial!==null&&this.fullscreenMaterial.dispose()}},No={NONE:0,DEPTH:1,CONVOLUTION:2},Z={SKIP:9,SET:30,ADD:0,ALPHA:1,AVERAGE:2,COLOR:3,COLOR_BURN:4,COLOR_DODGE:5,DARKEN:6,DIFFERENCE:7,DIVIDE:8,DST:9,EXCLUSION:10,HARD_LIGHT:11,HARD_MIX:12,HUE:13,INVERT:14,INVERT_RGB:15,LIGHTEN:16,LINEAR_BURN:17,LINEAR_DODGE:18,LINEAR_LIGHT:19,LUMINOSITY:20,MULTIPLY:21,NEGATION:22,NORMAL:23,OVERLAY:24,PIN_LIGHT:25,REFLECT:26,SATURATION:27,SCREEN:28,SOFT_LIGHT:29,SRC:30,SUBTRACT:31,VIVID_LIGHT:32},Tu="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",bu="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,src.a*opacity);}",Mu="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=(dst.rgb+src.rgb)*0.5;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Ru="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.xy,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Eu="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=mix(step(0.0,b)*(1.0-min(vec3(1.0),(1.0-a)/max(b,1e-9))),vec3(1.0),step(1.0,a));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Au="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=step(0.0,a)*mix(min(vec3(1.0),a/max(1.0-b,1e-9)),vec3(1.0),step(1.0,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Cu="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Iu="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=abs(dst.rgb-src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Du="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb/max(src.rgb,1e-9);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Pu="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-2.0*dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Nu="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb,1.0);vec3 b=min(src.rgb,1.0);vec3 c=mix(2.0*a*b,1.0-2.0*(1.0-a)*(1.0-b),step(0.5,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Ou="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=step(1.0,dst.rgb+src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Lu="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.x,a.yz));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Fu="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Bu="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=src.rgb*max(1.0-dst.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Uu="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Hu="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",zu="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb+src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",ku="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(2.0*src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Vu="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.xy,b.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Wu="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Gu="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-abs(1.0-dst.rgb-src.rgb),0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",ju="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,opacity);}",Yu="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=2.0*src.rgb*dst.rgb;vec3 b=1.0-2.0*(1.0-src.rgb)*(1.0-dst.rgb);vec3 c=mix(a,b,step(0.5,dst.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",qu="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 c=mix(mix(src2,dst.rgb,step(0.5*dst.rgb,src.rgb)),max(src2-1.0,vec3(0.0)),step(dst.rgb,src2-1.0));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Ku="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb*dst.rgb/max(1.0-src.rgb,1e-9),1.0);vec3 c=mix(a,src.rgb,step(1.0,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Xu="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.x,b.y,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",$u="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-min(dst.rgb*src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Qu="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 d=dst.rgb+(src2-1.0);vec3 w=step(0.5,src.rgb);vec3 a=dst.rgb-(1.0-src2)*dst.rgb*(1.0-dst.rgb);vec3 b=mix(d*(sqrt(dst.rgb)-dst.rgb),d*dst.rgb*((16.0*dst.rgb-12.0)*dst.rgb+3.0),w*(1.0-step(0.25,dst.rgb)));vec3 c=mix(a,b,w);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Zu="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return src;}",Ju="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",ed="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=mix(max(1.0-min((1.0-dst.rgb)/(2.0*src.rgb),1.0),0.0),min(dst.rgb/(2.0*(1.0-src.rgb)),1.0),step(0.5,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",td=new Map([[Z.ADD,Tu],[Z.ALPHA,bu],[Z.AVERAGE,Mu],[Z.COLOR,Ru],[Z.COLOR_BURN,Eu],[Z.COLOR_DODGE,Au],[Z.DARKEN,Cu],[Z.DIFFERENCE,Iu],[Z.DIVIDE,Du],[Z.DST,null],[Z.EXCLUSION,Pu],[Z.HARD_LIGHT,Nu],[Z.HARD_MIX,Ou],[Z.HUE,Lu],[Z.INVERT,Fu],[Z.INVERT_RGB,Bu],[Z.LIGHTEN,Uu],[Z.LINEAR_BURN,Hu],[Z.LINEAR_DODGE,zu],[Z.LINEAR_LIGHT,ku],[Z.LUMINOSITY,Vu],[Z.MULTIPLY,Wu],[Z.NEGATION,Gu],[Z.NORMAL,ju],[Z.OVERLAY,Yu],[Z.PIN_LIGHT,qu],[Z.REFLECT,Ku],[Z.SATURATION,Xu],[Z.SCREEN,$u],[Z.SOFT_LIGHT,Qu],[Z.SRC,Zu],[Z.SUBTRACT,Ju],[Z.VIVID_LIGHT,ed]]),rd=class extends go{constructor(t,e=1){super(),this._blendFunction=t,this.opacity=new D(e)}getOpacity(){return this.opacity.value}setOpacity(t){this.opacity.value=t}get blendFunction(){return this._blendFunction}set blendFunction(t){this._blendFunction=t,this.dispatchEvent({type:"change"})}getBlendFunction(){return this.blendFunction}setBlendFunction(t){this.blendFunction=t}getShaderCode(){return td.get(this.blendFunction)}},id=class extends go{constructor(t,e,{attributes:r=No.NONE,blendFunction:i=Z.NORMAL,defines:n=new Map,uniforms:s=new Map,extensions:a=null,vertexShader:o=null}={}){super(),this.name=t,this.renderer=null,this.attributes=r,this.fragmentShader=e,this.vertexShader=o,this.defines=n,this.uniforms=s,this.extensions=a,this.blendMode=new rd(i),this.blendMode.addEventListener("change",c=>this.setChanged()),this._inputColorSpace=Qc,this._outputColorSpace=Zc}get inputColorSpace(){return this._inputColorSpace}set inputColorSpace(t){this._inputColorSpace=t,this.setChanged()}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t,this.setChanged()}set mainScene(t){}set mainCamera(t){}getName(){return this.name}setRenderer(t){this.renderer=t}getDefines(){return this.defines}getUniforms(){return this.uniforms}getExtensions(){return this.extensions}getBlendMode(){return this.blendMode}getAttributes(){return this.attributes}setAttributes(t){this.attributes=t,this.setChanged()}getFragmentShader(){return this.fragmentShader}setFragmentShader(t){this.fragmentShader=t,this.setChanged()}getVertexShader(){return this.vertexShader}setVertexShader(t){this.vertexShader=t,this.setChanged()}setChanged(){this.dispatchEvent({type:"change"})}setDepthTexture(t,e=vo){}update(t,e,r){}setSize(t,e){}initialize(t,e,r){}dispose(){for(const t of Object.keys(this)){const e=this[t];(e instanceof je||e instanceof Ri||e instanceof yo||e instanceof xu)&&this[t].dispose()}}};const nd=new x;function Oo(t,e,r=new x,i){const{x:n,y:s,z:a}=t,o=e.x,c=e.y,l=e.z,u=n*n*o,d=s*s*c,p=a*a*l,g=u+d+p,h=Math.sqrt(1/g);if(!Number.isFinite(h))return;const v=nd.copy(t).multiplyScalar(h);if(g<((i==null?void 0:i.centerTolerance)??.1))return r.copy(v);const f=v.multiply(e).multiplyScalar(2);let y=(1-h)*t.length()/(f.length()/2),T=0,E,A,M,I;do{y-=T,E=1/(1+y*o),A=1/(1+y*c),M=1/(1+y*l);const R=E*E,F=A*A,P=M*M,B=R*E,Y=F*A,V=P*M;I=u*R+d*F+p*P-1,T=I/((u*B*o+d*Y*c+p*V*l)*-2)}while(Math.abs(I)>1e-12);return r.set(n*E,s*A,a*M)}const ti=new x,ha=new x,ma=new x,Bn=class{constructor(e,r,i){this.radii=new x(e,r,i)}get minimumRadius(){return Math.min(this.radii.x,this.radii.y,this.radii.z)}get maximumRadius(){return Math.max(this.radii.x,this.radii.y,this.radii.z)}reciprocalRadii(e=new x){const{x:r,y:i,z:n}=this.radii;return e.set(1/r,1/i,1/n)}reciprocalRadiiSquared(e=new x){const{x:r,y:i,z:n}=this.radii;return e.set(1/r**2,1/i**2,1/n**2)}projectOnSurface(e,r=new x,i){return Oo(e,this.reciprocalRadiiSquared(),r,i)}getSurfaceNormal(e,r=new x){return r.multiplyVectors(this.reciprocalRadiiSquared(ti),e).normalize()}getEastNorthUpVectors(e,r=new x,i=new x,n=new x){this.getSurfaceNormal(e,n),r.set(-e.y,e.x,0).normalize(),i.crossVectors(n,r).normalize()}getEastNorthUpFrame(e,r=new J){const i=ti,n=ha,s=ma;return this.getEastNorthUpVectors(e,i,n,s),r.makeBasis(i,n,s).setPosition(e)}getIntersection(e,r=new x){const i=this.reciprocalRadii(ti),n=ha.copy(i).multiply(e.origin),s=ma.copy(i).multiply(e.direction),a=n.lengthSq(),o=s.lengthSq(),c=n.dot(s),l=c**2-o*(a-1);if(a===1)return r.copy(e.origin);if(a>1){if(c>=0||l<0)return;const u=Math.sqrt(l),d=(-c-u)/o,p=(-c+u)/o;return e.at(Math.min(d,p),r)}if(a<1){const u=c**2-o*(a-1),d=Math.sqrt(u),p=(-c+d)/o;return e.at(p,r)}if(c<0)return e.at(-c/o,r)}getOsculatingSphereCenter(e,r,i=new x){const n=this.radii.x**2,s=ti.set(e.x/n,e.y/n,e.z/this.radii.z**2).normalize();return i.copy(s.multiplyScalar(-r).add(e))}};Bn.WGS84=new Bn(6378137,6378137,6356752314245179e-9);let ct=Bn;const ri=new x,fa=new x,xr=class Un{constructor(e=0,r=0,i=0){this.longitude=e,this.latitude=r,this.height=i}set(e,r,i){return this.longitude=e,this.latitude=r,i!=null&&(this.height=i),this}clone(){return new Un(this.longitude,this.latitude,this.height)}copy(e){return this.longitude=e.longitude,this.latitude=e.latitude,this.height=e.height,this}equals(e){return e.longitude===this.longitude&&e.latitude===this.latitude&&e.height===this.height}setLongitude(e){return this.longitude=e,this}setLatitude(e){return this.latitude=e,this}setHeight(e){return this.height=e,this}normalize(){return this.longitude<Un.MIN_LONGITUDE&&(this.longitude+=Math.PI*2),this}setFromECEF(e,r){const i=((r==null?void 0:r.ellipsoid)??ct.WGS84).reciprocalRadiiSquared(ri),n=Oo(e,i,fa,r);if(n==null)throw new Error(`Could not project position to ellipsoid surface: ${e.toArray()}`);const s=ri.multiplyVectors(n,i).normalize();this.longitude=Math.atan2(s.y,s.x),this.latitude=Math.asin(s.z);const a=ri.subVectors(e,n);return this.height=Math.sign(a.dot(e))*a.length(),this}toECEF(e=new x,r){const i=(r==null?void 0:r.ellipsoid)??ct.WGS84,n=ri.multiplyVectors(i.radii,i.radii),s=Math.cos(this.latitude),a=fa.set(s*Math.cos(this.longitude),s*Math.sin(this.longitude),Math.sin(this.latitude)).normalize();return e.multiplyVectors(n,a),e.divideScalar(Math.sqrt(a.dot(e))).add(a.multiplyScalar(this.height))}fromArray(e,r=0){return this.longitude=e[r],this.latitude=e[r+1],this.height=e[r+2],this}toArray(e=[],r=0){return e[r]=this.longitude,e[r+1]=this.latitude,e[r+2]=this.height,e}*[Symbol.iterator](){yield this.longitude,yield this.latitude,yield this.height}};xr.MIN_LONGITUDE=-Math.PI,xr.MAX_LONGITUDE=Math.PI,xr.MIN_LATITUDE=-Math.PI/2,xr.MAX_LATITUDE=Math.PI/2;let Lo=xr;var sd="Invariant failed";function Fo(t,e){if(!t)throw new Error(sd)}class ad extends Jn{load(e,r,i,n){const s=new el(this.manager);s.setResponseType("arraybuffer"),s.setRequestHeader(this.requestHeader),s.setPath(this.path),s.setWithCredentials(this.withCredentials),s.load(e,a=>{Fo(a instanceof ArrayBuffer);try{r(a)}catch(o){n!=null?n(o):console.error(o),this.manager.itemError(e)}},i,n)}}const od="This is not an object",cd="This is not a Float16Array object",pa="This constructor is not a subclass of Float16Array",Bo="The constructor property value is not an object",ld="Species constructor didn't return TypedArray object",ud="Derived constructor created TypedArray object which was too small length",Rr="Attempting to access detached ArrayBuffer",Hn="Cannot convert undefined or null to object",zn="Cannot mix BigInt and other types, use explicit conversions",ga="@@iterator property is not callable",va="Reduce of empty array with no initial value",dd="The comparison function must be either a function or undefined",ln="Offset is out of bounds";function he(t){return(e,...r)=>Fe(t,e,r)}function ir(t,e){return he(Jt(t,e).get)}const{apply:Fe,construct:Tr,defineProperty:hd,get:un,getOwnPropertyDescriptor:Jt,getPrototypeOf:Br,has:kn,ownKeys:Uo,set:ya,setPrototypeOf:Ho}=Reflect,md=Proxy,{EPSILON:fd,MAX_SAFE_INTEGER:Sa,isFinite:zo,isNaN:er}=Number,{iterator:lt,species:pd,toStringTag:ns,for:gd}=Symbol,tr=Object,{create:Ai,defineProperty:Ur,freeze:vd,is:wa}=tr,Vn=tr.prototype,yd=Vn.__lookupGetter__?he(Vn.__lookupGetter__):(t,e)=>{if(t==null)throw ge(Hn);let r=tr(t);do{const i=Jt(r,e);if(i!==void 0)return St(i,"get")?i.get:void 0}while((r=Br(r))!==null)},St=tr.hasOwn||he(Vn.hasOwnProperty),ko=Array,Vo=ko.isArray,Ci=ko.prototype,Sd=he(Ci.join),wd=he(Ci.push),_d=he(Ci.toLocaleString),ss=Ci[lt],xd=he(ss),{abs:Td,trunc:Wo}=Math,Ii=ArrayBuffer,bd=Ii.isView,Go=Ii.prototype,Md=he(Go.slice),Rd=ir(Go,"byteLength"),Wn=typeof SharedArrayBuffer<"u"?SharedArrayBuffer:null,Ed=Wn&&ir(Wn.prototype,"byteLength"),as=Br(Uint8Array),Ad=as.from,be=as.prototype,Cd=be[lt],Id=he(be.keys),Dd=he(be.values),Pd=he(be.entries),Nd=he(be.set),_a=he(be.reverse),Od=he(be.fill),Ld=he(be.copyWithin),xa=he(be.sort),yr=he(be.slice),Fd=he(be.subarray),Te=ir(be,"buffer"),Ct=ir(be,"byteOffset"),ne=ir(be,"length"),jo=ir(be,ns),Bd=Uint8Array,He=Uint16Array,Ta=(...t)=>Fe(Ad,He,t),os=Uint32Array,Ud=Float32Array,Ot=Br([][lt]()),Di=he(Ot.next),Hd=he(function*(){}().next),zd=Br(Ot),kd=DataView.prototype,Vd=he(kd.getUint16),ge=TypeError,dn=RangeError,Yo=WeakSet,qo=Yo.prototype,Wd=he(qo.add),Gd=he(qo.has),Pi=WeakMap,cs=Pi.prototype,gi=he(cs.get),jd=he(cs.has),ls=he(cs.set),Ko=new Pi,Yd=Ai(null,{next:{value:function(){const t=gi(Ko,this);return Di(t)}},[lt]:{value:function(){return this}}});function br(t){if(t[lt]===ss&&Ot.next===Di)return t;const e=Ai(Yd);return ls(Ko,e,xd(t)),e}const Xo=new Pi,$o=Ai(zd,{next:{value:function(){const t=gi(Xo,this);return Hd(t)},writable:!0,configurable:!0}});for(const t of Uo(Ot))t!=="next"&&Ur($o,t,Jt(Ot,t));function ba(t){const e=Ai($o);return ls(Xo,e,t),e}function vi(t){return t!==null&&typeof t=="object"||typeof t=="function"}function Ma(t){return t!==null&&typeof t=="object"}function yi(t){return jo(t)!==void 0}function Gn(t){const e=jo(t);return e==="BigInt64Array"||e==="BigUint64Array"}function qd(t){try{return Vo(t)?!1:(Rd(t),!0)}catch{return!1}}function Qo(t){if(Wn===null)return!1;try{return Ed(t),!0}catch{return!1}}function Kd(t){return qd(t)||Qo(t)}function Ra(t){return Vo(t)?t[lt]===ss&&Ot.next===Di:!1}function Xd(t){return yi(t)?t[lt]===Cd&&Ot.next===Di:!1}function ii(t){if(typeof t!="string")return!1;const e=+t;return t!==e+""||!zo(e)?!1:e===Wo(e)}const Si=gd("__Float16Array__");function $d(t){if(!Ma(t))return!1;const e=Br(t);if(!Ma(e))return!1;const r=e.constructor;if(r===void 0)return!1;if(!vi(r))throw ge(Bo);return kn(r,Si)}const jn=1/fd;function Qd(t){return t+jn-jn}const Zo=6103515625e-14,Zd=65504,Jo=.0009765625,Ea=Jo*Zo,Jd=Jo*jn;function eh(t){const e=+t;if(!zo(e)||e===0)return e;const r=e>0?1:-1,i=Td(e);if(i<Zo)return r*Qd(i/Ea)*Ea;const n=(1+Jd)*i,s=n-(n-i);return s>Zd||er(s)?r*(1/0):r*s}const ec=new Ii(4),tc=new Ud(ec),rc=new os(ec),Je=new He(512),et=new Bd(512);for(let t=0;t<256;++t){const e=t-127;e<-24?(Je[t]=0,Je[t|256]=32768,et[t]=24,et[t|256]=24):e<-14?(Je[t]=1024>>-e-14,Je[t|256]=1024>>-e-14|32768,et[t]=-e-1,et[t|256]=-e-1):e<=15?(Je[t]=e+15<<10,Je[t|256]=e+15<<10|32768,et[t]=13,et[t|256]=13):e<128?(Je[t]=31744,Je[t|256]=64512,et[t]=24,et[t|256]=24):(Je[t]=31744,Je[t|256]=64512,et[t]=13,et[t|256]=13)}function st(t){tc[0]=eh(t);const e=rc[0],r=e>>23&511;return Je[r]+((e&8388607)>>et[r])}const us=new os(2048);for(let t=1;t<1024;++t){let e=t<<13,r=0;for(;!(e&8388608);)e<<=1,r-=8388608;e&=-8388609,r+=947912704,us[t]=e|r}for(let t=1024;t<2048;++t)us[t]=939524096+(t-1024<<13);const nr=new os(64);for(let t=1;t<31;++t)nr[t]=t<<23;nr[31]=1199570944;nr[32]=2147483648;for(let t=33;t<63;++t)nr[t]=2147483648+(t-32<<23);nr[63]=3347054592;const ic=new He(64);for(let t=1;t<64;++t)t!==32&&(ic[t]=1024);function se(t){const e=t>>10;return rc[0]=us[ic[e]+(t&1023)]+nr[e],tc[0]}function vt(t){const e=+t;return er(e)||e===0?0:Wo(e)}function hn(t){const e=vt(t);return e<0?0:e<Sa?e:Sa}function ni(t,e){if(!vi(t))throw ge(od);const r=t.constructor;if(r===void 0)return e;if(!vi(r))throw ge(Bo);return r[pd]??e}function Er(t){if(Qo(t))return!1;try{return Md(t,0,0),!1}catch{}return!0}function Aa(t,e){const r=er(t),i=er(e);if(r&&i)return 0;if(r)return 1;if(i||t<e)return-1;if(t>e)return 1;if(t===0&&e===0){const n=wa(t,0),s=wa(e,0);if(!n&&s)return-1;if(n&&!s)return 1}return 0}const ds=2,wi=new Pi;function qt(t){return jd(wi,t)||!bd(t)&&$d(t)}function ie(t){if(!qt(t))throw ge(cd)}function si(t,e){const r=qt(t),i=yi(t);if(!r&&!i)throw ge(ld);if(typeof e=="number"){let n;if(r){const s=K(t);n=ne(s)}else n=ne(t);if(n<e)throw ge(ud)}if(Gn(t))throw ge(zn)}function K(t){const e=gi(wi,t);if(e!==void 0){const n=Te(e);if(Er(n))throw ge(Rr);return e}const r=t.buffer;if(Er(r))throw ge(Rr);const i=Tr(oe,[r,t.byteOffset,t.length],t.constructor);return gi(wi,i)}function Ca(t){const e=ne(t),r=[];for(let i=0;i<e;++i)r[i]=se(t[i]);return r}const nc=new Yo;for(const t of Uo(be)){if(t===ns)continue;const e=Jt(be,t);St(e,"get")&&typeof e.get=="function"&&Wd(nc,e.get)}const th=vd({get(t,e,r){return ii(e)&&St(t,e)?se(un(t,e)):Gd(nc,yd(t,e))?un(t,e):un(t,e,r)},set(t,e,r,i){return ii(e)&&St(t,e)?ya(t,e,st(r)):ya(t,e,r,i)},getOwnPropertyDescriptor(t,e){if(ii(e)&&St(t,e)){const r=Jt(t,e);return r.value=se(r.value),r}return Jt(t,e)},defineProperty(t,e,r){return ii(e)&&St(t,e)&&St(r,"value")&&(r.value=st(r.value)),hd(t,e,r)}});class oe{constructor(e,r,i){let n;if(qt(e))n=Tr(He,[K(e)],new.target);else if(vi(e)&&!Kd(e)){let a,o;if(yi(e)){a=e,o=ne(e);const c=Te(e);if(Er(c))throw ge(Rr);if(Gn(e))throw ge(zn);const l=new Ii(o*ds);n=Tr(He,[l],new.target)}else{const c=e[lt];if(c!=null&&typeof c!="function")throw ge(ga);c!=null?Ra(e)?(a=e,o=e.length):(a=[...e],o=a.length):(a=e,o=hn(a.length)),n=Tr(He,[o],new.target)}for(let c=0;c<o;++c)n[c]=st(a[c])}else n=Tr(He,arguments,new.target);const s=new md(n,th);return ls(wi,s,n),s}static from(e,...r){const i=this;if(!kn(i,Si))throw ge(pa);if(i===oe){if(qt(e)&&r.length===0){const u=K(e),d=new He(Te(u),Ct(u),ne(u));return new oe(Te(yr(d)))}if(r.length===0)return new oe(Te(Ta(e,st)));const c=r[0],l=r[1];return new oe(Te(Ta(e,function(u,...d){return st(Fe(c,this,[u,...br(d)]))},l)))}let n,s;const a=e[lt];if(a!=null&&typeof a!="function")throw ge(ga);if(a!=null)Ra(e)?(n=e,s=e.length):Xd(e)?(n=e,s=ne(e)):(n=[...e],s=n.length);else{if(e==null)throw ge(Hn);n=tr(e),s=hn(n.length)}const o=new i(s);if(r.length===0)for(let c=0;c<s;++c)o[c]=n[c];else{const c=r[0],l=r[1];for(let u=0;u<s;++u)o[u]=Fe(c,l,[n[u],u])}return o}static of(...e){const r=this;if(!kn(r,Si))throw ge(pa);const i=e.length;if(r===oe){const s=new oe(i),a=K(s);for(let o=0;o<i;++o)a[o]=st(e[o]);return s}const n=new r(i);for(let s=0;s<i;++s)n[s]=e[s];return n}keys(){ie(this);const e=K(this);return Id(e)}values(){ie(this);const e=K(this);return ba(function*(){for(const r of Dd(e))yield se(r)}())}entries(){ie(this);const e=K(this);return ba(function*(){for(const[r,i]of Pd(e))yield[r,se(i)]}())}at(e){ie(this);const r=K(this),i=ne(r),n=vt(e),s=n>=0?n:i+n;if(!(s<0||s>=i))return se(r[s])}with(e,r){ie(this);const i=K(this),n=ne(i),s=vt(e),a=s>=0?s:n+s,o=+r;if(a<0||a>=n)throw dn(ln);const c=new He(Te(i),Ct(i),ne(i)),l=new oe(Te(yr(c))),u=K(l);return u[a]=st(o),l}map(e,...r){ie(this);const i=K(this),n=ne(i),s=r[0],a=ni(i,oe);if(a===oe){const c=new oe(n),l=K(c);for(let u=0;u<n;++u){const d=se(i[u]);l[u]=st(Fe(e,s,[d,u,this]))}return c}const o=new a(n);si(o,n);for(let c=0;c<n;++c){const l=se(i[c]);o[c]=Fe(e,s,[l,c,this])}return o}filter(e,...r){ie(this);const i=K(this),n=ne(i),s=r[0],a=[];for(let l=0;l<n;++l){const u=se(i[l]);Fe(e,s,[u,l,this])&&wd(a,u)}const o=ni(i,oe),c=new o(a);return si(c),c}reduce(e,...r){ie(this);const i=K(this),n=ne(i);if(n===0&&r.length===0)throw ge(va);let s,a;r.length===0?(s=se(i[0]),a=1):(s=r[0],a=0);for(let o=a;o<n;++o)s=e(s,se(i[o]),o,this);return s}reduceRight(e,...r){ie(this);const i=K(this),n=ne(i);if(n===0&&r.length===0)throw ge(va);let s,a;r.length===0?(s=se(i[n-1]),a=n-2):(s=r[0],a=n-1);for(let o=a;o>=0;--o)s=e(s,se(i[o]),o,this);return s}forEach(e,...r){ie(this);const i=K(this),n=ne(i),s=r[0];for(let a=0;a<n;++a)Fe(e,s,[se(i[a]),a,this])}find(e,...r){ie(this);const i=K(this),n=ne(i),s=r[0];for(let a=0;a<n;++a){const o=se(i[a]);if(Fe(e,s,[o,a,this]))return o}}findIndex(e,...r){ie(this);const i=K(this),n=ne(i),s=r[0];for(let a=0;a<n;++a){const o=se(i[a]);if(Fe(e,s,[o,a,this]))return a}return-1}findLast(e,...r){ie(this);const i=K(this),n=ne(i),s=r[0];for(let a=n-1;a>=0;--a){const o=se(i[a]);if(Fe(e,s,[o,a,this]))return o}}findLastIndex(e,...r){ie(this);const i=K(this),n=ne(i),s=r[0];for(let a=n-1;a>=0;--a){const o=se(i[a]);if(Fe(e,s,[o,a,this]))return a}return-1}every(e,...r){ie(this);const i=K(this),n=ne(i),s=r[0];for(let a=0;a<n;++a)if(!Fe(e,s,[se(i[a]),a,this]))return!1;return!0}some(e,...r){ie(this);const i=K(this),n=ne(i),s=r[0];for(let a=0;a<n;++a)if(Fe(e,s,[se(i[a]),a,this]))return!0;return!1}set(e,...r){ie(this);const i=K(this),n=vt(r[0]);if(n<0)throw dn(ln);if(e==null)throw ge(Hn);if(Gn(e))throw ge(zn);if(qt(e))return Nd(K(this),K(e),n);if(yi(e)){const c=Te(e);if(Er(c))throw ge(Rr)}const s=ne(i),a=tr(e),o=hn(a.length);if(n===1/0||o+n>s)throw dn(ln);for(let c=0;c<o;++c)i[c+n]=st(a[c])}reverse(){ie(this);const e=K(this);return _a(e),this}toReversed(){ie(this);const e=K(this),r=new He(Te(e),Ct(e),ne(e)),i=new oe(Te(yr(r))),n=K(i);return _a(n),i}fill(e,...r){ie(this);const i=K(this);return Od(i,st(e),...br(r)),this}copyWithin(e,r,...i){ie(this);const n=K(this);return Ld(n,e,r,...br(i)),this}sort(e){ie(this);const r=K(this),i=e!==void 0?e:Aa;return xa(r,(n,s)=>i(se(n),se(s))),this}toSorted(e){ie(this);const r=K(this);if(e!==void 0&&typeof e!="function")throw new ge(dd);const i=e!==void 0?e:Aa,n=new He(Te(r),Ct(r),ne(r)),s=new oe(Te(yr(n))),a=K(s);return xa(a,(o,c)=>i(se(o),se(c))),s}slice(e,r){ie(this);const i=K(this),n=ni(i,oe);if(n===oe){const h=new He(Te(i),Ct(i),ne(i));return new oe(Te(yr(h,e,r)))}const s=ne(i),a=vt(e),o=r===void 0?s:vt(r);let c;a===-1/0?c=0:a<0?c=s+a>0?s+a:0:c=s<a?s:a;let l;o===-1/0?l=0:o<0?l=s+o>0?s+o:0:l=s<o?s:o;const u=l-c>0?l-c:0,d=new n(u);if(si(d,u),u===0)return d;const p=Te(i);if(Er(p))throw ge(Rr);let g=0;for(;c<l;)d[g]=se(i[c]),++c,++g;return d}subarray(e,r){ie(this);const i=K(this),n=ni(i,oe),s=new He(Te(i),Ct(i),ne(i)),a=Fd(s,e,r),o=new n(Te(a),Ct(a),ne(a));return si(o),o}indexOf(e,...r){ie(this);const i=K(this),n=ne(i);let s=vt(r[0]);if(s===1/0)return-1;s<0&&(s+=n,s<0&&(s=0));for(let a=s;a<n;++a)if(St(i,a)&&se(i[a])===e)return a;return-1}lastIndexOf(e,...r){ie(this);const i=K(this),n=ne(i);let s=r.length>=1?vt(r[0]):n-1;if(s===-1/0)return-1;s>=0?s=s<n-1?s:n-1:s+=n;for(let a=s;a>=0;--a)if(St(i,a)&&se(i[a])===e)return a;return-1}includes(e,...r){ie(this);const i=K(this),n=ne(i);let s=vt(r[0]);if(s===1/0)return!1;s<0&&(s+=n,s<0&&(s=0));const a=er(e);for(let o=s;o<n;++o){const c=se(i[o]);if(a&&er(c)||c===e)return!0}return!1}join(e){ie(this);const r=K(this),i=Ca(r);return Sd(i,e)}toLocaleString(...e){ie(this);const r=K(this),i=Ca(r);return _d(i,...br(e))}get[ns](){if(qt(this))return"Float16Array"}}Ur(oe,"BYTES_PER_ELEMENT",{value:ds});Ur(oe,Si,{});Ho(oe,as);const _i=oe.prototype;Ur(_i,"BYTES_PER_ELEMENT",{value:ds});Ur(_i,lt,{value:_i.values,writable:!0,configurable:!0});Ho(_i,be);function rh(t,e,...r){return se(Vd(t,e,...br(r)))}function ih(t){return t instanceof Int8Array||t instanceof Uint8Array||t instanceof Uint8ClampedArray||t instanceof Int16Array||t instanceof Uint16Array||t instanceof Int32Array||t instanceof Uint32Array||t instanceof oe||t instanceof Float32Array||t instanceof Float64Array}let ai;function nh(){if(ai!=null)return ai;const t=new Uint32Array([268435456]);return ai=new Uint8Array(t.buffer,t.byteOffset,t.byteLength)[0]===0,ai}function sh(t,e,r,i=!0){if(i===nh())return new e(t);const n=Object.assign(new DataView(t),{getFloat16(a,o){return rh(this,a,o)}}),s=new e(n.byteLength/e.BYTES_PER_ELEMENT);for(let a=0,o=0;a<s.length;++a,o+=e.BYTES_PER_ELEMENT)s[a]=n[r](o,i);return s}const mn=(t,e)=>sh(t,oe,"getFloat16",e);class ah extends Jn{load(e,r,i,n){const s=new ad(this.manager);s.setRequestHeader(this.requestHeader),s.setPath(this.path),s.setWithCredentials(this.withCredentials),s.load(e,a=>{try{r(this.parseTypedArray(a))}catch(o){n!=null?n(o):console.error(o),this.manager.itemError(e)}},i,n)}}function oh(t){return class extends ah{constructor(){super(...arguments),this.parseTypedArray=t}}}function ch(t){const e=t instanceof Int8Array?tl:t instanceof Uint8Array?Ys:t instanceof Uint8ClampedArray?Ys:t instanceof Int16Array?rl:t instanceof Uint16Array?il:t instanceof Int32Array?nl:t instanceof Uint32Array?Nt:t instanceof oe?wo:t instanceof Float32Array?yt:t instanceof Float64Array?yt:null;return Fo(e!=null),e}const lh={format:Dr,minFilter:js,magFilter:js};class uh extends Jn{constructor(){super(...arguments),this.parameters={}}load(e,r,i,n){const s=new this.Texture,a=new this.TypedArrayLoader(this.manager);a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(this.withCredentials),a.load(e,o=>{s.image.data=o instanceof oe?new Uint16Array(o.buffer):o;const{width:c,height:l,depth:u,...d}=this.parameters;c!=null&&(s.image.width=c),l!=null&&(s.image.height=l),"depth"in s.image&&u!=null&&(s.image.depth=u),s.type=ch(o),Object.assign(s,d),s.needsUpdate=!0,r(s)},i,n)}}function sc(t,e,r){return class extends uh{constructor(){super(...arguments),this.Texture=t,this.TypedArrayLoader=oh(e),this.parameters={...lh,...r}}}}function dh(t,e){return sc(Jc,t,e)}function hh(t,e){return sc(Pn,t,e)}function mh(t,e){return new(dh(t,e))}function Ia(t,e){return new(hh(t,e))}const xi=Zn.clamp,Yn=Zn.degToRad;function fh(t,e,r,i=0,n=1){return Zn.mapLinear(t,e,r,i,n)}function ph(t){return Math.min(Math.max(t,0),1)}function Oe(t){return(e,r)=>{e instanceof Ri?Object.defineProperty(e,r,{enumerable:!0,get(){var i;return((i=this.defines)==null?void 0:i[t])!=null},set(i){var n;i!==this[r]&&(i?(this.defines??(this.defines={}),this.defines[t]="1"):(n=this.defines)==null||delete n[t],this.needsUpdate=!0)}}):Object.defineProperty(e,r,{enumerable:!0,get(){return this.defines.has(t)},set(i){i!==this[r]&&(i?this.defines.set(t,"1"):this.defines.delete(t),this.setChanged())}})}}function gh(t,{min:e=Number.MIN_SAFE_INTEGER,max:r=Number.MAX_SAFE_INTEGER}={}){return(i,n)=>{i instanceof Ri?Object.defineProperty(i,n,{enumerable:!0,get(){var s;const a=(s=this.defines)==null?void 0:s[t];return a!=null?parseInt(a):0},set(s){const a=this[n];s!==a&&(this.defines??(this.defines={}),this.defines[t]=xi(s,e,r).toFixed(0),this.needsUpdate=!0)}}):Object.defineProperty(i,n,{enumerable:!0,get(){const s=this.defines.get(t);return s!=null?parseInt(s):0},set(s){const a=this[n];s!==a&&(this.defines.set(t,xi(s,e,r).toFixed(0)),this.setChanged())}})}}var Hr=Uint8Array,ac=Uint16Array,vh=Uint32Array,yh=new Hr([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Sh=new Hr([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),oc=function(t,e){for(var r=new ac(31),i=0;i<31;++i)r[i]=e+=1<<t[i-1];for(var n=new vh(r[30]),i=1;i<30;++i)for(var s=r[i];s<r[i+1];++s)n[s]=s-r[i]<<5|i;return[r,n]},cc=oc(yh,2),wh=cc[0],_h=cc[1];wh[28]=258,_h[258]=28;oc(Sh,0);var xh=new ac(32768);for(var me=0;me<32768;++me){var xt=(me&43690)>>>1|(me&21845)<<1;xt=(xt&52428)>>>2|(xt&13107)<<2,xt=(xt&61680)>>>4|(xt&3855)<<4,xh[me]=((xt&65280)>>>8|(xt&255)<<8)>>>1}var Ni=new Hr(288);for(var me=0;me<144;++me)Ni[me]=8;for(var me=144;me<256;++me)Ni[me]=9;for(var me=256;me<280;++me)Ni[me]=7;for(var me=280;me<288;++me)Ni[me]=8;var Th=new Hr(32);for(var me=0;me<32;++me)Th[me]=5;var bh=new Hr(0),Mh=typeof TextDecoder<"u"&&new TextDecoder,Rh=0;try{Mh.decode(bh,{stream:!0}),Rh=1}catch{}const Eh=/^[ \t]*#include +"([\w\d./]+)"/gm;function Lt(t,e){return t.replace(Eh,(r,i)=>{const n=i.split("/").reduce((s,a)=>typeof s!="string"&&s!=null?s[a]:void 0,e);if(typeof n!="string")throw new Error(`Could not find include for ${i}.`);return Lt(n,e)})}const Ah=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*(?:i\s*\+\+|\+\+\s*i)\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ch(t,e,r,i){let n="";for(let s=parseInt(e);s<parseInt(r);++s)n+=i.replace(/\[\s*i\s*\]/g,"["+s+"]").replace(/UNROLLED_LOOP_INDEX/g,`${s}`);return n}function Ih(t){return t.replace(Ah,Ch)}const Dh=`// Reference: https://github.com/mrdoob/three.js/blob/r171/examples/jsm/csm/CSMShader.js

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
`,Nh=`// Reference: https://advances.realtimerendering.com/s2014/index.html#_NEXT_GENERATION_POST

float interleavedGradientNoise(const vec2 coord) {
  const vec3 magic = vec3(0.06711056, 0.00583715, 52.9829189);
  return fract(magic.z * fract(dot(coord, magic.xy)));
}
`,Oh=`#if !defined(saturate)
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
`,Hh=Dh,zh=Ph,kh=Nh,Vh=Oh,Wh=Lh,lc=Fh,Gh=Bh,jh=Uh,hs=`// Based on the following work and adapted to Three.js.
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
`,Yh=["solarIrradiance","sunAngularRadius","bottomRadius","topRadius","rayleighScattering","mieScattering","miePhaseFunctionG","muSMin","skyRadianceToLuminance","sunRadianceToLuminance","luminousEfficiency"];function qh(t,e){if(e!=null)for(const r of Yh){const i=e[r];i!=null&&(t[r]instanceof x?t[r].copy(i):t[r]=i)}}const qn=class{constructor(e){this.solarIrradiance=new x(1.474,1.8504,1.91198),this.sunAngularRadius=.004675,this.bottomRadius=636e4,this.topRadius=642e4,this.rayleighScattering=new x(.005802,.013558,.0331),this.mieScattering=new x(.003996,.003996,.003996),this.miePhaseFunctionG=.8,this.muSMin=Math.cos(Yn(120)),this.skyRadianceToLuminance=new x(114974.916437,71305.954816,65310.548555),this.sunRadianceToLuminance=new x(98242.786222,69954.398112,66475.012354),this.luminousEfficiency=new x(.2126,.7152,.0722),this.skyRadianceToRelativeLuminance=new x,this.sunRadianceToRelativeLuminance=new x,qh(this,e);const r=this.luminousEfficiency.dot(this.skyRadianceToLuminance);this.skyRadianceToRelativeLuminance.copy(this.skyRadianceToLuminance).divideScalar(r),this.sunRadianceToRelativeLuminance.copy(this.sunRadianceToLuminance).divideScalar(r)}};qn.DEFAULT=new qn;let Oi=qn;const Li=64,Fi=16,ms=32,fs=128,ps=32,gs=8,Kh=gs*ps,Xh=fs,$h=ms,Bi=256,Ui=64,Qt=1/1e3,Qh="82e00c5222d6cbc222af69abdf6d3f4fc9f63030",fn=`https://media.githubusercontent.com/media/takram-design-engineering/three-geospatial/${Qh}/packages/atmosphere/assets`,Zh=new x;function Hi(t,e,r,i,n=!0){const s=r.projectOnSurface(t,Zh);return s!=null?r.getOsculatingSphereCenter(!n||s.lengthSq()<t.lengthSq()?s:t,e,i):i.setScalar(0)}const Jh=`precision highp sampler2DArray;

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
`,uc=`vec3 getLunarRadiance(const float moonAngularRadius) {
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
`;var tm=Object.defineProperty,qe=(t,e,r,i)=>{for(var n=void 0,s=t.length-1,a;s>=0;s--)(a=t[s])&&(n=a(e,r,n)||n);return n&&tm(e,r,n),n};const rm=new x,im=new x,nm=new Lo,sm={blendFunction:Z.NORMAL,octEncodedNormal:!1,reconstructNormal:!1,ellipsoid:ct.WGS84,correctAltitude:!0,correctGeometricError:!0,photometric:!0,sunIrradiance:!1,skyIrradiance:!1,transmittance:!0,inscatter:!0,irradianceScale:1,sky:!1,sun:!0,moon:!0,moonAngularRadius:.0045,lunarRadianceScale:1};class Ke extends id{constructor(e=new Mi,r,i=Oi.DEFAULT){const{blendFunction:n,normalBuffer:s=null,octEncodedNormal:a,reconstructNormal:o,irradianceTexture:c=null,scatteringTexture:l=null,transmittanceTexture:u=null,ellipsoid:d,correctAltitude:p,correctGeometricError:g,photometric:h,sunDirection:v,sunIrradiance:f,skyIrradiance:y,transmittance:T,inscatter:E,irradianceScale:A,sky:M,sun:I,moon:R,moonDirection:F,moonAngularRadius:P,lunarRadianceScale:B}={...sm,...r};super("AerialPerspectiveEffect",Ih(Lt(Jh,{core:{depth:zh,packing:Wh,math:Vh,transform:Gh,raySphereIntersection:lc,cascadedShadowMaps:Hh,interleavedGradientNoise:kh,vogelDisk:jh},parameters:rr,functions:hs,sky:uc})),{blendFunction:n,vertexShader:Lt(em,{parameters:rr}),attributes:No.DEPTH,uniforms:new Map(Object.entries({normalBuffer:new D(s),projectionMatrix:new D(new J),viewMatrix:new D(new J),inverseProjectionMatrix:new D(new J),inverseViewMatrix:new D(new J),cameraPosition:new D(new x),bottomRadius:new D(i.bottomRadius),ellipsoidRadii:new D(new x),ellipsoidCenter:new D(new x),inverseEllipsoidMatrix:new D(new J),altitudeCorrection:new D(new x),sunDirection:new D((v==null?void 0:v.clone())??new x),irradianceScale:new D(A),idealSphereAlpha:new D(0),moonDirection:new D((F==null?void 0:F.clone())??new x),moonAngularRadius:new D(P),lunarRadianceScale:new D(B),overlayBuffer:new D(null),shadowBuffer:new D(null),shadowMapSize:new D(new Mt),shadowIntervals:new D([]),shadowMatrices:new D([]),inverseShadowMatrices:new D([]),shadowFar:new D(0),shadowTopHeight:new D(0),shadowRadius:new D(3),stbnTexture:new D(null),frame:new D(0),shadowLengthBuffer:new D(null),u_solar_irradiance:new D(i.solarIrradiance),u_sun_angular_radius:new D(i.sunAngularRadius),u_bottom_radius:new D(i.bottomRadius*Qt),u_top_radius:new D(i.topRadius*Qt),u_rayleigh_scattering:new D(i.rayleighScattering),u_mie_scattering:new D(i.mieScattering),u_mie_phase_function_g:new D(i.miePhaseFunctionG),u_mu_s_min:new D(i.muSMin),u_irradiance_texture:new D(c),u_scattering_texture:new D(l),u_single_mie_scattering_texture:new D(l),u_transmittance_texture:new D(u)})),defines:new Map([["TRANSMITTANCE_TEXTURE_WIDTH",Bi.toFixed(0)],["TRANSMITTANCE_TEXTURE_HEIGHT",Ui.toFixed(0)],["SCATTERING_TEXTURE_R_SIZE",ms.toFixed(0)],["SCATTERING_TEXTURE_MU_SIZE",fs.toFixed(0)],["SCATTERING_TEXTURE_MU_S_SIZE",ps.toFixed(0)],["SCATTERING_TEXTURE_NU_SIZE",gs.toFixed(0)],["IRRADIANCE_TEXTURE_WIDTH",Li.toFixed(0)],["IRRADIANCE_TEXTURE_HEIGHT",Fi.toFixed(0)],["METER_TO_LENGTH_UNIT",Qt.toFixed(7)],["SUN_SPECTRAL_RADIANCE_TO_LUMINANCE",`vec3(${i.sunRadianceToRelativeLuminance.toArray().map(Y=>Y.toFixed(12)).join(",")})`],["SKY_SPECTRAL_RADIANCE_TO_LUMINANCE",`vec3(${i.skyRadianceToRelativeLuminance.toArray().map(Y=>Y.toFixed(12)).join(",")})`]])}),this.camera=e,this.atmosphere=i,this.ellipsoidMatrix=new J,this.overlay=null,this.shadow=null,this.shadowLength=null,this.shadowSampleCount=8,this.octEncodedNormal=a,this.reconstructNormal=o,this.ellipsoid=d,this.correctAltitude=p,this.correctGeometricError=g,this.photometric=h,this.sunIrradiance=f,this.skyIrradiance=y,this.transmittance=T,this.inscatter=E,this.sky=M,this.sun=I,this.moon=R}get mainCamera(){return this.camera}set mainCamera(e){this.camera=e}copyCameraSettings(e){const{projectionMatrix:r,matrixWorldInverse:i,projectionMatrixInverse:n,matrixWorld:s}=e,a=this.uniforms;a.get("projectionMatrix").value.copy(r),a.get("viewMatrix").value.copy(i),a.get("inverseProjectionMatrix").value.copy(n),a.get("inverseViewMatrix").value.copy(s);const o=e.getWorldPosition(a.get("cameraPosition").value),c=a.get("inverseEllipsoidMatrix").value.copy(this.ellipsoidMatrix).invert(),l=rm.copy(o).applyMatrix4(c).sub(a.get("ellipsoidCenter").value);try{const d=nm.setFromECEF(l).height,p=im.set(0,this.ellipsoid.maximumRadius,-d).applyMatrix4(r);a.get("idealSphereAlpha").value=ph(fh(p.y,41.5,13.8,0,1))}catch{return}const u=a.get("altitudeCorrection");this.correctAltitude?Hi(l,this.atmosphere.bottomRadius,this.ellipsoid,u.value):u.value.setScalar(0)}updateComposition(){const{uniforms:e,defines:r,overlay:i,shadow:n,shadowLength:s}=this,a=r.has("HAS_OVERLAY"),o=i!=null;o!==a&&(o?r.set("HAS_OVERLAY","1"):(r.delete("HAS_OVERLAY"),e.get("overlayBuffer").value=null),this.setChanged()),o&&(e.get("overlayBuffer").value=i.map);const c=r.has("HAS_SHADOW"),l=n!=null;if(l!==c&&(l?r.set("HAS_SHADOW","1"):(r.delete("HAS_SHADOW"),e.get("shadowBuffer").value=null),this.setChanged()),l){const p=r.get("SHADOW_CASCADE_COUNT"),g=`${n.cascadeCount}`;p!==g&&(r.set("SHADOW_CASCADE_COUNT",n.cascadeCount.toFixed(0)),this.setChanged()),e.get("shadowBuffer").value=n.map,e.get("shadowMapSize").value=n.mapSize,e.get("shadowIntervals").value=n.intervals,e.get("shadowMatrices").value=n.matrices,e.get("inverseShadowMatrices").value=n.inverseMatrices,e.get("shadowFar").value=n.far,e.get("shadowTopHeight").value=n.topHeight}const u=r.has("HAS_SHADOW_LENGTH"),d=s!=null;d!==u&&(d?r.set("HAS_SHADOW_LENGTH","1"):(r.delete("HAS_SHADOW_LENGTH"),e.get("shadowLengthBuffer").value=null),this.setChanged()),d&&(e.get("shadowLengthBuffer").value=s.map)}update(e,r,i){this.copyCameraSettings(this.camera),this.updateComposition(),++this.uniforms.get("frame").value}get normalBuffer(){return this.uniforms.get("normalBuffer").value}set normalBuffer(e){this.uniforms.get("normalBuffer").value=e}get irradianceTexture(){return this.uniforms.get("u_irradiance_texture").value}set irradianceTexture(e){this.uniforms.get("u_irradiance_texture").value=e}get scatteringTexture(){return this.uniforms.get("u_scattering_texture").value}set scatteringTexture(e){this.uniforms.get("u_scattering_texture").value=e,this.uniforms.get("u_single_mie_scattering_texture").value=e}get transmittanceTexture(){return this.uniforms.get("u_transmittance_texture").value}set transmittanceTexture(e){this.uniforms.get("u_transmittance_texture").value=e}get useHalfFloat(){return!0}set useHalfFloat(e){}get ellipsoid(){return this._ellipsoid}set ellipsoid(e){this._ellipsoid=e,this.uniforms.get("ellipsoidRadii").value.copy(e.radii)}get ellipsoidCenter(){return this.uniforms.get("ellipsoidCenter").value}get sunDirection(){return this.uniforms.get("sunDirection").value}get irradianceScale(){return this.uniforms.get("irradianceScale").value}set irradianceScale(e){this.uniforms.get("irradianceScale").value=e}get moonDirection(){return this.uniforms.get("moonDirection").value}get moonAngularRadius(){return this.uniforms.get("moonAngularRadius").value}set moonAngularRadius(e){this.uniforms.get("moonAngularRadius").value=e}get lunarRadianceScale(){return this.uniforms.get("lunarRadianceScale").value}set lunarRadianceScale(e){this.uniforms.get("lunarRadianceScale").value=e}get stbnTexture(){return this.uniforms.get("stbnTexture").value}set stbnTexture(e){this.uniforms.get("stbnTexture").value=e}get shadowRadius(){return this.uniforms.get("shadowRadius").value}set shadowRadius(e){this.uniforms.get("shadowRadius").value=e}}qe([Oe("OCT_ENCODED_NORMAL")],Ke.prototype,"octEncodedNormal");qe([Oe("RECONSTRUCT_NORMAL")],Ke.prototype,"reconstructNormal");qe([Oe("CORRECT_GEOMETRIC_ERROR")],Ke.prototype,"correctGeometricError");qe([Oe("PHOTOMETRIC")],Ke.prototype,"photometric");qe([Oe("SUN_IRRADIANCE")],Ke.prototype,"sunIrradiance");qe([Oe("SKY_IRRADIANCE")],Ke.prototype,"skyIrradiance");qe([Oe("TRANSMITTANCE")],Ke.prototype,"transmittance");qe([Oe("INSCATTER")],Ke.prototype,"inscatter");qe([Oe("SKY")],Ke.prototype,"sky");qe([Oe("SUN")],Ke.prototype,"sun");qe([Oe("MOON")],Ke.prototype,"moon");qe([gh("SHADOW_SAMPLE_COUNT",{min:1,max:16})],Ke.prototype,"shadowSampleCount");var am=Object.defineProperty,om=(t,e,r,i)=>{for(var n=void 0,s=t.length-1,a;s>=0;s--)(a=t[s])&&(n=a(e,r,n)||n);return n&&am(e,r,n),n};const cm=new x;function lm(t,e){let r="",i="";for(let n=1;n<e;++n)r+=`layout(location = ${n}) out float renderTarget${n};
`,i+=`renderTarget${n} = 0.0;
`;return t.replace("#include <mrt_layout>",r).replace("#include <mrt_output>",i)}const vs={ellipsoid:ct.WGS84,correctAltitude:!0,photometric:!0,renderTargetCount:1};class ys extends sl{constructor(e,r=Oi.DEFAULT){const{irradianceTexture:i=null,scatteringTexture:n=null,transmittanceTexture:s=null,useHalfFloat:a,ellipsoid:o,correctAltitude:c,photometric:l,sunDirection:u,sunAngularRadius:d,renderTargetCount:p,...g}={...vs,...e};super({toneMapped:!1,depthWrite:!1,depthTest:!1,...g,uniforms:{cameraPosition:new D(new x),ellipsoidCenter:new D(new x),inverseEllipsoidMatrix:new D(new J),altitudeCorrection:new D(new x),sunDirection:new D((u==null?void 0:u.clone())??new x),u_solar_irradiance:new D(r.solarIrradiance),u_sun_angular_radius:new D(d??r.sunAngularRadius),u_bottom_radius:new D(r.bottomRadius*Qt),u_top_radius:new D(r.topRadius*Qt),u_rayleigh_scattering:new D(r.rayleighScattering),u_mie_scattering:new D(r.mieScattering),u_mie_phase_function_g:new D(r.miePhaseFunctionG),u_mu_s_min:new D(r.muSMin),u_irradiance_texture:new D(i),u_scattering_texture:new D(n),u_single_mie_scattering_texture:new D(n),u_transmittance_texture:new D(s),...g.uniforms},defines:{PI:`${Math.PI}`,TRANSMITTANCE_TEXTURE_WIDTH:Bi.toFixed(0),TRANSMITTANCE_TEXTURE_HEIGHT:Ui.toFixed(0),SCATTERING_TEXTURE_R_SIZE:ms.toFixed(0),SCATTERING_TEXTURE_MU_SIZE:fs.toFixed(0),SCATTERING_TEXTURE_MU_S_SIZE:ps.toFixed(0),SCATTERING_TEXTURE_NU_SIZE:gs.toFixed(0),IRRADIANCE_TEXTURE_WIDTH:Li.toFixed(0),IRRADIANCE_TEXTURE_HEIGHT:Fi.toFixed(0),METER_TO_LENGTH_UNIT:Qt.toFixed(7),SUN_SPECTRAL_RADIANCE_TO_LUMINANCE:`vec3(${r.sunRadianceToRelativeLuminance.toArray().map(h=>h.toFixed(12)).join(",")})`,SKY_SPECTRAL_RADIANCE_TO_LUMINANCE:`vec3(${r.skyRadianceToRelativeLuminance.toArray().map(h=>h.toFixed(12)).join(",")})`,...g.defines}}),this.atmosphere=r,this.ellipsoidMatrix=new J,this.atmosphere=r,this.ellipsoid=o,this.correctAltitude=c,this.photometric=l,this.renderTargetCount=p}copyCameraSettings(e){const r=this.uniforms,i=e.getWorldPosition(r.cameraPosition.value),n=r.inverseEllipsoidMatrix.value.copy(this.ellipsoidMatrix).invert(),s=cm.copy(i).applyMatrix4(n).sub(r.ellipsoidCenter.value),a=r.altitudeCorrection.value;this.correctAltitude?Hi(s,this.atmosphere.bottomRadius,this.ellipsoid,a):a.setScalar(0)}onBeforeCompile(e,r){e.fragmentShader=lm(e.fragmentShader,this.renderTargetCount)}onBeforeRender(e,r,i,n,s,a){this.copyCameraSettings(i)}get irradianceTexture(){return this.uniforms.u_irradiance_texture.value}set irradianceTexture(e){this.uniforms.u_irradiance_texture.value=e}get scatteringTexture(){return this.uniforms.u_scattering_texture.value}set scatteringTexture(e){this.uniforms.u_scattering_texture.value=e,this.uniforms.u_single_mie_scattering_texture.value=e}get transmittanceTexture(){return this.uniforms.u_transmittance_texture.value}set transmittanceTexture(e){this.uniforms.u_transmittance_texture.value=e}get useHalfFloat(){return!0}set useHalfFloat(e){}get ellipsoidCenter(){return this.uniforms.ellipsoidCenter.value}get sunDirection(){return this.uniforms.sunDirection.value}get sunAngularRadius(){return this.uniforms.u_sun_angular_radius.value}set sunAngularRadius(e){this.uniforms.u_sun_angular_radius.value=e}get renderTargetCount(){return this._renderTargetCount}set renderTargetCount(e){e!==this.renderTargetCount&&(this._renderTargetCount=e,this.needsUpdate=!0)}}om([Oe("PHOTOMETRIC")],ys.prototype,"photometric");var at;(function(t){t.Sun="Sun",t.Moon="Moon",t.Mercury="Mercury",t.Venus="Venus",t.Earth="Earth",t.Mars="Mars",t.Jupiter="Jupiter",t.Saturn="Saturn",t.Uranus="Uranus",t.Neptune="Neptune",t.Pluto="Pluto",t.SSB="SSB",t.EMB="EMB",t.Star1="Star1",t.Star2="Star2",t.Star3="Star3",t.Star4="Star4",t.Star5="Star5",t.Star6="Star6",t.Star7="Star7",t.Star8="Star8"})(at||(at={}));at.Star1,at.Star2,at.Star3,at.Star4,at.Star5,at.Star6,at.Star7,at.Star8;var Da;(function(t){t[t.From2000=0]="From2000",t[t.Into2000=1]="Into2000"})(Da||(Da={}));var Pa;(function(t){t[t.Pericenter=0]="Pericenter",t[t.Apocenter=1]="Apocenter"})(Pa||(Pa={}));var Na;(function(t){t.Penumbral="penumbral",t.Partial="partial",t.Annular="annular",t.Total="total"})(Na||(Na={}));var Oa;(function(t){t[t.Invalid=0]="Invalid",t[t.Ascending=1]="Ascending",t[t.Descending=-1]="Descending"})(Oa||(Oa={}));function dc(t){return Math.sqrt(Math.max(t,0))}function um(t){return Math.max(t,0)}function dm(t,e,r){const{bottomRadius:i}=t;return r<0&&e**2*(r**2-1)+i**2>=0}function hm(t,e,r){const{topRadius:i}=t,n=e**2*(r**2-1)+i**2;return um(-e*r+dc(n))}function Ti(t,e){return .5/e+t*(1-1/e)}var mm="Invariant failed";function fm(t,e){if(!t)throw new Error(mm)}const pm=new x,La=new x,gm=new x;function oi(t,e,r){const i=e*4;return r.set(t[i],t[i+1],t[i+2])}function hc(t,e,r){const{width:i,height:n}=t.image;fm(ih(t.image.data));let s=t.image.data;t.type===wo&&s instanceof Uint16Array&&(s=new oe(s.buffer));const a=xi(e.x,0,1)*(i-1),o=xi(e.y,0,1)*(n-1),c=Math.floor(a),l=Math.floor(o),u=a-c,d=o-l,p=u,g=d,h=c%i,v=(h+1)%i,f=l%n,y=(f+1)%n,T=oi(s,f*i+h,pm),E=oi(s,f*i+v,La),A=T.lerp(E,p),M=oi(s,y*i+h,La),I=oi(s,y*i+v,gm),R=M.lerp(I,p);return r.copy(A.lerp(R,g))}function vm(t,e,r,i){const{topRadius:n,bottomRadius:s}=t,a=Math.sqrt(n**2-s**2),o=dc(e**2-s**2),c=hm(t,e,r),l=n-e,u=o+a,d=(c-l)/(u-l),p=o/a;return i.set(Ti(d,Bi),Ti(p,Ui))}const ym=new x,pn=new x,Sm=new Mt;function Fa(t,e,r,i=new ke,{ellipsoid:n=ct.WGS84,correctAltitude:s=!0,photometric:a=!0}={},o=Oi.DEFAULT){const c=ym.copy(e);if(s){const v=n.projectOnSurface(e,pn);v!=null&&c.sub(n.getOsculatingSphereCenter(v,o.bottomRadius,pn))}const l=pn;let u=c.length(),d=c.dot(r);const{topRadius:p}=o,g=-d-Math.sqrt(d**2-u**2+p**2);if(g>0&&(u=p,d+=g),u>p)l.set(1,1,1);else{const v=d/u;if(dm(o,u,v))l.setScalar(0);else{const f=vm(o,u,v,Sm);hc(t,f,l)}}const h=l.multiply(o.solarIrradiance);return a&&h.multiply(o.sunRadianceToRelativeLuminance),i.setFromVector3(h)}var zr=Uint8Array,mc=Uint16Array,wm=Uint32Array,_m=new zr([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),xm=new zr([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),fc=function(t,e){for(var r=new mc(31),i=0;i<31;++i)r[i]=e+=1<<t[i-1];for(var n=new wm(r[30]),i=1;i<30;++i)for(var s=r[i];s<r[i+1];++s)n[s]=s-r[i]<<5|i;return[r,n]},pc=fc(_m,2),Tm=pc[0],bm=pc[1];Tm[28]=258,bm[258]=28;fc(xm,0);var Mm=new mc(32768);for(var fe=0;fe<32768;++fe){var Tt=(fe&43690)>>>1|(fe&21845)<<1;Tt=(Tt&52428)>>>2|(Tt&13107)<<2,Tt=(Tt&61680)>>>4|(Tt&3855)<<4,Mm[fe]=((Tt&65280)>>>8|(Tt&255)<<8)>>>1}var zi=new zr(288);for(var fe=0;fe<144;++fe)zi[fe]=8;for(var fe=144;fe<256;++fe)zi[fe]=9;for(var fe=256;fe<280;++fe)zi[fe]=7;for(var fe=280;fe<288;++fe)zi[fe]=8;var Rm=new zr(32);for(var fe=0;fe<32;++fe)Rm[fe]=5;var Em=new zr(0),Am=typeof TextDecoder<"u"&&new TextDecoder,Cm=0;try{Am.decode(Em,{stream:!0}),Cm=1}catch{}function Im({topRadius:t,bottomRadius:e},r,i,n){const s=(r-e)/(t-e),a=i*.5+.5;return n.set(Ti(a,Li),Ti(s,Fi))}const Dm=1/Math.sqrt(Math.PI),gn=Math.sqrt(3)/(2*Math.sqrt(Math.PI)),Pm=new x,vn=new x,Nm=new Mt,Om=new J,Lm={ellipsoid:ct.WGS84,correctAltitude:!0,photometric:!0};class Fm extends _o{constructor(e,r=Oi.DEFAULT){super(),this.atmosphere=r,this.ellipsoidCenter=new x,this.ellipsoidMatrix=new J;const{irradianceTexture:i=null,ellipsoid:n,correctAltitude:s,photometric:a,sunDirection:o}={...Lm,...e};this.irradianceTexture=i,this.ellipsoid=n,this.correctAltitude=s,this.photometric=a,this.sunDirection=(o==null?void 0:o.clone())??new x}update(){if(this.irradianceTexture==null)return;const e=Om.copy(this.ellipsoidMatrix).invert(),r=this.getWorldPosition(Pm).applyMatrix4(e).sub(this.ellipsoidCenter);if(this.correctAltitude){const l=this.ellipsoid.projectOnSurface(r,vn);l!=null&&r.sub(Hi(l,this.atmosphere.bottomRadius,this.ellipsoid,vn))}const i=r.length(),n=r.dot(this.sunDirection)/i,s=Im(this.atmosphere,i,n,Nm),a=hc(this.irradianceTexture,s,vn);this.photometric&&a.multiply(this.atmosphere.skyRadianceToRelativeLuminance);const o=this.ellipsoid.getSurfaceNormal(r).applyMatrix4(this.ellipsoidMatrix),c=this.sh.coefficients;c[0].copy(a).multiplyScalar(Dm),c[1].copy(a).multiplyScalar(gn*o.y),c[2].copy(a).multiplyScalar(gn*o.z),c[3].copy(a).multiplyScalar(gn*o.x)}}const Bm=`precision highp float;
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
`;var Hm=Object.defineProperty,gc=(t,e,r,i)=>{for(var n=void 0,s=t.length-1,a;s>=0;s--)(a=t[s])&&(n=a(e,r,n)||n);return n&&Hm(e,r,n),n};const zm={...vs,sun:!0,moon:!0,moonAngularRadius:.0045,lunarRadianceScale:1};class Ss extends ys{constructor(e){const{sun:r,moon:i,moonDirection:n,moonAngularRadius:s,lunarRadianceScale:a,groundAlbedo:o,...c}={...zm,...e};super({name:"SkyMaterial",glslVersion:Ir,vertexShader:Lt(Um,{parameters:rr}),fragmentShader:Lt(Bm,{core:{raySphereIntersection:lc},parameters:rr,functions:hs,sky:uc}),...c,uniforms:{inverseProjectionMatrix:new D(new J),inverseViewMatrix:new D(new J),moonDirection:new D((n==null?void 0:n.clone())??new x),moonAngularRadius:new D(s),lunarRadianceScale:new D(a),groundAlbedo:new D((o==null?void 0:o.clone())??new ke(0)),shadowLengthBuffer:new D(null),...c.uniforms},defines:{PERSPECTIVE_CAMERA:"1"},depthTest:!0}),this.shadowLength=null,this.sun=r,this.moon=i}onBeforeRender(e,r,i,n,s,a){super.onBeforeRender(e,r,i,n,s,a);const{uniforms:o,defines:c}=this;o.inverseProjectionMatrix.value.copy(i.projectionMatrixInverse),o.inverseViewMatrix.value.copy(i.matrixWorld);const l=c.PERSPECTIVE_CAMERA!=null,u=i.isPerspectiveCamera===!0;u!==l&&(u?c.PERSPECTIVE_CAMERA="1":delete c.PERSPECTIVE_CAMERA,this.needsUpdate=!0);const d=this.groundAlbedo,p=c.GROUND_ALBEDO!=null,g=d.r!==0||d.g!==0||d.b!==0;g!==p&&(g?this.defines.GROUND_ALBEDO="1":delete this.defines.GROUND_ALBEDO,this.needsUpdate=!0);const h=this.shadowLength,v=c.HAS_SHADOW_LENGTH!=null,f=h!=null;f!==v&&(f?c.HAS_SHADOW_LENGTH="1":(delete c.HAS_SHADOW_LENGTH,o.shadowLengthBuffer.value=null),this.needsUpdate=!0),f&&(o.shadowLengthBuffer.value=h.map)}get moonDirection(){return this.uniforms.moonDirection.value}get moonAngularRadius(){return this.uniforms.moonAngularRadius.value}set moonAngularRadius(e){this.uniforms.moonAngularRadius.value=e}get lunarRadianceScale(){return this.uniforms.lunarRadianceScale.value}set lunarRadianceScale(e){this.uniforms.lunarRadianceScale.value=e}get groundAlbedo(){return this.uniforms.groundAlbedo.value}}gc([Oe("SUN")],Ss.prototype,"sun");gc([Oe("MOON")],Ss.prototype,"moon");const km=`precision highp float;
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
`;var Wm=Object.defineProperty,Gm=(t,e,r,i)=>{for(var n=void 0,s=t.length-1,a;s>=0;s--)(a=t[s])&&(n=a(e,r,n)||n);return n&&Wm(e,r,n),n};const jm={...vs,pointSize:1,radianceScale:1,background:!0};class Ym extends ys{constructor(e){const{pointSize:r,radianceScale:i,background:n,...s}={...jm,...e};super({name:"StarsMaterial",glslVersion:Ir,vertexShader:Lt(Vm,{parameters:rr}),fragmentShader:Lt(km,{parameters:rr,functions:hs}),...s,uniforms:{projectionMatrix:new D(new J),modelViewMatrix:new D(new J),viewMatrix:new D(new J),matrixWorld:new D(new J),cameraFar:new D(0),pointSize:new D(0),magnitudeRange:new D(new Mt(-2,8)),radianceScale:new D(i),...s.uniforms},defines:{PERSPECTIVE_CAMERA:"1"}}),this.pointSize=r,this.background=n}onBeforeRender(e,r,i,n,s,a){super.onBeforeRender(e,r,i,n,s,a);const o=this.uniforms;o.projectionMatrix.value.copy(i.projectionMatrix),o.modelViewMatrix.value.copy(i.modelViewMatrix),o.viewMatrix.value.copy(i.matrixWorldInverse),o.matrixWorld.value.copy(s.matrixWorld),o.cameraFar.value=i.far,o.pointSize.value=this.pointSize*e.getPixelRatio();const c=i.isPerspectiveCamera===!0;this.defines.PERSPECTIVE_CAMERA!=null!==c&&(c?this.defines.PERSPECTIVE_CAMERA="1":delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}get magnitudeRange(){return this.uniforms.magnitudeRange.value}get radianceScale(){return this.uniforms.radianceScale.value}set radianceScale(e){this.uniforms.radianceScale.value=e}}Gm([Oe("BACKGROUND")],Ym.prototype,"background");const Ba=new ke("#fff2d8"),Ua=1e-8,yn=3e4,Ha=-1e3,za=1e7,qm=5e6,Km=8e6,Nr=t=>Number.isFinite(t.x)&&Number.isFinite(t.y)&&Number.isFinite(t.z),ka=t=>!Number.isFinite(t.longitude)||Math.abs(t.longitude)>180?"longitude must be a finite value in degrees within [-180, 180]":!Number.isFinite(t.latitude)||Math.abs(t.latitude)>90?"latitude must be a finite value in degrees within [-90, 90]":!Number.isFinite(t.altitudeMeters)||t.altitudeMeters<Ha||t.altitudeMeters>za?`altitudeMeters must be within [${Ha}, ${za}]`:null,Xm=(t,e,r)=>{if(!Number.isFinite(t.getTime()))return"instant must be a valid Date";const i=ka(e);if(i)return`observer ${i}`;if(!r)return null;const n=ka(r.observer);return n?`sky reference observer ${n}`:Nr(r.scenePosition)?null:"sky reference scenePosition must contain finite metre coordinates"},vc=t=>{if(!Nr(t.directionToSunECEF))return"sun direction contains a non-finite component";if(Math.abs(t.directionToSunECEF.length()-1)>1e-6)return"sun direction is not normalized";if(!t.ecefToSceneMatrix.elements.every(Number.isFinite))return"ECEF-to-scene matrix contains a non-finite component";const e=t.ecefToSceneMatrix.elements,r=[new x(e[0],e[4],e[8]),new x(e[1],e[5],e[9]),new x(e[2],e[6],e[10])];if(r.some(s=>Math.abs(s.length()-1)>1e-6)||Math.abs(r[0].dot(r[1]))>1e-6||Math.abs(r[0].dot(r[2]))>1e-6||Math.abs(r[1].dot(r[2]))>1e-6||Math.abs(e[3])>1e-12||Math.abs(e[7])>1e-12||Math.abs(e[11])>1e-12||Math.abs(e[12])>1e-12||Math.abs(e[13])>1e-12||Math.abs(e[14])>1e-12||Math.abs(e[15]-1)>1e-12)return"ECEF-to-scene matrix is not an affine orthonormal rotation";const i=t.ecefToSceneMatrix.determinant();if(!Number.isFinite(i)||Math.abs(i-1)>1e-6)return"ECEF-to-scene matrix is not a proper orthonormal rotation";if(!Nr(t.ellipsoidCenterECEF))return"ellipsoid center contains a non-finite component";const n=t.ellipsoidCenterECEF.length();return n<qm||n>Km?"ellipsoid center is outside the plausible WGS84 distance range":null},$m=t=>{var r;const e=vc(t.skyFrame);return e||(Nr(t.directionToSun)?Math.abs(t.directionToSun.length()-1)>1e-6?"scene sun direction is not normalized":![t.color.r,t.color.g,t.color.b].every(Number.isFinite)||![t.radiance.r,t.radiance.g,t.radiance.b].every(Number.isFinite)||!Number.isFinite(t.relativeIntensity)||t.relativeIntensity<0||t.relativeIntensity>1||!Number.isFinite(t.azimuthDegrees)||!Number.isFinite(t.elevationDegrees)?"sunlight color, intensity, or angles contain invalid values":(r=t.skyIrradianceCoefficients)!=null&&r.some(i=>!Nr(i))?"sky irradiance contains a non-finite coefficient":null:"scene sun direction contains a non-finite component")},Sn={useTransmittanceLut:!0,useIrradianceLut:!0},Qm=({east:t,north:e,up:r})=>new J().set(t.x,t.y,t.z,0,r.x,r.y,r.z,0,-e.x,-e.y,-e.z,0,0,0,0,1);function ws({longitude:t,latitude:e,altitudeMeters:r}){const i=new Lo(Yn(t),Yn(e),r).toECEF(),n=new x,s=new x,a=new x;return ct.WGS84.getEastNorthUpVectors(i,n,s,a),{observerECEF:i,east:n,north:s,up:a}}const yc=(t,{east:e,north:r,up:i},n)=>n.set(t.dot(e),t.dot(i),-t.dot(r)).normalize(),Sc=(t,e,r)=>{const i=r?ws(r.observer):e,n=Qm(i);r!=null&&r.sceneFromLocal&&n.premultiply(r.sceneFromLocal);const s=n.clone().invert(),a=((r==null?void 0:r.scenePosition)??new x).clone().applyMatrix4(s).sub(i.observerECEF);return{directionToSunECEF:t.clone(),ecefToSceneMatrix:n,ellipsoidCenterECEF:a}},Zm=(t,e,{observerECEF:r,east:i,north:n,up:s})=>t!=null&&t.irradianceTexture?(t.ellipsoidMatrix.set(i.x,i.y,i.z,0,s.x,s.y,s.z,0,-n.x,-n.y,-n.z,0,0,0,0,1),t.ellipsoidCenter.copy(r).negate(),t.sunDirection.copy(e),t.position.set(0,0,0),t.updateMatrixWorld(!0),t.update(),t.sh.coefficients.map(a=>a.clone())):null,wc=t=>{const e=qs(Math.asin(Ye(t.y,-1,1)));return{azimuthDegrees:(qs(Math.atan2(t.x,-t.z))+360)%360,elevationDegrees:e}},Jm=(t,e)=>{const r=ws(e.observer),i=yc(t.skyFrame.directionToSunECEF,r,new x);return e.sceneFromLocal&&i.transformDirection(e.sceneFromLocal),{...t,directionToSun:i,...wc(i),skyFrame:Sc(t.skyFrame.directionToSunECEF,r,e)}},ef=(t,e,r,i=null,n)=>{const s=ws(e),{observerECEF:a,up:o}=s,c=new x(...al(t)),l=yc(c,s,new x);n!=null&&n.sceneFromLocal&&l.transformDirection(n.sceneFromLocal);const u=Sc(c,s,n),d=Zm(i,c,s),{azimuthDegrees:p,elevationDegrees:g}=wc(l);if(!r){const E=Math.sqrt(Ye(l.y,0,1));return{directionToSun:l,color:Ba.clone(),relativeIntensity:E,radiance:Ba.clone().multiplyScalar(E),atmosphericTransmittanceReady:!1,atmosphericIrradianceReady:d!==null,skyIrradianceCoefficients:d,azimuthDegrees:p,elevationDegrees:g,skyFrame:u}}const h=Fa(r,a,c,new ke,{ellipsoid:ct.WGS84,correctAltitude:!0,photometric:!0}),v=Fa(r,a,o,new ke,{ellipsoid:ct.WGS84,correctAltitude:!0,photometric:!0}),f=Math.max(h.r,h.g,h.b,0),y=Math.max(v.r,v.g,v.b,Ua),T=f>Ua?h.clone().multiplyScalar(1/f):new ke(0,0,0);return{directionToSun:l,color:T,relativeIntensity:Ye(f/y,0,1),radiance:h,atmosphericTransmittanceReady:!0,atmosphericIrradianceReady:d!==null,skyIrradianceCoefficients:d,azimuthDegrees:p,elevationDegrees:g,skyFrame:u}};class tf{transmittanceTexture=null;irradianceTexture=null;scatteringTexture=null;skyLightProbe=new Fm({ellipsoid:ct.WGS84,correctAltitude:!0,photometric:!0});transmittanceLoading=!1;irradianceLoading=!1;scatteringLoading=!1;transmittanceRetryAt=0;irradianceRetryAt=0;scatteringRetryAt=0;disposed=!1;get ready(){return this.transmittanceTexture!==null&&this.irradianceTexture!==null}get skyReady(){return this.skyTextures!==null}get skyTextures(){return!this.transmittanceTexture||!this.irradianceTexture||!this.scatteringTexture?null:{transmittanceTexture:this.transmittanceTexture,irradianceTexture:this.irradianceTexture,scatteringTexture:this.scatteringTexture}}get isSkyLoading(){return this.transmittanceLoading||this.irradianceLoading||this.scatteringLoading}isLoadingFor(e=Sn){return e.useTransmittanceLut&&this.transmittanceLoading||e.useIrradianceLut&&this.irradianceLoading}ensure(e,r=Sn){if(this.disposed)return;const i=()=>{this.isLoadingFor(r)||e()};r.useTransmittanceLut&&this.ensureTransmittance(i),r.useIrradianceLut&&this.ensureIrradiance(i)}ensureSky(e){if(this.disposed||this.skyReady)return;let r=!1;const i=()=>{!r&&!this.isSkyLoading&&(r=!0,e())};this.ensureTransmittance(i),this.ensureIrradiance(i),this.ensureScattering(i)}ensureTransmittance(e){this.transmittanceTexture||this.transmittanceLoading||Date.now()<this.transmittanceRetryAt||(this.transmittanceLoading=!0,Ia(mn,{width:Bi,height:Ui}).load(`${fn}/transmittance.bin`,r=>{if(this.transmittanceLoading=!1,this.disposed){r.dispose();return}this.transmittanceRetryAt=0,this.transmittanceTexture=r,e()},void 0,r=>{this.transmittanceLoading=!1,this.disposed||(this.transmittanceRetryAt=Date.now()+yn,console.error("[SHADOW] Takram transmittance LUT failed",r),e())}))}ensureIrradiance(e){this.irradianceTexture||this.irradianceLoading||Date.now()<this.irradianceRetryAt||(this.irradianceLoading=!0,Ia(mn,{width:Li,height:Fi}).load(`${fn}/irradiance.bin`,r=>{if(this.irradianceLoading=!1,this.disposed){r.dispose();return}this.irradianceRetryAt=0,this.irradianceTexture=r,this.skyLightProbe.irradianceTexture=r,e()},void 0,r=>{this.irradianceLoading=!1,this.disposed||(this.irradianceRetryAt=Date.now()+yn,console.error("[SHADOW] Takram irradiance LUT failed",r),e())}))}ensureScattering(e){this.scatteringTexture||this.scatteringLoading||Date.now()<this.scatteringRetryAt||(this.scatteringLoading=!0,mh(mn,{width:Kh,height:Xh,depth:$h}).load(`${fn}/scattering.bin`,r=>{if(this.scatteringLoading=!1,this.disposed){r.dispose();return}this.scatteringRetryAt=0,this.scatteringTexture=r,e()},void 0,r=>{this.scatteringLoading=!1,this.disposed||(this.scatteringRetryAt=Date.now()+yn,console.error("[SHADOW] Takram scattering LUT failed",r),e())}))}evaluate(e,r,i=Sn,n){return ef(e,r,i.useTransmittanceLut?this.transmittanceTexture:null,i.useIrradianceLut?this.skyLightProbe:null,n)}dispose(){var e,r,i;this.disposed||(this.disposed=!0,this.transmittanceLoading=!1,this.irradianceLoading=!1,this.scatteringLoading=!1,this.transmittanceRetryAt=0,this.irradianceRetryAt=0,this.scatteringRetryAt=0,(e=this.transmittanceTexture)==null||e.dispose(),(r=this.irradianceTexture)==null||r.dispose(),(i=this.scatteringTexture)==null||i.dispose(),this.transmittanceTexture=null,this.irradianceTexture=null,this.scatteringTexture=null,this.skyLightProbe.irradianceTexture=null,this.skyLightProbe.sh.zero())}}const rf="shadow-simulation-atmospheric-sky",kr=2,hi="carmaOutputToSrgb",wn="carmaDisplayExposure",nf=new x;class sf extends Ss{observerScenePosition=new x;hasObserverScenePosition=!1;viewCamera=null;copyCameraSettings(e){if(super.copyCameraSettings(e),!this.hasObserverScenePosition)return;const r=this.uniforms;if(r.cameraPosition.value.copy(this.observerScenePosition),!this.correctAltitude)return;const i=nf.copy(this.observerScenePosition).applyMatrix4(r.inverseEllipsoidMatrix.value).sub(r.ellipsoidCenter.value);Hi(i,this.atmosphere.bottomRadius,this.ellipsoid,r.altitudeCorrection.value)}onBeforeRender(e,r,i,n,s,a){super.onBeforeRender(e,r,this.viewCamera??i,n,s,a)}}const af=t=>{t.uniforms.toneMappingExposure=new D(1),t.uniforms[hi]=new D(!1),t.uniforms[wn]=new D(kr),t.fragmentShader=t.fragmentShader.replace("precision highp sampler3D;",`precision highp sampler3D;

uniform bool ${hi};
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
  if (${hi}) {
    // SkyMaterial is raw GLSL: match terrain's AgX on the display target.
    // Offscreen samples stay linear HDR until the shared final composite.
    outputColor.rgb = AgXToneMapping(outputColor.rgb);
    outputColor = carmaLinearToSrgb(outputColor);
  }`)},of=t=>{const e=new sf({groundAlbedo:t,moon:!1,photometric:!0,side:xo,sun:!0});af(e),e.depthTest=!1,e.depthWrite=!1;const r=new So;r.setAttribute("position",new ol([-1,-1,0,3,-1,0,-1,3,0],3));const i=new Or(r,e);return i.name=rf,i.visible=!1,i.frustumCulled=!1,i.renderOrder=-100,i.castShadow=!1,i.receiveShadow=!1,i.onBeforeRender=n=>{e.uniforms.toneMappingExposure.value=n.toneMappingExposure,e.uniforms[hi].value=n.getRenderTarget()===null},{mesh:i,update(n,s){return s?vc(n)?!1:(i.visible=!0,e.irradianceTexture=s.irradianceTexture,e.scatteringTexture=s.scatteringTexture,e.transmittanceTexture=s.transmittanceTexture,e.sunDirection.copy(n.directionToSunECEF),e.ellipsoidCenter.copy(n.ellipsoidCenterECEF),e.ellipsoidMatrix.copy(n.ecefToSceneMatrix),!0):(i.visible=!1,!1)},updateViewCamera(n){e.viewCamera=n},updateObserverScenePosition(n){e.observerScenePosition.copy(n),e.hasObserverScenePosition=!0},updateGroundAlbedo(n){e.groundAlbedo.copy(n)},dispose(){r.dispose(),e.dispose()}}},cf=2048,_c=8192,Va=2,Wa=50,lf=1e4,uf=.04,_n=25,df=4,hf=1.2,mf=.2,Ga=.05,ff=8,pf=300,gf=new x(0,1,0),ja=(t,e,r=new J)=>r.lookAt(t,e,gf).setPosition(t).invert(),vf=(t,e)=>{if(t.length===0)return null;const r=t.map(h=>h.clone().applyMatrix4(e)),i=Math.min(...r.map(({x:h})=>h)),n=Math.max(...r.map(({x:h})=>h)),s=Math.min(...r.map(({y:h})=>h)),a=Math.max(...r.map(({y:h})=>h)),o=r.map(({z:h})=>-h),c=Math.max(0,Math.min(...o)),l=Math.max(c+.01,Math.max(...o)),u=(i+n)/2,d=(s+a)/2,p=Math.max((n-i)/2,Va/2),g=Math.max((a-s)/2,Va/2);return{left:u-p,right:u+p,bottom:d-g,top:d+g,near:c,far:l}},yf=(t,e=_c)=>t>=16?e:Math.min(e,cf*Math.sqrt(t));class xc{constructor(e){this.host=e,this.lights=Array.from({length:1},()=>{const r=new cl(16777215,0);return r.name="shadow-simulation-sun",r.visible=!1,r.castShadow=!1,r.shadow.camera.name="shadow-simulation-shadow-camera",r.shadow.autoUpdate=!1,r.shadow.radius=0,r.shadow.bias=0,r.shadow.normalBias=Ga,e.add(r,r.target),r})}lights;softSun=!1;lastSoftFit=null;maxShadowMapSize=_c;mapAllocation=null;disposed=!1;setMaxShadowMapSize(e){if(!Number.isFinite(e)||e<=0)return;const r=Math.max(256,Math.floor(e));this.disposed||this.maxShadowMapSize===r||(this.maxShadowMapSize=r)}setSoftSun(e){this.disposed||this.softSun===e||(e||this.restoreSunDiscCenter(),this.softSun=e,e||(this.lastSoftFit=null))}applySunDiscSample(e,r,i=!0){if(this.disposed)return;const n=this.lastSoftFit;if(!n)return;const s=Math.max(1,Math.floor(r)),a=(Math.floor(e)%s+s)%s,{angularRadius:o,tangentA:c,tangentB:l}=Xl(a,s),u=n.tangentA.clone().multiplyScalar(c).addScaledVector(n.tangentB,l).normalize(),d=n.directionToSun.clone().multiplyScalar(Math.cos(o)).addScaledVector(u,Math.sin(o)).normalize(),p=this.lights[0],[g,h]=i&&s>1?$l(a):[0,0],v=p.shadow.camera,f=n.rasterBounds,y=g*(f.right-f.left)/p.shadow.mapSize.x,T=h*(f.top-f.bottom)/p.shadow.mapSize.y;v.left=f.left+y,v.right=f.right+y,v.bottom=f.bottom+T,v.top=f.top+T,v.updateProjectionMatrix(),p.position.copy(d).multiplyScalar(n.lightDistance).add(n.anchorPosition),p.updateMatrixWorld(!0),p.target.updateMatrixWorld(!0),p.shadow.updateMatrices(p),p.shadow.needsUpdate=!0}restoreSunDiscCenter(){if(this.disposed||!this.lastSoftFit)return;const e=this.lastSoftFit,r=this.lights[0],i=r.shadow.camera;i.left=e.rasterBounds.left,i.right=e.rasterBounds.right,i.bottom=e.rasterBounds.bottom,i.top=e.rasterBounds.top,i.updateProjectionMatrix(),r.position.copy(e.directionToSun).multiplyScalar(e.lightDistance).add(e.anchorPosition),r.updateMatrixWorld(!0),r.target.updateMatrixWorld(!0),r.shadow.updateMatrices(r),r.shadow.needsUpdate=!0}invalidate(){this.lights[0].shadow.needsUpdate=!0}update({receiverWorldPoints:e,receiverAnchorWorldPosition:r,minimumElevationMeters:i,maximumElevationMeters:n,directionToSun:s,color:a,intensity:o,shadowIntensity:c,quality:l,groundTexelFit:u=!0,stabilizeMapSize:d=!1,mapTexelBudget:p,casterMapTexelBudget:g,groundTexelTargetMeters:h,maxReceiverBiasMeters:v}){var z,Ve;if(this.disposed)return null;if(e.length===0){for(const Le of this.lights)Le.visible=!1,Le.castShadow=!1,Le.intensity=0,Le.shadow.needsUpdate=!1;return null}const f=s.clone().normalize(),y=Math.max(0,n-i),T=Math.max(uf,f.y),E=Ye((y+pf)/T+Wa,Wa,lf),A=E+y+_n,M=yf(l,this.maxShadowMapSize),I=na(p,Math.floor(M)**2,this.maxShadowMapSize),R=Math.floor(Math.sqrt(I)),F=new ke(a),P=r.clone(),B=e.reduce((Le,w)=>Math.max(Le,w.distanceTo(r)),0),Y=B+A,V=this.lights[0];V.position.copy(f).multiplyScalar(Y).add(P),V.target.position.copy(P),V.updateMatrixWorld(!0),V.target.updateMatrixWorld(!0),V.shadow.updateMatrices(V);const N=vf(e,ja(V.position,V.target.position));if(!N)return null;const de=ql(B,f.y,this.softSun?Pr:0),O=this.softSun?Math.max(Math.tan(Pr)*Y,de.planarMeters):0,X={maxMapSize:this.maxShadowMapSize,elevationSine:f.y,sunDiscGuardMeters:O,groundTexelFit:u,groundTexelTargetMeters:h},H=sa(N,{...X,mapSize:R,mapTexelBudget:I,mapDimensions:d&&((z=this.mapAllocation)==null?void 0:z.texelBudget)===I&&this.mapAllocation.maxMapSize===this.maxShadowMapSize&&this.mapAllocation.groundTexelFit===u?this.mapAllocation:void 0}),q=na(g,I,this.maxShadowMapSize),ce=g===void 0?H:sa(N,{...X,mapSize:Math.floor(Math.sqrt(q)),mapTexelBudget:q});this.mapAllocation={width:H.mapWidth,height:H.mapHeight,texelBudget:I,maxMapSize:this.maxShadowMapSize,groundTexelFit:u};const ae=Math.max(H.metersPerTexelX,H.metersPerTexelY),_e=Math.max(H.guardMetersX,H.guardMetersY),C={left:H.left,right:H.right,bottom:H.bottom,top:H.top,near:Math.max(.01,N.near-de.depthMeters-E-y-_n),far:Math.max(1,N.far+de.depthMeters+y+_n)};C.far=Math.max(C.near+1,C.far);const re=Ye(ae*hf/Math.max(mf,f.y),Ga,ff),Ee=-Ye(ae*df/Math.max(C.far-C.near,1),Number.EPSILON,.01),Ce=new x;Math.abs(f.y)>.99?Ce.set(1,0,0):Ce.crossVectors(new x(0,1,0),f).normalize();const Rt=new x().crossVectors(f,Ce),le=this.lights[0];le.visible=!0,le.castShadow=!0,le.intensity=o,le.color.copy(F),le.shadow.intensity=Ye(c,0,1),le.shadow.needsUpdate=!0,(le.shadow.mapSize.x!==H.mapWidth||le.shadow.mapSize.y!==H.mapHeight)&&((Ve=le.shadow.map)==null||Ve.dispose(),le.shadow.map=null,le.shadow.mapSize.set(H.mapWidth,H.mapHeight)),le.position.copy(f).multiplyScalar(Y).add(P),le.target.position.copy(P);const Me=v!==void 0&&Number.isFinite(v)?Math.max(0,v):1/0;le.shadow.bias=Math.max(Ee,-Me/(C.far-C.near)),le.shadow.normalBias=Math.min(re,Me);const Re=le.shadow.camera;Re.left=C.left,Re.right=C.right,Re.bottom=C.bottom,Re.top=C.top,Re.near=C.near,Re.far=C.far,Re.updateProjectionMatrix(),le.updateMatrixWorld(!0),le.target.updateMatrixWorld(!0),le.shadow.updateMatrices(le),this.lastSoftFit=this.softSun?{directionToSun:f.clone(),tangentA:Ce,tangentB:Rt,anchorPosition:P.clone(),lightDistance:Y,rasterBounds:C}:null;const Ie=V.shadow.camera;return{sampleCount:1,totalShadowTexels:H.mapWidth*H.mapHeight,mapTexelBudget:h===void 0?I:void 0,casterReachMeters:E,casterMetersPerTexel:[ce.metersPerTexelX,ce.metersPerTexelY],camera:{receiverPointCount:e.length,receiverLeftMeters:N.left,receiverRightMeters:N.right,receiverBottomMeters:N.bottom,receiverTopMeters:N.top,leftMeters:Ie.left,rightMeters:Ie.right,bottomMeters:Ie.bottom,topMeters:Ie.top,nearMeters:Ie.near,farMeters:Ie.far,shadowMapWidth:H.mapWidth,shadowMapHeight:H.mapHeight,viewMatrixElements:[...ja(V.position,V.target.position).elements],projectionMatrixElements:[...Ie.projectionMatrix.elements],guardMeters:_e,metersPerTexel:ae,metersPerTexelX:H.metersPerTexelX,metersPerTexelY:H.metersPerTexelY,groundTexelWidthMeters:H.groundTexelWidthMeters,groundTexelHeightMeters:H.groundTexelHeightMeters,groundTexelFitLimited:H.groundTexelFitLimited,groundTexelFit:u,groundTexelTargetMeters:h}}}dispose(){var e;if(!this.disposed){this.disposed=!0;for(const r of this.lights)(e=r.shadow.map)==null||e.dispose(),this.host.remove(r.target,r)}}}const bt=t=>{var e;(e=t.depthTexture)==null||e.dispose(),t.dispose()},It=(t,e)=>t*e*8;class Sf{entries=new Map;retainedBytes=0;capacityBytes=0;activeVariantIds=null;hits=0;misses=0;get bytes(){return this.retainedBytes}get count(){return this.entries.size}get availableBytes(){return Math.max(0,this.capacityBytes-this.retainedBytes)}has(e){return this.entries.has(e)}setActiveVariants(e){this.activeVariantIds=e}setBudget(e,r){this.capacityBytes=Math.max(0,e-r),this.evictInactive(0);for(const i of this.entries.keys()){if(this.retainedBytes<=this.capacityBytes)break;this.remove(i)}}get(e){const r=this.entries.get(e);return r?this.hits+=1:this.misses+=1,r==null?void 0:r.target}admit(e,r,i,n=r,s={}){var o;if(this.entries.has(e))return!1;const a=It(i.width,i.height);return a>this.capacityBytes||(s.evictInactive!==!1&&((o=this.activeVariantIds)!=null&&o.has(n))&&this.evictInactive(a),this.retainedBytes+a>this.capacityBytes)?!1:(this.entries.set(e,{pageId:r,variantId:n,target:i,bytes:a}),this.retainedBytes+=a,!0)}invalidate(e){for(const[r,i]of this.entries)i.pageId===e&&this.remove(r)}clear(){for(const e of this.entries.keys())this.remove(e)}evictInactive(e){if(this.activeVariantIds)for(const[r,i]of this.entries){if(this.retainedBytes+e<=this.capacityBytes)break;this.activeVariantIds.has(i.variantId)||this.remove(r)}}remove(e){const r=this.entries.get(e);r&&(this.entries.delete(e),this.retainedBytes-=r.bytes,bt(r.target))}}const wf=16,xn=4;class _f{constructor(e,r,i,n=4096,s=e){if(this.scene=e,this.renderer=r,this.memoryBudgetBytes=i,this.host=s,!Number.isFinite(i)||!(i>=It(64,64)))throw new RangeError("Shadow page budget must fit at least one 64-square page");if(!Number.isFinite(n)||n<64)throw new RangeError("Maximum shadow page size must be finite and at least 64");if(r.shadowMap.type!==en)throw new Error("Tiled shadow reference requires the shared PCF shadow path");this.maxMapSize=Math.max(64,2**Math.floor(Math.log2(Math.min(n,r.capabilities.maxTextureSize,Math.sqrt(i/8)))))}pages=new Map;activePageIds=new Set;activeSamples=1;prewarmPageIds=new Set;prewarmSamples=1;prewarmRevision=0;prewarmSink=null;prewarmCamera=new ll([]);cache=new Sf;scratchBytes=0;depthRenders=0;colorPasses=0;disposed=!1;streamedTarget=null;maxMapSize;setView(e,r,i,n,s,a){if(this.disposed)return;if(this.clearPrewarmView(),![s.directionToSun.x,s.directionToSun.y,s.directionToSun.z].every(Number.isFinite)||s.directionToSun.lengthSq()===0||s.directionToSun.y<=0)throw new RangeError("Tiled shadow reference requires a finite sun direction above the horizon");const o=hu(e,r,i,n);this.activePageIds=new Set(o.map(({id:l})=>l));for(const l of o)this.configurePage(l,s,a);const c=Math.max(32,this.activePageIds.size*2);for(const[l,u]of this.pages){if(this.pages.size<=c)break;this.activePageIds.has(l)||(this.cache.invalidate(l),u.controller.dispose(),this.pages.delete(l))}this.updateActiveVariants(),this.scratchBytes=Math.max(0,...Array.from(this.activePageIds,l=>{const u=this.pages.get(l);return It(u.width,u.height)})),this.streamedTarget&&It(this.streamedTarget.width,this.streamedTarget.height)>this.scratchBytes&&(bt(this.streamedTarget),this.streamedTarget=null),this.cache.setBudget(this.memoryBudgetBytes,this.reservedBytes)}updatePresentation(e){if(this.disposed)return;e.updateMatrixWorld(!0);const r=new J().multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i=new Lr().setFromProjectionMatrix(r),n=new Set;for(const[s,a]of this.pages)i.intersectsBox(a.receiverBounds)&&(a.screenBounds.copy(Io(a.receiverBounds,r)),n.add(s));this.activePageIds=n,this.updateActiveVariants()}get reservedBytes(){return this.scratchBytes+(this.prewarmSink?xn:0)}setPrewarmView(e,r,i,n,s,a){if(this.clearPrewarmView(),this.disposed)return;if(!Number.isSafeInteger(a)||a<1||a>4096||!(n>0&&Number.isFinite(n))||![i.x,i.y].every(l=>l>0&&Number.isFinite(l))||!s.directionToSun.toArray().every(Number.isFinite)||s.directionToSun.y<=0)throw new RangeError("Invalid shadow prewarm view");const o=new J().multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),c=new Set;for(const{id:l,bounds:u}of e){if(c.has(l)||u.isEmpty()||![...u.min.toArray(),...u.max.toArray()].every(Number.isFinite))throw new RangeError("Prewarm cells require unique IDs and finite bounds");c.add(l)}this.prewarmSamples=a;for(const l of e){if(this.prewarmPageIds.size>=wf)break;this.activePageIds.has(l.id)||!this.pages.has(l.id)&&this.pages.size>=Math.max(32,this.activePageIds.size*2)||(this.configurePage({...l,screenBounds:new te,groundTexelTargetMeters:Math.max(1e-9,2*n/Do(l.bounds,o,i))},s),this.prewarmPageIds.add(l.id))}}clearPrewarmView(){this.prewarmPageIds.clear(),this.prewarmRevision+=1}get prewarmPages(){const e=[...this.prewarmPageIds].map(i=>{const n=this.pages.get(i),s=this.countPrewarmSamples(i,n);return{id:i,receiverBounds:n.receiverBounds.clone(),casterBounds:n.casterBounds.clone(),width:n.width,height:n.height,samples:this.prewarmSamples,cachedSamples:s,sampleBudget:s,limited:n.limited,canPrewarm:!1}});let r=this.cache.availableBytes-(this.prewarmSink?0:xn);for(;r>0;){const i=e.filter(n=>n.sampleBudget<n.samples&&It(n.width,n.height)<=r).sort((n,s)=>n.sampleBudget-s.sampleBudget);if(i.length===0)break;for(const n of i){const s=It(n.width,n.height);s>r||(n.sampleBudget+=1,r-=s)}}return e.map(i=>({...i,canPrewarm:i.sampleBudget>i.cachedSamples}))}canPrewarm(e){return!this.disposed&&this.prewarmPages.some(r=>r.id===e&&r.canPrewarm)}countPrewarmSamples(e,r){const i=JSON.stringify([e,r.projectionKey,this.prewarmSamples]);let n=0;for(let s=0;s<this.prewarmSamples;s+=1)this.cache.has(JSON.stringify([i,s]))&&(n+=1);return n}prewarmNext(e,r,i={}){var v,f;const n=this.pages.get(r),s=!this.disposed&&this.prewarmPageIds.has(r)&&!!n,a=(y,T=!1)=>{var A;const E=s?this.countPrewarmSamples(r,n):0;return{pageId:r,rendered:y,cachedSamples:E,totalSamples:s?this.prewarmSamples:0,complete:s&&E===this.prewarmSamples,budgetLimited:T,aborted:((A=i.signal)==null?void 0:A.aborted)===!0}};if(!s||(v=i.signal)!=null&&v.aborted)return a(0);const o=this.prewarmRevision,c=n.contentRevision;if(this.renderer.shadowMap.type!==en)throw new Error("Shadow prewarm requires the shared PCF shadow path");const l=JSON.stringify([r,n.projectionKey,this.prewarmSamples]);let u=0;for(;u<this.prewarmSamples&&this.cache.has(JSON.stringify([l,u]));)u+=1;if(u===this.prewarmSamples)return a(0);if(!this.canPrewarm(r)||It(n.width,n.height)+(this.prewarmSink?0:xn)>this.cache.availableBytes)return a(0,!0);this.prewarmSink||(this.prewarmSink=new je(1,1,{depthBuffer:!1}),this.cache.setBudget(this.memoryBudgetBytes,this.reservedBytes));const p=n.controller.lights[0];this.prewarmSamples===1?n.controller.restoreSunDiscCenter():n.controller.applySunDiscSample(u,this.prewarmSamples),p.shadow.map=null,p.shadow.needsUpdate=!0;const g=p.visible;p.visible=!0,this.prewarmCamera.layers.mask=e.layers.mask,this.prewarmCamera.matrixAutoUpdate=!1,this.prewarmCamera.matrixWorldAutoUpdate=!1,this.prewarmCamera.matrixWorld.copy(e.matrixWorld),this.prewarmCamera.matrixWorldInverse.copy(e.matrixWorldInverse),this.prewarmCamera.projectionMatrix.copy(e.projectionMatrix);let h=0;try{this.renderPrewarmDepth(p);const y=p.shadow.map;y&&(h=1,this.depthRenders+=1,((f=i.signal)!=null&&f.aborted||o!==this.prewarmRevision||c!==n.contentRevision||!this.prewarmPageIds.has(r)||!this.cache.admit(JSON.stringify([l,u]),r,y,l,{evictInactive:!1}))&&bt(y))}catch(y){throw p.shadow.map&&bt(p.shadow.map),y}finally{p.visible=g,p.shadow.map=null}return a(h)}renderPrewarmDepth(e){const{renderer:r,scene:i}=this,n=r.getContext(),s=r.getRenderTarget(),a=r.getActiveCubeFace(),o=r.getActiveMipmapLevel(),c=r.getViewport(new te),l=r.getScissor(new te),u=r.getScissorTest(),d=n.getParameter(n.DRAW_FRAMEBUFFER_BINDING),p=n.getParameter(n.READ_FRAMEBUFFER_BINDING),g=new te().fromArray(n.getParameter(n.VIEWPORT)),h=new te().fromArray(n.getParameter(n.SCISSOR_BOX)),v=n.isEnabled(n.SCISSOR_TEST),f=n.isEnabled(n.DEPTH_TEST),y=n.getParameter(n.DEPTH_RANGE),T=n.getParameter(n.DEPTH_WRITEMASK),E=n.getParameter(n.DEPTH_FUNC),A=n.getParameter(n.DEPTH_CLEAR_VALUE),M=n.getParameter(n.COLOR_CLEAR_VALUE),I=n.getParameter(n.COLOR_WRITEMASK),R=r.clippingPlanes,F=r.autoClear,P=i.background,B=r.xr.enabled,Y=r.shadowMap.enabled,V=r.shadowMap.autoUpdate,N=r.shadowMap.needsUpdate,de=[];i.traverse(O=>{const X=O;X.isLight&&X.castShadow&&X!==e&&de.push(X)});try{r.resetState(),r.autoClear=!1,r.xr.enabled=!1,r.shadowMap.enabled=!0,r.shadowMap.autoUpdate=!0;for(const O of de)O.castShadow=!1;i.background=null,r.clippingPlanes=R,r.setRenderTarget(this.prewarmSink),n.depthRange(0,1),r.render(i,this.prewarmCamera)}finally{r.clippingPlanes=R,r.autoClear=F,r.xr.enabled=B,r.shadowMap.enabled=Y,r.shadowMap.autoUpdate=V,r.shadowMap.needsUpdate=N;for(const O of de)O.castShadow=!0;i.background=P,r.resetState(),r.setRenderTarget(s,a,o),r.setViewport(c),r.setScissor(l),r.setScissorTest(u),r.state.bindFramebuffer(n.DRAW_FRAMEBUFFER,d),r.state.bindFramebuffer(n.READ_FRAMEBUFFER,p),r.state.viewport(g),r.state.scissor(h),r.state.setScissorTest(v),f?r.state.enable(n.DEPTH_TEST):r.state.disable(n.DEPTH_TEST),n.depthRange(y[0],y[1]),n.depthMask(T),n.depthFunc(E),n.clearDepth(A),n.clearColor(M[0],M[1],M[2],M[3]),n.colorMask(I[0],I[1],I[2],I[3])}}configurePage(e,r,i){let n=this.pages.get(e.id);if(!n){const u=new xc(this.host);u.setMaxShadowMapSize(this.maxMapSize),u.setSoftSun(!0),n={controller:u,projectionKey:"",lightingKey:"",presentationKey:"",corridor:new Ne,planes:[],width:0,height:0,limited:!1,screenBounds:e.screenBounds,receiverBounds:e.bounds.clone(),groundTexelTargetMeters:e.groundTexelTargetMeters,casterBounds:new Ne,contentRevision:0,casterRevision:null}}this.pages.delete(e.id),this.pages.set(e.id,n);const s=n.controller.update({...r,maxReceiverBiasMeters:i?i(e.bounds,e.groundTexelTargetMeters):r.maxReceiverBiasMeters,receiverWorldPoints:Fr(e.bounds),receiverAnchorWorldPosition:e.bounds.getCenter(new x),minimumElevationMeters:e.bounds.min.y,maximumElevationMeters:e.bounds.max.y,quality:4,groundTexelFit:!0,groundTexelTargetMeters:e.groundTexelTargetMeters});if(!s)return;const a=n.controller.lights[0];a.visible=!1;const o=s.camera,c=e.receiverObjectId===void 0?"spatial-partition-v1":"native-object-v1",l=JSON.stringify([c,o.viewMatrixElements,o.projectionMatrixElements,o.shadowMapWidth,o.shadowMapHeight,a.shadow.bias,a.shadow.normalBias,e.bounds.min,e.bounds.max]);n.projectionKey=l,n.lightingKey=JSON.stringify([r.directionToSun,r.shadowIntensity,e.bounds.min,e.bounds.max]),n.presentationKey=JSON.stringify([c,r.directionToSun,r.shadowIntensity,e.bounds.min.x,e.bounds.min.z,e.bounds.max.x,e.bounds.max.z]),n.receiverBounds.copy(e.bounds),n.receiverObjectId=e.receiverObjectId,n.groundTexelTargetMeters=e.groundTexelTargetMeters,n.screenBounds=e.screenBounds,n.width=o.shadowMapWidth,n.height=o.shadowMapHeight,n.limited=(o.groundTexelWidthMeters??1/0)>e.groundTexelTargetMeters*1.001||(o.groundTexelHeightMeters??1/0)>e.groundTexelTargetMeters*1.001,n.casterBounds.copy(mu(e.bounds,r.directionToSun,s.casterReachMeters+e.bounds.getSize(new x).length(),Pr,o.guardMeters)),n.corridor.union(n.casterBounds),n.planes=[new ot(new x(1,0,0),-e.bounds.min.x),new ot(new x(-1,0,0),e.bounds.max.x),new ot(new x(0,0,1),-e.bounds.min.z),new ot(new x(0,0,-1),e.bounds.max.z)]}invalidateCasters(e){const r=e instanceof Ne?[e]:e,i=[];for(const[n,s]of this.pages)r.some(a=>s.corridor.intersectsBox(a))&&(s.contentRevision+=1,this.cache.invalidate(n),i.push(n));return i}setCasterRevision(e,r){const i=this.pages.get(e);return!i||r===null||i.casterRevision===r?!1:(i.casterRevision=r,i.contentRevision+=1,this.cache.invalidate(e),!0)}renderSample(e,r,i){this.renderSamples(e,this.activePageIds,r,i)}renderPageSample(e,r,i,n,s){return this.disposed||!this.activePageIds.has(r)?!1:this.renderSamples(e,[r],i,n,s)>0}renderPageColor(e,r){const i=this.pages.get(r);if(this.disposed||!i||!this.activePageIds.has(r))return!1;const{renderer:n,scene:s}=this,a=n.clippingPlanes,o=n.autoClear,c=s.background,l=n.shadowMap.autoUpdate,u=n.shadowMap.needsUpdate;n.autoClear=!1,n.shadowMap.autoUpdate=!1,n.shadowMap.needsUpdate=!1,n.clippingPlanes=[...a,...i.planes],s.background=null;try{const d=ca(s,i.receiverObjectId,n,e,"color-only");return d&&(this.colorPasses+=1),d}finally{n.clippingPlanes=a,n.autoClear=o,n.shadowMap.autoUpdate=l,n.shadowMap.needsUpdate=u,s.background=c}}get accumulationPages(){return[...this.activePageIds].map(e=>{const r=this.pages.get(e),i=r.controller.lights[0];return{id:e,receiverObjectId:r.receiverObjectId,contentKey:JSON.stringify([r.lightingKey,r.contentRevision]),casterRevision:r.casterRevision,presentationKey:r.presentationKey,revision:JSON.stringify([r.projectionKey,r.contentRevision,i.color.toArray(),i.intensity,i.shadow.intensity]),screenBounds:r.screenBounds.clone(),receiverBounds:r.receiverBounds.clone(),groundTexelTargetMeters:r.groundTexelTargetMeters}})}areCastersReady(e,r){const i=this.pages.get(e);return!!(i&&r(i.casterBounds))}getPageGeometry(e){const r=this.pages.get(e);return r?{casterBounds:r.casterBounds.clone(),receiverBounds:r.receiverBounds.clone(),width:r.width,height:r.height,projectionKey:r.projectionKey}:null}get supportsOpaqueAccumulation(){let e=!0;return this.scene.traverseVisible(r=>{const i=r;if(!(!i.isMesh||!i.receiveShadow))for(const n of Array.isArray(i.material)?i.material:[i.material])n.visible&&(n.transparent||!n.depthWrite||!n.depthTest)&&(e=!1)}),e}renderSamples(e,r,i,n,s){if(this.disposed)return 0;if(this.renderer.shadowMap.type!==en)throw new Error("Shadow page cache must be recreated after changing the depth/filter format");if(!Number.isInteger(n)||n<1||!Number.isInteger(i)||i<0||i>=n)throw new RangeError("Shadow sample must lie within its finite-disc sequence");n!==this.activeSamples&&(this.activeSamples=n,this.updateActiveVariants());const{renderer:a,scene:o}=this,c=a.clippingPlanes,l=a.autoClear,u=o.background,d=a.getRenderTarget(),p=d==null?void 0:d.scissor.clone(),g=d==null?void 0:d.scissorTest;let h=0;a.autoClear=!1,o.background=null;try{for(const v of r){const f=this.pages.get(v),y=f.controller.lights[0];n===1?f.controller.restoreSunDiscCenter():f.controller.applySunDiscSample(i,n);const T=JSON.stringify([v,f.projectionKey,n]),E=JSON.stringify([T,i]),A=this.cache.get(E);if(!A&&this.streamedTarget&&(this.streamedTarget.width!==f.width||this.streamedTarget.height!==f.height)&&(bt(this.streamedTarget),this.streamedTarget=null),y.shadow.map=A??this.streamedTarget,A||(this.streamedTarget=null),y.shadow.needsUpdate=!A,y.visible=!0,a.clippingPlanes=[...c,...f.planes],d){const{x:M,y:I,z:R,w:F}=s??f.screenBounds,P=Math.floor(M*d.width),B=Math.floor(I*d.height);d.scissor.set(P,B,Math.ceil((M+R)*d.width)-P,Math.ceil((I+F)*d.height)-B),d.scissorTest=!0,a.setRenderTarget(d)}try{if(ca(o,f.receiverObjectId,a,e)&&(this.colorPasses+=1,h+=1),!A&&y.shadow.map){this.depthRenders+=1;const I=y.shadow.map;this.cache.admit(E,v,I,T)||(this.streamedTarget=I)}}catch(M){throw!A&&y.shadow.map&&bt(y.shadow.map),M}finally{y.visible=!1,y.shadow.map=null}}}finally{a.clippingPlanes=c,a.autoClear=l,o.background=u,d&&p&&(d.scissor.copy(p),d.scissorTest=g??!1,a.setRenderTarget(d))}return h}get stats(){const e=[...this.activePageIds].map(r=>this.pages.get(r));return{pages:e.length,cachedSamplePages:this.cache.count,cacheBytes:this.cache.bytes,scratchBytes:this.reservedBytes,hits:this.cache.hits,misses:this.cache.misses,depthRenders:this.depthRenders,colorPasses:this.colorPasses,limitedPages:e.filter(r=>r.limited).length,dimensions:e.map(r=>`${r.width}×${r.height}`)}}clearCache(){this.cache.clear();for(const e of this.pages.values())e.contentRevision+=1}updateActiveVariants(){this.cache.setActiveVariants(new Set([...this.activePageIds].flatMap(e=>[...new Set([1,this.activeSamples])].map(r=>JSON.stringify([e,this.pages.get(e).projectionKey,r])))))}get pageLevels(){return[...this.activePageIds].map(e=>{const r=this.pages.get(e);return{id:e,level:Math.max(0,Math.round(Math.log2(this.maxMapSize/Math.max(r.width,r.height)))),width:r.width,height:r.height}})}dispose(){var e;if(!this.disposed){this.disposed=!0,this.cache.clear(),this.streamedTarget&&bt(this.streamedTarget),this.streamedTarget=null,(e=this.prewarmSink)==null||e.dispose(),this.prewarmSink=null,this.clearPrewarmView(),this.scratchBytes=0;for(const r of this.pages.values())r.controller.dispose();this.pages.clear(),this.activePageIds.clear()}}}const xf=async({pages:t,signal:e,prepare:r,render:i,yieldToInput:n})=>{let s=0,a=0,o=0,c=!1;try{for(const l of t){if(e.aborted)break;if(l.cachedSamples>=l.samples){s+=1;continue}if(!l.canPrewarm){c=!0;continue}if(await n(e),e.aborted)break;const u=await r(l,e);try{if(e.aborted)break;if(!u.covered||!u.isCurrent()){a+=1;continue}const d=Math.min(l.samples,l.sampleBudget);d<l.samples&&(c=!0);for(let p=l.cachedSamples;p<d&&(await n(e),!(e.aborted||!u.isCurrent()));p+=1){const g=i(l.id,u.group,e);if(o+=g.rendered,g.complete){s+=1;break}if(g.budgetLimited){c=!0;break}if(g.aborted||!g.rendered)break}}finally{u.dispose()}}}catch(l){if(!e.aborted)throw l}return{offered:t.length,completed:s,skippedCoverage:a,renderedSamples:o,budgetLimited:c,aborted:e.aborted}},Tf=t=>{const e=globalThis.scheduler;return e!=null&&e.postTask?e.postTask(()=>{},{priority:"background",delay:0,signal:t}):Promise.reject(new Error("Background scheduler unavailable"))},bf=({getRequest:t})=>{let e=!1,r=null,i=null,n=!1;const s=()=>{n=!1,i==null||i.abort()},a=()=>{if(!e){if(i){n=!0;return}try{const o=globalThis.scheduler;if(typeof(o==null?void 0:o.postTask)!="function")return;const c=t();if(!c||c.key===r)return;r=c.key;const l=new AbortController;i=l;let u=!1;const d=()=>{if(i!==l||u)return;i=null;const p=n;n=!1,p&&a()};try{o.postTask(async()=>{if(e||l.signal.aborted)return;const p=t();if(!(!p||p.key!==c.key)){u=!0;try{await p.run(l.signal)}finally{u=!1,d()}}},{priority:"background",delay:150,signal:l.signal}).then(d,d)}catch{d()}}catch{}}};return{onSettled:a,cancel:s,dispose(){e=!0,s()}}},Tc=(t,e,r)=>JSON.stringify([t.matrixWorldInverse.elements,t.projectionMatrix.elements,e,r]),Mf=(t,e)=>{if(!Number.isFinite(e)||e<t.length*8)throw new RangeError("Capture budget must fit at least one scalar/depth pixel per page");const r=[...t].sort((n,s)=>n.id<s.id?-1:n.id>s.id?1:0).map(({id:n,plan:s,screenArea:a})=>({id:n,plan:s,width:s.width,height:s.height,weight:2**Math.floor(Math.log2(Math.max(1/65536,Math.min(1,a))))}));let i=r.reduce((n,s)=>n+s.width*s.height,0);for(;i*8>e;){let n;for(const a of r)a.width===1&&a.height===1||(!n||a.width*a.height/a.weight>n.width*n.height/n.weight)&&(n=a);if(!n)break;const s=n.width*n.height;n.width>=n.height&&n.width>1?n.width/=2:n.height/=2,i-=s-n.width*n.height}return new Map(r.map(({id:n,plan:s,width:a,height:o})=>[n,a===s.width&&o===s.height?s:{...s,width:a,height:o,limited:!0,key:Tc(s.camera,a,o)}]))},Rf=(t,e,r)=>{const{groundTexelTargetMeters:i,maximumDimension:n,maximumPixels:s}=r;if(t.isEmpty()||![...t.min.toArray(),...t.max.toArray(),...e.toArray()].every(Number.isFinite)||!(i>0&&Number.isFinite(i))||!(n>=1&&Number.isFinite(n))||!(s>=1&&Number.isFinite(s)))throw new RangeError("Receiver capture requires finite bounds and positive allocation limits");const a=t.getCenter(new x),o=t.getSize(new x).length()*.5,c=Math.max(.001,o*.001),l=new Qn;l.quaternion.copy(e).normalize(),l.position.copy(a).add(new x(0,0,o+c+1).applyQuaternion(l.quaternion)),l.updateMatrixWorld(!0);const u=new Ne().setFromPoints(Fr(t).map(y=>y.applyMatrix4(l.matrixWorldInverse)));l.left=u.min.x-c,l.right=u.max.x+c,l.bottom=u.min.y-c,l.top=u.max.y+c,l.near=Math.max(.001,-u.max.z-c),l.far=Math.max(l.near+.001,-u.min.z+c),l.updateProjectionMatrix();const d=y=>2**Math.ceil(Math.log2(Math.max(1,y/i))),p=d(l.right-l.left),g=d(l.top-l.bottom),h=2**Math.floor(Math.log2(n));let v=Math.min(p,h),f=Math.min(g,h);for(;v*f>s;)v>=f&&v>1?v/=2:f/=2;return{camera:l,width:v,height:f,limited:v<p||f<g,key:Tc(l,v,f)}},Ef=t=>new ul().setFromRotationMatrix(new J().extractRotation(t.matrixWorld)),bi={namespace:"shadow-corridor-visibility",schema:"visibility-depth-world-basis-v1",maximumPayloadBytes:32*1024**2,maximumRecordBytes:33*1024**2,maximumIdentityCharacters:65536},ci={read:"read",write:"write",writePacked:"write-packed"},Ge=t=>{if(!t||!Number.isInteger(t.samples)||t.samples<1||t.samples>4096)return null;const e=[t.source,t.dateTime,t.corridor,t.resolution,t.geometryFingerprint];return e.some(r=>typeof r!="string"||r.length===0)||e.reduce((r,i)=>r+i.length,0)>bi.maximumIdentityCharacters?null:JSON.stringify([bi.schema,...e,t.samples])},Tn=(t,e)=>Array.isArray(t)&&t.length===e&&t.every(Number.isFinite),bc=t=>{if(!t||typeof t!="object")return!1;const e=t,r=e.width*e.height;return Number.isSafeInteger(e.width)&&e.width>0&&Number.isSafeInteger(e.height)&&e.height>0&&Number.isSafeInteger(r)&&r*8<=bi.maximumPayloadBytes&&Tn(e.captureMatrix,16)&&Tn(e.worldBasis,16)&&Tn(e.crop,4)&&e.crop[0]>=0&&e.crop[1]>=0&&e.crop[2]>0&&e.crop[3]>0&&e.crop[0]+e.crop[2]<=1.000001&&e.crop[1]+e.crop[3]<=1.000001},Ya=t=>{if(!bc(t))return!1;const e=t,r=e.width*e.height;return e.visibility instanceof Float32Array&&e.visibility.length===r&&e.depth instanceof Float32Array&&e.depth.length===r},Af=t=>{if(!bc(t))return!1;const e=t;return e.rgba instanceof Float32Array&&e.rgba.length===e.width*e.height*4},Sr=64,Kn=256*1024**2,bn=Kn,Cf=128*1024**2,qa=8,Ka=32*1024**2,If=4,wr=t=>{var e;t.target?((e=t.target.depthTexture)==null||e.dispose(),t.target.dispose()):(t.visibility.dispose(),t.depth.dispose())},Df=(t,e)=>t.elements.every((r,i)=>Number.isFinite(r)&&Math.abs(r-e.elements[i])<=1e-10*Math.max(1,Math.abs(r)));class Mc{constructor(e){this.renderer=e,this.copyQuad.frustumCulled=!1,this.copyScene.add(this.copyQuad)}captures=new Map;visiblePageIds=new Set;samples=0;replayCount=0;matchingPages=0;persistence;persistenceGeneration=0;disposed=!1;restoreAttempts=new Set;pendingRestores=new Map;restoreRequests=new Map;pendingWrites=new Map;persistenceOffers=new WeakMap;persistenceAttempted=new WeakSet;persistenceTimer=null;readbackBusy=!1;readbackBytes=0;packMaterial=new Kt({uniforms:{visibility:{value:null},depth:{value:null}},vertexShader:"varying vec2 uvCopy; void main() { uvCopy = position.xy * 0.5 + 0.5; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:"uniform sampler2D visibility; uniform sampler2D depth; varying vec2 uvCopy; void main() { gl_FragColor = vec4(texture2D(visibility, uvCopy).r, texture2D(depth, uvCopy).r, 0.0, 1.0); }",depthTest:!1,depthWrite:!1,blending:di,toneMapped:!1});materials=new Map;unsupportedMaterials=new WeakSet;captureSupported=!0;contentRevision=0;get revision(){return this.contentRevision}get supportsCapture(){return this.captureSupported}copyScene=new Cr;copyCamera=new Mi;copyMaterial=new Kt({uniforms:{source:{value:null},crop:{value:new te}},vertexShader:"varying vec2 uvCopy; void main() { uvCopy = position.xy * 0.5 + 0.5; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:"uniform sampler2D source; uniform vec4 crop; varying vec2 uvCopy; void main() { gl_FragColor = vec4(texture2D(source, crop.xy + uvCopy * crop.zw).r, 0.0, 0.0, 1.0); }",depthTest:!1,depthWrite:!1,blending:di,toneMapped:!1});copyQuad=new Or(new Xn(2,2),this.copyMaterial);downsampleMaterial=new Kt({uniforms:{source:{value:null},depth:{value:null},texel:{value:new Mt}},vertexShader:"varying vec2 uvCopy; void main() { uvCopy = position.xy * 0.5 + 0.5; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:`uniform sampler2D source; uniform sampler2D depth;
      uniform vec2 texel; varying vec2 uvCopy;
      void main() {
        vec2 d = texel * 0.25;
        float visibility = (texture2D(source, uvCopy + d).r
          + texture2D(source, uvCopy - d).r
          + texture2D(source, uvCopy + vec2(d.x, -d.y)).r
          + texture2D(source, uvCopy + vec2(-d.x, d.y)).r) * 0.25;
        gl_FragColor = vec4(visibility, 0.0, 0.0, 1.0);
        gl_FragDepth = texture2D(depth, uvCopy).r;
      }`,depthTest:!0,depthFunc:To,depthWrite:!0,blending:di,toneMapped:!1});uniforms={carmaCaptureVisibility:{value:!1},carmaRetainedEnabled:{value:!1},carmaRetainedColor:{value:null},carmaRetainedDepth:{value:null},carmaRetainedMatrix:{value:new J},carmaRetainedCrop:{value:new te(0,0,1,1)},carmaRetainedCount:{value:0},carmaRetainedBounds:{value:Array.from({length:Sr},()=>new te)}};get memoryBytes(){return[...this.captures.values()].reduce((e,r)=>e+r.bytes,this.readbackBytes)}getCapturedSize(e){const r=this.captures.get(e);return r?{width:r.width,height:r.height,samples:r.samples}:null}get stats(){return{pages:this.captures.size,samples:this.samples,matchingPages:this.matchingPages,replays:this.replayCount,bytes:this.memoryBytes}}beginFrame(e=[]){this.matchingPages=0,this.visiblePageIds=new Set(e.map(r=>r.id)),this.schedulePersistence()}has(e,r){var n;const i=this.captures.get(e.id);if(!this.canReplay(e)||(i==null?void 0:i.casterRevision)!==e.casterRevision)return!1;if(i&&i.samples>1&&i.samples>=r&&e.captureSize&&e.presentationKey&&i.crop.x===0&&i.crop.y===0&&i.crop.z===1&&i.crop.w===1)return i.width>=e.captureSize.width&&i.height>=e.captureSize.height;if(i!=null&&i.restored){const s=this.restoreRequests.get(e.id),a=(n=this.persistence)==null?void 0:n.identity(e,r);if(e.ready===!1||!(s!=null&&s.expected)||!a||Ge(a)!==i.persistentKey||!Df(i.matrix,s.expected))return!1;const o=e.screenBounds,c=i.crop;if(c.x>o.x+1e-6||c.y>o.y+1e-6||c.x+c.z<o.x+o.z-1e-6||c.y+c.w<o.y+o.w-1e-6)return!1}return(i==null?void 0:i.revision)===(e.contentKey??e.revision)&&i.samples===r}hasAtLeast(e,r){const i=this.captures.get(e.id);return!!(i&&i.samples>=r&&this.has(e,i.samples))}downsample(e,r,i){var f;if(!Number.isInteger(r)||!Number.isInteger(i)||r<1||i<1)return!1;const n=this.captures.get(e.id);if(!n||!this.canReplay(e))return!1;const s=Math.max(r,Math.ceil(n.width/2)),a=Math.max(i,Math.ceil(n.height/2));if(s>n.width||a>n.height||s*a>=n.width*n.height)return!1;const o=new je(s,a,{type:yt,format:Yt,minFilter:Ae,magFilter:Ae,depthTexture:new Zt(s,a,Nt),samples:0}),c=this.renderer,l=c.getRenderTarget(),u=c.getActiveCubeFace(),d=c.getActiveMipmapLevel(),p=c.getViewport(new te),g=c.getScissor(new te),h=c.getScissorTest(),v=c.autoClear;try{c.initRenderTarget(o),this.downsampleMaterial.uniforms.source.value=n.visibility,this.downsampleMaterial.uniforms.depth.value=n.depth,this.downsampleMaterial.uniforms.texel.value.set(1/s,1/a),this.copyQuad.material=this.downsampleMaterial,c.autoClear=!1,c.setRenderTarget(o),c.setViewport(new te(0,0,s,a)),c.setScissorTest(!1),c.render(this.copyScene,this.copyCamera)}catch(y){throw(f=o.depthTexture)==null||f.dispose(),o.dispose(),y}finally{this.copyQuad.material=this.copyMaterial,c.setRenderTarget(l,u,d),c.setViewport(p),c.setScissor(g),c.setScissorTest(h),c.autoClear=v}return this.captures.set(e.id,{...n,target:o,visibility:o.texture,depth:o.depthTexture,width:s,height:a,bytes:s*a*8}),this.pendingWrites.delete(e.id),wr(n),this.contentRevision+=1,!0}isRestorePending(e,r){var s;const i=this.pendingRestores.get(e.id);if(!i||i.samples!==r)return!1;const n=(s=this.persistence)==null?void 0:s.identity(e,r);return!!(n&&Ge(n)===i.key)}setPersistence(e){this.persistence!==e&&(this.cancelPendingPersistence(),this.persistence=e)}cancelPendingPersistence(){var e;(e=this.persistence)==null||e.cache.cancelPending(),this.persistenceGeneration+=1,this.restoreAttempts.clear(),this.pendingRestores.clear(),this.restoreRequests.clear(),this.pendingWrites.clear(),this.persistenceOffers=new WeakMap,this.persistenceAttempted=new WeakSet,this.persistenceTimer!==null&&clearTimeout(this.persistenceTimer),this.persistenceTimer=null}beginSolarTransition(){this.cancelPendingPersistence()}canPresent(e){return this.canReplay(e)}prepareRestore(e,r,i){if(this.disposed)return;if(this.restoreRequests.set(e.id,{page:e,samples:r,expected:i==null?void 0:i.clone()}),this.restoreRequests.size>Sr*2){for(const l of this.restoreRequests.keys())if(l!==e.id&&!this.visiblePageIds.has(l)){this.restoreRequests.delete(l);break}}const n=this.persistence;if(!(n!=null&&n.cache.enabled)||n.cache.busy||e.ready===!1||this.hasAtLeast(e,r))return;const s=n.identity(e,r),a=s&&Ge(s);if(!s||!a||this.restoreAttempts.has(a))return;this.restoreAttempts.add(a),this.restoreAttempts.size>Sr*4&&this.restoreAttempts.delete(this.restoreAttempts.values().next().value);const o=this.persistenceGeneration,c=this.captures.get(e.id);this.pendingRestores.set(e.id,{key:a,samples:r}),n.cache.read(s).then(l=>{const u=this.restoreRequests.get(e.id),d=u&&n.identity(u.page,r);if(!l||this.disposed||this.persistenceGeneration!==o||this.persistence!==n||!u||u.page.ready===!1||!d||Ge(d)!==a||this.captures.get(e.id)!==c)return;const p=new J().fromArray(l.worldBasis),g=n.worldBasis();if(!p.elements.every(Number.isFinite)||p.determinant()===0||!g.elements.every(Number.isFinite)||g.determinant()===0)return;const h=new J().fromArray(l.captureMatrix).multiply(p.invert()).multiply(g),v=[...new Set([l.visibility.buffer,l.depth.buffer])].reduce((E,A)=>E+A.byteLength,0),f=l.width*l.height*qa+v;if(!this.admit(e.id,f))return;const y=new Pn(l.visibility,l.width,l.height,Yt,yt),T=new Pn(l.depth,l.width,l.height,Yt,yt);for(const E of[y,T])E.minFilter=Ae,E.magFilter=Ae,E.generateMipmaps=!1,E.needsUpdate=!0;c&&wr(c),this.captures.delete(e.id),this.captures.set(e.id,{target:null,visibility:y,depth:T,width:l.width,height:l.height,bytes:f,restored:!0,persistentKey:a,persistentIdentity:l.identity,revision:u.page.contentKey??u.page.revision,casterRevision:u.page.casterRevision,presentationKey:u.page.presentationKey??u.page.contentKey??u.page.revision,samples:l.identity.samples,matrix:h,crop:new te().fromArray(l.crop)}),this.samples=l.identity.samples,this.contentRevision+=1}).catch(()=>{}).finally(()=>{var l,u;!this.disposed&&o===this.persistenceGeneration&&(((l=this.pendingRestores.get(e.id))==null?void 0:l.key)===a&&this.pendingRestores.delete(e.id),(u=n.requestRepaint)==null||u.call(n),this.schedulePersistence())})}admit(e,r,i=!1){var a;const n=i?Math.min(((a=this.captures.get(e))==null?void 0:a.bytes)??0,Cf):0,s=bn+n;for(const[o,c]of this.captures){if(r+this.memoryBytes<=s)break;o===e||this.visiblePageIds.has(o)||(wr(c),this.captures.delete(o),this.contentRevision+=1,this.pendingWrites.delete(o))}return r+this.memoryBytes<=s}publish(e,r,i,n,s){var P;if(!this.captureSupported)return!1;const a=n.screenBounds,o=Math.max(0,Math.floor(a.x*e.width)),c=Math.max(0,Math.floor(a.y*e.height)),l=Math.min(e.width,Math.ceil((a.x+a.z)*e.width)),u=Math.min(e.height,Math.ceil((a.y+a.w)*e.height)),d=l-o,p=u-c,g=d*p*qa;if(d<=0||p<=0||g>bn||!r.depthTexture||!this.admit(n.id,g,!0))return!1;const h=this.renderer,v=h.getRenderTarget(),f=h.getActiveCubeFace(),y=h.getActiveMipmapLevel(),T=h.getViewport(new te),E=h.getScissor(new te),A=h.getScissorTest(),M=h.autoClear,I=new je(d,p,{type:yt,format:Yt,minFilter:Ae,magFilter:Ae,depthTexture:new Zt(d,p,Nt),samples:0});try{h.initRenderTarget(I);const B=new dl(new Mt(o,c),new Mt(l,u));this.copyMaterial.uniforms.source.value=e.texture,this.copyMaterial.uniforms.crop.value.set(o/e.width,c/e.height,d/e.width,p/e.height),h.autoClear=!1,h.setRenderTarget(I),h.setViewport(new te(0,0,d,p)),h.setScissorTest(!1),h.render(this.copyScene,this.copyCamera),h.copyTextureToTexture(r.depthTexture,I.depthTexture,B)}catch(B){throw(P=I.depthTexture)==null||P.dispose(),I.dispose(),B}finally{h.setRenderTarget(v,f,y),h.setViewport(T),h.setScissor(E),h.setScissorTest(A),h.autoClear=M}const R=this.captures.get(n.id);R&&wr(R),this.samples=s,this.captures.delete(n.id);const F={target:I,visibility:I.texture,depth:I.depthTexture,width:d,height:p,bytes:g,restored:!1,revision:n.contentKey??n.revision,casterRevision:n.casterRevision,samples:s,presentationKey:n.presentationKey??n.contentKey??n.revision,matrix:new J().multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),crop:new te(o/e.width,c/e.height,d/e.width,p/e.height)};return this.captures.set(n.id,F),this.contentRevision+=1,this.queuePersistence(n,F),!0}queuePersistence(e,r){const i=this.persistence;if(!(i!=null&&i.cache.enabled)||e.ready===!1||this.disposed)return;const n=i.identity(e,r.samples),s=n&&Ge(n),a=i.worldBasis();!n||n.samples!==r.samples||!s||!a.elements.every(Number.isFinite)||a.determinant()===0||r.width*r.height*16>Ka||(this.pendingWrites.delete(e.id),this.persistenceOffers.set(r,{page:e,capture:r,identity:n,key:s,worldBasis:[...a.elements]}),this.schedulePersistence())}schedulePersistence(){var e;if(!(this.disposed||this.persistenceTimer!==null||this.readbackBusy||!((e=this.persistence)!=null&&e.cache.enabled)||this.persistence.cache.busy)){for(const[r,i]of this.pendingWrites)this.captures.get(r)!==i.capture&&this.pendingWrites.delete(r);for(const r of[!0,!1])for(const[i,n]of this.captures){if(this.pendingWrites.size>=If)break;const s=this.persistenceOffers.get(n);this.visiblePageIds.has(i)===r&&s&&!this.persistenceAttempted.has(n)&&!this.pendingWrites.has(i)&&this.pendingWrites.set(i,s)}this.pendingWrites.size!==0&&(this.persistenceTimer=setTimeout(()=>{this.persistenceTimer=null,this.persistNextCapture()},0))}}persistNextCapture(){var h,v,f;const e=this.persistence;if(this.disposed||this.readbackBusy||!(e!=null&&e.cache.enabled)||e.cache.busy||typeof this.renderer.readRenderTargetPixelsAsync!="function")return;const r=[...this.pendingWrites.entries()].find(([y,T])=>this.captures.get(y)===T.capture);if(!r){this.pendingWrites.clear();return}const[i,n]=r,s=((h=this.restoreRequests.get(i))==null?void 0:h.page)??n.page,a=e.identity(s,n.capture.samples);if(s.ready===!1||!a||Ge(a)!==n.key){this.pendingWrites.delete(i),this.persistenceAttempted.add(n.capture),this.schedulePersistence();return}const{capture:o}=n,c=o.width*o.height*16;if(c>Ka||this.memoryBytes+c*2>bn){this.pendingWrites.delete(i),this.persistenceAttempted.add(o),this.schedulePersistence();return}const l=this.persistenceGeneration,u={target:null,pixels:null,reading:null},d=()=>{const y=this.renderer,T=y.getRenderTarget(),E=y.getActiveCubeFace(),A=y.getActiveMipmapLevel(),M=y.getViewport(new te),I=y.getScissor(new te),R=y.getScissorTest(),F=y.autoClear,P=this.copyQuad.material;try{u.target=new je(o.width,o.height,{format:Dr,type:yt,depthBuffer:!1,minFilter:Ae,magFilter:Ae}),y.initRenderTarget(u.target),u.pixels=new Float32Array(o.width*o.height*4),this.packMaterial.uniforms.visibility.value=o.visibility,this.packMaterial.uniforms.depth.value=o.depth,this.copyQuad.material=this.packMaterial,y.autoClear=!1,y.setRenderTarget(u.target),y.setViewport(new te(0,0,o.width,o.height)),y.setScissorTest(!1),y.render(this.copyScene,this.copyCamera),u.reading=y.readRenderTargetPixelsAsync(u.target,0,0,o.width,o.height,u.pixels)}finally{this.copyQuad.material=P,y.setRenderTarget(T,E,A),y.setViewport(M),y.setScissor(I),y.setScissorTest(R),y.autoClear=F}};try{if(e.runIdleRender){if(!e.runIdleRender(d)&&!u.target)return}else d()}catch{(v=u.target)==null||v.dispose(),this.pendingWrites.delete(i),this.persistenceAttempted.add(o),this.schedulePersistence();return}if(!u.reading||!u.target||!u.pixels){(f=u.target)==null||f.dispose();return}const p=u.target,g=u.pixels;this.pendingWrites.delete(i),this.persistenceAttempted.add(o),this.readbackBusy=!0,this.readbackBytes=c*2,u.reading.then(async()=>{var E;const y=((E=this.restoreRequests.get(i))==null?void 0:E.page)??n.page,T=e.identity(y,o.samples);this.disposed||l!==this.persistenceGeneration||this.persistence!==e||y.ready===!1||!T||Ge(T)!==n.key||await e.cache.writePacked(n.identity,{width:o.width,height:o.height,rgba:g,captureMatrix:[...o.matrix.elements],crop:o.crop.toArray(),worldBasis:n.worldBasis})}).catch(()=>{}).finally(()=>{var y;p.dispose(),this.readbackBusy=!1,this.readbackBytes=0,this.disposed||((y=e.requestRepaint)==null||y.call(e),this.schedulePersistence())})}canReplay(e){var i;const r=this.captures.get(e.id);if(!r||r.presentationKey!==(e.presentationKey??e.contentKey??e.revision))return!1;if(r.restored){const n=(i=this.persistence)==null?void 0:i.identity(e,r.samples),s=r.persistentIdentity;if(e.captureSize&&s)return!!(n&&n.source===s.source&&n.dateTime===s.dateTime&&n.corridor===s.corridor&&n.geometryFingerprint===s.geometryFingerprint&&n.samples===s.samples);if(!n||Ge(n)!==r.persistentKey)return!1}return!0}activate(e){const r=this.captures.get(e.id);this.captures.delete(e.id),this.captures.set(e.id,r),this.uniforms.carmaRetainedMatrix.value.copy(r.matrix),this.uniforms.carmaRetainedCrop.value.copy(r.crop),this.uniforms.carmaRetainedColor.value=r.visibility,this.uniforms.carmaRetainedDepth.value=r.depth,this.matchingPages+=1,this.replayCount+=1,this.uniforms.carmaRetainedCount.value=1;const i=e.receiverBounds;this.uniforms.carmaRetainedBounds.value[0].set(i.min.x,i.min.z,i.max.x,i.max.z),this.uniforms.carmaRetainedEnabled.value=!0}renderNative(e,r,i){if(r.length===0)return i(),new Set;this.configureScene(e);const n=new Map(r.filter(u=>u.receiverObjectId!==void 0&&this.canPresent(u)).map(u=>[u.receiverObjectId,u])),s=[],a=new Map;e.traverseVisible(u=>{const d=u;if(!d.isMesh)return;let p;for(let g=d;g&&(p=n.get(g.id),!p);g=g.parent);s.push({mesh:d,page:p});for(const g of Array.isArray(d.material)?d.material:[d.material]){let h=a.get(g);h||a.set(g,h=new Set),h.add(p==null?void 0:p.id)}});const o=new Set;for(const u of a.values())if(!(u.size<2))for(const d of u)d!==void 0&&o.add(d);const c=new Set,l=[];for(const{mesh:u,page:d}of s){const p=u.onBeforeRender,g=d!==void 0&&!o.has(d.id);u.onBeforeRender=(...h)=>{p.call(u,...h),this.uniforms.carmaRetainedEnabled.value=!1,g&&this.activate(d)},g&&c.add(d.id),l.push(()=>{u.onBeforeRender=p})}this.uniforms.carmaRetainedEnabled.value=!1;try{return i(),c}finally{this.uniforms.carmaRetainedEnabled.value=!1;for(const u of l)u()}}render(e,r,i,n){if(!this.canPresent(r))return n();this.configureScene(e),this.activate(r);try{return n()}finally{this.uniforms.carmaRetainedEnabled.value=!1}}capture(e,r){this.captureSupported=!0,this.configureScene(e),this.uniforms.carmaCaptureVisibility.value=!0;try{return r()}finally{this.uniforms.carmaCaptureVisibility.value=!1}}configureScene(e){e.traverseVisible(r=>{const i=r;if(!(!i.isMesh||!i.receiveShadow)){if(i.isInstancedMesh||i.isSkinnedMesh){this.captureSupported=!1;return}for(const n of Array.isArray(i.material)?i.material:[i.material]){if(this.unsupportedMaterials.has(n)&&(this.captureSupported=!1),!(n.isMeshStandardMaterial||n.isMeshLambertMaterial||n.isMeshPhongMaterial)||n.transparent){this.captureSupported=!1;continue}this.materials.has(n)||this.configure(n)}}})}configure(e){const r=e.onBeforeCompile,i=e.customProgramCacheKey,n=this.uniforms,s=(l,u)=>{r.call(e,l,u);const d=/getShadow\( directionalShadowMap\[ i \][^;]+?\)/;if(!l.vertexShader.includes("#include <common>")||!l.vertexShader.includes("#include <project_vertex>")||!l.fragmentShader.includes("#include <common>")||!l.fragmentShader.includes("#include <lights_fragment_begin>")||!l.fragmentShader.includes("#include <dithering_fragment>")||!d.test(Nn.lights_fragment_begin)){this.unsupportedMaterials.add(e),this.captureSupported=!1;return}this.unsupportedMaterials.delete(e),Object.assign(l.uniforms,n),l.vertexShader=l.vertexShader.replace("#include <common>",`#include <common>
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
`);const p=Nn.lights_fragment_begin.replace(d,g=>`(carmaCapturedCoverage = ${g}, carmaRetainedCoverage(carmaCapturedCoverage))`);l.fragmentShader=l.fragmentShader.replace("#include <lights_fragment_begin>",`float carmaCapturedCoverage = 1.0;
${p}`).replace("#include <dithering_fragment>",`#include <dithering_fragment>
if (carmaCaptureVisibility) gl_FragColor.rgb = vec3(carmaCapturedCoverage);`)},a=()=>`${i.call(e)}|retained-corridor-visibility-v4`;e.onBeforeCompile=s,e.customProgramCacheKey=a,e.needsUpdate=!0;const o=()=>{e.onBeforeCompile===s&&(e.onBeforeCompile=r),e.customProgramCacheKey===a&&(e.customProgramCacheKey=i),e.removeEventListener("dispose",c),e.needsUpdate=!0},c=()=>{o(),this.materials.delete(e)};e.addEventListener("dispose",c),this.materials.set(e,o)}dispose(){this.disposed=!0,this.setPersistence(void 0);for(const e of this.captures.values())wr(e);this.captures.clear(),this.uniforms.carmaRetainedEnabled.value=!1,this.uniforms.carmaRetainedColor.value=null,this.uniforms.carmaRetainedDepth.value=null,this.copyQuad.geometry.dispose(),this.copyMaterial.dispose(),this.downsampleMaterial.dispose(),this.packMaterial.dispose();for(const e of this.materials.values())e();this.materials.clear()}}const Pt=64,mi=512*1024**2,Ze={inactive:"inactive",dimensions:"dimensions",budget:"budget",msaa:"msaa",format:"format",receivers:"receivers",pages:"pages",renderer:"renderer",disposed:"disposed"},Xa=`
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
`,Nf=`
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
`;class Of{constructor(e,r){this.renderer=e,this.ownsPresentation=r===void 0,this.presentation=r??new Mc(e),this.quad.frustumCulled=!1,this.fullscreenScene.add(this.quad)}fullscreenScene=new Cr;fullscreenCamera=new Qn(-1,1,1,-1,0,1);blendMaterial=new Kt({glslVersion:Ir,vertexShader:Xa,fragmentShader:Pf,uniforms:{tPrevious:{value:null},tReference:{value:null},tReferenceDepth:{value:null},tSample:{value:null},tSampleDepth:{value:null},uInverseViewProjection:{value:new J},uBounds:{value:Array.from({length:Pt},()=>new te)},uBoundsCount:{value:0},uRefresh:{value:!1},uResetAll:{value:!1},uWeights:{value:new Float32Array(Pt).fill(1)}},depthTest:!1,depthWrite:!1,blending:di});compositeMaterial=new Kt({glslVersion:Ir,vertexShader:Xa,fragmentShader:Nf,uniforms:{tColor:{value:null},tDepth:{value:null},uOutputDither:{value:!1}},dithering:!0,transparent:!0,blending:ho,depthTest:!0,depthFunc:To,depthWrite:!0});quad=new Or(new Xn(2,2),this.blendMaterial);referenceTarget=null;sampleTarget=null;readTarget=null;writeTarget=null;pages=new Map;stateKey="";targetKey="";cursor=0;totalSamples=1;broken=!1;disposed=!1;allocatedBytes=0;lastFallbackReason=null;presentation;publishedStateKeys=new Map;publicationRetryMs=250;ownsPresentation;get pageProgress(){return[...this.pages].map(([e,r])=>({id:e,samples:r.samples,totalSamples:this.totalSamples,ready:r.page.ready!==!1,published:this.publishedStateKeys.get(e)===JSON.stringify([this.stateKey,r.page.revision])}))}get memoryBytes(){return this.allocatedBytes+this.presentation.memoryBytes}get fallbackReason(){return this.lastFallbackReason}render(e,r,i){var F,P;if(this.disposed)return this.fallback(Ze.disposed);if(this.broken)return this.fallback(Ze.renderer);if(!i.active)return this.stateKey="",this.lastFallbackReason=Ze.inactive,null;const{width:n,height:s,samples:a}=i,o=es((F=i.options)==null?void 0:F.format),c=((P=i.options)==null?void 0:P.msaaSamples)??bo.msaaSamples,l=n*s,u=i.visibilityOnly?Yt:Dr,d=i.visibilityOnly?1:4,p=l*(2*(o.bytesPerPixel*d/4+4)+2*o.accumulationBytesPerPixel*d/4);if(!Number.isInteger(n)||n<1||!Number.isInteger(s)||s<1||!Number.isInteger(a)||a<1||n>this.renderer.capabilities.maxTextureSize||s>this.renderer.capabilities.maxTextureSize)return this.fallback(Ze.dimensions);if(i.maxRenderTargetPixels!==void 0&&(!(i.maxRenderTargetPixels>0)||l>i.maxRenderTargetPixels)||p+this.presentation.memoryBytes>mi)return this.fallback(Ze.budget);if(o.format!==Dr)return this.fallback(Ze.format);if(c!==0)return this.fallback(Ze.msaa);if(!r.supportsOpaqueAccumulation)return this.fallback(Ze.receivers);const g=r.accumulationPages.map(B=>{var Y;return{...B,ready:B.ready!==!1&&(((Y=i.isPageReady)==null?void 0:Y.call(i,B.id))??!0)}});if(g.length===0||g.length>Pt)return this.fallback(Ze.pages);this.lastFallbackReason=null;const h=this.renderer,v=h.getRenderTarget(),f=h.getActiveCubeFace(),y=h.getActiveMipmapLevel(),T=h.getClearColor(new ke),E=h.getClearAlpha(),A=h.autoClear,M=h.getViewport(new te),I=h.getScissor(new te),R=h.getScissorTest();try{h.autoClear=!1;const B=JSON.stringify([n,s,o.type,o.accumulationType,u]);if(this.targetKey!==B){this.releaseTargets();const C={type:o.type,format:u,minFilter:Ae,magFilter:Ae,depthBuffer:!0,samples:0};this.referenceTarget=new je(n,s,{...C,depthTexture:new Zt(n,s,Nt)}),this.sampleTarget=new je(n,s,{...C,depthTexture:new Zt(n,s,Nt)});const re={type:o.accumulationType,format:u,minFilter:Ae,magFilter:Ae,depthBuffer:!1};this.readTarget=new je(n,s,re),this.writeTarget=new je(n,s,re),this.targetKey=B,this.allocatedBytes=p}const Y=JSON.stringify([i.viewKey,i.visibilityOnly?0:i.styleEpoch,a,B]),V=this.stateKey!==Y,N=new Set(g.map(({id:C})=>C)),de=[...this.pages.values()].filter(({page:C})=>!N.has(C.id)).map(({page:C})=>C),X=[...V?g:g.filter(C=>{var Ee;const re=(Ee=this.pages.get(C.id))==null?void 0:Ee.page;return(re==null?void 0:re.revision)!==C.revision||(re==null?void 0:re.ready)===!1&&C.ready}),...de].flatMap(C=>[C.screenBounds,...this.pages.has(C.id)?[this.pages.get(C.id).page.screenBounds]:[]]),H=V?g:g.filter(C=>X.some(re=>this.overlaps(C.screenBounds,re)));this.blendMaterial.uniforms.uInverseViewProjection.value.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse).invert(),V&&(this.pages.clear(),this.cursor=0);for(const C of de)this.pages.delete(C.id);for(const C of H)this.publishedStateKeys.delete(C.id);H.length>0&&(this.publicationRetryMs=250),this.cursor%=Math.max(1,g.length);for(const C of g){const re=this.pages.get(C.id);re?re.page=C:this.pages.set(C.id,{page:C,samples:0})}if(this.totalSamples=a,H.length>0||de.length>0){this.clearTarget(this.referenceTarget),r.renderSample(e,0,a),this.blend(H,!0,V,H.map(()=>1));for(const C of H)this.pages.get(C.id).samples=1}else{const C=[...this.pages.values()],re=performance.now(),Ee=i.maxPagesPerFrame??4,Ce=Number.isFinite(Ee)?Math.min(Pt,Math.max(1,Math.floor(Ee))):4,Rt=i.maxFrameCpuMilliseconds??4,le=Number.isFinite(Rt)?Math.max(0,Rt):4;let Me=0;do{const Re=[],Ie=this.cursor;for(let z=0;z<C.length;z+=1){const Ve=(Ie+z)%C.length,Le=C[Ve];if(!(Le.samples>=a||Le.page.ready===!1)){if(Re.length===0&&this.clearTarget(this.sampleTarget),!r.renderPageSample(e,Le.page.id,Le.samples,a))return this.fallback(Ze.pages);if(Re.push(Le),Me+=1,this.cursor=(Ve+1)%C.length,Me>=Ce||performance.now()-re>=le)break}}if(Re.length===0)break;this.blend(Re.map(({page:z})=>z),!1,!1,Re.map(z=>1/(z.samples+1)));for(const z of Re)z.samples+=1}while(Me<Ce&&performance.now()-re<le)}this.stateKey=Y,h.setRenderTarget(v,f,y),h.setViewport(M),h.setScissor(I),h.setScissorTest(R),this.quad.material=this.compositeMaterial;const q=[...this.pages.values()].every(C=>C.samples>=a);this.compositeMaterial.uniforms.tColor.value=q?this.readTarget.texture:this.referenceTarget.texture,this.compositeMaterial.uniforms.tDepth.value=this.referenceTarget.depthTexture,this.compositeMaterial.uniforms.uOutputDither.value=v===null,i.visibilityOnly||h.render(this.fullscreenScene,this.fullscreenCamera);let ce=!1;for(const{page:C,samples:re}of this.pages.values()){if(C.ready===!1||re<a)continue;const Ee=JSON.stringify([Y,C.revision]);if(this.publishedStateKeys.get(C.id)!==Ee)try{this.presentation.publish(this.readTarget,this.referenceTarget,e,C,a)?this.publishedStateKeys.set(C.id,Ee):ce=!0}catch(Ce){ce=!0,console.error("[shadow-simulation] retaining previous corridor capture after copy failure",Ce)}}for(const C of this.publishedStateKeys.keys())N.has(C)||this.publishedStateKeys.delete(C);const ae=[...this.pages.values()].reduce((C,{page:re,samples:Ee})=>{const Ce=re.ready!==!1&&this.publishedStateKeys.get(re.id)===JSON.stringify([Y,re.revision]);return C+(Ce?a:Math.min(Ee,a-1))},0),_e=ce?this.publicationRetryMs:void 0;return this.publicationRetryMs=ce?Math.min(4e3,this.publicationRetryMs*2):250,{progress:ae/(this.pages.size*a),settled:ae===this.pages.size*a,..._e===void 0?{}:{retryAfterMs:_e},needsRepaint:[...this.pages.values()].some(C=>C.samples<a&&C.page.ready!==!1)}}catch(B){return this.broken=!0,console.error("[shadow-simulation] corridor accumulation failed; using direct rendering",B),this.fallback(Ze.renderer)}finally{h.autoClear=A,h.setClearColor(T,E),h.setRenderTarget(v,f,y),h.setViewport(M),h.setScissor(I),h.setScissorTest(R)}}overlaps(e,r){return e.x<=r.x+r.z&&e.x+e.z>=r.x&&e.y<=r.y+r.w&&e.y+e.w>=r.y}clearTarget(e){this.renderer.setRenderTarget(e),this.renderer.setClearColor(0,0),this.renderer.clear(!0,!0,!1)}blend(e,r,i,n){const s=this.blendMaterial.uniforms;s.tPrevious.value=this.readTarget.texture,s.tReference.value=this.referenceTarget.texture,s.tReferenceDepth.value=this.referenceTarget.depthTexture,s.tSample.value=this.sampleTarget.texture,s.tSampleDepth.value=this.sampleTarget.depthTexture,s.uBoundsCount.value=e.length,e.forEach(({receiverBounds:o},c)=>s.uBounds.value[c].set(o.min.x,o.min.z,o.max.x,o.max.z)),s.uRefresh.value=r,s.uResetAll.value=i,s.uWeights.value.set(n),this.quad.material=this.blendMaterial,this.renderer.setRenderTarget(this.writeTarget),this.renderer.render(this.fullscreenScene,this.fullscreenCamera);const a=this.readTarget;this.readTarget=this.writeTarget,this.writeTarget=a}releaseTargets(){var e;for(const r of[this.referenceTarget,this.sampleTarget,this.readTarget,this.writeTarget])(e=r==null?void 0:r.depthTexture)==null||e.dispose(),r==null||r.dispose();this.referenceTarget=null,this.sampleTarget=null,this.readTarget=null,this.writeTarget=null,this.stateKey="",this.targetKey="",this.allocatedBytes=0,this.pages.clear()}releaseScratch(e=!1){e?(this.stateKey="",this.pages.clear()):this.releaseTargets(),this.publishedStateKeys.clear(),this.cursor=0}fallback(e){return this.lastFallbackReason=e,this.releaseTargets(),null}dispose(){this.disposed||(this.disposed=!0,this.releaseTargets(),this.ownsPresentation&&this.presentation.dispose(),this.quad.geometry.dispose(),this.blendMaterial.dispose(),this.compositeMaterial.dispose())}}const $a=2e4;let Lf=0;var uo;class Ff{enabled=hl((uo=globalThis.location)==null?void 0:uo.hostname);reportId=++Lf;nextCorridorId=0;labels=new Map;pending=new Map;timer;context;observe(e,r){var s;if(!this.enabled)return;const i=performance.now();for(const{id:a}of e)this.labels.has(a)||this.labels.set(a,`C${this.reportId}.${++this.nextCorridorId}`);this.context={total:e.length,ready:e.filter(a=>a.ready).length,completed:e.filter(a=>a.published).length,samples:e.reduce((a,o)=>a+o.samples,0),activeId:r.activeId?this.labels.get(r.activeId):null,memoryBytes:r.memoryBytes,fallbackReason:r.fallbackReason,publicationRetries:(s=r.publicationRetries)==null?void 0:s.map(([a,o])=>({id:this.labels.get(a),attempts:o.attempts,retryInMs:Math.max(0,Math.round(o.retryAt-i))}))};const n=new Set(e.map(({id:a})=>a));for(const a of this.pending.keys())n.has(a)||this.pending.delete(a);for(const a of this.labels.keys())n.has(a)||this.labels.delete(a);for(const a of e){if(a.published){this.pending.delete(a.id);continue}const o=this.pending.get(a.id),c=!o||a.samples>o.progress.samples;this.pending.set(a.id,{progress:a,advancedAt:c?i:o.advancedAt,reported:c?!1:o.reported})}this.schedule()}pause(){clearTimeout(this.timer),this.timer=void 0,this.pending.clear()}schedule(){if(this.timer!==void 0)return;let e=1/0;for(const r of this.pending.values())r.reported||(e=Math.min(e,r.advancedAt+$a));Number.isFinite(e)&&(this.timer=setTimeout(()=>{var n;this.timer=void 0;const r=performance.now(),i=[];for(const s of this.pending.values())s.reported||r-s.advancedAt<$a||(s.reported=!0,i.push({...s.progress,id:this.labels.get(s.progress.id),file:(n=s.progress.id.match(/\/([^/"\\]+\.b3dm)/))==null?void 0:n[1],stalledMilliseconds:Math.round(r-s.advancedAt),waitingForReadiness:!s.progress.ready}));i.length>0&&console.warn("[shadow-simulation] corridors without progress for 20 seconds",JSON.stringify({corridors:i,scheduler:this.context})),this.schedule()},Math.max(0,e-performance.now())))}}class Bf{constructor(e){this.renderer=e,this.presentation=new Mc(e),this.scratch=new Of(e,this.presentation)}presentation;scratch;captures=[];activeId=null;activeCapture=null;cursor=0;samples=1;disposed=!1;watchdog=new Ff;publicationRetries=new Map;restoreOpportunities=new Map;allocationKey="";allocations=new Map;plans=new Map;get memoryBytes(){return this.scratch.memoryBytes}get fallbackReason(){return this.presentation.supportsCapture?this.scratch.fallbackReason:"receivers"}get capturePages(){return this.captures.map(({page:e})=>e)}get pageProgress(){const e=this.scratch.pageProgress;return this.captures.map(({page:r,plan:i,ready:n})=>{const s=n&&this.presentation.has(r,this.samples),a=e.find(({id:o})=>o===r.id);return{id:r.id,samples:s?this.samples:(a==null?void 0:a.samples)??0,totalSamples:this.samples,ready:n,published:s,limited:i.limited,width:i.width,height:i.height}})}updateCaptures(e,r,i,n=!0){var h;const s=Ef(e),a=es((h=i.options)==null?void 0:h.format),o=2*(a.bytesPerPixel/4+4)+2*a.accumulationBytesPerPixel/4+8,c=Math.max(1,Math.floor(Math.min(i.maxRenderTargetPixels??i.width*i.height,mi/2/o))),l=r.accumulationPages.map(v=>{const f=this.plans.get(v.id),y=(f==null?void 0:f.orientation)??s,T={groundTexelTargetMeters:v.groundTexelTargetMeters??1,maximumDimension:this.renderer.capabilities.maxTextureSize,maximumPixels:c},E=JSON.stringify([v.receiverBounds.min,v.receiverBounds.max,y.toArray(),T]),A=(f==null?void 0:f.inputs)===E?f.plan:Rf(v.receiverBounds,y,T);return this.plans.set(v.id,{inputs:E,plan:A,orientation:y}),A.camera.layers.mask=e.layers.mask,{page:v,plan:A}}),u=l.find(({page:v})=>{var f;return this.activeId===v.id&&((f=this.activeCapture)==null?void 0:f.page.id)===v.id&&this.activeCapture.page.contentKey===JSON.stringify([v.contentKey??v.revision,this.activeCapture.plan.key])}),d=u?this.activeCapture.plan:null,p=JSON.stringify(l.map(({page:v,plan:f})=>[v.id,f.key,v.screenBounds.z*v.screenBounds.w]));if(p!==this.allocationKey){const v=new Map(Mf(l.filter(({page:f})=>f.id!==(u==null?void 0:u.page.id)).map(({page:f,plan:y})=>({id:f.id,plan:y,screenArea:f.screenBounds.z*f.screenBounds.w})),Kn-(d?d.width*d.height*8:0)));u&&d&&v.set(u.page.id,d),this.allocationKey=p,this.allocations=v}this.captures=l.map(({page:v,plan:f})=>{var A;const y=this.allocations.get(v.id)??f,T=JSON.stringify([v.contentKey??v.revision,y.key]),E=(!n||v.ready!==!1)&&(((A=i.isPageReady)==null?void 0:A.call(i,v.id))??!0);return{page:{...v,ready:E,captureKey:JSON.stringify([y.camera.quaternion.toArray(),y.width,y.height]),captureSize:{width:y.width,height:y.height},contentKey:T,revision:T,screenBounds:new te(0,0,1,1)},plan:y,ready:E}});const g=new Set(this.captures.map(({page:v})=>v.id));for(const v of this.plans.keys())g.has(v)||this.plans.delete(v);for(const[v,f]of this.publicationRetries){const y=this.captures.find(({page:T})=>T.id===v);(!y||y.page.contentKey!==f.contentKey)&&this.publicationRetries.delete(v)}this.presentation.beginFrame(this.capturePages);for(const{page:v,plan:f}of this.captures)this.presentation.prepareRestore(v,i.samples,new J().multiplyMatrices(f.camera.projectionMatrix,f.camera.matrixWorldInverse));i.active&&this.reportProgress()}reportProgress(){this.watchdog.enabled&&this.watchdog.observe(this.pageProgress,{activeId:this.activeId,memoryBytes:this.memoryBytes,fallbackReason:this.fallbackReason,publicationRetries:[...this.publicationRetries.entries()]})}yieldForRestore(e,r){if(!this.presentation.isRestorePending(e,r))return!1;const i=JSON.stringify([e.id,r]),n=e.contentKey??e.revision;if(this.restoreOpportunities.get(i)===n)return!1;if(this.restoreOpportunities.set(i,n),this.restoreOpportunities.size>1024){const s=this.restoreOpportunities.keys().next().value;s!==void 0&&this.restoreOpportunities.delete(s)}return!0}render(e,r,i){var p;if(this.disposed)return null;if(!i.active)return this.watchdog.pause(),null;if(this.samples=i.samples,this.updateCaptures(e,r,i),!this.presentation.supportsCapture)return this.scratch.releaseScratch(),this.activeId=null,null;const n=performance.now();let s,a=this.captures.find(({page:g})=>g.id===this.activeId);const o=a&&!a.ready&&this.captures.some(({page:g,ready:h})=>h&&g.id!==(a==null?void 0:a.page.id)&&!this.presentation.has(g,i.samples));if((!a||o||this.presentation.has(a.page,i.samples))&&(this.scratch.releaseScratch(!0),this.activeId=null,a=void 0),a){const g=this.publicationRetries.get(a.page.id);g&&g.retryAt>n&&(s=Math.ceil(g.retryAt-n))}if(!a&&this.captures.length>0)for(let g=0;g<this.captures.length;g+=1){const h=(this.cursor+g)%this.captures.length,v=this.captures[h];if(!v.ready||this.presentation.has(v.page,i.samples)||this.yieldForRestore(v.page,i.samples))continue;const f=this.publicationRetries.get(v.page.id);if(f&&f.retryAt>n){s=Math.min(s??1/0,Math.ceil(f.retryAt-n));continue}a=v,s=void 0,this.activeId=v.page.id,this.activeCapture=v,this.cursor=(h+1)%this.captures.length;break}let c=null;if(a!=null&&a.ready&&s===void 0){this.activeCapture=a;const{page:g,plan:h}=a,v=(f,y,T)=>r.renderPageSample(f,g.id,y,T,g.screenBounds);if(c=this.scratch.render(h.camera,{accumulationPages:[g],supportsOpaqueAccumulation:r.supportsOpaqueAccumulation,renderSample:v,renderPageSample:(f,y,T,E)=>v(f,T,E)},{...i,width:h.width,height:h.height,viewKey:h.key,visibilityOnly:!0,isPageReady:void 0,maxPagesPerFrame:i.maxPagesPerFrame??4}),c!=null&&c.settled)this.publicationRetries.delete(g.id),this.scratch.releaseScratch(!0),this.activeId=null;else if((c==null?void 0:c.retryAfterMs)!==void 0){const f=(((p=this.publicationRetries.get(g.id))==null?void 0:p.attempts)??0)+1;s=Math.max(250,c.retryAfterMs);const y=f>=3;y&&(s=Math.max(1e3,s)),this.publicationRetries.set(g.id,{contentKey:g.contentKey,attempts:y?0:f,retryAt:n+s}),y&&(this.scratch.releaseScratch(),this.activeId=null,this.captures.some(({page:T,ready:E})=>{var A;return E&&T.id!==g.id&&!this.presentation.has(T,i.samples)&&(((A=this.publicationRetries.get(T.id))==null?void 0:A.retryAt)??0)<=n})&&(s=void 0))}if(!c)return null}!this.activeId&&!this.captures.some(({page:g,ready:h})=>h&&!this.presentation.has(g,i.samples))&&this.scratch.releaseScratch();const l=this.pageProgress;this.reportProgress();const u=l.reduce((g,h)=>g+(h.published?i.samples:Math.min(h.samples,i.samples-1)),0),d=l.length*i.samples;return{progress:d>0?u/d:1,settled:d===u,needsRepaint:l.some(g=>g.ready&&!g.published)&&s===void 0,...s===void 0?{}:{retryAfterMs:s}}}renderHard(e,r,i){var I;if(this.disposed||!i.active)return{published:0,needsRepaint:!1};if(this.updateCaptures(e,r,{...i,samples:1},i.isPageReady===void 0),!r.supportsOpaqueAccumulation||!this.presentation.supportsCapture||!this.renderer.extensions.has("EXT_color_buffer_float"))return{published:0,needsRepaint:!1};const n=new Map(this.captures.map(({page:R})=>[R.id,this.presentation.getCapturedSize(R.id)])),s=this.captures.reduce((R,{page:F,plan:P})=>{const B=n.get(F.id);return R+Math.max(P.width*P.height,B?B.width*B.height:0)*8},0)>Kn,a=({page:R,plan:F})=>{const P=n.get(R.id);return P?(P.width*P.height-F.width*F.height)*8:0},o=this.captures.filter(({page:R,plan:F,ready:P})=>{if(!P)return!1;const B=n.get(R.id);return this.presentation.hasAtLeast(R,1)&&(!s||!B||B.width*B.height<=F.width*F.height)?!1:!(B&&B.samples>1&&!s&&(B.width!==F.width||B.height!==F.height)&&this.presentation.canReplay(R))});s&&o.sort((R,F)=>a(F)-a(R));const c=o.find(({page:R})=>!this.yieldForRestore(R,1));if(!c)return{published:0,needsRepaint:o.length>0};const{page:l,plan:u}=c;if(s&&this.presentation.hasAtLeast(l,1)&&a(c)>0){const R=n.get(l.id),F=Math.max(u.width,Math.ceil(R.width/2))*Math.max(u.height,Math.ceil(R.height/2))*8;if(this.memoryBytes+F>mi)return{published:0,needsRepaint:!1,retryAfterMs:1e3};try{const P=this.presentation.downsample(l,u.width,u.height);return{published:P?1:0,needsRepaint:P,...P?{}:{retryAfterMs:1e3}}}catch{return{published:0,needsRepaint:!1,retryAfterMs:1e3}}}if(this.memoryBytes+u.width*u.height*16>mi)return{published:0,needsRepaint:!1,retryAfterMs:1e3};const d=this.renderer,p=d.getRenderTarget(),g=d.getActiveCubeFace(),h=d.getActiveMipmapLevel(),v=d.getViewport(new te),f=d.getScissor(new te),y=d.getScissorTest(),T=d.autoClear,E=d.getClearColor(new ke),A=d.getClearAlpha(),M=new je(u.width,u.height,{type:yt,format:Yt,minFilter:Ae,magFilter:Ae,samples:0,depthTexture:new Zt(u.width,u.height,Nt)});try{d.initRenderTarget(M),d.autoClear=!1,d.setRenderTarget(M),d.setViewport(new te(0,0,u.width,u.height)),d.setScissorTest(!1),d.setClearColor(0,0),d.clear(!0,!0,!1);const F=r.renderPageSample(u.camera,l.id,0,1,l.screenBounds)&&this.presentation.publish(M,M,u.camera,l,1);return{published:F?1:0,needsRepaint:F&&o.length>1,...F?{}:{retryAfterMs:1e3}}}catch(R){return console.warn("[shadow-simulation] retaining completed corridor after hard-stage capture failure",R),{published:0,needsRepaint:!1,retryAfterMs:1e3}}finally{d.setRenderTarget(p,g,h),d.setViewport(v),d.setScissor(f),d.setScissorTest(y),d.setClearColor(E,A),d.autoClear=T,(I=M.depthTexture)==null||I.dispose(),M.dispose()}}pausePending(){this.watchdog.pause()}cancelPending(){this.watchdog.pause(),this.activeId!==null&&this.scratch.releaseScratch(),this.activeId=null,this.publicationRetries.clear(),this.restoreOpportunities.clear()}dispose(){this.disposed||(this.disposed=!0,this.watchdog.pause(),this.scratch.dispose(),this.presentation.dispose(),this.captures=[],this.plans.clear(),this.allocations=new Map,this.publicationRetries.clear(),this.restoreOpportunities.clear())}}const Uf=750,Hf=5e3,Qa=new Set,zf=t=>{const e=ml({assetUrl:t,production:!0});let r=null,i=!1,n=!1,s=0,a=null;const o=()=>{if(r&&(r.onmessage=null,r.onerror=null,r.onmessageerror=null,r.terminate(),r=null),a){const d=a;a=null,clearTimeout(d.timer),d.finish(null)}},c=()=>{n=!0,o()},l=(d,p=[])=>{if(!e||i||n||a||typeof Worker>"u")return Promise.resolve(null);try{return r||(r=new Worker(new URL("https://cismet.github.io/carma-pr-deployments/812/geoportal/assets/shadow-corridor-cache.worker-BGnqjqO2.js",import.meta.url),{type:"module"}),r.onerror=c,r.onmessageerror=c,r.onmessage=g=>{var v;if(!a||((v=g.data)==null?void 0:v.id)!==a.id)return;const h=a;a=null,clearTimeout(h.timer),h.finish(g.data)}),new Promise(g=>{const h=setTimeout(c,d.operation===ci.read?Uf:Hf);a={id:d.id,timer:h,finish:g};try{r.postMessage(d,p)}catch{c()}})}catch{return c(),Promise.resolve(null)}},u={cancelPending:o,get enabled(){return!!(e&&!i&&!n&&typeof Worker<"u")},get busy(){return a!==null},async read(d){const p=Ge(d);if(!p)return null;const g=await l({id:++s,producerAssetUrl:e??"",identity:d,operation:ci.read}),h=g==null?void 0:g.record;return!i&&(h==null?void 0:h.schema)===bi.schema&&Ge(h.identity)===p&&Ya(h)?h:null},async write(d,p,g){if(!Ge(d)||!Ya(p))return!1;const h=[p.visibility,p.depth];if(h.some(f=>!(f.buffer instanceof ArrayBuffer)||f.byteOffset!==0||f.byteLength!==f.buffer.byteLength))return!1;const v=await l({id:++s,producerAssetUrl:e??"",identity:d,operation:ci.write,capture:p,costs:g},[...new Set(h.map(f=>f.buffer))]);return!i&&(v==null?void 0:v.written)===!0},async writePacked(d,p,g){if(!Ge(d)||!Af(p)||!(p.rgba.buffer instanceof ArrayBuffer)||p.rgba.byteOffset!==0||p.rgba.byteLength!==p.rgba.buffer.byteLength)return!1;const h=await l({id:++s,producerAssetUrl:e??"",identity:d,operation:ci.writePacked,capture:p,costs:g},[p.rgba.buffer]);return!i&&(h==null?void 0:h.written)===!0},dispose(){i=!0,o(),Qa.delete(u)}};return Qa.add(u),u};class kf{constructor(e,r,i){this.scene=e,this.renderer=r,this.host=i,this.frameCache=new Gl(r),this.pages=new _f(e,r,i.maximumMapSize**2*8*2,i.maximumMapSize,i.frame),this.accumulation=new Bf(r),i.worldBasis&&i.corridorRevision&&i.dateTimeKey&&this.accumulation.presentation.setPersistence({cache:this.persistentCache,identity:(n,s)=>{var u,d,p;const a=this.pages.getPageGeometry(n.id),o=(u=i.dateTimeKey)==null?void 0:u.call(i);if(!a||!o||!n.captureKey)return null;const c=s===1?(d=i.receiverStageError)==null?void 0:d.call(i,n.receiverBounds):void 0,l=(p=i.corridorRevision)==null?void 0:p.call(i,a.casterBounds,c,n.receiverBounds);return l?{source:"shared-scene-corridor-v2",dateTime:o,corridor:n.id,resolution:JSON.stringify([a.width,a.height,n.captureKey]),geometryFingerprint:l,samples:s}:null},worldBasis:i.worldBasis,runIdleRender:i.runIdleRender,requestRepaint:i.requestRepaint})}pages;viewKey="";idleStats=null;accumulation;persistentCache=zf(import.meta.url);accumulationSettled=!1;viewport=new Mt(1,1);lastFrame=null;frameCache;presentedPageIds=new Set;casterRevisionsDirty=!0;casterRevisionCursor=0;hardRetryTimer=null;update(e,r,i,n,s=r.renderCamera){this.viewport.copy(r.viewport);const a=JSON.stringify([e.map(({id:o,bounds:c,receiverObjectId:l})=>[o,c.min,c.max,l]),s.projectionMatrix.elements,s.matrixWorldInverse.elements,r.viewport,i,n]);a!==this.viewKey&&(this.pages.setView(e,s,r.viewport,n,i,this.host.receiverBiasLimit),this.viewKey=a,this.casterRevisionsDirty=!0,this.casterRevisionCursor=0)}updatePresentation(e,r=e.renderCamera){this.viewport.copy(e.viewport),this.pages.updatePresentation(r)}invalidateContent(e){(e==null?void 0:e.length)!==0&&(this.casterRevisionsDirty=!0,this.casterRevisionCursor=0,this.frameCache.invalidate(),e?e.length>0&&this.pages.invalidateCasters(e):this.pages.clearCache())}async prewarm({cells:e,frame:r,lighting:i,targetPixels:n,samples:s,prepare:a,signal:o,yieldToInput:c=Tf,planningCamera:l}){if(o.aborted)return null;this.idleStats=null,this.pages.setPrewarmView(e,l??r.renderCamera,r.viewport,n,i,s);try{return this.idleStats=await xf({pages:this.pages.prewarmPages,signal:o,prepare:a,yieldToInput:c,render:(u,d,p)=>{if(d!=null&&d.parent)throw new Error("Idle caster lease must own an unmounted group");const g=this.host.light.visible;this.host.light.visible=!1,d&&this.scene.add(d);try{let h=null;const v=()=>{h=this.pages.prewarmNext(r.renderCamera,u,{signal:p})};return this.host.runIdleRender?this.host.runIdleRender(v):v(),h??{pageId:u,rendered:0,cachedSamples:0,totalSamples:s,complete:!1,budgetLimited:!1,aborted:!0}}finally{d&&this.scene.remove(d),this.host.light.visible=g}}}),this.idleStats}finally{this.pages.clearPrewarmView()}}renderProgressive(e,r){if(this.lastFrame=r,!r.active)return this.pausePending(),null;if(this.pages.accumulationPages.length===0)return this.accumulationSettled=!1,null;const i=this.renderWithHost(e,()=>{const a=this.captureHard(e);if(this.casterRevisionsDirty&&this.host.corridorRevision)return null;const o=this.accumulation.presentation.capture(this.scene,()=>this.accumulation.render(e,this.pages,{...r,visibilityOnly:!0,maxPagesPerFrame:Math.min(r.samples,64),maxFrameCpuMilliseconds:r.maxFrameCpuMilliseconds??2,isPageReady:c=>this.isPageReady(c,!1)}));return o&&this.renderContent(e,null,r.samples),o&&{...o,settled:o.settled&&!a.needsRepaint,needsRepaint:o.needsRepaint||a.needsRepaint}});if(!i)return this.accumulationSettled=!1,null;const n="retryAfterMs"in i?i.retryAfterMs:void 0;n!==void 0&&this.hardRetryTimer===null&&(this.hardRetryTimer=globalThis.setTimeout(()=>{var a,o;this.hardRetryTimer=null,(o=(a=this.host).requestRepaint)==null||o.call(a)},Math.max(1,n)));const s=i.settled&&!this.accumulationSettled;return this.accumulationSettled=i.settled,{...i,settled:s}}render(e,r,i,n=!0){return this.pages.accumulationPages.length===0?!1:(this.renderWithHost(e,()=>{n&&this.captureHard(e),this.renderContent(e,r,i,!n)}),!0)}cancelPending(e=!1){this.accumulation.cancelPending(),e&&this.accumulation.presentation.beginSolarTransition(),this.pausePending()}pausePending(){this.accumulation.pausePending(),this.hardRetryTimer!==null&&(globalThis.clearTimeout(this.hardRetryTimer),this.hardRetryTimer=null),this.accumulationSettled=!1}isPageReady(e,r){var n,s;const i=this.pages.getPageGeometry(e);return i?!this.host.isCorridorReady||this.host.isCorridorReady(i.casterBounds,r?(s=(n=this.host).receiverStageError)==null?void 0:s.call(n,i.receiverBounds):void 0,i.receiverBounds):!1}captureHard(e){var i,n,s,a,o,c;if(this.casterRevisionsDirty&&this.host.corridorRevision){const l=this.pages.accumulationPages,u=performance.now();let d=0;for(;this.casterRevisionCursor<l.length;){if(d>=4||d>0&&performance.now()-u>=4)return(n=(i=this.host).requestRepaint)==null||n.call(i),{published:0,needsRepaint:!0};const p=l[this.casterRevisionCursor++];d+=1;const g=this.pages.getPageGeometry(p.id);if(!g)continue;const h=this.host.corridorRevision(g.casterBounds,(a=(s=this.host).receiverStageError)==null?void 0:a.call(s,g.receiverBounds),g.receiverBounds);this.pages.setCasterRevision(p.id,h)&&this.frameCache.invalidate()}this.casterRevisionsDirty=!1,this.casterRevisionCursor=0}const r=this.accumulation.presentation.capture(this.scene,()=>{var l;return this.accumulation.renderHard(e,this.pages,{...this.lastFrame,width:this.viewport.x,height:this.viewport.y,viewKey:this.viewKey,styleEpoch:((l=this.lastFrame)==null?void 0:l.styleEpoch)??0,samples:1,active:!0,isPageReady:u=>this.isPageReady(u,!0)})});return r.needsRepaint&&((c=(o=this.host).requestRepaint)==null||c.call(o)),r.retryAfterMs!==void 0&&this.hardRetryTimer===null&&(this.hardRetryTimer=globalThis.setTimeout(()=>{var l,u;this.hardRetryTimer=null,(u=(l=this.host).requestRepaint)==null||u.call(l)},r.retryAfterMs)),r}renderContent(e,r,i,n=!1){var u,d,p,g,h;const s=this.accumulation.capturePages;this.accumulation.presentation.beginFrame(s);const a=s.map(v=>{const f=this.accumulation.presentation.canPresent(v);return{page:v,replay:f,ready:f||(!this.host.corridorRevision||!this.casterRevisionsDirty)&&this.isPageReady(v.id,!0)}});let o=!1;const c=()=>{this.presentedPageIds.clear();const v=this.host.light.visible,f=r===null&&a.some(({replay:y})=>y);this.host.light.visible=!0;try{let y=new Set;r===null?y=this.accumulation.presentation.renderNative(this.scene,a.filter(T=>T.replay).map(T=>T.page),()=>this.renderer.render(this.scene,e)):this.renderer.render(this.scene,e);for(const{page:T,replay:E,ready:A}of a){if(!A)continue;if(y.has(T.id)){this.presentedPageIds.add(T.id);continue}if(r===null&&!E){this.presentedPageIds.add(T.id);continue}if(n&&!E){this.presentedPageIds.add(T.id);continue}const M=n||f&&E;this.host.light.visible=M,this.accumulation.presentation.render(this.scene,T,i,()=>M?this.pages.renderPageColor(e,T.id):this.pages.renderPageSample(e,T.id,r??0,r===null?1:i))?this.presentedPageIds.add(T.id):o=!0}}finally{this.host.light.visible=v}};if((u=this.lastFrame)!=null&&u.active&&r===null&&this.accumulation.presentation.supportsCapture){const v=JSON.stringify([this.viewKey,e.projectionMatrix.elements,e.matrixWorldInverse.elements,e.layers.mask,this.lastFrame.styleEpoch,((p=(d=this.host).visualEpoch)==null?void 0:p.call(d))??0,this.accumulation.presentation.revision,a.map(({page:f,replay:y,ready:T})=>[f.id,f.contentKey??f.revision,y,T])]);this.frameCache.render(v,this.lastFrame.width,this.lastFrame.height,c),o&&this.frameCache.invalidate()}else this.frameCache.invalidate(),c();const l=a.filter(({page:v,replay:f})=>this.presentedPageIds.has(v.id)&&(this.accumulation.presentation.hasAtLeast(v,1)||!f&&(r===null||i===1))).map(({page:v})=>v);l.length>0&&((h=(g=this.host).onPresentedPages)==null||h.call(g,l,s))}renderWithHost(e,r){const{renderer:i,host:n}=this,s=n.light.visible,a=n.sky.visible,o=n.overlay.visible,c=i.autoClear;n.light.visible=!1,i.autoClear=!1;try{a&&this.renderHostObject(n.sky,e),n.sky.visible=!1,n.overlay.visible=!1;const l=r();return l!==null&&o&&(n.overlay.visible=!0,this.renderHostObject(n.overlay,e)),l}finally{i.autoClear=c,n.light.visible=s,n.sky.visible=a,n.overlay.visible=o}}renderHostObject(e,r){const i=this.scene.children.filter(n=>n!==e&&n.visible);for(const n of i)n.visible=!1;try{this.renderer.render(this.scene,r)}finally{for(const n of i)n.visible=!0}}get pageLevels(){return this.pages.pageLevels}get stats(){return{...this.pages.stats,framePresentation:this.frameCache.stats,corridorAccumulation:{retained:this.accumulation.presentation.stats,pageSamples:this.accumulation.pageProgress,memoryBytes:this.accumulation.memoryBytes,fallbackReason:this.accumulation.fallbackReason},...this.idleStats?{idlePrewarm:this.idleStats}:{},...this.host.auditCorridors?{corridorAudit:this.host.auditCorridors(this.pages.accumulationPages.flatMap(e=>{const r=this.pages.getPageGeometry(e.id);return r?[{id:e.id,casterBounds:r.casterBounds,receiverBounds:r.receiverBounds}]:[]}))}:{}}}dispose(){this.hardRetryTimer!==null&&globalThis.clearTimeout(this.hardRetryTimer),this.hardRetryTimer=null,this.accumulation.dispose(),this.frameCache.dispose(),this.persistentCache.dispose(),this.pages.dispose()}}function Vf(){const t=new WeakSet;return e=>{let r=!1;for(const i of e)if(!(!i.providesTerrain||!i.hasRenderableContent)&&(r=!0,t.has(i)||i.hasRenderableContent()))return t.add(i),!1;return r}}const Mn=(t,e,r)=>JSON.stringify([t.min.toArray(),t.max.toArray(),e,r==null?void 0:r.min.toArray(),r==null?void 0:r.max.toArray()]),Wf=(t,e)=>{const r=new Map(t.map(s=>[s.id,s])),i=[],n=s=>i.push(new Ne(new x(...s.minimum),new x(...s.maximum)));for(const s of e){const a=r.get(s.id);a&&s.minimum.every((c,l)=>c===a.minimum[l])&&s.maximum.every((c,l)=>c===a.maximum[l])||(a&&n(a),n(s)),r.delete(s.id)}for(const s of r.values())n(s);return i},Gf=(t,e,r)=>{const i=new Set(r.map(({id:n})=>n));return t.filter(n=>{if(n.loadReason===$t.SHADOW)return!1;const s=e.filter(({bounds:a})=>n.minimum[0]<a.max.x&&n.maximum[0]>a.min.x&&n.minimum[2]<a.max.z&&n.maximum[2]>a.min.z);return s.length>0&&s.every(({id:a})=>i.has(a))}).map(({id:n})=>n)},jf=(t,e,r)=>{if(![t,e,r].every(Number.isFinite)||r<=0)throw new RangeError("Invalid shared-scene Mercator basis");return new J().set(r,0,0,t,0,0,r,e,0,r,0,0,0,0,0,1)},Za=(t,e,r)=>fl(e.reduce((i,n)=>{if(n.loadReason===$t.SHADOW)return i;const[s,,a]=n.minimum,[o,,c]=n.maximum;return s<t.max.x&&o>t.min.x&&a<t.max.z&&c>t.min.z&&Number.isFinite(n.errorPixels)?Math.max(i,n.errorPixels):i},r),r),Yf=({stageErrorPixels:t,targetErrorPixels:e,groundTexelTargetMeters:r,finalBiasMeters:i,maximumCoarseBiasMeters:n,metersPerPixel:s=0})=>{const a=Math.max(i,Math.min(n,Math.max(0,s)*.1)),o=Math.max(1,Math.min(n/i,t/Math.max(e,.25)));return Math.max(a,Math.min(n,i*o,Math.max(i,r*2)))},qf=({id:t,casterBounds:e,sunElevationDegrees:r,regions:i,volumes:n})=>{const s=new Set(i.flatMap(u=>u.selectedTileIds)),a=new Map(n.map(u=>[u.id,u])),o=[],c=[];let l=0;for(const u of s){const d=a.get(u);if(!d){o.push(u);continue}d.loadReason===$t.SHADOW&&(l+=1),e.intersectsBox(new Ne(new x(...d.minimum),new x(...d.maximum)))||c.push(u)}return{id:t,ready:i.length>0&&i.every(u=>u.ready),selectedTiles:s.size,offscreenTiles:l,reviewCount:r>=10&&s.size>10,nearHorizon:r<10,exactPrismTested:i.length>0&&i.every(u=>u.receiverPrismTested),visitedNodes:i.reduce((u,d)=>u+d.visitedNodes,0),broadPhaseNodes:i.reduce((u,d)=>u+d.broadPhaseNodes,0),rejectedPrismNodes:i.reduce((u,d)=>u+d.rejectedPrismNodes,0),missingPublishedVolumes:o,outsideEnvelope:c,selectedTileIds:[...s].sort()}},Kf=1024,Xf=2048,$f=4096,Qf=1e6,Zf=2e6,Ja=(t,e=gl())=>{const r=Math.max(256,Math.floor(t)),i=pl(e);return i===Ks.PHONE?{maxShadowMapSize:Math.min(r,Kf),maxAccumulationPixels:Qf}:i===Ks.TABLET?{maxShadowMapSize:Math.min(r,Xf),maxAccumulationPixels:Zf}:{maxShadowMapSize:Math.min(r,$f),maxAccumulationPixels:Number.POSITIVE_INFINITY}},Jf=(t,e)=>{if(t===Number.POSITIVE_INFINITY)return t;const r=es(e.format),i=e.msaaSamples??bo.msaaSamples,n=2*(r.bytesPerPixel+4)*(1+Math.max(0,i))+3*r.accumulationBytesPerPixel;return Math.min(t,Math.floor(256*1024*1024/n))},eo=(t,e=ts,r=2560*1440,i=1)=>Math.floor(Math.max(256**2,Math.min(t**2,Dt[e].depthSize**2*(Number.isFinite(r)&&r>0?r/(2560*1440):1)*i**2))),to=new WeakMap,ep=t=>{const e=to.get(t);if(e)return e;const r=t.getContext(),i=r.getInternalformatParameter(r.RENDERBUFFER,r.DEPTH_COMPONENT24,r.SAMPLES),n=a=>[0,...Array.from(r.getInternalformatParameter(r.RENDERBUFFER,a,r.SAMPLES)).filter(o=>i.includes(o))],s={maxTextureSize:t.capabilities.maxTextureSize,maxRenderbufferSize:r.getParameter(r.MAX_RENDERBUFFER_SIZE),hdrSamples:n(r.RGBA16F),sdrSamples:n(r.RGBA8)};return to.set(t,s),s},tp=(t,e)=>{if(t.shadowBufferFormat===jt.HDR_32)return 0;const r=t.shadowMsaaSamples===vl?1/0:t.shadowMsaaSamples;return Math.max(0,...e.filter(i=>Number.isFinite(i)&&i<=r))},wt=new WeakMap,Rc=t=>{let e=wt.get(t);return e||(e={snapshot:null,listeners:new Set,demandListeners:new Set},wt.set(t,e)),e},ng=t=>{var e;return((e=wt.get(t))==null?void 0:e.snapshot)??null},sg=(t,e)=>{const r=Rc(t),i=r.listeners.size===0;if(r.listeners.add(e),i)for(const n of r.demandListeners)n(!0);return()=>{if(!(!r.listeners.delete(e)||r.listeners.size>0)){r.snapshot=null;for(const n of r.demandListeners)n(!1);r.demandListeners.size===0&&wt.delete(t)}}},rp=(t,e)=>{const r=Rc(t);return r.demandListeners.add(e),r.listeners.size>0&&e(!0),()=>{r.demandListeners.delete(e),r.listeners.size===0&&r.demandListeners.size===0&&wt.delete(t)}},Ec=t=>{var e;return(((e=wt.get(t))==null?void 0:e.listeners.size)??0)>0},ip=(t,e)=>{const r=wt.get(t);if(r!=null&&r.listeners.size){r.snapshot=e;for(const i of r.listeners)i()}},Rn=t=>{const e=wt.get(t);if(e){e.snapshot=null;for(const r of e.listeners)r();e.listeners.size===0&&e.demandListeners.size===0&&wt.delete(t)}},ro=.01,np=500,En=1500,An=(t=ts)=>({lastFrameMs:null,sampleDurationMs:0,sampleCount:0,recoveryDurationMs:0,updateIntervalMs:Dt[t].targetFps?1e3/Dt[t].targetFps:0,targetFrameMs:Dt[t].targetFps?1e3/Dt[t].targetFps:0,depthScale:1,trial:null,adaptationBlocked:!1}),Cn=(t,e,r,{enabled:i=!0,allowCadenceReduction:n=!0}={})=>{var v,f;if(t.targetFrameMs===0)return t;if(!i)return t.lastFrameMs===null&&t.updateIntervalMs===t.targetFrameMs&&t.depthScale===1&&!t.adaptationBlocked?t:{...t,lastFrameMs:null,sampleDurationMs:0,sampleCount:0,recoveryDurationMs:0,updateIntervalMs:t.targetFrameMs,depthScale:1,trial:null,adaptationBlocked:!1};if(!r||!Number.isFinite(e))return t.lastFrameMs===null?t:{...t,lastFrameMs:null,sampleDurationMs:0,sampleCount:0,recoveryDurationMs:0,depthScale:1,trial:null,adaptationBlocked:!1};const s=t.lastFrameMs===null?0:e-t.lastFrameMs;if(s<=0)return{...t,lastFrameMs:e};const a=t.sampleDurationMs+s,o=t.sampleCount+1;if(a<np)return{...t,lastFrameMs:e,sampleDurationMs:a,sampleCount:o};const c=a/o,l=t.targetFrameMs;if(t.trial&&c>=t.trial.baselineFrameMs*.95||t.adaptationBlocked)return{...t,lastFrameMs:e,sampleDurationMs:0,sampleCount:0,trial:null,adaptationBlocked:!0,updateIntervalMs:((v=t.trial)==null?void 0:v.updateIntervalMs)??t.updateIntervalMs,depthScale:((f=t.trial)==null?void 0:f.depthScale)??t.depthScale};const p=c<l/1.2?t.recoveryDurationMs+a:0,g=n?c>l+ro?Math.min(l*4,t.updateIntervalMs+l):p>=En?Math.max(l,t.updateIntervalMs-l):t.updateIntervalMs:l,h=c>l+ro&&(!n||t.updateIntervalMs>=l*4)?Math.max(.5,t.depthScale-.25):p>=En?Math.min(1,t.depthScale+.25):t.depthScale;return{...t,lastFrameMs:e,sampleDurationMs:0,sampleCount:0,recoveryDurationMs:p>=En?0:p,updateIntervalMs:g,depthScale:h,trial:g>t.updateIntervalMs||h<t.depthScale?{baselineFrameMs:c,updateIntervalMs:t.updateIntervalMs,depthScale:t.depthScale}:null,adaptationBlocked:!1}},io=4e3,Ac=(t,e,r)=>{t.updateMatrixWorld(!0),r==null||r.updateMatrixWorld(!0);const i=r?new Lr().setFromProjectionMatrix(new J().multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),r.coordinateSystem,r.reversedDepth):null;let n=e,s=e;const a=new Ne;return t.traverseVisible(o=>{var l,u;const c=o;c.userData[fi.OVERLAY]||!c.isMesh&&!c.isInstancedMesh||!((u=(l=c.geometry)==null?void 0:l.getAttribute("position"))!=null&&u.count)||(c.geometry.boundingBox||c.geometry.computeBoundingBox(),c.geometry.boundingBox&&(a.copy(c.geometry.boundingBox).applyMatrix4(c.matrixWorld),!(i&&!i.intersectsBox(a))&&(n=Math.min(n,a.min.y),s=Math.max(s,a.max.y))))}),[n,s]},sp=(t,e,r,i)=>{var o;const n=e.filter(c=>c.providesTerrain).flatMap(c=>{var u;const l=(u=c.getViewElevationRange)==null?void 0:u.call(c,r);return l?[l]:[]});if(n.length>0)return[Math.min(...n.map(c=>c[0])),Math.max(...n.map(c=>c[1]))];let[s,a]=Ac(t,i,r);for(const c of e){const l=(o=c.getViewElevationRange)==null?void 0:o.call(c,r);l&&(s=Math.min(s,l[0]),a=Math.max(a,l[1]))}return[s,a]},ap=[[-1,-1],[-1,1],[1,-1],[1,1]],op=[[0,1],[1,3],[3,2],[2,0],[4,5],[5,7],[7,6],[6,4],[0,4],[1,5],[2,6],[3,7]],cp=(t,e,r,i)=>{t.updateMatrixWorld(!0);const n=Math.min(e,r),s=Math.max(e,r),a=[-1,1].flatMap(c=>ap.map(([l,u])=>new x(l,u,c).unproject(t))),o=a.filter(c=>c.y>=n&&c.y<=s).map(c=>c.clone());for(const[c,l]of op){const u=a[c],d=a[l],p=d.y-u.y;if(!(Math.abs(p)<=Number.EPSILON))for(const g of[n,s]){const h=(g-u.y)/p;h<0||h>1||o.push(u.clone().lerp(d,h))}}for(const c of o){const l=c.clone().sub(i),u=Math.hypot(l.x,l.z);if(u<=io)continue;const d=io/u;l.x*=d,l.z*=d,c.copy(i).add(l)}return o},lp=`
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
`,no="float getShadow( sampler2DShadow shadowMap,",In="#elif defined( SHADOWMAP_TYPE_VSM )",up=()=>{const t=Nn.shadowmap_pars_fragment;if(!t.includes(no)||!t.includes(In))throw new Error("Three PCF shader changed; validate receiver-plane shadow integration");return`uniform bool carmaReceiverPlaneShadow;
${t.replace(no,"float carmaOriginalGetShadow( sampler2DShadow shadowMap,").replace(In,`${lp}
${In}`)}`},so=new WeakMap,dp=(t,e)=>{const r=so.get(t);if(r)return e!==void 0&&r.value!==e&&(r.value=e,t.needsUpdate=!0),r;const i={value:e??!1},n=t.onBeforeCompile,s=t.customProgramCacheKey(),a=up();return t.onBeforeCompile=function(o,c){n.call(this,o,c),o.uniforms.carmaReceiverPlaneShadow=i,o.fragmentShader=o.fragmentShader.replace("#include <shadowmap_pars_fragment>",a)},t.customProgramCacheKey=()=>`${s}|carma-receiver-plane-pcf-v3|${i.value?"mesh":"stock"}`,t.needsUpdate=!0,so.set(t,i),i},Cc=(t,e=!1)=>{if(t.userData[fi.OVERLAY])return;t.castShadow=t.userData.disableShadowCasting!==!0;const r=Array.isArray(t.material)?t.material:[t.material];if(t.receiveShadow=r.some(i=>i.visible&&i.colorWrite),!t.userData.isShadowTerrainSurface)for(const i of r)i.shadowSide??(i.shadowSide=xo),dp(i,e)},Mr=(t,e=!1)=>{t.traverseVisible(r=>{const i=r;!i.isMesh&&!i.isInstancedMesh||Cc(i,e)})},hp=t=>t.visible&&t.opacity>0,mp=(t,e)=>{let r=t;for(;r&&r!==e;){if(!r.visible)return!1;r=r.parent}return(Array.isArray(t.material)?t.material:[t.material]).some(hp)},ao=t=>{t.traverse(e=>{const r=e;if(!r.isMesh&&!r.isInstancedMesh)return;const i=Array.isArray(r.material)?r.material:[r.material];for(const n of i)n.dispose()})},fp=(t,e)=>{const r=e.uniformColor!==null&&Ye(e.uniformColorMix??1,0,1)>=1;t.traverse(i=>{const n=i;if(!n.userData.isBuilding)return;const s=Array.isArray(n.material)?n.material:[n.material];for(const a of s){e.fullOpacity&&(a.opacity=1,a.transparent=!1,a.depthWrite=!0);const o=a;r&&e.uniformColor&&o.color&&(o.color.set(e.uniformColor),o.vertexColors=!1),a.needsUpdate=!0}})},pp=(t,e,r)=>{var d;const i=(d=e._originMerc)==null?void 0:d.toLngLat();if(!i)return null;const n=new rs;n.name=`shadow-simulation-copy-${e.id}`;const s=new Map;let a=r,o=!1;const c=()=>{for(const[p,g]of s)p.visible=g;s.clear()},l=()=>{if(o)return;c(),ao(n),n.clear(),e.scene.updateMatrixWorld(!0);const p=[];e.scene.traverse(g=>{var v,f;const h=g;!h.isMesh&&!h.isInstancedMesh||(f=(v=h.geometry)==null?void 0:v.getAttribute("position"))!=null&&f.count&&mp(h,e.scene)&&p.push(h)});for(const g of p){const h=g.clone(!1);h.name=`${g.name||"mesh"}-shadow-simulation-copy`,h.visible=!0,h.matrixAutoUpdate=!1,h.matrix.copy(g.matrixWorld),h.material=Array.isArray(g.material)?g.material.map(v=>v.clone()):g.material.clone(),Cc(h),s.set(g,g.visible),g.visible=!1,n.add(h)}n.visible=n.children.length>0,fp(n,a)},u={id:`shadow-simulation-generic-${e.id}`,originLngLat:[i.lng,i.lat],root:n,update:()=>{},dispose:()=>{o||(o=!0,c(),ao(n),n.clear())}};return l(),n.visible?(t.addRuntime(u),{runtime:u,sync:l,updateBuildingAppearance(p){a=p,l()}}):(u.dispose(),null)},Ic=2500,Dc=.5,gp="shadow-simulation-sky-light",vp=t=>{const e=new Ne().setFromObject(t.scene);e.isEmpty()?t.center.set(0,0,0):e.getCenter(t.center)},yp=(t,e,r,i)=>{const n=new xc(e),a=n.lights[0].target,o=new rs;o.visible=!1,o.userData[fi.OVERLAY]=!0;const c=new _o(void 0,0);c.name=gp;const l=of(i);l.mesh.userData[fi.OVERLAY]=!0;const u=new Map;t.traverse(p=>{const g=p;g.isAmbientLight&&u.set(g,g.intensity)});const d={scene:t,frame:e,controller:n,skyLight:c,atmosphericSky:l,ambientLightIntensities:u,lightTarget:a,sunVector:null,sunVectorRoot:o,center:new x,shadowCameraOffsetMeters:Math.max(Ic,r*1.5),shadowAreaMeters:r,sunVectorLengthMeters:r*Dc,sunVectorVisible:!1,shadowQuality:ts,shadowIntensity:1,directionToSun:new x(0,1,0),sunColor:new ke(16773848),sunIntensity:kr,receiverWorldPoints:[],minimumElevationMeters:0,maximumElevationMeters:0,dirty:!0};return Mr(t),vp(d),t.add(c),t.add(l.mesh),d},Sp=(t,e)=>{t.scene.traverse(i=>{const n=i;n.isAmbientLight&&!t.ambientLightIntensities.has(n)&&t.ambientLightIntensities.set(n,n.intensity)});const r=e.skyIrradianceCoefficients;if((r==null?void 0:r.length)===t.skyLight.sh.coefficients.length){r.forEach((i,n)=>{t.skyLight.sh.coefficients[n].copy(i)}),t.skyLight.intensity=kr;for(const i of t.ambientLightIntensities.keys())i.intensity=0;return}t.skyLight.sh.zero(),t.skyLight.intensity=0;for(const[i,n]of t.ambientLightIntensities)i.intensity=n},oo=(t,e,r=16773848,i,n=!0)=>{var a;const s=e.clone().normalize();t.directionToSun.copy(s),t.sunColor.set(r),t.lightTarget.position.copy(t.center);for(const o of t.controller.lights)o.target.position.copy(t.center),o.position.copy(s).multiplyScalar(t.shadowCameraOffsetMeters).add(t.center),o.color.copy(t.sunColor);(a=t.sunVector)==null||a.update(t.center,s,t.sunVectorLengthMeters),t.sunVectorRoot.visible=t.sunVectorVisible&&!!t.sunVector,t.sunIntensity=i??kr;for(const o of t.controller.lights)o.intensity=t.sunIntensity;t.lightTarget.updateMatrixWorld(!0);for(const o of t.controller.lights)o.updateMatrixWorld(!0);n&&(t.controller.invalidate(),t.dirty=!0)},wp=t=>{var e;for(const[r,i]of t.ambientLightIntensities)r.intensity=i;t.scene.remove(t.skyLight),t.scene.remove(t.atmosphericSky.mesh),t.scene.remove(t.sunVectorRoot),(e=t.sunVector)==null||e.dispose(),t.atmosphericSky.dispose(),t.controller.dispose()},_p={[ze.STANDARD]:0,[ze.HIGH]:1,[ze.MAX]:1,[ze.ULTRA]:1,[ze.EXTREME]:1},xp=128,Tp={[ze.STANDARD]:0,[ze.HIGH]:0,[ze.MAX]:1,[ze.ULTRA]:2,[ze.EXTREME]:3},bp=(t,e,r,i)=>{var u,d;const n=t==null?void 0:t.tileManager;if(!t||!n||!Number.isFinite(n.deltaZoom)||!Number.isFinite(n.tileSize)||!n.tileManager)return()=>{};const s={deltaZoom:n.deltaZoom,terrainTileSize:n.tileSize,sourceTileSize:n.tileManager.tileSize,meshSize:t.meshSize,calculateTileZoom:(u=n.tileManager._source)==null?void 0:u.calculateTileZoom},o=1-_p[r],c=e*2**o;n.deltaZoom=o,n.tileSize=c,n.tileManager.tileSize=c,t.meshSize=xp;const l=Tp[r];if(l>0&&n.tileManager._source){s.calculateTileZoom||i==null||i();const p=n.tileManager._source.calculateTileZoom;p&&(n.tileManager._source.calculateTileZoom=(...g)=>p(...g)+l)}return t._meshCache={},(d=n.freeRtt)==null||d.call(n),()=>{var p;n.deltaZoom=s.deltaZoom,n.tileSize=s.terrainTileSize,n.tileManager.tileSize=s.sourceTileSize,t.meshSize=s.meshSize,n.tileManager._source&&(n.tileManager._source.calculateTileZoom=s.calculateTileZoom),t._meshCache={},(p=n.freeRtt)==null||p.call(n)}},_r="carma-shadow-map-style-base",Ar={OPAQUE:"opaque",LABELS:"labels"},Mp=(t,e=Mo,r=()=>!0,i=()=>Ar.OPAQUE,n=ze.MAX)=>{const s=e.id,a=t;if(typeof a.getTerrain!="function"||typeof a.getSource!="function"||typeof a.setTerrain!="function")return Object.assign(()=>{},{refresh:()=>{}});const o=a.getTerrain(),c=new Map,l=new Map;let u=!1,d=!1,p=!1,g=null,h=!1,v,f=null,y=()=>{},T=null;const E=()=>{g&&(h?delete g.getMeshFrameDelta:g.getMeshFrameDelta=v,g=null,v=void 0,h=!1)},A=()=>{const O=a.terrain;!O||O===g||(E(),typeof O.getMeshFrameDelta=="function"&&(h=!Object.prototype.hasOwnProperty.call(O,"getMeshFrameDelta"),v=O.getMeshFrameDelta,O.getMeshFrameDelta=()=>0,g=O))},M=()=>{var X;const O=a.terrain;!O||O===f||(y(),f=O,y=bp(O,e.tileSize,n,()=>{var H;(H=t.setSourceTileLodParams)==null||H.call(t,9.314,3,e.id)}),(X=t.triggerRepaint)==null||X.call(t))},I=O=>`${O.type}:${String(O.source)}:${String(O["source-layer"])}`,R=()=>{var H;const X=t.getStyle().layers??[];for(const q of X){if(!Sl(q))continue;const ce=I(q);let ae=l.get(q.id);const _e=t.getLayoutProperty(q.id,"visibility");!ae||ae.signature!==ce?(ae={signature:ce,value:_e},l.set(q.id,ae)):_e!=="none"&&(ae.value=_e),_e!=="none"&&t.setLayoutProperty(q.id,"visibility","none")}if(r()){t.getLayer(_r)||(t.addLayer({id:_r,type:"background",paint:{"background-color":tn.baseColor,"background-opacity":tn.opacity}},(H=X[0])==null?void 0:H.id),p=!0);for(const q of X){if(q.id===_r||q.type==="custom")continue;const ce=tn.opaqueDrapeProperties.get(q.type);if(!ce)continue;const ae=I(q);let _e=c.get(q.id);const C=t.getPaintProperty(q.id,ce);!_e||_e.signature!==ae?(_e={signature:ae,property:ce,value:C},c.set(q.id,_e)):C!==1&&(_e.value=C),C!==1&&t.setPaintProperty(q.id,ce,1)}}},F=O=>{var X;for(const[H,q]of O)try{const ce=(X=t.getStyle().layers)==null?void 0:X.find(({id:ae})=>ae===H);ce&&I(ce)===q.signature&&t.getLayoutProperty(H,"visibility")==="none"&&t.setLayoutProperty(H,"visibility",q.value===void 0?null:q.value)}catch{}O.clear()},P=()=>{var O;for(const[X,H]of c)try{const q=(O=t.getStyle().layers)==null?void 0:O.find(({id:ce})=>ce===X);q&&I(q)===H.signature&&t.getPaintProperty(X,H.property)===1&&t.setPaintProperty(X,H.property,H.value===void 0?null:H.value)}catch{}if(c.clear(),p){p=!1;try{t.getLayer(_r)&&t.removeLayer(_r)}catch{}}},B=()=>{if(!(u||d)){d=!0;try{if(Zr(t)){E(),y(),y=()=>{},f=null,P(),F(l),a.getTerrain()&&a.setTerrain(null),T=null;return}if(!a.getSource(s)&&t.isStyleLoaded()&&t.addSource(s,{type:"raster-dem",tiles:[e.url],tileSize:e.tileSize,minzoom:e.minzoom,maxzoom:e.maxzoom,encoding:e.encoding,bounds:[...e.bounds]}),i()===Ar.LABELS?(P(),F(l)):R(),a.getSource(s)){const O=a.getTerrain();((O==null?void 0:O.source)!==s||(O.exaggeration??1)!==1)&&a.setTerrain({source:s,exaggeration:1}),M(),A()}T=null}catch(O){const X=O instanceof Error?O.message:String(O);X!==T&&(T=X,console.error("[shadow-simulation] MapLibre terrain setup failed",O))}finally{d=!1}}},Y=()=>{d||B()};t.on(Se.STYLE_DATA,B),t.on(Se.TERRAIN,Y);let V=Zr(t);const N=yl(t,()=>{const O=Zr(t);O!==V&&(V=O,B())});return B(),Object.assign(()=>{if(!u){u=!0,N(),t.off(Se.STYLE_DATA,B),t.off(Se.TERRAIN,Y),E(),y(),f=null,P(),F(l);try{!Zr(t)&&o&&a.getSource(o.source)!==void 0?a.setTerrain(o):a.getTerrain()&&a.setTerrain(null)}catch{}}},{refresh:()=>{!u&&!d&&B()}})},co=1e3,Rp=(t,e,r,i)=>{let n=Number.NEGATIVE_INFINITY,s=null,a=null;const o=u=>{s=null,n=performance.now();const d=`#${u.color.getHexString()}`;if(r()||e(d),!t.isStyleLoaded())return;const p=[1.5,u.azimuthDegrees,90-u.elevationDegrees],g=Ye(u.relativeIntensity,0,1),h=t.getLight(),v=h.position;h.anchor==="map"&&Array.isArray(v)&&v.length===p.length&&v.every((f,y)=>f===p[y])&&h.color===d&&h.intensity===g||t.setLight({anchor:"map",position:p,color:d,intensity:g})},c=()=>{a!==null&&(globalThis.clearTimeout(a),a=null);const u=s;u&&o(u)};return{apply:u=>{if(s=u,!r()&&!i()){c();return}const d=performance.now()-n;if(d>=co){c();return}a===null&&(a=globalThis.setTimeout(()=>{a=null;const p=s;p&&o(p)},co-d))},flush(u){u&&(s=u),c()},dispose(){a!==null&&(globalThis.clearTimeout(a),a=null)}}},Dn=new J,Ep=(t,e)=>{const r=()=>{var o,c;return((c=(o=e())==null?void 0:o.localFrame)==null?void 0:c.currentToReference)??(t==null?void 0:t.currentToReference)??Dn},i=new Xs,n=new Mi;return{frameFromScene:r,getFrameCamera:o=>{const c=o.renderCamera,{localFrame:l}=o;if(!l||l.currentToReference.equals(Dn))return c;const u=c instanceof Xs?i.copy(c,!1):n.copy(c,!1);return u.matrixAutoUpdate=!1,u.matrixWorldAutoUpdate=!1,u.matrixWorld.multiplyMatrices(l.currentToReference,c.matrixWorld),u.matrixWorld.decompose(u.position,u.quaternion,u.scale),u.matrix.copy(u.matrixWorld),u.matrixWorldInverse.multiplyMatrices(c.matrixWorldInverse,l.referenceToCurrent),u},toFrameVolumes:(o,c)=>{if(o!=null&&o.mountsOnLocalFrame||c.length===0)return c;const l=r();if(l.equals(Dn))return c;const u=new Ne;return c.map(d=>(u.min.set(...d.minimum),u.max.set(...d.maximum),u.applyMatrix4(l),{...d,minimum:[u.min.x,u.min.y,u.min.z],maximum:[u.max.x,u.max.y,u.max.z]}))}}},lo=100,Ap=(t,e)=>{let r=!1,i=Number.NEGATIVE_INFINITY,n=null,s=null,a=null,o="";const c=()=>{if(r||!s||!Ec(t))return;const l=performance.now()-i;if(l<lo){n??(n=globalThis.setTimeout(()=>{n=null,c()},lo-l));return}n!==null&&(globalThis.clearTimeout(n),n=null);const u=e(),d=JSON.stringify([u.bufferLayout,u.sunDiscSamples,u.tiledStats]);a===s&&o===d||(i=performance.now(),a=s,o=d,ip(t,{...s,...u}))};return{publish:c,setSnapshot(l){s=l},markStale(){i=Number.NEGATIVE_INFINITY},reset(){n!==null&&(globalThis.clearTimeout(n),n=null),s=null,a=null,o=""},dispose(){r=!0,n!==null&&(globalThis.clearTimeout(n),n=null),s=null}}},Cp=900,li=.01,Ip=.25,Dp=1e3,Pp=10,Np="shadow-simulation-raster-dem",Op=200,ui=100,Lp=1e3,Fp=(t,e={})=>{var Bs,Us,Hs,zs,ks,Vs,Ws;const{shadowAreaMeters:r,terrain:i,mapLibreTerrain:n,terrainQuality:s=ze.MAX}=e,a=wl();let o=i;const c=r??Cp,l=t.getLight();let u=!0;const d=()=>{const m=xe(t).filter(S=>S.providesTerrain===!0);return m.length>0&&m.every(S=>S.mapStyleProjectionBlend===bl.OVERLAY)?Ar.LABELS:Ar.OPAQUE},p=Mp(t,n??Mo,()=>u,d,a?ze.STANDARD:s),g=()=>{N.setMeshLabelStyle(d()===Ar.LABELS)};let h=null,v={fullOpacity:!0,uniformColor:null,uniformColorMix:0,textureSaturation:1,textureColorCorrection:!0},f=1,y=null;const T=()=>{var m,S;return y??((S=(m=xe(t).find(_=>_.providesTerrain===!0))==null?void 0:m.getErrorTarget)==null?void 0:S.call(m))??Cl};let E=a?sn:void 0;const A=new WeakMap;let M=null,I={useTransmittanceLut:!0,useIrradianceLut:!0},R=!1,F=!1,P=!1,B=null,Y=new ke(((Bs=o==null?void 0:o.material)==null?void 0:Bs.color)??Ro);const V=()=>{var m,S,_,b;if(u){B==null||B(),B=null,(S=(m=N.layer).setMapStyleProjectionVisible)==null||S.call(m,!0);return}(b=(_=N.layer).setMapStyleProjectionVisible)==null||b.call(_,!1),B??(B=Ml(t))},N=_l(t),de=(m,S)=>{var _,b;return{observer:{longitude:m[0],latitude:m[1],altitudeMeters:0},scenePosition:((b=(_=N.layer).projectLngLatToScene)==null?void 0:b.call(_,[m[0],m[1]],ui))??new x(0,ui,0),sceneFromLocal:S}};let O=null;const X=((Hs=(Us=N.layer).getLocalFrame)==null?void 0:Hs.call(Us))??null;let H=(X==null?void 0:X.revision)??0,q=X?de(X.lngLat,X.sceneFromLocalRotation):de([t.getCenter().lng,t.getCenter().lat]);const{frameFromScene:ce,getFrameCamera:ae,toFrameVolumes:_e}=Ep(X,()=>O),C=new tf;let re=()=>{},Ee=m=>re(m),Ce=null,Rt=0;const le=m=>{if(!o)return null;const S=t.getCenter(),{errorTargetPixels:_,motionErrorTargetPixels:b,shadowLevelOffset:Q,minimumLevel:U,maximumLevel:L,maxSelectionTiles:W,requestConcurrency:ee,maxCacheBytes:ue,maxCachedMeshes:ye,maxCachedMeshBytes:pe,meshSegments:ve,maximumMeshSegments:G,noDataHeightMeters:we,heightRangeMeters:kt,material:Vt,...$r}=Rl(o,a);return El(`${Np}-${++Rt}`,$r,m??[S.lng,S.lat],{errorTargetPixels:_??an,motionErrorTargetPixels:b,shadowLevelOffset:Q,minimumLevel:U,maximumLevel:L,maxSelectionTiles:W,requestConcurrency:ee,maxCacheBytes:ue,maxCachedMeshes:ye,maxCachedMeshBytes:pe,meshSegments:ve??$r.tileSize,maximumMeshSegments:G,noDataHeightMeters:we,heightRangeMeters:kt,material:Vt,receivesMapStyleTexture:!0,onContentChanged:pt=>Ee(pt),onError:pt=>{const fr=pt instanceof Error?pt.message:String(pt);fr!==Ce&&(Ce=fr,console.error("[shadow-simulation] Raster DEM terrain runtime failed",pt))}})},Me=()=>xe(t).some(m=>m.providesTerrain===!0),Re=()=>xe(t).every(m=>{var S,_;return!m.providesTerrain||(((S=m.hasRenderableContent)==null?void 0:S.call(m))??((_=m.isMainViewReady)==null?void 0:_.call(m))??!0)});let Ie=xe(t).filter(m=>m.providesTerrain),z=Me()?null:le(),Ve=z===null;z&&N.layer.addRuntime(z);const Le=((ks=(zs=N.layer).getLocalFrameGroup)==null?void 0:ks.call(zs))??N.layer.getScene(),w=yp(N.layer.getScene(),Le,c,Y),Pc=new x;let Vr=0,Wr=0;const Be=bf({getRequest:()=>{var _;if(R||!o||!z||!Ve||pr(t)||P||F||Xe!==0||!tt||!Ht||!O)return null;const m=(_=z.getIdlePrefetchAvailability)==null?void 0:_.call(z);if(!(m!=null&&m.ready))return null;const S=z;return{key:JSON.stringify([Rt,Vr,Wr,O.renderCamera.projectionMatrix.elements,O.renderCamera.matrixWorldInverse.elements,O.viewport.x,O.viewport.y]),run:async b=>{var U;if(await S.prefetchIdleTerrain(b),b.aborted||!Pe()||!$||!O||!N.layer.runIdleRender||dt.size>0||ht().some(L=>L!==S&&L!==zt)||_t.some(({id:L})=>!/^\d+:[-\d]+:[-\d]+$/.test(L)))return;const Q=((U=S.getIdleShadowRegions)==null?void 0:U.call(S))??[];Q.length===0||!S.prepareIdleShadowRegion||(await $.prewarm({cells:Su(_t),frame:O,planningCamera:ae(O),lighting:{directionToSun:w.directionToSun,color:w.sunColor,intensity:w.sunIntensity,shadowIntensity:w.shadowIntensity},targetPixels:Dt[w.shadowQuality].shadowTexelErrorPixels,samples:mr(),signal:b,prepare:async(L,W)=>{const ee=wu(L.receiverBounds,Q);return ee===null?{covered:!1,group:null,isCurrent:()=>!1,dispose:()=>{}}:S.prepareIdleShadowRegion({receiverBounds:L.receiverBounds,casterBounds:L.casterBounds,terrainLevel:ee},W)}}),b.aborted||Qe.publish())}}}});let ut=null,ki="";const Gr=(m,S,_)=>{const b=`${m}:${S}`;b!==ki&&(ki=b,console.error(`[SHADOW] Atmospheric update rejected; retaining last valid frame (${m}: ${S})`,{phase:m,reason:S,..._}))},Nc=()=>{ki=""},Ue=()=>{Be.cancel(),Vr+=1,Wr+=1},sr=Rp(t,m=>N.setLocationLabelColor(m),()=>F,()=>P),Ft=m=>{const S={longitude:q.observer.longitude,latitude:q.observer.latitude,altitudeMeters:ui},_=Xm(m.instant,S,q);if(_)return Gr("sunlight input",_,{observer:S,skyReference:q}),M;C.ensure(()=>{if(R||!h)return;Ue();const U=Ft(h);U&&sr.apply(U),t.triggerRepaint()},I),C.ensureSky(()=>{R||!h||(Ue(),Ft(h),t.triggerRepaint())});let b;try{b=C.evaluate(m.instant,S,I,q)}catch(U){return Gr("sunlight generation","generator threw",{observer:S,error:U}),M}const Q=$m(b);return Q?(Gr("sunlight output",Q,{observer:S,sample:b}),M):(Nc(),M=b,w.atmosphericSky.update(b.skyFrame,C.skyTextures),Sp(w,b),oo(w,b.directionToSun.clone().transformDirection(ce()),b.radiance,kr),b)};re=m=>{R||(Be.cancel(),$==null||$.invalidateContent(m),w.controller.invalidate(),w.dirty=!0)};const dt=new Map,ht=()=>{const m=xe(t);return z&&!m.includes(z)?[z,...m]:m};let Bt=null,mt=null,We=null,ft=null,_s=[];const xs=()=>ht().flatMap(m=>{var S;return _e(m,((S=m.getActiveTileVolumes)==null?void 0:S.call(m))??[])}),ar=()=>Bt??xs(),Ts=(m,S=li*4)=>{if(!Me())return;const _=ar(),b=T(),Q=m?Za(m,_,b):Math.max(b,..._.filter(({loadReason:L})=>L!==$t.SHADOW).map(({errorPixels:L})=>L).filter(L=>Number.isFinite(L)));let U=1/0;for(const L of _){if(L.loadReason===$t.SHADOW||m&&(L.minimum[0]>=m.max.x||L.maximum[0]<=m.min.x||L.minimum[2]>=m.max.z||L.maximum[2]<=m.min.z))continue;const W=L.geometricError,ee=L.errorPixels;W!==void 0&&ee!==void 0&&Number.isFinite(W)&&Number.isFinite(ee)&&W>0&&ee>0&&(U=Math.min(U,W/ee))}return Yf({stageErrorPixels:Q,targetErrorPixels:b,groundTexelTargetMeters:S,finalBiasMeters:li,maximumCoarseBiasMeters:Ip,metersPerPixel:Number.isFinite(U)?U:0})},bs=m=>{const S=Bt,_=mt,b=We,Q=ft;if(Bt=S??xs(),mt=_??new Map,We=b??new Map,ft=Q??new Map,!S){const U=Wf(_s,Bt);U.length>0&&($==null||$.invalidateContent(U),lr.length=0),_s=Bt}try{return m()}finally{Bt=S,mt=_,We=b,ft=Q}};let Et=null,or=null,Vi=Number.NEGATIVE_INFINITY,Wi=!1;const Ms=new WeakMap,Oc=m=>{var b,Q,U;if(!m)return"none";const S=t.getCenter(),_=t.getCanvas();return[Math.round(S.lng*1e7),Math.round(S.lat*1e7),Math.round((((b=t.getZoom)==null?void 0:b.call(t))??0)*1e4),Math.round((((Q=t.getBearing)==null?void 0:Q.call(t))??0)*1e3),Math.round((((U=t.getPitch)==null?void 0:U.call(t))??0)*1e3),`${_.clientWidth||_.width}x${_.clientHeight||_.height}`,(h==null?void 0:h.azimuthDegrees)??"no-sun",(h==null?void 0:h.elevationDegrees)??"no-sun",w.shadowQuality].join(";")},cr=m=>{var W,ee,ue,ye,pe,ve;if(F){const G=performance.now();if(G-Vi<Lp){Wi=!0;return}Vi=G}or=m,Wi=!1;const S=Oc(m),_=O==null?void 0:O.renderCamera,b=m&&_?new Lr().setFromProjectionMatrix(new J().multiplyMatrices(_.projectionMatrix,_.matrixWorldInverse),_.coordinateSystem,_.reversedDepth):null,Q=new Ne,U=b?_e(z,((W=z==null?void 0:z.getActiveTileVolumes)==null?void 0:W.call(z))??[]).filter(G=>(Q.min.fromArray(G.minimum),Q.max.fromArray(G.maximum),b.intersectsBox(Q))):void 0,L=[...xe(t),...z?[z]:[]];for(const G of new Set(L)){if((ee=G.setShadowStagePresentationGate)==null||ee.call(G,!1),!G.providesTerrain){G===z?(ue=G.setErrorTarget)==null||ue.call(G,(o==null?void 0:o.errorTargetPixels)??an):(ye=G.setErrorTargetOverride)==null||ye.call(G,y),(pe=G.setShadowView)==null||pe.call(G,m?{...m,terrainReceivers:U}:null);continue}Ms.get(G)!==S&&(Ms.set(G,S),(ve=G.setShadowView)==null||ve.call(G,m))}},Gi=m=>{var S;Et=m;for(const _ of new Set([...xe(t),...z?[z]:[]]))(S=_.setLiveShadowView)==null||S.call(_,m);P||cr(m)};let tt=!a;a&&(w.shadowQuality=Gt.FPS_120);let ji={},De=rn(nn(ji,a),w.shadowQuality),rt=null;const jr=()=>({format:De.shadowBufferFormat,msaaSamples:De.shadowBufferLayout===$s.TILED?0:tp(De,(De.shadowBufferFormat===jt.SDR_8?rt==null?void 0:rt.sdrSamples:rt==null?void 0:rt.hdrSamples)??[0,2,4])});let Ut=jr(),Xe=0,Yi=!1,Yr=!1;const lr=[];let $e=!0,qi=[],Rs="",it=An(w.shadowQuality),qr=Number.POSITIVE_INFINITY,Ht=!0,At=Ja(4096);w.controller.setMaxShadowMapSize(At.maxShadowMapSize);let $=null,Ki=null,_t=[];const Pe=()=>De.shadowBufferLayout===$s.TILED,ur=()=>{$==null||$.dispose(),$=null,Ki=null,_t=[]},Qe=Ap(t,()=>({bufferLayout:De.shadowBufferLayout,sunDiscSamples:De.shadowSunDiscSamples,tiledStats:Pe()?($==null?void 0:$.stats)??null:null}));w.controller.setSoftSun(tt);const dr=(m,S)=>Math.round(m/S)*S,Lc=m=>{var _,b,Q,U;const S=t.getCenter();return[dr(S.lng,1e-7),dr(S.lat,1e-7),dr(((_=t.getZoom)==null?void 0:_.call(t))??0,1e-4),dr(((b=t.getBearing)==null?void 0:b.call(t))??0,.001),dr(((Q=t.getPitch)==null?void 0:Q.call(t))??0,.001),`${m.viewport.x}x${m.viewport.y}`,(U=m.cssViewport)==null?void 0:U.toArray().join("x")].join(";")},hr=(m=!0,S=!0,_)=>{var ee,ue,ye,pe;const b=t.getCenter(),Q=(z==null?void 0:z.getElevation(b.lng,b.lat))??0,U=(ue=(ee=N.layer).projectLngLatToScene)==null?void 0:ue.call(ee,[b.lng,b.lat],Q);if(!U){h&&Ft(h),S&&t.triggerRepaint();return}w.center.copy(U).applyMatrix4(ce()),ut??(ut=Ac(w.scene,U.y));const[L,W]=ut;if(_){const ve=cp(ae(_),L,W,w.center);if(ve.length>0){const G=new Ne().setFromPoints(ve).getSize(new x),we=Math.max(...ve.map(kt=>kt.distanceTo(w.center)));w.sunVectorLengthMeters=Math.min(G.x,G.z)*Dc,w.shadowAreaMeters=Math.max(r??0,Pp,we*2),qi=ve}}else $e=!0;if(w.shadowCameraOffsetMeters=Math.max(Ic,w.shadowAreaMeters*1.5),w.receiverWorldPoints=qi,w.minimumElevationMeters=L,w.maximumElevationMeters=W,w.dirty=!0,h&&(m||!M))Ft(h);else{w.lightTarget.position.copy(w.center);for(const ve of w.controller.lights)ve.target.position.copy(w.center),ve.target.updateMatrixWorld(!0);(ye=w.sunVector)==null||ye.root.position.copy(w.center),(pe=w.sunVector)==null||pe.root.updateMatrixWorld(!0)}S&&t.triggerRepaint()},zt={id:"shadow-simulation-controller",originLngLat:[t.getCenter().lng,t.getCenter().lat],root:new rs,updatePriority:Op,update(m){var pt,fr;O=m;const{localFrame:S}=m;S&&S.revision!==H&&(H=S.revision,q=de(S.lngLat,S.sceneFromLocalRotation),M&&(M=Jm(M,q),w.atmosphericSky.update(M.skyFrame,C.skyTextures)));const _=(fr=(pt=N.layer).getRenderer)==null?void 0:fr.call(pt);_&&!rt&&(rt=ep(_),Ut=jr(),At=Ja(Math.min(rt.maxTextureSize,rt.maxRenderbufferSize)),w.controller.setMaxShadowMapSize(At.maxShadowMapSize)),qr=Jf(At.maxAccumulationPixels,Ut),Ht=m.viewport.x*m.viewport.y<=qr,it=Cn(it,performance.now(),P,{enabled:De.shadowAdaptiveQuality,allowCadenceReduction:!Pe()});const b=Math.max(0,m.lodCamera.position.y-m.lookTarget.y),Q=ui+b,U=q.scenePosition.y+b;![...m.lodCamera.matrixWorld.elements,...m.lodCamera.projectionMatrix.elements].every(Number.isFinite)||!Number.isFinite(Q)||!Number.isFinite(U)?Gr("render camera","local Three.js camera matrix or altitude is invalid",{altitudeMeters:Q,cameraHeightAboveTargetMeters:b,matrixWorld:m.lodCamera.matrixWorld.elements,projectionMatrix:m.lodCamera.projectionMatrix.elements}):(w.atmosphericSky.updateViewCamera(m.lodCamera),w.atmosphericSky.updateObserverScenePosition(Pc.set(q.scenePosition.x,U,q.scenePosition.z)));const W=Lc(m);if(($e||W!==Rs)&&(performance.now(),Rs=W,ut=P?ut??[w.minimumElevationMeters,w.maximumElevationMeters]:sp(w.scene,xe(t),m.renderCamera,w.center.y),hr(!1,!1,m),$e=!1),!w.dirty)return;w.sunVectorVisible&&w.sunVector&&w.sunVector.root.cone.position.y!==w.sunVectorLengthMeters&&oo(w,w.directionToSun,w.sunColor,w.sunIntensity),Vr+=1;const ee=ar(),ue=ee.flatMap(({minimum:Wt,maximum:gt})=>Co(ae(m),new Ne(new x(...Wt),new x(...gt))));if(w.receiverWorldPoints=ue.length>0?ue:qi,w.receiverWorldPoints.length===0||!h){Gi(null),Qe.setSnapshot(null),Rn(t);return}if(Pe()){_t=yu(ee.filter(({loadReason:gt})=>gt!==$t.SHADOW).map(({id:gt,minimum:Qr,maximum:Zi,receiverObjectId:Ji})=>({id:gt,receiverObjectId:Ji,bounds:new Ne(new x(...Qr),new x(...Zi))})));const Wt=fu(_t,ae(m));Wt.length>0&&(w.receiverWorldPoints=[...Wt])}const ye=eo(At.maxShadowMapSize,w.shadowQuality,m.viewport.x*m.viewport.y,P?it.depthScale:1),pe=m.cssViewport??m.viewport,ve=eo(At.maxShadowMapSize,w.shadowQuality,pe.x*pe.y,P?it.depthScale:1),G=w.controller.update({maxReceiverBiasMeters:Ts(),receiverWorldPoints:w.receiverWorldPoints,receiverAnchorWorldPosition:w.center,minimumElevationMeters:w.minimumElevationMeters,maximumElevationMeters:w.maximumElevationMeters,directionToSun:w.directionToSun,color:w.sunColor,intensity:w.sunIntensity,shadowIntensity:w.shadowIntensity,quality:w.shadowQuality,mapTexelBudget:ye,casterMapTexelBudget:ve,groundTexelFit:De.shadowGroundTexelFit,stabilizeMapSize:P});if(w.dirty=!1,!G){Gi(null),Qe.setSnapshot(null),Rn(t);return}const we=G.camera,kt=w.controller.lights[0].shadow.camera,Vt=M==null?void 0:M.skyFrame.directionToSunECEF;Gi({camera:kt,directionToSunECEF:Vt?[Vt.x,Vt.y,Vt.z]:void 0,casterAngularRadiusRadians:tt?Pr:0,shadowMapSize:{width:(we.rightMeters-we.leftMeters)/G.casterMetersPerTexel[0],height:(we.topMeters-we.bottomMeters)/G.casterMetersPerTexel[1]}});const $r=Ec(t);if(we&&$r){m.lodCamera.updateMatrixWorld(!0),m.lodCamera.updateProjectionMatrix();const Wt=ht().flatMap(gt=>{var Qr;return(((Qr=gt.getActiveTileVolumes)==null?void 0:Qr.call(gt))??[]).map(({id:Zi,loadReason:Ji,minimum:Vc,maximum:Wc})=>({id:Zi,loadReason:Ji,minimum:Vc,maximum:Wc}))});Qe.setSnapshot({bufferLayout:De.shadowBufferLayout,sunDiscSamples:De.shadowSunDiscSamples,tiledStats:null,cameraRangeMeters:kt.position.distanceTo(w.controller.lights[0].target.position),leftMeters:we.leftMeters,rightMeters:we.rightMeters,bottomMeters:we.bottomMeters,topMeters:we.topMeters,nearMeters:we.nearMeters,farMeters:we.farMeters,projectionMatrixElements:we.projectionMatrixElements,shadowMapWidth:we.shadowMapWidth,shadowMapHeight:we.shadowMapHeight,minimumElevationMeters:w.minimumElevationMeters,maximumElevationMeters:w.maximumElevationMeters,sceneAnchorPositionElements:w.center.toArray(),mainCamera:{viewMatrixElements:[...m.lodCamera.matrixWorldInverse.elements],projectionMatrixElements:[...m.lodCamera.projectionMatrix.elements],nearMeters:m.lodCamera.near,farMeters:m.lodCamera.far,viewportWidth:m.viewport.x,viewportHeight:m.viewport.y},tileVolumes:Wt,shadow:G,atmosphericSunlight:M?{azimuthDegrees:M.azimuthDegrees,elevationDegrees:M.elevationDegrees,relativeIntensity:M.relativeIntensity,color:`#${M.color.getHexString()}`,transmittanceReady:M.atmosphericTransmittanceReady,irradianceReady:M.atmosphericIrradianceReady}:null}),Qe.publish()}},dispose:()=>{}};N.layer.addRuntime(zt);const mr=()=>De.shadowSunDiscSamples,Es=()=>{var _,b;if(!Pe()||!O||w.directionToSun.y<=0)return null;const m=(b=(_=N.layer).getRenderer)==null?void 0:b.call(_);if(!m)return null;let S=!1;if(!$||Ki!==m){const Q=_t;ur(),_t=Q,Ki=m,$=new kf(w.scene,m,{light:w.controller.lights[0],sky:w.atmosphericSky.mesh,overlay:w.sunVectorRoot,frame:w.frame,maximumMapSize:At.maxShadowMapSize,isCorridorReady:(U,L,W)=>{const ee=Mn(U,L,W),ue=mt==null?void 0:mt.get(ee);if(ue!==void 0)return ue;const ye=ht().every(pe=>{var ve;return((ve=pe.isShadowRegionReady)==null?void 0:ve.call(pe,U,L,W))??(pe.getRequestDemand?pe.getRequestDemand()===0:!pe.providesTerrain||!pr(t))});return mt==null||mt.set(ee,ye),ye},receiverStageError:U=>{const L=Mn(U),W=ft==null?void 0:ft.get(L);if(W!==void 0)return W;const ee=Za(U,ar(),Me()?T():(o==null?void 0:o.errorTargetPixels)??an);return ft==null||ft.set(L,ee),ee},receiverBiasLimit:(U,L)=>Ts(U,L)??li,onPresentedPages:(U,L)=>{var ee;const W=Gf(ar(),L.map(({id:ue,receiverBounds:ye})=>({id:ue,bounds:ye})),U.map(({id:ue,receiverBounds:ye})=>({id:ue,bounds:ye})));if(W.length!==0)for(const ue of ht())(ee=ue.acknowledgeShadowStage)==null||ee.call(ue,W)},corridorRevision:(U,L,W)=>{var ve;const ee=Mn(U,L,W),ue=We==null?void 0:We.get(ee);if(ue!==void 0)return ue;const ye=[];for(const G of ht()){if(G===zt)continue;const we=(ve=G.getShadowRegionRevision)==null?void 0:ve.call(G,U,L,W);if(!we)return We==null||We.set(ee,null),null;ye.push(JSON.stringify([G.id,we]))}const pe=ye.length?JSON.stringify(ye.sort()):null;return We==null||We.set(ee,pe),pe},dateTimeKey:()=>(h==null?void 0:h.instant.toISOString())??null,worldBasis:()=>{const U=N.layer.projectSceneToLngLat([0,0,0]);if(!U)throw new Error("Shared scene origin is not initialized");const L=Wl.MercatorCoordinate.fromLngLat(U,0);return jf(L.x,L.y,L.meterInMercatorCoordinateUnits())},requestRepaint:()=>t.triggerRepaint(),visualEpoch:()=>Wr,auditCorridors:U=>{const L=ar(),W=ht();return U.map(({id:ee,casterBounds:ue,receiverBounds:ye})=>qf({id:ee,casterBounds:ue,sunElevationDegrees:(h==null?void 0:h.elevationDegrees)??0,volumes:L,regions:W.flatMap(pe=>{var G;const ve=(G=pe.getShadowRegionDiagnostics)==null?void 0:G.call(pe,ue,void 0,ye);return ve?[ve]:[]})}))},runIdleRender:U=>{var L,W;return((W=(L=N.layer).runIdleRender)==null?void 0:W.call(L,U))??!1}}),S=!0}return!P||S?$.update(_t,O,{maxReceiverBiasMeters:Me()?li:void 0,directionToSun:w.directionToSun,color:w.sunColor,intensity:w.sunIntensity,shadowIntensity:w.shadowIntensity},Dt[w.shadowQuality].shadowTexelErrorPixels,ae(O)):$.updatePresentation(O,ae(O)),$},Fc=Vf(),Kr=()=>Pe()&&Fc(ht()),As={onSettled:Be.onSettled,onPresented:()=>{var S;const m=performance.now();for(const _ of xe(t))(S=_.onShadowPresented)==null||S.call(_,m)},get options(){return Ut},get maxRenderTargetPixels(){return qr},get rounds(){return mr()},epoch:()=>Vr,visualEpoch:()=>Wr,pending:()=>Ht&&tt&&!F&&(!Ve||Kr()||!Pe()&&!Re()||!Pe()&&pr(t)||P||!Pe()&&Xe!==0),active:()=>Ht&&tt&&Ve&&!Kr()&&(Pe()||Re())&&(Pe()||!pr(t))&&!P&&!F&&(Pe()||Xe===0)&&h!==null&&Et!==null&&w.receiverWorldPoints.length>0,retainSettledFrame:()=>Ht&&tt&&h!==null&&Et!==null&&w.receiverWorldPoints.length>0,prepareRound:m=>{Pe()||w.controller.applySunDiscSample(m,mr())},finishRound:()=>w.controller.restoreSunDiscCenter(),get renderProgressive(){if(Pe())return(m,S)=>!tt||F||!Ht?null:bs(()=>{if(Kr())return null;const _=Es();if(!_)return null;const b=_.renderProgressive(m,{...S,samples:mr(),maxRenderTargetPixels:qr,options:Ut});return Qe.publish(),b})},renderScene:(m,S)=>!tt||F||!Pe()?!1:bs(()=>{if(Kr())return!1;const _=Es();if(!_)return!1;const b=_.render(m,S,mr(),!P);return Qe.publish(),b})};(Ws=(Vs=N.layer).setAccumulationController)==null||Ws.call(Vs,As);const Xr=()=>{ut=null,$e=!0,hr()};Ee=m=>{re(m),Xr()};const Cs=()=>{Be.cancel(),$==null||$.pausePending(),it=Cn(it,performance.now(),!1),P=!0,$e=!0},Xi=()=>{Be.cancel(),$e=!0},Is=()=>{P=!1,it=Cn(it,performance.now(),!1),Yi?(Yi=!1,Qi()):Xr(),M&&sr.flush(M),or!==Et&&cr(Et)},Ds=()=>{Xi(),t.triggerRepaint()};t.on(Se.MOVE_START,Cs),t.on(Se.MOVE,Xi),t.on(Se.MOVE_END,Is),t.on(Se.RESIZE,Ds);const $i=m=>{m.ready.then(S=>{!S||R||z!==m||(Ve=!0,Xr(),t.triggerRepaint())})},Ps=()=>{var b,Q,U,L;const m=xe(t).filter(W=>W.providesTerrain);if(m.length!==Ie.length||m.some(W=>!Ie.includes(W))){Ie=m,ur(),(Q=(b=N.layer).setAccumulationController)==null||Q.call(b,null),(L=(U=N.layer).setAccumulationController)==null||L.call(U,As);for(const W of w.controller.lights)W.shadow.map&&(bt(W.shadow.map),W.shadow.map=null);Ue()}const S=Me();if(!o)return;if(S){Be.cancel(),Ve=!0;const W=z;z=null,W&&N.layer.hasRuntime(W.id)&&N.layer.removeRuntime(W.id),ut=null,$e=!0;return}if(z)return;const _=le();_&&(Be.cancel(),Ve=!1,z=_,_.setMaterialColor(`#${Y.getHexString()}`),_.setShadowView(or),N.layer.addRuntime(_),$i(_),ut=null,$e=!0)};z&&$i(z),hr();const Ns=()=>{if(R)return;const m=new Set(Al(t));for(const[S,_]of dt)m.has(S)||(N.layer.removeRuntime(_.runtime.id),dt.delete(S));for(const S of m){const _=dt.get(S);if(_){_.sync();continue}if(!S.scene)continue;const b=pp(N.layer,S,v);b&&dt.set(S,b)}Mr(N.layer.getScene(),Me()),Xr(),t.triggerRepaint()},Bc=xl(t,Ns);Ns(),g();const Qi=()=>{var m,S,_;if(!R){Xe&&(window.clearTimeout(Xe),Xe=0),Yr?$==null||$.invalidateContent():lr.length>0&&($==null||$.invalidateContent(lr)),Yr=!1,lr.length=0,Be.cancel(),Ps(),p.refresh(),g();for(const b of xe(t))b.providesTerrain&&((m=b.setErrorTargetOverride)==null||m.call(b,y),(!A.has(b)||A.get(b)!==E)&&((S=b.setCacheBudget)==null||S.call(b,E),A.set(b,E))),(_=b.setShadowSimulationStyle)==null||_.call(b,v);cr(or),dt.size>0&&Mr(N.layer.getScene(),Me()),w.controller.invalidate(),w.dirty=!0,$e=!0,ut=null,t.triggerRepaint()}},Uc=Eo(t,m=>{if(R)return;const S=m==null?void 0:m.bounds;if(m===void 0){const _=xe(t).filter(b=>b.providesTerrain);(_.length!==Ie.length||_.some(b=>!Ie.includes(b)))&&(Ps(),p.refresh(),g())}for(const _ of(m==null?void 0:m.roots)??[])Mr(_,Me());if((S==null?void 0:S.length)===0){t.triggerRepaint();return}if(S===void 0?Yr=!0:S.length>0&&lr.push(...S.map(_=>_.clone())),Be.cancel(),S===void 0&&ht().some(_=>_!==zt&&!_.getActiveTileVolumes)&&(Yr=!0),P){Yi=!0,t.triggerRepaint();return}t.triggerRepaint(),!Xe&&(Xe=window.setTimeout(()=>{Xe=0,Qi()},Dp))}),Hc=Tl(t,()=>{pr(t)&&Be.cancel(),R||t.triggerRepaint()});Qi();const Os=m=>{const S=M??Ft(m);S&&sr.apply(S)},zc=m=>{(h==null?void 0:h.instant.getTime())!==m.instant.getTime()&&($==null||$.cancelPending(!0),Ue(),h=m,hr(),Os(m))},Ls=()=>{R||h&&Os(h)};t.on(Se.STYLE_LOAD,Ls);const Fs=()=>{Qe.markStale(),w.dirty=!0,t.triggerRepaint()},kc=rp(t,m=>{m?Fs():Qe.reset()});return{updateSolarPosition:zc,updateMeshCacheBudget(m){var _;a&&(m=Math.min(m??sn,sn));const S=m!==void 0&&Number.isFinite(m)&&m>0?m:void 0;if(!(E===S&&xe(t).filter(b=>b.providesTerrain).every(b=>A.has(b)&&A.get(b)===S))){E=S;for(const b of xe(t))b.providesTerrain&&((_=b.setCacheBudget)==null||_.call(b,S),A.set(b,S));t.triggerRepaint()}},updateTerrain(m){if(o===m||(Be.cancel(),o=m,!m||Me()))return;const S=z,_=le(S==null?void 0:S.originLngLat);_&&(_.setMaterialColor(`#${Y.getHexString()}`),_.setShadowView(or),S&&_.adoptPresentation(S),z=_,N.layer.addRuntime(_),S&&N.layer.removeRuntime(S.id),$i(_),ut=null,$e=!0,Ue(),Ee(),t.triggerRepaint())},updateTerrainColor(m){const S=new ke(m);Y.equals(S)||(Ue(),z==null||z.setMaterialColor(m),w.atmosphericSky.updateGroundAlbedo(S),Y=S)},updateMeshErrorTarget(m){var S;if(y!==m){y=m;for(const _ of xe(t))(S=_.setErrorTargetOverride)==null||S.call(_,m);t.triggerRepaint()}},updateBuildingAppearance(m){var S;if(!(v.fullOpacity===m.fullOpacity&&v.uniformColor===m.uniformColor&&(v.uniformColorMix??1)===(m.uniformColorMix??1)&&(v.textureSaturation??1)===(m.textureSaturation??1)&&(v.textureColorCorrection??!1)===(m.textureColorCorrection??!1))){Ue(),$==null||$.invalidateContent(),v=m;for(const _ of dt.values())_.updateBuildingAppearance(m);for(const _ of xe(t))(S=_.setShadowSimulationStyle)==null||S.call(_,m);Mr(N.layer.getScene(),Me()),w.controller.invalidate(),w.dirty=!0,t.triggerRepaint()}},updateShadowQuality(m){a&&(m=Gt.FPS_120),w.shadowQuality!==m&&(Ue(),w.shadowQuality=m,De=rn(nn(ji,a),m),Ut=jr(),it=An(m),w.dirty=!0,hr(),w.controller.invalidate())},updateRenderQuality(m){m=nn(m,a);const S=De,_=rn(m,w.shadowQuality);ji={...m},De=_;const b=S.shadowAdaptiveQuality!==_.shadowAdaptiveQuality;(b||S.shadowBufferLayout!==_.shadowBufferLayout)&&(it=An(w.shadowQuality)),!(!b&&S.shadowBufferLayout===_.shadowBufferLayout&&S.shadowBufferFormat===_.shadowBufferFormat&&S.shadowSunDiscSamples===_.shadowSunDiscSamples&&S.shadowMsaaSamples===_.shadowMsaaSamples&&S.shadowGroundTexelFit===_.shadowGroundTexelFit)&&(Ut=jr(),Ue(),S.shadowBufferLayout!==_.shadowBufferLayout&&(ur(),$e=!0),(b||S.shadowGroundTexelFit!==_.shadowGroundTexelFit||S.shadowBufferLayout!==_.shadowBufferLayout)&&(w.dirty=!0,w.controller.invalidate()),Qe.publish(),t.triggerRepaint())},updateSoftSunShadows(m){m=m&&!a,tt!==m&&(Ue(),tt=m,ur(),w.controller.setSoftSun(m),w.controller.invalidate(),w.dirty=!0,t.triggerRepaint())},updateTimeAnimating(m){F!==m&&(Be.cancel(),F=m,m&&($==null||$.pausePending()),m||(sr.flush(),Vi=Number.NEGATIVE_INFINITY,Wi&&!P&&cr(Et),w.dirty=!0),t.triggerRepaint())},refreshProjectionDebug:Fs,updateShadowIntensity(m){const S=Ye(m,0,1);if(f!==S){Ue(),f=S,w.shadowIntensity=f;for(const _ of w.controller.lights)_.shadow.intensity=f;t.triggerRepaint()}},updateMapStyleContentVisibility(m){u!==m&&(u=m,V(),t.triggerRepaint())},updateMapStyleElevationVisibility(m,S){N.setMapStyleElevationVisibility(m,S),t.triggerRepaint()},updateMapStyleLabelOverlayVisibility(m){N.setPointLabelOverlayVisible(m),t.triggerRepaint()},updateSunDebugVectorVisibility(m){w.sunVectorVisible!==m&&(Ue(),w.sunVectorVisible=m,w.sunVectorRoot.visible=m&&!!h,m?(w.frame.add(w.sunVectorRoot),Ei(async()=>{const{buildSunVector:S}=await import("./shadow-sun-vector-BcBYDcaW.js");return{buildSunVector:S}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10])).then(({buildSunVector:S})=>{if(R||!w.sunVectorVisible||w.sunVector)return;const _=S();w.sunVector=_,w.sunVectorRoot.add(_.root),_.update(w.center,w.directionToSun,w.sunVectorLengthMeters),_.root.visible=!0,w.sunVectorRoot.visible=!!h,t.triggerRepaint()}).catch(S=>{R||console.error("Unable to load sun-vector diagnostics",S)})):(w.frame.remove(w.sunVectorRoot),w.sunVector&&(w.sunVectorRoot.remove(w.sunVector.root),w.sunVector.dispose(),w.sunVector=null)),t.triggerRepaint())},updateAtmosphericLutUsage(m){I.useTransmittanceLut===m.useTransmittanceLut&&I.useIrradianceLut===m.useIrradianceLut||(Ue(),I=m,M=null,h&&(Ft(h),re()),t.triggerRepaint())},dispose(){var m,S,_,b,Q,U;if(!R){R=!0,Be.dispose(),kc(),ur(),Qe.dispose(),Xe&&window.clearTimeout(Xe),sr.dispose(),Rn(t),t.off(Se.STYLE_LOAD,Ls),t.off(Se.MOVE_START,Cs),t.off(Se.MOVE,Xi),t.off(Se.MOVE_END,Is),t.off(Se.RESIZE,Ds),Bc(),Uc(),Hc(),Et=null,cr(null);for(const L of xe(t))(m=L.setShadowSimulationStyle)==null||m.call(L,null),(S=L.setErrorTargetOverride)==null||S.call(L,null);for(const L of dt.values())N.layer.hasRuntime(L.runtime.id)&&N.layer.removeRuntime(L.runtime.id);dt.clear();try{B==null||B()}catch{}B=null,(b=(_=N.layer).setMapStyleProjectionVisible)==null||b.call(_,!0),p(),N.layer.hasRuntime(zt.id)&&N.layer.removeRuntime(zt.id),z&&N.layer.hasRuntime(z.id)&&N.layer.removeRuntime(z.id),C.dispose(),wp(w),(U=(Q=N.layer).setAccumulationController)==null||U.call(Q,null),N.release();try{t.isStyleLoaded()&&t.setLight(l)}catch{}}}}},Bp=({tiledShadows:t=!1,libreMap:e,shadowAreaMeters:r,terrain:i,mapLibreTerrain:n,terrainQuality:s,location:a,state:o,dateState:c,setDateState:l})=>{const u=j.useRef(null),d=lu({dateState:c,setDateState:l,location:a,shadowState:o,onFrame:f=>{var y;o.enabled&&((y=u.current)==null||y.updateSolarPosition(pi(f,a)))}}),p=j.useMemo(()=>Il(i,Qs(o.shadowQuality),o.terrainErrorTarget),[i,o.shadowQuality,o.terrainErrorTarget]),g=j.useRef(p);g.current=p;const[h,v]=j.useState(0);return j.useEffect(()=>{if(!e||!o.enabled)return;let f=null,y=null,T=null;const E=()=>{e.off(Se.STYLE_DATA,A),e.off(Se.STYLE_LOAD,A),e.off(Se.IDLE,A)},A=()=>{f||y!==null||T!==null||!e.isStyleLoaded()||(y=requestAnimationFrame(()=>{y=null,T=setTimeout(()=>{T=null,e.isStyleLoaded()&&(E(),f=Fp(e,{shadowAreaMeters:r,terrain:g.current,mapLibreTerrain:n,terrainQuality:s}),u.current=f,v(M=>M+1))},0)}))};return e.on(Se.STYLE_DATA,A),e.on(Se.STYLE_LOAD,A),e.on(Se.IDLE,A),A(),()=>{E(),y!==null&&cancelAnimationFrame(y),T!==null&&clearTimeout(T),u.current=null,f==null||f.dispose(),f=null}},[e,r,o.enabled,n,s]),j.useEffect(()=>{var f;(f=u.current)==null||f.updateTerrain(p)},[p,h]),j.useEffect(()=>{var y;if(!o.enabled)return;const f=d.current??c;(y=u.current)==null||y.updateSolarPosition(pi(f,a))},[d,c,a,o.enabled,h]),j.useEffect(()=>{var f;o.enabled&&((f=u.current)==null||f.updateShadowQuality(Qs(o.shadowQuality)))},[o.enabled,o.shadowQuality,h]),j.useEffect(()=>{var f;o.enabled&&((f=u.current)==null||f.updateRenderQuality({shadowAdaptiveQuality:o.shadowAdaptiveQuality,shadowBufferLayout:t?o.shadowBufferLayout:void 0,shadowBufferFormat:o.shadowBufferFormat,shadowSunDiscSamples:o.shadowSunDiscSamples,shadowMsaaSamples:o.shadowMsaaSamples,shadowGroundTexelFit:o.shadowGroundTexelFit}))},[o.enabled,t,o.shadowAdaptiveQuality,o.shadowBufferLayout,o.shadowBufferFormat,o.shadowSunDiscSamples,o.shadowMsaaSamples,o.shadowGroundTexelFit,h]),j.useEffect(()=>{var f;o.enabled&&((f=u.current)==null||f.updateMeshErrorTarget(o.meshErrorTarget??null))},[o.enabled,o.meshErrorTarget,h]),j.useEffect(()=>{var f;o.enabled&&((f=u.current)==null||f.updateMeshCacheBudget(o.meshCacheBudgetBytes))},[o.enabled,o.meshCacheBudgetBytes,h]),j.useEffect(()=>{var f;o.enabled&&((f=u.current)==null||f.updateSoftSunShadows(o.softSunShadows??!0))},[o.enabled,o.softSunShadows,h]),j.useEffect(()=>{var f;o.enabled&&((f=u.current)==null||f.updateTimeAnimating(o.isAnimating??!1))},[o.enabled,o.isAnimating,h]),j.useEffect(()=>{var f;o.enabled&&((f=u.current)==null||f.updateShadowIntensity(o.shadowIntensity??1))},[o.enabled,o.shadowIntensity,h]),j.useEffect(()=>{var f;o.enabled&&((f=u.current)==null||f.updateMapStyleContentVisibility(o.showMapStyleContent??!0))},[o.enabled,o.showMapStyleContent,h]),j.useEffect(()=>{var f;o.enabled&&((f=u.current)==null||f.updateMapStyleLabelOverlayVisibility((o.showMapStyleContent??!0)&&(o.showMapStyleLabels??!0)))},[o.enabled,o.showMapStyleContent,o.showMapStyleLabels,h]),j.useEffect(()=>{var f;o.enabled&&((f=u.current)==null||f.updateMapStyleElevationVisibility(o.showMapStyleElevationLines??!1,o.showMapStyleElevationLabels??!1))},[o.enabled,o.showMapStyleElevationLines,o.showMapStyleElevationLabels,h]),j.useEffect(()=>{var f;o.enabled&&((f=u.current)==null||f.updateSunDebugVectorVisibility((o.showProjectionDebugView??!1)&&(o.showSunDebugVector??!0)))},[o.enabled,o.showProjectionDebugView,o.showSunDebugVector,h]),j.useEffect(()=>{if(!e)return;const f=o.enabled&&(o.showProjectionDebugView??!1)&&(o.showTileBounds??!0);if(!f)return;const y=new Set,T=()=>{var M;const A=xe(e);for(const I of y)A.includes(I)||y.delete(I);for(const I of A)y.has(I)||((M=I.setTileBoundsVisible)==null||M.call(I,f),y.add(I))};T();const E=Eo(e,T);return()=>{var A;E();for(const M of xe(e))(A=M.setTileBoundsVisible)==null||A.call(M,!1)}},[e,h,o.enabled,o.showProjectionDebugView,o.showTileBounds]),j.useEffect(()=>{var f;o.enabled&&((f=u.current)==null||f.updateAtmosphericLutUsage({useTransmittanceLut:o.useTransmittanceLut??!0,useIrradianceLut:o.useSkyIrradianceLut??!0}))},[o.enabled,o.useSkyIrradianceLut,o.useTransmittanceLut,h]),j.useEffect(()=>{var f;o.enabled&&((f=u.current)==null||f.updateTerrainColor(o.terrainColor??Ro))},[o.enabled,o.terrainColor,h]),j.useEffect(()=>{var f;o.enabled&&((f=u.current)==null||f.updateBuildingAppearance({fullOpacity:o.buildingsFullOpacity??!0,uniformColor:o.buildingColor??Dl,uniformColorMix:Ye(o.buildingColorMix??Pl,0,1),textureColorCorrection:o.meshTextureColorCorrection??!0,textureSaturation:Ye(o.meshTextureSaturation??Nl,0,1)}))},[o.buildingColor,o.buildingColorMix,o.buildingsFullOpacity,o.enabled,o.meshTextureSaturation,o.meshTextureColorCorrection,h]),null},Up=t=>({...t,animationMode:Xt.DAY,animationSpeed:4,isAnimating:!1,shadowIntensity:1,meshTextureColorCorrection:!0,showSunDebugVector:!0,showTileBounds:!0,showProjectionDebugView:!1,showDisplaySettings:!1,showMapStyleContent:!0,showMapStyleLabels:!0,showMapStyleElevationLines:!1,showMapStyleElevationLabels:!1,useTransmittanceLut:!0,useSkyIrradianceLut:!0,shadowBufferLayout:void 0,shadowBufferFormat:void 0,shadowSunDiscSamples:void 0,shadowMsaaSamples:void 0,shadowGroundTexelFit:void 0,shadowAdaptiveQuality:void 0}),Hp=({location:t,state:e,setState:r,dateState:i,setDateState:n})=>{const s=e.animationMode??Xt.DAY,a=e.animationSpeed??4,o=(c,l)=>n(Ql(i,i.year,Ol(i.year,c,l),t));return k.jsxs(k.Fragment,{children:[k.jsxs("section",{className:"min-w-0",children:[k.jsx("h3",{className:"mb-1.5 text-xs font-medium uppercase tracking-wide text-neutral-500",children:"Datum"}),k.jsxs("div",{className:"grid grid-cols-2 gap-2","data-test-id":"shadow-date-shortcuts",children:[k.jsx("button",{type:"button",className:gr,onClick:()=>n(Zl(i,t)),children:"Heute"}),k.jsx("button",{type:"button",className:gr,onClick:()=>o(2,21),children:"21. März"}),k.jsx("button",{type:"button",className:gr,onClick:()=>o(5,21),children:"21. Juni"}),k.jsx("button",{type:"button",className:gr,onClick:()=>o(11,21),children:"21. Dezember"})]})]}),k.jsxs("section",{children:[k.jsx("h3",{className:"mb-1.5 text-xs font-medium uppercase tracking-wide text-neutral-500",children:"Uhrzeit"}),k.jsx("div",{className:"grid grid-cols-4 gap-2",children:[9,12,15,18].map(c=>k.jsx("button",{type:"button",className:gr,onClick:()=>n(is(i,{...i,minutes:c*60},t)),children:iu(c)},c))})]}),k.jsxs("section",{children:[k.jsx("h3",{className:"mb-1.5 text-xs font-medium uppercase tracking-wide text-neutral-500",children:"Animation"}),k.jsxs("div",{className:"flex flex-wrap items-center gap-x-3 gap-y-2",children:[k.jsx("div",{className:"flex shrink-0 overflow-hidden rounded-md border border-neutral-300",children:[[Xt.DAY,"Tagesverlauf"],[Xt.YEAR,"Jahresverlauf"]].map(([c,l])=>k.jsx("button",{type:"button",className:`${Ao} ${s===c?"bg-amber-50 font-medium text-amber-700":"bg-white"}`,"aria-pressed":s===c,onClick:()=>{const u=c;r({...e,animationMode:u,isAnimating:s===u?!e.isAnimating:!0})},children:l},c))}),k.jsx(au,{value:a,onChange:c=>r({...e,animationSpeed:c})})]})]})]})},zp=({location:t,state:e,setState:r,dateState:i,setDateState:n})=>{const s=e.shadowIntensity??1,a=j.useMemo(()=>pi(i,t),[i,t]);return k.jsxs("div",{className:"w-full","data-test-id":"shadow-simulation-secondary-panel",children:[k.jsxs("div",{className:"mb-2 flex flex-wrap items-center justify-between gap-x-4 gap-y-2",children:[k.jsxs("span",{className:"whitespace-nowrap text-sm tabular-nums text-neutral-500",children:["Höhe ",a.elevationDegrees.toFixed(0),"° · Azimut"," ",a.azimuthDegrees.toFixed(0),"°"]}),k.jsx("div",{className:"flex items-center gap-5 text-sm text-neutral-600",children:k.jsxs("button",{type:"button",className:"flex items-center gap-2 whitespace-nowrap hover:text-amber-700",onClick:()=>{r(Up(e)),n(Jl(i,t))},children:[k.jsx(On,{icon:zl}),"Zurücksetzen"]})})]}),k.jsxs("div",{className:"grid grid-cols-1 gap-x-8 gap-y-4 lg:grid-cols-2",children:[k.jsx(Hp,{location:t,state:e,setState:r,dateState:i,setDateState:n}),k.jsxs("section",{className:"min-w-0",children:[k.jsxs("h3",{className:"mb-1.5 flex items-center gap-1 text-xs font-medium uppercase tracking-wide text-neutral-500",children:["Darstellung",k.jsx("button",{type:"button",className:"inline-flex items-center justify-center p-1 text-neutral-700 hover:text-amber-700","aria-label":"Darstellungseinstellungen",title:"Darstellungseinstellungen","aria-expanded":e.showDisplaySettings??!1,onClick:()=>r({...e,showDisplaySettings:!e.showDisplaySettings}),"data-test-id":"shadow-simulation-display-settings",children:k.jsx(On,{icon:kl})})]}),k.jsxs("label",{className:"grid grid-cols-[110px_minmax(0,1fr)_42px] items-center gap-3 text-sm text-neutral-700",children:[k.jsx("span",{children:"Intensität"}),k.jsx("input",{type:"range",min:0,max:1,step:.01,value:s,onChange:o=>r({...e,shadowIntensity:Number(o.currentTarget.value)}),className:"shadow-simulation-range min-w-0 cursor-pointer",style:nu(s,0,1),"aria-label":"Schattenintensität","data-test-id":"shadow-simulation-intensity"}),k.jsxs("span",{className:"text-right tabular-nums",children:[Math.round(s*100),"%"]})]})]})]})]})},kp=j.lazy(()=>Ei(()=>import("./ShadowProjectionDebugView-DZKwvn60.js"),__vite__mapDeps([11,1,2,3,4,5,6,7,8,9,10,12])).then(t=>({default:t.ShadowProjectionDebugView}))),Vp=j.lazy(()=>Ei(()=>import("./ShadowSimulationDisplaySettingsPanel-BWvYlYrj.js"),__vite__mapDeps([13,1,2,3,4,5,6,7,8,9,10])).then(t=>({default:t.ShadowSimulationDisplaySettingsPanel}))),Wp=j.lazy(()=>Ei(()=>import("./ShadowSimulationCurveSettings-BNtx9aVe.js"),__vite__mapDeps([14,1,2,3,4,5,6,7,8,9,10])).then(t=>({default:t.ShadowSimulationCurveSettings}))),Gp="#1677ff",ag=({config:t,libreMap:e,targeted:r,sharedState:i,setSharedState:n,sharedDateState:s,setSharedDateState:a})=>{var Y,V;const{year:o,initialDayOfYear:c,initialMinutes:l,latitude:u=Js.latitude,longitude:d=Js.longitude,timeZone:p=Hl,shadowAreaMeters:g,terrain:h,terrainSources:v,mapLibreTerrain:f,controlPosition:y="topleft",controlOrder:T=70,experimentalTiledShadows:E=!1}=t??{},A=ru(e,u,d),M=j.useMemo(()=>Ll({terrain:h,terrainSources:v}),[h,v]),I=j.useMemo(()=>s??Fl({year:o,initialDayOfYear:c,initialMinutes:l,timeZone:p},A),[s,c,l,A,p,o]),R=i??M,F=s??I,P=j.useMemo(()=>v??(h?[{label:h.id,terrain:h}]:void 0),[h,v]),B=((Y=P==null?void 0:P.find(({terrain:N})=>N.id===R.terrainSourceId))==null?void 0:Y.terrain)??((V=P==null?void 0:P[0])==null?void 0:V.terrain);return j.useEffect(()=>{i||n(M)},[M,n,i]),j.useEffect(()=>{s||a(I)},[I,a,s]),r?k.jsx(zp,{location:A,state:R,setState:n,dateState:F,setDateState:a}):k.jsxs(k.Fragment,{children:[e&&k.jsx(Bl,{position:y,order:T,children:k.jsx(Yc,{title:R.enabled?"Schattensimulation ausschalten":"Schattensimulation einschalten",placement:"right",children:k.jsx(Ul,{onClick:()=>n({...R,enabled:!R.enabled}),dataTestId:"shadow-simulation-control-button","aria-label":R.enabled?"Schattensimulation ausschalten":"Schattensimulation einschalten","aria-pressed":R.enabled,children:k.jsx(On,{icon:Vl,style:R.enabled?{color:Gp}:void 0})})})}),k.jsx(Bp,{tiledShadows:E,libreMap:e,shadowAreaMeters:g,terrain:B,mapLibreTerrain:f,terrainQuality:R.terrainQuality,location:A,state:R,dateState:F,setDateState:a}),R.controlStyle===Zs.CURVE&&k.jsx(j.Suspense,{fallback:null,children:k.jsx(Wp,{location:A,dateState:F,setDateState:a,onClose:()=>n({...R,controlStyle:Zs.QUICK})})}),R.showDisplaySettings&&k.jsx(j.Suspense,{fallback:null,children:k.jsx(Vp,{tiledShadows:E,state:R,setState:n,terrainSources:P,map:e})}),R.enabled&&R.showProjectionDebugView&&e&&k.jsx(j.Suspense,{fallback:null,children:k.jsx(kp,{map:e,solarPosition:pi(F,A),settings:{showSunDebugVector:R.showSunDebugVector??!0,showTileBounds:R.showTileBounds??!0},onSettingsChange:N=>n({...R,...N}),onClose:()=>n({...R,showProjectionDebugView:!1})})})]})};export{eg as M,Pr as S,ru as a,nu as b,is as c,au as d,ag as e,sa as f,Xl as g,sg as h,ng as i,tg as j,Jp as k,ca as r,$l as s,lu as u};
