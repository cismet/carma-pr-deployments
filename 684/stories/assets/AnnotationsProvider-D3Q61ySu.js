import{j as f}from"./jsx-runtime-DCY474Ph.js";import{F as qe,r as Wn,s as Un,t as Gn,u as Yn,v as Xn,w as Kn,x as Zn,y as Jn,z as Qn,A as et}from"./index-BrmODtEK.js";import{r as T}from"./index-f9CH5uyH.js";import{T as nt}from"./ua-parser-BImYN8iW.js";import{f as be,C as h,r as tt}from"./index-B4PKD6xO.js";import"./index-o4jIgCFn.js";import{n as at,o as rt,S as it,p as ot,f as st,q as Cn,s as lt,t as ut,v as dt,w as ct,l as mt}from"./useLineSegmentVisualizers-jXGHWOXi.js";import{a as g,b as Me,a3 as gt,n as yt,o as pt,c as Xe,j as Ct,k as ft}from"./Elevation-D6iwISK7.js";import{c as Nt,a as xt,b as bt,d as vt}from"./useCesiumPointMoveGizmo-B-4lgQee.js";import"./useCesiumFovWheelZoom-Db-nnVo_.js";import"./maplibre-gl-DqKvp_Oy.js";import"./geodetic-BlUMYLim.js";import{c as St}from"./clamp-co6UzHBn.js";import{e as ht,h as Tt,i as It,s as kt,f as At}from"./geometry2d-CI45uUTk.js";import{i as Lt}from"./carma-guards-a44WOOfV.js";import{n as fn}from"./angle-normalization-D3Clryc1.js";import{c as Ke,P as K,b as de}from"./angles-B5wuhJLI.js";import{c as Be}from"./CoordinateAdapters-CYs89huz.js";/* empty css                                      */import{S as Et}from"./Scene-Dchqh4Dt.js";import{r as Rt}from"./config-F1apJWZw.js";import"./annotation-cursor-overlay-style-BiBLE8yx.js";import"./svgProjection-DC0AVwLB.js";const Ce={LABEL:"label",VISUALIZER:"visualizer"},Pt=Ce,Oe=e=>`[${e}="true"]`,Ze="data-annotation-label-overlay-root",Je="data-annotation-visualizer-overlay-root",Nn="data-annotation-visualizer-overlay-container",qt=Oe(Nn),Mt=Object.freeze({[Ce.LABEL]:{rootAttribute:Ze,containerAttribute:at,rootSelector:Oe(Ze),containerSelector:rt},[Ce.VISUALIZER]:{rootAttribute:Je,containerAttribute:Nn,rootSelector:Oe(Je),containerSelector:qt}}),Bt=e=>Mt[e],Ot=(e,n=Ce.LABEL)=>{var i,l;const{rootSelector:t,containerSelector:a}=Bt(n);let r=e.canvas.parentElement,o=r;for(;r;){if(r.matches(a))return r;const u=(i=r.querySelector)==null?void 0:i.call(r,a);if(u instanceof HTMLElement)return u;if(r.matches(t))return r;const s=(l=r.querySelector)==null?void 0:l.call(r,t);if(s instanceof HTMLElement)return s;o=r,r=r.parentElement}return o},wt=Ot,P={FLY_TO:"flyTo",EXPORT:"export",VISIBILITY:"visibility",REFERENCE:"reference",LOCK:"lock",DELETE:"delete"},M=(()=>{const e="1rem",n="0.8571rem",t="1rem";return Object.freeze({rootFontSizeRem:e,supportFontSizeRem:n,headingFontSizeRem:t,headingFontWeight:600,headingTypographyClassName:`text-[${n}] font-semibold tracking-[0.03em]`,titleTypographyClassName:`text-[${t}] font-semibold leading-[1.25]`})})(),q=Object.freeze({borderRadiusRem:"0.2143rem",hairlineBorderWidthRem:"0.0357rem",panelInsetShadowYOffsetRem:"0.0714rem",panelInsetShadowBlurRem:"0.0714rem",panelBackdropBlurRem:"0.1429rem"}),x=Object.freeze({heading:h.ACCENT_MEASUREMENTS,panelSurface:h.NEUTRAL_SURFACE_SUBTLE,panelBorder:h.NEUTRAL_BORDER_SUBTLE,shadowBase:h.NEUTRAL_BLACK,bodyText:h.NEUTRAL_TEXT_PRIMARY,mutedText:h.NEUTRAL_TEXT_MUTED,linkText:h.WUPP_BLUE,fieldText:h.NEUTRAL_TEXT_STRONG,fieldBorder:h.NEUTRAL_BORDER_DEFAULT,fieldInputBorder:h.NEUTRAL_BORDER_INPUT,fieldFocusBackground:h.STATE_FOCUS_BACKGROUND_WARM,fieldFocusOutline:h.STATE_FOCUS_OUTLINE,titleText:h.NEUTRAL_TEXT_STRONG}),ve=Object.freeze({panelSurface:.9,panelBorder:.9,panelInsetShadow:.02}),_t=Object.freeze({defaultPixelWidth:430,headingColor:x.heading,bodyPanelStyle:{backgroundColor:be(x.panelSurface,ve.panelSurface),border:`${q.hairlineBorderWidthRem} solid ${be(x.panelBorder,ve.panelBorder)}`,boxShadow:`${be(x.shadowBase,ve.panelInsetShadow)} 0 ${q.panelInsetShadowYOffsetRem} ${q.panelInsetShadowBlurRem} inset`,backdropFilter:`blur(${q.panelBackdropBlurRem})`,WebkitBackdropFilter:`blur(${q.panelBackdropBlurRem})`},resolveActionTooltipPopupContainer:e=>e.closest('[data-test-id="annotation-info-box"]')??e.ownerDocument.body,headerForegroundClassName:"text-white/80",headerTitleClassName:`truncate ${M.headingTypographyClassName}`,subtitleContainerClassName:"mb-0 w-full px-2 pt-[0.28em]",subtitleTextStyle:{color:h.ACCENT_NEUTRALS},subtitleTextClassName:`px-2 text-[${M.supportFontSizeRem}] leading-[1.1] font-semibold`,subtitleMetaTextStyle:{color:h.ACCENT_NEUTRALS},subtitleMetaTextClassName:`mt-[0.08em] whitespace-nowrap text-[${M.supportFontSizeRem}] leading-[1.1] font-semibold`,showSubtitleMetaText:!0,bodyContainerClassName:"px-2 pb-2 pt-1",bodyTextStyle:{fontSize:M.rootFontSizeRem,lineHeight:1.4,color:x.bodyText},bodyTextClassName:`text-[${M.rootFontSizeRem}] leading-[1.4] text-[${x.bodyText}]`,emptyContentLineStyle:{minHeight:"1.4em"},emptyContentLineClassName:"w-full",mutedTextClassName:`text-[${x.mutedText}]`,linkTextClassName:`text-[${x.linkText}]`,actionIconClassName:"transition-colors",actionIconColor:h.ACCENT_NEUTRALS,actionIconHoverColor:h.ACCENT_NEUTRALS_HOVER,actionIconFontSize:"16px",hiddenActionIds:[],fieldTextClassName:`text-[${x.fieldText}]`,fieldBorderClassName:`border-[${q.hairlineBorderWidthRem}] border-[${x.fieldBorder}]`,fieldInputBorderClassName:`border-[${q.hairlineBorderWidthRem}] border-[${x.fieldInputBorder}]`,fieldFocusBackgroundClassName:`focus:bg-[${x.fieldFocusBackground}]`,fieldFocusOutlineClassName:`focus:outline focus:outline-2 focus:outline-[${x.fieldFocusOutline}]`,subtleFieldBackgroundClassName:"bg-white/85",titleTextStyle:{fontSize:M.headingFontSizeRem,fontWeight:M.headingFontWeight,lineHeight:1.25},titleTextClassName:`text-[${x.titleText}]/80 ${M.titleTypographyClassName}`,titleInputClassName:`min-w-0 w-auto max-w-full appearance-none [field-sizing:content] break-words rounded-[${q.borderRadiusRem}] border border-transparent bg-transparent px-0 py-[0.05em] text-[${x.titleText}]/80 placeholder:text-[${x.titleText}]/50 focus:bg-[${x.fieldFocusBackground}] focus:outline focus:outline-2 focus:outline-[${x.fieldFocusOutline}] ${M.titleTypographyClassName}`,shortLabelInputClassName:`shrink-0 w-auto appearance-none [field-sizing:content] border-[${q.hairlineBorderWidthRem}] px-[0.5ex] py-0 text-center tabular-nums border-[${x.fieldBorder}] bg-white/85 text-[${x.titleText}]/80 placeholder:text-[${x.titleText}]/80 focus:bg-[${x.fieldFocusBackground}] focus:outline focus:outline-2 focus:outline-[${x.fieldFocusOutline}] ${M.titleTypographyClassName}`,navigationInstructionContainerClassName:"mt-1 flex w-full items-center justify-center px-2 pt-1",navigationAvailabilityContainerClassName:"mt-1 flex w-full items-center justify-center px-2 pt-1",navigationSummaryContainerClassName:"mb-1 mt-0 flex w-full items-center justify-between px-2",navigationLinkFontSize:M.supportFontSizeRem,inlineFieldButtonClassName:`inline-flex h-5 w-5 items-center justify-center rounded border-[${q.hairlineBorderWidthRem}] border-[${x.fieldInputBorder}]`,colorInputClassName:`h-6 w-8 cursor-pointer rounded border-[${q.hairlineBorderWidthRem}] border-[${x.fieldInputBorder}] bg-transparent p-0`,inlineActionButtonClassName:`inline-flex items-center gap-1 rounded border-[${q.hairlineBorderWidthRem}] border-[${x.fieldInputBorder}] px-2 py-1`}),ie=e=>({..._t,...e}),Ft=Object.freeze({tooltipZIndex:1700}),Y=({actionId:e,title:n,icon:t,onClick:a,dataTestId:r,className:o,ariaLabel:i,disabled:l=!1,visualOptions:u})=>{var C;const s=ie(u),[c,d]=T.useState(!1),y=`${s.actionIconClassName}${o?` ${o}`:""}${l?" cursor-not-allowed opacity-50":" cursor-pointer"}`,m={fontSize:s.actionIconFontSize,color:c&&!l?s.actionIconHoverColor:s.actionIconColor},p=(C=s.renderActionIcon)==null?void 0:C.call(s,{actionId:e,icon:t,className:y,style:m,dataTestId:r,ariaLabel:i,disabled:l});return f.jsx(nt,{title:n,zIndex:Ft.tooltipZIndex,getPopupContainer:I=>{const v=I instanceof HTMLElement?I:document.body;return s.resolveActionTooltipPopupContainer(v)},children:f.jsx("span",{onClick:I=>{if(l){I.stopPropagation();return}a(I)},onMouseEnter:()=>d(!0),onMouseLeave:()=>d(!1),className:"inline-flex items-center leading-none","aria-label":i,"aria-disabled":l,children:p??f.jsx(qe,{className:y,style:m,icon:t,"data-test-id":r,"aria-hidden":i?void 0:!0})})})};Y.__docgenInfo={description:"",methods:[],displayName:"AnnotationInfoBoxActionIcon",props:{actionId:{required:!0,tsType:{name:"unknown[union]",raw:"(typeof ANNOTATION_INFO_BOX_ACTION_IDS)[keyof typeof ANNOTATION_INFO_BOX_ACTION_IDS]"},description:""},title:{required:!0,tsType:{name:"string"},description:""},icon:{required:!0,tsType:{name:"IconDefinition"},description:""},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: ReactMouseEvent<HTMLElement, MouseEvent>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",elements:[{name:"HTMLElement"},{name:"MouseEvent"}],raw:"ReactMouseEvent<HTMLElement, MouseEvent>"},name:"event"}],return:{name:"void"}}},description:""},dataTestId:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},visualOptions:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};const zt=Object.freeze({flyTo:"Zur Messung fliegen",exportGeoJson:"Als GeoJSON exportieren",show:"Einblenden",hide:"Ausblenden",setReference:"Als Referenzhöhe setzen",lock:"Sperren",unlock:"Entsperren",delete:"Löschen",deleteLocked:"Gesperrte Messung kann nicht gelöscht werden"}),Dt=({hidden:e=!1,locked:n=!1,labels:t,onFlyTo:a,onExport:r,onToggleVisibility:o,onToggleLock:i,onDelete:l,onSetReference:u,visualOptions:s,dataTestIdPrefix:c,dataTestIds:d})=>{const y={...zt,...t},m=new Set((s==null?void 0:s.hiddenActionIds)??[]),p=C=>!m.has(C);return f.jsxs("div",{className:"flex items-center gap-2",children:[p(P.FLY_TO)?f.jsx(Y,{actionId:P.FLY_TO,title:y.flyTo,icon:Wn,onClick:a,dataTestId:(d==null?void 0:d.flyTo)??`${c}-flyto-btn`,visualOptions:s}):null,p(P.EXPORT)?f.jsx(Y,{actionId:P.EXPORT,title:y.exportGeoJson,icon:Un,onClick:r,dataTestId:(d==null?void 0:d.export)??`${c}-export-geojson-btn`,visualOptions:s}):null,p(P.VISIBILITY)?f.jsx(Y,{actionId:P.VISIBILITY,title:e?y.show:y.hide,icon:e?Gn:Yn,onClick:o,dataTestId:(d==null?void 0:d.visibility)??`${c}-toggle-visibility-btn`,visualOptions:s}):null,u&&p(P.REFERENCE)?f.jsx(Y,{actionId:P.REFERENCE,title:y.setReference,icon:Xn,onClick:u,dataTestId:(d==null?void 0:d.reference)??`${c}-set-reference-btn`,visualOptions:s}):null,p(P.LOCK)?f.jsx(Y,{actionId:P.LOCK,title:n?y.unlock:y.lock,icon:n?Kn:Zn,onClick:i,dataTestId:(d==null?void 0:d.lock)??`${c}-toggle-lock-btn`,visualOptions:s}):null,p(P.DELETE)?f.jsx(Y,{actionId:P.DELETE,title:n?y.deleteLocked:y.delete,icon:Jn,onClick:l,dataTestId:(d==null?void 0:d.delete)??`${c}-delete-btn`,disabled:n,visualOptions:s}):null]})};Dt.__docgenInfo={description:"",methods:[],displayName:"AnnotationInfoBoxActions",props:{hidden:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},locked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},labels:{required:!1,tsType:{name:"Partial",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};const Ht=({items:e,className:n,visualOptions:t})=>{const a=ie(t),r=a.subtitleTextClassName.split(/\s+/).filter(o=>o.length>0&&!o.startsWith("px-")).join(" ");return f.jsx("dl",{className:`flex flex-wrap items-start tabular-nums${n?` ${n}`:""}`,style:{columnGap:"1.35rem",rowGap:"0.5rem"},children:e.map((o,i)=>f.jsxs("div",{className:"grid max-w-full min-w-[5rem] flex-[0_1_auto] grid-rows-[auto,auto] content-start items-start gap-y-[0.1em] text-left",children:[f.jsx("dt",{className:r,style:a.subtitleTextStyle,children:o.label}),f.jsx("dd",{className:"m-0 leading-[1.25]",children:o.value})]},o.id??i))})};Ht.__docgenInfo={description:"",methods:[],displayName:"AnnotationInfoBoxMetricGrid",props:{items:{required:!0,tsType:{name:"unknown"},description:""},className:{required:!1,tsType:{name:"string"},description:""},visualOptions:{required:!1,tsType:{name:"Partial",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Partial<AnnotationInfoBoxVisualOptions>"},description:""}}};const jt=({children:e,className:n,style:t,visualOptions:a})=>{const r=ie(a);return f.jsx("div",{className:`${r.subtitleMetaTextClassName}${n?` ${n}`:""}`,style:{...r.subtitleMetaTextStyle,...t},children:e})};jt.__docgenInfo={description:"",methods:[],displayName:"AnnotationInfoBoxMetaText",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""},visualOptions:{required:!1,tsType:{name:"Partial",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Partial<AnnotationInfoBoxVisualOptions>"},description:""}}};const $t=Object.freeze({measurementSingular:"Messung",measurementPlural:"Messungen",availableSuffix:"verfügbar",previousAriaLabel:"Vorherige Messung",nextAriaLabel:"Nächste Messung",counterSeparator:"von"}),Qe=(e,n)=>`${e} ${e===1?n.measurementSingular:n.measurementPlural} ${n.availableSuffix}`.trim(),Vt=({totalEntries:e,currentIndex:n,instructionText:t,availabilityLabel:a,labels:r,onFlyToAllMeasurements:o,onPreviousMeasurement:i,onNextMeasurement:l,visualOptions:u})=>{var p,C;const s=ie(u),c={...$t,...r};if(e<=0&&!t)return null;const d={fontSize:s.navigationLinkFontSize,border:"none",background:"transparent",padding:0,userSelect:"none"},y=((p=s.navigationControlLabels)==null?void 0:p.previous)??f.jsx(qe,{icon:Qn}),m=((C=s.navigationControlLabels)==null?void 0:C.next)??f.jsx(qe,{icon:et});return f.jsxs(f.Fragment,{children:[t?f.jsx("div",{className:`${s.navigationInstructionContainerClassName} ${s.mutedTextClassName}`,children:f.jsx("span",{children:t})}):null,e>0?f.jsx("div",{className:s.navigationAvailabilityContainerClassName,children:o?f.jsx("button",{type:"button",className:`${s.linkTextClassName} cursor-pointer`,onClick:o,style:{border:"none",background:"transparent",padding:0},children:a??Qe(e,c)}):f.jsx("span",{className:s.linkTextClassName,children:a??Qe(e,c)})}):null,e>0?f.jsxs("div",{className:s.navigationSummaryContainerClassName,children:[f.jsx("button",{type:"button",className:`renderAsLink cursor-pointer select-none ${s.linkTextClassName}`,onClick:i,"data-test-id":"switch-measurement-left",style:d,"aria-label":c.previousAriaLabel,children:y}),f.jsxs("span",{className:"mx-4",children:[n+1," ",c.counterSeparator," ",e]}),f.jsx("button",{type:"button",className:`renderAsLink cursor-pointer select-none ${s.linkTextClassName}`,onClick:l,"data-test-id":"switch-measurement-right",style:d,"aria-label":c.nextAriaLabel,children:m})]}):null]})};Vt.__docgenInfo={description:"",methods:[],displayName:"AnnotationInfoBoxNavigation",props:{totalEntries:{required:!0,tsType:{name:"number"},description:""},currentIndex:{required:!0,tsType:{name:"number"},description:""},instructionText:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},availabilityLabel:{required:!1,tsType:{name:"ReactNode"},description:""},labels:{required:!1,tsType:{name:"Partial",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};const Wt=({children:e,className:n,style:t,visualOptions:a})=>{const r=ie(a);return f.jsx("div",{className:`${r.bodyContainerClassName} ${r.bodyTextClassName}${n?` ${n}`:""}`,style:{...r.bodyTextStyle,...t},children:e})};Wt.__docgenInfo={description:"",methods:[],displayName:"AnnotationInfoBoxTextContent",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""},visualOptions:{required:!1,tsType:{name:"Partial",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Partial<AnnotationInfoBoxVisualOptions>"},description:""}}};const ue=e=>e.trim(),w=Object.freeze({borderRadiusRem:"0.2143rem",shortLabelMaxLength:64,shortLabelWidthPaddingCh:.5,shortLabelMinWidthCh:2.5}),ge=e=>ue(e).slice(0,w.shortLabelMaxLength),Ut=e=>e.slice(0,w.shortLabelMaxLength),Gt=({value:e,placeholder:n,onCommit:t,shortLabelValue:a,shortLabelPlaceholder:r,onShortLabelCommit:o,visualOptions:i})=>{const l=ie(i),[u,s]=T.useState(()=>ue(e)),[c,d]=T.useState(()=>ge(a??"")),y=T.useRef(null),m=T.useRef(null),p=w.shortLabelMaxLength+w.shortLabelWidthPaddingCh,C=Math.min(Math.max(ue(c||r||"").length+w.shortLabelWidthPaddingCh,w.shortLabelMinWidthCh),p);T.useEffect(()=>{s(ue(e))},[e]),T.useEffect(()=>{d(ge(a??""))},[a]);const I=S=>{const R=ue(S);s(R),t(R)},v=S=>{if(!o)return;const R=ge(S);if(!R){const Vn=ge(a??"");d(Vn);return}d(R),o(R)},E=S=>{S.stopPropagation()},Dn=S=>{var R;S.key==="Enter"&&(S.preventDefault(),(R=y.current)==null||R.blur())},Hn=S=>{var R;S.key==="Enter"&&(S.preventDefault(),(R=m.current)==null||R.blur())},jn={...l.titleTextStyle,flex:"0 1 auto",minWidth:"1ch",maxWidth:"100%",fieldSizing:"content"},$n={...l.titleTextStyle,borderRadius:w.borderRadiusRem,flex:"0 1 auto",width:`${C}ch`,minWidth:`${w.shortLabelMinWidthCh}ch`,maxWidth:`min(${p}ch, 100%)`,fieldSizing:"content"};return f.jsxs("div",{className:"inline-flex min-w-0 max-w-full flex-1 items-center",style:{columnGap:"0.35em"},onMouseDown:E,onClick:E,children:[f.jsx("input",{ref:y,type:"text",value:u,placeholder:n,className:l.titleInputClassName,style:jn,onMouseDown:E,onClick:E,onChange:S=>s(S.target.value),onBlur:S=>I(S.target.value),onKeyDown:Dn}),o?f.jsx("input",{ref:m,type:"text",value:c,placeholder:r,maxLength:w.shortLabelMaxLength,className:l.shortLabelInputClassName,style:$n,onMouseDown:E,onClick:E,onChange:S=>d(Ut(S.target.value)),onBlur:S=>v(S.target.value),onKeyDown:Hn}):null]})};Gt.__docgenInfo={description:"",methods:[],displayName:"AnnotationInfoBoxTitleInput",props:{value:{required:!0,tsType:{name:"string"},description:""},placeholder:{required:!0,tsType:{name:"string"},description:""},onCommit:{required:!0,tsType:{name:"signature",type:"function",raw:"(nextValue: string) => void",signature:{arguments:[{type:{name:"string"},name:"nextValue"}],return:{name:"void"}}},description:""},shortLabelValue:{required:!1,tsType:{name:"string"},description:""},shortLabelPlaceholder:{required:!1,tsType:{name:"string"},description:""},onShortLabelCommit:{required:!1,tsType:{name:"signature",type:"function",raw:"(nextValue: string) => void",signature:{arguments:[{type:{name:"string"},name:"nextValue"}],return:{name:"void"}}},description:""},visualOptions:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};const Q=Object.freeze({lineLengthEpsilonPx:.001,referenceDistanceFactor:.2,flipThresholdPx:4,referenceMinDistancePx:24,referenceMaxDistancePx:48,insideBlendFactor:.35,elevationEpsilonMeters:.001,geometryEpsilonPx:1e-6,geometryEpsilonPxSquared:1e-6**2,polygonAreaEpsilonPx2:1e-6,interiorSampleGridResolution:18,minInteriorSampleGridResolution:6,inwardProbeStepsPx:[.5,1,2,4,8,12,16,24,32],polygonLabelPaddingXPx:6,polygonLabelPaddingYPx:4,polygonLabelMinAreaToLabelRatio:1.15,polylabelPrecisionPx:.5,polylabelMaxCellsToProcess:2e4,minSafeLabelDimensionPx:1}),Fr=(e,n,t,a=Q.referenceMinDistancePx,r=Q.referenceMaxDistancePx)=>{const o=ht({start:e,end:n,epsilon:Q.lineLengthEpsilonPx});if(!o)return null;const i=Tt(t,o.midpoint),u=It(i,o.leftUnitNormal)>=0?1:-1,s=St(o.length*Q.referenceDistanceFactor,a,r),c=kt(o.leftUnitNormal,u*s);return At(o.midpoint,c)},Yt=({triangle:e,auxiliaryAltitudeMeters:n,highestAltitudeMeters:t,insideBlendFactor:a=Q.insideBlendFactor,elevationEpsilonMeters:r=Q.elevationEpsilonMeters})=>{const o=n<t-r?e.highest:e.aux;return{x:o.x+(e.centroid.x-o.x)*a,y:o.y+(e.centroid.y-o.y)*a}},N={POINT:"point",DISTANCE:"distance",POLYLINE:"polyline",AREA_GROUND:"area",AREA_PLANAR:"planar",AREA_VERTICAL:"vertical",LABEL:"label"},Xt="select",zr="planar-biggest-triangle",Dr="planar-pca",Hr="planar-trapezoid",xn=e=>e===N.AREA_GROUND||e===N.AREA_VERTICAL||e===N.AREA_PLANAR,Kt=e=>{if(!Number.isFinite(e)||e<0)return"A";let n=Math.floor(e),t="";do t=String.fromCharCode(65+n%26)+t,n=Math.floor(n/26)-1;while(n>=0);return t},we=Object.freeze({fillAlpha:.25,selectedFillAlpha:.35,rgb255ByType:{[N.AREA_VERTICAL]:[112,168,255],[N.AREA_GROUND]:[107,188,123],[N.AREA_PLANAR]:[239,223,145]}}),bn=([e,n,t],a)=>`rgba(${e}, ${n}, ${t}, ${a})`,De=e=>we.rgb255ByType[e],jr=(e,n)=>bn(De(e),n?we.selectedFillAlpha:we.fillAlpha),Zt=(e,n)=>bn(De(e),n),A={DIRECT:"direct",VERTICAL:"vertical",HORIZONTAL:"horizontal"},z=Object.freeze({textRgb255:{dark:[17,24,39],light:[255,255,255]},measurementTextRgb255:[248,250,252],shortLabelRgb255ByType:{[N.POINT]:[200,200,200],[N.DISTANCE]:[102,126,234],[N.POLYLINE]:[226,178,60],[N.LABEL]:[88,152,255]},surfaceRgb255:{stroke:[255,255,255],accent:[246,248,255]},lineComponentRgb255ByKind:{[A.DIRECT]:[255,255,255],[A.VERTICAL]:[111,168,255],[A.HORIZONTAL]:[188,194,102]},selectionRgb255:{background:[15,23,42],hoverBackground:[30,41,59],glow:[255,255,255]}}),j=Object.freeze({alpha:{text:{dark:.9,light:1},shortLabelBackgroundByType:{[N.POINT]:.92,[N.DISTANCE]:.95,[N.POLYLINE]:.95,[N.LABEL]:.95,area:.95},lineComponentByKind:{[A.DIRECT]:1,[A.VERTICAL]:.96,[A.HORIZONTAL]:.95},lineComponentLabelAccentByKind:{[A.DIRECT]:.34,[A.VERTICAL]:.54,[A.HORIZONTAL]:.5},selection:{background:.92,hoverBackground:.9,glow:1},surfaceStroke:.95}}),$=([e,n,t],a)=>`rgba(${e}, ${n}, ${t}, ${a})`,W=(e,n=j.alpha.text[e])=>$(z.textRgb255[e],n),pe=(e=j.alpha.surfaceStroke)=>$(z.surfaceRgb255.stroke,e),Jt=(e=j.alpha.surfaceStroke)=>$(z.surfaceRgb255.accent,e),Se=(e,n=j.alpha.lineComponentByKind[e])=>$(z.lineComponentRgb255ByKind[e],n),he=(e,n=j.alpha.lineComponentLabelAccentByKind[e])=>$(z.lineComponentRgb255ByKind[e],n),U=e=>xn(e)?Zt(e,j.alpha.shortLabelBackgroundByType.area):$(z.shortLabelRgb255ByType[e],j.alpha.shortLabelBackgroundByType[e]),$r=e=>xn(e)?De(e):z.shortLabelRgb255ByType[e],en=(e,n=j.alpha.selection[e])=>$(z.selectionRgb255[e],n),Qt=(e=1)=>$(z.measurementTextRgb255,e),X=Object.freeze({fontFamily:'"Helvetica Neue", Arial, Helvetica, sans-serif',fontWeight:{regular:400,medium:500,semibold:600},fontSizePx:{supportText:12,pointLabel:14,measurementLabel:16,compactBadge:10,distancePairLabel:11}}),D={NUMERIC:"numeric",ALPHABETIC:"alphabetic"},ea={[N.POINT]:{prefix:"",counterStyle:D.NUMERIC,backgroundColor:U(N.POINT),textColor:W("dark")},[N.DISTANCE]:{prefix:"",counterStyle:D.ALPHABETIC,backgroundColor:U(N.DISTANCE),textColor:W("light")},[N.POLYLINE]:{prefix:"L",counterStyle:D.NUMERIC,backgroundColor:U(N.POLYLINE),textColor:W("dark")},[N.AREA_GROUND]:{prefix:"A",counterStyle:D.NUMERIC,backgroundColor:U(N.AREA_GROUND),textColor:W("light")},[N.AREA_PLANAR]:{prefix:"D",counterStyle:D.NUMERIC,backgroundColor:U(N.AREA_PLANAR),textColor:W("light")},[N.AREA_VERTICAL]:{prefix:"F",counterStyle:D.NUMERIC,backgroundColor:U(N.AREA_VERTICAL),textColor:W("light")},[N.LABEL]:{prefix:"T",counterStyle:D.NUMERIC,backgroundColor:U(N.LABEL),textColor:W("light")}},Vr=(e,n,t=ea)=>{const a=t[e],r=Number.isFinite(n)&&n>0?Math.floor(n):1,o=a.counterStyle===D.ALPHABETIC?Kt(r-1):`${r}`;return`${a.prefix}${o}`},He=1e-12,na=1e-6,Wr=(e,n)=>e.map(t=>g.add(t,n,new g)),ta=(e,n,t=new g)=>{const a=g.magnitudeSquared(n);if(a<=He)return g.clone(e,t);const r=g.dot(e,n)/a;return g.subtract(e,g.multiplyByScalar(n,r,new g),t)},aa=(e,n,t,a=new g)=>{const r=g.magnitudeSquared(t);if(r<=He)return g.clone(e,a);const o=g.subtract(e,n,new g),i=g.dot(o,t)/r;return g.subtract(e,g.multiplyByScalar(t,i,new g),a)},Ur=(e,n,t)=>{const a=g.magnitude(t);if(a<=na)return 0;const r=g.subtract(e,n,new g);return g.dot(r,t)/a},ra=(e,n,t,a=new g)=>{const r=g.subtract(n,e,new g),o=g.subtract(t,e,new g),i=g.cross(r,o,a);return g.magnitudeSquared(i)<=He?null:g.normalize(i,a)},ia=0,oa=e=>e??ia,sa=e=>({longitude:Ke(e.longitude),latitude:Ke(e.latitude),altitude:e.height}),la=e=>{const n=Me.fromCartesian(e);return sa(n)},nn=Object.freeze({componentEpsilonMeters:.05}),ua=(e,n,t)=>{const a=ra(e,n,t);return a?{anchorECEF:g.clone(e),normalECEF:a}:null},tn=(e,n)=>aa(e,n.anchorECEF,n.normalECEF),vn=(e,n)=>{const t=gt(e),a=g.subtract(n,e,new g),r=g.dot(a,t),o=g.multiplyByScalar(t,r,new g),i=ta(a,t),l=g.magnitude(i),u=Math.abs(r);if(l<nn.componentEpsilonMeters||u<nn.componentEpsilonMeters)return null;const s=g.add(e,i,new g),c=g.add(e,o,new g),d=g.add(e,t,new g),y=ua(e,d,s);return{adjacentHorizontalCorner:y?tn(s,y):s,adjacentVerticalCorner:y?tn(c,y):c}},Gr=(e,n)=>{const t=vn(e,n);if(!t)return 0;const a=g.distance(e,t.adjacentHorizontalCorner),r=g.distance(e,t.adjacentVerticalCorner);return a*r},an=e=>e.reduce((n,t)=>{const a=t.match(/(\d+)$/),r=a?Number(a[1]):Number.NaN;return Number.isFinite(r)?Math.max(n,r):n},0),Yr=e=>new Map(e.flatMap(n=>n.nodeIds.map(t=>[t,n.id]))),ee=({nodes:e,nodeLinks:n})=>{const t=new Set(e.map(i=>i.id)),a=n.map(i=>({...i,nodeIds:Array.from(new Set(i.nodeIds.filter(l=>t.has(l))))})).filter(i=>i.nodeIds.length>0),r=new Set(a.flatMap(i=>i.nodeIds)),o=e.filter(i=>!r.has(i.id)).map(i=>({id:i.id,nodeIds:[i.id]}));return[...a,...o]},rn=6378137,da=.1,Te=e=>e*Math.PI/180,ca=(e,n)=>{const t=Te(n.latitude-e.latitude),a=Te(n.longitude-e.longitude),r=Te((e.latitude+n.latitude)/2),o=a*Math.cos(r)*rn,i=t*rn,l=n.altitude-e.altitude;return Math.hypot(o,i,l)},ma=e=>typeof e=="string"&&e.trim().length>0?e.trim():null,ga=({nodes:e,nodeLinks:n,nodeId:t,movedNodeIds:a,linkToNodeId:r})=>{const o=e.find(m=>m.id===t)??null,i=Array.from(new Set(a.filter(Boolean)));if(!o||i.length===0)return[...n];const l=new Set(i),u=n.find(m=>m.nodeIds.includes(t))??null,s=ma(r),c=s&&!l.has(s)?n.find(m=>m.nodeIds.includes(s))??null:null;return c&&!c.nodeIds.some(m=>l.has(m))?ee({nodes:e,nodeLinks:n.map(m=>m.id===c.id?{...m,nodeIds:Array.from(new Set([...m.nodeIds,...i]))}:{...m,nodeIds:m.nodeIds.filter(p=>!l.has(p))})}):!u||i.length===u.nodeIds.length?[...n]:e.filter(m=>u.nodeIds.includes(m.id)&&!l.has(m.id)).some(m=>ca(m.coordinate,o.coordinate)>da)?ee({nodes:e,nodeLinks:n.map(m=>m.id===u.id?{...m,nodeIds:m.nodeIds.filter(p=>!l.has(p))}:{...m})}):[...n]},ya=({nodeId:e,nodes:n,linkedNodeGroups:t,annotationEntries:a,selectedMeasurementIds:r=[],preferredMovedNodeIds:o})=>{const i=n.find(C=>C.id===e)??null;if(!i)return{targetNode:null,targetLinkedNodeGroup:null,movedNodeIds:[]};const l=t.find(C=>C.nodeIds.includes(e))??null,u=(l==null?void 0:l.nodeIds)??[e],s=Array.from(new Set((o??[]).filter(C=>u.includes(C)))),c=new Set(r.filter(Boolean)),d=new Set(a.filter(C=>c.has(C.id)).flatMap(C=>C.nodeIds)),y=u.filter(C=>d.has(C)),m=s.length>0?s:y.length>0?y:[...u],p=new Set(a.filter(C=>C.locked).flatMap(C=>C.nodeIds));return{targetNode:i,targetLinkedNodeGroup:l,movedNodeIds:m.filter(C=>!p.has(C))}},pa=(e={})=>{const{initialToolType:n=Xt,initialPointTemporaryMode:t=!1}=e;return{annotationToolType:n,selectionState:{selectedAnnotationIds:[],previousSelectedAnnotationId:null},annotationEntries:[],nodes:[],linkedNodeGroups:[],edges:[],infoBoxState:{activeAnnotationId:null},settingsState:{pointTemporaryMode:t,elevationReferenceAnnotationId:null,nextShortLabelCounterByToolType:{}}}},Ca=Nt({name:"annotationsRuntime",initialState:pa(),reducers:{replaceState:(e,n)=>n.payload,setAnnotationToolType:(e,n)=>{e.annotationToolType=n.payload},setPointTemporaryMode:(e,n)=>{e.settingsState.pointTemporaryMode=n.payload},setElevationReferenceAnnotationId:(e,n)=>{e.settingsState.elevationReferenceAnnotationId=n.payload},setNextShortLabelCounterByToolType:(e,n)=>{e.settingsState.nextShortLabelCounterByToolType={...e.settingsState.nextShortLabelCounterByToolType,[n.payload.toolType]:Math.max(1,n.payload.nextCounter)}},setSelectedAnnotationId:(e,n)=>{const t=n.payload,a=e.selectionState.selectedAnnotationIds[e.selectionState.selectedAnnotationIds.length-1]??null;e.selectionState.previousSelectedAnnotationId=a,e.selectionState.selectedAnnotationIds=t?[t]:[],e.infoBoxState.activeAnnotationId=t},setSelectedAnnotationIds:(e,n)=>{const t=Array.from(new Set(n.payload.filter(Boolean))),a=e.selectionState.selectedAnnotationIds[e.selectionState.selectedAnnotationIds.length-1]??null;e.selectionState.previousSelectedAnnotationId=a,e.selectionState.selectedAnnotationIds=t,e.infoBoxState.activeAnnotationId=t[t.length-1]??null},appendAnnotationEntities:(e,n)=>{if(e.nodes.push(...n.payload.nodes),n.payload.linkedNodeGroups.forEach(t=>{const a=e.linkedNodeGroups.find(r=>r.id===t.id);if(!a){e.linkedNodeGroups.push({id:t.id,nodeIds:[...t.nodeIds]});return}a.nodeIds=Array.from(new Set([...a.nodeIds,...t.nodeIds]))}),e.edges.push(...n.payload.edges),e.annotationEntries.push({...n.payload.annotationEntry,nodeIds:[...n.payload.annotationEntry.nodeIds],edgeIds:[...n.payload.annotationEntry.edgeIds]}),e.linkedNodeGroups=ee({nodes:e.nodes,nodeLinks:e.linkedNodeGroups}),n.payload.selectAnnotationId!==void 0){const t=e.selectionState.selectedAnnotationIds[e.selectionState.selectedAnnotationIds.length-1]??null;e.selectionState.previousSelectedAnnotationId=t,e.selectionState.selectedAnnotationIds=n.payload.selectAnnotationId?[n.payload.selectAnnotationId]:[],e.infoBoxState.activeAnnotationId=n.payload.selectAnnotationId??null}},removeAnnotationById:(e,n)=>{const{annotationId:t,nextSelectedAnnotationId:a}=n.payload,r=e.selectionState.selectedAnnotationIds[e.selectionState.selectedAnnotationIds.length-1]??null;if(!e.annotationEntries.some(s=>s.id===t))return;e.annotationEntries=e.annotationEntries.filter(s=>s.id!==t);const i=new Set(e.annotationEntries.flatMap(s=>s.nodeIds)),l=new Set(e.annotationEntries.flatMap(s=>s.edgeIds));if(e.nodes=e.nodes.filter(s=>i.has(s.id)),e.linkedNodeGroups=ee({nodes:e.nodes,nodeLinks:e.linkedNodeGroups}),e.edges=e.edges.filter(s=>l.has(s.id)),e.selectionState.previousSelectedAnnotationId=r,e.settingsState.elevationReferenceAnnotationId===t&&(e.settingsState.elevationReferenceAnnotationId=null),a!==void 0){e.selectionState.selectedAnnotationIds=a?[a]:[],e.infoBoxState.activeAnnotationId=a??null;return}const u=e.selectionState.selectedAnnotationIds.filter(s=>s!==t);e.selectionState.selectedAnnotationIds=u,e.infoBoxState.activeAnnotationId=u[u.length-1]??null},removeAnnotationsByIds:(e,n)=>{const t=new Set(n.payload.annotationIds);if(t.size===0)return;const a=e.selectionState.selectedAnnotationIds[e.selectionState.selectedAnnotationIds.length-1]??null;if(!e.annotationEntries.some(u=>t.has(u.id)))return;e.annotationEntries=e.annotationEntries.filter(u=>!t.has(u.id));const o=new Set(e.annotationEntries.flatMap(u=>u.nodeIds)),i=new Set(e.annotationEntries.flatMap(u=>u.edgeIds));if(e.nodes=e.nodes.filter(u=>o.has(u.id)),e.linkedNodeGroups=ee({nodes:e.nodes,nodeLinks:e.linkedNodeGroups}),e.edges=e.edges.filter(u=>i.has(u.id)),e.selectionState.previousSelectedAnnotationId=a,e.settingsState.elevationReferenceAnnotationId&&t.has(e.settingsState.elevationReferenceAnnotationId)&&(e.settingsState.elevationReferenceAnnotationId=null),n.payload.nextSelectedAnnotationId!==void 0){e.selectionState.selectedAnnotationIds=n.payload.nextSelectedAnnotationId?[n.payload.nextSelectedAnnotationId]:[],e.infoBoxState.activeAnnotationId=n.payload.nextSelectedAnnotationId??null;return}const l=e.selectionState.selectedAnnotationIds.filter(u=>!t.has(u));e.selectionState.selectedAnnotationIds=l,e.infoBoxState.activeAnnotationId=l[l.length-1]??null},updateNodeCoordinateById:(e,n)=>{const{nodeId:t,coordinate:a,selectedMeasurementIds:r=[],movedNodeIds:o,linkToNodeId:i}=n.payload,{targetNode:l,movedNodeIds:u}=ya({nodeId:t,nodes:e.nodes,linkedNodeGroups:e.linkedNodeGroups,annotationEntries:e.annotationEntries,selectedMeasurementIds:r,preferredMovedNodeIds:o});if(!l)return;const s=new Set(u);u.length!==0&&(e.nodes.forEach(c=>{s.has(c.id)&&(c.coordinate=a)}),e.linkedNodeGroups=ga({nodes:e.nodes,nodeLinks:e.linkedNodeGroups,nodeId:l.id,movedNodeIds:u,linkToNodeId:i}))},insertNodeIntoMeasurementEdge:(e,n)=>{const{measurementId:t,startNodeId:a,endNodeId:r,coordinate:o}=n.payload,i=e.annotationEntries.find(v=>v.id===t);if(!i)return;const l=i.nodeIds.findIndex((v,E)=>v===a&&i.nodeIds[E+1]===r),u=l>=0?l+1:i.closed&&i.nodeIds.length>=3&&i.nodeIds[i.nodeIds.length-1]===a&&i.nodeIds[0]===r?i.nodeIds.length:-1;if(u<0)return;const s=new Map(e.edges.map(v=>[v.id,v])),c=i.edgeIds.findIndex(v=>{const E=s.get(v);return(E==null?void 0:E.startNodeId)===a&&E.endNodeId===r}),d=c>=0?i.edgeIds[c]:null,y=d?s.get(d):void 0;if(!y||c<0)return;const m=`node-${an(e.nodes.map(v=>v.id))+1}`,p=`edge-${an(e.edges.map(v=>v.id))+1}`;e.nodes.push({id:m,coordinate:o}),e.linkedNodeGroups=ee({nodes:e.nodes,nodeLinks:[...e.linkedNodeGroups,{id:m,nodeIds:[m]}]}),y.endNodeId=m;const C={id:p,startNodeId:m,endNodeId:r},I=e.edges.findIndex(v=>v.id===d);I>=0?e.edges.splice(I+1,0,C):e.edges.push(C),i.nodeIds=[...i.nodeIds.slice(0,u),m,...i.nodeIds.slice(u)],i.edgeIds=[...i.edgeIds.slice(0,c+1),p,...i.edgeIds.slice(c+1)]},updateAnnotationEntryById:(e,n)=>{const{annotationId:t,displayName:a,shortLabel:r,hidden:o,locked:i,labelAppearance:l,elevationDisplayMode:u,distanceAnchorCoordinateSelection:s,distanceTriangleAnchorCoordinateRole:c}=n.payload,d=e.annotationEntries.find(y=>y.id===t);d&&(a!==void 0&&(d.displayName=a),r!==void 0&&(d.shortLabel=r),o!==void 0&&(d.hidden=o),i!==void 0&&(d.locked=i),l!==void 0&&(d.labelAppearance={...d.labelAppearance??{},...l}),u!==void 0&&(d.elevationDisplayMode=u),s!==void 0&&(d.distanceAnchorCoordinateSelection=s),c!==void 0&&(d.distanceTriangleAnchorCoordinateRole=c))}}}),{appendAnnotationEntities:Xr,removeAnnotationById:Kr,removeAnnotationsByIds:Zr,setElevationReferenceAnnotationId:Jr,setNextShortLabelCounterByToolType:Qr,setPointTemporaryMode:ei,insertNodeIntoMeasurementEdge:ni,updateNodeCoordinateById:ti,updateAnnotationEntryById:ai,replaceState:ri,setAnnotationToolType:ii,setSelectedAnnotationId:oi,setSelectedAnnotationIds:si}=Ca.actions,je=T.createContext(null);xt(je);const fa=bt(je);vt(je);const li=()=>fa(),_e=Object.freeze({strokeWidthPx:1.5,overlayDashPattern:"8 8"}),Na=(e,n)=>typeof e=="number"&&Number.isFinite(e)&&e>0?e:n,xa=(e,n)=>{const t=e==null?void 0:e.trim();return t||n},ui=(e,n=_e)=>({strokeWidthPx:Na(e==null?void 0:e.strokeWidthPx,n.strokeWidthPx),overlayDashPattern:xa(e==null?void 0:e.overlayDashPattern,n.overlayDashPattern)}),on=Object.freeze({previewAlpha:.9,surfaceAlpha:.92}),b={colors:{neutral:pe(1),accent:pe(1),preview:pe(on.previewAlpha),surface:tt(on.surfaceAlpha),transparent:"transparent",components:{direct:Se(A.DIRECT),vertical:Se(A.VERTICAL),horizontal:Se(A.HORIZONTAL)},componentLabelAccents:{direct:he(A.DIRECT),vertical:he(A.VERTICAL),horizontal:he(A.HORIZONTAL)}},sizes:{edgeStrokeWidth:_e.strokeWidthPx,pointPixelSize:10,pointOutlineWidth:1},patterns:{edgeDashPattern:_e.overlayDashPattern}},Sn=Object.freeze({edge:Object.freeze({stroke:b.colors.accent,strokeWidth:b.sizes.edgeStrokeWidth,overlayDashPattern:b.patterns.edgeDashPattern}),point:Object.freeze({pixelSize:b.sizes.pointPixelSize,fill:b.colors.transparent,outline:b.colors.surface,outlineWidth:b.sizes.pointOutlineWidth})}),hn=Object.freeze({edge:Object.freeze({stroke:b.colors.neutral}),point:Object.freeze({outline:b.colors.neutral})}),ba=(e,n={})=>({...e,...n}),va=(e,n={})=>({...e,...n}),di=e=>ba(e,hn.edge),ci=e=>va(e,hn.point),Fe={DARK_ON_BRIGHT:"dark-on-bright",BRIGHT_ON_DARK:"bright-on-dark"},Sa=X.fontSizePx.pointLabel,ha=e=>`${e/Sa}rem`,ne=Object.freeze({fontFamily:X.fontFamily,rootFontSizeRem:"1rem",supportFontSizeRem:ha(X.fontSizePx.supportText),headingFontSizeRem:"1rem",lineLabelFontWeight:X.fontWeight.medium,badgeFontWeight:X.fontWeight.medium,headingFontWeight:X.fontWeight.semibold,sectionTitleFontWeight:X.fontWeight.semibold}),Ta={SOFT_RECT_FADE:"soft-rect-fade",TEXT_ECHO_DARKEN:"text-echo-darken"},Ia={NONE:"none",MOVE_ON_LINE:"move-on-line"},B=Object.freeze({appearance:Object.freeze({themeStyle:Fe.BRIGHT_ON_DARK}),text:Object.freeze({fontFamily:ne.fontFamily,fontWeight:ne.lineLabelFontWeight}),background:Object.freeze({style:Ta.TEXT_ECHO_DARKEN}),surface:Object.freeze({}),layout:Object.freeze({shortEdgeOffsetPx:-2}),collision:Object.freeze({allowEarlyRemoval:!0,resolutionStrategy:Ia.MOVE_ON_LINE,anchorSlideStepRatio:.1,maxAnchorSlideDeltaRatio:.3})}),ae=Object.freeze({horizontalLabelOffsetPx:7,verticalFlippedBaselineOffsetPx:6,verticalBaselineAngleEpsilonRad:1e-9,sideHysteresisPx:1.5,upperSideGapFactor:.15,upperSideGapNormalYEpsilon:.001}),$e=e=>{var n,t;return{appearance:{...B.appearance,...e==null?void 0:e.appearance},text:{...B.text,...e==null?void 0:e.text,echo:((n=e==null?void 0:e.text)==null?void 0:n.echo)===void 0&&B.text.echo===void 0?void 0:{...B.text.echo,...(t=e==null?void 0:e.text)==null?void 0:t.echo}},background:{...B.background,...e==null?void 0:e.background},surface:{...B.surface,...e==null?void 0:e.surface},layout:{...B.layout,...e==null?void 0:e.layout},collision:{...B.collision,...e==null?void 0:e.collision}}},F=Object.freeze({lineStrokeWidthPx:b.sizes.edgeStrokeWidth,layerZIndex:"1550",lineLabelOffsetPx:8,lineLabelMinLengthPx:44,geometryEpsilonMeters:.01,labelReferenceLineLengthEpsilonPx:.001,labelReferenceDistanceFactor:.2,labelReferenceMinDistancePx:24,labelReferenceMaxDistancePx:48,labelReferenceInsideBlendFactor:.35,labelSideSwitchThresholdPx:4,directLineColor:b.colors.components.direct,verticalLineColor:b.colors.components.vertical,horizontalLineColor:b.colors.components.horizontal,draftChainColor:b.colors.preview}),se=Object.freeze({root:"carma-annotation-text-overlay",backdrop:"carma-annotation-text-overlay__backdrop",surface:"carma-annotation-text-overlay__surface",textEcho:"carma-annotation-text-overlay__text-echo",text:"carma-annotation-text-overlay__text"}),ye=Object.freeze({paddingBlockEx:.25,paddingInlineEx:.65,backdropInsetBlockEx:-.35,backdropInsetInlineEx:-.75}),ka=Object.freeze({fontSize:"20px",letterSpacing:"5%",fontWeight:800,textEchoBlurPx:12,textEchoShadow:"0 0 4px rgba(2, 6, 23, 0.8), 0 0 12px rgba(2, 6, 23, 0.77), 0 0 24px rgba(2, 6, 23, 0.64)"}),Aa=Object.freeze({[Fe.BRIGHT_ON_DARK]:"15, 23, 42",[Fe.DARK_ON_BRIGHT]:"255, 255, 255"}),le=(e,n)=>{const t=document.createElement(e);return t.className=n,t},G=({element:e,value:n,property:t,unit:a,min:r,max:o})=>{if(typeof n!="number"||!Number.isFinite(n))return;const i=r===void 0?n:Math.max(n,r),l=o===void 0?i:Math.min(i,o);e.style.setProperty(t,`${l}${a??""}`)},La=({element:e,backdrop:n,surface:t,accentColor:a,visualOptions:r=B})=>{var i,l,u,s,c,d,y,m,p,C,I,v;e.style.setProperty("--carma-annotation-text-overlay-font-family",r.text.fontFamily),e.style.setProperty("--carma-annotation-text-overlay-font-weight",String(r.text.fontWeight)),a&&e.style.setProperty("--carma-annotation-text-overlay-glow-color",a),e.dataset.annotationThemeStyle=r.appearance.themeStyle,e.dataset.annotationTextOverlayBackgroundStyle=r.background.style,typeof r.background.surfaceAlpha=="number"&&Number.isFinite(r.background.surfaceAlpha)&&!((i=r.background.color)!=null&&i.trim())&&e.style.setProperty("--carma-annotation-text-overlay-backdrop-background",`rgba(${Aa[r.appearance.themeStyle]}, ${Math.min(Math.max(r.background.surfaceAlpha,0),1)})`);const o=r.background.showBackdrop!==!1;n.style.display=o?"block":"none",t.style.display=o?"block":"none",(l=r.text.color)!=null&&l.trim()&&e.style.setProperty("--carma-annotation-text-overlay-text-color",r.text.color),(u=r.text.blendMode)!=null&&u.trim()&&e.style.setProperty("--carma-annotation-text-overlay-text-blend-mode",r.text.blendMode),(s=r.background.color)!=null&&s.trim()&&e.style.setProperty("--carma-annotation-text-overlay-backdrop-background",r.background.color),(c=r.background.blendMode)!=null&&c.trim()&&e.style.setProperty("--carma-annotation-text-overlay-backdrop-blend-mode",r.background.blendMode),(d=r.surface.blendMode)!=null&&d.trim()&&e.style.setProperty("--carma-annotation-text-overlay-surface-blend-mode",r.surface.blendMode),(m=(y=r.text.echo)==null?void 0:y.color)!=null&&m.trim()&&e.style.setProperty("--carma-annotation-text-overlay-text-echo-color",r.text.echo.color),(C=(p=r.text.echo)==null?void 0:p.blendMode)!=null&&C.trim()&&e.style.setProperty("--carma-annotation-text-overlay-text-echo-blend-mode",r.text.echo.blendMode),G({element:e,value:(I=r.text.echo)==null?void 0:I.blurPx,property:"--carma-annotation-text-overlay-text-echo-blur-px",unit:"px",min:0}),G({element:e,value:(v=r.text.echo)==null?void 0:v.opacity,property:"--carma-annotation-text-overlay-text-echo-opacity",min:0,max:1}),G({element:e,value:r.background.blurPx,property:"--carma-annotation-text-overlay-surface-blur-px",unit:"px",min:0}),G({element:e,value:r.background.brightnessPct,property:"--carma-annotation-text-overlay-surface-brightness-pct",unit:"%",min:0}),G({element:e,value:r.background.saturatePct,property:"--carma-annotation-text-overlay-surface-saturate-pct",unit:"%",min:0}),G({element:e,value:r.background.radiusEx,property:"--carma-annotation-text-overlay-backdrop-radius",unit:"ex",min:0}),G({element:e,value:r.background.edgeBlurPx,property:"--carma-annotation-text-overlay-surface-edge-blur-px",unit:"px",min:0}),(typeof r.surface.paddingBlockEx=="number"||typeof r.surface.paddingInlineEx=="number")&&(e.style.setProperty("--carma-annotation-text-overlay-padding-block",`${typeof r.surface.paddingBlockEx=="number"&&Number.isFinite(r.surface.paddingBlockEx)?Math.max(r.surface.paddingBlockEx,0):ye.paddingBlockEx}ex`),e.style.setProperty("--carma-annotation-text-overlay-padding-inline",`${typeof r.surface.paddingInlineEx=="number"&&Number.isFinite(r.surface.paddingInlineEx)?Math.max(r.surface.paddingInlineEx,0):ye.paddingInlineEx}ex`)),(typeof r.background.insetBlockEx=="number"||typeof r.background.insetInlineEx=="number")&&e.style.setProperty("--carma-annotation-text-overlay-backdrop-inset",`${typeof r.background.insetBlockEx=="number"&&Number.isFinite(r.background.insetBlockEx)?r.background.insetBlockEx:ye.backdropInsetBlockEx}ex ${typeof r.background.insetInlineEx=="number"&&Number.isFinite(r.background.insetInlineEx)?r.background.insetInlineEx:ye.backdropInsetInlineEx}ex`)},Ea=(e,n)=>{n&&(n.fontSize&&e.style.setProperty("--carma-annotation-text-overlay-font-size",n.fontSize),n.fontWeight!==void 0&&e.style.setProperty("--carma-annotation-text-overlay-font-weight",String(n.fontWeight)),n.letterSpacing&&e.style.setProperty("--carma-annotation-text-overlay-letter-spacing",n.letterSpacing),typeof n.textEchoBlurPx=="number"&&e.style.setProperty("--carma-annotation-text-overlay-text-echo-blur-px",`${n.textEchoBlurPx}px`),n.textEchoShadow&&e.style.setProperty("--carma-annotation-text-overlay-text-echo-shadow",n.textEchoShadow))},Tn=({accentColor:e,visualOptions:n,styleOptions:t})=>{const a=le("div",se.root),r=le("div",se.backdrop),o=le("div",se.surface),i=le("div",se.textEcho),l=le("div",se.text);return i.dataset.annotationTextOverlayTextEcho="true",l.dataset.annotationTextOverlayText="foreground",La({element:a,backdrop:r,surface:o,textEcho:i,text:l,accentColor:e,visualOptions:n}),Ea(a,t),a.append(r,o,i,l),a},Ra=e=>e.querySelector('[data-annotation-text-overlay-text="foreground"]'),Pa=e=>e.querySelector('[data-annotation-text-overlay-text-echo="true"]'),In=(e,n)=>{const t=Ra(e),a=Pa(e);t&&t.textContent!==n&&(t.textContent=n),a&&a.textContent!==n&&(a.textContent=n)},Ne=(e,n)=>{Object.assign(e.style,n)},ze=Object.freeze({className:"carma-annotation-overlay-line-label",frameClassName:"carma-annotation-overlay-line-label__frame"}),qa=Object.freeze({direct:{},vertical:{labelOffsetPx:F.lineLabelOffsetPx,labelFlippedBaselineOffsetPx:ae.verticalFlippedBaselineOffsetPx,labelRotationMode:it.CLOCKWISE},horizontal:{labelOffsetPx:ae.horizontalLabelOffsetPx}}),sn=(e,n)=>{const t=document.createElement(e);return t.className=n,t},Ma=e=>e.querySelector(`.${ze.frameClassName}`),Ba=e=>{const n=e.dataset.annotationOverlayLineLabelShortEdgeOffsetPx,t=n?Number(n):Number.NaN;return Number.isFinite(t)?t:B.layout.shortEdgeOffsetPx},kn=e=>e.dataset.annotationOverlayLineLabelKind==="vertical"||e.dataset.annotationOverlayLineLabelKind==="horizontal"?e.dataset.annotationOverlayLineLabelKind:"direct",Oa=e=>kn(e)==="vertical",wa=({kind:e,outsideReferencePoint:n,anchorRatio:t})=>({...qa[e],anchorRatio:t===void 0?void 0:st(t),getLabelOutsideReferencePoint:n?()=>({x:n.x,y:n.y}):void 0}),_a=({x:e,y:n,angleRad:t,anchor:a})=>`translate(${Math.round(e)}px, ${Math.round(n)}px) ${a==="left"?"translate(0%, -50%)":a==="right"?"translate(-100%, -50%)":"translate(-50%, -50%)"} rotate(${t}rad)`,Fa=(e,n,t=Pt.LABEL)=>{const a=wt(e,t);if(!a)return null;const r=document.createElement("div");return r.id=n,r.dataset.annotationOverlayLayer="true",Ne(r,{position:"absolute",inset:"0",overflow:"hidden",pointerEvents:"none",userSelect:"none",webkitUserSelect:"none",zIndex:"auto"}),a.appendChild(r),r},mi=Fa,za=e=>{e==null||e.remove()},gi=za,yi=e=>{const n=new yt,t=n.update.bind(n);return n.update=a=>{if(!(a.passes.pick&&!a.passes.render))return t(a)},e.primitives.add(n),n},pi=(e,n)=>{if(!(!n||!Lt(e)))try{if(typeof n.isDestroyed=="function"&&n.isDestroyed())return;e.primitives.remove(n)}catch{}},An=e=>pt.fromType("Color",{color:Xe.fromCssColorString(e)??Xe.WHITE}),Ci=(e,n,t,a)=>({polyline:e.add({id:n,positions:[g.ZERO,g.ZERO],width:(a==null?void 0:a.width)??F.lineStrokeWidthPx,material:An(t),show:!1}),colorCss:t}),fi=(e,n)=>{e.colorCss!==n&&(e.polyline.material=An(n),e.colorCss=n)},Ni=e=>{e.polyline.show=!1},xi=(e,n)=>{e.polyline.positions=[...n],e.polyline.show=n.length>=2},Ie=(e,n)=>{const t=$e(n),a=sn("div",ze.className),r=sn("div",ze.frameClassName),o=Tn({accentColor:e,visualOptions:t});return a.dataset.annotationOverlayLineLabelShortEdgeOffsetPx=String(t.layout.shortEdgeOffsetPx),r.append(o),a.appendChild(r),a},bi=e=>{const n=$e(e),t=Ie(b.colors.componentLabelAccents.direct,n);t.dataset.annotationOverlayLineLabelKind="direct";const a=Ie(b.colors.componentLabelAccents.vertical,n);a.dataset.annotationOverlayLineLabelKind="vertical";const r=Ie(b.colors.componentLabelAccents.horizontal,n);return r.dataset.annotationOverlayLineLabelKind="horizontal",{direct:t,vertical:a,horizontal:r}},ln=(e,n)=>{if(!(n!=null&&n.screenPosition)){e.style.display="none";return}In(e,n.text),e.style.display="inline-grid",e.style.transform=`translate(${Math.round(n.screenPosition.x)}px, ${Math.round(n.screenPosition.y)}px) translate(-50%, -50%)`},vi=({overlayLayer:e,accentColor:n,visualOptions:t})=>{const a=Tn({accentColor:n,visualOptions:$e(t),styleOptions:ka});return a.dataset.annotationOverlayLineLabelKind="area",Ne(a,{position:"absolute",left:"0",top:"0",display:"none",willChange:"transform"}),e==null||e.appendChild(a),{setState:r=>ln(a,r),clear:()=>ln(a,null),destroy:()=>a.remove()}},Si=e=>{e.direct.style.display="none",e.vertical.style.display="none",e.horizontal.style.display="none"},Ln=(e,n)=>{Ne(e,{width:`${n.pixelSize}px`,height:`${n.pixelSize}px`,border:`${n.outlineWidth}px solid ${n.outline}`,background:n.fill})},Da=(e=Sn.point)=>{const n=document.createElement("div");return Ne(n,{position:"absolute",left:"0",top:"0",display:"none",borderRadius:"999px",transform:"translate(-50%, -50%)",boxSizing:"border-box",pointerEvents:"none",userSelect:"none",webkitUserSelect:"none",willChange:"transform"}),Ln(n,e),n},Ha=({overlayLayer:e,pointMarkers:n,count:t,style:a})=>{for(;n.length<t;){const r=Da(a);n.push(r),e.appendChild(r)}},hi=e=>{e.forEach(n=>{n.style.display="none"})},Ti=({scene:e,overlayLayer:n,pointMarkers:t,coordinates:a,style:r=Sn.point})=>{Ha({overlayLayer:n,pointMarkers:t,count:a.length,style:r}),a.forEach((o,i)=>{const l=t[i];if(!l)return;Ln(l,r);const u=Et.worldToWindowCoordinates(e,Be(o));if(!Ct(u)){l.style.display="none";return}l.style.display="block",l.style.transform=`translate(${Math.round(u.x)}px, ${Math.round(u.y)}px) translate(-50%, -50%)`}),t.slice(a.length).forEach(o=>{o.style.display="none"})},ja=e=>fn(e>K||e<-K?e+de:e),$a=e=>{let n=fn(e);return n>K?n=n-de:n<-K&&(n=n+de),n},Va=({angleRad:e,lineSide:n})=>Math.abs(Math.abs(e)-K)>ae.verticalBaselineAngleEpsilonRad?e:n==="left"?K:-K,Wa=({deltaX:e,deltaY:n,lineSide:t,flipReadingDirection:a,forceHorizontal:r})=>{if(r)return 0;const o=ja(Math.atan2(n,e)),i=a?o>=0?o-de:o+de:o;return Va({angleRad:$a(i),lineSide:t})},Ua=({start:e,end:n,kind:t,outsideReferencePoint:a,shortEdgeOffsetPx:r=B.layout.shortEdgeOffsetPx,useShortEdgeRules:o=!0,flipReadingDirection:i=!1,previousShouldFlip:l=!1,anchorRatio:u})=>{const s=ot({svgLine:{start:{x:e.x,y:e.y},end:{x:n.x,y:n.y}},options:wa({kind:t,outsideReferencePoint:a,anchorRatio:u}),previousShouldFlip:l,sideSwitchThresholdPx:ae.sideHysteresisPx});if(!s)return null;const c=n.x-e.x,d=n.y-e.y;if(o&&s.lineLengthPx<F.lineLabelMinLengthPx){const y=s.normalX>=0,m=y?"left":"right";return{x:s.midX+s.normalX*r,y:s.midY+s.normalY*r,angleRad:Wa({deltaX:c,deltaY:d,lineSide:m,flipReadingDirection:i,forceHorizontal:!0}),anchor:y?"left":"right",anchorRatio:s.anchorRatio,isShortEdge:!0,shouldFlip:s.shouldFlip,normalX:s.normalX,normalY:s.normalY}}return{x:s.textX,y:s.textY,angleRad:s.angleRad,anchor:"center",anchorRatio:s.anchorRatio,isShortEdge:!1,shouldFlip:s.shouldFlip,normalX:s.normalX,normalY:s.normalY}},Ii=({element:e,text:n,start:t,end:a,outsideReferencePoint:r,flipReadingDirection:o=!1,anchorRatio:i})=>{const l=Ua({start:t,end:a,kind:kn(e),outsideReferencePoint:r,shortEdgeOffsetPx:Ba(e),useShortEdgeRules:Oa(e),flipReadingDirection:o,anchorRatio:i,previousShouldFlip:e.dataset.annotationOverlayLineLabelNormalFlip==="1"});if(!l){e.style.display="none";return}In(e,n),e.style.display="block";const u=Ma(e),s=!l.isShortEdge&&l.normalY<-ae.upperSideGapNormalYEpsilon&&u?u.getBoundingClientRect().height*ae.upperSideGapFactor:0,c=l.x+l.normalX*s,d=l.y+l.normalY*s;e.dataset.annotationOverlayLineLabelShortEdge=l.isShortEdge?"true":"false",e.dataset.annotationOverlayLineLabelAnchorRatio=`${l.anchorRatio}`,e.dataset.annotationOverlayLineLabelNormalFlip=l.shouldFlip?"1":"0",e.style.transform=_a({...l,x:c,y:d})},Ga=e=>Math.min(F.labelReferenceMaxDistancePx,Math.max(F.labelReferenceMinDistancePx,e)),ke=({start:e,end:n,insidePoint:t,previousOutsideSign:a})=>{const r=n.x-e.x,o=n.y-e.y,i=Math.hypot(r,o);if(!Number.isFinite(i)||i<=F.labelReferenceLineLengthEpsilonPx)return null;const l=(e.x+n.x)*.5,u=(e.y+n.y)*.5,s=-o/i,c=r/i,d=(t.x-l)*s+(t.y-u)*c,y=d>=0?-1:1,m=a&&a!==y&&Math.abs(d)<F.labelSideSwitchThresholdPx?a:y,p=Ga(i*F.labelReferenceDistanceFactor);return{outsideSign:m,referencePoint:{x:l+s*m*p,y:u+c*m*p}}},ki=({anchor:e,target:n,aux:t,anchorAltitudeMeters:a,targetAltitudeMeters:r,previousVerticalOutsideSign:o})=>{const i={x:e.x,y:e.y},l={x:n.x,y:n.y},u={x:t.x,y:t.y},s=a>=r?i:l,c={anchor:i,target:l,aux:u,highest:s,centroid:{x:(i.x+l.x+u.x)/3,y:(i.y+l.y+u.y)/3}},d=Yt({triangle:c,auxiliaryAltitudeMeters:r,highestAltitudeMeters:Math.max(a,r),insideBlendFactor:F.labelReferenceInsideBlendFactor}),y=ke({start:i,end:l,insidePoint:d}),m=ke({start:u,end:l,insidePoint:d}),p=ke({start:i,end:u,insidePoint:l,previousOutsideSign:o});return{directOutsideReferencePoint:(y==null?void 0:y.referencePoint)??null,verticalOutsideReferencePoint:(p==null?void 0:p.referencePoint)??null,horizontalOutsideReferencePoint:(m==null?void 0:m.referencePoint)??null,nextVerticalOutsideSign:p==null?void 0:p.outsideSign}},Ai=({directLabelText:e,verticalLabelText:n,horizontalLabelText:t})=>({showVerticalLabel:n!==null&&n!==e,showHorizontalLabel:t!==null&&t!==e}),Li=()=>({cartographicA:new Me,cartographicB:new Me,auxiliaryPoint:new g,auxiliaryScreen:new ft}),Ei=({scene:e,anchorPointECEF:n,targetPointECEF:t,scratch:a})=>{const r=e.globe.ellipsoid,o=r.cartesianToCartographic(n,a.cartographicA),i=r.cartesianToCartographic(t,a.cartographicB);return!o||!i?null:g.fromRadians(o.longitude,o.latitude,i.height??0,r,a.auxiliaryPoint)},Ri=e=>{const n=la(e);return{longitude:n.longitude,latitude:n.latitude,altitude:oa(n.altitude)}},Pi=({firstCorner:e,oppositeCorner:n})=>{const t=Be(e),a=Be(n),r=vn(t,a);return r?[t,r.adjacentHorizontalCorner,a,r.adjacentVerticalCorner,t]:null},Ya=Object.freeze({longPressDurationMs:320}),Xa=({interactive:e,onClick:n,onHoverChange:t,onLongPress:a,longPressDurationMs:r=Ya.longPressDurationMs,markerStyle:o})=>{const[i,l]=T.useState(!1),u=T.useRef(void 0),s=T.useRef(!1),c=T.useCallback(()=>{u.current!==void 0&&(window.clearTimeout(u.current),u.current=void 0)},[]),d=T.useCallback(I=>{if(I.stopPropagation(),I.button!==0||!a){c();return}s.current=!1,c(),u.current=window.setTimeout(()=>{s.current=!0,a()},r)},[c,r,a]),y=T.useCallback(()=>{c()},[c]),m=T.useCallback(I=>{if(I.stopPropagation(),s.current){s.current=!1;return}n==null||n()},[n]),p=T.useCallback(()=>{l(!0),t==null||t(!0)},[t]),C=T.useCallback(()=>{c(),l(!1),t==null||t(!1)},[c,t]);return T.useEffect(()=>c,[c]),f.jsx("div",{"data-runtime-point-marker-shell":"true",style:{position:"relative",width:"0px",height:"0px",overflow:"visible",pointerEvents:"none"},children:f.jsx("div",{"data-runtime-point-marker-circle":"true",style:{position:"absolute",left:"0px",top:"0px",transform:i?`translate(-50%, -50%) scale(${Cn.hover.scale})`:"translate(-50%, -50%)",borderRadius:"999px",boxSizing:"border-box",pointerEvents:e?"auto":"none",cursor:e?"pointer":"default",transition:lt(),boxShadow:i?ut():"none",filter:i?dt():"none",...o},onClick:e?m:void 0,onMouseDown:e?d:void 0,onMouseUp:e?y:void 0,onMouseEnter:e?p:void 0,onMouseLeave:e?C:void 0})})};Xa.__docgenInfo={description:"",methods:[],displayName:"PointMarkerOverlayShell",props:{interactive:{required:!0,tsType:{name:"boolean"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onHoverChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(hovered: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"hovered"}],return:{name:"void"}}},description:""},onLongPress:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},longPressDurationMs:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"pointMarkerVisualizerDefaults.longPressDurationMs",computed:!0}},markerStyle:{required:!1,tsType:{name:"CSSProperties"},description:""}}};const qi={RIGHTMOST_SCREEN_SPACE:"rightmost-screen-space",LEFTMOST_SCREEN_SPACE:"leftmost-screen-space"},Mi={START_COORDINATE:"start-coordinate",END_COORDINATE:"end-coordinate"},Bi={POINT_LABEL:"point-label",LINE_BLEND:"line-blend"},Oi={GROUND:"ground",COPLANAR:"coplanar"},Ka={MIN:1,MAX:1400,LOG_SCALE:64};Object.freeze({layoutConfig:Rt(void 0),markerPixelSize:10,markerOutlineWidth:b.sizes.pointOutlineWidth,stemColor:b.colors.surface,activeMoveGizmoLabelZIndex:Ka.MAX+1});Object.freeze({...ct({markerDiameterPx:b.sizes.pointPixelSize,markerStrokeWidthPx:b.sizes.pointOutlineWidth}),tickColor:Cn.colors.surfaceStrong,minOverlayZIndex:mt.zIndex.interactionHandleFloor});Object.freeze({cornerOverlay:Object.freeze({minBoxPx:20,paddingPx:6,targetRadiusPx:20,segments:20,strokeWidthPx:1.25,color:Jt(),straightHitTargetPx:20})});function oe(e,n,t){e.prototype=n.prototype=t,t.constructor=e}function me(e,n){var t=Object.create(e.prototype);for(var a in n)t[a]=n[a];return t}function V(){}var J=.7,re=1/J,Za=/^#([0-9a-f]{3})$/,Ja=/^#([0-9a-f]{6})$/,Qa=/^rgb\(\s*([-+]?\d+)\s*,\s*([-+]?\d+)\s*,\s*([-+]?\d+)\s*\)$/,er=/^rgb\(\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*\)$/,nr=/^rgba\(\s*([-+]?\d+)\s*,\s*([-+]?\d+)\s*,\s*([-+]?\d+)\s*,\s*([-+]?\d+(?:\.\d+)?)\s*\)$/,tr=/^rgba\(\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)\s*\)$/,ar=/^hsl\(\s*([-+]?\d+(?:\.\d+)?)\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*\)$/,rr=/^hsla\(\s*([-+]?\d+(?:\.\d+)?)\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)\s*\)$/,un={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};oe(V,Ve,{displayable:function(){return this.rgb().displayable()},toString:function(){return this.rgb()+""}});function Ve(e){var n;return e=(e+"").trim().toLowerCase(),(n=Za.exec(e))?(n=parseInt(n[1],16),new k(n>>8&15|n>>4&240,n>>4&15|n&240,(n&15)<<4|n&15,1)):(n=Ja.exec(e))?dn(parseInt(n[1],16)):(n=Qa.exec(e))?new k(n[1],n[2],n[3],1):(n=er.exec(e))?new k(n[1]*255/100,n[2]*255/100,n[3]*255/100,1):(n=nr.exec(e))?cn(n[1],n[2],n[3],n[4]):(n=tr.exec(e))?cn(n[1]*255/100,n[2]*255/100,n[3]*255/100,n[4]):(n=ar.exec(e))?mn(n[1],n[2]/100,n[3]/100,1):(n=rr.exec(e))?mn(n[1],n[2]/100,n[3]/100,n[4]):un.hasOwnProperty(e)?dn(un[e]):e==="transparent"?new k(NaN,NaN,NaN,0):null}function dn(e){return new k(e>>16&255,e>>8&255,e&255,1)}function cn(e,n,t,a){return a<=0&&(e=n=t=NaN),new k(e,n,t,a)}function We(e){return e instanceof V||(e=Ve(e)),e?(e=e.rgb(),new k(e.r,e.g,e.b,e.opacity)):new k}function En(e,n,t,a){return arguments.length===1?We(e):new k(e,n,t,a??1)}function k(e,n,t,a){this.r=+e,this.g=+n,this.b=+t,this.opacity=+a}oe(k,En,me(V,{brighter:function(e){return e=e==null?re:Math.pow(re,e),new k(this.r*e,this.g*e,this.b*e,this.opacity)},darker:function(e){return e=e==null?J:Math.pow(J,e),new k(this.r*e,this.g*e,this.b*e,this.opacity)},rgb:function(){return this},displayable:function(){return 0<=this.r&&this.r<=255&&0<=this.g&&this.g<=255&&0<=this.b&&this.b<=255&&0<=this.opacity&&this.opacity<=1},toString:function(){var e=this.opacity;return e=isNaN(e)?1:Math.max(0,Math.min(1,e)),(e===1?"rgb(":"rgba(")+Math.max(0,Math.min(255,Math.round(this.r)||0))+", "+Math.max(0,Math.min(255,Math.round(this.g)||0))+", "+Math.max(0,Math.min(255,Math.round(this.b)||0))+(e===1?")":", "+e+")")}}));function mn(e,n,t,a){return a<=0?e=n=t=NaN:t<=0||t>=1?e=n=NaN:n<=0&&(e=NaN),new O(e,n,t,a)}function ir(e){if(e instanceof O)return new O(e.h,e.s,e.l,e.opacity);if(e instanceof V||(e=Ve(e)),!e)return new O;if(e instanceof O)return e;e=e.rgb();var n=e.r/255,t=e.g/255,a=e.b/255,r=Math.min(n,t,a),o=Math.max(n,t,a),i=NaN,l=o-r,u=(o+r)/2;return l?(n===o?i=(t-a)/l+(t<a)*6:t===o?i=(a-n)/l+2:i=(n-t)/l+4,l/=u<.5?o+r:2-o-r,i*=60):l=u>0&&u<1?0:i,new O(i,l,u,e.opacity)}function or(e,n,t,a){return arguments.length===1?ir(e):new O(e,n,t,a??1)}function O(e,n,t,a){this.h=+e,this.s=+n,this.l=+t,this.opacity=+a}oe(O,or,me(V,{brighter:function(e){return e=e==null?re:Math.pow(re,e),new O(this.h,this.s,this.l*e,this.opacity)},darker:function(e){return e=e==null?J:Math.pow(J,e),new O(this.h,this.s,this.l*e,this.opacity)},rgb:function(){var e=this.h%360+(this.h<0)*360,n=isNaN(e)||isNaN(this.s)?0:this.s,t=this.l,a=t+(t<.5?t:1-t)*n,r=2*t-a;return new k(Ae(e>=240?e-240:e+120,r,a),Ae(e,r,a),Ae(e<120?e+240:e-120,r,a),this.opacity)},displayable:function(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1}}));function Ae(e,n,t){return(e<60?n+(t-n)*e/60:e<180?t:e<240?n+(t-n)*(240-e)/60:n)*255}var Rn=Math.PI/180,Pn=180/Math.PI,fe=18,qn=.95047,Mn=1,Bn=1.08883,On=4/29,te=6/29,wn=3*te*te,sr=te*te*te;function Ue(e){if(e instanceof _)return new _(e.l,e.a,e.b,e.opacity);if(e instanceof H){var n=e.h*Rn;return new _(e.l,Math.cos(n)*e.c,Math.sin(n)*e.c,e.opacity)}e instanceof k||(e=We(e));var t=Pe(e.r),a=Pe(e.g),r=Pe(e.b),o=Le((.4124564*t+.3575761*a+.1804375*r)/qn),i=Le((.2126729*t+.7151522*a+.072175*r)/Mn),l=Le((.0193339*t+.119192*a+.9503041*r)/Bn);return new _(116*i-16,500*(o-i),200*(i-l),e.opacity)}function lr(e,n,t,a){return arguments.length===1?Ue(e):new _(e,n,t,a??1)}function _(e,n,t,a){this.l=+e,this.a=+n,this.b=+t,this.opacity=+a}oe(_,lr,me(V,{brighter:function(e){return new _(this.l+fe*(e??1),this.a,this.b,this.opacity)},darker:function(e){return new _(this.l-fe*(e??1),this.a,this.b,this.opacity)},rgb:function(){var e=(this.l+16)/116,n=isNaN(this.a)?e:e+this.a/500,t=isNaN(this.b)?e:e-this.b/200;return e=Mn*Ee(e),n=qn*Ee(n),t=Bn*Ee(t),new k(Re(3.2404542*n-1.5371385*e-.4985314*t),Re(-.969266*n+1.8760108*e+.041556*t),Re(.0556434*n-.2040259*e+1.0572252*t),this.opacity)}}));function Le(e){return e>sr?Math.pow(e,1/3):e/wn+On}function Ee(e){return e>te?e*e*e:wn*(e-On)}function Re(e){return 255*(e<=.0031308?12.92*e:1.055*Math.pow(e,1/2.4)-.055)}function Pe(e){return(e/=255)<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)}function ur(e){if(e instanceof H)return new H(e.h,e.c,e.l,e.opacity);e instanceof _||(e=Ue(e));var n=Math.atan2(e.b,e.a)*Pn;return new H(n<0?n+360:n,Math.sqrt(e.a*e.a+e.b*e.b),e.l,e.opacity)}function dr(e,n,t,a){return arguments.length===1?ur(e):new H(e,n,t,a??1)}function H(e,n,t,a){this.h=+e,this.c=+n,this.l=+t,this.opacity=+a}oe(H,dr,me(V,{brighter:function(e){return new H(this.h,this.c,this.l+fe*(e??1),this.opacity)},darker:function(e){return new H(this.h,this.c,this.l-fe*(e??1),this.opacity)},rgb:function(){return Ue(this).rgb()}}));var _n=-.14861,Ge=1.78277,Ye=-.29227,xe=-.90649,ce=1.97294,gn=ce*xe,yn=ce*Ge,pn=Ge*Ye-xe*_n;function cr(e){if(e instanceof Z)return new Z(e.h,e.s,e.l,e.opacity);e instanceof k||(e=We(e));var n=e.r/255,t=e.g/255,a=e.b/255,r=(pn*a+gn*n-yn*t)/(pn+gn-yn),o=a-r,i=(ce*(t-r)-Ye*o)/xe,l=Math.sqrt(i*i+o*o)/(ce*r*(1-r)),u=l?Math.atan2(i,o)*Pn-120:NaN;return new Z(u<0?u+360:u,l,r,e.opacity)}function mr(e,n,t,a){return arguments.length===1?cr(e):new Z(e,n,t,a??1)}function Z(e,n,t,a){this.h=+e,this.s=+n,this.l=+t,this.opacity=+a}oe(Z,mr,me(V,{brighter:function(e){return e=e==null?re:Math.pow(re,e),new Z(this.h,this.s,this.l*e,this.opacity)},darker:function(e){return e=e==null?J:Math.pow(J,e),new Z(this.h,this.s,this.l*e,this.opacity)},rgb:function(){var e=isNaN(this.h)?0:(this.h+120)*Rn,n=+this.l,t=isNaN(this.s)?0:this.s*n*(1-n),a=Math.cos(e),r=Math.sin(e);return new k(255*(n+t*(_n*a+Ge*r)),255*(n+t*(Ye*a+xe*r)),255*(n+t*(ce*a)),this.opacity)}}));const Fn=En(h.ACCENT_MEASUREMENTS).brighter(.1);Fn.opacity=.5;const zn=Qt(),gr=Object.freeze({backgroundColor:en("background"),hoverBackgroundColor:en("hoverBackground"),textColor:zn,glowColor:pe(1),glowRadiusPx:5,preserveFillOnSelection:!0}),yr=Object.freeze({id:"accent-measurements",label:"Measurements · Accent",colorPrimaryReduced:Fn.toString(),colorPrimary:h.ACCENT_MEASUREMENTS,lineColor:b.colors.surface,textColor:zn}),L=Object.freeze({scheme:yr,fontFamily:ne.fontFamily,contentFontWeight:ne.lineLabelFontWeight,badgeFontWeight:ne.badgeFontWeight,selection:gr}),wi=e=>L,_i=Object.freeze({fontSize:ne.rootFontSizeRem,fontFamily:L.fontFamily,fontWeight:L.contentFontWeight,lineColor:L.scheme.lineColor,textBackgroundColor:L.scheme.colorPrimaryReduced,textColor:L.scheme.textColor,markerBackgroundColor:L.scheme.colorPrimary,markerTextColor:L.scheme.textColor,selectedBackgroundColor:L.selection.backgroundColor,selectedTextColor:L.selection.textColor,selectedGlowColor:L.selection.glowColor,selectedGlowRadiusPx:L.selection.glowRadiusPx,preserveFillOnSelection:L.selection.preserveFillOnSelection,hoverBackgroundColor:L.selection.hoverBackgroundColor,markerPixelSize:b.sizes.pointPixelSize,markerOutlineWidth:b.sizes.pointOutlineWidth});T.createContext(null);export{Ie as $,gr as A,Gt as B,Dt as C,jt as D,Vt as E,aa as F,ta as G,ra as H,Fa as I,za as J,Oi as K,Pt as L,Wr as M,Mi as N,mi as O,gi as P,hi as Q,qi as R,Ti as S,Ur as T,ui as U,Zt as V,vi as W,jr as X,Ei as Y,Li as Z,$e as _,_t as a,Pi as a0,Ri as a1,Gr as a2,Fr as a3,Ht as a4,ba as a5,va as a6,di as a7,ci as a8,Bi as a9,Sn as aa,la as ab,oa as ac,Vr as ad,L as ae,zr as af,Dr as ag,Hr as ah,Yr as ai,X as aj,_i as ak,$r as al,z as am,li as an,ai as ao,Jr as ap,ea as aq,Xt as ar,vn as as,En as at,Ve as au,Xa as av,Fe as b,Ta as c,zn as d,A as e,Ii as f,Se as g,Ia as h,B as i,bi as j,Si as k,ki as l,b as m,Ai as n,N as o,F as p,pi as q,wi as r,Ni as s,ne as t,fi as u,xi as v,yi as w,Ci as x,ie as y,Wt as z};
