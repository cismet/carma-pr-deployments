import{j as u}from"./jsx-runtime-DCY474Ph.js";import{r as o}from"./index-f9CH5uyH.js";import{m as De}from"./maplibre-gl-fs-Ci3W0.js";import"./tileset3d-BrFpS7ZR.js";import{W as j,s as ge}from"./cesium-setup-BQeGFqAb.js";import{R as be}from"./ResponsiveStatusBar-Ck_s0-gT.js";import"./index-CbO9wH0d.js";import{N as D,D as h,u as P,V as w,s as _e,r as Me}from"./maplibre-gl-CaNI7vSU.js";import"./ControlButtonStyler-QeN6XDzf.js";import"./createRingSegment-CIBPlpEf.js";import{s as Ae,c as V,b as Re,C as T,a as Te,G as Ee,d as fe}from"./viewSyncStoryShared-DCwObsSJ.js";import{i as Ie}from"./leaflet-B9ZDmSjF.js";import{r as J}from"./cesiumRuntimeGuards-BjF3lXGS.js";import{d as X}from"./angles-DDSQPScU.js";import"./widgets-DPMldP-u.js";import"./three.module-DzkIFmz1.js";import"./CesiumWidget-F7BWtXoI.js";import"./compass-needle-dom-CMN5iTKz.js";import"./pi-CbcS5xMh.js";import"./clamp-co6UzHBn.js";import"./createLineVisualizer-Dk-awRat.js";import"./geodetic-BZRRboRE.js";import"./useSize-BnqR6ach.js";import"./index-o4jIgCFn.js";import"./context-Bg-b4Q6A.js";import"./button-CYLHmVZz.js";import"./cesium-D14z0OIG.js";import"./derivations-Dua_HNfC.js";import"./mercator-CrfHN9lT.js";import"./construct-CuP4lu0j.js";import"./ObjectCentricViewStateInfoBox-CO5aEr69.js";import"./sampleTerrainMostDetailed-C0RW_-en.js";import"./create-view-state-visualizer-C2DYVj8t.js";import"./angle-normalization-DfY_rR75.js";import"./plane-intersections-DhJfyQJx.js";import"./constants-C6-_E4xW.js";import"./geometry2d-BgvfrEuo.js";import"./negative-pi-to-pi-B-FiLZ9M.js";const O={QUARTER:.25,THIRD:1/3,HALF:.5,TWO_THIRDS:2/3,ONE_AND_HALF:1.5,ONE:1,TWO:2,THREE:3},G=.1,U=2,Z=120,x=179,he=["quarter","third","half","two-thirds","one","one-and-half","two","three"],ve={quarter:O.QUARTER,third:O.THIRD,half:O.HALF,"two-thirds":O.TWO_THIRDS,one:O.ONE,"one-and-half":O.ONE_AND_HALF,two:O.TWO,three:O.THREE},Se=e=>typeof e=="number"&&Number.isFinite(e)&&e>0?e:h,ae=e=>typeof e=="number"&&Number.isFinite(e)&&e>0?e:O.ONE,q=(e,t)=>typeof e=="number"&&Number.isFinite(e)?Math.min(Math.max(e,G),x):t,ye=({minimumFovDeg:e,maximumFovDeg:t})=>{const r=q(e,U),i=q(t,Z);return{minimumFovDeg:Math.min(r,i),maximumFovDeg:Math.max(r,i)}},Y=e=>typeof e=="string"?ve[e]??O.ONE:ae(e),se=({animate:e=!0,durationMs:t=900})=>({duration:e&&t>0?t:0}),me=({direction:e=D.CW,revolutionDurationSec:t,durationMs:r,minPitchDeg:i,rangeM:s})=>({direction:e,revolutionDurationSec:Se(t),duration:r,minPitchDeg:i,rangeM:s}),I=({zoomDelta:e,animate:t=!0,durationMs:r=250,minimumFovDeg:i,maximumFovDeg:s})=>{const m=ye({minimumFovDeg:i,maximumFovDeg:s});return{minimumFovRad:X(m.minimumFovDeg),maximumFovRad:X(m.maximumFovDeg),zoomDelta:ae(e),duration:t&&typeof r=="number"&&Number.isFinite(r)&&r>0?r:0}},W={name:"zoomDelta",options:he,control:{type:"inline-radio",labels:{quarter:"⁠¼",third:"⁠⁠⅓",half:"⁠⁠⁠½","two-thirds":"⁠⁠⁠⁠⅔",one:"⁠⁠⁠⁠⁠1","one-and-half":"⁠⁠⁠⁠⁠⁠1½",two:"⁠⁠⁠⁠⁠⁠⁠2",three:"⁠⁠⁠⁠⁠⁠⁠⁠3"}}},le={name:"animate",control:{type:"boolean"}},ce={name:"duration (ms)",control:{type:"range",min:0,max:3e3,step:50},if:{arg:"homeAnimate"}},z={name:"animate",control:{type:"boolean"}},C={name:"duration (ms)",control:{type:"range",min:0,max:1200,step:25},if:{arg:"animate"}},Ne={name:"duration (ms)",control:{type:"range",min:0,max:4e3,step:25},if:{arg:"animate"}},Et={title:"Mapping/Controls",parameters:{layout:"fullscreen"}},Ce={...Ae,minHeight:"100vh",height:"100vh"},Fe={position:"relative",flex:1,minHeight:0,overflow:"hidden",background:"#cbd5e1"},Le={position:"absolute",left:0,right:0,bottom:0,zIndex:20},L=e=>Number.isFinite(e)?e.toFixed(3).replace(/0+$/u,"").replace(/\.$/u,""):"1",f=(e,t)=>typeof e=="number"&&Number.isFinite(e)?e.toFixed(t).replace(/0+$/u,"").replace(/\.$/u,""):null,Ge=(e,t)=>e?(()=>{const r=f((t==null?void 0:t.averageFps)??null,1),i=f((t==null?void 0:t.averageRenderMs)??null,2),s=t!==null?` • last ${t.activityKey} ${r??"?"} fps / ${i??"?"} ms`:"",m=e.lastScaleChange,l=m!==null?` • scale ${L(m.previousRenderScale)}→${L(m.nextRenderScale)} (${m.reason})`:"",g=f(e.measuredFps,1),c=f(e.averageRenderMs,2),a=e.drawingBufferPixels!==null?f(e.drawingBufferPixels/1e6,2):null,b=e.active&&g!==null?` • ${g} fps / ${c??"?"} ms`:"",n=a!==null?` • ${a} Mpx`:"";return`Cesium Reference • target ${e.targetFps} fps • scale ${L(e.renderScale)}×${n}${b}${s}${l}`})():"Cesium Reference",H=({label:e,children:t})=>u.jsx("div",{style:Ce,children:u.jsxs("div",{style:Fe,children:[t,u.jsx("div",{style:Le,children:u.jsx(be,{text:e,tone:"dark"})})]})}),xe=({zoomDelta:e=O.ONE,animate:t=!0,durationMs:r=250,homeAnimate:i=!0,homeDurationMs:s=900})=>{const m=o.useRef(null),[l,g]=o.useState(null),c=o.useMemo(()=>V(),[]),a=o.useMemo(()=>se({animate:i,durationMs:s}),[i,s]),b=o.useMemo(()=>I({zoomDelta:e,animate:t,durationMs:r}),[t,r,e]);return o.useEffect(()=>{const n=m.current;if(!n)return;const M=Ie(n,{zoomDelta:e}),A=Re(c,n.clientWidth,n.clientHeight);return A&&M.setView(A.center,A.zoom),g({engine:T.LEAFLET,map:M,container:n,viewSync:null}),()=>{g(null),M.remove()}},[c]),o.useEffect(()=>{const n=l==null?void 0:l.map;n&&(n.options.zoomSnap=e,n.options.zoomDelta=e)},[l,e]),P(m,()=>{l==null||l.map.invalidateSize(!1)}),u.jsxs(H,{label:"Leaflet Reference",children:[u.jsx("div",{ref:m,style:{position:"absolute",inset:0}}),u.jsx(w,{controlId:"leaflet-reference",engine:T.LEAFLET,runtimeHandle:l,homeTarget:c,showCompass:!1,homeOptions:a,zoomOptions:b})]})},Pe=({orbitRevolutionDurationSec:e=h,orbitDirection:t=D.CW,orbitMinPitchDeg:r=30,zoomDelta:i=O.ONE,animate:s=!0,durationMs:m=250,homeAnimate:l=!0,homeDurationMs:g=900})=>{const c=o.useRef(null),[a,b]=o.useState(null),n=o.useMemo(()=>V(),[]),M=o.useMemo(()=>se({animate:l,durationMs:g}),[l,g]),A=o.useMemo(()=>me({direction:t,revolutionDurationSec:e,minPitchDeg:r}),[t,r,e]),E=o.useMemo(()=>I({zoomDelta:i,animate:s,durationMs:m}),[s,m,i]);return o.useEffect(()=>{const _=c.current;if(!_)return;const p=Te(n,_.clientWidth,_.clientHeight),R=new De.Map({container:_,style:Ee,center:p?p.center:[j.position.longitude,j.position.latitude],zoom:(p==null?void 0:p.zoom)??16.5,bearing:(p==null?void 0:p.bearing)??0,pitch:(p==null?void 0:p.pitch)??0,zoomSnap:i,attributionControl:!1,hash:!1});return b({engine:T.MAPLIBRE_GL,map:R,container:_,viewSync:null}),()=>{b(null),R.remove()}},[n]),o.useEffect(()=>{const _=a==null?void 0:a.map;_&&_.setZoomSnap(i)},[a,i]),P(c,()=>{a==null||a.map.resize()}),u.jsxs(H,{label:"MapLibre GL JS Reference",children:[u.jsx("div",{ref:c,style:{position:"absolute",inset:0}}),u.jsx(w,{controlId:"maplibre-reference",engine:T.MAPLIBRE_GL,runtimeHandle:a,homeTarget:n,showOrbitControl:!0,homeOptions:M,orbitOptions:A,zoomOptions:E})]})},we=({orbitDirection:e=D.CW,orbitRevolutionDurationSec:t=h,orbitMinPitchDeg:r=30,zoomDelta:i=O.ONE,animate:s=!0,travelDurationMs:m=250,fovDurationMs:l=250,dollyDurationMs:g=2e3,minimumFovDeg:c=U,maximumFovDeg:a=Z})=>{const b=o.useRef(null),[n,M]=o.useState(null),[A,E]=o.useState(null),[_,p]=o.useState(null),R=o.useMemo(()=>V({fovVerticalDeg:60}),[]),ue=o.useMemo(()=>me({direction:e,revolutionDurationSec:t,minPitchDeg:r}),[e,r,t]),pe=o.useMemo(()=>I({zoomDelta:i,animate:s,durationMs:m,minimumFovDeg:c,maximumFovDeg:a}),[s,a,c,m,i]),de=o.useMemo(()=>I({zoomDelta:i,animate:s,durationMs:l,minimumFovDeg:c,maximumFovDeg:a}),[s,l,a,c,i]),Oe=o.useMemo(()=>I({zoomDelta:i,animate:s,durationMs:g,minimumFovDeg:c,maximumFovDeg:a}),[s,g,a,c,i]);return o.useEffect(()=>{const F=b.current;if(!F)return;let B=!1,v=null,$=()=>{};return(async()=>{const d=await ge(F,{useBrowserRecommendedResolution:!1});if(B){d.widget.isDestroyed()||d.widget.destroy();return}d.terrainProviders.TERRAIN&&(d.widget.scene.terrainProvider=d.terrainProviders.TERRAIN),fe({widget:d.widget,state:R}),J(d.widget),v=d.widget,$=Me(d.widget,{targetFps:144,restingScale:1,onActivitySummary:p}),M({engine:T.CESIUM,widget:d.widget,container:F,terrainProviders:d.terrainProviders,viewSync:null})})().catch(d=>{console.error("[STORY][CONTROLS] Failed to initialize Cesium story",d)}),()=>{B=!0,$(),E(null),p(null),M(null),v&&!v.isDestroyed()&&v.destroy()}},[R]),o.useEffect(()=>{if(!n){E(null),p(null);return}return _e(n.widget,E)},[n]),P(b,()=>{!(n!=null&&n.widget)||n.widget.isDestroyed()||(n.widget.resize(),J(n.widget))}),u.jsxs(H,{label:Ge(A,_),children:[u.jsx("div",{ref:b,style:{position:"absolute",inset:0}}),u.jsx(w,{controlId:"cesium-reference",engine:T.CESIUM,runtimeHandle:n,homeTarget:R,showOrbitControl:!0,orbitOptions:ue,showFovZoomControl:!0,showDollyZoomControl:!0,zoomOptions:pe,fovZoomOptions:de,dollyZoomOptions:Oe})]})},S={args:{homeAnimate:!0,homeDurationMs:900,zoomDelta:"one",animate:!0,durationMs:250},argTypes:{homeAnimate:{...le,table:{category:"Home"}},homeDurationMs:{...ce,if:{arg:"homeAnimate"},table:{category:"Home"}},zoomDelta:W,animate:z,durationMs:C},render:e=>u.jsx(xe,{homeAnimate:e.homeAnimate,homeDurationMs:e.homeDurationMs,zoomDelta:Y(e.zoomDelta),animate:e.animate,durationMs:e.durationMs})},y={name:"MapLibre GL JS",args:{homeAnimate:!0,homeDurationMs:900,orbitDirection:D.CW,orbitRevolutionDurationSec:h,orbitMinPitchDeg:30,zoomDelta:"one",animate:!0,durationMs:250},argTypes:{homeAnimate:{...le,table:{category:"Home"}},homeDurationMs:{...ce,if:{arg:"homeAnimate"},table:{category:"Home"}},orbitDirection:{name:"orbit direction",options:[D.CW,D.CCW],control:{type:"inline-radio"},labels:{[D.CW]:"cw",[D.CCW]:"ccw"},table:{category:"Orbit"}},orbitRevolutionDurationSec:{name:"orbit revolution duration (s)",control:{type:"range",min:4,max:120,step:1},table:{category:"Orbit"}},orbitMinPitchDeg:{name:"orbit min pitch (deg)",control:{type:"range",min:0,max:85,step:1},table:{category:"Orbit"}},zoomDelta:W,animate:z,durationMs:C},render:e=>u.jsx(Pe,{homeAnimate:e.homeAnimate,homeDurationMs:e.homeDurationMs,orbitDirection:e.orbitDirection,orbitRevolutionDurationSec:e.orbitRevolutionDurationSec,orbitMinPitchDeg:e.orbitMinPitchDeg,zoomDelta:Y(e.zoomDelta),animate:e.animate,durationMs:e.durationMs})},N={args:{orbitDirection:D.CW,orbitRevolutionDurationSec:h,orbitMinPitchDeg:30,zoomDelta:"one",animate:!0,travelDurationMs:250,fovDurationMs:250,dollyDurationMs:2e3,minimumFovDeg:U,maximumFovDeg:Z},argTypes:{orbitDirection:{name:"orbit direction",options:[D.CW,D.CCW],control:{type:"inline-radio"},labels:{[D.CW]:"cw",[D.CCW]:"ccw"},table:{category:"Orbit"}},orbitRevolutionDurationSec:{name:"orbit revolution duration (s)",control:{type:"range",min:4,max:120,step:1},table:{category:"Orbit"}},orbitMinPitchDeg:{name:"orbit min pitch (deg)",control:{type:"range",min:0,max:85,step:1},table:{category:"Orbit"}},minimumFovDeg:{name:"minimum fov (deg)",control:{type:"number",min:G,max:x,step:.1},table:{category:"Zoom · FOV"}},maximumFovDeg:{name:"maximum fov (deg)",control:{type:"number",min:G,max:x,step:.1},table:{category:"Zoom · FOV"}},zoomDelta:{...W,table:{category:"Zoom · General"}},animate:{...z,table:{category:"Zoom · General"}},travelDurationMs:{...C,name:"travel duration (ms)",description:"Applies to the primary travel zoom buttons.",table:{category:"Zoom · Travel"}},fovDurationMs:{...C,name:"fov duration (ms)",description:"Applies to the camera-only FOV zoom buttons.",table:{category:"Zoom · FOV"}},dollyDurationMs:{...Ne,name:"dolly duration (ms)",description:"Applies to the synchronized travel + FOV dolly buttons.",table:{category:"Zoom · Dolly"}}},render:e=>u.jsx(we,{orbitDirection:e.orbitDirection,orbitRevolutionDurationSec:e.orbitRevolutionDurationSec,orbitMinPitchDeg:e.orbitMinPitchDeg,minimumFovDeg:e.minimumFovDeg,maximumFovDeg:e.maximumFovDeg,zoomDelta:Y(e.zoomDelta),animate:e.animate,travelDurationMs:e.travelDurationMs,fovDurationMs:e.fovDurationMs,dollyDurationMs:e.dollyDurationMs})};var k,Q,K;S.parameters={...S.parameters,docs:{...(k=S.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(K=(Q=S.parameters)==null?void 0:Q.docs)==null?void 0:K.source}}};var ee,te,ne;y.parameters={...y.parameters,docs:{...(ee=y.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(ne=(te=y.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var oe,ie,re;N.parameters={...N.parameters,docs:{...(oe=N.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(re=(ie=N.parameters)==null?void 0:ie.docs)==null?void 0:re.source}}};const ft=["Leaflet","MapLibreGLJS","Cesium"];export{N as Cesium,S as Leaflet,y as MapLibreGLJS,ft as __namedExportsOrder,Et as default};
