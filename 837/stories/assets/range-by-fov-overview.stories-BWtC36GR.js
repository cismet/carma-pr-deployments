import{j as e}from"./jsx-runtime-DNp_qQjF.js";import{D as s,r as l,R as p,a as d}from"./resolution-by-fov-and-range-plot-CS59fSPU.js";import{G as x,a as o}from"./mercator-zoom.shared-BlAvFSNg.js";import"./index-CSJjS6Ct.js";import"./angles-O4gcnBa7.js";import"./pi-C3ZFmkXC.js";import"./camera-local-mercator-fit-DX4cl1zY.js";import"./iframe-C4zw1V8m.js";import"./three.module-Dt7s5xph.js";import"./negative-pi-to-pi-B-FiLZ9M.js";import"./geo-H_5d3y3B.js";import"./zoom-BADcZy_j.js";import"./___vite-browser-external_commonjs-proxy-N_IygbFj.js";import"./StripChartPanel-B4uw9ffe.js";import"./index-BpI4dU9S.js";import"./index-D1cknlJ6.js";import"./ControlButtonStyler-CTIhpmAd.js";import"./button-C6B-2fXQ.js";import"./useLineSegmentVisualizers-vVbrw9Qr.js";import"./clamp-co6UzHBn.js";import"./index-D9NkO_DI.js";import"./angle-normalization-9MH7zpFM.js";import"./geometry2d-CXoA_VhM.js";const D={title:"Map Navigation/Camera and Scale",id:"geo",args:{xAxisMode:s.FOV_DEG},argTypes:{xAxisMode:{options:Object.values(s),control:{type:"inline-radio"},description:"Horizontal axis as direct FOV degrees, log(fov), or log(tan(fov / 2))."}},parameters:{layout:"fullscreen"}},t={name:"Range by FOV and Resolution",render:n=>e.jsxs(x,{label:"Range by FOV Overview",values:[l(n.xAxisMode),"compare range and resolution views"],children:[e.jsxs("section",{style:o.layout.intro,children:[e.jsx("p",{style:o.text.introText,children:"Dolly zoom trades field of view against distance to keep subject size fixed."}),e.jsx("p",{style:o.text.introText,children:"range = k / tan(fov / 2)"}),e.jsx("p",{style:o.text.introText,children:"The upper plot shows range as the output. The lower plot shows the matching center resolution instead."})]}),e.jsx("section",{style:o.layout.panel,children:e.jsx(p,{xAxisMode:n.xAxisMode})}),e.jsx("section",{style:o.layout.panel,children:e.jsx(d,{xAxisMode:n.xAxisMode})})]})};var a,r,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: "Range by FOV and Resolution",
  render: args => <GeoChartStoryFrame label="Range by FOV Overview" values={[readDollyZoomXAxisStatusValue(args.xAxisMode), "compare range and resolution views"]}>
      <section style={GEO_STORY_STYLES.layout.intro}>
        <p style={GEO_STORY_STYLES.text.introText}>
          Dolly zoom trades field of view against distance to keep subject size
          fixed.
        </p>
        <p style={GEO_STORY_STYLES.text.introText}>range = k / tan(fov / 2)</p>
        <p style={GEO_STORY_STYLES.text.introText}>
          The upper plot shows range as the output. The lower plot shows the
          matching center resolution instead.
        </p>
      </section>
      <section style={GEO_STORY_STYLES.layout.panel}>
        <RangeByFovAndResolutionPanel xAxisMode={args.xAxisMode} />
      </section>
      <section style={GEO_STORY_STYLES.layout.panel}>
        <ResolutionByFovAndRangePanel xAxisMode={args.xAxisMode} />
      </section>
    </GeoChartStoryFrame>
}`,...(i=(r=t.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const V=["RangeByFovAndResolution"];export{t as RangeByFovAndResolution,V as __namedExportsOrder,D as default};
