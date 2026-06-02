import{j as C}from"./jsx-runtime-DCY474Ph.js";import{F as Re,r as zn,s as Dn,t as Hn,u as jn,v as $n,w as Wn,x as Vn,y as Un,z as Gn,A as Yn}from"./index-BrmODtEK.js";import{r as v}from"./index-f9CH5uyH.js";import{T as Xn}from"./ua-parser-B48uBFyz.js";import{f as Ne,C as S,r as Kn}from"./index-B4PKD6xO.js";import"./index-o4jIgCFn.js";import{n as Zn,o as Jn,S as Qn,p as et,f as nt,q as cn,s as tt,t as at,v as rt,w as it,l as ot}from"./useLineSegmentVisualizers-CBvdP-rK.js";import{a as y,p as Pe,a3 as st,j as lt,k as ut,b as Ue,h as dt,i as ct}from"./Elevation-ayWRDRsq.js";import{c as mt,a as gt,b as yt,d as pt}from"./useCesiumPointMoveGizmo-BhGDKwWM.js";import"./useCesiumFovWheelZoom-DkJFUV9B.js";import"./maplibre-gl-DqKvp_Oy.js";import"./geodetic-BlUMYLim.js";import{c as Ct}from"./clamp-co6UzHBn.js";import{e as ft,h as Nt,i as bt,s as xt,f as ht}from"./geometry2d-DQa1xX1M.js";import{i as St}from"./carma-guards-BmMHTcWi.js";import{n as mn}from"./angle-normalization-BAbnbuFS.js";import{c as Ge,P as Z,b as ue}from"./angles-T4rDf7Ka.js";import{c as qe}from"./CoordinateAdapters-Cv_28Sc3.js";/* empty css                                      */import{S as vt}from"./Scene-Ce7d8PtI.js";import{r as Tt}from"./config-BkpyF_ya.js";import"./annotation-cursor-overlay-style-BiBLE8yx.js";import"./svgProjection-DC0AVwLB.js";const pe={LABEL:"label",VISUALIZER:"visualizer"},It=pe,Me=e=>`[${e}="true"]`,Ye="data-annotation-label-overlay-root",Xe="data-annotation-visualizer-overlay-root",gn="data-annotation-visualizer-overlay-container",kt=Me(gn),At=Object.freeze({[pe.LABEL]:{rootAttribute:Ye,containerAttribute:Zn,rootSelector:Me(Ye),containerSelector:Jn},[pe.VISUALIZER]:{rootAttribute:Xe,containerAttribute:gn,rootSelector:Me(Xe),containerSelector:kt}}),Lt=e=>At[e],Et=(e,n=pe.LABEL)=>{var i,l;const{rootSelector:t,containerSelector:r}=Lt(n);let a=e.canvas.parentElement,s=a;for(;a;){if(a.matches(r))return a;const u=(i=a.querySelector)==null?void 0:i.call(a,r);if(u instanceof HTMLElement)return u;if(a.matches(t))return a;const o=(l=a.querySelector)==null?void 0:l.call(a,t);if(o instanceof HTMLElement)return o;s=a,a=a.parentElement}return s},Rt=Et,P={FLY_TO:"flyTo",EXPORT:"export",VISIBILITY:"visibility",REFERENCE:"reference",LOCK:"lock",DELETE:"delete"},M=(()=>{const e="1rem",n="0.8571rem",t="1rem";return Object.freeze({rootFontSizeRem:e,supportFontSizeRem:n,headingFontSizeRem:t,headingFontWeight:600,headingTypographyClassName:`text-[${n}] font-semibold tracking-[0.03em]`,titleTypographyClassName:`text-[${t}] font-semibold leading-[1.25]`})})(),q=Object.freeze({borderRadiusRem:"0.2143rem",hairlineBorderWidthRem:"0.0357rem",panelInsetShadowYOffsetRem:"0.0714rem",panelInsetShadowBlurRem:"0.0714rem",panelBackdropBlurRem:"0.1429rem"}),b=Object.freeze({heading:S.ACCENT_MEASUREMENTS,panelSurface:S.NEUTRAL_SURFACE_SUBTLE,panelBorder:S.NEUTRAL_BORDER_SUBTLE,shadowBase:S.NEUTRAL_BLACK,bodyText:S.NEUTRAL_TEXT_PRIMARY,mutedText:S.NEUTRAL_TEXT_MUTED,linkText:S.WUPP_BLUE,fieldText:S.NEUTRAL_TEXT_STRONG,fieldBorder:S.NEUTRAL_BORDER_DEFAULT,fieldInputBorder:S.NEUTRAL_BORDER_INPUT,fieldFocusBackground:S.STATE_FOCUS_BACKGROUND_WARM,fieldFocusOutline:S.STATE_FOCUS_OUTLINE,titleText:S.NEUTRAL_TEXT_STRONG}),be=Object.freeze({panelSurface:.9,panelBorder:.9,panelInsetShadow:.02}),Pt=Object.freeze({defaultPixelWidth:430,headingColor:b.heading,bodyPanelStyle:{backgroundColor:Ne(b.panelSurface,be.panelSurface),border:`${q.hairlineBorderWidthRem} solid ${Ne(b.panelBorder,be.panelBorder)}`,boxShadow:`${Ne(b.shadowBase,be.panelInsetShadow)} 0 ${q.panelInsetShadowYOffsetRem} ${q.panelInsetShadowBlurRem} inset`,backdropFilter:`blur(${q.panelBackdropBlurRem})`,WebkitBackdropFilter:`blur(${q.panelBackdropBlurRem})`},resolveActionTooltipPopupContainer:e=>e.closest('[data-test-id="annotation-info-box"]')??e.ownerDocument.body,headerForegroundClassName:"text-white/80",headerTitleClassName:`truncate ${M.headingTypographyClassName}`,subtitleContainerClassName:"mb-0 w-full px-2 pt-[0.28em]",subtitleTextStyle:{color:S.ACCENT_NEUTRALS},subtitleTextClassName:`px-2 text-[${M.supportFontSizeRem}] leading-[1.1] font-semibold`,subtitleMetaTextStyle:{color:S.ACCENT_NEUTRALS},subtitleMetaTextClassName:`mt-[0.08em] whitespace-nowrap text-[${M.supportFontSizeRem}] leading-[1.1] font-semibold`,showSubtitleMetaText:!0,bodyContainerClassName:"px-2 pb-2 pt-1",bodyTextStyle:{fontSize:M.rootFontSizeRem,lineHeight:1.4,color:b.bodyText},bodyTextClassName:`text-[${M.rootFontSizeRem}] leading-[1.4] text-[${b.bodyText}]`,emptyContentLineStyle:{minHeight:"1.4em"},emptyContentLineClassName:"w-full",mutedTextClassName:`text-[${b.mutedText}]`,linkTextClassName:`text-[${b.linkText}]`,actionIconClassName:"transition-colors",actionIconColor:S.ACCENT_NEUTRALS,actionIconHoverColor:S.ACCENT_NEUTRALS_HOVER,actionIconFontSize:"16px",hiddenActionIds:[],fieldTextClassName:`text-[${b.fieldText}]`,fieldBorderClassName:`border-[${q.hairlineBorderWidthRem}] border-[${b.fieldBorder}]`,fieldInputBorderClassName:`border-[${q.hairlineBorderWidthRem}] border-[${b.fieldInputBorder}]`,fieldFocusBackgroundClassName:`focus:bg-[${b.fieldFocusBackground}]`,fieldFocusOutlineClassName:`focus:outline focus:outline-2 focus:outline-[${b.fieldFocusOutline}]`,subtleFieldBackgroundClassName:"bg-white/85",titleTextStyle:{fontSize:M.headingFontSizeRem,fontWeight:M.headingFontWeight,lineHeight:1.25},titleTextClassName:`text-[${b.titleText}]/80 ${M.titleTypographyClassName}`,titleInputClassName:`min-w-0 w-auto max-w-full appearance-none [field-sizing:content] break-words rounded-[${q.borderRadiusRem}] border border-transparent bg-transparent px-0 py-[0.05em] text-[${b.titleText}]/80 placeholder:text-[${b.titleText}]/50 focus:bg-[${b.fieldFocusBackground}] focus:outline focus:outline-2 focus:outline-[${b.fieldFocusOutline}] ${M.titleTypographyClassName}`,shortLabelInputClassName:`shrink-0 w-auto appearance-none [field-sizing:content] border-[${q.hairlineBorderWidthRem}] px-[0.5ex] py-0 text-center tabular-nums border-[${b.fieldBorder}] bg-white/85 text-[${b.titleText}]/80 placeholder:text-[${b.titleText}]/80 focus:bg-[${b.fieldFocusBackground}] focus:outline focus:outline-2 focus:outline-[${b.fieldFocusOutline}] ${M.titleTypographyClassName}`,navigationInstructionContainerClassName:"mt-1 flex w-full items-center justify-center px-2 pt-1",navigationAvailabilityContainerClassName:"mt-1 flex w-full items-center justify-center px-2 pt-1",navigationSummaryContainerClassName:"mb-1 mt-0 flex w-full items-center justify-between px-2",navigationLinkFontSize:M.supportFontSizeRem,inlineFieldButtonClassName:`inline-flex h-5 w-5 items-center justify-center rounded border-[${q.hairlineBorderWidthRem}] border-[${b.fieldInputBorder}]`,colorInputClassName:`h-6 w-8 cursor-pointer rounded border-[${q.hairlineBorderWidthRem}] border-[${b.fieldInputBorder}] bg-transparent p-0`,inlineActionButtonClassName:`inline-flex items-center gap-1 rounded border-[${q.hairlineBorderWidthRem}] border-[${b.fieldInputBorder}] px-2 py-1`}),oe=e=>({...Pt,...e}),qt=Object.freeze({tooltipZIndex:1700}),X=({actionId:e,title:n,icon:t,onClick:r,dataTestId:a,className:s,ariaLabel:i,disabled:l=!1,visualOptions:u})=>{var f;const o=oe(u),[c,d]=v.useState(!1),g=`${o.actionIconClassName}${s?` ${s}`:""}${l?" cursor-not-allowed opacity-50":" cursor-pointer"}`,m={fontSize:o.actionIconFontSize,color:c&&!l?o.actionIconHoverColor:o.actionIconColor},p=(f=o.renderActionIcon)==null?void 0:f.call(o,{actionId:e,icon:t,className:g,style:m,dataTestId:a,ariaLabel:i,disabled:l});return C.jsx(Xn,{title:n,zIndex:qt.tooltipZIndex,getPopupContainer:k=>{const T=k instanceof HTMLElement?k:document.body;return o.resolveActionTooltipPopupContainer(T)},children:C.jsx("span",{onClick:k=>{if(l){k.stopPropagation();return}r(k)},onMouseEnter:()=>d(!0),onMouseLeave:()=>d(!1),className:"inline-flex items-center leading-none","aria-label":i,"aria-disabled":l,children:p??C.jsx(Re,{className:g,style:m,icon:t,"data-test-id":a,"aria-hidden":i?void 0:!0})})})};X.__docgenInfo={description:"",methods:[],displayName:"AnnotationInfoBoxActionIcon",props:{actionId:{required:!0,tsType:{name:"unknown[union]",raw:"(typeof ANNOTATION_INFO_BOX_ACTION_IDS)[keyof typeof ANNOTATION_INFO_BOX_ACTION_IDS]"},description:""},title:{required:!0,tsType:{name:"string"},description:""},icon:{required:!0,tsType:{name:"IconDefinition"},description:""},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: ReactMouseEvent<HTMLElement, MouseEvent>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",elements:[{name:"HTMLElement"},{name:"MouseEvent"}],raw:"ReactMouseEvent<HTMLElement, MouseEvent>"},name:"event"}],return:{name:"void"}}},description:""},dataTestId:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},visualOptions:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};const Mt=Object.freeze({flyTo:"Zur Messung fliegen",exportGeoJson:"Als GeoJSON exportieren",show:"Einblenden",hide:"Ausblenden",setReference:"Als Referenzhöhe setzen",lock:"Sperren",unlock:"Entsperren",delete:"Löschen",deleteLocked:"Gesperrte Messung kann nicht gelöscht werden"}),Bt=({hidden:e=!1,locked:n=!1,labels:t,onFlyTo:r,onExport:a,onToggleVisibility:s,onToggleLock:i,onDelete:l,onSetReference:u,visualOptions:o,dataTestIdPrefix:c,dataTestIds:d})=>{const g={...Mt,...t},m=new Set((o==null?void 0:o.hiddenActionIds)??[]),p=f=>!m.has(f);return C.jsxs("div",{className:"flex items-center gap-2",children:[p(P.FLY_TO)?C.jsx(X,{actionId:P.FLY_TO,title:g.flyTo,icon:zn,onClick:r,dataTestId:(d==null?void 0:d.flyTo)??`${c}-flyto-btn`,visualOptions:o}):null,p(P.EXPORT)?C.jsx(X,{actionId:P.EXPORT,title:g.exportGeoJson,icon:Dn,onClick:a,dataTestId:(d==null?void 0:d.export)??`${c}-export-geojson-btn`,visualOptions:o}):null,p(P.VISIBILITY)?C.jsx(X,{actionId:P.VISIBILITY,title:e?g.show:g.hide,icon:e?Hn:jn,onClick:s,dataTestId:(d==null?void 0:d.visibility)??`${c}-toggle-visibility-btn`,visualOptions:o}):null,u&&p(P.REFERENCE)?C.jsx(X,{actionId:P.REFERENCE,title:g.setReference,icon:$n,onClick:u,dataTestId:(d==null?void 0:d.reference)??`${c}-set-reference-btn`,visualOptions:o}):null,p(P.LOCK)?C.jsx(X,{actionId:P.LOCK,title:n?g.unlock:g.lock,icon:n?Wn:Vn,onClick:i,dataTestId:(d==null?void 0:d.lock)??`${c}-toggle-lock-btn`,visualOptions:o}):null,p(P.DELETE)?C.jsx(X,{actionId:P.DELETE,title:n?g.deleteLocked:g.delete,icon:Un,onClick:l,dataTestId:(d==null?void 0:d.delete)??`${c}-delete-btn`,disabled:n,visualOptions:o}):null]})};Bt.__docgenInfo={description:"",methods:[],displayName:"AnnotationInfoBoxActions",props:{hidden:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},locked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},labels:{required:!1,tsType:{name:"Partial",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};const Ot=({items:e,className:n,visualOptions:t})=>{const r=oe(t),a=r.subtitleTextClassName.split(/\s+/).filter(s=>s.length>0&&!s.startsWith("px-")).join(" ");return C.jsx("dl",{className:`flex flex-wrap items-start tabular-nums${n?` ${n}`:""}`,style:{columnGap:"1.35rem",rowGap:"0.5rem"},children:e.map((s,i)=>C.jsxs("div",{className:"grid max-w-full min-w-[5rem] flex-[0_1_auto] grid-rows-[auto,auto] content-start items-start gap-y-[0.1em] text-left",children:[C.jsx("dt",{className:a,style:r.subtitleTextStyle,children:s.label}),C.jsx("dd",{className:"m-0 leading-[1.25]",children:s.value})]},s.id??i))})};Ot.__docgenInfo={description:"",methods:[],displayName:"AnnotationInfoBoxMetricGrid",props:{items:{required:!0,tsType:{name:"unknown"},description:""},className:{required:!1,tsType:{name:"string"},description:""},visualOptions:{required:!1,tsType:{name:"Partial",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Partial<AnnotationInfoBoxVisualOptions>"},description:""}}};const wt=({children:e,className:n,style:t,visualOptions:r})=>{const a=oe(r);return C.jsx("div",{className:`${a.subtitleMetaTextClassName}${n?` ${n}`:""}`,style:{...a.subtitleMetaTextStyle,...t},children:e})};wt.__docgenInfo={description:"",methods:[],displayName:"AnnotationInfoBoxMetaText",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""},visualOptions:{required:!1,tsType:{name:"Partial",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Partial<AnnotationInfoBoxVisualOptions>"},description:""}}};const Ft=Object.freeze({measurementSingular:"Messung",measurementPlural:"Messungen",availableSuffix:"verfügbar",previousAriaLabel:"Vorherige Messung",nextAriaLabel:"Nächste Messung",counterSeparator:"von"}),Ke=(e,n)=>`${e} ${e===1?n.measurementSingular:n.measurementPlural} ${n.availableSuffix}`.trim(),_t=({totalEntries:e,currentIndex:n,instructionText:t,availabilityLabel:r,labels:a,onFlyToAllMeasurements:s,onPreviousMeasurement:i,onNextMeasurement:l,visualOptions:u})=>{var p,f;const o=oe(u),c={...Ft,...a};if(e<=0&&!t)return null;const d={fontSize:o.navigationLinkFontSize,border:"none",background:"transparent",padding:0,userSelect:"none"},g=((p=o.navigationControlLabels)==null?void 0:p.previous)??C.jsx(Re,{icon:Gn}),m=((f=o.navigationControlLabels)==null?void 0:f.next)??C.jsx(Re,{icon:Yn});return C.jsxs(C.Fragment,{children:[t?C.jsx("div",{className:`${o.navigationInstructionContainerClassName} ${o.mutedTextClassName}`,children:C.jsx("span",{children:t})}):null,e>0?C.jsx("div",{className:o.navigationAvailabilityContainerClassName,children:s?C.jsx("button",{type:"button",className:`${o.linkTextClassName} cursor-pointer`,onClick:s,style:{border:"none",background:"transparent",padding:0},children:r??Ke(e,c)}):C.jsx("span",{className:o.linkTextClassName,children:r??Ke(e,c)})}):null,e>0?C.jsxs("div",{className:o.navigationSummaryContainerClassName,children:[C.jsx("button",{type:"button",className:`renderAsLink cursor-pointer select-none ${o.linkTextClassName}`,onClick:i,"data-test-id":"switch-measurement-left",style:d,"aria-label":c.previousAriaLabel,children:g}),C.jsxs("span",{className:"mx-4",children:[n+1," ",c.counterSeparator," ",e]}),C.jsx("button",{type:"button",className:`renderAsLink cursor-pointer select-none ${o.linkTextClassName}`,onClick:l,"data-test-id":"switch-measurement-right",style:d,"aria-label":c.nextAriaLabel,children:m})]}):null]})};_t.__docgenInfo={description:"",methods:[],displayName:"AnnotationInfoBoxNavigation",props:{totalEntries:{required:!0,tsType:{name:"number"},description:""},currentIndex:{required:!0,tsType:{name:"number"},description:""},instructionText:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},availabilityLabel:{required:!1,tsType:{name:"ReactNode"},description:""},labels:{required:!1,tsType:{name:"Partial",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};const zt=({children:e,className:n,style:t,visualOptions:r})=>{const a=oe(r);return C.jsx("div",{className:`${a.bodyContainerClassName} ${a.bodyTextClassName}${n?` ${n}`:""}`,style:{...a.bodyTextStyle,...t},children:e})};zt.__docgenInfo={description:"",methods:[],displayName:"AnnotationInfoBoxTextContent",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""},visualOptions:{required:!1,tsType:{name:"Partial",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Partial<AnnotationInfoBoxVisualOptions>"},description:""}}};const le=e=>e.trim(),w=Object.freeze({borderRadiusRem:"0.2143rem",shortLabelMaxLength:64,shortLabelWidthPaddingCh:.5,shortLabelMinWidthCh:2.5}),me=e=>le(e).slice(0,w.shortLabelMaxLength),Dt=e=>e.slice(0,w.shortLabelMaxLength),Ht=({value:e,placeholder:n,onCommit:t,shortLabelValue:r,shortLabelPlaceholder:a,onShortLabelCommit:s,visualOptions:i})=>{const l=oe(i),[u,o]=v.useState(()=>le(e)),[c,d]=v.useState(()=>me(r??"")),g=v.useRef(null),m=v.useRef(null),p=w.shortLabelMaxLength+w.shortLabelWidthPaddingCh,f=Math.min(Math.max(le(c||a||"").length+w.shortLabelWidthPaddingCh,w.shortLabelMinWidthCh),p);v.useEffect(()=>{o(le(e))},[e]),v.useEffect(()=>{d(me(r??""))},[r]);const k=h=>{const R=le(h);o(R),t(R)},T=h=>{if(!s)return;const R=me(h);if(!R){const _n=me(r??"");d(_n);return}d(R),s(R)},E=h=>{h.stopPropagation()},Bn=h=>{var R;h.key==="Enter"&&(h.preventDefault(),(R=g.current)==null||R.blur())},On=h=>{var R;h.key==="Enter"&&(h.preventDefault(),(R=m.current)==null||R.blur())},wn={...l.titleTextStyle,flex:"0 1 auto",minWidth:"1ch",maxWidth:"100%",fieldSizing:"content"},Fn={...l.titleTextStyle,borderRadius:w.borderRadiusRem,flex:"0 1 auto",width:`${f}ch`,minWidth:`${w.shortLabelMinWidthCh}ch`,maxWidth:`min(${p}ch, 100%)`,fieldSizing:"content"};return C.jsxs("div",{className:"inline-flex min-w-0 max-w-full flex-1 items-center",style:{columnGap:"0.35em"},onMouseDown:E,onClick:E,children:[C.jsx("input",{ref:g,type:"text",value:u,placeholder:n,className:l.titleInputClassName,style:wn,onMouseDown:E,onClick:E,onChange:h=>o(h.target.value),onBlur:h=>k(h.target.value),onKeyDown:Bn}),s?C.jsx("input",{ref:m,type:"text",value:c,placeholder:a,maxLength:w.shortLabelMaxLength,className:l.shortLabelInputClassName,style:Fn,onMouseDown:E,onClick:E,onChange:h=>d(Dt(h.target.value)),onBlur:h=>T(h.target.value),onKeyDown:On}):null]})};Ht.__docgenInfo={description:"",methods:[],displayName:"AnnotationInfoBoxTitleInput",props:{value:{required:!0,tsType:{name:"string"},description:""},placeholder:{required:!0,tsType:{name:"string"},description:""},onCommit:{required:!0,tsType:{name:"signature",type:"function",raw:"(nextValue: string) => void",signature:{arguments:[{type:{name:"string"},name:"nextValue"}],return:{name:"void"}}},description:""},shortLabelValue:{required:!1,tsType:{name:"string"},description:""},shortLabelPlaceholder:{required:!1,tsType:{name:"string"},description:""},onShortLabelCommit:{required:!1,tsType:{name:"signature",type:"function",raw:"(nextValue: string) => void",signature:{arguments:[{type:{name:"string"},name:"nextValue"}],return:{name:"void"}}},description:""},visualOptions:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};const ee=Object.freeze({lineLengthEpsilonPx:.001,referenceDistanceFactor:.2,flipThresholdPx:4,referenceMinDistancePx:24,referenceMaxDistancePx:48,insideBlendFactor:.35,elevationEpsilonMeters:.001,geometryEpsilonPx:1e-6,geometryEpsilonPxSquared:1e-6**2,polygonAreaEpsilonPx2:1e-6,interiorSampleGridResolution:18,minInteriorSampleGridResolution:6,inwardProbeStepsPx:[.5,1,2,4,8,12,16,24,32],polygonLabelPaddingXPx:6,polygonLabelPaddingYPx:4,polygonLabelMinAreaToLabelRatio:1.15,polylabelPrecisionPx:.5,polylabelMaxCellsToProcess:2e4,minSafeLabelDimensionPx:1}),Er=(e,n,t,r=ee.referenceMinDistancePx,a=ee.referenceMaxDistancePx)=>{const s=ft({start:e,end:n,epsilon:ee.lineLengthEpsilonPx});if(!s)return null;const i=Nt(t,s.midpoint),u=bt(i,s.leftUnitNormal)>=0?1:-1,o=Ct(s.length*ee.referenceDistanceFactor,r,a),c=xt(s.leftUnitNormal,u*o);return ht(s.midpoint,c)},jt=({triangle:e,auxiliaryAltitudeMeters:n,highestAltitudeMeters:t,insideBlendFactor:r=ee.insideBlendFactor,elevationEpsilonMeters:a=ee.elevationEpsilonMeters})=>{const s=n<t-a?e.highest:e.aux;return{x:s.x+(e.centroid.x-s.x)*r,y:s.y+(e.centroid.y-s.y)*r}},N={POINT:"point",DISTANCE:"distance",POLYLINE:"polyline",AREA_GROUND:"area",AREA_PLANAR:"planar",AREA_VERTICAL:"vertical",LABEL:"label"},$t="select",yn=e=>e===N.AREA_GROUND||e===N.AREA_VERTICAL||e===N.AREA_PLANAR,Wt=e=>{if(!Number.isFinite(e)||e<0)return"A";let n=Math.floor(e),t="";do t=String.fromCharCode(65+n%26)+t,n=Math.floor(n/26)-1;while(n>=0);return t},Be=Object.freeze({fillAlpha:.25,selectedFillAlpha:.35,rgb255ByType:{[N.AREA_VERTICAL]:[112,168,255],[N.AREA_GROUND]:[107,188,123],[N.AREA_PLANAR]:[239,223,145]}}),pn=([e,n,t],r)=>`rgba(${e}, ${n}, ${t}, ${r})`,Fe=e=>Be.rgb255ByType[e],Rr=(e,n)=>pn(Fe(e),n?Be.selectedFillAlpha:Be.fillAlpha),Vt=(e,n)=>pn(Fe(e),n),A={DIRECT:"direct",VERTICAL:"vertical",HORIZONTAL:"horizontal"},z=Object.freeze({textRgb255:{dark:[17,24,39],light:[255,255,255]},measurementTextRgb255:[248,250,252],shortLabelRgb255ByType:{[N.POINT]:[200,200,200],[N.DISTANCE]:[102,126,234],[N.POLYLINE]:[226,178,60],[N.LABEL]:[88,152,255]},surfaceRgb255:{stroke:[255,255,255],accent:[246,248,255]},lineComponentRgb255ByKind:{[A.DIRECT]:[255,255,255],[A.VERTICAL]:[111,168,255],[A.HORIZONTAL]:[188,194,102]},selectionRgb255:{background:[15,23,42],hoverBackground:[30,41,59],glow:[255,255,255]}}),$=Object.freeze({alpha:{text:{dark:.9,light:1},shortLabelBackgroundByType:{[N.POINT]:.92,[N.DISTANCE]:.95,[N.POLYLINE]:.95,[N.LABEL]:.95,area:.95},lineComponentByKind:{[A.DIRECT]:1,[A.VERTICAL]:.96,[A.HORIZONTAL]:.95},lineComponentLabelAccentByKind:{[A.DIRECT]:.34,[A.VERTICAL]:.54,[A.HORIZONTAL]:.5},selection:{background:.92,hoverBackground:.9,glow:1},surfaceStroke:.95}}),W=([e,n,t],r)=>`rgba(${e}, ${n}, ${t}, ${r})`,U=(e,n=$.alpha.text[e])=>W(z.textRgb255[e],n),ye=(e=$.alpha.surfaceStroke)=>W(z.surfaceRgb255.stroke,e),Ut=(e=$.alpha.surfaceStroke)=>W(z.surfaceRgb255.accent,e),xe=(e,n=$.alpha.lineComponentByKind[e])=>W(z.lineComponentRgb255ByKind[e],n),he=(e,n=$.alpha.lineComponentLabelAccentByKind[e])=>W(z.lineComponentRgb255ByKind[e],n),G=e=>yn(e)?Vt(e,$.alpha.shortLabelBackgroundByType.area):W(z.shortLabelRgb255ByType[e],$.alpha.shortLabelBackgroundByType[e]),Pr=e=>yn(e)?Fe(e):z.shortLabelRgb255ByType[e],Ze=(e,n=$.alpha.selection[e])=>W(z.selectionRgb255[e],n),Gt=(e=1)=>W(z.measurementTextRgb255,e),K=Object.freeze({fontFamily:'"Helvetica Neue", Arial, Helvetica, sans-serif',fontWeight:{regular:400,medium:500,semibold:600},fontSizePx:{supportText:12,pointLabel:14,measurementLabel:16,compactBadge:10,distancePairLabel:11}}),D={NUMERIC:"numeric",ALPHABETIC:"alphabetic"},Yt={[N.POINT]:{prefix:"",counterStyle:D.NUMERIC,backgroundColor:G(N.POINT),textColor:U("dark")},[N.DISTANCE]:{prefix:"",counterStyle:D.ALPHABETIC,backgroundColor:G(N.DISTANCE),textColor:U("light")},[N.POLYLINE]:{prefix:"L",counterStyle:D.NUMERIC,backgroundColor:G(N.POLYLINE),textColor:U("dark")},[N.AREA_GROUND]:{prefix:"A",counterStyle:D.NUMERIC,backgroundColor:G(N.AREA_GROUND),textColor:U("light")},[N.AREA_PLANAR]:{prefix:"D",counterStyle:D.NUMERIC,backgroundColor:G(N.AREA_PLANAR),textColor:U("light")},[N.AREA_VERTICAL]:{prefix:"F",counterStyle:D.NUMERIC,backgroundColor:G(N.AREA_VERTICAL),textColor:U("light")},[N.LABEL]:{prefix:"T",counterStyle:D.NUMERIC,backgroundColor:G(N.LABEL),textColor:U("light")}},qr=(e,n,t=Yt)=>{const r=t[e],a=Number.isFinite(n)&&n>0?Math.floor(n):1,s=r.counterStyle===D.ALPHABETIC?Wt(a-1):`${a}`;return`${r.prefix}${s}`},_e=1e-12,Mr=(e,n)=>e.map(t=>y.add(t,n,new y)),Xt=(e,n,t=new y)=>{const r=y.magnitudeSquared(n);if(r<=_e)return y.clone(e,t);const a=y.dot(e,n)/r;return y.subtract(e,y.multiplyByScalar(n,a,new y),t)},Kt=(e,n,t,r=new y)=>{const a=y.magnitudeSquared(t);if(a<=_e)return y.clone(e,r);const s=y.subtract(e,n,new y),i=y.dot(s,t)/a;return y.subtract(e,y.multiplyByScalar(t,i,new y),r)},Zt=(e,n,t,r=new y)=>{const a=y.subtract(n,e,new y),s=y.subtract(t,e,new y),i=y.cross(a,s,r);return y.magnitudeSquared(i)<=_e?null:y.normalize(i,r)},Jt=0,Qt=e=>e??Jt,ea=e=>({longitude:Ge(e.longitude),latitude:Ge(e.latitude),altitude:e.height}),na=e=>{const n=Pe.fromCartesian(e);return ea(n)},Je=Object.freeze({componentEpsilonMeters:.05}),ta=(e,n,t)=>{const r=Zt(e,n,t);return r?{anchorECEF:y.clone(e),normalECEF:r}:null},Qe=(e,n)=>Kt(e,n.anchorECEF,n.normalECEF),Cn=(e,n)=>{const t=st(e),r=y.subtract(n,e,new y),a=y.dot(r,t),s=y.multiplyByScalar(t,a,new y),i=Xt(r,t),l=y.magnitude(i),u=Math.abs(a);if(l<Je.componentEpsilonMeters||u<Je.componentEpsilonMeters)return null;const o=y.add(e,i,new y),c=y.add(e,s,new y),d=y.add(e,t,new y),g=ta(e,d,o);return{adjacentHorizontalCorner:g?Qe(o,g):o,adjacentVerticalCorner:g?Qe(c,g):c}},Br=(e,n)=>{const t=Cn(e,n);if(!t)return 0;const r=y.distance(e,t.adjacentHorizontalCorner),a=y.distance(e,t.adjacentVerticalCorner);return r*a},en=e=>e.reduce((n,t)=>{const r=t.match(/(\d+)$/),a=r?Number(r[1]):Number.NaN;return Number.isFinite(a)?Math.max(n,a):n},0),Or=e=>new Map(e.flatMap(n=>n.nodeIds.map(t=>[t,n.id]))),ne=({nodes:e,nodeLinks:n})=>{const t=new Set(e.map(i=>i.id)),r=n.map(i=>({...i,nodeIds:Array.from(new Set(i.nodeIds.filter(l=>t.has(l))))})).filter(i=>i.nodeIds.length>0),a=new Set(r.flatMap(i=>i.nodeIds)),s=e.filter(i=>!a.has(i.id)).map(i=>({id:i.id,nodeIds:[i.id]}));return[...r,...s]},nn=6378137,aa=.1,Se=e=>e*Math.PI/180,ra=(e,n)=>{const t=Se(n.latitude-e.latitude),r=Se(n.longitude-e.longitude),a=Se((e.latitude+n.latitude)/2),s=r*Math.cos(a)*nn,i=t*nn,l=n.altitude-e.altitude;return Math.hypot(s,i,l)},ia=e=>typeof e=="string"&&e.trim().length>0?e.trim():null,oa=({nodes:e,nodeLinks:n,nodeId:t,movedNodeIds:r,linkToNodeId:a})=>{const s=e.find(m=>m.id===t)??null,i=Array.from(new Set(r.filter(Boolean)));if(!s||i.length===0)return[...n];const l=new Set(i),u=n.find(m=>m.nodeIds.includes(t))??null,o=ia(a),c=o&&!l.has(o)?n.find(m=>m.nodeIds.includes(o))??null:null;return c&&!c.nodeIds.some(m=>l.has(m))?ne({nodes:e,nodeLinks:n.map(m=>m.id===c.id?{...m,nodeIds:Array.from(new Set([...m.nodeIds,...i]))}:{...m,nodeIds:m.nodeIds.filter(p=>!l.has(p))})}):!u||i.length===u.nodeIds.length?[...n]:e.filter(m=>u.nodeIds.includes(m.id)&&!l.has(m.id)).some(m=>ra(m.coordinate,s.coordinate)>aa)?ne({nodes:e,nodeLinks:n.map(m=>m.id===u.id?{...m,nodeIds:m.nodeIds.filter(p=>!l.has(p))}:{...m})}):[...n]},sa=({nodeId:e,nodes:n,linkedNodeGroups:t,annotationEntries:r,selectedMeasurementIds:a=[],preferredMovedNodeIds:s})=>{const i=n.find(f=>f.id===e)??null;if(!i)return{targetNode:null,targetLinkedNodeGroup:null,movedNodeIds:[]};const l=t.find(f=>f.nodeIds.includes(e))??null,u=(l==null?void 0:l.nodeIds)??[e],o=Array.from(new Set((s??[]).filter(f=>u.includes(f)))),c=new Set(a.filter(Boolean)),d=new Set(r.filter(f=>c.has(f.id)).flatMap(f=>f.nodeIds)),g=u.filter(f=>d.has(f)),m=o.length>0?o:g.length>0?g:[...u],p=new Set(r.filter(f=>f.locked).flatMap(f=>f.nodeIds));return{targetNode:i,targetLinkedNodeGroup:l,movedNodeIds:m.filter(f=>!p.has(f))}},la=(e={})=>{const{initialToolType:n=$t,initialPointTemporaryMode:t=!1}=e;return{annotationToolType:n,selectionState:{selectedAnnotationIds:[],previousSelectedAnnotationId:null},annotationEntries:[],nodes:[],linkedNodeGroups:[],edges:[],infoBoxState:{activeAnnotationId:null},settingsState:{pointTemporaryMode:t,elevationReferenceAnnotationId:null,nextShortLabelCounterByToolType:{}}}},ua=mt({name:"annotationsRuntime",initialState:la(),reducers:{replaceState:(e,n)=>n.payload,setAnnotationToolType:(e,n)=>{e.annotationToolType=n.payload},setPointTemporaryMode:(e,n)=>{e.settingsState.pointTemporaryMode=n.payload},setElevationReferenceAnnotationId:(e,n)=>{e.settingsState.elevationReferenceAnnotationId=n.payload},setNextShortLabelCounterByToolType:(e,n)=>{e.settingsState.nextShortLabelCounterByToolType={...e.settingsState.nextShortLabelCounterByToolType,[n.payload.toolType]:Math.max(1,n.payload.nextCounter)}},setSelectedAnnotationId:(e,n)=>{const t=n.payload,r=e.selectionState.selectedAnnotationIds[e.selectionState.selectedAnnotationIds.length-1]??null;e.selectionState.previousSelectedAnnotationId=r,e.selectionState.selectedAnnotationIds=t?[t]:[],e.infoBoxState.activeAnnotationId=t},setSelectedAnnotationIds:(e,n)=>{const t=Array.from(new Set(n.payload.filter(Boolean))),r=e.selectionState.selectedAnnotationIds[e.selectionState.selectedAnnotationIds.length-1]??null;e.selectionState.previousSelectedAnnotationId=r,e.selectionState.selectedAnnotationIds=t,e.infoBoxState.activeAnnotationId=t[t.length-1]??null},appendAnnotationEntities:(e,n)=>{if(e.nodes.push(...n.payload.nodes),n.payload.linkedNodeGroups.forEach(t=>{const r=e.linkedNodeGroups.find(a=>a.id===t.id);if(!r){e.linkedNodeGroups.push({id:t.id,nodeIds:[...t.nodeIds]});return}r.nodeIds=Array.from(new Set([...r.nodeIds,...t.nodeIds]))}),e.edges.push(...n.payload.edges),e.annotationEntries.push({...n.payload.annotationEntry,nodeIds:[...n.payload.annotationEntry.nodeIds],edgeIds:[...n.payload.annotationEntry.edgeIds]}),e.linkedNodeGroups=ne({nodes:e.nodes,nodeLinks:e.linkedNodeGroups}),n.payload.selectAnnotationId!==void 0){const t=e.selectionState.selectedAnnotationIds[e.selectionState.selectedAnnotationIds.length-1]??null;e.selectionState.previousSelectedAnnotationId=t,e.selectionState.selectedAnnotationIds=n.payload.selectAnnotationId?[n.payload.selectAnnotationId]:[],e.infoBoxState.activeAnnotationId=n.payload.selectAnnotationId??null}},removeAnnotationById:(e,n)=>{const{annotationId:t,nextSelectedAnnotationId:r}=n.payload,a=e.selectionState.selectedAnnotationIds[e.selectionState.selectedAnnotationIds.length-1]??null;if(!e.annotationEntries.some(o=>o.id===t))return;e.annotationEntries=e.annotationEntries.filter(o=>o.id!==t);const i=new Set(e.annotationEntries.flatMap(o=>o.nodeIds)),l=new Set(e.annotationEntries.flatMap(o=>o.edgeIds));if(e.nodes=e.nodes.filter(o=>i.has(o.id)),e.linkedNodeGroups=ne({nodes:e.nodes,nodeLinks:e.linkedNodeGroups}),e.edges=e.edges.filter(o=>l.has(o.id)),e.selectionState.previousSelectedAnnotationId=a,e.settingsState.elevationReferenceAnnotationId===t&&(e.settingsState.elevationReferenceAnnotationId=null),r!==void 0){e.selectionState.selectedAnnotationIds=r?[r]:[],e.infoBoxState.activeAnnotationId=r??null;return}const u=e.selectionState.selectedAnnotationIds.filter(o=>o!==t);e.selectionState.selectedAnnotationIds=u,e.infoBoxState.activeAnnotationId=u[u.length-1]??null},removeAnnotationsByIds:(e,n)=>{const t=new Set(n.payload.annotationIds);if(t.size===0)return;const r=e.selectionState.selectedAnnotationIds[e.selectionState.selectedAnnotationIds.length-1]??null;if(!e.annotationEntries.some(u=>t.has(u.id)))return;e.annotationEntries=e.annotationEntries.filter(u=>!t.has(u.id));const s=new Set(e.annotationEntries.flatMap(u=>u.nodeIds)),i=new Set(e.annotationEntries.flatMap(u=>u.edgeIds));if(e.nodes=e.nodes.filter(u=>s.has(u.id)),e.linkedNodeGroups=ne({nodes:e.nodes,nodeLinks:e.linkedNodeGroups}),e.edges=e.edges.filter(u=>i.has(u.id)),e.selectionState.previousSelectedAnnotationId=r,e.settingsState.elevationReferenceAnnotationId&&t.has(e.settingsState.elevationReferenceAnnotationId)&&(e.settingsState.elevationReferenceAnnotationId=null),n.payload.nextSelectedAnnotationId!==void 0){e.selectionState.selectedAnnotationIds=n.payload.nextSelectedAnnotationId?[n.payload.nextSelectedAnnotationId]:[],e.infoBoxState.activeAnnotationId=n.payload.nextSelectedAnnotationId??null;return}const l=e.selectionState.selectedAnnotationIds.filter(u=>!t.has(u));e.selectionState.selectedAnnotationIds=l,e.infoBoxState.activeAnnotationId=l[l.length-1]??null},updateNodeCoordinateById:(e,n)=>{const{nodeId:t,coordinate:r,selectedMeasurementIds:a=[],movedNodeIds:s,linkToNodeId:i}=n.payload,{targetNode:l,movedNodeIds:u}=sa({nodeId:t,nodes:e.nodes,linkedNodeGroups:e.linkedNodeGroups,annotationEntries:e.annotationEntries,selectedMeasurementIds:a,preferredMovedNodeIds:s});if(!l)return;const o=new Set(u);u.length!==0&&(e.nodes.forEach(c=>{o.has(c.id)&&(c.coordinate=r)}),e.linkedNodeGroups=oa({nodes:e.nodes,nodeLinks:e.linkedNodeGroups,nodeId:l.id,movedNodeIds:u,linkToNodeId:i}))},insertNodeIntoMeasurementEdge:(e,n)=>{const{measurementId:t,startNodeId:r,endNodeId:a,coordinate:s}=n.payload,i=e.annotationEntries.find(T=>T.id===t);if(!i)return;const l=i.nodeIds.findIndex((T,E)=>T===r&&i.nodeIds[E+1]===a),u=l>=0?l+1:i.closed&&i.nodeIds.length>=3&&i.nodeIds[i.nodeIds.length-1]===r&&i.nodeIds[0]===a?i.nodeIds.length:-1;if(u<0)return;const o=new Map(e.edges.map(T=>[T.id,T])),c=i.edgeIds.findIndex(T=>{const E=o.get(T);return(E==null?void 0:E.startNodeId)===r&&E.endNodeId===a}),d=c>=0?i.edgeIds[c]:null,g=d?o.get(d):void 0;if(!g||c<0)return;const m=`node-${en(e.nodes.map(T=>T.id))+1}`,p=`edge-${en(e.edges.map(T=>T.id))+1}`;e.nodes.push({id:m,coordinate:s}),e.linkedNodeGroups=ne({nodes:e.nodes,nodeLinks:[...e.linkedNodeGroups,{id:m,nodeIds:[m]}]}),g.endNodeId=m;const f={id:p,startNodeId:m,endNodeId:a},k=e.edges.findIndex(T=>T.id===d);k>=0?e.edges.splice(k+1,0,f):e.edges.push(f),i.nodeIds=[...i.nodeIds.slice(0,u),m,...i.nodeIds.slice(u)],i.edgeIds=[...i.edgeIds.slice(0,c+1),p,...i.edgeIds.slice(c+1)]},updateAnnotationEntryById:(e,n)=>{const{annotationId:t,displayName:r,shortLabel:a,hidden:s,locked:i,labelAppearance:l,elevationDisplayMode:u,distanceAnchorCoordinateSelection:o,distanceTriangleAnchorCoordinateRole:c}=n.payload,d=e.annotationEntries.find(g=>g.id===t);d&&(r!==void 0&&(d.displayName=r),a!==void 0&&(d.shortLabel=a),s!==void 0&&(d.hidden=s),i!==void 0&&(d.locked=i),l!==void 0&&(d.labelAppearance={...d.labelAppearance??{},...l}),u!==void 0&&(d.elevationDisplayMode=u),o!==void 0&&(d.distanceAnchorCoordinateSelection=o),c!==void 0&&(d.distanceTriangleAnchorCoordinateRole=c))}}}),{appendAnnotationEntities:wr,removeAnnotationById:Fr,removeAnnotationsByIds:_r,setElevationReferenceAnnotationId:zr,setNextShortLabelCounterByToolType:Dr,setPointTemporaryMode:Hr,insertNodeIntoMeasurementEdge:jr,updateNodeCoordinateById:$r,updateAnnotationEntryById:Wr,replaceState:Vr,setAnnotationToolType:Ur,setSelectedAnnotationId:Gr,setSelectedAnnotationIds:Yr}=ua.actions,ze=v.createContext(null);gt(ze);const da=yt(ze);pt(ze);const Xr=()=>da(),Oe=Object.freeze({strokeWidthPx:1.5,overlayDashPattern:"8 8"}),ca=(e,n)=>typeof e=="number"&&Number.isFinite(e)&&e>0?e:n,ma=(e,n)=>{const t=e==null?void 0:e.trim();return t||n},Kr=(e,n=Oe)=>({strokeWidthPx:ca(e==null?void 0:e.strokeWidthPx,n.strokeWidthPx),overlayDashPattern:ma(e==null?void 0:e.overlayDashPattern,n.overlayDashPattern)}),tn=Object.freeze({previewAlpha:.9,surfaceAlpha:.92}),x={colors:{neutral:ye(1),accent:ye(1),preview:ye(tn.previewAlpha),surface:Kn(tn.surfaceAlpha),transparent:"transparent",components:{direct:xe(A.DIRECT),vertical:xe(A.VERTICAL),horizontal:xe(A.HORIZONTAL)},componentLabelAccents:{direct:he(A.DIRECT),vertical:he(A.VERTICAL),horizontal:he(A.HORIZONTAL)}},sizes:{edgeStrokeWidth:Oe.strokeWidthPx,pointPixelSize:10,pointOutlineWidth:1},patterns:{edgeDashPattern:Oe.overlayDashPattern}},fn=Object.freeze({edge:Object.freeze({stroke:x.colors.accent,strokeWidth:x.sizes.edgeStrokeWidth,overlayDashPattern:x.patterns.edgeDashPattern}),point:Object.freeze({pixelSize:x.sizes.pointPixelSize,fill:x.colors.transparent,outline:x.colors.surface,outlineWidth:x.sizes.pointOutlineWidth})}),Nn=Object.freeze({edge:Object.freeze({stroke:x.colors.neutral}),point:Object.freeze({outline:x.colors.neutral})}),ga=(e,n={})=>({...e,...n}),ya=(e,n={})=>({...e,...n}),Zr=e=>ga(e,Nn.edge),Jr=e=>ya(e,Nn.point),we={DARK_ON_BRIGHT:"dark-on-bright",BRIGHT_ON_DARK:"bright-on-dark"},pa=K.fontSizePx.pointLabel,Ca=e=>`${e/pa}rem`,te=Object.freeze({fontFamily:K.fontFamily,rootFontSizeRem:"1rem",supportFontSizeRem:Ca(K.fontSizePx.supportText),headingFontSizeRem:"1rem",lineLabelFontWeight:K.fontWeight.medium,badgeFontWeight:K.fontWeight.medium,headingFontWeight:K.fontWeight.semibold,sectionTitleFontWeight:K.fontWeight.semibold}),fa={SOFT_RECT_FADE:"soft-rect-fade",TEXT_ECHO_DARKEN:"text-echo-darken"},Na={NONE:"none",MOVE_ON_LINE:"move-on-line"},B=Object.freeze({appearance:Object.freeze({themeStyle:we.BRIGHT_ON_DARK}),text:Object.freeze({fontFamily:te.fontFamily,fontWeight:te.lineLabelFontWeight}),background:Object.freeze({style:fa.TEXT_ECHO_DARKEN}),surface:Object.freeze({}),layout:Object.freeze({shortEdgeOffsetPx:-2}),collision:Object.freeze({allowEarlyRemoval:!0,resolutionStrategy:Na.MOVE_ON_LINE,anchorSlideStepRatio:.1,maxAnchorSlideDeltaRatio:.3})}),re=Object.freeze({horizontalLabelOffsetPx:7,verticalFlippedBaselineOffsetPx:6,verticalBaselineAngleEpsilonRad:1e-9,sideHysteresisPx:1.5,upperSideGapFactor:.15,upperSideGapNormalYEpsilon:.001}),bn=e=>{var n,t;return{appearance:{...B.appearance,...e==null?void 0:e.appearance},text:{...B.text,...e==null?void 0:e.text,echo:((n=e==null?void 0:e.text)==null?void 0:n.echo)===void 0&&B.text.echo===void 0?void 0:{...B.text.echo,...(t=e==null?void 0:e.text)==null?void 0:t.echo}},background:{...B.background,...e==null?void 0:e.background},surface:{...B.surface,...e==null?void 0:e.surface},layout:{...B.layout,...e==null?void 0:e.layout},collision:{...B.collision,...e==null?void 0:e.collision}}},_=Object.freeze({lineStrokeWidthPx:x.sizes.edgeStrokeWidth,layerZIndex:"1550",lineLabelOffsetPx:8,lineLabelMinLengthPx:44,geometryEpsilonMeters:.01,labelReferenceLineLengthEpsilonPx:.001,labelReferenceDistanceFactor:.2,labelReferenceMinDistancePx:24,labelReferenceMaxDistancePx:48,labelReferenceInsideBlendFactor:.35,labelSideSwitchThresholdPx:4,directLineColor:x.colors.components.direct,verticalLineColor:x.colors.components.vertical,horizontalLineColor:x.colors.components.horizontal,draftChainColor:x.colors.preview}),De=(e,n)=>{Object.assign(e.style,n)},H=Object.freeze({className:"carma-annotation-overlay-line-label",frameClassName:"carma-annotation-overlay-line-label__frame",contentClassName:"carma-annotation-overlay-line-label__content",backdropClassName:"carma-annotation-overlay-line-label__backdrop",surfaceClassName:"carma-annotation-overlay-line-label__surface",textEchoClassName:"carma-annotation-overlay-line-label__text-echo",textClassName:"carma-annotation-overlay-line-label__text"}),ge=Object.freeze({framePaddingBlockEx:.25,framePaddingInlineEx:.65,backdropInsetBlockEx:-.35,backdropInsetInlineEx:-.75}),ba=Object.freeze({[we.BRIGHT_ON_DARK]:"15, 23, 42",[we.DARK_ON_BRIGHT]:"255, 255, 255"}),xa=Object.freeze({direct:{},vertical:{labelOffsetPx:_.lineLabelOffsetPx,labelFlippedBaselineOffsetPx:re.verticalFlippedBaselineOffsetPx,labelRotationMode:Qn.CLOCKWISE},horizontal:{labelOffsetPx:re.horizontalLabelOffsetPx}}),Y=(e,n)=>{const t=document.createElement(e);return t.className=n,t},ha=({element:e,backdrop:n,surface:t,accentColor:r,visualOptions:a})=>{var s,i,l,u;e.style.setProperty("--carma-annotation-overlay-line-label-font-family",a.text.fontFamily),e.style.setProperty("--carma-annotation-overlay-line-label-font-weight",String(a.text.fontWeight)),e.style.setProperty("--carma-annotation-overlay-line-label-glow-color",r),e.dataset.annotationOverlayLineLabelShortEdgeOffsetPx=String(a.layout.shortEdgeOffsetPx),e.dataset.annotationThemeStyle=a.appearance.themeStyle,e.dataset.annotationOverlayLineLabelBackgroundStyle=a.background.style,n.dataset.annotationOverlayLineLabelBackgroundStyle=a.background.style,typeof a.background.surfaceAlpha=="number"&&Number.isFinite(a.background.surfaceAlpha)&&!(typeof a.background.color=="string"&&a.background.color.trim().length>0)&&e.style.setProperty("--carma-annotation-overlay-line-label-backdrop-background",`rgba(${ba[a.appearance.themeStyle]}, ${Math.min(Math.max(a.background.surfaceAlpha,0),1)})`),a.background.showBackdrop===!1?(n.style.display="none",t.style.display="none"):(n.style.display="block",t.style.display="block"),typeof a.text.color=="string"&&a.text.color.trim().length>0&&e.style.setProperty("--carma-annotation-overlay-line-label-text-color",a.text.color),typeof a.text.blendMode=="string"&&a.text.blendMode.trim().length>0&&e.style.setProperty("--carma-annotation-overlay-line-label-text-blend-mode",a.text.blendMode),typeof a.background.color=="string"&&a.background.color.trim().length>0&&e.style.setProperty("--carma-annotation-overlay-line-label-backdrop-background",a.background.color),typeof a.background.blendMode=="string"&&a.background.blendMode.trim().length>0&&e.style.setProperty("--carma-annotation-overlay-line-label-backdrop-blend-mode",a.background.blendMode),typeof a.surface.blendMode=="string"&&a.surface.blendMode.trim().length>0&&e.style.setProperty("--carma-annotation-overlay-line-label-surface-blend-mode",a.surface.blendMode),typeof((s=a.text.echo)==null?void 0:s.color)=="string"&&a.text.echo.color.trim().length>0&&e.style.setProperty("--carma-annotation-overlay-line-label-text-echo-color",a.text.echo.color),typeof((i=a.text.echo)==null?void 0:i.blendMode)=="string"&&a.text.echo.blendMode.trim().length>0&&e.style.setProperty("--carma-annotation-overlay-line-label-text-echo-blend-mode",a.text.echo.blendMode),typeof((l=a.text.echo)==null?void 0:l.blurPx)=="number"&&Number.isFinite(a.text.echo.blurPx)&&e.style.setProperty("--carma-annotation-overlay-line-label-text-echo-blur-px",`${Math.max(a.text.echo.blurPx,0)}px`),typeof((u=a.text.echo)==null?void 0:u.opacity)=="number"&&Number.isFinite(a.text.echo.opacity)&&e.style.setProperty("--carma-annotation-overlay-line-label-text-echo-opacity",`${Math.min(Math.max(a.text.echo.opacity,0),1)}`),typeof a.background.blurPx=="number"&&Number.isFinite(a.background.blurPx)&&e.style.setProperty("--carma-annotation-overlay-line-label-surface-blur-px",`${Math.max(a.background.blurPx,0)}px`),typeof a.background.brightnessPct=="number"&&Number.isFinite(a.background.brightnessPct)&&e.style.setProperty("--carma-annotation-overlay-line-label-surface-brightness-pct",`${Math.max(a.background.brightnessPct,0)}%`),typeof a.background.saturatePct=="number"&&Number.isFinite(a.background.saturatePct)&&e.style.setProperty("--carma-annotation-overlay-line-label-surface-saturate-pct",`${Math.max(a.background.saturatePct,0)}%`),typeof a.background.radiusEx=="number"&&Number.isFinite(a.background.radiusEx)&&e.style.setProperty("--carma-annotation-overlay-line-label-backdrop-radius",`${Math.max(a.background.radiusEx,0)}ex`),typeof a.background.edgeBlurPx=="number"&&Number.isFinite(a.background.edgeBlurPx)&&e.style.setProperty("--carma-annotation-overlay-line-label-surface-edge-blur-px",`${Math.max(a.background.edgeBlurPx,0)}px`),(typeof a.surface.paddingBlockEx=="number"||typeof a.surface.paddingInlineEx=="number")&&(e.style.setProperty("--carma-annotation-overlay-line-label-frame-padding-block",`${typeof a.surface.paddingBlockEx=="number"&&Number.isFinite(a.surface.paddingBlockEx)?Math.max(a.surface.paddingBlockEx,0):ge.framePaddingBlockEx}ex`),e.style.setProperty("--carma-annotation-overlay-line-label-frame-padding-inline",`${typeof a.surface.paddingInlineEx=="number"&&Number.isFinite(a.surface.paddingInlineEx)?Math.max(a.surface.paddingInlineEx,0):ge.framePaddingInlineEx}ex`)),(typeof a.background.insetBlockEx=="number"||typeof a.background.insetInlineEx=="number")&&e.style.setProperty("--carma-annotation-overlay-line-label-backdrop-inset",`${typeof a.background.insetBlockEx=="number"&&Number.isFinite(a.background.insetBlockEx)?a.background.insetBlockEx:ge.backdropInsetBlockEx}ex ${typeof a.background.insetInlineEx=="number"&&Number.isFinite(a.background.insetInlineEx)?a.background.insetInlineEx:ge.backdropInsetInlineEx}ex`)},Sa=e=>e.querySelector('[data-annotation-overlay-line-label-text="foreground"]'),va=e=>e.querySelector('[data-annotation-overlay-line-label-text-echo="true"]'),Ta=e=>e.querySelector(`.${H.frameClassName}`),Ia=e=>{const n=e.dataset.annotationOverlayLineLabelShortEdgeOffsetPx,t=n?Number(n):Number.NaN;return Number.isFinite(t)?t:B.layout.shortEdgeOffsetPx},xn=e=>e.dataset.annotationOverlayLineLabelKind==="vertical"||e.dataset.annotationOverlayLineLabelKind==="horizontal"?e.dataset.annotationOverlayLineLabelKind:"direct",ka=e=>xn(e)==="vertical",Aa=({kind:e,outsideReferencePoint:n,anchorRatio:t})=>({...xa[e],anchorRatio:t===void 0?void 0:nt(t),getLabelOutsideReferencePoint:n?()=>({x:n.x,y:n.y}):void 0}),La=({x:e,y:n,angleRad:t,anchor:r})=>`translate(${Math.round(e)}px, ${Math.round(n)}px) ${r==="left"?"translate(0%, -50%)":r==="right"?"translate(-100%, -50%)":"translate(-50%, -50%)"} rotate(${t}rad)`,Ea=(e,n,t=It.LABEL)=>{const r=Rt(e,t);if(!r)return null;const a=document.createElement("div");return a.id=n,a.dataset.annotationOverlayLayer="true",De(a,{position:"absolute",inset:"0",overflow:"hidden",pointerEvents:"none",userSelect:"none",webkitUserSelect:"none",zIndex:"auto"}),r.appendChild(a),a},Qr=Ea,Ra=e=>{e==null||e.remove()},ei=Ra,ni=e=>{const n=new lt,t=n.update.bind(n);return n.update=r=>{if(!(r.passes.pick&&!r.passes.render))return t(r)},e.primitives.add(n),n},ti=(e,n)=>{if(!(!n||!St(e)))try{if(typeof n.isDestroyed=="function"&&n.isDestroyed())return;e.primitives.remove(n)}catch{}},hn=e=>ut.fromType("Color",{color:Ue.fromCssColorString(e)??Ue.WHITE}),ai=(e,n,t,r)=>({polyline:e.add({id:n,positions:[y.ZERO,y.ZERO],width:(r==null?void 0:r.width)??_.lineStrokeWidthPx,material:hn(t),show:!1}),colorCss:t}),ri=(e,n)=>{e.colorCss!==n&&(e.polyline.material=hn(n),e.colorCss=n)},ii=e=>{e.polyline.show=!1},oi=(e,n)=>{e.polyline.positions=[...n],e.polyline.show=n.length>=2},ve=(e,n)=>{const t=bn(n),r=Y("div",H.className),a=Y("div",H.frameClassName),s=Y("div",H.contentClassName),i=Y("div",H.backdropClassName),l=Y("div",H.surfaceClassName),u=Y("div",H.textEchoClassName),o=Y("div",H.textClassName);return u.dataset.annotationOverlayLineLabelTextEcho="true",o.dataset.annotationOverlayLineLabelText="foreground",ha({element:r,backdrop:i,surface:l,accentColor:e,visualOptions:t}),s.append(i,l,u,o),a.append(s),r.appendChild(a),r},si=e=>{const n=bn(e),t=ve(x.colors.componentLabelAccents.direct,n);t.dataset.annotationOverlayLineLabelKind="direct";const r=ve(x.colors.componentLabelAccents.vertical,n);r.dataset.annotationOverlayLineLabelKind="vertical";const a=ve(x.colors.componentLabelAccents.horizontal,n);return a.dataset.annotationOverlayLineLabelKind="horizontal",{direct:t,vertical:r,horizontal:a}},li=e=>{e.direct.style.display="none",e.vertical.style.display="none",e.horizontal.style.display="none"},Sn=(e,n)=>{De(e,{width:`${n.pixelSize}px`,height:`${n.pixelSize}px`,border:`${n.outlineWidth}px solid ${n.outline}`,background:n.fill})},Pa=(e=fn.point)=>{const n=document.createElement("div");return De(n,{position:"absolute",left:"0",top:"0",display:"none",borderRadius:"999px",transform:"translate(-50%, -50%)",boxSizing:"border-box",pointerEvents:"none",userSelect:"none",webkitUserSelect:"none",willChange:"transform"}),Sn(n,e),n},qa=({overlayLayer:e,pointMarkers:n,count:t,style:r})=>{for(;n.length<t;){const a=Pa(r);n.push(a),e.appendChild(a)}},ui=e=>{e.forEach(n=>{n.style.display="none"})},di=({scene:e,overlayLayer:n,pointMarkers:t,coordinates:r,style:a=fn.point})=>{qa({overlayLayer:n,pointMarkers:t,count:r.length,style:a}),r.forEach((s,i)=>{const l=t[i];if(!l)return;Sn(l,a);const u=vt.worldToWindowCoordinates(e,qe(s));if(!dt(u)){l.style.display="none";return}l.style.display="block",l.style.transform=`translate(${Math.round(u.x)}px, ${Math.round(u.y)}px) translate(-50%, -50%)`}),t.slice(r.length).forEach(s=>{s.style.display="none"})},Ma=e=>mn(e>Z||e<-Z?e+ue:e),Ba=e=>{let n=mn(e);return n>Z?n=n-ue:n<-Z&&(n=n+ue),n},Oa=({angleRad:e,lineSide:n})=>Math.abs(Math.abs(e)-Z)>re.verticalBaselineAngleEpsilonRad?e:n==="left"?Z:-Z,wa=({deltaX:e,deltaY:n,lineSide:t,flipReadingDirection:r,forceHorizontal:a})=>{if(a)return 0;const s=Ma(Math.atan2(n,e)),i=r?s>=0?s-ue:s+ue:s;return Oa({angleRad:Ba(i),lineSide:t})},Fa=({start:e,end:n,kind:t,outsideReferencePoint:r,shortEdgeOffsetPx:a=B.layout.shortEdgeOffsetPx,useShortEdgeRules:s=!0,flipReadingDirection:i=!1,previousShouldFlip:l=!1,anchorRatio:u})=>{const o=et({svgLine:{start:{x:e.x,y:e.y},end:{x:n.x,y:n.y}},options:Aa({kind:t,outsideReferencePoint:r,anchorRatio:u}),previousShouldFlip:l,sideSwitchThresholdPx:re.sideHysteresisPx});if(!o)return null;const c=n.x-e.x,d=n.y-e.y;if(s&&o.lineLengthPx<_.lineLabelMinLengthPx){const g=o.normalX>=0,m=g?"left":"right";return{x:o.midX+o.normalX*a,y:o.midY+o.normalY*a,angleRad:wa({deltaX:c,deltaY:d,lineSide:m,flipReadingDirection:i,forceHorizontal:!0}),anchor:g?"left":"right",anchorRatio:o.anchorRatio,isShortEdge:!0,shouldFlip:o.shouldFlip,normalX:o.normalX,normalY:o.normalY}}return{x:o.textX,y:o.textY,angleRad:o.angleRad,anchor:"center",anchorRatio:o.anchorRatio,isShortEdge:!1,shouldFlip:o.shouldFlip,normalX:o.normalX,normalY:o.normalY}},ci=({element:e,text:n,start:t,end:r,outsideReferencePoint:a,flipReadingDirection:s=!1,anchorRatio:i})=>{const l=Fa({start:t,end:r,kind:xn(e),outsideReferencePoint:a,shortEdgeOffsetPx:Ia(e),useShortEdgeRules:ka(e),flipReadingDirection:s,anchorRatio:i,previousShouldFlip:e.dataset.annotationOverlayLineLabelNormalFlip==="1"});if(!l){e.style.display="none";return}const u=Sa(e);u instanceof HTMLElement?u.textContent=n:e.textContent=n;const o=va(e);o instanceof HTMLElement&&(o.textContent=n),e.style.display="block";const c=Ta(e),d=!l.isShortEdge&&l.normalY<-re.upperSideGapNormalYEpsilon&&c?c.getBoundingClientRect().height*re.upperSideGapFactor:0,g=l.x+l.normalX*d,m=l.y+l.normalY*d;e.dataset.annotationOverlayLineLabelShortEdge=l.isShortEdge?"true":"false",e.dataset.annotationOverlayLineLabelAnchorRatio=`${l.anchorRatio}`,e.dataset.annotationOverlayLineLabelNormalFlip=l.shouldFlip?"1":"0",e.style.transform=La({...l,x:g,y:m})},_a=e=>Math.min(_.labelReferenceMaxDistancePx,Math.max(_.labelReferenceMinDistancePx,e)),Te=({start:e,end:n,insidePoint:t,previousOutsideSign:r})=>{const a=n.x-e.x,s=n.y-e.y,i=Math.hypot(a,s);if(!Number.isFinite(i)||i<=_.labelReferenceLineLengthEpsilonPx)return null;const l=(e.x+n.x)*.5,u=(e.y+n.y)*.5,o=-s/i,c=a/i,d=(t.x-l)*o+(t.y-u)*c,g=d>=0?-1:1,m=r&&r!==g&&Math.abs(d)<_.labelSideSwitchThresholdPx?r:g,p=_a(i*_.labelReferenceDistanceFactor);return{outsideSign:m,referencePoint:{x:l+o*m*p,y:u+c*m*p}}},mi=({anchor:e,target:n,aux:t,anchorAltitudeMeters:r,targetAltitudeMeters:a,previousVerticalOutsideSign:s})=>{const i={x:e.x,y:e.y},l={x:n.x,y:n.y},u={x:t.x,y:t.y},o=r>=a?i:l,c={anchor:i,target:l,aux:u,highest:o,centroid:{x:(i.x+l.x+u.x)/3,y:(i.y+l.y+u.y)/3}},d=jt({triangle:c,auxiliaryAltitudeMeters:a,highestAltitudeMeters:Math.max(r,a),insideBlendFactor:_.labelReferenceInsideBlendFactor}),g=Te({start:i,end:l,insidePoint:d}),m=Te({start:u,end:l,insidePoint:d}),p=Te({start:i,end:u,insidePoint:l,previousOutsideSign:s});return{directOutsideReferencePoint:(g==null?void 0:g.referencePoint)??null,verticalOutsideReferencePoint:(p==null?void 0:p.referencePoint)??null,horizontalOutsideReferencePoint:(m==null?void 0:m.referencePoint)??null,nextVerticalOutsideSign:p==null?void 0:p.outsideSign}},gi=({directLabelText:e,verticalLabelText:n,horizontalLabelText:t})=>({showVerticalLabel:n!==null&&n!==e,showHorizontalLabel:t!==null&&t!==e}),yi=()=>({cartographicA:new Pe,cartographicB:new Pe,auxiliaryPoint:new y,auxiliaryScreen:new ct}),pi=({scene:e,anchorPointECEF:n,targetPointECEF:t,scratch:r})=>{const a=e.globe.ellipsoid,s=a.cartesianToCartographic(n,r.cartographicA),i=a.cartesianToCartographic(t,r.cartographicB);return!s||!i?null:y.fromRadians(s.longitude,s.latitude,i.height??0,a,r.auxiliaryPoint)},Ci=e=>{const n=na(e);return{longitude:n.longitude,latitude:n.latitude,altitude:Qt(n.altitude)}},fi=({firstCorner:e,oppositeCorner:n})=>{const t=qe(e),r=qe(n),a=Cn(t,r);return a?[t,a.adjacentHorizontalCorner,r,a.adjacentVerticalCorner,t]:null},za=Object.freeze({longPressDurationMs:320}),Da=({interactive:e,onClick:n,onHoverChange:t,onLongPress:r,longPressDurationMs:a=za.longPressDurationMs,markerStyle:s})=>{const[i,l]=v.useState(!1),u=v.useRef(void 0),o=v.useRef(!1),c=v.useCallback(()=>{u.current!==void 0&&(window.clearTimeout(u.current),u.current=void 0)},[]),d=v.useCallback(k=>{if(k.stopPropagation(),k.button!==0||!r){c();return}o.current=!1,c(),u.current=window.setTimeout(()=>{o.current=!0,r()},a)},[c,a,r]),g=v.useCallback(()=>{c()},[c]),m=v.useCallback(k=>{if(k.stopPropagation(),o.current){o.current=!1;return}n==null||n()},[n]),p=v.useCallback(()=>{l(!0),t==null||t(!0)},[t]),f=v.useCallback(()=>{c(),l(!1),t==null||t(!1)},[c,t]);return v.useEffect(()=>c,[c]),C.jsx("div",{"data-runtime-point-marker-shell":"true",style:{position:"relative",width:"0px",height:"0px",overflow:"visible",pointerEvents:"none"},children:C.jsx("div",{"data-runtime-point-marker-circle":"true",style:{position:"absolute",left:"0px",top:"0px",transform:i?`translate(-50%, -50%) scale(${cn.hover.scale})`:"translate(-50%, -50%)",borderRadius:"999px",boxSizing:"border-box",pointerEvents:e?"auto":"none",cursor:e?"pointer":"default",transition:tt(),boxShadow:i?at():"none",filter:i?rt():"none",...s},onClick:e?m:void 0,onMouseDown:e?d:void 0,onMouseUp:e?g:void 0,onMouseEnter:e?p:void 0,onMouseLeave:e?f:void 0})})};Da.__docgenInfo={description:"",methods:[],displayName:"PointMarkerOverlayShell",props:{interactive:{required:!0,tsType:{name:"boolean"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onHoverChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(hovered: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"hovered"}],return:{name:"void"}}},description:""},onLongPress:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},longPressDurationMs:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"pointMarkerVisualizerDefaults.longPressDurationMs",computed:!0}},markerStyle:{required:!1,tsType:{name:"CSSProperties"},description:""}}};const Ni={RIGHTMOST_SCREEN_SPACE:"rightmost-screen-space",LEFTMOST_SCREEN_SPACE:"leftmost-screen-space"},bi={START_COORDINATE:"start-coordinate",END_COORDINATE:"end-coordinate"},xi={GROUND:"ground",COPLANAR:"coplanar"},Ha={MIN:1,MAX:1400,LOG_SCALE:64};Object.freeze({layoutConfig:Tt(void 0),markerPixelSize:10,markerOutlineWidth:x.sizes.pointOutlineWidth,stemColor:x.colors.surface,activeMoveGizmoLabelZIndex:Ha.MAX+1});Object.freeze({...it({markerDiameterPx:x.sizes.pointPixelSize,markerStrokeWidthPx:x.sizes.pointOutlineWidth}),tickColor:cn.colors.surfaceStrong,minOverlayZIndex:ot.zIndex.interactionHandleFloor});Object.freeze({cornerOverlay:Object.freeze({minBoxPx:20,paddingPx:6,targetRadiusPx:20,segments:20,strokeWidthPx:1.25,color:Ut(),straightHitTargetPx:20})});function se(e,n,t){e.prototype=n.prototype=t,t.constructor=e}function ce(e,n){var t=Object.create(e.prototype);for(var r in n)t[r]=n[r];return t}function V(){}var Q=.7,ie=1/Q,ja=/^#([0-9a-f]{3})$/,$a=/^#([0-9a-f]{6})$/,Wa=/^rgb\(\s*([-+]?\d+)\s*,\s*([-+]?\d+)\s*,\s*([-+]?\d+)\s*\)$/,Va=/^rgb\(\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*\)$/,Ua=/^rgba\(\s*([-+]?\d+)\s*,\s*([-+]?\d+)\s*,\s*([-+]?\d+)\s*,\s*([-+]?\d+(?:\.\d+)?)\s*\)$/,Ga=/^rgba\(\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)\s*\)$/,Ya=/^hsl\(\s*([-+]?\d+(?:\.\d+)?)\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*\)$/,Xa=/^hsla\(\s*([-+]?\d+(?:\.\d+)?)\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)\s*\)$/,an={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};se(V,He,{displayable:function(){return this.rgb().displayable()},toString:function(){return this.rgb()+""}});function He(e){var n;return e=(e+"").trim().toLowerCase(),(n=ja.exec(e))?(n=parseInt(n[1],16),new I(n>>8&15|n>>4&240,n>>4&15|n&240,(n&15)<<4|n&15,1)):(n=$a.exec(e))?rn(parseInt(n[1],16)):(n=Wa.exec(e))?new I(n[1],n[2],n[3],1):(n=Va.exec(e))?new I(n[1]*255/100,n[2]*255/100,n[3]*255/100,1):(n=Ua.exec(e))?on(n[1],n[2],n[3],n[4]):(n=Ga.exec(e))?on(n[1]*255/100,n[2]*255/100,n[3]*255/100,n[4]):(n=Ya.exec(e))?sn(n[1],n[2]/100,n[3]/100,1):(n=Xa.exec(e))?sn(n[1],n[2]/100,n[3]/100,n[4]):an.hasOwnProperty(e)?rn(an[e]):e==="transparent"?new I(NaN,NaN,NaN,0):null}function rn(e){return new I(e>>16&255,e>>8&255,e&255,1)}function on(e,n,t,r){return r<=0&&(e=n=t=NaN),new I(e,n,t,r)}function je(e){return e instanceof V||(e=He(e)),e?(e=e.rgb(),new I(e.r,e.g,e.b,e.opacity)):new I}function vn(e,n,t,r){return arguments.length===1?je(e):new I(e,n,t,r??1)}function I(e,n,t,r){this.r=+e,this.g=+n,this.b=+t,this.opacity=+r}se(I,vn,ce(V,{brighter:function(e){return e=e==null?ie:Math.pow(ie,e),new I(this.r*e,this.g*e,this.b*e,this.opacity)},darker:function(e){return e=e==null?Q:Math.pow(Q,e),new I(this.r*e,this.g*e,this.b*e,this.opacity)},rgb:function(){return this},displayable:function(){return 0<=this.r&&this.r<=255&&0<=this.g&&this.g<=255&&0<=this.b&&this.b<=255&&0<=this.opacity&&this.opacity<=1},toString:function(){var e=this.opacity;return e=isNaN(e)?1:Math.max(0,Math.min(1,e)),(e===1?"rgb(":"rgba(")+Math.max(0,Math.min(255,Math.round(this.r)||0))+", "+Math.max(0,Math.min(255,Math.round(this.g)||0))+", "+Math.max(0,Math.min(255,Math.round(this.b)||0))+(e===1?")":", "+e+")")}}));function sn(e,n,t,r){return r<=0?e=n=t=NaN:t<=0||t>=1?e=n=NaN:n<=0&&(e=NaN),new O(e,n,t,r)}function Ka(e){if(e instanceof O)return new O(e.h,e.s,e.l,e.opacity);if(e instanceof V||(e=He(e)),!e)return new O;if(e instanceof O)return e;e=e.rgb();var n=e.r/255,t=e.g/255,r=e.b/255,a=Math.min(n,t,r),s=Math.max(n,t,r),i=NaN,l=s-a,u=(s+a)/2;return l?(n===s?i=(t-r)/l+(t<r)*6:t===s?i=(r-n)/l+2:i=(n-t)/l+4,l/=u<.5?s+a:2-s-a,i*=60):l=u>0&&u<1?0:i,new O(i,l,u,e.opacity)}function Za(e,n,t,r){return arguments.length===1?Ka(e):new O(e,n,t,r??1)}function O(e,n,t,r){this.h=+e,this.s=+n,this.l=+t,this.opacity=+r}se(O,Za,ce(V,{brighter:function(e){return e=e==null?ie:Math.pow(ie,e),new O(this.h,this.s,this.l*e,this.opacity)},darker:function(e){return e=e==null?Q:Math.pow(Q,e),new O(this.h,this.s,this.l*e,this.opacity)},rgb:function(){var e=this.h%360+(this.h<0)*360,n=isNaN(e)||isNaN(this.s)?0:this.s,t=this.l,r=t+(t<.5?t:1-t)*n,a=2*t-r;return new I(Ie(e>=240?e-240:e+120,a,r),Ie(e,a,r),Ie(e<120?e+240:e-120,a,r),this.opacity)},displayable:function(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1}}));function Ie(e,n,t){return(e<60?n+(t-n)*e/60:e<180?t:e<240?n+(t-n)*(240-e)/60:n)*255}var Tn=Math.PI/180,In=180/Math.PI,Ce=18,kn=.95047,An=1,Ln=1.08883,En=4/29,ae=6/29,Rn=3*ae*ae,Ja=ae*ae*ae;function $e(e){if(e instanceof F)return new F(e.l,e.a,e.b,e.opacity);if(e instanceof j){var n=e.h*Tn;return new F(e.l,Math.cos(n)*e.c,Math.sin(n)*e.c,e.opacity)}e instanceof I||(e=je(e));var t=Ee(e.r),r=Ee(e.g),a=Ee(e.b),s=ke((.4124564*t+.3575761*r+.1804375*a)/kn),i=ke((.2126729*t+.7151522*r+.072175*a)/An),l=ke((.0193339*t+.119192*r+.9503041*a)/Ln);return new F(116*i-16,500*(s-i),200*(i-l),e.opacity)}function Qa(e,n,t,r){return arguments.length===1?$e(e):new F(e,n,t,r??1)}function F(e,n,t,r){this.l=+e,this.a=+n,this.b=+t,this.opacity=+r}se(F,Qa,ce(V,{brighter:function(e){return new F(this.l+Ce*(e??1),this.a,this.b,this.opacity)},darker:function(e){return new F(this.l-Ce*(e??1),this.a,this.b,this.opacity)},rgb:function(){var e=(this.l+16)/116,n=isNaN(this.a)?e:e+this.a/500,t=isNaN(this.b)?e:e-this.b/200;return e=An*Ae(e),n=kn*Ae(n),t=Ln*Ae(t),new I(Le(3.2404542*n-1.5371385*e-.4985314*t),Le(-.969266*n+1.8760108*e+.041556*t),Le(.0556434*n-.2040259*e+1.0572252*t),this.opacity)}}));function ke(e){return e>Ja?Math.pow(e,1/3):e/Rn+En}function Ae(e){return e>ae?e*e*e:Rn*(e-En)}function Le(e){return 255*(e<=.0031308?12.92*e:1.055*Math.pow(e,1/2.4)-.055)}function Ee(e){return(e/=255)<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)}function er(e){if(e instanceof j)return new j(e.h,e.c,e.l,e.opacity);e instanceof F||(e=$e(e));var n=Math.atan2(e.b,e.a)*In;return new j(n<0?n+360:n,Math.sqrt(e.a*e.a+e.b*e.b),e.l,e.opacity)}function nr(e,n,t,r){return arguments.length===1?er(e):new j(e,n,t,r??1)}function j(e,n,t,r){this.h=+e,this.c=+n,this.l=+t,this.opacity=+r}se(j,nr,ce(V,{brighter:function(e){return new j(this.h,this.c,this.l+Ce*(e??1),this.opacity)},darker:function(e){return new j(this.h,this.c,this.l-Ce*(e??1),this.opacity)},rgb:function(){return $e(this).rgb()}}));var Pn=-.14861,We=1.78277,Ve=-.29227,fe=-.90649,de=1.97294,ln=de*fe,un=de*We,dn=We*Ve-fe*Pn;function tr(e){if(e instanceof J)return new J(e.h,e.s,e.l,e.opacity);e instanceof I||(e=je(e));var n=e.r/255,t=e.g/255,r=e.b/255,a=(dn*r+ln*n-un*t)/(dn+ln-un),s=r-a,i=(de*(t-a)-Ve*s)/fe,l=Math.sqrt(i*i+s*s)/(de*a*(1-a)),u=l?Math.atan2(i,s)*In-120:NaN;return new J(u<0?u+360:u,l,a,e.opacity)}function ar(e,n,t,r){return arguments.length===1?tr(e):new J(e,n,t,r??1)}function J(e,n,t,r){this.h=+e,this.s=+n,this.l=+t,this.opacity=+r}se(J,ar,ce(V,{brighter:function(e){return e=e==null?ie:Math.pow(ie,e),new J(this.h,this.s,this.l*e,this.opacity)},darker:function(e){return e=e==null?Q:Math.pow(Q,e),new J(this.h,this.s,this.l*e,this.opacity)},rgb:function(){var e=isNaN(this.h)?0:(this.h+120)*Tn,n=+this.l,t=isNaN(this.s)?0:this.s*n*(1-n),r=Math.cos(e),a=Math.sin(e);return new I(255*(n+t*(Pn*r+We*a)),255*(n+t*(Ve*r+fe*a)),255*(n+t*(de*r)),this.opacity)}}));const qn=vn(S.ACCENT_MEASUREMENTS).brighter(.1);qn.opacity=.5;const Mn=Gt(),rr=Object.freeze({backgroundColor:Ze("background"),hoverBackgroundColor:Ze("hoverBackground"),textColor:Mn,glowColor:ye(1),glowRadiusPx:5,preserveFillOnSelection:!0}),ir=Object.freeze({id:"accent-measurements",label:"Measurements · Accent",colorPrimaryReduced:qn.toString(),colorPrimary:S.ACCENT_MEASUREMENTS,lineColor:x.colors.surface,textColor:Mn}),L=Object.freeze({scheme:ir,fontFamily:te.fontFamily,contentFontWeight:te.lineLabelFontWeight,badgeFontWeight:te.badgeFontWeight,selection:rr}),hi=e=>L,Si=Object.freeze({fontSize:te.rootFontSizeRem,fontFamily:L.fontFamily,fontWeight:L.contentFontWeight,lineColor:L.scheme.lineColor,textBackgroundColor:L.scheme.colorPrimaryReduced,textColor:L.scheme.textColor,markerBackgroundColor:L.scheme.colorPrimary,markerTextColor:L.scheme.textColor,selectedBackgroundColor:L.selection.backgroundColor,selectedTextColor:L.selection.textColor,selectedGlowColor:L.selection.glowColor,selectedGlowRadiusPx:L.selection.glowRadiusPx,preserveFillOnSelection:L.selection.preserveFillOnSelection,hoverBackgroundColor:L.selection.hoverBackgroundColor,markerPixelSize:x.sizes.pointPixelSize,markerOutlineWidth:x.sizes.pointOutlineWidth});v.createContext(null);export{Br as $,rr as A,Ht as B,Bt as C,wt as D,_t as E,Xt as F,Zt as G,Ea as H,Ra as I,xi as J,It as K,Mr as L,bi as M,Qr as N,ei as O,ui as P,di as Q,Ni as R,Kr as S,bn as T,Rr as U,Vt as V,pi as W,yi as X,ve as Y,fi as Z,Ci as _,Pt as a,Er as a0,Ot as a1,ga as a2,ya as a3,Zr as a4,Jr as a5,fn as a6,na as a7,Qt as a8,qr as a9,L as aa,Or as ab,K as ac,Si as ad,Pr as ae,z as af,Xr as ag,Wr as ah,Fr as ai,zr as aj,Yt as ak,$t as al,Cn as am,vn as an,He as ao,Da as ap,we as b,fa as c,Mn as d,A as e,ci as f,xe as g,Na as h,B as i,si as j,li as k,mi as l,x as m,gi as n,N as o,_ as p,ti as q,hi as r,ii as s,te as t,ri as u,oi as v,ni as w,ai as x,oe as y,zt as z};
