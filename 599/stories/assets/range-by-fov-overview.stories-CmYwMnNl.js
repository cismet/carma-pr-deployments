import{j as e}from"./jsx-runtime-DCY474Ph.js";import{D as s,r as l,R as p,a as x}from"./resolution-by-fov-and-range-plot-Iv7oS9Y7.js";import{G as d,a as o}from"./mercator-zoom.shared-D1z_vn1H.js";import"./index-f9CH5uyH.js";import"./angles-D8YdfYm4.js";import"./pi-Z4p6FqIV.js";import"./mercator-BVIv6mQH.js";import"./geodetic-BSEHKtgU.js";import"./three.module-DONvljao.js";import"./ResponsiveStatusBar-BZL_gaOL.js";import"./index-DP3N-y6f.js";import"./ControlButtonStyler-QeN6XDzf.js";import"./AnchoredLabelVisualizer-D81lJodu.js";import"./index-o4jIgCFn.js";import"./button-CYLHmVZz.js";import"./useSize-BnqR6ach.js";const Y={title:"Geo",args:{xAxisMode:s.FOV_DEG},argTypes:{xAxisMode:{options:Object.values(s),control:{type:"inline-radio"},description:"Horizontal axis as direct FOV degrees, log(fov), or log(tan(fov / 2))."}},parameters:{layout:"fullscreen"}},t={name:"Range by FOV and Resolution",render:n=>e.jsxs(d,{label:"Range by FOV Overview",values:[l(n.xAxisMode),"compare range and resolution views"],children:[e.jsxs("section",{style:o.layout.intro,children:[e.jsx("p",{style:o.text.introText,children:"Dolly zoom trades field of view against distance to keep subject size fixed."}),e.jsx("p",{style:o.text.introText,children:"range = k / tan(fov / 2)"}),e.jsx("p",{style:o.text.introText,children:"The upper plot shows range as the output. The lower plot shows the matching center resolution instead."})]}),e.jsx("section",{style:o.layout.panel,children:e.jsx(p,{xAxisMode:n.xAxisMode})}),e.jsx("section",{style:o.layout.panel,children:e.jsx(x,{xAxisMode:n.xAxisMode})})]})};var a,r,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(i=(r=t.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const j=["RangeByFovAndResolution"];export{t as RangeByFovAndResolution,j as __namedExportsOrder,Y as default};
