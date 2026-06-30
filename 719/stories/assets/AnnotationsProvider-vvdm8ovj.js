import{j as f}from"./jsx-runtime-DCY474Ph.js";import{I as br,J as Sr,K as hr,F as Se,L as vr,M as Tr,N as Ir,O as Ar,P as kr,Q as Er,S as Lr,o as Rr,H as Pr,T as _r,U as Or,V as qr,W as wr,X as Mr,Y as Br}from"./lib-DSuZU_oB.js";import{r as k,a as Yn,R as Fr}from"./index-f9CH5uyH.js";import{T as Dr}from"./ua-parser-0-IaBt0J.js";import{f as tn,C as A,r as zr}from"./index-Bwr7gTdO.js";import"./index-o4jIgCFn.js";import{n as Hr,o as jr,S as $r,p as Wr,f as Ur,q as Ot,s as Vr,t as Gr,v as Xr,w as Yr,l as Kr}from"./useLineSegmentVisualizers--AoT_IR4.js";import{C,b as xn,a5 as Zr,p as Jr,q as Qr,e as Kn,d as ea,c as na}from"./custom-shaders-DwgXF10T.js";import"./useCesiumFovWheelZoom-BDPwALJ8.js";import"./maplibre-gl-Mry-7x4X.js";import"./geodetic-BlUMYLim.js";import"./svgProjection-DC0AVwLB.js";import{n as qt}from"./angle-normalization-D3Clryc1.js";import{c as Zn,P as ce,b as Pe}from"./angles-B5wuhJLI.js";import{i as ta}from"./carma-guards-BPWPLOnr.js";import{c as bn}from"./CoordinateAdapters-D03_MrRj.js";/* empty css                                      */import{S as ra}from"./Scene-Co_xuLXT.js";import{r as aa}from"./config-C62AzQAY.js";import"./useCesiumPointMoveGizmo-CbF7zFmG.js";const ia={prefix:"fac",iconName:"row-resize",icon:[512,512,[],"","M278.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-64 64c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8l32 0l0 96l-214.7 0l0 64l214.7 0l0 96l-32 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l64 64c12.5 12.5 32.8 12.5 45.3 0l64-64c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8l-32 0l0-96l214.7 0l0-64l-214.7 0l0-96l32 0c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-64-64z"]},rn={de:{backspace:"Rücktaste",escape:"Escape",shift:"Umschalt"},en:{backspace:"Backspace",escape:"Escape",shift:"Shift"}},oa=e=>e||(br||Sr?"macos":hr?"windows":"other"),sa=e=>{const n=e==null?void 0:e.split("-")[0];return n&&rn[n]?rn[n]:rn.en},la=(e,n)=>`⌫ ${n.backspace}`,$e={LABEL:"label",VISUALIZER:"visualizer"},ua=$e,Sn=e=>`[${e}="true"]`,Jn="data-annotation-label-overlay-root",Qn="data-annotation-visualizer-overlay-root",wt="data-annotation-visualizer-overlay-container",da=Sn(wt),ca=Object.freeze({[$e.LABEL]:{rootAttribute:Jn,containerAttribute:Hr,rootSelector:Sn(Jn),containerSelector:jr},[$e.VISUALIZER]:{rootAttribute:Qn,containerAttribute:wt,rootSelector:Sn(Qn),containerSelector:da}}),ma=e=>ca[e],ga=(e,n=$e.LABEL)=>{var i,s;const{rootSelector:t,containerSelector:r}=ma(n);let a=e.canvas.parentElement,o=a;for(;a;){if(a.matches(r))return a;const u=(i=a.querySelector)==null?void 0:i.call(a,r);if(u instanceof HTMLElement)return u;if(a.matches(t))return a;const l=(s=a.querySelector)==null?void 0:s.call(a,t);if(l instanceof HTMLElement)return l;o=a,a=a.parentElement}return o},ya=ga,_={FLY_TO:"flyTo",EXPORT:"export",VISIBILITY:"visibility",REFERENCE:"reference",LOCK:"lock",STYLE:"style",DELETE:"delete"},D=(()=>{const e="1rem",n="0.8571rem",t="1rem";return Object.freeze({rootFontSizeRem:e,supportFontSizeRem:n,headingFontSizeRem:t,headingFontWeight:600,headingTypographyClassName:`text-[${n}] font-semibold tracking-[0.03em]`,titleTypographyClassName:`text-[${t}] font-semibold leading-[1.25]`})})(),M=Object.freeze({borderRadiusRem:"0.2143rem",hairlineBorderWidthRem:"0.0357rem",panelInsetShadowYOffsetRem:"0.0714rem",panelInsetShadowBlurRem:"0.0714rem",panelBackdropBlurRem:"0.1429rem"}),h=Object.freeze({heading:A.ACCENT_MEASUREMENTS,panelSurface:A.NEUTRAL_SURFACE_SUBTLE,panelBorder:A.NEUTRAL_BORDER_SUBTLE,shadowBase:A.NEUTRAL_BLACK,bodyText:A.NEUTRAL_TEXT_PRIMARY,mutedText:A.NEUTRAL_TEXT_MUTED,linkText:A.WUPP_BLUE,fieldText:A.NEUTRAL_TEXT_STRONG,fieldBorder:A.NEUTRAL_BORDER_DEFAULT,fieldInputBorder:A.NEUTRAL_BORDER_INPUT,fieldFocusBackground:A.STATE_FOCUS_BACKGROUND_WARM,fieldFocusOutline:A.STATE_FOCUS_OUTLINE,titleText:A.NEUTRAL_TEXT_STRONG}),an=Object.freeze({panelSurface:.9,panelBorder:.9,panelInsetShadow:.02}),fa=Object.freeze({defaultPixelWidth:430,headingColor:h.heading,headerStyle:{},bodyPanelStyle:{backgroundColor:tn(h.panelSurface,an.panelSurface),border:`${M.hairlineBorderWidthRem} solid ${tn(h.panelBorder,an.panelBorder)}`,boxShadow:`${tn(h.shadowBase,an.panelInsetShadow)} 0 ${M.panelInsetShadowYOffsetRem} ${M.panelInsetShadowBlurRem} inset`,backdropFilter:`blur(${M.panelBackdropBlurRem})`,WebkitBackdropFilter:`blur(${M.panelBackdropBlurRem})`},resolveActionTooltipPopupContainer:e=>e.closest('[data-test-id="annotation-info-box"]')??e.ownerDocument.body,headerForegroundClassName:"text-white/80",headerTitleClassName:`truncate ${D.headingTypographyClassName}`,subtitleContainerClassName:"mb-0 w-full px-2 pt-[0.28em]",subtitleTextStyle:{color:A.ACCENT_NEUTRALS},subtitleTextClassName:`px-2 text-[${D.supportFontSizeRem}] leading-[1.1] font-semibold`,subtitleMetaTextStyle:{color:A.ACCENT_NEUTRALS},subtitleMetaTextClassName:`mt-[0.08em] whitespace-nowrap text-[${D.supportFontSizeRem}] leading-[1.1] font-semibold`,showSubtitleMetaText:!0,readOnly:!1,bodyContainerClassName:"px-2 pb-2 pt-1",bodyTextStyle:{fontSize:D.rootFontSizeRem,lineHeight:1.4,color:h.bodyText},bodyTextClassName:`text-[${D.rootFontSizeRem}] leading-[1.4] text-[${h.bodyText}]`,emptyContentLineStyle:{minHeight:"1.4em"},emptyContentLineClassName:"w-full",mutedTextClassName:`text-[${h.mutedText}]`,linkTextClassName:`text-[${h.linkText}]`,actionIconClassName:"transition-colors",actionIconColor:A.ACCENT_NEUTRALS,actionIconHoverColor:A.ACCENT_NEUTRALS_HOVER,actionIconFontSize:null,hiddenActionIds:[],fieldTextClassName:`text-[${h.fieldText}]`,fieldBorderClassName:`border-[${M.hairlineBorderWidthRem}] border-[${h.fieldBorder}]`,fieldInputBorderClassName:`border-[${M.hairlineBorderWidthRem}] border-[${h.fieldInputBorder}]`,fieldFocusBackgroundClassName:`focus:bg-[${h.fieldFocusBackground}]`,fieldFocusOutlineClassName:`focus:outline focus:outline-2 focus:outline-[${h.fieldFocusOutline}]`,subtleFieldBackgroundClassName:"bg-white/85",titleTextStyle:{fontSize:D.headingFontSizeRem,fontWeight:D.headingFontWeight,lineHeight:1.25},titleTextClassName:`text-[${h.titleText}]/80 ${D.titleTypographyClassName}`,titleInputClassName:`min-w-0 w-auto max-w-full appearance-none [field-sizing:content] break-words rounded-[${M.borderRadiusRem}] border border-transparent bg-transparent px-0 py-[0.05em] text-[${h.titleText}]/80 placeholder:text-[${h.titleText}]/50 focus:bg-[${h.fieldFocusBackground}] focus:outline focus:outline-2 focus:outline-[${h.fieldFocusOutline}] ${D.titleTypographyClassName}`,shortLabelInputClassName:`shrink-0 w-auto appearance-none [field-sizing:content] border-[${M.hairlineBorderWidthRem}] px-[0.5ex] py-0 text-center tabular-nums border-[${h.fieldBorder}] bg-white/85 text-[${h.titleText}]/80 placeholder:text-[${h.titleText}]/80 focus:bg-[${h.fieldFocusBackground}] focus:outline focus:outline-2 focus:outline-[${h.fieldFocusOutline}] ${D.titleTypographyClassName}`,navigationInstructionContainerClassName:"mt-1 flex w-full items-center justify-center px-2 pt-1",navigationAvailabilityContainerClassName:"mt-1 flex w-full items-center justify-center px-2 pt-1",navigationSummaryContainerClassName:"mb-1 mt-0 flex w-full items-center justify-between px-2",navigationLinkFontSize:D.supportFontSizeRem,inlineFieldButtonClassName:`inline-flex h-5 w-5 items-center justify-center rounded border-[${M.hairlineBorderWidthRem}] border-[${h.fieldInputBorder}]`,colorInputClassName:`h-6 w-8 cursor-pointer rounded border-[${M.hairlineBorderWidthRem}] border-[${h.fieldInputBorder}] bg-transparent p-0`,inlineActionButtonClassName:`inline-flex items-center gap-1 rounded border-[${M.hairlineBorderWidthRem}] border-[${h.fieldInputBorder}] px-2 py-1`}),Ie=e=>({...fa,...e}),b={POINT:"point",DISTANCE:"distance",POLYLINE:"polyline",AREA_GROUND:"area",AREA_PLANAR:"planar",AREA_VERTICAL:"vertical",LABEL:"label"},pa="select",vs="planar-biggest-triangle",Ts="planar-pca",Is="planar-trapezoid",Mt=e=>e===b.AREA_GROUND||e===b.AREA_VERTICAL||e===b.AREA_PLANAR,Ca=e=>{if(!Number.isFinite(e)||e<0)return"A";let n=Math.floor(e),t="";do t=String.fromCharCode(65+n%26)+t,n=Math.floor(n/26)-1;while(n>=0);return t},hn=Object.freeze({fillAlpha:.25,selectedFillAlpha:.35,rgb255ByType:{[b.AREA_VERTICAL]:[112,168,255],[b.AREA_GROUND]:[107,188,123],[b.AREA_PLANAR]:[239,223,145]}}),Bt=([e,n,t],r)=>`rgba(${e}, ${n}, ${t}, ${r})`,qn=e=>hn.rgb255ByType[e],As=(e,n)=>Bt(qn(e),n?hn.selectedFillAlpha:hn.fillAlpha),Na=(e,n)=>Bt(qn(e),n),P={DIRECT:"direct",VERTICAL:"vertical",HORIZONTAL:"horizontal"},K=Object.freeze({textRgb255:{dark:[17,24,39],light:[255,255,255]},labelTextRgb255:[248,250,252],shortLabelRgb255ByType:{[b.POINT]:[200,200,200],[b.DISTANCE]:[102,126,234],[b.POLYLINE]:[226,178,60],[b.LABEL]:[88,152,255]},surfaceRgb255:{stroke:[255,255,255],accent:[246,248,255]},lineComponentRgb255ByKind:{[P.DIRECT]:[255,255,255],[P.VERTICAL]:[111,168,255],[P.HORIZONTAL]:[188,194,102]},selectionRgb255:{background:[15,23,42],hoverBackground:[30,41,59],glow:[255,255,255]}}),ne=Object.freeze({alpha:{text:{dark:.9,light:1},shortLabelBackgroundByType:{[b.POINT]:.92,[b.DISTANCE]:.95,[b.POLYLINE]:.95,[b.LABEL]:.95,area:.95},lineComponentByKind:{[P.DIRECT]:1,[P.VERTICAL]:.96,[P.HORIZONTAL]:.95},lineComponentLabelAccentByKind:{[P.DIRECT]:.34,[P.VERTICAL]:.54,[P.HORIZONTAL]:.5},selection:{background:.92,hoverBackground:.9,glow:1},surfaceStroke:.95}}),te=([e,n,t],r)=>`rgba(${e}, ${n}, ${t}, ${r})`,ae=(e,n=ne.alpha.text[e])=>te(K.textRgb255[e],n),He=(e=ne.alpha.surfaceStroke)=>te(K.surfaceRgb255.stroke,e),xa=(e=ne.alpha.surfaceStroke)=>te(K.surfaceRgb255.accent,e),on=(e,n=ne.alpha.lineComponentByKind[e])=>te(K.lineComponentRgb255ByKind[e],n),sn=(e,n=ne.alpha.lineComponentLabelAccentByKind[e])=>te(K.lineComponentRgb255ByKind[e],n),ie=e=>Mt(e)?Na(e,ne.alpha.shortLabelBackgroundByType.area):te(K.shortLabelRgb255ByType[e],ne.alpha.shortLabelBackgroundByType[e]),ks=e=>Mt(e)?qn(e):K.shortLabelRgb255ByType[e],et=(e,n=ne.alpha.selection[e])=>te(K.selectionRgb255[e],n),ba=(e=1)=>te(K.labelTextRgb255,e),se=Object.freeze({fontFamily:'"Helvetica Neue", Arial, Helvetica, sans-serif',fontWeight:{regular:400,medium:500,semibold:600},fontSizePx:{supportText:12,pointLabel:14,measurementLabel:16,compactBadge:10,distancePairLabel:11}}),J={NUMERIC:"numeric",ALPHABETIC:"alphabetic"},Sa={[b.POINT]:{prefix:"",counterStyle:J.NUMERIC,backgroundColor:ie(b.POINT),textColor:ae("dark")},[b.DISTANCE]:{prefix:"",counterStyle:J.ALPHABETIC,backgroundColor:ie(b.DISTANCE),textColor:ae("light")},[b.POLYLINE]:{prefix:"L",counterStyle:J.NUMERIC,backgroundColor:ie(b.POLYLINE),textColor:ae("dark")},[b.AREA_GROUND]:{prefix:"A",counterStyle:J.NUMERIC,backgroundColor:ie(b.AREA_GROUND),textColor:ae("light")},[b.AREA_PLANAR]:{prefix:"D",counterStyle:J.NUMERIC,backgroundColor:ie(b.AREA_PLANAR),textColor:ae("light")},[b.AREA_VERTICAL]:{prefix:"F",counterStyle:J.NUMERIC,backgroundColor:ie(b.AREA_VERTICAL),textColor:ae("light")},[b.LABEL]:{prefix:"T",counterStyle:J.NUMERIC,backgroundColor:ie(b.LABEL),textColor:ae("light")}},Es=(e,n,t=Sa)=>{const r=t[e],a=Number.isFinite(n)&&n>0?Math.floor(n):1,o=r.counterStyle===J.ALPHABETIC?Ca(a-1):`${a}`;return`${r.prefix}${o}`},wn=1e-12,ha=1e-6,Ls=(e,n)=>e.map(t=>C.add(t,n,new C)),va=(e,n,t=new C)=>{const r=C.magnitudeSquared(n);if(r<=wn)return C.clone(e,t);const a=C.dot(e,n)/r;return C.subtract(e,C.multiplyByScalar(n,a,new C),t)},Ta=(e,n,t,r=new C)=>{const a=C.magnitudeSquared(t);if(a<=wn)return C.clone(e,r);const o=C.subtract(e,n,new C),i=C.dot(o,t)/a;return C.subtract(e,C.multiplyByScalar(t,i,new C),r)},Rs=(e,n,t)=>{const r=C.magnitude(t);if(r<=ha)return 0;const a=C.subtract(e,n,new C);return C.dot(a,t)/r},Ia=(e,n,t,r=new C)=>{const a=C.subtract(n,e,new C),o=C.subtract(t,e,new C),i=C.cross(a,o,r);return C.magnitudeSquared(i)<=wn?null:C.normalize(i,r)},Aa=0,ka=e=>e??Aa,Ea=e=>({longitude:Zn(e.longitude),latitude:Zn(e.latitude),altitude:e.height}),La=e=>{const n=xn.fromCartesian(e);return Ea(n)},nt=Object.freeze({componentEpsilonMeters:.05}),Ra=(e,n,t)=>{const r=Ia(e,n,t);return r?{anchorECEF:C.clone(e),normalECEF:r}:null},tt=(e,n)=>Ta(e,n.anchorECEF,n.normalECEF),Ft=(e,n)=>{const t=Zr(e),r=C.subtract(n,e,new C),a=C.dot(r,t),o=C.multiplyByScalar(t,a,new C),i=va(r,t),s=C.magnitude(i),u=Math.abs(a);if(s<nt.componentEpsilonMeters||u<nt.componentEpsilonMeters)return null;const l=C.add(e,i,new C),d=C.add(e,o,new C),m=C.add(e,t,new C),c=Ra(e,m,l);return{adjacentHorizontalCorner:c?tt(l,c):l,adjacentVerticalCorner:c?tt(d,c):d}},Ps=(e,n)=>{const t=Ft(e,n);if(!t)return 0;const r=C.distance(e,t.adjacentHorizontalCorner),a=C.distance(e,t.adjacentVerticalCorner);return r*a},rt=Object.freeze({tooltipZIndex:1700,triggerClassName:"inline-flex items-center text-[16px] leading-none"}),Q=({actionId:e,title:n,icon:t,onClick:r,dataTestId:a,className:o,ariaLabel:i,disabled:s=!1,visualOptions:u})=>{var g;const l=Ie(u),[d,m]=k.useState(!1),c=`${l.actionIconClassName}${o?` ${o}`:""}${s?" cursor-not-allowed opacity-50":" cursor-pointer"}`,p={color:d&&!s?l.actionIconHoverColor:l.actionIconColor};l.actionIconFontSize!==null&&(p.fontSize=l.actionIconFontSize);const y=(g=l.renderActionIcon)==null?void 0:g.call(l,{actionId:e,icon:t,className:c,style:p,dataTestId:a,ariaLabel:i,disabled:s});return f.jsx(Dr,{title:n,zIndex:rt.tooltipZIndex,getPopupContainer:S=>{const v=S instanceof HTMLElement?S:document.body;return l.resolveActionTooltipPopupContainer(v)},children:f.jsx("span",{onClick:S=>{if(s){S.stopPropagation();return}r(S)},onMouseEnter:()=>m(!0),onMouseLeave:()=>m(!1),className:rt.triggerClassName,"aria-label":i,"aria-disabled":s,children:y??f.jsx(Se,{className:c,style:p,icon:t,"data-test-id":a,"aria-hidden":i?void 0:!0})})})};Q.__docgenInfo={description:"",methods:[],displayName:"AnnotationInfoBoxActionIcon",props:{actionId:{required:!0,tsType:{name:"unknown[union]",raw:"(typeof ANNOTATION_INFO_BOX_ACTION_IDS)[keyof typeof ANNOTATION_INFO_BOX_ACTION_IDS]"},description:""},title:{required:!0,tsType:{name:"string"},description:""},icon:{required:!0,tsType:{name:"IconDefinition"},description:""},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: ReactMouseEvent<HTMLElement, MouseEvent>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",elements:[{name:"HTMLElement"},{name:"MouseEvent"}],raw:"ReactMouseEvent<HTMLElement, MouseEvent>"},name:"event"}],return:{name:"void"}}},description:""},dataTestId:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},visualOptions:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  defaultPixelWidth: number;
  headingColor: string;
  headerStyle: CSSProperties;
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
  readOnly: boolean;
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
  actionIconFontSize: string | null;
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
}`,signature:{properties:[{key:"defaultPixelWidth",value:{name:"number",required:!0}},{key:"headingColor",value:{name:"string",required:!0}},{key:"headerStyle",value:{name:"CSSProperties",required:!0}},{key:"bodyPanelStyle",value:{name:"CSSProperties",required:!0}},{key:"resolveActionTooltipPopupContainer",value:{name:"signature",type:"function",raw:"(triggerNode: HTMLElement) => HTMLElement",signature:{arguments:[{type:{name:"HTMLElement"},name:"triggerNode"}],return:{name:"HTMLElement"}},required:!0}},{key:"headerForegroundClassName",value:{name:"string",required:!0}},{key:"headerTitleClassName",value:{name:"string",required:!0}},{key:"subtitleContainerClassName",value:{name:"string",required:!0}},{key:"subtitleTextStyle",value:{name:"CSSProperties",required:!0}},{key:"subtitleTextClassName",value:{name:"string",required:!0}},{key:"subtitleMetaTextStyle",value:{name:"CSSProperties",required:!0}},{key:"subtitleMetaTextClassName",value:{name:"string",required:!0}},{key:"showSubtitleMetaText",value:{name:"boolean",required:!0}},{key:"readOnly",value:{name:"boolean",required:!0}},{key:"bodyContainerClassName",value:{name:"string",required:!0}},{key:"bodyTextStyle",value:{name:"CSSProperties",required:!0}},{key:"bodyTextClassName",value:{name:"string",required:!0}},{key:"emptyContentLineStyle",value:{name:"CSSProperties",required:!0}},{key:"emptyContentLineClassName",value:{name:"string",required:!0}},{key:"mutedTextClassName",value:{name:"string",required:!0}},{key:"linkTextClassName",value:{name:"string",required:!0}},{key:"actionIconClassName",value:{name:"string",required:!0}},{key:"actionIconColor",value:{name:"string",required:!0}},{key:"actionIconHoverColor",value:{name:"string",required:!0}},{key:"actionIconFontSize",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"hiddenActionIds",value:{name:"unknown",required:!0}},{key:"renderActionIcon",value:{name:"signature",type:"function",raw:`(
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
  headerStyle: CSSProperties;
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
  readOnly: boolean;
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
  actionIconFontSize: string | null;
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
}>`},description:""}}};const Pa=Object.freeze({flyTo:"Zur Messung fliegen",exportGeoJson:"Als GeoJSON exportieren",show:"Einblenden",hide:"Ausblenden",setReference:"Als Referenzhöhe setzen",lock:"Sperren",unlock:"Entsperren",editStyle:"Darstellung bearbeiten",delete:"Löschen",deleteLocked:"Gesperrte Messung kann nicht gelöscht werden"}),_a=({hidden:e=!1,locked:n=!1,labels:t,onFlyTo:r,onExport:a,onToggleVisibility:o,onToggleLock:i,onEditStyle:s,onDelete:u,onSetReference:l,visualOptions:d,dataTestIdPrefix:m,dataTestIds:c})=>{const p={...Pa,...t},y=new Set((d==null?void 0:d.hiddenActionIds)??[]),g=S=>!y.has(S);return f.jsxs("div",{className:"flex items-center gap-2",children:[g(_.FLY_TO)?f.jsx(Q,{actionId:_.FLY_TO,title:p.flyTo,icon:vr,onClick:r,dataTestId:(c==null?void 0:c.flyTo)??`${m}-flyto-btn`,visualOptions:d}):null,g(_.EXPORT)?f.jsx(Q,{actionId:_.EXPORT,title:p.exportGeoJson,icon:Tr,onClick:a,dataTestId:(c==null?void 0:c.export)??`${m}-export-geojson-btn`,visualOptions:d}):null,g(_.VISIBILITY)?f.jsx(Q,{actionId:_.VISIBILITY,title:e?p.show:p.hide,icon:e?Ir:Ar,onClick:o,dataTestId:(c==null?void 0:c.visibility)??`${m}-toggle-visibility-btn`,visualOptions:d}):null,l&&g(_.REFERENCE)?f.jsx(Q,{actionId:_.REFERENCE,title:p.setReference,icon:kr,onClick:l,dataTestId:(c==null?void 0:c.reference)??`${m}-set-reference-btn`,visualOptions:d}):null,g(_.LOCK)?f.jsx(Q,{actionId:_.LOCK,title:n?p.unlock:p.lock,icon:n?Er:Lr,onClick:i,dataTestId:(c==null?void 0:c.lock)??`${m}-toggle-lock-btn`,visualOptions:d}):null,s&&g(_.STYLE)?f.jsx(Q,{actionId:_.STYLE,title:p.editStyle,icon:Rr,onClick:s,visualOptions:d}):null,g(_.DELETE)?f.jsx(Q,{actionId:_.DELETE,title:n?p.deleteLocked:p.delete,icon:Pr,onClick:u,dataTestId:(c==null?void 0:c.delete)??`${m}-delete-btn`,disabled:n,visualOptions:d}):null]})};_a.__docgenInfo={description:"",methods:[],displayName:"AnnotationInfoBoxActions",props:{hidden:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},locked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},labels:{required:!1,tsType:{name:"Partial",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  flyTo: string;
  exportGeoJson: string;
  show: string;
  hide: string;
  setReference: string;
  lock: string;
  unlock: string;
  editStyle: string;
  delete: string;
  deleteLocked: string;
}`,signature:{properties:[{key:"flyTo",value:{name:"string",required:!0}},{key:"exportGeoJson",value:{name:"string",required:!0}},{key:"show",value:{name:"string",required:!0}},{key:"hide",value:{name:"string",required:!0}},{key:"setReference",value:{name:"string",required:!0}},{key:"lock",value:{name:"string",required:!0}},{key:"unlock",value:{name:"string",required:!0}},{key:"editStyle",value:{name:"string",required:!0}},{key:"delete",value:{name:"string",required:!0}},{key:"deleteLocked",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  flyTo: string;
  exportGeoJson: string;
  show: string;
  hide: string;
  setReference: string;
  lock: string;
  unlock: string;
  editStyle: string;
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
) => void`,signature:{arguments:[{type:{name:"ReactMouseEvent",elements:[{name:"HTMLElement"},{name:"MouseEvent"}],raw:"ReactMouseEvent<HTMLElement, MouseEvent>"},name:"event"}],return:{name:"void"}}},description:""},onEditStyle:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  event: ReactMouseEvent<HTMLElement, MouseEvent>
) => void`,signature:{arguments:[{type:{name:"ReactMouseEvent",elements:[{name:"HTMLElement"},{name:"MouseEvent"}],raw:"ReactMouseEvent<HTMLElement, MouseEvent>"},name:"event"}],return:{name:"void"}}},description:""},onDelete:{required:!0,tsType:{name:"signature",type:"function",raw:`(
  event: ReactMouseEvent<HTMLElement, MouseEvent>
) => void`,signature:{arguments:[{type:{name:"ReactMouseEvent",elements:[{name:"HTMLElement"},{name:"MouseEvent"}],raw:"ReactMouseEvent<HTMLElement, MouseEvent>"},name:"event"}],return:{name:"void"}}},description:""},onSetReference:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  event: ReactMouseEvent<HTMLElement, MouseEvent>
) => void`,signature:{arguments:[{type:{name:"ReactMouseEvent",elements:[{name:"HTMLElement"},{name:"MouseEvent"}],raw:"ReactMouseEvent<HTMLElement, MouseEvent>"},name:"event"}],return:{name:"void"}}},description:""},visualOptions:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  defaultPixelWidth: number;
  headingColor: string;
  headerStyle: CSSProperties;
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
  readOnly: boolean;
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
  actionIconFontSize: string | null;
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
}`,signature:{properties:[{key:"defaultPixelWidth",value:{name:"number",required:!0}},{key:"headingColor",value:{name:"string",required:!0}},{key:"headerStyle",value:{name:"CSSProperties",required:!0}},{key:"bodyPanelStyle",value:{name:"CSSProperties",required:!0}},{key:"resolveActionTooltipPopupContainer",value:{name:"signature",type:"function",raw:"(triggerNode: HTMLElement) => HTMLElement",signature:{arguments:[{type:{name:"HTMLElement"},name:"triggerNode"}],return:{name:"HTMLElement"}},required:!0}},{key:"headerForegroundClassName",value:{name:"string",required:!0}},{key:"headerTitleClassName",value:{name:"string",required:!0}},{key:"subtitleContainerClassName",value:{name:"string",required:!0}},{key:"subtitleTextStyle",value:{name:"CSSProperties",required:!0}},{key:"subtitleTextClassName",value:{name:"string",required:!0}},{key:"subtitleMetaTextStyle",value:{name:"CSSProperties",required:!0}},{key:"subtitleMetaTextClassName",value:{name:"string",required:!0}},{key:"showSubtitleMetaText",value:{name:"boolean",required:!0}},{key:"readOnly",value:{name:"boolean",required:!0}},{key:"bodyContainerClassName",value:{name:"string",required:!0}},{key:"bodyTextStyle",value:{name:"CSSProperties",required:!0}},{key:"bodyTextClassName",value:{name:"string",required:!0}},{key:"emptyContentLineStyle",value:{name:"CSSProperties",required:!0}},{key:"emptyContentLineClassName",value:{name:"string",required:!0}},{key:"mutedTextClassName",value:{name:"string",required:!0}},{key:"linkTextClassName",value:{name:"string",required:!0}},{key:"actionIconClassName",value:{name:"string",required:!0}},{key:"actionIconColor",value:{name:"string",required:!0}},{key:"actionIconHoverColor",value:{name:"string",required:!0}},{key:"actionIconFontSize",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"hiddenActionIds",value:{name:"unknown",required:!0}},{key:"renderActionIcon",value:{name:"signature",type:"function",raw:`(
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
  headerStyle: CSSProperties;
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
  readOnly: boolean;
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
  actionIconFontSize: string | null;
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
}>`},description:""}}};const Ne={TEXT:"text",ACTION:"action",ALERT:"alert"},Z={CLICK:"click",DOUBLE_CLICK:"double-click",ENTER:"enter",BACKSPACE:"backspace",ESCAPE:"escape",SHIFT:"shift",DISC_CENTER:"disc-center",DISC_OUTER:"disc-outer"},_e={INFO:"info",WARNING:"warning"},de={INFO:"info",WARNING:"warning"},j={STANDARD:"standard",COMPACT:"compact"},Oa="#00d9ff",qa="rgba(0, 217, 255, 0.2)",wa="#004b5c",Ma="#ef4444",Ba="rgba(239, 68, 68, 0.18)",Fa="#7f1d1d",Da=()=>typeof navigator>"u"?void 0:navigator.language,ln={de:{alternative:"oder",click:"Klick",doubleClick:"2x Klick"},en:{alternative:"or",click:"Click",doubleClick:"Double click"}},za=e=>{const n=e==null?void 0:e.split("-")[0];return n&&ln[n]?ln[n]:ln.en},Dt={margin:"0 0 0.9rem"},We="1em",zt="max-content minmax(0, 1fr)",Ha={display:"grid",gridTemplateColumns:zt,columnGap:We,rowGap:"0.58rem",alignItems:"start"},ja={...Dt,gridColumn:"1 / -1"},Ht={[j.STANDARD]:{display:"grid",gridTemplateColumns:zt,columnGap:We,alignItems:"baseline",margin:"0 0 0.58rem",lineHeight:1.28},[j.COMPACT]:{display:"contents"}},Mn={display:"inline-flex",alignItems:"center",justifyContent:"flex-end",gap:"0.22rem",whiteSpace:"nowrap"},vn={display:"flex",flexDirection:"column",alignItems:"flex-end",gap:"0.2rem",whiteSpace:"nowrap"},$a={lineHeight:1},Tn={[de.INFO]:{margin:"-0.2rem 0 0.8rem",padding:"0.48rem 0.56rem",borderRadius:4,background:qa,color:wa},[de.WARNING]:{margin:"-0.2rem 0 0.8rem",padding:"0.48rem 0.56rem",borderRadius:4,background:Ba,color:Fa}},Wa={[de.INFO]:{...Tn[de.INFO],display:"grid",gridColumn:"1 / -1",gridTemplateColumns:"subgrid",columnGap:We,rowGap:"0.58rem",margin:"-0.2rem 0 0.8rem",padding:"0.48rem 0"},[de.WARNING]:{...Tn[de.WARNING],display:"grid",gridColumn:"1 / -1",gridTemplateColumns:"subgrid",columnGap:We,rowGap:"0.58rem",margin:"-0.2rem 0 0.8rem",padding:"0.48rem 0"}},Ua={minWidth:0,fontWeight:600,lineHeight:1.28},Va={[j.STANDARD]:{minWidth:0,whiteSpace:"nowrap"},[j.COMPACT]:{minWidth:0,lineHeight:1.28}},Ga=e=>e===j.COMPACT?e:j.STANDARD,Xa=e=>typeof e=="string"||e.kind===Ne.TEXT,at=e=>typeof e!="string"&&e.kind===Ne.ALERT,Ya=e=>{const n=e.findIndex(Xa);if(n<=0)return e;const t=e.slice(0,n),r=t.filter(at);return r.length===0?e:[...t.filter(a=>!at(a)),e[n],...r,...e.slice(n+1)]},jt={display:"inline-flex",minWidth:"1.85rem",minHeight:"1.35rem",alignItems:"center",justifyContent:"center",border:"1px solid rgba(0, 0, 0, 0.34)",borderRadius:"0.28rem",background:"rgba(255, 255, 255, 0.68)",boxShadow:"inset 0 -1px 0 rgba(0, 0, 0, 0.2)",color:"#1f2937",fontSize:"0.74em",fontWeight:700,lineHeight:1,padding:"0.16rem 0.32rem"},Ka={...jt,gap:"0.22rem"},Za={display:"inline-flex",minWidth:"1.35rem",minHeight:"1.35rem",alignItems:"center",justifyContent:"center",lineHeight:1},Ja={[_e.INFO]:{color:Oa},[_e.WARNING]:{color:Ma}},Fe=(e,n)=>{const t=typeof e=="string"?e:e.text;return f.jsx("p",{style:n===j.COMPACT?ja:Dt,children:t},t)},je=e=>f.jsx("span",{style:jt,children:e}),it=e=>f.jsxs("span",{style:Ka,children:[f.jsx(Se,{icon:qr}),f.jsx("span",{children:e})]}),Qa={display:"inline-flex",alignItems:"center",justifyContent:"center",minWidth:"1.35rem",minHeight:"1.35rem",fontSize:"16px",lineHeight:1,color:A.ACCENT_NEUTRALS},ot=e=>f.jsx("span",{style:Qa,children:f.jsx(Se,{icon:e})}),In=e=>f.jsx("span",{style:Za,children:f.jsx(Se,{style:Ja[e],icon:e===_e.WARNING?_r:Or})}),ei=e=>In(e===de.WARNING?_e.WARNING:_e.INFO),ni=(e,n)=>je(la(e,n)),ti=(e,n,t,r)=>{switch(e){case Z.CLICK:return it(r.click);case Z.DOUBLE_CLICK:return it(r.doubleClick);case Z.ENTER:return je("Enter");case Z.BACKSPACE:return ni(t,n);case Z.ESCAPE:return je(n.escape);case Z.SHIFT:return je(n.shift);case Z.DISC_CENTER:return ot(ia);case Z.DISC_OUTER:return ot(wr)}},st=(e,n,t,r)=>f.jsx("span",{style:Mn,children:e.map((a,o)=>f.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"0.22rem"},children:[o>0?f.jsx("span",{children:"+"}):null,ti(a,n,t,r)]},`${a}-${o}`))}),ri=(e,n,t,r,a,o)=>o===j.COMPACT?f.jsxs("span",{style:vn,children:[e?In(e):null,n.map((i,s)=>f.jsxs("span",{style:vn,children:[s>0?f.jsx("span",{style:$a,children:a.alternative}):null,st(i,t,r,a)]},`${i.join("+")}-${s}`))]}):f.jsxs("span",{style:Mn,children:[e?In(e):null,n.map((i,s)=>f.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"0.22rem"},children:[s>0?f.jsx("span",{children:a.alternative}):null,st(i,t,r,a)]},`${i.join("+")}-${s}`))]}),An=(e,n,t,r,a,o)=>f.jsxs("div",{"data-testid":"annotation-help-action",style:Ht[o],children:[ri(e.indicator,e.inputAlternatives,t,r,a,o),f.jsx("span",{style:Va[o],children:e.description})]},`${e.inputAlternatives.map(i=>i.join("+")).join("-")}-${n}`),lt=(e,n,t,r,a,o)=>{const i=e.actions??[],s=o===j.COMPACT?Wa[e.severity]:Tn[e.severity];return f.jsxs("div",{"data-testid":"annotation-help-alert","data-severity":e.severity,style:s,children:[f.jsxs("div",{style:Ht[o],children:[f.jsx("span",{style:o===j.COMPACT?vn:Mn,children:ei(e.severity)}),f.jsx("span",{style:Ua,children:e.text})]}),i.map((u,l)=>An(u,l,t,r,a,o))]},`${e.severity}-${e.text}-${n}`)},ai=({items:e,layout:n,locale:t,platform:r})=>{const a=Ga(n),o=t??Da(),i=sa(o),s=oa(r),u=za(o),l=Ya(e);if(a===j.COMPACT){const m=l.map((c,p)=>typeof c=="string"||c.kind===Ne.TEXT?Fe(c,a):c.kind===Ne.ALERT?lt(c,p,i,s,u,a):An(c,p,i,s,u,a));return f.jsx("div",{"data-testid":"annotation-help-content",style:Ha,children:m})}const d=l.map((m,c)=>typeof m=="string"||m.kind===Ne.TEXT?Fe(m,a):m.kind===Ne.ALERT?lt(m,c,i,s,u,a):An(m,c,i,s,u,a));return f.jsx(f.Fragment,{children:d})};ai.__docgenInfo={description:"",methods:[],displayName:"AnnotationInfoBoxHelpContent",props:{items:{required:!0,tsType:{name:"unknown"},description:""},layout:{required:!1,tsType:{name:"unknown[union]",raw:"(typeof ANNOTATION_INFO_BOX_HELP_LAYOUTS)[keyof typeof ANNOTATION_INFO_BOX_HELP_LAYOUTS]"},description:""},locale:{required:!1,tsType:{name:"string"},description:""},platform:{required:!1,tsType:{name:"KeyboardDisplayPlatform"},description:""}}};const ii=({items:e,className:n,visualOptions:t})=>{const r=Ie(t),a=r.subtitleTextClassName.split(/\s+/).filter(o=>o.length>0&&!o.startsWith("px-")).join(" ");return f.jsx("dl",{className:`m-0 flex flex-wrap items-start tabular-nums${n?` ${n}`:""}`,style:{columnGap:"1.35rem",rowGap:"0.5rem"},children:e.map((o,i)=>f.jsxs("div",{className:"grid max-w-full min-w-[5rem] flex-[0_1_auto] grid-rows-[auto,auto] content-start items-start gap-y-[0.1em] text-left",children:[f.jsx("dt",{className:a,style:r.subtitleTextStyle,children:o.label}),f.jsx("dd",{className:"m-0 leading-[1.25]",children:o.value})]},o.id??i))})};ii.__docgenInfo={description:"",methods:[],displayName:"AnnotationInfoBoxMetricGrid",props:{items:{required:!0,tsType:{name:"unknown"},description:""},className:{required:!1,tsType:{name:"string"},description:""},visualOptions:{required:!1,tsType:{name:"Partial",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  defaultPixelWidth: number;
  headingColor: string;
  headerStyle: CSSProperties;
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
  readOnly: boolean;
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
  actionIconFontSize: string | null;
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
}`,signature:{properties:[{key:"defaultPixelWidth",value:{name:"number",required:!0}},{key:"headingColor",value:{name:"string",required:!0}},{key:"headerStyle",value:{name:"CSSProperties",required:!0}},{key:"bodyPanelStyle",value:{name:"CSSProperties",required:!0}},{key:"resolveActionTooltipPopupContainer",value:{name:"signature",type:"function",raw:"(triggerNode: HTMLElement) => HTMLElement",signature:{arguments:[{type:{name:"HTMLElement"},name:"triggerNode"}],return:{name:"HTMLElement"}},required:!0}},{key:"headerForegroundClassName",value:{name:"string",required:!0}},{key:"headerTitleClassName",value:{name:"string",required:!0}},{key:"subtitleContainerClassName",value:{name:"string",required:!0}},{key:"subtitleTextStyle",value:{name:"CSSProperties",required:!0}},{key:"subtitleTextClassName",value:{name:"string",required:!0}},{key:"subtitleMetaTextStyle",value:{name:"CSSProperties",required:!0}},{key:"subtitleMetaTextClassName",value:{name:"string",required:!0}},{key:"showSubtitleMetaText",value:{name:"boolean",required:!0}},{key:"readOnly",value:{name:"boolean",required:!0}},{key:"bodyContainerClassName",value:{name:"string",required:!0}},{key:"bodyTextStyle",value:{name:"CSSProperties",required:!0}},{key:"bodyTextClassName",value:{name:"string",required:!0}},{key:"emptyContentLineStyle",value:{name:"CSSProperties",required:!0}},{key:"emptyContentLineClassName",value:{name:"string",required:!0}},{key:"mutedTextClassName",value:{name:"string",required:!0}},{key:"linkTextClassName",value:{name:"string",required:!0}},{key:"actionIconClassName",value:{name:"string",required:!0}},{key:"actionIconColor",value:{name:"string",required:!0}},{key:"actionIconHoverColor",value:{name:"string",required:!0}},{key:"actionIconFontSize",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"hiddenActionIds",value:{name:"unknown",required:!0}},{key:"renderActionIcon",value:{name:"signature",type:"function",raw:`(
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
  headerStyle: CSSProperties;
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
  readOnly: boolean;
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
  actionIconFontSize: string | null;
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
}>`}],raw:"Partial<AnnotationInfoBoxVisualOptions>"},description:""}}};const oi=({children:e,className:n,style:t,visualOptions:r})=>{const a=Ie(r);return f.jsx("div",{className:`${a.subtitleMetaTextClassName}${n?` ${n}`:""}`,style:{...a.subtitleMetaTextStyle,...t},children:e})};oi.__docgenInfo={description:"",methods:[],displayName:"AnnotationInfoBoxMetaText",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""},visualOptions:{required:!1,tsType:{name:"Partial",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  defaultPixelWidth: number;
  headingColor: string;
  headerStyle: CSSProperties;
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
  readOnly: boolean;
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
  actionIconFontSize: string | null;
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
}`,signature:{properties:[{key:"defaultPixelWidth",value:{name:"number",required:!0}},{key:"headingColor",value:{name:"string",required:!0}},{key:"headerStyle",value:{name:"CSSProperties",required:!0}},{key:"bodyPanelStyle",value:{name:"CSSProperties",required:!0}},{key:"resolveActionTooltipPopupContainer",value:{name:"signature",type:"function",raw:"(triggerNode: HTMLElement) => HTMLElement",signature:{arguments:[{type:{name:"HTMLElement"},name:"triggerNode"}],return:{name:"HTMLElement"}},required:!0}},{key:"headerForegroundClassName",value:{name:"string",required:!0}},{key:"headerTitleClassName",value:{name:"string",required:!0}},{key:"subtitleContainerClassName",value:{name:"string",required:!0}},{key:"subtitleTextStyle",value:{name:"CSSProperties",required:!0}},{key:"subtitleTextClassName",value:{name:"string",required:!0}},{key:"subtitleMetaTextStyle",value:{name:"CSSProperties",required:!0}},{key:"subtitleMetaTextClassName",value:{name:"string",required:!0}},{key:"showSubtitleMetaText",value:{name:"boolean",required:!0}},{key:"readOnly",value:{name:"boolean",required:!0}},{key:"bodyContainerClassName",value:{name:"string",required:!0}},{key:"bodyTextStyle",value:{name:"CSSProperties",required:!0}},{key:"bodyTextClassName",value:{name:"string",required:!0}},{key:"emptyContentLineStyle",value:{name:"CSSProperties",required:!0}},{key:"emptyContentLineClassName",value:{name:"string",required:!0}},{key:"mutedTextClassName",value:{name:"string",required:!0}},{key:"linkTextClassName",value:{name:"string",required:!0}},{key:"actionIconClassName",value:{name:"string",required:!0}},{key:"actionIconColor",value:{name:"string",required:!0}},{key:"actionIconHoverColor",value:{name:"string",required:!0}},{key:"actionIconFontSize",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"hiddenActionIds",value:{name:"unknown",required:!0}},{key:"renderActionIcon",value:{name:"signature",type:"function",raw:`(
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
  headerStyle: CSSProperties;
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
  readOnly: boolean;
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
  actionIconFontSize: string | null;
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
}>`}],raw:"Partial<AnnotationInfoBoxVisualOptions>"},description:""}}};const si=Object.freeze({entrySingular:"Messung",entryPlural:"Messungen",availableSuffix:"verfügbar",previousAriaLabel:"Vorherige Messung",nextAriaLabel:"Nächste Messung",counterSeparator:"von"}),ut=(e,n)=>`${e} ${e===1?n.entrySingular:n.entryPlural} ${n.availableSuffix}`.trim(),li=({totalEntries:e,currentIndex:n,instructionText:t,availabilityLabel:r,labels:a,onFlyToAll:o,onPrevious:i,onNext:s,visualOptions:u})=>{var y,g;const l=Ie(u),d={...si,...a};if(e<=0&&!t)return null;const m={fontSize:l.navigationLinkFontSize,border:"none",background:"transparent",padding:0,userSelect:"none"},c=((y=l.navigationControlLabels)==null?void 0:y.previous)??f.jsx(Se,{icon:Mr}),p=((g=l.navigationControlLabels)==null?void 0:g.next)??f.jsx(Se,{icon:Br});return f.jsxs(f.Fragment,{children:[t?f.jsx("div",{className:`${l.navigationInstructionContainerClassName} ${l.mutedTextClassName}`,children:f.jsx("span",{children:t})}):null,e>0?f.jsx("div",{className:l.navigationAvailabilityContainerClassName,children:o?f.jsx("button",{type:"button",className:`${l.linkTextClassName} cursor-pointer`,onClick:o,style:{border:"none",background:"transparent",padding:0},children:r??ut(e,d)}):f.jsx("span",{className:l.linkTextClassName,children:r??ut(e,d)})}):null,e>0?f.jsxs("div",{className:l.navigationSummaryContainerClassName,children:[f.jsx("button",{type:"button",className:`renderAsLink cursor-pointer select-none ${l.linkTextClassName}`,onClick:i,"data-test-id":"switch-measurement-left",style:m,"aria-label":d.previousAriaLabel,children:c}),f.jsxs("span",{className:"mx-4",children:[n+1," ",d.counterSeparator," ",e]}),f.jsx("button",{type:"button",className:`renderAsLink cursor-pointer select-none ${l.linkTextClassName}`,onClick:s,"data-test-id":"switch-measurement-right",style:m,"aria-label":d.nextAriaLabel,children:p})]}):null]})};li.__docgenInfo={description:"",methods:[],displayName:"AnnotationInfoBoxNavigation",props:{totalEntries:{required:!0,tsType:{name:"number"},description:""},currentIndex:{required:!0,tsType:{name:"number"},description:""},instructionText:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},availabilityLabel:{required:!1,tsType:{name:"ReactNode"},description:""},labels:{required:!1,tsType:{name:"Partial",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  entrySingular: string;
  entryPlural: string;
  availableSuffix: string;
  previousAriaLabel: string;
  nextAriaLabel: string;
  counterSeparator: string;
}`,signature:{properties:[{key:"entrySingular",value:{name:"string",required:!0}},{key:"entryPlural",value:{name:"string",required:!0}},{key:"availableSuffix",value:{name:"string",required:!0}},{key:"previousAriaLabel",value:{name:"string",required:!0}},{key:"nextAriaLabel",value:{name:"string",required:!0}},{key:"counterSeparator",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  entrySingular: string;
  entryPlural: string;
  availableSuffix: string;
  previousAriaLabel: string;
  nextAriaLabel: string;
  counterSeparator: string;
}>`}],raw:"Partial<AnnotationInfoBoxNavigationLabels>"},description:""},onFlyToAll:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onPrevious:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onNext:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},visualOptions:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  defaultPixelWidth: number;
  headingColor: string;
  headerStyle: CSSProperties;
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
  readOnly: boolean;
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
  actionIconFontSize: string | null;
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
}`,signature:{properties:[{key:"defaultPixelWidth",value:{name:"number",required:!0}},{key:"headingColor",value:{name:"string",required:!0}},{key:"headerStyle",value:{name:"CSSProperties",required:!0}},{key:"bodyPanelStyle",value:{name:"CSSProperties",required:!0}},{key:"resolveActionTooltipPopupContainer",value:{name:"signature",type:"function",raw:"(triggerNode: HTMLElement) => HTMLElement",signature:{arguments:[{type:{name:"HTMLElement"},name:"triggerNode"}],return:{name:"HTMLElement"}},required:!0}},{key:"headerForegroundClassName",value:{name:"string",required:!0}},{key:"headerTitleClassName",value:{name:"string",required:!0}},{key:"subtitleContainerClassName",value:{name:"string",required:!0}},{key:"subtitleTextStyle",value:{name:"CSSProperties",required:!0}},{key:"subtitleTextClassName",value:{name:"string",required:!0}},{key:"subtitleMetaTextStyle",value:{name:"CSSProperties",required:!0}},{key:"subtitleMetaTextClassName",value:{name:"string",required:!0}},{key:"showSubtitleMetaText",value:{name:"boolean",required:!0}},{key:"readOnly",value:{name:"boolean",required:!0}},{key:"bodyContainerClassName",value:{name:"string",required:!0}},{key:"bodyTextStyle",value:{name:"CSSProperties",required:!0}},{key:"bodyTextClassName",value:{name:"string",required:!0}},{key:"emptyContentLineStyle",value:{name:"CSSProperties",required:!0}},{key:"emptyContentLineClassName",value:{name:"string",required:!0}},{key:"mutedTextClassName",value:{name:"string",required:!0}},{key:"linkTextClassName",value:{name:"string",required:!0}},{key:"actionIconClassName",value:{name:"string",required:!0}},{key:"actionIconColor",value:{name:"string",required:!0}},{key:"actionIconHoverColor",value:{name:"string",required:!0}},{key:"actionIconFontSize",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"hiddenActionIds",value:{name:"unknown",required:!0}},{key:"renderActionIcon",value:{name:"signature",type:"function",raw:`(
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
  headerStyle: CSSProperties;
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
  readOnly: boolean;
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
  actionIconFontSize: string | null;
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
}>`},description:""}}};const ui=({children:e,className:n,style:t,visualOptions:r})=>{const a=Ie(r);return f.jsx("div",{className:`${a.bodyContainerClassName} ${a.bodyTextClassName}${n?` ${n}`:""}`,style:{...a.bodyTextStyle,...t},children:e})};ui.__docgenInfo={description:"",methods:[],displayName:"AnnotationInfoBoxTextContent",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""},visualOptions:{required:!1,tsType:{name:"Partial",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  defaultPixelWidth: number;
  headingColor: string;
  headerStyle: CSSProperties;
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
  readOnly: boolean;
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
  actionIconFontSize: string | null;
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
}`,signature:{properties:[{key:"defaultPixelWidth",value:{name:"number",required:!0}},{key:"headingColor",value:{name:"string",required:!0}},{key:"headerStyle",value:{name:"CSSProperties",required:!0}},{key:"bodyPanelStyle",value:{name:"CSSProperties",required:!0}},{key:"resolveActionTooltipPopupContainer",value:{name:"signature",type:"function",raw:"(triggerNode: HTMLElement) => HTMLElement",signature:{arguments:[{type:{name:"HTMLElement"},name:"triggerNode"}],return:{name:"HTMLElement"}},required:!0}},{key:"headerForegroundClassName",value:{name:"string",required:!0}},{key:"headerTitleClassName",value:{name:"string",required:!0}},{key:"subtitleContainerClassName",value:{name:"string",required:!0}},{key:"subtitleTextStyle",value:{name:"CSSProperties",required:!0}},{key:"subtitleTextClassName",value:{name:"string",required:!0}},{key:"subtitleMetaTextStyle",value:{name:"CSSProperties",required:!0}},{key:"subtitleMetaTextClassName",value:{name:"string",required:!0}},{key:"showSubtitleMetaText",value:{name:"boolean",required:!0}},{key:"readOnly",value:{name:"boolean",required:!0}},{key:"bodyContainerClassName",value:{name:"string",required:!0}},{key:"bodyTextStyle",value:{name:"CSSProperties",required:!0}},{key:"bodyTextClassName",value:{name:"string",required:!0}},{key:"emptyContentLineStyle",value:{name:"CSSProperties",required:!0}},{key:"emptyContentLineClassName",value:{name:"string",required:!0}},{key:"mutedTextClassName",value:{name:"string",required:!0}},{key:"linkTextClassName",value:{name:"string",required:!0}},{key:"actionIconClassName",value:{name:"string",required:!0}},{key:"actionIconColor",value:{name:"string",required:!0}},{key:"actionIconHoverColor",value:{name:"string",required:!0}},{key:"actionIconFontSize",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"hiddenActionIds",value:{name:"unknown",required:!0}},{key:"renderActionIcon",value:{name:"signature",type:"function",raw:`(
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
  headerStyle: CSSProperties;
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
  readOnly: boolean;
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
  actionIconFontSize: string | null;
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
}>`}],raw:"Partial<AnnotationInfoBoxVisualOptions>"},description:""}}};const Ce=e=>e.trim(),G=Object.freeze({borderRadiusRem:"0.2143rem",shortLabelMaxLength:64,shortLabelWidthPaddingCh:.5,shortLabelMinWidthCh:2.5}),ke=e=>Ce(e).slice(0,G.shortLabelMaxLength),di=e=>e.slice(0,G.shortLabelMaxLength),ci=({value:e,placeholder:n,onCommit:t,readOnly:r=!1,shortLabelValue:a,shortLabelPlaceholder:o,onShortLabelCommit:i,visualOptions:s})=>{const u=Ie(s),[l,d]=k.useState(()=>Ce(e)),[m,c]=k.useState(()=>ke(a??"")),p=k.useRef(null),y=k.useRef(null),g=G.shortLabelMaxLength+G.shortLabelWidthPaddingCh,S=Math.min(Math.max(Ce(m||o||"").length+G.shortLabelWidthPaddingCh,G.shortLabelMinWidthCh),g);k.useEffect(()=>{d(Ce(e))},[e]),k.useEffect(()=>{c(ke(a??""))},[a]);const v=N=>{if(r){d(Ce(e));return}const R=Ce(N);d(R),t(R)},B=N=>{if(!i||r){c(ke(a??""));return}const R=ke(N);if(!R){const nn=ke(a??"");c(nn);return}c(R),i(R)},x=N=>{N.stopPropagation()},I=N=>{var R;N.key==="Enter"&&(N.preventDefault(),(R=p.current)==null||R.blur())},L=N=>{var R;N.key==="Enter"&&(N.preventDefault(),(R=y.current)==null||R.blur())},$={...u.titleTextStyle,flex:"0 1 auto",minWidth:"1ch",maxWidth:"100%",fieldSizing:"content"},F={...u.titleTextStyle,borderRadius:G.borderRadiusRem,flex:"0 1 auto",width:`${S}ch`,minWidth:`${G.shortLabelMinWidthCh}ch`,maxWidth:`min(${g}ch, 100%)`,fieldSizing:"content"};return f.jsxs("div",{className:"inline-flex min-w-0 max-w-full flex-1 items-center",style:{columnGap:"0.35em"},onMouseDown:x,onClick:x,children:[f.jsx("input",{ref:p,type:"text",value:l,placeholder:n,readOnly:r,"aria-readonly":r,className:u.titleInputClassName,style:$,onMouseDown:x,onClick:x,onChange:N=>d(N.target.value),onBlur:N=>v(N.target.value),onKeyDown:I}),i?f.jsx("input",{ref:y,type:"text",value:m,placeholder:o,readOnly:r,"aria-readonly":r,maxLength:G.shortLabelMaxLength,className:u.shortLabelInputClassName,style:F,onMouseDown:x,onClick:x,onChange:N=>c(di(N.target.value)),onBlur:N=>B(N.target.value),onKeyDown:L}):null]})};ci.__docgenInfo={description:"",methods:[],displayName:"AnnotationInfoBoxTitleInput",props:{value:{required:!0,tsType:{name:"string"},description:""},placeholder:{required:!0,tsType:{name:"string"},description:""},onCommit:{required:!0,tsType:{name:"signature",type:"function",raw:"(nextValue: string) => void",signature:{arguments:[{type:{name:"string"},name:"nextValue"}],return:{name:"void"}}},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},shortLabelValue:{required:!1,tsType:{name:"string"},description:""},shortLabelPlaceholder:{required:!1,tsType:{name:"string"},description:""},onShortLabelCommit:{required:!1,tsType:{name:"signature",type:"function",raw:"(nextValue: string) => void",signature:{arguments:[{type:{name:"string"},name:"nextValue"}],return:{name:"void"}}},description:""},visualOptions:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  defaultPixelWidth: number;
  headingColor: string;
  headerStyle: CSSProperties;
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
  readOnly: boolean;
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
  actionIconFontSize: string | null;
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
}`,signature:{properties:[{key:"defaultPixelWidth",value:{name:"number",required:!0}},{key:"headingColor",value:{name:"string",required:!0}},{key:"headerStyle",value:{name:"CSSProperties",required:!0}},{key:"bodyPanelStyle",value:{name:"CSSProperties",required:!0}},{key:"resolveActionTooltipPopupContainer",value:{name:"signature",type:"function",raw:"(triggerNode: HTMLElement) => HTMLElement",signature:{arguments:[{type:{name:"HTMLElement"},name:"triggerNode"}],return:{name:"HTMLElement"}},required:!0}},{key:"headerForegroundClassName",value:{name:"string",required:!0}},{key:"headerTitleClassName",value:{name:"string",required:!0}},{key:"subtitleContainerClassName",value:{name:"string",required:!0}},{key:"subtitleTextStyle",value:{name:"CSSProperties",required:!0}},{key:"subtitleTextClassName",value:{name:"string",required:!0}},{key:"subtitleMetaTextStyle",value:{name:"CSSProperties",required:!0}},{key:"subtitleMetaTextClassName",value:{name:"string",required:!0}},{key:"showSubtitleMetaText",value:{name:"boolean",required:!0}},{key:"readOnly",value:{name:"boolean",required:!0}},{key:"bodyContainerClassName",value:{name:"string",required:!0}},{key:"bodyTextStyle",value:{name:"CSSProperties",required:!0}},{key:"bodyTextClassName",value:{name:"string",required:!0}},{key:"emptyContentLineStyle",value:{name:"CSSProperties",required:!0}},{key:"emptyContentLineClassName",value:{name:"string",required:!0}},{key:"mutedTextClassName",value:{name:"string",required:!0}},{key:"linkTextClassName",value:{name:"string",required:!0}},{key:"actionIconClassName",value:{name:"string",required:!0}},{key:"actionIconColor",value:{name:"string",required:!0}},{key:"actionIconHoverColor",value:{name:"string",required:!0}},{key:"actionIconFontSize",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"hiddenActionIds",value:{name:"unknown",required:!0}},{key:"renderActionIcon",value:{name:"signature",type:"function",raw:`(
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
  headerStyle: CSSProperties;
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
  readOnly: boolean;
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
  actionIconFontSize: string | null;
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
}>`},description:""}}};var $t={exports:{}},Wt={};/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Me=k;function mi(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var gi=typeof Object.is=="function"?Object.is:mi,yi=Me.useSyncExternalStore,fi=Me.useRef,pi=Me.useEffect,Ci=Me.useMemo,Ni=Me.useDebugValue;Wt.useSyncExternalStoreWithSelector=function(e,n,t,r,a){var o=fi(null);if(o.current===null){var i={hasValue:!1,value:null};o.current=i}else i=o.current;o=Ci(function(){function u(p){if(!l){if(l=!0,d=p,p=r(p),a!==void 0&&i.hasValue){var y=i.value;if(a(y,p))return m=y}return m=p}if(y=m,gi(d,p))return y;var g=r(p);return a!==void 0&&a(y,g)?y:(d=p,m=g)}var l=!1,d,m,c=t===void 0?null:t;return[function(){return u(n())},c===null?void 0:function(){return u(c())}]},[n,t,r,a]);var s=yi(e,o[0],o[1]);return pi(function(){i.hasValue=!0,i.value=s},[s]),Ni(s),s};$t.exports=Wt;var xi=$t.exports,U="default"in Yn?Fr:Yn,dt=Symbol.for("react-redux-context"),ct=typeof globalThis<"u"?globalThis:{};function bi(){if(!U.createContext)return{};const e=ct[dt]??(ct[dt]=new Map);let n=e.get(U.createContext);return n||(n=U.createContext(null),e.set(U.createContext,n)),n}var ge=bi(),Si=()=>{throw new Error("uSES not initialized!")};function Bn(e=ge){return function(){return U.useContext(e)}}var Ut=Bn(),Vt=Si,hi=e=>{Vt=e},vi=(e,n)=>e===n;function Ti(e=ge){const n=e===ge?Ut:Bn(e),t=(r,a={})=>{const{equalityFn:o=vi,devModeChecks:i={}}=typeof a=="function"?{equalityFn:a}:a,{store:s,subscription:u,getServerState:l,stabilityCheck:d,identityFunctionCheck:m}=n();U.useRef(!0);const c=U.useCallback({[r.name](y){return r(y)}}[r.name],[r,d,i.stabilityCheck]),p=Vt(u.addNestedSub,s.getState,l||s.getState,c,o);return U.useDebugValue(p),p};return Object.assign(t,{withTypes:()=>t}),t}var Ii=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Ai=typeof navigator<"u"&&navigator.product==="ReactNative";Ii||Ai?U.useLayoutEffect:U.useEffect;function Fn(e=ge){const n=e===ge?Ut:Bn(e),t=()=>{const{store:r}=n();return r};return Object.assign(t,{withTypes:()=>t}),t}var ki=Fn();function Ei(e=ge){const n=e===ge?ki:Fn(e),t=()=>n().dispatch;return Object.assign(t,{withTypes:()=>t}),t}hi(xi.useSyncExternalStoreWithSelector);const Li={AUTHORING:"authoring",EXTERNAL:"external"},_s={RELATIVE:"relative",ABSOLUTE:"absolute"},Gt=e=>new Set(e.filter(n=>n.annotationRole===Li.EXTERNAL||n.readOnly||n.locked).flatMap(n=>n.nodeIds)),un=e=>e.reduce((n,t)=>{const r=t.match(/(\d+)$/),a=r?Number(r[1]):Number.NaN;return Number.isFinite(a)?Math.max(n,a):n},0),Os=e=>new Map(e.flatMap(n=>n.nodeIds.map(t=>[t,n.id]))),ue=({nodes:e,nodeLinks:n})=>{const t=new Set(e.map(i=>i.id)),r=n.map(i=>({...i,nodeIds:Array.from(new Set(i.nodeIds.filter(s=>t.has(s))))})).filter(i=>i.nodeIds.length>0),a=new Set(r.flatMap(i=>i.nodeIds)),o=e.filter(i=>!a.has(i.id)).map(i=>({id:i.id,nodeIds:[i.id]}));return[...r,...o]},mt=6378137,Ri=.1,dn=e=>e*Math.PI/180,Pi=(e,n)=>{const t=dn(n.latitude-e.latitude),r=dn(n.longitude-e.longitude),a=dn((e.latitude+n.latitude)/2),o=r*Math.cos(a)*mt,i=t*mt,s=n.altitude-e.altitude;return Math.hypot(o,i,s)},_i=e=>typeof e=="string"&&e.trim().length>0?e.trim():null,Oi=({nodes:e,nodeLinks:n,nodeId:t,movedNodeIds:r,linkToNodeId:a})=>{const o=e.find(y=>y.id===t)??null,i=Array.from(new Set(r.filter(Boolean)));if(!o||i.length===0)return[...n];const s=new Set(i),u=n.find(y=>y.nodeIds.includes(t))??null,l=_i(a),d=l&&!s.has(l)?n.find(y=>y.nodeIds.includes(l))??null:null;return d!==null&&!d.nodeIds.some(y=>s.has(y))?ue({nodes:e,nodeLinks:n.map(y=>y.id===d.id?{...y,nodeIds:Array.from(new Set([...y.nodeIds,...i]))}:{...y,nodeIds:y.nodeIds.filter(g=>!s.has(g))})}):!u||i.length===u.nodeIds.length?[...n]:e.filter(y=>u.nodeIds.includes(y.id)&&!s.has(y.id)).some(y=>Pi(y.coordinate,o.coordinate)>Ri)?ue({nodes:e,nodeLinks:n.map(y=>y.id===u.id?{...y,nodeIds:y.nodeIds.filter(g=>!s.has(g))}:{...y})}):[...n]};function qi(e){if(typeof e!="object"||e===null)return!1;let n=e;for(;Object.getPrototypeOf(n)!==null;)n=Object.getPrototypeOf(n);return Object.getPrototypeOf(e)===n||Object.getPrototypeOf(e)===null}function wi(e){return qi(e)&&"type"in e&&typeof e.type=="string"}var Xt=Symbol.for("immer-nothing"),gt=Symbol.for("immer-draftable"),q=Symbol.for("immer-state");function H(e,...n){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var he=Object.getPrototypeOf;function ye(e){return!!e&&!!e[q]}function Y(e){var n;return e?Yt(e)||Array.isArray(e)||!!e[gt]||!!((n=e.constructor)!=null&&n[gt])||Ke(e)||Ze(e):!1}var Mi=Object.prototype.constructor.toString();function Yt(e){if(!e||typeof e!="object")return!1;const n=he(e);if(n===null)return!0;const t=Object.hasOwnProperty.call(n,"constructor")&&n.constructor;return t===Object?!0:typeof t=="function"&&Function.toString.call(t)===Mi}function Ue(e,n){Ye(e)===0?Reflect.ownKeys(e).forEach(t=>{n(t,e[t],e)}):e.forEach((t,r)=>n(r,t,e))}function Ye(e){const n=e[q];return n?n.type_:Array.isArray(e)?1:Ke(e)?2:Ze(e)?3:0}function kn(e,n){return Ye(e)===2?e.has(n):Object.prototype.hasOwnProperty.call(e,n)}function Kt(e,n,t){const r=Ye(e);r===2?e.set(n,t):r===3?e.add(t):e[n]=t}function Bi(e,n){return e===n?e!==0||1/e===1/n:e!==e&&n!==n}function Ke(e){return e instanceof Map}function Ze(e){return e instanceof Set}function le(e){return e.copy_||e.base_}function En(e,n){if(Ke(e))return new Map(e);if(Ze(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);const t=Yt(e);if(n===!0||n==="class_only"&&!t){const r=Object.getOwnPropertyDescriptors(e);delete r[q];let a=Reflect.ownKeys(r);for(let o=0;o<a.length;o++){const i=a[o],s=r[i];s.writable===!1&&(s.writable=!0,s.configurable=!0),(s.get||s.set)&&(r[i]={configurable:!0,writable:!0,enumerable:s.enumerable,value:e[i]})}return Object.create(he(e),r)}else{const r=he(e);if(r!==null&&t)return{...e};const a=Object.create(r);return Object.assign(a,e)}}function Dn(e,n=!1){return Je(e)||ye(e)||!Y(e)||(Ye(e)>1&&(e.set=e.add=e.clear=e.delete=Fi),Object.freeze(e),n&&Object.entries(e).forEach(([t,r])=>Dn(r,!0))),e}function Fi(){H(2)}function Je(e){return Object.isFrozen(e)}var Di={};function fe(e){const n=Di[e];return n||H(0,e),n}var Oe;function Zt(){return Oe}function zi(e,n){return{drafts_:[],parent_:e,immer_:n,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function yt(e,n){n&&(fe("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=n)}function Ln(e){Rn(e),e.drafts_.forEach(Hi),e.drafts_=null}function Rn(e){e===Oe&&(Oe=e.parent_)}function ft(e){return Oe=zi(Oe,e)}function Hi(e){const n=e[q];n.type_===0||n.type_===1?n.revoke_():n.revoked_=!0}function pt(e,n){n.unfinalizedDrafts_=n.drafts_.length;const t=n.drafts_[0];return e!==void 0&&e!==t?(t[q].modified_&&(Ln(n),H(4)),Y(e)&&(e=Ve(n,e),n.parent_||Ge(n,e)),n.patches_&&fe("Patches").generateReplacementPatches_(t[q].base_,e,n.patches_,n.inversePatches_)):e=Ve(n,t,[]),Ln(n),n.patches_&&n.patchListener_(n.patches_,n.inversePatches_),e!==Xt?e:void 0}function Ve(e,n,t){if(Je(n))return n;const r=n[q];if(!r)return Ue(n,(a,o)=>Ct(e,r,n,a,o,t)),n;if(r.scope_!==e)return n;if(!r.modified_)return Ge(e,r.base_,!0),r.base_;if(!r.finalized_){r.finalized_=!0,r.scope_.unfinalizedDrafts_--;const a=r.copy_;let o=a,i=!1;r.type_===3&&(o=new Set(a),a.clear(),i=!0),Ue(o,(s,u)=>Ct(e,r,a,s,u,t,i)),Ge(e,a,!1),t&&e.patches_&&fe("Patches").generatePatches_(r,t,e.patches_,e.inversePatches_)}return r.copy_}function Ct(e,n,t,r,a,o,i){if(ye(a)){const s=o&&n&&n.type_!==3&&!kn(n.assigned_,r)?o.concat(r):void 0,u=Ve(e,a,s);if(Kt(t,r,u),ye(u))e.canAutoFreeze_=!1;else return}else i&&t.add(a);if(Y(a)&&!Je(a)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;Ve(e,a),(!n||!n.scope_.parent_)&&typeof r!="symbol"&&Object.prototype.propertyIsEnumerable.call(t,r)&&Ge(e,a)}}function Ge(e,n,t=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&Dn(n,t)}function ji(e,n){const t=Array.isArray(e),r={type_:t?1:0,scope_:n?n.scope_:Zt(),modified_:!1,finalized_:!1,assigned_:{},parent_:n,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let a=r,o=zn;t&&(a=[r],o=qe);const{revoke:i,proxy:s}=Proxy.revocable(a,o);return r.draft_=s,r.revoke_=i,s}var zn={get(e,n){if(n===q)return e;const t=le(e);if(!kn(t,n))return $i(e,t,n);const r=t[n];return e.finalized_||!Y(r)?r:r===cn(e.base_,n)?(mn(e),e.copy_[n]=_n(r,e)):r},has(e,n){return n in le(e)},ownKeys(e){return Reflect.ownKeys(le(e))},set(e,n,t){const r=Jt(le(e),n);if(r!=null&&r.set)return r.set.call(e.draft_,t),!0;if(!e.modified_){const a=cn(le(e),n),o=a==null?void 0:a[q];if(o&&o.base_===t)return e.copy_[n]=t,e.assigned_[n]=!1,!0;if(Bi(t,a)&&(t!==void 0||kn(e.base_,n)))return!0;mn(e),Pn(e)}return e.copy_[n]===t&&(t!==void 0||n in e.copy_)||Number.isNaN(t)&&Number.isNaN(e.copy_[n])||(e.copy_[n]=t,e.assigned_[n]=!0),!0},deleteProperty(e,n){return cn(e.base_,n)!==void 0||n in e.base_?(e.assigned_[n]=!1,mn(e),Pn(e)):delete e.assigned_[n],e.copy_&&delete e.copy_[n],!0},getOwnPropertyDescriptor(e,n){const t=le(e),r=Reflect.getOwnPropertyDescriptor(t,n);return r&&{writable:!0,configurable:e.type_!==1||n!=="length",enumerable:r.enumerable,value:t[n]}},defineProperty(){H(11)},getPrototypeOf(e){return he(e.base_)},setPrototypeOf(){H(12)}},qe={};Ue(zn,(e,n)=>{qe[e]=function(){return arguments[0]=arguments[0][0],n.apply(this,arguments)}});qe.deleteProperty=function(e,n){return qe.set.call(this,e,n,void 0)};qe.set=function(e,n,t){return zn.set.call(this,e[0],n,t,e[0])};function cn(e,n){const t=e[q];return(t?le(t):e)[n]}function $i(e,n,t){var a;const r=Jt(n,t);return r?"value"in r?r.value:(a=r.get)==null?void 0:a.call(e.draft_):void 0}function Jt(e,n){if(!(n in e))return;let t=he(e);for(;t;){const r=Object.getOwnPropertyDescriptor(t,n);if(r)return r;t=he(t)}}function Pn(e){e.modified_||(e.modified_=!0,e.parent_&&Pn(e.parent_))}function mn(e){e.copy_||(e.copy_=En(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var Wi=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(n,t,r)=>{if(typeof n=="function"&&typeof t!="function"){const o=t;t=n;const i=this;return function(u=o,...l){return i.produce(u,d=>t.call(this,d,...l))}}typeof t!="function"&&H(6),r!==void 0&&typeof r!="function"&&H(7);let a;if(Y(n)){const o=ft(this),i=_n(n,void 0);let s=!0;try{a=t(i),s=!1}finally{s?Ln(o):Rn(o)}return yt(o,r),pt(a,o)}else if(!n||typeof n!="object"){if(a=t(n),a===void 0&&(a=n),a===Xt&&(a=void 0),this.autoFreeze_&&Dn(a,!0),r){const o=[],i=[];fe("Patches").generateReplacementPatches_(n,a,o,i),r(o,i)}return a}else H(1,n)},this.produceWithPatches=(n,t)=>{if(typeof n=="function")return(i,...s)=>this.produceWithPatches(i,u=>n(u,...s));let r,a;return[this.produce(n,t,(i,s)=>{r=i,a=s}),r,a]},typeof(e==null?void 0:e.autoFreeze)=="boolean"&&this.setAutoFreeze(e.autoFreeze),typeof(e==null?void 0:e.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){Y(e)||H(8),ye(e)&&(e=Ui(e));const n=ft(this),t=_n(e,void 0);return t[q].isManual_=!0,Rn(n),t}finishDraft(e,n){const t=e&&e[q];(!t||!t.isManual_)&&H(9);const{scope_:r}=t;return yt(r,n),pt(void 0,r)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,n){let t;for(t=n.length-1;t>=0;t--){const a=n[t];if(a.path.length===0&&a.op==="replace"){e=a.value;break}}t>-1&&(n=n.slice(t+1));const r=fe("Patches").applyPatches_;return ye(e)?r(e,n):this.produce(e,a=>r(a,n))}};function _n(e,n){const t=Ke(e)?fe("MapSet").proxyMap_(e,n):Ze(e)?fe("MapSet").proxySet_(e,n):ji(e,n);return(n?n.scope_:Zt()).drafts_.push(t),t}function Ui(e){return ye(e)||H(10,e),Qt(e)}function Qt(e){if(!Y(e)||Je(e))return e;const n=e[q];let t;if(n){if(!n.modified_)return n.base_;n.finalized_=!0,t=En(e,n.scope_.immer_.useStrictShallowCopy_)}else t=En(e,!0);return Ue(t,(r,a)=>{Kt(t,r,Qt(a))}),n&&(n.finalized_=!1),t}var w=new Wi,er=w.produce;w.produceWithPatches.bind(w);w.setAutoFreeze.bind(w);w.setUseStrictShallowCopy.bind(w);w.applyPatches.bind(w);w.createDraft.bind(w);w.finishDraft.bind(w);function Nt(e,n){function t(...r){if(n){let a=n(...r);if(!a)throw new Error(V(0));return{type:e,payload:a.payload,..."meta"in a&&{meta:a.meta},..."error"in a&&{error:a.error}}}return{type:e,payload:r[0]}}return t.toString=()=>`${e}`,t.type=e,t.match=r=>wi(r)&&r.type===e,t}function xt(e){return Y(e)?er(e,()=>{}):e}function bt(e,n,t){if(e.has(n)){let a=e.get(n);return t.update&&(a=t.update(a,n,e),e.set(n,a)),a}if(!t.insert)throw new Error(V(10));const r=t.insert(n,e);return e.set(n,r),r}function nr(e){const n={},t=[];let r;const a={addCase(o,i){const s=typeof o=="string"?o:o.type;if(!s)throw new Error(V(28));if(s in n)throw new Error(V(29));return n[s]=i,a},addMatcher(o,i){return t.push({matcher:o,reducer:i}),a},addDefaultCase(o){return r=o,a}};return e(a),[n,t,r]}function Vi(e){return typeof e=="function"}function Gi(e,n){let[t,r,a]=nr(n),o;if(Vi(e))o=()=>xt(e());else{const s=xt(e);o=()=>s}function i(s=o(),u){let l=[t[u.type],...r.filter(({matcher:d})=>d(u)).map(({reducer:d})=>d)];return l.filter(d=>!!d).length===0&&(l=[a]),l.reduce((d,m)=>{if(m)if(ye(d)){const p=m(d,u);return p===void 0?d:p}else{if(Y(d))return er(d,c=>m(c,u));{const c=m(d,u);if(c===void 0){if(d===null)return d;throw new Error(V(9))}return c}}return d},s)}return i.getInitialState=o,i}var Xi=Symbol.for("rtk-slice-createasyncthunk");function Yi(e,n){return`${e}/${n}`}function Ki({creators:e}={}){var t;const n=(t=e==null?void 0:e.asyncThunk)==null?void 0:t[Xi];return function(a){const{name:o,reducerPath:i=o}=a;if(!o)throw new Error(V(11));const s=(typeof a.reducers=="function"?a.reducers(Qi()):a.reducers)||{},u=Object.keys(s),l={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},d={addCase(x,I){const L=typeof x=="string"?x:x.type;if(!L)throw new Error(V(12));if(L in l.sliceCaseReducersByType)throw new Error(V(13));return l.sliceCaseReducersByType[L]=I,d},addMatcher(x,I){return l.sliceMatchers.push({matcher:x,reducer:I}),d},exposeAction(x,I){return l.actionCreators[x]=I,d},exposeCaseReducer(x,I){return l.sliceCaseReducersByName[x]=I,d}};u.forEach(x=>{const I=s[x],L={reducerName:x,type:Yi(o,x),createNotation:typeof a.reducers=="function"};no(I)?ro(L,I,d,n):eo(L,I,d)});function m(){const[x={},I=[],L=void 0]=typeof a.extraReducers=="function"?nr(a.extraReducers):[a.extraReducers],$={...x,...l.sliceCaseReducersByType};return Gi(a.initialState,F=>{for(let N in $)F.addCase(N,$[N]);for(let N of l.sliceMatchers)F.addMatcher(N.matcher,N.reducer);for(let N of I)F.addMatcher(N.matcher,N.reducer);L&&F.addDefaultCase(L)})}const c=x=>x,p=new Map;let y;function g(x,I){return y||(y=m()),y(x,I)}function S(){return y||(y=m()),y.getInitialState()}function v(x,I=!1){function L(F){let N=F[x];return typeof N>"u"&&I&&(N=S()),N}function $(F=c){const N=bt(p,I,{insert:()=>new WeakMap});return bt(N,F,{insert:()=>{const R={};for(const[nn,xr]of Object.entries(a.selectors??{}))R[nn]=Zi(xr,F,S,I);return R}})}return{reducerPath:x,getSelectors:$,get selectors(){return $(L)},selectSlice:L}}const B={name:o,reducer:g,actions:l.actionCreators,caseReducers:l.sliceCaseReducersByName,getInitialState:S,...v(i),injectInto(x,{reducerPath:I,...L}={}){const $=I??i;return x.inject({reducerPath:$,reducer:g},L),{...B,...v($,!0)}}};return B}}function Zi(e,n,t,r){function a(o,...i){let s=n(o);return typeof s>"u"&&r&&(s=t()),e(s,...i)}return a.unwrapped=e,a}var Ji=Ki();function Qi(){function e(n,t){return{_reducerDefinitionType:"asyncThunk",payloadCreator:n,...t}}return e.withTypes=()=>e,{reducer(n){return Object.assign({[n.name](...t){return n(...t)}}[n.name],{_reducerDefinitionType:"reducer"})},preparedReducer(n,t){return{_reducerDefinitionType:"reducerWithPrepare",prepare:n,reducer:t}},asyncThunk:e}}function eo({type:e,reducerName:n,createNotation:t},r,a){let o,i;if("reducer"in r){if(t&&!to(r))throw new Error(V(17));o=r.reducer,i=r.prepare}else o=r;a.addCase(e,o).exposeCaseReducer(n,o).exposeAction(n,i?Nt(e,i):Nt(e))}function no(e){return e._reducerDefinitionType==="asyncThunk"}function to(e){return e._reducerDefinitionType==="reducerWithPrepare"}function ro({type:e,reducerName:n},t,r,a){if(!a)throw new Error(V(18));const{payloadCreator:o,fulfilled:i,pending:s,rejected:u,settled:l,options:d}=t,m=a(e,o,d);r.exposeAction(n,m),i&&r.addCase(m.fulfilled,i),s&&r.addCase(m.pending,s),u&&r.addCase(m.rejected,u),l&&r.addMatcher(m.settled,l),r.exposeCaseReducer(n,{fulfilled:i||De,pending:s||De,rejected:u||De,settled:l||De})}function De(){}function V(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}const ao=({nodeId:e,nodes:n,linkedNodeGroups:t,annotationEntries:r,selectedAnnotationIds:a=[],preferredMovedNodeIds:o})=>{const i=n.find(g=>g.id===e)??null;if(!i)return{targetNode:null,targetLinkedNodeGroup:null,movedNodeIds:[]};const s=t.find(g=>g.nodeIds.includes(e))??null,u=(s==null?void 0:s.nodeIds)??[e],l=Array.from(new Set((o??[]).filter(g=>u.includes(g)))),d=new Set(a.filter(Boolean)),m=new Set(r.filter(g=>d.has(g.id)).flatMap(g=>g.nodeIds)),c=u.filter(g=>m.has(g)),p=l.length>0?l:c.length>0?c:[...u],y=Gt(r);return{targetNode:i,targetLinkedNodeGroup:s,movedNodeIds:p.filter(g=>!y.has(g))}},io=(e={})=>{const{initialToolType:n=pa,initialPointTemporaryMode:t=!1}=e;return{annotationToolType:n,selectionState:{selectedAnnotationIds:[],previousSelectedAnnotationId:null},annotationEntries:[],nodes:[],linkedNodeGroups:[],edges:[],infoBoxState:{activeAnnotationId:null},settingsState:{pointTemporaryMode:t,elevationReferenceAnnotationId:null,nextShortLabelCounterByToolType:{}}}},oo=({nodeIds:e,closed:n,nextEdgeNumericSuffix:t})=>{const r=[];let a=t;for(let s=0;s<e.length-1;s+=1){const u=e[s],l=e[s+1];!u||!l||(a+=1,r.push({id:`edge-${a}`,startNodeId:u,endNodeId:l}))}const o=e[0],i=e[e.length-1];return n&&e.length>=3&&o&&i&&(a+=1,r.push({id:`edge-${a}`,startNodeId:i,endNodeId:o})),r},so=Ji({name:"annotationsRuntime",initialState:io(),reducers:{replaceState:(e,n)=>n.payload,setAnnotationToolType:(e,n)=>{e.annotationToolType=n.payload},setPointTemporaryMode:(e,n)=>{e.settingsState.pointTemporaryMode=n.payload},setElevationReferenceAnnotationId:(e,n)=>{e.settingsState.elevationReferenceAnnotationId=n.payload},setNextShortLabelCounterByToolType:(e,n)=>{e.settingsState.nextShortLabelCounterByToolType={...e.settingsState.nextShortLabelCounterByToolType,[n.payload.toolType]:Math.max(1,n.payload.nextCounter)}},setSelectedAnnotationId:(e,n)=>{const t=n.payload,r=e.selectionState.selectedAnnotationIds[e.selectionState.selectedAnnotationIds.length-1]??null;e.selectionState.previousSelectedAnnotationId=r,e.selectionState.selectedAnnotationIds=t?[t]:[],e.infoBoxState.activeAnnotationId=t},setSelectedAnnotationIds:(e,n)=>{const t=Array.from(new Set(n.payload.filter(Boolean))),r=e.selectionState.selectedAnnotationIds[e.selectionState.selectedAnnotationIds.length-1]??null;e.selectionState.previousSelectedAnnotationId=r,e.selectionState.selectedAnnotationIds=t,e.infoBoxState.activeAnnotationId=t[t.length-1]??null},appendAnnotationEntities:(e,n)=>{if(e.nodes.push(...n.payload.nodes),n.payload.linkedNodeGroups.forEach(t=>{const r=e.linkedNodeGroups.find(a=>a.id===t.id);if(!r){e.linkedNodeGroups.push({id:t.id,nodeIds:[...t.nodeIds]});return}r.nodeIds=Array.from(new Set([...r.nodeIds,...t.nodeIds]))}),e.edges.push(...n.payload.edges),e.annotationEntries.push({...n.payload.annotationEntry,nodeIds:[...n.payload.annotationEntry.nodeIds],edgeIds:[...n.payload.annotationEntry.edgeIds]}),e.linkedNodeGroups=ue({nodes:e.nodes,nodeLinks:e.linkedNodeGroups}),n.payload.selectAnnotationId!==void 0){const t=e.selectionState.selectedAnnotationIds[e.selectionState.selectedAnnotationIds.length-1]??null;e.selectionState.previousSelectedAnnotationId=t,e.selectionState.selectedAnnotationIds=n.payload.selectAnnotationId?[n.payload.selectAnnotationId]:[],e.infoBoxState.activeAnnotationId=n.payload.selectAnnotationId??null}},removeAnnotationById:(e,n)=>{const{annotationId:t,nextSelectedAnnotationId:r}=n.payload,a=e.selectionState.selectedAnnotationIds[e.selectionState.selectedAnnotationIds.length-1]??null;if(!e.annotationEntries.some(l=>l.id===t))return;e.annotationEntries=e.annotationEntries.filter(l=>l.id!==t);const i=new Set(e.annotationEntries.flatMap(l=>l.nodeIds)),s=new Set(e.annotationEntries.flatMap(l=>l.edgeIds));if(e.nodes=e.nodes.filter(l=>i.has(l.id)),e.linkedNodeGroups=ue({nodes:e.nodes,nodeLinks:e.linkedNodeGroups}),e.edges=e.edges.filter(l=>s.has(l.id)),e.selectionState.previousSelectedAnnotationId=a,e.settingsState.elevationReferenceAnnotationId===t&&(e.settingsState.elevationReferenceAnnotationId=null),r!==void 0){e.selectionState.selectedAnnotationIds=r?[r]:[],e.infoBoxState.activeAnnotationId=r??null;return}const u=e.selectionState.selectedAnnotationIds.filter(l=>l!==t);e.selectionState.selectedAnnotationIds=u,e.infoBoxState.activeAnnotationId=u[u.length-1]??null},removeAnnotationsByIds:(e,n)=>{const t=new Set(n.payload.annotationIds);if(t.size===0)return;const r=e.selectionState.selectedAnnotationIds[e.selectionState.selectedAnnotationIds.length-1]??null;if(!e.annotationEntries.some(u=>t.has(u.id)))return;e.annotationEntries=e.annotationEntries.filter(u=>!t.has(u.id));const o=new Set(e.annotationEntries.flatMap(u=>u.nodeIds)),i=new Set(e.annotationEntries.flatMap(u=>u.edgeIds));if(e.nodes=e.nodes.filter(u=>o.has(u.id)),e.linkedNodeGroups=ue({nodes:e.nodes,nodeLinks:e.linkedNodeGroups}),e.edges=e.edges.filter(u=>i.has(u.id)),e.selectionState.previousSelectedAnnotationId=r,e.settingsState.elevationReferenceAnnotationId&&t.has(e.settingsState.elevationReferenceAnnotationId)&&(e.settingsState.elevationReferenceAnnotationId=null),n.payload.nextSelectedAnnotationId!==void 0){e.selectionState.selectedAnnotationIds=n.payload.nextSelectedAnnotationId?[n.payload.nextSelectedAnnotationId]:[],e.infoBoxState.activeAnnotationId=n.payload.nextSelectedAnnotationId??null;return}const s=e.selectionState.selectedAnnotationIds.filter(u=>!t.has(u));e.selectionState.selectedAnnotationIds=s,e.infoBoxState.activeAnnotationId=s[s.length-1]??null},updateNodeCoordinateById:(e,n)=>{const{nodeId:t,coordinate:r,selectedAnnotationIds:a=[],movedNodeIds:o,linkToNodeId:i}=n.payload,{targetNode:s,movedNodeIds:u}=ao({nodeId:t,nodes:e.nodes,linkedNodeGroups:e.linkedNodeGroups,annotationEntries:e.annotationEntries,selectedAnnotationIds:a,preferredMovedNodeIds:o});if(!s)return;const l=new Set(u);if(u.length===0)return;const d=Gt(e.annotationEntries),m=i&&!d.has(i)?i:null;e.nodes.forEach(c=>{l.has(c.id)&&(c.coordinate=r)}),e.linkedNodeGroups=Oi({nodes:e.nodes,nodeLinks:e.linkedNodeGroups,nodeId:s.id,movedNodeIds:u,linkToNodeId:m})},insertNodeIntoMeasurementEdge:(e,n)=>{const{annotationId:t,startNodeId:r,endNodeId:a,coordinate:o}=n.payload,i=e.annotationEntries.find(v=>v.id===t);if(!i)return;const s=i.nodeIds.findIndex((v,B)=>v===r&&i.nodeIds[B+1]===a),u=s>=0?s+1:i.closed&&i.nodeIds.length>=3&&i.nodeIds[i.nodeIds.length-1]===r&&i.nodeIds[0]===a?i.nodeIds.length:-1;if(u<0)return;const l=new Map(e.edges.map(v=>[v.id,v])),d=i.edgeIds.findIndex(v=>{const B=l.get(v);return(B==null?void 0:B.startNodeId)===r&&B.endNodeId===a}),m=d>=0?i.edgeIds[d]:null,c=m?l.get(m):void 0;if(!c||d<0)return;const p=`node-${un(e.nodes.map(v=>v.id))+1}`,y=`edge-${un(e.edges.map(v=>v.id))+1}`;e.nodes.push({id:p,coordinate:o}),e.linkedNodeGroups=ue({nodes:e.nodes,nodeLinks:[...e.linkedNodeGroups,{id:p,nodeIds:[p]}]}),c.endNodeId=p;const g={id:y,startNodeId:p,endNodeId:a},S=e.edges.findIndex(v=>v.id===m);S>=0?e.edges.splice(S+1,0,g):e.edges.push(g),i.nodeIds=[...i.nodeIds.slice(0,u),p,...i.nodeIds.slice(u)],i.edgeIds=[...i.edgeIds.slice(0,d+1),y,...i.edgeIds.slice(d+1)]},removeNodeFromAnnotation:(e,n)=>{const{annotationId:t,nodeId:r}=n.payload,a=e.annotationEntries.find(l=>l.id===t);if(!a||!a.nodeIds.includes(r))return;const o=a.nodeIds.filter(l=>l!==r);if(o.length===a.nodeIds.length)return;const i=new Set(a.edgeIds),s=oo({nodeIds:o,closed:!!a.closed,nextEdgeNumericSuffix:un(e.edges.map(l=>l.id))});a.nodeIds=o,a.edgeIds=s.map(l=>l.id),e.edges=[...e.edges.filter(l=>!i.has(l.id)),...s];const u=new Set(e.annotationEntries.flatMap(l=>l.nodeIds));e.nodes=e.nodes.filter(l=>u.has(l.id)),e.linkedNodeGroups=ue({nodes:e.nodes,nodeLinks:e.linkedNodeGroups})},updateAnnotationEntryById:(e,n)=>{const{annotationId:t,displayName:r,shortLabel:a,shortLabelSource:o,shortLabelCounter:i,hidden:s,locked:u,annotationRole:l,readOnly:d,labelAppearance:m,elevationDisplayMode:c,distanceAnchorCoordinateSelection:p,distanceTriangleAnchorCoordinateRole:y}=n.payload,g=e.annotationEntries.find(S=>S.id===t);g&&(r!==void 0&&(g.displayName=r),a!==void 0&&(g.shortLabel=a),o!==void 0&&(g.shortLabelSource=o),i!==void 0&&(g.shortLabelCounter=i),s!==void 0&&(g.hidden=s),u!==void 0&&(g.locked=u),l!==void 0&&(g.annotationRole=l),d!==void 0&&(g.readOnly=d),m!==void 0&&(g.labelAppearance={...g.labelAppearance??{},...m}),c!==void 0&&(g.elevationDisplayMode=c),p!==void 0&&(g.distanceAnchorCoordinateSelection=p),y!==void 0&&(g.distanceTriangleAnchorCoordinateRole=y))}}}),{appendAnnotationEntities:qs,removeAnnotationById:ws,removeAnnotationsByIds:Ms,removeNodeFromAnnotation:Bs,setElevationReferenceAnnotationId:Fs,setNextShortLabelCounterByToolType:Ds,setPointTemporaryMode:zs,insertNodeIntoMeasurementEdge:Hs,updateNodeCoordinateById:js,updateAnnotationEntryById:$s,replaceState:Ws,setAnnotationToolType:Us,setSelectedAnnotationId:Vs,setSelectedAnnotationIds:Gs}=so.actions,Hn=k.createContext(null);Fn(Hn);const lo=Ei(Hn);Ti(Hn);const Xs=()=>lo(),On=Object.freeze({strokeWidthPx:1.5,overlayDashPattern:"8 8"}),uo=(e,n)=>typeof e=="number"&&Number.isFinite(e)&&e>0?e:n,co=(e,n)=>{const t=e==null?void 0:e.trim();return t||n},Ys=(e,n=On)=>({strokeWidthPx:uo(e==null?void 0:e.strokeWidthPx,n.strokeWidthPx),overlayDashPattern:co(e==null?void 0:e.overlayDashPattern,n.overlayDashPattern)}),St=Object.freeze({previewAlpha:.9,surfaceAlpha:.92}),T={colors:{neutral:He(1),accent:He(1),preview:He(St.previewAlpha),surface:zr(St.surfaceAlpha),transparent:"transparent",components:{direct:on(P.DIRECT),vertical:on(P.VERTICAL),horizontal:on(P.HORIZONTAL)},componentLabelAccents:{direct:sn(P.DIRECT),vertical:sn(P.VERTICAL),horizontal:sn(P.HORIZONTAL)}},sizes:{edgeStrokeWidth:On.strokeWidthPx,pointPixelSize:10,pointOutlineWidth:1},patterns:{edgeDashPattern:On.overlayDashPattern}},tr=Object.freeze({edge:Object.freeze({stroke:T.colors.accent,strokeWidth:T.sizes.edgeStrokeWidth,overlayDashPattern:T.patterns.edgeDashPattern}),point:Object.freeze({pixelSize:T.sizes.pointPixelSize,fill:T.colors.transparent,outline:T.colors.surface,outlineWidth:T.sizes.pointOutlineWidth})}),rr=Object.freeze({edge:Object.freeze({stroke:T.colors.neutral}),point:Object.freeze({outline:T.colors.neutral})}),mo=(e,n={})=>({...e,...n}),go=(e,n={})=>({...e,...n}),Ks=e=>mo(e,rr.edge),Zs=e=>go(e,rr.point),ht=ba(),ve=Object.freeze({style:Object.freeze({DARK_ON_BRIGHT:"dark-on-bright",BRIGHT_ON_DARK:"bright-on-dark"}),label:Object.freeze({textColor:ht}),selection:Object.freeze({highlightPalette:Object.freeze({backgroundColor:et("background"),hoverBackgroundColor:et("hoverBackground"),textColor:ht,glowColor:He(1),glowRadiusPx:5,preserveFillOnSelection:!0})}),lineLabel:Object.freeze({backgroundStyle:Object.freeze({SOFT_RECT_FADE:"soft-rect-fade",TEXT_ECHO_DARKEN:"text-echo-darken"})})}),yo=se.fontSizePx.pointLabel,fo=e=>`${e/yo}rem`,xe=Object.freeze({fontFamily:se.fontFamily,rootFontSizeRem:"1rem",supportFontSizeRem:fo(se.fontSizePx.supportText),headingFontSizeRem:"1rem",lineLabelFontWeight:se.fontWeight.medium,badgeFontWeight:se.fontWeight.medium,headingFontWeight:se.fontWeight.semibold,sectionTitleFontWeight:se.fontWeight.semibold}),po={NONE:"none",MOVE_ON_LINE:"move-on-line"},z=Object.freeze({appearance:Object.freeze({themeStyle:ve.style.BRIGHT_ON_DARK}),text:Object.freeze({fontFamily:xe.fontFamily,fontWeight:xe.lineLabelFontWeight}),background:Object.freeze({style:ve.lineLabel.backgroundStyle.TEXT_ECHO_DARKEN}),surface:Object.freeze({}),layout:Object.freeze({shortEdgeOffsetPx:-2}),collision:Object.freeze({allowEarlyRemoval:!0,resolutionStrategy:po.MOVE_ON_LINE,anchorSlideStepRatio:.1,maxAnchorSlideDeltaRatio:.3})}),jn=Object.freeze({verticalFlippedBaselineOffsetPx:0,verticalBaselineAngleEpsilonRad:1e-9,sideHysteresisPx:1.5}),$n=e=>{var n,t;return{appearance:{...z.appearance,...e==null?void 0:e.appearance},text:{...z.text,...e==null?void 0:e.text,echo:((n=e==null?void 0:e.text)==null?void 0:n.echo)===void 0&&z.text.echo===void 0?void 0:{...z.text.echo,...(t=e==null?void 0:e.text)==null?void 0:t.echo}},background:{...z.background,...e==null?void 0:e.background},surface:{...z.surface,...e==null?void 0:e.surface},layout:{...z.layout,...e==null?void 0:e.layout},collision:{...z.collision,...e==null?void 0:e.collision}}},Re=Object.freeze({lineStrokeWidthPx:T.sizes.edgeStrokeWidth,layerZIndex:"1550",lineLabelOffsetPx:9,lineLabelMinLengthPx:44,geometryEpsilonMeters:.01,directLineColor:T.colors.components.direct,verticalLineColor:T.colors.components.vertical,horizontalLineColor:T.colors.components.horizontal,draftChainColor:T.colors.preview}),Ee=Object.freeze({root:"carma-annotation-text-overlay",backdrop:"carma-annotation-text-overlay__backdrop",surface:"carma-annotation-text-overlay__surface",textEcho:"carma-annotation-text-overlay__text-echo",text:"carma-annotation-text-overlay__text"}),ze=Object.freeze({paddingBlockEx:.25,paddingInlineEx:.65,backdropInsetBlockEx:-.35,backdropInsetInlineEx:-.75}),Co=Object.freeze({fontSize:"20px",letterSpacing:"5%",fontWeight:800,textEchoBlurPx:12,textEchoShadow:"0 0 4px rgba(2, 6, 23, 0.8), 0 0 12px rgba(2, 6, 23, 0.77), 0 0 24px rgba(2, 6, 23, 0.64)"}),No=Object.freeze({[ve.style.BRIGHT_ON_DARK]:"15, 23, 42",[ve.style.DARK_ON_BRIGHT]:"255, 255, 255"}),Le=(e,n)=>{const t=document.createElement(e);return t.className=n,t},oe=({element:e,value:n,property:t,unit:r,min:a,max:o})=>{if(typeof n!="number"||!Number.isFinite(n))return;const i=a===void 0?n:Math.max(n,a),s=o===void 0?i:Math.min(i,o);e.style.setProperty(t,`${s}${r??""}`)},xo=({element:e,backdrop:n,surface:t,accentColor:r,visualOptions:a=z})=>{var i,s,u,l,d,m,c,p,y,g,S,v;e.style.setProperty("--carma-annotation-text-overlay-font-family",a.text.fontFamily),e.style.setProperty("--carma-annotation-text-overlay-font-weight",String(a.text.fontWeight)),r&&e.style.setProperty("--carma-annotation-text-overlay-glow-color",r),e.dataset.annotationThemeStyle=a.appearance.themeStyle,e.dataset.annotationTextOverlayBackgroundStyle=a.background.style,typeof a.background.surfaceAlpha=="number"&&Number.isFinite(a.background.surfaceAlpha)&&!((i=a.background.color)!=null&&i.trim())&&e.style.setProperty("--carma-annotation-text-overlay-backdrop-background",`rgba(${No[a.appearance.themeStyle]}, ${Math.min(Math.max(a.background.surfaceAlpha,0),1)})`);const o=a.background.showBackdrop!==!1;n.style.display=o?"block":"none",t.style.display=o?"block":"none",(s=a.text.color)!=null&&s.trim()&&e.style.setProperty("--carma-annotation-text-overlay-text-color",a.text.color),(u=a.text.blendMode)!=null&&u.trim()&&e.style.setProperty("--carma-annotation-text-overlay-text-blend-mode",a.text.blendMode),(l=a.background.color)!=null&&l.trim()&&e.style.setProperty("--carma-annotation-text-overlay-backdrop-background",a.background.color),(d=a.background.blendMode)!=null&&d.trim()&&e.style.setProperty("--carma-annotation-text-overlay-backdrop-blend-mode",a.background.blendMode),(m=a.surface.blendMode)!=null&&m.trim()&&e.style.setProperty("--carma-annotation-text-overlay-surface-blend-mode",a.surface.blendMode),(p=(c=a.text.echo)==null?void 0:c.color)!=null&&p.trim()&&e.style.setProperty("--carma-annotation-text-overlay-text-echo-color",a.text.echo.color),(g=(y=a.text.echo)==null?void 0:y.blendMode)!=null&&g.trim()&&e.style.setProperty("--carma-annotation-text-overlay-text-echo-blend-mode",a.text.echo.blendMode),oe({element:e,value:(S=a.text.echo)==null?void 0:S.blurPx,property:"--carma-annotation-text-overlay-text-echo-blur-px",unit:"px",min:0}),oe({element:e,value:(v=a.text.echo)==null?void 0:v.opacity,property:"--carma-annotation-text-overlay-text-echo-opacity",min:0,max:1}),oe({element:e,value:a.background.blurPx,property:"--carma-annotation-text-overlay-surface-blur-px",unit:"px",min:0}),oe({element:e,value:a.background.brightnessPct,property:"--carma-annotation-text-overlay-surface-brightness-pct",unit:"%",min:0}),oe({element:e,value:a.background.saturatePct,property:"--carma-annotation-text-overlay-surface-saturate-pct",unit:"%",min:0}),oe({element:e,value:a.background.radiusEx,property:"--carma-annotation-text-overlay-backdrop-radius",unit:"ex",min:0}),oe({element:e,value:a.background.edgeBlurPx,property:"--carma-annotation-text-overlay-surface-edge-blur-px",unit:"px",min:0}),(typeof a.surface.paddingBlockEx=="number"||typeof a.surface.paddingInlineEx=="number")&&(e.style.setProperty("--carma-annotation-text-overlay-padding-block",`${typeof a.surface.paddingBlockEx=="number"&&Number.isFinite(a.surface.paddingBlockEx)?Math.max(a.surface.paddingBlockEx,0):ze.paddingBlockEx}ex`),e.style.setProperty("--carma-annotation-text-overlay-padding-inline",`${typeof a.surface.paddingInlineEx=="number"&&Number.isFinite(a.surface.paddingInlineEx)?Math.max(a.surface.paddingInlineEx,0):ze.paddingInlineEx}ex`)),(typeof a.background.insetBlockEx=="number"||typeof a.background.insetInlineEx=="number")&&e.style.setProperty("--carma-annotation-text-overlay-backdrop-inset",`${typeof a.background.insetBlockEx=="number"&&Number.isFinite(a.background.insetBlockEx)?a.background.insetBlockEx:ze.backdropInsetBlockEx}ex ${typeof a.background.insetInlineEx=="number"&&Number.isFinite(a.background.insetInlineEx)?a.background.insetInlineEx:ze.backdropInsetInlineEx}ex`)},bo=(e,n)=>{n&&(n.fontSize&&e.style.setProperty("--carma-annotation-text-overlay-font-size",n.fontSize),n.fontWeight!==void 0&&e.style.setProperty("--carma-annotation-text-overlay-font-weight",String(n.fontWeight)),n.letterSpacing&&e.style.setProperty("--carma-annotation-text-overlay-letter-spacing",n.letterSpacing),typeof n.textEchoBlurPx=="number"&&e.style.setProperty("--carma-annotation-text-overlay-text-echo-blur-px",`${n.textEchoBlurPx}px`),n.textEchoShadow&&e.style.setProperty("--carma-annotation-text-overlay-text-echo-shadow",n.textEchoShadow))},ar=({accentColor:e,visualOptions:n,styleOptions:t})=>{const r=Le("div",Ee.root),a=Le("div",Ee.backdrop),o=Le("div",Ee.surface),i=Le("div",Ee.textEcho),s=Le("div",Ee.text);return i.dataset.annotationTextOverlayTextEcho="true",s.dataset.annotationTextOverlayText="foreground",xo({element:r,backdrop:a,surface:o,textEcho:i,text:s,accentColor:e,visualOptions:n}),bo(r,t),r.append(a,o,i,s),r},So=e=>e.querySelector('[data-annotation-text-overlay-text="foreground"]'),ho=e=>e.querySelector('[data-annotation-text-overlay-text-echo="true"]'),ir=(e,n)=>{const t=So(e),r=ho(e);t&&t.textContent!==n&&(t.textContent=n),r&&r.textContent!==n&&(r.textContent=n)},Qe=(e,n)=>{Object.assign(e.style,n)},vt=Object.freeze({className:"carma-annotation-overlay-line-label",frameClassName:"carma-annotation-overlay-line-label__frame"}),vo=Object.freeze({direct:{labelOffsetPx:Re.lineLabelOffsetPx},vertical:{labelOffsetPx:Re.lineLabelOffsetPx,labelFlippedBaselineOffsetPx:jn.verticalFlippedBaselineOffsetPx,labelRotationMode:$r.CLOCKWISE},horizontal:{labelOffsetPx:Re.lineLabelOffsetPx}}),Tt=(e,n)=>{const t=document.createElement(e);return t.className=n,t},To=e=>{const n=e.dataset.annotationOverlayLineLabelShortEdgeOffsetPx,t=n?Number(n):Number.NaN;return Number.isFinite(t)?t:z.layout.shortEdgeOffsetPx},or=e=>e.dataset.annotationOverlayLineLabelKind==="vertical"||e.dataset.annotationOverlayLineLabelKind==="horizontal"?e.dataset.annotationOverlayLineLabelKind:"direct",Io=e=>or(e)==="vertical",Ao=({kind:e,outsideReferencePoint:n,anchorRatio:t})=>({...vo[e],anchorRatio:t===void 0?void 0:Ur(t),getLabelOutsideReferencePoint:n?()=>({x:n.x,y:n.y}):void 0}),ko=({x:e,y:n,angleRad:t,anchor:r})=>`translate(${Math.round(e)}px, ${Math.round(n)}px) ${r==="left"?"translate(0%, -50%)":r==="right"?"translate(-100%, -50%)":"translate(-50%, -50%)"} rotate(${t}rad)`,Eo=(e,n,t=ua.LABEL)=>{const r=ya(e,t);if(!r)return null;const a=document.createElement("div");return a.id=n,a.dataset.annotationOverlayLayer="true",Qe(a,{position:"absolute",inset:"0",overflow:"hidden",pointerEvents:"none",userSelect:"none",webkitUserSelect:"none",zIndex:"auto"}),r.appendChild(a),a},Js=Eo,Lo=e=>{e==null||e.remove()},Qs=Lo,el=e=>{const n=new Jr,t=n.update.bind(n);return n.update=r=>{if(!(r.passes.pick&&!r.passes.render))return t(r)},e.primitives.add(n),n},nl=(e,n)=>{if(!(!n||!ta(e)))try{if(typeof n.isDestroyed=="function"&&n.isDestroyed())return;e.primitives.remove(n)}catch{}},sr=e=>Qr.fromType("Color",{color:Kn.fromCssColorString(e)??Kn.WHITE}),tl=(e,n,t,r)=>({polyline:e.add({id:n,positions:[C.ZERO,C.ZERO],width:(r==null?void 0:r.width)??Re.lineStrokeWidthPx,material:sr(t),show:!1}),colorCss:t}),rl=(e,n)=>{e.colorCss!==n&&(e.polyline.material=sr(n),e.colorCss=n)},al=e=>{e.polyline.show=!1},il=(e,n)=>{e.polyline.positions=[...n],e.polyline.show=n.length>=2},gn=(e,n)=>{const t=$n(n),r=Tt("div",vt.className),a=Tt("div",vt.frameClassName),o=ar({accentColor:e,visualOptions:t});return r.dataset.annotationOverlayLineLabelShortEdgeOffsetPx=String(t.layout.shortEdgeOffsetPx),a.append(o),r.appendChild(a),r},ol=e=>{const n=$n(e),t=gn(T.colors.componentLabelAccents.direct,n);t.dataset.annotationOverlayLineLabelKind="direct";const r=gn(T.colors.componentLabelAccents.vertical,n);r.dataset.annotationOverlayLineLabelKind="vertical";const a=gn(T.colors.componentLabelAccents.horizontal,n);return a.dataset.annotationOverlayLineLabelKind="horizontal",{direct:t,vertical:r,horizontal:a}},It=(e,n)=>{if(!(n!=null&&n.screenPosition)){e.style.display="none";return}ir(e,n.text),e.style.display="inline-grid",e.style.transform=`translate(${Math.round(n.screenPosition.x)}px, ${Math.round(n.screenPosition.y)}px) translate(-50%, -50%)`},sl=({overlayLayer:e,accentColor:n,visualOptions:t})=>{const r=ar({accentColor:n,visualOptions:$n(t),styleOptions:Co});return r.dataset.annotationOverlayLineLabelKind="area",Qe(r,{position:"absolute",left:"0",top:"0",display:"none",willChange:"transform"}),e==null||e.appendChild(r),{setState:a=>It(r,a),clear:()=>It(r,null),destroy:()=>r.remove()}},ll=e=>{e.direct.style.display="none",e.vertical.style.display="none",e.horizontal.style.display="none"},lr=(e,n)=>{Qe(e,{width:`${n.pixelSize}px`,height:`${n.pixelSize}px`,border:`${n.outlineWidth}px solid ${n.outline}`,background:n.fill})},Ro=(e=tr.point)=>{const n=document.createElement("div");return Qe(n,{position:"absolute",left:"0",top:"0",display:"none",borderRadius:"999px",transform:"translate(-50%, -50%)",boxSizing:"border-box",pointerEvents:"none",userSelect:"none",webkitUserSelect:"none",willChange:"transform"}),lr(n,e),n},Po=({overlayLayer:e,pointMarkers:n,count:t,style:r})=>{for(;n.length<t;){const a=Ro(r);n.push(a),e.appendChild(a)}},ul=e=>{e.forEach(n=>{n.style.display="none"})},dl=({scene:e,overlayLayer:n,pointMarkers:t,coordinates:r,style:a=tr.point})=>{Po({overlayLayer:n,pointMarkers:t,count:r.length,style:a}),r.forEach((o,i)=>{const s=t[i];if(!s)return;lr(s,a);const u=ra.worldToWindowCoordinates(e,bn(o));if(!ea(u)){s.style.display="none";return}s.style.display="block",s.style.transform=`translate(${Math.round(u.x)}px, ${Math.round(u.y)}px) translate(-50%, -50%)`}),t.slice(r.length).forEach(o=>{o.style.display="none"})},_o=e=>qt(e>ce||e<-ce?e+Pe:e),Oo=e=>{let n=qt(e);return n>ce?n=n-Pe:n<-ce&&(n=n+Pe),n},qo=({angleRad:e,lineSide:n})=>Math.abs(Math.abs(e)-ce)>jn.verticalBaselineAngleEpsilonRad?e:n==="left"?ce:-ce,wo=({deltaX:e,deltaY:n,lineSide:t,flipReadingDirection:r,forceHorizontal:a})=>{if(a)return 0;const o=_o(Math.atan2(n,e)),i=r?o>=0?o-Pe:o+Pe:o;return qo({angleRad:Oo(i),lineSide:t})},Mo=({start:e,end:n,kind:t,outsideReferencePoint:r,shortEdgeOffsetPx:a=z.layout.shortEdgeOffsetPx,useShortEdgeRules:o=!0,flipReadingDirection:i=!1,previousShouldFlip:s=!1,anchorRatio:u})=>{const l=Wr({svgLine:{start:{x:e.x,y:e.y},end:{x:n.x,y:n.y}},options:Ao({kind:t,outsideReferencePoint:r,anchorRatio:u}),previousShouldFlip:s,sideSwitchThresholdPx:jn.sideHysteresisPx});if(!l)return null;const d=n.x-e.x,m=n.y-e.y;if(o&&l.lineLengthPx<Re.lineLabelMinLengthPx){const c=l.normalX>=0,p=c?"left":"right";return{x:l.midX+l.normalX*a,y:l.midY+l.normalY*a,angleRad:wo({deltaX:d,deltaY:m,lineSide:p,flipReadingDirection:i,forceHorizontal:!0}),anchor:c?"left":"right",anchorRatio:l.anchorRatio,isShortEdge:!0,shouldFlip:l.shouldFlip,normalX:l.normalX,normalY:l.normalY}}return{x:l.textX,y:l.textY,angleRad:l.angleRad,anchor:"center",anchorRatio:l.anchorRatio,isShortEdge:!1,shouldFlip:l.shouldFlip,normalX:l.normalX,normalY:l.normalY}},cl=({element:e,text:n,start:t,end:r,outsideReferencePoint:a,flipReadingDirection:o=!1,anchorRatio:i})=>{const s=Mo({start:t,end:r,kind:or(e),outsideReferencePoint:a,shortEdgeOffsetPx:To(e),useShortEdgeRules:Io(e),flipReadingDirection:o,anchorRatio:i,previousShouldFlip:e.dataset.annotationOverlayLineLabelNormalFlip==="1"});if(!s){e.style.display="none";return}ir(e,n),e.style.display="block",e.dataset.annotationOverlayLineLabelShortEdge=s.isShortEdge?"true":"false",e.dataset.annotationOverlayLineLabelAnchorRatio=`${s.anchorRatio}`,e.dataset.annotationOverlayLineLabelNormalFlip=s.shouldFlip?"1":"0",e.style.transform=ko(s)},ml=({directLabelText:e,verticalLabelText:n,horizontalLabelText:t})=>({showVerticalLabel:n!==null&&n!==e,showHorizontalLabel:t!==null&&t!==e}),gl=()=>({cartographicA:new xn,cartographicB:new xn,auxiliaryPoint:new C,auxiliaryScreen:new na}),yl=({scene:e,anchorPointECEF:n,targetPointECEF:t,scratch:r})=>{const a=e.globe.ellipsoid,o=a.cartesianToCartographic(n,r.cartographicA),i=a.cartesianToCartographic(t,r.cartographicB);return!o||!i?null:C.fromRadians(o.longitude,o.latitude,i.height??0,a,r.auxiliaryPoint)},fl=e=>{const n=La(e);return{longitude:n.longitude,latitude:n.latitude,altitude:ka(n.altitude)}},pl=({firstCorner:e,oppositeCorner:n})=>{const t=bn(e),r=bn(n),a=Ft(t,r);return a?[t,a.adjacentHorizontalCorner,r,a.adjacentVerticalCorner,t]:null},Bo=Object.freeze({longPressDurationMs:320}),Fo=({interactive:e,onClick:n,onHoverChange:t,onLongPress:r,longPressDurationMs:a=Bo.longPressDurationMs,markerStyle:o})=>{const[i,s]=k.useState(!1),u=k.useRef(void 0),l=k.useRef(!1),d=k.useCallback(()=>{u.current!==void 0&&(window.clearTimeout(u.current),u.current=void 0)},[]),m=k.useCallback(S=>{if(S.stopPropagation(),S.button!==0||!r){d();return}l.current=!1,d(),u.current=window.setTimeout(()=>{l.current=!0,r()},a)},[d,a,r]),c=k.useCallback(()=>{d()},[d]),p=k.useCallback(S=>{if(S.stopPropagation(),l.current){l.current=!1;return}n==null||n()},[n]),y=k.useCallback(()=>{s(!0),t==null||t(!0)},[t]),g=k.useCallback(()=>{d(),s(!1),t==null||t(!1)},[d,t]);return k.useEffect(()=>d,[d]),f.jsx("div",{"data-runtime-point-marker-shell":"true",style:{position:"relative",width:"0px",height:"0px",overflow:"visible",pointerEvents:"none"},children:f.jsx("div",{"data-runtime-point-marker-circle":"true",style:{position:"absolute",left:"0px",top:"0px",transform:i?`translate(-50%, -50%) scale(${Ot.hover.scale})`:"translate(-50%, -50%)",borderRadius:"999px",boxSizing:"border-box",pointerEvents:e?"auto":"none",cursor:e?"pointer":"default",transition:Vr(),boxShadow:i?Gr():"none",filter:i?Xr():"none",...o},onClick:e?p:void 0,onMouseDown:e?m:void 0,onMouseUp:e?c:void 0,onMouseEnter:e?y:void 0,onMouseLeave:e?g:void 0})})};Fo.__docgenInfo={description:"",methods:[],displayName:"PointMarkerOverlayShell",props:{interactive:{required:!0,tsType:{name:"boolean"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onHoverChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(hovered: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"hovered"}],return:{name:"void"}}},description:""},onLongPress:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},longPressDurationMs:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"pointMarkerVisualizerDefaults.longPressDurationMs",computed:!0}},markerStyle:{required:!1,tsType:{name:"CSSProperties"},description:""}}};const Cl={RIGHTMOST_SCREEN_SPACE:"rightmost-screen-space",LEFTMOST_SCREEN_SPACE:"leftmost-screen-space"},Nl={START_COORDINATE:"start-coordinate",END_COORDINATE:"end-coordinate"},xl={POINT_LABEL:"point-label",LINE_BLEND:"line-blend"},bl={GROUND:"ground",COPLANAR:"coplanar"},Do={MIN:1,MAX:1400,LOG_SCALE:64};Object.freeze({layoutConfig:aa(void 0),markerPixelSize:10,markerOutlineWidth:T.sizes.pointOutlineWidth,stemColor:T.colors.surface,activeMoveGizmoLabelZIndex:Do.MAX+1});Object.freeze({...Yr({markerDiameterPx:T.sizes.pointPixelSize,markerStrokeWidthPx:T.sizes.pointOutlineWidth}),tickColor:Ot.colors.surfaceStrong,minOverlayZIndex:Kr.zIndex.interactionHandleFloor});Object.freeze({cornerOverlay:Object.freeze({minBoxPx:20,paddingPx:6,targetRadiusPx:20,segments:20,strokeWidthPx:1.25,color:xa(),straightHitTargetPx:20})});function Ae(e,n,t){e.prototype=n.prototype=t,t.constructor=e}function Be(e,n){var t=Object.create(e.prototype);for(var r in n)t[r]=n[r];return t}function re(){}var pe=.7,Te=1/pe,zo=/^#([0-9a-f]{3})$/,Ho=/^#([0-9a-f]{6})$/,jo=/^rgb\(\s*([-+]?\d+)\s*,\s*([-+]?\d+)\s*,\s*([-+]?\d+)\s*\)$/,$o=/^rgb\(\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*\)$/,Wo=/^rgba\(\s*([-+]?\d+)\s*,\s*([-+]?\d+)\s*,\s*([-+]?\d+)\s*,\s*([-+]?\d+(?:\.\d+)?)\s*\)$/,Uo=/^rgba\(\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)\s*\)$/,Vo=/^hsl\(\s*([-+]?\d+(?:\.\d+)?)\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*\)$/,Go=/^hsla\(\s*([-+]?\d+(?:\.\d+)?)\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)\s*\)$/,At={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};Ae(re,Wn,{displayable:function(){return this.rgb().displayable()},toString:function(){return this.rgb()+""}});function Wn(e){var n;return e=(e+"").trim().toLowerCase(),(n=zo.exec(e))?(n=parseInt(n[1],16),new E(n>>8&15|n>>4&240,n>>4&15|n&240,(n&15)<<4|n&15,1)):(n=Ho.exec(e))?kt(parseInt(n[1],16)):(n=jo.exec(e))?new E(n[1],n[2],n[3],1):(n=$o.exec(e))?new E(n[1]*255/100,n[2]*255/100,n[3]*255/100,1):(n=Wo.exec(e))?Et(n[1],n[2],n[3],n[4]):(n=Uo.exec(e))?Et(n[1]*255/100,n[2]*255/100,n[3]*255/100,n[4]):(n=Vo.exec(e))?Lt(n[1],n[2]/100,n[3]/100,1):(n=Go.exec(e))?Lt(n[1],n[2]/100,n[3]/100,n[4]):At.hasOwnProperty(e)?kt(At[e]):e==="transparent"?new E(NaN,NaN,NaN,0):null}function kt(e){return new E(e>>16&255,e>>8&255,e&255,1)}function Et(e,n,t,r){return r<=0&&(e=n=t=NaN),new E(e,n,t,r)}function Un(e){return e instanceof re||(e=Wn(e)),e?(e=e.rgb(),new E(e.r,e.g,e.b,e.opacity)):new E}function ur(e,n,t,r){return arguments.length===1?Un(e):new E(e,n,t,r??1)}function E(e,n,t,r){this.r=+e,this.g=+n,this.b=+t,this.opacity=+r}Ae(E,ur,Be(re,{brighter:function(e){return e=e==null?Te:Math.pow(Te,e),new E(this.r*e,this.g*e,this.b*e,this.opacity)},darker:function(e){return e=e==null?pe:Math.pow(pe,e),new E(this.r*e,this.g*e,this.b*e,this.opacity)},rgb:function(){return this},displayable:function(){return 0<=this.r&&this.r<=255&&0<=this.g&&this.g<=255&&0<=this.b&&this.b<=255&&0<=this.opacity&&this.opacity<=1},toString:function(){var e=this.opacity;return e=isNaN(e)?1:Math.max(0,Math.min(1,e)),(e===1?"rgb(":"rgba(")+Math.max(0,Math.min(255,Math.round(this.r)||0))+", "+Math.max(0,Math.min(255,Math.round(this.g)||0))+", "+Math.max(0,Math.min(255,Math.round(this.b)||0))+(e===1?")":", "+e+")")}}));function Lt(e,n,t,r){return r<=0?e=n=t=NaN:t<=0||t>=1?e=n=NaN:n<=0&&(e=NaN),new W(e,n,t,r)}function Xo(e){if(e instanceof W)return new W(e.h,e.s,e.l,e.opacity);if(e instanceof re||(e=Wn(e)),!e)return new W;if(e instanceof W)return e;e=e.rgb();var n=e.r/255,t=e.g/255,r=e.b/255,a=Math.min(n,t,r),o=Math.max(n,t,r),i=NaN,s=o-a,u=(o+a)/2;return s?(n===o?i=(t-r)/s+(t<r)*6:t===o?i=(r-n)/s+2:i=(n-t)/s+4,s/=u<.5?o+a:2-o-a,i*=60):s=u>0&&u<1?0:i,new W(i,s,u,e.opacity)}function Yo(e,n,t,r){return arguments.length===1?Xo(e):new W(e,n,t,r??1)}function W(e,n,t,r){this.h=+e,this.s=+n,this.l=+t,this.opacity=+r}Ae(W,Yo,Be(re,{brighter:function(e){return e=e==null?Te:Math.pow(Te,e),new W(this.h,this.s,this.l*e,this.opacity)},darker:function(e){return e=e==null?pe:Math.pow(pe,e),new W(this.h,this.s,this.l*e,this.opacity)},rgb:function(){var e=this.h%360+(this.h<0)*360,n=isNaN(e)||isNaN(this.s)?0:this.s,t=this.l,r=t+(t<.5?t:1-t)*n,a=2*t-r;return new E(yn(e>=240?e-240:e+120,a,r),yn(e,a,r),yn(e<120?e+240:e-120,a,r),this.opacity)},displayable:function(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1}}));function yn(e,n,t){return(e<60?n+(t-n)*e/60:e<180?t:e<240?n+(t-n)*(240-e)/60:n)*255}var dr=Math.PI/180,cr=180/Math.PI,Xe=18,mr=.95047,gr=1,yr=1.08883,fr=4/29,be=6/29,pr=3*be*be,Ko=be*be*be;function Vn(e){if(e instanceof X)return new X(e.l,e.a,e.b,e.opacity);if(e instanceof ee){var n=e.h*dr;return new X(e.l,Math.cos(n)*e.c,Math.sin(n)*e.c,e.opacity)}e instanceof E||(e=Un(e));var t=Nn(e.r),r=Nn(e.g),a=Nn(e.b),o=fn((.4124564*t+.3575761*r+.1804375*a)/mr),i=fn((.2126729*t+.7151522*r+.072175*a)/gr),s=fn((.0193339*t+.119192*r+.9503041*a)/yr);return new X(116*i-16,500*(o-i),200*(i-s),e.opacity)}function Zo(e,n,t,r){return arguments.length===1?Vn(e):new X(e,n,t,r??1)}function X(e,n,t,r){this.l=+e,this.a=+n,this.b=+t,this.opacity=+r}Ae(X,Zo,Be(re,{brighter:function(e){return new X(this.l+Xe*(e??1),this.a,this.b,this.opacity)},darker:function(e){return new X(this.l-Xe*(e??1),this.a,this.b,this.opacity)},rgb:function(){var e=(this.l+16)/116,n=isNaN(this.a)?e:e+this.a/500,t=isNaN(this.b)?e:e-this.b/200;return e=gr*pn(e),n=mr*pn(n),t=yr*pn(t),new E(Cn(3.2404542*n-1.5371385*e-.4985314*t),Cn(-.969266*n+1.8760108*e+.041556*t),Cn(.0556434*n-.2040259*e+1.0572252*t),this.opacity)}}));function fn(e){return e>Ko?Math.pow(e,1/3):e/pr+fr}function pn(e){return e>be?e*e*e:pr*(e-fr)}function Cn(e){return 255*(e<=.0031308?12.92*e:1.055*Math.pow(e,1/2.4)-.055)}function Nn(e){return(e/=255)<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)}function Jo(e){if(e instanceof ee)return new ee(e.h,e.c,e.l,e.opacity);e instanceof X||(e=Vn(e));var n=Math.atan2(e.b,e.a)*cr;return new ee(n<0?n+360:n,Math.sqrt(e.a*e.a+e.b*e.b),e.l,e.opacity)}function Qo(e,n,t,r){return arguments.length===1?Jo(e):new ee(e,n,t,r??1)}function ee(e,n,t,r){this.h=+e,this.c=+n,this.l=+t,this.opacity=+r}Ae(ee,Qo,Be(re,{brighter:function(e){return new ee(this.h,this.c,this.l+Xe*(e??1),this.opacity)},darker:function(e){return new ee(this.h,this.c,this.l-Xe*(e??1),this.opacity)},rgb:function(){return Vn(this).rgb()}}));var Cr=-.14861,Gn=1.78277,Xn=-.29227,en=-.90649,we=1.97294,Rt=we*en,Pt=we*Gn,_t=Gn*Xn-en*Cr;function es(e){if(e instanceof me)return new me(e.h,e.s,e.l,e.opacity);e instanceof E||(e=Un(e));var n=e.r/255,t=e.g/255,r=e.b/255,a=(_t*r+Rt*n-Pt*t)/(_t+Rt-Pt),o=r-a,i=(we*(t-a)-Xn*o)/en,s=Math.sqrt(i*i+o*o)/(we*a*(1-a)),u=s?Math.atan2(i,o)*cr-120:NaN;return new me(u<0?u+360:u,s,a,e.opacity)}function ns(e,n,t,r){return arguments.length===1?es(e):new me(e,n,t,r??1)}function me(e,n,t,r){this.h=+e,this.s=+n,this.l=+t,this.opacity=+r}Ae(me,ns,Be(re,{brighter:function(e){return e=e==null?Te:Math.pow(Te,e),new me(this.h,this.s,this.l*e,this.opacity)},darker:function(e){return e=e==null?pe:Math.pow(pe,e),new me(this.h,this.s,this.l*e,this.opacity)},rgb:function(){var e=isNaN(this.h)?0:(this.h+120)*dr,n=+this.l,t=isNaN(this.s)?0:this.s*n*(1-n),r=Math.cos(e),a=Math.sin(e);return new E(255*(n+t*(Cr*r+Gn*a)),255*(n+t*(Xn*r+en*a)),255*(n+t*(we*r)),this.opacity)}}));const Nr=ur(A.ACCENT_MEASUREMENTS).brighter(.1);Nr.opacity=.5;const ts=Object.freeze({id:"accent-measurements",label:"Measurements · Accent",colorPrimaryReduced:Nr.toString(),colorPrimary:A.ACCENT_MEASUREMENTS,lineColor:T.colors.surface,textColor:ve.label.textColor}),O=Object.freeze({scheme:ts,fontFamily:xe.fontFamily,contentFontWeight:xe.lineLabelFontWeight,badgeFontWeight:xe.badgeFontWeight,selection:ve.selection.highlightPalette}),Sl=e=>O,hl=Object.freeze({fontSize:xe.rootFontSizeRem,fontFamily:O.fontFamily,fontWeight:O.contentFontWeight,lineColor:O.scheme.lineColor,textBackgroundColor:O.scheme.colorPrimaryReduced,textColor:O.scheme.textColor,markerBackgroundColor:O.scheme.colorPrimary,markerTextColor:O.scheme.textColor,selectedBackgroundColor:O.selection.backgroundColor,selectedTextColor:O.selection.textColor,selectedGlowColor:O.selection.glowColor,selectedGlowRadiusPx:O.selection.glowRadiusPx,preserveFillOnSelection:O.selection.preserveFillOnSelection,hoverBackgroundColor:O.selection.hoverBackgroundColor,markerPixelSize:T.sizes.pointPixelSize,markerOutlineWidth:T.sizes.pointOutlineWidth});k.createContext(null);export{gl as $,ai as A,il as B,el as C,tl as D,ii as E,_ as F,Ta as G,va as H,Ia as I,Li as J,Eo as K,Lo as L,bl as M,ua as N,Ls as O,Nl as P,Js as Q,Cl as R,Qs as S,ul as T,dl as U,Rs as V,Ys as W,Na as X,sl as Y,As as Z,yl as _,j as a,$n as a0,gn as a1,pl as a2,fl as a3,Ps as a4,mo as a5,go as a6,Ks as a7,Zs as a8,xl as a9,tr as aa,La as ab,ka as ac,Es as ad,O as ae,Z as af,vs as ag,Ts as ah,Is as ai,de as aj,Os as ak,se as al,hl as am,ks as an,K as ao,Xs as ap,$s as aq,Fs as ar,_s as as,Sa as at,pa as au,Ft as av,ur as aw,Wn as ax,Fo as ay,Ne as b,fa as c,ve as d,Ie as e,ui as f,ci as g,_a as h,oi as i,li as j,on as k,P as l,T as m,cl as n,po as o,z as p,ol as q,Sl as r,ll as s,xe as t,Re as u,ml as v,b as w,nl as x,al as y,rl as z};
