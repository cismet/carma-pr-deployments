import{j as e}from"./jsx-runtime-DCY474Ph.js";import{D as s,r as l,R as p,a as x}from"./resolution-by-fov-and-range-plot-D3rRGAZK.js";import{G as d,a as o}from"./mercator-zoom.shared-9Q6GjPoC.js";import"./index-f9CH5uyH.js";import"./angles-T4rDf7Ka.js";import"./pi-BNTPxsWB.js";import"./mercator-CqMkOHqX.js";import"./geodetic-BlUMYLim.js";import"./three.module-BMbCMmAQ.js";import"./annotation-cursor-overlay-style-i_TGNx6u.js";import"./index-BrmODtEK.js";import"./ControlButtonStyler-E6yNKOeB.js";import"./useLineSegmentVisualizers-CBvdP-rK.js";import"./index-o4jIgCFn.js";import"./index-B4PKD6xO.js";import"./angle-normalization-BAbnbuFS.js";import"./geometry2d-DQa1xX1M.js";const j={title:"Geo",args:{xAxisMode:s.FOV_DEG},argTypes:{xAxisMode:{options:Object.values(s),control:{type:"inline-radio"},description:"Horizontal axis as direct FOV degrees, log(fov), or log(tan(fov / 2))."}},parameters:{layout:"fullscreen"}},t={name:"Range by FOV and Resolution",render:n=>e.jsxs(d,{label:"Range by FOV Overview",values:[l(n.xAxisMode),"compare range and resolution views"],children:[e.jsxs("section",{style:o.layout.intro,children:[e.jsx("p",{style:o.text.introText,children:"Dolly zoom trades field of view against distance to keep subject size fixed."}),e.jsx("p",{style:o.text.introText,children:"range = k / tan(fov / 2)"}),e.jsx("p",{style:o.text.introText,children:"The upper plot shows range as the output. The lower plot shows the matching center resolution instead."})]}),e.jsx("section",{style:o.layout.panel,children:e.jsx(p,{xAxisMode:n.xAxisMode})}),e.jsx("section",{style:o.layout.panel,children:e.jsx(x,{xAxisMode:n.xAxisMode})})]})};var a,r,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(i=(r=t.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const M=["RangeByFovAndResolution"];export{t as RangeByFovAndResolution,M as __namedExportsOrder,j as default};
