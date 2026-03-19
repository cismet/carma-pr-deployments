import{j as p}from"./jsx-runtime-DCY474Ph.js";import{r as P}from"./index-f9CH5uyH.js";import{R as G}from"./ResponsiveStatusBar-B_p--FQH.js";import{t as N,p as O,a as q}from"./svgProjection-DW7bqrGF.js";import"./isMobile-Ce1rahkm.js";import"./compact-item-FVaAjRHK.js";import"./index-o4jIgCFn.js";import"./three.module-BBFlFxNL.js";const $=1200,b=800,B=64,V=5,A=e=>e*Math.PI/180,r=e=>e.toFixed(3).padStart(7," "),L=(e,t)=>{const{x:n,y:s,z:o}=e;return[{x:n-t,y:s-t,z:o},{x:n+t,y:s-t,z:o},{x:n+t,y:s+t,z:o},{x:n-t,y:s+t,z:o}]},X=(e,t,n)=>{const s=[];for(let o=0;o<n;o+=1){const a=o/n*Math.PI*2;s.push({x:e.x+Math.cos(a)*t,y:e.y+Math.sin(a)*t,z:e.z})}return s},J=(e,t,n,s)=>{const o=[],a=s*2;for(let i=0;i<a;i+=1){const x=i/a*Math.PI*2-Math.PI/2,m=i%2===0?t:n;o.push({x:e.x+Math.cos(x)*m,y:e.y+Math.sin(x)*m,z:e.z})}return o},K=({fovDeg:e,zoomPx:t,m00:n,m01:s,m02:o,m03:a,m10:i,m11:x,m12:m,m13:u,m20:y,m21:f,m22:v,m23:j})=>{const R=P.useMemo(()=>[n,s,o,a,i,x,m,u,y,f,v,j,0,0,0,1],[n,s,o,a,i,x,m,u,y,f,v,j]),T=$/b,_=Math.min(140,Math.max(10,e)),h=Math.tan(A(_)/2),D=P.useMemo(()=>E=>{const c=N(E,R,{matrixOrder:"row-major"});if(!Number.isFinite(c.z)||c.z<=.05||!Number.isFinite(h)||h<=1e-6)return null;const S=c.x/(c.z*h*T),d=c.y/(c.z*h);return O({x:S,y:d,z:c.z},[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],{matrixOrder:"row-major",perspectiveDivide:!1,ndcToScreen:(M,g,z)=>({x:$*.5+M*t,y:b*.5-g*t,z})})},[T,h,R,t]),k=P.useMemo(()=>{const E=L({x:-1.7,y:0,z:0},.55),c=X({x:0,y:0,z:0},.58,B),S=J({x:1.7,y:0,z:0},.62,.28,V),d=M=>{const g=M.map(D).filter(z=>z!==null);return g.length!==M.length||g.length<3?"":q(g,{close:!0,digits:2})};return{squarePath:d(E),circlePath:d(c),starPath:d(S)}},[D]),F=P.useMemo(()=>["view matrix (4x4 row-major)",`[${r(n)} ${r(s)} ${r(o)} ${r(a)}]`,`[${r(i)} ${r(x)} ${r(m)} ${r(u)}]`,`[${r(y)} ${r(f)} ${r(v)} ${r(j)}]`,`[${r(0)} ${r(0)} ${r(0)} ${r(1)}]`].join(`
`),[n,s,o,a,i,x,m,u,y,f,v,j]);return p.jsxs("div",{style:{width:"100vw",height:"100vh",background:"#0b1220",position:"relative",overflow:"hidden"},children:[p.jsx("div",{style:{position:"absolute",left:0,right:0,top:0,zIndex:10,pointerEvents:"none"},children:p.jsx(G,{tone:"dark",text:p.jsx("pre",{style:{margin:0,width:"100%",textAlign:"center",whiteSpace:"pre",lineHeight:1.25,fontSize:11},children:F}),barHeight:"86px"})}),p.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${$} ${b}`,style:{display:"block"},children:[p.jsx("rect",{x:0,y:0,width:$,height:b,fill:"rgba(15, 23, 42, 1)"}),p.jsx("path",{d:k.squarePath,fill:"rgba(56,189,248,0.18)",stroke:"rgba(56,189,248,0.98)",strokeWidth:2,vectorEffect:"non-scaling-stroke"}),p.jsx("path",{d:k.circlePath,fill:"rgba(34,197,94,0.18)",stroke:"rgba(34,197,94,0.98)",strokeWidth:2,vectorEffect:"non-scaling-stroke"}),p.jsx("path",{d:k.starPath,fill:"rgba(248,113,113,0.18)",stroke:"rgba(248,113,113,0.98)",strokeWidth:2,strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"})]})]})},l={control:{type:"range",min:-2,max:2,step:.01}},I={control:{type:"range",min:-8,max:8,step:.05}},nt={title:"Mapping/Gizmo",component:K,parameters:{layout:"fullscreen"},argTypes:{fovDeg:{control:{type:"range",min:10,max:140,step:1}},zoomPx:{control:{type:"range",min:120,max:800,step:1}},m00:l,m01:l,m02:l,m03:I,m10:l,m11:l,m12:l,m13:I,m20:l,m21:l,m22:l,m23:I}},w={name:"SVG Reprojection",args:{fovDeg:55,zoomPx:380,m00:1,m01:0,m02:0,m03:0,m10:0,m11:1,m12:0,m13:0,m20:0,m21:0,m22:1,m23:4.2}};var W,C,H;w.parameters={...w.parameters,docs:{...(W=w.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: "SVG Reprojection",
  args: {
    fovDeg: 55,
    zoomPx: 380,
    m00: 1,
    m01: 0,
    m02: 0,
    m03: 0,
    m10: 0,
    m11: 1,
    m12: 0,
    m13: 0,
    m20: 0,
    m21: 0,
    m22: 1,
    m23: 4.2
  }
}`,...(H=(C=w.parameters)==null?void 0:C.docs)==null?void 0:H.source}}};const st=["Shapes"];export{w as Shapes,st as __namedExportsOrder,nt as default};
