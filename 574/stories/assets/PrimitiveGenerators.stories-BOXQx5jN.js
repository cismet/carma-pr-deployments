import{j as m}from"./jsx-runtime-DCY474Ph.js";import{r as u}from"./index-f9CH5uyH.js";import{c as h}from"./clamp-co6UzHBn.js";import{l as V}from"./interpolation-DcU5_EAt.js";import{C as F,a as D,c as Ge,b as Ue,d as je,e as se,G as re,f as oe,P as Fe,g as Be,M as B,T as De,h as qe,i as ke}from"./MinimalCesiumWidget-DDR7v3ZU.js";import{R as ze}from"./ResponsiveStatusBar-BwlXDh8K.js";/* empty css                */import"./pi-CcW9hJOg.js";import"./isMobile-CdJesEhN.js";import"./compact-item-C10s4LJk.js";import"./index-o4jIgCFn.js";typeof window<"u"&&!window.CESIUM_BASE_URL&&(window.CESIUM_BASE_URL=new URL("__cesium__/",document.baseURI).toString());const Ie="100vh",ae=.1,q=360,He=Math.PI*2,Ve=5,We=-Math.PI/2+.1,Y=F.fromDegrees(7.19993,51.27225,185),Ye=D.fromCssColorString("#0b1220"),Ke=D.fromCssColorString("#1a1a1a"),we=D.fromCssColorString("rgb(96, 165, 250)"),Xe=D.fromCssColorString("rgb(34, 197, 94)"),ve=D.fromCssColorString("rgb(251, 146, 60)"),ie=30,ce=240,O=160,Ze=.1,Je=.9,Le=1,me=.1,k=e=>e*Math.PI/180,E=(e,n)=>typeof e=="number"&&Number.isFinite(e)?e:n,M=(e,n=ae)=>Math.max(E(e,n),ae),H=(e,n=8)=>Math.max(8,Math.floor(E(e,n))),le=(e,n=1)=>Math.max(1,Math.floor(E(e,n))),Qe=(e,n=1)=>Math.max(.2,E(e,n)),z=(e,n)=>D.fromAlpha(e,h(n,0,1),new D),en=(e,n)=>h(e/M(n),0,1-.001),ge=(e,n)=>new Fe({geometryInstances:e,appearance:new Be({translucent:n,closed:!1}),allowPicking:!1,asynchronous:!0,releaseGeometryInstances:!0,show:!0}),nn=()=>typeof window>"u"?1:Math.max(1,window.devicePixelRatio||1),Te=e=>{e.useBrowserRecommendedResolution=!1,e.resolutionScale=nn()},K=(e,n,i,r=0)=>B.multiplyByPoint(De.eastNorthUpToFixedFrame(e),new F(n,i,r),new F),T=(e,n=1,i=0)=>{const r=De.eastNorthUpToFixedFrame(e),c=qe(F.ZERO,n,i,1e-6);return B.multiply(r,c,new B)},Me=e=>{const n=ke(e,{baseLayer:!1,skyBox:!1,skyAtmosphere:!1,requestRenderMode:!0,useBrowserRecommendedResolution:!1});return Te(n),n.scene.backgroundColor=Ye,n.scene.screenSpaceCameraController.enableCollisionDetection=!1,n.scene.globe&&(n.scene.globe.baseColor=Ke,n.scene.globe.showGroundAtmosphere=!1,n.scene.globe.enableLighting=!1),n},Ae=e=>{const n=()=>{e.isDestroyed()||(Te(e),e.scene.requestRender())};return window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)},j=(e,n)=>{if(!(!n||e.isDestroyed()))try{e.scene.primitives.remove(n)}catch{}},W=(e,n)=>{if(!e.isDestroyed()){for(const i of n.current)j(e,i);n.current=[]}},Pe=e=>{const n=K(Y,0,0,Ve);e.camera.setView({destination:n,orientation:{heading:0,pitch:We,roll:0}}),e.camera.lookAtTransform(B.IDENTITY)},f=(e,n=2)=>Number.isFinite(e)?e.toFixed(n):"0",be=({label:e,values:n})=>m.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,zIndex:1800,pointerEvents:"none"},children:m.jsx(ze,{label:e,values:n,tone:"dark"})}),X=({createPrimitive:e,statusLabel:n,statusValues:i})=>{const r=u.useRef(null),c=u.useRef(null),a=u.useRef(null);return u.useEffect(()=>{if(!r.current)return;const s=Me(r.current),t=Ae(s);return Pe(s),s.scene.requestRender(),c.current=s,()=>{t();const o=c.current;if(o){j(o,a.current),a.current=null;try{o.isDestroyed()||o.destroy()}catch{}c.current=null}}},[]),u.useEffect(()=>{const s=c.current;if(!s||s.isDestroyed())return;j(s,a.current);const t=K(Y,0,0,0),o=e(t);return s.scene.primitives.add(o),a.current=o,s.scene.requestRender(),()=>{j(s,a.current),a.current=null,s.isDestroyed()||s.scene.requestRender()}},[e]),m.jsxs("div",{style:{position:"relative",width:"100%",height:Ie},children:[m.jsx("div",{ref:r,style:{position:"absolute",inset:0}}),m.jsx(be,{label:n,values:i})]})},tn=({radius:e,segments:n})=>{const i=M(e,2.5),r=H(n,24),c=we,a=u.useCallback(s=>Ge("story-disc",{radius:i,segments:r,color:c,modelMatrix:T(s)}),[c,i,r]);return m.jsx(X,{createPrimitive:a,statusLabel:"createDisc",statusValues:[`radius ${f(i,2)}`,`segments ${r}`]})},sn=({radius:e,innerRadius:n,segments:i})=>{const r=M(e,3),c=Math.max(0,r-.001),a=h(E(n,r*.5),0,c),s=H(i,48),t=z(Xe,Le),o=u.useCallback(p=>Ue("story-ring",{radius:r,innerRadius:a,segments:s,color:t,modelMatrix:T(p)}),[t,a,r,s]);return m.jsx(X,{createPrimitive:o,statusLabel:"createRing",statusValues:[`radius ${f(r,2)}`,`inner ${f(a,2)}`,`segments ${s}`]})},rn=({radius:e,innerRadius:n,rotationDeg:i,angleDeg:r,segments:c})=>{const a=M(e,3),s=Math.max(0,a-.001),t=h(E(n,a*.4),0,s),o=H(c,48),p=E(i,20),d=h(E(r,220),0,q),y=z(ve,Le),L=u.useCallback(I=>je("story-ring-segment",{radius:a,innerRadius:t,angleRad:k(d),rotationRad:k(p),segments:o,color:y,modelMatrix:T(I)}),[y,t,p,a,o,d]);return m.jsx(X,{createPrimitive:L,statusLabel:"createRingSegment",statusValues:[`radius ${f(a,2)}`,`inner ${f(t,2)}`,`rotation ${f(p,1)}°`,`angle ${f(d,1)}°`,`segments ${o}`]})},on=({contentMode:e,gridEdgeLength:n,gridDepth:i,spacing:r,radius:c,segments:a})=>{const s=e==="unit-disc"?"unit-disc":"unique-primitives",t=le(n,10),o=le(i,10),p=Qe(r,3.5),d=M(c,1.3),y=H(a,16),L=u.useRef(null),I=u.useRef(null),A=u.useRef([]);u.useEffect(()=>{if(!L.current)return;const g=Me(L.current),P=Ae(g);return Pe(g),g.scene.requestRender(),I.current=g,()=>{P();const w=I.current;if(w){W(w,A);try{w.isDestroyed()||w.destroy()}catch{}I.current=null}}},[]),u.useEffect(()=>{const g=I.current;if(!g||g.isDestroyed())return;W(g,A);const P=(t-1)/2,w=(o-1)/2,Z=z(we,me),J=z(ve,me),Q=Math.max(0,d-.001),ee=h(d*Ze,0,Q),Ne=h(d*Je,ee,Q),ne=Array.from({length:t*t*o},(C,v)=>{const R=t*t,l=Math.floor(v/R),_=v%R,x=Math.floor(_/t),S=_%t;return{layer:l,row:x,col:S,rowRatio:t<=1?0:x/(t-1),colRatio:t<=1?0:S/(t-1),layerRatio:o<=1?0:l/(o-1),center:K(Y,(S-P)*p,(x-P)*p,(l-w)*p)}}),te=s==="unit-disc"?(()=>{const C=se({innerRadiusRatio:0,angleRad:He,segments:y}),v=ne.map(R=>new re({id:`stress-disc-${R.layer}-${R.row}-${R.col}`,geometry:C,modelMatrix:T(R.center,d),attributes:{color:oe.fromColor(Z)}}));return[ge(v,Z.alpha<1)]})():(()=>{const C=new Map,v=(l,_)=>{const x=`${l.toFixed(6)}|${_.toFixed(6)}|${y}`,S=C.get(x);if(S)return S;const b=se({innerRadiusRatio:l,angleRad:_,segments:y});return C.set(x,b),b},R=ne.map(l=>{const _=V(ie-O*.5,ie+O*.5,l.colRatio),x=h(V(ce-O*.5,ce+O*.5,l.rowRatio),0,q),S=V(ee,Ne,l.layerRatio),b=en(S,d),$e=k(x);return new re({id:`stress-sector-${l.layer}-${l.row}-${l.col}`,geometry:v(b,$e),modelMatrix:T(l.center,d,k(_)),attributes:{color:oe.fromColor(J)}})});return[ge(R,J.alpha<1)]})();for(const C of te)g.scene.primitives.add(C);return A.current=te,g.scene.requestRender(),()=>{W(g,A),g.isDestroyed()||g.scene.requestRender()}},[s,o,t,d,y,p]);const Oe=t*t*o;return m.jsxs("div",{style:{position:"relative",width:"100%",height:Ie},children:[m.jsx("div",{ref:L,style:{position:"absolute",inset:0}}),m.jsx(be,{label:"stress test",values:[`mode ${s}`,`grid ${t}x${t}x${o}`,`total ${Oe}`,`spacing ${f(p,2)}`,`radius ${f(d,2)}`,`segments ${y}`]})]})},xn={title:"Mapping/Cesium",parameters:{layout:"fullscreen"}},N={name:"Disc",render:e=>m.jsx(tn,{...e}),args:{radius:2.5,segments:24},argTypes:{radius:{control:{type:"range",min:.1,max:20,step:.1}},segments:{control:{type:"range",min:8,max:256,step:1}}}},$={name:"Ring",render:e=>m.jsx(sn,{...e}),args:{radius:3,innerRadius:1.4,segments:48},argTypes:{radius:{control:{type:"range",min:.1,max:20,step:.1}},innerRadius:{control:{type:"range",min:0,max:20,step:.1}},segments:{control:{type:"range",min:8,max:256,step:1}}}},G={name:"Ring Segment",render:e=>m.jsx(rn,{...e}),args:{radius:3,innerRadius:1.2,rotationDeg:20,angleDeg:220,segments:48},argTypes:{radius:{control:{type:"range",min:.1,max:20,step:.1}},innerRadius:{control:{type:"range",min:0,max:20,step:.1}},rotationDeg:{control:{type:"range",min:-360,max:q,step:1}},angleDeg:{control:{type:"range",min:0,max:q,step:1}},segments:{control:{type:"range",min:8,max:256,step:1}}}},U={name:"Stress Test",render:e=>m.jsx(on,{...e}),args:{contentMode:"unique-primitives",gridEdgeLength:10,gridDepth:10,spacing:3.5,radius:1.3,segments:16},argTypes:{contentMode:{control:{type:"radio"},options:["unit-disc","unique-primitives"]},gridEdgeLength:{control:{type:"range",min:1,max:160,step:1}},gridDepth:{control:{type:"range",min:1,max:160,step:1}},spacing:{control:{type:"range",min:.2,max:30,step:.1}},radius:{control:{type:"range",min:.1,max:12,step:.1}},segments:{control:{type:"range",min:8,max:128,step:1}}}};var ue,de,pe;N.parameters={...N.parameters,docs:{...(ue=N.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(ye=(fe=$.parameters)==null?void 0:fe.docs)==null?void 0:ye.source}}};var xe,Se,he;G.parameters={...G.parameters,docs:{...(xe=G.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
}`,...(he=(Se=G.parameters)==null?void 0:Se.docs)==null?void 0:he.source}}};var Ee,Ce,_e;U.parameters={...U.parameters,docs:{...(Ee=U.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
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
}`,...(_e=(Ce=U.parameters)==null?void 0:Ce.docs)==null?void 0:_e.source}}};const Sn=["Disc","Ring","RingSegment","StressTest"];export{N as Disc,$ as Ring,G as RingSegment,U as StressTest,Sn as __namedExportsOrder,xn as default};
