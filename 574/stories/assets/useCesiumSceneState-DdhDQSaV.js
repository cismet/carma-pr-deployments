import{r as f}from"./index-f9CH5uyH.js";import{e as Y,f as K,g as Z,P as X,h as ge}from"./react-redux-Bjr9svD3.js";import{j as fe}from"./jsx-runtime-DCY474Ph.js";import{i as l,r as W}from"./PerspectiveFrustumFov-BXH1yw9A.js";import{a as P,V as v,b as h,Q}from"./three.module-BBFlFxNL.js";import{M as b,F,O as pe,H as ye,C as p,J as ve,T as we,I as be,w as he,K as $}from"./createRingSegment-CTNZoRMx.js";const ke=e=>{const n=new P,r=n.elements;for(let t=0;t<16;t+=1)r[t]=e[t];return n},Se=e=>{if(!e||typeof e!="object")return null;const n=e,r=[];for(let t=0;t<16;t+=1){const i=n[t];if(!l(i))return null;r[t]=i}return r},Ee=e=>{if(e instanceof P)return e.clone();const n=Se(e);return n?ke(n):null},Re=e=>{if(e instanceof v)return e.clone();if(!e||typeof e!="object")return null;const n=e;return!l(n.x)||!l(n.y)||!l(n.z)?null:new v(n.x,n.y,n.z)};function Ce(e,n=!0){return n?{latitude:e.latitude,longitude:e.longitude,height:e.height}:{latitude:e.latitude,longitude:e.longitude,height:e.height}}const qe=e=>{const n=e.positionCartographic.clone(),{latitude:r,longitude:t,height:i}=Ce(n);return{latitude:r,longitude:t,altitude:i}},Ve=e=>typeof e=="boolean"?{includeFov:e,includeOrientation:!0,includeCartographic:!0,includeMatrices:!0}:{includeFov:e.includeFov??!0,includeOrientation:e.includeOrientation??!0,includeCartographic:e.includeCartographic??!0,includeMatrices:e.includeMatrices??!0},Me=(e,n=!0)=>{const{includeFov:r,includeOrientation:t,includeCartographic:i,includeMatrices:o}=Ve(n),s={position:e.positionWC.clone(),direction:e.directionWC.clone(),up:e.upWC.clone(),right:e.rightWC.clone()};if(t&&(Number.isFinite(e.heading)&&(s.heading=e.heading),Number.isFinite(e.pitch)&&(s.pitch=e.pitch),Number.isFinite(e.roll)&&(s.roll=e.roll)),i&&(s.cartographic=qe(e)),o){s.viewMatrix=b.clone(e.viewMatrix,new b),s.inverseViewMatrix=b.clone(e.inverseViewMatrix,new b);const a=e.frustum;a instanceof F?s.frustum={type:"PerspectiveFrustum",...a.projectionMatrix?{projectionMatrix:b.clone(a.projectionMatrix,new b)}:{},...Number.isFinite(a.fov)?{fov:a.fov}:{},...Number.isFinite(a.fovy)?{fovy:a.fovy}:{},...Number.isFinite(a.aspectRatio)?{aspectRatio:a.aspectRatio}:{},...Number.isFinite(a.near)?{near:a.near}:{},...Number.isFinite(a.far)?{far:a.far}:{}}:a instanceof pe?s.frustum={type:"OrthographicFrustum",...a.projectionMatrix?{projectionMatrix:b.clone(a.projectionMatrix,new b)}:{},...Number.isFinite(a.width)?{width:a.width}:{},...Number.isFinite(a.aspectRatio)?{aspectRatio:a.aspectRatio}:{},...Number.isFinite(a.near)?{near:a.near}:{},...Number.isFinite(a.far)?{far:a.far}:{}}:a instanceof ye&&(s.frustum={type:"OrthographicOffCenterFrustum",...a.projectionMatrix?{projectionMatrix:b.clone(a.projectionMatrix,new b)}:{},...Number.isFinite(a.left)?{left:a.left}:{},...Number.isFinite(a.right)?{right:a.right}:{},...Number.isFinite(a.top)?{top:a.top}:{},...Number.isFinite(a.bottom)?{bottom:a.bottom}:{},...Number.isFinite(a.near)?{near:a.near}:{},...Number.isFinite(a.far)?{far:a.far}:{}})}return r&&e.frustum instanceof F&&W(e.frustum)!==void 0&&(s.fov=W(e.frustum)),s},Ie=(e,n,r=!1)=>e.sort(([t],[i])=>{const o=n.indexOf(t),s=n.indexOf(i);return o!==-1&&s!==-1?o-s:o!==-1?-1:s!==-1?1:r?t.localeCompare(i):0}),xe=(e,n=[])=>{const r=Ie(Object.entries(e),n),t=[];return r.forEach(([i,o])=>{if(o==null)return;const s=encodeURIComponent(i);if(o===""){t.push(s);return}(typeof o=="string"||typeof o=="number"||typeof o=="boolean")&&t.push(`${s}=${encodeURIComponent(String(o))}`)}),t.join("&")},J={TWO_D:"2d",THREE_D:"3d",UNSET:"unset"},Ne=J.TWO_D,Le=J.THREE_D,g=e=>Re(e),I=e=>{if(!e||typeof e!="object")return null;const n=e,r=n.altitude??n.height;return!l(n.longitude)||!l(n.latitude)||!l(r)?null:{longitude:n.longitude,latitude:n.latitude,altitude:r}},x=e=>Ee(e),ee="depth-first",ne=e=>{const n=e.canvas;return n?new h(n.clientWidth*.5,n.clientHeight*.5):null},Pe=e=>{const n=ne(e),r=e.canvas;if(!n||!r)return[];const t=r.clientWidth,i=r.clientHeight,o=Math.max(12,Math.round(Math.min(t,i)*.035));return[n,new h(n.x,n.y+o),new h(n.x-o,n.y),new h(n.x+o,n.y),new h(n.x,n.y-o),new h(n.x-o,n.y+o),new h(n.x+o,n.y+o),new h(n.x-o*2,n.y+o),new h(n.x+o*2,n.y+o),new h(n.x,n.y+o*2)].filter(s=>s.x>=0&&s.y>=0&&s.x<=t&&s.y<=i)},j=e=>{const n=ne(e);if(!n||e.pickPositionSupported===!1||typeof e.pickPosition!="function")return null;const r=e.pickPosition(n);if(!r)return null;const t=g(r);return t?{worldPosition:t,rawCartesian:t,source:"screen-center-depth"}:null},T=(e,n)=>{var t;if(typeof n.getPickRay!="function")return null;const r=Pe(e);if(typeof((t=e.globe)==null?void 0:t.pick)!="function")return null;for(const i of r){const o=n.getPickRay(i);if(!o)continue;const s=e.globe.pick(o,e);if(!s)continue;const a=g(s);if(a)return{worldPosition:a,rawCartesian:a,source:"screen-center-globe"}}return null},je=(e,n,r=ee)=>r==="depth-only"?j(e):r==="terrain-only"?T(e,n):r==="terrain-first"?T(e,n)??j(e):j(e)??T(e,n),Te=(e,n,r)=>{var i;const t=(i=e.globe)==null?void 0:i.ellipsoid;return typeof(t==null?void 0:t.cartesianToCartographic)!="function"?null:I(t.cartesianToCartographic(n))??I(t.cartesianToCartographic(g(p.fromElements(r.x,r.y,r.z,new p))??r))??null},D=(e,n,r,t,i)=>{if(!r)return{worldPosition:n,cartographic:null,source:i};const o=i==="fallback"?{longitude:r.longitude,latitude:r.latitude,altitude:t}:r;if(i==="camera-position")return{worldPosition:n,cartographic:o,source:i};const s=p.fromRadians(o.longitude,o.latitude,o.altitude??t);return{worldPosition:g(s)??n,cartographic:o,source:i}},_e=(e,n,{cameraWorldPosition:r,cameraCartographic:t,orbitPointMode:i,fallbackHeightM:o,screenCenterSamplingStrategy:s=ee,throwOnMissingScreenCenterIntersection:a=!1})=>{if(i==="camera-position")return D(e,r,t,o,"camera-position");const u=je(e,n,s);if(u)return{worldPosition:u.worldPosition,cartographic:Te(e,u.rawCartesian,u.worldPosition),source:u.source};if(a)throw new Error(`[scene-state] Missing screen-center intersection (strategy: ${s}).`);return D(e,r,t,o,"fallback")},Oe="external",Fe="system",Ae=()=>Date.now(),A=e=>(e==null?void 0:e.canControl)!==!1,ze=e=>{for(const n of Object.values(e))if(A(n))return n.id;return null},B=({sourceId:e,sourceEngine:n,target:r,timestampMs:t,frameNumber:i})=>({sourceId:e,sourceEngine:n,frameNumber:i??null,timestampMs:t??Ae(),target:r}),re=e=>({registrations:(e==null?void 0:e.registrations)??{},latestById:(e==null?void 0:e.latestById)??{},controllerId:(e==null?void 0:e.controllerId)??null,target:(e==null?void 0:e.target)??null}),te=Y({name:"viewSync",initialState:re(),reducers:{registerView:(e,n)=>{e.registrations[n.payload.id]=n.payload},unregisterView:(e,n)=>{var t;const r=n.payload;!(r in e.registrations)&&!(r in e.latestById)||(delete e.registrations[r],delete e.latestById[r],e.controllerId===r&&(e.controllerId=ze(e.registrations)),((t=e.target)==null?void 0:t.sourceId)===r&&(e.target=e.controllerId?e.latestById[e.controllerId]??null:null))},setController:(e,n)=>{const r=n.payload;if(r===null){if(e.controllerId===null)return;e.controllerId=null;return}const t=e.registrations[r];!t||!A(t)||e.controllerId!==r&&(e.controllerId=r,e.target=e.latestById[r]??e.target)},publishViewState:(e,n)=>{const{id:r,target:t,options:i}=n.payload,o=e.registrations[r];if(!o)return;const s=B({sourceId:r,sourceEngine:o.engine,target:t,frameNumber:i==null?void 0:i.frameNumber,timestampMs:i==null?void 0:i.timestampMs});e.latestById[r]=s;const u=(i==null?void 0:i.claimControl)===!0||e.controllerId===null&&A(o)?r:e.controllerId;e.controllerId=u,u===r&&(e.target=s)},setTargetState:(e,n)=>{const{target:r,options:t}=n.payload;e.target=B({sourceId:(t==null?void 0:t.sourceId)??Oe,sourceEngine:(t==null?void 0:t.sourceEngine)??Fe,target:r,frameNumber:t==null?void 0:t.frameNumber,timestampMs:t==null?void 0:t.timestampMs})}}}),{registerView:He,unregisterView:We,setController:De,publishViewState:Be,setTargetState:Ue}=te.actions,Ge=e=>{const n=K({reducer:te.reducer,preloadedState:re(e)}),r=u=>(n.dispatch(He(u)),()=>{t(u.id)}),t=u=>{n.dispatch(We(u))},i=u=>{n.dispatch(De(u))};return Object.assign(n,{registerView:r,unregisterView:t,setController:i,clearController:()=>{i(null)},publishViewState:(u,d,m={})=>{n.dispatch(Be({id:u,target:d,options:m}))},setTargetState:(u,d={})=>{n.dispatch(Ue({target:u,options:d}))}})},ie=f.createContext(null),ae=f.createContext(null),On=()=>f.useContext(ie),Fn=Z(ae),Ye=X,Ke=({children:e,store:n,initialState:r})=>{const t=f.useRef(null);!n&&!t.current&&(t.current=Ge(r));const i=n??t.current;if(!i)throw new Error("ViewSyncProvider could not initialize a Redux store");return f.createElement(ie.Provider,{value:i},f.createElement(Ye,{context:ae,store:i},e))};Ke.__docgenInfo={description:"",methods:[],displayName:"ViewSyncProvider",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},store:{required:!1,tsType:{name:"intersection",raw:`Store<ViewSyncState> & {
  registerView: (registration: ViewSyncRegistration) => () => void;
  unregisterView: (id: string) => void;
  setController: (id: string | null) => void;
  clearController: () => void;
  publishViewState: (
    id: string,
    target: ViewState,
    options?: ViewSyncPublishOptions
  ) => void;
  setTargetState: (
    target: ViewState,
    options?: ViewSyncSetTargetOptions
  ) => void;
}`,elements:[{name:"Store",elements:[{name:"signature",type:"object",raw:`{
  registrations: Record<string, ViewSyncRegistration>;
  latestById: Record<string, ViewSyncPublishedState>;
  controllerId: string | null;
  target: ViewSyncPublishedState | null;
}`,signature:{properties:[{key:"registrations",value:{name:"Record",elements:[{name:"string"},{name:"signature",type:"object",raw:`{
  id: string;
  engine: ViewSyncEngine;
  label?: string;
  canControl?: boolean;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"engine",value:{name:"union",raw:"BuiltInViewSyncEngine | (string & {})",elements:[{name:"unknown[union]",raw:"(typeof VIEW_SYNC_ENGINES)[keyof typeof VIEW_SYNC_ENGINES]"},{name:"unknown"}],required:!1}},{key:"label",value:{name:"string",required:!1}},{key:"canControl",value:{name:"boolean",required:!1}}]}}],raw:"Record<string, ViewSyncRegistration>",required:!0}},{key:"latestById",value:{name:"Record",elements:[{name:"string"},{name:"signature",type:"object",raw:`{
  sourceId: string;
  sourceEngine: ViewSyncEngine;
  frameNumber: number | null;
  timestampMs: number;
  target: ViewState;
}`,signature:{properties:[{key:"sourceId",value:{name:"string",required:!0}},{key:"sourceEngine",value:{name:"union",raw:"BuiltInViewSyncEngine | (string & {})",elements:[{name:"unknown[union]",raw:"(typeof VIEW_SYNC_ENGINES)[keyof typeof VIEW_SYNC_ENGINES]"},{name:"unknown"}],required:!1}},{key:"frameNumber",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!0}},{key:"timestampMs",value:{name:"number",required:!0}},{key:"target",value:{name:"signature",type:"object",raw:`{
  // Canonical shared orbit pose (flattened):
  // - local basis follows the shared camera-model convention:
  //   +X east, +Y up, -Z north
  // - bearing starts at north and rotates positively toward east around +Y
  // - pitch is 0=nadir and +PI/2=horizon
  longitude: Radians;
  latitude: Radians;
  altitude: Meters;
  // Canonical projected zoom uses MapLibre/512px-tile semantics.
  zoom?: number;
  bearing: Radians;
  pitch: Radians;
  roll?: Radians;
  range: Meters;
  fovVertical?: Radians;
  fovHorizontal?: Radians;
  fovLongerEdge?: Radians;
  cameraModel?: ObjectCentricCameraModel;
}`,signature:{properties:[{key:"longitude",value:{name:"Radians",required:!0}},{key:"latitude",value:{name:"Radians",required:!0}},{key:"altitude",value:{name:"Meters",required:!0}},{key:"zoom",value:{name:"number",required:!1}},{key:"bearing",value:{name:"Radians",required:!0}},{key:"pitch",value:{name:"Radians",required:!0}},{key:"roll",value:{name:"Radians",required:!1}},{key:"range",value:{name:"Meters",required:!0}},{key:"fovVertical",value:{name:"Radians",required:!1}},{key:"fovHorizontal",value:{name:"Radians",required:!1}},{key:"fovLongerEdge",value:{name:"Radians",required:!1}},{key:"cameraModel",value:{name:"ObjectCentricCameraModel",required:!1}}]},required:!0}}]}}],raw:"Record<string, ViewSyncPublishedState>",required:!0}},{key:"controllerId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"target",value:{name:"union",raw:"ViewSyncPublishedState | null",elements:[{name:"signature",type:"object",raw:`{
  sourceId: string;
  sourceEngine: ViewSyncEngine;
  frameNumber: number | null;
  timestampMs: number;
  target: ViewState;
}`,signature:{properties:[{key:"sourceId",value:{name:"string",required:!0}},{key:"sourceEngine",value:{name:"union",raw:"BuiltInViewSyncEngine | (string & {})",elements:[{name:"unknown[union]",raw:"(typeof VIEW_SYNC_ENGINES)[keyof typeof VIEW_SYNC_ENGINES]"},{name:"unknown"}],required:!1}},{key:"frameNumber",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!0}},{key:"timestampMs",value:{name:"number",required:!0}},{key:"target",value:{name:"signature",type:"object",raw:`{
  // Canonical shared orbit pose (flattened):
  // - local basis follows the shared camera-model convention:
  //   +X east, +Y up, -Z north
  // - bearing starts at north and rotates positively toward east around +Y
  // - pitch is 0=nadir and +PI/2=horizon
  longitude: Radians;
  latitude: Radians;
  altitude: Meters;
  // Canonical projected zoom uses MapLibre/512px-tile semantics.
  zoom?: number;
  bearing: Radians;
  pitch: Radians;
  roll?: Radians;
  range: Meters;
  fovVertical?: Radians;
  fovHorizontal?: Radians;
  fovLongerEdge?: Radians;
  cameraModel?: ObjectCentricCameraModel;
}`,signature:{properties:[{key:"longitude",value:{name:"Radians",required:!0}},{key:"latitude",value:{name:"Radians",required:!0}},{key:"altitude",value:{name:"Meters",required:!0}},{key:"zoom",value:{name:"number",required:!1}},{key:"bearing",value:{name:"Radians",required:!0}},{key:"pitch",value:{name:"Radians",required:!0}},{key:"roll",value:{name:"Radians",required:!1}},{key:"range",value:{name:"Meters",required:!0}},{key:"fovVertical",value:{name:"Radians",required:!1}},{key:"fovHorizontal",value:{name:"Radians",required:!1}},{key:"fovLongerEdge",value:{name:"Radians",required:!1}},{key:"cameraModel",value:{name:"ObjectCentricCameraModel",required:!1}}]},required:!0}}]}},{name:"null"}],required:!0}}]}}],raw:"Store<ViewSyncState>"},{name:"signature",type:"object",raw:`{
  registerView: (registration: ViewSyncRegistration) => () => void;
  unregisterView: (id: string) => void;
  setController: (id: string | null) => void;
  clearController: () => void;
  publishViewState: (
    id: string,
    target: ViewState,
    options?: ViewSyncPublishOptions
  ) => void;
  setTargetState: (
    target: ViewState,
    options?: ViewSyncSetTargetOptions
  ) => void;
}`,signature:{properties:[{key:"registerView",value:{name:"signature",type:"function",raw:"(registration: ViewSyncRegistration) => () => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  id: string;
  engine: ViewSyncEngine;
  label?: string;
  canControl?: boolean;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"engine",value:{name:"union",raw:"BuiltInViewSyncEngine | (string & {})",elements:[{name:"unknown[union]",raw:"(typeof VIEW_SYNC_ENGINES)[keyof typeof VIEW_SYNC_ENGINES]"},{name:"unknown"}],required:!1}},{key:"label",value:{name:"string",required:!1}},{key:"canControl",value:{name:"boolean",required:!1}}]}},name:"registration"}],return:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}}},required:!0}},{key:"unregisterView",value:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}},required:!0}},{key:"setController",value:{name:"signature",type:"function",raw:"(id: string | null) => void",signature:{arguments:[{type:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},name:"id"}],return:{name:"void"}},required:!0}},{key:"clearController",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}},{key:"publishViewState",value:{name:"signature",type:"function",raw:`(
  id: string,
  target: ViewState,
  options?: ViewSyncPublishOptions
) => void`,signature:{arguments:[{type:{name:"string"},name:"id"},{type:{name:"signature",type:"object",raw:`{
  // Canonical shared orbit pose (flattened):
  // - local basis follows the shared camera-model convention:
  //   +X east, +Y up, -Z north
  // - bearing starts at north and rotates positively toward east around +Y
  // - pitch is 0=nadir and +PI/2=horizon
  longitude: Radians;
  latitude: Radians;
  altitude: Meters;
  // Canonical projected zoom uses MapLibre/512px-tile semantics.
  zoom?: number;
  bearing: Radians;
  pitch: Radians;
  roll?: Radians;
  range: Meters;
  fovVertical?: Radians;
  fovHorizontal?: Radians;
  fovLongerEdge?: Radians;
  cameraModel?: ObjectCentricCameraModel;
}`,signature:{properties:[{key:"longitude",value:{name:"Radians",required:!0}},{key:"latitude",value:{name:"Radians",required:!0}},{key:"altitude",value:{name:"Meters",required:!0}},{key:"zoom",value:{name:"number",required:!1}},{key:"bearing",value:{name:"Radians",required:!0}},{key:"pitch",value:{name:"Radians",required:!0}},{key:"roll",value:{name:"Radians",required:!1}},{key:"range",value:{name:"Meters",required:!0}},{key:"fovVertical",value:{name:"Radians",required:!1}},{key:"fovHorizontal",value:{name:"Radians",required:!1}},{key:"fovLongerEdge",value:{name:"Radians",required:!1}},{key:"cameraModel",value:{name:"ObjectCentricCameraModel",required:!1}}]},required:!0},name:"target"},{type:{name:"signature",type:"object",raw:`{
  frameNumber?: number | null;
  timestampMs?: number;
  claimControl?: boolean;
}`,signature:{properties:[{key:"frameNumber",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!1}},{key:"timestampMs",value:{name:"number",required:!1}},{key:"claimControl",value:{name:"boolean",required:!1}}]}},name:"options"}],return:{name:"void"}},required:!0}},{key:"setTargetState",value:{name:"signature",type:"function",raw:`(
  target: ViewState,
  options?: ViewSyncSetTargetOptions
) => void`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  // Canonical shared orbit pose (flattened):
  // - local basis follows the shared camera-model convention:
  //   +X east, +Y up, -Z north
  // - bearing starts at north and rotates positively toward east around +Y
  // - pitch is 0=nadir and +PI/2=horizon
  longitude: Radians;
  latitude: Radians;
  altitude: Meters;
  // Canonical projected zoom uses MapLibre/512px-tile semantics.
  zoom?: number;
  bearing: Radians;
  pitch: Radians;
  roll?: Radians;
  range: Meters;
  fovVertical?: Radians;
  fovHorizontal?: Radians;
  fovLongerEdge?: Radians;
  cameraModel?: ObjectCentricCameraModel;
}`,signature:{properties:[{key:"longitude",value:{name:"Radians",required:!0}},{key:"latitude",value:{name:"Radians",required:!0}},{key:"altitude",value:{name:"Meters",required:!0}},{key:"zoom",value:{name:"number",required:!1}},{key:"bearing",value:{name:"Radians",required:!0}},{key:"pitch",value:{name:"Radians",required:!0}},{key:"roll",value:{name:"Radians",required:!1}},{key:"range",value:{name:"Meters",required:!0}},{key:"fovVertical",value:{name:"Radians",required:!1}},{key:"fovHorizontal",value:{name:"Radians",required:!1}},{key:"fovLongerEdge",value:{name:"Radians",required:!1}},{key:"cameraModel",value:{name:"ObjectCentricCameraModel",required:!1}}]},required:!0},name:"target"},{type:{name:"signature",type:"object",raw:`{
  sourceId?: string;
  sourceEngine?: ViewSyncEngine;
  frameNumber?: number | null;
  timestampMs?: number;
}`,signature:{properties:[{key:"sourceId",value:{name:"string",required:!1}},{key:"sourceEngine",value:{name:"union",raw:"BuiltInViewSyncEngine | (string & {})",elements:[{name:"unknown[union]",raw:"(typeof VIEW_SYNC_ENGINES)[keyof typeof VIEW_SYNC_ENGINES]"},{name:"unknown"}],required:!1}},{key:"frameNumber",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!1}},{key:"timestampMs",value:{name:"number",required:!1}}]}},name:"options"}],return:{name:"void"}},required:!0}}]}}]},description:""},initialState:{required:!1,tsType:{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  registrations: Record<string, ViewSyncRegistration>;
  latestById: Record<string, ViewSyncPublishedState>;
  controllerId: string | null;
  target: ViewSyncPublishedState | null;
}`,signature:{properties:[{key:"registrations",value:{name:"Record",elements:[{name:"string"},{name:"signature",type:"object",raw:`{
  id: string;
  engine: ViewSyncEngine;
  label?: string;
  canControl?: boolean;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"engine",value:{name:"union",raw:"BuiltInViewSyncEngine | (string & {})",elements:[{name:"unknown[union]",raw:"(typeof VIEW_SYNC_ENGINES)[keyof typeof VIEW_SYNC_ENGINES]"},{name:"unknown"}],required:!0}},{key:"label",value:{name:"string",required:!1}},{key:"canControl",value:{name:"boolean",required:!1}}]}}],raw:"Record<string, ViewSyncRegistration>",required:!0}},{key:"latestById",value:{name:"Record",elements:[{name:"string"},{name:"signature",type:"object",raw:`{
  sourceId: string;
  sourceEngine: ViewSyncEngine;
  frameNumber: number | null;
  timestampMs: number;
  target: ViewState;
}`,signature:{properties:[{key:"sourceId",value:{name:"string",required:!0}},{key:"sourceEngine",value:{name:"union",raw:"BuiltInViewSyncEngine | (string & {})",elements:[{name:"unknown[union]",raw:"(typeof VIEW_SYNC_ENGINES)[keyof typeof VIEW_SYNC_ENGINES]"},{name:"unknown"}],required:!0}},{key:"frameNumber",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!0}},{key:"timestampMs",value:{name:"number",required:!0}},{key:"target",value:{name:"signature",type:"object",raw:`{
  // Canonical shared orbit pose (flattened):
  // - local basis follows the shared camera-model convention:
  //   +X east, +Y up, -Z north
  // - bearing starts at north and rotates positively toward east around +Y
  // - pitch is 0=nadir and +PI/2=horizon
  longitude: Radians;
  latitude: Radians;
  altitude: Meters;
  // Canonical projected zoom uses MapLibre/512px-tile semantics.
  zoom?: number;
  bearing: Radians;
  pitch: Radians;
  roll?: Radians;
  range: Meters;
  fovVertical?: Radians;
  fovHorizontal?: Radians;
  fovLongerEdge?: Radians;
  cameraModel?: ObjectCentricCameraModel;
}`,signature:{properties:[{key:"longitude",value:{name:"Radians",required:!0}},{key:"latitude",value:{name:"Radians",required:!0}},{key:"altitude",value:{name:"Meters",required:!0}},{key:"zoom",value:{name:"number",required:!1}},{key:"bearing",value:{name:"Radians",required:!0}},{key:"pitch",value:{name:"Radians",required:!0}},{key:"roll",value:{name:"Radians",required:!1}},{key:"range",value:{name:"Meters",required:!0}},{key:"fovVertical",value:{name:"Radians",required:!1}},{key:"fovHorizontal",value:{name:"Radians",required:!1}},{key:"fovLongerEdge",value:{name:"Radians",required:!1}},{key:"cameraModel",value:{name:"ObjectCentricCameraModel",required:!1}}]},required:!0}}]}}],raw:"Record<string, ViewSyncPublishedState>",required:!0}},{key:"controllerId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"target",value:{name:"union",raw:"ViewSyncPublishedState | null",elements:[{name:"signature",type:"object",raw:`{
  sourceId: string;
  sourceEngine: ViewSyncEngine;
  frameNumber: number | null;
  timestampMs: number;
  target: ViewState;
}`,signature:{properties:[{key:"sourceId",value:{name:"string",required:!0}},{key:"sourceEngine",value:{name:"union",raw:"BuiltInViewSyncEngine | (string & {})",elements:[{name:"unknown[union]",raw:"(typeof VIEW_SYNC_ENGINES)[keyof typeof VIEW_SYNC_ENGINES]"},{name:"unknown"}],required:!0}},{key:"frameNumber",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!0}},{key:"timestampMs",value:{name:"number",required:!0}},{key:"target",value:{name:"signature",type:"object",raw:`{
  // Canonical shared orbit pose (flattened):
  // - local basis follows the shared camera-model convention:
  //   +X east, +Y up, -Z north
  // - bearing starts at north and rotates positively toward east around +Y
  // - pitch is 0=nadir and +PI/2=horizon
  longitude: Radians;
  latitude: Radians;
  altitude: Meters;
  // Canonical projected zoom uses MapLibre/512px-tile semantics.
  zoom?: number;
  bearing: Radians;
  pitch: Radians;
  roll?: Radians;
  range: Meters;
  fovVertical?: Radians;
  fovHorizontal?: Radians;
  fovLongerEdge?: Radians;
  cameraModel?: ObjectCentricCameraModel;
}`,signature:{properties:[{key:"longitude",value:{name:"Radians",required:!0}},{key:"latitude",value:{name:"Radians",required:!0}},{key:"altitude",value:{name:"Meters",required:!0}},{key:"zoom",value:{name:"number",required:!1}},{key:"bearing",value:{name:"Radians",required:!0}},{key:"pitch",value:{name:"Radians",required:!0}},{key:"roll",value:{name:"Radians",required:!1}},{key:"range",value:{name:"Meters",required:!0}},{key:"fovVertical",value:{name:"Radians",required:!1}},{key:"fovHorizontal",value:{name:"Radians",required:!1}},{key:"fovLongerEdge",value:{name:"Radians",required:!1}},{key:"cameraModel",value:{name:"ObjectCentricCameraModel",required:!1}}]},required:!0}}]}},{name:"null"}],required:!0}}]}}],raw:"Partial<ViewSyncState>"},description:""}}};const H=f.createContext(null),oe=f.createContext(null);Z(oe);const Ze=e=>{if(e)return n=>(n(),e.subscribe(n))},An=()=>{const e=f.useContext(H);return f.useMemo(()=>Ze(e),[e])},Xe=200,M=1e-6,_=1e-6,Qe=({scene:e,referencePointWorld:n})=>{var m;const t=((m=e.frameState)==null?void 0:m.time)??ve.now(),i=we.computeIcrfToFixedMatrix(t);if(!i)return;const o=be.computeSunPositionInEarthInertialFrame(t,new p),s=he.multiplyByVector(i,o,new p),a=p.fromElements(n.x,n.y,n.z,new p),u=$(s,a);return{sunPositionWorld:new v(u.east*_,u.up*_,-u.north*_)}},$e=(e,n)=>{var o,s;const r=n!=null&&n.frustum&&typeof n.frustum=="object"&&l(n.frustum.aspectRatio)&&n.frustum.aspectRatio>0?n.frustum.aspectRatio:void 0;if(l(r)&&r>0)return r;const t=(o=e.canvas)==null?void 0:o.clientWidth,i=(s=e.canvas)==null?void 0:s.clientHeight;if(l(t)&&l(i)&&t>0&&i>0)return t/i},Je=({camera:e,frustum:n,capturedFov:r})=>(e==null?void 0:e.frustum)instanceof F?"PerspectiveCamera":n&&!l(n.fov)&&(l(n.width)||l(n.left)&&l(n.right)&&l(n.top)&&l(n.bottom))?"OrthographicCamera":l(r)?"PerspectiveCamera":void 0,en=({fovVertical:e,aspect:n})=>{if(!(!l(e)||!l(n)||n<=0))return Math.atan(Math.tan(e*.5)*n)*2},nn=({frustum:e,capturedFov:n,aspect:r})=>e&&l(e.fovy)&&e.fovy>0?e.fovy:!l(n)||n<=0?e&&l(e==null?void 0:e.fov)&&e.fov>0?e.fov:void 0:l(r)&&r>1?Math.atan(Math.tan(n*.5)/r)*2:n,rn=e=>x(e==null?void 0:e.projectionMatrix),tn=(e,n,r)=>{const t=n==null?void 0:n.frustum,i=$e(e,n),o=t&&l(t.near)?t.near:void 0,s=t&&l(t.far)?t.far:void 0,a=Je({camera:n,frustum:t,capturedFov:r}),u=nn({frustum:t,capturedFov:r,aspect:i}),d=en({fovVertical:u,aspect:i}),m=rn(t),w={...a?{type:a}:{},...m?{projectionMatrix:m}:{},...l(u)?{fov:u}:{},...l(d)?{fovHorizontal:d}:{},...l(o)||l(s)?{frustum:{...l(o)?{near:o}:{},...l(s)?{far:s}:{}}}:{}};return Object.keys(w).length>0?w:void 0},se=e=>{if(!e)return null;const n=new v,r=new v,t=new v;return e.extractBasis(n,r,t),n.lengthSq()<M||r.lengthSq()<M||t.lengthSq()<M?null:(n.normalize(),r.normalize(),t.normalize(),new P().makeBasis(n,r,t))},an=({directionWorld:e,upWorld:n,rightWorld:r})=>{if(!e||!n)return null;const t=e.clone().normalize(),i=n.clone().normalize();let o=(r==null?void 0:r.clone().normalize())??new v;if(!r||o.lengthSq()<M){if(o.crossVectors(t,i),o.lengthSq()<M)return null;o.normalize()}const s=new v().crossVectors(o,t).normalize(),a=t.clone().negate();return new P().makeBasis(o,s,a)},ue=e=>e?new v(0,0,-1).transformDirection(e):null,le=e=>e?new v(0,1,0).transformDirection(e):null,de=e=>e?new v(1,0,0).transformDirection(e):null,on=({capturedState:e,worldPosition:n})=>{const r=x(e.inverseViewMatrix),t=x(e.viewMatrix),i=se(r)??an({directionWorld:g(e.direction),upWorld:g(e.up),rightWorld:g(e.right)}),o=g(e.direction)??ue(i),s=g(e.up)??le(i),a=g(e.right)??de(i),u=i?new Q().setFromRotationMatrix(i):null;return{worldPosition:n,...o?{worldDirection:o}:{},...s?{worldUp:s}:{},...a?{worldRight:a}:{},...u?{worldQuaternion:u}:{},...r?{matrixWorld:r}:{},...t?{matrixWorldInverse:t}:{},...i?{basisMatrixWorld:i}:{}}},sn=(e,n)=>{const r=g(n.position);return r?{...on({capturedState:n,worldPosition:r}),cartographic:I(n.cartographic),...l(n.heading)?{bearingRad:n.heading}:{},...l(n.pitch)?{pitchRad:n.pitch}:{},...l(n.roll)?{rollRad:n.roll}:{}}:null},un=(e,n)=>{var w,k,E;const r=g(n.positionWC)??g(n.position);if(!r)return null;const t=I(n.positionCartographic)??I(((E=(k=(w=e.globe)==null?void 0:w.ellipsoid)==null?void 0:k.cartesianToCartographic)==null?void 0:E.call(k,g(p.fromElements(r.x,r.y,r.z,new p))??r))??null),i=x(n.inverseViewMatrix),o=x(n.viewMatrix),s=se(i),a=g(n.directionWC)??ue(s),u=g(n.upWC)??le(s),d=g(n.rightWC)??de(s),m=s?new Q().setFromRotationMatrix(s):null;return{worldPosition:r,...a?{worldDirection:a}:{},...u?{worldUp:u}:{},...d?{worldRight:d}:{},...m?{worldQuaternion:m}:{},cartographic:t,...l(n.heading)?{bearingRad:n.heading}:{},...l(n.pitch)?{pitchRad:n.pitch}:{},...l(n.roll)?{rollRad:n.roll}:{},...i?{matrixWorld:i}:{},...o?{matrixWorldInverse:o}:{},...s?{basisMatrixWorld:s}:{}}},ln=({cameraSnapshot:e,intrinsics:n,orbitPoint:r})=>{if(!(r!=null&&r.worldPosition)||!r.cartographic||!l(r.cartographic.altitude))return null;const t=p.fromElements(e.worldPosition.x,e.worldPosition.y,e.worldPosition.z,new p),i=p.fromElements(r.worldPosition.x,r.worldPosition.y,r.worldPosition.z,new p),o=$(t,i),s=p.distance(t,i);if(!l(s))return null;const a=Math.hypot(o.east,o.north),u=Math.atan2(-o.east,-o.north),m=-Math.atan2(o.up,a)+Math.PI*.5;return{pose:{anchor:{longitude:r.cartographic.longitude,latitude:r.cartographic.latitude,altitude:r.cartographic.altitude},bearing:u,pitch:m,range:s,...l(e.rollRad)?{roll:e.rollRad}:{},...e.matrixWorld?{matrixWorld:e.matrixWorld}:{},...e.matrixWorldInverse?{matrixWorldInverse:e.matrixWorldInverse}:{},...e.basisMatrixWorld?{basisMatrix:e.basisMatrixWorld}:{},...e.worldPosition?{position:e.worldPosition}:{},...e.worldDirection?{direction:e.worldDirection}:{},...e.worldUp?{up:e.worldUp}:{},...e.worldRight?{right:e.worldRight}:{},...e.worldQuaternion?{quaternion:e.worldQuaternion}:{},...e.worldDirection&&e.worldUp?{basis:{direction:e.worldDirection,up:e.worldUp,...e.worldRight?{right:e.worldRight}:{}}}:{}},...n?{intrinsics:n}:{}}},U=(e,{orbitPointMode:n="screen-center",fallbackHeightM:r=Xe,screenCenterSamplingStrategy:t="depth-first",throwOnMissingScreenCenterIntersection:i=!1}={},o)=>{const s=e.camera;if(!s)return null;const a=ge(s)?Me(s,{includeFov:!0,includeOrientation:!0,includeCartographic:!0,includeMatrices:!0}):null,u=tn(e,s,a==null?void 0:a.fov),d=a?sn(e,a):un(e,s);if(!d)return null;const m=_e(e,s,{cameraWorldPosition:d.worldPosition,cameraCartographic:d.cartographic,orbitPointMode:n,fallbackHeightM:r,screenCenterSamplingStrategy:t,throwOnMissingScreenCenterIntersection:i}),w=ln({cameraSnapshot:d,intrinsics:u,orbitPoint:m}),k=Qe({scene:e,referencePointWorld:(m==null?void 0:m.worldPosition)??d.worldPosition});return{metadata:{frameNumber:o.frameNumber,timestampMs:o.timestampMs,...o.source?{source:o.source}:{}},camera:{...d,...w?{cameraModel:w}:{}},orbitPoint:m,...k?{lighting:k}:{}}},ce=Y({name:"cesiumSceneState",initialState:{snapshot:null,error:null},reducers:{setSceneState:(e,n)=>{e.snapshot=n.payload.snapshot,e.error=n.payload.error}}}),{setSceneState:dn}=ce.actions,z=e=>e instanceof Error?e:new Error(String(e)),cn=e=>z(e).message.includes("Missing screen-center intersection"),L=e=>{if(!e||typeof e!="object")return!1;const n=e;return typeof n.addEventListener=="function"&&typeof n.removeEventListener=="function"},G=()=>Date.now(),mn=e=>{var r;const n=(r=e.frameState)==null?void 0:r.frameNumber;return l(n)?n:null},gn=(e,n={})=>{const r=K({reducer:ce.reducer,middleware:y=>y({serializableCheck:!1,immutableCheck:!1})}),t=e.preRender,i=e.postRender;let o=!1,s=null,a=null,u=null;const d=()=>{const y=r.getState();(y.snapshot!==s||y.error!==a)&&r.dispatch(dn({snapshot:s,error:a}))},m=y=>U(e,n,{frameNumber:y,timestampMs:G(),source:"framework"}),w=y=>U(e,{...n,throwOnMissingScreenCenterIntersection:!1},{frameNumber:y,timestampMs:G(),source:"framework"}),k=y=>{if(o)return s;const R=mn(e);if(!y){if(R===null){if(s)return s}else if(R===u)return s}const C=R??(u===null?0:u+1);u=C;try{s=m(C),a=null}catch(q){if(a=z(q),n.throwOnMissingScreenCenterIntersection&&cn(q))try{s=w(C)}catch(me){a=z(me)}}return s},E=y=>{const R=s,C=a,q=k(y);return(q!==R||a!==C)&&d(),q},N=()=>{E(!0)};return L(t)?t.addEventListener(N):L(i)&&i.addEventListener(N),E(!0),Object.assign(r,{getSnapshot:()=>E(!1),getError:()=>(E(!1),a),refresh:()=>E(!0),destroy:()=>{o||(o=!0,L(i)&&i.removeEventListener(N),L(t)&&t.removeEventListener(N))}})},fn=X,pn=({scene:e,options:n,children:r})=>{const t=n==null?void 0:n.fallbackHeightM,i=n==null?void 0:n.orbitPointMode,o=n==null?void 0:n.screenCenterSamplingStrategy,s=n==null?void 0:n.throwOnMissingScreenCenterIntersection,a=f.useMemo(()=>e?gn(e,{fallbackHeightM:t,orbitPointMode:i,screenCenterSamplingStrategy:o,throwOnMissingScreenCenterIntersection:s}):null,[e,t,i,o,s]);return f.useEffect(()=>()=>{a==null||a.destroy()},[a]),fe.jsx(H.Provider,{value:a,children:a?f.createElement(fn,{context:oe,store:a},r):r})};pn.__docgenInfo={description:"",methods:[],displayName:"CesiumSceneStateProvider",props:{scene:{required:!1,tsType:{name:"union",raw:"SceneLike | null",elements:[{name:"signature",type:"object",raw:`{
  camera?: CameraLike;
  canvas?: {
    clientWidth: number;
    clientHeight: number;
  };
  frameState?: { frameNumber?: number };
  preRender?: EventLike;
  postRender?: EventLike;
  pickPositionSupported?: boolean;
  pickPosition?: (windowPosition: Vector2) => Vector3 | null | undefined;
  globe?: {
    pick?: (ray: RayLike, scene: SceneLike) => Vector3 | null | undefined;
    ellipsoid?: {
      cartesianToCartographic?: (cartesian: Vector3) => LatLngAlt.rad | null;
      cartographicToCartesian?: (
        cartographic: LatLngAlt.rad
      ) => Vector3 | null | undefined;
    };
  };
}`,signature:{properties:[{key:"camera",value:{name:"signature",type:"object",raw:`{
  positionWC?: Vector3;
  position?: Vector3;
  directionWC?: Vector3;
  upWC?: Vector3;
  rightWC?: Vector3;
  positionCartographic?: LatLngAlt.rad;
  heading?: number;
  pitch?: number;
  roll?: number;
  viewMatrix?: Matrix4Like;
  inverseViewMatrix?: Matrix4Like;
  frustum?: FrustumLike;
  getPickRay?: (windowPosition: Vector2) => RayLike | null | undefined;
}`,signature:{properties:[{key:"positionWC",value:{name:"Vector3",required:!1}},{key:"position",value:{name:"Vector3",required:!1}},{key:"directionWC",value:{name:"Vector3",required:!1}},{key:"upWC",value:{name:"Vector3",required:!1}},{key:"rightWC",value:{name:"Vector3",required:!1}},{key:"positionCartographic",value:{name:"LatLngAlt.rad",required:!1}},{key:"heading",value:{name:"number",required:!1}},{key:"pitch",value:{name:"number",required:!1}},{key:"roll",value:{name:"number",required:!1}},{key:"viewMatrix",value:{name:"Matrix4Like",required:!1}},{key:"inverseViewMatrix",value:{name:"Matrix4Like",required:!1}},{key:"frustum",value:{name:"signature",type:"object",raw:`{
  fov?: number;
  fovy?: number;
  aspectRatio?: number;
  near?: number;
  far?: number;
  width?: number;
  left?: number;
  right?: number;
  top?: number;
  bottom?: number;
  projectionMatrix?: Matrix4Like;
}`,signature:{properties:[{key:"fov",value:{name:"number",required:!1}},{key:"fovy",value:{name:"number",required:!1}},{key:"aspectRatio",value:{name:"number",required:!1}},{key:"near",value:{name:"number",required:!1}},{key:"far",value:{name:"number",required:!1}},{key:"width",value:{name:"number",required:!1}},{key:"left",value:{name:"number",required:!1}},{key:"right",value:{name:"number",required:!1}},{key:"top",value:{name:"number",required:!1}},{key:"bottom",value:{name:"number",required:!1}},{key:"projectionMatrix",value:{name:"Matrix4Like",required:!1}}]},required:!1}},{key:"getPickRay",value:{name:"signature",type:"function",raw:"(windowPosition: Vector2) => RayLike | null | undefined",signature:{arguments:[{type:{name:"Vector2"},name:"windowPosition"}],return:{name:"union",raw:"RayLike | null | undefined",elements:[{name:"RayLike"},{name:"null"},{name:"undefined"}]}},required:!1}}]},required:!1}},{key:"canvas",value:{name:"signature",type:"object",raw:`{
  clientWidth: number;
  clientHeight: number;
}`,signature:{properties:[{key:"clientWidth",value:{name:"number",required:!0}},{key:"clientHeight",value:{name:"number",required:!0}}]},required:!1}},{key:"frameState",value:{name:"signature",type:"object",raw:"{ frameNumber?: number }",signature:{properties:[{key:"frameNumber",value:{name:"number",required:!1}}]},required:!1}},{key:"preRender",value:{name:"signature",type:"object",raw:`{
  addEventListener: (listener: () => void) => void;
  removeEventListener: (listener: () => void) => void;
}`,signature:{properties:[{key:"addEventListener",value:{name:"signature",type:"function",raw:"(listener: () => void) => void",signature:{arguments:[{type:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},name:"listener"}],return:{name:"void"}},required:!0}},{key:"removeEventListener",value:{name:"signature",type:"function",raw:"(listener: () => void) => void",signature:{arguments:[{type:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},name:"listener"}],return:{name:"void"}},required:!0}}]},required:!1}},{key:"postRender",value:{name:"signature",type:"object",raw:`{
  addEventListener: (listener: () => void) => void;
  removeEventListener: (listener: () => void) => void;
}`,signature:{properties:[{key:"addEventListener",value:{name:"signature",type:"function",raw:"(listener: () => void) => void",signature:{arguments:[{type:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},name:"listener"}],return:{name:"void"}},required:!0}},{key:"removeEventListener",value:{name:"signature",type:"function",raw:"(listener: () => void) => void",signature:{arguments:[{type:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},name:"listener"}],return:{name:"void"}},required:!0}}]},required:!1}},{key:"pickPositionSupported",value:{name:"boolean",required:!1}},{key:"pickPosition",value:{name:"signature",type:"function",raw:"(windowPosition: Vector2) => Vector3 | null | undefined",signature:{arguments:[{type:{name:"Vector2"},name:"windowPosition"}],return:{name:"union",raw:"Vector3 | null | undefined",elements:[{name:"Vector3"},{name:"null"},{name:"undefined"}]}},required:!1}},{key:"globe",value:{name:"signature",type:"object",raw:`{
  pick?: (ray: RayLike, scene: SceneLike) => Vector3 | null | undefined;
  ellipsoid?: {
    cartesianToCartographic?: (cartesian: Vector3) => LatLngAlt.rad | null;
    cartographicToCartesian?: (
      cartographic: LatLngAlt.rad
    ) => Vector3 | null | undefined;
  };
}`,signature:{properties:[{key:"pick",value:{name:"signature",type:"function",raw:"(ray: RayLike, scene: SceneLike) => Vector3 | null | undefined",signature:{arguments:[{type:{name:"RayLike"},name:"ray"},{type:{name:"SceneLike"},name:"scene"}],return:{name:"union",raw:"Vector3 | null | undefined",elements:[{name:"Vector3"},{name:"null"},{name:"undefined"}]}},required:!1}},{key:"ellipsoid",value:{name:"signature",type:"object",raw:`{
  cartesianToCartographic?: (cartesian: Vector3) => LatLngAlt.rad | null;
  cartographicToCartesian?: (
    cartographic: LatLngAlt.rad
  ) => Vector3 | null | undefined;
}`,signature:{properties:[{key:"cartesianToCartographic",value:{name:"signature",type:"function",raw:"(cartesian: Vector3) => LatLngAlt.rad | null",signature:{arguments:[{type:{name:"Vector3"},name:"cartesian"}],return:{name:"union",raw:"LatLngAlt.rad | null",elements:[{name:"LatLngAlt.rad"},{name:"null"}]}},required:!1}},{key:"cartographicToCartesian",value:{name:"signature",type:"function",raw:`(
  cartographic: LatLngAlt.rad
) => Vector3 | null | undefined`,signature:{arguments:[{type:{name:"LatLngAlt.rad"},name:"cartographic"}],return:{name:"union",raw:"Vector3 | null | undefined",elements:[{name:"Vector3"},{name:"null"},{name:"undefined"}]}},required:!1}}]},required:!1}}]},required:!1}}]}},{name:"null"}]},description:""},options:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  orbitPointMode?: OrbitPointMode;
  fallbackHeightM?: number;
  screenCenterSamplingStrategy?: OrbitPointSamplingStrategy;
  throwOnMissingScreenCenterIntersection?: boolean;
}`,signature:{properties:[{key:"orbitPointMode",value:{name:"union",raw:'"screen-center" | "camera-position"',elements:[{name:"literal",value:'"screen-center"'},{name:"literal",value:'"camera-position"'}],required:!1}},{key:"fallbackHeightM",value:{name:"number",required:!1}},{key:"screenCenterSamplingStrategy",value:{name:"union",raw:`| "depth-first"
| "terrain-first"
| "depth-only"
| "terrain-only"`,elements:[{name:"literal",value:'"depth-first"'},{name:"literal",value:'"terrain-first"'},{name:"literal",value:'"depth-only"'},{name:"literal",value:'"terrain-only"'}],required:!1}},{key:"throwOnMissingScreenCenterIntersection",value:{name:"boolean",required:!1}}]}},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const yn=(e,n,r)=>{var o;const t={},i=[];for(const[s,a]of Object.entries(e)){const u=((o=n==null?void 0:n[s])==null?void 0:o.encode(a))??a,d=(r==null?void 0:r[s])??s;u===void 0?i.push(d):t[d]=u}return{newParams:t,undefinedKeys:i}},c={LATITUDE:"lat",LONGITUDE:"lng",ZOOM:"zoom",ALTITUDE:"altitude",BEARING:"bearing",PITCH:"pitch",ROLL:"roll",RANGE:"range",FOV:"fov"},V={[c.BEARING]:"b",[c.PITCH]:"p",[c.ROLL]:"r",[c.ALTITUDE]:"h"},vn=[c.LATITUDE,c.LONGITUDE,c.ZOOM,V[c.BEARING],V[c.PITCH],V[c.ROLL],V[c.ALTITUDE],c.RANGE,c.FOV],wn=V,bn=vn,S=(e,n=!1)=>({encode:r=>{if(typeof r=="string"&&r.length>0)return r;if(typeof r=="number"){if(isNaN(r)||!isFinite(r))return;if(e===void 0)return r.toString();const t=r.toFixed(e);return n?t:parseFloat(t).toString()}},decode:r=>r!==void 0?parseFloat(r):void 0}),hn=Object.freeze({[c.LATITUDE]:S(7),[c.LONGITUDE]:S(7),[c.ZOOM]:S(3),[c.ALTITUDE]:S(2),[c.RANGE]:S(2),[c.BEARING]:S(2),[c.PITCH]:S(2),[c.ROLL]:S(2),[c.FOV]:S(2)}),kn={mapStyle:"m",isOblique:"oblq",...wn},O=[Ne,Le,...bn,"m","oblq"],Sn={karte:"0",luftbild:"1"},En=e=>{const n=Object.fromEntries(Object.entries(e).map(([r,t])=>[t,r]));return{encode:r=>typeof r=="string"?e[r]:void 0,decode:r=>r!==void 0?n[r]:void 0}},Rn=Object.freeze({mapStyle:En(Sn),...hn}),zn=(e,n={})=>{const{includeHashPrefix:r=!0}=n,{newParams:t}=yn(e,Rn,kn),i=Object.entries(t).sort(([s],[a])=>{const u=O.indexOf(s),d=O.indexOf(a);return u!==-1&&d!==-1?u-d:u!==-1?-1:d!==-1?1:0}),o=xe(Object.fromEntries(i),O);return r?`#?${o}`:o};f.createContext(void 0);const Cn=e=>e.getSnapshot(),qn=(e,n)=>{const r=f.useContext(H),[t,i]=f.useState(()=>r?e(r):n);return f.useEffect(()=>{if(!r){i(n);return}return i(e(r)),r.subscribe(()=>{i(e(r))})},[n,e,r]),t},Hn=()=>qn(Cn,null);export{pn as C,Ke as V,An as a,On as b,Fn as c,zn as e,Hn as u};
