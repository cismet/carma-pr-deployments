import{j as L}from"./jsx-runtime-DNp_qQjF.js";import{T as d,a as g,b as u}from"./TileCameraStressDemo-Bz0clRBm.js";import"./index-CSJjS6Ct.js";import"./raster-dem-terrain-runtime-CA7T8dHK.js";import"./iframe-CvVg1JcT.js";import"./___vite-browser-external_commonjs-proxy-N_IygbFj.js";import"./AnnotationsProvider-CzI9pMdP.js";import"./index-BiqCsKMD.js";import"./index-D1cknlJ6.js";import"./index-Dt1MMDS6.js";import"./index-DNNUJLgJ.js";import"./context-ByOMqU15.js";import"./button-zV0VwOeY.js";import"./StripChartPanel-D16zj1fl.js";import"./ControlButtonStyler-C_yTvQxK.js";import"./index-EAHNcU7k.js";import"./angles-DwBSWmgw.js";import"./pi-mVFkAveX.js";import"./useLineSegmentVisualizers-DC3LbUg5.js";import"./angle-normalization-itBhVa_t.js";import"./geometry2d-CX4pp3QL.js";import"./camera-local-mercator-fit-DegOzuJg.js";import"./three.module-BbS8FVfS.js";import"./custom-shaders-YZ9UX1_Y.js";import"./negative-pi-to-pi-B-FiLZ9M.js";import"./clamp-co6UzHBn.js";import"./useCesiumFovWheelZoom-dRIH2Rqr.js";import"./ViewStateNavigationManagerContext-DoXXQjG8.js";import"./maplibre-gl-BvLDYGIs.js";import"./carma-guards-D0YA5IT1.js";import"./Scene-CV5vkAVu.js";import"./meshopt_encoder.module-D2BiFfpM.js";import"./meshopt_decoder.module-Clo9gF-m.js";/* empty css                                      */import"./config-D9YyMdts.js";import"./length-format-BQI28fDZ.js";import"./decimal-format-B9rCT_ZY.js";import"./locales-DbHdB30_.js";import"./formatSignificantNumber-DYV3PWeu.js";import"./camera-intrinsics-utils-tHu2xf2P.js";import"./Intrinsics-BZXehqER.js";import"./wms-uhWQECSC.js";import"./private-shims-5e5gEO17.js";import"./CesiumWidget-DXPJAC4i.js";import"./pitch-conventions-DmlZPLS9.js";import"./Picking-B6dhJzHp.js";import"./svgProjection-Bey-wwPZ.js";import"./constants-C6-_E4xW.js";import"./useLineVisualizers-DsSGUeFh.js";/* empty css                    */import"./ObjectCentricViewStateInfoBox-CmEX_ET6.js";import"./FrameWait-CUCv3Xso.js";import"./zoom-BADcZy_j.js";import"./sampleTerrainMostDetailed-DzShldoy.js";import"./KeyCode-N-7Xd5Bx.js";import"./useCSSVarCls-DszFOZJe.js";import"./create-view-state-visualizer-GACPraAP.js";import"./derivations-0T2VH2ij.js";import"./plane-intersections-DhJfyQJx.js";import"./clip-convex-polygon-IoxdMmN7.js";import"./Line2-DyEJDEbi.js";import"./LineSegments2-t2CFrZ8Q.js";import"./LineGeometry-C2VLExo2.js";import"./mesh-helpers-gXNzNUuQ.js";import"./gazData-Brc5D-0D.js";import"./index-BqZa7idx.js";import"./BaseInput-BdW3JcEm.js";import"./TextArea-BfrxwvlZ.js";import"./CheckOutlined-CfPPXKB0.js";import"./index-B63O7Mt3.js";import"./index-B-TF2-Dz.js";import"./PlusOutlined-Dp2wtGHz.js";import"./raster-dem-terrain-tile-source-ChrCKlTR.js";import"./raster-dem-tile-BLpdYkq4.js";import"./terrain-CDUojVZ_.js";import"./geo-DquIFAzp.js";import"./tile-camera-demand-CfFJmPzx.js";import"./scene-accumulator-D5gdEc5s.js";import"./scene-accumulation-format-k4IFoG-e.js";import"./plugins-DXnt62ch-B-6Rdybs.js";import"./DRACOLoader-B04OWNKj.js";import"./mesh-error-policy-CEsUGjSl.js";import"./hostname-CU8uGQVB.js";import"./plugins-RoDI5SD7-DsI49XK0.js";import"./gltf1-upgrade-plugin-B5vcSbvC.js";import"./mesh-base-cache-protocol-Dbd1fYG2.js";import"./mesh-tile-coverage-DOkCwToP.js";import"./mesh-tile-selection-BOOKci7h.js";import"./terrain-ecef-conversion-4eUJ8CFS.js";import"./derived-cache-epoch-B1SlmyVB.js";import"./terrain-tile-geometry-DPOJACeL.js";import"./geodetic-terrain-tile-geometry-KVfqWtC7.js";import"./tiles-camera-set-DInj6eja.js";import"./mesh-shadow-retrieval-BQJnUfC7.js";import"./mesh-camera-objective-C68ASzwK.js";import"./DiagnosticPanel-DmilYw4I.js";import"./index-E2E7RJ_Z.js";import"./index-DtEW4c3i.js";import"./shared-three-scene-camera-preview-CmJ-fz-n.js";import"./mesh2024-cesium-parity.style-BYNaxW5b.js";import"./maplibre-story-style-IbzX9XsM.js";const Dr={title:"Tile Loading Manager/Camera Views",id:"tile-loading-manager-camera-views",component:d,render:s=>L.jsx(d,{...g,...s}),parameters:{layout:"fullscreen",docs:{description:{component:"The main MapLibre view is always the priority camera. Panorama and facade arrays remain secondary demand against the same real mesh or Terrarium source, shared Three scene/renderer and tile pool. Resizable sidebar panels use native MapLibre padding; the main projection passes that focus to the manager. Diagnostic image strips are observations, not certified coverage."}}},args:g,argTypes:{scenario:{table:{disable:!0}},source:{options:["mesh","terrain"],control:"radio"},preset:{options:["Toelleturm","HKW chimney-top virtual eye","Rathaus roof virtual eye"],control:"select"},cameraCount:{table:{category:"Camera rig"},control:{type:"range",min:3,max:64,step:1},description:"Minimum count: every retained shoreline segment gets a camera even if this needs more cameras."},mode:{table:{category:"Camera rig"},options:["panorama","object-cover"],control:"radio"},path:{table:{category:"Spine and perimeter"},options:["perimeter","wupper-bank","schwebebahn","urban-street","custom"],control:"select"},visibleSegments:{table:{category:"Array navigation"},control:{type:"range",min:1,max:30,step:1},description:"Initial visible segment window. Only on-screen cameras request tiles or render."},pairedSides:{table:{disable:!0}},customSpine:{table:{category:"Spine and perimeter"},control:"object",description:"Ordered [longitude, latitude, optional elevation] points. Select custom path."},closed:{table:{category:"Spine and perimeter"},control:"boolean"},side:{table:{category:"Spine and perimeter"},options:[1,-1],control:"radio"},elevation:{table:{category:"Camera rig"},control:"number",description:"Shared array elevation; 0 uses the preset. Spine vertex heights do not move individual panels. Alt-drag shifts the whole array."},radius:{table:{category:"Camera rig"},control:{type:"range",min:5,max:500,step:5}},viewHeight:{table:{category:"Vertical framing"},control:{type:"range",min:5,max:300,step:5},if:{arg:"mode",eq:"object-cover"},description:"Orthographic object-cover height in metres; ignored by perspective panoramas."},cameraOffset:{table:{category:"Spine and perimeter"},control:{type:"range",min:1,max:100,step:1}},referenceSurfaceOffset:{table:{category:"Spine and perimeter"},control:{type:"number",step:.5},description:"0 = spine, positive = farther into the scene. Panel edges meet at this depth, not at every depth. Invalid folded/behind-camera surfaces are rejected; no silent clamping."},objectReferenceDepth:{table:{category:"Camera rig"},control:{type:"number",min:.1,step:.5},description:"Inward orthographic wall: depth must be smaller than the cylinder radius and far plane."},perimeterClearance:{table:{category:"Spine and perimeter"},control:{type:"range",min:2,max:20,step:.5},description:"Outward offset of every ALKIS hull edge in scene metres; minimum 2 m. Closed perimeter only."},backStreetMargin:{table:{category:"Clipping"},control:{type:"range",min:0,max:20,step:.5},description:"Far plane margin behind the original hull, fitted separately to each strip. Closed perimeter only."},clipBeforeSurface:{table:{category:"Clipping"},control:{type:"range",min:0,max:20,step:.1},description:"Must be less than camera offset."},clipping:{table:{category:"Clipping"},control:"boolean"},showImagePlanes:{table:{category:"Debug"},control:"boolean"},far:{table:{category:"Clipping"},control:{type:"range",min:10,max:1e4,step:5}},pixelError:{options:[2,4,8,16,32],control:"select"},segmentPixels:{table:{category:"Preview output"},options:[64,128,256,512],control:"select"},previewUpdatesPerSecond:{table:{category:"Preview output"},control:{type:"range",min:1,max:30,step:1},description:"Total segment updates, not complete panoramas per second."},panoramaVerticalFovDegrees:{table:{category:"Vertical framing"},if:{arg:"mode",eq:"panorama"},control:{type:"range",min:20,max:120,step:1},description:"Nominal zero-shift vertical FOV. Lens shift changes angular top/bottom coverage; camera count partitions only the horizontal panorama."},panoramaPitchDegrees:{table:{category:"Vertical framing"},if:{arg:"mode",eq:"panorama"},control:{type:"range",min:-45,max:45,step:1},description:"Vertical lens shift keeps adjacent vertical image planes aligned."},fitVertical:{table:{category:"Vertical framing"},control:"boolean",description:"Fit the preset vertical window when one is available."},spineMergeAngleDegrees:{table:{category:"Spine and perimeter"},control:{type:"range",min:0,max:15,step:.5},description:"Maximum heading range of near-straight merged edges. Closed footprint retains every hull edge to preserve clearance."},verticalPadding:{table:{category:"Vertical framing"},control:{type:"range",min:0,max:50,step:1},description:"Scene metres added above and below the fitted window."},animate:{table:{disable:!0}},lightCount:{table:{disable:!0}},lightIntensity:{table:{disable:!0}},lightRange:{table:{disable:!0}},shadowMapSize:{table:{disable:!0}},shadowLightLimit:{table:{disable:!0}},shadowUpdatesPerSecond:{table:{disable:!0}},lightMinHeight:{table:{disable:!0}},lightMaxHeight:{table:{disable:!0}},orbitSeconds:{table:{disable:!0}},mastHeight:{table:{disable:!0}},normalBias:{table:{disable:!0}},showLightViews:{table:{disable:!0}},viewLightIndex:{table:{disable:!0}}}},p=["source","cameraCount","elevation","far","pixelError","segmentPixels","previewUpdatesPerSecond","showImagePlanes"],c=[...p,"preset","mode","radius","viewHeight","panoramaVerticalFovDegrees","panoramaPitchDegrees"],l={controls:{include:[...p,"path","visibleSegments","customSpine","closed","side","fitVertical","viewHeight","verticalPadding","spineMergeAngleDegrees","cameraOffset","referenceSurfaceOffset","perimeterClearance","backStreetMargin","clipping","clipBeforeSurface"]}},m={viewHeight:{if:{arg:"fitVertical",eq:!1}},customSpine:{if:{arg:"path",eq:"custom"}},clipBeforeSurface:{if:{arg:"clipping",truthy:!0}}},e={name:"Toelleturm panorama",parameters:{controls:{include:c}}},r={parameters:{controls:{include:c}},args:{preset:"HKW chimney-top virtual eye",panoramaPitchDegrees:-18}},t={name:"Rathaus roof panorama · review",parameters:{controls:{include:c}},args:{preset:"Rathaus roof virtual eye",panoramaPitchDegrees:-12}},a={name:"Rathaus perimeter unroll · review",parameters:l,argTypes:m,args:{scenario:"facade",preset:"Rathaus Barmen",path:"perimeter",closed:!0,cameraCount:16,perimeterClearance:3,referenceSurfaceOffset:0,backStreetMargin:3,clipping:!0,clipBeforeSurface:0,far:300}},n={name:"Schwebebahn · full route, sliding window",parameters:l,argTypes:m,args:{scenario:"facade",preset:"Wupper north bank / Barmen",path:"schwebebahn",visibleSegments:10,referenceSurfaceOffset:0,showImagePlanes:!1,closed:!1,cameraCount:3,spineMergeAngleDegrees:3,side:-1,cameraOffset:10,clipBeforeSurface:8,verticalPadding:0,clipping:!0,viewHeight:40,far:250}},i={name:"B7 · synchronized street sides",parameters:{controls:{include:["streetView","upperStreetSide",...l.controls.include.filter(s=>s!=="side")]}},argTypes:{...m,streetView:{options:["left","right","both"],control:{type:"inline-radio",labels:{left:"Links",right:"Rechts",both:"Beide · synchron"}},table:{category:"Street unfolding"}},upperStreetSide:{options:["left","right"],control:{type:"inline-radio",labels:{left:"Links",right:"Rechts"}},if:{arg:"streetView",eq:"both"},table:{category:"Street unfolding"}}},args:{scenario:"facade",preset:"Rathaus Barmen",path:"urban-street",closed:!1,cameraCount:3,visibleSegments:10,pairedSides:!0,streetView:"both",referenceSurfaceOffset:0,upperStreetSide:"left",side:1,cameraOffset:1,clipBeforeSurface:0,clipping:!0,fitVertical:!1,viewHeight:50,verticalPadding:0,spineMergeAngleDegrees:3,far:65,showImagePlanes:!1}},o={name:"HKW chimney object cover · review",parameters:{controls:{include:[...p,"radius","viewHeight","objectReferenceDepth","clipping"]}},args:{preset:"HKW chimney",mode:"object-cover",elevation:(u["HKW chimney"].verticalWindow.minElevation+u["HKW chimney"].verticalWindow.maxElevation)/2,viewHeight:220,showImagePlanes:!1,radius:90,objectReferenceDepth:80,far:200,clipping:!1}};var h,f,b;e.parameters={...e.parameters,docs:{...(h=e.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "Toelleturm panorama",
  parameters: {
    controls: {
      include: panoramaControls
    }
  }
}`,...(b=(f=e.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var y,S,v;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: panoramaControls
    }
  },
  args: {
    preset: "HKW chimney-top virtual eye",
    panoramaPitchDegrees: -18
  }
}`,...(v=(S=r.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};var w,C,P;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: "Rathaus roof panorama · review",
  parameters: {
    controls: {
      include: panoramaControls
    }
  },
  args: {
    preset: "Rathaus roof virtual eye",
    panoramaPitchDegrees: -12
  }
}`,...(P=(C=t.parameters)==null?void 0:C.docs)==null?void 0:P.source}}};var R,T,x;a.parameters={...a.parameters,docs:{...(R=a.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: "Rathaus perimeter unroll · review",
  parameters: facadeParameters,
  argTypes: facadeArgTypes,
  args: {
    scenario: "facade",
    preset: "Rathaus Barmen",
    path: "perimeter",
    closed: true,
    cameraCount: 16,
    perimeterClearance: 3,
    referenceSurfaceOffset: 0,
    backStreetMargin: 3,
    // Clip at the buffered outline, outside the building and its cornices.
    clipping: true,
    clipBeforeSurface: 0,
    far: 300
  }
}`,...(x=(T=a.parameters)==null?void 0:T.docs)==null?void 0:x.source}}};var H,O,V;n.parameters={...n.parameters,docs:{...(H=n.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: "Schwebebahn · full route, sliding window",
  parameters: facadeParameters,
  argTypes: facadeArgTypes,
  args: {
    scenario: "facade",
    preset: "Wupper north bank / Barmen",
    path: "schwebebahn",
    visibleSegments: 10,
    referenceSurfaceOffset: 0,
    showImagePlanes: false,
    closed: false,
    cameraCount: 3,
    spineMergeAngleDegrees: 3,
    // West-to-east northern bank: stand landward and look across the river.
    side: -1,
    cameraOffset: 10,
    clipBeforeSurface: 8,
    verticalPadding: 0,
    clipping: true,
    viewHeight: 40,
    far: 250
  }
}`,...(V=(O=n.parameters)==null?void 0:O.docs)==null?void 0:V.source}}};var D,E,j;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: "B7 · synchronized street sides",
  parameters: {
    controls: {
      include: ["streetView", "upperStreetSide", ...facadeParameters.controls.include.filter(name => name !== "side")]
    }
  },
  argTypes: {
    ...facadeArgTypes,
    streetView: {
      options: ["left", "right", "both"],
      control: {
        type: "inline-radio",
        labels: {
          left: "Links",
          right: "Rechts",
          both: "Beide · synchron"
        }
      },
      table: {
        category: "Street unfolding"
      }
    },
    upperStreetSide: {
      options: ["left", "right"],
      control: {
        type: "inline-radio",
        labels: {
          left: "Links",
          right: "Rechts"
        }
      },
      if: {
        arg: "streetView",
        eq: "both"
      },
      table: {
        category: "Street unfolding"
      }
    }
  },
  args: {
    scenario: "facade",
    preset: "Rathaus Barmen",
    path: "urban-street",
    closed: false,
    cameraCount: 3,
    visibleSegments: 10,
    pairedSides: true,
    streetView: "both",
    referenceSurfaceOffset: 0,
    upperStreetSide: "left",
    side: 1,
    cameraOffset: 1,
    clipBeforeSurface: 0,
    clipping: true,
    fitVertical: false,
    viewHeight: 50,
    verticalPadding: 0,
    spineMergeAngleDegrees: 3,
    far: 65,
    showImagePlanes: false
  }
}`,...(j=(E=i.parameters)==null?void 0:E.docs)==null?void 0:j.source}}};var B,M,I;o.parameters={...o.parameters,docs:{...(B=o.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: "HKW chimney object cover · review",
  parameters: {
    controls: {
      include: [...cameraControls, "radius", "viewHeight", "objectReferenceDepth", "clipping"]
    }
  },
  args: {
    preset: "HKW chimney",
    mode: "object-cover",
    elevation: (TILE_STRESS_PRESETS["HKW chimney"].verticalWindow.minElevation + TILE_STRESS_PRESETS["HKW chimney"].verticalWindow.maxElevation) / 2,
    viewHeight: 220,
    showImagePlanes: false,
    radius: 90,
    objectReferenceDepth: 80,
    far: 200,
    clipping: false
  }
}`,...(I=(M=o.parameters)==null?void 0:M.docs)==null?void 0:I.source}}};const Er=["Panorama","HkwChimneyTopPanorama","RathausRoofPanorama","ClosedFacade","OpenSpine","StreetSides","ChimneyObjectCover"];export{o as ChimneyObjectCover,a as ClosedFacade,r as HkwChimneyTopPanorama,n as OpenSpine,e as Panorama,t as RathausRoofPanorama,i as StreetSides,Er as __namedExportsOrder,Dr as default};
