import{m as ne}from"./mesh2024-cesium-parity.style-SIntl1dw.js";import{j as t}from"./jsx-runtime-DNp_qQjF.js";import{r as i}from"./index-CSJjS6Ct.js";import{a as ge}from"./maplibre-gl-BvLDYGIs.js";import{m as Ge}from"./StripChartPanel-QdhqwE7N.js";import{F as Y,ao as Ve,h as _e,S as Ie,r as Ne,m as Ue,l as He}from"./index-DvOUGBsN.js";import{a as ke,T as be,b as $e}from"./raster-dem-terrain-runtime-CElXXsaH.js";import"./ObjectCentricViewStateInfoBox-aVZ8NACa.js";/* empty css                    */import"./angles-o81lIhgd.js";import"./index-M0u9yaJ4.js";import"./pitch-conventions-csFBkMEs.js";import"./gazData-Y6ZykzS7.js";import"./wms-uhWQECSC.js";import"./ViewStateNavigationManagerContext-HKhsWxGe.js";import"./AnnotationsProvider-BPPQdgPh.js";import"./custom-shaders-BjVH82Hq.js";import"./ControlButtonStyler-C_yTvQxK.js";import"./gcg2016-Cns_AZOy.js";/* empty css                                      */import"./useLineSegmentVisualizers-xvGPzDMM.js";import"./useCesiumFovWheelZoom-BBdfhROv.js";import{c as Je}from"./maplibre-story-style-IbzX9XsM.js";import{W as Ye,b as Ke,T as Xe,a as Ze}from"./TileLoadingDebug-DHcDSO3I.js";import{r as Qe}from"./index-D1cknlJ6.js";import{dR as et,dS as tt,V as K,dG as rt,dL as nt,P as at,dT as ot}from"./three.module-BsINTyXW.js";import{p as it,D as st}from"./TileLoadingDebugPanels-oboZBlM7.js";import{N as lt}from"./terrain-CDUojVZ_.js";import{a as dt,l as ut,c as ct}from"./raster-dem-terrain-tile-source-DIUBSccH.js";import{T as fe,a as ve}from"./terrain-no-data-DISzn4WL.js";import{c as pt}from"./shared-three-scene-camera-preview-DJQ5MblO.js";import"./gltf1-upgrade-plugin-BnIraZfg.js";import{B as _}from"./button--E3d1eE9.js";import{S as oe}from"./index-9kLXGxEM.js";import{R as mt}from"./index-CA5isoQy.js";import{S as ht}from"./index-ClW0EZG2.js";import"./iframe-BpmSe-KH.js";import"./___vite-browser-external_commonjs-proxy-N_IygbFj.js";import"./geo-Fiaag3FL.js";import"./zoom-BADcZy_j.js";import"./scene-accumulator-BSDum8k6.js";import"./scene-accumulation-format-pMkB0RMu.js";import"./clamp-co6UzHBn.js";import"./plugins-DiPIaVd3-BUs4OHma.js";import"./DRACOLoader-B-rO9Syu.js";import"./hostname-hE_TUoNR.js";import"./plugins-BN2uUf5f-B-a5kHaQ.js";import"./tiles-camera-set-DInj6eja.js";import"./derived-cache-epoch-B1SlmyVB.js";import"./index-6T-cIyLx.js";import"./index-BmoRKiMu.js";import"./context-ByJTMbV5.js";import"./pi-mVFkAveX.js";import"./FrameWait-CZTuT4Ij.js";import"./carma-guards-BOsPgM1C.js";import"./Scene-o5kOEY1P.js";import"./meshopt_encoder.module-D2BiFfpM.js";import"./meshopt_decoder.module-Clo9gF-m.js";import"./sampleTerrainMostDetailed-DfniWuVz.js";import"./negative-pi-to-pi-B-FiLZ9M.js";import"./Picking-CwzWgS3a.js";import"./KeyCode-DzcwBGA9.js";import"./useCSSVarCls-BR1NoMov.js";import"./create-view-state-visualizer-C03Leiq5.js";import"./camera-intrinsics-utils-tHu2xf2P.js";import"./angle-normalization-DjAbKHgp.js";import"./derivations-B4Y59zzG.js";import"./plane-intersections-DhJfyQJx.js";import"./constants-C6-_E4xW.js";import"./geometry2d-Hnn8LWlg.js";import"./Line2-DHoRMF2J.js";import"./LineSegments2-k4_0rUZU.js";import"./LineGeometry-CzSN4Jlh.js";import"./mesh-helpers-D335rxiI.js";import"./index-DzECKETA.js";import"./BaseInput-yXMpEdQI.js";import"./TextArea-DZUGccyX.js";import"./CheckOutlined-DcuzhUSR.js";import"./index-Cl0vUQao.js";import"./index-CjdjAb2u.js";import"./PlusOutlined-RgqIkq_r.js";import"./config-DAlQCezX.js";import"./length-format-BQI28fDZ.js";import"./decimal-format-B9rCT_ZY.js";import"./locales-DbHdB30_.js";import"./formatSignificantNumber-DYV3PWeu.js";import"./Intrinsics-DVEZMeio.js";import"./private-shims-5e5gEO17.js";import"./CesiumWidget-CmOyFICy.js";import"./svgProjection-CK1IeL40.js";import"./useLineVisualizers-G1xf-PWC.js";import"./index-B5l9eJJN.js";const ie=["left","top","right","bottom"],gt=({width:r,height:e,sizes:s,enabled:m,gap:a=16,minimumViewport:g=32})=>{if(![r,e,a,g,...Object.values(s)].every(l=>Number.isFinite(l)&&l>=0))throw new RangeError("Viewport panel dimensions must be finite and non-negative");const o={left:0,top:0,right:0,bottom:0},h={...o};for(const l of ie){const c=Math.max(0,((l==="left"||l==="right"?r:e)-g)/2);o[l]=Math.min(s[l],Math.max(0,c-a*2)),h[l]=m[l]?Math.min(c,o[l]+a*2):0}return{extents:o,padding:h}},Se=(r,e)=>{if(!(e.duration>0)||e.curve.points.length<2)throw new Error("A camera flight needs a positive duration and two points");const s=new et(r),m=s.clipAction(e.clip);m.setLoop(tt,1),m.clampWhenFinished=!0,m.play();const a=new K,g=new K;let o,h;const l=e.clip.tracks.some(p=>p.name.endsWith(".quaternion"));return{sample(p,c){const y=(p%(e.duration*2)+e.duration*2)%(e.duration*2),n=(1-Math.cos(y*Math.PI/e.duration))/2;m.paused=!1,s.setTime(n*e.duration),e.curve.getPointAt(n,r.position),l||(e.target?r.lookAt(e.target):(e.curve.getTangentAt(n,a),r.lookAt(g.copy(r.position).add(a)))),c!==void 0&&(r.fov=c),r.fov=Math.min(120,Math.max(5,r.fov)),r.updateProjectionMatrix(),r.updateMatrixWorld(!0)},sampleAhead(p,c,y){if(!Number.isFinite(p)||!Number.isFinite(c)||c<0)throw new Error("Camera flight sample times must be finite and aheadMs must be non-negative");return o||(o=r.clone(),h=Se(o,e)),o.copy(r,!1),o.fov=r.fov,o.aspect=r.aspect,o.near=r.near,o.far=r.far,o.up.copy(r.up),o.zoom=r.zoom,o.filmGauge=r.filmGauge,o.filmOffset=r.filmOffset,o.view=r.view?{...r.view}:null,h.sample(p+c/1e3,y),o},dispose(){s.stopAllAction(),s.uncacheRoot(r),h==null||h.dispose(),o=void 0,h=void 0}}},bt=(r,e)=>new rt("camera-lens",r,[new nt(".fov",e.map((s,m)=>m*r/Math.max(1,e.length-1)),[...e])]),ft=async(r,e,s)=>{const m=await dt(r,{maxCacheBytes:16777216,meshSegments:16});try{const a=[];for(const[g,o]of e){s.throwIfAborted();const h=Math.max(r.minzoom,Math.min(13,r.maxzoom)),l={level:h,x:Math.floor(ut(g,h)),y:Math.floor(ct(o,h))};if(!m.getTileDataAvailable(l))throw new Error("Flight path lies outside the elevation source");await m.requestTile(l,s,5);const p=m.sampleHeight(g,o);if(p===void 0||!Number.isFinite(p))throw new Error("Flight path has missing elevation data");a.push(p)}return a}finally{m.release()}},vt=`{
  "version": 8,
  "metadata": {
    "carmaConf": {
      "layerInfo": {
        "title": "3D-MeshX 2024 (Cesium-Parität)",
        "description": "Inhalt: Das texturierte 3D-Stadtmodell von Wuppertal, Stand 2024. Es ist derselbe Kachelsatz, den die 3D-Ansicht des Geoportals schon zeichnet. Gelände, Gebäude und Bewuchs stecken darin in einem Stück; einzelne Objekte lassen sich nicht anklicken oder abfragen. Die Ebene zeichnet nichts in der zweidimensionalen Karte und wird erst in der 3D-Ansicht sichtbar. Weil das Modell absolute Höhen trägt, schaltet die Ebene das Gelände ein. Datengrundlage: 3D-Mesh 2024, © Stadt Wuppertal.",
        "tags": ["Basis", "3D", "Mesh"],
        "keywords": ["carmaconf://blockLegacyGetFeatureInfo"]
      },
      "3d": {
        "renderMode": "tiles3d",
        "tilesetUrl": "https://wupp-3d-datax.cismet.de/mesh2024/tileset.json",
        "providesTerrain": true,
        "basemap": "none",
        "errorTarget": 6,
        "baseErrorTarget": 12,
        "colorCorrection": {
          "gamma": [1.25, 1.25, 1.23],
          "blackPoint": [0, 0, 0],
          "whitePoint": [0.9, 0.9, 0.92],
          "saturation": 1
        },
        "entry": {
          "levels": [
            {
              "level": 0,
              "geometricError": 908.2,
              "bytes": 17541680
            },
            {
              "level": 1,
              "geometricError": 453.9,
              "bytes": 7572336
            },
            {
              "level": 2,
              "geometricError": 204.5,
              "bytes": 12552584
            },
            {
              "level": 3,
              "geometricError": 97.3,
              "bytes": 15919395
            },
            {
              "level": 4,
              "geometricError": 42.3,
              "bytes": 21283590
            },
            {
              "level": 5,
              "geometricError": 20.3,
              "bytes": 52100588
            },
            {
              "level": 6,
              "geometricError": 10.2,
              "bytes": 219608433
            },
            {
              "level": 7,
              "geometricError": 5,
              "bytes": 665994628
            },
            {
              "level": 8,
              "geometricError": 2.5,
              "bytes": 7367654500
            }
          ],
          "prefetch": [
            "2/tileset.json",
            "2/3/tileset.json",
            "2/3/1000002tileset.json",
            "2/3/1000007tileset.json",
            "2/3/1000008tileset.json",
            "2/3/1000001tileset.json",
            "2/4/tileset.json",
            "2/4/1000010tileset.json",
            "2/4/1000011tileset.json",
            "2/4/1000012tileset.json",
            "2/4/1000013tileset.json",
            "2/4/1000009tileset.json"
          ]
        }
      }
    }
  },
  "sources": {},
  "layers": [
    {
      "id": "mesh2024_3d",
      "type": "background",
      "layout": {
        "visibility": "none"
      },
      "paint": {
        "background-opacity": 0
      }
    }
  ]
}
`,R=16,we="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",je=({map:r})=>{const[e,s]=i.useState({left:!0,top:!1,right:!1,bottom:!1}),[m,a]=i.useState({left:288,right:288,top:160,bottom:160}),[g,o]=i.useState({width:0,height:0}),h=i.useRef(0),l=i.useRef(null);i.useEffect(()=>{const n=r.getContainer(),d=()=>o({width:n.clientWidth,height:n.clientHeight}),w=new ResizeObserver(d);return w.observe(n),d(),()=>{w.disconnect(),cancelAnimationFrame(h.current)}},[r]);const{extents:p,padding:c}=gt({...g,sizes:m,enabled:e,gap:R}),y=n=>p[n];return i.useEffect(()=>{!g.width||!g.height||r.setPadding(c)},[r,g.width,g.height,c.left,c.right,c.top,c.bottom]),i.useEffect(()=>()=>{r.getCanvas().isConnected&&r.setPadding({left:0,right:0,top:0,bottom:0})},[r]),t.jsxs(t.Fragment,{children:[t.jsxs("nav",{"aria-label":"Padding panels",style:{position:"absolute",left:"50%",bottom:R,transform:"translateX(-50%)",zIndex:5,display:"flex",gap:4,padding:6,borderRadius:10,background:"rgba(255,255,255,.9)",boxShadow:"0 1px 8px #0003"},children:[ie.map(n=>t.jsx("button",{"data-test-id":`padding-toggle-${n}`,"aria-pressed":e[n],onClick:()=>s(d=>({...d,[n]:!d[n]})),style:{cursor:"pointer",border:"1px solid #9aa7b3",borderRadius:6,padding:"5px 10px",background:e[n]?"#164e63":"#fff",color:e[n]?"#fff":"#172b3a",textTransform:"capitalize"},children:n},n)),t.jsx("button",{onClick:()=>s({left:!1,top:!1,right:!1,bottom:!1}),children:"Off"})]}),ie.filter(n=>e[n]).map(n=>{const d=n==="left"||n==="right",w={left:"right",right:"left",top:"bottom",bottom:"top"}[n],P=d?{[n]:R,top:c.top+R,bottom:c.bottom+R,width:y(n)}:{[n]:R,left:R,right:R,height:y(n)};return t.jsxs("aside",{"data-test-id":`padding-panel-${n}`,style:{...P,boxSizing:"border-box",position:"absolute",zIndex:3,padding:20,borderRadius:16,background:"rgba(248,250,252,.78)",color:"#172b3a",boxShadow:"0 2px 12px #0003",font:"14px/1.6 system-ui"},children:[t.jsxs("div",{style:{height:"100%",overflow:"hidden"},children:[t.jsxs("strong",{style:{textTransform:"capitalize"},children:[n," sidebar"]}),t.jsx("p",{children:we}),t.jsx("p",{children:we}),t.jsxs("small",{children:["Drag the inner edge · MapLibre padding:"," ",Math.round(c[n])," px"]})]}),t.jsx("div",{role:"separator",tabIndex:0,"aria-label":`Resize ${n} sidebar`,"aria-orientation":d?"vertical":"horizontal","aria-valuenow":Math.round(y(n)),"data-test-id":`padding-resize-${n}`,style:{position:"absolute",[w]:-4,...d?{top:14,bottom:14,width:10}:{left:14,right:14,height:10},cursor:d?"ew-resize":"ns-resize",touchAction:"none",borderRadius:6,background:"rgba(22,78,99,.3)"},onPointerDown:b=>{b.preventDefault(),b.currentTarget.setPointerCapture(b.pointerId),l.current={side:n,coordinate:d?b.clientX:b.clientY,size:y(n)}},onPointerMove:b=>{const T=l.current;if(!T||T.side!==n)return;const q=((d?b.clientX:b.clientY)-T.coordinate)*(n==="right"||n==="bottom"?-1:1),j=Math.max(48,T.size+q);cancelAnimationFrame(h.current),h.current=requestAnimationFrame(()=>a(L=>({...L,[n]:j})))},onPointerUp:b=>{l.current=null,b.currentTarget.releasePointerCapture(b.pointerId)},onLostPointerCapture:()=>{l.current=null},onKeyDown:b=>{if(!["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(b.key))return;b.preventDefault();const T=b.key==="ArrowRight"||b.key==="ArrowDown"?1:-1;a(q=>({...q,[n]:Math.max(48,y(n)+16*T*(n==="right"||n==="bottom"?-1:1))}))}})]},n)})]})};je.__docgenInfo={description:"UI occlusion goes only through MapLibre; no direct loader/camera updates.",methods:[],displayName:"ViewportPaddingPanels",props:{map:{required:!0,tsType:{name:"MapLibreMap"},description:""}}};const wt=({map:r,runtime:e,id:s,onClose:m,dockRequest:a})=>{const g=i.useRef(null),o=i.useRef(null),h=i.useRef(null),[l]=i.useState(()=>document.createElement("div")),p=i.useRef(null),[c,y]=i.useState(!1),[n,d]=i.useState(!1),[w,P]=i.useState({x:Math.min(16+s%3*355,Math.max(16,r.getContainer().clientWidth-356)),y:100+s%3*24}),[b,T]=i.useState("Waiting for loaded mesh"),[q,j]=i.useState(s%3===0?"schwebebahn":s%3===1?"wupper":"local"),[L,ze]=i.useState(60),[X,se]=i.useState(!0),[O,le]=i.useState(!0),I=i.useRef({width:340,height:220,fov:L,autoLens:X,playing:O});Object.assign(I.current,{fov:L,autoLens:X,playing:O});const de=()=>{var f;const u=p.current;p.current=null,(f=h.current)==null||f.append(l),y(!1),u&&!u.closed&&u.close()},Ae=()=>{if(p.current){de();return}const u=window.open("","_blank","popup,width=640,height=420");if(!u){T("Popup blocked — allow this site's popup to undock."),d(!0);return}p.current=u,u.document.title=`Tile manager · Camera ${s+1}`,Object.assign(u.document.body.style,{margin:"0",overflow:"hidden",height:"100vh"}),u.document.body.append(l),u.addEventListener("pagehide",()=>{var f;p.current===u&&(p.current=null,(f=h.current)==null||f.append(l),y(!1))},{once:!0}),y(!0)};i.useEffect(()=>{a>0&&de()},[a]),i.useEffect(()=>{var u;return Object.assign(l.style,{width:"100%",height:"100%"}),(u=h.current)==null||u.append(l),()=>{const f=p.current;p.current=null,f==null||f.close(),l.remove()}},[l]),i.useEffect(()=>{const u=o.current;if(!u)return;const f=()=>{var E;const k=u.clientWidth,z=u.clientHeight;if(k<=0||z<=0)return;const W=Math.min(((E=u.ownerDocument.defaultView)==null?void 0:E.devicePixelRatio)??1,2,2048/Math.max(k,z));I.current.width=Math.max(1,Math.round(k*W)),I.current.height=Math.max(1,Math.round(z*W))},B=new ResizeObserver(f);B.observe(u),f();const C=u.ownerDocument.defaultView;return C==null||C.addEventListener("resize",f),()=>{B.disconnect(),C==null||C.removeEventListener("resize",f)}},[c]);const D=i.useRef(null);i.useEffect(()=>{const u=g.current;if(!u)return;const f=ke(r),B=pt(f.layer),C=new at(60,340/220,1,12e3),k=`coverage-window-${s}`,z=r.getCenter(),W=new AbortController;let E,Z=0,Q=null,ee=0,te=window,re=!1,ue=-1/0,A=null,F=!1;(async()=>{const v=q==="local"?null:Ye[q],N=(v==null?void 0:v.coordinates)??[[z.lng,z.lat]];T("Preparing bounded DGM flight profile…");const x=await ft(lt,N,W.signal);if(F)return;const M=N.map((S,Fe)=>{const he=f.layer.projectLngLatToScene([S[0],S[1]],x[Fe]+((v==null?void 0:v.aboveGround)??100));if(!he)throw new Error("Shared scene has no geographic frame yet");return he}),pe=M[0].clone();if(!v){M.length=0;for(let S=0;S<8;S++)M.push(pe.clone().add(new K(Math.cos(S*Math.PI/4)*120,0,Math.sin(S*Math.PI/4)*120)))}const U=Ke,We=q==="wupper"?f.layer.projectLngLatToScene([U.longitude,U.latitude],(U.footHeight+U.topHeight)/2)??void 0:q==="local"?pe.clone().add(new K(0,-80,0)):void 0,me=(v==null?void 0:v.duration)??90;E=Se(C,{curve:new ot(M,!v,"centripetal"),duration:me,target:We,clip:bt(me,(v==null?void 0:v.fov)??[60,45,60])}),T((v==null?void 0:v.note)??"Local orbit · DGM + 100 m"),r.triggerRepaint()})().catch(v=>{F||T(String(v))});const ce=()=>{if(F)return;te=u.ownerDocument.defaultView??window,ee=te.requestAnimationFrame(ce);const v=performance.now(),N=Q===null?0:Math.max(0,Math.min((v-Q)/1e3,.1));if(Q=v,!E||f.layer.isRenderingPaused())return;const x=I.current;x.playing&&(Z+=N),!re&&(C.aspect=x.width/x.height,E.sample(Z,x.autoLens?void 0:x.fov),f.layer.setTileCameraView({id:k,camera:C,viewport:[x.width,x.height],errorTargetPixels:4,role:fe.RECEIVER,priority:ve.SECONDARY}),x.playing&&v-ue>=100?(ue=v,A=f.layer.requestTileCameraAhead(M=>({id:`${k}:ahead`,camera:E.sampleAhead(Z,M,x.autoLens?void 0:x.fov),viewport:[x.width,x.height],errorTargetPixels:4,role:fe.RECEIVER,priority:ve.SECONDARY}),500)):!x.playing&&A&&(f.layer.removePrefetchCameraView(A),A=null),r.triggerRepaint(),re=!0,B.present(C,u,x.width,x.height).catch(M=>{F||T(String(M))}).finally(()=>{re=!1}))};return ee=requestAnimationFrame(ce),()=>{F=!0,W.abort(),E==null||E.dispose(),te.cancelAnimationFrame(ee),f.layer.removeTileCameraView(k),A&&f.layer.removePrefetchCameraView(A),B.dispose(),f.release(),r.triggerRepaint()}},[r,e,s,q]);const Be=t.jsxs(Ie,{container:l.ownerDocument.head,children:[t.jsx("style",{children:it}),t.jsxs("section",{className:"tile-debug-panel","data-test-id":`coverage-camera-window-${s}`,style:{background:"transparent",width:"100%",height:"100%",display:"flex",flexDirection:"column",overflow:"hidden"},children:[t.jsxs("header",{style:{background:"rgb(248 250 252 / 96%)",display:"flex",justifyContent:"space-between",padding:"0 4px 0 8px",alignItems:"center",flexShrink:0,height:30,cursor:c?"default":"move",touchAction:"none"},onPointerDown:u=>{c||u.target.closest("button")||(D.current={x:u.clientX-w.x,y:u.clientY-w.y},u.currentTarget.setPointerCapture(u.pointerId))},onPointerMove:u=>{D.current&&P({x:Math.max(0,Math.min(r.getContainer().clientWidth-80,u.clientX-D.current.x)),y:Math.max(0,Math.min(window.innerHeight-32,u.clientY-D.current.y))})},onPointerUp:()=>{D.current=null},onPointerCancel:()=>{D.current=null},children:[t.jsxs("span",{children:["Camera ",s+1]}),t.jsxs(st,{label:`camera ${s+1}`,external:c,onToggleExternal:Ae,onClose:m,children:[t.jsx(_,{type:"text","aria-label":`Camera ${s+1} options`,"aria-expanded":n,onClick:()=>d(!n),icon:t.jsx(Y,{icon:Ne})}),t.jsx(_,{type:"text","aria-label":`${O?"Pause":"Play"} camera ${s+1}`,onClick:()=>le(!O),icon:t.jsx(Y,{icon:O?Ue:He})})]})]}),t.jsxs("div",{ref:o,style:{position:"relative",flex:1,minHeight:0,overflow:"hidden"},children:[t.jsx("canvas",{ref:g,"data-test-id":"tile-manager-camera-preview",width:320,height:200,style:{display:"block",width:"100%",height:"100%",transform:"scaleY(-1)",background:"#18212b"}}),n&&t.jsxs("div",{"data-test-id":`camera-options-${s}`,style:{position:"absolute",top:0,right:0,bottom:0,maxWidth:"100%",boxSizing:"border-box",width:280,overflow:"auto",padding:10,background:"rgb(248 250 252 / 94%)",display:"grid",alignContent:"start",gap:8},children:[t.jsx(mt.Group,{size:"small",value:q,onChange:u=>j(u.target.value),optionType:"button",options:[{value:"schwebebahn",label:"Rail"},{value:"wupper",label:"Wupper → HKW"},{value:"local",label:"Local"}]}),t.jsxs("label",{children:[t.jsx(oe,{size:"small",checked:X,onChange:se})," ","Animated lens ·"," ",t.jsx(oe,{size:"small",checked:O,onChange:le})," ","Fly"]}),t.jsxs("label",{children:["Vertical FOV ",L,"° (manual override)",t.jsx(ht,{"aria-label":`Camera ${s+1} FOV`,min:5,max:120,value:L,onChange:u=>{ze(u),se(!1)}})]}),t.jsx("div",{children:"Resolution follows window size (up to 2048 px per side)."}),t.jsx("div",{role:"status",children:b})]})]})]})]});return t.jsxs(t.Fragment,{children:[t.jsx("div",{ref:h,"data-test-id":`camera-dock-${s}`,style:{position:"absolute",left:w.x,top:w.y,width:340,height:250,minWidth:240,minHeight:150,maxWidth:"100%",maxHeight:"90%",resize:"both",overflow:"hidden",zIndex:8,display:c?"none":"block"}}),Qe.createPortal(Be,l)]})},Le=({map:r,runtime:e,initialCount:s=0})=>{const[m,a]=i.useState(!1),[g,o]=i.useState(0),[h,l]=i.useState(()=>[0,1,2].slice(0,s));return t.jsxs(t.Fragment,{children:[t.jsx(_,{"data-test-id":"coverage-camera-controls","aria-label":"Cameras",title:`Cameras · ${h.length}/3 active`,"aria-expanded":m,icon:t.jsx(Y,{icon:Ve}),style:{position:"absolute",top:8,right:52,zIndex:12},onClick:()=>a(!m)}),m&&t.jsxs("section",{className:"tile-debug-panel","data-test-id":"coverage-camera-control-window",style:{position:"absolute",top:46,right:52,zIndex:12,width:260,padding:10,background:"rgb(248 250 252 / 94%)"},children:[t.jsxs("header",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[t.jsxs("strong",{children:["Cameras · ",h.length,"/3"]}),t.jsx(_,{type:"text","aria-label":"Close camera controls",onClick:()=>a(!1),children:"×"})]}),["Schwebebahn","Wupper → HKW","Local orbit"].map((p,c)=>t.jsxs("label",{style:{display:"flex",gap:10,alignItems:"center",paddingBlock:8},children:[t.jsx(oe,{size:"small","aria-label":`Enable camera ${c+1}`,checked:h.includes(c),onChange:y=>l(n=>y?[...n.filter(d=>d!==c),c].sort():n.filter(d=>d!==c))}),"Camera ",c+1," · ",p]},c)),t.jsx("small",{children:"Drag a header, resize its corner, or undock. All cameras share the main scene and tile pool."}),t.jsx(_,{style:{marginTop:8},icon:t.jsx(Y,{icon:_e}),onClick:()=>o(p=>p+1),children:"Dock all cameras"})]}),h.map(p=>t.jsx(wt,{id:p,dockRequest:g,map:r,runtime:e,onClose:()=>l(c=>c.filter(y=>y!==p))},p))]})};Le.__docgenInfo={description:"Coverage story variant: all windows consume the host's existing scene and pool.",methods:[],displayName:"MeshCoverageCameraWindows",props:{map:{required:!0,tsType:{name:"MapLibreMap"},description:""},runtime:{required:!0,tsType:{name:"ThreeTilesRuntime"},description:""},initialCount:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}}}};const V={"parity zoom 18":{zoom:18,pitch:0,bearing:0},"zoomed in 20":{zoom:20,pitch:0,bearing:0},"overview 14":{zoom:14,pitch:0,bearing:0},"oblique 15":{zoom:15,pitch:75,bearing:20},"horizon 16":{zoom:16,pitch:85,bearing:-30}},yt=JSON.parse(vt),ae=[7.1999207,51.2725716],xt=1,G=yt.metadata.carmaConf["3d"],Oe=({onOptionsChange:r,...e})=>{const s=i.useRef(e);s.current=e;const m=i.useRef(null),[a,g]=i.useState(null),[o,h]=i.useState({width:0,height:0,x:0,y:0,left:0,right:0,top:0,bottom:0}),[l,p]=i.useState(null),[c]=i.useState(()=>Ge({capacity:120,logCapacity:300}));window.__meshCoverageRecorder=c,i.useEffect(()=>{if(!m.current)return;const d=new ge.Map({container:m.current,center:ae,zoom:V[e.camera].zoom-1,pitch:V[e.camera].pitch,bearing:V[e.camera].bearing,maxPitch:85,minZoom:0,maxZoom:25,attributionControl:{},style:Je(null)});d.addControl(new ge.NavigationControl),d.setPadding({left:e.paddingLeft??0,right:e.paddingRight??0,top:e.paddingTop??0,bottom:e.paddingBottom??0});let w=null,P=null;const b=()=>{w=ke(d),P=$e("mesh-2024-coverage",G.tilesetUrl,ae,{providesTerrain:!0,mapStyleDrape:"none",colorCorrection:G.colorCorrection,entry:G.entry,baseErrorTargetPixels:s.current.initialPixelError??G.baseErrorTarget,diagnostics:s.current.debug&&s.current.telemetryEnabled,cacheBudgetBytes:6*1024**3}),P.loading.setErrorTarget(s.current.idlePixelError??be),P.loading.setTilesetMinResolution(s.current.tilesetMinResolutionPx>0?s.current.tilesetMinResolutionPx:null),w.layer.addRuntime(P.scene),p(P),g(d)};return d.once("load",b),()=>{g(null),p(null),P&&w&&w.layer.removeRuntime(P.scene.id),w==null||w.release(),d.remove()}},[]);const y=i.useRef(!0);i.useEffect(()=>{l==null||l.loading.setErrorTarget(e.idlePixelError??be,e.initialPixelError??G.baseErrorTarget)},[l,e.idlePixelError,e.initialPixelError]),i.useEffect(()=>{if(!a)return;const d=V[e.camera],w={center:ae,zoom:d.zoom-1,pitch:d.pitch,bearing:d.bearing};y.current?(y.current=!1,a.jumpTo(w)):a.easeTo({...w,duration:1200})},[a,e.camera]),i.useEffect(()=>{a&&a.setVerticalFieldOfView(e.projection==="near orthographic"?xt:e.fovDegrees)},[a,e.projection,e.fovDegrees]),i.useEffect(()=>{if(!a)return;e.paddingPanels||a.setPadding({left:e.paddingLeft??0,right:e.paddingRight??0,top:e.paddingTop??0,bottom:e.paddingBottom??0});const d=()=>{if(!e.showPaddingGuide)return;const w=a.getCanvas(),P=a.project(a.getCenter()),b=a.getPadding(),T={width:w.clientWidth,height:w.clientHeight,x:Math.round(P.x*100)/100,y:Math.round(P.y*100)/100,left:b.left??0,right:b.right??0,top:b.top??0,bottom:b.bottom??0};h(q=>Object.keys(T).every(j=>q[j]===T[j])?q:T)};return d(),a.on("resize",d),a.on("move",d),()=>{a.off("resize",d),a.off("move",d)}},[a,e.paddingLeft,e.paddingRight,e.paddingTop,e.paddingBottom,e.showPaddingGuide,e.paddingPanels]),i.useEffect(()=>{if(!a||!m.current)return;const d=new ResizeObserver(()=>a.resize());return d.observe(m.current),()=>d.disconnect()},[a]);const n=o.x+110>o.width;return t.jsx("div",{className:"mesh-coverage-story",style:{height:"100vh",position:"relative",width:e.viewportWidth?`${e.viewportWidth}px`:"100%",maxWidth:"100%",marginInline:"auto"},children:t.jsxs("div",{style:{position:"absolute",inset:0},children:[t.jsx("div",{ref:m,"data-test-id":"mesh-coverage-map",style:{position:"absolute",inset:0,background:"#d8dde3"}}),e.showPaddingGuide&&t.jsxs("svg",{"data-test-id":"mesh-coverage-padding-guide",width:"100%",height:"100%",style:{position:"absolute",inset:0,pointerEvents:"none",overflow:"hidden"},"aria-label":"Usable viewport and padded map center",children:[t.jsx("rect",{x:o.left,y:o.top,width:Math.max(0,o.width-o.left-o.right),height:Math.max(0,o.height-o.top-o.bottom),fill:"none",stroke:"#00eaff",strokeWidth:"2"}),t.jsx("path",{"data-test-id":"mesh-coverage-padding-focus",d:`M${o.x-10},${o.y}h20 M${o.x},${o.y-10}v20`,fill:"none",stroke:"#00eaff",strokeWidth:"2"}),t.jsx("text",{x:o.x+(n?-14:14),y:Math.max(16,Math.min(o.height-6,o.y-8)),textAnchor:n?"end":"start",fill:"#00eaff",stroke:"#123",strokeWidth:"3",paintOrder:"stroke",style:{font:"12px sans-serif"},children:"Padded focus"})]}),a&&e.paddingPanels&&t.jsx(je,{map:a}),a&&l&&t.jsx(Le,{map:a,runtime:l,initialCount:e.cameraWindows?3:0},String(!!e.cameraWindows)),a&&l&&t.jsx(Xe,{map:a,recorder:c,options:e,runtimeHandle:l,onOptionsChange:r,open:e.debug,onOpenChange:d=>r({debug:d})})]})})},De=r=>{const[e,s]=i.useState({});i.useEffect(()=>{s(a=>{if(a.debug===void 0)return a;const g={...a};return delete g.debug,g})},[r.debug]);const m={...r,...e};return t.jsx(Oe,{...m,onOptionsChange:a=>s(g=>({...g,...a}))})};Oe.__docgenInfo={description:"",methods:[],displayName:"MeshCoverageScene",props:{showOverviewPanel:{required:!0,tsType:{name:"boolean"},description:""},showOverviewOptions:{required:!1,tsType:{name:"boolean"},description:""},showDiagnosticTools:{required:!1,tsType:{name:"boolean"},description:""},overviewUp:{required:!0,tsType:{name:"union",raw:'"tileset" | "camera-tangent"',elements:[{name:"literal",value:'"tileset"'},{name:"literal",value:'"camera-tangent"'}]},description:""},showTileGeometry:{required:!0,tsType:{name:"boolean"},description:""},showMeshStylePanel:{required:!1,tsType:{name:"boolean"},description:""},meshFillOpacity:{required:!1,tsType:{name:"number"},description:""},wireframeColor:{required:!1,tsType:{name:"string"},description:""},showOverlay:{required:!0,tsType:{name:"boolean"},description:""},hideAllDebugPanels:{required:!0,tsType:{name:"boolean"},description:""},telemetryEnabled:{required:!0,tsType:{name:"boolean"},description:""},updateOnRender:{required:!1,tsType:{name:"boolean"},description:"Capture on each scene render; coalesce while a previous capture is running."},showLegend:{required:!0,tsType:{name:"boolean"},description:""},showCharts:{required:!0,tsType:{name:"boolean"},description:""},showEventLog:{required:!0,tsType:{name:"boolean"},description:""},overviewView:{required:!0,tsType:{name:"union",raw:'"extent" | "frustum" | "free"',elements:[{name:"literal",value:'"extent"'},{name:"literal",value:'"frustum"'},{name:"literal",value:'"free"'}]},description:`Overview view: the whole extent; the frustum footprint plus a buffer,
centred on the screen-centre ray and following the camera; or a free
slippy view with wheel zoom and drag (blocks the map underneath).`},overviewCameraFocus:{required:!1,tsType:{name:"string"},description:""},overviewPaddingPercent:{required:!1,tsType:{name:"number"},description:"100 fits the viewport; 200 doubles its extent."},overlayOpacity:{required:!0,tsType:{name:"number"},description:""},showFrustum:{required:!0,tsType:{name:"boolean"},description:""},showResident:{required:!0,tsType:{name:"boolean"},description:""},overlayLabels:{required:!0,tsType:{name:"union",raw:'"none" | "id" | "id and error"',elements:[{name:"literal",value:'"none"'},{name:"literal",value:'"id"'},{name:"literal",value:'"id and error"'}]},description:"Text on the overview rectangles."},sceneLabels:{required:!0,tsType:{name:"boolean"},description:"Tile ids as DOM billboards at the top-plane centre of displayed tiles."},showQueue:{required:!0,tsType:{name:"boolean"},description:""},showStats:{required:!0,tsType:{name:"boolean"},description:""},sceneExtents:{required:!0,tsType:{name:"union",raw:'"none" | "boxes" | "edges"',elements:[{name:"literal",value:'"none"'},{name:"literal",value:'"boxes"'},{name:"literal",value:'"edges"'}]},description:"Tile extents in the scene, coloured like the overview: instanced cubes or edges."},debugColorMode:{required:!0,tsType:{name:"unknown[number]",raw:"(typeof DEBUG_COLOR_MODES)[number]"},description:"3DTilesRendererJS DebugTilesPlugin: tile colour mode and bounds helpers."},debugBoxBounds:{required:!0,tsType:{name:"boolean"},description:""},debugSphereBounds:{required:!0,tsType:{name:"boolean"},description:""},debugParentBounds:{required:!0,tsType:{name:"boolean"},description:""},debugUnlit:{required:!0,tsType:{name:"boolean"},description:""},foveation:{required:!0,tsType:{name:"number"},description:"Foveated request order: 0 nearest first, higher favours the view centre."},tilesetMinResolutionPx:{required:!0,tsType:{name:"number"},description:"Residual quality: the extent shown across this many pixels; 0 keeps the hinted floor."},parseJobs:{required:!0,tsType:{name:"number"},description:"Parse jobs at rest (GLTF scene creation on the renderer thread)."},cacheBudgetMB:{required:!0,tsType:{name:"number"},description:"Tile cache budget in MB. The diagnostic starts with the shared 6 GiB stress budget."},debug:{required:!0,tsType:{name:"boolean"},description:""},initialPixelError:{required:!1,tsType:{name:"number"},description:""},idlePixelError:{required:!1,tsType:{name:"number"},description:""},camera:{required:!0,tsType:{name:"union",raw:"keyof typeof CAMERA_PRESETS",elements:[{name:"literal",value:'"parity zoom 18"'},{name:"literal",value:'"zoomed in 20"'},{name:"literal",value:'"overview 14"'},{name:"literal",value:'"oblique 15"'},{name:"literal",value:'"horizon 16"'}]},description:"Start view; changing it eases the camera there."},projection:{required:!0,tsType:{name:"union",raw:'"perspective" | "near orthographic"',elements:[{name:"literal",value:'"perspective"'},{name:"literal",value:'"near orthographic"'}]},description:`MapLibre has no orthographic projection; one-degree vertical FOV moves
the camera far out and flattens perspective for both map and tiles.`},fovDegrees:{required:!0,tsType:{name:"number"},description:"Vertical field of view of the perspective camera in degrees."},paddingLeft:{required:!1,tsType:{name:"number"},description:"MapLibre viewport insets in CSS pixels; coverage still fills the canvas."},paddingRight:{required:!1,tsType:{name:"number"},description:""},paddingTop:{required:!1,tsType:{name:"number"},description:""},paddingBottom:{required:!1,tsType:{name:"number"},description:""},showPaddingGuide:{required:!1,tsType:{name:"boolean"},description:""},paddingPanels:{required:!1,tsType:{name:"boolean"},description:""},viewportWidth:{required:!1,tsType:{name:"number"},description:"Zero follows the available width; positive values exercise narrow hosts."},cameraWindows:{required:!1,tsType:{name:"boolean"},description:""},onOptionsChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(patch: Partial<MeshCoverageDemoOptions>) => void",signature:{arguments:[{type:{name:"Partial",elements:[{name:"intersection",raw:`TileLoadingDebugOptions &
TileLoadingDebugLoadingOptions & {
  debug: boolean;
  initialPixelError?: number;
  idlePixelError?: number;
  /** Start view; changing it eases the camera there. */
  camera: CameraPreset;
  /**
   * MapLibre has no orthographic projection; one-degree vertical FOV moves
   * the camera far out and flattens perspective for both map and tiles.
   */
  projection: "perspective" | "near orthographic";
  /** Vertical field of view of the perspective camera in degrees. */
  fovDegrees: number;
  /** MapLibre viewport insets in CSS pixels; coverage still fills the canvas. */
  paddingLeft?: number;
  paddingRight?: number;
  paddingTop?: number;
  paddingBottom?: number;
  showPaddingGuide?: boolean;
  paddingPanels?: boolean;
  /** Zero follows the available width; positive values exercise narrow hosts. */
  viewportWidth?: number;
  cameraWindows?: boolean;
}`,elements:[{name:"signature",type:"object",raw:`{
  showOverviewPanel: boolean;
  showOverviewOptions?: boolean;
  showDiagnosticTools?: boolean;
  overviewUp: "tileset" | "camera-tangent";
  showTileGeometry: boolean;
  showMeshStylePanel?: boolean;
  meshFillOpacity?: number;
  wireframeColor?: string;
  showOverlay: boolean;
  hideAllDebugPanels: boolean;
  telemetryEnabled: boolean;
  /** Capture on each scene render; coalesce while a previous capture is running. */
  updateOnRender?: boolean;
  showLegend: boolean;
  showCharts: boolean;
  showEventLog: boolean;
  /**
   * Overview view: the whole extent; the frustum footprint plus a buffer,
   * centred on the screen-centre ray and following the camera; or a free
   * slippy view with wheel zoom and drag (blocks the map underneath).
   */
  overviewView: "extent" | "frustum" | "free";
  overviewCameraFocus?: string;
  /** 100 fits the viewport; 200 doubles its extent. */
  overviewPaddingPercent?: number;
  overlayOpacity: number;
  showFrustum: boolean;
  showResident: boolean;
  /** Text on the overview rectangles. */
  overlayLabels: "none" | "id" | "id and error";
  /** Tile ids as DOM billboards at the top-plane centre of displayed tiles. */
  sceneLabels: boolean;
  showQueue: boolean;
  showStats: boolean;
  /** Tile extents in the scene, coloured like the overview: instanced cubes or edges. */
  sceneExtents: "none" | "boxes" | "edges";
  /** 3DTilesRendererJS DebugTilesPlugin: tile colour mode and bounds helpers. */
  debugColorMode: DebugColorModeName;
  debugBoxBounds: boolean;
  debugSphereBounds: boolean;
  debugParentBounds: boolean;
  debugUnlit: boolean;
}`,signature:{properties:[{key:"showOverviewPanel",value:{name:"boolean",required:!0}},{key:"showOverviewOptions",value:{name:"boolean",required:!1}},{key:"showDiagnosticTools",value:{name:"boolean",required:!1}},{key:"overviewUp",value:{name:"union",raw:'"tileset" | "camera-tangent"',elements:[{name:"literal",value:'"tileset"'},{name:"literal",value:'"camera-tangent"'}],required:!0}},{key:"showTileGeometry",value:{name:"boolean",required:!0}},{key:"showMeshStylePanel",value:{name:"boolean",required:!1}},{key:"meshFillOpacity",value:{name:"number",required:!1}},{key:"wireframeColor",value:{name:"string",required:!1}},{key:"showOverlay",value:{name:"boolean",required:!0}},{key:"hideAllDebugPanels",value:{name:"boolean",required:!0}},{key:"telemetryEnabled",value:{name:"boolean",required:!0}},{key:"updateOnRender",value:{name:"boolean",required:!1},description:"Capture on each scene render; coalesce while a previous capture is running."},{key:"showLegend",value:{name:"boolean",required:!0}},{key:"showCharts",value:{name:"boolean",required:!0}},{key:"showEventLog",value:{name:"boolean",required:!0}},{key:"overviewView",value:{name:"union",raw:'"extent" | "frustum" | "free"',elements:[{name:"literal",value:'"extent"'},{name:"literal",value:'"frustum"'},{name:"literal",value:'"free"'}],required:!0},description:`Overview view: the whole extent; the frustum footprint plus a buffer,
centred on the screen-centre ray and following the camera; or a free
slippy view with wheel zoom and drag (blocks the map underneath).`},{key:"overviewCameraFocus",value:{name:"string",required:!1}},{key:"overviewPaddingPercent",value:{name:"number",required:!1},description:"100 fits the viewport; 200 doubles its extent."},{key:"overlayOpacity",value:{name:"number",required:!0}},{key:"showFrustum",value:{name:"boolean",required:!0}},{key:"showResident",value:{name:"boolean",required:!0}},{key:"overlayLabels",value:{name:"union",raw:'"none" | "id" | "id and error"',elements:[{name:"literal",value:'"none"'},{name:"literal",value:'"id"'},{name:"literal",value:'"id and error"'}],required:!0},description:"Text on the overview rectangles."},{key:"sceneLabels",value:{name:"boolean",required:!0},description:"Tile ids as DOM billboards at the top-plane centre of displayed tiles."},{key:"showQueue",value:{name:"boolean",required:!0}},{key:"showStats",value:{name:"boolean",required:!0}},{key:"sceneExtents",value:{name:"union",raw:'"none" | "boxes" | "edges"',elements:[{name:"literal",value:'"none"'},{name:"literal",value:'"boxes"'},{name:"literal",value:'"edges"'}],required:!0},description:"Tile extents in the scene, coloured like the overview: instanced cubes or edges."},{key:"debugColorMode",value:{name:"unknown[number]",raw:"(typeof DEBUG_COLOR_MODES)[number]",required:!0},description:"3DTilesRendererJS DebugTilesPlugin: tile colour mode and bounds helpers."},{key:"debugBoxBounds",value:{name:"boolean",required:!0}},{key:"debugSphereBounds",value:{name:"boolean",required:!0}},{key:"debugParentBounds",value:{name:"boolean",required:!0}},{key:"debugUnlit",value:{name:"boolean",required:!0}}]}},{name:"signature",type:"object",raw:`{
  /** Foveated request order: 0 nearest first, higher favours the view centre. */
  foveation: number;
  /** Residual quality: the extent shown across this many pixels; 0 keeps the hinted floor. */
  tilesetMinResolutionPx: number;
  /** Parse jobs at rest (GLTF scene creation on the renderer thread). */
  parseJobs: number;
  /** Tile cache budget in MB. The diagnostic starts with the shared 6 GiB stress budget. */
  cacheBudgetMB: number;
}`,signature:{properties:[{key:"foveation",value:{name:"number",required:!0},description:"Foveated request order: 0 nearest first, higher favours the view centre."},{key:"tilesetMinResolutionPx",value:{name:"number",required:!0},description:"Residual quality: the extent shown across this many pixels; 0 keeps the hinted floor."},{key:"parseJobs",value:{name:"number",required:!0},description:"Parse jobs at rest (GLTF scene creation on the renderer thread)."},{key:"cacheBudgetMB",value:{name:"number",required:!0},description:"Tile cache budget in MB. The diagnostic starts with the shared 6 GiB stress budget."}]}},{name:"signature",type:"object",raw:`{
  debug: boolean;
  initialPixelError?: number;
  idlePixelError?: number;
  /** Start view; changing it eases the camera there. */
  camera: CameraPreset;
  /**
   * MapLibre has no orthographic projection; one-degree vertical FOV moves
   * the camera far out and flattens perspective for both map and tiles.
   */
  projection: "perspective" | "near orthographic";
  /** Vertical field of view of the perspective camera in degrees. */
  fovDegrees: number;
  /** MapLibre viewport insets in CSS pixels; coverage still fills the canvas. */
  paddingLeft?: number;
  paddingRight?: number;
  paddingTop?: number;
  paddingBottom?: number;
  showPaddingGuide?: boolean;
  paddingPanels?: boolean;
  /** Zero follows the available width; positive values exercise narrow hosts. */
  viewportWidth?: number;
  cameraWindows?: boolean;
}`,signature:{properties:[{key:"debug",value:{name:"boolean",required:!0}},{key:"initialPixelError",value:{name:"number",required:!1}},{key:"idlePixelError",value:{name:"number",required:!1}},{key:"camera",value:{name:"union",raw:"keyof typeof CAMERA_PRESETS",elements:[{name:"literal",value:'"parity zoom 18"'},{name:"literal",value:'"zoomed in 20"'},{name:"literal",value:'"overview 14"'},{name:"literal",value:'"oblique 15"'},{name:"literal",value:'"horizon 16"'}],required:!0},description:"Start view; changing it eases the camera there."},{key:"projection",value:{name:"union",raw:'"perspective" | "near orthographic"',elements:[{name:"literal",value:'"perspective"'},{name:"literal",value:'"near orthographic"'}],required:!0},description:`MapLibre has no orthographic projection; one-degree vertical FOV moves
the camera far out and flattens perspective for both map and tiles.`},{key:"fovDegrees",value:{name:"number",required:!0},description:"Vertical field of view of the perspective camera in degrees."},{key:"paddingLeft",value:{name:"number",required:!1},description:"MapLibre viewport insets in CSS pixels; coverage still fills the canvas."},{key:"paddingRight",value:{name:"number",required:!1}},{key:"paddingTop",value:{name:"number",required:!1}},{key:"paddingBottom",value:{name:"number",required:!1}},{key:"showPaddingGuide",value:{name:"boolean",required:!1}},{key:"paddingPanels",value:{name:"boolean",required:!1}},{key:"viewportWidth",value:{name:"number",required:!1},description:"Zero follows the available width; positive values exercise narrow hosts."},{key:"cameraWindows",value:{name:"boolean",required:!1}}]}}]}],raw:"Partial<MeshCoverageDemoOptions>"},name:"patch"}],return:{name:"void"}}},description:""}}};De.__docgenInfo={description:"Direct MapLibre host: no portals, topic-map or provider dependency stack.",methods:[],displayName:"MeshCoverageDemo",props:{showOverviewPanel:{required:!0,tsType:{name:"boolean"},description:""},showOverviewOptions:{required:!1,tsType:{name:"boolean"},description:""},showDiagnosticTools:{required:!1,tsType:{name:"boolean"},description:""},overviewUp:{required:!0,tsType:{name:"union",raw:'"tileset" | "camera-tangent"',elements:[{name:"literal",value:'"tileset"'},{name:"literal",value:'"camera-tangent"'}]},description:""},showTileGeometry:{required:!0,tsType:{name:"boolean"},description:""},showMeshStylePanel:{required:!1,tsType:{name:"boolean"},description:""},meshFillOpacity:{required:!1,tsType:{name:"number"},description:""},wireframeColor:{required:!1,tsType:{name:"string"},description:""},showOverlay:{required:!0,tsType:{name:"boolean"},description:""},hideAllDebugPanels:{required:!0,tsType:{name:"boolean"},description:""},telemetryEnabled:{required:!0,tsType:{name:"boolean"},description:""},updateOnRender:{required:!1,tsType:{name:"boolean"},description:"Capture on each scene render; coalesce while a previous capture is running."},showLegend:{required:!0,tsType:{name:"boolean"},description:""},showCharts:{required:!0,tsType:{name:"boolean"},description:""},showEventLog:{required:!0,tsType:{name:"boolean"},description:""},overviewView:{required:!0,tsType:{name:"union",raw:'"extent" | "frustum" | "free"',elements:[{name:"literal",value:'"extent"'},{name:"literal",value:'"frustum"'},{name:"literal",value:'"free"'}]},description:`Overview view: the whole extent; the frustum footprint plus a buffer,
centred on the screen-centre ray and following the camera; or a free
slippy view with wheel zoom and drag (blocks the map underneath).`},overviewCameraFocus:{required:!1,tsType:{name:"string"},description:""},overviewPaddingPercent:{required:!1,tsType:{name:"number"},description:"100 fits the viewport; 200 doubles its extent."},overlayOpacity:{required:!0,tsType:{name:"number"},description:""},showFrustum:{required:!0,tsType:{name:"boolean"},description:""},showResident:{required:!0,tsType:{name:"boolean"},description:""},overlayLabels:{required:!0,tsType:{name:"union",raw:'"none" | "id" | "id and error"',elements:[{name:"literal",value:'"none"'},{name:"literal",value:'"id"'},{name:"literal",value:'"id and error"'}]},description:"Text on the overview rectangles."},sceneLabels:{required:!0,tsType:{name:"boolean"},description:"Tile ids as DOM billboards at the top-plane centre of displayed tiles."},showQueue:{required:!0,tsType:{name:"boolean"},description:""},showStats:{required:!0,tsType:{name:"boolean"},description:""},sceneExtents:{required:!0,tsType:{name:"union",raw:'"none" | "boxes" | "edges"',elements:[{name:"literal",value:'"none"'},{name:"literal",value:'"boxes"'},{name:"literal",value:'"edges"'}]},description:"Tile extents in the scene, coloured like the overview: instanced cubes or edges."},debugColorMode:{required:!0,tsType:{name:"unknown[number]",raw:"(typeof DEBUG_COLOR_MODES)[number]"},description:"3DTilesRendererJS DebugTilesPlugin: tile colour mode and bounds helpers."},debugBoxBounds:{required:!0,tsType:{name:"boolean"},description:""},debugSphereBounds:{required:!0,tsType:{name:"boolean"},description:""},debugParentBounds:{required:!0,tsType:{name:"boolean"},description:""},debugUnlit:{required:!0,tsType:{name:"boolean"},description:""},foveation:{required:!0,tsType:{name:"number"},description:"Foveated request order: 0 nearest first, higher favours the view centre."},tilesetMinResolutionPx:{required:!0,tsType:{name:"number"},description:"Residual quality: the extent shown across this many pixels; 0 keeps the hinted floor."},parseJobs:{required:!0,tsType:{name:"number"},description:"Parse jobs at rest (GLTF scene creation on the renderer thread)."},cacheBudgetMB:{required:!0,tsType:{name:"number"},description:"Tile cache budget in MB. The diagnostic starts with the shared 6 GiB stress budget."},debug:{required:!0,tsType:{name:"boolean"},description:""},initialPixelError:{required:!1,tsType:{name:"number"},description:""},idlePixelError:{required:!1,tsType:{name:"number"},description:""},camera:{required:!0,tsType:{name:"union",raw:"keyof typeof CAMERA_PRESETS",elements:[{name:"literal",value:'"parity zoom 18"'},{name:"literal",value:'"zoomed in 20"'},{name:"literal",value:'"overview 14"'},{name:"literal",value:'"oblique 15"'},{name:"literal",value:'"horizon 16"'}]},description:"Start view; changing it eases the camera there."},projection:{required:!0,tsType:{name:"union",raw:'"perspective" | "near orthographic"',elements:[{name:"literal",value:'"perspective"'},{name:"literal",value:'"near orthographic"'}]},description:`MapLibre has no orthographic projection; one-degree vertical FOV moves
the camera far out and flattens perspective for both map and tiles.`},fovDegrees:{required:!0,tsType:{name:"number"},description:"Vertical field of view of the perspective camera in degrees."},paddingLeft:{required:!1,tsType:{name:"number"},description:"MapLibre viewport insets in CSS pixels; coverage still fills the canvas."},paddingRight:{required:!1,tsType:{name:"number"},description:""},paddingTop:{required:!1,tsType:{name:"number"},description:""},paddingBottom:{required:!1,tsType:{name:"number"},description:""},showPaddingGuide:{required:!1,tsType:{name:"boolean"},description:""},paddingPanels:{required:!1,tsType:{name:"boolean"},description:""},viewportWidth:{required:!1,tsType:{name:"number"},description:"Zero follows the available width; positive values exercise narrow hosts."},cameraWindows:{required:!1,tsType:{name:"boolean"},description:""}}};const ln={title:"Tile Loading Manager/Reference",id:"tile-loading-manager-coverage",component:De,parameters:{layout:"fullscreen",controls:{include:["debug","camera","projection","fovDegrees","foveation","initialPixelError","idlePixelError","tilesetMinResolutionPx","parseJobs","cacheBudgetMB"]},docs:{description:{component:"The production tile manager on the common MapLibre story base, with diagnostics enabled by default. Tile overview settings stay together: Off / Overlay / Window, legend visibility, view following, diagnostic up, labels and opacity. Overlay is the default; the legend belongs to the overview rather than a separate global panel. Queue, statistics, charts and event log remain independent movable, resizable and detachable windows. The map overview is unfilled with solid strokes and a narrow 25% grey darken under-stroke; the window overview has state fills. Circles indicate refinement steps, five-square cross outlines excess detail, no symbol the target LOD, and an approximation mark estimated steps. Offscreen baseline tiles omit LOD contours. The camera intersection clips the actual 3D frustum to tileset bounds. Up switching affects only diagnostics; loaded wireframes share source geometry. Unchanged diagnostic snapshots do not rebuild geometry or React/SVG, and hidden queues/charts do no display work. See libraries/mapping/engines/maplibre/TILES_COVERAGE.md."}}},args:{debug:!0,showOverviewPanel:!1,overviewUp:"camera-tangent",showTileGeometry:!1,camera:"parity zoom 18",projection:"perspective",fovDegrees:37,showOverlay:!0,hideAllDebugPanels:!1,telemetryEnabled:!0,showLegend:!0,showCharts:!1,showEventLog:!1,overviewView:"frustum",overviewPaddingPercent:200,overlayOpacity:.85,showFrustum:!0,showResident:!0,overlayLabels:"none",sceneLabels:!1,showQueue:!1,showStats:!1,sceneExtents:"none",debugColorMode:"NONE",debugBoxBounds:!1,debugSphereBounds:!1,debugParentBounds:!1,debugUnlit:!1,foveation:0,initialPixelError:ne.metadata.carmaConf["3d"].baseErrorTarget,idlePixelError:ne.metadata.carmaConf["3d"].errorTarget,tilesetMinResolutionPx:ne.metadata.carmaConf["3d"].tilesetMinResolutionPx,parseJobs:2,cacheBudgetMB:6144,paddingLeft:0,paddingRight:0,paddingTop:0,paddingBottom:0,showPaddingGuide:!1,viewportWidth:0},argTypes:{debug:{control:"boolean",description:"Enable the diagnostic toolbar and telemetry. Individual panels and display switches live in the toolbar; the mesh/runtime is not rebuilt."},hideAllDebugPanels:{control:"boolean",description:"Hide all panels, including popouts. Keep telemetry running for recordings.",table:{category:"Diagnostics"}},telemetryEnabled:{control:"boolean",description:"Disable to stop story sampling, observers, charts, scene debug helpers and runtime diagnostic bookkeeping. Panels are hidden while disabled; tile loading continues unchanged.",table:{category:"Diagnostics"}},showLegend:{control:"boolean",table:{category:"Diagnostics"}},showCharts:{control:"boolean",table:{category:"Diagnostics"}},showEventLog:{control:"boolean",table:{category:"Diagnostics"}},camera:{control:{type:"radio"},options:Object.keys(V),table:{category:"Camera"}},projection:{control:"radio",options:["perspective","near orthographic"],table:{category:"Camera"}},fovDegrees:{control:{type:"range",min:10,max:120,step:1},table:{category:"Camera"}},showOverlay:{control:"boolean"},overviewView:{control:"radio",options:["extent","frustum"]},overviewPaddingPercent:{control:{type:"range",min:100,max:500,step:25}},overlayOpacity:{control:{type:"range",min:0,max:1,step:.05}},showFrustum:{control:"boolean"},showResident:{control:"boolean"},overlayLabels:{control:"radio",options:["none","id","id and error"]},sceneLabels:{control:"boolean"},showQueue:{control:"boolean"},showStats:{control:"boolean"},sceneExtents:{control:"radio",options:["none","boxes","edges"]},debugColorMode:{control:{type:"radio"},options:[...Ze]},debugBoxBounds:{control:"boolean"},debugSphereBounds:{control:"boolean"},debugParentBounds:{control:"boolean"},debugUnlit:{control:"boolean"},foveation:{control:{type:"range",min:0,max:8,step:.5},table:{category:"Loading"}},tilesetMinResolutionPx:{control:{type:"inline-radio",labels:{0:"Metadata hint"}},options:[0,256,512,1024,2048,4096],description:"Residual surface across the full tileset extent, prepared with tree transitions after initial view quality and before idle refinement. 0 uses the metadata hint; it does not disable coverage. Memory limits still apply.",table:{category:"Loading"}},initialPixelError:{control:{type:"range",min:1,max:64,step:1},description:"First acceptable viewport error in pixels. Clamped to at least the idle target. Then prepare the residual surface and transitions.",table:{category:"Loading"}},idlePixelError:{control:{type:"range",min:.5,max:32,step:.5},description:"Final viewport error after the initial reserve pass; lower is finer. Memory pressure can relax the effective target.",table:{category:"Loading"}},parseJobs:{control:{type:"range",min:1,max:6,step:1},table:{category:"Loading"}},cacheBudgetMB:{control:{type:"inline-radio"},options:[256,512,1024,2048,4096,6144],table:{category:"Memory"}}}},H={},$={name:"Camera Windows · three-camera stress",args:{cameraWindows:!0,overviewCameraFocus:"all"},parameters:{docs:{description:{story:"Stress preset of Mesh Coverage: the same Cameras control opens three secondary views. Each window is resizable and can undock without replacing its camera or tile pool. Render resolution follows the image area (DPR up to 2, longest side up to 2048 px). Route and lens options collapse into the header. Main-map loading retains primary priority. All frustums are visible in the overview, which can crop to their union or one camera. The Schwebebahn profile uses an assumed rail height of DGM + 13 m; Wupper bank looks towards HKW Zoo. Popups depend on browser support; Dock all cameras also returns detached views to the main page."}}}},J={argTypes:{paddingLeft:{control:{type:"range",min:0,max:600,step:20},table:{category:"Viewport padding"}},paddingRight:{control:{type:"range",min:0,max:600,step:20},table:{category:"Viewport padding"}},paddingTop:{control:{type:"range",min:0,max:300,step:10},table:{category:"Viewport padding"}},paddingBottom:{control:{type:"range",min:0,max:300,step:10},table:{category:"Viewport padding"}},showPaddingGuide:{control:"boolean",table:{category:"Viewport padding"}},viewportWidth:{control:{type:"inline-radio"},options:[0,480,768,1024],description:"CSS pixels; zero follows the available width. Resizes the existing map.",table:{category:"Viewport padding"}}},name:"Viewport Request Padding",args:{paddingPanels:!0,debug:!1,showPaddingGuide:!0,foveation:4},parameters:{controls:{include:["viewportWidth","showPaddingGuide","camera","projection","fovDegrees","foveation","debug"]},docs:{description:{story:"Enable translucent Lorem ipsum panels on any side and drag their inner edges (or use arrow keys on the handles). Their measured CSS-pixel extents, including outer spacing, go through map.setPadding only. The cyan guide reads map.getPadding and map.project(map.getCenter); the existing native camera path propagates the asymmetric view to tile selection and foveation, without replacing the map or pool. Coverage still fills the whole canvas. Narrow the host with viewportWidth to test responsive insets."}}}};var ye,xe,Te;H.parameters={...H.parameters,docs:{...(ye=H.parameters)==null?void 0:ye.docs,source:{originalSource:"{}",...(Te=(xe=H.parameters)==null?void 0:xe.docs)==null?void 0:Te.source}}};var Pe,qe,Ce;$.parameters={...$.parameters,docs:{...(Pe=$.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  name: "Camera Windows · three-camera stress",
  args: {
    cameraWindows: true,
    overviewCameraFocus: "all"
  },
  parameters: {
    docs: {
      description: {
        story: "Stress preset of Mesh Coverage: the same Cameras control opens three secondary views. Each window is resizable and can undock without replacing its camera or tile pool. Render resolution follows the image area (DPR up to 2, longest side up to 2048 px). Route and lens options collapse into the header. Main-map loading retains primary priority. All frustums are visible in the overview, which can crop to their union or one camera. The Schwebebahn profile uses an assumed rail height of DGM + 13 m; Wupper bank looks towards HKW Zoo. Popups depend on browser support; Dock all cameras also returns detached views to the main page."
      }
    }
  }
}`,...(Ce=(qe=$.parameters)==null?void 0:qe.docs)==null?void 0:Ce.source}}};var Ee,Me,Re;J.parameters={...J.parameters,docs:{...(Ee=J.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  argTypes: {
    paddingLeft: {
      control: {
        type: "range",
        min: 0,
        max: 600,
        step: 20
      },
      table: {
        category: "Viewport padding"
      }
    },
    paddingRight: {
      control: {
        type: "range",
        min: 0,
        max: 600,
        step: 20
      },
      table: {
        category: "Viewport padding"
      }
    },
    paddingTop: {
      control: {
        type: "range",
        min: 0,
        max: 300,
        step: 10
      },
      table: {
        category: "Viewport padding"
      }
    },
    paddingBottom: {
      control: {
        type: "range",
        min: 0,
        max: 300,
        step: 10
      },
      table: {
        category: "Viewport padding"
      }
    },
    showPaddingGuide: {
      control: "boolean",
      table: {
        category: "Viewport padding"
      }
    },
    viewportWidth: {
      control: {
        type: "inline-radio"
      },
      options: [0, 480, 768, 1024],
      description: "CSS pixels; zero follows the available width. Resizes the existing map.",
      table: {
        category: "Viewport padding"
      }
    }
  },
  name: "Viewport Request Padding",
  args: {
    paddingPanels: true,
    debug: false,
    showPaddingGuide: true,
    foveation: 4
  },
  parameters: {
    controls: {
      include: ["viewportWidth", "showPaddingGuide", "camera", "projection", "fovDegrees", "foveation", "debug"]
    },
    docs: {
      description: {
        story: "Enable translucent Lorem ipsum panels on any side and drag their inner edges (or use arrow keys on the handles). Their measured CSS-pixel extents, including outer spacing, go through map.setPadding only. The cyan guide reads map.getPadding and map.project(map.getCenter); the existing native camera path propagates the asymmetric view to tile selection and foveation, without replacing the map or pool. Coverage still fills the whole canvas. Narrow the host with viewportWidth to test responsive insets."
      }
    }
  }
}`,...(Re=(Me=J.parameters)==null?void 0:Me.docs)==null?void 0:Re.source}}};const dn=["MeshCoverage","CameraWindows","ViewportPadding"];export{$ as CameraWindows,H as MeshCoverage,J as ViewportPadding,dn as __namedExportsOrder,ln as default};
