var I=Object.defineProperty;var _=(e,i,t)=>i in e?I(e,i,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[i]=t;var m=(e,i,t)=>_(e,typeof i!="symbol"?i+"":i,t);import{i as $,V as w}from"./three.module-DbFHiiZ-.js";import{V as z}from"./constants-C6-_E4xW.js";const T=(e,i,t,l=z)=>{const a=e.direction.clone(),s=t.clone();if(a.lengthSq()<=l||s.lengthSq()<=l)return 0;a.normalize(),s.normalize();const c=e.origin.clone().sub(i),d=a.dot(a),n=a.dot(s),r=s.dot(s),o=a.dot(c),g=s.dot(c),h=d*r-n*n;return Math.abs(h)<l?g:(d*g-n*o)/h},L=z,F=e=>{const i=e.epsilon??L,t={axisOrigin:e.axisOrigin.clone(),axisDirection:e.axisDirection.lengthSq()>i?e.axisDirection.clone().normalize():e.axisDirection.clone(),axisParam:e.initialAxisParam??0,isDragging:!1};let l=0,a=t.axisParam;const s=n=>{var r;(r=e.onAxisParamChange)==null||r.call(e,{axisParam:t.axisParam,deltaFromDragStart:n,point:t.axisOrigin.clone().add(t.axisDirection.clone().multiplyScalar(t.axisParam)),isDragging:t.isDragging})},c=n=>{var r;t.isDragging!==n&&(t.isDragging=n,(r=e.onDragStateChange)==null||r.call(e,n))},d=n=>n.direction.lengthSq()<=i||t.axisDirection.lengthSq()<=i?null:T(new $(n.origin.clone(),n.direction.clone().normalize()),t.axisOrigin,t.axisDirection.clone().normalize(),i);return{setAxis:(n,r)=>{t.axisOrigin=n.clone(),t.axisDirection=r.lengthSq()>i?r.clone().normalize():r.clone()},setAxisParam:n=>{t.axisParam=n,s(0)},getAxisParam:()=>t.axisParam,getPoint:()=>t.axisOrigin.clone().add(t.axisDirection.clone().multiplyScalar(t.axisParam)),getState:()=>({axisOrigin:t.axisOrigin.clone(),axisDirection:t.axisDirection.clone(),axisParam:t.axisParam,isDragging:t.isDragging}),projectRayToAxis:d,beginDragFromRay:n=>{const r=d(n);return r===null?!1:(l=r,a=t.axisParam,c(!0),s(0),!0)},updateDragFromRay:n=>{if(!t.isDragging)return null;const r=d(n);if(r===null)return null;const o=r-l;return t.axisParam=a+o,s(o),t.axisParam},endDrag:()=>{c(!1),s(0)}}},X=(e,i,t)=>{const l=e.x*i,a=-e.y*i,s=e.x*16;return`perspective(900px) rotateX(${t+e.z*16}deg) rotateZ(${s}deg) translate3d(${l}px, ${a}px, 0)`},v=(e,i,t,l,a)=>{const s=(e-t.left)/t.width*2-1,c=(i-t.top)/t.height*2-1,d=new w(s,-c,-Math.max(.25,l));return d.lengthSq()>1e-6?d.normalize():d.set(0,0,-1),{ray:new $(a.clone(),d.clone()),direction:d}},N=e=>{var r;let i=e.pointerDepth??1.6,t=((r=e.rayOrigin)==null?void 0:r.clone())??new w(0,0,3),l=e.gridScale??80,a=e.gridTiltDeg??58;const s=F({axisOrigin:e.axisOrigin,axisDirection:e.axisDirection,initialAxisParam:e.initialAxisParam});let c=null;const d=()=>{const o=s.getState(),g=s.getPoint();return{axisParam:o.axisParam,isDragging:o.isDragging,point:g,gridTransform:X(g,l,a),lastRayDirection:c}},n=()=>{var o;(o=e.onChange)==null||o.call(e,d())};return{setAxis:(o,g)=>{s.setAxis(o,g),n()},setAxisParam:o=>{s.setAxisParam(o),n()},setPointerDepth:o=>{i=o,n()},setGridStyle:(o,g)=>{l=o,a=g,n()},beginDragFromClient:(o,g,h)=>{const{ray:x,direction:u}=v(o,g,h,i,t);c=u;const p=s.beginDragFromRay(x);return n(),p},updateDragFromClient:(o,g,h)=>{const{ray:x,direction:u}=v(o,g,h,i,t);c=u;const p=s.updateDragFromRay(x);return n(),p},endDrag:()=>{s.endDrag(),n()},getSnapshot:d}},k=1,M=.75,H=.74,V=1.28,b=108,O=Math.max(26,Math.round(b*.42)),S=40,B={x:"#ef4444",y:"#22c55e",z:"#3b82f6"},D=e=>{const i=document.createElement("div");return Object.assign(i.style,e),i},G=(e,i,t)=>{const l=i[e],a={x:l.x,y:-l.y},s=Math.hypot(a.x,a.y),c=s>.001?{x:a.x/s,y:a.y/s}:{x:0,y:-1};return{angleRad:Math.atan2(c.y,c.x),dirX:c.x,dirY:c.y,color:t[e]}},q=(e,i,t)=>{const l=D({position:"absolute",inset:"0"}),a=D({position:"absolute",left:"50%",top:"50%",width:`${O*2}px`,height:"1px",background:"rgba(255,255,255,0.82)",pointerEvents:"none",zIndex:"0"}),s=n=>{const r=D({position:"absolute",width:"22px",height:"22px",display:"flex",alignItems:"center",justifyContent:"center",color:i,fontSize:"18px",fontWeight:"700",lineHeight:"1",webkitTextStroke:`${k}px rgba(255, 255, 255, 0.95)`,textShadow:"none",pointerEvents:"auto",cursor:"move",userSelect:"none",zIndex:"2"});return r.textContent=n,r.title=`Move point along ${e.toUpperCase()} axis`,r.addEventListener("mousedown",o=>t(o,e)),r},c=s("▲"),d=s("▼");return l.append(a,c,d),{wrapper:l,line:a,arrowForward:c,arrowBackward:d}},P=(e,i,t)=>{e.style.left=`calc(50% + ${i}px)`,e.style.top=`calc(50% + ${t}px)`},Y=e=>{const i={...B,...e.axisColors??{}},t=D({position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)",width:`${b}px`,height:`${b}px`,pointerEvents:"none",userSelect:"none",overflow:"visible",zIndex:"6"});let l=e.initialActiveAxisId??"z",a=!1;const s={x:void 0,y:void 0,z:void 0},c=(r,o)=>{var p;r.preventDefault(),r.stopPropagation(),l=o,(p=e.onActiveAxisChange)==null||p.call(e,l),e.controller.setAxis(e.axisOrigin,e.axisDirections[o]);const g=e.getViewportRect();if(!g)return;if(!e.controller.beginDragFromClient(r.clientX,r.clientY,g)){n();return}a=!0;const x=y=>{const E=e.getViewportRect();E&&(e.controller.updateDragFromClient(y.clientX,y.clientY,E),n())},u=()=>{window.removeEventListener("mousemove",x),window.removeEventListener("mouseup",u),window.removeEventListener("pointerup",u),a=!1,e.controller.endDrag(),n()};window.addEventListener("mousemove",x),window.addEventListener("mouseup",u),window.addEventListener("pointerup",u),n()};["x","y","z"].forEach(r=>{const o=q(r,i[r],c);s[r]=o,t.appendChild(o.wrapper)});const d=D({position:"absolute",left:"50%",top:"50%",width:`${S}px`,height:`${S}px`,transform:"translate(-50%, -50%)",borderRadius:"9999px",background:"transparent",pointerEvents:"auto",cursor:"move",zIndex:"1"});d.title="Move point",d.addEventListener("mousedown",r=>{r.preventDefault(),r.stopPropagation()}),t.appendChild(d),e.container.appendChild(t);const n=()=>{const r=e.controller.getSnapshot(),{point:o}=r;t.style.display="block",t.style.transform=`translate(calc(-50% + ${o.x}px), calc(-50% + ${-o.y}px))`,["x","y","z"].forEach(g=>{const h=s[g],x=G(g,e.axisDirections,i),u=g===l,p=u?1:M,y=O*(u?1:V),E=u?1:H;h.line.style.opacity=`${p}`,h.line.style.transform=`translate(-50%, -50%) rotate(${x.angleRad}rad)`,P(h.arrowForward,x.dirX*y,x.dirY*y),h.arrowForward.style.transform=`translate(-50%, -50%) rotate(${x.angleRad+Math.PI/2}rad) scale(${E})`,h.arrowForward.style.opacity=`${p}`,h.arrowForward.style.cursor=a?"grabbing":"move",P(h.arrowBackward,-x.dirX*y,-x.dirY*y),h.arrowBackward.style.transform=`translate(-50%, -50%) rotate(${x.angleRad-Math.PI/2}rad) scale(${E})`,h.arrowBackward.style.opacity=`${p}`,h.arrowBackward.style.cursor=a?"grabbing":"move"})};return n(),{getActiveAxisId:()=>l,setActiveAxisId:r=>{l=r,n()},refresh:n,destroy:()=>{t.remove()}}},R={x:new w(1,0,0),y:new w(0,1,0),z:new w(0,0,1)},C=new w(0,0,0),f=(e,i)=>{if(!e)return i;const t=Number(e);return Number.isFinite(t)?t:i},U=(e,i)=>e===null?i:e===""||e==="true"||e==="1"?!0:e==="false"||e==="0"?!1:i,A=(e,i=3)=>e.toFixed(i);class j extends HTMLElement{constructor(){super();m(this,"shadowRootRef");m(this,"stageEl");m(this,"gridHostEl");m(this,"gridEl");m(this,"readoutEl");m(this,"controller",null);m(this,"view",null);m(this,"activeAxis","z");m(this,"lastSnapshot",null);this.shadowRootRef=this.attachShadow({mode:"open"});const t=document.createElement("style");t.textContent=`
      :host {
        display: block;
        width: 100%;
        height: 100%;
      }

      .stage {
        position: relative;
        width: 100%;
        height: 100%;
        overflow: hidden;
        background: #0f172a;
        user-select: none;
      }

      .grid-host {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        display: grid;
        place-items: center;
      }

      .grid {
        transform-style: preserve-3d;
        background-image:
          linear-gradient(rgba(34,211,238,0.3) 1px, transparent 1px),
          linear-gradient(90deg, rgba(34,211,238,0.3) 1px, transparent 1px);
        background-size: 20px 20px;
        box-shadow: 0 0 28px rgba(34,211,238,0.18);
      }

      .readout {
        position: absolute;
        top: 10px;
        right: 10px;
        width: 300px;
        border-radius: 8px;
        border: 1px solid #334155;
        background: rgba(11,16,32,0.82);
        color: #d1d5db;
        padding: 10px;
        font-size: 12px;
        line-height: 1.45;
        font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
        pointer-events: none;
        z-index: 10;
        display: none;
      }
    `,this.stageEl=document.createElement("div"),this.stageEl.className="stage",this.gridHostEl=document.createElement("div"),this.gridHostEl.className="grid-host",this.gridEl=document.createElement("div"),this.gridEl.className="grid",this.gridHostEl.appendChild(this.gridEl),this.readoutEl=document.createElement("div"),this.readoutEl.className="readout",this.stageEl.append(this.gridHostEl,this.readoutEl),this.shadowRootRef.append(t,this.stageEl)}static get observedAttributes(){return["initial-offset","pointer-depth","grid-size-px","grid-tilt-deg","grid-scale","show-readouts"]}connectedCallback(){this.initialize(),this.applyAttributes()}disconnectedCallback(){var t;(t=this.view)==null||t.destroy(),this.view=null,this.controller=null}attributeChangedCallback(){this.applyAttributes()}initialize(){if(this.controller&&this.view)return;const t=f(this.getAttribute("initial-offset"),.35),l=f(this.getAttribute("pointer-depth"),1.6),a=f(this.getAttribute("grid-scale"),80),s=f(this.getAttribute("grid-tilt-deg"),58);this.controller=N({axisOrigin:C,axisDirection:R[this.activeAxis],initialAxisParam:t,pointerDepth:l,gridScale:a,gridTiltDeg:s,onChange:c=>{this.lastSnapshot=c,this.applySnapshot(c)}}),this.view=Y({container:this.stageEl,controller:this.controller,axisOrigin:C,axisDirections:R,initialActiveAxisId:this.activeAxis,getViewportRect:()=>this.stageEl.getBoundingClientRect(),onActiveAxisChange:c=>{this.activeAxis=c,this.refreshReadout()}}),this.lastSnapshot=this.controller.getSnapshot(),this.applySnapshot(this.lastSnapshot)}applyAttributes(){var r;if(!this.controller)return;const t=f(this.getAttribute("grid-size-px"),280),l=f(this.getAttribute("grid-tilt-deg"),58),a=f(this.getAttribute("grid-scale"),80),s=f(this.getAttribute("pointer-depth"),1.6),c=f(this.getAttribute("initial-offset"),.35),d=U(this.getAttribute("show-readouts"),!1);this.gridHostEl.style.width=`${t}px`,this.gridHostEl.style.height=`${t}px`,this.gridEl.style.width=`${t}px`,this.gridEl.style.height=`${t}px`,this.controller.setPointerDepth(s),this.controller.setGridStyle(a,l),this.controller.getSnapshot().isDragging||this.controller.setAxisParam(c),this.readoutEl.style.display=d?"block":"none",(r=this.view)==null||r.refresh(),this.refreshReadout()}applySnapshot(t){this.gridEl.style.transform=t.gridTransform,this.refreshReadout()}refreshReadout(){if(!this.readoutEl||!this.controller)return;const t=this.lastSnapshot??this.controller.getSnapshot();this.readoutEl.innerHTML=`
      <div><strong>Axis</strong>: ${this.activeAxis.toUpperCase()}</div>
      <div><strong>Offset</strong>: ${A(t.axisParam)}</div>
      <div><strong>Dragging</strong>: ${t.isDragging?"yes":"no"}</div>
      <div><strong>Point</strong>: (${A(t.point.x)}, ${A(t.point.y)}, ${A(t.point.z)})</div>
      <div><strong>Ray</strong>: ${t.lastRayDirection?`(${A(t.lastRayDirection.x)}, ${A(t.lastRayDirection.y)}, ${A(t.lastRayDirection.z)})`:"-"}</div>
    `}}customElements.define("carma-css-axis-gizmo",j);export{L as A,F as c,T as g};
