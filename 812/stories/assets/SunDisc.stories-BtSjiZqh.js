import{j as D}from"./jsx-runtime-DNp_qQjF.js";import"./shadow-controller-BWmkmA9_.js";import"./index-M0u9yaJ4.js";import"./index-CSJjS6Ct.js";import{S as F}from"./shadow-types-CMRMXqQd.js";import{S as n,a as s}from"./SunShadowDemo-CEq3fx5P.js";import"./clamp-co6UzHBn.js";import"./angles-o81lIhgd.js";import"./pi-mVFkAveX.js";import"./three.module-BsINTyXW.js";import"./scene-accumulator-BSDum8k6.js";import"./scene-accumulation-format-pMkB0RMu.js";const q={title:"Shadows/Sun Disc",id:"mapping-shadows-sun-disc",component:n,render:x=>D.jsx(n,{...s,...x,cachedLighting:!1,measureBanding:!1}),parameters:{layout:"fullscreen",docs:{description:{component:"Standalone fixture of the addon's mono render stack: ShadowController and shared HDR accumulation, using the same 0.53° uniform-radiance solar disc. No MapLibre or terrain downloads. Defaults target a settled soft frame within five seconds on the reference client; manually selected high sample counts and opt-in pass benchmarks are not time-capped. Distance is measured from the object's underside to the receiver. Scalar visibility and cached-RGB experiments are not addon modes and are not exposed here."}}},args:s,argTypes:{distanceMeters:{table:{category:"Fixture"},control:{type:"range",min:.1,max:30,step:.1},name:"Caster–receiver distance (m)"},elevationDegrees:{table:{category:"Sun"},control:{type:"range",min:15,max:85,step:1},name:"Sun elevation (°)"},object:{table:{category:"Fixture"},control:"select",options:["plate","sphere","thin-fence"]},view:{table:{category:"Fixture"},control:"radio",options:["overview","shadow-edge"]},pointSun:{table:{category:"Sun"},control:"boolean",name:"Point sun reference"},samples:{table:{category:"Quality"},if:{arg:"pointSun",eq:!1},control:"select",options:F},measureBanding:{table:{disable:!0}},rasterJitter:{table:{category:"Quality"},if:{arg:"pointSun",eq:!1},control:"boolean",description:"Subtexel shadow raster phases, not eye-camera jitter and not additional sun spread. Experimental aliasing comparison."},bufferFormat:{table:{category:"Quality"},if:{arg:"pointSun",eq:!1},control:"select",options:["rgba16f","rgba16f-32f","rgba32f","rgba8"],description:"Addon color formats. Hybrid 16f-32f keeps FP16 scene samples and an FP32 running average; full 32F resolves MSAA to zero."},msaaSamples:{table:{category:"Quality"},if:{arg:"pointSun",eq:!1},control:"radio",options:[0,4],description:"Full 32-bit float uses MSAA=0 for portability. Hybrid 16f-32f supports scene MSAA=0 or 4."},renderScale:{table:{category:"Quality"},control:"select",options:[.5,.75,1]},sunIntensity:{table:{category:"Sun"},control:{type:"range",min:1,max:12,step:.25}},groundTexelFit:{table:{category:"Quality"},control:"boolean",name:"Ground-isotropic shadow texels"},shadowMapSize:{table:{category:"Quality"},control:"select",options:[1024,2048,4096,8192]},exposure:{table:{category:"Sun"},control:{type:"range",min:.25,max:4,step:.05}},benchmark:{table:{category:"Diagnostics"},if:{arg:"pointSun",eq:!1},control:"boolean",name:"Run pass-cost benchmark",description:"Explicit cost experiment after the final image; intentionally longer than the five-second preview target."},cachedLighting:{table:{disable:!0}}}},e={},a={args:{view:"shadow-edge",distanceMeters:25,samples:128,shadowMapSize:4096}},r={args:{object:"thin-fence",view:"shadow-edge",elevationDegrees:80}},t={name:"Float32 precision reference",args:{bufferFormat:"rgba32f",msaaSamples:0,samples:128,distanceMeters:25,view:"shadow-edge"}},o={args:{pointSun:!0}};var i,c,l;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(l=(c=e.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var p,d,m;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    view: "shadow-edge",
    distanceMeters: 25,
    samples: 128,
    shadowMapSize: 4096
  }
}`,...(m=(d=a.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var u,g,f;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  // Low sun projects the one-metre slats over each other, hiding the gaps.
  args: {
    object: "thin-fence",
    view: "shadow-edge",
    elevationDegrees: 80
  }
}`,...(f=(g=r.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var h,S,b;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "Float32 precision reference",
  args: {
    bufferFormat: "rgba32f",
    msaaSamples: 0,
    samples: 128,
    distanceMeters: 25,
    view: "shadow-edge"
  }
}`,...(b=(S=t.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var y,w,v;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    pointSun: true
  }
}`,...(v=(w=o.parameters)==null?void 0:w.docs)==null?void 0:v.source}}};const B=["Reference","PenumbraDetail","ThinOccluders","BufferPrecision","PointSun"];export{t as BufferPrecision,a as PenumbraDetail,o as PointSun,e as Reference,r as ThinOccluders,B as __namedExportsOrder,q as default};
