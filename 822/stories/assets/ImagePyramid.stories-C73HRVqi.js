import{j as s}from"./jsx-runtime-DNp_qQjF.js";import{I as N,a as S}from"./ImagePyramidCarousel-BBZQPgh_.js";import"./index-CSJjS6Ct.js";import"./three.module-Bu5QN8-P.js";const E=(e,i,d)=>({id:e,url:new URL(i,globalThis.window.location.href).href,kind:"avif",nativeSize:{width:d.nativeWidth,height:d.nativeHeight}}),A=e=>e.imageIds.split(",").map(i=>i.trim()).filter(Boolean).map(i=>E(i,new URL(`${encodeURIComponent(i)}.avif`,new URL(e.baseUrl,globalThis.window.location.href)).href,e)),x=e=>({renderer:e.renderer,featherPx:e.featherPx,foveaRadius:e.foveation?e.foveaRadius:null,ringTiles:e.ringTiles,minLevelEdge:e.minLevelEdge,diagnostics:e.diagnostics}),r={table:{disable:!0}},D={baseUrl:r,imageIds:r,poolSize:r,visibleCount:r},l="L4 liegt unten; vorhandene L3/L2/L1-Kacheln verbessern den Ausschnitt sofort. Die Diagnose zeigt Zielstufe, Residency und Poolbelegung.",z={title:"Libraries/Image pyramid",id:"libraries-image-pyramid",parameters:{layout:"fullscreen"},decorators:[e=>s.jsx("div",{style:{width:"100%",height:"100dvh",overflow:"hidden",background:"#141a23"},children:s.jsx(e,{})})],args:{sourceUrl:"https://wupp-oblique.cismet.de/2026/image/LE_28_3585.avif",baseUrl:"https://wupp-oblique.cismet.de/2026/image/",imageIds:"LE_28_3585,LE_23_4413",nativeWidth:12736,nativeHeight:19136,poolSize:8,visibleCount:1,renderer:"three",featherPx:0,foveation:!1,foveaRadius:.35,ringTiles:1,minLevelEdge:512,diagnostics:!0},argTypes:{sourceUrl:{control:"text",description:"Native AVIF-Datei mit vier räumlichen Layern."},baseUrl:{control:"text",description:"Gemeinsamer image-Ordner."},imageIds:{control:"text",description:"Kommagetrennte Bild-IDs im gemeinsamen Pool."},nativeWidth:{control:{type:"number",min:1},description:"Sensorbreite als Layout-Hinweis; eingebettete Kalibrierung bleibt maßgeblich."},nativeHeight:{control:{type:"number",min:1}},poolSize:{control:"select",options:[4,8]},visibleCount:{control:"select",options:[1,2,4]},renderer:{control:"inline-radio",options:["canvas","three"],description:"three verwendet denselben GPU-Compositor wie der Oblique-Viewer."},featherPx:{control:{type:"range",min:0,max:64,step:4},description:"Kanten ohne gleichwertigen Nachbarn weich ausblenden, in Ausgabepixeln."},foveation:{control:"boolean",description:"Sichtbare zentrale Kacheln der Zielstufe priorisieren."},foveaRadius:{control:{type:"range",min:.1,max:1,step:.05},if:{arg:"foveation"}},ringTiles:{control:{type:"range",min:0,max:2,step:1}},minLevelEdge:{control:{type:"range",min:0,max:1024,step:64},description:"Kleinste genutzte Stufe; die gröbste verbleibende deckt das ganze Bild ab."},diagnostics:{control:"boolean"}}},n={name:"Native AVIF · 2026",argTypes:D,parameters:{docs:{description:{story:`Eine native Datei, erster L4-Prefix aus einem GET, weitere Layer und Ausschnitte über Range-Anfragen. Ziehen und Zoomen fragen nur benötigte Bereiche an. ${l}`}}},render:e=>s.jsx(N,{source:E("native-2026",e.sourceUrl,e),fill:!0,...x(e)})},t={...n,name:"Native AVIF · 2024",args:{sourceUrl:"https://wupp-oblique.cismet.de/2024/image/040_173_171005076.avif",nativeWidth:10652,nativeHeight:14204},parameters:{docs:{description:{story:`Dasselbe native Dateiformat und derselbe Viewer wie2026, mit anderer Sensorgröße. Die alten2024JPEG-Dateien gehören weiterhin dem separaten Cesium-Pfad. ${l}`}}}},a={name:"Native AVIF · shared pool",argTypes:{sourceUrl:r},parameters:{docs:{description:{story:`Bilder teilen den vorhandenen Range-/Kachelpool; nur Ausgabeziele gehören dem jeweiligen Viewer. Geparkte große Stufen werden vor groben Vorschauen freigegeben. ${l}`}}},render:e=>s.jsx(S,{sources:A(e),poolSize:e.poolSize,visibleCount:e.visibleCount,fill:!0,...x(e)})},o={...n,name:"Native AVIF · local synthetic fixture",args:{sourceUrl:"/streaming-samples/native-four-two-cells.avif",nativeWidth:1024,nativeHeight:512,minLevelEdge:0},parameters:{docs:{description:{story:`Kleine lokale synthetische Datei mit zwei Zellen und vier echten AV1-Layern. Gleicher Parser und Compositor ohne entfernte Bildquelle; keine geographische Kalibrierung. ${l}`}}}};var c,m,u;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "Native AVIF · 2026",
  argTypes: singleArgs,
  parameters: {
    docs: {
      description: {
        story: \`Eine native Datei, erster L4-Prefix aus einem GET, weitere Layer und Ausschnitte über Range-Anfragen. Ziehen und Zoomen fragen nur benötigte Bereiche an. \${LEGEND}\`
      }
    }
  },
  render: args => <ImagePyramidViewer source={source("native-2026", args.sourceUrl, args)} fill {...viewerOptions(args)} />
}`,...(u=(m=n.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var g,p,h;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  ...Native2026,
  name: "Native AVIF · 2024",
  args: {
    sourceUrl: "https://wupp-oblique.cismet.de/2024/image/040_173_171005076.avif",
    nativeWidth: 10652,
    nativeHeight: 14204
  },
  parameters: {
    docs: {
      description: {
        story: \`Dasselbe native Dateiformat und derselbe Viewer wie2026, mit anderer Sensorgröße. Die alten2024JPEG-Dateien gehören weiterhin dem separaten Cesium-Pfad. \${LEGEND}\`
      }
    }
  }
}`,...(h=(p=t.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var v,b,f;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: "Native AVIF · shared pool",
  argTypes: {
    sourceUrl: hidden
  },
  parameters: {
    docs: {
      description: {
        story: \`Bilder teilen den vorhandenen Range-/Kachelpool; nur Ausgabeziele gehören dem jeweiligen Viewer. Geparkte große Stufen werden vor groben Vorschauen freigegeben. \${LEGEND}\`
      }
    }
  },
  render: args => <ImagePyramidCarousel sources={imageSources(args)} poolSize={args.poolSize} visibleCount={args.visibleCount} fill {...viewerOptions(args)} />
}`,...(f=(b=a.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var w,y,L;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  ...Native2026,
  name: "Native AVIF · local synthetic fixture",
  args: {
    sourceUrl: "/streaming-samples/native-four-two-cells.avif",
    nativeWidth: 1024,
    nativeHeight: 512,
    minLevelEdge: 0
  },
  parameters: {
    docs: {
      description: {
        story: \`Kleine lokale synthetische Datei mit zwei Zellen und vier echten AV1-Layern. Gleicher Parser und Compositor ohne entfernte Bildquelle; keine geographische Kalibrierung. \${LEGEND}\`
      }
    }
  }
}`,...(L=(y=o.parameters)==null?void 0:y.docs)==null?void 0:L.source}}};const C=["Native2026","Native2024","SharedPool","NativeFixture"];export{t as Native2024,n as Native2026,o as NativeFixture,a as SharedPool,C as __namedExportsOrder,z as default};
