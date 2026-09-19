import{j as m}from"./jsx-runtime-DNp_qQjF.js";import{r as u}from"./index-CSJjS6Ct.js";import{c as E}from"./clamp-co6UzHBn.js";import{C as B,a as D,c as Ge,b as Ue,d as je,e as se,G as re,l as H,f as Be,M as F,T as De,g as Fe}from"./custom-shaders-Dkz-d91w.js";import{R as qe}from"./StripChartPanel-Dnh0Sag7.js";import"./index-Rb3gQRgL.js";import"./index-M0u9yaJ4.js";import{c as ke}from"./widgets-DBQHHrTN.js";import{C as oe,P as ze}from"./Scene-CMU8tKZA.js";import"./pi-mVFkAveX.js";import"./three.module-BsINTyXW.js";import"./gcg2016-DMNkBqyz.js";import"./angles-o81lIhgd.js";import"./iframe-CTzTqcw3.js";import"./negative-pi-to-pi-B-FiLZ9M.js";import"./ControlButtonStyler-C_yTvQxK.js";import"./index-D1cknlJ6.js";import"./button-BtRslTd2.js";import"./CesiumWidget-CNpTPlaE.js";import"./meshopt_encoder.module-D2BiFfpM.js";import"./meshopt_decoder.module-Clo9gF-m.js";typeof window<"u"&&!window.CESIUM_BASE_URL&&(window.CESIUM_BASE_URL=new URL("__cesium__/",document.baseURI).toString());const Ie="100vh",ae=.1,q=360,Ve=Math.PI*2,He=5,We=-Math.PI/2+.1,Y=B.fromDegrees(7.19993,51.27225,185),Ye=D.fromCssColorString("#0b1220"),Ke=D.fromCssColorString("#1a1a1a"),ve=D.fromCssColorString("rgb(96, 165, 250)"),Xe=D.fromCssColorString("rgb(34, 197, 94)"),we=D.fromCssColorString("rgb(251, 146, 60)"),ie=30,ce=240,O=160,Ze=.1,Je=.9,Te=1,me=.1,k=e=>e*Math.PI/180,h=(e,n)=>typeof e=="number"&&Number.isFinite(e)?e:n,A=(e,n=ae)=>Math.max(h(e,n),ae),V=(e,n=8)=>Math.max(8,Math.floor(h(e,n))),le=(e,n=1)=>Math.max(1,Math.floor(h(e,n))),Qe=(e,n=1)=>Math.max(.2,h(e,n)),z=(e,n)=>D.fromAlpha(e,E(n,0,1),new D),en=(e,n)=>E(e/A(n),0,1-.001),ge=(e,n)=>new Be({geometryInstances:e,appearance:new ze({translucent:n,closed:!1}),allowPicking:!1,asynchronous:!0,releaseGeometryInstances:!0,show:!0}),nn=()=>typeof window>"u"?1:Math.max(1,window.devicePixelRatio||1),Le=e=>{e.useBrowserRecommendedResolution=!1,e.resolutionScale=nn()},K=(e,n,i,r=0)=>F.multiplyByPoint(De.eastNorthUpToFixedFrame(e),new B(n,i,r),new B),L=(e,n=1,i=0)=>{const r=De.eastNorthUpToFixedFrame(e),c=Fe(B.ZERO,n,i,1e-6);return F.multiply(r,c,new F)},Ae=e=>{const n=ke(e,{baseLayer:!1,skyBox:!1,skyAtmosphere:!1,requestRenderMode:!0,useBrowserRecommendedResolution:!1});return Le(n),n.scene.backgroundColor=Ye,n.scene.screenSpaceCameraController.enableCollisionDetection=!1,n.scene.globe&&(n.scene.globe.baseColor=Ke,n.scene.globe.showGroundAtmosphere=!1,n.scene.globe.enableLighting=!1),n},Me=e=>{const n=()=>{e.isDestroyed()||(Le(e),e.scene.requestRender())};return window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)},j=(e,n)=>{if(!(!n||e.isDestroyed()))try{e.scene.primitives.remove(n)}catch{}},W=(e,n)=>{if(!e.isDestroyed()){for(const i of n.current)j(e,i);n.current=[]}},Pe=e=>{const n=K(Y,0,0,He);e.camera.setView({destination:n,orientation:{heading:0,pitch:We,roll:0}}),e.camera.lookAtTransform(F.IDENTITY)},f=(e,n=2)=>Number.isFinite(e)?e.toFixed(n):"0",tn={position:"absolute",top:0,left:0,right:0,zIndex:1800,pointerEvents:"none"},be=({label:e,values:n})=>m.jsx("div",{style:tn,children:m.jsx(qe,{label:e,values:n,tone:"dark"})}),X=({createPrimitive:e,statusLabel:n,statusValues:i})=>{const r=u.useRef(null),c=u.useRef(null),a=u.useRef(null);return u.useEffect(()=>{if(!r.current)return;const s=Ae(r.current),t=Me(s);return Pe(s),s.scene.requestRender(),c.current=s,()=>{t();const o=c.current;if(o){j(o,a.current),a.current=null;try{o.isDestroyed()||o.destroy()}catch{}c.current=null}}},[]),u.useEffect(()=>{const s=c.current;if(!s||s.isDestroyed())return;j(s,a.current);const t=K(Y,0,0,0),o=e(t);return s.scene.primitives.add(o),a.current=o,s.scene.requestRender(),()=>{j(s,a.current),a.current=null,s.isDestroyed()||s.scene.requestRender()}},[e]),m.jsxs("div",{style:{position:"relative",width:"100%",height:Ie},children:[m.jsx("div",{ref:r,style:{position:"absolute",inset:0}}),m.jsx(be,{label:n,values:i})]})},sn=({radius:e,segments:n})=>{const i=A(e,2.5),r=V(n,24),c=ve,a=u.useCallback(s=>Ge("story-disc",{radius:i,segments:r,color:c,modelMatrix:L(s)}),[c,i,r]);return m.jsx(X,{createPrimitive:a,statusLabel:"createDisc",statusValues:[`radius ${f(i,2)}`,`segments ${r}`]})},rn=({radius:e,innerRadius:n,segments:i})=>{const r=A(e,3),c=Math.max(0,r-.001),a=E(h(n,r*.5),0,c),s=V(i,48),t=z(Xe,Te),o=u.useCallback(p=>Ue("story-ring",{radius:r,innerRadius:a,segments:s,color:t,modelMatrix:L(p)}),[t,a,r,s]);return m.jsx(X,{createPrimitive:o,statusLabel:"createRing",statusValues:[`radius ${f(r,2)}`,`inner ${f(a,2)}`,`segments ${s}`]})},on=({radius:e,innerRadius:n,rotationDeg:i,angleDeg:r,segments:c})=>{const a=A(e,3),s=Math.max(0,a-.001),t=E(h(n,a*.4),0,s),o=V(c,48),p=h(i,20),d=E(h(r,220),0,q),y=z(we,Te),T=u.useCallback(I=>je("story-ring-segment",{radius:a,innerRadius:t,angleRad:k(d),rotationRad:k(p),segments:o,color:y,modelMatrix:L(I)}),[y,t,p,a,o,d]);return m.jsx(X,{createPrimitive:T,statusLabel:"createRingSegment",statusValues:[`radius ${f(a,2)}`,`inner ${f(t,2)}`,`rotation ${f(p,1)}°`,`angle ${f(d,1)}°`,`segments ${o}`]})},an=({contentMode:e,gridEdgeLength:n,gridDepth:i,spacing:r,radius:c,segments:a})=>{const s=e==="unit-disc"?"unit-disc":"unique-primitives",t=le(n,10),o=le(i,10),p=Qe(r,3.5),d=A(c,1.3),y=V(a,16),T=u.useRef(null),I=u.useRef(null),M=u.useRef([]);u.useEffect(()=>{if(!T.current)return;const g=Ae(T.current),P=Me(g);return Pe(g),g.scene.requestRender(),I.current=g,()=>{P();const v=I.current;if(v){W(v,M);try{v.isDestroyed()||v.destroy()}catch{}I.current=null}}},[]),u.useEffect(()=>{const g=I.current;if(!g||g.isDestroyed())return;W(g,M);const P=(t-1)/2,v=(o-1)/2,Z=z(ve,me),J=z(we,me),Q=Math.max(0,d-.001),ee=E(d*Ze,0,Q),Ne=E(d*Je,ee,Q),ne=Array.from({length:t*t*o},(C,w)=>{const R=t*t,l=Math.floor(w/R),_=w%R,S=Math.floor(_/t),x=_%t;return{layer:l,row:S,col:x,rowRatio:t<=1?0:S/(t-1),colRatio:t<=1?0:x/(t-1),layerRatio:o<=1?0:l/(o-1),center:K(Y,(x-P)*p,(S-P)*p,(l-v)*p)}}),te=s==="unit-disc"?(()=>{const C=se({innerRadiusRatio:0,angleRad:Ve,segments:y}),w=ne.map(R=>new re({id:`stress-disc-${R.layer}-${R.row}-${R.col}`,geometry:C,modelMatrix:L(R.center,d),attributes:{color:oe.fromColor(Z)}}));return[ge(w,Z.alpha<1)]})():(()=>{const C=new Map,w=(l,_)=>{const S=`${l.toFixed(6)}|${_.toFixed(6)}|${y}`,x=C.get(S);if(x)return x;const b=se({innerRadiusRatio:l,angleRad:_,segments:y});return C.set(S,b),b},R=ne.map(l=>{const _=H(ie-O*.5,ie+O*.5,l.colRatio),S=E(H(ce-O*.5,ce+O*.5,l.rowRatio),0,q),x=H(ee,Ne,l.layerRatio),b=en(x,d),$e=k(S);return new re({id:`stress-sector-${l.layer}-${l.row}-${l.col}`,geometry:w(b,$e),modelMatrix:L(l.center,d,k(_)),attributes:{color:oe.fromColor(J)}})});return[ge(R,J.alpha<1)]})();for(const C of te)g.scene.primitives.add(C);return M.current=te,g.scene.requestRender(),()=>{W(g,M),g.isDestroyed()||g.scene.requestRender()}},[s,o,t,d,y,p]);const Oe=t*t*o;return m.jsxs("div",{style:{position:"relative",width:"100%",height:Ie},children:[m.jsx("div",{ref:T,style:{position:"absolute",inset:0}}),m.jsx(be,{label:"stress test",values:[`mode ${s}`,`grid ${t}x${t}x${o}`,`total ${Oe}`,`spacing ${f(p,2)}`,`radius ${f(d,2)}`,`segments ${y}`]})]})},Ln={title:"UI/Gizmos/Primitives",id:"mapping-components-cesium",parameters:{layout:"fullscreen"}},N={name:"Disc",render:e=>m.jsx(sn,{...e}),args:{radius:2.5,segments:24},argTypes:{radius:{control:{type:"range",min:.1,max:20,step:.1}},segments:{control:{type:"range",min:8,max:256,step:1}}}},$={name:"Ring",render:e=>m.jsx(rn,{...e}),args:{radius:3,innerRadius:1.4,segments:48},argTypes:{radius:{control:{type:"range",min:.1,max:20,step:.1}},innerRadius:{control:{type:"range",min:0,max:20,step:.1}},segments:{control:{type:"range",min:8,max:256,step:1}}}},G={name:"Ring Segment",render:e=>m.jsx(on,{...e}),args:{radius:3,innerRadius:1.2,rotationDeg:20,angleDeg:220,segments:48},argTypes:{radius:{control:{type:"range",min:.1,max:20,step:.1}},innerRadius:{control:{type:"range",min:0,max:20,step:.1}},rotationDeg:{control:{type:"range",min:-360,max:q,step:1}},angleDeg:{control:{type:"range",min:0,max:q,step:1}},segments:{control:{type:"range",min:8,max:256,step:1}}}},U={name:"Stress Test",render:e=>m.jsx(an,{...e}),args:{contentMode:"unique-primitives",gridEdgeLength:10,gridDepth:10,spacing:3.5,radius:1.3,segments:16},argTypes:{contentMode:{control:{type:"radio"},options:["unit-disc","unique-primitives"]},gridEdgeLength:{control:{type:"range",min:1,max:160,step:1}},gridDepth:{control:{type:"range",min:1,max:160,step:1}},spacing:{control:{type:"range",min:.2,max:30,step:.1}},radius:{control:{type:"range",min:.1,max:12,step:.1}},segments:{control:{type:"range",min:8,max:128,step:1}}}};var ue,de,pe;N.parameters={...N.parameters,docs:{...(ue=N.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  name: "Disc",
  render: args => <DiscPreview {...args} />,
  args: {
    radius: 2.5,
    segments: 24
  },
  argTypes: {
    radius: {
      control: {
        type: "range",
        min: 0.1,
        max: 20,
        step: 0.1
      }
    },
    segments: {
      control: {
        type: "range",
        min: 8,
        max: 256,
        step: 1
      }
    }
  }
}`,...(pe=(de=N.parameters)==null?void 0:de.docs)==null?void 0:pe.source}}};var Re,fe,ye;$.parameters={...$.parameters,docs:{...(Re=$.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  name: "Ring",
  render: args => <RingPreview {...args} />,
  args: {
    radius: 3,
    innerRadius: 1.4,
    segments: 48
  },
  argTypes: {
    radius: {
      control: {
        type: "range",
        min: 0.1,
        max: 20,
        step: 0.1
      }
    },
    innerRadius: {
      control: {
        type: "range",
        min: 0,
        max: 20,
        step: 0.1
      }
    },
    segments: {
      control: {
        type: "range",
        min: 8,
        max: 256,
        step: 1
      }
    }
  }
}`,...(ye=(fe=$.parameters)==null?void 0:fe.docs)==null?void 0:ye.source}}};var Se,xe,Ee;G.parameters={...G.parameters,docs:{...(Se=G.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  name: "Ring Segment",
  render: args => <RingSegmentPreview {...args} />,
  args: {
    radius: 3,
    innerRadius: 1.2,
    rotationDeg: 20,
    angleDeg: 220,
    segments: 48
  },
  argTypes: {
    radius: {
      control: {
        type: "range",
        min: 0.1,
        max: 20,
        step: 0.1
      }
    },
    innerRadius: {
      control: {
        type: "range",
        min: 0,
        max: 20,
        step: 0.1
      }
    },
    rotationDeg: {
      control: {
        type: "range",
        min: -FULL_CIRCLE_DEG,
        max: FULL_CIRCLE_DEG,
        step: 1
      }
    },
    angleDeg: {
      control: {
        type: "range",
        min: 0,
        max: FULL_CIRCLE_DEG,
        step: 1
      }
    },
    segments: {
      control: {
        type: "range",
        min: 8,
        max: 256,
        step: 1
      }
    }
  }
}`,...(Ee=(xe=G.parameters)==null?void 0:xe.docs)==null?void 0:Ee.source}}};var he,Ce,_e;U.parameters={...U.parameters,docs:{...(he=U.parameters)==null?void 0:he.docs,source:{originalSource:`{
  name: "Stress Test",
  render: args => <StressPreview {...args} />,
  args: {
    contentMode: "unique-primitives",
    gridEdgeLength: 10,
    gridDepth: 10,
    spacing: 3.5,
    radius: 1.3,
    segments: 16
  },
  argTypes: {
    contentMode: {
      control: {
        type: "radio"
      },
      options: ["unit-disc", "unique-primitives"]
    },
    gridEdgeLength: {
      control: {
        type: "range",
        min: 1,
        max: 160,
        step: 1
      }
    },
    gridDepth: {
      control: {
        type: "range",
        min: 1,
        max: 160,
        step: 1
      }
    },
    spacing: {
      control: {
        type: "range",
        min: 0.2,
        max: 30,
        step: 0.1
      }
    },
    radius: {
      control: {
        type: "range",
        min: 0.1,
        max: 12,
        step: 0.1
      }
    },
    segments: {
      control: {
        type: "range",
        min: 8,
        max: 128,
        step: 1
      }
    }
  }
}`,...(_e=(Ce=U.parameters)==null?void 0:Ce.docs)==null?void 0:_e.source}}};const An=["Disc","Ring","RingSegment","StressTest"];export{N as Disc,$ as Ring,G as RingSegment,U as StressTest,An as __namedExportsOrder,Ln as default};
