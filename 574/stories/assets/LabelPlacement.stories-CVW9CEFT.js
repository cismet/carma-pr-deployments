import{j as s}from"./jsx-runtime-DCY474Ph.js";import{r as b}from"./index-f9CH5uyH.js";import{R as le}from"./ResponsiveStatusBar-B_p--FQH.js";import{L as H}from"./AnchoredLabelVisualizer-B9JsJhDb.js";import{u as _}from"./useLineVisualizers-B-fvUhUA.js";import{c as k}from"./line-generator-DTZotypo.js";import"./isMobile-Ce1rahkm.js";import"./compact-item-FVaAjRHK.js";import"./index-o4jIgCFn.js";import"./button-DjGx0WwH.js";import"./useLabelOverlay-njbM62x6.js";const M=1e-4,ae=1e-6,T=(n,e)=>({x:n,y:e}),j=n=>{const e=n%360;return e<0?e+360:e},re=(n,e)=>n.x===e.x&&n.y===e.y,U=n=>n.length<2?[]:re(n[0],n[n.length-1])?n.slice(0,-1):n.slice(),ie=n=>{if(n.length<3)return 0;let e=0;for(let o=0;o<n.length;o+=1){const r=n[o],i=n[(o+1)%n.length];e+=r.x*i.y-i.x*r.y}return e},se=n=>{const e=U(n);if(e.length<3)return null;const o=ie(e);return Math.abs(o)<=ae?null:o>=0?"ccw":"cw"},ce=({inputWindingOrder:n,windingPolicy:e})=>e==="enforce-cw"?"cw":e==="enforce-ccw"?"ccw":n??"ccw",de=({dx:n,dy:e,lineLengthPx:o,normalX:r,normalY:i})=>{if(o<=M)return 0;const c=Math.atan2(e,n)*180/Math.PI,d=n/o,l=e/o,a=d*i-l*r>=0?c:c+180,u=j(a);return u>90&&u<270?j(u+180):u},ge=({polygon:n,closed:e=!0,side:o="outside",offsetPx:r=10,rotationMode:i="readable",windingPolicy:c="enforce-ccw",includeDegenerateSegments:d=!1})=>{const l=U(n);if(l.length<2)return[];const h=e?l.length:l.length-1;if(h<=0)return[];const a=se(l),u=ce({inputWindingOrder:a,windingPolicy:c}),t=u==="ccw"?1:-1,y=[];for(let p=0;p<h;p+=1){const m=l[p],g=l[(p+1)%l.length],f=g.x-m.x,P=g.y-m.y,x=Math.hypot(f,P);if(x<=M&&!d)continue;const v=(m.x+g.x)*.5,R=(m.y+g.y)*.5,K=x<=M?0:-P/x,Q=x<=M?0:f/x,F=K*t,W=Q*t,E=-F,B=-W,z=o==="inside"?F:E,O=o==="inside"?W:B,Z=T(v+z*r,R+O*r),ee=T(v+F*r,R+W*r),ne=T(v+E*r,R+B*r),te=Math.atan2(P,f)*180/Math.PI,oe=i==="clockwise"?j(te):de({dx:f,dy:P,lineLengthPx:x,normalX:z,normalY:O});y.push({segmentIndex:p,start:m,end:g,anchor:Z,rotationDeg:oe,lineLengthPx:x,inputWindingOrder:a,resolvedWindingOrder:u,insideReferencePoint:ee,outsideReferencePoint:ne})}return y},V={position:"relative",width:"100%",height:"100vh",overflow:"hidden",background:"#fff"},be={position:"absolute",width:20,height:20,transform:"translate(-50%, -50%)",border:"none",outline:"none",backgroundColor:"transparent",cursor:"none",touchAction:"none",padding:0,zIndex:20},S=(n,e)=>({x:n,y:e}),A=(n,e,o)=>Math.min(Math.max(n,e),o),L=(n,e=2)=>Number.isFinite(n)?n.toFixed(e):"0",q=n=>{const[e,o]=b.useState({width:0,height:0});return b.useEffect(()=>{const r=n.current;if(!r)return;const i=()=>{o({width:r.clientWidth,height:r.clientHeight})};if(i(),typeof ResizeObserver>"u")return window.addEventListener("resize",i),()=>{window.removeEventListener("resize",i)};const c=new ResizeObserver(()=>{i()});return c.observe(r),()=>{c.disconnect()}},[n]),e},w=({anchorId:n,position:e,color:o,containerRef:r,onChange:i})=>{const c=b.useRef(!1),d=b.useRef(null),l=typeof window<"u"&&window.devicePixelRatio>0?1/window.devicePixelRatio:1,h=b.useCallback(()=>{if(typeof document>"u")return;const t=document.documentElement;d.current===null&&(d.current=t.style.cursor??""),t.style.cursor="none"},[]),a=b.useCallback(()=>{typeof document>"u"||d.current!==null&&(document.documentElement.style.cursor=d.current,d.current=null)},[]);b.useEffect(()=>()=>{a()},[a]);const u=b.useCallback(t=>{const y=r.current;if(!y)return;const p=y.getBoundingClientRect(),m=A(t.clientX-p.left,0,p.width),g=A(t.clientY-p.top,0,p.height);i(S(m,g))},[r,i]);return s.jsxs("button",{type:"button","aria-label":`${n} anchor`,onPointerDown:t=>{c.current=!0,h(),t.currentTarget.setPointerCapture(t.pointerId),u(t)},onPointerMove:t=>{c.current&&u(t)},onPointerUp:t=>{c.current=!1,a(),t.currentTarget.hasPointerCapture(t.pointerId)&&t.currentTarget.releasePointerCapture(t.pointerId)},onPointerCancel:t=>{c.current=!1,a(),t.currentTarget.hasPointerCapture(t.pointerId)&&t.currentTarget.releasePointerCapture(t.pointerId)},onLostPointerCapture:()=>{c.current=!1,a()},style:{...be,left:e.x,top:e.y},children:[s.jsx("span",{style:{position:"absolute",left:"50%",top:0,width:l,height:"100%",transform:"translateX(-50%)",backgroundColor:o,opacity:.5}}),s.jsx("span",{style:{position:"absolute",left:0,top:"50%",width:"100%",height:l,transform:"translateY(-50%)",backgroundColor:o,opacity:.5}})]})},J=({placement:n,color:e})=>{const o=typeof window<"u"&&window.devicePixelRatio>0?1/window.devicePixelRatio:1;return n?s.jsxs(s.Fragment,{children:[s.jsxs("div",{style:{position:"absolute",left:n.textX,top:n.textY,width:16,height:16,transform:"translate(-50%, -50%)",pointerEvents:"none",zIndex:18},children:[s.jsx("span",{style:{position:"absolute",left:"50%",top:0,width:o,height:"100%",transform:"translateX(-50%)",backgroundColor:e,opacity:.6}}),s.jsx("span",{style:{position:"absolute",left:0,top:"50%",width:"100%",height:o,transform:"translateY(-50%)",backgroundColor:e,opacity:.6}})]}),s.jsx("div",{style:{position:"absolute",left:n.textX,top:n.textY,width:64,height:o,transform:`translateY(-50%) rotate(${n.angleDeg}deg)`,transformOrigin:"0 50%",backgroundColor:e,opacity:.7,pointerEvents:"none",zIndex:18}})]}):null},pe=({start:n,end:e,offsetPx:o=14})=>{const r=e.x-n.x,i=e.y-n.y,c=Math.hypot(r,i);if(c<=1e-4)return null;const d=(n.x+e.x)*.5,l=(n.y+e.y)*.5,h=-i/c,a=r/c,t=(Math.atan2(i,r)*180/Math.PI%360+360)%360,y=t>90&&t<270?(t+180)%360:t;return{textX:d+h*o,textY:l+a*o,angleDeg:y}},ue=({start:n,end:e,targetReferencePoint:o,offsetPx:r=14})=>{const i=e.x-n.x,c=e.y-n.y,d=Math.hypot(i,c);if(d<=1e-4)return null;const l=(n.x+e.x)*.5,h=(n.y+e.y)*.5;let a=-c/d,u=i/d;if(o){const x=o.x-l,v=o.y-h;x*a+v*u<0&&(a=-a,u=-u)}const t=Math.atan2(c,i)*180/Math.PI,y=i/d,p=c/d,f=((y*u-p*a>=0?t:t+180)%360+360)%360,P=f>90&&f<270?(f+180)%360:f;return{textX:l+a*r,textY:h+u*r,angleDeg:P}},he=({a:n,b:e,c:o,sidePreference:r,windingOrder:i,onToggleSidePreference:c})=>{const d=`${n.x},${n.y} ${e.x},${e.y} ${o.x},${o.y}`;return s.jsxs("svg",{width:"100%",height:"100%",style:{position:"absolute",inset:0,overflow:"visible",pointerEvents:"auto",zIndex:16},children:[s.jsx("polygon",{points:d,fill:"rgba(249, 115, 22, 0.5)",vectorEffect:"non-scaling-stroke",style:{pointerEvents:"auto",cursor:"pointer"},onClick:l=>{l.preventDefault(),l.stopPropagation(),c()}}),s.jsx("text",{x:(n.x+e.x+o.x)/3,y:(n.y+e.y+o.y)/3,textAnchor:"middle",dominantBaseline:"middle",fill:"#111827",fontSize:12,fontFamily:"monospace",pointerEvents:"none",children:`${i.toUpperCase()} • ${r}`})]})},ye=({containerRef:n,args:e})=>{const{width:o,height:r}=q(n),i=o>0?o:1280,c=r>0?r:720,d=b.useMemo(()=>({start:S(i*.24,c*.44),end:S(i*.76,c*.56)}),[c,i]),[l,h]=b.useState(d.start),[a,u]=b.useState(d.end);b.useEffect(()=>{h(d.start),u(d.end)},[d]);const t=b.useMemo(()=>pe({start:l,end:a,offsetPx:14}),[a,l]),y=a.x-l.x,p=a.y-l.y,m=Math.hypot(y,p),g=Math.atan2(p,y)*180/Math.PI,f=b.useMemo(()=>[`start (${L(l.x,1)}, ${L(l.y,1)})`,`end (${L(a.x,1)}, ${L(a.y,1)})`,`length ${L(m,1)}px`,`lineAngle ${L(g,1)}°`,`labelAngle ${t?`${L(t.angleDeg,1)}°`:"n/a"}`],[a.x,a.y,t,g,m,l.x,l.y]),P=b.useMemo(()=>[...k({id:"single-line-label-debug",start:l,end:a,stroke:e.stroke,strokeWidth:e.strokeWidth,opacity:e.opacity,hitTargetStrokeWidth:e.hitTargetStrokeWidth,dashed:e.dashed,capStyle:e.capStyle,dashLengthRatio:e.dashLengthRatio,dashGapRatio:e.dashGapRatio,collapseNegativeGaps:e.collapseNegativeGaps,collapseCapThresholdEffectiveGapRatio:e.collapseCapThresholdEffectiveGapRatio,showDistanceLabel:e.showDistanceLabel,labelText:e.labelText.trim().length>0?e.labelText:void 0,labelColor:e.labelColor,labelStroke:e.labelStroke,labelFontSize:e.labelFontSize,labelFontFamily:e.labelFontFamily,labelFontWeight:e.labelFontWeight,labelPill:e.labelPill,labelPillBackgroundColor:e.labelPillBackgroundColor,labelPillBorderColor:e.labelPillBorderColor,labelPillBorderWidth:e.labelPillBorderWidth,labelMinLineLengthPx:e.labelMinLineLengthPx,labelOffsetPx:e.labelOffsetPx,labelFlippedBaselineOffsetPx:e.labelFlippedBaselineOffsetPx,labelRotationMode:e.labelRotationMode,labelDominantBaseline:e.labelDominantBaseline,visible:e.visible,isHidden:e.isHidden,contentSignature:e.contentSignature.trim().length>0?e.contentSignature:void 0})],[e,a,l]);return _(P,!0),s.jsxs(s.Fragment,{children:[s.jsx(J,{placement:t,color:"rgba(220, 38, 38, 0.95)"}),s.jsx(w,{anchorId:"single-line-debug-start",position:l,color:"#1d4ed8",containerRef:n,onChange:h}),s.jsx(w,{anchorId:"single-line-debug-end",position:a,color:"#1d4ed8",containerRef:n,onChange:u}),s.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,zIndex:1800,pointerEvents:"none"},children:s.jsx(le,{label:"svg label placement",values:f})})]})},me=({containerRef:n,requestedSidePreference:e})=>{const{width:o,height:r}=q(n),i=o>0?o:1280,c=r>0?r:720,d=b.useMemo(()=>({start:S(i*.24,c*.36),end:S(i*.76,c*.46),apex:S(i*.56,c*.2)}),[c,i]),[l,h]=b.useState(d.start),[a,u]=b.useState(d.end),[t,y]=b.useState(d.apex),[p,m]=b.useState(e);b.useEffect(()=>{h(d.start),u(d.end),y(d.apex)},[d]),b.useEffect(()=>{m(e)},[e]);const g=b.useMemo(()=>ge({polygon:[l,a,t],closed:!0,side:p,offsetPx:72,rotationMode:"readable",windingPolicy:"respect-input"}).find(x=>x.segmentIndex===0)??null,[t,a,p,l]),f=b.useMemo(()=>g?ue({start:l,end:a,targetReferencePoint:p==="outside"?g.outsideReferencePoint:g.insideReferencePoint,offsetPx:14}):null,[a,g,p,l]),P=b.useMemo(()=>[...k({id:"polygon-segment-label-debug-edge-0",start:l,end:a,stroke:"rgba(30, 64, 175, 0.95)",strokeWidth:10,dashed:!0,capStyle:"round",dashLengthRatio:1,dashGapRatio:1,labelText:`triangle edge (${p})`,labelColor:"#111827",labelStroke:"rgba(255, 255, 255, 0.98)",labelFontSize:14,labelFontFamily:"monospace",labelOffsetPx:14,getLabelOutsideReferencePoint:p==="outside"?()=>(g==null?void 0:g.outsideReferencePoint)??null:void 0,getLabelInsideReferencePoint:p==="inside"?()=>(g==null?void 0:g.insideReferencePoint)??null:void 0}),...k({id:"polygon-segment-label-debug-edge-1",start:a,end:t,stroke:"rgba(30, 64, 175, 0.95)",strokeWidth:10,dashed:!0,capStyle:"round",dashLengthRatio:1,dashGapRatio:1}),...k({id:"polygon-segment-label-debug-edge-2",start:t,end:l,stroke:"rgba(30, 64, 175, 0.95)",strokeWidth:10,dashed:!0,capStyle:"round",dashLengthRatio:1,dashGapRatio:1})],[t,a,g==null?void 0:g.insideReferencePoint,g==null?void 0:g.outsideReferencePoint,p,l]);return _(P,!0),s.jsxs(s.Fragment,{children:[g?s.jsx(he,{a:l,b:a,c:t,sidePreference:p,windingOrder:g.resolvedWindingOrder,onToggleSidePreference:()=>m(x=>x==="outside"?"inside":"outside")}):null,s.jsx(J,{placement:f,color:"rgba(220, 38, 38, 0.95)"}),s.jsx(w,{anchorId:"polygon-segment-debug-start",position:l,color:"#1d4ed8",containerRef:n,onChange:h}),s.jsx(w,{anchorId:"polygon-segment-debug-end",position:a,color:"#1d4ed8",containerRef:n,onChange:u}),s.jsx(w,{anchorId:"polygon-segment-debug-apex",position:t,color:"#1d4ed8",containerRef:n,onChange:y})]})},fe=({args:n})=>{const e=b.useRef(null);return s.jsx("div",{ref:e,style:V,children:s.jsx(H,{containerRef:e,children:s.jsx(ye,{containerRef:e,args:n})})})},xe=({sidePreference:n})=>{const e=b.useRef(null);return s.jsx("div",{ref:e,style:V,children:s.jsx(H,{containerRef:e,children:s.jsx(me,{containerRef:e,requestedSidePreference:n})})})},We={title:"Providers/LabelOverlay",parameters:{layout:"fullscreen",controls:{expanded:!1,sort:"requiredFirst"}}},C={name:"Single Line",argTypes:{stroke:{control:{type:"color"},table:{category:"Line"}},strokeWidth:{control:{type:"range",min:1,max:30,step:1},table:{category:"Line"}},opacity:{control:{type:"range",min:0,max:1,step:.01},table:{category:"Line"}},hitTargetStrokeWidth:{control:{type:"range",min:1,max:64,step:1},table:{category:"Line"}},visible:{control:{type:"boolean"},table:{category:"Line"}},isHidden:{control:{type:"boolean"},table:{category:"Line"}},contentSignature:{control:{type:"text"},table:{category:"Line"}},dashed:{control:{type:"boolean"},table:{category:"Dash"}},capStyle:{control:{type:"inline-radio"},options:["round","square"],table:{category:"Dash"}},dashLengthRatio:{control:{type:"range",min:1,max:12,step:.1},table:{category:"Dash"}},dashGapRatio:{control:{type:"range",min:-1,max:12,step:.1},table:{category:"Dash"}},collapseNegativeGaps:{control:{type:"boolean"},table:{category:"Dash"}},collapseCapThresholdEffectiveGapRatio:{control:{type:"range",min:-1,max:2,step:.01},table:{category:"Dash"}},showDistanceLabel:{control:{type:"boolean"},table:{category:"Label"}},labelText:{control:{type:"text"},table:{category:"Label"}},labelColor:{control:{type:"color"},table:{category:"Label"}},labelStroke:{control:{type:"color"},table:{category:"Label"}},labelFontSize:{control:{type:"range",min:8,max:40,step:1},table:{category:"Label"}},labelFontFamily:{control:{type:"text"},table:{category:"Label"}},labelFontWeight:{control:{type:"text"},table:{category:"Label"}},labelPill:{control:{type:"boolean"},table:{category:"Label"}},labelPillBackgroundColor:{control:{type:"color"},table:{category:"Label"}},labelPillBorderColor:{control:{type:"color"},table:{category:"Label"}},labelPillBorderWidth:{control:{type:"range",min:0,max:8,step:.5},table:{category:"Label"}},labelMinLineLengthPx:{control:{type:"range",min:0,max:500,step:1},table:{category:"Label"}},labelOffsetPx:{control:{type:"range",min:-64,max:128,step:1},table:{category:"Label"}},labelFlippedBaselineOffsetPx:{control:{type:"range",min:-64,max:128,step:1},table:{category:"Label"}},labelRotationMode:{control:{type:"inline-radio"},options:["auto","clockwise"],table:{category:"Label"}},labelDominantBaseline:{control:{type:"select"},options:["auto","middle","central","text-before-edge","text-after-edge","alphabetic","hanging","ideographic"],table:{category:"Label"}}},args:{stroke:"rgba(30, 64, 175, 0.95)",strokeWidth:10,opacity:1,hitTargetStrokeWidth:12,dashed:!0,capStyle:"round",dashLengthRatio:1,dashGapRatio:1.5,collapseNegativeGaps:!0,collapseCapThresholdEffectiveGapRatio:-.1,showDistanceLabel:!1,labelText:"single line",labelColor:"#111827",labelStroke:"rgba(255, 255, 255, 0.98)",labelFontSize:14,labelFontFamily:"monospace",labelFontWeight:"600",labelPill:!1,labelPillBackgroundColor:"rgba(255,255,255,0.9)",labelPillBorderColor:"rgba(17,24,39,0.35)",labelPillBorderWidth:1,labelMinLineLengthPx:0,labelOffsetPx:14,labelFlippedBaselineOffsetPx:0,labelRotationMode:"auto",labelDominantBaseline:"middle",visible:!0,isHidden:!1,contentSignature:""},render:n=>s.jsx(fe,{args:n})},D={name:"Polygon Segment",argTypes:{polygonSidePreference:{control:{type:"inline-radio"},options:["outside","inside"],table:{category:"Label Placement"}}},args:{polygonSidePreference:"outside"},render:n=>s.jsx(xe,{sidePreference:n.polygonSidePreference??"outside"})};var I,N,G;C.parameters={...C.parameters,docs:{...(I=C.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: "Single Line",
  argTypes: {
    stroke: {
      control: {
        type: "color"
      },
      table: {
        category: "Line"
      }
    },
    strokeWidth: {
      control: {
        type: "range",
        min: 1,
        max: 30,
        step: 1
      },
      table: {
        category: "Line"
      }
    },
    opacity: {
      control: {
        type: "range",
        min: 0,
        max: 1,
        step: 0.01
      },
      table: {
        category: "Line"
      }
    },
    hitTargetStrokeWidth: {
      control: {
        type: "range",
        min: 1,
        max: 64,
        step: 1
      },
      table: {
        category: "Line"
      }
    },
    visible: {
      control: {
        type: "boolean"
      },
      table: {
        category: "Line"
      }
    },
    isHidden: {
      control: {
        type: "boolean"
      },
      table: {
        category: "Line"
      }
    },
    contentSignature: {
      control: {
        type: "text"
      },
      table: {
        category: "Line"
      }
    },
    dashed: {
      control: {
        type: "boolean"
      },
      table: {
        category: "Dash"
      }
    },
    capStyle: {
      control: {
        type: "inline-radio"
      },
      options: ["round", "square"],
      table: {
        category: "Dash"
      }
    },
    dashLengthRatio: {
      control: {
        type: "range",
        min: 1,
        max: 12,
        step: 0.1
      },
      table: {
        category: "Dash"
      }
    },
    dashGapRatio: {
      control: {
        type: "range",
        min: -1,
        max: 12,
        step: 0.1
      },
      table: {
        category: "Dash"
      }
    },
    collapseNegativeGaps: {
      control: {
        type: "boolean"
      },
      table: {
        category: "Dash"
      }
    },
    collapseCapThresholdEffectiveGapRatio: {
      control: {
        type: "range",
        min: -1,
        max: 2,
        step: 0.01
      },
      table: {
        category: "Dash"
      }
    },
    showDistanceLabel: {
      control: {
        type: "boolean"
      },
      table: {
        category: "Label"
      }
    },
    labelText: {
      control: {
        type: "text"
      },
      table: {
        category: "Label"
      }
    },
    labelColor: {
      control: {
        type: "color"
      },
      table: {
        category: "Label"
      }
    },
    labelStroke: {
      control: {
        type: "color"
      },
      table: {
        category: "Label"
      }
    },
    labelFontSize: {
      control: {
        type: "range",
        min: 8,
        max: 40,
        step: 1
      },
      table: {
        category: "Label"
      }
    },
    labelFontFamily: {
      control: {
        type: "text"
      },
      table: {
        category: "Label"
      }
    },
    labelFontWeight: {
      control: {
        type: "text"
      },
      table: {
        category: "Label"
      }
    },
    labelPill: {
      control: {
        type: "boolean"
      },
      table: {
        category: "Label"
      }
    },
    labelPillBackgroundColor: {
      control: {
        type: "color"
      },
      table: {
        category: "Label"
      }
    },
    labelPillBorderColor: {
      control: {
        type: "color"
      },
      table: {
        category: "Label"
      }
    },
    labelPillBorderWidth: {
      control: {
        type: "range",
        min: 0,
        max: 8,
        step: 0.5
      },
      table: {
        category: "Label"
      }
    },
    labelMinLineLengthPx: {
      control: {
        type: "range",
        min: 0,
        max: 500,
        step: 1
      },
      table: {
        category: "Label"
      }
    },
    labelOffsetPx: {
      control: {
        type: "range",
        min: -64,
        max: 128,
        step: 1
      },
      table: {
        category: "Label"
      }
    },
    labelFlippedBaselineOffsetPx: {
      control: {
        type: "range",
        min: -64,
        max: 128,
        step: 1
      },
      table: {
        category: "Label"
      }
    },
    labelRotationMode: {
      control: {
        type: "inline-radio"
      },
      options: ["auto", "clockwise"],
      table: {
        category: "Label"
      }
    },
    labelDominantBaseline: {
      control: {
        type: "select"
      },
      options: ["auto", "middle", "central", "text-before-edge", "text-after-edge", "alphabetic", "hanging", "ideographic"],
      table: {
        category: "Label"
      }
    }
  },
  args: {
    stroke: "rgba(30, 64, 175, 0.95)",
    strokeWidth: 10,
    opacity: 1,
    hitTargetStrokeWidth: 12,
    dashed: true,
    capStyle: "round",
    dashLengthRatio: 1,
    dashGapRatio: 1.5,
    collapseNegativeGaps: true,
    collapseCapThresholdEffectiveGapRatio: -0.1,
    showDistanceLabel: false,
    labelText: "single line",
    labelColor: "#111827",
    labelStroke: "rgba(255, 255, 255, 0.98)",
    labelFontSize: 14,
    labelFontFamily: "monospace",
    labelFontWeight: "600",
    labelPill: false,
    labelPillBackgroundColor: "rgba(255,255,255,0.9)",
    labelPillBorderColor: "rgba(17,24,39,0.35)",
    labelPillBorderWidth: 1,
    labelMinLineLengthPx: 0,
    labelOffsetPx: 14,
    labelFlippedBaselineOffsetPx: 0,
    labelRotationMode: "auto",
    labelDominantBaseline: "middle",
    visible: true,
    isHidden: false,
    contentSignature: ""
  },
  render: args => <SingleLineLabelDebugStory args={args} />
}`,...(G=(N=C.parameters)==null?void 0:N.docs)==null?void 0:G.source}}};var X,Y,$;D.parameters={...D.parameters,docs:{...(X=D.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: "Polygon Segment",
  argTypes: {
    polygonSidePreference: {
      control: {
        type: "inline-radio"
      },
      options: ["outside", "inside"],
      table: {
        category: "Label Placement"
      }
    }
  },
  args: {
    polygonSidePreference: "outside"
  },
  render: args => <PolygonSegmentLabelDebugStory sidePreference={args.polygonSidePreference ?? "outside"} />
}`,...($=(Y=D.parameters)==null?void 0:Y.docs)==null?void 0:$.source}}};const Te=["SingleLine","PolygonSegment"];export{D as PolygonSegment,C as SingleLine,Te as __namedExportsOrder,We as default};
