import{j as g}from"./jsx-runtime-DCY474Ph.js";import{F as pe,r as pt,s as yt,t as Ct,u as ft,v as Nt,w as xt,x as bt,y as St,z as ht,A as vt,B as Tt,C as It,D as At}from"./index-B8kvWvtq.js";import{r as T}from"./index-f9CH5uyH.js";import{T as kt}from"./ua-parser-DmoWnccv.js";import{n as Et,o as Lt,p as Rt}from"./lib-Du1k6NnK.js";import{f as Le,C as v,r as Pt}from"./index-l-cOiGX0.js";import"./index-o4jIgCFn.js";import{n as Ot,o as qt,S as Mt,p as Bt,f as _t,q as Bn,s as wt,t as Ft,v as Dt,w as zt,l as Ht}from"./useLineSegmentVisualizers-DAN2fitz.js";import{C as y,b as $e,a3 as jt,n as $t,o as Wt,c as cn,j as Gt,k as Ut}from"./Elevation-D0bp48eG.js";import{c as Vt,a as Xt,b as Yt,d as Kt}from"./useCesiumPointMoveGizmo-Cnx9JEt1.js";import"./useCesiumFovWheelZoom-BmqbxopS.js";import"./maplibre-gl-DBjQz0JA.js";import"./geodetic-BlUMYLim.js";import{c as Zt}from"./clamp-co6UzHBn.js";import{e as Jt,h as Qt,i as ea,s as na,f as ta}from"./geometry2d-CI45uUTk.js";import{i as aa}from"./carma-guards-D8XecQfe.js";import{n as _n}from"./angle-normalization-D3Clryc1.js";import{c as mn,P as J,b as ye}from"./angles-B5wuhJLI.js";import{c as We}from"./CoordinateAdapters-Be1z6fvD.js";/* empty css                                      */import{S as ra}from"./Scene-CIeFCGMR.js";import{r as ia}from"./config-BQ-HIKdi.js";import"./svgProjection-DC0AVwLB.js";const Re={de:{backspace:"Rücktaste",escape:"Esc",shift:"Umschalt"},en:{backspace:"Backspace",escape:"Esc",shift:"Shift"}},oa=e=>e||(Et||Lt?"macos":Rt?"windows":"other"),sa=e=>{const n=e==null?void 0:e.split("-")[0];return n&&Re[n]?Re[n]:Re.en},la=(e,n)=>e==="macos"?"⌫":`← ${n.backspace}`,Te={LABEL:"label",VISUALIZER:"visualizer"},ua=Te,Ge=e=>`[${e}="true"]`,gn="data-annotation-label-overlay-root",pn="data-annotation-visualizer-overlay-root",wn="data-annotation-visualizer-overlay-container",da=Ge(wn),ca=Object.freeze({[Te.LABEL]:{rootAttribute:gn,containerAttribute:Ot,rootSelector:Ge(gn),containerSelector:qt},[Te.VISUALIZER]:{rootAttribute:pn,containerAttribute:wn,rootSelector:Ge(pn),containerSelector:da}}),ma=e=>ca[e],ga=(e,n=Te.LABEL)=>{var i,s;const{rootSelector:t,containerSelector:a}=ma(n);let r=e.canvas.parentElement,o=r;for(;r;){if(r.matches(a))return r;const u=(i=r.querySelector)==null?void 0:i.call(r,a);if(u instanceof HTMLElement)return u;if(r.matches(t))return r;const l=(s=r.querySelector)==null?void 0:s.call(r,t);if(l instanceof HTMLElement)return l;o=r,r=r.parentElement}return o},pa=ga,P={FLY_TO:"flyTo",EXPORT:"export",VISIBILITY:"visibility",REFERENCE:"reference",LOCK:"lock",DELETE:"delete"},q=(()=>{const e="1rem",n="0.8571rem",t="1rem";return Object.freeze({rootFontSizeRem:e,supportFontSizeRem:n,headingFontSizeRem:t,headingFontWeight:600,headingTypographyClassName:`text-[${n}] font-semibold tracking-[0.03em]`,titleTypographyClassName:`text-[${t}] font-semibold leading-[1.25]`})})(),O=Object.freeze({borderRadiusRem:"0.2143rem",hairlineBorderWidthRem:"0.0357rem",panelInsetShadowYOffsetRem:"0.0714rem",panelInsetShadowBlurRem:"0.0714rem",panelBackdropBlurRem:"0.1429rem"}),x=Object.freeze({heading:v.ACCENT_MEASUREMENTS,panelSurface:v.NEUTRAL_SURFACE_SUBTLE,panelBorder:v.NEUTRAL_BORDER_SUBTLE,shadowBase:v.NEUTRAL_BLACK,bodyText:v.NEUTRAL_TEXT_PRIMARY,mutedText:v.NEUTRAL_TEXT_MUTED,linkText:v.WUPP_BLUE,fieldText:v.NEUTRAL_TEXT_STRONG,fieldBorder:v.NEUTRAL_BORDER_DEFAULT,fieldInputBorder:v.NEUTRAL_BORDER_INPUT,fieldFocusBackground:v.STATE_FOCUS_BACKGROUND_WARM,fieldFocusOutline:v.STATE_FOCUS_OUTLINE,titleText:v.NEUTRAL_TEXT_STRONG}),Pe=Object.freeze({panelSurface:.9,panelBorder:.9,panelInsetShadow:.02}),ya=Object.freeze({defaultPixelWidth:430,headingColor:x.heading,bodyPanelStyle:{backgroundColor:Le(x.panelSurface,Pe.panelSurface),border:`${O.hairlineBorderWidthRem} solid ${Le(x.panelBorder,Pe.panelBorder)}`,boxShadow:`${Le(x.shadowBase,Pe.panelInsetShadow)} 0 ${O.panelInsetShadowYOffsetRem} ${O.panelInsetShadowBlurRem} inset`,backdropFilter:`blur(${O.panelBackdropBlurRem})`,WebkitBackdropFilter:`blur(${O.panelBackdropBlurRem})`},resolveActionTooltipPopupContainer:e=>e.closest('[data-test-id="annotation-info-box"]')??e.ownerDocument.body,headerForegroundClassName:"text-white/80",headerTitleClassName:`truncate ${q.headingTypographyClassName}`,subtitleContainerClassName:"mb-0 w-full px-2 pt-[0.28em]",subtitleTextStyle:{color:v.ACCENT_NEUTRALS},subtitleTextClassName:`px-2 text-[${q.supportFontSizeRem}] leading-[1.1] font-semibold`,subtitleMetaTextStyle:{color:v.ACCENT_NEUTRALS},subtitleMetaTextClassName:`mt-[0.08em] whitespace-nowrap text-[${q.supportFontSizeRem}] leading-[1.1] font-semibold`,showSubtitleMetaText:!0,bodyContainerClassName:"px-2 pb-2 pt-1",bodyTextStyle:{fontSize:q.rootFontSizeRem,lineHeight:1.4,color:x.bodyText},bodyTextClassName:`text-[${q.rootFontSizeRem}] leading-[1.4] text-[${x.bodyText}]`,emptyContentLineStyle:{minHeight:"1.4em"},emptyContentLineClassName:"w-full",mutedTextClassName:`text-[${x.mutedText}]`,linkTextClassName:`text-[${x.linkText}]`,actionIconClassName:"transition-colors",actionIconColor:v.ACCENT_NEUTRALS,actionIconHoverColor:v.ACCENT_NEUTRALS_HOVER,actionIconFontSize:"16px",hiddenActionIds:[],fieldTextClassName:`text-[${x.fieldText}]`,fieldBorderClassName:`border-[${O.hairlineBorderWidthRem}] border-[${x.fieldBorder}]`,fieldInputBorderClassName:`border-[${O.hairlineBorderWidthRem}] border-[${x.fieldInputBorder}]`,fieldFocusBackgroundClassName:`focus:bg-[${x.fieldFocusBackground}]`,fieldFocusOutlineClassName:`focus:outline focus:outline-2 focus:outline-[${x.fieldFocusOutline}]`,subtleFieldBackgroundClassName:"bg-white/85",titleTextStyle:{fontSize:q.headingFontSizeRem,fontWeight:q.headingFontWeight,lineHeight:1.25},titleTextClassName:`text-[${x.titleText}]/80 ${q.titleTypographyClassName}`,titleInputClassName:`min-w-0 w-auto max-w-full appearance-none [field-sizing:content] break-words rounded-[${O.borderRadiusRem}] border border-transparent bg-transparent px-0 py-[0.05em] text-[${x.titleText}]/80 placeholder:text-[${x.titleText}]/50 focus:bg-[${x.fieldFocusBackground}] focus:outline focus:outline-2 focus:outline-[${x.fieldFocusOutline}] ${q.titleTypographyClassName}`,shortLabelInputClassName:`shrink-0 w-auto appearance-none [field-sizing:content] border-[${O.hairlineBorderWidthRem}] px-[0.5ex] py-0 text-center tabular-nums border-[${x.fieldBorder}] bg-white/85 text-[${x.titleText}]/80 placeholder:text-[${x.titleText}]/80 focus:bg-[${x.fieldFocusBackground}] focus:outline focus:outline-2 focus:outline-[${x.fieldFocusOutline}] ${q.titleTypographyClassName}`,navigationInstructionContainerClassName:"mt-1 flex w-full items-center justify-center px-2 pt-1",navigationAvailabilityContainerClassName:"mt-1 flex w-full items-center justify-center px-2 pt-1",navigationSummaryContainerClassName:"mb-1 mt-0 flex w-full items-center justify-between px-2",navigationLinkFontSize:q.supportFontSizeRem,inlineFieldButtonClassName:`inline-flex h-5 w-5 items-center justify-center rounded border-[${O.hairlineBorderWidthRem}] border-[${x.fieldInputBorder}]`,colorInputClassName:`h-6 w-8 cursor-pointer rounded border-[${O.hairlineBorderWidthRem}] border-[${x.fieldInputBorder}] bg-transparent p-0`,inlineActionButtonClassName:`inline-flex items-center gap-1 rounded border-[${O.hairlineBorderWidthRem}] border-[${x.fieldInputBorder}] px-2 py-1`}),ue=e=>({...ya,...e}),Ca=Object.freeze({tooltipZIndex:1700}),Y=({actionId:e,title:n,icon:t,onClick:a,dataTestId:r,className:o,ariaLabel:i,disabled:s=!1,visualOptions:u})=>{var f;const l=ue(u),[c,d]=T.useState(!1),p=`${l.actionIconClassName}${o?` ${o}`:""}${s?" cursor-not-allowed opacity-50":" cursor-pointer"}`,m={fontSize:l.actionIconFontSize,color:c&&!s?l.actionIconHoverColor:l.actionIconColor},C=(f=l.renderActionIcon)==null?void 0:f.call(l,{actionId:e,icon:t,className:p,style:m,dataTestId:r,ariaLabel:i,disabled:s});return g.jsx(kt,{title:n,zIndex:Ca.tooltipZIndex,getPopupContainer:I=>{const S=I instanceof HTMLElement?I:document.body;return l.resolveActionTooltipPopupContainer(S)},children:g.jsx("span",{onClick:I=>{if(s){I.stopPropagation();return}a(I)},onMouseEnter:()=>d(!0),onMouseLeave:()=>d(!1),className:"inline-flex items-center leading-none","aria-label":i,"aria-disabled":s,children:C??g.jsx(pe,{className:p,style:m,icon:t,"data-test-id":r,"aria-hidden":i?void 0:!0})})})};Y.__docgenInfo={description:"",methods:[],displayName:"AnnotationInfoBoxActionIcon",props:{actionId:{required:!0,tsType:{name:"unknown[union]",raw:"(typeof ANNOTATION_INFO_BOX_ACTION_IDS)[keyof typeof ANNOTATION_INFO_BOX_ACTION_IDS]"},description:""},title:{required:!0,tsType:{name:"string"},description:""},icon:{required:!0,tsType:{name:"IconDefinition"},description:""},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: ReactMouseEvent<HTMLElement, MouseEvent>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",elements:[{name:"HTMLElement"},{name:"MouseEvent"}],raw:"ReactMouseEvent<HTMLElement, MouseEvent>"},name:"event"}],return:{name:"void"}}},description:""},dataTestId:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},visualOptions:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  defaultPixelWidth: number;
  headingColor: string;
  bodyPanelStyle: CSSProperties;
  resolveActionTooltipPopupContainer: (triggerNode: HTMLElement) => HTMLElement;
  headerForegroundClassName: string;
  headerTitleClassName: string;
  subtitleContainerClassName: string;
  subtitleTextStyle: CSSProperties;
  subtitleTextClassName: string;
  subtitleMetaTextStyle: CSSProperties;
  subtitleMetaTextClassName: string;
  showSubtitleMetaText: boolean;
  bodyContainerClassName: string;
  bodyTextStyle: CSSProperties;
  bodyTextClassName: string;
  emptyContentLineStyle: CSSProperties;
  emptyContentLineClassName: string;
  mutedTextClassName: string;
  linkTextClassName: string;
  actionIconClassName: string;
  actionIconColor: string;
  actionIconHoverColor: string;
  actionIconFontSize: string;
  hiddenActionIds: readonly AnnotationInfoBoxActionId[];
  renderActionIcon?: (
    props: AnnotationInfoBoxActionIconRenderProps
  ) => ReactNode;
  fieldTextClassName: string;
  fieldBorderClassName: string;
  fieldInputBorderClassName: string;
  fieldFocusBackgroundClassName: string;
  fieldFocusOutlineClassName: string;
  subtleFieldBackgroundClassName: string;
  titleTextStyle: CSSProperties;
  titleTextClassName: string;
  titleInputClassName: string;
  shortLabelInputClassName: string;
  navigationInstructionContainerClassName: string;
  navigationAvailabilityContainerClassName: string;
  navigationSummaryContainerClassName: string;
  navigationLinkFontSize: string;
  navigationControlLabels?: Readonly<{
    previous: ReactNode;
    next: ReactNode;
  }>;
  inlineFieldButtonClassName: string;
  colorInputClassName: string;
  inlineActionButtonClassName: string;
}`,signature:{properties:[{key:"defaultPixelWidth",value:{name:"number",required:!0}},{key:"headingColor",value:{name:"string",required:!0}},{key:"bodyPanelStyle",value:{name:"CSSProperties",required:!0}},{key:"resolveActionTooltipPopupContainer",value:{name:"signature",type:"function",raw:"(triggerNode: HTMLElement) => HTMLElement",signature:{arguments:[{type:{name:"HTMLElement"},name:"triggerNode"}],return:{name:"HTMLElement"}},required:!0}},{key:"headerForegroundClassName",value:{name:"string",required:!0}},{key:"headerTitleClassName",value:{name:"string",required:!0}},{key:"subtitleContainerClassName",value:{name:"string",required:!0}},{key:"subtitleTextStyle",value:{name:"CSSProperties",required:!0}},{key:"subtitleTextClassName",value:{name:"string",required:!0}},{key:"subtitleMetaTextStyle",value:{name:"CSSProperties",required:!0}},{key:"subtitleMetaTextClassName",value:{name:"string",required:!0}},{key:"showSubtitleMetaText",value:{name:"boolean",required:!0}},{key:"bodyContainerClassName",value:{name:"string",required:!0}},{key:"bodyTextStyle",value:{name:"CSSProperties",required:!0}},{key:"bodyTextClassName",value:{name:"string",required:!0}},{key:"emptyContentLineStyle",value:{name:"CSSProperties",required:!0}},{key:"emptyContentLineClassName",value:{name:"string",required:!0}},{key:"mutedTextClassName",value:{name:"string",required:!0}},{key:"linkTextClassName",value:{name:"string",required:!0}},{key:"actionIconClassName",value:{name:"string",required:!0}},{key:"actionIconColor",value:{name:"string",required:!0}},{key:"actionIconHoverColor",value:{name:"string",required:!0}},{key:"actionIconFontSize",value:{name:"string",required:!0}},{key:"hiddenActionIds",value:{name:"unknown",required:!0}},{key:"renderActionIcon",value:{name:"signature",type:"function",raw:`(
  props: AnnotationInfoBoxActionIconRenderProps
) => ReactNode`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  actionId: AnnotationInfoBoxActionId;
  icon: IconDefinition;
  className: string;
  style: CSSProperties;
  dataTestId?: string;
  ariaLabel?: string;
  disabled: boolean;
}`,signature:{properties:[{key:"actionId",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_INFO_BOX_ACTION_IDS)[keyof typeof ANNOTATION_INFO_BOX_ACTION_IDS]",required:!0}},{key:"icon",value:{name:"IconDefinition",required:!0}},{key:"className",value:{name:"string",required:!0}},{key:"style",value:{name:"CSSProperties",required:!0}},{key:"dataTestId",value:{name:"string",required:!1}},{key:"ariaLabel",value:{name:"string",required:!1}},{key:"disabled",value:{name:"boolean",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}},required:!1}},{key:"fieldTextClassName",value:{name:"string",required:!0}},{key:"fieldBorderClassName",value:{name:"string",required:!0}},{key:"fieldInputBorderClassName",value:{name:"string",required:!0}},{key:"fieldFocusBackgroundClassName",value:{name:"string",required:!0}},{key:"fieldFocusOutlineClassName",value:{name:"string",required:!0}},{key:"subtleFieldBackgroundClassName",value:{name:"string",required:!0}},{key:"titleTextStyle",value:{name:"CSSProperties",required:!0}},{key:"titleTextClassName",value:{name:"string",required:!0}},{key:"titleInputClassName",value:{name:"string",required:!0}},{key:"shortLabelInputClassName",value:{name:"string",required:!0}},{key:"navigationInstructionContainerClassName",value:{name:"string",required:!0}},{key:"navigationAvailabilityContainerClassName",value:{name:"string",required:!0}},{key:"navigationSummaryContainerClassName",value:{name:"string",required:!0}},{key:"navigationLinkFontSize",value:{name:"string",required:!0}},{key:"navigationControlLabels",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  previous: ReactNode;
  next: ReactNode;
}`,signature:{properties:[{key:"previous",value:{name:"ReactNode",required:!0}},{key:"next",value:{name:"ReactNode",required:!0}}]}}],raw:`Readonly<{
  previous: ReactNode;
  next: ReactNode;
}>`,required:!1}},{key:"inlineFieldButtonClassName",value:{name:"string",required:!0}},{key:"colorInputClassName",value:{name:"string",required:!0}},{key:"inlineActionButtonClassName",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  defaultPixelWidth: number;
  headingColor: string;
  bodyPanelStyle: CSSProperties;
  resolveActionTooltipPopupContainer: (triggerNode: HTMLElement) => HTMLElement;
  headerForegroundClassName: string;
  headerTitleClassName: string;
  subtitleContainerClassName: string;
  subtitleTextStyle: CSSProperties;
  subtitleTextClassName: string;
  subtitleMetaTextStyle: CSSProperties;
  subtitleMetaTextClassName: string;
  showSubtitleMetaText: boolean;
  bodyContainerClassName: string;
  bodyTextStyle: CSSProperties;
  bodyTextClassName: string;
  emptyContentLineStyle: CSSProperties;
  emptyContentLineClassName: string;
  mutedTextClassName: string;
  linkTextClassName: string;
  actionIconClassName: string;
  actionIconColor: string;
  actionIconHoverColor: string;
  actionIconFontSize: string;
  hiddenActionIds: readonly AnnotationInfoBoxActionId[];
  renderActionIcon?: (
    props: AnnotationInfoBoxActionIconRenderProps
  ) => ReactNode;
  fieldTextClassName: string;
  fieldBorderClassName: string;
  fieldInputBorderClassName: string;
  fieldFocusBackgroundClassName: string;
  fieldFocusOutlineClassName: string;
  subtleFieldBackgroundClassName: string;
  titleTextStyle: CSSProperties;
  titleTextClassName: string;
  titleInputClassName: string;
  shortLabelInputClassName: string;
  navigationInstructionContainerClassName: string;
  navigationAvailabilityContainerClassName: string;
  navigationSummaryContainerClassName: string;
  navigationLinkFontSize: string;
  navigationControlLabels?: Readonly<{
    previous: ReactNode;
    next: ReactNode;
  }>;
  inlineFieldButtonClassName: string;
  colorInputClassName: string;
  inlineActionButtonClassName: string;
}>`},description:""}}};const fa=Object.freeze({flyTo:"Zur Messung fliegen",exportGeoJson:"Als GeoJSON exportieren",show:"Einblenden",hide:"Ausblenden",setReference:"Als Referenzhöhe setzen",lock:"Sperren",unlock:"Entsperren",delete:"Löschen",deleteLocked:"Gesperrte Messung kann nicht gelöscht werden"}),Na=({hidden:e=!1,locked:n=!1,labels:t,onFlyTo:a,onExport:r,onToggleVisibility:o,onToggleLock:i,onDelete:s,onSetReference:u,visualOptions:l,dataTestIdPrefix:c,dataTestIds:d})=>{const p={...fa,...t},m=new Set((l==null?void 0:l.hiddenActionIds)??[]),C=f=>!m.has(f);return g.jsxs("div",{className:"flex items-center gap-2",children:[C(P.FLY_TO)?g.jsx(Y,{actionId:P.FLY_TO,title:p.flyTo,icon:pt,onClick:a,dataTestId:(d==null?void 0:d.flyTo)??`${c}-flyto-btn`,visualOptions:l}):null,C(P.EXPORT)?g.jsx(Y,{actionId:P.EXPORT,title:p.exportGeoJson,icon:yt,onClick:r,dataTestId:(d==null?void 0:d.export)??`${c}-export-geojson-btn`,visualOptions:l}):null,C(P.VISIBILITY)?g.jsx(Y,{actionId:P.VISIBILITY,title:e?p.show:p.hide,icon:e?Ct:ft,onClick:o,dataTestId:(d==null?void 0:d.visibility)??`${c}-toggle-visibility-btn`,visualOptions:l}):null,u&&C(P.REFERENCE)?g.jsx(Y,{actionId:P.REFERENCE,title:p.setReference,icon:Nt,onClick:u,dataTestId:(d==null?void 0:d.reference)??`${c}-set-reference-btn`,visualOptions:l}):null,C(P.LOCK)?g.jsx(Y,{actionId:P.LOCK,title:n?p.unlock:p.lock,icon:n?xt:bt,onClick:i,dataTestId:(d==null?void 0:d.lock)??`${c}-toggle-lock-btn`,visualOptions:l}):null,C(P.DELETE)?g.jsx(Y,{actionId:P.DELETE,title:n?p.deleteLocked:p.delete,icon:St,onClick:s,dataTestId:(d==null?void 0:d.delete)??`${c}-delete-btn`,disabled:n,visualOptions:l}):null]})};Na.__docgenInfo={description:"",methods:[],displayName:"AnnotationInfoBoxActions",props:{hidden:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},locked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},labels:{required:!1,tsType:{name:"Partial",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  flyTo: string;
  exportGeoJson: string;
  show: string;
  hide: string;
  setReference: string;
  lock: string;
  unlock: string;
  delete: string;
  deleteLocked: string;
}`,signature:{properties:[{key:"flyTo",value:{name:"string",required:!0}},{key:"exportGeoJson",value:{name:"string",required:!0}},{key:"show",value:{name:"string",required:!0}},{key:"hide",value:{name:"string",required:!0}},{key:"setReference",value:{name:"string",required:!0}},{key:"lock",value:{name:"string",required:!0}},{key:"unlock",value:{name:"string",required:!0}},{key:"delete",value:{name:"string",required:!0}},{key:"deleteLocked",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  flyTo: string;
  exportGeoJson: string;
  show: string;
  hide: string;
  setReference: string;
  lock: string;
  unlock: string;
  delete: string;
  deleteLocked: string;
}>`}],raw:"Partial<AnnotationInfoBoxActionLabels>"},description:""},onFlyTo:{required:!0,tsType:{name:"signature",type:"function",raw:`(
  event: ReactMouseEvent<HTMLElement, MouseEvent>
) => void`,signature:{arguments:[{type:{name:"ReactMouseEvent",elements:[{name:"HTMLElement"},{name:"MouseEvent"}],raw:"ReactMouseEvent<HTMLElement, MouseEvent>"},name:"event"}],return:{name:"void"}}},description:""},onExport:{required:!0,tsType:{name:"signature",type:"function",raw:`(
  event: ReactMouseEvent<HTMLElement, MouseEvent>
) => void`,signature:{arguments:[{type:{name:"ReactMouseEvent",elements:[{name:"HTMLElement"},{name:"MouseEvent"}],raw:"ReactMouseEvent<HTMLElement, MouseEvent>"},name:"event"}],return:{name:"void"}}},description:""},onToggleVisibility:{required:!0,tsType:{name:"signature",type:"function",raw:`(
  event: ReactMouseEvent<HTMLElement, MouseEvent>
) => void`,signature:{arguments:[{type:{name:"ReactMouseEvent",elements:[{name:"HTMLElement"},{name:"MouseEvent"}],raw:"ReactMouseEvent<HTMLElement, MouseEvent>"},name:"event"}],return:{name:"void"}}},description:""},onToggleLock:{required:!0,tsType:{name:"signature",type:"function",raw:`(
  event: ReactMouseEvent<HTMLElement, MouseEvent>
) => void`,signature:{arguments:[{type:{name:"ReactMouseEvent",elements:[{name:"HTMLElement"},{name:"MouseEvent"}],raw:"ReactMouseEvent<HTMLElement, MouseEvent>"},name:"event"}],return:{name:"void"}}},description:""},onDelete:{required:!0,tsType:{name:"signature",type:"function",raw:`(
  event: ReactMouseEvent<HTMLElement, MouseEvent>
) => void`,signature:{arguments:[{type:{name:"ReactMouseEvent",elements:[{name:"HTMLElement"},{name:"MouseEvent"}],raw:"ReactMouseEvent<HTMLElement, MouseEvent>"},name:"event"}],return:{name:"void"}}},description:""},onSetReference:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  event: ReactMouseEvent<HTMLElement, MouseEvent>
) => void`,signature:{arguments:[{type:{name:"ReactMouseEvent",elements:[{name:"HTMLElement"},{name:"MouseEvent"}],raw:"ReactMouseEvent<HTMLElement, MouseEvent>"},name:"event"}],return:{name:"void"}}},description:""},visualOptions:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  defaultPixelWidth: number;
  headingColor: string;
  bodyPanelStyle: CSSProperties;
  resolveActionTooltipPopupContainer: (triggerNode: HTMLElement) => HTMLElement;
  headerForegroundClassName: string;
  headerTitleClassName: string;
  subtitleContainerClassName: string;
  subtitleTextStyle: CSSProperties;
  subtitleTextClassName: string;
  subtitleMetaTextStyle: CSSProperties;
  subtitleMetaTextClassName: string;
  showSubtitleMetaText: boolean;
  bodyContainerClassName: string;
  bodyTextStyle: CSSProperties;
  bodyTextClassName: string;
  emptyContentLineStyle: CSSProperties;
  emptyContentLineClassName: string;
  mutedTextClassName: string;
  linkTextClassName: string;
  actionIconClassName: string;
  actionIconColor: string;
  actionIconHoverColor: string;
  actionIconFontSize: string;
  hiddenActionIds: readonly AnnotationInfoBoxActionId[];
  renderActionIcon?: (
    props: AnnotationInfoBoxActionIconRenderProps
  ) => ReactNode;
  fieldTextClassName: string;
  fieldBorderClassName: string;
  fieldInputBorderClassName: string;
  fieldFocusBackgroundClassName: string;
  fieldFocusOutlineClassName: string;
  subtleFieldBackgroundClassName: string;
  titleTextStyle: CSSProperties;
  titleTextClassName: string;
  titleInputClassName: string;
  shortLabelInputClassName: string;
  navigationInstructionContainerClassName: string;
  navigationAvailabilityContainerClassName: string;
  navigationSummaryContainerClassName: string;
  navigationLinkFontSize: string;
  navigationControlLabels?: Readonly<{
    previous: ReactNode;
    next: ReactNode;
  }>;
  inlineFieldButtonClassName: string;
  colorInputClassName: string;
  inlineActionButtonClassName: string;
}`,signature:{properties:[{key:"defaultPixelWidth",value:{name:"number",required:!0}},{key:"headingColor",value:{name:"string",required:!0}},{key:"bodyPanelStyle",value:{name:"CSSProperties",required:!0}},{key:"resolveActionTooltipPopupContainer",value:{name:"signature",type:"function",raw:"(triggerNode: HTMLElement) => HTMLElement",signature:{arguments:[{type:{name:"HTMLElement"},name:"triggerNode"}],return:{name:"HTMLElement"}},required:!0}},{key:"headerForegroundClassName",value:{name:"string",required:!0}},{key:"headerTitleClassName",value:{name:"string",required:!0}},{key:"subtitleContainerClassName",value:{name:"string",required:!0}},{key:"subtitleTextStyle",value:{name:"CSSProperties",required:!0}},{key:"subtitleTextClassName",value:{name:"string",required:!0}},{key:"subtitleMetaTextStyle",value:{name:"CSSProperties",required:!0}},{key:"subtitleMetaTextClassName",value:{name:"string",required:!0}},{key:"showSubtitleMetaText",value:{name:"boolean",required:!0}},{key:"bodyContainerClassName",value:{name:"string",required:!0}},{key:"bodyTextStyle",value:{name:"CSSProperties",required:!0}},{key:"bodyTextClassName",value:{name:"string",required:!0}},{key:"emptyContentLineStyle",value:{name:"CSSProperties",required:!0}},{key:"emptyContentLineClassName",value:{name:"string",required:!0}},{key:"mutedTextClassName",value:{name:"string",required:!0}},{key:"linkTextClassName",value:{name:"string",required:!0}},{key:"actionIconClassName",value:{name:"string",required:!0}},{key:"actionIconColor",value:{name:"string",required:!0}},{key:"actionIconHoverColor",value:{name:"string",required:!0}},{key:"actionIconFontSize",value:{name:"string",required:!0}},{key:"hiddenActionIds",value:{name:"unknown",required:!0}},{key:"renderActionIcon",value:{name:"signature",type:"function",raw:`(
  props: AnnotationInfoBoxActionIconRenderProps
) => ReactNode`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  actionId: AnnotationInfoBoxActionId;
  icon: IconDefinition;
  className: string;
  style: CSSProperties;
  dataTestId?: string;
  ariaLabel?: string;
  disabled: boolean;
}`,signature:{properties:[{key:"actionId",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_INFO_BOX_ACTION_IDS)[keyof typeof ANNOTATION_INFO_BOX_ACTION_IDS]",required:!0}},{key:"icon",value:{name:"IconDefinition",required:!0}},{key:"className",value:{name:"string",required:!0}},{key:"style",value:{name:"CSSProperties",required:!0}},{key:"dataTestId",value:{name:"string",required:!1}},{key:"ariaLabel",value:{name:"string",required:!1}},{key:"disabled",value:{name:"boolean",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}},required:!1}},{key:"fieldTextClassName",value:{name:"string",required:!0}},{key:"fieldBorderClassName",value:{name:"string",required:!0}},{key:"fieldInputBorderClassName",value:{name:"string",required:!0}},{key:"fieldFocusBackgroundClassName",value:{name:"string",required:!0}},{key:"fieldFocusOutlineClassName",value:{name:"string",required:!0}},{key:"subtleFieldBackgroundClassName",value:{name:"string",required:!0}},{key:"titleTextStyle",value:{name:"CSSProperties",required:!0}},{key:"titleTextClassName",value:{name:"string",required:!0}},{key:"titleInputClassName",value:{name:"string",required:!0}},{key:"shortLabelInputClassName",value:{name:"string",required:!0}},{key:"navigationInstructionContainerClassName",value:{name:"string",required:!0}},{key:"navigationAvailabilityContainerClassName",value:{name:"string",required:!0}},{key:"navigationSummaryContainerClassName",value:{name:"string",required:!0}},{key:"navigationLinkFontSize",value:{name:"string",required:!0}},{key:"navigationControlLabels",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  previous: ReactNode;
  next: ReactNode;
}`,signature:{properties:[{key:"previous",value:{name:"ReactNode",required:!0}},{key:"next",value:{name:"ReactNode",required:!0}}]}}],raw:`Readonly<{
  previous: ReactNode;
  next: ReactNode;
}>`,required:!1}},{key:"inlineFieldButtonClassName",value:{name:"string",required:!0}},{key:"colorInputClassName",value:{name:"string",required:!0}},{key:"inlineActionButtonClassName",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  defaultPixelWidth: number;
  headingColor: string;
  bodyPanelStyle: CSSProperties;
  resolveActionTooltipPopupContainer: (triggerNode: HTMLElement) => HTMLElement;
  headerForegroundClassName: string;
  headerTitleClassName: string;
  subtitleContainerClassName: string;
  subtitleTextStyle: CSSProperties;
  subtitleTextClassName: string;
  subtitleMetaTextStyle: CSSProperties;
  subtitleMetaTextClassName: string;
  showSubtitleMetaText: boolean;
  bodyContainerClassName: string;
  bodyTextStyle: CSSProperties;
  bodyTextClassName: string;
  emptyContentLineStyle: CSSProperties;
  emptyContentLineClassName: string;
  mutedTextClassName: string;
  linkTextClassName: string;
  actionIconClassName: string;
  actionIconColor: string;
  actionIconHoverColor: string;
  actionIconFontSize: string;
  hiddenActionIds: readonly AnnotationInfoBoxActionId[];
  renderActionIcon?: (
    props: AnnotationInfoBoxActionIconRenderProps
  ) => ReactNode;
  fieldTextClassName: string;
  fieldBorderClassName: string;
  fieldInputBorderClassName: string;
  fieldFocusBackgroundClassName: string;
  fieldFocusOutlineClassName: string;
  subtleFieldBackgroundClassName: string;
  titleTextStyle: CSSProperties;
  titleTextClassName: string;
  titleInputClassName: string;
  shortLabelInputClassName: string;
  navigationInstructionContainerClassName: string;
  navigationAvailabilityContainerClassName: string;
  navigationSummaryContainerClassName: string;
  navigationLinkFontSize: string;
  navigationControlLabels?: Readonly<{
    previous: ReactNode;
    next: ReactNode;
  }>;
  inlineFieldButtonClassName: string;
  colorInputClassName: string;
  inlineActionButtonClassName: string;
}>`},description:""},dataTestIdPrefix:{required:!0,tsType:{name:"string"},description:""},dataTestIds:{required:!1,tsType:{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  flyTo: string;
  export: string;
  visibility: string;
  reference: string;
  lock: string;
  delete: string;
}`,signature:{properties:[{key:"flyTo",value:{name:"string",required:!0}},{key:"export",value:{name:"string",required:!0}},{key:"visibility",value:{name:"string",required:!0}},{key:"reference",value:{name:"string",required:!0}},{key:"lock",value:{name:"string",required:!0}},{key:"delete",value:{name:"string",required:!0}}]}}],raw:`Partial<{
  flyTo: string;
  export: string;
  visibility: string;
  reference: string;
  lock: string;
  delete: string;
}>`},description:""}}};const te={TEXT:"text",ACTION:"action",ALERT:"alert"},ne={CLICK:"click",DOUBLE_CLICK:"double-click",ENTER:"enter",BACKSPACE:"backspace",ESCAPE:"escape",SHIFT:"shift"},Ce={INFO:"info",WARNING:"warning"},Z={INFO:"info",WARNING:"warning"},B={STANDARD:"standard",COMPACT:"compact"},xa="#00d9ff",ba="rgba(0, 217, 255, 0.2)",Sa="#004b5c",ha="#ef4444",va="rgba(239, 68, 68, 0.18)",Ta="#7f1d1d",Ia=()=>typeof navigator>"u"?void 0:navigator.language,Oe={de:{alternative:"oder",click:"Klick",doubleClick:"2x Klick"},en:{alternative:"or",click:"Click",doubleClick:"Double click"}},Aa=e=>{const n=e==null?void 0:e.split("-")[0];return n&&Oe[n]?Oe[n]:Oe.en},Fn={margin:"0 0 0.9rem"},Ie="1em",Dn="max-content minmax(0, 1fr)",ka={display:"grid",gridTemplateColumns:Dn,columnGap:Ie,rowGap:"0.58rem",alignItems:"start"},Ea={...Fn,gridColumn:"1 / -1"},zn={[B.STANDARD]:{display:"grid",gridTemplateColumns:Dn,columnGap:Ie,alignItems:"baseline",margin:"0 0 0.58rem",lineHeight:1.28},[B.COMPACT]:{display:"contents"}},en={display:"inline-flex",alignItems:"center",justifyContent:"flex-end",gap:"0.22rem",whiteSpace:"nowrap"},Ue={display:"flex",flexDirection:"column",alignItems:"flex-end",gap:"0.2rem",whiteSpace:"nowrap"},La={lineHeight:1},Ve={[Z.INFO]:{margin:"-0.2rem 0 0.8rem",padding:"0.48rem 0.56rem",borderRadius:4,background:ba,color:Sa},[Z.WARNING]:{margin:"-0.2rem 0 0.8rem",padding:"0.48rem 0.56rem",borderRadius:4,background:va,color:Ta}},Ra={[Z.INFO]:{...Ve[Z.INFO],display:"grid",gridColumn:"1 / -1",gridTemplateColumns:"subgrid",columnGap:Ie,rowGap:"0.58rem",margin:"-0.2rem 0 0.8rem",padding:"0.48rem 0"},[Z.WARNING]:{...Ve[Z.WARNING],display:"grid",gridColumn:"1 / -1",gridTemplateColumns:"subgrid",columnGap:Ie,rowGap:"0.58rem",margin:"-0.2rem 0 0.8rem",padding:"0.48rem 0"}},Pa={minWidth:0,fontWeight:600,lineHeight:1.28},Oa={[B.STANDARD]:{minWidth:0,whiteSpace:"nowrap"},[B.COMPACT]:{minWidth:0,lineHeight:1.28}},qa=e=>e===B.COMPACT?e:B.STANDARD,Ma=e=>typeof e=="string"||e.kind===te.TEXT,yn=e=>typeof e!="string"&&e.kind===te.ALERT,Ba=e=>{const n=e.findIndex(Ma);if(n<=0)return e;const t=e.slice(0,n),a=t.filter(yn);return a.length===0?e:[...t.filter(r=>!yn(r)),e[n],...a,...e.slice(n+1)]},Hn={display:"inline-flex",minWidth:"1.85rem",minHeight:"1.35rem",alignItems:"center",justifyContent:"center",border:"1px solid rgba(0, 0, 0, 0.34)",borderRadius:"0.28rem",background:"rgba(255, 255, 255, 0.68)",boxShadow:"inset 0 -1px 0 rgba(0, 0, 0, 0.2)",color:"#1f2937",fontSize:"0.74em",fontWeight:700,lineHeight:1,padding:"0.16rem 0.32rem"},_a={...Hn,gap:"0.22rem"},wa={display:"inline-flex",minWidth:"1.35rem",minHeight:"1.35rem",alignItems:"center",justifyContent:"center",lineHeight:1},Fa={[Ce.INFO]:{color:xa},[Ce.WARNING]:{color:ha}},xe=(e,n)=>{const t=typeof e=="string"?e:e.text;return g.jsx("p",{style:n===B.COMPACT?Ea:Fn,children:t},t)},he=e=>g.jsx("span",{style:Hn,children:e}),Cn=e=>g.jsxs("span",{style:_a,children:[g.jsx(pe,{icon:Tt}),g.jsx("span",{children:e})]}),Xe=e=>g.jsx("span",{style:wa,children:g.jsx(pe,{style:Fa[e],icon:e===Ce.WARNING?ht:vt})}),Da=e=>Xe(e===Z.WARNING?Ce.WARNING:Ce.INFO),za=(e,n)=>he(la(e,n)),Ha=(e,n,t,a)=>{switch(e){case ne.CLICK:return Cn(a.click);case ne.DOUBLE_CLICK:return Cn(a.doubleClick);case ne.ENTER:return he("Enter");case ne.BACKSPACE:return za(t,n);case ne.ESCAPE:return he(n.escape);case ne.SHIFT:return he(n.shift)}},fn=(e,n,t,a)=>g.jsx("span",{style:en,children:e.map((r,o)=>g.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"0.22rem"},children:[o>0?g.jsx("span",{children:"+"}):null,Ha(r,n,t,a)]},`${r}-${o}`))}),ja=(e,n,t,a,r,o)=>o===B.COMPACT?g.jsxs("span",{style:Ue,children:[e?Xe(e):null,n.map((i,s)=>g.jsxs("span",{style:Ue,children:[s>0?g.jsx("span",{style:La,children:r.alternative}):null,fn(i,t,a,r)]},`${i.join("+")}-${s}`))]}):g.jsxs("span",{style:en,children:[e?Xe(e):null,n.map((i,s)=>g.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"0.22rem"},children:[s>0?g.jsx("span",{children:r.alternative}):null,fn(i,t,a,r)]},`${i.join("+")}-${s}`))]}),Ye=(e,n,t,a,r,o)=>g.jsxs("div",{"data-testid":"annotation-help-action",style:zn[o],children:[ja(e.indicator,e.inputAlternatives,t,a,r,o),g.jsx("span",{style:Oa[o],children:e.description})]},`${e.inputAlternatives.map(i=>i.join("+")).join("-")}-${n}`),Nn=(e,n,t,a,r,o)=>{const i=e.actions??[],s=o===B.COMPACT?Ra[e.severity]:Ve[e.severity];return g.jsxs("div",{"data-testid":"annotation-help-alert","data-severity":e.severity,style:s,children:[g.jsxs("div",{style:zn[o],children:[g.jsx("span",{style:o===B.COMPACT?Ue:en,children:Da(e.severity)}),g.jsx("span",{style:Pa,children:e.text})]}),i.map((u,l)=>Ye(u,l,t,a,r,o))]},`${e.severity}-${e.text}-${n}`)},$a=({items:e,layout:n,locale:t,platform:a})=>{const r=qa(n),o=t??Ia(),i=sa(o),s=oa(a),u=Aa(o),l=Ba(e);if(r===B.COMPACT){const d=l.map((p,m)=>typeof p=="string"||p.kind===te.TEXT?xe(p,r):p.kind===te.ALERT?Nn(p,m,i,s,u,r):Ye(p,m,i,s,u,r));return g.jsx("div",{"data-testid":"annotation-help-content",style:ka,children:d})}const c=l.map((d,p)=>typeof d=="string"||d.kind===te.TEXT?xe(d,r):d.kind===te.ALERT?Nn(d,p,i,s,u,r):Ye(d,p,i,s,u,r));return g.jsx(g.Fragment,{children:c})};$a.__docgenInfo={description:"",methods:[],displayName:"AnnotationInfoBoxHelpContent",props:{items:{required:!0,tsType:{name:"unknown"},description:""},layout:{required:!1,tsType:{name:"unknown[union]",raw:"(typeof ANNOTATION_INFO_BOX_HELP_LAYOUTS)[keyof typeof ANNOTATION_INFO_BOX_HELP_LAYOUTS]"},description:""},locale:{required:!1,tsType:{name:"string"},description:""},platform:{required:!1,tsType:{name:"KeyboardDisplayPlatform"},description:""}}};const Wa=({items:e,className:n,visualOptions:t})=>{const a=ue(t),r=a.subtitleTextClassName.split(/\s+/).filter(o=>o.length>0&&!o.startsWith("px-")).join(" ");return g.jsx("dl",{className:`flex flex-wrap items-start tabular-nums${n?` ${n}`:""}`,style:{columnGap:"1.35rem",rowGap:"0.5rem"},children:e.map((o,i)=>g.jsxs("div",{className:"grid max-w-full min-w-[5rem] flex-[0_1_auto] grid-rows-[auto,auto] content-start items-start gap-y-[0.1em] text-left",children:[g.jsx("dt",{className:r,style:a.subtitleTextStyle,children:o.label}),g.jsx("dd",{className:"m-0 leading-[1.25]",children:o.value})]},o.id??i))})};Wa.__docgenInfo={description:"",methods:[],displayName:"AnnotationInfoBoxMetricGrid",props:{items:{required:!0,tsType:{name:"unknown"},description:""},className:{required:!1,tsType:{name:"string"},description:""},visualOptions:{required:!1,tsType:{name:"Partial",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  defaultPixelWidth: number;
  headingColor: string;
  bodyPanelStyle: CSSProperties;
  resolveActionTooltipPopupContainer: (triggerNode: HTMLElement) => HTMLElement;
  headerForegroundClassName: string;
  headerTitleClassName: string;
  subtitleContainerClassName: string;
  subtitleTextStyle: CSSProperties;
  subtitleTextClassName: string;
  subtitleMetaTextStyle: CSSProperties;
  subtitleMetaTextClassName: string;
  showSubtitleMetaText: boolean;
  bodyContainerClassName: string;
  bodyTextStyle: CSSProperties;
  bodyTextClassName: string;
  emptyContentLineStyle: CSSProperties;
  emptyContentLineClassName: string;
  mutedTextClassName: string;
  linkTextClassName: string;
  actionIconClassName: string;
  actionIconColor: string;
  actionIconHoverColor: string;
  actionIconFontSize: string;
  hiddenActionIds: readonly AnnotationInfoBoxActionId[];
  renderActionIcon?: (
    props: AnnotationInfoBoxActionIconRenderProps
  ) => ReactNode;
  fieldTextClassName: string;
  fieldBorderClassName: string;
  fieldInputBorderClassName: string;
  fieldFocusBackgroundClassName: string;
  fieldFocusOutlineClassName: string;
  subtleFieldBackgroundClassName: string;
  titleTextStyle: CSSProperties;
  titleTextClassName: string;
  titleInputClassName: string;
  shortLabelInputClassName: string;
  navigationInstructionContainerClassName: string;
  navigationAvailabilityContainerClassName: string;
  navigationSummaryContainerClassName: string;
  navigationLinkFontSize: string;
  navigationControlLabels?: Readonly<{
    previous: ReactNode;
    next: ReactNode;
  }>;
  inlineFieldButtonClassName: string;
  colorInputClassName: string;
  inlineActionButtonClassName: string;
}`,signature:{properties:[{key:"defaultPixelWidth",value:{name:"number",required:!0}},{key:"headingColor",value:{name:"string",required:!0}},{key:"bodyPanelStyle",value:{name:"CSSProperties",required:!0}},{key:"resolveActionTooltipPopupContainer",value:{name:"signature",type:"function",raw:"(triggerNode: HTMLElement) => HTMLElement",signature:{arguments:[{type:{name:"HTMLElement"},name:"triggerNode"}],return:{name:"HTMLElement"}},required:!0}},{key:"headerForegroundClassName",value:{name:"string",required:!0}},{key:"headerTitleClassName",value:{name:"string",required:!0}},{key:"subtitleContainerClassName",value:{name:"string",required:!0}},{key:"subtitleTextStyle",value:{name:"CSSProperties",required:!0}},{key:"subtitleTextClassName",value:{name:"string",required:!0}},{key:"subtitleMetaTextStyle",value:{name:"CSSProperties",required:!0}},{key:"subtitleMetaTextClassName",value:{name:"string",required:!0}},{key:"showSubtitleMetaText",value:{name:"boolean",required:!0}},{key:"bodyContainerClassName",value:{name:"string",required:!0}},{key:"bodyTextStyle",value:{name:"CSSProperties",required:!0}},{key:"bodyTextClassName",value:{name:"string",required:!0}},{key:"emptyContentLineStyle",value:{name:"CSSProperties",required:!0}},{key:"emptyContentLineClassName",value:{name:"string",required:!0}},{key:"mutedTextClassName",value:{name:"string",required:!0}},{key:"linkTextClassName",value:{name:"string",required:!0}},{key:"actionIconClassName",value:{name:"string",required:!0}},{key:"actionIconColor",value:{name:"string",required:!0}},{key:"actionIconHoverColor",value:{name:"string",required:!0}},{key:"actionIconFontSize",value:{name:"string",required:!0}},{key:"hiddenActionIds",value:{name:"unknown",required:!0}},{key:"renderActionIcon",value:{name:"signature",type:"function",raw:`(
  props: AnnotationInfoBoxActionIconRenderProps
) => ReactNode`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  actionId: AnnotationInfoBoxActionId;
  icon: IconDefinition;
  className: string;
  style: CSSProperties;
  dataTestId?: string;
  ariaLabel?: string;
  disabled: boolean;
}`,signature:{properties:[{key:"actionId",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_INFO_BOX_ACTION_IDS)[keyof typeof ANNOTATION_INFO_BOX_ACTION_IDS]",required:!0}},{key:"icon",value:{name:"IconDefinition",required:!0}},{key:"className",value:{name:"string",required:!0}},{key:"style",value:{name:"CSSProperties",required:!0}},{key:"dataTestId",value:{name:"string",required:!1}},{key:"ariaLabel",value:{name:"string",required:!1}},{key:"disabled",value:{name:"boolean",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}},required:!1}},{key:"fieldTextClassName",value:{name:"string",required:!0}},{key:"fieldBorderClassName",value:{name:"string",required:!0}},{key:"fieldInputBorderClassName",value:{name:"string",required:!0}},{key:"fieldFocusBackgroundClassName",value:{name:"string",required:!0}},{key:"fieldFocusOutlineClassName",value:{name:"string",required:!0}},{key:"subtleFieldBackgroundClassName",value:{name:"string",required:!0}},{key:"titleTextStyle",value:{name:"CSSProperties",required:!0}},{key:"titleTextClassName",value:{name:"string",required:!0}},{key:"titleInputClassName",value:{name:"string",required:!0}},{key:"shortLabelInputClassName",value:{name:"string",required:!0}},{key:"navigationInstructionContainerClassName",value:{name:"string",required:!0}},{key:"navigationAvailabilityContainerClassName",value:{name:"string",required:!0}},{key:"navigationSummaryContainerClassName",value:{name:"string",required:!0}},{key:"navigationLinkFontSize",value:{name:"string",required:!0}},{key:"navigationControlLabels",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  previous: ReactNode;
  next: ReactNode;
}`,signature:{properties:[{key:"previous",value:{name:"ReactNode",required:!0}},{key:"next",value:{name:"ReactNode",required:!0}}]}}],raw:`Readonly<{
  previous: ReactNode;
  next: ReactNode;
}>`,required:!1}},{key:"inlineFieldButtonClassName",value:{name:"string",required:!0}},{key:"colorInputClassName",value:{name:"string",required:!0}},{key:"inlineActionButtonClassName",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  defaultPixelWidth: number;
  headingColor: string;
  bodyPanelStyle: CSSProperties;
  resolveActionTooltipPopupContainer: (triggerNode: HTMLElement) => HTMLElement;
  headerForegroundClassName: string;
  headerTitleClassName: string;
  subtitleContainerClassName: string;
  subtitleTextStyle: CSSProperties;
  subtitleTextClassName: string;
  subtitleMetaTextStyle: CSSProperties;
  subtitleMetaTextClassName: string;
  showSubtitleMetaText: boolean;
  bodyContainerClassName: string;
  bodyTextStyle: CSSProperties;
  bodyTextClassName: string;
  emptyContentLineStyle: CSSProperties;
  emptyContentLineClassName: string;
  mutedTextClassName: string;
  linkTextClassName: string;
  actionIconClassName: string;
  actionIconColor: string;
  actionIconHoverColor: string;
  actionIconFontSize: string;
  hiddenActionIds: readonly AnnotationInfoBoxActionId[];
  renderActionIcon?: (
    props: AnnotationInfoBoxActionIconRenderProps
  ) => ReactNode;
  fieldTextClassName: string;
  fieldBorderClassName: string;
  fieldInputBorderClassName: string;
  fieldFocusBackgroundClassName: string;
  fieldFocusOutlineClassName: string;
  subtleFieldBackgroundClassName: string;
  titleTextStyle: CSSProperties;
  titleTextClassName: string;
  titleInputClassName: string;
  shortLabelInputClassName: string;
  navigationInstructionContainerClassName: string;
  navigationAvailabilityContainerClassName: string;
  navigationSummaryContainerClassName: string;
  navigationLinkFontSize: string;
  navigationControlLabels?: Readonly<{
    previous: ReactNode;
    next: ReactNode;
  }>;
  inlineFieldButtonClassName: string;
  colorInputClassName: string;
  inlineActionButtonClassName: string;
}>`}],raw:"Partial<AnnotationInfoBoxVisualOptions>"},description:""}}};const Ga=({children:e,className:n,style:t,visualOptions:a})=>{const r=ue(a);return g.jsx("div",{className:`${r.subtitleMetaTextClassName}${n?` ${n}`:""}`,style:{...r.subtitleMetaTextStyle,...t},children:e})};Ga.__docgenInfo={description:"",methods:[],displayName:"AnnotationInfoBoxMetaText",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""},visualOptions:{required:!1,tsType:{name:"Partial",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  defaultPixelWidth: number;
  headingColor: string;
  bodyPanelStyle: CSSProperties;
  resolveActionTooltipPopupContainer: (triggerNode: HTMLElement) => HTMLElement;
  headerForegroundClassName: string;
  headerTitleClassName: string;
  subtitleContainerClassName: string;
  subtitleTextStyle: CSSProperties;
  subtitleTextClassName: string;
  subtitleMetaTextStyle: CSSProperties;
  subtitleMetaTextClassName: string;
  showSubtitleMetaText: boolean;
  bodyContainerClassName: string;
  bodyTextStyle: CSSProperties;
  bodyTextClassName: string;
  emptyContentLineStyle: CSSProperties;
  emptyContentLineClassName: string;
  mutedTextClassName: string;
  linkTextClassName: string;
  actionIconClassName: string;
  actionIconColor: string;
  actionIconHoverColor: string;
  actionIconFontSize: string;
  hiddenActionIds: readonly AnnotationInfoBoxActionId[];
  renderActionIcon?: (
    props: AnnotationInfoBoxActionIconRenderProps
  ) => ReactNode;
  fieldTextClassName: string;
  fieldBorderClassName: string;
  fieldInputBorderClassName: string;
  fieldFocusBackgroundClassName: string;
  fieldFocusOutlineClassName: string;
  subtleFieldBackgroundClassName: string;
  titleTextStyle: CSSProperties;
  titleTextClassName: string;
  titleInputClassName: string;
  shortLabelInputClassName: string;
  navigationInstructionContainerClassName: string;
  navigationAvailabilityContainerClassName: string;
  navigationSummaryContainerClassName: string;
  navigationLinkFontSize: string;
  navigationControlLabels?: Readonly<{
    previous: ReactNode;
    next: ReactNode;
  }>;
  inlineFieldButtonClassName: string;
  colorInputClassName: string;
  inlineActionButtonClassName: string;
}`,signature:{properties:[{key:"defaultPixelWidth",value:{name:"number",required:!0}},{key:"headingColor",value:{name:"string",required:!0}},{key:"bodyPanelStyle",value:{name:"CSSProperties",required:!0}},{key:"resolveActionTooltipPopupContainer",value:{name:"signature",type:"function",raw:"(triggerNode: HTMLElement) => HTMLElement",signature:{arguments:[{type:{name:"HTMLElement"},name:"triggerNode"}],return:{name:"HTMLElement"}},required:!0}},{key:"headerForegroundClassName",value:{name:"string",required:!0}},{key:"headerTitleClassName",value:{name:"string",required:!0}},{key:"subtitleContainerClassName",value:{name:"string",required:!0}},{key:"subtitleTextStyle",value:{name:"CSSProperties",required:!0}},{key:"subtitleTextClassName",value:{name:"string",required:!0}},{key:"subtitleMetaTextStyle",value:{name:"CSSProperties",required:!0}},{key:"subtitleMetaTextClassName",value:{name:"string",required:!0}},{key:"showSubtitleMetaText",value:{name:"boolean",required:!0}},{key:"bodyContainerClassName",value:{name:"string",required:!0}},{key:"bodyTextStyle",value:{name:"CSSProperties",required:!0}},{key:"bodyTextClassName",value:{name:"string",required:!0}},{key:"emptyContentLineStyle",value:{name:"CSSProperties",required:!0}},{key:"emptyContentLineClassName",value:{name:"string",required:!0}},{key:"mutedTextClassName",value:{name:"string",required:!0}},{key:"linkTextClassName",value:{name:"string",required:!0}},{key:"actionIconClassName",value:{name:"string",required:!0}},{key:"actionIconColor",value:{name:"string",required:!0}},{key:"actionIconHoverColor",value:{name:"string",required:!0}},{key:"actionIconFontSize",value:{name:"string",required:!0}},{key:"hiddenActionIds",value:{name:"unknown",required:!0}},{key:"renderActionIcon",value:{name:"signature",type:"function",raw:`(
  props: AnnotationInfoBoxActionIconRenderProps
) => ReactNode`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  actionId: AnnotationInfoBoxActionId;
  icon: IconDefinition;
  className: string;
  style: CSSProperties;
  dataTestId?: string;
  ariaLabel?: string;
  disabled: boolean;
}`,signature:{properties:[{key:"actionId",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_INFO_BOX_ACTION_IDS)[keyof typeof ANNOTATION_INFO_BOX_ACTION_IDS]",required:!0}},{key:"icon",value:{name:"IconDefinition",required:!0}},{key:"className",value:{name:"string",required:!0}},{key:"style",value:{name:"CSSProperties",required:!0}},{key:"dataTestId",value:{name:"string",required:!1}},{key:"ariaLabel",value:{name:"string",required:!1}},{key:"disabled",value:{name:"boolean",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}},required:!1}},{key:"fieldTextClassName",value:{name:"string",required:!0}},{key:"fieldBorderClassName",value:{name:"string",required:!0}},{key:"fieldInputBorderClassName",value:{name:"string",required:!0}},{key:"fieldFocusBackgroundClassName",value:{name:"string",required:!0}},{key:"fieldFocusOutlineClassName",value:{name:"string",required:!0}},{key:"subtleFieldBackgroundClassName",value:{name:"string",required:!0}},{key:"titleTextStyle",value:{name:"CSSProperties",required:!0}},{key:"titleTextClassName",value:{name:"string",required:!0}},{key:"titleInputClassName",value:{name:"string",required:!0}},{key:"shortLabelInputClassName",value:{name:"string",required:!0}},{key:"navigationInstructionContainerClassName",value:{name:"string",required:!0}},{key:"navigationAvailabilityContainerClassName",value:{name:"string",required:!0}},{key:"navigationSummaryContainerClassName",value:{name:"string",required:!0}},{key:"navigationLinkFontSize",value:{name:"string",required:!0}},{key:"navigationControlLabels",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  previous: ReactNode;
  next: ReactNode;
}`,signature:{properties:[{key:"previous",value:{name:"ReactNode",required:!0}},{key:"next",value:{name:"ReactNode",required:!0}}]}}],raw:`Readonly<{
  previous: ReactNode;
  next: ReactNode;
}>`,required:!1}},{key:"inlineFieldButtonClassName",value:{name:"string",required:!0}},{key:"colorInputClassName",value:{name:"string",required:!0}},{key:"inlineActionButtonClassName",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  defaultPixelWidth: number;
  headingColor: string;
  bodyPanelStyle: CSSProperties;
  resolveActionTooltipPopupContainer: (triggerNode: HTMLElement) => HTMLElement;
  headerForegroundClassName: string;
  headerTitleClassName: string;
  subtitleContainerClassName: string;
  subtitleTextStyle: CSSProperties;
  subtitleTextClassName: string;
  subtitleMetaTextStyle: CSSProperties;
  subtitleMetaTextClassName: string;
  showSubtitleMetaText: boolean;
  bodyContainerClassName: string;
  bodyTextStyle: CSSProperties;
  bodyTextClassName: string;
  emptyContentLineStyle: CSSProperties;
  emptyContentLineClassName: string;
  mutedTextClassName: string;
  linkTextClassName: string;
  actionIconClassName: string;
  actionIconColor: string;
  actionIconHoverColor: string;
  actionIconFontSize: string;
  hiddenActionIds: readonly AnnotationInfoBoxActionId[];
  renderActionIcon?: (
    props: AnnotationInfoBoxActionIconRenderProps
  ) => ReactNode;
  fieldTextClassName: string;
  fieldBorderClassName: string;
  fieldInputBorderClassName: string;
  fieldFocusBackgroundClassName: string;
  fieldFocusOutlineClassName: string;
  subtleFieldBackgroundClassName: string;
  titleTextStyle: CSSProperties;
  titleTextClassName: string;
  titleInputClassName: string;
  shortLabelInputClassName: string;
  navigationInstructionContainerClassName: string;
  navigationAvailabilityContainerClassName: string;
  navigationSummaryContainerClassName: string;
  navigationLinkFontSize: string;
  navigationControlLabels?: Readonly<{
    previous: ReactNode;
    next: ReactNode;
  }>;
  inlineFieldButtonClassName: string;
  colorInputClassName: string;
  inlineActionButtonClassName: string;
}>`}],raw:"Partial<AnnotationInfoBoxVisualOptions>"},description:""}}};const Ua=Object.freeze({measurementSingular:"Messung",measurementPlural:"Messungen",availableSuffix:"verfügbar",previousAriaLabel:"Vorherige Messung",nextAriaLabel:"Nächste Messung",counterSeparator:"von"}),xn=(e,n)=>`${e} ${e===1?n.measurementSingular:n.measurementPlural} ${n.availableSuffix}`.trim(),Va=({totalEntries:e,currentIndex:n,instructionText:t,availabilityLabel:a,labels:r,onFlyToAllMeasurements:o,onPreviousMeasurement:i,onNextMeasurement:s,visualOptions:u})=>{var C,f;const l=ue(u),c={...Ua,...r};if(e<=0&&!t)return null;const d={fontSize:l.navigationLinkFontSize,border:"none",background:"transparent",padding:0,userSelect:"none"},p=((C=l.navigationControlLabels)==null?void 0:C.previous)??g.jsx(pe,{icon:It}),m=((f=l.navigationControlLabels)==null?void 0:f.next)??g.jsx(pe,{icon:At});return g.jsxs(g.Fragment,{children:[t?g.jsx("div",{className:`${l.navigationInstructionContainerClassName} ${l.mutedTextClassName}`,children:g.jsx("span",{children:t})}):null,e>0?g.jsx("div",{className:l.navigationAvailabilityContainerClassName,children:o?g.jsx("button",{type:"button",className:`${l.linkTextClassName} cursor-pointer`,onClick:o,style:{border:"none",background:"transparent",padding:0},children:a??xn(e,c)}):g.jsx("span",{className:l.linkTextClassName,children:a??xn(e,c)})}):null,e>0?g.jsxs("div",{className:l.navigationSummaryContainerClassName,children:[g.jsx("button",{type:"button",className:`renderAsLink cursor-pointer select-none ${l.linkTextClassName}`,onClick:i,"data-test-id":"switch-measurement-left",style:d,"aria-label":c.previousAriaLabel,children:p}),g.jsxs("span",{className:"mx-4",children:[n+1," ",c.counterSeparator," ",e]}),g.jsx("button",{type:"button",className:`renderAsLink cursor-pointer select-none ${l.linkTextClassName}`,onClick:s,"data-test-id":"switch-measurement-right",style:d,"aria-label":c.nextAriaLabel,children:m})]}):null]})};Va.__docgenInfo={description:"",methods:[],displayName:"AnnotationInfoBoxNavigation",props:{totalEntries:{required:!0,tsType:{name:"number"},description:""},currentIndex:{required:!0,tsType:{name:"number"},description:""},instructionText:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},availabilityLabel:{required:!1,tsType:{name:"ReactNode"},description:""},labels:{required:!1,tsType:{name:"Partial",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  measurementSingular: string;
  measurementPlural: string;
  availableSuffix: string;
  previousAriaLabel: string;
  nextAriaLabel: string;
  counterSeparator: string;
}`,signature:{properties:[{key:"measurementSingular",value:{name:"string",required:!0}},{key:"measurementPlural",value:{name:"string",required:!0}},{key:"availableSuffix",value:{name:"string",required:!0}},{key:"previousAriaLabel",value:{name:"string",required:!0}},{key:"nextAriaLabel",value:{name:"string",required:!0}},{key:"counterSeparator",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  measurementSingular: string;
  measurementPlural: string;
  availableSuffix: string;
  previousAriaLabel: string;
  nextAriaLabel: string;
  counterSeparator: string;
}>`}],raw:"Partial<AnnotationInfoBoxNavigationLabels>"},description:""},onFlyToAllMeasurements:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onPreviousMeasurement:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onNextMeasurement:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},visualOptions:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  defaultPixelWidth: number;
  headingColor: string;
  bodyPanelStyle: CSSProperties;
  resolveActionTooltipPopupContainer: (triggerNode: HTMLElement) => HTMLElement;
  headerForegroundClassName: string;
  headerTitleClassName: string;
  subtitleContainerClassName: string;
  subtitleTextStyle: CSSProperties;
  subtitleTextClassName: string;
  subtitleMetaTextStyle: CSSProperties;
  subtitleMetaTextClassName: string;
  showSubtitleMetaText: boolean;
  bodyContainerClassName: string;
  bodyTextStyle: CSSProperties;
  bodyTextClassName: string;
  emptyContentLineStyle: CSSProperties;
  emptyContentLineClassName: string;
  mutedTextClassName: string;
  linkTextClassName: string;
  actionIconClassName: string;
  actionIconColor: string;
  actionIconHoverColor: string;
  actionIconFontSize: string;
  hiddenActionIds: readonly AnnotationInfoBoxActionId[];
  renderActionIcon?: (
    props: AnnotationInfoBoxActionIconRenderProps
  ) => ReactNode;
  fieldTextClassName: string;
  fieldBorderClassName: string;
  fieldInputBorderClassName: string;
  fieldFocusBackgroundClassName: string;
  fieldFocusOutlineClassName: string;
  subtleFieldBackgroundClassName: string;
  titleTextStyle: CSSProperties;
  titleTextClassName: string;
  titleInputClassName: string;
  shortLabelInputClassName: string;
  navigationInstructionContainerClassName: string;
  navigationAvailabilityContainerClassName: string;
  navigationSummaryContainerClassName: string;
  navigationLinkFontSize: string;
  navigationControlLabels?: Readonly<{
    previous: ReactNode;
    next: ReactNode;
  }>;
  inlineFieldButtonClassName: string;
  colorInputClassName: string;
  inlineActionButtonClassName: string;
}`,signature:{properties:[{key:"defaultPixelWidth",value:{name:"number",required:!0}},{key:"headingColor",value:{name:"string",required:!0}},{key:"bodyPanelStyle",value:{name:"CSSProperties",required:!0}},{key:"resolveActionTooltipPopupContainer",value:{name:"signature",type:"function",raw:"(triggerNode: HTMLElement) => HTMLElement",signature:{arguments:[{type:{name:"HTMLElement"},name:"triggerNode"}],return:{name:"HTMLElement"}},required:!0}},{key:"headerForegroundClassName",value:{name:"string",required:!0}},{key:"headerTitleClassName",value:{name:"string",required:!0}},{key:"subtitleContainerClassName",value:{name:"string",required:!0}},{key:"subtitleTextStyle",value:{name:"CSSProperties",required:!0}},{key:"subtitleTextClassName",value:{name:"string",required:!0}},{key:"subtitleMetaTextStyle",value:{name:"CSSProperties",required:!0}},{key:"subtitleMetaTextClassName",value:{name:"string",required:!0}},{key:"showSubtitleMetaText",value:{name:"boolean",required:!0}},{key:"bodyContainerClassName",value:{name:"string",required:!0}},{key:"bodyTextStyle",value:{name:"CSSProperties",required:!0}},{key:"bodyTextClassName",value:{name:"string",required:!0}},{key:"emptyContentLineStyle",value:{name:"CSSProperties",required:!0}},{key:"emptyContentLineClassName",value:{name:"string",required:!0}},{key:"mutedTextClassName",value:{name:"string",required:!0}},{key:"linkTextClassName",value:{name:"string",required:!0}},{key:"actionIconClassName",value:{name:"string",required:!0}},{key:"actionIconColor",value:{name:"string",required:!0}},{key:"actionIconHoverColor",value:{name:"string",required:!0}},{key:"actionIconFontSize",value:{name:"string",required:!0}},{key:"hiddenActionIds",value:{name:"unknown",required:!0}},{key:"renderActionIcon",value:{name:"signature",type:"function",raw:`(
  props: AnnotationInfoBoxActionIconRenderProps
) => ReactNode`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  actionId: AnnotationInfoBoxActionId;
  icon: IconDefinition;
  className: string;
  style: CSSProperties;
  dataTestId?: string;
  ariaLabel?: string;
  disabled: boolean;
}`,signature:{properties:[{key:"actionId",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_INFO_BOX_ACTION_IDS)[keyof typeof ANNOTATION_INFO_BOX_ACTION_IDS]",required:!0}},{key:"icon",value:{name:"IconDefinition",required:!0}},{key:"className",value:{name:"string",required:!0}},{key:"style",value:{name:"CSSProperties",required:!0}},{key:"dataTestId",value:{name:"string",required:!1}},{key:"ariaLabel",value:{name:"string",required:!1}},{key:"disabled",value:{name:"boolean",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}},required:!1}},{key:"fieldTextClassName",value:{name:"string",required:!0}},{key:"fieldBorderClassName",value:{name:"string",required:!0}},{key:"fieldInputBorderClassName",value:{name:"string",required:!0}},{key:"fieldFocusBackgroundClassName",value:{name:"string",required:!0}},{key:"fieldFocusOutlineClassName",value:{name:"string",required:!0}},{key:"subtleFieldBackgroundClassName",value:{name:"string",required:!0}},{key:"titleTextStyle",value:{name:"CSSProperties",required:!0}},{key:"titleTextClassName",value:{name:"string",required:!0}},{key:"titleInputClassName",value:{name:"string",required:!0}},{key:"shortLabelInputClassName",value:{name:"string",required:!0}},{key:"navigationInstructionContainerClassName",value:{name:"string",required:!0}},{key:"navigationAvailabilityContainerClassName",value:{name:"string",required:!0}},{key:"navigationSummaryContainerClassName",value:{name:"string",required:!0}},{key:"navigationLinkFontSize",value:{name:"string",required:!0}},{key:"navigationControlLabels",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  previous: ReactNode;
  next: ReactNode;
}`,signature:{properties:[{key:"previous",value:{name:"ReactNode",required:!0}},{key:"next",value:{name:"ReactNode",required:!0}}]}}],raw:`Readonly<{
  previous: ReactNode;
  next: ReactNode;
}>`,required:!1}},{key:"inlineFieldButtonClassName",value:{name:"string",required:!0}},{key:"colorInputClassName",value:{name:"string",required:!0}},{key:"inlineActionButtonClassName",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  defaultPixelWidth: number;
  headingColor: string;
  bodyPanelStyle: CSSProperties;
  resolveActionTooltipPopupContainer: (triggerNode: HTMLElement) => HTMLElement;
  headerForegroundClassName: string;
  headerTitleClassName: string;
  subtitleContainerClassName: string;
  subtitleTextStyle: CSSProperties;
  subtitleTextClassName: string;
  subtitleMetaTextStyle: CSSProperties;
  subtitleMetaTextClassName: string;
  showSubtitleMetaText: boolean;
  bodyContainerClassName: string;
  bodyTextStyle: CSSProperties;
  bodyTextClassName: string;
  emptyContentLineStyle: CSSProperties;
  emptyContentLineClassName: string;
  mutedTextClassName: string;
  linkTextClassName: string;
  actionIconClassName: string;
  actionIconColor: string;
  actionIconHoverColor: string;
  actionIconFontSize: string;
  hiddenActionIds: readonly AnnotationInfoBoxActionId[];
  renderActionIcon?: (
    props: AnnotationInfoBoxActionIconRenderProps
  ) => ReactNode;
  fieldTextClassName: string;
  fieldBorderClassName: string;
  fieldInputBorderClassName: string;
  fieldFocusBackgroundClassName: string;
  fieldFocusOutlineClassName: string;
  subtleFieldBackgroundClassName: string;
  titleTextStyle: CSSProperties;
  titleTextClassName: string;
  titleInputClassName: string;
  shortLabelInputClassName: string;
  navigationInstructionContainerClassName: string;
  navigationAvailabilityContainerClassName: string;
  navigationSummaryContainerClassName: string;
  navigationLinkFontSize: string;
  navigationControlLabels?: Readonly<{
    previous: ReactNode;
    next: ReactNode;
  }>;
  inlineFieldButtonClassName: string;
  colorInputClassName: string;
  inlineActionButtonClassName: string;
}>`},description:""}}};const Xa=({children:e,className:n,style:t,visualOptions:a})=>{const r=ue(a);return g.jsx("div",{className:`${r.bodyContainerClassName} ${r.bodyTextClassName}${n?` ${n}`:""}`,style:{...r.bodyTextStyle,...t},children:e})};Xa.__docgenInfo={description:"",methods:[],displayName:"AnnotationInfoBoxTextContent",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""},visualOptions:{required:!1,tsType:{name:"Partial",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  defaultPixelWidth: number;
  headingColor: string;
  bodyPanelStyle: CSSProperties;
  resolveActionTooltipPopupContainer: (triggerNode: HTMLElement) => HTMLElement;
  headerForegroundClassName: string;
  headerTitleClassName: string;
  subtitleContainerClassName: string;
  subtitleTextStyle: CSSProperties;
  subtitleTextClassName: string;
  subtitleMetaTextStyle: CSSProperties;
  subtitleMetaTextClassName: string;
  showSubtitleMetaText: boolean;
  bodyContainerClassName: string;
  bodyTextStyle: CSSProperties;
  bodyTextClassName: string;
  emptyContentLineStyle: CSSProperties;
  emptyContentLineClassName: string;
  mutedTextClassName: string;
  linkTextClassName: string;
  actionIconClassName: string;
  actionIconColor: string;
  actionIconHoverColor: string;
  actionIconFontSize: string;
  hiddenActionIds: readonly AnnotationInfoBoxActionId[];
  renderActionIcon?: (
    props: AnnotationInfoBoxActionIconRenderProps
  ) => ReactNode;
  fieldTextClassName: string;
  fieldBorderClassName: string;
  fieldInputBorderClassName: string;
  fieldFocusBackgroundClassName: string;
  fieldFocusOutlineClassName: string;
  subtleFieldBackgroundClassName: string;
  titleTextStyle: CSSProperties;
  titleTextClassName: string;
  titleInputClassName: string;
  shortLabelInputClassName: string;
  navigationInstructionContainerClassName: string;
  navigationAvailabilityContainerClassName: string;
  navigationSummaryContainerClassName: string;
  navigationLinkFontSize: string;
  navigationControlLabels?: Readonly<{
    previous: ReactNode;
    next: ReactNode;
  }>;
  inlineFieldButtonClassName: string;
  colorInputClassName: string;
  inlineActionButtonClassName: string;
}`,signature:{properties:[{key:"defaultPixelWidth",value:{name:"number",required:!0}},{key:"headingColor",value:{name:"string",required:!0}},{key:"bodyPanelStyle",value:{name:"CSSProperties",required:!0}},{key:"resolveActionTooltipPopupContainer",value:{name:"signature",type:"function",raw:"(triggerNode: HTMLElement) => HTMLElement",signature:{arguments:[{type:{name:"HTMLElement"},name:"triggerNode"}],return:{name:"HTMLElement"}},required:!0}},{key:"headerForegroundClassName",value:{name:"string",required:!0}},{key:"headerTitleClassName",value:{name:"string",required:!0}},{key:"subtitleContainerClassName",value:{name:"string",required:!0}},{key:"subtitleTextStyle",value:{name:"CSSProperties",required:!0}},{key:"subtitleTextClassName",value:{name:"string",required:!0}},{key:"subtitleMetaTextStyle",value:{name:"CSSProperties",required:!0}},{key:"subtitleMetaTextClassName",value:{name:"string",required:!0}},{key:"showSubtitleMetaText",value:{name:"boolean",required:!0}},{key:"bodyContainerClassName",value:{name:"string",required:!0}},{key:"bodyTextStyle",value:{name:"CSSProperties",required:!0}},{key:"bodyTextClassName",value:{name:"string",required:!0}},{key:"emptyContentLineStyle",value:{name:"CSSProperties",required:!0}},{key:"emptyContentLineClassName",value:{name:"string",required:!0}},{key:"mutedTextClassName",value:{name:"string",required:!0}},{key:"linkTextClassName",value:{name:"string",required:!0}},{key:"actionIconClassName",value:{name:"string",required:!0}},{key:"actionIconColor",value:{name:"string",required:!0}},{key:"actionIconHoverColor",value:{name:"string",required:!0}},{key:"actionIconFontSize",value:{name:"string",required:!0}},{key:"hiddenActionIds",value:{name:"unknown",required:!0}},{key:"renderActionIcon",value:{name:"signature",type:"function",raw:`(
  props: AnnotationInfoBoxActionIconRenderProps
) => ReactNode`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  actionId: AnnotationInfoBoxActionId;
  icon: IconDefinition;
  className: string;
  style: CSSProperties;
  dataTestId?: string;
  ariaLabel?: string;
  disabled: boolean;
}`,signature:{properties:[{key:"actionId",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_INFO_BOX_ACTION_IDS)[keyof typeof ANNOTATION_INFO_BOX_ACTION_IDS]",required:!0}},{key:"icon",value:{name:"IconDefinition",required:!0}},{key:"className",value:{name:"string",required:!0}},{key:"style",value:{name:"CSSProperties",required:!0}},{key:"dataTestId",value:{name:"string",required:!1}},{key:"ariaLabel",value:{name:"string",required:!1}},{key:"disabled",value:{name:"boolean",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}},required:!1}},{key:"fieldTextClassName",value:{name:"string",required:!0}},{key:"fieldBorderClassName",value:{name:"string",required:!0}},{key:"fieldInputBorderClassName",value:{name:"string",required:!0}},{key:"fieldFocusBackgroundClassName",value:{name:"string",required:!0}},{key:"fieldFocusOutlineClassName",value:{name:"string",required:!0}},{key:"subtleFieldBackgroundClassName",value:{name:"string",required:!0}},{key:"titleTextStyle",value:{name:"CSSProperties",required:!0}},{key:"titleTextClassName",value:{name:"string",required:!0}},{key:"titleInputClassName",value:{name:"string",required:!0}},{key:"shortLabelInputClassName",value:{name:"string",required:!0}},{key:"navigationInstructionContainerClassName",value:{name:"string",required:!0}},{key:"navigationAvailabilityContainerClassName",value:{name:"string",required:!0}},{key:"navigationSummaryContainerClassName",value:{name:"string",required:!0}},{key:"navigationLinkFontSize",value:{name:"string",required:!0}},{key:"navigationControlLabels",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  previous: ReactNode;
  next: ReactNode;
}`,signature:{properties:[{key:"previous",value:{name:"ReactNode",required:!0}},{key:"next",value:{name:"ReactNode",required:!0}}]}}],raw:`Readonly<{
  previous: ReactNode;
  next: ReactNode;
}>`,required:!1}},{key:"inlineFieldButtonClassName",value:{name:"string",required:!0}},{key:"colorInputClassName",value:{name:"string",required:!0}},{key:"inlineActionButtonClassName",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  defaultPixelWidth: number;
  headingColor: string;
  bodyPanelStyle: CSSProperties;
  resolveActionTooltipPopupContainer: (triggerNode: HTMLElement) => HTMLElement;
  headerForegroundClassName: string;
  headerTitleClassName: string;
  subtitleContainerClassName: string;
  subtitleTextStyle: CSSProperties;
  subtitleTextClassName: string;
  subtitleMetaTextStyle: CSSProperties;
  subtitleMetaTextClassName: string;
  showSubtitleMetaText: boolean;
  bodyContainerClassName: string;
  bodyTextStyle: CSSProperties;
  bodyTextClassName: string;
  emptyContentLineStyle: CSSProperties;
  emptyContentLineClassName: string;
  mutedTextClassName: string;
  linkTextClassName: string;
  actionIconClassName: string;
  actionIconColor: string;
  actionIconHoverColor: string;
  actionIconFontSize: string;
  hiddenActionIds: readonly AnnotationInfoBoxActionId[];
  renderActionIcon?: (
    props: AnnotationInfoBoxActionIconRenderProps
  ) => ReactNode;
  fieldTextClassName: string;
  fieldBorderClassName: string;
  fieldInputBorderClassName: string;
  fieldFocusBackgroundClassName: string;
  fieldFocusOutlineClassName: string;
  subtleFieldBackgroundClassName: string;
  titleTextStyle: CSSProperties;
  titleTextClassName: string;
  titleInputClassName: string;
  shortLabelInputClassName: string;
  navigationInstructionContainerClassName: string;
  navigationAvailabilityContainerClassName: string;
  navigationSummaryContainerClassName: string;
  navigationLinkFontSize: string;
  navigationControlLabels?: Readonly<{
    previous: ReactNode;
    next: ReactNode;
  }>;
  inlineFieldButtonClassName: string;
  colorInputClassName: string;
  inlineActionButtonClassName: string;
}>`}],raw:"Partial<AnnotationInfoBoxVisualOptions>"},description:""}}};const ge=e=>e.trim(),w=Object.freeze({borderRadiusRem:"0.2143rem",shortLabelMaxLength:64,shortLabelWidthPaddingCh:.5,shortLabelMinWidthCh:2.5}),be=e=>ge(e).slice(0,w.shortLabelMaxLength),Ya=e=>e.slice(0,w.shortLabelMaxLength),Ka=({value:e,placeholder:n,onCommit:t,shortLabelValue:a,shortLabelPlaceholder:r,onShortLabelCommit:o,visualOptions:i})=>{const s=ue(i),[u,l]=T.useState(()=>ge(e)),[c,d]=T.useState(()=>be(a??"")),p=T.useRef(null),m=T.useRef(null),C=w.shortLabelMaxLength+w.shortLabelWidthPaddingCh,f=Math.min(Math.max(ge(c||r||"").length+w.shortLabelWidthPaddingCh,w.shortLabelMinWidthCh),C);T.useEffect(()=>{l(ge(e))},[e]),T.useEffect(()=>{d(be(a??""))},[a]);const I=h=>{const R=ge(h);l(R),t(R)},S=h=>{if(!o)return;const R=be(h);if(!R){const gt=be(a??"");d(gt);return}d(R),o(R)},L=h=>{h.stopPropagation()},ut=h=>{var R;h.key==="Enter"&&(h.preventDefault(),(R=p.current)==null||R.blur())},dt=h=>{var R;h.key==="Enter"&&(h.preventDefault(),(R=m.current)==null||R.blur())},ct={...s.titleTextStyle,flex:"0 1 auto",minWidth:"1ch",maxWidth:"100%",fieldSizing:"content"},mt={...s.titleTextStyle,borderRadius:w.borderRadiusRem,flex:"0 1 auto",width:`${f}ch`,minWidth:`${w.shortLabelMinWidthCh}ch`,maxWidth:`min(${C}ch, 100%)`,fieldSizing:"content"};return g.jsxs("div",{className:"inline-flex min-w-0 max-w-full flex-1 items-center",style:{columnGap:"0.35em"},onMouseDown:L,onClick:L,children:[g.jsx("input",{ref:p,type:"text",value:u,placeholder:n,className:s.titleInputClassName,style:ct,onMouseDown:L,onClick:L,onChange:h=>l(h.target.value),onBlur:h=>I(h.target.value),onKeyDown:ut}),o?g.jsx("input",{ref:m,type:"text",value:c,placeholder:r,maxLength:w.shortLabelMaxLength,className:s.shortLabelInputClassName,style:mt,onMouseDown:L,onClick:L,onChange:h=>d(Ya(h.target.value)),onBlur:h=>S(h.target.value),onKeyDown:dt}):null]})};Ka.__docgenInfo={description:"",methods:[],displayName:"AnnotationInfoBoxTitleInput",props:{value:{required:!0,tsType:{name:"string"},description:""},placeholder:{required:!0,tsType:{name:"string"},description:""},onCommit:{required:!0,tsType:{name:"signature",type:"function",raw:"(nextValue: string) => void",signature:{arguments:[{type:{name:"string"},name:"nextValue"}],return:{name:"void"}}},description:""},shortLabelValue:{required:!1,tsType:{name:"string"},description:""},shortLabelPlaceholder:{required:!1,tsType:{name:"string"},description:""},onShortLabelCommit:{required:!1,tsType:{name:"signature",type:"function",raw:"(nextValue: string) => void",signature:{arguments:[{type:{name:"string"},name:"nextValue"}],return:{name:"void"}}},description:""},visualOptions:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  defaultPixelWidth: number;
  headingColor: string;
  bodyPanelStyle: CSSProperties;
  resolveActionTooltipPopupContainer: (triggerNode: HTMLElement) => HTMLElement;
  headerForegroundClassName: string;
  headerTitleClassName: string;
  subtitleContainerClassName: string;
  subtitleTextStyle: CSSProperties;
  subtitleTextClassName: string;
  subtitleMetaTextStyle: CSSProperties;
  subtitleMetaTextClassName: string;
  showSubtitleMetaText: boolean;
  bodyContainerClassName: string;
  bodyTextStyle: CSSProperties;
  bodyTextClassName: string;
  emptyContentLineStyle: CSSProperties;
  emptyContentLineClassName: string;
  mutedTextClassName: string;
  linkTextClassName: string;
  actionIconClassName: string;
  actionIconColor: string;
  actionIconHoverColor: string;
  actionIconFontSize: string;
  hiddenActionIds: readonly AnnotationInfoBoxActionId[];
  renderActionIcon?: (
    props: AnnotationInfoBoxActionIconRenderProps
  ) => ReactNode;
  fieldTextClassName: string;
  fieldBorderClassName: string;
  fieldInputBorderClassName: string;
  fieldFocusBackgroundClassName: string;
  fieldFocusOutlineClassName: string;
  subtleFieldBackgroundClassName: string;
  titleTextStyle: CSSProperties;
  titleTextClassName: string;
  titleInputClassName: string;
  shortLabelInputClassName: string;
  navigationInstructionContainerClassName: string;
  navigationAvailabilityContainerClassName: string;
  navigationSummaryContainerClassName: string;
  navigationLinkFontSize: string;
  navigationControlLabels?: Readonly<{
    previous: ReactNode;
    next: ReactNode;
  }>;
  inlineFieldButtonClassName: string;
  colorInputClassName: string;
  inlineActionButtonClassName: string;
}`,signature:{properties:[{key:"defaultPixelWidth",value:{name:"number",required:!0}},{key:"headingColor",value:{name:"string",required:!0}},{key:"bodyPanelStyle",value:{name:"CSSProperties",required:!0}},{key:"resolveActionTooltipPopupContainer",value:{name:"signature",type:"function",raw:"(triggerNode: HTMLElement) => HTMLElement",signature:{arguments:[{type:{name:"HTMLElement"},name:"triggerNode"}],return:{name:"HTMLElement"}},required:!0}},{key:"headerForegroundClassName",value:{name:"string",required:!0}},{key:"headerTitleClassName",value:{name:"string",required:!0}},{key:"subtitleContainerClassName",value:{name:"string",required:!0}},{key:"subtitleTextStyle",value:{name:"CSSProperties",required:!0}},{key:"subtitleTextClassName",value:{name:"string",required:!0}},{key:"subtitleMetaTextStyle",value:{name:"CSSProperties",required:!0}},{key:"subtitleMetaTextClassName",value:{name:"string",required:!0}},{key:"showSubtitleMetaText",value:{name:"boolean",required:!0}},{key:"bodyContainerClassName",value:{name:"string",required:!0}},{key:"bodyTextStyle",value:{name:"CSSProperties",required:!0}},{key:"bodyTextClassName",value:{name:"string",required:!0}},{key:"emptyContentLineStyle",value:{name:"CSSProperties",required:!0}},{key:"emptyContentLineClassName",value:{name:"string",required:!0}},{key:"mutedTextClassName",value:{name:"string",required:!0}},{key:"linkTextClassName",value:{name:"string",required:!0}},{key:"actionIconClassName",value:{name:"string",required:!0}},{key:"actionIconColor",value:{name:"string",required:!0}},{key:"actionIconHoverColor",value:{name:"string",required:!0}},{key:"actionIconFontSize",value:{name:"string",required:!0}},{key:"hiddenActionIds",value:{name:"unknown",required:!0}},{key:"renderActionIcon",value:{name:"signature",type:"function",raw:`(
  props: AnnotationInfoBoxActionIconRenderProps
) => ReactNode`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  actionId: AnnotationInfoBoxActionId;
  icon: IconDefinition;
  className: string;
  style: CSSProperties;
  dataTestId?: string;
  ariaLabel?: string;
  disabled: boolean;
}`,signature:{properties:[{key:"actionId",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_INFO_BOX_ACTION_IDS)[keyof typeof ANNOTATION_INFO_BOX_ACTION_IDS]",required:!0}},{key:"icon",value:{name:"IconDefinition",required:!0}},{key:"className",value:{name:"string",required:!0}},{key:"style",value:{name:"CSSProperties",required:!0}},{key:"dataTestId",value:{name:"string",required:!1}},{key:"ariaLabel",value:{name:"string",required:!1}},{key:"disabled",value:{name:"boolean",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}},required:!1}},{key:"fieldTextClassName",value:{name:"string",required:!0}},{key:"fieldBorderClassName",value:{name:"string",required:!0}},{key:"fieldInputBorderClassName",value:{name:"string",required:!0}},{key:"fieldFocusBackgroundClassName",value:{name:"string",required:!0}},{key:"fieldFocusOutlineClassName",value:{name:"string",required:!0}},{key:"subtleFieldBackgroundClassName",value:{name:"string",required:!0}},{key:"titleTextStyle",value:{name:"CSSProperties",required:!0}},{key:"titleTextClassName",value:{name:"string",required:!0}},{key:"titleInputClassName",value:{name:"string",required:!0}},{key:"shortLabelInputClassName",value:{name:"string",required:!0}},{key:"navigationInstructionContainerClassName",value:{name:"string",required:!0}},{key:"navigationAvailabilityContainerClassName",value:{name:"string",required:!0}},{key:"navigationSummaryContainerClassName",value:{name:"string",required:!0}},{key:"navigationLinkFontSize",value:{name:"string",required:!0}},{key:"navigationControlLabels",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  previous: ReactNode;
  next: ReactNode;
}`,signature:{properties:[{key:"previous",value:{name:"ReactNode",required:!0}},{key:"next",value:{name:"ReactNode",required:!0}}]}}],raw:`Readonly<{
  previous: ReactNode;
  next: ReactNode;
}>`,required:!1}},{key:"inlineFieldButtonClassName",value:{name:"string",required:!0}},{key:"colorInputClassName",value:{name:"string",required:!0}},{key:"inlineActionButtonClassName",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  defaultPixelWidth: number;
  headingColor: string;
  bodyPanelStyle: CSSProperties;
  resolveActionTooltipPopupContainer: (triggerNode: HTMLElement) => HTMLElement;
  headerForegroundClassName: string;
  headerTitleClassName: string;
  subtitleContainerClassName: string;
  subtitleTextStyle: CSSProperties;
  subtitleTextClassName: string;
  subtitleMetaTextStyle: CSSProperties;
  subtitleMetaTextClassName: string;
  showSubtitleMetaText: boolean;
  bodyContainerClassName: string;
  bodyTextStyle: CSSProperties;
  bodyTextClassName: string;
  emptyContentLineStyle: CSSProperties;
  emptyContentLineClassName: string;
  mutedTextClassName: string;
  linkTextClassName: string;
  actionIconClassName: string;
  actionIconColor: string;
  actionIconHoverColor: string;
  actionIconFontSize: string;
  hiddenActionIds: readonly AnnotationInfoBoxActionId[];
  renderActionIcon?: (
    props: AnnotationInfoBoxActionIconRenderProps
  ) => ReactNode;
  fieldTextClassName: string;
  fieldBorderClassName: string;
  fieldInputBorderClassName: string;
  fieldFocusBackgroundClassName: string;
  fieldFocusOutlineClassName: string;
  subtleFieldBackgroundClassName: string;
  titleTextStyle: CSSProperties;
  titleTextClassName: string;
  titleInputClassName: string;
  shortLabelInputClassName: string;
  navigationInstructionContainerClassName: string;
  navigationAvailabilityContainerClassName: string;
  navigationSummaryContainerClassName: string;
  navigationLinkFontSize: string;
  navigationControlLabels?: Readonly<{
    previous: ReactNode;
    next: ReactNode;
  }>;
  inlineFieldButtonClassName: string;
  colorInputClassName: string;
  inlineActionButtonClassName: string;
}>`},description:""}}};const ae=Object.freeze({lineLengthEpsilonPx:.001,referenceDistanceFactor:.2,flipThresholdPx:4,referenceMinDistancePx:24,referenceMaxDistancePx:48,insideBlendFactor:.35,elevationEpsilonMeters:.001,geometryEpsilonPx:1e-6,geometryEpsilonPxSquared:1e-6**2,polygonAreaEpsilonPx2:1e-6,interiorSampleGridResolution:18,minInteriorSampleGridResolution:6,inwardProbeStepsPx:[.5,1,2,4,8,12,16,24,32],polygonLabelPaddingXPx:6,polygonLabelPaddingYPx:4,polygonLabelMinAreaToLabelRatio:1.15,polylabelPrecisionPx:.5,polylabelMaxCellsToProcess:2e4,minSafeLabelDimensionPx:1}),Hi=(e,n,t,a=ae.referenceMinDistancePx,r=ae.referenceMaxDistancePx)=>{const o=Jt({start:e,end:n,epsilon:ae.lineLengthEpsilonPx});if(!o)return null;const i=Qt(t,o.midpoint),u=ea(i,o.leftUnitNormal)>=0?1:-1,l=Zt(o.length*ae.referenceDistanceFactor,a,r),c=na(o.leftUnitNormal,u*l);return ta(o.midpoint,c)},Za=({triangle:e,auxiliaryAltitudeMeters:n,highestAltitudeMeters:t,insideBlendFactor:a=ae.insideBlendFactor,elevationEpsilonMeters:r=ae.elevationEpsilonMeters})=>{const o=n<t-r?e.highest:e.aux;return{x:o.x+(e.centroid.x-o.x)*a,y:o.y+(e.centroid.y-o.y)*a}},N={POINT:"point",DISTANCE:"distance",POLYLINE:"polyline",AREA_GROUND:"area",AREA_PLANAR:"planar",AREA_VERTICAL:"vertical",LABEL:"label"},Ja="select",ji="planar-biggest-triangle",$i="planar-pca",Wi="planar-trapezoid",jn=e=>e===N.AREA_GROUND||e===N.AREA_VERTICAL||e===N.AREA_PLANAR,Qa=e=>{if(!Number.isFinite(e)||e<0)return"A";let n=Math.floor(e),t="";do t=String.fromCharCode(65+n%26)+t,n=Math.floor(n/26)-1;while(n>=0);return t},Ke=Object.freeze({fillAlpha:.25,selectedFillAlpha:.35,rgb255ByType:{[N.AREA_VERTICAL]:[112,168,255],[N.AREA_GROUND]:[107,188,123],[N.AREA_PLANAR]:[239,223,145]}}),$n=([e,n,t],a)=>`rgba(${e}, ${n}, ${t}, ${a})`,nn=e=>Ke.rgb255ByType[e],Gi=(e,n)=>$n(nn(e),n?Ke.selectedFillAlpha:Ke.fillAlpha),er=(e,n)=>$n(nn(e),n),k={DIRECT:"direct",VERTICAL:"vertical",HORIZONTAL:"horizontal"},z=Object.freeze({textRgb255:{dark:[17,24,39],light:[255,255,255]},measurementTextRgb255:[248,250,252],shortLabelRgb255ByType:{[N.POINT]:[200,200,200],[N.DISTANCE]:[102,126,234],[N.POLYLINE]:[226,178,60],[N.LABEL]:[88,152,255]},surfaceRgb255:{stroke:[255,255,255],accent:[246,248,255]},lineComponentRgb255ByKind:{[k.DIRECT]:[255,255,255],[k.VERTICAL]:[111,168,255],[k.HORIZONTAL]:[188,194,102]},selectionRgb255:{background:[15,23,42],hoverBackground:[30,41,59],glow:[255,255,255]}}),$=Object.freeze({alpha:{text:{dark:.9,light:1},shortLabelBackgroundByType:{[N.POINT]:.92,[N.DISTANCE]:.95,[N.POLYLINE]:.95,[N.LABEL]:.95,area:.95},lineComponentByKind:{[k.DIRECT]:1,[k.VERTICAL]:.96,[k.HORIZONTAL]:.95},lineComponentLabelAccentByKind:{[k.DIRECT]:.34,[k.VERTICAL]:.54,[k.HORIZONTAL]:.5},selection:{background:.92,hoverBackground:.9,glow:1},surfaceStroke:.95}}),W=([e,n,t],a)=>`rgba(${e}, ${n}, ${t}, ${a})`,U=(e,n=$.alpha.text[e])=>W(z.textRgb255[e],n),ve=(e=$.alpha.surfaceStroke)=>W(z.surfaceRgb255.stroke,e),nr=(e=$.alpha.surfaceStroke)=>W(z.surfaceRgb255.accent,e),qe=(e,n=$.alpha.lineComponentByKind[e])=>W(z.lineComponentRgb255ByKind[e],n),Me=(e,n=$.alpha.lineComponentLabelAccentByKind[e])=>W(z.lineComponentRgb255ByKind[e],n),V=e=>jn(e)?er(e,$.alpha.shortLabelBackgroundByType.area):W(z.shortLabelRgb255ByType[e],$.alpha.shortLabelBackgroundByType[e]),Ui=e=>jn(e)?nn(e):z.shortLabelRgb255ByType[e],bn=(e,n=$.alpha.selection[e])=>W(z.selectionRgb255[e],n),tr=(e=1)=>W(z.measurementTextRgb255,e),K=Object.freeze({fontFamily:'"Helvetica Neue", Arial, Helvetica, sans-serif',fontWeight:{regular:400,medium:500,semibold:600},fontSizePx:{supportText:12,pointLabel:14,measurementLabel:16,compactBadge:10,distancePairLabel:11}}),H={NUMERIC:"numeric",ALPHABETIC:"alphabetic"},ar={[N.POINT]:{prefix:"",counterStyle:H.NUMERIC,backgroundColor:V(N.POINT),textColor:U("dark")},[N.DISTANCE]:{prefix:"",counterStyle:H.ALPHABETIC,backgroundColor:V(N.DISTANCE),textColor:U("light")},[N.POLYLINE]:{prefix:"L",counterStyle:H.NUMERIC,backgroundColor:V(N.POLYLINE),textColor:U("dark")},[N.AREA_GROUND]:{prefix:"A",counterStyle:H.NUMERIC,backgroundColor:V(N.AREA_GROUND),textColor:U("light")},[N.AREA_PLANAR]:{prefix:"D",counterStyle:H.NUMERIC,backgroundColor:V(N.AREA_PLANAR),textColor:U("light")},[N.AREA_VERTICAL]:{prefix:"F",counterStyle:H.NUMERIC,backgroundColor:V(N.AREA_VERTICAL),textColor:U("light")},[N.LABEL]:{prefix:"T",counterStyle:H.NUMERIC,backgroundColor:V(N.LABEL),textColor:U("light")}},Vi=(e,n,t=ar)=>{const a=t[e],r=Number.isFinite(n)&&n>0?Math.floor(n):1,o=a.counterStyle===H.ALPHABETIC?Qa(r-1):`${r}`;return`${a.prefix}${o}`},tn=1e-12,rr=1e-6,Xi=(e,n)=>e.map(t=>y.add(t,n,new y)),ir=(e,n,t=new y)=>{const a=y.magnitudeSquared(n);if(a<=tn)return y.clone(e,t);const r=y.dot(e,n)/a;return y.subtract(e,y.multiplyByScalar(n,r,new y),t)},or=(e,n,t,a=new y)=>{const r=y.magnitudeSquared(t);if(r<=tn)return y.clone(e,a);const o=y.subtract(e,n,new y),i=y.dot(o,t)/r;return y.subtract(e,y.multiplyByScalar(t,i,new y),a)},Yi=(e,n,t)=>{const a=y.magnitude(t);if(a<=rr)return 0;const r=y.subtract(e,n,new y);return y.dot(r,t)/a},sr=(e,n,t,a=new y)=>{const r=y.subtract(n,e,new y),o=y.subtract(t,e,new y),i=y.cross(r,o,a);return y.magnitudeSquared(i)<=tn?null:y.normalize(i,a)},lr=0,ur=e=>e??lr,dr=e=>({longitude:mn(e.longitude),latitude:mn(e.latitude),altitude:e.height}),cr=e=>{const n=$e.fromCartesian(e);return dr(n)},Sn=Object.freeze({componentEpsilonMeters:.05}),mr=(e,n,t)=>{const a=sr(e,n,t);return a?{anchorECEF:y.clone(e),normalECEF:a}:null},hn=(e,n)=>or(e,n.anchorECEF,n.normalECEF),Wn=(e,n)=>{const t=jt(e),a=y.subtract(n,e,new y),r=y.dot(a,t),o=y.multiplyByScalar(t,r,new y),i=ir(a,t),s=y.magnitude(i),u=Math.abs(r);if(s<Sn.componentEpsilonMeters||u<Sn.componentEpsilonMeters)return null;const l=y.add(e,i,new y),c=y.add(e,o,new y),d=y.add(e,t,new y),p=mr(e,d,l);return{adjacentHorizontalCorner:p?hn(l,p):l,adjacentVerticalCorner:p?hn(c,p):c}},Ki=(e,n)=>{const t=Wn(e,n);if(!t)return 0;const a=y.distance(e,t.adjacentHorizontalCorner),r=y.distance(e,t.adjacentVerticalCorner);return a*r},vn=e=>e.reduce((n,t)=>{const a=t.match(/(\d+)$/),r=a?Number(a[1]):Number.NaN;return Number.isFinite(r)?Math.max(n,r):n},0),Zi=e=>new Map(e.flatMap(n=>n.nodeIds.map(t=>[t,n.id]))),re=({nodes:e,nodeLinks:n})=>{const t=new Set(e.map(i=>i.id)),a=n.map(i=>({...i,nodeIds:Array.from(new Set(i.nodeIds.filter(s=>t.has(s))))})).filter(i=>i.nodeIds.length>0),r=new Set(a.flatMap(i=>i.nodeIds)),o=e.filter(i=>!r.has(i.id)).map(i=>({id:i.id,nodeIds:[i.id]}));return[...a,...o]},Tn=6378137,gr=.1,Be=e=>e*Math.PI/180,pr=(e,n)=>{const t=Be(n.latitude-e.latitude),a=Be(n.longitude-e.longitude),r=Be((e.latitude+n.latitude)/2),o=a*Math.cos(r)*Tn,i=t*Tn,s=n.altitude-e.altitude;return Math.hypot(o,i,s)},yr=e=>typeof e=="string"&&e.trim().length>0?e.trim():null,Cr=({nodes:e,nodeLinks:n,nodeId:t,movedNodeIds:a,linkToNodeId:r})=>{const o=e.find(m=>m.id===t)??null,i=Array.from(new Set(a.filter(Boolean)));if(!o||i.length===0)return[...n];const s=new Set(i),u=n.find(m=>m.nodeIds.includes(t))??null,l=yr(r),c=l&&!s.has(l)?n.find(m=>m.nodeIds.includes(l))??null:null;return c&&!c.nodeIds.some(m=>s.has(m))?re({nodes:e,nodeLinks:n.map(m=>m.id===c.id?{...m,nodeIds:Array.from(new Set([...m.nodeIds,...i]))}:{...m,nodeIds:m.nodeIds.filter(C=>!s.has(C))})}):!u||i.length===u.nodeIds.length?[...n]:e.filter(m=>u.nodeIds.includes(m.id)&&!s.has(m.id)).some(m=>pr(m.coordinate,o.coordinate)>gr)?re({nodes:e,nodeLinks:n.map(m=>m.id===u.id?{...m,nodeIds:m.nodeIds.filter(C=>!s.has(C))}:{...m})}):[...n]},fr=({nodeId:e,nodes:n,linkedNodeGroups:t,annotationEntries:a,selectedMeasurementIds:r=[],preferredMovedNodeIds:o})=>{const i=n.find(f=>f.id===e)??null;if(!i)return{targetNode:null,targetLinkedNodeGroup:null,movedNodeIds:[]};const s=t.find(f=>f.nodeIds.includes(e))??null,u=(s==null?void 0:s.nodeIds)??[e],l=Array.from(new Set((o??[]).filter(f=>u.includes(f)))),c=new Set(r.filter(Boolean)),d=new Set(a.filter(f=>c.has(f.id)).flatMap(f=>f.nodeIds)),p=u.filter(f=>d.has(f)),m=l.length>0?l:p.length>0?p:[...u],C=new Set(a.filter(f=>f.locked).flatMap(f=>f.nodeIds));return{targetNode:i,targetLinkedNodeGroup:s,movedNodeIds:m.filter(f=>!C.has(f))}},Nr=(e={})=>{const{initialToolType:n=Ja,initialPointTemporaryMode:t=!1}=e;return{annotationToolType:n,selectionState:{selectedAnnotationIds:[],previousSelectedAnnotationId:null},annotationEntries:[],nodes:[],linkedNodeGroups:[],edges:[],infoBoxState:{activeAnnotationId:null},settingsState:{pointTemporaryMode:t,elevationReferenceAnnotationId:null,nextShortLabelCounterByToolType:{}}}},xr=Vt({name:"annotationsRuntime",initialState:Nr(),reducers:{replaceState:(e,n)=>n.payload,setAnnotationToolType:(e,n)=>{e.annotationToolType=n.payload},setPointTemporaryMode:(e,n)=>{e.settingsState.pointTemporaryMode=n.payload},setElevationReferenceAnnotationId:(e,n)=>{e.settingsState.elevationReferenceAnnotationId=n.payload},setNextShortLabelCounterByToolType:(e,n)=>{e.settingsState.nextShortLabelCounterByToolType={...e.settingsState.nextShortLabelCounterByToolType,[n.payload.toolType]:Math.max(1,n.payload.nextCounter)}},setSelectedAnnotationId:(e,n)=>{const t=n.payload,a=e.selectionState.selectedAnnotationIds[e.selectionState.selectedAnnotationIds.length-1]??null;e.selectionState.previousSelectedAnnotationId=a,e.selectionState.selectedAnnotationIds=t?[t]:[],e.infoBoxState.activeAnnotationId=t},setSelectedAnnotationIds:(e,n)=>{const t=Array.from(new Set(n.payload.filter(Boolean))),a=e.selectionState.selectedAnnotationIds[e.selectionState.selectedAnnotationIds.length-1]??null;e.selectionState.previousSelectedAnnotationId=a,e.selectionState.selectedAnnotationIds=t,e.infoBoxState.activeAnnotationId=t[t.length-1]??null},appendAnnotationEntities:(e,n)=>{if(e.nodes.push(...n.payload.nodes),n.payload.linkedNodeGroups.forEach(t=>{const a=e.linkedNodeGroups.find(r=>r.id===t.id);if(!a){e.linkedNodeGroups.push({id:t.id,nodeIds:[...t.nodeIds]});return}a.nodeIds=Array.from(new Set([...a.nodeIds,...t.nodeIds]))}),e.edges.push(...n.payload.edges),e.annotationEntries.push({...n.payload.annotationEntry,nodeIds:[...n.payload.annotationEntry.nodeIds],edgeIds:[...n.payload.annotationEntry.edgeIds]}),e.linkedNodeGroups=re({nodes:e.nodes,nodeLinks:e.linkedNodeGroups}),n.payload.selectAnnotationId!==void 0){const t=e.selectionState.selectedAnnotationIds[e.selectionState.selectedAnnotationIds.length-1]??null;e.selectionState.previousSelectedAnnotationId=t,e.selectionState.selectedAnnotationIds=n.payload.selectAnnotationId?[n.payload.selectAnnotationId]:[],e.infoBoxState.activeAnnotationId=n.payload.selectAnnotationId??null}},removeAnnotationById:(e,n)=>{const{annotationId:t,nextSelectedAnnotationId:a}=n.payload,r=e.selectionState.selectedAnnotationIds[e.selectionState.selectedAnnotationIds.length-1]??null;if(!e.annotationEntries.some(l=>l.id===t))return;e.annotationEntries=e.annotationEntries.filter(l=>l.id!==t);const i=new Set(e.annotationEntries.flatMap(l=>l.nodeIds)),s=new Set(e.annotationEntries.flatMap(l=>l.edgeIds));if(e.nodes=e.nodes.filter(l=>i.has(l.id)),e.linkedNodeGroups=re({nodes:e.nodes,nodeLinks:e.linkedNodeGroups}),e.edges=e.edges.filter(l=>s.has(l.id)),e.selectionState.previousSelectedAnnotationId=r,e.settingsState.elevationReferenceAnnotationId===t&&(e.settingsState.elevationReferenceAnnotationId=null),a!==void 0){e.selectionState.selectedAnnotationIds=a?[a]:[],e.infoBoxState.activeAnnotationId=a??null;return}const u=e.selectionState.selectedAnnotationIds.filter(l=>l!==t);e.selectionState.selectedAnnotationIds=u,e.infoBoxState.activeAnnotationId=u[u.length-1]??null},removeAnnotationsByIds:(e,n)=>{const t=new Set(n.payload.annotationIds);if(t.size===0)return;const a=e.selectionState.selectedAnnotationIds[e.selectionState.selectedAnnotationIds.length-1]??null;if(!e.annotationEntries.some(u=>t.has(u.id)))return;e.annotationEntries=e.annotationEntries.filter(u=>!t.has(u.id));const o=new Set(e.annotationEntries.flatMap(u=>u.nodeIds)),i=new Set(e.annotationEntries.flatMap(u=>u.edgeIds));if(e.nodes=e.nodes.filter(u=>o.has(u.id)),e.linkedNodeGroups=re({nodes:e.nodes,nodeLinks:e.linkedNodeGroups}),e.edges=e.edges.filter(u=>i.has(u.id)),e.selectionState.previousSelectedAnnotationId=a,e.settingsState.elevationReferenceAnnotationId&&t.has(e.settingsState.elevationReferenceAnnotationId)&&(e.settingsState.elevationReferenceAnnotationId=null),n.payload.nextSelectedAnnotationId!==void 0){e.selectionState.selectedAnnotationIds=n.payload.nextSelectedAnnotationId?[n.payload.nextSelectedAnnotationId]:[],e.infoBoxState.activeAnnotationId=n.payload.nextSelectedAnnotationId??null;return}const s=e.selectionState.selectedAnnotationIds.filter(u=>!t.has(u));e.selectionState.selectedAnnotationIds=s,e.infoBoxState.activeAnnotationId=s[s.length-1]??null},updateNodeCoordinateById:(e,n)=>{const{nodeId:t,coordinate:a,selectedMeasurementIds:r=[],movedNodeIds:o,linkToNodeId:i}=n.payload,{targetNode:s,movedNodeIds:u}=fr({nodeId:t,nodes:e.nodes,linkedNodeGroups:e.linkedNodeGroups,annotationEntries:e.annotationEntries,selectedMeasurementIds:r,preferredMovedNodeIds:o});if(!s)return;const l=new Set(u);u.length!==0&&(e.nodes.forEach(c=>{l.has(c.id)&&(c.coordinate=a)}),e.linkedNodeGroups=Cr({nodes:e.nodes,nodeLinks:e.linkedNodeGroups,nodeId:s.id,movedNodeIds:u,linkToNodeId:i}))},insertNodeIntoMeasurementEdge:(e,n)=>{const{measurementId:t,startNodeId:a,endNodeId:r,coordinate:o}=n.payload,i=e.annotationEntries.find(S=>S.id===t);if(!i)return;const s=i.nodeIds.findIndex((S,L)=>S===a&&i.nodeIds[L+1]===r),u=s>=0?s+1:i.closed&&i.nodeIds.length>=3&&i.nodeIds[i.nodeIds.length-1]===a&&i.nodeIds[0]===r?i.nodeIds.length:-1;if(u<0)return;const l=new Map(e.edges.map(S=>[S.id,S])),c=i.edgeIds.findIndex(S=>{const L=l.get(S);return(L==null?void 0:L.startNodeId)===a&&L.endNodeId===r}),d=c>=0?i.edgeIds[c]:null,p=d?l.get(d):void 0;if(!p||c<0)return;const m=`node-${vn(e.nodes.map(S=>S.id))+1}`,C=`edge-${vn(e.edges.map(S=>S.id))+1}`;e.nodes.push({id:m,coordinate:o}),e.linkedNodeGroups=re({nodes:e.nodes,nodeLinks:[...e.linkedNodeGroups,{id:m,nodeIds:[m]}]}),p.endNodeId=m;const f={id:C,startNodeId:m,endNodeId:r},I=e.edges.findIndex(S=>S.id===d);I>=0?e.edges.splice(I+1,0,f):e.edges.push(f),i.nodeIds=[...i.nodeIds.slice(0,u),m,...i.nodeIds.slice(u)],i.edgeIds=[...i.edgeIds.slice(0,c+1),C,...i.edgeIds.slice(c+1)]},updateAnnotationEntryById:(e,n)=>{const{annotationId:t,displayName:a,shortLabel:r,hidden:o,locked:i,labelAppearance:s,elevationDisplayMode:u,distanceAnchorCoordinateSelection:l,distanceTriangleAnchorCoordinateRole:c}=n.payload,d=e.annotationEntries.find(p=>p.id===t);d&&(a!==void 0&&(d.displayName=a),r!==void 0&&(d.shortLabel=r),o!==void 0&&(d.hidden=o),i!==void 0&&(d.locked=i),s!==void 0&&(d.labelAppearance={...d.labelAppearance??{},...s}),u!==void 0&&(d.elevationDisplayMode=u),l!==void 0&&(d.distanceAnchorCoordinateSelection=l),c!==void 0&&(d.distanceTriangleAnchorCoordinateRole=c))}}}),{appendAnnotationEntities:Ji,removeAnnotationById:Qi,removeAnnotationsByIds:eo,setElevationReferenceAnnotationId:no,setNextShortLabelCounterByToolType:to,setPointTemporaryMode:ao,insertNodeIntoMeasurementEdge:ro,updateNodeCoordinateById:io,updateAnnotationEntryById:oo,replaceState:so,setAnnotationToolType:lo,setSelectedAnnotationId:uo,setSelectedAnnotationIds:co}=xr.actions,an=T.createContext(null);Xt(an);const br=Yt(an);Kt(an);const mo=()=>br(),Ze=Object.freeze({strokeWidthPx:1.5,overlayDashPattern:"8 8"}),Sr=(e,n)=>typeof e=="number"&&Number.isFinite(e)&&e>0?e:n,hr=(e,n)=>{const t=e==null?void 0:e.trim();return t||n},go=(e,n=Ze)=>({strokeWidthPx:Sr(e==null?void 0:e.strokeWidthPx,n.strokeWidthPx),overlayDashPattern:hr(e==null?void 0:e.overlayDashPattern,n.overlayDashPattern)}),In=Object.freeze({previewAlpha:.9,surfaceAlpha:.92}),b={colors:{neutral:ve(1),accent:ve(1),preview:ve(In.previewAlpha),surface:Pt(In.surfaceAlpha),transparent:"transparent",components:{direct:qe(k.DIRECT),vertical:qe(k.VERTICAL),horizontal:qe(k.HORIZONTAL)},componentLabelAccents:{direct:Me(k.DIRECT),vertical:Me(k.VERTICAL),horizontal:Me(k.HORIZONTAL)}},sizes:{edgeStrokeWidth:Ze.strokeWidthPx,pointPixelSize:10,pointOutlineWidth:1},patterns:{edgeDashPattern:Ze.overlayDashPattern}},Gn=Object.freeze({edge:Object.freeze({stroke:b.colors.accent,strokeWidth:b.sizes.edgeStrokeWidth,overlayDashPattern:b.patterns.edgeDashPattern}),point:Object.freeze({pixelSize:b.sizes.pointPixelSize,fill:b.colors.transparent,outline:b.colors.surface,outlineWidth:b.sizes.pointOutlineWidth})}),Un=Object.freeze({edge:Object.freeze({stroke:b.colors.neutral}),point:Object.freeze({outline:b.colors.neutral})}),vr=(e,n={})=>({...e,...n}),Tr=(e,n={})=>({...e,...n}),po=e=>vr(e,Un.edge),yo=e=>Tr(e,Un.point),Je={DARK_ON_BRIGHT:"dark-on-bright",BRIGHT_ON_DARK:"bright-on-dark"},Ir=K.fontSizePx.pointLabel,Ar=e=>`${e/Ir}rem`,ie=Object.freeze({fontFamily:K.fontFamily,rootFontSizeRem:"1rem",supportFontSizeRem:Ar(K.fontSizePx.supportText),headingFontSizeRem:"1rem",lineLabelFontWeight:K.fontWeight.medium,badgeFontWeight:K.fontWeight.medium,headingFontWeight:K.fontWeight.semibold,sectionTitleFontWeight:K.fontWeight.semibold}),kr={SOFT_RECT_FADE:"soft-rect-fade",TEXT_ECHO_DARKEN:"text-echo-darken"},Er={NONE:"none",MOVE_ON_LINE:"move-on-line"},M=Object.freeze({appearance:Object.freeze({themeStyle:Je.BRIGHT_ON_DARK}),text:Object.freeze({fontFamily:ie.fontFamily,fontWeight:ie.lineLabelFontWeight}),background:Object.freeze({style:kr.TEXT_ECHO_DARKEN}),surface:Object.freeze({}),layout:Object.freeze({shortEdgeOffsetPx:-2}),collision:Object.freeze({allowEarlyRemoval:!0,resolutionStrategy:Er.MOVE_ON_LINE,anchorSlideStepRatio:.1,maxAnchorSlideDeltaRatio:.3})}),se=Object.freeze({horizontalLabelOffsetPx:7,verticalFlippedBaselineOffsetPx:6,verticalBaselineAngleEpsilonRad:1e-9,sideHysteresisPx:1.5,upperSideGapFactor:.15,upperSideGapNormalYEpsilon:.001}),rn=e=>{var n,t;return{appearance:{...M.appearance,...e==null?void 0:e.appearance},text:{...M.text,...e==null?void 0:e.text,echo:((n=e==null?void 0:e.text)==null?void 0:n.echo)===void 0&&M.text.echo===void 0?void 0:{...M.text.echo,...(t=e==null?void 0:e.text)==null?void 0:t.echo}},background:{...M.background,...e==null?void 0:e.background},surface:{...M.surface,...e==null?void 0:e.surface},layout:{...M.layout,...e==null?void 0:e.layout},collision:{...M.collision,...e==null?void 0:e.collision}}},D=Object.freeze({lineStrokeWidthPx:b.sizes.edgeStrokeWidth,layerZIndex:"1550",lineLabelOffsetPx:8,lineLabelMinLengthPx:44,geometryEpsilonMeters:.01,labelReferenceLineLengthEpsilonPx:.001,labelReferenceDistanceFactor:.2,labelReferenceMinDistancePx:24,labelReferenceMaxDistancePx:48,labelReferenceInsideBlendFactor:.35,labelSideSwitchThresholdPx:4,directLineColor:b.colors.components.direct,verticalLineColor:b.colors.components.vertical,horizontalLineColor:b.colors.components.horizontal,draftChainColor:b.colors.preview}),ce=Object.freeze({root:"carma-annotation-text-overlay",backdrop:"carma-annotation-text-overlay__backdrop",surface:"carma-annotation-text-overlay__surface",textEcho:"carma-annotation-text-overlay__text-echo",text:"carma-annotation-text-overlay__text"}),Se=Object.freeze({paddingBlockEx:.25,paddingInlineEx:.65,backdropInsetBlockEx:-.35,backdropInsetInlineEx:-.75}),Lr=Object.freeze({fontSize:"20px",letterSpacing:"5%",fontWeight:800,textEchoBlurPx:12,textEchoShadow:"0 0 4px rgba(2, 6, 23, 0.8), 0 0 12px rgba(2, 6, 23, 0.77), 0 0 24px rgba(2, 6, 23, 0.64)"}),Rr=Object.freeze({[Je.BRIGHT_ON_DARK]:"15, 23, 42",[Je.DARK_ON_BRIGHT]:"255, 255, 255"}),me=(e,n)=>{const t=document.createElement(e);return t.className=n,t},X=({element:e,value:n,property:t,unit:a,min:r,max:o})=>{if(typeof n!="number"||!Number.isFinite(n))return;const i=r===void 0?n:Math.max(n,r),s=o===void 0?i:Math.min(i,o);e.style.setProperty(t,`${s}${a??""}`)},Pr=({element:e,backdrop:n,surface:t,accentColor:a,visualOptions:r=M})=>{var i,s,u,l,c,d,p,m,C,f,I,S;e.style.setProperty("--carma-annotation-text-overlay-font-family",r.text.fontFamily),e.style.setProperty("--carma-annotation-text-overlay-font-weight",String(r.text.fontWeight)),a&&e.style.setProperty("--carma-annotation-text-overlay-glow-color",a),e.dataset.annotationThemeStyle=r.appearance.themeStyle,e.dataset.annotationTextOverlayBackgroundStyle=r.background.style,typeof r.background.surfaceAlpha=="number"&&Number.isFinite(r.background.surfaceAlpha)&&!((i=r.background.color)!=null&&i.trim())&&e.style.setProperty("--carma-annotation-text-overlay-backdrop-background",`rgba(${Rr[r.appearance.themeStyle]}, ${Math.min(Math.max(r.background.surfaceAlpha,0),1)})`);const o=r.background.showBackdrop!==!1;n.style.display=o?"block":"none",t.style.display=o?"block":"none",(s=r.text.color)!=null&&s.trim()&&e.style.setProperty("--carma-annotation-text-overlay-text-color",r.text.color),(u=r.text.blendMode)!=null&&u.trim()&&e.style.setProperty("--carma-annotation-text-overlay-text-blend-mode",r.text.blendMode),(l=r.background.color)!=null&&l.trim()&&e.style.setProperty("--carma-annotation-text-overlay-backdrop-background",r.background.color),(c=r.background.blendMode)!=null&&c.trim()&&e.style.setProperty("--carma-annotation-text-overlay-backdrop-blend-mode",r.background.blendMode),(d=r.surface.blendMode)!=null&&d.trim()&&e.style.setProperty("--carma-annotation-text-overlay-surface-blend-mode",r.surface.blendMode),(m=(p=r.text.echo)==null?void 0:p.color)!=null&&m.trim()&&e.style.setProperty("--carma-annotation-text-overlay-text-echo-color",r.text.echo.color),(f=(C=r.text.echo)==null?void 0:C.blendMode)!=null&&f.trim()&&e.style.setProperty("--carma-annotation-text-overlay-text-echo-blend-mode",r.text.echo.blendMode),X({element:e,value:(I=r.text.echo)==null?void 0:I.blurPx,property:"--carma-annotation-text-overlay-text-echo-blur-px",unit:"px",min:0}),X({element:e,value:(S=r.text.echo)==null?void 0:S.opacity,property:"--carma-annotation-text-overlay-text-echo-opacity",min:0,max:1}),X({element:e,value:r.background.blurPx,property:"--carma-annotation-text-overlay-surface-blur-px",unit:"px",min:0}),X({element:e,value:r.background.brightnessPct,property:"--carma-annotation-text-overlay-surface-brightness-pct",unit:"%",min:0}),X({element:e,value:r.background.saturatePct,property:"--carma-annotation-text-overlay-surface-saturate-pct",unit:"%",min:0}),X({element:e,value:r.background.radiusEx,property:"--carma-annotation-text-overlay-backdrop-radius",unit:"ex",min:0}),X({element:e,value:r.background.edgeBlurPx,property:"--carma-annotation-text-overlay-surface-edge-blur-px",unit:"px",min:0}),(typeof r.surface.paddingBlockEx=="number"||typeof r.surface.paddingInlineEx=="number")&&(e.style.setProperty("--carma-annotation-text-overlay-padding-block",`${typeof r.surface.paddingBlockEx=="number"&&Number.isFinite(r.surface.paddingBlockEx)?Math.max(r.surface.paddingBlockEx,0):Se.paddingBlockEx}ex`),e.style.setProperty("--carma-annotation-text-overlay-padding-inline",`${typeof r.surface.paddingInlineEx=="number"&&Number.isFinite(r.surface.paddingInlineEx)?Math.max(r.surface.paddingInlineEx,0):Se.paddingInlineEx}ex`)),(typeof r.background.insetBlockEx=="number"||typeof r.background.insetInlineEx=="number")&&e.style.setProperty("--carma-annotation-text-overlay-backdrop-inset",`${typeof r.background.insetBlockEx=="number"&&Number.isFinite(r.background.insetBlockEx)?r.background.insetBlockEx:Se.backdropInsetBlockEx}ex ${typeof r.background.insetInlineEx=="number"&&Number.isFinite(r.background.insetInlineEx)?r.background.insetInlineEx:Se.backdropInsetInlineEx}ex`)},Or=(e,n)=>{n&&(n.fontSize&&e.style.setProperty("--carma-annotation-text-overlay-font-size",n.fontSize),n.fontWeight!==void 0&&e.style.setProperty("--carma-annotation-text-overlay-font-weight",String(n.fontWeight)),n.letterSpacing&&e.style.setProperty("--carma-annotation-text-overlay-letter-spacing",n.letterSpacing),typeof n.textEchoBlurPx=="number"&&e.style.setProperty("--carma-annotation-text-overlay-text-echo-blur-px",`${n.textEchoBlurPx}px`),n.textEchoShadow&&e.style.setProperty("--carma-annotation-text-overlay-text-echo-shadow",n.textEchoShadow))},Vn=({accentColor:e,visualOptions:n,styleOptions:t})=>{const a=me("div",ce.root),r=me("div",ce.backdrop),o=me("div",ce.surface),i=me("div",ce.textEcho),s=me("div",ce.text);return i.dataset.annotationTextOverlayTextEcho="true",s.dataset.annotationTextOverlayText="foreground",Pr({element:a,backdrop:r,surface:o,textEcho:i,text:s,accentColor:e,visualOptions:n}),Or(a,t),a.append(r,o,i,s),a},qr=e=>e.querySelector('[data-annotation-text-overlay-text="foreground"]'),Mr=e=>e.querySelector('[data-annotation-text-overlay-text-echo="true"]'),Xn=(e,n)=>{const t=qr(e),a=Mr(e);t&&t.textContent!==n&&(t.textContent=n),a&&a.textContent!==n&&(a.textContent=n)},ke=(e,n)=>{Object.assign(e.style,n)},Qe=Object.freeze({className:"carma-annotation-overlay-line-label",frameClassName:"carma-annotation-overlay-line-label__frame"}),Br=Object.freeze({direct:{},vertical:{labelOffsetPx:D.lineLabelOffsetPx,labelFlippedBaselineOffsetPx:se.verticalFlippedBaselineOffsetPx,labelRotationMode:Mt.CLOCKWISE},horizontal:{labelOffsetPx:se.horizontalLabelOffsetPx}}),An=(e,n)=>{const t=document.createElement(e);return t.className=n,t},_r=e=>e.querySelector(`.${Qe.frameClassName}`),wr=e=>{const n=e.dataset.annotationOverlayLineLabelShortEdgeOffsetPx,t=n?Number(n):Number.NaN;return Number.isFinite(t)?t:M.layout.shortEdgeOffsetPx},Yn=e=>e.dataset.annotationOverlayLineLabelKind==="vertical"||e.dataset.annotationOverlayLineLabelKind==="horizontal"?e.dataset.annotationOverlayLineLabelKind:"direct",Fr=e=>Yn(e)==="vertical",Dr=({kind:e,outsideReferencePoint:n,anchorRatio:t})=>({...Br[e],anchorRatio:t===void 0?void 0:_t(t),getLabelOutsideReferencePoint:n?()=>({x:n.x,y:n.y}):void 0}),zr=({x:e,y:n,angleRad:t,anchor:a})=>`translate(${Math.round(e)}px, ${Math.round(n)}px) ${a==="left"?"translate(0%, -50%)":a==="right"?"translate(-100%, -50%)":"translate(-50%, -50%)"} rotate(${t}rad)`,Hr=(e,n,t=ua.LABEL)=>{const a=pa(e,t);if(!a)return null;const r=document.createElement("div");return r.id=n,r.dataset.annotationOverlayLayer="true",ke(r,{position:"absolute",inset:"0",overflow:"hidden",pointerEvents:"none",userSelect:"none",webkitUserSelect:"none",zIndex:"auto"}),a.appendChild(r),r},Co=Hr,jr=e=>{e==null||e.remove()},fo=jr,No=e=>{const n=new $t,t=n.update.bind(n);return n.update=a=>{if(!(a.passes.pick&&!a.passes.render))return t(a)},e.primitives.add(n),n},xo=(e,n)=>{if(!(!n||!aa(e)))try{if(typeof n.isDestroyed=="function"&&n.isDestroyed())return;e.primitives.remove(n)}catch{}},Kn=e=>Wt.fromType("Color",{color:cn.fromCssColorString(e)??cn.WHITE}),bo=(e,n,t,a)=>({polyline:e.add({id:n,positions:[y.ZERO,y.ZERO],width:(a==null?void 0:a.width)??D.lineStrokeWidthPx,material:Kn(t),show:!1}),colorCss:t}),So=(e,n)=>{e.colorCss!==n&&(e.polyline.material=Kn(n),e.colorCss=n)},ho=e=>{e.polyline.show=!1},vo=(e,n)=>{e.polyline.positions=[...n],e.polyline.show=n.length>=2},_e=(e,n)=>{const t=rn(n),a=An("div",Qe.className),r=An("div",Qe.frameClassName),o=Vn({accentColor:e,visualOptions:t});return a.dataset.annotationOverlayLineLabelShortEdgeOffsetPx=String(t.layout.shortEdgeOffsetPx),r.append(o),a.appendChild(r),a},To=e=>{const n=rn(e),t=_e(b.colors.componentLabelAccents.direct,n);t.dataset.annotationOverlayLineLabelKind="direct";const a=_e(b.colors.componentLabelAccents.vertical,n);a.dataset.annotationOverlayLineLabelKind="vertical";const r=_e(b.colors.componentLabelAccents.horizontal,n);return r.dataset.annotationOverlayLineLabelKind="horizontal",{direct:t,vertical:a,horizontal:r}},kn=(e,n)=>{if(!(n!=null&&n.screenPosition)){e.style.display="none";return}Xn(e,n.text),e.style.display="inline-grid",e.style.transform=`translate(${Math.round(n.screenPosition.x)}px, ${Math.round(n.screenPosition.y)}px) translate(-50%, -50%)`},Io=({overlayLayer:e,accentColor:n,visualOptions:t})=>{const a=Vn({accentColor:n,visualOptions:rn(t),styleOptions:Lr});return a.dataset.annotationOverlayLineLabelKind="area",ke(a,{position:"absolute",left:"0",top:"0",display:"none",willChange:"transform"}),e==null||e.appendChild(a),{setState:r=>kn(a,r),clear:()=>kn(a,null),destroy:()=>a.remove()}},Ao=e=>{e.direct.style.display="none",e.vertical.style.display="none",e.horizontal.style.display="none"},Zn=(e,n)=>{ke(e,{width:`${n.pixelSize}px`,height:`${n.pixelSize}px`,border:`${n.outlineWidth}px solid ${n.outline}`,background:n.fill})},$r=(e=Gn.point)=>{const n=document.createElement("div");return ke(n,{position:"absolute",left:"0",top:"0",display:"none",borderRadius:"999px",transform:"translate(-50%, -50%)",boxSizing:"border-box",pointerEvents:"none",userSelect:"none",webkitUserSelect:"none",willChange:"transform"}),Zn(n,e),n},Wr=({overlayLayer:e,pointMarkers:n,count:t,style:a})=>{for(;n.length<t;){const r=$r(a);n.push(r),e.appendChild(r)}},ko=e=>{e.forEach(n=>{n.style.display="none"})},Eo=({scene:e,overlayLayer:n,pointMarkers:t,coordinates:a,style:r=Gn.point})=>{Wr({overlayLayer:n,pointMarkers:t,count:a.length,style:r}),a.forEach((o,i)=>{const s=t[i];if(!s)return;Zn(s,r);const u=ra.worldToWindowCoordinates(e,We(o));if(!Gt(u)){s.style.display="none";return}s.style.display="block",s.style.transform=`translate(${Math.round(u.x)}px, ${Math.round(u.y)}px) translate(-50%, -50%)`}),t.slice(a.length).forEach(o=>{o.style.display="none"})},Gr=e=>_n(e>J||e<-J?e+ye:e),Ur=e=>{let n=_n(e);return n>J?n=n-ye:n<-J&&(n=n+ye),n},Vr=({angleRad:e,lineSide:n})=>Math.abs(Math.abs(e)-J)>se.verticalBaselineAngleEpsilonRad?e:n==="left"?J:-J,Xr=({deltaX:e,deltaY:n,lineSide:t,flipReadingDirection:a,forceHorizontal:r})=>{if(r)return 0;const o=Gr(Math.atan2(n,e)),i=a?o>=0?o-ye:o+ye:o;return Vr({angleRad:Ur(i),lineSide:t})},Yr=({start:e,end:n,kind:t,outsideReferencePoint:a,shortEdgeOffsetPx:r=M.layout.shortEdgeOffsetPx,useShortEdgeRules:o=!0,flipReadingDirection:i=!1,previousShouldFlip:s=!1,anchorRatio:u})=>{const l=Bt({svgLine:{start:{x:e.x,y:e.y},end:{x:n.x,y:n.y}},options:Dr({kind:t,outsideReferencePoint:a,anchorRatio:u}),previousShouldFlip:s,sideSwitchThresholdPx:se.sideHysteresisPx});if(!l)return null;const c=n.x-e.x,d=n.y-e.y;if(o&&l.lineLengthPx<D.lineLabelMinLengthPx){const p=l.normalX>=0,m=p?"left":"right";return{x:l.midX+l.normalX*r,y:l.midY+l.normalY*r,angleRad:Xr({deltaX:c,deltaY:d,lineSide:m,flipReadingDirection:i,forceHorizontal:!0}),anchor:p?"left":"right",anchorRatio:l.anchorRatio,isShortEdge:!0,shouldFlip:l.shouldFlip,normalX:l.normalX,normalY:l.normalY}}return{x:l.textX,y:l.textY,angleRad:l.angleRad,anchor:"center",anchorRatio:l.anchorRatio,isShortEdge:!1,shouldFlip:l.shouldFlip,normalX:l.normalX,normalY:l.normalY}},Lo=({element:e,text:n,start:t,end:a,outsideReferencePoint:r,flipReadingDirection:o=!1,anchorRatio:i})=>{const s=Yr({start:t,end:a,kind:Yn(e),outsideReferencePoint:r,shortEdgeOffsetPx:wr(e),useShortEdgeRules:Fr(e),flipReadingDirection:o,anchorRatio:i,previousShouldFlip:e.dataset.annotationOverlayLineLabelNormalFlip==="1"});if(!s){e.style.display="none";return}Xn(e,n),e.style.display="block";const u=_r(e),l=!s.isShortEdge&&s.normalY<-se.upperSideGapNormalYEpsilon&&u?u.getBoundingClientRect().height*se.upperSideGapFactor:0,c=s.x+s.normalX*l,d=s.y+s.normalY*l;e.dataset.annotationOverlayLineLabelShortEdge=s.isShortEdge?"true":"false",e.dataset.annotationOverlayLineLabelAnchorRatio=`${s.anchorRatio}`,e.dataset.annotationOverlayLineLabelNormalFlip=s.shouldFlip?"1":"0",e.style.transform=zr({...s,x:c,y:d})},Kr=e=>Math.min(D.labelReferenceMaxDistancePx,Math.max(D.labelReferenceMinDistancePx,e)),we=({start:e,end:n,insidePoint:t,previousOutsideSign:a})=>{const r=n.x-e.x,o=n.y-e.y,i=Math.hypot(r,o);if(!Number.isFinite(i)||i<=D.labelReferenceLineLengthEpsilonPx)return null;const s=(e.x+n.x)*.5,u=(e.y+n.y)*.5,l=-o/i,c=r/i,d=(t.x-s)*l+(t.y-u)*c,p=d>=0?-1:1,m=a&&a!==p&&Math.abs(d)<D.labelSideSwitchThresholdPx?a:p,C=Kr(i*D.labelReferenceDistanceFactor);return{outsideSign:m,referencePoint:{x:s+l*m*C,y:u+c*m*C}}},Ro=({anchor:e,target:n,aux:t,anchorAltitudeMeters:a,targetAltitudeMeters:r,previousVerticalOutsideSign:o})=>{const i={x:e.x,y:e.y},s={x:n.x,y:n.y},u={x:t.x,y:t.y},l=a>=r?i:s,c={anchor:i,target:s,aux:u,highest:l,centroid:{x:(i.x+s.x+u.x)/3,y:(i.y+s.y+u.y)/3}},d=Za({triangle:c,auxiliaryAltitudeMeters:r,highestAltitudeMeters:Math.max(a,r),insideBlendFactor:D.labelReferenceInsideBlendFactor}),p=we({start:i,end:s,insidePoint:d}),m=we({start:u,end:s,insidePoint:d}),C=we({start:i,end:u,insidePoint:s,previousOutsideSign:o});return{directOutsideReferencePoint:(p==null?void 0:p.referencePoint)??null,verticalOutsideReferencePoint:(C==null?void 0:C.referencePoint)??null,horizontalOutsideReferencePoint:(m==null?void 0:m.referencePoint)??null,nextVerticalOutsideSign:C==null?void 0:C.outsideSign}},Po=({directLabelText:e,verticalLabelText:n,horizontalLabelText:t})=>({showVerticalLabel:n!==null&&n!==e,showHorizontalLabel:t!==null&&t!==e}),Oo=()=>({cartographicA:new $e,cartographicB:new $e,auxiliaryPoint:new y,auxiliaryScreen:new Ut}),qo=({scene:e,anchorPointECEF:n,targetPointECEF:t,scratch:a})=>{const r=e.globe.ellipsoid,o=r.cartesianToCartographic(n,a.cartographicA),i=r.cartesianToCartographic(t,a.cartographicB);return!o||!i?null:y.fromRadians(o.longitude,o.latitude,i.height??0,r,a.auxiliaryPoint)},Mo=e=>{const n=cr(e);return{longitude:n.longitude,latitude:n.latitude,altitude:ur(n.altitude)}},Bo=({firstCorner:e,oppositeCorner:n})=>{const t=We(e),a=We(n),r=Wn(t,a);return r?[t,r.adjacentHorizontalCorner,a,r.adjacentVerticalCorner,t]:null},Zr=Object.freeze({longPressDurationMs:320}),Jr=({interactive:e,onClick:n,onHoverChange:t,onLongPress:a,longPressDurationMs:r=Zr.longPressDurationMs,markerStyle:o})=>{const[i,s]=T.useState(!1),u=T.useRef(void 0),l=T.useRef(!1),c=T.useCallback(()=>{u.current!==void 0&&(window.clearTimeout(u.current),u.current=void 0)},[]),d=T.useCallback(I=>{if(I.stopPropagation(),I.button!==0||!a){c();return}l.current=!1,c(),u.current=window.setTimeout(()=>{l.current=!0,a()},r)},[c,r,a]),p=T.useCallback(()=>{c()},[c]),m=T.useCallback(I=>{if(I.stopPropagation(),l.current){l.current=!1;return}n==null||n()},[n]),C=T.useCallback(()=>{s(!0),t==null||t(!0)},[t]),f=T.useCallback(()=>{c(),s(!1),t==null||t(!1)},[c,t]);return T.useEffect(()=>c,[c]),g.jsx("div",{"data-runtime-point-marker-shell":"true",style:{position:"relative",width:"0px",height:"0px",overflow:"visible",pointerEvents:"none"},children:g.jsx("div",{"data-runtime-point-marker-circle":"true",style:{position:"absolute",left:"0px",top:"0px",transform:i?`translate(-50%, -50%) scale(${Bn.hover.scale})`:"translate(-50%, -50%)",borderRadius:"999px",boxSizing:"border-box",pointerEvents:e?"auto":"none",cursor:e?"pointer":"default",transition:wt(),boxShadow:i?Ft():"none",filter:i?Dt():"none",...o},onClick:e?m:void 0,onMouseDown:e?d:void 0,onMouseUp:e?p:void 0,onMouseEnter:e?C:void 0,onMouseLeave:e?f:void 0})})};Jr.__docgenInfo={description:"",methods:[],displayName:"PointMarkerOverlayShell",props:{interactive:{required:!0,tsType:{name:"boolean"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onHoverChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(hovered: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"hovered"}],return:{name:"void"}}},description:""},onLongPress:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},longPressDurationMs:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"pointMarkerVisualizerDefaults.longPressDurationMs",computed:!0}},markerStyle:{required:!1,tsType:{name:"CSSProperties"},description:""}}};const _o={RIGHTMOST_SCREEN_SPACE:"rightmost-screen-space",LEFTMOST_SCREEN_SPACE:"leftmost-screen-space"},wo={START_COORDINATE:"start-coordinate",END_COORDINATE:"end-coordinate"},Fo={POINT_LABEL:"point-label",LINE_BLEND:"line-blend"},Do={GROUND:"ground",COPLANAR:"coplanar"},Qr={MIN:1,MAX:1400,LOG_SCALE:64};Object.freeze({layoutConfig:ia(void 0),markerPixelSize:10,markerOutlineWidth:b.sizes.pointOutlineWidth,stemColor:b.colors.surface,activeMoveGizmoLabelZIndex:Qr.MAX+1});Object.freeze({...zt({markerDiameterPx:b.sizes.pointPixelSize,markerStrokeWidthPx:b.sizes.pointOutlineWidth}),tickColor:Bn.colors.surfaceStrong,minOverlayZIndex:Ht.zIndex.interactionHandleFloor});Object.freeze({cornerOverlay:Object.freeze({minBoxPx:20,paddingPx:6,targetRadiusPx:20,segments:20,strokeWidthPx:1.25,color:nr(),straightHitTargetPx:20})});function de(e,n,t){e.prototype=n.prototype=t,t.constructor=e}function Ne(e,n){var t=Object.create(e.prototype);for(var a in n)t[a]=n[a];return t}function G(){}var ee=.7,le=1/ee,ei=/^#([0-9a-f]{3})$/,ni=/^#([0-9a-f]{6})$/,ti=/^rgb\(\s*([-+]?\d+)\s*,\s*([-+]?\d+)\s*,\s*([-+]?\d+)\s*\)$/,ai=/^rgb\(\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*\)$/,ri=/^rgba\(\s*([-+]?\d+)\s*,\s*([-+]?\d+)\s*,\s*([-+]?\d+)\s*,\s*([-+]?\d+(?:\.\d+)?)\s*\)$/,ii=/^rgba\(\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)\s*\)$/,oi=/^hsl\(\s*([-+]?\d+(?:\.\d+)?)\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*\)$/,si=/^hsla\(\s*([-+]?\d+(?:\.\d+)?)\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)\s*\)$/,En={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};de(G,on,{displayable:function(){return this.rgb().displayable()},toString:function(){return this.rgb()+""}});function on(e){var n;return e=(e+"").trim().toLowerCase(),(n=ei.exec(e))?(n=parseInt(n[1],16),new A(n>>8&15|n>>4&240,n>>4&15|n&240,(n&15)<<4|n&15,1)):(n=ni.exec(e))?Ln(parseInt(n[1],16)):(n=ti.exec(e))?new A(n[1],n[2],n[3],1):(n=ai.exec(e))?new A(n[1]*255/100,n[2]*255/100,n[3]*255/100,1):(n=ri.exec(e))?Rn(n[1],n[2],n[3],n[4]):(n=ii.exec(e))?Rn(n[1]*255/100,n[2]*255/100,n[3]*255/100,n[4]):(n=oi.exec(e))?Pn(n[1],n[2]/100,n[3]/100,1):(n=si.exec(e))?Pn(n[1],n[2]/100,n[3]/100,n[4]):En.hasOwnProperty(e)?Ln(En[e]):e==="transparent"?new A(NaN,NaN,NaN,0):null}function Ln(e){return new A(e>>16&255,e>>8&255,e&255,1)}function Rn(e,n,t,a){return a<=0&&(e=n=t=NaN),new A(e,n,t,a)}function sn(e){return e instanceof G||(e=on(e)),e?(e=e.rgb(),new A(e.r,e.g,e.b,e.opacity)):new A}function Jn(e,n,t,a){return arguments.length===1?sn(e):new A(e,n,t,a??1)}function A(e,n,t,a){this.r=+e,this.g=+n,this.b=+t,this.opacity=+a}de(A,Jn,Ne(G,{brighter:function(e){return e=e==null?le:Math.pow(le,e),new A(this.r*e,this.g*e,this.b*e,this.opacity)},darker:function(e){return e=e==null?ee:Math.pow(ee,e),new A(this.r*e,this.g*e,this.b*e,this.opacity)},rgb:function(){return this},displayable:function(){return 0<=this.r&&this.r<=255&&0<=this.g&&this.g<=255&&0<=this.b&&this.b<=255&&0<=this.opacity&&this.opacity<=1},toString:function(){var e=this.opacity;return e=isNaN(e)?1:Math.max(0,Math.min(1,e)),(e===1?"rgb(":"rgba(")+Math.max(0,Math.min(255,Math.round(this.r)||0))+", "+Math.max(0,Math.min(255,Math.round(this.g)||0))+", "+Math.max(0,Math.min(255,Math.round(this.b)||0))+(e===1?")":", "+e+")")}}));function Pn(e,n,t,a){return a<=0?e=n=t=NaN:t<=0||t>=1?e=n=NaN:n<=0&&(e=NaN),new _(e,n,t,a)}function li(e){if(e instanceof _)return new _(e.h,e.s,e.l,e.opacity);if(e instanceof G||(e=on(e)),!e)return new _;if(e instanceof _)return e;e=e.rgb();var n=e.r/255,t=e.g/255,a=e.b/255,r=Math.min(n,t,a),o=Math.max(n,t,a),i=NaN,s=o-r,u=(o+r)/2;return s?(n===o?i=(t-a)/s+(t<a)*6:t===o?i=(a-n)/s+2:i=(n-t)/s+4,s/=u<.5?o+r:2-o-r,i*=60):s=u>0&&u<1?0:i,new _(i,s,u,e.opacity)}function ui(e,n,t,a){return arguments.length===1?li(e):new _(e,n,t,a??1)}function _(e,n,t,a){this.h=+e,this.s=+n,this.l=+t,this.opacity=+a}de(_,ui,Ne(G,{brighter:function(e){return e=e==null?le:Math.pow(le,e),new _(this.h,this.s,this.l*e,this.opacity)},darker:function(e){return e=e==null?ee:Math.pow(ee,e),new _(this.h,this.s,this.l*e,this.opacity)},rgb:function(){var e=this.h%360+(this.h<0)*360,n=isNaN(e)||isNaN(this.s)?0:this.s,t=this.l,a=t+(t<.5?t:1-t)*n,r=2*t-a;return new A(Fe(e>=240?e-240:e+120,r,a),Fe(e,r,a),Fe(e<120?e+240:e-120,r,a),this.opacity)},displayable:function(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1}}));function Fe(e,n,t){return(e<60?n+(t-n)*e/60:e<180?t:e<240?n+(t-n)*(240-e)/60:n)*255}var Qn=Math.PI/180,et=180/Math.PI,Ae=18,nt=.95047,tt=1,at=1.08883,rt=4/29,oe=6/29,it=3*oe*oe,di=oe*oe*oe;function ln(e){if(e instanceof F)return new F(e.l,e.a,e.b,e.opacity);if(e instanceof j){var n=e.h*Qn;return new F(e.l,Math.cos(n)*e.c,Math.sin(n)*e.c,e.opacity)}e instanceof A||(e=sn(e));var t=je(e.r),a=je(e.g),r=je(e.b),o=De((.4124564*t+.3575761*a+.1804375*r)/nt),i=De((.2126729*t+.7151522*a+.072175*r)/tt),s=De((.0193339*t+.119192*a+.9503041*r)/at);return new F(116*i-16,500*(o-i),200*(i-s),e.opacity)}function ci(e,n,t,a){return arguments.length===1?ln(e):new F(e,n,t,a??1)}function F(e,n,t,a){this.l=+e,this.a=+n,this.b=+t,this.opacity=+a}de(F,ci,Ne(G,{brighter:function(e){return new F(this.l+Ae*(e??1),this.a,this.b,this.opacity)},darker:function(e){return new F(this.l-Ae*(e??1),this.a,this.b,this.opacity)},rgb:function(){var e=(this.l+16)/116,n=isNaN(this.a)?e:e+this.a/500,t=isNaN(this.b)?e:e-this.b/200;return e=tt*ze(e),n=nt*ze(n),t=at*ze(t),new A(He(3.2404542*n-1.5371385*e-.4985314*t),He(-.969266*n+1.8760108*e+.041556*t),He(.0556434*n-.2040259*e+1.0572252*t),this.opacity)}}));function De(e){return e>di?Math.pow(e,1/3):e/it+rt}function ze(e){return e>oe?e*e*e:it*(e-rt)}function He(e){return 255*(e<=.0031308?12.92*e:1.055*Math.pow(e,1/2.4)-.055)}function je(e){return(e/=255)<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)}function mi(e){if(e instanceof j)return new j(e.h,e.c,e.l,e.opacity);e instanceof F||(e=ln(e));var n=Math.atan2(e.b,e.a)*et;return new j(n<0?n+360:n,Math.sqrt(e.a*e.a+e.b*e.b),e.l,e.opacity)}function gi(e,n,t,a){return arguments.length===1?mi(e):new j(e,n,t,a??1)}function j(e,n,t,a){this.h=+e,this.c=+n,this.l=+t,this.opacity=+a}de(j,gi,Ne(G,{brighter:function(e){return new j(this.h,this.c,this.l+Ae*(e??1),this.opacity)},darker:function(e){return new j(this.h,this.c,this.l-Ae*(e??1),this.opacity)},rgb:function(){return ln(this).rgb()}}));var ot=-.14861,un=1.78277,dn=-.29227,Ee=-.90649,fe=1.97294,On=fe*Ee,qn=fe*un,Mn=un*dn-Ee*ot;function pi(e){if(e instanceof Q)return new Q(e.h,e.s,e.l,e.opacity);e instanceof A||(e=sn(e));var n=e.r/255,t=e.g/255,a=e.b/255,r=(Mn*a+On*n-qn*t)/(Mn+On-qn),o=a-r,i=(fe*(t-r)-dn*o)/Ee,s=Math.sqrt(i*i+o*o)/(fe*r*(1-r)),u=s?Math.atan2(i,o)*et-120:NaN;return new Q(u<0?u+360:u,s,r,e.opacity)}function yi(e,n,t,a){return arguments.length===1?pi(e):new Q(e,n,t,a??1)}function Q(e,n,t,a){this.h=+e,this.s=+n,this.l=+t,this.opacity=+a}de(Q,yi,Ne(G,{brighter:function(e){return e=e==null?le:Math.pow(le,e),new Q(this.h,this.s,this.l*e,this.opacity)},darker:function(e){return e=e==null?ee:Math.pow(ee,e),new Q(this.h,this.s,this.l*e,this.opacity)},rgb:function(){var e=isNaN(this.h)?0:(this.h+120)*Qn,n=+this.l,t=isNaN(this.s)?0:this.s*n*(1-n),a=Math.cos(e),r=Math.sin(e);return new A(255*(n+t*(ot*a+un*r)),255*(n+t*(dn*a+Ee*r)),255*(n+t*(fe*a)),this.opacity)}}));const st=Jn(v.ACCENT_MEASUREMENTS).brighter(.1);st.opacity=.5;const lt=tr(),Ci=Object.freeze({backgroundColor:bn("background"),hoverBackgroundColor:bn("hoverBackground"),textColor:lt,glowColor:ve(1),glowRadiusPx:5,preserveFillOnSelection:!0}),fi=Object.freeze({id:"accent-measurements",label:"Measurements · Accent",colorPrimaryReduced:st.toString(),colorPrimary:v.ACCENT_MEASUREMENTS,lineColor:b.colors.surface,textColor:lt}),E=Object.freeze({scheme:fi,fontFamily:ie.fontFamily,contentFontWeight:ie.lineLabelFontWeight,badgeFontWeight:ie.badgeFontWeight,selection:Ci}),zo=e=>E,Ho=Object.freeze({fontSize:ie.rootFontSizeRem,fontFamily:E.fontFamily,fontWeight:E.contentFontWeight,lineColor:E.scheme.lineColor,textBackgroundColor:E.scheme.colorPrimaryReduced,textColor:E.scheme.textColor,markerBackgroundColor:E.scheme.colorPrimary,markerTextColor:E.scheme.textColor,selectedBackgroundColor:E.selection.backgroundColor,selectedTextColor:E.selection.textColor,selectedGlowColor:E.selection.glowColor,selectedGlowRadiusPx:E.selection.glowRadiusPx,preserveFillOnSelection:E.selection.preserveFillOnSelection,hoverBackgroundColor:E.selection.hoverBackgroundColor,markerPixelSize:b.sizes.pointPixelSize,markerOutlineWidth:b.sizes.pointOutlineWidth});T.createContext(null);export{qo as $,$a as A,bo as B,ue as C,Xa as D,Ka as E,Na as F,Ga as G,Va as H,or as I,ir as J,sr as K,Hr as L,jr as M,Do as N,ua as O,Xi as P,wo as Q,_o as R,Co as S,fo as T,ko as U,Eo as V,Yi as W,go as X,er as Y,Io as Z,Gi as _,B as a,Oo as a0,rn as a1,_e as a2,Bo as a3,Mo as a4,Ki as a5,Hi as a6,Wa as a7,vr as a8,Tr as a9,Jr as aA,po as aa,yo as ab,Fo as ac,Gn as ad,cr as ae,ur as af,Vi as ag,E as ah,ne as ai,ji as aj,$i as ak,Wi as al,Z as am,Zi as an,K as ao,Ho as ap,Ui as aq,z as ar,mo as as,oo as at,no as au,ar as av,Ja as aw,Wn as ax,Jn as ay,on as az,te as b,ya as c,Ci as d,Je as e,kr as f,lt as g,qe as h,k as i,Lo as j,Er as k,M as l,b as m,To as n,Ao as o,D as p,Ro as q,zo as r,Po as s,ie as t,N as u,xo as v,ho as w,So as x,vo as y,No as z};
