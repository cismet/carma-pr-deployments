import{m as ne}from"./mesh2024-cesium-parity.style-SIntl1dw.js";import{j as t}from"./jsx-runtime-DNp_qQjF.js";import{r as s}from"./index-CSJjS6Ct.js";import{a as ue}from"./maplibre-gl-BvLDYGIs.js";import{f as Oe}from"./StripChartPanel-DMTTI3Vx.js";import{F as Y,a6 as ze,a7 as Ve,S as _e,m as Ge,h as Ie,g as Be}from"./index-Dk-7C7Gp.js";import{a as Re,T as ge,b as Fe}from"./raster-dem-terrain-runtime-VdO4op35.js";import"./ObjectCentricViewStateInfoBox-Cl2lSxp7.js";/* empty css                    */import"./angles-o81lIhgd.js";import"./index-M0u9yaJ4.js";import"./pitch-conventions-csFBkMEs.js";import"./gazData-DLYBfdVf.js";import"./wms-uhWQECSC.js";import"./ViewStateNavigationManagerContext-HKhsWxGe.js";import"./AnnotationsProvider-D35NdZj_.js";import"./custom-shaders-zef_1O5J.js";import"./ControlButtonStyler-C_yTvQxK.js";import"./gcg2016-BXVYxNAd.js";/* empty css                                      */import"./useLineSegmentVisualizers-xvGPzDMM.js";import"./useCesiumFovWheelZoom-BuxThWTf.js";import{c as Ne}from"./maplibre-story-style-IbzX9XsM.js";import{p as He,a as $e,W as Ue,g as Ye,V as Ke,T as Ze,e as Xe}from"./DiagnosticPanel-C4cUFJjk.js";import{r as Je}from"./index-D1cknlJ6.js";import{dR as Qe,dS as et,V as K,dG as tt,dL as nt,P as rt,dT as at}from"./three.module-BsINTyXW.js";import{N as ot}from"./terrain-CDUojVZ_.js";import{a as it,l as st,c as lt}from"./raster-dem-terrain-tile-source-BjnYoCJ8.js";import{T as he,a as fe}from"./terrain-no-data-CMfWZoqJ.js";import{c as dt}from"./shared-three-scene-camera-preview-DJQ5MblO.js";import"./gltf1-upgrade-plugin-BnIraZfg.js";import{B as _}from"./button-BBNKCzH-.js";import{S as ae}from"./index-CehnRTM2.js";import{R as ct}from"./index-BDcP1QH0.js";import{S as pt}from"./index-DWyW2vfU.js";import"./iframe-3U8bWYAw.js";import"./___vite-browser-external_commonjs-proxy-N_IygbFj.js";import"./geo-C5LVW_3d.js";import"./zoom-BADcZy_j.js";import"./scene-accumulator-BSDum8k6.js";import"./scene-accumulation-format-pMkB0RMu.js";import"./clamp-co6UzHBn.js";import"./plugins-DiPIaVd3-BUs4OHma.js";import"./DRACOLoader-B-rO9Syu.js";import"./hostname-CU8uGQVB.js";import"./plugins-BN2uUf5f-B-a5kHaQ.js";import"./tiles-camera-set-DInj6eja.js";import"./derived-cache-epoch-B1SlmyVB.js";import"./index-BxyJx7SG.js";import"./index-YUx0PNfD.js";import"./context-sXU6dMgU.js";import"./pi-mVFkAveX.js";import"./FrameWait-8aIFQE6d.js";import"./carma-guards-D3gCw5CK.js";import"./Scene-BQCDV_Y9.js";import"./meshopt_encoder.module-D2BiFfpM.js";import"./meshopt_decoder.module-Clo9gF-m.js";import"./sampleTerrainMostDetailed-BXMiDKp8.js";import"./negative-pi-to-pi-B-FiLZ9M.js";import"./Picking-fndJ-mCT.js";import"./KeyCode-EBnSyDk0.js";import"./useCSSVarCls-CQKI3YPz.js";import"./create-view-state-visualizer-DaTYvBfs.js";import"./camera-intrinsics-utils-tHu2xf2P.js";import"./angle-normalization-DjAbKHgp.js";import"./derivations-DfnsEXuW.js";import"./plane-intersections-DhJfyQJx.js";import"./constants-C6-_E4xW.js";import"./geometry2d-Hnn8LWlg.js";import"./Line2-DHoRMF2J.js";import"./LineSegments2-k4_0rUZU.js";import"./LineGeometry-CzSN4Jlh.js";import"./mesh-helpers-D335rxiI.js";import"./index-c0Bmll4a.js";import"./BaseInput-BjRzVoYW.js";import"./TextArea-CfFFbELt.js";import"./CheckOutlined-BUHd0RGJ.js";import"./index-5gCKv0VK.js";import"./index-DQFuUyWC.js";import"./PlusOutlined-DOZtHt8l.js";import"./config-DAlQCezX.js";import"./length-format-BQI28fDZ.js";import"./decimal-format-B9rCT_ZY.js";import"./locales-DbHdB30_.js";import"./formatSignificantNumber-DYV3PWeu.js";import"./Intrinsics-DBCBp3yM.js";import"./private-shims-5e5gEO17.js";import"./CesiumWidget-ClGc7S22.js";import"./svgProjection-CK1IeL40.js";import"./useLineVisualizers-G1xf-PWC.js";import"./index-B_nA-_ND.js";const Se=(n,e)=>{if(!(e.duration>0)||e.curve.points.length<2)throw new Error("A camera flight needs a positive duration and two points");const i=new Qe(n),p=i.clipAction(e.clip);p.setLoop(et,1),p.clampWhenFinished=!0,p.play();const r=new K,b=new K;let a,h;const c=e.clip.tracks.some(l=>l.name.endsWith(".quaternion"));return{sample(l,m){const w=(l%(e.duration*2)+e.duration*2)%(e.duration*2),y=(1-Math.cos(w*Math.PI/e.duration))/2;p.paused=!1,i.setTime(y*e.duration),e.curve.getPointAt(y,n.position),c||(e.target?n.lookAt(e.target):(e.curve.getTangentAt(y,r),n.lookAt(b.copy(n.position).add(r)))),m!==void 0&&(n.fov=m),n.fov=Math.min(120,Math.max(5,n.fov)),n.updateProjectionMatrix(),n.updateMatrixWorld(!0)},sampleAhead(l,m,w){if(!Number.isFinite(l)||!Number.isFinite(m)||m<0)throw new Error("Camera flight sample times must be finite and aheadMs must be non-negative");return a||(a=n.clone(),h=Se(a,e)),a.copy(n,!1),a.fov=n.fov,a.aspect=n.aspect,a.near=n.near,a.far=n.far,a.up.copy(n.up),a.zoom=n.zoom,a.filmGauge=n.filmGauge,a.filmOffset=n.filmOffset,a.view=n.view?{...n.view}:null,h.sample(l+m/1e3,w),a},dispose(){i.stopAllAction(),i.uncacheRoot(n),h==null||h.dispose(),a=void 0,h=void 0}}},mt=(n,e)=>new tt("camera-lens",n,[new nt(".fov",e.map((i,p)=>p*n/Math.max(1,e.length-1)),[...e])]),ut=async(n,e,i)=>{const p=await it(n,{maxCacheBytes:16777216,meshSegments:16});try{const r=[];for(const[b,a]of e){i.throwIfAborted();const h=Math.max(n.minzoom,Math.min(13,n.maxzoom)),c={level:h,x:Math.floor(st(b,h)),y:Math.floor(lt(a,h))};if(!p.getTileDataAvailable(c))throw new Error("Flight path lies outside the elevation source");await p.requestTile(c,i,5);const l=p.sampleHeight(b,a);if(l===void 0||!Number.isFinite(l))throw new Error("Flight path has missing elevation data");r.push(l)}return r}finally{p.release()}},gt=`{
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
`,ht=He,ft=({map:n,runtime:e,id:i,onClose:p,dockRequest:r})=>{const b=s.useRef(null),a=s.useRef(null),h=s.useRef(null),[c]=s.useState(()=>document.createElement("div")),l=s.useRef(null),[m,w]=s.useState(!1),[y,d]=s.useState(!1),[f,x]=s.useState({x:Math.min(16+i%3*355,Math.max(16,n.getContainer().clientWidth-356)),y:100+i%3*24}),[R,P]=s.useState("Waiting for loaded mesh"),[T,G]=s.useState(i%3===0?"schwebebahn":i%3===1?"wupper":"local"),[I,Le]=s.useState(60),[Z,oe]=s.useState(!0),[k,ie]=s.useState(!0),B=s.useRef({width:340,height:220,fov:I,autoLens:Z,playing:k});Object.assign(B.current,{fov:I,autoLens:Z,playing:k});const se=()=>{var u;const o=l.current;l.current=null,(u=h.current)==null||u.append(c),w(!1),o&&!o.closed&&o.close()},De=()=>{if(l.current){se();return}const o=window.open("","_blank","popup,width=640,height=420");if(!o){P("Popup blocked — allow this site's popup to undock."),d(!0);return}l.current=o,o.document.title=`Tile manager · Camera ${i+1}`,Object.assign(o.document.body.style,{margin:"0",overflow:"hidden",height:"100vh"}),o.document.body.append(c),o.addEventListener("pagehide",()=>{var u;l.current===o&&(l.current=null,(u=h.current)==null||u.append(c),w(!1))},{once:!0}),w(!0)};s.useEffect(()=>{r>0&&se()},[r]),s.useEffect(()=>{var o;return Object.assign(c.style,{width:"100%",height:"100%"}),(o=h.current)==null||o.append(c),()=>{const u=l.current;l.current=null,u==null||u.close(),c.remove()}},[c]),s.useEffect(()=>{const o=a.current;if(!o)return;const u=()=>{var E;const M=o.clientWidth,D=o.clientHeight;if(M<=0||D<=0)return;const A=Math.min(((E=o.ownerDocument.defaultView)==null?void 0:E.devicePixelRatio)??1,2,2048/Math.max(M,D));B.current.width=Math.max(1,Math.round(M*A)),B.current.height=Math.max(1,Math.round(D*A))},q=new ResizeObserver(u);q.observe(o),u();const C=o.ownerDocument.defaultView;return C==null||C.addEventListener("resize",u),()=>{q.disconnect(),C==null||C.removeEventListener("resize",u)}},[m]);const L=s.useRef(null);s.useEffect(()=>{const o=b.current;if(!o)return;const u=Re(n),q=dt(u.layer),C=new rt(60,340/220,1,12e3),M=`coverage-window-${i}`,D=n.getCenter(),A=new AbortController;let E,X=0,J=null,Q=0,ee=window,te=!1,le=-1/0,W=null,O=!1;(async()=>{const g=T==="local"?null:Ue[T],F=(g==null?void 0:g.coordinates)??[[D.lng,D.lat]];P("Preparing bounded DGM flight profile…");const v=await ut(ot,F,A.signal);if(O)return;const S=F.map((j,Ae)=>{const me=u.layer.projectLngLatToScene([j[0],j[1]],v[Ae]+((g==null?void 0:g.aboveGround)??100));if(!me)throw new Error("Shared scene has no geographic frame yet");return me}),ce=S[0].clone();if(!g){S.length=0;for(let j=0;j<8;j++)S.push(ce.clone().add(new K(Math.cos(j*Math.PI/4)*120,0,Math.sin(j*Math.PI/4)*120)))}const N=Ye,qe=T==="wupper"?u.layer.projectLngLatToScene([N.longitude,N.latitude],(N.footHeight+N.topHeight)/2)??void 0:T==="local"?ce.clone().add(new K(0,-80,0)):void 0,pe=(g==null?void 0:g.duration)??90;E=Se(C,{curve:new at(S,!g,"centripetal"),duration:pe,target:qe,clip:mt(pe,(g==null?void 0:g.fov)??[60,45,60])}),P((g==null?void 0:g.note)??"Local orbit · DGM + 100 m"),n.triggerRepaint()})().catch(g=>{O||P(String(g))});const de=()=>{if(O)return;ee=o.ownerDocument.defaultView??window,Q=ee.requestAnimationFrame(de);const g=performance.now(),F=J===null?0:Math.max(0,Math.min((g-J)/1e3,.1));if(J=g,!E||u.layer.isRenderingPaused())return;const v=B.current;v.playing&&(X+=F),!te&&(C.aspect=v.width/v.height,E.sample(X,v.autoLens?void 0:v.fov),u.layer.setTileCameraView({id:M,camera:C,viewport:[v.width,v.height],errorTargetPixels:4,role:he.RECEIVER,priority:fe.SECONDARY}),v.playing&&g-le>=100?(le=g,W=u.layer.requestTileCameraAhead(S=>({id:`${M}:ahead`,camera:E.sampleAhead(X,S,v.autoLens?void 0:v.fov),viewport:[v.width,v.height],errorTargetPixels:4,role:he.RECEIVER,priority:fe.SECONDARY}),500)):!v.playing&&W&&(u.layer.removePrefetchCameraView(W),W=null),n.triggerRepaint(),te=!0,q.present(C,o,v.width,v.height).catch(S=>{O||P(String(S))}).finally(()=>{te=!1}))};return Q=requestAnimationFrame(de),()=>{O=!0,A.abort(),E==null||E.dispose(),ee.cancelAnimationFrame(Q),u.layer.removeTileCameraView(M),W&&u.layer.removePrefetchCameraView(W),q.dispose(),u.release(),n.triggerRepaint()}},[n,e,i,T]);const We=t.jsxs(_e,{container:c.ownerDocument.head,children:[t.jsx("style",{children:ht}),t.jsxs("section",{className:"tile-debug-panel","data-test-id":`coverage-camera-window-${i}`,style:{background:"transparent",width:"100%",height:"100%",display:"flex",flexDirection:"column",overflow:"hidden"},children:[t.jsxs("header",{style:{background:"rgb(248 250 252 / 96%)",display:"flex",justifyContent:"space-between",padding:"0 4px 0 8px",alignItems:"center",flexShrink:0,height:30,cursor:m?"default":"move",touchAction:"none"},onPointerDown:o=>{m||o.target.closest("button")||(L.current={x:o.clientX-f.x,y:o.clientY-f.y},o.currentTarget.setPointerCapture(o.pointerId))},onPointerMove:o=>{L.current&&x({x:Math.max(0,Math.min(n.getContainer().clientWidth-80,o.clientX-L.current.x)),y:Math.max(0,Math.min(window.innerHeight-32,o.clientY-L.current.y))})},onPointerUp:()=>{L.current=null},onPointerCancel:()=>{L.current=null},children:[t.jsxs("span",{children:["Camera ",i+1]}),t.jsxs($e,{label:`camera ${i+1}`,external:m,onToggleExternal:De,onClose:p,children:[t.jsx(_,{type:"text","aria-label":`Camera ${i+1} options`,"aria-expanded":y,onClick:()=>d(!y),icon:t.jsx(Y,{icon:Ge})}),t.jsx(_,{type:"text","aria-label":`${k?"Pause":"Play"} camera ${i+1}`,onClick:()=>ie(!k),icon:t.jsx(Y,{icon:k?Ie:Be})})]})]}),t.jsxs("div",{ref:a,style:{position:"relative",flex:1,minHeight:0,overflow:"hidden"},children:[t.jsx("canvas",{ref:b,"data-test-id":"tile-manager-camera-preview",width:320,height:200,style:{display:"block",width:"100%",height:"100%",transform:"scaleY(-1)",background:"#18212b"}}),y&&t.jsxs("div",{"data-test-id":`camera-options-${i}`,style:{position:"absolute",top:0,right:0,bottom:0,maxWidth:"100%",boxSizing:"border-box",width:280,overflow:"auto",padding:10,background:"rgb(248 250 252 / 94%)",display:"grid",alignContent:"start",gap:8},children:[t.jsx(ct.Group,{size:"small",value:T,onChange:o=>G(o.target.value),optionType:"button",options:[{value:"schwebebahn",label:"Rail"},{value:"wupper",label:"Wupper → HKW"},{value:"local",label:"Local"}]}),t.jsxs("label",{children:[t.jsx(ae,{size:"small",checked:Z,onChange:oe})," ","Animated lens ·"," ",t.jsx(ae,{size:"small",checked:k,onChange:ie})," ","Fly"]}),t.jsxs("label",{children:["Vertical FOV ",I,"° (manual override)",t.jsx(pt,{"aria-label":`Camera ${i+1} FOV`,min:5,max:120,value:I,onChange:o=>{Le(o),oe(!1)}})]}),t.jsx("div",{children:"Resolution follows window size (up to 2048 px per side)."}),t.jsx("div",{role:"status",children:R})]})]})]})]});return t.jsxs(t.Fragment,{children:[t.jsx("div",{ref:h,"data-test-id":`camera-dock-${i}`,style:{position:"absolute",left:f.x,top:f.y,width:340,height:250,minWidth:240,minHeight:150,maxWidth:"100%",maxHeight:"90%",resize:"both",overflow:"hidden",zIndex:8,display:m?"none":"block"}}),Je.createPortal(We,c)]})},Me=({map:n,runtime:e,initialCount:i=0})=>{const[p,r]=s.useState(!1),[b,a]=s.useState(0),[h,c]=s.useState(()=>[0,1,2].slice(0,i));return t.jsxs(t.Fragment,{children:[t.jsx(_,{"data-test-id":"coverage-camera-controls","aria-label":"Cameras",title:`Cameras · ${h.length}/3 active`,"aria-expanded":p,icon:t.jsx(Y,{icon:ze}),style:{position:"absolute",top:8,right:52,zIndex:12},onClick:()=>r(!p)}),p&&t.jsxs("section",{className:"tile-debug-panel","data-test-id":"coverage-camera-control-window",style:{position:"absolute",top:46,right:52,zIndex:12,width:260,padding:10,background:"rgb(248 250 252 / 94%)"},children:[t.jsxs("header",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[t.jsxs("strong",{children:["Cameras · ",h.length,"/3"]}),t.jsx(_,{type:"text","aria-label":"Close camera controls",onClick:()=>r(!1),children:"×"})]}),["Schwebebahn","Wupper → HKW","Local orbit"].map((l,m)=>t.jsxs("label",{style:{display:"flex",gap:10,alignItems:"center",paddingBlock:8},children:[t.jsx(ae,{size:"small","aria-label":`Enable camera ${m+1}`,checked:h.includes(m),onChange:w=>c(y=>w?[...y.filter(d=>d!==m),m].sort():y.filter(d=>d!==m))}),"Camera ",m+1," · ",l]},m)),t.jsx("small",{children:"Drag a header, resize its corner, or undock. All cameras share the main scene and tile pool."}),t.jsx(_,{style:{marginTop:8},icon:t.jsx(Y,{icon:Ve}),onClick:()=>a(l=>l+1),children:"Dock all cameras"})]}),h.map(l=>t.jsx(ft,{id:l,dockRequest:b,map:n,runtime:e,onClose:()=>c(m=>m.filter(w=>w!==l))},l))]})};Me.__docgenInfo={description:"Coverage story variant: all windows consume the host's existing scene and pool.",methods:[],displayName:"MeshCoverageCameraWindows",props:{map:{required:!0,tsType:{name:"MapLibreMap"},description:""},runtime:{required:!0,tsType:{name:"ThreeTilesRuntime"},description:""},initialCount:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}}}};const V={"parity zoom 18":{zoom:18,pitch:0,bearing:0},"zoomed in 20":{zoom:20,pitch:0,bearing:0},"overview 14":{zoom:14,pitch:0,bearing:0},"oblique 15":{zoom:15,pitch:75,bearing:20},"horizon 16":{zoom:16,pitch:85,bearing:-30}},bt=JSON.parse(gt),re=[7.1999207,51.2725716],vt=1,z=bt.metadata.carmaConf["3d"],je=({onOptionsChange:n,...e})=>{const i=s.useRef(e);i.current=e;const p=s.useRef(null),[r,b]=s.useState(null),[a,h]=s.useState({width:0,height:0,x:0,y:0,left:0,right:0,top:0,bottom:0}),[c,l]=s.useState(null),[m]=s.useState(()=>Oe({capacity:120,logCapacity:300}));window.__meshCoverageRecorder=m,s.useEffect(()=>{if(!p.current)return;const d=new ue.Map({container:p.current,center:re,zoom:V[e.camera].zoom-1,pitch:V[e.camera].pitch,bearing:V[e.camera].bearing,maxPitch:85,minZoom:0,maxZoom:25,attributionControl:{},style:Ne(null)});d.addControl(new ue.NavigationControl),d.setPadding({left:e.paddingLeft??0,right:e.paddingRight??0,top:e.paddingTop??0,bottom:e.paddingBottom??0});let f=null,x=null;const R=()=>{f=Re(d),x=Fe("mesh-2024-coverage",z.tilesetUrl,re,{providesTerrain:!0,mapStyleDrape:"none",colorCorrection:z.colorCorrection,entry:z.entry,baseErrorTargetPixels:i.current.initialPixelError??z.baseErrorTarget,diagnostics:i.current.debug&&i.current.telemetryEnabled,cacheBudgetBytes:6*1024**3}),x.loading.setErrorTarget(i.current.idlePixelError??ge),x.loading.setTilesetMinResolution(i.current.tilesetMinResolutionPx>0?i.current.tilesetMinResolutionPx:null),f.layer.addRuntime(x.scene),l(x),b(d)};return d.once("load",R),()=>{b(null),l(null),x&&f&&f.layer.removeRuntime(x.scene.id),f==null||f.release(),d.remove()}},[]);const w=s.useRef(!0);s.useEffect(()=>{c==null||c.loading.setErrorTarget(e.idlePixelError??ge,e.initialPixelError??z.baseErrorTarget)},[c,e.idlePixelError,e.initialPixelError]),s.useEffect(()=>{if(!r)return;const d=V[e.camera],f={center:re,zoom:d.zoom-1,pitch:d.pitch,bearing:d.bearing};w.current?(w.current=!1,r.jumpTo(f)):r.easeTo({...f,duration:1200})},[r,e.camera]),s.useEffect(()=>{r&&r.setVerticalFieldOfView(e.projection==="near orthographic"?vt:e.fovDegrees)},[r,e.projection,e.fovDegrees]),s.useEffect(()=>{if(!r)return;e.paddingPanels||r.setPadding({left:e.paddingLeft??0,right:e.paddingRight??0,top:e.paddingTop??0,bottom:e.paddingBottom??0});const d=()=>{if(!e.showPaddingGuide)return;const f=r.getCanvas(),x=r.project(r.getCenter()),R=r.getPadding(),P={width:f.clientWidth,height:f.clientHeight,x:Math.round(x.x*100)/100,y:Math.round(x.y*100)/100,left:R.left??0,right:R.right??0,top:R.top??0,bottom:R.bottom??0};h(T=>Object.keys(P).every(G=>T[G]===P[G])?T:P)};return d(),r.on("resize",d),r.on("move",d),()=>{r.off("resize",d),r.off("move",d)}},[r,e.paddingLeft,e.paddingRight,e.paddingTop,e.paddingBottom,e.showPaddingGuide,e.paddingPanels]),s.useEffect(()=>{if(!r||!p.current)return;const d=new ResizeObserver(()=>r.resize());return d.observe(p.current),()=>d.disconnect()},[r]);const y=a.x+110>a.width;return t.jsx("div",{className:"mesh-coverage-story",style:{height:"100vh",position:"relative",width:e.viewportWidth?`${e.viewportWidth}px`:"100%",maxWidth:"100%",marginInline:"auto"},children:t.jsxs("div",{style:{position:"absolute",inset:0},children:[t.jsx("div",{ref:p,"data-test-id":"mesh-coverage-map",style:{position:"absolute",inset:0,background:"#d8dde3"}}),e.showPaddingGuide&&t.jsxs("svg",{"data-test-id":"mesh-coverage-padding-guide",width:"100%",height:"100%",style:{position:"absolute",inset:0,pointerEvents:"none",overflow:"hidden"},"aria-label":"Usable viewport and padded map center",children:[t.jsx("rect",{x:a.left,y:a.top,width:Math.max(0,a.width-a.left-a.right),height:Math.max(0,a.height-a.top-a.bottom),fill:"none",stroke:"#00eaff",strokeWidth:"2"}),t.jsx("path",{"data-test-id":"mesh-coverage-padding-focus",d:`M${a.x-10},${a.y}h20 M${a.x},${a.y-10}v20`,fill:"none",stroke:"#00eaff",strokeWidth:"2"}),t.jsx("text",{x:a.x+(y?-14:14),y:Math.max(16,Math.min(a.height-6,a.y-8)),textAnchor:y?"end":"start",fill:"#00eaff",stroke:"#123",strokeWidth:"3",paintOrder:"stroke",style:{font:"12px sans-serif"},children:"Padded focus"})]}),r&&e.paddingPanels&&t.jsx(Ke,{map:r}),r&&c&&t.jsx(Me,{map:r,runtime:c,initialCount:e.cameraWindows?3:0},String(!!e.cameraWindows)),r&&c&&t.jsx(Ze,{map:r,recorder:m,options:e,runtimeHandle:c,onOptionsChange:n,open:e.debug,onOpenChange:d=>n({debug:d})})]})})},ke=n=>{const[e,i]=s.useState({});s.useEffect(()=>{i(r=>{if(r.debug===void 0)return r;const b={...r};return delete b.debug,b})},[n.debug]);const p={...n,...e};return t.jsx(je,{...p,onOptionsChange:r=>i(b=>({...b,...r}))})};je.__docgenInfo={description:"",methods:[],displayName:"MeshCoverageScene",props:{debug:{required:!0,tsType:{name:"boolean"},description:""},initialPixelError:{required:!1,tsType:{name:"number"},description:""},idlePixelError:{required:!1,tsType:{name:"number"},description:""},camera:{required:!0,tsType:{name:"union",raw:"keyof typeof CAMERA_PRESETS",elements:[{name:"literal",value:'"parity zoom 18"'},{name:"literal",value:'"zoomed in 20"'},{name:"literal",value:'"overview 14"'},{name:"literal",value:'"oblique 15"'},{name:"literal",value:'"horizon 16"'}]},description:"Start view; changing it eases the camera there."},projection:{required:!0,tsType:{name:"union",raw:'"perspective" | "near orthographic"',elements:[{name:"literal",value:'"perspective"'},{name:"literal",value:'"near orthographic"'}]},description:`MapLibre has no orthographic projection; one-degree vertical FOV moves
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
}`,elements:[{name:"TileLoadingDebugOptions"},{name:"TileLoadingDebugLoadingOptions"},{name:"signature",type:"object",raw:`{
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
the camera far out and flattens perspective for both map and tiles.`},{key:"fovDegrees",value:{name:"number",required:!0},description:"Vertical field of view of the perspective camera in degrees."},{key:"paddingLeft",value:{name:"number",required:!1},description:"MapLibre viewport insets in CSS pixels; coverage still fills the canvas."},{key:"paddingRight",value:{name:"number",required:!1}},{key:"paddingTop",value:{name:"number",required:!1}},{key:"paddingBottom",value:{name:"number",required:!1}},{key:"showPaddingGuide",value:{name:"boolean",required:!1}},{key:"paddingPanels",value:{name:"boolean",required:!1}},{key:"viewportWidth",value:{name:"number",required:!1},description:"Zero follows the available width; positive values exercise narrow hosts."},{key:"cameraWindows",value:{name:"boolean",required:!1}}]}}]}],raw:"Partial<MeshCoverageDemoOptions>"},name:"patch"}],return:{name:"void"}}},description:""}}};ke.__docgenInfo={description:"Direct MapLibre host: no portals, topic-map or provider dependency stack.",methods:[],displayName:"MeshCoverageDemo",props:{debug:{required:!0,tsType:{name:"boolean"},description:""},initialPixelError:{required:!1,tsType:{name:"number"},description:""},idlePixelError:{required:!1,tsType:{name:"number"},description:""},camera:{required:!0,tsType:{name:"union",raw:"keyof typeof CAMERA_PRESETS",elements:[{name:"literal",value:'"parity zoom 18"'},{name:"literal",value:'"zoomed in 20"'},{name:"literal",value:'"overview 14"'},{name:"literal",value:'"oblique 15"'},{name:"literal",value:'"horizon 16"'}]},description:"Start view; changing it eases the camera there."},projection:{required:!0,tsType:{name:"union",raw:'"perspective" | "near orthographic"',elements:[{name:"literal",value:'"perspective"'},{name:"literal",value:'"near orthographic"'}]},description:`MapLibre has no orthographic projection; one-degree vertical FOV moves
the camera far out and flattens perspective for both map and tiles.`},fovDegrees:{required:!0,tsType:{name:"number"},description:"Vertical field of view of the perspective camera in degrees."},paddingLeft:{required:!1,tsType:{name:"number"},description:"MapLibre viewport insets in CSS pixels; coverage still fills the canvas."},paddingRight:{required:!1,tsType:{name:"number"},description:""},paddingTop:{required:!1,tsType:{name:"number"},description:""},paddingBottom:{required:!1,tsType:{name:"number"},description:""},showPaddingGuide:{required:!1,tsType:{name:"boolean"},description:""},paddingPanels:{required:!1,tsType:{name:"boolean"},description:""},viewportWidth:{required:!1,tsType:{name:"number"},description:"Zero follows the available width; positive values exercise narrow hosts."},cameraWindows:{required:!1,tsType:{name:"boolean"},description:""}}};const ar={title:"Tile Loading Manager/Reference",id:"tile-loading-manager-coverage",component:ke,parameters:{layout:"fullscreen",controls:{include:["debug","camera","projection","fovDegrees","foveation","initialPixelError","idlePixelError","tilesetMinResolutionPx","parseJobs","cacheBudgetMB"]},docs:{description:{component:"The production tile manager on the common MapLibre story base, with diagnostics enabled by default. Tile overview settings stay together: Off / Overlay / Window, legend visibility, view following, diagnostic up, labels and opacity. Overlay is the default; the legend belongs to the overview rather than a separate global panel. Queue, statistics, charts and event log remain independent movable, resizable and detachable windows. The map overview is unfilled with solid strokes and a narrow 25% grey darken under-stroke; the window overview has state fills. Circles indicate refinement steps, five-square cross outlines excess detail, no symbol the target LOD, and an approximation mark estimated steps. Offscreen baseline tiles omit LOD contours. The camera intersection clips the actual 3D frustum to tileset bounds. Up switching affects only diagnostics; loaded wireframes share source geometry. Unchanged diagnostic snapshots do not rebuild geometry or React/SVG, and hidden queues/charts do no display work. See libraries/mapping/engines/maplibre/TILES_COVERAGE.md."}}},args:{debug:!0,showOverviewPanel:!1,overviewUp:"camera-tangent",showTileGeometry:!1,camera:"parity zoom 18",projection:"perspective",fovDegrees:37,showOverlay:!0,hideAllDebugPanels:!1,telemetryEnabled:!0,showLegend:!0,showCharts:!1,showEventLog:!1,overviewView:"frustum",overviewPaddingPercent:200,overlayOpacity:.85,showFrustum:!0,showResident:!0,overlayLabels:"none",sceneLabels:!1,showQueue:!1,showStats:!1,sceneExtents:"none",debugColorMode:"NONE",debugBoxBounds:!1,debugSphereBounds:!1,debugParentBounds:!1,debugUnlit:!1,foveation:0,initialPixelError:ne.metadata.carmaConf["3d"].baseErrorTarget,idlePixelError:ne.metadata.carmaConf["3d"].errorTarget,tilesetMinResolutionPx:ne.metadata.carmaConf["3d"].tilesetMinResolutionPx,parseJobs:2,cacheBudgetMB:6144,paddingLeft:0,paddingRight:0,paddingTop:0,paddingBottom:0,showPaddingGuide:!1,viewportWidth:0},argTypes:{debug:{control:"boolean",description:"Enable the diagnostic toolbar and telemetry. Individual panels and display switches live in the toolbar; the mesh/runtime is not rebuilt."},hideAllDebugPanels:{control:"boolean",description:"Hide all panels, including popouts. Keep telemetry running for recordings.",table:{category:"Diagnostics"}},telemetryEnabled:{control:"boolean",description:"Disable to stop story sampling, observers, charts, scene debug helpers and runtime diagnostic bookkeeping. Panels are hidden while disabled; tile loading continues unchanged.",table:{category:"Diagnostics"}},showLegend:{control:"boolean",table:{category:"Diagnostics"}},showCharts:{control:"boolean",table:{category:"Diagnostics"}},showEventLog:{control:"boolean",table:{category:"Diagnostics"}},camera:{control:{type:"radio"},options:Object.keys(V),table:{category:"Camera"}},projection:{control:"radio",options:["perspective","near orthographic"],table:{category:"Camera"}},fovDegrees:{control:{type:"range",min:10,max:120,step:1},table:{category:"Camera"}},showOverlay:{control:"boolean"},overviewView:{control:"radio",options:["extent","frustum"]},overviewPaddingPercent:{control:{type:"range",min:100,max:500,step:25}},overlayOpacity:{control:{type:"range",min:0,max:1,step:.05}},showFrustum:{control:"boolean"},showResident:{control:"boolean"},overlayLabels:{control:"radio",options:["none","id","id and error"]},sceneLabels:{control:"boolean"},showQueue:{control:"boolean"},showStats:{control:"boolean"},sceneExtents:{control:"radio",options:["none","boxes","edges"]},debugColorMode:{control:{type:"radio"},options:[...Xe]},debugBoxBounds:{control:"boolean"},debugSphereBounds:{control:"boolean"},debugParentBounds:{control:"boolean"},debugUnlit:{control:"boolean"},foveation:{control:{type:"range",min:0,max:8,step:.5},table:{category:"Loading"}},tilesetMinResolutionPx:{control:{type:"inline-radio",labels:{0:"Metadata hint"}},options:[0,256,512,1024,2048,4096],description:"Residual surface across the full tileset extent, prepared with tree transitions after initial view quality and before idle refinement. 0 uses the metadata hint; it does not disable coverage. Memory limits still apply.",table:{category:"Loading"}},initialPixelError:{control:{type:"range",min:1,max:64,step:1},description:"First acceptable viewport error in pixels. Clamped to at least the idle target. Then prepare the residual surface and transitions.",table:{category:"Loading"}},idlePixelError:{control:{type:"range",min:.5,max:32,step:.5},description:"Final viewport error after the initial reserve pass; lower is finer. Memory pressure can relax the effective target.",table:{category:"Loading"}},parseJobs:{control:{type:"range",min:1,max:6,step:1},table:{category:"Loading"}},cacheBudgetMB:{control:{type:"inline-radio"},options:[256,512,1024,2048,4096,6144],table:{category:"Memory"}}}},H={},$={name:"Camera Windows · three-camera stress",args:{cameraWindows:!0,overviewCameraFocus:"all"},parameters:{docs:{description:{story:"Stress preset of Mesh Coverage: the same Cameras control opens three secondary views. Each window is resizable and can undock without replacing its camera or tile pool. Render resolution follows the image area (DPR up to 2, longest side up to 2048 px). Route and lens options collapse into the header. Main-map loading retains primary priority. All frustums are visible in the overview, which can crop to their union or one camera. The Schwebebahn profile uses an assumed rail height of DGM + 13 m; Wupper bank looks towards HKW Zoo. Popups depend on browser support; Dock all cameras also returns detached views to the main page."}}}},U={argTypes:{paddingLeft:{control:{type:"range",min:0,max:600,step:20},table:{category:"Viewport padding"}},paddingRight:{control:{type:"range",min:0,max:600,step:20},table:{category:"Viewport padding"}},paddingTop:{control:{type:"range",min:0,max:300,step:10},table:{category:"Viewport padding"}},paddingBottom:{control:{type:"range",min:0,max:300,step:10},table:{category:"Viewport padding"}},showPaddingGuide:{control:"boolean",table:{category:"Viewport padding"}},viewportWidth:{control:{type:"inline-radio"},options:[0,480,768,1024],description:"CSS pixels; zero follows the available width. Resizes the existing map.",table:{category:"Viewport padding"}}},name:"Viewport Request Padding",args:{paddingPanels:!0,debug:!1,showPaddingGuide:!0,foveation:4},parameters:{controls:{include:["viewportWidth","showPaddingGuide","camera","projection","fovDegrees","foveation","debug"]},docs:{description:{story:"Enable translucent Lorem ipsum panels on any side and drag their inner edges (or use arrow keys on the handles). Their measured CSS-pixel extents, including outer spacing, go through map.setPadding only. The cyan guide reads map.getPadding and map.project(map.getCenter); the existing native camera path propagates the asymmetric view to tile selection and foveation, without replacing the map or pool. Coverage still fills the whole canvas. Narrow the host with viewportWidth to test responsive insets."}}}};var be,ve,we;H.parameters={...H.parameters,docs:{...(be=H.parameters)==null?void 0:be.docs,source:{originalSource:"{}",...(we=(ve=H.parameters)==null?void 0:ve.docs)==null?void 0:we.source}}};var ye,xe,Ce;$.parameters={...$.parameters,docs:{...(ye=$.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
}`,...(Ce=(xe=$.parameters)==null?void 0:xe.docs)==null?void 0:Ce.source}}};var Ee,Pe,Te;U.parameters={...U.parameters,docs:{...(Ee=U.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
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
}`,...(Te=(Pe=U.parameters)==null?void 0:Pe.docs)==null?void 0:Te.source}}};const or=["MeshCoverage","CameraWindows","ViewportPadding"];export{$ as CameraWindows,H as MeshCoverage,U as ViewportPadding,or as __namedExportsOrder,ar as default};
