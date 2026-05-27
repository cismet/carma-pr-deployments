import{j as C}from"./jsx-runtime-DCY474Ph.js";import{F as Le,r as Fn,s as _n,t as zn,u as Dn,v as Hn,w as jn,x as $n,y as Vn,z as Wn,A as Un}from"./index-BrmODtEK.js";import{r as h}from"./index-f9CH5uyH.js";import{T as Gn}from"./ua-parser-B48uBFyz.js";import{f as Ce,C as S,r as Yn}from"./index-B4PKD6xO.js";import"./index-o4jIgCFn.js";import{n as Xn,o as Kn,S as Zn,p as Jn,f as Qn,q as un,s as et,t as nt,v as tt,w as at,l as rt}from"./useLineSegmentVisualizers-CBvdP-rK.js";import{a as p,p as Ee,a3 as it,j as ot,k as st,b as Ve,h as lt,i as ut}from"./Elevation-ayWRDRsq.js";import{c as dt,a as ct,b as mt,d as gt}from"./useCesiumPointMoveGizmo-BhGDKwWM.js";import"./useCesiumFovWheelZoom-DkJFUV9B.js";import"./maplibre-gl-DqKvp_Oy.js";import"./geodetic-BlUMYLim.js";import{c as pt}from"./clamp-co6UzHBn.js";import{e as yt,h as Ct,i as ft,s as Nt,f as bt}from"./geometry2d-DQa1xX1M.js";import{i as vt}from"./carma-guards-BmMHTcWi.js";import{n as dn}from"./angle-normalization-BAbnbuFS.js";import{c as We,P as Y,b as oe}from"./angles-T4rDf7Ka.js";import{c as Re}from"./CoordinateAdapters-Cv_28Sc3.js";/* empty css                                      */import{S as xt}from"./Scene-Ce7d8PtI.js";import{r as St}from"./config-BkpyF_ya.js";import"./annotation-cursor-overlay-style-i_TGNx6u.js";import"./svgProjection-DC0AVwLB.js";const ge={LABEL:"label",VISUALIZER:"visualizer"},ht=ge,Pe=e=>`[${e}="true"]`,Ue="data-annotation-label-overlay-root",Ge="data-annotation-visualizer-overlay-root",cn="data-annotation-visualizer-overlay-container",Tt=Pe(cn),It=Object.freeze({[ge.LABEL]:{rootAttribute:Ue,containerAttribute:Xn,rootSelector:Pe(Ue),containerSelector:Kn},[ge.VISUALIZER]:{rootAttribute:Ge,containerAttribute:cn,rootSelector:Pe(Ge),containerSelector:Tt}}),kt=e=>It[e],At=(e,n=ge.LABEL)=>{var i,l;const{rootSelector:t,containerSelector:a}=kt(n);let r=e.canvas.parentElement,s=r;for(;r;){if(r.matches(a))return r;const u=(i=r.querySelector)==null?void 0:i.call(r,a);if(u instanceof HTMLElement)return u;if(r.matches(t))return r;const o=(l=r.querySelector)==null?void 0:l.call(r,t);if(o instanceof HTMLElement)return o;s=r,r=r.parentElement}return s},Lt=At,P={FLY_TO:"flyTo",EXPORT:"export",VISIBILITY:"visibility",REFERENCE:"reference",LOCK:"lock",DELETE:"delete"},M=(()=>{const e="1rem",n="0.8571rem",t="1rem";return Object.freeze({rootFontSizeRem:e,supportFontSizeRem:n,headingFontSizeRem:t,headingFontWeight:600,headingTypographyClassName:`text-[${n}] font-semibold tracking-[0.03em]`,titleTypographyClassName:`text-[${t}] font-semibold leading-[1.25]`})})(),q=Object.freeze({borderRadiusRem:"0.2143rem",hairlineBorderWidthRem:"0.0357rem",panelInsetShadowYOffsetRem:"0.0714rem",panelInsetShadowBlurRem:"0.0714rem",panelBackdropBlurRem:"0.1429rem"}),b=Object.freeze({heading:S.ACCENT_MEASUREMENTS,panelSurface:S.NEUTRAL_SURFACE_SUBTLE,panelBorder:S.NEUTRAL_BORDER_SUBTLE,shadowBase:S.NEUTRAL_BLACK,bodyText:S.NEUTRAL_TEXT_PRIMARY,mutedText:S.NEUTRAL_TEXT_MUTED,linkText:S.WUPP_BLUE,fieldText:S.NEUTRAL_TEXT_STRONG,fieldBorder:S.NEUTRAL_BORDER_DEFAULT,fieldInputBorder:S.NEUTRAL_BORDER_INPUT,fieldFocusBackground:S.STATE_FOCUS_BACKGROUND_WARM,fieldFocusOutline:S.STATE_FOCUS_OUTLINE,titleText:S.NEUTRAL_TEXT_STRONG}),fe=Object.freeze({panelSurface:.9,panelBorder:.9,panelInsetShadow:.02}),Et=Object.freeze({defaultPixelWidth:430,headingColor:b.heading,bodyPanelStyle:{backgroundColor:Ce(b.panelSurface,fe.panelSurface),border:`${q.hairlineBorderWidthRem} solid ${Ce(b.panelBorder,fe.panelBorder)}`,boxShadow:`${Ce(b.shadowBase,fe.panelInsetShadow)} 0 ${q.panelInsetShadowYOffsetRem} ${q.panelInsetShadowBlurRem} inset`,backdropFilter:`blur(${q.panelBackdropBlurRem})`,WebkitBackdropFilter:`blur(${q.panelBackdropBlurRem})`},resolveActionTooltipPopupContainer:e=>e.closest('[data-test-id="annotation-info-box"]')??e.ownerDocument.body,headerForegroundClassName:"text-white/80",headerTitleClassName:`truncate ${M.headingTypographyClassName}`,subtitleContainerClassName:"mb-0 w-full px-2 pt-[0.28em]",subtitleTextStyle:{color:S.ACCENT_NEUTRALS},subtitleTextClassName:`px-2 text-[${M.supportFontSizeRem}] leading-[1.1] font-semibold`,subtitleMetaTextStyle:{color:S.ACCENT_NEUTRALS},subtitleMetaTextClassName:`mt-[0.08em] whitespace-nowrap text-[${M.supportFontSizeRem}] leading-[1.1] font-semibold`,showSubtitleMetaText:!0,bodyContainerClassName:"px-2 pb-2 pt-1",bodyTextStyle:{fontSize:M.rootFontSizeRem,lineHeight:1.4,color:b.bodyText},bodyTextClassName:`text-[${M.rootFontSizeRem}] leading-[1.4] text-[${b.bodyText}]`,emptyContentLineStyle:{minHeight:"1.4em"},emptyContentLineClassName:"w-full",mutedTextClassName:`text-[${b.mutedText}]`,linkTextClassName:`text-[${b.linkText}]`,actionIconClassName:"transition-colors",actionIconColor:S.ACCENT_NEUTRALS,actionIconHoverColor:S.ACCENT_NEUTRALS_HOVER,actionIconFontSize:"16px",hiddenActionIds:[],fieldTextClassName:`text-[${b.fieldText}]`,fieldBorderClassName:`border-[${q.hairlineBorderWidthRem}] border-[${b.fieldBorder}]`,fieldInputBorderClassName:`border-[${q.hairlineBorderWidthRem}] border-[${b.fieldInputBorder}]`,fieldFocusBackgroundClassName:`focus:bg-[${b.fieldFocusBackground}]`,fieldFocusOutlineClassName:`focus:outline focus:outline-2 focus:outline-[${b.fieldFocusOutline}]`,subtleFieldBackgroundClassName:"bg-white/85",titleTextStyle:{fontSize:M.headingFontSizeRem,fontWeight:M.headingFontWeight,lineHeight:1.25},titleTextClassName:`text-[${b.titleText}]/80 ${M.titleTypographyClassName}`,titleInputClassName:`min-w-0 w-auto max-w-full appearance-none [field-sizing:content] break-words rounded-[${q.borderRadiusRem}] border border-transparent bg-transparent px-0 py-[0.05em] text-[${b.titleText}]/80 placeholder:text-[${b.titleText}]/50 focus:bg-[${b.fieldFocusBackground}] focus:outline focus:outline-2 focus:outline-[${b.fieldFocusOutline}] ${M.titleTypographyClassName}`,shortLabelInputClassName:`shrink-0 w-auto appearance-none [field-sizing:content] border-[${q.hairlineBorderWidthRem}] px-[0.5ex] py-0 text-center tabular-nums border-[${b.fieldBorder}] bg-white/85 text-[${b.titleText}]/80 placeholder:text-[${b.titleText}]/80 focus:bg-[${b.fieldFocusBackground}] focus:outline focus:outline-2 focus:outline-[${b.fieldFocusOutline}] ${M.titleTypographyClassName}`,navigationInstructionContainerClassName:"mt-1 flex w-full items-center justify-center px-2 pt-1",navigationAvailabilityContainerClassName:"mt-1 flex w-full items-center justify-center px-2 pt-1",navigationSummaryContainerClassName:"mb-1 mt-0 flex w-full items-center justify-between px-2",navigationLinkFontSize:M.supportFontSizeRem,inlineFieldButtonClassName:`inline-flex h-5 w-5 items-center justify-center rounded border-[${q.hairlineBorderWidthRem}] border-[${b.fieldInputBorder}]`,colorInputClassName:`h-6 w-8 cursor-pointer rounded border-[${q.hairlineBorderWidthRem}] border-[${b.fieldInputBorder}] bg-transparent p-0`,inlineActionButtonClassName:`inline-flex items-center gap-1 rounded border-[${q.hairlineBorderWidthRem}] border-[${b.fieldInputBorder}] px-2 py-1`}),te=e=>({...Et,...e}),Rt=Object.freeze({tooltipZIndex:1700}),U=({actionId:e,title:n,icon:t,onClick:a,dataTestId:r,className:s,ariaLabel:i,disabled:l=!1,visualOptions:u})=>{var f;const o=te(u),[c,d]=h.useState(!1),g=`${o.actionIconClassName}${s?` ${s}`:""}${l?" cursor-not-allowed opacity-50":" cursor-pointer"}`,m={fontSize:o.actionIconFontSize,color:c&&!l?o.actionIconHoverColor:o.actionIconColor},y=(f=o.renderActionIcon)==null?void 0:f.call(o,{actionId:e,icon:t,className:g,style:m,dataTestId:r,ariaLabel:i,disabled:l});return C.jsx(Gn,{title:n,zIndex:Rt.tooltipZIndex,getPopupContainer:k=>{const T=k instanceof HTMLElement?k:document.body;return o.resolveActionTooltipPopupContainer(T)},children:C.jsx("span",{onClick:k=>{if(l){k.stopPropagation();return}a(k)},onMouseEnter:()=>d(!0),onMouseLeave:()=>d(!1),className:"inline-flex items-center leading-none","aria-label":i,"aria-disabled":l,children:y??C.jsx(Le,{className:g,style:m,icon:t,"data-test-id":r,"aria-hidden":i?void 0:!0})})})};U.__docgenInfo={description:"",methods:[],displayName:"AnnotationInfoBoxActionIcon",props:{actionId:{required:!0,tsType:{name:"unknown[union]",raw:"(typeof ANNOTATION_INFO_BOX_ACTION_IDS)[keyof typeof ANNOTATION_INFO_BOX_ACTION_IDS]"},description:""},title:{required:!0,tsType:{name:"string"},description:""},icon:{required:!0,tsType:{name:"IconDefinition"},description:""},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: ReactMouseEvent<HTMLElement, MouseEvent>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",elements:[{name:"HTMLElement"},{name:"MouseEvent"}],raw:"ReactMouseEvent<HTMLElement, MouseEvent>"},name:"event"}],return:{name:"void"}}},description:""},dataTestId:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},visualOptions:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};const Pt=Object.freeze({flyTo:"Zur Messung fliegen",exportGeoJson:"Als GeoJSON exportieren",show:"Einblenden",hide:"Ausblenden",setReference:"Als Referenzhöhe setzen",lock:"Sperren",unlock:"Entsperren",delete:"Löschen",deleteLocked:"Gesperrte Messung kann nicht gelöscht werden"}),qt=({hidden:e=!1,locked:n=!1,labels:t,onFlyTo:a,onExport:r,onToggleVisibility:s,onToggleLock:i,onDelete:l,onSetReference:u,visualOptions:o,dataTestIdPrefix:c,dataTestIds:d})=>{const g={...Pt,...t},m=new Set((o==null?void 0:o.hiddenActionIds)??[]),y=f=>!m.has(f);return C.jsxs("div",{className:"flex items-center gap-2",children:[y(P.FLY_TO)?C.jsx(U,{actionId:P.FLY_TO,title:g.flyTo,icon:Fn,onClick:a,dataTestId:(d==null?void 0:d.flyTo)??`${c}-flyto-btn`,visualOptions:o}):null,y(P.EXPORT)?C.jsx(U,{actionId:P.EXPORT,title:g.exportGeoJson,icon:_n,onClick:r,dataTestId:(d==null?void 0:d.export)??`${c}-export-geojson-btn`,visualOptions:o}):null,y(P.VISIBILITY)?C.jsx(U,{actionId:P.VISIBILITY,title:e?g.show:g.hide,icon:e?zn:Dn,onClick:s,dataTestId:(d==null?void 0:d.visibility)??`${c}-toggle-visibility-btn`,visualOptions:o}):null,u&&y(P.REFERENCE)?C.jsx(U,{actionId:P.REFERENCE,title:g.setReference,icon:Hn,onClick:u,dataTestId:(d==null?void 0:d.reference)??`${c}-set-reference-btn`,visualOptions:o}):null,y(P.LOCK)?C.jsx(U,{actionId:P.LOCK,title:n?g.unlock:g.lock,icon:n?jn:$n,onClick:i,dataTestId:(d==null?void 0:d.lock)??`${c}-toggle-lock-btn`,visualOptions:o}):null,y(P.DELETE)?C.jsx(U,{actionId:P.DELETE,title:n?g.deleteLocked:g.delete,icon:Vn,onClick:l,dataTestId:(d==null?void 0:d.delete)??`${c}-delete-btn`,disabled:n,visualOptions:o}):null]})};qt.__docgenInfo={description:"",methods:[],displayName:"AnnotationInfoBoxActions",props:{hidden:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},locked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},labels:{required:!1,tsType:{name:"Partial",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};const Mt=({items:e,className:n,visualOptions:t})=>{const a=te(t),r=a.subtitleTextClassName.split(/\s+/).filter(s=>s.length>0&&!s.startsWith("px-")).join(" ");return C.jsx("dl",{className:`flex flex-wrap items-start tabular-nums${n?` ${n}`:""}`,style:{columnGap:"1.35rem",rowGap:"0.5rem"},children:e.map((s,i)=>C.jsxs("div",{className:"grid max-w-full min-w-[5rem] flex-[0_1_auto] grid-rows-[auto,auto] content-start items-start gap-y-[0.1em] text-left",children:[C.jsx("dt",{className:r,style:a.subtitleTextStyle,children:s.label}),C.jsx("dd",{className:"m-0 leading-[1.25]",children:s.value})]},s.id??i))})};Mt.__docgenInfo={description:"",methods:[],displayName:"AnnotationInfoBoxMetricGrid",props:{items:{required:!0,tsType:{name:"unknown"},description:""},className:{required:!1,tsType:{name:"string"},description:""},visualOptions:{required:!1,tsType:{name:"Partial",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Partial<AnnotationInfoBoxVisualOptions>"},description:""}}};const Ot=({children:e,className:n,style:t,visualOptions:a})=>{const r=te(a);return C.jsx("div",{className:`${r.subtitleMetaTextClassName}${n?` ${n}`:""}`,style:{...r.subtitleMetaTextStyle,...t},children:e})};Ot.__docgenInfo={description:"",methods:[],displayName:"AnnotationInfoBoxMetaText",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""},visualOptions:{required:!1,tsType:{name:"Partial",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Partial<AnnotationInfoBoxVisualOptions>"},description:""}}};const Bt=Object.freeze({measurementSingular:"Messung",measurementPlural:"Messungen",availableSuffix:"verfügbar",previousAriaLabel:"Vorherige Messung",nextAriaLabel:"Nächste Messung",counterSeparator:"von"}),Ye=(e,n)=>`${e} ${e===1?n.measurementSingular:n.measurementPlural} ${n.availableSuffix}`.trim(),wt=({totalEntries:e,currentIndex:n,instructionText:t,availabilityLabel:a,labels:r,onFlyToAllMeasurements:s,onPreviousMeasurement:i,onNextMeasurement:l,visualOptions:u})=>{var y,f;const o=te(u),c={...Bt,...r};if(e<=0&&!t)return null;const d={fontSize:o.navigationLinkFontSize,border:"none",background:"transparent",padding:0,userSelect:"none"},g=((y=o.navigationControlLabels)==null?void 0:y.previous)??C.jsx(Le,{icon:Wn}),m=((f=o.navigationControlLabels)==null?void 0:f.next)??C.jsx(Le,{icon:Un});return C.jsxs(C.Fragment,{children:[t?C.jsx("div",{className:`${o.navigationInstructionContainerClassName} ${o.mutedTextClassName}`,children:C.jsx("span",{children:t})}):null,e>0?C.jsx("div",{className:o.navigationAvailabilityContainerClassName,children:s?C.jsx("button",{type:"button",className:`${o.linkTextClassName} cursor-pointer`,onClick:s,style:{border:"none",background:"transparent",padding:0},children:a??Ye(e,c)}):C.jsx("span",{className:o.linkTextClassName,children:a??Ye(e,c)})}):null,e>0?C.jsxs("div",{className:o.navigationSummaryContainerClassName,children:[C.jsx("button",{type:"button",className:`renderAsLink cursor-pointer select-none ${o.linkTextClassName}`,onClick:i,"data-test-id":"switch-measurement-left",style:d,"aria-label":c.previousAriaLabel,children:g}),C.jsxs("span",{className:"mx-4",children:[n+1," ",c.counterSeparator," ",e]}),C.jsx("button",{type:"button",className:`renderAsLink cursor-pointer select-none ${o.linkTextClassName}`,onClick:l,"data-test-id":"switch-measurement-right",style:d,"aria-label":c.nextAriaLabel,children:m})]}):null]})};wt.__docgenInfo={description:"",methods:[],displayName:"AnnotationInfoBoxNavigation",props:{totalEntries:{required:!0,tsType:{name:"number"},description:""},currentIndex:{required:!0,tsType:{name:"number"},description:""},instructionText:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},availabilityLabel:{required:!1,tsType:{name:"ReactNode"},description:""},labels:{required:!1,tsType:{name:"Partial",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};const Ft=({children:e,className:n,style:t,visualOptions:a})=>{const r=te(a);return C.jsx("div",{className:`${r.bodyContainerClassName} ${r.bodyTextClassName}${n?` ${n}`:""}`,style:{...r.bodyTextStyle,...t},children:e})};Ft.__docgenInfo={description:"",methods:[],displayName:"AnnotationInfoBoxTextContent",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""},visualOptions:{required:!1,tsType:{name:"Partial",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Partial<AnnotationInfoBoxVisualOptions>"},description:""}}};const re=e=>e.trim(),B=Object.freeze({borderRadiusRem:"0.2143rem",shortLabelMaxLength:64,shortLabelWidthPaddingCh:.5,shortLabelMinWidthCh:2.5}),de=e=>re(e).slice(0,B.shortLabelMaxLength),_t=e=>e.slice(0,B.shortLabelMaxLength),zt=({value:e,placeholder:n,onCommit:t,shortLabelValue:a,shortLabelPlaceholder:r,onShortLabelCommit:s,visualOptions:i})=>{const l=te(i),[u,o]=h.useState(()=>re(e)),[c,d]=h.useState(()=>de(a??"")),g=h.useRef(null),m=h.useRef(null),y=B.shortLabelMaxLength+B.shortLabelWidthPaddingCh,f=Math.min(Math.max(re(c||r||"").length+B.shortLabelWidthPaddingCh,B.shortLabelMinWidthCh),y);h.useEffect(()=>{o(re(e))},[e]),h.useEffect(()=>{d(de(a??""))},[a]);const k=x=>{const R=re(x);o(R),t(R)},T=x=>{if(!s)return;const R=de(x);if(!R){const wn=de(a??"");d(wn);return}d(R),s(R)},E=x=>{x.stopPropagation()},qn=x=>{var R;x.key==="Enter"&&(x.preventDefault(),(R=g.current)==null||R.blur())},Mn=x=>{var R;x.key==="Enter"&&(x.preventDefault(),(R=m.current)==null||R.blur())},On={...l.titleTextStyle,flex:"0 1 auto",minWidth:"1ch",maxWidth:"100%",fieldSizing:"content"},Bn={...l.titleTextStyle,borderRadius:B.borderRadiusRem,flex:"0 1 auto",width:`${f}ch`,minWidth:`${B.shortLabelMinWidthCh}ch`,maxWidth:`min(${y}ch, 100%)`,fieldSizing:"content"};return C.jsxs("div",{className:"inline-flex min-w-0 max-w-full flex-1 items-center",style:{columnGap:"0.35em"},onMouseDown:E,onClick:E,children:[C.jsx("input",{ref:g,type:"text",value:u,placeholder:n,className:l.titleInputClassName,style:On,onMouseDown:E,onClick:E,onChange:x=>o(x.target.value),onBlur:x=>k(x.target.value),onKeyDown:qn}),s?C.jsx("input",{ref:m,type:"text",value:c,placeholder:r,maxLength:B.shortLabelMaxLength,className:l.shortLabelInputClassName,style:Bn,onMouseDown:E,onClick:E,onChange:x=>d(_t(x.target.value)),onBlur:x=>T(x.target.value),onKeyDown:Mn}):null]})};zt.__docgenInfo={description:"",methods:[],displayName:"AnnotationInfoBoxTitleInput",props:{value:{required:!0,tsType:{name:"string"},description:""},placeholder:{required:!0,tsType:{name:"string"},description:""},onCommit:{required:!0,tsType:{name:"signature",type:"function",raw:"(nextValue: string) => void",signature:{arguments:[{type:{name:"string"},name:"nextValue"}],return:{name:"void"}}},description:""},shortLabelValue:{required:!1,tsType:{name:"string"},description:""},shortLabelPlaceholder:{required:!1,tsType:{name:"string"},description:""},onShortLabelCommit:{required:!1,tsType:{name:"signature",type:"function",raw:"(nextValue: string) => void",signature:{arguments:[{type:{name:"string"},name:"nextValue"}],return:{name:"void"}}},description:""},visualOptions:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};const Z=Object.freeze({lineLengthEpsilonPx:.001,referenceDistanceFactor:.2,flipThresholdPx:4,referenceMinDistancePx:24,referenceMaxDistancePx:48,insideBlendFactor:.35,elevationEpsilonMeters:.001,geometryEpsilonPx:1e-6,geometryEpsilonPxSquared:1e-6**2,polygonAreaEpsilonPx2:1e-6,interiorSampleGridResolution:18,minInteriorSampleGridResolution:6,inwardProbeStepsPx:[.5,1,2,4,8,12,16,24,32],polygonLabelPaddingXPx:6,polygonLabelPaddingYPx:4,polygonLabelMinAreaToLabelRatio:1.15,polylabelPrecisionPx:.5,polylabelMaxCellsToProcess:2e4,minSafeLabelDimensionPx:1}),Ir=(e,n,t,a=Z.referenceMinDistancePx,r=Z.referenceMaxDistancePx)=>{const s=yt({start:e,end:n,epsilon:Z.lineLengthEpsilonPx});if(!s)return null;const i=Ct(t,s.midpoint),u=ft(i,s.leftUnitNormal)>=0?1:-1,o=pt(s.length*Z.referenceDistanceFactor,a,r),c=Nt(s.leftUnitNormal,u*o);return bt(s.midpoint,c)},Dt=({triangle:e,auxiliaryAltitudeMeters:n,highestAltitudeMeters:t,insideBlendFactor:a=Z.insideBlendFactor,elevationEpsilonMeters:r=Z.elevationEpsilonMeters})=>{const s=n<t-r?e.highest:e.aux;return{x:s.x+(e.centroid.x-s.x)*a,y:s.y+(e.centroid.y-s.y)*a}},N={SELECT:"select",POINT:"point",DISTANCE:"distance",POLYLINE:"polyline",AREA_GROUND:"area",AREA_PLANAR:"planar",AREA_VERTICAL:"vertical",LABEL:"label"},mn=e=>e===N.AREA_GROUND||e===N.AREA_VERTICAL||e===N.AREA_PLANAR,Ht=e=>{if(!Number.isFinite(e)||e<0)return"A";let n=Math.floor(e),t="";do t=String.fromCharCode(65+n%26)+t,n=Math.floor(n/26)-1;while(n>=0);return t},qe=Object.freeze({fillAlpha:.25,selectedFillAlpha:.35,rgb255ByType:{[N.AREA_VERTICAL]:[112,168,255],[N.AREA_GROUND]:[107,188,123],[N.AREA_PLANAR]:[239,223,145]}}),gn=([e,n,t],a)=>`rgba(${e}, ${n}, ${t}, ${a})`,Oe=e=>qe.rgb255ByType[e],kr=(e,n)=>gn(Oe(e),n?qe.selectedFillAlpha:qe.fillAlpha),jt=(e,n)=>gn(Oe(e),n),A={DIRECT:"direct",VERTICAL:"vertical",HORIZONTAL:"horizontal"},_=Object.freeze({textRgb255:{dark:[17,24,39],light:[255,255,255]},measurementTextRgb255:[248,250,252],shortLabelRgb255ByType:{[N.POINT]:[200,200,200],[N.DISTANCE]:[102,126,234],[N.POLYLINE]:[226,178,60],[N.LABEL]:[88,152,255]},surfaceRgb255:{stroke:[255,255,255],accent:[246,248,255]},lineComponentRgb255ByKind:{[A.DIRECT]:[255,255,255],[A.VERTICAL]:[111,168,255],[A.HORIZONTAL]:[188,194,102]},selectionRgb255:{background:[15,23,42],hoverBackground:[30,41,59],glow:[255,255,255]}}),H=Object.freeze({alpha:{text:{dark:.9,light:1},shortLabelBackgroundByType:{[N.POINT]:.92,[N.DISTANCE]:.95,[N.POLYLINE]:.95,[N.LABEL]:.95,area:.95},lineComponentByKind:{[A.DIRECT]:1,[A.VERTICAL]:.96,[A.HORIZONTAL]:.95},lineComponentLabelAccentByKind:{[A.DIRECT]:.34,[A.VERTICAL]:.54,[A.HORIZONTAL]:.5},selection:{background:.92,hoverBackground:.9,glow:1},surfaceStroke:.95}}),j=([e,n,t],a)=>`rgba(${e}, ${n}, ${t}, ${a})`,V=(e,n=H.alpha.text[e])=>j(_.textRgb255[e],n),me=(e=H.alpha.surfaceStroke)=>j(_.surfaceRgb255.stroke,e),$t=(e=H.alpha.surfaceStroke)=>j(_.surfaceRgb255.accent,e),Ne=(e,n=H.alpha.lineComponentByKind[e])=>j(_.lineComponentRgb255ByKind[e],n),be=(e,n=H.alpha.lineComponentLabelAccentByKind[e])=>j(_.lineComponentRgb255ByKind[e],n),W=e=>mn(e)?jt(e,H.alpha.shortLabelBackgroundByType.area):j(_.shortLabelRgb255ByType[e],H.alpha.shortLabelBackgroundByType[e]),Ar=e=>mn(e)?Oe(e):_.shortLabelRgb255ByType[e],Xe=(e,n=H.alpha.selection[e])=>j(_.selectionRgb255[e],n),Vt=(e=1)=>j(_.measurementTextRgb255,e),G=Object.freeze({fontFamily:'"Helvetica Neue", Arial, Helvetica, sans-serif',fontWeight:{regular:400,medium:500,semibold:600},fontSizePx:{supportText:12,pointLabel:14,measurementLabel:16,compactBadge:10,distancePairLabel:11}}),z={NUMERIC:"numeric",ALPHABETIC:"alphabetic"},Wt={[N.POINT]:{prefix:"",counterStyle:z.NUMERIC,backgroundColor:W(N.POINT),textColor:V("dark")},[N.DISTANCE]:{prefix:"",counterStyle:z.ALPHABETIC,backgroundColor:W(N.DISTANCE),textColor:V("light")},[N.POLYLINE]:{prefix:"L",counterStyle:z.NUMERIC,backgroundColor:W(N.POLYLINE),textColor:V("dark")},[N.AREA_GROUND]:{prefix:"A",counterStyle:z.NUMERIC,backgroundColor:W(N.AREA_GROUND),textColor:V("light")},[N.AREA_PLANAR]:{prefix:"D",counterStyle:z.NUMERIC,backgroundColor:W(N.AREA_PLANAR),textColor:V("light")},[N.AREA_VERTICAL]:{prefix:"F",counterStyle:z.NUMERIC,backgroundColor:W(N.AREA_VERTICAL),textColor:V("light")},[N.LABEL]:{prefix:"T",counterStyle:z.NUMERIC,backgroundColor:W(N.LABEL),textColor:V("light")}},Lr=(e,n,t=Wt)=>{const a=t[e],r=Number.isFinite(n)&&n>0?Math.floor(n):1,s=a.counterStyle===z.ALPHABETIC?Ht(r-1):`${r}`;return`${a.prefix}${s}`},Be=1e-12,Er=(e,n)=>e.map(t=>p.add(t,n,new p)),Ut=(e,n,t=new p)=>{const a=p.magnitudeSquared(n);if(a<=Be)return p.clone(e,t);const r=p.dot(e,n)/a;return p.subtract(e,p.multiplyByScalar(n,r,new p),t)},Gt=(e,n,t,a=new p)=>{const r=p.magnitudeSquared(t);if(r<=Be)return p.clone(e,a);const s=p.subtract(e,n,new p),i=p.dot(s,t)/r;return p.subtract(e,p.multiplyByScalar(t,i,new p),a)},Yt=(e,n,t,a=new p)=>{const r=p.subtract(n,e,new p),s=p.subtract(t,e,new p),i=p.cross(r,s,a);return p.magnitudeSquared(i)<=Be?null:p.normalize(i,a)},Xt=0,Kt=e=>e??Xt,Zt=e=>({longitude:We(e.longitude),latitude:We(e.latitude),altitude:e.height}),Jt=e=>{const n=Ee.fromCartesian(e);return Zt(n)},Ke=Object.freeze({componentEpsilonMeters:.05}),Qt=(e,n,t)=>{const a=Yt(e,n,t);return a?{anchorECEF:p.clone(e),normalECEF:a}:null},Ze=(e,n)=>Gt(e,n.anchorECEF,n.normalECEF),pn=(e,n)=>{const t=it(e),a=p.subtract(n,e,new p),r=p.dot(a,t),s=p.multiplyByScalar(t,r,new p),i=Ut(a,t),l=p.magnitude(i),u=Math.abs(r);if(l<Ke.componentEpsilonMeters||u<Ke.componentEpsilonMeters)return null;const o=p.add(e,i,new p),c=p.add(e,s,new p),d=p.add(e,t,new p),g=Qt(e,d,o);return{adjacentHorizontalCorner:g?Ze(o,g):o,adjacentVerticalCorner:g?Ze(c,g):c}},Rr=(e,n)=>{const t=pn(e,n);if(!t)return 0;const a=p.distance(e,t.adjacentHorizontalCorner),r=p.distance(e,t.adjacentVerticalCorner);return a*r},Je=e=>e.reduce((n,t)=>{const a=t.match(/(\d+)$/),r=a?Number(a[1]):Number.NaN;return Number.isFinite(r)?Math.max(n,r):n},0),Pr=e=>new Map(e.flatMap(n=>n.nodeIds.map(t=>[t,n.id]))),J=({nodes:e,nodeLinks:n})=>{const t=new Set(e.map(i=>i.id)),a=n.map(i=>({...i,nodeIds:Array.from(new Set(i.nodeIds.filter(l=>t.has(l))))})).filter(i=>i.nodeIds.length>0),r=new Set(a.flatMap(i=>i.nodeIds)),s=e.filter(i=>!r.has(i.id)).map(i=>({id:i.id,nodeIds:[i.id]}));return[...a,...s]},Qe=6378137,ea=.1,ve=e=>e*Math.PI/180,na=(e,n)=>{const t=ve(n.latitude-e.latitude),a=ve(n.longitude-e.longitude),r=ve((e.latitude+n.latitude)/2),s=a*Math.cos(r)*Qe,i=t*Qe,l=n.altitude-e.altitude;return Math.hypot(s,i,l)},ta=e=>typeof e=="string"&&e.trim().length>0?e.trim():null,aa=({nodes:e,nodeLinks:n,nodeId:t,movedNodeIds:a,linkToNodeId:r})=>{const s=e.find(m=>m.id===t)??null,i=Array.from(new Set(a.filter(Boolean)));if(!s||i.length===0)return[...n];const l=new Set(i),u=n.find(m=>m.nodeIds.includes(t))??null,o=ta(r),c=o&&!l.has(o)?n.find(m=>m.nodeIds.includes(o))??null:null;return c&&!c.nodeIds.some(m=>l.has(m))?J({nodes:e,nodeLinks:n.map(m=>m.id===c.id?{...m,nodeIds:Array.from(new Set([...m.nodeIds,...i]))}:{...m,nodeIds:m.nodeIds.filter(y=>!l.has(y))})}):!u||i.length===u.nodeIds.length?[...n]:e.filter(m=>u.nodeIds.includes(m.id)&&!l.has(m.id)).some(m=>na(m.coordinate,s.coordinate)>ea)?J({nodes:e,nodeLinks:n.map(m=>m.id===u.id?{...m,nodeIds:m.nodeIds.filter(y=>!l.has(y))}:{...m})}):[...n]},ra=({nodeId:e,nodes:n,linkedNodeGroups:t,annotationEntries:a,selectedMeasurementIds:r=[],preferredMovedNodeIds:s})=>{const i=n.find(f=>f.id===e)??null;if(!i)return{targetNode:null,targetLinkedNodeGroup:null,movedNodeIds:[]};const l=t.find(f=>f.nodeIds.includes(e))??null,u=(l==null?void 0:l.nodeIds)??[e],o=Array.from(new Set((s??[]).filter(f=>u.includes(f)))),c=new Set(r.filter(Boolean)),d=new Set(a.filter(f=>c.has(f.id)).flatMap(f=>f.nodeIds)),g=u.filter(f=>d.has(f)),m=o.length>0?o:g.length>0?g:[...u],y=new Set(a.filter(f=>f.locked).flatMap(f=>f.nodeIds));return{targetNode:i,targetLinkedNodeGroup:l,movedNodeIds:m.filter(f=>!y.has(f))}},ia=(e={})=>{const{initialToolType:n=N.SELECT,initialPointTemporaryMode:t=!1}=e;return{annotationToolType:n,selectionState:{selectedAnnotationIds:[],previousSelectedAnnotationId:null},annotationEntries:[],nodes:[],linkedNodeGroups:[],edges:[],infoBoxState:{activeAnnotationId:null},settingsState:{pointTemporaryMode:t,elevationReferenceAnnotationId:null,nextShortLabelCounterByToolType:{}}}},oa=dt({name:"annotationsRuntime",initialState:ia(),reducers:{replaceState:(e,n)=>n.payload,setAnnotationToolType:(e,n)=>{e.annotationToolType=n.payload},setPointTemporaryMode:(e,n)=>{e.settingsState.pointTemporaryMode=n.payload},setElevationReferenceAnnotationId:(e,n)=>{e.settingsState.elevationReferenceAnnotationId=n.payload},setNextShortLabelCounterByToolType:(e,n)=>{e.settingsState.nextShortLabelCounterByToolType={...e.settingsState.nextShortLabelCounterByToolType,[n.payload.toolType]:Math.max(1,n.payload.nextCounter)}},setSelectedAnnotationId:(e,n)=>{const t=n.payload,a=e.selectionState.selectedAnnotationIds[e.selectionState.selectedAnnotationIds.length-1]??null;e.selectionState.previousSelectedAnnotationId=a,e.selectionState.selectedAnnotationIds=t?[t]:[],e.infoBoxState.activeAnnotationId=t},setSelectedAnnotationIds:(e,n)=>{const t=Array.from(new Set(n.payload.filter(Boolean))),a=e.selectionState.selectedAnnotationIds[e.selectionState.selectedAnnotationIds.length-1]??null;e.selectionState.previousSelectedAnnotationId=a,e.selectionState.selectedAnnotationIds=t,e.infoBoxState.activeAnnotationId=t[t.length-1]??null},appendAnnotationEntities:(e,n)=>{if(e.nodes.push(...n.payload.nodes),n.payload.linkedNodeGroups.forEach(t=>{const a=e.linkedNodeGroups.find(r=>r.id===t.id);if(!a){e.linkedNodeGroups.push({id:t.id,nodeIds:[...t.nodeIds]});return}a.nodeIds=Array.from(new Set([...a.nodeIds,...t.nodeIds]))}),e.edges.push(...n.payload.edges),e.annotationEntries.push({...n.payload.annotationEntry,nodeIds:[...n.payload.annotationEntry.nodeIds],edgeIds:[...n.payload.annotationEntry.edgeIds]}),e.linkedNodeGroups=J({nodes:e.nodes,nodeLinks:e.linkedNodeGroups}),n.payload.selectAnnotationId!==void 0){const t=e.selectionState.selectedAnnotationIds[e.selectionState.selectedAnnotationIds.length-1]??null;e.selectionState.previousSelectedAnnotationId=t,e.selectionState.selectedAnnotationIds=n.payload.selectAnnotationId?[n.payload.selectAnnotationId]:[],e.infoBoxState.activeAnnotationId=n.payload.selectAnnotationId??null}},removeAnnotationById:(e,n)=>{const{annotationId:t,nextSelectedAnnotationId:a}=n.payload,r=e.selectionState.selectedAnnotationIds[e.selectionState.selectedAnnotationIds.length-1]??null;if(!e.annotationEntries.some(o=>o.id===t))return;e.annotationEntries=e.annotationEntries.filter(o=>o.id!==t);const i=new Set(e.annotationEntries.flatMap(o=>o.nodeIds)),l=new Set(e.annotationEntries.flatMap(o=>o.edgeIds));if(e.nodes=e.nodes.filter(o=>i.has(o.id)),e.linkedNodeGroups=J({nodes:e.nodes,nodeLinks:e.linkedNodeGroups}),e.edges=e.edges.filter(o=>l.has(o.id)),e.selectionState.previousSelectedAnnotationId=r,e.settingsState.elevationReferenceAnnotationId===t&&(e.settingsState.elevationReferenceAnnotationId=null),a!==void 0){e.selectionState.selectedAnnotationIds=a?[a]:[],e.infoBoxState.activeAnnotationId=a??null;return}const u=e.selectionState.selectedAnnotationIds.filter(o=>o!==t);e.selectionState.selectedAnnotationIds=u,e.infoBoxState.activeAnnotationId=u[u.length-1]??null},removeAnnotationsByIds:(e,n)=>{const t=new Set(n.payload.annotationIds);if(t.size===0)return;const a=e.selectionState.selectedAnnotationIds[e.selectionState.selectedAnnotationIds.length-1]??null;if(!e.annotationEntries.some(u=>t.has(u.id)))return;e.annotationEntries=e.annotationEntries.filter(u=>!t.has(u.id));const s=new Set(e.annotationEntries.flatMap(u=>u.nodeIds)),i=new Set(e.annotationEntries.flatMap(u=>u.edgeIds));if(e.nodes=e.nodes.filter(u=>s.has(u.id)),e.linkedNodeGroups=J({nodes:e.nodes,nodeLinks:e.linkedNodeGroups}),e.edges=e.edges.filter(u=>i.has(u.id)),e.selectionState.previousSelectedAnnotationId=a,e.settingsState.elevationReferenceAnnotationId&&t.has(e.settingsState.elevationReferenceAnnotationId)&&(e.settingsState.elevationReferenceAnnotationId=null),n.payload.nextSelectedAnnotationId!==void 0){e.selectionState.selectedAnnotationIds=n.payload.nextSelectedAnnotationId?[n.payload.nextSelectedAnnotationId]:[],e.infoBoxState.activeAnnotationId=n.payload.nextSelectedAnnotationId??null;return}const l=e.selectionState.selectedAnnotationIds.filter(u=>!t.has(u));e.selectionState.selectedAnnotationIds=l,e.infoBoxState.activeAnnotationId=l[l.length-1]??null},updateNodeCoordinateById:(e,n)=>{const{nodeId:t,coordinate:a,selectedMeasurementIds:r=[],movedNodeIds:s,linkToNodeId:i}=n.payload,{targetNode:l,movedNodeIds:u}=ra({nodeId:t,nodes:e.nodes,linkedNodeGroups:e.linkedNodeGroups,annotationEntries:e.annotationEntries,selectedMeasurementIds:r,preferredMovedNodeIds:s});if(!l)return;const o=new Set(u);u.length!==0&&(e.nodes.forEach(c=>{o.has(c.id)&&(c.coordinate=a)}),e.linkedNodeGroups=aa({nodes:e.nodes,nodeLinks:e.linkedNodeGroups,nodeId:l.id,movedNodeIds:u,linkToNodeId:i}))},insertNodeIntoMeasurementEdge:(e,n)=>{const{measurementId:t,startNodeId:a,endNodeId:r,coordinate:s}=n.payload,i=e.annotationEntries.find(T=>T.id===t);if(!i)return;const l=i.nodeIds.findIndex((T,E)=>T===a&&i.nodeIds[E+1]===r),u=l>=0?l+1:i.closed&&i.nodeIds.length>=3&&i.nodeIds[i.nodeIds.length-1]===a&&i.nodeIds[0]===r?i.nodeIds.length:-1;if(u<0)return;const o=new Map(e.edges.map(T=>[T.id,T])),c=i.edgeIds.findIndex(T=>{const E=o.get(T);return(E==null?void 0:E.startNodeId)===a&&E.endNodeId===r}),d=c>=0?i.edgeIds[c]:null,g=d?o.get(d):void 0;if(!g||c<0)return;const m=`node-${Je(e.nodes.map(T=>T.id))+1}`,y=`edge-${Je(e.edges.map(T=>T.id))+1}`;e.nodes.push({id:m,coordinate:s}),e.linkedNodeGroups=J({nodes:e.nodes,nodeLinks:[...e.linkedNodeGroups,{id:m,nodeIds:[m]}]}),g.endNodeId=m;const f={id:y,startNodeId:m,endNodeId:r},k=e.edges.findIndex(T=>T.id===d);k>=0?e.edges.splice(k+1,0,f):e.edges.push(f),i.nodeIds=[...i.nodeIds.slice(0,u),m,...i.nodeIds.slice(u)],i.edgeIds=[...i.edgeIds.slice(0,c+1),y,...i.edgeIds.slice(c+1)]},updateAnnotationEntryById:(e,n)=>{const{annotationId:t,displayName:a,shortLabel:r,hidden:s,locked:i,labelAppearance:l,elevationDisplayMode:u,distanceAnchorCoordinateSelection:o,distanceTriangleAnchorCoordinateRole:c}=n.payload,d=e.annotationEntries.find(g=>g.id===t);d&&(a!==void 0&&(d.displayName=a),r!==void 0&&(d.shortLabel=r),s!==void 0&&(d.hidden=s),i!==void 0&&(d.locked=i),l!==void 0&&(d.labelAppearance={...d.labelAppearance??{},...l}),u!==void 0&&(d.elevationDisplayMode=u),o!==void 0&&(d.distanceAnchorCoordinateSelection=o),c!==void 0&&(d.distanceTriangleAnchorCoordinateRole=c))}}}),{appendAnnotationEntities:qr,removeAnnotationById:Mr,removeAnnotationsByIds:Or,setElevationReferenceAnnotationId:Br,setNextShortLabelCounterByToolType:wr,setPointTemporaryMode:Fr,insertNodeIntoMeasurementEdge:_r,updateNodeCoordinateById:zr,updateAnnotationEntryById:Dr,replaceState:Hr,setAnnotationToolType:jr,setSelectedAnnotationId:$r,setSelectedAnnotationIds:Vr}=oa.actions,we=h.createContext(null);ct(we);const sa=mt(we);gt(we);const Wr=()=>sa(),Me=Object.freeze({strokeWidthPx:1.5,overlayDashPattern:"8 8"}),la=(e,n)=>typeof e=="number"&&Number.isFinite(e)&&e>0?e:n,ua=(e,n)=>{const t=e==null?void 0:e.trim();return t||n},Ur=(e,n=Me)=>({strokeWidthPx:la(e==null?void 0:e.strokeWidthPx,n.strokeWidthPx),overlayDashPattern:ua(e==null?void 0:e.overlayDashPattern,n.overlayDashPattern)}),en=Object.freeze({previewAlpha:.9,surfaceAlpha:.92}),v={colors:{neutral:me(1),accent:me(1),preview:me(en.previewAlpha),surface:Yn(en.surfaceAlpha),transparent:"transparent",components:{direct:Ne(A.DIRECT),vertical:Ne(A.VERTICAL),horizontal:Ne(A.HORIZONTAL)},componentLabelAccents:{direct:be(A.DIRECT),vertical:be(A.VERTICAL),horizontal:be(A.HORIZONTAL)}},sizes:{edgeStrokeWidth:Me.strokeWidthPx,pointPixelSize:10,pointOutlineWidth:1},patterns:{edgeDashPattern:Me.overlayDashPattern}},yn=Object.freeze({edge:Object.freeze({stroke:v.colors.accent,strokeWidth:v.sizes.edgeStrokeWidth,overlayDashPattern:v.patterns.edgeDashPattern}),point:Object.freeze({pixelSize:v.sizes.pointPixelSize,fill:v.colors.transparent,outline:v.colors.surface,outlineWidth:v.sizes.pointOutlineWidth})}),Cn=Object.freeze({edge:Object.freeze({stroke:v.colors.neutral}),point:Object.freeze({outline:v.colors.neutral})}),da=(e,n={})=>({...e,...n}),ca=(e,n={})=>({...e,...n}),Gr=e=>da(e,Cn.edge),Yr=e=>ca(e,Cn.point),ma=G.fontSizePx.pointLabel,ga=e=>`${e/ma}rem`,Q=Object.freeze({fontFamily:G.fontFamily,rootFontSizeRem:"1rem",supportFontSizeRem:ga(G.fontSizePx.supportText),headingFontSizeRem:"1rem",lineLabelFontWeight:G.fontWeight.medium,badgeFontWeight:G.fontWeight.medium,headingFontWeight:G.fontWeight.semibold,sectionTitleFontWeight:G.fontWeight.semibold}),pa={SOFT_RECT_FADE:"soft-rect-fade"},ya={DARK_ON_BRIGHT:"dark-on-bright",BRIGHT_ON_DARK:"bright-on-dark"},Ca={NONE:"none",MOVE_ON_LINE:"move-on-line"},Fe=Object.freeze({fontFamily:Q.fontFamily,fontWeight:Q.lineLabelFontWeight,backgroundStyle:pa.SOFT_RECT_FADE,theme:ya.BRIGHT_ON_DARK,shortEdgeOffsetPx:-2,allowEarlyRemoval:!0,collisionResolutionStrategy:Ca.MOVE_ON_LINE,anchorSlideStepRatio:.1,maxAnchorSlideDeltaRatio:.3}),se=Object.freeze({verticalFlippedBaselineOffsetPx:6,verticalBaselineAngleEpsilonRad:1e-9,sideHysteresisPx:1.5,upperSideGapFactor:.15,upperSideGapNormalYEpsilon:.001}),fn=e=>({...Fe,...e}),F=Object.freeze({lineStrokeWidthPx:v.sizes.edgeStrokeWidth,layerZIndex:"1550",lineLabelOffsetPx:8,lineLabelMinLengthPx:44,geometryEpsilonMeters:.01,labelReferenceLineLengthEpsilonPx:.001,labelReferenceDistanceFactor:.2,labelReferenceMinDistancePx:24,labelReferenceMaxDistancePx:48,labelReferenceInsideBlendFactor:.35,labelSideSwitchThresholdPx:4,directLineColor:v.colors.components.direct,verticalLineColor:v.colors.components.vertical,horizontalLineColor:v.colors.components.horizontal,draftChainColor:v.colors.preview}),_e=(e,n)=>{Object.assign(e.style,n)},ie=Object.freeze({className:"carma-annotation-overlay-line-label",frameClassName:"carma-annotation-overlay-line-label__frame",backdropClassName:"carma-annotation-overlay-line-label__backdrop",textClassName:"carma-annotation-overlay-line-label__text"}),fa=Object.freeze({direct:{},vertical:{labelOffsetPx:F.lineLabelOffsetPx,labelFlippedBaselineOffsetPx:se.verticalFlippedBaselineOffsetPx,labelRotationMode:Zn.CLOCKWISE},horizontal:{}}),ce=(e,n)=>{const t=document.createElement(e);return t.className=n,t},Na=({element:e,backdrop:n,accentColor:t,visualOptions:a})=>{e.style.setProperty("--carma-annotation-overlay-line-label-font-family",a.fontFamily),e.style.setProperty("--carma-annotation-overlay-line-label-font-weight",String(a.fontWeight)),e.style.setProperty("--carma-annotation-overlay-line-label-glow-color",t),e.dataset.annotationOverlayLineLabelShortEdgeOffsetPx=String(a.shortEdgeOffsetPx),e.dataset.annotationOverlayLineLabelTheme=a.theme,n.dataset.annotationOverlayLineLabelBackgroundStyle=a.backgroundStyle},ba=e=>e.querySelector('[data-annotation-overlay-line-label-text="true"]'),va=e=>e.querySelector(`.${ie.frameClassName}`),xa=e=>{const n=e.dataset.annotationOverlayLineLabelShortEdgeOffsetPx,t=n?Number(n):Number.NaN;return Number.isFinite(t)?t:Fe.shortEdgeOffsetPx},Nn=e=>e.dataset.annotationOverlayLineLabelKind==="vertical"||e.dataset.annotationOverlayLineLabelKind==="horizontal"?e.dataset.annotationOverlayLineLabelKind:"direct",Sa=e=>Nn(e)==="vertical",ha=({kind:e,outsideReferencePoint:n,anchorRatio:t})=>({...fa[e],anchorRatio:t===void 0?void 0:Qn(t),getLabelOutsideReferencePoint:n?()=>({x:n.x,y:n.y}):void 0}),Ta=({x:e,y:n,angleRad:t,anchor:a})=>`translate(${Math.round(e)}px, ${Math.round(n)}px) ${a==="left"?"translate(0%, -50%)":a==="right"?"translate(-100%, -50%)":"translate(-50%, -50%)"} rotate(${t}rad)`,Ia=(e,n,t=ht.LABEL)=>{const a=Lt(e,t);if(!a)return null;const r=document.createElement("div");return r.id=n,r.dataset.annotationOverlayLayer="true",_e(r,{position:"absolute",inset:"0",overflow:"hidden",pointerEvents:"none",userSelect:"none",webkitUserSelect:"none",zIndex:"auto"}),a.appendChild(r),r},Xr=Ia,ka=e=>{e==null||e.remove()},Kr=ka,Zr=e=>{const n=new ot,t=n.update.bind(n);return n.update=a=>{if(!(a.passes.pick&&!a.passes.render))return t(a)},e.primitives.add(n),n},Jr=(e,n)=>{if(!(!n||!vt(e)))try{if(typeof n.isDestroyed=="function"&&n.isDestroyed())return;e.primitives.remove(n)}catch{}},bn=e=>st.fromType("Color",{color:Ve.fromCssColorString(e)??Ve.WHITE}),Qr=(e,n,t,a)=>({polyline:e.add({id:n,positions:[p.ZERO,p.ZERO],width:(a==null?void 0:a.width)??F.lineStrokeWidthPx,material:bn(t),show:!1}),colorCss:t}),ei=(e,n)=>{e.colorCss!==n&&(e.polyline.material=bn(n),e.colorCss=n)},ni=e=>{e.polyline.show=!1},ti=(e,n)=>{e.polyline.positions=[...n],e.polyline.show=n.length>=2},xe=(e,n)=>{const t=fn(n),a=ce("div",ie.className),r=ce("div",ie.frameClassName),s=ce("div",ie.backdropClassName),i=ce("span",ie.textClassName);return i.dataset.annotationOverlayLineLabelText="true",Na({element:a,backdrop:s,accentColor:e,visualOptions:t}),r.append(s,i),a.appendChild(r),a},ai=e=>{const n=fn(e),t=xe(v.colors.componentLabelAccents.direct,n);t.dataset.annotationOverlayLineLabelKind="direct";const a=xe(v.colors.componentLabelAccents.vertical,n);a.dataset.annotationOverlayLineLabelKind="vertical";const r=xe(v.colors.componentLabelAccents.horizontal,n);return r.dataset.annotationOverlayLineLabelKind="horizontal",{direct:t,vertical:a,horizontal:r}},ri=e=>{e.direct.style.display="none",e.vertical.style.display="none",e.horizontal.style.display="none"},vn=(e,n)=>{_e(e,{width:`${n.pixelSize}px`,height:`${n.pixelSize}px`,border:`${n.outlineWidth}px solid ${n.outline}`,background:n.fill})},Aa=(e=yn.point)=>{const n=document.createElement("div");return _e(n,{position:"absolute",left:"0",top:"0",display:"none",borderRadius:"999px",transform:"translate(-50%, -50%)",boxSizing:"border-box",pointerEvents:"none",userSelect:"none",webkitUserSelect:"none",willChange:"transform"}),vn(n,e),n},La=({overlayLayer:e,pointMarkers:n,count:t,style:a})=>{for(;n.length<t;){const r=Aa(a);n.push(r),e.appendChild(r)}},ii=e=>{e.forEach(n=>{n.style.display="none"})},oi=({scene:e,overlayLayer:n,pointMarkers:t,coordinates:a,style:r=yn.point})=>{La({overlayLayer:n,pointMarkers:t,count:a.length,style:r}),a.forEach((s,i)=>{const l=t[i];if(!l)return;vn(l,r);const u=xt.worldToWindowCoordinates(e,Re(s));if(!lt(u)){l.style.display="none";return}l.style.display="block",l.style.transform=`translate(${Math.round(u.x)}px, ${Math.round(u.y)}px) translate(-50%, -50%)`}),t.slice(a.length).forEach(s=>{s.style.display="none"})},Ea=e=>dn(e>Y||e<-Y?e+oe:e),Ra=e=>{let n=dn(e);return n>Y?n=n-oe:n<-Y&&(n=n+oe),n},Pa=({angleRad:e,lineSide:n})=>Math.abs(Math.abs(e)-Y)>se.verticalBaselineAngleEpsilonRad?e:n==="left"?Y:-Y,qa=({deltaX:e,deltaY:n,lineSide:t,flipReadingDirection:a,forceHorizontal:r})=>{if(r)return 0;const s=Ea(Math.atan2(n,e)),i=a?s>=0?s-oe:s+oe:s;return Pa({angleRad:Ra(i),lineSide:t})},Ma=({start:e,end:n,kind:t,outsideReferencePoint:a,shortEdgeOffsetPx:r=Fe.shortEdgeOffsetPx,useShortEdgeRules:s=!0,flipReadingDirection:i=!1,previousShouldFlip:l=!1,anchorRatio:u})=>{const o=Jn({svgLine:{start:{x:e.x,y:e.y},end:{x:n.x,y:n.y}},options:ha({kind:t,outsideReferencePoint:a,anchorRatio:u}),previousShouldFlip:l,sideSwitchThresholdPx:se.sideHysteresisPx});if(!o)return null;const c=n.x-e.x,d=n.y-e.y;if(s&&o.lineLengthPx<F.lineLabelMinLengthPx){const g=o.normalX>=0,m=g?"left":"right";return{x:o.midX+o.normalX*r,y:o.midY+o.normalY*r,angleRad:qa({deltaX:c,deltaY:d,lineSide:m,flipReadingDirection:i,forceHorizontal:!0}),anchor:g?"left":"right",anchorRatio:o.anchorRatio,isShortEdge:!0,shouldFlip:o.shouldFlip,normalX:o.normalX,normalY:o.normalY}}return{x:o.textX,y:o.textY,angleRad:o.angleRad,anchor:"center",anchorRatio:o.anchorRatio,isShortEdge:!1,shouldFlip:o.shouldFlip,normalX:o.normalX,normalY:o.normalY}},si=({element:e,text:n,start:t,end:a,outsideReferencePoint:r,flipReadingDirection:s=!1,anchorRatio:i})=>{const l=Ma({start:t,end:a,kind:Nn(e),outsideReferencePoint:r,shortEdgeOffsetPx:xa(e),useShortEdgeRules:Sa(e),flipReadingDirection:s,anchorRatio:i,previousShouldFlip:e.dataset.annotationOverlayLineLabelNormalFlip==="1"});if(!l){e.style.display="none";return}const u=ba(e);u instanceof HTMLSpanElement?u.textContent=n:e.textContent=n;const o=va(e),c=!l.isShortEdge&&l.normalY<-se.upperSideGapNormalYEpsilon&&o?o.getBoundingClientRect().height*se.upperSideGapFactor:0,d=l.x+l.normalX*c,g=l.y+l.normalY*c;e.dataset.annotationOverlayLineLabelShortEdge=l.isShortEdge?"true":"false",e.dataset.annotationOverlayLineLabelAnchorRatio=`${l.anchorRatio}`,e.dataset.annotationOverlayLineLabelNormalFlip=l.shouldFlip?"1":"0",e.style.display="block",e.style.transform=Ta({...l,x:d,y:g})},Oa=e=>Math.min(F.labelReferenceMaxDistancePx,Math.max(F.labelReferenceMinDistancePx,e)),Se=({start:e,end:n,insidePoint:t,previousOutsideSign:a})=>{const r=n.x-e.x,s=n.y-e.y,i=Math.hypot(r,s);if(!Number.isFinite(i)||i<=F.labelReferenceLineLengthEpsilonPx)return null;const l=(e.x+n.x)*.5,u=(e.y+n.y)*.5,o=-s/i,c=r/i,d=(t.x-l)*o+(t.y-u)*c,g=d>=0?-1:1,m=a&&a!==g&&Math.abs(d)<F.labelSideSwitchThresholdPx?a:g,y=Oa(i*F.labelReferenceDistanceFactor);return{outsideSign:m,referencePoint:{x:l+o*m*y,y:u+c*m*y}}},li=({anchor:e,target:n,aux:t,anchorAltitudeMeters:a,targetAltitudeMeters:r,previousVerticalOutsideSign:s})=>{const i={x:e.x,y:e.y},l={x:n.x,y:n.y},u={x:t.x,y:t.y},o=a>=r?i:l,c={anchor:i,target:l,aux:u,highest:o,centroid:{x:(i.x+l.x+u.x)/3,y:(i.y+l.y+u.y)/3}},d=Dt({triangle:c,auxiliaryAltitudeMeters:r,highestAltitudeMeters:Math.max(a,r),insideBlendFactor:F.labelReferenceInsideBlendFactor}),g=Se({start:i,end:l,insidePoint:d}),m=Se({start:u,end:l,insidePoint:d}),y=Se({start:i,end:u,insidePoint:l,previousOutsideSign:s});return{directOutsideReferencePoint:(g==null?void 0:g.referencePoint)??null,verticalOutsideReferencePoint:(y==null?void 0:y.referencePoint)??null,horizontalOutsideReferencePoint:(m==null?void 0:m.referencePoint)??null,nextVerticalOutsideSign:y==null?void 0:y.outsideSign}},ui=({directLabelText:e,verticalLabelText:n,horizontalLabelText:t})=>({showVerticalLabel:n!==null&&n!==e,showHorizontalLabel:t!==null&&t!==e}),di=()=>({cartographicA:new Ee,cartographicB:new Ee,auxiliaryPoint:new p,auxiliaryScreen:new ut}),ci=({scene:e,anchorPointECEF:n,targetPointECEF:t,scratch:a})=>{const r=e.globe.ellipsoid,s=r.cartesianToCartographic(n,a.cartographicA),i=r.cartesianToCartographic(t,a.cartographicB);return!s||!i?null:p.fromRadians(s.longitude,s.latitude,i.height??0,r,a.auxiliaryPoint)},mi=e=>{const n=Jt(e);return{longitude:n.longitude,latitude:n.latitude,altitude:Kt(n.altitude)}},gi=({firstCorner:e,oppositeCorner:n})=>{const t=Re(e),a=Re(n),r=pn(t,a);return r?[t,r.adjacentHorizontalCorner,a,r.adjacentVerticalCorner,t]:null},Ba=Object.freeze({longPressDurationMs:320}),wa=({interactive:e,onClick:n,onHoverChange:t,onLongPress:a,longPressDurationMs:r=Ba.longPressDurationMs,markerStyle:s})=>{const[i,l]=h.useState(!1),u=h.useRef(void 0),o=h.useRef(!1),c=h.useCallback(()=>{u.current!==void 0&&(window.clearTimeout(u.current),u.current=void 0)},[]),d=h.useCallback(k=>{if(k.stopPropagation(),k.button!==0||!a){c();return}o.current=!1,c(),u.current=window.setTimeout(()=>{o.current=!0,a()},r)},[c,r,a]),g=h.useCallback(()=>{c()},[c]),m=h.useCallback(k=>{if(k.stopPropagation(),o.current){o.current=!1;return}n==null||n()},[n]),y=h.useCallback(()=>{l(!0),t==null||t(!0)},[t]),f=h.useCallback(()=>{c(),l(!1),t==null||t(!1)},[c,t]);return h.useEffect(()=>c,[c]),C.jsx("div",{"data-runtime-point-marker-shell":"true",style:{position:"relative",width:"0px",height:"0px",overflow:"visible",pointerEvents:"none"},children:C.jsx("div",{"data-runtime-point-marker-circle":"true",style:{position:"absolute",left:"0px",top:"0px",transform:i?`translate(-50%, -50%) scale(${un.hover.scale})`:"translate(-50%, -50%)",borderRadius:"999px",boxSizing:"border-box",pointerEvents:e?"auto":"none",cursor:e?"pointer":"default",transition:et(),boxShadow:i?nt():"none",filter:i?tt():"none",...s},onClick:e?m:void 0,onMouseDown:e?d:void 0,onMouseUp:e?g:void 0,onMouseEnter:e?y:void 0,onMouseLeave:e?f:void 0})})};wa.__docgenInfo={description:"",methods:[],displayName:"PointMarkerOverlayShell",props:{interactive:{required:!0,tsType:{name:"boolean"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onHoverChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(hovered: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"hovered"}],return:{name:"void"}}},description:""},onLongPress:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},longPressDurationMs:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"pointMarkerVisualizerDefaults.longPressDurationMs",computed:!0}},markerStyle:{required:!1,tsType:{name:"CSSProperties"},description:""}}};const pi={RIGHTMOST_SCREEN_SPACE:"rightmost-screen-space",LEFTMOST_SCREEN_SPACE:"leftmost-screen-space"},yi={START_COORDINATE:"start-coordinate",END_COORDINATE:"end-coordinate"},Ci={GROUND:"ground",COPLANAR:"coplanar"},Fa={MIN:1,MAX:1400,LOG_SCALE:64};Object.freeze({layoutConfig:St(void 0),markerPixelSize:10,markerOutlineWidth:v.sizes.pointOutlineWidth,stemColor:v.colors.surface,activeMoveGizmoLabelZIndex:Fa.MAX+1});Object.freeze({...at({markerDiameterPx:v.sizes.pointPixelSize,markerStrokeWidthPx:v.sizes.pointOutlineWidth}),tickColor:un.colors.surfaceStrong,minOverlayZIndex:rt.zIndex.interactionHandleFloor});Object.freeze({cornerOverlay:Object.freeze({minBoxPx:20,paddingPx:6,targetRadiusPx:20,segments:20,strokeWidthPx:1.25,color:$t(),straightHitTargetPx:20})});function ae(e,n,t){e.prototype=n.prototype=t,t.constructor=e}function ue(e,n){var t=Object.create(e.prototype);for(var a in n)t[a]=n[a];return t}function $(){}var K=.7,ne=1/K,_a=/^#([0-9a-f]{3})$/,za=/^#([0-9a-f]{6})$/,Da=/^rgb\(\s*([-+]?\d+)\s*,\s*([-+]?\d+)\s*,\s*([-+]?\d+)\s*\)$/,Ha=/^rgb\(\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*\)$/,ja=/^rgba\(\s*([-+]?\d+)\s*,\s*([-+]?\d+)\s*,\s*([-+]?\d+)\s*,\s*([-+]?\d+(?:\.\d+)?)\s*\)$/,$a=/^rgba\(\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)\s*\)$/,Va=/^hsl\(\s*([-+]?\d+(?:\.\d+)?)\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*\)$/,Wa=/^hsla\(\s*([-+]?\d+(?:\.\d+)?)\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)\s*\)$/,nn={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};ae($,ze,{displayable:function(){return this.rgb().displayable()},toString:function(){return this.rgb()+""}});function ze(e){var n;return e=(e+"").trim().toLowerCase(),(n=_a.exec(e))?(n=parseInt(n[1],16),new I(n>>8&15|n>>4&240,n>>4&15|n&240,(n&15)<<4|n&15,1)):(n=za.exec(e))?tn(parseInt(n[1],16)):(n=Da.exec(e))?new I(n[1],n[2],n[3],1):(n=Ha.exec(e))?new I(n[1]*255/100,n[2]*255/100,n[3]*255/100,1):(n=ja.exec(e))?an(n[1],n[2],n[3],n[4]):(n=$a.exec(e))?an(n[1]*255/100,n[2]*255/100,n[3]*255/100,n[4]):(n=Va.exec(e))?rn(n[1],n[2]/100,n[3]/100,1):(n=Wa.exec(e))?rn(n[1],n[2]/100,n[3]/100,n[4]):nn.hasOwnProperty(e)?tn(nn[e]):e==="transparent"?new I(NaN,NaN,NaN,0):null}function tn(e){return new I(e>>16&255,e>>8&255,e&255,1)}function an(e,n,t,a){return a<=0&&(e=n=t=NaN),new I(e,n,t,a)}function De(e){return e instanceof $||(e=ze(e)),e?(e=e.rgb(),new I(e.r,e.g,e.b,e.opacity)):new I}function xn(e,n,t,a){return arguments.length===1?De(e):new I(e,n,t,a??1)}function I(e,n,t,a){this.r=+e,this.g=+n,this.b=+t,this.opacity=+a}ae(I,xn,ue($,{brighter:function(e){return e=e==null?ne:Math.pow(ne,e),new I(this.r*e,this.g*e,this.b*e,this.opacity)},darker:function(e){return e=e==null?K:Math.pow(K,e),new I(this.r*e,this.g*e,this.b*e,this.opacity)},rgb:function(){return this},displayable:function(){return 0<=this.r&&this.r<=255&&0<=this.g&&this.g<=255&&0<=this.b&&this.b<=255&&0<=this.opacity&&this.opacity<=1},toString:function(){var e=this.opacity;return e=isNaN(e)?1:Math.max(0,Math.min(1,e)),(e===1?"rgb(":"rgba(")+Math.max(0,Math.min(255,Math.round(this.r)||0))+", "+Math.max(0,Math.min(255,Math.round(this.g)||0))+", "+Math.max(0,Math.min(255,Math.round(this.b)||0))+(e===1?")":", "+e+")")}}));function rn(e,n,t,a){return a<=0?e=n=t=NaN:t<=0||t>=1?e=n=NaN:n<=0&&(e=NaN),new O(e,n,t,a)}function Ua(e){if(e instanceof O)return new O(e.h,e.s,e.l,e.opacity);if(e instanceof $||(e=ze(e)),!e)return new O;if(e instanceof O)return e;e=e.rgb();var n=e.r/255,t=e.g/255,a=e.b/255,r=Math.min(n,t,a),s=Math.max(n,t,a),i=NaN,l=s-r,u=(s+r)/2;return l?(n===s?i=(t-a)/l+(t<a)*6:t===s?i=(a-n)/l+2:i=(n-t)/l+4,l/=u<.5?s+r:2-s-r,i*=60):l=u>0&&u<1?0:i,new O(i,l,u,e.opacity)}function Ga(e,n,t,a){return arguments.length===1?Ua(e):new O(e,n,t,a??1)}function O(e,n,t,a){this.h=+e,this.s=+n,this.l=+t,this.opacity=+a}ae(O,Ga,ue($,{brighter:function(e){return e=e==null?ne:Math.pow(ne,e),new O(this.h,this.s,this.l*e,this.opacity)},darker:function(e){return e=e==null?K:Math.pow(K,e),new O(this.h,this.s,this.l*e,this.opacity)},rgb:function(){var e=this.h%360+(this.h<0)*360,n=isNaN(e)||isNaN(this.s)?0:this.s,t=this.l,a=t+(t<.5?t:1-t)*n,r=2*t-a;return new I(he(e>=240?e-240:e+120,r,a),he(e,r,a),he(e<120?e+240:e-120,r,a),this.opacity)},displayable:function(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1}}));function he(e,n,t){return(e<60?n+(t-n)*e/60:e<180?t:e<240?n+(t-n)*(240-e)/60:n)*255}var Sn=Math.PI/180,hn=180/Math.PI,pe=18,Tn=.95047,In=1,kn=1.08883,An=4/29,ee=6/29,Ln=3*ee*ee,Ya=ee*ee*ee;function He(e){if(e instanceof w)return new w(e.l,e.a,e.b,e.opacity);if(e instanceof D){var n=e.h*Sn;return new w(e.l,Math.cos(n)*e.c,Math.sin(n)*e.c,e.opacity)}e instanceof I||(e=De(e));var t=Ae(e.r),a=Ae(e.g),r=Ae(e.b),s=Te((.4124564*t+.3575761*a+.1804375*r)/Tn),i=Te((.2126729*t+.7151522*a+.072175*r)/In),l=Te((.0193339*t+.119192*a+.9503041*r)/kn);return new w(116*i-16,500*(s-i),200*(i-l),e.opacity)}function Xa(e,n,t,a){return arguments.length===1?He(e):new w(e,n,t,a??1)}function w(e,n,t,a){this.l=+e,this.a=+n,this.b=+t,this.opacity=+a}ae(w,Xa,ue($,{brighter:function(e){return new w(this.l+pe*(e??1),this.a,this.b,this.opacity)},darker:function(e){return new w(this.l-pe*(e??1),this.a,this.b,this.opacity)},rgb:function(){var e=(this.l+16)/116,n=isNaN(this.a)?e:e+this.a/500,t=isNaN(this.b)?e:e-this.b/200;return e=In*Ie(e),n=Tn*Ie(n),t=kn*Ie(t),new I(ke(3.2404542*n-1.5371385*e-.4985314*t),ke(-.969266*n+1.8760108*e+.041556*t),ke(.0556434*n-.2040259*e+1.0572252*t),this.opacity)}}));function Te(e){return e>Ya?Math.pow(e,1/3):e/Ln+An}function Ie(e){return e>ee?e*e*e:Ln*(e-An)}function ke(e){return 255*(e<=.0031308?12.92*e:1.055*Math.pow(e,1/2.4)-.055)}function Ae(e){return(e/=255)<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)}function Ka(e){if(e instanceof D)return new D(e.h,e.c,e.l,e.opacity);e instanceof w||(e=He(e));var n=Math.atan2(e.b,e.a)*hn;return new D(n<0?n+360:n,Math.sqrt(e.a*e.a+e.b*e.b),e.l,e.opacity)}function Za(e,n,t,a){return arguments.length===1?Ka(e):new D(e,n,t,a??1)}function D(e,n,t,a){this.h=+e,this.c=+n,this.l=+t,this.opacity=+a}ae(D,Za,ue($,{brighter:function(e){return new D(this.h,this.c,this.l+pe*(e??1),this.opacity)},darker:function(e){return new D(this.h,this.c,this.l-pe*(e??1),this.opacity)},rgb:function(){return He(this).rgb()}}));var En=-.14861,je=1.78277,$e=-.29227,ye=-.90649,le=1.97294,on=le*ye,sn=le*je,ln=je*$e-ye*En;function Ja(e){if(e instanceof X)return new X(e.h,e.s,e.l,e.opacity);e instanceof I||(e=De(e));var n=e.r/255,t=e.g/255,a=e.b/255,r=(ln*a+on*n-sn*t)/(ln+on-sn),s=a-r,i=(le*(t-r)-$e*s)/ye,l=Math.sqrt(i*i+s*s)/(le*r*(1-r)),u=l?Math.atan2(i,s)*hn-120:NaN;return new X(u<0?u+360:u,l,r,e.opacity)}function Qa(e,n,t,a){return arguments.length===1?Ja(e):new X(e,n,t,a??1)}function X(e,n,t,a){this.h=+e,this.s=+n,this.l=+t,this.opacity=+a}ae(X,Qa,ue($,{brighter:function(e){return e=e==null?ne:Math.pow(ne,e),new X(this.h,this.s,this.l*e,this.opacity)},darker:function(e){return e=e==null?K:Math.pow(K,e),new X(this.h,this.s,this.l*e,this.opacity)},rgb:function(){var e=isNaN(this.h)?0:(this.h+120)*Sn,n=+this.l,t=isNaN(this.s)?0:this.s*n*(1-n),a=Math.cos(e),r=Math.sin(e);return new I(255*(n+t*(En*a+je*r)),255*(n+t*($e*a+ye*r)),255*(n+t*(le*a)),this.opacity)}}));const Rn=xn(S.ACCENT_MEASUREMENTS).brighter(.1);Rn.opacity=.5;const Pn=Vt(),er=Object.freeze({backgroundColor:Xe("background"),hoverBackgroundColor:Xe("hoverBackground"),textColor:Pn,glowColor:me(1),glowRadiusPx:5,preserveFillOnSelection:!0}),nr=Object.freeze({id:"accent-measurements",label:"Measurements · Accent",colorPrimaryReduced:Rn.toString(),colorPrimary:S.ACCENT_MEASUREMENTS,lineColor:v.colors.surface,textColor:Pn}),L=Object.freeze({scheme:nr,fontFamily:Q.fontFamily,contentFontWeight:Q.lineLabelFontWeight,badgeFontWeight:Q.badgeFontWeight,selection:er}),fi=e=>L,Ni=Object.freeze({fontSize:Q.rootFontSizeRem,fontFamily:L.fontFamily,fontWeight:L.contentFontWeight,lineColor:L.scheme.lineColor,textBackgroundColor:L.scheme.colorPrimaryReduced,textColor:L.scheme.textColor,markerBackgroundColor:L.scheme.colorPrimary,markerTextColor:L.scheme.textColor,selectedBackgroundColor:L.selection.backgroundColor,selectedTextColor:L.selection.textColor,selectedGlowColor:L.selection.glowColor,selectedGlowRadiusPx:L.selection.glowRadiusPx,preserveFillOnSelection:L.selection.preserveFillOnSelection,hoverBackgroundColor:L.selection.hoverBackgroundColor,markerPixelSize:v.sizes.pointPixelSize,markerOutlineWidth:v.sizes.pointOutlineWidth});h.createContext(null);export{Rr as $,er as A,qt as B,Ot as C,wt as D,Ut as E,Yt as F,Ia as G,ka as H,Ci as I,ht as J,Er as K,yi as L,Xr as M,Kr as N,ii as O,ya as P,oi as Q,pi as R,Ur as S,fn as T,kr as U,jt as V,ci as W,di as X,xe as Y,gi as Z,mi as _,Et as a,Ir as a0,Mt as a1,da as a2,ca as a3,Gr as a4,Yr as a5,yn as a6,Jt as a7,Kt as a8,Lr as a9,L as aa,Pr as ab,G as ac,Ni as ad,Ar as ae,_ as af,Wr as ag,Dr as ah,Mr as ai,Br as aj,Wt as ak,pn as al,xn as am,ze as an,wa as ao,pa as b,Pn as c,A as d,si as e,Ca as f,Ne as g,F as h,ai as i,ri as j,li as k,ui as l,v as m,N as n,Jr as o,Fe as p,ni as q,fi as r,ei as s,Q as t,ti as u,Zr as v,Qr as w,te as x,Ft as y,zt as z};
