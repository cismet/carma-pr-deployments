import{m as U}from"./mesh2024-cesium-parity.style-BYNaxW5b.js";import{j as n}from"./jsx-runtime-DNp_qQjF.js";import{r as s}from"./index-CSJjS6Ct.js";import{a as X}from"./maplibre-gl-BvLDYGIs.js";import{m as fe}from"./StripChartPanel-Cu4G2bi_.js";import{F,aa as be,ab as ve,S as we,ac as ye,ad as xe,ae as Ce}from"./index-Cb1IK1Oe.js";import{a as pe,e as Q,c as Ee}from"./raster-dem-terrain-runtime-Cqf4K772.js";import"./ObjectCentricViewStateInfoBox-atTpV9xp.js";/* empty css                    */import"./angles-DwBSWmgw.js";import"./index-EAHNcU7k.js";import"./pitch-conventions-DmlZPLS9.js";import"./gazData-CDYJQSrI.js";import"./wms-uhWQECSC.js";import"./ControlButtonStyler-C_yTvQxK.js";import"./ViewStateNavigationManagerContext-C4aqhvRB.js";import"./AnnotationsProvider-D5gjzY5K.js";import"./custom-shaders-gZ18JRTE.js";import"./gcg2016-DRdJXZos.js";/* empty css                                      */import"./useLineSegmentVisualizers-B-S53W9F.js";import"./useCesiumFovWheelZoom-JQPzmHXv.js";import{T as ee,a as te}from"./terrain-height-metadata-DFOIOUpS.js";import{c as Pe}from"./maplibre-story-style-IbzX9XsM.js";import{p as Te,W as Re,d as Me,e as Se,V as je,f as ke,g as Le}from"./DiagnosticPanel-CGaXLosK.js";import{r as De}from"./index-D1cknlJ6.js";import"./gltf1-upgrade-plugin-B5vcSbvC.js";import{dR as We,dS as qe,V as N,dG as Ae,dL as Oe,P as ze,dT as Ve}from"./three.module-BEdZ3ycW.js";import{N as _e}from"./terrain-CDUojVZ_.js";import{a as Ge,l as Ie,b as Be}from"./raster-dem-terrain-tile-source-DnSRIq3y.js";import{c as Fe}from"./shared-three-scene-camera-preview-D70_nmBA.js";import{B as _}from"./button-DarNzuBg.js";import{S as K}from"./index-D1nMT_Ln.js";import{R as Ne}from"./index-BZpeyABr.js";import{S as He}from"./index-Be4mmnDI.js";import"./iframe-H41sJxpJ.js";import"./___vite-browser-external_commonjs-proxy-N_IygbFj.js";import"./geo-Bcv6gmwX.js";import"./zoom-BADcZy_j.js";import"./scene-accumulator-DAWsX7HZ.js";import"./scene-accumulation-format-Bp_iFmIV.js";import"./clamp-co6UzHBn.js";import"./plugins-DXnt62ch-3CRYnN3q.js";import"./DRACOLoader-Dk3jZsUd.js";import"./hostname-CU8uGQVB.js";import"./plugins-RoDI5SD7-CvCVvecf.js";import"./tiles-camera-set-DInj6eja.js";import"./derived-cache-epoch-B1SlmyVB.js";import"./index-Cm_KO7v2.js";import"./index-DCYLK5g8.js";import"./context-DvjaCB4i.js";import"./pi-mVFkAveX.js";import"./FrameWait-UHtEd6xb.js";import"./carma-guards-Z600284A.js";import"./Scene-CyAI6gOE.js";import"./meshopt_encoder.module-D2BiFfpM.js";import"./meshopt_decoder.module-Clo9gF-m.js";import"./sampleTerrainMostDetailed-DKo2XqFP.js";import"./negative-pi-to-pi-B-FiLZ9M.js";import"./Picking-CtqfsuBx.js";import"./KeyCode-B-ZS64Sw.js";import"./useCSSVarCls-qZQwOlXX.js";import"./create-view-state-visualizer-Cnw7jtnT.js";import"./camera-intrinsics-utils-tHu2xf2P.js";import"./angle-normalization-itBhVa_t.js";import"./derivations-maRCY11l.js";import"./plane-intersections-DhJfyQJx.js";import"./constants-C6-_E4xW.js";import"./geometry2d-Hnn8LWlg.js";import"./mesh-helpers-DExHEBAJ.js";import"./Line2-B7pTjZfb.js";import"./LineSegments2-EI0_O3AA.js";import"./LineGeometry-BcsZhsUj.js";import"./index-zxDiBJ71.js";import"./BaseInput-CQf-cZ88.js";import"./TextArea-CbrpIQuc.js";import"./CheckOutlined-CPk0mQaq.js";import"./index-BxCzfE2M.js";import"./index-pr48AwPa.js";import"./PlusOutlined-D3HvsRC8.js";import"./config-DAt-BDqU.js";import"./length-format-BQI28fDZ.js";import"./decimal-format-B9rCT_ZY.js";import"./locales-DbHdB30_.js";import"./formatSignificantNumber-DYV3PWeu.js";import"./Intrinsics-Cs8pCUW9.js";import"./private-shims-5e5gEO17.js";import"./CesiumWidget-DING703q.js";import"./svgProjection-DwEBcRQb.js";import"./useLineVisualizers-QRQl96bw.js";import"./index-DqE-8vox.js";const me=(t,e)=>{if(!(e.duration>0)||e.curve.points.length<2)throw new Error("A camera flight needs a positive duration and two points");const o=new We(t),c=o.clipAction(e.clip);c.setLoop(qe,1),c.clampWhenFinished=!0,c.play();const r=new N,b=new N;let a,g;const i=e.clip.tracks.some(d=>d.name.endsWith(".quaternion"));return{sample(d,m){const v=(d%(e.duration*2)+e.duration*2)%(e.duration*2),y=(1-Math.cos(v*Math.PI/e.duration))/2;c.paused=!1,o.setTime(y*e.duration),e.curve.getPointAt(y,t.position),i||(e.target?t.lookAt(e.target):(e.curve.getTangentAt(y,r),t.lookAt(b.copy(t.position).add(r)))),m!==void 0&&(t.fov=m),t.fov=Math.min(120,Math.max(5,t.fov)),t.updateProjectionMatrix(),t.updateMatrixWorld(!0)},sampleAhead(d,m,v){if(!Number.isFinite(d)||!Number.isFinite(m)||m<0)throw new Error("Camera flight sample times must be finite and aheadMs must be non-negative");return a||(a=t.clone(),g=me(a,e)),a.copy(t,!1),a.fov=t.fov,a.aspect=t.aspect,a.near=t.near,a.far=t.far,a.up.copy(t.up),a.zoom=t.zoom,a.filmGauge=t.filmGauge,a.filmOffset=t.filmOffset,a.view=t.view?{...t.view}:null,g.sample(d+m/1e3,v),a},dispose(){o.stopAllAction(),o.uncacheRoot(t),g==null||g.dispose(),a=void 0,g=void 0}}},$e=(t,e)=>new Ae("camera-lens",t,[new Oe(".fov",e.map((o,c)=>c*t/Math.max(1,e.length-1)),[...e])]),Ue=async(t,e,o)=>{const c=await Ge(t,{maxCacheBytes:16777216,meshSegments:16});try{const r=[];for(const[b,a]of e){o.throwIfAborted();const g=Math.max(t.minzoom,Math.min(13,t.maxzoom)),i={level:g,x:Math.floor(Ie(b,g)),y:Math.floor(Be(a,g))};if(!c.getTileDataAvailable(i))throw new Error("Flight path lies outside the elevation source");await c.requestTile(i,o,5);const d=c.sampleHeight(b,a);if(d===void 0||!Number.isFinite(d))throw new Error("Flight path has missing elevation data");r.push(d)}return r}finally{c.release()}},Ye=`{
  "version": 8,
  "metadata": {
    "carmaConf": {
      "layerInfo": {
        "title": "3D-Mesh 2024 (Cesium-Parität)",
        "description": "Inhalt: Das texturierte 3D-Stadtmodell von Wuppertal, Stand 2024. Es ist derselbe Kachelsatz, den die 3D-Ansicht des Geoportals schon zeichnet. Gelände, Gebäude und Bewuchs stecken darin in einem Stück; einzelne Objekte lassen sich nicht anklicken oder abfragen. Die Ebene zeichnet nichts in der zweidimensionalen Karte und wird erst in der 3D-Ansicht sichtbar. Weil das Modell absolute Höhen trägt, schaltet die Ebene das Gelände ein. Datengrundlage: 3D-Mesh 2024, © Stadt Wuppertal.",
        "tags": ["Basis", "3D", "Mesh"],
        "keywords": ["carmaconf://blockLegacyGetFeatureInfo"]
      },
      "3d": {
        "renderMode": "tiles3d",
        "tilesetUrl": "https://wupp-3d-data.cismet.de/mesh2024/tileset.json",
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
`,Ke=Te,Ze=(t,e,o,c,r,b,a)=>{s.useEffect(()=>{const g=r.current;if(!g)return;const i=pe(t),d=Fe(i.layer),m=new ze(60,340/220,1,12e3),v=`coverage-window-${o}`,y=t.getCenter(),p=new AbortController;let h,x=0,C=null,E=0,R=window,L=!1,q=-1/0,D=null,M=!1;(async()=>{const u=c==="local"?null:Re[c],j=(u==null?void 0:u.coordinates)??[[y.lng,y.lat]];a("Preparing bounded DGM flight profile…");const f=await Ue(_e,j,p.signal);if(M)return;const P=j.map((T,W)=>{const O=i.layer.projectLngLatToScene([T[0],T[1]],f[W]+((u==null?void 0:u.aboveGround)??100));if(!O)throw new Error("Shared scene has no geographic frame yet");return O}),k=P[0].clone();if(!u){P.length=0;for(let T=0;T<8;T++)P.push(k.clone().add(new N(Math.cos(T*Math.PI/4)*120,0,Math.sin(T*Math.PI/4)*120)))}const A=Me,l=c==="wupper"?i.layer.projectLngLatToScene([A.longitude,A.latitude],(A.footHeight+A.topHeight)/2)??void 0:c==="local"?k.clone().add(new N(0,-80,0)):void 0,w=(u==null?void 0:u.duration)??90;h=me(m,{curve:new Ve(P,!u,"centripetal"),duration:w,target:l,clip:$e(w,(u==null?void 0:u.fov)??[60,45,60])}),a((u==null?void 0:u.note)??"Local orbit · DGM + 100 m"),t.triggerRepaint()})().catch(u=>{M||a(String(u))});const S=()=>{if(M)return;R=g.ownerDocument.defaultView??window,E=R.requestAnimationFrame(S);const u=performance.now(),j=C===null?0:Math.max(0,Math.min((u-C)/1e3,.1));if(C=u,!h||i.layer.isRenderingPaused())return;const f=b.current;f.playing&&(x+=j),!L&&(m.aspect=f.width/f.height,h.sample(x,f.autoLens?void 0:f.fov),i.layer.setTileCameraView({id:v,camera:m,viewport:[f.width,f.height],errorTargetPixels:4,role:ee.RECEIVER,priority:te.SECONDARY}),f.playing&&u-q>=100?(q=u,D=i.layer.requestTileCameraAhead(P=>({id:`${v}:ahead`,camera:h.sampleAhead(x,P,f.autoLens?void 0:f.fov),viewport:[f.width,f.height],errorTargetPixels:4,role:ee.RECEIVER,priority:te.SECONDARY}),500)):!f.playing&&D&&(i.layer.removePrefetchCameraView(D),D=null),t.triggerRepaint(),L=!0,d.present(m,g,f.width,f.height).catch(P=>{M||a(String(P))}).finally(()=>{L=!1}))};return E=requestAnimationFrame(S),()=>{M=!0,p.abort(),h==null||h.dispose(),R.cancelAnimationFrame(E),i.layer.removeTileCameraView(v),D&&i.layer.removePrefetchCameraView(D),d.dispose(),i.release(),t.triggerRepaint()}},[t,e,o,c])},Je=({map:t,runtime:e,id:o,onClose:c,dockRequest:r})=>{const b=s.useRef(null),a=s.useRef(null),g=s.useRef(null),[i]=s.useState(()=>document.createElement("div")),d=s.useRef(null),[m,v]=s.useState(!1),[y,p]=s.useState(!1),[h,x]=s.useState({x:Math.min(16+o%3*355,Math.max(16,t.getContainer().clientWidth-356)),y:100+o%3*24}),[C,E]=s.useState("Waiting for loaded mesh"),[R,L]=s.useState(o%3===0?"schwebebahn":o%3===1?"wupper":"local"),[q,D]=s.useState(60),[M,H]=s.useState(!0),[S,u]=s.useState(!0),j=s.useRef({width:340,height:220,fov:q,autoLens:M,playing:S});Object.assign(j.current,{fov:q,autoLens:M,playing:S});const f=()=>{var w;const l=d.current;d.current=null,(w=g.current)==null||w.append(i),v(!1),l&&!l.closed&&l.close()},P=()=>{if(d.current){f();return}const l=window.open("","_blank","popup,width=640,height=420");if(!l){E("Popup blocked — allow this site's popup to undock."),p(!0);return}d.current=l,l.document.title=`Tile manager · Camera ${o+1}`,Object.assign(l.document.body.style,{margin:"0",overflow:"hidden",height:"100vh"}),l.document.body.append(i),l.addEventListener("pagehide",()=>{var w;d.current===l&&(d.current=null,(w=g.current)==null||w.append(i),v(!1))},{once:!0}),v(!0)};s.useEffect(()=>{r>0&&f()},[r]),s.useEffect(()=>{var l;return Object.assign(i.style,{width:"100%",height:"100%"}),(l=g.current)==null||l.append(i),()=>{const w=d.current;d.current=null,w==null||w.close(),i.remove()}},[i]),s.useEffect(()=>{const l=a.current;if(!l)return;const w=()=>{var J;const O=l.clientWidth,$=l.clientHeight;if(O<=0||$<=0)return;const Z=Math.min(((J=l.ownerDocument.defaultView)==null?void 0:J.devicePixelRatio)??1,2,2048/Math.max(O,$));j.current.width=Math.max(1,Math.round(O*Z)),j.current.height=Math.max(1,Math.round($*Z))},T=new ResizeObserver(w);T.observe(l),w();const W=l.ownerDocument.defaultView;return W==null||W.addEventListener("resize",w),()=>{T.disconnect(),W==null||W.removeEventListener("resize",w)}},[m]);const k=s.useRef(null);Ze(t,e,o,R,b,j,E);const A=n.jsxs(we,{container:i.ownerDocument.head,children:[n.jsx("style",{children:Ke}),n.jsxs("section",{className:"tile-debug-panel","data-test-id":`coverage-camera-window-${o}`,style:{background:"transparent",width:"100%",height:"100%",display:"flex",flexDirection:"column",overflow:"hidden"},children:[n.jsxs("header",{style:{background:"rgb(248 250 252 / 96%)",display:"flex",justifyContent:"space-between",padding:"0 4px 0 8px",alignItems:"center",flexShrink:0,height:30,cursor:m?"default":"move",touchAction:"none"},onPointerDown:l=>{m||l.target.closest("button")||(k.current={x:l.clientX-h.x,y:l.clientY-h.y},l.currentTarget.setPointerCapture(l.pointerId))},onPointerMove:l=>{k.current&&x({x:Math.max(0,Math.min(t.getContainer().clientWidth-80,l.clientX-k.current.x)),y:Math.max(0,Math.min(window.innerHeight-32,l.clientY-k.current.y))})},onPointerUp:()=>{k.current=null},onPointerCancel:()=>{k.current=null},children:[n.jsxs("span",{children:["Camera ",o+1]}),n.jsxs(Se,{label:`camera ${o+1}`,external:m,onToggleExternal:P,onClose:c,children:[n.jsx(_,{type:"text","aria-label":`Camera ${o+1} options`,"aria-expanded":y,onClick:()=>p(!y),icon:n.jsx(F,{icon:ye})}),n.jsx(_,{type:"text","aria-label":`${S?"Pause":"Play"} camera ${o+1}`,onClick:()=>u(!S),icon:n.jsx(F,{icon:S?xe:Ce})})]})]}),n.jsxs("div",{ref:a,style:{position:"relative",flex:1,minHeight:0,overflow:"hidden"},children:[n.jsx("canvas",{ref:b,"data-test-id":"tile-manager-camera-preview",width:320,height:200,style:{display:"block",width:"100%",height:"100%",transform:"scaleY(-1)",background:"#18212b"}}),y&&n.jsxs("div",{"data-test-id":`camera-options-${o}`,style:{position:"absolute",top:0,right:0,bottom:0,maxWidth:"100%",boxSizing:"border-box",width:280,overflow:"auto",padding:10,background:"rgb(248 250 252 / 94%)",display:"grid",alignContent:"start",gap:8},children:[n.jsx(Ne.Group,{size:"small",value:R,onChange:l=>L(l.target.value),optionType:"button",options:[{value:"schwebebahn",label:"Rail"},{value:"wupper",label:"Wupper → HKW"},{value:"local",label:"Local"}]}),n.jsxs("label",{children:[n.jsx(K,{size:"small",checked:M,onChange:H})," ","Animated lens ·"," ",n.jsx(K,{size:"small",checked:S,onChange:u})," ","Fly"]}),n.jsxs("label",{children:["Vertical FOV ",q,"° (manual override)",n.jsx(He,{"aria-label":`Camera ${o+1} FOV`,min:5,max:120,value:q,onChange:l=>{D(l),H(!1)}})]}),n.jsx("div",{children:"Resolution follows window size (up to 2048 px per side)."}),n.jsx("div",{role:"status",children:C})]})]})]})]});return n.jsxs(n.Fragment,{children:[n.jsx("div",{ref:g,"data-test-id":`camera-dock-${o}`,style:{position:"absolute",left:h.x,top:h.y,width:340,height:250,minWidth:240,minHeight:150,maxWidth:"100%",maxHeight:"90%",resize:"both",overflow:"hidden",zIndex:8,display:m?"none":"block"}}),De.createPortal(A,i)]})},ue=({map:t,runtime:e,initialCount:o=0})=>{const[c,r]=s.useState(!1),[b,a]=s.useState(0),[g,i]=s.useState(()=>[0,1,2].slice(0,o));return n.jsxs(n.Fragment,{children:[n.jsx(_,{"data-test-id":"coverage-camera-controls","aria-label":"Cameras",title:`Cameras · ${g.length}/3 active`,"aria-expanded":c,icon:n.jsx(F,{icon:be}),style:{position:"absolute",top:8,right:52,zIndex:12},onClick:()=>r(!c)}),c&&n.jsxs("section",{className:"tile-debug-panel","data-test-id":"coverage-camera-control-window",style:{position:"absolute",top:46,right:52,zIndex:12,width:260,padding:10,background:"rgb(248 250 252 / 94%)"},children:[n.jsxs("header",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[n.jsxs("strong",{children:["Cameras · ",g.length,"/3"]}),n.jsx(_,{type:"text","aria-label":"Close camera controls",onClick:()=>r(!1),children:"×"})]}),["Schwebebahn","Wupper → HKW","Local orbit"].map((d,m)=>n.jsxs("label",{style:{display:"flex",gap:10,alignItems:"center",paddingBlock:8},children:[n.jsx(K,{size:"small","aria-label":`Enable camera ${m+1}`,checked:g.includes(m),onChange:v=>i(y=>v?[...y.filter(p=>p!==m),m].sort():y.filter(p=>p!==m))}),"Camera ",m+1," · ",d]},m)),n.jsx("small",{children:"Drag a header, resize its corner, or undock. All cameras share the main scene and tile pool."}),n.jsx(_,{style:{marginTop:8},icon:n.jsx(F,{icon:ve}),onClick:()=>a(d=>d+1),children:"Dock all cameras"})]}),g.map(d=>n.jsx(Je,{id:d,dockRequest:b,map:t,runtime:e,onClose:()=>i(m=>m.filter(v=>v!==d))},d))]})};ue.__docgenInfo={description:"Coverage story variant: all windows consume the host's existing scene and pool.",methods:[],displayName:"MeshCoverageCameraWindows",props:{map:{required:!0,tsType:{name:"MapLibreMap"},description:""},runtime:{required:!0,tsType:{name:"ThreeTilesRuntime"},description:""},initialCount:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}}}};const V={"parity zoom 18":{zoom:18,pitch:0,bearing:0},"zoomed in 20":{zoom:20,pitch:0,bearing:0},"overview 14":{zoom:14,pitch:0,bearing:0},"oblique 15":{zoom:15,pitch:75,bearing:20},"horizon 16":{zoom:16,pitch:85,bearing:-30}},Xe=JSON.parse(Ye),Y=[7.1999207,51.2725716],Qe=1,z=Xe.metadata.carmaConf["3d"],ge=({onOptionsChange:t,...e})=>{const o=s.useRef(e);o.current=e;const c=s.useRef(null),[r,b]=s.useState(null),[a,g]=s.useState({width:0,height:0,x:0,y:0,left:0,right:0,top:0,bottom:0}),[i,d]=s.useState(null),[m]=s.useState(()=>fe({capacity:120,logCapacity:300}));window.__meshCoverageRecorder=m,s.useEffect(()=>{if(!c.current)return;const p=new X.Map({container:c.current,center:Y,zoom:V[e.camera].zoom-1,pitch:V[e.camera].pitch,bearing:V[e.camera].bearing,maxPitch:85,minZoom:0,maxZoom:25,attributionControl:{},style:Pe(null)});p.addControl(new X.NavigationControl),p.setPadding({left:e.paddingLeft??0,right:e.paddingRight??0,top:e.paddingTop??0,bottom:e.paddingBottom??0});let h=null,x=null;const C=()=>{h=pe(p),x=Ee("mesh-2024-coverage",z.tilesetUrl,Y,{providesTerrain:!0,mapStyleDrape:"none",colorCorrection:z.colorCorrection,entry:z.entry,baseErrorTargetPixels:o.current.initialPixelError??z.baseErrorTarget,diagnostics:o.current.debug&&o.current.telemetryEnabled,cacheBudgetBytes:6*1024**3}),x.loading.setErrorTarget(o.current.idlePixelError??Q),x.loading.setTilesetMinResolution(o.current.tilesetMinResolutionPx>0?o.current.tilesetMinResolutionPx:null),h.layer.addRuntime(x.scene),d(x),b(p)};return p.once("load",C),()=>{b(null),d(null),x&&h&&h.layer.removeRuntime(x.scene.id),h==null||h.release(),p.remove()}},[]);const v=s.useRef(!0);s.useEffect(()=>{i==null||i.loading.setErrorTarget(e.idlePixelError??Q,e.initialPixelError??z.baseErrorTarget)},[i,e.idlePixelError,e.initialPixelError]),s.useEffect(()=>{if(!r)return;const p=V[e.camera],h={center:Y,zoom:p.zoom-1,pitch:p.pitch,bearing:p.bearing};v.current?(v.current=!1,r.jumpTo(h)):r.easeTo({...h,duration:1200})},[r,e.camera]),s.useEffect(()=>{r&&r.setVerticalFieldOfView(e.projection==="near orthographic"?Qe:e.fovDegrees)},[r,e.projection,e.fovDegrees]),s.useEffect(()=>{if(!r)return;e.paddingPanels||r.setPadding({left:e.paddingLeft??0,right:e.paddingRight??0,top:e.paddingTop??0,bottom:e.paddingBottom??0});const p=()=>{if(!e.showPaddingGuide)return;const h=r.getCanvas(),x=r.project(r.getCenter()),C=r.getPadding(),E={width:h.clientWidth,height:h.clientHeight,x:Math.round(x.x*100)/100,y:Math.round(x.y*100)/100,left:C.left??0,right:C.right??0,top:C.top??0,bottom:C.bottom??0};g(R=>Object.keys(E).every(L=>R[L]===E[L])?R:E)};return p(),r.on("resize",p),r.on("move",p),()=>{r.off("resize",p),r.off("move",p)}},[r,e.paddingLeft,e.paddingRight,e.paddingTop,e.paddingBottom,e.showPaddingGuide,e.paddingPanels]),s.useEffect(()=>{if(!r||!c.current)return;const p=new ResizeObserver(()=>r.resize());return p.observe(c.current),()=>p.disconnect()},[r]);const y=a.x+110>a.width;return n.jsx("div",{className:"mesh-coverage-story",style:{height:"100vh",position:"relative",width:e.viewportWidth?`${e.viewportWidth}px`:"100%",maxWidth:"100%",marginInline:"auto"},children:n.jsxs("div",{style:{position:"absolute",inset:0},children:[n.jsx("div",{ref:c,"data-test-id":"mesh-coverage-map",style:{position:"absolute",inset:0,background:"#d8dde3"}}),e.showPaddingGuide&&n.jsxs("svg",{"data-test-id":"mesh-coverage-padding-guide",width:"100%",height:"100%",style:{position:"absolute",inset:0,pointerEvents:"none",overflow:"hidden"},"aria-label":"Usable viewport and padded map center",children:[n.jsx("rect",{x:a.left,y:a.top,width:Math.max(0,a.width-a.left-a.right),height:Math.max(0,a.height-a.top-a.bottom),fill:"none",stroke:"#00eaff",strokeWidth:"2"}),n.jsx("path",{"data-test-id":"mesh-coverage-padding-focus",d:`M${a.x-10},${a.y}h20 M${a.x},${a.y-10}v20`,fill:"none",stroke:"#00eaff",strokeWidth:"2"}),n.jsx("text",{x:a.x+(y?-14:14),y:Math.max(16,Math.min(a.height-6,a.y-8)),textAnchor:y?"end":"start",fill:"#00eaff",stroke:"#123",strokeWidth:"3",paintOrder:"stroke",style:{font:"12px sans-serif"},children:"Padded focus"})]}),r&&e.paddingPanels&&n.jsx(je,{map:r}),r&&i&&n.jsx(ue,{map:r,runtime:i,initialCount:e.cameraWindows?3:0},String(!!e.cameraWindows)),r&&i&&n.jsx(ke,{map:r,recorder:m,options:e,runtimeHandle:i,onOptionsChange:t,open:e.debug,onOpenChange:p=>t({debug:p})})]})})},he=t=>{const[e,o]=s.useState({});s.useEffect(()=>{o(r=>{if(r.debug===void 0)return r;const b={...r};return delete b.debug,b})},[t.debug]);const c={...t,...e};return n.jsx(ge,{...c,onOptionsChange:r=>o(b=>({...b,...r}))})};ge.__docgenInfo={description:"",methods:[],displayName:"MeshCoverageScene",props:{debug:{required:!0,tsType:{name:"boolean"},description:""},initialPixelError:{required:!1,tsType:{name:"number"},description:""},idlePixelError:{required:!1,tsType:{name:"number"},description:""},camera:{required:!0,tsType:{name:"union",raw:"keyof typeof CAMERA_PRESETS",elements:[{name:"literal",value:'"parity zoom 18"'},{name:"literal",value:'"zoomed in 20"'},{name:"literal",value:'"overview 14"'},{name:"literal",value:'"oblique 15"'},{name:"literal",value:'"horizon 16"'}]},description:"Start view; changing it eases the camera there."},projection:{required:!0,tsType:{name:"union",raw:'"perspective" | "near orthographic"',elements:[{name:"literal",value:'"perspective"'},{name:"literal",value:'"near orthographic"'}]},description:`MapLibre has no orthographic projection; one-degree vertical FOV moves
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
the camera far out and flattens perspective for both map and tiles.`},{key:"fovDegrees",value:{name:"number",required:!0},description:"Vertical field of view of the perspective camera in degrees."},{key:"paddingLeft",value:{name:"number",required:!1},description:"MapLibre viewport insets in CSS pixels; coverage still fills the canvas."},{key:"paddingRight",value:{name:"number",required:!1}},{key:"paddingTop",value:{name:"number",required:!1}},{key:"paddingBottom",value:{name:"number",required:!1}},{key:"showPaddingGuide",value:{name:"boolean",required:!1}},{key:"paddingPanels",value:{name:"boolean",required:!1}},{key:"viewportWidth",value:{name:"number",required:!1},description:"Zero follows the available width; positive values exercise narrow hosts."},{key:"cameraWindows",value:{name:"boolean",required:!1}}]}}]}],raw:"Partial<MeshCoverageDemoOptions>"},name:"patch"}],return:{name:"void"}}},description:""}}};he.__docgenInfo={description:"Direct MapLibre host: no portals, topic-map or provider dependency stack.",methods:[],displayName:"MeshCoverageDemo",props:{debug:{required:!0,tsType:{name:"boolean"},description:""},initialPixelError:{required:!1,tsType:{name:"number"},description:""},idlePixelError:{required:!1,tsType:{name:"number"},description:""},camera:{required:!0,tsType:{name:"union",raw:"keyof typeof CAMERA_PRESETS",elements:[{name:"literal",value:'"parity zoom 18"'},{name:"literal",value:'"zoomed in 20"'},{name:"literal",value:'"overview 14"'},{name:"literal",value:'"oblique 15"'},{name:"literal",value:'"horizon 16"'}]},description:"Start view; changing it eases the camera there."},projection:{required:!0,tsType:{name:"union",raw:'"perspective" | "near orthographic"',elements:[{name:"literal",value:'"perspective"'},{name:"literal",value:'"near orthographic"'}]},description:`MapLibre has no orthographic projection; one-degree vertical FOV moves
the camera far out and flattens perspective for both map and tiles.`},fovDegrees:{required:!0,tsType:{name:"number"},description:"Vertical field of view of the perspective camera in degrees."},paddingLeft:{required:!1,tsType:{name:"number"},description:"MapLibre viewport insets in CSS pixels; coverage still fills the canvas."},paddingRight:{required:!1,tsType:{name:"number"},description:""},paddingTop:{required:!1,tsType:{name:"number"},description:""},paddingBottom:{required:!1,tsType:{name:"number"},description:""},showPaddingGuide:{required:!1,tsType:{name:"boolean"},description:""},paddingPanels:{required:!1,tsType:{name:"boolean"},description:""},viewportWidth:{required:!1,tsType:{name:"number"},description:"Zero follows the available width; positive values exercise narrow hosts."},cameraWindows:{required:!1,tsType:{name:"boolean"},description:""}}};const Vn={title:"Tile Loading Manager/Reference",id:"tile-loading-manager-coverage",component:he,parameters:{layout:"fullscreen",controls:{include:["debug","camera","projection","fovDegrees","foveation","initialPixelError","idlePixelError","tilesetMinResolutionPx","parseJobs","cacheBudgetMB"]},docs:{description:{component:"The production tile manager on the common MapLibre story base, with diagnostics enabled by default. Tile overview settings stay together: Off / Overlay / Window, legend visibility, view following, diagnostic up, labels and opacity. Overlay is the default; the legend belongs to the overview rather than a separate global panel. Queue, statistics, charts and event log remain independent movable, resizable and detachable windows. The map overview is unfilled with solid strokes and a narrow 25% grey darken under-stroke; the window overview has state fills. Circles indicate refinement steps, five-square cross outlines excess detail, no symbol the target LOD, and an approximation mark estimated steps. Offscreen baseline tiles omit LOD contours. The camera intersection clips the actual 3D frustum to tileset bounds. Up switching affects only diagnostics; loaded wireframes share source geometry. Unchanged diagnostic snapshots do not rebuild geometry or React/SVG, and hidden queues/charts do no display work. See libraries/mapping/engines/maplibre/TILES_COVERAGE.md."}}},args:{debug:!0,showOverviewPanel:!1,overviewUp:"camera-tangent",showTileGeometry:!1,camera:"parity zoom 18",projection:"perspective",fovDegrees:37,showOverlay:!0,hideAllDebugPanels:!1,telemetryEnabled:!0,showLegend:!0,showCharts:!1,showEventLog:!1,overviewView:"frustum",overviewPaddingPercent:200,overlayOpacity:.85,showFrustum:!0,showResident:!0,overlayLabels:"none",sceneLabels:!1,showQueue:!1,showStats:!1,sceneExtents:"none",debugColorMode:"NONE",debugBoxBounds:!1,debugSphereBounds:!1,debugParentBounds:!1,debugUnlit:!1,foveation:0,initialPixelError:U.metadata.carmaConf["3d"].baseErrorTarget,idlePixelError:U.metadata.carmaConf["3d"].errorTarget,tilesetMinResolutionPx:U.metadata.carmaConf["3d"].tilesetMinResolutionPx,parseJobs:2,cacheBudgetMB:6144,paddingLeft:0,paddingRight:0,paddingTop:0,paddingBottom:0,showPaddingGuide:!1,viewportWidth:0},argTypes:{debug:{control:"boolean",description:"Enable the diagnostic toolbar and telemetry. Individual panels and display switches live in the toolbar; the mesh/runtime is not rebuilt."},hideAllDebugPanels:{control:"boolean",description:"Hide all panels, including popouts. Keep telemetry running for recordings.",table:{category:"Diagnostics"}},telemetryEnabled:{control:"boolean",description:"Disable to stop story sampling, observers, charts, scene debug helpers and runtime diagnostic bookkeeping. Panels are hidden while disabled; tile loading continues unchanged.",table:{category:"Diagnostics"}},showLegend:{control:"boolean",table:{category:"Diagnostics"}},showCharts:{control:"boolean",table:{category:"Diagnostics"}},showEventLog:{control:"boolean",table:{category:"Diagnostics"}},camera:{control:{type:"radio"},options:Object.keys(V),table:{category:"Camera"}},projection:{control:"radio",options:["perspective","near orthographic"],table:{category:"Camera"}},fovDegrees:{control:{type:"range",min:10,max:120,step:1},table:{category:"Camera"}},showOverlay:{control:"boolean"},overviewView:{control:"radio",options:["extent","frustum"]},overviewPaddingPercent:{control:{type:"range",min:100,max:500,step:25}},overlayOpacity:{control:{type:"range",min:0,max:1,step:.05}},showFrustum:{control:"boolean"},showResident:{control:"boolean"},overlayLabels:{control:"radio",options:["none","id","id and error"]},sceneLabels:{control:"boolean"},showQueue:{control:"boolean"},showStats:{control:"boolean"},sceneExtents:{control:"radio",options:["none","boxes","edges"]},debugColorMode:{control:{type:"radio"},options:[...Le]},debugBoxBounds:{control:"boolean"},debugSphereBounds:{control:"boolean"},debugParentBounds:{control:"boolean"},debugUnlit:{control:"boolean"},foveation:{control:{type:"range",min:0,max:8,step:.5},table:{category:"Loading"}},tilesetMinResolutionPx:{control:{type:"inline-radio",labels:{0:"Metadata hint"}},options:[0,256,512,1024,2048,4096],description:"Residual surface across the full tileset extent, prepared with tree transitions after initial view quality and before idle refinement. 0 uses the metadata hint; it does not disable coverage. Memory limits still apply.",table:{category:"Loading"}},initialPixelError:{control:{type:"range",min:1,max:64,step:1},description:"First acceptable viewport error in pixels. Clamped to at least the idle target. Then prepare the residual surface and transitions.",table:{category:"Loading"}},idlePixelError:{control:{type:"range",min:.5,max:32,step:.5},description:"Final viewport error after the initial reserve pass; lower is finer. Memory pressure can relax the effective target.",table:{category:"Loading"}},parseJobs:{control:{type:"range",min:1,max:6,step:1},table:{category:"Loading"}},cacheBudgetMB:{control:{type:"inline-radio"},options:[256,512,1024,2048,4096,6144],table:{category:"Memory"}}}},G={},I={name:"Camera Windows · three-camera stress",args:{cameraWindows:!0,overviewCameraFocus:"all"},parameters:{docs:{description:{story:"Stress preset of Mesh Coverage: the same Cameras control opens three secondary views. Each window is resizable and can undock without replacing its camera or tile pool. Render resolution follows the image area (DPR up to 2, longest side up to 2048 px). Route and lens options collapse into the header. Main-map loading retains primary priority. All frustums are visible in the overview, which can crop to their union or one camera. The Schwebebahn profile uses an assumed rail height of DGM + 13 m; Wupper bank looks towards HKW Zoo. Popups depend on browser support; Dock all cameras also returns detached views to the main page."}}}},B={argTypes:{paddingLeft:{control:{type:"range",min:0,max:600,step:20},table:{category:"Viewport padding"}},paddingRight:{control:{type:"range",min:0,max:600,step:20},table:{category:"Viewport padding"}},paddingTop:{control:{type:"range",min:0,max:300,step:10},table:{category:"Viewport padding"}},paddingBottom:{control:{type:"range",min:0,max:300,step:10},table:{category:"Viewport padding"}},showPaddingGuide:{control:"boolean",table:{category:"Viewport padding"}},viewportWidth:{control:{type:"inline-radio"},options:[0,480,768,1024],description:"CSS pixels; zero follows the available width. Resizes the existing map.",table:{category:"Viewport padding"}}},name:"Viewport Request Padding",args:{paddingPanels:!0,debug:!1,showPaddingGuide:!0,foveation:4},parameters:{controls:{include:["viewportWidth","showPaddingGuide","camera","projection","fovDegrees","foveation","debug"]},docs:{description:{story:"Enable translucent Lorem ipsum panels on any side and drag their inner edges (or use arrow keys on the handles). Their measured CSS-pixel extents, including outer spacing, go through map.setPadding only. The cyan guide reads map.getPadding and map.project(map.getCenter); the existing native camera path propagates the asymmetric view to tile selection and foveation, without replacing the map or pool. Coverage still fills the whole canvas. Narrow the host with viewportWidth to test responsive insets."}}}};var ne,re,ae;G.parameters={...G.parameters,docs:{...(ne=G.parameters)==null?void 0:ne.docs,source:{originalSource:"{}",...(ae=(re=G.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};var oe,ie,se;I.parameters={...I.parameters,docs:{...(oe=I.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(se=(ie=I.parameters)==null?void 0:ie.docs)==null?void 0:se.source}}};var le,de,ce;B.parameters={...B.parameters,docs:{...(le=B.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(ce=(de=B.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};const _n=["MeshCoverage","CameraWindows","ViewportPadding"];export{I as CameraWindows,G as MeshCoverage,B as ViewportPadding,_n as __namedExportsOrder,Vn as default};
