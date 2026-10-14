import{j as O}from"./jsx-runtime-DNp_qQjF.js";import{r as g,b as bi,R as Ec}from"./index-CSJjS6Ct.js";import{f as hr,C as me,a as Ke,r as Oc}from"./index-D9NkO_DI.js";import{c as nl,a as Go,w as nr,b as tl,K as Lc,l as ia,z as Ti,n as Rc}from"./camera-local-mercator-fit-z_7ESa2h.js";import{d as Kt,r as eo,i as ol,b as rl,T as al,M as wc,P as xc}from"./angles-O4gcnBa7.js";import{F as Ct,bv as qc,bw as _c,aq as Pc,ap as Mc,bx as Dc,by as Bc,bz as Fc,V as Gc,aX as jc,bA as Hc,z as zc,bB as Vc,bC as Uc,bD as $c,bE as Wc}from"./index-A73S1lKT.js";import{T as il}from"./index-CXgqBzOb.js";import{h as Yc,l as sl,i as ll,k as Kc,q as ul,s as Qc,t as Xc,u as Zc,e as Jc,A as em,d as nm,c as tm,a as om,b as rm}from"./StripChartPanel-MDqMJoPP.js";import{r as am}from"./index-D1cknlJ6.js";import{w as Sr,x as dl,y as To,z as im,A as sm,B as lm,C as um,i as dm,D as cm,E as mm,F as ym,S as pm,G as gm,l as Da,f as tr,s as cl,H as nn,t as fm,I as ml,J as yl,K as pl,m as gl,n as Cr,M as Er,N as Am,L as vm}from"./useLineSegmentVisualizers-CE2INj9H.js";import{F as Ft}from"./locales-DbHdB30_.js";import{L as bm,f as ft}from"./length-format-BQI28fDZ.js";import{V as Qn}from"./constants-C6-_E4xW.js";import{c as Be}from"./clamp-co6UzHBn.js";import{V as w,s as gn,j as Tm,i as km}from"./three.module-DbFHiiZ-.js";import{q as fl,h as Al,s as vl,f as Nm,i as Im,j as hm,g as Sm,d as bl,b as or,n as Cm,a as Em,c as Om}from"./geometry2d-CXoA_VhM.js";import{c as rr}from"./plane-basis-D9-oqs7B.js";import{A as Lm}from"./cssAxisGizmoElement-cEPQY2Ts.js";/* empty css                                      */import{i as Rm}from"./is-finite-number-DNiDh1l_.js";import{i as wm}from"./plane-intersections-DhJfyQJx.js";import{r as xm,P as Tl,s as qm,c as _m,a as Pm,L as Mm}from"./computePointLabelLayout-DH2-ovTr.js";import{u as Dm}from"./useLineVisualizers-hzMo-gOT.js";import{c as no,r as Bm,e as Fm,g as Gm,n as qe}from"./geospatial-camera-basis-BB4xtwMp.js";import{z as jm}from"./angle-normalization-9MH7zpFM.js";const Hm=(e,n,t)=>{const o=Be((t-e)/(n-e),0,1);return o*o*(3-2*o)},Ba={SCREEN:"screen",WORLD:"world"},ki=[1,2,5,10],Yn=e=>{if(!Number.isFinite(e)||e<=0)return e;const n=10**Math.floor(Math.log10(e));let t=ki[0]*n;for(const o of ki){const r=o*n;Math.abs(r-e)<Math.abs(t-e)&&(t=r)}return t},zm=({targetScreenPx:e,pixelPerWorld:n,quantize:t})=>{if(!Number.isFinite(n)||n<=0)return e>0?e:0;const o=e/n;return t?Yn(o):o},Nh=(e,n,t,o)=>!Number.isFinite(e)||e<=Qn?0:Be(n/e,t,o),kl=2,Nl=(e,n,t=kl)=>{if(!Number.isFinite(e)||e<=0)return!0;if(!Number.isFinite(n)||n<=0)return!1;const o=n/e;return o>=t||o<=1/t},Ih=()=>{let e=null,n=null;return{resolve:({currentScale:t,targetScreenPx:o,fallback:r,stepFactor:a=kl,quantize:i=!1,minWorldSize:s=0})=>!Number.isFinite(t)||t<=0?e??r:((e===null||Nl(n??0,t,a))&&(e=Math.max(zm({targetScreenPx:o,pixelPerWorld:t,quantize:i}),s),n=t),e),reset:()=>{e=null,n=null}}},Vm={minSegments:48,maxSegments:256,targetEdgePx:2.5},hh=(e,n={})=>{const{minSegments:t,maxSegments:o,targetEdgePx:r}={...Vm,...n};if(!Number.isFinite(e)||e<=0)return t;const a=2*Math.PI*e,i=Math.ceil(a/Math.max(.5,r));return Math.min(o,Math.max(t,i))},On=Object.freeze({epsilon:1e-6,polylabelPrecision:.5,polylabelMaxCells:2e4,interiorSampleGrid:18,minInteriorSampleGrid:6}),Um=(e,n,t)=>{const o=t.x-n.x,r=t.y-n.y,a=o*o+r*r;return a<=On.epsilon**2?0:Be(((e.x-n.x)*o+(e.y-n.y)*r)/a,0,1)},$m=(e,n,t)=>{const o=Um(e,n,t);return{x:n.x+(t.x-n.x)*o,y:n.y+(t.y-n.y)*o}},Il=(e,n,t)=>{const o=$m(e,n,t);return Math.hypot(e.x-o.x,e.y-o.y)},hl=e=>e.map((n,t)=>[n,e[(t+1)%e.length]]),Fa=(e,n,t=On.epsilon)=>{if(e.length<3)return!1;let o=!1;for(const[r,a]of hl(e)){if(Il(n,r,a)<=t)return!0;a.y>n.y!=r.y>n.y&&n.x<(r.x-a.x)*(n.y-a.y)/(r.y-a.y+Number.EPSILON)+a.x&&(o=!o)}return o},Sl=(e,n)=>e.length<2?0:Math.min(...hl(e).map(([t,o])=>Il(n,t,o))),Wm=(e,n)=>(Fa(e,n)?1:-1)*Sl(e,n),Cl=e=>{const n=e.map(a=>a.x),t=e.map(a=>a.y),o=Math.min(...n),r=Math.min(...t);return{minX:o,minY:r,width:Math.max(...n)-o,height:Math.max(...t)-r}},Ym=(e,n=On.interiorSampleGrid)=>{const{minX:t,minY:o,width:r,height:a}=Cl(e);if(r<=0||a<=0)return null;const i=Math.max(On.minInteriorSampleGrid,Math.floor(n));let s=null;for(let u=0;u<=i;u+=1)for(let l=0;l<=i;l+=1){const d={x:t+r*l/i,y:o+a*u/i};if(!Fa(e,d))continue;const c=Sl(e,d);(!s||c>s.radius)&&(s={center:d,radius:c})}return s},Km=(e,n=On.polylabelPrecision,t=On.polylabelMaxCells)=>{if(e.length<3||e.some(p=>!Number.isFinite(p.x)||!Number.isFinite(p.y)))return null;const{minX:o,minY:r,width:a,height:i}=Cl(e),s=Math.min(a,i);if(a<=0||i<=0||s<=On.epsilon)return null;const u=(p,f,A)=>{const v=Wm(e,{x:p,y:f});return{x:p,y:f,h:A,d:v,max:v+A*Math.SQRT2}},l=[];for(let p=o;p<o+a;p+=s)for(let f=r;f<r+i;f+=s)l.push(u(p+s/2,f+s/2,s/2));const d=fl({points:e,degenerateAreaEpsilon:On.epsilon}),c=u(o+a/2,r+i/2,0);let m=d?u(d.x,d.y,0):c;c.d>m.d&&(m=c);const y=Math.max(.1,n);for(let p=0;l.length>0&&p<t;p+=1){const f=l.reduce((T,b,h)=>b.max>l[T].max?h:T,0),[A]=l.splice(f,1);if(!A)break;if(A.d>m.d&&(m=A),A.max-m.d<=y)continue;const v=A.h/2;l.push(u(A.x-v,A.y-v,v),u(A.x+v,A.y-v,v),u(A.x-v,A.y+v,v),u(A.x+v,A.y+v,v))}return Number.isFinite(m.d)&&m.d>0?{center:{x:m.x,y:m.y},radius:m.d}:Ym(e)},Qm=(e,n)=>{const t=n.map(s=>({x:s.x-e.x,y:s.y-e.y})),o=t.map(s=>Math.hypot(s.x,s.y));if(o.some(s=>s<1e-9))return null;const r=t.map((s,u)=>{const l=t[(u+1)%t.length];return Math.tan(Math.atan2(s.x*l.y-s.y*l.x,s.x*l.x+s.y*l.y)/2)}),a=o.map((s,u)=>(r[(u-1+o.length)%o.length]+r[u])/s),i=a.reduce((s,u)=>s+u,0);return!Number.isFinite(i)||Math.abs(i)<1e-12?null:a.map(s=>s/i)},Xm=(e,n)=>n.reduce((t,o,r)=>Al(t,vl(o,e[r]??0)),{x:0,y:0}),Zm=e=>{if(e.length<3)return[...e];const n=[...e].sort((i,s)=>i.x-s.x||i.y-s.y),t=(i,s,u)=>(s.x-i.x)*(u.y-i.y)-(s.y-i.y)*(u.x-i.x),o=i=>i.reduce((s,u)=>{for(;s.length>=2&&t(s[s.length-2],s[s.length-1],u)<=0;)s.pop();return s.push(u),s},[]),r=o(n),a=o([...n].reverse());return[...r.slice(0,-1),...a.slice(0,-1)]},Jm=[[0,1],[0,2],[1,2]],ey=32,ny=1e-10,Ce=(e,n,t)=>{var o;return((o=e[n])==null?void 0:o[t])??0},ze=(e,n,t,o)=>{const r=e[n];r&&(r[t]=o)},ty=e=>Jm.map(([n,t])=>({row:n,column:t,value:Math.abs(Ce(e,n,t))})).reduce((n,t)=>t.value>n.value?t:n),oy=(e,n)=>{const t=[[0,0,0],[0,0,0],[0,0,0]];return e.forEach(o=>{const r=[o.x-n.x,o.y-n.y,o.z-n.z];for(let a=0;a<3;a+=1)for(let i=a;i<3;i+=1){const s=Ce(t,a,i)+(r[a]??0)*(r[i]??0);ze(t,a,i,s),ze(t,i,a,s)}}),t},ry=e=>{const n=e.map(r=>[...r]),t=[[1,0,0],[0,1,0],[0,0,1]];for(let r=0;r<ey;r+=1){const{row:a,column:i,value:s}=ty(n);if(s<=ny)break;const u=Ce(n,a,a),l=Ce(n,i,i),d=Ce(n,a,i),c=.5*Math.atan2(2*d,l-u),m=Math.cos(c),y=Math.sin(c);for(let p=0;p<3;p+=1){if(p===a||p===i)continue;const f=Ce(n,p,a),A=Ce(n,p,i),v=m*f-y*A,T=y*f+m*A;ze(n,p,a,v),ze(n,a,p,v),ze(n,p,i,T),ze(n,i,p,T)}ze(n,a,a,m*m*u-2*y*m*d+y*y*l),ze(n,i,i,y*y*u+2*y*m*d+m*m*l),ze(n,a,i,0),ze(n,i,a,0);for(let p=0;p<3;p+=1){const f=Ce(t,p,a),A=Ce(t,p,i);ze(t,p,a,m*f-y*A),ze(t,p,i,y*f+m*A)}}let o=0;for(let r=1;r<3;r+=1)Ce(n,r,r)<Ce(n,o,o)&&(o=r);return[Ce(t,0,o),Ce(t,1,o),Ce(t,2,o)]},El=Qn*Qn,Ol=(e,n,t,o=e.clone())=>{const r=t.lengthSq();if(r<=El)return o.copy(e);const a=e.clone().sub(n).dot(t);return o.copy(e).addScaledVector(t,-a/r)},Sh=(e,n,t)=>{const o=t.length();return o<=Qn?0:e.clone().sub(n).dot(t)/o},Ga=(e,n,t,o=e.clone())=>(o.crossVectors(n.clone().sub(e),t.clone().sub(e)),o.lengthSq()<=El?null:o.normalize()),Ch=e=>{let n=0,t=0,o=0;for(let r=0;r<e.length;r+=1){const a=e[r],i=e[(r+1)%e.length];n+=(a.y-i.y)*(a.z+i.z),t+=(a.z-i.z)*(a.x+i.x),o+=(a.x-i.x)*(a.y+i.y)}return n*n+t*t+o*o>0?e[0].clone().set(n,t,o).normalize():e.length>=3?Ga(e[0],e[1],e[2]):null},Ll=(e,n,t,o,r)=>{if(!Number.isFinite(o)||o<=0)return null;const a=n.clone().sub(e),i=t.clone().sub(e),s=a.length(),u=i.length();if(s<=Qn||u<=Qn)return null;const l=a.normalize(),d=i.normalize(),c=Be(l.dot(d),-1,1),m=Math.acos(c);if(!Number.isFinite(m)||m<=.001)return null;const y=d.clone().addScaledVector(l,-c);if(y.length()<=1e-5)return null;y.normalize();const p=Math.min(o,s*.999,u*.999);if(p<=Qn)return null;const f=Math.max(8,r);return Array.from({length:f+1},(A,v)=>{const T=m*(v/f);return l.clone().multiplyScalar(Math.cos(T)).addScaledVector(y,Math.sin(T)).normalize().multiplyScalar(p).add(e)})},ay=1e-12,z=(e,n)=>nl(Kt(e.longitude),Kt(e.latitude),e.altitude,n),Jn=e=>{const n=Go(e);return{longitude:eo(n.longitude),latitude:eo(n.latitude),altitude:n.altitude}},sa=(e,n=new w)=>n.copy(e).lengthSq()>ay?n.normalize():n.set(0,0,1),go=(e,n=new w)=>n.copy(nr(e).up),Eh=(e,n,t)=>{const o=z({...e,altitude:0}).lerp(z({...n,altitude:0}),t),{longitude:r,latitude:a}=Go(o);return{longitude:eo(r),latitude:eo(a),altitude:e.altitude+(n.altitude-e.altitude)*t}},Oh=(e,n)=>{const t=tl(z({...n,altitude:0}),z({...e,altitude:0}));return Math.hypot(t.east,t.north)},he=(e,n=new w)=>n.set(e.x,e.y,e.z),yn=e=>({x:e.x,y:e.y,z:e.z}),Rl=ol,iy=(e,n,t=Rl)=>{const o=n.clone().sub(e);if(!(o.lengthSq()>0))return null;o.normalize();const{north:r,up:a}=nr(e),i=Math.abs(a.dot(o))>1-1e-12?r:a;return{positionECEF:e.clone(),directionECEF:o,upECEF:no(i,o).normalize(),verticalFovRad:t}},Ni=e=>Fm({forward:e.directionECEF,up:e.upECEF,right:new w().crossVectors(e.directionECEF,e.upECEF)}),sy=(e,n,t)=>{const{forward:o,up:r}=Bm(Ni(e).slerp(Ni(n),t));return{positionECEF:Lc(e.positionECEF,n.positionECEF,t),directionECEF:o,upECEF:r,verticalFovRad:ia(e.verticalFovRad,n.verticalFovRad,t)}},ly={prefix:"fac",iconName:"row-resize",icon:[512,512,[],"","M278.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-64 64c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8l32 0l0 96l-214.7 0l0 64l214.7 0l0 96l-32 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l64 64c12.5 12.5 32.8 12.5 45.3 0l64-64c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8l-32 0l0-96l214.7 0l0-64l-214.7 0l0-96l32 0c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-64-64z"]},uy=sl+ll,dy=10,Nn=Yc/2,Ze=sl,In=ll,hn=Kc,cy=Object.freeze([{key:"right",pathD:`M ${Ze} 0 L ${Ze+hn} ${-1.5} L ${Ze+In} ${-1.5} L ${Ze+In} ${Nn} L ${Ze+hn} ${Nn} Z`},{key:"left",pathD:`M ${-5-In} ${-1.5} L ${-5-hn} ${-1.5} L -5 0 L ${-5-hn} ${Nn} L ${-5-In} ${Nn} Z`},{key:"bottom",pathD:`M ${-1.5} ${Ze+hn} L 0 ${Ze} L ${Nn} ${Ze+hn} L ${Nn} ${Ze+In} L ${-1.5} ${Ze+In} Z`},{key:"top",pathD:`M ${-1.5} ${-5-In} L ${Nn} ${-5-In} L ${Nn} ${-5-hn} L 0 -5 L ${-1.5} ${-5-hn} Z`}]),Ii=100,hi=300,la=({additionalAttributes:e="",fill:n,pathDefinitions:t,stroke:o,strokeLinejoin:r,strokeWidth:a})=>t.map(({pathD:i})=>`<path d="${i}" fill="${n}"${typeof o=="string"?` stroke="${o}"`:""}${typeof r=="string"?` stroke-linejoin="${r}"`:""}${typeof a=="number"?` stroke-width="${a}"`:""}${e}/>`).join(""),wl=({contentMarkup:e,rootStyleText:n,sizePx:t,viewBox:o})=>[`<svg xmlns="http://www.w3.org/2000/svg" width="${t}" height="${t}" viewBox="${o}" preserveAspectRatio="xMidYMid meet" shape-rendering="geometricPrecision"${typeof n=="string"&&n.length>0?` style="${n}"`:""}>`,e,"</svg>"].join(""),Lh=({pathDefinitions:e,foregroundFill:n,rootStyleText:t,sizePx:o,viewBox:r})=>wl({contentMarkup:la({fill:n,pathDefinitions:e}),rootStyleText:t,sizePx:o,viewBox:r}),Rh=({pathDefinitions:e,shadowBlurPx:n,shadowStrokeColor:t,shadowStrokeLinejoin:o,shadowStrokeWidth:r,rootStyleText:a,sizePx:i,viewBox:s})=>{const u=Math.max(n,0),l=Math.max(r,0),d="cursor-shadow-blur";return wl({contentMarkup:[u>0?`<defs><filter id="${d}" x="-${Ii}%" y="-${Ii}%" width="${hi}%" height="${hi}%"><feDropShadow dx="0" dy="0" stdDeviation="${u}" flood-color="${t}" flood-opacity="1"/></filter></defs>`:"",l>0?la({additionalAttributes:u>0?` filter="url(#${d})"`:"",fill:t,pathDefinitions:e,stroke:t,strokeLinejoin:o,strokeWidth:l}):la({additionalAttributes:u>0?` filter="url(#${d})"`:"",fill:t,pathDefinitions:e})].join(""),rootStyleText:a,sizePx:i,viewBox:s})},xl="http://www.w3.org/2000/svg",Si=100,Ci=300;let Ei=0;const At=e=>document.createElementNS(xl,e),ql=(e,{blendMode:n=ul.NORMAL,sizePx:t,viewBox:o})=>{e.setAttribute("xmlns",xl),e.setAttribute("width",`${t}`),e.setAttribute("height",`${t}`),e.setAttribute("viewBox",o),e.setAttribute("preserveAspectRatio","xMidYMid meet"),e.setAttribute("shape-rendering","geometricPrecision"),e.style.display="block",e.style.overflow="visible",e.style.mixBlendMode=n,e.style.pointerEvents="none"},_l=({filterId:e,fill:n,pathDefinitions:t,parentElement:o,stroke:r,strokeLinejoin:a,strokeWidth:i})=>{t.forEach(({pathD:s})=>{const u=At("path");u.setAttribute("d",s),u.setAttribute("fill",n),typeof r=="string"&&u.setAttribute("stroke",r),typeof a=="string"&&u.setAttribute("stroke-linejoin",a),typeof i=="number"&&u.setAttribute("stroke-width",`${i}`),typeof e=="string"&&e.length>0&&u.setAttribute("filter",`url(#${e})`),o.appendChild(u)})},my=(e,n,t)=>{if(!(n>0))return;Ei+=1;const o=`annotation-cursor-shadow-blur-${Ei}`,r=At("defs"),a=At("filter"),i=At("feDropShadow");return a.setAttribute("id",o),a.setAttribute("x",`-${Si}%`),a.setAttribute("y",`-${Si}%`),a.setAttribute("width",`${Ci}%`),a.setAttribute("height",`${Ci}%`),i.setAttribute("dx","0"),i.setAttribute("dy","0"),i.setAttribute("flood-color",t),i.setAttribute("flood-opacity","1"),i.setAttribute("stdDeviation",`${n}`),a.appendChild(i),r.appendChild(a),e.appendChild(r),o},yy=({blendMode:e="normal",foregroundFill:n,pathDefinitions:t,sizePx:o,viewBox:r})=>{const a=At("svg");return ql(a,{blendMode:e,sizePx:o,viewBox:r}),_l({fill:n,parentElement:a,pathDefinitions:t}),a},py=({blendMode:e="normal",pathDefinitions:n,shadowBlurPx:t,shadowStrokeColor:o,shadowStrokeLinejoin:r,shadowStrokeWidth:a,sizePx:i,viewBox:s})=>{const u=At("svg"),l=Math.max(a,0),d=my(u,Math.max(t,0),o);return ql(u,{blendMode:e,sizePx:i,viewBox:s}),_l({fill:o,filterId:d,parentElement:u,pathDefinitions:n,stroke:l>0?o:void 0,strokeLinejoin:l>0?r:void 0,strokeWidth:l>0?l:void 0}),u},Oi=({blendMode:e="normal",svgElement:n})=>{const t=document.createElement("div");return t.style.position="absolute",t.style.inset="0",t.style.pointerEvents="none",t.style.mixBlendMode="normal",n.style.mixBlendMode=e,t.appendChild(n),t},gy=({canvasSizePx:e,foregroundBlendMode:n="normal",foregroundFill:t,pathDefinitions:o,shadowBlendMode:r="normal",shadowBlurPx:a,shadowStrokeColor:i,shadowStrokeLinejoin:s,shadowStrokeWidth:u,showAura:l,viewBox:d})=>{const c=document.createElement("div");return c.style.position="absolute",c.style.left="0",c.style.top="0",c.style.width=`${e}px`,c.style.height=`${e}px`,c.style.pointerEvents="none",c.style.willChange="transform",l&&c.appendChild(Oi({blendMode:r,svgElement:py({blendMode:r,pathDefinitions:o,shadowBlurPx:a,shadowStrokeColor:i,shadowStrokeLinejoin:s,shadowStrokeWidth:u,sizePx:e,viewBox:d})})),c.appendChild(Oi({blendMode:n,svgElement:yy({blendMode:n,foregroundFill:t,pathDefinitions:o,sizePx:e,viewBox:d})})),c},Or={de:{backspace:"Rücktaste",escape:"Escape",shift:"Umschalt"},en:{backspace:"Backspace",escape:"Escape",shift:"Shift"}},fy=e=>e||(Qc||Xc?"macos":Zc?"windows":"other"),Ay=e=>{const n=e==null?void 0:e.split("-")[0];return n&&Or[n]?Or[n]:Or.en},vy=(e,n)=>`${e==="macos"?"⌫":"←"} ${n.backspace}`;function fe(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var by=typeof Symbol=="function"&&Symbol.observable||"@@observable",Li=by,Lr=()=>Math.random().toString(36).substring(7).split("").join("."),Ty={INIT:`@@redux/INIT${Lr()}`,REPLACE:`@@redux/REPLACE${Lr()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${Lr()}`},jo=Ty;function ja(e){if(typeof e!="object"||e===null)return!1;let n=e;for(;Object.getPrototypeOf(n)!==null;)n=Object.getPrototypeOf(n);return Object.getPrototypeOf(e)===n||Object.getPrototypeOf(e)===null}function Pl(e,n,t){if(typeof e!="function")throw new Error(fe(2));if(typeof n=="function"&&typeof t=="function"||typeof t=="function"&&typeof arguments[3]=="function")throw new Error(fe(0));if(typeof n=="function"&&typeof t>"u"&&(t=n,n=void 0),typeof t<"u"){if(typeof t!="function")throw new Error(fe(1));return t(Pl)(e,n)}let o=e,r=n,a=new Map,i=a,s=0,u=!1;function l(){i===a&&(i=new Map,a.forEach((A,v)=>{i.set(v,A)}))}function d(){if(u)throw new Error(fe(3));return r}function c(A){if(typeof A!="function")throw new Error(fe(4));if(u)throw new Error(fe(5));let v=!0;l();const T=s++;return i.set(T,A),function(){if(v){if(u)throw new Error(fe(6));v=!1,l(),i.delete(T),a=null}}}function m(A){if(!ja(A))throw new Error(fe(7));if(typeof A.type>"u")throw new Error(fe(8));if(typeof A.type!="string")throw new Error(fe(17));if(u)throw new Error(fe(9));try{u=!0,r=o(r,A)}finally{u=!1}return(a=i).forEach(T=>{T()}),A}function y(A){if(typeof A!="function")throw new Error(fe(10));o=A,m({type:jo.REPLACE})}function p(){const A=c;return{subscribe(v){if(typeof v!="object"||v===null)throw new Error(fe(11));function T(){const h=v;h.next&&h.next(d())}return T(),{unsubscribe:A(T)}},[Li](){return this}}}return m({type:jo.INIT}),{dispatch:m,subscribe:c,getState:d,replaceReducer:y,[Li]:p}}function ky(e){Object.keys(e).forEach(n=>{const t=e[n];if(typeof t(void 0,{type:jo.INIT})>"u")throw new Error(fe(12));if(typeof t(void 0,{type:jo.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(fe(13))})}function Ny(e){const n=Object.keys(e),t={};for(let a=0;a<n.length;a++){const i=n[a];typeof e[i]=="function"&&(t[i]=e[i])}const o=Object.keys(t);let r;try{ky(t)}catch(a){r=a}return function(i={},s){if(r)throw r;let u=!1;const l={};for(let d=0;d<o.length;d++){const c=o[d],m=t[c],y=i[c],p=m(y,s);if(typeof p>"u")throw s&&s.type,new Error(fe(14));l[c]=p,u=u||p!==y}return u=u||o.length!==Object.keys(i).length,u?l:i}}function Ho(...e){return e.length===0?n=>n:e.length===1?e[0]:e.reduce((n,t)=>(...o)=>n(t(...o)))}function Iy(...e){return n=>(t,o)=>{const r=n(t,o);let a=()=>{throw new Error(fe(15))};const i={getState:r.getState,dispatch:(u,...l)=>a(u,...l)},s=e.map(u=>u(i));return a=Ho(...s)(r.dispatch),{...r,dispatch:a}}}function hy(e){return ja(e)&&"type"in e&&typeof e.type=="string"}var Ml=Symbol.for("immer-nothing"),Ri=Symbol.for("immer-draftable"),Ge=Symbol.for("immer-state");function We(e,...n){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var Et=Object.getPrototypeOf;function et(e){return!!e&&!!e[Ge]}function An(e){var n;return e?Dl(e)||Array.isArray(e)||!!e[Ri]||!!((n=e.constructor)!=null&&n[Ri])||ir(e)||sr(e):!1}var Sy=Object.prototype.constructor.toString();function Dl(e){if(!e||typeof e!="object")return!1;const n=Et(e);if(n===null)return!0;const t=Object.hasOwnProperty.call(n,"constructor")&&n.constructor;return t===Object?!0:typeof t=="function"&&Function.toString.call(t)===Sy}function zo(e,n){ar(e)===0?Reflect.ownKeys(e).forEach(t=>{n(t,e[t],e)}):e.forEach((t,o)=>n(o,t,e))}function ar(e){const n=e[Ge];return n?n.type_:Array.isArray(e)?1:ir(e)?2:sr(e)?3:0}function ua(e,n){return ar(e)===2?e.has(n):Object.prototype.hasOwnProperty.call(e,n)}function Bl(e,n,t){const o=ar(e);o===2?e.set(n,t):o===3?e.add(t):e[n]=t}function Cy(e,n){return e===n?e!==0||1/e===1/n:e!==e&&n!==n}function ir(e){return e instanceof Map}function sr(e){return e instanceof Set}function Hn(e){return e.copy_||e.base_}function da(e,n){if(ir(e))return new Map(e);if(sr(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);const t=Dl(e);if(n===!0||n==="class_only"&&!t){const o=Object.getOwnPropertyDescriptors(e);delete o[Ge];let r=Reflect.ownKeys(o);for(let a=0;a<r.length;a++){const i=r[a],s=o[i];s.writable===!1&&(s.writable=!0,s.configurable=!0),(s.get||s.set)&&(o[i]={configurable:!0,writable:!0,enumerable:s.enumerable,value:e[i]})}return Object.create(Et(e),o)}else{const o=Et(e);if(o!==null&&t)return{...e};const r=Object.create(o);return Object.assign(r,e)}}function Ha(e,n=!1){return lr(e)||et(e)||!An(e)||(ar(e)>1&&(e.set=e.add=e.clear=e.delete=Ey),Object.freeze(e),n&&Object.entries(e).forEach(([t,o])=>Ha(o,!0))),e}function Ey(){We(2)}function lr(e){return Object.isFrozen(e)}var Oy={};function nt(e){const n=Oy[e];return n||We(0,e),n}var to;function Fl(){return to}function Ly(e,n){return{drafts_:[],parent_:e,immer_:n,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function wi(e,n){n&&(nt("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=n)}function ca(e){ma(e),e.drafts_.forEach(Ry),e.drafts_=null}function ma(e){e===to&&(to=e.parent_)}function xi(e){return to=Ly(to,e)}function Ry(e){const n=e[Ge];n.type_===0||n.type_===1?n.revoke_():n.revoked_=!0}function qi(e,n){n.unfinalizedDrafts_=n.drafts_.length;const t=n.drafts_[0];return e!==void 0&&e!==t?(t[Ge].modified_&&(ca(n),We(4)),An(e)&&(e=Vo(n,e),n.parent_||Uo(n,e)),n.patches_&&nt("Patches").generateReplacementPatches_(t[Ge].base_,e,n.patches_,n.inversePatches_)):e=Vo(n,t,[]),ca(n),n.patches_&&n.patchListener_(n.patches_,n.inversePatches_),e!==Ml?e:void 0}function Vo(e,n,t){if(lr(n))return n;const o=n[Ge];if(!o)return zo(n,(r,a)=>_i(e,o,n,r,a,t)),n;if(o.scope_!==e)return n;if(!o.modified_)return Uo(e,o.base_,!0),o.base_;if(!o.finalized_){o.finalized_=!0,o.scope_.unfinalizedDrafts_--;const r=o.copy_;let a=r,i=!1;o.type_===3&&(a=new Set(r),r.clear(),i=!0),zo(a,(s,u)=>_i(e,o,r,s,u,t,i)),Uo(e,r,!1),t&&e.patches_&&nt("Patches").generatePatches_(o,t,e.patches_,e.inversePatches_)}return o.copy_}function _i(e,n,t,o,r,a,i){if(et(r)){const s=a&&n&&n.type_!==3&&!ua(n.assigned_,o)?a.concat(o):void 0,u=Vo(e,r,s);if(Bl(t,o,u),et(u))e.canAutoFreeze_=!1;else return}else i&&t.add(r);if(An(r)&&!lr(r)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;Vo(e,r),(!n||!n.scope_.parent_)&&typeof o!="symbol"&&Object.prototype.propertyIsEnumerable.call(t,o)&&Uo(e,r)}}function Uo(e,n,t=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&Ha(n,t)}function wy(e,n){const t=Array.isArray(e),o={type_:t?1:0,scope_:n?n.scope_:Fl(),modified_:!1,finalized_:!1,assigned_:{},parent_:n,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let r=o,a=za;t&&(r=[o],a=oo);const{revoke:i,proxy:s}=Proxy.revocable(r,a);return o.draft_=s,o.revoke_=i,s}var za={get(e,n){if(n===Ge)return e;const t=Hn(e);if(!ua(t,n))return xy(e,t,n);const o=t[n];return e.finalized_||!An(o)?o:o===Rr(e.base_,n)?(wr(e),e.copy_[n]=pa(o,e)):o},has(e,n){return n in Hn(e)},ownKeys(e){return Reflect.ownKeys(Hn(e))},set(e,n,t){const o=Gl(Hn(e),n);if(o!=null&&o.set)return o.set.call(e.draft_,t),!0;if(!e.modified_){const r=Rr(Hn(e),n),a=r==null?void 0:r[Ge];if(a&&a.base_===t)return e.copy_[n]=t,e.assigned_[n]=!1,!0;if(Cy(t,r)&&(t!==void 0||ua(e.base_,n)))return!0;wr(e),ya(e)}return e.copy_[n]===t&&(t!==void 0||n in e.copy_)||Number.isNaN(t)&&Number.isNaN(e.copy_[n])||(e.copy_[n]=t,e.assigned_[n]=!0),!0},deleteProperty(e,n){return Rr(e.base_,n)!==void 0||n in e.base_?(e.assigned_[n]=!1,wr(e),ya(e)):delete e.assigned_[n],e.copy_&&delete e.copy_[n],!0},getOwnPropertyDescriptor(e,n){const t=Hn(e),o=Reflect.getOwnPropertyDescriptor(t,n);return o&&{writable:!0,configurable:e.type_!==1||n!=="length",enumerable:o.enumerable,value:t[n]}},defineProperty(){We(11)},getPrototypeOf(e){return Et(e.base_)},setPrototypeOf(){We(12)}},oo={};zo(za,(e,n)=>{oo[e]=function(){return arguments[0]=arguments[0][0],n.apply(this,arguments)}});oo.deleteProperty=function(e,n){return oo.set.call(this,e,n,void 0)};oo.set=function(e,n,t){return za.set.call(this,e[0],n,t,e[0])};function Rr(e,n){const t=e[Ge];return(t?Hn(t):e)[n]}function xy(e,n,t){var r;const o=Gl(n,t);return o?"value"in o?o.value:(r=o.get)==null?void 0:r.call(e.draft_):void 0}function Gl(e,n){if(!(n in e))return;let t=Et(e);for(;t;){const o=Object.getOwnPropertyDescriptor(t,n);if(o)return o;t=Et(t)}}function ya(e){e.modified_||(e.modified_=!0,e.parent_&&ya(e.parent_))}function wr(e){e.copy_||(e.copy_=da(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var qy=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(n,t,o)=>{if(typeof n=="function"&&typeof t!="function"){const a=t;t=n;const i=this;return function(u=a,...l){return i.produce(u,d=>t.call(this,d,...l))}}typeof t!="function"&&We(6),o!==void 0&&typeof o!="function"&&We(7);let r;if(An(n)){const a=xi(this),i=pa(n,void 0);let s=!0;try{r=t(i),s=!1}finally{s?ca(a):ma(a)}return wi(a,o),qi(r,a)}else if(!n||typeof n!="object"){if(r=t(n),r===void 0&&(r=n),r===Ml&&(r=void 0),this.autoFreeze_&&Ha(r,!0),o){const a=[],i=[];nt("Patches").generateReplacementPatches_(n,r,a,i),o(a,i)}return r}else We(1,n)},this.produceWithPatches=(n,t)=>{if(typeof n=="function")return(i,...s)=>this.produceWithPatches(i,u=>n(u,...s));let o,r;return[this.produce(n,t,(i,s)=>{o=i,r=s}),o,r]},typeof(e==null?void 0:e.autoFreeze)=="boolean"&&this.setAutoFreeze(e.autoFreeze),typeof(e==null?void 0:e.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){An(e)||We(8),et(e)&&(e=_y(e));const n=xi(this),t=pa(e,void 0);return t[Ge].isManual_=!0,ma(n),t}finishDraft(e,n){const t=e&&e[Ge];(!t||!t.isManual_)&&We(9);const{scope_:o}=t;return wi(o,n),qi(void 0,o)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,n){let t;for(t=n.length-1;t>=0;t--){const r=n[t];if(r.path.length===0&&r.op==="replace"){e=r.value;break}}t>-1&&(n=n.slice(t+1));const o=nt("Patches").applyPatches_;return et(e)?o(e,n):this.produce(e,r=>o(r,n))}};function pa(e,n){const t=ir(e)?nt("MapSet").proxyMap_(e,n):sr(e)?nt("MapSet").proxySet_(e,n):wy(e,n);return(n?n.scope_:Fl()).drafts_.push(t),t}function _y(e){return et(e)||We(10,e),jl(e)}function jl(e){if(!An(e)||lr(e))return e;const n=e[Ge];let t;if(n){if(!n.modified_)return n.base_;n.finalized_=!0,t=da(e,n.scope_.immer_.useStrictShallowCopy_)}else t=da(e,!0);return zo(t,(o,r)=>{Bl(t,o,jl(r))}),n&&(n.finalized_=!1),t}var je=new qy,Hl=je.produce;je.produceWithPatches.bind(je);je.setAutoFreeze.bind(je);je.setUseStrictShallowCopy.bind(je);je.applyPatches.bind(je);je.createDraft.bind(je);je.finishDraft.bind(je);function zl(e){return({dispatch:t,getState:o})=>r=>a=>typeof a=="function"?a(t,o,e):r(a)}var Py=zl(),My=zl,Dy=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Ho:Ho.apply(null,arguments)};function Pi(e,n){function t(...o){if(n){let r=n(...o);if(!r)throw new Error(Ye(0));return{type:e,payload:r.payload,..."meta"in r&&{meta:r.meta},..."error"in r&&{error:r.error}}}return{type:e,payload:o[0]}}return t.toString=()=>`${e}`,t.type=e,t.match=o=>hy(o)&&o.type===e,t}var Vl=class Wt extends Array{constructor(...n){super(...n),Object.setPrototypeOf(this,Wt.prototype)}static get[Symbol.species](){return Wt}concat(...n){return super.concat.apply(this,n)}prepend(...n){return n.length===1&&Array.isArray(n[0])?new Wt(...n[0].concat(this)):new Wt(...n.concat(this))}};function Mi(e){return An(e)?Hl(e,()=>{}):e}function Di(e,n,t){if(e.has(n)){let r=e.get(n);return t.update&&(r=t.update(r,n,e),e.set(n,r)),r}if(!t.insert)throw new Error(Ye(10));const o=t.insert(n,e);return e.set(n,o),o}function By(e){return typeof e=="boolean"}var Fy=()=>function(n){const{thunk:t=!0,immutableCheck:o=!0,serializableCheck:r=!0,actionCreatorCheck:a=!0}=n??{};let i=new Vl;return t&&(By(t)?i.push(Py):i.push(My(t.extraArgument))),i},Gy="RTK_autoBatch",Ul=e=>n=>{setTimeout(n,e)},jy=typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:Ul(10),Hy=(e={type:"raf"})=>n=>(...t)=>{const o=n(...t);let r=!0,a=!1,i=!1;const s=new Set,u=e.type==="tick"?queueMicrotask:e.type==="raf"?jy:e.type==="callback"?e.queueNotification:Ul(e.timeout),l=()=>{i=!1,a&&(a=!1,s.forEach(d=>d()))};return Object.assign({},o,{subscribe(d){const c=()=>r&&d(),m=o.subscribe(c);return s.add(d),()=>{m(),s.delete(d)}},dispatch(d){var c;try{return r=!((c=d==null?void 0:d.meta)!=null&&c[Gy]),a=!r,a&&(i||(i=!0,u(l))),o.dispatch(d)}finally{r=!0}}})},zy=e=>function(t){const{autoBatch:o=!0}=t??{};let r=new Vl(e);return o&&r.push(Hy(typeof o=="object"?o:void 0)),r};function Vy(e){const n=Fy(),{reducer:t=void 0,middleware:o,devTools:r=!0,preloadedState:a=void 0,enhancers:i=void 0}=e;let s;if(typeof t=="function")s=t;else if(ja(t))s=Ny(t);else throw new Error(Ye(1));let u;typeof o=="function"?u=o(n):u=n();let l=Ho;r&&(l=Dy({trace:!1,...typeof r=="object"&&r}));const d=Iy(...u),c=zy(d);let m=typeof i=="function"?i(c):c();const y=l(...m);return Pl(s,a,y)}function $l(e){const n={},t=[];let o;const r={addCase(a,i){const s=typeof a=="string"?a:a.type;if(!s)throw new Error(Ye(28));if(s in n)throw new Error(Ye(29));return n[s]=i,r},addMatcher(a,i){return t.push({matcher:a,reducer:i}),r},addDefaultCase(a){return o=a,r}};return e(r),[n,t,o]}function Uy(e){return typeof e=="function"}function $y(e,n){let[t,o,r]=$l(n),a;if(Uy(e))a=()=>Mi(e());else{const s=Mi(e);a=()=>s}function i(s=a(),u){let l=[t[u.type],...o.filter(({matcher:d})=>d(u)).map(({reducer:d})=>d)];return l.filter(d=>!!d).length===0&&(l=[r]),l.reduce((d,c)=>{if(c)if(et(d)){const y=c(d,u);return y===void 0?d:y}else{if(An(d))return Hl(d,m=>c(m,u));{const m=c(d,u);if(m===void 0){if(d===null)return d;throw new Error(Ye(9))}return m}}return d},s)}return i.getInitialState=a,i}var Wy=Symbol.for("rtk-slice-createasyncthunk");function Yy(e,n){return`${e}/${n}`}function Ky({creators:e}={}){var t;const n=(t=e==null?void 0:e.asyncThunk)==null?void 0:t[Wy];return function(r){const{name:a,reducerPath:i=a}=r;if(!a)throw new Error(Ye(11));const s=(typeof r.reducers=="function"?r.reducers(Zy()):r.reducers)||{},u=Object.keys(s),l={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},d={addCase(b,h){const k=typeof b=="string"?b:b.type;if(!k)throw new Error(Ye(12));if(k in l.sliceCaseReducersByType)throw new Error(Ye(13));return l.sliceCaseReducersByType[k]=h,d},addMatcher(b,h){return l.sliceMatchers.push({matcher:b,reducer:h}),d},exposeAction(b,h){return l.actionCreators[b]=h,d},exposeCaseReducer(b,h){return l.sliceCaseReducersByName[b]=h,d}};u.forEach(b=>{const h=s[b],k={reducerName:b,type:Yy(a,b),createNotation:typeof r.reducers=="function"};ep(h)?tp(k,h,d,n):Jy(k,h,d)});function c(){const[b={},h=[],k=void 0]=typeof r.extraReducers=="function"?$l(r.extraReducers):[r.extraReducers],N={...b,...l.sliceCaseReducersByType};return $y(r.initialState,S=>{for(let I in N)S.addCase(I,N[I]);for(let I of l.sliceMatchers)S.addMatcher(I.matcher,I.reducer);for(let I of h)S.addMatcher(I.matcher,I.reducer);k&&S.addDefaultCase(k)})}const m=b=>b,y=new Map;let p;function f(b,h){return p||(p=c()),p(b,h)}function A(){return p||(p=c()),p.getInitialState()}function v(b,h=!1){function k(S){let I=S[b];return typeof I>"u"&&h&&(I=A()),I}function N(S=m){const I=Di(y,h,{insert:()=>new WeakMap});return Di(I,S,{insert:()=>{const C={};for(const[L,R]of Object.entries(r.selectors??{}))C[L]=Qy(R,S,A,h);return C}})}return{reducerPath:b,getSelectors:N,get selectors(){return N(k)},selectSlice:k}}const T={name:a,reducer:f,actions:l.actionCreators,caseReducers:l.sliceCaseReducersByName,getInitialState:A,...v(i),injectInto(b,{reducerPath:h,...k}={}){const N=h??i;return b.inject({reducerPath:N,reducer:f},k),{...T,...v(N,!0)}}};return T}}function Qy(e,n,t,o){function r(a,...i){let s=n(a);return typeof s>"u"&&o&&(s=t()),e(s,...i)}return r.unwrapped=e,r}var Xy=Ky();function Zy(){function e(n,t){return{_reducerDefinitionType:"asyncThunk",payloadCreator:n,...t}}return e.withTypes=()=>e,{reducer(n){return Object.assign({[n.name](...t){return n(...t)}}[n.name],{_reducerDefinitionType:"reducer"})},preparedReducer(n,t){return{_reducerDefinitionType:"reducerWithPrepare",prepare:n,reducer:t}},asyncThunk:e}}function Jy({type:e,reducerName:n,createNotation:t},o,r){let a,i;if("reducer"in o){if(t&&!np(o))throw new Error(Ye(17));a=o.reducer,i=o.prepare}else a=o;r.addCase(e,a).exposeCaseReducer(n,a).exposeAction(n,i?Pi(e,i):Pi(e))}function ep(e){return e._reducerDefinitionType==="asyncThunk"}function np(e){return e._reducerDefinitionType==="reducerWithPrepare"}function tp({type:e,reducerName:n},t,o,r){if(!r)throw new Error(Ye(18));const{payloadCreator:a,fulfilled:i,pending:s,rejected:u,settled:l,options:d}=t,c=r(e,a,d);o.exposeAction(n,c),i&&o.addCase(c.fulfilled,i),s&&o.addCase(c.pending,s),u&&o.addCase(c.rejected,u),l&&o.addMatcher(c.settled,l),o.exposeCaseReducer(n,{fulfilled:i||ko,pending:s||ko,rejected:u||ko,settled:l||ko})}function ko(){}function Ye(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}const Ot=Object.freeze({markerSize:Sr.markerSize,markerStrokeWidth:Sr.markerStrokeWidth,lineColor:Sr.lineColor,zIndex:0,fallbackFontSizePx:12,rootFontSizePx:16}),Bi=Object.freeze({brightOnDark:Object.freeze({backgroundColor:"rgba(15, 23, 42, 0.82)",textColor:"rgba(248, 250, 252, 0.98)"}),darkOnBright:Object.freeze({backgroundColor:"rgba(255, 255, 255, 0.9)",textColor:"rgba(15, 23, 42, 0.92)"})}),wh=({text:e,getScreenPosition:n,theme:t="bright-on-dark",lineColor:o,textBackgroundColor:r,textColor:a,fontSize:i,fontFamily:s,fontWeight:u,mixBlendMode:l,attach:d="center",distance:c=0,hideMarker:m=!0})=>{const y=t==="dark-on-bright"?Bi.darkOnBright:Bi.brightOnDark;return{content:e,hideMarker:m,lineColor:o,textBackgroundColor:r??y.backgroundColor,textColor:a??y.textColor,fontSize:i,fontFamily:s,fontWeight:u,mixBlendMode:l,attach:d,distance:c,getScreenPosition:n}},op=e=>e.getScreenPosition?e.getScreenPosition():e.screenPosition??null,rp=(e,n)=>e==="left"?`translate(${-n}px, -50%)`:e==="right"?`translate(calc(-100% + ${n}px), -50%)`:"translate(-50%, -50%)",ap=(e=cm)=>{const n=e.trim(),t=Number.parseFloat(n);return Number.isFinite(t)?n.endsWith("rem")?t*Ot.rootFontSizePx:t:Ot.fallbackFontSizePx},ip=({labelRoot:e,fontSize:n})=>{var r;const t=((r=e.ownerDocument.defaultView)==null?void 0:r.getComputedStyle(e).fontSize)??"",o=Number.parseFloat(t);return Number.isFinite(o)?o:ap(n)},sp=e=>{const n=e.querySelector('[data-point-label-stem="true"]'),t=e.querySelector('[data-point-label-stem-line="true"]'),o=e.querySelector('[data-pillbutton-root="true"], [data-point-label-content-root="true"]'),r=e.querySelector('[data-pillbutton-badge="true"]'),a=e.querySelector('[data-pillbutton-content="true"]'),i=e.querySelector('[data-point-label-root="true"]');return!n||!t||!o||!i?null:{stem:n,stemLine:t,labelRoot:o,pillBadge:r,pillContent:a,pointLabelRoot:i}},xr=new WeakMap,Gt=new WeakMap,lp=e=>{var n;return Gt.has(e)||(Gt.set(e,0),(n=e.fonts)==null||n.addEventListener("loadingdone",()=>{Gt.set(e,(Gt.get(e)??0)+1)})),Gt.get(e)},up=/(?:^|\s)(?:left|top|transform):[^;]*;/g,dp=(e,n,t)=>{var o,r;return`${lp(e.ownerDocument)}|${(o=e.ownerDocument.defaultView)==null?void 0:o.innerWidth}:${(r=e.ownerDocument.defaultView)==null?void 0:r.innerHeight}|${+(n!==null)}${Number(t)}|${e.className}|${e.style.cssText.replace(up,"")}|${e.innerHTML}`},cp=(e,n,t)=>{const o=dp(e,n,t),r=xr.get(e);if((r==null?void 0:r.key)===o)return r;const a={key:o,badgeWidthPx:(n==null?void 0:n.offsetWidth)??0,badgeHeightPx:(n==null?void 0:n.offsetHeight)??0,rootHeightPx:t?e.offsetHeight:0};return(n===null||a.badgeWidthPx>0&&a.badgeHeightPx>0)&&(!t||a.rootHeightPx>0)?xr.set(e,a):xr.delete(e),a},Wl=({labelRoot:e,pillBadge:n,pillContent:t},o)=>{const r=o.angleRad??0,a=o.distance??0,i=o.attach??"center",s=Math.cos(r),u=Math.sin(r),l=e.hasAttribute("data-pillbutton-root"),d=o.hideMarker?0:(o.markerSize??Ot.markerSize)/2+(o.markerStrokeWidth??Ot.markerStrokeWidth)/2,c=n!==null&&t===null,{badgeWidthPx:m,badgeHeightPx:y,rootHeightPx:p}=cp(e,c?n:null,l),f=y>0?y/2:null,A=l&&p>0?p/2:null,v=i==="center"?0:f??A??lm(ip({labelRoot:e,fontSize:o.fontSize})),T=o.stemStartDistance??d,b={x:s*T,y:u*T},h={x:s*(a+v),y:u*(a+v)},k=m>0&&y>0?um(b,h,i,m,y):v>0?dm(b,h,v):{x:s*a,y:u*a};return{attach:i,isPillRoot:l,pillCapRadiusPx:v,pillAnchorPoint:h,stemStart:b,stemEnd:k}},Yl=({start:e,end:n})=>Math.hypot(n.x-e.x,n.y-e.y)>0,mp=({domRefs:e,state:n})=>{if(n.hideLabelAndStem)return null;const{stemStart:t,stemEnd:o}=Wl(e,n),r={start:t,end:o};return Yl(r)?r:null},yp=({elementDiv:e,domRefs:n,state:t})=>{const o=op(t);if(!o||t.visible===!1)return!1;e.style.left=`${o.x}px`,e.style.top=`${o.y}px`,e.style.transform="none",e.style.zIndex=`${t.zIndex??Ot.zIndex}`;const r=`${t.isOccluded?dl:1}`;if(t.hideLabelAndStem)return n.pointLabelRoot.style.opacity=r,!0;const{labelRoot:a,pillBadge:i,pillContent:s}=n;a.hasAttribute("data-pillbutton-root")?(To(i,im(t)),To(s,t.content),i===null&&s===null&&To(a,t.content)):To(a,t.content);const{attach:u,isPillRoot:l,pillCapRadiusPx:d,pillAnchorPoint:c,stemStart:m,stemEnd:y}=Wl(n,t),p=!t.hideStem&&Yl({start:m,end:y});if(n.stem.style.display=p?"block":"none",p){const f=y.x-m.x,A=y.y-m.y;n.stem.style.left=`${m.x}px`,n.stem.style.top=`${m.y}px`,n.stem.style.transformOrigin="0 0",n.stem.style.transform=`rotate(${Math.atan2(A,f)}rad)`,n.stemLine.style.width=`${Math.hypot(f,A)}px`,n.stemLine.style.borderBottom=`1px ${t.isOccluded?"dashed":"solid"} ${t.lineColor??Ot.lineColor}`}return a.style.left=`${c.x}px`,a.style.top=`${c.y}px`,a.style.transform=l?rp(u,d):sm(u),n.pointLabelRoot.style.opacity=r,!0};function Dt(e){const n={current:null};return{facade:e(()=>n.current),register:t=>{n.current=t}}}const{facade:xh,register:pp}=Dt(e=>({isAvailable:()=>e()!==null,getState:()=>{var n,t;return((t=(n=e())==null?void 0:n.getState)==null?void 0:t.call(n))??null},subscribe:n=>{var t,o;return((o=(t=e())==null?void 0:t.subscribe)==null?void 0:o.call(t,n))??(()=>{})},activateTool:n=>{var t,o;return((o=(t=e())==null?void 0:t.activateTool)==null?void 0:o.call(t,n))??Promise.resolve(!1)},pickAt:n=>{var t,o;return((o=(t=e())==null?void 0:t.pickAt)==null?void 0:o.call(t,n))??Promise.resolve(!1)},finish:()=>{var n,t;return((t=(n=e())==null?void 0:n.finish)==null?void 0:t.call(n))??Promise.resolve(null)},cancel:()=>{var n,t;return(t=(n=e())==null?void 0:n.cancel)==null?void 0:t.call(n)},answerTextPrompt:n=>{var t,o;return((o=(t=e())==null?void 0:t.answerTextPrompt)==null?void 0:o.call(t,n))??!1},createMeasurement:(n,t,o)=>{var r,a;return((a=(r=e())==null?void 0:r.createMeasurement)==null?void 0:a.call(r,n,t,o))??Promise.resolve(null)},addMeasurements:(n,t)=>{var o,r;return((r=(o=e())==null?void 0:o.addMeasurements)==null?void 0:r.call(o,n,t))??[]},exportMeasurements:()=>{var n,t;return((t=(n=e())==null?void 0:n.exportMeasurements)==null?void 0:t.call(n))??null},select:n=>{var t,o;return(o=(t=e())==null?void 0:t.select)==null?void 0:o.call(t,n)},remove:n=>{var t,o;return(o=(t=e())==null?void 0:t.remove)==null?void 0:o.call(t,n)},flyTo:n=>{var t,o;return(o=(t=e())==null?void 0:t.flyTo)==null?void 0:o.call(t,n)}})),{facade:qh,register:gp}=Dt(e=>({isAvailable:()=>e()!==null,getPose:()=>{var n,t;return((t=(n=e())==null?void 0:n.getPose)==null?void 0:t.call(n))??null},setPose:n=>{var t,o;return((o=(t=e())==null?void 0:t.setPose)==null?void 0:o.call(t,n))??!1},flyToPose:(n,t)=>{var o,r;return((r=(o=e())==null?void 0:o.flyToPose)==null?void 0:r.call(o,n,t))??Promise.resolve(!1)},lookAt:(n,t,o)=>{var r,a;return((a=(r=e())==null?void 0:r.lookAt)==null?void 0:a.call(r,n,t,o))??Promise.resolve(!1)},stop:()=>{var n,t;return(t=(n=e())==null?void 0:n.stop)==null?void 0:t.call(n)}})),{facade:_h,register:Ph}=Dt(e=>({applyById:n=>{var t,o;return((o=(t=e())==null?void 0:t.applyById)==null?void 0:o.call(t,n))??Promise.resolve(!1)},setMappingConfig:n=>{var t,o;return((o=(t=e())==null?void 0:t.setMappingConfig)==null?void 0:o.call(t,n))??Promise.resolve(!1)},getAppliedId:()=>{var n,t;return((t=(n=e())==null?void 0:n.getAppliedId)==null?void 0:t.call(n))??null},getMappingConfig:()=>{var n,t;return((t=(n=e())==null?void 0:n.getMappingConfig)==null?void 0:t.call(n))??null},backgroundAsLayers:n=>{var t,o;return((o=(t=e())==null?void 0:t.backgroundAsLayers)==null?void 0:o.call(t,n))??n}})),Fi=()=>{},{facade:Mh,register:Dh}=Dt(e=>({addSource:n=>{var t;return((t=e())==null?void 0:t.registerContribution({sources:[n]}))??Fi},addMode:n=>{var t;return((t=e())==null?void 0:t.registerContribution({additionalModes:[n]}))??Fi}})),fp={localStorage:[],sessionStorage:[],localforage:[],catalogCache:[],indexedDB:[]},un=(e,n)=>t=>{var o,r;return((r=(o=e())==null?void 0:o[n])==null?void 0:r.call(o,t))??Promise.resolve([])},{facade:Bh,register:Fh}=Dt(e=>({all:un(e,"all"),persistedState:un(e,"persistedState"),layers:un(e,"layers"),catalogCache:un(e,"catalogCache"),favorites:un(e,"favorites"),measurements:un(e,"measurements"),addonOverrides:un(e,"addonOverrides"),auth:un(e,"auth"),localStorage:un(e,"localStorage"),list:()=>{var n,t;return((t=(n=e())==null?void 0:n.list)==null?void 0:t.call(n))??Promise.resolve(fp)}})),{facade:Gh,register:jh}=Dt(e=>({openMenu:()=>{var n,t;return(t=(n=e())==null?void 0:n.openMenu)==null?void 0:t.call(n)},openHelperOverlay:()=>{var n,t;return(t=(n=e())==null?void 0:n.openHelperOverlay)==null?void 0:t.call(n)}})),be={FLY_TO:"flyTo",EXPORT:"export",VISIBILITY:"visibility",REFERENCE:"reference",LOCK:"lock",STYLE:"style",DELETE:"delete"},$e=(()=>{const e="1rem",n="0.8571rem",t="1rem";return Object.freeze({rootFontSizeRem:e,supportFontSizeRem:n,headingFontSizeRem:t,headingFontWeight:600,headingTypographyClassName:`text-[${n}] font-semibold tracking-[0.03em]`,titleTypographyClassName:`text-[${t}] font-semibold leading-[1.25]`})})(),He=Object.freeze({borderRadiusRem:"0.2143rem",hairlineBorderWidthRem:"0.0357rem",panelInsetShadowYOffsetRem:"0.0714rem",panelInsetShadowBlurRem:"0.0714rem",panelBackdropBlurRem:"0.1429rem"}),J=Object.freeze({heading:me.ACCENT_MEASUREMENTS,panelSurface:me.NEUTRAL_SURFACE_SUBTLE,panelBorder:me.NEUTRAL_BORDER_SUBTLE,shadowBase:me.NEUTRAL_BLACK,bodyText:me.NEUTRAL_TEXT_PRIMARY,mutedText:me.NEUTRAL_TEXT_MUTED,linkText:me.WUPP_BLUE,fieldText:me.NEUTRAL_TEXT_STRONG,fieldBorder:me.NEUTRAL_BORDER_DEFAULT,fieldInputBorder:me.NEUTRAL_BORDER_INPUT,fieldFocusBackground:me.STATE_FOCUS_BACKGROUND_WARM,fieldFocusOutline:me.STATE_FOCUS_OUTLINE,titleText:me.NEUTRAL_TEXT_STRONG}),qr=Object.freeze({panelSurface:.9,panelBorder:.9,panelInsetShadow:.02}),Ap=Object.freeze({defaultPixelWidth:430,headingColor:J.heading,headerStyle:{},bodyPanelStyle:{backgroundColor:hr(J.panelSurface,qr.panelSurface),border:`${He.hairlineBorderWidthRem} solid ${hr(J.panelBorder,qr.panelBorder)}`,boxShadow:`${hr(J.shadowBase,qr.panelInsetShadow)} 0 ${He.panelInsetShadowYOffsetRem} ${He.panelInsetShadowBlurRem} inset`,backdropFilter:`blur(${He.panelBackdropBlurRem})`,WebkitBackdropFilter:`blur(${He.panelBackdropBlurRem})`},resolveActionTooltipPopupContainer:e=>e.closest('[data-test-id="annotation-info-box"]')??e.ownerDocument.body,headerForegroundClassName:"text-white/80",headerTitleClassName:`truncate ${$e.headingTypographyClassName}`,subtitleContainerClassName:"mb-0 w-full px-2 pt-[0.28em]",subtitleTextStyle:{color:me.ACCENT_NEUTRALS},subtitleTextClassName:`px-2 text-[${$e.supportFontSizeRem}] leading-[1.1] font-semibold`,subtitleMetaTextStyle:{color:me.ACCENT_NEUTRALS},subtitleMetaTextClassName:`mt-[0.08em] whitespace-nowrap text-[${$e.supportFontSizeRem}] leading-[1.1] font-semibold`,showSubtitleMetaText:!0,readOnly:!1,bodyContainerClassName:"px-2 pb-2 pt-1",bodyTextStyle:{fontSize:$e.rootFontSizeRem,lineHeight:1.4,color:J.bodyText},bodyTextClassName:`text-[${$e.rootFontSizeRem}] leading-[1.4] text-[${J.bodyText}]`,emptyContentLineStyle:{minHeight:"1.4em"},emptyContentLineClassName:"w-full",mutedTextClassName:`text-[${J.mutedText}]`,linkTextClassName:`text-[${J.linkText}]`,actionIconClassName:"transition-colors",actionIconColor:me.ACCENT_NEUTRALS,actionIconHoverColor:me.ACCENT_NEUTRALS_HOVER,actionIconFontSize:null,hiddenActionIds:[],fieldTextClassName:`text-[${J.fieldText}]`,fieldBorderClassName:`border-[${He.hairlineBorderWidthRem}] border-[${J.fieldBorder}]`,fieldInputBorderClassName:`border-[${He.hairlineBorderWidthRem}] border-[${J.fieldInputBorder}]`,fieldFocusBackgroundClassName:`focus:bg-[${J.fieldFocusBackground}]`,fieldFocusOutlineClassName:`focus:outline focus:outline-2 focus:outline-[${J.fieldFocusOutline}]`,subtleFieldBackgroundClassName:"bg-white/85",titleTextStyle:{fontSize:$e.headingFontSizeRem,fontWeight:$e.headingFontWeight,lineHeight:1.25},titleTextClassName:`text-[${J.titleText}]/80 ${$e.titleTypographyClassName}`,titleInputClassName:`min-w-0 w-auto max-w-full appearance-none [field-sizing:content] break-words rounded-[${He.borderRadiusRem}] border border-transparent bg-transparent px-0 py-[0.05em] text-[${J.titleText}]/80 placeholder:text-[${J.titleText}]/50 focus:bg-[${J.fieldFocusBackground}] focus:outline focus:outline-2 focus:outline-[${J.fieldFocusOutline}] ${$e.titleTypographyClassName}`,shortLabelInputClassName:`shrink-0 w-auto appearance-none [field-sizing:content] border-[${He.hairlineBorderWidthRem}] px-[0.5ex] py-0 text-center tabular-nums border-[${J.fieldBorder}] bg-white/85 text-[${J.titleText}]/80 placeholder:text-[${J.titleText}]/80 focus:bg-[${J.fieldFocusBackground}] focus:outline focus:outline-2 focus:outline-[${J.fieldFocusOutline}] ${$e.titleTypographyClassName}`,navigationInstructionContainerClassName:"mt-1 flex w-full items-center justify-center px-2 pt-1",navigationAvailabilityContainerClassName:"mt-1 flex w-full items-center justify-center px-2 pt-1",navigationSummaryContainerClassName:"mb-1 mt-0 flex w-full items-center justify-between px-2",navigationLinkFontSize:$e.supportFontSizeRem,inlineFieldButtonClassName:`inline-flex h-5 w-5 items-center justify-center rounded border-[${He.hairlineBorderWidthRem}] border-[${J.fieldInputBorder}]`,colorInputClassName:`h-6 w-8 cursor-pointer rounded border-[${He.hairlineBorderWidthRem}] border-[${J.fieldInputBorder}] bg-transparent p-0`,inlineActionButtonClassName:`inline-flex items-center gap-1 rounded border-[${He.hairlineBorderWidthRem}] border-[${J.fieldInputBorder}] px-2 py-1`}),rn=e=>({...Ap,...e}),Le=Object.freeze({lineLengthEpsilonPx:.001,referenceDistanceFactor:.2,lineLabelReferenceDistancePx:24,flipThresholdPx:4,referenceMinDistancePx:24,referenceMaxDistancePx:48,insideBlendFactor:.35,elevationEpsilonMeters:.001,polygonAreaEpsilonPx2:1e-6}),vp=(e,n,t=Le.flipThresholdPx)=>{if(!Number.isFinite(e))return n??1;const o=e>=0?1:-1;return!n||n===o?o:Math.abs(e)<t?n:o},xo=({start:e,end:n,insidePoint:t,previousOutsideSign:o,flipThresholdPx:r=Le.flipThresholdPx,referenceDistanceFactor:a=Le.referenceDistanceFactor,referenceDistancePx:i,minDistancePx:s=Le.referenceMinDistancePx,maxDistancePx:u=Le.referenceMaxDistancePx})=>{const l=Nm({start:e,end:n,epsilon:Le.lineLengthEpsilonPx});if(!l)return null;const d=Im(t,l.midpoint),c=hm(d,l.leftUnitNormal),m=vp(-c,o,r),y=i??Be(l.length*a,s,u),p=vl(l.leftUnitNormal,m*y);return{outsideSign:m,referencePoint:Al(l.midpoint,p)}},Hh=(e,n,t,o=Le.referenceMinDistancePx,r=Le.referenceMaxDistancePx)=>{var a;return((a=xo({start:e,end:n,insidePoint:t,minDistancePx:o,maxDistancePx:r}))==null?void 0:a.referencePoint)??null},bp=({triangle:e,auxiliaryAltitudeMeters:n,highestAltitudeMeters:t,insideBlendFactor:o=Le.insideBlendFactor,elevationEpsilonMeters:r=Le.elevationEpsilonMeters})=>{const a=n<t-r?e.highest:e.aux;return{x:ia(a.x,e.centroid.x,o),y:ia(a.y,e.centroid.y,o)}},Tp=({anchor:e,target:n,aux:t,anchorAltitudeMeters:o,targetAltitudeMeters:r,previousOutsideSigns:a,insideBlendFactor:i=Le.insideBlendFactor,flipThresholdPx:s=Le.flipThresholdPx,referenceDistancePx:u=Le.lineLabelReferenceDistancePx})=>{const l=o>=r?e:n,d={anchor:e,target:n,aux:t,highest:l,centroid:{x:(e.x+n.x+t.x)/3,y:(e.y+n.y+t.y)/3}},c=bp({triangle:d,auxiliaryAltitudeMeters:r,highestAltitudeMeters:Math.max(o,r),insideBlendFactor:i}),m=xo({start:e,end:n,insidePoint:c,previousOutsideSign:a==null?void 0:a.direct,flipThresholdPx:s,referenceDistancePx:u}),y=xo({start:t,end:n,insidePoint:c,previousOutsideSign:a==null?void 0:a.horizontal,flipThresholdPx:s,referenceDistancePx:u}),p=xo({start:e,end:t,insidePoint:n,previousOutsideSign:a==null?void 0:a.vertical,flipThresholdPx:s,referenceDistancePx:u});return{directOutsideReferencePoint:(m==null?void 0:m.referencePoint)??null,verticalOutsideReferencePoint:(p==null?void 0:p.referencePoint)??null,horizontalOutsideReferencePoint:(y==null?void 0:y.referencePoint)??null,nextOutsideSigns:{direct:m==null?void 0:m.outsideSign,vertical:p==null?void 0:p.outsideSign,horizontal:y==null?void 0:y.outsideSign}}},kp=e=>fl({points:e,degenerateAreaEpsilon:Le.polygonAreaEpsilonPx2}),_={POINT:"point",DISTANCE:"distance",POLYLINE:"polyline",AREA_GROUND:"area",AREA_PLANAR:"planar",AREA_VERTICAL:"vertical",LABEL:"label"},bn="select",zh="planar-biggest-triangle",Vh="planar-pca",Uh="planar-trapezoid",Kl=e=>e===_.AREA_GROUND||e===_.AREA_VERTICAL||e===_.AREA_PLANAR,qo=Object.freeze({fillAlpha:.25,selectedFillAlpha:.35,rgb255ByType:{[_.AREA_VERTICAL]:[112,168,255],[_.AREA_GROUND]:[107,188,123],[_.AREA_PLANAR]:[239,223,145]}}),Ql=e=>qo.rgb255ByType[e],Np=(e,n)=>Ke(Ql(e),n),Gi=e=>typeof e=="number"&&Number.isFinite(e)&&e>=0&&e<=1,Ip=(e={})=>{const n=Gi(e.fillAlpha)?e.fillAlpha:qo.fillAlpha,t=Gi(e.selectedFillAlpha)?e.selectedFillAlpha:qo.selectedFillAlpha,o=r=>{var a;return((a=e.rgb255ByType)==null?void 0:a[r])??qo.rgb255ByType[r]};return{rgb255:o,fillCssColor:(r,a)=>Ke(o(r),a?t:n),cssColor:(r,a)=>Ke(o(r),a)}},$h=Ip(),Ie={DIRECT:"direct",VERTICAL:"vertical",HORIZONTAL:"horizontal"},Tn=Object.freeze({textRgb255:{dark:[17,24,39],light:[255,255,255]},labelTextRgb255:[248,250,252],shortLabelRgb255ByType:{[_.POINT]:[200,200,200],[_.DISTANCE]:[102,126,234],[_.POLYLINE]:[226,178,60],[_.LABEL]:[88,152,255]},surfaceRgb255:{stroke:[255,255,255],accent:[246,248,255]},lineComponentRgb255ByKind:{[Ie.DIRECT]:[255,255,255],[Ie.VERTICAL]:[111,168,255],[Ie.HORIZONTAL]:[188,194,102]},selectionRgb255:{background:[15,23,42],hoverBackground:[30,41,59],glow:[255,255,255]}}),xn=Object.freeze({alpha:{text:{dark:.9,light:1},shortLabelBackgroundByType:{[_.POINT]:.92,[_.DISTANCE]:.95,[_.POLYLINE]:.95,[_.LABEL]:.95,area:.95},lineComponentByKind:{[Ie.DIRECT]:1,[Ie.VERTICAL]:.96,[Ie.HORIZONTAL]:.95},lineComponentLabelAccentByKind:{[Ie.DIRECT]:.34,[Ie.VERTICAL]:.54,[Ie.HORIZONTAL]:.5},selection:{background:.92,hoverBackground:.9,glow:1},surfaceStroke:.95}}),Bn=(e,n=xn.alpha.text[e])=>Ke(Tn.textRgb255[e],n),_o=(e=xn.alpha.surfaceStroke)=>Ke(Tn.surfaceRgb255.stroke,e),hp=(e=xn.alpha.surfaceStroke)=>Ke(Tn.surfaceRgb255.accent,e),_r=(e,n=xn.alpha.lineComponentByKind[e])=>Ke(Tn.lineComponentRgb255ByKind[e],n),Pr=(e,n=xn.alpha.lineComponentLabelAccentByKind[e])=>Ke(Tn.lineComponentRgb255ByKind[e],n),Fn=e=>Kl(e)?Np(e,xn.alpha.shortLabelBackgroundByType.area):Ke(Tn.shortLabelRgb255ByType[e],xn.alpha.shortLabelBackgroundByType[e]),Wh=e=>Kl(e)?Ql(e):Tn.shortLabelRgb255ByType[e],ji=(e,n=xn.alpha.selection[e])=>Ke(Tn.selectionRgb255[e],n),Sp=(e=1)=>Ke(Tn.labelTextRgb255,e),zn=Object.freeze({fontFamily:'"Helvetica Neue", Arial, Helvetica, sans-serif',fontWeight:{regular:400,medium:500,semibold:600},fontSizePx:{supportText:12,pointLabel:14,measurementLabel:16,compactBadge:10,distancePairLabel:11}}),Cp=e=>{if(!Number.isFinite(e)||e<0)return"A";let n=Math.floor(e),t="";do t=String.fromCharCode(65+n%26)+t,n=Math.floor(n/26)-1;while(n>=0);return t},Cn={NUMERIC:"numeric",ALPHABETIC:"alphabetic"},Ep={[_.POINT]:{prefix:"",counterStyle:Cn.NUMERIC,backgroundColor:Fn(_.POINT),textColor:Bn("dark")},[_.DISTANCE]:{prefix:"",counterStyle:Cn.ALPHABETIC,backgroundColor:Fn(_.DISTANCE),textColor:Bn("light")},[_.POLYLINE]:{prefix:"L",counterStyle:Cn.NUMERIC,backgroundColor:Fn(_.POLYLINE),textColor:Bn("dark")},[_.AREA_GROUND]:{prefix:"A",counterStyle:Cn.NUMERIC,backgroundColor:Fn(_.AREA_GROUND),textColor:Bn("light")},[_.AREA_PLANAR]:{prefix:"D",counterStyle:Cn.NUMERIC,backgroundColor:Fn(_.AREA_PLANAR),textColor:Bn("light")},[_.AREA_VERTICAL]:{prefix:"F",counterStyle:Cn.NUMERIC,backgroundColor:Fn(_.AREA_VERTICAL),textColor:Bn("light")},[_.LABEL]:{prefix:"T",counterStyle:Cn.NUMERIC,backgroundColor:Fn(_.LABEL),textColor:Bn("light")}},Xl=(e,n,t=Ep)=>{const o=t[e],r=Number.isFinite(n)&&n>0?Math.floor(n):1,a=o.counterStyle===Cn.ALPHABETIC?Cp(r-1):`${r}`;return`${o.prefix}${a}`},Zl=/^(.*?)(\d+)$/,Op=8,Lp=(e,n)=>{const t=e==null?void 0:e.trim();if(!t)return n;const o=t.match(Zl);if(!o)return t;const[,r,a]=o,i=String(Number(a)+1).padStart(a.length,"0");return`${r}${i}`},Rp=(e,n)=>{const t=n.trim();return t?[t,...e.filter(o=>o!==t)].slice(0,Op):e},Hi=e=>{const n=e.match(Zl);if(!n)return null;const[,t]=n,o=t.trimEnd();return o?{baseText:o,prefix:t}:null},wp=e=>{const n=new Set(e.filter(o=>!Hi(o))),t=new Set;return e.filter(o=>{const r=Hi(o);return r?n.has(r.baseText)||t.has(r.prefix)?!1:(t.add(r.prefix),!0):!0})},Va=(...e)=>wp([...new Set(e.flat().map(n=>n.trim()).filter(Boolean))]),xp=({defaultText:e,labelTextHistory:n,labelTextSuggestions:t})=>({initialValue:Lp(n[0],e),labelSuggestions:Va(n,t)}),Yh=({annotationEntries:e,additionalSuggestions:n=[]})=>Va([...e].reverse().filter(t=>t.toolType===_.LABEL||t.type===_.LABEL).flatMap(t=>t.displayName??t.name??[]),n),qp="data-annotation-keyboard-shortcuts-suspended",zi=e=>e instanceof HTMLElement?e.isContentEditable?!0:e.closest("input, textarea, select, [contenteditable]:not([contenteditable='false'])")instanceof HTMLElement:!1,Vi=e=>e instanceof HTMLElement?!!e.closest(`[${qp}]`):!1,Jl=e=>e instanceof Element?e:e instanceof Node?e.parentElement:null,_p=e=>{const n=Jl(e);return zi(n)?!0:zi(document.activeElement)},eu=e=>{const n=Jl(e);return _p(e)||Vi(n)||Vi(document.activeElement)},Ee={CANCEL_ACTIVE_TOOL:"cancel-active-tool",DELETE_SELECTION:"delete-selection",FINISH_MEASUREMENT:"finish-measurement",FOCUS_NEXT_NAVIGATION_ITEM:"focus-next-navigation-item",FOCUS_PREVIOUS_NAVIGATION_ITEM:"focus-previous-navigation-item",UNDO_LAST_POINT:"undo-last-point"},Pp=(e,n)=>{const t=e.key.toLowerCase(),o=e.code.toLowerCase();return n.some(r=>{const a=r.toLowerCase();return a===t||a===o})},Mp=[{action:Ee.CANCEL_ACTIVE_TOOL,keys:["Escape"]},{action:Ee.FINISH_MEASUREMENT,keys:["Enter"]},{action:Ee.FOCUS_PREVIOUS_NAVIGATION_ITEM,keys:["ArrowLeft"]},{action:Ee.FOCUS_NEXT_NAVIGATION_ITEM,keys:["ArrowRight"]},{action:Ee.DELETE_SELECTION,keys:["Delete"]},{action:Ee.UNDO_LAST_POINT,keys:["Backspace"]}],Dp=(e,{allowRepeat:n=!1}={})=>!(e.defaultPrevented||!n&&e.repeat||e.metaKey||e.ctrlKey||e.altKey||eu(e.target)),Bp=e=>!e.defaultPrevented&&!e.altKey&&!eu(e.target)&&(e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==="a",Fp=(e,n={})=>{var t;return((t=Mp.find(({action:o,keys:r})=>{var a;return!((a=n.disabledActions)!=null&&a.includes(o))&&Pp(e,r)}))==null?void 0:t.action)??null},mt=new w,Gp=new w,ga=(e,n)=>e.dot(n)<0?e.negate():e,jp=({samples:e,normal:n,maxSampleCount:t,timestampMs:o=performance.now()})=>{const r=mt.copy(n);if(e.length>0){const i=e[e.length-1];i&&ga(r,Gp.set(i.normalX,i.normalY,i.normalZ))}e.push({normalX:r.x,normalY:r.y,normalZ:r.z,timestampMs:o});const a=e.length-t;a>0&&e.splice(0,a)},Hp=({samples:e,fallbackNormal:n,result:t,epsilonSquared:o,maxSampleAgeMs:r,weightDecayWindowMs:a=r,weightDecayGamma:i=1,nowMs:s=performance.now()})=>{const u=s-Math.max(0,r);for(;e.length>1&&e[0].timestampMs<u;)e.shift();if(e.length===0)return n;let l=0,d=0,c=0,m=0;const y=Math.max(0,a),p=Math.max(i,.01),f=e[e.length-1];for(const v of e){mt.set(v.normalX,v.normalY,v.normalZ),ga(mt,n);const T=Math.max(0,s-v.timestampMs),b=v===f?1:y>0?Math.pow(Math.max(0,1-T/y),p):1;b<=0||(l+=mt.x*b,d+=mt.y*b,c+=mt.z*b,m+=b)}if(m<=0)return t.copy(n);const A=1/m;return t.set(l*A,d*A,c*A),t.lengthSq()<=o?t.copy(n):(t.normalize(),ga(t,n)),t},vt=Object.freeze({referenceLineEpsilonMeters:.001}),Ua=1e-8,nu=(e,n,t)=>new w().crossVectors(new w().subVectors(n,e),new w().subVectors(t,e)).lengthSq(),tu=e=>{if(e.length<3)return null;let n=null,t=Ua;for(let o=0;o<e.length;o+=1){const r=e[o],a=e[(o+1)%e.length],i=e[(o+2)%e.length];if(!r||!a||!i)continue;const s=nu(r,a,i);s>t&&(t=s,n=[r,a,i])}return n},zp=e=>{for(let n=0;n<e.length-2;n+=1)for(let t=n+1;t<e.length-1;t+=1)for(let o=t+1;o<e.length;o+=1){const r=e[n],a=e[t],i=e[o];if(r&&a&&i&&nu(r,a,i)>Ua)return[r,a,i]}return null},ou=(e,n)=>{if(!n)return e;const t=he(e.anchorECEF),o=qe(he(e.normalECEF));if(!o)return e;const r=new w().subVectors(n,t);return r.lengthSq()<=Ua||o.dot(r)>=0?e:{...e,normalECEF:yn(o.negate())}},ru=(e,n)=>{if(!e)return null;const[t,o,r]=e,a=Ga(t,o,r);return a?ou({anchorECEF:yn(t),normalECEF:yn(a)},n):null},Vp=(e,n)=>ru(zp(e),n),Kh=(e,n)=>ru(tu(e),n),Qh=(e,n)=>{if(e.length<3||!tu(e))return null;const t=Gm(e),o=t&&qe(new w(...ry(oy(e,t))));return!t||!o?null:ou({anchorECEF:yn(t),normalECEF:yn(o)},n)},Up=new w(1,0,0),$p=new w(0,1,0),Wp=(e,n,t)=>{if(e.length===0)return;const o=e[0]??he(n.anchorECEF);let r=qe(he(n.normalECEF));if(!r)return;if(t){const u=qe(he(t.northECEF));u&&r.dot(u)<0&&(r=r.clone().negate())}const a=qe(no(go(o),r));let i=a?qe(new w().crossVectors(r,a)):null;for(let u=0;!i&&u<e.length-1;u+=1){const l=e[u],d=e[u+1];!l||!d||(i=qe(no(new w().subVectors(d,l),r)))}if(i??(i=qe(new w().crossVectors(r,Up))),i??(i=qe(new w().crossVectors(r,$p))),!i)return;const s=qe(new w().crossVectors(i,r));if(s){if(t){const u=qe(he(t.eastECEF));u&&i.dot(u)<0&&(i=i.clone().negate(),r=r.clone().negate())}return{originECEF:yn(o),eastECEF:yn(i),northECEF:yn(r),upECEF:yn(s)}}},Yp=1e-8,Kp=e=>{const n=qe(he(e.normalECEF));if(!n)return;const{east:t,north:o}=nr(he(e.anchorECEF)),r=n.dot(t),a=n.dot(o);if(!(Math.hypot(r,a)<=Yp))return jm(Math.atan2(r,a))},au=(e,n)=>Ol(e,he(n.anchorECEF),he(n.normalECEF)),Qp=(e,n)=>{if(e.length<3)return 0;const t=he(n.anchorECEF),{xAxis:o,yAxis:r}=rr(he(n.normalECEF).normalize());return Sm(e.map(a=>{const i=new w().subVectors(a,t);return{x:i.dot(o),y:i.dot(r)}}))},Xp=e=>{const n=he(e.normalECEF).normalize(),t=go(he(e.anchorECEF)),o=n.angleTo(t);return eo(Math.min(o,rl-o))},Zp=(e,n)=>{let t=0;for(let a=1;a<e.length;a+=1){const i=e[a-1],s=e[a];i&&s&&(t+=i.distanceTo(s))}const o=e[0],r=e[e.length-1];return n&&e.length>=3&&o&&r&&(t+=r.distanceTo(o)),t},Jp=(e,n,t)=>{var s;const o=e.nodeIds.map(u=>n.get(u)).filter(u=>!!u),r=Zp(o,e.closed),a=o.length<3?null:Vp(o,(t==null?void 0:t.preferredFacingPositionECEF)??null);if(!a)return{...e,perimeterMeters:r,areaSquareMeters:0};const i=e.closed||e.planeLocked?Qp(o,a):0;return{...e,plane:a,planarPolygonLocalFrame:e.type===_.AREA_VERTICAL?Wp(o,a,(s=t==null?void 0:t.previousDerivedGeometry)==null?void 0:s.planarPolygonLocalFrame):void 0,perimeterMeters:r,areaSquareMeters:i,verticalityDeg:Xp(a),bearingRad:Kp(a)}},Ui=Object.freeze({componentEpsilonMeters:.05}),iu=(e,n)=>{const t=go(e),o=new w().subVectors(n,e),r=o.dot(t),a=new w().copy(t).multiplyScalar(r),i=no(o,t),s=i.length(),u=Math.abs(r);if(s<Ui.componentEpsilonMeters||u<Ui.componentEpsilonMeters)return null;const l=new w().addVectors(e,i),d=new w().addVectors(e,a),c=new w().addVectors(e,t),m=Ga(e,c,l),y=p=>m?Ol(p,e,m):p;return{adjacentHorizontalCorner:y(l),adjacentVerticalCorner:y(d)}},Xh=(e,n)=>{const t=iu(e,n);if(!t)return 0;const o=e.distanceTo(t.adjacentHorizontalCorner),r=e.distanceTo(t.adjacentVerticalCorner);return o*r},su=1e-8,$o=.001,eg=1e-6,$i=16,fa=e=>!e||e.lengthSq()<=su?null:e.clone().normalize(),ng=(e,n,t)=>{const o=fa(n),r=fa(t);return o?r&&o.dot(r)<0||o.dot(sa(e))<0?o.negate():o:r||sa(e)},Aa=(e,n,t,o=new gn)=>{const r=Math.max(t,$o),a=n.clone().normalize(),{xAxis:i,yAxis:s}=rr(a);return o.makeBasis(i,s,a).scale(new w(r,r,1)).setPosition(e)},tg=(e,n,t,o=new gn)=>{const{east:r,up:a}=nr(e),i=fa(n)??a.clone(),s=a.clone().cross(i);s.lengthSq()<=Number.EPSILON*Number.EPSILON&&s.copy(r).addScaledVector(i,-r.dot(i)),s.normalize();const u=i.clone().cross(s).normalize(),l=Math.max(t,$o);return o.makeBasis(s,u,i).scale(new w(l,l,1)).setPosition(e)},og=(e,n,t,o,r)=>{const a=Math.max(o,$o);if(r===void 0)return a;const i=e(n);if(!i)return a;const{xAxis:s,yAxis:u}=rr(t),l=new w;let d=0;for(let c=0;c<$i;c+=1){const m=c/$i*al;l.copy(n).addScaledVector(s,Math.cos(m)).addScaledVector(u,Math.sin(m));const y=e(l);if(!y)continue;const p=Math.hypot(y.x-i.x,y.y-i.y);Number.isFinite(p)&&p>d&&(d=p)}return d<=eg?a:Math.max(r/d,$o)},Zh={CESIUM:"cesium",MAPLIBRE_THREE:"maplibre-three"},rg={COLOR:"color",CHROME_MIRROR:"chrome-mirror",FROSTED_GLASS:"frosted-glass"},Kn={GROUND:"ground",COPLANAR:"coplanar"},Wi={IMMEDIATE:"immediate",DELAYED_LINE_FINISH:"delayed-line-finish"},ag={SHIFT:"shift"},ig={SCREEN:"screen",WORLD:"world"},H=e=>!!e&&!e.isDestroyed(),sg=(e,n)=>e===n?!0:!e||!n?!1:e.viewportWidth===n.viewportWidth&&e.viewportHeight===n.viewportHeight&&e.viewKey===n.viewKey,lu=[bn,_.POINT,_.DISTANCE],Yi=Object.freeze({tooltipZIndex:1700,triggerClassName:"inline-flex items-center text-[16px] leading-none"}),En=({actionId:e,title:n,icon:t,onClick:o,dataTestId:r,className:a,ariaLabel:i,disabled:s=!1,visualOptions:u})=>{var f;const l=rn(u),[d,c]=g.useState(!1),m=`${l.actionIconClassName}${a?` ${a}`:""}${s?" cursor-not-allowed opacity-50":" cursor-pointer"}`,y={color:d&&!s?l.actionIconHoverColor:l.actionIconColor};l.actionIconFontSize!==null&&(y.fontSize=l.actionIconFontSize);const p=(f=l.renderActionIcon)==null?void 0:f.call(l,{actionId:e,icon:t,className:m,style:y,dataTestId:r,ariaLabel:i,disabled:s});return O.jsx(il,{title:n,zIndex:Yi.tooltipZIndex,getPopupContainer:A=>{const v=A instanceof HTMLElement?A:document.body;return l.resolveActionTooltipPopupContainer(v)},children:O.jsx("span",{onClick:A=>{if(s){A.stopPropagation();return}o(A)},onMouseEnter:()=>c(!0),onMouseLeave:()=>c(!1),className:Yi.triggerClassName,"aria-label":i,"aria-disabled":s,children:p??O.jsx(Ct,{className:m,style:y,icon:t,"data-test-id":r,"aria-hidden":i?void 0:!0})})})};En.__docgenInfo={description:"",methods:[],displayName:"AnnotationInfoBoxActionIcon",props:{actionId:{required:!0,tsType:{name:"unknown[union]",raw:"(typeof ANNOTATION_INFO_BOX_ACTION_IDS)[keyof typeof ANNOTATION_INFO_BOX_ACTION_IDS]"},description:""},title:{required:!0,tsType:{name:"string"},description:""},icon:{required:!0,tsType:{name:"IconDefinition"},description:""},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: ReactMouseEvent<HTMLElement, MouseEvent>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",elements:[{name:"HTMLElement"},{name:"MouseEvent"}],raw:"ReactMouseEvent<HTMLElement, MouseEvent>"},name:"event"}],return:{name:"void"}}},description:""},dataTestId:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},visualOptions:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};const lg=Object.freeze({flyTo:"Zur Messung fliegen",exportGeoJson:"Als GeoJSON exportieren",show:"Einblenden",hide:"Ausblenden",setReference:"Als Referenzhöhe setzen",lock:"Sperren",unlock:"Entsperren",editStyle:"Darstellung bearbeiten",delete:"Löschen",deleteLocked:"Gesperrte Messung kann nicht gelöscht werden"}),ug=({hidden:e=!1,locked:n=!1,labels:t,onFlyTo:o,onExport:r,onToggleVisibility:a,onToggleLock:i,onEditStyle:s,onDelete:u,onSetReference:l,visualOptions:d,dataTestIdPrefix:c,dataTestIds:m})=>{const y={...lg,...t},p=new Set((d==null?void 0:d.hiddenActionIds)??[]),f=A=>!p.has(A);return O.jsxs("div",{className:"flex items-center gap-2",children:[f(be.FLY_TO)?O.jsx(En,{actionId:be.FLY_TO,title:y.flyTo,icon:qc,onClick:o,dataTestId:(m==null?void 0:m.flyTo)??`${c}-flyto-btn`,visualOptions:d}):null,f(be.EXPORT)?O.jsx(En,{actionId:be.EXPORT,title:y.exportGeoJson,icon:_c,onClick:r,dataTestId:(m==null?void 0:m.export)??`${c}-export-geojson-btn`,visualOptions:d}):null,f(be.VISIBILITY)?O.jsx(En,{actionId:be.VISIBILITY,title:e?y.show:y.hide,icon:e?Pc:Mc,onClick:a,dataTestId:(m==null?void 0:m.visibility)??`${c}-toggle-visibility-btn`,visualOptions:d}):null,l&&f(be.REFERENCE)?O.jsx(En,{actionId:be.REFERENCE,title:y.setReference,icon:Dc,onClick:l,dataTestId:(m==null?void 0:m.reference)??`${c}-set-reference-btn`,visualOptions:d}):null,f(be.LOCK)?O.jsx(En,{actionId:be.LOCK,title:n?y.unlock:y.lock,icon:n?Bc:Fc,onClick:i,dataTestId:(m==null?void 0:m.lock)??`${c}-toggle-lock-btn`,visualOptions:d}):null,s&&f(be.STYLE)?O.jsx(En,{actionId:be.STYLE,title:y.editStyle,icon:Gc,onClick:s,visualOptions:d}):null,f(be.DELETE)?O.jsx(En,{actionId:be.DELETE,title:n?y.deleteLocked:y.delete,icon:jc,onClick:u,dataTestId:(m==null?void 0:m.delete)??`${c}-delete-btn`,disabled:n,visualOptions:d}):null]})};ug.__docgenInfo={description:"",methods:[],displayName:"AnnotationInfoBoxActions",props:{hidden:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},locked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},labels:{required:!1,tsType:{name:"Partial",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};const uu=({pixelWidth:e,fitContentWidth:n=!0,collapsedHorizontalAnchor:t="control-edge",useControlLayout:o=!0,controlPosition:r="bottomright",controlOrder:a=11,style:i,slots:s,visualOptions:u})=>{var c;const l=rn(u),d=((c=s.headingTitle)==null?void 0:c.trim())??"";return O.jsx("div",{"data-test-id":"annotation-info-box",children:O.jsx(Jc,{width:e??l.defaultPixelWidth,fitContentWidth:n,useControlLayout:o,controlPosition:r,controlOrder:a,style:i,bodyStyle:l.bodyPanelStyle,onPanelClick:m=>m.stopPropagation(),collapsible:s.collapsible??!0,header:void 0,headingColor:s.headingColor??l.headingColor,headingStyle:l.headerStyle,footer:s.footer,hideSubtitleWhenCollapsed:!1,hideFooterWhenCollapsed:!0,collapsedHorizontalAnchor:t,heading:d?O.jsx("div",{className:"flex w-full items-center gap-2",children:O.jsx("span",{className:`${l.headerForegroundClassName} ${l.headerTitleClassName}`,title:d,children:d})}):void 0,subtitle:s.subtitle,content:s.content})})};uu.__docgenInfo={description:"",methods:[],displayName:"AnnotationInfoBoxContainer",props:{pixelWidth:{required:!1,tsType:{name:"number"},description:""},fitContentWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},collapsedHorizontalAnchor:{required:!1,tsType:{name:"union",raw:'"control-edge" | "expanded-left"',elements:[{name:"literal",value:'"control-edge"'},{name:"literal",value:'"expanded-left"'}]},description:"",defaultValue:{value:'"control-edge"',computed:!1}},useControlLayout:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},controlPosition:{required:!1,tsType:{name:"union",raw:`| "topleft"
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
}`,signature:{properties:[{key:"headingTitle",value:{name:"string",required:!1}},{key:"headingColor",value:{name:"string",required:!1}},{key:"subtitle",value:{name:"ReactNode",required:!1}},{key:"content",value:{name:"ReactNode",required:!1}},{key:"footer",value:{name:"ReactNode",required:!1}},{key:"collapsible",value:{name:"boolean",required:!1}}]}},description:""}}};const re={TEXT:"text",ACTION:"action",ALERT:"alert",HEADING:"heading"},Lt={TITLE:"title",SECTION:"section"},tt={END:"end",START:"start"},Oe={CLICK:"click",DOUBLE_CLICK:"double-click",ENTER:"enter",BACKSPACE:"backspace",ESCAPE:"escape",SHIFT:"shift",DISC_CENTER:"disc-center",DISC_OUTER:"disc-outer"},ro={INFO:"info",WARNING:"warning"},Ln={INFO:"info",WARNING:"warning"},Ue={STANDARD:"standard",COMPACT:"compact"},dg="#00d9ff",cg="rgba(0, 217, 255, 0.2)",mg="#004b5c",yg="#ef4444",pg="rgba(239, 68, 68, 0.18)",gg="#7f1d1d",$a="--carma-help-baseline",fg="1.5em",vn=1.5,ao=`var(${$a})`,ur=`calc(var(${$a}) / 2)`,Ki=.74,Mr=4/3,va=e=>`${vn/e}em`,du={[$a]:fg,lineHeight:vn},cu={margin:`0 0 ${ao}`,lineHeight:vn},Qi={[Lt.TITLE]:{margin:0,fontWeight:700,lineHeight:vn},[Lt.SECTION]:{margin:`${ur} 0 0`,fontWeight:700,lineHeight:vn}},Ag={gridColumn:"1 / -1"},No={whiteSpace:"normal"},vg={display:"inline-flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"flex-start",minWidth:0},Wo={display:"inline-flex",flexWrap:"wrap",alignItems:"center",gap:"0.34em",minHeight:ao},bg={...Wo,marginTop:ur},Tg={...Wo,justifyContent:"space-between",width:"100%"},Yo="1em",kg="0.5em",mu="max-content minmax(0, 1fr)",Ng="7.75rem minmax(0, 1fr)",Ig=e=>({...du,display:"grid",gridTemplateColumns:e===tt.START?Ng:mu,columnGap:e===tt.START?kg:Yo,rowGap:ur,alignItems:"start"}),yu={...cu,gridColumn:"1 / -1"},hg={...yu,margin:0},pu={[Ue.STANDARD]:{display:"grid",gridTemplateColumns:mu,columnGap:Yo,alignItems:"start",margin:`0 0 ${ur}`,lineHeight:vn},[Ue.COMPACT]:{display:"contents"}},dr={display:"inline-flex",alignItems:"center",justifyContent:"flex-end",gap:"0.22em",minHeight:ao,whiteSpace:"nowrap"},ba={display:"flex",flexDirection:"column",alignItems:"flex-end",gap:0,whiteSpace:"nowrap"},Sg={lineHeight:1},Ta={[Ln.INFO]:{margin:"-0.2rem 0 0.8rem",padding:"0.48rem 0.56rem",borderRadius:4,background:cg,color:mg},[Ln.WARNING]:{margin:"-0.2rem 0 0.8rem",padding:"0.48rem 0.56rem",borderRadius:4,background:pg,color:gg}},Cg={[Ln.INFO]:{...Ta[Ln.INFO],display:"grid",gridColumn:"1 / -1",gridTemplateColumns:"subgrid",columnGap:Yo,rowGap:"0.58rem",margin:"-0.2rem 0 0.8rem",padding:"0.48rem 0"},[Ln.WARNING]:{...Ta[Ln.WARNING],display:"grid",gridColumn:"1 / -1",gridTemplateColumns:"subgrid",columnGap:Yo,rowGap:"0.58rem",margin:"-0.2rem 0 0.8rem",padding:"0.48rem 0"}},Eg={minWidth:0,fontWeight:600,lineHeight:vn},Og={[Ue.STANDARD]:{minWidth:0,lineHeight:vn,whiteSpace:"nowrap"},[Ue.COMPACT]:{minWidth:0,lineHeight:vn}},gu={display:"inline-flex",boxSizing:"border-box",minWidth:"3.4em",height:va(Ki),alignItems:"center",justifyContent:"center",border:"1px solid rgba(0, 0, 0, 0.34)",borderRadius:"0.28rem",background:"rgba(255, 255, 255, 0.68)",boxShadow:"inset 0 -1px 0 rgba(0, 0, 0, 0.2)",color:"#1f2937",fontSize:`${Ki}em`,fontWeight:700,lineHeight:1,padding:"0 0.58em"},Lg={...gu,gap:"0.22rem"},Rg={display:"inline-flex",minWidth:ao,height:ao,alignItems:"center",justifyContent:"center",lineHeight:1},wg={[ro.INFO]:{color:dg},[ro.WARNING]:{color:yg}},xg={display:"inline-flex",alignItems:"center",justifyContent:"center",minWidth:va(Mr),height:va(Mr),fontSize:`${Mr}em`,lineHeight:1,color:me.ACCENT_NEUTRALS},Dr={de:{alternative:"oder",click:"Klick",doubleClick:"2x Klick"},en:{alternative:"or",click:"Click",doubleClick:"Double click"}},qg=e=>{const n=e==null?void 0:e.split("-")[0];return n&&Dr[n]?Dr[n]:Dr.en},Qt=e=>O.jsx("span",{style:gu,children:e}),ka=e=>O.jsxs("span",{style:Lg,children:[O.jsx(Ct,{icon:Vc}),O.jsx("span",{children:e})]}),Na=e=>O.jsx("span",{style:xg,children:O.jsx(Ct,{icon:e})}),io=e=>O.jsx("span",{style:Rg,children:O.jsx(Ct,{style:wg[e],icon:e===ro.WARNING?Hc:zc})}),fu=e=>io(e===Ln.WARNING?ro.WARNING:ro.INFO),Au=(e,n)=>Qt(vy(e,n)),vu=(e,n,t,o)=>{switch(e){case Oe.CLICK:return ka(o.click);case Oe.DOUBLE_CLICK:return ka(o.doubleClick);case Oe.ENTER:return Qt("Enter");case Oe.BACKSPACE:return Au(t,n);case Oe.ESCAPE:return Qt(n.escape);case Oe.SHIFT:return Qt(n.shift);case Oe.DISC_CENTER:return Na(ly);case Oe.DISC_OUTER:return Na(Uc)}},Ko=(e,n,t,o)=>O.jsx("span",{style:dr,children:e.map((r,a)=>O.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"0.22rem"},children:[a>0?O.jsx("span",{children:"+"}):null,vu(r,n,t,o)]},`${r}-${a}`))}),bu=(e,n,t,o,r,a)=>a===Ue.COMPACT?O.jsxs("span",{style:ba,children:[e?io(e):null,n.map((i,s)=>O.jsxs("span",{style:ba,children:[s>0?O.jsx("span",{style:Sg,children:r.alternative}):null,Ko(i,t,o,r)]},`${i.join("+")}-${s}`))]}):O.jsxs("span",{style:dr,children:[e?io(e):null,n.map((i,s)=>O.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"0.22rem"},children:[s>0?O.jsx("span",{children:r.alternative}):null,Ko(i,t,o,r)]},`${i.join("+")}-${s}`))]}),Tu=(e,n,t,o)=>{const r=e.inputAlternatives.length-1;return O.jsxs("span",{style:vg,children:[e.inputAlternatives.length===0?e.leadingLabel&&O.jsx("span",{style:Wo,children:O.jsx("span",{style:No,children:e.leadingLabel})}):e.inputAlternatives.map((a,i)=>O.jsxs("span",{style:e.rightAlignInput&&i===0?Tg:i===0?Wo:bg,children:[i===0&&e.leadingLabel?O.jsx("span",{style:No,children:e.leadingLabel}):null,i===0&&e.indicator?io(e.indicator):null,Ko(a,n,t,o),i<r?O.jsx("span",{children:o.alternative}):null,i===r&&e.trailingLabelAfterLastInput&&e.trailingLabel?O.jsx("span",{style:No,children:e.trailingLabel}):null]},`${a.join("+")}-${i}`)),e.trailingLabel&&!e.trailingLabelAfterLastInput?O.jsx("span",{style:No,children:e.trailingLabel}):null]})};Qt.__docgenInfo={description:"",methods:[],displayName:"renderKeyToken"};ka.__docgenInfo={description:"",methods:[],displayName:"renderPointerToken"};Na.__docgenInfo={description:"",methods:[],displayName:"renderDragTargetToken"};io.__docgenInfo={description:"",methods:[],displayName:"renderActionIndicatorToken"};fu.__docgenInfo={description:"",methods:[],displayName:"renderAlertSeverityToken"};Au.__docgenInfo={description:"",methods:[],displayName:"renderBackspaceToken"};vu.__docgenInfo={description:"",methods:[],displayName:"renderHelpActionInput"};Ko.__docgenInfo={description:"",methods:[],displayName:"renderHelpActionInputCombination"};bu.__docgenInfo={description:"",methods:[],displayName:"renderHelpActionInputAlternatives"};Tu.__docgenInfo={description:"",methods:[],displayName:"renderStartAlignedTrigger"};const _g=()=>typeof navigator>"u"?void 0:navigator.language,Pg=e=>e===Ue.COMPACT?e:Ue.STANDARD,Mg=e=>typeof e=="string"||e.kind===re.TEXT,Xi=e=>typeof e!="string"&&e.kind===re.ALERT,Dg=e=>{const n=e.findIndex(Mg);if(n<=0)return e;const t=e.slice(0,n),o=t.filter(Xi);return o.length===0?e:[...t.filter(r=>!Xi(r)),e[n],...o,...e.slice(n+1)]},Io=(e,n,t=!1)=>{const o=typeof e=="string"?e:e.text;return O.jsx("p",{style:n===Ue.COMPACT?t?hg:yu:cu,children:o},o)},Zi=(e,n,t)=>{const o=e.level??Lt.SECTION;return O.jsx("div",{"data-testid":"annotation-help-heading","data-level":o,style:t===Ue.COMPACT?{...Qi[o],...Ag}:Qi[o],children:e.text},`heading-${e.text}-${n}`)},Ia=(e,n,t,o,r,a,i=tt.END)=>{const u=i===tt.START?Tu(e,t,o,r):(e.inputAlternatives.length>0||e.indicator?bu(e.indicator,e.inputAlternatives,t,o,r,a):null)??O.jsx("span",{style:dr});return O.jsxs("div",{"data-testid":"annotation-help-action",style:pu[a],children:[u,O.jsx("span",{style:Og[a],children:e.description})]},`${e.inputAlternatives.map(l=>l.join("+")).join("-")}-${e.leadingLabel??""}-${n}`)},Ji=(e,n,t,o,r,a)=>{const i=e.actions??[],s=a===Ue.COMPACT?Cg[e.severity]:Ta[e.severity];return O.jsxs("div",{"data-testid":"annotation-help-alert","data-severity":e.severity,style:s,children:[O.jsxs("div",{style:pu[a],children:[O.jsx("span",{style:a===Ue.COMPACT?ba:dr,children:fu(e.severity)}),O.jsx("span",{style:Eg,children:e.text})]}),i.map((u,l)=>Ia(u,l,t,o,r,a))]},`${e.severity}-${e.text}-${n}`)},cr=({items:e,layout:n,locale:t,platform:o,actionTriggerAlign:r=tt.END})=>{const a=Pg(n),i=t??_g(),s=Ay(i),u=fy(o),l=qg(i),d=Dg(e);if(a===Ue.COMPACT){const m=d.map((y,p)=>typeof y=="string"||y.kind===re.TEXT?Io(y,a,p===d.length-1):y.kind===re.HEADING?Zi(y,p,a):y.kind===re.ALERT?Ji(y,p,s,u,l,a):Ia(y,p,s,u,l,a,r));return O.jsx("div",{"data-testid":"annotation-help-content",style:Ig(r),children:m})}const c=d.map((m,y)=>typeof m=="string"||m.kind===re.TEXT?Io(m,a):m.kind===re.HEADING?Zi(m,y,a):m.kind===re.ALERT?Ji(m,y,s,u,l,a):Ia(m,y,s,u,l,a,r));return O.jsx("div",{"data-testid":"annotation-help-content",style:du,children:c})};cr.__docgenInfo={description:"",methods:[],displayName:"AnnotationInfoBoxHelpContent",props:{items:{required:!0,tsType:{name:"unknown"},description:""},layout:{required:!1,tsType:{name:"unknown[union]",raw:"(typeof ANNOTATION_INFO_BOX_HELP_LAYOUTS)[keyof typeof ANNOTATION_INFO_BOX_HELP_LAYOUTS]"},description:""},locale:{required:!1,tsType:{name:"string"},description:""},platform:{required:!1,tsType:{name:"KeyboardDisplayPlatform"},description:""},actionTriggerAlign:{required:!1,tsType:{name:"unknown[union]",raw:"(typeof ANNOTATION_INFO_BOX_HELP_ACTION_TRIGGER_ALIGNMENTS)[keyof typeof ANNOTATION_INFO_BOX_HELP_ACTION_TRIGGER_ALIGNMENTS]"},description:"",defaultValue:{value:'"end"',computed:!1}}}};const Bg=({items:e,className:n,visualOptions:t})=>{const o=rn(t),r=o.subtitleTextClassName.split(/\s+/).filter(a=>a.length>0&&!a.startsWith("px-")).join(" ");return O.jsx("dl",{className:`m-0 flex flex-wrap items-start tabular-nums${n?` ${n}`:""}`,style:{columnGap:"1.35rem",rowGap:"0.5rem"},children:e.map((a,i)=>O.jsxs("div",{className:"grid max-w-full min-w-[5rem] flex-[0_1_auto] grid-rows-[auto,auto] content-start items-start gap-y-[0.1em] text-left",children:[O.jsx("dt",{className:r,style:o.subtitleTextStyle,children:a.label}),O.jsx("dd",{className:"m-0 leading-[1.25]",children:a.value})]},a.id??i))})};Bg.__docgenInfo={description:"",methods:[],displayName:"AnnotationInfoBoxMetricGrid",props:{items:{required:!0,tsType:{name:"unknown"},description:""},className:{required:!1,tsType:{name:"string"},description:""},visualOptions:{required:!1,tsType:{name:"Partial",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Partial<AnnotationInfoBoxVisualOptions>"},description:""}}};const Fg=({children:e,className:n,style:t,visualOptions:o})=>{const r=rn(o);return O.jsx("div",{className:`${r.subtitleMetaTextClassName}${n?` ${n}`:""}`,style:{...r.subtitleMetaTextStyle,...t},children:e})};Fg.__docgenInfo={description:"",methods:[],displayName:"AnnotationInfoBoxMetaText",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""},visualOptions:{required:!1,tsType:{name:"Partial",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Partial<AnnotationInfoBoxVisualOptions>"},description:""}}};const Gg=Object.freeze({entrySingular:"Messung",entryPlural:"Messungen",availableSuffix:"verfügbar",previousAriaLabel:"Vorherige Messung",nextAriaLabel:"Nächste Messung",counterSeparator:"von"}),es=(e,n)=>`${e} ${e===1?n.entrySingular:n.entryPlural} ${n.availableSuffix}`.trim(),jg=({totalEntries:e,currentIndex:n,instructionText:t,availabilityLabel:o,labels:r,onFlyToAll:a,onPrevious:i,onNext:s,visualOptions:u})=>{var p,f;const l=rn(u),d={...Gg,...r};if(e<=0&&!t)return null;const c={fontSize:l.navigationLinkFontSize,border:"none",background:"transparent",padding:0,userSelect:"none"},m=((p=l.navigationControlLabels)==null?void 0:p.previous)??O.jsx(Ct,{icon:$c}),y=((f=l.navigationControlLabels)==null?void 0:f.next)??O.jsx(Ct,{icon:Wc});return O.jsxs(O.Fragment,{children:[t?O.jsx("div",{className:`${l.navigationInstructionContainerClassName} ${l.mutedTextClassName}`,children:O.jsx("span",{children:t})}):null,e>0?O.jsx("div",{className:l.navigationAvailabilityContainerClassName,children:a?O.jsx("button",{type:"button",className:`${l.linkTextClassName} cursor-pointer`,onClick:a,style:{border:"none",background:"transparent",padding:0},children:o??es(e,d)}):O.jsx("span",{className:l.linkTextClassName,children:o??es(e,d)})}):null,e>0?O.jsxs("div",{className:l.navigationSummaryContainerClassName,children:[O.jsx("button",{type:"button",className:`renderAsLink cursor-pointer select-none ${l.linkTextClassName}`,onClick:i,"data-test-id":"switch-measurement-left",style:c,"aria-label":d.previousAriaLabel,children:m}),O.jsxs("span",{className:"mx-4",children:[n+1," ",d.counterSeparator," ",e]}),O.jsx("button",{type:"button",className:`renderAsLink cursor-pointer select-none ${l.linkTextClassName}`,onClick:s,"data-test-id":"switch-measurement-right",style:c,"aria-label":d.nextAriaLabel,children:y})]}):null]})};jg.__docgenInfo={description:"",methods:[],displayName:"AnnotationInfoBoxNavigation",props:{totalEntries:{required:!0,tsType:{name:"number"},description:""},currentIndex:{required:!0,tsType:{name:"number"},description:""},instructionText:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},availabilityLabel:{required:!1,tsType:{name:"ReactNode"},description:""},labels:{required:!1,tsType:{name:"Partial",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};const mr=({children:e,className:n,style:t,visualOptions:o})=>{const r=rn(o);return O.jsx("div",{className:`${r.bodyContainerClassName} ${r.bodyTextClassName}${n?` ${n}`:""}`,style:{...r.bodyTextStyle,...t},children:e})};mr.__docgenInfo={description:"",methods:[],displayName:"AnnotationInfoBoxTextContent",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""},visualOptions:{required:!1,tsType:{name:"Partial",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Partial<AnnotationInfoBoxVisualOptions>"},description:""}}};const yt=e=>e.trim(),cn=Object.freeze({borderRadiusRem:"0.2143rem",shortLabelMaxLength:64,shortLabelWidthPaddingCh:.5,shortLabelMinWidthCh:2.5}),jt=e=>yt(e).slice(0,cn.shortLabelMaxLength),Hg=e=>e.slice(0,cn.shortLabelMaxLength),zg=({value:e,placeholder:n,onCommit:t,readOnly:o=!1,shortLabelValue:r,shortLabelPlaceholder:a,onShortLabelCommit:i,visualOptions:s})=>{const u=rn(s),[l,d]=g.useState(()=>yt(e)),[c,m]=g.useState(()=>jt(r??"")),y=g.useRef(null),p=g.useRef(null),f=cn.shortLabelMaxLength+cn.shortLabelWidthPaddingCh,A=Math.min(Math.max(yt(c||a||"").length+cn.shortLabelWidthPaddingCh,cn.shortLabelMinWidthCh),f);g.useEffect(()=>{d(yt(e))},[e]),g.useEffect(()=>{m(jt(r??""))},[r]);const v=I=>{if(o){d(yt(e));return}const C=yt(I);d(C),t(C)},T=I=>{if(!i||o){m(jt(r??""));return}const C=jt(I);if(!C){const L=jt(r??"");m(L);return}m(C),i(C)},b=I=>{I.stopPropagation()},h=I=>{var C;I.key==="Enter"&&(I.preventDefault(),(C=y.current)==null||C.blur())},k=I=>{var C;I.key==="Enter"&&(I.preventDefault(),(C=p.current)==null||C.blur())},N={...u.titleTextStyle,flex:"0 1 auto",minWidth:"1ch",maxWidth:"100%",fieldSizing:"content"},S={...u.titleTextStyle,borderRadius:cn.borderRadiusRem,flex:"0 1 auto",width:`${A}ch`,minWidth:`${cn.shortLabelMinWidthCh}ch`,maxWidth:`min(${f}ch, 100%)`,fieldSizing:"content"};return O.jsxs("div",{className:"inline-flex min-w-0 max-w-full flex-1 items-center",style:{columnGap:"0.35em"},onMouseDown:b,onClick:b,children:[O.jsx("input",{ref:y,type:"text",value:l,placeholder:n,readOnly:o,"aria-readonly":o,className:u.titleInputClassName,style:N,onMouseDown:b,onClick:b,onChange:I=>d(I.target.value),onBlur:I=>v(I.target.value),onKeyDown:h}),i?O.jsx("input",{ref:p,type:"text",value:c,placeholder:a,readOnly:o,"aria-readonly":o,maxLength:cn.shortLabelMaxLength,className:u.shortLabelInputClassName,style:S,onMouseDown:b,onClick:b,onChange:I=>m(Hg(I.target.value)),onBlur:I=>T(I.target.value),onKeyDown:k}):null]})};zg.__docgenInfo={description:"",methods:[],displayName:"AnnotationInfoBoxTitleInput",props:{value:{required:!0,tsType:{name:"string"},description:""},placeholder:{required:!0,tsType:{name:"string"},description:""},onCommit:{required:!0,tsType:{name:"signature",type:"function",raw:"(nextValue: string) => void",signature:{arguments:[{type:{name:"string"},name:"nextValue"}],return:{name:"void"}}},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},shortLabelValue:{required:!1,tsType:{name:"string"},description:""},shortLabelPlaceholder:{required:!1,tsType:{name:"string"},description:""},onShortLabelCommit:{required:!1,tsType:{name:"signature",type:"function",raw:"(nextValue: string) => void",signature:{arguments:[{type:{name:"string"},name:"nextValue"}],return:{name:"void"}}},description:""},visualOptions:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};const Vg={toolButtonWidthPx:48},Ug={wrapper:"w-fit max-w-full flex items-start gap-2 overflow-visible",toolButtonBase:"flex h-8 w-12 min-w-12 items-center justify-center rounded-[10px] bg-white px-2 text-gray-700 button-shadow transition-colors hover:text-gray-900",toolButtonActive:"text-[#1677ff]",toolButtonInactive:"",toolButtonDisabled:"cursor-not-allowed opacity-45 hover:text-gray-700",toolButtonBackdrop:"pointer-events-none absolute inset-0 z-0 overflow-hidden rounded-[10px]",toolGroup:"relative flex min-w-12 items-center overflow-visible",toolButtonShell:"relative overflow-visible",toolButtonIcon:"inline-flex items-center justify-center text-base leading-none",toolButtonBadge:"absolute right-0 top-0 z-10 inline-flex h-5 min-w-5 translate-x-1/3 -translate-y-1/3 items-center justify-center rounded-full bg-[#4b5563] px-1 text-[12px] font-medium leading-none text-white shadow-sm",separator:"inline-block h-[18px] w-px bg-gray-300"},ku=({activeToolId:e,tools:n,onToolSelect:t,classNames:o,metrics:r,tooltipPlacement:a="top",getTooltipPopupContainer:i,renderToolButtonBackdrop:s,showToolTypeIndicators:u=!1})=>{const l={...Ug,...o},d={...Vg,...r};return O.jsx("div",{className:l.wrapper,onClick:c=>c.stopPropagation(),children:n.map(c=>{const m=c.id===e,y=c.annotationCount??0,p=c.tooltipContent??c.tooltip,f=c.ariaLabel??c.tooltip,A=s==null?void 0:s(c);return O.jsxs("div",{className:l.toolGroup,children:[O.jsxs("div",{className:l.toolButtonShell,style:{width:d.toolButtonWidthPx},children:[u&&y>0?O.jsx("span",{className:l.toolButtonBadge,children:y}):null,O.jsx(il,{title:p,placement:a,getPopupContainer:i,children:O.jsxs("button",{type:"button",onClick:()=>t(c.id),"aria-pressed":m,"aria-label":f,disabled:c.disabled,className:["relative z-[1] overflow-hidden",l.toolButtonBase,m?l.toolButtonActive:l.toolButtonInactive,c.disabled?l.toolButtonDisabled:""].join(" "),style:{width:d.toolButtonWidthPx},children:[A?O.jsx("span",{className:l.toolButtonBackdrop,"aria-hidden":"true",children:A}):null,O.jsx("span",{className:["relative z-[1]",l.toolButtonIcon].join(" "),children:c.icon})]})})]}),c.separatorAfter?O.jsx("span",{className:l.separator,"aria-hidden":"true"}):null]},c.id)})})};ku.__docgenInfo={description:"",methods:[],displayName:"AnnotationsToolbar",props:{activeToolId:{required:!0,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},tools:{required:!0,tsType:{name:"unknown"},description:""},onToolSelect:{required:!0,tsType:{name:"signature",type:"function",raw:"(toolId: string) => void",signature:{arguments:[{type:{name:"string"},name:"toolId"}],return:{name:"void"}}},description:""},classNames:{required:!1,tsType:{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"tooltip",value:{name:"string",required:!0}},{key:"tooltipContent",value:{name:"ReactNode",required:!1}},{key:"icon",value:{name:"ReactNode",required:!1}},{key:"annotationCount",value:{name:"number",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"separatorAfter",value:{name:"boolean",required:!1}},{key:"ariaLabel",value:{name:"string",required:!1}}]}},name:"tool"}],return:{name:"ReactNode"}}},description:""},showToolTypeIndicators:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const Te={LABEL:"label",VISUALIZER:"visualizer"},ha=e=>`[${e}="true"]`,ns="data-annotation-label-overlay-root",ts="data-annotation-visualizer-overlay-root",Nu="data-annotation-visualizer-overlay-container",$g=ha(Nu),Wg=Object.freeze([Te.VISUALIZER,Te.LABEL]),Yg=Object.freeze({[Te.LABEL]:{rootAttribute:ns,containerAttribute:mm,rootSelector:ha(ns),containerSelector:ym},[Te.VISUALIZER]:{rootAttribute:ts,containerAttribute:Nu,rootSelector:ha(ts),containerSelector:$g}}),Iu=e=>Yg[e],hu=(e,n=Te.LABEL)=>{var i,s;const{rootSelector:t,containerSelector:o}=Iu(n);let r=e.getOverlayContainer(),a=r;for(;r;){if(r.matches(o))return r;const u=(i=r.querySelector)==null?void 0:i.call(r,o);if(u instanceof HTMLElement)return u;if(r.matches(t))return r;const l=(s=r.querySelector)==null?void 0:s.call(r,t);if(l instanceof HTMLElement)return l;a=r,r=r.parentElement}return a},Kg={position:"absolute",inset:0,overflow:"hidden",pointerEvents:"none",isolation:"isolate"},Qg={position:"absolute",inset:0,overflow:"hidden",pointerEvents:"none"},Xg=Object.freeze({[Te.VISUALIZER]:100,[Te.LABEL]:110}),Su=({groups:e=Wg})=>O.jsx(O.Fragment,{children:e.map(n=>{const{rootAttribute:t,containerAttribute:o}=Iu(n);return O.jsx("div",{[t]:"true",style:{...Kg,zIndex:Xg[n]},children:O.jsx("div",{[o]:"true",style:Qg})},n)})});Su.__docgenInfo={description:"",methods:[],displayName:"AnnotationOverlayRoots",props:{groups:{required:!1,tsType:{name:"unknown"},description:"",defaultValue:{value:`Object.freeze([
  ANNOTATION_OVERLAY_GROUP.VISUALIZER,
  ANNOTATION_OVERLAY_GROUP.LABEL,
] as const satisfies readonly AnnotationOverlayGroup[])`,computed:!0}}}};var Cu={exports:{}},Eu={};/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fo=g;function Zg(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Jg=typeof Object.is=="function"?Object.is:Zg,ef=fo.useSyncExternalStore,nf=fo.useRef,tf=fo.useEffect,of=fo.useMemo,rf=fo.useDebugValue;Eu.useSyncExternalStoreWithSelector=function(e,n,t,o,r){var a=nf(null);if(a.current===null){var i={hasValue:!1,value:null};a.current=i}else i=a.current;a=of(function(){function u(y){if(!l){if(l=!0,d=y,y=o(y),r!==void 0&&i.hasValue){var p=i.value;if(r(p,y))return c=p}return c=y}if(p=c,Jg(d,y))return p;var f=o(y);return r!==void 0&&r(p,f)?p:(d=y,c=f)}var l=!1,d,c,m=t===void 0?null:t;return[function(){return u(n())},m===null?void 0:function(){return u(m())}]},[n,t,o,r]);var s=ef(e,a[0],a[1]);return tf(function(){i.hasValue=!0,i.value=s},[s]),rf(s),s};Cu.exports=Eu;var af=Cu.exports,Me="default"in bi?Ec:bi,os=Symbol.for("react-redux-context"),rs=typeof globalThis<"u"?globalThis:{};function sf(){if(!Me.createContext)return{};const e=rs[os]??(rs[os]=new Map);let n=e.get(Me.createContext);return n||(n=Me.createContext(null),e.set(Me.createContext,n)),n}var qn=sf(),lf=()=>{throw new Error("uSES not initialized!")};function Wa(e=qn){return function(){return Me.useContext(e)}}var Ou=Wa(),Lu=lf,uf=e=>{Lu=e},df=(e,n)=>e===n;function cf(e=qn){const n=e===qn?Ou:Wa(e),t=(o,r={})=>{const{equalityFn:a=df,devModeChecks:i={}}=typeof r=="function"?{equalityFn:r}:r,{store:s,subscription:u,getServerState:l,stabilityCheck:d,identityFunctionCheck:c}=n();Me.useRef(!0);const m=Me.useCallback({[o.name](p){return o(p)}}[o.name],[o,d,i.stabilityCheck]),y=Lu(u.addNestedSub,s.getState,l||s.getState,m,a);return Me.useDebugValue(y),y};return Object.assign(t,{withTypes:()=>t}),t}function mf(e){e()}function yf(){let e=null,n=null;return{clear(){e=null,n=null},notify(){mf(()=>{let t=e;for(;t;)t.callback(),t=t.next})},get(){const t=[];let o=e;for(;o;)t.push(o),o=o.next;return t},subscribe(t){let o=!0;const r=n={callback:t,next:null,prev:n};return r.prev?r.prev.next=r:e=r,function(){!o||e===null||(o=!1,r.next?r.next.prev=r.prev:n=r.prev,r.prev?r.prev.next=r.next:e=r.next)}}}}var as={notify(){},get:()=>[]};function pf(e,n){let t,o=as,r=0,a=!1;function i(f){d();const A=o.subscribe(f);let v=!1;return()=>{v||(v=!0,A(),c())}}function s(){o.notify()}function u(){p.onStateChange&&p.onStateChange()}function l(){return a}function d(){r++,t||(t=e.subscribe(u),o=yf())}function c(){r--,t&&r===0&&(t(),t=void 0,o.clear(),o=as)}function m(){a||(a=!0,d())}function y(){a&&(a=!1,c())}const p={addNestedSub:i,notifyNestedSubs:s,handleChangeWrapper:u,isSubscribed:l,trySubscribe:m,tryUnsubscribe:y,getListeners:()=>o};return p}var gf=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",ff=typeof navigator<"u"&&navigator.product==="ReactNative",Af=gf||ff?Me.useLayoutEffect:Me.useEffect;function vf({store:e,context:n,children:t,serverState:o,stabilityCheck:r="once",identityFunctionCheck:a="once"}){const i=Me.useMemo(()=>{const l=pf(e);return{store:e,subscription:l,getServerState:o?()=>o:void 0,stabilityCheck:r,identityFunctionCheck:a}},[e,o,r,a]),s=Me.useMemo(()=>e.getState(),[e]);Af(()=>{const{subscription:l}=i;return l.onStateChange=l.notifyNestedSubs,l.trySubscribe(),s!==e.getState()&&l.notifyNestedSubs(),()=>{l.tryUnsubscribe(),l.onStateChange=void 0}},[i,s]);const u=n||qn;return Me.createElement(u.Provider,{value:i},t)}var bf=vf;function Ru(e=qn){const n=e===qn?Ou:Wa(e),t=()=>{const{store:o}=n();return o};return Object.assign(t,{withTypes:()=>t}),t}var Tf=Ru();function kf(e=qn){const n=e===qn?Tf:Ru(e),t=()=>n().dispatch;return Object.assign(t,{withTypes:()=>t}),t}uf(af.useSyncExternalStoreWithSelector);const Rt={AUTHORING:"authoring",EXTERNAL:"external"},so={DEFAULT:"default",CUSTOM:"custom"},Br={RELATIVE:"relative",ABSOLUTE:"absolute"},lo=(e,n)=>n?e.find(t=>t.id===n)??null:null,Ya=e=>new Set(e.filter(n=>n.annotationRole===Rt.EXTERNAL||n.readOnly||n.locked).flatMap(n=>n.nodeIds)),Nf=e=>e===Br.ABSOLUTE?Br.RELATIVE:Br.ABSOLUTE;var ge=[];for(var Fr=0;Fr<256;++Fr)ge.push((Fr+256).toString(16).slice(1));function If(e,n=0){return(ge[e[n+0]]+ge[e[n+1]]+ge[e[n+2]]+ge[e[n+3]]+"-"+ge[e[n+4]]+ge[e[n+5]]+"-"+ge[e[n+6]]+ge[e[n+7]]+"-"+ge[e[n+8]]+ge[e[n+9]]+"-"+ge[e[n+10]]+ge[e[n+11]]+ge[e[n+12]]+ge[e[n+13]]+ge[e[n+14]]+ge[e[n+15]]).toLowerCase()}var ho,hf=new Uint8Array(16);function Sf(){if(!ho&&(ho=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!ho))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return ho(hf)}var Cf=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto);const is={randomUUID:Cf};function Ef(e,n,t){if(is.randomUUID&&!e)return is.randomUUID();e=e||{};var o=e.random||(e.rng||Sf)();return o[6]=o[6]&15|64,o[8]=o[8]&63|128,If(o)}const wu=()=>Ef(),xu=e=>new Map(e.flatMap(n=>n.nodeIds.map(t=>[t,n.id]))),Po=(e,n)=>xu(e).get(n)??null,Of=(e,n)=>{var t;return((t=e.find(o=>o.nodeIds.includes(n)))==null?void 0:t.nodeIds)??[n]},_n=({nodes:e,nodeLinks:n})=>{const t=new Set(e.map(i=>i.id)),o=n.map(i=>({...i,nodeIds:Array.from(new Set(i.nodeIds.filter(s=>t.has(s))))})).filter(i=>i.nodeIds.length>0),r=new Set(o.flatMap(i=>i.nodeIds)),a=e.filter(i=>!r.has(i.id)).map(i=>({id:i.id,nodeIds:[i.id]}));return[...o,...a]},Lf=.1,Rf=(e,n)=>{const t=Kt(n.latitude-e.latitude),o=Kt(n.longitude-e.longitude),r=Kt((e.latitude+n.latitude)/2),a=o*Math.cos(r)*Ti.semiMajorAxis,i=t*Ti.semiMajorAxis,s=n.altitude-e.altitude;return Math.hypot(a,i,s)},qu=e=>typeof e=="string"&&e.trim().length>0?e.trim():null,_u=({nodes:e,nodeLinks:n,nodeId:t,movedNodeIds:o,linkToNodeId:r})=>{const a=e.find(p=>p.id===t)??null,i=Array.from(new Set(o.filter(Boolean)));if(!a||i.length===0)return[...n];const s=new Set(i),u=n.find(p=>p.nodeIds.includes(t))??null,l=qu(r),d=l&&!s.has(l)?n.find(p=>p.nodeIds.includes(l))??null:null;return d!==null&&!d.nodeIds.some(p=>s.has(p))?_n({nodes:e,nodeLinks:n.map(p=>p.id===d.id?{...p,nodeIds:Array.from(new Set([...p.nodeIds,...i]))}:{...p,nodeIds:p.nodeIds.filter(f=>!s.has(f))})}):!u||i.length===u.nodeIds.length?[...n]:e.filter(p=>u.nodeIds.includes(p.id)&&!s.has(p.id)).some(p=>Rf(p.coordinate,a.coordinate)>Lf)?_n({nodes:e,nodeLinks:n.map(p=>p.id===u.id?{...p,nodeIds:p.nodeIds.filter(f=>!s.has(f))}:{...p})}):[...n]},bt=e=>e.reduce((n,t)=>{const o=t.match(/(\d+)$/),r=o?Number(o[1]):Number.NaN;return Number.isFinite(r)?Math.max(n,r):n},0),Pu=({nodeIds:e,closed:n,previousEdgeNumericSuffix:t})=>{const o=e.slice(0,-1).map((r,a)=>({startNodeId:r,endNodeId:e[a+1]}));return n&&e.length>=3&&o.push({startNodeId:e[e.length-1],endNodeId:e[0]}),o.map((r,a)=>({id:`edge-${t+a+1}`,...r}))},wf=({toolType:e,coordinates:n,options:t,linkedNodeGroupIds:o,measurementSequenceRef:r,nodeSequenceRef:a,edgeSequenceRef:i})=>{r.current+=1;const s=`${e}-${r.current}`,u=n.map(m=>(a.current+=1,{id:`node-${a.current}`,coordinate:m})),l=u.map((m,y)=>({id:qu(o==null?void 0:o[y])??m.id,nodeIds:[m.id]})),d=Pu({nodeIds:u.map(m=>m.id),closed:!!(t!=null&&t.closed),previousEdgeNumericSuffix:i.current});return i.current+=d.length,{annotationEntry:{id:s,uuid:wu(),toolType:e,...t,nodeIds:u.map(m=>m.id),edgeIds:d.map(m=>m.id)},nodes:u,linkedNodeGroups:l,edges:d}},Qo={INTERACTION:"interaction",MEASUREMENT:"measurement"},ue={SESSION:"session",POINT_QUERY:"pointQuery",ADD_ANNOTATION:"addAnnotation",AUTHORING_VISUALS:"authoringVisuals",KEYBOARD:"keyboard",VISUAL_MODELS:"visualModels",INFO_BOX:"infoBox"},ss=new Set,xf=[],qf=(e,n)=>{const t=`${e}:${n}`;ss.has(t)||(ss.add(t),console.warn(`[annotations-runtime] Plugin "${e}" is missing capability implementation "${n}". Using a no-op fallback at registry build time.`))},_f=(e,n)=>{const t=e.descriptor.order-n.descriptor.order;return t!==0?t:e.id.localeCompare(n.id)},Pf=e=>{const n=new Map;return e.forEach(t=>{if(n.get(t.id))throw new Error(`Duplicate annotation tool plugin registration for "${t.id}".`);n.set(t.id,t)}),n},Mf=e=>e.reduce((n,t)=>{if(!t.annotationType)return n;const o=n.get(t.annotationType)??[];return n.set(t.annotationType,[...o,t]),n},new Map),Df=e=>{const n=new Map;e.forEach(t=>{var a;const o=((a=t.descriptor.shortcutKey)==null?void 0:a.trim().toLowerCase())??null;if(!o)return;const r=n.get(o);if(r&&r!==t.id)throw new Error(`Duplicate annotation tool shortcut key "${t.descriptor.shortcutKey}" for "${r}" and "${t.id}".`);n.set(o,t.id)})},Bf=(e,n)=>!!(n===ue.SESSION&&e.session||n===ue.POINT_QUERY&&e.pointQuery||n===ue.ADD_ANNOTATION&&e.addAnnotation||n===ue.AUTHORING_VISUALS&&e.authoringVisuals||n===ue.KEYBOARD&&e.keyboard||n===ue.VISUAL_MODELS&&e.visualModels||n===ue.INFO_BOX&&e.infoBox||n!==ue.SESSION&&n!==ue.POINT_QUERY&&n!==ue.ADD_ANNOTATION&&n!==ue.AUTHORING_VISUALS&&n!==ue.KEYBOARD&&n!==ue.VISUAL_MODELS&&n!==ue.INFO_BOX),Ff=e=>{if(e.descriptor.id!==e.id)throw new Error(`Plugin "${e.id}" descriptor id "${e.descriptor.id}" must match plugin id.`);if(e.kind==="measurement"&&!e.visualModels)throw new Error(`Measurement plugin "${e.id}" must implement visualModels.build(...).`);if(e.kind==="measurement"&&!e.annotationType)throw new Error(`Measurement plugin "${e.id}" must declare annotationType.`);let n={...e};return(e.capabilities??[]).forEach(t=>{if(!Bf(n,t)){if(qf(e.id,t),t===ue.SESSION){n={...n,session:{createSession:()=>({toolType:e.id,requestStart:()=>{},requestFinish:()=>!1,discardDraft:()=>{}})}};return}if(t===ue.POINT_QUERY){n={...n,pointQuery:{onPointCreated:()=>{}}};return}if(t===ue.ADD_ANNOTATION){n={...n,addAnnotation:{resolveOptions:()=>{}}};return}if(t===ue.AUTHORING_VISUALS){n={...n,authoringVisuals:{createController:()=>null}};return}if(t===ue.KEYBOARD){n={...n,keyboard:{onKeyDown:()=>!1}};return}if(t===ue.VISUAL_MODELS){n={...n,visualModels:{build:()=>null}};return}t===ue.INFO_BOX&&(n={...n,infoBox:{getSlots:()=>null}})}}),n},Gf=e=>{const t=[...e.map(Ff)].sort(_f);Df(t);const o=Pf(t),r=Mf(t);return{plugins:t,orderedDescriptors:t.map(a=>a.descriptor),byId:o,getPlugin:a=>o.get(a),assertPlugin:a=>{const i=o.get(a);if(!i)throw new Error(`Missing annotation tool plugin for tool id "${a}".`);return i},getPluginsByAnnotationType:a=>r.get(a)??xf}},Mu=e=>{var t;const n=e.find(o=>o.id===bn&&o.kind===Qo.INTERACTION);return n?n.id:((t=e.find(o=>o.kind===Qo.INTERACTION))==null?void 0:t.id)??null},jf=e=>{var n;return((n=e.getPlugin(bn))==null?void 0:n.id)??Mu(e.plugins)},Du=e=>!!e.readOnly,Bu=e=>e.annotationRole??(e.externalCollection?Rt.EXTERNAL:Rt.AUTHORING),yr=e=>e.annotationEntries.filter(n=>Bu(n)===Rt.AUTHORING),Hf=(e,n={})=>{if(n.roles===void 0)return e.annotationEntries;const t=new Set(n.roles);return e.annotationEntries.filter(o=>t.has(Bu(o)))},zf=e=>yr({annotationEntries:e}).reduce((n,t)=>(n.set(t.toolType,(n.get(t.toolType)??0)+1),n),new Map),Vf=({activeToolType:e,registry:n,defaultToolId:t=bn})=>{if(e){const o=n.getPlugin(e);if(o)return o}return n.getPlugin(t)??null},{AREA_GROUND:Uf,AREA_PLANAR:$f,AREA_VERTICAL:Wf,DISTANCE:Yf,LABEL:Kf,POINT:Qf,POLYLINE:Xf}=_,Zf=new Set([Qf,Yf,Xf,Uf,$f,Wf,Kf]),pr=e=>Zf.has(e),Jf=e=>{if(e.shortLabelSource===so.CUSTOM)return null;const n=e.shortLabelCounter;return typeof n=="number"&&Number.isFinite(n)&&n>0?Math.floor(n):null},Fu=e=>{let n=1;for(;e!=null&&e.has(n);)n+=1;return n},Gu=e=>{var t;const n={};for(const o of e){if(!pr(o.toolType))continue;const r=Jf(o);r!==null&&(n[t=o.toolType]??(n[t]=new Set)).add(r)}return n},gr=e=>{const n=Gu(e),t={};for(const[o,r]of Object.entries(n))t[o]=Fu(r);return t},eA=({annotationEntries:e,toolType:n})=>pr(n)?gr(e)[n]??1:1,ju=e=>{const n=Gu(e);return e.map(t=>{var a;if(!pr(t.toolType)||(a=t.shortLabel)!=null&&a.trim())return t;const o=n[t.toolType]??new Set;n[t.toolType]=o;const r=Fu(o);return o.add(r),{...t,shortLabel:Xl(t.toolType,r),shortLabelSource:so.DEFAULT,shortLabelCounter:r}})},nA=e=>e.uuid?e:{...e,uuid:wu()},{AREA_GROUND:tA,AREA_PLANAR:oA,AREA_VERTICAL:rA,LABEL:aA,POINT:iA}=_,sA=1,lA=new Set([tA,oA,rA]),uA=new Set([iA,aA]),Sa=e=>{if(e!==void 0)return e===null||typeof e=="string"||typeof e=="number"||typeof e=="boolean"?e:Array.isArray(e)?e.map(n=>Sa(n)).filter(n=>n!==void 0):typeof e=="object"?Object.fromEntries(Object.entries(e).flatMap(([n,t])=>{const o=Sa(t);return o===void 0?[]:[[n,o]]})):String(e)},dA=e=>Sa(e)??{},Gr=({longitude:e,latitude:n,altitude:t})=>[e,n,t??0],cA=({toolType:e,coordinates:n})=>{if(n.length===0)return null;if(lA.has(e)&&n.length>=3){const t=n.map(Gr);return{type:"Polygon",coordinates:[[...t,t[0]]]}}return!uA.has(e)&&n.length>=2?{type:"LineString",coordinates:n.map(Gr)}:{type:"Point",coordinates:Gr(n[0])}},ls=e=>{const n=(e??"").trim().toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"");return n.length>0?n:"annotation"},mA=e=>{var n,t;return{kind:e.toolType,name:((n=e.displayName)==null?void 0:n.trim())||((t=e.shortLabel)==null?void 0:t.trim())||e.id}},Hu=({annotation:e,coordinates:n})=>{const t=cA({toolType:e.toolType,coordinates:n});return t?{type:"FeatureCollection",features:[{type:"Feature",id:e.id,geometry:t,properties:{exportVersion:sA,annotationId:e.id,annotationKind:e.toolType,annotation:dA(e),nodes:n.map((r,a)=>({order:a,coordinate:r}))}}]}:null},yA=({annotations:e})=>{const n=e.flatMap(({annotation:t,coordinates:o})=>{const r=Hu({annotation:t,coordinates:o});return(r==null?void 0:r.features)??[]});return n.length===0?null:{type:"FeatureCollection",features:n}},us=(e,n)=>{if(!n||typeof window>"u"||typeof document>"u")return;const t=new Blob([JSON.stringify(n,null,2)],{type:"application/geo+json;charset=utf-8"}),o=window.URL.createObjectURL(t),r=document.createElement("a");r.href=o,r.download=e,document.body.appendChild(r),r.click(),document.body.removeChild(r),window.setTimeout(()=>{window.URL.revokeObjectURL(o)},0)},uo=e=>{const{nodeIds:n,edgeIds:t,...o}=e;return{...o,nodeIds:[...n],edgeIds:[...t]}},Ka=e=>{const n=uo(e);return delete n.updatedAt,n},ot=e=>({...e,coordinate:{...e.coordinate}}),rt=e=>({...e}),at=e=>({...e,nodeIds:[...e.nodeIds]}),wt="annotations-runtime-persistence",fr=1,zu=new Set([1,2]),Vu="carma-3d-annotations-geojson",pA=1,gA="geoportal-cesium-annotations",fA=new Set([1,2]),Uu="carma-3d-annotation-runtime-feature",$u=1,Un=e=>typeof e=="object"&&e!==null,AA=e=>{if(!Un(e)||!Un(e.properties))return null;const{carmaConf:n}=e.properties;if(!Un(n)||!Un(n.annotationRuntime))return null;const t=n.annotationRuntime;return t.formatId!==Uu||t.formatVersion!==$u||!Un(t.annotation)||!Array.isArray(t.nodes)||!Array.isArray(t.linkedNodeGroups)||!Array.isArray(t.edges)?null:{annotation:Ka(t.annotation),nodes:t.nodes.map(o=>ot(o)),linkedNodeGroups:t.linkedNodeGroups.map(o=>at(o)),edges:t.edges.map(o=>rt(o))}},vA=e=>{if(!Un(e)||e.type!=="FeatureCollection")return null;const n=e.features;if(!Array.isArray(n))return null;const t=[],o=new Map,r=new Map,a=new Map;for(const s of n){const u=AA(s);if(u){t.push(u.annotation);for(const l of u.nodes)o.set(l.id,l);for(const l of u.linkedNodeGroups)r.set(l.id,l);for(const l of u.edges)a.set(l.id,l)}}if(t.length===0)return null;const i=ju(t);return{formatId:wt,version:fr,tables:{annotationEntries:i.map(uo),nodes:[...o.values()].map(ot),linkedNodeGroups:_n({nodes:[...o.values()],nodeLinks:[...r.values()].map(at)}),edges:[...a.values()].map(rt)},settings:{lastActiveToolType:null,elevationReferenceAnnotationId:null,nextShortLabelCounterByToolType:gr(i)}}},Wu=e=>{const n=new Map(e.tables.nodes.map(s=>[s.id,s])),t=new Map(e.tables.annotationEntries.map(s=>[s.id,s])),o=new Map(e.tables.edges.map(s=>[s.id,s])),r=new Map;for(const s of e.tables.linkedNodeGroups)for(const u of s.nodeIds){const l=r.get(u)??[];l.push(s),r.set(u,l)}const a=yA({annotations:e.tables.annotationEntries.map(s=>({annotation:s,coordinates:s.nodeIds.flatMap(u=>{var d;const l=(d=n.get(u))==null?void 0:d.coordinate;return l?[l]:[]})}))});return{type:"FeatureCollection",features:((a==null?void 0:a.features)??[]).map(s=>{var f;const u=typeof s.id=="string"?s.id:typeof((f=s.properties)==null?void 0:f.annotationId)=="string"?s.properties.annotationId:null,l=u?t.get(u):null;if(!l)return s;const d=new Set(l.nodeIds),c=new Set,m=l.nodeIds.flatMap(A=>(r.get(A)??[]).flatMap(v=>c.has(v.id)?[]:(c.add(v.id),[at(v)]))),y=s.properties??{},p=Un(y.carmaConf)?y.carmaConf:{};return{...s,properties:{...y,carmaConf:{...p,annotationRuntime:{formatId:Uu,formatVersion:$u,annotation:uo(l),nodes:l.nodeIds.flatMap(A=>{const v=n.get(A);return v?[ot(v)]:[]}),linkedNodeGroups:m,edges:l.edgeIds.flatMap(A=>{const v=o.get(A);return!v||!d.has(v.startNodeId)||!d.has(v.endNodeId)?[]:[rt(v)]})}}}}}),metadata:{carmaConf:{formatId:Vu,formatVersion:pA,source:gA,annotationsRuntimePersistence:{formatId:wt,version:fr,tables:{annotationEntries:e.tables.annotationEntries.map(uo),nodes:e.tables.nodes.map(ot),linkedNodeGroups:e.tables.linkedNodeGroups.map(at),edges:e.tables.edges.map(rt)},settings:{...e.settings,nextShortLabelCounterByToolType:{...e.settings.nextShortLabelCounterByToolType}}}}}}},bA=e=>({byUuid:new Map(e.filter(n=>n.uuid).map(n=>[n.uuid,n])),byId:new Map(e.map(n=>[n.id,n]))}),TA=(e,n,t=e.id)=>{const o=n.byId.get(t);return e.uuid&&n.byUuid.get(e.uuid)||(o&&(!e.uuid||!o.uuid)?o:void 0)},Qa=e=>{var t,o,r;const n=e;return(n==null?void 0:n.formatId)!==wt||typeof n.version!="number"||!zu.has(n.version)||!n.tables||!Array.isArray(n.tables.annotationEntries)||!Array.isArray(n.tables.nodes)||!Array.isArray(n.tables.linkedNodeGroups)||!Array.isArray(n.tables.edges)?null:{formatId:wt,version:fr,tables:{annotationEntries:n.tables.annotationEntries.map(a=>Ka(a)),nodes:n.tables.nodes.map(a=>ot(a)),linkedNodeGroups:n.tables.linkedNodeGroups.map(a=>at(a)),edges:n.tables.edges.map(a=>rt(a))},settings:{lastActiveToolType:typeof((t=n.settings)==null?void 0:t.lastActiveToolType)=="string"?n.settings.lastActiveToolType:null,elevationReferenceAnnotationId:typeof((o=n.settings)==null?void 0:o.elevationReferenceAnnotationId)=="string"?n.settings.elevationReferenceAnnotationId:null,nextShortLabelCounterByToolType:(r=n.settings)!=null&&r.nextShortLabelCounterByToolType&&typeof n.settings.nextShortLabelCounterByToolType=="object"?{...n.settings.nextShortLabelCounterByToolType}:{}}}},Yu=e=>{var r;const n=e;if((n==null?void 0:n.type)!=="FeatureCollection")return null;const t=(r=n.metadata)==null?void 0:r.carmaConf;return((t==null?void 0:t.formatId)===Vu&&typeof t.formatVersion=="number"&&fA.has(t.formatVersion)?Qa(t.annotationsRuntimePersistence):null)??vA(e)},Xa=e=>{const n=yr(e).map(uo),t=new Set(n.flatMap(i=>i.nodeIds)),o=new Set(n.flatMap(i=>i.edgeIds)),r=e.nodes.filter(i=>t.has(i.id)).map(ot),a=_n({nodes:r,nodeLinks:e.linkedNodeGroups.map(at).filter(i=>i.nodeIds.some(s=>t.has(s)))});return{formatId:wt,version:fr,tables:{annotationEntries:n,nodes:r,linkedNodeGroups:a,edges:e.edges.filter(i=>o.has(i.id)).map(rt)},settings:{lastActiveToolType:e.annotationToolType,elevationReferenceAnnotationId:e.settingsState.elevationReferenceAnnotationId,nextShortLabelCounterByToolType:gr(n)}}},kA=({initialToolType:e,initialPointTemporaryMode:n,initialPersistenceState:t,isToolTypeAvailable:o})=>{const r=(t==null?void 0:t.formatId)===wt&&zu.has(t.version)?t:null,a=r==null?void 0:r.tables,i=ju((a==null?void 0:a.annotationEntries.map(c=>nA(Ka(c))))??[]),s=(r==null?void 0:r.tables.nodes.map(ot))??[],u=_n({nodes:s,nodeLinks:(r==null?void 0:r.tables.linkedNodeGroups.map(at))??[]}),l=gr(i);return{annotationToolType:(typeof(r==null?void 0:r.settings.lastActiveToolType)=="string"&&((o==null?void 0:o(r.settings.lastActiveToolType))??!0)?r.settings.lastActiveToolType:null)??e,selectionState:{selectedAnnotationIds:[],previousSelectedAnnotationId:null},annotationEntries:i,nodes:s,linkedNodeGroups:u,edges:(a==null?void 0:a.edges.map(rt))??[],infoBoxState:{activeAnnotationId:null},settingsState:{pointTemporaryMode:n,elevationReferenceAnnotationId:(r==null?void 0:r.settings.elevationReferenceAnnotationId)??null,nextShortLabelCounterByToolType:l}}},NA=e=>{try{const n=localStorage.getItem(e);if(!n)return null;const t=JSON.parse(n);return Yu(t)??Qa(t)}catch(n){console.warn("Failed to load annotations runtime state from localStorage:",n)}return null},IA=(e,n)=>{try{localStorage.setItem(e,JSON.stringify(Wu(n)))}catch(t){console.warn("Failed to save annotations runtime state to localStorage:",t)}},Ar=e=>e.selectionState.selectedAnnotationIds[e.selectionState.selectedAnnotationIds.length-1]??null,hA=e=>{const n=new Set(e.selectionState.selectedAnnotationIds);return e.annotationEntries.filter(t=>n.has(t.id)&&!t.locked&&!t.readOnly).map(t=>t.id)},Ku=e=>e.annotationEntries.map(n=>n.id),SA=(e,n,t)=>{var i;if(e.length===0)return null;const o=n?e.findIndex(s=>s.id===n):-1,r=t>0?0:e.length-1,a=o<0?r:(o+t+e.length)%e.length;return((i=e[a])==null?void 0:i.id)??null},Qu=({nodeId:e,nodes:n,linkedNodeGroups:t,annotationEntries:o,selectedAnnotationIds:r=[],preferredMovedNodeIds:a})=>{const i=n.find(p=>p.id===e)??null;if(!i)return{targetNode:null,movedNodeIds:[]};const s=Of(t,e),u=Array.from(new Set((a??[]).filter(p=>s.includes(p)))),l=new Set(r.filter(Boolean)),d=new Set(o.filter(p=>l.has(p.id)).flatMap(p=>p.nodeIds)),c=s.filter(p=>d.has(p)),m=u.length>0?u:c.length>0?c:[...s],y=Ya(o);return{targetNode:i,movedNodeIds:m.filter(p=>!y.has(p))}},Xu=e=>{const n=new Set(e.annotationEntries.flatMap(t=>t.nodeIds));e.nodes=e.nodes.filter(t=>n.has(t.id)),e.linkedNodeGroups=_n({nodes:e.nodes,nodeLinks:e.linkedNodeGroups})},CA={updateNodeCoordinateById:(e,n)=>{const{nodeId:t,coordinate:o,selectedAnnotationIds:r=[],movedNodeIds:a,linkToNodeId:i}=n.payload,{targetNode:s,movedNodeIds:u}=Qu({nodeId:t,nodes:e.nodes,linkedNodeGroups:e.linkedNodeGroups,annotationEntries:e.annotationEntries,selectedAnnotationIds:r,preferredMovedNodeIds:a});if(!s||u.length===0)return;const l=new Set(u),d=Ya(e.annotationEntries),c=i&&!d.has(i)?i:null;e.nodes.forEach(m=>{l.has(m.id)&&(m.coordinate=o)}),e.linkedNodeGroups=_u({nodes:e.nodes,nodeLinks:e.linkedNodeGroups,nodeId:s.id,movedNodeIds:u,linkToNodeId:c})},insertNodeIntoMeasurementEdge:(e,n)=>{const{annotationId:t,startNodeId:o,endNodeId:r,coordinate:a}=n.payload,i=e.annotationEntries.find(T=>T.id===t);if(!i)return;const s=i.nodeIds.findIndex((T,b)=>T===o&&i.nodeIds[b+1]===r),u=i.closed&&i.nodeIds.length>=3&&i.nodeIds[i.nodeIds.length-1]===o&&i.nodeIds[0]===r,l=s>=0?s+1:u?i.nodeIds.length:-1;if(l<0)return;const d=new Map(e.edges.map(T=>[T.id,T])),c=i.edgeIds.findIndex(T=>{const b=d.get(T);return(b==null?void 0:b.startNodeId)===o&&b.endNodeId===r}),m=c>=0?i.edgeIds[c]:null,y=m?d.get(m):void 0;if(!y||c<0)return;const p=`node-${bt(e.nodes.map(T=>T.id))+1}`,f=`edge-${bt(e.edges.map(T=>T.id))+1}`;e.nodes.push({id:p,coordinate:a}),e.linkedNodeGroups=_n({nodes:e.nodes,nodeLinks:[...e.linkedNodeGroups,{id:p,nodeIds:[p]}]}),y.endNodeId=p;const A={id:f,startNodeId:p,endNodeId:r},v=e.edges.findIndex(T=>T.id===m);v>=0?e.edges.splice(v+1,0,A):e.edges.push(A),i.nodeIds=[...i.nodeIds.slice(0,l),p,...i.nodeIds.slice(l)],i.edgeIds=[...i.edgeIds.slice(0,c+1),f,...i.edgeIds.slice(c+1)]},removeNodeFromAnnotation:(e,n)=>{const{annotationId:t,nodeId:o}=n.payload,r=e.annotationEntries.find(u=>u.id===t);if(!(r!=null&&r.nodeIds.includes(o)))return;const a=r.nodeIds.filter(u=>u!==o),i=new Set(r.edgeIds),s=Pu({nodeIds:a,closed:!!r.closed,previousEdgeNumericSuffix:bt(e.edges.map(u=>u.id))});r.nodeIds=a,r.edgeIds=s.map(u=>u.id),e.edges=[...e.edges.filter(u=>!i.has(u.id)),...s],Xu(e)}},Za=(e,n,t=n[n.length-1]??null)=>{e.selectionState.previousSelectedAnnotationId=Ar(e),e.selectionState.selectedAnnotationIds=n,e.infoBoxState.activeAnnotationId=t},Ja=(e,n)=>Za(e,n?[n]:[],n),EA={setSelectedAnnotationId:(e,n)=>{Ja(e,n.payload)},setSelectedAnnotationIds:(e,n)=>{Za(e,Array.from(new Set(n.payload.filter(Boolean))))}},ds=(e,n,t)=>{if(!e.annotationEntries.some(a=>n.has(a.id)))return;e.annotationEntries=e.annotationEntries.filter(a=>!n.has(a.id));const o=new Set(e.annotationEntries.flatMap(a=>a.edgeIds));Xu(e),e.edges=e.edges.filter(a=>o.has(a.id));const{elevationReferenceAnnotationId:r}=e.settingsState;if(r&&n.has(r)&&(e.settingsState.elevationReferenceAnnotationId=null),t!==void 0){Ja(e,t);return}Za(e,e.selectionState.selectedAnnotationIds.filter(a=>!n.has(a)))},OA={appendAnnotationEntities:(e,n)=>{const{annotationEntry:t,nodes:o,linkedNodeGroups:r,edges:a,selectAnnotationId:i}=n.payload;e.nodes.push(...o),r.forEach(s=>{const u=e.linkedNodeGroups.find(l=>l.id===s.id);if(!u){e.linkedNodeGroups.push({id:s.id,nodeIds:[...s.nodeIds]});return}u.nodeIds=Array.from(new Set([...u.nodeIds,...s.nodeIds]))}),e.edges.push(...a),e.annotationEntries.push({...t,nodeIds:[...t.nodeIds],edgeIds:[...t.edgeIds]}),e.linkedNodeGroups=_n({nodes:e.nodes,nodeLinks:e.linkedNodeGroups}),i!==void 0&&Ja(e,i)},removeAnnotationById:(e,n)=>{ds(e,new Set([n.payload.annotationId]),n.payload.nextSelectedAnnotationId)},removeAnnotationsByIds:(e,n)=>{ds(e,new Set(n.payload.annotationIds),n.payload.nextSelectedAnnotationId)},updateAnnotationEntryById:(e,n)=>{const{annotationId:t,displayName:o,shortLabel:r,shortLabelSource:a,shortLabelCounter:i,hidden:s,locked:u,annotationRole:l,readOnly:d,labelAppearance:c,elevationDisplayMode:m,distanceAnchorCoordinateSelection:y,distanceTriangleAnchorCoordinateRole:p}=n.payload,f=e.annotationEntries.find(A=>A.id===t);f&&(o!==void 0&&(f.displayName=o),r!==void 0&&(f.shortLabel=r),a!==void 0&&(f.shortLabelSource=a),i!==void 0&&(f.shortLabelCounter=i),s!==void 0&&(f.hidden=s),u!==void 0&&(f.locked=u),l!==void 0&&(f.annotationRole=l),d!==void 0&&(f.readOnly=d),c!==void 0&&(f.labelAppearance={...f.labelAppearance??{},...c}),m!==void 0&&(f.elevationDisplayMode=m),y!==void 0&&(f.distanceAnchorCoordinateSelection=y),p!==void 0&&(f.distanceTriangleAnchorCoordinateRole=p))}},Zu=(e={})=>{const{initialToolType:n=bn,initialPointTemporaryMode:t=!1}=e;return{annotationToolType:n,selectionState:{selectedAnnotationIds:[],previousSelectedAnnotationId:null},annotationEntries:[],nodes:[],linkedNodeGroups:[],edges:[],infoBoxState:{activeAnnotationId:null},settingsState:{pointTemporaryMode:t,elevationReferenceAnnotationId:null,nextShortLabelCounterByToolType:{}}}},Ju=Xy({name:"annotationsRuntime",initialState:Zu(),reducers:{setAnnotationToolType:(e,n)=>{e.annotationToolType=n.payload},setPointTemporaryMode:(e,n)=>{e.settingsState.pointTemporaryMode=n.payload},setElevationReferenceAnnotationId:(e,n)=>{e.settingsState.elevationReferenceAnnotationId=n.payload},...EA,...OA,...CA}}),{appendAnnotationEntities:ed,removeAnnotationById:LA,removeAnnotationsByIds:ei,removeNodeFromAnnotation:RA,setElevationReferenceAnnotationId:wA,setPointTemporaryMode:xA,insertNodeIntoMeasurementEdge:qA,updateNodeCoordinateById:_A,updateAnnotationEntryById:$n,setAnnotationToolType:PA,setSelectedAnnotationId:Tt,setSelectedAnnotationIds:xt}=Ju.actions,MA=e=>Vy({reducer:Ju.reducer,preloadedState:e}),ni=g.createContext(null),DA=kf(ni),BA=cf(ni),de=e=>BA(e),Jh=()=>DA(),FA=({enabled:e=!0,storageKey:n})=>{const t=g.useMemo(()=>!e||typeof window>"u"?null:NA(n),[e,n]),o=g.useCallback(r=>{!e||typeof window>"u"||IA(n,r)},[e,n]);return{initialPersistenceState:t,onPersistenceStateChange:e?o:void 0}},GA={lengthMeters:{locale:Ft.DE_DE,unitMode:bm.METERS,maximumFractionDigitsMeters:2},areaSquareMeters:{locale:Ft.DE_DE},degrees:{locale:Ft.DE_DE},geographicCoordinate:{locale:Ft.DE_DE,fractionDigits:6},decimalNumber:{locale:Ft.DE_DE,fractionDigits:2,useGrouping:!1}},co={ALWAYS:"always",SELECTED:"selected",OFF:"off"},Xo={ALWAYS:"always",SELECTED:"selected"},Ca=Object.freeze({strokeWidthPx:1.5,overlayDashPattern:"8 8",meterMarkers:co.ALWAYS,components:Xo.ALWAYS}),eS=(e,n)=>e===co.ALWAYS||e===co.SELECTED&&n,nS=e=>e!==co.OFF,tS=(e,n)=>e===Xo.ALWAYS||e===Xo.SELECTED&&n,jA=e=>Object.values(co).includes(e),HA=e=>Object.values(Xo).includes(e),zA=(e,n)=>typeof e=="number"&&Number.isFinite(e)&&e>0?e:n,VA=(e,n)=>{const t=e==null?void 0:e.trim();return t||n},oS=(e,n=Ca)=>({strokeWidthPx:zA(e==null?void 0:e.strokeWidthPx,n.strokeWidthPx),overlayDashPattern:VA(e==null?void 0:e.overlayDashPattern,n.overlayDashPattern),meterMarkers:jA(e==null?void 0:e.meterMarkers)?e.meterMarkers:n.meterMarkers,components:HA(e==null?void 0:e.components)?e.components:n.components}),cs=Object.freeze({previewAlpha:.9,surfaceAlpha:.92}),ee={colors:{neutral:_o(1),accent:_o(1),preview:_o(cs.previewAlpha),surface:Oc(cs.surfaceAlpha),transparent:"transparent",components:{direct:_r(Ie.DIRECT),vertical:_r(Ie.VERTICAL),horizontal:_r(Ie.HORIZONTAL)},componentLabelAccents:{direct:Pr(Ie.DIRECT),vertical:Pr(Ie.VERTICAL),horizontal:Pr(Ie.HORIZONTAL)}},sizes:{edgeStrokeWidth:Ca.strokeWidthPx,pointPixelSize:10,pointOutlineWidth:1},patterns:{edgeDashPattern:Ca.overlayDashPattern}},ti=Object.freeze({edge:Object.freeze({stroke:ee.colors.accent,strokeWidth:ee.sizes.edgeStrokeWidth,overlayDashPattern:ee.patterns.edgeDashPattern}),point:Object.freeze({pixelSize:ee.sizes.pointPixelSize,fill:ee.colors.transparent,outline:ee.colors.surface,outlineWidth:ee.sizes.pointOutlineWidth})}),nd=Object.freeze({edge:Object.freeze({stroke:ee.colors.neutral}),point:Object.freeze({outline:ee.colors.neutral})}),UA=(e,n={})=>({...e,...n}),$A=(e,n={})=>({...e,...n}),rS=e=>UA(e,nd.edge),aS=e=>$A(e,nd.point),fn=Object.freeze({targetScreenRadiusCssPx:64,minimumScreenRadiusCssPx:10,maximumViewportRadiusRatio:.5,sceneResizeFactor:10,resizeHysteresisRatio:.15,radiusLabelVisibleDurationMs:3e3,radiusLabelFadeDurationMs:250,resizeAnimationDurationMs:200,snapAnimationDurationMs:300,centerCircleDiameterCssPx:ti.point.pixelSize,crosshairHalo:!0}),td={scalingMode:Ba.SCREEN,worldRadiusMeters:3,targetScreenRadiusCssPx:48,resizeWorldRadiusToScreenTarget:!1,resizeStepFactor:4,quantizeWorldRadius:!1},oi={KEYBOARD:"keyboard",PROGRAMMATIC:"programmatic",UI:"ui"},WA=({annotations:e})=>{if(e.length===0)return!1;if(typeof window>"u")return!0;const n=e.length===1?"Diese Messung wirklich löschen?":`${e.length} Messungen wirklich löschen?`;return window.confirm(n)},YA=({activePlugin:e,activeToolType:n,activeToolSession:t,cancelToolId:o,focusAdjacentAnnotationEntry:r,removeSelectedAnnotations:a,removeEditedNode:i,clearInteractionState:s,requestFinishMeasurement:u,requestActivateTool:l,requestModeChange:d,sessionContext:c,setActiveToolTypeInStore:m})=>{g.useEffect(()=>{const y=p=>{var v;if(Bp(p)){const T=c.getState(),b=Ku(T);b.length>0&&(c.dispatch(xt(b)),p.preventDefault(),p.stopPropagation());return}const A=Dp(p,{allowRepeat:!0})?Fp(p):null;if(A===Ee.CANCEL_ACTIVE_TOOL&&o!==null&&n!==o){const T=c.getState();t==null||t.discardDraft(),T.annotationEntries.length>0&&m(o),s(),p.preventDefault();return}if(A===Ee.FOCUS_PREVIOUS_NAVIGATION_ITEM){r(-1),p.preventDefault();return}if(A===Ee.FOCUS_NEXT_NAVIGATION_ITEM){r(1),p.preventDefault();return}if((v=e==null?void 0:e.keyboard)!=null&&v.onKeyDown({event:p,activeToolType:n,activeToolSession:t,requestFinishMeasurement:u,requestActivateTool:l,requestModeChange:d,sessionContext:c})){s();return}if((A===Ee.DELETE_SELECTION||A===Ee.UNDO_LAST_POINT)&&c.drafts.get(n).coordinates.length>0){s(),p.preventDefault(),p.stopPropagation();return}if(A===Ee.DELETE_SELECTION||A===Ee.UNDO_LAST_POINT){if(i()){s(),p.preventDefault(),p.stopPropagation();return}if(c.getState().selectionState.selectedAnnotationIds.length>0){a({skipConfirmation:p.shiftKey,source:oi.KEYBOARD}),p.preventDefault(),p.stopPropagation();return}}A===Ee.FINISH_MEASUREMENT&&u()&&p.preventDefault()};return window.addEventListener("keydown",y),()=>{window.removeEventListener("keydown",y)}},[e,t,n,o,s,r,i,a,u,d,l,c,m])},So=(e,n)=>e[n]??null,KA=(e,n,t)=>{const o=g.useCallback(()=>{const i=So(n,e);return i?i.requestFinish():!1},[e,n]),r=g.useCallback(i=>{if(i===e)return;const s=So(n,e);s&&s.requestFinish(),t();const u=So(n,i);u==null||u.requestStart()},[e,t,n]),a=g.useCallback((i=e)=>{if(i!==e){r(i);return}const s=So(n,e);s==null||s.discardDraft(),t(),s==null||s.requestStart()},[e,t,r,n]);return{requestModeChange:r,requestActivateTool:a,requestFinishMeasurement:o}},QA=14,XA=18,ms=(e,n)=>n?e.find(t=>t.id===n)??null:null,od=({engine:e,node:n,screenPosition:t})=>{const o=e.worldToScreen(z(n.coordinate));if(!o)return null;const r=o.x-t.x,a=o.y-t.y;return r*r+a*a},ZA=({engine:e,nodes:n,screenPosition:t})=>{if(!t||!H(e)||n.length===0)return null;let r=QA**2,a=null;for(const i of n){const s=od({engine:e,node:i,screenPosition:t});s===null||s>r||(r=s,a=i)}return a},rd=({engine:e,nodes:n,linkedNodeGroups:t,coordinate:o,screenPosition:r,forcedSnappedNodeId:a=null,lockedNodeId:i=null,excludedNodeIds:s=[]})=>{if(!H(e)||n.length===0)return{coordinate:o,linkedNodeGroupId:null,snappedNodeId:null};const u=new Set(s.filter(Boolean)),l=u.size===0?n:n.filter(y=>!u.has(y.id));if(l.length===0)return{coordinate:o,linkedNodeGroupId:null,snappedNodeId:null};const d=ms(l,a);if(d)return{coordinate:d.coordinate,linkedNodeGroupId:Po(t,d.id),snappedNodeId:d.id};if(!r)return{coordinate:o,linkedNodeGroupId:null,snappedNodeId:null};const c=ms(l,i);if(c){const y=od({engine:e,node:c,screenPosition:r});if(y!==null&&y<=XA**2)return{coordinate:c.coordinate,linkedNodeGroupId:Po(t,c.id),snappedNodeId:c.id}}const m=ZA({engine:e,nodes:l,screenPosition:r});return{coordinate:(m==null?void 0:m.coordinate)??o,linkedNodeGroupId:m?Po(t,m.id):null,snappedNodeId:(m==null?void 0:m.id)??null}},JA=(e,n)=>n?e.find(t=>t.id===n)??null:null,ev=({engine:e,nodes:n,linkedNodeGroups:t,activeToolType:o,toolSessions:r,getToolPlugin:a,sessionContext:i})=>{const s=r[o]??null,u=a(o),l=g.useRef(null);g.useEffect(()=>{JA(n,l.current)||(l.current=null)},[n]);const d=g.useCallback((y,p,f=null)=>{const A=rd({engine:e,nodes:n,linkedNodeGroups:t,coordinate:y,screenPosition:p,forcedSnappedNodeId:f,lockedNodeId:l.current});return l.current=A.snappedNodeId,{coordinate:A.coordinate,linkedNodeGroupId:A.linkedNodeGroupId}},[t,n,e]),c=g.useCallback((y,p)=>d(y,p).coordinate,[d]);return{handlePointQueryPointCreated:g.useCallback((y,p,f)=>{var T;const A=d(y,p,(f==null?void 0:f.forcedSnappedNodeId)??null),v=s==null?void 0:s.onNodeCreated;if(v){v(A.coordinate,A.linkedNodeGroupId,{inputModifier:f==null?void 0:f.inputModifier});return}(T=u==null?void 0:u.pointQuery)==null||T.onPointCreated({coordinate:A.coordinate,linkedNodeGroupId:A.linkedNodeGroupId,inputModifier:f==null?void 0:f.inputModifier,activeToolType:o,activeToolSession:s,toolSessions:r,sessionContext:i})},[u,s,o,d,i,r]),resolvePointQueryCoordinate:c,activeToolSession:s}},nv=(e,n)=>e.plugins.reduce((t,o)=>{var a;const r=(a=o.session)==null?void 0:a.createSession(n);return r?{...t,[o.id]:r}:t},{}),tv=e=>{},ov=(e,{enabled:n,onCoordinate:t,onLineFinish:o,onHoverCoordinateChange:r,onHoverSampleChange:a,onScreenPositionChange:i,singleClickDelayMs:s=220,inputModifiers:u})=>{((e==null?void 0:e.hooks.usePointQuery)??tv)({enabled:n,hideCursorWhileEnabled:!0,clickStrategy:o?Wi.DELAYED_LINE_FINISH:Wi.IMMEDIATE,config:{clickDelayMs:s},inputModifiers:u,onPointCreate:d=>{t==null||t(Jn(d.pickedPositionECEF),{x:d.screenPosition.x,y:d.screenPosition.y},{inputModifier:d.inputModifier})},onLineFinish:o,onPointerMove:(d,c,m,y)=>{const p=d?Jn(d):null,f={x:c.x,y:c.y};r==null||r(p,f),a==null||a({coordinate:p,screenPosition:f,pointECEF:d??null,surfaceNormalECEF:m??null,...y!=null&&y.inputModifier?{inputModifier:y.inputModifier}:{}})},onScreenPositionChange:i})},Xn={pointQuery:{discSmoothingSampleCount:120,discSmoothingWindowMs:500,discSmoothingWeightDecayGamma:3},hoverClearDelayMs:34,infoBoxFlyTo:{minRadiusMeters:80,paddingFactor:1.15},additiveSelectionModifierKey:"Shift"},ri=(e,n)=>e===n||e!=null&&n!==null&&n!==void 0&&e.latitude===n.latitude&&e.longitude===n.longitude&&e.altitude===n.altitude,ai=(e,n)=>e.length===n.length&&e.every((t,o)=>ri(t,n[o])),rv=({engine:e,hoveredNode:n,coordinate:t,screenPosition:o,pointECEF:r,surfaceNormalECEF:a,inputModifier:i,resolvePointQueryCoordinate:s})=>{const u=(n==null?void 0:n.coordinate)??s(t,o),l=n!==null||!ri(u,t),d=l?z(u):r,c=l&&H(e)&&d?e.worldToScreen(d):null;return{isLockedToSnapPoint:l,pickResult:{coordinate:u,screenPosition:c?{x:c.x,y:c.y}:o,pointECEF:d??r,surfaceNormalECEF:l&&d?sa(d):a,...i?{inputModifier:i}:{}}}},{POINT:Co}=_,av=({pointTemporaryMode:e,annotationToolDraftStore:n,addAnnotation:t})=>{const o=g.useRef(e);g.useEffect(()=>{if(o.current&&!e){const r=n.get(Co);r.coordinates.length>0&&(r.coordinates.forEach((a,i)=>{t(Co,[a],void 0,[r.linkedNodeGroupIds[i]??null],Co)}),n.clear(Co))}o.current=e},[t,n,e])},iv=e=>{const n=g.useRef(e);return n.current=e,g.useCallback(t=>{const{engine:o,pointQueryEnabled:r,onPointCreated:a}=n.current;if(!r)return!1;const i=H(o)?o.worldToScreen(z(t)):null;return a(t,i??void 0),!0},[])},iS="point-move-u-handle",sS=220,lS=30,sv=0,lv=1,uv=2,dv=3,cv="rgba(59, 130, 246, 0.98)",mv="rgba(239, 68, 68, 0.98)",yv="rgba(34, 197, 94, 0.98)",ii="rgba(148, 163, 184, 0.98)",uS=1,kt="rgba(255,255,255,0.92)",pv=.92,Fe=1.5,dS=48,dt=320,cS=16,ys=40,mS=48,yS=.25,pS=500,gS=16,fS=12,AS=1.3,vS=1.05,bS=.4,TS=4,kS="row-resize",gv="move",ps=8,NS=wc,IS=.25,hS=1,fv=[{id:"vertical",color:cv,labelKey:"verticalAxis"},{id:"horizontal-east",color:mv,labelKey:"eastAxis"},{id:"horizontal-north",color:yv,labelKey:"northAxis"}],Av=["vertical"],ad=e=>Av.includes(e),id=(e,n)=>fv.map(t=>({id:t.id,color:t.color,title:t.id==="vertical"&&n?n:e[t.labelKey]})),vv=(e,n)=>id(e,n).filter(t=>ad(t.id)),SS=()=>{if(typeof window>"u")return 1;const e=window.devicePixelRatio;return!Number.isFinite(e)||e<=Lm?1:1/e},CS=e=>{if(e)try{e.destroy()}catch{}},bv=e=>{if(e)try{e()}catch{}},ES=(e,n)=>{if(typeof document>"u")return;const t=document.documentElement,o=document.body;if(!(!t||!o)){if(!e.restoreGlobalCursor){const r=t.style.cursor,a=o.style.cursor;e.restoreGlobalCursor=()=>{t.style.cursor=r,o.style.cursor=a,e.restoreGlobalCursor=null}}t.style.cursor=n,o.style.cursor=n}},OS=e=>{var n;(n=e.restoreGlobalCursor)==null||n.call(e)},LS=(e,n,t={})=>{e.dispatchEvent(new WheelEvent("wheel",{deltaX:n.deltaX,deltaY:n.deltaY,deltaZ:n.deltaZ,deltaMode:n.deltaMode,clientX:n.clientX,clientY:n.clientY,bubbles:!1,cancelable:!0,...t}))},RS=(e,n)=>{e&&(e.setAttribute("d",bl(n)),e.setAttribute("stroke-width",`${Fe}`),e.setAttribute("stroke-linejoin","round"),e.setAttribute("stroke-linecap","round"))},Se=Object.freeze({lineStrokeWidthPx:ee.sizes.edgeStrokeWidth,layerZIndex:"1550",lineLabelOffsetPx:9,lineLabelMinLengthPx:44,geometryEpsilonMeters:.01,directLineColor:ee.colors.components.direct,verticalLineColor:ee.colors.components.vertical,horizontalLineColor:ee.colors.components.horizontal,draftChainColor:ee.colors.preview}),gs=Sp(),it=Object.freeze({style:Object.freeze({DARK_ON_BRIGHT:"dark-on-bright",BRIGHT_ON_DARK:"bright-on-dark"}),label:Object.freeze({textColor:gs}),selection:Object.freeze({highlightPalette:Object.freeze({backgroundColor:ji("background"),hoverBackgroundColor:ji("hoverBackground"),textColor:gs,glowColor:_o(1),glowRadiusPx:5,preserveFillOnSelection:!0})}),lineLabel:Object.freeze({backgroundStyle:Object.freeze({SOFT_RECT_FADE:"soft-rect-fade",TEXT_ECHO_DARKEN:"text-echo-darken"})})}),Tv=zn.fontSizePx.pointLabel,kv=e=>`${e/Tv}rem`,Nt=Object.freeze({fontFamily:zn.fontFamily,rootFontSizeRem:"1rem",supportFontSizeRem:kv(zn.fontSizePx.supportText),headingFontSizeRem:"1rem",lineLabelFontWeight:zn.fontWeight.medium,badgeFontWeight:zn.fontWeight.medium,headingFontWeight:zn.fontWeight.semibold,sectionTitleFontWeight:zn.fontWeight.semibold}),sd={NONE:"none",MOVE_ON_LINE:"move-on-line"},_e=Object.freeze({appearance:Object.freeze({themeStyle:it.style.BRIGHT_ON_DARK}),text:Object.freeze({fontFamily:Nt.fontFamily,fontWeight:Nt.lineLabelFontWeight}),background:Object.freeze({style:it.lineLabel.backgroundStyle.TEXT_ECHO_DARKEN}),surface:Object.freeze({}),layout:Object.freeze({shortEdgeOffsetPx:-2}),collision:Object.freeze({allowEarlyRemoval:!0,resolutionStrategy:sd.MOVE_ON_LINE,anchorSlideStepRatio:.1,maxAnchorSlideDeltaRatio:.3})}),ld=Object.freeze({verticalFlippedBaselineOffsetPx:0,verticalBaselineAngleEpsilonRad:1e-9,sideHysteresisPx:1.5}),vr=e=>{var n,t;return{appearance:{..._e.appearance,...e==null?void 0:e.appearance},text:{..._e.text,...e==null?void 0:e.text,echo:((n=e==null?void 0:e.text)==null?void 0:n.echo)===void 0&&_e.text.echo===void 0?void 0:{..._e.text.echo,...(t=e==null?void 0:e.text)==null?void 0:t.echo}},background:{..._e.background,...e==null?void 0:e.background},surface:{..._e.surface,...e==null?void 0:e.surface},layout:{..._e.layout,...e==null?void 0:e.layout},collision:{..._e.collision,...e==null?void 0:e.collision}}},Nv=e=>e.surface.blendMode??(e.appearance.themeStyle===it.style.DARK_ON_BRIGHT?"lighten":"darken"),Eo=Object.freeze({paddingBlockEx:.25,paddingInlineEx:.65,backdropInsetBlockEx:-.35,backdropInsetInlineEx:-.75}),Iv=Object.freeze({[it.style.BRIGHT_ON_DARK]:"15, 23, 42",[it.style.DARK_ON_BRIGHT]:"255, 255, 255"}),ud=e=>({...e!=null&&e.fontSize?{"--carma-annotation-text-overlay-font-size":e.fontSize}:{},...(e==null?void 0:e.fontWeight)!==void 0?{"--carma-annotation-text-overlay-font-weight":String(e.fontWeight)}:{},...e!=null&&e.letterSpacing?{"--carma-annotation-text-overlay-letter-spacing":e.letterSpacing}:{},...typeof(e==null?void 0:e.textEchoBlurPx)=="number"?{"--carma-annotation-text-overlay-text-echo-blur-px":`${e.textEchoBlurPx}px`}:{},...e!=null&&e.textEchoShadow?{"--carma-annotation-text-overlay-text-echo-shadow":e.textEchoShadow}:{}}),hv=(e,n)=>{Object.entries(ud(n)).forEach(([t,o])=>e.style.setProperty(t,o))},Gn=(e,n,t,{unit:o="",min:r,max:a}={})=>{typeof t!="number"||!Number.isFinite(t)||e.style.setProperty(n,`${Be(t,r??-1/0,a??1/0)}${o}`)},Oo=(e,n)=>typeof e=="number"&&Number.isFinite(e)?e:n,Sv=({element:e,backdrop:n,surface:t,accentColor:o,visualOptions:r=_e})=>{var d,c,m,y,p;const{text:a,background:i,surface:s}=r,u=(f,A)=>{A!=null&&A.trim()&&e.style.setProperty(f,A)};e.style.setProperty("--carma-annotation-text-overlay-font-family",a.fontFamily),e.style.setProperty("--carma-annotation-text-overlay-font-weight",String(a.fontWeight)),o&&e.style.setProperty("--carma-annotation-text-overlay-glow-color",o),e.dataset.annotationThemeStyle=r.appearance.themeStyle,e.dataset.annotationTextOverlayBackgroundStyle=i.style,typeof i.surfaceAlpha=="number"&&Number.isFinite(i.surfaceAlpha)&&!((d=i.color)!=null&&d.trim())&&e.style.setProperty("--carma-annotation-text-overlay-backdrop-background",`rgba(${Iv[r.appearance.themeStyle]}, ${Be(i.surfaceAlpha,0,1)})`);const l=i.showBackdrop!==!1;n.style.display=l?"block":"none",t.style.display=l?"block":"none",u("--carma-annotation-text-overlay-text-color",a.color),u("--carma-annotation-text-overlay-text-blend-mode",a.blendMode),u("--carma-annotation-text-overlay-backdrop-background",i.color),u("--carma-annotation-text-overlay-backdrop-blend-mode",i.blendMode),u("--carma-annotation-text-overlay-surface-blend-mode",s.blendMode),u("--carma-annotation-text-overlay-text-echo-color",(c=a.echo)==null?void 0:c.color),u("--carma-annotation-text-overlay-text-echo-blend-mode",(m=a.echo)==null?void 0:m.blendMode),Gn(e,"--carma-annotation-text-overlay-text-echo-blur-px",(y=a.echo)==null?void 0:y.blurPx,{unit:"px",min:0}),Gn(e,"--carma-annotation-text-overlay-text-echo-opacity",(p=a.echo)==null?void 0:p.opacity,{min:0,max:1}),Gn(e,"--carma-annotation-text-overlay-surface-blur-px",i.blurPx,{unit:"px",min:0}),Gn(e,"--carma-annotation-text-overlay-surface-brightness-pct",i.brightnessPct,{unit:"%",min:0}),Gn(e,"--carma-annotation-text-overlay-surface-saturate-pct",i.saturatePct,{unit:"%",min:0}),Gn(e,"--carma-annotation-text-overlay-backdrop-radius",i.radiusEx,{unit:"ex",min:0}),Gn(e,"--carma-annotation-text-overlay-surface-edge-blur-px",i.edgeBlurPx,{unit:"px",min:0}),(typeof s.paddingBlockEx=="number"||typeof s.paddingInlineEx=="number")&&(e.style.setProperty("--carma-annotation-text-overlay-padding-block",`${Math.max(Oo(s.paddingBlockEx,Eo.paddingBlockEx),0)}ex`),e.style.setProperty("--carma-annotation-text-overlay-padding-inline",`${Math.max(Oo(s.paddingInlineEx,Eo.paddingInlineEx),0)}ex`)),(typeof i.insetBlockEx=="number"||typeof i.insetInlineEx=="number")&&e.style.setProperty("--carma-annotation-text-overlay-backdrop-inset",`${Oo(i.insetBlockEx,Eo.backdropInsetBlockEx)}ex ${Oo(i.insetInlineEx,Eo.backdropInsetInlineEx)}ex`)},Je=Object.freeze({root:"carma-annotation-text-overlay",backdrop:"carma-annotation-text-overlay__backdrop",surface:"carma-annotation-text-overlay__surface",textEcho:"carma-annotation-text-overlay__text-echo",text:"carma-annotation-text-overlay__text"}),Cv='[data-annotation-text-overlay-text-echo="true"]',Ev='[data-annotation-text-overlay-text="foreground"]',Ov=Object.freeze({fontSize:"17px",letterSpacing:"5%",fontWeight:800,textEchoBlurPx:4,textEchoShadow:"0 0 2px rgba(2, 6, 23, 0.42), 0 0 6px rgba(2, 6, 23, 0.3)"}),Ht=e=>{const n=document.createElement("div");return n.className=e,n},Lv=({accentColor:e,visualOptions:n,styleOptions:t})=>{const o=Ht(Je.root),r=Ht(Je.backdrop),a=Ht(Je.surface),i=Ht(Je.textEcho),s=Ht(Je.text);return i.dataset.annotationTextOverlayTextEcho="true",s.dataset.annotationTextOverlayText="foreground",Sv({element:o,backdrop:r,surface:a,accentColor:e,visualOptions:n}),hv(o,t),o.append(r,a,i,s),o},si=(e,n)=>{[Ev,Cv].forEach(t=>{const o=e.querySelector(t);o&&o.textContent!==n&&(o.textContent=n)})},Rv=e=>typeof e=="string"||typeof e=="number"?String(e):"",wv=({textColor:e,fontSize:n,styleOptions:t,visualOptions:o,surfaceBlendMode:r,hasInteraction:a})=>{const i=(t==null?void 0:t.fontSize)===void 0?n:void 0;return{pointerEvents:a?"auto":"none",cursor:a?"pointer":"default","--carma-annotation-text-overlay-font-family":o.text.fontFamily,"--carma-annotation-text-overlay-font-weight":String(o.text.fontWeight),...i?{"--carma-annotation-text-overlay-font-size":i}:{},...ud(t),...e?{"--carma-annotation-text-overlay-text-color":e}:{},...r?{"--carma-annotation-text-overlay-backdrop-blend-mode":r,"--carma-annotation-text-overlay-surface-blend-mode":r}:{}}},dd=({content:e,selected:n,textColor:t,fontSize:o,styleOptions:r,visualOptions:a=_e,surfaceBlendMode:i,onClick:s,onDoubleClick:u,onLongPress:l,longPressDurationMs:d=320})=>{const c=g.useRef(null),m=g.useRef(!1),y=Rv(e),p=!!(s||u||l),f=g.useCallback(()=>{c.current!==null&&(window.clearTimeout(c.current),c.current=null)},[]),A=g.useCallback(T=>{if(m.current){m.current=!1,T.preventDefault(),T.stopPropagation();return}s==null||s()},[s]),v=g.useCallback(()=>{l&&(f(),m.current=!1,c.current=window.setTimeout(()=>{c.current=null,m.current=!0,l()},d))},[f,d,l]);return g.useEffect(()=>f,[f]),O.jsxs("div",{className:Je.root,"data-annotation-theme-style":a.appearance.themeStyle,"data-annotation-text-overlay-background-style":a.background.style,"data-selected":n?"true":void 0,style:wv({textColor:t,fontSize:o,styleOptions:r,visualOptions:a,surfaceBlendMode:i,hasInteraction:p}),onClick:s?A:void 0,onDoubleClick:u,onPointerDown:l?v:void 0,onPointerUp:l?f:void 0,onPointerLeave:l?f:void 0,onPointerCancel:l?f:void 0,children:[O.jsx("div",{className:Je.backdrop}),O.jsx("div",{className:Je.surface}),O.jsx("div",{className:Je.textEcho,"data-annotation-text-overlay-text-echo":"true",children:y}),O.jsx("div",{className:Je.text,"data-annotation-text-overlay-text":"foreground",children:y})]})};dd.__docgenInfo={description:"",methods:[],displayName:"TextOverlay",props:{content:{required:!0,tsType:{name:"ReactNode"},description:""},selected:{required:!1,tsType:{name:"boolean"},description:""},textColor:{required:!1,tsType:{name:"string"},description:""},fontSize:{required:!1,tsType:{name:"string"},description:""},styleOptions:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
})`,computed:!0}},surfaceBlendMode:{required:!1,tsType:{name:'CSSProperties["mixBlendMode"]',raw:'CSSProperties["mixBlendMode"]'},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onDoubleClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onLongPress:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},longPressDurationMs:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"320",computed:!1}}}};const Re=({x:e,y:n})=>({x:e,y:n}),wS=(e,n)=>{const t=e.worldToScreen(n);return t?Re(t):null},xv=Object.freeze({direct:{labelOffsetPx:Se.lineLabelOffsetPx},vertical:{labelOffsetPx:Se.lineLabelOffsetPx,labelFlippedBaselineOffsetPx:ld.verticalFlippedBaselineOffsetPx,labelRotationMode:pm.CLOCKWISE},horizontal:{labelOffsetPx:Se.lineLabelOffsetPx}}),qv=({kind:e,outsideReferencePoint:n,anchorRatio:t})=>({...xv[e],anchorRatio:t===void 0?void 0:Da(t),getLabelOutsideReferencePoint:n?()=>Re(n):void 0}),cd=({x:e,y:n,angleRad:t,anchor:o})=>`translate(${Math.round(e)}px, ${Math.round(n)}px) ${o==="left"?"translate(0%, -50%)":o==="right"?"translate(-100%, -50%)":"translate(-50%, -50%)"} rotate(${t}rad)`,_v=({start:e,end:n,kind:t,outsideReferencePoint:o,shortEdgeOffsetPx:r=_e.layout.shortEdgeOffsetPx,useShortEdgeRules:a=!0,previousShouldFlip:i=!1,anchorRatio:s})=>{const u=gm({svgLine:{start:Re(e),end:Re(n)},options:qv({kind:t,outsideReferencePoint:o,anchorRatio:s}),previousShouldFlip:i,sideSwitchThresholdPx:ld.sideHysteresisPx});if(!u)return null;if(a&&u.lineLengthPx<Se.lineLabelMinLengthPx){const l=u.normalX>=0;return{x:u.midX+u.normalX*r,y:u.midY+u.normalY*r,angleRad:0,anchor:l?"left":"right",anchorRatio:u.anchorRatio,isShortEdge:!0,shouldFlip:u.shouldFlip,normalX:u.normalX,normalY:u.normalY}}return{x:u.textX,y:u.textY,angleRad:u.angleRad,anchor:"center",anchorRatio:u.anchorRatio,isShortEdge:!1,shouldFlip:u.shouldFlip,normalX:u.normalX,normalY:u.normalY}},Pv="carma-annotation-overlay-line-label",Mv="carma-annotation-overlay-line-label__frame",fs=e=>{const n=document.createElement("div");return n.className=e,n},Dv=e=>e.dataset.annotationOverlayLineLabelKind==="vertical"||e.dataset.annotationOverlayLineLabelKind==="horizontal"?e.dataset.annotationOverlayLineLabelKind:"direct",Bv=e=>{const n=e.dataset.annotationOverlayLineLabelShortEdgeOffsetPx,t=n?Number(n):Number.NaN;return Number.isFinite(t)?t:_e.layout.shortEdgeOffsetPx},li=(e,n)=>{const t=vr(n),o=fs(Pv),r=fs(Mv),a=Lv({accentColor:e,visualOptions:t});return o.dataset.annotationOverlayLineLabelShortEdgeOffsetPx=String(t.layout.shortEdgeOffsetPx),r.append(a),o.appendChild(r),o},Fv=e=>{const n=vr(e),t=ee.colors.componentLabelAccents,o=r=>{const a=li(t[r],n);return a.dataset.annotationOverlayLineLabelKind=r,a};return{direct:o("direct"),vertical:o("vertical"),horizontal:o("horizontal")}},md=e=>{e.direct.style.display="none",e.vertical.style.display="none",e.horizontal.style.display="none"},yd=({element:e,start:n,end:t,outsideReferencePoint:o,anchorRatio:r,previousShouldFlip:a=e.dataset.annotationOverlayLineLabelNormalFlip==="1"})=>{const i=Dv(e);return _v({start:n,end:t,kind:i,outsideReferencePoint:o,shortEdgeOffsetPx:Bv(e),useShortEdgeRules:i==="vertical",anchorRatio:r,previousShouldFlip:a})},pd=(e,n,t)=>{si(e,n),e.dataset.annotationOverlayLineLabelShortEdge=t.isShortEdge?"true":"false",e.dataset.annotationOverlayLineLabelAnchorRatio=`${t.anchorRatio}`,e.dataset.annotationOverlayLineLabelNormalFlip=t.shouldFlip?"1":"0"},Gv=({text:e,...n})=>{const{element:t}=n,o=yd(n);if(!o){t.style.display="none";return}pd(t,e,o),t.style.display="block",t.style.transform=cd(o)},br=(e,n)=>{Object.assign(e.style,n)},Tr=(e,n,t=Te.LABEL)=>{const o=hu(e,t);if(!o)return null;const r=document.createElement("div");return r.id=n,r.dataset.annotationOverlayLayer="true",br(r,{position:"absolute",inset:"0",overflow:"hidden",pointerEvents:"none",userSelect:"none",webkitUserSelect:"none",zIndex:"auto"}),o.appendChild(r),r},gd=(e,n)=>Object.fromEntries(Object.entries(n).map(([t,o])=>[t,o?Tr(e,o,t):null])),qt=e=>{e==null||e.remove()},dn={primitiveId:"measurement-preview-point-ring",scalingMode:Ba.SCREEN,targetScreenRadiusCssPx:32,innerHoleRadiusRatio:.33,alpha:.6,materialPreset:rg.COLOR,smoothingSampleCount:90,smoothingWindowMs:300,smoothingWeightDecayGamma:2};function Bt(e,n,t){e.prototype=n.prototype=t,t.constructor=e}function Ao(e,n){var t=Object.create(e.prototype);for(var o in n)t[o]=n[o];return t}function Pn(){}var st=.7,_t=1/st,jv=/^#([0-9a-f]{3})$/,Hv=/^#([0-9a-f]{6})$/,zv=/^rgb\(\s*([-+]?\d+)\s*,\s*([-+]?\d+)\s*,\s*([-+]?\d+)\s*\)$/,Vv=/^rgb\(\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*\)$/,Uv=/^rgba\(\s*([-+]?\d+)\s*,\s*([-+]?\d+)\s*,\s*([-+]?\d+)\s*,\s*([-+]?\d+(?:\.\d+)?)\s*\)$/,$v=/^rgba\(\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)\s*\)$/,Wv=/^hsl\(\s*([-+]?\d+(?:\.\d+)?)\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*\)$/,Yv=/^hsla\(\s*([-+]?\d+(?:\.\d+)?)\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)\s*\)$/,As={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};Bt(Pn,mo,{displayable:function(){return this.rgb().displayable()},toString:function(){return this.rgb()+""}});function mo(e){var n;return e=(e+"").trim().toLowerCase(),(n=jv.exec(e))?(n=parseInt(n[1],16),new Ae(n>>8&15|n>>4&240,n>>4&15|n&240,(n&15)<<4|n&15,1)):(n=Hv.exec(e))?vs(parseInt(n[1],16)):(n=zv.exec(e))?new Ae(n[1],n[2],n[3],1):(n=Vv.exec(e))?new Ae(n[1]*255/100,n[2]*255/100,n[3]*255/100,1):(n=Uv.exec(e))?bs(n[1],n[2],n[3],n[4]):(n=$v.exec(e))?bs(n[1]*255/100,n[2]*255/100,n[3]*255/100,n[4]):(n=Wv.exec(e))?Ts(n[1],n[2]/100,n[3]/100,1):(n=Yv.exec(e))?Ts(n[1],n[2]/100,n[3]/100,n[4]):As.hasOwnProperty(e)?vs(As[e]):e==="transparent"?new Ae(NaN,NaN,NaN,0):null}function vs(e){return new Ae(e>>16&255,e>>8&255,e&255,1)}function bs(e,n,t,o){return o<=0&&(e=n=t=NaN),new Ae(e,n,t,o)}function ui(e){return e instanceof Pn||(e=mo(e)),e?(e=e.rgb(),new Ae(e.r,e.g,e.b,e.opacity)):new Ae}function fd(e,n,t,o){return arguments.length===1?ui(e):new Ae(e,n,t,o??1)}function Ae(e,n,t,o){this.r=+e,this.g=+n,this.b=+t,this.opacity=+o}Bt(Ae,fd,Ao(Pn,{brighter:function(e){return e=e==null?_t:Math.pow(_t,e),new Ae(this.r*e,this.g*e,this.b*e,this.opacity)},darker:function(e){return e=e==null?st:Math.pow(st,e),new Ae(this.r*e,this.g*e,this.b*e,this.opacity)},rgb:function(){return this},displayable:function(){return 0<=this.r&&this.r<=255&&0<=this.g&&this.g<=255&&0<=this.b&&this.b<=255&&0<=this.opacity&&this.opacity<=1},toString:function(){var e=this.opacity;return e=isNaN(e)?1:Math.max(0,Math.min(1,e)),(e===1?"rgb(":"rgba(")+Math.max(0,Math.min(255,Math.round(this.r)||0))+", "+Math.max(0,Math.min(255,Math.round(this.g)||0))+", "+Math.max(0,Math.min(255,Math.round(this.b)||0))+(e===1?")":", "+e+")")}}));function Ts(e,n,t,o){return o<=0?e=n=t=NaN:t<=0||t>=1?e=n=NaN:n<=0&&(e=NaN),new en(e,n,t,o)}function Kv(e){if(e instanceof en)return new en(e.h,e.s,e.l,e.opacity);if(e instanceof Pn||(e=mo(e)),!e)return new en;if(e instanceof en)return e;e=e.rgb();var n=e.r/255,t=e.g/255,o=e.b/255,r=Math.min(n,t,o),a=Math.max(n,t,o),i=NaN,s=a-r,u=(a+r)/2;return s?(n===a?i=(t-o)/s+(t<o)*6:t===a?i=(o-n)/s+2:i=(n-t)/s+4,s/=u<.5?a+r:2-a-r,i*=60):s=u>0&&u<1?0:i,new en(i,s,u,e.opacity)}function Qv(e,n,t,o){return arguments.length===1?Kv(e):new en(e,n,t,o??1)}function en(e,n,t,o){this.h=+e,this.s=+n,this.l=+t,this.opacity=+o}Bt(en,Qv,Ao(Pn,{brighter:function(e){return e=e==null?_t:Math.pow(_t,e),new en(this.h,this.s,this.l*e,this.opacity)},darker:function(e){return e=e==null?st:Math.pow(st,e),new en(this.h,this.s,this.l*e,this.opacity)},rgb:function(){var e=this.h%360+(this.h<0)*360,n=isNaN(e)||isNaN(this.s)?0:this.s,t=this.l,o=t+(t<.5?t:1-t)*n,r=2*t-o;return new Ae(jr(e>=240?e-240:e+120,r,o),jr(e,r,o),jr(e<120?e+240:e-120,r,o),this.opacity)},displayable:function(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1}}));function jr(e,n,t){return(e<60?n+(t-n)*e/60:e<180?t:e<240?n+(t-n)*(240-e)/60:n)*255}var Ad=Math.PI/180,vd=180/Math.PI,Zo=18,bd=.95047,Td=1,kd=1.08883,Nd=4/29,It=6/29,Id=3*It*It,Xv=It*It*It;function di(e){if(e instanceof pn)return new pn(e.l,e.a,e.b,e.opacity);if(e instanceof Rn){var n=e.h*Ad;return new pn(e.l,Math.cos(n)*e.c,Math.sin(n)*e.c,e.opacity)}e instanceof Ae||(e=ui(e));var t=Ur(e.r),o=Ur(e.g),r=Ur(e.b),a=Hr((.4124564*t+.3575761*o+.1804375*r)/bd),i=Hr((.2126729*t+.7151522*o+.072175*r)/Td),s=Hr((.0193339*t+.119192*o+.9503041*r)/kd);return new pn(116*i-16,500*(a-i),200*(i-s),e.opacity)}function Zv(e,n,t,o){return arguments.length===1?di(e):new pn(e,n,t,o??1)}function pn(e,n,t,o){this.l=+e,this.a=+n,this.b=+t,this.opacity=+o}Bt(pn,Zv,Ao(Pn,{brighter:function(e){return new pn(this.l+Zo*(e??1),this.a,this.b,this.opacity)},darker:function(e){return new pn(this.l-Zo*(e??1),this.a,this.b,this.opacity)},rgb:function(){var e=(this.l+16)/116,n=isNaN(this.a)?e:e+this.a/500,t=isNaN(this.b)?e:e-this.b/200;return e=Td*zr(e),n=bd*zr(n),t=kd*zr(t),new Ae(Vr(3.2404542*n-1.5371385*e-.4985314*t),Vr(-.969266*n+1.8760108*e+.041556*t),Vr(.0556434*n-.2040259*e+1.0572252*t),this.opacity)}}));function Hr(e){return e>Xv?Math.pow(e,1/3):e/Id+Nd}function zr(e){return e>It?e*e*e:Id*(e-Nd)}function Vr(e){return 255*(e<=.0031308?12.92*e:1.055*Math.pow(e,1/2.4)-.055)}function Ur(e){return(e/=255)<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)}function Jv(e){if(e instanceof Rn)return new Rn(e.h,e.c,e.l,e.opacity);e instanceof pn||(e=di(e));var n=Math.atan2(e.b,e.a)*vd;return new Rn(n<0?n+360:n,Math.sqrt(e.a*e.a+e.b*e.b),e.l,e.opacity)}function eb(e,n,t,o){return arguments.length===1?Jv(e):new Rn(e,n,t,o??1)}function Rn(e,n,t,o){this.h=+e,this.c=+n,this.l=+t,this.opacity=+o}Bt(Rn,eb,Ao(Pn,{brighter:function(e){return new Rn(this.h,this.c,this.l+Zo*(e??1),this.opacity)},darker:function(e){return new Rn(this.h,this.c,this.l-Zo*(e??1),this.opacity)},rgb:function(){return di(this).rgb()}}));var hd=-.14861,ci=1.78277,mi=-.29227,kr=-.90649,yo=1.97294,ks=yo*kr,Ns=yo*ci,Is=ci*mi-kr*hd;function nb(e){if(e instanceof Zn)return new Zn(e.h,e.s,e.l,e.opacity);e instanceof Ae||(e=ui(e));var n=e.r/255,t=e.g/255,o=e.b/255,r=(Is*o+ks*n-Ns*t)/(Is+ks-Ns),a=o-r,i=(yo*(t-r)-mi*a)/kr,s=Math.sqrt(i*i+a*a)/(yo*r*(1-r)),u=s?Math.atan2(i,a)*vd-120:NaN;return new Zn(u<0?u+360:u,s,r,e.opacity)}function tb(e,n,t,o){return arguments.length===1?nb(e):new Zn(e,n,t,o??1)}function Zn(e,n,t,o){this.h=+e,this.s=+n,this.l=+t,this.opacity=+o}Bt(Zn,tb,Ao(Pn,{brighter:function(e){return e=e==null?_t:Math.pow(_t,e),new Zn(this.h,this.s,this.l*e,this.opacity)},darker:function(e){return e=e==null?st:Math.pow(st,e),new Zn(this.h,this.s,this.l*e,this.opacity)},rgb:function(){var e=isNaN(this.h)?0:(this.h+120)*Ad,n=+this.l,t=isNaN(this.s)?0:this.s*n*(1-n),o=Math.cos(e),r=Math.sin(e);return new Ae(255*(n+t*(hd*o+ci*r)),255*(n+t*(mi*o+kr*r)),255*(n+t*(yo*o)),this.opacity)}}));const Sd=e=>e.createLineCollection(),Cd=(e,n,t,o)=>{const r=(o==null?void 0:o.width)??Se.lineStrokeWidthPx,a=(o==null?void 0:o.ruler)===!0,i=(o==null?void 0:o.occludedDashed)===!0,s=(o==null?void 0:o.halo)!==!1;return{line:e.addLine({id:n,positions:[],color:t,width:r,ruler:a,occludedDashed:i,halo:s,visible:!1}),colorCss:t,width:r,ruler:a,occludedDashed:i,halo:s}},Ed=(e,n)=>{e.colorCss!==n&&(e.line.setStyle({color:n,width:e.width,ruler:e.ruler,occludedDashed:e.occludedDashed,halo:e.halo}),e.colorCss=n)},Od=e=>{e.line.setVisible(!1)},Ld=(e,n)=>{e.line.setPositions(n),e.line.setVisible(n.length>=2)},ob=.1,rb=(e,n)=>{const t=mo(e)??mo("white");if(!t)return`rgba(255,255,255,${n})`;const{r:o,g:r,b:a}=t.rgb();return`rgba(${[o,r,a].map(Math.round).join(",")},${n})`},ab=(e,n)=>{let t=null,o=null,r=!1;const a=()=>{o&&(Od(o),r=!1)};return{apply:i=>{if(!i){a();return}t??(t=Sd(e)),o??(o=Cd(t,n,i.colorCss)),Ed(o,i.colorCss);const s=Math.max(i.lineLengthMeters,ob)/2;Ld(o,[new w(0,0,-s).applyMatrix4(i.modelMatrix),new w(0,0,s).applyMatrix4(i.modelMatrix)]),r=!0},clear:a,hide:()=>o==null?void 0:o.line.setVisible(!1),restore:()=>o==null?void 0:o.line.setVisible(r),destroy:()=>{t==null||t.destroy(),t=null,o=null}}},ib=e=>{let n=[];const t=new w;return{hasTrail:()=>n.length>1,push:o=>jp({samples:n,normal:o,maxSampleCount:e().maxSampleCount,timestampMs:performance.now()}),average:o=>{const{maxSampleAgeMs:r,weightDecayGamma:a}=e();return Hp({samples:n,fallbackNormal:o,result:t,epsilonSquared:su,maxSampleAgeMs:r,weightDecayGamma:a,nowMs:performance.now()})},clear:()=>{n=[]}}},sb=(e,n,{diameterCssPx:t,halo:o})=>{const r=ti.point.outlineWidth,a=or(Math.max(0,t-r)/2,24);let i=null,s=null,u=null;const l=()=>s==null?void 0:s.setVisible(!1);return{apply:(d,c)=>{var f,A;if(!d||t<=0||e.isDestroyed()){l();return}const m=e.worldToScreen(d),y=((f=e.getCameraPose())==null?void 0:f.directionECEF.clone())??((A=e.getCameraPositionECEF())==null?void 0:A.sub(d).normalize());if(!m||!y){l();return}const p=[];for(const v of a){const T=e.getPickRay({x:m.x+v.x,y:m.y+v.y}),b=(T==null?void 0:T.direction.dot(y))??0;if(!T||Math.abs(b)<1e-8){l();return}const h=d.clone().sub(T.origin).dot(y)/b;if(!Number.isFinite(h)||h<0){l();return}p.push(T.origin.clone().addScaledVector(T.direction,h))}p.length>0&&p.push(p[0].clone()),i??(i=e.createLineCollection()),s??(s=i.addLine({id:n,positions:p,color:c,width:r,overlay:!0,overlayHalo:o,halo:o,visible:!1})),u!==c&&(s.setStyle({color:c,width:r,overlay:!0,overlayHalo:o,halo:o}),u=c),s.setPositions(p),s.setVisible(!0)},clear:l,destroy:()=>{i==null||i.destroy(),i=null,s=null,u=null}}},lb=(e,n,t,{innerRadiusRatio:o=0,centerCircleDiameterCssPx:r=0,halo:a=!0,drawRim:i=!0}={})=>{const s=or(1,t).map(({x:f,y:A})=>new w(f,A,0));s.length>0&&s.push(s[0].clone());const u=[new w(1,0,0),new w(0,1,0)].flatMap(f=>[-1,1].flatMap(A=>[f.clone().multiplyScalar(o*.5*A),f.clone().multiplyScalar(o*A)])),l=sb(e,`${n}-center-circle`,{diameterCssPx:r,halo:a}),d=new w;let c=null,m=null,y=null,p=null;return{apply:(f,A,{normalRadiusMeters:v=0}={})=>{if(y??(y=Sd(e)),i&&(p??(p=Cd(y,n,A,{width:Fe,occludedDashed:!0,halo:!0})),Ed(p,A),Ld(p,s.map(T=>T.clone().applyMatrix4(f)))),l.apply(d.setFromMatrixPosition(f),ti.point.outline),o>0){c??(c=y.addLine({id:`${n}-crosshair`,color:A,width:Fe,segmentPairs:!0,occludedDashed:!0,halo:a,visible:!1})),m!==A&&(c.setStyle({color:A,width:Fe,occludedDashed:!0,halo:a}),m=A);const T=v>0?[-1,1].flatMap(b=>[new w(0,0,v*o*.5*b),new w(0,0,v*o*b)]):[];c.setPositions([...u,...T].map(b=>b.clone().applyMatrix4(f))),c.setVisible(!0)}},clear:()=>{p&&Od(p),c==null||c.setVisible(!1),l.clear()},destroy:()=>{y==null||y.destroy(),l.destroy(),y=null,p=null,c=null,m=null}}},Pe=(e,n)=>Rm(e)?e:n,xS=(e,n)=>Math.max(0,Pe(e,n)),ub=.1,Pt=Object.freeze({SCALE_BAND:"scale-band",VIEW_CHANGE:"view-change"}),hs=(e,n,t,{radiusSteps:o=!1}={})=>{if(!Number.isFinite(e)||e<=0)return null;const r=n/e;return Math.max(t?o?Yn(r):Yn(r*2)/2:r,o?0:ub)},db=(e,n,t,o)=>n===null||(e===Pt.VIEW_CHANGE?n.viewKey!==t.viewKey:Nl(n.referenceScale,t.referenceScale,o)),Ss=e=>{const n=e.getCameraPose();if(!n)return"";const{positionECEF:t,directionECEF:o,upECEF:r,verticalFovRad:a}=n;return[...t.toArray(),...o.toArray(),...r.toArray(),a,e.canvas.clientWidth,e.canvas.clientHeight].join()},Rd=({engine:e,stepFactor:n,targetScreenRadiusCssPx:t,quantize:o,radiusSteps:r=!1,discSizing:a,fallbackRadiusMeters:i,trigger:s=Pt.SCALE_BAND})=>{const u=s===Pt.VIEW_CHANGE;let l=null,d=null;const c=new w,m=fn,y=a?{target:Math.max(1,Pe(a.targetScreenRadiusCssPx,m.targetScreenRadiusCssPx)),minimum:Math.max(1,Pe(a.minimumScreenRadiusCssPx,m.minimumScreenRadiusCssPx)),maximumRatio:Be(Pe(a.maximumViewportRadiusRatio,m.maximumViewportRadiusRatio),.01,1),factor:Math.max(2,Pe(a.sceneResizeFactor,m.sceneResizeFactor)),hysteresis:Be(Pe(a.resizeHysteresisRatio,m.resizeHysteresisRatio),0,.4)}:null;return(p,{cameraMoving:f=!1,viewRevision:A}={})=>{var h;if(y){const k=A===void 0?Ss(e):`${A}:${e.canvas.clientWidth}:${e.canvas.clientHeight}`,N=e.getScreenPixelsPerMeterAt(p);if(!Number.isFinite(N)||N<=0)return l??i;const S=Math.max(1,Math.min(e.canvas.clientWidth,e.canvas.clientHeight)*y.maximumRatio),I=Math.min(y.minimum,S/2),C=Math.min(I*(1+y.hysteresis),S/2),L=Math.max(C,S/(1+y.hysteresis)),R=Be(y.target,C,L),E=!f&&(d==null?void 0:d.viewKey)!==k;if(l===null||E){const q=(h=e.getViewportCenterGroundPosition)==null?void 0:h.call(e),D=q?e.getScreenPixelsPerMeterAt(q):N;if(!Number.isFinite(D)||D<=0)return l??i;l=hs(D,R,!0,{radiusSteps:!0})??i,d={viewKey:k,referenceScale:D}}const x=l??i,P=x*N;if(P>=I&&P<=S)return x;let M=x;for(let q=0;q<16;q+=1){const D=M*N;if(D>=I&&D<=S)break;M*=D<I?y.factor:1/y.factor}if(M=Yn(M),M*N<C||M*N>L){const q=Yn(R/N),D=[q,Yn(q/2),Yn(q*2)],W=D.filter(G=>G*N>=C&&G*N<=L);M=(W.length>0?W:D.filter(G=>G*N>=I&&G*N<=S)).sort((G,V)=>Math.abs(G*N-R)-Math.abs(V*N-R))[0]??R/N}return l=M,l}const v={viewKey:u?Ss(e):"",referenceScale:d&&!u?e.getScreenPixelsPerMeterAt(c):0};if(l!==null&&!db(s,d,v,n))return l;const T=e.getScreenPixelsPerMeterAt(p),b=hs(T,t,o,{radiusSteps:r});return b===null?l??i:(l=b,d={viewKey:v.viewKey,referenceScale:T},c.copy(p),b)}},cb=(e,n,t)=>{let o=!1,r=0,a=null;const i=Rd({engine:e,discSizing:n,radiusSteps:!0,stepFactor:fn.sceneResizeFactor,targetScreenRadiusCssPx:fn.targetScreenRadiusCssPx,quantize:!0,fallbackRadiusMeters:t,trigger:Pt.VIEW_CHANGE});return{resolve:s=>e.isDestroyed()?t:i(s,{cameraMoving:o,viewRevision:r}),start:s=>{a||(a=e.subscribeCameraMove({onMoveStart:()=>{o=!0},onMoveEnd:()=>{o=!1,r+=1,s()}}))},destroy:()=>{a==null||a(),a=null}}},mb=(e,n={})=>{const t=fn,o=Math.max(0,Pe(n.radiusLabelVisibleDurationMs,t.radiusLabelVisibleDurationMs)),r=Math.max(0,Pe(n.radiusLabelFadeDurationMs,t.radiusLabelFadeDurationMs)),a=Math.max(0,Pe(n.resizeAnimationDurationMs,t.resizeAnimationDurationMs)),i=Math.max(0,Pe(n.snapAnimationDurationMs,t.snapAnimationDurationMs)),s=typeof window<"u"&&typeof window.matchMedia=="function"?window.matchMedia("(prefers-reduced-motion: reduce)"):null;let u=null,l=null,d=0,c=null,m=null,y=null,p=null,f=null,A=null;const v=k=>{if(!A)return p;const N=s!=null&&s.matches||i===0?1:Math.min(1,Math.max(0,(k-A.startedAt)/i)),S=N*N*(3-2*N);return p=(p??new w).lerpVectors(A.from,A.to,S),N===1&&(A=null),p},T=()=>{c!==null&&clearTimeout(c),c=null},b=k=>{if(!e)return;const N=Math.max(0,d-k);e.style.transition=`opacity ${s!=null&&s.matches?0:r}ms ease-out`,e.style.opacity=N>0?"1":"0",N>0&&c===null&&(c=setTimeout(()=>{c=null,e.style.opacity="0"},N))},h=k=>{if(!m)return l;const N=s!=null&&s.matches||a===0?1:Math.min(1,Math.max(0,(k-m.startedAt)/a)),S=N*N*(3-2*N);return l=m.from*Math.pow(m.to/m.from,S),N===1&&(l=m.to,m=null),l};return{resolvePoint:(k,N)=>{const S=performance.now(),I=v(S);return f!==null&&(f!==N||N&&y!==null&&!y.equals(k))&&I&&!I.equals(k)&&i>0&&!(s!=null&&s.matches)?A={from:I.clone(),to:k.clone(),startedAt:S}:A&&A.to.copy(k),y=(y??new w).copy(k),f=N,A||(p=(p??new w).copy(k)),{pointECEF:v(S)??k,animating:A!==null}},resolveRadius:k=>{const N=performance.now(),S=h(N);return k!==u&&(m=S!==null&&a>0&&!(s!=null&&s.matches)?{from:S,to:k,startedAt:N}:null,u=k,l=S!==null&&m?S:k,d=N+o,T()),b(N),{radiusMeters:h(N)??k,animating:m!==null}},clear:({preserveSnapTravel:k=!1}={})=>{k||(y=null,p=null,f=null,A=null),T(),m=null,l=u,e&&(e.style.display="none")}}},wd={TRUE_SAMPLE:"true-sample",CAMERA_PLANE_REPROJECT:"camera-plane-reproject"},yb=e=>e===wd.CAMERA_PLANE_REPROJECT,pb=.1,gb=.999,Cs=e=>Be(e,0,gb),fb=({engine:e,pointECEF:n,discNormalECEF:t,radiusMeters:o,scalingMode:r,targetScreenRadiusCssPx:a})=>{const i=Math.max(o,pb);return r==="world"?i:og(s=>e.worldToScreen(s),n,t,i,a)},Ab=({engine:e,screenPosition:n,tangentPlane:t})=>{if(!t)return null;const o=e.getPickRay(n);if(!o)return null;const r=new Tm().setFromNormalAndCoplanarPoint(t.normalECEF.clone().normalize(),t.pointECEF),a=wm(new km(o.origin,o.direction),r);return a&&o.direction.dot(new w().subVectors(a,o.origin))>0?a:null},vb="white",Es={overlay:20,inScene:48},bb=(e,{radius:n,placementMode:t=wd.CAMERA_PLANE_REPROJECT,color:o,opacity:r,materialPreset:a,innerHoleRadiusRatio:i=dn.innerHoleRadiusRatio,scalingMode:s=dn.scalingMode,targetScreenRadiusCssPx:u=dn.targetScreenRadiusCssPx,resizeWorldRadiusToScreenTarget:l=!1,discResizeStepFactor:d=4,quantizeStepWorldRadius:c=!1,showNormalLine:m=!1,lineLabelOptions:y,discSizing:p,tangentDiscVisualizerTrailSampleCount:f=dn.smoothingSampleCount,tangentDiscVisualizerSmoothingWindowMs:A=dn.smoothingWindowMs,tangentDiscVisualizerWeightDecayGamma:v=dn.smoothingWeightDecayGamma})=>{if(!e||!H(e))return{setEnabled:()=>{},setVisualStyle:()=>{},setPreview:()=>{},clearPreview:()=>{},destroy:()=>{}};const T=e,b=T.capabilities.pointQueryDiscInScene===!0,h=b?Es.inScene:Es.overlay,k=Math.max(n,.1),N=new gn,S=Pe(r,dn.alpha),I=b?Tr(T,"measurement-point-query-radius-label"):null,C=I?li(Se.directLineColor,y):null;C&&I&&(C.setAttribute("data-test-id","measurement-point-query-radius"),I.appendChild(C));const L=b?mb(C,p):null,R=b?or(1,h).map(({x:B,y:Y})=>new w(B,Y,0)):[],E=new w,x=B=>({colorCss:(B==null?void 0:B.color)??o??vb,opacity:Pe(B==null?void 0:B.opacity,S)}),P=B=>rb(B.colorCss,B.opacity);let M=!1,q=x(),D=P(q),W=null;const $=ab(T,"measurement-preview-point-ring-normal"),G=b?lb(T,"measurement-preview-point-ring-rim",h,{innerRadiusRatio:Cs(i),centerCircleDiameterCssPx:Math.max(0,Pe(p==null?void 0:p.centerCircleDiameterCssPx,fn.centerCircleDiameterCssPx)),halo:(p==null?void 0:p.crosshairHalo)??fn.crosshairHalo}):null,V=ib(()=>({maxSampleCount:f,maxSampleAgeMs:A,weightDecayGamma:v}));let X=null,ae=!1,ne=null;const U=b?cb(T,p??{},k):null,ie=Rd({engine:T,stepFactor:d,targetScreenRadiusCssPx:u,quantize:c,radiusSteps:b,fallbackRadiusMeters:k,trigger:b?Pt.VIEW_CHANGE:Pt.SCALE_BAND});let ce=null,pe=null,se=null,we=!1,Z=0,ke=null;const F=({preserveSnapTravel:B=!1}={})=>{W==null||W.destroy(),W=null,$.clear(),G==null||G.clear(),L==null||L.clear({preserveSnapTravel:B}),V.clear(),ke=null,ae=!1},te=()=>{if(!pe)return null;if(!yb(t)||we||!se)return pe;const B=T.pointer.getScreenPosition();return B?Ab({engine:T,screenPosition:B,tangentPlane:{pointECEF:pe,normalECEF:se}})??pe:pe},oe=()=>ne?(W??(W=T.createRing({id:dn.primitiveId,radius:1,innerRadius:Cs(i),color:q.colorCss,opacity:q.opacity,materialPreset:a??dn.materialPreset,segments:h,modelMatrix:N,occludable:b})),W):(F(),null),K=()=>{ae||!V.hasTrail()||T.isDestroyed()||(ae=!0,T.requestRender())},Q=({requestSmoothingRender:B=!0}={})=>{if(!M){F();return}const Y=te();if(!Y){F();return}const Ne=L==null?void 0:L.resolvePoint(Y,we),Qe=(Ne==null?void 0:Ne.pointECEF)??Y;ne=(ne??new w).copy(Qe);const Mn=ng(Qe,se??ce,ce),an=b?U.resolve(Y):s===Ba.WORLD&&l?ie(Qe):fb({engine:T,pointECEF:Qe,discNormalECEF:Mn,radiusMeters:k,scalingMode:s,targetScreenRadiusCssPx:u}),vo=W??oe();if(!vo)return;ke!==Z&&(ke=Z,V.push(Mn));const bo=V.average(Mn);B&&K();const sn=L==null?void 0:L.resolveRadius(an),kn=(sn==null?void 0:sn.radiusMeters)??an;if(vo.setModelMatrix((b?tg:Aa)(Qe,bo,kn,N)),G==null||G.apply(N,D,{normalRadiusMeters:m?kn:0}),$.apply(m&&!b?{modelMatrix:N,lineLengthMeters:an*2,colorCss:D}:null),C){let ln=null;for(const Xe of R){const Dn=T.worldToScreen(E.copy(Xe).applyMatrix4(N));Dn&&(!ln||Dn.x>ln.x)&&(ln=Dn)}if(ln){const Xe=an>=1?"m":an>=.01?"cm":"mm";si(C,`R${Math.round(an*(Xe==="m"?1:Xe==="cm"?100:1e3))} ${Xe}`),C.dataset.radiusMeters=String(an),C.dataset.displayedRadiusMeters=String(kn),C.style.display="block",C.style.transform=`translate(${ln.x+Se.lineLabelOffsetPx}px, ${ln.y}px) translate(0, -50%)`}else C.style.display="none"}(sn!=null&&sn.animating||Ne!=null&&Ne.animating)&&T.requestRender()},le=()=>{ne=null,ce=null,pe=null,se=null,we=!1,Z+=1,F()},j=T.pointer.register();return U==null||U.start(()=>{M&&T.requestRender()}),X=T.subscribePreRender(()=>{ae=!1,Q()}),{setEnabled:B=>{M!==B&&(M=B,M?Q({requestSmoothingRender:!1}):F(),T.requestRender())},setVisualStyle:(B,Y)=>{const Ne=x(B),Qe=P(Ne);D!==Qe&&(q=Ne,D=Qe,F({preserveSnapTravel:!0}),Q({requestSmoothingRender:!1}),(Y==null?void 0:Y.requestRender)!==!1&&T.requestRender())},setPreview:(B,Y)=>{if(!(B!=null&&B.pointECEF)){le(),(Y==null?void 0:Y.requestRender)!==!1&&T.requestRender();return}pe=(pe??new w).copy(B.pointECEF),ne=(ne??new w).copy(B.pointECEF),se=B.surfaceNormalECEF?(se??new w).copy(B.surfaceNormalECEF):null,ce=B.surfaceNormalECEF?(ce??new w).copy(B.surfaceNormalECEF):null,we=B.lockToPreviewPoint===!0,Z+=1,Q({requestSmoothingRender:!1}),(Y==null?void 0:Y.requestRender)!==!1&&T.requestRender()},clearPreview:()=>{le(),T.requestRender()},destroy:()=>{j(),U==null||U.destroy(),bv(X),X=null,F(),$.destroy(),G==null||G.destroy(),qt(I)}}},Tb=({engine:e,referenceObjectSizing:n,lineLabelOptions:t,pointQueryEnabled:o,refs:{indicatorControllerRef:r,latestPickResultRef:a,pointQueryEnabledRef:i},resolveHoveredPointQueryNodeRef:s})=>{const u=(e==null?void 0:e.capabilities.pointQueryDiscInScene)===!0?t:void 0,l=(e==null?void 0:e.capabilities.pointQueryDiscInScene)===!0?n.discSizing:void 0;g.useEffect(()=>{var c;(c=r.current)==null||c.destroy();const d=bb(e,{radius:n.worldRadiusMeters,scalingMode:n.scalingMode,targetScreenRadiusCssPx:n.targetScreenRadiusCssPx,resizeWorldRadiusToScreenTarget:n.resizeWorldRadiusToScreenTarget,discResizeStepFactor:n.resizeStepFactor,quantizeStepWorldRadius:n.quantizeWorldRadius,showNormalLine:!0,lineLabelOptions:u,discSizing:l,tangentDiscVisualizerTrailSampleCount:Xn.pointQuery.discSmoothingSampleCount,tangentDiscVisualizerSmoothingWindowMs:Xn.pointQuery.discSmoothingWindowMs,tangentDiscVisualizerWeightDecayGamma:Xn.pointQuery.discSmoothingWeightDecayGamma});return r.current=d,d==null||d.setEnabled(i.current),i.current&&a.current?d==null||d.setPreview({pointECEF:a.current.pointECEF,surfaceNormalECEF:a.current.surfaceNormalECEF,lockToPreviewPoint:s.current()!==null}):d==null||d.clearPreview(),()=>{var m;(m=r.current)==null||m.destroy(),r.current=null}},[n.quantizeWorldRadius,n.resizeWorldRadiusToScreenTarget,n.resizeStepFactor,n.scalingMode,n.targetScreenRadiusCssPx,n.worldRadiusMeters,e,u,l]),g.useEffect(()=>{var d;(d=r.current)==null||d.setEnabled(o)},[o])},kb=({engine:e,activePlugin:n,context:t,pointQueryEnabled:o,refs:{authoringControllerRef:r,latestPickResultRef:a,pointQueryEnabledRef:i}})=>{const{annotationsStore:s,drafts:u,labelOverlay:l,formatOptions:d,lineLabelOptions:c}=t;g.useEffect(()=>{var y,p;(y=r.current)==null||y.destroy();const m=((p=n==null?void 0:n.authoringVisuals)==null?void 0:p.createController({engine:e,annotationsStore:s,drafts:u,labelOverlay:l,requestRender:()=>{H(e)&&e.requestRender()},formatOptions:d,lineLabelOptions:c}))??null;return r.current=m,m==null||m.setEnabled(i.current),m==null||m.setPointQueryPickResult(i.current?a.current:null),()=>{var f;(f=r.current)==null||f.destroy(),r.current=null}},[n,s,u,e,d,l,c]),g.useEffect(()=>{var m,y;(m=r.current)==null||m.setEnabled(o),o||(y=r.current)==null||y.setPointQueryPickResult(null)},[o])},Ea={requestModeChange:()=>{},requestActivateTool:()=>{},requestFinishMeasurement:()=>!1,requestPointAt:()=>!1},qS="#00d9ff",Nb="#ef4444",$r={requestRender:!1},Ib=({engine:e,registry:n,annotationsStore:t,annotationToolDraftStore:o,setActiveToolTypeInStore:r,focusAdjacentAnnotationEntry:a,removeSelectedAnnotations:i,removeEditedNode:s,addAnnotation:u,bindApi:l,bindPreviewSnapTargetNodeClick:d,activeEditedNodeId:c,getHoveredPointQueryNodeId:m,setHoveredPointQueryNodeId:y,onPointQueryPickResultChange:p,formatOptions:f,lineLabelOptions:A,referenceObjectSizing:v,requestLabelText:T})=>{var Q,le;const b=tr(),h=de(j=>j.annotationToolType),k=de(j=>j.nodes),N=de(j=>j.linkedNodeGroups),S=de(j=>j.settingsState.pointTemporaryMode),I=g.useRef(null),C=g.useRef(null),L=g.useRef(null),R=g.useRef(null),E=g.useCallback((j,B)=>{var Y;R.current=j,(Y=C.current)==null||Y.setPointQueryPickResult(j,B),p(j)},[p]),x=g.useMemo(()=>new Map(k.map(j=>[j.id,j])),[k]),P=g.useCallback(()=>{I.current!==null&&(window.clearTimeout(I.current),I.current=null)},[]),M=g.useCallback(()=>{var j,B;(j=L.current)==null||j.setVisualStyle(null),(B=L.current)==null||B.clearPreview()},[]),q=g.useCallback(()=>y(null),[y]),D=g.useCallback(()=>{P(),E(null),M(),q()},[q,M,P,E]),W=g.useCallback(()=>{const j=m();return j?x.get(j)??null:null},[m,x]),$=g.useMemo(()=>({getState:t.getState,dispatch:t.dispatch,setActiveToolType:r,drafts:o,requestLabelText:T,addAnnotation:u}),[u,o,t.dispatch,t.getState,T,r]),G=g.useMemo(()=>nv(n,$),[n,$]),V=n.getPlugin(h)??null;g.useMemo(()=>Mu(n.plugins),[n.plugins]);const X=g.useMemo(()=>jf(n),[n]);av({pointTemporaryMode:S,annotationToolDraftStore:o,addAnnotation:u});const{requestModeChange:ae,requestActivateTool:ne,requestFinishMeasurement:U}=KA(h,G,D),ie=g.useCallback(()=>{const j=U();return j&&D(),j},[U,D]),{handlePointQueryPointCreated:ce,resolvePointQueryCoordinate:pe,activeToolSession:se}=ev({engine:e,nodes:k,linkedNodeGroups:N,activeToolType:h,toolSessions:G,getToolPlugin:j=>n.getPlugin(j)??null,sessionContext:$}),we=g.useCallback((j,B,Y)=>{ce(j,B,{inputModifier:Y==null?void 0:Y.inputModifier}),D()},[ce,D]),Z=!!((se!=null&&se.onNodeCreated||(Q=V==null?void 0:V.pointQuery)!=null&&Q.onPointCreated)&&!c),ke=iv({engine:e,pointQueryEnabled:Z,onPointCreated:we});g.useEffect(()=>(l({requestModeChange:ae,requestActivateTool:ne,requestFinishMeasurement:ie,requestPointAt:ke}),()=>{l(Ea)}),[l,ie,ae,ne,ke]);const F=g.useRef(Z);F.current=Z;const te=g.useRef(W);te.current=W;const oe=g.useCallback(j=>{if(!Z)return!1;const B=k.find(Y=>Y.id===j)??null;return B?(ce(B.coordinate,void 0,{forcedSnappedNodeId:j}),D(),!0):!1},[ce,k,Z,D]);g.useEffect(()=>d(oe)??void 0,[d,oe]);const K={indicatorControllerRef:L,authoringControllerRef:C,latestPickResultRef:R,pointQueryEnabledRef:F};return Tb({engine:e,referenceObjectSizing:v,lineLabelOptions:A,pointQueryEnabled:Z,refs:K,resolveHoveredPointQueryNodeRef:te}),kb({engine:e,activePlugin:V,context:{annotationsStore:t,drafts:o,labelOverlay:b,formatOptions:f,lineLabelOptions:A},pointQueryEnabled:Z,refs:K}),g.useEffect(()=>{Z||q()},[q,Z]),ov(e,{enabled:Z,inputModifiers:(le=V==null?void 0:V.pointQuery)==null?void 0:le.inputModifiers,onCoordinate:we,onLineFinish:se!=null&&se.finishesOnLoopClosure?()=>{ie()}:void 0,onHoverSampleChange:({coordinate:j,screenPosition:B,pointECEF:Y,surfaceNormalECEF:Ne,inputModifier:Qe})=>{var sn,kn,ln,Xe,Dn,vi;if(!Z||!Y||!j){P(),I.current=window.setTimeout(()=>{I.current=null,E(null),M()},Xn.hoverClearDelayMs);return}P();const{pickResult:Mn,isLockedToSnapPoint:an}=rv({engine:e,hoveredNode:W(),coordinate:j,screenPosition:B,pointECEF:Y,surfaceNormalECEF:Ne,inputModifier:Qe,resolvePointQueryCoordinate:pe});E(Mn,$r),(sn=L.current)==null||sn.setPreview({pointECEF:Mn.pointECEF,surfaceNormalECEF:Mn.surfaceNormalECEF,lockToPreviewPoint:an},$r);const vo=((ln=(kn=C.current)==null?void 0:kn.isPointQueryPickResultAcceptable)==null?void 0:ln.call(kn))??!0,bo=(Dn=(Xe=C.current)==null?void 0:Xe.getPointQueryVisualStyle)==null?void 0:Dn.call(Xe);(vi=L.current)==null||vi.setVisualStyle(bo!==void 0?bo:vo?null:{color:Nb},$r)}}),g.useEffect(()=>{var j;Z||(P(),E(null),(j=C.current)==null||j.setEnabled(!1),M())},[M,P,Z,E]),g.useEffect(()=>()=>{P(),E(null)},[P,E]),YA({activePlugin:V,activeToolSession:se,activeToolType:h,cancelToolId:X,clearInteractionState:D,focusAdjacentAnnotationEntry:a,removeEditedNode:s,removeSelectedAnnotations:i,requestFinishMeasurement:ie,requestModeChange:ae,requestActivateTool:ne,sessionContext:$,setActiveToolTypeInStore:r}),null},hb=({registry:e,setActiveToolType:n})=>{const t=de(o=>o.annotationToolType);return g.useEffect(()=>{var r;if(e.getPlugin(t))return;const o=(r=e.orderedDescriptors[0])==null?void 0:r.id;o&&n(o)},[t,e,n]),null},xd=e=>{const n=new Map;return{set:(t,o)=>{n.set(t,o),e()},get:t=>n.get(t),delete:t=>{n.delete(t)&&e()},clear:()=>{n.size!==0&&(n.clear(),e())},forEach:t=>n.forEach(t),get size(){return n.size}}},tn={RIGHTMOST_SCREEN_SPACE:"rightmost-screen-space",LEFTMOST_SCREEN_SPACE:"leftmost-screen-space"},Xt={START_COORDINATE:"start-coordinate",END_COORDINATE:"end-coordinate"},Oa={POINT_LABEL:"point-label",LINE_BLEND:"line-blend"},qd={INSIDE:"inside",OUTSIDE:"outside"},pt={MIN:1,MAX:1400,LOG_SCALE:64},_d=e=>{if(!Number.isFinite(e)||e<0)return pt.MIN;const n=Math.log2(Math.max(1,e)+1)*pt.LOG_SCALE;return Be(Math.round(pt.MAX-n),pt.MIN,pt.MAX)},Pd=Object.freeze({reenterMarginPx:2,candidateSamples:10}),Sb=1e-9,Yt=(e,n)=>({x:e,y:n}),Cb=(e,n,t,o,r=0)=>{const a=n/2+r,i=t/2+r,s=[Yt(e.x-a,e.y-i),Yt(e.x+a,e.y-i),Yt(e.x+a,e.y+i),Yt(e.x-a,e.y+i)];return s.every(u=>Fa(o,u))&&o.every((u,l)=>s.every((d,c)=>!Cm(u,o[(l+1)%o.length],d,s[(c+1)%4],Sb)))},Eb=e=>{const n=e.map(u=>u.x),t=e.map(u=>u.y),[o,r,a,i]=[Math.min(...n),Math.max(...n),Math.min(...t),Math.max(...t)],s=Pd.candidateSamples;return Array.from({length:(s-1)**2},(u,l)=>Yt(o+(r-o)*(l%(s-1)+1)/s,a+(i-a)*(Math.floor(l/(s-1))+1)/s))},Ob=({polygon:e,width:n,height:t,previous:o})=>{var c,m;const r={fits:!1,position:null,weights:null};if(!e||e.length<3)return r;const a=kp(e),i=(y,p=0)=>!!y&&Cb(y,n,t,e,p);if(o!=null&&o.fits){const y=((c=o.weights)==null?void 0:c.length)===e.length?Xm(o.weights,e):a;if(i(y))return{fits:!0,position:y,weights:o.weights}}const s=o!=null&&o.fits?0:Pd.reenterMarginPx;if(a&&i(a,s))return{fits:!0,position:a,weights:null};const u=a??e[0],l=(m=Km(e))==null?void 0:m.center,d=[...l?[l]:[],...Eb(e)].filter(y=>i(y,s)).sort((y,p)=>Math.hypot(y.x-u.x,y.y-u.y)-Math.hypot(p.x-u.x,p.y-u.y))[0];return d?{fits:!0,position:d,weights:Qm(d,e)}:r},Lb=.5,Rb=e=>({width:(typeof e=="string"?e:String(e??"")).length*8.5,height:18}),Wr=new WeakMap,wb=e=>{if(e.offsetWidth<=0)return null;const n=getComputedStyle(e),t=e.offsetWidth-parseFloat(n.paddingLeft)-parseFloat(n.paddingRight),o=e.offsetHeight-parseFloat(n.paddingTop)-parseFloat(n.paddingBottom);return t>0&&o>0?{width:t,height:o}:null},xb=e=>{const n=e.firstElementChild;if(!n)return null;const t=n.outerHTML,o=Wr.get(n);if((o==null?void 0:o.key)===t)return o.size;const r=wb(n);return r?Wr.set(n,{key:t,size:r}):Wr.delete(n),r},qb=e=>e.coordinateCandidates&&e.coordinateCandidates.length>0?e.coordinateCandidates:[{coordinate:e.coordinate,nodeId:e.nodeId}],_b=(e,n)=>{const t=e.worldToScreen(z(n.coordinate));return t===null?null:{candidate:n,x:t.x,y:t.y}},Pb=({engine:e,label:n})=>{var s;const t=qb(n),o=t[0]??{coordinate:n.coordinate,nodeId:n.nodeId};if(!H(e)||!n.coordinateSelection||t.length<=1)return o;const r=t.flatMap(u=>{const l=_b(e,u);return l?[l]:[]});if(r.length===0)return o;const a=n.coordinateSelection===tn.LEFTMOST_SCREEN_SPACE;return((s=r.sort((u,l)=>a?u.x-l.x:l.x-u.x)[0])==null?void 0:s.candidate)??o},Mb=(e,n)=>{const t=e.nodeId?n.get(e.nodeId):void 0;return t?Jn(t):e.coordinate},wn=Object.freeze({layoutConfig:xm(void 0),markerPixelSize:10,markerOutlineWidth:ee.sizes.pointOutlineWidth,stemColor:ee.colors.surface,activeMoveGizmoLabelZIndex:pt.MAX+1}),La=()=>({screenPosition:null,isInViewport:!1,isHidden:!0,isOccluded:!1,hiddenByLayout:!0,angleRad:0,distance:wn.layoutConfig.stemDistance,attach:"center",zIndex:0}),Yr=(e,n)=>`${e}-${n}`,Md=e=>e.hideMarker!==!0,Dd=(e,n)=>({isOccluded:n,opacity:n?e.areaFit?Lb:dl:1}),Bd=e=>({markerSize:e.markerPixelSize??wn.markerPixelSize,markerStrokeWidth:e.markerOutlineWidth??wn.markerOutlineWidth}),Db=({label:e,overlayState:n,areaLabelSurfaceBlendMode:t,markerInScene:o=!1})=>{const{markerSize:r,markerStrokeWidth:a}=Bd(e),i=n.isHidden||n.hiddenByLayout,s=e.hideMarker===!0||o&&Md(e);return{pointId:e.id,content:e.content,badgeContent:e.badgeContent,selected:e.selected,hideLabelAndStem:e.hideLabelAndStem,hideStem:o,hideMarker:s,markerSize:r,markerStrokeWidth:a,stemStartDistance:e.stemStartDistance??(e.hideMarker?0:r/2+a/2),markerBackgroundColor:e.markerBackgroundColor,markerTextColor:e.markerTextColor,lineColor:e.lineColor??wn.stemColor,labelStyle:e.labelStyle,collapse:e.collapse,textBackgroundColor:e.textBackgroundColor,textColor:e.textColor,selectedBackgroundColor:e.selectedBackgroundColor,selectedTextColor:e.selectedTextColor,selectedGlowColor:e.selectedGlowColor,selectedGlowRadiusPx:e.selectedGlowRadiusPx,preserveFillOnSelection:e.preserveFillOnSelection,hoverBackgroundColor:e.hoverBackgroundColor,textShadow:e.textShadow,fontSize:e.fontSize,fontFamily:e.fontFamily,fontWeight:e.fontWeight,mixBlendMode:e.mixBlendMode??(e.anchorKind===Tl.AREA_CENTROID?t:void 0),onClick:e.onClick,onDoubleClick:e.onDoubleClick,onHoverChange:e.onHoverChange,onLongPress:e.onLongPress,markerOnlyPointerEvents:e.markerOnlyPointerEvents,longPressDurationMs:e.longPressDurationMs,longPressOnlyOnMarker:!!e.onLongPress&&!!e.hideLabelAndStem,renderHiddenMarkerInteractionTarget:!!(e.onLongPress&&e.markerOnlyPointerEvents===!0)||s&&e.hideMarker!==!0,screenPosition:i?null:n.screenPosition,angleRad:n.angleRad,distance:n.distance,attach:n.attach,isOccluded:n.isOccluded,visible:!i,zIndex:n.zIndex}},Kr=Object.freeze({viewportPaddingHorizontal:12,viewportPaddingVertical:8,occlusionToleranceMeters:1}),Bb=()=>({screenPosition:null,isInViewport:!1,isHidden:!0,isOccluded:!1}),Fb=e=>(e==null?void 0:e.getFrameKey())??null,Fd=e=>(e==null?void 0:e.captureProjectionSnapshot())??null,Gd=sg,jd=({engine:e,coordinate:n,shouldTestVisibility:t=!0,shouldTestOcclusion:o=!0,viewportPaddingHorizontal:r=Kr.viewportPaddingHorizontal,viewportPaddingVertical:a=Kr.viewportPaddingVertical,occlusionToleranceMeters:i=Kr.occlusionToleranceMeters})=>H(e)?e.projectPoint(z(n),{shouldTestVisibility:t,shouldTestOcclusion:o,viewportPaddingHorizontal:r,viewportPaddingVertical:a,occlusionToleranceMeters:i}):Bb(),Gb={placements:{},hiddenByLayout:new Set,collapsedToCompact:new Set},jb=new w,Qr=(e,n="")=>typeof e=="string"||typeof e=="number"?String(e):n,Hb=({engine:e,labels:n,areaLabelSizeById:t,areaLabelFitByKey:o})=>{const r=new Map;return n.forEach(a=>{var l;if(((l=a.areaFit)==null?void 0:l.role)!==qd.INSIDE)return;const i=[];for(const d of a.areaFit.outline){const c=e.worldToScreen(z(d));if(!c)break;i.push({x:c.x,y:c.y})}const s=t.get(a.id)??Rb(a.content),u=Ob({polygon:i.length===a.areaFit.outline.length?i:null,width:s.width,height:s.height,previous:o.get(a.areaFit.key)});r.set(a.areaFit.key,u),o.set(a.areaFit.key,u)}),r},zb=(e,n,t)=>{if(!e.areaFit)return n;const o=t.get(e.areaFit.key);return e.areaFit.role===qd.INSIDE?o!=null&&o.fits&&o.position?{...n,screenPosition:o.position}:{...n,isHidden:!0}:o!=null&&o.fits?{...n,isHidden:!0}:n},Vb=(e,n,t)=>({id:e.id,anchor:t,anchorKind:e.anchorKind,text:Qr(e.content),compactText:Qr(e.badgeContent,Qr(e.content)),index:n,...e.preferredAttach!==void 0?{lockPreferredPlacement:!0,preferredAttach:e.preferredAttach}:{},...e.selected?{layoutPriority:Number.MAX_SAFE_INTEGER,lockPreferredPlacement:!0}:{}}),Ub=({engine:e,labels:n,liveAnchors:t,isInPreviewNodeLink:o,previousStatesById:r,isCameraMoving:a,areaLabelSizeById:i,areaLabelFitByKey:s})=>{const u=new Map;if(!H(e))return u;const l=k=>k.hideLabelAndStem!==!0&&(o==null?void 0:o(k.nodeId))===!0,d=a&&e.capabilities.occlusionPerFrame!==!0||t.size>0,c=!d&&n.some(l),m=e.getCameraPitchRad(),y=e.getCameraPositionECEF(jb),p=Hb({engine:e,labels:n,areaLabelSizeById:i,areaLabelFitByKey:s}),f=[],A=new Map,v=new Map,T=new Map,b=new Set;n.forEach((k,N)=>{var P;const S=l(k);S&&b.add(k.id);const I=Mb(Pb({engine:e,label:k}),t),C=jd({engine:e,coordinate:I,shouldTestOcclusion:!d&&(k.areaFit!==void 0||qm({anchorKind:k.anchorKind,occlusionMode:k.occlusionMode}))}),L=d?{...C,isOccluded:((P=r.get(k.id))==null?void 0:P.isOccluded)??!1}:C,R=zb(k,L,p),E=z(I),x=y?y.distanceTo(E):Number.NaN;A.set(k.id,R),T.set(k.id,E),v.set(k.id,S?wn.activeMoveGizmoLabelZIndex:_d(x)),!(!R.screenPosition||R.isHidden||k.hideLabelAndStem||S||c&&r.has(k.id))&&f.push(Vb(k,N,R.screenPosition))});const h=f.length>0?_m({points:f,viewportWidth:Math.max(1,e.canvas.clientWidth),viewportHeight:Math.max(1,e.canvas.clientHeight),cameraPitch:typeof m=="number"?m:0,config:wn.layoutConfig}):Gb;return n.forEach(k=>{const N=r.get(k.id),S=b.has(k.id),I=h.placements[k.id],C=S?N:c?N??I:I,L=k.hideLabelAndStem||S?!1:c?(N==null?void 0:N.hiddenByLayout)??h.hiddenByLayout.has(k.id):h.hiddenByLayout.has(k.id);u.set(k.id,{...A.get(k.id)??La(),hiddenByLayout:L,angleRad:(C==null?void 0:C.angleRad)??(N==null?void 0:N.angleRad)??0,distance:(C==null?void 0:C.distance)??(N==null?void 0:N.distance)??wn.layoutConfig.stemDistance,attach:(C==null?void 0:C.attach)??(N==null?void 0:N.attach)??"center",zIndex:v.get(k.id)??0,anchorECEF:T.get(k.id)})}),u},$b=({state:e,lineLabelOptions:n,surfaceBlendMode:t})=>[Oa.LINE_BLEND,cl(e),n.appearance.themeStyle,n.background.style,n.text.fontFamily,n.text.fontWeight,t??""].join(":"),Wb=({elementDiv:e,state:n})=>!n.screenPosition||n.visible===!1?!1:(e.style.left=`${n.screenPosition.x}px`,e.style.top=`${n.screenPosition.y}px`,e.style.transform="translate(-50%, -50%)",e.style.zIndex=`${n.zIndex??0}`,e.style.opacity=n.isOccluded?"0.75":"1",!0),yi="transparent",Hd=e=>({...e,scale:nn.hover.scale,ring:{widthPx:nn.hover.ringSpreadPx,color:nn.colors.hoverRing}}),Yb=e=>{const n={sizePx:e.pixelSize,fill:e.fill,outline:e.outline,outlineWidthPx:e.outlineWidth};return{style:n,hoverStyle:Hd(n)}},Kb=e=>({sizePx:e.markerSize,fill:yi,outline:e.selected?e.selectedGlowColor??e.selectedTextColor??nn.colors.surfaceMax:nn.colors.surfaceMax,outlineWidthPx:e.markerStrokeWidth,ring:{widthPx:nn.shadow.markerBlurRadiusPx,color:nn.colors.shadowSoft,soft:!0}}),Qb=e=>{const n={sizePx:e.tickWidthPx,barLengthPx:e.tickLengthPx,fill:e.tickColor,outline:yi,outlineWidthPx:0};return{style:n,hoverStyle:Hd(n)}},Xb=(e,n)=>({sizePx:e,fill:n,outline:yi,outlineWidthPx:0}),zd=(e,n,t)=>(n?e.get(n):void 0)??t,Zb=(e,n,t,o)=>e.map(r=>{const a=z(r.coordinate);return{id:r.id,...Yb(r),place:()=>({positionECEF:zd(n,r.nodeId,a),hovered:t.has(r.id),occluded:o(r.id)})}}),Jb=(e,n,t)=>e.map(o=>{const r=z(o.coordinate);return{id:`${o.id}-marker`,style:Kb(o),place:()=>{const a=t(o.id);if(!(a!=null&&a.visible))return null;const i=Dd(o,a.isOccluded);return{positionECEF:a.anchorECEF??zd(n,o.nodeId,r),occluded:i.isOccluded,opacity:i.opacity}}}}),Vd=(e,n)=>({...n!=null&&n.hovered&&e.hoverStyle?e.hoverStyle:e.style,occluded:(n==null?void 0:n.occluded)===!0,opacity:(n==null?void 0:n.opacity)??1}),Nr=e=>(e==null?void 0:e.capabilities.occludedLinesInScene)===!0&&typeof e.createMarkerCollection=="function",eT=new w,Os=e=>{var n,t,o;return e?[e.sizePx,e.fill,e.outline,e.outlineWidthPx,e.barLengthPx??0,e.scale??1,((n=e.ring)==null?void 0:n.widthPx)??0,((t=e.ring)==null?void 0:t.color)??"",((o=e.ring)==null?void 0:o.soft)===!0].join("|"):""},Ud=(e,n)=>[n!=null&&n.hovered&&e.model.hoverStyle?e.hoverStyleSignature:e.styleSignature,(n==null?void 0:n.occluded)===!0,(n==null?void 0:n.opacity)??1].join("|"),Xr=e=>{const n=e.model.place();n&&e.handle.setPosition(n.positionECEF,n.acrossECEF),e.handle.setVisible(n!==null);const t=Ud(e,n);t!==e.appliedSignature&&(e.handle.setStyle(Vd(e.model,n)),e.appliedSignature=t)},pi=(e,n)=>{const t=g.useRef(null),o=g.useRef(new Map);g.useEffect(()=>{if(!H(e)||!Nr(e))return;const r=e.createMarkerCollection();t.current=r;const a=o.current;return()=>{a.clear(),t.current=null,H(e)&&r.destroy()}},[e]),g.useEffect(()=>{const r=t.current,a=o.current;if(!H(e)||!r)return;const i=new Set(n.map(s=>s.id));a.forEach((s,u)=>{i.has(u)||(s.handle.destroy(),a.delete(u))}),n.forEach(s=>{const u=Os(s.style),l=Os(s.hoverStyle),d=a.get(s.id);if(d){d.model=s,d.styleSignature=u,d.hoverStyleSignature=l,Xr(d);return}const c=s.place(),m={model:s,styleSignature:u,hoverStyleSignature:l},y={...m,handle:r.addMarker({...Vd(s,c),id:s.id,positionECEF:(c==null?void 0:c.positionECEF)??eT,acrossECEF:c==null?void 0:c.acrossECEF,visible:c!==null}),appliedSignature:Ud(m,c)};a.set(s.id,y),Xr(y)}),e.requestRender()},[e,n]),g.useEffect(()=>{if(H(e))return e.subscribePreRender(()=>{try{o.current.forEach(Xr)}catch{}})},[e])},Ls=Object.freeze({widthPx:1,occludedDash:Object.freeze({dashPx:3,gapPx:3})}),nT=(e,n,t,o)=>{const r=e.getPickRay(n);if(!r)return null;const a=r.direction.dot(o);if(!(Math.abs(a)>1e-9))return null;const i=new w().subVectors(t,r.origin).dot(o)/a;return i>0?r.origin.clone().addScaledVector(r.direction,i):null},tT=(e,n,t)=>{const o=e.worldToScreen(n),r=o?e.getPickRay(o):null;if(!o||!r)return null;const a=u=>nT(e,{x:o.x+u.x,y:o.y+u.y},n,r.direction),i=a(t.start),s=a(t.end);return i&&s?[i,s]:null},Rs=(e,{isOccluded:n,opacity:t})=>({color:e,width:Ls.widthPx,overlay:!0,halo:!0,opacity:t,...n?{dash:Ls.occludedDash}:{}}),ws=[],oT=(e,n,t)=>{const o=g.useRef(t);o.current=t;const r=g.useRef(null),a=g.useRef(new Map);g.useEffect(()=>{if(!H(e))return;const i=e.createLineCollection();r.current=i;const s=a.current,u=e.subscribePreRender(()=>{s.forEach((l,d)=>{const c=o.current(d),m=c?tT(e,c.anchorECEF,c.segment):null;if(!c||!m){l.line.setPositions(ws);return}const y=`${c.isOccluded}:${c.opacity}`;y!==l.styleKey&&(l.line.setStyle(Rs(l.color,c)),l.styleKey=y),l.line.setPositions(m)})});return()=>{u(),H(e)&&(s.forEach(l=>l.line.destroy()),i.destroy()),s.clear(),r.current=null}},[e]),g.useEffect(()=>{const i=r.current;if(!i||!H(e))return;const s=a.current,u=new Map(n.map(l=>[l.id,l.lineColor??wn.stemColor]));s.forEach((l,d)=>{u.get(d)!==l.color&&(l.line.destroy(),s.delete(d))}),u.forEach((l,d)=>{s.has(d)||s.set(d,{line:i.addLine({id:`${d}-stem`,positions:ws,...Rs(l,{isOccluded:!1,opacity:1})}),color:l,styleKey:"false:1"})}),e.requestRender()},[e,n])},$d=({engine:e,liveAnchors:n,updatePositions:t,computeStates:o,createEmptyState:r})=>{const a=g.useRef({frameKey:null,sceneSnapshot:null,statesById:new Map}),i=g.useRef(!1),s=g.useRef(!1),u=g.useCallback((c=!1)=>{a.current={frameKey:null,sceneSnapshot:null,statesById:c?new Map:a.current.statesById}},[]);g.useEffect(()=>{if(!H(e)){i.current=!1;return}const c=e.subscribeCameraMove({onMoveStart:()=>{i.current=!0,u()},onMoveEnd:()=>{i.current=!1,u(),t(),e.requestRender()}});return()=>{i.current=!1,c()}},[e,u,t]);const l=g.useCallback(c=>{const m=Fb(e);if(a.current.frameKey!==m){const y=Fd(e),p=n.size>0,f=s.current&&!p;s.current=p;const A=p||f||!Gd(a.current.sceneSnapshot,y);a.current={frameKey:m,sceneSnapshot:y,statesById:A?o({previousStatesById:a.current.statesById,isCameraMoving:i.current}):a.current.statesById}}return a.current.statesById.get(c)??r()},[o,r,e,n]),d=g.useCallback(c=>a.current.statesById.get(c),[]);return{resolveState:l,readCachedState:d,invalidate:u}},rT=e=>e.stem.isConnected&&e.stemLine.isConnected&&e.labelRoot.isConnected&&e.pointLabelRoot.isConnected,aT=(e,n,t,o,r="runtime-point-label",a=_e)=>{const{setLabelOverlayElement:i,removeLabelOverlayElement:s,invalidatePositions:u,updatePositions:l}=tr(),d=g.useRef(n),c=g.useRef(new Set),m=g.useRef(new Map),y=g.useRef(new Map),p=g.useRef(new Map),f=Nr(e),A=f?u:l,v=g.useRef(new Map),T=g.useCallback(({previousStatesById:L,isCameraMoving:R})=>Ub({engine:e,labels:d.current,liveAnchors:t,isInPreviewNodeLink:o,previousStatesById:L,isCameraMoving:R,areaLabelSizeById:p.current,areaLabelFitByKey:y.current}),[e,o,t]),{resolveState:b,readCachedState:h,invalidate:k}=$d({engine:e,liveAnchors:t,updatePositions:A,computeStates:T,createEmptyState:La});g.useEffect(()=>{d.current=n,k(),A(),e==null||e.requestRender()},[e,k,o,n,A]);const N=g.useMemo(()=>n.filter(L=>!L.hideLabelAndStem||L.markerOnlyPointerEvents===!0&&(!!L.onClick||!!L.onHoverChange||!!L.onLongPress)),[n]),S=g.useCallback((L,R)=>{const E=m.current.get(L);if(E&&rT(E))return E;const x=sp(R);return x?(m.current.set(L,x),x):null},[]);g.useEffect(()=>{let L=!1;const R=new Set;N.forEach(E=>{var G;const x=E.renderStyle===Oa.LINE_BLEND,P=E.mixBlendMode??Nv(a),M=V=>Db({label:E,overlayState:V,areaLabelSurfaceBlendMode:P,markerInScene:f}),q=M(h(E.id)??La()),D=x?$b({state:q,lineLabelOptions:a,surfaceBlendMode:P}):cl(q);R.add(E.id);const W=V=>{const X=M(b(E.id)),ae=Dd(E,X.isOccluded===!0);if(x){const ie=Wb({elementDiv:V,state:X});if(E.areaFit){ie&&(V.style.opacity=`${ae.opacity}`);const ce=xb(V);ce&&p.current.set(E.id,ce)}return ie}const ne=S(E.id,V);if(!ne)return!1;const U=yp({elementDiv:V,domRefs:ne,state:X});if(f&&!X.hideLabelAndStem){const ie=U?mp({domRefs:ne,state:X}):null;ie?v.current.set(E.id,{segment:ie,...ae}):v.current.delete(E.id)}return U&&(ne.pointLabelRoot.style.opacity=`${ae.opacity}`),U},$=x?O.jsx(dd,{content:q.content,selected:q.selected,textColor:q.textColor,fontSize:q.fontSize,styleOptions:Ov,visualOptions:a,surfaceBlendMode:P,onClick:q.onClick,onDoubleClick:q.onDoubleClick,onLongPress:q.onLongPress,longPressDurationMs:q.longPressDurationMs}):fm(q);c.current.has(E.id)||(L=!0,m.current.delete(E.id)),i({id:Yr(r,E.id),contentKey:D,content:$,zIndex:((G=h(E.id))==null?void 0:G.zIndex)??0,updatePosition:W})}),c.current.forEach(E=>{R.has(E)||(L=!0,m.current.delete(E),v.current.delete(E),s(Yr(r,E)))}),c.current=R,A(),L&&(e==null||e.requestRender())},[i,e,f,N,r,a,h,s,b,S,A]),g.useEffect(()=>()=>{c.current.forEach(L=>{s(Yr(r,L))}),c.current.clear(),m.current.clear(),v.current.clear()},[r,s]);const I=g.useCallback(L=>{const R=h(L);return R&&R.screenPosition&&!R.isHidden&&!R.hiddenByLayout?R:null},[h]),C=g.useMemo(()=>{if(!f)return{markers:[],stemLabels:[]};const L=N.filter(R=>R.renderStyle!==Oa.LINE_BLEND);return{markers:Jb(L.filter(Md).map(R=>({...R,...Bd(R)})),t,R=>{const E=I(R);return{visible:E!==null,anchorECEF:E==null?void 0:E.anchorECEF,isOccluded:(E==null?void 0:E.isOccluded)===!0}}),stemLabels:L.filter(R=>R.hideLabelAndStem!==!0)}},[f,t,N,I]);pi(e,C.markers),oT(f?e:null,C.stemLabels,L=>{var x;const R=(x=I(L))==null?void 0:x.anchorECEF,E=v.current.get(L);return R&&E?{anchorECEF:R,...E}:null})},iT=()=>({screenPosition:null,isInViewport:!1,isHidden:!0,isOccluded:!1}),sT=Object.freeze({longPressDurationMs:320}),Zr=(e,n)=>`${e}-${n}`,lT=e=>[e.id,e.pixelSize,e.fill,e.outline,e.outlineWidth,`${e.longPressDurationMs??""}`,Cr(e.onClick),Cr(e.onHoverChange),Cr(e.onLongPress)].join(":"),Wd=({interactive:e,hitAreaOnly:n=!1,onClick:t,onHoverChange:o,onLongPress:r,longPressDurationMs:a=sT.longPressDurationMs,markerStyle:i})=>{const[s,u]=g.useState(!1),l=s&&!n,d=g.useRef(void 0),c=g.useRef(!1),m=g.useCallback(()=>{d.current!==void 0&&(window.clearTimeout(d.current),d.current=void 0)},[]),y=g.useCallback(v=>{if(v.stopPropagation(),v.button!==0||!r){m();return}c.current=!1,m(),d.current=window.setTimeout(()=>{c.current=!0,r()},a)},[m,a,r]),p=g.useCallback(v=>{if(v.stopPropagation(),c.current){c.current=!1;return}t==null||t()},[t]),f=g.useCallback(()=>{u(!0),o==null||o(!0)},[o]),A=g.useCallback(()=>{m(),u(!1),o==null||o(!1)},[m,o]);return g.useEffect(()=>m,[m]),O.jsx("div",{"data-runtime-point-marker-shell":"true",style:{position:"relative",width:"0px",height:"0px",overflow:"visible",pointerEvents:"none"},children:O.jsx("div",{"data-runtime-point-marker-circle":"true",style:{position:"absolute",left:"0px",top:"0px",transform:l?`translate(-50%, -50%) scale(${nn.hover.scale})`:"translate(-50%, -50%)",borderRadius:"999px",boxSizing:"border-box",pointerEvents:e?"auto":"none",cursor:e?"pointer":"default",transition:ml(),boxShadow:l?yl():"none",filter:l?pl():"none",...i},onClick:e?p:void 0,onMouseDown:e?y:void 0,onMouseUp:e?m:void 0,onMouseEnter:e?f:void 0,onMouseLeave:e?A:void 0})})},uT=(e,n,t,o="runtime-point-marker")=>{const{setLabelOverlayElement:r,removeLabelOverlayElement:a,invalidatePositions:i,updatePositions:s}=tr(),u=g.useRef(n),l=g.useRef(new Set),d=Nr(e),c=d?i:s,m=g.useRef(new Set),y=g.useCallback(({previousStatesById:T,isCameraMoving:b})=>{const h=new Map,k=b&&(e==null?void 0:e.capabilities.occlusionPerFrame)!==!0||t.size>0;return u.current.forEach(N=>{var C;const S=N.nodeId?t.get(N.nodeId):void 0,I=jd({engine:e,coordinate:S?Jn(S):N.coordinate,shouldTestOcclusion:!k});h.set(N.id,k?{...I,isOccluded:((C=T.get(N.id))==null?void 0:C.isOccluded)??!1}:I)}),h},[e,t]),{resolveState:p,readCachedState:f,invalidate:A}=$d({engine:e,liveAnchors:t,updatePositions:c,computeStates:y,createEmptyState:iT});g.useEffect(()=>{u.current=n,A(!0),c(),e==null||e.requestRender()},[n,e,A,c]),g.useEffect(()=>{const T=new Set;n.forEach(b=>{const h=Zr(o,b.id);T.add(b.id);const k=!!(b.onClick||b.onHoverChange||b.onLongPress),N=d&&k?I=>{var C;I?m.current.add(b.id):m.current.delete(b.id),e==null||e.requestRender(),(C=b.onHoverChange)==null||C.call(b,I)}:b.onHoverChange,S={id:h,zIndex:gl.zIndex.pointMarker,contentKey:`${lT(b)}:${d}`,content:O.jsx(Wd,{interactive:k,hitAreaOnly:d,onClick:b.onClick,onHoverChange:N,onLongPress:b.onLongPress,longPressDurationMs:b.longPressDurationMs}),updatePosition:I=>{const C=p(b.id);if(!C.screenPosition||C.isHidden)return!1;let L=C.screenPosition;const R=b.nodeId?t.get(b.nodeId):void 0;if(R&&H(e)){const x=e.worldToScreen(R);x!==null&&(L={x:x.x,y:x.y})}I.style.left=`${L.x}px`,I.style.top=`${L.y}px`,I.style.transform="none";const E=I.querySelector('[data-runtime-point-marker-circle="true"]');return E?(E.style.width=`${b.pixelSize}px`,E.style.height=`${b.pixelSize}px`,d?(E.style.background="transparent",E.style.border="none",!0):(E.style.background=b.fill,E.style.border=`${b.outlineWidth}px ${C.isOccluded?"dotted":"solid"} ${b.outline}`,!0)):!1}};r(S)}),l.current.forEach(b=>{T.has(b)||(m.current.delete(b),a(Zr(o,b)))}),l.current=T,c(),e==null||e.requestRender()},[r,e,d,t,o,n,a,p,c]),g.useEffect(()=>()=>{l.current.forEach(T=>{a(Zr(o,T))}),l.current.clear()},[o,a]);const v=g.useMemo(()=>d?Zb(n,t,m.current,T=>{var b;return((b=f(T))==null?void 0:b.isOccluded)===!0}):[],[d,t,n,f]);pi(e,v)};Wd.__docgenInfo={description:"",methods:[],displayName:"PointMarkerOverlayShell",props:{interactive:{required:!0,tsType:{name:"boolean"},description:""},hitAreaOnly:{required:!1,tsType:{name:"boolean"},description:"The engine draws the marker: only the invisible hit area, without hover visuals.",defaultValue:{value:"false",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onHoverChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(hovered: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"hovered"}],return:{name:"void"}}},description:""},onLongPress:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},longPressDurationMs:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"pointMarkerVisualizerDefaults.longPressDurationMs",computed:!0}},markerStyle:{required:!1,tsType:{name:"CSSProperties"},description:""}}};const Yd=({directLabelText:e,verticalLabelText:n,horizontalLabelText:t})=>({showVerticalLabel:n!==null&&n!==e,showHorizontalLabel:t!==null&&t!==e}),ht=()=>({auxiliaryPoint:new w,auxiliaryScreen:{x:0,y:0}}),Kd=({anchorPointECEF:e,targetPointECEF:n,scratch:t})=>{const o=Go(e),r=Go(n);return!Number.isFinite(o.longitude)||!Number.isFinite(o.latitude)||!Number.isFinite(r.altitude)?null:nl(o.longitude,o.latitude,r.altitude,t.auxiliaryPoint)},_S=({firstCorner:e,oppositeCorner:n})=>{const t=z(e),o=z(n),r=iu(t,o);return r?[t,r.adjacentHorizontalCorner,o,r.adjacentVerticalCorner,t]:null},on=(e,n,t)=>{const o=n?e.get(n):void 0;return o?o.clone():z(t)},Qd=({overlay:e})=>e.anchorCoordinateRole!==Xt.END_COORDINATE,xs=(e,n)=>e.startNodeId!==void 0&&n.get(e.startNodeId)!==void 0||e.endNodeId!==void 0&&n.get(e.endNodeId)!==void 0,Mo=(e,n,t)=>{const o=e.distanceTriangleOverlay;if(!o||!e.startCoordinate||!e.endCoordinate)return null;const r=on(n,e.startNodeId,e.startCoordinate),a=on(n,e.endNodeId,e.endCoordinate),i=Qd({overlay:o}),s=i?r:a,u=i?a:r,l=Kd({anchorPointECEF:s,targetPointECEF:u,scratch:t});return l?{anchorECEF:s,auxiliaryECEF:l.clone(),targetECEF:u}:null},Xd=({engine:e,edge:n,scratch:t,previousOutsideSigns:o,formatOptions:r,liveAnchors:a})=>{const i=n.distanceTriangleOverlay;if(!i||!n.startCoordinate||!n.endCoordinate)return null;const s=on(a,n.startNodeId,n.startCoordinate),u=on(a,n.endNodeId,n.endCoordinate),l=e.worldToScreen(s),d=e.worldToScreen(u);if(l===null||d===null)return null;const c=Re(l),m=Re(d),y=Qd({overlay:i}),p=y?n.startCoordinate:n.endCoordinate,f=y?n.endCoordinate:n.startCoordinate,A=y?s:u,v=y?u:s,T=y?c:m,b=y?m:c,h=Kd({anchorPointECEF:A,targetPointECEF:v,scratch:t});if(!h)return null;const k=e.worldToScreen(h,t.auxiliaryScreen);if(k===null)return null;const N=Re(k),S=Tp({anchor:T,target:b,aux:N,anchorAltitudeMeters:p.altitude,targetAltitudeMeters:f.altitude,previousOutsideSigns:o}),I=ft(A.distanceTo(v),r.lengthMeters),C=A.distanceTo(h),L=h.distanceTo(v),R=C>Se.geometryEpsilonMeters?ft(C,r.lengthMeters):null,E=L>Se.geometryEpsilonMeters?ft(L,r.lengthMeters):null,x=Yd({directLabelText:I,verticalLabelText:R,horizontalLabelText:E});return{anchorPointECEF:A,targetPointECEF:v,auxiliaryPointECEF:h,anchorScreenPosition:T,targetScreenPosition:b,auxiliaryScreenPosition:N,directLabelText:I,verticalLabelText:R,horizontalLabelText:E,showVerticalLabel:x.showVerticalLabel,showHorizontalLabel:x.showHorizontalLabel,directOutsideReferencePoint:S.directOutsideReferencePoint,verticalOutsideReferencePoint:S.verticalOutsideReferencePoint,horizontalOutsideReferencePoint:S.horizontalOutsideReferencePoint,nextOutsideSigns:S.nextOutsideSigns}},dT=({edgeSegments:e,engine:n,formatOptions:t,liveAnchors:o,occludedLinesInScene:r,surfaceKey:a,activeEditedNodeId:i,blockEdgeInteractions:s,onEdgeClick:u,onAnnotationSelect:l})=>e.flatMap(d=>{var v;const c=i&&d.startNodeId&&d.endNodeId&&u?()=>u(d.startNodeId,d.endNodeId):void 0,m=!s&&l&&((v=d.distanceTriangleOverlay)!=null&&v.annotationId)?()=>l(d.distanceTriangleOverlay.annotationId):void 0,y=c??m,p=r&&d.overlayDashed?[]:Er({id:`${a}-runtime-edge-overlay-${d.id}`,getSvgLine:()=>{if(!H(n))return null;const T=n.worldToScreen(on(o,d.startNodeId,d.startCoordinate)),b=n.worldToScreen(on(o,d.endNodeId,d.endCoordinate));return T===null||b===null?null:{start:Re(T),end:Re(b)}},stroke:d.stroke,strokeWidth:d.strokeWidth,dashed:d.overlayDashed,dashPattern:d.overlayDashPattern,hitTargetStrokeWidth:10,onLineClick:y});if(!d.distanceTriangleOverlay||d.distanceTriangleOverlay.showComponents===!1||!H(n)||r)return p;const f=ht(),A=()=>Xd({engine:n,edge:d,scratch:f,formatOptions:t,liveAnchors:o});return[...p,...Er({id:`${a}-runtime-edge-overlay-${d.id}-vertical`,getSvgLine:()=>{const T=A();return!T||!T.verticalLabelText?null:{start:T.anchorScreenPosition,end:T.auxiliaryScreenPosition}},stroke:Se.verticalLineColor,strokeWidth:d.strokeWidth,dashed:!0,dashPattern:d.overlayDashPattern,hitTargetStrokeWidth:8,onLineClick:y}),...Er({id:`${a}-runtime-edge-overlay-${d.id}-horizontal`,getSvgLine:()=>{const T=A();return!T||!T.horizontalLabelText?null:{start:T.auxiliaryScreenPosition,end:T.targetScreenPosition}},stroke:Se.horizontalLineColor,strokeWidth:d.strokeWidth,dashed:!0,dashPattern:d.overlayDashPattern,hitTargetStrokeWidth:8,onLineClick:y})]}),cT=({edgeSegments:e,engine:n,formatOptions:t,liveAnchors:o,occludedLinesInScene:r})=>e.flatMap(a=>{const i={id:a.id,start:z(a.startCoordinate),end:z(a.endCoordinate),stroke:a.stroke,strokeWidth:a.strokeWidth,occludedDashed:r&&a.overlayDashed===!0,ruler:a.ruler===!0,rulerStartMeters:a.rulerStartMeters,startNodeId:a.startNodeId,endNodeId:a.endNodeId};if(!H(n)||!a.distanceTriangleOverlay||a.distanceTriangleOverlay.showComponents===!1)return[i];const s=ht(),u=Mo(a,o,s);if(!u)return[i];const l=f=>f>Se.geometryEpsilonMeters?ft(f,t.lengthMeters):null,d=l(u.anchorECEF.distanceTo(u.auxiliaryECEF)),c=l(u.auxiliaryECEF.distanceTo(u.targetECEF)),m=Yd({directLabelText:ft(u.anchorECEF.distanceTo(u.targetECEF),t.lengthMeters),verticalLabelText:d,horizontalLabelText:c}),y={anchorPointECEF:u.anchorECEF,auxiliaryPointECEF:u.auxiliaryECEF,targetPointECEF:u.targetECEF,verticalLabelText:d,horizontalLabelText:c,showVerticalLabel:m.showVerticalLabel,showHorizontalLabel:m.showHorizontalLabel},p=[];if(y.showVerticalLabel&&y.verticalLabelText){const f=ht();p.push({id:`${a.id}-vertical`,halo:!0,start:y.anchorPointECEF,end:y.auxiliaryPointECEF,stroke:Se.verticalLineColor,strokeWidth:a.strokeWidth,occludedDashed:r,ruler:!1,recompute:A=>{if(!xs(a,A))return null;const v=Mo(a,A,f);return v?[v.anchorECEF,v.auxiliaryECEF]:null}})}if(y.showHorizontalLabel&&y.horizontalLabelText){const f=ht();p.push({id:`${a.id}-horizontal`,halo:!0,start:y.auxiliaryPointECEF,end:y.targetPointECEF,stroke:Se.horizontalLineColor,strokeWidth:a.strokeWidth,occludedDashed:r,ruler:!1,recompute:A=>{if(!xs(a,A))return null;const v=Mo(a,A,f);return v?[v.auxiliaryECEF,v.targetECEF]:null}})}return[i,...p]}),qs=e=>{var n;return((n=e.distanceTriangleOverlay)==null?void 0:n.annotationId)??e.id},mT=e=>e.flatMap(n=>{var i,s;const t=[],o=Number.isFinite(n.strokeWidth)?n.strokeWidth:ee.sizes.edgeStrokeWidth,r=n.overlayDashPattern??ee.patterns.edgeDashPattern;let a=0;for(let u=0;u<n.coordinates.length-1;u+=1){const l=n.coordinates[u],d=n.coordinates[u+1];if(!l||!d)continue;const c=a;a+=z(l).distanceTo(z(d));const m=(i=n.nodeIds)==null?void 0:i[u],y=((s=n.nodeIds)==null?void 0:s[u+1])??(n.nodeIds&&n.coordinates.length===n.nodeIds.length+1&&u===n.nodeIds.length-1?n.nodeIds[0]:void 0);t.push({id:`${n.id}-${u}`,annotationId:n.annotationId,startNodeId:m,endNodeId:y,startCoordinate:l,endCoordinate:d,stroke:n.stroke,strokeWidth:o,overlayDashPattern:r,...n.overlayDashed?{overlayDashed:!0}:{},...n.ruler?{ruler:!0,rulerStartMeters:c}:{},...n.showSegmentLengthLabels?{showSegmentLengthLabels:!0}:{},distanceTriangleOverlay:u===0?n.distanceTriangleOverlay:void 0})}return t}),De=Object.freeze({pointLabelCollisionSelector:'[data-pillbutton-root="true"], [data-point-label-content-root="true"]',svgNamespace:"http://www.w3.org/2000/svg",distanceTriangle:Object.freeze({cornerDotRadiusPx:1.25/2}),midpointMarker:Object.freeze({...Am({markerDiameterPx:ee.sizes.pointPixelSize,markerStrokeWidthPx:ee.sizes.pointOutlineWidth}),tickColor:nn.colors.surfaceStrong,minOverlayZIndex:gl.zIndex.interactionHandleFloor})}),ye=Object.freeze({cornerOverlay:Object.freeze({minBoxPx:20,paddingPx:6,targetRadiusPx:20,segments:20,strokeWidthPx:1.25,color:hp(),straightHitTargetPx:20,fallbackFovRad:ol})}),Ra=e=>`annotation-overlay-distance-triangle-label-layer-${e}`,yT=[],pT=Qb(De.midpointMarker),gT=(e,n,t)=>e.map(o=>{const r=z(o.startCoordinate),a=z(o.endCoordinate),i=new w,s=new w;return{id:`${o.id}-insert-tick`,...pT,place:()=>{const u=o.startNodeId&&n.get(o.startNodeId)||r,l=o.endNodeId&&n.get(o.endNodeId)||a;return{positionECEF:i.addVectors(u,l).multiplyScalar(.5),acrossECEF:s.subVectors(l,u),hovered:t.has(o.id)}}}}),fT=({anchorECEF:e,auxiliaryECEF:n,targetECEF:t},o)=>{const r=vt.referenceLineEpsilonMeters;if(e.distanceTo(n)<=r||n.distanceTo(t)<=r)return e.distanceTo(t)<=r?null:{arc:null,dot:new w().addVectors(e,t).multiplyScalar(.5)};if(!(o>0))return null;const{targetRadiusPx:a,segments:i}=ye.cornerOverlay,s=Ll(n,e,t,a/o,i),u=s==null?void 0:s[Math.floor(s.length/2)];return!s||s.length<2||!u?null:{arc:s,dot:new w().addVectors(n,u).multiplyScalar(.5)}},AT=(e,n,t)=>{const{color:o,strokeWidthPx:r}=ye.cornerOverlay,a=Xb(2*De.distanceTriangle.cornerDotRadiusPx,o),i=n.filter(s=>s.distanceTriangleOverlay!==void 0&&s.distanceTriangleOverlay.showComponents!==!1).map(s=>{const u=ht();let l=null,d=null;return{edge:s,resolve:()=>{const m=e.getFrameKey();if(m===null||m!==l){l=m;const y=Mo(s,t,u);d=y?fT(y,e.getScreenPixelsPerMeterAt(y.auxiliaryECEF)):null}return d}}});return{lines:i.map(({edge:s,resolve:u})=>{const l=z(s.startCoordinate);return{id:`${s.id}-corner-arc`,start:l,end:l,stroke:o,strokeWidth:r,occludedDashed:!0,ruler:!1,halo:!0,followsView:!0,recompute:()=>{var d;return((d=u())==null?void 0:d.arc)??yT}}}),markers:i.map(({edge:s,resolve:u})=>({id:`${s.id}-corner-dot`,style:a,place:()=>{var d;const l=(d=u())==null?void 0:d.dot;return l?{positionECEF:l}:null}}))}},Zd=(e,n,t)=>[e.startNodeId,e.endNodeId].filter(r=>r!==void 0).some(r=>r===n||t(r)),Jd=e=>[e.id,e.start.x,e.start.y,e.start.z,e.end.x,e.end.y,e.end.z,e.stroke,e.strokeWidth,e.occludedDashed,e.ruler,e.rulerStartMeters??0,e.halo!==!1,e.segmentPairs===!0].join(":"),vT=e=>({snappable:e.createLineCollection(),excludedFromDragSamples:e.createLineCollection({excludeFromDragSamples:!0})}),bT=e=>{e.snappable.destroy(),e.excludedFromDragSamples.destroy()},TT=(e,n)=>n?e.excludedFromDragSamples:e.snappable,ec=(e,n,t,o)=>{const r=TT(n,o).addLine({id:t.id,positions:[t.start,t.end],segmentPairs:t.segmentPairs,color:t.stroke,width:t.strokeWidth,occludedDashed:t.occludedDashed,ruler:t.ruler,rulerStartMeters:t.rulerStartMeters,halo:t.halo!==!1,visible:!0}),a=()=>{if(H(e))try{r.destroy()}catch(i){console.warn("[annotations/runtime] Ignoring committed edge destroy error.",i)}};return{signature:Jd(t),line:t,sceneLine:r,excludedFromDragSamples:o,startNodeId:t.startNodeId,endNodeId:t.endNodeId,baseStart:t.start,baseEnd:t.end,recompute:t.recompute,overridden:!1,destroy:a}},Jr=e=>{e.forEach(n=>{n.destroy()}),e.clear()},kT=(e,n)=>{const t=n.size>0;e.forEach(o=>{const r=t||o.line.followsView===!0;let a=null;if(o.recompute)a=r?o.recompute(n):null;else{const i=o.startNodeId?n.get(o.startNodeId):void 0,s=o.endNodeId?n.get(o.endNodeId):void 0;(i!==void 0||s!==void 0)&&(a=[i??o.baseStart,s??o.baseEnd])}a===null&&!o.overridden||(o.sceneLine.setPositions(a??[o.baseStart,o.baseEnd]),o.overridden=a!==null&&r)})},NT=(e,n,t,o,r)=>{t.forEach((a,i)=>{const s=Zd(a,o,l=>r.get(l)!==void 0);if(s===a.excludedFromDragSamples)return;a.destroy();const u=ec(e,n,a.line,s);u.overridden=!1,t.set(i,u)})},nc=(e,n,t,o)=>{const r=g.useRef(null),a=g.useRef(new Map);g.useEffect(()=>{if(!H(e))return;const s=vT(e);return r.current=s,()=>{Jr(a.current),r.current===s&&(r.current=null),H(e)&&bT(s)}},[e]);const i=g.useRef(t);i.current=t,g.useEffect(()=>{const s=r.current;if(!H(e)||!s){Jr(a.current);return}return(l=>{const d=new Set(l.map(c=>c.id));a.current.forEach((c,m)=>{d.has(m)||(c.destroy(),a.current.delete(m))}),l.forEach(c=>{const m=Jd(c),y=a.current.get(c.id);if((y==null?void 0:y.signature)===m){y.line=c,y.recompute=c.recompute;return}y==null||y.destroy(),a.current.set(c.id,ec(e,s,c,Zd(c,i.current,p=>o.get(p)!==void 0)))}),e.requestRender()})(n),()=>{Jr(a.current),H(e)&&e.requestRender()}},[e,o,n]),g.useEffect(()=>{if(!H(e))return;const s=()=>{const l=r.current;l&&NT(e,l,a.current,t,o)};s();const u=e.subscribePreRender(()=>{try{s(),kT(a.current,o)}catch{}});return()=>{u()}},[t,e,o])},IT=[],hT=(e,{edgeSegments:n,insertTickSegments:t,showInsertTicks:o,liveAnchors:r})=>{const a=Nr(e),i=g.useRef(new Set),s=o?t:IT;g.useEffect(()=>{i.current.clear()},[s]);const u=g.useCallback((d,c)=>{c?i.current.add(d):i.current.delete(d),e==null||e.requestRender()},[e]),l=g.useMemo(()=>{if(!a)return{lines:[],markers:[]};const d=AT(e,n,r);return{lines:d.lines,markers:[...gT(s,r,i.current),...d.markers]}},[n,e,a,r,s]);return nc(a?e:null,l.lines,null,r),pi(e,l.markers),{handlesInScene:a,onInsertTickHoverChange:a?u:void 0}},ST="translate(0px, 0px) translate(-50%, -50%) rotate(0rad)",gi=new WeakMap,zt=new WeakMap,CT=/(?:^|\s)(?:display|left|top|transform):[^;]*;/g,fi=e=>{var o;const n=e.ownerDocument;zt.has(n)||(zt.set(n,0),(o=n.fonts)==null||o.addEventListener("loadingdone",()=>{zt.set(n,(zt.get(n)??0)+1)}));const t=n.defaultView;return`${zt.get(n)}|${t==null?void 0:t.innerWidth}:${t==null?void 0:t.innerHeight}|${e.className}|${e.style.cssText.replace(CT,"")}|${e.innerHTML}`},ET=Object.freeze({x:0,y:0}),OT=e=>{var t;const n=(t=e.parentElement)==null?void 0:t.getBoundingClientRect();return n?{x:n.left,y:n.top}:ET},tc=(e,n)=>{si(e,n),e.style.display="block",e.style.transform=ST},oc=(e,n)=>{const{width:t,height:o}=e.getBoundingClientRect();if(!(t>0&&o>0))return null;const r={text:n,width:t,height:o,layoutKey:fi(e)};return gi.set(e,r),r},LT=(e,n)=>{const t=gi.get(e);return(t==null?void 0:t.text)===n&&t.layoutKey===fi(e)?t:(tc(e,n),oc(e,n))},RT=e=>{const n=e.filter(({element:t,text:o})=>{const r=gi.get(t);return(r==null?void 0:r.text)!==o||r.layoutKey!==fi(t)});n.forEach(({element:t,text:o})=>tc(t,o)),n.forEach(({element:t,text:o})=>oc(t,o))},wT=({x:e,y:n,angleRad:t,anchor:o},{width:r,height:a},i)=>{const s=i.x+Math.round(e)+(o==="left"?r/2:o==="right"?-r/2:0),u=i.y+Math.round(n),l=Math.abs(Math.cos(t)),d=Math.abs(Math.sin(t)),c=(r*l+a*d)/2,m=(r*d+a*l)/2;return{left:s-c,top:u-m,right:s+c,bottom:u+m}},Ve=Object.freeze({anchorRatio:.5,anchorRatioEpsilon:1e-6,minAnchorSlideStepRatio:.01}),xT=e=>{const n=Number.parseFloat(e.dataset.annotationOverlayLineLabelAnchorRatio??"");return Number.isFinite(n)?Da(n):Ve.anchorRatio},qT=({element:e,collisionResolutionStrategy:n,stepRatio:t,maxDeltaRatio:o})=>{const r=Math.min(Ve.anchorRatio,Da(o)),a=Ve.anchorRatio-r,i=Ve.anchorRatio+r,s=Be(xT(e),a,i),u=new Set([s,Ve.anchorRatio]);if(n!==sd.MOVE_ON_LINE)return{lastResolvedAnchorRatio:s,anchorRatios:[...u]};const l=Math.max(t,Ve.minAnchorSlideStepRatio);for(let d=l;d<=r+Ve.anchorRatioEpsilon;d+=l)u.add(Math.max(a,Ve.anchorRatio-d)),u.add(Math.min(i,Ve.anchorRatio+d));return{lastResolvedAnchorRatio:s,anchorRatios:[...u].sort((d,c)=>{const m=Math.abs(d-s),y=Math.abs(c-s);return m!==y?m-y:Math.abs(d-Ve.anchorRatio)-Math.abs(c-Ve.anchorRatio)})}},_T=(e,n,t)=>yd({element:e.element,start:e.start,end:e.end,outsideReferencePoint:e.outsideReferencePoint,anchorRatio:n,previousShouldFlip:t}),PT=(e,n,t,o)=>({anchorRatio:e,collisionRect:n,collisionCount:t.reduce((r,a)=>Pm(n,a,Mm)?r+1:r,0),lastSolutionJumpPenalty:Math.abs(e-o),originalOffsetPenalty:Math.abs(e-Ve.anchorRatio)}),MT=(e,n)=>n?e.collisionCount!==n.collisionCount?e.collisionCount<n.collisionCount:e.collisionCount===0?e.originalOffsetPenalty!==n.originalOffsetPenalty?e.originalOffsetPenalty<n.originalOffsetPenalty:e.lastSolutionJumpPenalty<n.lastSolutionJumpPenalty:e.lastSolutionJumpPenalty!==n.lastSolutionJumpPenalty?e.lastSolutionJumpPenalty<n.lastSolutionJumpPenalty:e.originalOffsetPenalty<n.originalOffsetPenalty:!0,rc=({candidate:e,occupiedLabelRects:n,allowEarlyRemoval:t,collisionResolutionStrategy:o,anchorSlideStepRatio:r,maxAnchorSlideDeltaRatio:a,layerOrigin:i})=>{const{element:s,text:u}=e;let l=null;const{lastResolvedAnchorRatio:d,anchorRatios:c}=qT({element:s,collisionResolutionStrategy:o,stepRatio:r,maxDeltaRatio:a}),m=LT(s,u),y=i??OT(s);let p=s.dataset.annotationOverlayLineLabelNormalFlip==="1",f=null;for(const A of c){const v=_T(e,A,p);if(!v||(f=v,p=v.shouldFlip,!m))continue;const T=PT(A,wT(v,m,y),n,d);MT(T,l)&&(l=T)}return f&&(pd(s,u,f),s.style.transform=cd(f)),l&&(l.collisionCount===0||!t)?(Gv({element:s,text:u,start:e.start,end:e.end,outsideReferencePoint:e.outsideReferencePoint,anchorRatio:l.anchorRatio}),{visible:!0,anchorRatio:l.anchorRatio,collisionCount:l.collisionCount,collisionRect:l.collisionRect}):(s.style.display="none",{visible:!1,anchorRatio:(l==null?void 0:l.anchorRatio)??null,collisionCount:(l==null?void 0:l.collisionCount)??0,collisionRect:null})},ac=(e,n)=>n.zIndex-e.zIndex,DT=(e,n)=>e.metricValueMeters!==n.metricValueMeters?n.metricValueMeters-e.metricValueMeters:ac(e,n),BT=e=>{const n=new Map;return e.forEach(t=>{const o=n.get(t.annotationId);o?o.push(t):n.set(t.annotationId,[t])}),n},FT=({candidates:e,occupiedLabelRects:n,...t})=>{const o=[],r=[...n];return[...e].sort(DT).forEach(a=>{const i=rc({...t,candidate:a,occupiedLabelRects:r,allowEarlyRemoval:!0});i.visible&&i.collisionRect&&(r.push(i.collisionRect),o.push(a))}),o},GT=({candidates:e,occupiedLabelRects:n,allowEarlyRemoval:t,...o})=>{RT(e),[...BT(e).values()].flatMap(a=>FT({...o,candidates:a,occupiedLabelRects:n})).sort(ac).forEach(a=>{const i=rc({...o,candidate:a,occupiedLabelRects:n,allowEarlyRemoval:t});i.visible&&i.collisionRect&&n.push(i.collisionRect)})},jT=new w,HT=(e,{hitAreaOnly:n=!1}={})=>{const t=document.createElement("div");t.style.position="absolute",t.style.display="none",t.style.pointerEvents="none",t.style.userSelect="none",t.style.webkitUserSelect="none",t.style.cursor="default",t.style.zIndex="0";const o=document.createElementNS(De.svgNamespace,"svg");o.setAttribute("width","100%"),o.setAttribute("height","100%"),o.style.overflow="visible",o.style.pointerEvents="none",n&&(o.style.visibility="hidden");const r=document.createElementNS(De.svgNamespace,"path");r.setAttribute("fill","none"),r.setAttribute("stroke",ye.cornerOverlay.color),r.setAttribute("stroke-width",`${ye.cornerOverlay.strokeWidthPx}`),r.setAttribute("stroke-linecap","round"),r.setAttribute("stroke-linejoin","round");const a=document.createElementNS(De.svgNamespace,"circle");return a.setAttribute("r",`${De.distanceTriangle.cornerDotRadiusPx}`),a.setAttribute("fill",ye.cornerOverlay.color),o.append(r,a),t.appendChild(o),e.appendChild(t),{root:t,svg:o,path:r,dot:a}},ic=e=>{e.root.remove()},_s=e=>{e.forEach(n=>{ic(n)}),e.clear()},Vn=e=>{e.root.style.display="none",e.root.onclick=null},zT=({handle:e,pathData:n,dotScreen:t,minX:o,minY:r,width:a,height:i,clickable:s,onClick:u})=>{e.path.setAttribute("d",n),e.path.style.display="block",e.svg.style.display="block",e.dot.setAttribute("cx",`${t.x-o+ye.cornerOverlay.paddingPx}`),e.dot.setAttribute("cy",`${t.y-r+ye.cornerOverlay.paddingPx}`),e.root.style.left=`${o-ye.cornerOverlay.paddingPx}px`,e.root.style.top=`${r-ye.cornerOverlay.paddingPx}px`,e.root.style.width=`${a}px`,e.root.style.height=`${i}px`,e.root.style.transform="none",e.root.style.display="block",e.root.style.pointerEvents=s?"auto":"none",e.root.style.cursor=s?"pointer":"default",e.root.onclick=s&&u?u:null},VT=({handle:e,center:n,clickable:t,onClick:o})=>{const r=ye.cornerOverlay.straightHitTargetPx,a=r/2;e.path.style.display="none",e.svg.style.display="block",e.dot.setAttribute("cx",`${a}`),e.dot.setAttribute("cy",`${a}`),e.root.style.left=`${n.x-a}px`,e.root.style.top=`${n.y-a}px`,e.root.style.width=`${r}px`,e.root.style.height=`${r}px`,e.root.style.transform="none",e.root.style.display="block",e.root.style.pointerEvents=t?"auto":"none",e.root.style.cursor=t?"pointer":"default",e.root.onclick=t&&o?o:null},UT=({engine:e,cornerHandle:n,screenData:t,lengths:{directLengthMeters:o,verticalLengthMeters:r,horizontalLengthMeters:a},clickable:i,onClick:s})=>{if(r<=vt.referenceLineEpsilonMeters||a<=vt.referenceLineEpsilonMeters){if(o<=vt.referenceLineEpsilonMeters){Vn(n);return}const S=Re({x:(t.anchorScreenPosition.x+t.targetScreenPosition.x)/2,y:(t.anchorScreenPosition.y+t.targetScreenPosition.y)/2});VT({handle:n,center:S,clickable:i,onClick:s});return}const u=e.canvas.clientWidth,l=e.canvas.clientHeight;if(u<=0||l<=0){Vn(n);return}let d=Number.NaN;try{const S=e.getScreenPixelsPerMeterAt(t.auxiliaryPointECEF);d=Number.isFinite(S)&&S>0?1/S:Number.NaN}catch{d=Number.NaN}if(!Number.isFinite(d)||d<=0){const S=e.getCameraPositionECEF(jT),I=Math.max(S?S.distanceTo(t.auxiliaryPointECEF):Number.NaN,1),C=ye.cornerOverlay.fallbackFovRad;d=Math.max(I*Math.tan(C/2)*2/Math.max(l,1),1e-6)}const c=Ll(t.auxiliaryPointECEF,t.anchorPointECEF,t.targetPointECEF,ye.cornerOverlay.targetRadiusPx*d,ye.cornerOverlay.segments);if(!c||c.length<2){Vn(n);return}const m=c[Math.floor(c.length/2)];if(!m){Vn(n);return}const y=new w().addVectors(t.auxiliaryPointECEF,m).multiplyScalar(.5),p=e.worldToScreen(y);if(p===null){Vn(n);return}const f=c.map(S=>e.worldToScreen(S)).filter(S=>S!==null);if(f.length<2){Vn(n);return}const A=Math.min(...f.map(S=>S.x)),v=Math.max(...f.map(S=>S.x)),T=Math.min(...f.map(S=>S.y)),b=Math.max(...f.map(S=>S.y)),h=Math.max(ye.cornerOverlay.minBoxPx,v-A+ye.cornerOverlay.paddingPx*2),k=Math.max(ye.cornerOverlay.minBoxPx,b-T+ye.cornerOverlay.paddingPx*2),N=f.map((S,I)=>{const C=S.x-A+ye.cornerOverlay.paddingPx,L=S.y-T+ye.cornerOverlay.paddingPx;return`${I===0?"M":"L"} ${C} ${L}`}).join(" ");zT({handle:n,pathData:N,dotScreen:Re(p),minX:A,minY:T,width:h,height:k,clickable:i,onClick:s})},$T=new w,wa=(e,n)=>{const t=e.getCameraPositionECEF($T);return _d(t?t.distanceTo(n):Number.NaN)},Zt=(e,n,t)=>Math.round((wa(e,n)+wa(e,t))/2),WT=e=>({left:e.left,top:e.top,right:e.right,bottom:e.bottom}),YT=e=>{const n=hu(e);return n?Array.from(n.querySelectorAll(De.pointLabelCollisionSelector)).map(t=>WT(t.getBoundingClientRect())).filter(t=>t.right>t.left&&t.bottom>t.top):[]},KT=(e,n)=>{const t=Fv(n);return e.append(t.direct,t.vertical,t.horizontal),{lineLabels:t,scratch:ht()}},QT=(e,n)=>{const t=li(ee.colors.componentLabelAccents.direct,n);return e.appendChild(t),{element:t}},sc=e=>{md(e.lineLabels),e.lineLabels.direct.remove(),e.lineLabels.vertical.remove(),e.lineLabels.horizontal.remove()},lc=e=>{e.element.style.display="none",e.element.remove()},Ps=e=>{e.forEach(n=>{sc(n)}),e.clear()},Ms=e=>{e.forEach(n=>{lc(n)}),e.clear()},XT=({engine:e,edge:n,labelHandle:t,formatOptions:o,liveAnchors:r,candidates:a})=>{const i=on(r,n.startNodeId,n.startCoordinate),s=on(r,n.endNodeId,n.endCoordinate),u=e.worldToScreen(i),l=e.worldToScreen(s),d=i.distanceTo(s);if(u===null||l===null||d<=vt.referenceLineEpsilonMeters){t.element.style.display="none";return}const c=Zt(e,i,s);t.element.style.zIndex=`${c}`,a.push({element:t.element,zIndex:c,annotationId:n.annotationId??n.id,metricValueMeters:d,text:ft(d,o.lengthMeters),start:Re(u),end:Re(l)})},ZT=({engine:e,edge:n,labelHandle:t,cornerHandle:o,formatOptions:r,liveAnchors:a,candidates:i,cornerClickable:s,onCornerClick:u})=>{var b;const l=Xd({engine:e,edge:n,scratch:t.scratch,previousOutsideSigns:t.previousOutsideSigns,formatOptions:r,liveAnchors:a});if(!l){md(t.lineLabels),o&&Vn(o),t.previousOutsideSigns=void 0;return}t.previousOutsideSigns=l.nextOutsideSigns;const d=Zt(e,l.anchorPointECEF,l.targetPointECEF),c=Zt(e,l.anchorPointECEF,l.auxiliaryPointECEF),m=Zt(e,l.auxiliaryPointECEF,l.targetPointECEF),y=wa(e,l.auxiliaryPointECEF),p=qs(n),f=l.anchorPointECEF.distanceTo(l.targetPointECEF),A=l.anchorPointECEF.distanceTo(l.auxiliaryPointECEF),v=l.auxiliaryPointECEF.distanceTo(l.targetPointECEF);t.lineLabels.direct.style.zIndex=`${d}`,i.push({element:t.lineLabels.direct,zIndex:d,annotationId:p,metricValueMeters:f,text:l.directLabelText,start:l.anchorScreenPosition,end:l.targetScreenPosition,outsideReferencePoint:l.directOutsideReferencePoint});const T=((b=n.distanceTriangleOverlay)==null?void 0:b.showComponents)!==!1;T&&l.showVerticalLabel&&l.verticalLabelText?(t.lineLabels.vertical.style.zIndex=`${c}`,i.push({element:t.lineLabels.vertical,zIndex:c,annotationId:p,metricValueMeters:A,text:l.verticalLabelText,start:l.anchorScreenPosition,end:l.auxiliaryScreenPosition,outsideReferencePoint:l.verticalOutsideReferencePoint})):t.lineLabels.vertical.style.display="none",T&&l.showHorizontalLabel&&l.horizontalLabelText?(t.lineLabels.horizontal.style.zIndex=`${m}`,i.push({element:t.lineLabels.horizontal,zIndex:m,annotationId:p,metricValueMeters:v,text:l.horizontalLabelText,start:l.auxiliaryScreenPosition,end:l.targetScreenPosition,outsideReferencePoint:l.horizontalOutsideReferencePoint})):t.lineLabels.horizontal.style.display="none",!(!o||!T)&&(o.root.style.zIndex=`${y}`,UT({engine:e,cornerHandle:o,screenData:l,lengths:{directLengthMeters:f,verticalLengthMeters:A,horizontalLengthMeters:v},clickable:s,onClick:u?()=>u(qs(n)):void 0}))},JT=(e,{edgeSegments:n,formatOptions:t,lineLabelOptions:o,surfaceKey:r,activeEditedNodeId:a,blockEdgeInteractions:i,liveAnchors:s,onDistanceTriangleCornerClick:u,cornerHitAreaOnly:l=!1})=>{const d=g.useRef(new Map),c=g.useRef(new Map),m=g.useRef(new Map);g.useEffect(()=>{if(Ps(d.current),Ms(c.current),_s(m.current),!H(e))return;const y=n.filter(k=>k.distanceTriangleOverlay!==void 0),p=n.filter(k=>k.showSegmentLengthLabels===!0);if(y.length===0&&p.length===0)return;const{[Te.LABEL]:f,[Te.VISUALIZER]:A}=gd(e,{[Te.LABEL]:Ra(r),[Te.VISUALIZER]:`${Ra(r)}-visualizer`});if(!f||!A)return;const v=()=>{const k=new Set([...y.map(N=>N.id),...p.map(N=>N.id)]);d.current.forEach((N,S)=>{if(k.has(S))return;sc(N),d.current.delete(S);const I=m.current.get(S);I&&(ic(I),m.current.delete(S))}),y.forEach(N=>{var S;d.current.has(N.id)||(d.current.set(N.id,KT(f,o)),((S=N.distanceTriangleOverlay)==null?void 0:S.showComponents)!==!1&&m.current.set(N.id,HT(A,{hitAreaOnly:l})))}),c.current.forEach((N,S)=>{k.has(S)||(lc(N),c.current.delete(S))}),p.forEach(N=>{c.current.has(N.id)||c.current.set(N.id,QT(f,o))})};let T=null;const b=({force:k=!1}={})=>{const N=Fd(e);if(!k&&s.size===0&&Gd(T,N))return;T=N;const S=YT(e),I=f.getBoundingClientRect(),C=[],L=!i&&a===null&&!!u;y.forEach(R=>{const E=d.current.get(R.id);E&&ZT({engine:e,edge:R,labelHandle:E,cornerHandle:m.current.get(R.id),formatOptions:t,liveAnchors:s,candidates:C,cornerClickable:L,onCornerClick:u})}),p.forEach(R=>{const E=c.current.get(R.id);E&&XT({engine:e,edge:R,labelHandle:E,formatOptions:t,liveAnchors:s,candidates:C})}),GT({candidates:C,occupiedLabelRects:S,allowEarlyRemoval:o.collision.allowEarlyRemoval,collisionResolutionStrategy:o.collision.resolutionStrategy,anchorSlideStepRatio:o.collision.anchorSlideStepRatio,maxAnchorSlideDeltaRatio:o.collision.maxAnchorSlideDeltaRatio,layerOrigin:{x:I.left,y:I.top}})};v(),b({force:!0});const h=e.subscribePostRender(()=>{b()});return e.requestRender(),()=>{h(),Ps(d.current),Ms(c.current),_s(m.current),qt(f),qt(A),H(e)&&e.requestRender()}},[a,i,l,n,c,e,t,s,u,o,r])},ek=(e,{hitAreaOnly:n=!1}={})=>{const t=document.createElement("div");t.style.position="absolute",t.style.display="none",t.style.pointerEvents="none",t.style.userSelect="none",t.style.webkitUserSelect="none",t.style.cursor="default";const o=document.createElement("div");return o.style.position="absolute",o.style.left="50%",o.style.top="50%",o.style.width=`${De.midpointMarker.tickLengthPx}px`,o.style.height=`${De.midpointMarker.tickWidthPx}px`,o.style.borderRadius="999px",o.style.background=De.midpointMarker.tickColor,o.style.transform="translate(-50%, -50%)",o.style.pointerEvents="none",o.style.transition=ml(),n&&(o.style.visibility="hidden"),t.appendChild(o),e.appendChild(t),{root:t,tick:o}},nk=e=>{e.root.remove()},Ds=e=>{e.forEach(n=>{nk(n)}),e.clear()},tk=e=>{e.root.style.display="none",e.root.onclick=null,e.root.onmouseenter=null,e.root.onmouseleave=null,e.tick.style.transform="translate(-50%, -50%)",e.tick.style.boxShadow="none",e.tick.style.filter="none"},ea=(e,n)=>{e.tick.style.transform=n?`translate(-50%, -50%) scale(${nn.hover.scale})`:"translate(-50%, -50%)",e.tick.style.boxShadow=n?yl():"none",e.tick.style.filter=n?pl():"none"},ok=({handle:e,center:n,angleRad:t,zIndex:o,clickable:r,onClick:a,onHoverChange:i})=>{e.root.style.left=`${n.x}px`,e.root.style.top=`${n.y}px`,e.root.style.width=`${De.midpointMarker.hitTargetPx}px`,e.root.style.height=`${De.midpointMarker.hitTargetPx}px`,e.root.style.transform=`translate(-50%, -50%) rotate(${t}rad)`,e.root.style.transformOrigin="50% 50%",e.root.style.zIndex=`${Math.max(o,De.midpointMarker.minOverlayZIndex)}`,e.root.style.display="block",e.root.style.pointerEvents=r?"auto":"none",e.root.style.cursor=r?"pointer":"default",e.root.onclick=r&&a?a:null,e.root.onmouseenter=r?()=>{ea(e,!0),i==null||i(!0)}:null,e.root.onmouseleave=r?()=>{ea(e,!1),i==null||i(!1)}:null,ea(e,!1)},rk=(e,{insertNodeTargetSegments:n,surfaceKey:t,activeEditedNodeId:o,blockEdgeInteractions:r,liveAnchors:a,onInsertNodeTargetClick:i,hitAreaOnly:s=!1,onHoverChange:u})=>{const l=g.useRef(new Map);g.useEffect(()=>{if(Ds(l.current),!H(e)||r||o!==null||n.length===0)return;const d=gd(e,{[Te.VISUALIZER]:`${Ra(t)}-midpoint-targets`})[Te.VISUALIZER];if(!d)return;n.forEach(y=>{l.current.set(y.id,ek(d,{hitAreaOnly:s}))});const c=()=>{n.forEach(y=>{const p=l.current.get(y.id);if(!p)return;const f=on(a,y.startNodeId,y.startCoordinate),A=on(a,y.endNodeId,y.endCoordinate),v=e.worldToScreen(f),T=e.worldToScreen(A),b=e.worldToScreen(new w().addVectors(f,A).multiplyScalar(.5));if(v===null||T===null||b===null||!y.annotationId||!y.startNodeId||!y.endNodeId){tk(p);return}ok({handle:p,center:Re(b),angleRad:Math.atan2(T.y-v.y,T.x-v.x)+xc,zIndex:Zt(e,f,A),clickable:!!i,onClick:i?()=>i(y.annotationId,y.startNodeId,y.endNodeId):void 0,onHoverChange:u?h=>u(y.id,h):void 0})})};c();const m=e.subscribePostRender(()=>{c()});return e.requestRender(),()=>{m(),Ds(l.current),qt(d),H(e)&&e.requestRender()}},[o,r,e,s,n,a,u,i,t])},ak=(e,{edges:n,formatOptions:t,lineLabelOptions:o,surfaceKey:r="committed",activeEditedNodeId:a,blockEdgeInteractions:i,onAnnotationSelect:s,onEdgeClick:u,insertNodeTargetAnnotationIds:l=[],onInsertNodeTargetClick:d,onDistanceTriangleCornerClick:c,liveAnchors:m})=>{const y=g.useMemo(()=>vr(o),[o]),p=g.useMemo(()=>new Set(l),[l]),f=g.useMemo(()=>mT(n),[n]),A=g.useMemo(()=>f.filter(N=>N.annotationId!==void 0&&p.has(N.annotationId)&&N.startNodeId!==void 0&&N.endNodeId!==void 0),[f,p]),v=(e==null?void 0:e.capabilities.occludedLinesInScene)===!0,T=g.useMemo(()=>cT({edgeSegments:f,engine:e,formatOptions:t,liveAnchors:m,occludedLinesInScene:v}),[f,e,t,m,v]),b=g.useMemo(()=>dT({edgeSegments:f,engine:e,formatOptions:t,liveAnchors:m,occludedLinesInScene:v,surfaceKey:r,activeEditedNodeId:a,blockEdgeInteractions:i,onEdgeClick:u,onAnnotationSelect:s}),[a,i,f,e,t,m,v,u,s,r]);Dm([...b],b.length>0),nc(e,T,a,m);const{handlesInScene:h,onInsertTickHoverChange:k}=hT(e,{edgeSegments:f,insertTickSegments:A,showInsertTicks:!i&&a===null,liveAnchors:m});rk(e,{insertNodeTargetSegments:A,surfaceKey:r,activeEditedNodeId:a,blockEdgeInteractions:i,liveAnchors:m,onInsertNodeTargetClick:d,hitAreaOnly:h,onHoverChange:k}),JT(e,{edgeSegments:f,formatOptions:t,lineLabelOptions:y,surfaceKey:r,activeEditedNodeId:a,blockEdgeInteractions:i,liveAnchors:m,onDistanceTriangleCornerClick:c,cornerHitAreaOnly:h})},ik=e=>e.flatMap(n=>{const t=n.placement??Kn.COPLANAR;return t!==Kn.COPLANAR||!n.overlayFill||n.coordinates.length<3?[]:[{...n,overlayFill:n.overlayFill,placement:t}]}),sk=(e,n)=>e.length===n.length&&e.every((t,o)=>{const r=n[o];return r!==void 0&&t.id===r.id&&t.annotationId===r.annotationId&&t.overlayFill===r.overlayFill&&t.selected===r.selected&&ai(t.coordinates,r.coordinates)}),lk=()=>{const e=document.createElementNS("http://www.w3.org/2000/svg","polygon");return e.style.pointerEvents="none",e},uk=(e,n)=>{if(!H(e))return{setPolygonFills:()=>{},clear:()=>{},destroy:()=>{}};const t=Tr(e,`annotation-overlay-runtime-polygon-fill-layer-${n}`,Te.VISUALIZER);if(!t)return{setPolygonFills:()=>{},clear:()=>{},destroy:()=>{}};const o=document.createElementNS("http://www.w3.org/2000/svg","svg");o.setAttribute("width","100%"),o.setAttribute("height","100%"),o.style.position="absolute",o.style.inset="0",o.style.overflow="visible",o.style.pointerEvents="none",t.appendChild(o);let r=[],a=new Map;const i=()=>{a.forEach(l=>l.remove()),a=new Map},s=()=>{e.isDestroyed()||r.forEach(l=>{let d=a.get(l.id);d||(d=lk(),a.set(l.id,d),o.appendChild(d)),d.setAttribute("fill",l.overlayFill);const c=l.coordinates.map(m=>e.worldToScreen(z(m))).filter(m=>m!==null);if(c.length!==l.coordinates.length){d.style.display="none";return}d.setAttribute("points",c.map(m=>`${m.x},${m.y}`).join(" ")),d.style.display="block"})},u=e.subscribePostRender(()=>{s()});return{setPolygonFills:(l,d=!0)=>{const c=ik(l);if(sk(r,c))return;r=c;const m=new Set(r.map(y=>y.id));a.forEach((y,p)=>{m.has(p)||(y.remove(),a.delete(p))}),s(),d&&e.requestRender()},clear:(l=!0)=>{r.length!==0&&(r=[],i(),l&&e.requestRender())},destroy:()=>{r=[],u(),i(),qt(t),e.isDestroyed()||e.requestRender()}}},dk=(e,n,t)=>{const o=g.useRef(null),r=g.useRef(n);r.current=n,g.useEffect(()=>{const a=uk(e,t);return o.current=a,a.setPolygonFills(r.current),()=>{a.destroy(),o.current===a&&(o.current=null)}},[e,t]),g.useEffect(()=>{var a;(a=o.current)==null||a.setPolygonFills(n)},[n])},ck={[Kn.GROUND]:Kn.GROUND,[Kn.COPLANAR]:Kn.COPLANAR},mk=e=>e.map(n=>({...n,placement:n.placement??Kn.COPLANAR})),yk=(e,n)=>e.length===n.length&&e.every((t,o)=>{const r=n[o];return r!==void 0&&t.id===r.id&&t.annotationId===r.annotationId&&t.fill===r.fill&&t.placement===r.placement&&t.selected===r.selected&&ai(t.coordinates,r.coordinates)}),pk=e=>e.flatMap(n=>n.coordinates.length<3?[]:[{id:n.id,positionsECEF:n.coordinates.map(t=>z(t)),fill:n.fill,placement:ck[n.placement],...n.selected!==void 0?{selected:n.selected}:{}}]),gk=(e,n={})=>{if(!H(e))return{setPolygonFills:()=>{},clear:()=>{},destroy:()=>{}};let t=[];const o=n.allowPicking??!0,r=e.createPolygonFills({allowPicking:o}),a=({requestRender:s})=>{r.clear(),s&&e.requestRender()},i=(s,u=!0)=>{r.setPolygonFills(pk(s)),u&&e.requestRender()};return{setPolygonFills:(s,u=!0)=>{const l=mk(s);yk(t,l)||(t=l,!e.isDestroyed()&&i(l,u))},clear:(s=!0)=>{t.length!==0&&(t=[],!e.isDestroyed()&&a({requestRender:s}))},destroy:()=>{t=[],!e.isDestroyed()&&(r.destroy(),e.requestRender())}}},fk=(e,n)=>{const t=g.useRef(null),o=g.useRef(n);o.current=n,g.useEffect(()=>{const r=gk(e);return t.current=r,r.setPolygonFills(o.current),()=>{r.destroy(),t.current===r&&(t.current=null)}},[e]),g.useEffect(()=>{var r;(r=t.current)==null||r.setPolygonFills(n)},[n])},uc=fd(me.ACCENT_MEASUREMENTS).brighter(.1);uc.opacity=.5;const Ak=Object.freeze({id:"accent-measurements",label:"Measurements · Accent",colorPrimaryReduced:uc.toString(),colorPrimary:me.ACCENT_MEASUREMENTS,lineColor:ee.colors.surface,textColor:it.label.textColor}),xe=Object.freeze({scheme:Ak,fontFamily:Nt.fontFamily,contentFontWeight:Nt.lineLabelFontWeight,badgeFontWeight:Nt.badgeFontWeight,selection:it.selection.highlightPalette}),ve=Object.freeze({fontSize:Nt.rootFontSizeRem,fontFamily:xe.fontFamily,fontWeight:xe.contentFontWeight,lineColor:xe.scheme.lineColor,textBackgroundColor:xe.scheme.colorPrimaryReduced,textColor:xe.scheme.textColor,markerBackgroundColor:xe.scheme.colorPrimary,markerTextColor:xe.scheme.textColor,selectedBackgroundColor:xe.selection.backgroundColor,selectedTextColor:xe.selection.textColor,selectedGlowColor:xe.selection.glowColor,selectedGlowRadiusPx:xe.selection.glowRadiusPx,preserveFillOnSelection:xe.selection.preserveFillOnSelection,hoverBackgroundColor:xe.selection.hoverBackgroundColor,markerPixelSize:ee.sizes.pointPixelSize,markerOutlineWidth:ee.sizes.pointOutlineWidth}),vk=e=>({...e,fontSize:e.fontSize??ve.fontSize,fontFamily:e.fontFamily??ve.fontFamily,fontWeight:e.fontWeight??ve.fontWeight,lineColor:e.lineColor??ve.lineColor,textBackgroundColor:e.textBackgroundColor??ve.textBackgroundColor,textColor:e.textColor??ve.textColor,markerBackgroundColor:e.markerBackgroundColor??ve.markerBackgroundColor,markerTextColor:e.markerTextColor??ve.markerTextColor,selectedBackgroundColor:e.selectedBackgroundColor??ve.selectedBackgroundColor,selectedTextColor:e.selectedTextColor??ve.selectedTextColor,selectedGlowColor:e.selectedGlowColor??ve.selectedGlowColor,selectedGlowRadiusPx:e.selectedGlowRadiusPx??ve.selectedGlowRadiusPx,preserveFillOnSelection:e.preserveFillOnSelection??ve.preserveFillOnSelection,hoverBackgroundColor:e.hoverBackgroundColor??ve.hoverBackgroundColor,markerPixelSize:e.markerPixelSize??ve.markerPixelSize,markerOutlineWidth:e.markerOutlineWidth??ve.markerOutlineWidth}),Do=Object.freeze({nodeLabelLongPressDurationMs:320}),Bs=(e,n)=>n!==void 0&&e.has(n),xa=({nodeId:e,annotationId:n,onNodeLongPress:t,canStartNodeEditing:o})=>t&&e&&((o==null?void 0:o(e,n))??!0)?()=>t(e,n):void 0,dc=({nodeId:e,annotationId:n,canStartNodeEditing:t})=>!e||((t==null?void 0:t(e,n))??!0),cc=({nodeId:e,annotationId:n,nodeAnnotationIds:t,referenceNodeInteractionEnabled:o,previewSnapTargetsEnabled:r,onReferenceNodeClick:a,onPreviewSnapTargetNodeClick:i,onNodeAnnotationsSelect:s,onAnnotationSelect:u})=>{if(o&&e)return()=>{a==null||a(e)};if(r&&e)return()=>{i==null||i(e)};if(t.length>0&&s)return()=>{s(t)};if(n&&u)return()=>{u(n)}},bk=e=>e.map(vk).filter(n=>!(n.hideLabelAndStem===!0&&n.nodeId!==void 0)),mc=(e,n)=>{const t=new Map;return e.forEach(o=>{if(!o.nodeId||!o.annotationId)return;const r=n.get(o.nodeId)??o.nodeId,a=t.get(r)??[];a.includes(o.annotationId)||(a.push(o.annotationId),t.set(r,a))}),t},yc=e=>new Set(e.flatMap(n=>n.pointMarkerId&&n.hideLabelAndStem!==!0&&n.hideMarker!==!0?[n.pointMarkerId]:[])),Tk=({pointLabels:e,points:n,selectedAnnotationIdSet:t,previewSnapTargetsEnabled:o,referenceNodeClickEnabled:r,referenceNodeHoverEnabled:a,nodeLinkIdByNodeId:i,previewNodeLinkId:s,isInPreviewNodeLink:u,onAnnotationSelect:l,onNodeAnnotationsSelect:d,onNodeLongPress:c,canStartNodeEditing:m,onPreviewSnapTargetNodeClick:y,onReferenceNodeClick:p,onReferenceNodeHover:f,enableHostInteractionTargets:A})=>{const v=bk(e),T=A&&(a||o),b=A?v.map(I=>{const C=!!(r&&p&&I.nodeId&&!u(I.nodeId)),L=o&&I.nodeId!==void 0,R=dc({nodeId:I.nodeId,annotationId:I.annotationId,canStartNodeEditing:m});return{...I,onClick:!L&&(I.onClick||C)?()=>{if(I.onClick){I.onClick();return}C&&I.nodeId&&(p==null||p(I.nodeId))}:void 0,onHoverChange:I.onHoverChange,onLongPress:C||L||!R?void 0:I.onLongPress??xa({nodeId:I.nodeId,annotationId:I.annotationId,onNodeLongPress:c,canStartNodeEditing:m}),longPressDurationMs:I.longPressDurationMs??Do.nodeLabelLongPressDurationMs}}):v.map(I=>({...I,onClick:void 0,onDoubleClick:void 0,onHoverChange:void 0,onLongPress:void 0,longPressDurationMs:I.longPressDurationMs??Do.nodeLabelLongPressDurationMs}));if(!!!(A&&(T||o||r||l||d||c)))return b;const k=yc(b),N=new Map,S=mc(n,i);return n.forEach(I=>{const{nodeId:C,annotationId:L}=I;if(!C||!k.has(I.id))return;const R=i.get(C)??C;if(s!==null&&R===s)return;const E=!!(r&&p&&!u(C)),x=E||o?void 0:xa({nodeId:C,annotationId:L,onNodeLongPress:c,canStartNodeEditing:m}),P={id:`${I.id}-node-interaction`,annotationId:L,nodeId:C,pointMarkerId:I.id,coordinate:I.coordinate,markerPixelSize:I.pixelSize,content:"",hideLabelAndStem:!0,hideMarker:!0,markerOnlyPointerEvents:!0,onHoverChange:T?D=>{f==null||f(C,D)}:void 0,onClick:cc({nodeId:C,annotationId:L,nodeAnnotationIds:S.get(R)??[],referenceNodeInteractionEnabled:E,previewSnapTargetsEnabled:o,onReferenceNodeClick:p,onPreviewSnapTargetNodeClick:y,onNodeAnnotationsSelect:d,onAnnotationSelect:l}),onLongPress:x,longPressDurationMs:Do.nodeLabelLongPressDurationMs},M=x?I.id:R,q=N.get(M);(!q||!Bs(t,q.annotationId)&&Bs(t,I.annotationId))&&N.set(M,P)}),[...b,...N.values()]},kk=({points:e,enableHostInteractionTargets:n,previewSnapTargetsEnabled:t,referenceNodeClickEnabled:o,referenceNodeHoverEnabled:r,nodeLinkIdByNodeId:a,isInPreviewNodeLink:i,onAnnotationSelect:s,onNodeAnnotationsSelect:u,onNodeLongPress:l,canStartNodeEditing:d,onPreviewSnapTargetNodeClick:c,onReferenceNodeClick:m,onReferenceNodeHover:y})=>{if(!n)return e.map(A=>({...A,onClick:void 0,onHoverChange:void 0,onLongPress:void 0}));const p=r||t,f=mc(e,a);return e.map(A=>{const{nodeId:v,annotationId:T}=A,b=v?a.get(v)??v:null,h=!!(o&&m&&v&&!i(v)),k=p&&v&&!i(v)?S=>{y==null||y(v,S)}:A.onHoverChange,N=t||h||i(v)||!dc({nodeId:v,annotationId:T,canStartNodeEditing:d});return{...A,onClick:cc({nodeId:v,annotationId:T,nodeAnnotationIds:b?f.get(b)??[]:[],referenceNodeInteractionEnabled:h,previewSnapTargetsEnabled:t,onReferenceNodeClick:m,onPreviewSnapTargetNodeClick:c,onNodeAnnotationsSelect:u,onAnnotationSelect:s})??A.onClick,onHoverChange:k,onLongPress:N?void 0:A.onLongPress??xa({nodeId:v,annotationId:T,onNodeLongPress:l,canStartNodeEditing:d}),longPressDurationMs:A.longPressDurationMs??Do.nodeLabelLongPressDurationMs}})},Nk=e=>{const n=Tk(e),t=yc(n);return{pointLabels:n,visibleStandalonePoints:kk(e).filter(o=>!t.has(o.id))}},Ik=(e,n)=>{if(e.anchorKind===Tl.AREA_CENTROID)return e;const t=e.coordinateCandidates;if(t&&t.length>0){const o=t.filter(a=>!n(a.nodeId));if(o.length===t.length)return e;if(o.length===0)return{...e,hideLabelAndStem:!0};const[r]=o;return{...e,coordinateCandidates:o,nodeId:r.nodeId??e.nodeId,coordinate:r.coordinate}}return n(e.nodeId)?{...e,hideLabelAndStem:!0}:e},Fs=(e,{surfaceKey:n="committed",enableHostInteractionTargets:t,points:o,linkedNodeGroups:r,edges:a,polygonFills:i,pointLabels:s,selectedAnnotationIds:u,formatOptions:l,lineLabelOptions:d,activeEditedNodeId:c,isMoveGizmoDragging:m=!1,liveAnchors:y,previewSnapTargetHoverEnabled:p=!1,onPreviewSnapTargetNodeClick:f,onAnnotationSelect:A,onNodeAnnotationsSelect:v,onNodeLongPress:T,canStartNodeEditing:b,onReferenceNodeClick:h,onReferenceNodeHover:k,onReferenceEdgeClick:N,insertNodeTargetAnnotationIds:S=[],onInsertNodeTargetClick:I,onDistanceTriangleCornerClick:C})=>{const L=g.useMemo(()=>vr(d),[d]),R=!!(p&&f);ak(e,{edges:a,formatOptions:l,lineLabelOptions:L,surfaceKey:n,activeEditedNodeId:t?c:null,blockEdgeInteractions:!t||R||c!==null,onAnnotationSelect:A,onEdgeClick:N,insertNodeTargetAnnotationIds:S,onInsertNodeTargetClick:I,onDistanceTriangleCornerClick:C,liveAnchors:y}),fk(e,i),dk(e,i,n);const x=g.useMemo(()=>new Set(u),[u]),P=g.useMemo(()=>xu(r),[r]),M=g.useMemo(()=>c?P.get(c)??c:null,[c,P]),q=g.useCallback(X=>M!==null&&typeof X=="string"&&(P.get(X)??X)===M,[P,M]),D=g.useMemo(()=>c===null?s:s.map(X=>Ik(X,q)),[c,q,s]),W=c!==null&&!m,$=!!(W&&h),G=!!(W&&k),V=g.useMemo(()=>Nk({points:o,pointLabels:D,selectedAnnotationIdSet:x,previewSnapTargetsEnabled:R,referenceNodeClickEnabled:$,referenceNodeHoverEnabled:G,nodeLinkIdByNodeId:P,previewNodeLinkId:M,isInPreviewNodeLink:q,onAnnotationSelect:A,onNodeAnnotationsSelect:v,onNodeLongPress:T,canStartNodeEditing:b,onPreviewSnapTargetNodeClick:f,onReferenceNodeClick:h,onReferenceNodeHover:k,enableHostInteractionTargets:t}),[t,q,P,A,v,T,b,f,h,k,D,o,M,R,$,G,x]);uT(e,V.visibleStandalonePoints,y,`${n}-runtime-point-marker`),aT(e,V.pointLabels,y,q,`${n}-runtime-point-label`,L)},hk=(e,{baseVisualModels:n,overlayVisualModels:t,linkedNodeGroups:o,effectiveLinkedNodeGroups:r,selectedAnnotationIds:a,formatOptions:i,lineLabelOptions:s,activeEditedNodeId:u,isMoveGizmoDragging:l,liveAnchors:d,previewSnapTargetHoverEnabled:c,onPreviewSnapTargetNodeClick:m,onAnnotationSelect:y,onNodeAnnotationsSelect:p,onNodeLongPress:f,canStartNodeEditing:A,onReferenceNodeClick:v,onReferenceNodeHover:T,onPreviewNodeHover:b,onReferenceEdgeClick:h,insertNodeTargetAnnotationIds:k,onInsertNodeTargetClick:N,onDistanceTriangleCornerClick:S})=>{Fs(e,{surfaceKey:"committed",enableHostInteractionTargets:!0,points:n.points??[],linkedNodeGroups:o,edges:n.edges??[],polygonFills:n.polygonFills??[],pointLabels:n.pointLabels??[],selectedAnnotationIds:a,formatOptions:i,lineLabelOptions:s,activeEditedNodeId:u,isMoveGizmoDragging:l,liveAnchors:d,previewSnapTargetHoverEnabled:c,onPreviewSnapTargetNodeClick:m,onAnnotationSelect:y,onNodeAnnotationsSelect:p,onNodeLongPress:f,canStartNodeEditing:A,onReferenceNodeClick:v,onReferenceNodeHover:u!==null?T:b,onReferenceEdgeClick:h,insertNodeTargetAnnotationIds:k,onInsertNodeTargetClick:N,onDistanceTriangleCornerClick:S});const I=u!==null;Fs(e,{surfaceKey:"preview",enableHostInteractionTargets:I,points:(t==null?void 0:t.points)??[],linkedNodeGroups:r,edges:(t==null?void 0:t.edges)??[],polygonFills:(t==null?void 0:t.polygonFills)??[],pointLabels:(t==null?void 0:t.pointLabels)??[],selectedAnnotationIds:a,formatOptions:i,lineLabelOptions:s,activeEditedNodeId:u,isMoveGizmoDragging:l,liveAnchors:d,onNodeLongPress:I?f:void 0,canStartNodeEditing:I?A:void 0,onReferenceNodeClick:I?v:void 0,onReferenceNodeHover:I?T:void 0})},Vt={},Mt=e=>Object.keys(e).length>0,Gs=(e,n)=>{const t=Object.keys(e),o=Object.keys(n);return t.length!==o.length?!1:t.every(r=>{const a=e[r],i=n[r];return ri(a,i)})},Sk=(e,n)=>Mt(n)?e.map(t=>{const o=n[t.id];return o?{...t,coordinate:o}:t}):e,Ck=({annotationEntries:e,coordinateOverrides:n})=>{const t=new Set(Object.keys(n));return new Set(e.flatMap(o=>o.nodeIds.some(r=>t.has(r))?[o.id]:[]))},Sn=({models:e,isAffected:n,keepAffected:t})=>{if(!e)return;const o=e.filter(r=>n(r)===t);return o.length>0?o:void 0},Ek=({point:e,affectedAnnotationIdSet:n,movedNodeIdSet:t})=>typeof e.annotationId=="string"&&n.has(e.annotationId)||typeof e.nodeId=="string"&&t.has(e.nodeId),Ok=({edge:e,affectedAnnotationIdSet:n,movedNodeIdSet:t})=>{var o;return typeof e.annotationId=="string"&&n.has(e.annotationId)||!!((o=e.nodeIds)!=null&&o.some(r=>t.has(r)))},Lk=({polygonFill:e,affectedAnnotationIdSet:n,movedNodeIdSet:t})=>{var o;return typeof e.annotationId=="string"&&n.has(e.annotationId)||!!((o=e.nodeIds)!=null&&o.some(r=>t.has(r)))},Rk=({pointLabel:e,affectedAnnotationIdSet:n,movedNodeIdSet:t})=>{var o;return typeof e.annotationId=="string"&&n.has(e.annotationId)||typeof e.nodeId=="string"&&t.has(e.nodeId)||!!((o=e.coordinateCandidates)!=null&&o.some(r=>typeof r.nodeId=="string"&&t.has(r.nodeId)))},wk=({baseVisualModels:e,overlayVisualModels:n,annotationEntries:t,coordinateOverrides:o})=>{var y,p,f,A;if(!Mt(o))return{baseVisualModels:e,overlayVisualModels:null};const r=new Set(Object.keys(o)),a=Ck({annotationEntries:t,coordinateOverrides:o}),i=v=>Ek({point:v,affectedAnnotationIdSet:a,movedNodeIdSet:r}),s=v=>Ok({edge:v,affectedAnnotationIdSet:a,movedNodeIdSet:r}),u=v=>Lk({polygonFill:v,affectedAnnotationIdSet:a,movedNodeIdSet:r}),l=v=>Rk({pointLabel:v,affectedAnnotationIdSet:a,movedNodeIdSet:r}),d={points:Sn({models:e.points,isAffected:i,keepAffected:!1}),edges:Sn({models:e.edges,isAffected:s,keepAffected:!1}),polygonFills:Sn({models:e.polygonFills,isAffected:u,keepAffected:!1}),pointLabels:Sn({models:e.pointLabels,isAffected:l,keepAffected:!1})},c={points:Sn({models:n.points,isAffected:i,keepAffected:!0}),edges:Sn({models:n.edges,isAffected:s,keepAffected:!0}),polygonFills:Sn({models:n.polygonFills,isAffected:u,keepAffected:!0}),pointLabels:Sn({models:n.pointLabels,isAffected:l,keepAffected:!0})},m=!!((y=c.points)!=null&&y.length)||!!((p=c.edges)!=null&&p.length)||!!((f=c.polygonFills)!=null&&f.length)||!!((A=c.pointLabels)!=null&&A.length);return{baseVisualModels:d,overlayVisualModels:m?c:null}},xk=({plugins:e,...n})=>{const t=e.map(o=>{var r;return((r=o.visualModels)==null?void 0:r.build(n))??null}).filter(o=>!!o);return{points:t.flatMap(o=>o.points??[]),edges:t.flatMap(o=>o.edges??[]),polygonFills:t.flatMap(o=>o.polygonFills??[]),pointLabels:t.flatMap(o=>o.pointLabels??[])}},qk=({plugins:e,nodes:n,edges:t,linkedNodeGroups:o,annotationEntries:r,draftStatesByToolType:a,elevationReferenceAnnotationId:i,selectedAnnotationId:s,selectedAnnotationIds:u,isSelectionAdditiveModifierPressed:l,onAnnotationSelect:d,setElevationReferenceAnnotationId:c,toggleAnnotationElevationDisplayMode:m,onNodeLongPress:y,formatOptions:p,draftNodeCoordinateOverrides:f,effectiveNodes:A,effectiveLinkedNodeGroups:v})=>{const T=g.useCallback((k,N)=>xk({plugins:e,nodes:k,edges:t,linkedNodeGroups:N,annotationEntries:r,draftStatesByToolType:a,elevationReferenceAnnotationId:i,selectedAnnotationId:s,selectedAnnotationIds:u,isSelectionAdditiveModifierPressed:l,setSelectedAnnotationId:d,setElevationReferenceAnnotationId:c,toggleAnnotationElevationDisplayMode:m,onNodeLongPress:y,formatOptions:p}),[r,a,t,i,p,l,d,y,e,s,u,c,m]),b=g.useMemo(()=>T(n,o),[T,o,n]),h=g.useMemo(()=>Mt(f)?T(A,v):null,[T,f,v,A]);return g.useMemo(()=>{if(!h)return{baseVisualModels:b,overlayVisualModels:null};const k=wk({baseVisualModels:b,overlayVisualModels:h,annotationEntries:r,coordinateOverrides:f});return{baseVisualModels:k.baseVisualModels,overlayVisualModels:k.overlayVisualModels}},[r,b,f,h])},jn={clickDelayMs:220,doubleClickDistancePx:12,cameraMovePickIntervalMs:75,surfaceMissLimit:2,normalSampleIntervalMs:48,normalSampleDistancePx:6,debugLog:!1},_k={},Ut=(e,n)=>typeof e=="number"&&Number.isFinite(e)?Math.max(0,e):n,Pk=(e,n)=>typeof e=="number"&&Number.isFinite(e)?Math.max(0,Math.floor(e)):n,PS=e=>{const n=e??_k;return{clickDelayMs:Ut(n.clickDelayMs,jn.clickDelayMs),doubleClickDistancePx:Ut(n.doubleClickDistancePx,jn.doubleClickDistancePx),cameraMovePickIntervalMs:Ut(n.cameraMovePickIntervalMs,jn.cameraMovePickIntervalMs),surfaceMissLimit:Pk(n.surfaceMissLimit,jn.surfaceMissLimit),normalSampleIntervalMs:Ut(n.normalSampleIntervalMs,jn.normalSampleIntervalMs),normalSampleDistancePx:Ut(n.normalSampleDistancePx,jn.normalSampleDistancePx),debugLog:n.debugLog??jn.debugLog}},pc=(e,n)=>{const t=e.x-n.x,o=e.y-n.y;return Math.sqrt(t*t+o*o)},MS=(e,n,t)=>!!(e&&pc(e,n)<=t),DS={x:Number.NaN,y:Number.NaN},BS=[],Mk=5,Dk=0,Bk="unsupported",FS=e=>{if(e.shiftKey)return ag.SHIFT;if(e.ctrlKey||e.altKey)return Bk},js=(e,n)=>{const t=e.getBoundingClientRect();return{x:n.clientX-t.left,y:n.clientY-t.top}},GS=(e,n)=>e===n||e.x===n.x&&e.y===n.y,jS=(e,n)=>n?(n.x=e.x,n.y=e.y,n):{x:e.x,y:e.y},Fk=({pickedIds:e,edgeAnnotationIdsById:n,polygonFillAnnotationIdsById:t})=>{for(const o of e){const r=[...n.entries()].find(([a])=>o===a||o.startsWith(`${a}-`));if(r)return{isRuntimeTarget:!0,annotationId:r[1]};if(t.has(o))return{isRuntimeTarget:!0,annotationId:t.get(o)??null}}return{isRuntimeTarget:!1,annotationId:null}},Gk=e=>e.shiftKey||e.ctrlKey||e.altKey||e.metaKey,jk=({engine:e,enabled:n,baseEdges:t,overlayEdges:o,basePolygonFills:r,overlayPolygonFills:a,onAnnotationSelect:i})=>{const s=g.useMemo(()=>new Map([...t,...o].map(l=>[l.id,l.annotationId??null])),[t,o]),u=g.useMemo(()=>new Map([...r,...a].map(l=>[l.id,l.annotationId??null])),[r,a]);return g.useEffect(()=>{if(!H(e)||!n)return;const{canvas:l}=e;let d=null;const c=y=>{d=y.button===Dk?js(l,y):null},m=y=>{const p=d;if(d=null,e.isDestroyed()||Gk(y)||!p)return;const f=js(l,y);if(pc(p,f)>Mk)return;const A=e.pickAnnotationIdsAt(f),v=Fk({pickedIds:A,edgeAnnotationIdsById:s,polygonFillAnnotationIdsById:u});if(v.isRuntimeTarget){i(v.annotationId),e.requestRender();return}i(null),e.requestRender()};return l.addEventListener("pointerdown",c,{capture:!0}),l.addEventListener("click",m),()=>{l.removeEventListener("pointerdown",c,{capture:!0}),l.removeEventListener("click",m)}},[s,n,e,i,u]),null},Hk=({annotationsStore:e,isSelectionAdditiveModifierPressed:n})=>g.useCallback(t=>{if(!t){e.dispatch(Tt(null));return}if(!n){e.dispatch(Tt(t));return}const o=e.getState().selectionState.selectedAnnotationIds,r=o.includes(t)?o.filter(a=>a!==t):[...o,t];e.dispatch(xt(r))},[e,n]),gc=({draftStore:e,toolTypes:n})=>{const[t,o]=g.useReducer(r=>r+1,0);return g.useEffect(()=>{const r=n.map(a=>e.subscribe(a,o));return()=>{r.forEach(a=>a())}},[e,n]),g.useMemo(()=>Object.fromEntries(n.flatMap(r=>{const a=e.get(r);return a.coordinates.length>0||a.linkedNodeGroupIds.length>0||!!a.feedback?[[r,a]]:[]})),[e,n,t])},zk=e=>{const[n,t]=g.useState(!1),o=g.useCallback(r=>{t(a=>a===r?a:r)},[]);return g.useEffect(()=>{const r=()=>{o(!1)},a=l=>{o(l.shiftKey)},i=l=>{(l.key===e||l.shiftKey)&&o(l.shiftKey)},s=l=>{(l.key===e||!l.shiftKey)&&o(l.shiftKey)},u=()=>{document.hidden&&r()};return window.addEventListener("keydown",i,!0),window.addEventListener("keyup",s,!0),window.addEventListener("pointerdown",a,!0),window.addEventListener("blur",r),document.addEventListener("visibilitychange",u),()=>{window.removeEventListener("keydown",i,!0),window.removeEventListener("keyup",s,!0),window.removeEventListener("pointerdown",a,!0),window.removeEventListener("blur",r),document.removeEventListener("visibilitychange",u)}},[e,o]),n},po=(()=>{const e=uy+dy,n=e*2;return Object.freeze({crosshair:Object.freeze({canvasHalfExtentPx:e,canvasSizePx:n,viewBox:`-27 -27 ${n} ${n}`}),selectionAdditiveIndicator:Object.freeze({fontSizeRem:"1.2857rem",offsetPx:Object.freeze({x:15,y:-10})})})})(),lt={CROSSHAIR:"crosshair",SELECTION_ADDITIVE_INDICATOR:"selection-additive-indicator"},Vk={[lt.CROSSHAIR]:"annotation-candidate-crosshair-layer",[lt.SELECTION_ADDITIVE_INDICATOR]:"annotation-selection-additive-indicator-layer"},Uk={[lt.CROSSHAIR]:"annotation-preview-crosshair",[lt.SELECTION_ADDITIVE_INDICATOR]:"annotation-selection-additive-indicator"},$k=()=>{const e=gy({canvasSizePx:po.crosshair.canvasSizePx,foregroundBlendMode:ul.NORMAL,foregroundFill:em,pathDefinitions:cy,shadowBlendMode:nm,shadowBlurPx:tm,shadowStrokeColor:om,shadowStrokeLinejoin:"round",shadowStrokeWidth:Math.max(rm,0)*2,showAura:!0,viewBox:po.crosshair.viewBox});return br(e,{display:"none"}),e},Wk=()=>{const e=document.createElement("div");return e.textContent="+",br(e,{display:"none",color:"rgba(255, 255, 255, 0.98)",fontFamily:'"Segoe UI", "Helvetica Neue", Helvetica, Arial, sans-serif',fontSize:po.selectionAdditiveIndicator.fontSizeRem,fontWeight:"700",lineHeight:"1",pointerEvents:"none",userSelect:"none",filter:"drop-shadow(0 0 1px rgba(0, 0, 0, 0.98)) drop-shadow(0 1px 2px rgba(0, 0, 0, 0.98))"}),e},Yk=e=>{const n=e===lt.SELECTION_ADDITIVE_INDICATOR?Wk():$k();return n.id=Uk[e],n},Lo=e=>{const n=e.getBoundingClientRect();return{left:n.left,top:n.top,right:n.right,bottom:n.bottom}},Kk=(e,n)=>!!(n&&e.x>=n.left&&e.x<=n.right&&e.y>=n.top&&e.y<=n.bottom),Hs=(e,n=null,{enabled:t=!0,variant:o=lt.CROSSHAIR}={})=>{const r=g.useRef(t),a=g.useRef(null),i=g.useRef(n),s=g.useRef(()=>{});r.current=t,i.current=n,g.useEffect(()=>{s.current(a.current,i.current)},[n,t]),g.useEffect(()=>{if(!e||e.isDestroyed())return;const u=Tr(e,Vk[o],Te.VISUALIZER),l=u==null?void 0:u.parentElement;if(!u||!(l instanceof HTMLElement))return;const d=e.pointer.register();br(u,{zIndex:Se.layerZIndex});const c=Yk(o);u.appendChild(c);let m=Lo(l),y=Lo(e.canvas);const p=()=>{c.style.display="none"},f=(b,h)=>{if(a.current=b,i.current=h,!r.current){p();return}const k=b!==null&&Kk(b,y);if(o===lt.SELECTION_ADDITIVE_INDICATOR){if(b&&m&&k){c.style.display="block",c.style.transform=`translate(${b.x-m.left+po.selectionAdditiveIndicator.offsetPx.x}px, ${b.y-m.top+po.selectionAdditiveIndicator.offsetPx.y}px)`;return}p();return}if(b&&m&&k){c.style.display="block",c.style.transform=`translate(${b.x-m.left}px, ${b.y-m.top}px) translate(-50%, -50%)`;return}if(k&&h&&y&&m&&Number.isFinite(h.x)&&Number.isFinite(h.y)){c.style.display="block",c.style.transform=`translate(${h.x+y.left-m.left}px, ${h.y+y.top-m.top}px) translate(-50%, -50%)`;return}p()};s.current=f;const A=()=>{m=Lo(l),y=Lo(e.canvas),f(a.current,i.current)},v=typeof ResizeObserver<"u"?new ResizeObserver(()=>{A()}):null;v==null||v.observe(l),v==null||v.observe(e.canvas),window.addEventListener("resize",A),window.addEventListener("scroll",A,!0);const T=e.pointer.subscribeClientPosition(b=>{f(b,i.current)});return f(e.pointer.getClientPosition(),i.current),()=>{v==null||v.disconnect(),window.removeEventListener("resize",A),window.removeEventListener("scroll",A,!0),T(),d(),qt(u)}},[e,o])},Ir={FREE:"free",GROUND:"ground",MEASUREMENT_PLANE:"measurement-plane"},gt=Object.freeze({frame:Ir.FREE,axes:!0,surfaceDrag:!0,projectOntoMeasurementPlane:!1}),Qk=Object.freeze({frame:Ir.GROUND,axes:!1,surfaceDrag:!0,projectOntoMeasurementPlane:!1}),zs=Object.freeze({frame:Ir.MEASUREMENT_PLANE,axes:!1,surfaceDrag:!1,projectOntoMeasurementPlane:!0}),HS=Object.freeze({[_.AREA_PLANAR]:Object.freeze({frame:Ir.MEASUREMENT_PLANE,axes:!0,surfaceDrag:!0,projectOntoMeasurementPlane:!0,joinOffPlaneNodes:!0})}),Xk=Object.freeze({[_.POINT]:gt,[_.DISTANCE]:gt,[_.POLYLINE]:gt,[_.LABEL]:gt,[_.AREA_GROUND]:Qk,[_.AREA_PLANAR]:zs,[_.AREA_VERTICAL]:zs}),zS=e=>e&&Xk[e]||gt,Zk=(e,n,t,o=()=>!0)=>{const r=n.filter(a=>a.nodeIds.includes(e)&&o(a));for(let a=t.length-1;a>=0;a-=1){const i=r.find(s=>s.id===t[a]);if(i)return i}return r[0]??null},Jk=.05,eN=(e,n)=>{const t=new Map(n.map(r=>[r.id,z(r.coordinate)]));return Jp({id:e.id,type:e.toolType,nodeIds:[...e.nodeIds],edgeRelationIds:[],closed:e.closed??!0,planeLocked:!0},t).plane??null},nN=(e,n)=>Jn(au(z(e),n)),tN=(e,n)=>{const t=z(e);return t.distanceTo(au(t,n))>Jk},oN=1e5,na=1e-6,Vs=1e-12,VS=({project:e,origin:n,direction:t,offsetPx:o,edgePx:r,heightPx:a,anchorCanvasPosition:i,cameraPosition:s})=>{const u=new w,l=k=>{const N=e(k);return N?Math.hypot(N.x-i.x,N.y-i.y):null},d=l(u.copy(n).addScaledVector(t,1));if(d===null||d<na)return null;let c=o/d;for(let k=0;k<2;k+=1){const N=l(u.copy(n).addScaledVector(t,c));if(N===null||N<na)return null;c*=o/N}if(!Number.isFinite(c)||c>oN)return null;const m=n.clone().addScaledVector(t,c),y=e(m);if(!y)return null;const p=m.clone().sub(s),f=new w().crossVectors(t,p);f.lengthSq()<Vs&&(f.set(1,0,0).cross(t),f.lengthSq()<Vs&&f.set(0,1,0).cross(t)),f.normalize();const A=Math.max(c*.1,1e-6),v=e(u.copy(m).addScaledVector(f,A));if(!v)return null;const T=Math.hypot(v.x-y.x,v.y-y.y)/A;if(T<na)return null;const b=r/2/T,h=a/T;return{baseCenter:m,apex:m.clone().addScaledVector(t,h),direction:t.clone(),side:f,across:new w().crossVectors(t,f).normalize(),radius:b,height:h,baseFacesCamera:p.dot(t)>0}},US=(e,n,t,o=24)=>{const r=u=>{const l=n(u);if(!l)return null;const d=l.x-t.x,c=l.y-t.y;return Number.isFinite(d)&&Number.isFinite(c)?{x:d,y:c}:null},a=r(e.apex);if(!a)return null;const i=new w,s=[];for(let u=0;u<o;u+=1){const l=u/o*al,d=r(i.copy(e.baseCenter).addScaledVector(e.side,Math.cos(l)*e.radius).addScaledVector(e.across,Math.sin(l)*e.radius));if(!d)return null;s.push(d)}return{hull:Zm([a,...s]),baseRim:e.baseFacesCamera?s:null,apex:a}},rN=(e,n=new gn)=>n.makeBasis(e.side.clone().multiplyScalar(e.radius),e.across.clone().multiplyScalar(e.radius),e.direction.clone().multiplyScalar(e.height)).setPosition(e.baseCenter),aN="#ffffff",iN=.5,fc="#ffffff",Ac="rgba(255,255,255,0.82)",sN=.7,$S=Fe+1,lN=Fe/2,uN="rgba(255, 255, 255, 0.95)",qa="rgba(255, 255, 255, 0.95)",mn=Object.freeze({lengthMultiplier:2,dashPx:5,gapPx:3,fallbackCount:256,maxCount:1024}),WS=(e,n)=>{const t=2*mn.lengthMultiplier*(e??0)*n,o=Math.floor(t/(mn.dashPx+mn.gapPx));return Number.isFinite(o)&&o>0?Math.min(o,mn.maxCount):mn.fallbackCount},vc=(e,n,t,o,r)=>{const a=t*mn.lengthMultiplier,i=2*a/o,s=i*mn.dashPx/(mn.dashPx+mn.gapPx),u=-a+r*i;return[e.clone().addScaledVector(n,u),e.clone().addScaledVector(n,u+s)]},dN=["up","down"],St=[],ta=e=>(e==null?void 0:e.capabilities.occludedLinesInScene)===!0&&typeof e.createCone=="function",Us=(e,n,t,o,r)=>{const a=or(o,r).map(i=>e.clone().addScaledVector(n,i.x).addScaledVector(t,i.y));return a.length>0?[...a,a[0].clone()]:a},cN=(e,n)=>Array.from({length:e.rotationAxisDashCount},(t,o)=>({id:`${n}-guide-${o}`,start:e.originECEF,end:e.originECEF,stroke:fc,strokeWidth:e.axisWidthPx,occludedDashed:e.occludedLinesInScene,ruler:!1,followsView:!0,recompute:()=>{var a;const r=e.readFrame();return r!=null&&r.cameraPositionECEF?vc(r.origin,((a=r.activeAxis)==null?void 0:a.direction)??go(r.origin),r.cameraPositionECEF.distanceTo(r.origin),e.rotationAxisDashCount,o):St}})),mN=(e,n)=>({id:`${n}-guide-batch`,start:e.originECEF,end:e.originECEF,stroke:fc,strokeWidth:e.axisWidthPx,occludedDashed:e.occludedLinesInScene,ruler:!1,segmentPairs:!0,followsView:!0,recompute:()=>{var a;const t=e.readFrame();if(!(t!=null&&t.cameraPositionECEF))return St;const o=((a=t.activeAxis)==null?void 0:a.direction)??go(t.origin),r=t.cameraPositionECEF.distanceTo(t.origin);return Array.from({length:e.rotationAxisDashCount},(i,s)=>vc(t.origin,o,r,e.rotationAxisDashCount,s)).flat()}}),oa=(e,n,t,o,r)=>({id:n,start:e.originECEF,end:e.originECEF,stroke:t,strokeWidth:o,occludedDashed:!0,ruler:!1,halo:!0,followsView:!0,recompute:()=>{const a=e.readFrame();return a?r(a):St}}),YS=e=>{const n=`point-move-${e.pointId}`,{inScene:t,showAxes:o,showDisc:r,showRotationHandle:a}=e;return[...o?t?[mN(e,n)]:cN(e,n):[],...t&&o?e.axisCandidates.map(i=>oa(e,`${n}-axis-${i.id}`,Ac,e.axisWidthPx,s=>{var c,m;const u=s.axes.find(y=>y.candidate.id===i.id),l=(c=u==null?void 0:u.arrows.up)==null?void 0:c.baseCenter,d=(m=u==null?void 0:u.arrows.down)==null?void 0:m.baseCenter;return l&&d?[d,l]:St})):[],...t&&r?[oa(e,`${n}-disc-outline`,kt,Fe,({origin:i,activeOutline:s})=>(s==null?void 0:s.worldRadius)!==void 0&&s.planeBasisX&&s.planeBasisY?Us(i,s.planeBasisX,s.planeBasisY,s.worldRadius,s.segments??e.discSegments):St)]:[],...t&&r&&a?[oa(e,`${n}-rotation-handle-outline`,kt,Fe,({rotationHandle:i,activeOutline:s})=>i!=null&&i.centerECEF&&i.worldRadius!==null&&(s!=null&&s.planeBasisX)&&s.planeBasisY?Us(i.centerECEF,s.planeBasisX,s.planeBasisY,i.worldRadius,e.discSegments):St)]:[]]},KS=e=>{const n=`point-move-${e.pointId}`,{inScene:t,showAxes:o,showDisc:r,showRotationHandle:a,readFrame:i}=e,s=new gn,u={id:`${n}-disc`,signature:`ring:${t}:${e.discSegments}`,create:(c,m)=>c.createRing({id:`${n}-disc`,radius:1,innerRadius:.5,color:aN,opacity:iN,segments:e.discSegments,modelMatrix:m,occludable:t}),place:()=>{const c=i();return c?Aa(c.origin,c.discPlaneNormal,c.discWorldRadius,s):null}},l=e.axisCandidates.flatMap(c=>dN.map(m=>{const y=`${n}-arrow-${c.id}-${m}`,p=c.color??ii,f=new gn;return{id:y,signature:`cone:${p}`,create:(A,v)=>{var T;return((T=A.createCone)==null?void 0:T.call(A,{id:y,color:p,outlineColor:qa,outlineWidth:Fe,modelMatrix:v}))??null},place:()=>{var v,T;const A=(T=(v=i())==null?void 0:v.axes.find(b=>b.candidate.id===c.id))==null?void 0:T.arrows[m];return A?rN(A,f):null}}})),d=e.axisCandidates.map(c=>{const m=`${n}-rotation-handle-${c.id}`,y=c.color??kt,p=new gn;return{id:m,signature:`disc:${y}:${e.discSegments}`,create:(f,A)=>f.createDisc({id:m,radius:1,color:y,segments:e.discSegments,modelMatrix:A,occludable:!0}),place:()=>{var v;const f=i(),A=f==null?void 0:f.rotationHandle;return((v=f==null?void 0:f.activeAxis)==null?void 0:v.id)===c.id&&(A!=null&&A.centerECEF)&&A.worldRadius!==null?Aa(A.centerECEF,A.normal,A.worldRadius,p):null}}});return[...r?[u]:[],...t&&o?l:[],...t&&r&&a?d:[]]},Jo={referenceNodeInteractionReleaseGuardMs:48,draftPreviewFlushIntervalMs:200,labels:{verticalAxis:"Punkt entlang der U-Achse verschieben",eastAxis:"Punkt entlang der E-Achse verschieben",northAxis:"Punkt entlang der N-Achse verschieben",genericAxis:"Punkt entlang der Achse verschieben",outerDisc:"Punkt auf Höhenebene verschieben",surfacePlane:"Punkt auf Oberfläche verschieben",freePlane:"Punkt in der Ebene verschieben"},referenceLineAxis:{primary:{id:"reference-line-parallel",color:"rgba(59, 130, 246, 0.98)",title:"Punkt parallel zur Referenzlinie verschieben"},secondary:{id:"reference-line-secondary",color:"rgba(34, 197, 94, 0.98)",title:"Punkt orthogonal zur Referenzlinie verschieben"},tertiary:{id:"reference-line-tertiary",color:"rgba(239, 68, 68, 0.98)",title:"Punkt entlang der aktiven Referenzebene verschieben"}}},yN=new Set([_.POINT,_.DISTANCE]),pN=({activeEditedNodeId:e,annotationEntries:n,selectedAnnotationIds:t})=>{if(!e)return!1;const o=new Set(t);return n.some(r=>o.has(r.id)&&r.nodeIds.includes(e)&&yN.has(r.toolType))},$s=e=>{e.current!==null&&typeof window<"u"&&(window.clearTimeout(e.current),e.current=null)},gN=({annotationsStore:e,selectedAnnotationIds:n})=>{const[t,o]=g.useState(Vt),[r,a]=g.useState(null),i=g.useRef(Vt),s=g.useRef(null),u=g.useRef(null),l=g.useRef(0),d=g.useRef(null),c=g.useRef(null),m=g.useRef(null),y=g.useRef(null),p=g.useCallback(()=>{u.current=null,l.current=typeof performance<"u"?performance.now():0,a(()=>s.current),o(b=>Gs(b,i.current)?b:i.current)},[]),f=g.useCallback(()=>{if(u.current!==null)return;if(typeof window>"u"){p();return}const h=(typeof performance<"u"?performance.now():0)-l.current,k=Math.max(0,Jo.draftPreviewFlushIntervalMs-h);u.current=window.setTimeout(p,k)},[p]),A=g.useCallback(({nextDraftNodeCoordinateOverrides:b,nextDraftLinkToNodeId:h})=>{const k=Mt(b)?b:Vt,N=!Gs(i.current,k),S=s.current!==h;!N&&!S||(i.current=k,s.current=h,f())},[f]),v=g.useCallback(()=>{$s(u),i.current=Vt,s.current=null,d.current=null,c.current=null,m.current=null,y.current=null,a(null),o(b=>Mt(b)?Vt:b)},[]),T=g.useCallback(b=>{if(!b){v();return}const h=i.current,k=h[b]??t[b];if(!k){v();return}e.dispatch(_A({nodeId:b,coordinate:k,movedNodeIds:Object.keys(h),linkToNodeId:s.current,selectedAnnotationIds:n})),v()},[e,v,t,n]);return g.useEffect(()=>()=>$s(u),[]),{draftNodeCoordinateOverrides:t,draftLinkToNodeId:r,snappedNodeIdRef:d,draftBaseCoordinateRef:c,draftBaseScreenPositionRef:m,hoveredReferenceNodeIdRef:y,updateDraftPreviewState:A,clearDraftNodeCoordinateOverrides:v,commitDraftNodeCoordinateOverrides:T}},fN=e=>{const n=qe(e);if(!n)return null;const t=rr(n),{primary:o,secondary:r,tertiary:a}=Jo.referenceLineAxis;return{axisDirection:n,axisTitle:o.title,preferredAxisId:o.id,axisCandidates:[{id:o.id,direction:n,color:o.color,title:o.title},{id:r.id,direction:t.xAxis,color:r.color,title:r.title},{id:a.id,direction:t.yAxis,color:a.color,title:a.title}]}},AN=({activeEditedNodeId:e,activeNodeEditRule:n,nodesById:t,areReferenceInteractionsSuppressed:o,setDraftCoordinateForScopedMove:r,setAxisOverride:a,draftBaseCoordinateRef:i,draftBaseScreenPositionRef:s,hoveredReferenceNodeIdRef:u,nodes:l})=>{const d=g.useCallback(p=>{var f;return i.current??((f=l.find(A=>A.id===p))==null?void 0:f.coordinate)??null},[i,l]),c=g.useCallback(p=>{if(!e||o())return!1;const f=t.get(e),A=t.get(p);if(!f||!A)return!1;if(f.id!==A.id){const v={...f.coordinate,altitude:A.coordinate.altitude};u.current=null,i.current=v,r(f.id,v,{disableSnap:!0})}return!0},[e,o,i,u,t,r]),m=g.useCallback((p,f)=>{if(!e||o())return;const A=d(e),v=t.get(p);if(A){if(f){u.current=p,r(e,{...A,altitude:(v==null?void 0:v.coordinate.altitude)??A.altitude},{disableSnap:!0});return}u.current===p&&(u.current=null,r(e,A,{screenPosition:s.current??void 0,disableSnap:!0}))}},[e,o,s,u,t,d,r]),y=g.useCallback((p,f)=>{if(!e||!n.axes||o())return!1;const A=t.get(p),v=t.get(f);if(!A||!v)return!1;const T=fN(new w().subVectors(z(v.coordinate),z(A.coordinate)));return T?(a(T),!0):!1},[e,n,o,t,a]);return{handleReferenceNodeClick:c,handleReferenceNodeHover:m,handleReferenceEdgeClick:y}},vN=({engine:e,nodes:n,linkedNodeGroups:t,annotationsStore:o,selectedAnnotationIds:r,measurementEditPlane:a,joinOffPlaneNodes:i,liveAnchors:s,updateDraftPreviewState:u,snappedNodeIdRef:l,draftBaseCoordinateRef:d,draftBaseScreenPositionRef:c,hoveredReferenceNodeIdRef:m})=>g.useCallback((y,p,{screenPosition:f,forcedSnappedNodeId:A,rememberBaseCoordinate:v=!1,disableSnap:T=!1}={})=>{const b=a?nN(p,a):p,{movedNodeIds:h}=Qu({nodeId:y,nodes:n,linkedNodeGroups:t,annotationEntries:o.getState().annotationEntries,selectedAnnotationIds:r});if(h.length===0)return;v&&(d.current=b,c.current=f??null);const k=(I,C)=>{const L=z(I);h.forEach(R=>{s.set(R,L)}),u({nextDraftNodeCoordinateOverrides:Object.fromEntries(h.map(R=>[R,I])),nextDraftLinkToNodeId:C})};if(T){l.current=null,k(b,null);return}const N=e&&!e.isDestroyed()?e.worldToScreen(z(b))??void 0:void 0;let S=rd({engine:e,nodes:n,linkedNodeGroups:t,coordinate:b,screenPosition:f??c.current??N,forcedSnappedNodeId:A??m.current,lockedNodeId:l.current,excludedNodeIds:h});a&&!i&&S.snappedNodeId!==null&&tN(S.coordinate,a)&&(S={...S,coordinate:b,snappedNodeId:null}),l.current=S.snappedNodeId,k(S.coordinate,S.snappedNodeId)},[a,i,o,t,s,n,e,r,u,l,d,c,m]),bN=()=>{},TN=e=>{},kN=(e,n,t,{annotationsStore:o,annotationEntries:r,selectedAnnotationIds:a,onActiveEditedNodeIdChange:i,referenceObjectSizing:s=td,liveAnchors:u,resolveNodeEditRule:l=bN})=>{var Z,ke;const d=g.useMemo(()=>xd(()=>{}),[]),c=u??d,[m,y]=g.useState(null),[p,f]=g.useState(!1),[A,v]=g.useState(null),T=g.useRef(!1),b=g.useRef(0),{draftNodeCoordinateOverrides:h,draftLinkToNodeId:k,snappedNodeIdRef:N,draftBaseCoordinateRef:S,draftBaseScreenPositionRef:I,hoveredReferenceNodeIdRef:C,updateDraftPreviewState:L,clearDraftNodeCoordinateOverrides:R,commitDraftNodeCoordinateOverrides:E}=gN({annotationsStore:o,selectedAnnotationIds:a}),x=g.useMemo(()=>m?Zk(m,r,a,F=>l(F.toolType)!==void 0):null,[m,r,l,a]),P=g.useMemo(()=>x&&l(x.toolType)||gt,[x,l]),M=g.useMemo(()=>x&&P.projectOntoMeasurementPlane?eN(x,n):null,[x,P,n]),q=g.useMemo(()=>M?he(M.normalECEF):null,[M]),D=g.useMemo(()=>pN({activeEditedNodeId:m,annotationEntries:r,selectedAnnotationIds:a}),[m,r,a]),W=g.useCallback(()=>T.current||Date.now()<b.current,[]),$=vN({engine:e,nodes:n,linkedNodeGroups:t,annotationsStore:o,selectedAnnotationIds:a,measurementEditPlane:M,joinOffPlaneNodes:P.joinOffPlaneNodes===!0,liveAnchors:c,updateDraftPreviewState:L,snappedNodeIdRef:N,draftBaseCoordinateRef:S,draftBaseScreenPositionRef:I,hoveredReferenceNodeIdRef:C}),G=g.useMemo(()=>Sk(n,h),[h,n]),V=g.useMemo(()=>{const F=Object.keys(h),te=m??F[0]??null;return!te||F.length===0?t:_u({nodes:G,nodeLinks:t,nodeId:te,movedNodeIds:F,linkToNodeId:k})},[m,k,h,G,t]),X=g.useMemo(()=>new Map(G.map(F=>[F.id,F])),[G]),ae=g.useCallback(F=>{r.some(oe=>oe.nodeIds.includes(F)&&a.includes(oe.id)&&!oe.locked&&!oe.readOnly)&&(m&&m!==F&&E(m),v(null),y(F))},[m,r,E,a]),{handleReferenceNodeClick:ne,handleReferenceNodeHover:U,handleReferenceEdgeClick:ie}=AN({activeEditedNodeId:m,activeNodeEditRule:P,nodes:n,nodesById:X,areReferenceInteractionsSuppressed:W,setDraftCoordinateForScopedMove:$,setAxisOverride:v,draftBaseCoordinateRef:S,draftBaseScreenPositionRef:I,hoveredReferenceNodeIdRef:C}),ce=g.useCallback(F=>{if(T.current=F,f(F),F||!m){F&&(b.current=0);return}b.current=Date.now()+Jo.referenceNodeInteractionReleaseGuardMs,E(m)},[m,E]),pe=g.useMemo(()=>G.map(F=>({id:F.id,geometryECEF:z(F.coordinate)})),[G]),se=g.useCallback((F,te,oe)=>{$(F,Jn(te),{screenPosition:oe,rememberBaseCoordinate:!0})},[$]);return((e==null?void 0:e.hooks.usePointMoveGizmo)??TN)({points:pe,labels:Jo.labels,movePointId:m,axisDirection:(A==null?void 0:A.axisDirection)??null,discPlaneNormal:q,axisTitle:(A==null?void 0:A.axisTitle)??null,preferredAxisId:(A==null?void 0:A.preferredAxisId)??null,axisCandidates:(A==null?void 0:A.axisCandidates)??null,radius:s.worldRadiusMeters,discScalingMode:ta(e)?ig.WORLD:s.scalingMode,discSizing:ta(e)?s.discSizing??fn:void 0,discCenterCircle:ta(e)?{diameterCssPx:((Z=s.discSizing)==null?void 0:Z.centerCircleDiameterCssPx)??fn.centerCircleDiameterCssPx,halo:((ke=s.discSizing)==null?void 0:ke.crosshairHalo)??fn.crosshairHalo}:void 0,discOutlineScreenPixelRadius:s.targetScreenRadiusCssPx,discResizeWorldRadiusToScreenTarget:s.resizeWorldRadiusToScreenTarget,discQuantizeWorldRadius:s.quantizeWorldRadius,freezeDiscScaleDuringDrag:s.resizeWorldRadiusToScreenTarget,discResizeStepFactor:s.resizeStepFactor,showRotationHandle:!1,showAxes:P.axes,snapPlaneDragToGround:P.surfaceDrag&&M===null,excludeRegisteredDragSampleOccluders:D,onDragStateChange:ce,onPointPositionChange:se,onExit:()=>{E(m),T.current=!1,f(!1),v(null),y(null)}}),g.useEffect(()=>{if(!m){R();return}G.some(F=>F.id===m)||(R(),v(null),y(null))},[m,R,G]),g.useEffect(()=>{!m||!n.some(te=>te.id===m)||r.some(te=>te.nodeIds.includes(m)&&a.includes(te.id))||(E(m),v(null),y(null))},[m,r,E,n,a]),g.useEffect(()=>{var F;m&&(S.current=((F=n.find(te=>te.id===m))==null?void 0:F.coordinate)??null,I.current=null,C.current=null)},[m,S,I,C,n]),g.useEffect(()=>{i==null||i(m)},[m,i]),g.useEffect(()=>{p||Mt(h)||(c.clear(),e&&!e.isDestroyed()&&e.requestRender())},[h,p,c,e]),{activeEditedNodeId:m,draftNodeCoordinateOverrides:h,effectiveLinkedNodeGroups:V,effectiveNodes:G,handleNodeLongPress:ae,isMoveGizmoDragging:p,handleReferenceNodeClick:ne,handleReferenceNodeHover:U,handleReferenceEdgeClick:ie}},NN=e=>e===Xt.START_COORDINATE?Xt.END_COORDINATE:Xt.START_COORDINATE,IN=e=>Xt.START_COORDINATE,QS=e=>e===tn.LEFTMOST_SCREEN_SPACE?tn.RIGHTMOST_SCREEN_SPACE:tn.LEFTMOST_SCREEN_SPACE,hN=e=>{const n=e[0],t=e[e.length-1];if(!n||!t)return tn.RIGHTMOST_SCREEN_SPACE;const o=z(n),r=z(t),a=tl(o,r);return Math.hypot(a.east,a.north)>vt.referenceLineEpsilonMeters?tn.LEFTMOST_SCREEN_SPACE:tn.RIGHTMOST_SCREEN_SPACE},SN=e=>new Map(e.map(n=>[n.id,n.coordinate])),CN=(e,n)=>e.nodeIds.map(t=>n.get(t)).filter(t=>!!t),Ai=({annotationEntries:e,nodes:n,annotationId:t})=>{if(!t)return[];const o=lo(e,t);return o?CN(o,SN(n)):[]},_a=({annotationEntries:e,nodes:n,annotationId:t})=>Ai({annotationEntries:e,nodes:n,annotationId:t}).flatMap(o=>o?[z(o)]:[]),{POLYLINE:EN,AREA_GROUND:ON,AREA_PLANAR:LN,AREA_VERTICAL:RN}=_,Ws=e=>e===EN||e===ON||e===LN||e===RN,wN=(e,n)=>Jn(new w().addVectors(z(e),z(n)).multiplyScalar(.5)),xN=({engine:e,nodes:n,linkedNodeGroups:t,annotationEntries:o,selectedAnnotationIds:r,annotationsStore:a,activeEditedNodeId:i,isInteractionToolActive:s,isMeasurementToolActive:u,isSelectionAdditiveModifierPressed:l,onActiveEditedNodeIdChange:d,onHoveredPointQueryNodeIdChange:c,referenceObjectSizing:m,liveAnchors:y,resolveNodeEditRule:p})=>{const f=i===null&&u,{draftNodeCoordinateOverrides:A,effectiveLinkedNodeGroups:v,effectiveNodes:T,handleNodeLongPress:b,isMoveGizmoDragging:h,handleReferenceNodeClick:k,handleReferenceNodeHover:N,handleReferenceEdgeClick:S}=kN(e,n,t,{annotationsStore:a,annotationEntries:o,selectedAnnotationIds:r,onActiveEditedNodeIdChange:d,referenceObjectSizing:m,liveAnchors:y,resolveNodeEditRule:p}),I=g.useCallback(E=>{const x=a.getState(),P=lo(x.annotationEntries,E);if(!P)return;const M=Ai({annotationEntries:x.annotationEntries,nodes:x.nodes,annotationId:E}),q=P.distanceTriangleAnchorCoordinateRole??IN(),D=(P.distanceAnchorCoordinateSelection??hN(M))===tn.LEFTMOST_SCREEN_SPACE?tn.RIGHTMOST_SCREEN_SPACE:tn.LEFTMOST_SCREEN_SPACE;a.dispatch($n({annotationId:E,distanceAnchorCoordinateSelection:D,distanceTriangleAnchorCoordinateRole:NN(q)}))},[a]),C=g.useMemo(()=>{const E=new Set(r);return o.filter(x=>E.has(x.id)&&!x.locked&&!x.readOnly&&Ws(x.toolType)).map(x=>x.id)},[o,r]),L=g.useCallback((E,x,P)=>{const M=a.getState(),q=lo(M.annotationEntries,E);if(!q||q.locked||q.readOnly||!Ws(q.toolType))return!1;const D=M.nodes.find($=>$.id===x),W=M.nodes.find($=>$.id===P);return!D||!W?!1:(a.dispatch(qA({annotationId:E,startNodeId:x,endNodeId:P,coordinate:wN(D.coordinate,W.coordinate)})),e==null||e.requestRender(),!0)},[a,e]),R=g.useCallback((E,x)=>{c(x?E:null)},[c]);return g.useEffect(()=>{f||c(null)},[c,f]),Hs(e,null,{enabled:f&&(e==null?void 0:e.capabilities.pointQueryDiscInScene)!==!0}),Hs(e,null,{enabled:s&&l,variant:"selection-additive-indicator"}),{draftNodeCoordinateOverrides:A,effectiveLinkedNodeGroups:v,effectiveNodes:T,handleDistanceTriangleCornerClick:I,handleInsertNodeTargetClick:L,handleNodeLongPress:b,handlePreviewSnapTargetNodeHover:R,handleReferenceEdgeClick:S,handleReferenceNodeClick:k,handleReferenceNodeHover:N,insertNodeTargetAnnotationIds:C,isMoveGizmoDragging:h,previewSnapTargetHoverEnabled:f}},bc=({engine:e,registry:n,annotationsStore:t,annotationToolDraftStore:o,setElevationReferenceAnnotationId:r,toggleAnnotationElevationDisplayMode:a,onActiveEditedNodeIdChange:i,onHoveredPointQueryNodeIdChange:s,onPreviewSnapTargetNodeClick:u,activeEditedNodeId:l,formatOptions:d,lineLabelOptions:c,referenceObjectSizing:m,visualInteractionEnabled:y=!1,visualAnnotationEntryRoles:p})=>{const{invalidatePositions:f}=tr(),A=g.useMemo(()=>xd(f),[f]),v=de(K=>K.annotationToolType),T=g.useMemo(()=>n.getPlugin(v)??null,[v,n]),b=(T==null?void 0:T.kind)===Qo.INTERACTION,h=(T==null?void 0:T.kind)===Qo.MEASUREMENT,k=g.useCallback(K=>{var Q;return(Q=n.getPluginsByAnnotationType(K).find(le=>le.nodeEdit))==null?void 0:Q.nodeEdit},[n]),N=de(K=>K.nodes),S=de(K=>K.linkedNodeGroups),I=de(K=>K.edges),C=de(K=>K.annotationEntries),L=g.useMemo(()=>Hf({annotationEntries:C},{roles:p}).map(Q=>Q.readOnly&&!Q.locked?{...Q,locked:!0}:Q),[C,p]),R=de(Ar),E=de(K=>K.selectionState.selectedAnnotationIds),x=g.useMemo(()=>n.plugins.map(K=>K.id),[n.plugins]),P=gc({draftStore:o,toolTypes:x}),M=de(K=>K.settingsState.elevationReferenceAnnotationId),q=zk(Xn.additiveSelectionModifierKey),D=Hk({annotationsStore:t,isSelectionAdditiveModifierPressed:q}),W=g.useCallback(K=>{const Q=Array.from(new Set(K.filter(Boolean)));if(Q.length===0)return;if(!q){t.dispatch(xt(Q));return}const le=t.getState().selectionState.selectedAnnotationIds,j=new Set(Q),Y=Q.every(Ne=>le.includes(Ne))?le.filter(Ne=>!j.has(Ne)):Array.from(new Set([...le,...Q]));t.dispatch(xt(Y))},[t,q]),$=g.useMemo(()=>Ya(L),[L]),G=g.useCallback((K,Q)=>v===bn&&!$.has(K)&&L.some(le=>(!Q||le.id===Q)&&le.nodeIds.includes(K)&&E.includes(le.id)&&!le.locked&&!le.readOnly),[v,L,$,E]),{draftNodeCoordinateOverrides:V,effectiveLinkedNodeGroups:X,effectiveNodes:ae,handleDistanceTriangleCornerClick:ne,handleInsertNodeTargetClick:U,handleNodeLongPress:ie,handlePreviewSnapTargetNodeHover:ce,handleReferenceEdgeClick:pe,handleReferenceNodeClick:se,handleReferenceNodeHover:we,insertNodeTargetAnnotationIds:Z,isMoveGizmoDragging:ke,previewSnapTargetHoverEnabled:F}=xN({engine:e,nodes:N,linkedNodeGroups:S,annotationEntries:L,selectedAnnotationIds:E,annotationsStore:t,activeEditedNodeId:l,isInteractionToolActive:b,isMeasurementToolActive:h,isSelectionAdditiveModifierPressed:q,onActiveEditedNodeIdChange:i,onHoveredPointQueryNodeIdChange:s,referenceObjectSizing:m,liveAnchors:A,resolveNodeEditRule:k}),{baseVisualModels:te,overlayVisualModels:oe}=qk({plugins:n.plugins,nodes:N,edges:I,linkedNodeGroups:S,annotationEntries:L,draftStatesByToolType:P,elevationReferenceAnnotationId:M,selectedAnnotationId:R,selectedAnnotationIds:E,isSelectionAdditiveModifierPressed:q,onAnnotationSelect:D,setElevationReferenceAnnotationId:r,toggleAnnotationElevationDisplayMode:a,onNodeLongPress:ie,formatOptions:d,draftNodeCoordinateOverrides:V,effectiveNodes:ae,effectiveLinkedNodeGroups:X});return hk(e,{baseVisualModels:te,overlayVisualModels:oe,linkedNodeGroups:S,effectiveLinkedNodeGroups:X,selectedAnnotationIds:E,formatOptions:d,lineLabelOptions:c,activeEditedNodeId:l,isMoveGizmoDragging:ke,liveAnchors:A,previewSnapTargetHoverEnabled:F,onPreviewSnapTargetNodeClick:u,onAnnotationSelect:D,onNodeAnnotationsSelect:W,onNodeLongPress:ie,canStartNodeEditing:G,onReferenceNodeClick:se,onReferenceNodeHover:we,onPreviewNodeHover:ce,onReferenceEdgeClick:pe,insertNodeTargetAnnotationIds:Z,onInsertNodeTargetClick:U,onDistanceTriangleCornerClick:ne}),O.jsx(jk,{engine:e,enabled:b||y,baseEdges:te.edges??[],overlayEdges:(oe==null?void 0:oe.edges)??[],basePolygonFills:te.polygonFills??[],overlayPolygonFills:(oe==null?void 0:oe.polygonFills)??[],onAnnotationSelect:D})};bc.__docgenInfo={description:"",methods:[],displayName:"RuntimeVisualHost",props:{engine:{required:!0,tsType:{name:"union",raw:"AnnotationEngine | null",elements:[{name:"AnnotationEngine"},{name:"null"}]},description:""},registry:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
  /** How the nodes of this tool's measurements may be edited; none edits them freely. */
  nodeEdit?: AnnotationNodeEditRule;
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
    inputModifiers?: readonly AnnotationEnginePointQueryInputModifier[];
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
}`,signature:{properties:[{key:"id",value:{name:"AnnotationToolId",required:!0}},{key:"kind",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_TOOL_PLUGIN_KINDS)[keyof typeof ANNOTATION_TOOL_PLUGIN_KINDS]",required:!0}},{key:"annotationType",value:{name:"union",raw:'StoredAnnotation["toolType"] | null',elements:[{name:"AnnotationType",raw:'StoredAnnotation["toolType"]'},{name:"null"}],required:!1}},{key:"nodeEdit",value:{name:"signature",type:"object",raw:`{
  frame: AnnotationNodeEditFrame;
  /** Axis arrows: the local vertical, or the three axes of a reference edge. */
  axes: boolean;
  /** The centre handle follows the surface under the pointer, unless a plane is held. */
  surfaceDrag: boolean;
  /** Moves are projected onto the measurement's own plane. */
  projectOntoMeasurementPlane: boolean;
  /** A snap may join a node off the held plane; by default it is refused. */
  joinOffPlaneNodes?: boolean;
}`,signature:{properties:[{key:"frame",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_NODE_EDIT_FRAMES)[keyof typeof ANNOTATION_NODE_EDIT_FRAMES]",required:!0}},{key:"axes",value:{name:"boolean",required:!0},description:"Axis arrows: the local vertical, or the three axes of a reference edge."},{key:"surfaceDrag",value:{name:"boolean",required:!0},description:"The centre handle follows the surface under the pointer, unless a plane is held."},{key:"projectOntoMeasurementPlane",value:{name:"boolean",required:!0},description:"Moves are projected onto the measurement's own plane."},{key:"joinOffPlaneNodes",value:{name:"boolean",required:!1},description:"A snap may join a node off the held plane; by default it is refused."}]},required:!1},description:"How the nodes of this tool's measurements may be edited; none edits them freely."},{key:"descriptor",value:{name:"signature",type:"object",raw:`{
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
  inputModifier?: AnnotationEnginePointQueryInputModifier;
}`,signature:{properties:[{key:"coordinate",value:{name:"union",raw:"AnnotationGeographicCoordinate | null",elements:[{name:"AnnotationGeographicCoordinate"},{name:"null"}],required:!0}},{key:"screenPosition",value:{name:"union",raw:"{ x: number; y: number } | null",elements:[{name:"signature",type:"object",raw:"{ x: number; y: number }",signature:{properties:[{key:"x",value:{name:"number",required:!0}},{key:"y",value:{name:"number",required:!0}}]}},{name:"null"}],required:!0}},{key:"pointECEF",value:{name:"union",raw:"Vector3 | null",elements:[{name:"Vector3"},{name:"null"}],required:!0}},{key:"surfaceNormalECEF",value:{name:"union",raw:"Vector3 | null",elements:[{name:"Vector3"},{name:"null"}],required:!0}},{key:"inputModifier",value:{name:"AnnotationEnginePointQueryInputModifier",required:!1}}]}},{name:"null"}],required:!1}}]}},name:"context"}],return:{name:"unknown"}},required:!1}},{key:"alwaysShowHelpTextWhileActive",value:{name:"boolean",required:!1}},{key:"capabilities",value:{name:"unknown",required:!1}},{key:"session",value:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"toolType",value:{name:"AnnotationType",required:!0}},{key:"nodeIds",value:{name:"unknown",required:!0}},{key:"edgeIds",value:{name:"unknown",required:!0}},{key:"displayName",value:{name:"string",required:!1}},{key:"shortLabel",value:{name:"string",required:!1}},{key:"shortLabelSource",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_SHORT_LABEL_SOURCES)[keyof typeof ANNOTATION_SHORT_LABEL_SOURCES]",required:!1}},{key:"shortLabelCounter",value:{name:"number",required:!1}},{key:"hidden",value:{name:"boolean",required:!1}},{key:"locked",value:{name:"boolean",required:!1}},{key:"annotationRole",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_ENTRY_ROLES)[keyof typeof ANNOTATION_ENTRY_ROLES]",required:!1}},{key:"readOnly",value:{name:"boolean",required:!1}},{key:"labelAppearance",value:{name:"AnnotationLabelAppearance",required:!1}},{key:"elevationDisplayMode",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_ELEVATION_DISPLAY_MODES)[keyof typeof ANNOTATION_ELEVATION_DISPLAY_MODES]",required:!1}},{key:"distanceAnchorCoordinateSelection",value:{name:"unknown[union]",raw:"(typeof RUNTIME_POINT_LABEL_COORDINATE_SELECTION)[keyof typeof RUNTIME_POINT_LABEL_COORDINATE_SELECTION]",required:!1}},{key:"distanceTriangleAnchorCoordinateRole",value:{name:"unknown[union]",raw:"(typeof RUNTIME_DISTANCE_TRIANGLE_ANCHOR_COORDINATE_ROLE)[keyof typeof RUNTIME_DISTANCE_TRIANGLE_ANCHOR_COORDINATE_ROLE]",required:!1}},{key:"closed",value:{name:"boolean",required:!1}},{key:"preferredNormalBearingRad",value:{name:"number",required:!1}},{key:"externalCollection",value:{name:"signature",type:"object",raw:`{
  type: "saved-measurement";
  id: string;
}`,signature:{properties:[{key:"type",value:{name:"literal",value:'"saved-measurement"',required:!0}},{key:"id",value:{name:"string",required:!0}}]},required:!1}},{key:"uuid",value:{name:"string",required:!1},description:"Identity across machines and shares; the runtime id only counts per session."}]},required:!0},{name:"union",raw:`| "closed"
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
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"toolType",value:{name:"AnnotationType",required:!0}},{key:"nodeIds",value:{name:"unknown",required:!0}},{key:"edgeIds",value:{name:"unknown",required:!0}},{key:"displayName",value:{name:"string",required:!1}},{key:"shortLabel",value:{name:"string",required:!1}},{key:"shortLabelSource",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_SHORT_LABEL_SOURCES)[keyof typeof ANNOTATION_SHORT_LABEL_SOURCES]",required:!1}},{key:"shortLabelCounter",value:{name:"number",required:!1}},{key:"hidden",value:{name:"boolean",required:!1}},{key:"locked",value:{name:"boolean",required:!1}},{key:"annotationRole",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_ENTRY_ROLES)[keyof typeof ANNOTATION_ENTRY_ROLES]",required:!1}},{key:"readOnly",value:{name:"boolean",required:!1}},{key:"labelAppearance",value:{name:"AnnotationLabelAppearance",required:!1}},{key:"elevationDisplayMode",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_ELEVATION_DISPLAY_MODES)[keyof typeof ANNOTATION_ELEVATION_DISPLAY_MODES]",required:!1}},{key:"distanceAnchorCoordinateSelection",value:{name:"unknown[union]",raw:"(typeof RUNTIME_POINT_LABEL_COORDINATE_SELECTION)[keyof typeof RUNTIME_POINT_LABEL_COORDINATE_SELECTION]",required:!1}},{key:"distanceTriangleAnchorCoordinateRole",value:{name:"unknown[union]",raw:"(typeof RUNTIME_DISTANCE_TRIANGLE_ANCHOR_COORDINATE_ROLE)[keyof typeof RUNTIME_DISTANCE_TRIANGLE_ANCHOR_COORDINATE_ROLE]",required:!1}},{key:"closed",value:{name:"boolean",required:!1}},{key:"preferredNormalBearingRad",value:{name:"number",required:!1}},{key:"externalCollection",value:{name:"signature",type:"object",raw:`{
  type: "saved-measurement";
  id: string;
}`,signature:{properties:[{key:"type",value:{name:"literal",value:'"saved-measurement"',required:!0}},{key:"id",value:{name:"string",required:!0}}]},required:!1}},{key:"uuid",value:{name:"string",required:!1},description:"Identity across machines and shares; the runtime id only counts per session."}]},required:!0}},required:!0}}]},required:!0},name:"context"}],return:{name:"signature",type:"object",raw:`{
  toolType: AnnotationToolId;
  requestStart: () => void;
  requestFinish: () => boolean;
  discardDraft: () => void;
  onNodeCreated?: (
    coordinate: AnnotationGeographicCoordinate,
    linkedNodeGroupId?: AnnotationNodeLinkId | null,
    options?: { inputModifier?: AnnotationEnginePointQueryInputModifier }
  ) => void;
  finishesOnLoopClosure?: boolean;
}`,signature:{properties:[{key:"toolType",value:{name:"AnnotationToolId",required:!0}},{key:"requestStart",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}},{key:"requestFinish",value:{name:"signature",type:"function",raw:"() => boolean",signature:{arguments:[],return:{name:"boolean"}},required:!0}},{key:"discardDraft",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}},{key:"onNodeCreated",value:{name:"signature",type:"function",raw:`(
  coordinate: AnnotationGeographicCoordinate,
  linkedNodeGroupId?: AnnotationNodeLinkId | null,
  options?: { inputModifier?: AnnotationEnginePointQueryInputModifier }
) => void`,signature:{arguments:[{type:{name:"AnnotationGeographicCoordinate"},name:"coordinate"},{type:{name:"union",raw:"AnnotationNodeLinkId | null",elements:[{name:"string"},{name:"null"}]},name:"linkedNodeGroupId"},{type:{name:"signature",type:"object",raw:"{ inputModifier?: AnnotationEnginePointQueryInputModifier }",signature:{properties:[{key:"inputModifier",value:{name:"AnnotationEnginePointQueryInputModifier",required:!1}}]}},name:"options"}],return:{name:"void"}},required:!1}},{key:"finishesOnLoopClosure",value:{name:"boolean",required:!1}}]}}},required:!0}}]},required:!1}},{key:"pointQuery",value:{name:"signature",type:"object",raw:`{
  inputModifiers?: readonly AnnotationEnginePointQueryInputModifier[];
  onPointCreated: (context: PointQueryCreatedContext) => void;
}`,signature:{properties:[{key:"inputModifiers",value:{name:"unknown",required:!1}},{key:"onPointCreated",value:{name:"signature",type:"function",raw:"(context: PointQueryCreatedContext) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  coordinate: AnnotationGeographicCoordinate;
  linkedNodeGroupId: AnnotationNodeLinkId | null;
  inputModifier?: AnnotationEnginePointQueryInputModifier;
  activeToolType: AnnotationToolId;
  activeToolSession: AnnotationModeSession | null;
  toolSessions: AnnotationModeSessionMap;
  sessionContext: AnnotationToolSessionContext;
}`,signature:{properties:[{key:"coordinate",value:{name:"AnnotationGeographicCoordinate",required:!0}},{key:"linkedNodeGroupId",value:{name:"union",raw:"AnnotationNodeLinkId | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"inputModifier",value:{name:"AnnotationEnginePointQueryInputModifier",required:!1}},{key:"activeToolType",value:{name:"AnnotationToolId",required:!0}},{key:"activeToolSession",value:{name:"union",raw:"AnnotationModeSession | null",elements:[{name:"signature",type:"object",raw:`{
  toolType: AnnotationToolId;
  requestStart: () => void;
  requestFinish: () => boolean;
  discardDraft: () => void;
  onNodeCreated?: (
    coordinate: AnnotationGeographicCoordinate,
    linkedNodeGroupId?: AnnotationNodeLinkId | null,
    options?: { inputModifier?: AnnotationEnginePointQueryInputModifier }
  ) => void;
  finishesOnLoopClosure?: boolean;
}`,signature:{properties:[{key:"toolType",value:{name:"AnnotationToolId",required:!0}},{key:"requestStart",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}},{key:"requestFinish",value:{name:"signature",type:"function",raw:"() => boolean",signature:{arguments:[],return:{name:"boolean"}},required:!0}},{key:"discardDraft",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}},{key:"onNodeCreated",value:{name:"signature",type:"function",raw:`(
  coordinate: AnnotationGeographicCoordinate,
  linkedNodeGroupId?: AnnotationNodeLinkId | null,
  options?: { inputModifier?: AnnotationEnginePointQueryInputModifier }
) => void`,signature:{arguments:[{type:{name:"AnnotationGeographicCoordinate"},name:"coordinate"},{type:{name:"union",raw:"AnnotationNodeLinkId | null",elements:[{name:"string"},{name:"null"}]},name:"linkedNodeGroupId"},{type:{name:"signature",type:"object",raw:"{ inputModifier?: AnnotationEnginePointQueryInputModifier }",signature:{properties:[{key:"inputModifier",value:{name:"AnnotationEnginePointQueryInputModifier",required:!1}}]}},name:"options"}],return:{name:"void"}},required:!1}},{key:"finishesOnLoopClosure",value:{name:"boolean",required:!1}}]}},{name:"null"}],required:!0}},{key:"toolSessions",value:{name:"Partial",elements:[{name:"Record",elements:[{name:"AnnotationToolId"},{name:"signature",type:"object",raw:`{
  toolType: AnnotationToolId;
  requestStart: () => void;
  requestFinish: () => boolean;
  discardDraft: () => void;
  onNodeCreated?: (
    coordinate: AnnotationGeographicCoordinate,
    linkedNodeGroupId?: AnnotationNodeLinkId | null,
    options?: { inputModifier?: AnnotationEnginePointQueryInputModifier }
  ) => void;
  finishesOnLoopClosure?: boolean;
}`,signature:{properties:[{key:"toolType",value:{name:"AnnotationToolId",required:!0}},{key:"requestStart",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}},{key:"requestFinish",value:{name:"signature",type:"function",raw:"() => boolean",signature:{arguments:[],return:{name:"boolean"}},required:!0}},{key:"discardDraft",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}},{key:"onNodeCreated",value:{name:"signature",type:"function",raw:`(
  coordinate: AnnotationGeographicCoordinate,
  linkedNodeGroupId?: AnnotationNodeLinkId | null,
  options?: { inputModifier?: AnnotationEnginePointQueryInputModifier }
) => void`,signature:{arguments:[{type:{name:"AnnotationGeographicCoordinate"},name:"coordinate"},{type:{name:"union",raw:"AnnotationNodeLinkId | null",elements:[{name:"string"},{name:"null"}]},name:"linkedNodeGroupId"},{type:{name:"signature",type:"object",raw:"{ inputModifier?: AnnotationEnginePointQueryInputModifier }",signature:{properties:[{key:"inputModifier",value:{name:"AnnotationEnginePointQueryInputModifier",required:!1}}]}},name:"options"}],return:{name:"void"}},required:!1}},{key:"finishesOnLoopClosure",value:{name:"boolean",required:!1}}]}}],raw:"Record<AnnotationToolId, AnnotationModeSession>"}],raw:`Partial<
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
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"toolType",value:{name:"AnnotationType",required:!0}},{key:"nodeIds",value:{name:"unknown",required:!0}},{key:"edgeIds",value:{name:"unknown",required:!0}},{key:"displayName",value:{name:"string",required:!1}},{key:"shortLabel",value:{name:"string",required:!1}},{key:"shortLabelSource",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_SHORT_LABEL_SOURCES)[keyof typeof ANNOTATION_SHORT_LABEL_SOURCES]",required:!1}},{key:"shortLabelCounter",value:{name:"number",required:!1}},{key:"hidden",value:{name:"boolean",required:!1}},{key:"locked",value:{name:"boolean",required:!1}},{key:"annotationRole",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_ENTRY_ROLES)[keyof typeof ANNOTATION_ENTRY_ROLES]",required:!1}},{key:"readOnly",value:{name:"boolean",required:!1}},{key:"labelAppearance",value:{name:"AnnotationLabelAppearance",required:!1}},{key:"elevationDisplayMode",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_ELEVATION_DISPLAY_MODES)[keyof typeof ANNOTATION_ELEVATION_DISPLAY_MODES]",required:!1}},{key:"distanceAnchorCoordinateSelection",value:{name:"unknown[union]",raw:"(typeof RUNTIME_POINT_LABEL_COORDINATE_SELECTION)[keyof typeof RUNTIME_POINT_LABEL_COORDINATE_SELECTION]",required:!1}},{key:"distanceTriangleAnchorCoordinateRole",value:{name:"unknown[union]",raw:"(typeof RUNTIME_DISTANCE_TRIANGLE_ANCHOR_COORDINATE_ROLE)[keyof typeof RUNTIME_DISTANCE_TRIANGLE_ANCHOR_COORDINATE_ROLE]",required:!1}},{key:"closed",value:{name:"boolean",required:!1}},{key:"preferredNormalBearingRad",value:{name:"number",required:!1}},{key:"externalCollection",value:{name:"signature",type:"object",raw:`{
  type: "saved-measurement";
  id: string;
}`,signature:{properties:[{key:"type",value:{name:"literal",value:'"saved-measurement"',required:!0}},{key:"id",value:{name:"string",required:!0}}]},required:!1}},{key:"uuid",value:{name:"string",required:!1},description:"Identity across machines and shares; the runtime id only counts per session."}]},required:!0},{name:"union",raw:`| "closed"
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
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"toolType",value:{name:"AnnotationType",required:!0}},{key:"nodeIds",value:{name:"unknown",required:!0}},{key:"edgeIds",value:{name:"unknown",required:!0}},{key:"displayName",value:{name:"string",required:!1}},{key:"shortLabel",value:{name:"string",required:!1}},{key:"shortLabelSource",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_SHORT_LABEL_SOURCES)[keyof typeof ANNOTATION_SHORT_LABEL_SOURCES]",required:!1}},{key:"shortLabelCounter",value:{name:"number",required:!1}},{key:"hidden",value:{name:"boolean",required:!1}},{key:"locked",value:{name:"boolean",required:!1}},{key:"annotationRole",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_ENTRY_ROLES)[keyof typeof ANNOTATION_ENTRY_ROLES]",required:!1}},{key:"readOnly",value:{name:"boolean",required:!1}},{key:"labelAppearance",value:{name:"AnnotationLabelAppearance",required:!1}},{key:"elevationDisplayMode",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_ELEVATION_DISPLAY_MODES)[keyof typeof ANNOTATION_ELEVATION_DISPLAY_MODES]",required:!1}},{key:"distanceAnchorCoordinateSelection",value:{name:"unknown[union]",raw:"(typeof RUNTIME_POINT_LABEL_COORDINATE_SELECTION)[keyof typeof RUNTIME_POINT_LABEL_COORDINATE_SELECTION]",required:!1}},{key:"distanceTriangleAnchorCoordinateRole",value:{name:"unknown[union]",raw:"(typeof RUNTIME_DISTANCE_TRIANGLE_ANCHOR_COORDINATE_ROLE)[keyof typeof RUNTIME_DISTANCE_TRIANGLE_ANCHOR_COORDINATE_ROLE]",required:!1}},{key:"closed",value:{name:"boolean",required:!1}},{key:"preferredNormalBearingRad",value:{name:"number",required:!1}},{key:"externalCollection",value:{name:"signature",type:"object",raw:`{
  type: "saved-measurement";
  id: string;
}`,signature:{properties:[{key:"type",value:{name:"literal",value:'"saved-measurement"',required:!0}},{key:"id",value:{name:"string",required:!0}}]},required:!1}},{key:"uuid",value:{name:"string",required:!1},description:"Identity across machines and shares; the runtime id only counts per session."}]},required:!0}},required:!0}}]},required:!0}}]}},name:"context"}],return:{name:"void"}},required:!0}}]},required:!1}},{key:"addAnnotation",value:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"toolType",value:{name:"AnnotationType",required:!0}},{key:"nodeIds",value:{name:"unknown",required:!0}},{key:"edgeIds",value:{name:"unknown",required:!0}},{key:"displayName",value:{name:"string",required:!1}},{key:"shortLabel",value:{name:"string",required:!1}},{key:"shortLabelSource",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_SHORT_LABEL_SOURCES)[keyof typeof ANNOTATION_SHORT_LABEL_SOURCES]",required:!1}},{key:"shortLabelCounter",value:{name:"number",required:!1}},{key:"hidden",value:{name:"boolean",required:!1}},{key:"locked",value:{name:"boolean",required:!1}},{key:"annotationRole",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_ENTRY_ROLES)[keyof typeof ANNOTATION_ENTRY_ROLES]",required:!1}},{key:"readOnly",value:{name:"boolean",required:!1}},{key:"labelAppearance",value:{name:"AnnotationLabelAppearance",required:!1}},{key:"elevationDisplayMode",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_ELEVATION_DISPLAY_MODES)[keyof typeof ANNOTATION_ELEVATION_DISPLAY_MODES]",required:!1}},{key:"distanceAnchorCoordinateSelection",value:{name:"unknown[union]",raw:"(typeof RUNTIME_POINT_LABEL_COORDINATE_SELECTION)[keyof typeof RUNTIME_POINT_LABEL_COORDINATE_SELECTION]",required:!1}},{key:"distanceTriangleAnchorCoordinateRole",value:{name:"unknown[union]",raw:"(typeof RUNTIME_DISTANCE_TRIANGLE_ANCHOR_COORDINATE_ROLE)[keyof typeof RUNTIME_DISTANCE_TRIANGLE_ANCHOR_COORDINATE_ROLE]",required:!1}},{key:"closed",value:{name:"boolean",required:!1}},{key:"preferredNormalBearingRad",value:{name:"number",required:!1}},{key:"externalCollection",value:{name:"signature",type:"object",raw:`{
  type: "saved-measurement";
  id: string;
}`,signature:{properties:[{key:"type",value:{name:"literal",value:'"saved-measurement"',required:!0}},{key:"id",value:{name:"string",required:!0}}]},required:!1}},{key:"uuid",value:{name:"string",required:!1},description:"Identity across machines and shares; the runtime id only counts per session."}]},required:!0},{name:"union",raw:`| "closed"
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
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"toolType",value:{name:"AnnotationType",required:!0}},{key:"nodeIds",value:{name:"unknown",required:!0}},{key:"edgeIds",value:{name:"unknown",required:!0}},{key:"displayName",value:{name:"string",required:!1}},{key:"shortLabel",value:{name:"string",required:!1}},{key:"shortLabelSource",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_SHORT_LABEL_SOURCES)[keyof typeof ANNOTATION_SHORT_LABEL_SOURCES]",required:!1}},{key:"shortLabelCounter",value:{name:"number",required:!1}},{key:"hidden",value:{name:"boolean",required:!1}},{key:"locked",value:{name:"boolean",required:!1}},{key:"annotationRole",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_ENTRY_ROLES)[keyof typeof ANNOTATION_ENTRY_ROLES]",required:!1}},{key:"readOnly",value:{name:"boolean",required:!1}},{key:"labelAppearance",value:{name:"AnnotationLabelAppearance",required:!1}},{key:"elevationDisplayMode",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_ELEVATION_DISPLAY_MODES)[keyof typeof ANNOTATION_ELEVATION_DISPLAY_MODES]",required:!1}},{key:"distanceAnchorCoordinateSelection",value:{name:"unknown[union]",raw:"(typeof RUNTIME_POINT_LABEL_COORDINATE_SELECTION)[keyof typeof RUNTIME_POINT_LABEL_COORDINATE_SELECTION]",required:!1}},{key:"distanceTriangleAnchorCoordinateRole",value:{name:"unknown[union]",raw:"(typeof RUNTIME_DISTANCE_TRIANGLE_ANCHOR_COORDINATE_ROLE)[keyof typeof RUNTIME_DISTANCE_TRIANGLE_ANCHOR_COORDINATE_ROLE]",required:!1}},{key:"closed",value:{name:"boolean",required:!1}},{key:"preferredNormalBearingRad",value:{name:"number",required:!1}},{key:"externalCollection",value:{name:"signature",type:"object",raw:`{
  type: "saved-measurement";
  id: string;
}`,signature:{properties:[{key:"type",value:{name:"literal",value:'"saved-measurement"',required:!0}},{key:"id",value:{name:"string",required:!0}}]},required:!1}},{key:"uuid",value:{name:"string",required:!1},description:"Identity across machines and shares; the runtime id only counts per session."}]},required:!0},{name:"union",raw:`| "closed"
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
  inputModifier?: AnnotationEnginePointQueryInputModifier;
}`,signature:{properties:[{key:"coordinate",value:{name:"union",raw:"AnnotationGeographicCoordinate | null",elements:[{name:"AnnotationGeographicCoordinate"},{name:"null"}],required:!0}},{key:"screenPosition",value:{name:"union",raw:"{ x: number; y: number } | null",elements:[{name:"signature",type:"object",raw:"{ x: number; y: number }",signature:{properties:[{key:"x",value:{name:"number",required:!0}},{key:"y",value:{name:"number",required:!0}}]}},{name:"null"}],required:!0}},{key:"pointECEF",value:{name:"union",raw:"Vector3 | null",elements:[{name:"Vector3"},{name:"null"}],required:!0}},{key:"surfaceNormalECEF",value:{name:"union",raw:"Vector3 | null",elements:[{name:"Vector3"},{name:"null"}],required:!0}},{key:"inputModifier",value:{name:"AnnotationEnginePointQueryInputModifier",required:!1}}]}},{name:"null"}]},name:"pickResult"},{type:{name:"signature",type:"object",raw:"{ requestRender?: boolean }",signature:{properties:[{key:"requestRender",value:{name:"boolean",required:!1}}]}},name:"options"}],return:{name:"void"}},required:!0}},{key:"isPointQueryPickResultAcceptable",value:{name:"signature",type:"function",raw:"() => boolean",signature:{arguments:[],return:{name:"boolean"}},required:!1}},{key:"getPointQueryVisualStyle",value:{name:"signature",type:"function",raw:"() => AnnotationPointQueryVisualStyle | undefined",signature:{arguments:[],return:{name:"union",raw:"AnnotationPointQueryVisualStyle | undefined",elements:[{name:"union",raw:`Readonly<{
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
    options?: { inputModifier?: AnnotationEnginePointQueryInputModifier }
  ) => void;
  finishesOnLoopClosure?: boolean;
}`,signature:{properties:[{key:"toolType",value:{name:"AnnotationToolId",required:!0}},{key:"requestStart",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}},{key:"requestFinish",value:{name:"signature",type:"function",raw:"() => boolean",signature:{arguments:[],return:{name:"boolean"}},required:!0}},{key:"discardDraft",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}},{key:"onNodeCreated",value:{name:"signature",type:"function",raw:`(
  coordinate: AnnotationGeographicCoordinate,
  linkedNodeGroupId?: AnnotationNodeLinkId | null,
  options?: { inputModifier?: AnnotationEnginePointQueryInputModifier }
) => void`,signature:{arguments:[{type:{name:"AnnotationGeographicCoordinate"},name:"coordinate"},{type:{name:"union",raw:"AnnotationNodeLinkId | null",elements:[{name:"string"},{name:"null"}]},name:"linkedNodeGroupId"},{type:{name:"signature",type:"object",raw:"{ inputModifier?: AnnotationEnginePointQueryInputModifier }",signature:{properties:[{key:"inputModifier",value:{name:"AnnotationEnginePointQueryInputModifier",required:!1}}]}},name:"options"}],return:{name:"void"}},required:!1}},{key:"finishesOnLoopClosure",value:{name:"boolean",required:!1}}]}},{name:"null"}],required:!0}},{key:"requestFinishMeasurement",value:{name:"signature",type:"function",raw:"() => boolean",signature:{arguments:[],return:{name:"boolean"}},required:!0}},{key:"requestActivateTool",value:{name:"signature",type:"function",raw:"(toolId?: AnnotationToolId) => void",signature:{arguments:[{type:{name:"AnnotationToolId"},name:"toolId"}],return:{name:"void"}},required:!0}},{key:"requestModeChange",value:{name:"signature",type:"function",raw:"(toolId: AnnotationToolId) => void",signature:{arguments:[{type:{name:"AnnotationToolId"},name:"toolId"}],return:{name:"void"}},required:!0}},{key:"sessionContext",value:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"toolType",value:{name:"AnnotationType",required:!0}},{key:"nodeIds",value:{name:"unknown",required:!0}},{key:"edgeIds",value:{name:"unknown",required:!0}},{key:"displayName",value:{name:"string",required:!1}},{key:"shortLabel",value:{name:"string",required:!1}},{key:"shortLabelSource",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_SHORT_LABEL_SOURCES)[keyof typeof ANNOTATION_SHORT_LABEL_SOURCES]",required:!1}},{key:"shortLabelCounter",value:{name:"number",required:!1}},{key:"hidden",value:{name:"boolean",required:!1}},{key:"locked",value:{name:"boolean",required:!1}},{key:"annotationRole",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_ENTRY_ROLES)[keyof typeof ANNOTATION_ENTRY_ROLES]",required:!1}},{key:"readOnly",value:{name:"boolean",required:!1}},{key:"labelAppearance",value:{name:"AnnotationLabelAppearance",required:!1}},{key:"elevationDisplayMode",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_ELEVATION_DISPLAY_MODES)[keyof typeof ANNOTATION_ELEVATION_DISPLAY_MODES]",required:!1}},{key:"distanceAnchorCoordinateSelection",value:{name:"unknown[union]",raw:"(typeof RUNTIME_POINT_LABEL_COORDINATE_SELECTION)[keyof typeof RUNTIME_POINT_LABEL_COORDINATE_SELECTION]",required:!1}},{key:"distanceTriangleAnchorCoordinateRole",value:{name:"unknown[union]",raw:"(typeof RUNTIME_DISTANCE_TRIANGLE_ANCHOR_COORDINATE_ROLE)[keyof typeof RUNTIME_DISTANCE_TRIANGLE_ANCHOR_COORDINATE_ROLE]",required:!1}},{key:"closed",value:{name:"boolean",required:!1}},{key:"preferredNormalBearingRad",value:{name:"number",required:!1}},{key:"externalCollection",value:{name:"signature",type:"object",raw:`{
  type: "saved-measurement";
  id: string;
}`,signature:{properties:[{key:"type",value:{name:"literal",value:'"saved-measurement"',required:!0}},{key:"id",value:{name:"string",required:!0}}]},required:!1}},{key:"uuid",value:{name:"string",required:!1},description:"Identity across machines and shares; the runtime id only counts per session."}]},required:!0},{name:"union",raw:`| "closed"
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
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"toolType",value:{name:"AnnotationType",required:!0}},{key:"nodeIds",value:{name:"unknown",required:!0}},{key:"edgeIds",value:{name:"unknown",required:!0}},{key:"displayName",value:{name:"string",required:!1}},{key:"shortLabel",value:{name:"string",required:!1}},{key:"shortLabelSource",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_SHORT_LABEL_SOURCES)[keyof typeof ANNOTATION_SHORT_LABEL_SOURCES]",required:!1}},{key:"shortLabelCounter",value:{name:"number",required:!1}},{key:"hidden",value:{name:"boolean",required:!1}},{key:"locked",value:{name:"boolean",required:!1}},{key:"annotationRole",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_ENTRY_ROLES)[keyof typeof ANNOTATION_ENTRY_ROLES]",required:!1}},{key:"readOnly",value:{name:"boolean",required:!1}},{key:"labelAppearance",value:{name:"AnnotationLabelAppearance",required:!1}},{key:"elevationDisplayMode",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_ELEVATION_DISPLAY_MODES)[keyof typeof ANNOTATION_ELEVATION_DISPLAY_MODES]",required:!1}},{key:"distanceAnchorCoordinateSelection",value:{name:"unknown[union]",raw:"(typeof RUNTIME_POINT_LABEL_COORDINATE_SELECTION)[keyof typeof RUNTIME_POINT_LABEL_COORDINATE_SELECTION]",required:!1}},{key:"distanceTriangleAnchorCoordinateRole",value:{name:"unknown[union]",raw:"(typeof RUNTIME_DISTANCE_TRIANGLE_ANCHOR_COORDINATE_ROLE)[keyof typeof RUNTIME_DISTANCE_TRIANGLE_ANCHOR_COORDINATE_ROLE]",required:!1}},{key:"closed",value:{name:"boolean",required:!1}},{key:"preferredNormalBearingRad",value:{name:"number",required:!1}},{key:"externalCollection",value:{name:"signature",type:"object",raw:`{
  type: "saved-measurement";
  id: string;
}`,signature:{properties:[{key:"type",value:{name:"literal",value:'"saved-measurement"',required:!0}},{key:"id",value:{name:"string",required:!0}}]},required:!1}},{key:"uuid",value:{name:"string",required:!1},description:"Identity across machines and shares; the runtime id only counts per session."}]},required:!0}},required:!0}}]},required:!0}}]}},name:"context"}],return:{name:"boolean"}},required:!0}}]},required:!1}},{key:"visualModels",value:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"toolType",value:{name:"AnnotationType",required:!0}},{key:"nodeIds",value:{name:"unknown",required:!0}},{key:"edgeIds",value:{name:"unknown",required:!0}},{key:"displayName",value:{name:"string",required:!1}},{key:"shortLabel",value:{name:"string",required:!1}},{key:"shortLabelSource",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_SHORT_LABEL_SOURCES)[keyof typeof ANNOTATION_SHORT_LABEL_SOURCES]",required:!1}},{key:"shortLabelCounter",value:{name:"number",required:!1}},{key:"hidden",value:{name:"boolean",required:!1}},{key:"locked",value:{name:"boolean",required:!1}},{key:"annotationRole",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_ENTRY_ROLES)[keyof typeof ANNOTATION_ENTRY_ROLES]",required:!1}},{key:"readOnly",value:{name:"boolean",required:!1}},{key:"labelAppearance",value:{name:"AnnotationLabelAppearance",required:!1}},{key:"elevationDisplayMode",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_ELEVATION_DISPLAY_MODES)[keyof typeof ANNOTATION_ELEVATION_DISPLAY_MODES]",required:!1}},{key:"distanceAnchorCoordinateSelection",value:{name:"unknown[union]",raw:"(typeof RUNTIME_POINT_LABEL_COORDINATE_SELECTION)[keyof typeof RUNTIME_POINT_LABEL_COORDINATE_SELECTION]",required:!1}},{key:"distanceTriangleAnchorCoordinateRole",value:{name:"unknown[union]",raw:"(typeof RUNTIME_DISTANCE_TRIANGLE_ANCHOR_COORDINATE_ROLE)[keyof typeof RUNTIME_DISTANCE_TRIANGLE_ANCHOR_COORDINATE_ROLE]",required:!1}},{key:"closed",value:{name:"boolean",required:!1}},{key:"preferredNormalBearingRad",value:{name:"number",required:!1}},{key:"externalCollection",value:{name:"signature",type:"object",raw:`{
  type: "saved-measurement";
  id: string;
}`,signature:{properties:[{key:"type",value:{name:"literal",value:'"saved-measurement"',required:!0}},{key:"id",value:{name:"string",required:!0}}]},required:!1}},{key:"uuid",value:{name:"string",required:!1},description:"Identity across machines and shares; the runtime id only counts per session."}]},required:!0}},{key:"annotationEntries",value:{name:"unknown",required:!0}},{key:"nodes",value:{name:"unknown",required:!0}},{key:"selectedAnnotationId",value:{name:"string",required:!0}},{key:"setSelectedAnnotationId",value:{name:"signature",type:"function",raw:"(annotationId: string | null) => void",signature:{arguments:[{type:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},name:"annotationId"}],return:{name:"void"}},required:!0}},{key:"focusAnnotationId",value:{name:"signature",type:"function",raw:"(annotationId: string | null) => void",signature:{arguments:[{type:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},name:"annotationId"}],return:{name:"void"}},required:!0}},{key:"flyToAllAnnotations",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}},{key:"removeAnnotationById",value:{name:"signature",type:"function",raw:`(
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
  /** How the nodes of this tool's measurements may be edited; none edits them freely. */
  nodeEdit?: AnnotationNodeEditRule;
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
    inputModifiers?: readonly AnnotationEnginePointQueryInputModifier[];
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
}`,signature:{properties:[{key:"id",value:{name:"AnnotationToolId",required:!0}},{key:"kind",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_TOOL_PLUGIN_KINDS)[keyof typeof ANNOTATION_TOOL_PLUGIN_KINDS]",required:!0}},{key:"annotationType",value:{name:"union",raw:'StoredAnnotation["toolType"] | null',elements:[{name:"AnnotationType",raw:'StoredAnnotation["toolType"]'},{name:"null"}],required:!1}},{key:"nodeEdit",value:{name:"signature",type:"object",raw:`{
  frame: AnnotationNodeEditFrame;
  /** Axis arrows: the local vertical, or the three axes of a reference edge. */
  axes: boolean;
  /** The centre handle follows the surface under the pointer, unless a plane is held. */
  surfaceDrag: boolean;
  /** Moves are projected onto the measurement's own plane. */
  projectOntoMeasurementPlane: boolean;
  /** A snap may join a node off the held plane; by default it is refused. */
  joinOffPlaneNodes?: boolean;
}`,signature:{properties:[{key:"frame",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_NODE_EDIT_FRAMES)[keyof typeof ANNOTATION_NODE_EDIT_FRAMES]",required:!0}},{key:"axes",value:{name:"boolean",required:!0},description:"Axis arrows: the local vertical, or the three axes of a reference edge."},{key:"surfaceDrag",value:{name:"boolean",required:!0},description:"The centre handle follows the surface under the pointer, unless a plane is held."},{key:"projectOntoMeasurementPlane",value:{name:"boolean",required:!0},description:"Moves are projected onto the measurement's own plane."},{key:"joinOffPlaneNodes",value:{name:"boolean",required:!1},description:"A snap may join a node off the held plane; by default it is refused."}]},required:!1},description:"How the nodes of this tool's measurements may be edited; none edits them freely."},{key:"descriptor",value:{name:"signature",type:"object",raw:`{
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
  inputModifier?: AnnotationEnginePointQueryInputModifier;
}`,signature:{properties:[{key:"coordinate",value:{name:"union",raw:"AnnotationGeographicCoordinate | null",elements:[{name:"AnnotationGeographicCoordinate"},{name:"null"}],required:!0}},{key:"screenPosition",value:{name:"union",raw:"{ x: number; y: number } | null",elements:[{name:"signature",type:"object",raw:"{ x: number; y: number }",signature:{properties:[{key:"x",value:{name:"number",required:!0}},{key:"y",value:{name:"number",required:!0}}]}},{name:"null"}],required:!0}},{key:"pointECEF",value:{name:"union",raw:"Vector3 | null",elements:[{name:"Vector3"},{name:"null"}],required:!0}},{key:"surfaceNormalECEF",value:{name:"union",raw:"Vector3 | null",elements:[{name:"Vector3"},{name:"null"}],required:!0}},{key:"inputModifier",value:{name:"AnnotationEnginePointQueryInputModifier",required:!1}}]}},{name:"null"}],required:!1}}]}},name:"context"}],return:{name:"unknown"}},required:!1}},{key:"alwaysShowHelpTextWhileActive",value:{name:"boolean",required:!1}},{key:"capabilities",value:{name:"unknown",required:!1}},{key:"session",value:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"toolType",value:{name:"AnnotationType",required:!0}},{key:"nodeIds",value:{name:"unknown",required:!0}},{key:"edgeIds",value:{name:"unknown",required:!0}},{key:"displayName",value:{name:"string",required:!1}},{key:"shortLabel",value:{name:"string",required:!1}},{key:"shortLabelSource",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_SHORT_LABEL_SOURCES)[keyof typeof ANNOTATION_SHORT_LABEL_SOURCES]",required:!1}},{key:"shortLabelCounter",value:{name:"number",required:!1}},{key:"hidden",value:{name:"boolean",required:!1}},{key:"locked",value:{name:"boolean",required:!1}},{key:"annotationRole",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_ENTRY_ROLES)[keyof typeof ANNOTATION_ENTRY_ROLES]",required:!1}},{key:"readOnly",value:{name:"boolean",required:!1}},{key:"labelAppearance",value:{name:"AnnotationLabelAppearance",required:!1}},{key:"elevationDisplayMode",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_ELEVATION_DISPLAY_MODES)[keyof typeof ANNOTATION_ELEVATION_DISPLAY_MODES]",required:!1}},{key:"distanceAnchorCoordinateSelection",value:{name:"unknown[union]",raw:"(typeof RUNTIME_POINT_LABEL_COORDINATE_SELECTION)[keyof typeof RUNTIME_POINT_LABEL_COORDINATE_SELECTION]",required:!1}},{key:"distanceTriangleAnchorCoordinateRole",value:{name:"unknown[union]",raw:"(typeof RUNTIME_DISTANCE_TRIANGLE_ANCHOR_COORDINATE_ROLE)[keyof typeof RUNTIME_DISTANCE_TRIANGLE_ANCHOR_COORDINATE_ROLE]",required:!1}},{key:"closed",value:{name:"boolean",required:!1}},{key:"preferredNormalBearingRad",value:{name:"number",required:!1}},{key:"externalCollection",value:{name:"signature",type:"object",raw:`{
  type: "saved-measurement";
  id: string;
}`,signature:{properties:[{key:"type",value:{name:"literal",value:'"saved-measurement"',required:!0}},{key:"id",value:{name:"string",required:!0}}]},required:!1}},{key:"uuid",value:{name:"string",required:!1},description:"Identity across machines and shares; the runtime id only counts per session."}]},required:!0},{name:"union",raw:`| "closed"
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
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"toolType",value:{name:"AnnotationType",required:!0}},{key:"nodeIds",value:{name:"unknown",required:!0}},{key:"edgeIds",value:{name:"unknown",required:!0}},{key:"displayName",value:{name:"string",required:!1}},{key:"shortLabel",value:{name:"string",required:!1}},{key:"shortLabelSource",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_SHORT_LABEL_SOURCES)[keyof typeof ANNOTATION_SHORT_LABEL_SOURCES]",required:!1}},{key:"shortLabelCounter",value:{name:"number",required:!1}},{key:"hidden",value:{name:"boolean",required:!1}},{key:"locked",value:{name:"boolean",required:!1}},{key:"annotationRole",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_ENTRY_ROLES)[keyof typeof ANNOTATION_ENTRY_ROLES]",required:!1}},{key:"readOnly",value:{name:"boolean",required:!1}},{key:"labelAppearance",value:{name:"AnnotationLabelAppearance",required:!1}},{key:"elevationDisplayMode",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_ELEVATION_DISPLAY_MODES)[keyof typeof ANNOTATION_ELEVATION_DISPLAY_MODES]",required:!1}},{key:"distanceAnchorCoordinateSelection",value:{name:"unknown[union]",raw:"(typeof RUNTIME_POINT_LABEL_COORDINATE_SELECTION)[keyof typeof RUNTIME_POINT_LABEL_COORDINATE_SELECTION]",required:!1}},{key:"distanceTriangleAnchorCoordinateRole",value:{name:"unknown[union]",raw:"(typeof RUNTIME_DISTANCE_TRIANGLE_ANCHOR_COORDINATE_ROLE)[keyof typeof RUNTIME_DISTANCE_TRIANGLE_ANCHOR_COORDINATE_ROLE]",required:!1}},{key:"closed",value:{name:"boolean",required:!1}},{key:"preferredNormalBearingRad",value:{name:"number",required:!1}},{key:"externalCollection",value:{name:"signature",type:"object",raw:`{
  type: "saved-measurement";
  id: string;
}`,signature:{properties:[{key:"type",value:{name:"literal",value:'"saved-measurement"',required:!0}},{key:"id",value:{name:"string",required:!0}}]},required:!1}},{key:"uuid",value:{name:"string",required:!1},description:"Identity across machines and shares; the runtime id only counts per session."}]},required:!0}},required:!0}}]},required:!0},name:"context"}],return:{name:"signature",type:"object",raw:`{
  toolType: AnnotationToolId;
  requestStart: () => void;
  requestFinish: () => boolean;
  discardDraft: () => void;
  onNodeCreated?: (
    coordinate: AnnotationGeographicCoordinate,
    linkedNodeGroupId?: AnnotationNodeLinkId | null,
    options?: { inputModifier?: AnnotationEnginePointQueryInputModifier }
  ) => void;
  finishesOnLoopClosure?: boolean;
}`,signature:{properties:[{key:"toolType",value:{name:"AnnotationToolId",required:!0}},{key:"requestStart",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}},{key:"requestFinish",value:{name:"signature",type:"function",raw:"() => boolean",signature:{arguments:[],return:{name:"boolean"}},required:!0}},{key:"discardDraft",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}},{key:"onNodeCreated",value:{name:"signature",type:"function",raw:`(
  coordinate: AnnotationGeographicCoordinate,
  linkedNodeGroupId?: AnnotationNodeLinkId | null,
  options?: { inputModifier?: AnnotationEnginePointQueryInputModifier }
) => void`,signature:{arguments:[{type:{name:"AnnotationGeographicCoordinate"},name:"coordinate"},{type:{name:"union",raw:"AnnotationNodeLinkId | null",elements:[{name:"string"},{name:"null"}]},name:"linkedNodeGroupId"},{type:{name:"signature",type:"object",raw:"{ inputModifier?: AnnotationEnginePointQueryInputModifier }",signature:{properties:[{key:"inputModifier",value:{name:"AnnotationEnginePointQueryInputModifier",required:!1}}]}},name:"options"}],return:{name:"void"}},required:!1}},{key:"finishesOnLoopClosure",value:{name:"boolean",required:!1}}]}}},required:!0}}]},required:!1}},{key:"pointQuery",value:{name:"signature",type:"object",raw:`{
  inputModifiers?: readonly AnnotationEnginePointQueryInputModifier[];
  onPointCreated: (context: PointQueryCreatedContext) => void;
}`,signature:{properties:[{key:"inputModifiers",value:{name:"unknown",required:!1}},{key:"onPointCreated",value:{name:"signature",type:"function",raw:"(context: PointQueryCreatedContext) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  coordinate: AnnotationGeographicCoordinate;
  linkedNodeGroupId: AnnotationNodeLinkId | null;
  inputModifier?: AnnotationEnginePointQueryInputModifier;
  activeToolType: AnnotationToolId;
  activeToolSession: AnnotationModeSession | null;
  toolSessions: AnnotationModeSessionMap;
  sessionContext: AnnotationToolSessionContext;
}`,signature:{properties:[{key:"coordinate",value:{name:"AnnotationGeographicCoordinate",required:!0}},{key:"linkedNodeGroupId",value:{name:"union",raw:"AnnotationNodeLinkId | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"inputModifier",value:{name:"AnnotationEnginePointQueryInputModifier",required:!1}},{key:"activeToolType",value:{name:"AnnotationToolId",required:!0}},{key:"activeToolSession",value:{name:"union",raw:"AnnotationModeSession | null",elements:[{name:"signature",type:"object",raw:`{
  toolType: AnnotationToolId;
  requestStart: () => void;
  requestFinish: () => boolean;
  discardDraft: () => void;
  onNodeCreated?: (
    coordinate: AnnotationGeographicCoordinate,
    linkedNodeGroupId?: AnnotationNodeLinkId | null,
    options?: { inputModifier?: AnnotationEnginePointQueryInputModifier }
  ) => void;
  finishesOnLoopClosure?: boolean;
}`,signature:{properties:[{key:"toolType",value:{name:"AnnotationToolId",required:!0}},{key:"requestStart",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}},{key:"requestFinish",value:{name:"signature",type:"function",raw:"() => boolean",signature:{arguments:[],return:{name:"boolean"}},required:!0}},{key:"discardDraft",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}},{key:"onNodeCreated",value:{name:"signature",type:"function",raw:`(
  coordinate: AnnotationGeographicCoordinate,
  linkedNodeGroupId?: AnnotationNodeLinkId | null,
  options?: { inputModifier?: AnnotationEnginePointQueryInputModifier }
) => void`,signature:{arguments:[{type:{name:"AnnotationGeographicCoordinate"},name:"coordinate"},{type:{name:"union",raw:"AnnotationNodeLinkId | null",elements:[{name:"string"},{name:"null"}]},name:"linkedNodeGroupId"},{type:{name:"signature",type:"object",raw:"{ inputModifier?: AnnotationEnginePointQueryInputModifier }",signature:{properties:[{key:"inputModifier",value:{name:"AnnotationEnginePointQueryInputModifier",required:!1}}]}},name:"options"}],return:{name:"void"}},required:!1}},{key:"finishesOnLoopClosure",value:{name:"boolean",required:!1}}]}},{name:"null"}],required:!0}},{key:"toolSessions",value:{name:"Partial",elements:[{name:"Record",elements:[{name:"AnnotationToolId"},{name:"signature",type:"object",raw:`{
  toolType: AnnotationToolId;
  requestStart: () => void;
  requestFinish: () => boolean;
  discardDraft: () => void;
  onNodeCreated?: (
    coordinate: AnnotationGeographicCoordinate,
    linkedNodeGroupId?: AnnotationNodeLinkId | null,
    options?: { inputModifier?: AnnotationEnginePointQueryInputModifier }
  ) => void;
  finishesOnLoopClosure?: boolean;
}`,signature:{properties:[{key:"toolType",value:{name:"AnnotationToolId",required:!0}},{key:"requestStart",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}},{key:"requestFinish",value:{name:"signature",type:"function",raw:"() => boolean",signature:{arguments:[],return:{name:"boolean"}},required:!0}},{key:"discardDraft",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}},{key:"onNodeCreated",value:{name:"signature",type:"function",raw:`(
  coordinate: AnnotationGeographicCoordinate,
  linkedNodeGroupId?: AnnotationNodeLinkId | null,
  options?: { inputModifier?: AnnotationEnginePointQueryInputModifier }
) => void`,signature:{arguments:[{type:{name:"AnnotationGeographicCoordinate"},name:"coordinate"},{type:{name:"union",raw:"AnnotationNodeLinkId | null",elements:[{name:"string"},{name:"null"}]},name:"linkedNodeGroupId"},{type:{name:"signature",type:"object",raw:"{ inputModifier?: AnnotationEnginePointQueryInputModifier }",signature:{properties:[{key:"inputModifier",value:{name:"AnnotationEnginePointQueryInputModifier",required:!1}}]}},name:"options"}],return:{name:"void"}},required:!1}},{key:"finishesOnLoopClosure",value:{name:"boolean",required:!1}}]}}],raw:"Record<AnnotationToolId, AnnotationModeSession>"}],raw:`Partial<
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
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"toolType",value:{name:"AnnotationType",required:!0}},{key:"nodeIds",value:{name:"unknown",required:!0}},{key:"edgeIds",value:{name:"unknown",required:!0}},{key:"displayName",value:{name:"string",required:!1}},{key:"shortLabel",value:{name:"string",required:!1}},{key:"shortLabelSource",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_SHORT_LABEL_SOURCES)[keyof typeof ANNOTATION_SHORT_LABEL_SOURCES]",required:!1}},{key:"shortLabelCounter",value:{name:"number",required:!1}},{key:"hidden",value:{name:"boolean",required:!1}},{key:"locked",value:{name:"boolean",required:!1}},{key:"annotationRole",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_ENTRY_ROLES)[keyof typeof ANNOTATION_ENTRY_ROLES]",required:!1}},{key:"readOnly",value:{name:"boolean",required:!1}},{key:"labelAppearance",value:{name:"AnnotationLabelAppearance",required:!1}},{key:"elevationDisplayMode",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_ELEVATION_DISPLAY_MODES)[keyof typeof ANNOTATION_ELEVATION_DISPLAY_MODES]",required:!1}},{key:"distanceAnchorCoordinateSelection",value:{name:"unknown[union]",raw:"(typeof RUNTIME_POINT_LABEL_COORDINATE_SELECTION)[keyof typeof RUNTIME_POINT_LABEL_COORDINATE_SELECTION]",required:!1}},{key:"distanceTriangleAnchorCoordinateRole",value:{name:"unknown[union]",raw:"(typeof RUNTIME_DISTANCE_TRIANGLE_ANCHOR_COORDINATE_ROLE)[keyof typeof RUNTIME_DISTANCE_TRIANGLE_ANCHOR_COORDINATE_ROLE]",required:!1}},{key:"closed",value:{name:"boolean",required:!1}},{key:"preferredNormalBearingRad",value:{name:"number",required:!1}},{key:"externalCollection",value:{name:"signature",type:"object",raw:`{
  type: "saved-measurement";
  id: string;
}`,signature:{properties:[{key:"type",value:{name:"literal",value:'"saved-measurement"',required:!0}},{key:"id",value:{name:"string",required:!0}}]},required:!1}},{key:"uuid",value:{name:"string",required:!1},description:"Identity across machines and shares; the runtime id only counts per session."}]},required:!0},{name:"union",raw:`| "closed"
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
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"toolType",value:{name:"AnnotationType",required:!0}},{key:"nodeIds",value:{name:"unknown",required:!0}},{key:"edgeIds",value:{name:"unknown",required:!0}},{key:"displayName",value:{name:"string",required:!1}},{key:"shortLabel",value:{name:"string",required:!1}},{key:"shortLabelSource",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_SHORT_LABEL_SOURCES)[keyof typeof ANNOTATION_SHORT_LABEL_SOURCES]",required:!1}},{key:"shortLabelCounter",value:{name:"number",required:!1}},{key:"hidden",value:{name:"boolean",required:!1}},{key:"locked",value:{name:"boolean",required:!1}},{key:"annotationRole",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_ENTRY_ROLES)[keyof typeof ANNOTATION_ENTRY_ROLES]",required:!1}},{key:"readOnly",value:{name:"boolean",required:!1}},{key:"labelAppearance",value:{name:"AnnotationLabelAppearance",required:!1}},{key:"elevationDisplayMode",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_ELEVATION_DISPLAY_MODES)[keyof typeof ANNOTATION_ELEVATION_DISPLAY_MODES]",required:!1}},{key:"distanceAnchorCoordinateSelection",value:{name:"unknown[union]",raw:"(typeof RUNTIME_POINT_LABEL_COORDINATE_SELECTION)[keyof typeof RUNTIME_POINT_LABEL_COORDINATE_SELECTION]",required:!1}},{key:"distanceTriangleAnchorCoordinateRole",value:{name:"unknown[union]",raw:"(typeof RUNTIME_DISTANCE_TRIANGLE_ANCHOR_COORDINATE_ROLE)[keyof typeof RUNTIME_DISTANCE_TRIANGLE_ANCHOR_COORDINATE_ROLE]",required:!1}},{key:"closed",value:{name:"boolean",required:!1}},{key:"preferredNormalBearingRad",value:{name:"number",required:!1}},{key:"externalCollection",value:{name:"signature",type:"object",raw:`{
  type: "saved-measurement";
  id: string;
}`,signature:{properties:[{key:"type",value:{name:"literal",value:'"saved-measurement"',required:!0}},{key:"id",value:{name:"string",required:!0}}]},required:!1}},{key:"uuid",value:{name:"string",required:!1},description:"Identity across machines and shares; the runtime id only counts per session."}]},required:!0}},required:!0}}]},required:!0}}]}},name:"context"}],return:{name:"void"}},required:!0}}]},required:!1}},{key:"addAnnotation",value:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"toolType",value:{name:"AnnotationType",required:!0}},{key:"nodeIds",value:{name:"unknown",required:!0}},{key:"edgeIds",value:{name:"unknown",required:!0}},{key:"displayName",value:{name:"string",required:!1}},{key:"shortLabel",value:{name:"string",required:!1}},{key:"shortLabelSource",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_SHORT_LABEL_SOURCES)[keyof typeof ANNOTATION_SHORT_LABEL_SOURCES]",required:!1}},{key:"shortLabelCounter",value:{name:"number",required:!1}},{key:"hidden",value:{name:"boolean",required:!1}},{key:"locked",value:{name:"boolean",required:!1}},{key:"annotationRole",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_ENTRY_ROLES)[keyof typeof ANNOTATION_ENTRY_ROLES]",required:!1}},{key:"readOnly",value:{name:"boolean",required:!1}},{key:"labelAppearance",value:{name:"AnnotationLabelAppearance",required:!1}},{key:"elevationDisplayMode",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_ELEVATION_DISPLAY_MODES)[keyof typeof ANNOTATION_ELEVATION_DISPLAY_MODES]",required:!1}},{key:"distanceAnchorCoordinateSelection",value:{name:"unknown[union]",raw:"(typeof RUNTIME_POINT_LABEL_COORDINATE_SELECTION)[keyof typeof RUNTIME_POINT_LABEL_COORDINATE_SELECTION]",required:!1}},{key:"distanceTriangleAnchorCoordinateRole",value:{name:"unknown[union]",raw:"(typeof RUNTIME_DISTANCE_TRIANGLE_ANCHOR_COORDINATE_ROLE)[keyof typeof RUNTIME_DISTANCE_TRIANGLE_ANCHOR_COORDINATE_ROLE]",required:!1}},{key:"closed",value:{name:"boolean",required:!1}},{key:"preferredNormalBearingRad",value:{name:"number",required:!1}},{key:"externalCollection",value:{name:"signature",type:"object",raw:`{
  type: "saved-measurement";
  id: string;
}`,signature:{properties:[{key:"type",value:{name:"literal",value:'"saved-measurement"',required:!0}},{key:"id",value:{name:"string",required:!0}}]},required:!1}},{key:"uuid",value:{name:"string",required:!1},description:"Identity across machines and shares; the runtime id only counts per session."}]},required:!0},{name:"union",raw:`| "closed"
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
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"toolType",value:{name:"AnnotationType",required:!0}},{key:"nodeIds",value:{name:"unknown",required:!0}},{key:"edgeIds",value:{name:"unknown",required:!0}},{key:"displayName",value:{name:"string",required:!1}},{key:"shortLabel",value:{name:"string",required:!1}},{key:"shortLabelSource",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_SHORT_LABEL_SOURCES)[keyof typeof ANNOTATION_SHORT_LABEL_SOURCES]",required:!1}},{key:"shortLabelCounter",value:{name:"number",required:!1}},{key:"hidden",value:{name:"boolean",required:!1}},{key:"locked",value:{name:"boolean",required:!1}},{key:"annotationRole",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_ENTRY_ROLES)[keyof typeof ANNOTATION_ENTRY_ROLES]",required:!1}},{key:"readOnly",value:{name:"boolean",required:!1}},{key:"labelAppearance",value:{name:"AnnotationLabelAppearance",required:!1}},{key:"elevationDisplayMode",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_ELEVATION_DISPLAY_MODES)[keyof typeof ANNOTATION_ELEVATION_DISPLAY_MODES]",required:!1}},{key:"distanceAnchorCoordinateSelection",value:{name:"unknown[union]",raw:"(typeof RUNTIME_POINT_LABEL_COORDINATE_SELECTION)[keyof typeof RUNTIME_POINT_LABEL_COORDINATE_SELECTION]",required:!1}},{key:"distanceTriangleAnchorCoordinateRole",value:{name:"unknown[union]",raw:"(typeof RUNTIME_DISTANCE_TRIANGLE_ANCHOR_COORDINATE_ROLE)[keyof typeof RUNTIME_DISTANCE_TRIANGLE_ANCHOR_COORDINATE_ROLE]",required:!1}},{key:"closed",value:{name:"boolean",required:!1}},{key:"preferredNormalBearingRad",value:{name:"number",required:!1}},{key:"externalCollection",value:{name:"signature",type:"object",raw:`{
  type: "saved-measurement";
  id: string;
}`,signature:{properties:[{key:"type",value:{name:"literal",value:'"saved-measurement"',required:!0}},{key:"id",value:{name:"string",required:!0}}]},required:!1}},{key:"uuid",value:{name:"string",required:!1},description:"Identity across machines and shares; the runtime id only counts per session."}]},required:!0},{name:"union",raw:`| "closed"
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
  inputModifier?: AnnotationEnginePointQueryInputModifier;
}`,signature:{properties:[{key:"coordinate",value:{name:"union",raw:"AnnotationGeographicCoordinate | null",elements:[{name:"AnnotationGeographicCoordinate"},{name:"null"}],required:!0}},{key:"screenPosition",value:{name:"union",raw:"{ x: number; y: number } | null",elements:[{name:"signature",type:"object",raw:"{ x: number; y: number }",signature:{properties:[{key:"x",value:{name:"number",required:!0}},{key:"y",value:{name:"number",required:!0}}]}},{name:"null"}],required:!0}},{key:"pointECEF",value:{name:"union",raw:"Vector3 | null",elements:[{name:"Vector3"},{name:"null"}],required:!0}},{key:"surfaceNormalECEF",value:{name:"union",raw:"Vector3 | null",elements:[{name:"Vector3"},{name:"null"}],required:!0}},{key:"inputModifier",value:{name:"AnnotationEnginePointQueryInputModifier",required:!1}}]}},{name:"null"}]},name:"pickResult"},{type:{name:"signature",type:"object",raw:"{ requestRender?: boolean }",signature:{properties:[{key:"requestRender",value:{name:"boolean",required:!1}}]}},name:"options"}],return:{name:"void"}},required:!0}},{key:"isPointQueryPickResultAcceptable",value:{name:"signature",type:"function",raw:"() => boolean",signature:{arguments:[],return:{name:"boolean"}},required:!1}},{key:"getPointQueryVisualStyle",value:{name:"signature",type:"function",raw:"() => AnnotationPointQueryVisualStyle | undefined",signature:{arguments:[],return:{name:"union",raw:"AnnotationPointQueryVisualStyle | undefined",elements:[{name:"union",raw:`Readonly<{
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
    options?: { inputModifier?: AnnotationEnginePointQueryInputModifier }
  ) => void;
  finishesOnLoopClosure?: boolean;
}`,signature:{properties:[{key:"toolType",value:{name:"AnnotationToolId",required:!0}},{key:"requestStart",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}},{key:"requestFinish",value:{name:"signature",type:"function",raw:"() => boolean",signature:{arguments:[],return:{name:"boolean"}},required:!0}},{key:"discardDraft",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}},{key:"onNodeCreated",value:{name:"signature",type:"function",raw:`(
  coordinate: AnnotationGeographicCoordinate,
  linkedNodeGroupId?: AnnotationNodeLinkId | null,
  options?: { inputModifier?: AnnotationEnginePointQueryInputModifier }
) => void`,signature:{arguments:[{type:{name:"AnnotationGeographicCoordinate"},name:"coordinate"},{type:{name:"union",raw:"AnnotationNodeLinkId | null",elements:[{name:"string"},{name:"null"}]},name:"linkedNodeGroupId"},{type:{name:"signature",type:"object",raw:"{ inputModifier?: AnnotationEnginePointQueryInputModifier }",signature:{properties:[{key:"inputModifier",value:{name:"AnnotationEnginePointQueryInputModifier",required:!1}}]}},name:"options"}],return:{name:"void"}},required:!1}},{key:"finishesOnLoopClosure",value:{name:"boolean",required:!1}}]}},{name:"null"}],required:!0}},{key:"requestFinishMeasurement",value:{name:"signature",type:"function",raw:"() => boolean",signature:{arguments:[],return:{name:"boolean"}},required:!0}},{key:"requestActivateTool",value:{name:"signature",type:"function",raw:"(toolId?: AnnotationToolId) => void",signature:{arguments:[{type:{name:"AnnotationToolId"},name:"toolId"}],return:{name:"void"}},required:!0}},{key:"requestModeChange",value:{name:"signature",type:"function",raw:"(toolId: AnnotationToolId) => void",signature:{arguments:[{type:{name:"AnnotationToolId"},name:"toolId"}],return:{name:"void"}},required:!0}},{key:"sessionContext",value:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"toolType",value:{name:"AnnotationType",required:!0}},{key:"nodeIds",value:{name:"unknown",required:!0}},{key:"edgeIds",value:{name:"unknown",required:!0}},{key:"displayName",value:{name:"string",required:!1}},{key:"shortLabel",value:{name:"string",required:!1}},{key:"shortLabelSource",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_SHORT_LABEL_SOURCES)[keyof typeof ANNOTATION_SHORT_LABEL_SOURCES]",required:!1}},{key:"shortLabelCounter",value:{name:"number",required:!1}},{key:"hidden",value:{name:"boolean",required:!1}},{key:"locked",value:{name:"boolean",required:!1}},{key:"annotationRole",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_ENTRY_ROLES)[keyof typeof ANNOTATION_ENTRY_ROLES]",required:!1}},{key:"readOnly",value:{name:"boolean",required:!1}},{key:"labelAppearance",value:{name:"AnnotationLabelAppearance",required:!1}},{key:"elevationDisplayMode",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_ELEVATION_DISPLAY_MODES)[keyof typeof ANNOTATION_ELEVATION_DISPLAY_MODES]",required:!1}},{key:"distanceAnchorCoordinateSelection",value:{name:"unknown[union]",raw:"(typeof RUNTIME_POINT_LABEL_COORDINATE_SELECTION)[keyof typeof RUNTIME_POINT_LABEL_COORDINATE_SELECTION]",required:!1}},{key:"distanceTriangleAnchorCoordinateRole",value:{name:"unknown[union]",raw:"(typeof RUNTIME_DISTANCE_TRIANGLE_ANCHOR_COORDINATE_ROLE)[keyof typeof RUNTIME_DISTANCE_TRIANGLE_ANCHOR_COORDINATE_ROLE]",required:!1}},{key:"closed",value:{name:"boolean",required:!1}},{key:"preferredNormalBearingRad",value:{name:"number",required:!1}},{key:"externalCollection",value:{name:"signature",type:"object",raw:`{
  type: "saved-measurement";
  id: string;
}`,signature:{properties:[{key:"type",value:{name:"literal",value:'"saved-measurement"',required:!0}},{key:"id",value:{name:"string",required:!0}}]},required:!1}},{key:"uuid",value:{name:"string",required:!1},description:"Identity across machines and shares; the runtime id only counts per session."}]},required:!0},{name:"union",raw:`| "closed"
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
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"toolType",value:{name:"AnnotationType",required:!0}},{key:"nodeIds",value:{name:"unknown",required:!0}},{key:"edgeIds",value:{name:"unknown",required:!0}},{key:"displayName",value:{name:"string",required:!1}},{key:"shortLabel",value:{name:"string",required:!1}},{key:"shortLabelSource",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_SHORT_LABEL_SOURCES)[keyof typeof ANNOTATION_SHORT_LABEL_SOURCES]",required:!1}},{key:"shortLabelCounter",value:{name:"number",required:!1}},{key:"hidden",value:{name:"boolean",required:!1}},{key:"locked",value:{name:"boolean",required:!1}},{key:"annotationRole",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_ENTRY_ROLES)[keyof typeof ANNOTATION_ENTRY_ROLES]",required:!1}},{key:"readOnly",value:{name:"boolean",required:!1}},{key:"labelAppearance",value:{name:"AnnotationLabelAppearance",required:!1}},{key:"elevationDisplayMode",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_ELEVATION_DISPLAY_MODES)[keyof typeof ANNOTATION_ELEVATION_DISPLAY_MODES]",required:!1}},{key:"distanceAnchorCoordinateSelection",value:{name:"unknown[union]",raw:"(typeof RUNTIME_POINT_LABEL_COORDINATE_SELECTION)[keyof typeof RUNTIME_POINT_LABEL_COORDINATE_SELECTION]",required:!1}},{key:"distanceTriangleAnchorCoordinateRole",value:{name:"unknown[union]",raw:"(typeof RUNTIME_DISTANCE_TRIANGLE_ANCHOR_COORDINATE_ROLE)[keyof typeof RUNTIME_DISTANCE_TRIANGLE_ANCHOR_COORDINATE_ROLE]",required:!1}},{key:"closed",value:{name:"boolean",required:!1}},{key:"preferredNormalBearingRad",value:{name:"number",required:!1}},{key:"externalCollection",value:{name:"signature",type:"object",raw:`{
  type: "saved-measurement";
  id: string;
}`,signature:{properties:[{key:"type",value:{name:"literal",value:'"saved-measurement"',required:!0}},{key:"id",value:{name:"string",required:!0}}]},required:!1}},{key:"uuid",value:{name:"string",required:!1},description:"Identity across machines and shares; the runtime id only counts per session."}]},required:!0}},required:!0}}]},required:!0}}]}},name:"context"}],return:{name:"boolean"}},required:!0}}]},required:!1}},{key:"visualModels",value:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"toolType",value:{name:"AnnotationType",required:!0}},{key:"nodeIds",value:{name:"unknown",required:!0}},{key:"edgeIds",value:{name:"unknown",required:!0}},{key:"displayName",value:{name:"string",required:!1}},{key:"shortLabel",value:{name:"string",required:!1}},{key:"shortLabelSource",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_SHORT_LABEL_SOURCES)[keyof typeof ANNOTATION_SHORT_LABEL_SOURCES]",required:!1}},{key:"shortLabelCounter",value:{name:"number",required:!1}},{key:"hidden",value:{name:"boolean",required:!1}},{key:"locked",value:{name:"boolean",required:!1}},{key:"annotationRole",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_ENTRY_ROLES)[keyof typeof ANNOTATION_ENTRY_ROLES]",required:!1}},{key:"readOnly",value:{name:"boolean",required:!1}},{key:"labelAppearance",value:{name:"AnnotationLabelAppearance",required:!1}},{key:"elevationDisplayMode",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_ELEVATION_DISPLAY_MODES)[keyof typeof ANNOTATION_ELEVATION_DISPLAY_MODES]",required:!1}},{key:"distanceAnchorCoordinateSelection",value:{name:"unknown[union]",raw:"(typeof RUNTIME_POINT_LABEL_COORDINATE_SELECTION)[keyof typeof RUNTIME_POINT_LABEL_COORDINATE_SELECTION]",required:!1}},{key:"distanceTriangleAnchorCoordinateRole",value:{name:"unknown[union]",raw:"(typeof RUNTIME_DISTANCE_TRIANGLE_ANCHOR_COORDINATE_ROLE)[keyof typeof RUNTIME_DISTANCE_TRIANGLE_ANCHOR_COORDINATE_ROLE]",required:!1}},{key:"closed",value:{name:"boolean",required:!1}},{key:"preferredNormalBearingRad",value:{name:"number",required:!1}},{key:"externalCollection",value:{name:"signature",type:"object",raw:`{
  type: "saved-measurement";
  id: string;
}`,signature:{properties:[{key:"type",value:{name:"literal",value:'"saved-measurement"',required:!0}},{key:"id",value:{name:"string",required:!0}}]},required:!1}},{key:"uuid",value:{name:"string",required:!1},description:"Identity across machines and shares; the runtime id only counts per session."}]},required:!0}},{key:"annotationEntries",value:{name:"unknown",required:!0}},{key:"nodes",value:{name:"unknown",required:!0}},{key:"selectedAnnotationId",value:{name:"string",required:!0}},{key:"setSelectedAnnotationId",value:{name:"signature",type:"function",raw:"(annotationId: string | null) => void",signature:{arguments:[{type:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},name:"annotationId"}],return:{name:"void"}},required:!0}},{key:"focusAnnotationId",value:{name:"signature",type:"function",raw:"(annotationId: string | null) => void",signature:{arguments:[{type:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},name:"annotationId"}],return:{name:"void"}},required:!0}},{key:"flyToAllAnnotations",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}},{key:"removeAnnotationById",value:{name:"signature",type:"function",raw:`(
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
  /** How the nodes of this tool's measurements may be edited; none edits them freely. */
  nodeEdit?: AnnotationNodeEditRule;
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
    inputModifiers?: readonly AnnotationEnginePointQueryInputModifier[];
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
}`,signature:{properties:[{key:"id",value:{name:"AnnotationToolId",required:!0}},{key:"kind",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_TOOL_PLUGIN_KINDS)[keyof typeof ANNOTATION_TOOL_PLUGIN_KINDS]",required:!0}},{key:"annotationType",value:{name:"union",raw:'StoredAnnotation["toolType"] | null',elements:[{name:"AnnotationType",raw:'StoredAnnotation["toolType"]'},{name:"null"}],required:!1}},{key:"nodeEdit",value:{name:"signature",type:"object",raw:`{
  frame: AnnotationNodeEditFrame;
  /** Axis arrows: the local vertical, or the three axes of a reference edge. */
  axes: boolean;
  /** The centre handle follows the surface under the pointer, unless a plane is held. */
  surfaceDrag: boolean;
  /** Moves are projected onto the measurement's own plane. */
  projectOntoMeasurementPlane: boolean;
  /** A snap may join a node off the held plane; by default it is refused. */
  joinOffPlaneNodes?: boolean;
}`,signature:{properties:[{key:"frame",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_NODE_EDIT_FRAMES)[keyof typeof ANNOTATION_NODE_EDIT_FRAMES]",required:!0}},{key:"axes",value:{name:"boolean",required:!0},description:"Axis arrows: the local vertical, or the three axes of a reference edge."},{key:"surfaceDrag",value:{name:"boolean",required:!0},description:"The centre handle follows the surface under the pointer, unless a plane is held."},{key:"projectOntoMeasurementPlane",value:{name:"boolean",required:!0},description:"Moves are projected onto the measurement's own plane."},{key:"joinOffPlaneNodes",value:{name:"boolean",required:!1},description:"A snap may join a node off the held plane; by default it is refused."}]},required:!1},description:"How the nodes of this tool's measurements may be edited; none edits them freely."},{key:"descriptor",value:{name:"signature",type:"object",raw:`{
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
  inputModifier?: AnnotationEnginePointQueryInputModifier;
}`,signature:{properties:[{key:"coordinate",value:{name:"union",raw:"AnnotationGeographicCoordinate | null",elements:[{name:"AnnotationGeographicCoordinate"},{name:"null"}],required:!0}},{key:"screenPosition",value:{name:"union",raw:"{ x: number; y: number } | null",elements:[{name:"signature",type:"object",raw:"{ x: number; y: number }",signature:{properties:[{key:"x",value:{name:"number",required:!0}},{key:"y",value:{name:"number",required:!0}}]}},{name:"null"}],required:!0}},{key:"pointECEF",value:{name:"union",raw:"Vector3 | null",elements:[{name:"Vector3"},{name:"null"}],required:!0}},{key:"surfaceNormalECEF",value:{name:"union",raw:"Vector3 | null",elements:[{name:"Vector3"},{name:"null"}],required:!0}},{key:"inputModifier",value:{name:"AnnotationEnginePointQueryInputModifier",required:!1}}]}},{name:"null"}],required:!1}}]}},name:"context"}],return:{name:"unknown"}},required:!1}},{key:"alwaysShowHelpTextWhileActive",value:{name:"boolean",required:!1}},{key:"capabilities",value:{name:"unknown",required:!1}},{key:"session",value:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"toolType",value:{name:"AnnotationType",required:!0}},{key:"nodeIds",value:{name:"unknown",required:!0}},{key:"edgeIds",value:{name:"unknown",required:!0}},{key:"displayName",value:{name:"string",required:!1}},{key:"shortLabel",value:{name:"string",required:!1}},{key:"shortLabelSource",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_SHORT_LABEL_SOURCES)[keyof typeof ANNOTATION_SHORT_LABEL_SOURCES]",required:!1}},{key:"shortLabelCounter",value:{name:"number",required:!1}},{key:"hidden",value:{name:"boolean",required:!1}},{key:"locked",value:{name:"boolean",required:!1}},{key:"annotationRole",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_ENTRY_ROLES)[keyof typeof ANNOTATION_ENTRY_ROLES]",required:!1}},{key:"readOnly",value:{name:"boolean",required:!1}},{key:"labelAppearance",value:{name:"AnnotationLabelAppearance",required:!1}},{key:"elevationDisplayMode",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_ELEVATION_DISPLAY_MODES)[keyof typeof ANNOTATION_ELEVATION_DISPLAY_MODES]",required:!1}},{key:"distanceAnchorCoordinateSelection",value:{name:"unknown[union]",raw:"(typeof RUNTIME_POINT_LABEL_COORDINATE_SELECTION)[keyof typeof RUNTIME_POINT_LABEL_COORDINATE_SELECTION]",required:!1}},{key:"distanceTriangleAnchorCoordinateRole",value:{name:"unknown[union]",raw:"(typeof RUNTIME_DISTANCE_TRIANGLE_ANCHOR_COORDINATE_ROLE)[keyof typeof RUNTIME_DISTANCE_TRIANGLE_ANCHOR_COORDINATE_ROLE]",required:!1}},{key:"closed",value:{name:"boolean",required:!1}},{key:"preferredNormalBearingRad",value:{name:"number",required:!1}},{key:"externalCollection",value:{name:"signature",type:"object",raw:`{
  type: "saved-measurement";
  id: string;
}`,signature:{properties:[{key:"type",value:{name:"literal",value:'"saved-measurement"',required:!0}},{key:"id",value:{name:"string",required:!0}}]},required:!1}},{key:"uuid",value:{name:"string",required:!1},description:"Identity across machines and shares; the runtime id only counts per session."}]},required:!0},{name:"union",raw:`| "closed"
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
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"toolType",value:{name:"AnnotationType",required:!0}},{key:"nodeIds",value:{name:"unknown",required:!0}},{key:"edgeIds",value:{name:"unknown",required:!0}},{key:"displayName",value:{name:"string",required:!1}},{key:"shortLabel",value:{name:"string",required:!1}},{key:"shortLabelSource",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_SHORT_LABEL_SOURCES)[keyof typeof ANNOTATION_SHORT_LABEL_SOURCES]",required:!1}},{key:"shortLabelCounter",value:{name:"number",required:!1}},{key:"hidden",value:{name:"boolean",required:!1}},{key:"locked",value:{name:"boolean",required:!1}},{key:"annotationRole",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_ENTRY_ROLES)[keyof typeof ANNOTATION_ENTRY_ROLES]",required:!1}},{key:"readOnly",value:{name:"boolean",required:!1}},{key:"labelAppearance",value:{name:"AnnotationLabelAppearance",required:!1}},{key:"elevationDisplayMode",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_ELEVATION_DISPLAY_MODES)[keyof typeof ANNOTATION_ELEVATION_DISPLAY_MODES]",required:!1}},{key:"distanceAnchorCoordinateSelection",value:{name:"unknown[union]",raw:"(typeof RUNTIME_POINT_LABEL_COORDINATE_SELECTION)[keyof typeof RUNTIME_POINT_LABEL_COORDINATE_SELECTION]",required:!1}},{key:"distanceTriangleAnchorCoordinateRole",value:{name:"unknown[union]",raw:"(typeof RUNTIME_DISTANCE_TRIANGLE_ANCHOR_COORDINATE_ROLE)[keyof typeof RUNTIME_DISTANCE_TRIANGLE_ANCHOR_COORDINATE_ROLE]",required:!1}},{key:"closed",value:{name:"boolean",required:!1}},{key:"preferredNormalBearingRad",value:{name:"number",required:!1}},{key:"externalCollection",value:{name:"signature",type:"object",raw:`{
  type: "saved-measurement";
  id: string;
}`,signature:{properties:[{key:"type",value:{name:"literal",value:'"saved-measurement"',required:!0}},{key:"id",value:{name:"string",required:!0}}]},required:!1}},{key:"uuid",value:{name:"string",required:!1},description:"Identity across machines and shares; the runtime id only counts per session."}]},required:!0}},required:!0}}]},required:!0},name:"context"}],return:{name:"signature",type:"object",raw:`{
  toolType: AnnotationToolId;
  requestStart: () => void;
  requestFinish: () => boolean;
  discardDraft: () => void;
  onNodeCreated?: (
    coordinate: AnnotationGeographicCoordinate,
    linkedNodeGroupId?: AnnotationNodeLinkId | null,
    options?: { inputModifier?: AnnotationEnginePointQueryInputModifier }
  ) => void;
  finishesOnLoopClosure?: boolean;
}`,signature:{properties:[{key:"toolType",value:{name:"AnnotationToolId",required:!0}},{key:"requestStart",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}},{key:"requestFinish",value:{name:"signature",type:"function",raw:"() => boolean",signature:{arguments:[],return:{name:"boolean"}},required:!0}},{key:"discardDraft",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}},{key:"onNodeCreated",value:{name:"signature",type:"function",raw:`(
  coordinate: AnnotationGeographicCoordinate,
  linkedNodeGroupId?: AnnotationNodeLinkId | null,
  options?: { inputModifier?: AnnotationEnginePointQueryInputModifier }
) => void`,signature:{arguments:[{type:{name:"AnnotationGeographicCoordinate"},name:"coordinate"},{type:{name:"union",raw:"AnnotationNodeLinkId | null",elements:[{name:"string"},{name:"null"}]},name:"linkedNodeGroupId"},{type:{name:"signature",type:"object",raw:"{ inputModifier?: AnnotationEnginePointQueryInputModifier }",signature:{properties:[{key:"inputModifier",value:{name:"AnnotationEnginePointQueryInputModifier",required:!1}}]}},name:"options"}],return:{name:"void"}},required:!1}},{key:"finishesOnLoopClosure",value:{name:"boolean",required:!1}}]}}},required:!0}}]},required:!1}},{key:"pointQuery",value:{name:"signature",type:"object",raw:`{
  inputModifiers?: readonly AnnotationEnginePointQueryInputModifier[];
  onPointCreated: (context: PointQueryCreatedContext) => void;
}`,signature:{properties:[{key:"inputModifiers",value:{name:"unknown",required:!1}},{key:"onPointCreated",value:{name:"signature",type:"function",raw:"(context: PointQueryCreatedContext) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  coordinate: AnnotationGeographicCoordinate;
  linkedNodeGroupId: AnnotationNodeLinkId | null;
  inputModifier?: AnnotationEnginePointQueryInputModifier;
  activeToolType: AnnotationToolId;
  activeToolSession: AnnotationModeSession | null;
  toolSessions: AnnotationModeSessionMap;
  sessionContext: AnnotationToolSessionContext;
}`,signature:{properties:[{key:"coordinate",value:{name:"AnnotationGeographicCoordinate",required:!0}},{key:"linkedNodeGroupId",value:{name:"union",raw:"AnnotationNodeLinkId | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"inputModifier",value:{name:"AnnotationEnginePointQueryInputModifier",required:!1}},{key:"activeToolType",value:{name:"AnnotationToolId",required:!0}},{key:"activeToolSession",value:{name:"union",raw:"AnnotationModeSession | null",elements:[{name:"signature",type:"object",raw:`{
  toolType: AnnotationToolId;
  requestStart: () => void;
  requestFinish: () => boolean;
  discardDraft: () => void;
  onNodeCreated?: (
    coordinate: AnnotationGeographicCoordinate,
    linkedNodeGroupId?: AnnotationNodeLinkId | null,
    options?: { inputModifier?: AnnotationEnginePointQueryInputModifier }
  ) => void;
  finishesOnLoopClosure?: boolean;
}`,signature:{properties:[{key:"toolType",value:{name:"AnnotationToolId",required:!0}},{key:"requestStart",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}},{key:"requestFinish",value:{name:"signature",type:"function",raw:"() => boolean",signature:{arguments:[],return:{name:"boolean"}},required:!0}},{key:"discardDraft",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}},{key:"onNodeCreated",value:{name:"signature",type:"function",raw:`(
  coordinate: AnnotationGeographicCoordinate,
  linkedNodeGroupId?: AnnotationNodeLinkId | null,
  options?: { inputModifier?: AnnotationEnginePointQueryInputModifier }
) => void`,signature:{arguments:[{type:{name:"AnnotationGeographicCoordinate"},name:"coordinate"},{type:{name:"union",raw:"AnnotationNodeLinkId | null",elements:[{name:"string"},{name:"null"}]},name:"linkedNodeGroupId"},{type:{name:"signature",type:"object",raw:"{ inputModifier?: AnnotationEnginePointQueryInputModifier }",signature:{properties:[{key:"inputModifier",value:{name:"AnnotationEnginePointQueryInputModifier",required:!1}}]}},name:"options"}],return:{name:"void"}},required:!1}},{key:"finishesOnLoopClosure",value:{name:"boolean",required:!1}}]}},{name:"null"}],required:!0}},{key:"toolSessions",value:{name:"Partial",elements:[{name:"Record",elements:[{name:"AnnotationToolId"},{name:"signature",type:"object",raw:`{
  toolType: AnnotationToolId;
  requestStart: () => void;
  requestFinish: () => boolean;
  discardDraft: () => void;
  onNodeCreated?: (
    coordinate: AnnotationGeographicCoordinate,
    linkedNodeGroupId?: AnnotationNodeLinkId | null,
    options?: { inputModifier?: AnnotationEnginePointQueryInputModifier }
  ) => void;
  finishesOnLoopClosure?: boolean;
}`,signature:{properties:[{key:"toolType",value:{name:"AnnotationToolId",required:!0}},{key:"requestStart",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}},{key:"requestFinish",value:{name:"signature",type:"function",raw:"() => boolean",signature:{arguments:[],return:{name:"boolean"}},required:!0}},{key:"discardDraft",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}},{key:"onNodeCreated",value:{name:"signature",type:"function",raw:`(
  coordinate: AnnotationGeographicCoordinate,
  linkedNodeGroupId?: AnnotationNodeLinkId | null,
  options?: { inputModifier?: AnnotationEnginePointQueryInputModifier }
) => void`,signature:{arguments:[{type:{name:"AnnotationGeographicCoordinate"},name:"coordinate"},{type:{name:"union",raw:"AnnotationNodeLinkId | null",elements:[{name:"string"},{name:"null"}]},name:"linkedNodeGroupId"},{type:{name:"signature",type:"object",raw:"{ inputModifier?: AnnotationEnginePointQueryInputModifier }",signature:{properties:[{key:"inputModifier",value:{name:"AnnotationEnginePointQueryInputModifier",required:!1}}]}},name:"options"}],return:{name:"void"}},required:!1}},{key:"finishesOnLoopClosure",value:{name:"boolean",required:!1}}]}}],raw:"Record<AnnotationToolId, AnnotationModeSession>"}],raw:`Partial<
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
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"toolType",value:{name:"AnnotationType",required:!0}},{key:"nodeIds",value:{name:"unknown",required:!0}},{key:"edgeIds",value:{name:"unknown",required:!0}},{key:"displayName",value:{name:"string",required:!1}},{key:"shortLabel",value:{name:"string",required:!1}},{key:"shortLabelSource",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_SHORT_LABEL_SOURCES)[keyof typeof ANNOTATION_SHORT_LABEL_SOURCES]",required:!1}},{key:"shortLabelCounter",value:{name:"number",required:!1}},{key:"hidden",value:{name:"boolean",required:!1}},{key:"locked",value:{name:"boolean",required:!1}},{key:"annotationRole",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_ENTRY_ROLES)[keyof typeof ANNOTATION_ENTRY_ROLES]",required:!1}},{key:"readOnly",value:{name:"boolean",required:!1}},{key:"labelAppearance",value:{name:"AnnotationLabelAppearance",required:!1}},{key:"elevationDisplayMode",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_ELEVATION_DISPLAY_MODES)[keyof typeof ANNOTATION_ELEVATION_DISPLAY_MODES]",required:!1}},{key:"distanceAnchorCoordinateSelection",value:{name:"unknown[union]",raw:"(typeof RUNTIME_POINT_LABEL_COORDINATE_SELECTION)[keyof typeof RUNTIME_POINT_LABEL_COORDINATE_SELECTION]",required:!1}},{key:"distanceTriangleAnchorCoordinateRole",value:{name:"unknown[union]",raw:"(typeof RUNTIME_DISTANCE_TRIANGLE_ANCHOR_COORDINATE_ROLE)[keyof typeof RUNTIME_DISTANCE_TRIANGLE_ANCHOR_COORDINATE_ROLE]",required:!1}},{key:"closed",value:{name:"boolean",required:!1}},{key:"preferredNormalBearingRad",value:{name:"number",required:!1}},{key:"externalCollection",value:{name:"signature",type:"object",raw:`{
  type: "saved-measurement";
  id: string;
}`,signature:{properties:[{key:"type",value:{name:"literal",value:'"saved-measurement"',required:!0}},{key:"id",value:{name:"string",required:!0}}]},required:!1}},{key:"uuid",value:{name:"string",required:!1},description:"Identity across machines and shares; the runtime id only counts per session."}]},required:!0},{name:"union",raw:`| "closed"
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
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"toolType",value:{name:"AnnotationType",required:!0}},{key:"nodeIds",value:{name:"unknown",required:!0}},{key:"edgeIds",value:{name:"unknown",required:!0}},{key:"displayName",value:{name:"string",required:!1}},{key:"shortLabel",value:{name:"string",required:!1}},{key:"shortLabelSource",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_SHORT_LABEL_SOURCES)[keyof typeof ANNOTATION_SHORT_LABEL_SOURCES]",required:!1}},{key:"shortLabelCounter",value:{name:"number",required:!1}},{key:"hidden",value:{name:"boolean",required:!1}},{key:"locked",value:{name:"boolean",required:!1}},{key:"annotationRole",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_ENTRY_ROLES)[keyof typeof ANNOTATION_ENTRY_ROLES]",required:!1}},{key:"readOnly",value:{name:"boolean",required:!1}},{key:"labelAppearance",value:{name:"AnnotationLabelAppearance",required:!1}},{key:"elevationDisplayMode",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_ELEVATION_DISPLAY_MODES)[keyof typeof ANNOTATION_ELEVATION_DISPLAY_MODES]",required:!1}},{key:"distanceAnchorCoordinateSelection",value:{name:"unknown[union]",raw:"(typeof RUNTIME_POINT_LABEL_COORDINATE_SELECTION)[keyof typeof RUNTIME_POINT_LABEL_COORDINATE_SELECTION]",required:!1}},{key:"distanceTriangleAnchorCoordinateRole",value:{name:"unknown[union]",raw:"(typeof RUNTIME_DISTANCE_TRIANGLE_ANCHOR_COORDINATE_ROLE)[keyof typeof RUNTIME_DISTANCE_TRIANGLE_ANCHOR_COORDINATE_ROLE]",required:!1}},{key:"closed",value:{name:"boolean",required:!1}},{key:"preferredNormalBearingRad",value:{name:"number",required:!1}},{key:"externalCollection",value:{name:"signature",type:"object",raw:`{
  type: "saved-measurement";
  id: string;
}`,signature:{properties:[{key:"type",value:{name:"literal",value:'"saved-measurement"',required:!0}},{key:"id",value:{name:"string",required:!0}}]},required:!1}},{key:"uuid",value:{name:"string",required:!1},description:"Identity across machines and shares; the runtime id only counts per session."}]},required:!0}},required:!0}}]},required:!0}}]}},name:"context"}],return:{name:"void"}},required:!0}}]},required:!1}},{key:"addAnnotation",value:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"toolType",value:{name:"AnnotationType",required:!0}},{key:"nodeIds",value:{name:"unknown",required:!0}},{key:"edgeIds",value:{name:"unknown",required:!0}},{key:"displayName",value:{name:"string",required:!1}},{key:"shortLabel",value:{name:"string",required:!1}},{key:"shortLabelSource",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_SHORT_LABEL_SOURCES)[keyof typeof ANNOTATION_SHORT_LABEL_SOURCES]",required:!1}},{key:"shortLabelCounter",value:{name:"number",required:!1}},{key:"hidden",value:{name:"boolean",required:!1}},{key:"locked",value:{name:"boolean",required:!1}},{key:"annotationRole",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_ENTRY_ROLES)[keyof typeof ANNOTATION_ENTRY_ROLES]",required:!1}},{key:"readOnly",value:{name:"boolean",required:!1}},{key:"labelAppearance",value:{name:"AnnotationLabelAppearance",required:!1}},{key:"elevationDisplayMode",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_ELEVATION_DISPLAY_MODES)[keyof typeof ANNOTATION_ELEVATION_DISPLAY_MODES]",required:!1}},{key:"distanceAnchorCoordinateSelection",value:{name:"unknown[union]",raw:"(typeof RUNTIME_POINT_LABEL_COORDINATE_SELECTION)[keyof typeof RUNTIME_POINT_LABEL_COORDINATE_SELECTION]",required:!1}},{key:"distanceTriangleAnchorCoordinateRole",value:{name:"unknown[union]",raw:"(typeof RUNTIME_DISTANCE_TRIANGLE_ANCHOR_COORDINATE_ROLE)[keyof typeof RUNTIME_DISTANCE_TRIANGLE_ANCHOR_COORDINATE_ROLE]",required:!1}},{key:"closed",value:{name:"boolean",required:!1}},{key:"preferredNormalBearingRad",value:{name:"number",required:!1}},{key:"externalCollection",value:{name:"signature",type:"object",raw:`{
  type: "saved-measurement";
  id: string;
}`,signature:{properties:[{key:"type",value:{name:"literal",value:'"saved-measurement"',required:!0}},{key:"id",value:{name:"string",required:!0}}]},required:!1}},{key:"uuid",value:{name:"string",required:!1},description:"Identity across machines and shares; the runtime id only counts per session."}]},required:!0},{name:"union",raw:`| "closed"
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
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"toolType",value:{name:"AnnotationType",required:!0}},{key:"nodeIds",value:{name:"unknown",required:!0}},{key:"edgeIds",value:{name:"unknown",required:!0}},{key:"displayName",value:{name:"string",required:!1}},{key:"shortLabel",value:{name:"string",required:!1}},{key:"shortLabelSource",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_SHORT_LABEL_SOURCES)[keyof typeof ANNOTATION_SHORT_LABEL_SOURCES]",required:!1}},{key:"shortLabelCounter",value:{name:"number",required:!1}},{key:"hidden",value:{name:"boolean",required:!1}},{key:"locked",value:{name:"boolean",required:!1}},{key:"annotationRole",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_ENTRY_ROLES)[keyof typeof ANNOTATION_ENTRY_ROLES]",required:!1}},{key:"readOnly",value:{name:"boolean",required:!1}},{key:"labelAppearance",value:{name:"AnnotationLabelAppearance",required:!1}},{key:"elevationDisplayMode",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_ELEVATION_DISPLAY_MODES)[keyof typeof ANNOTATION_ELEVATION_DISPLAY_MODES]",required:!1}},{key:"distanceAnchorCoordinateSelection",value:{name:"unknown[union]",raw:"(typeof RUNTIME_POINT_LABEL_COORDINATE_SELECTION)[keyof typeof RUNTIME_POINT_LABEL_COORDINATE_SELECTION]",required:!1}},{key:"distanceTriangleAnchorCoordinateRole",value:{name:"unknown[union]",raw:"(typeof RUNTIME_DISTANCE_TRIANGLE_ANCHOR_COORDINATE_ROLE)[keyof typeof RUNTIME_DISTANCE_TRIANGLE_ANCHOR_COORDINATE_ROLE]",required:!1}},{key:"closed",value:{name:"boolean",required:!1}},{key:"preferredNormalBearingRad",value:{name:"number",required:!1}},{key:"externalCollection",value:{name:"signature",type:"object",raw:`{
  type: "saved-measurement";
  id: string;
}`,signature:{properties:[{key:"type",value:{name:"literal",value:'"saved-measurement"',required:!0}},{key:"id",value:{name:"string",required:!0}}]},required:!1}},{key:"uuid",value:{name:"string",required:!1},description:"Identity across machines and shares; the runtime id only counts per session."}]},required:!0},{name:"union",raw:`| "closed"
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
  inputModifier?: AnnotationEnginePointQueryInputModifier;
}`,signature:{properties:[{key:"coordinate",value:{name:"union",raw:"AnnotationGeographicCoordinate | null",elements:[{name:"AnnotationGeographicCoordinate"},{name:"null"}],required:!0}},{key:"screenPosition",value:{name:"union",raw:"{ x: number; y: number } | null",elements:[{name:"signature",type:"object",raw:"{ x: number; y: number }",signature:{properties:[{key:"x",value:{name:"number",required:!0}},{key:"y",value:{name:"number",required:!0}}]}},{name:"null"}],required:!0}},{key:"pointECEF",value:{name:"union",raw:"Vector3 | null",elements:[{name:"Vector3"},{name:"null"}],required:!0}},{key:"surfaceNormalECEF",value:{name:"union",raw:"Vector3 | null",elements:[{name:"Vector3"},{name:"null"}],required:!0}},{key:"inputModifier",value:{name:"AnnotationEnginePointQueryInputModifier",required:!1}}]}},{name:"null"}]},name:"pickResult"},{type:{name:"signature",type:"object",raw:"{ requestRender?: boolean }",signature:{properties:[{key:"requestRender",value:{name:"boolean",required:!1}}]}},name:"options"}],return:{name:"void"}},required:!0}},{key:"isPointQueryPickResultAcceptable",value:{name:"signature",type:"function",raw:"() => boolean",signature:{arguments:[],return:{name:"boolean"}},required:!1}},{key:"getPointQueryVisualStyle",value:{name:"signature",type:"function",raw:"() => AnnotationPointQueryVisualStyle | undefined",signature:{arguments:[],return:{name:"union",raw:"AnnotationPointQueryVisualStyle | undefined",elements:[{name:"union",raw:`Readonly<{
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
    options?: { inputModifier?: AnnotationEnginePointQueryInputModifier }
  ) => void;
  finishesOnLoopClosure?: boolean;
}`,signature:{properties:[{key:"toolType",value:{name:"AnnotationToolId",required:!0}},{key:"requestStart",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}},{key:"requestFinish",value:{name:"signature",type:"function",raw:"() => boolean",signature:{arguments:[],return:{name:"boolean"}},required:!0}},{key:"discardDraft",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}},{key:"onNodeCreated",value:{name:"signature",type:"function",raw:`(
  coordinate: AnnotationGeographicCoordinate,
  linkedNodeGroupId?: AnnotationNodeLinkId | null,
  options?: { inputModifier?: AnnotationEnginePointQueryInputModifier }
) => void`,signature:{arguments:[{type:{name:"AnnotationGeographicCoordinate"},name:"coordinate"},{type:{name:"union",raw:"AnnotationNodeLinkId | null",elements:[{name:"string"},{name:"null"}]},name:"linkedNodeGroupId"},{type:{name:"signature",type:"object",raw:"{ inputModifier?: AnnotationEnginePointQueryInputModifier }",signature:{properties:[{key:"inputModifier",value:{name:"AnnotationEnginePointQueryInputModifier",required:!1}}]}},name:"options"}],return:{name:"void"}},required:!1}},{key:"finishesOnLoopClosure",value:{name:"boolean",required:!1}}]}},{name:"null"}],required:!0}},{key:"requestFinishMeasurement",value:{name:"signature",type:"function",raw:"() => boolean",signature:{arguments:[],return:{name:"boolean"}},required:!0}},{key:"requestActivateTool",value:{name:"signature",type:"function",raw:"(toolId?: AnnotationToolId) => void",signature:{arguments:[{type:{name:"AnnotationToolId"},name:"toolId"}],return:{name:"void"}},required:!0}},{key:"requestModeChange",value:{name:"signature",type:"function",raw:"(toolId: AnnotationToolId) => void",signature:{arguments:[{type:{name:"AnnotationToolId"},name:"toolId"}],return:{name:"void"}},required:!0}},{key:"sessionContext",value:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"toolType",value:{name:"AnnotationType",required:!0}},{key:"nodeIds",value:{name:"unknown",required:!0}},{key:"edgeIds",value:{name:"unknown",required:!0}},{key:"displayName",value:{name:"string",required:!1}},{key:"shortLabel",value:{name:"string",required:!1}},{key:"shortLabelSource",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_SHORT_LABEL_SOURCES)[keyof typeof ANNOTATION_SHORT_LABEL_SOURCES]",required:!1}},{key:"shortLabelCounter",value:{name:"number",required:!1}},{key:"hidden",value:{name:"boolean",required:!1}},{key:"locked",value:{name:"boolean",required:!1}},{key:"annotationRole",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_ENTRY_ROLES)[keyof typeof ANNOTATION_ENTRY_ROLES]",required:!1}},{key:"readOnly",value:{name:"boolean",required:!1}},{key:"labelAppearance",value:{name:"AnnotationLabelAppearance",required:!1}},{key:"elevationDisplayMode",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_ELEVATION_DISPLAY_MODES)[keyof typeof ANNOTATION_ELEVATION_DISPLAY_MODES]",required:!1}},{key:"distanceAnchorCoordinateSelection",value:{name:"unknown[union]",raw:"(typeof RUNTIME_POINT_LABEL_COORDINATE_SELECTION)[keyof typeof RUNTIME_POINT_LABEL_COORDINATE_SELECTION]",required:!1}},{key:"distanceTriangleAnchorCoordinateRole",value:{name:"unknown[union]",raw:"(typeof RUNTIME_DISTANCE_TRIANGLE_ANCHOR_COORDINATE_ROLE)[keyof typeof RUNTIME_DISTANCE_TRIANGLE_ANCHOR_COORDINATE_ROLE]",required:!1}},{key:"closed",value:{name:"boolean",required:!1}},{key:"preferredNormalBearingRad",value:{name:"number",required:!1}},{key:"externalCollection",value:{name:"signature",type:"object",raw:`{
  type: "saved-measurement";
  id: string;
}`,signature:{properties:[{key:"type",value:{name:"literal",value:'"saved-measurement"',required:!0}},{key:"id",value:{name:"string",required:!0}}]},required:!1}},{key:"uuid",value:{name:"string",required:!1},description:"Identity across machines and shares; the runtime id only counts per session."}]},required:!0},{name:"union",raw:`| "closed"
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
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"toolType",value:{name:"AnnotationType",required:!0}},{key:"nodeIds",value:{name:"unknown",required:!0}},{key:"edgeIds",value:{name:"unknown",required:!0}},{key:"displayName",value:{name:"string",required:!1}},{key:"shortLabel",value:{name:"string",required:!1}},{key:"shortLabelSource",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_SHORT_LABEL_SOURCES)[keyof typeof ANNOTATION_SHORT_LABEL_SOURCES]",required:!1}},{key:"shortLabelCounter",value:{name:"number",required:!1}},{key:"hidden",value:{name:"boolean",required:!1}},{key:"locked",value:{name:"boolean",required:!1}},{key:"annotationRole",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_ENTRY_ROLES)[keyof typeof ANNOTATION_ENTRY_ROLES]",required:!1}},{key:"readOnly",value:{name:"boolean",required:!1}},{key:"labelAppearance",value:{name:"AnnotationLabelAppearance",required:!1}},{key:"elevationDisplayMode",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_ELEVATION_DISPLAY_MODES)[keyof typeof ANNOTATION_ELEVATION_DISPLAY_MODES]",required:!1}},{key:"distanceAnchorCoordinateSelection",value:{name:"unknown[union]",raw:"(typeof RUNTIME_POINT_LABEL_COORDINATE_SELECTION)[keyof typeof RUNTIME_POINT_LABEL_COORDINATE_SELECTION]",required:!1}},{key:"distanceTriangleAnchorCoordinateRole",value:{name:"unknown[union]",raw:"(typeof RUNTIME_DISTANCE_TRIANGLE_ANCHOR_COORDINATE_ROLE)[keyof typeof RUNTIME_DISTANCE_TRIANGLE_ANCHOR_COORDINATE_ROLE]",required:!1}},{key:"closed",value:{name:"boolean",required:!1}},{key:"preferredNormalBearingRad",value:{name:"number",required:!1}},{key:"externalCollection",value:{name:"signature",type:"object",raw:`{
  type: "saved-measurement";
  id: string;
}`,signature:{properties:[{key:"type",value:{name:"literal",value:'"saved-measurement"',required:!0}},{key:"id",value:{name:"string",required:!0}}]},required:!1}},{key:"uuid",value:{name:"string",required:!1},description:"Identity across machines and shares; the runtime id only counts per session."}]},required:!0}},required:!0}}]},required:!0}}]}},name:"context"}],return:{name:"boolean"}},required:!0}}]},required:!1}},{key:"visualModels",value:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"toolType",value:{name:"AnnotationType",required:!0}},{key:"nodeIds",value:{name:"unknown",required:!0}},{key:"edgeIds",value:{name:"unknown",required:!0}},{key:"displayName",value:{name:"string",required:!1}},{key:"shortLabel",value:{name:"string",required:!1}},{key:"shortLabelSource",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_SHORT_LABEL_SOURCES)[keyof typeof ANNOTATION_SHORT_LABEL_SOURCES]",required:!1}},{key:"shortLabelCounter",value:{name:"number",required:!1}},{key:"hidden",value:{name:"boolean",required:!1}},{key:"locked",value:{name:"boolean",required:!1}},{key:"annotationRole",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_ENTRY_ROLES)[keyof typeof ANNOTATION_ENTRY_ROLES]",required:!1}},{key:"readOnly",value:{name:"boolean",required:!1}},{key:"labelAppearance",value:{name:"AnnotationLabelAppearance",required:!1}},{key:"elevationDisplayMode",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_ELEVATION_DISPLAY_MODES)[keyof typeof ANNOTATION_ELEVATION_DISPLAY_MODES]",required:!1}},{key:"distanceAnchorCoordinateSelection",value:{name:"unknown[union]",raw:"(typeof RUNTIME_POINT_LABEL_COORDINATE_SELECTION)[keyof typeof RUNTIME_POINT_LABEL_COORDINATE_SELECTION]",required:!1}},{key:"distanceTriangleAnchorCoordinateRole",value:{name:"unknown[union]",raw:"(typeof RUNTIME_DISTANCE_TRIANGLE_ANCHOR_COORDINATE_ROLE)[keyof typeof RUNTIME_DISTANCE_TRIANGLE_ANCHOR_COORDINATE_ROLE]",required:!1}},{key:"closed",value:{name:"boolean",required:!1}},{key:"preferredNormalBearingRad",value:{name:"number",required:!1}},{key:"externalCollection",value:{name:"signature",type:"object",raw:`{
  type: "saved-measurement";
  id: string;
}`,signature:{properties:[{key:"type",value:{name:"literal",value:'"saved-measurement"',required:!0}},{key:"id",value:{name:"string",required:!0}}]},required:!1}},{key:"uuid",value:{name:"string",required:!1},description:"Identity across machines and shares; the runtime id only counts per session."}]},required:!0}},{key:"annotationEntries",value:{name:"unknown",required:!0}},{key:"nodes",value:{name:"unknown",required:!0}},{key:"selectedAnnotationId",value:{name:"string",required:!0}},{key:"setSelectedAnnotationId",value:{name:"signature",type:"function",raw:"(annotationId: string | null) => void",signature:{arguments:[{type:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},name:"annotationId"}],return:{name:"void"}},required:!0}},{key:"focusAnnotationId",value:{name:"signature",type:"function",raw:"(annotationId: string | null) => void",signature:{arguments:[{type:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},name:"annotationId"}],return:{name:"void"}},required:!0}},{key:"flyToAllAnnotations",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}},{key:"removeAnnotationById",value:{name:"signature",type:"function",raw:`(
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
  /** Shared Three query/edit disc policy; omitted engines retain the existing defaults above. */
  discSizing?: Partial<AnnotationDiscReferenceOptions>;
}`,signature:{properties:[{key:"scalingMode",value:{name:"ReferenceObjectScalingMode",required:!0}},{key:"worldRadiusMeters",value:{name:"number",required:!0}},{key:"targetScreenRadiusCssPx",value:{name:"number",required:!0}},{key:"resizeWorldRadiusToScreenTarget",value:{name:"boolean",required:!0}},{key:"resizeStepFactor",value:{name:"number",required:!0}},{key:"quantizeWorldRadius",value:{name:"boolean",required:!0}},{key:"discSizing",value:{name:"Partial",elements:[{name:"Readonly",elements:[{name:"intersection",raw:`AnnotationDiscSizingOptions & {
  /** How long an unchanged radius label stays visible. */
  radiusLabelVisibleDurationMs: Milliseconds;
  radiusLabelFadeDurationMs: Milliseconds;
  /** Visual transition only; selected 1/2/5 world radii remain discrete. Zero disables it. */
  resizeAnimationDurationMs: Milliseconds;
  /** Visual travel into/out of a snap, without delaying the actual pick. */
  snapAnimationDurationMs: Milliseconds;
  centerCircleDiameterCssPx: CssPixels;
  /** Reuses the visible line renderer's depth-tested darkening halo. */
  crosshairHalo: boolean;
}`,elements:[{name:"AnnotationDiscSizingOptions"},{name:"signature",type:"object",raw:`{
  /** How long an unchanged radius label stays visible. */
  radiusLabelVisibleDurationMs: Milliseconds;
  radiusLabelFadeDurationMs: Milliseconds;
  /** Visual transition only; selected 1/2/5 world radii remain discrete. Zero disables it. */
  resizeAnimationDurationMs: Milliseconds;
  /** Visual travel into/out of a snap, without delaying the actual pick. */
  snapAnimationDurationMs: Milliseconds;
  centerCircleDiameterCssPx: CssPixels;
  /** Reuses the visible line renderer's depth-tested darkening halo. */
  crosshairHalo: boolean;
}`,signature:{properties:[{key:"radiusLabelVisibleDurationMs",value:{name:"Milliseconds",required:!0},description:"How long an unchanged radius label stays visible."},{key:"radiusLabelFadeDurationMs",value:{name:"Milliseconds",required:!0}},{key:"resizeAnimationDurationMs",value:{name:"Milliseconds",required:!0},description:"Visual transition only; selected 1/2/5 world radii remain discrete. Zero disables it."},{key:"snapAnimationDurationMs",value:{name:"Milliseconds",required:!0},description:"Visual travel into/out of a snap, without delaying the actual pick."},{key:"centerCircleDiameterCssPx",value:{name:"CssPixels",required:!0}},{key:"crosshairHalo",value:{name:"boolean",required:!0},description:"Reuses the visible line renderer's depth-tested darkening halo."}]}}]}],raw:`Readonly<
  AnnotationDiscSizingOptions & {
    /** How long an unchanged radius label stays visible. */
    radiusLabelVisibleDurationMs: Milliseconds;
    radiusLabelFadeDurationMs: Milliseconds;
    /** Visual transition only; selected 1/2/5 world radii remain discrete. Zero disables it. */
    resizeAnimationDurationMs: Milliseconds;
    /** Visual travel into/out of a snap, without delaying the actual pick. */
    snapAnimationDurationMs: Milliseconds;
    centerCircleDiameterCssPx: CssPixels;
    /** Reuses the visible line renderer's depth-tested darkening halo. */
    crosshairHalo: boolean;
  }
>`}],raw:"Partial<AnnotationDiscReferenceOptions>",required:!1},description:"Shared Three query/edit disc policy; omitted engines retain the existing defaults above."}]}},description:""},visualInteractionEnabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},visualAnnotationEntryRoles:{required:!1,tsType:{name:"unknown"},description:""}}};const Tc=(e,n)=>{var t,o;return n?((t=e.externalCollection)==null?void 0:t.type)===n.type&&((o=e.externalCollection)==null?void 0:o.id)===n.id:e.externalCollection===void 0},qN=(e,n,t)=>{const o=new Set(n.nodeIds),r=new Set(n.edgeIds);return{nodes:e.nodes.filter(a=>o.has(a.id)).map(a=>({...a,id:t(a.id)})),edges:e.edges.filter(a=>r.has(a.id)).map(a=>({...a,id:t(a.id),startNodeId:t(a.startNodeId),endNodeId:t(a.endNodeId)})),linkedNodeGroups:e.linkedNodeGroups.filter(a=>a.nodeIds.some(i=>o.has(i))).map(a=>({...a,id:t(a.id),nodeIds:a.nodeIds.filter(i=>o.has(i)).map(t)}))}},_N=(e,n,t={})=>{const{annotationEntries:o,nodes:r}=e.getState(),a=new Set(o.map(({id:l})=>l)),i=new Set(r.map(({id:l})=>l)),s=bA(o.filter(l=>Tc(l,t.externalCollection))),u=[];for(const l of n.tables.annotationEntries){const d=TA(l,s,t.idPrefix?`${t.idPrefix}:${l.id}`:l.id);d&&t.replaceExisting&&(e.dispatch(LA({annotationId:d.id})),a.delete(d.id));const c=!d&&(a.has(l.id)||l.nodeIds.some(f=>i.has(f))),m=t.idPrefix??(c?`s${(l.uuid??l.id).replace(/[^a-z0-9]/gi,"").slice(0,8)}`:void 0),y=f=>m?`${m}:${f}`:f,p=d&&t.replaceExisting?d.id:y(l.id);if(t.skipExisting&&!t.replaceExisting&&(d!==void 0||a.has(p))){(t.annotationRole!==void 0||t.readOnly!==void 0)&&e.dispatch($n({annotationId:(d==null?void 0:d.id)??p,annotationRole:t.annotationRole,readOnly:t.readOnly}));continue}e.dispatch(ed({annotationEntry:{...l,id:p,nodeIds:l.nodeIds.map(y),edgeIds:l.edgeIds.map(y),annotationRole:t.annotationRole??l.annotationRole,readOnly:t.readOnly??l.readOnly,externalCollection:t.externalCollection??l.externalCollection},...qN(n.tables,l,y),selectAnnotationId:t.selectAnnotationId})),a.add(p),u.push(p)}return u},PN=(e,n)=>{const t=e.getState().annotationEntries.filter(o=>Tc(o,n)).map(o=>o.id);return t.length===0?[]:(e.dispatch(ei({annotationIds:t,nextSelectedAnnotationId:null})),t)},MN=(e,n,t)=>{if(t){const r=e.getPlugin(t);if(r)return r}const o=e.getPluginsByAnnotationType(n);return o.find(r=>r.addAnnotation)??o[0]??null},DN=({registry:e,engine:n,annotationEntries:t,toolType:o,coordinates:r,options:a,linkedNodeGroupIds:i,sourceToolId:s})=>{var m,y;const u=MN(e,o,s),l=((m=u==null?void 0:u.addAnnotation)==null?void 0:m.resolveOptions({annotationType:o,toolId:s??(u==null?void 0:u.id)??null,engine:n,coordinates:r,options:a,linkedNodeGroupIds:i}))??a;if(!pr(o))return l;const d=eA({annotationEntries:t,toolType:o}),c=(y=l==null?void 0:l.shortLabel)==null?void 0:y.trim();return{...l,shortLabel:c||Xl(o,d),shortLabelSource:c?(l==null?void 0:l.shortLabelSource)??so.CUSTOM:so.DEFAULT,shortLabelCounter:c?l==null?void 0:l.shortLabelCounter:d}},BN=({engine:e,registry:n,annotationsStore:t,measurementSequenceRef:o,nodeSequenceRef:r,edgeSequenceRef:a})=>g.useCallback((i,s,u,l,d)=>{const{annotationEntry:c,nodes:m,linkedNodeGroups:y,edges:p}=wf({toolType:i,coordinates:s,options:DN({registry:n,engine:e,annotationEntries:t.getState().annotationEntries,toolType:i,coordinates:s,options:u,linkedNodeGroupIds:l,sourceToolId:d}),linkedNodeGroupIds:l,measurementSequenceRef:o,nodeSequenceRef:r,edgeSequenceRef:a});return t.dispatch(ed({annotationEntry:c,nodes:m,linkedNodeGroups:y,edges:p,selectAnnotationId:c.id})),c},[t,n,e,o,r,a]),Wn=(e,n)=>lo(e.getState().annotationEntries,n),er=e=>e!==null&&!e.locked&&!e.readOnly,Ys=(e,n)=>n.map(t=>lo(e,t)).filter(er),FN=({annotationsStore:e,activeEditedNodeId:n,setActiveEditedNodeId:t})=>{const o=g.useCallback(d=>{e.dispatch(wA(d))},[e]),r=g.useCallback(d=>{e.dispatch(xA(d))},[e]),a=g.useCallback(d=>{const c=Wn(e,d);c&&e.dispatch($n({annotationId:d,hidden:!c.hidden}))},[e]),i=g.useCallback(d=>{const c=Wn(e,d);if(!c||c.readOnly)return;const m=!c.locked;e.dispatch($n({annotationId:d,locked:m})),m&&c.nodeIds.includes(n??"")&&t(null)},[n,e,t]),s=g.useCallback((d,c)=>{er(Wn(e,d))&&e.dispatch($n({annotationId:d,displayName:c.trim()}))},[e]),u=g.useCallback((d,c)=>{er(Wn(e,d))&&e.dispatch($n({annotationId:d,shortLabel:c.trim(),shortLabelSource:so.CUSTOM}))},[e]),l=g.useCallback((d,c)=>{const m=Wn(e,d);m&&e.dispatch($n({annotationId:d,elevationDisplayMode:Nf(c??m.elevationDisplayMode)}))},[e]);return{setElevationReferenceAnnotationIdInStore:o,setPointTemporaryModeInStore:r,toggleAnnotationVisibility:a,toggleAnnotationLocked:i,updateAnnotationDisplayName:s,updateAnnotationShortLabel:u,toggleAnnotationElevationDisplayMode:l}},GN=e=>{const n=g.useCallback(r=>{const a=Wn(e,r);if(!a)return;const i=e.getState(),s=Hu({annotation:a,coordinates:Ai({annotationEntries:i.annotationEntries,nodes:i.nodes,annotationId:r})});if(!s)return;const{kind:u,name:l}=mA(a);us(`annotation-${ls(u)}-${ls(l)}.geojson`,s)},[e]),t=g.useCallback(()=>Wu(Xa(e.getState())),[e]),o=g.useCallback(()=>{us("annotations.geojson",t())},[t]);return{exportAnnotationGeoJson:n,buildAllAnnotationsGeoJson:t,exportAllAnnotationsGeoJson:o}},Pa=({engine:e,points:n})=>{!H(e)||n.length===0||e.flyToPoints(n,{minRadiusMeters:Xn.infoBoxFlyTo.minRadiusMeters,paddingFactor:Xn.infoBoxFlyTo.paddingFactor})},jN=({annotationEntries:e,annotationIds:n,nodes:t})=>{const o=new Set(n);return e.filter(r=>o.has(r.id)).flatMap(r=>_a({annotationEntries:e,annotationId:r.id,nodes:t}))},HN=({annotationEntries:e,annotationIds:n,nodes:t,engine:o})=>{Pa({engine:o,points:jN({annotationEntries:e,annotationIds:n,nodes:t})})},zN=({engine:e,annotationsStore:n,setActiveEditedNodeId:t})=>{const o=g.useCallback(d=>{d===null&&t(null),n.dispatch(Tt(d))},[n,t]),r=g.useCallback(d=>{d.length===0&&t(null),n.dispatch(xt(d))},[n,t]),a=g.useCallback(()=>{n.dispatch(xt(Ku(n.getState())))},[n]),i=g.useCallback(d=>{const c=n.getState();n.dispatch(Tt(SA(c.annotationEntries,Ar(c),d)))},[n]),s=g.useCallback(d=>{const c=n.getState();Pa({engine:e,points:_a({annotationEntries:c.annotationEntries,nodes:c.nodes,annotationId:d})})},[n,e]),u=g.useCallback(()=>{const d=n.getState();Pa({engine:e,points:yr(d).flatMap(c=>_a({annotationEntries:d.annotationEntries,nodes:d.nodes,annotationId:c.id}))})},[n,e]),l=g.useCallback(d=>{d===null&&t(null),n.dispatch(Tt(d)),s(d)},[n,s,t]);return{setSelectedAnnotationIdInStore:o,setSelectedAnnotationIdsInStore:r,selectAllAnnotationEntries:a,focusAdjacentAnnotationEntry:i,flyToAnnotationById:s,flyToAllAnnotations:u,focusAnnotationId:l}},VN=({annotationsStore:e,annotationToolDraftStore:n,confirmAnnotationDelete:t})=>{const o=g.useCallback((u,l)=>{if(u.length===0)return Promise.resolve(!1);if(l!=null&&l.skipConfirmation)return Promise.resolve(!0);const d=t??WA;return Promise.resolve(d({annotations:u,source:(l==null?void 0:l.source)??oi.PROGRAMMATIC})).catch(c=>(console.error("[Annotations] Delete confirmation failed",c),!1))},[t]),r=g.useCallback(()=>{const u=e.getState().annotationToolType;return n.get(u).coordinates.length>0},[n,e]),a=g.useCallback((u,l)=>{const d=Array.from(new Set(u));if(d.length===0||r())return;const c=Ys(e.getState().annotationEntries,d);c.length!==0&&o(c,l).then(m=>{if(!m)return;const y=Ys(e.getState().annotationEntries,c.map(({id:p})=>p)).map(({id:p})=>p);y.length!==0&&e.dispatch(ei({annotationIds:y}))})},[e,r,o]),i=g.useCallback((u,l)=>{er(Wn(e,u))&&a([u],l)},[e,a]),s=g.useCallback(u=>{const l=hA(e.getState());l.length!==0&&a(l,u)},[e,a]);return{requestAnnotationDeleteConfirmation:o,removeAnnotationEntriesByIds:a,removeAnnotationEntryById:i,removeSelectedAnnotationEntries:s}},UN=[],$N=[],WN={coordinates:UN,linkedNodeGroupIds:$N,feedback:null},YN=(e,n)=>e.length===n.length&&e.every((t,o)=>t===n[o]),KN=(e,n)=>{var t,o,r,a;return ai(e.coordinates,n.coordinates)&&YN(e.linkedNodeGroupIds,n.linkedNodeGroupIds)&&((t=e.feedback)==null?void 0:t.kind)===((o=n.feedback)==null?void 0:o.kind)&&((r=e.feedback)==null?void 0:r.message)===((a=n.feedback)==null?void 0:a.message)},QN=()=>{const e=new Map,n=new Map,t=r=>{var a;(a=n.get(r))==null||a.forEach(i=>i())},o=r=>e.get(r)??WN;return{get:o,set:(r,a)=>{const i={coordinates:[...a.coordinates],linkedNodeGroupIds:[...a.linkedNodeGroupIds],feedback:a.feedback??null},s=o(r);if(KN(s,i))return;i.coordinates.length>0||i.linkedNodeGroupIds.length>0||!!i.feedback?e.set(r,i):e.delete(r),t(r)},clear:r=>{e.has(r)&&(e.delete(r),t(r))},subscribe:(r,a)=>{const i=n.get(r)??new Set;return i.add(a),n.set(r,i),()=>{const s=n.get(r);s&&(s.delete(a),s.size===0&&n.delete(r))}}}},XN=()=>{let e=null;const n=new Set;return{getSnapshot:()=>e,setSnapshot:t=>{e!==t&&(e=t,n.forEach(o=>o()))},subscribe:t=>(n.add(t),()=>n.delete(t))}},ZN=({registry:e,initialToolType:n,initialPointTemporaryMode:t,initialPersistenceState:o})=>{const r=o?kA({initialToolType:n,initialPointTemporaryMode:t,initialPersistenceState:o,isToolTypeAvailable:a=>!!e.getPlugin(a)}):Zu({initialToolType:n,initialPointTemporaryMode:t});return{annotationsStore:MA(r),annotationToolDraftStore:QN(),activePointQueryPickResultStore:XN(),sequenceRefs:{measurementSequenceRef:{current:bt(r.annotationEntries.map(({id:a})=>a))},nodeSequenceRef:{current:bt(r.nodes.map(({id:a})=>a))},edgeSequenceRef:{current:bt(r.edges.map(({id:a})=>a))}},lastSerializedPersistenceState:JSON.stringify(Xa(r)),mountedHosts:0}},$t=new Map,JN=e=>{const{storeKey:n,onPersistenceStateChange:t}=e,o=g.useRef(null);let r=n?$t.get(n):o.current;r||(r=ZN(e),n?$t.set(n,r):o.current=r);const a=r;return g.useEffect(()=>{if(n)return $t.set(n,a),a.mountedHosts+=1,()=>{a.mountedHosts-=1,a.mountedHosts===0&&$t.get(n)===a&&$t.delete(n)}},[a,n]),g.useEffect(()=>{if(t)return a.annotationsStore.subscribe(()=>{const i=Xa(a.annotationsStore.getState()),s=JSON.stringify(i);s!==a.lastSerializedPersistenceState&&(t(i),a.lastSerializedPersistenceState=s)})},[a,t]),{annotationsStore:a.annotationsStore,annotationToolDraftStore:a.annotationToolDraftStore,activePointQueryPickResultStore:a.activePointQueryPickResultStore,sequenceRefs:a.sequenceRefs}},{DISTANCE:eI,POLYLINE:nI,AREA_GROUND:tI,AREA_PLANAR:oI,AREA_VERTICAL:rI}=_,Ks=e=>{switch(e.toolType){case eI:case nI:return 2;case tI:case oI:case rI:return 3;default:return null}},aI=({annotationEntries:e,selectedAnnotationIds:n,editedNodeId:t})=>{const o=e.filter(i=>!i.locked&&!i.readOnly&&i.nodeIds.includes(t)&&Ks(i)!==null);let r=o[0];for(let i=n.length-1;i>=0;i-=1){const s=o.find(({id:u})=>u===n[i]);if(s){r=s;break}}const a=r?Ks(r):null;return r&&a!==null?{annotation:r,minimumNodeCount:a}:null},iI=({nodeIds:e,editedNodeId:n,closed:t})=>{const o=e.indexOf(n);if(!t||o<0)return e.filter(a=>a!==n);const r=[];for(let a=1;a<e.length;a+=1){const i=e[(o+a)%e.length];i&&i!==n&&r.push(i)}return r},sI=({annotationsStore:e,annotationToolDraftStore:n,activeEditedNodeId:t,setActiveEditedNodeId:o,requestAnnotationDeleteConfirmation:r})=>g.useCallback(()=>{if(!t)return!1;const a=e.getState(),i=aI({annotationEntries:a.annotationEntries,selectedAnnotationIds:a.selectionState.selectedAnnotationIds,editedNodeId:t});if(!i)return!1;const{annotation:s,minimumNodeCount:u}=i,l=s.nodeIds.filter(y=>y!==t);if(l.length>=u)return e.dispatch(RA({annotationId:s.id,nodeId:t})),o(null),!0;const d=iI({nodeIds:s.nodeIds,editedNodeId:t,closed:s.closed===!0});if(d.length!==l.length)return!1;const c=new Map(a.nodes.map(y=>[y.id,y])),m=d.flatMap(y=>{const p=c.get(y);return p?[p]:[]});return m.length!==d.length?!1:(r([s],{source:oi.KEYBOARD}).then(y=>{y&&(n.set(s.toolType,{coordinates:m.map(p=>p.coordinate),linkedNodeGroupIds:d.map(p=>Po(a.linkedNodeGroups,p)),feedback:null}),e.dispatch(ei({annotationIds:[s.id],nextSelectedAnnotationId:null})),o(null))}),!0)},[t,n,e,r,o]),lI=({annotationsStore:e,setActiveEditedNodeId:n})=>{const t=g.useRef(Ea),o=g.useRef(()=>!1),r=g.useRef(null),a=g.useCallback(y=>{const p=e.getState().annotationToolType;e.dispatch(PA(y)),p!==y&&(n(null),e.dispatch(Tt(null)))},[e,n]),i=g.useCallback(y=>{if(t.current===Ea){a(y);return}t.current.requestModeChange(y)},[a]),s=g.useCallback(y=>{t.current=y},[]),u=g.useMemo(()=>({requestModeChange:y=>t.current.requestModeChange(y),requestActivateTool:y=>t.current.requestActivateTool(y),requestFinishMeasurement:()=>t.current.requestFinishMeasurement(),requestPointAt:y=>t.current.requestPointAt(y)}),[]),l=g.useCallback(y=>(o.current=y,()=>{o.current===y&&(o.current=()=>!1)}),[]),d=g.useCallback(y=>o.current(y),[]),c=g.useCallback(y=>{r.current=y},[]),m=g.useCallback(()=>r.current,[]);return{setActiveToolTypeInStore:a,setActiveToolType:i,bindLifecycleHostApi:s,lifecycleRequests:u,bindPreviewSnapTargetNodeClick:l,handlePreviewSnapTargetNodeClick:d,setHoveredPointQueryNodeId:c,getHoveredPointQueryNodeId:m}},uI=({engine:e,plugins:n,initialActiveToolType:t,initialPointTemporaryMode:o,formatOptions:r,lineLabelOptions:a,initialPersistenceState:i,storeKey:s,onPersistenceStateChange:u,requestLabelText:l,confirmAnnotationDelete:d})=>{var Q;const c=g.useMemo(()=>Gf(n),[n]),m=((Q=c.orderedDescriptors[0])==null?void 0:Q.id)??null;if(!m)throw new Error("AnnotationsProvider requires at least one tool plugin.");const{annotationsStore:y,annotationToolDraftStore:p,activePointQueryPickResultStore:f,sequenceRefs:A}=JN({registry:c,initialToolType:t&&c.getPlugin(t)?t:m,initialPointTemporaryMode:o,initialPersistenceState:i,storeKey:s,onPersistenceStateChange:u}),[v,T]=g.useState(null),{setActiveToolTypeInStore:b,setActiveToolType:h,bindLifecycleHostApi:k,lifecycleRequests:N,bindPreviewSnapTargetNodeClick:S,handlePreviewSnapTargetNodeClick:I,setHoveredPointQueryNodeId:C,getHoveredPointQueryNodeId:L}=lI({annotationsStore:y,setActiveEditedNodeId:T}),{setSelectedAnnotationIdInStore:R,setSelectedAnnotationIdsInStore:E,selectAllAnnotationEntries:x,focusAdjacentAnnotationEntry:P,flyToAnnotationById:M,flyToAllAnnotations:q,focusAnnotationId:D}=zN({engine:e,annotationsStore:y,setActiveEditedNodeId:T}),{requestAnnotationDeleteConfirmation:W,removeAnnotationEntriesByIds:$,removeAnnotationEntryById:G,removeSelectedAnnotationEntries:V}=VN({annotationsStore:y,annotationToolDraftStore:p,confirmAnnotationDelete:d}),X=sI({annotationsStore:y,annotationToolDraftStore:p,activeEditedNodeId:v,setActiveEditedNodeId:T,requestAnnotationDeleteConfirmation:W}),{exportAnnotationGeoJson:ae,buildAllAnnotationsGeoJson:ne,exportAllAnnotationsGeoJson:U}=GN(y),{setElevationReferenceAnnotationIdInStore:ie,setPointTemporaryModeInStore:ce,toggleAnnotationVisibility:pe,toggleAnnotationLocked:se,updateAnnotationDisplayName:we,updateAnnotationShortLabel:Z,toggleAnnotationElevationDisplayMode:ke}=FN({annotationsStore:y,activeEditedNodeId:v,setActiveEditedNodeId:T}),F=BN({engine:e,registry:c,annotationsStore:y,...A}),te=g.useCallback((le,j)=>_N(y,le,j),[y]),oe=g.useCallback(le=>PN(y,le),[y]),K=g.useMemo(()=>({engine:e,registry:c,annotationToolDraftStore:p,annotationsStore:y,formatOptions:r,activeEditedNodeId:v,addAnnotation:F,appendAnnotationsRuntimePersistenceState:te,removeExternalAnnotationsByCollection:oe,setActiveToolType:h,requestModeChange:N.requestModeChange,requestActivateTool:N.requestActivateTool,requestFinishMeasurement:N.requestFinishMeasurement,requestPointAt:N.requestPointAt,focusAdjacentAnnotationEntry:P,focusAnnotationId:D,flyToAnnotationById:M,flyToAllAnnotations:q,removeAnnotationById:G,removeAnnotationsByIds:$,buildAllAnnotationsGeoJson:ne,exportAnnotationGeoJson:ae,exportAllAnnotationsGeoJson:U,toggleAnnotationVisibility:pe,toggleAnnotationLocked:se,removeSelectedAnnotations:V,selectAllAnnotations:x,setElevationReferenceAnnotationId:ie,toggleAnnotationElevationDisplayMode:ke,updateAnnotationDisplayName:we,updateAnnotationShortLabel:Z,setPointTemporaryMode:ce,setSelectedAnnotationId:R,setSelectedAnnotationIds:E}),[F,te,v,p,y,ne,P,D,U,ae,q,M,r,N,G,$,oe,V,c,e,x,ie,h,ce,R,E,se,ke,pe,we,Z]);return{annotationsStore:y,registry:c,services:K,activePointQueryPickResultStore:f,setActiveToolType:h,runtimeAuthoringHost:{engine:e,registry:c,annotationsStore:y,annotationToolDraftStore:p,setActiveToolTypeInStore:b,focusAdjacentAnnotationEntry:P,removeSelectedAnnotations:V,removeEditedNode:X,addAnnotation:F,bindPreviewSnapTargetNodeClick:S,activeEditedNodeId:v,getHoveredPointQueryNodeId:L,setHoveredPointQueryNodeId:C,onPointQueryPickResultChange:f.setSnapshot,formatOptions:r,lineLabelOptions:a,bindApi:k,requestLabelText:l},runtimeVisualHost:{engine:e,registry:c,annotationsStore:y,annotationToolDraftStore:p,setElevationReferenceAnnotationId:ie,toggleAnnotationElevationDisplayMode:ke,onActiveEditedNodeIdChange:T,onHoveredPointQueryNodeIdChange:C,onPreviewSnapTargetNodeClick:I,activeEditedNodeId:v,formatOptions:r,lineLabelOptions:a}}},dI=({enabled:e=!0}={})=>{const n=g.useRef(null),t=g.useRef([]),[o,r]=g.useState(null),[a,i]=g.useState([]),s=g.useCallback(d=>{const c=n.current;if(n.current=null,r(null),d!==null){const m=Rp(t.current,d);t.current=m,i(m)}c==null||c(d)},[]),u=g.useCallback(({defaultText:d,labelTextSuggestions:c})=>new Promise(m=>{var y;if(!e){m(null);return}(y=n.current)==null||y.call(n,null),n.current=m,r(xp({defaultText:d,labelTextHistory:t.current,labelTextSuggestions:c}))}),[e]);g.useEffect(()=>()=>{var d;(d=n.current)==null||d.call(n,null),n.current=null},[]),g.useEffect(()=>{e||s(null)},[e,s]);const l=g.useMemo(()=>!e||!o?{open:!1,initialValue:"",labelSuggestions:[],onAbort:()=>{},onFinish:()=>{}}:{open:!0,initialValue:o.initialValue,labelSuggestions:Va(a,o.labelSuggestions),onAbort:()=>s(null),onFinish:s},[e,a,o,s]);return g.useMemo(()=>({labelTextDialogState:l,requestLabelText:u}),[l,u])},Ro=()=>new Promise(e=>{typeof requestAnimationFrame=="function"?requestAnimationFrame(()=>setTimeout(e,0)):setTimeout(e,16)}),Qs=e=>new Promise(n=>setTimeout(n,e)),ra=(e,n,t)=>new Promise(o=>{if(n(e.getState())){o(!0);return}let r=!1;const a=u=>{r||(r=!0,clearTimeout(s),i(),o(u))},i=e.subscribe(()=>{n(e.getState())&&a(!0)}),s=setTimeout(()=>a(!1),t)}),aa=2e3,Xs=e=>new Set(e.annotationEntries.map(n=>n.id)),ct=(e,n)=>{var t;return((t=e.annotationEntries.find(o=>!n.has(o.id)))==null?void 0:t.id)??null},cI=e=>{const n=()=>e().annotationsStore,t=()=>{const c=e(),m=c.annotationsStore.getState(),y=m.annotationToolType??null,p=y?c.annotationToolDraftStore.get(y).coordinates.length:0;return{activeTool:y,tools:c.registry.orderedDescriptors.map(f=>f.id),selectedIds:[...m.selectionState.selectedAnnotationIds??[]],draft:y&&p>0?{tool:y,nodeCount:p}:null,textPrompt:c.labelTextDialogState.open?c.labelTextDialogState.initialValue:null,annotations:m.annotationEntries.map(f=>({id:f.id,type:f.toolType,label:f.shortLabel??null,nodeCount:f.nodeIds.length,external:f.annotationRole===Rt.EXTERNAL}))}},o=async c=>{const m=e();if(!m.registry.getPlugin(c))return!1;m.annotationsStore.getState().annotationToolType!==c&&m.requestModeChange(c);const y=await ra(m.annotationsStore,p=>p.annotationToolType===c,aa);return await Ro(),y},r=async c=>{await Ro();const m=e().requestPointAt(c);return await Ro(),m},a=async()=>{const c=Xs(n().getState());return e().requestFinishMeasurement()&&await ra(n(),m=>ct(m,c)!==null,aa),await Ro(),ct(n().getState(),c)},i=()=>{const c=e(),m=c.annotationsStore.getState().annotationToolType;m&&c.annotationToolDraftStore.clear(m)},s=c=>{const m=e().labelTextDialogState;return m.open?(c===null?m.onAbort():m.onFinish(c),!0):!1};return{getState:t,subscribe:c=>n().subscribe(c),activateTool:o,pickAt:r,finish:a,cancel:i,answerTextPrompt:s,createMeasurement:async(c,m,y={})=>{const{stepDelayMs:p=0,select:f=!0}=y;if(!await o(c))return null;const A=Xs(n().getState());e().annotationToolDraftStore.clear(c);for(const T of m){if(p>0&&await Qs(p),!await r(T))return null;const b=e().labelTextDialogState;if(b.open&&(s(y.text??b.initialValue),await ra(n(),h=>ct(h,A)!==null,aa)),ct(n().getState(),A))break}let v=ct(n().getState(),A);return v||(p>0&&await Qs(p),await a(),v=ct(n().getState(),A)),v&&f&&e().setSelectedAnnotationIds([v]),v},addMeasurements:(c,m={})=>{const y=e(),p=Yu(c)??Qa(c);if(!p)return[];if(m.replace){const A=y.annotationsStore.getState().annotationEntries.filter(v=>v.annotationRole!==Rt.EXTERNAL).map(v=>v.id);A.length>0&&y.removeAnnotationsByIds(A,{skipConfirmation:!0})}const f=[...y.appendAnnotationsRuntimePersistenceState(p)];return m.select&&f.length>0&&y.setSelectedAnnotationIds(f),f},exportMeasurements:()=>e().buildAllAnnotationsGeoJson(),select:c=>e().setSelectedAnnotationIds(c),remove:c=>e().removeAnnotationsByIds(c,{skipConfirmation:!0}),flyTo:c=>{const m=e();if(!c||c.length===0){m.flyToAllAnnotations();return}const y=m.annotationsStore.getState();HN({annotationEntries:y.annotationEntries,annotationIds:c,nodes:y.nodes,engine:m.engine})}}},kc=1500,Bo=new WeakMap,Ma=e=>{var n;(n=Bo.get(e))==null||n()},mI=(e,n,{durationMs:t=kc}={})=>{Ma(e);const o=e.getCameraPose();return!o||!(t>0)?Promise.resolve(e.setCameraPose(n)):new Promise(r=>{let a=0,i=!1;const s=c=>{i||(i=!0,cancelAnimationFrame(a),Bo.get(e)===u&&Bo.delete(e),r(c))},u=()=>s(!1);Bo.set(e,u);const l=performance.now(),d=c=>{if(i)return;const m=Math.min(1,(c-l)/t),y=m>=1?n:sy(o,n,Hm(0,1,m));if(e.isDestroyed()||!e.setCameraPose(y)){s(!1);return}m>=1?s(!0):a=requestAnimationFrame(d)};a=requestAnimationFrame(d)})},Jt=e=>Array.isArray(e)&&e.length===3&&e.every(n=>Number.isFinite(n)),yI=e=>({position:e.positionECEF.toArray(),direction:e.directionECEF.toArray(),up:e.upECEF.toArray(),fovY:e.verticalFovRad}),Zs=e=>{if(!e||!Jt(e.position)||!Jt(e.direction)||!Jt(e.up)||!(e.fovY>0&&e.fovY<rl))return null;const n=new w(...e.direction);if(!(n.lengthSq()>0))return null;n.normalize();const t=no(new w(...e.up),n);return t.lengthSq()>0?{positionECEF:new w(...e.position),directionECEF:n,upECEF:t.normalize(),verticalFovRad:e.fovY}:null},pI=e=>{const n=()=>{const o=e();return H(o)?o:null},t=(o,r)=>{const a=n();return a&&o?mI(a,o,{durationMs:r}):Promise.resolve(!1)};return{getPose:()=>{var r;const o=(r=n())==null?void 0:r.getCameraPose();return o?yI(o):null},setPose:o=>{const r=n(),a=Zs(o);return!r||!a?!1:(Ma(r),r.setCameraPose(a))},flyToPose:(o,r={})=>t(Zs(o),r.durationMs),lookAt:(o,r,a={})=>{var i,s;return Jt(o)&&Jt(r)?t(iy(new w(...o),new w(...r),a.fovY??((s=(i=n())==null?void 0:i.getCameraPose())==null?void 0:s.verticalFovRad)??Rl),a.durationMs??kc):Promise.resolve(!1)},stop:()=>{const o=n();o&&Ma(o)}}},Nc=e=>{const n=[],t=()=>e(n.at(-1)??null);return o=>(n.push(o),t(),()=>{const r=n.indexOf(o);r>=0&&n.splice(r,1),t()})},gI=Nc(pp),fI=Nc(gp),AI=(e,n)=>{const t=g.useRef(e);t.current=e,g.useLayoutEffect(()=>{if(!n)return;const o=gI(cI(()=>t.current)),r=fI(pI(()=>t.current.engine));return()=>{r(),o()}},[n])},vI=bf,Ic=g.createContext(null),hc=g.createContext(null),bI={},TI=()=>{const e=g.useContext(Ic);if(!e)throw new Error("useAnnotationsRuntime must be used within AnnotationsProvider.");return e},kI=()=>{const e=g.useContext(hc);if(!e)throw new Error("useActivePointQueryPickResult must be used within AnnotationsProvider.");return e},NI=({engine:e,plugins:n,children:t,annotationOverlayContainer:o=null,initialActiveToolType:r,initialPointTemporaryMode:a=!1,labelOverlayHost:i=null,localPersistence:s,renderEnabled:u=!0,visualRenderEnabled:l,visualInteractionEnabled:d,visualAnnotationEntryRoles:c,formatOptions:m=GA,lineLabelOptions:y=bI,referenceObjectSizing:p=td,initialPersistenceState:f,onPersistenceStateChange:A,confirmAnnotationDelete:v,carmaApi:T=!0})=>{const{labelTextDialogState:b,requestLabelText:h}=dI({enabled:u}),k=!!(s!=null&&s.storageKey)&&((s==null?void 0:s.enabled)??!0),N=FA({enabled:k,storageKey:(s==null?void 0:s.storageKey)??""}),S=f!==void 0?f:N.initialPersistenceState,I=A??N.onPersistenceStateChange,C=k&&f===void 0&&A===void 0?s==null?void 0:s.storageKey:void 0,{annotationsStore:L,services:R,setActiveToolType:E,runtimeAuthoringHost:x,runtimeVisualHost:P,registry:M,activePointQueryPickResultStore:q}=uI({engine:e,plugins:n,initialActiveToolType:r,initialPointTemporaryMode:a,formatOptions:m,lineLabelOptions:y,initialPersistenceState:S,storeKey:C,onPersistenceStateChange:I,requestLabelText:u?h:void 0,confirmAnnotationDelete:v}),D=g.useMemo(()=>({...R,labelTextDialogState:b}),[b,R]);AI(D,T&&u);const W=(e==null?void 0:e.kind)??"none",$=O.jsx(vI,{context:ni,store:L,children:O.jsx(Ic.Provider,{value:D,children:O.jsxs(hc.Provider,{value:q,children:[o?am.createPortal(O.jsx(Su,{}),o):null,O.jsxs(g.Fragment,{children:[u||!C?O.jsx(hb,{registry:M,setActiveToolType:E}):null,u?O.jsx(Ib,{...x,referenceObjectSizing:p}):null,l??u?O.jsx(bc,{...P,visualAnnotationEntryRoles:c,visualInteractionEnabled:d,referenceObjectSizing:p}):null]},W),t]})})});return i?O.jsx(vm,{host:i,children:$}):$},Sc=()=>{const{engine:e,registry:n,annotationToolDraftStore:t,formatOptions:o,addAnnotation:r,appendAnnotationsRuntimePersistenceState:a,removeExternalAnnotationsByCollection:i,setActiveToolType:s,requestModeChange:u,requestActivateTool:l,requestFinishMeasurement:d,focusAdjacentAnnotationEntry:c,focusAnnotationId:m,flyToAnnotationById:y,flyToAllAnnotations:p,removeAnnotationById:f,removeAnnotationsByIds:A,buildAllAnnotationsGeoJson:v,exportAnnotationGeoJson:T,exportAllAnnotationsGeoJson:b,toggleAnnotationVisibility:h,toggleAnnotationLocked:k,removeSelectedAnnotations:N,selectAllAnnotations:S,setElevationReferenceAnnotationId:I,toggleAnnotationElevationDisplayMode:C,updateAnnotationDisplayName:L,updateAnnotationShortLabel:R,activeEditedNodeId:E,setPointTemporaryMode:x,setSelectedAnnotationId:P,setSelectedAnnotationIds:M,labelTextDialogState:q}=TI(),D=de(U=>U.annotationToolType),W=de(U=>U.nodes),$=de(U=>U.edges),G=de(U=>U.annotationEntries),V=de(Ar),X=de(U=>U.selectionState.selectedAnnotationIds),ae=de(U=>U.settingsState.elevationReferenceAnnotationId),ne=de(U=>U.settingsState.pointTemporaryMode);return{engine:e,registry:n,annotationToolDraftStore:t,formatOptions:o,activeToolType:D,setActiveToolType:s,requestModeChange:u,requestActivateTool:l,requestFinishMeasurement:d,focusAdjacentAnnotationEntry:c,focusAnnotationId:m,flyToAnnotationById:y,flyToAllAnnotations:p,removeAnnotationById:f,removeAnnotationsByIds:A,buildAllAnnotationsGeoJson:v,exportAnnotationGeoJson:T,exportAllAnnotationsGeoJson:b,toggleAnnotationVisibility:h,toggleAnnotationLocked:k,removeSelectedAnnotations:N,selectAllAnnotations:S,elevationReferenceAnnotationId:ae,setElevationReferenceAnnotationId:I,toggleAnnotationElevationDisplayMode:C,updateAnnotationDisplayName:L,updateAnnotationShortLabel:R,activeEditedNodeId:E,pointTemporaryMode:ne,setPointTemporaryMode:x,nodes:W,edges:$,annotationEntries:G,selectedAnnotationId:V,selectedAnnotationIds:X,setSelectedAnnotationId:P,setSelectedAnnotationIds:M,addAnnotation:r,appendAnnotationsRuntimePersistenceState:a,removeExternalAnnotationsByCollection:i,labelTextDialogState:q}},II=()=>{const e=kI();return g.useSyncExternalStore(e.subscribe,e.getSnapshot,e.getSnapshot)};NI.__docgenInfo={description:"",methods:[],displayName:"AnnotationsProvider",props:{engine:{required:!0,tsType:{name:"union",raw:"AnnotationEngine | null",elements:[{name:"AnnotationEngine"},{name:"null"}]},description:`Engine adapter the runtime draws and picks with. The app owns the engine
lifetime; the provider never disposes it. A different engine remounts the
engine-bound hosts so adapter-contributed hooks keep a stable order.`},plugins:{required:!0,tsType:{name:"unknown"},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""},annotationOverlayContainer:{required:!1,tsType:{name:"union",raw:"Element | DocumentFragment | null",elements:[{name:"Element"},{name:"DocumentFragment"},{name:"null"}]},description:"",defaultValue:{value:"null",computed:!1}},initialActiveToolType:{required:!1,tsType:{name:"AnnotationToolId"},description:""},initialPointTemporaryMode:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},labelOverlayHost:{required:!1,tsType:{name:"union",raw:"LabelOverlayHostBinding | null",elements:[{name:"LabelOverlayHostBinding"},{name:"null"}]},description:"",defaultValue:{value:"null",computed:!1}},localPersistence:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  enabled?: boolean;
  storageKey: string;
}`,signature:{properties:[{key:"enabled",value:{name:"boolean",required:!1}},{key:"storageKey",value:{name:"string",required:!0}}]}},description:""},renderEnabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},visualRenderEnabled:{required:!1,tsType:{name:"boolean"},description:""},visualInteractionEnabled:{required:!1,tsType:{name:"boolean"},description:""},visualAnnotationEntryRoles:{required:!1,tsType:{name:"unknown"},description:""},formatOptions:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
  /** Shared Three query/edit disc policy; omitted engines retain the existing defaults above. */
  discSizing?: Partial<AnnotationDiscReferenceOptions>;
}`,signature:{properties:[{key:"scalingMode",value:{name:"ReferenceObjectScalingMode",required:!0}},{key:"worldRadiusMeters",value:{name:"number",required:!0}},{key:"targetScreenRadiusCssPx",value:{name:"number",required:!0}},{key:"resizeWorldRadiusToScreenTarget",value:{name:"boolean",required:!0}},{key:"resizeStepFactor",value:{name:"number",required:!0}},{key:"quantizeWorldRadius",value:{name:"boolean",required:!0}},{key:"discSizing",value:{name:"Partial",elements:[{name:"Readonly",elements:[{name:"intersection",raw:`AnnotationDiscSizingOptions & {
  /** How long an unchanged radius label stays visible. */
  radiusLabelVisibleDurationMs: Milliseconds;
  radiusLabelFadeDurationMs: Milliseconds;
  /** Visual transition only; selected 1/2/5 world radii remain discrete. Zero disables it. */
  resizeAnimationDurationMs: Milliseconds;
  /** Visual travel into/out of a snap, without delaying the actual pick. */
  snapAnimationDurationMs: Milliseconds;
  centerCircleDiameterCssPx: CssPixels;
  /** Reuses the visible line renderer's depth-tested darkening halo. */
  crosshairHalo: boolean;
}`,elements:[{name:"AnnotationDiscSizingOptions"},{name:"signature",type:"object",raw:`{
  /** How long an unchanged radius label stays visible. */
  radiusLabelVisibleDurationMs: Milliseconds;
  radiusLabelFadeDurationMs: Milliseconds;
  /** Visual transition only; selected 1/2/5 world radii remain discrete. Zero disables it. */
  resizeAnimationDurationMs: Milliseconds;
  /** Visual travel into/out of a snap, without delaying the actual pick. */
  snapAnimationDurationMs: Milliseconds;
  centerCircleDiameterCssPx: CssPixels;
  /** Reuses the visible line renderer's depth-tested darkening halo. */
  crosshairHalo: boolean;
}`,signature:{properties:[{key:"radiusLabelVisibleDurationMs",value:{name:"Milliseconds",required:!0},description:"How long an unchanged radius label stays visible."},{key:"radiusLabelFadeDurationMs",value:{name:"Milliseconds",required:!0}},{key:"resizeAnimationDurationMs",value:{name:"Milliseconds",required:!0},description:"Visual transition only; selected 1/2/5 world radii remain discrete. Zero disables it."},{key:"snapAnimationDurationMs",value:{name:"Milliseconds",required:!0},description:"Visual travel into/out of a snap, without delaying the actual pick."},{key:"centerCircleDiameterCssPx",value:{name:"CssPixels",required:!0}},{key:"crosshairHalo",value:{name:"boolean",required:!0},description:"Reuses the visible line renderer's depth-tested darkening halo."}]}}]}],raw:`Readonly<
  AnnotationDiscSizingOptions & {
    /** How long an unchanged radius label stays visible. */
    radiusLabelVisibleDurationMs: Milliseconds;
    radiusLabelFadeDurationMs: Milliseconds;
    /** Visual transition only; selected 1/2/5 world radii remain discrete. Zero disables it. */
    resizeAnimationDurationMs: Milliseconds;
    /** Visual travel into/out of a snap, without delaying the actual pick. */
    snapAnimationDurationMs: Milliseconds;
    centerCircleDiameterCssPx: CssPixels;
    /** Reuses the visible line renderer's depth-tested darkening halo. */
    crosshairHalo: boolean;
  }
>`}],raw:"Partial<AnnotationDiscReferenceOptions>",required:!1},description:"Shared Three query/edit disc policy; omitted engines retain the existing defaults above."}]}},description:"",defaultValue:{value:`{
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
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"toolType",value:{name:"AnnotationType",required:!0}},{key:"nodeIds",value:{name:"unknown",required:!0}},{key:"edgeIds",value:{name:"unknown",required:!0}},{key:"displayName",value:{name:"string",required:!1}},{key:"shortLabel",value:{name:"string",required:!1}},{key:"shortLabelSource",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_SHORT_LABEL_SOURCES)[keyof typeof ANNOTATION_SHORT_LABEL_SOURCES]",required:!1}},{key:"shortLabelCounter",value:{name:"number",required:!1}},{key:"hidden",value:{name:"boolean",required:!1}},{key:"locked",value:{name:"boolean",required:!1}},{key:"annotationRole",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_ENTRY_ROLES)[keyof typeof ANNOTATION_ENTRY_ROLES]",required:!1}},{key:"readOnly",value:{name:"boolean",required:!1}},{key:"labelAppearance",value:{name:"AnnotationLabelAppearance",required:!1}},{key:"elevationDisplayMode",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_ELEVATION_DISPLAY_MODES)[keyof typeof ANNOTATION_ELEVATION_DISPLAY_MODES]",required:!1}},{key:"distanceAnchorCoordinateSelection",value:{name:"unknown[union]",raw:"(typeof RUNTIME_POINT_LABEL_COORDINATE_SELECTION)[keyof typeof RUNTIME_POINT_LABEL_COORDINATE_SELECTION]",required:!1}},{key:"distanceTriangleAnchorCoordinateRole",value:{name:"unknown[union]",raw:"(typeof RUNTIME_DISTANCE_TRIANGLE_ANCHOR_COORDINATE_ROLE)[keyof typeof RUNTIME_DISTANCE_TRIANGLE_ANCHOR_COORDINATE_ROLE]",required:!1}},{key:"closed",value:{name:"boolean",required:!1}},{key:"preferredNormalBearingRad",value:{name:"number",required:!1}},{key:"externalCollection",value:{name:"signature",type:"object",raw:`{
  type: "saved-measurement";
  id: string;
}`,signature:{properties:[{key:"type",value:{name:"literal",value:'"saved-measurement"',required:!0}},{key:"id",value:{name:"string",required:!0}}]},required:!1}},{key:"uuid",value:{name:"string",required:!1},description:"Identity across machines and shares; the runtime id only counts per session."}]}}],raw:"StoredAnnotation[]",required:!0}},{key:"nodes",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"toolType",value:{name:"AnnotationType",required:!0}},{key:"nodeIds",value:{name:"unknown",required:!0}},{key:"edgeIds",value:{name:"unknown",required:!0}},{key:"displayName",value:{name:"string",required:!1}},{key:"shortLabel",value:{name:"string",required:!1}},{key:"shortLabelSource",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_SHORT_LABEL_SOURCES)[keyof typeof ANNOTATION_SHORT_LABEL_SOURCES]",required:!1}},{key:"shortLabelCounter",value:{name:"number",required:!1}},{key:"hidden",value:{name:"boolean",required:!1}},{key:"locked",value:{name:"boolean",required:!1}},{key:"annotationRole",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_ENTRY_ROLES)[keyof typeof ANNOTATION_ENTRY_ROLES]",required:!1}},{key:"readOnly",value:{name:"boolean",required:!1}},{key:"labelAppearance",value:{name:"AnnotationLabelAppearance",required:!1}},{key:"elevationDisplayMode",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_ELEVATION_DISPLAY_MODES)[keyof typeof ANNOTATION_ELEVATION_DISPLAY_MODES]",required:!1}},{key:"distanceAnchorCoordinateSelection",value:{name:"unknown[union]",raw:"(typeof RUNTIME_POINT_LABEL_COORDINATE_SELECTION)[keyof typeof RUNTIME_POINT_LABEL_COORDINATE_SELECTION]",required:!1}},{key:"distanceTriangleAnchorCoordinateRole",value:{name:"unknown[union]",raw:"(typeof RUNTIME_DISTANCE_TRIANGLE_ANCHOR_COORDINATE_ROLE)[keyof typeof RUNTIME_DISTANCE_TRIANGLE_ANCHOR_COORDINATE_ROLE]",required:!1}},{key:"closed",value:{name:"boolean",required:!1}},{key:"preferredNormalBearingRad",value:{name:"number",required:!1}},{key:"externalCollection",value:{name:"signature",type:"object",raw:`{
  type: "saved-measurement";
  id: string;
}`,signature:{properties:[{key:"type",value:{name:"literal",value:'"saved-measurement"',required:!0}},{key:"id",value:{name:"string",required:!0}}]},required:!1}},{key:"uuid",value:{name:"string",required:!1},description:"Identity across machines and shares; the runtime id only counts per session."}]}}],raw:"StoredAnnotation[]",required:!0}},{key:"nodes",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"annotations",value:{name:"unknown",required:!0}},{key:"source",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_DELETE_CONFIRMATION_SOURCES)[keyof typeof ANNOTATION_DELETE_CONFIRMATION_SOURCES]",required:!0}}]}},name:"context"}],return:{name:"union",raw:"boolean | Promise<boolean>",elements:[{name:"boolean"},{name:"Promise",elements:[{name:"boolean"}],raw:"Promise<boolean>"}]}}},description:""},carmaApi:{required:!1,tsType:{name:"boolean"},description:"Answer `carma.annotations` while mounted, so scripts, stories and tests\ncan drive the tools. On by default; the latest mounted runtime answers.",defaultValue:{value:"true",computed:!1}}}};const hI=({classNames:e,metrics:n,plugins:t,disableSelectWithoutAnnotations:o=!1,showToolTypeIndicators:r=!1,tooltipPlacement:a,getTooltipPopupContainer:i,renderToolButtonBackdrop:s})=>{const{registry:u,activeToolType:l,requestModeChange:d,annotationEntries:c}=Sc(),m=t??u.plugins,y=g.useMemo(()=>yr({annotationEntries:c}),[c]),p=g.useMemo(()=>zf(y),[y]),f=g.useMemo(()=>m.map(A=>{const v=A.descriptor,T=v.id===bn,b=T?y.length:A.annotationType?p.get(A.annotationType)??0:0;return{id:v.id,label:v.label,tooltip:v.tooltip,icon:v.icon,annotationCount:b,disabled:o&&T&&y.length===0}}),[p,y.length,o,m]);return O.jsx(ku,{activeToolId:l,tools:f,onToolSelect:A=>{d(A)},classNames:e,metrics:n,showToolTypeIndicators:r,tooltipPlacement:a,getTooltipPopupContainer:i,renderToolButtonBackdrop:s})};hI.__docgenInfo={description:"",methods:[],displayName:"RuntimeAnnotationsToolbar",props:{classNames:{required:!1,tsType:{name:"Partial",elements:[{name:"AnnotationsToolbarClassNames"}],raw:"Partial<AnnotationsToolbarClassNames>"},description:""},metrics:{required:!1,tsType:{name:"Partial",elements:[{name:"AnnotationsToolbarMetrics"}],raw:"Partial<AnnotationsToolbarMetrics>"},description:""},plugins:{required:!1,tsType:{name:"unknown"},description:""},disableSelectWithoutAnnotations:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showToolTypeIndicators:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},tooltipPlacement:{required:!1,tsType:{name:'AnnotationsToolbarProps["tooltipPlacement"]',raw:'AnnotationsToolbarProps["tooltipPlacement"]'},description:""},getTooltipPopupContainer:{required:!1,tsType:{name:'AnnotationsToolbarProps["getTooltipPopupContainer"]',raw:'AnnotationsToolbarProps["getTooltipPopupContainer"]'},description:""},renderToolButtonBackdrop:{required:!1,tsType:{name:'AnnotationsToolbarProps["renderToolButtonBackdrop"]',raw:'AnnotationsToolbarProps["renderToolButtonBackdrop"]'},description:""}}};const ut={ANNOTATION:"annotation",AUTHORING_INSTRUCTION:"authoringInstruction"},SI=(e,n)=>n?[{kind:re.ALERT,severity:Ln.WARNING,text:n.message},...e]:e,CI=({activePointQueryPickResult:e,activeToolDraftFeedback:n,activeToolDraftState:t,activeToolType:o,engine:r,authoringInstructionHelpLayout:a,helpLocale:i,includeAuthoringInstruction:s,registry:u,visualOptions:l})=>g.useMemo(()=>{var f;if(!s)return null;const d=Vf({activeToolType:o,registry:u});if(!d)return null;const c=((f=d.resolveHelpText)==null?void 0:f.call(d,{draftState:t,pointQueryPickResult:e}))??d.helpText??[],m=SI(r!=null&&r.capabilities.pointQueryDiscInScene&&d.pointQuery&&!lu.some(A=>A===d.id)?[...c,{kind:re.TEXT,text:"Der kleine offene Kreis markiert den Zielpunkt. Eine Kreuzachse liegt waagerecht in der Scheibenebene, die andere rechtwinklig dazu. Auf ebenem Boden zeigen sie Ost/West und Nord/Süd; zwei weitere Striche zeigen die Oberflächennormale. Verdeckte Teile sind gestrichelt."},{kind:re.TEXT,text:"Die Scheibe behält ihre Weltgröße. Nach einer Kartenbewegung wird ein passender Radius gewählt; R zeigt den Radius kurz nach einer Größenänderung. Beim Einrasten und Lösen eines Snaps gleitet die Scheibe kurz zum neuen Ziel."}]:c,n);if(m.length===0)return{plugin:d,content:null,visualOptions:null};const y={kind:ut.AUTHORING_INSTRUCTION,plugin:d},p=rn(typeof l=="function"?l(y):l);return{plugin:d,content:g.createElement(mr,{visualOptions:p},g.createElement(cr,{items:m,layout:a,locale:i,actionTriggerAlign:tt.START})),visualOptions:p}},[e,n,t,o,a,r,i,s,u,l]),Fo={POINT:"point",LINE:"line",AREA:"area"},Cc=e=>{switch(e){case _.POINT:return Fo.POINT;case _.DISTANCE:case _.POLYLINE:return Fo.LINE;case _.AREA_GROUND:case _.AREA_PLANAR:case _.AREA_VERTICAL:return Fo.AREA;default:return null}},EI={kind:re.HEADING,text:"Bearbeitungsmodus",level:Lt.TITLE},OI={kind:re.HEADING,text:"Punkt verschieben durch ziehen von",level:Lt.SECTION},LI={kind:re.HEADING,text:"Weitere Funktionen",level:Lt.SECTION},RI=[OI,{kind:re.ACTION,leadingLabel:"Scheibenmitte",inputAlternatives:[[Oe.DISC_CENTER]],rightAlignInput:!0,description:"→ auf der Oberfläche des 3D-Modells"},{kind:re.ACTION,leadingLabel:"Äußere Scheibe",inputAlternatives:[[Oe.DISC_OUTER]],rightAlignInput:!0,description:"→ in der Höhenebene"},{kind:re.ACTION,leadingLabel:"Blaue Pfeilspitzen",inputAlternatives:[],description:"→ entlang der Höhenachse"}],wI={kind:re.ACTION,inputAlternatives:[[Oe.CLICK]],trailingLabel:"auf anderen Punkt",description:"Höhe des Punktes übernehmen"},xI={kind:re.ACTION,inputAlternatives:[[Oe.ESCAPE],[Oe.CLICK]],trailingLabel:"außerhalb des Punktes",trailingLabelAfterLastInput:!0,description:"Bearbeitungsmodus verlassen"},wo=e=>({kind:re.ACTION,inputAlternatives:[[Oe.BACKSPACE]],description:e}),qI=e=>{switch(e){case _.POINT:case _.DISTANCE:return wo("Messung löschen");case _.POLYLINE:return wo("Punkt löschen (beim letzten verbleibenden Punkt die Messung)");case _.AREA_GROUND:case _.AREA_PLANAR:case _.AREA_VERTICAL:return wo("Punkt löschen (unter drei Punkten die Messung)");default:return wo("Messung löschen")}},_I=({toolType:e,inScene:n=!1})=>{const t=Cc(e);if(!t)return[];const o=[LI,...t===Fo.POINT?[]:[wI],xI,qI(e)];return[EI,...RI,...n?[{kind:re.TEXT,text:"Der kleine offene Kreis markiert den bearbeiteten Punkt. Eine Kreuzachse liegt waagerecht in der Scheibenebene. Die weiteren Striche zeigen die zweite Scheibenachse und die Oberflächennormale; verdeckte Teile sind gestrichelt. Die Scheibe behält ihre Weltgröße bis zur nächsten Kartenbewegung; während des Ziehens bleibt ihre Größe fest. Das Mausrad zoomt die Karte auch über den Griffen und Markern."}]:[],...o]},PI=({activeEditedNodeId:e,activeToolType:n,annotationEntries:t,engine:o,registry:r,authoringInstructionHelpLayout:a,helpLocale:i,includeAuthoringInstruction:s,visualOptions:u})=>g.useMemo(()=>{if(!s||!e||n!==bn)return null;const l=t.find(p=>p.nodeIds.includes(e))??null;if(!l)return null;const d=r.getPlugin(l.toolType)??r.getPluginsByAnnotationType(l.toolType)[0]??null;if(!d)return null;const c=_I({toolType:l.toolType,inScene:(o==null?void 0:o.capabilities.pointQueryDiscInScene)===!0&&!lu.some(p=>p===l.toolType)});if(c.length===0)return null;const m={kind:ut.AUTHORING_INSTRUCTION,plugin:d},y=rn(typeof u=="function"?u(m):u);return{kind:ut.AUTHORING_INSTRUCTION,plugin:d,slots:{content:g.createElement(mr,{visualOptions:y},g.createElement(cr,{items:c,layout:a,locale:i,actionTriggerAlign:tt.START})),collapsible:!1},visualOptions:y}},[e,n,t,o,a,i,s,r,u]),Js=Object.freeze({coordinates:Object.freeze([]),linkedNodeGroupIds:Object.freeze([]),feedback:null}),MI=({activeToolType:e,annotationToolDraftStore:n})=>{const t=g.useMemo(()=>e?[e]:[],[e]),o=gc({draftStore:n,toolTypes:t}),r=e?o[e]??Js:Js;return{activeToolDraftState:r,activeToolDraftFeedback:e?r.feedback??null:null}},DI=Object.freeze([be.LOCK,be.DELETE]),BI=[{kind:re.TEXT,text:"Lange auf einen Punkt der ausgewählten Messung klicken, um den Bearbeitungsmodus zu öffnen."}],FI=({annotation:e,visualOptions:n})=>{const t=Du(e),o={kind:ut.ANNOTATION,annotation:e},r=rn(typeof n=="function"?n(o):n);return{...r,readOnly:!!e.locked||t,hiddenActionIds:t?Array.from(new Set([...r.hiddenActionIds,...DI])):r.hiddenActionIds}},GI=({activeToolDraftFeedback:e,activeToolDraftState:n,activeToolType:t,annotationEntries:o,elevationReferenceAnnotationId:r,exportAnnotationGeoJson:a,authoringInstruction:i,flyToAllAnnotations:s,focusAnnotationId:u,formatOptions:l,nodes:d,registry:c,removeAnnotationById:m,selectedAnnotationId:y,setElevationReferenceAnnotationId:p,setSelectedAnnotationId:f,toggleAnnotationLocked:A,toggleAnnotationVisibility:v,updateAnnotationDisplayName:T,updateAnnotationShortLabel:b,visualOptions:h})=>g.useMemo(()=>{var x;if(!y)return null;const k=o.find(P=>P.id===y)??null;if(!k)return null;const N=c.getPluginsByAnnotationType(k.toolType).find(P=>{var M;return(M=P.infoBox)==null?void 0:M.getSlots})??null;if(!((x=N==null?void 0:N.infoBox)!=null&&x.getSlots))return null;const S=Du(k),I=FI({annotation:k,visualOptions:h}),C=N.infoBox.getSlots({annotation:k,annotationEntries:o,nodes:d,selectedAnnotationId:k.id,setSelectedAnnotationId:f,focusAnnotationId:u,flyToAllAnnotations:s,removeAnnotationById:m,exportAnnotationGeoJson:a,toggleAnnotationVisibility:v,toggleAnnotationLocked:A,elevationReferenceAnnotationId:r,setElevationReferenceAnnotationId:p,updateAnnotationDisplayName:S?()=>{}:T,updateAnnotationShortLabel:S?()=>{}:b,formatOptions:l,infoBoxVisualOptions:I});if(!C)return null;const L=(i==null?void 0:i.plugin.alwaysShowHelpTextWhileActive)===!0&&(n.coordinates.length>0||e!==null),R=t===bn&&Cc(k.toolType)!==null&&!k.locked&&!S;let E;return R&&(E=g.createElement(mr,{visualOptions:I,children:g.createElement(cr,{items:BI})})),{kind:ut.ANNOTATION,annotation:k,instructionContent:L?i.content??void 0:E,instructionToolId:L?i.plugin.id:void 0,slots:C,visualOptions:I}},[e,n,t,o,r,a,i,s,u,l,d,c,m,y,p,f,A,v,T,b,h]),jI=({authoringInstructionHelpLayout:e,helpLocale:n,includeAuthoringInstruction:t=!1,visualOptions:o}={})=>{const r=Sc(),a=II(),{activeToolDraftFeedback:i,activeToolDraftState:s}=MI(r),u=CI({activePointQueryPickResult:a,activeToolDraftFeedback:i,activeToolDraftState:s,activeToolType:r.activeToolType,authoringInstructionHelpLayout:e,helpLocale:n,includeAuthoringInstruction:t,registry:r.registry,engine:r.engine,visualOptions:o}),l=PI({activeEditedNodeId:r.activeEditedNodeId,activeToolType:r.activeToolType,annotationEntries:r.annotationEntries,registry:r.registry,engine:r.engine,authoringInstructionHelpLayout:e,helpLocale:n,includeAuthoringInstruction:t,visualOptions:o}),d=GI({activeToolDraftFeedback:i,activeToolDraftState:s,activeToolType:r.activeToolType,annotationEntries:r.annotationEntries,elevationReferenceAnnotationId:r.elevationReferenceAnnotationId,exportAnnotationGeoJson:r.exportAnnotationGeoJson,authoringInstruction:u,flyToAllAnnotations:r.flyToAllAnnotations,focusAnnotationId:r.focusAnnotationId,formatOptions:r.formatOptions,nodes:r.nodes,registry:r.registry,removeAnnotationById:r.removeAnnotationById,selectedAnnotationId:r.selectedAnnotationId,setElevationReferenceAnnotationId:r.setElevationReferenceAnnotationId,setSelectedAnnotationId:r.setSelectedAnnotationId,toggleAnnotationLocked:r.toggleAnnotationLocked,toggleAnnotationVisibility:r.toggleAnnotationVisibility,updateAnnotationDisplayName:r.updateAnnotationDisplayName,updateAnnotationShortLabel:r.updateAnnotationShortLabel,visualOptions:o});return l||(d||r.selectedAnnotationId?d:!(u!=null&&u.content)||!u.visualOptions?null:{kind:ut.AUTHORING_INSTRUCTION,plugin:u.plugin,slots:{content:u.content,collapsible:!1},visualOptions:u.visualOptions})},HI=({pixelWidth:e,fitContentWidth:n,useControlLayout:t,controlPosition:o,controlOrder:r,collapsedHorizontalAnchor:a,style:i,visualOptions:s})=>{const u=jI({visualOptions:s});return!u||u.kind!==ut.ANNOTATION?null:O.jsx(uu,{pixelWidth:e,fitContentWidth:n,useControlLayout:t,controlPosition:o,controlOrder:r,collapsedHorizontalAnchor:a,style:i,slots:u.slots,visualOptions:u.visualOptions})};HI.__docgenInfo={description:"",methods:[],displayName:"RuntimeAnnotationInfoBox"};const zI=new gn,VI=(e,n,t)=>{const o=new w,r=new w,a=new w;Rc(e,zI).invert().extractBasis(o,r,a);const i={vertical:a.normalize(),"horizontal-east":o.normalize(),"horizontal-north":r.normalize()};return id(n,t).map(s=>({...s,direction:i[s.id]}))},XS=(e,n,t)=>VI(e,n,t).filter(o=>ad(o.id)),UI={vertical:new w(0,0,1),"horizontal-east":new w(1,0,0),"horizontal-north":new w(0,1,0)},ZS=(e,n,t)=>e&&e.length>0?e.map(o=>({...o,color:o.color??ii})):vv(n,t).map(o=>({...o,direction:UI[o.id]})),el=(e,n,{labels:t,arrowActiveEdgePx:o,onAxisMouseDown:r,onWheel:a})=>g.createElement("svg",{key:`${n.id}-arrow-${e}`,[`data-point-move-axis-arrow-${e}`]:n.id,onMouseDown:i=>r(i,n),onWheel:a,viewBox:Em(o),style:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -100%)",transformOrigin:"50% 100%",width:`${o}px`,height:`${Om(o)}px`,display:"block",color:n.color??ii,zIndex:dv,pointerEvents:"auto",cursor:"move",userSelect:"none",overflow:"visible"},title:n.title??t.genericAxis},g.createElement("path",{"data-point-move-axis-arrow-outline":"true",d:bl(o),fill:"currentColor",stroke:qa,strokeWidth:`${Fe}`,strokeLinejoin:"round",strokeLinecap:"round",paintOrder:"stroke",vectorEffect:"non-scaling-stroke",shapeRendering:"geometricPrecision"}),g.createElement("path",{"data-point-move-axis-arrow-rim":"true",d:"",fill:"none",stroke:qa,strokeOpacity:sN,strokeWidth:`${Fe}`,strokeLinejoin:"round",vectorEffect:"non-scaling-stroke",shapeRendering:"geometricPrecision",style:{display:"none"}}),g.createElement("circle",{"data-point-move-axis-arrow-tip":"true",cx:o/2,cy:0,r:lN,fill:uN})),$I=(e,{axisArrowOffsetPx:n,axisWidthPx:t})=>g.createElement("div",{key:`${e.id}-line`,"data-point-move-axis-line":e.id,style:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)",width:`${n*2}px`,height:`${t}px`,background:Ac,opacity:1,zIndex:sv,pointerEvents:"none"}}),WI=e=>{const{axisCandidates:n,labels:t,axisUiLengthPx:o,showAxes:r,showRotationHandle:a,hitOnly:i,snapPlaneDragToGround:s,centerPlaneDragCursor:u,onDiscPlaneMouseDown:l,onRotationHandleMouseDown:d,onCenterMouseDown:c,onWheel:m}=e;return g.createElement("div",{style:{position:"relative",width:`${o}px`,height:`${o}px`,pointerEvents:"none",userSelect:"none",overflow:"visible"}},...(r?n:[]).flatMap(y=>[...i?[]:[$I(y,e)],el("up",y,e),el("down",y,e)]),g.createElement("svg",{key:"disc-outline-svg","data-point-move-disc-outline-svg":"true",viewBox:`-160 -160 ${dt} ${dt}`,width:`${dt}`,height:`${dt}`,style:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)",width:`${dt}px`,height:`${dt}px`,overflow:"hidden",pointerEvents:"none",zIndex:lv}},...(i?[]:n).map(y=>g.createElement("path",{key:`disc-outline-path-${y.id}`,"data-point-move-disc-outline-path":y.id,d:"",fill:"none",stroke:kt,strokeWidth:`${Fe}`,strokeLinejoin:"round",strokeLinecap:"round",vectorEffect:"non-scaling-stroke",shapeRendering:"geometricPrecision",style:{opacity:pv,display:"none",pointerEvents:"none"}})),g.createElement("path",{key:"disc-interaction-path","data-point-move-disc-interaction-path":"true",d:"",onMouseDown:l,onWheel:m,fill:"rgba(255,255,255,0.001)",stroke:"none",style:{display:"none",pointerEvents:"auto",cursor:gv}},g.createElement("title",null,t.outerDisc)),...a?[g.createElement("ellipse",{key:"disc-rotation-handle","data-point-move-disc-rotation-handle":"true",cx:"0",cy:"0",rx:`${ps}`,ry:`${ps}`,onMouseDown:d,onWheel:m,fill:kt,stroke:kt,strokeWidth:`${Fe}`,vectorEffect:"non-scaling-stroke",style:{display:"none",opacity:i?0:1,pointerEvents:"auto",cursor:"grab"}})]:[]),g.createElement("div",{"data-point-move-axis-center-hit":"true",onMouseDown:c,onWheel:m,style:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)",width:`${ys}px`,height:`${ys}px`,borderRadius:"50%",background:"transparent",zIndex:uv,pointerEvents:"auto",cursor:u,userSelect:"none"},title:s?t.surfacePlane:t.freePlane}))};WI.__docgenInfo={description:"The overlay markup; `layoutPointMoveGizmoOverlay` positions it every frame.",methods:[],displayName:"createPointMoveGizmoOverlayContent",props:{axisCandidates:{required:!0,tsType:{name:"Array",elements:[{name:"AnnotationGizmoAxisCandidate"}],raw:"AnnotationGizmoAxisCandidate[]"},description:""},labels:{required:!0,tsType:{name:"AnnotationGizmoLabels"},description:""},axisUiLengthPx:{required:!0,tsType:{name:"number"},description:""},axisArrowOffsetPx:{required:!0,tsType:{name:"number"},description:""},axisWidthPx:{required:!0,tsType:{name:"number"},description:""},arrowActiveEdgePx:{required:!0,tsType:{name:"number"},description:""},showAxes:{required:!0,tsType:{name:"boolean"},description:""},showRotationHandle:{required:!0,tsType:{name:"boolean"},description:""},hitOnly:{required:!0,tsType:{name:"boolean"},description:"The scene draws the gizmo: only the transparent hit areas stay here."},snapPlaneDragToGround:{required:!0,tsType:{name:"boolean"},description:""},centerPlaneDragCursor:{required:!0,tsType:{name:"string"},description:""},onAxisMouseDown:{required:!0,tsType:{name:"signature",type:"function",raw:`(
  event: ReactMouseEvent<HTMLDivElement>,
  axisCandidate: AnnotationGizmoAxisCandidate
) => void`,signature:{arguments:[{type:{name:"ReactMouseEvent",elements:[{name:"HTMLDivElement"}],raw:"ReactMouseEvent<HTMLDivElement>"},name:"event"},{type:{name:"AnnotationGizmoAxisCandidate"},name:"axisCandidate"}],return:{name:"void"}}},description:""},onDiscPlaneMouseDown:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: ReactMouseEvent<SVGPathElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",elements:[{name:"SVGPathElement"}],raw:"ReactMouseEvent<SVGPathElement>"},name:"event"}],return:{name:"void"}}},description:""},onRotationHandleMouseDown:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: ReactMouseEvent<SVGCircleElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",elements:[{name:"SVGCircleElement"}],raw:"ReactMouseEvent<SVGCircleElement>"},name:"event"}],return:{name:"void"}}},description:""},onCenterMouseDown:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: ReactMouseEvent<HTMLDivElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",elements:[{name:"HTMLDivElement"}],raw:"ReactMouseEvent<HTMLDivElement>"},name:"event"}],return:{name:"void"}}},description:""},onWheel:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: ReactWheelEvent) => void",signature:{arguments:[{type:{name:"ReactWheelEvent"},name:"event"}],return:{name:"void"}}},description:""}}};const YI=new gn,KI=({model:e,handle:n})=>{const t=e.place();t&&n.setModelMatrix(t),n.setVisible(t!==null)},QI=e=>{e.forEach(({handle:n})=>n.destroy()),e.clear()},JS=(e,n)=>{const t=g.useRef(new Map);g.useEffect(()=>{const o=t.current;return()=>{H(e)?(QI(o),e.requestRender()):o.clear()}},[e]),g.useEffect(()=>{const o=t.current;if(!H(e)){o.clear();return}const r=new Set(n.map(a=>a.id));o.forEach((a,i)=>{r.has(i)||(a.handle.destroy(),o.delete(i))}),n.forEach(a=>{const i=o.get(a.id);if((i==null?void 0:i.model.signature)===a.signature){i.model=a;return}i==null||i.handle.destroy(),o.delete(a.id);const s=a.place(),u=a.create(e,s??YI);u&&(u.setVisible(s!==null),o.set(a.id,{model:a,handle:u}))}),e.requestRender()},[e,n]),g.useEffect(()=>{if(H(e))return e.subscribePreRender(()=>{try{t.current.forEach(KI)}catch{}})},[e])};export{Fe as $,uy as A,tn as B,Tp as C,sd as D,Fv as E,md as F,Se as G,rc as H,Yd as I,Hm as J,bb as K,Ih as L,SS as M,cv as N,sS as O,Wd as P,OS as Q,Ba as R,ii as S,ES as T,CS as U,bv as V,hh as W,LS as X,vv as Y,sv as Z,dv as _,Lh as a,pc as a$,dt as a0,lv as a1,kt as a2,pv as a3,gv as a4,ps as a5,uv as a6,iS as a7,lS as a8,cS as a9,yb as aA,wd as aB,dn as aC,rg as aD,Sd as aE,Cd as aF,rb as aG,Od as aH,Ed as aI,Ld as aJ,jp as aK,Hp as aL,su as aM,ng as aN,fb as aO,Aa as aP,Ab as aQ,Bg as aR,be as aS,xh as aT,qh as aU,_h as aV,Mh as aW,Bh as aX,Gh as aY,Dk as aZ,js as a_,TS as aa,bS as ab,NS as ac,IS as ad,hS as ae,Nh as af,mS as ag,yS as ah,pS as ai,uS as aj,AS as ak,vS as al,RS as am,dS as an,gS as ao,fS as ap,ad as aq,kS as ar,zm as as,ys as at,id as au,Wi as av,Kn as aw,Zh as ax,Rl as ay,og as az,Rh as b,Pe as b$,Mk as b0,FS as b1,ag as b2,MS as b3,jS as b4,GS as b5,DS as b6,PS as b7,H as b8,BS as b9,NI as bA,bn as bB,hI as bC,HI as bD,Sc as bE,Pa as bF,Ot as bG,sp as bH,yp as bI,ue as bJ,Qo as bK,mo as bL,yr as bM,ti as bN,br as bO,Vp as bP,au as bQ,he as bR,Eh as bS,Oh as bT,Lv as bU,vr as bV,Ov as bW,wS as bX,si as bY,Sh as bZ,xS as b_,XS as ba,go as bb,ta as bc,cb as bd,ig as be,$S as bf,US as bg,VS as bh,lb as bi,WS as bj,YS as bk,KS as bl,nc as bm,JS as bn,tg as bo,xd as bp,ZS as bq,WI as br,Jn as bs,z as bt,sa as bu,Ol as bv,Ch as bw,Iu as bx,Te as by,lu as bz,cy as c,Tr as c0,ai as c1,ri as c2,qt as c3,Jp as c4,oS as c5,gk as c6,uk as c7,$h as c8,Kd as c9,zh as cA,Vh as cB,nS as cC,IN as cD,tS as cE,Xo as cF,eS as cG,co as cH,hN as cI,xu as cJ,QS as cK,zn as cL,ve as cM,Wh as cN,Tn as cO,Jh as cP,$n as cQ,Yh as cR,wA as cS,Br as cT,_p as cU,iu as cV,Ip as cW,zS as cX,HS as cY,fd as cZ,Re as ca,ht as cb,Nr as cc,wh as cd,li as ce,_S as cf,Xh as cg,Hh as ch,CN as ci,SN as cj,oi as ck,qd as cl,UA as cm,$A as cn,rS as co,aS as cp,Oa as cq,Fp as cr,Ee as cs,Kh as ct,Qh as cu,Qp as cv,Oe as cw,Ln as cx,qS as cy,Uh as cz,dy as d,Ue as e,tt as f,_ as g,cr as h,re as i,it as j,xe as k,rn as l,mr as m,zg as n,ug as o,Fg as p,jg as q,_I as r,Ap as s,Nt as t,_r as u,ee as v,Ie as w,Xl as x,Gv as y,_e as z};
