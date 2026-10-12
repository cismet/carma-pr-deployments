import{j as E}from"./jsx-runtime-DNp_qQjF.js";import{r as p,R as U,b as di}from"./index-CSJjS6Ct.js";import{f as lr,C as ae,a as $e,r as $c}from"./index-D9NkO_DI.js";import{c as tl,a as Gt,b as ol,J as rl,K as Wc,l as Hr,n as Yc}from"./camera-local-mercator-fit-DyOAwNuI.js";import{d as ci,r as jt,i as al,b as il,T as Uo,P as Qc,M as Kc}from"./angles-O4gcnBa7.js";import{V as x,s as ba,g as sl,f as ll}from"./three.module-Dt7s5xph.js";import{c as We}from"./clamp-co6UzHBn.js";import{V as Un}from"./constants-C6-_E4xW.js";import{U as bn,b6 as Xc,a$ as Jc,c as pe,f as Te,z as mi,e as Nn,b as Na,w as ul,bv as yi,g as Zc,am as em,bw as dl,bx as nm,n as tm,p as ie,r as om,q as rm,o as am,a as Ho,aR as im,P as sm,C as cl,u as lm,by as um,l as dm,F as yt,bz as cm,bA as mm,aq as ym,ap as pm,bB as gm,bC as fm,bD as Am,X as vm,aX as Tm,bE as bm,B as Nm,bF as Im,bG as km,bH as hm,bI as Cm}from"./index-BpI4dU9S.js";import{i as Sm,C as Em,T as ml}from"./index-Bz0P977y.js";import{h as Om,l as yl,i as pl,k as Rm,q as gl,s as Lm,t as wm,u as xm,e as qm,A as _m,d as Pm,c as Mm,a as Dm,b as Bm}from"./StripChartPanel-B4uw9ffe.js";import{B as Ia,a as fl,u as Fm,r as Gm}from"./button-C6B-2fXQ.js";import{R as jm,a as Um,b as Hm}from"./InfoCircleFilled-BGKqvIyp.js";import{j as zm,K as pi,P as Vm,e as ka,b as Al,c as $m,u as Wm,z as Ym,g as Eo,R as Qm,C as Km}from"./index-03buElY0.js";import{p as ha,a as vl}from"./context-BYsd4OGq.js";import{S as Xm}from"./Skeleton-DlSgdNyR.js";import{u as Ca}from"./useLocale-DD3_j6hw.js";import{w as Jm}from"./PurePanel-D1_LBSDF.js";import{r as Zm}from"./index-D1cknlJ6.js";import{w as ur,x as so,y as ey,z as ny,A as ty,i as oy,B as ry,D as ay,C as iy,E as sy,f as zo,s as Tl,t as ly,F as Sa,G as bl,H as Nl,I as Il,m as kl,n as dr,S as uy,J as dy,l as Ea,K as cy,M as cr,L as my}from"./useLineSegmentVisualizers-CwmHx-Me.js";import{F as Ct}from"./locales-DbHdB30_.js";import{f as st,L as yy}from"./length-format-BQI28fDZ.js";import{c as Oa}from"./plane-basis-BMhQcvTN.js";import{i as py}from"./is-finite-number-DNiDh1l_.js";import{i as hl}from"./plane-intersections-DhJfyQJx.js";import{r as gy,P as Cl,s as fy,c as Ay,a as vy,L as Ty}from"./computePointLabelLayout-CH1gZACd.js";import{q as Sl,h as El,s as Ol,f as by,i as Ny,j as Iy,g as ky,n as hy,c as Cy,d as Sy,a as Ey}from"./geometry2d-CyyfBlyf.js";import{u as Oy}from"./useLineVisualizers-DSwtMydO.js";/* empty css                                      */import{z as Ry}from"./angle-normalization-9MH7zpFM.js";import{r as Ly,c as wy}from"./geospatial-camera-basis-83mTXhqz.js";import{g as xy,A as Rl}from"./cssAxisGizmoElement-CU0gfUN_.js";function qy(){const[e,n]=p.useState([]),t=p.useCallback(o=>(n(r=>[].concat(bn(r),[o])),()=>{n(r=>r.filter(a=>a!==o))}),[]);return[e,t]}function mr(e){return!!(e!=null&&e.then)}const Ll=e=>{const{type:n,children:t,prefixCls:o,buttonProps:r,close:a,autoFocus:i,emitEvent:s,isSilent:l,quitOnNullishReturnValue:u,actionFn:d}=e,c=p.useRef(!1),m=p.useRef(null),[y,g]=Xc(!1),f=function(){a==null||a.apply(void 0,arguments)};p.useEffect(()=>{let T=null;return i&&(T=setTimeout(()=>{var N;(N=m.current)===null||N===void 0||N.focus()})),()=>{T&&clearTimeout(T)}},[]);const A=T=>{mr(T)&&(g(!0),T.then(function(){g(!1,!0),f.apply(void 0,arguments),c.current=!1},N=>{if(g(!1,!0),c.current=!1,!(l!=null&&l()))return Promise.reject(N)}))},v=T=>{if(c.current)return;if(c.current=!0,!d){f();return}let N;if(s){if(N=d(T),u&&!mr(N)){c.current=!1,f(T);return}}else if(d.length)N=d(a),c.current=!1;else if(N=d(),!mr(N)){f();return}A(N)};return p.createElement(Ia,Object.assign({},fl(n),{onClick:v,loading:y,prefixCls:o},r,{ref:m}),t)},no=U.createContext({}),{Provider:wl}=no,gi=()=>{const{autoFocusButton:e,cancelButtonProps:n,cancelTextLocale:t,isSilent:o,mergedOkCancel:r,rootPrefixCls:a,close:i,onCancel:s,onConfirm:l}=p.useContext(no);return r?U.createElement(Ll,{isSilent:o,actionFn:s,close:function(){i==null||i.apply(void 0,arguments),l==null||l(!1)},autoFocus:e==="cancel",buttonProps:n,prefixCls:`${a}-btn`},t):null},fi=()=>{const{autoFocusButton:e,close:n,isSilent:t,okButtonProps:o,rootPrefixCls:r,okTextLocale:a,okType:i,onConfirm:s,onOk:l}=p.useContext(no);return U.createElement(Ll,{isSilent:t,type:i||"primary",actionFn:l,close:function(){n==null||n.apply(void 0,arguments),s==null||s(!0)},autoFocus:e==="ok",buttonProps:o,prefixCls:`${r}-btn`},a)};var xl=p.createContext({});function Ai(e,n,t){var o=n;return!o&&t&&(o="".concat(e,"-").concat(t)),o}function vi(e,n){var t=e["page".concat(n?"Y":"X","Offset")],o="scroll".concat(n?"Top":"Left");if(typeof t!="number"){var r=e.document;t=r.documentElement[o],typeof t!="number"&&(t=r.body[o])}return t}function _y(e){var n=e.getBoundingClientRect(),t={left:n.left,top:n.top},o=e.ownerDocument,r=o.defaultView||o.parentWindow;return t.left+=vi(r),t.top+=vi(r,!0),t}const Py=p.memo(function(e){var n=e.children;return n},function(e,n){var t=n.shouldUpdate;return!t});var Ti={width:0,height:0,overflow:"hidden",outline:"none"},My={outline:"none"},ql=U.forwardRef(function(e,n){var t=e.prefixCls,o=e.className,r=e.style,a=e.title,i=e.ariaId,s=e.footer,l=e.closable,u=e.closeIcon,d=e.onClose,c=e.children,m=e.bodyStyle,y=e.bodyProps,g=e.modalRender,f=e.onMouseDown,A=e.onMouseUp,v=e.holderRef,T=e.visible,N=e.forceRender,b=e.width,I=e.height,h=e.classNames,C=e.styles,k=U.useContext(xl),S=k.panel,O=Jc(v,S),R=p.useRef(),L=p.useRef(),_=p.useRef();U.useImperativeHandle(n,function(){return{focus:function(){var Q;(Q=_.current)===null||Q===void 0||Q.focus({preventScroll:!0})},changeActive:function(Q){var ue=document,K=ue.activeElement;Q&&K===L.current?R.current.focus({preventScroll:!0}):!Q&&K===R.current&&L.current.focus({preventScroll:!0})}}});var w={};b!==void 0&&(w.width=b),I!==void 0&&(w.height=I);var q=s?U.createElement("div",{className:pe("".concat(t,"-footer"),h==null?void 0:h.footer),style:Te({},C==null?void 0:C.footer)},s):null,D=a?U.createElement("div",{className:pe("".concat(t,"-header"),h==null?void 0:h.header),style:Te({},C==null?void 0:C.header)},U.createElement("div",{className:"".concat(t,"-title"),id:i},a)):null,B=p.useMemo(function(){return mi(l)==="object"&&l!==null?l:l?{closeIcon:u??U.createElement("span",{className:"".concat(t,"-close-x")})}:{}},[l,u,t]),H=ha(B,!0),z=mi(l)==="object"&&l.disabled,X=l?U.createElement("button",Nn({type:"button",onClick:d,"aria-label":"Close"},H,{className:"".concat(t,"-close"),disabled:z}),B.closeIcon):null,V=U.createElement("div",{className:pe("".concat(t,"-content"),h==null?void 0:h.content),style:C==null?void 0:C.content},X,D,U.createElement("div",Nn({className:pe("".concat(t,"-body"),h==null?void 0:h.body),style:Te(Te({},m),C==null?void 0:C.body)},y),c),q);return U.createElement("div",{key:"dialog-element",role:"dialog","aria-labelledby":a?i:null,"aria-modal":"true",ref:O,style:Te(Te({},r),w),className:pe(t,o),onMouseDown:f,onMouseUp:A},U.createElement("div",{tabIndex:0,ref:R,style:Ti,"aria-hidden":"true"}),U.createElement("div",{ref:_,tabIndex:-1,style:My},U.createElement(Py,{shouldUpdate:T||N},g?g(V):V)),U.createElement("div",{tabIndex:0,ref:L,style:Ti,"aria-hidden":"true"}))}),_l=p.forwardRef(function(e,n){var t=e.prefixCls,o=e.title,r=e.style,a=e.className,i=e.visible,s=e.forceRender,l=e.destroyOnClose,u=e.motionName,d=e.ariaId,c=e.onVisibleChanged,m=e.mousePosition,y=p.useRef(),g=p.useState(),f=Na(g,2),A=f[0],v=f[1],T={};A&&(T.transformOrigin=A);function N(){var b=_y(y.current);v(m&&(m.x||m.y)?"".concat(m.x-b.left,"px ").concat(m.y-b.top,"px"):"")}return p.createElement(ul,{visible:i,onVisibleChanged:c,onAppearPrepare:N,onEnterPrepare:N,forceRender:s,motionName:u,removeOnLeave:l,ref:y},function(b,I){var h=b.className,C=b.style;return p.createElement(ql,Nn({},e,{ref:n,title:o,ariaId:d,prefixCls:t,holderRef:I,style:Te(Te(Te({},C),r),T),className:pe(a,h)}))})});_l.displayName="Content";var Dy=function(n){var t=n.prefixCls,o=n.style,r=n.visible,a=n.maskProps,i=n.motionName,s=n.className;return p.createElement(ul,{key:"mask",visible:r,motionName:i,leavedClassName:"".concat(t,"-mask-hidden")},function(l,u){var d=l.className,c=l.style;return p.createElement("div",Nn({ref:u,style:Te(Te({},c),o),className:pe("".concat(t,"-mask"),d,s)},a))})},By=function(n){var t=n.prefixCls,o=t===void 0?"rc-dialog":t,r=n.zIndex,a=n.visible,i=a===void 0?!1:a,s=n.keyboard,l=s===void 0?!0:s,u=n.focusTriggerAfterClose,d=u===void 0?!0:u,c=n.wrapStyle,m=n.wrapClassName,y=n.wrapProps,g=n.onClose,f=n.afterOpenChange,A=n.afterClose,v=n.transitionName,T=n.animation,N=n.closable,b=N===void 0?!0:N,I=n.mask,h=I===void 0?!0:I,C=n.maskTransitionName,k=n.maskAnimation,S=n.maskClosable,O=S===void 0?!0:S,R=n.maskStyle,L=n.maskProps,_=n.rootClassName,w=n.classNames,q=n.styles,D=p.useRef(),B=p.useRef(),H=p.useRef(),z=p.useState(i),X=Na(z,2),V=X[0],$=X[1],Q=zm();function ue(){yi(B.current,document.activeElement)||(D.current=document.activeElement)}function K(){if(!yi(B.current,document.activeElement)){var G;(G=H.current)===null||G===void 0||G.focus()}}function se(G){if(G)K();else{if($(!1),h&&D.current&&d){try{D.current.focus({preventScroll:!0})}catch{}D.current=null}V&&(A==null||A())}f==null||f(G)}function de(G){g==null||g(G)}var Ne=p.useRef(!1),F=p.useRef(),M=function(){clearTimeout(F.current),Ne.current=!0},J=function(){F.current=setTimeout(function(){Ne.current=!1})},W=null;O&&(W=function(te){Ne.current?Ne.current=!1:B.current===te.target&&de(te)});function fe(G){if(l&&G.keyCode===pi.ESC){G.stopPropagation(),de(G);return}i&&G.keyCode===pi.TAB&&H.current.changeActive(!G.shiftKey)}p.useEffect(function(){i&&($(!0),ue())},[i]),p.useEffect(function(){return function(){clearTimeout(F.current)}},[]);var ce=Te(Te(Te({zIndex:r},c),q==null?void 0:q.wrapper),{},{display:V?null:"none"});return p.createElement("div",Nn({className:pe("".concat(o,"-root"),_)},ha(n,{data:!0})),p.createElement(Dy,{prefixCls:o,visible:h&&i,motionName:Ai(o,C,k),style:Te(Te({zIndex:r},R),q==null?void 0:q.mask),maskProps:L,className:w==null?void 0:w.mask}),p.createElement("div",Nn({tabIndex:-1,onKeyDown:fe,className:pe("".concat(o,"-wrap"),m,w==null?void 0:w.wrapper),ref:B,onClick:W,style:ce},y),p.createElement(_l,Nn({},n,{onMouseDown:M,onMouseUp:J,ref:H,closable:b,ariaId:Q,prefixCls:o,visible:i&&V,onClose:de,onVisibleChanged:se,motionName:Ai(o,v,T)}))))},Pl=function(n){var t=n.visible,o=n.getContainer,r=n.forceRender,a=n.destroyOnClose,i=a===void 0?!1:a,s=n.afterClose,l=n.panelRef,u=p.useState(t),d=Na(u,2),c=d[0],m=d[1],y=p.useMemo(function(){return{panel:l}},[l]);return p.useEffect(function(){t&&m(!0)},[t]),!r&&i&&!c?null:p.createElement(xl.Provider,{value:y},p.createElement(Vm,{open:t||r||c,autoDestroy:!1,getContainer:o,autoLock:t||c},p.createElement(By,Nn({},n,{destroyOnClose:i,afterClose:function(){s==null||s(),m(!1)}}))))};Pl.displayName="Dialog";function bi(e){if(e)return{closable:e.closable,closeIcon:e.closeIcon}}function Ni(e){const{closable:n,closeIcon:t}=e||{};return U.useMemo(()=>{if(!n&&(n===!1||t===!1||t===null))return!1;if(n===void 0&&t===void 0)return null;let o={closeIcon:typeof t!="boolean"&&t!==null?t:void 0};return n&&typeof n=="object"&&(o=Object.assign(Object.assign({},o),n)),o},[n,t])}function Ii(){const e={};for(var n=arguments.length,t=new Array(n),o=0;o<n;o++)t[o]=arguments[o];return t.forEach(r=>{r&&Object.keys(r).forEach(a=>{r[a]!==void 0&&(e[a]=r[a])})}),e}const Fy={};function Gy(e,n){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Fy;const o=Ni(e),r=Ni(n),a=U.useMemo(()=>Object.assign({closeIcon:U.createElement(ka,null)},t),[t]),i=U.useMemo(()=>o===!1?!1:o?Ii(a,r,o):r===!1?!1:r?Ii(a,r):a.closable?a:!1,[o,r,a]);return U.useMemo(()=>{if(i===!1)return[!1,null];const{closeIconRender:s}=a,{closeIcon:l}=i;let u=l;if(u!=null){s&&(u=s(l));const d=ha(i,!0);Object.keys(d).length&&(u=U.isValidElement(u)?U.cloneElement(u,d):U.createElement("span",Object.assign({},d),u))}return[!0,u]},[i,a])}const jy=()=>Zc()&&window.document.documentElement;function ki(){}const Uy=p.createContext({add:ki,remove:ki});function Hy(e){const n=p.useContext(Uy),t=p.useRef();return em(r=>{if(r){const a=e?r.querySelector(e):r;n.add(a),t.current=a}else n.remove(t.current)})}const hi=()=>{const{cancelButtonProps:e,cancelTextLocale:n,onCancel:t}=p.useContext(no);return U.createElement(Ia,Object.assign({onClick:t},e),n)},Ci=()=>{const{confirmLoading:e,okButtonProps:n,okType:t,okTextLocale:o,onOk:r}=p.useContext(no);return U.createElement(Ia,Object.assign({},fl(t),{loading:e,onClick:r},n),o)};function Ml(e,n){return U.createElement("span",{className:`${e}-close-x`},n||U.createElement(ka,{className:`${e}-close-icon`}))}const Dl=e=>{const{okText:n,okType:t="primary",cancelText:o,confirmLoading:r,onOk:a,onCancel:i,okButtonProps:s,cancelButtonProps:l,footer:u}=e,[d]=Ca("Modal",dl()),c=n||(d==null?void 0:d.okText),m=o||(d==null?void 0:d.cancelText),y={confirmLoading:r,okButtonProps:s,cancelButtonProps:l,okTextLocale:c,cancelTextLocale:m,okType:t,onOk:a,onCancel:i},g=U.useMemo(()=>y,bn(Object.values(y)));let f;return typeof u=="function"||typeof u>"u"?(f=U.createElement(U.Fragment,null,U.createElement(hi,null),U.createElement(Ci,null)),typeof u=="function"&&(f=u(f,{OkBtn:Ci,CancelBtn:hi})),f=U.createElement(wl,{value:g},f)):f=u,U.createElement(nm,{disabled:!1},f)},zy=new Al("antFadeIn",{"0%":{opacity:0},"100%":{opacity:1}}),Vy=new Al("antFadeOut",{"0%":{opacity:1},"100%":{opacity:0}}),$y=function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;const{antCls:t}=e,o=`${t}-fade`,r=n?"&":"";return[$m(o,zy,Vy,e.motionDurationMid,n),{[`
        ${r}${o}-enter,
        ${r}${o}-appear
      `]:{opacity:0,animationTimingFunction:"linear"},[`${r}${o}-leave`]:{animationTimingFunction:"linear"}}]};function Si(e){return{position:e,inset:0}}const Wy=e=>{const{componentCls:n,antCls:t}=e;return[{[`${n}-root`]:{[`${n}${t}-zoom-enter, ${n}${t}-zoom-appear`]:{transform:"none",opacity:0,animationDuration:e.motionDurationSlow,userSelect:"none"},[`${n}${t}-zoom-leave ${n}-content`]:{pointerEvents:"none"},[`${n}-mask`]:Object.assign(Object.assign({},Si("fixed")),{zIndex:e.zIndexPopupBase,height:"100%",backgroundColor:e.colorBgMask,pointerEvents:"none",[`${n}-hidden`]:{display:"none"}}),[`${n}-wrap`]:Object.assign(Object.assign({},Si("fixed")),{zIndex:e.zIndexPopupBase,overflow:"auto",outline:0,WebkitOverflowScrolling:"touch"})}},{[`${n}-root`]:$y(e)}]},Yy=e=>{const{componentCls:n}=e;return[{[`${n}-root`]:{[`${n}-wrap-rtl`]:{direction:"rtl"},[`${n}-centered`]:{textAlign:"center","&::before":{display:"inline-block",width:0,height:"100%",verticalAlign:"middle",content:'""'},[n]:{top:0,display:"inline-block",paddingBottom:0,textAlign:"start",verticalAlign:"middle"}},[`@media (max-width: ${e.screenSMMax}px)`]:{[n]:{maxWidth:"calc(100vw - 16px)",margin:`${ie(e.marginXS)} auto`},[`${n}-centered`]:{[n]:{flex:1}}}}},{[n]:Object.assign(Object.assign({},om(e)),{pointerEvents:"none",position:"relative",top:100,width:"auto",maxWidth:`calc(100vw - ${ie(e.calc(e.margin).mul(2).equal())})`,margin:"0 auto",paddingBottom:e.paddingLG,[`${n}-title`]:{margin:0,color:e.titleColor,fontWeight:e.fontWeightStrong,fontSize:e.titleFontSize,lineHeight:e.titleLineHeight,wordWrap:"break-word"},[`${n}-content`]:{position:"relative",backgroundColor:e.contentBg,backgroundClip:"padding-box",border:0,borderRadius:e.borderRadiusLG,boxShadow:e.boxShadow,pointerEvents:"auto",padding:e.contentPadding},[`${n}-close`]:Object.assign({position:"absolute",top:e.calc(e.modalHeaderHeight).sub(e.modalCloseBtnSize).div(2).equal(),insetInlineEnd:e.calc(e.modalHeaderHeight).sub(e.modalCloseBtnSize).div(2).equal(),zIndex:e.calc(e.zIndexPopupBase).add(10).equal(),padding:0,color:e.modalCloseIconColor,fontWeight:e.fontWeightStrong,lineHeight:1,textDecoration:"none",background:"transparent",borderRadius:e.borderRadiusSM,width:e.modalCloseBtnSize,height:e.modalCloseBtnSize,border:0,outline:0,cursor:"pointer",transition:`color ${e.motionDurationMid}, background-color ${e.motionDurationMid}`,"&-x":{display:"flex",fontSize:e.fontSizeLG,fontStyle:"normal",lineHeight:`${ie(e.modalCloseBtnSize)}`,justifyContent:"center",textTransform:"none",textRendering:"auto"},"&:hover":{color:e.modalCloseIconHoverColor,backgroundColor:e.colorBgTextHover,textDecoration:"none"},"&:active":{backgroundColor:e.colorBgTextActive}},rm(e)),[`${n}-header`]:{color:e.colorText,background:e.headerBg,borderRadius:`${ie(e.borderRadiusLG)} ${ie(e.borderRadiusLG)} 0 0`,marginBottom:e.headerMarginBottom,padding:e.headerPadding,borderBottom:e.headerBorderBottom},[`${n}-body`]:{fontSize:e.fontSize,lineHeight:e.lineHeight,wordWrap:"break-word",padding:e.bodyPadding,[`${n}-body-skeleton`]:{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center",margin:`${ie(e.margin)} auto`}},[`${n}-footer`]:{textAlign:"end",background:e.footerBg,marginTop:e.footerMarginTop,padding:e.footerPadding,borderTop:e.footerBorderTop,borderRadius:e.footerBorderRadius,[`> ${e.antCls}-btn + ${e.antCls}-btn`]:{marginInlineStart:e.marginXS}},[`${n}-open`]:{overflow:"hidden"}})},{[`${n}-pure-panel`]:{top:"auto",padding:0,display:"flex",flexDirection:"column",[`${n}-content,
          ${n}-body,
          ${n}-confirm-body-wrapper`]:{display:"flex",flexDirection:"column",flex:"auto"},[`${n}-confirm-body`]:{marginBottom:"auto"}}}]},Qy=e=>{const{componentCls:n}=e;return{[`${n}-root`]:{[`${n}-wrap-rtl`]:{direction:"rtl",[`${n}-confirm-body`]:{direction:"rtl"}}}}},Bl=e=>{const n=e.padding,t=e.fontSizeHeading5,o=e.lineHeightHeading5;return am(e,{modalHeaderHeight:e.calc(e.calc(o).mul(t).equal()).add(e.calc(n).mul(2).equal()).equal(),modalFooterBorderColorSplit:e.colorSplit,modalFooterBorderStyle:e.lineType,modalFooterBorderWidth:e.lineWidth,modalCloseIconColor:e.colorIcon,modalCloseIconHoverColor:e.colorIconHover,modalCloseBtnSize:e.controlHeight,modalConfirmIconSize:e.fontHeight,modalTitleHeight:e.calc(e.titleFontSize).mul(e.titleLineHeight).equal()})},Fl=e=>({footerBg:"transparent",headerBg:e.colorBgElevated,titleLineHeight:e.lineHeightHeading5,titleFontSize:e.fontSizeHeading5,contentBg:e.colorBgElevated,titleColor:e.colorTextHeading,contentPadding:e.wireframe?0:`${ie(e.paddingMD)} ${ie(e.paddingContentHorizontalLG)}`,headerPadding:e.wireframe?`${ie(e.padding)} ${ie(e.paddingLG)}`:0,headerBorderBottom:e.wireframe?`${ie(e.lineWidth)} ${e.lineType} ${e.colorSplit}`:"none",headerMarginBottom:e.wireframe?0:e.marginXS,bodyPadding:e.wireframe?e.paddingLG:0,footerPadding:e.wireframe?`${ie(e.paddingXS)} ${ie(e.padding)}`:0,footerBorderTop:e.wireframe?`${ie(e.lineWidth)} ${e.lineType} ${e.colorSplit}`:"none",footerBorderRadius:e.wireframe?`0 0 ${ie(e.borderRadiusLG)} ${ie(e.borderRadiusLG)}`:0,footerMarginTop:e.wireframe?0:e.marginSM,confirmBodyPadding:e.wireframe?`${ie(e.padding*2)} ${ie(e.padding*2)} ${ie(e.paddingLG)}`:0,confirmIconMarginInlineEnd:e.wireframe?e.margin:e.marginSM,confirmBtnsMarginTop:e.wireframe?e.marginLG:e.marginSM}),Gl=tm("Modal",e=>{const n=Bl(e);return[Yy(n),Qy(n),Wy(n),Sm(n,"zoom")]},Fl,{unitless:{titleLineHeight:!0}});var Ky=function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)n.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(t[o[r]]=e[o[r]]);return t};let zr;const Xy=e=>{zr={x:e.pageX,y:e.pageY},setTimeout(()=>{zr=null},100)};jy()&&document.documentElement.addEventListener("click",Xy,!0);const jl=e=>{var n;const{getPopupContainer:t,getPrefixCls:o,direction:r,modal:a}=p.useContext(Ho),i=$=>{const{onCancel:Q}=e;Q==null||Q($)},s=$=>{const{onOk:Q}=e;Q==null||Q($)},{prefixCls:l,className:u,rootClassName:d,open:c,wrapClassName:m,centered:y,getContainer:g,focusTriggerAfterClose:f=!0,style:A,visible:v,width:T=520,footer:N,classNames:b,styles:I,children:h,loading:C}=e,k=Ky(e,["prefixCls","className","rootClassName","open","wrapClassName","centered","getContainer","focusTriggerAfterClose","style","visible","width","footer","classNames","styles","children","loading"]),S=o("modal",l),O=o(),R=vl(S),[L,_,w]=Gl(S,R),q=pe(m,{[`${S}-centered`]:!!y,[`${S}-wrap-rtl`]:r==="rtl"}),D=N!==null&&!C?p.createElement(Dl,Object.assign({},e,{onOk:s,onCancel:i})):null,[B,H]=Gy(bi(e),bi(a),{closable:!0,closeIcon:p.createElement(ka,{className:`${S}-close-icon`}),closeIconRender:$=>Ml(S,$)}),z=Hy(`.${S}-content`),[X,V]=Wm("Modal",k.zIndex);return L(p.createElement(Em,{form:!0,space:!0},p.createElement(Ym.Provider,{value:V},p.createElement(Pl,Object.assign({width:T},k,{zIndex:X,getContainer:g===void 0?t:g,prefixCls:S,rootClassName:pe(_,d,w,R),footer:D,visible:c??v,mousePosition:(n=k.mousePosition)!==null&&n!==void 0?n:zr,onClose:i,closable:B,closeIcon:H,focusTriggerAfterClose:f,transitionName:Eo(O,"zoom",e.transitionName),maskTransitionName:Eo(O,"fade",e.maskTransitionName),className:pe(_,u,a==null?void 0:a.className),style:Object.assign(Object.assign({},a==null?void 0:a.style),A),classNames:Object.assign(Object.assign(Object.assign({},a==null?void 0:a.classNames),b),{wrapper:pe(q,b==null?void 0:b.wrapper)}),styles:Object.assign(Object.assign({},a==null?void 0:a.styles),I),panelRef:z}),C?p.createElement(Xm,{active:!0,title:!1,paragraph:{rows:4},className:`${S}-body-skeleton`}):h))))},Jy=e=>{const{componentCls:n,titleFontSize:t,titleLineHeight:o,modalConfirmIconSize:r,fontSize:a,lineHeight:i,modalTitleHeight:s,fontHeight:l,confirmBodyPadding:u}=e,d=`${n}-confirm`;return{[d]:{"&-rtl":{direction:"rtl"},[`${e.antCls}-modal-header`]:{display:"none"},[`${d}-body-wrapper`]:Object.assign({},sm()),[`&${n} ${n}-body`]:{padding:u},[`${d}-body`]:{display:"flex",flexWrap:"nowrap",alignItems:"start",[`> ${e.iconCls}`]:{flex:"none",fontSize:r,marginInlineEnd:e.confirmIconMarginInlineEnd,marginTop:e.calc(e.calc(l).sub(r).equal()).div(2).equal()},[`&-has-title > ${e.iconCls}`]:{marginTop:e.calc(e.calc(s).sub(r).equal()).div(2).equal()}},[`${d}-paragraph`]:{display:"flex",flexDirection:"column",flex:"auto",rowGap:e.marginXS},[`${e.iconCls} + ${d}-paragraph`]:{maxWidth:`calc(100% - ${ie(e.calc(e.modalConfirmIconSize).add(e.marginSM).equal())})`},[`${d}-title`]:{color:e.colorTextHeading,fontWeight:e.fontWeightStrong,fontSize:t,lineHeight:o},[`${d}-content`]:{color:e.colorText,fontSize:a,lineHeight:i},[`${d}-btns`]:{textAlign:"end",marginTop:e.confirmBtnsMarginTop,[`${e.antCls}-btn + ${e.antCls}-btn`]:{marginBottom:0,marginInlineStart:e.marginXS}}},[`${d}-error ${d}-body > ${e.iconCls}`]:{color:e.colorError},[`${d}-warning ${d}-body > ${e.iconCls},
        ${d}-confirm ${d}-body > ${e.iconCls}`]:{color:e.colorWarning},[`${d}-info ${d}-body > ${e.iconCls}`]:{color:e.colorInfo},[`${d}-success ${d}-body > ${e.iconCls}`]:{color:e.colorSuccess}}},Zy=im(["Modal","confirm"],e=>{const n=Bl(e);return[Jy(n)]},Fl,{order:-1e3});var ep=function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)n.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(t[o[r]]=e[o[r]]);return t};function Ul(e){const{prefixCls:n,icon:t,okText:o,cancelText:r,confirmPrefixCls:a,type:i,okCancel:s,footer:l,locale:u}=e,d=ep(e,["prefixCls","icon","okText","cancelText","confirmPrefixCls","type","okCancel","footer","locale"]);let c=t;if(!t&&t!==null)switch(i){case"info":c=p.createElement(Hm,null);break;case"success":c=p.createElement(Um,null);break;case"error":c=p.createElement(Qm,null);break;default:c=p.createElement(jm,null)}const m=s??i==="confirm",y=e.autoFocusButton===null?!1:e.autoFocusButton||"ok",[g]=Ca("Modal"),f=u||g,A=o||(m?f==null?void 0:f.okText:f==null?void 0:f.justOkText),v=r||(f==null?void 0:f.cancelText),T=Object.assign({autoFocusButton:y,cancelTextLocale:v,okTextLocale:A,mergedOkCancel:m},d),N=p.useMemo(()=>T,bn(Object.values(T))),b=p.createElement(p.Fragment,null,p.createElement(gi,null),p.createElement(fi,null)),I=e.title!==void 0&&e.title!==null,h=`${a}-body`;return p.createElement("div",{className:`${a}-body-wrapper`},p.createElement("div",{className:pe(h,{[`${h}-has-title`]:I})},c,p.createElement("div",{className:`${a}-paragraph`},I&&p.createElement("span",{className:`${a}-title`},e.title),p.createElement("div",{className:`${a}-content`},e.content))),l===void 0||typeof l=="function"?p.createElement(wl,{value:N},p.createElement("div",{className:`${a}-btns`},typeof l=="function"?l(b,{OkBtn:fi,CancelBtn:gi}):b)):l,p.createElement(Zy,{prefixCls:n}))}const np=e=>{const{close:n,zIndex:t,afterClose:o,open:r,keyboard:a,centered:i,getContainer:s,maskStyle:l,direction:u,prefixCls:d,wrapClassName:c,rootPrefixCls:m,bodyStyle:y,closable:g=!1,closeIcon:f,modalRender:A,focusTriggerAfterClose:v,onConfirm:T,styles:N}=e,b=`${d}-confirm`,I=e.width||416,h=e.style||{},C=e.mask===void 0?!0:e.mask,k=e.maskClosable===void 0?!1:e.maskClosable,S=pe(b,`${b}-${e.type}`,{[`${b}-rtl`]:u==="rtl"},e.className),[,O]=lm(),R=p.useMemo(()=>t!==void 0?t:O.zIndexPopupBase+Km,[t,O]);return p.createElement(jl,{prefixCls:d,className:S,wrapClassName:pe({[`${b}-centered`]:!!e.centered},c),onCancel:()=>{n==null||n({triggerCancel:!0}),T==null||T(!1)},open:r,title:"",footer:null,transitionName:Eo(m||"","zoom",e.transitionName),maskTransitionName:Eo(m||"","fade",e.maskTransitionName),mask:C,maskClosable:k,style:h,styles:Object.assign({body:y,mask:l},N),width:I,zIndex:R,afterClose:o,keyboard:a,centered:i,getContainer:s,closable:g,closeIcon:f,modalRender:A,focusTriggerAfterClose:v},p.createElement(Ul,Object.assign({},e,{confirmPrefixCls:b})))},Hl=e=>{const{rootPrefixCls:n,iconPrefixCls:t,direction:o,theme:r}=e;return p.createElement(cl,{prefixCls:n,iconPrefixCls:t,direction:o,theme:r},p.createElement(np,Object.assign({},e)))},jn=[];let zl="";function Vl(){return zl}const tp=e=>{var n,t;const{prefixCls:o,getContainer:r,direction:a}=e,i=dl(),s=p.useContext(Ho),l=Vl()||s.getPrefixCls(),u=o||`${l}-modal`;let d=r;return d===!1&&(d=void 0),U.createElement(Hl,Object.assign({},e,{rootPrefixCls:l,prefixCls:u,iconPrefixCls:s.iconPrefixCls,theme:s.theme,direction:a??s.direction,locale:(t=(n=s.locale)===null||n===void 0?void 0:n.Modal)!==null&&t!==void 0?t:i,getContainer:d}))};function to(e){const n=um(),t=document.createDocumentFragment();let o=Object.assign(Object.assign({},e),{close:s,open:!0}),r;function a(){for(var u,d=arguments.length,c=new Array(d),m=0;m<d;m++)c[m]=arguments[m];if(c.some(f=>f==null?void 0:f.triggerCancel)){var g;(u=e.onCancel)===null||u===void 0||(g=u).call.apply(g,[e,()=>{}].concat(bn(c.slice(1))))}for(let f=0;f<jn.length;f++)if(jn[f]===s){jn.splice(f,1);break}Fm(t)}function i(u){clearTimeout(r),r=setTimeout(()=>{const d=n.getPrefixCls(void 0,Vl()),c=n.getIconPrefixCls(),m=n.getTheme(),y=U.createElement(tp,Object.assign({},u));Gm(U.createElement(cl,{prefixCls:d,iconPrefixCls:c,theme:m},n.holderRender?n.holderRender(y):y),t)})}function s(){for(var u=arguments.length,d=new Array(u),c=0;c<u;c++)d[c]=arguments[c];o=Object.assign(Object.assign({},o),{open:!1,afterClose:()=>{typeof e.afterClose=="function"&&e.afterClose(),a.apply(this,d)}}),o.visible&&delete o.visible,i(o)}function l(u){typeof u=="function"?o=u(o):o=Object.assign(Object.assign({},o),u),i(o)}return i(o),jn.push(s),{destroy:s,update:l}}function $l(e){return Object.assign(Object.assign({},e),{type:"warning"})}function Wl(e){return Object.assign(Object.assign({},e),{type:"info"})}function Yl(e){return Object.assign(Object.assign({},e),{type:"success"})}function Ql(e){return Object.assign(Object.assign({},e),{type:"error"})}function Kl(e){return Object.assign(Object.assign({},e),{type:"confirm"})}function op(e){let{rootPrefixCls:n}=e;zl=n}var rp=function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)n.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(t[o[r]]=e[o[r]]);return t};const ap=(e,n)=>{var t,{afterClose:o,config:r}=e,a=rp(e,["afterClose","config"]);const[i,s]=p.useState(!0),[l,u]=p.useState(r),{direction:d,getPrefixCls:c}=p.useContext(Ho),m=c("modal"),y=c(),g=()=>{var T;o(),(T=l.afterClose)===null||T===void 0||T.call(l)},f=function(){var T;s(!1);for(var N=arguments.length,b=new Array(N),I=0;I<N;I++)b[I]=arguments[I];if(b.some(k=>k==null?void 0:k.triggerCancel)){var C;(T=l.onCancel)===null||T===void 0||(C=T).call.apply(C,[l,()=>{}].concat(bn(b.slice(1))))}};p.useImperativeHandle(n,()=>({destroy:f,update:T=>{u(N=>Object.assign(Object.assign({},N),T))}}));const A=(t=l.okCancel)!==null&&t!==void 0?t:l.type==="confirm",[v]=Ca("Modal",dm.Modal);return p.createElement(Hl,Object.assign({prefixCls:m,rootPrefixCls:y},l,{close:f,open:i,afterClose:g,okText:l.okText||(A?v==null?void 0:v.okText:v==null?void 0:v.justOkText),direction:l.direction||d,cancelText:l.cancelText||(v==null?void 0:v.cancelText)},a))},ip=p.forwardRef(ap);let Ei=0;const sp=p.memo(p.forwardRef((e,n)=>{const[t,o]=qy();return p.useImperativeHandle(n,()=>({patchElement:o}),[]),p.createElement(p.Fragment,null,t)}));function lp(){const e=p.useRef(null),[n,t]=p.useState([]);p.useEffect(()=>{n.length&&(bn(n).forEach(i=>{i()}),t([]))},[n]);const o=p.useCallback(a=>function(s){var l;Ei+=1;const u=p.createRef();let d;const c=new Promise(A=>{d=A});let m=!1,y;const g=p.createElement(ip,{key:`modal-${Ei}`,config:a(s),ref:u,afterClose:()=>{y==null||y()},isSilent:()=>m,onConfirm:A=>{d(A)}});return y=(l=e.current)===null||l===void 0?void 0:l.patchElement(g),y&&jn.push(y),{destroy:()=>{function A(){var v;(v=u.current)===null||v===void 0||v.destroy()}u.current?A():t(v=>[].concat(bn(v),[A]))},update:A=>{function v(){var T;(T=u.current)===null||T===void 0||T.update(A)}u.current?v():t(T=>[].concat(bn(T),[v]))},then:A=>(m=!0,c.then(A))}},[]);return[p.useMemo(()=>({info:o(Wl),success:o(Yl),error:o(Ql),warning:o($l),confirm:o(Kl)}),[]),p.createElement(sp,{key:"modal-holder",ref:e})]}var up=function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)n.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(t[o[r]]=e[o[r]]);return t};const dp=e=>{const{prefixCls:n,className:t,closeIcon:o,closable:r,type:a,title:i,children:s,footer:l}=e,u=up(e,["prefixCls","className","closeIcon","closable","type","title","children","footer"]),{getPrefixCls:d}=p.useContext(Ho),c=d(),m=n||d("modal"),y=vl(c),[g,f,A]=Gl(m,y),v=`${m}-confirm`;let T={};return a?T={closable:r??!1,title:"",footer:"",children:p.createElement(Ul,Object.assign({},e,{prefixCls:m,confirmPrefixCls:v,rootPrefixCls:c,content:s}))}:T={closable:r??!0,title:i,footer:l!==null&&p.createElement(Dl,Object.assign({},e)),children:s},g(p.createElement(ql,Object.assign({prefixCls:m,className:pe(f,`${m}-pure-panel`,a&&v,a&&`${v}-${a}`,t,A,y)},u,{closeIcon:Ml(m,o),closable:r},T)))},cp=Jm(dp);function Xl(e){return to($l(e))}const Ye=jl;Ye.useModal=lp;Ye.info=function(n){return to(Wl(n))};Ye.success=function(n){return to(Yl(n))};Ye.error=function(n){return to(Ql(n))};Ye.warning=Xl;Ye.warn=Xl;Ye.confirm=function(n){return to(Kl(n))};Ye.destroyAll=function(){for(;jn.length;){const n=jn.pop();n&&n()}};Ye.config=op;Ye._InternalPanelDoNotUseOrYouWillBeFired=cp;const mp=(e,n,t)=>{const o=We((t-e)/(n-e),0,1);return o*o*(3-2*o)},Ra={SCREEN:"screen",WORLD:"world"},Oi=[1,2,5,10],Jl=e=>{if(!Number.isFinite(e)||e<=0)return e;const n=10**Math.floor(Math.log10(e));let t=Oi[0]*n;for(const o of Oi){const r=o*n;Math.abs(r-e)<Math.abs(t-e)&&(t=r)}return t},yp=({targetScreenPx:e,pixelPerWorld:n,quantize:t})=>{if(!Number.isFinite(n)||n<=0)return e>0?e:0;const o=e/n;return t?Jl(o):o},rC=(e,n,t,o)=>!Number.isFinite(e)||e<=Un?0:We(n/e,t,o),Zl=2,eu=(e,n,t=Zl)=>{if(!Number.isFinite(e)||e<=0)return!0;if(!Number.isFinite(n)||n<=0)return!1;const o=n/e;return o>=t||o<=1/t},aC=()=>{let e=null,n=null;return{resolve:({currentScale:t,targetScreenPx:o,fallback:r,stepFactor:a=Zl,quantize:i=!1,minWorldSize:s=0})=>!Number.isFinite(t)||t<=0?e??r:((e===null||eu(n??0,t,a))&&(e=Math.max(yp({targetScreenPx:o,pixelPerWorld:t,quantize:i}),s),n=t),e),reset:()=>{e=null,n=null}}},pp={minSegments:48,maxSegments:256,targetEdgePx:2.5},iC=(e,n={})=>{const{minSegments:t,maxSegments:o,targetEdgePx:r}={...pp,...n};if(!Number.isFinite(e)||e<=0)return t;const a=2*Math.PI*e,i=Math.ceil(a/Math.max(.5,r));return Math.min(o,Math.max(t,i))},vn=Object.freeze({epsilon:1e-6,polylabelPrecision:.5,polylabelMaxCells:2e4,interiorSampleGrid:18,minInteriorSampleGrid:6,inwardProbeSteps:[.5,1,2,4,8,12,16,24,32]}),gp=(e,n,t)=>{const o=t.x-n.x,r=t.y-n.y,a=o*o+r*r;return a<=vn.epsilon**2?0:We(((e.x-n.x)*o+(e.y-n.y)*r)/a,0,1)},fp=(e,n,t)=>{const o=gp(e,n,t);return{x:n.x+(t.x-n.x)*o,y:n.y+(t.y-n.y)*o}},nu=(e,n,t)=>{const o=fp(e,n,t);return Math.hypot(e.x-o.x,e.y-o.y)},tu=e=>e.map((n,t)=>[n,e[(t+1)%e.length]]),La=(e,n,t=vn.epsilon)=>{if(e.length<3)return!1;let o=!1;for(const[r,a]of tu(e)){if(nu(n,r,a)<=t)return!0;a.y>n.y!=r.y>n.y&&n.x<(r.x-a.x)*(n.y-a.y)/(r.y-a.y+Number.EPSILON)+a.x&&(o=!o)}return o},ou=(e,n)=>e.length<2?0:Math.min(...tu(e).map(([t,o])=>nu(n,t,o))),Ap=(e,n)=>(La(e,n)?1:-1)*ou(e,n),ru=e=>{const n=e.map(a=>a.x),t=e.map(a=>a.y),o=Math.min(...n),r=Math.min(...t);return{minX:o,minY:r,width:Math.max(...n)-o,height:Math.max(...t)-r}},vp=(e,n=vn.interiorSampleGrid)=>{const{minX:t,minY:o,width:r,height:a}=ru(e);if(r<=0||a<=0)return null;const i=Math.max(vn.minInteriorSampleGrid,Math.floor(n));let s=null;for(let l=0;l<=i;l+=1)for(let u=0;u<=i;u+=1){const d={x:t+r*u/i,y:o+a*l/i};if(!La(e,d))continue;const c=ou(e,d);(!s||c>s.radius)&&(s={center:d,radius:c})}return s},Tp=(e,n=vn.polylabelPrecision,t=vn.polylabelMaxCells)=>{if(e.length<3||e.some(g=>!Number.isFinite(g.x)||!Number.isFinite(g.y)))return null;const{minX:o,minY:r,width:a,height:i}=ru(e),s=Math.min(a,i);if(a<=0||i<=0||s<=vn.epsilon)return null;const l=(g,f,A)=>{const v=Ap(e,{x:g,y:f});return{x:g,y:f,h:A,d:v,max:v+A*Math.SQRT2}},u=[];for(let g=o;g<o+a;g+=s)for(let f=r;f<r+i;f+=s)u.push(l(g+s/2,f+s/2,s/2));const d=Sl({points:e,degenerateAreaEpsilon:vn.epsilon}),c=l(o+a/2,r+i/2,0);let m=d?l(d.x,d.y,0):c;c.d>m.d&&(m=c);const y=Math.max(.1,n);for(let g=0;u.length>0&&g<t;g+=1){const f=u.reduce((T,N,b)=>N.max>u[T].max?b:T,0),[A]=u.splice(f,1);if(!A)break;if(A.d>m.d&&(m=A),A.max-m.d<=y)continue;const v=A.h/2;u.push(l(A.x-v,A.y-v,v),l(A.x+v,A.y-v,v),l(A.x-v,A.y+v,v),l(A.x+v,A.y+v,v))}return Number.isFinite(m.d)&&m.d>0?{center:{x:m.x,y:m.y},radius:m.d}:vp(e)},bp=(e,n)=>{const t=n.map(s=>({x:s.x-e.x,y:s.y-e.y})),o=t.map(s=>Math.hypot(s.x,s.y));if(o.some(s=>s<1e-9))return null;const r=t.map((s,l)=>{const u=t[(l+1)%t.length];return Math.tan(Math.atan2(s.x*u.y-s.y*u.x,s.x*u.x+s.y*u.y)/2)}),a=o.map((s,l)=>(r[(l-1+o.length)%o.length]+r[l])/s),i=a.reduce((s,l)=>s+l,0);return!Number.isFinite(i)||Math.abs(i)<1e-12?null:a.map(s=>s/i)},Np=(e,n)=>n.reduce((t,o,r)=>El(t,Ol(o,e[r]??0)),{x:0,y:0}),Ip=e=>{if(e.length<3)return[...e];const n=[...e].sort((i,s)=>i.x-s.x||i.y-s.y),t=(i,s,l)=>(s.x-i.x)*(l.y-i.y)-(s.y-i.y)*(l.x-i.x),o=i=>i.reduce((s,l)=>{for(;s.length>=2&&t(s[s.length-2],s[s.length-1],l)<=0;)s.pop();return s.push(l),s},[]),r=o(n),a=o([...n].reverse());return[...r.slice(0,-1),...a.slice(0,-1)]},Vo=Un*Un,kp=e=>e.length===0?null:e.reduce((n,t)=>n.add(t),e[0].clone().setScalar(0)).divideScalar(e.length),sC=(e,n,t)=>{const o=n.clone().sub(e),r=o.length();return r>0?e.clone().addScaledVector(o,Math.min(t,r)/r):e.clone()},xe=e=>e.lengthSq()<=Vo?null:e.clone().normalize(),pt=(e,n,t=e.clone())=>{const o=n.lengthSq();return o<=Vo?t.copy(e):t.copy(e).addScaledVector(n,-e.dot(n)/o)},au=(e,n,t,o=e.clone())=>{const r=t.lengthSq();if(r<=Vo)return o.copy(e);const a=e.clone().sub(n).dot(t);return o.copy(e).addScaledVector(t,-a/r)},lC=(e,n,t)=>{const o=t.length();return o<=Un?0:e.clone().sub(n).dot(t)/o},iu=(e,n,t,o=e.clone())=>(o.crossVectors(n.clone().sub(e),t.clone().sub(e)),o.lengthSq()<=Vo?null:o.normalize()),hp=(e,n,t,o,r)=>{if(!Number.isFinite(o)||o<=0)return null;const a=n.clone().sub(e),i=t.clone().sub(e),s=a.length(),l=i.length();if(s<=Un||l<=Un)return null;const u=a.normalize(),d=i.normalize(),c=We(u.dot(d),-1,1),m=Math.acos(c);if(!Number.isFinite(m)||m<=.001)return null;const y=d.clone().addScaledVector(u,-c);if(y.length()<=1e-5)return null;y.normalize();const g=Math.min(o,s*.999,l*.999);if(g<=Un)return null;const f=Math.max(8,r);return Array.from({length:f+1},(A,v)=>{const T=m*(v/f);return u.clone().multiplyScalar(Math.cos(T)).addScaledVector(y,Math.sin(T)).normalize().multiplyScalar(g).add(e)})},Cp=1e-12,Y=(e,n)=>tl(ci(e.longitude),ci(e.latitude),e.altitude,n),$n=e=>{const n=Gt(e);return{longitude:jt(n.longitude),latitude:jt(n.latitude),altitude:n.altitude}},Vr=(e,n=new x)=>n.copy(e).lengthSq()>Cp?n.normalize():n.set(0,0,1),wa=(e,n=new x)=>{const{longitude:t,latitude:o}=Gt(e),r=Math.cos(o);return n.set(r*Math.cos(t),r*Math.sin(t),Math.sin(o))},uC=(e,n,t)=>{const o=Y({...e,altitude:0}).lerp(Y({...n,altitude:0}),t),{longitude:r,latitude:a}=Gt(o);return{longitude:jt(r),latitude:jt(a),altitude:e.altitude+(n.altitude-e.altitude)*t}},Sp=(e,n)=>{const t=ol(Y({...n,altitude:0}),Y({...e,altitude:0}));return Math.hypot(t.east,t.north)},Se=(e,n=new x)=>n.set(e.x,e.y,e.z),an=e=>({x:e.x,y:e.y,z:e.z}),su=al,Ep=(e,n,t=su)=>{const o=n.clone().sub(e);if(!(o.lengthSq()>0))return null;o.normalize();const{north:r,up:a}=rl(e),i=Math.abs(a.dot(o))>1-1e-12?r:a;return{positionECEF:e.clone(),directionECEF:o,upECEF:pt(i,o).normalize(),verticalFovRad:t}},Ri=e=>wy({forward:e.directionECEF,up:e.upECEF,right:new x().crossVectors(e.directionECEF,e.upECEF)}),Op=(e,n,t)=>{const{forward:o,up:r}=Ly(Ri(e).slerp(Ri(n),t));return{positionECEF:Wc(e.positionECEF,n.positionECEF,t),directionECEF:o,upECEF:r,verticalFovRad:Hr(e.verticalFovRad,n.verticalFovRad,t)}},dC=(e,n,t)=>{const o=e.dot(t.up),r=Math.atan2(e.dot(t.east),e.dot(t.north)),a=pt(t.up,e);return a.lengthSq()<1e-12&&a.copy(t.east).multiplyScalar(Math.sin(r)).addScaledVector(t.north,Math.cos(r)),a.normalize(),{bearing:r,pitch:Math.acos(We(-o,-1,1)),roll:Math.atan2(new x().crossVectors(a,n).dot(e),a.dot(n))}},Rp={prefix:"fac",iconName:"row-resize",icon:[512,512,[],"","M278.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-64 64c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8l32 0l0 96l-214.7 0l0 64l214.7 0l0 96l-32 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l64 64c12.5 12.5 32.8 12.5 45.3 0l64-64c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8l-32 0l0-96l214.7 0l0-64l-214.7 0l0-96l32 0c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-64-64z"]},Lp=yl+pl,wp=10,mn=Om/2,Qe=yl,yn=pl,pn=Rm,xp=Object.freeze([{key:"right",pathD:`M ${Qe} 0 L ${Qe+pn} ${-1.5} L ${Qe+yn} ${-1.5} L ${Qe+yn} ${mn} L ${Qe+pn} ${mn} Z`},{key:"left",pathD:`M ${-5-yn} ${-1.5} L ${-5-pn} ${-1.5} L -5 0 L ${-5-pn} ${mn} L ${-5-yn} ${mn} Z`},{key:"bottom",pathD:`M ${-1.5} ${Qe+pn} L 0 ${Qe} L ${mn} ${Qe+pn} L ${mn} ${Qe+yn} L ${-1.5} ${Qe+yn} Z`},{key:"top",pathD:`M ${-1.5} ${-5-yn} L ${mn} ${-5-yn} L ${mn} ${-5-pn} L 0 -5 L ${-1.5} ${-5-pn} Z`}]),Li=100,wi=300,$r=({additionalAttributes:e="",fill:n,pathDefinitions:t,stroke:o,strokeLinejoin:r,strokeWidth:a})=>t.map(({pathD:i})=>`<path d="${i}" fill="${n}"${typeof o=="string"?` stroke="${o}"`:""}${typeof r=="string"?` stroke-linejoin="${r}"`:""}${typeof a=="number"?` stroke-width="${a}"`:""}${e}/>`).join(""),lu=({contentMarkup:e,rootStyleText:n,sizePx:t,viewBox:o})=>[`<svg xmlns="http://www.w3.org/2000/svg" width="${t}" height="${t}" viewBox="${o}" preserveAspectRatio="xMidYMid meet" shape-rendering="geometricPrecision"${typeof n=="string"&&n.length>0?` style="${n}"`:""}>`,e,"</svg>"].join(""),cC=({pathDefinitions:e,foregroundFill:n,rootStyleText:t,sizePx:o,viewBox:r})=>lu({contentMarkup:$r({fill:n,pathDefinitions:e}),rootStyleText:t,sizePx:o,viewBox:r}),mC=({pathDefinitions:e,shadowBlurPx:n,shadowStrokeColor:t,shadowStrokeLinejoin:o,shadowStrokeWidth:r,rootStyleText:a,sizePx:i,viewBox:s})=>{const l=Math.max(n,0),u=Math.max(r,0),d="cursor-shadow-blur";return lu({contentMarkup:[l>0?`<defs><filter id="${d}" x="-${Li}%" y="-${Li}%" width="${wi}%" height="${wi}%"><feDropShadow dx="0" dy="0" stdDeviation="${l}" flood-color="${t}" flood-opacity="1"/></filter></defs>`:"",u>0?$r({additionalAttributes:l>0?` filter="url(#${d})"`:"",fill:t,pathDefinitions:e,stroke:t,strokeLinejoin:o,strokeWidth:u}):$r({additionalAttributes:l>0?` filter="url(#${d})"`:"",fill:t,pathDefinitions:e})].join(""),rootStyleText:a,sizePx:i,viewBox:s})},uu="http://www.w3.org/2000/svg",xi=100,qi=300;let _i=0;const lt=e=>document.createElementNS(uu,e),du=(e,{blendMode:n=gl.NORMAL,sizePx:t,viewBox:o})=>{e.setAttribute("xmlns",uu),e.setAttribute("width",`${t}`),e.setAttribute("height",`${t}`),e.setAttribute("viewBox",o),e.setAttribute("preserveAspectRatio","xMidYMid meet"),e.setAttribute("shape-rendering","geometricPrecision"),e.style.display="block",e.style.overflow="visible",e.style.mixBlendMode=n,e.style.pointerEvents="none"},cu=({filterId:e,fill:n,pathDefinitions:t,parentElement:o,stroke:r,strokeLinejoin:a,strokeWidth:i})=>{t.forEach(({pathD:s})=>{const l=lt("path");l.setAttribute("d",s),l.setAttribute("fill",n),typeof r=="string"&&l.setAttribute("stroke",r),typeof a=="string"&&l.setAttribute("stroke-linejoin",a),typeof i=="number"&&l.setAttribute("stroke-width",`${i}`),typeof e=="string"&&e.length>0&&l.setAttribute("filter",`url(#${e})`),o.appendChild(l)})},qp=(e,n,t)=>{if(!(n>0))return;_i+=1;const o=`annotation-cursor-shadow-blur-${_i}`,r=lt("defs"),a=lt("filter"),i=lt("feDropShadow");return a.setAttribute("id",o),a.setAttribute("x",`-${xi}%`),a.setAttribute("y",`-${xi}%`),a.setAttribute("width",`${qi}%`),a.setAttribute("height",`${qi}%`),i.setAttribute("dx","0"),i.setAttribute("dy","0"),i.setAttribute("flood-color",t),i.setAttribute("flood-opacity","1"),i.setAttribute("stdDeviation",`${n}`),a.appendChild(i),r.appendChild(a),e.appendChild(r),o},_p=({blendMode:e="normal",foregroundFill:n,pathDefinitions:t,sizePx:o,viewBox:r})=>{const a=lt("svg");return du(a,{blendMode:e,sizePx:o,viewBox:r}),cu({fill:n,parentElement:a,pathDefinitions:t}),a},Pp=({blendMode:e="normal",pathDefinitions:n,shadowBlurPx:t,shadowStrokeColor:o,shadowStrokeLinejoin:r,shadowStrokeWidth:a,sizePx:i,viewBox:s})=>{const l=lt("svg"),u=Math.max(a,0),d=qp(l,Math.max(t,0),o);return du(l,{blendMode:e,sizePx:i,viewBox:s}),cu({fill:o,filterId:d,parentElement:l,pathDefinitions:n,stroke:u>0?o:void 0,strokeLinejoin:u>0?r:void 0,strokeWidth:u>0?u:void 0}),l},Pi=({blendMode:e="normal",svgElement:n})=>{const t=document.createElement("div");return t.style.position="absolute",t.style.inset="0",t.style.pointerEvents="none",t.style.mixBlendMode="normal",n.style.mixBlendMode=e,t.appendChild(n),t},Mp=({canvasSizePx:e,foregroundBlendMode:n="normal",foregroundFill:t,pathDefinitions:o,shadowBlendMode:r="normal",shadowBlurPx:a,shadowStrokeColor:i,shadowStrokeLinejoin:s,shadowStrokeWidth:l,showAura:u,viewBox:d})=>{const c=document.createElement("div");return c.style.position="absolute",c.style.left="0",c.style.top="0",c.style.width=`${e}px`,c.style.height=`${e}px`,c.style.pointerEvents="none",c.style.willChange="transform",u&&c.appendChild(Pi({blendMode:r,svgElement:Pp({blendMode:r,pathDefinitions:o,shadowBlurPx:a,shadowStrokeColor:i,shadowStrokeLinejoin:s,shadowStrokeWidth:l,sizePx:e,viewBox:d})})),c.appendChild(Pi({blendMode:n,svgElement:_p({blendMode:n,foregroundFill:t,pathDefinitions:o,sizePx:e,viewBox:d})})),c},yr={de:{backspace:"Rücktaste",escape:"Escape",shift:"Umschalt"},en:{backspace:"Backspace",escape:"Escape",shift:"Shift"}},Dp=e=>e||(Lm||wm?"macos":xm?"windows":"other"),Bp=e=>{const n=e==null?void 0:e.split("-")[0];return n&&yr[n]?yr[n]:yr.en},Fp=(e,n)=>`${e==="macos"?"⌫":"←"} ${n.backspace}`;function me(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var Gp=typeof Symbol=="function"&&Symbol.observable||"@@observable",Mi=Gp,pr=()=>Math.random().toString(36).substring(7).split("").join("."),jp={INIT:`@@redux/INIT${pr()}`,REPLACE:`@@redux/REPLACE${pr()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${pr()}`},Oo=jp;function xa(e){if(typeof e!="object"||e===null)return!1;let n=e;for(;Object.getPrototypeOf(n)!==null;)n=Object.getPrototypeOf(n);return Object.getPrototypeOf(e)===n||Object.getPrototypeOf(e)===null}function mu(e,n,t){if(typeof e!="function")throw new Error(me(2));if(typeof n=="function"&&typeof t=="function"||typeof t=="function"&&typeof arguments[3]=="function")throw new Error(me(0));if(typeof n=="function"&&typeof t>"u"&&(t=n,n=void 0),typeof t<"u"){if(typeof t!="function")throw new Error(me(1));return t(mu)(e,n)}let o=e,r=n,a=new Map,i=a,s=0,l=!1;function u(){i===a&&(i=new Map,a.forEach((A,v)=>{i.set(v,A)}))}function d(){if(l)throw new Error(me(3));return r}function c(A){if(typeof A!="function")throw new Error(me(4));if(l)throw new Error(me(5));let v=!0;u();const T=s++;return i.set(T,A),function(){if(v){if(l)throw new Error(me(6));v=!1,u(),i.delete(T),a=null}}}function m(A){if(!xa(A))throw new Error(me(7));if(typeof A.type>"u")throw new Error(me(8));if(typeof A.type!="string")throw new Error(me(17));if(l)throw new Error(me(9));try{l=!0,r=o(r,A)}finally{l=!1}return(a=i).forEach(T=>{T()}),A}function y(A){if(typeof A!="function")throw new Error(me(10));o=A,m({type:Oo.REPLACE})}function g(){const A=c;return{subscribe(v){if(typeof v!="object"||v===null)throw new Error(me(11));function T(){const b=v;b.next&&b.next(d())}return T(),{unsubscribe:A(T)}},[Mi](){return this}}}return m({type:Oo.INIT}),{dispatch:m,subscribe:c,getState:d,replaceReducer:y,[Mi]:g}}function Up(e){Object.keys(e).forEach(n=>{const t=e[n];if(typeof t(void 0,{type:Oo.INIT})>"u")throw new Error(me(12));if(typeof t(void 0,{type:Oo.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(me(13))})}function Hp(e){const n=Object.keys(e),t={};for(let a=0;a<n.length;a++){const i=n[a];typeof e[i]=="function"&&(t[i]=e[i])}const o=Object.keys(t);let r;try{Up(t)}catch(a){r=a}return function(i={},s){if(r)throw r;let l=!1;const u={};for(let d=0;d<o.length;d++){const c=o[d],m=t[c],y=i[c],g=m(y,s);if(typeof g>"u")throw s&&s.type,new Error(me(14));u[c]=g,l=l||g!==y}return l=l||o.length!==Object.keys(i).length,l?u:i}}function Ro(...e){return e.length===0?n=>n:e.length===1?e[0]:e.reduce((n,t)=>(...o)=>n(t(...o)))}function zp(...e){return n=>(t,o)=>{const r=n(t,o);let a=()=>{throw new Error(me(15))};const i={getState:r.getState,dispatch:(l,...u)=>a(l,...u)},s=e.map(l=>l(i));return a=Ro(...s)(r.dispatch),{...r,dispatch:a}}}function Vp(e){return xa(e)&&"type"in e&&typeof e.type=="string"}var yu=Symbol.for("immer-nothing"),Di=Symbol.for("immer-draftable"),Me=Symbol.for("immer-state");function He(e,...n){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var gt=Object.getPrototypeOf;function Wn(e){return!!e&&!!e[Me]}function ln(e){var n;return e?pu(e)||Array.isArray(e)||!!e[Di]||!!((n=e.constructor)!=null&&n[Di])||Wo(e)||Yo(e):!1}var $p=Object.prototype.constructor.toString();function pu(e){if(!e||typeof e!="object")return!1;const n=gt(e);if(n===null)return!0;const t=Object.hasOwnProperty.call(n,"constructor")&&n.constructor;return t===Object?!0:typeof t=="function"&&Function.toString.call(t)===$p}function Lo(e,n){$o(e)===0?Reflect.ownKeys(e).forEach(t=>{n(t,e[t],e)}):e.forEach((t,o)=>n(o,t,e))}function $o(e){const n=e[Me];return n?n.type_:Array.isArray(e)?1:Wo(e)?2:Yo(e)?3:0}function Wr(e,n){return $o(e)===2?e.has(n):Object.prototype.hasOwnProperty.call(e,n)}function gu(e,n,t){const o=$o(e);o===2?e.set(n,t):o===3?e.add(t):e[n]=t}function Wp(e,n){return e===n?e!==0||1/e===1/n:e!==e&&n!==n}function Wo(e){return e instanceof Map}function Yo(e){return e instanceof Set}function Pn(e){return e.copy_||e.base_}function Yr(e,n){if(Wo(e))return new Map(e);if(Yo(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);const t=pu(e);if(n===!0||n==="class_only"&&!t){const o=Object.getOwnPropertyDescriptors(e);delete o[Me];let r=Reflect.ownKeys(o);for(let a=0;a<r.length;a++){const i=r[a],s=o[i];s.writable===!1&&(s.writable=!0,s.configurable=!0),(s.get||s.set)&&(o[i]={configurable:!0,writable:!0,enumerable:s.enumerable,value:e[i]})}return Object.create(gt(e),o)}else{const o=gt(e);if(o!==null&&t)return{...e};const r=Object.create(o);return Object.assign(r,e)}}function qa(e,n=!1){return Qo(e)||Wn(e)||!ln(e)||($o(e)>1&&(e.set=e.add=e.clear=e.delete=Yp),Object.freeze(e),n&&Object.entries(e).forEach(([t,o])=>qa(o,!0))),e}function Yp(){He(2)}function Qo(e){return Object.isFrozen(e)}var Qp={};function Yn(e){const n=Qp[e];return n||He(0,e),n}var Ut;function fu(){return Ut}function Kp(e,n){return{drafts_:[],parent_:e,immer_:n,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function Bi(e,n){n&&(Yn("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=n)}function Qr(e){Kr(e),e.drafts_.forEach(Xp),e.drafts_=null}function Kr(e){e===Ut&&(Ut=e.parent_)}function Fi(e){return Ut=Kp(Ut,e)}function Xp(e){const n=e[Me];n.type_===0||n.type_===1?n.revoke_():n.revoked_=!0}function Gi(e,n){n.unfinalizedDrafts_=n.drafts_.length;const t=n.drafts_[0];return e!==void 0&&e!==t?(t[Me].modified_&&(Qr(n),He(4)),ln(e)&&(e=wo(n,e),n.parent_||xo(n,e)),n.patches_&&Yn("Patches").generateReplacementPatches_(t[Me].base_,e,n.patches_,n.inversePatches_)):e=wo(n,t,[]),Qr(n),n.patches_&&n.patchListener_(n.patches_,n.inversePatches_),e!==yu?e:void 0}function wo(e,n,t){if(Qo(n))return n;const o=n[Me];if(!o)return Lo(n,(r,a)=>ji(e,o,n,r,a,t)),n;if(o.scope_!==e)return n;if(!o.modified_)return xo(e,o.base_,!0),o.base_;if(!o.finalized_){o.finalized_=!0,o.scope_.unfinalizedDrafts_--;const r=o.copy_;let a=r,i=!1;o.type_===3&&(a=new Set(r),r.clear(),i=!0),Lo(a,(s,l)=>ji(e,o,r,s,l,t,i)),xo(e,r,!1),t&&e.patches_&&Yn("Patches").generatePatches_(o,t,e.patches_,e.inversePatches_)}return o.copy_}function ji(e,n,t,o,r,a,i){if(Wn(r)){const s=a&&n&&n.type_!==3&&!Wr(n.assigned_,o)?a.concat(o):void 0,l=wo(e,r,s);if(gu(t,o,l),Wn(l))e.canAutoFreeze_=!1;else return}else i&&t.add(r);if(ln(r)&&!Qo(r)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;wo(e,r),(!n||!n.scope_.parent_)&&typeof o!="symbol"&&Object.prototype.propertyIsEnumerable.call(t,o)&&xo(e,r)}}function xo(e,n,t=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&qa(n,t)}function Jp(e,n){const t=Array.isArray(e),o={type_:t?1:0,scope_:n?n.scope_:fu(),modified_:!1,finalized_:!1,assigned_:{},parent_:n,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let r=o,a=_a;t&&(r=[o],a=Ht);const{revoke:i,proxy:s}=Proxy.revocable(r,a);return o.draft_=s,o.revoke_=i,s}var _a={get(e,n){if(n===Me)return e;const t=Pn(e);if(!Wr(t,n))return Zp(e,t,n);const o=t[n];return e.finalized_||!ln(o)?o:o===gr(e.base_,n)?(fr(e),e.copy_[n]=Jr(o,e)):o},has(e,n){return n in Pn(e)},ownKeys(e){return Reflect.ownKeys(Pn(e))},set(e,n,t){const o=Au(Pn(e),n);if(o!=null&&o.set)return o.set.call(e.draft_,t),!0;if(!e.modified_){const r=gr(Pn(e),n),a=r==null?void 0:r[Me];if(a&&a.base_===t)return e.copy_[n]=t,e.assigned_[n]=!1,!0;if(Wp(t,r)&&(t!==void 0||Wr(e.base_,n)))return!0;fr(e),Xr(e)}return e.copy_[n]===t&&(t!==void 0||n in e.copy_)||Number.isNaN(t)&&Number.isNaN(e.copy_[n])||(e.copy_[n]=t,e.assigned_[n]=!0),!0},deleteProperty(e,n){return gr(e.base_,n)!==void 0||n in e.base_?(e.assigned_[n]=!1,fr(e),Xr(e)):delete e.assigned_[n],e.copy_&&delete e.copy_[n],!0},getOwnPropertyDescriptor(e,n){const t=Pn(e),o=Reflect.getOwnPropertyDescriptor(t,n);return o&&{writable:!0,configurable:e.type_!==1||n!=="length",enumerable:o.enumerable,value:t[n]}},defineProperty(){He(11)},getPrototypeOf(e){return gt(e.base_)},setPrototypeOf(){He(12)}},Ht={};Lo(_a,(e,n)=>{Ht[e]=function(){return arguments[0]=arguments[0][0],n.apply(this,arguments)}});Ht.deleteProperty=function(e,n){return Ht.set.call(this,e,n,void 0)};Ht.set=function(e,n,t){return _a.set.call(this,e[0],n,t,e[0])};function gr(e,n){const t=e[Me];return(t?Pn(t):e)[n]}function Zp(e,n,t){var r;const o=Au(n,t);return o?"value"in o?o.value:(r=o.get)==null?void 0:r.call(e.draft_):void 0}function Au(e,n){if(!(n in e))return;let t=gt(e);for(;t;){const o=Object.getOwnPropertyDescriptor(t,n);if(o)return o;t=gt(t)}}function Xr(e){e.modified_||(e.modified_=!0,e.parent_&&Xr(e.parent_))}function fr(e){e.copy_||(e.copy_=Yr(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var eg=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(n,t,o)=>{if(typeof n=="function"&&typeof t!="function"){const a=t;t=n;const i=this;return function(l=a,...u){return i.produce(l,d=>t.call(this,d,...u))}}typeof t!="function"&&He(6),o!==void 0&&typeof o!="function"&&He(7);let r;if(ln(n)){const a=Fi(this),i=Jr(n,void 0);let s=!0;try{r=t(i),s=!1}finally{s?Qr(a):Kr(a)}return Bi(a,o),Gi(r,a)}else if(!n||typeof n!="object"){if(r=t(n),r===void 0&&(r=n),r===yu&&(r=void 0),this.autoFreeze_&&qa(r,!0),o){const a=[],i=[];Yn("Patches").generateReplacementPatches_(n,r,a,i),o(a,i)}return r}else He(1,n)},this.produceWithPatches=(n,t)=>{if(typeof n=="function")return(i,...s)=>this.produceWithPatches(i,l=>n(l,...s));let o,r;return[this.produce(n,t,(i,s)=>{o=i,r=s}),o,r]},typeof(e==null?void 0:e.autoFreeze)=="boolean"&&this.setAutoFreeze(e.autoFreeze),typeof(e==null?void 0:e.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){ln(e)||He(8),Wn(e)&&(e=ng(e));const n=Fi(this),t=Jr(e,void 0);return t[Me].isManual_=!0,Kr(n),t}finishDraft(e,n){const t=e&&e[Me];(!t||!t.isManual_)&&He(9);const{scope_:o}=t;return Bi(o,n),Gi(void 0,o)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,n){let t;for(t=n.length-1;t>=0;t--){const r=n[t];if(r.path.length===0&&r.op==="replace"){e=r.value;break}}t>-1&&(n=n.slice(t+1));const o=Yn("Patches").applyPatches_;return Wn(e)?o(e,n):this.produce(e,r=>o(r,n))}};function Jr(e,n){const t=Wo(e)?Yn("MapSet").proxyMap_(e,n):Yo(e)?Yn("MapSet").proxySet_(e,n):Jp(e,n);return(n?n.scope_:fu()).drafts_.push(t),t}function ng(e){return Wn(e)||He(10,e),vu(e)}function vu(e){if(!ln(e)||Qo(e))return e;const n=e[Me];let t;if(n){if(!n.modified_)return n.base_;n.finalized_=!0,t=Yr(e,n.scope_.immer_.useStrictShallowCopy_)}else t=Yr(e,!0);return Lo(t,(o,r)=>{gu(t,o,vu(r))}),n&&(n.finalized_=!1),t}var De=new eg,Tu=De.produce;De.produceWithPatches.bind(De);De.setAutoFreeze.bind(De);De.setUseStrictShallowCopy.bind(De);De.applyPatches.bind(De);De.createDraft.bind(De);De.finishDraft.bind(De);function bu(e){return({dispatch:t,getState:o})=>r=>a=>typeof a=="function"?a(t,o,e):r(a)}var tg=bu(),og=bu,rg=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Ro:Ro.apply(null,arguments)};function Ui(e,n){function t(...o){if(n){let r=n(...o);if(!r)throw new Error(Ve(0));return{type:e,payload:r.payload,..."meta"in r&&{meta:r.meta},..."error"in r&&{error:r.error}}}return{type:e,payload:o[0]}}return t.toString=()=>`${e}`,t.type=e,t.match=o=>Vp(o)&&o.type===e,t}var Nu=class Lt extends Array{constructor(...n){super(...n),Object.setPrototypeOf(this,Lt.prototype)}static get[Symbol.species](){return Lt}concat(...n){return super.concat.apply(this,n)}prepend(...n){return n.length===1&&Array.isArray(n[0])?new Lt(...n[0].concat(this)):new Lt(...n.concat(this))}};function Hi(e){return ln(e)?Tu(e,()=>{}):e}function zi(e,n,t){if(e.has(n)){let r=e.get(n);return t.update&&(r=t.update(r,n,e),e.set(n,r)),r}if(!t.insert)throw new Error(Ve(10));const o=t.insert(n,e);return e.set(n,o),o}function ag(e){return typeof e=="boolean"}var ig=()=>function(n){const{thunk:t=!0,immutableCheck:o=!0,serializableCheck:r=!0,actionCreatorCheck:a=!0}=n??{};let i=new Nu;return t&&(ag(t)?i.push(tg):i.push(og(t.extraArgument))),i},sg="RTK_autoBatch",Iu=e=>n=>{setTimeout(n,e)},lg=typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:Iu(10),ug=(e={type:"raf"})=>n=>(...t)=>{const o=n(...t);let r=!0,a=!1,i=!1;const s=new Set,l=e.type==="tick"?queueMicrotask:e.type==="raf"?lg:e.type==="callback"?e.queueNotification:Iu(e.timeout),u=()=>{i=!1,a&&(a=!1,s.forEach(d=>d()))};return Object.assign({},o,{subscribe(d){const c=()=>r&&d(),m=o.subscribe(c);return s.add(d),()=>{m(),s.delete(d)}},dispatch(d){var c;try{return r=!((c=d==null?void 0:d.meta)!=null&&c[sg]),a=!r,a&&(i||(i=!0,l(u))),o.dispatch(d)}finally{r=!0}}})},dg=e=>function(t){const{autoBatch:o=!0}=t??{};let r=new Nu(e);return o&&r.push(ug(typeof o=="object"?o:void 0)),r};function cg(e){const n=ig(),{reducer:t=void 0,middleware:o,devTools:r=!0,preloadedState:a=void 0,enhancers:i=void 0}=e;let s;if(typeof t=="function")s=t;else if(xa(t))s=Hp(t);else throw new Error(Ve(1));let l;typeof o=="function"?l=o(n):l=n();let u=Ro;r&&(u=rg({trace:!1,...typeof r=="object"&&r}));const d=zp(...l),c=dg(d);let m=typeof i=="function"?i(c):c();const y=u(...m);return mu(s,a,y)}function ku(e){const n={},t=[];let o;const r={addCase(a,i){const s=typeof a=="string"?a:a.type;if(!s)throw new Error(Ve(28));if(s in n)throw new Error(Ve(29));return n[s]=i,r},addMatcher(a,i){return t.push({matcher:a,reducer:i}),r},addDefaultCase(a){return o=a,r}};return e(r),[n,t,o]}function mg(e){return typeof e=="function"}function yg(e,n){let[t,o,r]=ku(n),a;if(mg(e))a=()=>Hi(e());else{const s=Hi(e);a=()=>s}function i(s=a(),l){let u=[t[l.type],...o.filter(({matcher:d})=>d(l)).map(({reducer:d})=>d)];return u.filter(d=>!!d).length===0&&(u=[r]),u.reduce((d,c)=>{if(c)if(Wn(d)){const y=c(d,l);return y===void 0?d:y}else{if(ln(d))return Tu(d,m=>c(m,l));{const m=c(d,l);if(m===void 0){if(d===null)return d;throw new Error(Ve(9))}return m}}return d},s)}return i.getInitialState=a,i}var pg=Symbol.for("rtk-slice-createasyncthunk");function gg(e,n){return`${e}/${n}`}function fg({creators:e}={}){var t;const n=(t=e==null?void 0:e.asyncThunk)==null?void 0:t[pg];return function(r){const{name:a,reducerPath:i=a}=r;if(!a)throw new Error(Ve(11));const s=(typeof r.reducers=="function"?r.reducers(Tg()):r.reducers)||{},l=Object.keys(s),u={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},d={addCase(N,b){const I=typeof N=="string"?N:N.type;if(!I)throw new Error(Ve(12));if(I in u.sliceCaseReducersByType)throw new Error(Ve(13));return u.sliceCaseReducersByType[I]=b,d},addMatcher(N,b){return u.sliceMatchers.push({matcher:N,reducer:b}),d},exposeAction(N,b){return u.actionCreators[N]=b,d},exposeCaseReducer(N,b){return u.sliceCaseReducersByName[N]=b,d}};l.forEach(N=>{const b=s[N],I={reducerName:N,type:gg(a,N),createNotation:typeof r.reducers=="function"};Ng(b)?kg(I,b,d,n):bg(I,b,d)});function c(){const[N={},b=[],I=void 0]=typeof r.extraReducers=="function"?ku(r.extraReducers):[r.extraReducers],h={...N,...u.sliceCaseReducersByType};return yg(r.initialState,C=>{for(let k in h)C.addCase(k,h[k]);for(let k of u.sliceMatchers)C.addMatcher(k.matcher,k.reducer);for(let k of b)C.addMatcher(k.matcher,k.reducer);I&&C.addDefaultCase(I)})}const m=N=>N,y=new Map;let g;function f(N,b){return g||(g=c()),g(N,b)}function A(){return g||(g=c()),g.getInitialState()}function v(N,b=!1){function I(C){let k=C[N];return typeof k>"u"&&b&&(k=A()),k}function h(C=m){const k=zi(y,b,{insert:()=>new WeakMap});return zi(k,C,{insert:()=>{const S={};for(const[O,R]of Object.entries(r.selectors??{}))S[O]=Ag(R,C,A,b);return S}})}return{reducerPath:N,getSelectors:h,get selectors(){return h(I)},selectSlice:I}}const T={name:a,reducer:f,actions:u.actionCreators,caseReducers:u.sliceCaseReducersByName,getInitialState:A,...v(i),injectInto(N,{reducerPath:b,...I}={}){const h=b??i;return N.inject({reducerPath:h,reducer:f},I),{...T,...v(h,!0)}}};return T}}function Ag(e,n,t,o){function r(a,...i){let s=n(a);return typeof s>"u"&&o&&(s=t()),e(s,...i)}return r.unwrapped=e,r}var vg=fg();function Tg(){function e(n,t){return{_reducerDefinitionType:"asyncThunk",payloadCreator:n,...t}}return e.withTypes=()=>e,{reducer(n){return Object.assign({[n.name](...t){return n(...t)}}[n.name],{_reducerDefinitionType:"reducer"})},preparedReducer(n,t){return{_reducerDefinitionType:"reducerWithPrepare",prepare:n,reducer:t}},asyncThunk:e}}function bg({type:e,reducerName:n,createNotation:t},o,r){let a,i;if("reducer"in o){if(t&&!Ig(o))throw new Error(Ve(17));a=o.reducer,i=o.prepare}else a=o;r.addCase(e,a).exposeCaseReducer(n,a).exposeAction(n,i?Ui(e,i):Ui(e))}function Ng(e){return e._reducerDefinitionType==="asyncThunk"}function Ig(e){return e._reducerDefinitionType==="reducerWithPrepare"}function kg({type:e,reducerName:n},t,o,r){if(!r)throw new Error(Ve(18));const{payloadCreator:a,fulfilled:i,pending:s,rejected:l,settled:u,options:d}=t,c=r(e,a,d);o.exposeAction(n,c),i&&o.addCase(c.fulfilled,i),s&&o.addCase(c.pending,s),l&&o.addCase(c.rejected,l),u&&o.addMatcher(c.settled,u),o.exposeCaseReducer(n,{fulfilled:i||lo,pending:s||lo,rejected:l||lo,settled:u||lo})}function lo(){}function Ve(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}const it=Object.freeze({markerSize:ur.markerSize,markerStrokeWidth:ur.markerStrokeWidth,lineColor:ur.lineColor,zIndex:0,fallbackFontSizePx:12,rootFontSizePx:16}),Vi=Object.freeze({brightOnDark:Object.freeze({backgroundColor:"rgba(15, 23, 42, 0.82)",textColor:"rgba(248, 250, 252, 0.98)"}),darkOnBright:Object.freeze({backgroundColor:"rgba(255, 255, 255, 0.9)",textColor:"rgba(15, 23, 42, 0.92)"})}),yC=({text:e,getScreenPosition:n,theme:t="bright-on-dark",lineColor:o,textBackgroundColor:r,textColor:a,fontSize:i,fontFamily:s,fontWeight:l,mixBlendMode:u,attach:d="center",distance:c=0,hideMarker:m=!0})=>{const y=t==="dark-on-bright"?Vi.darkOnBright:Vi.brightOnDark;return{content:e,hideMarker:m,lineColor:o,textBackgroundColor:r??y.backgroundColor,textColor:a??y.textColor,fontSize:i,fontFamily:s,fontWeight:l,mixBlendMode:u,attach:d,distance:c,getScreenPosition:n}},hg=e=>e.getScreenPosition?e.getScreenPosition():e.screenPosition??null,Cg=(e,n)=>e==="left"?`translate(${-n}px, -50%)`:e==="right"?`translate(calc(-100% + ${n}px), -50%)`:"translate(-50%, -50%)",Sg=(e=ay)=>{const n=e.trim(),t=Number.parseFloat(n);return Number.isFinite(t)?n.endsWith("rem")?t*it.rootFontSizePx:t:it.fallbackFontSizePx},Eg=({labelRoot:e,fontSize:n})=>{var r;const t=((r=e.ownerDocument.defaultView)==null?void 0:r.getComputedStyle(e).fontSize)??"",o=Number.parseFloat(t);return Number.isFinite(o)?o:Sg(n)},Og=e=>{const n=e.querySelector('[data-point-label-stem="true"]'),t=e.querySelector('[data-point-label-stem-line="true"]'),o=e.querySelector('[data-pillbutton-root="true"], [data-point-label-content-root="true"]'),r=e.querySelector('[data-pillbutton-badge="true"]'),a=e.querySelector('[data-pillbutton-content="true"]'),i=e.querySelector('[data-point-label-root="true"]');return!n||!t||!o||!i?null:{stem:n,stemLine:t,labelRoot:o,pillBadge:r,pillContent:a,pointLabelRoot:i}},Rg=({elementDiv:e,domRefs:n,state:t})=>{const o=hg(t);if(!o||t.visible===!1)return!1;e.style.left=`${o.x}px`,e.style.top=`${o.y}px`,e.style.transform="none",e.style.zIndex=`${t.zIndex??it.zIndex}`;const r=t.isOccluded?"0.75":"1";if(t.hideLabelAndStem)return n.pointLabelRoot.style.opacity=r,!0;const{labelRoot:a,pillBadge:i,pillContent:s}=n,l=a.hasAttribute("data-pillbutton-root");l?(so(i,ey(t)),so(s,t.content),i===null&&s===null&&so(a,t.content)):so(a,t.content);const u=t.angleRad??0,d=t.distance??0,c=t.attach??"center",m=Math.cos(u),y=Math.sin(u),g=t.hideMarker?0:(t.markerSize??it.markerSize)/2+(t.markerStrokeWidth??it.markerStrokeWidth)/2,f=i!==null&&s===null,A=f?i.offsetWidth:0,v=f?i.offsetHeight:0,T=v>0?v/2:null,N=l&&a.offsetHeight>0?a.offsetHeight/2:null,b=c==="center"?0:T??N??ny(Eg({labelRoot:a,fontSize:t.fontSize})),I=t.stemStartDistance??g,h={x:m*I,y:y*I},C={x:m*(d+b),y:y*(d+b)},k=A>0&&v>0?ty(h,C,c,A,v):b>0?oy(h,C,b):{x:m*d,y:y*d},S=k.x-h.x,O=k.y-h.y,R=Math.hypot(S,O);return n.stem.style.display=R>0?"block":"none",n.stem.style.left=`${h.x}px`,n.stem.style.top=`${h.y}px`,n.stem.style.transformOrigin="0 0",n.stem.style.transform=`rotate(${Math.atan2(O,S)}rad)`,n.stemLine.style.width=`${R}px`,n.stemLine.style.borderBottom=`1px ${t.isOccluded?"dashed":"solid"} ${t.lineColor??it.lineColor}`,a.style.left=`${C.x}px`,a.style.top=`${C.y}px`,a.style.transform=l?Cg(c,b):ry(c),n.pointLabelRoot.style.opacity=r,!0};function kt(e){const n={current:null};return{facade:e(()=>n.current),register:t=>{n.current=t}}}const{facade:pC,register:Lg}=kt(e=>({isAvailable:()=>e()!==null,getState:()=>{var n,t;return((t=(n=e())==null?void 0:n.getState)==null?void 0:t.call(n))??null},subscribe:n=>{var t,o;return((o=(t=e())==null?void 0:t.subscribe)==null?void 0:o.call(t,n))??(()=>{})},activateTool:n=>{var t,o;return((o=(t=e())==null?void 0:t.activateTool)==null?void 0:o.call(t,n))??Promise.resolve(!1)},pickAt:n=>{var t,o;return((o=(t=e())==null?void 0:t.pickAt)==null?void 0:o.call(t,n))??Promise.resolve(!1)},finish:()=>{var n,t;return((t=(n=e())==null?void 0:n.finish)==null?void 0:t.call(n))??Promise.resolve(null)},cancel:()=>{var n,t;return(t=(n=e())==null?void 0:n.cancel)==null?void 0:t.call(n)},answerTextPrompt:n=>{var t,o;return((o=(t=e())==null?void 0:t.answerTextPrompt)==null?void 0:o.call(t,n))??!1},createMeasurement:(n,t,o)=>{var r,a;return((a=(r=e())==null?void 0:r.createMeasurement)==null?void 0:a.call(r,n,t,o))??Promise.resolve(null)},addMeasurements:(n,t)=>{var o,r;return((r=(o=e())==null?void 0:o.addMeasurements)==null?void 0:r.call(o,n,t))??[]},exportMeasurements:()=>{var n,t;return((t=(n=e())==null?void 0:n.exportMeasurements)==null?void 0:t.call(n))??null},select:n=>{var t,o;return(o=(t=e())==null?void 0:t.select)==null?void 0:o.call(t,n)},remove:n=>{var t,o;return(o=(t=e())==null?void 0:t.remove)==null?void 0:o.call(t,n)},flyTo:n=>{var t,o;return(o=(t=e())==null?void 0:t.flyTo)==null?void 0:o.call(t,n)}})),{facade:gC,register:wg}=kt(e=>({isAvailable:()=>e()!==null,getPose:()=>{var n,t;return((t=(n=e())==null?void 0:n.getPose)==null?void 0:t.call(n))??null},setPose:n=>{var t,o;return((o=(t=e())==null?void 0:t.setPose)==null?void 0:o.call(t,n))??!1},flyToPose:(n,t)=>{var o,r;return((r=(o=e())==null?void 0:o.flyToPose)==null?void 0:r.call(o,n,t))??Promise.resolve(!1)},lookAt:(n,t,o)=>{var r,a;return((a=(r=e())==null?void 0:r.lookAt)==null?void 0:a.call(r,n,t,o))??Promise.resolve(!1)},stop:()=>{var n,t;return(t=(n=e())==null?void 0:n.stop)==null?void 0:t.call(n)}})),{facade:fC,register:AC}=kt(e=>({applyById:n=>{var t,o;return((o=(t=e())==null?void 0:t.applyById)==null?void 0:o.call(t,n))??Promise.resolve(!1)},setMappingConfig:n=>{var t,o;return((o=(t=e())==null?void 0:t.setMappingConfig)==null?void 0:o.call(t,n))??Promise.resolve(!1)},getAppliedId:()=>{var n,t;return((t=(n=e())==null?void 0:n.getAppliedId)==null?void 0:t.call(n))??null},getMappingConfig:()=>{var n,t;return((t=(n=e())==null?void 0:n.getMappingConfig)==null?void 0:t.call(n))??null},backgroundAsLayers:n=>{var t,o;return((o=(t=e())==null?void 0:t.backgroundAsLayers)==null?void 0:o.call(t,n))??n}})),$i=()=>{},{facade:vC,register:TC}=kt(e=>({addSource:n=>{var t;return((t=e())==null?void 0:t.registerContribution({sources:[n]}))??$i},addMode:n=>{var t;return((t=e())==null?void 0:t.registerContribution({additionalModes:[n]}))??$i}})),xg={localStorage:[],sessionStorage:[],localforage:[],catalogCache:[],indexedDB:[]},tn=(e,n)=>t=>{var o,r;return((r=(o=e())==null?void 0:o[n])==null?void 0:r.call(o,t))??Promise.resolve([])},{facade:bC,register:NC}=kt(e=>({all:tn(e,"all"),persistedState:tn(e,"persistedState"),layers:tn(e,"layers"),catalogCache:tn(e,"catalogCache"),favorites:tn(e,"favorites"),measurements:tn(e,"measurements"),addonOverrides:tn(e,"addonOverrides"),auth:tn(e,"auth"),localStorage:tn(e,"localStorage"),list:()=>{var n,t;return((t=(n=e())==null?void 0:n.list)==null?void 0:t.call(n))??Promise.resolve(xg)}})),{facade:IC,register:kC}=kt(e=>({openMenu:()=>{var n,t;return(t=(n=e())==null?void 0:n.openMenu)==null?void 0:t.call(n)},openHelperOverlay:()=>{var n,t;return(t=(n=e())==null?void 0:n.openHelperOverlay)==null?void 0:t.call(n)}})),ve={FLY_TO:"flyTo",EXPORT:"export",VISIBILITY:"visibility",REFERENCE:"reference",LOCK:"lock",STYLE:"style",DELETE:"delete"},Ue=(()=>{const e="1rem",n="0.8571rem",t="1rem";return Object.freeze({rootFontSizeRem:e,supportFontSizeRem:n,headingFontSizeRem:t,headingFontWeight:600,headingTypographyClassName:`text-[${n}] font-semibold tracking-[0.03em]`,titleTypographyClassName:`text-[${t}] font-semibold leading-[1.25]`})})(),Be=Object.freeze({borderRadiusRem:"0.2143rem",hairlineBorderWidthRem:"0.0357rem",panelInsetShadowYOffsetRem:"0.0714rem",panelInsetShadowBlurRem:"0.0714rem",panelBackdropBlurRem:"0.1429rem"}),ee=Object.freeze({heading:ae.ACCENT_MEASUREMENTS,panelSurface:ae.NEUTRAL_SURFACE_SUBTLE,panelBorder:ae.NEUTRAL_BORDER_SUBTLE,shadowBase:ae.NEUTRAL_BLACK,bodyText:ae.NEUTRAL_TEXT_PRIMARY,mutedText:ae.NEUTRAL_TEXT_MUTED,linkText:ae.WUPP_BLUE,fieldText:ae.NEUTRAL_TEXT_STRONG,fieldBorder:ae.NEUTRAL_BORDER_DEFAULT,fieldInputBorder:ae.NEUTRAL_BORDER_INPUT,fieldFocusBackground:ae.STATE_FOCUS_BACKGROUND_WARM,fieldFocusOutline:ae.STATE_FOCUS_OUTLINE,titleText:ae.NEUTRAL_TEXT_STRONG}),Ar=Object.freeze({panelSurface:.9,panelBorder:.9,panelInsetShadow:.02}),qg=Object.freeze({defaultPixelWidth:430,headingColor:ee.heading,headerStyle:{},bodyPanelStyle:{backgroundColor:lr(ee.panelSurface,Ar.panelSurface),border:`${Be.hairlineBorderWidthRem} solid ${lr(ee.panelBorder,Ar.panelBorder)}`,boxShadow:`${lr(ee.shadowBase,Ar.panelInsetShadow)} 0 ${Be.panelInsetShadowYOffsetRem} ${Be.panelInsetShadowBlurRem} inset`,backdropFilter:`blur(${Be.panelBackdropBlurRem})`,WebkitBackdropFilter:`blur(${Be.panelBackdropBlurRem})`},resolveActionTooltipPopupContainer:e=>e.closest('[data-test-id="annotation-info-box"]')??e.ownerDocument.body,headerForegroundClassName:"text-white/80",headerTitleClassName:`truncate ${Ue.headingTypographyClassName}`,subtitleContainerClassName:"mb-0 w-full px-2 pt-[0.28em]",subtitleTextStyle:{color:ae.ACCENT_NEUTRALS},subtitleTextClassName:`px-2 text-[${Ue.supportFontSizeRem}] leading-[1.1] font-semibold`,subtitleMetaTextStyle:{color:ae.ACCENT_NEUTRALS},subtitleMetaTextClassName:`mt-[0.08em] whitespace-nowrap text-[${Ue.supportFontSizeRem}] leading-[1.1] font-semibold`,showSubtitleMetaText:!0,readOnly:!1,bodyContainerClassName:"px-2 pb-2 pt-1",bodyTextStyle:{fontSize:Ue.rootFontSizeRem,lineHeight:1.4,color:ee.bodyText},bodyTextClassName:`text-[${Ue.rootFontSizeRem}] leading-[1.4] text-[${ee.bodyText}]`,emptyContentLineStyle:{minHeight:"1.4em"},emptyContentLineClassName:"w-full",mutedTextClassName:`text-[${ee.mutedText}]`,linkTextClassName:`text-[${ee.linkText}]`,actionIconClassName:"transition-colors",actionIconColor:ae.ACCENT_NEUTRALS,actionIconHoverColor:ae.ACCENT_NEUTRALS_HOVER,actionIconFontSize:null,hiddenActionIds:[],fieldTextClassName:`text-[${ee.fieldText}]`,fieldBorderClassName:`border-[${Be.hairlineBorderWidthRem}] border-[${ee.fieldBorder}]`,fieldInputBorderClassName:`border-[${Be.hairlineBorderWidthRem}] border-[${ee.fieldInputBorder}]`,fieldFocusBackgroundClassName:`focus:bg-[${ee.fieldFocusBackground}]`,fieldFocusOutlineClassName:`focus:outline focus:outline-2 focus:outline-[${ee.fieldFocusOutline}]`,subtleFieldBackgroundClassName:"bg-white/85",titleTextStyle:{fontSize:Ue.headingFontSizeRem,fontWeight:Ue.headingFontWeight,lineHeight:1.25},titleTextClassName:`text-[${ee.titleText}]/80 ${Ue.titleTypographyClassName}`,titleInputClassName:`min-w-0 w-auto max-w-full appearance-none [field-sizing:content] break-words rounded-[${Be.borderRadiusRem}] border border-transparent bg-transparent px-0 py-[0.05em] text-[${ee.titleText}]/80 placeholder:text-[${ee.titleText}]/50 focus:bg-[${ee.fieldFocusBackground}] focus:outline focus:outline-2 focus:outline-[${ee.fieldFocusOutline}] ${Ue.titleTypographyClassName}`,shortLabelInputClassName:`shrink-0 w-auto appearance-none [field-sizing:content] border-[${Be.hairlineBorderWidthRem}] px-[0.5ex] py-0 text-center tabular-nums border-[${ee.fieldBorder}] bg-white/85 text-[${ee.titleText}]/80 placeholder:text-[${ee.titleText}]/80 focus:bg-[${ee.fieldFocusBackground}] focus:outline focus:outline-2 focus:outline-[${ee.fieldFocusOutline}] ${Ue.titleTypographyClassName}`,navigationInstructionContainerClassName:"mt-1 flex w-full items-center justify-center px-2 pt-1",navigationAvailabilityContainerClassName:"mt-1 flex w-full items-center justify-center px-2 pt-1",navigationSummaryContainerClassName:"mb-1 mt-0 flex w-full items-center justify-between px-2",navigationLinkFontSize:Ue.supportFontSizeRem,inlineFieldButtonClassName:`inline-flex h-5 w-5 items-center justify-center rounded border-[${Be.hairlineBorderWidthRem}] border-[${ee.fieldInputBorder}]`,colorInputClassName:`h-6 w-8 cursor-pointer rounded border-[${Be.hairlineBorderWidthRem}] border-[${ee.fieldInputBorder}] bg-transparent p-0`,inlineActionButtonClassName:`inline-flex items-center gap-1 rounded border-[${Be.hairlineBorderWidthRem}] border-[${ee.fieldInputBorder}] px-2 py-1`}),nn=e=>({...qg,...e}),Le=Object.freeze({lineLengthEpsilonPx:.001,referenceDistanceFactor:.2,lineLabelReferenceDistancePx:24,flipThresholdPx:4,referenceMinDistancePx:24,referenceMaxDistancePx:48,insideBlendFactor:.35,elevationEpsilonMeters:.001,polygonAreaEpsilonPx2:1e-6}),_g=(e,n,t=Le.flipThresholdPx)=>{if(!Number.isFinite(e))return n??1;const o=e>=0?1:-1;return!n||n===o?o:Math.abs(e)<t?n:o},To=({start:e,end:n,insidePoint:t,previousOutsideSign:o,flipThresholdPx:r=Le.flipThresholdPx,referenceDistanceFactor:a=Le.referenceDistanceFactor,referenceDistancePx:i,minDistancePx:s=Le.referenceMinDistancePx,maxDistancePx:l=Le.referenceMaxDistancePx})=>{const u=by({start:e,end:n,epsilon:Le.lineLengthEpsilonPx});if(!u)return null;const d=Ny(t,u.midpoint),c=Iy(d,u.leftUnitNormal),m=_g(-c,o,r),y=i??We(u.length*a,s,l),g=Ol(u.leftUnitNormal,m*y);return{outsideSign:m,referencePoint:El(u.midpoint,g)}},hC=(e,n,t,o=Le.referenceMinDistancePx,r=Le.referenceMaxDistancePx)=>{var a;return((a=To({start:e,end:n,insidePoint:t,minDistancePx:o,maxDistancePx:r}))==null?void 0:a.referencePoint)??null},Pg=({triangle:e,auxiliaryAltitudeMeters:n,highestAltitudeMeters:t,insideBlendFactor:o=Le.insideBlendFactor,elevationEpsilonMeters:r=Le.elevationEpsilonMeters})=>{const a=n<t-r?e.highest:e.aux;return{x:Hr(a.x,e.centroid.x,o),y:Hr(a.y,e.centroid.y,o)}},Mg=({anchor:e,target:n,aux:t,anchorAltitudeMeters:o,targetAltitudeMeters:r,previousOutsideSigns:a,insideBlendFactor:i=Le.insideBlendFactor,flipThresholdPx:s=Le.flipThresholdPx,referenceDistancePx:l=Le.lineLabelReferenceDistancePx})=>{const u=o>=r?e:n,d={anchor:e,target:n,aux:t,highest:u,centroid:{x:(e.x+n.x+t.x)/3,y:(e.y+n.y+t.y)/3}},c=Pg({triangle:d,auxiliaryAltitudeMeters:r,highestAltitudeMeters:Math.max(o,r),insideBlendFactor:i}),m=To({start:e,end:n,insidePoint:c,previousOutsideSign:a==null?void 0:a.direct,flipThresholdPx:s,referenceDistancePx:l}),y=To({start:t,end:n,insidePoint:c,previousOutsideSign:a==null?void 0:a.horizontal,flipThresholdPx:s,referenceDistancePx:l}),g=To({start:e,end:t,insidePoint:n,previousOutsideSign:a==null?void 0:a.vertical,flipThresholdPx:s,referenceDistancePx:l});return{directOutsideReferencePoint:(m==null?void 0:m.referencePoint)??null,verticalOutsideReferencePoint:(g==null?void 0:g.referencePoint)??null,horizontalOutsideReferencePoint:(y==null?void 0:y.referencePoint)??null,nextOutsideSigns:{direct:m==null?void 0:m.outsideSign,vertical:g==null?void 0:g.outsideSign,horizontal:y==null?void 0:y.outsideSign}}},Dg=e=>Sl({points:e,degenerateAreaEpsilon:Le.polygonAreaEpsilonPx2}),P={POINT:"point",DISTANCE:"distance",POLYLINE:"polyline",AREA_GROUND:"area",AREA_PLANAR:"planar",AREA_VERTICAL:"vertical",LABEL:"label"},Ln="select",CC="planar-biggest-triangle",SC="planar-pca",EC="planar-trapezoid",hu=e=>e===P.AREA_GROUND||e===P.AREA_VERTICAL||e===P.AREA_PLANAR,bo=Object.freeze({fillAlpha:.25,selectedFillAlpha:.35,rgb255ByType:{[P.AREA_VERTICAL]:[112,168,255],[P.AREA_GROUND]:[107,188,123],[P.AREA_PLANAR]:[239,223,145]}}),Cu=e=>bo.rgb255ByType[e],Bg=(e,n)=>$e(Cu(e),n),Wi=e=>typeof e=="number"&&Number.isFinite(e)&&e>=0&&e<=1,Fg=(e={})=>{const n=Wi(e.fillAlpha)?e.fillAlpha:bo.fillAlpha,t=Wi(e.selectedFillAlpha)?e.selectedFillAlpha:bo.selectedFillAlpha,o=r=>{var a;return((a=e.rgb255ByType)==null?void 0:a[r])??bo.rgb255ByType[r]};return{rgb255:o,fillCssColor:(r,a)=>$e(o(r),a?t:n),cssColor:(r,a)=>$e(o(r),a)}},OC=Fg(),Ce={DIRECT:"direct",VERTICAL:"vertical",HORIZONTAL:"horizontal"},dn=Object.freeze({textRgb255:{dark:[17,24,39],light:[255,255,255]},labelTextRgb255:[248,250,252],shortLabelRgb255ByType:{[P.POINT]:[200,200,200],[P.DISTANCE]:[102,126,234],[P.POLYLINE]:[226,178,60],[P.LABEL]:[88,152,255]},surfaceRgb255:{stroke:[255,255,255],accent:[246,248,255]},lineComponentRgb255ByKind:{[Ce.DIRECT]:[255,255,255],[Ce.VERTICAL]:[111,168,255],[Ce.HORIZONTAL]:[188,194,102]},selectionRgb255:{background:[15,23,42],hoverBackground:[30,41,59],glow:[255,255,255]}}),kn=Object.freeze({alpha:{text:{dark:.9,light:1},shortLabelBackgroundByType:{[P.POINT]:.92,[P.DISTANCE]:.95,[P.POLYLINE]:.95,[P.LABEL]:.95,area:.95},lineComponentByKind:{[Ce.DIRECT]:1,[Ce.VERTICAL]:.96,[Ce.HORIZONTAL]:.95},lineComponentLabelAccentByKind:{[Ce.DIRECT]:.34,[Ce.VERTICAL]:.54,[Ce.HORIZONTAL]:.5},selection:{background:.92,hoverBackground:.9,glow:1},surfaceStroke:.95}}),xn=(e,n=kn.alpha.text[e])=>$e(dn.textRgb255[e],n),No=(e=kn.alpha.surfaceStroke)=>$e(dn.surfaceRgb255.stroke,e),Gg=(e=kn.alpha.surfaceStroke)=>$e(dn.surfaceRgb255.accent,e),vr=(e,n=kn.alpha.lineComponentByKind[e])=>$e(dn.lineComponentRgb255ByKind[e],n),Tr=(e,n=kn.alpha.lineComponentLabelAccentByKind[e])=>$e(dn.lineComponentRgb255ByKind[e],n),qn=e=>hu(e)?Bg(e,kn.alpha.shortLabelBackgroundByType.area):$e(dn.shortLabelRgb255ByType[e],kn.alpha.shortLabelBackgroundByType[e]),RC=e=>hu(e)?Cu(e):dn.shortLabelRgb255ByType[e],Yi=(e,n=kn.alpha.selection[e])=>$e(dn.selectionRgb255[e],n),jg=(e=1)=>$e(dn.labelTextRgb255,e),Mn=Object.freeze({fontFamily:'"Helvetica Neue", Arial, Helvetica, sans-serif',fontWeight:{regular:400,medium:500,semibold:600},fontSizePx:{supportText:12,pointLabel:14,measurementLabel:16,compactBadge:10,distancePairLabel:11}}),Ug=e=>{if(!Number.isFinite(e)||e<0)return"A";let n=Math.floor(e),t="";do t=String.fromCharCode(65+n%26)+t,n=Math.floor(n/26)-1;while(n>=0);return t},fn={NUMERIC:"numeric",ALPHABETIC:"alphabetic"},Hg={[P.POINT]:{prefix:"",counterStyle:fn.NUMERIC,backgroundColor:qn(P.POINT),textColor:xn("dark")},[P.DISTANCE]:{prefix:"",counterStyle:fn.ALPHABETIC,backgroundColor:qn(P.DISTANCE),textColor:xn("light")},[P.POLYLINE]:{prefix:"L",counterStyle:fn.NUMERIC,backgroundColor:qn(P.POLYLINE),textColor:xn("dark")},[P.AREA_GROUND]:{prefix:"A",counterStyle:fn.NUMERIC,backgroundColor:qn(P.AREA_GROUND),textColor:xn("light")},[P.AREA_PLANAR]:{prefix:"D",counterStyle:fn.NUMERIC,backgroundColor:qn(P.AREA_PLANAR),textColor:xn("light")},[P.AREA_VERTICAL]:{prefix:"F",counterStyle:fn.NUMERIC,backgroundColor:qn(P.AREA_VERTICAL),textColor:xn("light")},[P.LABEL]:{prefix:"T",counterStyle:fn.NUMERIC,backgroundColor:qn(P.LABEL),textColor:xn("light")}},Su=(e,n,t=Hg)=>{const o=t[e],r=Number.isFinite(n)&&n>0?Math.floor(n):1,a=o.counterStyle===fn.ALPHABETIC?Ug(r-1):`${r}`;return`${o.prefix}${a}`},Eu=/^(.*?)(\d+)$/,zg=8,Vg=(e,n)=>{const t=e==null?void 0:e.trim();if(!t)return n;const o=t.match(Eu);if(!o)return t;const[,r,a]=o,i=String(Number(a)+1).padStart(a.length,"0");return`${r}${i}`},$g=(e,n)=>{const t=n.trim();return t?[t,...e.filter(o=>o!==t)].slice(0,zg):e},Qi=e=>{const n=e.match(Eu);if(!n)return null;const[,t]=n,o=t.trimEnd();return o?{baseText:o,prefix:t}:null},Wg=e=>{const n=new Set(e.filter(o=>!Qi(o))),t=new Set;return e.filter(o=>{const r=Qi(o);return r?n.has(r.baseText)||t.has(r.prefix)?!1:(t.add(r.prefix),!0):!0})},Pa=(...e)=>Wg([...new Set(e.flat().map(n=>n.trim()).filter(Boolean))]),Yg=({defaultText:e,labelTextHistory:n,labelTextSuggestions:t})=>({initialValue:Vg(n[0],e),labelSuggestions:Pa(n,t)}),LC=({annotationEntries:e,additionalSuggestions:n=[]})=>Pa([...e].reverse().filter(t=>t.toolType===P.LABEL||t.type===P.LABEL).flatMap(t=>t.displayName??t.name??[]),n),Qg="data-annotation-keyboard-shortcuts-suspended",Ki=e=>e instanceof HTMLElement?e.isContentEditable?!0:e.closest("input, textarea, select, [contenteditable]:not([contenteditable='false'])")instanceof HTMLElement:!1,Xi=e=>e instanceof HTMLElement?!!e.closest(`[${Qg}]`):!1,Ou=e=>e instanceof Element?e:e instanceof Node?e.parentElement:null,Kg=e=>{const n=Ou(e);return Ki(n)?!0:Ki(document.activeElement)},Ru=e=>{const n=Ou(e);return Kg(e)||Xi(n)||Xi(document.activeElement)},Oe={CANCEL_ACTIVE_TOOL:"cancel-active-tool",DELETE_SELECTION:"delete-selection",FINISH_MEASUREMENT:"finish-measurement",FOCUS_NEXT_NAVIGATION_ITEM:"focus-next-navigation-item",FOCUS_PREVIOUS_NAVIGATION_ITEM:"focus-previous-navigation-item",UNDO_LAST_POINT:"undo-last-point"},Xg=(e,n)=>{const t=e.key.toLowerCase(),o=e.code.toLowerCase();return n.some(r=>{const a=r.toLowerCase();return a===t||a===o})},Jg=[{action:Oe.CANCEL_ACTIVE_TOOL,keys:["Escape"]},{action:Oe.FINISH_MEASUREMENT,keys:["Enter"]},{action:Oe.FOCUS_PREVIOUS_NAVIGATION_ITEM,keys:["ArrowLeft"]},{action:Oe.FOCUS_NEXT_NAVIGATION_ITEM,keys:["ArrowRight"]},{action:Oe.DELETE_SELECTION,keys:["Delete"]},{action:Oe.UNDO_LAST_POINT,keys:["Backspace"]}],Zg=(e,{allowRepeat:n=!1}={})=>!(e.defaultPrevented||!n&&e.repeat||e.metaKey||e.ctrlKey||e.altKey||Ru(e.target)),ef=e=>!e.defaultPrevented&&!e.altKey&&!Ru(e.target)&&(e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==="a",nf=(e,n={})=>{var t;return((t=Jg.find(({action:o,keys:r})=>{var a;return!((a=n.disabledActions)!=null&&a.includes(o))&&Xg(e,r)}))==null?void 0:t.action)??null},ot=new x,tf=new x,Zr=(e,n)=>e.dot(n)<0?e.negate():e,of=({samples:e,normal:n,maxSampleCount:t,timestampMs:o=performance.now()})=>{const r=ot.copy(n);if(e.length>0){const i=e[e.length-1];i&&Zr(r,tf.set(i.normalX,i.normalY,i.normalZ))}e.push({normalX:r.x,normalY:r.y,normalZ:r.z,timestampMs:o});const a=e.length-t;a>0&&e.splice(0,a)},rf=({samples:e,fallbackNormal:n,result:t,epsilonSquared:o,maxSampleAgeMs:r,weightDecayWindowMs:a=r,weightDecayGamma:i=1,nowMs:s=performance.now()})=>{const l=s-Math.max(0,r);for(;e.length>1&&e[0].timestampMs<l;)e.shift();if(e.length===0)return n;let u=0,d=0,c=0,m=0;const y=Math.max(0,a),g=Math.max(i,.01),f=e[e.length-1];for(const v of e){ot.set(v.normalX,v.normalY,v.normalZ),Zr(ot,n);const T=Math.max(0,s-v.timestampMs),N=v===f?1:y>0?Math.pow(Math.max(0,1-T/y),g):1;N<=0||(u+=ot.x*N,d+=ot.y*N,c+=ot.z*N,m+=N)}if(m<=0)return t.copy(n);const A=1/m;return t.set(u*A,d*A,c*A),t.lengthSq()<=o?t.copy(n):(t.normalize(),Zr(t,n)),t},qt=Object.freeze({referenceLineEpsilonMeters:.001}),af=[[0,1],[0,2],[1,2]],sf=32,lf=1e-10,Ee=(e,n,t)=>{var o;return((o=e[n])==null?void 0:o[t])??0},Fe=(e,n,t,o)=>{const r=e[n];r&&(r[t]=o)},uf=e=>af.map(([n,t])=>({row:n,column:t,value:Math.abs(Ee(e,n,t))})).reduce((n,t)=>t.value>n.value?t:n),df=(e,n)=>{const t=[[0,0,0],[0,0,0],[0,0,0]];return e.forEach(o=>{const r=new x().subVectors(o,n),a=[r.x,r.y,r.z];for(let i=0;i<3;i+=1)for(let s=i;s<3;s+=1){const l=Ee(t,i,s)+(a[i]??0)*(a[s]??0);Fe(t,i,s,l),Fe(t,s,i,l)}}),t},cf=e=>{const n=e.map(r=>[...r]),t=[[1,0,0],[0,1,0],[0,0,1]];for(let r=0;r<sf;r+=1){const{row:a,column:i,value:s}=uf(n);if(s<=lf)break;const l=Ee(n,a,a),u=Ee(n,i,i),d=Ee(n,a,i),c=.5*Math.atan2(2*d,u-l),m=Math.cos(c),y=Math.sin(c);for(let g=0;g<3;g+=1){if(g===a||g===i)continue;const f=Ee(n,g,a),A=Ee(n,g,i),v=m*f-y*A,T=y*f+m*A;Fe(n,g,a,v),Fe(n,a,g,v),Fe(n,g,i,T),Fe(n,i,g,T)}Fe(n,a,a,m*m*l-2*y*m*d+y*y*u),Fe(n,i,i,y*y*l+2*y*m*d+m*m*u),Fe(n,a,i,0),Fe(n,i,a,0);for(let g=0;g<3;g+=1){const f=Ee(t,g,a),A=Ee(t,g,i);Fe(t,g,a,m*f-y*A),Fe(t,g,i,y*f+m*A)}}let o=0;for(let r=1;r<3;r+=1)Ee(n,r,r)<Ee(n,o,o)&&(o=r);return xe(new x(Ee(t,0,o),Ee(t,1,o),Ee(t,2,o)))},Ma=1e-8,Lu=(e,n,t)=>new x().crossVectors(new x().subVectors(n,e),new x().subVectors(t,e)).lengthSq(),wu=e=>{if(e.length<3)return null;let n=null,t=Ma;for(let o=0;o<e.length;o+=1){const r=e[o],a=e[(o+1)%e.length],i=e[(o+2)%e.length];if(!r||!a||!i)continue;const s=Lu(r,a,i);s>t&&(t=s,n=[r,a,i])}return n},mf=e=>{for(let n=0;n<e.length-2;n+=1)for(let t=n+1;t<e.length-1;t+=1)for(let o=t+1;o<e.length;o+=1){const r=e[n],a=e[t],i=e[o];if(r&&a&&i&&Lu(r,a,i)>Ma)return[r,a,i]}return null},xu=(e,n)=>{if(!n)return e;const t=Se(e.anchorECEF),o=xe(Se(e.normalECEF));if(!o)return e;const r=new x().subVectors(n,t);return r.lengthSq()<=Ma||o.dot(r)>=0?e:{...e,normalECEF:an(o.negate())}},qu=(e,n)=>{if(!e)return null;const[t,o,r]=e,a=iu(t,o,r);return a?xu({anchorECEF:an(t),normalECEF:an(a)},n):null},yf=(e,n)=>qu(mf(e),n),wC=(e,n)=>qu(wu(e),n),xC=(e,n)=>{if(e.length<3||!wu(e))return null;const t=kp(e),o=t&&cf(df(e,t));return!t||!o?null:xu({anchorECEF:an(t),normalECEF:an(o)},n)},pf=new x(1,0,0),gf=new x(0,1,0),ff=(e,n,t)=>{if(e.length===0)return;const o=e[0]??Se(n.anchorECEF);let r=xe(Se(n.normalECEF));if(!r)return;if(t){const l=xe(Se(t.northECEF));l&&r.dot(l)<0&&(r=r.clone().negate())}const a=xe(pt(wa(o),r));let i=a?xe(new x().crossVectors(r,a)):null;for(let l=0;!i&&l<e.length-1;l+=1){const u=e[l],d=e[l+1];!u||!d||(i=xe(pt(new x().subVectors(d,u),r)))}if(i??(i=xe(new x().crossVectors(r,pf))),i??(i=xe(new x().crossVectors(r,gf))),!i)return;const s=xe(new x().crossVectors(i,r));if(s){if(t){const l=xe(Se(t.eastECEF));l&&i.dot(l)<0&&(i=i.clone().negate(),r=r.clone().negate())}return{originECEF:an(o),eastECEF:an(i),northECEF:an(r),upECEF:an(s)}}},Af=1e-8,vf=e=>{const n=xe(Se(e.normalECEF));if(!n)return;const{east:t,north:o}=rl(Se(e.anchorECEF)),r=n.dot(t),a=n.dot(o);if(!(Math.hypot(r,a)<=Af))return Ry(Math.atan2(r,a))},_u=(e,n)=>au(e,Se(n.anchorECEF),Se(n.normalECEF)),Tf=(e,n)=>{if(e.length<3)return 0;const t=Se(n.anchorECEF),{xAxis:o,yAxis:r}=Oa(Se(n.normalECEF).normalize());return ky(e.map(a=>{const i=new x().subVectors(a,t);return{x:i.dot(o),y:i.dot(r)}}))},bf=e=>{const n=Se(e.normalECEF).normalize(),t=wa(Se(e.anchorECEF)),o=n.angleTo(t);return jt(Math.min(o,il-o))},Nf=(e,n)=>{let t=0;for(let a=1;a<e.length;a+=1){const i=e[a-1],s=e[a];i&&s&&(t+=i.distanceTo(s))}const o=e[0],r=e[e.length-1];return n&&e.length>=3&&o&&r&&(t+=r.distanceTo(o)),t},If=(e,n,t)=>{var s;const o=e.nodeIds.map(l=>n.get(l)).filter(l=>!!l),r=Nf(o,e.closed),a=o.length<3?null:yf(o,(t==null?void 0:t.preferredFacingPositionECEF)??null);if(!a)return{...e,perimeterMeters:r,areaSquareMeters:0};const i=e.closed||e.planeLocked?Tf(o,a):0;return{...e,plane:a,planarPolygonLocalFrame:e.type===P.AREA_VERTICAL?ff(o,a,(s=t==null?void 0:t.previousDerivedGeometry)==null?void 0:s.planarPolygonLocalFrame):void 0,perimeterMeters:r,areaSquareMeters:i,verticalityDeg:bf(a),bearingRad:vf(a)}},Ji=Object.freeze({componentEpsilonMeters:.05}),Pu=(e,n)=>{const t=wa(e),o=new x().subVectors(n,e),r=o.dot(t),a=new x().copy(t).multiplyScalar(r),i=pt(o,t),s=i.length(),l=Math.abs(r);if(s<Ji.componentEpsilonMeters||l<Ji.componentEpsilonMeters)return null;const u=new x().addVectors(e,i),d=new x().addVectors(e,a),c=new x().addVectors(e,t),m=iu(e,c,u),y=g=>m?au(g,e,m):g;return{adjacentHorizontalCorner:y(u),adjacentVerticalCorner:y(d)}},qC=(e,n)=>{const t=Pu(e,n);if(!t)return 0;const o=e.distanceTo(t.adjacentHorizontalCorner),r=e.distanceTo(t.adjacentVerticalCorner);return o*r},Mu=1e-8,ea=.001,kf=1e-6,Zi=16,Du=Oa,es=e=>!e||e.lengthSq()<=Mu?null:e.clone().normalize(),hf=(e,n,t)=>{const o=es(n),r=es(t);return o?r&&o.dot(r)<0||o.dot(Vr(e))<0?o.negate():o:r||Vr(e)},Cf=(e,n,t,o=new ba)=>{const r=Math.max(t,ea),a=n.clone().normalize(),{xAxis:i,yAxis:s}=Du(a);return o.makeBasis(i,s,a).scale(new x(r,r,1)).setPosition(e)},Sf=(e,n,t,o,r)=>{const a=Math.max(o,ea);if(r===void 0)return a;const i=e(n);if(!i)return a;const{xAxis:s,yAxis:l}=Du(t),u=new x;let d=0;for(let c=0;c<Zi;c+=1){const m=c/Zi*Uo;u.copy(n).addScaledVector(s,Math.cos(m)).addScaledVector(l,Math.sin(m));const y=e(u);if(!y)continue;const g=Math.hypot(y.x-i.x,y.y-i.y);Number.isFinite(g)&&g>d&&(d=g)}return d<=kf?a:Math.max(r/d,ea)},_C={CESIUM:"cesium",MAPLIBRE_THREE:"maplibre-three"},Ef={COLOR:"color",CHROME_MIRROR:"chrome-mirror",FROSTED_GLASS:"frosted-glass"},ns={GROUND:"ground",COPLANAR:"coplanar"},ts={IMMEDIATE:"immediate",DELAYED_LINE_FINISH:"delayed-line-finish"},PC={SHIFT:"shift"},MC={SCREEN:"screen",WORLD:"world"},Z=e=>!!e&&!e.isDestroyed(),Of=(e,n)=>e===n?!0:!e||!n?!1:e.viewportWidth===n.viewportWidth&&e.viewportHeight===n.viewportHeight&&e.viewKey===n.viewKey,os=Object.freeze({tooltipZIndex:1700,triggerClassName:"inline-flex items-center text-[16px] leading-none"}),An=({actionId:e,title:n,icon:t,onClick:o,dataTestId:r,className:a,ariaLabel:i,disabled:s=!1,visualOptions:l})=>{var f;const u=nn(l),[d,c]=p.useState(!1),m=`${u.actionIconClassName}${a?` ${a}`:""}${s?" cursor-not-allowed opacity-50":" cursor-pointer"}`,y={color:d&&!s?u.actionIconHoverColor:u.actionIconColor};u.actionIconFontSize!==null&&(y.fontSize=u.actionIconFontSize);const g=(f=u.renderActionIcon)==null?void 0:f.call(u,{actionId:e,icon:t,className:m,style:y,dataTestId:r,ariaLabel:i,disabled:s});return E.jsx(ml,{title:n,zIndex:os.tooltipZIndex,getPopupContainer:A=>{const v=A instanceof HTMLElement?A:document.body;return u.resolveActionTooltipPopupContainer(v)},children:E.jsx("span",{onClick:A=>{if(s){A.stopPropagation();return}o(A)},onMouseEnter:()=>c(!0),onMouseLeave:()=>c(!1),className:os.triggerClassName,"aria-label":i,"aria-disabled":s,children:g??E.jsx(yt,{className:m,style:y,icon:t,"data-test-id":r,"aria-hidden":i?void 0:!0})})})};An.__docgenInfo={description:"",methods:[],displayName:"AnnotationInfoBoxActionIcon",props:{actionId:{required:!0,tsType:{name:"unknown[union]",raw:"(typeof ANNOTATION_INFO_BOX_ACTION_IDS)[keyof typeof ANNOTATION_INFO_BOX_ACTION_IDS]"},description:""},title:{required:!0,tsType:{name:"string"},description:""},icon:{required:!0,tsType:{name:"IconDefinition"},description:""},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: ReactMouseEvent<HTMLElement, MouseEvent>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",elements:[{name:"HTMLElement"},{name:"MouseEvent"}],raw:"ReactMouseEvent<HTMLElement, MouseEvent>"},name:"event"}],return:{name:"void"}}},description:""},dataTestId:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},visualOptions:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};const Rf=Object.freeze({flyTo:"Zur Messung fliegen",exportGeoJson:"Als GeoJSON exportieren",show:"Einblenden",hide:"Ausblenden",setReference:"Als Referenzhöhe setzen",lock:"Sperren",unlock:"Entsperren",editStyle:"Darstellung bearbeiten",delete:"Löschen",deleteLocked:"Gesperrte Messung kann nicht gelöscht werden"}),Lf=({hidden:e=!1,locked:n=!1,labels:t,onFlyTo:o,onExport:r,onToggleVisibility:a,onToggleLock:i,onEditStyle:s,onDelete:l,onSetReference:u,visualOptions:d,dataTestIdPrefix:c,dataTestIds:m})=>{const y={...Rf,...t},g=new Set((d==null?void 0:d.hiddenActionIds)??[]),f=A=>!g.has(A);return E.jsxs("div",{className:"flex items-center gap-2",children:[f(ve.FLY_TO)?E.jsx(An,{actionId:ve.FLY_TO,title:y.flyTo,icon:cm,onClick:o,dataTestId:(m==null?void 0:m.flyTo)??`${c}-flyto-btn`,visualOptions:d}):null,f(ve.EXPORT)?E.jsx(An,{actionId:ve.EXPORT,title:y.exportGeoJson,icon:mm,onClick:r,dataTestId:(m==null?void 0:m.export)??`${c}-export-geojson-btn`,visualOptions:d}):null,f(ve.VISIBILITY)?E.jsx(An,{actionId:ve.VISIBILITY,title:e?y.show:y.hide,icon:e?ym:pm,onClick:a,dataTestId:(m==null?void 0:m.visibility)??`${c}-toggle-visibility-btn`,visualOptions:d}):null,u&&f(ve.REFERENCE)?E.jsx(An,{actionId:ve.REFERENCE,title:y.setReference,icon:gm,onClick:u,dataTestId:(m==null?void 0:m.reference)??`${c}-set-reference-btn`,visualOptions:d}):null,f(ve.LOCK)?E.jsx(An,{actionId:ve.LOCK,title:n?y.unlock:y.lock,icon:n?fm:Am,onClick:i,dataTestId:(m==null?void 0:m.lock)??`${c}-toggle-lock-btn`,visualOptions:d}):null,s&&f(ve.STYLE)?E.jsx(An,{actionId:ve.STYLE,title:y.editStyle,icon:vm,onClick:s,visualOptions:d}):null,f(ve.DELETE)?E.jsx(An,{actionId:ve.DELETE,title:n?y.deleteLocked:y.delete,icon:Tm,onClick:l,dataTestId:(m==null?void 0:m.delete)??`${c}-delete-btn`,disabled:n,visualOptions:d}):null]})};Lf.__docgenInfo={description:"",methods:[],displayName:"AnnotationInfoBoxActions",props:{hidden:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},locked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},labels:{required:!1,tsType:{name:"Partial",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};const Bu=({pixelWidth:e,fitContentWidth:n=!0,collapsedHorizontalAnchor:t="control-edge",useControlLayout:o=!0,controlPosition:r="bottomright",controlOrder:a=11,style:i,slots:s,visualOptions:l})=>{var c;const u=nn(l),d=((c=s.headingTitle)==null?void 0:c.trim())??"";return E.jsx("div",{"data-test-id":"annotation-info-box",children:E.jsx(qm,{width:e??u.defaultPixelWidth,fitContentWidth:n,useControlLayout:o,controlPosition:r,controlOrder:a,style:i,bodyStyle:u.bodyPanelStyle,onPanelClick:m=>m.stopPropagation(),collapsible:s.collapsible??!0,header:void 0,headingColor:s.headingColor??u.headingColor,headingStyle:u.headerStyle,footer:s.footer,hideSubtitleWhenCollapsed:!1,hideFooterWhenCollapsed:!0,collapsedHorizontalAnchor:t,heading:d?E.jsx("div",{className:"flex w-full items-center gap-2",children:E.jsx("span",{className:`${u.headerForegroundClassName} ${u.headerTitleClassName}`,title:d,children:d})}):void 0,subtitle:s.subtitle,content:s.content})})};Bu.__docgenInfo={description:"",methods:[],displayName:"AnnotationInfoBoxContainer",props:{pixelWidth:{required:!1,tsType:{name:"number"},description:""},fitContentWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},collapsedHorizontalAnchor:{required:!1,tsType:{name:"union",raw:'"control-edge" | "expanded-left"',elements:[{name:"literal",value:'"control-edge"'},{name:"literal",value:'"expanded-left"'}]},description:"",defaultValue:{value:'"control-edge"',computed:!1}},useControlLayout:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},controlPosition:{required:!1,tsType:{name:"union",raw:`| "topleft"
| "topright"
| "topcenter"
| "bottomleft"
| "bottomright"
| "bottomcenter"`,elements:[{name:"literal",value:'"topleft"'},{name:"literal",value:'"topright"'},{name:"literal",value:'"topcenter"'},{name:"literal",value:'"bottomleft"'},{name:"literal",value:'"bottomright"'},{name:"literal",value:'"bottomcenter"'}]},description:"",defaultValue:{value:'"bottomright"',computed:!1}},controlOrder:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"11",computed:!1}},style:{required:!1,tsType:{name:"CSSProperties"},description:""},visualOptions:{required:!1,tsType:{name:"Partial",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Partial<AnnotationInfoBoxVisualOptions>"},description:""},slots:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  headingTitle?: string;
  headingColor?: string;
  subtitle?: ReactNode;
  content?: ReactNode;
  footer?: ReactNode;
  collapsible?: boolean;
}`,signature:{properties:[{key:"headingTitle",value:{name:"string",required:!1}},{key:"headingColor",value:{name:"string",required:!1}},{key:"subtitle",value:{name:"ReactNode",required:!1}},{key:"content",value:{name:"ReactNode",required:!1}},{key:"footer",value:{name:"ReactNode",required:!1}},{key:"collapsible",value:{name:"boolean",required:!1}}]}},description:""}}};const le={TEXT:"text",ACTION:"action",ALERT:"alert",HEADING:"heading"},ft={TITLE:"title",SECTION:"section"},Qn={END:"end",START:"start"},Re={CLICK:"click",DOUBLE_CLICK:"double-click",ENTER:"enter",BACKSPACE:"backspace",ESCAPE:"escape",SHIFT:"shift",DISC_CENTER:"disc-center",DISC_OUTER:"disc-outer"},zt={INFO:"info",WARNING:"warning"},Tn={INFO:"info",WARNING:"warning"},je={STANDARD:"standard",COMPACT:"compact"},wf="#00d9ff",xf="rgba(0, 217, 255, 0.2)",qf="#004b5c",_f="#ef4444",Pf="rgba(239, 68, 68, 0.18)",Mf="#7f1d1d",Da="--carma-help-baseline",Df="1.5em",un=1.5,Vt=`var(${Da})`,Ko=`calc(var(${Da}) / 2)`,rs=.74,br=4/3,na=e=>`${un/e}em`,Fu={[Da]:Df,lineHeight:un},Gu={margin:`0 0 ${Vt}`,lineHeight:un},as={[ft.TITLE]:{margin:0,fontWeight:700,lineHeight:un},[ft.SECTION]:{margin:`${Ko} 0 0`,fontWeight:700,lineHeight:un}},Bf={gridColumn:"1 / -1"},uo={whiteSpace:"normal"},Ff={display:"inline-flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"flex-start",minWidth:0},qo={display:"inline-flex",flexWrap:"wrap",alignItems:"center",gap:"0.34em",minHeight:Vt},Gf={...qo,marginTop:Ko},jf={...qo,justifyContent:"space-between",width:"100%"},_o="1em",Uf="0.5em",ju="max-content minmax(0, 1fr)",Hf="7.75rem minmax(0, 1fr)",zf=e=>({...Fu,display:"grid",gridTemplateColumns:e===Qn.START?Hf:ju,columnGap:e===Qn.START?Uf:_o,rowGap:Ko,alignItems:"start"}),Uu={...Gu,gridColumn:"1 / -1"},Vf={...Uu,margin:0},Hu={[je.STANDARD]:{display:"grid",gridTemplateColumns:ju,columnGap:_o,alignItems:"start",margin:`0 0 ${Ko}`,lineHeight:un},[je.COMPACT]:{display:"contents"}},Xo={display:"inline-flex",alignItems:"center",justifyContent:"flex-end",gap:"0.22em",minHeight:Vt,whiteSpace:"nowrap"},ta={display:"flex",flexDirection:"column",alignItems:"flex-end",gap:0,whiteSpace:"nowrap"},$f={lineHeight:1},oa={[Tn.INFO]:{margin:"-0.2rem 0 0.8rem",padding:"0.48rem 0.56rem",borderRadius:4,background:xf,color:qf},[Tn.WARNING]:{margin:"-0.2rem 0 0.8rem",padding:"0.48rem 0.56rem",borderRadius:4,background:Pf,color:Mf}},Wf={[Tn.INFO]:{...oa[Tn.INFO],display:"grid",gridColumn:"1 / -1",gridTemplateColumns:"subgrid",columnGap:_o,rowGap:"0.58rem",margin:"-0.2rem 0 0.8rem",padding:"0.48rem 0"},[Tn.WARNING]:{...oa[Tn.WARNING],display:"grid",gridColumn:"1 / -1",gridTemplateColumns:"subgrid",columnGap:_o,rowGap:"0.58rem",margin:"-0.2rem 0 0.8rem",padding:"0.48rem 0"}},Yf={minWidth:0,fontWeight:600,lineHeight:un},Qf={[je.STANDARD]:{minWidth:0,lineHeight:un,whiteSpace:"nowrap"},[je.COMPACT]:{minWidth:0,lineHeight:un}},zu={display:"inline-flex",boxSizing:"border-box",minWidth:"3.4em",height:na(rs),alignItems:"center",justifyContent:"center",border:"1px solid rgba(0, 0, 0, 0.34)",borderRadius:"0.28rem",background:"rgba(255, 255, 255, 0.68)",boxShadow:"inset 0 -1px 0 rgba(0, 0, 0, 0.2)",color:"#1f2937",fontSize:`${rs}em`,fontWeight:700,lineHeight:1,padding:"0 0.58em"},Kf={...zu,gap:"0.22rem"},Xf={display:"inline-flex",minWidth:Vt,height:Vt,alignItems:"center",justifyContent:"center",lineHeight:1},Jf={[zt.INFO]:{color:wf},[zt.WARNING]:{color:_f}},Zf={display:"inline-flex",alignItems:"center",justifyContent:"center",minWidth:na(br),height:na(br),fontSize:`${br}em`,lineHeight:1,color:ae.ACCENT_NEUTRALS},Nr={de:{alternative:"oder",click:"Klick",doubleClick:"2x Klick"},en:{alternative:"or",click:"Click",doubleClick:"Double click"}},eA=e=>{const n=e==null?void 0:e.split("-")[0];return n&&Nr[n]?Nr[n]:Nr.en},_t=e=>E.jsx("span",{style:zu,children:e}),ra=e=>E.jsxs("span",{style:Kf,children:[E.jsx(yt,{icon:Im}),E.jsx("span",{children:e})]}),aa=e=>E.jsx("span",{style:Zf,children:E.jsx(yt,{icon:e})}),$t=e=>E.jsx("span",{style:Xf,children:E.jsx(yt,{style:Jf[e],icon:e===zt.WARNING?bm:Nm})}),Vu=e=>$t(e===Tn.WARNING?zt.WARNING:zt.INFO),$u=(e,n)=>_t(Fp(e,n)),Wu=(e,n,t,o)=>{switch(e){case Re.CLICK:return ra(o.click);case Re.DOUBLE_CLICK:return ra(o.doubleClick);case Re.ENTER:return _t("Enter");case Re.BACKSPACE:return $u(t,n);case Re.ESCAPE:return _t(n.escape);case Re.SHIFT:return _t(n.shift);case Re.DISC_CENTER:return aa(Rp);case Re.DISC_OUTER:return aa(km)}},Po=(e,n,t,o)=>E.jsx("span",{style:Xo,children:e.map((r,a)=>E.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"0.22rem"},children:[a>0?E.jsx("span",{children:"+"}):null,Wu(r,n,t,o)]},`${r}-${a}`))}),Yu=(e,n,t,o,r,a)=>a===je.COMPACT?E.jsxs("span",{style:ta,children:[e?$t(e):null,n.map((i,s)=>E.jsxs("span",{style:ta,children:[s>0?E.jsx("span",{style:$f,children:r.alternative}):null,Po(i,t,o,r)]},`${i.join("+")}-${s}`))]}):E.jsxs("span",{style:Xo,children:[e?$t(e):null,n.map((i,s)=>E.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"0.22rem"},children:[s>0?E.jsx("span",{children:r.alternative}):null,Po(i,t,o,r)]},`${i.join("+")}-${s}`))]}),Qu=(e,n,t,o)=>{const r=e.inputAlternatives.length-1;return E.jsxs("span",{style:Ff,children:[e.inputAlternatives.length===0?e.leadingLabel&&E.jsx("span",{style:qo,children:E.jsx("span",{style:uo,children:e.leadingLabel})}):e.inputAlternatives.map((a,i)=>E.jsxs("span",{style:e.rightAlignInput&&i===0?jf:i===0?qo:Gf,children:[i===0&&e.leadingLabel?E.jsx("span",{style:uo,children:e.leadingLabel}):null,i===0&&e.indicator?$t(e.indicator):null,Po(a,n,t,o),i<r?E.jsx("span",{children:o.alternative}):null,i===r&&e.trailingLabelAfterLastInput&&e.trailingLabel?E.jsx("span",{style:uo,children:e.trailingLabel}):null]},`${a.join("+")}-${i}`)),e.trailingLabel&&!e.trailingLabelAfterLastInput?E.jsx("span",{style:uo,children:e.trailingLabel}):null]})};_t.__docgenInfo={description:"",methods:[],displayName:"renderKeyToken"};ra.__docgenInfo={description:"",methods:[],displayName:"renderPointerToken"};aa.__docgenInfo={description:"",methods:[],displayName:"renderDragTargetToken"};$t.__docgenInfo={description:"",methods:[],displayName:"renderActionIndicatorToken"};Vu.__docgenInfo={description:"",methods:[],displayName:"renderAlertSeverityToken"};$u.__docgenInfo={description:"",methods:[],displayName:"renderBackspaceToken"};Wu.__docgenInfo={description:"",methods:[],displayName:"renderHelpActionInput"};Po.__docgenInfo={description:"",methods:[],displayName:"renderHelpActionInputCombination"};Yu.__docgenInfo={description:"",methods:[],displayName:"renderHelpActionInputAlternatives"};Qu.__docgenInfo={description:"",methods:[],displayName:"renderStartAlignedTrigger"};const nA=()=>typeof navigator>"u"?void 0:navigator.language,tA=e=>e===je.COMPACT?e:je.STANDARD,oA=e=>typeof e=="string"||e.kind===le.TEXT,is=e=>typeof e!="string"&&e.kind===le.ALERT,rA=e=>{const n=e.findIndex(oA);if(n<=0)return e;const t=e.slice(0,n),o=t.filter(is);return o.length===0?e:[...t.filter(r=>!is(r)),e[n],...o,...e.slice(n+1)]},co=(e,n,t=!1)=>{const o=typeof e=="string"?e:e.text;return E.jsx("p",{style:n===je.COMPACT?t?Vf:Uu:Gu,children:o},o)},ss=(e,n,t)=>{const o=e.level??ft.SECTION;return E.jsx("div",{"data-testid":"annotation-help-heading","data-level":o,style:t===je.COMPACT?{...as[o],...Bf}:as[o],children:e.text},`heading-${e.text}-${n}`)},ia=(e,n,t,o,r,a,i=Qn.END)=>{const l=i===Qn.START?Qu(e,t,o,r):(e.inputAlternatives.length>0||e.indicator?Yu(e.indicator,e.inputAlternatives,t,o,r,a):null)??E.jsx("span",{style:Xo});return E.jsxs("div",{"data-testid":"annotation-help-action",style:Hu[a],children:[l,E.jsx("span",{style:Qf[a],children:e.description})]},`${e.inputAlternatives.map(u=>u.join("+")).join("-")}-${e.leadingLabel??""}-${n}`)},ls=(e,n,t,o,r,a)=>{const i=e.actions??[],s=a===je.COMPACT?Wf[e.severity]:oa[e.severity];return E.jsxs("div",{"data-testid":"annotation-help-alert","data-severity":e.severity,style:s,children:[E.jsxs("div",{style:Hu[a],children:[E.jsx("span",{style:a===je.COMPACT?ta:Xo,children:Vu(e.severity)}),E.jsx("span",{style:Yf,children:e.text})]}),i.map((l,u)=>ia(l,u,t,o,r,a))]},`${e.severity}-${e.text}-${n}`)},Jo=({items:e,layout:n,locale:t,platform:o,actionTriggerAlign:r=Qn.END})=>{const a=tA(n),i=t??nA(),s=Bp(i),l=Dp(o),u=eA(i),d=rA(e);if(a===je.COMPACT){const m=d.map((y,g)=>typeof y=="string"||y.kind===le.TEXT?co(y,a,g===d.length-1):y.kind===le.HEADING?ss(y,g,a):y.kind===le.ALERT?ls(y,g,s,l,u,a):ia(y,g,s,l,u,a,r));return E.jsx("div",{"data-testid":"annotation-help-content",style:zf(r),children:m})}const c=d.map((m,y)=>typeof m=="string"||m.kind===le.TEXT?co(m,a):m.kind===le.HEADING?ss(m,y,a):m.kind===le.ALERT?ls(m,y,s,l,u,a):ia(m,y,s,l,u,a,r));return E.jsx("div",{"data-testid":"annotation-help-content",style:Fu,children:c})};Jo.__docgenInfo={description:"",methods:[],displayName:"AnnotationInfoBoxHelpContent",props:{items:{required:!0,tsType:{name:"unknown"},description:""},layout:{required:!1,tsType:{name:"unknown[union]",raw:"(typeof ANNOTATION_INFO_BOX_HELP_LAYOUTS)[keyof typeof ANNOTATION_INFO_BOX_HELP_LAYOUTS]"},description:""},locale:{required:!1,tsType:{name:"string"},description:""},platform:{required:!1,tsType:{name:"KeyboardDisplayPlatform"},description:""},actionTriggerAlign:{required:!1,tsType:{name:"unknown[union]",raw:"(typeof ANNOTATION_INFO_BOX_HELP_ACTION_TRIGGER_ALIGNMENTS)[keyof typeof ANNOTATION_INFO_BOX_HELP_ACTION_TRIGGER_ALIGNMENTS]"},description:"",defaultValue:{value:'"end"',computed:!1}}}};const aA=({items:e,className:n,visualOptions:t})=>{const o=nn(t),r=o.subtitleTextClassName.split(/\s+/).filter(a=>a.length>0&&!a.startsWith("px-")).join(" ");return E.jsx("dl",{className:`m-0 flex flex-wrap items-start tabular-nums${n?` ${n}`:""}`,style:{columnGap:"1.35rem",rowGap:"0.5rem"},children:e.map((a,i)=>E.jsxs("div",{className:"grid max-w-full min-w-[5rem] flex-[0_1_auto] grid-rows-[auto,auto] content-start items-start gap-y-[0.1em] text-left",children:[E.jsx("dt",{className:r,style:o.subtitleTextStyle,children:a.label}),E.jsx("dd",{className:"m-0 leading-[1.25]",children:a.value})]},a.id??i))})};aA.__docgenInfo={description:"",methods:[],displayName:"AnnotationInfoBoxMetricGrid",props:{items:{required:!0,tsType:{name:"unknown"},description:""},className:{required:!1,tsType:{name:"string"},description:""},visualOptions:{required:!1,tsType:{name:"Partial",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Partial<AnnotationInfoBoxVisualOptions>"},description:""}}};const iA=({children:e,className:n,style:t,visualOptions:o})=>{const r=nn(o);return E.jsx("div",{className:`${r.subtitleMetaTextClassName}${n?` ${n}`:""}`,style:{...r.subtitleMetaTextStyle,...t},children:e})};iA.__docgenInfo={description:"",methods:[],displayName:"AnnotationInfoBoxMetaText",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""},visualOptions:{required:!1,tsType:{name:"Partial",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Partial<AnnotationInfoBoxVisualOptions>"},description:""}}};const sA=Object.freeze({entrySingular:"Messung",entryPlural:"Messungen",availableSuffix:"verfügbar",previousAriaLabel:"Vorherige Messung",nextAriaLabel:"Nächste Messung",counterSeparator:"von"}),us=(e,n)=>`${e} ${e===1?n.entrySingular:n.entryPlural} ${n.availableSuffix}`.trim(),lA=({totalEntries:e,currentIndex:n,instructionText:t,availabilityLabel:o,labels:r,onFlyToAll:a,onPrevious:i,onNext:s,visualOptions:l})=>{var g,f;const u=nn(l),d={...sA,...r};if(e<=0&&!t)return null;const c={fontSize:u.navigationLinkFontSize,border:"none",background:"transparent",padding:0,userSelect:"none"},m=((g=u.navigationControlLabels)==null?void 0:g.previous)??E.jsx(yt,{icon:hm}),y=((f=u.navigationControlLabels)==null?void 0:f.next)??E.jsx(yt,{icon:Cm});return E.jsxs(E.Fragment,{children:[t?E.jsx("div",{className:`${u.navigationInstructionContainerClassName} ${u.mutedTextClassName}`,children:E.jsx("span",{children:t})}):null,e>0?E.jsx("div",{className:u.navigationAvailabilityContainerClassName,children:a?E.jsx("button",{type:"button",className:`${u.linkTextClassName} cursor-pointer`,onClick:a,style:{border:"none",background:"transparent",padding:0},children:o??us(e,d)}):E.jsx("span",{className:u.linkTextClassName,children:o??us(e,d)})}):null,e>0?E.jsxs("div",{className:u.navigationSummaryContainerClassName,children:[E.jsx("button",{type:"button",className:`renderAsLink cursor-pointer select-none ${u.linkTextClassName}`,onClick:i,"data-test-id":"switch-measurement-left",style:c,"aria-label":d.previousAriaLabel,children:m}),E.jsxs("span",{className:"mx-4",children:[n+1," ",d.counterSeparator," ",e]}),E.jsx("button",{type:"button",className:`renderAsLink cursor-pointer select-none ${u.linkTextClassName}`,onClick:s,"data-test-id":"switch-measurement-right",style:c,"aria-label":d.nextAriaLabel,children:y})]}):null]})};lA.__docgenInfo={description:"",methods:[],displayName:"AnnotationInfoBoxNavigation",props:{totalEntries:{required:!0,tsType:{name:"number"},description:""},currentIndex:{required:!0,tsType:{name:"number"},description:""},instructionText:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},availabilityLabel:{required:!1,tsType:{name:"ReactNode"},description:""},labels:{required:!1,tsType:{name:"Partial",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};const Zo=({children:e,className:n,style:t,visualOptions:o})=>{const r=nn(o);return E.jsx("div",{className:`${r.bodyContainerClassName} ${r.bodyTextClassName}${n?` ${n}`:""}`,style:{...r.bodyTextStyle,...t},children:e})};Zo.__docgenInfo={description:"",methods:[],displayName:"AnnotationInfoBoxTextContent",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""},visualOptions:{required:!1,tsType:{name:"Partial",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Partial<AnnotationInfoBoxVisualOptions>"},description:""}}};const rt=e=>e.trim(),rn=Object.freeze({borderRadiusRem:"0.2143rem",shortLabelMaxLength:64,shortLabelWidthPaddingCh:.5,shortLabelMinWidthCh:2.5}),St=e=>rt(e).slice(0,rn.shortLabelMaxLength),uA=e=>e.slice(0,rn.shortLabelMaxLength),dA=({value:e,placeholder:n,onCommit:t,readOnly:o=!1,shortLabelValue:r,shortLabelPlaceholder:a,onShortLabelCommit:i,visualOptions:s})=>{const l=nn(s),[u,d]=p.useState(()=>rt(e)),[c,m]=p.useState(()=>St(r??"")),y=p.useRef(null),g=p.useRef(null),f=rn.shortLabelMaxLength+rn.shortLabelWidthPaddingCh,A=Math.min(Math.max(rt(c||a||"").length+rn.shortLabelWidthPaddingCh,rn.shortLabelMinWidthCh),f);p.useEffect(()=>{d(rt(e))},[e]),p.useEffect(()=>{m(St(r??""))},[r]);const v=k=>{if(o){d(rt(e));return}const S=rt(k);d(S),t(S)},T=k=>{if(!i||o){m(St(r??""));return}const S=St(k);if(!S){const O=St(r??"");m(O);return}m(S),i(S)},N=k=>{k.stopPropagation()},b=k=>{var S;k.key==="Enter"&&(k.preventDefault(),(S=y.current)==null||S.blur())},I=k=>{var S;k.key==="Enter"&&(k.preventDefault(),(S=g.current)==null||S.blur())},h={...l.titleTextStyle,flex:"0 1 auto",minWidth:"1ch",maxWidth:"100%",fieldSizing:"content"},C={...l.titleTextStyle,borderRadius:rn.borderRadiusRem,flex:"0 1 auto",width:`${A}ch`,minWidth:`${rn.shortLabelMinWidthCh}ch`,maxWidth:`min(${f}ch, 100%)`,fieldSizing:"content"};return E.jsxs("div",{className:"inline-flex min-w-0 max-w-full flex-1 items-center",style:{columnGap:"0.35em"},onMouseDown:N,onClick:N,children:[E.jsx("input",{ref:y,type:"text",value:u,placeholder:n,readOnly:o,"aria-readonly":o,className:l.titleInputClassName,style:h,onMouseDown:N,onClick:N,onChange:k=>d(k.target.value),onBlur:k=>v(k.target.value),onKeyDown:b}),i?E.jsx("input",{ref:g,type:"text",value:c,placeholder:a,readOnly:o,"aria-readonly":o,maxLength:rn.shortLabelMaxLength,className:l.shortLabelInputClassName,style:C,onMouseDown:N,onClick:N,onChange:k=>m(uA(k.target.value)),onBlur:k=>T(k.target.value),onKeyDown:I}):null]})};dA.__docgenInfo={description:"",methods:[],displayName:"AnnotationInfoBoxTitleInput",props:{value:{required:!0,tsType:{name:"string"},description:""},placeholder:{required:!0,tsType:{name:"string"},description:""},onCommit:{required:!0,tsType:{name:"signature",type:"function",raw:"(nextValue: string) => void",signature:{arguments:[{type:{name:"string"},name:"nextValue"}],return:{name:"void"}}},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},shortLabelValue:{required:!1,tsType:{name:"string"},description:""},shortLabelPlaceholder:{required:!1,tsType:{name:"string"},description:""},onShortLabelCommit:{required:!1,tsType:{name:"signature",type:"function",raw:"(nextValue: string) => void",signature:{arguments:[{type:{name:"string"},name:"nextValue"}],return:{name:"void"}}},description:""},visualOptions:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};const cA={toolButtonWidthPx:48},mA={wrapper:"w-fit max-w-full flex items-start gap-2 overflow-visible",toolButtonBase:"flex h-8 w-12 min-w-12 items-center justify-center rounded-[10px] bg-white px-2 text-gray-700 button-shadow transition-colors hover:text-gray-900",toolButtonActive:"text-[#1677ff]",toolButtonInactive:"",toolButtonDisabled:"cursor-not-allowed opacity-45 hover:text-gray-700",toolButtonBackdrop:"pointer-events-none absolute inset-0 z-0 overflow-hidden rounded-[10px]",toolGroup:"relative flex min-w-12 items-center overflow-visible",toolButtonShell:"relative overflow-visible",toolButtonIcon:"inline-flex items-center justify-center text-base leading-none",toolButtonBadge:"absolute right-0 top-0 z-10 inline-flex h-5 min-w-5 translate-x-1/3 -translate-y-1/3 items-center justify-center rounded-full bg-[#4b5563] px-1 text-[12px] font-medium leading-none text-white shadow-sm",separator:"inline-block h-[18px] w-px bg-gray-300"},Ku=({activeToolId:e,tools:n,onToolSelect:t,classNames:o,metrics:r,tooltipPlacement:a="top",getTooltipPopupContainer:i,renderToolButtonBackdrop:s,showToolTypeIndicators:l=!1})=>{const u={...mA,...o},d={...cA,...r};return E.jsx("div",{className:u.wrapper,onClick:c=>c.stopPropagation(),children:n.map(c=>{const m=c.id===e,y=c.annotationCount??0,g=c.tooltipContent??c.tooltip,f=c.ariaLabel??c.tooltip,A=s==null?void 0:s(c);return E.jsxs("div",{className:u.toolGroup,children:[E.jsxs("div",{className:u.toolButtonShell,style:{width:d.toolButtonWidthPx},children:[l&&y>0?E.jsx("span",{className:u.toolButtonBadge,children:y}):null,E.jsx(ml,{title:g,placement:a,getPopupContainer:i,children:E.jsxs("button",{type:"button",onClick:()=>t(c.id),"aria-pressed":m,"aria-label":f,disabled:c.disabled,className:["relative z-[1] overflow-hidden",u.toolButtonBase,m?u.toolButtonActive:u.toolButtonInactive,c.disabled?u.toolButtonDisabled:""].join(" "),style:{width:d.toolButtonWidthPx},children:[A?E.jsx("span",{className:u.toolButtonBackdrop,"aria-hidden":"true",children:A}):null,E.jsx("span",{className:["relative z-[1]",u.toolButtonIcon].join(" "),children:c.icon})]})})]}),c.separatorAfter?E.jsx("span",{className:u.separator,"aria-hidden":"true"}):null]},c.id)})})};Ku.__docgenInfo={description:"",methods:[],displayName:"AnnotationsToolbar",props:{activeToolId:{required:!0,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},tools:{required:!0,tsType:{name:"unknown"},description:""},onToolSelect:{required:!0,tsType:{name:"signature",type:"function",raw:"(toolId: string) => void",signature:{arguments:[{type:{name:"string"},name:"toolId"}],return:{name:"void"}}},description:""},classNames:{required:!1,tsType:{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  wrapper: string;
  toolButtonBase: string;
  toolButtonActive: string;
  toolButtonInactive: string;
  toolButtonDisabled: string;
  toolButtonBackdrop: string;
  toolGroup: string;
  toolButtonShell: string;
  toolButtonIcon: string;
  toolButtonBadge: string;
  separator: string;
}`,signature:{properties:[{key:"wrapper",value:{name:"string",required:!0}},{key:"toolButtonBase",value:{name:"string",required:!0}},{key:"toolButtonActive",value:{name:"string",required:!0}},{key:"toolButtonInactive",value:{name:"string",required:!0}},{key:"toolButtonDisabled",value:{name:"string",required:!0}},{key:"toolButtonBackdrop",value:{name:"string",required:!0}},{key:"toolGroup",value:{name:"string",required:!0}},{key:"toolButtonShell",value:{name:"string",required:!0}},{key:"toolButtonIcon",value:{name:"string",required:!0}},{key:"toolButtonBadge",value:{name:"string",required:!0}},{key:"separator",value:{name:"string",required:!0}}]}}],raw:"Partial<AnnotationsToolbarClassNames>"},description:""},metrics:{required:!1,tsType:{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  toolButtonWidthPx: number;
}`,signature:{properties:[{key:"toolButtonWidthPx",value:{name:"number",required:!0}}]}}],raw:"Partial<AnnotationsToolbarMetrics>"},description:""},tooltipPlacement:{required:!1,tsType:{name:'TooltipProps["placement"]',raw:'TooltipProps["placement"]'},description:"",defaultValue:{value:'"top"',computed:!1}},getTooltipPopupContainer:{required:!1,tsType:{name:'TooltipProps["getPopupContainer"]',raw:'TooltipProps["getPopupContainer"]'},description:""},renderToolButtonBackdrop:{required:!1,tsType:{name:"signature",type:"function",raw:"(tool: AnnotationToolbarTool) => ReactNode",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  id: string;
  label: string;
  tooltip: string;
  tooltipContent?: ReactNode;
  icon?: ReactNode;
  annotationCount?: number;
  disabled?: boolean;
  separatorAfter?: boolean;
  ariaLabel?: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"tooltip",value:{name:"string",required:!0}},{key:"tooltipContent",value:{name:"ReactNode",required:!1}},{key:"icon",value:{name:"ReactNode",required:!1}},{key:"annotationCount",value:{name:"number",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"separatorAfter",value:{name:"boolean",required:!1}},{key:"ariaLabel",value:{name:"string",required:!1}}]}},name:"tool"}],return:{name:"ReactNode"}}},description:""},showToolTypeIndicators:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const be={LABEL:"label",VISUALIZER:"visualizer"},sa=e=>`[${e}="true"]`,ds="data-annotation-label-overlay-root",cs="data-annotation-visualizer-overlay-root",Xu="data-annotation-visualizer-overlay-container",yA=sa(Xu),pA=Object.freeze([be.VISUALIZER,be.LABEL]),gA=Object.freeze({[be.LABEL]:{rootAttribute:ds,containerAttribute:iy,rootSelector:sa(ds),containerSelector:sy},[be.VISUALIZER]:{rootAttribute:cs,containerAttribute:Xu,rootSelector:sa(cs),containerSelector:yA}}),Ju=e=>gA[e],Zu=(e,n=be.LABEL)=>{var i,s;const{rootSelector:t,containerSelector:o}=Ju(n);let r=e.getOverlayContainer(),a=r;for(;r;){if(r.matches(o))return r;const l=(i=r.querySelector)==null?void 0:i.call(r,o);if(l instanceof HTMLElement)return l;if(r.matches(t))return r;const u=(s=r.querySelector)==null?void 0:s.call(r,t);if(u instanceof HTMLElement)return u;a=r,r=r.parentElement}return a},fA={position:"absolute",inset:0,overflow:"hidden",pointerEvents:"none",isolation:"isolate"},AA={position:"absolute",inset:0,overflow:"hidden",pointerEvents:"none"},vA=Object.freeze({[be.VISUALIZER]:100,[be.LABEL]:110}),ed=({groups:e=pA})=>E.jsx(E.Fragment,{children:e.map(n=>{const{rootAttribute:t,containerAttribute:o}=Ju(n);return E.jsx("div",{[t]:"true",style:{...fA,zIndex:vA[n]},children:E.jsx("div",{[o]:"true",style:AA})},n)})});ed.__docgenInfo={description:"",methods:[],displayName:"AnnotationOverlayRoots",props:{groups:{required:!1,tsType:{name:"unknown"},description:"",defaultValue:{value:`Object.freeze([
  ANNOTATION_OVERLAY_GROUP.VISUALIZER,
  ANNOTATION_OVERLAY_GROUP.LABEL,
] as const satisfies readonly AnnotationOverlayGroup[])`,computed:!0}}}};const TA=()=>new Promise(e=>{Ye.confirm({title:"Gespeicherte 3D-Messungen",content:"Diese Messungen verwenden ein älteres Speicherformat. Möchten Sie sie auf das aktuelle Format aktualisieren oder lokal im bisherigen Format weiterspeichern? Geometrie und Messwerte bleiben erhalten.",okText:"Aktualisieren",cancelText:"Bisheriges Format behalten",maskClosable:!1,onOk:()=>e(!0),onCancel:()=>e(!1)})});var nd={exports:{}},td={};/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oo=p;function bA(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var NA=typeof Object.is=="function"?Object.is:bA,IA=oo.useSyncExternalStore,kA=oo.useRef,hA=oo.useEffect,CA=oo.useMemo,SA=oo.useDebugValue;td.useSyncExternalStoreWithSelector=function(e,n,t,o,r){var a=kA(null);if(a.current===null){var i={hasValue:!1,value:null};a.current=i}else i=a.current;a=CA(function(){function l(y){if(!u){if(u=!0,d=y,y=o(y),r!==void 0&&i.hasValue){var g=i.value;if(r(g,y))return c=g}return c=y}if(g=c,NA(d,y))return g;var f=o(y);return r!==void 0&&r(g,f)?g:(d=y,c=f)}var u=!1,d,c,m=t===void 0?null:t;return[function(){return l(n())},m===null?void 0:function(){return l(m())}]},[n,t,o,r]);var s=IA(e,a[0],a[1]);return hA(function(){i.hasValue=!0,i.value=s},[s]),SA(s),s};nd.exports=td;var EA=nd.exports,_e="default"in di?U:di,ms=Symbol.for("react-redux-context"),ys=typeof globalThis<"u"?globalThis:{};function OA(){if(!_e.createContext)return{};const e=ys[ms]??(ys[ms]=new Map);let n=e.get(_e.createContext);return n||(n=_e.createContext(null),e.set(_e.createContext,n)),n}var hn=OA(),RA=()=>{throw new Error("uSES not initialized!")};function Ba(e=hn){return function(){return _e.useContext(e)}}var od=Ba(),rd=RA,LA=e=>{rd=e},wA=(e,n)=>e===n;function xA(e=hn){const n=e===hn?od:Ba(e),t=(o,r={})=>{const{equalityFn:a=wA,devModeChecks:i={}}=typeof r=="function"?{equalityFn:r}:r,{store:s,subscription:l,getServerState:u,stabilityCheck:d,identityFunctionCheck:c}=n();_e.useRef(!0);const m=_e.useCallback({[o.name](g){return o(g)}}[o.name],[o,d,i.stabilityCheck]),y=rd(l.addNestedSub,s.getState,u||s.getState,m,a);return _e.useDebugValue(y),y};return Object.assign(t,{withTypes:()=>t}),t}function qA(e){e()}function _A(){let e=null,n=null;return{clear(){e=null,n=null},notify(){qA(()=>{let t=e;for(;t;)t.callback(),t=t.next})},get(){const t=[];let o=e;for(;o;)t.push(o),o=o.next;return t},subscribe(t){let o=!0;const r=n={callback:t,next:null,prev:n};return r.prev?r.prev.next=r:e=r,function(){!o||e===null||(o=!1,r.next?r.next.prev=r.prev:n=r.prev,r.prev?r.prev.next=r.next:e=r.next)}}}}var ps={notify(){},get:()=>[]};function PA(e,n){let t,o=ps,r=0,a=!1;function i(f){d();const A=o.subscribe(f);let v=!1;return()=>{v||(v=!0,A(),c())}}function s(){o.notify()}function l(){g.onStateChange&&g.onStateChange()}function u(){return a}function d(){r++,t||(t=e.subscribe(l),o=_A())}function c(){r--,t&&r===0&&(t(),t=void 0,o.clear(),o=ps)}function m(){a||(a=!0,d())}function y(){a&&(a=!1,c())}const g={addNestedSub:i,notifyNestedSubs:s,handleChangeWrapper:l,isSubscribed:u,trySubscribe:m,tryUnsubscribe:y,getListeners:()=>o};return g}var MA=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",DA=typeof navigator<"u"&&navigator.product==="ReactNative",BA=MA||DA?_e.useLayoutEffect:_e.useEffect;function FA({store:e,context:n,children:t,serverState:o,stabilityCheck:r="once",identityFunctionCheck:a="once"}){const i=_e.useMemo(()=>{const u=PA(e);return{store:e,subscription:u,getServerState:o?()=>o:void 0,stabilityCheck:r,identityFunctionCheck:a}},[e,o,r,a]),s=_e.useMemo(()=>e.getState(),[e]);BA(()=>{const{subscription:u}=i;return u.onStateChange=u.notifyNestedSubs,u.trySubscribe(),s!==e.getState()&&u.notifyNestedSubs(),()=>{u.tryUnsubscribe(),u.onStateChange=void 0}},[i,s]);const l=n||hn;return _e.createElement(l.Provider,{value:i},t)}var GA=FA;function ad(e=hn){const n=e===hn?od:Ba(e),t=()=>{const{store:o}=n();return o};return Object.assign(t,{withTypes:()=>t}),t}var jA=ad();function UA(e=hn){const n=e===hn?jA:ad(e),t=()=>n().dispatch;return Object.assign(t,{withTypes:()=>t}),t}LA(EA.useSyncExternalStoreWithSelector);const At={AUTHORING:"authoring",EXTERNAL:"external"},Wt={DEFAULT:"default",CUSTOM:"custom"},Ir={RELATIVE:"relative",ABSOLUTE:"absolute"},Yt=(e,n)=>n?e.find(t=>t.id===n)??null:null,Fa=e=>new Set(e.filter(n=>n.annotationRole===At.EXTERNAL||n.readOnly||n.locked).flatMap(n=>n.nodeIds)),HA=e=>e===Ir.ABSOLUTE?Ir.RELATIVE:Ir.ABSOLUTE,id=()=>{const e=globalThis.crypto;if(e&&typeof e.randomUUID=="function")return e.randomUUID();const n=()=>Math.floor(Math.random()*65536).toString(16).padStart(4,"0");return`${Date.now().toString(16)}-${n()}-${n()}-${n()}-${n()}${n()}`},sd=e=>new Map(e.flatMap(n=>n.nodeIds.map(t=>[t,n.id]))),Io=(e,n)=>sd(e).get(n)??null,zA=(e,n)=>{var t;return((t=e.find(o=>o.nodeIds.includes(n)))==null?void 0:t.nodeIds)??[n]},Cn=({nodes:e,nodeLinks:n})=>{const t=new Set(e.map(i=>i.id)),o=n.map(i=>({...i,nodeIds:Array.from(new Set(i.nodeIds.filter(s=>t.has(s))))})).filter(i=>i.nodeIds.length>0),r=new Set(o.flatMap(i=>i.nodeIds)),a=e.filter(i=>!r.has(i.id)).map(i=>({id:i.id,nodeIds:[i.id]}));return[...o,...a]},VA=.1,$A=(e,n)=>Math.hypot(Sp(e,n),n.altitude-e.altitude),ld=e=>typeof e=="string"&&e.trim().length>0?e.trim():null,ud=({nodes:e,nodeLinks:n,nodeId:t,movedNodeIds:o,linkToNodeId:r})=>{const a=e.find(g=>g.id===t)??null,i=Array.from(new Set(o.filter(Boolean)));if(!a||i.length===0)return[...n];const s=new Set(i),l=n.find(g=>g.nodeIds.includes(t))??null,u=ld(r),d=u&&!s.has(u)?n.find(g=>g.nodeIds.includes(u))??null:null;return d!==null&&!d.nodeIds.some(g=>s.has(g))?Cn({nodes:e,nodeLinks:n.map(g=>g.id===d.id?{...g,nodeIds:Array.from(new Set([...g.nodeIds,...i]))}:{...g,nodeIds:g.nodeIds.filter(f=>!s.has(f))})}):!l||i.length===l.nodeIds.length?[...n]:e.filter(g=>l.nodeIds.includes(g.id)&&!s.has(g.id)).some(g=>$A(g.coordinate,a.coordinate)>VA)?Cn({nodes:e,nodeLinks:n.map(g=>g.id===l.id?{...g,nodeIds:g.nodeIds.filter(f=>!s.has(f))}:{...g})}):[...n]},ut=e=>e.reduce((n,t)=>{const o=t.match(/(\d+)$/),r=o?Number(o[1]):Number.NaN;return Number.isFinite(r)?Math.max(n,r):n},0),dd=({nodeIds:e,closed:n,previousEdgeNumericSuffix:t})=>{const o=e.slice(0,-1).map((r,a)=>({startNodeId:r,endNodeId:e[a+1]}));return n&&e.length>=3&&o.push({startNodeId:e[e.length-1],endNodeId:e[0]}),o.map((r,a)=>({id:`edge-${t+a+1}`,...r}))},WA=({toolType:e,coordinates:n,options:t,linkedNodeGroupIds:o,measurementSequenceRef:r,nodeSequenceRef:a,edgeSequenceRef:i})=>{r.current+=1;const s=`${e}-${r.current}`,l=n.map(m=>(a.current+=1,{id:`node-${a.current}`,coordinate:m})),u=l.map((m,y)=>({id:ld(o==null?void 0:o[y])??m.id,nodeIds:[m.id]})),d=dd({nodeIds:l.map(m=>m.id),closed:!!(t!=null&&t.closed),previousEdgeNumericSuffix:i.current});return i.current+=d.length,{annotationEntry:{id:s,uuid:id(),toolType:e,...t,nodeIds:l.map(m=>m.id),edgeIds:d.map(m=>m.id)},nodes:l,linkedNodeGroups:u,edges:d}},{AREA_GROUND:YA,AREA_PLANAR:QA,AREA_VERTICAL:KA,LABEL:XA,POINT:JA}=P,ZA=1,ev=new Set([YA,QA,KA]),nv=new Set([JA,XA]),la=e=>{if(e!==void 0)return e===null||typeof e=="string"||typeof e=="number"||typeof e=="boolean"?e:Array.isArray(e)?e.map(n=>la(n)).filter(n=>n!==void 0):typeof e=="object"?Object.fromEntries(Object.entries(e).flatMap(([n,t])=>{const o=la(t);return o===void 0?[]:[[n,o]]})):String(e)},tv=e=>la(e)??{},kr=({longitude:e,latitude:n,altitude:t})=>[e,n,t??0],ov=({toolType:e,coordinates:n})=>{if(n.length===0)return null;if(ev.has(e)&&n.length>=3){const t=n.map(kr);return{type:"Polygon",coordinates:[[...t,t[0]]]}}return!nv.has(e)&&n.length>=2?{type:"LineString",coordinates:n.map(kr)}:{type:"Point",coordinates:kr(n[0])}},gs=e=>{const n=(e??"").trim().toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"");return n.length>0?n:"annotation"},rv=e=>{var n,t;return{kind:e.toolType,name:((n=e.displayName)==null?void 0:n.trim())||((t=e.shortLabel)==null?void 0:t.trim())||e.id}},cd=({annotation:e,coordinates:n})=>{const t=ov({toolType:e.toolType,coordinates:n});return t?{type:"FeatureCollection",features:[{type:"Feature",id:e.id,geometry:t,properties:{exportVersion:ZA,annotationId:e.id,annotationKind:e.toolType,annotation:tv(e),nodes:n.map((r,a)=>({order:a,coordinate:r}))}}]}:null},av=({annotations:e})=>{const n=e.flatMap(({annotation:t,coordinates:o})=>{const r=cd({annotation:t,coordinates:o});return(r==null?void 0:r.features)??[]});return n.length===0?null:{type:"FeatureCollection",features:n}},fs=(e,n)=>{if(!n||typeof window>"u"||typeof document>"u")return;const t=new Blob([JSON.stringify(n,null,2)],{type:"application/geo+json;charset=utf-8"}),o=window.URL.createObjectURL(t),r=document.createElement("a");r.href=o,r.download=e,document.body.appendChild(r),r.click(),document.body.removeChild(r),window.setTimeout(()=>{window.URL.revokeObjectURL(o)},0)},{AREA_GROUND:iv,AREA_PLANAR:sv,AREA_VERTICAL:lv,DISTANCE:uv,LABEL:dv,POINT:cv,POLYLINE:mv}=P,yv=new Set([cv,uv,mv,iv,sv,lv,dv]),er=e=>yv.has(e),pv=e=>{if(e.shortLabelSource===Wt.CUSTOM)return null;const n=e.shortLabelCounter;return typeof n=="number"&&Number.isFinite(n)&&n>0?Math.floor(n):null},md=e=>{let n=1;for(;e!=null&&e.has(n);)n+=1;return n},yd=e=>{var t;const n={};for(const o of e){if(!er(o.toolType))continue;const r=pv(o);r!==null&&(n[t=o.toolType]??(n[t]=new Set)).add(r)}return n},nr=e=>{const n=yd(e),t={};for(const[o,r]of Object.entries(n))t[o]=md(r);return t},gv=({annotationEntries:e,toolType:n})=>er(n)?nr(e)[n]??1:1,pd=e=>{const n=yd(e);return e.map(t=>{var a;if(!er(t.toolType)||(a=t.shortLabel)!=null&&a.trim())return t;const o=n[t.toolType]??new Set;n[t.toolType]=o;const r=md(o);return o.add(r),{...t,shortLabel:Su(t.toolType,r),shortLabelSource:Wt.DEFAULT,shortLabelCounter:r}})},Sn=e=>{const{nodeIds:n,edgeIds:t,...o}=e;return{...o,nodeIds:[...n],edgeIds:[...t]}},En=e=>({...e,coordinate:{...e.coordinate}}),On=e=>({...e}),Rn=e=>({...e,nodeIds:[...e.nodeIds]}),Kn="annotations-runtime-persistence",vt=2,gd=new Set([1,2]),Ga="carma-3d-annotations-geojson",fd=2,fv=new Set([1,2]),Ad="carma-3d-annotation-runtime-feature",vd=1,Bn=e=>typeof e=="object"&&e!==null,Av=e=>{if(!Bn(e)||!Bn(e.properties))return null;const{carmaConf:n}=e.properties;if(!Bn(n)||!Bn(n.annotationRuntime))return null;const t=n.annotationRuntime;return t.formatId!==Ad||t.formatVersion!==vd||!Bn(t.annotation)||!Array.isArray(t.nodes)||!Array.isArray(t.linkedNodeGroups)||!Array.isArray(t.edges)?null:{annotation:Sn(t.annotation),nodes:t.nodes.map(o=>En(o)),linkedNodeGroups:t.linkedNodeGroups.map(o=>Rn(o)),edges:t.edges.map(o=>On(o))}},vv=e=>{if(!Bn(e)||e.type!=="FeatureCollection")return null;const n=e.features;if(!Array.isArray(n))return null;const t=[],o=new Map,r=new Map,a=new Map;for(const s of n){const l=Av(s);if(l){t.push(l.annotation);for(const u of l.nodes)o.set(u.id,u);for(const u of l.linkedNodeGroups)r.set(u.id,u);for(const u of l.edges)a.set(u.id,u)}}if(t.length===0)return null;const i=pd(t);return{formatId:Kn,version:vt,tables:{annotationEntries:i.map(Sn),nodes:[...o.values()].map(En),linkedNodeGroups:Cn({nodes:[...o.values()],nodeLinks:[...r.values()].map(Rn)}),edges:[...a.values()].map(On)},settings:{lastActiveToolType:null,elevationReferenceAnnotationId:null,nextShortLabelCounterByToolType:nr(i)}}},Td=e=>{const n=new Map(e.tables.nodes.map(s=>[s.id,s])),t=new Map(e.tables.annotationEntries.map(s=>[s.id,s])),o=new Map(e.tables.edges.map(s=>[s.id,s])),r=new Map;for(const s of e.tables.linkedNodeGroups)for(const l of s.nodeIds){const u=r.get(l)??[];u.push(s),r.set(l,u)}const a=av({annotations:e.tables.annotationEntries.map(s=>({annotation:s,coordinates:s.nodeIds.flatMap(l=>{var d;const u=(d=n.get(l))==null?void 0:d.coordinate;return u?[u]:[]})}))});return{type:"FeatureCollection",features:((a==null?void 0:a.features)??[]).map(s=>{var f;const l=typeof s.id=="string"?s.id:typeof((f=s.properties)==null?void 0:f.annotationId)=="string"?s.properties.annotationId:null,u=l?t.get(l):null;if(!u)return s;const d=new Set(u.nodeIds),c=new Set,m=u.nodeIds.flatMap(A=>(r.get(A)??[]).flatMap(v=>c.has(v.id)?[]:(c.add(v.id),[Rn(v)]))),y=s.properties??{},g=Bn(y.carmaConf)?y.carmaConf:{};return{...s,properties:{...y,carmaConf:{...g,annotationRuntime:{formatId:Ad,formatVersion:vd,annotation:Sn(u),nodes:u.nodeIds.flatMap(A=>{const v=n.get(A);return v?[En(v)]:[]}),linkedNodeGroups:m,edges:u.edgeIds.flatMap(A=>{const v=o.get(A);return!v||!d.has(v.startNodeId)||!d.has(v.endNodeId)?[]:[On(v)]})}}}}}),metadata:{carmaConf:{formatId:Ga,formatVersion:fd,source:"geoportal-cesium-annotations",annotationsRuntimePersistence:{formatId:Kn,version:vt,tables:{annotationEntries:e.tables.annotationEntries.map(Sn),nodes:e.tables.nodes.map(En),linkedNodeGroups:e.tables.linkedNodeGroups.map(Rn),edges:e.tables.edges.map(On)},settings:{...e.settings,nextShortLabelCounterByToolType:{...e.settings.nextShortLabelCounterByToolType}}}}}}},Mo=Object.freeze({ENVELOPE:"envelope",GEOJSON:"geojson"}),ko=Object.freeze({kind:Mo.GEOJSON,persistenceVersion:vt,geoJsonVersion:fd}),Pt=e=>typeof e=="object"&&e!==null&&!Array.isArray(e),bd=e=>e===1||e===2,As=e=>!Pt(e)||e.formatId!==Kn||!bd(e.version)||!Pt(e.tables)||!Array.isArray(e.tables.annotationEntries)||!Array.isArray(e.tables.nodes)||!Array.isArray(e.tables.linkedNodeGroups)||!Array.isArray(e.tables.edges)?null:e.version,ua=e=>{const n=As(e);if(n!==null)return{kind:Mo.ENVELOPE,persistenceVersion:n};if(!Pt(e)||e.type!=="FeatureCollection"||!Array.isArray(e.features)||!Pt(e.metadata)||!Pt(e.metadata.carmaConf))return null;const{carmaConf:t}=e.metadata;if(t.formatId!==Ga||!bd(t.formatVersion))return null;const o=As(t.annotationsRuntimePersistence);return o===null?null:{kind:Mo.GEOJSON,persistenceVersion:o,geoJsonVersion:t.formatVersion}},Tv=(e,n)=>{const t=Sn(e);if(n===2)return t;const{uuid:o,updatedAt:r,...a}=t;return a},bv=(e,n)=>{const t={...e,tables:{...e.tables,annotationEntries:e.tables.annotationEntries.map(a=>Tv(a,n.persistenceVersion)),nodes:e.tables.nodes.map(En),linkedNodeGroups:e.tables.linkedNodeGroups.map(Rn),edges:e.tables.edges.map(On)},settings:{...e.settings,nextShortLabelCounterByToolType:{...e.settings.nextShortLabelCounterByToolType}}};if(n.kind===Mo.ENVELOPE)return{...t,version:n.persistenceVersion};const o=Td(t),{carmaConf:r}=o.metadata;return{...o,metadata:{...o.metadata,carmaConf:{...r,formatVersion:n.geoJsonVersion,annotationsRuntimePersistence:{...r.annotationsRuntimePersistence,version:n.persistenceVersion}}}}},Do={INTERACTION:"interaction",MEASUREMENT:"measurement"},oe={SESSION:"session",POINT_QUERY:"pointQuery",ADD_ANNOTATION:"addAnnotation",AUTHORING_VISUALS:"authoringVisuals",KEYBOARD:"keyboard",VISUAL_MODELS:"visualModels",INFO_BOX:"infoBox"},vs=new Set,Nv=[],Iv=(e,n)=>{const t=`${e}:${n}`;vs.has(t)||(vs.add(t),console.warn(`[annotations-runtime] Plugin "${e}" is missing capability implementation "${n}". Using a no-op fallback at registry build time.`))},kv=(e,n)=>{const t=e.descriptor.order-n.descriptor.order;return t!==0?t:e.id.localeCompare(n.id)},hv=e=>{const n=new Map;return e.forEach(t=>{if(n.get(t.id))throw new Error(`Duplicate annotation tool plugin registration for "${t.id}".`);n.set(t.id,t)}),n},Cv=e=>e.reduce((n,t)=>{if(!t.annotationType)return n;const o=n.get(t.annotationType)??[];return n.set(t.annotationType,[...o,t]),n},new Map),Sv=e=>{const n=new Map;e.forEach(t=>{var a;const o=((a=t.descriptor.shortcutKey)==null?void 0:a.trim().toLowerCase())??null;if(!o)return;const r=n.get(o);if(r&&r!==t.id)throw new Error(`Duplicate annotation tool shortcut key "${t.descriptor.shortcutKey}" for "${r}" and "${t.id}".`);n.set(o,t.id)})},Ev=(e,n)=>!!(n===oe.SESSION&&e.session||n===oe.POINT_QUERY&&e.pointQuery||n===oe.ADD_ANNOTATION&&e.addAnnotation||n===oe.AUTHORING_VISUALS&&e.authoringVisuals||n===oe.KEYBOARD&&e.keyboard||n===oe.VISUAL_MODELS&&e.visualModels||n===oe.INFO_BOX&&e.infoBox||n!==oe.SESSION&&n!==oe.POINT_QUERY&&n!==oe.ADD_ANNOTATION&&n!==oe.AUTHORING_VISUALS&&n!==oe.KEYBOARD&&n!==oe.VISUAL_MODELS&&n!==oe.INFO_BOX),Ov=e=>{if(e.descriptor.id!==e.id)throw new Error(`Plugin "${e.id}" descriptor id "${e.descriptor.id}" must match plugin id.`);if(e.kind==="measurement"&&!e.visualModels)throw new Error(`Measurement plugin "${e.id}" must implement visualModels.build(...).`);if(e.kind==="measurement"&&!e.annotationType)throw new Error(`Measurement plugin "${e.id}" must declare annotationType.`);let n={...e};return(e.capabilities??[]).forEach(t=>{if(!Ev(n,t)){if(Iv(e.id,t),t===oe.SESSION){n={...n,session:{createSession:()=>({toolType:e.id,requestStart:()=>{},requestFinish:()=>!1,discardDraft:()=>{}})}};return}if(t===oe.POINT_QUERY){n={...n,pointQuery:{onPointCreated:()=>{}}};return}if(t===oe.ADD_ANNOTATION){n={...n,addAnnotation:{resolveOptions:()=>{}}};return}if(t===oe.AUTHORING_VISUALS){n={...n,authoringVisuals:{createController:()=>null}};return}if(t===oe.KEYBOARD){n={...n,keyboard:{onKeyDown:()=>!1}};return}if(t===oe.VISUAL_MODELS){n={...n,visualModels:{build:()=>null}};return}t===oe.INFO_BOX&&(n={...n,infoBox:{getSlots:()=>null}})}}),n},Rv=e=>{const t=[...e.map(Ov)].sort(kv);Sv(t);const o=hv(t),r=Cv(t);return{plugins:t,orderedDescriptors:t.map(a=>a.descriptor),byId:o,getPlugin:a=>o.get(a),assertPlugin:a=>{const i=o.get(a);if(!i)throw new Error(`Missing annotation tool plugin for tool id "${a}".`);return i},getPluginsByAnnotationType:a=>r.get(a)??Nv}},Nd=e=>{var t;const n=e.find(o=>o.id===Ln&&o.kind===Do.INTERACTION);return n?n.id:((t=e.find(o=>o.kind===Do.INTERACTION))==null?void 0:t.id)??null},Lv=e=>{var n;return((n=e.getPlugin(Ln))==null?void 0:n.id)??Nd(e.plugins)},Id=e=>!!e.readOnly,kd=e=>e.annotationRole??(e.externalCollection?At.EXTERNAL:At.AUTHORING),tr=e=>e.annotationEntries.filter(n=>kd(n)===At.AUTHORING),wv=(e,n={})=>{if(n.roles===void 0)return e.annotationEntries;const t=new Set(n.roles);return e.annotationEntries.filter(o=>t.has(kd(o)))},xv=e=>tr({annotationEntries:e}).reduce((n,t)=>(n.set(t.toolType,(n.get(t.toolType)??0)+1),n),new Map),qv=({activeToolType:e,registry:n,defaultToolId:t=Ln})=>{if(e){const o=n.getPlugin(e);if(o)return o}return n.getPlugin(t)??null},Ts=(e,n)=>{const t=new Map(e.tables.nodes.map(d=>[d.id,d])),o=new Map(e.tables.edges.map(d=>[d.id,d])),{uuid:r,updatedAt:a,id:i,nodeIds:s,edgeIds:l,...u}=n;return JSON.stringify({entry:u,nodes:s.map(d=>{const c=t.get(d);return c?[c.coordinate.longitude,c.coordinate.latitude,c.coordinate.altitude]:null}),edges:l.map(d=>{const c=o.get(d);return c?[s.indexOf(c.startNodeId),s.indexOf(c.endNodeId)]:null})})},hd=(e,n,t=new Date().toISOString())=>{const o=new Map(((n==null?void 0:n.tables.annotationEntries)??[]).map(i=>[i.id,i])),r=new Map(((n==null?void 0:n.tables.annotationEntries)??[]).filter(i=>i.uuid).map(i=>[i.uuid,i])),a=e.tables.annotationEntries.map(i=>{var d;const s=i.uuid??((d=o.get(i.id))==null?void 0:d.uuid)??id(),l=r.get(s)??o.get(i.id),u=l!==void 0&&n!==null&&Ts(n,l)===Ts(e,i);return{...i,uuid:s,updatedAt:u?(l==null?void 0:l.updatedAt)??i.updatedAt??t:t}});return{...e,tables:{...e.tables,annotationEntries:a}}},ja=e=>{if(!e)return e;const n=e.tables.annotationEntries.every(t=>t.uuid&&t.updatedAt);return e.version===vt&&n?e:{...hd(e,e),version:vt}},Ua=e=>{var t,o,r;const n=e;return(n==null?void 0:n.formatId)!==Kn||typeof n.version!="number"||!gd.has(n.version)||!n.tables||!Array.isArray(n.tables.annotationEntries)||!Array.isArray(n.tables.nodes)||!Array.isArray(n.tables.linkedNodeGroups)||!Array.isArray(n.tables.edges)?null:ja({formatId:Kn,version:n.version,tables:{annotationEntries:n.tables.annotationEntries.map(a=>Sn(a)),nodes:n.tables.nodes.map(a=>En(a)),linkedNodeGroups:n.tables.linkedNodeGroups.map(a=>Rn(a)),edges:n.tables.edges.map(a=>On(a))},settings:{lastActiveToolType:typeof((t=n.settings)==null?void 0:t.lastActiveToolType)=="string"?n.settings.lastActiveToolType:null,elevationReferenceAnnotationId:typeof((o=n.settings)==null?void 0:o.elevationReferenceAnnotationId)=="string"?n.settings.elevationReferenceAnnotationId:null,nextShortLabelCounterByToolType:(r=n.settings)!=null&&r.nextShortLabelCounterByToolType&&typeof n.settings.nextShortLabelCounterByToolType=="object"?{...n.settings.nextShortLabelCounterByToolType}:{}}})},Cd=e=>{var r;const n=e;if((n==null?void 0:n.type)!=="FeatureCollection")return null;const t=(r=n.metadata)==null?void 0:r.carmaConf;return((t==null?void 0:t.formatId)===Ga&&typeof t.formatVersion=="number"&&fv.has(t.formatVersion)?Ua(t.annotationsRuntimePersistence):null)??ja(vv(e))},Ha=e=>{const n=tr(e).map(Sn),t=new Set(n.flatMap(i=>i.nodeIds)),o=new Set(n.flatMap(i=>i.edgeIds)),r=e.nodes.filter(i=>t.has(i.id)).map(En),a=Cn({nodes:r,nodeLinks:e.linkedNodeGroups.map(Rn).filter(i=>i.nodeIds.some(s=>t.has(s)))});return{formatId:Kn,version:vt,tables:{annotationEntries:n,nodes:r,linkedNodeGroups:a,edges:e.edges.filter(i=>o.has(i.id)).map(On)},settings:{lastActiveToolType:e.annotationToolType,elevationReferenceAnnotationId:e.settingsState.elevationReferenceAnnotationId,nextShortLabelCounterByToolType:nr(n)}}},_v=({initialToolType:e,initialPointTemporaryMode:n,initialPersistenceState:t,isToolTypeAvailable:o})=>{const r=(t==null?void 0:t.formatId)===Kn&&gd.has(t.version)?ja(t):null,a=r==null?void 0:r.tables,i=pd((a==null?void 0:a.annotationEntries.map(Sn))??[]),s=(r==null?void 0:r.tables.nodes.map(En))??[],l=Cn({nodes:s,nodeLinks:(r==null?void 0:r.tables.linkedNodeGroups.map(Rn))??[]}),u=nr(i);return{annotationToolType:(typeof(r==null?void 0:r.settings.lastActiveToolType)=="string"&&((o==null?void 0:o(r.settings.lastActiveToolType))??!0)?r.settings.lastActiveToolType:null)??e,selectionState:{selectedAnnotationIds:[],previousSelectedAnnotationId:null},annotationEntries:i,nodes:s,linkedNodeGroups:l,edges:(a==null?void 0:a.edges.map(On))??[],infoBoxState:{activeAnnotationId:null},settingsState:{pointTemporaryMode:n,elevationReferenceAnnotationId:(r==null?void 0:r.settings.elevationReferenceAnnotationId)??null,nextShortLabelCounterByToolType:u}}},za=e=>{try{const n=localStorage.getItem(e);if(!n)return null;const t=JSON.parse(n);return Cd(t)??Ua(t)}catch(n){console.warn("Failed to load annotations runtime state from localStorage:",n)}return null},Sd=(e,n,t)=>{try{const o=hd(n,za(e)),r=localStorage.getItem(e),a=r?ua(JSON.parse(r)):null;if(r&&!a&&!t){console.warn("Cannot overwrite an unrecognized measurement storage format.");return}const i=t??a??ko;localStorage.setItem(e,JSON.stringify(bv(o,i)))}catch(o){console.warn("Failed to save annotations runtime state to localStorage:",o)}},or=e=>e.selectionState.selectedAnnotationIds[e.selectionState.selectedAnnotationIds.length-1]??null,Pv=e=>{const n=new Set(e.selectionState.selectedAnnotationIds);return e.annotationEntries.filter(t=>n.has(t.id)&&!t.locked&&!t.readOnly).map(t=>t.id)},Ed=e=>e.annotationEntries.map(n=>n.id),Mv=(e,n,t)=>{var i;if(e.length===0)return null;const o=n?e.findIndex(s=>s.id===n):-1,r=t>0?0:e.length-1,a=o<0?r:(o+t+e.length)%e.length;return((i=e[a])==null?void 0:i.id)??null},Od=({nodeId:e,nodes:n,linkedNodeGroups:t,annotationEntries:o,selectedAnnotationIds:r=[],preferredMovedNodeIds:a})=>{const i=n.find(g=>g.id===e)??null;if(!i)return{targetNode:null,movedNodeIds:[]};const s=zA(t,e),l=Array.from(new Set((a??[]).filter(g=>s.includes(g)))),u=new Set(r.filter(Boolean)),d=new Set(o.filter(g=>u.has(g.id)).flatMap(g=>g.nodeIds)),c=s.filter(g=>d.has(g)),m=l.length>0?l:c.length>0?c:[...s],y=Fa(o);return{targetNode:i,movedNodeIds:m.filter(g=>!y.has(g))}},Rd=e=>{const n=new Set(e.annotationEntries.flatMap(t=>t.nodeIds));e.nodes=e.nodes.filter(t=>n.has(t.id)),e.linkedNodeGroups=Cn({nodes:e.nodes,nodeLinks:e.linkedNodeGroups})},Dv={updateNodeCoordinateById:(e,n)=>{const{nodeId:t,coordinate:o,selectedAnnotationIds:r=[],movedNodeIds:a,linkToNodeId:i}=n.payload,{targetNode:s,movedNodeIds:l}=Od({nodeId:t,nodes:e.nodes,linkedNodeGroups:e.linkedNodeGroups,annotationEntries:e.annotationEntries,selectedAnnotationIds:r,preferredMovedNodeIds:a});if(!s||l.length===0)return;const u=new Set(l),d=Fa(e.annotationEntries),c=i&&!d.has(i)?i:null;e.nodes.forEach(m=>{u.has(m.id)&&(m.coordinate=o)}),e.linkedNodeGroups=ud({nodes:e.nodes,nodeLinks:e.linkedNodeGroups,nodeId:s.id,movedNodeIds:l,linkToNodeId:c})},insertNodeIntoMeasurementEdge:(e,n)=>{const{annotationId:t,startNodeId:o,endNodeId:r,coordinate:a}=n.payload,i=e.annotationEntries.find(T=>T.id===t);if(!i)return;const s=i.nodeIds.findIndex((T,N)=>T===o&&i.nodeIds[N+1]===r),l=i.closed&&i.nodeIds.length>=3&&i.nodeIds[i.nodeIds.length-1]===o&&i.nodeIds[0]===r,u=s>=0?s+1:l?i.nodeIds.length:-1;if(u<0)return;const d=new Map(e.edges.map(T=>[T.id,T])),c=i.edgeIds.findIndex(T=>{const N=d.get(T);return(N==null?void 0:N.startNodeId)===o&&N.endNodeId===r}),m=c>=0?i.edgeIds[c]:null,y=m?d.get(m):void 0;if(!y||c<0)return;const g=`node-${ut(e.nodes.map(T=>T.id))+1}`,f=`edge-${ut(e.edges.map(T=>T.id))+1}`;e.nodes.push({id:g,coordinate:a}),e.linkedNodeGroups=Cn({nodes:e.nodes,nodeLinks:[...e.linkedNodeGroups,{id:g,nodeIds:[g]}]}),y.endNodeId=g;const A={id:f,startNodeId:g,endNodeId:r},v=e.edges.findIndex(T=>T.id===m);v>=0?e.edges.splice(v+1,0,A):e.edges.push(A),i.nodeIds=[...i.nodeIds.slice(0,u),g,...i.nodeIds.slice(u)],i.edgeIds=[...i.edgeIds.slice(0,c+1),f,...i.edgeIds.slice(c+1)]},removeNodeFromAnnotation:(e,n)=>{const{annotationId:t,nodeId:o}=n.payload,r=e.annotationEntries.find(l=>l.id===t);if(!(r!=null&&r.nodeIds.includes(o)))return;const a=r.nodeIds.filter(l=>l!==o),i=new Set(r.edgeIds),s=dd({nodeIds:a,closed:!!r.closed,previousEdgeNumericSuffix:ut(e.edges.map(l=>l.id))});r.nodeIds=a,r.edgeIds=s.map(l=>l.id),e.edges=[...e.edges.filter(l=>!i.has(l.id)),...s],Rd(e)}},Va=(e,n,t=n[n.length-1]??null)=>{e.selectionState.previousSelectedAnnotationId=or(e),e.selectionState.selectedAnnotationIds=n,e.infoBoxState.activeAnnotationId=t},$a=(e,n)=>Va(e,n?[n]:[],n),Bv={setSelectedAnnotationId:(e,n)=>{$a(e,n.payload)},setSelectedAnnotationIds:(e,n)=>{Va(e,Array.from(new Set(n.payload.filter(Boolean))))}},bs=(e,n,t)=>{if(!e.annotationEntries.some(a=>n.has(a.id)))return;e.annotationEntries=e.annotationEntries.filter(a=>!n.has(a.id));const o=new Set(e.annotationEntries.flatMap(a=>a.edgeIds));Rd(e),e.edges=e.edges.filter(a=>o.has(a.id));const{elevationReferenceAnnotationId:r}=e.settingsState;if(r&&n.has(r)&&(e.settingsState.elevationReferenceAnnotationId=null),t!==void 0){$a(e,t);return}Va(e,e.selectionState.selectedAnnotationIds.filter(a=>!n.has(a)))},Fv={appendAnnotationEntities:(e,n)=>{const{annotationEntry:t,nodes:o,linkedNodeGroups:r,edges:a,selectAnnotationId:i}=n.payload;e.nodes.push(...o),r.forEach(s=>{const l=e.linkedNodeGroups.find(u=>u.id===s.id);if(!l){e.linkedNodeGroups.push({id:s.id,nodeIds:[...s.nodeIds]});return}l.nodeIds=Array.from(new Set([...l.nodeIds,...s.nodeIds]))}),e.edges.push(...a),e.annotationEntries.push({...t,nodeIds:[...t.nodeIds],edgeIds:[...t.edgeIds]}),e.linkedNodeGroups=Cn({nodes:e.nodes,nodeLinks:e.linkedNodeGroups}),i!==void 0&&$a(e,i)},removeAnnotationById:(e,n)=>{bs(e,new Set([n.payload.annotationId]),n.payload.nextSelectedAnnotationId)},removeAnnotationsByIds:(e,n)=>{bs(e,new Set(n.payload.annotationIds),n.payload.nextSelectedAnnotationId)},updateAnnotationEntryById:(e,n)=>{const{annotationId:t,displayName:o,shortLabel:r,shortLabelSource:a,shortLabelCounter:i,hidden:s,locked:l,annotationRole:u,readOnly:d,labelAppearance:c,elevationDisplayMode:m,distanceAnchorCoordinateSelection:y,distanceTriangleAnchorCoordinateRole:g}=n.payload,f=e.annotationEntries.find(A=>A.id===t);f&&(o!==void 0&&(f.displayName=o),r!==void 0&&(f.shortLabel=r),a!==void 0&&(f.shortLabelSource=a),i!==void 0&&(f.shortLabelCounter=i),s!==void 0&&(f.hidden=s),l!==void 0&&(f.locked=l),u!==void 0&&(f.annotationRole=u),d!==void 0&&(f.readOnly=d),c!==void 0&&(f.labelAppearance={...f.labelAppearance??{},...c}),m!==void 0&&(f.elevationDisplayMode=m),y!==void 0&&(f.distanceAnchorCoordinateSelection=y),g!==void 0&&(f.distanceTriangleAnchorCoordinateRole=g))}},Ld=(e={})=>{const{initialToolType:n=Ln,initialPointTemporaryMode:t=!1}=e;return{annotationToolType:n,selectionState:{selectedAnnotationIds:[],previousSelectedAnnotationId:null},annotationEntries:[],nodes:[],linkedNodeGroups:[],edges:[],infoBoxState:{activeAnnotationId:null},settingsState:{pointTemporaryMode:t,elevationReferenceAnnotationId:null,nextShortLabelCounterByToolType:{}}}},wd=vg({name:"annotationsRuntime",initialState:Ld(),reducers:{setAnnotationToolType:(e,n)=>{e.annotationToolType=n.payload},setPointTemporaryMode:(e,n)=>{e.settingsState.pointTemporaryMode=n.payload},setElevationReferenceAnnotationId:(e,n)=>{e.settingsState.elevationReferenceAnnotationId=n.payload},...Bv,...Fv,...Dv}}),{appendAnnotationEntities:xd,removeAnnotationById:Gv,removeAnnotationsByIds:Wa,removeNodeFromAnnotation:jv,setElevationReferenceAnnotationId:Uv,setPointTemporaryMode:Hv,insertNodeIntoMeasurementEdge:zv,updateNodeCoordinateById:Vv,updateAnnotationEntryById:Fn,setAnnotationToolType:$v,setSelectedAnnotationId:dt,setSelectedAnnotationIds:Tt}=wd.actions,Wv=e=>cg({reducer:wd.reducer,preloadedState:e}),Ya=p.createContext(null),Yv=UA(Ya),Qv=xA(Ya),re=e=>Qv(e),DC=()=>Yv(),hr=new Map,Cr=e=>`${e}::persistence-format-choice`,Kv=(e,n)=>{const t=hr.get(e);if(t)return t;let o;try{const a=localStorage.getItem(e),i=a?ua(JSON.parse(a)):null;if(!i||JSON.stringify(i)===JSON.stringify(ko)||(o=JSON.stringify(i),localStorage.getItem(Cr(e))===o))return Promise.resolve()}catch{return Promise.resolve()}const r=Promise.resolve().then(n).then(a=>{if(!a){localStorage.setItem(Cr(e),o);return}const i=za(e);if(!i)return;Sd(e,i,ko);const s=localStorage.getItem(e),l=s?ua(JSON.parse(s)):null;JSON.stringify(l)===JSON.stringify(ko)&&localStorage.removeItem(Cr(e))}).catch(a=>{console.warn("Could not apply the measurement format choice:",a)}).finally(()=>{hr.delete(e)});return hr.set(e,r),r},Xv=({enabled:e=!0,storageKey:n,requestFormatUpgrade:t})=>{p.useEffect(()=>{!e||!t||typeof window>"u"||Kv(n,t)},[e,t,n]);const o=p.useMemo(()=>!e||typeof window>"u"?null:za(n),[e,n]),r=p.useCallback(a=>{!e||typeof window>"u"||Sd(n,a)},[e,n]);return{initialPersistenceState:o,onPersistenceStateChange:e?r:void 0}},qd={scalingMode:Ra.SCREEN,worldRadiusMeters:3,targetScreenRadiusCssPx:48,resizeWorldRadiusToScreenTarget:!1,resizeStepFactor:4,quantizeWorldRadius:!1},Qa={KEYBOARD:"keyboard",PROGRAMMATIC:"programmatic",UI:"ui"},Jv=({annotations:e})=>{if(e.length===0)return!1;if(typeof window>"u")return!0;const n=e.length===1?"Diese Messung wirklich löschen?":`${e.length} Messungen wirklich löschen?`;return window.confirm(n)},Zv=({activePlugin:e,activeToolType:n,activeToolSession:t,cancelToolId:o,focusAdjacentAnnotationEntry:r,removeSelectedAnnotations:a,removeEditedNode:i,clearInteractionState:s,requestFinishMeasurement:l,requestActivateTool:u,requestModeChange:d,sessionContext:c,setActiveToolTypeInStore:m})=>{p.useEffect(()=>{const y=g=>{var v;if(ef(g)){const T=c.getState(),N=Ed(T);N.length>0&&(c.dispatch(Tt(N)),g.preventDefault(),g.stopPropagation());return}const A=Zg(g,{allowRepeat:!0})?nf(g):null;if(A===Oe.CANCEL_ACTIVE_TOOL&&o!==null&&n!==o){const T=c.getState();t==null||t.discardDraft(),T.annotationEntries.length>0&&m(o),s(),g.preventDefault();return}if(A===Oe.FOCUS_PREVIOUS_NAVIGATION_ITEM){r(-1),g.preventDefault();return}if(A===Oe.FOCUS_NEXT_NAVIGATION_ITEM){r(1),g.preventDefault();return}if((v=e==null?void 0:e.keyboard)!=null&&v.onKeyDown({event:g,activeToolType:n,activeToolSession:t,requestFinishMeasurement:l,requestActivateTool:u,requestModeChange:d,sessionContext:c})){s();return}if((A===Oe.DELETE_SELECTION||A===Oe.UNDO_LAST_POINT)&&c.drafts.get(n).coordinates.length>0){s(),g.preventDefault(),g.stopPropagation();return}if(A===Oe.DELETE_SELECTION||A===Oe.UNDO_LAST_POINT){if(i()){s(),g.preventDefault(),g.stopPropagation();return}if(c.getState().selectionState.selectedAnnotationIds.length>0){a({skipConfirmation:g.shiftKey,source:Qa.KEYBOARD}),g.preventDefault(),g.stopPropagation();return}}A===Oe.FINISH_MEASUREMENT&&l()&&g.preventDefault()};return window.addEventListener("keydown",y),()=>{window.removeEventListener("keydown",y)}},[e,t,n,o,s,r,i,a,l,d,u,c,m])},mo=(e,n)=>e[n]??null,eT=(e,n,t)=>{const o=p.useCallback(()=>{const i=mo(n,e);return i?i.requestFinish():!1},[e,n]),r=p.useCallback(i=>{if(i===e)return;const s=mo(n,e);s&&s.requestFinish(),t();const l=mo(n,i);l==null||l.requestStart()},[e,t,n]),a=p.useCallback((i=e)=>{if(i!==e){r(i);return}const s=mo(n,e);s==null||s.discardDraft(),t(),s==null||s.requestStart()},[e,t,r,n]);return{requestModeChange:r,requestActivateTool:a,requestFinishMeasurement:o}},nT=14,tT=18,Ns=(e,n)=>n?e.find(t=>t.id===n)??null:null,_d=({engine:e,node:n,screenPosition:t})=>{const o=e.worldToScreen(Y(n.coordinate));if(!o)return null;const r=o.x-t.x,a=o.y-t.y;return r*r+a*a},oT=({engine:e,nodes:n,screenPosition:t})=>{if(!t||!Z(e)||n.length===0)return null;let r=nT**2,a=null;for(const i of n){const s=_d({engine:e,node:i,screenPosition:t});s===null||s>r||(r=s,a=i)}return a},Pd=({engine:e,nodes:n,linkedNodeGroups:t,coordinate:o,screenPosition:r,forcedSnappedNodeId:a=null,lockedNodeId:i=null,excludedNodeIds:s=[]})=>{if(!Z(e)||n.length===0)return{coordinate:o,linkedNodeGroupId:null,snappedNodeId:null};const l=new Set(s.filter(Boolean)),u=l.size===0?n:n.filter(y=>!l.has(y.id));if(u.length===0)return{coordinate:o,linkedNodeGroupId:null,snappedNodeId:null};const d=Ns(u,a);if(d)return{coordinate:d.coordinate,linkedNodeGroupId:Io(t,d.id),snappedNodeId:d.id};if(!r)return{coordinate:o,linkedNodeGroupId:null,snappedNodeId:null};const c=Ns(u,i);if(c){const y=_d({engine:e,node:c,screenPosition:r});if(y!==null&&y<=tT**2)return{coordinate:c.coordinate,linkedNodeGroupId:Io(t,c.id),snappedNodeId:c.id}}const m=oT({engine:e,nodes:u,screenPosition:r});return{coordinate:(m==null?void 0:m.coordinate)??o,linkedNodeGroupId:m?Io(t,m.id):null,snappedNodeId:(m==null?void 0:m.id)??null}},rT=(e,n)=>n?e.find(t=>t.id===n)??null:null,aT=({engine:e,nodes:n,linkedNodeGroups:t,activeToolType:o,toolSessions:r,getToolPlugin:a,sessionContext:i})=>{const s=r[o]??null,l=a(o),u=p.useRef(null);p.useEffect(()=>{rT(n,u.current)||(u.current=null)},[n]);const d=p.useCallback((y,g,f=null)=>{const A=Pd({engine:e,nodes:n,linkedNodeGroups:t,coordinate:y,screenPosition:g,forcedSnappedNodeId:f,lockedNodeId:u.current});return u.current=A.snappedNodeId,{coordinate:A.coordinate,linkedNodeGroupId:A.linkedNodeGroupId}},[t,n,e]),c=p.useCallback((y,g)=>d(y,g).coordinate,[d]);return{handlePointQueryPointCreated:p.useCallback((y,g,f)=>{var T;const A=d(y,g,(f==null?void 0:f.forcedSnappedNodeId)??null),v=s==null?void 0:s.onNodeCreated;if(v){v(A.coordinate,A.linkedNodeGroupId,{inputModifier:f==null?void 0:f.inputModifier});return}(T=l==null?void 0:l.pointQuery)==null||T.onPointCreated({coordinate:A.coordinate,linkedNodeGroupId:A.linkedNodeGroupId,inputModifier:f==null?void 0:f.inputModifier,activeToolType:o,activeToolSession:s,toolSessions:r,sessionContext:i})},[l,s,o,d,i,r]),resolvePointQueryCoordinate:c,activeToolSession:s}},iT=(e,n)=>e.plugins.reduce((t,o)=>{var a;const r=(a=o.session)==null?void 0:a.createSession(n);return r?{...t,[o.id]:r}:t},{}),sT=e=>{},lT=(e,{enabled:n,onCoordinate:t,onLineFinish:o,onHoverCoordinateChange:r,onHoverSampleChange:a,onScreenPositionChange:i,singleClickDelayMs:s=220,inputModifiers:l})=>{((e==null?void 0:e.hooks.usePointQuery)??sT)({enabled:n,hideCursorWhileEnabled:!0,clickStrategy:o?ts.DELAYED_LINE_FINISH:ts.IMMEDIATE,config:{clickDelayMs:s},inputModifiers:l,onPointCreate:d=>{t==null||t($n(d.pickedPositionECEF),{x:d.screenPosition.x,y:d.screenPosition.y},{inputModifier:d.inputModifier})},onLineFinish:o,onPointerMove:(d,c,m,y)=>{const g=d?$n(d):null,f={x:c.x,y:c.y};r==null||r(g,f),a==null||a({coordinate:g,screenPosition:f,pointECEF:d??null,surfaceNormalECEF:m??null,...y!=null&&y.inputModifier?{inputModifier:y.inputModifier}:{}})},onScreenPositionChange:i})},Hn={pointQuery:{discSmoothingSampleCount:120,discSmoothingWindowMs:500,discSmoothingWeightDecayGamma:3},hoverClearDelayMs:34,infoBoxFlyTo:{minRadiusMeters:80,paddingFactor:1.15},additiveSelectionModifierKey:"Shift"},Ka=(e,n)=>e===n||e!=null&&n!==null&&n!==void 0&&e.latitude===n.latitude&&e.longitude===n.longitude&&e.altitude===n.altitude,Xa=(e,n)=>e.length===n.length&&e.every((t,o)=>Ka(t,n[o])),uT=({engine:e,hoveredNode:n,coordinate:t,screenPosition:o,pointECEF:r,surfaceNormalECEF:a,inputModifier:i,resolvePointQueryCoordinate:s})=>{const l=(n==null?void 0:n.coordinate)??s(t,o),u=n!==null||!Ka(l,t),d=u?Y(l):r,c=u&&Z(e)&&d?e.worldToScreen(d):null;return{isLockedToSnapPoint:u,pickResult:{coordinate:l,screenPosition:c?{x:c.x,y:c.y}:o,pointECEF:d??r,surfaceNormalECEF:u&&d?Vr(d):a,...i?{inputModifier:i}:{}}}},{POINT:yo}=P,dT=({pointTemporaryMode:e,annotationToolDraftStore:n,addAnnotation:t})=>{const o=p.useRef(e);p.useEffect(()=>{if(o.current&&!e){const r=n.get(yo);r.coordinates.length>0&&(r.coordinates.forEach((a,i)=>{t(yo,[a],void 0,[r.linkedNodeGroupIds[i]??null],yo)}),n.clear(yo))}o.current=e},[t,n,e])},on={primitiveId:"measurement-preview-point-ring",scalingMode:Ra.SCREEN,targetScreenRadiusCssPx:32,innerHoleRadiusRatio:.33,alpha:.6,materialPreset:Ef.COLOR,smoothingSampleCount:90,smoothingWindowMs:300,smoothingWeightDecayGamma:2};function ht(e,n,t){e.prototype=n.prototype=t,t.constructor=e}function ro(e,n){var t=Object.create(e.prototype);for(var o in n)t[o]=n[o];return t}function wn(){}var Xn=.7,bt=1/Xn,cT=/^#([0-9a-f]{3})$/,mT=/^#([0-9a-f]{6})$/,yT=/^rgb\(\s*([-+]?\d+)\s*,\s*([-+]?\d+)\s*,\s*([-+]?\d+)\s*\)$/,pT=/^rgb\(\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*\)$/,gT=/^rgba\(\s*([-+]?\d+)\s*,\s*([-+]?\d+)\s*,\s*([-+]?\d+)\s*,\s*([-+]?\d+(?:\.\d+)?)\s*\)$/,fT=/^rgba\(\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)\s*\)$/,AT=/^hsl\(\s*([-+]?\d+(?:\.\d+)?)\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*\)$/,vT=/^hsla\(\s*([-+]?\d+(?:\.\d+)?)\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)\s*\)$/,Is={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};ht(wn,Qt,{displayable:function(){return this.rgb().displayable()},toString:function(){return this.rgb()+""}});function Qt(e){var n;return e=(e+"").trim().toLowerCase(),(n=cT.exec(e))?(n=parseInt(n[1],16),new ge(n>>8&15|n>>4&240,n>>4&15|n&240,(n&15)<<4|n&15,1)):(n=mT.exec(e))?ks(parseInt(n[1],16)):(n=yT.exec(e))?new ge(n[1],n[2],n[3],1):(n=pT.exec(e))?new ge(n[1]*255/100,n[2]*255/100,n[3]*255/100,1):(n=gT.exec(e))?hs(n[1],n[2],n[3],n[4]):(n=fT.exec(e))?hs(n[1]*255/100,n[2]*255/100,n[3]*255/100,n[4]):(n=AT.exec(e))?Cs(n[1],n[2]/100,n[3]/100,1):(n=vT.exec(e))?Cs(n[1],n[2]/100,n[3]/100,n[4]):Is.hasOwnProperty(e)?ks(Is[e]):e==="transparent"?new ge(NaN,NaN,NaN,0):null}function ks(e){return new ge(e>>16&255,e>>8&255,e&255,1)}function hs(e,n,t,o){return o<=0&&(e=n=t=NaN),new ge(e,n,t,o)}function Ja(e){return e instanceof wn||(e=Qt(e)),e?(e=e.rgb(),new ge(e.r,e.g,e.b,e.opacity)):new ge}function Md(e,n,t,o){return arguments.length===1?Ja(e):new ge(e,n,t,o??1)}function ge(e,n,t,o){this.r=+e,this.g=+n,this.b=+t,this.opacity=+o}ht(ge,Md,ro(wn,{brighter:function(e){return e=e==null?bt:Math.pow(bt,e),new ge(this.r*e,this.g*e,this.b*e,this.opacity)},darker:function(e){return e=e==null?Xn:Math.pow(Xn,e),new ge(this.r*e,this.g*e,this.b*e,this.opacity)},rgb:function(){return this},displayable:function(){return 0<=this.r&&this.r<=255&&0<=this.g&&this.g<=255&&0<=this.b&&this.b<=255&&0<=this.opacity&&this.opacity<=1},toString:function(){var e=this.opacity;return e=isNaN(e)?1:Math.max(0,Math.min(1,e)),(e===1?"rgb(":"rgba(")+Math.max(0,Math.min(255,Math.round(this.r)||0))+", "+Math.max(0,Math.min(255,Math.round(this.g)||0))+", "+Math.max(0,Math.min(255,Math.round(this.b)||0))+(e===1?")":", "+e+")")}}));function Cs(e,n,t,o){return o<=0?e=n=t=NaN:t<=0||t>=1?e=n=NaN:n<=0&&(e=NaN),new Ke(e,n,t,o)}function TT(e){if(e instanceof Ke)return new Ke(e.h,e.s,e.l,e.opacity);if(e instanceof wn||(e=Qt(e)),!e)return new Ke;if(e instanceof Ke)return e;e=e.rgb();var n=e.r/255,t=e.g/255,o=e.b/255,r=Math.min(n,t,o),a=Math.max(n,t,o),i=NaN,s=a-r,l=(a+r)/2;return s?(n===a?i=(t-o)/s+(t<o)*6:t===a?i=(o-n)/s+2:i=(n-t)/s+4,s/=l<.5?a+r:2-a-r,i*=60):s=l>0&&l<1?0:i,new Ke(i,s,l,e.opacity)}function bT(e,n,t,o){return arguments.length===1?TT(e):new Ke(e,n,t,o??1)}function Ke(e,n,t,o){this.h=+e,this.s=+n,this.l=+t,this.opacity=+o}ht(Ke,bT,ro(wn,{brighter:function(e){return e=e==null?bt:Math.pow(bt,e),new Ke(this.h,this.s,this.l*e,this.opacity)},darker:function(e){return e=e==null?Xn:Math.pow(Xn,e),new Ke(this.h,this.s,this.l*e,this.opacity)},rgb:function(){var e=this.h%360+(this.h<0)*360,n=isNaN(e)||isNaN(this.s)?0:this.s,t=this.l,o=t+(t<.5?t:1-t)*n,r=2*t-o;return new ge(Sr(e>=240?e-240:e+120,r,o),Sr(e,r,o),Sr(e<120?e+240:e-120,r,o),this.opacity)},displayable:function(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1}}));function Sr(e,n,t){return(e<60?n+(t-n)*e/60:e<180?t:e<240?n+(t-n)*(240-e)/60:n)*255}var Dd=Math.PI/180,Bd=180/Math.PI,Bo=18,Fd=.95047,Gd=1,jd=1.08883,Ud=4/29,ct=6/29,Hd=3*ct*ct,NT=ct*ct*ct;function Za(e){if(e instanceof sn)return new sn(e.l,e.a,e.b,e.opacity);if(e instanceof In){var n=e.h*Dd;return new sn(e.l,Math.cos(n)*e.c,Math.sin(n)*e.c,e.opacity)}e instanceof ge||(e=Ja(e));var t=Lr(e.r),o=Lr(e.g),r=Lr(e.b),a=Er((.4124564*t+.3575761*o+.1804375*r)/Fd),i=Er((.2126729*t+.7151522*o+.072175*r)/Gd),s=Er((.0193339*t+.119192*o+.9503041*r)/jd);return new sn(116*i-16,500*(a-i),200*(i-s),e.opacity)}function IT(e,n,t,o){return arguments.length===1?Za(e):new sn(e,n,t,o??1)}function sn(e,n,t,o){this.l=+e,this.a=+n,this.b=+t,this.opacity=+o}ht(sn,IT,ro(wn,{brighter:function(e){return new sn(this.l+Bo*(e??1),this.a,this.b,this.opacity)},darker:function(e){return new sn(this.l-Bo*(e??1),this.a,this.b,this.opacity)},rgb:function(){var e=(this.l+16)/116,n=isNaN(this.a)?e:e+this.a/500,t=isNaN(this.b)?e:e-this.b/200;return e=Gd*Or(e),n=Fd*Or(n),t=jd*Or(t),new ge(Rr(3.2404542*n-1.5371385*e-.4985314*t),Rr(-.969266*n+1.8760108*e+.041556*t),Rr(.0556434*n-.2040259*e+1.0572252*t),this.opacity)}}));function Er(e){return e>NT?Math.pow(e,1/3):e/Hd+Ud}function Or(e){return e>ct?e*e*e:Hd*(e-Ud)}function Rr(e){return 255*(e<=.0031308?12.92*e:1.055*Math.pow(e,1/2.4)-.055)}function Lr(e){return(e/=255)<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)}function kT(e){if(e instanceof In)return new In(e.h,e.c,e.l,e.opacity);e instanceof sn||(e=Za(e));var n=Math.atan2(e.b,e.a)*Bd;return new In(n<0?n+360:n,Math.sqrt(e.a*e.a+e.b*e.b),e.l,e.opacity)}function hT(e,n,t,o){return arguments.length===1?kT(e):new In(e,n,t,o??1)}function In(e,n,t,o){this.h=+e,this.c=+n,this.l=+t,this.opacity=+o}ht(In,hT,ro(wn,{brighter:function(e){return new In(this.h,this.c,this.l+Bo*(e??1),this.opacity)},darker:function(e){return new In(this.h,this.c,this.l-Bo*(e??1),this.opacity)},rgb:function(){return Za(this).rgb()}}));var zd=-.14861,ei=1.78277,ni=-.29227,rr=-.90649,Kt=1.97294,Ss=Kt*rr,Es=Kt*ei,Os=ei*ni-rr*zd;function CT(e){if(e instanceof zn)return new zn(e.h,e.s,e.l,e.opacity);e instanceof ge||(e=Ja(e));var n=e.r/255,t=e.g/255,o=e.b/255,r=(Os*o+Ss*n-Es*t)/(Os+Ss-Es),a=o-r,i=(Kt*(t-r)-ni*a)/rr,s=Math.sqrt(i*i+a*a)/(Kt*r*(1-r)),l=s?Math.atan2(i,a)*Bd-120:NaN;return new zn(l<0?l+360:l,s,r,e.opacity)}function ST(e,n,t,o){return arguments.length===1?CT(e):new zn(e,n,t,o??1)}function zn(e,n,t,o){this.h=+e,this.s=+n,this.l=+t,this.opacity=+o}ht(zn,ST,ro(wn,{brighter:function(e){return e=e==null?bt:Math.pow(bt,e),new zn(this.h,this.s,this.l*e,this.opacity)},darker:function(e){return e=e==null?Xn:Math.pow(Xn,e),new zn(this.h,this.s,this.l*e,this.opacity)},rgb:function(){var e=isNaN(this.h)?0:(this.h+120)*Dd,n=+this.l,t=isNaN(this.s)?0:this.s*n*(1-n),o=Math.cos(e),r=Math.sin(e);return new ge(255*(n+t*(zd*o+ei*r)),255*(n+t*(ni*o+rr*r)),255*(n+t*(Kt*o)),this.opacity)}}));const Xt={ALWAYS:"always",SELECTED:"selected",OFF:"off"},da=Object.freeze({strokeWidthPx:1.5,overlayDashPattern:"8 8",meterMarkers:Xt.ALWAYS}),BC=(e,n)=>e===Xt.ALWAYS||e===Xt.SELECTED&&n,FC=e=>e!==Xt.OFF,ET=e=>Object.values(Xt).includes(e),OT=(e,n)=>typeof e=="number"&&Number.isFinite(e)&&e>0?e:n,RT=(e,n)=>{const t=e==null?void 0:e.trim();return t||n},GC=(e,n=da)=>({strokeWidthPx:OT(e==null?void 0:e.strokeWidthPx,n.strokeWidthPx),overlayDashPattern:RT(e==null?void 0:e.overlayDashPattern,n.overlayDashPattern),meterMarkers:ET(e==null?void 0:e.meterMarkers)?e.meterMarkers:n.meterMarkers}),Rs=Object.freeze({previewAlpha:.9,surfaceAlpha:.92}),ne={colors:{neutral:No(1),accent:No(1),preview:No(Rs.previewAlpha),surface:$c(Rs.surfaceAlpha),transparent:"transparent",components:{direct:vr(Ce.DIRECT),vertical:vr(Ce.VERTICAL),horizontal:vr(Ce.HORIZONTAL)},componentLabelAccents:{direct:Tr(Ce.DIRECT),vertical:Tr(Ce.VERTICAL),horizontal:Tr(Ce.HORIZONTAL)}},sizes:{edgeStrokeWidth:da.strokeWidthPx,pointPixelSize:10,pointOutlineWidth:1},patterns:{edgeDashPattern:da.overlayDashPattern}},jC=Object.freeze({edge:Object.freeze({stroke:ne.colors.accent,strokeWidth:ne.sizes.edgeStrokeWidth,overlayDashPattern:ne.patterns.edgeDashPattern}),point:Object.freeze({pixelSize:ne.sizes.pointPixelSize,fill:ne.colors.transparent,outline:ne.colors.surface,outlineWidth:ne.sizes.pointOutlineWidth})}),Vd=Object.freeze({edge:Object.freeze({stroke:ne.colors.neutral}),point:Object.freeze({outline:ne.colors.neutral})}),LT=(e,n={})=>({...e,...n}),wT=(e,n={})=>({...e,...n}),UC=e=>LT(e,Vd.edge),HC=e=>wT(e,Vd.point),Pe=Object.freeze({lineStrokeWidthPx:ne.sizes.edgeStrokeWidth,layerZIndex:"1550",lineLabelOffsetPx:9,lineLabelMinLengthPx:44,geometryEpsilonMeters:.01,directLineColor:ne.colors.components.direct,verticalLineColor:ne.colors.components.vertical,horizontalLineColor:ne.colors.components.horizontal,draftChainColor:ne.colors.preview}),xT=e=>e.createLineCollection(),qT=(e,n,t,o)=>{const r=(o==null?void 0:o.width)??Pe.lineStrokeWidthPx,a=(o==null?void 0:o.ruler)===!0,i=(o==null?void 0:o.occludedDashed)===!0,s=(o==null?void 0:o.halo)!==!1;return{line:e.addLine({id:n,positions:[],color:t,width:r,ruler:a,occludedDashed:i,halo:s,visible:!1}),colorCss:t,width:r,ruler:a,occludedDashed:i,halo:s}},_T=(e,n)=>{e.colorCss!==n&&(e.line.setStyle({color:n,width:e.width,ruler:e.ruler,occludedDashed:e.occludedDashed,halo:e.halo}),e.colorCss=n)},PT=e=>{e.line.setVisible(!1)},MT=(e,n)=>{e.line.setPositions(n),e.line.setVisible(n.length>=2)},DT=.1,BT=(e,n)=>{const t=Qt(e)??Qt("white");if(!t)return`rgba(255,255,255,${n})`;const{r:o,g:r,b:a}=t.rgb();return`rgba(${[o,r,a].map(Math.round).join(",")},${n})`},FT=(e,n)=>{let t=null,o=null,r=!1;const a=()=>{o&&(PT(o),r=!1)};return{apply:i=>{if(!i){a();return}t??(t=xT(e)),o??(o=qT(t,n,i.colorCss)),_T(o,i.colorCss);const s=Math.max(i.lineLengthMeters,DT)/2;MT(o,[new x(0,0,-s).applyMatrix4(i.modelMatrix),new x(0,0,s).applyMatrix4(i.modelMatrix)]),r=!0},clear:a,hide:()=>o==null?void 0:o.line.setVisible(!1),restore:()=>o==null?void 0:o.line.setVisible(r),destroy:()=>{t==null||t.destroy(),t=null,o=null}}},GT=e=>{let n=[];const t=new x;return{hasTrail:()=>n.length>1,push:o=>of({samples:n,normal:o,maxSampleCount:e().maxSampleCount,timestampMs:performance.now()}),average:o=>{const{maxSampleAgeMs:r,weightDecayGamma:a}=e();return rf({samples:n,fallbackNormal:o,result:t,epsilonSquared:Mu,maxSampleAgeMs:r,weightDecayGamma:a,nowMs:performance.now()})},clear:()=>{n=[]}}},ca=(e,n)=>py(e)?e:n,zC=(e,n)=>Math.max(0,ca(e,n)),$d={TRUE_SAMPLE:"true-sample",CAMERA_PLANE_REPROJECT:"camera-plane-reproject"},jT=e=>e===$d.CAMERA_PLANE_REPROJECT,UT=.1,HT=.999,zT=e=>We(e,0,HT),VT=({engine:e,pointECEF:n,discNormalECEF:t,radiusMeters:o,scalingMode:r,targetScreenRadiusCssPx:a})=>{const i=Math.max(o,UT);return r==="world"?i:Sf(s=>e.worldToScreen(s),n,t,i,a)},$T=.1,WT=({engine:e,stepFactor:n,targetScreenRadiusCssPx:t,quantize:o,fallbackRadiusMeters:r})=>{let a=null,i=0;const s=new x;return l=>{if(a!==null&&!eu(i,e.getScreenPixelsPerMeterAt(s),n))return a;const u=e.getScreenPixelsPerMeterAt(l);if(!Number.isFinite(u)||u<=0)return a??r;const d=t/u;return a=Math.max(o?Jl(d*2)/2:d,$T),i=u,s.copy(l),a}},YT=({engine:e,screenPosition:n,tangentPlane:t})=>{if(!t)return null;const o=e.getPickRay(n);if(!o)return null;const r=new sl().setFromNormalAndCoplanarPoint(t.normalECEF.clone().normalize(),t.pointECEF),a=hl(new ll(o.origin,o.direction),r);return a&&o.direction.dot(new x().subVectors(a,o.origin))>0?a:null},QT="white",KT=e=>{if(e)try{e()}catch{}},XT=(e,{radius:n,placementMode:t=$d.CAMERA_PLANE_REPROJECT,color:o,opacity:r,materialPreset:a,innerHoleRadiusRatio:i=on.innerHoleRadiusRatio,scalingMode:s=on.scalingMode,targetScreenRadiusCssPx:l=on.targetScreenRadiusCssPx,resizeWorldRadiusToScreenTarget:u=!1,discResizeStepFactor:d=4,quantizeStepWorldRadius:c=!1,showNormalLine:m=!1,tangentDiscVisualizerTrailSampleCount:y=on.smoothingSampleCount,tangentDiscVisualizerSmoothingWindowMs:g=on.smoothingWindowMs,tangentDiscVisualizerWeightDecayGamma:f=on.smoothingWeightDecayGamma})=>{if(!e||!Z(e))return{setEnabled:()=>{},setVisualStyle:()=>{},setPreview:()=>{},clearPreview:()=>{},destroy:()=>{}};const A=e,v=Math.max(n,.1),T=new ba,N=ca(r,on.alpha),b=F=>({colorCss:(F==null?void 0:F.color)??o??QT,opacity:ca(F==null?void 0:F.opacity,N)}),I=F=>BT(F.colorCss,F.opacity);let h=!1,C=b(),k=I(C),S=null;const O=FT(A,"measurement-preview-point-ring-normal"),R=GT(()=>({maxSampleCount:y,maxSampleAgeMs:g,weightDecayGamma:f}));let L=null,_=!1,w=null;const q=WT({engine:A,stepFactor:d,targetScreenRadiusCssPx:l,quantize:c,fallbackRadiusMeters:v});let D=null,B=null,H=null,z=!1,X=0,V=null;const $=()=>{S==null||S.destroy(),S=null,O.clear(),R.clear(),V=null,_=!1},Q=()=>{if(!B)return null;if(!jT(t)||z||!H)return B;const F=A.pointer.getScreenPosition();return F?YT({engine:A,screenPosition:F,tangentPlane:{pointECEF:B,normalECEF:H}})??B:B},ue=()=>w?(S??(S=A.createRing({id:on.primitiveId,radius:1,innerRadius:zT(i),color:C.colorCss,opacity:C.opacity,materialPreset:a??on.materialPreset,segments:20,modelMatrix:T})),S):($(),null),K=()=>{_||!R.hasTrail()||A.isDestroyed()||(_=!0,A.requestRender())},se=({requestSmoothingRender:F=!0}={})=>{if(!h){$();return}const M=Q();if(!M){$();return}w=(w??new x).copy(M);const J=hf(M,H??D,D),W=s===Ra.WORLD&&u?q(M):VT({engine:A,pointECEF:M,discNormalECEF:J,radiusMeters:v,scalingMode:s,targetScreenRadiusCssPx:l}),fe=S??ue();if(!fe)return;V!==X&&(V=X,R.push(J));const ce=R.average(J);F&&K(),fe.setModelMatrix(Cf(M,ce,W,T)),O.apply(m?{modelMatrix:T,lineLengthMeters:W*2,colorCss:k}:null)},de=()=>{w=null,D=null,B=null,H=null,z=!1,X+=1,$()},Ne=A.pointer.register();return L=A.subscribePreRender(()=>{_=!1,se()}),{setEnabled:F=>{h!==F&&(h=F,h?se({requestSmoothingRender:!1}):$(),A.requestRender())},setVisualStyle:(F,M)=>{const J=b(F),W=I(J);k!==W&&(C=J,k=W,$(),se({requestSmoothingRender:!1}),(M==null?void 0:M.requestRender)!==!1&&A.requestRender())},setPreview:(F,M)=>{if(!(F!=null&&F.pointECEF)){de(),(M==null?void 0:M.requestRender)!==!1&&A.requestRender();return}B=(B??new x).copy(F.pointECEF),w=(w??new x).copy(F.pointECEF),H=F.surfaceNormalECEF?(H??new x).copy(F.surfaceNormalECEF):null,D=F.surfaceNormalECEF?(D??new x).copy(F.surfaceNormalECEF):null,z=F.lockToPreviewPoint===!0,X+=1,se({requestSmoothingRender:!1}),(M==null?void 0:M.requestRender)!==!1&&A.requestRender()},clearPreview:()=>{de(),A.requestRender()},destroy:()=>{Ne(),KT(L),L=null,$(),O.destroy()}}},JT=({engine:e,referenceObjectSizing:n,pointQueryEnabled:t,refs:{indicatorControllerRef:o,latestPickResultRef:r,pointQueryEnabledRef:a},resolveHoveredPointQueryNodeRef:i})=>{p.useEffect(()=>{var l;(l=o.current)==null||l.destroy();const s=XT(e,{radius:n.worldRadiusMeters,scalingMode:n.scalingMode,targetScreenRadiusCssPx:n.targetScreenRadiusCssPx,resizeWorldRadiusToScreenTarget:n.resizeWorldRadiusToScreenTarget,discResizeStepFactor:n.resizeStepFactor,quantizeStepWorldRadius:n.quantizeWorldRadius,showNormalLine:!0,tangentDiscVisualizerTrailSampleCount:Hn.pointQuery.discSmoothingSampleCount,tangentDiscVisualizerSmoothingWindowMs:Hn.pointQuery.discSmoothingWindowMs,tangentDiscVisualizerWeightDecayGamma:Hn.pointQuery.discSmoothingWeightDecayGamma});return o.current=s,s==null||s.setEnabled(a.current),a.current&&r.current?s==null||s.setPreview({pointECEF:r.current.pointECEF,surfaceNormalECEF:r.current.surfaceNormalECEF,lockToPreviewPoint:i.current()!==null}):s==null||s.clearPreview(),()=>{var u;(u=o.current)==null||u.destroy(),o.current=null}},[n.quantizeWorldRadius,n.resizeWorldRadiusToScreenTarget,n.resizeStepFactor,n.scalingMode,n.targetScreenRadiusCssPx,n.worldRadiusMeters,e]),p.useEffect(()=>{var s;(s=o.current)==null||s.setEnabled(t)},[t])},ZT=({engine:e,activePlugin:n,context:t,pointQueryEnabled:o,refs:{authoringControllerRef:r,latestPickResultRef:a,pointQueryEnabledRef:i}})=>{const{annotationsStore:s,drafts:l,labelOverlay:u,formatOptions:d,lineLabelOptions:c}=t;p.useEffect(()=>{var y,g;(y=r.current)==null||y.destroy();const m=((g=n==null?void 0:n.authoringVisuals)==null?void 0:g.createController({engine:e,annotationsStore:s,drafts:l,labelOverlay:u,requestRender:()=>{Z(e)&&e.requestRender()},formatOptions:d,lineLabelOptions:c}))??null;return r.current=m,m==null||m.setEnabled(i.current),m==null||m.setPointQueryPickResult(i.current?a.current:null),()=>{var f;(f=r.current)==null||f.destroy(),r.current=null}},[n,s,l,e,d,u,c]),p.useEffect(()=>{var m,y;(m=r.current)==null||m.setEnabled(o),o||(y=r.current)==null||y.setPointQueryPickResult(null)},[o])},ma={requestModeChange:()=>{},requestActivateTool:()=>{},requestFinishMeasurement:()=>!1,requestPointAt:()=>!1},VC="#00d9ff",eb="#ef4444",wr={requestRender:!1},nb=({engine:e,registry:n,annotationsStore:t,annotationToolDraftStore:o,setActiveToolTypeInStore:r,focusAdjacentAnnotationEntry:a,removeSelectedAnnotations:i,removeEditedNode:s,addAnnotation:l,bindApi:u,bindPreviewSnapTargetNodeClick:d,activeEditedNodeId:c,getHoveredPointQueryNodeId:m,setHoveredPointQueryNodeId:y,onPointQueryPickResultChange:g,formatOptions:f,lineLabelOptions:A,referenceObjectSizing:v,requestLabelText:T})=>{var Ie,cn;const N=zo(),b=re(j=>j.annotationToolType),I=re(j=>j.nodes),h=re(j=>j.linkedNodeGroups),C=re(j=>j.settingsState.pointTemporaryMode),k=p.useRef(null),S=p.useRef(null),O=p.useRef(null),R=p.useRef(null),L=p.useCallback((j,ke)=>{var he;R.current=j,(he=S.current)==null||he.setPointQueryPickResult(j,ke),g(j)},[g]),_=p.useMemo(()=>new Map(I.map(j=>[j.id,j])),[I]),w=p.useCallback(()=>{k.current!==null&&(window.clearTimeout(k.current),k.current=null)},[]),q=p.useCallback(()=>{var j,ke;(j=O.current)==null||j.setVisualStyle(null),(ke=O.current)==null||ke.clearPreview()},[]),D=p.useCallback(()=>y(null),[y]),B=p.useCallback(()=>{w(),L(null),q(),D()},[D,q,w,L]),H=p.useCallback(()=>{const j=m();return j?_.get(j)??null:null},[m,_]),z=p.useMemo(()=>({getState:t.getState,dispatch:t.dispatch,setActiveToolType:r,drafts:o,requestLabelText:T,addAnnotation:l}),[l,o,t.dispatch,t.getState,T,r]),X=p.useMemo(()=>iT(n,z),[n,z]),V=n.getPlugin(b)??null;p.useMemo(()=>Nd(n.plugins),[n.plugins]);const $=p.useMemo(()=>Lv(n),[n]);dT({pointTemporaryMode:C,annotationToolDraftStore:o,addAnnotation:l});const{requestModeChange:Q,requestActivateTool:ue,requestFinishMeasurement:K}=eT(b,X,B),se=p.useCallback(()=>{const j=K();return j&&B(),j},[K,B]),{handlePointQueryPointCreated:de,resolvePointQueryCoordinate:Ne,activeToolSession:F}=aT({engine:e,nodes:I,linkedNodeGroups:h,activeToolType:b,toolSessions:X,getToolPlugin:j=>n.getPlugin(j)??null,sessionContext:z}),M=p.useCallback((j,ke,he)=>{de(j,ke,{inputModifier:he==null?void 0:he.inputModifier}),B()},[de,B]),J=p.useRef(()=>!1);J.current=j=>{if(!fe.current)return!1;const ke=Z(e)?e.worldToScreen(Y(j)):null;return M(j,ke??void 0),!0},p.useEffect(()=>(u({requestModeChange:Q,requestActivateTool:ue,requestFinishMeasurement:se,requestPointAt:j=>J.current(j)}),()=>{u(ma)}),[u,se,Q,ue]);const W=!!((F!=null&&F.onNodeCreated||(Ie=V==null?void 0:V.pointQuery)!=null&&Ie.onPointCreated)&&!c),fe=p.useRef(W);fe.current=W;const ce=p.useRef(H);ce.current=H;const G=p.useCallback(j=>{if(!W)return!1;const ke=I.find(he=>he.id===j)??null;return ke?(de(ke.coordinate,void 0,{forcedSnappedNodeId:j}),B(),!0):!1},[de,I,W,B]);p.useEffect(()=>d(G)??void 0,[d,G]);const te={indicatorControllerRef:O,authoringControllerRef:S,latestPickResultRef:R,pointQueryEnabledRef:fe};return JT({engine:e,referenceObjectSizing:v,pointQueryEnabled:W,refs:te,resolveHoveredPointQueryNodeRef:ce}),ZT({engine:e,activePlugin:V,context:{annotationsStore:t,drafts:o,labelOverlay:N,formatOptions:f,lineLabelOptions:A},pointQueryEnabled:W,refs:te}),p.useEffect(()=>{W||D()},[D,W]),lT(e,{enabled:W,inputModifiers:(cn=V==null?void 0:V.pointQuery)==null?void 0:cn.inputModifiers,onCoordinate:M,onLineFinish:F!=null&&F.finishesOnLoopClosure?()=>{se()}:void 0,onHoverSampleChange:({coordinate:j,screenPosition:ke,pointECEF:he,surfaceNormalECEF:Uc,inputModifier:Hc})=>{var ii,ao,si,io,li,ui;if(!W||!he||!j){w(),k.current=window.setTimeout(()=>{k.current=null,L(null),q()},Hn.hoverClearDelayMs);return}w();const{pickResult:sr,isLockedToSnapPoint:zc}=uT({engine:e,hoveredNode:H(),coordinate:j,screenPosition:ke,pointECEF:he,surfaceNormalECEF:Uc,inputModifier:Hc,resolvePointQueryCoordinate:Ne});L(sr,wr),(ii=O.current)==null||ii.setPreview({pointECEF:sr.pointECEF,surfaceNormalECEF:sr.surfaceNormalECEF,lockToPreviewPoint:zc},wr);const Vc=((si=(ao=S.current)==null?void 0:ao.isPointQueryPickResultAcceptable)==null?void 0:si.call(ao))??!0,ai=(li=(io=S.current)==null?void 0:io.getPointQueryVisualStyle)==null?void 0:li.call(io);(ui=O.current)==null||ui.setVisualStyle(ai!==void 0?ai:Vc?null:{color:eb},wr)}}),p.useEffect(()=>{var j;W||(w(),L(null),(j=S.current)==null||j.setEnabled(!1),q())},[q,w,W,L]),p.useEffect(()=>()=>{w(),L(null)},[w,L]),Zv({activePlugin:V,activeToolSession:F,activeToolType:b,cancelToolId:$,clearInteractionState:B,focusAdjacentAnnotationEntry:a,removeEditedNode:s,removeSelectedAnnotations:i,requestFinishMeasurement:se,requestModeChange:Q,requestActivateTool:ue,sessionContext:z,setActiveToolTypeInStore:r}),null},tb=({registry:e,setActiveToolType:n})=>{const t=re(o=>o.annotationToolType);return p.useEffect(()=>{var r;if(e.getPlugin(t))return;const o=(r=e.orderedDescriptors[0])==null?void 0:r.id;o&&n(o)},[t,e,n]),null},Wd=e=>{const n=new Map;return{set:(t,o)=>{n.set(t,o),e()},get:t=>n.get(t),delete:t=>{n.delete(t)&&e()},clear:()=>{n.size!==0&&(n.clear(),e())},forEach:t=>n.forEach(t),get size(){return n.size}}},Ls=jg(),Jn=Object.freeze({style:Object.freeze({DARK_ON_BRIGHT:"dark-on-bright",BRIGHT_ON_DARK:"bright-on-dark"}),label:Object.freeze({textColor:Ls}),selection:Object.freeze({highlightPalette:Object.freeze({backgroundColor:Yi("background"),hoverBackgroundColor:Yi("hoverBackground"),textColor:Ls,glowColor:No(1),glowRadiusPx:5,preserveFillOnSelection:!0})}),lineLabel:Object.freeze({backgroundStyle:Object.freeze({SOFT_RECT_FADE:"soft-rect-fade",TEXT_ECHO_DARKEN:"text-echo-darken"})})}),ob=Mn.fontSizePx.pointLabel,rb=e=>`${e/ob}rem`,mt=Object.freeze({fontFamily:Mn.fontFamily,rootFontSizeRem:"1rem",supportFontSizeRem:rb(Mn.fontSizePx.supportText),headingFontSizeRem:"1rem",lineLabelFontWeight:Mn.fontWeight.medium,badgeFontWeight:Mn.fontWeight.medium,headingFontWeight:Mn.fontWeight.semibold,sectionTitleFontWeight:Mn.fontWeight.semibold}),Yd={NONE:"none",MOVE_ON_LINE:"move-on-line"},qe=Object.freeze({appearance:Object.freeze({themeStyle:Jn.style.BRIGHT_ON_DARK}),text:Object.freeze({fontFamily:mt.fontFamily,fontWeight:mt.lineLabelFontWeight}),background:Object.freeze({style:Jn.lineLabel.backgroundStyle.TEXT_ECHO_DARKEN}),surface:Object.freeze({}),layout:Object.freeze({shortEdgeOffsetPx:-2}),collision:Object.freeze({allowEarlyRemoval:!0,resolutionStrategy:Yd.MOVE_ON_LINE,anchorSlideStepRatio:.1,maxAnchorSlideDeltaRatio:.3})}),Qd=Object.freeze({verticalFlippedBaselineOffsetPx:0,verticalBaselineAngleEpsilonRad:1e-9,sideHysteresisPx:1.5}),ar=e=>{var n,t;return{appearance:{...qe.appearance,...e==null?void 0:e.appearance},text:{...qe.text,...e==null?void 0:e.text,echo:((n=e==null?void 0:e.text)==null?void 0:n.echo)===void 0&&qe.text.echo===void 0?void 0:{...qe.text.echo,...(t=e==null?void 0:e.text)==null?void 0:t.echo}},background:{...qe.background,...e==null?void 0:e.background},surface:{...qe.surface,...e==null?void 0:e.surface},layout:{...qe.layout,...e==null?void 0:e.layout},collision:{...qe.collision,...e==null?void 0:e.collision}}},ab=e=>e.surface.blendMode??(e.appearance.themeStyle===Jn.style.DARK_ON_BRIGHT?"lighten":"darken"),Je={RIGHTMOST_SCREEN_SPACE:"rightmost-screen-space",LEFTMOST_SCREEN_SPACE:"leftmost-screen-space"},Mt={START_COORDINATE:"start-coordinate",END_COORDINATE:"end-coordinate"},Kd={POINT_LABEL:"point-label",LINE_BLEND:"line-blend"},Xd={INSIDE:"inside",OUTSIDE:"outside"},Jt={GROUND:"ground",COPLANAR:"coplanar"},at={MIN:1,MAX:1400,LOG_SCALE:64},Jd=e=>{if(!Number.isFinite(e)||e<0)return at.MIN;const n=Math.log2(Math.max(1,e)+1)*at.LOG_SCALE;return We(Math.round(at.MAX-n),at.MIN,at.MAX)},Zd=Object.freeze({reenterMarginPx:2,candidateSamples:10}),ib=1e-9,wt=(e,n)=>({x:e,y:n}),sb=(e,n,t,o,r=0)=>{const a=n/2+r,i=t/2+r,s=[wt(e.x-a,e.y-i),wt(e.x+a,e.y-i),wt(e.x+a,e.y+i),wt(e.x-a,e.y+i)];return s.every(l=>La(o,l))&&o.every((l,u)=>s.every((d,c)=>!hy(l,o[(u+1)%o.length],d,s[(c+1)%4],ib)))},lb=e=>{const n=e.map(l=>l.x),t=e.map(l=>l.y),[o,r,a,i]=[Math.min(...n),Math.max(...n),Math.min(...t),Math.max(...t)],s=Zd.candidateSamples;return Array.from({length:(s-1)**2},(l,u)=>wt(o+(r-o)*(u%(s-1)+1)/s,a+(i-a)*(Math.floor(u/(s-1))+1)/s))},ub=({polygon:e,width:n,height:t,previous:o})=>{var c,m;const r={fits:!1,position:null,weights:null};if(!e||e.length<3)return r;const a=Dg(e),i=(y,g=0)=>!!y&&sb(y,n,t,e,g);if(o!=null&&o.fits){const y=((c=o.weights)==null?void 0:c.length)===e.length?Np(o.weights,e):a;if(i(y))return{fits:!0,position:y,weights:o.weights}}const s=o!=null&&o.fits?0:Zd.reenterMarginPx;if(a&&i(a,s))return{fits:!0,position:a,weights:null};const l=a??e[0],u=(m=Tp(e))==null?void 0:m.center,d=[...u?[u]:[],...lb(e)].filter(y=>i(y,s)).sort((y,g)=>Math.hypot(y.x-l.x,y.y-l.y)-Math.hypot(g.x-l.x,g.y-l.y))[0];return d?{fits:!0,position:d,weights:bp(d,e)}:r},ws="0.5",db=e=>({width:(typeof e=="string"?e:String(e??"")).length*8.5,height:18}),cb=e=>{const n=e.firstElementChild;if(!n||n.offsetWidth<=0)return null;const t=getComputedStyle(n),o=n.offsetWidth-parseFloat(t.paddingLeft)-parseFloat(t.paddingRight),r=n.offsetHeight-parseFloat(t.paddingTop)-parseFloat(t.paddingBottom);return o>0&&r>0?{width:o,height:r}:null},mb=({state:e,lineLabelOptions:n,surfaceBlendMode:t})=>[Kd.LINE_BLEND,Tl(e),n.appearance.themeStyle,n.background.style,n.text.fontFamily,n.text.fontWeight,t??""].join(":"),yb=({elementDiv:e,state:n})=>!n.screenPosition||n.visible===!1?!1:(e.style.left=`${n.screenPosition.x}px`,e.style.top=`${n.screenPosition.y}px`,e.style.transform="translate(-50%, -50%)",e.style.zIndex=`${n.zIndex??0}`,e.style.opacity=n.isOccluded?"0.75":"1",!0),pb=e=>e.coordinateCandidates&&e.coordinateCandidates.length>0?e.coordinateCandidates:[{coordinate:e.coordinate,nodeId:e.nodeId}],gb=(e,n)=>{const t=e.worldToScreen(Y(n.coordinate));return t===null?null:{candidate:n,x:t.x,y:t.y}},fb=({engine:e,label:n})=>{var s;const t=pb(n),o=t[0]??{coordinate:n.coordinate,nodeId:n.nodeId};if(!Z(e)||!n.coordinateSelection||t.length<=1)return o;const r=t.flatMap(l=>{const u=gb(e,l);return u?[u]:[]});if(r.length===0)return o;const a=n.coordinateSelection===Je.LEFTMOST_SCREEN_SPACE;return((s=r.sort((l,u)=>a?l.x-u.x:u.x-l.x)[0])==null?void 0:s.candidate)??o},Ab=(e,n)=>{const t=e.nodeId?n.get(e.nodeId):void 0;return t?$n(t):e.coordinate},Vn=Object.freeze({layoutConfig:gy(void 0),markerPixelSize:10,markerOutlineWidth:ne.sizes.pointOutlineWidth,stemColor:ne.colors.surface,activeMoveGizmoLabelZIndex:at.MAX+1}),ya=()=>({screenPosition:null,isInViewport:!1,isHidden:!0,isOccluded:!1,hiddenByLayout:!0,angleRad:0,distance:Vn.layoutConfig.stemDistance,attach:"center",zIndex:0}),xr=(e,n)=>`${e}-${n}`,vb=({label:e,overlayState:n,areaLabelSurfaceBlendMode:t})=>{const o=e.markerPixelSize??Vn.markerPixelSize,r=e.markerOutlineWidth??Vn.markerOutlineWidth,a=n.isHidden||n.hiddenByLayout;return{pointId:e.id,content:e.content,badgeContent:e.badgeContent,selected:e.selected,hideLabelAndStem:e.hideLabelAndStem,hideMarker:e.hideMarker??!1,markerSize:o,markerStrokeWidth:r,stemStartDistance:e.stemStartDistance??(e.hideMarker?0:o/2+r/2),markerBackgroundColor:e.markerBackgroundColor,markerTextColor:e.markerTextColor,lineColor:e.lineColor??Vn.stemColor,labelStyle:e.labelStyle,collapse:e.collapse,textBackgroundColor:e.textBackgroundColor,textColor:e.textColor,selectedBackgroundColor:e.selectedBackgroundColor,selectedTextColor:e.selectedTextColor,selectedGlowColor:e.selectedGlowColor,selectedGlowRadiusPx:e.selectedGlowRadiusPx,preserveFillOnSelection:e.preserveFillOnSelection,hoverBackgroundColor:e.hoverBackgroundColor,textShadow:e.textShadow,fontSize:e.fontSize,fontFamily:e.fontFamily,fontWeight:e.fontWeight,mixBlendMode:e.mixBlendMode??(e.anchorKind===Cl.AREA_CENTROID?t:void 0),onClick:e.onClick,onDoubleClick:e.onDoubleClick,onHoverChange:e.onHoverChange,onLongPress:e.onLongPress,markerOnlyPointerEvents:e.markerOnlyPointerEvents,longPressDurationMs:e.longPressDurationMs,longPressOnlyOnMarker:!!e.onLongPress&&!!e.hideLabelAndStem,renderHiddenMarkerInteractionTarget:!!(e.onLongPress&&e.markerOnlyPointerEvents===!0),screenPosition:a?null:n.screenPosition,angleRad:n.angleRad,distance:n.distance,attach:n.attach,isOccluded:n.isOccluded,visible:!a,zIndex:n.zIndex}},qr=Object.freeze({viewportPaddingHorizontal:12,viewportPaddingVertical:8,occlusionToleranceMeters:1}),Tb=()=>({screenPosition:null,isInViewport:!1,isHidden:!0,isOccluded:!1}),bb=e=>(e==null?void 0:e.getFrameKey())??null,ec=e=>(e==null?void 0:e.captureProjectionSnapshot())??null,nc=Of,tc=({engine:e,coordinate:n,shouldTestVisibility:t=!0,shouldTestOcclusion:o=!0,viewportPaddingHorizontal:r=qr.viewportPaddingHorizontal,viewportPaddingVertical:a=qr.viewportPaddingVertical,occlusionToleranceMeters:i=qr.occlusionToleranceMeters})=>Z(e)?e.projectPoint(Y(n),{shouldTestVisibility:t,shouldTestOcclusion:o,viewportPaddingHorizontal:r,viewportPaddingVertical:a,occlusionToleranceMeters:i}):Tb(),Nb={placements:{},hiddenByLayout:new Set,collapsedToCompact:new Set},Ib=new x,_r=(e,n="")=>typeof e=="string"||typeof e=="number"?String(e):n,kb=({engine:e,labels:n,areaLabelSizeById:t,areaLabelFitByKey:o})=>{const r=new Map;return n.forEach(a=>{var u;if(((u=a.areaFit)==null?void 0:u.role)!==Xd.INSIDE)return;const i=[];for(const d of a.areaFit.outline){const c=e.worldToScreen(Y(d));if(!c)break;i.push({x:c.x,y:c.y})}const s=t.get(a.id)??db(a.content),l=ub({polygon:i.length===a.areaFit.outline.length?i:null,width:s.width,height:s.height,previous:o.get(a.areaFit.key)});r.set(a.areaFit.key,l),o.set(a.areaFit.key,l)}),r},hb=(e,n,t)=>{if(!e.areaFit)return n;const o=t.get(e.areaFit.key);return e.areaFit.role===Xd.INSIDE?o!=null&&o.fits&&o.position?{...n,screenPosition:o.position}:{...n,isHidden:!0}:o!=null&&o.fits?{...n,isHidden:!0}:n},Cb=(e,n,t)=>({id:e.id,anchor:t,anchorKind:e.anchorKind,text:_r(e.content),compactText:_r(e.badgeContent,_r(e.content)),index:n,...e.preferredAttach!==void 0?{lockPreferredPlacement:!0,preferredAttach:e.preferredAttach}:{},...e.selected?{layoutPriority:Number.MAX_SAFE_INTEGER,lockPreferredPlacement:!0}:{}}),Sb=({engine:e,labels:n,liveAnchors:t,isInPreviewNodeLink:o,previousStatesById:r,isCameraMoving:a,areaLabelSizeById:i,areaLabelFitByKey:s})=>{const l=new Map;if(!Z(e))return l;const u=b=>b.hideLabelAndStem!==!0&&(o==null?void 0:o(b.nodeId))===!0,d=a&&e.capabilities.occlusionPerFrame!==!0||t.size>0,c=!d&&n.some(u),m=e.getCameraPitchRad(),y=e.getCameraPositionECEF(Ib),g=kb({engine:e,labels:n,areaLabelSizeById:i,areaLabelFitByKey:s}),f=[],A=new Map,v=new Map,T=new Set;n.forEach((b,I)=>{var L;const h=u(b);h&&T.add(b.id);const C=Ab(fb({engine:e,label:b}),t),k=tc({engine:e,coordinate:C,shouldTestOcclusion:!d&&(b.areaFit!==void 0||fy({anchorKind:b.anchorKind,occlusionMode:b.occlusionMode}))}),S=d?{...k,isOccluded:((L=r.get(b.id))==null?void 0:L.isOccluded)??!1}:k,O=hb(b,S,g),R=y?y.distanceTo(Y(C)):Number.NaN;A.set(b.id,O),v.set(b.id,h?Vn.activeMoveGizmoLabelZIndex:Jd(R)),!(!O.screenPosition||O.isHidden||b.hideLabelAndStem||h||c&&r.has(b.id))&&f.push(Cb(b,I,O.screenPosition))});const N=f.length>0?Ay({points:f,viewportWidth:Math.max(1,e.canvas.clientWidth),viewportHeight:Math.max(1,e.canvas.clientHeight),cameraPitch:typeof m=="number"?m:0,config:Vn.layoutConfig}):Nb;return n.forEach(b=>{const I=r.get(b.id),h=T.has(b.id),C=N.placements[b.id],k=h?I:c?I??C:C,S=b.hideLabelAndStem||h?!1:c?(I==null?void 0:I.hiddenByLayout)??N.hiddenByLayout.has(b.id):N.hiddenByLayout.has(b.id);l.set(b.id,{...A.get(b.id)??ya(),hiddenByLayout:S,angleRad:(k==null?void 0:k.angleRad)??(I==null?void 0:I.angleRad)??0,distance:(k==null?void 0:k.distance)??(I==null?void 0:I.distance)??Vn.layoutConfig.stemDistance,attach:(k==null?void 0:k.attach)??(I==null?void 0:I.attach)??"center",zIndex:v.get(b.id)??0})}),l},po=Object.freeze({paddingBlockEx:.25,paddingInlineEx:.65,backdropInsetBlockEx:-.35,backdropInsetInlineEx:-.75}),Eb=Object.freeze({[Jn.style.BRIGHT_ON_DARK]:"15, 23, 42",[Jn.style.DARK_ON_BRIGHT]:"255, 255, 255"}),oc=e=>({...e!=null&&e.fontSize?{"--carma-annotation-text-overlay-font-size":e.fontSize}:{},...(e==null?void 0:e.fontWeight)!==void 0?{"--carma-annotation-text-overlay-font-weight":String(e.fontWeight)}:{},...e!=null&&e.letterSpacing?{"--carma-annotation-text-overlay-letter-spacing":e.letterSpacing}:{},...typeof(e==null?void 0:e.textEchoBlurPx)=="number"?{"--carma-annotation-text-overlay-text-echo-blur-px":`${e.textEchoBlurPx}px`}:{},...e!=null&&e.textEchoShadow?{"--carma-annotation-text-overlay-text-echo-shadow":e.textEchoShadow}:{}}),Ob=(e,n)=>{Object.entries(oc(n)).forEach(([t,o])=>e.style.setProperty(t,o))},_n=(e,n,t,{unit:o="",min:r,max:a}={})=>{typeof t!="number"||!Number.isFinite(t)||e.style.setProperty(n,`${We(t,r??-1/0,a??1/0)}${o}`)},go=(e,n)=>typeof e=="number"&&Number.isFinite(e)?e:n,Rb=({element:e,backdrop:n,surface:t,accentColor:o,visualOptions:r=qe})=>{var d,c,m,y,g;const{text:a,background:i,surface:s}=r,l=(f,A)=>{A!=null&&A.trim()&&e.style.setProperty(f,A)};e.style.setProperty("--carma-annotation-text-overlay-font-family",a.fontFamily),e.style.setProperty("--carma-annotation-text-overlay-font-weight",String(a.fontWeight)),o&&e.style.setProperty("--carma-annotation-text-overlay-glow-color",o),e.dataset.annotationThemeStyle=r.appearance.themeStyle,e.dataset.annotationTextOverlayBackgroundStyle=i.style,typeof i.surfaceAlpha=="number"&&Number.isFinite(i.surfaceAlpha)&&!((d=i.color)!=null&&d.trim())&&e.style.setProperty("--carma-annotation-text-overlay-backdrop-background",`rgba(${Eb[r.appearance.themeStyle]}, ${We(i.surfaceAlpha,0,1)})`);const u=i.showBackdrop!==!1;n.style.display=u?"block":"none",t.style.display=u?"block":"none",l("--carma-annotation-text-overlay-text-color",a.color),l("--carma-annotation-text-overlay-text-blend-mode",a.blendMode),l("--carma-annotation-text-overlay-backdrop-background",i.color),l("--carma-annotation-text-overlay-backdrop-blend-mode",i.blendMode),l("--carma-annotation-text-overlay-surface-blend-mode",s.blendMode),l("--carma-annotation-text-overlay-text-echo-color",(c=a.echo)==null?void 0:c.color),l("--carma-annotation-text-overlay-text-echo-blend-mode",(m=a.echo)==null?void 0:m.blendMode),_n(e,"--carma-annotation-text-overlay-text-echo-blur-px",(y=a.echo)==null?void 0:y.blurPx,{unit:"px",min:0}),_n(e,"--carma-annotation-text-overlay-text-echo-opacity",(g=a.echo)==null?void 0:g.opacity,{min:0,max:1}),_n(e,"--carma-annotation-text-overlay-surface-blur-px",i.blurPx,{unit:"px",min:0}),_n(e,"--carma-annotation-text-overlay-surface-brightness-pct",i.brightnessPct,{unit:"%",min:0}),_n(e,"--carma-annotation-text-overlay-surface-saturate-pct",i.saturatePct,{unit:"%",min:0}),_n(e,"--carma-annotation-text-overlay-backdrop-radius",i.radiusEx,{unit:"ex",min:0}),_n(e,"--carma-annotation-text-overlay-surface-edge-blur-px",i.edgeBlurPx,{unit:"px",min:0}),(typeof s.paddingBlockEx=="number"||typeof s.paddingInlineEx=="number")&&(e.style.setProperty("--carma-annotation-text-overlay-padding-block",`${Math.max(go(s.paddingBlockEx,po.paddingBlockEx),0)}ex`),e.style.setProperty("--carma-annotation-text-overlay-padding-inline",`${Math.max(go(s.paddingInlineEx,po.paddingInlineEx),0)}ex`)),(typeof i.insetBlockEx=="number"||typeof i.insetInlineEx=="number")&&e.style.setProperty("--carma-annotation-text-overlay-backdrop-inset",`${go(i.insetBlockEx,po.backdropInsetBlockEx)}ex ${go(i.insetInlineEx,po.backdropInsetInlineEx)}ex`)},Xe=Object.freeze({root:"carma-annotation-text-overlay",backdrop:"carma-annotation-text-overlay__backdrop",surface:"carma-annotation-text-overlay__surface",textEcho:"carma-annotation-text-overlay__text-echo",text:"carma-annotation-text-overlay__text"}),Lb='[data-annotation-text-overlay-text-echo="true"]',wb='[data-annotation-text-overlay-text="foreground"]',xb=Object.freeze({fontSize:"17px",letterSpacing:"5%",fontWeight:800,textEchoBlurPx:4,textEchoShadow:"0 0 2px rgba(2, 6, 23, 0.42), 0 0 6px rgba(2, 6, 23, 0.3)"}),Et=e=>{const n=document.createElement("div");return n.className=e,n},qb=({accentColor:e,visualOptions:n,styleOptions:t})=>{const o=Et(Xe.root),r=Et(Xe.backdrop),a=Et(Xe.surface),i=Et(Xe.textEcho),s=Et(Xe.text);return i.dataset.annotationTextOverlayTextEcho="true",s.dataset.annotationTextOverlayText="foreground",Rb({element:o,backdrop:r,surface:a,accentColor:e,visualOptions:n}),Ob(o,t),o.append(r,a,i,s),o},_b=(e,n)=>{[wb,Lb].forEach(t=>{const o=e.querySelector(t);o&&o.textContent!==n&&(o.textContent=n)})},Pb=e=>typeof e=="string"||typeof e=="number"?String(e):"",Mb=({textColor:e,fontSize:n,styleOptions:t,visualOptions:o,surfaceBlendMode:r,hasInteraction:a})=>{const i=(t==null?void 0:t.fontSize)===void 0?n:void 0;return{pointerEvents:a?"auto":"none",cursor:a?"pointer":"default","--carma-annotation-text-overlay-font-family":o.text.fontFamily,"--carma-annotation-text-overlay-font-weight":String(o.text.fontWeight),...i?{"--carma-annotation-text-overlay-font-size":i}:{},...oc(t),...e?{"--carma-annotation-text-overlay-text-color":e}:{},...r?{"--carma-annotation-text-overlay-backdrop-blend-mode":r,"--carma-annotation-text-overlay-surface-blend-mode":r}:{}}},rc=({content:e,selected:n,textColor:t,fontSize:o,styleOptions:r,visualOptions:a=qe,surfaceBlendMode:i,onClick:s,onDoubleClick:l,onLongPress:u,longPressDurationMs:d=320})=>{const c=p.useRef(null),m=p.useRef(!1),y=Pb(e),g=!!(s||l||u),f=p.useCallback(()=>{c.current!==null&&(window.clearTimeout(c.current),c.current=null)},[]),A=p.useCallback(T=>{if(m.current){m.current=!1,T.preventDefault(),T.stopPropagation();return}s==null||s()},[s]),v=p.useCallback(()=>{u&&(f(),m.current=!1,c.current=window.setTimeout(()=>{c.current=null,m.current=!0,u()},d))},[f,d,u]);return p.useEffect(()=>f,[f]),E.jsxs("div",{className:Xe.root,"data-annotation-theme-style":a.appearance.themeStyle,"data-annotation-text-overlay-background-style":a.background.style,"data-selected":n?"true":void 0,style:Mb({textColor:t,fontSize:o,styleOptions:r,visualOptions:a,surfaceBlendMode:i,hasInteraction:g}),onClick:s?A:void 0,onDoubleClick:l,onPointerDown:u?v:void 0,onPointerUp:u?f:void 0,onPointerLeave:u?f:void 0,onPointerCancel:u?f:void 0,children:[E.jsx("div",{className:Xe.backdrop}),E.jsx("div",{className:Xe.surface}),E.jsx("div",{className:Xe.textEcho,"data-annotation-text-overlay-text-echo":"true",children:y}),E.jsx("div",{className:Xe.text,"data-annotation-text-overlay-text":"foreground",children:y})]})};rc.__docgenInfo={description:"",methods:[],displayName:"TextOverlay",props:{content:{required:!0,tsType:{name:"ReactNode"},description:""},selected:{required:!1,tsType:{name:"boolean"},description:""},textColor:{required:!1,tsType:{name:"string"},description:""},fontSize:{required:!1,tsType:{name:"string"},description:""},styleOptions:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  fontSize?: string;
  letterSpacing?: string;
  fontWeight?: string | number;
  textEchoBlurPx?: number;
  textEchoShadow?: string;
}`,signature:{properties:[{key:"fontSize",value:{name:"string",required:!1}},{key:"letterSpacing",value:{name:"string",required:!1}},{key:"fontWeight",value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!1}},{key:"textEchoBlurPx",value:{name:"number",required:!1}},{key:"textEchoShadow",value:{name:"string",required:!1}}]}},description:""},visualOptions:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  appearance: AnnotationLineLabelAppearanceOptions;
  text: AnnotationLineLabelTextOptions;
  background: AnnotationLineLabelBackgroundOptions;
  surface: AnnotationLineLabelSurfaceOptions;
  layout: AnnotationLineLabelLayoutOptions;
  collision: AnnotationLineLabelCollisionOptions;
}`,signature:{properties:[{key:"appearance",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  themeStyle: AnnotationThemeStyle;
}`,signature:{properties:[{key:"themeStyle",value:{name:"unknown[unknown]",raw:"(typeof ANNOTATION_THEME.style)[keyof typeof ANNOTATION_THEME.style]",required:!0}}]}}],raw:`Readonly<{
  themeStyle: AnnotationThemeStyle;
}>`,required:!0}},{key:"text",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fontFamily: string;
  fontWeight: string | number;
  color?: string;
  blendMode?: CssMixBlendMode;
  echo?: AnnotationLineLabelTextEchoOptions;
}`,signature:{properties:[{key:"fontFamily",value:{name:"string",required:!0}},{key:"fontWeight",value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!0}},{key:"color",value:{name:"string",required:!1}},{key:"blendMode",value:{name:"CssMixBlendMode",required:!1}},{key:"echo",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  color?: string;
  blurPx?: number;
  opacity?: number;
  blendMode?: CssMixBlendMode;
}`,signature:{properties:[{key:"color",value:{name:"string",required:!1}},{key:"blurPx",value:{name:"number",required:!1}},{key:"opacity",value:{name:"number",required:!1}},{key:"blendMode",value:{name:"CssMixBlendMode",required:!1}}]}}],raw:`Readonly<{
  color?: string;
  blurPx?: number;
  opacity?: number;
  blendMode?: CssMixBlendMode;
}>`,required:!1}}]}}],raw:`Readonly<{
  fontFamily: string;
  fontWeight: string | number;
  color?: string;
  blendMode?: CssMixBlendMode;
  echo?: AnnotationLineLabelTextEchoOptions;
}>`,required:!0}},{key:"background",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  style: AnnotationLineLabelBackgroundStyle;
  showBackdrop?: boolean;
  color?: string;
  blendMode?: CssMixBlendMode;
  blurPx?: number;
  brightnessPct?: number;
  saturatePct?: number;
  surfaceAlpha?: number;
  radiusEx?: number;
  edgeBlurPx?: number;
  insetBlockEx?: number;
  insetInlineEx?: number;
}`,signature:{properties:[{key:"style",value:{name:"unknown[unknown]",raw:"(typeof ANNOTATION_THEME.lineLabel.backgroundStyle)[keyof typeof ANNOTATION_THEME.lineLabel.backgroundStyle]",required:!0}},{key:"showBackdrop",value:{name:"boolean",required:!1}},{key:"color",value:{name:"string",required:!1}},{key:"blendMode",value:{name:"CssMixBlendMode",required:!1}},{key:"blurPx",value:{name:"number",required:!1}},{key:"brightnessPct",value:{name:"number",required:!1}},{key:"saturatePct",value:{name:"number",required:!1}},{key:"surfaceAlpha",value:{name:"number",required:!1}},{key:"radiusEx",value:{name:"number",required:!1}},{key:"edgeBlurPx",value:{name:"number",required:!1}},{key:"insetBlockEx",value:{name:"number",required:!1}},{key:"insetInlineEx",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  style: AnnotationLineLabelBackgroundStyle;
  showBackdrop?: boolean;
  color?: string;
  blendMode?: CssMixBlendMode;
  blurPx?: number;
  brightnessPct?: number;
  saturatePct?: number;
  surfaceAlpha?: number;
  radiusEx?: number;
  edgeBlurPx?: number;
  insetBlockEx?: number;
  insetInlineEx?: number;
}>`,required:!0}},{key:"surface",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  blendMode?: CssMixBlendMode;
  paddingBlockEx?: number;
  paddingInlineEx?: number;
}`,signature:{properties:[{key:"blendMode",value:{name:"CssMixBlendMode",required:!1}},{key:"paddingBlockEx",value:{name:"number",required:!1}},{key:"paddingInlineEx",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  blendMode?: CssMixBlendMode;
  paddingBlockEx?: number;
  paddingInlineEx?: number;
}>`,required:!0}},{key:"layout",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  shortEdgeOffsetPx: number;
}`,signature:{properties:[{key:"shortEdgeOffsetPx",value:{name:"number",required:!0}}]}}],raw:`Readonly<{
  shortEdgeOffsetPx: number;
}>`,required:!0}},{key:"collision",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  allowEarlyRemoval: boolean;
  resolutionStrategy: AnnotationLineLabelCollisionResolutionStrategy;
  anchorSlideStepRatio: number;
  maxAnchorSlideDeltaRatio: number;
}`,signature:{properties:[{key:"allowEarlyRemoval",value:{name:"boolean",required:!0}},{key:"resolutionStrategy",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_LINE_LABEL_COLLISION_RESOLUTION_STRATEGY)[keyof typeof ANNOTATION_LINE_LABEL_COLLISION_RESOLUTION_STRATEGY]",required:!0}},{key:"anchorSlideStepRatio",value:{name:"number",required:!0}},{key:"maxAnchorSlideDeltaRatio",value:{name:"number",required:!0}}]}}],raw:`Readonly<{
  allowEarlyRemoval: boolean;
  resolutionStrategy: AnnotationLineLabelCollisionResolutionStrategy;
  anchorSlideStepRatio: number;
  maxAnchorSlideDeltaRatio: number;
}>`,required:!0}}]}}],raw:`Readonly<{
  appearance: AnnotationLineLabelAppearanceOptions;
  text: AnnotationLineLabelTextOptions;
  background: AnnotationLineLabelBackgroundOptions;
  surface: AnnotationLineLabelSurfaceOptions;
  layout: AnnotationLineLabelLayoutOptions;
  collision: AnnotationLineLabelCollisionOptions;
}>`},description:"",defaultValue:{value:`Object.freeze({
  appearance: Object.freeze({
    themeStyle: ANNOTATION_THEME.style.BRIGHT_ON_DARK,
  }),
  text: Object.freeze({
    fontFamily: typographyDefaults.fontFamily,
    fontWeight: typographyDefaults.lineLabelFontWeight,
  }),
  background: Object.freeze({
    style: ANNOTATION_THEME.lineLabel.backgroundStyle.TEXT_ECHO_DARKEN,
  }),
  surface: Object.freeze({}),
  layout: Object.freeze({
    shortEdgeOffsetPx: -2,
  }),
  collision: Object.freeze({
    allowEarlyRemoval: true,
    resolutionStrategy:
      ANNOTATION_LINE_LABEL_COLLISION_RESOLUTION_STRATEGY.MOVE_ON_LINE,
    anchorSlideStepRatio: 0.1,
    maxAnchorSlideDeltaRatio: 0.3,
  }),
})`,computed:!0}},surfaceBlendMode:{required:!1,tsType:{name:'CSSProperties["mixBlendMode"]',raw:'CSSProperties["mixBlendMode"]'},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onDoubleClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onLongPress:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},longPressDurationMs:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"320",computed:!1}}}};const ac=({engine:e,liveAnchors:n,updatePositions:t,computeStates:o,createEmptyState:r})=>{const a=p.useRef({frameKey:null,sceneSnapshot:null,statesById:new Map}),i=p.useRef(!1),s=p.useRef(!1),l=p.useCallback((c=!1)=>{a.current={frameKey:null,sceneSnapshot:null,statesById:c?new Map:a.current.statesById}},[]);p.useEffect(()=>{if(!Z(e)){i.current=!1;return}const c=e.subscribeCameraMove({onMoveStart:()=>{i.current=!0,l()},onMoveEnd:()=>{i.current=!1,l(),t(),e.requestRender()}});return()=>{i.current=!1,c()}},[e,l,t]);const u=p.useCallback(c=>{const m=bb(e);if(a.current.frameKey!==m){const y=ec(e),g=n.size>0,f=s.current&&!g;s.current=g;const A=g||f||!nc(a.current.sceneSnapshot,y);a.current={frameKey:m,sceneSnapshot:y,statesById:A?o({previousStatesById:a.current.statesById,isCameraMoving:i.current}):a.current.statesById}}return a.current.statesById.get(c)??r()},[o,r,e,n]),d=p.useCallback(c=>a.current.statesById.get(c),[]);return{resolveState:u,readCachedState:d,invalidate:l}},Db=e=>e.stem.isConnected&&e.stemLine.isConnected&&e.labelRoot.isConnected&&e.pointLabelRoot.isConnected,Bb=(e,n,t,o,r="runtime-point-label",a=qe)=>{const{setLabelOverlayElement:i,removeLabelOverlayElement:s,updatePositions:l}=zo(),u=p.useRef(n),d=p.useRef(new Set),c=p.useRef(new Map),m=p.useRef(new Map),y=p.useRef(new Map),g=p.useCallback(({previousStatesById:b,isCameraMoving:I})=>Sb({engine:e,labels:u.current,liveAnchors:t,isInPreviewNodeLink:o,previousStatesById:b,isCameraMoving:I,areaLabelSizeById:y.current,areaLabelFitByKey:m.current}),[e,o,t]),{resolveState:f,readCachedState:A,invalidate:v}=ac({engine:e,liveAnchors:t,updatePositions:l,computeStates:g,createEmptyState:ya});p.useEffect(()=>{u.current=n,v(),l(),e==null||e.requestRender()},[e,v,o,n,l]);const T=p.useMemo(()=>n.filter(b=>!b.hideLabelAndStem||b.markerOnlyPointerEvents===!0&&(!!b.onClick||!!b.onHoverChange||!!b.onLongPress)),[n]),N=p.useCallback((b,I)=>{const h=c.current.get(b);if(h&&Db(h))return h;const C=Og(I);return C?(c.current.set(b,C),C):null},[]);p.useEffect(()=>{let b=!1;const I=new Set;T.forEach(h=>{var w;const C=h.renderStyle===Kd.LINE_BLEND,k=h.mixBlendMode??ab(a),S=q=>vb({label:h,overlayState:q,areaLabelSurfaceBlendMode:k}),O=S(A(h.id)??ya()),R=C?mb({state:O,lineLabelOptions:a,surfaceBlendMode:k}):Tl(O);I.add(h.id);const L=q=>{const D=S(f(h.id));if(C){const z=yb({elementDiv:q,state:D});if(h.areaFit){z&&(q.style.opacity=D.isOccluded?ws:"1");const X=cb(q);X&&y.current.set(h.id,X)}return z}const B=N(h.id,q);if(!B)return!1;const H=Rg({elementDiv:q,domRefs:B,state:D});return h.areaFit&&D.isOccluded&&(B.pointLabelRoot.style.opacity=ws),H},_=C?E.jsx(rc,{content:O.content,selected:O.selected,textColor:O.textColor,fontSize:O.fontSize,styleOptions:xb,visualOptions:a,surfaceBlendMode:k,onClick:O.onClick,onDoubleClick:O.onDoubleClick,onLongPress:O.onLongPress,longPressDurationMs:O.longPressDurationMs}):ly(O);d.current.has(h.id)||(b=!0,c.current.delete(h.id)),i({id:xr(r,h.id),contentKey:R,content:_,zIndex:((w=A(h.id))==null?void 0:w.zIndex)??0,updatePosition:L})}),d.current.forEach(h=>{I.has(h)||(b=!0,c.current.delete(h),s(xr(r,h)))}),d.current=I,l(),b&&(e==null||e.requestRender())},[i,e,T,r,a,A,s,f,N,l]),p.useEffect(()=>()=>{d.current.forEach(b=>{s(xr(r,b))}),d.current.clear(),c.current.clear()},[r,s])},Fb=()=>({screenPosition:null,isInViewport:!1,isHidden:!0,isOccluded:!1}),Gb=Object.freeze({longPressDurationMs:320}),Pr=(e,n)=>`${e}-${n}`,jb=e=>[e.id,e.pixelSize,e.fill,e.outline,e.outlineWidth,`${e.longPressDurationMs??""}`,dr(e.onClick),dr(e.onHoverChange),dr(e.onLongPress)].join(":"),ic=({interactive:e,onClick:n,onHoverChange:t,onLongPress:o,longPressDurationMs:r=Gb.longPressDurationMs,markerStyle:a})=>{const[i,s]=p.useState(!1),l=p.useRef(void 0),u=p.useRef(!1),d=p.useCallback(()=>{l.current!==void 0&&(window.clearTimeout(l.current),l.current=void 0)},[]),c=p.useCallback(f=>{if(f.stopPropagation(),f.button!==0||!o){d();return}u.current=!1,d(),l.current=window.setTimeout(()=>{u.current=!0,o()},r)},[d,r,o]),m=p.useCallback(f=>{if(f.stopPropagation(),u.current){u.current=!1;return}n==null||n()},[n]),y=p.useCallback(()=>{s(!0),t==null||t(!0)},[t]),g=p.useCallback(()=>{d(),s(!1),t==null||t(!1)},[d,t]);return p.useEffect(()=>d,[d]),E.jsx("div",{"data-runtime-point-marker-shell":"true",style:{position:"relative",width:"0px",height:"0px",overflow:"visible",pointerEvents:"none"},children:E.jsx("div",{"data-runtime-point-marker-circle":"true",style:{position:"absolute",left:"0px",top:"0px",transform:i?`translate(-50%, -50%) scale(${Sa.hover.scale})`:"translate(-50%, -50%)",borderRadius:"999px",boxSizing:"border-box",pointerEvents:e?"auto":"none",cursor:e?"pointer":"default",transition:bl(),boxShadow:i?Nl():"none",filter:i?Il():"none",...a},onClick:e?m:void 0,onMouseDown:e?c:void 0,onMouseUp:e?d:void 0,onMouseEnter:e?y:void 0,onMouseLeave:e?g:void 0})})},Ub=(e,n,t,o="runtime-point-marker")=>{const{setLabelOverlayElement:r,removeLabelOverlayElement:a,updatePositions:i}=zo(),s=p.useRef(n),l=p.useRef(new Set),u=p.useCallback(({previousStatesById:m,isCameraMoving:y})=>{const g=new Map,f=y&&(e==null?void 0:e.capabilities.occlusionPerFrame)!==!0||t.size>0;return s.current.forEach(A=>{var N;const v=A.nodeId?t.get(A.nodeId):void 0,T=tc({engine:e,coordinate:v?$n(v):A.coordinate,shouldTestOcclusion:!f});g.set(A.id,f?{...T,isOccluded:((N=m.get(A.id))==null?void 0:N.isOccluded)??!1}:T)}),g},[e,t]),{resolveState:d,invalidate:c}=ac({engine:e,liveAnchors:t,updatePositions:i,computeStates:u,createEmptyState:Fb});p.useEffect(()=>{s.current=n,c(!0),i(),e==null||e.requestRender()},[n,e,c,i]),p.useEffect(()=>{const m=new Set;n.forEach(y=>{const g=Pr(o,y.id);m.add(y.id);const f={id:g,zIndex:kl.zIndex.pointMarker,contentKey:jb(y),content:E.jsx(ic,{interactive:!!(y.onClick||y.onHoverChange||y.onLongPress),onClick:y.onClick,onHoverChange:y.onHoverChange,onLongPress:y.onLongPress,longPressDurationMs:y.longPressDurationMs}),updatePosition:A=>{const v=d(y.id);if(!v.screenPosition||v.isHidden)return!1;let T=v.screenPosition;const N=y.nodeId?t.get(y.nodeId):void 0;if(N&&Z(e)){const I=e.worldToScreen(N);I!==null&&(T={x:I.x,y:I.y})}A.style.left=`${T.x}px`,A.style.top=`${T.y}px`,A.style.transform="none";const b=A.querySelector('[data-runtime-point-marker-circle="true"]');return b?(b.style.width=`${y.pixelSize}px`,b.style.height=`${y.pixelSize}px`,b.style.background=y.fill,b.style.border=`${y.outlineWidth}px ${v.isOccluded?"dotted":"solid"} ${y.outline}`,!0):!1}};r(f)}),l.current.forEach(y=>{m.has(y)||a(Pr(o,y))}),l.current=m,i(),e==null||e.requestRender()},[r,e,t,o,n,a,d,i]),p.useEffect(()=>()=>{l.current.forEach(m=>{a(Pr(o,m))}),l.current.clear()},[o,a])};ic.__docgenInfo={description:"",methods:[],displayName:"PointMarkerOverlayShell",props:{interactive:{required:!0,tsType:{name:"boolean"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onHoverChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(hovered: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"hovered"}],return:{name:"void"}}},description:""},onLongPress:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},longPressDurationMs:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"pointMarkerVisualizerDefaults.longPressDurationMs",computed:!0}},markerStyle:{required:!1,tsType:{name:"CSSProperties"},description:""}}};const ir=(e,n)=>{Object.assign(e.style,n)},ti=(e,n,t=be.LABEL)=>{const o=Zu(e,t);if(!o)return null;const r=document.createElement("div");return r.id=n,r.dataset.annotationOverlayLayer="true",ir(r,{position:"absolute",inset:"0",overflow:"hidden",pointerEvents:"none",userSelect:"none",webkitUserSelect:"none",zIndex:"auto"}),o.appendChild(r),r},sc=(e,n)=>Object.fromEntries(Object.entries(n).map(([t,o])=>[t,o?ti(e,o,t):null])),Zt=e=>{e==null||e.remove()},Fo=({x:e,y:n})=>({x:e,y:n}),$C=(e,n)=>{const t=e.worldToScreen(n);return t?Fo(t):null},Hb=Object.freeze({direct:{labelOffsetPx:Pe.lineLabelOffsetPx},vertical:{labelOffsetPx:Pe.lineLabelOffsetPx,labelFlippedBaselineOffsetPx:Qd.verticalFlippedBaselineOffsetPx,labelRotationMode:uy.CLOCKWISE},horizontal:{labelOffsetPx:Pe.lineLabelOffsetPx}}),zb=({kind:e,outsideReferencePoint:n,anchorRatio:t})=>({...Hb[e],anchorRatio:t===void 0?void 0:Ea(t),getLabelOutsideReferencePoint:n?()=>Fo(n):void 0}),Vb=({x:e,y:n,angleRad:t,anchor:o})=>`translate(${Math.round(e)}px, ${Math.round(n)}px) ${o==="left"?"translate(0%, -50%)":o==="right"?"translate(-100%, -50%)":"translate(-50%, -50%)"} rotate(${t}rad)`,$b=({start:e,end:n,kind:t,outsideReferencePoint:o,shortEdgeOffsetPx:r=qe.layout.shortEdgeOffsetPx,useShortEdgeRules:a=!0,previousShouldFlip:i=!1,anchorRatio:s})=>{const l=dy({svgLine:{start:Fo(e),end:Fo(n)},options:zb({kind:t,outsideReferencePoint:o,anchorRatio:s}),previousShouldFlip:i,sideSwitchThresholdPx:Qd.sideHysteresisPx});if(!l)return null;if(a&&l.lineLengthPx<Pe.lineLabelMinLengthPx){const u=l.normalX>=0;return{x:l.midX+l.normalX*r,y:l.midY+l.normalY*r,angleRad:0,anchor:u?"left":"right",anchorRatio:l.anchorRatio,isShortEdge:!0,shouldFlip:l.shouldFlip,normalX:l.normalX,normalY:l.normalY}}return{x:l.textX,y:l.textY,angleRad:l.angleRad,anchor:"center",anchorRatio:l.anchorRatio,isShortEdge:!1,shouldFlip:l.shouldFlip,normalX:l.normalX,normalY:l.normalY}},Wb="carma-annotation-overlay-line-label",Yb="carma-annotation-overlay-line-label__frame",xs=e=>{const n=document.createElement("div");return n.className=e,n},Qb=e=>e.dataset.annotationOverlayLineLabelKind==="vertical"||e.dataset.annotationOverlayLineLabelKind==="horizontal"?e.dataset.annotationOverlayLineLabelKind:"direct",Kb=e=>{const n=e.dataset.annotationOverlayLineLabelShortEdgeOffsetPx,t=n?Number(n):Number.NaN;return Number.isFinite(t)?t:qe.layout.shortEdgeOffsetPx},lc=(e,n)=>{const t=ar(n),o=xs(Wb),r=xs(Yb),a=qb({accentColor:e,visualOptions:t});return o.dataset.annotationOverlayLineLabelShortEdgeOffsetPx=String(t.layout.shortEdgeOffsetPx),r.append(a),o.appendChild(r),o},Xb=e=>{const n=ar(e),t=ne.colors.componentLabelAccents,o=r=>{const a=lc(t[r],n);return a.dataset.annotationOverlayLineLabelKind=r,a};return{direct:o("direct"),vertical:o("vertical"),horizontal:o("horizontal")}},uc=e=>{e.direct.style.display="none",e.vertical.style.display="none",e.horizontal.style.display="none"},Jb=({element:e,text:n,start:t,end:o,outsideReferencePoint:r,anchorRatio:a})=>{const i=Qb(e),s=$b({start:t,end:o,kind:i,outsideReferencePoint:r,shortEdgeOffsetPx:Kb(e),useShortEdgeRules:i==="vertical",anchorRatio:a,previousShouldFlip:e.dataset.annotationOverlayLineLabelNormalFlip==="1"});if(!s){e.style.display="none";return}_b(e,n),e.style.display="block",e.dataset.annotationOverlayLineLabelShortEdge=s.isShortEdge?"true":"false",e.dataset.annotationOverlayLineLabelAnchorRatio=`${s.anchorRatio}`,e.dataset.annotationOverlayLineLabelNormalFlip=s.shouldFlip?"1":"0",e.style.transform=Vb(s)},dc=({directLabelText:e,verticalLabelText:n,horizontalLabelText:t})=>({showVerticalLabel:n!==null&&n!==e,showHorizontalLabel:t!==null&&t!==e}),Dt=()=>({auxiliaryPoint:new x,auxiliaryScreen:{x:0,y:0}}),cc=({anchorPointECEF:e,targetPointECEF:n,scratch:t})=>{const o=Gt(e),r=Gt(n);return!Number.isFinite(o.longitude)||!Number.isFinite(o.latitude)||!Number.isFinite(r.altitude)?null:tl(o.longitude,o.latitude,r.altitude,t.auxiliaryPoint)},WC=({firstCorner:e,oppositeCorner:n})=>{const t=Y(e),o=Y(n),r=Pu(t,o);return r?[t,r.adjacentHorizontalCorner,o,r.adjacentVerticalCorner,t]:null},ze=Object.freeze({pointLabelCollisionSelector:'[data-pillbutton-root="true"], [data-point-label-content-root="true"]',svgNamespace:"http://www.w3.org/2000/svg",distanceTriangle:Object.freeze({cornerDotRadiusPx:1.25/2}),midpointMarker:Object.freeze({...cy({markerDiameterPx:ne.sizes.pointPixelSize,markerStrokeWidthPx:ne.sizes.pointOutlineWidth}),tickColor:Sa.colors.surfaceStrong,minOverlayZIndex:kl.zIndex.interactionHandleFloor})}),ye=Object.freeze({cornerOverlay:Object.freeze({minBoxPx:20,paddingPx:6,targetRadiusPx:20,segments:20,strokeWidthPx:1.25,color:Gg(),straightHitTargetPx:20,fallbackFovRad:al})}),pa=e=>`annotation-overlay-distance-triangle-label-layer-${e}`,mc=new x,ga=(e,n)=>{const t=e.getCameraPositionECEF(mc);return Jd(t?t.distanceTo(n):Number.NaN)},Bt=(e,n,t)=>Math.round((ga(e,n)+ga(e,t))/2),Zb=e=>({left:e.left,top:e.top,right:e.right,bottom:e.bottom}),eN=e=>{const n=Zu(e);return n?Array.from(n.querySelectorAll(ze.pointLabelCollisionSelector)).map(t=>Zb(t.getBoundingClientRect())).filter(t=>t.right>t.left&&t.bottom>t.top):[]},en=(e,n,t)=>{const o=n?e.get(n):void 0;return o?o.clone():Y(t)},Ze=(e,n)=>({x:e,y:n}),yc=({overlay:e})=>e.anchorCoordinateRole!==Mt.END_COORDINATE,qs=(e,n)=>e.startNodeId!==void 0&&n.get(e.startNodeId)!==void 0||e.endNodeId!==void 0&&n.get(e.endNodeId)!==void 0,Mr=(e,n,t,o)=>{const r=n.distanceTriangleOverlay;if(!r||!n.startCoordinate||!n.endCoordinate)return null;const a=en(t,n.startNodeId,n.startCoordinate),i=en(t,n.endNodeId,n.endCoordinate),s=yc({overlay:r}),l=s?a:i,u=s?i:a,d=cc({engine:e,anchorPointECEF:l,targetPointECEF:u,scratch:o});return d?{anchorECEF:l,auxiliaryECEF:d.clone(),targetECEF:u}:null},pc=({engine:e,edge:n,scratch:t,previousOutsideSigns:o,formatOptions:r,liveAnchors:a})=>{const i=n.distanceTriangleOverlay;if(!i||!n.startCoordinate||!n.endCoordinate)return null;const s=en(a,n.startNodeId,n.startCoordinate),l=en(a,n.endNodeId,n.endCoordinate),u=e.worldToScreen(s),d=e.worldToScreen(l);if(u===null||d===null)return null;const c=Ze(u.x,u.y),m=Ze(d.x,d.y),y=yc({overlay:i}),g=y?n.startCoordinate:n.endCoordinate,f=y?n.endCoordinate:n.startCoordinate,A=y?s:l,v=y?l:s,T=y?c:m,N=y?m:c,b=cc({engine:e,anchorPointECEF:A,targetPointECEF:v,scratch:t});if(!b)return null;const I=e.worldToScreen(b,t.auxiliaryScreen);if(I===null)return null;const h=Ze(I.x,I.y),C=Mg({anchor:T,target:N,aux:h,anchorAltitudeMeters:g.altitude,targetAltitudeMeters:f.altitude,previousOutsideSigns:o}),k=st(A.distanceTo(v),r.lengthMeters),S=A.distanceTo(b),O=b.distanceTo(v),R=S>Pe.geometryEpsilonMeters?st(S,r.lengthMeters):null,L=O>Pe.geometryEpsilonMeters?st(O,r.lengthMeters):null,_=dc({directLabelText:k,verticalLabelText:R,horizontalLabelText:L});return{anchorPointECEF:A,targetPointECEF:v,auxiliaryPointECEF:b,anchorScreenPosition:T,targetScreenPosition:N,auxiliaryScreenPosition:h,directLabelText:k,verticalLabelText:R,horizontalLabelText:L,showVerticalLabel:_.showVerticalLabel,showHorizontalLabel:_.showHorizontalLabel,directOutsideReferencePoint:C.directOutsideReferencePoint,verticalOutsideReferencePoint:C.verticalOutsideReferencePoint,horizontalOutsideReferencePoint:C.horizontalOutsideReferencePoint,nextOutsideSigns:C.nextOutsideSigns}},nN=({edgeSegments:e,engine:n,formatOptions:t,liveAnchors:o,occludedLinesInScene:r,surfaceKey:a,activeEditedNodeId:i,blockEdgeInteractions:s,onEdgeClick:l,onAnnotationSelect:u})=>e.flatMap(d=>{var v;const c=i&&d.startNodeId&&d.endNodeId&&l?()=>l(d.startNodeId,d.endNodeId):void 0,m=!s&&u&&((v=d.distanceTriangleOverlay)!=null&&v.annotationId)?()=>u(d.distanceTriangleOverlay.annotationId):void 0,y=c??m,g=r&&d.overlayDashed?[]:cr({id:`${a}-runtime-edge-overlay-${d.id}`,getSvgLine:()=>{if(!Z(n))return null;const T=n.worldToScreen(en(o,d.startNodeId,d.startCoordinate)),N=n.worldToScreen(en(o,d.endNodeId,d.endCoordinate));return T===null||N===null?null:{start:Ze(T.x,T.y),end:Ze(N.x,N.y)}},stroke:d.stroke,strokeWidth:d.strokeWidth,dashed:d.overlayDashed,dashPattern:d.overlayDashPattern,hitTargetStrokeWidth:10,onLineClick:y});if(!d.distanceTriangleOverlay||!Z(n)||r)return g;const f=Dt(),A=()=>pc({engine:n,edge:d,scratch:f,formatOptions:t,liveAnchors:o});return[...g,...cr({id:`${a}-runtime-edge-overlay-${d.id}-vertical`,getSvgLine:()=>{const T=A();return!T||!T.verticalLabelText?null:{start:T.anchorScreenPosition,end:T.auxiliaryScreenPosition}},stroke:Pe.verticalLineColor,strokeWidth:d.strokeWidth,dashed:!0,dashPattern:d.overlayDashPattern,hitTargetStrokeWidth:8,onLineClick:y}),...cr({id:`${a}-runtime-edge-overlay-${d.id}-horizontal`,getSvgLine:()=>{const T=A();return!T||!T.horizontalLabelText?null:{start:T.auxiliaryScreenPosition,end:T.targetScreenPosition}},stroke:Pe.horizontalLineColor,strokeWidth:d.strokeWidth,dashed:!0,dashPattern:d.overlayDashPattern,hitTargetStrokeWidth:8,onLineClick:y})]}),tN=({edgeSegments:e,engine:n,formatOptions:t,liveAnchors:o,occludedLinesInScene:r})=>e.flatMap(a=>{const i={id:a.id,start:Y(a.startCoordinate),end:Y(a.endCoordinate),stroke:a.stroke,strokeWidth:a.strokeWidth,occludedDashed:r&&a.overlayDashed===!0,ruler:a.ruler===!0,rulerStartMeters:a.rulerStartMeters,startNodeId:a.startNodeId,endNodeId:a.endNodeId};if(!Z(n)||!a.distanceTriangleOverlay)return[i];const s=Dt(),l=Mr(n,a,o,s);if(!l)return[i];const u=f=>f>Pe.geometryEpsilonMeters?st(f,t.lengthMeters):null,d=u(l.anchorECEF.distanceTo(l.auxiliaryECEF)),c=u(l.auxiliaryECEF.distanceTo(l.targetECEF)),m=dc({directLabelText:st(l.anchorECEF.distanceTo(l.targetECEF),t.lengthMeters),verticalLabelText:d,horizontalLabelText:c}),y={anchorPointECEF:l.anchorECEF,auxiliaryPointECEF:l.auxiliaryECEF,targetPointECEF:l.targetECEF,verticalLabelText:d,horizontalLabelText:c,showVerticalLabel:m.showVerticalLabel,showHorizontalLabel:m.showHorizontalLabel},g=[];if(y.showVerticalLabel&&y.verticalLabelText){const f=Dt();g.push({id:`${a.id}-vertical`,halo:!1,start:y.anchorPointECEF,end:y.auxiliaryPointECEF,stroke:Pe.verticalLineColor,strokeWidth:a.strokeWidth,occludedDashed:r,ruler:a.ruler===!0,recompute:A=>{if(!qs(a,A))return null;const v=Mr(n,a,A,f);return v?[v.anchorECEF,v.auxiliaryECEF]:null}})}if(y.showHorizontalLabel&&y.horizontalLabelText){const f=Dt();g.push({id:`${a.id}-horizontal`,halo:!1,start:y.auxiliaryPointECEF,end:y.targetPointECEF,stroke:Pe.horizontalLineColor,strokeWidth:a.strokeWidth,occludedDashed:r,ruler:a.ruler===!0,recompute:A=>{if(!qs(a,A))return null;const v=Mr(n,a,A,f);return v?[v.auxiliaryECEF,v.targetECEF]:null}})}return[i,...g]}),_s=e=>{var n;return((n=e.distanceTriangleOverlay)==null?void 0:n.annotationId)??e.id},oN=e=>e.flatMap(n=>{var i,s;const t=[],o=Number.isFinite(n.strokeWidth)?n.strokeWidth:ne.sizes.edgeStrokeWidth,r=n.overlayDashPattern??ne.patterns.edgeDashPattern;let a=0;for(let l=0;l<n.coordinates.length-1;l+=1){const u=n.coordinates[l],d=n.coordinates[l+1];if(!u||!d)continue;const c=a;a+=Y(u).distanceTo(Y(d));const m=(i=n.nodeIds)==null?void 0:i[l],y=((s=n.nodeIds)==null?void 0:s[l+1])??(n.nodeIds&&n.coordinates.length===n.nodeIds.length+1&&l===n.nodeIds.length-1?n.nodeIds[0]:void 0);t.push({id:`${n.id}-${l}`,annotationId:n.annotationId,startNodeId:m,endNodeId:y,startCoordinate:u,endCoordinate:d,stroke:n.stroke,strokeWidth:o,overlayDashPattern:r,...n.overlayDashed?{overlayDashed:!0}:{},...n.ruler?{ruler:!0,rulerStartMeters:c}:{},...n.showSegmentLengthLabels?{showSegmentLengthLabels:!0}:{},distanceTriangleOverlay:l===0?n.distanceTriangleOverlay:void 0})}return t}),Ge=Object.freeze({anchorRatio:.5,anchorRatioEpsilon:1e-6,minAnchorSlideStepRatio:.01}),rN=e=>{if(e.style.display==="none")return null;const o=(e.querySelector('[data-annotation-overlay-line-label-text="foreground"]')??e).getBoundingClientRect();return o.width>0&&o.height>0?{left:o.left,top:o.top,right:o.right,bottom:o.bottom}:null},aN=e=>{const n=Number.parseFloat(e.dataset.annotationOverlayLineLabelAnchorRatio??"");return Number.isFinite(n)?Ea(n):Ge.anchorRatio},iN=({element:e,collisionResolutionStrategy:n,stepRatio:t,maxDeltaRatio:o})=>{const r=Math.min(Ge.anchorRatio,Ea(o)),a=Ge.anchorRatio-r,i=Ge.anchorRatio+r,s=We(aN(e),a,i),l=new Set([s,Ge.anchorRatio]);if(n!==Yd.MOVE_ON_LINE)return{lastResolvedAnchorRatio:s,anchorRatios:[...l]};const u=Math.max(t,Ge.minAnchorSlideStepRatio);for(let d=u;d<=r+Ge.anchorRatioEpsilon;d+=u)l.add(Math.max(a,Ge.anchorRatio-d)),l.add(Math.min(i,Ge.anchorRatio+d));return{lastResolvedAnchorRatio:s,anchorRatios:[...l].sort((d,c)=>{const m=Math.abs(d-s),y=Math.abs(c-s);return m!==y?m-y:Math.abs(d-Ge.anchorRatio)-Math.abs(c-Ge.anchorRatio)})}},gc=(e,n)=>Jb({element:e.element,text:e.text,start:e.start,end:e.end,outsideReferencePoint:e.outsideReferencePoint,flipReadingDirection:e.flipReadingDirection,anchorRatio:n}),sN=({candidate:e,anchorRatio:n,occupiedLabelRects:t,lastResolvedAnchorRatio:o})=>{gc(e,n);const r=rN(e.element);return r?{anchorRatio:n,collisionRect:r,collisionCount:t.reduce((a,i)=>vy(r,i,Ty)?a+1:a,0),lastSolutionJumpPenalty:Math.abs(n-o),originalOffsetPenalty:Math.abs(n-Ge.anchorRatio)}:null},lN=(e,n)=>n?e.collisionCount!==n.collisionCount?e.collisionCount<n.collisionCount:e.collisionCount===0?e.originalOffsetPenalty!==n.originalOffsetPenalty?e.originalOffsetPenalty<n.originalOffsetPenalty:e.lastSolutionJumpPenalty<n.lastSolutionJumpPenalty:e.lastSolutionJumpPenalty!==n.lastSolutionJumpPenalty?e.lastSolutionJumpPenalty<n.lastSolutionJumpPenalty:e.originalOffsetPenalty<n.originalOffsetPenalty:!0,fc=({candidate:e,occupiedLabelRects:n,allowEarlyRemoval:t,collisionResolutionStrategy:o,anchorSlideStepRatio:r,maxAnchorSlideDeltaRatio:a})=>{let i=null;const{lastResolvedAnchorRatio:s,anchorRatios:l}=iN({element:e.element,collisionResolutionStrategy:o,stepRatio:r,maxDeltaRatio:a});for(const u of l){const d=sN({candidate:e,anchorRatio:u,occupiedLabelRects:n,lastResolvedAnchorRatio:s});d&&lN(d,i)&&(i=d)}return i&&(i.collisionCount===0||!t)?(gc(e,i.anchorRatio),{visible:!0,anchorRatio:i.anchorRatio,collisionCount:i.collisionCount,collisionRect:i.collisionRect}):(e.element.style.display="none",{visible:!1,anchorRatio:(i==null?void 0:i.anchorRatio)??null,collisionCount:(i==null?void 0:i.collisionCount)??0,collisionRect:null})},Ac=(e,n)=>n.zIndex-e.zIndex,uN=(e,n)=>e.metricValueMeters!==n.metricValueMeters?n.metricValueMeters-e.metricValueMeters:Ac(e,n),dN=e=>{const n=new Map;return e.forEach(t=>{const o=n.get(t.annotationId);o?o.push(t):n.set(t.annotationId,[t])}),n},cN=({candidates:e,occupiedLabelRects:n,...t})=>{const o=[],r=[...n];return[...e].sort(uN).forEach(a=>{const i=fc({...t,candidate:a,occupiedLabelRects:r,allowEarlyRemoval:!0});i.visible&&i.collisionRect&&(r.push(i.collisionRect),o.push(a))}),o},mN=({candidates:e,occupiedLabelRects:n,allowEarlyRemoval:t,...o})=>{[...dN(e).values()].flatMap(a=>cN({...o,candidates:a,occupiedLabelRects:n})).sort(Ac).forEach(a=>{const i=fc({...o,candidate:a,occupiedLabelRects:n,allowEarlyRemoval:t});i.visible&&i.collisionRect&&n.push(i.collisionRect)})},yN=e=>{const n=document.createElement("div");n.style.position="absolute",n.style.display="none",n.style.pointerEvents="none",n.style.userSelect="none",n.style.webkitUserSelect="none",n.style.cursor="default",n.style.zIndex="0";const t=document.createElementNS(ze.svgNamespace,"svg");t.setAttribute("width","100%"),t.setAttribute("height","100%"),t.style.overflow="visible",t.style.pointerEvents="none";const o=document.createElementNS(ze.svgNamespace,"path");o.setAttribute("fill","none"),o.setAttribute("stroke",ye.cornerOverlay.color),o.setAttribute("stroke-width",`${ye.cornerOverlay.strokeWidthPx}`),o.setAttribute("stroke-linecap","round"),o.setAttribute("stroke-linejoin","round");const r=document.createElementNS(ze.svgNamespace,"circle");return r.setAttribute("r",`${ze.distanceTriangle.cornerDotRadiusPx}`),r.setAttribute("fill",ye.cornerOverlay.color),t.append(o,r),n.appendChild(t),e.appendChild(n),{root:n,svg:t,path:o,dot:r}},vc=e=>{e.root.remove()},Ps=e=>{e.forEach(n=>{vc(n)}),e.clear()},Dn=e=>{e.root.style.display="none",e.root.onclick=null},pN=({handle:e,pathData:n,dotScreen:t,minX:o,minY:r,width:a,height:i,clickable:s,onClick:l})=>{e.path.setAttribute("d",n),e.path.style.display="block",e.svg.style.display="block",e.dot.setAttribute("cx",`${t.x-o+ye.cornerOverlay.paddingPx}`),e.dot.setAttribute("cy",`${t.y-r+ye.cornerOverlay.paddingPx}`),e.root.style.left=`${o-ye.cornerOverlay.paddingPx}px`,e.root.style.top=`${r-ye.cornerOverlay.paddingPx}px`,e.root.style.width=`${a}px`,e.root.style.height=`${i}px`,e.root.style.transform="none",e.root.style.display="block",e.root.style.pointerEvents=s?"auto":"none",e.root.style.cursor=s?"pointer":"default",e.root.onclick=s&&l?l:null},gN=({handle:e,center:n,clickable:t,onClick:o})=>{const r=ye.cornerOverlay.straightHitTargetPx,a=r/2;e.path.style.display="none",e.svg.style.display="block",e.dot.setAttribute("cx",`${a}`),e.dot.setAttribute("cy",`${a}`),e.root.style.left=`${n.x-a}px`,e.root.style.top=`${n.y-a}px`,e.root.style.width=`${r}px`,e.root.style.height=`${r}px`,e.root.style.transform="none",e.root.style.display="block",e.root.style.pointerEvents=t?"auto":"none",e.root.style.cursor=t?"pointer":"default",e.root.onclick=t&&o?o:null},fN=({engine:e,cornerHandle:n,screenData:t,lengths:{directLengthMeters:o,verticalLengthMeters:r,horizontalLengthMeters:a},clickable:i,onClick:s})=>{if(r<=qt.referenceLineEpsilonMeters||a<=qt.referenceLineEpsilonMeters){if(o<=qt.referenceLineEpsilonMeters){Dn(n);return}const C=Ze((t.anchorScreenPosition.x+t.targetScreenPosition.x)/2,(t.anchorScreenPosition.y+t.targetScreenPosition.y)/2);gN({handle:n,center:C,clickable:i,onClick:s});return}const l=e.canvas.clientWidth,u=e.canvas.clientHeight;if(l<=0||u<=0){Dn(n);return}let d=Number.NaN;try{const C=e.getScreenPixelsPerMeterAt(t.auxiliaryPointECEF);d=Number.isFinite(C)&&C>0?1/C:Number.NaN}catch{d=Number.NaN}if(!Number.isFinite(d)||d<=0){const C=e.getCameraPositionECEF(mc),k=Math.max(C?C.distanceTo(t.auxiliaryPointECEF):Number.NaN,1),S=ye.cornerOverlay.fallbackFovRad;d=Math.max(k*Math.tan(S/2)*2/Math.max(u,1),1e-6)}const c=hp(t.auxiliaryPointECEF,t.anchorPointECEF,t.targetPointECEF,ye.cornerOverlay.targetRadiusPx*d,ye.cornerOverlay.segments);if(!c||c.length<2){Dn(n);return}const m=c[Math.floor(c.length/2)];if(!m){Dn(n);return}const y=new x().addVectors(t.auxiliaryPointECEF,m).multiplyScalar(.5),g=e.worldToScreen(y);if(g===null){Dn(n);return}const f=c.map(C=>e.worldToScreen(C)).filter(C=>C!==null);if(f.length<2){Dn(n);return}const A=Math.min(...f.map(C=>C.x)),v=Math.max(...f.map(C=>C.x)),T=Math.min(...f.map(C=>C.y)),N=Math.max(...f.map(C=>C.y)),b=Math.max(ye.cornerOverlay.minBoxPx,v-A+ye.cornerOverlay.paddingPx*2),I=Math.max(ye.cornerOverlay.minBoxPx,N-T+ye.cornerOverlay.paddingPx*2),h=f.map((C,k)=>{const S=C.x-A+ye.cornerOverlay.paddingPx,O=C.y-T+ye.cornerOverlay.paddingPx;return`${k===0?"M":"L"} ${S} ${O}`}).join(" ");pN({handle:n,pathData:h,dotScreen:Ze(g.x,g.y),minX:A,minY:T,width:b,height:I,clickable:i,onClick:s})},AN=(e,n)=>{const t=Xb(n);return e.append(t.direct,t.vertical,t.horizontal),{lineLabels:t,scratch:Dt()}},vN=(e,n)=>{const t=lc(ne.colors.componentLabelAccents.direct,n);return e.appendChild(t),{element:t}},Tc=e=>{uc(e.lineLabels),e.lineLabels.direct.remove(),e.lineLabels.vertical.remove(),e.lineLabels.horizontal.remove()},bc=e=>{e.element.style.display="none",e.element.remove()},Ms=e=>{e.forEach(n=>{Tc(n)}),e.clear()},Ds=e=>{e.forEach(n=>{bc(n)}),e.clear()},TN=({engine:e,edge:n,labelHandle:t,formatOptions:o,liveAnchors:r,candidates:a})=>{const i=en(r,n.startNodeId,n.startCoordinate),s=en(r,n.endNodeId,n.endCoordinate),l=e.worldToScreen(i),u=e.worldToScreen(s),d=i.distanceTo(s);if(l===null||u===null||d<=qt.referenceLineEpsilonMeters){t.element.style.display="none";return}const c=Bt(e,i,s);t.element.style.zIndex=`${c}`,a.push({element:t.element,zIndex:c,annotationId:n.annotationId??n.id,metricValueMeters:d,text:st(d,o.lengthMeters),start:Ze(l.x,l.y),end:Ze(u.x,u.y)})},bN=({engine:e,edge:n,labelHandle:t,cornerHandle:o,formatOptions:r,liveAnchors:a,candidates:i,cornerClickable:s,onCornerClick:l})=>{const u=pc({engine:e,edge:n,scratch:t.scratch,previousOutsideSigns:t.previousOutsideSigns,formatOptions:r,liveAnchors:a});if(!u){uc(t.lineLabels),o&&Dn(o),t.previousOutsideSigns=void 0;return}t.previousOutsideSigns=u.nextOutsideSigns;const d=Bt(e,u.anchorPointECEF,u.targetPointECEF),c=Bt(e,u.anchorPointECEF,u.auxiliaryPointECEF),m=Bt(e,u.auxiliaryPointECEF,u.targetPointECEF),y=ga(e,u.auxiliaryPointECEF),g=_s(n),f=u.anchorPointECEF.distanceTo(u.targetPointECEF),A=u.anchorPointECEF.distanceTo(u.auxiliaryPointECEF),v=u.auxiliaryPointECEF.distanceTo(u.targetPointECEF);t.lineLabels.direct.style.zIndex=`${d}`,i.push({element:t.lineLabels.direct,zIndex:d,annotationId:g,metricValueMeters:f,text:u.directLabelText,start:u.anchorScreenPosition,end:u.targetScreenPosition,outsideReferencePoint:u.directOutsideReferencePoint}),u.showVerticalLabel&&u.verticalLabelText?(t.lineLabels.vertical.style.zIndex=`${c}`,i.push({element:t.lineLabels.vertical,zIndex:c,annotationId:g,metricValueMeters:A,text:u.verticalLabelText,start:u.anchorScreenPosition,end:u.auxiliaryScreenPosition,outsideReferencePoint:u.verticalOutsideReferencePoint,flipReadingDirection:!0})):t.lineLabels.vertical.style.display="none",u.showHorizontalLabel&&u.horizontalLabelText?(t.lineLabels.horizontal.style.zIndex=`${m}`,i.push({element:t.lineLabels.horizontal,zIndex:m,annotationId:g,metricValueMeters:v,text:u.horizontalLabelText,start:u.auxiliaryScreenPosition,end:u.targetScreenPosition,outsideReferencePoint:u.horizontalOutsideReferencePoint})):t.lineLabels.horizontal.style.display="none",o&&(o.root.style.zIndex=`${y}`,fN({engine:e,cornerHandle:o,screenData:u,lengths:{directLengthMeters:f,verticalLengthMeters:A,horizontalLengthMeters:v},clickable:s,onClick:l?()=>l(_s(n)):void 0}))},NN=(e,{edgeSegments:n,formatOptions:t,lineLabelOptions:o,surfaceKey:r,activeEditedNodeId:a,blockEdgeInteractions:i,liveAnchors:s,onDistanceTriangleCornerClick:l})=>{const u=p.useRef(new Map),d=p.useRef(new Map),c=p.useRef(new Map);p.useEffect(()=>{if(Ms(u.current),Ds(d.current),Ps(c.current),!Z(e))return;const m=n.filter(b=>b.distanceTriangleOverlay!==void 0),y=n.filter(b=>b.showSegmentLengthLabels===!0);if(m.length===0&&y.length===0)return;const{[be.LABEL]:g,[be.VISUALIZER]:f}=sc(e,{[be.LABEL]:pa(r),[be.VISUALIZER]:`${pa(r)}-visualizer`});if(!g||!f)return;const A=()=>{const b=new Set([...m.map(I=>I.id),...y.map(I=>I.id)]);u.current.forEach((I,h)=>{if(b.has(h))return;Tc(I),u.current.delete(h);const C=c.current.get(h);C&&(vc(C),c.current.delete(h))}),m.forEach(I=>{u.current.has(I.id)||(u.current.set(I.id,AN(g,o)),c.current.set(I.id,yN(f)))}),d.current.forEach((I,h)=>{b.has(h)||(bc(I),d.current.delete(h))}),y.forEach(I=>{d.current.has(I.id)||d.current.set(I.id,vN(g,o))})};let v=null;const T=({force:b=!1}={})=>{const I=ec(e);if(!b&&s.size===0&&nc(v,I))return;v=I;const h=eN(e),C=[],k=!i&&a===null&&!!l;m.forEach(S=>{const O=u.current.get(S.id);O&&bN({engine:e,edge:S,labelHandle:O,cornerHandle:c.current.get(S.id),formatOptions:t,liveAnchors:s,candidates:C,cornerClickable:k,onCornerClick:l})}),y.forEach(S=>{const O=d.current.get(S.id);O&&TN({engine:e,edge:S,labelHandle:O,formatOptions:t,liveAnchors:s,candidates:C})}),mN({candidates:C,occupiedLabelRects:h,allowEarlyRemoval:o.collision.allowEarlyRemoval,collisionResolutionStrategy:o.collision.resolutionStrategy,anchorSlideStepRatio:o.collision.anchorSlideStepRatio,maxAnchorSlideDeltaRatio:o.collision.maxAnchorSlideDeltaRatio})};A(),T({force:!0});const N=e.subscribePostRender(()=>{T()});return e.requestRender(),()=>{N(),Ms(u.current),Ds(d.current),Ps(c.current),Zt(g),Zt(f),Z(e)&&e.requestRender()}},[a,i,n,d,e,t,s,l,o,r])},IN=e=>{const n=document.createElement("div");n.style.position="absolute",n.style.display="none",n.style.pointerEvents="none",n.style.userSelect="none",n.style.webkitUserSelect="none",n.style.cursor="default";const t=document.createElement("div");return t.style.position="absolute",t.style.left="50%",t.style.top="50%",t.style.width=`${ze.midpointMarker.tickLengthPx}px`,t.style.height=`${ze.midpointMarker.tickWidthPx}px`,t.style.borderRadius="999px",t.style.background=ze.midpointMarker.tickColor,t.style.transform="translate(-50%, -50%)",t.style.pointerEvents="none",t.style.transition=bl(),n.appendChild(t),e.appendChild(n),{root:n,tick:t}},kN=e=>{e.root.remove()},Bs=e=>{e.forEach(n=>{kN(n)}),e.clear()},hN=e=>{e.root.style.display="none",e.root.onclick=null,e.root.onmouseenter=null,e.root.onmouseleave=null,e.tick.style.transform="translate(-50%, -50%)",e.tick.style.boxShadow="none",e.tick.style.filter="none"},Dr=(e,n)=>{e.tick.style.transform=n?`translate(-50%, -50%) scale(${Sa.hover.scale})`:"translate(-50%, -50%)",e.tick.style.boxShadow=n?Nl():"none",e.tick.style.filter=n?Il():"none"},CN=({handle:e,center:n,angleRad:t,zIndex:o,clickable:r,onClick:a})=>{e.root.style.left=`${n.x}px`,e.root.style.top=`${n.y}px`,e.root.style.width=`${ze.midpointMarker.hitTargetPx}px`,e.root.style.height=`${ze.midpointMarker.hitTargetPx}px`,e.root.style.transform=`translate(-50%, -50%) rotate(${t}rad)`,e.root.style.transformOrigin="50% 50%",e.root.style.zIndex=`${Math.max(o,ze.midpointMarker.minOverlayZIndex)}`,e.root.style.display="block",e.root.style.pointerEvents=r?"auto":"none",e.root.style.cursor=r?"pointer":"default",e.root.onclick=r&&a?a:null,e.root.onmouseenter=r?()=>{Dr(e,!0)}:null,e.root.onmouseleave=r?()=>{Dr(e,!1)}:null,Dr(e,!1)},SN=(e,{insertNodeTargetSegments:n,surfaceKey:t,activeEditedNodeId:o,blockEdgeInteractions:r,liveAnchors:a,onInsertNodeTargetClick:i})=>{const s=p.useRef(new Map);p.useEffect(()=>{if(Bs(s.current),!Z(e)||r||o!==null||n.length===0)return;const l=sc(e,{[be.VISUALIZER]:`${pa(t)}-midpoint-targets`})[be.VISUALIZER];if(!l)return;n.forEach(c=>{s.current.set(c.id,IN(l))});const u=()=>{n.forEach(c=>{const m=s.current.get(c.id);if(!m)return;const y=en(a,c.startNodeId,c.startCoordinate),g=en(a,c.endNodeId,c.endCoordinate),f=e.worldToScreen(y),A=e.worldToScreen(g),v=e.worldToScreen(new x().addVectors(y,g).multiplyScalar(.5));if(f===null||A===null||v===null||!c.annotationId||!c.startNodeId||!c.endNodeId){hN(m);return}CN({handle:m,center:Ze(v.x,v.y),angleRad:Math.atan2(A.y-f.y,A.x-f.x)+Qc,zIndex:Bt(e,y,g),clickable:!!i,onClick:i?()=>i(c.annotationId,c.startNodeId,c.endNodeId):void 0})})};u();const d=e.subscribePostRender(()=>{u()});return e.requestRender(),()=>{d(),Bs(s.current),Zt(l),Z(e)&&e.requestRender()}},[o,r,e,n,a,i,t])},Nc=(e,n,t)=>[e.startNodeId,e.endNodeId].filter(r=>r!==void 0).some(r=>r===n||t(r)),Ic=e=>[e.id,e.start.x,e.start.y,e.start.z,e.end.x,e.end.y,e.end.z,e.stroke,e.strokeWidth,e.occludedDashed,e.ruler,e.rulerStartMeters??0,e.halo!==!1].join(":"),EN=e=>({snappable:e.createLineCollection(),excludedFromDragSamples:e.createLineCollection({excludeFromDragSamples:!0})}),ON=e=>{e.snappable.destroy(),e.excludedFromDragSamples.destroy()},RN=(e,n)=>n?e.excludedFromDragSamples:e.snappable,kc=(e,n,t,o)=>{const r=RN(n,o).addLine({id:t.id,positions:[t.start,t.end],color:t.stroke,width:t.strokeWidth,occludedDashed:t.occludedDashed,ruler:t.ruler,rulerStartMeters:t.rulerStartMeters,halo:t.halo!==!1,visible:!0}),a=()=>{if(Z(e))try{r.destroy()}catch(i){console.warn("[annotations/runtime] Ignoring committed edge destroy error.",i)}};return{signature:Ic(t),line:t,sceneLine:r,excludedFromDragSamples:o,startNodeId:t.startNodeId,endNodeId:t.endNodeId,baseStart:t.start,baseEnd:t.end,recompute:t.recompute,overridden:!1,destroy:a}},Br=e=>{e.forEach(n=>{n.destroy()}),e.clear()},LN=(e,n)=>{const t=n.size>0;e.forEach(o=>{let r=null;if(o.recompute)r=t?o.recompute(n):null;else{const a=o.startNodeId?n.get(o.startNodeId):void 0,i=o.endNodeId?n.get(o.endNodeId):void 0;(a!==void 0||i!==void 0)&&(r=[a??o.baseStart,i??o.baseEnd])}r===null&&!o.overridden||(o.sceneLine.setPositions(r?[r[0],r[1]]:[o.baseStart,o.baseEnd]),o.overridden=r!==null&&t)})},wN=(e,n,t,o,r)=>{t.forEach((a,i)=>{const s=Nc(a,o,u=>r.get(u)!==void 0);if(s===a.excludedFromDragSamples)return;a.destroy();const l=kc(e,n,a.line,s);l.overridden=!1,t.set(i,l)})},xN=(e,n,t,o)=>{const r=p.useRef(null),a=p.useRef(new Map);p.useEffect(()=>{if(!Z(e))return;const s=EN(e);return r.current=s,()=>{Br(a.current),r.current===s&&(r.current=null),Z(e)&&ON(s)}},[e]);const i=p.useRef(t);i.current=t,p.useEffect(()=>{const s=r.current;if(!Z(e)||!s){Br(a.current);return}return(u=>{const d=new Set(u.map(c=>c.id));a.current.forEach((c,m)=>{d.has(m)||(c.destroy(),a.current.delete(m))}),u.forEach(c=>{const m=Ic(c),y=a.current.get(c.id);(y==null?void 0:y.signature)!==m&&(y==null||y.destroy(),a.current.set(c.id,kc(e,s,c,Nc(c,i.current,g=>o.get(g)!==void 0))))}),e.requestRender()})(n),()=>{Br(a.current),Z(e)&&e.requestRender()}},[e,o,n]),p.useEffect(()=>{if(!Z(e))return;const s=()=>{const u=r.current;u&&wN(e,u,a.current,t,o)};s();const l=e.subscribePreRender(()=>{try{s(),LN(a.current,o)}catch{}});return()=>{l()}},[t,e,o])},qN=(e,{edges:n,formatOptions:t,lineLabelOptions:o,surfaceKey:r="committed",activeEditedNodeId:a,blockEdgeInteractions:i,onAnnotationSelect:s,onEdgeClick:l,insertNodeTargetAnnotationIds:u=[],onInsertNodeTargetClick:d,onDistanceTriangleCornerClick:c,liveAnchors:m})=>{const y=p.useMemo(()=>ar(o),[o]),g=p.useMemo(()=>new Set(u),[u]),f=p.useMemo(()=>oN(n),[n]),A=p.useMemo(()=>f.filter(b=>b.annotationId!==void 0&&g.has(b.annotationId)&&b.startNodeId!==void 0&&b.endNodeId!==void 0),[f,g]),v=(e==null?void 0:e.capabilities.occludedLinesInScene)===!0,T=p.useMemo(()=>tN({edgeSegments:f,engine:e,formatOptions:t,liveAnchors:m,occludedLinesInScene:v}),[f,e,t,m,v]),N=p.useMemo(()=>nN({edgeSegments:f,engine:e,formatOptions:t,liveAnchors:m,occludedLinesInScene:v,surfaceKey:r,activeEditedNodeId:a,blockEdgeInteractions:i,onEdgeClick:l,onAnnotationSelect:s}),[a,i,f,e,t,m,v,l,s,r]);Oy([...N],N.length>0),xN(e,T,a,m),SN(e,{insertNodeTargetSegments:A,surfaceKey:r,activeEditedNodeId:a,blockEdgeInteractions:i,liveAnchors:m,onInsertNodeTargetClick:d}),NN(e,{edgeSegments:f,formatOptions:t,lineLabelOptions:y,surfaceKey:r,activeEditedNodeId:a,blockEdgeInteractions:i,liveAnchors:m,onDistanceTriangleCornerClick:c})},_N=e=>e.flatMap(n=>{const t=n.placement??Jt.COPLANAR;return t!==Jt.COPLANAR||!n.overlayFill||n.coordinates.length<3?[]:[{...n,overlayFill:n.overlayFill,placement:t}]}),PN=(e,n)=>e.length===n.length&&e.every((t,o)=>{const r=n[o];return r!==void 0&&t.id===r.id&&t.annotationId===r.annotationId&&t.overlayFill===r.overlayFill&&t.selected===r.selected&&Xa(t.coordinates,r.coordinates)}),MN=()=>{const e=document.createElementNS("http://www.w3.org/2000/svg","polygon");return e.style.pointerEvents="none",e},DN=(e,n)=>{if(!Z(e))return{setPolygonFills:()=>{},clear:()=>{},destroy:()=>{}};const t=ti(e,`annotation-overlay-runtime-polygon-fill-layer-${n}`,be.VISUALIZER);if(!t)return{setPolygonFills:()=>{},clear:()=>{},destroy:()=>{}};const o=document.createElementNS("http://www.w3.org/2000/svg","svg");o.setAttribute("width","100%"),o.setAttribute("height","100%"),o.style.position="absolute",o.style.inset="0",o.style.overflow="visible",o.style.pointerEvents="none",t.appendChild(o);let r=[],a=new Map;const i=()=>{a.forEach(u=>u.remove()),a=new Map},s=()=>{e.isDestroyed()||r.forEach(u=>{let d=a.get(u.id);d||(d=MN(),a.set(u.id,d),o.appendChild(d)),d.setAttribute("fill",u.overlayFill);const c=u.coordinates.map(m=>e.worldToScreen(Y(m))).filter(m=>m!==null);if(c.length!==u.coordinates.length){d.style.display="none";return}d.setAttribute("points",c.map(m=>`${m.x},${m.y}`).join(" ")),d.style.display="block"})},l=e.subscribePostRender(()=>{s()});return{setPolygonFills:(u,d=!0)=>{const c=_N(u);if(PN(r,c))return;r=c;const m=new Set(r.map(y=>y.id));a.forEach((y,g)=>{m.has(g)||(y.remove(),a.delete(g))}),s(),d&&e.requestRender()},clear:(u=!0)=>{r.length!==0&&(r=[],i(),u&&e.requestRender())},destroy:()=>{r=[],l(),i(),Zt(t),e.isDestroyed()||e.requestRender()}}},BN=(e,n,t)=>{const o=p.useRef(null),r=p.useRef(n);r.current=n,p.useEffect(()=>{const a=DN(e,t);return o.current=a,a.setPolygonFills(r.current),()=>{a.destroy(),o.current===a&&(o.current=null)}},[e,t]),p.useEffect(()=>{var a;(a=o.current)==null||a.setPolygonFills(n)},[n])},FN={[Jt.GROUND]:ns.GROUND,[Jt.COPLANAR]:ns.COPLANAR},GN=e=>e.map(n=>({...n,placement:n.placement??Jt.COPLANAR})),jN=(e,n)=>e.length===n.length&&e.every((t,o)=>{const r=n[o];return r!==void 0&&t.id===r.id&&t.annotationId===r.annotationId&&t.fill===r.fill&&t.placement===r.placement&&t.selected===r.selected&&Xa(t.coordinates,r.coordinates)}),UN=e=>e.flatMap(n=>n.coordinates.length<3?[]:[{id:n.id,positionsECEF:n.coordinates.map(t=>Y(t)),fill:n.fill,placement:FN[n.placement],...n.selected!==void 0?{selected:n.selected}:{}}]),HN=(e,n={})=>{if(!Z(e))return{setPolygonFills:()=>{},clear:()=>{},destroy:()=>{}};let t=[];const o=n.allowPicking??!0,r=e.createPolygonFills({allowPicking:o}),a=({requestRender:s})=>{r.clear(),s&&e.requestRender()},i=(s,l=!0)=>{r.setPolygonFills(UN(s)),l&&e.requestRender()};return{setPolygonFills:(s,l=!0)=>{const u=GN(s);jN(t,u)||(t=u,!e.isDestroyed()&&i(u,l))},clear:(s=!0)=>{t.length!==0&&(t=[],!e.isDestroyed()&&a({requestRender:s}))},destroy:()=>{t=[],!e.isDestroyed()&&(r.destroy(),e.requestRender())}}},zN=(e,n)=>{const t=p.useRef(null),o=p.useRef(n);o.current=n,p.useEffect(()=>{const r=HN(e);return t.current=r,r.setPolygonFills(o.current),()=>{r.destroy(),t.current===r&&(t.current=null)}},[e]),p.useEffect(()=>{var r;(r=t.current)==null||r.setPolygonFills(n)},[n])},hc=Md(ae.ACCENT_MEASUREMENTS).brighter(.1);hc.opacity=.5;const VN=Object.freeze({id:"accent-measurements",label:"Measurements · Accent",colorPrimaryReduced:hc.toString(),colorPrimary:ae.ACCENT_MEASUREMENTS,lineColor:ne.colors.surface,textColor:Jn.label.textColor}),we=Object.freeze({scheme:VN,fontFamily:mt.fontFamily,contentFontWeight:mt.lineLabelFontWeight,badgeFontWeight:mt.badgeFontWeight,selection:Jn.selection.highlightPalette}),Ae=Object.freeze({fontSize:mt.rootFontSizeRem,fontFamily:we.fontFamily,fontWeight:we.contentFontWeight,lineColor:we.scheme.lineColor,textBackgroundColor:we.scheme.colorPrimaryReduced,textColor:we.scheme.textColor,markerBackgroundColor:we.scheme.colorPrimary,markerTextColor:we.scheme.textColor,selectedBackgroundColor:we.selection.backgroundColor,selectedTextColor:we.selection.textColor,selectedGlowColor:we.selection.glowColor,selectedGlowRadiusPx:we.selection.glowRadiusPx,preserveFillOnSelection:we.selection.preserveFillOnSelection,hoverBackgroundColor:we.selection.hoverBackgroundColor,markerPixelSize:ne.sizes.pointPixelSize,markerOutlineWidth:ne.sizes.pointOutlineWidth}),$N=e=>({...e,fontSize:e.fontSize??Ae.fontSize,fontFamily:e.fontFamily??Ae.fontFamily,fontWeight:e.fontWeight??Ae.fontWeight,lineColor:e.lineColor??Ae.lineColor,textBackgroundColor:e.textBackgroundColor??Ae.textBackgroundColor,textColor:e.textColor??Ae.textColor,markerBackgroundColor:e.markerBackgroundColor??Ae.markerBackgroundColor,markerTextColor:e.markerTextColor??Ae.markerTextColor,selectedBackgroundColor:e.selectedBackgroundColor??Ae.selectedBackgroundColor,selectedTextColor:e.selectedTextColor??Ae.selectedTextColor,selectedGlowColor:e.selectedGlowColor??Ae.selectedGlowColor,selectedGlowRadiusPx:e.selectedGlowRadiusPx??Ae.selectedGlowRadiusPx,preserveFillOnSelection:e.preserveFillOnSelection??Ae.preserveFillOnSelection,hoverBackgroundColor:e.hoverBackgroundColor??Ae.hoverBackgroundColor,markerPixelSize:e.markerPixelSize??Ae.markerPixelSize,markerOutlineWidth:e.markerOutlineWidth??Ae.markerOutlineWidth}),ho=Object.freeze({nodeLabelLongPressDurationMs:320}),Fs=(e,n)=>n!==void 0&&e.has(n),fa=({nodeId:e,annotationId:n,onNodeLongPress:t,canStartNodeEditing:o})=>t&&e&&((o==null?void 0:o(e,n))??!0)?()=>t(e,n):void 0,Cc=({nodeId:e,annotationId:n,canStartNodeEditing:t})=>!e||((t==null?void 0:t(e,n))??!0),Sc=({nodeId:e,annotationId:n,nodeAnnotationIds:t,referenceNodeInteractionEnabled:o,previewSnapTargetsEnabled:r,onReferenceNodeClick:a,onPreviewSnapTargetNodeClick:i,onNodeAnnotationsSelect:s,onAnnotationSelect:l})=>{if(o&&e)return()=>{a==null||a(e)};if(r&&e)return()=>{i==null||i(e)};if(t.length>0&&s)return()=>{s(t)};if(n&&l)return()=>{l(n)}},WN=e=>e.map($N).filter(n=>!(n.hideLabelAndStem===!0&&n.nodeId!==void 0)),Ec=(e,n)=>{const t=new Map;return e.forEach(o=>{if(!o.nodeId||!o.annotationId)return;const r=n.get(o.nodeId)??o.nodeId,a=t.get(r)??[];a.includes(o.annotationId)||(a.push(o.annotationId),t.set(r,a))}),t},Oc=e=>new Set(e.flatMap(n=>n.pointMarkerId&&n.hideLabelAndStem!==!0&&n.hideMarker!==!0?[n.pointMarkerId]:[])),YN=({pointLabels:e,points:n,selectedAnnotationIdSet:t,previewSnapTargetsEnabled:o,referenceNodeClickEnabled:r,referenceNodeHoverEnabled:a,nodeLinkIdByNodeId:i,previewNodeLinkId:s,isInPreviewNodeLink:l,onAnnotationSelect:u,onNodeAnnotationsSelect:d,onNodeLongPress:c,canStartNodeEditing:m,onPreviewSnapTargetNodeClick:y,onReferenceNodeClick:g,onReferenceNodeHover:f,enableHostInteractionTargets:A})=>{const v=WN(e),T=A&&(a||o),N=A?v.map(k=>{const S=!!(r&&g&&k.nodeId&&!l(k.nodeId)),O=o&&k.nodeId!==void 0,R=Cc({nodeId:k.nodeId,annotationId:k.annotationId,canStartNodeEditing:m});return{...k,onClick:!O&&(k.onClick||S)?()=>{if(k.onClick){k.onClick();return}S&&k.nodeId&&(g==null||g(k.nodeId))}:void 0,onHoverChange:k.onHoverChange,onLongPress:S||O||!R?void 0:k.onLongPress??fa({nodeId:k.nodeId,annotationId:k.annotationId,onNodeLongPress:c,canStartNodeEditing:m}),longPressDurationMs:k.longPressDurationMs??ho.nodeLabelLongPressDurationMs}}):v.map(k=>({...k,onClick:void 0,onDoubleClick:void 0,onHoverChange:void 0,onLongPress:void 0,longPressDurationMs:k.longPressDurationMs??ho.nodeLabelLongPressDurationMs}));if(!!!(A&&(T||o||r||u||d||c)))return N;const I=Oc(N),h=new Map,C=Ec(n,i);return n.forEach(k=>{const{nodeId:S,annotationId:O}=k;if(!S||!I.has(k.id))return;const R=i.get(S)??S;if(s!==null&&R===s)return;const L=!!(r&&g&&!l(S)),_=L||o?void 0:fa({nodeId:S,annotationId:O,onNodeLongPress:c,canStartNodeEditing:m}),w={id:`${k.id}-node-interaction`,annotationId:O,nodeId:S,pointMarkerId:k.id,coordinate:k.coordinate,markerPixelSize:k.pixelSize,content:"",hideLabelAndStem:!0,hideMarker:!0,markerOnlyPointerEvents:!0,onHoverChange:T?B=>{f==null||f(S,B)}:void 0,onClick:Sc({nodeId:S,annotationId:O,nodeAnnotationIds:C.get(R)??[],referenceNodeInteractionEnabled:L,previewSnapTargetsEnabled:o,onReferenceNodeClick:g,onPreviewSnapTargetNodeClick:y,onNodeAnnotationsSelect:d,onAnnotationSelect:u}),onLongPress:_,longPressDurationMs:ho.nodeLabelLongPressDurationMs},q=_?k.id:R,D=h.get(q);(!D||!Fs(t,D.annotationId)&&Fs(t,k.annotationId))&&h.set(q,w)}),[...N,...h.values()]},QN=({points:e,enableHostInteractionTargets:n,previewSnapTargetsEnabled:t,referenceNodeClickEnabled:o,referenceNodeHoverEnabled:r,nodeLinkIdByNodeId:a,isInPreviewNodeLink:i,onAnnotationSelect:s,onNodeAnnotationsSelect:l,onNodeLongPress:u,canStartNodeEditing:d,onPreviewSnapTargetNodeClick:c,onReferenceNodeClick:m,onReferenceNodeHover:y})=>{if(!n)return e.map(A=>({...A,onClick:void 0,onHoverChange:void 0,onLongPress:void 0}));const g=r||t,f=Ec(e,a);return e.map(A=>{const{nodeId:v,annotationId:T}=A,N=v?a.get(v)??v:null,b=!!(o&&m&&v&&!i(v)),I=g&&v&&!i(v)?C=>{y==null||y(v,C)}:A.onHoverChange,h=t||b||i(v)||!Cc({nodeId:v,annotationId:T,canStartNodeEditing:d});return{...A,onClick:Sc({nodeId:v,annotationId:T,nodeAnnotationIds:N?f.get(N)??[]:[],referenceNodeInteractionEnabled:b,previewSnapTargetsEnabled:t,onReferenceNodeClick:m,onPreviewSnapTargetNodeClick:c,onNodeAnnotationsSelect:l,onAnnotationSelect:s})??A.onClick,onHoverChange:I,onLongPress:h?void 0:A.onLongPress??fa({nodeId:v,annotationId:T,onNodeLongPress:u,canStartNodeEditing:d}),longPressDurationMs:A.longPressDurationMs??ho.nodeLabelLongPressDurationMs}})},KN=e=>{const n=YN(e),t=Oc(n);return{pointLabels:n,visibleStandalonePoints:QN(e).filter(o=>!t.has(o.id))}},XN=(e,n)=>{if(e.anchorKind===Cl.AREA_CENTROID)return e;const t=e.coordinateCandidates;if(t&&t.length>0){const o=t.filter(a=>!n(a.nodeId));if(o.length===t.length)return e;if(o.length===0)return{...e,hideLabelAndStem:!0};const[r]=o;return{...e,coordinateCandidates:o,nodeId:r.nodeId??e.nodeId,coordinate:r.coordinate}}return n(e.nodeId)?{...e,hideLabelAndStem:!0}:e},Gs=(e,{surfaceKey:n="committed",enableHostInteractionTargets:t,points:o,linkedNodeGroups:r,edges:a,polygonFills:i,pointLabels:s,selectedAnnotationIds:l,formatOptions:u,lineLabelOptions:d,activeEditedNodeId:c,isMoveGizmoDragging:m=!1,liveAnchors:y,previewSnapTargetHoverEnabled:g=!1,onPreviewSnapTargetNodeClick:f,onAnnotationSelect:A,onNodeAnnotationsSelect:v,onNodeLongPress:T,canStartNodeEditing:N,onReferenceNodeClick:b,onReferenceNodeHover:I,onReferenceEdgeClick:h,insertNodeTargetAnnotationIds:C=[],onInsertNodeTargetClick:k,onDistanceTriangleCornerClick:S})=>{const O=p.useMemo(()=>ar(d),[d]),R=!!(g&&f);qN(e,{edges:a,formatOptions:u,lineLabelOptions:O,surfaceKey:n,activeEditedNodeId:t?c:null,blockEdgeInteractions:!t||R||c!==null,onAnnotationSelect:A,onEdgeClick:h,insertNodeTargetAnnotationIds:C,onInsertNodeTargetClick:k,onDistanceTriangleCornerClick:S,liveAnchors:y}),zN(e,i),BN(e,i,n);const _=p.useMemo(()=>new Set(l),[l]),w=p.useMemo(()=>sd(r),[r]),q=p.useMemo(()=>c?w.get(c)??c:null,[c,w]),D=p.useCallback($=>q!==null&&typeof $=="string"&&(w.get($)??$)===q,[w,q]),B=p.useMemo(()=>c===null?s:s.map($=>XN($,D)),[c,D,s]),H=c!==null&&!m,z=!!(H&&b),X=!!(H&&I),V=p.useMemo(()=>KN({points:o,pointLabels:B,selectedAnnotationIdSet:_,previewSnapTargetsEnabled:R,referenceNodeClickEnabled:z,referenceNodeHoverEnabled:X,nodeLinkIdByNodeId:w,previewNodeLinkId:q,isInPreviewNodeLink:D,onAnnotationSelect:A,onNodeAnnotationsSelect:v,onNodeLongPress:T,canStartNodeEditing:N,onPreviewSnapTargetNodeClick:f,onReferenceNodeClick:b,onReferenceNodeHover:I,enableHostInteractionTargets:t}),[t,D,w,A,v,T,N,f,b,I,B,o,q,R,z,X,_]);Ub(e,V.visibleStandalonePoints,y,`${n}-runtime-point-marker`),Bb(e,V.pointLabels,y,D,`${n}-runtime-point-label`,O)},JN=(e,{baseVisualModels:n,overlayVisualModels:t,linkedNodeGroups:o,effectiveLinkedNodeGroups:r,selectedAnnotationIds:a,formatOptions:i,lineLabelOptions:s,activeEditedNodeId:l,isMoveGizmoDragging:u,liveAnchors:d,previewSnapTargetHoverEnabled:c,onPreviewSnapTargetNodeClick:m,onAnnotationSelect:y,onNodeAnnotationsSelect:g,onNodeLongPress:f,canStartNodeEditing:A,onReferenceNodeClick:v,onReferenceNodeHover:T,onPreviewNodeHover:N,onReferenceEdgeClick:b,insertNodeTargetAnnotationIds:I,onInsertNodeTargetClick:h,onDistanceTriangleCornerClick:C})=>{Gs(e,{surfaceKey:"committed",enableHostInteractionTargets:!0,points:n.points??[],linkedNodeGroups:o,edges:n.edges??[],polygonFills:n.polygonFills??[],pointLabels:n.pointLabels??[],selectedAnnotationIds:a,formatOptions:i,lineLabelOptions:s,activeEditedNodeId:l,isMoveGizmoDragging:u,liveAnchors:d,previewSnapTargetHoverEnabled:c,onPreviewSnapTargetNodeClick:m,onAnnotationSelect:y,onNodeAnnotationsSelect:g,onNodeLongPress:f,canStartNodeEditing:A,onReferenceNodeClick:v,onReferenceNodeHover:l!==null?T:N,onReferenceEdgeClick:b,insertNodeTargetAnnotationIds:I,onInsertNodeTargetClick:h,onDistanceTriangleCornerClick:C});const k=l!==null;Gs(e,{surfaceKey:"preview",enableHostInteractionTargets:k,points:(t==null?void 0:t.points)??[],linkedNodeGroups:r,edges:(t==null?void 0:t.edges)??[],polygonFills:(t==null?void 0:t.polygonFills)??[],pointLabels:(t==null?void 0:t.pointLabels)??[],selectedAnnotationIds:a,formatOptions:i,lineLabelOptions:s,activeEditedNodeId:l,isMoveGizmoDragging:u,liveAnchors:d,onNodeLongPress:k?f:void 0,canStartNodeEditing:k?A:void 0,onReferenceNodeClick:k?v:void 0,onReferenceNodeHover:k?T:void 0})},Ot={},Nt=e=>Object.keys(e).length>0,js=(e,n)=>{const t=Object.keys(e),o=Object.keys(n);return t.length!==o.length?!1:t.every(r=>{const a=e[r],i=n[r];return Ka(a,i)})},ZN=(e,n)=>Nt(n)?e.map(t=>{const o=n[t.id];return o?{...t,coordinate:o}:t}):e,eI=({annotationEntries:e,coordinateOverrides:n})=>{const t=new Set(Object.keys(n));return new Set(e.flatMap(o=>o.nodeIds.some(r=>t.has(r))?[o.id]:[]))},gn=({models:e,isAffected:n,keepAffected:t})=>{if(!e)return;const o=e.filter(r=>n(r)===t);return o.length>0?o:void 0},nI=({point:e,affectedAnnotationIdSet:n,movedNodeIdSet:t})=>typeof e.annotationId=="string"&&n.has(e.annotationId)||typeof e.nodeId=="string"&&t.has(e.nodeId),tI=({edge:e,affectedAnnotationIdSet:n,movedNodeIdSet:t})=>{var o;return typeof e.annotationId=="string"&&n.has(e.annotationId)||!!((o=e.nodeIds)!=null&&o.some(r=>t.has(r)))},oI=({polygonFill:e,affectedAnnotationIdSet:n,movedNodeIdSet:t})=>{var o;return typeof e.annotationId=="string"&&n.has(e.annotationId)||!!((o=e.nodeIds)!=null&&o.some(r=>t.has(r)))},rI=({pointLabel:e,affectedAnnotationIdSet:n,movedNodeIdSet:t})=>{var o;return typeof e.annotationId=="string"&&n.has(e.annotationId)||typeof e.nodeId=="string"&&t.has(e.nodeId)||!!((o=e.coordinateCandidates)!=null&&o.some(r=>typeof r.nodeId=="string"&&t.has(r.nodeId)))},aI=({baseVisualModels:e,overlayVisualModels:n,annotationEntries:t,coordinateOverrides:o})=>{var y,g,f,A;if(!Nt(o))return{baseVisualModels:e,overlayVisualModels:null};const r=new Set(Object.keys(o)),a=eI({annotationEntries:t,coordinateOverrides:o}),i=v=>nI({point:v,affectedAnnotationIdSet:a,movedNodeIdSet:r}),s=v=>tI({edge:v,affectedAnnotationIdSet:a,movedNodeIdSet:r}),l=v=>oI({polygonFill:v,affectedAnnotationIdSet:a,movedNodeIdSet:r}),u=v=>rI({pointLabel:v,affectedAnnotationIdSet:a,movedNodeIdSet:r}),d={points:gn({models:e.points,isAffected:i,keepAffected:!1}),edges:gn({models:e.edges,isAffected:s,keepAffected:!1}),polygonFills:gn({models:e.polygonFills,isAffected:l,keepAffected:!1}),pointLabels:gn({models:e.pointLabels,isAffected:u,keepAffected:!1})},c={points:gn({models:n.points,isAffected:i,keepAffected:!0}),edges:gn({models:n.edges,isAffected:s,keepAffected:!0}),polygonFills:gn({models:n.polygonFills,isAffected:l,keepAffected:!0}),pointLabels:gn({models:n.pointLabels,isAffected:u,keepAffected:!0})},m=!!((y=c.points)!=null&&y.length)||!!((g=c.edges)!=null&&g.length)||!!((f=c.polygonFills)!=null&&f.length)||!!((A=c.pointLabels)!=null&&A.length);return{baseVisualModels:d,overlayVisualModels:m?c:null}},iI=({plugins:e,...n})=>{const t=e.map(o=>{var r;return((r=o.visualModels)==null?void 0:r.build(n))??null}).filter(o=>!!o);return{points:t.flatMap(o=>o.points??[]),edges:t.flatMap(o=>o.edges??[]),polygonFills:t.flatMap(o=>o.polygonFills??[]),pointLabels:t.flatMap(o=>o.pointLabels??[])}},sI=({plugins:e,nodes:n,edges:t,linkedNodeGroups:o,annotationEntries:r,draftStatesByToolType:a,elevationReferenceAnnotationId:i,selectedAnnotationId:s,selectedAnnotationIds:l,isSelectionAdditiveModifierPressed:u,onAnnotationSelect:d,setElevationReferenceAnnotationId:c,toggleAnnotationElevationDisplayMode:m,onNodeLongPress:y,formatOptions:g,draftNodeCoordinateOverrides:f,effectiveNodes:A,effectiveLinkedNodeGroups:v})=>{const T=p.useCallback((I,h)=>iI({plugins:e,nodes:I,edges:t,linkedNodeGroups:h,annotationEntries:r,draftStatesByToolType:a,elevationReferenceAnnotationId:i,selectedAnnotationId:s,selectedAnnotationIds:l,isSelectionAdditiveModifierPressed:u,setSelectedAnnotationId:d,setElevationReferenceAnnotationId:c,toggleAnnotationElevationDisplayMode:m,onNodeLongPress:y,formatOptions:g}),[r,a,t,i,g,u,d,y,e,s,l,c,m]),N=p.useMemo(()=>T(n,o),[T,o,n]),b=p.useMemo(()=>Nt(f)?T(A,v):null,[T,f,v,A]);return p.useMemo(()=>{if(!b)return{baseVisualModels:N,overlayVisualModels:null};const I=aI({baseVisualModels:N,overlayVisualModels:b,annotationEntries:r,coordinateOverrides:f});return{baseVisualModels:I.baseVisualModels,overlayVisualModels:I.overlayVisualModels}},[r,N,f,b])},lI=({pickedIds:e,edgeAnnotationIdsById:n,polygonFillAnnotationIdsById:t})=>{for(const o of e){const r=[...n.entries()].find(([a])=>o===a||o.startsWith(`${a}-`));if(r)return{isRuntimeTarget:!0,annotationId:r[1]};if(t.has(o))return{isRuntimeTarget:!0,annotationId:t.get(o)??null}}return{isRuntimeTarget:!1,annotationId:null}},uI=(e,n)=>{const t=e.getBoundingClientRect();return{x:n.clientX-t.left,y:n.clientY-t.top}},dI=({engine:e,enabled:n,baseEdges:t,overlayEdges:o,basePolygonFills:r,overlayPolygonFills:a,onAnnotationSelect:i})=>{const s=p.useMemo(()=>new Map([...t,...o].map(u=>[u.id,u.annotationId??null])),[t,o]),l=p.useMemo(()=>new Map([...r,...a].map(u=>[u.id,u.annotationId??null])),[r,a]);return p.useEffect(()=>{if(!Z(e)||!n)return;const{canvas:u}=e,d=c=>{if(e.isDestroyed())return;const m=e.pickAnnotationIdsAt(uI(u,c)),y=lI({pickedIds:m,edgeAnnotationIdsById:s,polygonFillAnnotationIdsById:l});if(y.isRuntimeTarget){i(y.annotationId),e.requestRender();return}i(null),e.requestRender()};return u.addEventListener("click",d),()=>{u.removeEventListener("click",d)}},[s,n,e,i,l]),null},cI=({annotationsStore:e,isSelectionAdditiveModifierPressed:n})=>p.useCallback(t=>{if(!t){e.dispatch(dt(null));return}if(!n){e.dispatch(dt(t));return}const o=e.getState().selectionState.selectedAnnotationIds,r=o.includes(t)?o.filter(a=>a!==t):[...o,t];e.dispatch(Tt(r))},[e,n]),Rc=({draftStore:e,toolTypes:n})=>{const[t,o]=p.useReducer(r=>r+1,0);return p.useEffect(()=>{const r=n.map(a=>e.subscribe(a,o));return()=>{r.forEach(a=>a())}},[e,n]),p.useMemo(()=>Object.fromEntries(n.flatMap(r=>{const a=e.get(r);return a.coordinates.length>0||a.linkedNodeGroupIds.length>0||!!a.feedback?[[r,a]]:[]})),[e,n,t])},mI=e=>{const[n,t]=p.useState(!1),o=p.useCallback(r=>{t(a=>a===r?a:r)},[]);return p.useEffect(()=>{const r=()=>{o(!1)},a=u=>{o(u.shiftKey)},i=u=>{(u.key===e||u.shiftKey)&&o(u.shiftKey)},s=u=>{(u.key===e||!u.shiftKey)&&o(u.shiftKey)},l=()=>{document.hidden&&r()};return window.addEventListener("keydown",i,!0),window.addEventListener("keyup",s,!0),window.addEventListener("pointerdown",a,!0),window.addEventListener("blur",r),document.addEventListener("visibilitychange",l),()=>{window.removeEventListener("keydown",i,!0),window.removeEventListener("keyup",s,!0),window.removeEventListener("pointerdown",a,!0),window.removeEventListener("blur",r),document.removeEventListener("visibilitychange",l)}},[e,o]),n},eo=(()=>{const e=Lp+wp,n=e*2;return Object.freeze({crosshair:Object.freeze({canvasHalfExtentPx:e,canvasSizePx:n,viewBox:`-27 -27 ${n} ${n}`}),selectionAdditiveIndicator:Object.freeze({fontSizeRem:"1.2857rem",offsetPx:Object.freeze({x:15,y:-10})})})})(),Zn={CROSSHAIR:"crosshair",SELECTION_ADDITIVE_INDICATOR:"selection-additive-indicator"},yI={[Zn.CROSSHAIR]:"annotation-candidate-crosshair-layer",[Zn.SELECTION_ADDITIVE_INDICATOR]:"annotation-selection-additive-indicator-layer"},pI={[Zn.CROSSHAIR]:"annotation-preview-crosshair",[Zn.SELECTION_ADDITIVE_INDICATOR]:"annotation-selection-additive-indicator"},gI=()=>{const e=Mp({canvasSizePx:eo.crosshair.canvasSizePx,foregroundBlendMode:gl.NORMAL,foregroundFill:_m,pathDefinitions:xp,shadowBlendMode:Pm,shadowBlurPx:Mm,shadowStrokeColor:Dm,shadowStrokeLinejoin:"round",shadowStrokeWidth:Math.max(Bm,0)*2,showAura:!0,viewBox:eo.crosshair.viewBox});return ir(e,{display:"none"}),e},fI=()=>{const e=document.createElement("div");return e.textContent="+",ir(e,{display:"none",color:"rgba(255, 255, 255, 0.98)",fontFamily:'"Segoe UI", "Helvetica Neue", Helvetica, Arial, sans-serif',fontSize:eo.selectionAdditiveIndicator.fontSizeRem,fontWeight:"700",lineHeight:"1",pointerEvents:"none",userSelect:"none",filter:"drop-shadow(0 0 1px rgba(0, 0, 0, 0.98)) drop-shadow(0 1px 2px rgba(0, 0, 0, 0.98))"}),e},AI=e=>{const n=e===Zn.SELECTION_ADDITIVE_INDICATOR?fI():gI();return n.id=pI[e],n},fo=e=>{const n=e.getBoundingClientRect();return{left:n.left,top:n.top,right:n.right,bottom:n.bottom}},vI=(e,n)=>!!(n&&e.x>=n.left&&e.x<=n.right&&e.y>=n.top&&e.y<=n.bottom),Us=(e,n=null,{enabled:t=!0,variant:o=Zn.CROSSHAIR}={})=>{const r=p.useRef(t),a=p.useRef(null),i=p.useRef(n),s=p.useRef(()=>{});r.current=t,i.current=n,p.useEffect(()=>{s.current(a.current,i.current)},[n,t]),p.useEffect(()=>{if(!e||e.isDestroyed())return;const l=ti(e,yI[o],be.VISUALIZER),u=l==null?void 0:l.parentElement;if(!l||!(u instanceof HTMLElement))return;const d=e.pointer.register();ir(l,{zIndex:Pe.layerZIndex});const c=AI(o);l.appendChild(c);let m=fo(u),y=fo(e.canvas);const g=()=>{c.style.display="none"},f=(N,b)=>{if(a.current=N,i.current=b,!r.current){g();return}const I=N!==null&&vI(N,y);if(o===Zn.SELECTION_ADDITIVE_INDICATOR){if(N&&m&&I){c.style.display="block",c.style.transform=`translate(${N.x-m.left+eo.selectionAdditiveIndicator.offsetPx.x}px, ${N.y-m.top+eo.selectionAdditiveIndicator.offsetPx.y}px)`;return}g();return}if(N&&m&&I){c.style.display="block",c.style.transform=`translate(${N.x-m.left}px, ${N.y-m.top}px) translate(-50%, -50%)`;return}if(I&&b&&y&&m&&Number.isFinite(b.x)&&Number.isFinite(b.y)){c.style.display="block",c.style.transform=`translate(${b.x+y.left-m.left}px, ${b.y+y.top-m.top}px) translate(-50%, -50%)`;return}g()};s.current=f;const A=()=>{m=fo(u),y=fo(e.canvas),f(a.current,i.current)},v=typeof ResizeObserver<"u"?new ResizeObserver(()=>{A()}):null;v==null||v.observe(u),v==null||v.observe(e.canvas),window.addEventListener("resize",A),window.addEventListener("scroll",A,!0);const T=e.pointer.subscribeClientPosition(N=>{f(N,i.current)});return f(e.pointer.getClientPosition(),i.current),()=>{v==null||v.disconnect(),window.removeEventListener("resize",A),window.removeEventListener("scroll",A,!0),T(),d(),Zt(l)}},[e,o])},oi={FREE:"free",GROUND:"ground",MEASUREMENT_PLANE:"measurement-plane"},xt=Object.freeze({frame:oi.FREE,axes:!0,surfaceDrag:!0,projectOntoMeasurementPlane:!1}),TI=Object.freeze({frame:oi.GROUND,axes:!1,surfaceDrag:!0,projectOntoMeasurementPlane:!1}),Hs=Object.freeze({frame:oi.MEASUREMENT_PLANE,axes:!1,surfaceDrag:!1,projectOntoMeasurementPlane:!0}),bI=Object.freeze({[P.POINT]:xt,[P.DISTANCE]:xt,[P.POLYLINE]:xt,[P.LABEL]:xt,[P.AREA_GROUND]:TI,[P.AREA_PLANAR]:Hs,[P.AREA_VERTICAL]:Hs}),NI=e=>e&&bI[e]||xt,II=(e,n,t)=>{for(let o=t.length-1;o>=0;o-=1){const r=n.find(a=>a.id===t[o]&&a.nodeIds.includes(e));if(r)return r}return n.find(o=>o.nodeIds.includes(e))??null},kI=.05,hI=(e,n)=>{const t=new Map(n.map(r=>[r.id,Y(r.coordinate)]));return If({id:e.id,type:e.toolType,nodeIds:[...e.nodeIds],edgeRelationIds:[],closed:e.closed??!0,planeLocked:!0},t).plane??null},CI=(e,n)=>$n(_u(Y(e),n)),SI=(e,n)=>{const t=Y(e);return t.distanceTo(_u(t,n))>kI},Go={referenceNodeInteractionReleaseGuardMs:48,draftPreviewFlushIntervalMs:200,labels:{verticalAxis:"Punkt entlang der U-Achse verschieben",eastAxis:"Punkt entlang der E-Achse verschieben",northAxis:"Punkt entlang der N-Achse verschieben",genericAxis:"Punkt entlang der Achse verschieben",outerDisc:"Punkt auf Höhenebene verschieben",surfacePlane:"Punkt auf Oberfläche verschieben",freePlane:"Punkt in der Ebene verschieben"},referenceLineAxis:{primary:{id:"reference-line-parallel",color:"rgba(59, 130, 246, 0.98)",title:"Punkt parallel zur Referenzlinie verschieben"},secondary:{id:"reference-line-secondary",color:"rgba(34, 197, 94, 0.98)",title:"Punkt orthogonal zur Referenzlinie verschieben"},tertiary:{id:"reference-line-tertiary",color:"rgba(239, 68, 68, 0.98)",title:"Punkt entlang der aktiven Referenzebene verschieben"}}},EI=new Set([P.POINT,P.DISTANCE]),OI=({activeEditedNodeId:e,annotationEntries:n,selectedAnnotationIds:t})=>{if(!e)return!1;const o=new Set(t);return n.some(r=>o.has(r.id)&&r.nodeIds.includes(e)&&EI.has(r.toolType))},zs=e=>{e.current!==null&&typeof window<"u"&&(window.clearTimeout(e.current),e.current=null)},RI=({annotationsStore:e,selectedAnnotationIds:n})=>{const[t,o]=p.useState(Ot),[r,a]=p.useState(null),i=p.useRef(Ot),s=p.useRef(null),l=p.useRef(null),u=p.useRef(0),d=p.useRef(null),c=p.useRef(null),m=p.useRef(null),y=p.useRef(null),g=p.useCallback(()=>{l.current=null,u.current=typeof performance<"u"?performance.now():0,a(()=>s.current),o(N=>js(N,i.current)?N:i.current)},[]),f=p.useCallback(()=>{if(l.current!==null)return;if(typeof window>"u"){g();return}const b=(typeof performance<"u"?performance.now():0)-u.current,I=Math.max(0,Go.draftPreviewFlushIntervalMs-b);l.current=window.setTimeout(g,I)},[g]),A=p.useCallback(({nextDraftNodeCoordinateOverrides:N,nextDraftLinkToNodeId:b})=>{const I=Nt(N)?N:Ot,h=!js(i.current,I),C=s.current!==b;!h&&!C||(i.current=I,s.current=b,f())},[f]),v=p.useCallback(()=>{zs(l),i.current=Ot,s.current=null,d.current=null,c.current=null,m.current=null,y.current=null,a(null),o(N=>Nt(N)?Ot:N)},[]),T=p.useCallback(N=>{if(!N){v();return}const b=i.current,I=b[N]??t[N];if(!I){v();return}e.dispatch(Vv({nodeId:N,coordinate:I,movedNodeIds:Object.keys(b),linkToNodeId:s.current,selectedAnnotationIds:n})),v()},[e,v,t,n]);return p.useEffect(()=>()=>zs(l),[]),{draftNodeCoordinateOverrides:t,draftLinkToNodeId:r,snappedNodeIdRef:d,draftBaseCoordinateRef:c,draftBaseScreenPositionRef:m,hoveredReferenceNodeIdRef:y,updateDraftPreviewState:A,clearDraftNodeCoordinateOverrides:v,commitDraftNodeCoordinateOverrides:T}},LI=e=>{const n=xe(e);if(!n)return null;const t=Oa(n),{primary:o,secondary:r,tertiary:a}=Go.referenceLineAxis;return{axisDirection:n,axisTitle:o.title,preferredAxisId:o.id,axisCandidates:[{id:o.id,direction:n,color:o.color,title:o.title},{id:r.id,direction:t.xAxis,color:r.color,title:r.title},{id:a.id,direction:t.yAxis,color:a.color,title:a.title}]}},wI=({activeEditedNodeId:e,activeNodeEditRule:n,nodesById:t,areReferenceInteractionsSuppressed:o,setDraftCoordinateForScopedMove:r,setAxisOverride:a,draftBaseCoordinateRef:i,draftBaseScreenPositionRef:s,hoveredReferenceNodeIdRef:l,nodes:u})=>{const d=p.useCallback(g=>{var f;return i.current??((f=u.find(A=>A.id===g))==null?void 0:f.coordinate)??null},[i,u]),c=p.useCallback(g=>{if(!e||o())return!1;const f=t.get(e),A=t.get(g);if(!f||!A)return!1;if(f.id!==A.id){const v={...f.coordinate,altitude:A.coordinate.altitude};l.current=null,i.current=v,r(f.id,v,{disableSnap:!0})}return!0},[e,o,i,l,t,r]),m=p.useCallback((g,f)=>{if(!e||o())return;const A=d(e),v=t.get(g);if(A){if(f){l.current=g,r(e,{...A,altitude:(v==null?void 0:v.coordinate.altitude)??A.altitude},{disableSnap:!0});return}l.current===g&&(l.current=null,r(e,A,{screenPosition:s.current??void 0,disableSnap:!0}))}},[e,o,s,l,t,d,r]),y=p.useCallback((g,f)=>{if(!e||!n.axes||o())return!1;const A=t.get(g),v=t.get(f);if(!A||!v)return!1;const T=LI(new x().subVectors(Y(v.coordinate),Y(A.coordinate)));return T?(a(T),!0):!1},[e,n,o,t,a]);return{handleReferenceNodeClick:c,handleReferenceNodeHover:m,handleReferenceEdgeClick:y}},xI=({engine:e,nodes:n,linkedNodeGroups:t,annotationsStore:o,selectedAnnotationIds:r,measurementEditPlane:a,liveAnchors:i,updateDraftPreviewState:s,snappedNodeIdRef:l,draftBaseCoordinateRef:u,draftBaseScreenPositionRef:d,hoveredReferenceNodeIdRef:c})=>p.useCallback((m,y,{screenPosition:g,forcedSnappedNodeId:f,rememberBaseCoordinate:A=!1,disableSnap:v=!1}={})=>{const T=a?CI(y,a):y,{movedNodeIds:N}=Od({nodeId:m,nodes:n,linkedNodeGroups:t,annotationEntries:o.getState().annotationEntries,selectedAnnotationIds:r});if(N.length===0)return;A&&(u.current=T,d.current=g??null);const b=(C,k)=>{const S=Y(C);N.forEach(O=>{i.set(O,S)}),s({nextDraftNodeCoordinateOverrides:Object.fromEntries(N.map(O=>[O,C])),nextDraftLinkToNodeId:k})};if(v){l.current=null,b(T,null);return}const I=e&&!e.isDestroyed()?e.worldToScreen(Y(T))??void 0:void 0;let h=Pd({engine:e,nodes:n,linkedNodeGroups:t,coordinate:T,screenPosition:g??d.current??I,forcedSnappedNodeId:f??c.current,lockedNodeId:l.current,excludedNodeIds:N});a&&h.snappedNodeId!==null&&SI(h.coordinate,a)&&(h={...h,coordinate:T,snappedNodeId:null}),l.current=h.snappedNodeId,b(h.coordinate,h.snappedNodeId)},[a,o,t,i,n,e,r,s,l,u,d,c]),qI=e=>{},_I=(e,n,t,{annotationsStore:o,annotationEntries:r,selectedAnnotationIds:a,onActiveEditedNodeIdChange:i,referenceObjectSizing:s=qd,liveAnchors:l})=>{const u=p.useMemo(()=>Wd(()=>{}),[]),d=l??u,[c,m]=p.useState(null),[y,g]=p.useState(!1),[f,A]=p.useState(null),v=p.useRef(!1),T=p.useRef(0),{draftNodeCoordinateOverrides:N,draftLinkToNodeId:b,snappedNodeIdRef:I,draftBaseCoordinateRef:h,draftBaseScreenPositionRef:C,hoveredReferenceNodeIdRef:k,updateDraftPreviewState:S,clearDraftNodeCoordinateOverrides:O,commitDraftNodeCoordinateOverrides:R}=RI({annotationsStore:o,selectedAnnotationIds:a}),L=p.useMemo(()=>c?II(c,r,a):null,[c,r,a]),_=p.useMemo(()=>NI(L==null?void 0:L.toolType),[L]),w=p.useMemo(()=>L&&_.projectOntoMeasurementPlane?hI(L,n):null,[L,_,n]),q=p.useMemo(()=>w?Se(w.normalECEF):null,[w]),D=p.useMemo(()=>OI({activeEditedNodeId:c,annotationEntries:r,selectedAnnotationIds:a}),[c,r,a]),B=p.useCallback(()=>v.current||Date.now()<T.current,[]),H=xI({engine:e,nodes:n,linkedNodeGroups:t,annotationsStore:o,selectedAnnotationIds:a,measurementEditPlane:w,liveAnchors:d,updateDraftPreviewState:S,snappedNodeIdRef:I,draftBaseCoordinateRef:h,draftBaseScreenPositionRef:C,hoveredReferenceNodeIdRef:k}),z=p.useMemo(()=>ZN(n,N),[N,n]),X=p.useMemo(()=>{const M=Object.keys(N),J=c??M[0]??null;return!J||M.length===0?t:ud({nodes:z,nodeLinks:t,nodeId:J,movedNodeIds:M,linkToNodeId:b})},[c,b,N,z,t]),V=p.useMemo(()=>new Map(z.map(M=>[M.id,M])),[z]),$=p.useCallback(M=>{r.some(W=>W.nodeIds.includes(M)&&a.includes(W.id)&&!W.locked&&!W.readOnly)&&(c&&c!==M&&R(c),A(null),m(M))},[c,r,R,a]),{handleReferenceNodeClick:Q,handleReferenceNodeHover:ue,handleReferenceEdgeClick:K}=wI({activeEditedNodeId:c,activeNodeEditRule:_,nodes:n,nodesById:V,areReferenceInteractionsSuppressed:B,setDraftCoordinateForScopedMove:H,setAxisOverride:A,draftBaseCoordinateRef:h,draftBaseScreenPositionRef:C,hoveredReferenceNodeIdRef:k}),se=p.useCallback(M=>{if(v.current=M,g(M),M||!c){M&&(T.current=0);return}T.current=Date.now()+Go.referenceNodeInteractionReleaseGuardMs,R(c)},[c,R]),de=p.useMemo(()=>z.map(M=>({id:M.id,geometryECEF:Y(M.coordinate)})),[z]),Ne=p.useCallback((M,J,W)=>{H(M,$n(J),{screenPosition:W,rememberBaseCoordinate:!0})},[H]);return((e==null?void 0:e.hooks.usePointMoveGizmo)??qI)({points:de,labels:Go.labels,movePointId:c,axisDirection:(f==null?void 0:f.axisDirection)??null,discPlaneNormal:q,axisTitle:(f==null?void 0:f.axisTitle)??null,preferredAxisId:(f==null?void 0:f.preferredAxisId)??null,axisCandidates:(f==null?void 0:f.axisCandidates)??null,radius:s.worldRadiusMeters,discScalingMode:s.scalingMode,discOutlineScreenPixelRadius:s.targetScreenRadiusCssPx,discResizeWorldRadiusToScreenTarget:s.resizeWorldRadiusToScreenTarget,discQuantizeWorldRadius:s.quantizeWorldRadius,freezeDiscScaleDuringDrag:s.resizeWorldRadiusToScreenTarget,discResizeStepFactor:s.resizeStepFactor,showRotationHandle:!1,showAxes:_.axes,snapPlaneDragToGround:_.surfaceDrag,excludeRegisteredDragSampleOccluders:D,onDragStateChange:se,onPointPositionChange:Ne,onExit:()=>{R(c),v.current=!1,g(!1),A(null),m(null)}}),p.useEffect(()=>{if(!c){O();return}z.some(M=>M.id===c)||(O(),A(null),m(null))},[c,O,z]),p.useEffect(()=>{!c||!n.some(J=>J.id===c)||r.some(J=>J.nodeIds.includes(c)&&a.includes(J.id))||(R(c),A(null),m(null))},[c,r,R,n,a]),p.useEffect(()=>{var M;c&&(h.current=((M=n.find(J=>J.id===c))==null?void 0:M.coordinate)??null,C.current=null,k.current=null)},[c,h,C,k,n]),p.useEffect(()=>{i==null||i(c)},[c,i]),p.useEffect(()=>{y||Nt(N)||(d.clear(),e&&!e.isDestroyed()&&e.requestRender())},[N,y,d,e]),{activeEditedNodeId:c,draftNodeCoordinateOverrides:N,effectiveLinkedNodeGroups:X,effectiveNodes:z,handleNodeLongPress:$,isMoveGizmoDragging:y,handleReferenceNodeClick:Q,handleReferenceNodeHover:ue,handleReferenceEdgeClick:K}},PI=e=>e===Mt.START_COORDINATE?Mt.END_COORDINATE:Mt.START_COORDINATE,MI=e=>Mt.START_COORDINATE,YC=e=>e===Je.LEFTMOST_SCREEN_SPACE?Je.RIGHTMOST_SCREEN_SPACE:Je.LEFTMOST_SCREEN_SPACE,DI=e=>{const n=e[0],t=e[e.length-1];if(!n||!t)return Je.RIGHTMOST_SCREEN_SPACE;const o=Y(n),r=Y(t),a=ol(o,r);return Math.hypot(a.east,a.north)>qt.referenceLineEpsilonMeters?Je.LEFTMOST_SCREEN_SPACE:Je.RIGHTMOST_SCREEN_SPACE},BI=e=>new Map(e.map(n=>[n.id,n.coordinate])),FI=(e,n)=>e.nodeIds.map(t=>n.get(t)).filter(t=>!!t),ri=({annotationEntries:e,nodes:n,annotationId:t})=>{if(!t)return[];const o=Yt(e,t);return o?FI(o,BI(n)):[]},Aa=({annotationEntries:e,nodes:n,annotationId:t})=>ri({annotationEntries:e,nodes:n,annotationId:t}).flatMap(o=>o?[Y(o)]:[]),{POLYLINE:GI,AREA_GROUND:jI,AREA_PLANAR:UI,AREA_VERTICAL:HI}=P,Vs=e=>e===GI||e===jI||e===UI||e===HI,zI=(e,n)=>$n(new x().addVectors(Y(e),Y(n)).multiplyScalar(.5)),VI=({engine:e,nodes:n,linkedNodeGroups:t,annotationEntries:o,selectedAnnotationIds:r,annotationsStore:a,activeEditedNodeId:i,isInteractionToolActive:s,isMeasurementToolActive:l,isSelectionAdditiveModifierPressed:u,onActiveEditedNodeIdChange:d,onHoveredPointQueryNodeIdChange:c,referenceObjectSizing:m,liveAnchors:y})=>{const g=i===null&&l,{draftNodeCoordinateOverrides:f,effectiveLinkedNodeGroups:A,effectiveNodes:v,handleNodeLongPress:T,isMoveGizmoDragging:N,handleReferenceNodeClick:b,handleReferenceNodeHover:I,handleReferenceEdgeClick:h}=_I(e,n,t,{annotationsStore:a,annotationEntries:o,selectedAnnotationIds:r,onActiveEditedNodeIdChange:d,referenceObjectSizing:m,liveAnchors:y}),C=p.useCallback(R=>{const L=a.getState(),_=Yt(L.annotationEntries,R);if(!_)return;const w=ri({annotationEntries:L.annotationEntries,nodes:L.nodes,annotationId:R}),q=_.distanceTriangleAnchorCoordinateRole??MI(),D=(_.distanceAnchorCoordinateSelection??DI(w))===Je.LEFTMOST_SCREEN_SPACE?Je.RIGHTMOST_SCREEN_SPACE:Je.LEFTMOST_SCREEN_SPACE;a.dispatch(Fn({annotationId:R,distanceAnchorCoordinateSelection:D,distanceTriangleAnchorCoordinateRole:PI(q)}))},[a]),k=p.useMemo(()=>{const R=new Set(r);return o.filter(L=>R.has(L.id)&&!L.locked&&!L.readOnly&&Vs(L.toolType)).map(L=>L.id)},[o,r]),S=p.useCallback((R,L,_)=>{const w=a.getState(),q=Yt(w.annotationEntries,R);if(!q||q.locked||q.readOnly||!Vs(q.toolType))return!1;const D=w.nodes.find(H=>H.id===L),B=w.nodes.find(H=>H.id===_);return!D||!B?!1:(a.dispatch(zv({annotationId:R,startNodeId:L,endNodeId:_,coordinate:zI(D.coordinate,B.coordinate)})),e==null||e.requestRender(),!0)},[a,e]),O=p.useCallback((R,L)=>{c(L?R:null)},[c]);return p.useEffect(()=>{g||c(null)},[c,g]),Us(e,null,{enabled:g}),Us(e,null,{enabled:s&&u,variant:"selection-additive-indicator"}),{draftNodeCoordinateOverrides:f,effectiveLinkedNodeGroups:A,effectiveNodes:v,handleDistanceTriangleCornerClick:C,handleInsertNodeTargetClick:S,handleNodeLongPress:T,handlePreviewSnapTargetNodeHover:O,handleReferenceEdgeClick:h,handleReferenceNodeClick:b,handleReferenceNodeHover:I,insertNodeTargetAnnotationIds:k,isMoveGizmoDragging:N,previewSnapTargetHoverEnabled:g}},Lc=({engine:e,registry:n,annotationsStore:t,annotationToolDraftStore:o,setElevationReferenceAnnotationId:r,toggleAnnotationElevationDisplayMode:a,onActiveEditedNodeIdChange:i,onHoveredPointQueryNodeIdChange:s,onPreviewSnapTargetNodeClick:l,activeEditedNodeId:u,formatOptions:d,lineLabelOptions:c,referenceObjectSizing:m,visualInteractionEnabled:y=!1,visualAnnotationEntryRoles:g})=>{const{invalidatePositions:f}=zo(),A=p.useMemo(()=>Wd(f),[f]),v=re(G=>G.annotationToolType),T=p.useMemo(()=>n.getPlugin(v)??null,[v,n]),N=(T==null?void 0:T.kind)===Do.INTERACTION,b=(T==null?void 0:T.kind)===Do.MEASUREMENT,I=re(G=>G.nodes),h=re(G=>G.linkedNodeGroups),C=re(G=>G.edges),k=re(G=>G.annotationEntries),S=p.useMemo(()=>wv({annotationEntries:k},{roles:g}).map(te=>te.readOnly&&!te.locked?{...te,locked:!0}:te),[k,g]),O=re(or),R=re(G=>G.selectionState.selectedAnnotationIds),L=p.useMemo(()=>n.plugins.map(G=>G.id),[n.plugins]),_=Rc({draftStore:o,toolTypes:L}),w=re(G=>G.settingsState.elevationReferenceAnnotationId),q=mI(Hn.additiveSelectionModifierKey),D=cI({annotationsStore:t,isSelectionAdditiveModifierPressed:q}),B=p.useCallback(G=>{const te=Array.from(new Set(G.filter(Boolean)));if(te.length===0)return;if(!q){t.dispatch(Tt(te));return}const Ie=t.getState().selectionState.selectedAnnotationIds,cn=new Set(te),ke=te.every(he=>Ie.includes(he))?Ie.filter(he=>!cn.has(he)):Array.from(new Set([...Ie,...te]));t.dispatch(Tt(ke))},[t,q]),H=p.useMemo(()=>Fa(S),[S]),z=p.useCallback((G,te)=>v===Ln&&!H.has(G)&&S.some(Ie=>(!te||Ie.id===te)&&Ie.nodeIds.includes(G)&&R.includes(Ie.id)&&!Ie.locked&&!Ie.readOnly),[v,S,H,R]),{draftNodeCoordinateOverrides:X,effectiveLinkedNodeGroups:V,effectiveNodes:$,handleDistanceTriangleCornerClick:Q,handleInsertNodeTargetClick:ue,handleNodeLongPress:K,handlePreviewSnapTargetNodeHover:se,handleReferenceEdgeClick:de,handleReferenceNodeClick:Ne,handleReferenceNodeHover:F,insertNodeTargetAnnotationIds:M,isMoveGizmoDragging:J,previewSnapTargetHoverEnabled:W}=VI({engine:e,nodes:I,linkedNodeGroups:h,annotationEntries:S,selectedAnnotationIds:R,annotationsStore:t,activeEditedNodeId:u,isInteractionToolActive:N,isMeasurementToolActive:b,isSelectionAdditiveModifierPressed:q,onActiveEditedNodeIdChange:i,onHoveredPointQueryNodeIdChange:s,referenceObjectSizing:m,liveAnchors:A}),{baseVisualModels:fe,overlayVisualModels:ce}=sI({plugins:n.plugins,nodes:I,edges:C,linkedNodeGroups:h,annotationEntries:S,draftStatesByToolType:_,elevationReferenceAnnotationId:w,selectedAnnotationId:O,selectedAnnotationIds:R,isSelectionAdditiveModifierPressed:q,onAnnotationSelect:D,setElevationReferenceAnnotationId:r,toggleAnnotationElevationDisplayMode:a,onNodeLongPress:K,formatOptions:d,draftNodeCoordinateOverrides:X,effectiveNodes:$,effectiveLinkedNodeGroups:V});return JN(e,{baseVisualModels:fe,overlayVisualModels:ce,linkedNodeGroups:h,effectiveLinkedNodeGroups:V,selectedAnnotationIds:R,formatOptions:d,lineLabelOptions:c,activeEditedNodeId:u,isMoveGizmoDragging:J,liveAnchors:A,previewSnapTargetHoverEnabled:W,onPreviewSnapTargetNodeClick:l,onAnnotationSelect:D,onNodeAnnotationsSelect:B,onNodeLongPress:K,canStartNodeEditing:z,onReferenceNodeClick:Ne,onReferenceNodeHover:F,onPreviewNodeHover:se,onReferenceEdgeClick:de,insertNodeTargetAnnotationIds:M,onInsertNodeTargetClick:ue,onDistanceTriangleCornerClick:Q}),E.jsx(dI,{engine:e,enabled:N||y,baseEdges:fe.edges??[],overlayEdges:(ce==null?void 0:ce.edges)??[],basePolygonFills:fe.polygonFills??[],overlayPolygonFills:(ce==null?void 0:ce.polygonFills)??[],onAnnotationSelect:D})};Lc.__docgenInfo={description:"",methods:[],displayName:"RuntimeVisualHost",props:{engine:{required:!0,tsType:{name:"union",raw:"AnnotationEngine | null",elements:[{name:"AnnotationEngine"},{name:"null"}]},description:""},registry:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  plugins: readonly AnnotationToolPlugin[];
  orderedDescriptors: readonly AnnotationToolDescriptor[];
  byId: ReadonlyMap<AnnotationToolId, AnnotationToolPlugin>;
  getPlugin: (toolId: AnnotationToolId) => AnnotationToolPlugin | undefined;
  assertPlugin: (toolId: AnnotationToolId) => AnnotationToolPlugin;
  getPluginsByAnnotationType: (
    annotationType: StoredAnnotation["toolType"]
  ) => readonly AnnotationToolPlugin[];
}`,signature:{properties:[{key:"plugins",value:{name:"unknown",required:!0}},{key:"orderedDescriptors",value:{name:"unknown",required:!0}},{key:"byId",value:{name:"ReadonlyMap",elements:[{name:"AnnotationToolId"},{name:"signature",type:"object",raw:`{
  id: AnnotationToolId;
  kind: AnnotationToolPluginKind;
  annotationType?: StoredAnnotation["toolType"] | null;
  descriptor: AnnotationToolDescriptor;
  helpText?: readonly AnnotationInfoBoxHelpItem[];
  resolveHelpText?: (
    context: AnnotationToolHelpTextContext
  ) => readonly AnnotationInfoBoxHelpItem[];
  alwaysShowHelpTextWhileActive?: boolean;
  capabilities?: readonly AnnotationToolPluginCapability[];
  session?: {
    createSession: (
      context: AnnotationToolSessionContext
    ) => AnnotationModeSession;
  };
  pointQuery?: {
    inputModifiers?: readonly AnnotationPointQueryInputModifier[];
    onPointCreated: (context: PointQueryCreatedContext) => void;
  };
  addAnnotation?: {
    resolveOptions: (
      context: AnnotationToolAddAnnotationContext
    ) => AddAnnotationOptions | undefined;
  };
  authoringVisuals?: {
    createController: (
      context: AnnotationToolAuthoringContext
    ) => AnnotationToolAuthoringController | null;
  };
  keyboard?: {
    onKeyDown: (context: AnnotationToolKeyboardContext) => boolean;
  };
  visualModels?: {
    build: (
      context: AnnotationToolVisualModelContext
    ) => RuntimeVisualModels | null;
  };
  infoBox?: {
    getSlots: (
      context: RuntimeAnnotationInfoBoxContext
    ) => AnnotationInfoBoxSlots | null;
  };
}`,signature:{properties:[{key:"id",value:{name:"AnnotationToolId",required:!0}},{key:"kind",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_TOOL_PLUGIN_KINDS)[keyof typeof ANNOTATION_TOOL_PLUGIN_KINDS]",required:!0}},{key:"annotationType",value:{name:"union",raw:'StoredAnnotation["toolType"] | null',elements:[{name:"AnnotationType",raw:'StoredAnnotation["toolType"]'},{name:"null"}],required:!1}},{key:"descriptor",value:{name:"signature",type:"object",raw:`{
  id: AnnotationToolId;
  order: number;
  label: string;
  tooltip: string;
  shortcutKey?: string;
  icon?: ReactNode;
}`,signature:{properties:[{key:"id",value:{name:"AnnotationToolId",required:!0}},{key:"order",value:{name:"number",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"tooltip",value:{name:"string",required:!0}},{key:"shortcutKey",value:{name:"string",required:!1}},{key:"icon",value:{name:"ReactNode",required:!1}}]},required:!0}},{key:"helpText",value:{name:"unknown",required:!1}},{key:"resolveHelpText",value:{name:"signature",type:"function",raw:`(
  context: AnnotationToolHelpTextContext
) => readonly AnnotationInfoBoxHelpItem[]`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  draftState: AnnotationToolDraftState;
  pointQueryPickResult?: PointQueryPickResult | null;
}`,signature:{properties:[{key:"draftState",value:{name:"signature",type:"object",raw:`{
  coordinates: readonly AnnotationGeographicCoordinate[];
  linkedNodeGroupIds: readonly (AnnotationNodeLinkId | null)[];
  feedback?: {
    kind: "warning";
    message: string;
  } | null;
}`,signature:{properties:[{key:"coordinates",value:{name:"unknown",required:!0}},{key:"linkedNodeGroupIds",value:{name:"unknown",required:!0}},{key:"feedback",value:{name:"union",raw:`{
  kind: "warning";
  message: string;
} | null`,elements:[{name:"signature",type:"object",raw:`{
  kind: "warning";
  message: string;
}`,signature:{properties:[{key:"kind",value:{name:"literal",value:'"warning"',required:!0}},{key:"message",value:{name:"string",required:!0}}]}},{name:"null"}],required:!1}}]},required:!0}},{key:"pointQueryPickResult",value:{name:"union",raw:"PointQueryPickResult | null",elements:[{name:"signature",type:"object",raw:`{
  coordinate: AnnotationGeographicCoordinate | null;
  screenPosition: { x: number; y: number } | null;
  pointECEF: Vector3 | null;
  surfaceNormalECEF: Vector3 | null;
  inputModifier?: AnnotationPointQueryInputModifier;
}`,signature:{properties:[{key:"coordinate",value:{name:"union",raw:"AnnotationGeographicCoordinate | null",elements:[{name:"AnnotationGeographicCoordinate"},{name:"null"}],required:!0}},{key:"screenPosition",value:{name:"union",raw:"{ x: number; y: number } | null",elements:[{name:"signature",type:"object",raw:"{ x: number; y: number }",signature:{properties:[{key:"x",value:{name:"number",required:!0}},{key:"y",value:{name:"number",required:!0}}]}},{name:"null"}],required:!0}},{key:"pointECEF",value:{name:"union",raw:"Vector3 | null",elements:[{name:"Vector3"},{name:"null"}],required:!0}},{key:"surfaceNormalECEF",value:{name:"union",raw:"Vector3 | null",elements:[{name:"Vector3"},{name:"null"}],required:!0}},{key:"inputModifier",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_POINT_QUERY_INPUT_MODIFIERS)[keyof typeof ANNOTATION_POINT_QUERY_INPUT_MODIFIERS]",required:!1}}]}},{name:"null"}],required:!1}}]}},name:"context"}],return:{name:"unknown"}},required:!1}},{key:"alwaysShowHelpTextWhileActive",value:{name:"boolean",required:!1}},{key:"capabilities",value:{name:"unknown",required:!1}},{key:"session",value:{name:"signature",type:"object",raw:`{
  createSession: (
    context: AnnotationToolSessionContext
  ) => AnnotationModeSession;
}`,signature:{properties:[{key:"createSession",value:{name:"signature",type:"function",raw:`(
  context: AnnotationToolSessionContext
) => AnnotationModeSession`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  getState: () => AnnotationsStoreState;
  dispatch: AnnotationsStore["dispatch"];
  setActiveToolType: (toolId: AnnotationToolId) => void;
  drafts: AnnotationToolDraftStore;
  requestLabelText?: AnnotationLabelTextRequester;
  addAnnotation: (
    annotationType: StoredAnnotation["toolType"],
    coordinates: readonly AnnotationGeographicCoordinate[],
    options?: AddAnnotationOptions,
    linkedNodeGroupIds?: readonly (AnnotationNodeLinkId | null | undefined)[],
    sourceToolId?: AnnotationToolId
  ) => StoredAnnotation;
}`,signature:{properties:[{key:"getState",value:{name:"signature",type:"function",raw:"() => AnnotationsStoreState",signature:{arguments:[],return:{name:"signature",type:"object",raw:`{
  annotationToolType: AnnotationToolId;
  selectionState: AnnotationSelectionStoreState;
  annotationEntries: readonly StoredAnnotation[];
  nodes: readonly AnnotationNode[];
  linkedNodeGroups: readonly AnnotationNodeLink[];
  edges: readonly AnnotationEdge[];
  infoBoxState: AnnotationInfoBoxStoreState;
  settingsState: AnnotationSettingsStoreState;
}`,signature:{properties:[{key:"annotationToolType",value:{name:"AnnotationToolId",required:!0}},{key:"selectionState",value:{name:"signature",type:"object",raw:`{
  selectedAnnotationIds: readonly string[];
  previousSelectedAnnotationId: string | null;
}`,signature:{properties:[{key:"selectedAnnotationIds",value:{name:"unknown",required:!0}},{key:"previousSelectedAnnotationId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]},required:!0}},{key:"annotationEntries",value:{name:"unknown",required:!0}},{key:"nodes",value:{name:"unknown",required:!0}},{key:"linkedNodeGroups",value:{name:"unknown",required:!0}},{key:"edges",value:{name:"unknown",required:!0}},{key:"infoBoxState",value:{name:"signature",type:"object",raw:`{
  activeAnnotationId: string | null;
}`,signature:{properties:[{key:"activeAnnotationId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]},required:!0}},{key:"settingsState",value:{name:"signature",type:"object",raw:`{
  pointTemporaryMode: boolean;
  elevationReferenceAnnotationId: string | null;
  nextShortLabelCounterByToolType: Readonly<Record<string, number>>;
}`,signature:{properties:[{key:"pointTemporaryMode",value:{name:"boolean",required:!0}},{key:"elevationReferenceAnnotationId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"nextShortLabelCounterByToolType",value:{name:"Readonly",elements:[{name:"Record",elements:[{name:"string"},{name:"number"}],raw:"Record<string, number>"}],raw:"Readonly<Record<string, number>>",required:!0}}]},required:!0}}]}}},required:!0}},{key:"dispatch",value:{name:'ReturnType["dispatch"]',raw:'AnnotationsStore["dispatch"]',required:!0}},{key:"setActiveToolType",value:{name:"signature",type:"function",raw:"(toolId: AnnotationToolId) => void",signature:{arguments:[{type:{name:"AnnotationToolId"},name:"toolId"}],return:{name:"void"}},required:!0}},{key:"drafts",value:{name:"signature",type:"object",raw:`{
  get: (toolId: AnnotationToolId) => AnnotationToolDraftState;
  set: (toolId: AnnotationToolId, draft: AnnotationToolDraftState) => void;
  clear: (toolId: AnnotationToolId) => void;
  subscribe: (toolId: AnnotationToolId, listener: () => void) => () => void;
}`,signature:{properties:[{key:"get",value:{name:"signature",type:"function",raw:"(toolId: AnnotationToolId) => AnnotationToolDraftState",signature:{arguments:[{type:{name:"AnnotationToolId"},name:"toolId"}],return:{name:"signature",type:"object",raw:`{
  coordinates: readonly AnnotationGeographicCoordinate[];
  linkedNodeGroupIds: readonly (AnnotationNodeLinkId | null)[];
  feedback?: {
    kind: "warning";
    message: string;
  } | null;
}`,signature:{properties:[{key:"coordinates",value:{name:"unknown",required:!0}},{key:"linkedNodeGroupIds",value:{name:"unknown",required:!0}},{key:"feedback",value:{name:"union",raw:`{
  kind: "warning";
  message: string;
} | null`,elements:[{name:"signature",type:"object",raw:`{
  kind: "warning";
  message: string;
}`,signature:{properties:[{key:"kind",value:{name:"literal",value:'"warning"',required:!0}},{key:"message",value:{name:"string",required:!0}}]}},{name:"null"}],required:!1}}]},required:!0}},required:!0}},{key:"set",value:{name:"signature",type:"function",raw:"(toolId: AnnotationToolId, draft: AnnotationToolDraftState) => void",signature:{arguments:[{type:{name:"AnnotationToolId"},name:"toolId"},{type:{name:"signature",type:"object",raw:`{
  coordinates: readonly AnnotationGeographicCoordinate[];
  linkedNodeGroupIds: readonly (AnnotationNodeLinkId | null)[];
  feedback?: {
    kind: "warning";
    message: string;
  } | null;
}`,signature:{properties:[{key:"coordinates",value:{name:"unknown",required:!0}},{key:"linkedNodeGroupIds",value:{name:"unknown",required:!0}},{key:"feedback",value:{name:"union",raw:`{
  kind: "warning";
  message: string;
} | null`,elements:[{name:"signature",type:"object",raw:`{
  kind: "warning";
  message: string;
}`,signature:{properties:[{key:"kind",value:{name:"literal",value:'"warning"',required:!0}},{key:"message",value:{name:"string",required:!0}}]}},{name:"null"}],required:!1}}]},required:!0},name:"draft"}],return:{name:"void"}},required:!0}},{key:"clear",value:{name:"signature",type:"function",raw:"(toolId: AnnotationToolId) => void",signature:{arguments:[{type:{name:"AnnotationToolId"},name:"toolId"}],return:{name:"void"}},required:!0}},{key:"subscribe",value:{name:"signature",type:"function",raw:"(toolId: AnnotationToolId, listener: () => void) => () => void",signature:{arguments:[{type:{name:"AnnotationToolId"},name:"toolId"},{type:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},name:"listener"}],return:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}}},required:!0}}]},required:!0}},{key:"requestLabelText",value:{name:"signature",type:"function",raw:`(
  context: AnnotationLabelTextRequestContext
) => string | null | Promise<string | null>`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  coordinate: AnnotationGeographicCoordinate;
  defaultText: string;
  labelTextSuggestions: readonly string[];
  linkedNodeGroupId?: AnnotationNodeLinkId | null;
}`,signature:{properties:[{key:"coordinate",value:{name:"AnnotationGeographicCoordinate",required:!0}},{key:"defaultText",value:{name:"string",required:!0}},{key:"labelTextSuggestions",value:{name:"unknown",required:!0}},{key:"linkedNodeGroupId",value:{name:"union",raw:"AnnotationNodeLinkId | null",elements:[{name:"string"},{name:"null"}],required:!1}}]}},name:"context"}],return:{name:"union",raw:"string | null | Promise<string | null>",elements:[{name:"string"},{name:"null"},{name:"Promise",elements:[{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]}],raw:"Promise<string | null>"}]}},required:!1}},{key:"addAnnotation",value:{name:"signature",type:"function",raw:`(
  annotationType: StoredAnnotation["toolType"],
  coordinates: readonly AnnotationGeographicCoordinate[],
  options?: AddAnnotationOptions,
  linkedNodeGroupIds?: readonly (AnnotationNodeLinkId | null | undefined)[],
  sourceToolId?: AnnotationToolId
) => StoredAnnotation`,signature:{arguments:[{type:{name:"AnnotationType",raw:'StoredAnnotation["toolType"]'},name:"annotationType"},{type:{name:"unknown"},name:"coordinates"},{type:{name:"Pick",elements:[{name:"signature",type:"object",raw:`{
  id: string;
  toolType: AnnotationType;
  nodeIds: readonly string[];
  edgeIds: readonly string[];
  displayName?: string;
  shortLabel?: string;
  shortLabelSource?: AnnotationShortLabelSource;
  shortLabelCounter?: number;
  hidden?: boolean;
  locked?: boolean;
  annotationRole?: AnnotationEntryRole;
  readOnly?: boolean;
  labelAppearance?: AnnotationLabelAppearance;
  elevationDisplayMode?: AnnotationElevationDisplayMode;
  distanceAnchorCoordinateSelection?: RuntimePointLabelCoordinateSelection;
  distanceTriangleAnchorCoordinateRole?: RuntimeDistanceTriangleAnchorCoordinateRole;
  closed?: boolean;
  preferredNormalBearingRad?: number;
  externalCollection?: {
    type: "saved-measurement";
    id: string;
  };
  /** Identity across machines and shares; the runtime id only counts per session. */
  uuid?: string;
  /** ISO time of the last content change, stamped by the persistence on save. */
  updatedAt?: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"toolType",value:{name:"AnnotationType",required:!0}},{key:"nodeIds",value:{name:"unknown",required:!0}},{key:"edgeIds",value:{name:"unknown",required:!0}},{key:"displayName",value:{name:"string",required:!1}},{key:"shortLabel",value:{name:"string",required:!1}},{key:"shortLabelSource",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_SHORT_LABEL_SOURCES)[keyof typeof ANNOTATION_SHORT_LABEL_SOURCES]",required:!1}},{key:"shortLabelCounter",value:{name:"number",required:!1}},{key:"hidden",value:{name:"boolean",required:!1}},{key:"locked",value:{name:"boolean",required:!1}},{key:"annotationRole",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_ENTRY_ROLES)[keyof typeof ANNOTATION_ENTRY_ROLES]",required:!1}},{key:"readOnly",value:{name:"boolean",required:!1}},{key:"labelAppearance",value:{name:"AnnotationLabelAppearance",required:!1}},{key:"elevationDisplayMode",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_ELEVATION_DISPLAY_MODES)[keyof typeof ANNOTATION_ELEVATION_DISPLAY_MODES]",required:!1}},{key:"distanceAnchorCoordinateSelection",value:{name:"unknown[union]",raw:"(typeof RUNTIME_POINT_LABEL_COORDINATE_SELECTION)[keyof typeof RUNTIME_POINT_LABEL_COORDINATE_SELECTION]",required:!1}},{key:"distanceTriangleAnchorCoordinateRole",value:{name:"unknown[union]",raw:"(typeof RUNTIME_DISTANCE_TRIANGLE_ANCHOR_COORDINATE_ROLE)[keyof typeof RUNTIME_DISTANCE_TRIANGLE_ANCHOR_COORDINATE_ROLE]",required:!1}},{key:"closed",value:{name:"boolean",required:!1}},{key:"preferredNormalBearingRad",value:{name:"number",required:!1}},{key:"externalCollection",value:{name:"signature",type:"object",raw:`{
  type: "saved-measurement";
  id: string;
}`,signature:{properties:[{key:"type",value:{name:"literal",value:'"saved-measurement"',required:!0}},{key:"id",value:{name:"string",required:!0}}]},required:!1}},{key:"uuid",value:{name:"string",required:!1},description:"Identity across machines and shares; the runtime id only counts per session."},{key:"updatedAt",value:{name:"string",required:!1},description:"ISO time of the last content change, stamped by the persistence on save."}]},required:!0},{name:"union",raw:`| "closed"
| "preferredNormalBearingRad"
| "displayName"
| "shortLabel"
| "shortLabelSource"
| "shortLabelCounter"
| "hidden"
| "locked"
| "labelAppearance"
| "elevationDisplayMode"
| "distanceAnchorCoordinateSelection"
| "distanceTriangleAnchorCoordinateRole"`,elements:[{name:"literal",value:'"closed"'},{name:"literal",value:'"preferredNormalBearingRad"'},{name:"literal",value:'"displayName"'},{name:"literal",value:'"shortLabel"'},{name:"literal",value:'"shortLabelSource"'},{name:"literal",value:'"shortLabelCounter"'},{name:"literal",value:'"hidden"'},{name:"literal",value:'"locked"'},{name:"literal",value:'"labelAppearance"'},{name:"literal",value:'"elevationDisplayMode"'},{name:"literal",value:'"distanceAnchorCoordinateSelection"'},{name:"literal",value:'"distanceTriangleAnchorCoordinateRole"'}]}],raw:`Pick<
  StoredAnnotation,
  | "closed"
  | "preferredNormalBearingRad"
  | "displayName"
  | "shortLabel"
  | "shortLabelSource"
  | "shortLabelCounter"
  | "hidden"
  | "locked"
  | "labelAppearance"
  | "elevationDisplayMode"
  | "distanceAnchorCoordinateSelection"
  | "distanceTriangleAnchorCoordinateRole"
>`,required:!1},name:"options"},{type:{name:"unknown"},name:"linkedNodeGroupIds"},{type:{name:"AnnotationToolId"},name:"sourceToolId"}],return:{name:"signature",type:"object",raw:`{
  id: string;
  toolType: AnnotationType;
  nodeIds: readonly string[];
  edgeIds: readonly string[];
  displayName?: string;
  shortLabel?: string;
  shortLabelSource?: AnnotationShortLabelSource;
  shortLabelCounter?: number;
  hidden?: boolean;
  locked?: boolean;
  annotationRole?: AnnotationEntryRole;
  readOnly?: boolean;
  labelAppearance?: AnnotationLabelAppearance;
  elevationDisplayMode?: AnnotationElevationDisplayMode;
  distanceAnchorCoordinateSelection?: RuntimePointLabelCoordinateSelection;
  distanceTriangleAnchorCoordinateRole?: RuntimeDistanceTriangleAnchorCoordinateRole;
  closed?: boolean;
  preferredNormalBearingRad?: number;
  externalCollection?: {
    type: "saved-measurement";
    id: string;
  };
  /** Identity across machines and shares; the runtime id only counts per session. */
  uuid?: string;
  /** ISO time of the last content change, stamped by the persistence on save. */
  updatedAt?: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"toolType",value:{name:"AnnotationType",required:!0}},{key:"nodeIds",value:{name:"unknown",required:!0}},{key:"edgeIds",value:{name:"unknown",required:!0}},{key:"displayName",value:{name:"string",required:!1}},{key:"shortLabel",value:{name:"string",required:!1}},{key:"shortLabelSource",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_SHORT_LABEL_SOURCES)[keyof typeof ANNOTATION_SHORT_LABEL_SOURCES]",required:!1}},{key:"shortLabelCounter",value:{name:"number",required:!1}},{key:"hidden",value:{name:"boolean",required:!1}},{key:"locked",value:{name:"boolean",required:!1}},{key:"annotationRole",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_ENTRY_ROLES)[keyof typeof ANNOTATION_ENTRY_ROLES]",required:!1}},{key:"readOnly",value:{name:"boolean",required:!1}},{key:"labelAppearance",value:{name:"AnnotationLabelAppearance",required:!1}},{key:"elevationDisplayMode",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_ELEVATION_DISPLAY_MODES)[keyof typeof ANNOTATION_ELEVATION_DISPLAY_MODES]",required:!1}},{key:"distanceAnchorCoordinateSelection",value:{name:"unknown[union]",raw:"(typeof RUNTIME_POINT_LABEL_COORDINATE_SELECTION)[keyof typeof RUNTIME_POINT_LABEL_COORDINATE_SELECTION]",required:!1}},{key:"distanceTriangleAnchorCoordinateRole",value:{name:"unknown[union]",raw:"(typeof RUNTIME_DISTANCE_TRIANGLE_ANCHOR_COORDINATE_ROLE)[keyof typeof RUNTIME_DISTANCE_TRIANGLE_ANCHOR_COORDINATE_ROLE]",required:!1}},{key:"closed",value:{name:"boolean",required:!1}},{key:"preferredNormalBearingRad",value:{name:"number",required:!1}},{key:"externalCollection",value:{name:"signature",type:"object",raw:`{
  type: "saved-measurement";
  id: string;
}`,signature:{properties:[{key:"type",value:{name:"literal",value:'"saved-measurement"',required:!0}},{key:"id",value:{name:"string",required:!0}}]},required:!1}},{key:"uuid",value:{name:"string",required:!1},description:"Identity across machines and shares; the runtime id only counts per session."},{key:"updatedAt",value:{name:"string",required:!1},description:"ISO time of the last content change, stamped by the persistence on save."}]},required:!0}},required:!0}}]},required:!0},name:"context"}],return:{name:"signature",type:"object",raw:`{
  toolType: AnnotationToolId;
  requestStart: () => void;
  requestFinish: () => boolean;
  discardDraft: () => void;
  onNodeCreated?: (
    coordinate: AnnotationGeographicCoordinate,
    linkedNodeGroupId?: AnnotationNodeLinkId | null,
    options?: { inputModifier?: AnnotationPointQueryInputModifier }
  ) => void;
  finishesOnLoopClosure?: boolean;
}`,signature:{properties:[{key:"toolType",value:{name:"AnnotationToolId",required:!0}},{key:"requestStart",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}},{key:"requestFinish",value:{name:"signature",type:"function",raw:"() => boolean",signature:{arguments:[],return:{name:"boolean"}},required:!0}},{key:"discardDraft",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}},{key:"onNodeCreated",value:{name:"signature",type:"function",raw:`(
  coordinate: AnnotationGeographicCoordinate,
  linkedNodeGroupId?: AnnotationNodeLinkId | null,
  options?: { inputModifier?: AnnotationPointQueryInputModifier }
) => void`,signature:{arguments:[{type:{name:"AnnotationGeographicCoordinate"},name:"coordinate"},{type:{name:"union",raw:"AnnotationNodeLinkId | null",elements:[{name:"string"},{name:"null"}]},name:"linkedNodeGroupId"},{type:{name:"signature",type:"object",raw:"{ inputModifier?: AnnotationPointQueryInputModifier }",signature:{properties:[{key:"inputModifier",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_POINT_QUERY_INPUT_MODIFIERS)[keyof typeof ANNOTATION_POINT_QUERY_INPUT_MODIFIERS]",required:!1}}]}},name:"options"}],return:{name:"void"}},required:!1}},{key:"finishesOnLoopClosure",value:{name:"boolean",required:!1}}]}}},required:!0}}]},required:!1}},{key:"pointQuery",value:{name:"signature",type:"object",raw:`{
  inputModifiers?: readonly AnnotationPointQueryInputModifier[];
  onPointCreated: (context: PointQueryCreatedContext) => void;
}`,signature:{properties:[{key:"inputModifiers",value:{name:"unknown",required:!1}},{key:"onPointCreated",value:{name:"signature",type:"function",raw:"(context: PointQueryCreatedContext) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  coordinate: AnnotationGeographicCoordinate;
  linkedNodeGroupId: AnnotationNodeLinkId | null;
  inputModifier?: AnnotationPointQueryInputModifier;
  activeToolType: AnnotationToolId;
  activeToolSession: AnnotationModeSession | null;
  toolSessions: AnnotationModeSessionMap;
  sessionContext: AnnotationToolSessionContext;
}`,signature:{properties:[{key:"coordinate",value:{name:"AnnotationGeographicCoordinate",required:!0}},{key:"linkedNodeGroupId",value:{name:"union",raw:"AnnotationNodeLinkId | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"inputModifier",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_POINT_QUERY_INPUT_MODIFIERS)[keyof typeof ANNOTATION_POINT_QUERY_INPUT_MODIFIERS]",required:!1}},{key:"activeToolType",value:{name:"AnnotationToolId",required:!0}},{key:"activeToolSession",value:{name:"union",raw:"AnnotationModeSession | null",elements:[{name:"signature",type:"object",raw:`{
  toolType: AnnotationToolId;
  requestStart: () => void;
  requestFinish: () => boolean;
  discardDraft: () => void;
  onNodeCreated?: (
    coordinate: AnnotationGeographicCoordinate,
    linkedNodeGroupId?: AnnotationNodeLinkId | null,
    options?: { inputModifier?: AnnotationPointQueryInputModifier }
  ) => void;
  finishesOnLoopClosure?: boolean;
}`,signature:{properties:[{key:"toolType",value:{name:"AnnotationToolId",required:!0}},{key:"requestStart",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}},{key:"requestFinish",value:{name:"signature",type:"function",raw:"() => boolean",signature:{arguments:[],return:{name:"boolean"}},required:!0}},{key:"discardDraft",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}},{key:"onNodeCreated",value:{name:"signature",type:"function",raw:`(
  coordinate: AnnotationGeographicCoordinate,
  linkedNodeGroupId?: AnnotationNodeLinkId | null,
  options?: { inputModifier?: AnnotationPointQueryInputModifier }
) => void`,signature:{arguments:[{type:{name:"AnnotationGeographicCoordinate"},name:"coordinate"},{type:{name:"union",raw:"AnnotationNodeLinkId | null",elements:[{name:"string"},{name:"null"}]},name:"linkedNodeGroupId"},{type:{name:"signature",type:"object",raw:"{ inputModifier?: AnnotationPointQueryInputModifier }",signature:{properties:[{key:"inputModifier",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_POINT_QUERY_INPUT_MODIFIERS)[keyof typeof ANNOTATION_POINT_QUERY_INPUT_MODIFIERS]",required:!1}}]}},name:"options"}],return:{name:"void"}},required:!1}},{key:"finishesOnLoopClosure",value:{name:"boolean",required:!1}}]}},{name:"null"}],required:!0}},{key:"toolSessions",value:{name:"Partial",elements:[{name:"Record",elements:[{name:"AnnotationToolId"},{name:"signature",type:"object",raw:`{
  toolType: AnnotationToolId;
  requestStart: () => void;
  requestFinish: () => boolean;
  discardDraft: () => void;
  onNodeCreated?: (
    coordinate: AnnotationGeographicCoordinate,
    linkedNodeGroupId?: AnnotationNodeLinkId | null,
    options?: { inputModifier?: AnnotationPointQueryInputModifier }
  ) => void;
  finishesOnLoopClosure?: boolean;
}`,signature:{properties:[{key:"toolType",value:{name:"AnnotationToolId",required:!0}},{key:"requestStart",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}},{key:"requestFinish",value:{name:"signature",type:"function",raw:"() => boolean",signature:{arguments:[],return:{name:"boolean"}},required:!0}},{key:"discardDraft",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}},{key:"onNodeCreated",value:{name:"signature",type:"function",raw:`(
  coordinate: AnnotationGeographicCoordinate,
  linkedNodeGroupId?: AnnotationNodeLinkId | null,
  options?: { inputModifier?: AnnotationPointQueryInputModifier }
) => void`,signature:{arguments:[{type:{name:"AnnotationGeographicCoordinate"},name:"coordinate"},{type:{name:"union",raw:"AnnotationNodeLinkId | null",elements:[{name:"string"},{name:"null"}]},name:"linkedNodeGroupId"},{type:{name:"signature",type:"object",raw:"{ inputModifier?: AnnotationPointQueryInputModifier }",signature:{properties:[{key:"inputModifier",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_POINT_QUERY_INPUT_MODIFIERS)[keyof typeof ANNOTATION_POINT_QUERY_INPUT_MODIFIERS]",required:!1}}]}},name:"options"}],return:{name:"void"}},required:!1}},{key:"finishesOnLoopClosure",value:{name:"boolean",required:!1}}]}}],raw:"Record<AnnotationToolId, AnnotationModeSession>"}],raw:`Partial<
  Record<AnnotationToolId, AnnotationModeSession>
>`,required:!0}},{key:"sessionContext",value:{name:"signature",type:"object",raw:`{
  getState: () => AnnotationsStoreState;
  dispatch: AnnotationsStore["dispatch"];
  setActiveToolType: (toolId: AnnotationToolId) => void;
  drafts: AnnotationToolDraftStore;
  requestLabelText?: AnnotationLabelTextRequester;
  addAnnotation: (
    annotationType: StoredAnnotation["toolType"],
    coordinates: readonly AnnotationGeographicCoordinate[],
    options?: AddAnnotationOptions,
    linkedNodeGroupIds?: readonly (AnnotationNodeLinkId | null | undefined)[],
    sourceToolId?: AnnotationToolId
  ) => StoredAnnotation;
}`,signature:{properties:[{key:"getState",value:{name:"signature",type:"function",raw:"() => AnnotationsStoreState",signature:{arguments:[],return:{name:"signature",type:"object",raw:`{
  annotationToolType: AnnotationToolId;
  selectionState: AnnotationSelectionStoreState;
  annotationEntries: readonly StoredAnnotation[];
  nodes: readonly AnnotationNode[];
  linkedNodeGroups: readonly AnnotationNodeLink[];
  edges: readonly AnnotationEdge[];
  infoBoxState: AnnotationInfoBoxStoreState;
  settingsState: AnnotationSettingsStoreState;
}`,signature:{properties:[{key:"annotationToolType",value:{name:"AnnotationToolId",required:!0}},{key:"selectionState",value:{name:"signature",type:"object",raw:`{
  selectedAnnotationIds: readonly string[];
  previousSelectedAnnotationId: string | null;
}`,signature:{properties:[{key:"selectedAnnotationIds",value:{name:"unknown",required:!0}},{key:"previousSelectedAnnotationId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]},required:!0}},{key:"annotationEntries",value:{name:"unknown",required:!0}},{key:"nodes",value:{name:"unknown",required:!0}},{key:"linkedNodeGroups",value:{name:"unknown",required:!0}},{key:"edges",value:{name:"unknown",required:!0}},{key:"infoBoxState",value:{name:"signature",type:"object",raw:`{
  activeAnnotationId: string | null;
}`,signature:{properties:[{key:"activeAnnotationId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]},required:!0}},{key:"settingsState",value:{name:"signature",type:"object",raw:`{
  pointTemporaryMode: boolean;
  elevationReferenceAnnotationId: string | null;
  nextShortLabelCounterByToolType: Readonly<Record<string, number>>;
}`,signature:{properties:[{key:"pointTemporaryMode",value:{name:"boolean",required:!0}},{key:"elevationReferenceAnnotationId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"nextShortLabelCounterByToolType",value:{name:"Readonly",elements:[{name:"Record",elements:[{name:"string"},{name:"number"}],raw:"Record<string, number>"}],raw:"Readonly<Record<string, number>>",required:!0}}]},required:!0}}]}}},required:!0}},{key:"dispatch",value:{name:'ReturnType["dispatch"]',raw:'AnnotationsStore["dispatch"]',required:!0}},{key:"setActiveToolType",value:{name:"signature",type:"function",raw:"(toolId: AnnotationToolId) => void",signature:{arguments:[{type:{name:"AnnotationToolId"},name:"toolId"}],return:{name:"void"}},required:!0}},{key:"drafts",value:{name:"signature",type:"object",raw:`{
  get: (toolId: AnnotationToolId) => AnnotationToolDraftState;
  set: (toolId: AnnotationToolId, draft: AnnotationToolDraftState) => void;
  clear: (toolId: AnnotationToolId) => void;
  subscribe: (toolId: AnnotationToolId, listener: () => void) => () => void;
}`,signature:{properties:[{key:"get",value:{name:"signature",type:"function",raw:"(toolId: AnnotationToolId) => AnnotationToolDraftState",signature:{arguments:[{type:{name:"AnnotationToolId"},name:"toolId"}],return:{name:"signature",type:"object",raw:`{
  coordinates: readonly AnnotationGeographicCoordinate[];
  linkedNodeGroupIds: readonly (AnnotationNodeLinkId | null)[];
  feedback?: {
    kind: "warning";
    message: string;
  } | null;
}`,signature:{properties:[{key:"coordinates",value:{name:"unknown",required:!0}},{key:"linkedNodeGroupIds",value:{name:"unknown",required:!0}},{key:"feedback",value:{name:"union",raw:`{
  kind: "warning";
  message: string;
} | null`,elements:[{name:"signature",type:"object",raw:`{
  kind: "warning";
  message: string;
}`,signature:{properties:[{key:"kind",value:{name:"literal",value:'"warning"',required:!0}},{key:"message",value:{name:"string",required:!0}}]}},{name:"null"}],required:!1}}]},required:!0}},required:!0}},{key:"set",value:{name:"signature",type:"function",raw:"(toolId: AnnotationToolId, draft: AnnotationToolDraftState) => void",signature:{arguments:[{type:{name:"AnnotationToolId"},name:"toolId"},{type:{name:"signature",type:"object",raw:`{
  coordinates: readonly AnnotationGeographicCoordinate[];
  linkedNodeGroupIds: readonly (AnnotationNodeLinkId | null)[];
  feedback?: {
    kind: "warning";
    message: string;
  } | null;
}`,signature:{properties:[{key:"coordinates",value:{name:"unknown",required:!0}},{key:"linkedNodeGroupIds",value:{name:"unknown",required:!0}},{key:"feedback",value:{name:"union",raw:`{
  kind: "warning";
  message: string;
} | null`,elements:[{name:"signature",type:"object",raw:`{
  kind: "warning";
  message: string;
}`,signature:{properties:[{key:"kind",value:{name:"literal",value:'"warning"',required:!0}},{key:"message",value:{name:"string",required:!0}}]}},{name:"null"}],required:!1}}]},required:!0},name:"draft"}],return:{name:"void"}},required:!0}},{key:"clear",value:{name:"signature",type:"function",raw:"(toolId: AnnotationToolId) => void",signature:{arguments:[{type:{name:"AnnotationToolId"},name:"toolId"}],return:{name:"void"}},required:!0}},{key:"subscribe",value:{name:"signature",type:"function",raw:"(toolId: AnnotationToolId, listener: () => void) => () => void",signature:{arguments:[{type:{name:"AnnotationToolId"},name:"toolId"},{type:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},name:"listener"}],return:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}}},required:!0}}]},required:!0}},{key:"requestLabelText",value:{name:"signature",type:"function",raw:`(
  context: AnnotationLabelTextRequestContext
) => string | null | Promise<string | null>`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  coordinate: AnnotationGeographicCoordinate;
  defaultText: string;
  labelTextSuggestions: readonly string[];
  linkedNodeGroupId?: AnnotationNodeLinkId | null;
}`,signature:{properties:[{key:"coordinate",value:{name:"AnnotationGeographicCoordinate",required:!0}},{key:"defaultText",value:{name:"string",required:!0}},{key:"labelTextSuggestions",value:{name:"unknown",required:!0}},{key:"linkedNodeGroupId",value:{name:"union",raw:"AnnotationNodeLinkId | null",elements:[{name:"string"},{name:"null"}],required:!1}}]}},name:"context"}],return:{name:"union",raw:"string | null | Promise<string | null>",elements:[{name:"string"},{name:"null"},{name:"Promise",elements:[{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]}],raw:"Promise<string | null>"}]}},required:!1}},{key:"addAnnotation",value:{name:"signature",type:"function",raw:`(
  annotationType: StoredAnnotation["toolType"],
  coordinates: readonly AnnotationGeographicCoordinate[],
  options?: AddAnnotationOptions,
  linkedNodeGroupIds?: readonly (AnnotationNodeLinkId | null | undefined)[],
  sourceToolId?: AnnotationToolId
) => StoredAnnotation`,signature:{arguments:[{type:{name:"AnnotationType",raw:'StoredAnnotation["toolType"]'},name:"annotationType"},{type:{name:"unknown"},name:"coordinates"},{type:{name:"Pick",elements:[{name:"signature",type:"object",raw:`{
  id: string;
  toolType: AnnotationType;
  nodeIds: readonly string[];
  edgeIds: readonly string[];
  displayName?: string;
  shortLabel?: string;
  shortLabelSource?: AnnotationShortLabelSource;
  shortLabelCounter?: number;
  hidden?: boolean;
  locked?: boolean;
  annotationRole?: AnnotationEntryRole;
  readOnly?: boolean;
  labelAppearance?: AnnotationLabelAppearance;
  elevationDisplayMode?: AnnotationElevationDisplayMode;
  distanceAnchorCoordinateSelection?: RuntimePointLabelCoordinateSelection;
  distanceTriangleAnchorCoordinateRole?: RuntimeDistanceTriangleAnchorCoordinateRole;
  closed?: boolean;
  preferredNormalBearingRad?: number;
  externalCollection?: {
    type: "saved-measurement";
    id: string;
  };
  /** Identity across machines and shares; the runtime id only counts per session. */
  uuid?: string;
  /** ISO time of the last content change, stamped by the persistence on save. */
  updatedAt?: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"toolType",value:{name:"AnnotationType",required:!0}},{key:"nodeIds",value:{name:"unknown",required:!0}},{key:"edgeIds",value:{name:"unknown",required:!0}},{key:"displayName",value:{name:"string",required:!1}},{key:"shortLabel",value:{name:"string",required:!1}},{key:"shortLabelSource",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_SHORT_LABEL_SOURCES)[keyof typeof ANNOTATION_SHORT_LABEL_SOURCES]",required:!1}},{key:"shortLabelCounter",value:{name:"number",required:!1}},{key:"hidden",value:{name:"boolean",required:!1}},{key:"locked",value:{name:"boolean",required:!1}},{key:"annotationRole",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_ENTRY_ROLES)[keyof typeof ANNOTATION_ENTRY_ROLES]",required:!1}},{key:"readOnly",value:{name:"boolean",required:!1}},{key:"labelAppearance",value:{name:"AnnotationLabelAppearance",required:!1}},{key:"elevationDisplayMode",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_ELEVATION_DISPLAY_MODES)[keyof typeof ANNOTATION_ELEVATION_DISPLAY_MODES]",required:!1}},{key:"distanceAnchorCoordinateSelection",value:{name:"unknown[union]",raw:"(typeof RUNTIME_POINT_LABEL_COORDINATE_SELECTION)[keyof typeof RUNTIME_POINT_LABEL_COORDINATE_SELECTION]",required:!1}},{key:"distanceTriangleAnchorCoordinateRole",value:{name:"unknown[union]",raw:"(typeof RUNTIME_DISTANCE_TRIANGLE_ANCHOR_COORDINATE_ROLE)[keyof typeof RUNTIME_DISTANCE_TRIANGLE_ANCHOR_COORDINATE_ROLE]",required:!1}},{key:"closed",value:{name:"boolean",required:!1}},{key:"preferredNormalBearingRad",value:{name:"number",required:!1}},{key:"externalCollection",value:{name:"signature",type:"object",raw:`{
  type: "saved-measurement";
  id: string;
}`,signature:{properties:[{key:"type",value:{name:"literal",value:'"saved-measurement"',required:!0}},{key:"id",value:{name:"string",required:!0}}]},required:!1}},{key:"uuid",value:{name:"string",required:!1},description:"Identity across machines and shares; the runtime id only counts per session."},{key:"updatedAt",value:{name:"string",required:!1},description:"ISO time of the last content change, stamped by the persistence on save."}]},required:!0},{name:"union",raw:`| "closed"
| "preferredNormalBearingRad"
| "displayName"
| "shortLabel"
| "shortLabelSource"
| "shortLabelCounter"
| "hidden"
| "locked"
| "labelAppearance"
| "elevationDisplayMode"
| "distanceAnchorCoordinateSelection"
| "distanceTriangleAnchorCoordinateRole"`,elements:[{name:"literal",value:'"closed"'},{name:"literal",value:'"preferredNormalBearingRad"'},{name:"literal",value:'"displayName"'},{name:"literal",value:'"shortLabel"'},{name:"literal",value:'"shortLabelSource"'},{name:"literal",value:'"shortLabelCounter"'},{name:"literal",value:'"hidden"'},{name:"literal",value:'"locked"'},{name:"literal",value:'"labelAppearance"'},{name:"literal",value:'"elevationDisplayMode"'},{name:"literal",value:'"distanceAnchorCoordinateSelection"'},{name:"literal",value:'"distanceTriangleAnchorCoordinateRole"'}]}],raw:`Pick<
  StoredAnnotation,
  | "closed"
  | "preferredNormalBearingRad"
  | "displayName"
  | "shortLabel"
  | "shortLabelSource"
  | "shortLabelCounter"
  | "hidden"
  | "locked"
  | "labelAppearance"
  | "elevationDisplayMode"
  | "distanceAnchorCoordinateSelection"
  | "distanceTriangleAnchorCoordinateRole"
>`,required:!1},name:"options"},{type:{name:"unknown"},name:"linkedNodeGroupIds"},{type:{name:"AnnotationToolId"},name:"sourceToolId"}],return:{name:"signature",type:"object",raw:`{
  id: string;
  toolType: AnnotationType;
  nodeIds: readonly string[];
  edgeIds: readonly string[];
  displayName?: string;
  shortLabel?: string;
  shortLabelSource?: AnnotationShortLabelSource;
  shortLabelCounter?: number;
  hidden?: boolean;
  locked?: boolean;
  annotationRole?: AnnotationEntryRole;
  readOnly?: boolean;
  labelAppearance?: AnnotationLabelAppearance;
  elevationDisplayMode?: AnnotationElevationDisplayMode;
  distanceAnchorCoordinateSelection?: RuntimePointLabelCoordinateSelection;
  distanceTriangleAnchorCoordinateRole?: RuntimeDistanceTriangleAnchorCoordinateRole;
  closed?: boolean;
  preferredNormalBearingRad?: number;
  externalCollection?: {
    type: "saved-measurement";
    id: string;
  };
  /** Identity across machines and shares; the runtime id only counts per session. */
  uuid?: string;
  /** ISO time of the last content change, stamped by the persistence on save. */
  updatedAt?: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"toolType",value:{name:"AnnotationType",required:!0}},{key:"nodeIds",value:{name:"unknown",required:!0}},{key:"edgeIds",value:{name:"unknown",required:!0}},{key:"displayName",value:{name:"string",required:!1}},{key:"shortLabel",value:{name:"string",required:!1}},{key:"shortLabelSource",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_SHORT_LABEL_SOURCES)[keyof typeof ANNOTATION_SHORT_LABEL_SOURCES]",required:!1}},{key:"shortLabelCounter",value:{name:"number",required:!1}},{key:"hidden",value:{name:"boolean",required:!1}},{key:"locked",value:{name:"boolean",required:!1}},{key:"annotationRole",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_ENTRY_ROLES)[keyof typeof ANNOTATION_ENTRY_ROLES]",required:!1}},{key:"readOnly",value:{name:"boolean",required:!1}},{key:"labelAppearance",value:{name:"AnnotationLabelAppearance",required:!1}},{key:"elevationDisplayMode",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_ELEVATION_DISPLAY_MODES)[keyof typeof ANNOTATION_ELEVATION_DISPLAY_MODES]",required:!1}},{key:"distanceAnchorCoordinateSelection",value:{name:"unknown[union]",raw:"(typeof RUNTIME_POINT_LABEL_COORDINATE_SELECTION)[keyof typeof RUNTIME_POINT_LABEL_COORDINATE_SELECTION]",required:!1}},{key:"distanceTriangleAnchorCoordinateRole",value:{name:"unknown[union]",raw:"(typeof RUNTIME_DISTANCE_TRIANGLE_ANCHOR_COORDINATE_ROLE)[keyof typeof RUNTIME_DISTANCE_TRIANGLE_ANCHOR_COORDINATE_ROLE]",required:!1}},{key:"closed",value:{name:"boolean",required:!1}},{key:"preferredNormalBearingRad",value:{name:"number",required:!1}},{key:"externalCollection",value:{name:"signature",type:"object",raw:`{
  type: "saved-measurement";
  id: string;
}`,signature:{properties:[{key:"type",value:{name:"literal",value:'"saved-measurement"',required:!0}},{key:"id",value:{name:"string",required:!0}}]},required:!1}},{key:"uuid",value:{name:"string",required:!1},description:"Identity across machines and shares; the runtime id only counts per session."},{key:"updatedAt",value:{name:"string",required:!1},description:"ISO time of the last content change, stamped by the persistence on save."}]},required:!0}},required:!0}}]},required:!0}}]}},name:"context"}],return:{name:"void"}},required:!0}}]},required:!1}},{key:"addAnnotation",value:{name:"signature",type:"object",raw:`{
  resolveOptions: (
    context: AnnotationToolAddAnnotationContext
  ) => AddAnnotationOptions | undefined;
}`,signature:{properties:[{key:"resolveOptions",value:{name:"signature",type:"function",raw:`(
  context: AnnotationToolAddAnnotationContext
) => AddAnnotationOptions | undefined`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  annotationType: StoredAnnotation["toolType"];
  toolId: AnnotationToolId | null;
  engine: AnnotationEngine | null;
  coordinates: readonly AnnotationGeographicCoordinate[];
  options?: AddAnnotationOptions;
  linkedNodeGroupIds?: readonly (AnnotationNodeLinkId | null | undefined)[];
}`,signature:{properties:[{key:"annotationType",value:{name:"AnnotationType",raw:'StoredAnnotation["toolType"]',required:!0}},{key:"toolId",value:{name:"union",raw:"AnnotationToolId | null",elements:[{name:"AnnotationToolId"},{name:"null"}],required:!0}},{key:"engine",value:{name:"union",raw:"AnnotationEngine | null",elements:[{name:"AnnotationEngine"},{name:"null"}],required:!0}},{key:"coordinates",value:{name:"unknown",required:!0}},{key:"options",value:{name:"Pick",elements:[{name:"signature",type:"object",raw:`{
  id: string;
  toolType: AnnotationType;
  nodeIds: readonly string[];
  edgeIds: readonly string[];
  displayName?: string;
  shortLabel?: string;
  shortLabelSource?: AnnotationShortLabelSource;
  shortLabelCounter?: number;
  hidden?: boolean;
  locked?: boolean;
  annotationRole?: AnnotationEntryRole;
  readOnly?: boolean;
  labelAppearance?: AnnotationLabelAppearance;
  elevationDisplayMode?: AnnotationElevationDisplayMode;
  distanceAnchorCoordinateSelection?: RuntimePointLabelCoordinateSelection;
  distanceTriangleAnchorCoordinateRole?: RuntimeDistanceTriangleAnchorCoordinateRole;
  closed?: boolean;
  preferredNormalBearingRad?: number;
  externalCollection?: {
    type: "saved-measurement";
    id: string;
  };
  /** Identity across machines and shares; the runtime id only counts per session. */
  uuid?: string;
  /** ISO time of the last content change, stamped by the persistence on save. */
  updatedAt?: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"toolType",value:{name:"AnnotationType",required:!0}},{key:"nodeIds",value:{name:"unknown",required:!0}},{key:"edgeIds",value:{name:"unknown",required:!0}},{key:"displayName",value:{name:"string",required:!1}},{key:"shortLabel",value:{name:"string",required:!1}},{key:"shortLabelSource",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_SHORT_LABEL_SOURCES)[keyof typeof ANNOTATION_SHORT_LABEL_SOURCES]",required:!1}},{key:"shortLabelCounter",value:{name:"number",required:!1}},{key:"hidden",value:{name:"boolean",required:!1}},{key:"locked",value:{name:"boolean",required:!1}},{key:"annotationRole",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_ENTRY_ROLES)[keyof typeof ANNOTATION_ENTRY_ROLES]",required:!1}},{key:"readOnly",value:{name:"boolean",required:!1}},{key:"labelAppearance",value:{name:"AnnotationLabelAppearance",required:!1}},{key:"elevationDisplayMode",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_ELEVATION_DISPLAY_MODES)[keyof typeof ANNOTATION_ELEVATION_DISPLAY_MODES]",required:!1}},{key:"distanceAnchorCoordinateSelection",value:{name:"unknown[union]",raw:"(typeof RUNTIME_POINT_LABEL_COORDINATE_SELECTION)[keyof typeof RUNTIME_POINT_LABEL_COORDINATE_SELECTION]",required:!1}},{key:"distanceTriangleAnchorCoordinateRole",value:{name:"unknown[union]",raw:"(typeof RUNTIME_DISTANCE_TRIANGLE_ANCHOR_COORDINATE_ROLE)[keyof typeof RUNTIME_DISTANCE_TRIANGLE_ANCHOR_COORDINATE_ROLE]",required:!1}},{key:"closed",value:{name:"boolean",required:!1}},{key:"preferredNormalBearingRad",value:{name:"number",required:!1}},{key:"externalCollection",value:{name:"signature",type:"object",raw:`{
  type: "saved-measurement";
  id: string;
}`,signature:{properties:[{key:"type",value:{name:"literal",value:'"saved-measurement"',required:!0}},{key:"id",value:{name:"string",required:!0}}]},required:!1}},{key:"uuid",value:{name:"string",required:!1},description:"Identity across machines and shares; the runtime id only counts per session."},{key:"updatedAt",value:{name:"string",required:!1},description:"ISO time of the last content change, stamped by the persistence on save."}]},required:!0},{name:"union",raw:`| "closed"
| "preferredNormalBearingRad"
| "displayName"
| "shortLabel"
| "shortLabelSource"
| "shortLabelCounter"
| "hidden"
| "locked"
| "labelAppearance"
| "elevationDisplayMode"
| "distanceAnchorCoordinateSelection"
| "distanceTriangleAnchorCoordinateRole"`,elements:[{name:"literal",value:'"closed"'},{name:"literal",value:'"preferredNormalBearingRad"'},{name:"literal",value:'"displayName"'},{name:"literal",value:'"shortLabel"'},{name:"literal",value:'"shortLabelSource"'},{name:"literal",value:'"shortLabelCounter"'},{name:"literal",value:'"hidden"'},{name:"literal",value:'"locked"'},{name:"literal",value:'"labelAppearance"'},{name:"literal",value:'"elevationDisplayMode"'},{name:"literal",value:'"distanceAnchorCoordinateSelection"'},{name:"literal",value:'"distanceTriangleAnchorCoordinateRole"'}]}],raw:`Pick<
  StoredAnnotation,
  | "closed"
  | "preferredNormalBearingRad"
  | "displayName"
  | "shortLabel"
  | "shortLabelSource"
  | "shortLabelCounter"
  | "hidden"
  | "locked"
  | "labelAppearance"
  | "elevationDisplayMode"
  | "distanceAnchorCoordinateSelection"
  | "distanceTriangleAnchorCoordinateRole"
>`,required:!1}},{key:"linkedNodeGroupIds",value:{name:"unknown",required:!1}}]}},name:"context"}],return:{name:"union",raw:"AddAnnotationOptions | undefined",elements:[{name:"Pick",elements:[{name:"signature",type:"object",raw:`{
  id: string;
  toolType: AnnotationType;
  nodeIds: readonly string[];
  edgeIds: readonly string[];
  displayName?: string;
  shortLabel?: string;
  shortLabelSource?: AnnotationShortLabelSource;
  shortLabelCounter?: number;
  hidden?: boolean;
  locked?: boolean;
  annotationRole?: AnnotationEntryRole;
  readOnly?: boolean;
  labelAppearance?: AnnotationLabelAppearance;
  elevationDisplayMode?: AnnotationElevationDisplayMode;
  distanceAnchorCoordinateSelection?: RuntimePointLabelCoordinateSelection;
  distanceTriangleAnchorCoordinateRole?: RuntimeDistanceTriangleAnchorCoordinateRole;
  closed?: boolean;
  preferredNormalBearingRad?: number;
  externalCollection?: {
    type: "saved-measurement";
    id: string;
  };
  /** Identity across machines and shares; the runtime id only counts per session. */
  uuid?: string;
  /** ISO time of the last content change, stamped by the persistence on save. */
  updatedAt?: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"toolType",value:{name:"AnnotationType",required:!0}},{key:"nodeIds",value:{name:"unknown",required:!0}},{key:"edgeIds",value:{name:"unknown",required:!0}},{key:"displayName",value:{name:"string",required:!1}},{key:"shortLabel",value:{name:"string",required:!1}},{key:"shortLabelSource",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_SHORT_LABEL_SOURCES)[keyof typeof ANNOTATION_SHORT_LABEL_SOURCES]",required:!1}},{key:"shortLabelCounter",value:{name:"number",required:!1}},{key:"hidden",value:{name:"boolean",required:!1}},{key:"locked",value:{name:"boolean",required:!1}},{key:"annotationRole",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_ENTRY_ROLES)[keyof typeof ANNOTATION_ENTRY_ROLES]",required:!1}},{key:"readOnly",value:{name:"boolean",required:!1}},{key:"labelAppearance",value:{name:"AnnotationLabelAppearance",required:!1}},{key:"elevationDisplayMode",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_ELEVATION_DISPLAY_MODES)[keyof typeof ANNOTATION_ELEVATION_DISPLAY_MODES]",required:!1}},{key:"distanceAnchorCoordinateSelection",value:{name:"unknown[union]",raw:"(typeof RUNTIME_POINT_LABEL_COORDINATE_SELECTION)[keyof typeof RUNTIME_POINT_LABEL_COORDINATE_SELECTION]",required:!1}},{key:"distanceTriangleAnchorCoordinateRole",value:{name:"unknown[union]",raw:"(typeof RUNTIME_DISTANCE_TRIANGLE_ANCHOR_COORDINATE_ROLE)[keyof typeof RUNTIME_DISTANCE_TRIANGLE_ANCHOR_COORDINATE_ROLE]",required:!1}},{key:"closed",value:{name:"boolean",required:!1}},{key:"preferredNormalBearingRad",value:{name:"number",required:!1}},{key:"externalCollection",value:{name:"signature",type:"object",raw:`{
  type: "saved-measurement";
  id: string;
}`,signature:{properties:[{key:"type",value:{name:"literal",value:'"saved-measurement"',required:!0}},{key:"id",value:{name:"string",required:!0}}]},required:!1}},{key:"uuid",value:{name:"string",required:!1},description:"Identity across machines and shares; the runtime id only counts per session."},{key:"updatedAt",value:{name:"string",required:!1},description:"ISO time of the last content change, stamped by the persistence on save."}]},required:!0},{name:"union",raw:`| "closed"
| "preferredNormalBearingRad"
| "displayName"
| "shortLabel"
| "shortLabelSource"
| "shortLabelCounter"
| "hidden"
| "locked"
| "labelAppearance"
| "elevationDisplayMode"
| "distanceAnchorCoordinateSelection"
| "distanceTriangleAnchorCoordinateRole"`,elements:[{name:"literal",value:'"closed"'},{name:"literal",value:'"preferredNormalBearingRad"'},{name:"literal",value:'"displayName"'},{name:"literal",value:'"shortLabel"'},{name:"literal",value:'"shortLabelSource"'},{name:"literal",value:'"shortLabelCounter"'},{name:"literal",value:'"hidden"'},{name:"literal",value:'"locked"'},{name:"literal",value:'"labelAppearance"'},{name:"literal",value:'"elevationDisplayMode"'},{name:"literal",value:'"distanceAnchorCoordinateSelection"'},{name:"literal",value:'"distanceTriangleAnchorCoordinateRole"'}]}],raw:`Pick<
  StoredAnnotation,
  | "closed"
  | "preferredNormalBearingRad"
  | "displayName"
  | "shortLabel"
  | "shortLabelSource"
  | "shortLabelCounter"
  | "hidden"
  | "locked"
  | "labelAppearance"
  | "elevationDisplayMode"
  | "distanceAnchorCoordinateSelection"
  | "distanceTriangleAnchorCoordinateRole"
>`,required:!1},{name:"undefined"}]}},required:!0}}]},required:!1}},{key:"authoringVisuals",value:{name:"signature",type:"object",raw:`{
  createController: (
    context: AnnotationToolAuthoringContext
  ) => AnnotationToolAuthoringController | null;
}`,signature:{properties:[{key:"createController",value:{name:"signature",type:"function",raw:`(
  context: AnnotationToolAuthoringContext
) => AnnotationToolAuthoringController | null`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  engine: AnnotationEngine | null;
  annotationsStore: AnnotationsStore;
  drafts: AnnotationToolDraftStore;
  labelOverlay: LabelOverlayContextType;
  requestRender: () => void;
  formatOptions: AnnotationsRuntimeFormatOptions;
  lineLabelOptions: PartialAnnotationLineLabelOptions;
}`,signature:{properties:[{key:"engine",value:{name:"union",raw:"AnnotationEngine | null",elements:[{name:"AnnotationEngine"},{name:"null"}],required:!0}},{key:"annotationsStore",value:{name:"ReturnType",elements:[{name:"createAnnotationsStore"}],raw:"ReturnType<typeof createAnnotationsStore>",required:!0}},{key:"drafts",value:{name:"signature",type:"object",raw:`{
  get: (toolId: AnnotationToolId) => AnnotationToolDraftState;
  set: (toolId: AnnotationToolId, draft: AnnotationToolDraftState) => void;
  clear: (toolId: AnnotationToolId) => void;
  subscribe: (toolId: AnnotationToolId, listener: () => void) => () => void;
}`,signature:{properties:[{key:"get",value:{name:"signature",type:"function",raw:"(toolId: AnnotationToolId) => AnnotationToolDraftState",signature:{arguments:[{type:{name:"AnnotationToolId"},name:"toolId"}],return:{name:"signature",type:"object",raw:`{
  coordinates: readonly AnnotationGeographicCoordinate[];
  linkedNodeGroupIds: readonly (AnnotationNodeLinkId | null)[];
  feedback?: {
    kind: "warning";
    message: string;
  } | null;
}`,signature:{properties:[{key:"coordinates",value:{name:"unknown",required:!0}},{key:"linkedNodeGroupIds",value:{name:"unknown",required:!0}},{key:"feedback",value:{name:"union",raw:`{
  kind: "warning";
  message: string;
} | null`,elements:[{name:"signature",type:"object",raw:`{
  kind: "warning";
  message: string;
}`,signature:{properties:[{key:"kind",value:{name:"literal",value:'"warning"',required:!0}},{key:"message",value:{name:"string",required:!0}}]}},{name:"null"}],required:!1}}]},required:!0}},required:!0}},{key:"set",value:{name:"signature",type:"function",raw:"(toolId: AnnotationToolId, draft: AnnotationToolDraftState) => void",signature:{arguments:[{type:{name:"AnnotationToolId"},name:"toolId"},{type:{name:"signature",type:"object",raw:`{
  coordinates: readonly AnnotationGeographicCoordinate[];
  linkedNodeGroupIds: readonly (AnnotationNodeLinkId | null)[];
  feedback?: {
    kind: "warning";
    message: string;
  } | null;
}`,signature:{properties:[{key:"coordinates",value:{name:"unknown",required:!0}},{key:"linkedNodeGroupIds",value:{name:"unknown",required:!0}},{key:"feedback",value:{name:"union",raw:`{
  kind: "warning";
  message: string;
} | null`,elements:[{name:"signature",type:"object",raw:`{
  kind: "warning";
  message: string;
}`,signature:{properties:[{key:"kind",value:{name:"literal",value:'"warning"',required:!0}},{key:"message",value:{name:"string",required:!0}}]}},{name:"null"}],required:!1}}]},required:!0},name:"draft"}],return:{name:"void"}},required:!0}},{key:"clear",value:{name:"signature",type:"function",raw:"(toolId: AnnotationToolId) => void",signature:{arguments:[{type:{name:"AnnotationToolId"},name:"toolId"}],return:{name:"void"}},required:!0}},{key:"subscribe",value:{name:"signature",type:"function",raw:"(toolId: AnnotationToolId, listener: () => void) => () => void",signature:{arguments:[{type:{name:"AnnotationToolId"},name:"toolId"},{type:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},name:"listener"}],return:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}}},required:!0}}]},required:!0}},{key:"labelOverlay",value:{name:"LabelOverlayContextType",required:!0}},{key:"requestRender",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}},{key:"formatOptions",value:{name:"signature",type:"object",raw:`{
  lengthMeters?: FormatLengthMetersOptions;
  areaSquareMeters?: FormatAreaSquareMetersAdaptiveOptions;
  degrees?: FormatDegreesOptions;
  geographicCoordinate?: GeographicCoordinateFormatOptions;
  decimalNumber?: FormatDecimalNumberOptions;
}`,signature:{properties:[{key:"lengthMeters",value:{name:"FormatLengthMetersOptions",required:!1}},{key:"areaSquareMeters",value:{name:"FormatAreaSquareMetersAdaptiveOptions",required:!1}},{key:"degrees",value:{name:"FormatDegreesOptions",required:!1}},{key:"geographicCoordinate",value:{name:"GeographicCoordinateFormatOptions",required:!1}},{key:"decimalNumber",value:{name:"FormatDecimalNumberOptions",required:!1}}]},required:!0}},{key:"lineLabelOptions",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  appearance?: Partial<AnnotationLineLabelAppearanceOptions>;
  text?: Partial<
    Omit<AnnotationLineLabelTextOptions, "echo"> & {
      echo?: Partial<AnnotationLineLabelTextEchoOptions>;
    }
  >;
  background?: Partial<AnnotationLineLabelBackgroundOptions>;
  surface?: Partial<AnnotationLineLabelSurfaceOptions>;
  layout?: Partial<AnnotationLineLabelLayoutOptions>;
  collision?: Partial<AnnotationLineLabelCollisionOptions>;
}`,signature:{properties:[{key:"appearance",value:{name:"Partial",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  themeStyle: AnnotationThemeStyle;
}`,signature:{properties:[{key:"themeStyle",value:{name:"unknown[unknown]",raw:"(typeof ANNOTATION_THEME.style)[keyof typeof ANNOTATION_THEME.style]",required:!0}}]}}],raw:`Readonly<{
  themeStyle: AnnotationThemeStyle;
}>`}],raw:"Partial<AnnotationLineLabelAppearanceOptions>",required:!1}},{key:"text",value:{name:"Partial",elements:[{name:"intersection",raw:`Omit<AnnotationLineLabelTextOptions, "echo"> & {
  echo?: Partial<AnnotationLineLabelTextEchoOptions>;
}`,elements:[{name:"Omit",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fontFamily: string;
  fontWeight: string | number;
  color?: string;
  blendMode?: CssMixBlendMode;
  echo?: AnnotationLineLabelTextEchoOptions;
}`,signature:{properties:[{key:"fontFamily",value:{name:"string",required:!0}},{key:"fontWeight",value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!0}},{key:"color",value:{name:"string",required:!1}},{key:"blendMode",value:{name:"CssMixBlendMode",required:!1}},{key:"echo",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  color?: string;
  blurPx?: number;
  opacity?: number;
  blendMode?: CssMixBlendMode;
}`,signature:{properties:[{key:"color",value:{name:"string",required:!1}},{key:"blurPx",value:{name:"number",required:!1}},{key:"opacity",value:{name:"number",required:!1}},{key:"blendMode",value:{name:"CssMixBlendMode",required:!1}}]}}],raw:`Readonly<{
  color?: string;
  blurPx?: number;
  opacity?: number;
  blendMode?: CssMixBlendMode;
}>`,required:!1}}]}}],raw:`Readonly<{
  fontFamily: string;
  fontWeight: string | number;
  color?: string;
  blendMode?: CssMixBlendMode;
  echo?: AnnotationLineLabelTextEchoOptions;
}>`},{name:"literal",value:'"echo"'}],raw:'Omit<AnnotationLineLabelTextOptions, "echo">'},{name:"signature",type:"object",raw:`{
  echo?: Partial<AnnotationLineLabelTextEchoOptions>;
}`,signature:{properties:[{key:"echo",value:{name:"Partial",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  color?: string;
  blurPx?: number;
  opacity?: number;
  blendMode?: CssMixBlendMode;
}`,signature:{properties:[{key:"color",value:{name:"string",required:!1}},{key:"blurPx",value:{name:"number",required:!1}},{key:"opacity",value:{name:"number",required:!1}},{key:"blendMode",value:{name:"CssMixBlendMode",required:!1}}]}}],raw:`Readonly<{
  color?: string;
  blurPx?: number;
  opacity?: number;
  blendMode?: CssMixBlendMode;
}>`,required:!1}],raw:"Partial<AnnotationLineLabelTextEchoOptions>",required:!1}}]}}]}],raw:`Partial<
  Omit<AnnotationLineLabelTextOptions, "echo"> & {
    echo?: Partial<AnnotationLineLabelTextEchoOptions>;
  }
>`,required:!1}},{key:"background",value:{name:"Partial",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  style: AnnotationLineLabelBackgroundStyle;
  showBackdrop?: boolean;
  color?: string;
  blendMode?: CssMixBlendMode;
  blurPx?: number;
  brightnessPct?: number;
  saturatePct?: number;
  surfaceAlpha?: number;
  radiusEx?: number;
  edgeBlurPx?: number;
  insetBlockEx?: number;
  insetInlineEx?: number;
}`,signature:{properties:[{key:"style",value:{name:"unknown[unknown]",raw:"(typeof ANNOTATION_THEME.lineLabel.backgroundStyle)[keyof typeof ANNOTATION_THEME.lineLabel.backgroundStyle]",required:!0}},{key:"showBackdrop",value:{name:"boolean",required:!1}},{key:"color",value:{name:"string",required:!1}},{key:"blendMode",value:{name:"CssMixBlendMode",required:!1}},{key:"blurPx",value:{name:"number",required:!1}},{key:"brightnessPct",value:{name:"number",required:!1}},{key:"saturatePct",value:{name:"number",required:!1}},{key:"surfaceAlpha",value:{name:"number",required:!1}},{key:"radiusEx",value:{name:"number",required:!1}},{key:"edgeBlurPx",value:{name:"number",required:!1}},{key:"insetBlockEx",value:{name:"number",required:!1}},{key:"insetInlineEx",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  style: AnnotationLineLabelBackgroundStyle;
  showBackdrop?: boolean;
  color?: string;
  blendMode?: CssMixBlendMode;
  blurPx?: number;
  brightnessPct?: number;
  saturatePct?: number;
  surfaceAlpha?: number;
  radiusEx?: number;
  edgeBlurPx?: number;
  insetBlockEx?: number;
  insetInlineEx?: number;
}>`}],raw:"Partial<AnnotationLineLabelBackgroundOptions>",required:!1}},{key:"surface",value:{name:"Partial",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  blendMode?: CssMixBlendMode;
  paddingBlockEx?: number;
  paddingInlineEx?: number;
}`,signature:{properties:[{key:"blendMode",value:{name:"CssMixBlendMode",required:!1}},{key:"paddingBlockEx",value:{name:"number",required:!1}},{key:"paddingInlineEx",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  blendMode?: CssMixBlendMode;
  paddingBlockEx?: number;
  paddingInlineEx?: number;
}>`}],raw:"Partial<AnnotationLineLabelSurfaceOptions>",required:!1}},{key:"layout",value:{name:"Partial",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  shortEdgeOffsetPx: number;
}`,signature:{properties:[{key:"shortEdgeOffsetPx",value:{name:"number",required:!0}}]}}],raw:`Readonly<{
  shortEdgeOffsetPx: number;
}>`}],raw:"Partial<AnnotationLineLabelLayoutOptions>",required:!1}},{key:"collision",value:{name:"Partial",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  allowEarlyRemoval: boolean;
  resolutionStrategy: AnnotationLineLabelCollisionResolutionStrategy;
  anchorSlideStepRatio: number;
  maxAnchorSlideDeltaRatio: number;
}`,signature:{properties:[{key:"allowEarlyRemoval",value:{name:"boolean",required:!0}},{key:"resolutionStrategy",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_LINE_LABEL_COLLISION_RESOLUTION_STRATEGY)[keyof typeof ANNOTATION_LINE_LABEL_COLLISION_RESOLUTION_STRATEGY]",required:!0}},{key:"anchorSlideStepRatio",value:{name:"number",required:!0}},{key:"maxAnchorSlideDeltaRatio",value:{name:"number",required:!0}}]}}],raw:`Readonly<{
  allowEarlyRemoval: boolean;
  resolutionStrategy: AnnotationLineLabelCollisionResolutionStrategy;
  anchorSlideStepRatio: number;
  maxAnchorSlideDeltaRatio: number;
}>`}],raw:"Partial<AnnotationLineLabelCollisionOptions>",required:!1}}]}}],raw:`Readonly<{
  appearance?: Partial<AnnotationLineLabelAppearanceOptions>;
  text?: Partial<
    Omit<AnnotationLineLabelTextOptions, "echo"> & {
      echo?: Partial<AnnotationLineLabelTextEchoOptions>;
    }
  >;
  background?: Partial<AnnotationLineLabelBackgroundOptions>;
  surface?: Partial<AnnotationLineLabelSurfaceOptions>;
  layout?: Partial<AnnotationLineLabelLayoutOptions>;
  collision?: Partial<AnnotationLineLabelCollisionOptions>;
}>`,required:!0}}]}},name:"context"}],return:{name:"union",raw:"AnnotationToolAuthoringController | null",elements:[{name:"signature",type:"object",raw:`{
  setEnabled: (enabled: boolean) => void;
  setPointQueryPickResult: (
    pickResult: PointQueryPickResult | null,
    options?: { requestRender?: boolean }
  ) => void;
  isPointQueryPickResultAcceptable?: () => boolean;
  getPointQueryVisualStyle?: () => AnnotationPointQueryVisualStyle | undefined;
  destroy: () => void;
}`,signature:{properties:[{key:"setEnabled",value:{name:"signature",type:"function",raw:"(enabled: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"enabled"}],return:{name:"void"}},required:!0}},{key:"setPointQueryPickResult",value:{name:"signature",type:"function",raw:`(
  pickResult: PointQueryPickResult | null,
  options?: { requestRender?: boolean }
) => void`,signature:{arguments:[{type:{name:"union",raw:"PointQueryPickResult | null",elements:[{name:"signature",type:"object",raw:`{
  coordinate: AnnotationGeographicCoordinate | null;
  screenPosition: { x: number; y: number } | null;
  pointECEF: Vector3 | null;
  surfaceNormalECEF: Vector3 | null;
  inputModifier?: AnnotationPointQueryInputModifier;
}`,signature:{properties:[{key:"coordinate",value:{name:"union",raw:"AnnotationGeographicCoordinate | null",elements:[{name:"AnnotationGeographicCoordinate"},{name:"null"}],required:!0}},{key:"screenPosition",value:{name:"union",raw:"{ x: number; y: number } | null",elements:[{name:"signature",type:"object",raw:"{ x: number; y: number }",signature:{properties:[{key:"x",value:{name:"number",required:!0}},{key:"y",value:{name:"number",required:!0}}]}},{name:"null"}],required:!0}},{key:"pointECEF",value:{name:"union",raw:"Vector3 | null",elements:[{name:"Vector3"},{name:"null"}],required:!0}},{key:"surfaceNormalECEF",value:{name:"union",raw:"Vector3 | null",elements:[{name:"Vector3"},{name:"null"}],required:!0}},{key:"inputModifier",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_POINT_QUERY_INPUT_MODIFIERS)[keyof typeof ANNOTATION_POINT_QUERY_INPUT_MODIFIERS]",required:!1}}]}},{name:"null"}]},name:"pickResult"},{type:{name:"signature",type:"object",raw:"{ requestRender?: boolean }",signature:{properties:[{key:"requestRender",value:{name:"boolean",required:!1}}]}},name:"options"}],return:{name:"void"}},required:!0}},{key:"isPointQueryPickResultAcceptable",value:{name:"signature",type:"function",raw:"() => boolean",signature:{arguments:[],return:{name:"boolean"}},required:!1}},{key:"getPointQueryVisualStyle",value:{name:"signature",type:"function",raw:"() => AnnotationPointQueryVisualStyle | undefined",signature:{arguments:[],return:{name:"union",raw:"AnnotationPointQueryVisualStyle | undefined",elements:[{name:"union",raw:`Readonly<{
  color?: string;
  opacity?: number;
}> | null`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  color?: string;
  opacity?: number;
}`,signature:{properties:[{key:"color",value:{name:"string",required:!1}},{key:"opacity",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  color?: string;
  opacity?: number;
}>`},{name:"null"}]},{name:"undefined"}]}},required:!1}},{key:"destroy",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}}]}},{name:"null"}]}},required:!0}}]},required:!1}},{key:"keyboard",value:{name:"signature",type:"object",raw:`{
  onKeyDown: (context: AnnotationToolKeyboardContext) => boolean;
}`,signature:{properties:[{key:"onKeyDown",value:{name:"signature",type:"function",raw:"(context: AnnotationToolKeyboardContext) => boolean",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  event: KeyboardEvent;
  activeToolType: AnnotationToolId;
  activeToolSession: AnnotationModeSession | null;
  requestFinishMeasurement: () => boolean;
  requestActivateTool: (toolId?: AnnotationToolId) => void;
  requestModeChange: (toolId: AnnotationToolId) => void;
  sessionContext: AnnotationToolSessionContext;
}`,signature:{properties:[{key:"event",value:{name:"KeyboardEvent",required:!0}},{key:"activeToolType",value:{name:"AnnotationToolId",required:!0}},{key:"activeToolSession",value:{name:"union",raw:"AnnotationModeSession | null",elements:[{name:"signature",type:"object",raw:`{
  toolType: AnnotationToolId;
  requestStart: () => void;
  requestFinish: () => boolean;
  discardDraft: () => void;
  onNodeCreated?: (
    coordinate: AnnotationGeographicCoordinate,
    linkedNodeGroupId?: AnnotationNodeLinkId | null,
    options?: { inputModifier?: AnnotationPointQueryInputModifier }
  ) => void;
  finishesOnLoopClosure?: boolean;
}`,signature:{properties:[{key:"toolType",value:{name:"AnnotationToolId",required:!0}},{key:"requestStart",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}},{key:"requestFinish",value:{name:"signature",type:"function",raw:"() => boolean",signature:{arguments:[],return:{name:"boolean"}},required:!0}},{key:"discardDraft",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}},{key:"onNodeCreated",value:{name:"signature",type:"function",raw:`(
  coordinate: AnnotationGeographicCoordinate,
  linkedNodeGroupId?: AnnotationNodeLinkId | null,
  options?: { inputModifier?: AnnotationPointQueryInputModifier }
) => void`,signature:{arguments:[{type:{name:"AnnotationGeographicCoordinate"},name:"coordinate"},{type:{name:"union",raw:"AnnotationNodeLinkId | null",elements:[{name:"string"},{name:"null"}]},name:"linkedNodeGroupId"},{type:{name:"signature",type:"object",raw:"{ inputModifier?: AnnotationPointQueryInputModifier }",signature:{properties:[{key:"inputModifier",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_POINT_QUERY_INPUT_MODIFIERS)[keyof typeof ANNOTATION_POINT_QUERY_INPUT_MODIFIERS]",required:!1}}]}},name:"options"}],return:{name:"void"}},required:!1}},{key:"finishesOnLoopClosure",value:{name:"boolean",required:!1}}]}},{name:"null"}],required:!0}},{key:"requestFinishMeasurement",value:{name:"signature",type:"function",raw:"() => boolean",signature:{arguments:[],return:{name:"boolean"}},required:!0}},{key:"requestActivateTool",value:{name:"signature",type:"function",raw:"(toolId?: AnnotationToolId) => void",signature:{arguments:[{type:{name:"AnnotationToolId"},name:"toolId"}],return:{name:"void"}},required:!0}},{key:"requestModeChange",value:{name:"signature",type:"function",raw:"(toolId: AnnotationToolId) => void",signature:{arguments:[{type:{name:"AnnotationToolId"},name:"toolId"}],return:{name:"void"}},required:!0}},{key:"sessionContext",value:{name:"signature",type:"object",raw:`{
  getState: () => AnnotationsStoreState;
  dispatch: AnnotationsStore["dispatch"];
  setActiveToolType: (toolId: AnnotationToolId) => void;
  drafts: AnnotationToolDraftStore;
  requestLabelText?: AnnotationLabelTextRequester;
  addAnnotation: (
    annotationType: StoredAnnotation["toolType"],
    coordinates: readonly AnnotationGeographicCoordinate[],
    options?: AddAnnotationOptions,
    linkedNodeGroupIds?: readonly (AnnotationNodeLinkId | null | undefined)[],
    sourceToolId?: AnnotationToolId
  ) => StoredAnnotation;
}`,signature:{properties:[{key:"getState",value:{name:"signature",type:"function",raw:"() => AnnotationsStoreState",signature:{arguments:[],return:{name:"signature",type:"object",raw:`{
  annotationToolType: AnnotationToolId;
  selectionState: AnnotationSelectionStoreState;
  annotationEntries: readonly StoredAnnotation[];
  nodes: readonly AnnotationNode[];
  linkedNodeGroups: readonly AnnotationNodeLink[];
  edges: readonly AnnotationEdge[];
  infoBoxState: AnnotationInfoBoxStoreState;
  settingsState: AnnotationSettingsStoreState;
}`,signature:{properties:[{key:"annotationToolType",value:{name:"AnnotationToolId",required:!0}},{key:"selectionState",value:{name:"signature",type:"object",raw:`{
  selectedAnnotationIds: readonly string[];
  previousSelectedAnnotationId: string | null;
}`,signature:{properties:[{key:"selectedAnnotationIds",value:{name:"unknown",required:!0}},{key:"previousSelectedAnnotationId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]},required:!0}},{key:"annotationEntries",value:{name:"unknown",required:!0}},{key:"nodes",value:{name:"unknown",required:!0}},{key:"linkedNodeGroups",value:{name:"unknown",required:!0}},{key:"edges",value:{name:"unknown",required:!0}},{key:"infoBoxState",value:{name:"signature",type:"object",raw:`{
  activeAnnotationId: string | null;
}`,signature:{properties:[{key:"activeAnnotationId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]},required:!0}},{key:"settingsState",value:{name:"signature",type:"object",raw:`{
  pointTemporaryMode: boolean;
  elevationReferenceAnnotationId: string | null;
  nextShortLabelCounterByToolType: Readonly<Record<string, number>>;
}`,signature:{properties:[{key:"pointTemporaryMode",value:{name:"boolean",required:!0}},{key:"elevationReferenceAnnotationId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"nextShortLabelCounterByToolType",value:{name:"Readonly",elements:[{name:"Record",elements:[{name:"string"},{name:"number"}],raw:"Record<string, number>"}],raw:"Readonly<Record<string, number>>",required:!0}}]},required:!0}}]}}},required:!0}},{key:"dispatch",value:{name:'ReturnType["dispatch"]',raw:'AnnotationsStore["dispatch"]',required:!0}},{key:"setActiveToolType",value:{name:"signature",type:"function",raw:"(toolId: AnnotationToolId) => void",signature:{arguments:[{type:{name:"AnnotationToolId"},name:"toolId"}],return:{name:"void"}},required:!0}},{key:"drafts",value:{name:"signature",type:"object",raw:`{
  get: (toolId: AnnotationToolId) => AnnotationToolDraftState;
  set: (toolId: AnnotationToolId, draft: AnnotationToolDraftState) => void;
  clear: (toolId: AnnotationToolId) => void;
  subscribe: (toolId: AnnotationToolId, listener: () => void) => () => void;
}`,signature:{properties:[{key:"get",value:{name:"signature",type:"function",raw:"(toolId: AnnotationToolId) => AnnotationToolDraftState",signature:{arguments:[{type:{name:"AnnotationToolId"},name:"toolId"}],return:{name:"signature",type:"object",raw:`{
  coordinates: readonly AnnotationGeographicCoordinate[];
  linkedNodeGroupIds: readonly (AnnotationNodeLinkId | null)[];
  feedback?: {
    kind: "warning";
    message: string;
  } | null;
}`,signature:{properties:[{key:"coordinates",value:{name:"unknown",required:!0}},{key:"linkedNodeGroupIds",value:{name:"unknown",required:!0}},{key:"feedback",value:{name:"union",raw:`{
  kind: "warning";
  message: string;
} | null`,elements:[{name:"signature",type:"object",raw:`{
  kind: "warning";
  message: string;
}`,signature:{properties:[{key:"kind",value:{name:"literal",value:'"warning"',required:!0}},{key:"message",value:{name:"string",required:!0}}]}},{name:"null"}],required:!1}}]},required:!0}},required:!0}},{key:"set",value:{name:"signature",type:"function",raw:"(toolId: AnnotationToolId, draft: AnnotationToolDraftState) => void",signature:{arguments:[{type:{name:"AnnotationToolId"},name:"toolId"},{type:{name:"signature",type:"object",raw:`{
  coordinates: readonly AnnotationGeographicCoordinate[];
  linkedNodeGroupIds: readonly (AnnotationNodeLinkId | null)[];
  feedback?: {
    kind: "warning";
    message: string;
  } | null;
}`,signature:{properties:[{key:"coordinates",value:{name:"unknown",required:!0}},{key:"linkedNodeGroupIds",value:{name:"unknown",required:!0}},{key:"feedback",value:{name:"union",raw:`{
  kind: "warning";
  message: string;
} | null`,elements:[{name:"signature",type:"object",raw:`{
  kind: "warning";
  message: string;
}`,signature:{properties:[{key:"kind",value:{name:"literal",value:'"warning"',required:!0}},{key:"message",value:{name:"string",required:!0}}]}},{name:"null"}],required:!1}}]},required:!0},name:"draft"}],return:{name:"void"}},required:!0}},{key:"clear",value:{name:"signature",type:"function",raw:"(toolId: AnnotationToolId) => void",signature:{arguments:[{type:{name:"AnnotationToolId"},name:"toolId"}],return:{name:"void"}},required:!0}},{key:"subscribe",value:{name:"signature",type:"function",raw:"(toolId: AnnotationToolId, listener: () => void) => () => void",signature:{arguments:[{type:{name:"AnnotationToolId"},name:"toolId"},{type:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},name:"listener"}],return:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}}},required:!0}}]},required:!0}},{key:"requestLabelText",value:{name:"signature",type:"function",raw:`(
  context: AnnotationLabelTextRequestContext
) => string | null | Promise<string | null>`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  coordinate: AnnotationGeographicCoordinate;
  defaultText: string;
  labelTextSuggestions: readonly string[];
  linkedNodeGroupId?: AnnotationNodeLinkId | null;
}`,signature:{properties:[{key:"coordinate",value:{name:"AnnotationGeographicCoordinate",required:!0}},{key:"defaultText",value:{name:"string",required:!0}},{key:"labelTextSuggestions",value:{name:"unknown",required:!0}},{key:"linkedNodeGroupId",value:{name:"union",raw:"AnnotationNodeLinkId | null",elements:[{name:"string"},{name:"null"}],required:!1}}]}},name:"context"}],return:{name:"union",raw:"string | null | Promise<string | null>",elements:[{name:"string"},{name:"null"},{name:"Promise",elements:[{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]}],raw:"Promise<string | null>"}]}},required:!1}},{key:"addAnnotation",value:{name:"signature",type:"function",raw:`(
  annotationType: StoredAnnotation["toolType"],
  coordinates: readonly AnnotationGeographicCoordinate[],
  options?: AddAnnotationOptions,
  linkedNodeGroupIds?: readonly (AnnotationNodeLinkId | null | undefined)[],
  sourceToolId?: AnnotationToolId
) => StoredAnnotation`,signature:{arguments:[{type:{name:"AnnotationType",raw:'StoredAnnotation["toolType"]'},name:"annotationType"},{type:{name:"unknown"},name:"coordinates"},{type:{name:"Pick",elements:[{name:"signature",type:"object",raw:`{
  id: string;
  toolType: AnnotationType;
  nodeIds: readonly string[];
  edgeIds: readonly string[];
  displayName?: string;
  shortLabel?: string;
  shortLabelSource?: AnnotationShortLabelSource;
  shortLabelCounter?: number;
  hidden?: boolean;
  locked?: boolean;
  annotationRole?: AnnotationEntryRole;
  readOnly?: boolean;
  labelAppearance?: AnnotationLabelAppearance;
  elevationDisplayMode?: AnnotationElevationDisplayMode;
  distanceAnchorCoordinateSelection?: RuntimePointLabelCoordinateSelection;
  distanceTriangleAnchorCoordinateRole?: RuntimeDistanceTriangleAnchorCoordinateRole;
  closed?: boolean;
  preferredNormalBearingRad?: number;
  externalCollection?: {
    type: "saved-measurement";
    id: string;
  };
  /** Identity across machines and shares; the runtime id only counts per session. */
  uuid?: string;
  /** ISO time of the last content change, stamped by the persistence on save. */
  updatedAt?: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"toolType",value:{name:"AnnotationType",required:!0}},{key:"nodeIds",value:{name:"unknown",required:!0}},{key:"edgeIds",value:{name:"unknown",required:!0}},{key:"displayName",value:{name:"string",required:!1}},{key:"shortLabel",value:{name:"string",required:!1}},{key:"shortLabelSource",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_SHORT_LABEL_SOURCES)[keyof typeof ANNOTATION_SHORT_LABEL_SOURCES]",required:!1}},{key:"shortLabelCounter",value:{name:"number",required:!1}},{key:"hidden",value:{name:"boolean",required:!1}},{key:"locked",value:{name:"boolean",required:!1}},{key:"annotationRole",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_ENTRY_ROLES)[keyof typeof ANNOTATION_ENTRY_ROLES]",required:!1}},{key:"readOnly",value:{name:"boolean",required:!1}},{key:"labelAppearance",value:{name:"AnnotationLabelAppearance",required:!1}},{key:"elevationDisplayMode",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_ELEVATION_DISPLAY_MODES)[keyof typeof ANNOTATION_ELEVATION_DISPLAY_MODES]",required:!1}},{key:"distanceAnchorCoordinateSelection",value:{name:"unknown[union]",raw:"(typeof RUNTIME_POINT_LABEL_COORDINATE_SELECTION)[keyof typeof RUNTIME_POINT_LABEL_COORDINATE_SELECTION]",required:!1}},{key:"distanceTriangleAnchorCoordinateRole",value:{name:"unknown[union]",raw:"(typeof RUNTIME_DISTANCE_TRIANGLE_ANCHOR_COORDINATE_ROLE)[keyof typeof RUNTIME_DISTANCE_TRIANGLE_ANCHOR_COORDINATE_ROLE]",required:!1}},{key:"closed",value:{name:"boolean",required:!1}},{key:"preferredNormalBearingRad",value:{name:"number",required:!1}},{key:"externalCollection",value:{name:"signature",type:"object",raw:`{
  type: "saved-measurement";
  id: string;
}`,signature:{properties:[{key:"type",value:{name:"literal",value:'"saved-measurement"',required:!0}},{key:"id",value:{name:"string",required:!0}}]},required:!1}},{key:"uuid",value:{name:"string",required:!1},description:"Identity across machines and shares; the runtime id only counts per session."},{key:"updatedAt",value:{name:"string",required:!1},description:"ISO time of the last content change, stamped by the persistence on save."}]},required:!0},{name:"union",raw:`| "closed"
| "preferredNormalBearingRad"
| "displayName"
| "shortLabel"
| "shortLabelSource"
| "shortLabelCounter"
| "hidden"
| "locked"
| "labelAppearance"
| "elevationDisplayMode"
| "distanceAnchorCoordinateSelection"
| "distanceTriangleAnchorCoordinateRole"`,elements:[{name:"literal",value:'"closed"'},{name:"literal",value:'"preferredNormalBearingRad"'},{name:"literal",value:'"displayName"'},{name:"literal",value:'"shortLabel"'},{name:"literal",value:'"shortLabelSource"'},{name:"literal",value:'"shortLabelCounter"'},{name:"literal",value:'"hidden"'},{name:"literal",value:'"locked"'},{name:"literal",value:'"labelAppearance"'},{name:"literal",value:'"elevationDisplayMode"'},{name:"literal",value:'"distanceAnchorCoordinateSelection"'},{name:"literal",value:'"distanceTriangleAnchorCoordinateRole"'}]}],raw:`Pick<
  StoredAnnotation,
  | "closed"
  | "preferredNormalBearingRad"
  | "displayName"
  | "shortLabel"
  | "shortLabelSource"
  | "shortLabelCounter"
  | "hidden"
  | "locked"
  | "labelAppearance"
  | "elevationDisplayMode"
  | "distanceAnchorCoordinateSelection"
  | "distanceTriangleAnchorCoordinateRole"
>`,required:!1},name:"options"},{type:{name:"unknown"},name:"linkedNodeGroupIds"},{type:{name:"AnnotationToolId"},name:"sourceToolId"}],return:{name:"signature",type:"object",raw:`{
  id: string;
  toolType: AnnotationType;
  nodeIds: readonly string[];
  edgeIds: readonly string[];
  displayName?: string;
  shortLabel?: string;
  shortLabelSource?: AnnotationShortLabelSource;
  shortLabelCounter?: number;
  hidden?: boolean;
  locked?: boolean;
  annotationRole?: AnnotationEntryRole;
  readOnly?: boolean;
  labelAppearance?: AnnotationLabelAppearance;
  elevationDisplayMode?: AnnotationElevationDisplayMode;
  distanceAnchorCoordinateSelection?: RuntimePointLabelCoordinateSelection;
  distanceTriangleAnchorCoordinateRole?: RuntimeDistanceTriangleAnchorCoordinateRole;
  closed?: boolean;
  preferredNormalBearingRad?: number;
  externalCollection?: {
    type: "saved-measurement";
    id: string;
  };
  /** Identity across machines and shares; the runtime id only counts per session. */
  uuid?: string;
  /** ISO time of the last content change, stamped by the persistence on save. */
  updatedAt?: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"toolType",value:{name:"AnnotationType",required:!0}},{key:"nodeIds",value:{name:"unknown",required:!0}},{key:"edgeIds",value:{name:"unknown",required:!0}},{key:"displayName",value:{name:"string",required:!1}},{key:"shortLabel",value:{name:"string",required:!1}},{key:"shortLabelSource",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_SHORT_LABEL_SOURCES)[keyof typeof ANNOTATION_SHORT_LABEL_SOURCES]",required:!1}},{key:"shortLabelCounter",value:{name:"number",required:!1}},{key:"hidden",value:{name:"boolean",required:!1}},{key:"locked",value:{name:"boolean",required:!1}},{key:"annotationRole",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_ENTRY_ROLES)[keyof typeof ANNOTATION_ENTRY_ROLES]",required:!1}},{key:"readOnly",value:{name:"boolean",required:!1}},{key:"labelAppearance",value:{name:"AnnotationLabelAppearance",required:!1}},{key:"elevationDisplayMode",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_ELEVATION_DISPLAY_MODES)[keyof typeof ANNOTATION_ELEVATION_DISPLAY_MODES]",required:!1}},{key:"distanceAnchorCoordinateSelection",value:{name:"unknown[union]",raw:"(typeof RUNTIME_POINT_LABEL_COORDINATE_SELECTION)[keyof typeof RUNTIME_POINT_LABEL_COORDINATE_SELECTION]",required:!1}},{key:"distanceTriangleAnchorCoordinateRole",value:{name:"unknown[union]",raw:"(typeof RUNTIME_DISTANCE_TRIANGLE_ANCHOR_COORDINATE_ROLE)[keyof typeof RUNTIME_DISTANCE_TRIANGLE_ANCHOR_COORDINATE_ROLE]",required:!1}},{key:"closed",value:{name:"boolean",required:!1}},{key:"preferredNormalBearingRad",value:{name:"number",required:!1}},{key:"externalCollection",value:{name:"signature",type:"object",raw:`{
  type: "saved-measurement";
  id: string;
}`,signature:{properties:[{key:"type",value:{name:"literal",value:'"saved-measurement"',required:!0}},{key:"id",value:{name:"string",required:!0}}]},required:!1}},{key:"uuid",value:{name:"string",required:!1},description:"Identity across machines and shares; the runtime id only counts per session."},{key:"updatedAt",value:{name:"string",required:!1},description:"ISO time of the last content change, stamped by the persistence on save."}]},required:!0}},required:!0}}]},required:!0}}]}},name:"context"}],return:{name:"boolean"}},required:!0}}]},required:!1}},{key:"visualModels",value:{name:"signature",type:"object",raw:`{
  build: (
    context: AnnotationToolVisualModelContext
  ) => RuntimeVisualModels | null;
}`,signature:{properties:[{key:"build",value:{name:"signature",type:"function",raw:`(
  context: AnnotationToolVisualModelContext
) => RuntimeVisualModels | null`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  nodes: readonly AnnotationNode[];
  edges: readonly AnnotationEdge[];
  linkedNodeGroups: readonly AnnotationNodeLink[];
  annotationEntries: readonly StoredAnnotation[];
  draftStatesByToolType: Readonly<
    Partial<Record<AnnotationToolId, AnnotationToolDraftState>>
  >;
  elevationReferenceAnnotationId: string | null;
  selectedAnnotationId: string | null;
  selectedAnnotationIds: readonly string[];
  isSelectionAdditiveModifierPressed: boolean;
  setSelectedAnnotationId: (annotationId: string | null) => void;
  setElevationReferenceAnnotationId: (annotationId: string | null) => void;
  toggleAnnotationElevationDisplayMode: (
    annotationId: string,
    currentElevationDisplayMode?: AnnotationElevationDisplayMode
  ) => void;
  onNodeLongPress?: (nodeId: string, annotationId: string) => void;
  formatOptions: AnnotationsRuntimeFormatOptions;
}`,signature:{properties:[{key:"nodes",value:{name:"unknown",required:!0}},{key:"edges",value:{name:"unknown",required:!0}},{key:"linkedNodeGroups",value:{name:"unknown",required:!0}},{key:"annotationEntries",value:{name:"unknown",required:!0}},{key:"draftStatesByToolType",value:{name:"Readonly",elements:[{name:"Partial",elements:[{name:"Record",elements:[{name:"AnnotationToolId"},{name:"signature",type:"object",raw:`{
  coordinates: readonly AnnotationGeographicCoordinate[];
  linkedNodeGroupIds: readonly (AnnotationNodeLinkId | null)[];
  feedback?: {
    kind: "warning";
    message: string;
  } | null;
}`,signature:{properties:[{key:"coordinates",value:{name:"unknown",required:!0}},{key:"linkedNodeGroupIds",value:{name:"unknown",required:!0}},{key:"feedback",value:{name:"union",raw:`{
  kind: "warning";
  message: string;
} | null`,elements:[{name:"signature",type:"object",raw:`{
  kind: "warning";
  message: string;
}`,signature:{properties:[{key:"kind",value:{name:"literal",value:'"warning"',required:!0}},{key:"message",value:{name:"string",required:!0}}]}},{name:"null"}],required:!1}}]},required:!0}],raw:"Record<AnnotationToolId, AnnotationToolDraftState>"}],raw:"Partial<Record<AnnotationToolId, AnnotationToolDraftState>>"}],raw:`Readonly<
  Partial<Record<AnnotationToolId, AnnotationToolDraftState>>
>`,required:!0}},{key:"elevationReferenceAnnotationId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"selectedAnnotationId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"selectedAnnotationIds",value:{name:"unknown",required:!0}},{key:"isSelectionAdditiveModifierPressed",value:{name:"boolean",required:!0}},{key:"setSelectedAnnotationId",value:{name:"signature",type:"function",raw:"(annotationId: string | null) => void",signature:{arguments:[{type:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},name:"annotationId"}],return:{name:"void"}},required:!0}},{key:"setElevationReferenceAnnotationId",value:{name:"signature",type:"function",raw:"(annotationId: string | null) => void",signature:{arguments:[{type:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},name:"annotationId"}],return:{name:"void"}},required:!0}},{key:"toggleAnnotationElevationDisplayMode",value:{name:"signature",type:"function",raw:`(
  annotationId: string,
  currentElevationDisplayMode?: AnnotationElevationDisplayMode
) => void`,signature:{arguments:[{type:{name:"string"},name:"annotationId"},{type:{name:"unknown[union]",raw:"(typeof ANNOTATION_ELEVATION_DISPLAY_MODES)[keyof typeof ANNOTATION_ELEVATION_DISPLAY_MODES]",required:!1},name:"currentElevationDisplayMode"}],return:{name:"void"}},required:!0}},{key:"onNodeLongPress",value:{name:"signature",type:"function",raw:"(nodeId: string, annotationId: string) => void",signature:{arguments:[{type:{name:"string"},name:"nodeId"},{type:{name:"string"},name:"annotationId"}],return:{name:"void"}},required:!1}},{key:"formatOptions",value:{name:"signature",type:"object",raw:`{
  lengthMeters?: FormatLengthMetersOptions;
  areaSquareMeters?: FormatAreaSquareMetersAdaptiveOptions;
  degrees?: FormatDegreesOptions;
  geographicCoordinate?: GeographicCoordinateFormatOptions;
  decimalNumber?: FormatDecimalNumberOptions;
}`,signature:{properties:[{key:"lengthMeters",value:{name:"FormatLengthMetersOptions",required:!1}},{key:"areaSquareMeters",value:{name:"FormatAreaSquareMetersAdaptiveOptions",required:!1}},{key:"degrees",value:{name:"FormatDegreesOptions",required:!1}},{key:"geographicCoordinate",value:{name:"GeographicCoordinateFormatOptions",required:!1}},{key:"decimalNumber",value:{name:"FormatDecimalNumberOptions",required:!1}}]},required:!0}}]}},name:"context"}],return:{name:"union",raw:"RuntimeVisualModels | null",elements:[{name:"signature",type:"object",raw:`{
  points?: readonly RuntimePointMarkerRenderModel[];
  edges?: readonly RuntimeEdgeRenderModel[];
  polygonFills?: readonly RuntimePolygonFillRenderModel[];
  pointLabels?: readonly RuntimePointLabelRenderModel[];
}`,signature:{properties:[{key:"points",value:{name:"unknown",required:!1}},{key:"edges",value:{name:"unknown",required:!1}},{key:"polygonFills",value:{name:"unknown",required:!1}},{key:"pointLabels",value:{name:"unknown",required:!1}}]}},{name:"null"}]}},required:!0}}]},required:!1}},{key:"infoBox",value:{name:"signature",type:"object",raw:`{
  getSlots: (
    context: RuntimeAnnotationInfoBoxContext
  ) => AnnotationInfoBoxSlots | null;
}`,signature:{properties:[{key:"getSlots",value:{name:"signature",type:"function",raw:`(
  context: RuntimeAnnotationInfoBoxContext
) => AnnotationInfoBoxSlots | null`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  annotation: StoredAnnotation;
  annotationEntries: readonly StoredAnnotation[];
  nodes: readonly AnnotationNode[];
  selectedAnnotationId: string;
  setSelectedAnnotationId: (annotationId: string | null) => void;
  focusAnnotationId: (annotationId: string | null) => void;
  flyToAllAnnotations: () => void;
  removeAnnotationById: (
    annotationId: string,
    options?: AnnotationDeleteRequestOptions
  ) => void;
  exportAnnotationGeoJson: (annotationId: string) => void;
  toggleAnnotationVisibility: (annotationId: string) => void;
  toggleAnnotationLocked: (annotationId: string) => void;
  elevationReferenceAnnotationId: string | null;
  setElevationReferenceAnnotationId: (annotationId: string | null) => void;
  updateAnnotationDisplayName: (
    annotationId: string,
    displayName: string
  ) => void;
  updateAnnotationShortLabel: (
    annotationId: string,
    shortLabel: string
  ) => void;
  formatOptions: AnnotationsRuntimeFormatOptions;
  infoBoxVisualOptions: AnnotationInfoBoxVisualOptions;
}`,signature:{properties:[{key:"annotation",value:{name:"signature",type:"object",raw:`{
  id: string;
  toolType: AnnotationType;
  nodeIds: readonly string[];
  edgeIds: readonly string[];
  displayName?: string;
  shortLabel?: string;
  shortLabelSource?: AnnotationShortLabelSource;
  shortLabelCounter?: number;
  hidden?: boolean;
  locked?: boolean;
  annotationRole?: AnnotationEntryRole;
  readOnly?: boolean;
  labelAppearance?: AnnotationLabelAppearance;
  elevationDisplayMode?: AnnotationElevationDisplayMode;
  distanceAnchorCoordinateSelection?: RuntimePointLabelCoordinateSelection;
  distanceTriangleAnchorCoordinateRole?: RuntimeDistanceTriangleAnchorCoordinateRole;
  closed?: boolean;
  preferredNormalBearingRad?: number;
  externalCollection?: {
    type: "saved-measurement";
    id: string;
  };
  /** Identity across machines and shares; the runtime id only counts per session. */
  uuid?: string;
  /** ISO time of the last content change, stamped by the persistence on save. */
  updatedAt?: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"toolType",value:{name:"AnnotationType",required:!0}},{key:"nodeIds",value:{name:"unknown",required:!0}},{key:"edgeIds",value:{name:"unknown",required:!0}},{key:"displayName",value:{name:"string",required:!1}},{key:"shortLabel",value:{name:"string",required:!1}},{key:"shortLabelSource",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_SHORT_LABEL_SOURCES)[keyof typeof ANNOTATION_SHORT_LABEL_SOURCES]",required:!1}},{key:"shortLabelCounter",value:{name:"number",required:!1}},{key:"hidden",value:{name:"boolean",required:!1}},{key:"locked",value:{name:"boolean",required:!1}},{key:"annotationRole",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_ENTRY_ROLES)[keyof typeof ANNOTATION_ENTRY_ROLES]",required:!1}},{key:"readOnly",value:{name:"boolean",required:!1}},{key:"labelAppearance",value:{name:"AnnotationLabelAppearance",required:!1}},{key:"elevationDisplayMode",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_ELEVATION_DISPLAY_MODES)[keyof typeof ANNOTATION_ELEVATION_DISPLAY_MODES]",required:!1}},{key:"distanceAnchorCoordinateSelection",value:{name:"unknown[union]",raw:"(typeof RUNTIME_POINT_LABEL_COORDINATE_SELECTION)[keyof typeof RUNTIME_POINT_LABEL_COORDINATE_SELECTION]",required:!1}},{key:"distanceTriangleAnchorCoordinateRole",value:{name:"unknown[union]",raw:"(typeof RUNTIME_DISTANCE_TRIANGLE_ANCHOR_COORDINATE_ROLE)[keyof typeof RUNTIME_DISTANCE_TRIANGLE_ANCHOR_COORDINATE_ROLE]",required:!1}},{key:"closed",value:{name:"boolean",required:!1}},{key:"preferredNormalBearingRad",value:{name:"number",required:!1}},{key:"externalCollection",value:{name:"signature",type:"object",raw:`{
  type: "saved-measurement";
  id: string;
}`,signature:{properties:[{key:"type",value:{name:"literal",value:'"saved-measurement"',required:!0}},{key:"id",value:{name:"string",required:!0}}]},required:!1}},{key:"uuid",value:{name:"string",required:!1},description:"Identity across machines and shares; the runtime id only counts per session."},{key:"updatedAt",value:{name:"string",required:!1},description:"ISO time of the last content change, stamped by the persistence on save."}]},required:!0}},{key:"annotationEntries",value:{name:"unknown",required:!0}},{key:"nodes",value:{name:"unknown",required:!0}},{key:"selectedAnnotationId",value:{name:"string",required:!0}},{key:"setSelectedAnnotationId",value:{name:"signature",type:"function",raw:"(annotationId: string | null) => void",signature:{arguments:[{type:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},name:"annotationId"}],return:{name:"void"}},required:!0}},{key:"focusAnnotationId",value:{name:"signature",type:"function",raw:"(annotationId: string | null) => void",signature:{arguments:[{type:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},name:"annotationId"}],return:{name:"void"}},required:!0}},{key:"flyToAllAnnotations",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}},{key:"removeAnnotationById",value:{name:"signature",type:"function",raw:`(
  annotationId: string,
  options?: AnnotationDeleteRequestOptions
) => void`,signature:{arguments:[{type:{name:"string"},name:"annotationId"},{type:{name:"signature",type:"object",raw:`{
  skipConfirmation?: boolean;
  source?: AnnotationDeleteConfirmationSource;
}`,signature:{properties:[{key:"skipConfirmation",value:{name:"boolean",required:!1}},{key:"source",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_DELETE_CONFIRMATION_SOURCES)[keyof typeof ANNOTATION_DELETE_CONFIRMATION_SOURCES]",required:!1}}]}},name:"options"}],return:{name:"void"}},required:!0}},{key:"exportAnnotationGeoJson",value:{name:"signature",type:"function",raw:"(annotationId: string) => void",signature:{arguments:[{type:{name:"string"},name:"annotationId"}],return:{name:"void"}},required:!0}},{key:"toggleAnnotationVisibility",value:{name:"signature",type:"function",raw:"(annotationId: string) => void",signature:{arguments:[{type:{name:"string"},name:"annotationId"}],return:{name:"void"}},required:!0}},{key:"toggleAnnotationLocked",value:{name:"signature",type:"function",raw:"(annotationId: string) => void",signature:{arguments:[{type:{name:"string"},name:"annotationId"}],return:{name:"void"}},required:!0}},{key:"elevationReferenceAnnotationId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"setElevationReferenceAnnotationId",value:{name:"signature",type:"function",raw:"(annotationId: string | null) => void",signature:{arguments:[{type:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},name:"annotationId"}],return:{name:"void"}},required:!0}},{key:"updateAnnotationDisplayName",value:{name:"signature",type:"function",raw:`(
  annotationId: string,
  displayName: string
) => void`,signature:{arguments:[{type:{name:"string"},name:"annotationId"},{type:{name:"string"},name:"displayName"}],return:{name:"void"}},required:!0}},{key:"updateAnnotationShortLabel",value:{name:"signature",type:"function",raw:`(
  annotationId: string,
  shortLabel: string
) => void`,signature:{arguments:[{type:{name:"string"},name:"annotationId"},{type:{name:"string"},name:"shortLabel"}],return:{name:"void"}},required:!0}},{key:"formatOptions",value:{name:"signature",type:"object",raw:`{
  lengthMeters?: FormatLengthMetersOptions;
  areaSquareMeters?: FormatAreaSquareMetersAdaptiveOptions;
  degrees?: FormatDegreesOptions;
  geographicCoordinate?: GeographicCoordinateFormatOptions;
  decimalNumber?: FormatDecimalNumberOptions;
}`,signature:{properties:[{key:"lengthMeters",value:{name:"FormatLengthMetersOptions",required:!1}},{key:"areaSquareMeters",value:{name:"FormatAreaSquareMetersAdaptiveOptions",required:!1}},{key:"degrees",value:{name:"FormatDegreesOptions",required:!1}},{key:"geographicCoordinate",value:{name:"GeographicCoordinateFormatOptions",required:!1}},{key:"decimalNumber",value:{name:"FormatDecimalNumberOptions",required:!1}}]},required:!0}},{key:"infoBoxVisualOptions",value:{name:"AnnotationInfoBoxVisualOptions",required:!0}}]}},name:"context"}],return:{name:"union",raw:"AnnotationInfoBoxSlots | null",elements:[{name:"AnnotationInfoBoxSlots"},{name:"null"}]}},required:!0}}]},required:!1}}]}}],raw:"ReadonlyMap<AnnotationToolId, AnnotationToolPlugin>",required:!0}},{key:"getPlugin",value:{name:"signature",type:"function",raw:"(toolId: AnnotationToolId) => AnnotationToolPlugin | undefined",signature:{arguments:[{type:{name:"AnnotationToolId"},name:"toolId"}],return:{name:"union",raw:"AnnotationToolPlugin | undefined",elements:[{name:"signature",type:"object",raw:`{
  id: AnnotationToolId;
  kind: AnnotationToolPluginKind;
  annotationType?: StoredAnnotation["toolType"] | null;
  descriptor: AnnotationToolDescriptor;
  helpText?: readonly AnnotationInfoBoxHelpItem[];
  resolveHelpText?: (
    context: AnnotationToolHelpTextContext
  ) => readonly AnnotationInfoBoxHelpItem[];
  alwaysShowHelpTextWhileActive?: boolean;
  capabilities?: readonly AnnotationToolPluginCapability[];
  session?: {
    createSession: (
      context: AnnotationToolSessionContext
    ) => AnnotationModeSession;
  };
  pointQuery?: {
    inputModifiers?: readonly AnnotationPointQueryInputModifier[];
    onPointCreated: (context: PointQueryCreatedContext) => void;
  };
  addAnnotation?: {
    resolveOptions: (
      context: AnnotationToolAddAnnotationContext
    ) => AddAnnotationOptions | undefined;
  };
  authoringVisuals?: {
    createController: (
      context: AnnotationToolAuthoringContext
    ) => AnnotationToolAuthoringController | null;
  };
  keyboard?: {
    onKeyDown: (context: AnnotationToolKeyboardContext) => boolean;
  };
  visualModels?: {
    build: (
      context: AnnotationToolVisualModelContext
    ) => RuntimeVisualModels | null;
  };
  infoBox?: {
    getSlots: (
      context: RuntimeAnnotationInfoBoxContext
    ) => AnnotationInfoBoxSlots | null;
  };
}`,signature:{properties:[{key:"id",value:{name:"AnnotationToolId",required:!0}},{key:"kind",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_TOOL_PLUGIN_KINDS)[keyof typeof ANNOTATION_TOOL_PLUGIN_KINDS]",required:!0}},{key:"annotationType",value:{name:"union",raw:'StoredAnnotation["toolType"] | null',elements:[{name:"AnnotationType",raw:'StoredAnnotation["toolType"]'},{name:"null"}],required:!1}},{key:"descriptor",value:{name:"signature",type:"object",raw:`{
  id: AnnotationToolId;
  order: number;
  label: string;
  tooltip: string;
  shortcutKey?: string;
  icon?: ReactNode;
}`,signature:{properties:[{key:"id",value:{name:"AnnotationToolId",required:!0}},{key:"order",value:{name:"number",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"tooltip",value:{name:"string",required:!0}},{key:"shortcutKey",value:{name:"string",required:!1}},{key:"icon",value:{name:"ReactNode",required:!1}}]},required:!0}},{key:"helpText",value:{name:"unknown",required:!1}},{key:"resolveHelpText",value:{name:"signature",type:"function",raw:`(
  context: AnnotationToolHelpTextContext
) => readonly AnnotationInfoBoxHelpItem[]`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  draftState: AnnotationToolDraftState;
  pointQueryPickResult?: PointQueryPickResult | null;
}`,signature:{properties:[{key:"draftState",value:{name:"signature",type:"object",raw:`{
  coordinates: readonly AnnotationGeographicCoordinate[];
  linkedNodeGroupIds: readonly (AnnotationNodeLinkId | null)[];
  feedback?: {
    kind: "warning";
    message: string;
  } | null;
}`,signature:{properties:[{key:"coordinates",value:{name:"unknown",required:!0}},{key:"linkedNodeGroupIds",value:{name:"unknown",required:!0}},{key:"feedback",value:{name:"union",raw:`{
  kind: "warning";
  message: string;
} | null`,elements:[{name:"signature",type:"object",raw:`{
  kind: "warning";
  message: string;
}`,signature:{properties:[{key:"kind",value:{name:"literal",value:'"warning"',required:!0}},{key:"message",value:{name:"string",required:!0}}]}},{name:"null"}],required:!1}}]},required:!0}},{key:"pointQueryPickResult",value:{name:"union",raw:"PointQueryPickResult | null",elements:[{name:"signature",type:"object",raw:`{
  coordinate: AnnotationGeographicCoordinate | null;
  screenPosition: { x: number; y: number } | null;
  pointECEF: Vector3 | null;
  surfaceNormalECEF: Vector3 | null;
  inputModifier?: AnnotationPointQueryInputModifier;
}`,signature:{properties:[{key:"coordinate",value:{name:"union",raw:"AnnotationGeographicCoordinate | null",elements:[{name:"AnnotationGeographicCoordinate"},{name:"null"}],required:!0}},{key:"screenPosition",value:{name:"union",raw:"{ x: number; y: number } | null",elements:[{name:"signature",type:"object",raw:"{ x: number; y: number }",signature:{properties:[{key:"x",value:{name:"number",required:!0}},{key:"y",value:{name:"number",required:!0}}]}},{name:"null"}],required:!0}},{key:"pointECEF",value:{name:"union",raw:"Vector3 | null",elements:[{name:"Vector3"},{name:"null"}],required:!0}},{key:"surfaceNormalECEF",value:{name:"union",raw:"Vector3 | null",elements:[{name:"Vector3"},{name:"null"}],required:!0}},{key:"inputModifier",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_POINT_QUERY_INPUT_MODIFIERS)[keyof typeof ANNOTATION_POINT_QUERY_INPUT_MODIFIERS]",required:!1}}]}},{name:"null"}],required:!1}}]}},name:"context"}],return:{name:"unknown"}},required:!1}},{key:"alwaysShowHelpTextWhileActive",value:{name:"boolean",required:!1}},{key:"capabilities",value:{name:"unknown",required:!1}},{key:"session",value:{name:"signature",type:"object",raw:`{
  createSession: (
    context: AnnotationToolSessionContext
  ) => AnnotationModeSession;
}`,signature:{properties:[{key:"createSession",value:{name:"signature",type:"function",raw:`(
  context: AnnotationToolSessionContext
) => AnnotationModeSession`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  getState: () => AnnotationsStoreState;
  dispatch: AnnotationsStore["dispatch"];
  setActiveToolType: (toolId: AnnotationToolId) => void;
  drafts: AnnotationToolDraftStore;
  requestLabelText?: AnnotationLabelTextRequester;
  addAnnotation: (
    annotationType: StoredAnnotation["toolType"],
    coordinates: readonly AnnotationGeographicCoordinate[],
    options?: AddAnnotationOptions,
    linkedNodeGroupIds?: readonly (AnnotationNodeLinkId | null | undefined)[],
    sourceToolId?: AnnotationToolId
  ) => StoredAnnotation;
}`,signature:{properties:[{key:"getState",value:{name:"signature",type:"function",raw:"() => AnnotationsStoreState",signature:{arguments:[],return:{name:"signature",type:"object",raw:`{
  annotationToolType: AnnotationToolId;
  selectionState: AnnotationSelectionStoreState;
  annotationEntries: readonly StoredAnnotation[];
  nodes: readonly AnnotationNode[];
  linkedNodeGroups: readonly AnnotationNodeLink[];
  edges: readonly AnnotationEdge[];
  infoBoxState: AnnotationInfoBoxStoreState;
  settingsState: AnnotationSettingsStoreState;
}`,signature:{properties:[{key:"annotationToolType",value:{name:"AnnotationToolId",required:!0}},{key:"selectionState",value:{name:"signature",type:"object",raw:`{
  selectedAnnotationIds: readonly string[];
  previousSelectedAnnotationId: string | null;
}`,signature:{properties:[{key:"selectedAnnotationIds",value:{name:"unknown",required:!0}},{key:"previousSelectedAnnotationId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]},required:!0}},{key:"annotationEntries",value:{name:"unknown",required:!0}},{key:"nodes",value:{name:"unknown",required:!0}},{key:"linkedNodeGroups",value:{name:"unknown",required:!0}},{key:"edges",value:{name:"unknown",required:!0}},{key:"infoBoxState",value:{name:"signature",type:"object",raw:`{
  activeAnnotationId: string | null;
}`,signature:{properties:[{key:"activeAnnotationId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]},required:!0}},{key:"settingsState",value:{name:"signature",type:"object",raw:`{
  pointTemporaryMode: boolean;
  elevationReferenceAnnotationId: string | null;
  nextShortLabelCounterByToolType: Readonly<Record<string, number>>;
}`,signature:{properties:[{key:"pointTemporaryMode",value:{name:"boolean",required:!0}},{key:"elevationReferenceAnnotationId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"nextShortLabelCounterByToolType",value:{name:"Readonly",elements:[{name:"Record",elements:[{name:"string"},{name:"number"}],raw:"Record<string, number>"}],raw:"Readonly<Record<string, number>>",required:!0}}]},required:!0}}]}}},required:!0}},{key:"dispatch",value:{name:'ReturnType["dispatch"]',raw:'AnnotationsStore["dispatch"]',required:!0}},{key:"setActiveToolType",value:{name:"signature",type:"function",raw:"(toolId: AnnotationToolId) => void",signature:{arguments:[{type:{name:"AnnotationToolId"},name:"toolId"}],return:{name:"void"}},required:!0}},{key:"drafts",value:{name:"signature",type:"object",raw:`{
  get: (toolId: AnnotationToolId) => AnnotationToolDraftState;
  set: (toolId: AnnotationToolId, draft: AnnotationToolDraftState) => void;
  clear: (toolId: AnnotationToolId) => void;
  subscribe: (toolId: AnnotationToolId, listener: () => void) => () => void;
}`,signature:{properties:[{key:"get",value:{name:"signature",type:"function",raw:"(toolId: AnnotationToolId) => AnnotationToolDraftState",signature:{arguments:[{type:{name:"AnnotationToolId"},name:"toolId"}],return:{name:"signature",type:"object",raw:`{
  coordinates: readonly AnnotationGeographicCoordinate[];
  linkedNodeGroupIds: readonly (AnnotationNodeLinkId | null)[];
  feedback?: {
    kind: "warning";
    message: string;
  } | null;
}`,signature:{properties:[{key:"coordinates",value:{name:"unknown",required:!0}},{key:"linkedNodeGroupIds",value:{name:"unknown",required:!0}},{key:"feedback",value:{name:"union",raw:`{
  kind: "warning";
  message: string;
} | null`,elements:[{name:"signature",type:"object",raw:`{
  kind: "warning";
  message: string;
}`,signature:{properties:[{key:"kind",value:{name:"literal",value:'"warning"',required:!0}},{key:"message",value:{name:"string",required:!0}}]}},{name:"null"}],required:!1}}]},required:!0}},required:!0}},{key:"set",value:{name:"signature",type:"function",raw:"(toolId: AnnotationToolId, draft: AnnotationToolDraftState) => void",signature:{arguments:[{type:{name:"AnnotationToolId"},name:"toolId"},{type:{name:"signature",type:"object",raw:`{
  coordinates: readonly AnnotationGeographicCoordinate[];
  linkedNodeGroupIds: readonly (AnnotationNodeLinkId | null)[];
  feedback?: {
    kind: "warning";
    message: string;
  } | null;
}`,signature:{properties:[{key:"coordinates",value:{name:"unknown",required:!0}},{key:"linkedNodeGroupIds",value:{name:"unknown",required:!0}},{key:"feedback",value:{name:"union",raw:`{
  kind: "warning";
  message: string;
} | null`,elements:[{name:"signature",type:"object",raw:`{
  kind: "warning";
  message: string;
}`,signature:{properties:[{key:"kind",value:{name:"literal",value:'"warning"',required:!0}},{key:"message",value:{name:"string",required:!0}}]}},{name:"null"}],required:!1}}]},required:!0},name:"draft"}],return:{name:"void"}},required:!0}},{key:"clear",value:{name:"signature",type:"function",raw:"(toolId: AnnotationToolId) => void",signature:{arguments:[{type:{name:"AnnotationToolId"},name:"toolId"}],return:{name:"void"}},required:!0}},{key:"subscribe",value:{name:"signature",type:"function",raw:"(toolId: AnnotationToolId, listener: () => void) => () => void",signature:{arguments:[{type:{name:"AnnotationToolId"},name:"toolId"},{type:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},name:"listener"}],return:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}}},required:!0}}]},required:!0}},{key:"requestLabelText",value:{name:"signature",type:"function",raw:`(
  context: AnnotationLabelTextRequestContext
) => string | null | Promise<string | null>`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  coordinate: AnnotationGeographicCoordinate;
  defaultText: string;
  labelTextSuggestions: readonly string[];
  linkedNodeGroupId?: AnnotationNodeLinkId | null;
}`,signature:{properties:[{key:"coordinate",value:{name:"AnnotationGeographicCoordinate",required:!0}},{key:"defaultText",value:{name:"string",required:!0}},{key:"labelTextSuggestions",value:{name:"unknown",required:!0}},{key:"linkedNodeGroupId",value:{name:"union",raw:"AnnotationNodeLinkId | null",elements:[{name:"string"},{name:"null"}],required:!1}}]}},name:"context"}],return:{name:"union",raw:"string | null | Promise<string | null>",elements:[{name:"string"},{name:"null"},{name:"Promise",elements:[{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]}],raw:"Promise<string | null>"}]}},required:!1}},{key:"addAnnotation",value:{name:"signature",type:"function",raw:`(
  annotationType: StoredAnnotation["toolType"],
  coordinates: readonly AnnotationGeographicCoordinate[],
  options?: AddAnnotationOptions,
  linkedNodeGroupIds?: readonly (AnnotationNodeLinkId | null | undefined)[],
  sourceToolId?: AnnotationToolId
) => StoredAnnotation`,signature:{arguments:[{type:{name:"AnnotationType",raw:'StoredAnnotation["toolType"]'},name:"annotationType"},{type:{name:"unknown"},name:"coordinates"},{type:{name:"Pick",elements:[{name:"signature",type:"object",raw:`{
  id: string;
  toolType: AnnotationType;
  nodeIds: readonly string[];
  edgeIds: readonly string[];
  displayName?: string;
  shortLabel?: string;
  shortLabelSource?: AnnotationShortLabelSource;
  shortLabelCounter?: number;
  hidden?: boolean;
  locked?: boolean;
  annotationRole?: AnnotationEntryRole;
  readOnly?: boolean;
  labelAppearance?: AnnotationLabelAppearance;
  elevationDisplayMode?: AnnotationElevationDisplayMode;
  distanceAnchorCoordinateSelection?: RuntimePointLabelCoordinateSelection;
  distanceTriangleAnchorCoordinateRole?: RuntimeDistanceTriangleAnchorCoordinateRole;
  closed?: boolean;
  preferredNormalBearingRad?: number;
  externalCollection?: {
    type: "saved-measurement";
    id: string;
  };
  /** Identity across machines and shares; the runtime id only counts per session. */
  uuid?: string;
  /** ISO time of the last content change, stamped by the persistence on save. */
  updatedAt?: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"toolType",value:{name:"AnnotationType",required:!0}},{key:"nodeIds",value:{name:"unknown",required:!0}},{key:"edgeIds",value:{name:"unknown",required:!0}},{key:"displayName",value:{name:"string",required:!1}},{key:"shortLabel",value:{name:"string",required:!1}},{key:"shortLabelSource",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_SHORT_LABEL_SOURCES)[keyof typeof ANNOTATION_SHORT_LABEL_SOURCES]",required:!1}},{key:"shortLabelCounter",value:{name:"number",required:!1}},{key:"hidden",value:{name:"boolean",required:!1}},{key:"locked",value:{name:"boolean",required:!1}},{key:"annotationRole",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_ENTRY_ROLES)[keyof typeof ANNOTATION_ENTRY_ROLES]",required:!1}},{key:"readOnly",value:{name:"boolean",required:!1}},{key:"labelAppearance",value:{name:"AnnotationLabelAppearance",required:!1}},{key:"elevationDisplayMode",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_ELEVATION_DISPLAY_MODES)[keyof typeof ANNOTATION_ELEVATION_DISPLAY_MODES]",required:!1}},{key:"distanceAnchorCoordinateSelection",value:{name:"unknown[union]",raw:"(typeof RUNTIME_POINT_LABEL_COORDINATE_SELECTION)[keyof typeof RUNTIME_POINT_LABEL_COORDINATE_SELECTION]",required:!1}},{key:"distanceTriangleAnchorCoordinateRole",value:{name:"unknown[union]",raw:"(typeof RUNTIME_DISTANCE_TRIANGLE_ANCHOR_COORDINATE_ROLE)[keyof typeof RUNTIME_DISTANCE_TRIANGLE_ANCHOR_COORDINATE_ROLE]",required:!1}},{key:"closed",value:{name:"boolean",required:!1}},{key:"preferredNormalBearingRad",value:{name:"number",required:!1}},{key:"externalCollection",value:{name:"signature",type:"object",raw:`{
  type: "saved-measurement";
  id: string;
}`,signature:{properties:[{key:"type",value:{name:"literal",value:'"saved-measurement"',required:!0}},{key:"id",value:{name:"string",required:!0}}]},required:!1}},{key:"uuid",value:{name:"string",required:!1},description:"Identity across machines and shares; the runtime id only counts per session."},{key:"updatedAt",value:{name:"string",required:!1},description:"ISO time of the last content change, stamped by the persistence on save."}]},required:!0},{name:"union",raw:`| "closed"
| "preferredNormalBearingRad"
| "displayName"
| "shortLabel"
| "shortLabelSource"
| "shortLabelCounter"
| "hidden"
| "locked"
| "labelAppearance"
| "elevationDisplayMode"
| "distanceAnchorCoordinateSelection"
| "distanceTriangleAnchorCoordinateRole"`,elements:[{name:"literal",value:'"closed"'},{name:"literal",value:'"preferredNormalBearingRad"'},{name:"literal",value:'"displayName"'},{name:"literal",value:'"shortLabel"'},{name:"literal",value:'"shortLabelSource"'},{name:"literal",value:'"shortLabelCounter"'},{name:"literal",value:'"hidden"'},{name:"literal",value:'"locked"'},{name:"literal",value:'"labelAppearance"'},{name:"literal",value:'"elevationDisplayMode"'},{name:"literal",value:'"distanceAnchorCoordinateSelection"'},{name:"literal",value:'"distanceTriangleAnchorCoordinateRole"'}]}],raw:`Pick<
  StoredAnnotation,
  | "closed"
  | "preferredNormalBearingRad"
  | "displayName"
  | "shortLabel"
  | "shortLabelSource"
  | "shortLabelCounter"
  | "hidden"
  | "locked"
  | "labelAppearance"
  | "elevationDisplayMode"
  | "distanceAnchorCoordinateSelection"
  | "distanceTriangleAnchorCoordinateRole"
>`,required:!1},name:"options"},{type:{name:"unknown"},name:"linkedNodeGroupIds"},{type:{name:"AnnotationToolId"},name:"sourceToolId"}],return:{name:"signature",type:"object",raw:`{
  id: string;
  toolType: AnnotationType;
  nodeIds: readonly string[];
  edgeIds: readonly string[];
  displayName?: string;
  shortLabel?: string;
  shortLabelSource?: AnnotationShortLabelSource;
  shortLabelCounter?: number;
  hidden?: boolean;
  locked?: boolean;
  annotationRole?: AnnotationEntryRole;
  readOnly?: boolean;
  labelAppearance?: AnnotationLabelAppearance;
  elevationDisplayMode?: AnnotationElevationDisplayMode;
  distanceAnchorCoordinateSelection?: RuntimePointLabelCoordinateSelection;
  distanceTriangleAnchorCoordinateRole?: RuntimeDistanceTriangleAnchorCoordinateRole;
  closed?: boolean;
  preferredNormalBearingRad?: number;
  externalCollection?: {
    type: "saved-measurement";
    id: string;
  };
  /** Identity across machines and shares; the runtime id only counts per session. */
  uuid?: string;
  /** ISO time of the last content change, stamped by the persistence on save. */
  updatedAt?: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"toolType",value:{name:"AnnotationType",required:!0}},{key:"nodeIds",value:{name:"unknown",required:!0}},{key:"edgeIds",value:{name:"unknown",required:!0}},{key:"displayName",value:{name:"string",required:!1}},{key:"shortLabel",value:{name:"string",required:!1}},{key:"shortLabelSource",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_SHORT_LABEL_SOURCES)[keyof typeof ANNOTATION_SHORT_LABEL_SOURCES]",required:!1}},{key:"shortLabelCounter",value:{name:"number",required:!1}},{key:"hidden",value:{name:"boolean",required:!1}},{key:"locked",value:{name:"boolean",required:!1}},{key:"annotationRole",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_ENTRY_ROLES)[keyof typeof ANNOTATION_ENTRY_ROLES]",required:!1}},{key:"readOnly",value:{name:"boolean",required:!1}},{key:"labelAppearance",value:{name:"AnnotationLabelAppearance",required:!1}},{key:"elevationDisplayMode",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_ELEVATION_DISPLAY_MODES)[keyof typeof ANNOTATION_ELEVATION_DISPLAY_MODES]",required:!1}},{key:"distanceAnchorCoordinateSelection",value:{name:"unknown[union]",raw:"(typeof RUNTIME_POINT_LABEL_COORDINATE_SELECTION)[keyof typeof RUNTIME_POINT_LABEL_COORDINATE_SELECTION]",required:!1}},{key:"distanceTriangleAnchorCoordinateRole",value:{name:"unknown[union]",raw:"(typeof RUNTIME_DISTANCE_TRIANGLE_ANCHOR_COORDINATE_ROLE)[keyof typeof RUNTIME_DISTANCE_TRIANGLE_ANCHOR_COORDINATE_ROLE]",required:!1}},{key:"closed",value:{name:"boolean",required:!1}},{key:"preferredNormalBearingRad",value:{name:"number",required:!1}},{key:"externalCollection",value:{name:"signature",type:"object",raw:`{
  type: "saved-measurement";
  id: string;
}`,signature:{properties:[{key:"type",value:{name:"literal",value:'"saved-measurement"',required:!0}},{key:"id",value:{name:"string",required:!0}}]},required:!1}},{key:"uuid",value:{name:"string",required:!1},description:"Identity across machines and shares; the runtime id only counts per session."},{key:"updatedAt",value:{name:"string",required:!1},description:"ISO time of the last content change, stamped by the persistence on save."}]},required:!0}},required:!0}}]},required:!0},name:"context"}],return:{name:"signature",type:"object",raw:`{
  toolType: AnnotationToolId;
  requestStart: () => void;
  requestFinish: () => boolean;
  discardDraft: () => void;
  onNodeCreated?: (
    coordinate: AnnotationGeographicCoordinate,
    linkedNodeGroupId?: AnnotationNodeLinkId | null,
    options?: { inputModifier?: AnnotationPointQueryInputModifier }
  ) => void;
  finishesOnLoopClosure?: boolean;
}`,signature:{properties:[{key:"toolType",value:{name:"AnnotationToolId",required:!0}},{key:"requestStart",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}},{key:"requestFinish",value:{name:"signature",type:"function",raw:"() => boolean",signature:{arguments:[],return:{name:"boolean"}},required:!0}},{key:"discardDraft",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}},{key:"onNodeCreated",value:{name:"signature",type:"function",raw:`(
  coordinate: AnnotationGeographicCoordinate,
  linkedNodeGroupId?: AnnotationNodeLinkId | null,
  options?: { inputModifier?: AnnotationPointQueryInputModifier }
) => void`,signature:{arguments:[{type:{name:"AnnotationGeographicCoordinate"},name:"coordinate"},{type:{name:"union",raw:"AnnotationNodeLinkId | null",elements:[{name:"string"},{name:"null"}]},name:"linkedNodeGroupId"},{type:{name:"signature",type:"object",raw:"{ inputModifier?: AnnotationPointQueryInputModifier }",signature:{properties:[{key:"inputModifier",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_POINT_QUERY_INPUT_MODIFIERS)[keyof typeof ANNOTATION_POINT_QUERY_INPUT_MODIFIERS]",required:!1}}]}},name:"options"}],return:{name:"void"}},required:!1}},{key:"finishesOnLoopClosure",value:{name:"boolean",required:!1}}]}}},required:!0}}]},required:!1}},{key:"pointQuery",value:{name:"signature",type:"object",raw:`{
  inputModifiers?: readonly AnnotationPointQueryInputModifier[];
  onPointCreated: (context: PointQueryCreatedContext) => void;
}`,signature:{properties:[{key:"inputModifiers",value:{name:"unknown",required:!1}},{key:"onPointCreated",value:{name:"signature",type:"function",raw:"(context: PointQueryCreatedContext) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  coordinate: AnnotationGeographicCoordinate;
  linkedNodeGroupId: AnnotationNodeLinkId | null;
  inputModifier?: AnnotationPointQueryInputModifier;
  activeToolType: AnnotationToolId;
  activeToolSession: AnnotationModeSession | null;
  toolSessions: AnnotationModeSessionMap;
  sessionContext: AnnotationToolSessionContext;
}`,signature:{properties:[{key:"coordinate",value:{name:"AnnotationGeographicCoordinate",required:!0}},{key:"linkedNodeGroupId",value:{name:"union",raw:"AnnotationNodeLinkId | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"inputModifier",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_POINT_QUERY_INPUT_MODIFIERS)[keyof typeof ANNOTATION_POINT_QUERY_INPUT_MODIFIERS]",required:!1}},{key:"activeToolType",value:{name:"AnnotationToolId",required:!0}},{key:"activeToolSession",value:{name:"union",raw:"AnnotationModeSession | null",elements:[{name:"signature",type:"object",raw:`{
  toolType: AnnotationToolId;
  requestStart: () => void;
  requestFinish: () => boolean;
  discardDraft: () => void;
  onNodeCreated?: (
    coordinate: AnnotationGeographicCoordinate,
    linkedNodeGroupId?: AnnotationNodeLinkId | null,
    options?: { inputModifier?: AnnotationPointQueryInputModifier }
  ) => void;
  finishesOnLoopClosure?: boolean;
}`,signature:{properties:[{key:"toolType",value:{name:"AnnotationToolId",required:!0}},{key:"requestStart",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}},{key:"requestFinish",value:{name:"signature",type:"function",raw:"() => boolean",signature:{arguments:[],return:{name:"boolean"}},required:!0}},{key:"discardDraft",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}},{key:"onNodeCreated",value:{name:"signature",type:"function",raw:`(
  coordinate: AnnotationGeographicCoordinate,
  linkedNodeGroupId?: AnnotationNodeLinkId | null,
  options?: { inputModifier?: AnnotationPointQueryInputModifier }
) => void`,signature:{arguments:[{type:{name:"AnnotationGeographicCoordinate"},name:"coordinate"},{type:{name:"union",raw:"AnnotationNodeLinkId | null",elements:[{name:"string"},{name:"null"}]},name:"linkedNodeGroupId"},{type:{name:"signature",type:"object",raw:"{ inputModifier?: AnnotationPointQueryInputModifier }",signature:{properties:[{key:"inputModifier",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_POINT_QUERY_INPUT_MODIFIERS)[keyof typeof ANNOTATION_POINT_QUERY_INPUT_MODIFIERS]",required:!1}}]}},name:"options"}],return:{name:"void"}},required:!1}},{key:"finishesOnLoopClosure",value:{name:"boolean",required:!1}}]}},{name:"null"}],required:!0}},{key:"toolSessions",value:{name:"Partial",elements:[{name:"Record",elements:[{name:"AnnotationToolId"},{name:"signature",type:"object",raw:`{
  toolType: AnnotationToolId;
  requestStart: () => void;
  requestFinish: () => boolean;
  discardDraft: () => void;
  onNodeCreated?: (
    coordinate: AnnotationGeographicCoordinate,
    linkedNodeGroupId?: AnnotationNodeLinkId | null,
    options?: { inputModifier?: AnnotationPointQueryInputModifier }
  ) => void;
  finishesOnLoopClosure?: boolean;
}`,signature:{properties:[{key:"toolType",value:{name:"AnnotationToolId",required:!0}},{key:"requestStart",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}},{key:"requestFinish",value:{name:"signature",type:"function",raw:"() => boolean",signature:{arguments:[],return:{name:"boolean"}},required:!0}},{key:"discardDraft",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}},{key:"onNodeCreated",value:{name:"signature",type:"function",raw:`(
  coordinate: AnnotationGeographicCoordinate,
  linkedNodeGroupId?: AnnotationNodeLinkId | null,
  options?: { inputModifier?: AnnotationPointQueryInputModifier }
) => void`,signature:{arguments:[{type:{name:"AnnotationGeographicCoordinate"},name:"coordinate"},{type:{name:"union",raw:"AnnotationNodeLinkId | null",elements:[{name:"string"},{name:"null"}]},name:"linkedNodeGroupId"},{type:{name:"signature",type:"object",raw:"{ inputModifier?: AnnotationPointQueryInputModifier }",signature:{properties:[{key:"inputModifier",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_POINT_QUERY_INPUT_MODIFIERS)[keyof typeof ANNOTATION_POINT_QUERY_INPUT_MODIFIERS]",required:!1}}]}},name:"options"}],return:{name:"void"}},required:!1}},{key:"finishesOnLoopClosure",value:{name:"boolean",required:!1}}]}}],raw:"Record<AnnotationToolId, AnnotationModeSession>"}],raw:`Partial<
  Record<AnnotationToolId, AnnotationModeSession>
>`,required:!0}},{key:"sessionContext",value:{name:"signature",type:"object",raw:`{
  getState: () => AnnotationsStoreState;
  dispatch: AnnotationsStore["dispatch"];
  setActiveToolType: (toolId: AnnotationToolId) => void;
  drafts: AnnotationToolDraftStore;
  requestLabelText?: AnnotationLabelTextRequester;
  addAnnotation: (
    annotationType: StoredAnnotation["toolType"],
    coordinates: readonly AnnotationGeographicCoordinate[],
    options?: AddAnnotationOptions,
    linkedNodeGroupIds?: readonly (AnnotationNodeLinkId | null | undefined)[],
    sourceToolId?: AnnotationToolId
  ) => StoredAnnotation;
}`,signature:{properties:[{key:"getState",value:{name:"signature",type:"function",raw:"() => AnnotationsStoreState",signature:{arguments:[],return:{name:"signature",type:"object",raw:`{
  annotationToolType: AnnotationToolId;
  selectionState: AnnotationSelectionStoreState;
  annotationEntries: readonly StoredAnnotation[];
  nodes: readonly AnnotationNode[];
  linkedNodeGroups: readonly AnnotationNodeLink[];
  edges: readonly AnnotationEdge[];
  infoBoxState: AnnotationInfoBoxStoreState;
  settingsState: AnnotationSettingsStoreState;
}`,signature:{properties:[{key:"annotationToolType",value:{name:"AnnotationToolId",required:!0}},{key:"selectionState",value:{name:"signature",type:"object",raw:`{
  selectedAnnotationIds: readonly string[];
  previousSelectedAnnotationId: string | null;
}`,signature:{properties:[{key:"selectedAnnotationIds",value:{name:"unknown",required:!0}},{key:"previousSelectedAnnotationId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]},required:!0}},{key:"annotationEntries",value:{name:"unknown",required:!0}},{key:"nodes",value:{name:"unknown",required:!0}},{key:"linkedNodeGroups",value:{name:"unknown",required:!0}},{key:"edges",value:{name:"unknown",required:!0}},{key:"infoBoxState",value:{name:"signature",type:"object",raw:`{
  activeAnnotationId: string | null;
}`,signature:{properties:[{key:"activeAnnotationId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]},required:!0}},{key:"settingsState",value:{name:"signature",type:"object",raw:`{
  pointTemporaryMode: boolean;
  elevationReferenceAnnotationId: string | null;
  nextShortLabelCounterByToolType: Readonly<Record<string, number>>;
}`,signature:{properties:[{key:"pointTemporaryMode",value:{name:"boolean",required:!0}},{key:"elevationReferenceAnnotationId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"nextShortLabelCounterByToolType",value:{name:"Readonly",elements:[{name:"Record",elements:[{name:"string"},{name:"number"}],raw:"Record<string, number>"}],raw:"Readonly<Record<string, number>>",required:!0}}]},required:!0}}]}}},required:!0}},{key:"dispatch",value:{name:'ReturnType["dispatch"]',raw:'AnnotationsStore["dispatch"]',required:!0}},{key:"setActiveToolType",value:{name:"signature",type:"function",raw:"(toolId: AnnotationToolId) => void",signature:{arguments:[{type:{name:"AnnotationToolId"},name:"toolId"}],return:{name:"void"}},required:!0}},{key:"drafts",value:{name:"signature",type:"object",raw:`{
  get: (toolId: AnnotationToolId) => AnnotationToolDraftState;
  set: (toolId: AnnotationToolId, draft: AnnotationToolDraftState) => void;
  clear: (toolId: AnnotationToolId) => void;
  subscribe: (toolId: AnnotationToolId, listener: () => void) => () => void;
}`,signature:{properties:[{key:"get",value:{name:"signature",type:"function",raw:"(toolId: AnnotationToolId) => AnnotationToolDraftState",signature:{arguments:[{type:{name:"AnnotationToolId"},name:"toolId"}],return:{name:"signature",type:"object",raw:`{
  coordinates: readonly AnnotationGeographicCoordinate[];
  linkedNodeGroupIds: readonly (AnnotationNodeLinkId | null)[];
  feedback?: {
    kind: "warning";
    message: string;
  } | null;
}`,signature:{properties:[{key:"coordinates",value:{name:"unknown",required:!0}},{key:"linkedNodeGroupIds",value:{name:"unknown",required:!0}},{key:"feedback",value:{name:"union",raw:`{
  kind: "warning";
  message: string;
} | null`,elements:[{name:"signature",type:"object",raw:`{
  kind: "warning";
  message: string;
}`,signature:{properties:[{key:"kind",value:{name:"literal",value:'"warning"',required:!0}},{key:"message",value:{name:"string",required:!0}}]}},{name:"null"}],required:!1}}]},required:!0}},required:!0}},{key:"set",value:{name:"signature",type:"function",raw:"(toolId: AnnotationToolId, draft: AnnotationToolDraftState) => void",signature:{arguments:[{type:{name:"AnnotationToolId"},name:"toolId"},{type:{name:"signature",type:"object",raw:`{
  coordinates: readonly AnnotationGeographicCoordinate[];
  linkedNodeGroupIds: readonly (AnnotationNodeLinkId | null)[];
  feedback?: {
    kind: "warning";
    message: string;
  } | null;
}`,signature:{properties:[{key:"coordinates",value:{name:"unknown",required:!0}},{key:"linkedNodeGroupIds",value:{name:"unknown",required:!0}},{key:"feedback",value:{name:"union",raw:`{
  kind: "warning";
  message: string;
} | null`,elements:[{name:"signature",type:"object",raw:`{
  kind: "warning";
  message: string;
}`,signature:{properties:[{key:"kind",value:{name:"literal",value:'"warning"',required:!0}},{key:"message",value:{name:"string",required:!0}}]}},{name:"null"}],required:!1}}]},required:!0},name:"draft"}],return:{name:"void"}},required:!0}},{key:"clear",value:{name:"signature",type:"function",raw:"(toolId: AnnotationToolId) => void",signature:{arguments:[{type:{name:"AnnotationToolId"},name:"toolId"}],return:{name:"void"}},required:!0}},{key:"subscribe",value:{name:"signature",type:"function",raw:"(toolId: AnnotationToolId, listener: () => void) => () => void",signature:{arguments:[{type:{name:"AnnotationToolId"},name:"toolId"},{type:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},name:"listener"}],return:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}}},required:!0}}]},required:!0}},{key:"requestLabelText",value:{name:"signature",type:"function",raw:`(
  context: AnnotationLabelTextRequestContext
) => string | null | Promise<string | null>`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  coordinate: AnnotationGeographicCoordinate;
  defaultText: string;
  labelTextSuggestions: readonly string[];
  linkedNodeGroupId?: AnnotationNodeLinkId | null;
}`,signature:{properties:[{key:"coordinate",value:{name:"AnnotationGeographicCoordinate",required:!0}},{key:"defaultText",value:{name:"string",required:!0}},{key:"labelTextSuggestions",value:{name:"unknown",required:!0}},{key:"linkedNodeGroupId",value:{name:"union",raw:"AnnotationNodeLinkId | null",elements:[{name:"string"},{name:"null"}],required:!1}}]}},name:"context"}],return:{name:"union",raw:"string | null | Promise<string | null>",elements:[{name:"string"},{name:"null"},{name:"Promise",elements:[{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]}],raw:"Promise<string | null>"}]}},required:!1}},{key:"addAnnotation",value:{name:"signature",type:"function",raw:`(
  annotationType: StoredAnnotation["toolType"],
  coordinates: readonly AnnotationGeographicCoordinate[],
  options?: AddAnnotationOptions,
  linkedNodeGroupIds?: readonly (AnnotationNodeLinkId | null | undefined)[],
  sourceToolId?: AnnotationToolId
) => StoredAnnotation`,signature:{arguments:[{type:{name:"AnnotationType",raw:'StoredAnnotation["toolType"]'},name:"annotationType"},{type:{name:"unknown"},name:"coordinates"},{type:{name:"Pick",elements:[{name:"signature",type:"object",raw:`{
  id: string;
  toolType: AnnotationType;
  nodeIds: readonly string[];
  edgeIds: readonly string[];
  displayName?: string;
  shortLabel?: string;
  shortLabelSource?: AnnotationShortLabelSource;
  shortLabelCounter?: number;
  hidden?: boolean;
  locked?: boolean;
  annotationRole?: AnnotationEntryRole;
  readOnly?: boolean;
  labelAppearance?: AnnotationLabelAppearance;
  elevationDisplayMode?: AnnotationElevationDisplayMode;
  distanceAnchorCoordinateSelection?: RuntimePointLabelCoordinateSelection;
  distanceTriangleAnchorCoordinateRole?: RuntimeDistanceTriangleAnchorCoordinateRole;
  closed?: boolean;
  preferredNormalBearingRad?: number;
  externalCollection?: {
    type: "saved-measurement";
    id: string;
  };
  /** Identity across machines and shares; the runtime id only counts per session. */
  uuid?: string;
  /** ISO time of the last content change, stamped by the persistence on save. */
  updatedAt?: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"toolType",value:{name:"AnnotationType",required:!0}},{key:"nodeIds",value:{name:"unknown",required:!0}},{key:"edgeIds",value:{name:"unknown",required:!0}},{key:"displayName",value:{name:"string",required:!1}},{key:"shortLabel",value:{name:"string",required:!1}},{key:"shortLabelSource",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_SHORT_LABEL_SOURCES)[keyof typeof ANNOTATION_SHORT_LABEL_SOURCES]",required:!1}},{key:"shortLabelCounter",value:{name:"number",required:!1}},{key:"hidden",value:{name:"boolean",required:!1}},{key:"locked",value:{name:"boolean",required:!1}},{key:"annotationRole",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_ENTRY_ROLES)[keyof typeof ANNOTATION_ENTRY_ROLES]",required:!1}},{key:"readOnly",value:{name:"boolean",required:!1}},{key:"labelAppearance",value:{name:"AnnotationLabelAppearance",required:!1}},{key:"elevationDisplayMode",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_ELEVATION_DISPLAY_MODES)[keyof typeof ANNOTATION_ELEVATION_DISPLAY_MODES]",required:!1}},{key:"distanceAnchorCoordinateSelection",value:{name:"unknown[union]",raw:"(typeof RUNTIME_POINT_LABEL_COORDINATE_SELECTION)[keyof typeof RUNTIME_POINT_LABEL_COORDINATE_SELECTION]",required:!1}},{key:"distanceTriangleAnchorCoordinateRole",value:{name:"unknown[union]",raw:"(typeof RUNTIME_DISTANCE_TRIANGLE_ANCHOR_COORDINATE_ROLE)[keyof typeof RUNTIME_DISTANCE_TRIANGLE_ANCHOR_COORDINATE_ROLE]",required:!1}},{key:"closed",value:{name:"boolean",required:!1}},{key:"preferredNormalBearingRad",value:{name:"number",required:!1}},{key:"externalCollection",value:{name:"signature",type:"object",raw:`{
  type: "saved-measurement";
  id: string;
}`,signature:{properties:[{key:"type",value:{name:"literal",value:'"saved-measurement"',required:!0}},{key:"id",value:{name:"string",required:!0}}]},required:!1}},{key:"uuid",value:{name:"string",required:!1},description:"Identity across machines and shares; the runtime id only counts per session."},{key:"updatedAt",value:{name:"string",required:!1},description:"ISO time of the last content change, stamped by the persistence on save."}]},required:!0},{name:"union",raw:`| "closed"
| "preferredNormalBearingRad"
| "displayName"
| "shortLabel"
| "shortLabelSource"
| "shortLabelCounter"
| "hidden"
| "locked"
| "labelAppearance"
| "elevationDisplayMode"
| "distanceAnchorCoordinateSelection"
| "distanceTriangleAnchorCoordinateRole"`,elements:[{name:"literal",value:'"closed"'},{name:"literal",value:'"preferredNormalBearingRad"'},{name:"literal",value:'"displayName"'},{name:"literal",value:'"shortLabel"'},{name:"literal",value:'"shortLabelSource"'},{name:"literal",value:'"shortLabelCounter"'},{name:"literal",value:'"hidden"'},{name:"literal",value:'"locked"'},{name:"literal",value:'"labelAppearance"'},{name:"literal",value:'"elevationDisplayMode"'},{name:"literal",value:'"distanceAnchorCoordinateSelection"'},{name:"literal",value:'"distanceTriangleAnchorCoordinateRole"'}]}],raw:`Pick<
  StoredAnnotation,
  | "closed"
  | "preferredNormalBearingRad"
  | "displayName"
  | "shortLabel"
  | "shortLabelSource"
  | "shortLabelCounter"
  | "hidden"
  | "locked"
  | "labelAppearance"
  | "elevationDisplayMode"
  | "distanceAnchorCoordinateSelection"
  | "distanceTriangleAnchorCoordinateRole"
>`,required:!1},name:"options"},{type:{name:"unknown"},name:"linkedNodeGroupIds"},{type:{name:"AnnotationToolId"},name:"sourceToolId"}],return:{name:"signature",type:"object",raw:`{
  id: string;
  toolType: AnnotationType;
  nodeIds: readonly string[];
  edgeIds: readonly string[];
  displayName?: string;
  shortLabel?: string;
  shortLabelSource?: AnnotationShortLabelSource;
  shortLabelCounter?: number;
  hidden?: boolean;
  locked?: boolean;
  annotationRole?: AnnotationEntryRole;
  readOnly?: boolean;
  labelAppearance?: AnnotationLabelAppearance;
  elevationDisplayMode?: AnnotationElevationDisplayMode;
  distanceAnchorCoordinateSelection?: RuntimePointLabelCoordinateSelection;
  distanceTriangleAnchorCoordinateRole?: RuntimeDistanceTriangleAnchorCoordinateRole;
  closed?: boolean;
  preferredNormalBearingRad?: number;
  externalCollection?: {
    type: "saved-measurement";
    id: string;
  };
  /** Identity across machines and shares; the runtime id only counts per session. */
  uuid?: string;
  /** ISO time of the last content change, stamped by the persistence on save. */
  updatedAt?: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"toolType",value:{name:"AnnotationType",required:!0}},{key:"nodeIds",value:{name:"unknown",required:!0}},{key:"edgeIds",value:{name:"unknown",required:!0}},{key:"displayName",value:{name:"string",required:!1}},{key:"shortLabel",value:{name:"string",required:!1}},{key:"shortLabelSource",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_SHORT_LABEL_SOURCES)[keyof typeof ANNOTATION_SHORT_LABEL_SOURCES]",required:!1}},{key:"shortLabelCounter",value:{name:"number",required:!1}},{key:"hidden",value:{name:"boolean",required:!1}},{key:"locked",value:{name:"boolean",required:!1}},{key:"annotationRole",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_ENTRY_ROLES)[keyof typeof ANNOTATION_ENTRY_ROLES]",required:!1}},{key:"readOnly",value:{name:"boolean",required:!1}},{key:"labelAppearance",value:{name:"AnnotationLabelAppearance",required:!1}},{key:"elevationDisplayMode",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_ELEVATION_DISPLAY_MODES)[keyof typeof ANNOTATION_ELEVATION_DISPLAY_MODES]",required:!1}},{key:"distanceAnchorCoordinateSelection",value:{name:"unknown[union]",raw:"(typeof RUNTIME_POINT_LABEL_COORDINATE_SELECTION)[keyof typeof RUNTIME_POINT_LABEL_COORDINATE_SELECTION]",required:!1}},{key:"distanceTriangleAnchorCoordinateRole",value:{name:"unknown[union]",raw:"(typeof RUNTIME_DISTANCE_TRIANGLE_ANCHOR_COORDINATE_ROLE)[keyof typeof RUNTIME_DISTANCE_TRIANGLE_ANCHOR_COORDINATE_ROLE]",required:!1}},{key:"closed",value:{name:"boolean",required:!1}},{key:"preferredNormalBearingRad",value:{name:"number",required:!1}},{key:"externalCollection",value:{name:"signature",type:"object",raw:`{
  type: "saved-measurement";
  id: string;
}`,signature:{properties:[{key:"type",value:{name:"literal",value:'"saved-measurement"',required:!0}},{key:"id",value:{name:"string",required:!0}}]},required:!1}},{key:"uuid",value:{name:"string",required:!1},description:"Identity across machines and shares; the runtime id only counts per session."},{key:"updatedAt",value:{name:"string",required:!1},description:"ISO time of the last content change, stamped by the persistence on save."}]},required:!0}},required:!0}}]},required:!0}}]}},name:"context"}],return:{name:"void"}},required:!0}}]},required:!1}},{key:"addAnnotation",value:{name:"signature",type:"object",raw:`{
  resolveOptions: (
    context: AnnotationToolAddAnnotationContext
  ) => AddAnnotationOptions | undefined;
}`,signature:{properties:[{key:"resolveOptions",value:{name:"signature",type:"function",raw:`(
  context: AnnotationToolAddAnnotationContext
) => AddAnnotationOptions | undefined`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  annotationType: StoredAnnotation["toolType"];
  toolId: AnnotationToolId | null;
  engine: AnnotationEngine | null;
  coordinates: readonly AnnotationGeographicCoordinate[];
  options?: AddAnnotationOptions;
  linkedNodeGroupIds?: readonly (AnnotationNodeLinkId | null | undefined)[];
}`,signature:{properties:[{key:"annotationType",value:{name:"AnnotationType",raw:'StoredAnnotation["toolType"]',required:!0}},{key:"toolId",value:{name:"union",raw:"AnnotationToolId | null",elements:[{name:"AnnotationToolId"},{name:"null"}],required:!0}},{key:"engine",value:{name:"union",raw:"AnnotationEngine | null",elements:[{name:"AnnotationEngine"},{name:"null"}],required:!0}},{key:"coordinates",value:{name:"unknown",required:!0}},{key:"options",value:{name:"Pick",elements:[{name:"signature",type:"object",raw:`{
  id: string;
  toolType: AnnotationType;
  nodeIds: readonly string[];
  edgeIds: readonly string[];
  displayName?: string;
  shortLabel?: string;
  shortLabelSource?: AnnotationShortLabelSource;
  shortLabelCounter?: number;
  hidden?: boolean;
  locked?: boolean;
  annotationRole?: AnnotationEntryRole;
  readOnly?: boolean;
  labelAppearance?: AnnotationLabelAppearance;
  elevationDisplayMode?: AnnotationElevationDisplayMode;
  distanceAnchorCoordinateSelection?: RuntimePointLabelCoordinateSelection;
  distanceTriangleAnchorCoordinateRole?: RuntimeDistanceTriangleAnchorCoordinateRole;
  closed?: boolean;
  preferredNormalBearingRad?: number;
  externalCollection?: {
    type: "saved-measurement";
    id: string;
  };
  /** Identity across machines and shares; the runtime id only counts per session. */
  uuid?: string;
  /** ISO time of the last content change, stamped by the persistence on save. */
  updatedAt?: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"toolType",value:{name:"AnnotationType",required:!0}},{key:"nodeIds",value:{name:"unknown",required:!0}},{key:"edgeIds",value:{name:"unknown",required:!0}},{key:"displayName",value:{name:"string",required:!1}},{key:"shortLabel",value:{name:"string",required:!1}},{key:"shortLabelSource",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_SHORT_LABEL_SOURCES)[keyof typeof ANNOTATION_SHORT_LABEL_SOURCES]",required:!1}},{key:"shortLabelCounter",value:{name:"number",required:!1}},{key:"hidden",value:{name:"boolean",required:!1}},{key:"locked",value:{name:"boolean",required:!1}},{key:"annotationRole",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_ENTRY_ROLES)[keyof typeof ANNOTATION_ENTRY_ROLES]",required:!1}},{key:"readOnly",value:{name:"boolean",required:!1}},{key:"labelAppearance",value:{name:"AnnotationLabelAppearance",required:!1}},{key:"elevationDisplayMode",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_ELEVATION_DISPLAY_MODES)[keyof typeof ANNOTATION_ELEVATION_DISPLAY_MODES]",required:!1}},{key:"distanceAnchorCoordinateSelection",value:{name:"unknown[union]",raw:"(typeof RUNTIME_POINT_LABEL_COORDINATE_SELECTION)[keyof typeof RUNTIME_POINT_LABEL_COORDINATE_SELECTION]",required:!1}},{key:"distanceTriangleAnchorCoordinateRole",value:{name:"unknown[union]",raw:"(typeof RUNTIME_DISTANCE_TRIANGLE_ANCHOR_COORDINATE_ROLE)[keyof typeof RUNTIME_DISTANCE_TRIANGLE_ANCHOR_COORDINATE_ROLE]",required:!1}},{key:"closed",value:{name:"boolean",required:!1}},{key:"preferredNormalBearingRad",value:{name:"number",required:!1}},{key:"externalCollection",value:{name:"signature",type:"object",raw:`{
  type: "saved-measurement";
  id: string;
}`,signature:{properties:[{key:"type",value:{name:"literal",value:'"saved-measurement"',required:!0}},{key:"id",value:{name:"string",required:!0}}]},required:!1}},{key:"uuid",value:{name:"string",required:!1},description:"Identity across machines and shares; the runtime id only counts per session."},{key:"updatedAt",value:{name:"string",required:!1},description:"ISO time of the last content change, stamped by the persistence on save."}]},required:!0},{name:"union",raw:`| "closed"
| "preferredNormalBearingRad"
| "displayName"
| "shortLabel"
| "shortLabelSource"
| "shortLabelCounter"
| "hidden"
| "locked"
| "labelAppearance"
| "elevationDisplayMode"
| "distanceAnchorCoordinateSelection"
| "distanceTriangleAnchorCoordinateRole"`,elements:[{name:"literal",value:'"closed"'},{name:"literal",value:'"preferredNormalBearingRad"'},{name:"literal",value:'"displayName"'},{name:"literal",value:'"shortLabel"'},{name:"literal",value:'"shortLabelSource"'},{name:"literal",value:'"shortLabelCounter"'},{name:"literal",value:'"hidden"'},{name:"literal",value:'"locked"'},{name:"literal",value:'"labelAppearance"'},{name:"literal",value:'"elevationDisplayMode"'},{name:"literal",value:'"distanceAnchorCoordinateSelection"'},{name:"literal",value:'"distanceTriangleAnchorCoordinateRole"'}]}],raw:`Pick<
  StoredAnnotation,
  | "closed"
  | "preferredNormalBearingRad"
  | "displayName"
  | "shortLabel"
  | "shortLabelSource"
  | "shortLabelCounter"
  | "hidden"
  | "locked"
  | "labelAppearance"
  | "elevationDisplayMode"
  | "distanceAnchorCoordinateSelection"
  | "distanceTriangleAnchorCoordinateRole"
>`,required:!1}},{key:"linkedNodeGroupIds",value:{name:"unknown",required:!1}}]}},name:"context"}],return:{name:"union",raw:"AddAnnotationOptions | undefined",elements:[{name:"Pick",elements:[{name:"signature",type:"object",raw:`{
  id: string;
  toolType: AnnotationType;
  nodeIds: readonly string[];
  edgeIds: readonly string[];
  displayName?: string;
  shortLabel?: string;
  shortLabelSource?: AnnotationShortLabelSource;
  shortLabelCounter?: number;
  hidden?: boolean;
  locked?: boolean;
  annotationRole?: AnnotationEntryRole;
  readOnly?: boolean;
  labelAppearance?: AnnotationLabelAppearance;
  elevationDisplayMode?: AnnotationElevationDisplayMode;
  distanceAnchorCoordinateSelection?: RuntimePointLabelCoordinateSelection;
  distanceTriangleAnchorCoordinateRole?: RuntimeDistanceTriangleAnchorCoordinateRole;
  closed?: boolean;
  preferredNormalBearingRad?: number;
  externalCollection?: {
    type: "saved-measurement";
    id: string;
  };
  /** Identity across machines and shares; the runtime id only counts per session. */
  uuid?: string;
  /** ISO time of the last content change, stamped by the persistence on save. */
  updatedAt?: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"toolType",value:{name:"AnnotationType",required:!0}},{key:"nodeIds",value:{name:"unknown",required:!0}},{key:"edgeIds",value:{name:"unknown",required:!0}},{key:"displayName",value:{name:"string",required:!1}},{key:"shortLabel",value:{name:"string",required:!1}},{key:"shortLabelSource",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_SHORT_LABEL_SOURCES)[keyof typeof ANNOTATION_SHORT_LABEL_SOURCES]",required:!1}},{key:"shortLabelCounter",value:{name:"number",required:!1}},{key:"hidden",value:{name:"boolean",required:!1}},{key:"locked",value:{name:"boolean",required:!1}},{key:"annotationRole",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_ENTRY_ROLES)[keyof typeof ANNOTATION_ENTRY_ROLES]",required:!1}},{key:"readOnly",value:{name:"boolean",required:!1}},{key:"labelAppearance",value:{name:"AnnotationLabelAppearance",required:!1}},{key:"elevationDisplayMode",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_ELEVATION_DISPLAY_MODES)[keyof typeof ANNOTATION_ELEVATION_DISPLAY_MODES]",required:!1}},{key:"distanceAnchorCoordinateSelection",value:{name:"unknown[union]",raw:"(typeof RUNTIME_POINT_LABEL_COORDINATE_SELECTION)[keyof typeof RUNTIME_POINT_LABEL_COORDINATE_SELECTION]",required:!1}},{key:"distanceTriangleAnchorCoordinateRole",value:{name:"unknown[union]",raw:"(typeof RUNTIME_DISTANCE_TRIANGLE_ANCHOR_COORDINATE_ROLE)[keyof typeof RUNTIME_DISTANCE_TRIANGLE_ANCHOR_COORDINATE_ROLE]",required:!1}},{key:"closed",value:{name:"boolean",required:!1}},{key:"preferredNormalBearingRad",value:{name:"number",required:!1}},{key:"externalCollection",value:{name:"signature",type:"object",raw:`{
  type: "saved-measurement";
  id: string;
}`,signature:{properties:[{key:"type",value:{name:"literal",value:'"saved-measurement"',required:!0}},{key:"id",value:{name:"string",required:!0}}]},required:!1}},{key:"uuid",value:{name:"string",required:!1},description:"Identity across machines and shares; the runtime id only counts per session."},{key:"updatedAt",value:{name:"string",required:!1},description:"ISO time of the last content change, stamped by the persistence on save."}]},required:!0},{name:"union",raw:`| "closed"
| "preferredNormalBearingRad"
| "displayName"
| "shortLabel"
| "shortLabelSource"
| "shortLabelCounter"
| "hidden"
| "locked"
| "labelAppearance"
| "elevationDisplayMode"
| "distanceAnchorCoordinateSelection"
| "distanceTriangleAnchorCoordinateRole"`,elements:[{name:"literal",value:'"closed"'},{name:"literal",value:'"preferredNormalBearingRad"'},{name:"literal",value:'"displayName"'},{name:"literal",value:'"shortLabel"'},{name:"literal",value:'"shortLabelSource"'},{name:"literal",value:'"shortLabelCounter"'},{name:"literal",value:'"hidden"'},{name:"literal",value:'"locked"'},{name:"literal",value:'"labelAppearance"'},{name:"literal",value:'"elevationDisplayMode"'},{name:"literal",value:'"distanceAnchorCoordinateSelection"'},{name:"literal",value:'"distanceTriangleAnchorCoordinateRole"'}]}],raw:`Pick<
  StoredAnnotation,
  | "closed"
  | "preferredNormalBearingRad"
  | "displayName"
  | "shortLabel"
  | "shortLabelSource"
  | "shortLabelCounter"
  | "hidden"
  | "locked"
  | "labelAppearance"
  | "elevationDisplayMode"
  | "distanceAnchorCoordinateSelection"
  | "distanceTriangleAnchorCoordinateRole"
>`,required:!1},{name:"undefined"}]}},required:!0}}]},required:!1}},{key:"authoringVisuals",value:{name:"signature",type:"object",raw:`{
  createController: (
    context: AnnotationToolAuthoringContext
  ) => AnnotationToolAuthoringController | null;
}`,signature:{properties:[{key:"createController",value:{name:"signature",type:"function",raw:`(
  context: AnnotationToolAuthoringContext
) => AnnotationToolAuthoringController | null`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  engine: AnnotationEngine | null;
  annotationsStore: AnnotationsStore;
  drafts: AnnotationToolDraftStore;
  labelOverlay: LabelOverlayContextType;
  requestRender: () => void;
  formatOptions: AnnotationsRuntimeFormatOptions;
  lineLabelOptions: PartialAnnotationLineLabelOptions;
}`,signature:{properties:[{key:"engine",value:{name:"union",raw:"AnnotationEngine | null",elements:[{name:"AnnotationEngine"},{name:"null"}],required:!0}},{key:"annotationsStore",value:{name:"ReturnType",elements:[{name:"createAnnotationsStore"}],raw:"ReturnType<typeof createAnnotationsStore>",required:!0}},{key:"drafts",value:{name:"signature",type:"object",raw:`{
  get: (toolId: AnnotationToolId) => AnnotationToolDraftState;
  set: (toolId: AnnotationToolId, draft: AnnotationToolDraftState) => void;
  clear: (toolId: AnnotationToolId) => void;
  subscribe: (toolId: AnnotationToolId, listener: () => void) => () => void;
}`,signature:{properties:[{key:"get",value:{name:"signature",type:"function",raw:"(toolId: AnnotationToolId) => AnnotationToolDraftState",signature:{arguments:[{type:{name:"AnnotationToolId"},name:"toolId"}],return:{name:"signature",type:"object",raw:`{
  coordinates: readonly AnnotationGeographicCoordinate[];
  linkedNodeGroupIds: readonly (AnnotationNodeLinkId | null)[];
  feedback?: {
    kind: "warning";
    message: string;
  } | null;
}`,signature:{properties:[{key:"coordinates",value:{name:"unknown",required:!0}},{key:"linkedNodeGroupIds",value:{name:"unknown",required:!0}},{key:"feedback",value:{name:"union",raw:`{
  kind: "warning";
  message: string;
} | null`,elements:[{name:"signature",type:"object",raw:`{
  kind: "warning";
  message: string;
}`,signature:{properties:[{key:"kind",value:{name:"literal",value:'"warning"',required:!0}},{key:"message",value:{name:"string",required:!0}}]}},{name:"null"}],required:!1}}]},required:!0}},required:!0}},{key:"set",value:{name:"signature",type:"function",raw:"(toolId: AnnotationToolId, draft: AnnotationToolDraftState) => void",signature:{arguments:[{type:{name:"AnnotationToolId"},name:"toolId"},{type:{name:"signature",type:"object",raw:`{
  coordinates: readonly AnnotationGeographicCoordinate[];
  linkedNodeGroupIds: readonly (AnnotationNodeLinkId | null)[];
  feedback?: {
    kind: "warning";
    message: string;
  } | null;
}`,signature:{properties:[{key:"coordinates",value:{name:"unknown",required:!0}},{key:"linkedNodeGroupIds",value:{name:"unknown",required:!0}},{key:"feedback",value:{name:"union",raw:`{
  kind: "warning";
  message: string;
} | null`,elements:[{name:"signature",type:"object",raw:`{
  kind: "warning";
  message: string;
}`,signature:{properties:[{key:"kind",value:{name:"literal",value:'"warning"',required:!0}},{key:"message",value:{name:"string",required:!0}}]}},{name:"null"}],required:!1}}]},required:!0},name:"draft"}],return:{name:"void"}},required:!0}},{key:"clear",value:{name:"signature",type:"function",raw:"(toolId: AnnotationToolId) => void",signature:{arguments:[{type:{name:"AnnotationToolId"},name:"toolId"}],return:{name:"void"}},required:!0}},{key:"subscribe",value:{name:"signature",type:"function",raw:"(toolId: AnnotationToolId, listener: () => void) => () => void",signature:{arguments:[{type:{name:"AnnotationToolId"},name:"toolId"},{type:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},name:"listener"}],return:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}}},required:!0}}]},required:!0}},{key:"labelOverlay",value:{name:"LabelOverlayContextType",required:!0}},{key:"requestRender",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}},{key:"formatOptions",value:{name:"signature",type:"object",raw:`{
  lengthMeters?: FormatLengthMetersOptions;
  areaSquareMeters?: FormatAreaSquareMetersAdaptiveOptions;
  degrees?: FormatDegreesOptions;
  geographicCoordinate?: GeographicCoordinateFormatOptions;
  decimalNumber?: FormatDecimalNumberOptions;
}`,signature:{properties:[{key:"lengthMeters",value:{name:"FormatLengthMetersOptions",required:!1}},{key:"areaSquareMeters",value:{name:"FormatAreaSquareMetersAdaptiveOptions",required:!1}},{key:"degrees",value:{name:"FormatDegreesOptions",required:!1}},{key:"geographicCoordinate",value:{name:"GeographicCoordinateFormatOptions",required:!1}},{key:"decimalNumber",value:{name:"FormatDecimalNumberOptions",required:!1}}]},required:!0}},{key:"lineLabelOptions",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  appearance?: Partial<AnnotationLineLabelAppearanceOptions>;
  text?: Partial<
    Omit<AnnotationLineLabelTextOptions, "echo"> & {
      echo?: Partial<AnnotationLineLabelTextEchoOptions>;
    }
  >;
  background?: Partial<AnnotationLineLabelBackgroundOptions>;
  surface?: Partial<AnnotationLineLabelSurfaceOptions>;
  layout?: Partial<AnnotationLineLabelLayoutOptions>;
  collision?: Partial<AnnotationLineLabelCollisionOptions>;
}`,signature:{properties:[{key:"appearance",value:{name:"Partial",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  themeStyle: AnnotationThemeStyle;
}`,signature:{properties:[{key:"themeStyle",value:{name:"unknown[unknown]",raw:"(typeof ANNOTATION_THEME.style)[keyof typeof ANNOTATION_THEME.style]",required:!0}}]}}],raw:`Readonly<{
  themeStyle: AnnotationThemeStyle;
}>`}],raw:"Partial<AnnotationLineLabelAppearanceOptions>",required:!1}},{key:"text",value:{name:"Partial",elements:[{name:"intersection",raw:`Omit<AnnotationLineLabelTextOptions, "echo"> & {
  echo?: Partial<AnnotationLineLabelTextEchoOptions>;
}`,elements:[{name:"Omit",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fontFamily: string;
  fontWeight: string | number;
  color?: string;
  blendMode?: CssMixBlendMode;
  echo?: AnnotationLineLabelTextEchoOptions;
}`,signature:{properties:[{key:"fontFamily",value:{name:"string",required:!0}},{key:"fontWeight",value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!0}},{key:"color",value:{name:"string",required:!1}},{key:"blendMode",value:{name:"CssMixBlendMode",required:!1}},{key:"echo",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  color?: string;
  blurPx?: number;
  opacity?: number;
  blendMode?: CssMixBlendMode;
}`,signature:{properties:[{key:"color",value:{name:"string",required:!1}},{key:"blurPx",value:{name:"number",required:!1}},{key:"opacity",value:{name:"number",required:!1}},{key:"blendMode",value:{name:"CssMixBlendMode",required:!1}}]}}],raw:`Readonly<{
  color?: string;
  blurPx?: number;
  opacity?: number;
  blendMode?: CssMixBlendMode;
}>`,required:!1}}]}}],raw:`Readonly<{
  fontFamily: string;
  fontWeight: string | number;
  color?: string;
  blendMode?: CssMixBlendMode;
  echo?: AnnotationLineLabelTextEchoOptions;
}>`},{name:"literal",value:'"echo"'}],raw:'Omit<AnnotationLineLabelTextOptions, "echo">'},{name:"signature",type:"object",raw:`{
  echo?: Partial<AnnotationLineLabelTextEchoOptions>;
}`,signature:{properties:[{key:"echo",value:{name:"Partial",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  color?: string;
  blurPx?: number;
  opacity?: number;
  blendMode?: CssMixBlendMode;
}`,signature:{properties:[{key:"color",value:{name:"string",required:!1}},{key:"blurPx",value:{name:"number",required:!1}},{key:"opacity",value:{name:"number",required:!1}},{key:"blendMode",value:{name:"CssMixBlendMode",required:!1}}]}}],raw:`Readonly<{
  color?: string;
  blurPx?: number;
  opacity?: number;
  blendMode?: CssMixBlendMode;
}>`,required:!1}],raw:"Partial<AnnotationLineLabelTextEchoOptions>",required:!1}}]}}]}],raw:`Partial<
  Omit<AnnotationLineLabelTextOptions, "echo"> & {
    echo?: Partial<AnnotationLineLabelTextEchoOptions>;
  }
>`,required:!1}},{key:"background",value:{name:"Partial",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  style: AnnotationLineLabelBackgroundStyle;
  showBackdrop?: boolean;
  color?: string;
  blendMode?: CssMixBlendMode;
  blurPx?: number;
  brightnessPct?: number;
  saturatePct?: number;
  surfaceAlpha?: number;
  radiusEx?: number;
  edgeBlurPx?: number;
  insetBlockEx?: number;
  insetInlineEx?: number;
}`,signature:{properties:[{key:"style",value:{name:"unknown[unknown]",raw:"(typeof ANNOTATION_THEME.lineLabel.backgroundStyle)[keyof typeof ANNOTATION_THEME.lineLabel.backgroundStyle]",required:!0}},{key:"showBackdrop",value:{name:"boolean",required:!1}},{key:"color",value:{name:"string",required:!1}},{key:"blendMode",value:{name:"CssMixBlendMode",required:!1}},{key:"blurPx",value:{name:"number",required:!1}},{key:"brightnessPct",value:{name:"number",required:!1}},{key:"saturatePct",value:{name:"number",required:!1}},{key:"surfaceAlpha",value:{name:"number",required:!1}},{key:"radiusEx",value:{name:"number",required:!1}},{key:"edgeBlurPx",value:{name:"number",required:!1}},{key:"insetBlockEx",value:{name:"number",required:!1}},{key:"insetInlineEx",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  style: AnnotationLineLabelBackgroundStyle;
  showBackdrop?: boolean;
  color?: string;
  blendMode?: CssMixBlendMode;
  blurPx?: number;
  brightnessPct?: number;
  saturatePct?: number;
  surfaceAlpha?: number;
  radiusEx?: number;
  edgeBlurPx?: number;
  insetBlockEx?: number;
  insetInlineEx?: number;
}>`}],raw:"Partial<AnnotationLineLabelBackgroundOptions>",required:!1}},{key:"surface",value:{name:"Partial",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  blendMode?: CssMixBlendMode;
  paddingBlockEx?: number;
  paddingInlineEx?: number;
}`,signature:{properties:[{key:"blendMode",value:{name:"CssMixBlendMode",required:!1}},{key:"paddingBlockEx",value:{name:"number",required:!1}},{key:"paddingInlineEx",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  blendMode?: CssMixBlendMode;
  paddingBlockEx?: number;
  paddingInlineEx?: number;
}>`}],raw:"Partial<AnnotationLineLabelSurfaceOptions>",required:!1}},{key:"layout",value:{name:"Partial",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  shortEdgeOffsetPx: number;
}`,signature:{properties:[{key:"shortEdgeOffsetPx",value:{name:"number",required:!0}}]}}],raw:`Readonly<{
  shortEdgeOffsetPx: number;
}>`}],raw:"Partial<AnnotationLineLabelLayoutOptions>",required:!1}},{key:"collision",value:{name:"Partial",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  allowEarlyRemoval: boolean;
  resolutionStrategy: AnnotationLineLabelCollisionResolutionStrategy;
  anchorSlideStepRatio: number;
  maxAnchorSlideDeltaRatio: number;
}`,signature:{properties:[{key:"allowEarlyRemoval",value:{name:"boolean",required:!0}},{key:"resolutionStrategy",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_LINE_LABEL_COLLISION_RESOLUTION_STRATEGY)[keyof typeof ANNOTATION_LINE_LABEL_COLLISION_RESOLUTION_STRATEGY]",required:!0}},{key:"anchorSlideStepRatio",value:{name:"number",required:!0}},{key:"maxAnchorSlideDeltaRatio",value:{name:"number",required:!0}}]}}],raw:`Readonly<{
  allowEarlyRemoval: boolean;
  resolutionStrategy: AnnotationLineLabelCollisionResolutionStrategy;
  anchorSlideStepRatio: number;
  maxAnchorSlideDeltaRatio: number;
}>`}],raw:"Partial<AnnotationLineLabelCollisionOptions>",required:!1}}]}}],raw:`Readonly<{
  appearance?: Partial<AnnotationLineLabelAppearanceOptions>;
  text?: Partial<
    Omit<AnnotationLineLabelTextOptions, "echo"> & {
      echo?: Partial<AnnotationLineLabelTextEchoOptions>;
    }
  >;
  background?: Partial<AnnotationLineLabelBackgroundOptions>;
  surface?: Partial<AnnotationLineLabelSurfaceOptions>;
  layout?: Partial<AnnotationLineLabelLayoutOptions>;
  collision?: Partial<AnnotationLineLabelCollisionOptions>;
}>`,required:!0}}]}},name:"context"}],return:{name:"union",raw:"AnnotationToolAuthoringController | null",elements:[{name:"signature",type:"object",raw:`{
  setEnabled: (enabled: boolean) => void;
  setPointQueryPickResult: (
    pickResult: PointQueryPickResult | null,
    options?: { requestRender?: boolean }
  ) => void;
  isPointQueryPickResultAcceptable?: () => boolean;
  getPointQueryVisualStyle?: () => AnnotationPointQueryVisualStyle | undefined;
  destroy: () => void;
}`,signature:{properties:[{key:"setEnabled",value:{name:"signature",type:"function",raw:"(enabled: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"enabled"}],return:{name:"void"}},required:!0}},{key:"setPointQueryPickResult",value:{name:"signature",type:"function",raw:`(
  pickResult: PointQueryPickResult | null,
  options?: { requestRender?: boolean }
) => void`,signature:{arguments:[{type:{name:"union",raw:"PointQueryPickResult | null",elements:[{name:"signature",type:"object",raw:`{
  coordinate: AnnotationGeographicCoordinate | null;
  screenPosition: { x: number; y: number } | null;
  pointECEF: Vector3 | null;
  surfaceNormalECEF: Vector3 | null;
  inputModifier?: AnnotationPointQueryInputModifier;
}`,signature:{properties:[{key:"coordinate",value:{name:"union",raw:"AnnotationGeographicCoordinate | null",elements:[{name:"AnnotationGeographicCoordinate"},{name:"null"}],required:!0}},{key:"screenPosition",value:{name:"union",raw:"{ x: number; y: number } | null",elements:[{name:"signature",type:"object",raw:"{ x: number; y: number }",signature:{properties:[{key:"x",value:{name:"number",required:!0}},{key:"y",value:{name:"number",required:!0}}]}},{name:"null"}],required:!0}},{key:"pointECEF",value:{name:"union",raw:"Vector3 | null",elements:[{name:"Vector3"},{name:"null"}],required:!0}},{key:"surfaceNormalECEF",value:{name:"union",raw:"Vector3 | null",elements:[{name:"Vector3"},{name:"null"}],required:!0}},{key:"inputModifier",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_POINT_QUERY_INPUT_MODIFIERS)[keyof typeof ANNOTATION_POINT_QUERY_INPUT_MODIFIERS]",required:!1}}]}},{name:"null"}]},name:"pickResult"},{type:{name:"signature",type:"object",raw:"{ requestRender?: boolean }",signature:{properties:[{key:"requestRender",value:{name:"boolean",required:!1}}]}},name:"options"}],return:{name:"void"}},required:!0}},{key:"isPointQueryPickResultAcceptable",value:{name:"signature",type:"function",raw:"() => boolean",signature:{arguments:[],return:{name:"boolean"}},required:!1}},{key:"getPointQueryVisualStyle",value:{name:"signature",type:"function",raw:"() => AnnotationPointQueryVisualStyle | undefined",signature:{arguments:[],return:{name:"union",raw:"AnnotationPointQueryVisualStyle | undefined",elements:[{name:"union",raw:`Readonly<{
  color?: string;
  opacity?: number;
}> | null`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  color?: string;
  opacity?: number;
}`,signature:{properties:[{key:"color",value:{name:"string",required:!1}},{key:"opacity",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  color?: string;
  opacity?: number;
}>`},{name:"null"}]},{name:"undefined"}]}},required:!1}},{key:"destroy",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}}]}},{name:"null"}]}},required:!0}}]},required:!1}},{key:"keyboard",value:{name:"signature",type:"object",raw:`{
  onKeyDown: (context: AnnotationToolKeyboardContext) => boolean;
}`,signature:{properties:[{key:"onKeyDown",value:{name:"signature",type:"function",raw:"(context: AnnotationToolKeyboardContext) => boolean",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  event: KeyboardEvent;
  activeToolType: AnnotationToolId;
  activeToolSession: AnnotationModeSession | null;
  requestFinishMeasurement: () => boolean;
  requestActivateTool: (toolId?: AnnotationToolId) => void;
  requestModeChange: (toolId: AnnotationToolId) => void;
  sessionContext: AnnotationToolSessionContext;
}`,signature:{properties:[{key:"event",value:{name:"KeyboardEvent",required:!0}},{key:"activeToolType",value:{name:"AnnotationToolId",required:!0}},{key:"activeToolSession",value:{name:"union",raw:"AnnotationModeSession | null",elements:[{name:"signature",type:"object",raw:`{
  toolType: AnnotationToolId;
  requestStart: () => void;
  requestFinish: () => boolean;
  discardDraft: () => void;
  onNodeCreated?: (
    coordinate: AnnotationGeographicCoordinate,
    linkedNodeGroupId?: AnnotationNodeLinkId | null,
    options?: { inputModifier?: AnnotationPointQueryInputModifier }
  ) => void;
  finishesOnLoopClosure?: boolean;
}`,signature:{properties:[{key:"toolType",value:{name:"AnnotationToolId",required:!0}},{key:"requestStart",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}},{key:"requestFinish",value:{name:"signature",type:"function",raw:"() => boolean",signature:{arguments:[],return:{name:"boolean"}},required:!0}},{key:"discardDraft",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}},{key:"onNodeCreated",value:{name:"signature",type:"function",raw:`(
  coordinate: AnnotationGeographicCoordinate,
  linkedNodeGroupId?: AnnotationNodeLinkId | null,
  options?: { inputModifier?: AnnotationPointQueryInputModifier }
) => void`,signature:{arguments:[{type:{name:"AnnotationGeographicCoordinate"},name:"coordinate"},{type:{name:"union",raw:"AnnotationNodeLinkId | null",elements:[{name:"string"},{name:"null"}]},name:"linkedNodeGroupId"},{type:{name:"signature",type:"object",raw:"{ inputModifier?: AnnotationPointQueryInputModifier }",signature:{properties:[{key:"inputModifier",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_POINT_QUERY_INPUT_MODIFIERS)[keyof typeof ANNOTATION_POINT_QUERY_INPUT_MODIFIERS]",required:!1}}]}},name:"options"}],return:{name:"void"}},required:!1}},{key:"finishesOnLoopClosure",value:{name:"boolean",required:!1}}]}},{name:"null"}],required:!0}},{key:"requestFinishMeasurement",value:{name:"signature",type:"function",raw:"() => boolean",signature:{arguments:[],return:{name:"boolean"}},required:!0}},{key:"requestActivateTool",value:{name:"signature",type:"function",raw:"(toolId?: AnnotationToolId) => void",signature:{arguments:[{type:{name:"AnnotationToolId"},name:"toolId"}],return:{name:"void"}},required:!0}},{key:"requestModeChange",value:{name:"signature",type:"function",raw:"(toolId: AnnotationToolId) => void",signature:{arguments:[{type:{name:"AnnotationToolId"},name:"toolId"}],return:{name:"void"}},required:!0}},{key:"sessionContext",value:{name:"signature",type:"object",raw:`{
  getState: () => AnnotationsStoreState;
  dispatch: AnnotationsStore["dispatch"];
  setActiveToolType: (toolId: AnnotationToolId) => void;
  drafts: AnnotationToolDraftStore;
  requestLabelText?: AnnotationLabelTextRequester;
  addAnnotation: (
    annotationType: StoredAnnotation["toolType"],
    coordinates: readonly AnnotationGeographicCoordinate[],
    options?: AddAnnotationOptions,
    linkedNodeGroupIds?: readonly (AnnotationNodeLinkId | null | undefined)[],
    sourceToolId?: AnnotationToolId
  ) => StoredAnnotation;
}`,signature:{properties:[{key:"getState",value:{name:"signature",type:"function",raw:"() => AnnotationsStoreState",signature:{arguments:[],return:{name:"signature",type:"object",raw:`{
  annotationToolType: AnnotationToolId;
  selectionState: AnnotationSelectionStoreState;
  annotationEntries: readonly StoredAnnotation[];
  nodes: readonly AnnotationNode[];
  linkedNodeGroups: readonly AnnotationNodeLink[];
  edges: readonly AnnotationEdge[];
  infoBoxState: AnnotationInfoBoxStoreState;
  settingsState: AnnotationSettingsStoreState;
}`,signature:{properties:[{key:"annotationToolType",value:{name:"AnnotationToolId",required:!0}},{key:"selectionState",value:{name:"signature",type:"object",raw:`{
  selectedAnnotationIds: readonly string[];
  previousSelectedAnnotationId: string | null;
}`,signature:{properties:[{key:"selectedAnnotationIds",value:{name:"unknown",required:!0}},{key:"previousSelectedAnnotationId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]},required:!0}},{key:"annotationEntries",value:{name:"unknown",required:!0}},{key:"nodes",value:{name:"unknown",required:!0}},{key:"linkedNodeGroups",value:{name:"unknown",required:!0}},{key:"edges",value:{name:"unknown",required:!0}},{key:"infoBoxState",value:{name:"signature",type:"object",raw:`{
  activeAnnotationId: string | null;
}`,signature:{properties:[{key:"activeAnnotationId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]},required:!0}},{key:"settingsState",value:{name:"signature",type:"object",raw:`{
  pointTemporaryMode: boolean;
  elevationReferenceAnnotationId: string | null;
  nextShortLabelCounterByToolType: Readonly<Record<string, number>>;
}`,signature:{properties:[{key:"pointTemporaryMode",value:{name:"boolean",required:!0}},{key:"elevationReferenceAnnotationId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"nextShortLabelCounterByToolType",value:{name:"Readonly",elements:[{name:"Record",elements:[{name:"string"},{name:"number"}],raw:"Record<string, number>"}],raw:"Readonly<Record<string, number>>",required:!0}}]},required:!0}}]}}},required:!0}},{key:"dispatch",value:{name:'ReturnType["dispatch"]',raw:'AnnotationsStore["dispatch"]',required:!0}},{key:"setActiveToolType",value:{name:"signature",type:"function",raw:"(toolId: AnnotationToolId) => void",signature:{arguments:[{type:{name:"AnnotationToolId"},name:"toolId"}],return:{name:"void"}},required:!0}},{key:"drafts",value:{name:"signature",type:"object",raw:`{
  get: (toolId: AnnotationToolId) => AnnotationToolDraftState;
  set: (toolId: AnnotationToolId, draft: AnnotationToolDraftState) => void;
  clear: (toolId: AnnotationToolId) => void;
  subscribe: (toolId: AnnotationToolId, listener: () => void) => () => void;
}`,signature:{properties:[{key:"get",value:{name:"signature",type:"function",raw:"(toolId: AnnotationToolId) => AnnotationToolDraftState",signature:{arguments:[{type:{name:"AnnotationToolId"},name:"toolId"}],return:{name:"signature",type:"object",raw:`{
  coordinates: readonly AnnotationGeographicCoordinate[];
  linkedNodeGroupIds: readonly (AnnotationNodeLinkId | null)[];
  feedback?: {
    kind: "warning";
    message: string;
  } | null;
}`,signature:{properties:[{key:"coordinates",value:{name:"unknown",required:!0}},{key:"linkedNodeGroupIds",value:{name:"unknown",required:!0}},{key:"feedback",value:{name:"union",raw:`{
  kind: "warning";
  message: string;
} | null`,elements:[{name:"signature",type:"object",raw:`{
  kind: "warning";
  message: string;
}`,signature:{properties:[{key:"kind",value:{name:"literal",value:'"warning"',required:!0}},{key:"message",value:{name:"string",required:!0}}]}},{name:"null"}],required:!1}}]},required:!0}},required:!0}},{key:"set",value:{name:"signature",type:"function",raw:"(toolId: AnnotationToolId, draft: AnnotationToolDraftState) => void",signature:{arguments:[{type:{name:"AnnotationToolId"},name:"toolId"},{type:{name:"signature",type:"object",raw:`{
  coordinates: readonly AnnotationGeographicCoordinate[];
  linkedNodeGroupIds: readonly (AnnotationNodeLinkId | null)[];
  feedback?: {
    kind: "warning";
    message: string;
  } | null;
}`,signature:{properties:[{key:"coordinates",value:{name:"unknown",required:!0}},{key:"linkedNodeGroupIds",value:{name:"unknown",required:!0}},{key:"feedback",value:{name:"union",raw:`{
  kind: "warning";
  message: string;
} | null`,elements:[{name:"signature",type:"object",raw:`{
  kind: "warning";
  message: string;
}`,signature:{properties:[{key:"kind",value:{name:"literal",value:'"warning"',required:!0}},{key:"message",value:{name:"string",required:!0}}]}},{name:"null"}],required:!1}}]},required:!0},name:"draft"}],return:{name:"void"}},required:!0}},{key:"clear",value:{name:"signature",type:"function",raw:"(toolId: AnnotationToolId) => void",signature:{arguments:[{type:{name:"AnnotationToolId"},name:"toolId"}],return:{name:"void"}},required:!0}},{key:"subscribe",value:{name:"signature",type:"function",raw:"(toolId: AnnotationToolId, listener: () => void) => () => void",signature:{arguments:[{type:{name:"AnnotationToolId"},name:"toolId"},{type:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},name:"listener"}],return:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}}},required:!0}}]},required:!0}},{key:"requestLabelText",value:{name:"signature",type:"function",raw:`(
  context: AnnotationLabelTextRequestContext
) => string | null | Promise<string | null>`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  coordinate: AnnotationGeographicCoordinate;
  defaultText: string;
  labelTextSuggestions: readonly string[];
  linkedNodeGroupId?: AnnotationNodeLinkId | null;
}`,signature:{properties:[{key:"coordinate",value:{name:"AnnotationGeographicCoordinate",required:!0}},{key:"defaultText",value:{name:"string",required:!0}},{key:"labelTextSuggestions",value:{name:"unknown",required:!0}},{key:"linkedNodeGroupId",value:{name:"union",raw:"AnnotationNodeLinkId | null",elements:[{name:"string"},{name:"null"}],required:!1}}]}},name:"context"}],return:{name:"union",raw:"string | null | Promise<string | null>",elements:[{name:"string"},{name:"null"},{name:"Promise",elements:[{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]}],raw:"Promise<string | null>"}]}},required:!1}},{key:"addAnnotation",value:{name:"signature",type:"function",raw:`(
  annotationType: StoredAnnotation["toolType"],
  coordinates: readonly AnnotationGeographicCoordinate[],
  options?: AddAnnotationOptions,
  linkedNodeGroupIds?: readonly (AnnotationNodeLinkId | null | undefined)[],
  sourceToolId?: AnnotationToolId
) => StoredAnnotation`,signature:{arguments:[{type:{name:"AnnotationType",raw:'StoredAnnotation["toolType"]'},name:"annotationType"},{type:{name:"unknown"},name:"coordinates"},{type:{name:"Pick",elements:[{name:"signature",type:"object",raw:`{
  id: string;
  toolType: AnnotationType;
  nodeIds: readonly string[];
  edgeIds: readonly string[];
  displayName?: string;
  shortLabel?: string;
  shortLabelSource?: AnnotationShortLabelSource;
  shortLabelCounter?: number;
  hidden?: boolean;
  locked?: boolean;
  annotationRole?: AnnotationEntryRole;
  readOnly?: boolean;
  labelAppearance?: AnnotationLabelAppearance;
  elevationDisplayMode?: AnnotationElevationDisplayMode;
  distanceAnchorCoordinateSelection?: RuntimePointLabelCoordinateSelection;
  distanceTriangleAnchorCoordinateRole?: RuntimeDistanceTriangleAnchorCoordinateRole;
  closed?: boolean;
  preferredNormalBearingRad?: number;
  externalCollection?: {
    type: "saved-measurement";
    id: string;
  };
  /** Identity across machines and shares; the runtime id only counts per session. */
  uuid?: string;
  /** ISO time of the last content change, stamped by the persistence on save. */
  updatedAt?: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"toolType",value:{name:"AnnotationType",required:!0}},{key:"nodeIds",value:{name:"unknown",required:!0}},{key:"edgeIds",value:{name:"unknown",required:!0}},{key:"displayName",value:{name:"string",required:!1}},{key:"shortLabel",value:{name:"string",required:!1}},{key:"shortLabelSource",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_SHORT_LABEL_SOURCES)[keyof typeof ANNOTATION_SHORT_LABEL_SOURCES]",required:!1}},{key:"shortLabelCounter",value:{name:"number",required:!1}},{key:"hidden",value:{name:"boolean",required:!1}},{key:"locked",value:{name:"boolean",required:!1}},{key:"annotationRole",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_ENTRY_ROLES)[keyof typeof ANNOTATION_ENTRY_ROLES]",required:!1}},{key:"readOnly",value:{name:"boolean",required:!1}},{key:"labelAppearance",value:{name:"AnnotationLabelAppearance",required:!1}},{key:"elevationDisplayMode",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_ELEVATION_DISPLAY_MODES)[keyof typeof ANNOTATION_ELEVATION_DISPLAY_MODES]",required:!1}},{key:"distanceAnchorCoordinateSelection",value:{name:"unknown[union]",raw:"(typeof RUNTIME_POINT_LABEL_COORDINATE_SELECTION)[keyof typeof RUNTIME_POINT_LABEL_COORDINATE_SELECTION]",required:!1}},{key:"distanceTriangleAnchorCoordinateRole",value:{name:"unknown[union]",raw:"(typeof RUNTIME_DISTANCE_TRIANGLE_ANCHOR_COORDINATE_ROLE)[keyof typeof RUNTIME_DISTANCE_TRIANGLE_ANCHOR_COORDINATE_ROLE]",required:!1}},{key:"closed",value:{name:"boolean",required:!1}},{key:"preferredNormalBearingRad",value:{name:"number",required:!1}},{key:"externalCollection",value:{name:"signature",type:"object",raw:`{
  type: "saved-measurement";
  id: string;
}`,signature:{properties:[{key:"type",value:{name:"literal",value:'"saved-measurement"',required:!0}},{key:"id",value:{name:"string",required:!0}}]},required:!1}},{key:"uuid",value:{name:"string",required:!1},description:"Identity across machines and shares; the runtime id only counts per session."},{key:"updatedAt",value:{name:"string",required:!1},description:"ISO time of the last content change, stamped by the persistence on save."}]},required:!0},{name:"union",raw:`| "closed"
| "preferredNormalBearingRad"
| "displayName"
| "shortLabel"
| "shortLabelSource"
| "shortLabelCounter"
| "hidden"
| "locked"
| "labelAppearance"
| "elevationDisplayMode"
| "distanceAnchorCoordinateSelection"
| "distanceTriangleAnchorCoordinateRole"`,elements:[{name:"literal",value:'"closed"'},{name:"literal",value:'"preferredNormalBearingRad"'},{name:"literal",value:'"displayName"'},{name:"literal",value:'"shortLabel"'},{name:"literal",value:'"shortLabelSource"'},{name:"literal",value:'"shortLabelCounter"'},{name:"literal",value:'"hidden"'},{name:"literal",value:'"locked"'},{name:"literal",value:'"labelAppearance"'},{name:"literal",value:'"elevationDisplayMode"'},{name:"literal",value:'"distanceAnchorCoordinateSelection"'},{name:"literal",value:'"distanceTriangleAnchorCoordinateRole"'}]}],raw:`Pick<
  StoredAnnotation,
  | "closed"
  | "preferredNormalBearingRad"
  | "displayName"
  | "shortLabel"
  | "shortLabelSource"
  | "shortLabelCounter"
  | "hidden"
  | "locked"
  | "labelAppearance"
  | "elevationDisplayMode"
  | "distanceAnchorCoordinateSelection"
  | "distanceTriangleAnchorCoordinateRole"
>`,required:!1},name:"options"},{type:{name:"unknown"},name:"linkedNodeGroupIds"},{type:{name:"AnnotationToolId"},name:"sourceToolId"}],return:{name:"signature",type:"object",raw:`{
  id: string;
  toolType: AnnotationType;
  nodeIds: readonly string[];
  edgeIds: readonly string[];
  displayName?: string;
  shortLabel?: string;
  shortLabelSource?: AnnotationShortLabelSource;
  shortLabelCounter?: number;
  hidden?: boolean;
  locked?: boolean;
  annotationRole?: AnnotationEntryRole;
  readOnly?: boolean;
  labelAppearance?: AnnotationLabelAppearance;
  elevationDisplayMode?: AnnotationElevationDisplayMode;
  distanceAnchorCoordinateSelection?: RuntimePointLabelCoordinateSelection;
  distanceTriangleAnchorCoordinateRole?: RuntimeDistanceTriangleAnchorCoordinateRole;
  closed?: boolean;
  preferredNormalBearingRad?: number;
  externalCollection?: {
    type: "saved-measurement";
    id: string;
  };
  /** Identity across machines and shares; the runtime id only counts per session. */
  uuid?: string;
  /** ISO time of the last content change, stamped by the persistence on save. */
  updatedAt?: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"toolType",value:{name:"AnnotationType",required:!0}},{key:"nodeIds",value:{name:"unknown",required:!0}},{key:"edgeIds",value:{name:"unknown",required:!0}},{key:"displayName",value:{name:"string",required:!1}},{key:"shortLabel",value:{name:"string",required:!1}},{key:"shortLabelSource",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_SHORT_LABEL_SOURCES)[keyof typeof ANNOTATION_SHORT_LABEL_SOURCES]",required:!1}},{key:"shortLabelCounter",value:{name:"number",required:!1}},{key:"hidden",value:{name:"boolean",required:!1}},{key:"locked",value:{name:"boolean",required:!1}},{key:"annotationRole",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_ENTRY_ROLES)[keyof typeof ANNOTATION_ENTRY_ROLES]",required:!1}},{key:"readOnly",value:{name:"boolean",required:!1}},{key:"labelAppearance",value:{name:"AnnotationLabelAppearance",required:!1}},{key:"elevationDisplayMode",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_ELEVATION_DISPLAY_MODES)[keyof typeof ANNOTATION_ELEVATION_DISPLAY_MODES]",required:!1}},{key:"distanceAnchorCoordinateSelection",value:{name:"unknown[union]",raw:"(typeof RUNTIME_POINT_LABEL_COORDINATE_SELECTION)[keyof typeof RUNTIME_POINT_LABEL_COORDINATE_SELECTION]",required:!1}},{key:"distanceTriangleAnchorCoordinateRole",value:{name:"unknown[union]",raw:"(typeof RUNTIME_DISTANCE_TRIANGLE_ANCHOR_COORDINATE_ROLE)[keyof typeof RUNTIME_DISTANCE_TRIANGLE_ANCHOR_COORDINATE_ROLE]",required:!1}},{key:"closed",value:{name:"boolean",required:!1}},{key:"preferredNormalBearingRad",value:{name:"number",required:!1}},{key:"externalCollection",value:{name:"signature",type:"object",raw:`{
  type: "saved-measurement";
  id: string;
}`,signature:{properties:[{key:"type",value:{name:"literal",value:'"saved-measurement"',required:!0}},{key:"id",value:{name:"string",required:!0}}]},required:!1}},{key:"uuid",value:{name:"string",required:!1},description:"Identity across machines and shares; the runtime id only counts per session."},{key:"updatedAt",value:{name:"string",required:!1},description:"ISO time of the last content change, stamped by the persistence on save."}]},required:!0}},required:!0}}]},required:!0}}]}},name:"context"}],return:{name:"boolean"}},required:!0}}]},required:!1}},{key:"visualModels",value:{name:"signature",type:"object",raw:`{
  build: (
    context: AnnotationToolVisualModelContext
  ) => RuntimeVisualModels | null;
}`,signature:{properties:[{key:"build",value:{name:"signature",type:"function",raw:`(
  context: AnnotationToolVisualModelContext
) => RuntimeVisualModels | null`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  nodes: readonly AnnotationNode[];
  edges: readonly AnnotationEdge[];
  linkedNodeGroups: readonly AnnotationNodeLink[];
  annotationEntries: readonly StoredAnnotation[];
  draftStatesByToolType: Readonly<
    Partial<Record<AnnotationToolId, AnnotationToolDraftState>>
  >;
  elevationReferenceAnnotationId: string | null;
  selectedAnnotationId: string | null;
  selectedAnnotationIds: readonly string[];
  isSelectionAdditiveModifierPressed: boolean;
  setSelectedAnnotationId: (annotationId: string | null) => void;
  setElevationReferenceAnnotationId: (annotationId: string | null) => void;
  toggleAnnotationElevationDisplayMode: (
    annotationId: string,
    currentElevationDisplayMode?: AnnotationElevationDisplayMode
  ) => void;
  onNodeLongPress?: (nodeId: string, annotationId: string) => void;
  formatOptions: AnnotationsRuntimeFormatOptions;
}`,signature:{properties:[{key:"nodes",value:{name:"unknown",required:!0}},{key:"edges",value:{name:"unknown",required:!0}},{key:"linkedNodeGroups",value:{name:"unknown",required:!0}},{key:"annotationEntries",value:{name:"unknown",required:!0}},{key:"draftStatesByToolType",value:{name:"Readonly",elements:[{name:"Partial",elements:[{name:"Record",elements:[{name:"AnnotationToolId"},{name:"signature",type:"object",raw:`{
  coordinates: readonly AnnotationGeographicCoordinate[];
  linkedNodeGroupIds: readonly (AnnotationNodeLinkId | null)[];
  feedback?: {
    kind: "warning";
    message: string;
  } | null;
}`,signature:{properties:[{key:"coordinates",value:{name:"unknown",required:!0}},{key:"linkedNodeGroupIds",value:{name:"unknown",required:!0}},{key:"feedback",value:{name:"union",raw:`{
  kind: "warning";
  message: string;
} | null`,elements:[{name:"signature",type:"object",raw:`{
  kind: "warning";
  message: string;
}`,signature:{properties:[{key:"kind",value:{name:"literal",value:'"warning"',required:!0}},{key:"message",value:{name:"string",required:!0}}]}},{name:"null"}],required:!1}}]},required:!0}],raw:"Record<AnnotationToolId, AnnotationToolDraftState>"}],raw:"Partial<Record<AnnotationToolId, AnnotationToolDraftState>>"}],raw:`Readonly<
  Partial<Record<AnnotationToolId, AnnotationToolDraftState>>
>`,required:!0}},{key:"elevationReferenceAnnotationId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"selectedAnnotationId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"selectedAnnotationIds",value:{name:"unknown",required:!0}},{key:"isSelectionAdditiveModifierPressed",value:{name:"boolean",required:!0}},{key:"setSelectedAnnotationId",value:{name:"signature",type:"function",raw:"(annotationId: string | null) => void",signature:{arguments:[{type:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},name:"annotationId"}],return:{name:"void"}},required:!0}},{key:"setElevationReferenceAnnotationId",value:{name:"signature",type:"function",raw:"(annotationId: string | null) => void",signature:{arguments:[{type:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},name:"annotationId"}],return:{name:"void"}},required:!0}},{key:"toggleAnnotationElevationDisplayMode",value:{name:"signature",type:"function",raw:`(
  annotationId: string,
  currentElevationDisplayMode?: AnnotationElevationDisplayMode
) => void`,signature:{arguments:[{type:{name:"string"},name:"annotationId"},{type:{name:"unknown[union]",raw:"(typeof ANNOTATION_ELEVATION_DISPLAY_MODES)[keyof typeof ANNOTATION_ELEVATION_DISPLAY_MODES]",required:!1},name:"currentElevationDisplayMode"}],return:{name:"void"}},required:!0}},{key:"onNodeLongPress",value:{name:"signature",type:"function",raw:"(nodeId: string, annotationId: string) => void",signature:{arguments:[{type:{name:"string"},name:"nodeId"},{type:{name:"string"},name:"annotationId"}],return:{name:"void"}},required:!1}},{key:"formatOptions",value:{name:"signature",type:"object",raw:`{
  lengthMeters?: FormatLengthMetersOptions;
  areaSquareMeters?: FormatAreaSquareMetersAdaptiveOptions;
  degrees?: FormatDegreesOptions;
  geographicCoordinate?: GeographicCoordinateFormatOptions;
  decimalNumber?: FormatDecimalNumberOptions;
}`,signature:{properties:[{key:"lengthMeters",value:{name:"FormatLengthMetersOptions",required:!1}},{key:"areaSquareMeters",value:{name:"FormatAreaSquareMetersAdaptiveOptions",required:!1}},{key:"degrees",value:{name:"FormatDegreesOptions",required:!1}},{key:"geographicCoordinate",value:{name:"GeographicCoordinateFormatOptions",required:!1}},{key:"decimalNumber",value:{name:"FormatDecimalNumberOptions",required:!1}}]},required:!0}}]}},name:"context"}],return:{name:"union",raw:"RuntimeVisualModels | null",elements:[{name:"signature",type:"object",raw:`{
  points?: readonly RuntimePointMarkerRenderModel[];
  edges?: readonly RuntimeEdgeRenderModel[];
  polygonFills?: readonly RuntimePolygonFillRenderModel[];
  pointLabels?: readonly RuntimePointLabelRenderModel[];
}`,signature:{properties:[{key:"points",value:{name:"unknown",required:!1}},{key:"edges",value:{name:"unknown",required:!1}},{key:"polygonFills",value:{name:"unknown",required:!1}},{key:"pointLabels",value:{name:"unknown",required:!1}}]}},{name:"null"}]}},required:!0}}]},required:!1}},{key:"infoBox",value:{name:"signature",type:"object",raw:`{
  getSlots: (
    context: RuntimeAnnotationInfoBoxContext
  ) => AnnotationInfoBoxSlots | null;
}`,signature:{properties:[{key:"getSlots",value:{name:"signature",type:"function",raw:`(
  context: RuntimeAnnotationInfoBoxContext
) => AnnotationInfoBoxSlots | null`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  annotation: StoredAnnotation;
  annotationEntries: readonly StoredAnnotation[];
  nodes: readonly AnnotationNode[];
  selectedAnnotationId: string;
  setSelectedAnnotationId: (annotationId: string | null) => void;
  focusAnnotationId: (annotationId: string | null) => void;
  flyToAllAnnotations: () => void;
  removeAnnotationById: (
    annotationId: string,
    options?: AnnotationDeleteRequestOptions
  ) => void;
  exportAnnotationGeoJson: (annotationId: string) => void;
  toggleAnnotationVisibility: (annotationId: string) => void;
  toggleAnnotationLocked: (annotationId: string) => void;
  elevationReferenceAnnotationId: string | null;
  setElevationReferenceAnnotationId: (annotationId: string | null) => void;
  updateAnnotationDisplayName: (
    annotationId: string,
    displayName: string
  ) => void;
  updateAnnotationShortLabel: (
    annotationId: string,
    shortLabel: string
  ) => void;
  formatOptions: AnnotationsRuntimeFormatOptions;
  infoBoxVisualOptions: AnnotationInfoBoxVisualOptions;
}`,signature:{properties:[{key:"annotation",value:{name:"signature",type:"object",raw:`{
  id: string;
  toolType: AnnotationType;
  nodeIds: readonly string[];
  edgeIds: readonly string[];
  displayName?: string;
  shortLabel?: string;
  shortLabelSource?: AnnotationShortLabelSource;
  shortLabelCounter?: number;
  hidden?: boolean;
  locked?: boolean;
  annotationRole?: AnnotationEntryRole;
  readOnly?: boolean;
  labelAppearance?: AnnotationLabelAppearance;
  elevationDisplayMode?: AnnotationElevationDisplayMode;
  distanceAnchorCoordinateSelection?: RuntimePointLabelCoordinateSelection;
  distanceTriangleAnchorCoordinateRole?: RuntimeDistanceTriangleAnchorCoordinateRole;
  closed?: boolean;
  preferredNormalBearingRad?: number;
  externalCollection?: {
    type: "saved-measurement";
    id: string;
  };
  /** Identity across machines and shares; the runtime id only counts per session. */
  uuid?: string;
  /** ISO time of the last content change, stamped by the persistence on save. */
  updatedAt?: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"toolType",value:{name:"AnnotationType",required:!0}},{key:"nodeIds",value:{name:"unknown",required:!0}},{key:"edgeIds",value:{name:"unknown",required:!0}},{key:"displayName",value:{name:"string",required:!1}},{key:"shortLabel",value:{name:"string",required:!1}},{key:"shortLabelSource",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_SHORT_LABEL_SOURCES)[keyof typeof ANNOTATION_SHORT_LABEL_SOURCES]",required:!1}},{key:"shortLabelCounter",value:{name:"number",required:!1}},{key:"hidden",value:{name:"boolean",required:!1}},{key:"locked",value:{name:"boolean",required:!1}},{key:"annotationRole",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_ENTRY_ROLES)[keyof typeof ANNOTATION_ENTRY_ROLES]",required:!1}},{key:"readOnly",value:{name:"boolean",required:!1}},{key:"labelAppearance",value:{name:"AnnotationLabelAppearance",required:!1}},{key:"elevationDisplayMode",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_ELEVATION_DISPLAY_MODES)[keyof typeof ANNOTATION_ELEVATION_DISPLAY_MODES]",required:!1}},{key:"distanceAnchorCoordinateSelection",value:{name:"unknown[union]",raw:"(typeof RUNTIME_POINT_LABEL_COORDINATE_SELECTION)[keyof typeof RUNTIME_POINT_LABEL_COORDINATE_SELECTION]",required:!1}},{key:"distanceTriangleAnchorCoordinateRole",value:{name:"unknown[union]",raw:"(typeof RUNTIME_DISTANCE_TRIANGLE_ANCHOR_COORDINATE_ROLE)[keyof typeof RUNTIME_DISTANCE_TRIANGLE_ANCHOR_COORDINATE_ROLE]",required:!1}},{key:"closed",value:{name:"boolean",required:!1}},{key:"preferredNormalBearingRad",value:{name:"number",required:!1}},{key:"externalCollection",value:{name:"signature",type:"object",raw:`{
  type: "saved-measurement";
  id: string;
}`,signature:{properties:[{key:"type",value:{name:"literal",value:'"saved-measurement"',required:!0}},{key:"id",value:{name:"string",required:!0}}]},required:!1}},{key:"uuid",value:{name:"string",required:!1},description:"Identity across machines and shares; the runtime id only counts per session."},{key:"updatedAt",value:{name:"string",required:!1},description:"ISO time of the last content change, stamped by the persistence on save."}]},required:!0}},{key:"annotationEntries",value:{name:"unknown",required:!0}},{key:"nodes",value:{name:"unknown",required:!0}},{key:"selectedAnnotationId",value:{name:"string",required:!0}},{key:"setSelectedAnnotationId",value:{name:"signature",type:"function",raw:"(annotationId: string | null) => void",signature:{arguments:[{type:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},name:"annotationId"}],return:{name:"void"}},required:!0}},{key:"focusAnnotationId",value:{name:"signature",type:"function",raw:"(annotationId: string | null) => void",signature:{arguments:[{type:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},name:"annotationId"}],return:{name:"void"}},required:!0}},{key:"flyToAllAnnotations",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}},{key:"removeAnnotationById",value:{name:"signature",type:"function",raw:`(
  annotationId: string,
  options?: AnnotationDeleteRequestOptions
) => void`,signature:{arguments:[{type:{name:"string"},name:"annotationId"},{type:{name:"signature",type:"object",raw:`{
  skipConfirmation?: boolean;
  source?: AnnotationDeleteConfirmationSource;
}`,signature:{properties:[{key:"skipConfirmation",value:{name:"boolean",required:!1}},{key:"source",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_DELETE_CONFIRMATION_SOURCES)[keyof typeof ANNOTATION_DELETE_CONFIRMATION_SOURCES]",required:!1}}]}},name:"options"}],return:{name:"void"}},required:!0}},{key:"exportAnnotationGeoJson",value:{name:"signature",type:"function",raw:"(annotationId: string) => void",signature:{arguments:[{type:{name:"string"},name:"annotationId"}],return:{name:"void"}},required:!0}},{key:"toggleAnnotationVisibility",value:{name:"signature",type:"function",raw:"(annotationId: string) => void",signature:{arguments:[{type:{name:"string"},name:"annotationId"}],return:{name:"void"}},required:!0}},{key:"toggleAnnotationLocked",value:{name:"signature",type:"function",raw:"(annotationId: string) => void",signature:{arguments:[{type:{name:"string"},name:"annotationId"}],return:{name:"void"}},required:!0}},{key:"elevationReferenceAnnotationId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"setElevationReferenceAnnotationId",value:{name:"signature",type:"function",raw:"(annotationId: string | null) => void",signature:{arguments:[{type:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},name:"annotationId"}],return:{name:"void"}},required:!0}},{key:"updateAnnotationDisplayName",value:{name:"signature",type:"function",raw:`(
  annotationId: string,
  displayName: string
) => void`,signature:{arguments:[{type:{name:"string"},name:"annotationId"},{type:{name:"string"},name:"displayName"}],return:{name:"void"}},required:!0}},{key:"updateAnnotationShortLabel",value:{name:"signature",type:"function",raw:`(
  annotationId: string,
  shortLabel: string
) => void`,signature:{arguments:[{type:{name:"string"},name:"annotationId"},{type:{name:"string"},name:"shortLabel"}],return:{name:"void"}},required:!0}},{key:"formatOptions",value:{name:"signature",type:"object",raw:`{
  lengthMeters?: FormatLengthMetersOptions;
  areaSquareMeters?: FormatAreaSquareMetersAdaptiveOptions;
  degrees?: FormatDegreesOptions;
  geographicCoordinate?: GeographicCoordinateFormatOptions;
  decimalNumber?: FormatDecimalNumberOptions;
}`,signature:{properties:[{key:"lengthMeters",value:{name:"FormatLengthMetersOptions",required:!1}},{key:"areaSquareMeters",value:{name:"FormatAreaSquareMetersAdaptiveOptions",required:!1}},{key:"degrees",value:{name:"FormatDegreesOptions",required:!1}},{key:"geographicCoordinate",value:{name:"GeographicCoordinateFormatOptions",required:!1}},{key:"decimalNumber",value:{name:"FormatDecimalNumberOptions",required:!1}}]},required:!0}},{key:"infoBoxVisualOptions",value:{name:"AnnotationInfoBoxVisualOptions",required:!0}}]}},name:"context"}],return:{name:"union",raw:"AnnotationInfoBoxSlots | null",elements:[{name:"AnnotationInfoBoxSlots"},{name:"null"}]}},required:!0}}]},required:!1}}]}},{name:"undefined"}]}},required:!0}},{key:"assertPlugin",value:{name:"signature",type:"function",raw:"(toolId: AnnotationToolId) => AnnotationToolPlugin",signature:{arguments:[{type:{name:"AnnotationToolId"},name:"toolId"}],return:{name:"signature",type:"object",raw:`{
  id: AnnotationToolId;
  kind: AnnotationToolPluginKind;
  annotationType?: StoredAnnotation["toolType"] | null;
  descriptor: AnnotationToolDescriptor;
  helpText?: readonly AnnotationInfoBoxHelpItem[];
  resolveHelpText?: (
    context: AnnotationToolHelpTextContext
  ) => readonly AnnotationInfoBoxHelpItem[];
  alwaysShowHelpTextWhileActive?: boolean;
  capabilities?: readonly AnnotationToolPluginCapability[];
  session?: {
    createSession: (
      context: AnnotationToolSessionContext
    ) => AnnotationModeSession;
  };
  pointQuery?: {
    inputModifiers?: readonly AnnotationPointQueryInputModifier[];
    onPointCreated: (context: PointQueryCreatedContext) => void;
  };
  addAnnotation?: {
    resolveOptions: (
      context: AnnotationToolAddAnnotationContext
    ) => AddAnnotationOptions | undefined;
  };
  authoringVisuals?: {
    createController: (
      context: AnnotationToolAuthoringContext
    ) => AnnotationToolAuthoringController | null;
  };
  keyboard?: {
    onKeyDown: (context: AnnotationToolKeyboardContext) => boolean;
  };
  visualModels?: {
    build: (
      context: AnnotationToolVisualModelContext
    ) => RuntimeVisualModels | null;
  };
  infoBox?: {
    getSlots: (
      context: RuntimeAnnotationInfoBoxContext
    ) => AnnotationInfoBoxSlots | null;
  };
}`,signature:{properties:[{key:"id",value:{name:"AnnotationToolId",required:!0}},{key:"kind",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_TOOL_PLUGIN_KINDS)[keyof typeof ANNOTATION_TOOL_PLUGIN_KINDS]",required:!0}},{key:"annotationType",value:{name:"union",raw:'StoredAnnotation["toolType"] | null',elements:[{name:"AnnotationType",raw:'StoredAnnotation["toolType"]'},{name:"null"}],required:!1}},{key:"descriptor",value:{name:"signature",type:"object",raw:`{
  id: AnnotationToolId;
  order: number;
  label: string;
  tooltip: string;
  shortcutKey?: string;
  icon?: ReactNode;
}`,signature:{properties:[{key:"id",value:{name:"AnnotationToolId",required:!0}},{key:"order",value:{name:"number",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"tooltip",value:{name:"string",required:!0}},{key:"shortcutKey",value:{name:"string",required:!1}},{key:"icon",value:{name:"ReactNode",required:!1}}]},required:!0}},{key:"helpText",value:{name:"unknown",required:!1}},{key:"resolveHelpText",value:{name:"signature",type:"function",raw:`(
  context: AnnotationToolHelpTextContext
) => readonly AnnotationInfoBoxHelpItem[]`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  draftState: AnnotationToolDraftState;
  pointQueryPickResult?: PointQueryPickResult | null;
}`,signature:{properties:[{key:"draftState",value:{name:"signature",type:"object",raw:`{
  coordinates: readonly AnnotationGeographicCoordinate[];
  linkedNodeGroupIds: readonly (AnnotationNodeLinkId | null)[];
  feedback?: {
    kind: "warning";
    message: string;
  } | null;
}`,signature:{properties:[{key:"coordinates",value:{name:"unknown",required:!0}},{key:"linkedNodeGroupIds",value:{name:"unknown",required:!0}},{key:"feedback",value:{name:"union",raw:`{
  kind: "warning";
  message: string;
} | null`,elements:[{name:"signature",type:"object",raw:`{
  kind: "warning";
  message: string;
}`,signature:{properties:[{key:"kind",value:{name:"literal",value:'"warning"',required:!0}},{key:"message",value:{name:"string",required:!0}}]}},{name:"null"}],required:!1}}]},required:!0}},{key:"pointQueryPickResult",value:{name:"union",raw:"PointQueryPickResult | null",elements:[{name:"signature",type:"object",raw:`{
  coordinate: AnnotationGeographicCoordinate | null;
  screenPosition: { x: number; y: number } | null;
  pointECEF: Vector3 | null;
  surfaceNormalECEF: Vector3 | null;
  inputModifier?: AnnotationPointQueryInputModifier;
}`,signature:{properties:[{key:"coordinate",value:{name:"union",raw:"AnnotationGeographicCoordinate | null",elements:[{name:"AnnotationGeographicCoordinate"},{name:"null"}],required:!0}},{key:"screenPosition",value:{name:"union",raw:"{ x: number; y: number } | null",elements:[{name:"signature",type:"object",raw:"{ x: number; y: number }",signature:{properties:[{key:"x",value:{name:"number",required:!0}},{key:"y",value:{name:"number",required:!0}}]}},{name:"null"}],required:!0}},{key:"pointECEF",value:{name:"union",raw:"Vector3 | null",elements:[{name:"Vector3"},{name:"null"}],required:!0}},{key:"surfaceNormalECEF",value:{name:"union",raw:"Vector3 | null",elements:[{name:"Vector3"},{name:"null"}],required:!0}},{key:"inputModifier",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_POINT_QUERY_INPUT_MODIFIERS)[keyof typeof ANNOTATION_POINT_QUERY_INPUT_MODIFIERS]",required:!1}}]}},{name:"null"}],required:!1}}]}},name:"context"}],return:{name:"unknown"}},required:!1}},{key:"alwaysShowHelpTextWhileActive",value:{name:"boolean",required:!1}},{key:"capabilities",value:{name:"unknown",required:!1}},{key:"session",value:{name:"signature",type:"object",raw:`{
  createSession: (
    context: AnnotationToolSessionContext
  ) => AnnotationModeSession;
}`,signature:{properties:[{key:"createSession",value:{name:"signature",type:"function",raw:`(
  context: AnnotationToolSessionContext
) => AnnotationModeSession`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  getState: () => AnnotationsStoreState;
  dispatch: AnnotationsStore["dispatch"];
  setActiveToolType: (toolId: AnnotationToolId) => void;
  drafts: AnnotationToolDraftStore;
  requestLabelText?: AnnotationLabelTextRequester;
  addAnnotation: (
    annotationType: StoredAnnotation["toolType"],
    coordinates: readonly AnnotationGeographicCoordinate[],
    options?: AddAnnotationOptions,
    linkedNodeGroupIds?: readonly (AnnotationNodeLinkId | null | undefined)[],
    sourceToolId?: AnnotationToolId
  ) => StoredAnnotation;
}`,signature:{properties:[{key:"getState",value:{name:"signature",type:"function",raw:"() => AnnotationsStoreState",signature:{arguments:[],return:{name:"signature",type:"object",raw:`{
  annotationToolType: AnnotationToolId;
  selectionState: AnnotationSelectionStoreState;
  annotationEntries: readonly StoredAnnotation[];
  nodes: readonly AnnotationNode[];
  linkedNodeGroups: readonly AnnotationNodeLink[];
  edges: readonly AnnotationEdge[];
  infoBoxState: AnnotationInfoBoxStoreState;
  settingsState: AnnotationSettingsStoreState;
}`,signature:{properties:[{key:"annotationToolType",value:{name:"AnnotationToolId",required:!0}},{key:"selectionState",value:{name:"signature",type:"object",raw:`{
  selectedAnnotationIds: readonly string[];
  previousSelectedAnnotationId: string | null;
}`,signature:{properties:[{key:"selectedAnnotationIds",value:{name:"unknown",required:!0}},{key:"previousSelectedAnnotationId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]},required:!0}},{key:"annotationEntries",value:{name:"unknown",required:!0}},{key:"nodes",value:{name:"unknown",required:!0}},{key:"linkedNodeGroups",value:{name:"unknown",required:!0}},{key:"edges",value:{name:"unknown",required:!0}},{key:"infoBoxState",value:{name:"signature",type:"object",raw:`{
  activeAnnotationId: string | null;
}`,signature:{properties:[{key:"activeAnnotationId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]},required:!0}},{key:"settingsState",value:{name:"signature",type:"object",raw:`{
  pointTemporaryMode: boolean;
  elevationReferenceAnnotationId: string | null;
  nextShortLabelCounterByToolType: Readonly<Record<string, number>>;
}`,signature:{properties:[{key:"pointTemporaryMode",value:{name:"boolean",required:!0}},{key:"elevationReferenceAnnotationId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"nextShortLabelCounterByToolType",value:{name:"Readonly",elements:[{name:"Record",elements:[{name:"string"},{name:"number"}],raw:"Record<string, number>"}],raw:"Readonly<Record<string, number>>",required:!0}}]},required:!0}}]}}},required:!0}},{key:"dispatch",value:{name:'ReturnType["dispatch"]',raw:'AnnotationsStore["dispatch"]',required:!0}},{key:"setActiveToolType",value:{name:"signature",type:"function",raw:"(toolId: AnnotationToolId) => void",signature:{arguments:[{type:{name:"AnnotationToolId"},name:"toolId"}],return:{name:"void"}},required:!0}},{key:"drafts",value:{name:"signature",type:"object",raw:`{
  get: (toolId: AnnotationToolId) => AnnotationToolDraftState;
  set: (toolId: AnnotationToolId, draft: AnnotationToolDraftState) => void;
  clear: (toolId: AnnotationToolId) => void;
  subscribe: (toolId: AnnotationToolId, listener: () => void) => () => void;
}`,signature:{properties:[{key:"get",value:{name:"signature",type:"function",raw:"(toolId: AnnotationToolId) => AnnotationToolDraftState",signature:{arguments:[{type:{name:"AnnotationToolId"},name:"toolId"}],return:{name:"signature",type:"object",raw:`{
  coordinates: readonly AnnotationGeographicCoordinate[];
  linkedNodeGroupIds: readonly (AnnotationNodeLinkId | null)[];
  feedback?: {
    kind: "warning";
    message: string;
  } | null;
}`,signature:{properties:[{key:"coordinates",value:{name:"unknown",required:!0}},{key:"linkedNodeGroupIds",value:{name:"unknown",required:!0}},{key:"feedback",value:{name:"union",raw:`{
  kind: "warning";
  message: string;
} | null`,elements:[{name:"signature",type:"object",raw:`{
  kind: "warning";
  message: string;
}`,signature:{properties:[{key:"kind",value:{name:"literal",value:'"warning"',required:!0}},{key:"message",value:{name:"string",required:!0}}]}},{name:"null"}],required:!1}}]},required:!0}},required:!0}},{key:"set",value:{name:"signature",type:"function",raw:"(toolId: AnnotationToolId, draft: AnnotationToolDraftState) => void",signature:{arguments:[{type:{name:"AnnotationToolId"},name:"toolId"},{type:{name:"signature",type:"object",raw:`{
  coordinates: readonly AnnotationGeographicCoordinate[];
  linkedNodeGroupIds: readonly (AnnotationNodeLinkId | null)[];
  feedback?: {
    kind: "warning";
    message: string;
  } | null;
}`,signature:{properties:[{key:"coordinates",value:{name:"unknown",required:!0}},{key:"linkedNodeGroupIds",value:{name:"unknown",required:!0}},{key:"feedback",value:{name:"union",raw:`{
  kind: "warning";
  message: string;
} | null`,elements:[{name:"signature",type:"object",raw:`{
  kind: "warning";
  message: string;
}`,signature:{properties:[{key:"kind",value:{name:"literal",value:'"warning"',required:!0}},{key:"message",value:{name:"string",required:!0}}]}},{name:"null"}],required:!1}}]},required:!0},name:"draft"}],return:{name:"void"}},required:!0}},{key:"clear",value:{name:"signature",type:"function",raw:"(toolId: AnnotationToolId) => void",signature:{arguments:[{type:{name:"AnnotationToolId"},name:"toolId"}],return:{name:"void"}},required:!0}},{key:"subscribe",value:{name:"signature",type:"function",raw:"(toolId: AnnotationToolId, listener: () => void) => () => void",signature:{arguments:[{type:{name:"AnnotationToolId"},name:"toolId"},{type:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},name:"listener"}],return:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}}},required:!0}}]},required:!0}},{key:"requestLabelText",value:{name:"signature",type:"function",raw:`(
  context: AnnotationLabelTextRequestContext
) => string | null | Promise<string | null>`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  coordinate: AnnotationGeographicCoordinate;
  defaultText: string;
  labelTextSuggestions: readonly string[];
  linkedNodeGroupId?: AnnotationNodeLinkId | null;
}`,signature:{properties:[{key:"coordinate",value:{name:"AnnotationGeographicCoordinate",required:!0}},{key:"defaultText",value:{name:"string",required:!0}},{key:"labelTextSuggestions",value:{name:"unknown",required:!0}},{key:"linkedNodeGroupId",value:{name:"union",raw:"AnnotationNodeLinkId | null",elements:[{name:"string"},{name:"null"}],required:!1}}]}},name:"context"}],return:{name:"union",raw:"string | null | Promise<string | null>",elements:[{name:"string"},{name:"null"},{name:"Promise",elements:[{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]}],raw:"Promise<string | null>"}]}},required:!1}},{key:"addAnnotation",value:{name:"signature",type:"function",raw:`(
  annotationType: StoredAnnotation["toolType"],
  coordinates: readonly AnnotationGeographicCoordinate[],
  options?: AddAnnotationOptions,
  linkedNodeGroupIds?: readonly (AnnotationNodeLinkId | null | undefined)[],
  sourceToolId?: AnnotationToolId
) => StoredAnnotation`,signature:{arguments:[{type:{name:"AnnotationType",raw:'StoredAnnotation["toolType"]'},name:"annotationType"},{type:{name:"unknown"},name:"coordinates"},{type:{name:"Pick",elements:[{name:"signature",type:"object",raw:`{
  id: string;
  toolType: AnnotationType;
  nodeIds: readonly string[];
  edgeIds: readonly string[];
  displayName?: string;
  shortLabel?: string;
  shortLabelSource?: AnnotationShortLabelSource;
  shortLabelCounter?: number;
  hidden?: boolean;
  locked?: boolean;
  annotationRole?: AnnotationEntryRole;
  readOnly?: boolean;
  labelAppearance?: AnnotationLabelAppearance;
  elevationDisplayMode?: AnnotationElevationDisplayMode;
  distanceAnchorCoordinateSelection?: RuntimePointLabelCoordinateSelection;
  distanceTriangleAnchorCoordinateRole?: RuntimeDistanceTriangleAnchorCoordinateRole;
  closed?: boolean;
  preferredNormalBearingRad?: number;
  externalCollection?: {
    type: "saved-measurement";
    id: string;
  };
  /** Identity across machines and shares; the runtime id only counts per session. */
  uuid?: string;
  /** ISO time of the last content change, stamped by the persistence on save. */
  updatedAt?: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"toolType",value:{name:"AnnotationType",required:!0}},{key:"nodeIds",value:{name:"unknown",required:!0}},{key:"edgeIds",value:{name:"unknown",required:!0}},{key:"displayName",value:{name:"string",required:!1}},{key:"shortLabel",value:{name:"string",required:!1}},{key:"shortLabelSource",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_SHORT_LABEL_SOURCES)[keyof typeof ANNOTATION_SHORT_LABEL_SOURCES]",required:!1}},{key:"shortLabelCounter",value:{name:"number",required:!1}},{key:"hidden",value:{name:"boolean",required:!1}},{key:"locked",value:{name:"boolean",required:!1}},{key:"annotationRole",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_ENTRY_ROLES)[keyof typeof ANNOTATION_ENTRY_ROLES]",required:!1}},{key:"readOnly",value:{name:"boolean",required:!1}},{key:"labelAppearance",value:{name:"AnnotationLabelAppearance",required:!1}},{key:"elevationDisplayMode",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_ELEVATION_DISPLAY_MODES)[keyof typeof ANNOTATION_ELEVATION_DISPLAY_MODES]",required:!1}},{key:"distanceAnchorCoordinateSelection",value:{name:"unknown[union]",raw:"(typeof RUNTIME_POINT_LABEL_COORDINATE_SELECTION)[keyof typeof RUNTIME_POINT_LABEL_COORDINATE_SELECTION]",required:!1}},{key:"distanceTriangleAnchorCoordinateRole",value:{name:"unknown[union]",raw:"(typeof RUNTIME_DISTANCE_TRIANGLE_ANCHOR_COORDINATE_ROLE)[keyof typeof RUNTIME_DISTANCE_TRIANGLE_ANCHOR_COORDINATE_ROLE]",required:!1}},{key:"closed",value:{name:"boolean",required:!1}},{key:"preferredNormalBearingRad",value:{name:"number",required:!1}},{key:"externalCollection",value:{name:"signature",type:"object",raw:`{
  type: "saved-measurement";
  id: string;
}`,signature:{properties:[{key:"type",value:{name:"literal",value:'"saved-measurement"',required:!0}},{key:"id",value:{name:"string",required:!0}}]},required:!1}},{key:"uuid",value:{name:"string",required:!1},description:"Identity across machines and shares; the runtime id only counts per session."},{key:"updatedAt",value:{name:"string",required:!1},description:"ISO time of the last content change, stamped by the persistence on save."}]},required:!0},{name:"union",raw:`| "closed"
| "preferredNormalBearingRad"
| "displayName"
| "shortLabel"
| "shortLabelSource"
| "shortLabelCounter"
| "hidden"
| "locked"
| "labelAppearance"
| "elevationDisplayMode"
| "distanceAnchorCoordinateSelection"
| "distanceTriangleAnchorCoordinateRole"`,elements:[{name:"literal",value:'"closed"'},{name:"literal",value:'"preferredNormalBearingRad"'},{name:"literal",value:'"displayName"'},{name:"literal",value:'"shortLabel"'},{name:"literal",value:'"shortLabelSource"'},{name:"literal",value:'"shortLabelCounter"'},{name:"literal",value:'"hidden"'},{name:"literal",value:'"locked"'},{name:"literal",value:'"labelAppearance"'},{name:"literal",value:'"elevationDisplayMode"'},{name:"literal",value:'"distanceAnchorCoordinateSelection"'},{name:"literal",value:'"distanceTriangleAnchorCoordinateRole"'}]}],raw:`Pick<
  StoredAnnotation,
  | "closed"
  | "preferredNormalBearingRad"
  | "displayName"
  | "shortLabel"
  | "shortLabelSource"
  | "shortLabelCounter"
  | "hidden"
  | "locked"
  | "labelAppearance"
  | "elevationDisplayMode"
  | "distanceAnchorCoordinateSelection"
  | "distanceTriangleAnchorCoordinateRole"
>`,required:!1},name:"options"},{type:{name:"unknown"},name:"linkedNodeGroupIds"},{type:{name:"AnnotationToolId"},name:"sourceToolId"}],return:{name:"signature",type:"object",raw:`{
  id: string;
  toolType: AnnotationType;
  nodeIds: readonly string[];
  edgeIds: readonly string[];
  displayName?: string;
  shortLabel?: string;
  shortLabelSource?: AnnotationShortLabelSource;
  shortLabelCounter?: number;
  hidden?: boolean;
  locked?: boolean;
  annotationRole?: AnnotationEntryRole;
  readOnly?: boolean;
  labelAppearance?: AnnotationLabelAppearance;
  elevationDisplayMode?: AnnotationElevationDisplayMode;
  distanceAnchorCoordinateSelection?: RuntimePointLabelCoordinateSelection;
  distanceTriangleAnchorCoordinateRole?: RuntimeDistanceTriangleAnchorCoordinateRole;
  closed?: boolean;
  preferredNormalBearingRad?: number;
  externalCollection?: {
    type: "saved-measurement";
    id: string;
  };
  /** Identity across machines and shares; the runtime id only counts per session. */
  uuid?: string;
  /** ISO time of the last content change, stamped by the persistence on save. */
  updatedAt?: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"toolType",value:{name:"AnnotationType",required:!0}},{key:"nodeIds",value:{name:"unknown",required:!0}},{key:"edgeIds",value:{name:"unknown",required:!0}},{key:"displayName",value:{name:"string",required:!1}},{key:"shortLabel",value:{name:"string",required:!1}},{key:"shortLabelSource",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_SHORT_LABEL_SOURCES)[keyof typeof ANNOTATION_SHORT_LABEL_SOURCES]",required:!1}},{key:"shortLabelCounter",value:{name:"number",required:!1}},{key:"hidden",value:{name:"boolean",required:!1}},{key:"locked",value:{name:"boolean",required:!1}},{key:"annotationRole",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_ENTRY_ROLES)[keyof typeof ANNOTATION_ENTRY_ROLES]",required:!1}},{key:"readOnly",value:{name:"boolean",required:!1}},{key:"labelAppearance",value:{name:"AnnotationLabelAppearance",required:!1}},{key:"elevationDisplayMode",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_ELEVATION_DISPLAY_MODES)[keyof typeof ANNOTATION_ELEVATION_DISPLAY_MODES]",required:!1}},{key:"distanceAnchorCoordinateSelection",value:{name:"unknown[union]",raw:"(typeof RUNTIME_POINT_LABEL_COORDINATE_SELECTION)[keyof typeof RUNTIME_POINT_LABEL_COORDINATE_SELECTION]",required:!1}},{key:"distanceTriangleAnchorCoordinateRole",value:{name:"unknown[union]",raw:"(typeof RUNTIME_DISTANCE_TRIANGLE_ANCHOR_COORDINATE_ROLE)[keyof typeof RUNTIME_DISTANCE_TRIANGLE_ANCHOR_COORDINATE_ROLE]",required:!1}},{key:"closed",value:{name:"boolean",required:!1}},{key:"preferredNormalBearingRad",value:{name:"number",required:!1}},{key:"externalCollection",value:{name:"signature",type:"object",raw:`{
  type: "saved-measurement";
  id: string;
}`,signature:{properties:[{key:"type",value:{name:"literal",value:'"saved-measurement"',required:!0}},{key:"id",value:{name:"string",required:!0}}]},required:!1}},{key:"uuid",value:{name:"string",required:!1},description:"Identity across machines and shares; the runtime id only counts per session."},{key:"updatedAt",value:{name:"string",required:!1},description:"ISO time of the last content change, stamped by the persistence on save."}]},required:!0}},required:!0}}]},required:!0},name:"context"}],return:{name:"signature",type:"object",raw:`{
  toolType: AnnotationToolId;
  requestStart: () => void;
  requestFinish: () => boolean;
  discardDraft: () => void;
  onNodeCreated?: (
    coordinate: AnnotationGeographicCoordinate,
    linkedNodeGroupId?: AnnotationNodeLinkId | null,
    options?: { inputModifier?: AnnotationPointQueryInputModifier }
  ) => void;
  finishesOnLoopClosure?: boolean;
}`,signature:{properties:[{key:"toolType",value:{name:"AnnotationToolId",required:!0}},{key:"requestStart",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}},{key:"requestFinish",value:{name:"signature",type:"function",raw:"() => boolean",signature:{arguments:[],return:{name:"boolean"}},required:!0}},{key:"discardDraft",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}},{key:"onNodeCreated",value:{name:"signature",type:"function",raw:`(
  coordinate: AnnotationGeographicCoordinate,
  linkedNodeGroupId?: AnnotationNodeLinkId | null,
  options?: { inputModifier?: AnnotationPointQueryInputModifier }
) => void`,signature:{arguments:[{type:{name:"AnnotationGeographicCoordinate"},name:"coordinate"},{type:{name:"union",raw:"AnnotationNodeLinkId | null",elements:[{name:"string"},{name:"null"}]},name:"linkedNodeGroupId"},{type:{name:"signature",type:"object",raw:"{ inputModifier?: AnnotationPointQueryInputModifier }",signature:{properties:[{key:"inputModifier",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_POINT_QUERY_INPUT_MODIFIERS)[keyof typeof ANNOTATION_POINT_QUERY_INPUT_MODIFIERS]",required:!1}}]}},name:"options"}],return:{name:"void"}},required:!1}},{key:"finishesOnLoopClosure",value:{name:"boolean",required:!1}}]}}},required:!0}}]},required:!1}},{key:"pointQuery",value:{name:"signature",type:"object",raw:`{
  inputModifiers?: readonly AnnotationPointQueryInputModifier[];
  onPointCreated: (context: PointQueryCreatedContext) => void;
}`,signature:{properties:[{key:"inputModifiers",value:{name:"unknown",required:!1}},{key:"onPointCreated",value:{name:"signature",type:"function",raw:"(context: PointQueryCreatedContext) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  coordinate: AnnotationGeographicCoordinate;
  linkedNodeGroupId: AnnotationNodeLinkId | null;
  inputModifier?: AnnotationPointQueryInputModifier;
  activeToolType: AnnotationToolId;
  activeToolSession: AnnotationModeSession | null;
  toolSessions: AnnotationModeSessionMap;
  sessionContext: AnnotationToolSessionContext;
}`,signature:{properties:[{key:"coordinate",value:{name:"AnnotationGeographicCoordinate",required:!0}},{key:"linkedNodeGroupId",value:{name:"union",raw:"AnnotationNodeLinkId | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"inputModifier",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_POINT_QUERY_INPUT_MODIFIERS)[keyof typeof ANNOTATION_POINT_QUERY_INPUT_MODIFIERS]",required:!1}},{key:"activeToolType",value:{name:"AnnotationToolId",required:!0}},{key:"activeToolSession",value:{name:"union",raw:"AnnotationModeSession | null",elements:[{name:"signature",type:"object",raw:`{
  toolType: AnnotationToolId;
  requestStart: () => void;
  requestFinish: () => boolean;
  discardDraft: () => void;
  onNodeCreated?: (
    coordinate: AnnotationGeographicCoordinate,
    linkedNodeGroupId?: AnnotationNodeLinkId | null,
    options?: { inputModifier?: AnnotationPointQueryInputModifier }
  ) => void;
  finishesOnLoopClosure?: boolean;
}`,signature:{properties:[{key:"toolType",value:{name:"AnnotationToolId",required:!0}},{key:"requestStart",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}},{key:"requestFinish",value:{name:"signature",type:"function",raw:"() => boolean",signature:{arguments:[],return:{name:"boolean"}},required:!0}},{key:"discardDraft",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}},{key:"onNodeCreated",value:{name:"signature",type:"function",raw:`(
  coordinate: AnnotationGeographicCoordinate,
  linkedNodeGroupId?: AnnotationNodeLinkId | null,
  options?: { inputModifier?: AnnotationPointQueryInputModifier }
) => void`,signature:{arguments:[{type:{name:"AnnotationGeographicCoordinate"},name:"coordinate"},{type:{name:"union",raw:"AnnotationNodeLinkId | null",elements:[{name:"string"},{name:"null"}]},name:"linkedNodeGroupId"},{type:{name:"signature",type:"object",raw:"{ inputModifier?: AnnotationPointQueryInputModifier }",signature:{properties:[{key:"inputModifier",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_POINT_QUERY_INPUT_MODIFIERS)[keyof typeof ANNOTATION_POINT_QUERY_INPUT_MODIFIERS]",required:!1}}]}},name:"options"}],return:{name:"void"}},required:!1}},{key:"finishesOnLoopClosure",value:{name:"boolean",required:!1}}]}},{name:"null"}],required:!0}},{key:"toolSessions",value:{name:"Partial",elements:[{name:"Record",elements:[{name:"AnnotationToolId"},{name:"signature",type:"object",raw:`{
  toolType: AnnotationToolId;
  requestStart: () => void;
  requestFinish: () => boolean;
  discardDraft: () => void;
  onNodeCreated?: (
    coordinate: AnnotationGeographicCoordinate,
    linkedNodeGroupId?: AnnotationNodeLinkId | null,
    options?: { inputModifier?: AnnotationPointQueryInputModifier }
  ) => void;
  finishesOnLoopClosure?: boolean;
}`,signature:{properties:[{key:"toolType",value:{name:"AnnotationToolId",required:!0}},{key:"requestStart",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}},{key:"requestFinish",value:{name:"signature",type:"function",raw:"() => boolean",signature:{arguments:[],return:{name:"boolean"}},required:!0}},{key:"discardDraft",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}},{key:"onNodeCreated",value:{name:"signature",type:"function",raw:`(
  coordinate: AnnotationGeographicCoordinate,
  linkedNodeGroupId?: AnnotationNodeLinkId | null,
  options?: { inputModifier?: AnnotationPointQueryInputModifier }
) => void`,signature:{arguments:[{type:{name:"AnnotationGeographicCoordinate"},name:"coordinate"},{type:{name:"union",raw:"AnnotationNodeLinkId | null",elements:[{name:"string"},{name:"null"}]},name:"linkedNodeGroupId"},{type:{name:"signature",type:"object",raw:"{ inputModifier?: AnnotationPointQueryInputModifier }",signature:{properties:[{key:"inputModifier",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_POINT_QUERY_INPUT_MODIFIERS)[keyof typeof ANNOTATION_POINT_QUERY_INPUT_MODIFIERS]",required:!1}}]}},name:"options"}],return:{name:"void"}},required:!1}},{key:"finishesOnLoopClosure",value:{name:"boolean",required:!1}}]}}],raw:"Record<AnnotationToolId, AnnotationModeSession>"}],raw:`Partial<
  Record<AnnotationToolId, AnnotationModeSession>
>`,required:!0}},{key:"sessionContext",value:{name:"signature",type:"object",raw:`{
  getState: () => AnnotationsStoreState;
  dispatch: AnnotationsStore["dispatch"];
  setActiveToolType: (toolId: AnnotationToolId) => void;
  drafts: AnnotationToolDraftStore;
  requestLabelText?: AnnotationLabelTextRequester;
  addAnnotation: (
    annotationType: StoredAnnotation["toolType"],
    coordinates: readonly AnnotationGeographicCoordinate[],
    options?: AddAnnotationOptions,
    linkedNodeGroupIds?: readonly (AnnotationNodeLinkId | null | undefined)[],
    sourceToolId?: AnnotationToolId
  ) => StoredAnnotation;
}`,signature:{properties:[{key:"getState",value:{name:"signature",type:"function",raw:"() => AnnotationsStoreState",signature:{arguments:[],return:{name:"signature",type:"object",raw:`{
  annotationToolType: AnnotationToolId;
  selectionState: AnnotationSelectionStoreState;
  annotationEntries: readonly StoredAnnotation[];
  nodes: readonly AnnotationNode[];
  linkedNodeGroups: readonly AnnotationNodeLink[];
  edges: readonly AnnotationEdge[];
  infoBoxState: AnnotationInfoBoxStoreState;
  settingsState: AnnotationSettingsStoreState;
}`,signature:{properties:[{key:"annotationToolType",value:{name:"AnnotationToolId",required:!0}},{key:"selectionState",value:{name:"signature",type:"object",raw:`{
  selectedAnnotationIds: readonly string[];
  previousSelectedAnnotationId: string | null;
}`,signature:{properties:[{key:"selectedAnnotationIds",value:{name:"unknown",required:!0}},{key:"previousSelectedAnnotationId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]},required:!0}},{key:"annotationEntries",value:{name:"unknown",required:!0}},{key:"nodes",value:{name:"unknown",required:!0}},{key:"linkedNodeGroups",value:{name:"unknown",required:!0}},{key:"edges",value:{name:"unknown",required:!0}},{key:"infoBoxState",value:{name:"signature",type:"object",raw:`{
  activeAnnotationId: string | null;
}`,signature:{properties:[{key:"activeAnnotationId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]},required:!0}},{key:"settingsState",value:{name:"signature",type:"object",raw:`{
  pointTemporaryMode: boolean;
  elevationReferenceAnnotationId: string | null;
  nextShortLabelCounterByToolType: Readonly<Record<string, number>>;
}`,signature:{properties:[{key:"pointTemporaryMode",value:{name:"boolean",required:!0}},{key:"elevationReferenceAnnotationId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"nextShortLabelCounterByToolType",value:{name:"Readonly",elements:[{name:"Record",elements:[{name:"string"},{name:"number"}],raw:"Record<string, number>"}],raw:"Readonly<Record<string, number>>",required:!0}}]},required:!0}}]}}},required:!0}},{key:"dispatch",value:{name:'ReturnType["dispatch"]',raw:'AnnotationsStore["dispatch"]',required:!0}},{key:"setActiveToolType",value:{name:"signature",type:"function",raw:"(toolId: AnnotationToolId) => void",signature:{arguments:[{type:{name:"AnnotationToolId"},name:"toolId"}],return:{name:"void"}},required:!0}},{key:"drafts",value:{name:"signature",type:"object",raw:`{
  get: (toolId: AnnotationToolId) => AnnotationToolDraftState;
  set: (toolId: AnnotationToolId, draft: AnnotationToolDraftState) => void;
  clear: (toolId: AnnotationToolId) => void;
  subscribe: (toolId: AnnotationToolId, listener: () => void) => () => void;
}`,signature:{properties:[{key:"get",value:{name:"signature",type:"function",raw:"(toolId: AnnotationToolId) => AnnotationToolDraftState",signature:{arguments:[{type:{name:"AnnotationToolId"},name:"toolId"}],return:{name:"signature",type:"object",raw:`{
  coordinates: readonly AnnotationGeographicCoordinate[];
  linkedNodeGroupIds: readonly (AnnotationNodeLinkId | null)[];
  feedback?: {
    kind: "warning";
    message: string;
  } | null;
}`,signature:{properties:[{key:"coordinates",value:{name:"unknown",required:!0}},{key:"linkedNodeGroupIds",value:{name:"unknown",required:!0}},{key:"feedback",value:{name:"union",raw:`{
  kind: "warning";
  message: string;
} | null`,elements:[{name:"signature",type:"object",raw:`{
  kind: "warning";
  message: string;
}`,signature:{properties:[{key:"kind",value:{name:"literal",value:'"warning"',required:!0}},{key:"message",value:{name:"string",required:!0}}]}},{name:"null"}],required:!1}}]},required:!0}},required:!0}},{key:"set",value:{name:"signature",type:"function",raw:"(toolId: AnnotationToolId, draft: AnnotationToolDraftState) => void",signature:{arguments:[{type:{name:"AnnotationToolId"},name:"toolId"},{type:{name:"signature",type:"object",raw:`{
  coordinates: readonly AnnotationGeographicCoordinate[];
  linkedNodeGroupIds: readonly (AnnotationNodeLinkId | null)[];
  feedback?: {
    kind: "warning";
    message: string;
  } | null;
}`,signature:{properties:[{key:"coordinates",value:{name:"unknown",required:!0}},{key:"linkedNodeGroupIds",value:{name:"unknown",required:!0}},{key:"feedback",value:{name:"union",raw:`{
  kind: "warning";
  message: string;
} | null`,elements:[{name:"signature",type:"object",raw:`{
  kind: "warning";
  message: string;
}`,signature:{properties:[{key:"kind",value:{name:"literal",value:'"warning"',required:!0}},{key:"message",value:{name:"string",required:!0}}]}},{name:"null"}],required:!1}}]},required:!0},name:"draft"}],return:{name:"void"}},required:!0}},{key:"clear",value:{name:"signature",type:"function",raw:"(toolId: AnnotationToolId) => void",signature:{arguments:[{type:{name:"AnnotationToolId"},name:"toolId"}],return:{name:"void"}},required:!0}},{key:"subscribe",value:{name:"signature",type:"function",raw:"(toolId: AnnotationToolId, listener: () => void) => () => void",signature:{arguments:[{type:{name:"AnnotationToolId"},name:"toolId"},{type:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},name:"listener"}],return:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}}},required:!0}}]},required:!0}},{key:"requestLabelText",value:{name:"signature",type:"function",raw:`(
  context: AnnotationLabelTextRequestContext
) => string | null | Promise<string | null>`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  coordinate: AnnotationGeographicCoordinate;
  defaultText: string;
  labelTextSuggestions: readonly string[];
  linkedNodeGroupId?: AnnotationNodeLinkId | null;
}`,signature:{properties:[{key:"coordinate",value:{name:"AnnotationGeographicCoordinate",required:!0}},{key:"defaultText",value:{name:"string",required:!0}},{key:"labelTextSuggestions",value:{name:"unknown",required:!0}},{key:"linkedNodeGroupId",value:{name:"union",raw:"AnnotationNodeLinkId | null",elements:[{name:"string"},{name:"null"}],required:!1}}]}},name:"context"}],return:{name:"union",raw:"string | null | Promise<string | null>",elements:[{name:"string"},{name:"null"},{name:"Promise",elements:[{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]}],raw:"Promise<string | null>"}]}},required:!1}},{key:"addAnnotation",value:{name:"signature",type:"function",raw:`(
  annotationType: StoredAnnotation["toolType"],
  coordinates: readonly AnnotationGeographicCoordinate[],
  options?: AddAnnotationOptions,
  linkedNodeGroupIds?: readonly (AnnotationNodeLinkId | null | undefined)[],
  sourceToolId?: AnnotationToolId
) => StoredAnnotation`,signature:{arguments:[{type:{name:"AnnotationType",raw:'StoredAnnotation["toolType"]'},name:"annotationType"},{type:{name:"unknown"},name:"coordinates"},{type:{name:"Pick",elements:[{name:"signature",type:"object",raw:`{
  id: string;
  toolType: AnnotationType;
  nodeIds: readonly string[];
  edgeIds: readonly string[];
  displayName?: string;
  shortLabel?: string;
  shortLabelSource?: AnnotationShortLabelSource;
  shortLabelCounter?: number;
  hidden?: boolean;
  locked?: boolean;
  annotationRole?: AnnotationEntryRole;
  readOnly?: boolean;
  labelAppearance?: AnnotationLabelAppearance;
  elevationDisplayMode?: AnnotationElevationDisplayMode;
  distanceAnchorCoordinateSelection?: RuntimePointLabelCoordinateSelection;
  distanceTriangleAnchorCoordinateRole?: RuntimeDistanceTriangleAnchorCoordinateRole;
  closed?: boolean;
  preferredNormalBearingRad?: number;
  externalCollection?: {
    type: "saved-measurement";
    id: string;
  };
  /** Identity across machines and shares; the runtime id only counts per session. */
  uuid?: string;
  /** ISO time of the last content change, stamped by the persistence on save. */
  updatedAt?: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"toolType",value:{name:"AnnotationType",required:!0}},{key:"nodeIds",value:{name:"unknown",required:!0}},{key:"edgeIds",value:{name:"unknown",required:!0}},{key:"displayName",value:{name:"string",required:!1}},{key:"shortLabel",value:{name:"string",required:!1}},{key:"shortLabelSource",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_SHORT_LABEL_SOURCES)[keyof typeof ANNOTATION_SHORT_LABEL_SOURCES]",required:!1}},{key:"shortLabelCounter",value:{name:"number",required:!1}},{key:"hidden",value:{name:"boolean",required:!1}},{key:"locked",value:{name:"boolean",required:!1}},{key:"annotationRole",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_ENTRY_ROLES)[keyof typeof ANNOTATION_ENTRY_ROLES]",required:!1}},{key:"readOnly",value:{name:"boolean",required:!1}},{key:"labelAppearance",value:{name:"AnnotationLabelAppearance",required:!1}},{key:"elevationDisplayMode",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_ELEVATION_DISPLAY_MODES)[keyof typeof ANNOTATION_ELEVATION_DISPLAY_MODES]",required:!1}},{key:"distanceAnchorCoordinateSelection",value:{name:"unknown[union]",raw:"(typeof RUNTIME_POINT_LABEL_COORDINATE_SELECTION)[keyof typeof RUNTIME_POINT_LABEL_COORDINATE_SELECTION]",required:!1}},{key:"distanceTriangleAnchorCoordinateRole",value:{name:"unknown[union]",raw:"(typeof RUNTIME_DISTANCE_TRIANGLE_ANCHOR_COORDINATE_ROLE)[keyof typeof RUNTIME_DISTANCE_TRIANGLE_ANCHOR_COORDINATE_ROLE]",required:!1}},{key:"closed",value:{name:"boolean",required:!1}},{key:"preferredNormalBearingRad",value:{name:"number",required:!1}},{key:"externalCollection",value:{name:"signature",type:"object",raw:`{
  type: "saved-measurement";
  id: string;
}`,signature:{properties:[{key:"type",value:{name:"literal",value:'"saved-measurement"',required:!0}},{key:"id",value:{name:"string",required:!0}}]},required:!1}},{key:"uuid",value:{name:"string",required:!1},description:"Identity across machines and shares; the runtime id only counts per session."},{key:"updatedAt",value:{name:"string",required:!1},description:"ISO time of the last content change, stamped by the persistence on save."}]},required:!0},{name:"union",raw:`| "closed"
| "preferredNormalBearingRad"
| "displayName"
| "shortLabel"
| "shortLabelSource"
| "shortLabelCounter"
| "hidden"
| "locked"
| "labelAppearance"
| "elevationDisplayMode"
| "distanceAnchorCoordinateSelection"
| "distanceTriangleAnchorCoordinateRole"`,elements:[{name:"literal",value:'"closed"'},{name:"literal",value:'"preferredNormalBearingRad"'},{name:"literal",value:'"displayName"'},{name:"literal",value:'"shortLabel"'},{name:"literal",value:'"shortLabelSource"'},{name:"literal",value:'"shortLabelCounter"'},{name:"literal",value:'"hidden"'},{name:"literal",value:'"locked"'},{name:"literal",value:'"labelAppearance"'},{name:"literal",value:'"elevationDisplayMode"'},{name:"literal",value:'"distanceAnchorCoordinateSelection"'},{name:"literal",value:'"distanceTriangleAnchorCoordinateRole"'}]}],raw:`Pick<
  StoredAnnotation,
  | "closed"
  | "preferredNormalBearingRad"
  | "displayName"
  | "shortLabel"
  | "shortLabelSource"
  | "shortLabelCounter"
  | "hidden"
  | "locked"
  | "labelAppearance"
  | "elevationDisplayMode"
  | "distanceAnchorCoordinateSelection"
  | "distanceTriangleAnchorCoordinateRole"
>`,required:!1},name:"options"},{type:{name:"unknown"},name:"linkedNodeGroupIds"},{type:{name:"AnnotationToolId"},name:"sourceToolId"}],return:{name:"signature",type:"object",raw:`{
  id: string;
  toolType: AnnotationType;
  nodeIds: readonly string[];
  edgeIds: readonly string[];
  displayName?: string;
  shortLabel?: string;
  shortLabelSource?: AnnotationShortLabelSource;
  shortLabelCounter?: number;
  hidden?: boolean;
  locked?: boolean;
  annotationRole?: AnnotationEntryRole;
  readOnly?: boolean;
  labelAppearance?: AnnotationLabelAppearance;
  elevationDisplayMode?: AnnotationElevationDisplayMode;
  distanceAnchorCoordinateSelection?: RuntimePointLabelCoordinateSelection;
  distanceTriangleAnchorCoordinateRole?: RuntimeDistanceTriangleAnchorCoordinateRole;
  closed?: boolean;
  preferredNormalBearingRad?: number;
  externalCollection?: {
    type: "saved-measurement";
    id: string;
  };
  /** Identity across machines and shares; the runtime id only counts per session. */
  uuid?: string;
  /** ISO time of the last content change, stamped by the persistence on save. */
  updatedAt?: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"toolType",value:{name:"AnnotationType",required:!0}},{key:"nodeIds",value:{name:"unknown",required:!0}},{key:"edgeIds",value:{name:"unknown",required:!0}},{key:"displayName",value:{name:"string",required:!1}},{key:"shortLabel",value:{name:"string",required:!1}},{key:"shortLabelSource",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_SHORT_LABEL_SOURCES)[keyof typeof ANNOTATION_SHORT_LABEL_SOURCES]",required:!1}},{key:"shortLabelCounter",value:{name:"number",required:!1}},{key:"hidden",value:{name:"boolean",required:!1}},{key:"locked",value:{name:"boolean",required:!1}},{key:"annotationRole",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_ENTRY_ROLES)[keyof typeof ANNOTATION_ENTRY_ROLES]",required:!1}},{key:"readOnly",value:{name:"boolean",required:!1}},{key:"labelAppearance",value:{name:"AnnotationLabelAppearance",required:!1}},{key:"elevationDisplayMode",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_ELEVATION_DISPLAY_MODES)[keyof typeof ANNOTATION_ELEVATION_DISPLAY_MODES]",required:!1}},{key:"distanceAnchorCoordinateSelection",value:{name:"unknown[union]",raw:"(typeof RUNTIME_POINT_LABEL_COORDINATE_SELECTION)[keyof typeof RUNTIME_POINT_LABEL_COORDINATE_SELECTION]",required:!1}},{key:"distanceTriangleAnchorCoordinateRole",value:{name:"unknown[union]",raw:"(typeof RUNTIME_DISTANCE_TRIANGLE_ANCHOR_COORDINATE_ROLE)[keyof typeof RUNTIME_DISTANCE_TRIANGLE_ANCHOR_COORDINATE_ROLE]",required:!1}},{key:"closed",value:{name:"boolean",required:!1}},{key:"preferredNormalBearingRad",value:{name:"number",required:!1}},{key:"externalCollection",value:{name:"signature",type:"object",raw:`{
  type: "saved-measurement";
  id: string;
}`,signature:{properties:[{key:"type",value:{name:"literal",value:'"saved-measurement"',required:!0}},{key:"id",value:{name:"string",required:!0}}]},required:!1}},{key:"uuid",value:{name:"string",required:!1},description:"Identity across machines and shares; the runtime id only counts per session."},{key:"updatedAt",value:{name:"string",required:!1},description:"ISO time of the last content change, stamped by the persistence on save."}]},required:!0}},required:!0}}]},required:!0}}]}},name:"context"}],return:{name:"void"}},required:!0}}]},required:!1}},{key:"addAnnotation",value:{name:"signature",type:"object",raw:`{
  resolveOptions: (
    context: AnnotationToolAddAnnotationContext
  ) => AddAnnotationOptions | undefined;
}`,signature:{properties:[{key:"resolveOptions",value:{name:"signature",type:"function",raw:`(
  context: AnnotationToolAddAnnotationContext
) => AddAnnotationOptions | undefined`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  annotationType: StoredAnnotation["toolType"];
  toolId: AnnotationToolId | null;
  engine: AnnotationEngine | null;
  coordinates: readonly AnnotationGeographicCoordinate[];
  options?: AddAnnotationOptions;
  linkedNodeGroupIds?: readonly (AnnotationNodeLinkId | null | undefined)[];
}`,signature:{properties:[{key:"annotationType",value:{name:"AnnotationType",raw:'StoredAnnotation["toolType"]',required:!0}},{key:"toolId",value:{name:"union",raw:"AnnotationToolId | null",elements:[{name:"AnnotationToolId"},{name:"null"}],required:!0}},{key:"engine",value:{name:"union",raw:"AnnotationEngine | null",elements:[{name:"AnnotationEngine"},{name:"null"}],required:!0}},{key:"coordinates",value:{name:"unknown",required:!0}},{key:"options",value:{name:"Pick",elements:[{name:"signature",type:"object",raw:`{
  id: string;
  toolType: AnnotationType;
  nodeIds: readonly string[];
  edgeIds: readonly string[];
  displayName?: string;
  shortLabel?: string;
  shortLabelSource?: AnnotationShortLabelSource;
  shortLabelCounter?: number;
  hidden?: boolean;
  locked?: boolean;
  annotationRole?: AnnotationEntryRole;
  readOnly?: boolean;
  labelAppearance?: AnnotationLabelAppearance;
  elevationDisplayMode?: AnnotationElevationDisplayMode;
  distanceAnchorCoordinateSelection?: RuntimePointLabelCoordinateSelection;
  distanceTriangleAnchorCoordinateRole?: RuntimeDistanceTriangleAnchorCoordinateRole;
  closed?: boolean;
  preferredNormalBearingRad?: number;
  externalCollection?: {
    type: "saved-measurement";
    id: string;
  };
  /** Identity across machines and shares; the runtime id only counts per session. */
  uuid?: string;
  /** ISO time of the last content change, stamped by the persistence on save. */
  updatedAt?: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"toolType",value:{name:"AnnotationType",required:!0}},{key:"nodeIds",value:{name:"unknown",required:!0}},{key:"edgeIds",value:{name:"unknown",required:!0}},{key:"displayName",value:{name:"string",required:!1}},{key:"shortLabel",value:{name:"string",required:!1}},{key:"shortLabelSource",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_SHORT_LABEL_SOURCES)[keyof typeof ANNOTATION_SHORT_LABEL_SOURCES]",required:!1}},{key:"shortLabelCounter",value:{name:"number",required:!1}},{key:"hidden",value:{name:"boolean",required:!1}},{key:"locked",value:{name:"boolean",required:!1}},{key:"annotationRole",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_ENTRY_ROLES)[keyof typeof ANNOTATION_ENTRY_ROLES]",required:!1}},{key:"readOnly",value:{name:"boolean",required:!1}},{key:"labelAppearance",value:{name:"AnnotationLabelAppearance",required:!1}},{key:"elevationDisplayMode",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_ELEVATION_DISPLAY_MODES)[keyof typeof ANNOTATION_ELEVATION_DISPLAY_MODES]",required:!1}},{key:"distanceAnchorCoordinateSelection",value:{name:"unknown[union]",raw:"(typeof RUNTIME_POINT_LABEL_COORDINATE_SELECTION)[keyof typeof RUNTIME_POINT_LABEL_COORDINATE_SELECTION]",required:!1}},{key:"distanceTriangleAnchorCoordinateRole",value:{name:"unknown[union]",raw:"(typeof RUNTIME_DISTANCE_TRIANGLE_ANCHOR_COORDINATE_ROLE)[keyof typeof RUNTIME_DISTANCE_TRIANGLE_ANCHOR_COORDINATE_ROLE]",required:!1}},{key:"closed",value:{name:"boolean",required:!1}},{key:"preferredNormalBearingRad",value:{name:"number",required:!1}},{key:"externalCollection",value:{name:"signature",type:"object",raw:`{
  type: "saved-measurement";
  id: string;
}`,signature:{properties:[{key:"type",value:{name:"literal",value:'"saved-measurement"',required:!0}},{key:"id",value:{name:"string",required:!0}}]},required:!1}},{key:"uuid",value:{name:"string",required:!1},description:"Identity across machines and shares; the runtime id only counts per session."},{key:"updatedAt",value:{name:"string",required:!1},description:"ISO time of the last content change, stamped by the persistence on save."}]},required:!0},{name:"union",raw:`| "closed"
| "preferredNormalBearingRad"
| "displayName"
| "shortLabel"
| "shortLabelSource"
| "shortLabelCounter"
| "hidden"
| "locked"
| "labelAppearance"
| "elevationDisplayMode"
| "distanceAnchorCoordinateSelection"
| "distanceTriangleAnchorCoordinateRole"`,elements:[{name:"literal",value:'"closed"'},{name:"literal",value:'"preferredNormalBearingRad"'},{name:"literal",value:'"displayName"'},{name:"literal",value:'"shortLabel"'},{name:"literal",value:'"shortLabelSource"'},{name:"literal",value:'"shortLabelCounter"'},{name:"literal",value:'"hidden"'},{name:"literal",value:'"locked"'},{name:"literal",value:'"labelAppearance"'},{name:"literal",value:'"elevationDisplayMode"'},{name:"literal",value:'"distanceAnchorCoordinateSelection"'},{name:"literal",value:'"distanceTriangleAnchorCoordinateRole"'}]}],raw:`Pick<
  StoredAnnotation,
  | "closed"
  | "preferredNormalBearingRad"
  | "displayName"
  | "shortLabel"
  | "shortLabelSource"
  | "shortLabelCounter"
  | "hidden"
  | "locked"
  | "labelAppearance"
  | "elevationDisplayMode"
  | "distanceAnchorCoordinateSelection"
  | "distanceTriangleAnchorCoordinateRole"
>`,required:!1}},{key:"linkedNodeGroupIds",value:{name:"unknown",required:!1}}]}},name:"context"}],return:{name:"union",raw:"AddAnnotationOptions | undefined",elements:[{name:"Pick",elements:[{name:"signature",type:"object",raw:`{
  id: string;
  toolType: AnnotationType;
  nodeIds: readonly string[];
  edgeIds: readonly string[];
  displayName?: string;
  shortLabel?: string;
  shortLabelSource?: AnnotationShortLabelSource;
  shortLabelCounter?: number;
  hidden?: boolean;
  locked?: boolean;
  annotationRole?: AnnotationEntryRole;
  readOnly?: boolean;
  labelAppearance?: AnnotationLabelAppearance;
  elevationDisplayMode?: AnnotationElevationDisplayMode;
  distanceAnchorCoordinateSelection?: RuntimePointLabelCoordinateSelection;
  distanceTriangleAnchorCoordinateRole?: RuntimeDistanceTriangleAnchorCoordinateRole;
  closed?: boolean;
  preferredNormalBearingRad?: number;
  externalCollection?: {
    type: "saved-measurement";
    id: string;
  };
  /** Identity across machines and shares; the runtime id only counts per session. */
  uuid?: string;
  /** ISO time of the last content change, stamped by the persistence on save. */
  updatedAt?: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"toolType",value:{name:"AnnotationType",required:!0}},{key:"nodeIds",value:{name:"unknown",required:!0}},{key:"edgeIds",value:{name:"unknown",required:!0}},{key:"displayName",value:{name:"string",required:!1}},{key:"shortLabel",value:{name:"string",required:!1}},{key:"shortLabelSource",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_SHORT_LABEL_SOURCES)[keyof typeof ANNOTATION_SHORT_LABEL_SOURCES]",required:!1}},{key:"shortLabelCounter",value:{name:"number",required:!1}},{key:"hidden",value:{name:"boolean",required:!1}},{key:"locked",value:{name:"boolean",required:!1}},{key:"annotationRole",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_ENTRY_ROLES)[keyof typeof ANNOTATION_ENTRY_ROLES]",required:!1}},{key:"readOnly",value:{name:"boolean",required:!1}},{key:"labelAppearance",value:{name:"AnnotationLabelAppearance",required:!1}},{key:"elevationDisplayMode",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_ELEVATION_DISPLAY_MODES)[keyof typeof ANNOTATION_ELEVATION_DISPLAY_MODES]",required:!1}},{key:"distanceAnchorCoordinateSelection",value:{name:"unknown[union]",raw:"(typeof RUNTIME_POINT_LABEL_COORDINATE_SELECTION)[keyof typeof RUNTIME_POINT_LABEL_COORDINATE_SELECTION]",required:!1}},{key:"distanceTriangleAnchorCoordinateRole",value:{name:"unknown[union]",raw:"(typeof RUNTIME_DISTANCE_TRIANGLE_ANCHOR_COORDINATE_ROLE)[keyof typeof RUNTIME_DISTANCE_TRIANGLE_ANCHOR_COORDINATE_ROLE]",required:!1}},{key:"closed",value:{name:"boolean",required:!1}},{key:"preferredNormalBearingRad",value:{name:"number",required:!1}},{key:"externalCollection",value:{name:"signature",type:"object",raw:`{
  type: "saved-measurement";
  id: string;
}`,signature:{properties:[{key:"type",value:{name:"literal",value:'"saved-measurement"',required:!0}},{key:"id",value:{name:"string",required:!0}}]},required:!1}},{key:"uuid",value:{name:"string",required:!1},description:"Identity across machines and shares; the runtime id only counts per session."},{key:"updatedAt",value:{name:"string",required:!1},description:"ISO time of the last content change, stamped by the persistence on save."}]},required:!0},{name:"union",raw:`| "closed"
| "preferredNormalBearingRad"
| "displayName"
| "shortLabel"
| "shortLabelSource"
| "shortLabelCounter"
| "hidden"
| "locked"
| "labelAppearance"
| "elevationDisplayMode"
| "distanceAnchorCoordinateSelection"
| "distanceTriangleAnchorCoordinateRole"`,elements:[{name:"literal",value:'"closed"'},{name:"literal",value:'"preferredNormalBearingRad"'},{name:"literal",value:'"displayName"'},{name:"literal",value:'"shortLabel"'},{name:"literal",value:'"shortLabelSource"'},{name:"literal",value:'"shortLabelCounter"'},{name:"literal",value:'"hidden"'},{name:"literal",value:'"locked"'},{name:"literal",value:'"labelAppearance"'},{name:"literal",value:'"elevationDisplayMode"'},{name:"literal",value:'"distanceAnchorCoordinateSelection"'},{name:"literal",value:'"distanceTriangleAnchorCoordinateRole"'}]}],raw:`Pick<
  StoredAnnotation,
  | "closed"
  | "preferredNormalBearingRad"
  | "displayName"
  | "shortLabel"
  | "shortLabelSource"
  | "shortLabelCounter"
  | "hidden"
  | "locked"
  | "labelAppearance"
  | "elevationDisplayMode"
  | "distanceAnchorCoordinateSelection"
  | "distanceTriangleAnchorCoordinateRole"
>`,required:!1},{name:"undefined"}]}},required:!0}}]},required:!1}},{key:"authoringVisuals",value:{name:"signature",type:"object",raw:`{
  createController: (
    context: AnnotationToolAuthoringContext
  ) => AnnotationToolAuthoringController | null;
}`,signature:{properties:[{key:"createController",value:{name:"signature",type:"function",raw:`(
  context: AnnotationToolAuthoringContext
) => AnnotationToolAuthoringController | null`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  engine: AnnotationEngine | null;
  annotationsStore: AnnotationsStore;
  drafts: AnnotationToolDraftStore;
  labelOverlay: LabelOverlayContextType;
  requestRender: () => void;
  formatOptions: AnnotationsRuntimeFormatOptions;
  lineLabelOptions: PartialAnnotationLineLabelOptions;
}`,signature:{properties:[{key:"engine",value:{name:"union",raw:"AnnotationEngine | null",elements:[{name:"AnnotationEngine"},{name:"null"}],required:!0}},{key:"annotationsStore",value:{name:"ReturnType",elements:[{name:"createAnnotationsStore"}],raw:"ReturnType<typeof createAnnotationsStore>",required:!0}},{key:"drafts",value:{name:"signature",type:"object",raw:`{
  get: (toolId: AnnotationToolId) => AnnotationToolDraftState;
  set: (toolId: AnnotationToolId, draft: AnnotationToolDraftState) => void;
  clear: (toolId: AnnotationToolId) => void;
  subscribe: (toolId: AnnotationToolId, listener: () => void) => () => void;
}`,signature:{properties:[{key:"get",value:{name:"signature",type:"function",raw:"(toolId: AnnotationToolId) => AnnotationToolDraftState",signature:{arguments:[{type:{name:"AnnotationToolId"},name:"toolId"}],return:{name:"signature",type:"object",raw:`{
  coordinates: readonly AnnotationGeographicCoordinate[];
  linkedNodeGroupIds: readonly (AnnotationNodeLinkId | null)[];
  feedback?: {
    kind: "warning";
    message: string;
  } | null;
}`,signature:{properties:[{key:"coordinates",value:{name:"unknown",required:!0}},{key:"linkedNodeGroupIds",value:{name:"unknown",required:!0}},{key:"feedback",value:{name:"union",raw:`{
  kind: "warning";
  message: string;
} | null`,elements:[{name:"signature",type:"object",raw:`{
  kind: "warning";
  message: string;
}`,signature:{properties:[{key:"kind",value:{name:"literal",value:'"warning"',required:!0}},{key:"message",value:{name:"string",required:!0}}]}},{name:"null"}],required:!1}}]},required:!0}},required:!0}},{key:"set",value:{name:"signature",type:"function",raw:"(toolId: AnnotationToolId, draft: AnnotationToolDraftState) => void",signature:{arguments:[{type:{name:"AnnotationToolId"},name:"toolId"},{type:{name:"signature",type:"object",raw:`{
  coordinates: readonly AnnotationGeographicCoordinate[];
  linkedNodeGroupIds: readonly (AnnotationNodeLinkId | null)[];
  feedback?: {
    kind: "warning";
    message: string;
  } | null;
}`,signature:{properties:[{key:"coordinates",value:{name:"unknown",required:!0}},{key:"linkedNodeGroupIds",value:{name:"unknown",required:!0}},{key:"feedback",value:{name:"union",raw:`{
  kind: "warning";
  message: string;
} | null`,elements:[{name:"signature",type:"object",raw:`{
  kind: "warning";
  message: string;
}`,signature:{properties:[{key:"kind",value:{name:"literal",value:'"warning"',required:!0}},{key:"message",value:{name:"string",required:!0}}]}},{name:"null"}],required:!1}}]},required:!0},name:"draft"}],return:{name:"void"}},required:!0}},{key:"clear",value:{name:"signature",type:"function",raw:"(toolId: AnnotationToolId) => void",signature:{arguments:[{type:{name:"AnnotationToolId"},name:"toolId"}],return:{name:"void"}},required:!0}},{key:"subscribe",value:{name:"signature",type:"function",raw:"(toolId: AnnotationToolId, listener: () => void) => () => void",signature:{arguments:[{type:{name:"AnnotationToolId"},name:"toolId"},{type:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},name:"listener"}],return:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}}},required:!0}}]},required:!0}},{key:"labelOverlay",value:{name:"LabelOverlayContextType",required:!0}},{key:"requestRender",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}},{key:"formatOptions",value:{name:"signature",type:"object",raw:`{
  lengthMeters?: FormatLengthMetersOptions;
  areaSquareMeters?: FormatAreaSquareMetersAdaptiveOptions;
  degrees?: FormatDegreesOptions;
  geographicCoordinate?: GeographicCoordinateFormatOptions;
  decimalNumber?: FormatDecimalNumberOptions;
}`,signature:{properties:[{key:"lengthMeters",value:{name:"FormatLengthMetersOptions",required:!1}},{key:"areaSquareMeters",value:{name:"FormatAreaSquareMetersAdaptiveOptions",required:!1}},{key:"degrees",value:{name:"FormatDegreesOptions",required:!1}},{key:"geographicCoordinate",value:{name:"GeographicCoordinateFormatOptions",required:!1}},{key:"decimalNumber",value:{name:"FormatDecimalNumberOptions",required:!1}}]},required:!0}},{key:"lineLabelOptions",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  appearance?: Partial<AnnotationLineLabelAppearanceOptions>;
  text?: Partial<
    Omit<AnnotationLineLabelTextOptions, "echo"> & {
      echo?: Partial<AnnotationLineLabelTextEchoOptions>;
    }
  >;
  background?: Partial<AnnotationLineLabelBackgroundOptions>;
  surface?: Partial<AnnotationLineLabelSurfaceOptions>;
  layout?: Partial<AnnotationLineLabelLayoutOptions>;
  collision?: Partial<AnnotationLineLabelCollisionOptions>;
}`,signature:{properties:[{key:"appearance",value:{name:"Partial",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  themeStyle: AnnotationThemeStyle;
}`,signature:{properties:[{key:"themeStyle",value:{name:"unknown[unknown]",raw:"(typeof ANNOTATION_THEME.style)[keyof typeof ANNOTATION_THEME.style]",required:!0}}]}}],raw:`Readonly<{
  themeStyle: AnnotationThemeStyle;
}>`}],raw:"Partial<AnnotationLineLabelAppearanceOptions>",required:!1}},{key:"text",value:{name:"Partial",elements:[{name:"intersection",raw:`Omit<AnnotationLineLabelTextOptions, "echo"> & {
  echo?: Partial<AnnotationLineLabelTextEchoOptions>;
}`,elements:[{name:"Omit",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fontFamily: string;
  fontWeight: string | number;
  color?: string;
  blendMode?: CssMixBlendMode;
  echo?: AnnotationLineLabelTextEchoOptions;
}`,signature:{properties:[{key:"fontFamily",value:{name:"string",required:!0}},{key:"fontWeight",value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!0}},{key:"color",value:{name:"string",required:!1}},{key:"blendMode",value:{name:"CssMixBlendMode",required:!1}},{key:"echo",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  color?: string;
  blurPx?: number;
  opacity?: number;
  blendMode?: CssMixBlendMode;
}`,signature:{properties:[{key:"color",value:{name:"string",required:!1}},{key:"blurPx",value:{name:"number",required:!1}},{key:"opacity",value:{name:"number",required:!1}},{key:"blendMode",value:{name:"CssMixBlendMode",required:!1}}]}}],raw:`Readonly<{
  color?: string;
  blurPx?: number;
  opacity?: number;
  blendMode?: CssMixBlendMode;
}>`,required:!1}}]}}],raw:`Readonly<{
  fontFamily: string;
  fontWeight: string | number;
  color?: string;
  blendMode?: CssMixBlendMode;
  echo?: AnnotationLineLabelTextEchoOptions;
}>`},{name:"literal",value:'"echo"'}],raw:'Omit<AnnotationLineLabelTextOptions, "echo">'},{name:"signature",type:"object",raw:`{
  echo?: Partial<AnnotationLineLabelTextEchoOptions>;
}`,signature:{properties:[{key:"echo",value:{name:"Partial",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  color?: string;
  blurPx?: number;
  opacity?: number;
  blendMode?: CssMixBlendMode;
}`,signature:{properties:[{key:"color",value:{name:"string",required:!1}},{key:"blurPx",value:{name:"number",required:!1}},{key:"opacity",value:{name:"number",required:!1}},{key:"blendMode",value:{name:"CssMixBlendMode",required:!1}}]}}],raw:`Readonly<{
  color?: string;
  blurPx?: number;
  opacity?: number;
  blendMode?: CssMixBlendMode;
}>`,required:!1}],raw:"Partial<AnnotationLineLabelTextEchoOptions>",required:!1}}]}}]}],raw:`Partial<
  Omit<AnnotationLineLabelTextOptions, "echo"> & {
    echo?: Partial<AnnotationLineLabelTextEchoOptions>;
  }
>`,required:!1}},{key:"background",value:{name:"Partial",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  style: AnnotationLineLabelBackgroundStyle;
  showBackdrop?: boolean;
  color?: string;
  blendMode?: CssMixBlendMode;
  blurPx?: number;
  brightnessPct?: number;
  saturatePct?: number;
  surfaceAlpha?: number;
  radiusEx?: number;
  edgeBlurPx?: number;
  insetBlockEx?: number;
  insetInlineEx?: number;
}`,signature:{properties:[{key:"style",value:{name:"unknown[unknown]",raw:"(typeof ANNOTATION_THEME.lineLabel.backgroundStyle)[keyof typeof ANNOTATION_THEME.lineLabel.backgroundStyle]",required:!0}},{key:"showBackdrop",value:{name:"boolean",required:!1}},{key:"color",value:{name:"string",required:!1}},{key:"blendMode",value:{name:"CssMixBlendMode",required:!1}},{key:"blurPx",value:{name:"number",required:!1}},{key:"brightnessPct",value:{name:"number",required:!1}},{key:"saturatePct",value:{name:"number",required:!1}},{key:"surfaceAlpha",value:{name:"number",required:!1}},{key:"radiusEx",value:{name:"number",required:!1}},{key:"edgeBlurPx",value:{name:"number",required:!1}},{key:"insetBlockEx",value:{name:"number",required:!1}},{key:"insetInlineEx",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  style: AnnotationLineLabelBackgroundStyle;
  showBackdrop?: boolean;
  color?: string;
  blendMode?: CssMixBlendMode;
  blurPx?: number;
  brightnessPct?: number;
  saturatePct?: number;
  surfaceAlpha?: number;
  radiusEx?: number;
  edgeBlurPx?: number;
  insetBlockEx?: number;
  insetInlineEx?: number;
}>`}],raw:"Partial<AnnotationLineLabelBackgroundOptions>",required:!1}},{key:"surface",value:{name:"Partial",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  blendMode?: CssMixBlendMode;
  paddingBlockEx?: number;
  paddingInlineEx?: number;
}`,signature:{properties:[{key:"blendMode",value:{name:"CssMixBlendMode",required:!1}},{key:"paddingBlockEx",value:{name:"number",required:!1}},{key:"paddingInlineEx",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  blendMode?: CssMixBlendMode;
  paddingBlockEx?: number;
  paddingInlineEx?: number;
}>`}],raw:"Partial<AnnotationLineLabelSurfaceOptions>",required:!1}},{key:"layout",value:{name:"Partial",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  shortEdgeOffsetPx: number;
}`,signature:{properties:[{key:"shortEdgeOffsetPx",value:{name:"number",required:!0}}]}}],raw:`Readonly<{
  shortEdgeOffsetPx: number;
}>`}],raw:"Partial<AnnotationLineLabelLayoutOptions>",required:!1}},{key:"collision",value:{name:"Partial",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  allowEarlyRemoval: boolean;
  resolutionStrategy: AnnotationLineLabelCollisionResolutionStrategy;
  anchorSlideStepRatio: number;
  maxAnchorSlideDeltaRatio: number;
}`,signature:{properties:[{key:"allowEarlyRemoval",value:{name:"boolean",required:!0}},{key:"resolutionStrategy",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_LINE_LABEL_COLLISION_RESOLUTION_STRATEGY)[keyof typeof ANNOTATION_LINE_LABEL_COLLISION_RESOLUTION_STRATEGY]",required:!0}},{key:"anchorSlideStepRatio",value:{name:"number",required:!0}},{key:"maxAnchorSlideDeltaRatio",value:{name:"number",required:!0}}]}}],raw:`Readonly<{
  allowEarlyRemoval: boolean;
  resolutionStrategy: AnnotationLineLabelCollisionResolutionStrategy;
  anchorSlideStepRatio: number;
  maxAnchorSlideDeltaRatio: number;
}>`}],raw:"Partial<AnnotationLineLabelCollisionOptions>",required:!1}}]}}],raw:`Readonly<{
  appearance?: Partial<AnnotationLineLabelAppearanceOptions>;
  text?: Partial<
    Omit<AnnotationLineLabelTextOptions, "echo"> & {
      echo?: Partial<AnnotationLineLabelTextEchoOptions>;
    }
  >;
  background?: Partial<AnnotationLineLabelBackgroundOptions>;
  surface?: Partial<AnnotationLineLabelSurfaceOptions>;
  layout?: Partial<AnnotationLineLabelLayoutOptions>;
  collision?: Partial<AnnotationLineLabelCollisionOptions>;
}>`,required:!0}}]}},name:"context"}],return:{name:"union",raw:"AnnotationToolAuthoringController | null",elements:[{name:"signature",type:"object",raw:`{
  setEnabled: (enabled: boolean) => void;
  setPointQueryPickResult: (
    pickResult: PointQueryPickResult | null,
    options?: { requestRender?: boolean }
  ) => void;
  isPointQueryPickResultAcceptable?: () => boolean;
  getPointQueryVisualStyle?: () => AnnotationPointQueryVisualStyle | undefined;
  destroy: () => void;
}`,signature:{properties:[{key:"setEnabled",value:{name:"signature",type:"function",raw:"(enabled: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"enabled"}],return:{name:"void"}},required:!0}},{key:"setPointQueryPickResult",value:{name:"signature",type:"function",raw:`(
  pickResult: PointQueryPickResult | null,
  options?: { requestRender?: boolean }
) => void`,signature:{arguments:[{type:{name:"union",raw:"PointQueryPickResult | null",elements:[{name:"signature",type:"object",raw:`{
  coordinate: AnnotationGeographicCoordinate | null;
  screenPosition: { x: number; y: number } | null;
  pointECEF: Vector3 | null;
  surfaceNormalECEF: Vector3 | null;
  inputModifier?: AnnotationPointQueryInputModifier;
}`,signature:{properties:[{key:"coordinate",value:{name:"union",raw:"AnnotationGeographicCoordinate | null",elements:[{name:"AnnotationGeographicCoordinate"},{name:"null"}],required:!0}},{key:"screenPosition",value:{name:"union",raw:"{ x: number; y: number } | null",elements:[{name:"signature",type:"object",raw:"{ x: number; y: number }",signature:{properties:[{key:"x",value:{name:"number",required:!0}},{key:"y",value:{name:"number",required:!0}}]}},{name:"null"}],required:!0}},{key:"pointECEF",value:{name:"union",raw:"Vector3 | null",elements:[{name:"Vector3"},{name:"null"}],required:!0}},{key:"surfaceNormalECEF",value:{name:"union",raw:"Vector3 | null",elements:[{name:"Vector3"},{name:"null"}],required:!0}},{key:"inputModifier",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_POINT_QUERY_INPUT_MODIFIERS)[keyof typeof ANNOTATION_POINT_QUERY_INPUT_MODIFIERS]",required:!1}}]}},{name:"null"}]},name:"pickResult"},{type:{name:"signature",type:"object",raw:"{ requestRender?: boolean }",signature:{properties:[{key:"requestRender",value:{name:"boolean",required:!1}}]}},name:"options"}],return:{name:"void"}},required:!0}},{key:"isPointQueryPickResultAcceptable",value:{name:"signature",type:"function",raw:"() => boolean",signature:{arguments:[],return:{name:"boolean"}},required:!1}},{key:"getPointQueryVisualStyle",value:{name:"signature",type:"function",raw:"() => AnnotationPointQueryVisualStyle | undefined",signature:{arguments:[],return:{name:"union",raw:"AnnotationPointQueryVisualStyle | undefined",elements:[{name:"union",raw:`Readonly<{
  color?: string;
  opacity?: number;
}> | null`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  color?: string;
  opacity?: number;
}`,signature:{properties:[{key:"color",value:{name:"string",required:!1}},{key:"opacity",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  color?: string;
  opacity?: number;
}>`},{name:"null"}]},{name:"undefined"}]}},required:!1}},{key:"destroy",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}}]}},{name:"null"}]}},required:!0}}]},required:!1}},{key:"keyboard",value:{name:"signature",type:"object",raw:`{
  onKeyDown: (context: AnnotationToolKeyboardContext) => boolean;
}`,signature:{properties:[{key:"onKeyDown",value:{name:"signature",type:"function",raw:"(context: AnnotationToolKeyboardContext) => boolean",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  event: KeyboardEvent;
  activeToolType: AnnotationToolId;
  activeToolSession: AnnotationModeSession | null;
  requestFinishMeasurement: () => boolean;
  requestActivateTool: (toolId?: AnnotationToolId) => void;
  requestModeChange: (toolId: AnnotationToolId) => void;
  sessionContext: AnnotationToolSessionContext;
}`,signature:{properties:[{key:"event",value:{name:"KeyboardEvent",required:!0}},{key:"activeToolType",value:{name:"AnnotationToolId",required:!0}},{key:"activeToolSession",value:{name:"union",raw:"AnnotationModeSession | null",elements:[{name:"signature",type:"object",raw:`{
  toolType: AnnotationToolId;
  requestStart: () => void;
  requestFinish: () => boolean;
  discardDraft: () => void;
  onNodeCreated?: (
    coordinate: AnnotationGeographicCoordinate,
    linkedNodeGroupId?: AnnotationNodeLinkId | null,
    options?: { inputModifier?: AnnotationPointQueryInputModifier }
  ) => void;
  finishesOnLoopClosure?: boolean;
}`,signature:{properties:[{key:"toolType",value:{name:"AnnotationToolId",required:!0}},{key:"requestStart",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}},{key:"requestFinish",value:{name:"signature",type:"function",raw:"() => boolean",signature:{arguments:[],return:{name:"boolean"}},required:!0}},{key:"discardDraft",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}},{key:"onNodeCreated",value:{name:"signature",type:"function",raw:`(
  coordinate: AnnotationGeographicCoordinate,
  linkedNodeGroupId?: AnnotationNodeLinkId | null,
  options?: { inputModifier?: AnnotationPointQueryInputModifier }
) => void`,signature:{arguments:[{type:{name:"AnnotationGeographicCoordinate"},name:"coordinate"},{type:{name:"union",raw:"AnnotationNodeLinkId | null",elements:[{name:"string"},{name:"null"}]},name:"linkedNodeGroupId"},{type:{name:"signature",type:"object",raw:"{ inputModifier?: AnnotationPointQueryInputModifier }",signature:{properties:[{key:"inputModifier",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_POINT_QUERY_INPUT_MODIFIERS)[keyof typeof ANNOTATION_POINT_QUERY_INPUT_MODIFIERS]",required:!1}}]}},name:"options"}],return:{name:"void"}},required:!1}},{key:"finishesOnLoopClosure",value:{name:"boolean",required:!1}}]}},{name:"null"}],required:!0}},{key:"requestFinishMeasurement",value:{name:"signature",type:"function",raw:"() => boolean",signature:{arguments:[],return:{name:"boolean"}},required:!0}},{key:"requestActivateTool",value:{name:"signature",type:"function",raw:"(toolId?: AnnotationToolId) => void",signature:{arguments:[{type:{name:"AnnotationToolId"},name:"toolId"}],return:{name:"void"}},required:!0}},{key:"requestModeChange",value:{name:"signature",type:"function",raw:"(toolId: AnnotationToolId) => void",signature:{arguments:[{type:{name:"AnnotationToolId"},name:"toolId"}],return:{name:"void"}},required:!0}},{key:"sessionContext",value:{name:"signature",type:"object",raw:`{
  getState: () => AnnotationsStoreState;
  dispatch: AnnotationsStore["dispatch"];
  setActiveToolType: (toolId: AnnotationToolId) => void;
  drafts: AnnotationToolDraftStore;
  requestLabelText?: AnnotationLabelTextRequester;
  addAnnotation: (
    annotationType: StoredAnnotation["toolType"],
    coordinates: readonly AnnotationGeographicCoordinate[],
    options?: AddAnnotationOptions,
    linkedNodeGroupIds?: readonly (AnnotationNodeLinkId | null | undefined)[],
    sourceToolId?: AnnotationToolId
  ) => StoredAnnotation;
}`,signature:{properties:[{key:"getState",value:{name:"signature",type:"function",raw:"() => AnnotationsStoreState",signature:{arguments:[],return:{name:"signature",type:"object",raw:`{
  annotationToolType: AnnotationToolId;
  selectionState: AnnotationSelectionStoreState;
  annotationEntries: readonly StoredAnnotation[];
  nodes: readonly AnnotationNode[];
  linkedNodeGroups: readonly AnnotationNodeLink[];
  edges: readonly AnnotationEdge[];
  infoBoxState: AnnotationInfoBoxStoreState;
  settingsState: AnnotationSettingsStoreState;
}`,signature:{properties:[{key:"annotationToolType",value:{name:"AnnotationToolId",required:!0}},{key:"selectionState",value:{name:"signature",type:"object",raw:`{
  selectedAnnotationIds: readonly string[];
  previousSelectedAnnotationId: string | null;
}`,signature:{properties:[{key:"selectedAnnotationIds",value:{name:"unknown",required:!0}},{key:"previousSelectedAnnotationId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]},required:!0}},{key:"annotationEntries",value:{name:"unknown",required:!0}},{key:"nodes",value:{name:"unknown",required:!0}},{key:"linkedNodeGroups",value:{name:"unknown",required:!0}},{key:"edges",value:{name:"unknown",required:!0}},{key:"infoBoxState",value:{name:"signature",type:"object",raw:`{
  activeAnnotationId: string | null;
}`,signature:{properties:[{key:"activeAnnotationId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]},required:!0}},{key:"settingsState",value:{name:"signature",type:"object",raw:`{
  pointTemporaryMode: boolean;
  elevationReferenceAnnotationId: string | null;
  nextShortLabelCounterByToolType: Readonly<Record<string, number>>;
}`,signature:{properties:[{key:"pointTemporaryMode",value:{name:"boolean",required:!0}},{key:"elevationReferenceAnnotationId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"nextShortLabelCounterByToolType",value:{name:"Readonly",elements:[{name:"Record",elements:[{name:"string"},{name:"number"}],raw:"Record<string, number>"}],raw:"Readonly<Record<string, number>>",required:!0}}]},required:!0}}]}}},required:!0}},{key:"dispatch",value:{name:'ReturnType["dispatch"]',raw:'AnnotationsStore["dispatch"]',required:!0}},{key:"setActiveToolType",value:{name:"signature",type:"function",raw:"(toolId: AnnotationToolId) => void",signature:{arguments:[{type:{name:"AnnotationToolId"},name:"toolId"}],return:{name:"void"}},required:!0}},{key:"drafts",value:{name:"signature",type:"object",raw:`{
  get: (toolId: AnnotationToolId) => AnnotationToolDraftState;
  set: (toolId: AnnotationToolId, draft: AnnotationToolDraftState) => void;
  clear: (toolId: AnnotationToolId) => void;
  subscribe: (toolId: AnnotationToolId, listener: () => void) => () => void;
}`,signature:{properties:[{key:"get",value:{name:"signature",type:"function",raw:"(toolId: AnnotationToolId) => AnnotationToolDraftState",signature:{arguments:[{type:{name:"AnnotationToolId"},name:"toolId"}],return:{name:"signature",type:"object",raw:`{
  coordinates: readonly AnnotationGeographicCoordinate[];
  linkedNodeGroupIds: readonly (AnnotationNodeLinkId | null)[];
  feedback?: {
    kind: "warning";
    message: string;
  } | null;
}`,signature:{properties:[{key:"coordinates",value:{name:"unknown",required:!0}},{key:"linkedNodeGroupIds",value:{name:"unknown",required:!0}},{key:"feedback",value:{name:"union",raw:`{
  kind: "warning";
  message: string;
} | null`,elements:[{name:"signature",type:"object",raw:`{
  kind: "warning";
  message: string;
}`,signature:{properties:[{key:"kind",value:{name:"literal",value:'"warning"',required:!0}},{key:"message",value:{name:"string",required:!0}}]}},{name:"null"}],required:!1}}]},required:!0}},required:!0}},{key:"set",value:{name:"signature",type:"function",raw:"(toolId: AnnotationToolId, draft: AnnotationToolDraftState) => void",signature:{arguments:[{type:{name:"AnnotationToolId"},name:"toolId"},{type:{name:"signature",type:"object",raw:`{
  coordinates: readonly AnnotationGeographicCoordinate[];
  linkedNodeGroupIds: readonly (AnnotationNodeLinkId | null)[];
  feedback?: {
    kind: "warning";
    message: string;
  } | null;
}`,signature:{properties:[{key:"coordinates",value:{name:"unknown",required:!0}},{key:"linkedNodeGroupIds",value:{name:"unknown",required:!0}},{key:"feedback",value:{name:"union",raw:`{
  kind: "warning";
  message: string;
} | null`,elements:[{name:"signature",type:"object",raw:`{
  kind: "warning";
  message: string;
}`,signature:{properties:[{key:"kind",value:{name:"literal",value:'"warning"',required:!0}},{key:"message",value:{name:"string",required:!0}}]}},{name:"null"}],required:!1}}]},required:!0},name:"draft"}],return:{name:"void"}},required:!0}},{key:"clear",value:{name:"signature",type:"function",raw:"(toolId: AnnotationToolId) => void",signature:{arguments:[{type:{name:"AnnotationToolId"},name:"toolId"}],return:{name:"void"}},required:!0}},{key:"subscribe",value:{name:"signature",type:"function",raw:"(toolId: AnnotationToolId, listener: () => void) => () => void",signature:{arguments:[{type:{name:"AnnotationToolId"},name:"toolId"},{type:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},name:"listener"}],return:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}}},required:!0}}]},required:!0}},{key:"requestLabelText",value:{name:"signature",type:"function",raw:`(
  context: AnnotationLabelTextRequestContext
) => string | null | Promise<string | null>`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  coordinate: AnnotationGeographicCoordinate;
  defaultText: string;
  labelTextSuggestions: readonly string[];
  linkedNodeGroupId?: AnnotationNodeLinkId | null;
}`,signature:{properties:[{key:"coordinate",value:{name:"AnnotationGeographicCoordinate",required:!0}},{key:"defaultText",value:{name:"string",required:!0}},{key:"labelTextSuggestions",value:{name:"unknown",required:!0}},{key:"linkedNodeGroupId",value:{name:"union",raw:"AnnotationNodeLinkId | null",elements:[{name:"string"},{name:"null"}],required:!1}}]}},name:"context"}],return:{name:"union",raw:"string | null | Promise<string | null>",elements:[{name:"string"},{name:"null"},{name:"Promise",elements:[{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]}],raw:"Promise<string | null>"}]}},required:!1}},{key:"addAnnotation",value:{name:"signature",type:"function",raw:`(
  annotationType: StoredAnnotation["toolType"],
  coordinates: readonly AnnotationGeographicCoordinate[],
  options?: AddAnnotationOptions,
  linkedNodeGroupIds?: readonly (AnnotationNodeLinkId | null | undefined)[],
  sourceToolId?: AnnotationToolId
) => StoredAnnotation`,signature:{arguments:[{type:{name:"AnnotationType",raw:'StoredAnnotation["toolType"]'},name:"annotationType"},{type:{name:"unknown"},name:"coordinates"},{type:{name:"Pick",elements:[{name:"signature",type:"object",raw:`{
  id: string;
  toolType: AnnotationType;
  nodeIds: readonly string[];
  edgeIds: readonly string[];
  displayName?: string;
  shortLabel?: string;
  shortLabelSource?: AnnotationShortLabelSource;
  shortLabelCounter?: number;
  hidden?: boolean;
  locked?: boolean;
  annotationRole?: AnnotationEntryRole;
  readOnly?: boolean;
  labelAppearance?: AnnotationLabelAppearance;
  elevationDisplayMode?: AnnotationElevationDisplayMode;
  distanceAnchorCoordinateSelection?: RuntimePointLabelCoordinateSelection;
  distanceTriangleAnchorCoordinateRole?: RuntimeDistanceTriangleAnchorCoordinateRole;
  closed?: boolean;
  preferredNormalBearingRad?: number;
  externalCollection?: {
    type: "saved-measurement";
    id: string;
  };
  /** Identity across machines and shares; the runtime id only counts per session. */
  uuid?: string;
  /** ISO time of the last content change, stamped by the persistence on save. */
  updatedAt?: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"toolType",value:{name:"AnnotationType",required:!0}},{key:"nodeIds",value:{name:"unknown",required:!0}},{key:"edgeIds",value:{name:"unknown",required:!0}},{key:"displayName",value:{name:"string",required:!1}},{key:"shortLabel",value:{name:"string",required:!1}},{key:"shortLabelSource",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_SHORT_LABEL_SOURCES)[keyof typeof ANNOTATION_SHORT_LABEL_SOURCES]",required:!1}},{key:"shortLabelCounter",value:{name:"number",required:!1}},{key:"hidden",value:{name:"boolean",required:!1}},{key:"locked",value:{name:"boolean",required:!1}},{key:"annotationRole",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_ENTRY_ROLES)[keyof typeof ANNOTATION_ENTRY_ROLES]",required:!1}},{key:"readOnly",value:{name:"boolean",required:!1}},{key:"labelAppearance",value:{name:"AnnotationLabelAppearance",required:!1}},{key:"elevationDisplayMode",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_ELEVATION_DISPLAY_MODES)[keyof typeof ANNOTATION_ELEVATION_DISPLAY_MODES]",required:!1}},{key:"distanceAnchorCoordinateSelection",value:{name:"unknown[union]",raw:"(typeof RUNTIME_POINT_LABEL_COORDINATE_SELECTION)[keyof typeof RUNTIME_POINT_LABEL_COORDINATE_SELECTION]",required:!1}},{key:"distanceTriangleAnchorCoordinateRole",value:{name:"unknown[union]",raw:"(typeof RUNTIME_DISTANCE_TRIANGLE_ANCHOR_COORDINATE_ROLE)[keyof typeof RUNTIME_DISTANCE_TRIANGLE_ANCHOR_COORDINATE_ROLE]",required:!1}},{key:"closed",value:{name:"boolean",required:!1}},{key:"preferredNormalBearingRad",value:{name:"number",required:!1}},{key:"externalCollection",value:{name:"signature",type:"object",raw:`{
  type: "saved-measurement";
  id: string;
}`,signature:{properties:[{key:"type",value:{name:"literal",value:'"saved-measurement"',required:!0}},{key:"id",value:{name:"string",required:!0}}]},required:!1}},{key:"uuid",value:{name:"string",required:!1},description:"Identity across machines and shares; the runtime id only counts per session."},{key:"updatedAt",value:{name:"string",required:!1},description:"ISO time of the last content change, stamped by the persistence on save."}]},required:!0},{name:"union",raw:`| "closed"
| "preferredNormalBearingRad"
| "displayName"
| "shortLabel"
| "shortLabelSource"
| "shortLabelCounter"
| "hidden"
| "locked"
| "labelAppearance"
| "elevationDisplayMode"
| "distanceAnchorCoordinateSelection"
| "distanceTriangleAnchorCoordinateRole"`,elements:[{name:"literal",value:'"closed"'},{name:"literal",value:'"preferredNormalBearingRad"'},{name:"literal",value:'"displayName"'},{name:"literal",value:'"shortLabel"'},{name:"literal",value:'"shortLabelSource"'},{name:"literal",value:'"shortLabelCounter"'},{name:"literal",value:'"hidden"'},{name:"literal",value:'"locked"'},{name:"literal",value:'"labelAppearance"'},{name:"literal",value:'"elevationDisplayMode"'},{name:"literal",value:'"distanceAnchorCoordinateSelection"'},{name:"literal",value:'"distanceTriangleAnchorCoordinateRole"'}]}],raw:`Pick<
  StoredAnnotation,
  | "closed"
  | "preferredNormalBearingRad"
  | "displayName"
  | "shortLabel"
  | "shortLabelSource"
  | "shortLabelCounter"
  | "hidden"
  | "locked"
  | "labelAppearance"
  | "elevationDisplayMode"
  | "distanceAnchorCoordinateSelection"
  | "distanceTriangleAnchorCoordinateRole"
>`,required:!1},name:"options"},{type:{name:"unknown"},name:"linkedNodeGroupIds"},{type:{name:"AnnotationToolId"},name:"sourceToolId"}],return:{name:"signature",type:"object",raw:`{
  id: string;
  toolType: AnnotationType;
  nodeIds: readonly string[];
  edgeIds: readonly string[];
  displayName?: string;
  shortLabel?: string;
  shortLabelSource?: AnnotationShortLabelSource;
  shortLabelCounter?: number;
  hidden?: boolean;
  locked?: boolean;
  annotationRole?: AnnotationEntryRole;
  readOnly?: boolean;
  labelAppearance?: AnnotationLabelAppearance;
  elevationDisplayMode?: AnnotationElevationDisplayMode;
  distanceAnchorCoordinateSelection?: RuntimePointLabelCoordinateSelection;
  distanceTriangleAnchorCoordinateRole?: RuntimeDistanceTriangleAnchorCoordinateRole;
  closed?: boolean;
  preferredNormalBearingRad?: number;
  externalCollection?: {
    type: "saved-measurement";
    id: string;
  };
  /** Identity across machines and shares; the runtime id only counts per session. */
  uuid?: string;
  /** ISO time of the last content change, stamped by the persistence on save. */
  updatedAt?: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"toolType",value:{name:"AnnotationType",required:!0}},{key:"nodeIds",value:{name:"unknown",required:!0}},{key:"edgeIds",value:{name:"unknown",required:!0}},{key:"displayName",value:{name:"string",required:!1}},{key:"shortLabel",value:{name:"string",required:!1}},{key:"shortLabelSource",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_SHORT_LABEL_SOURCES)[keyof typeof ANNOTATION_SHORT_LABEL_SOURCES]",required:!1}},{key:"shortLabelCounter",value:{name:"number",required:!1}},{key:"hidden",value:{name:"boolean",required:!1}},{key:"locked",value:{name:"boolean",required:!1}},{key:"annotationRole",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_ENTRY_ROLES)[keyof typeof ANNOTATION_ENTRY_ROLES]",required:!1}},{key:"readOnly",value:{name:"boolean",required:!1}},{key:"labelAppearance",value:{name:"AnnotationLabelAppearance",required:!1}},{key:"elevationDisplayMode",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_ELEVATION_DISPLAY_MODES)[keyof typeof ANNOTATION_ELEVATION_DISPLAY_MODES]",required:!1}},{key:"distanceAnchorCoordinateSelection",value:{name:"unknown[union]",raw:"(typeof RUNTIME_POINT_LABEL_COORDINATE_SELECTION)[keyof typeof RUNTIME_POINT_LABEL_COORDINATE_SELECTION]",required:!1}},{key:"distanceTriangleAnchorCoordinateRole",value:{name:"unknown[union]",raw:"(typeof RUNTIME_DISTANCE_TRIANGLE_ANCHOR_COORDINATE_ROLE)[keyof typeof RUNTIME_DISTANCE_TRIANGLE_ANCHOR_COORDINATE_ROLE]",required:!1}},{key:"closed",value:{name:"boolean",required:!1}},{key:"preferredNormalBearingRad",value:{name:"number",required:!1}},{key:"externalCollection",value:{name:"signature",type:"object",raw:`{
  type: "saved-measurement";
  id: string;
}`,signature:{properties:[{key:"type",value:{name:"literal",value:'"saved-measurement"',required:!0}},{key:"id",value:{name:"string",required:!0}}]},required:!1}},{key:"uuid",value:{name:"string",required:!1},description:"Identity across machines and shares; the runtime id only counts per session."},{key:"updatedAt",value:{name:"string",required:!1},description:"ISO time of the last content change, stamped by the persistence on save."}]},required:!0}},required:!0}}]},required:!0}}]}},name:"context"}],return:{name:"boolean"}},required:!0}}]},required:!1}},{key:"visualModels",value:{name:"signature",type:"object",raw:`{
  build: (
    context: AnnotationToolVisualModelContext
  ) => RuntimeVisualModels | null;
}`,signature:{properties:[{key:"build",value:{name:"signature",type:"function",raw:`(
  context: AnnotationToolVisualModelContext
) => RuntimeVisualModels | null`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  nodes: readonly AnnotationNode[];
  edges: readonly AnnotationEdge[];
  linkedNodeGroups: readonly AnnotationNodeLink[];
  annotationEntries: readonly StoredAnnotation[];
  draftStatesByToolType: Readonly<
    Partial<Record<AnnotationToolId, AnnotationToolDraftState>>
  >;
  elevationReferenceAnnotationId: string | null;
  selectedAnnotationId: string | null;
  selectedAnnotationIds: readonly string[];
  isSelectionAdditiveModifierPressed: boolean;
  setSelectedAnnotationId: (annotationId: string | null) => void;
  setElevationReferenceAnnotationId: (annotationId: string | null) => void;
  toggleAnnotationElevationDisplayMode: (
    annotationId: string,
    currentElevationDisplayMode?: AnnotationElevationDisplayMode
  ) => void;
  onNodeLongPress?: (nodeId: string, annotationId: string) => void;
  formatOptions: AnnotationsRuntimeFormatOptions;
}`,signature:{properties:[{key:"nodes",value:{name:"unknown",required:!0}},{key:"edges",value:{name:"unknown",required:!0}},{key:"linkedNodeGroups",value:{name:"unknown",required:!0}},{key:"annotationEntries",value:{name:"unknown",required:!0}},{key:"draftStatesByToolType",value:{name:"Readonly",elements:[{name:"Partial",elements:[{name:"Record",elements:[{name:"AnnotationToolId"},{name:"signature",type:"object",raw:`{
  coordinates: readonly AnnotationGeographicCoordinate[];
  linkedNodeGroupIds: readonly (AnnotationNodeLinkId | null)[];
  feedback?: {
    kind: "warning";
    message: string;
  } | null;
}`,signature:{properties:[{key:"coordinates",value:{name:"unknown",required:!0}},{key:"linkedNodeGroupIds",value:{name:"unknown",required:!0}},{key:"feedback",value:{name:"union",raw:`{
  kind: "warning";
  message: string;
} | null`,elements:[{name:"signature",type:"object",raw:`{
  kind: "warning";
  message: string;
}`,signature:{properties:[{key:"kind",value:{name:"literal",value:'"warning"',required:!0}},{key:"message",value:{name:"string",required:!0}}]}},{name:"null"}],required:!1}}]},required:!0}],raw:"Record<AnnotationToolId, AnnotationToolDraftState>"}],raw:"Partial<Record<AnnotationToolId, AnnotationToolDraftState>>"}],raw:`Readonly<
  Partial<Record<AnnotationToolId, AnnotationToolDraftState>>
>`,required:!0}},{key:"elevationReferenceAnnotationId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"selectedAnnotationId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"selectedAnnotationIds",value:{name:"unknown",required:!0}},{key:"isSelectionAdditiveModifierPressed",value:{name:"boolean",required:!0}},{key:"setSelectedAnnotationId",value:{name:"signature",type:"function",raw:"(annotationId: string | null) => void",signature:{arguments:[{type:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},name:"annotationId"}],return:{name:"void"}},required:!0}},{key:"setElevationReferenceAnnotationId",value:{name:"signature",type:"function",raw:"(annotationId: string | null) => void",signature:{arguments:[{type:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},name:"annotationId"}],return:{name:"void"}},required:!0}},{key:"toggleAnnotationElevationDisplayMode",value:{name:"signature",type:"function",raw:`(
  annotationId: string,
  currentElevationDisplayMode?: AnnotationElevationDisplayMode
) => void`,signature:{arguments:[{type:{name:"string"},name:"annotationId"},{type:{name:"unknown[union]",raw:"(typeof ANNOTATION_ELEVATION_DISPLAY_MODES)[keyof typeof ANNOTATION_ELEVATION_DISPLAY_MODES]",required:!1},name:"currentElevationDisplayMode"}],return:{name:"void"}},required:!0}},{key:"onNodeLongPress",value:{name:"signature",type:"function",raw:"(nodeId: string, annotationId: string) => void",signature:{arguments:[{type:{name:"string"},name:"nodeId"},{type:{name:"string"},name:"annotationId"}],return:{name:"void"}},required:!1}},{key:"formatOptions",value:{name:"signature",type:"object",raw:`{
  lengthMeters?: FormatLengthMetersOptions;
  areaSquareMeters?: FormatAreaSquareMetersAdaptiveOptions;
  degrees?: FormatDegreesOptions;
  geographicCoordinate?: GeographicCoordinateFormatOptions;
  decimalNumber?: FormatDecimalNumberOptions;
}`,signature:{properties:[{key:"lengthMeters",value:{name:"FormatLengthMetersOptions",required:!1}},{key:"areaSquareMeters",value:{name:"FormatAreaSquareMetersAdaptiveOptions",required:!1}},{key:"degrees",value:{name:"FormatDegreesOptions",required:!1}},{key:"geographicCoordinate",value:{name:"GeographicCoordinateFormatOptions",required:!1}},{key:"decimalNumber",value:{name:"FormatDecimalNumberOptions",required:!1}}]},required:!0}}]}},name:"context"}],return:{name:"union",raw:"RuntimeVisualModels | null",elements:[{name:"signature",type:"object",raw:`{
  points?: readonly RuntimePointMarkerRenderModel[];
  edges?: readonly RuntimeEdgeRenderModel[];
  polygonFills?: readonly RuntimePolygonFillRenderModel[];
  pointLabels?: readonly RuntimePointLabelRenderModel[];
}`,signature:{properties:[{key:"points",value:{name:"unknown",required:!1}},{key:"edges",value:{name:"unknown",required:!1}},{key:"polygonFills",value:{name:"unknown",required:!1}},{key:"pointLabels",value:{name:"unknown",required:!1}}]}},{name:"null"}]}},required:!0}}]},required:!1}},{key:"infoBox",value:{name:"signature",type:"object",raw:`{
  getSlots: (
    context: RuntimeAnnotationInfoBoxContext
  ) => AnnotationInfoBoxSlots | null;
}`,signature:{properties:[{key:"getSlots",value:{name:"signature",type:"function",raw:`(
  context: RuntimeAnnotationInfoBoxContext
) => AnnotationInfoBoxSlots | null`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  annotation: StoredAnnotation;
  annotationEntries: readonly StoredAnnotation[];
  nodes: readonly AnnotationNode[];
  selectedAnnotationId: string;
  setSelectedAnnotationId: (annotationId: string | null) => void;
  focusAnnotationId: (annotationId: string | null) => void;
  flyToAllAnnotations: () => void;
  removeAnnotationById: (
    annotationId: string,
    options?: AnnotationDeleteRequestOptions
  ) => void;
  exportAnnotationGeoJson: (annotationId: string) => void;
  toggleAnnotationVisibility: (annotationId: string) => void;
  toggleAnnotationLocked: (annotationId: string) => void;
  elevationReferenceAnnotationId: string | null;
  setElevationReferenceAnnotationId: (annotationId: string | null) => void;
  updateAnnotationDisplayName: (
    annotationId: string,
    displayName: string
  ) => void;
  updateAnnotationShortLabel: (
    annotationId: string,
    shortLabel: string
  ) => void;
  formatOptions: AnnotationsRuntimeFormatOptions;
  infoBoxVisualOptions: AnnotationInfoBoxVisualOptions;
}`,signature:{properties:[{key:"annotation",value:{name:"signature",type:"object",raw:`{
  id: string;
  toolType: AnnotationType;
  nodeIds: readonly string[];
  edgeIds: readonly string[];
  displayName?: string;
  shortLabel?: string;
  shortLabelSource?: AnnotationShortLabelSource;
  shortLabelCounter?: number;
  hidden?: boolean;
  locked?: boolean;
  annotationRole?: AnnotationEntryRole;
  readOnly?: boolean;
  labelAppearance?: AnnotationLabelAppearance;
  elevationDisplayMode?: AnnotationElevationDisplayMode;
  distanceAnchorCoordinateSelection?: RuntimePointLabelCoordinateSelection;
  distanceTriangleAnchorCoordinateRole?: RuntimeDistanceTriangleAnchorCoordinateRole;
  closed?: boolean;
  preferredNormalBearingRad?: number;
  externalCollection?: {
    type: "saved-measurement";
    id: string;
  };
  /** Identity across machines and shares; the runtime id only counts per session. */
  uuid?: string;
  /** ISO time of the last content change, stamped by the persistence on save. */
  updatedAt?: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"toolType",value:{name:"AnnotationType",required:!0}},{key:"nodeIds",value:{name:"unknown",required:!0}},{key:"edgeIds",value:{name:"unknown",required:!0}},{key:"displayName",value:{name:"string",required:!1}},{key:"shortLabel",value:{name:"string",required:!1}},{key:"shortLabelSource",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_SHORT_LABEL_SOURCES)[keyof typeof ANNOTATION_SHORT_LABEL_SOURCES]",required:!1}},{key:"shortLabelCounter",value:{name:"number",required:!1}},{key:"hidden",value:{name:"boolean",required:!1}},{key:"locked",value:{name:"boolean",required:!1}},{key:"annotationRole",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_ENTRY_ROLES)[keyof typeof ANNOTATION_ENTRY_ROLES]",required:!1}},{key:"readOnly",value:{name:"boolean",required:!1}},{key:"labelAppearance",value:{name:"AnnotationLabelAppearance",required:!1}},{key:"elevationDisplayMode",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_ELEVATION_DISPLAY_MODES)[keyof typeof ANNOTATION_ELEVATION_DISPLAY_MODES]",required:!1}},{key:"distanceAnchorCoordinateSelection",value:{name:"unknown[union]",raw:"(typeof RUNTIME_POINT_LABEL_COORDINATE_SELECTION)[keyof typeof RUNTIME_POINT_LABEL_COORDINATE_SELECTION]",required:!1}},{key:"distanceTriangleAnchorCoordinateRole",value:{name:"unknown[union]",raw:"(typeof RUNTIME_DISTANCE_TRIANGLE_ANCHOR_COORDINATE_ROLE)[keyof typeof RUNTIME_DISTANCE_TRIANGLE_ANCHOR_COORDINATE_ROLE]",required:!1}},{key:"closed",value:{name:"boolean",required:!1}},{key:"preferredNormalBearingRad",value:{name:"number",required:!1}},{key:"externalCollection",value:{name:"signature",type:"object",raw:`{
  type: "saved-measurement";
  id: string;
}`,signature:{properties:[{key:"type",value:{name:"literal",value:'"saved-measurement"',required:!0}},{key:"id",value:{name:"string",required:!0}}]},required:!1}},{key:"uuid",value:{name:"string",required:!1},description:"Identity across machines and shares; the runtime id only counts per session."},{key:"updatedAt",value:{name:"string",required:!1},description:"ISO time of the last content change, stamped by the persistence on save."}]},required:!0}},{key:"annotationEntries",value:{name:"unknown",required:!0}},{key:"nodes",value:{name:"unknown",required:!0}},{key:"selectedAnnotationId",value:{name:"string",required:!0}},{key:"setSelectedAnnotationId",value:{name:"signature",type:"function",raw:"(annotationId: string | null) => void",signature:{arguments:[{type:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},name:"annotationId"}],return:{name:"void"}},required:!0}},{key:"focusAnnotationId",value:{name:"signature",type:"function",raw:"(annotationId: string | null) => void",signature:{arguments:[{type:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},name:"annotationId"}],return:{name:"void"}},required:!0}},{key:"flyToAllAnnotations",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}},{key:"removeAnnotationById",value:{name:"signature",type:"function",raw:`(
  annotationId: string,
  options?: AnnotationDeleteRequestOptions
) => void`,signature:{arguments:[{type:{name:"string"},name:"annotationId"},{type:{name:"signature",type:"object",raw:`{
  skipConfirmation?: boolean;
  source?: AnnotationDeleteConfirmationSource;
}`,signature:{properties:[{key:"skipConfirmation",value:{name:"boolean",required:!1}},{key:"source",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_DELETE_CONFIRMATION_SOURCES)[keyof typeof ANNOTATION_DELETE_CONFIRMATION_SOURCES]",required:!1}}]}},name:"options"}],return:{name:"void"}},required:!0}},{key:"exportAnnotationGeoJson",value:{name:"signature",type:"function",raw:"(annotationId: string) => void",signature:{arguments:[{type:{name:"string"},name:"annotationId"}],return:{name:"void"}},required:!0}},{key:"toggleAnnotationVisibility",value:{name:"signature",type:"function",raw:"(annotationId: string) => void",signature:{arguments:[{type:{name:"string"},name:"annotationId"}],return:{name:"void"}},required:!0}},{key:"toggleAnnotationLocked",value:{name:"signature",type:"function",raw:"(annotationId: string) => void",signature:{arguments:[{type:{name:"string"},name:"annotationId"}],return:{name:"void"}},required:!0}},{key:"elevationReferenceAnnotationId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"setElevationReferenceAnnotationId",value:{name:"signature",type:"function",raw:"(annotationId: string | null) => void",signature:{arguments:[{type:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},name:"annotationId"}],return:{name:"void"}},required:!0}},{key:"updateAnnotationDisplayName",value:{name:"signature",type:"function",raw:`(
  annotationId: string,
  displayName: string
) => void`,signature:{arguments:[{type:{name:"string"},name:"annotationId"},{type:{name:"string"},name:"displayName"}],return:{name:"void"}},required:!0}},{key:"updateAnnotationShortLabel",value:{name:"signature",type:"function",raw:`(
  annotationId: string,
  shortLabel: string
) => void`,signature:{arguments:[{type:{name:"string"},name:"annotationId"},{type:{name:"string"},name:"shortLabel"}],return:{name:"void"}},required:!0}},{key:"formatOptions",value:{name:"signature",type:"object",raw:`{
  lengthMeters?: FormatLengthMetersOptions;
  areaSquareMeters?: FormatAreaSquareMetersAdaptiveOptions;
  degrees?: FormatDegreesOptions;
  geographicCoordinate?: GeographicCoordinateFormatOptions;
  decimalNumber?: FormatDecimalNumberOptions;
}`,signature:{properties:[{key:"lengthMeters",value:{name:"FormatLengthMetersOptions",required:!1}},{key:"areaSquareMeters",value:{name:"FormatAreaSquareMetersAdaptiveOptions",required:!1}},{key:"degrees",value:{name:"FormatDegreesOptions",required:!1}},{key:"geographicCoordinate",value:{name:"GeographicCoordinateFormatOptions",required:!1}},{key:"decimalNumber",value:{name:"FormatDecimalNumberOptions",required:!1}}]},required:!0}},{key:"infoBoxVisualOptions",value:{name:"AnnotationInfoBoxVisualOptions",required:!0}}]}},name:"context"}],return:{name:"union",raw:"AnnotationInfoBoxSlots | null",elements:[{name:"AnnotationInfoBoxSlots"},{name:"null"}]}},required:!0}}]},required:!1}}]}}},required:!0}},{key:"getPluginsByAnnotationType",value:{name:"signature",type:"function",raw:`(
  annotationType: StoredAnnotation["toolType"]
) => readonly AnnotationToolPlugin[]`,signature:{arguments:[{type:{name:"AnnotationType",raw:'StoredAnnotation["toolType"]'},name:"annotationType"}],return:{name:"unknown"}},required:!0}}]}},description:""},annotationsStore:{required:!0,tsType:{name:"ReturnType",elements:[{name:"createAnnotationsStore"}],raw:"ReturnType<typeof createAnnotationsStore>"},description:""},annotationToolDraftStore:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  get: (toolId: AnnotationToolId) => AnnotationToolDraftState;
  set: (toolId: AnnotationToolId, draft: AnnotationToolDraftState) => void;
  clear: (toolId: AnnotationToolId) => void;
  subscribe: (toolId: AnnotationToolId, listener: () => void) => () => void;
}`,signature:{properties:[{key:"get",value:{name:"signature",type:"function",raw:"(toolId: AnnotationToolId) => AnnotationToolDraftState",signature:{arguments:[{type:{name:"AnnotationToolId"},name:"toolId"}],return:{name:"signature",type:"object",raw:`{
  coordinates: readonly AnnotationGeographicCoordinate[];
  linkedNodeGroupIds: readonly (AnnotationNodeLinkId | null)[];
  feedback?: {
    kind: "warning";
    message: string;
  } | null;
}`,signature:{properties:[{key:"coordinates",value:{name:"unknown",required:!0}},{key:"linkedNodeGroupIds",value:{name:"unknown",required:!0}},{key:"feedback",value:{name:"union",raw:`{
  kind: "warning";
  message: string;
} | null`,elements:[{name:"signature",type:"object",raw:`{
  kind: "warning";
  message: string;
}`,signature:{properties:[{key:"kind",value:{name:"literal",value:'"warning"',required:!0}},{key:"message",value:{name:"string",required:!0}}]}},{name:"null"}],required:!1}}]}}},required:!0}},{key:"set",value:{name:"signature",type:"function",raw:"(toolId: AnnotationToolId, draft: AnnotationToolDraftState) => void",signature:{arguments:[{type:{name:"AnnotationToolId"},name:"toolId"},{type:{name:"signature",type:"object",raw:`{
  coordinates: readonly AnnotationGeographicCoordinate[];
  linkedNodeGroupIds: readonly (AnnotationNodeLinkId | null)[];
  feedback?: {
    kind: "warning";
    message: string;
  } | null;
}`,signature:{properties:[{key:"coordinates",value:{name:"unknown",required:!0}},{key:"linkedNodeGroupIds",value:{name:"unknown",required:!0}},{key:"feedback",value:{name:"union",raw:`{
  kind: "warning";
  message: string;
} | null`,elements:[{name:"signature",type:"object",raw:`{
  kind: "warning";
  message: string;
}`,signature:{properties:[{key:"kind",value:{name:"literal",value:'"warning"',required:!0}},{key:"message",value:{name:"string",required:!0}}]}},{name:"null"}],required:!1}}]}},name:"draft"}],return:{name:"void"}},required:!0}},{key:"clear",value:{name:"signature",type:"function",raw:"(toolId: AnnotationToolId) => void",signature:{arguments:[{type:{name:"AnnotationToolId"},name:"toolId"}],return:{name:"void"}},required:!0}},{key:"subscribe",value:{name:"signature",type:"function",raw:"(toolId: AnnotationToolId, listener: () => void) => () => void",signature:{arguments:[{type:{name:"AnnotationToolId"},name:"toolId"},{type:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},name:"listener"}],return:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}}},required:!0}}]}},description:""},setElevationReferenceAnnotationId:{required:!0,tsType:{name:"signature",type:"function",raw:"(annotationId: string | null) => void",signature:{arguments:[{type:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},name:"annotationId"}],return:{name:"void"}}},description:""},toggleAnnotationElevationDisplayMode:{required:!0,tsType:{name:"signature",type:"function",raw:`(
  annotationId: string,
  currentElevationDisplayMode?: AnnotationElevationDisplayMode
) => void`,signature:{arguments:[{type:{name:"string"},name:"annotationId"},{type:{name:"unknown[union]",raw:"(typeof ANNOTATION_ELEVATION_DISPLAY_MODES)[keyof typeof ANNOTATION_ELEVATION_DISPLAY_MODES]"},name:"currentElevationDisplayMode"}],return:{name:"void"}}},description:""},onActiveEditedNodeIdChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(nodeId: string | null) => void",signature:{arguments:[{type:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},name:"nodeId"}],return:{name:"void"}}},description:""},onHoveredPointQueryNodeIdChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(nodeId: string | null) => void",signature:{arguments:[{type:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},name:"nodeId"}],return:{name:"void"}}},description:""},onPreviewSnapTargetNodeClick:{required:!0,tsType:{name:"signature",type:"function",raw:"(nodeId: string) => boolean",signature:{arguments:[{type:{name:"string"},name:"nodeId"}],return:{name:"boolean"}}},description:""},activeEditedNodeId:{required:!0,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},formatOptions:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  lengthMeters?: FormatLengthMetersOptions;
  areaSquareMeters?: FormatAreaSquareMetersAdaptiveOptions;
  degrees?: FormatDegreesOptions;
  geographicCoordinate?: GeographicCoordinateFormatOptions;
  decimalNumber?: FormatDecimalNumberOptions;
}`,signature:{properties:[{key:"lengthMeters",value:{name:"FormatLengthMetersOptions",required:!1}},{key:"areaSquareMeters",value:{name:"FormatAreaSquareMetersAdaptiveOptions",required:!1}},{key:"degrees",value:{name:"FormatDegreesOptions",required:!1}},{key:"geographicCoordinate",value:{name:"GeographicCoordinateFormatOptions",required:!1}},{key:"decimalNumber",value:{name:"FormatDecimalNumberOptions",required:!1}}]}},description:""},lineLabelOptions:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  appearance?: Partial<AnnotationLineLabelAppearanceOptions>;
  text?: Partial<
    Omit<AnnotationLineLabelTextOptions, "echo"> & {
      echo?: Partial<AnnotationLineLabelTextEchoOptions>;
    }
  >;
  background?: Partial<AnnotationLineLabelBackgroundOptions>;
  surface?: Partial<AnnotationLineLabelSurfaceOptions>;
  layout?: Partial<AnnotationLineLabelLayoutOptions>;
  collision?: Partial<AnnotationLineLabelCollisionOptions>;
}`,signature:{properties:[{key:"appearance",value:{name:"Partial",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  themeStyle: AnnotationThemeStyle;
}`,signature:{properties:[{key:"themeStyle",value:{name:"unknown[unknown]",raw:"(typeof ANNOTATION_THEME.style)[keyof typeof ANNOTATION_THEME.style]",required:!0}}]}}],raw:`Readonly<{
  themeStyle: AnnotationThemeStyle;
}>`}],raw:"Partial<AnnotationLineLabelAppearanceOptions>",required:!1}},{key:"text",value:{name:"Partial",elements:[{name:"intersection",raw:`Omit<AnnotationLineLabelTextOptions, "echo"> & {
  echo?: Partial<AnnotationLineLabelTextEchoOptions>;
}`,elements:[{name:"Omit",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fontFamily: string;
  fontWeight: string | number;
  color?: string;
  blendMode?: CssMixBlendMode;
  echo?: AnnotationLineLabelTextEchoOptions;
}`,signature:{properties:[{key:"fontFamily",value:{name:"string",required:!0}},{key:"fontWeight",value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!0}},{key:"color",value:{name:"string",required:!1}},{key:"blendMode",value:{name:"CssMixBlendMode",required:!1}},{key:"echo",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  color?: string;
  blurPx?: number;
  opacity?: number;
  blendMode?: CssMixBlendMode;
}`,signature:{properties:[{key:"color",value:{name:"string",required:!1}},{key:"blurPx",value:{name:"number",required:!1}},{key:"opacity",value:{name:"number",required:!1}},{key:"blendMode",value:{name:"CssMixBlendMode",required:!1}}]}}],raw:`Readonly<{
  color?: string;
  blurPx?: number;
  opacity?: number;
  blendMode?: CssMixBlendMode;
}>`,required:!1}}]}}],raw:`Readonly<{
  fontFamily: string;
  fontWeight: string | number;
  color?: string;
  blendMode?: CssMixBlendMode;
  echo?: AnnotationLineLabelTextEchoOptions;
}>`},{name:"literal",value:'"echo"'}],raw:'Omit<AnnotationLineLabelTextOptions, "echo">'},{name:"signature",type:"object",raw:`{
  echo?: Partial<AnnotationLineLabelTextEchoOptions>;
}`,signature:{properties:[{key:"echo",value:{name:"Partial",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  color?: string;
  blurPx?: number;
  opacity?: number;
  blendMode?: CssMixBlendMode;
}`,signature:{properties:[{key:"color",value:{name:"string",required:!1}},{key:"blurPx",value:{name:"number",required:!1}},{key:"opacity",value:{name:"number",required:!1}},{key:"blendMode",value:{name:"CssMixBlendMode",required:!1}}]}}],raw:`Readonly<{
  color?: string;
  blurPx?: number;
  opacity?: number;
  blendMode?: CssMixBlendMode;
}>`,required:!1}],raw:"Partial<AnnotationLineLabelTextEchoOptions>",required:!1}}]}}]}],raw:`Partial<
  Omit<AnnotationLineLabelTextOptions, "echo"> & {
    echo?: Partial<AnnotationLineLabelTextEchoOptions>;
  }
>`,required:!1}},{key:"background",value:{name:"Partial",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  style: AnnotationLineLabelBackgroundStyle;
  showBackdrop?: boolean;
  color?: string;
  blendMode?: CssMixBlendMode;
  blurPx?: number;
  brightnessPct?: number;
  saturatePct?: number;
  surfaceAlpha?: number;
  radiusEx?: number;
  edgeBlurPx?: number;
  insetBlockEx?: number;
  insetInlineEx?: number;
}`,signature:{properties:[{key:"style",value:{name:"unknown[unknown]",raw:"(typeof ANNOTATION_THEME.lineLabel.backgroundStyle)[keyof typeof ANNOTATION_THEME.lineLabel.backgroundStyle]",required:!0}},{key:"showBackdrop",value:{name:"boolean",required:!1}},{key:"color",value:{name:"string",required:!1}},{key:"blendMode",value:{name:"CssMixBlendMode",required:!1}},{key:"blurPx",value:{name:"number",required:!1}},{key:"brightnessPct",value:{name:"number",required:!1}},{key:"saturatePct",value:{name:"number",required:!1}},{key:"surfaceAlpha",value:{name:"number",required:!1}},{key:"radiusEx",value:{name:"number",required:!1}},{key:"edgeBlurPx",value:{name:"number",required:!1}},{key:"insetBlockEx",value:{name:"number",required:!1}},{key:"insetInlineEx",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  style: AnnotationLineLabelBackgroundStyle;
  showBackdrop?: boolean;
  color?: string;
  blendMode?: CssMixBlendMode;
  blurPx?: number;
  brightnessPct?: number;
  saturatePct?: number;
  surfaceAlpha?: number;
  radiusEx?: number;
  edgeBlurPx?: number;
  insetBlockEx?: number;
  insetInlineEx?: number;
}>`}],raw:"Partial<AnnotationLineLabelBackgroundOptions>",required:!1}},{key:"surface",value:{name:"Partial",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  blendMode?: CssMixBlendMode;
  paddingBlockEx?: number;
  paddingInlineEx?: number;
}`,signature:{properties:[{key:"blendMode",value:{name:"CssMixBlendMode",required:!1}},{key:"paddingBlockEx",value:{name:"number",required:!1}},{key:"paddingInlineEx",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  blendMode?: CssMixBlendMode;
  paddingBlockEx?: number;
  paddingInlineEx?: number;
}>`}],raw:"Partial<AnnotationLineLabelSurfaceOptions>",required:!1}},{key:"layout",value:{name:"Partial",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  shortEdgeOffsetPx: number;
}`,signature:{properties:[{key:"shortEdgeOffsetPx",value:{name:"number",required:!0}}]}}],raw:`Readonly<{
  shortEdgeOffsetPx: number;
}>`}],raw:"Partial<AnnotationLineLabelLayoutOptions>",required:!1}},{key:"collision",value:{name:"Partial",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  allowEarlyRemoval: boolean;
  resolutionStrategy: AnnotationLineLabelCollisionResolutionStrategy;
  anchorSlideStepRatio: number;
  maxAnchorSlideDeltaRatio: number;
}`,signature:{properties:[{key:"allowEarlyRemoval",value:{name:"boolean",required:!0}},{key:"resolutionStrategy",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_LINE_LABEL_COLLISION_RESOLUTION_STRATEGY)[keyof typeof ANNOTATION_LINE_LABEL_COLLISION_RESOLUTION_STRATEGY]",required:!0}},{key:"anchorSlideStepRatio",value:{name:"number",required:!0}},{key:"maxAnchorSlideDeltaRatio",value:{name:"number",required:!0}}]}}],raw:`Readonly<{
  allowEarlyRemoval: boolean;
  resolutionStrategy: AnnotationLineLabelCollisionResolutionStrategy;
  anchorSlideStepRatio: number;
  maxAnchorSlideDeltaRatio: number;
}>`}],raw:"Partial<AnnotationLineLabelCollisionOptions>",required:!1}}]}}],raw:`Readonly<{
  appearance?: Partial<AnnotationLineLabelAppearanceOptions>;
  text?: Partial<
    Omit<AnnotationLineLabelTextOptions, "echo"> & {
      echo?: Partial<AnnotationLineLabelTextEchoOptions>;
    }
  >;
  background?: Partial<AnnotationLineLabelBackgroundOptions>;
  surface?: Partial<AnnotationLineLabelSurfaceOptions>;
  layout?: Partial<AnnotationLineLabelLayoutOptions>;
  collision?: Partial<AnnotationLineLabelCollisionOptions>;
}>`},description:""},referenceObjectSizing:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  scalingMode: ReferenceObjectScalingMode;
  worldRadiusMeters: number;
  targetScreenRadiusCssPx: number;
  resizeWorldRadiusToScreenTarget: boolean;
  resizeStepFactor: number;
  quantizeWorldRadius: boolean;
}`,signature:{properties:[{key:"scalingMode",value:{name:"ReferenceObjectScalingMode",required:!0}},{key:"worldRadiusMeters",value:{name:"number",required:!0}},{key:"targetScreenRadiusCssPx",value:{name:"number",required:!0}},{key:"resizeWorldRadiusToScreenTarget",value:{name:"boolean",required:!0}},{key:"resizeStepFactor",value:{name:"number",required:!0}},{key:"quantizeWorldRadius",value:{name:"boolean",required:!0}}]}},description:""},visualInteractionEnabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},visualAnnotationEntryRoles:{required:!1,tsType:{name:"unknown"},description:""}}};const $I=(e,n)=>{var t,o;return n?((t=e.externalCollection)==null?void 0:t.type)===n.type&&((o=e.externalCollection)==null?void 0:o.id)===n.id:e.externalCollection===void 0},WI=(e,n,t)=>{const o=new Set(n.nodeIds),r=new Set(n.edgeIds);return{nodes:e.nodes.filter(a=>o.has(a.id)).map(a=>({...a,id:t(a.id)})),edges:e.edges.filter(a=>r.has(a.id)).map(a=>({...a,id:t(a.id),startNodeId:t(a.startNodeId),endNodeId:t(a.endNodeId)})),linkedNodeGroups:e.linkedNodeGroups.filter(a=>a.nodeIds.some(i=>o.has(i))).map(a=>({...a,id:t(a.id),nodeIds:a.nodeIds.filter(i=>o.has(i)).map(t)}))}},YI=(e,n,t={})=>{const{annotationEntries:o,nodes:r}=e.getState(),a=new Set(o.map(({id:d})=>d)),i=new Set(r.map(({id:d})=>d)),s=o.filter(d=>$I(d,t.externalCollection)),l=new Map(s.filter(d=>d.uuid).map(d=>[d.uuid,d])),u=[];for(const d of n.tables.annotationEntries){const c=s.find(v=>v.id===(t.idPrefix?`${t.idPrefix}:${d.id}`:d.id)),m=d.uuid&&l.get(d.uuid)||(c&&(!d.uuid||!c.uuid)?c:void 0);m&&t.replaceExisting&&(e.dispatch(Gv({annotationId:m.id})),a.delete(m.id));const y=!m&&(a.has(d.id)||d.nodeIds.some(v=>i.has(v))),g=t.idPrefix??(y?`s${(d.uuid??d.id).replace(/[^a-z0-9]/gi,"").slice(0,8)}`:void 0),f=v=>g?`${g}:${v}`:v,A=m&&t.replaceExisting?m.id:f(d.id);if(t.skipExisting&&!t.replaceExisting&&(m!==void 0||a.has(A))){(t.annotationRole!==void 0||t.readOnly!==void 0)&&e.dispatch(Fn({annotationId:(m==null?void 0:m.id)??A,annotationRole:t.annotationRole,readOnly:t.readOnly}));continue}e.dispatch(xd({annotationEntry:{...d,id:A,nodeIds:d.nodeIds.map(f),edgeIds:d.edgeIds.map(f),annotationRole:t.annotationRole??d.annotationRole,readOnly:t.readOnly??d.readOnly,externalCollection:t.externalCollection??d.externalCollection},...WI(n.tables,d,f),selectAnnotationId:t.selectAnnotationId})),a.add(A),u.push(A)}return u},QI=(e,n)=>{const t=e.getState().annotationEntries.filter(o=>{var r;return((r=o.externalCollection)==null?void 0:r.type)===n.type&&o.externalCollection.id===n.id}).map(o=>o.id);return t.length===0?[]:(e.dispatch(Wa({annotationIds:t,nextSelectedAnnotationId:null})),t)},KI=(e,n,t)=>{if(t){const r=e.getPlugin(t);if(r)return r}const o=e.getPluginsByAnnotationType(n);return o.find(r=>r.addAnnotation)??o[0]??null},XI=({registry:e,engine:n,annotationEntries:t,toolType:o,coordinates:r,options:a,linkedNodeGroupIds:i,sourceToolId:s})=>{var m,y;const l=KI(e,o,s),u=((m=l==null?void 0:l.addAnnotation)==null?void 0:m.resolveOptions({annotationType:o,toolId:s??(l==null?void 0:l.id)??null,engine:n,coordinates:r,options:a,linkedNodeGroupIds:i}))??a;if(!er(o))return u;const d=gv({annotationEntries:t,toolType:o}),c=(y=u==null?void 0:u.shortLabel)==null?void 0:y.trim();return{...u,shortLabel:c||Su(o,d),shortLabelSource:c?(u==null?void 0:u.shortLabelSource)??Wt.CUSTOM:Wt.DEFAULT,shortLabelCounter:c?u==null?void 0:u.shortLabelCounter:d}},JI=({engine:e,registry:n,annotationsStore:t,measurementSequenceRef:o,nodeSequenceRef:r,edgeSequenceRef:a})=>p.useCallback((i,s,l,u,d)=>{const{annotationEntry:c,nodes:m,linkedNodeGroups:y,edges:g}=WA({toolType:i,coordinates:s,options:XI({registry:n,engine:e,annotationEntries:t.getState().annotationEntries,toolType:i,coordinates:s,options:l,linkedNodeGroupIds:u,sourceToolId:d}),linkedNodeGroupIds:u,measurementSequenceRef:o,nodeSequenceRef:r,edgeSequenceRef:a});return t.dispatch(xd({annotationEntry:c,nodes:m,linkedNodeGroups:y,edges:g,selectAnnotationId:c.id})),c},[t,n,e,o,r,a]),Gn=(e,n)=>Yt(e.getState().annotationEntries,n),jo=e=>e!==null&&!e.locked&&!e.readOnly,$s=(e,n)=>n.map(t=>Yt(e,t)).filter(jo),ZI=({annotationsStore:e,activeEditedNodeId:n,setActiveEditedNodeId:t})=>{const o=p.useCallback(d=>{e.dispatch(Uv(d))},[e]),r=p.useCallback(d=>{e.dispatch(Hv(d))},[e]),a=p.useCallback(d=>{const c=Gn(e,d);c&&e.dispatch(Fn({annotationId:d,hidden:!c.hidden}))},[e]),i=p.useCallback(d=>{const c=Gn(e,d);if(!c||c.readOnly)return;const m=!c.locked;e.dispatch(Fn({annotationId:d,locked:m})),m&&c.nodeIds.includes(n??"")&&t(null)},[n,e,t]),s=p.useCallback((d,c)=>{jo(Gn(e,d))&&e.dispatch(Fn({annotationId:d,displayName:c.trim()}))},[e]),l=p.useCallback((d,c)=>{jo(Gn(e,d))&&e.dispatch(Fn({annotationId:d,shortLabel:c.trim(),shortLabelSource:Wt.CUSTOM}))},[e]),u=p.useCallback((d,c)=>{const m=Gn(e,d);m&&e.dispatch(Fn({annotationId:d,elevationDisplayMode:HA(c??m.elevationDisplayMode)}))},[e]);return{setElevationReferenceAnnotationIdInStore:o,setPointTemporaryModeInStore:r,toggleAnnotationVisibility:a,toggleAnnotationLocked:i,updateAnnotationDisplayName:s,updateAnnotationShortLabel:l,toggleAnnotationElevationDisplayMode:u}},ek=e=>{const n=p.useCallback(r=>{const a=Gn(e,r);if(!a)return;const i=e.getState(),s=cd({annotation:a,coordinates:ri({annotationEntries:i.annotationEntries,nodes:i.nodes,annotationId:r})});if(!s)return;const{kind:l,name:u}=rv(a);fs(`annotation-${gs(l)}-${gs(u)}.geojson`,s)},[e]),t=p.useCallback(()=>Td(Ha(e.getState())),[e]),o=p.useCallback(()=>{fs("annotations.geojson",t())},[t]);return{exportAnnotationGeoJson:n,buildAllAnnotationsGeoJson:t,exportAllAnnotationsGeoJson:o}},va=({engine:e,points:n})=>{!Z(e)||n.length===0||e.flyToPoints(n,{minRadiusMeters:Hn.infoBoxFlyTo.minRadiusMeters,paddingFactor:Hn.infoBoxFlyTo.paddingFactor})},nk=({annotationEntries:e,annotationIds:n,nodes:t})=>{const o=new Set(n);return e.filter(r=>o.has(r.id)).flatMap(r=>Aa({annotationEntries:e,annotationId:r.id,nodes:t}))},tk=({annotationEntries:e,annotationIds:n,nodes:t,engine:o})=>{va({engine:o,points:nk({annotationEntries:e,annotationIds:n,nodes:t})})},ok=({engine:e,annotationsStore:n,setActiveEditedNodeId:t})=>{const o=p.useCallback(d=>{d===null&&t(null),n.dispatch(dt(d))},[n,t]),r=p.useCallback(d=>{d.length===0&&t(null),n.dispatch(Tt(d))},[n,t]),a=p.useCallback(()=>{n.dispatch(Tt(Ed(n.getState())))},[n]),i=p.useCallback(d=>{const c=n.getState();n.dispatch(dt(Mv(c.annotationEntries,or(c),d)))},[n]),s=p.useCallback(d=>{const c=n.getState();va({engine:e,points:Aa({annotationEntries:c.annotationEntries,nodes:c.nodes,annotationId:d})})},[n,e]),l=p.useCallback(()=>{const d=n.getState();va({engine:e,points:tr(d).flatMap(c=>Aa({annotationEntries:d.annotationEntries,nodes:d.nodes,annotationId:c.id}))})},[n,e]),u=p.useCallback(d=>{d===null&&t(null),n.dispatch(dt(d)),s(d)},[n,s,t]);return{setSelectedAnnotationIdInStore:o,setSelectedAnnotationIdsInStore:r,selectAllAnnotationEntries:a,focusAdjacentAnnotationEntry:i,flyToAnnotationById:s,flyToAllAnnotations:l,focusAnnotationId:u}},rk=({annotationsStore:e,annotationToolDraftStore:n,confirmAnnotationDelete:t})=>{const o=p.useCallback((l,u)=>{if(l.length===0)return Promise.resolve(!1);if(u!=null&&u.skipConfirmation)return Promise.resolve(!0);const d=t??Jv;return Promise.resolve(d({annotations:l,source:(u==null?void 0:u.source)??Qa.PROGRAMMATIC})).catch(c=>(console.error("[Annotations] Delete confirmation failed",c),!1))},[t]),r=p.useCallback(()=>{const l=e.getState().annotationToolType;return n.get(l).coordinates.length>0},[n,e]),a=p.useCallback((l,u)=>{const d=Array.from(new Set(l));if(d.length===0||r())return;const c=$s(e.getState().annotationEntries,d);c.length!==0&&o(c,u).then(m=>{if(!m)return;const y=$s(e.getState().annotationEntries,c.map(({id:g})=>g)).map(({id:g})=>g);y.length!==0&&e.dispatch(Wa({annotationIds:y}))})},[e,r,o]),i=p.useCallback((l,u)=>{jo(Gn(e,l))&&a([l],u)},[e,a]),s=p.useCallback(l=>{const u=Pv(e.getState());u.length!==0&&a(u,l)},[e,a]);return{requestAnnotationDeleteConfirmation:o,removeAnnotationEntriesByIds:a,removeAnnotationEntryById:i,removeSelectedAnnotationEntries:s}},ak=[],ik=[],sk={coordinates:ak,linkedNodeGroupIds:ik,feedback:null},lk=(e,n)=>e.length===n.length&&e.every((t,o)=>t===n[o]),uk=(e,n)=>{var t,o,r,a;return Xa(e.coordinates,n.coordinates)&&lk(e.linkedNodeGroupIds,n.linkedNodeGroupIds)&&((t=e.feedback)==null?void 0:t.kind)===((o=n.feedback)==null?void 0:o.kind)&&((r=e.feedback)==null?void 0:r.message)===((a=n.feedback)==null?void 0:a.message)},dk=()=>{const e=new Map,n=new Map,t=r=>{var a;(a=n.get(r))==null||a.forEach(i=>i())},o=r=>e.get(r)??sk;return{get:o,set:(r,a)=>{const i={coordinates:[...a.coordinates],linkedNodeGroupIds:[...a.linkedNodeGroupIds],feedback:a.feedback??null},s=o(r);if(uk(s,i))return;i.coordinates.length>0||i.linkedNodeGroupIds.length>0||!!i.feedback?e.set(r,i):e.delete(r),t(r)},clear:r=>{e.has(r)&&(e.delete(r),t(r))},subscribe:(r,a)=>{const i=n.get(r)??new Set;return i.add(a),n.set(r,i),()=>{const s=n.get(r);s&&(s.delete(a),s.size===0&&n.delete(r))}}}},ck=()=>{let e=null;const n=new Set;return{getSnapshot:()=>e,setSnapshot:t=>{e!==t&&(e=t,n.forEach(o=>o()))},subscribe:t=>(n.add(t),()=>n.delete(t))}},mk=({registry:e,initialToolType:n,initialPointTemporaryMode:t,initialPersistenceState:o})=>{const r=o?_v({initialToolType:n,initialPointTemporaryMode:t,initialPersistenceState:o,isToolTypeAvailable:a=>!!e.getPlugin(a)}):Ld({initialToolType:n,initialPointTemporaryMode:t});return{annotationsStore:Wv(r),annotationToolDraftStore:dk(),activePointQueryPickResultStore:ck(),sequenceRefs:{measurementSequenceRef:{current:ut(r.annotationEntries.map(({id:a})=>a))},nodeSequenceRef:{current:ut(r.nodes.map(({id:a})=>a))},edgeSequenceRef:{current:ut(r.edges.map(({id:a})=>a))}},lastSerializedPersistenceState:JSON.stringify(Ha(r)),mountedHosts:0}},Rt=new Map,yk=e=>{const{storeKey:n,onPersistenceStateChange:t}=e,o=p.useRef(null);let r=n?Rt.get(n):o.current;r||(r=mk(e),n?Rt.set(n,r):o.current=r);const a=r;return p.useEffect(()=>{if(n)return Rt.set(n,a),a.mountedHosts+=1,()=>{a.mountedHosts-=1,a.mountedHosts===0&&Rt.get(n)===a&&Rt.delete(n)}},[a,n]),p.useEffect(()=>{if(t)return a.annotationsStore.subscribe(()=>{const i=Ha(a.annotationsStore.getState()),s=JSON.stringify(i);s!==a.lastSerializedPersistenceState&&(t(i),a.lastSerializedPersistenceState=s)})},[a,t]),{annotationsStore:a.annotationsStore,annotationToolDraftStore:a.annotationToolDraftStore,activePointQueryPickResultStore:a.activePointQueryPickResultStore,sequenceRefs:a.sequenceRefs}},{DISTANCE:pk,POLYLINE:gk,AREA_GROUND:fk,AREA_PLANAR:Ak,AREA_VERTICAL:vk}=P,Ws=e=>{switch(e.toolType){case pk:case gk:return 2;case fk:case Ak:case vk:return 3;default:return null}},Tk=({annotationEntries:e,selectedAnnotationIds:n,editedNodeId:t})=>{const o=e.filter(i=>!i.locked&&!i.readOnly&&i.nodeIds.includes(t)&&Ws(i)!==null);let r=o[0];for(let i=n.length-1;i>=0;i-=1){const s=o.find(({id:l})=>l===n[i]);if(s){r=s;break}}const a=r?Ws(r):null;return r&&a!==null?{annotation:r,minimumNodeCount:a}:null},bk=({nodeIds:e,editedNodeId:n,closed:t})=>{const o=e.indexOf(n);if(!t||o<0)return e.filter(a=>a!==n);const r=[];for(let a=1;a<e.length;a+=1){const i=e[(o+a)%e.length];i&&i!==n&&r.push(i)}return r},Nk=({annotationsStore:e,annotationToolDraftStore:n,activeEditedNodeId:t,setActiveEditedNodeId:o,requestAnnotationDeleteConfirmation:r})=>p.useCallback(()=>{if(!t)return!1;const a=e.getState(),i=Tk({annotationEntries:a.annotationEntries,selectedAnnotationIds:a.selectionState.selectedAnnotationIds,editedNodeId:t});if(!i)return!1;const{annotation:s,minimumNodeCount:l}=i,u=s.nodeIds.filter(y=>y!==t);if(u.length>=l)return e.dispatch(jv({annotationId:s.id,nodeId:t})),o(null),!0;const d=bk({nodeIds:s.nodeIds,editedNodeId:t,closed:s.closed===!0});if(d.length!==u.length)return!1;const c=new Map(a.nodes.map(y=>[y.id,y])),m=d.flatMap(y=>{const g=c.get(y);return g?[g]:[]});return m.length!==d.length?!1:(r([s],{source:Qa.KEYBOARD}).then(y=>{y&&(n.set(s.toolType,{coordinates:m.map(g=>g.coordinate),linkedNodeGroupIds:d.map(g=>Io(a.linkedNodeGroups,g)),feedback:null}),e.dispatch(Wa({annotationIds:[s.id],nextSelectedAnnotationId:null})),o(null))}),!0)},[t,n,e,r,o]),Ik=({annotationsStore:e,setActiveEditedNodeId:n})=>{const t=p.useRef(ma),o=p.useRef(()=>!1),r=p.useRef(null),a=p.useCallback(y=>{const g=e.getState().annotationToolType;e.dispatch($v(y)),g!==y&&(n(null),e.dispatch(dt(null)))},[e,n]),i=p.useCallback(y=>{if(t.current===ma){a(y);return}t.current.requestModeChange(y)},[a]),s=p.useCallback(y=>{t.current=y},[]),l=p.useMemo(()=>({requestModeChange:y=>t.current.requestModeChange(y),requestActivateTool:y=>t.current.requestActivateTool(y),requestFinishMeasurement:()=>t.current.requestFinishMeasurement(),requestPointAt:y=>t.current.requestPointAt(y)}),[]),u=p.useCallback(y=>(o.current=y,()=>{o.current===y&&(o.current=()=>!1)}),[]),d=p.useCallback(y=>o.current(y),[]),c=p.useCallback(y=>{r.current=y},[]),m=p.useCallback(()=>r.current,[]);return{setActiveToolTypeInStore:a,setActiveToolType:i,bindLifecycleHostApi:s,lifecycleRequests:l,bindPreviewSnapTargetNodeClick:u,handlePreviewSnapTargetNodeClick:d,setHoveredPointQueryNodeId:c,getHoveredPointQueryNodeId:m}},kk=({engine:e,plugins:n,initialActiveToolType:t,initialPointTemporaryMode:o,formatOptions:r,lineLabelOptions:a,initialPersistenceState:i,storeKey:s,onPersistenceStateChange:l,requestLabelText:u,confirmAnnotationDelete:d})=>{var Ie;const c=p.useMemo(()=>Rv(n),[n]),m=((Ie=c.orderedDescriptors[0])==null?void 0:Ie.id)??null;if(!m)throw new Error("AnnotationsProvider requires at least one tool plugin.");const{annotationsStore:y,annotationToolDraftStore:g,activePointQueryPickResultStore:f,sequenceRefs:A}=yk({registry:c,initialToolType:t&&c.getPlugin(t)?t:m,initialPointTemporaryMode:o,initialPersistenceState:i,storeKey:s,onPersistenceStateChange:l}),[v,T]=p.useState(null),{setActiveToolTypeInStore:N,setActiveToolType:b,bindLifecycleHostApi:I,lifecycleRequests:h,bindPreviewSnapTargetNodeClick:C,handlePreviewSnapTargetNodeClick:k,setHoveredPointQueryNodeId:S,getHoveredPointQueryNodeId:O}=Ik({annotationsStore:y,setActiveEditedNodeId:T}),{setSelectedAnnotationIdInStore:R,setSelectedAnnotationIdsInStore:L,selectAllAnnotationEntries:_,focusAdjacentAnnotationEntry:w,flyToAnnotationById:q,flyToAllAnnotations:D,focusAnnotationId:B}=ok({engine:e,annotationsStore:y,setActiveEditedNodeId:T}),{requestAnnotationDeleteConfirmation:H,removeAnnotationEntriesByIds:z,removeAnnotationEntryById:X,removeSelectedAnnotationEntries:V}=rk({annotationsStore:y,annotationToolDraftStore:g,confirmAnnotationDelete:d}),$=Nk({annotationsStore:y,annotationToolDraftStore:g,activeEditedNodeId:v,setActiveEditedNodeId:T,requestAnnotationDeleteConfirmation:H}),{exportAnnotationGeoJson:Q,buildAllAnnotationsGeoJson:ue,exportAllAnnotationsGeoJson:K}=ek(y),{setElevationReferenceAnnotationIdInStore:se,setPointTemporaryModeInStore:de,toggleAnnotationVisibility:Ne,toggleAnnotationLocked:F,updateAnnotationDisplayName:M,updateAnnotationShortLabel:J,toggleAnnotationElevationDisplayMode:W}=ZI({annotationsStore:y,activeEditedNodeId:v,setActiveEditedNodeId:T}),fe=JI({engine:e,registry:c,annotationsStore:y,...A}),ce=p.useCallback((cn,j)=>YI(y,cn,j),[y]),G=p.useCallback(cn=>QI(y,cn),[y]),te=p.useMemo(()=>({engine:e,registry:c,annotationToolDraftStore:g,annotationsStore:y,formatOptions:r,activeEditedNodeId:v,addAnnotation:fe,appendAnnotationsRuntimePersistenceState:ce,removeExternalAnnotationsByCollection:G,setActiveToolType:b,requestModeChange:h.requestModeChange,requestActivateTool:h.requestActivateTool,requestFinishMeasurement:h.requestFinishMeasurement,requestPointAt:h.requestPointAt,focusAdjacentAnnotationEntry:w,focusAnnotationId:B,flyToAnnotationById:q,flyToAllAnnotations:D,removeAnnotationById:X,removeAnnotationsByIds:z,buildAllAnnotationsGeoJson:ue,exportAnnotationGeoJson:Q,exportAllAnnotationsGeoJson:K,toggleAnnotationVisibility:Ne,toggleAnnotationLocked:F,removeSelectedAnnotations:V,selectAllAnnotations:_,setElevationReferenceAnnotationId:se,toggleAnnotationElevationDisplayMode:W,updateAnnotationDisplayName:M,updateAnnotationShortLabel:J,setPointTemporaryMode:de,setSelectedAnnotationId:R,setSelectedAnnotationIds:L}),[fe,ce,v,g,y,ue,w,B,K,Q,D,q,r,h,X,z,G,V,c,e,_,se,b,de,R,L,F,W,Ne,M,J]);return{annotationsStore:y,registry:c,services:te,activePointQueryPickResultStore:f,setActiveToolType:b,runtimeAuthoringHost:{engine:e,registry:c,annotationsStore:y,annotationToolDraftStore:g,setActiveToolTypeInStore:N,focusAdjacentAnnotationEntry:w,removeSelectedAnnotations:V,removeEditedNode:$,addAnnotation:fe,bindPreviewSnapTargetNodeClick:C,activeEditedNodeId:v,getHoveredPointQueryNodeId:O,setHoveredPointQueryNodeId:S,onPointQueryPickResultChange:f.setSnapshot,formatOptions:r,lineLabelOptions:a,bindApi:I,requestLabelText:u},runtimeVisualHost:{engine:e,registry:c,annotationsStore:y,annotationToolDraftStore:g,setElevationReferenceAnnotationId:se,toggleAnnotationElevationDisplayMode:W,onActiveEditedNodeIdChange:T,onHoveredPointQueryNodeIdChange:S,onPreviewSnapTargetNodeClick:k,activeEditedNodeId:v,formatOptions:r,lineLabelOptions:a}}},hk=({enabled:e=!0}={})=>{const n=p.useRef(null),t=p.useRef([]),[o,r]=p.useState(null),[a,i]=p.useState([]),s=p.useCallback(d=>{const c=n.current;if(n.current=null,r(null),d!==null){const m=$g(t.current,d);t.current=m,i(m)}c==null||c(d)},[]),l=p.useCallback(({defaultText:d,labelTextSuggestions:c})=>new Promise(m=>{var y;if(!e){m(null);return}(y=n.current)==null||y.call(n,null),n.current=m,r(Yg({defaultText:d,labelTextHistory:t.current,labelTextSuggestions:c}))}),[e]);p.useEffect(()=>()=>{var d;(d=n.current)==null||d.call(n,null),n.current=null},[]),p.useEffect(()=>{e||s(null)},[e,s]);const u=p.useMemo(()=>!e||!o?{open:!1,initialValue:"",labelSuggestions:[],onAbort:()=>{},onFinish:()=>{}}:{open:!0,initialValue:o.initialValue,labelSuggestions:Pa(a,o.labelSuggestions),onAbort:()=>s(null),onFinish:s},[e,a,o,s]);return p.useMemo(()=>({labelTextDialogState:u,requestLabelText:l}),[u,l])},wc=1500,Co=new WeakMap,Ta=e=>{var n;(n=Co.get(e))==null||n()},Ck=(e,n,{durationMs:t=wc}={})=>{Ta(e);const o=e.getCameraPose();return!o||!(t>0)?Promise.resolve(e.setCameraPose(n)):new Promise(r=>{let a=0,i=!1;const s=c=>{i||(i=!0,cancelAnimationFrame(a),Co.get(e)===l&&Co.delete(e),r(c))},l=()=>s(!1);Co.set(e,l);const u=performance.now(),d=c=>{if(i)return;const m=Math.min(1,(c-u)/t),y=m>=1?n:Op(o,n,mp(0,1,m));if(e.isDestroyed()||!e.setCameraPose(y)){s(!1);return}m>=1?s(!0):a=requestAnimationFrame(d)};a=requestAnimationFrame(d)})},Ft=e=>Array.isArray(e)&&e.length===3&&e.every(n=>Number.isFinite(n)),Sk=e=>({position:e.positionECEF.toArray(),direction:e.directionECEF.toArray(),up:e.upECEF.toArray(),fovY:e.verticalFovRad}),Ys=e=>{if(!e||!Ft(e.position)||!Ft(e.direction)||!Ft(e.up)||!(e.fovY>0&&e.fovY<il))return null;const n=new x(...e.direction);if(!(n.lengthSq()>0))return null;n.normalize();const t=pt(new x(...e.up),n);return t.lengthSq()>0?{positionECEF:new x(...e.position),directionECEF:n,upECEF:t.normalize(),verticalFovRad:e.fovY}:null},Ek=e=>{const n=()=>{const o=e();return Z(o)?o:null},t=(o,r)=>{const a=n();return a&&o?Ck(a,o,{durationMs:r}):Promise.resolve(!1)};return{getPose:()=>{var r;const o=(r=n())==null?void 0:r.getCameraPose();return o?Sk(o):null},setPose:o=>{const r=n(),a=Ys(o);return!r||!a?!1:(Ta(r),r.setCameraPose(a))},flyToPose:(o,r={})=>t(Ys(o),r.durationMs),lookAt:(o,r,a={})=>{var i,s;return Ft(o)&&Ft(r)?t(Ep(new x(...o),new x(...r),a.fovY??((s=(i=n())==null?void 0:i.getCameraPose())==null?void 0:s.verticalFovRad)??su),a.durationMs??wc):Promise.resolve(!1)},stop:()=>{const o=n();o&&Ta(o)}}},Fr=Object.freeze({settleTimeoutMs:2e3}),Ao=()=>new Promise(e=>{typeof requestAnimationFrame=="function"?requestAnimationFrame(()=>setTimeout(e,0)):setTimeout(e,16)}),Qs=e=>new Promise(n=>setTimeout(n,e)),Gr=(e,n,t)=>new Promise(o=>{if(n(e.getState())){o(!0);return}let r=!1;const a=l=>{r||(r=!0,clearTimeout(s),i(),o(l))},i=e.subscribe(()=>{n(e.getState())&&a(!0)}),s=setTimeout(()=>a(!1),t)}),Ks=e=>new Set(e.annotationEntries.map(n=>n.id)),nt=(e,n)=>{var t;return((t=e.annotationEntries.find(o=>!n.has(o.id)))==null?void 0:t.id)??null},Ok=e=>{const n=()=>e().annotationsStore,t=()=>{const c=e(),m=c.annotationsStore.getState(),y=m.annotationToolType??null,g=y?c.annotationToolDraftStore.get(y).coordinates.length:0;return{activeTool:y,tools:c.registry.orderedDescriptors.map(f=>f.id),selectedIds:[...m.selectionState.selectedAnnotationIds??[]],draft:y&&g>0?{tool:y,nodeCount:g}:null,textPrompt:c.labelTextDialogState.open?c.labelTextDialogState.initialValue:null,annotations:m.annotationEntries.map(f=>({id:f.id,type:f.toolType,label:f.shortLabel??null,nodeCount:f.nodeIds.length,external:f.annotationRole===At.EXTERNAL}))}},o=async c=>{const m=e();if(!m.registry.getPlugin(c))return!1;m.annotationsStore.getState().annotationToolType!==c&&m.requestModeChange(c);const y=await Gr(m.annotationsStore,g=>g.annotationToolType===c,Fr.settleTimeoutMs);return await Ao(),y},r=async c=>{await Ao();const m=e().requestPointAt(c);return await Ao(),m},a=async()=>{const c=Ks(n().getState());return e().requestFinishMeasurement()&&await Gr(n(),m=>nt(m,c)!==null,Fr.settleTimeoutMs),await Ao(),nt(n().getState(),c)},i=()=>{const c=e(),m=c.annotationsStore.getState().annotationToolType;m&&c.annotationToolDraftStore.clear(m)},s=c=>{const m=e().labelTextDialogState;return m.open?(c===null?m.onAbort():m.onFinish(c),!0):!1};return{getState:t,subscribe:c=>n().subscribe(c),activateTool:o,pickAt:r,finish:a,cancel:i,answerTextPrompt:s,createMeasurement:async(c,m,y={})=>{const{stepDelayMs:g=0,select:f=!0}=y;if(!await o(c))return null;const A=Ks(n().getState());e().annotationToolDraftStore.clear(c);for(const T of m){if(g>0&&await Qs(g),!await r(T))return null;const N=e().labelTextDialogState;if(N.open&&(s(y.text??N.initialValue),await Gr(n(),b=>nt(b,A)!==null,Fr.settleTimeoutMs)),nt(n().getState(),A))break}let v=nt(n().getState(),A);return v||(g>0&&await Qs(g),await a(),v=nt(n().getState(),A)),v&&f&&e().setSelectedAnnotationIds([v]),v},addMeasurements:(c,m={})=>{const y=e(),g=Cd(c)??Ua(c);if(!g)return[];if(m.replace){const A=y.annotationsStore.getState().annotationEntries.filter(v=>v.annotationRole!==At.EXTERNAL).map(v=>v.id);A.length>0&&y.removeAnnotationsByIds(A,{skipConfirmation:!0})}const f=[...y.appendAnnotationsRuntimePersistenceState(g)];return m.select&&f.length>0&&y.setSelectedAnnotationIds(f),f},exportMeasurements:()=>e().buildAllAnnotationsGeoJson(),select:c=>e().setSelectedAnnotationIds(c),remove:c=>e().removeAnnotationsByIds(c,{skipConfirmation:!0}),flyTo:c=>{const m=e();if(!c||c.length===0){m.flyToAllAnnotations();return}const y=m.annotationsStore.getState();tk({annotationEntries:y.annotationEntries,annotationIds:c,nodes:y.nodes,engine:m.engine})}}},xc=e=>{const n=[],t=()=>e(n.at(-1)??null);return o=>(n.push(o),t(),()=>{const r=n.indexOf(o);r>=0&&n.splice(r,1),t()})},Rk=xc(Lg),Lk=xc(wg),wk=(e,n)=>{const t=p.useRef(e);t.current=e,p.useLayoutEffect(()=>{if(!n)return;const o=Rk(Ok(()=>t.current)),r=Lk(Ek(()=>t.current.engine));return()=>{r(),o()}},[n])},xk=GA,qc=p.createContext(null),_c=p.createContext(null),qk={lengthMeters:{locale:Ct.DE_DE,unitMode:yy.METERS,maximumFractionDigitsMeters:2},areaSquareMeters:{locale:Ct.DE_DE},degrees:{locale:Ct.DE_DE},geographicCoordinate:{locale:Ct.DE_DE,fractionDigits:6},decimalNumber:{locale:Ct.DE_DE,fractionDigits:2,useGrouping:!1}},_k={},Pk=()=>{const e=p.useContext(qc);if(!e)throw new Error("useAnnotationsRuntime must be used within AnnotationsProvider.");return e},Mk=()=>{const e=p.useContext(_c);if(!e)throw new Error("useActivePointQueryPickResult must be used within AnnotationsProvider.");return e},Dk=({engine:e,plugins:n,children:t,annotationOverlayContainer:o=null,initialActiveToolType:r,initialPointTemporaryMode:a=!1,labelOverlayHost:i=null,localPersistence:s,renderEnabled:l=!0,visualRenderEnabled:u,visualInteractionEnabled:d,visualAnnotationEntryRoles:c,formatOptions:m=qk,lineLabelOptions:y=_k,referenceObjectSizing:g=qd,initialPersistenceState:f,onPersistenceStateChange:A,confirmAnnotationDelete:v,carmaApi:T=!0})=>{const{labelTextDialogState:N,requestLabelText:b}=hk({enabled:l}),I=!!(s!=null&&s.storageKey)&&((s==null?void 0:s.enabled)??!0),h=Xv({enabled:I,storageKey:(s==null?void 0:s.storageKey)??"",requestFormatUpgrade:l?(s==null?void 0:s.requestFormatUpgrade)??TA:void 0}),C=f!==void 0?f:h.initialPersistenceState,k=A??h.onPersistenceStateChange,S=I&&f===void 0&&A===void 0?s==null?void 0:s.storageKey:void 0,{annotationsStore:O,services:R,setActiveToolType:L,runtimeAuthoringHost:_,runtimeVisualHost:w,registry:q,activePointQueryPickResultStore:D}=kk({engine:e,plugins:n,initialActiveToolType:r,initialPointTemporaryMode:a,formatOptions:m,lineLabelOptions:y,initialPersistenceState:C,storeKey:S,onPersistenceStateChange:k,requestLabelText:l?b:void 0,confirmAnnotationDelete:v}),B=p.useMemo(()=>({...R,labelTextDialogState:N}),[N,R]);wk(B,T&&l);const H=(e==null?void 0:e.kind)??"none",z=E.jsx(xk,{context:Ya,store:O,children:E.jsx(qc.Provider,{value:B,children:E.jsxs(_c.Provider,{value:D,children:[o?Zm.createPortal(E.jsx(ed,{}),o):null,E.jsxs(p.Fragment,{children:[l||!S?E.jsx(tb,{registry:q,setActiveToolType:L}):null,l?E.jsx(nb,{..._,referenceObjectSizing:g}):null,u??l?E.jsx(Lc,{...w,visualAnnotationEntryRoles:c,visualInteractionEnabled:d,referenceObjectSizing:g}):null]},H),t]})})});return i?E.jsx(my,{host:i,children:z}):z},Pc=()=>{const{engine:e,registry:n,annotationToolDraftStore:t,formatOptions:o,addAnnotation:r,appendAnnotationsRuntimePersistenceState:a,removeExternalAnnotationsByCollection:i,setActiveToolType:s,requestModeChange:l,requestActivateTool:u,requestFinishMeasurement:d,focusAdjacentAnnotationEntry:c,focusAnnotationId:m,flyToAnnotationById:y,flyToAllAnnotations:g,removeAnnotationById:f,removeAnnotationsByIds:A,buildAllAnnotationsGeoJson:v,exportAnnotationGeoJson:T,exportAllAnnotationsGeoJson:N,toggleAnnotationVisibility:b,toggleAnnotationLocked:I,removeSelectedAnnotations:h,selectAllAnnotations:C,setElevationReferenceAnnotationId:k,toggleAnnotationElevationDisplayMode:S,updateAnnotationDisplayName:O,updateAnnotationShortLabel:R,activeEditedNodeId:L,setPointTemporaryMode:_,setSelectedAnnotationId:w,setSelectedAnnotationIds:q,labelTextDialogState:D}=Pk(),B=re(K=>K.annotationToolType),H=re(K=>K.nodes),z=re(K=>K.edges),X=re(K=>K.annotationEntries),V=re(or),$=re(K=>K.selectionState.selectedAnnotationIds),Q=re(K=>K.settingsState.elevationReferenceAnnotationId),ue=re(K=>K.settingsState.pointTemporaryMode);return{engine:e,registry:n,annotationToolDraftStore:t,formatOptions:o,activeToolType:B,setActiveToolType:s,requestModeChange:l,requestActivateTool:u,requestFinishMeasurement:d,focusAdjacentAnnotationEntry:c,focusAnnotationId:m,flyToAnnotationById:y,flyToAllAnnotations:g,removeAnnotationById:f,removeAnnotationsByIds:A,buildAllAnnotationsGeoJson:v,exportAnnotationGeoJson:T,exportAllAnnotationsGeoJson:N,toggleAnnotationVisibility:b,toggleAnnotationLocked:I,removeSelectedAnnotations:h,selectAllAnnotations:C,elevationReferenceAnnotationId:Q,setElevationReferenceAnnotationId:k,toggleAnnotationElevationDisplayMode:S,updateAnnotationDisplayName:O,updateAnnotationShortLabel:R,activeEditedNodeId:L,pointTemporaryMode:ue,setPointTemporaryMode:_,nodes:H,edges:z,annotationEntries:X,selectedAnnotationId:V,selectedAnnotationIds:$,setSelectedAnnotationId:w,setSelectedAnnotationIds:q,addAnnotation:r,appendAnnotationsRuntimePersistenceState:a,removeExternalAnnotationsByCollection:i,labelTextDialogState:D}},Bk=()=>{const e=Mk();return p.useSyncExternalStore(e.subscribe,e.getSnapshot,e.getSnapshot)};Dk.__docgenInfo={description:"",methods:[],displayName:"AnnotationsProvider",props:{engine:{required:!0,tsType:{name:"union",raw:"AnnotationEngine | null",elements:[{name:"AnnotationEngine"},{name:"null"}]},description:`Engine adapter the runtime draws and picks with. The app owns the engine
lifetime; the provider never disposes it. A different engine remounts the
engine-bound hosts so adapter-contributed hooks keep a stable order.`},plugins:{required:!0,tsType:{name:"unknown"},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""},annotationOverlayContainer:{required:!1,tsType:{name:"union",raw:"Element | DocumentFragment | null",elements:[{name:"Element"},{name:"DocumentFragment"},{name:"null"}]},description:"",defaultValue:{value:"null",computed:!1}},initialActiveToolType:{required:!1,tsType:{name:"AnnotationToolId"},description:""},initialPointTemporaryMode:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},labelOverlayHost:{required:!1,tsType:{name:"union",raw:"LabelOverlayHostBinding | null",elements:[{name:"LabelOverlayHostBinding"},{name:"null"}]},description:"",defaultValue:{value:"null",computed:!1}},localPersistence:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  enabled?: boolean;
  storageKey: string;
  requestFormatUpgrade?: () => Promise<boolean>;
}`,signature:{properties:[{key:"enabled",value:{name:"boolean",required:!1}},{key:"storageKey",value:{name:"string",required:!0}},{key:"requestFormatUpgrade",value:{name:"signature",type:"function",raw:"() => Promise<boolean>",signature:{arguments:[],return:{name:"Promise",elements:[{name:"boolean"}],raw:"Promise<boolean>"}},required:!1}}]}},description:""},renderEnabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},visualRenderEnabled:{required:!1,tsType:{name:"boolean"},description:""},visualInteractionEnabled:{required:!1,tsType:{name:"boolean"},description:""},visualAnnotationEntryRoles:{required:!1,tsType:{name:"unknown"},description:""},formatOptions:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  lengthMeters?: FormatLengthMetersOptions;
  areaSquareMeters?: FormatAreaSquareMetersAdaptiveOptions;
  degrees?: FormatDegreesOptions;
  geographicCoordinate?: GeographicCoordinateFormatOptions;
  decimalNumber?: FormatDecimalNumberOptions;
}`,signature:{properties:[{key:"lengthMeters",value:{name:"FormatLengthMetersOptions",required:!1}},{key:"areaSquareMeters",value:{name:"FormatAreaSquareMetersAdaptiveOptions",required:!1}},{key:"degrees",value:{name:"FormatDegreesOptions",required:!1}},{key:"geographicCoordinate",value:{name:"GeographicCoordinateFormatOptions",required:!1}},{key:"decimalNumber",value:{name:"FormatDecimalNumberOptions",required:!1}}]}},description:"",defaultValue:{value:`{
  lengthMeters: {
    locale: FORMAT_LOCALE.DE_DE,
    unitMode: LENGTH_UNIT_MODE.METERS,
    maximumFractionDigitsMeters: 2,
  },
  areaSquareMeters: {
    locale: FORMAT_LOCALE.DE_DE,
  },
  degrees: {
    locale: FORMAT_LOCALE.DE_DE,
  },
  geographicCoordinate: {
    locale: FORMAT_LOCALE.DE_DE,
    fractionDigits: 6,
  },
  decimalNumber: {
    locale: FORMAT_LOCALE.DE_DE,
    fractionDigits: 2,
    useGrouping: false,
  },
}`,computed:!1}},lineLabelOptions:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  appearance?: Partial<AnnotationLineLabelAppearanceOptions>;
  text?: Partial<
    Omit<AnnotationLineLabelTextOptions, "echo"> & {
      echo?: Partial<AnnotationLineLabelTextEchoOptions>;
    }
  >;
  background?: Partial<AnnotationLineLabelBackgroundOptions>;
  surface?: Partial<AnnotationLineLabelSurfaceOptions>;
  layout?: Partial<AnnotationLineLabelLayoutOptions>;
  collision?: Partial<AnnotationLineLabelCollisionOptions>;
}`,signature:{properties:[{key:"appearance",value:{name:"Partial",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  themeStyle: AnnotationThemeStyle;
}`,signature:{properties:[{key:"themeStyle",value:{name:"unknown[unknown]",raw:"(typeof ANNOTATION_THEME.style)[keyof typeof ANNOTATION_THEME.style]",required:!0}}]}}],raw:`Readonly<{
  themeStyle: AnnotationThemeStyle;
}>`}],raw:"Partial<AnnotationLineLabelAppearanceOptions>",required:!1}},{key:"text",value:{name:"Partial",elements:[{name:"intersection",raw:`Omit<AnnotationLineLabelTextOptions, "echo"> & {
  echo?: Partial<AnnotationLineLabelTextEchoOptions>;
}`,elements:[{name:"Omit",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fontFamily: string;
  fontWeight: string | number;
  color?: string;
  blendMode?: CssMixBlendMode;
  echo?: AnnotationLineLabelTextEchoOptions;
}`,signature:{properties:[{key:"fontFamily",value:{name:"string",required:!0}},{key:"fontWeight",value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!0}},{key:"color",value:{name:"string",required:!1}},{key:"blendMode",value:{name:"CssMixBlendMode",required:!1}},{key:"echo",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  color?: string;
  blurPx?: number;
  opacity?: number;
  blendMode?: CssMixBlendMode;
}`,signature:{properties:[{key:"color",value:{name:"string",required:!1}},{key:"blurPx",value:{name:"number",required:!1}},{key:"opacity",value:{name:"number",required:!1}},{key:"blendMode",value:{name:"CssMixBlendMode",required:!1}}]}}],raw:`Readonly<{
  color?: string;
  blurPx?: number;
  opacity?: number;
  blendMode?: CssMixBlendMode;
}>`,required:!1}}]}}],raw:`Readonly<{
  fontFamily: string;
  fontWeight: string | number;
  color?: string;
  blendMode?: CssMixBlendMode;
  echo?: AnnotationLineLabelTextEchoOptions;
}>`},{name:"literal",value:'"echo"'}],raw:'Omit<AnnotationLineLabelTextOptions, "echo">'},{name:"signature",type:"object",raw:`{
  echo?: Partial<AnnotationLineLabelTextEchoOptions>;
}`,signature:{properties:[{key:"echo",value:{name:"Partial",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  color?: string;
  blurPx?: number;
  opacity?: number;
  blendMode?: CssMixBlendMode;
}`,signature:{properties:[{key:"color",value:{name:"string",required:!1}},{key:"blurPx",value:{name:"number",required:!1}},{key:"opacity",value:{name:"number",required:!1}},{key:"blendMode",value:{name:"CssMixBlendMode",required:!1}}]}}],raw:`Readonly<{
  color?: string;
  blurPx?: number;
  opacity?: number;
  blendMode?: CssMixBlendMode;
}>`,required:!1}],raw:"Partial<AnnotationLineLabelTextEchoOptions>",required:!1}}]}}]}],raw:`Partial<
  Omit<AnnotationLineLabelTextOptions, "echo"> & {
    echo?: Partial<AnnotationLineLabelTextEchoOptions>;
  }
>`,required:!1}},{key:"background",value:{name:"Partial",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  style: AnnotationLineLabelBackgroundStyle;
  showBackdrop?: boolean;
  color?: string;
  blendMode?: CssMixBlendMode;
  blurPx?: number;
  brightnessPct?: number;
  saturatePct?: number;
  surfaceAlpha?: number;
  radiusEx?: number;
  edgeBlurPx?: number;
  insetBlockEx?: number;
  insetInlineEx?: number;
}`,signature:{properties:[{key:"style",value:{name:"unknown[unknown]",raw:"(typeof ANNOTATION_THEME.lineLabel.backgroundStyle)[keyof typeof ANNOTATION_THEME.lineLabel.backgroundStyle]",required:!0}},{key:"showBackdrop",value:{name:"boolean",required:!1}},{key:"color",value:{name:"string",required:!1}},{key:"blendMode",value:{name:"CssMixBlendMode",required:!1}},{key:"blurPx",value:{name:"number",required:!1}},{key:"brightnessPct",value:{name:"number",required:!1}},{key:"saturatePct",value:{name:"number",required:!1}},{key:"surfaceAlpha",value:{name:"number",required:!1}},{key:"radiusEx",value:{name:"number",required:!1}},{key:"edgeBlurPx",value:{name:"number",required:!1}},{key:"insetBlockEx",value:{name:"number",required:!1}},{key:"insetInlineEx",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  style: AnnotationLineLabelBackgroundStyle;
  showBackdrop?: boolean;
  color?: string;
  blendMode?: CssMixBlendMode;
  blurPx?: number;
  brightnessPct?: number;
  saturatePct?: number;
  surfaceAlpha?: number;
  radiusEx?: number;
  edgeBlurPx?: number;
  insetBlockEx?: number;
  insetInlineEx?: number;
}>`}],raw:"Partial<AnnotationLineLabelBackgroundOptions>",required:!1}},{key:"surface",value:{name:"Partial",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  blendMode?: CssMixBlendMode;
  paddingBlockEx?: number;
  paddingInlineEx?: number;
}`,signature:{properties:[{key:"blendMode",value:{name:"CssMixBlendMode",required:!1}},{key:"paddingBlockEx",value:{name:"number",required:!1}},{key:"paddingInlineEx",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  blendMode?: CssMixBlendMode;
  paddingBlockEx?: number;
  paddingInlineEx?: number;
}>`}],raw:"Partial<AnnotationLineLabelSurfaceOptions>",required:!1}},{key:"layout",value:{name:"Partial",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  shortEdgeOffsetPx: number;
}`,signature:{properties:[{key:"shortEdgeOffsetPx",value:{name:"number",required:!0}}]}}],raw:`Readonly<{
  shortEdgeOffsetPx: number;
}>`}],raw:"Partial<AnnotationLineLabelLayoutOptions>",required:!1}},{key:"collision",value:{name:"Partial",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  allowEarlyRemoval: boolean;
  resolutionStrategy: AnnotationLineLabelCollisionResolutionStrategy;
  anchorSlideStepRatio: number;
  maxAnchorSlideDeltaRatio: number;
}`,signature:{properties:[{key:"allowEarlyRemoval",value:{name:"boolean",required:!0}},{key:"resolutionStrategy",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_LINE_LABEL_COLLISION_RESOLUTION_STRATEGY)[keyof typeof ANNOTATION_LINE_LABEL_COLLISION_RESOLUTION_STRATEGY]",required:!0}},{key:"anchorSlideStepRatio",value:{name:"number",required:!0}},{key:"maxAnchorSlideDeltaRatio",value:{name:"number",required:!0}}]}}],raw:`Readonly<{
  allowEarlyRemoval: boolean;
  resolutionStrategy: AnnotationLineLabelCollisionResolutionStrategy;
  anchorSlideStepRatio: number;
  maxAnchorSlideDeltaRatio: number;
}>`}],raw:"Partial<AnnotationLineLabelCollisionOptions>",required:!1}}]}}],raw:`Readonly<{
  appearance?: Partial<AnnotationLineLabelAppearanceOptions>;
  text?: Partial<
    Omit<AnnotationLineLabelTextOptions, "echo"> & {
      echo?: Partial<AnnotationLineLabelTextEchoOptions>;
    }
  >;
  background?: Partial<AnnotationLineLabelBackgroundOptions>;
  surface?: Partial<AnnotationLineLabelSurfaceOptions>;
  layout?: Partial<AnnotationLineLabelLayoutOptions>;
  collision?: Partial<AnnotationLineLabelCollisionOptions>;
}>`},description:"",defaultValue:{value:"{}",computed:!1}},referenceObjectSizing:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  scalingMode: ReferenceObjectScalingMode;
  worldRadiusMeters: number;
  targetScreenRadiusCssPx: number;
  resizeWorldRadiusToScreenTarget: boolean;
  resizeStepFactor: number;
  quantizeWorldRadius: boolean;
}`,signature:{properties:[{key:"scalingMode",value:{name:"ReferenceObjectScalingMode",required:!0}},{key:"worldRadiusMeters",value:{name:"number",required:!0}},{key:"targetScreenRadiusCssPx",value:{name:"number",required:!0}},{key:"resizeWorldRadiusToScreenTarget",value:{name:"boolean",required:!0}},{key:"resizeStepFactor",value:{name:"number",required:!0}},{key:"quantizeWorldRadius",value:{name:"boolean",required:!0}}]}},description:"",defaultValue:{value:`{
  scalingMode: REFERENCE_OBJECT_SCALING_MODES.SCREEN,
  worldRadiusMeters: 3,
  targetScreenRadiusCssPx: 48,
  resizeWorldRadiusToScreenTarget: false,
  resizeStepFactor: 4,
  quantizeWorldRadius: false,
} satisfies AnnotationReferenceObjectSizingOptions`,computed:!1}},initialPersistenceState:{required:!1,tsType:{name:"union",raw:"AnnotationsRuntimePersistenceEnvelope | null",elements:[{name:"signature",type:"object",raw:`{
  formatId: typeof ANNOTATIONS_RUNTIME_PERSISTENCE_FORMAT_ID;
  version: typeof ANNOTATIONS_RUNTIME_PERSISTENCE_VERSION;
  tables: {
    annotationEntries: StoredAnnotation[];
    nodes: AnnotationNode[];
    linkedNodeGroups: AnnotationNodeLink[];
    edges: AnnotationEdge[];
  };
  settings: {
    lastActiveToolType: AnnotationToolId | null;
    elevationReferenceAnnotationId: string | null;
    nextShortLabelCounterByToolType: Record<string, number>;
  };
}`,signature:{properties:[{key:"formatId",value:{name:"ANNOTATIONS_RUNTIME_PERSISTENCE_FORMAT_ID",required:!0}},{key:"version",value:{name:"ANNOTATIONS_RUNTIME_PERSISTENCE_VERSION",required:!0}},{key:"tables",value:{name:"signature",type:"object",raw:`{
  annotationEntries: StoredAnnotation[];
  nodes: AnnotationNode[];
  linkedNodeGroups: AnnotationNodeLink[];
  edges: AnnotationEdge[];
}`,signature:{properties:[{key:"annotationEntries",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: string;
  toolType: AnnotationType;
  nodeIds: readonly string[];
  edgeIds: readonly string[];
  displayName?: string;
  shortLabel?: string;
  shortLabelSource?: AnnotationShortLabelSource;
  shortLabelCounter?: number;
  hidden?: boolean;
  locked?: boolean;
  annotationRole?: AnnotationEntryRole;
  readOnly?: boolean;
  labelAppearance?: AnnotationLabelAppearance;
  elevationDisplayMode?: AnnotationElevationDisplayMode;
  distanceAnchorCoordinateSelection?: RuntimePointLabelCoordinateSelection;
  distanceTriangleAnchorCoordinateRole?: RuntimeDistanceTriangleAnchorCoordinateRole;
  closed?: boolean;
  preferredNormalBearingRad?: number;
  externalCollection?: {
    type: "saved-measurement";
    id: string;
  };
  /** Identity across machines and shares; the runtime id only counts per session. */
  uuid?: string;
  /** ISO time of the last content change, stamped by the persistence on save. */
  updatedAt?: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"toolType",value:{name:"AnnotationType",required:!0}},{key:"nodeIds",value:{name:"unknown",required:!0}},{key:"edgeIds",value:{name:"unknown",required:!0}},{key:"displayName",value:{name:"string",required:!1}},{key:"shortLabel",value:{name:"string",required:!1}},{key:"shortLabelSource",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_SHORT_LABEL_SOURCES)[keyof typeof ANNOTATION_SHORT_LABEL_SOURCES]",required:!1}},{key:"shortLabelCounter",value:{name:"number",required:!1}},{key:"hidden",value:{name:"boolean",required:!1}},{key:"locked",value:{name:"boolean",required:!1}},{key:"annotationRole",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_ENTRY_ROLES)[keyof typeof ANNOTATION_ENTRY_ROLES]",required:!1}},{key:"readOnly",value:{name:"boolean",required:!1}},{key:"labelAppearance",value:{name:"AnnotationLabelAppearance",required:!1}},{key:"elevationDisplayMode",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_ELEVATION_DISPLAY_MODES)[keyof typeof ANNOTATION_ELEVATION_DISPLAY_MODES]",required:!1}},{key:"distanceAnchorCoordinateSelection",value:{name:"unknown[union]",raw:"(typeof RUNTIME_POINT_LABEL_COORDINATE_SELECTION)[keyof typeof RUNTIME_POINT_LABEL_COORDINATE_SELECTION]",required:!1}},{key:"distanceTriangleAnchorCoordinateRole",value:{name:"unknown[union]",raw:"(typeof RUNTIME_DISTANCE_TRIANGLE_ANCHOR_COORDINATE_ROLE)[keyof typeof RUNTIME_DISTANCE_TRIANGLE_ANCHOR_COORDINATE_ROLE]",required:!1}},{key:"closed",value:{name:"boolean",required:!1}},{key:"preferredNormalBearingRad",value:{name:"number",required:!1}},{key:"externalCollection",value:{name:"signature",type:"object",raw:`{
  type: "saved-measurement";
  id: string;
}`,signature:{properties:[{key:"type",value:{name:"literal",value:'"saved-measurement"',required:!0}},{key:"id",value:{name:"string",required:!0}}]},required:!1}},{key:"uuid",value:{name:"string",required:!1},description:"Identity across machines and shares; the runtime id only counts per session."},{key:"updatedAt",value:{name:"string",required:!1},description:"ISO time of the last content change, stamped by the persistence on save."}]}}],raw:"StoredAnnotation[]",required:!0}},{key:"nodes",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: string;
  coordinate: AnnotationGeographicCoordinate;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"coordinate",value:{name:"AnnotationGeographicCoordinate",required:!0}}]}}],raw:"AnnotationNode[]",required:!0}},{key:"linkedNodeGroups",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: AnnotationNodeLinkId;
  nodeIds: string[];
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"nodeIds",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}],raw:"AnnotationNodeLink[]",required:!0}},{key:"edges",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: string;
  startNodeId: string;
  endNodeId: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"startNodeId",value:{name:"string",required:!0}},{key:"endNodeId",value:{name:"string",required:!0}}]}}],raw:"AnnotationEdge[]",required:!0}}]},required:!0}},{key:"settings",value:{name:"signature",type:"object",raw:`{
  lastActiveToolType: AnnotationToolId | null;
  elevationReferenceAnnotationId: string | null;
  nextShortLabelCounterByToolType: Record<string, number>;
}`,signature:{properties:[{key:"lastActiveToolType",value:{name:"union",raw:"AnnotationToolId | null",elements:[{name:"AnnotationToolId"},{name:"null"}],required:!0}},{key:"elevationReferenceAnnotationId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"nextShortLabelCounterByToolType",value:{name:"Record",elements:[{name:"string"},{name:"number"}],raw:"Record<string, number>",required:!0}}]},required:!0}}]}},{name:"null"}]},description:""},onPersistenceStateChange:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  state: AnnotationsRuntimePersistenceEnvelope
) => void`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  formatId: typeof ANNOTATIONS_RUNTIME_PERSISTENCE_FORMAT_ID;
  version: typeof ANNOTATIONS_RUNTIME_PERSISTENCE_VERSION;
  tables: {
    annotationEntries: StoredAnnotation[];
    nodes: AnnotationNode[];
    linkedNodeGroups: AnnotationNodeLink[];
    edges: AnnotationEdge[];
  };
  settings: {
    lastActiveToolType: AnnotationToolId | null;
    elevationReferenceAnnotationId: string | null;
    nextShortLabelCounterByToolType: Record<string, number>;
  };
}`,signature:{properties:[{key:"formatId",value:{name:"ANNOTATIONS_RUNTIME_PERSISTENCE_FORMAT_ID",required:!0}},{key:"version",value:{name:"ANNOTATIONS_RUNTIME_PERSISTENCE_VERSION",required:!0}},{key:"tables",value:{name:"signature",type:"object",raw:`{
  annotationEntries: StoredAnnotation[];
  nodes: AnnotationNode[];
  linkedNodeGroups: AnnotationNodeLink[];
  edges: AnnotationEdge[];
}`,signature:{properties:[{key:"annotationEntries",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: string;
  toolType: AnnotationType;
  nodeIds: readonly string[];
  edgeIds: readonly string[];
  displayName?: string;
  shortLabel?: string;
  shortLabelSource?: AnnotationShortLabelSource;
  shortLabelCounter?: number;
  hidden?: boolean;
  locked?: boolean;
  annotationRole?: AnnotationEntryRole;
  readOnly?: boolean;
  labelAppearance?: AnnotationLabelAppearance;
  elevationDisplayMode?: AnnotationElevationDisplayMode;
  distanceAnchorCoordinateSelection?: RuntimePointLabelCoordinateSelection;
  distanceTriangleAnchorCoordinateRole?: RuntimeDistanceTriangleAnchorCoordinateRole;
  closed?: boolean;
  preferredNormalBearingRad?: number;
  externalCollection?: {
    type: "saved-measurement";
    id: string;
  };
  /** Identity across machines and shares; the runtime id only counts per session. */
  uuid?: string;
  /** ISO time of the last content change, stamped by the persistence on save. */
  updatedAt?: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"toolType",value:{name:"AnnotationType",required:!0}},{key:"nodeIds",value:{name:"unknown",required:!0}},{key:"edgeIds",value:{name:"unknown",required:!0}},{key:"displayName",value:{name:"string",required:!1}},{key:"shortLabel",value:{name:"string",required:!1}},{key:"shortLabelSource",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_SHORT_LABEL_SOURCES)[keyof typeof ANNOTATION_SHORT_LABEL_SOURCES]",required:!1}},{key:"shortLabelCounter",value:{name:"number",required:!1}},{key:"hidden",value:{name:"boolean",required:!1}},{key:"locked",value:{name:"boolean",required:!1}},{key:"annotationRole",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_ENTRY_ROLES)[keyof typeof ANNOTATION_ENTRY_ROLES]",required:!1}},{key:"readOnly",value:{name:"boolean",required:!1}},{key:"labelAppearance",value:{name:"AnnotationLabelAppearance",required:!1}},{key:"elevationDisplayMode",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_ELEVATION_DISPLAY_MODES)[keyof typeof ANNOTATION_ELEVATION_DISPLAY_MODES]",required:!1}},{key:"distanceAnchorCoordinateSelection",value:{name:"unknown[union]",raw:"(typeof RUNTIME_POINT_LABEL_COORDINATE_SELECTION)[keyof typeof RUNTIME_POINT_LABEL_COORDINATE_SELECTION]",required:!1}},{key:"distanceTriangleAnchorCoordinateRole",value:{name:"unknown[union]",raw:"(typeof RUNTIME_DISTANCE_TRIANGLE_ANCHOR_COORDINATE_ROLE)[keyof typeof RUNTIME_DISTANCE_TRIANGLE_ANCHOR_COORDINATE_ROLE]",required:!1}},{key:"closed",value:{name:"boolean",required:!1}},{key:"preferredNormalBearingRad",value:{name:"number",required:!1}},{key:"externalCollection",value:{name:"signature",type:"object",raw:`{
  type: "saved-measurement";
  id: string;
}`,signature:{properties:[{key:"type",value:{name:"literal",value:'"saved-measurement"',required:!0}},{key:"id",value:{name:"string",required:!0}}]},required:!1}},{key:"uuid",value:{name:"string",required:!1},description:"Identity across machines and shares; the runtime id only counts per session."},{key:"updatedAt",value:{name:"string",required:!1},description:"ISO time of the last content change, stamped by the persistence on save."}]}}],raw:"StoredAnnotation[]",required:!0}},{key:"nodes",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: string;
  coordinate: AnnotationGeographicCoordinate;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"coordinate",value:{name:"AnnotationGeographicCoordinate",required:!0}}]}}],raw:"AnnotationNode[]",required:!0}},{key:"linkedNodeGroups",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: AnnotationNodeLinkId;
  nodeIds: string[];
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"nodeIds",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}],raw:"AnnotationNodeLink[]",required:!0}},{key:"edges",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: string;
  startNodeId: string;
  endNodeId: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"startNodeId",value:{name:"string",required:!0}},{key:"endNodeId",value:{name:"string",required:!0}}]}}],raw:"AnnotationEdge[]",required:!0}}]},required:!0}},{key:"settings",value:{name:"signature",type:"object",raw:`{
  lastActiveToolType: AnnotationToolId | null;
  elevationReferenceAnnotationId: string | null;
  nextShortLabelCounterByToolType: Record<string, number>;
}`,signature:{properties:[{key:"lastActiveToolType",value:{name:"union",raw:"AnnotationToolId | null",elements:[{name:"AnnotationToolId"},{name:"null"}],required:!0}},{key:"elevationReferenceAnnotationId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"nextShortLabelCounterByToolType",value:{name:"Record",elements:[{name:"string"},{name:"number"}],raw:"Record<string, number>",required:!0}}]},required:!0}}]}},name:"state"}],return:{name:"void"}}},description:""},confirmAnnotationDelete:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  context: AnnotationDeleteConfirmationContext
) => boolean | Promise<boolean>`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  annotations: readonly StoredAnnotation[];
  source: AnnotationDeleteConfirmationSource;
}`,signature:{properties:[{key:"annotations",value:{name:"unknown",required:!0}},{key:"source",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_DELETE_CONFIRMATION_SOURCES)[keyof typeof ANNOTATION_DELETE_CONFIRMATION_SOURCES]",required:!0}}]}},name:"context"}],return:{name:"union",raw:"boolean | Promise<boolean>",elements:[{name:"boolean"},{name:"Promise",elements:[{name:"boolean"}],raw:"Promise<boolean>"}]}}},description:""},carmaApi:{required:!1,tsType:{name:"boolean"},description:"Answer `carma.annotations` while mounted, so scripts, stories and tests\ncan drive the tools. On by default; the latest mounted runtime answers.",defaultValue:{value:"true",computed:!1}}}};const Fk=({classNames:e,metrics:n,plugins:t,disableSelectWithoutAnnotations:o=!1,showToolTypeIndicators:r=!1,tooltipPlacement:a,getTooltipPopupContainer:i,renderToolButtonBackdrop:s})=>{const{registry:l,activeToolType:u,requestModeChange:d,annotationEntries:c}=Pc(),m=t??l.plugins,y=p.useMemo(()=>tr({annotationEntries:c}),[c]),g=p.useMemo(()=>xv(y),[y]),f=p.useMemo(()=>m.map(A=>{const v=A.descriptor,T=v.id===Ln,N=T?y.length:A.annotationType?g.get(A.annotationType)??0:0;return{id:v.id,label:v.label,tooltip:v.tooltip,icon:v.icon,annotationCount:N,disabled:o&&T&&y.length===0}}),[g,y.length,o,m]);return E.jsx(Ku,{activeToolId:u,tools:f,onToolSelect:A=>{d(A)},classNames:e,metrics:n,showToolTypeIndicators:r,tooltipPlacement:a,getTooltipPopupContainer:i,renderToolButtonBackdrop:s})};Fk.__docgenInfo={description:"",methods:[],displayName:"RuntimeAnnotationsToolbar",props:{classNames:{required:!1,tsType:{name:"Partial",elements:[{name:"AnnotationsToolbarClassNames"}],raw:"Partial<AnnotationsToolbarClassNames>"},description:""},metrics:{required:!1,tsType:{name:"Partial",elements:[{name:"AnnotationsToolbarMetrics"}],raw:"Partial<AnnotationsToolbarMetrics>"},description:""},plugins:{required:!1,tsType:{name:"unknown"},description:""},disableSelectWithoutAnnotations:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showToolTypeIndicators:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},tooltipPlacement:{required:!1,tsType:{name:'AnnotationsToolbarProps["tooltipPlacement"]',raw:'AnnotationsToolbarProps["tooltipPlacement"]'},description:""},getTooltipPopupContainer:{required:!1,tsType:{name:'AnnotationsToolbarProps["getTooltipPopupContainer"]',raw:'AnnotationsToolbarProps["getTooltipPopupContainer"]'},description:""},renderToolButtonBackdrop:{required:!1,tsType:{name:'AnnotationsToolbarProps["renderToolButtonBackdrop"]',raw:'AnnotationsToolbarProps["renderToolButtonBackdrop"]'},description:""}}};const et={ANNOTATION:"annotation",AUTHORING_INSTRUCTION:"authoringInstruction"},Gk=(e,n)=>n?[{kind:le.ALERT,severity:Tn.WARNING,text:n.message},...e]:e,jk=({activePointQueryPickResult:e,activeToolDraftFeedback:n,activeToolDraftState:t,activeToolType:o,authoringInstructionHelpLayout:r,helpLocale:a,includeAuthoringInstruction:i,registry:s,visualOptions:l})=>p.useMemo(()=>{var g;if(!i)return null;const u=qv({activeToolType:o,registry:s});if(!u)return null;const d=((g=u.resolveHelpText)==null?void 0:g.call(u,{draftState:t,pointQueryPickResult:e}))??u.helpText??[],c=Gk(d,n);if(c.length===0)return{plugin:u,content:null,visualOptions:null};const m={kind:et.AUTHORING_INSTRUCTION,plugin:u},y=nn(typeof l=="function"?l(m):l);return{plugin:u,content:p.createElement(Zo,{visualOptions:y},p.createElement(Jo,{items:c,layout:r,locale:a,actionTriggerAlign:Qn.START})),visualOptions:y}},[e,n,t,o,r,a,i,s,l]),So={POINT:"point",LINE:"line",AREA:"area"},Mc=e=>{switch(e){case P.POINT:return So.POINT;case P.DISTANCE:case P.POLYLINE:return So.LINE;case P.AREA_GROUND:case P.AREA_PLANAR:case P.AREA_VERTICAL:return So.AREA;default:return null}},Uk={kind:le.HEADING,text:"Bearbeitungsmodus",level:ft.TITLE},Hk={kind:le.HEADING,text:"Punkt verschieben durch ziehen von",level:ft.SECTION},zk={kind:le.HEADING,text:"Weitere Funktionen",level:ft.SECTION},Vk=[Hk,{kind:le.ACTION,leadingLabel:"Scheibenmitte",inputAlternatives:[[Re.DISC_CENTER]],rightAlignInput:!0,description:"→ auf der Oberfläche des 3D-Modells"},{kind:le.ACTION,leadingLabel:"Äußere Scheibe",inputAlternatives:[[Re.DISC_OUTER]],rightAlignInput:!0,description:"→ in der Höhenebene"},{kind:le.ACTION,leadingLabel:"Blaue Pfeilspitzen",inputAlternatives:[],description:"→ entlang der Höhenachse"}],$k={kind:le.ACTION,inputAlternatives:[[Re.CLICK]],trailingLabel:"auf anderen Punkt",description:"Höhe des Punktes übernehmen"},Wk={kind:le.ACTION,inputAlternatives:[[Re.ESCAPE],[Re.CLICK]],trailingLabel:"außerhalb des Punktes",trailingLabelAfterLastInput:!0,description:"Bearbeitungsmodus verlassen"},vo=e=>({kind:le.ACTION,inputAlternatives:[[Re.BACKSPACE]],description:e}),Yk=e=>{switch(e){case P.POINT:case P.DISTANCE:return vo("Messung löschen");case P.POLYLINE:return vo("Punkt löschen (beim letzten verbleibenden Punkt die Messung)");case P.AREA_GROUND:case P.AREA_PLANAR:case P.AREA_VERTICAL:return vo("Punkt löschen (unter drei Punkten die Messung)");default:return vo("Messung löschen")}},Qk=({toolType:e})=>{const n=Mc(e);if(!n)return[];const t=[zk,...n===So.POINT?[]:[$k],Wk,Yk(e)];return[Uk,...Vk,...t]},Kk=({activeEditedNodeId:e,activeToolType:n,annotationEntries:t,registry:o,authoringInstructionHelpLayout:r,helpLocale:a,includeAuthoringInstruction:i,visualOptions:s})=>p.useMemo(()=>{if(!i||!e||n!==Ln)return null;const l=t.find(y=>y.nodeIds.includes(e))??null;if(!l)return null;const u=o.getPlugin(l.toolType)??o.getPluginsByAnnotationType(l.toolType)[0]??null;if(!u)return null;const d=Qk({toolType:l.toolType});if(d.length===0)return null;const c={kind:et.AUTHORING_INSTRUCTION,plugin:u},m=nn(typeof s=="function"?s(c):s);return{kind:et.AUTHORING_INSTRUCTION,plugin:u,slots:{content:p.createElement(Zo,{visualOptions:m},p.createElement(Jo,{items:d,layout:r,locale:a,actionTriggerAlign:Qn.START})),collapsible:!1},visualOptions:m}},[e,n,t,r,a,i,o,s]),Xs=Object.freeze({coordinates:Object.freeze([]),linkedNodeGroupIds:Object.freeze([]),feedback:null}),Xk=({activeToolType:e,annotationToolDraftStore:n})=>{const t=p.useMemo(()=>e?[e]:[],[e]),o=Rc({draftStore:n,toolTypes:t}),r=e?o[e]??Xs:Xs;return{activeToolDraftState:r,activeToolDraftFeedback:e?r.feedback??null:null}},Jk=Object.freeze([ve.LOCK,ve.DELETE]),Zk=[{kind:le.TEXT,text:"Lange auf einen Punkt der ausgewählten Messung klicken, um den Bearbeitungsmodus zu öffnen."}],eh=({annotation:e,visualOptions:n})=>{const t=Id(e),o={kind:et.ANNOTATION,annotation:e},r=nn(typeof n=="function"?n(o):n);return{...r,readOnly:!!e.locked||t,hiddenActionIds:t?Array.from(new Set([...r.hiddenActionIds,...Jk])):r.hiddenActionIds}},nh=({activeToolDraftFeedback:e,activeToolDraftState:n,activeToolType:t,annotationEntries:o,elevationReferenceAnnotationId:r,exportAnnotationGeoJson:a,authoringInstruction:i,flyToAllAnnotations:s,focusAnnotationId:l,formatOptions:u,nodes:d,registry:c,removeAnnotationById:m,selectedAnnotationId:y,setElevationReferenceAnnotationId:g,setSelectedAnnotationId:f,toggleAnnotationLocked:A,toggleAnnotationVisibility:v,updateAnnotationDisplayName:T,updateAnnotationShortLabel:N,visualOptions:b})=>p.useMemo(()=>{var _;if(!y)return null;const I=o.find(w=>w.id===y)??null;if(!I)return null;const h=c.getPluginsByAnnotationType(I.toolType).find(w=>{var q;return(q=w.infoBox)==null?void 0:q.getSlots})??null;if(!((_=h==null?void 0:h.infoBox)!=null&&_.getSlots))return null;const C=Id(I),k=eh({annotation:I,visualOptions:b}),S=h.infoBox.getSlots({annotation:I,annotationEntries:o,nodes:d,selectedAnnotationId:I.id,setSelectedAnnotationId:f,focusAnnotationId:l,flyToAllAnnotations:s,removeAnnotationById:m,exportAnnotationGeoJson:a,toggleAnnotationVisibility:v,toggleAnnotationLocked:A,elevationReferenceAnnotationId:r,setElevationReferenceAnnotationId:g,updateAnnotationDisplayName:C?()=>{}:T,updateAnnotationShortLabel:C?()=>{}:N,formatOptions:u,infoBoxVisualOptions:k});if(!S)return null;const O=(i==null?void 0:i.plugin.alwaysShowHelpTextWhileActive)===!0&&(n.coordinates.length>0||e!==null),R=t===Ln&&Mc(I.toolType)!==null&&!I.locked&&!C;let L;return R&&(L=p.createElement(Zo,{visualOptions:k,children:p.createElement(Jo,{items:Zk})})),{kind:et.ANNOTATION,annotation:I,instructionContent:O?i.content??void 0:L,instructionToolId:O?i.plugin.id:void 0,slots:S,visualOptions:k}},[e,n,t,o,r,a,i,s,l,u,d,c,m,y,g,f,A,v,T,N,b]),th=({authoringInstructionHelpLayout:e,helpLocale:n,includeAuthoringInstruction:t=!1,visualOptions:o}={})=>{const r=Pc(),a=Bk(),{activeToolDraftFeedback:i,activeToolDraftState:s}=Xk(r),l=jk({activePointQueryPickResult:a,activeToolDraftFeedback:i,activeToolDraftState:s,activeToolType:r.activeToolType,authoringInstructionHelpLayout:e,helpLocale:n,includeAuthoringInstruction:t,registry:r.registry,visualOptions:o}),u=Kk({activeEditedNodeId:r.activeEditedNodeId,activeToolType:r.activeToolType,annotationEntries:r.annotationEntries,registry:r.registry,authoringInstructionHelpLayout:e,helpLocale:n,includeAuthoringInstruction:t,visualOptions:o}),d=nh({activeToolDraftFeedback:i,activeToolDraftState:s,activeToolType:r.activeToolType,annotationEntries:r.annotationEntries,elevationReferenceAnnotationId:r.elevationReferenceAnnotationId,exportAnnotationGeoJson:r.exportAnnotationGeoJson,authoringInstruction:l,flyToAllAnnotations:r.flyToAllAnnotations,focusAnnotationId:r.focusAnnotationId,formatOptions:r.formatOptions,nodes:r.nodes,registry:r.registry,removeAnnotationById:r.removeAnnotationById,selectedAnnotationId:r.selectedAnnotationId,setElevationReferenceAnnotationId:r.setElevationReferenceAnnotationId,setSelectedAnnotationId:r.setSelectedAnnotationId,toggleAnnotationLocked:r.toggleAnnotationLocked,toggleAnnotationVisibility:r.toggleAnnotationVisibility,updateAnnotationDisplayName:r.updateAnnotationDisplayName,updateAnnotationShortLabel:r.updateAnnotationShortLabel,visualOptions:o});return u||(d||r.selectedAnnotationId?d:!(l!=null&&l.content)||!l.visualOptions?null:{kind:et.AUTHORING_INSTRUCTION,plugin:l.plugin,slots:{content:l.content,collapsible:!1},visualOptions:l.visualOptions})},oh=({pixelWidth:e,fitContentWidth:n,useControlLayout:t,controlPosition:o,controlOrder:r,collapsedHorizontalAnchor:a,style:i,visualOptions:s})=>{const l=th({visualOptions:s});return!l||l.kind!==et.ANNOTATION?null:E.jsx(Bu,{pixelWidth:e,fitContentWidth:n,useControlLayout:t,controlPosition:o,controlOrder:r,collapsedHorizontalAnchor:a,style:i,slots:l.slots,visualOptions:l.visualOptions})};oh.__docgenInfo={description:"",methods:[],displayName:"RuntimeAnnotationInfoBox"};const QC="point-move-u-handle",KC=30,rh="rgba(59, 130, 246, 0.98)",ah="rgba(239, 68, 68, 0.98)",ih="rgba(34, 197, 94, 0.98)",Dc="rgba(148, 163, 184, 0.98)",XC=1,jr="rgba(255,255,255,0.92)",sh=.92,JC=48,tt=320,ZC=16,eS=220,nS=48,tS=.25,oS=500,rS=16,aS=12,lh=0,uh=1,dh=2,ch=3,Js=40,It=1.5,iS="row-resize",mh="move",sS=1.3,lS=1.05,uS=.4,dS=4,Zs=8,cS=Kc,mS=.25,yS=1,yh=[{id:"vertical",color:rh,labelKey:"verticalAxis"},{id:"horizontal-east",color:ah,labelKey:"eastAxis"},{id:"horizontal-north",color:ih,labelKey:"northAxis"}],ph=["vertical"],Bc=e=>ph.includes(e),Fc=(e,n)=>yh.map(t=>({id:t.id,color:t.color,title:t.id==="vertical"&&n?n:e[t.labelKey]})),gh=(e,n)=>Fc(e,n).filter(t=>Bc(t.id)),pS="#ffffff",gS=.5,fS="#ffffff",AS=5,fh=.7,vS=It+1,Ah=It/2,vh="rgba(255, 255, 255, 0.95)",el="rgba(255, 255, 255, 0.95)",Th=new ba,bh=(e,n,t)=>{const o=new x,r=new x,a=new x;Yc(e,Th).invert().extractBasis(o,r,a);const i={vertical:a.normalize(),"horizontal-east":o.normalize(),"horizontal-north":r.normalize()};return Fc(n,t).map(s=>({...s,direction:i[s.id]}))},TS=(e,n,t)=>bh(e,n,t).filter(o=>Bc(o.id)),Nh={vertical:new x(0,0,1),"horizontal-east":new x(1,0,0),"horizontal-north":new x(0,1,0)},bS=(e,n,t)=>e&&e.length>0?e.map(o=>({...o,color:o.color??Dc})):gh(n,t).map(o=>({...o,direction:Nh[o.id]})),nl=(e,n,{labels:t,arrowActiveEdgePx:o,onAxisMouseDown:r,onWheel:a})=>p.createElement("svg",{key:`${n.id}-arrow-${e}`,[`data-point-move-axis-arrow-${e}`]:n.id,onMouseDown:i=>r(i,n),onWheel:a,viewBox:Cy(o),style:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -100%)",transformOrigin:"50% 100%",width:`${o}px`,height:`${Sy(o)}px`,display:"block",color:n.color??Dc,zIndex:ch,pointerEvents:"auto",cursor:"move",userSelect:"none",overflow:"visible"},title:n.title??t.genericAxis},p.createElement("path",{"data-point-move-axis-arrow-outline":"true",d:Ey(o),fill:"currentColor",stroke:el,strokeWidth:`${It}`,strokeLinejoin:"round",strokeLinecap:"round",paintOrder:"stroke",vectorEffect:"non-scaling-stroke",shapeRendering:"geometricPrecision"}),p.createElement("path",{"data-point-move-axis-arrow-rim":"true",d:"",fill:"none",stroke:el,strokeOpacity:fh,strokeWidth:`${It}`,strokeLinejoin:"round",vectorEffect:"non-scaling-stroke",shapeRendering:"geometricPrecision",style:{display:"none"}}),p.createElement("circle",{"data-point-move-axis-arrow-tip":"true",cx:o/2,cy:0,r:Ah,fill:vh})),Ih=e=>{const{axisCandidates:n,labels:t,axisUiLengthPx:o,axisArrowOffsetPx:r,axisWidthPx:a,showAxes:i,showRotationHandle:s,snapPlaneDragToGround:l,centerPlaneDragCursor:u,onDiscPlaneMouseDown:d,onRotationHandleMouseDown:c,onCenterMouseDown:m,onWheel:y}=e;return p.createElement("div",{style:{position:"relative",width:`${o}px`,height:`${o}px`,pointerEvents:"none",userSelect:"none",overflow:"visible"}},...(i?n:[]).flatMap(g=>[p.createElement("div",{key:`${g.id}-line`,"data-point-move-axis-line":g.id,style:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)",width:`${r*2}px`,height:`${a}px`,background:"rgba(255,255,255,0.82)",opacity:1,zIndex:lh,pointerEvents:"none"}}),nl("up",g,e),nl("down",g,e)]),p.createElement("svg",{key:"disc-outline-svg","data-point-move-disc-outline-svg":"true",viewBox:`-160 -160 ${tt} ${tt}`,width:`${tt}`,height:`${tt}`,style:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)",width:`${tt}px`,height:`${tt}px`,overflow:"hidden",pointerEvents:"none",zIndex:uh}},...n.map(g=>p.createElement("path",{key:`disc-outline-path-${g.id}`,"data-point-move-disc-outline-path":g.id,d:"",fill:"none",stroke:jr,strokeWidth:`${It}`,strokeLinejoin:"round",strokeLinecap:"round",vectorEffect:"non-scaling-stroke",shapeRendering:"geometricPrecision",style:{opacity:sh,display:"none",pointerEvents:"none"}})),p.createElement("path",{key:"disc-interaction-path","data-point-move-disc-interaction-path":"true",d:"",onMouseDown:d,onWheel:y,fill:"rgba(255,255,255,0.001)",stroke:"none",style:{display:"none",pointerEvents:"auto",cursor:mh}},p.createElement("title",null,t.outerDisc)),...s?[p.createElement("ellipse",{key:"disc-rotation-handle","data-point-move-disc-rotation-handle":"true",cx:"0",cy:"0",rx:`${Zs}`,ry:`${Zs}`,onMouseDown:c,onWheel:y,fill:jr,stroke:jr,strokeWidth:`${It}`,vectorEffect:"non-scaling-stroke",style:{display:"none",pointerEvents:"auto",cursor:"grab"}})]:[]),p.createElement("div",{"data-point-move-axis-center-hit":"true",onMouseDown:m,onWheel:y,style:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)",width:`${Js}px`,height:`${Js}px`,borderRadius:"50%",background:"transparent",zIndex:dh,pointerEvents:"auto",cursor:u,userSelect:"none"},title:l?t.surfacePlane:t.freePlane}))};Ih.__docgenInfo={description:"The overlay markup; `layoutPointMoveGizmoOverlay` positions it every frame.",methods:[],displayName:"createPointMoveGizmoOverlayContent",props:{axisCandidates:{required:!0,tsType:{name:"Array",elements:[{name:"AnnotationGizmoAxisCandidate"}],raw:"AnnotationGizmoAxisCandidate[]"},description:""},labels:{required:!0,tsType:{name:"AnnotationGizmoLabels"},description:""},axisUiLengthPx:{required:!0,tsType:{name:"number"},description:""},axisArrowOffsetPx:{required:!0,tsType:{name:"number"},description:""},axisWidthPx:{required:!0,tsType:{name:"number"},description:""},arrowActiveEdgePx:{required:!0,tsType:{name:"number"},description:""},showAxes:{required:!0,tsType:{name:"boolean"},description:""},showRotationHandle:{required:!0,tsType:{name:"boolean"},description:""},snapPlaneDragToGround:{required:!0,tsType:{name:"boolean"},description:""},centerPlaneDragCursor:{required:!0,tsType:{name:"string"},description:""},onAxisMouseDown:{required:!0,tsType:{name:"signature",type:"function",raw:`(
  event: ReactMouseEvent<HTMLDivElement>,
  axisCandidate: AnnotationGizmoAxisCandidate
) => void`,signature:{arguments:[{type:{name:"ReactMouseEvent",elements:[{name:"HTMLDivElement"}],raw:"ReactMouseEvent<HTMLDivElement>"},name:"event"},{type:{name:"AnnotationGizmoAxisCandidate"},name:"axisCandidate"}],return:{name:"void"}}},description:""},onDiscPlaneMouseDown:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: ReactMouseEvent<SVGPathElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",elements:[{name:"SVGPathElement"}],raw:"ReactMouseEvent<SVGPathElement>"},name:"event"}],return:{name:"void"}}},description:""},onRotationHandleMouseDown:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: ReactMouseEvent<SVGCircleElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",elements:[{name:"SVGCircleElement"}],raw:"ReactMouseEvent<SVGCircleElement>"},name:"event"}],return:{name:"void"}}},description:""},onCenterMouseDown:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: ReactMouseEvent<HTMLDivElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",elements:[{name:"HTMLDivElement"}],raw:"ReactMouseEvent<HTMLDivElement>"},name:"event"}],return:{name:"void"}}},description:""},onWheel:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: ReactWheelEvent) => void",signature:{arguments:[{type:{name:"ReactWheelEvent"},name:"event"}],return:{name:"void"}}},description:""}}};const kh=new sl,Gc=(e,n,t)=>{const o=e.canvas.getBoundingClientRect();return{x:n-o.left,y:t-o.top}},jc=(e,n,t)=>{if(e.isDestroyed())return null;const o=e.getPickRay(Gc(e,n,t));return o?new ll(o.origin,o.direction):null},NS=(e,n,t,o,r)=>{let a=0;const i=new x;for(let s=0;s<r;s+=1){const l=s/r*Uo;i.copy(n).addScaledVector(t.xAxis,Math.cos(l)).addScaledVector(t.yAxis,Math.sin(l));const u=e.worldToScreen(i);if(!u)continue;const d=Math.hypot(u.x-o.x,u.y-o.y);Number.isFinite(d)&&d>a&&(a=d)}return a},IS=(e,n,t,o,r,a,i=8192)=>{const s=[],l=new x;for(let u=0;u<r;u+=1){const d=u/r*Uo;l.copy(n).addScaledVector(t.xAxis,Math.cos(d)*o).addScaledVector(t.yAxis,Math.sin(d)*o);const c=e.worldToScreen(l);if(!c)continue;const m=c.x-a.x,y=c.y-a.y;!Number.isFinite(m)||!Number.isFinite(y)||Math.abs(m)>i||Math.abs(y)>i||s.push({x:m,y})}return s},kS=(e,n,t,o,r)=>{const a=jc(e,n,t);return a?xy(a,o,r):null},hh=(e,n,t,o,r)=>{const a=jc(e,n,t);return a?hl(a,kh.setFromNormalAndCoplanarPoint(r,o),Rl):null},hS=(e,n,t,o,r,a,i)=>{const s=hh(e,n,t,o,r);if(!s)return null;const l=new x().subVectors(s,o),u=l.dot(a),d=l.dot(i);return!Number.isFinite(u)||!Number.isFinite(d)||Math.hypot(u,d)<=Rl?null:Math.atan2(d,u)},CS=(e,n,t,o)=>{var i,s;if(e.isDestroyed())return null;const r=Gc(e,n,t);let a=null;try{a=e.resolveSurfacePick(r,{resolveGlobePosition:!0,excludeDragSampleOccluders:(o==null?void 0:o.includeDragSampleExclusions)===!0})}catch{}return((i=a==null?void 0:a.surfacePositionECEF)==null?void 0:i.clone())??((s=a==null?void 0:a.globePositionECEF)==null?void 0:s.clone())??null},Ch=1e5,Ur=1e-6,SS=({project:e,origin:n,direction:t,offsetPx:o,edgePx:r,heightPx:a,anchorCanvasPosition:i,cameraPosition:s,segments:l=24})=>{const u=R=>{const L=e(R);return L?Math.hypot(L.x-i.x,L.y-i.y):null},d=new x,c=u(d.copy(n).addScaledVector(t,1));if(c===null||c<Ur)return null;let m=o/c;for(let R=0;R<2;R+=1){const L=u(d.copy(n).addScaledVector(t,m));if(L===null||L<Ur)return null;m*=o/L}if(!Number.isFinite(m)||m>Ch)return null;const y=n.clone().addScaledVector(t,m),g=e(y);if(!g)return null;const f=y.clone().sub(s),A=new x().crossVectors(t,f);A.lengthSq()<1e-12&&(A.set(1,0,0).cross(t),A.lengthSq()<1e-12&&A.set(0,1,0).cross(t)),A.normalize();const v=Math.max(m*.1,1e-6),T=e(d.copy(y).addScaledVector(A,v));if(!T)return null;const N=Math.hypot(T.x-g.x,T.y-g.y)/v;if(N<Ur)return null;const b=r/2/N,I=a/N,h=new x().crossVectors(t,A).normalize(),C=R=>{const L=e(R);if(!L)return null;const _=L.x-i.x,w=L.y-i.y;return Number.isFinite(_)&&Number.isFinite(w)?{x:_,y:w}:null},k=C(d.copy(y).addScaledVector(t,I));if(!k)return null;const S=[];for(let R=0;R<l;R+=1){const L=R/l*Uo,_=C(d.copy(y).addScaledVector(A,Math.cos(L)*b).addScaledVector(h,Math.sin(L)*b));if(!_)return null;S.push(_)}const O=f.dot(t)>0;return{hull:Ip([k,...S]),baseRim:O?S:null,apex:k}};export{mh as $,Lp as A,qe as B,Mg as C,It as D,Yd as E,Xb as F,uc as G,Pe as H,fc as I,dc as J,Ra as K,XT as L,mp as M,aC as N,eS as O,ic as P,rh as Q,Je as R,Dc as S,iC as T,gh as U,lh as V,ch as W,tt as X,uh as Y,jr as Z,sh as _,cC as a,hS as a$,Zs as a0,dh as a1,QC as a2,KC as a3,ZC as a4,dS as a5,uS as a6,cS as a7,mS as a8,yS as a9,qT as aA,PT as aB,_T as aC,MT as aD,of as aE,rf as aF,Mu as aG,hf as aH,VT as aI,Cf as aJ,YT as aK,aA as aL,ve as aM,pC as aN,gC as aO,fC as aP,vC as aQ,bC as aR,IC as aS,Ln as aT,PC as aU,Z as aV,TS as aW,wa as aX,NS as aY,MC as aZ,kS as a_,rC as aa,nS as ab,tS as ac,oS as ad,XC as ae,sS as af,lS as ag,JC as ah,rS as ai,aS as aj,Bc as ak,iS as al,yp as am,Js as an,Fc as ao,ts as ap,ns as aq,_C as ar,su as as,Sf as at,jT as au,Qt as av,$d as aw,on as ax,Ef as ay,xT as az,mC as b,qC as b$,hh as b0,CS as b1,Gc as b2,vS as b3,SS as b4,IS as b5,fS as b6,pS as b7,gS as b8,bS as b9,$C as bA,_b as bB,jC as bC,Jt as bD,tr as bE,yf as bF,_u as bG,Se as bH,uC as bI,Sp as bJ,lC as bK,zC as bL,ca as bM,ti as bN,Xa as bO,Zt as bP,If as bQ,GC as bR,HN as bS,DN as bT,OC as bU,cc as bV,Fo as bW,Dt as bX,yC as bY,lc as bZ,WC as b_,Ih as ba,AS as bb,$n as bc,pt as bd,dC as be,kp as bf,sC as bg,Vr as bh,au as bi,iu as bj,Ju as bk,be as bl,Dk as bm,Fk as bn,oh as bo,Pc as bp,va as bq,it as br,Og as bs,Rg as bt,oe as bu,Do as bv,qb as bw,ar as bx,xb as by,ir as bz,xp as c,hC as c0,FI as c1,BI as c2,Qa as c3,Xd as c4,LT as c5,wT as c6,UC as c7,HC as c8,Kd as c9,Ir as cA,Kg as cB,Pu as cC,Fg as cD,Md as cE,Gy as cF,bi as cG,nf as ca,Oe as cb,wC as cc,xC as cd,Tf as ce,Re as cf,Tn as cg,VC as ch,CC as ci,SC as cj,EC as ck,FC as cl,MI as cm,BC as cn,Xt as co,DI as cp,sd as cq,YC as cr,Mn as cs,Ae as ct,RC as cu,dn as cv,DC as cw,Fn as cx,LC as cy,Uv as cz,wp as d,je as e,Qn as f,P as g,Jo as h,le as i,Jn as j,we as k,nn as l,Zo as m,dA as n,Lf as o,iA as p,lA as q,Qk as r,qg as s,mt as t,Y as u,vr as v,ne as w,Ce as x,Su as y,Jb as z};
