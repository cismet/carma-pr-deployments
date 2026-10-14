import{j as O}from"./jsx-runtime-DNp_qQjF.js";import{r as g,b as si,R as yc}from"./index-CSJjS6Ct.js";import{f as fr,C as le,a as Qe,r as pc}from"./index-D9NkO_DI.js";import{c as Us,a as _o,w as Sa,b as Vs,K as gc,l as Qr,z as li,n as fc}from"./camera-local-mercator-fit-DhoOJMPy.js";import{d as zt,r as Yt,i as $s,b as Ws,T as Ac,M as vc,P as Tc}from"./angles-O4gcnBa7.js";import{F as kt,bv as bc,bw as kc,aq as Nc,ap as Ic,bx as hc,by as Sc,bz as Cc,V as Ec,aX as Oc,bA as Lc,z as Rc,bB as wc,bC as xc,bD as qc,bE as _c}from"./index-A73S1lKT.js";import{T as Ys}from"./index-CXgqBzOb.js";import{h as Pc,l as Ks,i as Qs,k as Mc,q as Xs,s as Dc,t as Bc,u as Fc,e as Gc,A as jc,d as Hc,c as zc,a as Uc,b as Vc}from"./StripChartPanel-MDqMJoPP.js";import{r as $c}from"./index-D1cknlJ6.js";import{w as Ar,x as Zs,y as po,z as Wc,A as Yc,B as Kc,C as Qc,i as Xc,D as Zc,E as Jc,F as em,S as nm,G as tm,l as Ca,f as Yo,s as Js,H as tn,t as om,I as el,J as nl,K as tl,m as ol,n as vr,M as Tr,N as rm,L as am}from"./useLineSegmentVisualizers-CE2INj9H.js";import{F as qt}from"./locales-DbHdB30_.js";import{L as im,f as yt}from"./length-format-BQI28fDZ.js";import{V as Wn}from"./constants-C6-_E4xW.js";import{c as Be}from"./clamp-co6UzHBn.js";import{V as x,s as Ko,j as sm,i as lm}from"./three.module-DbFHiiZ-.js";import{q as rl,h as al,s as il,f as um,i as dm,j as cm,g as mm,d as sl,b as ll,n as ym,a as pm,c as gm}from"./geometry2d-CXoA_VhM.js";import{c as Qo}from"./plane-basis-D9-oqs7B.js";import{A as fm}from"./cssAxisGizmoElement-cEPQY2Ts.js";/* empty css                                      */import{i as Am}from"./is-finite-number-DNiDh1l_.js";import{i as vm}from"./plane-intersections-DhJfyQJx.js";import{r as Tm,P as ul,s as bm,c as km,a as Nm,L as Im}from"./computePointLabelLayout-DH2-ovTr.js";import{u as hm}from"./useLineVisualizers-hzMo-gOT.js";import{c as Kt,r as Sm,e as Cm,g as Em,n as _e}from"./geospatial-camera-basis-hE-khB1f.js";import{z as Om}from"./angle-normalization-9MH7zpFM.js";const Lm=(e,n,t)=>{const o=Be((t-e)/(n-e),0,1);return o*o*(3-2*o)},Ea={SCREEN:"screen",WORLD:"world"},ui=[1,2,5,10],Vn=e=>{if(!Number.isFinite(e)||e<=0)return e;const n=10**Math.floor(Math.log10(e));let t=ui[0]*n;for(const o of ui){const r=o*n;Math.abs(r-e)<Math.abs(t-e)&&(t=r)}return t},Rm=({targetScreenPx:e,pixelPerWorld:n,quantize:t})=>{if(!Number.isFinite(n)||n<=0)return e>0?e:0;const o=e/n;return t?Vn(o):o},JI=(e,n,t,o)=>!Number.isFinite(e)||e<=Wn?0:Be(n/e,t,o),dl=2,cl=(e,n,t=dl)=>{if(!Number.isFinite(e)||e<=0)return!0;if(!Number.isFinite(n)||n<=0)return!1;const o=n/e;return o>=t||o<=1/t},eh=()=>{let e=null,n=null;return{resolve:({currentScale:t,targetScreenPx:o,fallback:r,stepFactor:a=dl,quantize:i=!1,minWorldSize:s=0})=>!Number.isFinite(t)||t<=0?e??r:((e===null||cl(n??0,t,a))&&(e=Math.max(Rm({targetScreenPx:o,pixelPerWorld:t,quantize:i}),s),n=t),e),reset:()=>{e=null,n=null}}},wm={minSegments:48,maxSegments:256,targetEdgePx:2.5},nh=(e,n={})=>{const{minSegments:t,maxSegments:o,targetEdgePx:r}={...wm,...n};if(!Number.isFinite(e)||e<=0)return t;const a=2*Math.PI*e,i=Math.ceil(a/Math.max(.5,r));return Math.min(o,Math.max(t,i))},Sn=Object.freeze({epsilon:1e-6,polylabelPrecision:.5,polylabelMaxCells:2e4,interiorSampleGrid:18,minInteriorSampleGrid:6}),xm=(e,n,t)=>{const o=t.x-n.x,r=t.y-n.y,a=o*o+r*r;return a<=Sn.epsilon**2?0:Be(((e.x-n.x)*o+(e.y-n.y)*r)/a,0,1)},qm=(e,n,t)=>{const o=xm(e,n,t);return{x:n.x+(t.x-n.x)*o,y:n.y+(t.y-n.y)*o}},ml=(e,n,t)=>{const o=qm(e,n,t);return Math.hypot(e.x-o.x,e.y-o.y)},yl=e=>e.map((n,t)=>[n,e[(t+1)%e.length]]),Oa=(e,n,t=Sn.epsilon)=>{if(e.length<3)return!1;let o=!1;for(const[r,a]of yl(e)){if(ml(n,r,a)<=t)return!0;a.y>n.y!=r.y>n.y&&n.x<(r.x-a.x)*(n.y-a.y)/(r.y-a.y+Number.EPSILON)+a.x&&(o=!o)}return o},pl=(e,n)=>e.length<2?0:Math.min(...yl(e).map(([t,o])=>ml(n,t,o))),_m=(e,n)=>(Oa(e,n)?1:-1)*pl(e,n),gl=e=>{const n=e.map(a=>a.x),t=e.map(a=>a.y),o=Math.min(...n),r=Math.min(...t);return{minX:o,minY:r,width:Math.max(...n)-o,height:Math.max(...t)-r}},Pm=(e,n=Sn.interiorSampleGrid)=>{const{minX:t,minY:o,width:r,height:a}=gl(e);if(r<=0||a<=0)return null;const i=Math.max(Sn.minInteriorSampleGrid,Math.floor(n));let s=null;for(let u=0;u<=i;u+=1)for(let l=0;l<=i;l+=1){const d={x:t+r*l/i,y:o+a*u/i};if(!Oa(e,d))continue;const c=pl(e,d);(!s||c>s.radius)&&(s={center:d,radius:c})}return s},Mm=(e,n=Sn.polylabelPrecision,t=Sn.polylabelMaxCells)=>{if(e.length<3||e.some(p=>!Number.isFinite(p.x)||!Number.isFinite(p.y)))return null;const{minX:o,minY:r,width:a,height:i}=gl(e),s=Math.min(a,i);if(a<=0||i<=0||s<=Sn.epsilon)return null;const u=(p,f,A)=>{const v=_m(e,{x:p,y:f});return{x:p,y:f,h:A,d:v,max:v+A*Math.SQRT2}},l=[];for(let p=o;p<o+a;p+=s)for(let f=r;f<r+i;f+=s)l.push(u(p+s/2,f+s/2,s/2));const d=rl({points:e,degenerateAreaEpsilon:Sn.epsilon}),c=u(o+a/2,r+i/2,0);let m=d?u(d.x,d.y,0):c;c.d>m.d&&(m=c);const y=Math.max(.1,n);for(let p=0;l.length>0&&p<t;p+=1){const f=l.reduce((b,T,I)=>T.max>l[b].max?I:b,0),[A]=l.splice(f,1);if(!A)break;if(A.d>m.d&&(m=A),A.max-m.d<=y)continue;const v=A.h/2;l.push(u(A.x-v,A.y-v,v),u(A.x+v,A.y-v,v),u(A.x-v,A.y+v,v),u(A.x+v,A.y+v,v))}return Number.isFinite(m.d)&&m.d>0?{center:{x:m.x,y:m.y},radius:m.d}:Pm(e)},Dm=(e,n)=>{const t=n.map(s=>({x:s.x-e.x,y:s.y-e.y})),o=t.map(s=>Math.hypot(s.x,s.y));if(o.some(s=>s<1e-9))return null;const r=t.map((s,u)=>{const l=t[(u+1)%t.length];return Math.tan(Math.atan2(s.x*l.y-s.y*l.x,s.x*l.x+s.y*l.y)/2)}),a=o.map((s,u)=>(r[(u-1+o.length)%o.length]+r[u])/s),i=a.reduce((s,u)=>s+u,0);return!Number.isFinite(i)||Math.abs(i)<1e-12?null:a.map(s=>s/i)},Bm=(e,n)=>n.reduce((t,o,r)=>al(t,il(o,e[r]??0)),{x:0,y:0}),th=e=>{if(e.length<3)return[...e];const n=[...e].sort((i,s)=>i.x-s.x||i.y-s.y),t=(i,s,u)=>(s.x-i.x)*(u.y-i.y)-(s.y-i.y)*(u.x-i.x),o=i=>i.reduce((s,u)=>{for(;s.length>=2&&t(s[s.length-2],s[s.length-1],u)<=0;)s.pop();return s.push(u),s},[]),r=o(n),a=o([...n].reverse());return[...r.slice(0,-1),...a.slice(0,-1)]},Fm=[[0,1],[0,2],[1,2]],Gm=32,jm=1e-10,Oe=(e,n,t)=>{var o;return((o=e[n])==null?void 0:o[t])??0},ze=(e,n,t,o)=>{const r=e[n];r&&(r[t]=o)},Hm=e=>Fm.map(([n,t])=>({row:n,column:t,value:Math.abs(Oe(e,n,t))})).reduce((n,t)=>t.value>n.value?t:n),zm=(e,n)=>{const t=[[0,0,0],[0,0,0],[0,0,0]];return e.forEach(o=>{const r=[o.x-n.x,o.y-n.y,o.z-n.z];for(let a=0;a<3;a+=1)for(let i=a;i<3;i+=1){const s=Oe(t,a,i)+(r[a]??0)*(r[i]??0);ze(t,a,i,s),ze(t,i,a,s)}}),t},Um=e=>{const n=e.map(r=>[...r]),t=[[1,0,0],[0,1,0],[0,0,1]];for(let r=0;r<Gm;r+=1){const{row:a,column:i,value:s}=Hm(n);if(s<=jm)break;const u=Oe(n,a,a),l=Oe(n,i,i),d=Oe(n,a,i),c=.5*Math.atan2(2*d,l-u),m=Math.cos(c),y=Math.sin(c);for(let p=0;p<3;p+=1){if(p===a||p===i)continue;const f=Oe(n,p,a),A=Oe(n,p,i),v=m*f-y*A,b=y*f+m*A;ze(n,p,a,v),ze(n,a,p,v),ze(n,p,i,b),ze(n,i,p,b)}ze(n,a,a,m*m*u-2*y*m*d+y*y*l),ze(n,i,i,y*y*u+2*y*m*d+m*m*l),ze(n,a,i,0),ze(n,i,a,0);for(let p=0;p<3;p+=1){const f=Oe(t,p,a),A=Oe(t,p,i);ze(t,p,a,m*f-y*A),ze(t,p,i,y*f+m*A)}}let o=0;for(let r=1;r<3;r+=1)Oe(n,r,r)<Oe(n,o,o)&&(o=r);return[Oe(t,0,o),Oe(t,1,o),Oe(t,2,o)]},fl=Wn*Wn,Al=(e,n,t,o=e.clone())=>{const r=t.lengthSq();if(r<=fl)return o.copy(e);const a=e.clone().sub(n).dot(t);return o.copy(e).addScaledVector(t,-a/r)},oh=(e,n,t)=>{const o=t.length();return o<=Wn?0:e.clone().sub(n).dot(t)/o},La=(e,n,t,o=e.clone())=>(o.crossVectors(n.clone().sub(e),t.clone().sub(e)),o.lengthSq()<=fl?null:o.normalize()),rh=e=>{let n=0,t=0,o=0;for(let r=0;r<e.length;r+=1){const a=e[r],i=e[(r+1)%e.length];n+=(a.y-i.y)*(a.z+i.z),t+=(a.z-i.z)*(a.x+i.x),o+=(a.x-i.x)*(a.y+i.y)}return n*n+t*t+o*o>0?e[0].clone().set(n,t,o).normalize():e.length>=3?La(e[0],e[1],e[2]):null},vl=(e,n,t,o,r)=>{if(!Number.isFinite(o)||o<=0)return null;const a=n.clone().sub(e),i=t.clone().sub(e),s=a.length(),u=i.length();if(s<=Wn||u<=Wn)return null;const l=a.normalize(),d=i.normalize(),c=Be(l.dot(d),-1,1),m=Math.acos(c);if(!Number.isFinite(m)||m<=.001)return null;const y=d.clone().addScaledVector(l,-c);if(y.length()<=1e-5)return null;y.normalize();const p=Math.min(o,s*.999,u*.999);if(p<=Wn)return null;const f=Math.max(8,r);return Array.from({length:f+1},(A,v)=>{const b=m*(v/f);return l.clone().multiplyScalar(Math.cos(b)).addScaledVector(y,Math.sin(b)).normalize().multiplyScalar(p).add(e)})},Vm=1e-12,z=(e,n)=>Us(zt(e.longitude),zt(e.latitude),e.altitude,n),Qn=e=>{const n=_o(e);return{longitude:Yt(n.longitude),latitude:Yt(n.latitude),altitude:n.altitude}},Xr=(e,n=new x)=>n.copy(e).lengthSq()>Vm?n.normalize():n.set(0,0,1),Ra=(e,n=new x)=>n.copy(Sa(e).up),ah=(e,n,t)=>{const o=z({...e,altitude:0}).lerp(z({...n,altitude:0}),t),{longitude:r,latitude:a}=_o(o);return{longitude:Yt(r),latitude:Yt(a),altitude:e.altitude+(n.altitude-e.altitude)*t}},ih=(e,n)=>{const t=Vs(z({...n,altitude:0}),z({...e,altitude:0}));return Math.hypot(t.east,t.north)},he=(e,n=new x)=>n.set(e.x,e.y,e.z),yn=e=>({x:e.x,y:e.y,z:e.z}),Tl=$s,$m=(e,n,t=Tl)=>{const o=n.clone().sub(e);if(!(o.lengthSq()>0))return null;o.normalize();const{north:r,up:a}=Sa(e),i=Math.abs(a.dot(o))>1-1e-12?r:a;return{positionECEF:e.clone(),directionECEF:o,upECEF:Kt(i,o).normalize(),verticalFovRad:t}},di=e=>Cm({forward:e.directionECEF,up:e.upECEF,right:new x().crossVectors(e.directionECEF,e.upECEF)}),Wm=(e,n,t)=>{const{forward:o,up:r}=Sm(di(e).slerp(di(n),t));return{positionECEF:gc(e.positionECEF,n.positionECEF,t),directionECEF:o,upECEF:r,verticalFovRad:Qr(e.verticalFovRad,n.verticalFovRad,t)}},Ym={prefix:"fac",iconName:"row-resize",icon:[512,512,[],"","M278.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-64 64c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8l32 0l0 96l-214.7 0l0 64l214.7 0l0 96l-32 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l64 64c12.5 12.5 32.8 12.5 45.3 0l64-64c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8l-32 0l0-96l214.7 0l0-64l-214.7 0l0-96l32 0c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-64-64z"]},Km=Ks+Qs,Qm=10,Tn=Pc/2,Je=Ks,bn=Qs,kn=Mc,Xm=Object.freeze([{key:"right",pathD:`M ${Je} 0 L ${Je+kn} ${-1.5} L ${Je+bn} ${-1.5} L ${Je+bn} ${Tn} L ${Je+kn} ${Tn} Z`},{key:"left",pathD:`M ${-5-bn} ${-1.5} L ${-5-kn} ${-1.5} L -5 0 L ${-5-kn} ${Tn} L ${-5-bn} ${Tn} Z`},{key:"bottom",pathD:`M ${-1.5} ${Je+kn} L 0 ${Je} L ${Tn} ${Je+kn} L ${Tn} ${Je+bn} L ${-1.5} ${Je+bn} Z`},{key:"top",pathD:`M ${-1.5} ${-5-bn} L ${Tn} ${-5-bn} L ${Tn} ${-5-kn} L 0 -5 L ${-1.5} ${-5-kn} Z`}]),ci=100,mi=300,Zr=({additionalAttributes:e="",fill:n,pathDefinitions:t,stroke:o,strokeLinejoin:r,strokeWidth:a})=>t.map(({pathD:i})=>`<path d="${i}" fill="${n}"${typeof o=="string"?` stroke="${o}"`:""}${typeof r=="string"?` stroke-linejoin="${r}"`:""}${typeof a=="number"?` stroke-width="${a}"`:""}${e}/>`).join(""),bl=({contentMarkup:e,rootStyleText:n,sizePx:t,viewBox:o})=>[`<svg xmlns="http://www.w3.org/2000/svg" width="${t}" height="${t}" viewBox="${o}" preserveAspectRatio="xMidYMid meet" shape-rendering="geometricPrecision"${typeof n=="string"&&n.length>0?` style="${n}"`:""}>`,e,"</svg>"].join(""),sh=({pathDefinitions:e,foregroundFill:n,rootStyleText:t,sizePx:o,viewBox:r})=>bl({contentMarkup:Zr({fill:n,pathDefinitions:e}),rootStyleText:t,sizePx:o,viewBox:r}),lh=({pathDefinitions:e,shadowBlurPx:n,shadowStrokeColor:t,shadowStrokeLinejoin:o,shadowStrokeWidth:r,rootStyleText:a,sizePx:i,viewBox:s})=>{const u=Math.max(n,0),l=Math.max(r,0),d="cursor-shadow-blur";return bl({contentMarkup:[u>0?`<defs><filter id="${d}" x="-${ci}%" y="-${ci}%" width="${mi}%" height="${mi}%"><feDropShadow dx="0" dy="0" stdDeviation="${u}" flood-color="${t}" flood-opacity="1"/></filter></defs>`:"",l>0?Zr({additionalAttributes:u>0?` filter="url(#${d})"`:"",fill:t,pathDefinitions:e,stroke:t,strokeLinejoin:o,strokeWidth:l}):Zr({additionalAttributes:u>0?` filter="url(#${d})"`:"",fill:t,pathDefinitions:e})].join(""),rootStyleText:a,sizePx:i,viewBox:s})},kl="http://www.w3.org/2000/svg",yi=100,pi=300;let gi=0;const pt=e=>document.createElementNS(kl,e),Nl=(e,{blendMode:n=Xs.NORMAL,sizePx:t,viewBox:o})=>{e.setAttribute("xmlns",kl),e.setAttribute("width",`${t}`),e.setAttribute("height",`${t}`),e.setAttribute("viewBox",o),e.setAttribute("preserveAspectRatio","xMidYMid meet"),e.setAttribute("shape-rendering","geometricPrecision"),e.style.display="block",e.style.overflow="visible",e.style.mixBlendMode=n,e.style.pointerEvents="none"},Il=({filterId:e,fill:n,pathDefinitions:t,parentElement:o,stroke:r,strokeLinejoin:a,strokeWidth:i})=>{t.forEach(({pathD:s})=>{const u=pt("path");u.setAttribute("d",s),u.setAttribute("fill",n),typeof r=="string"&&u.setAttribute("stroke",r),typeof a=="string"&&u.setAttribute("stroke-linejoin",a),typeof i=="number"&&u.setAttribute("stroke-width",`${i}`),typeof e=="string"&&e.length>0&&u.setAttribute("filter",`url(#${e})`),o.appendChild(u)})},Zm=(e,n,t)=>{if(!(n>0))return;gi+=1;const o=`annotation-cursor-shadow-blur-${gi}`,r=pt("defs"),a=pt("filter"),i=pt("feDropShadow");return a.setAttribute("id",o),a.setAttribute("x",`-${yi}%`),a.setAttribute("y",`-${yi}%`),a.setAttribute("width",`${pi}%`),a.setAttribute("height",`${pi}%`),i.setAttribute("dx","0"),i.setAttribute("dy","0"),i.setAttribute("flood-color",t),i.setAttribute("flood-opacity","1"),i.setAttribute("stdDeviation",`${n}`),a.appendChild(i),r.appendChild(a),e.appendChild(r),o},Jm=({blendMode:e="normal",foregroundFill:n,pathDefinitions:t,sizePx:o,viewBox:r})=>{const a=pt("svg");return Nl(a,{blendMode:e,sizePx:o,viewBox:r}),Il({fill:n,parentElement:a,pathDefinitions:t}),a},ey=({blendMode:e="normal",pathDefinitions:n,shadowBlurPx:t,shadowStrokeColor:o,shadowStrokeLinejoin:r,shadowStrokeWidth:a,sizePx:i,viewBox:s})=>{const u=pt("svg"),l=Math.max(a,0),d=Zm(u,Math.max(t,0),o);return Nl(u,{blendMode:e,sizePx:i,viewBox:s}),Il({fill:o,filterId:d,parentElement:u,pathDefinitions:n,stroke:l>0?o:void 0,strokeLinejoin:l>0?r:void 0,strokeWidth:l>0?l:void 0}),u},fi=({blendMode:e="normal",svgElement:n})=>{const t=document.createElement("div");return t.style.position="absolute",t.style.inset="0",t.style.pointerEvents="none",t.style.mixBlendMode="normal",n.style.mixBlendMode=e,t.appendChild(n),t},ny=({canvasSizePx:e,foregroundBlendMode:n="normal",foregroundFill:t,pathDefinitions:o,shadowBlendMode:r="normal",shadowBlurPx:a,shadowStrokeColor:i,shadowStrokeLinejoin:s,shadowStrokeWidth:u,showAura:l,viewBox:d})=>{const c=document.createElement("div");return c.style.position="absolute",c.style.left="0",c.style.top="0",c.style.width=`${e}px`,c.style.height=`${e}px`,c.style.pointerEvents="none",c.style.willChange="transform",l&&c.appendChild(fi({blendMode:r,svgElement:ey({blendMode:r,pathDefinitions:o,shadowBlurPx:a,shadowStrokeColor:i,shadowStrokeLinejoin:s,shadowStrokeWidth:u,sizePx:e,viewBox:d})})),c.appendChild(fi({blendMode:n,svgElement:Jm({blendMode:n,foregroundFill:t,pathDefinitions:o,sizePx:e,viewBox:d})})),c},br={de:{backspace:"Rücktaste",escape:"Escape",shift:"Umschalt"},en:{backspace:"Backspace",escape:"Escape",shift:"Shift"}},ty=e=>e||(Dc||Bc?"macos":Fc?"windows":"other"),oy=e=>{const n=e==null?void 0:e.split("-")[0];return n&&br[n]?br[n]:br.en},ry=(e,n)=>`${e==="macos"?"⌫":"←"} ${n.backspace}`;function ge(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var ay=typeof Symbol=="function"&&Symbol.observable||"@@observable",Ai=ay,kr=()=>Math.random().toString(36).substring(7).split("").join("."),iy={INIT:`@@redux/INIT${kr()}`,REPLACE:`@@redux/REPLACE${kr()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${kr()}`},Po=iy;function wa(e){if(typeof e!="object"||e===null)return!1;let n=e;for(;Object.getPrototypeOf(n)!==null;)n=Object.getPrototypeOf(n);return Object.getPrototypeOf(e)===n||Object.getPrototypeOf(e)===null}function hl(e,n,t){if(typeof e!="function")throw new Error(ge(2));if(typeof n=="function"&&typeof t=="function"||typeof t=="function"&&typeof arguments[3]=="function")throw new Error(ge(0));if(typeof n=="function"&&typeof t>"u"&&(t=n,n=void 0),typeof t<"u"){if(typeof t!="function")throw new Error(ge(1));return t(hl)(e,n)}let o=e,r=n,a=new Map,i=a,s=0,u=!1;function l(){i===a&&(i=new Map,a.forEach((A,v)=>{i.set(v,A)}))}function d(){if(u)throw new Error(ge(3));return r}function c(A){if(typeof A!="function")throw new Error(ge(4));if(u)throw new Error(ge(5));let v=!0;l();const b=s++;return i.set(b,A),function(){if(v){if(u)throw new Error(ge(6));v=!1,l(),i.delete(b),a=null}}}function m(A){if(!wa(A))throw new Error(ge(7));if(typeof A.type>"u")throw new Error(ge(8));if(typeof A.type!="string")throw new Error(ge(17));if(u)throw new Error(ge(9));try{u=!0,r=o(r,A)}finally{u=!1}return(a=i).forEach(b=>{b()}),A}function y(A){if(typeof A!="function")throw new Error(ge(10));o=A,m({type:Po.REPLACE})}function p(){const A=c;return{subscribe(v){if(typeof v!="object"||v===null)throw new Error(ge(11));function b(){const I=v;I.next&&I.next(d())}return b(),{unsubscribe:A(b)}},[Ai](){return this}}}return m({type:Po.INIT}),{dispatch:m,subscribe:c,getState:d,replaceReducer:y,[Ai]:p}}function sy(e){Object.keys(e).forEach(n=>{const t=e[n];if(typeof t(void 0,{type:Po.INIT})>"u")throw new Error(ge(12));if(typeof t(void 0,{type:Po.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(ge(13))})}function ly(e){const n=Object.keys(e),t={};for(let a=0;a<n.length;a++){const i=n[a];typeof e[i]=="function"&&(t[i]=e[i])}const o=Object.keys(t);let r;try{sy(t)}catch(a){r=a}return function(i={},s){if(r)throw r;let u=!1;const l={};for(let d=0;d<o.length;d++){const c=o[d],m=t[c],y=i[c],p=m(y,s);if(typeof p>"u")throw s&&s.type,new Error(ge(14));l[c]=p,u=u||p!==y}return u=u||o.length!==Object.keys(i).length,u?l:i}}function Mo(...e){return e.length===0?n=>n:e.length===1?e[0]:e.reduce((n,t)=>(...o)=>n(t(...o)))}function uy(...e){return n=>(t,o)=>{const r=n(t,o);let a=()=>{throw new Error(ge(15))};const i={getState:r.getState,dispatch:(u,...l)=>a(u,...l)},s=e.map(u=>u(i));return a=Mo(...s)(r.dispatch),{...r,dispatch:a}}}function dy(e){return wa(e)&&"type"in e&&typeof e.type=="string"}var Sl=Symbol.for("immer-nothing"),vi=Symbol.for("immer-draftable"),Fe=Symbol.for("immer-state");function We(e,...n){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var Nt=Object.getPrototypeOf;function Xn(e){return!!e&&!!e[Fe]}function gn(e){var n;return e?Cl(e)||Array.isArray(e)||!!e[vi]||!!((n=e.constructor)!=null&&n[vi])||Zo(e)||Jo(e):!1}var cy=Object.prototype.constructor.toString();function Cl(e){if(!e||typeof e!="object")return!1;const n=Nt(e);if(n===null)return!0;const t=Object.hasOwnProperty.call(n,"constructor")&&n.constructor;return t===Object?!0:typeof t=="function"&&Function.toString.call(t)===cy}function Do(e,n){Xo(e)===0?Reflect.ownKeys(e).forEach(t=>{n(t,e[t],e)}):e.forEach((t,o)=>n(o,t,e))}function Xo(e){const n=e[Fe];return n?n.type_:Array.isArray(e)?1:Zo(e)?2:Jo(e)?3:0}function Jr(e,n){return Xo(e)===2?e.has(n):Object.prototype.hasOwnProperty.call(e,n)}function El(e,n,t){const o=Xo(e);o===2?e.set(n,t):o===3?e.add(t):e[n]=t}function my(e,n){return e===n?e!==0||1/e===1/n:e!==e&&n!==n}function Zo(e){return e instanceof Map}function Jo(e){return e instanceof Set}function Fn(e){return e.copy_||e.base_}function ea(e,n){if(Zo(e))return new Map(e);if(Jo(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);const t=Cl(e);if(n===!0||n==="class_only"&&!t){const o=Object.getOwnPropertyDescriptors(e);delete o[Fe];let r=Reflect.ownKeys(o);for(let a=0;a<r.length;a++){const i=r[a],s=o[i];s.writable===!1&&(s.writable=!0,s.configurable=!0),(s.get||s.set)&&(o[i]={configurable:!0,writable:!0,enumerable:s.enumerable,value:e[i]})}return Object.create(Nt(e),o)}else{const o=Nt(e);if(o!==null&&t)return{...e};const r=Object.create(o);return Object.assign(r,e)}}function xa(e,n=!1){return er(e)||Xn(e)||!gn(e)||(Xo(e)>1&&(e.set=e.add=e.clear=e.delete=yy),Object.freeze(e),n&&Object.entries(e).forEach(([t,o])=>xa(o,!0))),e}function yy(){We(2)}function er(e){return Object.isFrozen(e)}var py={};function Zn(e){const n=py[e];return n||We(0,e),n}var Qt;function Ol(){return Qt}function gy(e,n){return{drafts_:[],parent_:e,immer_:n,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function Ti(e,n){n&&(Zn("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=n)}function na(e){ta(e),e.drafts_.forEach(fy),e.drafts_=null}function ta(e){e===Qt&&(Qt=e.parent_)}function bi(e){return Qt=gy(Qt,e)}function fy(e){const n=e[Fe];n.type_===0||n.type_===1?n.revoke_():n.revoked_=!0}function ki(e,n){n.unfinalizedDrafts_=n.drafts_.length;const t=n.drafts_[0];return e!==void 0&&e!==t?(t[Fe].modified_&&(na(n),We(4)),gn(e)&&(e=Bo(n,e),n.parent_||Fo(n,e)),n.patches_&&Zn("Patches").generateReplacementPatches_(t[Fe].base_,e,n.patches_,n.inversePatches_)):e=Bo(n,t,[]),na(n),n.patches_&&n.patchListener_(n.patches_,n.inversePatches_),e!==Sl?e:void 0}function Bo(e,n,t){if(er(n))return n;const o=n[Fe];if(!o)return Do(n,(r,a)=>Ni(e,o,n,r,a,t)),n;if(o.scope_!==e)return n;if(!o.modified_)return Fo(e,o.base_,!0),o.base_;if(!o.finalized_){o.finalized_=!0,o.scope_.unfinalizedDrafts_--;const r=o.copy_;let a=r,i=!1;o.type_===3&&(a=new Set(r),r.clear(),i=!0),Do(a,(s,u)=>Ni(e,o,r,s,u,t,i)),Fo(e,r,!1),t&&e.patches_&&Zn("Patches").generatePatches_(o,t,e.patches_,e.inversePatches_)}return o.copy_}function Ni(e,n,t,o,r,a,i){if(Xn(r)){const s=a&&n&&n.type_!==3&&!Jr(n.assigned_,o)?a.concat(o):void 0,u=Bo(e,r,s);if(El(t,o,u),Xn(u))e.canAutoFreeze_=!1;else return}else i&&t.add(r);if(gn(r)&&!er(r)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;Bo(e,r),(!n||!n.scope_.parent_)&&typeof o!="symbol"&&Object.prototype.propertyIsEnumerable.call(t,o)&&Fo(e,r)}}function Fo(e,n,t=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&xa(n,t)}function Ay(e,n){const t=Array.isArray(e),o={type_:t?1:0,scope_:n?n.scope_:Ol(),modified_:!1,finalized_:!1,assigned_:{},parent_:n,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let r=o,a=qa;t&&(r=[o],a=Xt);const{revoke:i,proxy:s}=Proxy.revocable(r,a);return o.draft_=s,o.revoke_=i,s}var qa={get(e,n){if(n===Fe)return e;const t=Fn(e);if(!Jr(t,n))return vy(e,t,n);const o=t[n];return e.finalized_||!gn(o)?o:o===Nr(e.base_,n)?(Ir(e),e.copy_[n]=ra(o,e)):o},has(e,n){return n in Fn(e)},ownKeys(e){return Reflect.ownKeys(Fn(e))},set(e,n,t){const o=Ll(Fn(e),n);if(o!=null&&o.set)return o.set.call(e.draft_,t),!0;if(!e.modified_){const r=Nr(Fn(e),n),a=r==null?void 0:r[Fe];if(a&&a.base_===t)return e.copy_[n]=t,e.assigned_[n]=!1,!0;if(my(t,r)&&(t!==void 0||Jr(e.base_,n)))return!0;Ir(e),oa(e)}return e.copy_[n]===t&&(t!==void 0||n in e.copy_)||Number.isNaN(t)&&Number.isNaN(e.copy_[n])||(e.copy_[n]=t,e.assigned_[n]=!0),!0},deleteProperty(e,n){return Nr(e.base_,n)!==void 0||n in e.base_?(e.assigned_[n]=!1,Ir(e),oa(e)):delete e.assigned_[n],e.copy_&&delete e.copy_[n],!0},getOwnPropertyDescriptor(e,n){const t=Fn(e),o=Reflect.getOwnPropertyDescriptor(t,n);return o&&{writable:!0,configurable:e.type_!==1||n!=="length",enumerable:o.enumerable,value:t[n]}},defineProperty(){We(11)},getPrototypeOf(e){return Nt(e.base_)},setPrototypeOf(){We(12)}},Xt={};Do(qa,(e,n)=>{Xt[e]=function(){return arguments[0]=arguments[0][0],n.apply(this,arguments)}});Xt.deleteProperty=function(e,n){return Xt.set.call(this,e,n,void 0)};Xt.set=function(e,n,t){return qa.set.call(this,e[0],n,t,e[0])};function Nr(e,n){const t=e[Fe];return(t?Fn(t):e)[n]}function vy(e,n,t){var r;const o=Ll(n,t);return o?"value"in o?o.value:(r=o.get)==null?void 0:r.call(e.draft_):void 0}function Ll(e,n){if(!(n in e))return;let t=Nt(e);for(;t;){const o=Object.getOwnPropertyDescriptor(t,n);if(o)return o;t=Nt(t)}}function oa(e){e.modified_||(e.modified_=!0,e.parent_&&oa(e.parent_))}function Ir(e){e.copy_||(e.copy_=ea(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var Ty=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(n,t,o)=>{if(typeof n=="function"&&typeof t!="function"){const a=t;t=n;const i=this;return function(u=a,...l){return i.produce(u,d=>t.call(this,d,...l))}}typeof t!="function"&&We(6),o!==void 0&&typeof o!="function"&&We(7);let r;if(gn(n)){const a=bi(this),i=ra(n,void 0);let s=!0;try{r=t(i),s=!1}finally{s?na(a):ta(a)}return Ti(a,o),ki(r,a)}else if(!n||typeof n!="object"){if(r=t(n),r===void 0&&(r=n),r===Sl&&(r=void 0),this.autoFreeze_&&xa(r,!0),o){const a=[],i=[];Zn("Patches").generateReplacementPatches_(n,r,a,i),o(a,i)}return r}else We(1,n)},this.produceWithPatches=(n,t)=>{if(typeof n=="function")return(i,...s)=>this.produceWithPatches(i,u=>n(u,...s));let o,r;return[this.produce(n,t,(i,s)=>{o=i,r=s}),o,r]},typeof(e==null?void 0:e.autoFreeze)=="boolean"&&this.setAutoFreeze(e.autoFreeze),typeof(e==null?void 0:e.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){gn(e)||We(8),Xn(e)&&(e=by(e));const n=bi(this),t=ra(e,void 0);return t[Fe].isManual_=!0,ta(n),t}finishDraft(e,n){const t=e&&e[Fe];(!t||!t.isManual_)&&We(9);const{scope_:o}=t;return Ti(o,n),ki(void 0,o)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,n){let t;for(t=n.length-1;t>=0;t--){const r=n[t];if(r.path.length===0&&r.op==="replace"){e=r.value;break}}t>-1&&(n=n.slice(t+1));const o=Zn("Patches").applyPatches_;return Xn(e)?o(e,n):this.produce(e,r=>o(r,n))}};function ra(e,n){const t=Zo(e)?Zn("MapSet").proxyMap_(e,n):Jo(e)?Zn("MapSet").proxySet_(e,n):Ay(e,n);return(n?n.scope_:Ol()).drafts_.push(t),t}function by(e){return Xn(e)||We(10,e),Rl(e)}function Rl(e){if(!gn(e)||er(e))return e;const n=e[Fe];let t;if(n){if(!n.modified_)return n.base_;n.finalized_=!0,t=ea(e,n.scope_.immer_.useStrictShallowCopy_)}else t=ea(e,!0);return Do(t,(o,r)=>{El(t,o,Rl(r))}),n&&(n.finalized_=!1),t}var Ge=new Ty,wl=Ge.produce;Ge.produceWithPatches.bind(Ge);Ge.setAutoFreeze.bind(Ge);Ge.setUseStrictShallowCopy.bind(Ge);Ge.applyPatches.bind(Ge);Ge.createDraft.bind(Ge);Ge.finishDraft.bind(Ge);function xl(e){return({dispatch:t,getState:o})=>r=>a=>typeof a=="function"?a(t,o,e):r(a)}var ky=xl(),Ny=xl,Iy=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Mo:Mo.apply(null,arguments)};function Ii(e,n){function t(...o){if(n){let r=n(...o);if(!r)throw new Error(Ke(0));return{type:e,payload:r.payload,..."meta"in r&&{meta:r.meta},..."error"in r&&{error:r.error}}}return{type:e,payload:o[0]}}return t.toString=()=>`${e}`,t.type=e,t.match=o=>dy(o)&&o.type===e,t}var ql=class jt extends Array{constructor(...n){super(...n),Object.setPrototypeOf(this,jt.prototype)}static get[Symbol.species](){return jt}concat(...n){return super.concat.apply(this,n)}prepend(...n){return n.length===1&&Array.isArray(n[0])?new jt(...n[0].concat(this)):new jt(...n.concat(this))}};function hi(e){return gn(e)?wl(e,()=>{}):e}function Si(e,n,t){if(e.has(n)){let r=e.get(n);return t.update&&(r=t.update(r,n,e),e.set(n,r)),r}if(!t.insert)throw new Error(Ke(10));const o=t.insert(n,e);return e.set(n,o),o}function hy(e){return typeof e=="boolean"}var Sy=()=>function(n){const{thunk:t=!0,immutableCheck:o=!0,serializableCheck:r=!0,actionCreatorCheck:a=!0}=n??{};let i=new ql;return t&&(hy(t)?i.push(ky):i.push(Ny(t.extraArgument))),i},Cy="RTK_autoBatch",_l=e=>n=>{setTimeout(n,e)},Ey=typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:_l(10),Oy=(e={type:"raf"})=>n=>(...t)=>{const o=n(...t);let r=!0,a=!1,i=!1;const s=new Set,u=e.type==="tick"?queueMicrotask:e.type==="raf"?Ey:e.type==="callback"?e.queueNotification:_l(e.timeout),l=()=>{i=!1,a&&(a=!1,s.forEach(d=>d()))};return Object.assign({},o,{subscribe(d){const c=()=>r&&d(),m=o.subscribe(c);return s.add(d),()=>{m(),s.delete(d)}},dispatch(d){var c;try{return r=!((c=d==null?void 0:d.meta)!=null&&c[Cy]),a=!r,a&&(i||(i=!0,u(l))),o.dispatch(d)}finally{r=!0}}})},Ly=e=>function(t){const{autoBatch:o=!0}=t??{};let r=new ql(e);return o&&r.push(Oy(typeof o=="object"?o:void 0)),r};function Ry(e){const n=Sy(),{reducer:t=void 0,middleware:o,devTools:r=!0,preloadedState:a=void 0,enhancers:i=void 0}=e;let s;if(typeof t=="function")s=t;else if(wa(t))s=ly(t);else throw new Error(Ke(1));let u;typeof o=="function"?u=o(n):u=n();let l=Mo;r&&(l=Iy({trace:!1,...typeof r=="object"&&r}));const d=uy(...u),c=Ly(d);let m=typeof i=="function"?i(c):c();const y=l(...m);return hl(s,a,y)}function Pl(e){const n={},t=[];let o;const r={addCase(a,i){const s=typeof a=="string"?a:a.type;if(!s)throw new Error(Ke(28));if(s in n)throw new Error(Ke(29));return n[s]=i,r},addMatcher(a,i){return t.push({matcher:a,reducer:i}),r},addDefaultCase(a){return o=a,r}};return e(r),[n,t,o]}function wy(e){return typeof e=="function"}function xy(e,n){let[t,o,r]=Pl(n),a;if(wy(e))a=()=>hi(e());else{const s=hi(e);a=()=>s}function i(s=a(),u){let l=[t[u.type],...o.filter(({matcher:d})=>d(u)).map(({reducer:d})=>d)];return l.filter(d=>!!d).length===0&&(l=[r]),l.reduce((d,c)=>{if(c)if(Xn(d)){const y=c(d,u);return y===void 0?d:y}else{if(gn(d))return wl(d,m=>c(m,u));{const m=c(d,u);if(m===void 0){if(d===null)return d;throw new Error(Ke(9))}return m}}return d},s)}return i.getInitialState=a,i}var qy=Symbol.for("rtk-slice-createasyncthunk");function _y(e,n){return`${e}/${n}`}function Py({creators:e}={}){var t;const n=(t=e==null?void 0:e.asyncThunk)==null?void 0:t[qy];return function(r){const{name:a,reducerPath:i=a}=r;if(!a)throw new Error(Ke(11));const s=(typeof r.reducers=="function"?r.reducers(By()):r.reducers)||{},u=Object.keys(s),l={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},d={addCase(T,I){const N=typeof T=="string"?T:T.type;if(!N)throw new Error(Ke(12));if(N in l.sliceCaseReducersByType)throw new Error(Ke(13));return l.sliceCaseReducersByType[N]=I,d},addMatcher(T,I){return l.sliceMatchers.push({matcher:T,reducer:I}),d},exposeAction(T,I){return l.actionCreators[T]=I,d},exposeCaseReducer(T,I){return l.sliceCaseReducersByName[T]=I,d}};u.forEach(T=>{const I=s[T],N={reducerName:T,type:_y(a,T),createNotation:typeof r.reducers=="function"};Gy(I)?Hy(N,I,d,n):Fy(N,I,d)});function c(){const[T={},I=[],N=void 0]=typeof r.extraReducers=="function"?Pl(r.extraReducers):[r.extraReducers],h={...T,...l.sliceCaseReducersByType};return xy(r.initialState,S=>{for(let k in h)S.addCase(k,h[k]);for(let k of l.sliceMatchers)S.addMatcher(k.matcher,k.reducer);for(let k of I)S.addMatcher(k.matcher,k.reducer);N&&S.addDefaultCase(N)})}const m=T=>T,y=new Map;let p;function f(T,I){return p||(p=c()),p(T,I)}function A(){return p||(p=c()),p.getInitialState()}function v(T,I=!1){function N(S){let k=S[T];return typeof k>"u"&&I&&(k=A()),k}function h(S=m){const k=Si(y,I,{insert:()=>new WeakMap});return Si(k,S,{insert:()=>{const C={};for(const[L,R]of Object.entries(r.selectors??{}))C[L]=My(R,S,A,I);return C}})}return{reducerPath:T,getSelectors:h,get selectors(){return h(N)},selectSlice:N}}const b={name:a,reducer:f,actions:l.actionCreators,caseReducers:l.sliceCaseReducersByName,getInitialState:A,...v(i),injectInto(T,{reducerPath:I,...N}={}){const h=I??i;return T.inject({reducerPath:h,reducer:f},N),{...b,...v(h,!0)}}};return b}}function My(e,n,t,o){function r(a,...i){let s=n(a);return typeof s>"u"&&o&&(s=t()),e(s,...i)}return r.unwrapped=e,r}var Dy=Py();function By(){function e(n,t){return{_reducerDefinitionType:"asyncThunk",payloadCreator:n,...t}}return e.withTypes=()=>e,{reducer(n){return Object.assign({[n.name](...t){return n(...t)}}[n.name],{_reducerDefinitionType:"reducer"})},preparedReducer(n,t){return{_reducerDefinitionType:"reducerWithPrepare",prepare:n,reducer:t}},asyncThunk:e}}function Fy({type:e,reducerName:n,createNotation:t},o,r){let a,i;if("reducer"in o){if(t&&!jy(o))throw new Error(Ke(17));a=o.reducer,i=o.prepare}else a=o;r.addCase(e,a).exposeCaseReducer(n,a).exposeAction(n,i?Ii(e,i):Ii(e))}function Gy(e){return e._reducerDefinitionType==="asyncThunk"}function jy(e){return e._reducerDefinitionType==="reducerWithPrepare"}function Hy({type:e,reducerName:n},t,o,r){if(!r)throw new Error(Ke(18));const{payloadCreator:a,fulfilled:i,pending:s,rejected:u,settled:l,options:d}=t,c=r(e,a,d);o.exposeAction(n,c),i&&o.addCase(c.fulfilled,i),s&&o.addCase(c.pending,s),u&&o.addCase(c.rejected,u),l&&o.addMatcher(c.settled,l),o.exposeCaseReducer(n,{fulfilled:i||go,pending:s||go,rejected:u||go,settled:l||go})}function go(){}function Ke(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}const It=Object.freeze({markerSize:Ar.markerSize,markerStrokeWidth:Ar.markerStrokeWidth,lineColor:Ar.lineColor,zIndex:0,fallbackFontSizePx:12,rootFontSizePx:16}),Ci=Object.freeze({brightOnDark:Object.freeze({backgroundColor:"rgba(15, 23, 42, 0.82)",textColor:"rgba(248, 250, 252, 0.98)"}),darkOnBright:Object.freeze({backgroundColor:"rgba(255, 255, 255, 0.9)",textColor:"rgba(15, 23, 42, 0.92)"})}),uh=({text:e,getScreenPosition:n,theme:t="bright-on-dark",lineColor:o,textBackgroundColor:r,textColor:a,fontSize:i,fontFamily:s,fontWeight:u,mixBlendMode:l,attach:d="center",distance:c=0,hideMarker:m=!0})=>{const y=t==="dark-on-bright"?Ci.darkOnBright:Ci.brightOnDark;return{content:e,hideMarker:m,lineColor:o,textBackgroundColor:r??y.backgroundColor,textColor:a??y.textColor,fontSize:i,fontFamily:s,fontWeight:u,mixBlendMode:l,attach:d,distance:c,getScreenPosition:n}},zy=e=>e.getScreenPosition?e.getScreenPosition():e.screenPosition??null,Uy=(e,n)=>e==="left"?`translate(${-n}px, -50%)`:e==="right"?`translate(calc(-100% + ${n}px), -50%)`:"translate(-50%, -50%)",Vy=(e=Zc)=>{const n=e.trim(),t=Number.parseFloat(n);return Number.isFinite(t)?n.endsWith("rem")?t*It.rootFontSizePx:t:It.fallbackFontSizePx},$y=({labelRoot:e,fontSize:n})=>{var r;const t=((r=e.ownerDocument.defaultView)==null?void 0:r.getComputedStyle(e).fontSize)??"",o=Number.parseFloat(t);return Number.isFinite(o)?o:Vy(n)},Wy=e=>{const n=e.querySelector('[data-point-label-stem="true"]'),t=e.querySelector('[data-point-label-stem-line="true"]'),o=e.querySelector('[data-pillbutton-root="true"], [data-point-label-content-root="true"]'),r=e.querySelector('[data-pillbutton-badge="true"]'),a=e.querySelector('[data-pillbutton-content="true"]'),i=e.querySelector('[data-point-label-root="true"]');return!n||!t||!o||!i?null:{stem:n,stemLine:t,labelRoot:o,pillBadge:r,pillContent:a,pointLabelRoot:i}},hr=new WeakMap,_t=new WeakMap,Yy=e=>{var n;return _t.has(e)||(_t.set(e,0),(n=e.fonts)==null||n.addEventListener("loadingdone",()=>{_t.set(e,(_t.get(e)??0)+1)})),_t.get(e)},Ky=/(?:^|\s)(?:left|top|transform):[^;]*;/g,Qy=(e,n,t)=>{var o,r;return`${Yy(e.ownerDocument)}|${(o=e.ownerDocument.defaultView)==null?void 0:o.innerWidth}:${(r=e.ownerDocument.defaultView)==null?void 0:r.innerHeight}|${+(n!==null)}${Number(t)}|${e.className}|${e.style.cssText.replace(Ky,"")}|${e.innerHTML}`},Xy=(e,n,t)=>{const o=Qy(e,n,t),r=hr.get(e);if((r==null?void 0:r.key)===o)return r;const a={key:o,badgeWidthPx:(n==null?void 0:n.offsetWidth)??0,badgeHeightPx:(n==null?void 0:n.offsetHeight)??0,rootHeightPx:t?e.offsetHeight:0};return(n===null||a.badgeWidthPx>0&&a.badgeHeightPx>0)&&(!t||a.rootHeightPx>0)?hr.set(e,a):hr.delete(e),a},Ml=({labelRoot:e,pillBadge:n,pillContent:t},o)=>{const r=o.angleRad??0,a=o.distance??0,i=o.attach??"center",s=Math.cos(r),u=Math.sin(r),l=e.hasAttribute("data-pillbutton-root"),d=o.hideMarker?0:(o.markerSize??It.markerSize)/2+(o.markerStrokeWidth??It.markerStrokeWidth)/2,c=n!==null&&t===null,{badgeWidthPx:m,badgeHeightPx:y,rootHeightPx:p}=Xy(e,c?n:null,l),f=y>0?y/2:null,A=l&&p>0?p/2:null,v=i==="center"?0:f??A??Kc($y({labelRoot:e,fontSize:o.fontSize})),b=o.stemStartDistance??d,T={x:s*b,y:u*b},I={x:s*(a+v),y:u*(a+v)},N=m>0&&y>0?Qc(T,I,i,m,y):v>0?Xc(T,I,v):{x:s*a,y:u*a};return{attach:i,isPillRoot:l,pillCapRadiusPx:v,pillAnchorPoint:I,stemStart:T,stemEnd:N}},Dl=({start:e,end:n})=>Math.hypot(n.x-e.x,n.y-e.y)>0,Zy=({domRefs:e,state:n})=>{if(n.hideLabelAndStem)return null;const{stemStart:t,stemEnd:o}=Ml(e,n),r={start:t,end:o};return Dl(r)?r:null},Jy=({elementDiv:e,domRefs:n,state:t})=>{const o=zy(t);if(!o||t.visible===!1)return!1;e.style.left=`${o.x}px`,e.style.top=`${o.y}px`,e.style.transform="none",e.style.zIndex=`${t.zIndex??It.zIndex}`;const r=`${t.isOccluded?Zs:1}`;if(t.hideLabelAndStem)return n.pointLabelRoot.style.opacity=r,!0;const{labelRoot:a,pillBadge:i,pillContent:s}=n;a.hasAttribute("data-pillbutton-root")?(po(i,Wc(t)),po(s,t.content),i===null&&s===null&&po(a,t.content)):po(a,t.content);const{attach:u,isPillRoot:l,pillCapRadiusPx:d,pillAnchorPoint:c,stemStart:m,stemEnd:y}=Ml(n,t),p=!t.hideStem&&Dl({start:m,end:y});if(n.stem.style.display=p?"block":"none",p){const f=y.x-m.x,A=y.y-m.y;n.stem.style.left=`${m.x}px`,n.stem.style.top=`${m.y}px`,n.stem.style.transformOrigin="0 0",n.stem.style.transform=`rotate(${Math.atan2(A,f)}rad)`,n.stemLine.style.width=`${Math.hypot(f,A)}px`,n.stemLine.style.borderBottom=`1px ${t.isOccluded?"dashed":"solid"} ${t.lineColor??It.lineColor}`}return a.style.left=`${c.x}px`,a.style.top=`${c.y}px`,a.style.transform=l?Uy(u,d):Yc(u),n.pointLabelRoot.style.opacity=r,!0};function wt(e){const n={current:null};return{facade:e(()=>n.current),register:t=>{n.current=t}}}const{facade:dh,register:ep}=wt(e=>({isAvailable:()=>e()!==null,getState:()=>{var n,t;return((t=(n=e())==null?void 0:n.getState)==null?void 0:t.call(n))??null},subscribe:n=>{var t,o;return((o=(t=e())==null?void 0:t.subscribe)==null?void 0:o.call(t,n))??(()=>{})},activateTool:n=>{var t,o;return((o=(t=e())==null?void 0:t.activateTool)==null?void 0:o.call(t,n))??Promise.resolve(!1)},pickAt:n=>{var t,o;return((o=(t=e())==null?void 0:t.pickAt)==null?void 0:o.call(t,n))??Promise.resolve(!1)},finish:()=>{var n,t;return((t=(n=e())==null?void 0:n.finish)==null?void 0:t.call(n))??Promise.resolve(null)},cancel:()=>{var n,t;return(t=(n=e())==null?void 0:n.cancel)==null?void 0:t.call(n)},answerTextPrompt:n=>{var t,o;return((o=(t=e())==null?void 0:t.answerTextPrompt)==null?void 0:o.call(t,n))??!1},createMeasurement:(n,t,o)=>{var r,a;return((a=(r=e())==null?void 0:r.createMeasurement)==null?void 0:a.call(r,n,t,o))??Promise.resolve(null)},addMeasurements:(n,t)=>{var o,r;return((r=(o=e())==null?void 0:o.addMeasurements)==null?void 0:r.call(o,n,t))??[]},exportMeasurements:()=>{var n,t;return((t=(n=e())==null?void 0:n.exportMeasurements)==null?void 0:t.call(n))??null},select:n=>{var t,o;return(o=(t=e())==null?void 0:t.select)==null?void 0:o.call(t,n)},remove:n=>{var t,o;return(o=(t=e())==null?void 0:t.remove)==null?void 0:o.call(t,n)},flyTo:n=>{var t,o;return(o=(t=e())==null?void 0:t.flyTo)==null?void 0:o.call(t,n)}})),{facade:ch,register:np}=wt(e=>({isAvailable:()=>e()!==null,getPose:()=>{var n,t;return((t=(n=e())==null?void 0:n.getPose)==null?void 0:t.call(n))??null},setPose:n=>{var t,o;return((o=(t=e())==null?void 0:t.setPose)==null?void 0:o.call(t,n))??!1},flyToPose:(n,t)=>{var o,r;return((r=(o=e())==null?void 0:o.flyToPose)==null?void 0:r.call(o,n,t))??Promise.resolve(!1)},lookAt:(n,t,o)=>{var r,a;return((a=(r=e())==null?void 0:r.lookAt)==null?void 0:a.call(r,n,t,o))??Promise.resolve(!1)},stop:()=>{var n,t;return(t=(n=e())==null?void 0:n.stop)==null?void 0:t.call(n)}})),{facade:mh,register:yh}=wt(e=>({applyById:n=>{var t,o;return((o=(t=e())==null?void 0:t.applyById)==null?void 0:o.call(t,n))??Promise.resolve(!1)},setMappingConfig:n=>{var t,o;return((o=(t=e())==null?void 0:t.setMappingConfig)==null?void 0:o.call(t,n))??Promise.resolve(!1)},getAppliedId:()=>{var n,t;return((t=(n=e())==null?void 0:n.getAppliedId)==null?void 0:t.call(n))??null},getMappingConfig:()=>{var n,t;return((t=(n=e())==null?void 0:n.getMappingConfig)==null?void 0:t.call(n))??null},backgroundAsLayers:n=>{var t,o;return((o=(t=e())==null?void 0:t.backgroundAsLayers)==null?void 0:o.call(t,n))??n}})),Ei=()=>{},{facade:ph,register:gh}=wt(e=>({addSource:n=>{var t;return((t=e())==null?void 0:t.registerContribution({sources:[n]}))??Ei},addMode:n=>{var t;return((t=e())==null?void 0:t.registerContribution({additionalModes:[n]}))??Ei}})),tp={localStorage:[],sessionStorage:[],localforage:[],catalogCache:[],indexedDB:[]},dn=(e,n)=>t=>{var o,r;return((r=(o=e())==null?void 0:o[n])==null?void 0:r.call(o,t))??Promise.resolve([])},{facade:fh,register:Ah}=wt(e=>({all:dn(e,"all"),persistedState:dn(e,"persistedState"),layers:dn(e,"layers"),catalogCache:dn(e,"catalogCache"),favorites:dn(e,"favorites"),measurements:dn(e,"measurements"),addonOverrides:dn(e,"addonOverrides"),auth:dn(e,"auth"),localStorage:dn(e,"localStorage"),list:()=>{var n,t;return((t=(n=e())==null?void 0:n.list)==null?void 0:t.call(n))??Promise.resolve(tp)}})),{facade:vh,register:Th}=wt(e=>({openMenu:()=>{var n,t;return(t=(n=e())==null?void 0:n.openMenu)==null?void 0:t.call(n)},openHelperOverlay:()=>{var n,t;return(t=(n=e())==null?void 0:n.openHelperOverlay)==null?void 0:t.call(n)}})),ve={FLY_TO:"flyTo",EXPORT:"export",VISIBILITY:"visibility",REFERENCE:"reference",LOCK:"lock",STYLE:"style",DELETE:"delete"},$e=(()=>{const e="1rem",n="0.8571rem",t="1rem";return Object.freeze({rootFontSizeRem:e,supportFontSizeRem:n,headingFontSizeRem:t,headingFontWeight:600,headingTypographyClassName:`text-[${n}] font-semibold tracking-[0.03em]`,titleTypographyClassName:`text-[${t}] font-semibold leading-[1.25]`})})(),He=Object.freeze({borderRadiusRem:"0.2143rem",hairlineBorderWidthRem:"0.0357rem",panelInsetShadowYOffsetRem:"0.0714rem",panelInsetShadowBlurRem:"0.0714rem",panelBackdropBlurRem:"0.1429rem"}),X=Object.freeze({heading:le.ACCENT_MEASUREMENTS,panelSurface:le.NEUTRAL_SURFACE_SUBTLE,panelBorder:le.NEUTRAL_BORDER_SUBTLE,shadowBase:le.NEUTRAL_BLACK,bodyText:le.NEUTRAL_TEXT_PRIMARY,mutedText:le.NEUTRAL_TEXT_MUTED,linkText:le.WUPP_BLUE,fieldText:le.NEUTRAL_TEXT_STRONG,fieldBorder:le.NEUTRAL_BORDER_DEFAULT,fieldInputBorder:le.NEUTRAL_BORDER_INPUT,fieldFocusBackground:le.STATE_FOCUS_BACKGROUND_WARM,fieldFocusOutline:le.STATE_FOCUS_OUTLINE,titleText:le.NEUTRAL_TEXT_STRONG}),Sr=Object.freeze({panelSurface:.9,panelBorder:.9,panelInsetShadow:.02}),op=Object.freeze({defaultPixelWidth:430,headingColor:X.heading,headerStyle:{},bodyPanelStyle:{backgroundColor:fr(X.panelSurface,Sr.panelSurface),border:`${He.hairlineBorderWidthRem} solid ${fr(X.panelBorder,Sr.panelBorder)}`,boxShadow:`${fr(X.shadowBase,Sr.panelInsetShadow)} 0 ${He.panelInsetShadowYOffsetRem} ${He.panelInsetShadowBlurRem} inset`,backdropFilter:`blur(${He.panelBackdropBlurRem})`,WebkitBackdropFilter:`blur(${He.panelBackdropBlurRem})`},resolveActionTooltipPopupContainer:e=>e.closest('[data-test-id="annotation-info-box"]')??e.ownerDocument.body,headerForegroundClassName:"text-white/80",headerTitleClassName:`truncate ${$e.headingTypographyClassName}`,subtitleContainerClassName:"mb-0 w-full px-2 pt-[0.28em]",subtitleTextStyle:{color:le.ACCENT_NEUTRALS},subtitleTextClassName:`px-2 text-[${$e.supportFontSizeRem}] leading-[1.1] font-semibold`,subtitleMetaTextStyle:{color:le.ACCENT_NEUTRALS},subtitleMetaTextClassName:`mt-[0.08em] whitespace-nowrap text-[${$e.supportFontSizeRem}] leading-[1.1] font-semibold`,showSubtitleMetaText:!0,readOnly:!1,bodyContainerClassName:"px-2 pb-2 pt-1",bodyTextStyle:{fontSize:$e.rootFontSizeRem,lineHeight:1.4,color:X.bodyText},bodyTextClassName:`text-[${$e.rootFontSizeRem}] leading-[1.4] text-[${X.bodyText}]`,emptyContentLineStyle:{minHeight:"1.4em"},emptyContentLineClassName:"w-full",mutedTextClassName:`text-[${X.mutedText}]`,linkTextClassName:`text-[${X.linkText}]`,actionIconClassName:"transition-colors",actionIconColor:le.ACCENT_NEUTRALS,actionIconHoverColor:le.ACCENT_NEUTRALS_HOVER,actionIconFontSize:null,hiddenActionIds:[],fieldTextClassName:`text-[${X.fieldText}]`,fieldBorderClassName:`border-[${He.hairlineBorderWidthRem}] border-[${X.fieldBorder}]`,fieldInputBorderClassName:`border-[${He.hairlineBorderWidthRem}] border-[${X.fieldInputBorder}]`,fieldFocusBackgroundClassName:`focus:bg-[${X.fieldFocusBackground}]`,fieldFocusOutlineClassName:`focus:outline focus:outline-2 focus:outline-[${X.fieldFocusOutline}]`,subtleFieldBackgroundClassName:"bg-white/85",titleTextStyle:{fontSize:$e.headingFontSizeRem,fontWeight:$e.headingFontWeight,lineHeight:1.25},titleTextClassName:`text-[${X.titleText}]/80 ${$e.titleTypographyClassName}`,titleInputClassName:`min-w-0 w-auto max-w-full appearance-none [field-sizing:content] break-words rounded-[${He.borderRadiusRem}] border border-transparent bg-transparent px-0 py-[0.05em] text-[${X.titleText}]/80 placeholder:text-[${X.titleText}]/50 focus:bg-[${X.fieldFocusBackground}] focus:outline focus:outline-2 focus:outline-[${X.fieldFocusOutline}] ${$e.titleTypographyClassName}`,shortLabelInputClassName:`shrink-0 w-auto appearance-none [field-sizing:content] border-[${He.hairlineBorderWidthRem}] px-[0.5ex] py-0 text-center tabular-nums border-[${X.fieldBorder}] bg-white/85 text-[${X.titleText}]/80 placeholder:text-[${X.titleText}]/80 focus:bg-[${X.fieldFocusBackground}] focus:outline focus:outline-2 focus:outline-[${X.fieldFocusOutline}] ${$e.titleTypographyClassName}`,navigationInstructionContainerClassName:"mt-1 flex w-full items-center justify-center px-2 pt-1",navigationAvailabilityContainerClassName:"mt-1 flex w-full items-center justify-center px-2 pt-1",navigationSummaryContainerClassName:"mb-1 mt-0 flex w-full items-center justify-between px-2",navigationLinkFontSize:$e.supportFontSizeRem,inlineFieldButtonClassName:`inline-flex h-5 w-5 items-center justify-center rounded border-[${He.hairlineBorderWidthRem}] border-[${X.fieldInputBorder}]`,colorInputClassName:`h-6 w-8 cursor-pointer rounded border-[${He.hairlineBorderWidthRem}] border-[${X.fieldInputBorder}] bg-transparent p-0`,inlineActionButtonClassName:`inline-flex items-center gap-1 rounded border-[${He.hairlineBorderWidthRem}] border-[${X.fieldInputBorder}] px-2 py-1`}),sn=e=>({...op,...e}),we=Object.freeze({lineLengthEpsilonPx:.001,referenceDistanceFactor:.2,lineLabelReferenceDistancePx:24,flipThresholdPx:4,referenceMinDistancePx:24,referenceMaxDistancePx:48,insideBlendFactor:.35,elevationEpsilonMeters:.001,polygonAreaEpsilonPx2:1e-6}),rp=(e,n,t=we.flipThresholdPx)=>{if(!Number.isFinite(e))return n??1;const o=e>=0?1:-1;return!n||n===o?o:Math.abs(e)<t?n:o},Co=({start:e,end:n,insidePoint:t,previousOutsideSign:o,flipThresholdPx:r=we.flipThresholdPx,referenceDistanceFactor:a=we.referenceDistanceFactor,referenceDistancePx:i,minDistancePx:s=we.referenceMinDistancePx,maxDistancePx:u=we.referenceMaxDistancePx})=>{const l=um({start:e,end:n,epsilon:we.lineLengthEpsilonPx});if(!l)return null;const d=dm(t,l.midpoint),c=cm(d,l.leftUnitNormal),m=rp(-c,o,r),y=i??Be(l.length*a,s,u),p=il(l.leftUnitNormal,m*y);return{outsideSign:m,referencePoint:al(l.midpoint,p)}},bh=(e,n,t,o=we.referenceMinDistancePx,r=we.referenceMaxDistancePx)=>{var a;return((a=Co({start:e,end:n,insidePoint:t,minDistancePx:o,maxDistancePx:r}))==null?void 0:a.referencePoint)??null},ap=({triangle:e,auxiliaryAltitudeMeters:n,highestAltitudeMeters:t,insideBlendFactor:o=we.insideBlendFactor,elevationEpsilonMeters:r=we.elevationEpsilonMeters})=>{const a=n<t-r?e.highest:e.aux;return{x:Qr(a.x,e.centroid.x,o),y:Qr(a.y,e.centroid.y,o)}},ip=({anchor:e,target:n,aux:t,anchorAltitudeMeters:o,targetAltitudeMeters:r,previousOutsideSigns:a,insideBlendFactor:i=we.insideBlendFactor,flipThresholdPx:s=we.flipThresholdPx,referenceDistancePx:u=we.lineLabelReferenceDistancePx})=>{const l=o>=r?e:n,d={anchor:e,target:n,aux:t,highest:l,centroid:{x:(e.x+n.x+t.x)/3,y:(e.y+n.y+t.y)/3}},c=ap({triangle:d,auxiliaryAltitudeMeters:r,highestAltitudeMeters:Math.max(o,r),insideBlendFactor:i}),m=Co({start:e,end:n,insidePoint:c,previousOutsideSign:a==null?void 0:a.direct,flipThresholdPx:s,referenceDistancePx:u}),y=Co({start:t,end:n,insidePoint:c,previousOutsideSign:a==null?void 0:a.horizontal,flipThresholdPx:s,referenceDistancePx:u}),p=Co({start:e,end:t,insidePoint:n,previousOutsideSign:a==null?void 0:a.vertical,flipThresholdPx:s,referenceDistancePx:u});return{directOutsideReferencePoint:(m==null?void 0:m.referencePoint)??null,verticalOutsideReferencePoint:(p==null?void 0:p.referencePoint)??null,horizontalOutsideReferencePoint:(y==null?void 0:y.referencePoint)??null,nextOutsideSigns:{direct:m==null?void 0:m.outsideSign,vertical:p==null?void 0:p.outsideSign,horizontal:y==null?void 0:y.outsideSign}}},sp=e=>rl({points:e,degenerateAreaEpsilon:we.polygonAreaEpsilonPx2}),P={POINT:"point",DISTANCE:"distance",POLYLINE:"polyline",AREA_GROUND:"area",AREA_PLANAR:"planar",AREA_VERTICAL:"vertical",LABEL:"label"},xn="select",kh="planar-biggest-triangle",Nh="planar-pca",Ih="planar-trapezoid",Bl=e=>e===P.AREA_GROUND||e===P.AREA_VERTICAL||e===P.AREA_PLANAR,Eo=Object.freeze({fillAlpha:.25,selectedFillAlpha:.35,rgb255ByType:{[P.AREA_VERTICAL]:[112,168,255],[P.AREA_GROUND]:[107,188,123],[P.AREA_PLANAR]:[239,223,145]}}),Fl=e=>Eo.rgb255ByType[e],lp=(e,n)=>Qe(Fl(e),n),Oi=e=>typeof e=="number"&&Number.isFinite(e)&&e>=0&&e<=1,up=(e={})=>{const n=Oi(e.fillAlpha)?e.fillAlpha:Eo.fillAlpha,t=Oi(e.selectedFillAlpha)?e.selectedFillAlpha:Eo.selectedFillAlpha,o=r=>{var a;return((a=e.rgb255ByType)==null?void 0:a[r])??Eo.rgb255ByType[r]};return{rgb255:o,fillCssColor:(r,a)=>Qe(o(r),a?t:n),cssColor:(r,a)=>Qe(o(r),a)}},hh=up(),Ie={DIRECT:"direct",VERTICAL:"vertical",HORIZONTAL:"horizontal"},An=Object.freeze({textRgb255:{dark:[17,24,39],light:[255,255,255]},labelTextRgb255:[248,250,252],shortLabelRgb255ByType:{[P.POINT]:[200,200,200],[P.DISTANCE]:[102,126,234],[P.POLYLINE]:[226,178,60],[P.LABEL]:[88,152,255]},surfaceRgb255:{stroke:[255,255,255],accent:[246,248,255]},lineComponentRgb255ByKind:{[Ie.DIRECT]:[255,255,255],[Ie.VERTICAL]:[111,168,255],[Ie.HORIZONTAL]:[188,194,102]},selectionRgb255:{background:[15,23,42],hoverBackground:[30,41,59],glow:[255,255,255]}}),Ln=Object.freeze({alpha:{text:{dark:.9,light:1},shortLabelBackgroundByType:{[P.POINT]:.92,[P.DISTANCE]:.95,[P.POLYLINE]:.95,[P.LABEL]:.95,area:.95},lineComponentByKind:{[Ie.DIRECT]:1,[Ie.VERTICAL]:.96,[Ie.HORIZONTAL]:.95},lineComponentLabelAccentByKind:{[Ie.DIRECT]:.34,[Ie.VERTICAL]:.54,[Ie.HORIZONTAL]:.5},selection:{background:.92,hoverBackground:.9,glow:1},surfaceStroke:.95}}),Pn=(e,n=Ln.alpha.text[e])=>Qe(An.textRgb255[e],n),Oo=(e=Ln.alpha.surfaceStroke)=>Qe(An.surfaceRgb255.stroke,e),dp=(e=Ln.alpha.surfaceStroke)=>Qe(An.surfaceRgb255.accent,e),Cr=(e,n=Ln.alpha.lineComponentByKind[e])=>Qe(An.lineComponentRgb255ByKind[e],n),Er=(e,n=Ln.alpha.lineComponentLabelAccentByKind[e])=>Qe(An.lineComponentRgb255ByKind[e],n),Mn=e=>Bl(e)?lp(e,Ln.alpha.shortLabelBackgroundByType.area):Qe(An.shortLabelRgb255ByType[e],Ln.alpha.shortLabelBackgroundByType[e]),Sh=e=>Bl(e)?Fl(e):An.shortLabelRgb255ByType[e],Li=(e,n=Ln.alpha.selection[e])=>Qe(An.selectionRgb255[e],n),cp=(e=1)=>Qe(An.labelTextRgb255,e),Gn=Object.freeze({fontFamily:'"Helvetica Neue", Arial, Helvetica, sans-serif',fontWeight:{regular:400,medium:500,semibold:600},fontSizePx:{supportText:12,pointLabel:14,measurementLabel:16,compactBadge:10,distancePairLabel:11}}),mp=e=>{if(!Number.isFinite(e)||e<0)return"A";let n=Math.floor(e),t="";do t=String.fromCharCode(65+n%26)+t,n=Math.floor(n/26)-1;while(n>=0);return t},In={NUMERIC:"numeric",ALPHABETIC:"alphabetic"},yp={[P.POINT]:{prefix:"",counterStyle:In.NUMERIC,backgroundColor:Mn(P.POINT),textColor:Pn("dark")},[P.DISTANCE]:{prefix:"",counterStyle:In.ALPHABETIC,backgroundColor:Mn(P.DISTANCE),textColor:Pn("light")},[P.POLYLINE]:{prefix:"L",counterStyle:In.NUMERIC,backgroundColor:Mn(P.POLYLINE),textColor:Pn("dark")},[P.AREA_GROUND]:{prefix:"A",counterStyle:In.NUMERIC,backgroundColor:Mn(P.AREA_GROUND),textColor:Pn("light")},[P.AREA_PLANAR]:{prefix:"D",counterStyle:In.NUMERIC,backgroundColor:Mn(P.AREA_PLANAR),textColor:Pn("light")},[P.AREA_VERTICAL]:{prefix:"F",counterStyle:In.NUMERIC,backgroundColor:Mn(P.AREA_VERTICAL),textColor:Pn("light")},[P.LABEL]:{prefix:"T",counterStyle:In.NUMERIC,backgroundColor:Mn(P.LABEL),textColor:Pn("light")}},Gl=(e,n,t=yp)=>{const o=t[e],r=Number.isFinite(n)&&n>0?Math.floor(n):1,a=o.counterStyle===In.ALPHABETIC?mp(r-1):`${r}`;return`${o.prefix}${a}`},jl=/^(.*?)(\d+)$/,pp=8,gp=(e,n)=>{const t=e==null?void 0:e.trim();if(!t)return n;const o=t.match(jl);if(!o)return t;const[,r,a]=o,i=String(Number(a)+1).padStart(a.length,"0");return`${r}${i}`},fp=(e,n)=>{const t=n.trim();return t?[t,...e.filter(o=>o!==t)].slice(0,pp):e},Ri=e=>{const n=e.match(jl);if(!n)return null;const[,t]=n,o=t.trimEnd();return o?{baseText:o,prefix:t}:null},Ap=e=>{const n=new Set(e.filter(o=>!Ri(o))),t=new Set;return e.filter(o=>{const r=Ri(o);return r?n.has(r.baseText)||t.has(r.prefix)?!1:(t.add(r.prefix),!0):!0})},_a=(...e)=>Ap([...new Set(e.flat().map(n=>n.trim()).filter(Boolean))]),vp=({defaultText:e,labelTextHistory:n,labelTextSuggestions:t})=>({initialValue:gp(n[0],e),labelSuggestions:_a(n,t)}),Ch=({annotationEntries:e,additionalSuggestions:n=[]})=>_a([...e].reverse().filter(t=>t.toolType===P.LABEL||t.type===P.LABEL).flatMap(t=>t.displayName??t.name??[]),n),Tp="data-annotation-keyboard-shortcuts-suspended",wi=e=>e instanceof HTMLElement?e.isContentEditable?!0:e.closest("input, textarea, select, [contenteditable]:not([contenteditable='false'])")instanceof HTMLElement:!1,xi=e=>e instanceof HTMLElement?!!e.closest(`[${Tp}]`):!1,Hl=e=>e instanceof Element?e:e instanceof Node?e.parentElement:null,bp=e=>{const n=Hl(e);return wi(n)?!0:wi(document.activeElement)},zl=e=>{const n=Hl(e);return bp(e)||xi(n)||xi(document.activeElement)},Le={CANCEL_ACTIVE_TOOL:"cancel-active-tool",DELETE_SELECTION:"delete-selection",FINISH_MEASUREMENT:"finish-measurement",FOCUS_NEXT_NAVIGATION_ITEM:"focus-next-navigation-item",FOCUS_PREVIOUS_NAVIGATION_ITEM:"focus-previous-navigation-item",UNDO_LAST_POINT:"undo-last-point"},kp=(e,n)=>{const t=e.key.toLowerCase(),o=e.code.toLowerCase();return n.some(r=>{const a=r.toLowerCase();return a===t||a===o})},Np=[{action:Le.CANCEL_ACTIVE_TOOL,keys:["Escape"]},{action:Le.FINISH_MEASUREMENT,keys:["Enter"]},{action:Le.FOCUS_PREVIOUS_NAVIGATION_ITEM,keys:["ArrowLeft"]},{action:Le.FOCUS_NEXT_NAVIGATION_ITEM,keys:["ArrowRight"]},{action:Le.DELETE_SELECTION,keys:["Delete"]},{action:Le.UNDO_LAST_POINT,keys:["Backspace"]}],Ip=(e,{allowRepeat:n=!1}={})=>!(e.defaultPrevented||!n&&e.repeat||e.metaKey||e.ctrlKey||e.altKey||zl(e.target)),hp=e=>!e.defaultPrevented&&!e.altKey&&!zl(e.target)&&(e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==="a",Sp=(e,n={})=>{var t;return((t=Np.find(({action:o,keys:r})=>{var a;return!((a=n.disabledActions)!=null&&a.includes(o))&&kp(e,r)}))==null?void 0:t.action)??null},ut=new x,Cp=new x,aa=(e,n)=>e.dot(n)<0?e.negate():e,Ep=({samples:e,normal:n,maxSampleCount:t,timestampMs:o=performance.now()})=>{const r=ut.copy(n);if(e.length>0){const i=e[e.length-1];i&&aa(r,Cp.set(i.normalX,i.normalY,i.normalZ))}e.push({normalX:r.x,normalY:r.y,normalZ:r.z,timestampMs:o});const a=e.length-t;a>0&&e.splice(0,a)},Op=({samples:e,fallbackNormal:n,result:t,epsilonSquared:o,maxSampleAgeMs:r,weightDecayWindowMs:a=r,weightDecayGamma:i=1,nowMs:s=performance.now()})=>{const u=s-Math.max(0,r);for(;e.length>1&&e[0].timestampMs<u;)e.shift();if(e.length===0)return n;let l=0,d=0,c=0,m=0;const y=Math.max(0,a),p=Math.max(i,.01),f=e[e.length-1];for(const v of e){ut.set(v.normalX,v.normalY,v.normalZ),aa(ut,n);const b=Math.max(0,s-v.timestampMs),T=v===f?1:y>0?Math.pow(Math.max(0,1-b/y),p):1;T<=0||(l+=ut.x*T,d+=ut.y*T,c+=ut.z*T,m+=T)}if(m<=0)return t.copy(n);const A=1/m;return t.set(l*A,d*A,c*A),t.lengthSq()<=o?t.copy(n):(t.normalize(),aa(t,n)),t},gt=Object.freeze({referenceLineEpsilonMeters:.001}),Pa=1e-8,Ul=(e,n,t)=>new x().crossVectors(new x().subVectors(n,e),new x().subVectors(t,e)).lengthSq(),Vl=e=>{if(e.length<3)return null;let n=null,t=Pa;for(let o=0;o<e.length;o+=1){const r=e[o],a=e[(o+1)%e.length],i=e[(o+2)%e.length];if(!r||!a||!i)continue;const s=Ul(r,a,i);s>t&&(t=s,n=[r,a,i])}return n},Lp=e=>{for(let n=0;n<e.length-2;n+=1)for(let t=n+1;t<e.length-1;t+=1)for(let o=t+1;o<e.length;o+=1){const r=e[n],a=e[t],i=e[o];if(r&&a&&i&&Ul(r,a,i)>Pa)return[r,a,i]}return null},$l=(e,n)=>{if(!n)return e;const t=he(e.anchorECEF),o=_e(he(e.normalECEF));if(!o)return e;const r=new x().subVectors(n,t);return r.lengthSq()<=Pa||o.dot(r)>=0?e:{...e,normalECEF:yn(o.negate())}},Wl=(e,n)=>{if(!e)return null;const[t,o,r]=e,a=La(t,o,r);return a?$l({anchorECEF:yn(t),normalECEF:yn(a)},n):null},Rp=(e,n)=>Wl(Lp(e),n),Eh=(e,n)=>Wl(Vl(e),n),Oh=(e,n)=>{if(e.length<3||!Vl(e))return null;const t=Em(e),o=t&&_e(new x(...Um(zm(e,t))));return!t||!o?null:$l({anchorECEF:yn(t),normalECEF:yn(o)},n)},wp=new x(1,0,0),xp=new x(0,1,0),qp=(e,n,t)=>{if(e.length===0)return;const o=e[0]??he(n.anchorECEF);let r=_e(he(n.normalECEF));if(!r)return;if(t){const u=_e(he(t.northECEF));u&&r.dot(u)<0&&(r=r.clone().negate())}const a=_e(Kt(Ra(o),r));let i=a?_e(new x().crossVectors(r,a)):null;for(let u=0;!i&&u<e.length-1;u+=1){const l=e[u],d=e[u+1];!l||!d||(i=_e(Kt(new x().subVectors(d,l),r)))}if(i??(i=_e(new x().crossVectors(r,wp))),i??(i=_e(new x().crossVectors(r,xp))),!i)return;const s=_e(new x().crossVectors(i,r));if(s){if(t){const u=_e(he(t.eastECEF));u&&i.dot(u)<0&&(i=i.clone().negate(),r=r.clone().negate())}return{originECEF:yn(o),eastECEF:yn(i),northECEF:yn(r),upECEF:yn(s)}}},_p=1e-8,Pp=e=>{const n=_e(he(e.normalECEF));if(!n)return;const{east:t,north:o}=Sa(he(e.anchorECEF)),r=n.dot(t),a=n.dot(o);if(!(Math.hypot(r,a)<=_p))return Om(Math.atan2(r,a))},Yl=(e,n)=>Al(e,he(n.anchorECEF),he(n.normalECEF)),Mp=(e,n)=>{if(e.length<3)return 0;const t=he(n.anchorECEF),{xAxis:o,yAxis:r}=Qo(he(n.normalECEF).normalize());return mm(e.map(a=>{const i=new x().subVectors(a,t);return{x:i.dot(o),y:i.dot(r)}}))},Dp=e=>{const n=he(e.normalECEF).normalize(),t=Ra(he(e.anchorECEF)),o=n.angleTo(t);return Yt(Math.min(o,Ws-o))},Bp=(e,n)=>{let t=0;for(let a=1;a<e.length;a+=1){const i=e[a-1],s=e[a];i&&s&&(t+=i.distanceTo(s))}const o=e[0],r=e[e.length-1];return n&&e.length>=3&&o&&r&&(t+=r.distanceTo(o)),t},Fp=(e,n,t)=>{var s;const o=e.nodeIds.map(u=>n.get(u)).filter(u=>!!u),r=Bp(o,e.closed),a=o.length<3?null:Rp(o,(t==null?void 0:t.preferredFacingPositionECEF)??null);if(!a)return{...e,perimeterMeters:r,areaSquareMeters:0};const i=e.closed||e.planeLocked?Mp(o,a):0;return{...e,plane:a,planarPolygonLocalFrame:e.type===P.AREA_VERTICAL?qp(o,a,(s=t==null?void 0:t.previousDerivedGeometry)==null?void 0:s.planarPolygonLocalFrame):void 0,perimeterMeters:r,areaSquareMeters:i,verticalityDeg:Dp(a),bearingRad:Pp(a)}},qi=Object.freeze({componentEpsilonMeters:.05}),Kl=(e,n)=>{const t=Ra(e),o=new x().subVectors(n,e),r=o.dot(t),a=new x().copy(t).multiplyScalar(r),i=Kt(o,t),s=i.length(),u=Math.abs(r);if(s<qi.componentEpsilonMeters||u<qi.componentEpsilonMeters)return null;const l=new x().addVectors(e,i),d=new x().addVectors(e,a),c=new x().addVectors(e,t),m=La(e,c,l),y=p=>m?Al(p,e,m):p;return{adjacentHorizontalCorner:y(l),adjacentVerticalCorner:y(d)}},Lh=(e,n)=>{const t=Kl(e,n);if(!t)return 0;const o=e.distanceTo(t.adjacentHorizontalCorner),r=e.distanceTo(t.adjacentVerticalCorner);return o*r},Ql=1e-8,ia=.001,Gp=1e-6,_i=16,Pi=e=>!e||e.lengthSq()<=Ql?null:e.clone().normalize(),jp=(e,n,t)=>{const o=Pi(n),r=Pi(t);return o?r&&o.dot(r)<0||o.dot(Xr(e))<0?o.negate():o:r||Xr(e)},Hp=(e,n,t,o=new Ko)=>{const r=Math.max(t,ia),a=n.clone().normalize(),{xAxis:i,yAxis:s}=Qo(a);return o.makeBasis(i,s,a).scale(new x(r,r,1)).setPosition(e)},zp=(e,n,t,o,r)=>{const a=Math.max(o,ia);if(r===void 0)return a;const i=e(n);if(!i)return a;const{xAxis:s,yAxis:u}=Qo(t),l=new x;let d=0;for(let c=0;c<_i;c+=1){const m=c/_i*Ac;l.copy(n).addScaledVector(s,Math.cos(m)).addScaledVector(u,Math.sin(m));const y=e(l);if(!y)continue;const p=Math.hypot(y.x-i.x,y.y-i.y);Number.isFinite(p)&&p>d&&(d=p)}return d<=Gp?a:Math.max(r/d,ia)},Rh={CESIUM:"cesium",MAPLIBRE_THREE:"maplibre-three"},Up={COLOR:"color",CHROME_MIRROR:"chrome-mirror",FROSTED_GLASS:"frosted-glass"},$n={GROUND:"ground",COPLANAR:"coplanar"},Mi={IMMEDIATE:"immediate",DELAYED_LINE_FINISH:"delayed-line-finish"},Vp={SHIFT:"shift"},wh={SCREEN:"screen",WORLD:"world"},j=e=>!!e&&!e.isDestroyed(),$p=(e,n)=>e===n?!0:!e||!n?!1:e.viewportWidth===n.viewportWidth&&e.viewportHeight===n.viewportHeight&&e.viewKey===n.viewKey,Di=Object.freeze({tooltipZIndex:1700,triggerClassName:"inline-flex items-center text-[16px] leading-none"}),hn=({actionId:e,title:n,icon:t,onClick:o,dataTestId:r,className:a,ariaLabel:i,disabled:s=!1,visualOptions:u})=>{var f;const l=sn(u),[d,c]=g.useState(!1),m=`${l.actionIconClassName}${a?` ${a}`:""}${s?" cursor-not-allowed opacity-50":" cursor-pointer"}`,y={color:d&&!s?l.actionIconHoverColor:l.actionIconColor};l.actionIconFontSize!==null&&(y.fontSize=l.actionIconFontSize);const p=(f=l.renderActionIcon)==null?void 0:f.call(l,{actionId:e,icon:t,className:m,style:y,dataTestId:r,ariaLabel:i,disabled:s});return O.jsx(Ys,{title:n,zIndex:Di.tooltipZIndex,getPopupContainer:A=>{const v=A instanceof HTMLElement?A:document.body;return l.resolveActionTooltipPopupContainer(v)},children:O.jsx("span",{onClick:A=>{if(s){A.stopPropagation();return}o(A)},onMouseEnter:()=>c(!0),onMouseLeave:()=>c(!1),className:Di.triggerClassName,"aria-label":i,"aria-disabled":s,children:p??O.jsx(kt,{className:m,style:y,icon:t,"data-test-id":r,"aria-hidden":i?void 0:!0})})})};hn.__docgenInfo={description:"",methods:[],displayName:"AnnotationInfoBoxActionIcon",props:{actionId:{required:!0,tsType:{name:"unknown[union]",raw:"(typeof ANNOTATION_INFO_BOX_ACTION_IDS)[keyof typeof ANNOTATION_INFO_BOX_ACTION_IDS]"},description:""},title:{required:!0,tsType:{name:"string"},description:""},icon:{required:!0,tsType:{name:"IconDefinition"},description:""},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: ReactMouseEvent<HTMLElement, MouseEvent>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",elements:[{name:"HTMLElement"},{name:"MouseEvent"}],raw:"ReactMouseEvent<HTMLElement, MouseEvent>"},name:"event"}],return:{name:"void"}}},description:""},dataTestId:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},visualOptions:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};const Wp=Object.freeze({flyTo:"Zur Messung fliegen",exportGeoJson:"Als GeoJSON exportieren",show:"Einblenden",hide:"Ausblenden",setReference:"Als Referenzhöhe setzen",lock:"Sperren",unlock:"Entsperren",editStyle:"Darstellung bearbeiten",delete:"Löschen",deleteLocked:"Gesperrte Messung kann nicht gelöscht werden"}),Yp=({hidden:e=!1,locked:n=!1,labels:t,onFlyTo:o,onExport:r,onToggleVisibility:a,onToggleLock:i,onEditStyle:s,onDelete:u,onSetReference:l,visualOptions:d,dataTestIdPrefix:c,dataTestIds:m})=>{const y={...Wp,...t},p=new Set((d==null?void 0:d.hiddenActionIds)??[]),f=A=>!p.has(A);return O.jsxs("div",{className:"flex items-center gap-2",children:[f(ve.FLY_TO)?O.jsx(hn,{actionId:ve.FLY_TO,title:y.flyTo,icon:bc,onClick:o,dataTestId:(m==null?void 0:m.flyTo)??`${c}-flyto-btn`,visualOptions:d}):null,f(ve.EXPORT)?O.jsx(hn,{actionId:ve.EXPORT,title:y.exportGeoJson,icon:kc,onClick:r,dataTestId:(m==null?void 0:m.export)??`${c}-export-geojson-btn`,visualOptions:d}):null,f(ve.VISIBILITY)?O.jsx(hn,{actionId:ve.VISIBILITY,title:e?y.show:y.hide,icon:e?Nc:Ic,onClick:a,dataTestId:(m==null?void 0:m.visibility)??`${c}-toggle-visibility-btn`,visualOptions:d}):null,l&&f(ve.REFERENCE)?O.jsx(hn,{actionId:ve.REFERENCE,title:y.setReference,icon:hc,onClick:l,dataTestId:(m==null?void 0:m.reference)??`${c}-set-reference-btn`,visualOptions:d}):null,f(ve.LOCK)?O.jsx(hn,{actionId:ve.LOCK,title:n?y.unlock:y.lock,icon:n?Sc:Cc,onClick:i,dataTestId:(m==null?void 0:m.lock)??`${c}-toggle-lock-btn`,visualOptions:d}):null,s&&f(ve.STYLE)?O.jsx(hn,{actionId:ve.STYLE,title:y.editStyle,icon:Ec,onClick:s,visualOptions:d}):null,f(ve.DELETE)?O.jsx(hn,{actionId:ve.DELETE,title:n?y.deleteLocked:y.delete,icon:Oc,onClick:u,dataTestId:(m==null?void 0:m.delete)??`${c}-delete-btn`,disabled:n,visualOptions:d}):null]})};Yp.__docgenInfo={description:"",methods:[],displayName:"AnnotationInfoBoxActions",props:{hidden:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},locked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},labels:{required:!1,tsType:{name:"Partial",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};const Xl=({pixelWidth:e,fitContentWidth:n=!0,collapsedHorizontalAnchor:t="control-edge",useControlLayout:o=!0,controlPosition:r="bottomright",controlOrder:a=11,style:i,slots:s,visualOptions:u})=>{var c;const l=sn(u),d=((c=s.headingTitle)==null?void 0:c.trim())??"";return O.jsx("div",{"data-test-id":"annotation-info-box",children:O.jsx(Gc,{width:e??l.defaultPixelWidth,fitContentWidth:n,useControlLayout:o,controlPosition:r,controlOrder:a,style:i,bodyStyle:l.bodyPanelStyle,onPanelClick:m=>m.stopPropagation(),collapsible:s.collapsible??!0,header:void 0,headingColor:s.headingColor??l.headingColor,headingStyle:l.headerStyle,footer:s.footer,hideSubtitleWhenCollapsed:!1,hideFooterWhenCollapsed:!0,collapsedHorizontalAnchor:t,heading:d?O.jsx("div",{className:"flex w-full items-center gap-2",children:O.jsx("span",{className:`${l.headerForegroundClassName} ${l.headerTitleClassName}`,title:d,children:d})}):void 0,subtitle:s.subtitle,content:s.content})})};Xl.__docgenInfo={description:"",methods:[],displayName:"AnnotationInfoBoxContainer",props:{pixelWidth:{required:!1,tsType:{name:"number"},description:""},fitContentWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},collapsedHorizontalAnchor:{required:!1,tsType:{name:"union",raw:'"control-edge" | "expanded-left"',elements:[{name:"literal",value:'"control-edge"'},{name:"literal",value:'"expanded-left"'}]},description:"",defaultValue:{value:'"control-edge"',computed:!1}},useControlLayout:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},controlPosition:{required:!1,tsType:{name:"union",raw:`| "topleft"
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
}`,signature:{properties:[{key:"headingTitle",value:{name:"string",required:!1}},{key:"headingColor",value:{name:"string",required:!1}},{key:"subtitle",value:{name:"ReactNode",required:!1}},{key:"content",value:{name:"ReactNode",required:!1}},{key:"footer",value:{name:"ReactNode",required:!1}},{key:"collapsible",value:{name:"boolean",required:!1}}]}},description:""}}};const ce={TEXT:"text",ACTION:"action",ALERT:"alert",HEADING:"heading"},ht={TITLE:"title",SECTION:"section"},Jn={END:"end",START:"start"},Re={CLICK:"click",DOUBLE_CLICK:"double-click",ENTER:"enter",BACKSPACE:"backspace",ESCAPE:"escape",SHIFT:"shift",DISC_CENTER:"disc-center",DISC_OUTER:"disc-outer"},Zt={INFO:"info",WARNING:"warning"},Cn={INFO:"info",WARNING:"warning"},Ve={STANDARD:"standard",COMPACT:"compact"},Kp="#00d9ff",Qp="rgba(0, 217, 255, 0.2)",Xp="#004b5c",Zp="#ef4444",Jp="rgba(239, 68, 68, 0.18)",eg="#7f1d1d",Ma="--carma-help-baseline",ng="1.5em",fn=1.5,Jt=`var(${Ma})`,nr=`calc(var(${Ma}) / 2)`,Bi=.74,Or=4/3,sa=e=>`${fn/e}em`,Zl={[Ma]:ng,lineHeight:fn},Jl={margin:`0 0 ${Jt}`,lineHeight:fn},Fi={[ht.TITLE]:{margin:0,fontWeight:700,lineHeight:fn},[ht.SECTION]:{margin:`${nr} 0 0`,fontWeight:700,lineHeight:fn}},tg={gridColumn:"1 / -1"},fo={whiteSpace:"normal"},og={display:"inline-flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"flex-start",minWidth:0},Go={display:"inline-flex",flexWrap:"wrap",alignItems:"center",gap:"0.34em",minHeight:Jt},rg={...Go,marginTop:nr},ag={...Go,justifyContent:"space-between",width:"100%"},jo="1em",ig="0.5em",eu="max-content minmax(0, 1fr)",sg="7.75rem minmax(0, 1fr)",lg=e=>({...Zl,display:"grid",gridTemplateColumns:e===Jn.START?sg:eu,columnGap:e===Jn.START?ig:jo,rowGap:nr,alignItems:"start"}),nu={...Jl,gridColumn:"1 / -1"},ug={...nu,margin:0},tu={[Ve.STANDARD]:{display:"grid",gridTemplateColumns:eu,columnGap:jo,alignItems:"start",margin:`0 0 ${nr}`,lineHeight:fn},[Ve.COMPACT]:{display:"contents"}},tr={display:"inline-flex",alignItems:"center",justifyContent:"flex-end",gap:"0.22em",minHeight:Jt,whiteSpace:"nowrap"},la={display:"flex",flexDirection:"column",alignItems:"flex-end",gap:0,whiteSpace:"nowrap"},dg={lineHeight:1},ua={[Cn.INFO]:{margin:"-0.2rem 0 0.8rem",padding:"0.48rem 0.56rem",borderRadius:4,background:Qp,color:Xp},[Cn.WARNING]:{margin:"-0.2rem 0 0.8rem",padding:"0.48rem 0.56rem",borderRadius:4,background:Jp,color:eg}},cg={[Cn.INFO]:{...ua[Cn.INFO],display:"grid",gridColumn:"1 / -1",gridTemplateColumns:"subgrid",columnGap:jo,rowGap:"0.58rem",margin:"-0.2rem 0 0.8rem",padding:"0.48rem 0"},[Cn.WARNING]:{...ua[Cn.WARNING],display:"grid",gridColumn:"1 / -1",gridTemplateColumns:"subgrid",columnGap:jo,rowGap:"0.58rem",margin:"-0.2rem 0 0.8rem",padding:"0.48rem 0"}},mg={minWidth:0,fontWeight:600,lineHeight:fn},yg={[Ve.STANDARD]:{minWidth:0,lineHeight:fn,whiteSpace:"nowrap"},[Ve.COMPACT]:{minWidth:0,lineHeight:fn}},ou={display:"inline-flex",boxSizing:"border-box",minWidth:"3.4em",height:sa(Bi),alignItems:"center",justifyContent:"center",border:"1px solid rgba(0, 0, 0, 0.34)",borderRadius:"0.28rem",background:"rgba(255, 255, 255, 0.68)",boxShadow:"inset 0 -1px 0 rgba(0, 0, 0, 0.2)",color:"#1f2937",fontSize:`${Bi}em`,fontWeight:700,lineHeight:1,padding:"0 0.58em"},pg={...ou,gap:"0.22rem"},gg={display:"inline-flex",minWidth:Jt,height:Jt,alignItems:"center",justifyContent:"center",lineHeight:1},fg={[Zt.INFO]:{color:Kp},[Zt.WARNING]:{color:Zp}},Ag={display:"inline-flex",alignItems:"center",justifyContent:"center",minWidth:sa(Or),height:sa(Or),fontSize:`${Or}em`,lineHeight:1,color:le.ACCENT_NEUTRALS},Lr={de:{alternative:"oder",click:"Klick",doubleClick:"2x Klick"},en:{alternative:"or",click:"Click",doubleClick:"Double click"}},vg=e=>{const n=e==null?void 0:e.split("-")[0];return n&&Lr[n]?Lr[n]:Lr.en},Ut=e=>O.jsx("span",{style:ou,children:e}),da=e=>O.jsxs("span",{style:pg,children:[O.jsx(kt,{icon:wc}),O.jsx("span",{children:e})]}),ca=e=>O.jsx("span",{style:Ag,children:O.jsx(kt,{icon:e})}),eo=e=>O.jsx("span",{style:gg,children:O.jsx(kt,{style:fg[e],icon:e===Zt.WARNING?Lc:Rc})}),ru=e=>eo(e===Cn.WARNING?Zt.WARNING:Zt.INFO),au=(e,n)=>Ut(ry(e,n)),iu=(e,n,t,o)=>{switch(e){case Re.CLICK:return da(o.click);case Re.DOUBLE_CLICK:return da(o.doubleClick);case Re.ENTER:return Ut("Enter");case Re.BACKSPACE:return au(t,n);case Re.ESCAPE:return Ut(n.escape);case Re.SHIFT:return Ut(n.shift);case Re.DISC_CENTER:return ca(Ym);case Re.DISC_OUTER:return ca(xc)}},Ho=(e,n,t,o)=>O.jsx("span",{style:tr,children:e.map((r,a)=>O.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"0.22rem"},children:[a>0?O.jsx("span",{children:"+"}):null,iu(r,n,t,o)]},`${r}-${a}`))}),su=(e,n,t,o,r,a)=>a===Ve.COMPACT?O.jsxs("span",{style:la,children:[e?eo(e):null,n.map((i,s)=>O.jsxs("span",{style:la,children:[s>0?O.jsx("span",{style:dg,children:r.alternative}):null,Ho(i,t,o,r)]},`${i.join("+")}-${s}`))]}):O.jsxs("span",{style:tr,children:[e?eo(e):null,n.map((i,s)=>O.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"0.22rem"},children:[s>0?O.jsx("span",{children:r.alternative}):null,Ho(i,t,o,r)]},`${i.join("+")}-${s}`))]}),lu=(e,n,t,o)=>{const r=e.inputAlternatives.length-1;return O.jsxs("span",{style:og,children:[e.inputAlternatives.length===0?e.leadingLabel&&O.jsx("span",{style:Go,children:O.jsx("span",{style:fo,children:e.leadingLabel})}):e.inputAlternatives.map((a,i)=>O.jsxs("span",{style:e.rightAlignInput&&i===0?ag:i===0?Go:rg,children:[i===0&&e.leadingLabel?O.jsx("span",{style:fo,children:e.leadingLabel}):null,i===0&&e.indicator?eo(e.indicator):null,Ho(a,n,t,o),i<r?O.jsx("span",{children:o.alternative}):null,i===r&&e.trailingLabelAfterLastInput&&e.trailingLabel?O.jsx("span",{style:fo,children:e.trailingLabel}):null]},`${a.join("+")}-${i}`)),e.trailingLabel&&!e.trailingLabelAfterLastInput?O.jsx("span",{style:fo,children:e.trailingLabel}):null]})};Ut.__docgenInfo={description:"",methods:[],displayName:"renderKeyToken"};da.__docgenInfo={description:"",methods:[],displayName:"renderPointerToken"};ca.__docgenInfo={description:"",methods:[],displayName:"renderDragTargetToken"};eo.__docgenInfo={description:"",methods:[],displayName:"renderActionIndicatorToken"};ru.__docgenInfo={description:"",methods:[],displayName:"renderAlertSeverityToken"};au.__docgenInfo={description:"",methods:[],displayName:"renderBackspaceToken"};iu.__docgenInfo={description:"",methods:[],displayName:"renderHelpActionInput"};Ho.__docgenInfo={description:"",methods:[],displayName:"renderHelpActionInputCombination"};su.__docgenInfo={description:"",methods:[],displayName:"renderHelpActionInputAlternatives"};lu.__docgenInfo={description:"",methods:[],displayName:"renderStartAlignedTrigger"};const Tg=()=>typeof navigator>"u"?void 0:navigator.language,bg=e=>e===Ve.COMPACT?e:Ve.STANDARD,kg=e=>typeof e=="string"||e.kind===ce.TEXT,Gi=e=>typeof e!="string"&&e.kind===ce.ALERT,Ng=e=>{const n=e.findIndex(kg);if(n<=0)return e;const t=e.slice(0,n),o=t.filter(Gi);return o.length===0?e:[...t.filter(r=>!Gi(r)),e[n],...o,...e.slice(n+1)]},Ao=(e,n,t=!1)=>{const o=typeof e=="string"?e:e.text;return O.jsx("p",{style:n===Ve.COMPACT?t?ug:nu:Jl,children:o},o)},ji=(e,n,t)=>{const o=e.level??ht.SECTION;return O.jsx("div",{"data-testid":"annotation-help-heading","data-level":o,style:t===Ve.COMPACT?{...Fi[o],...tg}:Fi[o],children:e.text},`heading-${e.text}-${n}`)},ma=(e,n,t,o,r,a,i=Jn.END)=>{const u=i===Jn.START?lu(e,t,o,r):(e.inputAlternatives.length>0||e.indicator?su(e.indicator,e.inputAlternatives,t,o,r,a):null)??O.jsx("span",{style:tr});return O.jsxs("div",{"data-testid":"annotation-help-action",style:tu[a],children:[u,O.jsx("span",{style:yg[a],children:e.description})]},`${e.inputAlternatives.map(l=>l.join("+")).join("-")}-${e.leadingLabel??""}-${n}`)},Hi=(e,n,t,o,r,a)=>{const i=e.actions??[],s=a===Ve.COMPACT?cg[e.severity]:ua[e.severity];return O.jsxs("div",{"data-testid":"annotation-help-alert","data-severity":e.severity,style:s,children:[O.jsxs("div",{style:tu[a],children:[O.jsx("span",{style:a===Ve.COMPACT?la:tr,children:ru(e.severity)}),O.jsx("span",{style:mg,children:e.text})]}),i.map((u,l)=>ma(u,l,t,o,r,a))]},`${e.severity}-${e.text}-${n}`)},or=({items:e,layout:n,locale:t,platform:o,actionTriggerAlign:r=Jn.END})=>{const a=bg(n),i=t??Tg(),s=oy(i),u=ty(o),l=vg(i),d=Ng(e);if(a===Ve.COMPACT){const m=d.map((y,p)=>typeof y=="string"||y.kind===ce.TEXT?Ao(y,a,p===d.length-1):y.kind===ce.HEADING?ji(y,p,a):y.kind===ce.ALERT?Hi(y,p,s,u,l,a):ma(y,p,s,u,l,a,r));return O.jsx("div",{"data-testid":"annotation-help-content",style:lg(r),children:m})}const c=d.map((m,y)=>typeof m=="string"||m.kind===ce.TEXT?Ao(m,a):m.kind===ce.HEADING?ji(m,y,a):m.kind===ce.ALERT?Hi(m,y,s,u,l,a):ma(m,y,s,u,l,a,r));return O.jsx("div",{"data-testid":"annotation-help-content",style:Zl,children:c})};or.__docgenInfo={description:"",methods:[],displayName:"AnnotationInfoBoxHelpContent",props:{items:{required:!0,tsType:{name:"unknown"},description:""},layout:{required:!1,tsType:{name:"unknown[union]",raw:"(typeof ANNOTATION_INFO_BOX_HELP_LAYOUTS)[keyof typeof ANNOTATION_INFO_BOX_HELP_LAYOUTS]"},description:""},locale:{required:!1,tsType:{name:"string"},description:""},platform:{required:!1,tsType:{name:"KeyboardDisplayPlatform"},description:""},actionTriggerAlign:{required:!1,tsType:{name:"unknown[union]",raw:"(typeof ANNOTATION_INFO_BOX_HELP_ACTION_TRIGGER_ALIGNMENTS)[keyof typeof ANNOTATION_INFO_BOX_HELP_ACTION_TRIGGER_ALIGNMENTS]"},description:"",defaultValue:{value:'"end"',computed:!1}}}};const Ig=({items:e,className:n,visualOptions:t})=>{const o=sn(t),r=o.subtitleTextClassName.split(/\s+/).filter(a=>a.length>0&&!a.startsWith("px-")).join(" ");return O.jsx("dl",{className:`m-0 flex flex-wrap items-start tabular-nums${n?` ${n}`:""}`,style:{columnGap:"1.35rem",rowGap:"0.5rem"},children:e.map((a,i)=>O.jsxs("div",{className:"grid max-w-full min-w-[5rem] flex-[0_1_auto] grid-rows-[auto,auto] content-start items-start gap-y-[0.1em] text-left",children:[O.jsx("dt",{className:r,style:o.subtitleTextStyle,children:a.label}),O.jsx("dd",{className:"m-0 leading-[1.25]",children:a.value})]},a.id??i))})};Ig.__docgenInfo={description:"",methods:[],displayName:"AnnotationInfoBoxMetricGrid",props:{items:{required:!0,tsType:{name:"unknown"},description:""},className:{required:!1,tsType:{name:"string"},description:""},visualOptions:{required:!1,tsType:{name:"Partial",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Partial<AnnotationInfoBoxVisualOptions>"},description:""}}};const hg=({children:e,className:n,style:t,visualOptions:o})=>{const r=sn(o);return O.jsx("div",{className:`${r.subtitleMetaTextClassName}${n?` ${n}`:""}`,style:{...r.subtitleMetaTextStyle,...t},children:e})};hg.__docgenInfo={description:"",methods:[],displayName:"AnnotationInfoBoxMetaText",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""},visualOptions:{required:!1,tsType:{name:"Partial",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Partial<AnnotationInfoBoxVisualOptions>"},description:""}}};const Sg=Object.freeze({entrySingular:"Messung",entryPlural:"Messungen",availableSuffix:"verfügbar",previousAriaLabel:"Vorherige Messung",nextAriaLabel:"Nächste Messung",counterSeparator:"von"}),zi=(e,n)=>`${e} ${e===1?n.entrySingular:n.entryPlural} ${n.availableSuffix}`.trim(),Cg=({totalEntries:e,currentIndex:n,instructionText:t,availabilityLabel:o,labels:r,onFlyToAll:a,onPrevious:i,onNext:s,visualOptions:u})=>{var p,f;const l=sn(u),d={...Sg,...r};if(e<=0&&!t)return null;const c={fontSize:l.navigationLinkFontSize,border:"none",background:"transparent",padding:0,userSelect:"none"},m=((p=l.navigationControlLabels)==null?void 0:p.previous)??O.jsx(kt,{icon:qc}),y=((f=l.navigationControlLabels)==null?void 0:f.next)??O.jsx(kt,{icon:_c});return O.jsxs(O.Fragment,{children:[t?O.jsx("div",{className:`${l.navigationInstructionContainerClassName} ${l.mutedTextClassName}`,children:O.jsx("span",{children:t})}):null,e>0?O.jsx("div",{className:l.navigationAvailabilityContainerClassName,children:a?O.jsx("button",{type:"button",className:`${l.linkTextClassName} cursor-pointer`,onClick:a,style:{border:"none",background:"transparent",padding:0},children:o??zi(e,d)}):O.jsx("span",{className:l.linkTextClassName,children:o??zi(e,d)})}):null,e>0?O.jsxs("div",{className:l.navigationSummaryContainerClassName,children:[O.jsx("button",{type:"button",className:`renderAsLink cursor-pointer select-none ${l.linkTextClassName}`,onClick:i,"data-test-id":"switch-measurement-left",style:c,"aria-label":d.previousAriaLabel,children:m}),O.jsxs("span",{className:"mx-4",children:[n+1," ",d.counterSeparator," ",e]}),O.jsx("button",{type:"button",className:`renderAsLink cursor-pointer select-none ${l.linkTextClassName}`,onClick:s,"data-test-id":"switch-measurement-right",style:c,"aria-label":d.nextAriaLabel,children:y})]}):null]})};Cg.__docgenInfo={description:"",methods:[],displayName:"AnnotationInfoBoxNavigation",props:{totalEntries:{required:!0,tsType:{name:"number"},description:""},currentIndex:{required:!0,tsType:{name:"number"},description:""},instructionText:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},availabilityLabel:{required:!1,tsType:{name:"ReactNode"},description:""},labels:{required:!1,tsType:{name:"Partial",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};const rr=({children:e,className:n,style:t,visualOptions:o})=>{const r=sn(o);return O.jsx("div",{className:`${r.bodyContainerClassName} ${r.bodyTextClassName}${n?` ${n}`:""}`,style:{...r.bodyTextStyle,...t},children:e})};rr.__docgenInfo={description:"",methods:[],displayName:"AnnotationInfoBoxTextContent",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""},visualOptions:{required:!1,tsType:{name:"Partial",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Partial<AnnotationInfoBoxVisualOptions>"},description:""}}};const dt=e=>e.trim(),mn=Object.freeze({borderRadiusRem:"0.2143rem",shortLabelMaxLength:64,shortLabelWidthPaddingCh:.5,shortLabelMinWidthCh:2.5}),Pt=e=>dt(e).slice(0,mn.shortLabelMaxLength),Eg=e=>e.slice(0,mn.shortLabelMaxLength),Og=({value:e,placeholder:n,onCommit:t,readOnly:o=!1,shortLabelValue:r,shortLabelPlaceholder:a,onShortLabelCommit:i,visualOptions:s})=>{const u=sn(s),[l,d]=g.useState(()=>dt(e)),[c,m]=g.useState(()=>Pt(r??"")),y=g.useRef(null),p=g.useRef(null),f=mn.shortLabelMaxLength+mn.shortLabelWidthPaddingCh,A=Math.min(Math.max(dt(c||a||"").length+mn.shortLabelWidthPaddingCh,mn.shortLabelMinWidthCh),f);g.useEffect(()=>{d(dt(e))},[e]),g.useEffect(()=>{m(Pt(r??""))},[r]);const v=k=>{if(o){d(dt(e));return}const C=dt(k);d(C),t(C)},b=k=>{if(!i||o){m(Pt(r??""));return}const C=Pt(k);if(!C){const L=Pt(r??"");m(L);return}m(C),i(C)},T=k=>{k.stopPropagation()},I=k=>{var C;k.key==="Enter"&&(k.preventDefault(),(C=y.current)==null||C.blur())},N=k=>{var C;k.key==="Enter"&&(k.preventDefault(),(C=p.current)==null||C.blur())},h={...u.titleTextStyle,flex:"0 1 auto",minWidth:"1ch",maxWidth:"100%",fieldSizing:"content"},S={...u.titleTextStyle,borderRadius:mn.borderRadiusRem,flex:"0 1 auto",width:`${A}ch`,minWidth:`${mn.shortLabelMinWidthCh}ch`,maxWidth:`min(${f}ch, 100%)`,fieldSizing:"content"};return O.jsxs("div",{className:"inline-flex min-w-0 max-w-full flex-1 items-center",style:{columnGap:"0.35em"},onMouseDown:T,onClick:T,children:[O.jsx("input",{ref:y,type:"text",value:l,placeholder:n,readOnly:o,"aria-readonly":o,className:u.titleInputClassName,style:h,onMouseDown:T,onClick:T,onChange:k=>d(k.target.value),onBlur:k=>v(k.target.value),onKeyDown:I}),i?O.jsx("input",{ref:p,type:"text",value:c,placeholder:a,readOnly:o,"aria-readonly":o,maxLength:mn.shortLabelMaxLength,className:u.shortLabelInputClassName,style:S,onMouseDown:T,onClick:T,onChange:k=>m(Eg(k.target.value)),onBlur:k=>b(k.target.value),onKeyDown:N}):null]})};Og.__docgenInfo={description:"",methods:[],displayName:"AnnotationInfoBoxTitleInput",props:{value:{required:!0,tsType:{name:"string"},description:""},placeholder:{required:!0,tsType:{name:"string"},description:""},onCommit:{required:!0,tsType:{name:"signature",type:"function",raw:"(nextValue: string) => void",signature:{arguments:[{type:{name:"string"},name:"nextValue"}],return:{name:"void"}}},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},shortLabelValue:{required:!1,tsType:{name:"string"},description:""},shortLabelPlaceholder:{required:!1,tsType:{name:"string"},description:""},onShortLabelCommit:{required:!1,tsType:{name:"signature",type:"function",raw:"(nextValue: string) => void",signature:{arguments:[{type:{name:"string"},name:"nextValue"}],return:{name:"void"}}},description:""},visualOptions:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};const Lg={toolButtonWidthPx:48},Rg={wrapper:"w-fit max-w-full flex items-start gap-2 overflow-visible",toolButtonBase:"flex h-8 w-12 min-w-12 items-center justify-center rounded-[10px] bg-white px-2 text-gray-700 button-shadow transition-colors hover:text-gray-900",toolButtonActive:"text-[#1677ff]",toolButtonInactive:"",toolButtonDisabled:"cursor-not-allowed opacity-45 hover:text-gray-700",toolButtonBackdrop:"pointer-events-none absolute inset-0 z-0 overflow-hidden rounded-[10px]",toolGroup:"relative flex min-w-12 items-center overflow-visible",toolButtonShell:"relative overflow-visible",toolButtonIcon:"inline-flex items-center justify-center text-base leading-none",toolButtonBadge:"absolute right-0 top-0 z-10 inline-flex h-5 min-w-5 translate-x-1/3 -translate-y-1/3 items-center justify-center rounded-full bg-[#4b5563] px-1 text-[12px] font-medium leading-none text-white shadow-sm",separator:"inline-block h-[18px] w-px bg-gray-300"},uu=({activeToolId:e,tools:n,onToolSelect:t,classNames:o,metrics:r,tooltipPlacement:a="top",getTooltipPopupContainer:i,renderToolButtonBackdrop:s,showToolTypeIndicators:u=!1})=>{const l={...Rg,...o},d={...Lg,...r};return O.jsx("div",{className:l.wrapper,onClick:c=>c.stopPropagation(),children:n.map(c=>{const m=c.id===e,y=c.annotationCount??0,p=c.tooltipContent??c.tooltip,f=c.ariaLabel??c.tooltip,A=s==null?void 0:s(c);return O.jsxs("div",{className:l.toolGroup,children:[O.jsxs("div",{className:l.toolButtonShell,style:{width:d.toolButtonWidthPx},children:[u&&y>0?O.jsx("span",{className:l.toolButtonBadge,children:y}):null,O.jsx(Ys,{title:p,placement:a,getPopupContainer:i,children:O.jsxs("button",{type:"button",onClick:()=>t(c.id),"aria-pressed":m,"aria-label":f,disabled:c.disabled,className:["relative z-[1] overflow-hidden",l.toolButtonBase,m?l.toolButtonActive:l.toolButtonInactive,c.disabled?l.toolButtonDisabled:""].join(" "),style:{width:d.toolButtonWidthPx},children:[A?O.jsx("span",{className:l.toolButtonBackdrop,"aria-hidden":"true",children:A}):null,O.jsx("span",{className:["relative z-[1]",l.toolButtonIcon].join(" "),children:c.icon})]})})]}),c.separatorAfter?O.jsx("span",{className:l.separator,"aria-hidden":"true"}):null]},c.id)})})};uu.__docgenInfo={description:"",methods:[],displayName:"AnnotationsToolbar",props:{activeToolId:{required:!0,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},tools:{required:!0,tsType:{name:"unknown"},description:""},onToolSelect:{required:!0,tsType:{name:"signature",type:"function",raw:"(toolId: string) => void",signature:{arguments:[{type:{name:"string"},name:"toolId"}],return:{name:"void"}}},description:""},classNames:{required:!1,tsType:{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"tooltip",value:{name:"string",required:!0}},{key:"tooltipContent",value:{name:"ReactNode",required:!1}},{key:"icon",value:{name:"ReactNode",required:!1}},{key:"annotationCount",value:{name:"number",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"separatorAfter",value:{name:"boolean",required:!1}},{key:"ariaLabel",value:{name:"string",required:!1}}]}},name:"tool"}],return:{name:"ReactNode"}}},description:""},showToolTypeIndicators:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const Te={LABEL:"label",VISUALIZER:"visualizer"},ya=e=>`[${e}="true"]`,Ui="data-annotation-label-overlay-root",Vi="data-annotation-visualizer-overlay-root",du="data-annotation-visualizer-overlay-container",wg=ya(du),xg=Object.freeze([Te.VISUALIZER,Te.LABEL]),qg=Object.freeze({[Te.LABEL]:{rootAttribute:Ui,containerAttribute:Jc,rootSelector:ya(Ui),containerSelector:em},[Te.VISUALIZER]:{rootAttribute:Vi,containerAttribute:du,rootSelector:ya(Vi),containerSelector:wg}}),cu=e=>qg[e],mu=(e,n=Te.LABEL)=>{var i,s;const{rootSelector:t,containerSelector:o}=cu(n);let r=e.getOverlayContainer(),a=r;for(;r;){if(r.matches(o))return r;const u=(i=r.querySelector)==null?void 0:i.call(r,o);if(u instanceof HTMLElement)return u;if(r.matches(t))return r;const l=(s=r.querySelector)==null?void 0:s.call(r,t);if(l instanceof HTMLElement)return l;a=r,r=r.parentElement}return a},_g={position:"absolute",inset:0,overflow:"hidden",pointerEvents:"none",isolation:"isolate"},Pg={position:"absolute",inset:0,overflow:"hidden",pointerEvents:"none"},Mg=Object.freeze({[Te.VISUALIZER]:100,[Te.LABEL]:110}),yu=({groups:e=xg})=>O.jsx(O.Fragment,{children:e.map(n=>{const{rootAttribute:t,containerAttribute:o}=cu(n);return O.jsx("div",{[t]:"true",style:{..._g,zIndex:Mg[n]},children:O.jsx("div",{[o]:"true",style:Pg})},n)})});yu.__docgenInfo={description:"",methods:[],displayName:"AnnotationOverlayRoots",props:{groups:{required:!1,tsType:{name:"unknown"},description:"",defaultValue:{value:`Object.freeze([
  ANNOTATION_OVERLAY_GROUP.VISUALIZER,
  ANNOTATION_OVERLAY_GROUP.LABEL,
] as const satisfies readonly AnnotationOverlayGroup[])`,computed:!0}}}};var pu={exports:{}},gu={};/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uo=g;function Dg(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Bg=typeof Object.is=="function"?Object.is:Dg,Fg=uo.useSyncExternalStore,Gg=uo.useRef,jg=uo.useEffect,Hg=uo.useMemo,zg=uo.useDebugValue;gu.useSyncExternalStoreWithSelector=function(e,n,t,o,r){var a=Gg(null);if(a.current===null){var i={hasValue:!1,value:null};a.current=i}else i=a.current;a=Hg(function(){function u(y){if(!l){if(l=!0,d=y,y=o(y),r!==void 0&&i.hasValue){var p=i.value;if(r(p,y))return c=p}return c=y}if(p=c,Bg(d,y))return p;var f=o(y);return r!==void 0&&r(p,f)?p:(d=y,c=f)}var l=!1,d,c,m=t===void 0?null:t;return[function(){return u(n())},m===null?void 0:function(){return u(m())}]},[n,t,o,r]);var s=Fg(e,a[0],a[1]);return jg(function(){i.hasValue=!0,i.value=s},[s]),zg(s),s};pu.exports=gu;var Ug=pu.exports,Me="default"in si?yc:si,$i=Symbol.for("react-redux-context"),Wi=typeof globalThis<"u"?globalThis:{};function Vg(){if(!Me.createContext)return{};const e=Wi[$i]??(Wi[$i]=new Map);let n=e.get(Me.createContext);return n||(n=Me.createContext(null),e.set(Me.createContext,n)),n}var Rn=Vg(),$g=()=>{throw new Error("uSES not initialized!")};function Da(e=Rn){return function(){return Me.useContext(e)}}var fu=Da(),Au=$g,Wg=e=>{Au=e},Yg=(e,n)=>e===n;function Kg(e=Rn){const n=e===Rn?fu:Da(e),t=(o,r={})=>{const{equalityFn:a=Yg,devModeChecks:i={}}=typeof r=="function"?{equalityFn:r}:r,{store:s,subscription:u,getServerState:l,stabilityCheck:d,identityFunctionCheck:c}=n();Me.useRef(!0);const m=Me.useCallback({[o.name](p){return o(p)}}[o.name],[o,d,i.stabilityCheck]),y=Au(u.addNestedSub,s.getState,l||s.getState,m,a);return Me.useDebugValue(y),y};return Object.assign(t,{withTypes:()=>t}),t}function Qg(e){e()}function Xg(){let e=null,n=null;return{clear(){e=null,n=null},notify(){Qg(()=>{let t=e;for(;t;)t.callback(),t=t.next})},get(){const t=[];let o=e;for(;o;)t.push(o),o=o.next;return t},subscribe(t){let o=!0;const r=n={callback:t,next:null,prev:n};return r.prev?r.prev.next=r:e=r,function(){!o||e===null||(o=!1,r.next?r.next.prev=r.prev:n=r.prev,r.prev?r.prev.next=r.next:e=r.next)}}}}var Yi={notify(){},get:()=>[]};function Zg(e,n){let t,o=Yi,r=0,a=!1;function i(f){d();const A=o.subscribe(f);let v=!1;return()=>{v||(v=!0,A(),c())}}function s(){o.notify()}function u(){p.onStateChange&&p.onStateChange()}function l(){return a}function d(){r++,t||(t=e.subscribe(u),o=Xg())}function c(){r--,t&&r===0&&(t(),t=void 0,o.clear(),o=Yi)}function m(){a||(a=!0,d())}function y(){a&&(a=!1,c())}const p={addNestedSub:i,notifyNestedSubs:s,handleChangeWrapper:u,isSubscribed:l,trySubscribe:m,tryUnsubscribe:y,getListeners:()=>o};return p}var Jg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",ef=typeof navigator<"u"&&navigator.product==="ReactNative",nf=Jg||ef?Me.useLayoutEffect:Me.useEffect;function tf({store:e,context:n,children:t,serverState:o,stabilityCheck:r="once",identityFunctionCheck:a="once"}){const i=Me.useMemo(()=>{const l=Zg(e);return{store:e,subscription:l,getServerState:o?()=>o:void 0,stabilityCheck:r,identityFunctionCheck:a}},[e,o,r,a]),s=Me.useMemo(()=>e.getState(),[e]);nf(()=>{const{subscription:l}=i;return l.onStateChange=l.notifyNestedSubs,l.trySubscribe(),s!==e.getState()&&l.notifyNestedSubs(),()=>{l.tryUnsubscribe(),l.onStateChange=void 0}},[i,s]);const u=n||Rn;return Me.createElement(u.Provider,{value:i},t)}var of=tf;function vu(e=Rn){const n=e===Rn?fu:Da(e),t=()=>{const{store:o}=n();return o};return Object.assign(t,{withTypes:()=>t}),t}var rf=vu();function af(e=Rn){const n=e===Rn?rf:vu(e),t=()=>n().dispatch;return Object.assign(t,{withTypes:()=>t}),t}Wg(Ug.useSyncExternalStoreWithSelector);const St={AUTHORING:"authoring",EXTERNAL:"external"},no={DEFAULT:"default",CUSTOM:"custom"},Rr={RELATIVE:"relative",ABSOLUTE:"absolute"},to=(e,n)=>n?e.find(t=>t.id===n)??null:null,Ba=e=>new Set(e.filter(n=>n.annotationRole===St.EXTERNAL||n.readOnly||n.locked).flatMap(n=>n.nodeIds)),sf=e=>e===Rr.ABSOLUTE?Rr.RELATIVE:Rr.ABSOLUTE;var pe=[];for(var wr=0;wr<256;++wr)pe.push((wr+256).toString(16).slice(1));function lf(e,n=0){return(pe[e[n+0]]+pe[e[n+1]]+pe[e[n+2]]+pe[e[n+3]]+"-"+pe[e[n+4]]+pe[e[n+5]]+"-"+pe[e[n+6]]+pe[e[n+7]]+"-"+pe[e[n+8]]+pe[e[n+9]]+"-"+pe[e[n+10]]+pe[e[n+11]]+pe[e[n+12]]+pe[e[n+13]]+pe[e[n+14]]+pe[e[n+15]]).toLowerCase()}var vo,uf=new Uint8Array(16);function df(){if(!vo&&(vo=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!vo))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return vo(uf)}var cf=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto);const Ki={randomUUID:cf};function mf(e,n,t){if(Ki.randomUUID&&!e)return Ki.randomUUID();e=e||{};var o=e.random||(e.rng||df)();return o[6]=o[6]&15|64,o[8]=o[8]&63|128,lf(o)}const Tu=()=>mf(),bu=e=>new Map(e.flatMap(n=>n.nodeIds.map(t=>[t,n.id]))),Lo=(e,n)=>bu(e).get(n)??null,yf=(e,n)=>{var t;return((t=e.find(o=>o.nodeIds.includes(n)))==null?void 0:t.nodeIds)??[n]},wn=({nodes:e,nodeLinks:n})=>{const t=new Set(e.map(i=>i.id)),o=n.map(i=>({...i,nodeIds:Array.from(new Set(i.nodeIds.filter(s=>t.has(s))))})).filter(i=>i.nodeIds.length>0),r=new Set(o.flatMap(i=>i.nodeIds)),a=e.filter(i=>!r.has(i.id)).map(i=>({id:i.id,nodeIds:[i.id]}));return[...o,...a]},pf=.1,gf=(e,n)=>{const t=zt(n.latitude-e.latitude),o=zt(n.longitude-e.longitude),r=zt((e.latitude+n.latitude)/2),a=o*Math.cos(r)*li.semiMajorAxis,i=t*li.semiMajorAxis,s=n.altitude-e.altitude;return Math.hypot(a,i,s)},ku=e=>typeof e=="string"&&e.trim().length>0?e.trim():null,Nu=({nodes:e,nodeLinks:n,nodeId:t,movedNodeIds:o,linkToNodeId:r})=>{const a=e.find(p=>p.id===t)??null,i=Array.from(new Set(o.filter(Boolean)));if(!a||i.length===0)return[...n];const s=new Set(i),u=n.find(p=>p.nodeIds.includes(t))??null,l=ku(r),d=l&&!s.has(l)?n.find(p=>p.nodeIds.includes(l))??null:null;return d!==null&&!d.nodeIds.some(p=>s.has(p))?wn({nodes:e,nodeLinks:n.map(p=>p.id===d.id?{...p,nodeIds:Array.from(new Set([...p.nodeIds,...i]))}:{...p,nodeIds:p.nodeIds.filter(f=>!s.has(f))})}):!u||i.length===u.nodeIds.length?[...n]:e.filter(p=>u.nodeIds.includes(p.id)&&!s.has(p.id)).some(p=>gf(p.coordinate,a.coordinate)>pf)?wn({nodes:e,nodeLinks:n.map(p=>p.id===u.id?{...p,nodeIds:p.nodeIds.filter(f=>!s.has(f))}:{...p})}):[...n]},ft=e=>e.reduce((n,t)=>{const o=t.match(/(\d+)$/),r=o?Number(o[1]):Number.NaN;return Number.isFinite(r)?Math.max(n,r):n},0),Iu=({nodeIds:e,closed:n,previousEdgeNumericSuffix:t})=>{const o=e.slice(0,-1).map((r,a)=>({startNodeId:r,endNodeId:e[a+1]}));return n&&e.length>=3&&o.push({startNodeId:e[e.length-1],endNodeId:e[0]}),o.map((r,a)=>({id:`edge-${t+a+1}`,...r}))},ff=({toolType:e,coordinates:n,options:t,linkedNodeGroupIds:o,measurementSequenceRef:r,nodeSequenceRef:a,edgeSequenceRef:i})=>{r.current+=1;const s=`${e}-${r.current}`,u=n.map(m=>(a.current+=1,{id:`node-${a.current}`,coordinate:m})),l=u.map((m,y)=>({id:ku(o==null?void 0:o[y])??m.id,nodeIds:[m.id]})),d=Iu({nodeIds:u.map(m=>m.id),closed:!!(t!=null&&t.closed),previousEdgeNumericSuffix:i.current});return i.current+=d.length,{annotationEntry:{id:s,uuid:Tu(),toolType:e,...t,nodeIds:u.map(m=>m.id),edgeIds:d.map(m=>m.id)},nodes:u,linkedNodeGroups:l,edges:d}},zo={INTERACTION:"interaction",MEASUREMENT:"measurement"},ie={SESSION:"session",POINT_QUERY:"pointQuery",ADD_ANNOTATION:"addAnnotation",AUTHORING_VISUALS:"authoringVisuals",KEYBOARD:"keyboard",VISUAL_MODELS:"visualModels",INFO_BOX:"infoBox"},Qi=new Set,Af=[],vf=(e,n)=>{const t=`${e}:${n}`;Qi.has(t)||(Qi.add(t),console.warn(`[annotations-runtime] Plugin "${e}" is missing capability implementation "${n}". Using a no-op fallback at registry build time.`))},Tf=(e,n)=>{const t=e.descriptor.order-n.descriptor.order;return t!==0?t:e.id.localeCompare(n.id)},bf=e=>{const n=new Map;return e.forEach(t=>{if(n.get(t.id))throw new Error(`Duplicate annotation tool plugin registration for "${t.id}".`);n.set(t.id,t)}),n},kf=e=>e.reduce((n,t)=>{if(!t.annotationType)return n;const o=n.get(t.annotationType)??[];return n.set(t.annotationType,[...o,t]),n},new Map),Nf=e=>{const n=new Map;e.forEach(t=>{var a;const o=((a=t.descriptor.shortcutKey)==null?void 0:a.trim().toLowerCase())??null;if(!o)return;const r=n.get(o);if(r&&r!==t.id)throw new Error(`Duplicate annotation tool shortcut key "${t.descriptor.shortcutKey}" for "${r}" and "${t.id}".`);n.set(o,t.id)})},If=(e,n)=>!!(n===ie.SESSION&&e.session||n===ie.POINT_QUERY&&e.pointQuery||n===ie.ADD_ANNOTATION&&e.addAnnotation||n===ie.AUTHORING_VISUALS&&e.authoringVisuals||n===ie.KEYBOARD&&e.keyboard||n===ie.VISUAL_MODELS&&e.visualModels||n===ie.INFO_BOX&&e.infoBox||n!==ie.SESSION&&n!==ie.POINT_QUERY&&n!==ie.ADD_ANNOTATION&&n!==ie.AUTHORING_VISUALS&&n!==ie.KEYBOARD&&n!==ie.VISUAL_MODELS&&n!==ie.INFO_BOX),hf=e=>{if(e.descriptor.id!==e.id)throw new Error(`Plugin "${e.id}" descriptor id "${e.descriptor.id}" must match plugin id.`);if(e.kind==="measurement"&&!e.visualModels)throw new Error(`Measurement plugin "${e.id}" must implement visualModels.build(...).`);if(e.kind==="measurement"&&!e.annotationType)throw new Error(`Measurement plugin "${e.id}" must declare annotationType.`);let n={...e};return(e.capabilities??[]).forEach(t=>{if(!If(n,t)){if(vf(e.id,t),t===ie.SESSION){n={...n,session:{createSession:()=>({toolType:e.id,requestStart:()=>{},requestFinish:()=>!1,discardDraft:()=>{}})}};return}if(t===ie.POINT_QUERY){n={...n,pointQuery:{onPointCreated:()=>{}}};return}if(t===ie.ADD_ANNOTATION){n={...n,addAnnotation:{resolveOptions:()=>{}}};return}if(t===ie.AUTHORING_VISUALS){n={...n,authoringVisuals:{createController:()=>null}};return}if(t===ie.KEYBOARD){n={...n,keyboard:{onKeyDown:()=>!1}};return}if(t===ie.VISUAL_MODELS){n={...n,visualModels:{build:()=>null}};return}t===ie.INFO_BOX&&(n={...n,infoBox:{getSlots:()=>null}})}}),n},Sf=e=>{const t=[...e.map(hf)].sort(Tf);Nf(t);const o=bf(t),r=kf(t);return{plugins:t,orderedDescriptors:t.map(a=>a.descriptor),byId:o,getPlugin:a=>o.get(a),assertPlugin:a=>{const i=o.get(a);if(!i)throw new Error(`Missing annotation tool plugin for tool id "${a}".`);return i},getPluginsByAnnotationType:a=>r.get(a)??Af}},hu=e=>{var t;const n=e.find(o=>o.id===xn&&o.kind===zo.INTERACTION);return n?n.id:((t=e.find(o=>o.kind===zo.INTERACTION))==null?void 0:t.id)??null},Cf=e=>{var n;return((n=e.getPlugin(xn))==null?void 0:n.id)??hu(e.plugins)},Su=e=>!!e.readOnly,Cu=e=>e.annotationRole??(e.externalCollection?St.EXTERNAL:St.AUTHORING),ar=e=>e.annotationEntries.filter(n=>Cu(n)===St.AUTHORING),Ef=(e,n={})=>{if(n.roles===void 0)return e.annotationEntries;const t=new Set(n.roles);return e.annotationEntries.filter(o=>t.has(Cu(o)))},Of=e=>ar({annotationEntries:e}).reduce((n,t)=>(n.set(t.toolType,(n.get(t.toolType)??0)+1),n),new Map),Lf=({activeToolType:e,registry:n,defaultToolId:t=xn})=>{if(e){const o=n.getPlugin(e);if(o)return o}return n.getPlugin(t)??null},{AREA_GROUND:Rf,AREA_PLANAR:wf,AREA_VERTICAL:xf,DISTANCE:qf,LABEL:_f,POINT:Pf,POLYLINE:Mf}=P,Df=new Set([Pf,qf,Mf,Rf,wf,xf,_f]),ir=e=>Df.has(e),Bf=e=>{if(e.shortLabelSource===no.CUSTOM)return null;const n=e.shortLabelCounter;return typeof n=="number"&&Number.isFinite(n)&&n>0?Math.floor(n):null},Eu=e=>{let n=1;for(;e!=null&&e.has(n);)n+=1;return n},Ou=e=>{var t;const n={};for(const o of e){if(!ir(o.toolType))continue;const r=Bf(o);r!==null&&(n[t=o.toolType]??(n[t]=new Set)).add(r)}return n},sr=e=>{const n=Ou(e),t={};for(const[o,r]of Object.entries(n))t[o]=Eu(r);return t},Ff=({annotationEntries:e,toolType:n})=>ir(n)?sr(e)[n]??1:1,Lu=e=>{const n=Ou(e);return e.map(t=>{var a;if(!ir(t.toolType)||(a=t.shortLabel)!=null&&a.trim())return t;const o=n[t.toolType]??new Set;n[t.toolType]=o;const r=Eu(o);return o.add(r),{...t,shortLabel:Gl(t.toolType,r),shortLabelSource:no.DEFAULT,shortLabelCounter:r}})},Gf=e=>e.uuid?e:{...e,uuid:Tu()},{AREA_GROUND:jf,AREA_PLANAR:Hf,AREA_VERTICAL:zf,LABEL:Uf,POINT:Vf}=P,$f=1,Wf=new Set([jf,Hf,zf]),Yf=new Set([Vf,Uf]),pa=e=>{if(e!==void 0)return e===null||typeof e=="string"||typeof e=="number"||typeof e=="boolean"?e:Array.isArray(e)?e.map(n=>pa(n)).filter(n=>n!==void 0):typeof e=="object"?Object.fromEntries(Object.entries(e).flatMap(([n,t])=>{const o=pa(t);return o===void 0?[]:[[n,o]]})):String(e)},Kf=e=>pa(e)??{},xr=({longitude:e,latitude:n,altitude:t})=>[e,n,t??0],Qf=({toolType:e,coordinates:n})=>{if(n.length===0)return null;if(Wf.has(e)&&n.length>=3){const t=n.map(xr);return{type:"Polygon",coordinates:[[...t,t[0]]]}}return!Yf.has(e)&&n.length>=2?{type:"LineString",coordinates:n.map(xr)}:{type:"Point",coordinates:xr(n[0])}},Xi=e=>{const n=(e??"").trim().toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"");return n.length>0?n:"annotation"},Xf=e=>{var n,t;return{kind:e.toolType,name:((n=e.displayName)==null?void 0:n.trim())||((t=e.shortLabel)==null?void 0:t.trim())||e.id}},Ru=({annotation:e,coordinates:n})=>{const t=Qf({toolType:e.toolType,coordinates:n});return t?{type:"FeatureCollection",features:[{type:"Feature",id:e.id,geometry:t,properties:{exportVersion:$f,annotationId:e.id,annotationKind:e.toolType,annotation:Kf(e),nodes:n.map((r,a)=>({order:a,coordinate:r}))}}]}:null},Zf=({annotations:e})=>{const n=e.flatMap(({annotation:t,coordinates:o})=>{const r=Ru({annotation:t,coordinates:o});return(r==null?void 0:r.features)??[]});return n.length===0?null:{type:"FeatureCollection",features:n}},Zi=(e,n)=>{if(!n||typeof window>"u"||typeof document>"u")return;const t=new Blob([JSON.stringify(n,null,2)],{type:"application/geo+json;charset=utf-8"}),o=window.URL.createObjectURL(t),r=document.createElement("a");r.href=o,r.download=e,document.body.appendChild(r),r.click(),document.body.removeChild(r),window.setTimeout(()=>{window.URL.revokeObjectURL(o)},0)},oo=e=>{const{nodeIds:n,edgeIds:t,...o}=e;return{...o,nodeIds:[...n],edgeIds:[...t]}},Fa=e=>{const n=oo(e);return delete n.updatedAt,n},et=e=>({...e,coordinate:{...e.coordinate}}),nt=e=>({...e}),tt=e=>({...e,nodeIds:[...e.nodeIds]}),Ct="annotations-runtime-persistence",lr=1,wu=new Set([1,2]),xu="carma-3d-annotations-geojson",Jf=1,eA="geoportal-cesium-annotations",nA=new Set([1,2]),qu="carma-3d-annotation-runtime-feature",_u=1,Hn=e=>typeof e=="object"&&e!==null,tA=e=>{if(!Hn(e)||!Hn(e.properties))return null;const{carmaConf:n}=e.properties;if(!Hn(n)||!Hn(n.annotationRuntime))return null;const t=n.annotationRuntime;return t.formatId!==qu||t.formatVersion!==_u||!Hn(t.annotation)||!Array.isArray(t.nodes)||!Array.isArray(t.linkedNodeGroups)||!Array.isArray(t.edges)?null:{annotation:Fa(t.annotation),nodes:t.nodes.map(o=>et(o)),linkedNodeGroups:t.linkedNodeGroups.map(o=>tt(o)),edges:t.edges.map(o=>nt(o))}},oA=e=>{if(!Hn(e)||e.type!=="FeatureCollection")return null;const n=e.features;if(!Array.isArray(n))return null;const t=[],o=new Map,r=new Map,a=new Map;for(const s of n){const u=tA(s);if(u){t.push(u.annotation);for(const l of u.nodes)o.set(l.id,l);for(const l of u.linkedNodeGroups)r.set(l.id,l);for(const l of u.edges)a.set(l.id,l)}}if(t.length===0)return null;const i=Lu(t);return{formatId:Ct,version:lr,tables:{annotationEntries:i.map(oo),nodes:[...o.values()].map(et),linkedNodeGroups:wn({nodes:[...o.values()],nodeLinks:[...r.values()].map(tt)}),edges:[...a.values()].map(nt)},settings:{lastActiveToolType:null,elevationReferenceAnnotationId:null,nextShortLabelCounterByToolType:sr(i)}}},Pu=e=>{const n=new Map(e.tables.nodes.map(s=>[s.id,s])),t=new Map(e.tables.annotationEntries.map(s=>[s.id,s])),o=new Map(e.tables.edges.map(s=>[s.id,s])),r=new Map;for(const s of e.tables.linkedNodeGroups)for(const u of s.nodeIds){const l=r.get(u)??[];l.push(s),r.set(u,l)}const a=Zf({annotations:e.tables.annotationEntries.map(s=>({annotation:s,coordinates:s.nodeIds.flatMap(u=>{var d;const l=(d=n.get(u))==null?void 0:d.coordinate;return l?[l]:[]})}))});return{type:"FeatureCollection",features:((a==null?void 0:a.features)??[]).map(s=>{var f;const u=typeof s.id=="string"?s.id:typeof((f=s.properties)==null?void 0:f.annotationId)=="string"?s.properties.annotationId:null,l=u?t.get(u):null;if(!l)return s;const d=new Set(l.nodeIds),c=new Set,m=l.nodeIds.flatMap(A=>(r.get(A)??[]).flatMap(v=>c.has(v.id)?[]:(c.add(v.id),[tt(v)]))),y=s.properties??{},p=Hn(y.carmaConf)?y.carmaConf:{};return{...s,properties:{...y,carmaConf:{...p,annotationRuntime:{formatId:qu,formatVersion:_u,annotation:oo(l),nodes:l.nodeIds.flatMap(A=>{const v=n.get(A);return v?[et(v)]:[]}),linkedNodeGroups:m,edges:l.edgeIds.flatMap(A=>{const v=o.get(A);return!v||!d.has(v.startNodeId)||!d.has(v.endNodeId)?[]:[nt(v)]})}}}}}),metadata:{carmaConf:{formatId:xu,formatVersion:Jf,source:eA,annotationsRuntimePersistence:{formatId:Ct,version:lr,tables:{annotationEntries:e.tables.annotationEntries.map(oo),nodes:e.tables.nodes.map(et),linkedNodeGroups:e.tables.linkedNodeGroups.map(tt),edges:e.tables.edges.map(nt)},settings:{...e.settings,nextShortLabelCounterByToolType:{...e.settings.nextShortLabelCounterByToolType}}}}}}},rA=e=>({byUuid:new Map(e.filter(n=>n.uuid).map(n=>[n.uuid,n])),byId:new Map(e.map(n=>[n.id,n]))}),aA=(e,n,t=e.id)=>{const o=n.byId.get(t);return e.uuid&&n.byUuid.get(e.uuid)||(o&&(!e.uuid||!o.uuid)?o:void 0)},Ga=e=>{var t,o,r;const n=e;return(n==null?void 0:n.formatId)!==Ct||typeof n.version!="number"||!wu.has(n.version)||!n.tables||!Array.isArray(n.tables.annotationEntries)||!Array.isArray(n.tables.nodes)||!Array.isArray(n.tables.linkedNodeGroups)||!Array.isArray(n.tables.edges)?null:{formatId:Ct,version:lr,tables:{annotationEntries:n.tables.annotationEntries.map(a=>Fa(a)),nodes:n.tables.nodes.map(a=>et(a)),linkedNodeGroups:n.tables.linkedNodeGroups.map(a=>tt(a)),edges:n.tables.edges.map(a=>nt(a))},settings:{lastActiveToolType:typeof((t=n.settings)==null?void 0:t.lastActiveToolType)=="string"?n.settings.lastActiveToolType:null,elevationReferenceAnnotationId:typeof((o=n.settings)==null?void 0:o.elevationReferenceAnnotationId)=="string"?n.settings.elevationReferenceAnnotationId:null,nextShortLabelCounterByToolType:(r=n.settings)!=null&&r.nextShortLabelCounterByToolType&&typeof n.settings.nextShortLabelCounterByToolType=="object"?{...n.settings.nextShortLabelCounterByToolType}:{}}}},Mu=e=>{var r;const n=e;if((n==null?void 0:n.type)!=="FeatureCollection")return null;const t=(r=n.metadata)==null?void 0:r.carmaConf;return((t==null?void 0:t.formatId)===xu&&typeof t.formatVersion=="number"&&nA.has(t.formatVersion)?Ga(t.annotationsRuntimePersistence):null)??oA(e)},ja=e=>{const n=ar(e).map(oo),t=new Set(n.flatMap(i=>i.nodeIds)),o=new Set(n.flatMap(i=>i.edgeIds)),r=e.nodes.filter(i=>t.has(i.id)).map(et),a=wn({nodes:r,nodeLinks:e.linkedNodeGroups.map(tt).filter(i=>i.nodeIds.some(s=>t.has(s)))});return{formatId:Ct,version:lr,tables:{annotationEntries:n,nodes:r,linkedNodeGroups:a,edges:e.edges.filter(i=>o.has(i.id)).map(nt)},settings:{lastActiveToolType:e.annotationToolType,elevationReferenceAnnotationId:e.settingsState.elevationReferenceAnnotationId,nextShortLabelCounterByToolType:sr(n)}}},iA=({initialToolType:e,initialPointTemporaryMode:n,initialPersistenceState:t,isToolTypeAvailable:o})=>{const r=(t==null?void 0:t.formatId)===Ct&&wu.has(t.version)?t:null,a=r==null?void 0:r.tables,i=Lu((a==null?void 0:a.annotationEntries.map(c=>Gf(Fa(c))))??[]),s=(r==null?void 0:r.tables.nodes.map(et))??[],u=wn({nodes:s,nodeLinks:(r==null?void 0:r.tables.linkedNodeGroups.map(tt))??[]}),l=sr(i);return{annotationToolType:(typeof(r==null?void 0:r.settings.lastActiveToolType)=="string"&&((o==null?void 0:o(r.settings.lastActiveToolType))??!0)?r.settings.lastActiveToolType:null)??e,selectionState:{selectedAnnotationIds:[],previousSelectedAnnotationId:null},annotationEntries:i,nodes:s,linkedNodeGroups:u,edges:(a==null?void 0:a.edges.map(nt))??[],infoBoxState:{activeAnnotationId:null},settingsState:{pointTemporaryMode:n,elevationReferenceAnnotationId:(r==null?void 0:r.settings.elevationReferenceAnnotationId)??null,nextShortLabelCounterByToolType:l}}},sA=e=>{try{const n=localStorage.getItem(e);if(!n)return null;const t=JSON.parse(n);return Mu(t)??Ga(t)}catch(n){console.warn("Failed to load annotations runtime state from localStorage:",n)}return null},lA=(e,n)=>{try{localStorage.setItem(e,JSON.stringify(Pu(n)))}catch(t){console.warn("Failed to save annotations runtime state to localStorage:",t)}},ur=e=>e.selectionState.selectedAnnotationIds[e.selectionState.selectedAnnotationIds.length-1]??null,uA=e=>{const n=new Set(e.selectionState.selectedAnnotationIds);return e.annotationEntries.filter(t=>n.has(t.id)&&!t.locked&&!t.readOnly).map(t=>t.id)},Du=e=>e.annotationEntries.map(n=>n.id),dA=(e,n,t)=>{var i;if(e.length===0)return null;const o=n?e.findIndex(s=>s.id===n):-1,r=t>0?0:e.length-1,a=o<0?r:(o+t+e.length)%e.length;return((i=e[a])==null?void 0:i.id)??null},Bu=({nodeId:e,nodes:n,linkedNodeGroups:t,annotationEntries:o,selectedAnnotationIds:r=[],preferredMovedNodeIds:a})=>{const i=n.find(p=>p.id===e)??null;if(!i)return{targetNode:null,movedNodeIds:[]};const s=yf(t,e),u=Array.from(new Set((a??[]).filter(p=>s.includes(p)))),l=new Set(r.filter(Boolean)),d=new Set(o.filter(p=>l.has(p.id)).flatMap(p=>p.nodeIds)),c=s.filter(p=>d.has(p)),m=u.length>0?u:c.length>0?c:[...s],y=Ba(o);return{targetNode:i,movedNodeIds:m.filter(p=>!y.has(p))}},Fu=e=>{const n=new Set(e.annotationEntries.flatMap(t=>t.nodeIds));e.nodes=e.nodes.filter(t=>n.has(t.id)),e.linkedNodeGroups=wn({nodes:e.nodes,nodeLinks:e.linkedNodeGroups})},cA={updateNodeCoordinateById:(e,n)=>{const{nodeId:t,coordinate:o,selectedAnnotationIds:r=[],movedNodeIds:a,linkToNodeId:i}=n.payload,{targetNode:s,movedNodeIds:u}=Bu({nodeId:t,nodes:e.nodes,linkedNodeGroups:e.linkedNodeGroups,annotationEntries:e.annotationEntries,selectedAnnotationIds:r,preferredMovedNodeIds:a});if(!s||u.length===0)return;const l=new Set(u),d=Ba(e.annotationEntries),c=i&&!d.has(i)?i:null;e.nodes.forEach(m=>{l.has(m.id)&&(m.coordinate=o)}),e.linkedNodeGroups=Nu({nodes:e.nodes,nodeLinks:e.linkedNodeGroups,nodeId:s.id,movedNodeIds:u,linkToNodeId:c})},insertNodeIntoMeasurementEdge:(e,n)=>{const{annotationId:t,startNodeId:o,endNodeId:r,coordinate:a}=n.payload,i=e.annotationEntries.find(b=>b.id===t);if(!i)return;const s=i.nodeIds.findIndex((b,T)=>b===o&&i.nodeIds[T+1]===r),u=i.closed&&i.nodeIds.length>=3&&i.nodeIds[i.nodeIds.length-1]===o&&i.nodeIds[0]===r,l=s>=0?s+1:u?i.nodeIds.length:-1;if(l<0)return;const d=new Map(e.edges.map(b=>[b.id,b])),c=i.edgeIds.findIndex(b=>{const T=d.get(b);return(T==null?void 0:T.startNodeId)===o&&T.endNodeId===r}),m=c>=0?i.edgeIds[c]:null,y=m?d.get(m):void 0;if(!y||c<0)return;const p=`node-${ft(e.nodes.map(b=>b.id))+1}`,f=`edge-${ft(e.edges.map(b=>b.id))+1}`;e.nodes.push({id:p,coordinate:a}),e.linkedNodeGroups=wn({nodes:e.nodes,nodeLinks:[...e.linkedNodeGroups,{id:p,nodeIds:[p]}]}),y.endNodeId=p;const A={id:f,startNodeId:p,endNodeId:r},v=e.edges.findIndex(b=>b.id===m);v>=0?e.edges.splice(v+1,0,A):e.edges.push(A),i.nodeIds=[...i.nodeIds.slice(0,l),p,...i.nodeIds.slice(l)],i.edgeIds=[...i.edgeIds.slice(0,c+1),f,...i.edgeIds.slice(c+1)]},removeNodeFromAnnotation:(e,n)=>{const{annotationId:t,nodeId:o}=n.payload,r=e.annotationEntries.find(u=>u.id===t);if(!(r!=null&&r.nodeIds.includes(o)))return;const a=r.nodeIds.filter(u=>u!==o),i=new Set(r.edgeIds),s=Iu({nodeIds:a,closed:!!r.closed,previousEdgeNumericSuffix:ft(e.edges.map(u=>u.id))});r.nodeIds=a,r.edgeIds=s.map(u=>u.id),e.edges=[...e.edges.filter(u=>!i.has(u.id)),...s],Fu(e)}},Ha=(e,n,t=n[n.length-1]??null)=>{e.selectionState.previousSelectedAnnotationId=ur(e),e.selectionState.selectedAnnotationIds=n,e.infoBoxState.activeAnnotationId=t},za=(e,n)=>Ha(e,n?[n]:[],n),mA={setSelectedAnnotationId:(e,n)=>{za(e,n.payload)},setSelectedAnnotationIds:(e,n)=>{Ha(e,Array.from(new Set(n.payload.filter(Boolean))))}},Ji=(e,n,t)=>{if(!e.annotationEntries.some(a=>n.has(a.id)))return;e.annotationEntries=e.annotationEntries.filter(a=>!n.has(a.id));const o=new Set(e.annotationEntries.flatMap(a=>a.edgeIds));Fu(e),e.edges=e.edges.filter(a=>o.has(a.id));const{elevationReferenceAnnotationId:r}=e.settingsState;if(r&&n.has(r)&&(e.settingsState.elevationReferenceAnnotationId=null),t!==void 0){za(e,t);return}Ha(e,e.selectionState.selectedAnnotationIds.filter(a=>!n.has(a)))},yA={appendAnnotationEntities:(e,n)=>{const{annotationEntry:t,nodes:o,linkedNodeGroups:r,edges:a,selectAnnotationId:i}=n.payload;e.nodes.push(...o),r.forEach(s=>{const u=e.linkedNodeGroups.find(l=>l.id===s.id);if(!u){e.linkedNodeGroups.push({id:s.id,nodeIds:[...s.nodeIds]});return}u.nodeIds=Array.from(new Set([...u.nodeIds,...s.nodeIds]))}),e.edges.push(...a),e.annotationEntries.push({...t,nodeIds:[...t.nodeIds],edgeIds:[...t.edgeIds]}),e.linkedNodeGroups=wn({nodes:e.nodes,nodeLinks:e.linkedNodeGroups}),i!==void 0&&za(e,i)},removeAnnotationById:(e,n)=>{Ji(e,new Set([n.payload.annotationId]),n.payload.nextSelectedAnnotationId)},removeAnnotationsByIds:(e,n)=>{Ji(e,new Set(n.payload.annotationIds),n.payload.nextSelectedAnnotationId)},updateAnnotationEntryById:(e,n)=>{const{annotationId:t,displayName:o,shortLabel:r,shortLabelSource:a,shortLabelCounter:i,hidden:s,locked:u,annotationRole:l,readOnly:d,labelAppearance:c,elevationDisplayMode:m,distanceAnchorCoordinateSelection:y,distanceTriangleAnchorCoordinateRole:p}=n.payload,f=e.annotationEntries.find(A=>A.id===t);f&&(o!==void 0&&(f.displayName=o),r!==void 0&&(f.shortLabel=r),a!==void 0&&(f.shortLabelSource=a),i!==void 0&&(f.shortLabelCounter=i),s!==void 0&&(f.hidden=s),u!==void 0&&(f.locked=u),l!==void 0&&(f.annotationRole=l),d!==void 0&&(f.readOnly=d),c!==void 0&&(f.labelAppearance={...f.labelAppearance??{},...c}),m!==void 0&&(f.elevationDisplayMode=m),y!==void 0&&(f.distanceAnchorCoordinateSelection=y),p!==void 0&&(f.distanceTriangleAnchorCoordinateRole=p))}},Gu=(e={})=>{const{initialToolType:n=xn,initialPointTemporaryMode:t=!1}=e;return{annotationToolType:n,selectionState:{selectedAnnotationIds:[],previousSelectedAnnotationId:null},annotationEntries:[],nodes:[],linkedNodeGroups:[],edges:[],infoBoxState:{activeAnnotationId:null},settingsState:{pointTemporaryMode:t,elevationReferenceAnnotationId:null,nextShortLabelCounterByToolType:{}}}},ju=Dy({name:"annotationsRuntime",initialState:Gu(),reducers:{setAnnotationToolType:(e,n)=>{e.annotationToolType=n.payload},setPointTemporaryMode:(e,n)=>{e.settingsState.pointTemporaryMode=n.payload},setElevationReferenceAnnotationId:(e,n)=>{e.settingsState.elevationReferenceAnnotationId=n.payload},...mA,...yA,...cA}}),{appendAnnotationEntities:Hu,removeAnnotationById:pA,removeAnnotationsByIds:Ua,removeNodeFromAnnotation:gA,setElevationReferenceAnnotationId:fA,setPointTemporaryMode:AA,insertNodeIntoMeasurementEdge:vA,updateNodeCoordinateById:TA,updateAnnotationEntryById:zn,setAnnotationToolType:bA,setSelectedAnnotationId:At,setSelectedAnnotationIds:Et}=ju.actions,kA=e=>Ry({reducer:ju.reducer,preloadedState:e}),Va=g.createContext(null),NA=af(Va),IA=Kg(Va),se=e=>IA(e),xh=()=>NA(),hA=({enabled:e=!0,storageKey:n})=>{const t=g.useMemo(()=>!e||typeof window>"u"?null:sA(n),[e,n]),o=g.useCallback(r=>{!e||typeof window>"u"||lA(n,r)},[e,n]);return{initialPersistenceState:t,onPersistenceStateChange:e?o:void 0}},SA={lengthMeters:{locale:qt.DE_DE,unitMode:im.METERS,maximumFractionDigitsMeters:2},areaSquareMeters:{locale:qt.DE_DE},degrees:{locale:qt.DE_DE},geographicCoordinate:{locale:qt.DE_DE,fractionDigits:6},decimalNumber:{locale:qt.DE_DE,fractionDigits:2,useGrouping:!1}},zu=Object.freeze({targetScreenRadiusCssPx:64,minimumScreenRadiusCssPx:10,maximumViewportRadiusRatio:.5,sceneResizeFactor:10,resizeHysteresisRatio:.15,radiusLabelVisibleDurationMs:3e3,radiusLabelFadeDurationMs:250,resizeAnimationDurationMs:200}),Uu={scalingMode:Ea.SCREEN,worldRadiusMeters:3,targetScreenRadiusCssPx:48,resizeWorldRadiusToScreenTarget:!1,resizeStepFactor:4,quantizeWorldRadius:!1},$a={KEYBOARD:"keyboard",PROGRAMMATIC:"programmatic",UI:"ui"},CA=({annotations:e})=>{if(e.length===0)return!1;if(typeof window>"u")return!0;const n=e.length===1?"Diese Messung wirklich löschen?":`${e.length} Messungen wirklich löschen?`;return window.confirm(n)},EA=({activePlugin:e,activeToolType:n,activeToolSession:t,cancelToolId:o,focusAdjacentAnnotationEntry:r,removeSelectedAnnotations:a,removeEditedNode:i,clearInteractionState:s,requestFinishMeasurement:u,requestActivateTool:l,requestModeChange:d,sessionContext:c,setActiveToolTypeInStore:m})=>{g.useEffect(()=>{const y=p=>{var v;if(hp(p)){const b=c.getState(),T=Du(b);T.length>0&&(c.dispatch(Et(T)),p.preventDefault(),p.stopPropagation());return}const A=Ip(p,{allowRepeat:!0})?Sp(p):null;if(A===Le.CANCEL_ACTIVE_TOOL&&o!==null&&n!==o){const b=c.getState();t==null||t.discardDraft(),b.annotationEntries.length>0&&m(o),s(),p.preventDefault();return}if(A===Le.FOCUS_PREVIOUS_NAVIGATION_ITEM){r(-1),p.preventDefault();return}if(A===Le.FOCUS_NEXT_NAVIGATION_ITEM){r(1),p.preventDefault();return}if((v=e==null?void 0:e.keyboard)!=null&&v.onKeyDown({event:p,activeToolType:n,activeToolSession:t,requestFinishMeasurement:u,requestActivateTool:l,requestModeChange:d,sessionContext:c})){s();return}if((A===Le.DELETE_SELECTION||A===Le.UNDO_LAST_POINT)&&c.drafts.get(n).coordinates.length>0){s(),p.preventDefault(),p.stopPropagation();return}if(A===Le.DELETE_SELECTION||A===Le.UNDO_LAST_POINT){if(i()){s(),p.preventDefault(),p.stopPropagation();return}if(c.getState().selectionState.selectedAnnotationIds.length>0){a({skipConfirmation:p.shiftKey,source:$a.KEYBOARD}),p.preventDefault(),p.stopPropagation();return}}A===Le.FINISH_MEASUREMENT&&u()&&p.preventDefault()};return window.addEventListener("keydown",y),()=>{window.removeEventListener("keydown",y)}},[e,t,n,o,s,r,i,a,u,d,l,c,m])},To=(e,n)=>e[n]??null,OA=(e,n,t)=>{const o=g.useCallback(()=>{const i=To(n,e);return i?i.requestFinish():!1},[e,n]),r=g.useCallback(i=>{if(i===e)return;const s=To(n,e);s&&s.requestFinish(),t();const u=To(n,i);u==null||u.requestStart()},[e,t,n]),a=g.useCallback((i=e)=>{if(i!==e){r(i);return}const s=To(n,e);s==null||s.discardDraft(),t(),s==null||s.requestStart()},[e,t,r,n]);return{requestModeChange:r,requestActivateTool:a,requestFinishMeasurement:o}},LA=14,RA=18,es=(e,n)=>n?e.find(t=>t.id===n)??null:null,Vu=({engine:e,node:n,screenPosition:t})=>{const o=e.worldToScreen(z(n.coordinate));if(!o)return null;const r=o.x-t.x,a=o.y-t.y;return r*r+a*a},wA=({engine:e,nodes:n,screenPosition:t})=>{if(!t||!j(e)||n.length===0)return null;let r=LA**2,a=null;for(const i of n){const s=Vu({engine:e,node:i,screenPosition:t});s===null||s>r||(r=s,a=i)}return a},$u=({engine:e,nodes:n,linkedNodeGroups:t,coordinate:o,screenPosition:r,forcedSnappedNodeId:a=null,lockedNodeId:i=null,excludedNodeIds:s=[]})=>{if(!j(e)||n.length===0)return{coordinate:o,linkedNodeGroupId:null,snappedNodeId:null};const u=new Set(s.filter(Boolean)),l=u.size===0?n:n.filter(y=>!u.has(y.id));if(l.length===0)return{coordinate:o,linkedNodeGroupId:null,snappedNodeId:null};const d=es(l,a);if(d)return{coordinate:d.coordinate,linkedNodeGroupId:Lo(t,d.id),snappedNodeId:d.id};if(!r)return{coordinate:o,linkedNodeGroupId:null,snappedNodeId:null};const c=es(l,i);if(c){const y=Vu({engine:e,node:c,screenPosition:r});if(y!==null&&y<=RA**2)return{coordinate:c.coordinate,linkedNodeGroupId:Lo(t,c.id),snappedNodeId:c.id}}const m=wA({engine:e,nodes:l,screenPosition:r});return{coordinate:(m==null?void 0:m.coordinate)??o,linkedNodeGroupId:m?Lo(t,m.id):null,snappedNodeId:(m==null?void 0:m.id)??null}},xA=(e,n)=>n?e.find(t=>t.id===n)??null:null,qA=({engine:e,nodes:n,linkedNodeGroups:t,activeToolType:o,toolSessions:r,getToolPlugin:a,sessionContext:i})=>{const s=r[o]??null,u=a(o),l=g.useRef(null);g.useEffect(()=>{xA(n,l.current)||(l.current=null)},[n]);const d=g.useCallback((y,p,f=null)=>{const A=$u({engine:e,nodes:n,linkedNodeGroups:t,coordinate:y,screenPosition:p,forcedSnappedNodeId:f,lockedNodeId:l.current});return l.current=A.snappedNodeId,{coordinate:A.coordinate,linkedNodeGroupId:A.linkedNodeGroupId}},[t,n,e]),c=g.useCallback((y,p)=>d(y,p).coordinate,[d]);return{handlePointQueryPointCreated:g.useCallback((y,p,f)=>{var b;const A=d(y,p,(f==null?void 0:f.forcedSnappedNodeId)??null),v=s==null?void 0:s.onNodeCreated;if(v){v(A.coordinate,A.linkedNodeGroupId,{inputModifier:f==null?void 0:f.inputModifier});return}(b=u==null?void 0:u.pointQuery)==null||b.onPointCreated({coordinate:A.coordinate,linkedNodeGroupId:A.linkedNodeGroupId,inputModifier:f==null?void 0:f.inputModifier,activeToolType:o,activeToolSession:s,toolSessions:r,sessionContext:i})},[u,s,o,d,i,r]),resolvePointQueryCoordinate:c,activeToolSession:s}},_A=(e,n)=>e.plugins.reduce((t,o)=>{var a;const r=(a=o.session)==null?void 0:a.createSession(n);return r?{...t,[o.id]:r}:t},{}),PA=e=>{},MA=(e,{enabled:n,onCoordinate:t,onLineFinish:o,onHoverCoordinateChange:r,onHoverSampleChange:a,onScreenPositionChange:i,singleClickDelayMs:s=220,inputModifiers:u})=>{((e==null?void 0:e.hooks.usePointQuery)??PA)({enabled:n,hideCursorWhileEnabled:!0,clickStrategy:o?Mi.DELAYED_LINE_FINISH:Mi.IMMEDIATE,config:{clickDelayMs:s},inputModifiers:u,onPointCreate:d=>{t==null||t(Qn(d.pickedPositionECEF),{x:d.screenPosition.x,y:d.screenPosition.y},{inputModifier:d.inputModifier})},onLineFinish:o,onPointerMove:(d,c,m,y)=>{const p=d?Qn(d):null,f={x:c.x,y:c.y};r==null||r(p,f),a==null||a({coordinate:p,screenPosition:f,pointECEF:d??null,surfaceNormalECEF:m??null,...y!=null&&y.inputModifier?{inputModifier:y.inputModifier}:{}})},onScreenPositionChange:i})},Yn={pointQuery:{discSmoothingSampleCount:120,discSmoothingWindowMs:500,discSmoothingWeightDecayGamma:3},hoverClearDelayMs:34,infoBoxFlyTo:{minRadiusMeters:80,paddingFactor:1.15},additiveSelectionModifierKey:"Shift"},Wa=(e,n)=>e===n||e!=null&&n!==null&&n!==void 0&&e.latitude===n.latitude&&e.longitude===n.longitude&&e.altitude===n.altitude,Ya=(e,n)=>e.length===n.length&&e.every((t,o)=>Wa(t,n[o])),DA=({engine:e,hoveredNode:n,coordinate:t,screenPosition:o,pointECEF:r,surfaceNormalECEF:a,inputModifier:i,resolvePointQueryCoordinate:s})=>{const u=(n==null?void 0:n.coordinate)??s(t,o),l=n!==null||!Wa(u,t),d=l?z(u):r,c=l&&j(e)&&d?e.worldToScreen(d):null;return{isLockedToSnapPoint:l,pickResult:{coordinate:u,screenPosition:c?{x:c.x,y:c.y}:o,pointECEF:d??r,surfaceNormalECEF:l&&d?Xr(d):a,...i?{inputModifier:i}:{}}}},{POINT:bo}=P,BA=({pointTemporaryMode:e,annotationToolDraftStore:n,addAnnotation:t})=>{const o=g.useRef(e);g.useEffect(()=>{if(o.current&&!e){const r=n.get(bo);r.coordinates.length>0&&(r.coordinates.forEach((a,i)=>{t(bo,[a],void 0,[r.linkedNodeGroupIds[i]??null],bo)}),n.clear(bo))}o.current=e},[t,n,e])},FA=e=>{const n=g.useRef(e);return n.current=e,g.useCallback(t=>{const{engine:o,pointQueryEnabled:r,onPointCreated:a}=n.current;if(!r)return!1;const i=j(o)?o.worldToScreen(z(t)):null;return a(t,i??void 0),!0},[])},qh="point-move-u-handle",_h=220,Ph=30,GA=0,jA=1,HA=2,zA=3,UA="rgba(59, 130, 246, 0.98)",VA="rgba(239, 68, 68, 0.98)",$A="rgba(34, 197, 94, 0.98)",Wu="rgba(148, 163, 184, 0.98)",Mh=1,qr="rgba(255,255,255,0.92)",WA=.92,on=1.5,Dh=48,st=320,Bh=16,ns=40,Fh=48,Gh=.25,jh=500,Hh=16,zh=12,Uh=1.3,Vh=1.05,$h=.4,Wh=4,Yh="row-resize",YA="move",ts=8,Kh=vc,Qh=.25,Xh=1,KA=[{id:"vertical",color:UA,labelKey:"verticalAxis"},{id:"horizontal-east",color:VA,labelKey:"eastAxis"},{id:"horizontal-north",color:$A,labelKey:"northAxis"}],QA=["vertical"],Yu=e=>QA.includes(e),Ku=(e,n)=>KA.map(t=>({id:t.id,color:t.color,title:t.id==="vertical"&&n?n:e[t.labelKey]})),XA=(e,n)=>Ku(e,n).filter(t=>Yu(t.id)),Zh=()=>{if(typeof window>"u")return 1;const e=window.devicePixelRatio;return!Number.isFinite(e)||e<=fm?1:1/e},Jh=e=>{if(e)try{e.destroy()}catch{}},os=e=>{if(e)try{e()}catch{}},eS=(e,n)=>{if(typeof document>"u")return;const t=document.documentElement,o=document.body;if(!(!t||!o)){if(!e.restoreGlobalCursor){const r=t.style.cursor,a=o.style.cursor;e.restoreGlobalCursor=()=>{t.style.cursor=r,o.style.cursor=a,e.restoreGlobalCursor=null}}t.style.cursor=n,o.style.cursor=n}},nS=e=>{var n;(n=e.restoreGlobalCursor)==null||n.call(e)},tS=(e,n)=>{e.dispatchEvent(new WheelEvent("wheel",{deltaX:n.deltaX,deltaY:n.deltaY,deltaZ:n.deltaZ,deltaMode:n.deltaMode,clientX:n.clientX,clientY:n.clientY,bubbles:!1,cancelable:!0}))},oS=(e,n)=>{e&&(e.setAttribute("d",sl(n)),e.setAttribute("stroke-width",`${on}`),e.setAttribute("stroke-linejoin","round"),e.setAttribute("stroke-linecap","round"))},ro={ALWAYS:"always",SELECTED:"selected",OFF:"off"},Uo={ALWAYS:"always",SELECTED:"selected"},ga=Object.freeze({strokeWidthPx:1.5,overlayDashPattern:"8 8",meterMarkers:ro.ALWAYS,components:Uo.ALWAYS}),rS=(e,n)=>e===ro.ALWAYS||e===ro.SELECTED&&n,aS=e=>e!==ro.OFF,iS=(e,n)=>e===Uo.ALWAYS||e===Uo.SELECTED&&n,ZA=e=>Object.values(ro).includes(e),JA=e=>Object.values(Uo).includes(e),ev=(e,n)=>typeof e=="number"&&Number.isFinite(e)&&e>0?e:n,nv=(e,n)=>{const t=e==null?void 0:e.trim();return t||n},sS=(e,n=ga)=>({strokeWidthPx:ev(e==null?void 0:e.strokeWidthPx,n.strokeWidthPx),overlayDashPattern:nv(e==null?void 0:e.overlayDashPattern,n.overlayDashPattern),meterMarkers:ZA(e==null?void 0:e.meterMarkers)?e.meterMarkers:n.meterMarkers,components:JA(e==null?void 0:e.components)?e.components:n.components}),rs=Object.freeze({previewAlpha:.9,surfaceAlpha:.92}),Z={colors:{neutral:Oo(1),accent:Oo(1),preview:Oo(rs.previewAlpha),surface:pc(rs.surfaceAlpha),transparent:"transparent",components:{direct:Cr(Ie.DIRECT),vertical:Cr(Ie.VERTICAL),horizontal:Cr(Ie.HORIZONTAL)},componentLabelAccents:{direct:Er(Ie.DIRECT),vertical:Er(Ie.VERTICAL),horizontal:Er(Ie.HORIZONTAL)}},sizes:{edgeStrokeWidth:ga.strokeWidthPx,pointPixelSize:10,pointOutlineWidth:1},patterns:{edgeDashPattern:ga.overlayDashPattern}},lS=Object.freeze({edge:Object.freeze({stroke:Z.colors.accent,strokeWidth:Z.sizes.edgeStrokeWidth,overlayDashPattern:Z.patterns.edgeDashPattern}),point:Object.freeze({pixelSize:Z.sizes.pointPixelSize,fill:Z.colors.transparent,outline:Z.colors.surface,outlineWidth:Z.sizes.pointOutlineWidth})}),Qu=Object.freeze({edge:Object.freeze({stroke:Z.colors.neutral}),point:Object.freeze({outline:Z.colors.neutral})}),tv=(e,n={})=>({...e,...n}),ov=(e,n={})=>({...e,...n}),uS=e=>tv(e,Qu.edge),dS=e=>ov(e,Qu.point),Se=Object.freeze({lineStrokeWidthPx:Z.sizes.edgeStrokeWidth,layerZIndex:"1550",lineLabelOffsetPx:9,lineLabelMinLengthPx:44,geometryEpsilonMeters:.01,directLineColor:Z.colors.components.direct,verticalLineColor:Z.colors.components.vertical,horizontalLineColor:Z.colors.components.horizontal,draftChainColor:Z.colors.preview}),as=cp(),ot=Object.freeze({style:Object.freeze({DARK_ON_BRIGHT:"dark-on-bright",BRIGHT_ON_DARK:"bright-on-dark"}),label:Object.freeze({textColor:as}),selection:Object.freeze({highlightPalette:Object.freeze({backgroundColor:Li("background"),hoverBackgroundColor:Li("hoverBackground"),textColor:as,glowColor:Oo(1),glowRadiusPx:5,preserveFillOnSelection:!0})}),lineLabel:Object.freeze({backgroundStyle:Object.freeze({SOFT_RECT_FADE:"soft-rect-fade",TEXT_ECHO_DARKEN:"text-echo-darken"})})}),rv=Gn.fontSizePx.pointLabel,av=e=>`${e/rv}rem`,vt=Object.freeze({fontFamily:Gn.fontFamily,rootFontSizeRem:"1rem",supportFontSizeRem:av(Gn.fontSizePx.supportText),headingFontSizeRem:"1rem",lineLabelFontWeight:Gn.fontWeight.medium,badgeFontWeight:Gn.fontWeight.medium,headingFontWeight:Gn.fontWeight.semibold,sectionTitleFontWeight:Gn.fontWeight.semibold}),Xu={NONE:"none",MOVE_ON_LINE:"move-on-line"},Pe=Object.freeze({appearance:Object.freeze({themeStyle:ot.style.BRIGHT_ON_DARK}),text:Object.freeze({fontFamily:vt.fontFamily,fontWeight:vt.lineLabelFontWeight}),background:Object.freeze({style:ot.lineLabel.backgroundStyle.TEXT_ECHO_DARKEN}),surface:Object.freeze({}),layout:Object.freeze({shortEdgeOffsetPx:-2}),collision:Object.freeze({allowEarlyRemoval:!0,resolutionStrategy:Xu.MOVE_ON_LINE,anchorSlideStepRatio:.1,maxAnchorSlideDeltaRatio:.3})}),Zu=Object.freeze({verticalFlippedBaselineOffsetPx:0,verticalBaselineAngleEpsilonRad:1e-9,sideHysteresisPx:1.5}),dr=e=>{var n,t;return{appearance:{...Pe.appearance,...e==null?void 0:e.appearance},text:{...Pe.text,...e==null?void 0:e.text,echo:((n=e==null?void 0:e.text)==null?void 0:n.echo)===void 0&&Pe.text.echo===void 0?void 0:{...Pe.text.echo,...(t=e==null?void 0:e.text)==null?void 0:t.echo}},background:{...Pe.background,...e==null?void 0:e.background},surface:{...Pe.surface,...e==null?void 0:e.surface},layout:{...Pe.layout,...e==null?void 0:e.layout},collision:{...Pe.collision,...e==null?void 0:e.collision}}},iv=e=>e.surface.blendMode??(e.appearance.themeStyle===ot.style.DARK_ON_BRIGHT?"lighten":"darken"),ko=Object.freeze({paddingBlockEx:.25,paddingInlineEx:.65,backdropInsetBlockEx:-.35,backdropInsetInlineEx:-.75}),sv=Object.freeze({[ot.style.BRIGHT_ON_DARK]:"15, 23, 42",[ot.style.DARK_ON_BRIGHT]:"255, 255, 255"}),Ju=e=>({...e!=null&&e.fontSize?{"--carma-annotation-text-overlay-font-size":e.fontSize}:{},...(e==null?void 0:e.fontWeight)!==void 0?{"--carma-annotation-text-overlay-font-weight":String(e.fontWeight)}:{},...e!=null&&e.letterSpacing?{"--carma-annotation-text-overlay-letter-spacing":e.letterSpacing}:{},...typeof(e==null?void 0:e.textEchoBlurPx)=="number"?{"--carma-annotation-text-overlay-text-echo-blur-px":`${e.textEchoBlurPx}px`}:{},...e!=null&&e.textEchoShadow?{"--carma-annotation-text-overlay-text-echo-shadow":e.textEchoShadow}:{}}),lv=(e,n)=>{Object.entries(Ju(n)).forEach(([t,o])=>e.style.setProperty(t,o))},Dn=(e,n,t,{unit:o="",min:r,max:a}={})=>{typeof t!="number"||!Number.isFinite(t)||e.style.setProperty(n,`${Be(t,r??-1/0,a??1/0)}${o}`)},No=(e,n)=>typeof e=="number"&&Number.isFinite(e)?e:n,uv=({element:e,backdrop:n,surface:t,accentColor:o,visualOptions:r=Pe})=>{var d,c,m,y,p;const{text:a,background:i,surface:s}=r,u=(f,A)=>{A!=null&&A.trim()&&e.style.setProperty(f,A)};e.style.setProperty("--carma-annotation-text-overlay-font-family",a.fontFamily),e.style.setProperty("--carma-annotation-text-overlay-font-weight",String(a.fontWeight)),o&&e.style.setProperty("--carma-annotation-text-overlay-glow-color",o),e.dataset.annotationThemeStyle=r.appearance.themeStyle,e.dataset.annotationTextOverlayBackgroundStyle=i.style,typeof i.surfaceAlpha=="number"&&Number.isFinite(i.surfaceAlpha)&&!((d=i.color)!=null&&d.trim())&&e.style.setProperty("--carma-annotation-text-overlay-backdrop-background",`rgba(${sv[r.appearance.themeStyle]}, ${Be(i.surfaceAlpha,0,1)})`);const l=i.showBackdrop!==!1;n.style.display=l?"block":"none",t.style.display=l?"block":"none",u("--carma-annotation-text-overlay-text-color",a.color),u("--carma-annotation-text-overlay-text-blend-mode",a.blendMode),u("--carma-annotation-text-overlay-backdrop-background",i.color),u("--carma-annotation-text-overlay-backdrop-blend-mode",i.blendMode),u("--carma-annotation-text-overlay-surface-blend-mode",s.blendMode),u("--carma-annotation-text-overlay-text-echo-color",(c=a.echo)==null?void 0:c.color),u("--carma-annotation-text-overlay-text-echo-blend-mode",(m=a.echo)==null?void 0:m.blendMode),Dn(e,"--carma-annotation-text-overlay-text-echo-blur-px",(y=a.echo)==null?void 0:y.blurPx,{unit:"px",min:0}),Dn(e,"--carma-annotation-text-overlay-text-echo-opacity",(p=a.echo)==null?void 0:p.opacity,{min:0,max:1}),Dn(e,"--carma-annotation-text-overlay-surface-blur-px",i.blurPx,{unit:"px",min:0}),Dn(e,"--carma-annotation-text-overlay-surface-brightness-pct",i.brightnessPct,{unit:"%",min:0}),Dn(e,"--carma-annotation-text-overlay-surface-saturate-pct",i.saturatePct,{unit:"%",min:0}),Dn(e,"--carma-annotation-text-overlay-backdrop-radius",i.radiusEx,{unit:"ex",min:0}),Dn(e,"--carma-annotation-text-overlay-surface-edge-blur-px",i.edgeBlurPx,{unit:"px",min:0}),(typeof s.paddingBlockEx=="number"||typeof s.paddingInlineEx=="number")&&(e.style.setProperty("--carma-annotation-text-overlay-padding-block",`${Math.max(No(s.paddingBlockEx,ko.paddingBlockEx),0)}ex`),e.style.setProperty("--carma-annotation-text-overlay-padding-inline",`${Math.max(No(s.paddingInlineEx,ko.paddingInlineEx),0)}ex`)),(typeof i.insetBlockEx=="number"||typeof i.insetInlineEx=="number")&&e.style.setProperty("--carma-annotation-text-overlay-backdrop-inset",`${No(i.insetBlockEx,ko.backdropInsetBlockEx)}ex ${No(i.insetInlineEx,ko.backdropInsetInlineEx)}ex`)},en=Object.freeze({root:"carma-annotation-text-overlay",backdrop:"carma-annotation-text-overlay__backdrop",surface:"carma-annotation-text-overlay__surface",textEcho:"carma-annotation-text-overlay__text-echo",text:"carma-annotation-text-overlay__text"}),dv='[data-annotation-text-overlay-text-echo="true"]',cv='[data-annotation-text-overlay-text="foreground"]',mv=Object.freeze({fontSize:"17px",letterSpacing:"5%",fontWeight:800,textEchoBlurPx:4,textEchoShadow:"0 0 2px rgba(2, 6, 23, 0.42), 0 0 6px rgba(2, 6, 23, 0.3)"}),Mt=e=>{const n=document.createElement("div");return n.className=e,n},yv=({accentColor:e,visualOptions:n,styleOptions:t})=>{const o=Mt(en.root),r=Mt(en.backdrop),a=Mt(en.surface),i=Mt(en.textEcho),s=Mt(en.text);return i.dataset.annotationTextOverlayTextEcho="true",s.dataset.annotationTextOverlayText="foreground",uv({element:o,backdrop:r,surface:a,accentColor:e,visualOptions:n}),lv(o,t),o.append(r,a,i,s),o},Ka=(e,n)=>{[cv,dv].forEach(t=>{const o=e.querySelector(t);o&&o.textContent!==n&&(o.textContent=n)})},pv=e=>typeof e=="string"||typeof e=="number"?String(e):"",gv=({textColor:e,fontSize:n,styleOptions:t,visualOptions:o,surfaceBlendMode:r,hasInteraction:a})=>{const i=(t==null?void 0:t.fontSize)===void 0?n:void 0;return{pointerEvents:a?"auto":"none",cursor:a?"pointer":"default","--carma-annotation-text-overlay-font-family":o.text.fontFamily,"--carma-annotation-text-overlay-font-weight":String(o.text.fontWeight),...i?{"--carma-annotation-text-overlay-font-size":i}:{},...Ju(t),...e?{"--carma-annotation-text-overlay-text-color":e}:{},...r?{"--carma-annotation-text-overlay-backdrop-blend-mode":r,"--carma-annotation-text-overlay-surface-blend-mode":r}:{}}},ed=({content:e,selected:n,textColor:t,fontSize:o,styleOptions:r,visualOptions:a=Pe,surfaceBlendMode:i,onClick:s,onDoubleClick:u,onLongPress:l,longPressDurationMs:d=320})=>{const c=g.useRef(null),m=g.useRef(!1),y=pv(e),p=!!(s||u||l),f=g.useCallback(()=>{c.current!==null&&(window.clearTimeout(c.current),c.current=null)},[]),A=g.useCallback(b=>{if(m.current){m.current=!1,b.preventDefault(),b.stopPropagation();return}s==null||s()},[s]),v=g.useCallback(()=>{l&&(f(),m.current=!1,c.current=window.setTimeout(()=>{c.current=null,m.current=!0,l()},d))},[f,d,l]);return g.useEffect(()=>f,[f]),O.jsxs("div",{className:en.root,"data-annotation-theme-style":a.appearance.themeStyle,"data-annotation-text-overlay-background-style":a.background.style,"data-selected":n?"true":void 0,style:gv({textColor:t,fontSize:o,styleOptions:r,visualOptions:a,surfaceBlendMode:i,hasInteraction:p}),onClick:s?A:void 0,onDoubleClick:u,onPointerDown:l?v:void 0,onPointerUp:l?f:void 0,onPointerLeave:l?f:void 0,onPointerCancel:l?f:void 0,children:[O.jsx("div",{className:en.backdrop}),O.jsx("div",{className:en.surface}),O.jsx("div",{className:en.textEcho,"data-annotation-text-overlay-text-echo":"true",children:y}),O.jsx("div",{className:en.text,"data-annotation-text-overlay-text":"foreground",children:y})]})};ed.__docgenInfo={description:"",methods:[],displayName:"TextOverlay",props:{content:{required:!0,tsType:{name:"ReactNode"},description:""},selected:{required:!1,tsType:{name:"boolean"},description:""},textColor:{required:!1,tsType:{name:"string"},description:""},fontSize:{required:!1,tsType:{name:"string"},description:""},styleOptions:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
})`,computed:!0}},surfaceBlendMode:{required:!1,tsType:{name:'CSSProperties["mixBlendMode"]',raw:'CSSProperties["mixBlendMode"]'},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onDoubleClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onLongPress:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},longPressDurationMs:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"320",computed:!1}}}};const xe=({x:e,y:n})=>({x:e,y:n}),cS=(e,n)=>{const t=e.worldToScreen(n);return t?xe(t):null},fv=Object.freeze({direct:{labelOffsetPx:Se.lineLabelOffsetPx},vertical:{labelOffsetPx:Se.lineLabelOffsetPx,labelFlippedBaselineOffsetPx:Zu.verticalFlippedBaselineOffsetPx,labelRotationMode:nm.CLOCKWISE},horizontal:{labelOffsetPx:Se.lineLabelOffsetPx}}),Av=({kind:e,outsideReferencePoint:n,anchorRatio:t})=>({...fv[e],anchorRatio:t===void 0?void 0:Ca(t),getLabelOutsideReferencePoint:n?()=>xe(n):void 0}),nd=({x:e,y:n,angleRad:t,anchor:o})=>`translate(${Math.round(e)}px, ${Math.round(n)}px) ${o==="left"?"translate(0%, -50%)":o==="right"?"translate(-100%, -50%)":"translate(-50%, -50%)"} rotate(${t}rad)`,vv=({start:e,end:n,kind:t,outsideReferencePoint:o,shortEdgeOffsetPx:r=Pe.layout.shortEdgeOffsetPx,useShortEdgeRules:a=!0,previousShouldFlip:i=!1,anchorRatio:s})=>{const u=tm({svgLine:{start:xe(e),end:xe(n)},options:Av({kind:t,outsideReferencePoint:o,anchorRatio:s}),previousShouldFlip:i,sideSwitchThresholdPx:Zu.sideHysteresisPx});if(!u)return null;if(a&&u.lineLengthPx<Se.lineLabelMinLengthPx){const l=u.normalX>=0;return{x:u.midX+u.normalX*r,y:u.midY+u.normalY*r,angleRad:0,anchor:l?"left":"right",anchorRatio:u.anchorRatio,isShortEdge:!0,shouldFlip:u.shouldFlip,normalX:u.normalX,normalY:u.normalY}}return{x:u.textX,y:u.textY,angleRad:u.angleRad,anchor:"center",anchorRatio:u.anchorRatio,isShortEdge:!1,shouldFlip:u.shouldFlip,normalX:u.normalX,normalY:u.normalY}},Tv="carma-annotation-overlay-line-label",bv="carma-annotation-overlay-line-label__frame",is=e=>{const n=document.createElement("div");return n.className=e,n},kv=e=>e.dataset.annotationOverlayLineLabelKind==="vertical"||e.dataset.annotationOverlayLineLabelKind==="horizontal"?e.dataset.annotationOverlayLineLabelKind:"direct",Nv=e=>{const n=e.dataset.annotationOverlayLineLabelShortEdgeOffsetPx,t=n?Number(n):Number.NaN;return Number.isFinite(t)?t:Pe.layout.shortEdgeOffsetPx},Qa=(e,n)=>{const t=dr(n),o=is(Tv),r=is(bv),a=yv({accentColor:e,visualOptions:t});return o.dataset.annotationOverlayLineLabelShortEdgeOffsetPx=String(t.layout.shortEdgeOffsetPx),r.append(a),o.appendChild(r),o},Iv=e=>{const n=dr(e),t=Z.colors.componentLabelAccents,o=r=>{const a=Qa(t[r],n);return a.dataset.annotationOverlayLineLabelKind=r,a};return{direct:o("direct"),vertical:o("vertical"),horizontal:o("horizontal")}},td=e=>{e.direct.style.display="none",e.vertical.style.display="none",e.horizontal.style.display="none"},od=({element:e,start:n,end:t,outsideReferencePoint:o,anchorRatio:r,previousShouldFlip:a=e.dataset.annotationOverlayLineLabelNormalFlip==="1"})=>{const i=kv(e);return vv({start:n,end:t,kind:i,outsideReferencePoint:o,shortEdgeOffsetPx:Nv(e),useShortEdgeRules:i==="vertical",anchorRatio:r,previousShouldFlip:a})},rd=(e,n,t)=>{Ka(e,n),e.dataset.annotationOverlayLineLabelShortEdge=t.isShortEdge?"true":"false",e.dataset.annotationOverlayLineLabelAnchorRatio=`${t.anchorRatio}`,e.dataset.annotationOverlayLineLabelNormalFlip=t.shouldFlip?"1":"0"},hv=({text:e,...n})=>{const{element:t}=n,o=od(n);if(!o){t.style.display="none";return}rd(t,e,o),t.style.display="block",t.style.transform=nd(o)},cr=(e,n)=>{Object.assign(e.style,n)},mr=(e,n,t=Te.LABEL)=>{const o=mu(e,t);if(!o)return null;const r=document.createElement("div");return r.id=n,r.dataset.annotationOverlayLayer="true",cr(r,{position:"absolute",inset:"0",overflow:"hidden",pointerEvents:"none",userSelect:"none",webkitUserSelect:"none",zIndex:"auto"}),o.appendChild(r),r},ad=(e,n)=>Object.fromEntries(Object.entries(n).map(([t,o])=>[t,o?mr(e,o,t):null])),Ot=e=>{e==null||e.remove()},cn={primitiveId:"measurement-preview-point-ring",scalingMode:Ea.SCREEN,targetScreenRadiusCssPx:32,innerHoleRadiusRatio:.33,alpha:.6,materialPreset:Up.COLOR,smoothingSampleCount:90,smoothingWindowMs:300,smoothingWeightDecayGamma:2};function xt(e,n,t){e.prototype=n.prototype=t,t.constructor=e}function co(e,n){var t=Object.create(e.prototype);for(var o in n)t[o]=n[o];return t}function qn(){}var rt=.7,Lt=1/rt,Sv=/^#([0-9a-f]{3})$/,Cv=/^#([0-9a-f]{6})$/,Ev=/^rgb\(\s*([-+]?\d+)\s*,\s*([-+]?\d+)\s*,\s*([-+]?\d+)\s*\)$/,Ov=/^rgb\(\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*\)$/,Lv=/^rgba\(\s*([-+]?\d+)\s*,\s*([-+]?\d+)\s*,\s*([-+]?\d+)\s*,\s*([-+]?\d+(?:\.\d+)?)\s*\)$/,Rv=/^rgba\(\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)\s*\)$/,wv=/^hsl\(\s*([-+]?\d+(?:\.\d+)?)\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*\)$/,xv=/^hsla\(\s*([-+]?\d+(?:\.\d+)?)\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)\s*\)$/,ss={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};xt(qn,ao,{displayable:function(){return this.rgb().displayable()},toString:function(){return this.rgb()+""}});function ao(e){var n;return e=(e+"").trim().toLowerCase(),(n=Sv.exec(e))?(n=parseInt(n[1],16),new fe(n>>8&15|n>>4&240,n>>4&15|n&240,(n&15)<<4|n&15,1)):(n=Cv.exec(e))?ls(parseInt(n[1],16)):(n=Ev.exec(e))?new fe(n[1],n[2],n[3],1):(n=Ov.exec(e))?new fe(n[1]*255/100,n[2]*255/100,n[3]*255/100,1):(n=Lv.exec(e))?us(n[1],n[2],n[3],n[4]):(n=Rv.exec(e))?us(n[1]*255/100,n[2]*255/100,n[3]*255/100,n[4]):(n=wv.exec(e))?ds(n[1],n[2]/100,n[3]/100,1):(n=xv.exec(e))?ds(n[1],n[2]/100,n[3]/100,n[4]):ss.hasOwnProperty(e)?ls(ss[e]):e==="transparent"?new fe(NaN,NaN,NaN,0):null}function ls(e){return new fe(e>>16&255,e>>8&255,e&255,1)}function us(e,n,t,o){return o<=0&&(e=n=t=NaN),new fe(e,n,t,o)}function Xa(e){return e instanceof qn||(e=ao(e)),e?(e=e.rgb(),new fe(e.r,e.g,e.b,e.opacity)):new fe}function id(e,n,t,o){return arguments.length===1?Xa(e):new fe(e,n,t,o??1)}function fe(e,n,t,o){this.r=+e,this.g=+n,this.b=+t,this.opacity=+o}xt(fe,id,co(qn,{brighter:function(e){return e=e==null?Lt:Math.pow(Lt,e),new fe(this.r*e,this.g*e,this.b*e,this.opacity)},darker:function(e){return e=e==null?rt:Math.pow(rt,e),new fe(this.r*e,this.g*e,this.b*e,this.opacity)},rgb:function(){return this},displayable:function(){return 0<=this.r&&this.r<=255&&0<=this.g&&this.g<=255&&0<=this.b&&this.b<=255&&0<=this.opacity&&this.opacity<=1},toString:function(){var e=this.opacity;return e=isNaN(e)?1:Math.max(0,Math.min(1,e)),(e===1?"rgb(":"rgba(")+Math.max(0,Math.min(255,Math.round(this.r)||0))+", "+Math.max(0,Math.min(255,Math.round(this.g)||0))+", "+Math.max(0,Math.min(255,Math.round(this.b)||0))+(e===1?")":", "+e+")")}}));function ds(e,n,t,o){return o<=0?e=n=t=NaN:t<=0||t>=1?e=n=NaN:n<=0&&(e=NaN),new nn(e,n,t,o)}function qv(e){if(e instanceof nn)return new nn(e.h,e.s,e.l,e.opacity);if(e instanceof qn||(e=ao(e)),!e)return new nn;if(e instanceof nn)return e;e=e.rgb();var n=e.r/255,t=e.g/255,o=e.b/255,r=Math.min(n,t,o),a=Math.max(n,t,o),i=NaN,s=a-r,u=(a+r)/2;return s?(n===a?i=(t-o)/s+(t<o)*6:t===a?i=(o-n)/s+2:i=(n-t)/s+4,s/=u<.5?a+r:2-a-r,i*=60):s=u>0&&u<1?0:i,new nn(i,s,u,e.opacity)}function _v(e,n,t,o){return arguments.length===1?qv(e):new nn(e,n,t,o??1)}function nn(e,n,t,o){this.h=+e,this.s=+n,this.l=+t,this.opacity=+o}xt(nn,_v,co(qn,{brighter:function(e){return e=e==null?Lt:Math.pow(Lt,e),new nn(this.h,this.s,this.l*e,this.opacity)},darker:function(e){return e=e==null?rt:Math.pow(rt,e),new nn(this.h,this.s,this.l*e,this.opacity)},rgb:function(){var e=this.h%360+(this.h<0)*360,n=isNaN(e)||isNaN(this.s)?0:this.s,t=this.l,o=t+(t<.5?t:1-t)*n,r=2*t-o;return new fe(_r(e>=240?e-240:e+120,r,o),_r(e,r,o),_r(e<120?e+240:e-120,r,o),this.opacity)},displayable:function(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1}}));function _r(e,n,t){return(e<60?n+(t-n)*e/60:e<180?t:e<240?n+(t-n)*(240-e)/60:n)*255}var sd=Math.PI/180,ld=180/Math.PI,Vo=18,ud=.95047,dd=1,cd=1.08883,md=4/29,Tt=6/29,yd=3*Tt*Tt,Pv=Tt*Tt*Tt;function Za(e){if(e instanceof pn)return new pn(e.l,e.a,e.b,e.opacity);if(e instanceof En){var n=e.h*sd;return new pn(e.l,Math.cos(n)*e.c,Math.sin(n)*e.c,e.opacity)}e instanceof fe||(e=Xa(e));var t=Br(e.r),o=Br(e.g),r=Br(e.b),a=Pr((.4124564*t+.3575761*o+.1804375*r)/ud),i=Pr((.2126729*t+.7151522*o+.072175*r)/dd),s=Pr((.0193339*t+.119192*o+.9503041*r)/cd);return new pn(116*i-16,500*(a-i),200*(i-s),e.opacity)}function Mv(e,n,t,o){return arguments.length===1?Za(e):new pn(e,n,t,o??1)}function pn(e,n,t,o){this.l=+e,this.a=+n,this.b=+t,this.opacity=+o}xt(pn,Mv,co(qn,{brighter:function(e){return new pn(this.l+Vo*(e??1),this.a,this.b,this.opacity)},darker:function(e){return new pn(this.l-Vo*(e??1),this.a,this.b,this.opacity)},rgb:function(){var e=(this.l+16)/116,n=isNaN(this.a)?e:e+this.a/500,t=isNaN(this.b)?e:e-this.b/200;return e=dd*Mr(e),n=ud*Mr(n),t=cd*Mr(t),new fe(Dr(3.2404542*n-1.5371385*e-.4985314*t),Dr(-.969266*n+1.8760108*e+.041556*t),Dr(.0556434*n-.2040259*e+1.0572252*t),this.opacity)}}));function Pr(e){return e>Pv?Math.pow(e,1/3):e/yd+md}function Mr(e){return e>Tt?e*e*e:yd*(e-md)}function Dr(e){return 255*(e<=.0031308?12.92*e:1.055*Math.pow(e,1/2.4)-.055)}function Br(e){return(e/=255)<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)}function Dv(e){if(e instanceof En)return new En(e.h,e.c,e.l,e.opacity);e instanceof pn||(e=Za(e));var n=Math.atan2(e.b,e.a)*ld;return new En(n<0?n+360:n,Math.sqrt(e.a*e.a+e.b*e.b),e.l,e.opacity)}function Bv(e,n,t,o){return arguments.length===1?Dv(e):new En(e,n,t,o??1)}function En(e,n,t,o){this.h=+e,this.c=+n,this.l=+t,this.opacity=+o}xt(En,Bv,co(qn,{brighter:function(e){return new En(this.h,this.c,this.l+Vo*(e??1),this.opacity)},darker:function(e){return new En(this.h,this.c,this.l-Vo*(e??1),this.opacity)},rgb:function(){return Za(this).rgb()}}));var pd=-.14861,Ja=1.78277,ei=-.29227,yr=-.90649,io=1.97294,cs=io*yr,ms=io*Ja,ys=Ja*ei-yr*pd;function Fv(e){if(e instanceof Kn)return new Kn(e.h,e.s,e.l,e.opacity);e instanceof fe||(e=Xa(e));var n=e.r/255,t=e.g/255,o=e.b/255,r=(ys*o+cs*n-ms*t)/(ys+cs-ms),a=o-r,i=(io*(t-r)-ei*a)/yr,s=Math.sqrt(i*i+a*a)/(io*r*(1-r)),u=s?Math.atan2(i,a)*ld-120:NaN;return new Kn(u<0?u+360:u,s,r,e.opacity)}function Gv(e,n,t,o){return arguments.length===1?Fv(e):new Kn(e,n,t,o??1)}function Kn(e,n,t,o){this.h=+e,this.s=+n,this.l=+t,this.opacity=+o}xt(Kn,Gv,co(qn,{brighter:function(e){return e=e==null?Lt:Math.pow(Lt,e),new Kn(this.h,this.s,this.l*e,this.opacity)},darker:function(e){return e=e==null?rt:Math.pow(rt,e),new Kn(this.h,this.s,this.l*e,this.opacity)},rgb:function(){var e=isNaN(this.h)?0:(this.h+120)*sd,n=+this.l,t=isNaN(this.s)?0:this.s*n*(1-n),o=Math.cos(e),r=Math.sin(e);return new fe(255*(n+t*(pd*o+Ja*r)),255*(n+t*(ei*o+yr*r)),255*(n+t*(io*o)),this.opacity)}}));const gd=e=>e.createLineCollection(),fd=(e,n,t,o)=>{const r=(o==null?void 0:o.width)??Se.lineStrokeWidthPx,a=(o==null?void 0:o.ruler)===!0,i=(o==null?void 0:o.occludedDashed)===!0,s=(o==null?void 0:o.halo)!==!1;return{line:e.addLine({id:n,positions:[],color:t,width:r,ruler:a,occludedDashed:i,halo:s,visible:!1}),colorCss:t,width:r,ruler:a,occludedDashed:i,halo:s}},Ad=(e,n)=>{e.colorCss!==n&&(e.line.setStyle({color:n,width:e.width,ruler:e.ruler,occludedDashed:e.occludedDashed,halo:e.halo}),e.colorCss=n)},vd=e=>{e.line.setVisible(!1)},Td=(e,n)=>{e.line.setPositions(n),e.line.setVisible(n.length>=2)},jv=.1,Hv=(e,n)=>{const t=ao(e)??ao("white");if(!t)return`rgba(255,255,255,${n})`;const{r:o,g:r,b:a}=t.rgb();return`rgba(${[o,r,a].map(Math.round).join(",")},${n})`},zv=(e,n)=>{let t=null,o=null,r=!1;const a=()=>{o&&(vd(o),r=!1)};return{apply:i=>{if(!i){a();return}t??(t=gd(e)),o??(o=fd(t,n,i.colorCss)),Ad(o,i.colorCss);const s=Math.max(i.lineLengthMeters,jv)/2;Td(o,[new x(0,0,-s).applyMatrix4(i.modelMatrix),new x(0,0,s).applyMatrix4(i.modelMatrix)]),r=!0},clear:a,hide:()=>o==null?void 0:o.line.setVisible(!1),restore:()=>o==null?void 0:o.line.setVisible(r),destroy:()=>{t==null||t.destroy(),t=null,o=null}}},Uv=e=>{let n=[];const t=new x;return{hasTrail:()=>n.length>1,push:o=>Ep({samples:n,normal:o,maxSampleCount:e().maxSampleCount,timestampMs:performance.now()}),average:o=>{const{maxSampleAgeMs:r,weightDecayGamma:a}=e();return Op({samples:n,fallbackNormal:o,result:t,epsilonSquared:Ql,maxSampleAgeMs:r,weightDecayGamma:a,nowMs:performance.now()})},clear:()=>{n=[]}}},Vv=(e,n,t,{innerRadiusRatio:o=0}={})=>{const r=ll(1,t).map(({x:d,y:c})=>new x(d,c,0));r.length>0&&r.push(r[0].clone());const a=[new x(1,0,0),new x(0,1,0)].flatMap(d=>[-1,1].flatMap(c=>[d.clone().multiplyScalar(o*.5*c),d.clone().multiplyScalar(o*.94*c)]));let i=null,s=null,u=null,l=null;return{apply:(d,c,{normalRadiusMeters:m=0}={})=>{if(u??(u=gd(e)),l??(l=fd(u,n,c,{width:on,occludedDashed:!0,halo:!1})),Ad(l,c),Td(l,r.map(y=>y.clone().applyMatrix4(d))),o>0){i??(i=u.addLine({id:`${n}-crosshair`,color:c,width:on,segmentPairs:!0,occludedDashed:!0,halo:!1,visible:!1})),s!==c&&(i.setStyle({color:c,width:on,occludedDashed:!0,halo:!1}),s=c);const y=m>0?[-1,1].flatMap(p=>[new x(0,0,m*o*.5*p),new x(0,0,m*o*.94*p)]):[];i.setPositions([...a,...y].map(p=>p.clone().applyMatrix4(d))),i.setVisible(!0)}},clear:()=>{l&&vd(l),i==null||i.setVisible(!1)},destroy:()=>{u==null||u.destroy(),u=null,l=null,i=null,s=null}}},Ye=(e,n)=>Am(e)?e:n,mS=(e,n)=>Math.max(0,Ye(e,n)),$v=(e,n={})=>{const t=zu,o=Math.max(0,Ye(n.radiusLabelVisibleDurationMs,t.radiusLabelVisibleDurationMs)),r=Math.max(0,Ye(n.radiusLabelFadeDurationMs,t.radiusLabelFadeDurationMs)),a=Math.max(0,Ye(n.resizeAnimationDurationMs,t.resizeAnimationDurationMs)),i=typeof window<"u"&&typeof window.matchMedia=="function"?window.matchMedia("(prefers-reduced-motion: reduce)"):null;let s=null,u=null,l=0,d=null,c=null;const m=()=>{d!==null&&clearTimeout(d),d=null},y=f=>{if(!e)return;const A=Math.max(0,l-f);e.style.transition=`opacity ${i!=null&&i.matches?0:r}ms ease-out`,e.style.opacity=A>0?"1":"0",A>0&&d===null&&(d=setTimeout(()=>{d=null,e.style.opacity="0"},A))},p=f=>{if(!c)return u;const A=i!=null&&i.matches||a===0?1:Math.min(1,Math.max(0,(f-c.startedAt)/a)),v=A*A*(3-2*A);return u=c.from*Math.pow(c.to/c.from,v),A===1&&(u=c.to,c=null),u};return{resolveRadius:f=>{const A=performance.now(),v=p(A);return f!==s&&(c=v!==null&&a>0&&!(i!=null&&i.matches)?{from:v,to:f,startedAt:A}:null,s=f,u=v!==null&&c?v:f,l=A+o,m()),y(A),{radiusMeters:p(A)??f,animating:c!==null}},clear:()=>{m(),c=null,u=s,e&&(e.style.display="none")}}},bd={TRUE_SAMPLE:"true-sample",CAMERA_PLANE_REPROJECT:"camera-plane-reproject"},Wv=e=>e===bd.CAMERA_PLANE_REPROJECT,Yv=.1,Kv=.999,ps=e=>Be(e,0,Kv),Qv=({engine:e,pointECEF:n,discNormalECEF:t,radiusMeters:o,scalingMode:r,targetScreenRadiusCssPx:a})=>{const i=Math.max(o,Yv);return r==="world"?i:zp(s=>e.worldToScreen(s),n,t,i,a)},Xv=.1,so=Object.freeze({SCALE_BAND:"scale-band",VIEW_CHANGE:"view-change"}),gs=(e,n,t,{radiusSteps:o=!1}={})=>{if(!Number.isFinite(e)||e<=0)return null;const r=n/e;return Math.max(t?o?Vn(r):Vn(r*2)/2:r,o?0:Xv)},Zv=(e,n,t,o)=>n===null||(e===so.VIEW_CHANGE?n.viewKey!==t.viewKey:cl(n.referenceScale,t.referenceScale,o)),fs=e=>{const n=e.getCameraPose();if(!n)return"";const{positionECEF:t,directionECEF:o,upECEF:r,verticalFovRad:a}=n;return[...t.toArray(),...o.toArray(),...r.toArray(),a,e.canvas.clientWidth,e.canvas.clientHeight].join()},Jv=({engine:e,stepFactor:n,targetScreenRadiusCssPx:t,quantize:o,radiusSteps:r=!1,discSizing:a,fallbackRadiusMeters:i,trigger:s=so.SCALE_BAND})=>{const u=s===so.VIEW_CHANGE;let l=null,d=null;const c=new x,m=zu,y=a?{target:Math.max(1,Ye(a.targetScreenRadiusCssPx,m.targetScreenRadiusCssPx)),minimum:Math.max(1,Ye(a.minimumScreenRadiusCssPx,m.minimumScreenRadiusCssPx)),maximumRatio:Be(Ye(a.maximumViewportRadiusRatio,m.maximumViewportRadiusRatio),.01,1),factor:Math.max(2,Ye(a.sceneResizeFactor,m.sceneResizeFactor)),hysteresis:Be(Ye(a.resizeHysteresisRatio,m.resizeHysteresisRatio),0,.4)}:null;return(p,{cameraMoving:f=!1,viewRevision:A}={})=>{var I;if(y){const N=A===void 0?fs(e):`${A}:${e.canvas.clientWidth}:${e.canvas.clientHeight}`,h=e.getScreenPixelsPerMeterAt(p);if(!Number.isFinite(h)||h<=0)return l??i;const S=Math.max(1,Math.min(e.canvas.clientWidth,e.canvas.clientHeight)*y.maximumRatio),k=Math.min(y.minimum,S/2),C=Math.min(k*(1+y.hysteresis),S/2),L=Math.max(C,S/(1+y.hysteresis)),R=Be(y.target,C,L),E=!f&&(d==null?void 0:d.viewKey)!==N;if(l===null||E){const q=(I=e.getViewportCenterGroundPosition)==null?void 0:I.call(e),D=q?e.getScreenPixelsPerMeterAt(q):h;if(!Number.isFinite(D)||D<=0)return l??i;l=gs(D,R,!0,{radiusSteps:!0})??i,d={viewKey:N,referenceScale:D}}const w=l??i,_=w*h;if(_>=k&&_<=S)return w;let M=w;for(let q=0;q<16;q+=1){const D=M*h;if(D>=k&&D<=S)break;M*=D<k?y.factor:1/y.factor}if(M=Vn(M),M*h<C||M*h>L){const q=Vn(R/h),D=[q,Vn(q/2),Vn(q*2)],$=D.filter(G=>G*h>=C&&G*h<=L);M=($.length>0?$:D.filter(G=>G*h>=k&&G*h<=S)).sort((G,U)=>Math.abs(G*h-R)-Math.abs(U*h-R))[0]??R/h}return l=M,l}const v={viewKey:u?fs(e):"",referenceScale:d&&!u?e.getScreenPixelsPerMeterAt(c):0};if(l!==null&&!Zv(s,d,v,n))return l;const b=e.getScreenPixelsPerMeterAt(p),T=gs(b,t,o,{radiusSteps:r});return T===null?l??i:(l=T,d={viewKey:v.viewKey,referenceScale:b},c.copy(p),T)}},eT=({engine:e,screenPosition:n,tangentPlane:t})=>{if(!t)return null;const o=e.getPickRay(n);if(!o)return null;const r=new sm().setFromNormalAndCoplanarPoint(t.normalECEF.clone().normalize(),t.pointECEF),a=vm(new lm(o.origin,o.direction),r);return a&&o.direction.dot(new x().subVectors(a,o.origin))>0?a:null},nT="white",As={overlay:20,inScene:48},tT=(e,{radius:n,placementMode:t=bd.CAMERA_PLANE_REPROJECT,color:o,opacity:r,materialPreset:a,innerHoleRadiusRatio:i=cn.innerHoleRadiusRatio,scalingMode:s=cn.scalingMode,targetScreenRadiusCssPx:u=cn.targetScreenRadiusCssPx,resizeWorldRadiusToScreenTarget:l=!1,discResizeStepFactor:d=4,quantizeStepWorldRadius:c=!1,showNormalLine:m=!1,lineLabelOptions:y,pointQueryDiscSizing:p,tangentDiscVisualizerTrailSampleCount:f=cn.smoothingSampleCount,tangentDiscVisualizerSmoothingWindowMs:A=cn.smoothingWindowMs,tangentDiscVisualizerWeightDecayGamma:v=cn.smoothingWeightDecayGamma})=>{if(!e||!j(e))return{setEnabled:()=>{},setVisualStyle:()=>{},setPreview:()=>{},clearPreview:()=>{},destroy:()=>{}};const b=e,T=b.capabilities.pointQueryDiscInScene===!0,I=T?As.inScene:As.overlay,N=Math.max(n,.1),h=new Ko,S=Ye(r,cn.alpha),k=T?mr(b,"measurement-point-query-radius-label"):null,C=k?Qa(Se.directLineColor,y):null;C&&k&&(C.setAttribute("data-test-id","measurement-point-query-radius"),k.appendChild(C));const L=T?$v(C,p):null,R=T?ll(1,I).map(({x:H,y:re})=>new x(H,re,0)):[],E=new x,w=H=>({colorCss:(H==null?void 0:H.color)??o??nT,opacity:Ye(H==null?void 0:H.opacity,S)}),_=H=>Hv(H.colorCss,H.opacity);let M=!1,q=w(),D=_(q),$=null;const V=zv(b,"measurement-preview-point-ring-normal"),G=T?Vv(b,"measurement-preview-point-ring-rim",I,{innerRadiusRatio:ps(i)}):null,U=Uv(()=>({maxSampleCount:f,maxSampleAgeMs:A,weightDecayGamma:v}));let K=null,ae=!1,J=null,W=!1,oe=0;const me=Jv({engine:b,stepFactor:d,targetScreenRadiusCssPx:u,quantize:c,radiusSteps:T,discSizing:T?p??{}:void 0,fallbackRadiusMeters:N,trigger:T?so.VIEW_CHANGE:so.SCALE_BAND});let Ce=null,ne=null,be=null,B=!1,Q=0,ue=null;const ye=()=>{$==null||$.destroy(),$=null,V.clear(),G==null||G.clear(),L==null||L.clear(),U.clear(),ue=null,ae=!1},ke=()=>{if(!ne)return null;if(!Wv(t)||B||!be)return ne;const H=b.pointer.getScreenPosition();return H?eT({engine:b,screenPosition:H,tangentPlane:{pointECEF:ne,normalECEF:be}})??ne:ne},Y=()=>J?($??($=b.createRing({id:cn.primitiveId,radius:1,innerRadius:ps(i),color:q.colorCss,opacity:q.opacity,materialPreset:a??cn.materialPreset,segments:I,modelMatrix:h,occludable:T})),$):(ye(),null),ee=()=>{ae||!U.hasTrail()||b.isDestroyed()||(ae=!0,b.requestRender())},te=({requestSmoothingRender:H=!0}={})=>{if(!M){ye();return}const re=ke();if(!re){ye();return}J=(J??new x).copy(re);const Xe=jp(re,be??Ce,Ce),je=T?me(re,{cameraMoving:W,viewRevision:oe}):s===Ea.WORLD&&l?me(re):Qv({engine:b,pointECEF:re,discNormalECEF:Xe,radiusMeters:N,scalingMode:s,targetScreenRadiusCssPx:u}),mo=$??Y();if(!mo)return;ue!==Q&&(ue=Q,U.push(Xe));const yo=U.average(Xe);H&&ee();const ln=L==null?void 0:L.resolveRadius(je),vn=(ln==null?void 0:ln.radiusMeters)??je;if(mo.setModelMatrix(Hp(re,yo,vn,h)),G==null||G.apply(h,D,{normalRadiusMeters:m?vn:0}),V.apply(m&&!T?{modelMatrix:h,lineLengthMeters:je*2,colorCss:D}:null),C){let un=null;for(const Ze of R){const _n=b.worldToScreen(E.copy(Ze).applyMatrix4(h));_n&&(!un||_n.x>un.x)&&(un=_n)}if(un){const Ze=je>=1?"m":je>=.01?"cm":"mm";Ka(C,`R${Math.round(je*(Ze==="m"?1:Ze==="cm"?100:1e3))} ${Ze}`),C.dataset.radiusMeters=String(je),C.dataset.displayedRadiusMeters=String(vn),C.style.display="block",C.style.transform=`translate(${un.x+Se.lineLabelOffsetPx}px, ${un.y}px) translate(0, -50%)`}else C.style.display="none"}ln!=null&&ln.animating&&b.requestRender()},F=()=>{J=null,Ce=null,ne=null,be=null,B=!1,Q+=1,ye()},Ee=b.pointer.register(),Ne=T?b.subscribeCameraMove({onMoveStart:()=>{W=!0},onMoveEnd:()=>{W=!1,oe+=1,M&&b.requestRender()}}):null;return K=b.subscribePreRender(()=>{ae=!1,te()}),{setEnabled:H=>{M!==H&&(M=H,M?te({requestSmoothingRender:!1}):ye(),b.requestRender())},setVisualStyle:(H,re)=>{const Xe=w(H),je=_(Xe);D!==je&&(q=Xe,D=je,ye(),te({requestSmoothingRender:!1}),(re==null?void 0:re.requestRender)!==!1&&b.requestRender())},setPreview:(H,re)=>{if(!(H!=null&&H.pointECEF)){F(),(re==null?void 0:re.requestRender)!==!1&&b.requestRender();return}ne=(ne??new x).copy(H.pointECEF),J=(J??new x).copy(H.pointECEF),be=H.surfaceNormalECEF?(be??new x).copy(H.surfaceNormalECEF):null,Ce=H.surfaceNormalECEF?(Ce??new x).copy(H.surfaceNormalECEF):null,B=H.lockToPreviewPoint===!0,Q+=1,te({requestSmoothingRender:!1}),(re==null?void 0:re.requestRender)!==!1&&b.requestRender()},clearPreview:()=>{F(),b.requestRender()},destroy:()=>{Ee(),os(Ne),os(K),K=null,ye(),V.destroy(),G==null||G.destroy(),Ot(k)}}},oT=({engine:e,referenceObjectSizing:n,lineLabelOptions:t,pointQueryEnabled:o,refs:{indicatorControllerRef:r,latestPickResultRef:a,pointQueryEnabledRef:i},resolveHoveredPointQueryNodeRef:s})=>{const u=(e==null?void 0:e.capabilities.pointQueryDiscInScene)===!0?t:void 0,l=(e==null?void 0:e.capabilities.pointQueryDiscInScene)===!0?n.pointQueryDiscSizing:void 0;g.useEffect(()=>{var c;(c=r.current)==null||c.destroy();const d=tT(e,{radius:n.worldRadiusMeters,scalingMode:n.scalingMode,targetScreenRadiusCssPx:n.targetScreenRadiusCssPx,resizeWorldRadiusToScreenTarget:n.resizeWorldRadiusToScreenTarget,discResizeStepFactor:n.resizeStepFactor,quantizeStepWorldRadius:n.quantizeWorldRadius,showNormalLine:!0,lineLabelOptions:u,pointQueryDiscSizing:l,tangentDiscVisualizerTrailSampleCount:Yn.pointQuery.discSmoothingSampleCount,tangentDiscVisualizerSmoothingWindowMs:Yn.pointQuery.discSmoothingWindowMs,tangentDiscVisualizerWeightDecayGamma:Yn.pointQuery.discSmoothingWeightDecayGamma});return r.current=d,d==null||d.setEnabled(i.current),i.current&&a.current?d==null||d.setPreview({pointECEF:a.current.pointECEF,surfaceNormalECEF:a.current.surfaceNormalECEF,lockToPreviewPoint:s.current()!==null}):d==null||d.clearPreview(),()=>{var m;(m=r.current)==null||m.destroy(),r.current=null}},[n.quantizeWorldRadius,n.resizeWorldRadiusToScreenTarget,n.resizeStepFactor,n.scalingMode,n.targetScreenRadiusCssPx,n.worldRadiusMeters,e,u,l]),g.useEffect(()=>{var d;(d=r.current)==null||d.setEnabled(o)},[o])},rT=({engine:e,activePlugin:n,context:t,pointQueryEnabled:o,refs:{authoringControllerRef:r,latestPickResultRef:a,pointQueryEnabledRef:i}})=>{const{annotationsStore:s,drafts:u,labelOverlay:l,formatOptions:d,lineLabelOptions:c}=t;g.useEffect(()=>{var y,p;(y=r.current)==null||y.destroy();const m=((p=n==null?void 0:n.authoringVisuals)==null?void 0:p.createController({engine:e,annotationsStore:s,drafts:u,labelOverlay:l,requestRender:()=>{j(e)&&e.requestRender()},formatOptions:d,lineLabelOptions:c}))??null;return r.current=m,m==null||m.setEnabled(i.current),m==null||m.setPointQueryPickResult(i.current?a.current:null),()=>{var f;(f=r.current)==null||f.destroy(),r.current=null}},[n,s,u,e,d,l,c]),g.useEffect(()=>{var m,y;(m=r.current)==null||m.setEnabled(o),o||(y=r.current)==null||y.setPointQueryPickResult(null)},[o])},fa={requestModeChange:()=>{},requestActivateTool:()=>{},requestFinishMeasurement:()=>!1,requestPointAt:()=>!1},yS="#00d9ff",aT="#ef4444",Fr={requestRender:!1},iT=({engine:e,registry:n,annotationsStore:t,annotationToolDraftStore:o,setActiveToolTypeInStore:r,focusAdjacentAnnotationEntry:a,removeSelectedAnnotations:i,removeEditedNode:s,addAnnotation:u,bindApi:l,bindPreviewSnapTargetNodeClick:d,activeEditedNodeId:c,getHoveredPointQueryNodeId:m,setHoveredPointQueryNodeId:y,onPointQueryPickResultChange:p,formatOptions:f,lineLabelOptions:A,referenceObjectSizing:v,requestLabelText:b})=>{var ee,te;const T=Yo(),I=se(F=>F.annotationToolType),N=se(F=>F.nodes),h=se(F=>F.linkedNodeGroups),S=se(F=>F.settingsState.pointTemporaryMode),k=g.useRef(null),C=g.useRef(null),L=g.useRef(null),R=g.useRef(null),E=g.useCallback((F,Ee)=>{var Ne;R.current=F,(Ne=C.current)==null||Ne.setPointQueryPickResult(F,Ee),p(F)},[p]),w=g.useMemo(()=>new Map(N.map(F=>[F.id,F])),[N]),_=g.useCallback(()=>{k.current!==null&&(window.clearTimeout(k.current),k.current=null)},[]),M=g.useCallback(()=>{var F,Ee;(F=L.current)==null||F.setVisualStyle(null),(Ee=L.current)==null||Ee.clearPreview()},[]),q=g.useCallback(()=>y(null),[y]),D=g.useCallback(()=>{_(),E(null),M(),q()},[q,M,_,E]),$=g.useCallback(()=>{const F=m();return F?w.get(F)??null:null},[m,w]),V=g.useMemo(()=>({getState:t.getState,dispatch:t.dispatch,setActiveToolType:r,drafts:o,requestLabelText:b,addAnnotation:u}),[u,o,t.dispatch,t.getState,b,r]),G=g.useMemo(()=>_A(n,V),[n,V]),U=n.getPlugin(I)??null;g.useMemo(()=>hu(n.plugins),[n.plugins]);const K=g.useMemo(()=>Cf(n),[n]);BA({pointTemporaryMode:S,annotationToolDraftStore:o,addAnnotation:u});const{requestModeChange:ae,requestActivateTool:J,requestFinishMeasurement:W}=OA(I,G,D),oe=g.useCallback(()=>{const F=W();return F&&D(),F},[W,D]),{handlePointQueryPointCreated:me,resolvePointQueryCoordinate:Ce,activeToolSession:ne}=qA({engine:e,nodes:N,linkedNodeGroups:h,activeToolType:I,toolSessions:G,getToolPlugin:F=>n.getPlugin(F)??null,sessionContext:V}),be=g.useCallback((F,Ee,Ne)=>{me(F,Ee,{inputModifier:Ne==null?void 0:Ne.inputModifier}),D()},[me,D]),B=!!((ne!=null&&ne.onNodeCreated||(ee=U==null?void 0:U.pointQuery)!=null&&ee.onPointCreated)&&!c),Q=FA({engine:e,pointQueryEnabled:B,onPointCreated:be});g.useEffect(()=>(l({requestModeChange:ae,requestActivateTool:J,requestFinishMeasurement:oe,requestPointAt:Q}),()=>{l(fa)}),[l,oe,ae,J,Q]);const ue=g.useRef(B);ue.current=B;const ye=g.useRef($);ye.current=$;const ke=g.useCallback(F=>{if(!B)return!1;const Ee=N.find(Ne=>Ne.id===F)??null;return Ee?(me(Ee.coordinate,void 0,{forcedSnappedNodeId:F}),D(),!0):!1},[me,N,B,D]);g.useEffect(()=>d(ke)??void 0,[d,ke]);const Y={indicatorControllerRef:L,authoringControllerRef:C,latestPickResultRef:R,pointQueryEnabledRef:ue};return oT({engine:e,referenceObjectSizing:v,lineLabelOptions:A,pointQueryEnabled:B,refs:Y,resolveHoveredPointQueryNodeRef:ye}),rT({engine:e,activePlugin:U,context:{annotationsStore:t,drafts:o,labelOverlay:T,formatOptions:f,lineLabelOptions:A},pointQueryEnabled:B,refs:Y}),g.useEffect(()=>{B||q()},[q,B]),MA(e,{enabled:B,inputModifiers:(te=U==null?void 0:U.pointQuery)==null?void 0:te.inputModifiers,onCoordinate:be,onLineFinish:ne!=null&&ne.finishesOnLoopClosure?()=>{oe()}:void 0,onHoverSampleChange:({coordinate:F,screenPosition:Ee,pointECEF:Ne,surfaceNormalECEF:H,inputModifier:re})=>{var ln,vn,un,Ze,_n,ii;if(!B||!Ne||!F){_(),k.current=window.setTimeout(()=>{k.current=null,E(null),M()},Yn.hoverClearDelayMs);return}_();const{pickResult:Xe,isLockedToSnapPoint:je}=DA({engine:e,hoveredNode:$(),coordinate:F,screenPosition:Ee,pointECEF:Ne,surfaceNormalECEF:H,inputModifier:re,resolvePointQueryCoordinate:Ce});E(Xe,Fr),(ln=L.current)==null||ln.setPreview({pointECEF:Xe.pointECEF,surfaceNormalECEF:Xe.surfaceNormalECEF,lockToPreviewPoint:je},Fr);const mo=((un=(vn=C.current)==null?void 0:vn.isPointQueryPickResultAcceptable)==null?void 0:un.call(vn))??!0,yo=(_n=(Ze=C.current)==null?void 0:Ze.getPointQueryVisualStyle)==null?void 0:_n.call(Ze);(ii=L.current)==null||ii.setVisualStyle(yo!==void 0?yo:mo?null:{color:aT},Fr)}}),g.useEffect(()=>{var F;B||(_(),E(null),(F=C.current)==null||F.setEnabled(!1),M())},[M,_,B,E]),g.useEffect(()=>()=>{_(),E(null)},[_,E]),EA({activePlugin:U,activeToolSession:ne,activeToolType:I,cancelToolId:K,clearInteractionState:D,focusAdjacentAnnotationEntry:a,removeEditedNode:s,removeSelectedAnnotations:i,requestFinishMeasurement:oe,requestModeChange:ae,requestActivateTool:J,sessionContext:V,setActiveToolTypeInStore:r}),null},sT=({registry:e,setActiveToolType:n})=>{const t=se(o=>o.annotationToolType);return g.useEffect(()=>{var r;if(e.getPlugin(t))return;const o=(r=e.orderedDescriptors[0])==null?void 0:r.id;o&&n(o)},[t,e,n]),null},kd=e=>{const n=new Map;return{set:(t,o)=>{n.set(t,o),e()},get:t=>n.get(t),delete:t=>{n.delete(t)&&e()},clear:()=>{n.size!==0&&(n.clear(),e())},forEach:t=>n.forEach(t),get size(){return n.size}}},rn={RIGHTMOST_SCREEN_SPACE:"rightmost-screen-space",LEFTMOST_SCREEN_SPACE:"leftmost-screen-space"},Vt={START_COORDINATE:"start-coordinate",END_COORDINATE:"end-coordinate"},Aa={POINT_LABEL:"point-label",LINE_BLEND:"line-blend"},Nd={INSIDE:"inside",OUTSIDE:"outside"},ct={MIN:1,MAX:1400,LOG_SCALE:64},Id=e=>{if(!Number.isFinite(e)||e<0)return ct.MIN;const n=Math.log2(Math.max(1,e)+1)*ct.LOG_SCALE;return Be(Math.round(ct.MAX-n),ct.MIN,ct.MAX)},hd=Object.freeze({reenterMarginPx:2,candidateSamples:10}),lT=1e-9,Ht=(e,n)=>({x:e,y:n}),uT=(e,n,t,o,r=0)=>{const a=n/2+r,i=t/2+r,s=[Ht(e.x-a,e.y-i),Ht(e.x+a,e.y-i),Ht(e.x+a,e.y+i),Ht(e.x-a,e.y+i)];return s.every(u=>Oa(o,u))&&o.every((u,l)=>s.every((d,c)=>!ym(u,o[(l+1)%o.length],d,s[(c+1)%4],lT)))},dT=e=>{const n=e.map(u=>u.x),t=e.map(u=>u.y),[o,r,a,i]=[Math.min(...n),Math.max(...n),Math.min(...t),Math.max(...t)],s=hd.candidateSamples;return Array.from({length:(s-1)**2},(u,l)=>Ht(o+(r-o)*(l%(s-1)+1)/s,a+(i-a)*(Math.floor(l/(s-1))+1)/s))},cT=({polygon:e,width:n,height:t,previous:o})=>{var c,m;const r={fits:!1,position:null,weights:null};if(!e||e.length<3)return r;const a=sp(e),i=(y,p=0)=>!!y&&uT(y,n,t,e,p);if(o!=null&&o.fits){const y=((c=o.weights)==null?void 0:c.length)===e.length?Bm(o.weights,e):a;if(i(y))return{fits:!0,position:y,weights:o.weights}}const s=o!=null&&o.fits?0:hd.reenterMarginPx;if(a&&i(a,s))return{fits:!0,position:a,weights:null};const u=a??e[0],l=(m=Mm(e))==null?void 0:m.center,d=[...l?[l]:[],...dT(e)].filter(y=>i(y,s)).sort((y,p)=>Math.hypot(y.x-u.x,y.y-u.y)-Math.hypot(p.x-u.x,p.y-u.y))[0];return d?{fits:!0,position:d,weights:Dm(d,e)}:r},mT=.5,yT=e=>({width:(typeof e=="string"?e:String(e??"")).length*8.5,height:18}),Gr=new WeakMap,pT=e=>{if(e.offsetWidth<=0)return null;const n=getComputedStyle(e),t=e.offsetWidth-parseFloat(n.paddingLeft)-parseFloat(n.paddingRight),o=e.offsetHeight-parseFloat(n.paddingTop)-parseFloat(n.paddingBottom);return t>0&&o>0?{width:t,height:o}:null},gT=e=>{const n=e.firstElementChild;if(!n)return null;const t=n.outerHTML,o=Gr.get(n);if((o==null?void 0:o.key)===t)return o.size;const r=pT(n);return r?Gr.set(n,{key:t,size:r}):Gr.delete(n),r},fT=e=>e.coordinateCandidates&&e.coordinateCandidates.length>0?e.coordinateCandidates:[{coordinate:e.coordinate,nodeId:e.nodeId}],AT=(e,n)=>{const t=e.worldToScreen(z(n.coordinate));return t===null?null:{candidate:n,x:t.x,y:t.y}},vT=({engine:e,label:n})=>{var s;const t=fT(n),o=t[0]??{coordinate:n.coordinate,nodeId:n.nodeId};if(!j(e)||!n.coordinateSelection||t.length<=1)return o;const r=t.flatMap(u=>{const l=AT(e,u);return l?[l]:[]});if(r.length===0)return o;const a=n.coordinateSelection===rn.LEFTMOST_SCREEN_SPACE;return((s=r.sort((u,l)=>a?u.x-l.x:l.x-u.x)[0])==null?void 0:s.candidate)??o},TT=(e,n)=>{const t=e.nodeId?n.get(e.nodeId):void 0;return t?Qn(t):e.coordinate},On=Object.freeze({layoutConfig:Tm(void 0),markerPixelSize:10,markerOutlineWidth:Z.sizes.pointOutlineWidth,stemColor:Z.colors.surface,activeMoveGizmoLabelZIndex:ct.MAX+1}),va=()=>({screenPosition:null,isInViewport:!1,isHidden:!0,isOccluded:!1,hiddenByLayout:!0,angleRad:0,distance:On.layoutConfig.stemDistance,attach:"center",zIndex:0}),jr=(e,n)=>`${e}-${n}`,Sd=e=>e.hideMarker!==!0,Cd=(e,n)=>({isOccluded:n,opacity:n?e.areaFit?mT:Zs:1}),Ed=e=>({markerSize:e.markerPixelSize??On.markerPixelSize,markerStrokeWidth:e.markerOutlineWidth??On.markerOutlineWidth}),bT=({label:e,overlayState:n,areaLabelSurfaceBlendMode:t,markerInScene:o=!1})=>{const{markerSize:r,markerStrokeWidth:a}=Ed(e),i=n.isHidden||n.hiddenByLayout,s=e.hideMarker===!0||o&&Sd(e);return{pointId:e.id,content:e.content,badgeContent:e.badgeContent,selected:e.selected,hideLabelAndStem:e.hideLabelAndStem,hideStem:o,hideMarker:s,markerSize:r,markerStrokeWidth:a,stemStartDistance:e.stemStartDistance??(e.hideMarker?0:r/2+a/2),markerBackgroundColor:e.markerBackgroundColor,markerTextColor:e.markerTextColor,lineColor:e.lineColor??On.stemColor,labelStyle:e.labelStyle,collapse:e.collapse,textBackgroundColor:e.textBackgroundColor,textColor:e.textColor,selectedBackgroundColor:e.selectedBackgroundColor,selectedTextColor:e.selectedTextColor,selectedGlowColor:e.selectedGlowColor,selectedGlowRadiusPx:e.selectedGlowRadiusPx,preserveFillOnSelection:e.preserveFillOnSelection,hoverBackgroundColor:e.hoverBackgroundColor,textShadow:e.textShadow,fontSize:e.fontSize,fontFamily:e.fontFamily,fontWeight:e.fontWeight,mixBlendMode:e.mixBlendMode??(e.anchorKind===ul.AREA_CENTROID?t:void 0),onClick:e.onClick,onDoubleClick:e.onDoubleClick,onHoverChange:e.onHoverChange,onLongPress:e.onLongPress,markerOnlyPointerEvents:e.markerOnlyPointerEvents,longPressDurationMs:e.longPressDurationMs,longPressOnlyOnMarker:!!e.onLongPress&&!!e.hideLabelAndStem,renderHiddenMarkerInteractionTarget:!!(e.onLongPress&&e.markerOnlyPointerEvents===!0)||s&&e.hideMarker!==!0,screenPosition:i?null:n.screenPosition,angleRad:n.angleRad,distance:n.distance,attach:n.attach,isOccluded:n.isOccluded,visible:!i,zIndex:n.zIndex}},Hr=Object.freeze({viewportPaddingHorizontal:12,viewportPaddingVertical:8,occlusionToleranceMeters:1}),kT=()=>({screenPosition:null,isInViewport:!1,isHidden:!0,isOccluded:!1}),NT=e=>(e==null?void 0:e.getFrameKey())??null,Od=e=>(e==null?void 0:e.captureProjectionSnapshot())??null,Ld=$p,Rd=({engine:e,coordinate:n,shouldTestVisibility:t=!0,shouldTestOcclusion:o=!0,viewportPaddingHorizontal:r=Hr.viewportPaddingHorizontal,viewportPaddingVertical:a=Hr.viewportPaddingVertical,occlusionToleranceMeters:i=Hr.occlusionToleranceMeters})=>j(e)?e.projectPoint(z(n),{shouldTestVisibility:t,shouldTestOcclusion:o,viewportPaddingHorizontal:r,viewportPaddingVertical:a,occlusionToleranceMeters:i}):kT(),IT={placements:{},hiddenByLayout:new Set,collapsedToCompact:new Set},hT=new x,zr=(e,n="")=>typeof e=="string"||typeof e=="number"?String(e):n,ST=({engine:e,labels:n,areaLabelSizeById:t,areaLabelFitByKey:o})=>{const r=new Map;return n.forEach(a=>{var l;if(((l=a.areaFit)==null?void 0:l.role)!==Nd.INSIDE)return;const i=[];for(const d of a.areaFit.outline){const c=e.worldToScreen(z(d));if(!c)break;i.push({x:c.x,y:c.y})}const s=t.get(a.id)??yT(a.content),u=cT({polygon:i.length===a.areaFit.outline.length?i:null,width:s.width,height:s.height,previous:o.get(a.areaFit.key)});r.set(a.areaFit.key,u),o.set(a.areaFit.key,u)}),r},CT=(e,n,t)=>{if(!e.areaFit)return n;const o=t.get(e.areaFit.key);return e.areaFit.role===Nd.INSIDE?o!=null&&o.fits&&o.position?{...n,screenPosition:o.position}:{...n,isHidden:!0}:o!=null&&o.fits?{...n,isHidden:!0}:n},ET=(e,n,t)=>({id:e.id,anchor:t,anchorKind:e.anchorKind,text:zr(e.content),compactText:zr(e.badgeContent,zr(e.content)),index:n,...e.preferredAttach!==void 0?{lockPreferredPlacement:!0,preferredAttach:e.preferredAttach}:{},...e.selected?{layoutPriority:Number.MAX_SAFE_INTEGER,lockPreferredPlacement:!0}:{}}),OT=({engine:e,labels:n,liveAnchors:t,isInPreviewNodeLink:o,previousStatesById:r,isCameraMoving:a,areaLabelSizeById:i,areaLabelFitByKey:s})=>{const u=new Map;if(!j(e))return u;const l=N=>N.hideLabelAndStem!==!0&&(o==null?void 0:o(N.nodeId))===!0,d=a&&e.capabilities.occlusionPerFrame!==!0||t.size>0,c=!d&&n.some(l),m=e.getCameraPitchRad(),y=e.getCameraPositionECEF(hT),p=ST({engine:e,labels:n,areaLabelSizeById:i,areaLabelFitByKey:s}),f=[],A=new Map,v=new Map,b=new Map,T=new Set;n.forEach((N,h)=>{var _;const S=l(N);S&&T.add(N.id);const k=TT(vT({engine:e,label:N}),t),C=Rd({engine:e,coordinate:k,shouldTestOcclusion:!d&&(N.areaFit!==void 0||bm({anchorKind:N.anchorKind,occlusionMode:N.occlusionMode}))}),L=d?{...C,isOccluded:((_=r.get(N.id))==null?void 0:_.isOccluded)??!1}:C,R=CT(N,L,p),E=z(k),w=y?y.distanceTo(E):Number.NaN;A.set(N.id,R),b.set(N.id,E),v.set(N.id,S?On.activeMoveGizmoLabelZIndex:Id(w)),!(!R.screenPosition||R.isHidden||N.hideLabelAndStem||S||c&&r.has(N.id))&&f.push(ET(N,h,R.screenPosition))});const I=f.length>0?km({points:f,viewportWidth:Math.max(1,e.canvas.clientWidth),viewportHeight:Math.max(1,e.canvas.clientHeight),cameraPitch:typeof m=="number"?m:0,config:On.layoutConfig}):IT;return n.forEach(N=>{const h=r.get(N.id),S=T.has(N.id),k=I.placements[N.id],C=S?h:c?h??k:k,L=N.hideLabelAndStem||S?!1:c?(h==null?void 0:h.hiddenByLayout)??I.hiddenByLayout.has(N.id):I.hiddenByLayout.has(N.id);u.set(N.id,{...A.get(N.id)??va(),hiddenByLayout:L,angleRad:(C==null?void 0:C.angleRad)??(h==null?void 0:h.angleRad)??0,distance:(C==null?void 0:C.distance)??(h==null?void 0:h.distance)??On.layoutConfig.stemDistance,attach:(C==null?void 0:C.attach)??(h==null?void 0:h.attach)??"center",zIndex:v.get(N.id)??0,anchorECEF:b.get(N.id)})}),u},LT=({state:e,lineLabelOptions:n,surfaceBlendMode:t})=>[Aa.LINE_BLEND,Js(e),n.appearance.themeStyle,n.background.style,n.text.fontFamily,n.text.fontWeight,t??""].join(":"),RT=({elementDiv:e,state:n})=>!n.screenPosition||n.visible===!1?!1:(e.style.left=`${n.screenPosition.x}px`,e.style.top=`${n.screenPosition.y}px`,e.style.transform="translate(-50%, -50%)",e.style.zIndex=`${n.zIndex??0}`,e.style.opacity=n.isOccluded?"0.75":"1",!0),ni="transparent",wd=e=>({...e,scale:tn.hover.scale,ring:{widthPx:tn.hover.ringSpreadPx,color:tn.colors.hoverRing}}),wT=e=>{const n={sizePx:e.pixelSize,fill:e.fill,outline:e.outline,outlineWidthPx:e.outlineWidth};return{style:n,hoverStyle:wd(n)}},xT=e=>({sizePx:e.markerSize,fill:ni,outline:e.selected?e.selectedGlowColor??e.selectedTextColor??tn.colors.surfaceMax:tn.colors.surfaceMax,outlineWidthPx:e.markerStrokeWidth,ring:{widthPx:tn.shadow.markerBlurRadiusPx,color:tn.colors.shadowSoft,soft:!0}}),qT=e=>{const n={sizePx:e.tickWidthPx,barLengthPx:e.tickLengthPx,fill:e.tickColor,outline:ni,outlineWidthPx:0};return{style:n,hoverStyle:wd(n)}},_T=(e,n)=>({sizePx:e,fill:n,outline:ni,outlineWidthPx:0}),xd=(e,n,t)=>(n?e.get(n):void 0)??t,PT=(e,n,t,o)=>e.map(r=>{const a=z(r.coordinate);return{id:r.id,...wT(r),place:()=>({positionECEF:xd(n,r.nodeId,a),hovered:t.has(r.id),occluded:o(r.id)})}}),MT=(e,n,t)=>e.map(o=>{const r=z(o.coordinate);return{id:`${o.id}-marker`,style:xT(o),place:()=>{const a=t(o.id);if(!(a!=null&&a.visible))return null;const i=Cd(o,a.isOccluded);return{positionECEF:a.anchorECEF??xd(n,o.nodeId,r),occluded:i.isOccluded,opacity:i.opacity}}}}),qd=(e,n)=>({...n!=null&&n.hovered&&e.hoverStyle?e.hoverStyle:e.style,occluded:(n==null?void 0:n.occluded)===!0,opacity:(n==null?void 0:n.opacity)??1}),pr=e=>(e==null?void 0:e.capabilities.occludedLinesInScene)===!0&&typeof e.createMarkerCollection=="function",DT=new x,vs=e=>{var n,t,o;return e?[e.sizePx,e.fill,e.outline,e.outlineWidthPx,e.barLengthPx??0,e.scale??1,((n=e.ring)==null?void 0:n.widthPx)??0,((t=e.ring)==null?void 0:t.color)??"",((o=e.ring)==null?void 0:o.soft)===!0].join("|"):""},_d=(e,n)=>[n!=null&&n.hovered&&e.model.hoverStyle?e.hoverStyleSignature:e.styleSignature,(n==null?void 0:n.occluded)===!0,(n==null?void 0:n.opacity)??1].join("|"),Ur=e=>{const n=e.model.place();n&&e.handle.setPosition(n.positionECEF,n.acrossECEF),e.handle.setVisible(n!==null);const t=_d(e,n);t!==e.appliedSignature&&(e.handle.setStyle(qd(e.model,n)),e.appliedSignature=t)},ti=(e,n)=>{const t=g.useRef(null),o=g.useRef(new Map);g.useEffect(()=>{if(!j(e)||!pr(e))return;const r=e.createMarkerCollection();t.current=r;const a=o.current;return()=>{a.clear(),t.current=null,j(e)&&r.destroy()}},[e]),g.useEffect(()=>{const r=t.current,a=o.current;if(!j(e)||!r)return;const i=new Set(n.map(s=>s.id));a.forEach((s,u)=>{i.has(u)||(s.handle.destroy(),a.delete(u))}),n.forEach(s=>{const u=vs(s.style),l=vs(s.hoverStyle),d=a.get(s.id);if(d){d.model=s,d.styleSignature=u,d.hoverStyleSignature=l,Ur(d);return}const c=s.place(),m={model:s,styleSignature:u,hoverStyleSignature:l},y={...m,handle:r.addMarker({...qd(s,c),id:s.id,positionECEF:(c==null?void 0:c.positionECEF)??DT,acrossECEF:c==null?void 0:c.acrossECEF,visible:c!==null}),appliedSignature:_d(m,c)};a.set(s.id,y),Ur(y)}),e.requestRender()},[e,n]),g.useEffect(()=>{if(j(e))return e.subscribePreRender(()=>{try{o.current.forEach(Ur)}catch{}})},[e])},Ts=Object.freeze({widthPx:1,occludedDash:Object.freeze({dashPx:3,gapPx:3})}),BT=(e,n,t,o)=>{const r=e.getPickRay(n);if(!r)return null;const a=r.direction.dot(o);if(!(Math.abs(a)>1e-9))return null;const i=new x().subVectors(t,r.origin).dot(o)/a;return i>0?r.origin.clone().addScaledVector(r.direction,i):null},FT=(e,n,t)=>{const o=e.worldToScreen(n),r=o?e.getPickRay(o):null;if(!o||!r)return null;const a=u=>BT(e,{x:o.x+u.x,y:o.y+u.y},n,r.direction),i=a(t.start),s=a(t.end);return i&&s?[i,s]:null},bs=(e,{isOccluded:n,opacity:t})=>({color:e,width:Ts.widthPx,overlay:!0,halo:!1,opacity:t,...n?{dash:Ts.occludedDash}:{}}),ks=[],GT=(e,n,t)=>{const o=g.useRef(t);o.current=t;const r=g.useRef(null),a=g.useRef(new Map);g.useEffect(()=>{if(!j(e))return;const i=e.createLineCollection();r.current=i;const s=a.current,u=e.subscribePreRender(()=>{s.forEach((l,d)=>{const c=o.current(d),m=c?FT(e,c.anchorECEF,c.segment):null;if(!c||!m){l.line.setPositions(ks);return}const y=`${c.isOccluded}:${c.opacity}`;y!==l.styleKey&&(l.line.setStyle(bs(l.color,c)),l.styleKey=y),l.line.setPositions(m)})});return()=>{u(),j(e)&&(s.forEach(l=>l.line.destroy()),i.destroy()),s.clear(),r.current=null}},[e]),g.useEffect(()=>{const i=r.current;if(!i||!j(e))return;const s=a.current,u=new Map(n.map(l=>[l.id,l.lineColor??On.stemColor]));s.forEach((l,d)=>{u.get(d)!==l.color&&(l.line.destroy(),s.delete(d))}),u.forEach((l,d)=>{s.has(d)||s.set(d,{line:i.addLine({id:`${d}-stem`,positions:ks,...bs(l,{isOccluded:!1,opacity:1})}),color:l,styleKey:"false:1"})}),e.requestRender()},[e,n])},Pd=({engine:e,liveAnchors:n,updatePositions:t,computeStates:o,createEmptyState:r})=>{const a=g.useRef({frameKey:null,sceneSnapshot:null,statesById:new Map}),i=g.useRef(!1),s=g.useRef(!1),u=g.useCallback((c=!1)=>{a.current={frameKey:null,sceneSnapshot:null,statesById:c?new Map:a.current.statesById}},[]);g.useEffect(()=>{if(!j(e)){i.current=!1;return}const c=e.subscribeCameraMove({onMoveStart:()=>{i.current=!0,u()},onMoveEnd:()=>{i.current=!1,u(),t(),e.requestRender()}});return()=>{i.current=!1,c()}},[e,u,t]);const l=g.useCallback(c=>{const m=NT(e);if(a.current.frameKey!==m){const y=Od(e),p=n.size>0,f=s.current&&!p;s.current=p;const A=p||f||!Ld(a.current.sceneSnapshot,y);a.current={frameKey:m,sceneSnapshot:y,statesById:A?o({previousStatesById:a.current.statesById,isCameraMoving:i.current}):a.current.statesById}}return a.current.statesById.get(c)??r()},[o,r,e,n]),d=g.useCallback(c=>a.current.statesById.get(c),[]);return{resolveState:l,readCachedState:d,invalidate:u}},jT=e=>e.stem.isConnected&&e.stemLine.isConnected&&e.labelRoot.isConnected&&e.pointLabelRoot.isConnected,HT=(e,n,t,o,r="runtime-point-label",a=Pe)=>{const{setLabelOverlayElement:i,removeLabelOverlayElement:s,invalidatePositions:u,updatePositions:l}=Yo(),d=g.useRef(n),c=g.useRef(new Set),m=g.useRef(new Map),y=g.useRef(new Map),p=g.useRef(new Map),f=pr(e),A=f?u:l,v=g.useRef(new Map),b=g.useCallback(({previousStatesById:L,isCameraMoving:R})=>OT({engine:e,labels:d.current,liveAnchors:t,isInPreviewNodeLink:o,previousStatesById:L,isCameraMoving:R,areaLabelSizeById:p.current,areaLabelFitByKey:y.current}),[e,o,t]),{resolveState:T,readCachedState:I,invalidate:N}=Pd({engine:e,liveAnchors:t,updatePositions:A,computeStates:b,createEmptyState:va});g.useEffect(()=>{d.current=n,N(),A(),e==null||e.requestRender()},[e,N,o,n,A]);const h=g.useMemo(()=>n.filter(L=>!L.hideLabelAndStem||L.markerOnlyPointerEvents===!0&&(!!L.onClick||!!L.onHoverChange||!!L.onLongPress)),[n]),S=g.useCallback((L,R)=>{const E=m.current.get(L);if(E&&jT(E))return E;const w=Wy(R);return w?(m.current.set(L,w),w):null},[]);g.useEffect(()=>{let L=!1;const R=new Set;h.forEach(E=>{var G;const w=E.renderStyle===Aa.LINE_BLEND,_=E.mixBlendMode??iv(a),M=U=>bT({label:E,overlayState:U,areaLabelSurfaceBlendMode:_,markerInScene:f}),q=M(I(E.id)??va()),D=w?LT({state:q,lineLabelOptions:a,surfaceBlendMode:_}):Js(q);R.add(E.id);const $=U=>{const K=M(T(E.id)),ae=Cd(E,K.isOccluded===!0);if(w){const oe=RT({elementDiv:U,state:K});if(E.areaFit){oe&&(U.style.opacity=`${ae.opacity}`);const me=gT(U);me&&p.current.set(E.id,me)}return oe}const J=S(E.id,U);if(!J)return!1;const W=Jy({elementDiv:U,domRefs:J,state:K});if(f&&!K.hideLabelAndStem){const oe=W?Zy({domRefs:J,state:K}):null;oe?v.current.set(E.id,{segment:oe,...ae}):v.current.delete(E.id)}return W&&(J.pointLabelRoot.style.opacity=`${ae.opacity}`),W},V=w?O.jsx(ed,{content:q.content,selected:q.selected,textColor:q.textColor,fontSize:q.fontSize,styleOptions:mv,visualOptions:a,surfaceBlendMode:_,onClick:q.onClick,onDoubleClick:q.onDoubleClick,onLongPress:q.onLongPress,longPressDurationMs:q.longPressDurationMs}):om(q);c.current.has(E.id)||(L=!0,m.current.delete(E.id)),i({id:jr(r,E.id),contentKey:D,content:V,zIndex:((G=I(E.id))==null?void 0:G.zIndex)??0,updatePosition:$})}),c.current.forEach(E=>{R.has(E)||(L=!0,m.current.delete(E),v.current.delete(E),s(jr(r,E)))}),c.current=R,A(),L&&(e==null||e.requestRender())},[i,e,f,h,r,a,I,s,T,S,A]),g.useEffect(()=>()=>{c.current.forEach(L=>{s(jr(r,L))}),c.current.clear(),m.current.clear(),v.current.clear()},[r,s]);const k=g.useCallback(L=>{const R=I(L);return R&&R.screenPosition&&!R.isHidden&&!R.hiddenByLayout?R:null},[I]),C=g.useMemo(()=>{if(!f)return{markers:[],stemLabels:[]};const L=h.filter(R=>R.renderStyle!==Aa.LINE_BLEND);return{markers:MT(L.filter(Sd).map(R=>({...R,...Ed(R)})),t,R=>{const E=k(R);return{visible:E!==null,anchorECEF:E==null?void 0:E.anchorECEF,isOccluded:(E==null?void 0:E.isOccluded)===!0}}),stemLabels:L.filter(R=>R.hideLabelAndStem!==!0)}},[f,t,h,k]);ti(e,C.markers),GT(f?e:null,C.stemLabels,L=>{var w;const R=(w=k(L))==null?void 0:w.anchorECEF,E=v.current.get(L);return R&&E?{anchorECEF:R,...E}:null})},zT=()=>({screenPosition:null,isInViewport:!1,isHidden:!0,isOccluded:!1}),UT=Object.freeze({longPressDurationMs:320}),Vr=(e,n)=>`${e}-${n}`,VT=e=>[e.id,e.pixelSize,e.fill,e.outline,e.outlineWidth,`${e.longPressDurationMs??""}`,vr(e.onClick),vr(e.onHoverChange),vr(e.onLongPress)].join(":"),Md=({interactive:e,hitAreaOnly:n=!1,onClick:t,onHoverChange:o,onLongPress:r,longPressDurationMs:a=UT.longPressDurationMs,markerStyle:i})=>{const[s,u]=g.useState(!1),l=s&&!n,d=g.useRef(void 0),c=g.useRef(!1),m=g.useCallback(()=>{d.current!==void 0&&(window.clearTimeout(d.current),d.current=void 0)},[]),y=g.useCallback(v=>{if(v.stopPropagation(),v.button!==0||!r){m();return}c.current=!1,m(),d.current=window.setTimeout(()=>{c.current=!0,r()},a)},[m,a,r]),p=g.useCallback(v=>{if(v.stopPropagation(),c.current){c.current=!1;return}t==null||t()},[t]),f=g.useCallback(()=>{u(!0),o==null||o(!0)},[o]),A=g.useCallback(()=>{m(),u(!1),o==null||o(!1)},[m,o]);return g.useEffect(()=>m,[m]),O.jsx("div",{"data-runtime-point-marker-shell":"true",style:{position:"relative",width:"0px",height:"0px",overflow:"visible",pointerEvents:"none"},children:O.jsx("div",{"data-runtime-point-marker-circle":"true",style:{position:"absolute",left:"0px",top:"0px",transform:l?`translate(-50%, -50%) scale(${tn.hover.scale})`:"translate(-50%, -50%)",borderRadius:"999px",boxSizing:"border-box",pointerEvents:e?"auto":"none",cursor:e?"pointer":"default",transition:el(),boxShadow:l?nl():"none",filter:l?tl():"none",...i},onClick:e?p:void 0,onMouseDown:e?y:void 0,onMouseUp:e?m:void 0,onMouseEnter:e?f:void 0,onMouseLeave:e?A:void 0})})},$T=(e,n,t,o="runtime-point-marker")=>{const{setLabelOverlayElement:r,removeLabelOverlayElement:a,invalidatePositions:i,updatePositions:s}=Yo(),u=g.useRef(n),l=g.useRef(new Set),d=pr(e),c=d?i:s,m=g.useRef(new Set),y=g.useCallback(({previousStatesById:b,isCameraMoving:T})=>{const I=new Map,N=T&&(e==null?void 0:e.capabilities.occlusionPerFrame)!==!0||t.size>0;return u.current.forEach(h=>{var C;const S=h.nodeId?t.get(h.nodeId):void 0,k=Rd({engine:e,coordinate:S?Qn(S):h.coordinate,shouldTestOcclusion:!N});I.set(h.id,N?{...k,isOccluded:((C=b.get(h.id))==null?void 0:C.isOccluded)??!1}:k)}),I},[e,t]),{resolveState:p,readCachedState:f,invalidate:A}=Pd({engine:e,liveAnchors:t,updatePositions:c,computeStates:y,createEmptyState:zT});g.useEffect(()=>{u.current=n,A(!0),c(),e==null||e.requestRender()},[n,e,A,c]),g.useEffect(()=>{const b=new Set;n.forEach(T=>{const I=Vr(o,T.id);b.add(T.id);const N=!!(T.onClick||T.onHoverChange||T.onLongPress),h=d&&N?k=>{var C;k?m.current.add(T.id):m.current.delete(T.id),e==null||e.requestRender(),(C=T.onHoverChange)==null||C.call(T,k)}:T.onHoverChange,S={id:I,zIndex:ol.zIndex.pointMarker,contentKey:`${VT(T)}:${d}`,content:O.jsx(Md,{interactive:N,hitAreaOnly:d,onClick:T.onClick,onHoverChange:h,onLongPress:T.onLongPress,longPressDurationMs:T.longPressDurationMs}),updatePosition:k=>{const C=p(T.id);if(!C.screenPosition||C.isHidden)return!1;let L=C.screenPosition;const R=T.nodeId?t.get(T.nodeId):void 0;if(R&&j(e)){const w=e.worldToScreen(R);w!==null&&(L={x:w.x,y:w.y})}k.style.left=`${L.x}px`,k.style.top=`${L.y}px`,k.style.transform="none";const E=k.querySelector('[data-runtime-point-marker-circle="true"]');return E?(E.style.width=`${T.pixelSize}px`,E.style.height=`${T.pixelSize}px`,d?(E.style.background="transparent",E.style.border="none",!0):(E.style.background=T.fill,E.style.border=`${T.outlineWidth}px ${C.isOccluded?"dotted":"solid"} ${T.outline}`,!0)):!1}};r(S)}),l.current.forEach(T=>{b.has(T)||(m.current.delete(T),a(Vr(o,T)))}),l.current=b,c(),e==null||e.requestRender()},[r,e,d,t,o,n,a,p,c]),g.useEffect(()=>()=>{l.current.forEach(b=>{a(Vr(o,b))}),l.current.clear()},[o,a]);const v=g.useMemo(()=>d?PT(n,t,m.current,b=>{var T;return((T=f(b))==null?void 0:T.isOccluded)===!0}):[],[d,t,n,f]);ti(e,v)};Md.__docgenInfo={description:"",methods:[],displayName:"PointMarkerOverlayShell",props:{interactive:{required:!0,tsType:{name:"boolean"},description:""},hitAreaOnly:{required:!1,tsType:{name:"boolean"},description:"The engine draws the marker: only the invisible hit area, without hover visuals.",defaultValue:{value:"false",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onHoverChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(hovered: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"hovered"}],return:{name:"void"}}},description:""},onLongPress:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},longPressDurationMs:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"pointMarkerVisualizerDefaults.longPressDurationMs",computed:!0}},markerStyle:{required:!1,tsType:{name:"CSSProperties"},description:""}}};const Dd=({directLabelText:e,verticalLabelText:n,horizontalLabelText:t})=>({showVerticalLabel:n!==null&&n!==e,showHorizontalLabel:t!==null&&t!==e}),bt=()=>({auxiliaryPoint:new x,auxiliaryScreen:{x:0,y:0}}),Bd=({anchorPointECEF:e,targetPointECEF:n,scratch:t})=>{const o=_o(e),r=_o(n);return!Number.isFinite(o.longitude)||!Number.isFinite(o.latitude)||!Number.isFinite(r.altitude)?null:Us(o.longitude,o.latitude,r.altitude,t.auxiliaryPoint)},pS=({firstCorner:e,oppositeCorner:n})=>{const t=z(e),o=z(n),r=Kl(t,o);return r?[t,r.adjacentHorizontalCorner,o,r.adjacentVerticalCorner,t]:null},an=(e,n,t)=>{const o=n?e.get(n):void 0;return o?o.clone():z(t)},Fd=({overlay:e})=>e.anchorCoordinateRole!==Vt.END_COORDINATE,Ns=(e,n)=>e.startNodeId!==void 0&&n.get(e.startNodeId)!==void 0||e.endNodeId!==void 0&&n.get(e.endNodeId)!==void 0,Ro=(e,n,t)=>{const o=e.distanceTriangleOverlay;if(!o||!e.startCoordinate||!e.endCoordinate)return null;const r=an(n,e.startNodeId,e.startCoordinate),a=an(n,e.endNodeId,e.endCoordinate),i=Fd({overlay:o}),s=i?r:a,u=i?a:r,l=Bd({anchorPointECEF:s,targetPointECEF:u,scratch:t});return l?{anchorECEF:s,auxiliaryECEF:l.clone(),targetECEF:u}:null},Gd=({engine:e,edge:n,scratch:t,previousOutsideSigns:o,formatOptions:r,liveAnchors:a})=>{const i=n.distanceTriangleOverlay;if(!i||!n.startCoordinate||!n.endCoordinate)return null;const s=an(a,n.startNodeId,n.startCoordinate),u=an(a,n.endNodeId,n.endCoordinate),l=e.worldToScreen(s),d=e.worldToScreen(u);if(l===null||d===null)return null;const c=xe(l),m=xe(d),y=Fd({overlay:i}),p=y?n.startCoordinate:n.endCoordinate,f=y?n.endCoordinate:n.startCoordinate,A=y?s:u,v=y?u:s,b=y?c:m,T=y?m:c,I=Bd({anchorPointECEF:A,targetPointECEF:v,scratch:t});if(!I)return null;const N=e.worldToScreen(I,t.auxiliaryScreen);if(N===null)return null;const h=xe(N),S=ip({anchor:b,target:T,aux:h,anchorAltitudeMeters:p.altitude,targetAltitudeMeters:f.altitude,previousOutsideSigns:o}),k=yt(A.distanceTo(v),r.lengthMeters),C=A.distanceTo(I),L=I.distanceTo(v),R=C>Se.geometryEpsilonMeters?yt(C,r.lengthMeters):null,E=L>Se.geometryEpsilonMeters?yt(L,r.lengthMeters):null,w=Dd({directLabelText:k,verticalLabelText:R,horizontalLabelText:E});return{anchorPointECEF:A,targetPointECEF:v,auxiliaryPointECEF:I,anchorScreenPosition:b,targetScreenPosition:T,auxiliaryScreenPosition:h,directLabelText:k,verticalLabelText:R,horizontalLabelText:E,showVerticalLabel:w.showVerticalLabel,showHorizontalLabel:w.showHorizontalLabel,directOutsideReferencePoint:S.directOutsideReferencePoint,verticalOutsideReferencePoint:S.verticalOutsideReferencePoint,horizontalOutsideReferencePoint:S.horizontalOutsideReferencePoint,nextOutsideSigns:S.nextOutsideSigns}},WT=({edgeSegments:e,engine:n,formatOptions:t,liveAnchors:o,occludedLinesInScene:r,surfaceKey:a,activeEditedNodeId:i,blockEdgeInteractions:s,onEdgeClick:u,onAnnotationSelect:l})=>e.flatMap(d=>{var v;const c=i&&d.startNodeId&&d.endNodeId&&u?()=>u(d.startNodeId,d.endNodeId):void 0,m=!s&&l&&((v=d.distanceTriangleOverlay)!=null&&v.annotationId)?()=>l(d.distanceTriangleOverlay.annotationId):void 0,y=c??m,p=r&&d.overlayDashed?[]:Tr({id:`${a}-runtime-edge-overlay-${d.id}`,getSvgLine:()=>{if(!j(n))return null;const b=n.worldToScreen(an(o,d.startNodeId,d.startCoordinate)),T=n.worldToScreen(an(o,d.endNodeId,d.endCoordinate));return b===null||T===null?null:{start:xe(b),end:xe(T)}},stroke:d.stroke,strokeWidth:d.strokeWidth,dashed:d.overlayDashed,dashPattern:d.overlayDashPattern,hitTargetStrokeWidth:10,onLineClick:y});if(!d.distanceTriangleOverlay||d.distanceTriangleOverlay.showComponents===!1||!j(n)||r)return p;const f=bt(),A=()=>Gd({engine:n,edge:d,scratch:f,formatOptions:t,liveAnchors:o});return[...p,...Tr({id:`${a}-runtime-edge-overlay-${d.id}-vertical`,getSvgLine:()=>{const b=A();return!b||!b.verticalLabelText?null:{start:b.anchorScreenPosition,end:b.auxiliaryScreenPosition}},stroke:Se.verticalLineColor,strokeWidth:d.strokeWidth,dashed:!0,dashPattern:d.overlayDashPattern,hitTargetStrokeWidth:8,onLineClick:y}),...Tr({id:`${a}-runtime-edge-overlay-${d.id}-horizontal`,getSvgLine:()=>{const b=A();return!b||!b.horizontalLabelText?null:{start:b.auxiliaryScreenPosition,end:b.targetScreenPosition}},stroke:Se.horizontalLineColor,strokeWidth:d.strokeWidth,dashed:!0,dashPattern:d.overlayDashPattern,hitTargetStrokeWidth:8,onLineClick:y})]}),YT=({edgeSegments:e,engine:n,formatOptions:t,liveAnchors:o,occludedLinesInScene:r})=>e.flatMap(a=>{const i={id:a.id,start:z(a.startCoordinate),end:z(a.endCoordinate),stroke:a.stroke,strokeWidth:a.strokeWidth,occludedDashed:r&&a.overlayDashed===!0,ruler:a.ruler===!0,rulerStartMeters:a.rulerStartMeters,startNodeId:a.startNodeId,endNodeId:a.endNodeId};if(!j(n)||!a.distanceTriangleOverlay||a.distanceTriangleOverlay.showComponents===!1)return[i];const s=bt(),u=Ro(a,o,s);if(!u)return[i];const l=f=>f>Se.geometryEpsilonMeters?yt(f,t.lengthMeters):null,d=l(u.anchorECEF.distanceTo(u.auxiliaryECEF)),c=l(u.auxiliaryECEF.distanceTo(u.targetECEF)),m=Dd({directLabelText:yt(u.anchorECEF.distanceTo(u.targetECEF),t.lengthMeters),verticalLabelText:d,horizontalLabelText:c}),y={anchorPointECEF:u.anchorECEF,auxiliaryPointECEF:u.auxiliaryECEF,targetPointECEF:u.targetECEF,verticalLabelText:d,horizontalLabelText:c,showVerticalLabel:m.showVerticalLabel,showHorizontalLabel:m.showHorizontalLabel},p=[];if(y.showVerticalLabel&&y.verticalLabelText){const f=bt();p.push({id:`${a.id}-vertical`,halo:!1,start:y.anchorPointECEF,end:y.auxiliaryPointECEF,stroke:Se.verticalLineColor,strokeWidth:a.strokeWidth,occludedDashed:r,ruler:a.ruler===!0,recompute:A=>{if(!Ns(a,A))return null;const v=Ro(a,A,f);return v?[v.anchorECEF,v.auxiliaryECEF]:null}})}if(y.showHorizontalLabel&&y.horizontalLabelText){const f=bt();p.push({id:`${a.id}-horizontal`,halo:!1,start:y.auxiliaryPointECEF,end:y.targetPointECEF,stroke:Se.horizontalLineColor,strokeWidth:a.strokeWidth,occludedDashed:r,ruler:a.ruler===!0,recompute:A=>{if(!Ns(a,A))return null;const v=Ro(a,A,f);return v?[v.auxiliaryECEF,v.targetECEF]:null}})}return[i,...p]}),Is=e=>{var n;return((n=e.distanceTriangleOverlay)==null?void 0:n.annotationId)??e.id},KT=e=>e.flatMap(n=>{var i,s;const t=[],o=Number.isFinite(n.strokeWidth)?n.strokeWidth:Z.sizes.edgeStrokeWidth,r=n.overlayDashPattern??Z.patterns.edgeDashPattern;let a=0;for(let u=0;u<n.coordinates.length-1;u+=1){const l=n.coordinates[u],d=n.coordinates[u+1];if(!l||!d)continue;const c=a;a+=z(l).distanceTo(z(d));const m=(i=n.nodeIds)==null?void 0:i[u],y=((s=n.nodeIds)==null?void 0:s[u+1])??(n.nodeIds&&n.coordinates.length===n.nodeIds.length+1&&u===n.nodeIds.length-1?n.nodeIds[0]:void 0);t.push({id:`${n.id}-${u}`,annotationId:n.annotationId,startNodeId:m,endNodeId:y,startCoordinate:l,endCoordinate:d,stroke:n.stroke,strokeWidth:o,overlayDashPattern:r,...n.overlayDashed?{overlayDashed:!0}:{},...n.ruler?{ruler:!0,rulerStartMeters:c}:{},...n.showSegmentLengthLabels?{showSegmentLengthLabels:!0}:{},distanceTriangleOverlay:u===0?n.distanceTriangleOverlay:void 0})}return t}),De=Object.freeze({pointLabelCollisionSelector:'[data-pillbutton-root="true"], [data-point-label-content-root="true"]',svgNamespace:"http://www.w3.org/2000/svg",distanceTriangle:Object.freeze({cornerDotRadiusPx:1.25/2}),midpointMarker:Object.freeze({...rm({markerDiameterPx:Z.sizes.pointPixelSize,markerStrokeWidthPx:Z.sizes.pointOutlineWidth}),tickColor:tn.colors.surfaceStrong,minOverlayZIndex:ol.zIndex.interactionHandleFloor})}),de=Object.freeze({cornerOverlay:Object.freeze({minBoxPx:20,paddingPx:6,targetRadiusPx:20,segments:20,strokeWidthPx:1.25,color:dp(),straightHitTargetPx:20,fallbackFovRad:$s})}),Ta=e=>`annotation-overlay-distance-triangle-label-layer-${e}`,QT=[],XT=qT(De.midpointMarker),ZT=(e,n,t)=>e.map(o=>{const r=z(o.startCoordinate),a=z(o.endCoordinate),i=new x,s=new x;return{id:`${o.id}-insert-tick`,...XT,place:()=>{const u=o.startNodeId&&n.get(o.startNodeId)||r,l=o.endNodeId&&n.get(o.endNodeId)||a;return{positionECEF:i.addVectors(u,l).multiplyScalar(.5),acrossECEF:s.subVectors(l,u),hovered:t.has(o.id)}}}}),JT=({anchorECEF:e,auxiliaryECEF:n,targetECEF:t},o)=>{const r=gt.referenceLineEpsilonMeters;if(e.distanceTo(n)<=r||n.distanceTo(t)<=r)return e.distanceTo(t)<=r?null:{arc:null,dot:new x().addVectors(e,t).multiplyScalar(.5)};if(!(o>0))return null;const{targetRadiusPx:a,segments:i}=de.cornerOverlay,s=vl(n,e,t,a/o,i),u=s==null?void 0:s[Math.floor(s.length/2)];return!s||s.length<2||!u?null:{arc:s,dot:new x().addVectors(n,u).multiplyScalar(.5)}},eb=(e,n,t)=>{const{color:o,strokeWidthPx:r}=de.cornerOverlay,a=_T(2*De.distanceTriangle.cornerDotRadiusPx,o),i=n.filter(s=>s.distanceTriangleOverlay!==void 0&&s.distanceTriangleOverlay.showComponents!==!1).map(s=>{const u=bt();let l=null,d=null;return{edge:s,resolve:()=>{const m=e.getFrameKey();if(m===null||m!==l){l=m;const y=Ro(s,t,u);d=y?JT(y,e.getScreenPixelsPerMeterAt(y.auxiliaryECEF)):null}return d}}});return{lines:i.map(({edge:s,resolve:u})=>{const l=z(s.startCoordinate);return{id:`${s.id}-corner-arc`,start:l,end:l,stroke:o,strokeWidth:r,occludedDashed:!0,ruler:!1,halo:!1,followsView:!0,recompute:()=>{var d;return((d=u())==null?void 0:d.arc)??QT}}}),markers:i.map(({edge:s,resolve:u})=>({id:`${s.id}-corner-dot`,style:a,place:()=>{var d;const l=(d=u())==null?void 0:d.dot;return l?{positionECEF:l}:null}}))}},jd=(e,n,t)=>[e.startNodeId,e.endNodeId].filter(r=>r!==void 0).some(r=>r===n||t(r)),Hd=e=>[e.id,e.start.x,e.start.y,e.start.z,e.end.x,e.end.y,e.end.z,e.stroke,e.strokeWidth,e.occludedDashed,e.ruler,e.rulerStartMeters??0,e.halo!==!1,e.segmentPairs===!0].join(":"),nb=e=>({snappable:e.createLineCollection(),excludedFromDragSamples:e.createLineCollection({excludeFromDragSamples:!0})}),tb=e=>{e.snappable.destroy(),e.excludedFromDragSamples.destroy()},ob=(e,n)=>n?e.excludedFromDragSamples:e.snappable,zd=(e,n,t,o)=>{const r=ob(n,o).addLine({id:t.id,positions:[t.start,t.end],segmentPairs:t.segmentPairs,color:t.stroke,width:t.strokeWidth,occludedDashed:t.occludedDashed,ruler:t.ruler,rulerStartMeters:t.rulerStartMeters,halo:t.halo!==!1,visible:!0}),a=()=>{if(j(e))try{r.destroy()}catch(i){console.warn("[annotations/runtime] Ignoring committed edge destroy error.",i)}};return{signature:Hd(t),line:t,sceneLine:r,excludedFromDragSamples:o,startNodeId:t.startNodeId,endNodeId:t.endNodeId,baseStart:t.start,baseEnd:t.end,recompute:t.recompute,overridden:!1,destroy:a}},$r=e=>{e.forEach(n=>{n.destroy()}),e.clear()},rb=(e,n)=>{const t=n.size>0;e.forEach(o=>{const r=t||o.line.followsView===!0;let a=null;if(o.recompute)a=r?o.recompute(n):null;else{const i=o.startNodeId?n.get(o.startNodeId):void 0,s=o.endNodeId?n.get(o.endNodeId):void 0;(i!==void 0||s!==void 0)&&(a=[i??o.baseStart,s??o.baseEnd])}a===null&&!o.overridden||(o.sceneLine.setPositions(a??[o.baseStart,o.baseEnd]),o.overridden=a!==null&&r)})},ab=(e,n,t,o,r)=>{t.forEach((a,i)=>{const s=jd(a,o,l=>r.get(l)!==void 0);if(s===a.excludedFromDragSamples)return;a.destroy();const u=zd(e,n,a.line,s);u.overridden=!1,t.set(i,u)})},Ud=(e,n,t,o)=>{const r=g.useRef(null),a=g.useRef(new Map);g.useEffect(()=>{if(!j(e))return;const s=nb(e);return r.current=s,()=>{$r(a.current),r.current===s&&(r.current=null),j(e)&&tb(s)}},[e]);const i=g.useRef(t);i.current=t,g.useEffect(()=>{const s=r.current;if(!j(e)||!s){$r(a.current);return}return(l=>{const d=new Set(l.map(c=>c.id));a.current.forEach((c,m)=>{d.has(m)||(c.destroy(),a.current.delete(m))}),l.forEach(c=>{const m=Hd(c),y=a.current.get(c.id);if((y==null?void 0:y.signature)===m){y.line=c,y.recompute=c.recompute;return}y==null||y.destroy(),a.current.set(c.id,zd(e,s,c,jd(c,i.current,p=>o.get(p)!==void 0)))}),e.requestRender()})(n),()=>{$r(a.current),j(e)&&e.requestRender()}},[e,o,n]),g.useEffect(()=>{if(!j(e))return;const s=()=>{const l=r.current;l&&ab(e,l,a.current,t,o)};s();const u=e.subscribePreRender(()=>{try{s(),rb(a.current,o)}catch{}});return()=>{u()}},[t,e,o])},ib=[],sb=(e,{edgeSegments:n,insertTickSegments:t,showInsertTicks:o,liveAnchors:r})=>{const a=pr(e),i=g.useRef(new Set),s=o?t:ib;g.useEffect(()=>{i.current.clear()},[s]);const u=g.useCallback((d,c)=>{c?i.current.add(d):i.current.delete(d),e==null||e.requestRender()},[e]),l=g.useMemo(()=>{if(!a)return{lines:[],markers:[]};const d=eb(e,n,r);return{lines:d.lines,markers:[...ZT(s,r,i.current),...d.markers]}},[n,e,a,r,s]);return Ud(a?e:null,l.lines,null,r),ti(e,l.markers),{handlesInScene:a,onInsertTickHoverChange:a?u:void 0}},lb="translate(0px, 0px) translate(-50%, -50%) rotate(0rad)",oi=new WeakMap,Dt=new WeakMap,ub=/(?:^|\s)(?:display|left|top|transform):[^;]*;/g,ri=e=>{var o;const n=e.ownerDocument;Dt.has(n)||(Dt.set(n,0),(o=n.fonts)==null||o.addEventListener("loadingdone",()=>{Dt.set(n,(Dt.get(n)??0)+1)}));const t=n.defaultView;return`${Dt.get(n)}|${t==null?void 0:t.innerWidth}:${t==null?void 0:t.innerHeight}|${e.className}|${e.style.cssText.replace(ub,"")}|${e.innerHTML}`},db=Object.freeze({x:0,y:0}),cb=e=>{var t;const n=(t=e.parentElement)==null?void 0:t.getBoundingClientRect();return n?{x:n.left,y:n.top}:db},Vd=(e,n)=>{Ka(e,n),e.style.display="block",e.style.transform=lb},$d=(e,n)=>{const{width:t,height:o}=e.getBoundingClientRect();if(!(t>0&&o>0))return null;const r={text:n,width:t,height:o,layoutKey:ri(e)};return oi.set(e,r),r},mb=(e,n)=>{const t=oi.get(e);return(t==null?void 0:t.text)===n&&t.layoutKey===ri(e)?t:(Vd(e,n),$d(e,n))},yb=e=>{const n=e.filter(({element:t,text:o})=>{const r=oi.get(t);return(r==null?void 0:r.text)!==o||r.layoutKey!==ri(t)});n.forEach(({element:t,text:o})=>Vd(t,o)),n.forEach(({element:t,text:o})=>$d(t,o))},pb=({x:e,y:n,angleRad:t,anchor:o},{width:r,height:a},i)=>{const s=i.x+Math.round(e)+(o==="left"?r/2:o==="right"?-r/2:0),u=i.y+Math.round(n),l=Math.abs(Math.cos(t)),d=Math.abs(Math.sin(t)),c=(r*l+a*d)/2,m=(r*d+a*l)/2;return{left:s-c,top:u-m,right:s+c,bottom:u+m}},Ue=Object.freeze({anchorRatio:.5,anchorRatioEpsilon:1e-6,minAnchorSlideStepRatio:.01}),gb=e=>{const n=Number.parseFloat(e.dataset.annotationOverlayLineLabelAnchorRatio??"");return Number.isFinite(n)?Ca(n):Ue.anchorRatio},fb=({element:e,collisionResolutionStrategy:n,stepRatio:t,maxDeltaRatio:o})=>{const r=Math.min(Ue.anchorRatio,Ca(o)),a=Ue.anchorRatio-r,i=Ue.anchorRatio+r,s=Be(gb(e),a,i),u=new Set([s,Ue.anchorRatio]);if(n!==Xu.MOVE_ON_LINE)return{lastResolvedAnchorRatio:s,anchorRatios:[...u]};const l=Math.max(t,Ue.minAnchorSlideStepRatio);for(let d=l;d<=r+Ue.anchorRatioEpsilon;d+=l)u.add(Math.max(a,Ue.anchorRatio-d)),u.add(Math.min(i,Ue.anchorRatio+d));return{lastResolvedAnchorRatio:s,anchorRatios:[...u].sort((d,c)=>{const m=Math.abs(d-s),y=Math.abs(c-s);return m!==y?m-y:Math.abs(d-Ue.anchorRatio)-Math.abs(c-Ue.anchorRatio)})}},Ab=(e,n,t)=>od({element:e.element,start:e.start,end:e.end,outsideReferencePoint:e.outsideReferencePoint,anchorRatio:n,previousShouldFlip:t}),vb=(e,n,t,o)=>({anchorRatio:e,collisionRect:n,collisionCount:t.reduce((r,a)=>Nm(n,a,Im)?r+1:r,0),lastSolutionJumpPenalty:Math.abs(e-o),originalOffsetPenalty:Math.abs(e-Ue.anchorRatio)}),Tb=(e,n)=>n?e.collisionCount!==n.collisionCount?e.collisionCount<n.collisionCount:e.collisionCount===0?e.originalOffsetPenalty!==n.originalOffsetPenalty?e.originalOffsetPenalty<n.originalOffsetPenalty:e.lastSolutionJumpPenalty<n.lastSolutionJumpPenalty:e.lastSolutionJumpPenalty!==n.lastSolutionJumpPenalty?e.lastSolutionJumpPenalty<n.lastSolutionJumpPenalty:e.originalOffsetPenalty<n.originalOffsetPenalty:!0,Wd=({candidate:e,occupiedLabelRects:n,allowEarlyRemoval:t,collisionResolutionStrategy:o,anchorSlideStepRatio:r,maxAnchorSlideDeltaRatio:a,layerOrigin:i})=>{const{element:s,text:u}=e;let l=null;const{lastResolvedAnchorRatio:d,anchorRatios:c}=fb({element:s,collisionResolutionStrategy:o,stepRatio:r,maxDeltaRatio:a}),m=mb(s,u),y=i??cb(s);let p=s.dataset.annotationOverlayLineLabelNormalFlip==="1",f=null;for(const A of c){const v=Ab(e,A,p);if(!v||(f=v,p=v.shouldFlip,!m))continue;const b=vb(A,pb(v,m,y),n,d);Tb(b,l)&&(l=b)}return f&&(rd(s,u,f),s.style.transform=nd(f)),l&&(l.collisionCount===0||!t)?(hv({element:s,text:u,start:e.start,end:e.end,outsideReferencePoint:e.outsideReferencePoint,anchorRatio:l.anchorRatio}),{visible:!0,anchorRatio:l.anchorRatio,collisionCount:l.collisionCount,collisionRect:l.collisionRect}):(s.style.display="none",{visible:!1,anchorRatio:(l==null?void 0:l.anchorRatio)??null,collisionCount:(l==null?void 0:l.collisionCount)??0,collisionRect:null})},Yd=(e,n)=>n.zIndex-e.zIndex,bb=(e,n)=>e.metricValueMeters!==n.metricValueMeters?n.metricValueMeters-e.metricValueMeters:Yd(e,n),kb=e=>{const n=new Map;return e.forEach(t=>{const o=n.get(t.annotationId);o?o.push(t):n.set(t.annotationId,[t])}),n},Nb=({candidates:e,occupiedLabelRects:n,...t})=>{const o=[],r=[...n];return[...e].sort(bb).forEach(a=>{const i=Wd({...t,candidate:a,occupiedLabelRects:r,allowEarlyRemoval:!0});i.visible&&i.collisionRect&&(r.push(i.collisionRect),o.push(a))}),o},Ib=({candidates:e,occupiedLabelRects:n,allowEarlyRemoval:t,...o})=>{yb(e),[...kb(e).values()].flatMap(a=>Nb({...o,candidates:a,occupiedLabelRects:n})).sort(Yd).forEach(a=>{const i=Wd({...o,candidate:a,occupiedLabelRects:n,allowEarlyRemoval:t});i.visible&&i.collisionRect&&n.push(i.collisionRect)})},hb=new x,Sb=(e,{hitAreaOnly:n=!1}={})=>{const t=document.createElement("div");t.style.position="absolute",t.style.display="none",t.style.pointerEvents="none",t.style.userSelect="none",t.style.webkitUserSelect="none",t.style.cursor="default",t.style.zIndex="0";const o=document.createElementNS(De.svgNamespace,"svg");o.setAttribute("width","100%"),o.setAttribute("height","100%"),o.style.overflow="visible",o.style.pointerEvents="none",n&&(o.style.visibility="hidden");const r=document.createElementNS(De.svgNamespace,"path");r.setAttribute("fill","none"),r.setAttribute("stroke",de.cornerOverlay.color),r.setAttribute("stroke-width",`${de.cornerOverlay.strokeWidthPx}`),r.setAttribute("stroke-linecap","round"),r.setAttribute("stroke-linejoin","round");const a=document.createElementNS(De.svgNamespace,"circle");return a.setAttribute("r",`${De.distanceTriangle.cornerDotRadiusPx}`),a.setAttribute("fill",de.cornerOverlay.color),o.append(r,a),t.appendChild(o),e.appendChild(t),{root:t,svg:o,path:r,dot:a}},Kd=e=>{e.root.remove()},hs=e=>{e.forEach(n=>{Kd(n)}),e.clear()},jn=e=>{e.root.style.display="none",e.root.onclick=null},Cb=({handle:e,pathData:n,dotScreen:t,minX:o,minY:r,width:a,height:i,clickable:s,onClick:u})=>{e.path.setAttribute("d",n),e.path.style.display="block",e.svg.style.display="block",e.dot.setAttribute("cx",`${t.x-o+de.cornerOverlay.paddingPx}`),e.dot.setAttribute("cy",`${t.y-r+de.cornerOverlay.paddingPx}`),e.root.style.left=`${o-de.cornerOverlay.paddingPx}px`,e.root.style.top=`${r-de.cornerOverlay.paddingPx}px`,e.root.style.width=`${a}px`,e.root.style.height=`${i}px`,e.root.style.transform="none",e.root.style.display="block",e.root.style.pointerEvents=s?"auto":"none",e.root.style.cursor=s?"pointer":"default",e.root.onclick=s&&u?u:null},Eb=({handle:e,center:n,clickable:t,onClick:o})=>{const r=de.cornerOverlay.straightHitTargetPx,a=r/2;e.path.style.display="none",e.svg.style.display="block",e.dot.setAttribute("cx",`${a}`),e.dot.setAttribute("cy",`${a}`),e.root.style.left=`${n.x-a}px`,e.root.style.top=`${n.y-a}px`,e.root.style.width=`${r}px`,e.root.style.height=`${r}px`,e.root.style.transform="none",e.root.style.display="block",e.root.style.pointerEvents=t?"auto":"none",e.root.style.cursor=t?"pointer":"default",e.root.onclick=t&&o?o:null},Ob=({engine:e,cornerHandle:n,screenData:t,lengths:{directLengthMeters:o,verticalLengthMeters:r,horizontalLengthMeters:a},clickable:i,onClick:s})=>{if(r<=gt.referenceLineEpsilonMeters||a<=gt.referenceLineEpsilonMeters){if(o<=gt.referenceLineEpsilonMeters){jn(n);return}const S=xe({x:(t.anchorScreenPosition.x+t.targetScreenPosition.x)/2,y:(t.anchorScreenPosition.y+t.targetScreenPosition.y)/2});Eb({handle:n,center:S,clickable:i,onClick:s});return}const u=e.canvas.clientWidth,l=e.canvas.clientHeight;if(u<=0||l<=0){jn(n);return}let d=Number.NaN;try{const S=e.getScreenPixelsPerMeterAt(t.auxiliaryPointECEF);d=Number.isFinite(S)&&S>0?1/S:Number.NaN}catch{d=Number.NaN}if(!Number.isFinite(d)||d<=0){const S=e.getCameraPositionECEF(hb),k=Math.max(S?S.distanceTo(t.auxiliaryPointECEF):Number.NaN,1),C=de.cornerOverlay.fallbackFovRad;d=Math.max(k*Math.tan(C/2)*2/Math.max(l,1),1e-6)}const c=vl(t.auxiliaryPointECEF,t.anchorPointECEF,t.targetPointECEF,de.cornerOverlay.targetRadiusPx*d,de.cornerOverlay.segments);if(!c||c.length<2){jn(n);return}const m=c[Math.floor(c.length/2)];if(!m){jn(n);return}const y=new x().addVectors(t.auxiliaryPointECEF,m).multiplyScalar(.5),p=e.worldToScreen(y);if(p===null){jn(n);return}const f=c.map(S=>e.worldToScreen(S)).filter(S=>S!==null);if(f.length<2){jn(n);return}const A=Math.min(...f.map(S=>S.x)),v=Math.max(...f.map(S=>S.x)),b=Math.min(...f.map(S=>S.y)),T=Math.max(...f.map(S=>S.y)),I=Math.max(de.cornerOverlay.minBoxPx,v-A+de.cornerOverlay.paddingPx*2),N=Math.max(de.cornerOverlay.minBoxPx,T-b+de.cornerOverlay.paddingPx*2),h=f.map((S,k)=>{const C=S.x-A+de.cornerOverlay.paddingPx,L=S.y-b+de.cornerOverlay.paddingPx;return`${k===0?"M":"L"} ${C} ${L}`}).join(" ");Cb({handle:n,pathData:h,dotScreen:xe(p),minX:A,minY:b,width:I,height:N,clickable:i,onClick:s})},Lb=new x,ba=(e,n)=>{const t=e.getCameraPositionECEF(Lb);return Id(t?t.distanceTo(n):Number.NaN)},$t=(e,n,t)=>Math.round((ba(e,n)+ba(e,t))/2),Rb=e=>({left:e.left,top:e.top,right:e.right,bottom:e.bottom}),wb=e=>{const n=mu(e);return n?Array.from(n.querySelectorAll(De.pointLabelCollisionSelector)).map(t=>Rb(t.getBoundingClientRect())).filter(t=>t.right>t.left&&t.bottom>t.top):[]},xb=(e,n)=>{const t=Iv(n);return e.append(t.direct,t.vertical,t.horizontal),{lineLabels:t,scratch:bt()}},qb=(e,n)=>{const t=Qa(Z.colors.componentLabelAccents.direct,n);return e.appendChild(t),{element:t}},Qd=e=>{td(e.lineLabels),e.lineLabels.direct.remove(),e.lineLabels.vertical.remove(),e.lineLabels.horizontal.remove()},Xd=e=>{e.element.style.display="none",e.element.remove()},Ss=e=>{e.forEach(n=>{Qd(n)}),e.clear()},Cs=e=>{e.forEach(n=>{Xd(n)}),e.clear()},_b=({engine:e,edge:n,labelHandle:t,formatOptions:o,liveAnchors:r,candidates:a})=>{const i=an(r,n.startNodeId,n.startCoordinate),s=an(r,n.endNodeId,n.endCoordinate),u=e.worldToScreen(i),l=e.worldToScreen(s),d=i.distanceTo(s);if(u===null||l===null||d<=gt.referenceLineEpsilonMeters){t.element.style.display="none";return}const c=$t(e,i,s);t.element.style.zIndex=`${c}`,a.push({element:t.element,zIndex:c,annotationId:n.annotationId??n.id,metricValueMeters:d,text:yt(d,o.lengthMeters),start:xe(u),end:xe(l)})},Pb=({engine:e,edge:n,labelHandle:t,cornerHandle:o,formatOptions:r,liveAnchors:a,candidates:i,cornerClickable:s,onCornerClick:u})=>{var T;const l=Gd({engine:e,edge:n,scratch:t.scratch,previousOutsideSigns:t.previousOutsideSigns,formatOptions:r,liveAnchors:a});if(!l){td(t.lineLabels),o&&jn(o),t.previousOutsideSigns=void 0;return}t.previousOutsideSigns=l.nextOutsideSigns;const d=$t(e,l.anchorPointECEF,l.targetPointECEF),c=$t(e,l.anchorPointECEF,l.auxiliaryPointECEF),m=$t(e,l.auxiliaryPointECEF,l.targetPointECEF),y=ba(e,l.auxiliaryPointECEF),p=Is(n),f=l.anchorPointECEF.distanceTo(l.targetPointECEF),A=l.anchorPointECEF.distanceTo(l.auxiliaryPointECEF),v=l.auxiliaryPointECEF.distanceTo(l.targetPointECEF);t.lineLabels.direct.style.zIndex=`${d}`,i.push({element:t.lineLabels.direct,zIndex:d,annotationId:p,metricValueMeters:f,text:l.directLabelText,start:l.anchorScreenPosition,end:l.targetScreenPosition,outsideReferencePoint:l.directOutsideReferencePoint});const b=((T=n.distanceTriangleOverlay)==null?void 0:T.showComponents)!==!1;b&&l.showVerticalLabel&&l.verticalLabelText?(t.lineLabels.vertical.style.zIndex=`${c}`,i.push({element:t.lineLabels.vertical,zIndex:c,annotationId:p,metricValueMeters:A,text:l.verticalLabelText,start:l.anchorScreenPosition,end:l.auxiliaryScreenPosition,outsideReferencePoint:l.verticalOutsideReferencePoint})):t.lineLabels.vertical.style.display="none",b&&l.showHorizontalLabel&&l.horizontalLabelText?(t.lineLabels.horizontal.style.zIndex=`${m}`,i.push({element:t.lineLabels.horizontal,zIndex:m,annotationId:p,metricValueMeters:v,text:l.horizontalLabelText,start:l.auxiliaryScreenPosition,end:l.targetScreenPosition,outsideReferencePoint:l.horizontalOutsideReferencePoint})):t.lineLabels.horizontal.style.display="none",!(!o||!b)&&(o.root.style.zIndex=`${y}`,Ob({engine:e,cornerHandle:o,screenData:l,lengths:{directLengthMeters:f,verticalLengthMeters:A,horizontalLengthMeters:v},clickable:s,onClick:u?()=>u(Is(n)):void 0}))},Mb=(e,{edgeSegments:n,formatOptions:t,lineLabelOptions:o,surfaceKey:r,activeEditedNodeId:a,blockEdgeInteractions:i,liveAnchors:s,onDistanceTriangleCornerClick:u,cornerHitAreaOnly:l=!1})=>{const d=g.useRef(new Map),c=g.useRef(new Map),m=g.useRef(new Map);g.useEffect(()=>{if(Ss(d.current),Cs(c.current),hs(m.current),!j(e))return;const y=n.filter(N=>N.distanceTriangleOverlay!==void 0),p=n.filter(N=>N.showSegmentLengthLabels===!0);if(y.length===0&&p.length===0)return;const{[Te.LABEL]:f,[Te.VISUALIZER]:A}=ad(e,{[Te.LABEL]:Ta(r),[Te.VISUALIZER]:`${Ta(r)}-visualizer`});if(!f||!A)return;const v=()=>{const N=new Set([...y.map(h=>h.id),...p.map(h=>h.id)]);d.current.forEach((h,S)=>{if(N.has(S))return;Qd(h),d.current.delete(S);const k=m.current.get(S);k&&(Kd(k),m.current.delete(S))}),y.forEach(h=>{var S;d.current.has(h.id)||(d.current.set(h.id,xb(f,o)),((S=h.distanceTriangleOverlay)==null?void 0:S.showComponents)!==!1&&m.current.set(h.id,Sb(A,{hitAreaOnly:l})))}),c.current.forEach((h,S)=>{N.has(S)||(Xd(h),c.current.delete(S))}),p.forEach(h=>{c.current.has(h.id)||c.current.set(h.id,qb(f,o))})};let b=null;const T=({force:N=!1}={})=>{const h=Od(e);if(!N&&s.size===0&&Ld(b,h))return;b=h;const S=wb(e),k=f.getBoundingClientRect(),C=[],L=!i&&a===null&&!!u;y.forEach(R=>{const E=d.current.get(R.id);E&&Pb({engine:e,edge:R,labelHandle:E,cornerHandle:m.current.get(R.id),formatOptions:t,liveAnchors:s,candidates:C,cornerClickable:L,onCornerClick:u})}),p.forEach(R=>{const E=c.current.get(R.id);E&&_b({engine:e,edge:R,labelHandle:E,formatOptions:t,liveAnchors:s,candidates:C})}),Ib({candidates:C,occupiedLabelRects:S,allowEarlyRemoval:o.collision.allowEarlyRemoval,collisionResolutionStrategy:o.collision.resolutionStrategy,anchorSlideStepRatio:o.collision.anchorSlideStepRatio,maxAnchorSlideDeltaRatio:o.collision.maxAnchorSlideDeltaRatio,layerOrigin:{x:k.left,y:k.top}})};v(),T({force:!0});const I=e.subscribePostRender(()=>{T()});return e.requestRender(),()=>{I(),Ss(d.current),Cs(c.current),hs(m.current),Ot(f),Ot(A),j(e)&&e.requestRender()}},[a,i,l,n,c,e,t,s,u,o,r])},Db=(e,{hitAreaOnly:n=!1}={})=>{const t=document.createElement("div");t.style.position="absolute",t.style.display="none",t.style.pointerEvents="none",t.style.userSelect="none",t.style.webkitUserSelect="none",t.style.cursor="default";const o=document.createElement("div");return o.style.position="absolute",o.style.left="50%",o.style.top="50%",o.style.width=`${De.midpointMarker.tickLengthPx}px`,o.style.height=`${De.midpointMarker.tickWidthPx}px`,o.style.borderRadius="999px",o.style.background=De.midpointMarker.tickColor,o.style.transform="translate(-50%, -50%)",o.style.pointerEvents="none",o.style.transition=el(),n&&(o.style.visibility="hidden"),t.appendChild(o),e.appendChild(t),{root:t,tick:o}},Bb=e=>{e.root.remove()},Es=e=>{e.forEach(n=>{Bb(n)}),e.clear()},Fb=e=>{e.root.style.display="none",e.root.onclick=null,e.root.onmouseenter=null,e.root.onmouseleave=null,e.tick.style.transform="translate(-50%, -50%)",e.tick.style.boxShadow="none",e.tick.style.filter="none"},Wr=(e,n)=>{e.tick.style.transform=n?`translate(-50%, -50%) scale(${tn.hover.scale})`:"translate(-50%, -50%)",e.tick.style.boxShadow=n?nl():"none",e.tick.style.filter=n?tl():"none"},Gb=({handle:e,center:n,angleRad:t,zIndex:o,clickable:r,onClick:a,onHoverChange:i})=>{e.root.style.left=`${n.x}px`,e.root.style.top=`${n.y}px`,e.root.style.width=`${De.midpointMarker.hitTargetPx}px`,e.root.style.height=`${De.midpointMarker.hitTargetPx}px`,e.root.style.transform=`translate(-50%, -50%) rotate(${t}rad)`,e.root.style.transformOrigin="50% 50%",e.root.style.zIndex=`${Math.max(o,De.midpointMarker.minOverlayZIndex)}`,e.root.style.display="block",e.root.style.pointerEvents=r?"auto":"none",e.root.style.cursor=r?"pointer":"default",e.root.onclick=r&&a?a:null,e.root.onmouseenter=r?()=>{Wr(e,!0),i==null||i(!0)}:null,e.root.onmouseleave=r?()=>{Wr(e,!1),i==null||i(!1)}:null,Wr(e,!1)},jb=(e,{insertNodeTargetSegments:n,surfaceKey:t,activeEditedNodeId:o,blockEdgeInteractions:r,liveAnchors:a,onInsertNodeTargetClick:i,hitAreaOnly:s=!1,onHoverChange:u})=>{const l=g.useRef(new Map);g.useEffect(()=>{if(Es(l.current),!j(e)||r||o!==null||n.length===0)return;const d=ad(e,{[Te.VISUALIZER]:`${Ta(t)}-midpoint-targets`})[Te.VISUALIZER];if(!d)return;n.forEach(y=>{l.current.set(y.id,Db(d,{hitAreaOnly:s}))});const c=()=>{n.forEach(y=>{const p=l.current.get(y.id);if(!p)return;const f=an(a,y.startNodeId,y.startCoordinate),A=an(a,y.endNodeId,y.endCoordinate),v=e.worldToScreen(f),b=e.worldToScreen(A),T=e.worldToScreen(new x().addVectors(f,A).multiplyScalar(.5));if(v===null||b===null||T===null||!y.annotationId||!y.startNodeId||!y.endNodeId){Fb(p);return}Gb({handle:p,center:xe(T),angleRad:Math.atan2(b.y-v.y,b.x-v.x)+Tc,zIndex:$t(e,f,A),clickable:!!i,onClick:i?()=>i(y.annotationId,y.startNodeId,y.endNodeId):void 0,onHoverChange:u?I=>u(y.id,I):void 0})})};c();const m=e.subscribePostRender(()=>{c()});return e.requestRender(),()=>{m(),Es(l.current),Ot(d),j(e)&&e.requestRender()}},[o,r,e,s,n,a,u,i,t])},Hb=(e,{edges:n,formatOptions:t,lineLabelOptions:o,surfaceKey:r="committed",activeEditedNodeId:a,blockEdgeInteractions:i,onAnnotationSelect:s,onEdgeClick:u,insertNodeTargetAnnotationIds:l=[],onInsertNodeTargetClick:d,onDistanceTriangleCornerClick:c,liveAnchors:m})=>{const y=g.useMemo(()=>dr(o),[o]),p=g.useMemo(()=>new Set(l),[l]),f=g.useMemo(()=>KT(n),[n]),A=g.useMemo(()=>f.filter(h=>h.annotationId!==void 0&&p.has(h.annotationId)&&h.startNodeId!==void 0&&h.endNodeId!==void 0),[f,p]),v=(e==null?void 0:e.capabilities.occludedLinesInScene)===!0,b=g.useMemo(()=>YT({edgeSegments:f,engine:e,formatOptions:t,liveAnchors:m,occludedLinesInScene:v}),[f,e,t,m,v]),T=g.useMemo(()=>WT({edgeSegments:f,engine:e,formatOptions:t,liveAnchors:m,occludedLinesInScene:v,surfaceKey:r,activeEditedNodeId:a,blockEdgeInteractions:i,onEdgeClick:u,onAnnotationSelect:s}),[a,i,f,e,t,m,v,u,s,r]);hm([...T],T.length>0),Ud(e,b,a,m);const{handlesInScene:I,onInsertTickHoverChange:N}=sb(e,{edgeSegments:f,insertTickSegments:A,showInsertTicks:!i&&a===null,liveAnchors:m});jb(e,{insertNodeTargetSegments:A,surfaceKey:r,activeEditedNodeId:a,blockEdgeInteractions:i,liveAnchors:m,onInsertNodeTargetClick:d,hitAreaOnly:I,onHoverChange:N}),Mb(e,{edgeSegments:f,formatOptions:t,lineLabelOptions:y,surfaceKey:r,activeEditedNodeId:a,blockEdgeInteractions:i,liveAnchors:m,onDistanceTriangleCornerClick:c,cornerHitAreaOnly:I})},zb=e=>e.flatMap(n=>{const t=n.placement??$n.COPLANAR;return t!==$n.COPLANAR||!n.overlayFill||n.coordinates.length<3?[]:[{...n,overlayFill:n.overlayFill,placement:t}]}),Ub=(e,n)=>e.length===n.length&&e.every((t,o)=>{const r=n[o];return r!==void 0&&t.id===r.id&&t.annotationId===r.annotationId&&t.overlayFill===r.overlayFill&&t.selected===r.selected&&Ya(t.coordinates,r.coordinates)}),Vb=()=>{const e=document.createElementNS("http://www.w3.org/2000/svg","polygon");return e.style.pointerEvents="none",e},$b=(e,n)=>{if(!j(e))return{setPolygonFills:()=>{},clear:()=>{},destroy:()=>{}};const t=mr(e,`annotation-overlay-runtime-polygon-fill-layer-${n}`,Te.VISUALIZER);if(!t)return{setPolygonFills:()=>{},clear:()=>{},destroy:()=>{}};const o=document.createElementNS("http://www.w3.org/2000/svg","svg");o.setAttribute("width","100%"),o.setAttribute("height","100%"),o.style.position="absolute",o.style.inset="0",o.style.overflow="visible",o.style.pointerEvents="none",t.appendChild(o);let r=[],a=new Map;const i=()=>{a.forEach(l=>l.remove()),a=new Map},s=()=>{e.isDestroyed()||r.forEach(l=>{let d=a.get(l.id);d||(d=Vb(),a.set(l.id,d),o.appendChild(d)),d.setAttribute("fill",l.overlayFill);const c=l.coordinates.map(m=>e.worldToScreen(z(m))).filter(m=>m!==null);if(c.length!==l.coordinates.length){d.style.display="none";return}d.setAttribute("points",c.map(m=>`${m.x},${m.y}`).join(" ")),d.style.display="block"})},u=e.subscribePostRender(()=>{s()});return{setPolygonFills:(l,d=!0)=>{const c=zb(l);if(Ub(r,c))return;r=c;const m=new Set(r.map(y=>y.id));a.forEach((y,p)=>{m.has(p)||(y.remove(),a.delete(p))}),s(),d&&e.requestRender()},clear:(l=!0)=>{r.length!==0&&(r=[],i(),l&&e.requestRender())},destroy:()=>{r=[],u(),i(),Ot(t),e.isDestroyed()||e.requestRender()}}},Wb=(e,n,t)=>{const o=g.useRef(null),r=g.useRef(n);r.current=n,g.useEffect(()=>{const a=$b(e,t);return o.current=a,a.setPolygonFills(r.current),()=>{a.destroy(),o.current===a&&(o.current=null)}},[e,t]),g.useEffect(()=>{var a;(a=o.current)==null||a.setPolygonFills(n)},[n])},Yb={[$n.GROUND]:$n.GROUND,[$n.COPLANAR]:$n.COPLANAR},Kb=e=>e.map(n=>({...n,placement:n.placement??$n.COPLANAR})),Qb=(e,n)=>e.length===n.length&&e.every((t,o)=>{const r=n[o];return r!==void 0&&t.id===r.id&&t.annotationId===r.annotationId&&t.fill===r.fill&&t.placement===r.placement&&t.selected===r.selected&&Ya(t.coordinates,r.coordinates)}),Xb=e=>e.flatMap(n=>n.coordinates.length<3?[]:[{id:n.id,positionsECEF:n.coordinates.map(t=>z(t)),fill:n.fill,placement:Yb[n.placement],...n.selected!==void 0?{selected:n.selected}:{}}]),Zb=(e,n={})=>{if(!j(e))return{setPolygonFills:()=>{},clear:()=>{},destroy:()=>{}};let t=[];const o=n.allowPicking??!0,r=e.createPolygonFills({allowPicking:o}),a=({requestRender:s})=>{r.clear(),s&&e.requestRender()},i=(s,u=!0)=>{r.setPolygonFills(Xb(s)),u&&e.requestRender()};return{setPolygonFills:(s,u=!0)=>{const l=Kb(s);Qb(t,l)||(t=l,!e.isDestroyed()&&i(l,u))},clear:(s=!0)=>{t.length!==0&&(t=[],!e.isDestroyed()&&a({requestRender:s}))},destroy:()=>{t=[],!e.isDestroyed()&&(r.destroy(),e.requestRender())}}},Jb=(e,n)=>{const t=g.useRef(null),o=g.useRef(n);o.current=n,g.useEffect(()=>{const r=Zb(e);return t.current=r,r.setPolygonFills(o.current),()=>{r.destroy(),t.current===r&&(t.current=null)}},[e]),g.useEffect(()=>{var r;(r=t.current)==null||r.setPolygonFills(n)},[n])},Zd=id(le.ACCENT_MEASUREMENTS).brighter(.1);Zd.opacity=.5;const ek=Object.freeze({id:"accent-measurements",label:"Measurements · Accent",colorPrimaryReduced:Zd.toString(),colorPrimary:le.ACCENT_MEASUREMENTS,lineColor:Z.colors.surface,textColor:ot.label.textColor}),qe=Object.freeze({scheme:ek,fontFamily:vt.fontFamily,contentFontWeight:vt.lineLabelFontWeight,badgeFontWeight:vt.badgeFontWeight,selection:ot.selection.highlightPalette}),Ae=Object.freeze({fontSize:vt.rootFontSizeRem,fontFamily:qe.fontFamily,fontWeight:qe.contentFontWeight,lineColor:qe.scheme.lineColor,textBackgroundColor:qe.scheme.colorPrimaryReduced,textColor:qe.scheme.textColor,markerBackgroundColor:qe.scheme.colorPrimary,markerTextColor:qe.scheme.textColor,selectedBackgroundColor:qe.selection.backgroundColor,selectedTextColor:qe.selection.textColor,selectedGlowColor:qe.selection.glowColor,selectedGlowRadiusPx:qe.selection.glowRadiusPx,preserveFillOnSelection:qe.selection.preserveFillOnSelection,hoverBackgroundColor:qe.selection.hoverBackgroundColor,markerPixelSize:Z.sizes.pointPixelSize,markerOutlineWidth:Z.sizes.pointOutlineWidth}),nk=e=>({...e,fontSize:e.fontSize??Ae.fontSize,fontFamily:e.fontFamily??Ae.fontFamily,fontWeight:e.fontWeight??Ae.fontWeight,lineColor:e.lineColor??Ae.lineColor,textBackgroundColor:e.textBackgroundColor??Ae.textBackgroundColor,textColor:e.textColor??Ae.textColor,markerBackgroundColor:e.markerBackgroundColor??Ae.markerBackgroundColor,markerTextColor:e.markerTextColor??Ae.markerTextColor,selectedBackgroundColor:e.selectedBackgroundColor??Ae.selectedBackgroundColor,selectedTextColor:e.selectedTextColor??Ae.selectedTextColor,selectedGlowColor:e.selectedGlowColor??Ae.selectedGlowColor,selectedGlowRadiusPx:e.selectedGlowRadiusPx??Ae.selectedGlowRadiusPx,preserveFillOnSelection:e.preserveFillOnSelection??Ae.preserveFillOnSelection,hoverBackgroundColor:e.hoverBackgroundColor??Ae.hoverBackgroundColor,markerPixelSize:e.markerPixelSize??Ae.markerPixelSize,markerOutlineWidth:e.markerOutlineWidth??Ae.markerOutlineWidth}),wo=Object.freeze({nodeLabelLongPressDurationMs:320}),Os=(e,n)=>n!==void 0&&e.has(n),ka=({nodeId:e,annotationId:n,onNodeLongPress:t,canStartNodeEditing:o})=>t&&e&&((o==null?void 0:o(e,n))??!0)?()=>t(e,n):void 0,Jd=({nodeId:e,annotationId:n,canStartNodeEditing:t})=>!e||((t==null?void 0:t(e,n))??!0),ec=({nodeId:e,annotationId:n,nodeAnnotationIds:t,referenceNodeInteractionEnabled:o,previewSnapTargetsEnabled:r,onReferenceNodeClick:a,onPreviewSnapTargetNodeClick:i,onNodeAnnotationsSelect:s,onAnnotationSelect:u})=>{if(o&&e)return()=>{a==null||a(e)};if(r&&e)return()=>{i==null||i(e)};if(t.length>0&&s)return()=>{s(t)};if(n&&u)return()=>{u(n)}},tk=e=>e.map(nk).filter(n=>!(n.hideLabelAndStem===!0&&n.nodeId!==void 0)),nc=(e,n)=>{const t=new Map;return e.forEach(o=>{if(!o.nodeId||!o.annotationId)return;const r=n.get(o.nodeId)??o.nodeId,a=t.get(r)??[];a.includes(o.annotationId)||(a.push(o.annotationId),t.set(r,a))}),t},tc=e=>new Set(e.flatMap(n=>n.pointMarkerId&&n.hideLabelAndStem!==!0&&n.hideMarker!==!0?[n.pointMarkerId]:[])),ok=({pointLabels:e,points:n,selectedAnnotationIdSet:t,previewSnapTargetsEnabled:o,referenceNodeClickEnabled:r,referenceNodeHoverEnabled:a,nodeLinkIdByNodeId:i,previewNodeLinkId:s,isInPreviewNodeLink:u,onAnnotationSelect:l,onNodeAnnotationsSelect:d,onNodeLongPress:c,canStartNodeEditing:m,onPreviewSnapTargetNodeClick:y,onReferenceNodeClick:p,onReferenceNodeHover:f,enableHostInteractionTargets:A})=>{const v=tk(e),b=A&&(a||o),T=A?v.map(k=>{const C=!!(r&&p&&k.nodeId&&!u(k.nodeId)),L=o&&k.nodeId!==void 0,R=Jd({nodeId:k.nodeId,annotationId:k.annotationId,canStartNodeEditing:m});return{...k,onClick:!L&&(k.onClick||C)?()=>{if(k.onClick){k.onClick();return}C&&k.nodeId&&(p==null||p(k.nodeId))}:void 0,onHoverChange:k.onHoverChange,onLongPress:C||L||!R?void 0:k.onLongPress??ka({nodeId:k.nodeId,annotationId:k.annotationId,onNodeLongPress:c,canStartNodeEditing:m}),longPressDurationMs:k.longPressDurationMs??wo.nodeLabelLongPressDurationMs}}):v.map(k=>({...k,onClick:void 0,onDoubleClick:void 0,onHoverChange:void 0,onLongPress:void 0,longPressDurationMs:k.longPressDurationMs??wo.nodeLabelLongPressDurationMs}));if(!!!(A&&(b||o||r||l||d||c)))return T;const N=tc(T),h=new Map,S=nc(n,i);return n.forEach(k=>{const{nodeId:C,annotationId:L}=k;if(!C||!N.has(k.id))return;const R=i.get(C)??C;if(s!==null&&R===s)return;const E=!!(r&&p&&!u(C)),w=E||o?void 0:ka({nodeId:C,annotationId:L,onNodeLongPress:c,canStartNodeEditing:m}),_={id:`${k.id}-node-interaction`,annotationId:L,nodeId:C,pointMarkerId:k.id,coordinate:k.coordinate,markerPixelSize:k.pixelSize,content:"",hideLabelAndStem:!0,hideMarker:!0,markerOnlyPointerEvents:!0,onHoverChange:b?D=>{f==null||f(C,D)}:void 0,onClick:ec({nodeId:C,annotationId:L,nodeAnnotationIds:S.get(R)??[],referenceNodeInteractionEnabled:E,previewSnapTargetsEnabled:o,onReferenceNodeClick:p,onPreviewSnapTargetNodeClick:y,onNodeAnnotationsSelect:d,onAnnotationSelect:l}),onLongPress:w,longPressDurationMs:wo.nodeLabelLongPressDurationMs},M=w?k.id:R,q=h.get(M);(!q||!Os(t,q.annotationId)&&Os(t,k.annotationId))&&h.set(M,_)}),[...T,...h.values()]},rk=({points:e,enableHostInteractionTargets:n,previewSnapTargetsEnabled:t,referenceNodeClickEnabled:o,referenceNodeHoverEnabled:r,nodeLinkIdByNodeId:a,isInPreviewNodeLink:i,onAnnotationSelect:s,onNodeAnnotationsSelect:u,onNodeLongPress:l,canStartNodeEditing:d,onPreviewSnapTargetNodeClick:c,onReferenceNodeClick:m,onReferenceNodeHover:y})=>{if(!n)return e.map(A=>({...A,onClick:void 0,onHoverChange:void 0,onLongPress:void 0}));const p=r||t,f=nc(e,a);return e.map(A=>{const{nodeId:v,annotationId:b}=A,T=v?a.get(v)??v:null,I=!!(o&&m&&v&&!i(v)),N=p&&v&&!i(v)?S=>{y==null||y(v,S)}:A.onHoverChange,h=t||I||i(v)||!Jd({nodeId:v,annotationId:b,canStartNodeEditing:d});return{...A,onClick:ec({nodeId:v,annotationId:b,nodeAnnotationIds:T?f.get(T)??[]:[],referenceNodeInteractionEnabled:I,previewSnapTargetsEnabled:t,onReferenceNodeClick:m,onPreviewSnapTargetNodeClick:c,onNodeAnnotationsSelect:u,onAnnotationSelect:s})??A.onClick,onHoverChange:N,onLongPress:h?void 0:A.onLongPress??ka({nodeId:v,annotationId:b,onNodeLongPress:l,canStartNodeEditing:d}),longPressDurationMs:A.longPressDurationMs??wo.nodeLabelLongPressDurationMs}})},ak=e=>{const n=ok(e),t=tc(n);return{pointLabels:n,visibleStandalonePoints:rk(e).filter(o=>!t.has(o.id))}},ik=(e,n)=>{if(e.anchorKind===ul.AREA_CENTROID)return e;const t=e.coordinateCandidates;if(t&&t.length>0){const o=t.filter(a=>!n(a.nodeId));if(o.length===t.length)return e;if(o.length===0)return{...e,hideLabelAndStem:!0};const[r]=o;return{...e,coordinateCandidates:o,nodeId:r.nodeId??e.nodeId,coordinate:r.coordinate}}return n(e.nodeId)?{...e,hideLabelAndStem:!0}:e},Ls=(e,{surfaceKey:n="committed",enableHostInteractionTargets:t,points:o,linkedNodeGroups:r,edges:a,polygonFills:i,pointLabels:s,selectedAnnotationIds:u,formatOptions:l,lineLabelOptions:d,activeEditedNodeId:c,isMoveGizmoDragging:m=!1,liveAnchors:y,previewSnapTargetHoverEnabled:p=!1,onPreviewSnapTargetNodeClick:f,onAnnotationSelect:A,onNodeAnnotationsSelect:v,onNodeLongPress:b,canStartNodeEditing:T,onReferenceNodeClick:I,onReferenceNodeHover:N,onReferenceEdgeClick:h,insertNodeTargetAnnotationIds:S=[],onInsertNodeTargetClick:k,onDistanceTriangleCornerClick:C})=>{const L=g.useMemo(()=>dr(d),[d]),R=!!(p&&f);Hb(e,{edges:a,formatOptions:l,lineLabelOptions:L,surfaceKey:n,activeEditedNodeId:t?c:null,blockEdgeInteractions:!t||R||c!==null,onAnnotationSelect:A,onEdgeClick:h,insertNodeTargetAnnotationIds:S,onInsertNodeTargetClick:k,onDistanceTriangleCornerClick:C,liveAnchors:y}),Jb(e,i),Wb(e,i,n);const w=g.useMemo(()=>new Set(u),[u]),_=g.useMemo(()=>bu(r),[r]),M=g.useMemo(()=>c?_.get(c)??c:null,[c,_]),q=g.useCallback(K=>M!==null&&typeof K=="string"&&(_.get(K)??K)===M,[_,M]),D=g.useMemo(()=>c===null?s:s.map(K=>ik(K,q)),[c,q,s]),$=c!==null&&!m,V=!!($&&I),G=!!($&&N),U=g.useMemo(()=>ak({points:o,pointLabels:D,selectedAnnotationIdSet:w,previewSnapTargetsEnabled:R,referenceNodeClickEnabled:V,referenceNodeHoverEnabled:G,nodeLinkIdByNodeId:_,previewNodeLinkId:M,isInPreviewNodeLink:q,onAnnotationSelect:A,onNodeAnnotationsSelect:v,onNodeLongPress:b,canStartNodeEditing:T,onPreviewSnapTargetNodeClick:f,onReferenceNodeClick:I,onReferenceNodeHover:N,enableHostInteractionTargets:t}),[t,q,_,A,v,b,T,f,I,N,D,o,M,R,V,G,w]);$T(e,U.visibleStandalonePoints,y,`${n}-runtime-point-marker`),HT(e,U.pointLabels,y,q,`${n}-runtime-point-label`,L)},sk=(e,{baseVisualModels:n,overlayVisualModels:t,linkedNodeGroups:o,effectiveLinkedNodeGroups:r,selectedAnnotationIds:a,formatOptions:i,lineLabelOptions:s,activeEditedNodeId:u,isMoveGizmoDragging:l,liveAnchors:d,previewSnapTargetHoverEnabled:c,onPreviewSnapTargetNodeClick:m,onAnnotationSelect:y,onNodeAnnotationsSelect:p,onNodeLongPress:f,canStartNodeEditing:A,onReferenceNodeClick:v,onReferenceNodeHover:b,onPreviewNodeHover:T,onReferenceEdgeClick:I,insertNodeTargetAnnotationIds:N,onInsertNodeTargetClick:h,onDistanceTriangleCornerClick:S})=>{Ls(e,{surfaceKey:"committed",enableHostInteractionTargets:!0,points:n.points??[],linkedNodeGroups:o,edges:n.edges??[],polygonFills:n.polygonFills??[],pointLabels:n.pointLabels??[],selectedAnnotationIds:a,formatOptions:i,lineLabelOptions:s,activeEditedNodeId:u,isMoveGizmoDragging:l,liveAnchors:d,previewSnapTargetHoverEnabled:c,onPreviewSnapTargetNodeClick:m,onAnnotationSelect:y,onNodeAnnotationsSelect:p,onNodeLongPress:f,canStartNodeEditing:A,onReferenceNodeClick:v,onReferenceNodeHover:u!==null?b:T,onReferenceEdgeClick:I,insertNodeTargetAnnotationIds:N,onInsertNodeTargetClick:h,onDistanceTriangleCornerClick:S});const k=u!==null;Ls(e,{surfaceKey:"preview",enableHostInteractionTargets:k,points:(t==null?void 0:t.points)??[],linkedNodeGroups:r,edges:(t==null?void 0:t.edges)??[],polygonFills:(t==null?void 0:t.polygonFills)??[],pointLabels:(t==null?void 0:t.pointLabels)??[],selectedAnnotationIds:a,formatOptions:i,lineLabelOptions:s,activeEditedNodeId:u,isMoveGizmoDragging:l,liveAnchors:d,onNodeLongPress:k?f:void 0,canStartNodeEditing:k?A:void 0,onReferenceNodeClick:k?v:void 0,onReferenceNodeHover:k?b:void 0})},Bt={},Rt=e=>Object.keys(e).length>0,Rs=(e,n)=>{const t=Object.keys(e),o=Object.keys(n);return t.length!==o.length?!1:t.every(r=>{const a=e[r],i=n[r];return Wa(a,i)})},lk=(e,n)=>Rt(n)?e.map(t=>{const o=n[t.id];return o?{...t,coordinate:o}:t}):e,uk=({annotationEntries:e,coordinateOverrides:n})=>{const t=new Set(Object.keys(n));return new Set(e.flatMap(o=>o.nodeIds.some(r=>t.has(r))?[o.id]:[]))},Nn=({models:e,isAffected:n,keepAffected:t})=>{if(!e)return;const o=e.filter(r=>n(r)===t);return o.length>0?o:void 0},dk=({point:e,affectedAnnotationIdSet:n,movedNodeIdSet:t})=>typeof e.annotationId=="string"&&n.has(e.annotationId)||typeof e.nodeId=="string"&&t.has(e.nodeId),ck=({edge:e,affectedAnnotationIdSet:n,movedNodeIdSet:t})=>{var o;return typeof e.annotationId=="string"&&n.has(e.annotationId)||!!((o=e.nodeIds)!=null&&o.some(r=>t.has(r)))},mk=({polygonFill:e,affectedAnnotationIdSet:n,movedNodeIdSet:t})=>{var o;return typeof e.annotationId=="string"&&n.has(e.annotationId)||!!((o=e.nodeIds)!=null&&o.some(r=>t.has(r)))},yk=({pointLabel:e,affectedAnnotationIdSet:n,movedNodeIdSet:t})=>{var o;return typeof e.annotationId=="string"&&n.has(e.annotationId)||typeof e.nodeId=="string"&&t.has(e.nodeId)||!!((o=e.coordinateCandidates)!=null&&o.some(r=>typeof r.nodeId=="string"&&t.has(r.nodeId)))},pk=({baseVisualModels:e,overlayVisualModels:n,annotationEntries:t,coordinateOverrides:o})=>{var y,p,f,A;if(!Rt(o))return{baseVisualModels:e,overlayVisualModels:null};const r=new Set(Object.keys(o)),a=uk({annotationEntries:t,coordinateOverrides:o}),i=v=>dk({point:v,affectedAnnotationIdSet:a,movedNodeIdSet:r}),s=v=>ck({edge:v,affectedAnnotationIdSet:a,movedNodeIdSet:r}),u=v=>mk({polygonFill:v,affectedAnnotationIdSet:a,movedNodeIdSet:r}),l=v=>yk({pointLabel:v,affectedAnnotationIdSet:a,movedNodeIdSet:r}),d={points:Nn({models:e.points,isAffected:i,keepAffected:!1}),edges:Nn({models:e.edges,isAffected:s,keepAffected:!1}),polygonFills:Nn({models:e.polygonFills,isAffected:u,keepAffected:!1}),pointLabels:Nn({models:e.pointLabels,isAffected:l,keepAffected:!1})},c={points:Nn({models:n.points,isAffected:i,keepAffected:!0}),edges:Nn({models:n.edges,isAffected:s,keepAffected:!0}),polygonFills:Nn({models:n.polygonFills,isAffected:u,keepAffected:!0}),pointLabels:Nn({models:n.pointLabels,isAffected:l,keepAffected:!0})},m=!!((y=c.points)!=null&&y.length)||!!((p=c.edges)!=null&&p.length)||!!((f=c.polygonFills)!=null&&f.length)||!!((A=c.pointLabels)!=null&&A.length);return{baseVisualModels:d,overlayVisualModels:m?c:null}},gk=({plugins:e,...n})=>{const t=e.map(o=>{var r;return((r=o.visualModels)==null?void 0:r.build(n))??null}).filter(o=>!!o);return{points:t.flatMap(o=>o.points??[]),edges:t.flatMap(o=>o.edges??[]),polygonFills:t.flatMap(o=>o.polygonFills??[]),pointLabels:t.flatMap(o=>o.pointLabels??[])}},fk=({plugins:e,nodes:n,edges:t,linkedNodeGroups:o,annotationEntries:r,draftStatesByToolType:a,elevationReferenceAnnotationId:i,selectedAnnotationId:s,selectedAnnotationIds:u,isSelectionAdditiveModifierPressed:l,onAnnotationSelect:d,setElevationReferenceAnnotationId:c,toggleAnnotationElevationDisplayMode:m,onNodeLongPress:y,formatOptions:p,draftNodeCoordinateOverrides:f,effectiveNodes:A,effectiveLinkedNodeGroups:v})=>{const b=g.useCallback((N,h)=>gk({plugins:e,nodes:N,edges:t,linkedNodeGroups:h,annotationEntries:r,draftStatesByToolType:a,elevationReferenceAnnotationId:i,selectedAnnotationId:s,selectedAnnotationIds:u,isSelectionAdditiveModifierPressed:l,setSelectedAnnotationId:d,setElevationReferenceAnnotationId:c,toggleAnnotationElevationDisplayMode:m,onNodeLongPress:y,formatOptions:p}),[r,a,t,i,p,l,d,y,e,s,u,c,m]),T=g.useMemo(()=>b(n,o),[b,o,n]),I=g.useMemo(()=>Rt(f)?b(A,v):null,[b,f,v,A]);return g.useMemo(()=>{if(!I)return{baseVisualModels:T,overlayVisualModels:null};const N=pk({baseVisualModels:T,overlayVisualModels:I,annotationEntries:r,coordinateOverrides:f});return{baseVisualModels:N.baseVisualModels,overlayVisualModels:N.overlayVisualModels}},[r,T,f,I])},Bn={clickDelayMs:220,doubleClickDistancePx:12,cameraMovePickIntervalMs:75,surfaceMissLimit:2,normalSampleIntervalMs:48,normalSampleDistancePx:6,debugLog:!1},Ak={},Ft=(e,n)=>typeof e=="number"&&Number.isFinite(e)?Math.max(0,e):n,vk=(e,n)=>typeof e=="number"&&Number.isFinite(e)?Math.max(0,Math.floor(e)):n,gS=e=>{const n=e??Ak;return{clickDelayMs:Ft(n.clickDelayMs,Bn.clickDelayMs),doubleClickDistancePx:Ft(n.doubleClickDistancePx,Bn.doubleClickDistancePx),cameraMovePickIntervalMs:Ft(n.cameraMovePickIntervalMs,Bn.cameraMovePickIntervalMs),surfaceMissLimit:vk(n.surfaceMissLimit,Bn.surfaceMissLimit),normalSampleIntervalMs:Ft(n.normalSampleIntervalMs,Bn.normalSampleIntervalMs),normalSampleDistancePx:Ft(n.normalSampleDistancePx,Bn.normalSampleDistancePx),debugLog:n.debugLog??Bn.debugLog}},oc=(e,n)=>{const t=e.x-n.x,o=e.y-n.y;return Math.sqrt(t*t+o*o)},fS=(e,n,t)=>!!(e&&oc(e,n)<=t),AS={x:Number.NaN,y:Number.NaN},vS=[],Tk=5,bk=0,kk="unsupported",TS=e=>{if(e.shiftKey)return Vp.SHIFT;if(e.ctrlKey||e.altKey)return kk},ws=(e,n)=>{const t=e.getBoundingClientRect();return{x:n.clientX-t.left,y:n.clientY-t.top}},bS=(e,n)=>e===n||e.x===n.x&&e.y===n.y,kS=(e,n)=>n?(n.x=e.x,n.y=e.y,n):{x:e.x,y:e.y},Nk=({pickedIds:e,edgeAnnotationIdsById:n,polygonFillAnnotationIdsById:t})=>{for(const o of e){const r=[...n.entries()].find(([a])=>o===a||o.startsWith(`${a}-`));if(r)return{isRuntimeTarget:!0,annotationId:r[1]};if(t.has(o))return{isRuntimeTarget:!0,annotationId:t.get(o)??null}}return{isRuntimeTarget:!1,annotationId:null}},Ik=e=>e.shiftKey||e.ctrlKey||e.altKey||e.metaKey,hk=({engine:e,enabled:n,baseEdges:t,overlayEdges:o,basePolygonFills:r,overlayPolygonFills:a,onAnnotationSelect:i})=>{const s=g.useMemo(()=>new Map([...t,...o].map(l=>[l.id,l.annotationId??null])),[t,o]),u=g.useMemo(()=>new Map([...r,...a].map(l=>[l.id,l.annotationId??null])),[r,a]);return g.useEffect(()=>{if(!j(e)||!n)return;const{canvas:l}=e;let d=null;const c=y=>{d=y.button===bk?ws(l,y):null},m=y=>{const p=d;if(d=null,e.isDestroyed()||Ik(y)||!p)return;const f=ws(l,y);if(oc(p,f)>Tk)return;const A=e.pickAnnotationIdsAt(f),v=Nk({pickedIds:A,edgeAnnotationIdsById:s,polygonFillAnnotationIdsById:u});if(v.isRuntimeTarget){i(v.annotationId),e.requestRender();return}i(null),e.requestRender()};return l.addEventListener("pointerdown",c,{capture:!0}),l.addEventListener("click",m),()=>{l.removeEventListener("pointerdown",c,{capture:!0}),l.removeEventListener("click",m)}},[s,n,e,i,u]),null},Sk=({annotationsStore:e,isSelectionAdditiveModifierPressed:n})=>g.useCallback(t=>{if(!t){e.dispatch(At(null));return}if(!n){e.dispatch(At(t));return}const o=e.getState().selectionState.selectedAnnotationIds,r=o.includes(t)?o.filter(a=>a!==t):[...o,t];e.dispatch(Et(r))},[e,n]),rc=({draftStore:e,toolTypes:n})=>{const[t,o]=g.useReducer(r=>r+1,0);return g.useEffect(()=>{const r=n.map(a=>e.subscribe(a,o));return()=>{r.forEach(a=>a())}},[e,n]),g.useMemo(()=>Object.fromEntries(n.flatMap(r=>{const a=e.get(r);return a.coordinates.length>0||a.linkedNodeGroupIds.length>0||!!a.feedback?[[r,a]]:[]})),[e,n,t])},Ck=e=>{const[n,t]=g.useState(!1),o=g.useCallback(r=>{t(a=>a===r?a:r)},[]);return g.useEffect(()=>{const r=()=>{o(!1)},a=l=>{o(l.shiftKey)},i=l=>{(l.key===e||l.shiftKey)&&o(l.shiftKey)},s=l=>{(l.key===e||!l.shiftKey)&&o(l.shiftKey)},u=()=>{document.hidden&&r()};return window.addEventListener("keydown",i,!0),window.addEventListener("keyup",s,!0),window.addEventListener("pointerdown",a,!0),window.addEventListener("blur",r),document.addEventListener("visibilitychange",u),()=>{window.removeEventListener("keydown",i,!0),window.removeEventListener("keyup",s,!0),window.removeEventListener("pointerdown",a,!0),window.removeEventListener("blur",r),document.removeEventListener("visibilitychange",u)}},[e,o]),n},lo=(()=>{const e=Km+Qm,n=e*2;return Object.freeze({crosshair:Object.freeze({canvasHalfExtentPx:e,canvasSizePx:n,viewBox:`-27 -27 ${n} ${n}`}),selectionAdditiveIndicator:Object.freeze({fontSizeRem:"1.2857rem",offsetPx:Object.freeze({x:15,y:-10})})})})(),at={CROSSHAIR:"crosshair",SELECTION_ADDITIVE_INDICATOR:"selection-additive-indicator"},Ek={[at.CROSSHAIR]:"annotation-candidate-crosshair-layer",[at.SELECTION_ADDITIVE_INDICATOR]:"annotation-selection-additive-indicator-layer"},Ok={[at.CROSSHAIR]:"annotation-preview-crosshair",[at.SELECTION_ADDITIVE_INDICATOR]:"annotation-selection-additive-indicator"},Lk=()=>{const e=ny({canvasSizePx:lo.crosshair.canvasSizePx,foregroundBlendMode:Xs.NORMAL,foregroundFill:jc,pathDefinitions:Xm,shadowBlendMode:Hc,shadowBlurPx:zc,shadowStrokeColor:Uc,shadowStrokeLinejoin:"round",shadowStrokeWidth:Math.max(Vc,0)*2,showAura:!0,viewBox:lo.crosshair.viewBox});return cr(e,{display:"none"}),e},Rk=()=>{const e=document.createElement("div");return e.textContent="+",cr(e,{display:"none",color:"rgba(255, 255, 255, 0.98)",fontFamily:'"Segoe UI", "Helvetica Neue", Helvetica, Arial, sans-serif',fontSize:lo.selectionAdditiveIndicator.fontSizeRem,fontWeight:"700",lineHeight:"1",pointerEvents:"none",userSelect:"none",filter:"drop-shadow(0 0 1px rgba(0, 0, 0, 0.98)) drop-shadow(0 1px 2px rgba(0, 0, 0, 0.98))"}),e},wk=e=>{const n=e===at.SELECTION_ADDITIVE_INDICATOR?Rk():Lk();return n.id=Ok[e],n},Io=e=>{const n=e.getBoundingClientRect();return{left:n.left,top:n.top,right:n.right,bottom:n.bottom}},xk=(e,n)=>!!(n&&e.x>=n.left&&e.x<=n.right&&e.y>=n.top&&e.y<=n.bottom),xs=(e,n=null,{enabled:t=!0,variant:o=at.CROSSHAIR}={})=>{const r=g.useRef(t),a=g.useRef(null),i=g.useRef(n),s=g.useRef(()=>{});r.current=t,i.current=n,g.useEffect(()=>{s.current(a.current,i.current)},[n,t]),g.useEffect(()=>{if(!e||e.isDestroyed())return;const u=mr(e,Ek[o],Te.VISUALIZER),l=u==null?void 0:u.parentElement;if(!u||!(l instanceof HTMLElement))return;const d=e.pointer.register();cr(u,{zIndex:Se.layerZIndex});const c=wk(o);u.appendChild(c);let m=Io(l),y=Io(e.canvas);const p=()=>{c.style.display="none"},f=(T,I)=>{if(a.current=T,i.current=I,!r.current){p();return}const N=T!==null&&xk(T,y);if(o===at.SELECTION_ADDITIVE_INDICATOR){if(T&&m&&N){c.style.display="block",c.style.transform=`translate(${T.x-m.left+lo.selectionAdditiveIndicator.offsetPx.x}px, ${T.y-m.top+lo.selectionAdditiveIndicator.offsetPx.y}px)`;return}p();return}if(T&&m&&N){c.style.display="block",c.style.transform=`translate(${T.x-m.left}px, ${T.y-m.top}px) translate(-50%, -50%)`;return}if(N&&I&&y&&m&&Number.isFinite(I.x)&&Number.isFinite(I.y)){c.style.display="block",c.style.transform=`translate(${I.x+y.left-m.left}px, ${I.y+y.top-m.top}px) translate(-50%, -50%)`;return}p()};s.current=f;const A=()=>{m=Io(l),y=Io(e.canvas),f(a.current,i.current)},v=typeof ResizeObserver<"u"?new ResizeObserver(()=>{A()}):null;v==null||v.observe(l),v==null||v.observe(e.canvas),window.addEventListener("resize",A),window.addEventListener("scroll",A,!0);const b=e.pointer.subscribeClientPosition(T=>{f(T,i.current)});return f(e.pointer.getClientPosition(),i.current),()=>{v==null||v.disconnect(),window.removeEventListener("resize",A),window.removeEventListener("scroll",A,!0),b(),d(),Ot(u)}},[e,o])},gr={FREE:"free",GROUND:"ground",MEASUREMENT_PLANE:"measurement-plane"},mt=Object.freeze({frame:gr.FREE,axes:!0,surfaceDrag:!0,projectOntoMeasurementPlane:!1}),qk=Object.freeze({frame:gr.GROUND,axes:!1,surfaceDrag:!0,projectOntoMeasurementPlane:!1}),qs=Object.freeze({frame:gr.MEASUREMENT_PLANE,axes:!1,surfaceDrag:!1,projectOntoMeasurementPlane:!0}),NS=Object.freeze({[P.AREA_PLANAR]:Object.freeze({frame:gr.MEASUREMENT_PLANE,axes:!0,surfaceDrag:!0,projectOntoMeasurementPlane:!0,joinOffPlaneNodes:!0})}),_k=Object.freeze({[P.POINT]:mt,[P.DISTANCE]:mt,[P.POLYLINE]:mt,[P.LABEL]:mt,[P.AREA_GROUND]:qk,[P.AREA_PLANAR]:qs,[P.AREA_VERTICAL]:qs}),IS=e=>e&&_k[e]||mt,Pk=(e,n,t,o=()=>!0)=>{const r=n.filter(a=>a.nodeIds.includes(e)&&o(a));for(let a=t.length-1;a>=0;a-=1){const i=r.find(s=>s.id===t[a]);if(i)return i}return r[0]??null},Mk=.05,Dk=(e,n)=>{const t=new Map(n.map(r=>[r.id,z(r.coordinate)]));return Fp({id:e.id,type:e.toolType,nodeIds:[...e.nodeIds],edgeRelationIds:[],closed:e.closed??!0,planeLocked:!0},t).plane??null},Bk=(e,n)=>Qn(Yl(z(e),n)),Fk=(e,n)=>{const t=z(e);return t.distanceTo(Yl(t,n))>Mk},$o={referenceNodeInteractionReleaseGuardMs:48,draftPreviewFlushIntervalMs:200,labels:{verticalAxis:"Punkt entlang der U-Achse verschieben",eastAxis:"Punkt entlang der E-Achse verschieben",northAxis:"Punkt entlang der N-Achse verschieben",genericAxis:"Punkt entlang der Achse verschieben",outerDisc:"Punkt auf Höhenebene verschieben",surfacePlane:"Punkt auf Oberfläche verschieben",freePlane:"Punkt in der Ebene verschieben"},referenceLineAxis:{primary:{id:"reference-line-parallel",color:"rgba(59, 130, 246, 0.98)",title:"Punkt parallel zur Referenzlinie verschieben"},secondary:{id:"reference-line-secondary",color:"rgba(34, 197, 94, 0.98)",title:"Punkt orthogonal zur Referenzlinie verschieben"},tertiary:{id:"reference-line-tertiary",color:"rgba(239, 68, 68, 0.98)",title:"Punkt entlang der aktiven Referenzebene verschieben"}}},Gk=new Set([P.POINT,P.DISTANCE]),jk=({activeEditedNodeId:e,annotationEntries:n,selectedAnnotationIds:t})=>{if(!e)return!1;const o=new Set(t);return n.some(r=>o.has(r.id)&&r.nodeIds.includes(e)&&Gk.has(r.toolType))},_s=e=>{e.current!==null&&typeof window<"u"&&(window.clearTimeout(e.current),e.current=null)},Hk=({annotationsStore:e,selectedAnnotationIds:n})=>{const[t,o]=g.useState(Bt),[r,a]=g.useState(null),i=g.useRef(Bt),s=g.useRef(null),u=g.useRef(null),l=g.useRef(0),d=g.useRef(null),c=g.useRef(null),m=g.useRef(null),y=g.useRef(null),p=g.useCallback(()=>{u.current=null,l.current=typeof performance<"u"?performance.now():0,a(()=>s.current),o(T=>Rs(T,i.current)?T:i.current)},[]),f=g.useCallback(()=>{if(u.current!==null)return;if(typeof window>"u"){p();return}const I=(typeof performance<"u"?performance.now():0)-l.current,N=Math.max(0,$o.draftPreviewFlushIntervalMs-I);u.current=window.setTimeout(p,N)},[p]),A=g.useCallback(({nextDraftNodeCoordinateOverrides:T,nextDraftLinkToNodeId:I})=>{const N=Rt(T)?T:Bt,h=!Rs(i.current,N),S=s.current!==I;!h&&!S||(i.current=N,s.current=I,f())},[f]),v=g.useCallback(()=>{_s(u),i.current=Bt,s.current=null,d.current=null,c.current=null,m.current=null,y.current=null,a(null),o(T=>Rt(T)?Bt:T)},[]),b=g.useCallback(T=>{if(!T){v();return}const I=i.current,N=I[T]??t[T];if(!N){v();return}e.dispatch(TA({nodeId:T,coordinate:N,movedNodeIds:Object.keys(I),linkToNodeId:s.current,selectedAnnotationIds:n})),v()},[e,v,t,n]);return g.useEffect(()=>()=>_s(u),[]),{draftNodeCoordinateOverrides:t,draftLinkToNodeId:r,snappedNodeIdRef:d,draftBaseCoordinateRef:c,draftBaseScreenPositionRef:m,hoveredReferenceNodeIdRef:y,updateDraftPreviewState:A,clearDraftNodeCoordinateOverrides:v,commitDraftNodeCoordinateOverrides:b}},zk=e=>{const n=_e(e);if(!n)return null;const t=Qo(n),{primary:o,secondary:r,tertiary:a}=$o.referenceLineAxis;return{axisDirection:n,axisTitle:o.title,preferredAxisId:o.id,axisCandidates:[{id:o.id,direction:n,color:o.color,title:o.title},{id:r.id,direction:t.xAxis,color:r.color,title:r.title},{id:a.id,direction:t.yAxis,color:a.color,title:a.title}]}},Uk=({activeEditedNodeId:e,activeNodeEditRule:n,nodesById:t,areReferenceInteractionsSuppressed:o,setDraftCoordinateForScopedMove:r,setAxisOverride:a,draftBaseCoordinateRef:i,draftBaseScreenPositionRef:s,hoveredReferenceNodeIdRef:u,nodes:l})=>{const d=g.useCallback(p=>{var f;return i.current??((f=l.find(A=>A.id===p))==null?void 0:f.coordinate)??null},[i,l]),c=g.useCallback(p=>{if(!e||o())return!1;const f=t.get(e),A=t.get(p);if(!f||!A)return!1;if(f.id!==A.id){const v={...f.coordinate,altitude:A.coordinate.altitude};u.current=null,i.current=v,r(f.id,v,{disableSnap:!0})}return!0},[e,o,i,u,t,r]),m=g.useCallback((p,f)=>{if(!e||o())return;const A=d(e),v=t.get(p);if(A){if(f){u.current=p,r(e,{...A,altitude:(v==null?void 0:v.coordinate.altitude)??A.altitude},{disableSnap:!0});return}u.current===p&&(u.current=null,r(e,A,{screenPosition:s.current??void 0,disableSnap:!0}))}},[e,o,s,u,t,d,r]),y=g.useCallback((p,f)=>{if(!e||!n.axes||o())return!1;const A=t.get(p),v=t.get(f);if(!A||!v)return!1;const b=zk(new x().subVectors(z(v.coordinate),z(A.coordinate)));return b?(a(b),!0):!1},[e,n,o,t,a]);return{handleReferenceNodeClick:c,handleReferenceNodeHover:m,handleReferenceEdgeClick:y}},Vk=({engine:e,nodes:n,linkedNodeGroups:t,annotationsStore:o,selectedAnnotationIds:r,measurementEditPlane:a,joinOffPlaneNodes:i,liveAnchors:s,updateDraftPreviewState:u,snappedNodeIdRef:l,draftBaseCoordinateRef:d,draftBaseScreenPositionRef:c,hoveredReferenceNodeIdRef:m})=>g.useCallback((y,p,{screenPosition:f,forcedSnappedNodeId:A,rememberBaseCoordinate:v=!1,disableSnap:b=!1}={})=>{const T=a?Bk(p,a):p,{movedNodeIds:I}=Bu({nodeId:y,nodes:n,linkedNodeGroups:t,annotationEntries:o.getState().annotationEntries,selectedAnnotationIds:r});if(I.length===0)return;v&&(d.current=T,c.current=f??null);const N=(k,C)=>{const L=z(k);I.forEach(R=>{s.set(R,L)}),u({nextDraftNodeCoordinateOverrides:Object.fromEntries(I.map(R=>[R,k])),nextDraftLinkToNodeId:C})};if(b){l.current=null,N(T,null);return}const h=e&&!e.isDestroyed()?e.worldToScreen(z(T))??void 0:void 0;let S=$u({engine:e,nodes:n,linkedNodeGroups:t,coordinate:T,screenPosition:f??c.current??h,forcedSnappedNodeId:A??m.current,lockedNodeId:l.current,excludedNodeIds:I});a&&!i&&S.snappedNodeId!==null&&Fk(S.coordinate,a)&&(S={...S,coordinate:T,snappedNodeId:null}),l.current=S.snappedNodeId,N(S.coordinate,S.snappedNodeId)},[a,i,o,t,s,n,e,r,u,l,d,c,m]),$k=()=>{},Wk=e=>{},Yk=(e,n,t,{annotationsStore:o,annotationEntries:r,selectedAnnotationIds:a,onActiveEditedNodeIdChange:i,referenceObjectSizing:s=Uu,liveAnchors:u,resolveNodeEditRule:l=$k})=>{const d=g.useMemo(()=>kd(()=>{}),[]),c=u??d,[m,y]=g.useState(null),[p,f]=g.useState(!1),[A,v]=g.useState(null),b=g.useRef(!1),T=g.useRef(0),{draftNodeCoordinateOverrides:I,draftLinkToNodeId:N,snappedNodeIdRef:h,draftBaseCoordinateRef:S,draftBaseScreenPositionRef:k,hoveredReferenceNodeIdRef:C,updateDraftPreviewState:L,clearDraftNodeCoordinateOverrides:R,commitDraftNodeCoordinateOverrides:E}=Hk({annotationsStore:o,selectedAnnotationIds:a}),w=g.useMemo(()=>m?Pk(m,r,a,B=>l(B.toolType)!==void 0):null,[m,r,l,a]),_=g.useMemo(()=>w&&l(w.toolType)||mt,[w,l]),M=g.useMemo(()=>w&&_.projectOntoMeasurementPlane?Dk(w,n):null,[w,_,n]),q=g.useMemo(()=>M?he(M.normalECEF):null,[M]),D=g.useMemo(()=>jk({activeEditedNodeId:m,annotationEntries:r,selectedAnnotationIds:a}),[m,r,a]),$=g.useCallback(()=>b.current||Date.now()<T.current,[]),V=Vk({engine:e,nodes:n,linkedNodeGroups:t,annotationsStore:o,selectedAnnotationIds:a,measurementEditPlane:M,joinOffPlaneNodes:_.joinOffPlaneNodes===!0,liveAnchors:c,updateDraftPreviewState:L,snappedNodeIdRef:h,draftBaseCoordinateRef:S,draftBaseScreenPositionRef:k,hoveredReferenceNodeIdRef:C}),G=g.useMemo(()=>lk(n,I),[I,n]),U=g.useMemo(()=>{const B=Object.keys(I),Q=m??B[0]??null;return!Q||B.length===0?t:Nu({nodes:G,nodeLinks:t,nodeId:Q,movedNodeIds:B,linkToNodeId:N})},[m,N,I,G,t]),K=g.useMemo(()=>new Map(G.map(B=>[B.id,B])),[G]),ae=g.useCallback(B=>{r.some(ue=>ue.nodeIds.includes(B)&&a.includes(ue.id)&&!ue.locked&&!ue.readOnly)&&(m&&m!==B&&E(m),v(null),y(B))},[m,r,E,a]),{handleReferenceNodeClick:J,handleReferenceNodeHover:W,handleReferenceEdgeClick:oe}=Uk({activeEditedNodeId:m,activeNodeEditRule:_,nodes:n,nodesById:K,areReferenceInteractionsSuppressed:$,setDraftCoordinateForScopedMove:V,setAxisOverride:v,draftBaseCoordinateRef:S,draftBaseScreenPositionRef:k,hoveredReferenceNodeIdRef:C}),me=g.useCallback(B=>{if(b.current=B,f(B),B||!m){B&&(T.current=0);return}T.current=Date.now()+$o.referenceNodeInteractionReleaseGuardMs,E(m)},[m,E]),Ce=g.useMemo(()=>G.map(B=>({id:B.id,geometryECEF:z(B.coordinate)})),[G]),ne=g.useCallback((B,Q,ue)=>{V(B,Qn(Q),{screenPosition:ue,rememberBaseCoordinate:!0})},[V]);return((e==null?void 0:e.hooks.usePointMoveGizmo)??Wk)({points:Ce,labels:$o.labels,movePointId:m,axisDirection:(A==null?void 0:A.axisDirection)??null,discPlaneNormal:q,axisTitle:(A==null?void 0:A.axisTitle)??null,preferredAxisId:(A==null?void 0:A.preferredAxisId)??null,axisCandidates:(A==null?void 0:A.axisCandidates)??null,radius:s.worldRadiusMeters,discScalingMode:s.scalingMode,discOutlineScreenPixelRadius:s.targetScreenRadiusCssPx,discResizeWorldRadiusToScreenTarget:s.resizeWorldRadiusToScreenTarget,discQuantizeWorldRadius:s.quantizeWorldRadius,freezeDiscScaleDuringDrag:s.resizeWorldRadiusToScreenTarget,discResizeStepFactor:s.resizeStepFactor,showRotationHandle:!1,showAxes:_.axes,snapPlaneDragToGround:_.surfaceDrag&&M===null,excludeRegisteredDragSampleOccluders:D,onDragStateChange:me,onPointPositionChange:ne,onExit:()=>{E(m),b.current=!1,f(!1),v(null),y(null)}}),g.useEffect(()=>{if(!m){R();return}G.some(B=>B.id===m)||(R(),v(null),y(null))},[m,R,G]),g.useEffect(()=>{!m||!n.some(Q=>Q.id===m)||r.some(Q=>Q.nodeIds.includes(m)&&a.includes(Q.id))||(E(m),v(null),y(null))},[m,r,E,n,a]),g.useEffect(()=>{var B;m&&(S.current=((B=n.find(Q=>Q.id===m))==null?void 0:B.coordinate)??null,k.current=null,C.current=null)},[m,S,k,C,n]),g.useEffect(()=>{i==null||i(m)},[m,i]),g.useEffect(()=>{p||Rt(I)||(c.clear(),e&&!e.isDestroyed()&&e.requestRender())},[I,p,c,e]),{activeEditedNodeId:m,draftNodeCoordinateOverrides:I,effectiveLinkedNodeGroups:U,effectiveNodes:G,handleNodeLongPress:ae,isMoveGizmoDragging:p,handleReferenceNodeClick:J,handleReferenceNodeHover:W,handleReferenceEdgeClick:oe}},Kk=e=>e===Vt.START_COORDINATE?Vt.END_COORDINATE:Vt.START_COORDINATE,Qk=e=>Vt.START_COORDINATE,hS=e=>e===rn.LEFTMOST_SCREEN_SPACE?rn.RIGHTMOST_SCREEN_SPACE:rn.LEFTMOST_SCREEN_SPACE,Xk=e=>{const n=e[0],t=e[e.length-1];if(!n||!t)return rn.RIGHTMOST_SCREEN_SPACE;const o=z(n),r=z(t),a=Vs(o,r);return Math.hypot(a.east,a.north)>gt.referenceLineEpsilonMeters?rn.LEFTMOST_SCREEN_SPACE:rn.RIGHTMOST_SCREEN_SPACE},Zk=e=>new Map(e.map(n=>[n.id,n.coordinate])),Jk=(e,n)=>e.nodeIds.map(t=>n.get(t)).filter(t=>!!t),ai=({annotationEntries:e,nodes:n,annotationId:t})=>{if(!t)return[];const o=to(e,t);return o?Jk(o,Zk(n)):[]},Na=({annotationEntries:e,nodes:n,annotationId:t})=>ai({annotationEntries:e,nodes:n,annotationId:t}).flatMap(o=>o?[z(o)]:[]),{POLYLINE:eN,AREA_GROUND:nN,AREA_PLANAR:tN,AREA_VERTICAL:oN}=P,Ps=e=>e===eN||e===nN||e===tN||e===oN,rN=(e,n)=>Qn(new x().addVectors(z(e),z(n)).multiplyScalar(.5)),aN=({engine:e,nodes:n,linkedNodeGroups:t,annotationEntries:o,selectedAnnotationIds:r,annotationsStore:a,activeEditedNodeId:i,isInteractionToolActive:s,isMeasurementToolActive:u,isSelectionAdditiveModifierPressed:l,onActiveEditedNodeIdChange:d,onHoveredPointQueryNodeIdChange:c,referenceObjectSizing:m,liveAnchors:y,resolveNodeEditRule:p})=>{const f=i===null&&u,{draftNodeCoordinateOverrides:A,effectiveLinkedNodeGroups:v,effectiveNodes:b,handleNodeLongPress:T,isMoveGizmoDragging:I,handleReferenceNodeClick:N,handleReferenceNodeHover:h,handleReferenceEdgeClick:S}=Yk(e,n,t,{annotationsStore:a,annotationEntries:o,selectedAnnotationIds:r,onActiveEditedNodeIdChange:d,referenceObjectSizing:m,liveAnchors:y,resolveNodeEditRule:p}),k=g.useCallback(E=>{const w=a.getState(),_=to(w.annotationEntries,E);if(!_)return;const M=ai({annotationEntries:w.annotationEntries,nodes:w.nodes,annotationId:E}),q=_.distanceTriangleAnchorCoordinateRole??Qk(),D=(_.distanceAnchorCoordinateSelection??Xk(M))===rn.LEFTMOST_SCREEN_SPACE?rn.RIGHTMOST_SCREEN_SPACE:rn.LEFTMOST_SCREEN_SPACE;a.dispatch(zn({annotationId:E,distanceAnchorCoordinateSelection:D,distanceTriangleAnchorCoordinateRole:Kk(q)}))},[a]),C=g.useMemo(()=>{const E=new Set(r);return o.filter(w=>E.has(w.id)&&!w.locked&&!w.readOnly&&Ps(w.toolType)).map(w=>w.id)},[o,r]),L=g.useCallback((E,w,_)=>{const M=a.getState(),q=to(M.annotationEntries,E);if(!q||q.locked||q.readOnly||!Ps(q.toolType))return!1;const D=M.nodes.find(V=>V.id===w),$=M.nodes.find(V=>V.id===_);return!D||!$?!1:(a.dispatch(vA({annotationId:E,startNodeId:w,endNodeId:_,coordinate:rN(D.coordinate,$.coordinate)})),e==null||e.requestRender(),!0)},[a,e]),R=g.useCallback((E,w)=>{c(w?E:null)},[c]);return g.useEffect(()=>{f||c(null)},[c,f]),xs(e,null,{enabled:f&&(e==null?void 0:e.capabilities.pointQueryDiscInScene)!==!0}),xs(e,null,{enabled:s&&l,variant:"selection-additive-indicator"}),{draftNodeCoordinateOverrides:A,effectiveLinkedNodeGroups:v,effectiveNodes:b,handleDistanceTriangleCornerClick:k,handleInsertNodeTargetClick:L,handleNodeLongPress:T,handlePreviewSnapTargetNodeHover:R,handleReferenceEdgeClick:S,handleReferenceNodeClick:N,handleReferenceNodeHover:h,insertNodeTargetAnnotationIds:C,isMoveGizmoDragging:I,previewSnapTargetHoverEnabled:f}},ac=({engine:e,registry:n,annotationsStore:t,annotationToolDraftStore:o,setElevationReferenceAnnotationId:r,toggleAnnotationElevationDisplayMode:a,onActiveEditedNodeIdChange:i,onHoveredPointQueryNodeIdChange:s,onPreviewSnapTargetNodeClick:u,activeEditedNodeId:l,formatOptions:d,lineLabelOptions:c,referenceObjectSizing:m,visualInteractionEnabled:y=!1,visualAnnotationEntryRoles:p})=>{const{invalidatePositions:f}=Yo(),A=g.useMemo(()=>kd(f),[f]),v=se(Y=>Y.annotationToolType),b=g.useMemo(()=>n.getPlugin(v)??null,[v,n]),T=(b==null?void 0:b.kind)===zo.INTERACTION,I=(b==null?void 0:b.kind)===zo.MEASUREMENT,N=g.useCallback(Y=>{var ee;return(ee=n.getPluginsByAnnotationType(Y).find(te=>te.nodeEdit))==null?void 0:ee.nodeEdit},[n]),h=se(Y=>Y.nodes),S=se(Y=>Y.linkedNodeGroups),k=se(Y=>Y.edges),C=se(Y=>Y.annotationEntries),L=g.useMemo(()=>Ef({annotationEntries:C},{roles:p}).map(ee=>ee.readOnly&&!ee.locked?{...ee,locked:!0}:ee),[C,p]),R=se(ur),E=se(Y=>Y.selectionState.selectedAnnotationIds),w=g.useMemo(()=>n.plugins.map(Y=>Y.id),[n.plugins]),_=rc({draftStore:o,toolTypes:w}),M=se(Y=>Y.settingsState.elevationReferenceAnnotationId),q=Ck(Yn.additiveSelectionModifierKey),D=Sk({annotationsStore:t,isSelectionAdditiveModifierPressed:q}),$=g.useCallback(Y=>{const ee=Array.from(new Set(Y.filter(Boolean)));if(ee.length===0)return;if(!q){t.dispatch(Et(ee));return}const te=t.getState().selectionState.selectedAnnotationIds,F=new Set(ee),Ne=ee.every(H=>te.includes(H))?te.filter(H=>!F.has(H)):Array.from(new Set([...te,...ee]));t.dispatch(Et(Ne))},[t,q]),V=g.useMemo(()=>Ba(L),[L]),G=g.useCallback((Y,ee)=>v===xn&&!V.has(Y)&&L.some(te=>(!ee||te.id===ee)&&te.nodeIds.includes(Y)&&E.includes(te.id)&&!te.locked&&!te.readOnly),[v,L,V,E]),{draftNodeCoordinateOverrides:U,effectiveLinkedNodeGroups:K,effectiveNodes:ae,handleDistanceTriangleCornerClick:J,handleInsertNodeTargetClick:W,handleNodeLongPress:oe,handlePreviewSnapTargetNodeHover:me,handleReferenceEdgeClick:Ce,handleReferenceNodeClick:ne,handleReferenceNodeHover:be,insertNodeTargetAnnotationIds:B,isMoveGizmoDragging:Q,previewSnapTargetHoverEnabled:ue}=aN({engine:e,nodes:h,linkedNodeGroups:S,annotationEntries:L,selectedAnnotationIds:E,annotationsStore:t,activeEditedNodeId:l,isInteractionToolActive:T,isMeasurementToolActive:I,isSelectionAdditiveModifierPressed:q,onActiveEditedNodeIdChange:i,onHoveredPointQueryNodeIdChange:s,referenceObjectSizing:m,liveAnchors:A,resolveNodeEditRule:N}),{baseVisualModels:ye,overlayVisualModels:ke}=fk({plugins:n.plugins,nodes:h,edges:k,linkedNodeGroups:S,annotationEntries:L,draftStatesByToolType:_,elevationReferenceAnnotationId:M,selectedAnnotationId:R,selectedAnnotationIds:E,isSelectionAdditiveModifierPressed:q,onAnnotationSelect:D,setElevationReferenceAnnotationId:r,toggleAnnotationElevationDisplayMode:a,onNodeLongPress:oe,formatOptions:d,draftNodeCoordinateOverrides:U,effectiveNodes:ae,effectiveLinkedNodeGroups:K});return sk(e,{baseVisualModels:ye,overlayVisualModels:ke,linkedNodeGroups:S,effectiveLinkedNodeGroups:K,selectedAnnotationIds:E,formatOptions:d,lineLabelOptions:c,activeEditedNodeId:l,isMoveGizmoDragging:Q,liveAnchors:A,previewSnapTargetHoverEnabled:ue,onPreviewSnapTargetNodeClick:u,onAnnotationSelect:D,onNodeAnnotationsSelect:$,onNodeLongPress:oe,canStartNodeEditing:G,onReferenceNodeClick:ne,onReferenceNodeHover:be,onPreviewNodeHover:me,onReferenceEdgeClick:Ce,insertNodeTargetAnnotationIds:B,onInsertNodeTargetClick:W,onDistanceTriangleCornerClick:J}),O.jsx(hk,{engine:e,enabled:T||y,baseEdges:ye.edges??[],overlayEdges:(ke==null?void 0:ke.edges)??[],basePolygonFills:ye.polygonFills??[],overlayPolygonFills:(ke==null?void 0:ke.polygonFills)??[],onAnnotationSelect:D})};ac.__docgenInfo={description:"",methods:[],displayName:"RuntimeVisualHost",props:{engine:{required:!0,tsType:{name:"union",raw:"AnnotationEngine | null",elements:[{name:"AnnotationEngine"},{name:"null"}]},description:""},registry:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
  /** Scene query disc only; the existing fields still size the edit gizmo. */
  pointQueryDiscSizing?: Partial<AnnotationPointQueryDiscSizingOptions>;
}`,signature:{properties:[{key:"scalingMode",value:{name:"ReferenceObjectScalingMode",required:!0}},{key:"worldRadiusMeters",value:{name:"number",required:!0}},{key:"targetScreenRadiusCssPx",value:{name:"number",required:!0}},{key:"resizeWorldRadiusToScreenTarget",value:{name:"boolean",required:!0}},{key:"resizeStepFactor",value:{name:"number",required:!0}},{key:"quantizeWorldRadius",value:{name:"boolean",required:!0}},{key:"pointQueryDiscSizing",value:{name:"Partial",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  targetScreenRadiusCssPx: CssPixels;
  minimumScreenRadiusCssPx: CssPixels;
  maximumViewportRadiusRatio: Ratio;
  sceneResizeFactor: Ratio;
  resizeHysteresisRatio: Ratio;
  /** How long an unchanged radius label stays visible. */
  radiusLabelVisibleDurationMs: Milliseconds;
  radiusLabelFadeDurationMs: Milliseconds;
  /** Visual transition only; selected 1/2/5 world radii remain discrete. Zero disables it. */
  resizeAnimationDurationMs: Milliseconds;
}`,signature:{properties:[{key:"targetScreenRadiusCssPx",value:{name:"CssPixels",required:!0}},{key:"minimumScreenRadiusCssPx",value:{name:"CssPixels",required:!0}},{key:"maximumViewportRadiusRatio",value:{name:"Ratio",required:!0}},{key:"sceneResizeFactor",value:{name:"Ratio",required:!0}},{key:"resizeHysteresisRatio",value:{name:"Ratio",required:!0}},{key:"radiusLabelVisibleDurationMs",value:{name:"Milliseconds",required:!0},description:"How long an unchanged radius label stays visible."},{key:"radiusLabelFadeDurationMs",value:{name:"Milliseconds",required:!0}},{key:"resizeAnimationDurationMs",value:{name:"Milliseconds",required:!0},description:"Visual transition only; selected 1/2/5 world radii remain discrete. Zero disables it."}]}}],raw:`Readonly<{
  targetScreenRadiusCssPx: CssPixels;
  minimumScreenRadiusCssPx: CssPixels;
  maximumViewportRadiusRatio: Ratio;
  sceneResizeFactor: Ratio;
  resizeHysteresisRatio: Ratio;
  /** How long an unchanged radius label stays visible. */
  radiusLabelVisibleDurationMs: Milliseconds;
  radiusLabelFadeDurationMs: Milliseconds;
  /** Visual transition only; selected 1/2/5 world radii remain discrete. Zero disables it. */
  resizeAnimationDurationMs: Milliseconds;
}>`}],raw:"Partial<AnnotationPointQueryDiscSizingOptions>",required:!1},description:"Scene query disc only; the existing fields still size the edit gizmo."}]}},description:""},visualInteractionEnabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},visualAnnotationEntryRoles:{required:!1,tsType:{name:"unknown"},description:""}}};const ic=(e,n)=>{var t,o;return n?((t=e.externalCollection)==null?void 0:t.type)===n.type&&((o=e.externalCollection)==null?void 0:o.id)===n.id:e.externalCollection===void 0},iN=(e,n,t)=>{const o=new Set(n.nodeIds),r=new Set(n.edgeIds);return{nodes:e.nodes.filter(a=>o.has(a.id)).map(a=>({...a,id:t(a.id)})),edges:e.edges.filter(a=>r.has(a.id)).map(a=>({...a,id:t(a.id),startNodeId:t(a.startNodeId),endNodeId:t(a.endNodeId)})),linkedNodeGroups:e.linkedNodeGroups.filter(a=>a.nodeIds.some(i=>o.has(i))).map(a=>({...a,id:t(a.id),nodeIds:a.nodeIds.filter(i=>o.has(i)).map(t)}))}},sN=(e,n,t={})=>{const{annotationEntries:o,nodes:r}=e.getState(),a=new Set(o.map(({id:l})=>l)),i=new Set(r.map(({id:l})=>l)),s=rA(o.filter(l=>ic(l,t.externalCollection))),u=[];for(const l of n.tables.annotationEntries){const d=aA(l,s,t.idPrefix?`${t.idPrefix}:${l.id}`:l.id);d&&t.replaceExisting&&(e.dispatch(pA({annotationId:d.id})),a.delete(d.id));const c=!d&&(a.has(l.id)||l.nodeIds.some(f=>i.has(f))),m=t.idPrefix??(c?`s${(l.uuid??l.id).replace(/[^a-z0-9]/gi,"").slice(0,8)}`:void 0),y=f=>m?`${m}:${f}`:f,p=d&&t.replaceExisting?d.id:y(l.id);if(t.skipExisting&&!t.replaceExisting&&(d!==void 0||a.has(p))){(t.annotationRole!==void 0||t.readOnly!==void 0)&&e.dispatch(zn({annotationId:(d==null?void 0:d.id)??p,annotationRole:t.annotationRole,readOnly:t.readOnly}));continue}e.dispatch(Hu({annotationEntry:{...l,id:p,nodeIds:l.nodeIds.map(y),edgeIds:l.edgeIds.map(y),annotationRole:t.annotationRole??l.annotationRole,readOnly:t.readOnly??l.readOnly,externalCollection:t.externalCollection??l.externalCollection},...iN(n.tables,l,y),selectAnnotationId:t.selectAnnotationId})),a.add(p),u.push(p)}return u},lN=(e,n)=>{const t=e.getState().annotationEntries.filter(o=>ic(o,n)).map(o=>o.id);return t.length===0?[]:(e.dispatch(Ua({annotationIds:t,nextSelectedAnnotationId:null})),t)},uN=(e,n,t)=>{if(t){const r=e.getPlugin(t);if(r)return r}const o=e.getPluginsByAnnotationType(n);return o.find(r=>r.addAnnotation)??o[0]??null},dN=({registry:e,engine:n,annotationEntries:t,toolType:o,coordinates:r,options:a,linkedNodeGroupIds:i,sourceToolId:s})=>{var m,y;const u=uN(e,o,s),l=((m=u==null?void 0:u.addAnnotation)==null?void 0:m.resolveOptions({annotationType:o,toolId:s??(u==null?void 0:u.id)??null,engine:n,coordinates:r,options:a,linkedNodeGroupIds:i}))??a;if(!ir(o))return l;const d=Ff({annotationEntries:t,toolType:o}),c=(y=l==null?void 0:l.shortLabel)==null?void 0:y.trim();return{...l,shortLabel:c||Gl(o,d),shortLabelSource:c?(l==null?void 0:l.shortLabelSource)??no.CUSTOM:no.DEFAULT,shortLabelCounter:c?l==null?void 0:l.shortLabelCounter:d}},cN=({engine:e,registry:n,annotationsStore:t,measurementSequenceRef:o,nodeSequenceRef:r,edgeSequenceRef:a})=>g.useCallback((i,s,u,l,d)=>{const{annotationEntry:c,nodes:m,linkedNodeGroups:y,edges:p}=ff({toolType:i,coordinates:s,options:dN({registry:n,engine:e,annotationEntries:t.getState().annotationEntries,toolType:i,coordinates:s,options:u,linkedNodeGroupIds:l,sourceToolId:d}),linkedNodeGroupIds:l,measurementSequenceRef:o,nodeSequenceRef:r,edgeSequenceRef:a});return t.dispatch(Hu({annotationEntry:c,nodes:m,linkedNodeGroups:y,edges:p,selectAnnotationId:c.id})),c},[t,n,e,o,r,a]),Un=(e,n)=>to(e.getState().annotationEntries,n),Wo=e=>e!==null&&!e.locked&&!e.readOnly,Ms=(e,n)=>n.map(t=>to(e,t)).filter(Wo),mN=({annotationsStore:e,activeEditedNodeId:n,setActiveEditedNodeId:t})=>{const o=g.useCallback(d=>{e.dispatch(fA(d))},[e]),r=g.useCallback(d=>{e.dispatch(AA(d))},[e]),a=g.useCallback(d=>{const c=Un(e,d);c&&e.dispatch(zn({annotationId:d,hidden:!c.hidden}))},[e]),i=g.useCallback(d=>{const c=Un(e,d);if(!c||c.readOnly)return;const m=!c.locked;e.dispatch(zn({annotationId:d,locked:m})),m&&c.nodeIds.includes(n??"")&&t(null)},[n,e,t]),s=g.useCallback((d,c)=>{Wo(Un(e,d))&&e.dispatch(zn({annotationId:d,displayName:c.trim()}))},[e]),u=g.useCallback((d,c)=>{Wo(Un(e,d))&&e.dispatch(zn({annotationId:d,shortLabel:c.trim(),shortLabelSource:no.CUSTOM}))},[e]),l=g.useCallback((d,c)=>{const m=Un(e,d);m&&e.dispatch(zn({annotationId:d,elevationDisplayMode:sf(c??m.elevationDisplayMode)}))},[e]);return{setElevationReferenceAnnotationIdInStore:o,setPointTemporaryModeInStore:r,toggleAnnotationVisibility:a,toggleAnnotationLocked:i,updateAnnotationDisplayName:s,updateAnnotationShortLabel:u,toggleAnnotationElevationDisplayMode:l}},yN=e=>{const n=g.useCallback(r=>{const a=Un(e,r);if(!a)return;const i=e.getState(),s=Ru({annotation:a,coordinates:ai({annotationEntries:i.annotationEntries,nodes:i.nodes,annotationId:r})});if(!s)return;const{kind:u,name:l}=Xf(a);Zi(`annotation-${Xi(u)}-${Xi(l)}.geojson`,s)},[e]),t=g.useCallback(()=>Pu(ja(e.getState())),[e]),o=g.useCallback(()=>{Zi("annotations.geojson",t())},[t]);return{exportAnnotationGeoJson:n,buildAllAnnotationsGeoJson:t,exportAllAnnotationsGeoJson:o}},Ia=({engine:e,points:n})=>{!j(e)||n.length===0||e.flyToPoints(n,{minRadiusMeters:Yn.infoBoxFlyTo.minRadiusMeters,paddingFactor:Yn.infoBoxFlyTo.paddingFactor})},pN=({annotationEntries:e,annotationIds:n,nodes:t})=>{const o=new Set(n);return e.filter(r=>o.has(r.id)).flatMap(r=>Na({annotationEntries:e,annotationId:r.id,nodes:t}))},gN=({annotationEntries:e,annotationIds:n,nodes:t,engine:o})=>{Ia({engine:o,points:pN({annotationEntries:e,annotationIds:n,nodes:t})})},fN=({engine:e,annotationsStore:n,setActiveEditedNodeId:t})=>{const o=g.useCallback(d=>{d===null&&t(null),n.dispatch(At(d))},[n,t]),r=g.useCallback(d=>{d.length===0&&t(null),n.dispatch(Et(d))},[n,t]),a=g.useCallback(()=>{n.dispatch(Et(Du(n.getState())))},[n]),i=g.useCallback(d=>{const c=n.getState();n.dispatch(At(dA(c.annotationEntries,ur(c),d)))},[n]),s=g.useCallback(d=>{const c=n.getState();Ia({engine:e,points:Na({annotationEntries:c.annotationEntries,nodes:c.nodes,annotationId:d})})},[n,e]),u=g.useCallback(()=>{const d=n.getState();Ia({engine:e,points:ar(d).flatMap(c=>Na({annotationEntries:d.annotationEntries,nodes:d.nodes,annotationId:c.id}))})},[n,e]),l=g.useCallback(d=>{d===null&&t(null),n.dispatch(At(d)),s(d)},[n,s,t]);return{setSelectedAnnotationIdInStore:o,setSelectedAnnotationIdsInStore:r,selectAllAnnotationEntries:a,focusAdjacentAnnotationEntry:i,flyToAnnotationById:s,flyToAllAnnotations:u,focusAnnotationId:l}},AN=({annotationsStore:e,annotationToolDraftStore:n,confirmAnnotationDelete:t})=>{const o=g.useCallback((u,l)=>{if(u.length===0)return Promise.resolve(!1);if(l!=null&&l.skipConfirmation)return Promise.resolve(!0);const d=t??CA;return Promise.resolve(d({annotations:u,source:(l==null?void 0:l.source)??$a.PROGRAMMATIC})).catch(c=>(console.error("[Annotations] Delete confirmation failed",c),!1))},[t]),r=g.useCallback(()=>{const u=e.getState().annotationToolType;return n.get(u).coordinates.length>0},[n,e]),a=g.useCallback((u,l)=>{const d=Array.from(new Set(u));if(d.length===0||r())return;const c=Ms(e.getState().annotationEntries,d);c.length!==0&&o(c,l).then(m=>{if(!m)return;const y=Ms(e.getState().annotationEntries,c.map(({id:p})=>p)).map(({id:p})=>p);y.length!==0&&e.dispatch(Ua({annotationIds:y}))})},[e,r,o]),i=g.useCallback((u,l)=>{Wo(Un(e,u))&&a([u],l)},[e,a]),s=g.useCallback(u=>{const l=uA(e.getState());l.length!==0&&a(l,u)},[e,a]);return{requestAnnotationDeleteConfirmation:o,removeAnnotationEntriesByIds:a,removeAnnotationEntryById:i,removeSelectedAnnotationEntries:s}},vN=[],TN=[],bN={coordinates:vN,linkedNodeGroupIds:TN,feedback:null},kN=(e,n)=>e.length===n.length&&e.every((t,o)=>t===n[o]),NN=(e,n)=>{var t,o,r,a;return Ya(e.coordinates,n.coordinates)&&kN(e.linkedNodeGroupIds,n.linkedNodeGroupIds)&&((t=e.feedback)==null?void 0:t.kind)===((o=n.feedback)==null?void 0:o.kind)&&((r=e.feedback)==null?void 0:r.message)===((a=n.feedback)==null?void 0:a.message)},IN=()=>{const e=new Map,n=new Map,t=r=>{var a;(a=n.get(r))==null||a.forEach(i=>i())},o=r=>e.get(r)??bN;return{get:o,set:(r,a)=>{const i={coordinates:[...a.coordinates],linkedNodeGroupIds:[...a.linkedNodeGroupIds],feedback:a.feedback??null},s=o(r);if(NN(s,i))return;i.coordinates.length>0||i.linkedNodeGroupIds.length>0||!!i.feedback?e.set(r,i):e.delete(r),t(r)},clear:r=>{e.has(r)&&(e.delete(r),t(r))},subscribe:(r,a)=>{const i=n.get(r)??new Set;return i.add(a),n.set(r,i),()=>{const s=n.get(r);s&&(s.delete(a),s.size===0&&n.delete(r))}}}},hN=()=>{let e=null;const n=new Set;return{getSnapshot:()=>e,setSnapshot:t=>{e!==t&&(e=t,n.forEach(o=>o()))},subscribe:t=>(n.add(t),()=>n.delete(t))}},SN=({registry:e,initialToolType:n,initialPointTemporaryMode:t,initialPersistenceState:o})=>{const r=o?iA({initialToolType:n,initialPointTemporaryMode:t,initialPersistenceState:o,isToolTypeAvailable:a=>!!e.getPlugin(a)}):Gu({initialToolType:n,initialPointTemporaryMode:t});return{annotationsStore:kA(r),annotationToolDraftStore:IN(),activePointQueryPickResultStore:hN(),sequenceRefs:{measurementSequenceRef:{current:ft(r.annotationEntries.map(({id:a})=>a))},nodeSequenceRef:{current:ft(r.nodes.map(({id:a})=>a))},edgeSequenceRef:{current:ft(r.edges.map(({id:a})=>a))}},lastSerializedPersistenceState:JSON.stringify(ja(r)),mountedHosts:0}},Gt=new Map,CN=e=>{const{storeKey:n,onPersistenceStateChange:t}=e,o=g.useRef(null);let r=n?Gt.get(n):o.current;r||(r=SN(e),n?Gt.set(n,r):o.current=r);const a=r;return g.useEffect(()=>{if(n)return Gt.set(n,a),a.mountedHosts+=1,()=>{a.mountedHosts-=1,a.mountedHosts===0&&Gt.get(n)===a&&Gt.delete(n)}},[a,n]),g.useEffect(()=>{if(t)return a.annotationsStore.subscribe(()=>{const i=ja(a.annotationsStore.getState()),s=JSON.stringify(i);s!==a.lastSerializedPersistenceState&&(t(i),a.lastSerializedPersistenceState=s)})},[a,t]),{annotationsStore:a.annotationsStore,annotationToolDraftStore:a.annotationToolDraftStore,activePointQueryPickResultStore:a.activePointQueryPickResultStore,sequenceRefs:a.sequenceRefs}},{DISTANCE:EN,POLYLINE:ON,AREA_GROUND:LN,AREA_PLANAR:RN,AREA_VERTICAL:wN}=P,Ds=e=>{switch(e.toolType){case EN:case ON:return 2;case LN:case RN:case wN:return 3;default:return null}},xN=({annotationEntries:e,selectedAnnotationIds:n,editedNodeId:t})=>{const o=e.filter(i=>!i.locked&&!i.readOnly&&i.nodeIds.includes(t)&&Ds(i)!==null);let r=o[0];for(let i=n.length-1;i>=0;i-=1){const s=o.find(({id:u})=>u===n[i]);if(s){r=s;break}}const a=r?Ds(r):null;return r&&a!==null?{annotation:r,minimumNodeCount:a}:null},qN=({nodeIds:e,editedNodeId:n,closed:t})=>{const o=e.indexOf(n);if(!t||o<0)return e.filter(a=>a!==n);const r=[];for(let a=1;a<e.length;a+=1){const i=e[(o+a)%e.length];i&&i!==n&&r.push(i)}return r},_N=({annotationsStore:e,annotationToolDraftStore:n,activeEditedNodeId:t,setActiveEditedNodeId:o,requestAnnotationDeleteConfirmation:r})=>g.useCallback(()=>{if(!t)return!1;const a=e.getState(),i=xN({annotationEntries:a.annotationEntries,selectedAnnotationIds:a.selectionState.selectedAnnotationIds,editedNodeId:t});if(!i)return!1;const{annotation:s,minimumNodeCount:u}=i,l=s.nodeIds.filter(y=>y!==t);if(l.length>=u)return e.dispatch(gA({annotationId:s.id,nodeId:t})),o(null),!0;const d=qN({nodeIds:s.nodeIds,editedNodeId:t,closed:s.closed===!0});if(d.length!==l.length)return!1;const c=new Map(a.nodes.map(y=>[y.id,y])),m=d.flatMap(y=>{const p=c.get(y);return p?[p]:[]});return m.length!==d.length?!1:(r([s],{source:$a.KEYBOARD}).then(y=>{y&&(n.set(s.toolType,{coordinates:m.map(p=>p.coordinate),linkedNodeGroupIds:d.map(p=>Lo(a.linkedNodeGroups,p)),feedback:null}),e.dispatch(Ua({annotationIds:[s.id],nextSelectedAnnotationId:null})),o(null))}),!0)},[t,n,e,r,o]),PN=({annotationsStore:e,setActiveEditedNodeId:n})=>{const t=g.useRef(fa),o=g.useRef(()=>!1),r=g.useRef(null),a=g.useCallback(y=>{const p=e.getState().annotationToolType;e.dispatch(bA(y)),p!==y&&(n(null),e.dispatch(At(null)))},[e,n]),i=g.useCallback(y=>{if(t.current===fa){a(y);return}t.current.requestModeChange(y)},[a]),s=g.useCallback(y=>{t.current=y},[]),u=g.useMemo(()=>({requestModeChange:y=>t.current.requestModeChange(y),requestActivateTool:y=>t.current.requestActivateTool(y),requestFinishMeasurement:()=>t.current.requestFinishMeasurement(),requestPointAt:y=>t.current.requestPointAt(y)}),[]),l=g.useCallback(y=>(o.current=y,()=>{o.current===y&&(o.current=()=>!1)}),[]),d=g.useCallback(y=>o.current(y),[]),c=g.useCallback(y=>{r.current=y},[]),m=g.useCallback(()=>r.current,[]);return{setActiveToolTypeInStore:a,setActiveToolType:i,bindLifecycleHostApi:s,lifecycleRequests:u,bindPreviewSnapTargetNodeClick:l,handlePreviewSnapTargetNodeClick:d,setHoveredPointQueryNodeId:c,getHoveredPointQueryNodeId:m}},MN=({engine:e,plugins:n,initialActiveToolType:t,initialPointTemporaryMode:o,formatOptions:r,lineLabelOptions:a,initialPersistenceState:i,storeKey:s,onPersistenceStateChange:u,requestLabelText:l,confirmAnnotationDelete:d})=>{var ee;const c=g.useMemo(()=>Sf(n),[n]),m=((ee=c.orderedDescriptors[0])==null?void 0:ee.id)??null;if(!m)throw new Error("AnnotationsProvider requires at least one tool plugin.");const{annotationsStore:y,annotationToolDraftStore:p,activePointQueryPickResultStore:f,sequenceRefs:A}=CN({registry:c,initialToolType:t&&c.getPlugin(t)?t:m,initialPointTemporaryMode:o,initialPersistenceState:i,storeKey:s,onPersistenceStateChange:u}),[v,b]=g.useState(null),{setActiveToolTypeInStore:T,setActiveToolType:I,bindLifecycleHostApi:N,lifecycleRequests:h,bindPreviewSnapTargetNodeClick:S,handlePreviewSnapTargetNodeClick:k,setHoveredPointQueryNodeId:C,getHoveredPointQueryNodeId:L}=PN({annotationsStore:y,setActiveEditedNodeId:b}),{setSelectedAnnotationIdInStore:R,setSelectedAnnotationIdsInStore:E,selectAllAnnotationEntries:w,focusAdjacentAnnotationEntry:_,flyToAnnotationById:M,flyToAllAnnotations:q,focusAnnotationId:D}=fN({engine:e,annotationsStore:y,setActiveEditedNodeId:b}),{requestAnnotationDeleteConfirmation:$,removeAnnotationEntriesByIds:V,removeAnnotationEntryById:G,removeSelectedAnnotationEntries:U}=AN({annotationsStore:y,annotationToolDraftStore:p,confirmAnnotationDelete:d}),K=_N({annotationsStore:y,annotationToolDraftStore:p,activeEditedNodeId:v,setActiveEditedNodeId:b,requestAnnotationDeleteConfirmation:$}),{exportAnnotationGeoJson:ae,buildAllAnnotationsGeoJson:J,exportAllAnnotationsGeoJson:W}=yN(y),{setElevationReferenceAnnotationIdInStore:oe,setPointTemporaryModeInStore:me,toggleAnnotationVisibility:Ce,toggleAnnotationLocked:ne,updateAnnotationDisplayName:be,updateAnnotationShortLabel:B,toggleAnnotationElevationDisplayMode:Q}=mN({annotationsStore:y,activeEditedNodeId:v,setActiveEditedNodeId:b}),ue=cN({engine:e,registry:c,annotationsStore:y,...A}),ye=g.useCallback((te,F)=>sN(y,te,F),[y]),ke=g.useCallback(te=>lN(y,te),[y]),Y=g.useMemo(()=>({engine:e,registry:c,annotationToolDraftStore:p,annotationsStore:y,formatOptions:r,activeEditedNodeId:v,addAnnotation:ue,appendAnnotationsRuntimePersistenceState:ye,removeExternalAnnotationsByCollection:ke,setActiveToolType:I,requestModeChange:h.requestModeChange,requestActivateTool:h.requestActivateTool,requestFinishMeasurement:h.requestFinishMeasurement,requestPointAt:h.requestPointAt,focusAdjacentAnnotationEntry:_,focusAnnotationId:D,flyToAnnotationById:M,flyToAllAnnotations:q,removeAnnotationById:G,removeAnnotationsByIds:V,buildAllAnnotationsGeoJson:J,exportAnnotationGeoJson:ae,exportAllAnnotationsGeoJson:W,toggleAnnotationVisibility:Ce,toggleAnnotationLocked:ne,removeSelectedAnnotations:U,selectAllAnnotations:w,setElevationReferenceAnnotationId:oe,toggleAnnotationElevationDisplayMode:Q,updateAnnotationDisplayName:be,updateAnnotationShortLabel:B,setPointTemporaryMode:me,setSelectedAnnotationId:R,setSelectedAnnotationIds:E}),[ue,ye,v,p,y,J,_,D,W,ae,q,M,r,h,G,V,ke,U,c,e,w,oe,I,me,R,E,ne,Q,Ce,be,B]);return{annotationsStore:y,registry:c,services:Y,activePointQueryPickResultStore:f,setActiveToolType:I,runtimeAuthoringHost:{engine:e,registry:c,annotationsStore:y,annotationToolDraftStore:p,setActiveToolTypeInStore:T,focusAdjacentAnnotationEntry:_,removeSelectedAnnotations:U,removeEditedNode:K,addAnnotation:ue,bindPreviewSnapTargetNodeClick:S,activeEditedNodeId:v,getHoveredPointQueryNodeId:L,setHoveredPointQueryNodeId:C,onPointQueryPickResultChange:f.setSnapshot,formatOptions:r,lineLabelOptions:a,bindApi:N,requestLabelText:l},runtimeVisualHost:{engine:e,registry:c,annotationsStore:y,annotationToolDraftStore:p,setElevationReferenceAnnotationId:oe,toggleAnnotationElevationDisplayMode:Q,onActiveEditedNodeIdChange:b,onHoveredPointQueryNodeIdChange:C,onPreviewSnapTargetNodeClick:k,activeEditedNodeId:v,formatOptions:r,lineLabelOptions:a}}},DN=({enabled:e=!0}={})=>{const n=g.useRef(null),t=g.useRef([]),[o,r]=g.useState(null),[a,i]=g.useState([]),s=g.useCallback(d=>{const c=n.current;if(n.current=null,r(null),d!==null){const m=fp(t.current,d);t.current=m,i(m)}c==null||c(d)},[]),u=g.useCallback(({defaultText:d,labelTextSuggestions:c})=>new Promise(m=>{var y;if(!e){m(null);return}(y=n.current)==null||y.call(n,null),n.current=m,r(vp({defaultText:d,labelTextHistory:t.current,labelTextSuggestions:c}))}),[e]);g.useEffect(()=>()=>{var d;(d=n.current)==null||d.call(n,null),n.current=null},[]),g.useEffect(()=>{e||s(null)},[e,s]);const l=g.useMemo(()=>!e||!o?{open:!1,initialValue:"",labelSuggestions:[],onAbort:()=>{},onFinish:()=>{}}:{open:!0,initialValue:o.initialValue,labelSuggestions:_a(a,o.labelSuggestions),onAbort:()=>s(null),onFinish:s},[e,a,o,s]);return g.useMemo(()=>({labelTextDialogState:l,requestLabelText:u}),[l,u])},ho=()=>new Promise(e=>{typeof requestAnimationFrame=="function"?requestAnimationFrame(()=>setTimeout(e,0)):setTimeout(e,16)}),Bs=e=>new Promise(n=>setTimeout(n,e)),Yr=(e,n,t)=>new Promise(o=>{if(n(e.getState())){o(!0);return}let r=!1;const a=u=>{r||(r=!0,clearTimeout(s),i(),o(u))},i=e.subscribe(()=>{n(e.getState())&&a(!0)}),s=setTimeout(()=>a(!1),t)}),Kr=2e3,Fs=e=>new Set(e.annotationEntries.map(n=>n.id)),lt=(e,n)=>{var t;return((t=e.annotationEntries.find(o=>!n.has(o.id)))==null?void 0:t.id)??null},BN=e=>{const n=()=>e().annotationsStore,t=()=>{const c=e(),m=c.annotationsStore.getState(),y=m.annotationToolType??null,p=y?c.annotationToolDraftStore.get(y).coordinates.length:0;return{activeTool:y,tools:c.registry.orderedDescriptors.map(f=>f.id),selectedIds:[...m.selectionState.selectedAnnotationIds??[]],draft:y&&p>0?{tool:y,nodeCount:p}:null,textPrompt:c.labelTextDialogState.open?c.labelTextDialogState.initialValue:null,annotations:m.annotationEntries.map(f=>({id:f.id,type:f.toolType,label:f.shortLabel??null,nodeCount:f.nodeIds.length,external:f.annotationRole===St.EXTERNAL}))}},o=async c=>{const m=e();if(!m.registry.getPlugin(c))return!1;m.annotationsStore.getState().annotationToolType!==c&&m.requestModeChange(c);const y=await Yr(m.annotationsStore,p=>p.annotationToolType===c,Kr);return await ho(),y},r=async c=>{await ho();const m=e().requestPointAt(c);return await ho(),m},a=async()=>{const c=Fs(n().getState());return e().requestFinishMeasurement()&&await Yr(n(),m=>lt(m,c)!==null,Kr),await ho(),lt(n().getState(),c)},i=()=>{const c=e(),m=c.annotationsStore.getState().annotationToolType;m&&c.annotationToolDraftStore.clear(m)},s=c=>{const m=e().labelTextDialogState;return m.open?(c===null?m.onAbort():m.onFinish(c),!0):!1};return{getState:t,subscribe:c=>n().subscribe(c),activateTool:o,pickAt:r,finish:a,cancel:i,answerTextPrompt:s,createMeasurement:async(c,m,y={})=>{const{stepDelayMs:p=0,select:f=!0}=y;if(!await o(c))return null;const A=Fs(n().getState());e().annotationToolDraftStore.clear(c);for(const b of m){if(p>0&&await Bs(p),!await r(b))return null;const T=e().labelTextDialogState;if(T.open&&(s(y.text??T.initialValue),await Yr(n(),I=>lt(I,A)!==null,Kr)),lt(n().getState(),A))break}let v=lt(n().getState(),A);return v||(p>0&&await Bs(p),await a(),v=lt(n().getState(),A)),v&&f&&e().setSelectedAnnotationIds([v]),v},addMeasurements:(c,m={})=>{const y=e(),p=Mu(c)??Ga(c);if(!p)return[];if(m.replace){const A=y.annotationsStore.getState().annotationEntries.filter(v=>v.annotationRole!==St.EXTERNAL).map(v=>v.id);A.length>0&&y.removeAnnotationsByIds(A,{skipConfirmation:!0})}const f=[...y.appendAnnotationsRuntimePersistenceState(p)];return m.select&&f.length>0&&y.setSelectedAnnotationIds(f),f},exportMeasurements:()=>e().buildAllAnnotationsGeoJson(),select:c=>e().setSelectedAnnotationIds(c),remove:c=>e().removeAnnotationsByIds(c,{skipConfirmation:!0}),flyTo:c=>{const m=e();if(!c||c.length===0){m.flyToAllAnnotations();return}const y=m.annotationsStore.getState();gN({annotationEntries:y.annotationEntries,annotationIds:c,nodes:y.nodes,engine:m.engine})}}},sc=1500,xo=new WeakMap,ha=e=>{var n;(n=xo.get(e))==null||n()},FN=(e,n,{durationMs:t=sc}={})=>{ha(e);const o=e.getCameraPose();return!o||!(t>0)?Promise.resolve(e.setCameraPose(n)):new Promise(r=>{let a=0,i=!1;const s=c=>{i||(i=!0,cancelAnimationFrame(a),xo.get(e)===u&&xo.delete(e),r(c))},u=()=>s(!1);xo.set(e,u);const l=performance.now(),d=c=>{if(i)return;const m=Math.min(1,(c-l)/t),y=m>=1?n:Wm(o,n,Lm(0,1,m));if(e.isDestroyed()||!e.setCameraPose(y)){s(!1);return}m>=1?s(!0):a=requestAnimationFrame(d)};a=requestAnimationFrame(d)})},Wt=e=>Array.isArray(e)&&e.length===3&&e.every(n=>Number.isFinite(n)),GN=e=>({position:e.positionECEF.toArray(),direction:e.directionECEF.toArray(),up:e.upECEF.toArray(),fovY:e.verticalFovRad}),Gs=e=>{if(!e||!Wt(e.position)||!Wt(e.direction)||!Wt(e.up)||!(e.fovY>0&&e.fovY<Ws))return null;const n=new x(...e.direction);if(!(n.lengthSq()>0))return null;n.normalize();const t=Kt(new x(...e.up),n);return t.lengthSq()>0?{positionECEF:new x(...e.position),directionECEF:n,upECEF:t.normalize(),verticalFovRad:e.fovY}:null},jN=e=>{const n=()=>{const o=e();return j(o)?o:null},t=(o,r)=>{const a=n();return a&&o?FN(a,o,{durationMs:r}):Promise.resolve(!1)};return{getPose:()=>{var r;const o=(r=n())==null?void 0:r.getCameraPose();return o?GN(o):null},setPose:o=>{const r=n(),a=Gs(o);return!r||!a?!1:(ha(r),r.setCameraPose(a))},flyToPose:(o,r={})=>t(Gs(o),r.durationMs),lookAt:(o,r,a={})=>{var i,s;return Wt(o)&&Wt(r)?t($m(new x(...o),new x(...r),a.fovY??((s=(i=n())==null?void 0:i.getCameraPose())==null?void 0:s.verticalFovRad)??Tl),a.durationMs??sc):Promise.resolve(!1)},stop:()=>{const o=n();o&&ha(o)}}},lc=e=>{const n=[],t=()=>e(n.at(-1)??null);return o=>(n.push(o),t(),()=>{const r=n.indexOf(o);r>=0&&n.splice(r,1),t()})},HN=lc(ep),zN=lc(np),UN=(e,n)=>{const t=g.useRef(e);t.current=e,g.useLayoutEffect(()=>{if(!n)return;const o=HN(BN(()=>t.current)),r=zN(jN(()=>t.current.engine));return()=>{r(),o()}},[n])},VN=of,uc=g.createContext(null),dc=g.createContext(null),$N={},WN=()=>{const e=g.useContext(uc);if(!e)throw new Error("useAnnotationsRuntime must be used within AnnotationsProvider.");return e},YN=()=>{const e=g.useContext(dc);if(!e)throw new Error("useActivePointQueryPickResult must be used within AnnotationsProvider.");return e},KN=({engine:e,plugins:n,children:t,annotationOverlayContainer:o=null,initialActiveToolType:r,initialPointTemporaryMode:a=!1,labelOverlayHost:i=null,localPersistence:s,renderEnabled:u=!0,visualRenderEnabled:l,visualInteractionEnabled:d,visualAnnotationEntryRoles:c,formatOptions:m=SA,lineLabelOptions:y=$N,referenceObjectSizing:p=Uu,initialPersistenceState:f,onPersistenceStateChange:A,confirmAnnotationDelete:v,carmaApi:b=!0})=>{const{labelTextDialogState:T,requestLabelText:I}=DN({enabled:u}),N=!!(s!=null&&s.storageKey)&&((s==null?void 0:s.enabled)??!0),h=hA({enabled:N,storageKey:(s==null?void 0:s.storageKey)??""}),S=f!==void 0?f:h.initialPersistenceState,k=A??h.onPersistenceStateChange,C=N&&f===void 0&&A===void 0?s==null?void 0:s.storageKey:void 0,{annotationsStore:L,services:R,setActiveToolType:E,runtimeAuthoringHost:w,runtimeVisualHost:_,registry:M,activePointQueryPickResultStore:q}=MN({engine:e,plugins:n,initialActiveToolType:r,initialPointTemporaryMode:a,formatOptions:m,lineLabelOptions:y,initialPersistenceState:S,storeKey:C,onPersistenceStateChange:k,requestLabelText:u?I:void 0,confirmAnnotationDelete:v}),D=g.useMemo(()=>({...R,labelTextDialogState:T}),[T,R]);UN(D,b&&u);const $=(e==null?void 0:e.kind)??"none",V=O.jsx(VN,{context:Va,store:L,children:O.jsx(uc.Provider,{value:D,children:O.jsxs(dc.Provider,{value:q,children:[o?$c.createPortal(O.jsx(yu,{}),o):null,O.jsxs(g.Fragment,{children:[u||!C?O.jsx(sT,{registry:M,setActiveToolType:E}):null,u?O.jsx(iT,{...w,referenceObjectSizing:p}):null,l??u?O.jsx(ac,{..._,visualAnnotationEntryRoles:c,visualInteractionEnabled:d,referenceObjectSizing:p}):null]},$),t]})})});return i?O.jsx(am,{host:i,children:V}):V},cc=()=>{const{engine:e,registry:n,annotationToolDraftStore:t,formatOptions:o,addAnnotation:r,appendAnnotationsRuntimePersistenceState:a,removeExternalAnnotationsByCollection:i,setActiveToolType:s,requestModeChange:u,requestActivateTool:l,requestFinishMeasurement:d,focusAdjacentAnnotationEntry:c,focusAnnotationId:m,flyToAnnotationById:y,flyToAllAnnotations:p,removeAnnotationById:f,removeAnnotationsByIds:A,buildAllAnnotationsGeoJson:v,exportAnnotationGeoJson:b,exportAllAnnotationsGeoJson:T,toggleAnnotationVisibility:I,toggleAnnotationLocked:N,removeSelectedAnnotations:h,selectAllAnnotations:S,setElevationReferenceAnnotationId:k,toggleAnnotationElevationDisplayMode:C,updateAnnotationDisplayName:L,updateAnnotationShortLabel:R,activeEditedNodeId:E,setPointTemporaryMode:w,setSelectedAnnotationId:_,setSelectedAnnotationIds:M,labelTextDialogState:q}=WN(),D=se(W=>W.annotationToolType),$=se(W=>W.nodes),V=se(W=>W.edges),G=se(W=>W.annotationEntries),U=se(ur),K=se(W=>W.selectionState.selectedAnnotationIds),ae=se(W=>W.settingsState.elevationReferenceAnnotationId),J=se(W=>W.settingsState.pointTemporaryMode);return{engine:e,registry:n,annotationToolDraftStore:t,formatOptions:o,activeToolType:D,setActiveToolType:s,requestModeChange:u,requestActivateTool:l,requestFinishMeasurement:d,focusAdjacentAnnotationEntry:c,focusAnnotationId:m,flyToAnnotationById:y,flyToAllAnnotations:p,removeAnnotationById:f,removeAnnotationsByIds:A,buildAllAnnotationsGeoJson:v,exportAnnotationGeoJson:b,exportAllAnnotationsGeoJson:T,toggleAnnotationVisibility:I,toggleAnnotationLocked:N,removeSelectedAnnotations:h,selectAllAnnotations:S,elevationReferenceAnnotationId:ae,setElevationReferenceAnnotationId:k,toggleAnnotationElevationDisplayMode:C,updateAnnotationDisplayName:L,updateAnnotationShortLabel:R,activeEditedNodeId:E,pointTemporaryMode:J,setPointTemporaryMode:w,nodes:$,edges:V,annotationEntries:G,selectedAnnotationId:U,selectedAnnotationIds:K,setSelectedAnnotationId:_,setSelectedAnnotationIds:M,addAnnotation:r,appendAnnotationsRuntimePersistenceState:a,removeExternalAnnotationsByCollection:i,labelTextDialogState:q}},QN=()=>{const e=YN();return g.useSyncExternalStore(e.subscribe,e.getSnapshot,e.getSnapshot)};KN.__docgenInfo={description:"",methods:[],displayName:"AnnotationsProvider",props:{engine:{required:!0,tsType:{name:"union",raw:"AnnotationEngine | null",elements:[{name:"AnnotationEngine"},{name:"null"}]},description:`Engine adapter the runtime draws and picks with. The app owns the engine
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
  /** Scene query disc only; the existing fields still size the edit gizmo. */
  pointQueryDiscSizing?: Partial<AnnotationPointQueryDiscSizingOptions>;
}`,signature:{properties:[{key:"scalingMode",value:{name:"ReferenceObjectScalingMode",required:!0}},{key:"worldRadiusMeters",value:{name:"number",required:!0}},{key:"targetScreenRadiusCssPx",value:{name:"number",required:!0}},{key:"resizeWorldRadiusToScreenTarget",value:{name:"boolean",required:!0}},{key:"resizeStepFactor",value:{name:"number",required:!0}},{key:"quantizeWorldRadius",value:{name:"boolean",required:!0}},{key:"pointQueryDiscSizing",value:{name:"Partial",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  targetScreenRadiusCssPx: CssPixels;
  minimumScreenRadiusCssPx: CssPixels;
  maximumViewportRadiusRatio: Ratio;
  sceneResizeFactor: Ratio;
  resizeHysteresisRatio: Ratio;
  /** How long an unchanged radius label stays visible. */
  radiusLabelVisibleDurationMs: Milliseconds;
  radiusLabelFadeDurationMs: Milliseconds;
  /** Visual transition only; selected 1/2/5 world radii remain discrete. Zero disables it. */
  resizeAnimationDurationMs: Milliseconds;
}`,signature:{properties:[{key:"targetScreenRadiusCssPx",value:{name:"CssPixels",required:!0}},{key:"minimumScreenRadiusCssPx",value:{name:"CssPixels",required:!0}},{key:"maximumViewportRadiusRatio",value:{name:"Ratio",required:!0}},{key:"sceneResizeFactor",value:{name:"Ratio",required:!0}},{key:"resizeHysteresisRatio",value:{name:"Ratio",required:!0}},{key:"radiusLabelVisibleDurationMs",value:{name:"Milliseconds",required:!0},description:"How long an unchanged radius label stays visible."},{key:"radiusLabelFadeDurationMs",value:{name:"Milliseconds",required:!0}},{key:"resizeAnimationDurationMs",value:{name:"Milliseconds",required:!0},description:"Visual transition only; selected 1/2/5 world radii remain discrete. Zero disables it."}]}}],raw:`Readonly<{
  targetScreenRadiusCssPx: CssPixels;
  minimumScreenRadiusCssPx: CssPixels;
  maximumViewportRadiusRatio: Ratio;
  sceneResizeFactor: Ratio;
  resizeHysteresisRatio: Ratio;
  /** How long an unchanged radius label stays visible. */
  radiusLabelVisibleDurationMs: Milliseconds;
  radiusLabelFadeDurationMs: Milliseconds;
  /** Visual transition only; selected 1/2/5 world radii remain discrete. Zero disables it. */
  resizeAnimationDurationMs: Milliseconds;
}>`}],raw:"Partial<AnnotationPointQueryDiscSizingOptions>",required:!1},description:"Scene query disc only; the existing fields still size the edit gizmo."}]}},description:"",defaultValue:{value:`{
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
}`,signature:{properties:[{key:"annotations",value:{name:"unknown",required:!0}},{key:"source",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_DELETE_CONFIRMATION_SOURCES)[keyof typeof ANNOTATION_DELETE_CONFIRMATION_SOURCES]",required:!0}}]}},name:"context"}],return:{name:"union",raw:"boolean | Promise<boolean>",elements:[{name:"boolean"},{name:"Promise",elements:[{name:"boolean"}],raw:"Promise<boolean>"}]}}},description:""},carmaApi:{required:!1,tsType:{name:"boolean"},description:"Answer `carma.annotations` while mounted, so scripts, stories and tests\ncan drive the tools. On by default; the latest mounted runtime answers.",defaultValue:{value:"true",computed:!1}}}};const XN=({classNames:e,metrics:n,plugins:t,disableSelectWithoutAnnotations:o=!1,showToolTypeIndicators:r=!1,tooltipPlacement:a,getTooltipPopupContainer:i,renderToolButtonBackdrop:s})=>{const{registry:u,activeToolType:l,requestModeChange:d,annotationEntries:c}=cc(),m=t??u.plugins,y=g.useMemo(()=>ar({annotationEntries:c}),[c]),p=g.useMemo(()=>Of(y),[y]),f=g.useMemo(()=>m.map(A=>{const v=A.descriptor,b=v.id===xn,T=b?y.length:A.annotationType?p.get(A.annotationType)??0:0;return{id:v.id,label:v.label,tooltip:v.tooltip,icon:v.icon,annotationCount:T,disabled:o&&b&&y.length===0}}),[p,y.length,o,m]);return O.jsx(uu,{activeToolId:l,tools:f,onToolSelect:A=>{d(A)},classNames:e,metrics:n,showToolTypeIndicators:r,tooltipPlacement:a,getTooltipPopupContainer:i,renderToolButtonBackdrop:s})};XN.__docgenInfo={description:"",methods:[],displayName:"RuntimeAnnotationsToolbar",props:{classNames:{required:!1,tsType:{name:"Partial",elements:[{name:"AnnotationsToolbarClassNames"}],raw:"Partial<AnnotationsToolbarClassNames>"},description:""},metrics:{required:!1,tsType:{name:"Partial",elements:[{name:"AnnotationsToolbarMetrics"}],raw:"Partial<AnnotationsToolbarMetrics>"},description:""},plugins:{required:!1,tsType:{name:"unknown"},description:""},disableSelectWithoutAnnotations:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showToolTypeIndicators:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},tooltipPlacement:{required:!1,tsType:{name:'AnnotationsToolbarProps["tooltipPlacement"]',raw:'AnnotationsToolbarProps["tooltipPlacement"]'},description:""},getTooltipPopupContainer:{required:!1,tsType:{name:'AnnotationsToolbarProps["getTooltipPopupContainer"]',raw:'AnnotationsToolbarProps["getTooltipPopupContainer"]'},description:""},renderToolButtonBackdrop:{required:!1,tsType:{name:'AnnotationsToolbarProps["renderToolButtonBackdrop"]',raw:'AnnotationsToolbarProps["renderToolButtonBackdrop"]'},description:""}}};const it={ANNOTATION:"annotation",AUTHORING_INSTRUCTION:"authoringInstruction"},ZN=(e,n)=>n?[{kind:ce.ALERT,severity:Cn.WARNING,text:n.message},...e]:e,JN=({activePointQueryPickResult:e,activeToolDraftFeedback:n,activeToolDraftState:t,activeToolType:o,authoringInstructionHelpLayout:r,helpLocale:a,includeAuthoringInstruction:i,registry:s,visualOptions:u})=>g.useMemo(()=>{var p;if(!i)return null;const l=Lf({activeToolType:o,registry:s});if(!l)return null;const d=((p=l.resolveHelpText)==null?void 0:p.call(l,{draftState:t,pointQueryPickResult:e}))??l.helpText??[],c=ZN(d,n);if(c.length===0)return{plugin:l,content:null,visualOptions:null};const m={kind:it.AUTHORING_INSTRUCTION,plugin:l},y=sn(typeof u=="function"?u(m):u);return{plugin:l,content:g.createElement(rr,{visualOptions:y},g.createElement(or,{items:c,layout:r,locale:a,actionTriggerAlign:Jn.START})),visualOptions:y}},[e,n,t,o,r,a,i,s,u]),qo={POINT:"point",LINE:"line",AREA:"area"},mc=e=>{switch(e){case P.POINT:return qo.POINT;case P.DISTANCE:case P.POLYLINE:return qo.LINE;case P.AREA_GROUND:case P.AREA_PLANAR:case P.AREA_VERTICAL:return qo.AREA;default:return null}},eI={kind:ce.HEADING,text:"Bearbeitungsmodus",level:ht.TITLE},nI={kind:ce.HEADING,text:"Punkt verschieben durch ziehen von",level:ht.SECTION},tI={kind:ce.HEADING,text:"Weitere Funktionen",level:ht.SECTION},oI=[nI,{kind:ce.ACTION,leadingLabel:"Scheibenmitte",inputAlternatives:[[Re.DISC_CENTER]],rightAlignInput:!0,description:"→ auf der Oberfläche des 3D-Modells"},{kind:ce.ACTION,leadingLabel:"Äußere Scheibe",inputAlternatives:[[Re.DISC_OUTER]],rightAlignInput:!0,description:"→ in der Höhenebene"},{kind:ce.ACTION,leadingLabel:"Blaue Pfeilspitzen",inputAlternatives:[],description:"→ entlang der Höhenachse"}],rI={kind:ce.ACTION,inputAlternatives:[[Re.CLICK]],trailingLabel:"auf anderen Punkt",description:"Höhe des Punktes übernehmen"},aI={kind:ce.ACTION,inputAlternatives:[[Re.ESCAPE],[Re.CLICK]],trailingLabel:"außerhalb des Punktes",trailingLabelAfterLastInput:!0,description:"Bearbeitungsmodus verlassen"},So=e=>({kind:ce.ACTION,inputAlternatives:[[Re.BACKSPACE]],description:e}),iI=e=>{switch(e){case P.POINT:case P.DISTANCE:return So("Messung löschen");case P.POLYLINE:return So("Punkt löschen (beim letzten verbleibenden Punkt die Messung)");case P.AREA_GROUND:case P.AREA_PLANAR:case P.AREA_VERTICAL:return So("Punkt löschen (unter drei Punkten die Messung)");default:return So("Messung löschen")}},sI=({toolType:e})=>{const n=mc(e);if(!n)return[];const t=[tI,...n===qo.POINT?[]:[rI],aI,iI(e)];return[eI,...oI,...t]},lI=({activeEditedNodeId:e,activeToolType:n,annotationEntries:t,registry:o,authoringInstructionHelpLayout:r,helpLocale:a,includeAuthoringInstruction:i,visualOptions:s})=>g.useMemo(()=>{if(!i||!e||n!==xn)return null;const u=t.find(y=>y.nodeIds.includes(e))??null;if(!u)return null;const l=o.getPlugin(u.toolType)??o.getPluginsByAnnotationType(u.toolType)[0]??null;if(!l)return null;const d=sI({toolType:u.toolType});if(d.length===0)return null;const c={kind:it.AUTHORING_INSTRUCTION,plugin:l},m=sn(typeof s=="function"?s(c):s);return{kind:it.AUTHORING_INSTRUCTION,plugin:l,slots:{content:g.createElement(rr,{visualOptions:m},g.createElement(or,{items:d,layout:r,locale:a,actionTriggerAlign:Jn.START})),collapsible:!1},visualOptions:m}},[e,n,t,r,a,i,o,s]),js=Object.freeze({coordinates:Object.freeze([]),linkedNodeGroupIds:Object.freeze([]),feedback:null}),uI=({activeToolType:e,annotationToolDraftStore:n})=>{const t=g.useMemo(()=>e?[e]:[],[e]),o=rc({draftStore:n,toolTypes:t}),r=e?o[e]??js:js;return{activeToolDraftState:r,activeToolDraftFeedback:e?r.feedback??null:null}},dI=Object.freeze([ve.LOCK,ve.DELETE]),cI=[{kind:ce.TEXT,text:"Lange auf einen Punkt der ausgewählten Messung klicken, um den Bearbeitungsmodus zu öffnen."}],mI=({annotation:e,visualOptions:n})=>{const t=Su(e),o={kind:it.ANNOTATION,annotation:e},r=sn(typeof n=="function"?n(o):n);return{...r,readOnly:!!e.locked||t,hiddenActionIds:t?Array.from(new Set([...r.hiddenActionIds,...dI])):r.hiddenActionIds}},yI=({activeToolDraftFeedback:e,activeToolDraftState:n,activeToolType:t,annotationEntries:o,elevationReferenceAnnotationId:r,exportAnnotationGeoJson:a,authoringInstruction:i,flyToAllAnnotations:s,focusAnnotationId:u,formatOptions:l,nodes:d,registry:c,removeAnnotationById:m,selectedAnnotationId:y,setElevationReferenceAnnotationId:p,setSelectedAnnotationId:f,toggleAnnotationLocked:A,toggleAnnotationVisibility:v,updateAnnotationDisplayName:b,updateAnnotationShortLabel:T,visualOptions:I})=>g.useMemo(()=>{var w;if(!y)return null;const N=o.find(_=>_.id===y)??null;if(!N)return null;const h=c.getPluginsByAnnotationType(N.toolType).find(_=>{var M;return(M=_.infoBox)==null?void 0:M.getSlots})??null;if(!((w=h==null?void 0:h.infoBox)!=null&&w.getSlots))return null;const S=Su(N),k=mI({annotation:N,visualOptions:I}),C=h.infoBox.getSlots({annotation:N,annotationEntries:o,nodes:d,selectedAnnotationId:N.id,setSelectedAnnotationId:f,focusAnnotationId:u,flyToAllAnnotations:s,removeAnnotationById:m,exportAnnotationGeoJson:a,toggleAnnotationVisibility:v,toggleAnnotationLocked:A,elevationReferenceAnnotationId:r,setElevationReferenceAnnotationId:p,updateAnnotationDisplayName:S?()=>{}:b,updateAnnotationShortLabel:S?()=>{}:T,formatOptions:l,infoBoxVisualOptions:k});if(!C)return null;const L=(i==null?void 0:i.plugin.alwaysShowHelpTextWhileActive)===!0&&(n.coordinates.length>0||e!==null),R=t===xn&&mc(N.toolType)!==null&&!N.locked&&!S;let E;return R&&(E=g.createElement(rr,{visualOptions:k,children:g.createElement(or,{items:cI})})),{kind:it.ANNOTATION,annotation:N,instructionContent:L?i.content??void 0:E,instructionToolId:L?i.plugin.id:void 0,slots:C,visualOptions:k}},[e,n,t,o,r,a,i,s,u,l,d,c,m,y,p,f,A,v,b,T,I]),pI=({authoringInstructionHelpLayout:e,helpLocale:n,includeAuthoringInstruction:t=!1,visualOptions:o}={})=>{const r=cc(),a=QN(),{activeToolDraftFeedback:i,activeToolDraftState:s}=uI(r),u=JN({activePointQueryPickResult:a,activeToolDraftFeedback:i,activeToolDraftState:s,activeToolType:r.activeToolType,authoringInstructionHelpLayout:e,helpLocale:n,includeAuthoringInstruction:t,registry:r.registry,visualOptions:o}),l=lI({activeEditedNodeId:r.activeEditedNodeId,activeToolType:r.activeToolType,annotationEntries:r.annotationEntries,registry:r.registry,authoringInstructionHelpLayout:e,helpLocale:n,includeAuthoringInstruction:t,visualOptions:o}),d=yI({activeToolDraftFeedback:i,activeToolDraftState:s,activeToolType:r.activeToolType,annotationEntries:r.annotationEntries,elevationReferenceAnnotationId:r.elevationReferenceAnnotationId,exportAnnotationGeoJson:r.exportAnnotationGeoJson,authoringInstruction:u,flyToAllAnnotations:r.flyToAllAnnotations,focusAnnotationId:r.focusAnnotationId,formatOptions:r.formatOptions,nodes:r.nodes,registry:r.registry,removeAnnotationById:r.removeAnnotationById,selectedAnnotationId:r.selectedAnnotationId,setElevationReferenceAnnotationId:r.setElevationReferenceAnnotationId,setSelectedAnnotationId:r.setSelectedAnnotationId,toggleAnnotationLocked:r.toggleAnnotationLocked,toggleAnnotationVisibility:r.toggleAnnotationVisibility,updateAnnotationDisplayName:r.updateAnnotationDisplayName,updateAnnotationShortLabel:r.updateAnnotationShortLabel,visualOptions:o});return l||(d||r.selectedAnnotationId?d:!(u!=null&&u.content)||!u.visualOptions?null:{kind:it.AUTHORING_INSTRUCTION,plugin:u.plugin,slots:{content:u.content,collapsible:!1},visualOptions:u.visualOptions})},gI=({pixelWidth:e,fitContentWidth:n,useControlLayout:t,controlPosition:o,controlOrder:r,collapsedHorizontalAnchor:a,style:i,visualOptions:s})=>{const u=pI({visualOptions:s});return!u||u.kind!==it.ANNOTATION?null:O.jsx(Xl,{pixelWidth:e,fitContentWidth:n,useControlLayout:t,controlPosition:o,controlOrder:r,collapsedHorizontalAnchor:a,style:i,slots:u.slots,visualOptions:u.visualOptions})};gI.__docgenInfo={description:"",methods:[],displayName:"RuntimeAnnotationInfoBox"};const fI=new Ko,AI=(e,n,t)=>{const o=new x,r=new x,a=new x;fc(e,fI).invert().extractBasis(o,r,a);const i={vertical:a.normalize(),"horizontal-east":o.normalize(),"horizontal-north":r.normalize()};return Ku(n,t).map(s=>({...s,direction:i[s.id]}))},SS=(e,n,t)=>AI(e,n,t).filter(o=>Yu(o.id)),vI={vertical:new x(0,0,1),"horizontal-east":new x(1,0,0),"horizontal-north":new x(0,1,0)},CS=(e,n,t)=>e&&e.length>0?e.map(o=>({...o,color:o.color??Wu})):XA(n,t).map(o=>({...o,direction:vI[o.id]})),ES="#ffffff",OS=.5,LS="#ffffff",TI="rgba(255,255,255,0.82)",bI=.7,RS=on+1,kI=on/2,NI="rgba(255, 255, 255, 0.95)",Hs="rgba(255, 255, 255, 0.95)",zs=(e,n,{labels:t,arrowActiveEdgePx:o,onAxisMouseDown:r,onWheel:a})=>g.createElement("svg",{key:`${n.id}-arrow-${e}`,[`data-point-move-axis-arrow-${e}`]:n.id,onMouseDown:i=>r(i,n),onWheel:a,viewBox:pm(o),style:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -100%)",transformOrigin:"50% 100%",width:`${o}px`,height:`${gm(o)}px`,display:"block",color:n.color??Wu,zIndex:zA,pointerEvents:"auto",cursor:"move",userSelect:"none",overflow:"visible"},title:n.title??t.genericAxis},g.createElement("path",{"data-point-move-axis-arrow-outline":"true",d:sl(o),fill:"currentColor",stroke:Hs,strokeWidth:`${on}`,strokeLinejoin:"round",strokeLinecap:"round",paintOrder:"stroke",vectorEffect:"non-scaling-stroke",shapeRendering:"geometricPrecision"}),g.createElement("path",{"data-point-move-axis-arrow-rim":"true",d:"",fill:"none",stroke:Hs,strokeOpacity:bI,strokeWidth:`${on}`,strokeLinejoin:"round",vectorEffect:"non-scaling-stroke",shapeRendering:"geometricPrecision",style:{display:"none"}}),g.createElement("circle",{"data-point-move-axis-arrow-tip":"true",cx:o/2,cy:0,r:kI,fill:NI})),II=(e,{axisArrowOffsetPx:n,axisWidthPx:t})=>g.createElement("div",{key:`${e.id}-line`,"data-point-move-axis-line":e.id,style:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)",width:`${n*2}px`,height:`${t}px`,background:TI,opacity:1,zIndex:GA,pointerEvents:"none"}}),hI=e=>{const{axisCandidates:n,labels:t,axisUiLengthPx:o,showAxes:r,showRotationHandle:a,hitOnly:i,snapPlaneDragToGround:s,centerPlaneDragCursor:u,onDiscPlaneMouseDown:l,onRotationHandleMouseDown:d,onCenterMouseDown:c,onWheel:m}=e;return g.createElement("div",{style:{position:"relative",width:`${o}px`,height:`${o}px`,pointerEvents:"none",userSelect:"none",overflow:"visible"}},...(r?n:[]).flatMap(y=>[...i?[]:[II(y,e)],zs("up",y,e),zs("down",y,e)]),g.createElement("svg",{key:"disc-outline-svg","data-point-move-disc-outline-svg":"true",viewBox:`-160 -160 ${st} ${st}`,width:`${st}`,height:`${st}`,style:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)",width:`${st}px`,height:`${st}px`,overflow:"hidden",pointerEvents:"none",zIndex:jA}},...(i?[]:n).map(y=>g.createElement("path",{key:`disc-outline-path-${y.id}`,"data-point-move-disc-outline-path":y.id,d:"",fill:"none",stroke:qr,strokeWidth:`${on}`,strokeLinejoin:"round",strokeLinecap:"round",vectorEffect:"non-scaling-stroke",shapeRendering:"geometricPrecision",style:{opacity:WA,display:"none",pointerEvents:"none"}})),g.createElement("path",{key:"disc-interaction-path","data-point-move-disc-interaction-path":"true",d:"",onMouseDown:l,onWheel:m,fill:"rgba(255,255,255,0.001)",stroke:"none",style:{display:"none",pointerEvents:"auto",cursor:YA}},g.createElement("title",null,t.outerDisc)),...a?[g.createElement("ellipse",{key:"disc-rotation-handle","data-point-move-disc-rotation-handle":"true",cx:"0",cy:"0",rx:`${ts}`,ry:`${ts}`,onMouseDown:d,onWheel:m,fill:qr,stroke:qr,strokeWidth:`${on}`,vectorEffect:"non-scaling-stroke",style:{display:"none",opacity:i?0:1,pointerEvents:"auto",cursor:"grab"}})]:[]),g.createElement("div",{"data-point-move-axis-center-hit":"true",onMouseDown:c,onWheel:m,style:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)",width:`${ns}px`,height:`${ns}px`,borderRadius:"50%",background:"transparent",zIndex:HA,pointerEvents:"auto",cursor:u,userSelect:"none"},title:s?t.surfacePlane:t.freePlane}))};hI.__docgenInfo={description:"The overlay markup; `layoutPointMoveGizmoOverlay` positions it every frame.",methods:[],displayName:"createPointMoveGizmoOverlayContent",props:{axisCandidates:{required:!0,tsType:{name:"Array",elements:[{name:"AnnotationGizmoAxisCandidate"}],raw:"AnnotationGizmoAxisCandidate[]"},description:""},labels:{required:!0,tsType:{name:"AnnotationGizmoLabels"},description:""},axisUiLengthPx:{required:!0,tsType:{name:"number"},description:""},axisArrowOffsetPx:{required:!0,tsType:{name:"number"},description:""},axisWidthPx:{required:!0,tsType:{name:"number"},description:""},arrowActiveEdgePx:{required:!0,tsType:{name:"number"},description:""},showAxes:{required:!0,tsType:{name:"boolean"},description:""},showRotationHandle:{required:!0,tsType:{name:"boolean"},description:""},hitOnly:{required:!0,tsType:{name:"boolean"},description:"The scene draws the gizmo: only the transparent hit areas stay here."},snapPlaneDragToGround:{required:!0,tsType:{name:"boolean"},description:""},centerPlaneDragCursor:{required:!0,tsType:{name:"string"},description:""},onAxisMouseDown:{required:!0,tsType:{name:"signature",type:"function",raw:`(
  event: ReactMouseEvent<HTMLDivElement>,
  axisCandidate: AnnotationGizmoAxisCandidate
) => void`,signature:{arguments:[{type:{name:"ReactMouseEvent",elements:[{name:"HTMLDivElement"}],raw:"ReactMouseEvent<HTMLDivElement>"},name:"event"},{type:{name:"AnnotationGizmoAxisCandidate"},name:"axisCandidate"}],return:{name:"void"}}},description:""},onDiscPlaneMouseDown:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: ReactMouseEvent<SVGPathElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",elements:[{name:"SVGPathElement"}],raw:"ReactMouseEvent<SVGPathElement>"},name:"event"}],return:{name:"void"}}},description:""},onRotationHandleMouseDown:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: ReactMouseEvent<SVGCircleElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",elements:[{name:"SVGCircleElement"}],raw:"ReactMouseEvent<SVGCircleElement>"},name:"event"}],return:{name:"void"}}},description:""},onCenterMouseDown:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: ReactMouseEvent<HTMLDivElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",elements:[{name:"HTMLDivElement"}],raw:"ReactMouseEvent<HTMLDivElement>"},name:"event"}],return:{name:"void"}}},description:""},onWheel:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: ReactWheelEvent) => void",signature:{arguments:[{type:{name:"ReactWheelEvent"},name:"event"}],return:{name:"void"}}},description:""}}};const SI=new Ko,CI=({model:e,handle:n})=>{const t=e.place();t&&n.setModelMatrix(t),n.setVisible(t!==null)},EI=e=>{e.forEach(({handle:n})=>n.destroy()),e.clear()},wS=(e,n)=>{const t=g.useRef(new Map);g.useEffect(()=>{const o=t.current;return()=>{j(e)?(EI(o),e.requestRender()):o.clear()}},[e]),g.useEffect(()=>{const o=t.current;if(!j(e)){o.clear();return}const r=new Set(n.map(a=>a.id));o.forEach((a,i)=>{r.has(i)||(a.handle.destroy(),o.delete(i))}),n.forEach(a=>{const i=o.get(a.id);if((i==null?void 0:i.model.signature)===a.signature){i.model=a;return}i==null||i.handle.destroy(),o.delete(a.id);const s=a.place(),u=a.create(e,s??SI);u&&(u.setVisible(s!==null),o.set(a.id,{model:a,handle:u}))}),e.requestRender()},[e,n]),g.useEffect(()=>{if(j(e))return e.subscribePreRender(()=>{try{t.current.forEach(CI)}catch{}})},[e])};export{on as $,Km as A,rn as B,ip as C,Xu as D,Iv as E,td as F,Se as G,Wd as H,Dd as I,Lm as J,tT as K,eh as L,Zh as M,UA as N,_h as O,Md as P,nS as Q,Ea as R,Wu as S,eS as T,Jh as U,os as V,nh as W,tS as X,XA as Y,GA as Z,zA as _,sh as a,ws as a$,st as a0,jA as a1,qr as a2,WA as a3,YA as a4,ts as a5,HA as a6,qh as a7,Ph as a8,Bh as a9,Wv as aA,bd as aB,cn as aC,Up as aD,gd as aE,fd as aF,Hv as aG,vd as aH,Ad as aI,Td as aJ,Ep as aK,Op as aL,Ql as aM,jp as aN,Qv as aO,Hp as aP,eT as aQ,Ig as aR,ve as aS,dh as aT,ch as aU,mh as aV,ph as aW,fh as aX,vh as aY,xn as aZ,bk as a_,Wh as aa,$h as ab,Kh as ac,Qh as ad,Xh as ae,JI as af,Fh as ag,Gh as ah,jh as ai,Mh as aj,Uh as ak,Vh as al,oS as am,Dh as an,Hh as ao,zh as ap,Yu as aq,Yh as ar,Rm as as,ns as at,Ku as au,Mi as av,$n as aw,Rh as ax,Tl as ay,zp as az,lh as b,Fp as b$,oc as b0,Tk as b1,TS as b2,Vp as b3,fS as b4,kS as b5,bS as b6,AS as b7,gS as b8,j as b9,cc as bA,Ia as bB,It as bC,Wy as bD,Jy as bE,ie as bF,zo as bG,ao as bH,ar as bI,lS as bJ,cr as bK,Rp as bL,Yl as bM,he as bN,ah as bO,ih as bP,yv as bQ,dr as bR,mv as bS,cS as bT,Ka as bU,oh as bV,mS as bW,Ye as bX,mr as bY,Ya as bZ,Ot as b_,vS as ba,SS as bb,Ra as bc,wh as bd,RS as be,th as bf,TI as bg,ES as bh,OS as bi,Hs as bj,LS as bk,Ud as bl,wS as bm,kd as bn,CS as bo,hI as bp,Qn as bq,z as br,Xr as bs,Al as bt,rh as bu,cu as bv,Te as bw,KN as bx,XN as by,gI as bz,Xm as c,sS as c0,Zb as c1,$b as c2,hh as c3,Bd as c4,xe as c5,bt as c6,pr as c7,uh as c8,Qa as c9,Uo as cA,rS as cB,ro as cC,Xk as cD,bu as cE,hS as cF,Gn as cG,Ae as cH,Sh as cI,An as cJ,xh as cK,zn as cL,Ch as cM,fA as cN,Rr as cO,bp as cP,Kl as cQ,up as cR,IS as cS,NS as cT,id as cU,pS as ca,Lh as cb,bh as cc,Jk as cd,Zk as ce,$a as cf,Nd as cg,tv as ch,ov as ci,uS as cj,dS as ck,Aa as cl,Sp as cm,Le as cn,Eh as co,Oh as cp,Mp as cq,Re as cr,Cn as cs,yS as ct,Ih as cu,kh as cv,Nh as cw,aS as cx,Qk as cy,iS as cz,Qm as d,Ve as e,Jn as f,P as g,or as h,ce as i,ot as j,qe as k,sn as l,rr as m,Og as n,Yp as o,hg as p,Cg as q,sI as r,op as s,vt as t,Cr as u,Z as v,Ie as w,Gl as x,hv as y,Pe as z};
