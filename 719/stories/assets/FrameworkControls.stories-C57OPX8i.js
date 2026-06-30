import{j as m}from"./jsx-runtime-DCY474Ph.js";import{r as n}from"./index-f9CH5uyH.js";import{m as pe}from"./maplibre-gl-Mry-7x4X.js";import"./wms-BW9Y-bW-.js";import{W,s as de}from"./cesium-setup-BGBGg6DT.js";import{R as Me}from"./lib-DSuZU_oB.js";import{N as d,D as C,u as L,V as P,s as Oe,r as be}from"./viewSyncStoryHooks-DofeoI_k.js";import"./ControlButtonStyler-D9fm0EtD.js";import"./custom-shaders-DwgXF10T.js";import"./index-Bwr7gTdO.js";import{i as De}from"./leaflet-setup-D91ck8pi.js";import{r as B}from"./cesiumRuntimeGuards-BjF3lXGS.js";import{H as ne,a as oe,Z as x,b as F,c as h,r as V,D as ie,d as re,M as j,e as $,f as ge,g as ae,h as f,i as w,j as se}from"./framework-controls.story-helpers-0Rt0dRLT.js";import{s as _e,c as Z,b as Ae,C as R,a as Re,G as Te,d as Ie}from"./viewSyncStoryShared-DHOS7du_.js";import"./widgets-D0rkcmbN.js";/* empty css                *//* empty css                    */import"./three.module-BMbCMmAQ.js";import"./angles-B5wuhJLI.js";import"./pi-BNTPxsWB.js";import"./FrameWait-zIoXJDSO.js";import"./carma-guards-BPWPLOnr.js";import"./Scene-Co_xuLXT.js";import"./CesiumWidget-BHFXfN4B.js";import"./compass-needle-dom-CuGnMi9k.js";import"./clamp-co6UzHBn.js";import"./ua-parser-0-IaBt0J.js";import"./context-CiCNZroC.js";import"./index-o4jIgCFn.js";import"./Compact-D84AvItp.js";import"./Picking-rGKLXdsa.js";import"./cesium-BI2mCK59.js";import"./camera-intrinsics-utils-CRfooPuE.js";import"./Intrinsics-CBZjThl0.js";import"./construct-YQzC4_WF.js";import"./geodetic-BlUMYLim.js";import"./ObjectCentricViewStateInfoBox-Ds2KeaSw.js";import"./sampleTerrainMostDetailed-DfO2lgAZ.js";import"./negative-pi-to-pi-B-FiLZ9M.js";import"./mercator-wo1U-jlG.js";import"./create-view-state-visualizer-BjII-q-_.js";import"./angle-normalization-D3Clryc1.js";import"./derivations-C3AQ4Iwj.js";import"./plane-intersections-DhJfyQJx.js";import"./constants-C6-_E4xW.js";import"./geometry2d-zFkirL7N.js";import"./Line2-DHn9v7Nx.js";import"./button-FI60s9M4.js";import"./useSize-8eQ5Rj7d.js";import"./private-shims-5e5gEO17.js";const yt={title:"Mapping/Controls",parameters:{layout:"fullscreen"}},fe={..._e,minHeight:"100vh",height:"100vh"},Ee={position:"relative",flex:1,minHeight:0,overflow:"hidden",background:"#cbd5e1"},Se={position:"absolute",left:0,right:0,bottom:0,zIndex:20},G=e=>Number.isFinite(e)?e.toFixed(3).replace(/0+$/u,"").replace(/\.$/u,""):"1",I=(e,o)=>typeof e=="number"&&Number.isFinite(e)?e.toFixed(o).replace(/0+$/u,"").replace(/\.$/u,""):null,ve=(e,o)=>e?(()=>{const O=I((o==null?void 0:o.averageFps)??null,1),r=I((o==null?void 0:o.averageRenderMs)??null,2),c=o!==null?` • last ${o.activityKey} ${O??"?"} fps / ${r??"?"} ms`:"",u=e.lastScaleChange,a=u!==null?` • scale ${G(u.previousRenderScale)}→${G(u.nextRenderScale)} (${u.reason})`:"",M=I(e.measuredFps,1),s=I(e.averageRenderMs,2),i=e.drawingBufferPixels!==null?I(e.drawingBufferPixels/1e6,2):null,b=e.active&&M!==null?` • ${M} fps / ${s??"?"} ms`:"",t=i!==null?` • ${i} Mpx`:"";return`Cesium Reference • target ${e.targetFps} fps • scale ${G(e.renderScale)}×${t}${b}${c}${a}`})():"Cesium Reference",U=({label:e,children:o})=>m.jsx("div",{style:fe,children:m.jsxs("div",{style:Ee,children:[o,m.jsx("div",{style:Se,children:m.jsx(Me,{text:e,tone:"dark"})})]})}),ye=({zoomDelta:e=w.ONE,animate:o=!0,durationMs:O=250,homeAnimate:r=!0,homeDurationMs:c=900})=>{const u=n.useRef(null),[a,M]=n.useState(null),s=n.useMemo(()=>Z(),[]),i=n.useMemo(()=>ae({animate:r,durationMs:c}),[r,c]),b=n.useMemo(()=>f({zoomDelta:e,animate:o,durationMs:O}),[o,O,e]);return n.useEffect(()=>{const t=u.current;if(!t)return;const g=De(t,{zoomDelta:e}),_=Ae(s,t.clientWidth,t.clientHeight);return _&&g.setView(_.center,_.zoom),M({engine:R.LEAFLET,map:g,container:t,viewSync:null}),()=>{M(null),g.remove()}},[s]),n.useEffect(()=>{const t=a==null?void 0:a.map;t&&(t.options.zoomSnap=e,t.options.zoomDelta=e)},[a,e]),L(u,()=>{a==null||a.map.invalidateSize(!1)}),m.jsxs(U,{label:"Leaflet Reference",children:[m.jsx("div",{ref:u,style:{position:"absolute",inset:0}}),m.jsx(P,{controlId:"leaflet-reference",engine:R.LEAFLET,runtimeHandle:a,homeTarget:s,showCompass:!1,homeOptions:i,zoomOptions:b})]})},he=({orbitRevolutionDurationSec:e=C,orbitDirection:o=d.CW,orbitMinPitchDeg:O=30,zoomDelta:r=w.ONE,animate:c=!0,durationMs:u=250,homeAnimate:a=!0,homeDurationMs:M=900})=>{const s=n.useRef(null),[i,b]=n.useState(null),t=n.useMemo(()=>Z(),[]),g=n.useMemo(()=>ae({animate:a,durationMs:M}),[a,M]),_=n.useMemo(()=>se({direction:o,revolutionDurationSec:e,minPitchDeg:O}),[o,O,e]),T=n.useMemo(()=>f({zoomDelta:r,animate:c,durationMs:u}),[c,u,r]);return n.useEffect(()=>{const D=s.current;if(!D)return;const l=Re(t,D.clientWidth,D.clientHeight),A=new pe.Map({container:D,style:Te,center:l?l.center:[W.position.longitude,W.position.latitude],zoom:(l==null?void 0:l.zoom)??16.5,bearing:(l==null?void 0:l.bearing)??0,pitch:(l==null?void 0:l.pitch)??0,zoomSnap:r,attributionControl:!1,hash:!1});return b({engine:R.MAPLIBRE_GL,map:A,container:D,viewSync:null}),()=>{b(null),A.remove()}},[t]),n.useEffect(()=>{const D=i==null?void 0:i.map;D&&D.setZoomSnap(r)},[i,r]),L(s,()=>{i==null||i.map.resize()}),m.jsxs(U,{label:"MapLibre GL JS Reference",children:[m.jsx("div",{ref:s,style:{position:"absolute",inset:0}}),m.jsx(P,{controlId:"maplibre-reference",engine:R.MAPLIBRE_GL,runtimeHandle:i,homeTarget:t,showOrbitControl:!0,homeOptions:g,orbitOptions:_,zoomOptions:T})]})},Ce=({orbitDirection:e=d.CW,orbitRevolutionDurationSec:o=C,orbitMinPitchDeg:O=30,zoomDelta:r=w.ONE,animate:c=!0,travelDurationMs:u=250,fovDurationMs:a=250,dollyDurationMs:M=2e3,minimumFovDeg:s=ie,maximumFovDeg:i=re})=>{const b=n.useRef(null),[t,g]=n.useState(null),[_,T]=n.useState(null),[D,l]=n.useState(null),A=n.useMemo(()=>Z({fovVerticalDeg:60}),[]),me=n.useMemo(()=>se({direction:e,revolutionDurationSec:o,minPitchDeg:O}),[e,O,o]),le=n.useMemo(()=>f({zoomDelta:r,animate:c,durationMs:u,minimumFovDeg:s,maximumFovDeg:i}),[c,i,s,u,r]),ce=n.useMemo(()=>f({zoomDelta:r,animate:c,durationMs:a,minimumFovDeg:s,maximumFovDeg:i}),[c,a,i,s,r]),ue=n.useMemo(()=>f({zoomDelta:r,animate:c,durationMs:M,minimumFovDeg:s,maximumFovDeg:i}),[c,M,i,s,r]);return n.useEffect(()=>{const N=b.current;if(!N)return;let Y=!1,E=null,z=()=>{};return(async()=>{const p=await de(N,{useBrowserRecommendedResolution:!1});if(Y){p.widget.isDestroyed()||p.widget.destroy();return}p.terrainProviders.TERRAIN&&(p.widget.scene.terrainProvider=p.terrainProviders.TERRAIN),Ie({widget:p.widget,state:A}),B(p.widget),E=p.widget,z=be(p.widget,{targetFps:144,restingScale:1,onActivitySummary:l}),g({engine:R.CESIUM,widget:p.widget,container:N,terrainProviders:p.terrainProviders,viewSync:null})})().catch(p=>{console.error("[STORY][CONTROLS] Failed to initialize Cesium story",p)}),()=>{Y=!0,z(),T(null),l(null),g(null),E&&!E.isDestroyed()&&E.destroy()}},[A]),n.useEffect(()=>{if(!t){T(null),l(null);return}return Oe(t.widget,T)},[t]),L(b,()=>{!(t!=null&&t.widget)||t.widget.isDestroyed()||(t.widget.resize(),B(t.widget))}),m.jsxs(U,{label:ve(_,D),children:[m.jsx("div",{ref:b,style:{position:"absolute",inset:0}}),m.jsx(P,{controlId:"cesium-reference",engine:R.CESIUM,runtimeHandle:t,homeTarget:A,showOrbitControl:!0,orbitOptions:me,showFovZoomControl:!0,showDollyZoomControl:!0,zoomOptions:le,fovZoomOptions:ce,dollyZoomOptions:ue})]})},S={args:{homeAnimate:!0,homeDurationMs:900,zoomDelta:"one",animate:!0,durationMs:250},argTypes:{homeAnimate:{...ne,table:{category:"Home"}},homeDurationMs:{...oe,if:{arg:"homeAnimate"},table:{category:"Home"}},zoomDelta:x,animate:F,durationMs:h},render:e=>m.jsx(ye,{homeAnimate:e.homeAnimate,homeDurationMs:e.homeDurationMs,zoomDelta:V(e.zoomDelta),animate:e.animate,durationMs:e.durationMs})},v={name:"MapLibre GL JS",args:{homeAnimate:!0,homeDurationMs:900,orbitDirection:d.CW,orbitRevolutionDurationSec:C,orbitMinPitchDeg:30,zoomDelta:"one",animate:!0,durationMs:250},argTypes:{homeAnimate:{...ne,table:{category:"Home"}},homeDurationMs:{...oe,if:{arg:"homeAnimate"},table:{category:"Home"}},orbitDirection:{name:"orbit direction",options:[d.CW,d.CCW],control:{type:"inline-radio"},labels:{[d.CW]:"cw",[d.CCW]:"ccw"},table:{category:"Orbit"}},orbitRevolutionDurationSec:{name:"orbit revolution duration (s)",control:{type:"range",min:4,max:120,step:1},table:{category:"Orbit"}},orbitMinPitchDeg:{name:"orbit min pitch (deg)",control:{type:"range",min:0,max:85,step:1},table:{category:"Orbit"}},zoomDelta:x,animate:F,durationMs:h},render:e=>m.jsx(he,{homeAnimate:e.homeAnimate,homeDurationMs:e.homeDurationMs,orbitDirection:e.orbitDirection,orbitRevolutionDurationSec:e.orbitRevolutionDurationSec,orbitMinPitchDeg:e.orbitMinPitchDeg,zoomDelta:V(e.zoomDelta),animate:e.animate,durationMs:e.durationMs})},y={args:{orbitDirection:d.CW,orbitRevolutionDurationSec:C,orbitMinPitchDeg:30,zoomDelta:"one",animate:!0,travelDurationMs:250,fovDurationMs:250,dollyDurationMs:2e3,minimumFovDeg:ie,maximumFovDeg:re},argTypes:{orbitDirection:{name:"orbit direction",options:[d.CW,d.CCW],control:{type:"inline-radio"},labels:{[d.CW]:"cw",[d.CCW]:"ccw"},table:{category:"Orbit"}},orbitRevolutionDurationSec:{name:"orbit revolution duration (s)",control:{type:"range",min:4,max:120,step:1},table:{category:"Orbit"}},orbitMinPitchDeg:{name:"orbit min pitch (deg)",control:{type:"range",min:0,max:85,step:1},table:{category:"Orbit"}},minimumFovDeg:{name:"minimum fov (deg)",control:{type:"number",min:j,max:$,step:.1},table:{category:"Zoom · FOV"}},maximumFovDeg:{name:"maximum fov (deg)",control:{type:"number",min:j,max:$,step:.1},table:{category:"Zoom · FOV"}},zoomDelta:{...x,table:{category:"Zoom · General"}},animate:{...F,table:{category:"Zoom · General"}},travelDurationMs:{...h,name:"travel duration (ms)",description:"Applies to the primary travel zoom buttons.",table:{category:"Zoom · Travel"}},fovDurationMs:{...h,name:"fov duration (ms)",description:"Applies to the camera-only FOV zoom buttons.",table:{category:"Zoom · FOV"}},dollyDurationMs:{...ge,name:"dolly duration (ms)",description:"Applies to the synchronized travel + FOV dolly buttons.",table:{category:"Zoom · Dolly"}}},render:e=>m.jsx(Ce,{orbitDirection:e.orbitDirection,orbitRevolutionDurationSec:e.orbitRevolutionDurationSec,orbitMinPitchDeg:e.orbitMinPitchDeg,minimumFovDeg:e.minimumFovDeg,maximumFovDeg:e.maximumFovDeg,zoomDelta:V(e.zoomDelta),animate:e.animate,travelDurationMs:e.travelDurationMs,fovDurationMs:e.fovDurationMs,dollyDurationMs:e.dollyDurationMs})};var H,J,X;S.parameters={...S.parameters,docs:{...(H=S.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    homeAnimate: true,
    homeDurationMs: 900,
    zoomDelta: "one",
    animate: true,
    durationMs: 250
  },
  argTypes: {
    homeAnimate: {
      ...HOME_ANIMATE_ARG_TYPE,
      table: {
        category: "Home"
      }
    },
    homeDurationMs: {
      ...HOME_DURATION_ARG_TYPE,
      if: {
        arg: "homeAnimate"
      },
      table: {
        category: "Home"
      }
    },
    zoomDelta: ZOOM_DELTA_ARG_TYPE,
    animate: ZOOM_ANIMATE_ARG_TYPE,
    durationMs: ZOOM_DURATION_ARG_TYPE
  },
  render: args => <LeafletReferenceSurface homeAnimate={args.homeAnimate} homeDurationMs={args.homeDurationMs} zoomDelta={readZoomDeltaArgValue(args.zoomDelta)} animate={args.animate} durationMs={args.durationMs} />
}`,...(X=(J=S.parameters)==null?void 0:J.docs)==null?void 0:X.source}}};var k,q,K;v.parameters={...v.parameters,docs:{...(k=v.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: "MapLibre GL JS",
  args: {
    homeAnimate: true,
    homeDurationMs: 900,
    orbitDirection: NAVIGATION_ORBIT_DIRECTIONS.CW,
    orbitRevolutionDurationSec: DEFAULT_NAVIGATION_ORBIT_REVOLUTION_DURATION_SEC,
    orbitMinPitchDeg: 30,
    zoomDelta: "one",
    animate: true,
    durationMs: 250
  },
  argTypes: {
    homeAnimate: {
      ...HOME_ANIMATE_ARG_TYPE,
      table: {
        category: "Home"
      }
    },
    homeDurationMs: {
      ...HOME_DURATION_ARG_TYPE,
      if: {
        arg: "homeAnimate"
      },
      table: {
        category: "Home"
      }
    },
    orbitDirection: {
      name: "orbit direction",
      options: [NAVIGATION_ORBIT_DIRECTIONS.CW, NAVIGATION_ORBIT_DIRECTIONS.CCW],
      control: {
        type: "inline-radio"
      },
      labels: {
        [NAVIGATION_ORBIT_DIRECTIONS.CW]: "cw",
        [NAVIGATION_ORBIT_DIRECTIONS.CCW]: "ccw"
      },
      table: {
        category: "Orbit"
      }
    },
    orbitRevolutionDurationSec: {
      name: "orbit revolution duration (s)",
      control: {
        type: "range",
        min: 4,
        max: 120,
        step: 1
      },
      table: {
        category: "Orbit"
      }
    },
    orbitMinPitchDeg: {
      name: "orbit min pitch (deg)",
      control: {
        type: "range",
        min: 0,
        max: 85,
        step: 1
      },
      table: {
        category: "Orbit"
      }
    },
    zoomDelta: ZOOM_DELTA_ARG_TYPE,
    animate: ZOOM_ANIMATE_ARG_TYPE,
    durationMs: ZOOM_DURATION_ARG_TYPE
  },
  render: args => <MapLibreReferenceSurface homeAnimate={args.homeAnimate} homeDurationMs={args.homeDurationMs} orbitDirection={args.orbitDirection} orbitRevolutionDurationSec={args.orbitRevolutionDurationSec} orbitMinPitchDeg={args.orbitMinPitchDeg} zoomDelta={readZoomDeltaArgValue(args.zoomDelta)} animate={args.animate} durationMs={args.durationMs} />
}`,...(K=(q=v.parameters)==null?void 0:q.docs)==null?void 0:K.source}}};var Q,ee,te;y.parameters={...y.parameters,docs:{...(Q=y.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    orbitDirection: NAVIGATION_ORBIT_DIRECTIONS.CW,
    orbitRevolutionDurationSec: DEFAULT_NAVIGATION_ORBIT_REVOLUTION_DURATION_SEC,
    orbitMinPitchDeg: 30,
    zoomDelta: "one",
    animate: true,
    travelDurationMs: 250,
    fovDurationMs: 250,
    dollyDurationMs: 2000,
    minimumFovDeg: DEFAULT_STORY_CESIUM_MINIMUM_FOV_DEG,
    maximumFovDeg: DEFAULT_STORY_CESIUM_MAXIMUM_FOV_DEG
  },
  argTypes: {
    orbitDirection: {
      name: "orbit direction",
      options: [NAVIGATION_ORBIT_DIRECTIONS.CW, NAVIGATION_ORBIT_DIRECTIONS.CCW],
      control: {
        type: "inline-radio"
      },
      labels: {
        [NAVIGATION_ORBIT_DIRECTIONS.CW]: "cw",
        [NAVIGATION_ORBIT_DIRECTIONS.CCW]: "ccw"
      },
      table: {
        category: "Orbit"
      }
    },
    orbitRevolutionDurationSec: {
      name: "orbit revolution duration (s)",
      control: {
        type: "range",
        min: 4,
        max: 120,
        step: 1
      },
      table: {
        category: "Orbit"
      }
    },
    orbitMinPitchDeg: {
      name: "orbit min pitch (deg)",
      control: {
        type: "range",
        min: 0,
        max: 85,
        step: 1
      },
      table: {
        category: "Orbit"
      }
    },
    minimumFovDeg: {
      name: "minimum fov (deg)",
      control: {
        type: "number",
        min: MIN_STORY_CESIUM_FOV_DEG,
        max: MAX_STORY_CESIUM_FOV_DEG,
        step: 0.1
      },
      table: {
        category: "Zoom · FOV"
      }
    },
    maximumFovDeg: {
      name: "maximum fov (deg)",
      control: {
        type: "number",
        min: MIN_STORY_CESIUM_FOV_DEG,
        max: MAX_STORY_CESIUM_FOV_DEG,
        step: 0.1
      },
      table: {
        category: "Zoom · FOV"
      }
    },
    zoomDelta: {
      ...ZOOM_DELTA_ARG_TYPE,
      table: {
        category: "Zoom · General"
      }
    },
    animate: {
      ...ZOOM_ANIMATE_ARG_TYPE,
      table: {
        category: "Zoom · General"
      }
    },
    travelDurationMs: {
      ...ZOOM_DURATION_ARG_TYPE,
      name: "travel duration (ms)",
      description: "Applies to the primary travel zoom buttons.",
      table: {
        category: "Zoom · Travel"
      }
    },
    fovDurationMs: {
      ...ZOOM_DURATION_ARG_TYPE,
      name: "fov duration (ms)",
      description: "Applies to the camera-only FOV zoom buttons.",
      table: {
        category: "Zoom · FOV"
      }
    },
    dollyDurationMs: {
      ...DOLLY_ZOOM_DURATION_ARG_TYPE,
      name: "dolly duration (ms)",
      description: "Applies to the synchronized travel + FOV dolly buttons.",
      table: {
        category: "Zoom · Dolly"
      }
    }
  },
  render: args => <CesiumReferenceSurface orbitDirection={args.orbitDirection} orbitRevolutionDurationSec={args.orbitRevolutionDurationSec} orbitMinPitchDeg={args.orbitMinPitchDeg} minimumFovDeg={args.minimumFovDeg} maximumFovDeg={args.maximumFovDeg} zoomDelta={readZoomDeltaArgValue(args.zoomDelta)} animate={args.animate} travelDurationMs={args.travelDurationMs} fovDurationMs={args.fovDurationMs} dollyDurationMs={args.dollyDurationMs} />
}`,...(te=(ee=y.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};const ht=["Leaflet","MapLibreGLJS","Cesium"];export{y as Cesium,S as Leaflet,v as MapLibreGLJS,ht as __namedExportsOrder,yt as default};
