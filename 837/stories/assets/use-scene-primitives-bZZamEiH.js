import{j as E}from"./jsx-runtime-DNp_qQjF.js";import{r as g,b as ei,R as ic}from"./index-CSJjS6Ct.js";import{f as ar,C as ae,a as ze,r as sc}from"./index-D9NkO_DI.js";import{c as qs,a as Io,b as _s,w as ga,K as lc,l as Fr,n as uc}from"./camera-local-mercator-fit-C3EBzfBR.js";import{d as ni,r as Mt,i as Ps,b as Ms,T as dc,M as cc,P as mc}from"./angles-O4gcnBa7.js";import{F as dt,bv as yc,bw as pc,aq as gc,ap as fc,bx as Ac,by as vc,bz as Tc,V as bc,aX as kc,bA as Nc,z as Ic,bB as hc,bC as Sc,bD as Cc,bE as Ec}from"./index-A73S1lKT.js";import{T as Ds}from"./index-CXgqBzOb.js";import{h as Oc,l as Bs,i as Fs,k as Lc,q as Gs,s as Rc,t as wc,u as xc,e as qc,A as _c,d as Pc,c as Mc,a as Dc,b as Bc}from"./StripChartPanel-MDqMJoPP.js";import{r as Fc}from"./index-D1cknlJ6.js";import{w as ir,x as js,y as to,z as Gc,A as jc,B as Hc,C as Uc,i as zc,D as Vc,E as $c,F as Wc,f as Do,s as Hs,G as Ke,t as Yc,H as Us,I as zs,J as Vs,m as $s,n as sr,K as lr,M as Kc,S as Qc,N as Xc,l as fa,L as Zc}from"./useLineSegmentVisualizers-w_wmDr0X.js";import{V as x,s as Bo,j as Jc,i as em}from"./three.module-DbFHiiZ-.js";import{F as Nt}from"./locales-DbHdB30_.js";import{L as nm,f as tt}from"./length-format-BQI28fDZ.js";import{V as Mn}from"./constants-C6-_E4xW.js";import{c as Ze}from"./clamp-co6UzHBn.js";import{c as Fo}from"./plane-basis-D9-oqs7B.js";import{A as tm}from"./cssAxisGizmoElement-cEPQY2Ts.js";import{q as Ws,h as Ys,s as Ks,f as om,i as rm,j as am,g as im,d as Qs,b as sm,n as lm,a as um,c as dm}from"./geometry2d-CXoA_VhM.js";import{i as cm}from"./is-finite-number-DNiDh1l_.js";import{i as mm}from"./plane-intersections-DhJfyQJx.js";import{r as ym,P as Xs,s as pm,c as gm,a as fm,L as Am}from"./computePointLabelLayout-BbSOi8XI.js";import{u as vm}from"./useLineVisualizers-DTOTlRp3.js";import{c as Dt,r as Tm,e as bm,g as km,n as Oe}from"./geospatial-camera-basis-129a_up_.js";/* empty css                                      */import{z as Nm}from"./angle-normalization-9MH7zpFM.js";const Im=(e,n,t)=>{const o=Ze((t-e)/(n-e),0,1);return o*o*(3-2*o)},Aa={SCREEN:"screen",WORLD:"world"},ti=[1,2,5,10],Zs=e=>{if(!Number.isFinite(e)||e<=0)return e;const n=10**Math.floor(Math.log10(e));let t=ti[0]*n;for(const o of ti){const r=o*n;Math.abs(r-e)<Math.abs(t-e)&&(t=r)}return t},hm=({targetScreenPx:e,pixelPerWorld:n,quantize:t})=>{if(!Number.isFinite(n)||n<=0)return e>0?e:0;const o=e/n;return t?Zs(o):o},XI=(e,n,t,o)=>!Number.isFinite(e)||e<=Mn?0:Ze(n/e,t,o),Js=2,el=(e,n,t=Js)=>{if(!Number.isFinite(e)||e<=0)return!0;if(!Number.isFinite(n)||n<=0)return!1;const o=n/e;return o>=t||o<=1/t},ZI=()=>{let e=null,n=null;return{resolve:({currentScale:t,targetScreenPx:o,fallback:r,stepFactor:a=Js,quantize:i=!1,minWorldSize:s=0})=>!Number.isFinite(t)||t<=0?e??r:((e===null||el(n??0,t,a))&&(e=Math.max(hm({targetScreenPx:o,pixelPerWorld:t,quantize:i}),s),n=t),e),reset:()=>{e=null,n=null}}},Sm={minSegments:48,maxSegments:256,targetEdgePx:2.5},JI=(e,n={})=>{const{minSegments:t,maxSegments:o,targetEdgePx:r}={...Sm,...n};if(!Number.isFinite(e)||e<=0)return t;const a=2*Math.PI*e,i=Math.ceil(a/Math.max(.5,r));return Math.min(o,Math.max(t,i))},gn=Object.freeze({epsilon:1e-6,polylabelPrecision:.5,polylabelMaxCells:2e4,interiorSampleGrid:18,minInteriorSampleGrid:6}),Cm=(e,n,t)=>{const o=t.x-n.x,r=t.y-n.y,a=o*o+r*r;return a<=gn.epsilon**2?0:Ze(((e.x-n.x)*o+(e.y-n.y)*r)/a,0,1)},Em=(e,n,t)=>{const o=Cm(e,n,t);return{x:n.x+(t.x-n.x)*o,y:n.y+(t.y-n.y)*o}},nl=(e,n,t)=>{const o=Em(e,n,t);return Math.hypot(e.x-o.x,e.y-o.y)},tl=e=>e.map((n,t)=>[n,e[(t+1)%e.length]]),va=(e,n,t=gn.epsilon)=>{if(e.length<3)return!1;let o=!1;for(const[r,a]of tl(e)){if(nl(n,r,a)<=t)return!0;a.y>n.y!=r.y>n.y&&n.x<(r.x-a.x)*(n.y-a.y)/(r.y-a.y+Number.EPSILON)+a.x&&(o=!o)}return o},ol=(e,n)=>e.length<2?0:Math.min(...tl(e).map(([t,o])=>nl(n,t,o))),Om=(e,n)=>(va(e,n)?1:-1)*ol(e,n),rl=e=>{const n=e.map(a=>a.x),t=e.map(a=>a.y),o=Math.min(...n),r=Math.min(...t);return{minX:o,minY:r,width:Math.max(...n)-o,height:Math.max(...t)-r}},Lm=(e,n=gn.interiorSampleGrid)=>{const{minX:t,minY:o,width:r,height:a}=rl(e);if(r<=0||a<=0)return null;const i=Math.max(gn.minInteriorSampleGrid,Math.floor(n));let s=null;for(let u=0;u<=i;u+=1)for(let l=0;l<=i;l+=1){const d={x:t+r*l/i,y:o+a*u/i};if(!va(e,d))continue;const c=ol(e,d);(!s||c>s.radius)&&(s={center:d,radius:c})}return s},Rm=(e,n=gn.polylabelPrecision,t=gn.polylabelMaxCells)=>{if(e.length<3||e.some(p=>!Number.isFinite(p.x)||!Number.isFinite(p.y)))return null;const{minX:o,minY:r,width:a,height:i}=rl(e),s=Math.min(a,i);if(a<=0||i<=0||s<=gn.epsilon)return null;const u=(p,A,f)=>{const v=Om(e,{x:p,y:A});return{x:p,y:A,h:f,d:v,max:v+f*Math.SQRT2}},l=[];for(let p=o;p<o+a;p+=s)for(let A=r;A<r+i;A+=s)l.push(u(p+s/2,A+s/2,s/2));const d=Ws({points:e,degenerateAreaEpsilon:gn.epsilon}),c=u(o+a/2,r+i/2,0);let m=d?u(d.x,d.y,0):c;c.d>m.d&&(m=c);const y=Math.max(.1,n);for(let p=0;l.length>0&&p<t;p+=1){const A=l.reduce((b,T,I)=>T.max>l[b].max?I:b,0),[f]=l.splice(A,1);if(!f)break;if(f.d>m.d&&(m=f),f.max-m.d<=y)continue;const v=f.h/2;l.push(u(f.x-v,f.y-v,v),u(f.x+v,f.y-v,v),u(f.x-v,f.y+v,v),u(f.x+v,f.y+v,v))}return Number.isFinite(m.d)&&m.d>0?{center:{x:m.x,y:m.y},radius:m.d}:Lm(e)},wm=(e,n)=>{const t=n.map(s=>({x:s.x-e.x,y:s.y-e.y})),o=t.map(s=>Math.hypot(s.x,s.y));if(o.some(s=>s<1e-9))return null;const r=t.map((s,u)=>{const l=t[(u+1)%t.length];return Math.tan(Math.atan2(s.x*l.y-s.y*l.x,s.x*l.x+s.y*l.y)/2)}),a=o.map((s,u)=>(r[(u-1+o.length)%o.length]+r[u])/s),i=a.reduce((s,u)=>s+u,0);return!Number.isFinite(i)||Math.abs(i)<1e-12?null:a.map(s=>s/i)},xm=(e,n)=>n.reduce((t,o,r)=>Ys(t,Ks(o,e[r]??0)),{x:0,y:0}),eh=e=>{if(e.length<3)return[...e];const n=[...e].sort((i,s)=>i.x-s.x||i.y-s.y),t=(i,s,u)=>(s.x-i.x)*(u.y-i.y)-(s.y-i.y)*(u.x-i.x),o=i=>i.reduce((s,u)=>{for(;s.length>=2&&t(s[s.length-2],s[s.length-1],u)<=0;)s.pop();return s.push(u),s},[]),r=o(n),a=o([...n].reverse());return[...r.slice(0,-1),...a.slice(0,-1)]},qm=[[0,1],[0,2],[1,2]],_m=32,Pm=1e-10,ke=(e,n,t)=>{var o;return((o=e[n])==null?void 0:o[t])??0},De=(e,n,t,o)=>{const r=e[n];r&&(r[t]=o)},Mm=e=>qm.map(([n,t])=>({row:n,column:t,value:Math.abs(ke(e,n,t))})).reduce((n,t)=>t.value>n.value?t:n),Dm=(e,n)=>{const t=[[0,0,0],[0,0,0],[0,0,0]];return e.forEach(o=>{const r=[o.x-n.x,o.y-n.y,o.z-n.z];for(let a=0;a<3;a+=1)for(let i=a;i<3;i+=1){const s=ke(t,a,i)+(r[a]??0)*(r[i]??0);De(t,a,i,s),De(t,i,a,s)}}),t},Bm=e=>{const n=e.map(r=>[...r]),t=[[1,0,0],[0,1,0],[0,0,1]];for(let r=0;r<_m;r+=1){const{row:a,column:i,value:s}=Mm(n);if(s<=Pm)break;const u=ke(n,a,a),l=ke(n,i,i),d=ke(n,a,i),c=.5*Math.atan2(2*d,l-u),m=Math.cos(c),y=Math.sin(c);for(let p=0;p<3;p+=1){if(p===a||p===i)continue;const A=ke(n,p,a),f=ke(n,p,i),v=m*A-y*f,b=y*A+m*f;De(n,p,a,v),De(n,a,p,v),De(n,p,i,b),De(n,i,p,b)}De(n,a,a,m*m*u-2*y*m*d+y*y*l),De(n,i,i,y*y*u+2*y*m*d+m*m*l),De(n,a,i,0),De(n,i,a,0);for(let p=0;p<3;p+=1){const A=ke(t,p,a),f=ke(t,p,i);De(t,p,a,m*A-y*f),De(t,p,i,y*A+m*f)}}let o=0;for(let r=1;r<3;r+=1)ke(n,r,r)<ke(n,o,o)&&(o=r);return[ke(t,0,o),ke(t,1,o),ke(t,2,o)]},al=Mn*Mn,il=(e,n,t,o=e.clone())=>{const r=t.lengthSq();if(r<=al)return o.copy(e);const a=e.clone().sub(n).dot(t);return o.copy(e).addScaledVector(t,-a/r)},nh=(e,n,t)=>{const o=t.length();return o<=Mn?0:e.clone().sub(n).dot(t)/o},Ta=(e,n,t,o=e.clone())=>(o.crossVectors(n.clone().sub(e),t.clone().sub(e)),o.lengthSq()<=al?null:o.normalize()),th=e=>{let n=0,t=0,o=0;for(let r=0;r<e.length;r+=1){const a=e[r],i=e[(r+1)%e.length];n+=(a.y-i.y)*(a.z+i.z),t+=(a.z-i.z)*(a.x+i.x),o+=(a.x-i.x)*(a.y+i.y)}return n*n+t*t+o*o>0?e[0].clone().set(n,t,o).normalize():e.length>=3?Ta(e[0],e[1],e[2]):null},sl=(e,n,t,o,r)=>{if(!Number.isFinite(o)||o<=0)return null;const a=n.clone().sub(e),i=t.clone().sub(e),s=a.length(),u=i.length();if(s<=Mn||u<=Mn)return null;const l=a.normalize(),d=i.normalize(),c=Ze(l.dot(d),-1,1),m=Math.acos(c);if(!Number.isFinite(m)||m<=.001)return null;const y=d.clone().addScaledVector(l,-c);if(y.length()<=1e-5)return null;y.normalize();const p=Math.min(o,s*.999,u*.999);if(p<=Mn)return null;const A=Math.max(8,r);return Array.from({length:A+1},(f,v)=>{const b=m*(v/A);return l.clone().multiplyScalar(Math.cos(b)).addScaledVector(y,Math.sin(b)).normalize().multiplyScalar(p).add(e)})},Fm=1e-12,H=(e,n)=>qs(ni(e.longitude),ni(e.latitude),e.altitude,n),Fn=e=>{const n=Io(e);return{longitude:Mt(n.longitude),latitude:Mt(n.latitude),altitude:n.altitude}},Gr=(e,n=new x)=>n.copy(e).lengthSq()>Fm?n.normalize():n.set(0,0,1),ba=(e,n=new x)=>n.copy(ga(e).up),oh=(e,n,t)=>{const o=H({...e,altitude:0}).lerp(H({...n,altitude:0}),t),{longitude:r,latitude:a}=Io(o);return{longitude:Mt(r),latitude:Mt(a),altitude:e.altitude+(n.altitude-e.altitude)*t}},Gm=(e,n)=>{const t=_s(H({...n,altitude:0}),H({...e,altitude:0}));return Math.hypot(t.east,t.north)},be=(e,n=new x)=>n.set(e.x,e.y,e.z),on=e=>({x:e.x,y:e.y,z:e.z}),ll=Ps,jm=(e,n,t=ll)=>{const o=n.clone().sub(e);if(!(o.lengthSq()>0))return null;o.normalize();const{north:r,up:a}=ga(e),i=Math.abs(a.dot(o))>1-1e-12?r:a;return{positionECEF:e.clone(),directionECEF:o,upECEF:Dt(i,o).normalize(),verticalFovRad:t}},oi=e=>bm({forward:e.directionECEF,up:e.upECEF,right:new x().crossVectors(e.directionECEF,e.upECEF)}),Hm=(e,n,t)=>{const{forward:o,up:r}=Tm(oi(e).slerp(oi(n),t));return{positionECEF:lc(e.positionECEF,n.positionECEF,t),directionECEF:o,upECEF:r,verticalFovRad:Fr(e.verticalFovRad,n.verticalFovRad,t)}},Um={prefix:"fac",iconName:"row-resize",icon:[512,512,[],"","M278.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-64 64c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8l32 0l0 96l-214.7 0l0 64l214.7 0l0 96l-32 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l64 64c12.5 12.5 32.8 12.5 45.3 0l64-64c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8l-32 0l0-96l214.7 0l0-64l-214.7 0l0-96l32 0c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-64-64z"]},zm=Bs+Fs,Vm=10,un=Oc/2,$e=Bs,dn=Fs,cn=Lc,$m=Object.freeze([{key:"right",pathD:`M ${$e} 0 L ${$e+cn} ${-1.5} L ${$e+dn} ${-1.5} L ${$e+dn} ${un} L ${$e+cn} ${un} Z`},{key:"left",pathD:`M ${-5-dn} ${-1.5} L ${-5-cn} ${-1.5} L -5 0 L ${-5-cn} ${un} L ${-5-dn} ${un} Z`},{key:"bottom",pathD:`M ${-1.5} ${$e+cn} L 0 ${$e} L ${un} ${$e+cn} L ${un} ${$e+dn} L ${-1.5} ${$e+dn} Z`},{key:"top",pathD:`M ${-1.5} ${-5-dn} L ${un} ${-5-dn} L ${un} ${-5-cn} L 0 -5 L ${-1.5} ${-5-cn} Z`}]),ri=100,ai=300,jr=({additionalAttributes:e="",fill:n,pathDefinitions:t,stroke:o,strokeLinejoin:r,strokeWidth:a})=>t.map(({pathD:i})=>`<path d="${i}" fill="${n}"${typeof o=="string"?` stroke="${o}"`:""}${typeof r=="string"?` stroke-linejoin="${r}"`:""}${typeof a=="number"?` stroke-width="${a}"`:""}${e}/>`).join(""),ul=({contentMarkup:e,rootStyleText:n,sizePx:t,viewBox:o})=>[`<svg xmlns="http://www.w3.org/2000/svg" width="${t}" height="${t}" viewBox="${o}" preserveAspectRatio="xMidYMid meet" shape-rendering="geometricPrecision"${typeof n=="string"&&n.length>0?` style="${n}"`:""}>`,e,"</svg>"].join(""),rh=({pathDefinitions:e,foregroundFill:n,rootStyleText:t,sizePx:o,viewBox:r})=>ul({contentMarkup:jr({fill:n,pathDefinitions:e}),rootStyleText:t,sizePx:o,viewBox:r}),ah=({pathDefinitions:e,shadowBlurPx:n,shadowStrokeColor:t,shadowStrokeLinejoin:o,shadowStrokeWidth:r,rootStyleText:a,sizePx:i,viewBox:s})=>{const u=Math.max(n,0),l=Math.max(r,0),d="cursor-shadow-blur";return ul({contentMarkup:[u>0?`<defs><filter id="${d}" x="-${ri}%" y="-${ri}%" width="${ai}%" height="${ai}%"><feDropShadow dx="0" dy="0" stdDeviation="${u}" flood-color="${t}" flood-opacity="1"/></filter></defs>`:"",l>0?jr({additionalAttributes:u>0?` filter="url(#${d})"`:"",fill:t,pathDefinitions:e,stroke:t,strokeLinejoin:o,strokeWidth:l}):jr({additionalAttributes:u>0?` filter="url(#${d})"`:"",fill:t,pathDefinitions:e})].join(""),rootStyleText:a,sizePx:i,viewBox:s})},dl="http://www.w3.org/2000/svg",ii=100,si=300;let li=0;const ot=e=>document.createElementNS(dl,e),cl=(e,{blendMode:n=Gs.NORMAL,sizePx:t,viewBox:o})=>{e.setAttribute("xmlns",dl),e.setAttribute("width",`${t}`),e.setAttribute("height",`${t}`),e.setAttribute("viewBox",o),e.setAttribute("preserveAspectRatio","xMidYMid meet"),e.setAttribute("shape-rendering","geometricPrecision"),e.style.display="block",e.style.overflow="visible",e.style.mixBlendMode=n,e.style.pointerEvents="none"},ml=({filterId:e,fill:n,pathDefinitions:t,parentElement:o,stroke:r,strokeLinejoin:a,strokeWidth:i})=>{t.forEach(({pathD:s})=>{const u=ot("path");u.setAttribute("d",s),u.setAttribute("fill",n),typeof r=="string"&&u.setAttribute("stroke",r),typeof a=="string"&&u.setAttribute("stroke-linejoin",a),typeof i=="number"&&u.setAttribute("stroke-width",`${i}`),typeof e=="string"&&e.length>0&&u.setAttribute("filter",`url(#${e})`),o.appendChild(u)})},Wm=(e,n,t)=>{if(!(n>0))return;li+=1;const o=`annotation-cursor-shadow-blur-${li}`,r=ot("defs"),a=ot("filter"),i=ot("feDropShadow");return a.setAttribute("id",o),a.setAttribute("x",`-${ii}%`),a.setAttribute("y",`-${ii}%`),a.setAttribute("width",`${si}%`),a.setAttribute("height",`${si}%`),i.setAttribute("dx","0"),i.setAttribute("dy","0"),i.setAttribute("flood-color",t),i.setAttribute("flood-opacity","1"),i.setAttribute("stdDeviation",`${n}`),a.appendChild(i),r.appendChild(a),e.appendChild(r),o},Ym=({blendMode:e="normal",foregroundFill:n,pathDefinitions:t,sizePx:o,viewBox:r})=>{const a=ot("svg");return cl(a,{blendMode:e,sizePx:o,viewBox:r}),ml({fill:n,parentElement:a,pathDefinitions:t}),a},Km=({blendMode:e="normal",pathDefinitions:n,shadowBlurPx:t,shadowStrokeColor:o,shadowStrokeLinejoin:r,shadowStrokeWidth:a,sizePx:i,viewBox:s})=>{const u=ot("svg"),l=Math.max(a,0),d=Wm(u,Math.max(t,0),o);return cl(u,{blendMode:e,sizePx:i,viewBox:s}),ml({fill:o,filterId:d,parentElement:u,pathDefinitions:n,stroke:l>0?o:void 0,strokeLinejoin:l>0?r:void 0,strokeWidth:l>0?l:void 0}),u},ui=({blendMode:e="normal",svgElement:n})=>{const t=document.createElement("div");return t.style.position="absolute",t.style.inset="0",t.style.pointerEvents="none",t.style.mixBlendMode="normal",n.style.mixBlendMode=e,t.appendChild(n),t},Qm=({canvasSizePx:e,foregroundBlendMode:n="normal",foregroundFill:t,pathDefinitions:o,shadowBlendMode:r="normal",shadowBlurPx:a,shadowStrokeColor:i,shadowStrokeLinejoin:s,shadowStrokeWidth:u,showAura:l,viewBox:d})=>{const c=document.createElement("div");return c.style.position="absolute",c.style.left="0",c.style.top="0",c.style.width=`${e}px`,c.style.height=`${e}px`,c.style.pointerEvents="none",c.style.willChange="transform",l&&c.appendChild(ui({blendMode:r,svgElement:Km({blendMode:r,pathDefinitions:o,shadowBlurPx:a,shadowStrokeColor:i,shadowStrokeLinejoin:s,shadowStrokeWidth:u,sizePx:e,viewBox:d})})),c.appendChild(ui({blendMode:n,svgElement:Ym({blendMode:n,foregroundFill:t,pathDefinitions:o,sizePx:e,viewBox:d})})),c},ur={de:{backspace:"Rücktaste",escape:"Escape",shift:"Umschalt"},en:{backspace:"Backspace",escape:"Escape",shift:"Shift"}},Xm=e=>e||(Rc||wc?"macos":xc?"windows":"other"),Zm=e=>{const n=e==null?void 0:e.split("-")[0];return n&&ur[n]?ur[n]:ur.en},Jm=(e,n)=>`${e==="macos"?"⌫":"←"} ${n.backspace}`;function me(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var ey=typeof Symbol=="function"&&Symbol.observable||"@@observable",di=ey,dr=()=>Math.random().toString(36).substring(7).split("").join("."),ny={INIT:`@@redux/INIT${dr()}`,REPLACE:`@@redux/REPLACE${dr()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${dr()}`},ho=ny;function ka(e){if(typeof e!="object"||e===null)return!1;let n=e;for(;Object.getPrototypeOf(n)!==null;)n=Object.getPrototypeOf(n);return Object.getPrototypeOf(e)===n||Object.getPrototypeOf(e)===null}function yl(e,n,t){if(typeof e!="function")throw new Error(me(2));if(typeof n=="function"&&typeof t=="function"||typeof t=="function"&&typeof arguments[3]=="function")throw new Error(me(0));if(typeof n=="function"&&typeof t>"u"&&(t=n,n=void 0),typeof t<"u"){if(typeof t!="function")throw new Error(me(1));return t(yl)(e,n)}let o=e,r=n,a=new Map,i=a,s=0,u=!1;function l(){i===a&&(i=new Map,a.forEach((f,v)=>{i.set(v,f)}))}function d(){if(u)throw new Error(me(3));return r}function c(f){if(typeof f!="function")throw new Error(me(4));if(u)throw new Error(me(5));let v=!0;l();const b=s++;return i.set(b,f),function(){if(v){if(u)throw new Error(me(6));v=!1,l(),i.delete(b),a=null}}}function m(f){if(!ka(f))throw new Error(me(7));if(typeof f.type>"u")throw new Error(me(8));if(typeof f.type!="string")throw new Error(me(17));if(u)throw new Error(me(9));try{u=!0,r=o(r,f)}finally{u=!1}return(a=i).forEach(b=>{b()}),f}function y(f){if(typeof f!="function")throw new Error(me(10));o=f,m({type:ho.REPLACE})}function p(){const f=c;return{subscribe(v){if(typeof v!="object"||v===null)throw new Error(me(11));function b(){const I=v;I.next&&I.next(d())}return b(),{unsubscribe:f(b)}},[di](){return this}}}return m({type:ho.INIT}),{dispatch:m,subscribe:c,getState:d,replaceReducer:y,[di]:p}}function ty(e){Object.keys(e).forEach(n=>{const t=e[n];if(typeof t(void 0,{type:ho.INIT})>"u")throw new Error(me(12));if(typeof t(void 0,{type:ho.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(me(13))})}function oy(e){const n=Object.keys(e),t={};for(let a=0;a<n.length;a++){const i=n[a];typeof e[i]=="function"&&(t[i]=e[i])}const o=Object.keys(t);let r;try{ty(t)}catch(a){r=a}return function(i={},s){if(r)throw r;let u=!1;const l={};for(let d=0;d<o.length;d++){const c=o[d],m=t[c],y=i[c],p=m(y,s);if(typeof p>"u")throw s&&s.type,new Error(me(14));l[c]=p,u=u||p!==y}return u=u||o.length!==Object.keys(i).length,u?l:i}}function So(...e){return e.length===0?n=>n:e.length===1?e[0]:e.reduce((n,t)=>(...o)=>n(t(...o)))}function ry(...e){return n=>(t,o)=>{const r=n(t,o);let a=()=>{throw new Error(me(15))};const i={getState:r.getState,dispatch:(u,...l)=>a(u,...l)},s=e.map(u=>u(i));return a=So(...s)(r.dispatch),{...r,dispatch:a}}}function ay(e){return ka(e)&&"type"in e&&typeof e.type=="string"}var pl=Symbol.for("immer-nothing"),ci=Symbol.for("immer-draftable"),qe=Symbol.for("immer-state");function He(e,...n){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var ct=Object.getPrototypeOf;function Gn(e){return!!e&&!!e[qe]}function an(e){var n;return e?gl(e)||Array.isArray(e)||!!e[ci]||!!((n=e.constructor)!=null&&n[ci])||jo(e)||Ho(e):!1}var iy=Object.prototype.constructor.toString();function gl(e){if(!e||typeof e!="object")return!1;const n=ct(e);if(n===null)return!0;const t=Object.hasOwnProperty.call(n,"constructor")&&n.constructor;return t===Object?!0:typeof t=="function"&&Function.toString.call(t)===iy}function Co(e,n){Go(e)===0?Reflect.ownKeys(e).forEach(t=>{n(t,e[t],e)}):e.forEach((t,o)=>n(o,t,e))}function Go(e){const n=e[qe];return n?n.type_:Array.isArray(e)?1:jo(e)?2:Ho(e)?3:0}function Hr(e,n){return Go(e)===2?e.has(n):Object.prototype.hasOwnProperty.call(e,n)}function fl(e,n,t){const o=Go(e);o===2?e.set(n,t):o===3?e.add(t):e[n]=t}function sy(e,n){return e===n?e!==0||1/e===1/n:e!==e&&n!==n}function jo(e){return e instanceof Map}function Ho(e){return e instanceof Set}function Ln(e){return e.copy_||e.base_}function Ur(e,n){if(jo(e))return new Map(e);if(Ho(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);const t=gl(e);if(n===!0||n==="class_only"&&!t){const o=Object.getOwnPropertyDescriptors(e);delete o[qe];let r=Reflect.ownKeys(o);for(let a=0;a<r.length;a++){const i=r[a],s=o[i];s.writable===!1&&(s.writable=!0,s.configurable=!0),(s.get||s.set)&&(o[i]={configurable:!0,writable:!0,enumerable:s.enumerable,value:e[i]})}return Object.create(ct(e),o)}else{const o=ct(e);if(o!==null&&t)return{...e};const r=Object.create(o);return Object.assign(r,e)}}function Na(e,n=!1){return Uo(e)||Gn(e)||!an(e)||(Go(e)>1&&(e.set=e.add=e.clear=e.delete=ly),Object.freeze(e),n&&Object.entries(e).forEach(([t,o])=>Na(o,!0))),e}function ly(){He(2)}function Uo(e){return Object.isFrozen(e)}var uy={};function jn(e){const n=uy[e];return n||He(0,e),n}var Bt;function Al(){return Bt}function dy(e,n){return{drafts_:[],parent_:e,immer_:n,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function mi(e,n){n&&(jn("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=n)}function zr(e){Vr(e),e.drafts_.forEach(cy),e.drafts_=null}function Vr(e){e===Bt&&(Bt=e.parent_)}function yi(e){return Bt=dy(Bt,e)}function cy(e){const n=e[qe];n.type_===0||n.type_===1?n.revoke_():n.revoked_=!0}function pi(e,n){n.unfinalizedDrafts_=n.drafts_.length;const t=n.drafts_[0];return e!==void 0&&e!==t?(t[qe].modified_&&(zr(n),He(4)),an(e)&&(e=Eo(n,e),n.parent_||Oo(n,e)),n.patches_&&jn("Patches").generateReplacementPatches_(t[qe].base_,e,n.patches_,n.inversePatches_)):e=Eo(n,t,[]),zr(n),n.patches_&&n.patchListener_(n.patches_,n.inversePatches_),e!==pl?e:void 0}function Eo(e,n,t){if(Uo(n))return n;const o=n[qe];if(!o)return Co(n,(r,a)=>gi(e,o,n,r,a,t)),n;if(o.scope_!==e)return n;if(!o.modified_)return Oo(e,o.base_,!0),o.base_;if(!o.finalized_){o.finalized_=!0,o.scope_.unfinalizedDrafts_--;const r=o.copy_;let a=r,i=!1;o.type_===3&&(a=new Set(r),r.clear(),i=!0),Co(a,(s,u)=>gi(e,o,r,s,u,t,i)),Oo(e,r,!1),t&&e.patches_&&jn("Patches").generatePatches_(o,t,e.patches_,e.inversePatches_)}return o.copy_}function gi(e,n,t,o,r,a,i){if(Gn(r)){const s=a&&n&&n.type_!==3&&!Hr(n.assigned_,o)?a.concat(o):void 0,u=Eo(e,r,s);if(fl(t,o,u),Gn(u))e.canAutoFreeze_=!1;else return}else i&&t.add(r);if(an(r)&&!Uo(r)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;Eo(e,r),(!n||!n.scope_.parent_)&&typeof o!="symbol"&&Object.prototype.propertyIsEnumerable.call(t,o)&&Oo(e,r)}}function Oo(e,n,t=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&Na(n,t)}function my(e,n){const t=Array.isArray(e),o={type_:t?1:0,scope_:n?n.scope_:Al(),modified_:!1,finalized_:!1,assigned_:{},parent_:n,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let r=o,a=Ia;t&&(r=[o],a=Ft);const{revoke:i,proxy:s}=Proxy.revocable(r,a);return o.draft_=s,o.revoke_=i,s}var Ia={get(e,n){if(n===qe)return e;const t=Ln(e);if(!Hr(t,n))return yy(e,t,n);const o=t[n];return e.finalized_||!an(o)?o:o===cr(e.base_,n)?(mr(e),e.copy_[n]=Wr(o,e)):o},has(e,n){return n in Ln(e)},ownKeys(e){return Reflect.ownKeys(Ln(e))},set(e,n,t){const o=vl(Ln(e),n);if(o!=null&&o.set)return o.set.call(e.draft_,t),!0;if(!e.modified_){const r=cr(Ln(e),n),a=r==null?void 0:r[qe];if(a&&a.base_===t)return e.copy_[n]=t,e.assigned_[n]=!1,!0;if(sy(t,r)&&(t!==void 0||Hr(e.base_,n)))return!0;mr(e),$r(e)}return e.copy_[n]===t&&(t!==void 0||n in e.copy_)||Number.isNaN(t)&&Number.isNaN(e.copy_[n])||(e.copy_[n]=t,e.assigned_[n]=!0),!0},deleteProperty(e,n){return cr(e.base_,n)!==void 0||n in e.base_?(e.assigned_[n]=!1,mr(e),$r(e)):delete e.assigned_[n],e.copy_&&delete e.copy_[n],!0},getOwnPropertyDescriptor(e,n){const t=Ln(e),o=Reflect.getOwnPropertyDescriptor(t,n);return o&&{writable:!0,configurable:e.type_!==1||n!=="length",enumerable:o.enumerable,value:t[n]}},defineProperty(){He(11)},getPrototypeOf(e){return ct(e.base_)},setPrototypeOf(){He(12)}},Ft={};Co(Ia,(e,n)=>{Ft[e]=function(){return arguments[0]=arguments[0][0],n.apply(this,arguments)}});Ft.deleteProperty=function(e,n){return Ft.set.call(this,e,n,void 0)};Ft.set=function(e,n,t){return Ia.set.call(this,e[0],n,t,e[0])};function cr(e,n){const t=e[qe];return(t?Ln(t):e)[n]}function yy(e,n,t){var r;const o=vl(n,t);return o?"value"in o?o.value:(r=o.get)==null?void 0:r.call(e.draft_):void 0}function vl(e,n){if(!(n in e))return;let t=ct(e);for(;t;){const o=Object.getOwnPropertyDescriptor(t,n);if(o)return o;t=ct(t)}}function $r(e){e.modified_||(e.modified_=!0,e.parent_&&$r(e.parent_))}function mr(e){e.copy_||(e.copy_=Ur(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var py=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(n,t,o)=>{if(typeof n=="function"&&typeof t!="function"){const a=t;t=n;const i=this;return function(u=a,...l){return i.produce(u,d=>t.call(this,d,...l))}}typeof t!="function"&&He(6),o!==void 0&&typeof o!="function"&&He(7);let r;if(an(n)){const a=yi(this),i=Wr(n,void 0);let s=!0;try{r=t(i),s=!1}finally{s?zr(a):Vr(a)}return mi(a,o),pi(r,a)}else if(!n||typeof n!="object"){if(r=t(n),r===void 0&&(r=n),r===pl&&(r=void 0),this.autoFreeze_&&Na(r,!0),o){const a=[],i=[];jn("Patches").generateReplacementPatches_(n,r,a,i),o(a,i)}return r}else He(1,n)},this.produceWithPatches=(n,t)=>{if(typeof n=="function")return(i,...s)=>this.produceWithPatches(i,u=>n(u,...s));let o,r;return[this.produce(n,t,(i,s)=>{o=i,r=s}),o,r]},typeof(e==null?void 0:e.autoFreeze)=="boolean"&&this.setAutoFreeze(e.autoFreeze),typeof(e==null?void 0:e.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){an(e)||He(8),Gn(e)&&(e=gy(e));const n=yi(this),t=Wr(e,void 0);return t[qe].isManual_=!0,Vr(n),t}finishDraft(e,n){const t=e&&e[qe];(!t||!t.isManual_)&&He(9);const{scope_:o}=t;return mi(o,n),pi(void 0,o)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,n){let t;for(t=n.length-1;t>=0;t--){const r=n[t];if(r.path.length===0&&r.op==="replace"){e=r.value;break}}t>-1&&(n=n.slice(t+1));const o=jn("Patches").applyPatches_;return Gn(e)?o(e,n):this.produce(e,r=>o(r,n))}};function Wr(e,n){const t=jo(e)?jn("MapSet").proxyMap_(e,n):Ho(e)?jn("MapSet").proxySet_(e,n):my(e,n);return(n?n.scope_:Al()).drafts_.push(t),t}function gy(e){return Gn(e)||He(10,e),Tl(e)}function Tl(e){if(!an(e)||Uo(e))return e;const n=e[qe];let t;if(n){if(!n.modified_)return n.base_;n.finalized_=!0,t=Ur(e,n.scope_.immer_.useStrictShallowCopy_)}else t=Ur(e,!0);return Co(t,(o,r)=>{fl(t,o,Tl(r))}),n&&(n.finalized_=!1),t}var _e=new py,bl=_e.produce;_e.produceWithPatches.bind(_e);_e.setAutoFreeze.bind(_e);_e.setUseStrictShallowCopy.bind(_e);_e.applyPatches.bind(_e);_e.createDraft.bind(_e);_e.finishDraft.bind(_e);function kl(e){return({dispatch:t,getState:o})=>r=>a=>typeof a=="function"?a(t,o,e):r(a)}var fy=kl(),Ay=kl,vy=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?So:So.apply(null,arguments)};function fi(e,n){function t(...o){if(n){let r=n(...o);if(!r)throw new Error(Ue(0));return{type:e,payload:r.payload,..."meta"in r&&{meta:r.meta},..."error"in r&&{error:r.error}}}return{type:e,payload:o[0]}}return t.toString=()=>`${e}`,t.type=e,t.match=o=>ay(o)&&o.type===e,t}var Nl=class Rt extends Array{constructor(...n){super(...n),Object.setPrototypeOf(this,Rt.prototype)}static get[Symbol.species](){return Rt}concat(...n){return super.concat.apply(this,n)}prepend(...n){return n.length===1&&Array.isArray(n[0])?new Rt(...n[0].concat(this)):new Rt(...n.concat(this))}};function Ai(e){return an(e)?bl(e,()=>{}):e}function vi(e,n,t){if(e.has(n)){let r=e.get(n);return t.update&&(r=t.update(r,n,e),e.set(n,r)),r}if(!t.insert)throw new Error(Ue(10));const o=t.insert(n,e);return e.set(n,o),o}function Ty(e){return typeof e=="boolean"}var by=()=>function(n){const{thunk:t=!0,immutableCheck:o=!0,serializableCheck:r=!0,actionCreatorCheck:a=!0}=n??{};let i=new Nl;return t&&(Ty(t)?i.push(fy):i.push(Ay(t.extraArgument))),i},ky="RTK_autoBatch",Il=e=>n=>{setTimeout(n,e)},Ny=typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:Il(10),Iy=(e={type:"raf"})=>n=>(...t)=>{const o=n(...t);let r=!0,a=!1,i=!1;const s=new Set,u=e.type==="tick"?queueMicrotask:e.type==="raf"?Ny:e.type==="callback"?e.queueNotification:Il(e.timeout),l=()=>{i=!1,a&&(a=!1,s.forEach(d=>d()))};return Object.assign({},o,{subscribe(d){const c=()=>r&&d(),m=o.subscribe(c);return s.add(d),()=>{m(),s.delete(d)}},dispatch(d){var c;try{return r=!((c=d==null?void 0:d.meta)!=null&&c[ky]),a=!r,a&&(i||(i=!0,u(l))),o.dispatch(d)}finally{r=!0}}})},hy=e=>function(t){const{autoBatch:o=!0}=t??{};let r=new Nl(e);return o&&r.push(Iy(typeof o=="object"?o:void 0)),r};function Sy(e){const n=by(),{reducer:t=void 0,middleware:o,devTools:r=!0,preloadedState:a=void 0,enhancers:i=void 0}=e;let s;if(typeof t=="function")s=t;else if(ka(t))s=oy(t);else throw new Error(Ue(1));let u;typeof o=="function"?u=o(n):u=n();let l=So;r&&(l=vy({trace:!1,...typeof r=="object"&&r}));const d=ry(...u),c=hy(d);let m=typeof i=="function"?i(c):c();const y=l(...m);return yl(s,a,y)}function hl(e){const n={},t=[];let o;const r={addCase(a,i){const s=typeof a=="string"?a:a.type;if(!s)throw new Error(Ue(28));if(s in n)throw new Error(Ue(29));return n[s]=i,r},addMatcher(a,i){return t.push({matcher:a,reducer:i}),r},addDefaultCase(a){return o=a,r}};return e(r),[n,t,o]}function Cy(e){return typeof e=="function"}function Ey(e,n){let[t,o,r]=hl(n),a;if(Cy(e))a=()=>Ai(e());else{const s=Ai(e);a=()=>s}function i(s=a(),u){let l=[t[u.type],...o.filter(({matcher:d})=>d(u)).map(({reducer:d})=>d)];return l.filter(d=>!!d).length===0&&(l=[r]),l.reduce((d,c)=>{if(c)if(Gn(d)){const y=c(d,u);return y===void 0?d:y}else{if(an(d))return bl(d,m=>c(m,u));{const m=c(d,u);if(m===void 0){if(d===null)return d;throw new Error(Ue(9))}return m}}return d},s)}return i.getInitialState=a,i}var Oy=Symbol.for("rtk-slice-createasyncthunk");function Ly(e,n){return`${e}/${n}`}function Ry({creators:e}={}){var t;const n=(t=e==null?void 0:e.asyncThunk)==null?void 0:t[Oy];return function(r){const{name:a,reducerPath:i=a}=r;if(!a)throw new Error(Ue(11));const s=(typeof r.reducers=="function"?r.reducers(qy()):r.reducers)||{},u=Object.keys(s),l={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},d={addCase(T,I){const N=typeof T=="string"?T:T.type;if(!N)throw new Error(Ue(12));if(N in l.sliceCaseReducersByType)throw new Error(Ue(13));return l.sliceCaseReducersByType[N]=I,d},addMatcher(T,I){return l.sliceMatchers.push({matcher:T,reducer:I}),d},exposeAction(T,I){return l.actionCreators[T]=I,d},exposeCaseReducer(T,I){return l.sliceCaseReducersByName[T]=I,d}};u.forEach(T=>{const I=s[T],N={reducerName:T,type:Ly(a,T),createNotation:typeof r.reducers=="function"};Py(I)?Dy(N,I,d,n):_y(N,I,d)});function c(){const[T={},I=[],N=void 0]=typeof r.extraReducers=="function"?hl(r.extraReducers):[r.extraReducers],h={...T,...l.sliceCaseReducersByType};return Ey(r.initialState,S=>{for(let k in h)S.addCase(k,h[k]);for(let k of l.sliceMatchers)S.addMatcher(k.matcher,k.reducer);for(let k of I)S.addMatcher(k.matcher,k.reducer);N&&S.addDefaultCase(N)})}const m=T=>T,y=new Map;let p;function A(T,I){return p||(p=c()),p(T,I)}function f(){return p||(p=c()),p.getInitialState()}function v(T,I=!1){function N(S){let k=S[T];return typeof k>"u"&&I&&(k=f()),k}function h(S=m){const k=vi(y,I,{insert:()=>new WeakMap});return vi(k,S,{insert:()=>{const O={};for(const[R,L]of Object.entries(r.selectors??{}))O[R]=wy(L,S,f,I);return O}})}return{reducerPath:T,getSelectors:h,get selectors(){return h(N)},selectSlice:N}}const b={name:a,reducer:A,actions:l.actionCreators,caseReducers:l.sliceCaseReducersByName,getInitialState:f,...v(i),injectInto(T,{reducerPath:I,...N}={}){const h=I??i;return T.inject({reducerPath:h,reducer:A},N),{...b,...v(h,!0)}}};return b}}function wy(e,n,t,o){function r(a,...i){let s=n(a);return typeof s>"u"&&o&&(s=t()),e(s,...i)}return r.unwrapped=e,r}var xy=Ry();function qy(){function e(n,t){return{_reducerDefinitionType:"asyncThunk",payloadCreator:n,...t}}return e.withTypes=()=>e,{reducer(n){return Object.assign({[n.name](...t){return n(...t)}}[n.name],{_reducerDefinitionType:"reducer"})},preparedReducer(n,t){return{_reducerDefinitionType:"reducerWithPrepare",prepare:n,reducer:t}},asyncThunk:e}}function _y({type:e,reducerName:n,createNotation:t},o,r){let a,i;if("reducer"in o){if(t&&!My(o))throw new Error(Ue(17));a=o.reducer,i=o.prepare}else a=o;r.addCase(e,a).exposeCaseReducer(n,a).exposeAction(n,i?fi(e,i):fi(e))}function Py(e){return e._reducerDefinitionType==="asyncThunk"}function My(e){return e._reducerDefinitionType==="reducerWithPrepare"}function Dy({type:e,reducerName:n},t,o,r){if(!r)throw new Error(Ue(18));const{payloadCreator:a,fulfilled:i,pending:s,rejected:u,settled:l,options:d}=t,c=r(e,a,d);o.exposeAction(n,c),i&&o.addCase(c.fulfilled,i),s&&o.addCase(c.pending,s),u&&o.addCase(c.rejected,u),l&&o.addMatcher(c.settled,l),o.exposeCaseReducer(n,{fulfilled:i||oo,pending:s||oo,rejected:u||oo,settled:l||oo})}function oo(){}function Ue(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}const mt=Object.freeze({markerSize:ir.markerSize,markerStrokeWidth:ir.markerStrokeWidth,lineColor:ir.lineColor,zIndex:0,fallbackFontSizePx:12,rootFontSizePx:16}),Ti=Object.freeze({brightOnDark:Object.freeze({backgroundColor:"rgba(15, 23, 42, 0.82)",textColor:"rgba(248, 250, 252, 0.98)"}),darkOnBright:Object.freeze({backgroundColor:"rgba(255, 255, 255, 0.9)",textColor:"rgba(15, 23, 42, 0.92)"})}),ih=({text:e,getScreenPosition:n,theme:t="bright-on-dark",lineColor:o,textBackgroundColor:r,textColor:a,fontSize:i,fontFamily:s,fontWeight:u,mixBlendMode:l,attach:d="center",distance:c=0,hideMarker:m=!0})=>{const y=t==="dark-on-bright"?Ti.darkOnBright:Ti.brightOnDark;return{content:e,hideMarker:m,lineColor:o,textBackgroundColor:r??y.backgroundColor,textColor:a??y.textColor,fontSize:i,fontFamily:s,fontWeight:u,mixBlendMode:l,attach:d,distance:c,getScreenPosition:n}},By=e=>e.getScreenPosition?e.getScreenPosition():e.screenPosition??null,Fy=(e,n)=>e==="left"?`translate(${-n}px, -50%)`:e==="right"?`translate(calc(-100% + ${n}px), -50%)`:"translate(-50%, -50%)",Gy=(e=Vc)=>{const n=e.trim(),t=Number.parseFloat(n);return Number.isFinite(t)?n.endsWith("rem")?t*mt.rootFontSizePx:t:mt.fallbackFontSizePx},jy=({labelRoot:e,fontSize:n})=>{var r;const t=((r=e.ownerDocument.defaultView)==null?void 0:r.getComputedStyle(e).fontSize)??"",o=Number.parseFloat(t);return Number.isFinite(o)?o:Gy(n)},Hy=e=>{const n=e.querySelector('[data-point-label-stem="true"]'),t=e.querySelector('[data-point-label-stem-line="true"]'),o=e.querySelector('[data-pillbutton-root="true"], [data-point-label-content-root="true"]'),r=e.querySelector('[data-pillbutton-badge="true"]'),a=e.querySelector('[data-pillbutton-content="true"]'),i=e.querySelector('[data-point-label-root="true"]');return!n||!t||!o||!i?null:{stem:n,stemLine:t,labelRoot:o,pillBadge:r,pillContent:a,pointLabelRoot:i}},yr=new WeakMap,It=new WeakMap,Uy=e=>{var n;return It.has(e)||(It.set(e,0),(n=e.fonts)==null||n.addEventListener("loadingdone",()=>{It.set(e,(It.get(e)??0)+1)})),It.get(e)},zy=/(?:^|\s)(?:left|top|transform):[^;]*;/g,Vy=(e,n,t)=>{var o,r;return`${Uy(e.ownerDocument)}|${(o=e.ownerDocument.defaultView)==null?void 0:o.innerWidth}:${(r=e.ownerDocument.defaultView)==null?void 0:r.innerHeight}|${+(n!==null)}${Number(t)}|${e.className}|${e.style.cssText.replace(zy,"")}|${e.innerHTML}`},$y=(e,n,t)=>{const o=Vy(e,n,t),r=yr.get(e);if((r==null?void 0:r.key)===o)return r;const a={key:o,badgeWidthPx:(n==null?void 0:n.offsetWidth)??0,badgeHeightPx:(n==null?void 0:n.offsetHeight)??0,rootHeightPx:t?e.offsetHeight:0};return(n===null||a.badgeWidthPx>0&&a.badgeHeightPx>0)&&(!t||a.rootHeightPx>0)?yr.set(e,a):yr.delete(e),a},Sl=({labelRoot:e,pillBadge:n,pillContent:t},o)=>{const r=o.angleRad??0,a=o.distance??0,i=o.attach??"center",s=Math.cos(r),u=Math.sin(r),l=e.hasAttribute("data-pillbutton-root"),d=o.hideMarker?0:(o.markerSize??mt.markerSize)/2+(o.markerStrokeWidth??mt.markerStrokeWidth)/2,c=n!==null&&t===null,{badgeWidthPx:m,badgeHeightPx:y,rootHeightPx:p}=$y(e,c?n:null,l),A=y>0?y/2:null,f=l&&p>0?p/2:null,v=i==="center"?0:A??f??Hc(jy({labelRoot:e,fontSize:o.fontSize})),b=o.stemStartDistance??d,T={x:s*b,y:u*b},I={x:s*(a+v),y:u*(a+v)},N=m>0&&y>0?Uc(T,I,i,m,y):v>0?zc(T,I,v):{x:s*a,y:u*a};return{attach:i,isPillRoot:l,pillCapRadiusPx:v,pillAnchorPoint:I,stemStart:T,stemEnd:N}},Cl=({start:e,end:n})=>Math.hypot(n.x-e.x,n.y-e.y)>0,Wy=({domRefs:e,state:n})=>{if(n.hideLabelAndStem)return null;const{stemStart:t,stemEnd:o}=Sl(e,n),r={start:t,end:o};return Cl(r)?r:null},Yy=({elementDiv:e,domRefs:n,state:t})=>{const o=By(t);if(!o||t.visible===!1)return!1;e.style.left=`${o.x}px`,e.style.top=`${o.y}px`,e.style.transform="none",e.style.zIndex=`${t.zIndex??mt.zIndex}`;const r=`${t.isOccluded?js:1}`;if(t.hideLabelAndStem)return n.pointLabelRoot.style.opacity=r,!0;const{labelRoot:a,pillBadge:i,pillContent:s}=n;a.hasAttribute("data-pillbutton-root")?(to(i,Gc(t)),to(s,t.content),i===null&&s===null&&to(a,t.content)):to(a,t.content);const{attach:u,isPillRoot:l,pillCapRadiusPx:d,pillAnchorPoint:c,stemStart:m,stemEnd:y}=Sl(n,t),p=!t.hideStem&&Cl({start:m,end:y});if(n.stem.style.display=p?"block":"none",p){const A=y.x-m.x,f=y.y-m.y;n.stem.style.left=`${m.x}px`,n.stem.style.top=`${m.y}px`,n.stem.style.transformOrigin="0 0",n.stem.style.transform=`rotate(${Math.atan2(f,A)}rad)`,n.stemLine.style.width=`${Math.hypot(A,f)}px`,n.stemLine.style.borderBottom=`1px ${t.isOccluded?"dashed":"solid"} ${t.lineColor??mt.lineColor}`}return a.style.left=`${c.x}px`,a.style.top=`${c.y}px`,a.style.transform=l?Fy(u,d):jc(u),n.pointLabelRoot.style.opacity=r,!0};function Tt(e){const n={current:null};return{facade:e(()=>n.current),register:t=>{n.current=t}}}const{facade:sh,register:Ky}=Tt(e=>({isAvailable:()=>e()!==null,getState:()=>{var n,t;return((t=(n=e())==null?void 0:n.getState)==null?void 0:t.call(n))??null},subscribe:n=>{var t,o;return((o=(t=e())==null?void 0:t.subscribe)==null?void 0:o.call(t,n))??(()=>{})},activateTool:n=>{var t,o;return((o=(t=e())==null?void 0:t.activateTool)==null?void 0:o.call(t,n))??Promise.resolve(!1)},pickAt:n=>{var t,o;return((o=(t=e())==null?void 0:t.pickAt)==null?void 0:o.call(t,n))??Promise.resolve(!1)},finish:()=>{var n,t;return((t=(n=e())==null?void 0:n.finish)==null?void 0:t.call(n))??Promise.resolve(null)},cancel:()=>{var n,t;return(t=(n=e())==null?void 0:n.cancel)==null?void 0:t.call(n)},answerTextPrompt:n=>{var t,o;return((o=(t=e())==null?void 0:t.answerTextPrompt)==null?void 0:o.call(t,n))??!1},createMeasurement:(n,t,o)=>{var r,a;return((a=(r=e())==null?void 0:r.createMeasurement)==null?void 0:a.call(r,n,t,o))??Promise.resolve(null)},addMeasurements:(n,t)=>{var o,r;return((r=(o=e())==null?void 0:o.addMeasurements)==null?void 0:r.call(o,n,t))??[]},exportMeasurements:()=>{var n,t;return((t=(n=e())==null?void 0:n.exportMeasurements)==null?void 0:t.call(n))??null},select:n=>{var t,o;return(o=(t=e())==null?void 0:t.select)==null?void 0:o.call(t,n)},remove:n=>{var t,o;return(o=(t=e())==null?void 0:t.remove)==null?void 0:o.call(t,n)},flyTo:n=>{var t,o;return(o=(t=e())==null?void 0:t.flyTo)==null?void 0:o.call(t,n)}})),{facade:lh,register:Qy}=Tt(e=>({isAvailable:()=>e()!==null,getPose:()=>{var n,t;return((t=(n=e())==null?void 0:n.getPose)==null?void 0:t.call(n))??null},setPose:n=>{var t,o;return((o=(t=e())==null?void 0:t.setPose)==null?void 0:o.call(t,n))??!1},flyToPose:(n,t)=>{var o,r;return((r=(o=e())==null?void 0:o.flyToPose)==null?void 0:r.call(o,n,t))??Promise.resolve(!1)},lookAt:(n,t,o)=>{var r,a;return((a=(r=e())==null?void 0:r.lookAt)==null?void 0:a.call(r,n,t,o))??Promise.resolve(!1)},stop:()=>{var n,t;return(t=(n=e())==null?void 0:n.stop)==null?void 0:t.call(n)}})),{facade:uh,register:dh}=Tt(e=>({applyById:n=>{var t,o;return((o=(t=e())==null?void 0:t.applyById)==null?void 0:o.call(t,n))??Promise.resolve(!1)},setMappingConfig:n=>{var t,o;return((o=(t=e())==null?void 0:t.setMappingConfig)==null?void 0:o.call(t,n))??Promise.resolve(!1)},getAppliedId:()=>{var n,t;return((t=(n=e())==null?void 0:n.getAppliedId)==null?void 0:t.call(n))??null},getMappingConfig:()=>{var n,t;return((t=(n=e())==null?void 0:n.getMappingConfig)==null?void 0:t.call(n))??null},backgroundAsLayers:n=>{var t,o;return((o=(t=e())==null?void 0:t.backgroundAsLayers)==null?void 0:o.call(t,n))??n}})),bi=()=>{},{facade:ch,register:mh}=Tt(e=>({addSource:n=>{var t;return((t=e())==null?void 0:t.registerContribution({sources:[n]}))??bi},addMode:n=>{var t;return((t=e())==null?void 0:t.registerContribution({additionalModes:[n]}))??bi}})),Xy={localStorage:[],sessionStorage:[],localforage:[],catalogCache:[],indexedDB:[]},en=(e,n)=>t=>{var o,r;return((r=(o=e())==null?void 0:o[n])==null?void 0:r.call(o,t))??Promise.resolve([])},{facade:yh,register:ph}=Tt(e=>({all:en(e,"all"),persistedState:en(e,"persistedState"),layers:en(e,"layers"),catalogCache:en(e,"catalogCache"),favorites:en(e,"favorites"),measurements:en(e,"measurements"),addonOverrides:en(e,"addonOverrides"),auth:en(e,"auth"),localStorage:en(e,"localStorage"),list:()=>{var n,t;return((t=(n=e())==null?void 0:n.list)==null?void 0:t.call(n))??Promise.resolve(Xy)}})),{facade:gh,register:fh}=Tt(e=>({openMenu:()=>{var n,t;return(t=(n=e())==null?void 0:n.openMenu)==null?void 0:t.call(n)},openHelperOverlay:()=>{var n,t;return(t=(n=e())==null?void 0:n.openHelperOverlay)==null?void 0:t.call(n)}})),Ae={FLY_TO:"flyTo",EXPORT:"export",VISIBILITY:"visibility",REFERENCE:"reference",LOCK:"lock",STYLE:"style",DELETE:"delete"},je=(()=>{const e="1rem",n="0.8571rem",t="1rem";return Object.freeze({rootFontSizeRem:e,supportFontSizeRem:n,headingFontSizeRem:t,headingFontWeight:600,headingTypographyClassName:`text-[${n}] font-semibold tracking-[0.03em]`,titleTypographyClassName:`text-[${t}] font-semibold leading-[1.25]`})})(),Me=Object.freeze({borderRadiusRem:"0.2143rem",hairlineBorderWidthRem:"0.0357rem",panelInsetShadowYOffsetRem:"0.0714rem",panelInsetShadowBlurRem:"0.0714rem",panelBackdropBlurRem:"0.1429rem"}),Q=Object.freeze({heading:ae.ACCENT_MEASUREMENTS,panelSurface:ae.NEUTRAL_SURFACE_SUBTLE,panelBorder:ae.NEUTRAL_BORDER_SUBTLE,shadowBase:ae.NEUTRAL_BLACK,bodyText:ae.NEUTRAL_TEXT_PRIMARY,mutedText:ae.NEUTRAL_TEXT_MUTED,linkText:ae.WUPP_BLUE,fieldText:ae.NEUTRAL_TEXT_STRONG,fieldBorder:ae.NEUTRAL_BORDER_DEFAULT,fieldInputBorder:ae.NEUTRAL_BORDER_INPUT,fieldFocusBackground:ae.STATE_FOCUS_BACKGROUND_WARM,fieldFocusOutline:ae.STATE_FOCUS_OUTLINE,titleText:ae.NEUTRAL_TEXT_STRONG}),pr=Object.freeze({panelSurface:.9,panelBorder:.9,panelInsetShadow:.02}),Zy=Object.freeze({defaultPixelWidth:430,headingColor:Q.heading,headerStyle:{},bodyPanelStyle:{backgroundColor:ar(Q.panelSurface,pr.panelSurface),border:`${Me.hairlineBorderWidthRem} solid ${ar(Q.panelBorder,pr.panelBorder)}`,boxShadow:`${ar(Q.shadowBase,pr.panelInsetShadow)} 0 ${Me.panelInsetShadowYOffsetRem} ${Me.panelInsetShadowBlurRem} inset`,backdropFilter:`blur(${Me.panelBackdropBlurRem})`,WebkitBackdropFilter:`blur(${Me.panelBackdropBlurRem})`},resolveActionTooltipPopupContainer:e=>e.closest('[data-test-id="annotation-info-box"]')??e.ownerDocument.body,headerForegroundClassName:"text-white/80",headerTitleClassName:`truncate ${je.headingTypographyClassName}`,subtitleContainerClassName:"mb-0 w-full px-2 pt-[0.28em]",subtitleTextStyle:{color:ae.ACCENT_NEUTRALS},subtitleTextClassName:`px-2 text-[${je.supportFontSizeRem}] leading-[1.1] font-semibold`,subtitleMetaTextStyle:{color:ae.ACCENT_NEUTRALS},subtitleMetaTextClassName:`mt-[0.08em] whitespace-nowrap text-[${je.supportFontSizeRem}] leading-[1.1] font-semibold`,showSubtitleMetaText:!0,readOnly:!1,bodyContainerClassName:"px-2 pb-2 pt-1",bodyTextStyle:{fontSize:je.rootFontSizeRem,lineHeight:1.4,color:Q.bodyText},bodyTextClassName:`text-[${je.rootFontSizeRem}] leading-[1.4] text-[${Q.bodyText}]`,emptyContentLineStyle:{minHeight:"1.4em"},emptyContentLineClassName:"w-full",mutedTextClassName:`text-[${Q.mutedText}]`,linkTextClassName:`text-[${Q.linkText}]`,actionIconClassName:"transition-colors",actionIconColor:ae.ACCENT_NEUTRALS,actionIconHoverColor:ae.ACCENT_NEUTRALS_HOVER,actionIconFontSize:null,hiddenActionIds:[],fieldTextClassName:`text-[${Q.fieldText}]`,fieldBorderClassName:`border-[${Me.hairlineBorderWidthRem}] border-[${Q.fieldBorder}]`,fieldInputBorderClassName:`border-[${Me.hairlineBorderWidthRem}] border-[${Q.fieldInputBorder}]`,fieldFocusBackgroundClassName:`focus:bg-[${Q.fieldFocusBackground}]`,fieldFocusOutlineClassName:`focus:outline focus:outline-2 focus:outline-[${Q.fieldFocusOutline}]`,subtleFieldBackgroundClassName:"bg-white/85",titleTextStyle:{fontSize:je.headingFontSizeRem,fontWeight:je.headingFontWeight,lineHeight:1.25},titleTextClassName:`text-[${Q.titleText}]/80 ${je.titleTypographyClassName}`,titleInputClassName:`min-w-0 w-auto max-w-full appearance-none [field-sizing:content] break-words rounded-[${Me.borderRadiusRem}] border border-transparent bg-transparent px-0 py-[0.05em] text-[${Q.titleText}]/80 placeholder:text-[${Q.titleText}]/50 focus:bg-[${Q.fieldFocusBackground}] focus:outline focus:outline-2 focus:outline-[${Q.fieldFocusOutline}] ${je.titleTypographyClassName}`,shortLabelInputClassName:`shrink-0 w-auto appearance-none [field-sizing:content] border-[${Me.hairlineBorderWidthRem}] px-[0.5ex] py-0 text-center tabular-nums border-[${Q.fieldBorder}] bg-white/85 text-[${Q.titleText}]/80 placeholder:text-[${Q.titleText}]/80 focus:bg-[${Q.fieldFocusBackground}] focus:outline focus:outline-2 focus:outline-[${Q.fieldFocusOutline}] ${je.titleTypographyClassName}`,navigationInstructionContainerClassName:"mt-1 flex w-full items-center justify-center px-2 pt-1",navigationAvailabilityContainerClassName:"mt-1 flex w-full items-center justify-center px-2 pt-1",navigationSummaryContainerClassName:"mb-1 mt-0 flex w-full items-center justify-between px-2",navigationLinkFontSize:je.supportFontSizeRem,inlineFieldButtonClassName:`inline-flex h-5 w-5 items-center justify-center rounded border-[${Me.hairlineBorderWidthRem}] border-[${Q.fieldInputBorder}]`,colorInputClassName:`h-6 w-8 cursor-pointer rounded border-[${Me.hairlineBorderWidthRem}] border-[${Q.fieldInputBorder}] bg-transparent p-0`,inlineActionButtonClassName:`inline-flex items-center gap-1 rounded border-[${Me.hairlineBorderWidthRem}] border-[${Q.fieldInputBorder}] px-2 py-1`}),Je=e=>({...Zy,...e}),he=Object.freeze({lineLengthEpsilonPx:.001,referenceDistanceFactor:.2,lineLabelReferenceDistancePx:24,flipThresholdPx:4,referenceMinDistancePx:24,referenceMaxDistancePx:48,insideBlendFactor:.35,elevationEpsilonMeters:.001,polygonAreaEpsilonPx2:1e-6}),Jy=(e,n,t=he.flipThresholdPx)=>{if(!Number.isFinite(e))return n??1;const o=e>=0?1:-1;return!n||n===o?o:Math.abs(e)<t?n:o},go=({start:e,end:n,insidePoint:t,previousOutsideSign:o,flipThresholdPx:r=he.flipThresholdPx,referenceDistanceFactor:a=he.referenceDistanceFactor,referenceDistancePx:i,minDistancePx:s=he.referenceMinDistancePx,maxDistancePx:u=he.referenceMaxDistancePx})=>{const l=om({start:e,end:n,epsilon:he.lineLengthEpsilonPx});if(!l)return null;const d=rm(t,l.midpoint),c=am(d,l.leftUnitNormal),m=Jy(-c,o,r),y=i??Ze(l.length*a,s,u),p=Ks(l.leftUnitNormal,m*y);return{outsideSign:m,referencePoint:Ys(l.midpoint,p)}},Ah=(e,n,t,o=he.referenceMinDistancePx,r=he.referenceMaxDistancePx)=>{var a;return((a=go({start:e,end:n,insidePoint:t,minDistancePx:o,maxDistancePx:r}))==null?void 0:a.referencePoint)??null},ep=({triangle:e,auxiliaryAltitudeMeters:n,highestAltitudeMeters:t,insideBlendFactor:o=he.insideBlendFactor,elevationEpsilonMeters:r=he.elevationEpsilonMeters})=>{const a=n<t-r?e.highest:e.aux;return{x:Fr(a.x,e.centroid.x,o),y:Fr(a.y,e.centroid.y,o)}},np=({anchor:e,target:n,aux:t,anchorAltitudeMeters:o,targetAltitudeMeters:r,previousOutsideSigns:a,insideBlendFactor:i=he.insideBlendFactor,flipThresholdPx:s=he.flipThresholdPx,referenceDistancePx:u=he.lineLabelReferenceDistancePx})=>{const l=o>=r?e:n,d={anchor:e,target:n,aux:t,highest:l,centroid:{x:(e.x+n.x+t.x)/3,y:(e.y+n.y+t.y)/3}},c=ep({triangle:d,auxiliaryAltitudeMeters:r,highestAltitudeMeters:Math.max(o,r),insideBlendFactor:i}),m=go({start:e,end:n,insidePoint:c,previousOutsideSign:a==null?void 0:a.direct,flipThresholdPx:s,referenceDistancePx:u}),y=go({start:t,end:n,insidePoint:c,previousOutsideSign:a==null?void 0:a.horizontal,flipThresholdPx:s,referenceDistancePx:u}),p=go({start:e,end:t,insidePoint:n,previousOutsideSign:a==null?void 0:a.vertical,flipThresholdPx:s,referenceDistancePx:u});return{directOutsideReferencePoint:(m==null?void 0:m.referencePoint)??null,verticalOutsideReferencePoint:(p==null?void 0:p.referencePoint)??null,horizontalOutsideReferencePoint:(y==null?void 0:y.referencePoint)??null,nextOutsideSigns:{direct:m==null?void 0:m.outsideSign,vertical:p==null?void 0:p.outsideSign,horizontal:y==null?void 0:y.outsideSign}}},tp=e=>Ws({points:e,degenerateAreaEpsilon:he.polygonAreaEpsilonPx2}),q={POINT:"point",DISTANCE:"distance",POLYLINE:"polyline",AREA_GROUND:"area",AREA_PLANAR:"planar",AREA_VERTICAL:"vertical",LABEL:"label"},In="select",vh="planar-biggest-triangle",Th="planar-pca",bh="planar-trapezoid",El=e=>e===q.AREA_GROUND||e===q.AREA_VERTICAL||e===q.AREA_PLANAR,fo=Object.freeze({fillAlpha:.25,selectedFillAlpha:.35,rgb255ByType:{[q.AREA_VERTICAL]:[112,168,255],[q.AREA_GROUND]:[107,188,123],[q.AREA_PLANAR]:[239,223,145]}}),Ol=e=>fo.rgb255ByType[e],op=(e,n)=>ze(Ol(e),n),ki=e=>typeof e=="number"&&Number.isFinite(e)&&e>=0&&e<=1,rp=(e={})=>{const n=ki(e.fillAlpha)?e.fillAlpha:fo.fillAlpha,t=ki(e.selectedFillAlpha)?e.selectedFillAlpha:fo.selectedFillAlpha,o=r=>{var a;return((a=e.rgb255ByType)==null?void 0:a[r])??fo.rgb255ByType[r]};return{rgb255:o,fillCssColor:(r,a)=>ze(o(r),a?t:n),cssColor:(r,a)=>ze(o(r),a)}},kh=rp(),Te={DIRECT:"direct",VERTICAL:"vertical",HORIZONTAL:"horizontal"},ln=Object.freeze({textRgb255:{dark:[17,24,39],light:[255,255,255]},labelTextRgb255:[248,250,252],shortLabelRgb255ByType:{[q.POINT]:[200,200,200],[q.DISTANCE]:[102,126,234],[q.POLYLINE]:[226,178,60],[q.LABEL]:[88,152,255]},surfaceRgb255:{stroke:[255,255,255],accent:[246,248,255]},lineComponentRgb255ByKind:{[Te.DIRECT]:[255,255,255],[Te.VERTICAL]:[111,168,255],[Te.HORIZONTAL]:[188,194,102]},selectionRgb255:{background:[15,23,42],hoverBackground:[30,41,59],glow:[255,255,255]}}),Tn=Object.freeze({alpha:{text:{dark:.9,light:1},shortLabelBackgroundByType:{[q.POINT]:.92,[q.DISTANCE]:.95,[q.POLYLINE]:.95,[q.LABEL]:.95,area:.95},lineComponentByKind:{[Te.DIRECT]:1,[Te.VERTICAL]:.96,[Te.HORIZONTAL]:.95},lineComponentLabelAccentByKind:{[Te.DIRECT]:.34,[Te.VERTICAL]:.54,[Te.HORIZONTAL]:.5},selection:{background:.92,hoverBackground:.9,glow:1},surfaceStroke:.95}}),Sn=(e,n=Tn.alpha.text[e])=>ze(ln.textRgb255[e],n),Ao=(e=Tn.alpha.surfaceStroke)=>ze(ln.surfaceRgb255.stroke,e),ap=(e=Tn.alpha.surfaceStroke)=>ze(ln.surfaceRgb255.accent,e),gr=(e,n=Tn.alpha.lineComponentByKind[e])=>ze(ln.lineComponentRgb255ByKind[e],n),fr=(e,n=Tn.alpha.lineComponentLabelAccentByKind[e])=>ze(ln.lineComponentRgb255ByKind[e],n),Cn=e=>El(e)?op(e,Tn.alpha.shortLabelBackgroundByType.area):ze(ln.shortLabelRgb255ByType[e],Tn.alpha.shortLabelBackgroundByType[e]),Nh=e=>El(e)?Ol(e):ln.shortLabelRgb255ByType[e],Ni=(e,n=Tn.alpha.selection[e])=>ze(ln.selectionRgb255[e],n),ip=(e=1)=>ze(ln.labelTextRgb255,e),Rn=Object.freeze({fontFamily:'"Helvetica Neue", Arial, Helvetica, sans-serif',fontWeight:{regular:400,medium:500,semibold:600},fontSizePx:{supportText:12,pointLabel:14,measurementLabel:16,compactBadge:10,distancePairLabel:11}}),sp=e=>{if(!Number.isFinite(e)||e<0)return"A";let n=Math.floor(e),t="";do t=String.fromCharCode(65+n%26)+t,n=Math.floor(n/26)-1;while(n>=0);return t},yn={NUMERIC:"numeric",ALPHABETIC:"alphabetic"},lp={[q.POINT]:{prefix:"",counterStyle:yn.NUMERIC,backgroundColor:Cn(q.POINT),textColor:Sn("dark")},[q.DISTANCE]:{prefix:"",counterStyle:yn.ALPHABETIC,backgroundColor:Cn(q.DISTANCE),textColor:Sn("light")},[q.POLYLINE]:{prefix:"L",counterStyle:yn.NUMERIC,backgroundColor:Cn(q.POLYLINE),textColor:Sn("dark")},[q.AREA_GROUND]:{prefix:"A",counterStyle:yn.NUMERIC,backgroundColor:Cn(q.AREA_GROUND),textColor:Sn("light")},[q.AREA_PLANAR]:{prefix:"D",counterStyle:yn.NUMERIC,backgroundColor:Cn(q.AREA_PLANAR),textColor:Sn("light")},[q.AREA_VERTICAL]:{prefix:"F",counterStyle:yn.NUMERIC,backgroundColor:Cn(q.AREA_VERTICAL),textColor:Sn("light")},[q.LABEL]:{prefix:"T",counterStyle:yn.NUMERIC,backgroundColor:Cn(q.LABEL),textColor:Sn("light")}},Ll=(e,n,t=lp)=>{const o=t[e],r=Number.isFinite(n)&&n>0?Math.floor(n):1,a=o.counterStyle===yn.ALPHABETIC?sp(r-1):`${r}`;return`${o.prefix}${a}`},Rl=/^(.*?)(\d+)$/,up=8,dp=(e,n)=>{const t=e==null?void 0:e.trim();if(!t)return n;const o=t.match(Rl);if(!o)return t;const[,r,a]=o,i=String(Number(a)+1).padStart(a.length,"0");return`${r}${i}`},cp=(e,n)=>{const t=n.trim();return t?[t,...e.filter(o=>o!==t)].slice(0,up):e},Ii=e=>{const n=e.match(Rl);if(!n)return null;const[,t]=n,o=t.trimEnd();return o?{baseText:o,prefix:t}:null},mp=e=>{const n=new Set(e.filter(o=>!Ii(o))),t=new Set;return e.filter(o=>{const r=Ii(o);return r?n.has(r.baseText)||t.has(r.prefix)?!1:(t.add(r.prefix),!0):!0})},ha=(...e)=>mp([...new Set(e.flat().map(n=>n.trim()).filter(Boolean))]),yp=({defaultText:e,labelTextHistory:n,labelTextSuggestions:t})=>({initialValue:dp(n[0],e),labelSuggestions:ha(n,t)}),Ih=({annotationEntries:e,additionalSuggestions:n=[]})=>ha([...e].reverse().filter(t=>t.toolType===q.LABEL||t.type===q.LABEL).flatMap(t=>t.displayName??t.name??[]),n),pp="data-annotation-keyboard-shortcuts-suspended",hi=e=>e instanceof HTMLElement?e.isContentEditable?!0:e.closest("input, textarea, select, [contenteditable]:not([contenteditable='false'])")instanceof HTMLElement:!1,Si=e=>e instanceof HTMLElement?!!e.closest(`[${pp}]`):!1,wl=e=>e instanceof Element?e:e instanceof Node?e.parentElement:null,gp=e=>{const n=wl(e);return hi(n)?!0:hi(document.activeElement)},xl=e=>{const n=wl(e);return gp(e)||Si(n)||Si(document.activeElement)},Ne={CANCEL_ACTIVE_TOOL:"cancel-active-tool",DELETE_SELECTION:"delete-selection",FINISH_MEASUREMENT:"finish-measurement",FOCUS_NEXT_NAVIGATION_ITEM:"focus-next-navigation-item",FOCUS_PREVIOUS_NAVIGATION_ITEM:"focus-previous-navigation-item",UNDO_LAST_POINT:"undo-last-point"},fp=(e,n)=>{const t=e.key.toLowerCase(),o=e.code.toLowerCase();return n.some(r=>{const a=r.toLowerCase();return a===t||a===o})},Ap=[{action:Ne.CANCEL_ACTIVE_TOOL,keys:["Escape"]},{action:Ne.FINISH_MEASUREMENT,keys:["Enter"]},{action:Ne.FOCUS_PREVIOUS_NAVIGATION_ITEM,keys:["ArrowLeft"]},{action:Ne.FOCUS_NEXT_NAVIGATION_ITEM,keys:["ArrowRight"]},{action:Ne.DELETE_SELECTION,keys:["Delete"]},{action:Ne.UNDO_LAST_POINT,keys:["Backspace"]}],vp=(e,{allowRepeat:n=!1}={})=>!(e.defaultPrevented||!n&&e.repeat||e.metaKey||e.ctrlKey||e.altKey||xl(e.target)),Tp=e=>!e.defaultPrevented&&!e.altKey&&!xl(e.target)&&(e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==="a",bp=(e,n={})=>{var t;return((t=Ap.find(({action:o,keys:r})=>{var a;return!((a=n.disabledActions)!=null&&a.includes(o))&&fp(e,r)}))==null?void 0:t.action)??null},Zn=new x,kp=new x,Yr=(e,n)=>e.dot(n)<0?e.negate():e,Np=({samples:e,normal:n,maxSampleCount:t,timestampMs:o=performance.now()})=>{const r=Zn.copy(n);if(e.length>0){const i=e[e.length-1];i&&Yr(r,kp.set(i.normalX,i.normalY,i.normalZ))}e.push({normalX:r.x,normalY:r.y,normalZ:r.z,timestampMs:o});const a=e.length-t;a>0&&e.splice(0,a)},Ip=({samples:e,fallbackNormal:n,result:t,epsilonSquared:o,maxSampleAgeMs:r,weightDecayWindowMs:a=r,weightDecayGamma:i=1,nowMs:s=performance.now()})=>{const u=s-Math.max(0,r);for(;e.length>1&&e[0].timestampMs<u;)e.shift();if(e.length===0)return n;let l=0,d=0,c=0,m=0;const y=Math.max(0,a),p=Math.max(i,.01),A=e[e.length-1];for(const v of e){Zn.set(v.normalX,v.normalY,v.normalZ),Yr(Zn,n);const b=Math.max(0,s-v.timestampMs),T=v===A?1:y>0?Math.pow(Math.max(0,1-b/y),p):1;T<=0||(l+=Zn.x*T,d+=Zn.y*T,c+=Zn.z*T,m+=T)}if(m<=0)return t.copy(n);const f=1/m;return t.set(l*f,d*f,c*f),t.lengthSq()<=o?t.copy(n):(t.normalize(),Yr(t,n)),t},rt=Object.freeze({referenceLineEpsilonMeters:.001}),Sa=1e-8,ql=(e,n,t)=>new x().crossVectors(new x().subVectors(n,e),new x().subVectors(t,e)).lengthSq(),_l=e=>{if(e.length<3)return null;let n=null,t=Sa;for(let o=0;o<e.length;o+=1){const r=e[o],a=e[(o+1)%e.length],i=e[(o+2)%e.length];if(!r||!a||!i)continue;const s=ql(r,a,i);s>t&&(t=s,n=[r,a,i])}return n},hp=e=>{for(let n=0;n<e.length-2;n+=1)for(let t=n+1;t<e.length-1;t+=1)for(let o=t+1;o<e.length;o+=1){const r=e[n],a=e[t],i=e[o];if(r&&a&&i&&ql(r,a,i)>Sa)return[r,a,i]}return null},Pl=(e,n)=>{if(!n)return e;const t=be(e.anchorECEF),o=Oe(be(e.normalECEF));if(!o)return e;const r=new x().subVectors(n,t);return r.lengthSq()<=Sa||o.dot(r)>=0?e:{...e,normalECEF:on(o.negate())}},Ml=(e,n)=>{if(!e)return null;const[t,o,r]=e,a=Ta(t,o,r);return a?Pl({anchorECEF:on(t),normalECEF:on(a)},n):null},Sp=(e,n)=>Ml(hp(e),n),hh=(e,n)=>Ml(_l(e),n),Sh=(e,n)=>{if(e.length<3||!_l(e))return null;const t=km(e),o=t&&Oe(new x(...Bm(Dm(e,t))));return!t||!o?null:Pl({anchorECEF:on(t),normalECEF:on(o)},n)},Cp=new x(1,0,0),Ep=new x(0,1,0),Op=(e,n,t)=>{if(e.length===0)return;const o=e[0]??be(n.anchorECEF);let r=Oe(be(n.normalECEF));if(!r)return;if(t){const u=Oe(be(t.northECEF));u&&r.dot(u)<0&&(r=r.clone().negate())}const a=Oe(Dt(ba(o),r));let i=a?Oe(new x().crossVectors(r,a)):null;for(let u=0;!i&&u<e.length-1;u+=1){const l=e[u],d=e[u+1];!l||!d||(i=Oe(Dt(new x().subVectors(d,l),r)))}if(i??(i=Oe(new x().crossVectors(r,Cp))),i??(i=Oe(new x().crossVectors(r,Ep))),!i)return;const s=Oe(new x().crossVectors(i,r));if(s){if(t){const u=Oe(be(t.eastECEF));u&&i.dot(u)<0&&(i=i.clone().negate(),r=r.clone().negate())}return{originECEF:on(o),eastECEF:on(i),northECEF:on(r),upECEF:on(s)}}},Lp=1e-8,Rp=e=>{const n=Oe(be(e.normalECEF));if(!n)return;const{east:t,north:o}=ga(be(e.anchorECEF)),r=n.dot(t),a=n.dot(o);if(!(Math.hypot(r,a)<=Lp))return Nm(Math.atan2(r,a))},Dl=(e,n)=>il(e,be(n.anchorECEF),be(n.normalECEF)),wp=(e,n)=>{if(e.length<3)return 0;const t=be(n.anchorECEF),{xAxis:o,yAxis:r}=Fo(be(n.normalECEF).normalize());return im(e.map(a=>{const i=new x().subVectors(a,t);return{x:i.dot(o),y:i.dot(r)}}))},xp=e=>{const n=be(e.normalECEF).normalize(),t=ba(be(e.anchorECEF)),o=n.angleTo(t);return Mt(Math.min(o,Ms-o))},qp=(e,n)=>{let t=0;for(let a=1;a<e.length;a+=1){const i=e[a-1],s=e[a];i&&s&&(t+=i.distanceTo(s))}const o=e[0],r=e[e.length-1];return n&&e.length>=3&&o&&r&&(t+=r.distanceTo(o)),t},_p=(e,n,t)=>{var s;const o=e.nodeIds.map(u=>n.get(u)).filter(u=>!!u),r=qp(o,e.closed),a=o.length<3?null:Sp(o,(t==null?void 0:t.preferredFacingPositionECEF)??null);if(!a)return{...e,perimeterMeters:r,areaSquareMeters:0};const i=e.closed||e.planeLocked?wp(o,a):0;return{...e,plane:a,planarPolygonLocalFrame:e.type===q.AREA_VERTICAL?Op(o,a,(s=t==null?void 0:t.previousDerivedGeometry)==null?void 0:s.planarPolygonLocalFrame):void 0,perimeterMeters:r,areaSquareMeters:i,verticalityDeg:xp(a),bearingRad:Rp(a)}},Ci=Object.freeze({componentEpsilonMeters:.05}),Bl=(e,n)=>{const t=ba(e),o=new x().subVectors(n,e),r=o.dot(t),a=new x().copy(t).multiplyScalar(r),i=Dt(o,t),s=i.length(),u=Math.abs(r);if(s<Ci.componentEpsilonMeters||u<Ci.componentEpsilonMeters)return null;const l=new x().addVectors(e,i),d=new x().addVectors(e,a),c=new x().addVectors(e,t),m=Ta(e,c,l),y=p=>m?il(p,e,m):p;return{adjacentHorizontalCorner:y(l),adjacentVerticalCorner:y(d)}},Ch=(e,n)=>{const t=Bl(e,n);if(!t)return 0;const o=e.distanceTo(t.adjacentHorizontalCorner),r=e.distanceTo(t.adjacentVerticalCorner);return o*r},Fl=1e-8,Kr=.001,Pp=1e-6,Ei=16,Oi=e=>!e||e.lengthSq()<=Fl?null:e.clone().normalize(),Mp=(e,n,t)=>{const o=Oi(n),r=Oi(t);return o?r&&o.dot(r)<0||o.dot(Gr(e))<0?o.negate():o:r||Gr(e)},Dp=(e,n,t,o=new Bo)=>{const r=Math.max(t,Kr),a=n.clone().normalize(),{xAxis:i,yAxis:s}=Fo(a);return o.makeBasis(i,s,a).scale(new x(r,r,1)).setPosition(e)},Bp=(e,n,t,o,r)=>{const a=Math.max(o,Kr);if(r===void 0)return a;const i=e(n);if(!i)return a;const{xAxis:s,yAxis:u}=Fo(t),l=new x;let d=0;for(let c=0;c<Ei;c+=1){const m=c/Ei*dc;l.copy(n).addScaledVector(s,Math.cos(m)).addScaledVector(u,Math.sin(m));const y=e(l);if(!y)continue;const p=Math.hypot(y.x-i.x,y.y-i.y);Number.isFinite(p)&&p>d&&(d=p)}return d<=Pp?a:Math.max(r/d,Kr)},Eh={CESIUM:"cesium",MAPLIBRE_THREE:"maplibre-three"},Fp={COLOR:"color",CHROME_MIRROR:"chrome-mirror",FROSTED_GLASS:"frosted-glass"},Pn={GROUND:"ground",COPLANAR:"coplanar"},Li={IMMEDIATE:"immediate",DELAYED_LINE_FINISH:"delayed-line-finish"},Gp={SHIFT:"shift"},Oh={SCREEN:"screen",WORLD:"world"},j=e=>!!e&&!e.isDestroyed(),jp=(e,n)=>e===n?!0:!e||!n?!1:e.viewportWidth===n.viewportWidth&&e.viewportHeight===n.viewportHeight&&e.viewKey===n.viewKey,Ri=Object.freeze({tooltipZIndex:1700,triggerClassName:"inline-flex items-center text-[16px] leading-none"}),pn=({actionId:e,title:n,icon:t,onClick:o,dataTestId:r,className:a,ariaLabel:i,disabled:s=!1,visualOptions:u})=>{var A;const l=Je(u),[d,c]=g.useState(!1),m=`${l.actionIconClassName}${a?` ${a}`:""}${s?" cursor-not-allowed opacity-50":" cursor-pointer"}`,y={color:d&&!s?l.actionIconHoverColor:l.actionIconColor};l.actionIconFontSize!==null&&(y.fontSize=l.actionIconFontSize);const p=(A=l.renderActionIcon)==null?void 0:A.call(l,{actionId:e,icon:t,className:m,style:y,dataTestId:r,ariaLabel:i,disabled:s});return E.jsx(Ds,{title:n,zIndex:Ri.tooltipZIndex,getPopupContainer:f=>{const v=f instanceof HTMLElement?f:document.body;return l.resolveActionTooltipPopupContainer(v)},children:E.jsx("span",{onClick:f=>{if(s){f.stopPropagation();return}o(f)},onMouseEnter:()=>c(!0),onMouseLeave:()=>c(!1),className:Ri.triggerClassName,"aria-label":i,"aria-disabled":s,children:p??E.jsx(dt,{className:m,style:y,icon:t,"data-test-id":r,"aria-hidden":i?void 0:!0})})})};pn.__docgenInfo={description:"",methods:[],displayName:"AnnotationInfoBoxActionIcon",props:{actionId:{required:!0,tsType:{name:"unknown[union]",raw:"(typeof ANNOTATION_INFO_BOX_ACTION_IDS)[keyof typeof ANNOTATION_INFO_BOX_ACTION_IDS]"},description:""},title:{required:!0,tsType:{name:"string"},description:""},icon:{required:!0,tsType:{name:"IconDefinition"},description:""},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: ReactMouseEvent<HTMLElement, MouseEvent>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",elements:[{name:"HTMLElement"},{name:"MouseEvent"}],raw:"ReactMouseEvent<HTMLElement, MouseEvent>"},name:"event"}],return:{name:"void"}}},description:""},dataTestId:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},visualOptions:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};const Hp=Object.freeze({flyTo:"Zur Messung fliegen",exportGeoJson:"Als GeoJSON exportieren",show:"Einblenden",hide:"Ausblenden",setReference:"Als Referenzhöhe setzen",lock:"Sperren",unlock:"Entsperren",editStyle:"Darstellung bearbeiten",delete:"Löschen",deleteLocked:"Gesperrte Messung kann nicht gelöscht werden"}),Up=({hidden:e=!1,locked:n=!1,labels:t,onFlyTo:o,onExport:r,onToggleVisibility:a,onToggleLock:i,onEditStyle:s,onDelete:u,onSetReference:l,visualOptions:d,dataTestIdPrefix:c,dataTestIds:m})=>{const y={...Hp,...t},p=new Set((d==null?void 0:d.hiddenActionIds)??[]),A=f=>!p.has(f);return E.jsxs("div",{className:"flex items-center gap-2",children:[A(Ae.FLY_TO)?E.jsx(pn,{actionId:Ae.FLY_TO,title:y.flyTo,icon:yc,onClick:o,dataTestId:(m==null?void 0:m.flyTo)??`${c}-flyto-btn`,visualOptions:d}):null,A(Ae.EXPORT)?E.jsx(pn,{actionId:Ae.EXPORT,title:y.exportGeoJson,icon:pc,onClick:r,dataTestId:(m==null?void 0:m.export)??`${c}-export-geojson-btn`,visualOptions:d}):null,A(Ae.VISIBILITY)?E.jsx(pn,{actionId:Ae.VISIBILITY,title:e?y.show:y.hide,icon:e?gc:fc,onClick:a,dataTestId:(m==null?void 0:m.visibility)??`${c}-toggle-visibility-btn`,visualOptions:d}):null,l&&A(Ae.REFERENCE)?E.jsx(pn,{actionId:Ae.REFERENCE,title:y.setReference,icon:Ac,onClick:l,dataTestId:(m==null?void 0:m.reference)??`${c}-set-reference-btn`,visualOptions:d}):null,A(Ae.LOCK)?E.jsx(pn,{actionId:Ae.LOCK,title:n?y.unlock:y.lock,icon:n?vc:Tc,onClick:i,dataTestId:(m==null?void 0:m.lock)??`${c}-toggle-lock-btn`,visualOptions:d}):null,s&&A(Ae.STYLE)?E.jsx(pn,{actionId:Ae.STYLE,title:y.editStyle,icon:bc,onClick:s,visualOptions:d}):null,A(Ae.DELETE)?E.jsx(pn,{actionId:Ae.DELETE,title:n?y.deleteLocked:y.delete,icon:kc,onClick:u,dataTestId:(m==null?void 0:m.delete)??`${c}-delete-btn`,disabled:n,visualOptions:d}):null]})};Up.__docgenInfo={description:"",methods:[],displayName:"AnnotationInfoBoxActions",props:{hidden:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},locked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},labels:{required:!1,tsType:{name:"Partial",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};const Gl=({pixelWidth:e,fitContentWidth:n=!0,collapsedHorizontalAnchor:t="control-edge",useControlLayout:o=!0,controlPosition:r="bottomright",controlOrder:a=11,style:i,slots:s,visualOptions:u})=>{var c;const l=Je(u),d=((c=s.headingTitle)==null?void 0:c.trim())??"";return E.jsx("div",{"data-test-id":"annotation-info-box",children:E.jsx(qc,{width:e??l.defaultPixelWidth,fitContentWidth:n,useControlLayout:o,controlPosition:r,controlOrder:a,style:i,bodyStyle:l.bodyPanelStyle,onPanelClick:m=>m.stopPropagation(),collapsible:s.collapsible??!0,header:void 0,headingColor:s.headingColor??l.headingColor,headingStyle:l.headerStyle,footer:s.footer,hideSubtitleWhenCollapsed:!1,hideFooterWhenCollapsed:!0,collapsedHorizontalAnchor:t,heading:d?E.jsx("div",{className:"flex w-full items-center gap-2",children:E.jsx("span",{className:`${l.headerForegroundClassName} ${l.headerTitleClassName}`,title:d,children:d})}):void 0,subtitle:s.subtitle,content:s.content})})};Gl.__docgenInfo={description:"",methods:[],displayName:"AnnotationInfoBoxContainer",props:{pixelWidth:{required:!1,tsType:{name:"number"},description:""},fitContentWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},collapsedHorizontalAnchor:{required:!1,tsType:{name:"union",raw:'"control-edge" | "expanded-left"',elements:[{name:"literal",value:'"control-edge"'},{name:"literal",value:'"expanded-left"'}]},description:"",defaultValue:{value:'"control-edge"',computed:!1}},useControlLayout:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},controlPosition:{required:!1,tsType:{name:"union",raw:`| "topleft"
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
}`,signature:{properties:[{key:"headingTitle",value:{name:"string",required:!1}},{key:"headingColor",value:{name:"string",required:!1}},{key:"subtitle",value:{name:"ReactNode",required:!1}},{key:"content",value:{name:"ReactNode",required:!1}},{key:"footer",value:{name:"ReactNode",required:!1}},{key:"collapsible",value:{name:"boolean",required:!1}}]}},description:""}}};const ue={TEXT:"text",ACTION:"action",ALERT:"alert",HEADING:"heading"},yt={TITLE:"title",SECTION:"section"},Hn={END:"end",START:"start"},Ie={CLICK:"click",DOUBLE_CLICK:"double-click",ENTER:"enter",BACKSPACE:"backspace",ESCAPE:"escape",SHIFT:"shift",DISC_CENTER:"disc-center",DISC_OUTER:"disc-outer"},Gt={INFO:"info",WARNING:"warning"},fn={INFO:"info",WARNING:"warning"},Fe={STANDARD:"standard",COMPACT:"compact"},zp="#00d9ff",Vp="rgba(0, 217, 255, 0.2)",$p="#004b5c",Wp="#ef4444",Yp="rgba(239, 68, 68, 0.18)",Kp="#7f1d1d",Ca="--carma-help-baseline",Qp="1.5em",sn=1.5,jt=`var(${Ca})`,zo=`calc(var(${Ca}) / 2)`,wi=.74,Ar=4/3,Qr=e=>`${sn/e}em`,jl={[Ca]:Qp,lineHeight:sn},Hl={margin:`0 0 ${jt}`,lineHeight:sn},xi={[yt.TITLE]:{margin:0,fontWeight:700,lineHeight:sn},[yt.SECTION]:{margin:`${zo} 0 0`,fontWeight:700,lineHeight:sn}},Xp={gridColumn:"1 / -1"},ro={whiteSpace:"normal"},Zp={display:"inline-flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"flex-start",minWidth:0},Lo={display:"inline-flex",flexWrap:"wrap",alignItems:"center",gap:"0.34em",minHeight:jt},Jp={...Lo,marginTop:zo},eg={...Lo,justifyContent:"space-between",width:"100%"},Ro="1em",ng="0.5em",Ul="max-content minmax(0, 1fr)",tg="7.75rem minmax(0, 1fr)",og=e=>({...jl,display:"grid",gridTemplateColumns:e===Hn.START?tg:Ul,columnGap:e===Hn.START?ng:Ro,rowGap:zo,alignItems:"start"}),zl={...Hl,gridColumn:"1 / -1"},rg={...zl,margin:0},Vl={[Fe.STANDARD]:{display:"grid",gridTemplateColumns:Ul,columnGap:Ro,alignItems:"start",margin:`0 0 ${zo}`,lineHeight:sn},[Fe.COMPACT]:{display:"contents"}},Vo={display:"inline-flex",alignItems:"center",justifyContent:"flex-end",gap:"0.22em",minHeight:jt,whiteSpace:"nowrap"},Xr={display:"flex",flexDirection:"column",alignItems:"flex-end",gap:0,whiteSpace:"nowrap"},ag={lineHeight:1},Zr={[fn.INFO]:{margin:"-0.2rem 0 0.8rem",padding:"0.48rem 0.56rem",borderRadius:4,background:Vp,color:$p},[fn.WARNING]:{margin:"-0.2rem 0 0.8rem",padding:"0.48rem 0.56rem",borderRadius:4,background:Yp,color:Kp}},ig={[fn.INFO]:{...Zr[fn.INFO],display:"grid",gridColumn:"1 / -1",gridTemplateColumns:"subgrid",columnGap:Ro,rowGap:"0.58rem",margin:"-0.2rem 0 0.8rem",padding:"0.48rem 0"},[fn.WARNING]:{...Zr[fn.WARNING],display:"grid",gridColumn:"1 / -1",gridTemplateColumns:"subgrid",columnGap:Ro,rowGap:"0.58rem",margin:"-0.2rem 0 0.8rem",padding:"0.48rem 0"}},sg={minWidth:0,fontWeight:600,lineHeight:sn},lg={[Fe.STANDARD]:{minWidth:0,lineHeight:sn,whiteSpace:"nowrap"},[Fe.COMPACT]:{minWidth:0,lineHeight:sn}},$l={display:"inline-flex",boxSizing:"border-box",minWidth:"3.4em",height:Qr(wi),alignItems:"center",justifyContent:"center",border:"1px solid rgba(0, 0, 0, 0.34)",borderRadius:"0.28rem",background:"rgba(255, 255, 255, 0.68)",boxShadow:"inset 0 -1px 0 rgba(0, 0, 0, 0.2)",color:"#1f2937",fontSize:`${wi}em`,fontWeight:700,lineHeight:1,padding:"0 0.58em"},ug={...$l,gap:"0.22rem"},dg={display:"inline-flex",minWidth:jt,height:jt,alignItems:"center",justifyContent:"center",lineHeight:1},cg={[Gt.INFO]:{color:zp},[Gt.WARNING]:{color:Wp}},mg={display:"inline-flex",alignItems:"center",justifyContent:"center",minWidth:Qr(Ar),height:Qr(Ar),fontSize:`${Ar}em`,lineHeight:1,color:ae.ACCENT_NEUTRALS},vr={de:{alternative:"oder",click:"Klick",doubleClick:"2x Klick"},en:{alternative:"or",click:"Click",doubleClick:"Double click"}},yg=e=>{const n=e==null?void 0:e.split("-")[0];return n&&vr[n]?vr[n]:vr.en},xt=e=>E.jsx("span",{style:$l,children:e}),Jr=e=>E.jsxs("span",{style:ug,children:[E.jsx(dt,{icon:hc}),E.jsx("span",{children:e})]}),ea=e=>E.jsx("span",{style:mg,children:E.jsx(dt,{icon:e})}),Ht=e=>E.jsx("span",{style:dg,children:E.jsx(dt,{style:cg[e],icon:e===Gt.WARNING?Nc:Ic})}),Wl=e=>Ht(e===fn.WARNING?Gt.WARNING:Gt.INFO),Yl=(e,n)=>xt(Jm(e,n)),Kl=(e,n,t,o)=>{switch(e){case Ie.CLICK:return Jr(o.click);case Ie.DOUBLE_CLICK:return Jr(o.doubleClick);case Ie.ENTER:return xt("Enter");case Ie.BACKSPACE:return Yl(t,n);case Ie.ESCAPE:return xt(n.escape);case Ie.SHIFT:return xt(n.shift);case Ie.DISC_CENTER:return ea(Um);case Ie.DISC_OUTER:return ea(Sc)}},wo=(e,n,t,o)=>E.jsx("span",{style:Vo,children:e.map((r,a)=>E.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"0.22rem"},children:[a>0?E.jsx("span",{children:"+"}):null,Kl(r,n,t,o)]},`${r}-${a}`))}),Ql=(e,n,t,o,r,a)=>a===Fe.COMPACT?E.jsxs("span",{style:Xr,children:[e?Ht(e):null,n.map((i,s)=>E.jsxs("span",{style:Xr,children:[s>0?E.jsx("span",{style:ag,children:r.alternative}):null,wo(i,t,o,r)]},`${i.join("+")}-${s}`))]}):E.jsxs("span",{style:Vo,children:[e?Ht(e):null,n.map((i,s)=>E.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"0.22rem"},children:[s>0?E.jsx("span",{children:r.alternative}):null,wo(i,t,o,r)]},`${i.join("+")}-${s}`))]}),Xl=(e,n,t,o)=>{const r=e.inputAlternatives.length-1;return E.jsxs("span",{style:Zp,children:[e.inputAlternatives.length===0?e.leadingLabel&&E.jsx("span",{style:Lo,children:E.jsx("span",{style:ro,children:e.leadingLabel})}):e.inputAlternatives.map((a,i)=>E.jsxs("span",{style:e.rightAlignInput&&i===0?eg:i===0?Lo:Jp,children:[i===0&&e.leadingLabel?E.jsx("span",{style:ro,children:e.leadingLabel}):null,i===0&&e.indicator?Ht(e.indicator):null,wo(a,n,t,o),i<r?E.jsx("span",{children:o.alternative}):null,i===r&&e.trailingLabelAfterLastInput&&e.trailingLabel?E.jsx("span",{style:ro,children:e.trailingLabel}):null]},`${a.join("+")}-${i}`)),e.trailingLabel&&!e.trailingLabelAfterLastInput?E.jsx("span",{style:ro,children:e.trailingLabel}):null]})};xt.__docgenInfo={description:"",methods:[],displayName:"renderKeyToken"};Jr.__docgenInfo={description:"",methods:[],displayName:"renderPointerToken"};ea.__docgenInfo={description:"",methods:[],displayName:"renderDragTargetToken"};Ht.__docgenInfo={description:"",methods:[],displayName:"renderActionIndicatorToken"};Wl.__docgenInfo={description:"",methods:[],displayName:"renderAlertSeverityToken"};Yl.__docgenInfo={description:"",methods:[],displayName:"renderBackspaceToken"};Kl.__docgenInfo={description:"",methods:[],displayName:"renderHelpActionInput"};wo.__docgenInfo={description:"",methods:[],displayName:"renderHelpActionInputCombination"};Ql.__docgenInfo={description:"",methods:[],displayName:"renderHelpActionInputAlternatives"};Xl.__docgenInfo={description:"",methods:[],displayName:"renderStartAlignedTrigger"};const pg=()=>typeof navigator>"u"?void 0:navigator.language,gg=e=>e===Fe.COMPACT?e:Fe.STANDARD,fg=e=>typeof e=="string"||e.kind===ue.TEXT,qi=e=>typeof e!="string"&&e.kind===ue.ALERT,Ag=e=>{const n=e.findIndex(fg);if(n<=0)return e;const t=e.slice(0,n),o=t.filter(qi);return o.length===0?e:[...t.filter(r=>!qi(r)),e[n],...o,...e.slice(n+1)]},ao=(e,n,t=!1)=>{const o=typeof e=="string"?e:e.text;return E.jsx("p",{style:n===Fe.COMPACT?t?rg:zl:Hl,children:o},o)},_i=(e,n,t)=>{const o=e.level??yt.SECTION;return E.jsx("div",{"data-testid":"annotation-help-heading","data-level":o,style:t===Fe.COMPACT?{...xi[o],...Xp}:xi[o],children:e.text},`heading-${e.text}-${n}`)},na=(e,n,t,o,r,a,i=Hn.END)=>{const u=i===Hn.START?Xl(e,t,o,r):(e.inputAlternatives.length>0||e.indicator?Ql(e.indicator,e.inputAlternatives,t,o,r,a):null)??E.jsx("span",{style:Vo});return E.jsxs("div",{"data-testid":"annotation-help-action",style:Vl[a],children:[u,E.jsx("span",{style:lg[a],children:e.description})]},`${e.inputAlternatives.map(l=>l.join("+")).join("-")}-${e.leadingLabel??""}-${n}`)},Pi=(e,n,t,o,r,a)=>{const i=e.actions??[],s=a===Fe.COMPACT?ig[e.severity]:Zr[e.severity];return E.jsxs("div",{"data-testid":"annotation-help-alert","data-severity":e.severity,style:s,children:[E.jsxs("div",{style:Vl[a],children:[E.jsx("span",{style:a===Fe.COMPACT?Xr:Vo,children:Wl(e.severity)}),E.jsx("span",{style:sg,children:e.text})]}),i.map((u,l)=>na(u,l,t,o,r,a))]},`${e.severity}-${e.text}-${n}`)},$o=({items:e,layout:n,locale:t,platform:o,actionTriggerAlign:r=Hn.END})=>{const a=gg(n),i=t??pg(),s=Zm(i),u=Xm(o),l=yg(i),d=Ag(e);if(a===Fe.COMPACT){const m=d.map((y,p)=>typeof y=="string"||y.kind===ue.TEXT?ao(y,a,p===d.length-1):y.kind===ue.HEADING?_i(y,p,a):y.kind===ue.ALERT?Pi(y,p,s,u,l,a):na(y,p,s,u,l,a,r));return E.jsx("div",{"data-testid":"annotation-help-content",style:og(r),children:m})}const c=d.map((m,y)=>typeof m=="string"||m.kind===ue.TEXT?ao(m,a):m.kind===ue.HEADING?_i(m,y,a):m.kind===ue.ALERT?Pi(m,y,s,u,l,a):na(m,y,s,u,l,a,r));return E.jsx("div",{"data-testid":"annotation-help-content",style:jl,children:c})};$o.__docgenInfo={description:"",methods:[],displayName:"AnnotationInfoBoxHelpContent",props:{items:{required:!0,tsType:{name:"unknown"},description:""},layout:{required:!1,tsType:{name:"unknown[union]",raw:"(typeof ANNOTATION_INFO_BOX_HELP_LAYOUTS)[keyof typeof ANNOTATION_INFO_BOX_HELP_LAYOUTS]"},description:""},locale:{required:!1,tsType:{name:"string"},description:""},platform:{required:!1,tsType:{name:"KeyboardDisplayPlatform"},description:""},actionTriggerAlign:{required:!1,tsType:{name:"unknown[union]",raw:"(typeof ANNOTATION_INFO_BOX_HELP_ACTION_TRIGGER_ALIGNMENTS)[keyof typeof ANNOTATION_INFO_BOX_HELP_ACTION_TRIGGER_ALIGNMENTS]"},description:"",defaultValue:{value:'"end"',computed:!1}}}};const vg=({items:e,className:n,visualOptions:t})=>{const o=Je(t),r=o.subtitleTextClassName.split(/\s+/).filter(a=>a.length>0&&!a.startsWith("px-")).join(" ");return E.jsx("dl",{className:`m-0 flex flex-wrap items-start tabular-nums${n?` ${n}`:""}`,style:{columnGap:"1.35rem",rowGap:"0.5rem"},children:e.map((a,i)=>E.jsxs("div",{className:"grid max-w-full min-w-[5rem] flex-[0_1_auto] grid-rows-[auto,auto] content-start items-start gap-y-[0.1em] text-left",children:[E.jsx("dt",{className:r,style:o.subtitleTextStyle,children:a.label}),E.jsx("dd",{className:"m-0 leading-[1.25]",children:a.value})]},a.id??i))})};vg.__docgenInfo={description:"",methods:[],displayName:"AnnotationInfoBoxMetricGrid",props:{items:{required:!0,tsType:{name:"unknown"},description:""},className:{required:!1,tsType:{name:"string"},description:""},visualOptions:{required:!1,tsType:{name:"Partial",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Partial<AnnotationInfoBoxVisualOptions>"},description:""}}};const Tg=({children:e,className:n,style:t,visualOptions:o})=>{const r=Je(o);return E.jsx("div",{className:`${r.subtitleMetaTextClassName}${n?` ${n}`:""}`,style:{...r.subtitleMetaTextStyle,...t},children:e})};Tg.__docgenInfo={description:"",methods:[],displayName:"AnnotationInfoBoxMetaText",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""},visualOptions:{required:!1,tsType:{name:"Partial",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Partial<AnnotationInfoBoxVisualOptions>"},description:""}}};const bg=Object.freeze({entrySingular:"Messung",entryPlural:"Messungen",availableSuffix:"verfügbar",previousAriaLabel:"Vorherige Messung",nextAriaLabel:"Nächste Messung",counterSeparator:"von"}),Mi=(e,n)=>`${e} ${e===1?n.entrySingular:n.entryPlural} ${n.availableSuffix}`.trim(),kg=({totalEntries:e,currentIndex:n,instructionText:t,availabilityLabel:o,labels:r,onFlyToAll:a,onPrevious:i,onNext:s,visualOptions:u})=>{var p,A;const l=Je(u),d={...bg,...r};if(e<=0&&!t)return null;const c={fontSize:l.navigationLinkFontSize,border:"none",background:"transparent",padding:0,userSelect:"none"},m=((p=l.navigationControlLabels)==null?void 0:p.previous)??E.jsx(dt,{icon:Cc}),y=((A=l.navigationControlLabels)==null?void 0:A.next)??E.jsx(dt,{icon:Ec});return E.jsxs(E.Fragment,{children:[t?E.jsx("div",{className:`${l.navigationInstructionContainerClassName} ${l.mutedTextClassName}`,children:E.jsx("span",{children:t})}):null,e>0?E.jsx("div",{className:l.navigationAvailabilityContainerClassName,children:a?E.jsx("button",{type:"button",className:`${l.linkTextClassName} cursor-pointer`,onClick:a,style:{border:"none",background:"transparent",padding:0},children:o??Mi(e,d)}):E.jsx("span",{className:l.linkTextClassName,children:o??Mi(e,d)})}):null,e>0?E.jsxs("div",{className:l.navigationSummaryContainerClassName,children:[E.jsx("button",{type:"button",className:`renderAsLink cursor-pointer select-none ${l.linkTextClassName}`,onClick:i,"data-test-id":"switch-measurement-left",style:c,"aria-label":d.previousAriaLabel,children:m}),E.jsxs("span",{className:"mx-4",children:[n+1," ",d.counterSeparator," ",e]}),E.jsx("button",{type:"button",className:`renderAsLink cursor-pointer select-none ${l.linkTextClassName}`,onClick:s,"data-test-id":"switch-measurement-right",style:c,"aria-label":d.nextAriaLabel,children:y})]}):null]})};kg.__docgenInfo={description:"",methods:[],displayName:"AnnotationInfoBoxNavigation",props:{totalEntries:{required:!0,tsType:{name:"number"},description:""},currentIndex:{required:!0,tsType:{name:"number"},description:""},instructionText:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},availabilityLabel:{required:!1,tsType:{name:"ReactNode"},description:""},labels:{required:!1,tsType:{name:"Partial",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};const Wo=({children:e,className:n,style:t,visualOptions:o})=>{const r=Je(o);return E.jsx("div",{className:`${r.bodyContainerClassName} ${r.bodyTextClassName}${n?` ${n}`:""}`,style:{...r.bodyTextStyle,...t},children:e})};Wo.__docgenInfo={description:"",methods:[],displayName:"AnnotationInfoBoxTextContent",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""},visualOptions:{required:!1,tsType:{name:"Partial",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Partial<AnnotationInfoBoxVisualOptions>"},description:""}}};const Jn=e=>e.trim(),tn=Object.freeze({borderRadiusRem:"0.2143rem",shortLabelMaxLength:64,shortLabelWidthPaddingCh:.5,shortLabelMinWidthCh:2.5}),ht=e=>Jn(e).slice(0,tn.shortLabelMaxLength),Ng=e=>e.slice(0,tn.shortLabelMaxLength),Ig=({value:e,placeholder:n,onCommit:t,readOnly:o=!1,shortLabelValue:r,shortLabelPlaceholder:a,onShortLabelCommit:i,visualOptions:s})=>{const u=Je(s),[l,d]=g.useState(()=>Jn(e)),[c,m]=g.useState(()=>ht(r??"")),y=g.useRef(null),p=g.useRef(null),A=tn.shortLabelMaxLength+tn.shortLabelWidthPaddingCh,f=Math.min(Math.max(Jn(c||a||"").length+tn.shortLabelWidthPaddingCh,tn.shortLabelMinWidthCh),A);g.useEffect(()=>{d(Jn(e))},[e]),g.useEffect(()=>{m(ht(r??""))},[r]);const v=k=>{if(o){d(Jn(e));return}const O=Jn(k);d(O),t(O)},b=k=>{if(!i||o){m(ht(r??""));return}const O=ht(k);if(!O){const R=ht(r??"");m(R);return}m(O),i(O)},T=k=>{k.stopPropagation()},I=k=>{var O;k.key==="Enter"&&(k.preventDefault(),(O=y.current)==null||O.blur())},N=k=>{var O;k.key==="Enter"&&(k.preventDefault(),(O=p.current)==null||O.blur())},h={...u.titleTextStyle,flex:"0 1 auto",minWidth:"1ch",maxWidth:"100%",fieldSizing:"content"},S={...u.titleTextStyle,borderRadius:tn.borderRadiusRem,flex:"0 1 auto",width:`${f}ch`,minWidth:`${tn.shortLabelMinWidthCh}ch`,maxWidth:`min(${A}ch, 100%)`,fieldSizing:"content"};return E.jsxs("div",{className:"inline-flex min-w-0 max-w-full flex-1 items-center",style:{columnGap:"0.35em"},onMouseDown:T,onClick:T,children:[E.jsx("input",{ref:y,type:"text",value:l,placeholder:n,readOnly:o,"aria-readonly":o,className:u.titleInputClassName,style:h,onMouseDown:T,onClick:T,onChange:k=>d(k.target.value),onBlur:k=>v(k.target.value),onKeyDown:I}),i?E.jsx("input",{ref:p,type:"text",value:c,placeholder:a,readOnly:o,"aria-readonly":o,maxLength:tn.shortLabelMaxLength,className:u.shortLabelInputClassName,style:S,onMouseDown:T,onClick:T,onChange:k=>m(Ng(k.target.value)),onBlur:k=>b(k.target.value),onKeyDown:N}):null]})};Ig.__docgenInfo={description:"",methods:[],displayName:"AnnotationInfoBoxTitleInput",props:{value:{required:!0,tsType:{name:"string"},description:""},placeholder:{required:!0,tsType:{name:"string"},description:""},onCommit:{required:!0,tsType:{name:"signature",type:"function",raw:"(nextValue: string) => void",signature:{arguments:[{type:{name:"string"},name:"nextValue"}],return:{name:"void"}}},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},shortLabelValue:{required:!1,tsType:{name:"string"},description:""},shortLabelPlaceholder:{required:!1,tsType:{name:"string"},description:""},onShortLabelCommit:{required:!1,tsType:{name:"signature",type:"function",raw:"(nextValue: string) => void",signature:{arguments:[{type:{name:"string"},name:"nextValue"}],return:{name:"void"}}},description:""},visualOptions:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};const hg={toolButtonWidthPx:48},Sg={wrapper:"w-fit max-w-full flex items-start gap-2 overflow-visible",toolButtonBase:"flex h-8 w-12 min-w-12 items-center justify-center rounded-[10px] bg-white px-2 text-gray-700 button-shadow transition-colors hover:text-gray-900",toolButtonActive:"text-[#1677ff]",toolButtonInactive:"",toolButtonDisabled:"cursor-not-allowed opacity-45 hover:text-gray-700",toolButtonBackdrop:"pointer-events-none absolute inset-0 z-0 overflow-hidden rounded-[10px]",toolGroup:"relative flex min-w-12 items-center overflow-visible",toolButtonShell:"relative overflow-visible",toolButtonIcon:"inline-flex items-center justify-center text-base leading-none",toolButtonBadge:"absolute right-0 top-0 z-10 inline-flex h-5 min-w-5 translate-x-1/3 -translate-y-1/3 items-center justify-center rounded-full bg-[#4b5563] px-1 text-[12px] font-medium leading-none text-white shadow-sm",separator:"inline-block h-[18px] w-px bg-gray-300"},Zl=({activeToolId:e,tools:n,onToolSelect:t,classNames:o,metrics:r,tooltipPlacement:a="top",getTooltipPopupContainer:i,renderToolButtonBackdrop:s,showToolTypeIndicators:u=!1})=>{const l={...Sg,...o},d={...hg,...r};return E.jsx("div",{className:l.wrapper,onClick:c=>c.stopPropagation(),children:n.map(c=>{const m=c.id===e,y=c.annotationCount??0,p=c.tooltipContent??c.tooltip,A=c.ariaLabel??c.tooltip,f=s==null?void 0:s(c);return E.jsxs("div",{className:l.toolGroup,children:[E.jsxs("div",{className:l.toolButtonShell,style:{width:d.toolButtonWidthPx},children:[u&&y>0?E.jsx("span",{className:l.toolButtonBadge,children:y}):null,E.jsx(Ds,{title:p,placement:a,getPopupContainer:i,children:E.jsxs("button",{type:"button",onClick:()=>t(c.id),"aria-pressed":m,"aria-label":A,disabled:c.disabled,className:["relative z-[1] overflow-hidden",l.toolButtonBase,m?l.toolButtonActive:l.toolButtonInactive,c.disabled?l.toolButtonDisabled:""].join(" "),style:{width:d.toolButtonWidthPx},children:[f?E.jsx("span",{className:l.toolButtonBackdrop,"aria-hidden":"true",children:f}):null,E.jsx("span",{className:["relative z-[1]",l.toolButtonIcon].join(" "),children:c.icon})]})})]}),c.separatorAfter?E.jsx("span",{className:l.separator,"aria-hidden":"true"}):null]},c.id)})})};Zl.__docgenInfo={description:"",methods:[],displayName:"AnnotationsToolbar",props:{activeToolId:{required:!0,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},tools:{required:!0,tsType:{name:"unknown"},description:""},onToolSelect:{required:!0,tsType:{name:"signature",type:"function",raw:"(toolId: string) => void",signature:{arguments:[{type:{name:"string"},name:"toolId"}],return:{name:"void"}}},description:""},classNames:{required:!1,tsType:{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"tooltip",value:{name:"string",required:!0}},{key:"tooltipContent",value:{name:"ReactNode",required:!1}},{key:"icon",value:{name:"ReactNode",required:!1}},{key:"annotationCount",value:{name:"number",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"separatorAfter",value:{name:"boolean",required:!1}},{key:"ariaLabel",value:{name:"string",required:!1}}]}},name:"tool"}],return:{name:"ReactNode"}}},description:""},showToolTypeIndicators:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const ve={LABEL:"label",VISUALIZER:"visualizer"},ta=e=>`[${e}="true"]`,Di="data-annotation-label-overlay-root",Bi="data-annotation-visualizer-overlay-root",Jl="data-annotation-visualizer-overlay-container",Cg=ta(Jl),Eg=Object.freeze([ve.VISUALIZER,ve.LABEL]),Og=Object.freeze({[ve.LABEL]:{rootAttribute:Di,containerAttribute:$c,rootSelector:ta(Di),containerSelector:Wc},[ve.VISUALIZER]:{rootAttribute:Bi,containerAttribute:Jl,rootSelector:ta(Bi),containerSelector:Cg}}),eu=e=>Og[e],nu=(e,n=ve.LABEL)=>{var i,s;const{rootSelector:t,containerSelector:o}=eu(n);let r=e.getOverlayContainer(),a=r;for(;r;){if(r.matches(o))return r;const u=(i=r.querySelector)==null?void 0:i.call(r,o);if(u instanceof HTMLElement)return u;if(r.matches(t))return r;const l=(s=r.querySelector)==null?void 0:s.call(r,t);if(l instanceof HTMLElement)return l;a=r,r=r.parentElement}return a},Lg={position:"absolute",inset:0,overflow:"hidden",pointerEvents:"none",isolation:"isolate"},Rg={position:"absolute",inset:0,overflow:"hidden",pointerEvents:"none"},wg=Object.freeze({[ve.VISUALIZER]:100,[ve.LABEL]:110}),tu=({groups:e=Eg})=>E.jsx(E.Fragment,{children:e.map(n=>{const{rootAttribute:t,containerAttribute:o}=eu(n);return E.jsx("div",{[t]:"true",style:{...Lg,zIndex:wg[n]},children:E.jsx("div",{[o]:"true",style:Rg})},n)})});tu.__docgenInfo={description:"",methods:[],displayName:"AnnotationOverlayRoots",props:{groups:{required:!1,tsType:{name:"unknown"},description:"",defaultValue:{value:`Object.freeze([
  ANNOTATION_OVERLAY_GROUP.VISUALIZER,
  ANNOTATION_OVERLAY_GROUP.LABEL,
] as const satisfies readonly AnnotationOverlayGroup[])`,computed:!0}}}};var ou={exports:{}},ru={};/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zt=g;function xg(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var qg=typeof Object.is=="function"?Object.is:xg,_g=Zt.useSyncExternalStore,Pg=Zt.useRef,Mg=Zt.useEffect,Dg=Zt.useMemo,Bg=Zt.useDebugValue;ru.useSyncExternalStoreWithSelector=function(e,n,t,o,r){var a=Pg(null);if(a.current===null){var i={hasValue:!1,value:null};a.current=i}else i=a.current;a=Dg(function(){function u(y){if(!l){if(l=!0,d=y,y=o(y),r!==void 0&&i.hasValue){var p=i.value;if(r(p,y))return c=p}return c=y}if(p=c,qg(d,y))return p;var A=o(y);return r!==void 0&&r(p,A)?p:(d=y,c=A)}var l=!1,d,c,m=t===void 0?null:t;return[function(){return u(n())},m===null?void 0:function(){return u(m())}]},[n,t,o,r]);var s=_g(e,a[0],a[1]);return Mg(function(){i.hasValue=!0,i.value=s},[s]),Bg(s),s};ou.exports=ru;var Fg=ou.exports,Re="default"in ei?ic:ei,Fi=Symbol.for("react-redux-context"),Gi=typeof globalThis<"u"?globalThis:{};function Gg(){if(!Re.createContext)return{};const e=Gi[Fi]??(Gi[Fi]=new Map);let n=e.get(Re.createContext);return n||(n=Re.createContext(null),e.set(Re.createContext,n)),n}var bn=Gg(),jg=()=>{throw new Error("uSES not initialized!")};function Ea(e=bn){return function(){return Re.useContext(e)}}var au=Ea(),iu=jg,Hg=e=>{iu=e},Ug=(e,n)=>e===n;function zg(e=bn){const n=e===bn?au:Ea(e),t=(o,r={})=>{const{equalityFn:a=Ug,devModeChecks:i={}}=typeof r=="function"?{equalityFn:r}:r,{store:s,subscription:u,getServerState:l,stabilityCheck:d,identityFunctionCheck:c}=n();Re.useRef(!0);const m=Re.useCallback({[o.name](p){return o(p)}}[o.name],[o,d,i.stabilityCheck]),y=iu(u.addNestedSub,s.getState,l||s.getState,m,a);return Re.useDebugValue(y),y};return Object.assign(t,{withTypes:()=>t}),t}function Vg(e){e()}function $g(){let e=null,n=null;return{clear(){e=null,n=null},notify(){Vg(()=>{let t=e;for(;t;)t.callback(),t=t.next})},get(){const t=[];let o=e;for(;o;)t.push(o),o=o.next;return t},subscribe(t){let o=!0;const r=n={callback:t,next:null,prev:n};return r.prev?r.prev.next=r:e=r,function(){!o||e===null||(o=!1,r.next?r.next.prev=r.prev:n=r.prev,r.prev?r.prev.next=r.next:e=r.next)}}}}var ji={notify(){},get:()=>[]};function Wg(e,n){let t,o=ji,r=0,a=!1;function i(A){d();const f=o.subscribe(A);let v=!1;return()=>{v||(v=!0,f(),c())}}function s(){o.notify()}function u(){p.onStateChange&&p.onStateChange()}function l(){return a}function d(){r++,t||(t=e.subscribe(u),o=$g())}function c(){r--,t&&r===0&&(t(),t=void 0,o.clear(),o=ji)}function m(){a||(a=!0,d())}function y(){a&&(a=!1,c())}const p={addNestedSub:i,notifyNestedSubs:s,handleChangeWrapper:u,isSubscribed:l,trySubscribe:m,tryUnsubscribe:y,getListeners:()=>o};return p}var Yg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Kg=typeof navigator<"u"&&navigator.product==="ReactNative",Qg=Yg||Kg?Re.useLayoutEffect:Re.useEffect;function Xg({store:e,context:n,children:t,serverState:o,stabilityCheck:r="once",identityFunctionCheck:a="once"}){const i=Re.useMemo(()=>{const l=Wg(e);return{store:e,subscription:l,getServerState:o?()=>o:void 0,stabilityCheck:r,identityFunctionCheck:a}},[e,o,r,a]),s=Re.useMemo(()=>e.getState(),[e]);Qg(()=>{const{subscription:l}=i;return l.onStateChange=l.notifyNestedSubs,l.trySubscribe(),s!==e.getState()&&l.notifyNestedSubs(),()=>{l.tryUnsubscribe(),l.onStateChange=void 0}},[i,s]);const u=n||bn;return Re.createElement(u.Provider,{value:i},t)}var Zg=Xg;function su(e=bn){const n=e===bn?au:Ea(e),t=()=>{const{store:o}=n();return o};return Object.assign(t,{withTypes:()=>t}),t}var Jg=su();function ef(e=bn){const n=e===bn?Jg:su(e),t=()=>n().dispatch;return Object.assign(t,{withTypes:()=>t}),t}Hg(Fg.useSyncExternalStoreWithSelector);const pt={AUTHORING:"authoring",EXTERNAL:"external"},Ut={DEFAULT:"default",CUSTOM:"custom"},Tr={RELATIVE:"relative",ABSOLUTE:"absolute"},zt=(e,n)=>n?e.find(t=>t.id===n)??null:null,Oa=e=>new Set(e.filter(n=>n.annotationRole===pt.EXTERNAL||n.readOnly||n.locked).flatMap(n=>n.nodeIds)),nf=e=>e===Tr.ABSOLUTE?Tr.RELATIVE:Tr.ABSOLUTE;var ce=[];for(var br=0;br<256;++br)ce.push((br+256).toString(16).slice(1));function tf(e,n=0){return(ce[e[n+0]]+ce[e[n+1]]+ce[e[n+2]]+ce[e[n+3]]+"-"+ce[e[n+4]]+ce[e[n+5]]+"-"+ce[e[n+6]]+ce[e[n+7]]+"-"+ce[e[n+8]]+ce[e[n+9]]+"-"+ce[e[n+10]]+ce[e[n+11]]+ce[e[n+12]]+ce[e[n+13]]+ce[e[n+14]]+ce[e[n+15]]).toLowerCase()}var io,of=new Uint8Array(16);function rf(){if(!io&&(io=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!io))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return io(of)}var af=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto);const Hi={randomUUID:af};function sf(e,n,t){if(Hi.randomUUID&&!e)return Hi.randomUUID();e=e||{};var o=e.random||(e.rng||rf)();return o[6]=o[6]&15|64,o[8]=o[8]&63|128,tf(o)}const lu=()=>sf(),uu=e=>new Map(e.flatMap(n=>n.nodeIds.map(t=>[t,n.id]))),vo=(e,n)=>uu(e).get(n)??null,lf=(e,n)=>{var t;return((t=e.find(o=>o.nodeIds.includes(n)))==null?void 0:t.nodeIds)??[n]},kn=({nodes:e,nodeLinks:n})=>{const t=new Set(e.map(i=>i.id)),o=n.map(i=>({...i,nodeIds:Array.from(new Set(i.nodeIds.filter(s=>t.has(s))))})).filter(i=>i.nodeIds.length>0),r=new Set(o.flatMap(i=>i.nodeIds)),a=e.filter(i=>!r.has(i.id)).map(i=>({id:i.id,nodeIds:[i.id]}));return[...o,...a]},uf=.1,df=(e,n)=>Math.hypot(Gm(e,n),n.altitude-e.altitude),du=e=>typeof e=="string"&&e.trim().length>0?e.trim():null,cu=({nodes:e,nodeLinks:n,nodeId:t,movedNodeIds:o,linkToNodeId:r})=>{const a=e.find(p=>p.id===t)??null,i=Array.from(new Set(o.filter(Boolean)));if(!a||i.length===0)return[...n];const s=new Set(i),u=n.find(p=>p.nodeIds.includes(t))??null,l=du(r),d=l&&!s.has(l)?n.find(p=>p.nodeIds.includes(l))??null:null;return d!==null&&!d.nodeIds.some(p=>s.has(p))?kn({nodes:e,nodeLinks:n.map(p=>p.id===d.id?{...p,nodeIds:Array.from(new Set([...p.nodeIds,...i]))}:{...p,nodeIds:p.nodeIds.filter(A=>!s.has(A))})}):!u||i.length===u.nodeIds.length?[...n]:e.filter(p=>u.nodeIds.includes(p.id)&&!s.has(p.id)).some(p=>df(p.coordinate,a.coordinate)>uf)?kn({nodes:e,nodeLinks:n.map(p=>p.id===u.id?{...p,nodeIds:p.nodeIds.filter(A=>!s.has(A))}:{...p})}):[...n]},at=e=>e.reduce((n,t)=>{const o=t.match(/(\d+)$/),r=o?Number(o[1]):Number.NaN;return Number.isFinite(r)?Math.max(n,r):n},0),mu=({nodeIds:e,closed:n,previousEdgeNumericSuffix:t})=>{const o=e.slice(0,-1).map((r,a)=>({startNodeId:r,endNodeId:e[a+1]}));return n&&e.length>=3&&o.push({startNodeId:e[e.length-1],endNodeId:e[0]}),o.map((r,a)=>({id:`edge-${t+a+1}`,...r}))},cf=({toolType:e,coordinates:n,options:t,linkedNodeGroupIds:o,measurementSequenceRef:r,nodeSequenceRef:a,edgeSequenceRef:i})=>{r.current+=1;const s=`${e}-${r.current}`,u=n.map(m=>(a.current+=1,{id:`node-${a.current}`,coordinate:m})),l=u.map((m,y)=>({id:du(o==null?void 0:o[y])??m.id,nodeIds:[m.id]})),d=mu({nodeIds:u.map(m=>m.id),closed:!!(t!=null&&t.closed),previousEdgeNumericSuffix:i.current});return i.current+=d.length,{annotationEntry:{id:s,uuid:lu(),toolType:e,...t,nodeIds:u.map(m=>m.id),edgeIds:d.map(m=>m.id)},nodes:u,linkedNodeGroups:l,edges:d}},xo={INTERACTION:"interaction",MEASUREMENT:"measurement"},oe={SESSION:"session",POINT_QUERY:"pointQuery",ADD_ANNOTATION:"addAnnotation",AUTHORING_VISUALS:"authoringVisuals",KEYBOARD:"keyboard",VISUAL_MODELS:"visualModels",INFO_BOX:"infoBox"},Ui=new Set,mf=[],yf=(e,n)=>{const t=`${e}:${n}`;Ui.has(t)||(Ui.add(t),console.warn(`[annotations-runtime] Plugin "${e}" is missing capability implementation "${n}". Using a no-op fallback at registry build time.`))},pf=(e,n)=>{const t=e.descriptor.order-n.descriptor.order;return t!==0?t:e.id.localeCompare(n.id)},gf=e=>{const n=new Map;return e.forEach(t=>{if(n.get(t.id))throw new Error(`Duplicate annotation tool plugin registration for "${t.id}".`);n.set(t.id,t)}),n},ff=e=>e.reduce((n,t)=>{if(!t.annotationType)return n;const o=n.get(t.annotationType)??[];return n.set(t.annotationType,[...o,t]),n},new Map),Af=e=>{const n=new Map;e.forEach(t=>{var a;const o=((a=t.descriptor.shortcutKey)==null?void 0:a.trim().toLowerCase())??null;if(!o)return;const r=n.get(o);if(r&&r!==t.id)throw new Error(`Duplicate annotation tool shortcut key "${t.descriptor.shortcutKey}" for "${r}" and "${t.id}".`);n.set(o,t.id)})},vf=(e,n)=>!!(n===oe.SESSION&&e.session||n===oe.POINT_QUERY&&e.pointQuery||n===oe.ADD_ANNOTATION&&e.addAnnotation||n===oe.AUTHORING_VISUALS&&e.authoringVisuals||n===oe.KEYBOARD&&e.keyboard||n===oe.VISUAL_MODELS&&e.visualModels||n===oe.INFO_BOX&&e.infoBox||n!==oe.SESSION&&n!==oe.POINT_QUERY&&n!==oe.ADD_ANNOTATION&&n!==oe.AUTHORING_VISUALS&&n!==oe.KEYBOARD&&n!==oe.VISUAL_MODELS&&n!==oe.INFO_BOX),Tf=e=>{if(e.descriptor.id!==e.id)throw new Error(`Plugin "${e.id}" descriptor id "${e.descriptor.id}" must match plugin id.`);if(e.kind==="measurement"&&!e.visualModels)throw new Error(`Measurement plugin "${e.id}" must implement visualModels.build(...).`);if(e.kind==="measurement"&&!e.annotationType)throw new Error(`Measurement plugin "${e.id}" must declare annotationType.`);let n={...e};return(e.capabilities??[]).forEach(t=>{if(!vf(n,t)){if(yf(e.id,t),t===oe.SESSION){n={...n,session:{createSession:()=>({toolType:e.id,requestStart:()=>{},requestFinish:()=>!1,discardDraft:()=>{}})}};return}if(t===oe.POINT_QUERY){n={...n,pointQuery:{onPointCreated:()=>{}}};return}if(t===oe.ADD_ANNOTATION){n={...n,addAnnotation:{resolveOptions:()=>{}}};return}if(t===oe.AUTHORING_VISUALS){n={...n,authoringVisuals:{createController:()=>null}};return}if(t===oe.KEYBOARD){n={...n,keyboard:{onKeyDown:()=>!1}};return}if(t===oe.VISUAL_MODELS){n={...n,visualModels:{build:()=>null}};return}t===oe.INFO_BOX&&(n={...n,infoBox:{getSlots:()=>null}})}}),n},bf=e=>{const t=[...e.map(Tf)].sort(pf);Af(t);const o=gf(t),r=ff(t);return{plugins:t,orderedDescriptors:t.map(a=>a.descriptor),byId:o,getPlugin:a=>o.get(a),assertPlugin:a=>{const i=o.get(a);if(!i)throw new Error(`Missing annotation tool plugin for tool id "${a}".`);return i},getPluginsByAnnotationType:a=>r.get(a)??mf}},yu=e=>{var t;const n=e.find(o=>o.id===In&&o.kind===xo.INTERACTION);return n?n.id:((t=e.find(o=>o.kind===xo.INTERACTION))==null?void 0:t.id)??null},kf=e=>{var n;return((n=e.getPlugin(In))==null?void 0:n.id)??yu(e.plugins)},pu=e=>!!e.readOnly,gu=e=>e.annotationRole??(e.externalCollection?pt.EXTERNAL:pt.AUTHORING),Yo=e=>e.annotationEntries.filter(n=>gu(n)===pt.AUTHORING),Nf=(e,n={})=>{if(n.roles===void 0)return e.annotationEntries;const t=new Set(n.roles);return e.annotationEntries.filter(o=>t.has(gu(o)))},If=e=>Yo({annotationEntries:e}).reduce((n,t)=>(n.set(t.toolType,(n.get(t.toolType)??0)+1),n),new Map),hf=({activeToolType:e,registry:n,defaultToolId:t=In})=>{if(e){const o=n.getPlugin(e);if(o)return o}return n.getPlugin(t)??null},{AREA_GROUND:Sf,AREA_PLANAR:Cf,AREA_VERTICAL:Ef,DISTANCE:Of,LABEL:Lf,POINT:Rf,POLYLINE:wf}=q,xf=new Set([Rf,Of,wf,Sf,Cf,Ef,Lf]),Ko=e=>xf.has(e),qf=e=>{if(e.shortLabelSource===Ut.CUSTOM)return null;const n=e.shortLabelCounter;return typeof n=="number"&&Number.isFinite(n)&&n>0?Math.floor(n):null},fu=e=>{let n=1;for(;e!=null&&e.has(n);)n+=1;return n},Au=e=>{var t;const n={};for(const o of e){if(!Ko(o.toolType))continue;const r=qf(o);r!==null&&(n[t=o.toolType]??(n[t]=new Set)).add(r)}return n},Qo=e=>{const n=Au(e),t={};for(const[o,r]of Object.entries(n))t[o]=fu(r);return t},_f=({annotationEntries:e,toolType:n})=>Ko(n)?Qo(e)[n]??1:1,vu=e=>{const n=Au(e);return e.map(t=>{var a;if(!Ko(t.toolType)||(a=t.shortLabel)!=null&&a.trim())return t;const o=n[t.toolType]??new Set;n[t.toolType]=o;const r=fu(o);return o.add(r),{...t,shortLabel:Ll(t.toolType,r),shortLabelSource:Ut.DEFAULT,shortLabelCounter:r}})},Pf=e=>e.uuid?e:{...e,uuid:lu()},{AREA_GROUND:Mf,AREA_PLANAR:Df,AREA_VERTICAL:Bf,LABEL:Ff,POINT:Gf}=q,jf=1,Hf=new Set([Mf,Df,Bf]),Uf=new Set([Gf,Ff]),oa=e=>{if(e!==void 0)return e===null||typeof e=="string"||typeof e=="number"||typeof e=="boolean"?e:Array.isArray(e)?e.map(n=>oa(n)).filter(n=>n!==void 0):typeof e=="object"?Object.fromEntries(Object.entries(e).flatMap(([n,t])=>{const o=oa(t);return o===void 0?[]:[[n,o]]})):String(e)},zf=e=>oa(e)??{},kr=({longitude:e,latitude:n,altitude:t})=>[e,n,t??0],Vf=({toolType:e,coordinates:n})=>{if(n.length===0)return null;if(Hf.has(e)&&n.length>=3){const t=n.map(kr);return{type:"Polygon",coordinates:[[...t,t[0]]]}}return!Uf.has(e)&&n.length>=2?{type:"LineString",coordinates:n.map(kr)}:{type:"Point",coordinates:kr(n[0])}},zi=e=>{const n=(e??"").trim().toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"");return n.length>0?n:"annotation"},$f=e=>{var n,t;return{kind:e.toolType,name:((n=e.displayName)==null?void 0:n.trim())||((t=e.shortLabel)==null?void 0:t.trim())||e.id}},Tu=({annotation:e,coordinates:n})=>{const t=Vf({toolType:e.toolType,coordinates:n});return t?{type:"FeatureCollection",features:[{type:"Feature",id:e.id,geometry:t,properties:{exportVersion:jf,annotationId:e.id,annotationKind:e.toolType,annotation:zf(e),nodes:n.map((r,a)=>({order:a,coordinate:r}))}}]}:null},Wf=({annotations:e})=>{const n=e.flatMap(({annotation:t,coordinates:o})=>{const r=Tu({annotation:t,coordinates:o});return(r==null?void 0:r.features)??[]});return n.length===0?null:{type:"FeatureCollection",features:n}},Vi=(e,n)=>{if(!n||typeof window>"u"||typeof document>"u")return;const t=new Blob([JSON.stringify(n,null,2)],{type:"application/geo+json;charset=utf-8"}),o=window.URL.createObjectURL(t),r=document.createElement("a");r.href=o,r.download=e,document.body.appendChild(r),r.click(),document.body.removeChild(r),window.setTimeout(()=>{window.URL.revokeObjectURL(o)},0)},Vt=e=>{const{nodeIds:n,edgeIds:t,...o}=e;return{...o,nodeIds:[...n],edgeIds:[...t]}},La=e=>{const n=Vt(e);return delete n.updatedAt,n},Un=e=>({...e,coordinate:{...e.coordinate}}),zn=e=>({...e}),Vn=e=>({...e,nodeIds:[...e.nodeIds]}),gt="annotations-runtime-persistence",Xo=1,bu=new Set([1,2]),ku="carma-3d-annotations-geojson",Yf=1,Kf="geoportal-cesium-annotations",Qf=new Set([1,2]),Nu="carma-3d-annotation-runtime-feature",Iu=1,xn=e=>typeof e=="object"&&e!==null,Xf=e=>{if(!xn(e)||!xn(e.properties))return null;const{carmaConf:n}=e.properties;if(!xn(n)||!xn(n.annotationRuntime))return null;const t=n.annotationRuntime;return t.formatId!==Nu||t.formatVersion!==Iu||!xn(t.annotation)||!Array.isArray(t.nodes)||!Array.isArray(t.linkedNodeGroups)||!Array.isArray(t.edges)?null:{annotation:La(t.annotation),nodes:t.nodes.map(o=>Un(o)),linkedNodeGroups:t.linkedNodeGroups.map(o=>Vn(o)),edges:t.edges.map(o=>zn(o))}},Zf=e=>{if(!xn(e)||e.type!=="FeatureCollection")return null;const n=e.features;if(!Array.isArray(n))return null;const t=[],o=new Map,r=new Map,a=new Map;for(const s of n){const u=Xf(s);if(u){t.push(u.annotation);for(const l of u.nodes)o.set(l.id,l);for(const l of u.linkedNodeGroups)r.set(l.id,l);for(const l of u.edges)a.set(l.id,l)}}if(t.length===0)return null;const i=vu(t);return{formatId:gt,version:Xo,tables:{annotationEntries:i.map(Vt),nodes:[...o.values()].map(Un),linkedNodeGroups:kn({nodes:[...o.values()],nodeLinks:[...r.values()].map(Vn)}),edges:[...a.values()].map(zn)},settings:{lastActiveToolType:null,elevationReferenceAnnotationId:null,nextShortLabelCounterByToolType:Qo(i)}}},hu=e=>{const n=new Map(e.tables.nodes.map(s=>[s.id,s])),t=new Map(e.tables.annotationEntries.map(s=>[s.id,s])),o=new Map(e.tables.edges.map(s=>[s.id,s])),r=new Map;for(const s of e.tables.linkedNodeGroups)for(const u of s.nodeIds){const l=r.get(u)??[];l.push(s),r.set(u,l)}const a=Wf({annotations:e.tables.annotationEntries.map(s=>({annotation:s,coordinates:s.nodeIds.flatMap(u=>{var d;const l=(d=n.get(u))==null?void 0:d.coordinate;return l?[l]:[]})}))});return{type:"FeatureCollection",features:((a==null?void 0:a.features)??[]).map(s=>{var A;const u=typeof s.id=="string"?s.id:typeof((A=s.properties)==null?void 0:A.annotationId)=="string"?s.properties.annotationId:null,l=u?t.get(u):null;if(!l)return s;const d=new Set(l.nodeIds),c=new Set,m=l.nodeIds.flatMap(f=>(r.get(f)??[]).flatMap(v=>c.has(v.id)?[]:(c.add(v.id),[Vn(v)]))),y=s.properties??{},p=xn(y.carmaConf)?y.carmaConf:{};return{...s,properties:{...y,carmaConf:{...p,annotationRuntime:{formatId:Nu,formatVersion:Iu,annotation:Vt(l),nodes:l.nodeIds.flatMap(f=>{const v=n.get(f);return v?[Un(v)]:[]}),linkedNodeGroups:m,edges:l.edgeIds.flatMap(f=>{const v=o.get(f);return!v||!d.has(v.startNodeId)||!d.has(v.endNodeId)?[]:[zn(v)]})}}}}}),metadata:{carmaConf:{formatId:ku,formatVersion:Yf,source:Kf,annotationsRuntimePersistence:{formatId:gt,version:Xo,tables:{annotationEntries:e.tables.annotationEntries.map(Vt),nodes:e.tables.nodes.map(Un),linkedNodeGroups:e.tables.linkedNodeGroups.map(Vn),edges:e.tables.edges.map(zn)},settings:{...e.settings,nextShortLabelCounterByToolType:{...e.settings.nextShortLabelCounterByToolType}}}}}}},Jf=e=>({byUuid:new Map(e.filter(n=>n.uuid).map(n=>[n.uuid,n])),byId:new Map(e.map(n=>[n.id,n]))}),eA=(e,n,t=e.id)=>{const o=n.byId.get(t);return e.uuid&&n.byUuid.get(e.uuid)||(o&&(!e.uuid||!o.uuid)?o:void 0)},Ra=e=>{var t,o,r;const n=e;return(n==null?void 0:n.formatId)!==gt||typeof n.version!="number"||!bu.has(n.version)||!n.tables||!Array.isArray(n.tables.annotationEntries)||!Array.isArray(n.tables.nodes)||!Array.isArray(n.tables.linkedNodeGroups)||!Array.isArray(n.tables.edges)?null:{formatId:gt,version:Xo,tables:{annotationEntries:n.tables.annotationEntries.map(a=>La(a)),nodes:n.tables.nodes.map(a=>Un(a)),linkedNodeGroups:n.tables.linkedNodeGroups.map(a=>Vn(a)),edges:n.tables.edges.map(a=>zn(a))},settings:{lastActiveToolType:typeof((t=n.settings)==null?void 0:t.lastActiveToolType)=="string"?n.settings.lastActiveToolType:null,elevationReferenceAnnotationId:typeof((o=n.settings)==null?void 0:o.elevationReferenceAnnotationId)=="string"?n.settings.elevationReferenceAnnotationId:null,nextShortLabelCounterByToolType:(r=n.settings)!=null&&r.nextShortLabelCounterByToolType&&typeof n.settings.nextShortLabelCounterByToolType=="object"?{...n.settings.nextShortLabelCounterByToolType}:{}}}},Su=e=>{var r;const n=e;if((n==null?void 0:n.type)!=="FeatureCollection")return null;const t=(r=n.metadata)==null?void 0:r.carmaConf;return((t==null?void 0:t.formatId)===ku&&typeof t.formatVersion=="number"&&Qf.has(t.formatVersion)?Ra(t.annotationsRuntimePersistence):null)??Zf(e)},wa=e=>{const n=Yo(e).map(Vt),t=new Set(n.flatMap(i=>i.nodeIds)),o=new Set(n.flatMap(i=>i.edgeIds)),r=e.nodes.filter(i=>t.has(i.id)).map(Un),a=kn({nodes:r,nodeLinks:e.linkedNodeGroups.map(Vn).filter(i=>i.nodeIds.some(s=>t.has(s)))});return{formatId:gt,version:Xo,tables:{annotationEntries:n,nodes:r,linkedNodeGroups:a,edges:e.edges.filter(i=>o.has(i.id)).map(zn)},settings:{lastActiveToolType:e.annotationToolType,elevationReferenceAnnotationId:e.settingsState.elevationReferenceAnnotationId,nextShortLabelCounterByToolType:Qo(n)}}},nA=({initialToolType:e,initialPointTemporaryMode:n,initialPersistenceState:t,isToolTypeAvailable:o})=>{const r=(t==null?void 0:t.formatId)===gt&&bu.has(t.version)?t:null,a=r==null?void 0:r.tables,i=vu((a==null?void 0:a.annotationEntries.map(c=>Pf(La(c))))??[]),s=(r==null?void 0:r.tables.nodes.map(Un))??[],u=kn({nodes:s,nodeLinks:(r==null?void 0:r.tables.linkedNodeGroups.map(Vn))??[]}),l=Qo(i);return{annotationToolType:(typeof(r==null?void 0:r.settings.lastActiveToolType)=="string"&&((o==null?void 0:o(r.settings.lastActiveToolType))??!0)?r.settings.lastActiveToolType:null)??e,selectionState:{selectedAnnotationIds:[],previousSelectedAnnotationId:null},annotationEntries:i,nodes:s,linkedNodeGroups:u,edges:(a==null?void 0:a.edges.map(zn))??[],infoBoxState:{activeAnnotationId:null},settingsState:{pointTemporaryMode:n,elevationReferenceAnnotationId:(r==null?void 0:r.settings.elevationReferenceAnnotationId)??null,nextShortLabelCounterByToolType:l}}},tA=e=>{try{const n=localStorage.getItem(e);if(!n)return null;const t=JSON.parse(n);return Su(t)??Ra(t)}catch(n){console.warn("Failed to load annotations runtime state from localStorage:",n)}return null},oA=(e,n)=>{try{localStorage.setItem(e,JSON.stringify(hu(n)))}catch(t){console.warn("Failed to save annotations runtime state to localStorage:",t)}},Zo=e=>e.selectionState.selectedAnnotationIds[e.selectionState.selectedAnnotationIds.length-1]??null,rA=e=>{const n=new Set(e.selectionState.selectedAnnotationIds);return e.annotationEntries.filter(t=>n.has(t.id)&&!t.locked&&!t.readOnly).map(t=>t.id)},Cu=e=>e.annotationEntries.map(n=>n.id),aA=(e,n,t)=>{var i;if(e.length===0)return null;const o=n?e.findIndex(s=>s.id===n):-1,r=t>0?0:e.length-1,a=o<0?r:(o+t+e.length)%e.length;return((i=e[a])==null?void 0:i.id)??null},Eu=({nodeId:e,nodes:n,linkedNodeGroups:t,annotationEntries:o,selectedAnnotationIds:r=[],preferredMovedNodeIds:a})=>{const i=n.find(p=>p.id===e)??null;if(!i)return{targetNode:null,movedNodeIds:[]};const s=lf(t,e),u=Array.from(new Set((a??[]).filter(p=>s.includes(p)))),l=new Set(r.filter(Boolean)),d=new Set(o.filter(p=>l.has(p.id)).flatMap(p=>p.nodeIds)),c=s.filter(p=>d.has(p)),m=u.length>0?u:c.length>0?c:[...s],y=Oa(o);return{targetNode:i,movedNodeIds:m.filter(p=>!y.has(p))}},Ou=e=>{const n=new Set(e.annotationEntries.flatMap(t=>t.nodeIds));e.nodes=e.nodes.filter(t=>n.has(t.id)),e.linkedNodeGroups=kn({nodes:e.nodes,nodeLinks:e.linkedNodeGroups})},iA={updateNodeCoordinateById:(e,n)=>{const{nodeId:t,coordinate:o,selectedAnnotationIds:r=[],movedNodeIds:a,linkToNodeId:i}=n.payload,{targetNode:s,movedNodeIds:u}=Eu({nodeId:t,nodes:e.nodes,linkedNodeGroups:e.linkedNodeGroups,annotationEntries:e.annotationEntries,selectedAnnotationIds:r,preferredMovedNodeIds:a});if(!s||u.length===0)return;const l=new Set(u),d=Oa(e.annotationEntries),c=i&&!d.has(i)?i:null;e.nodes.forEach(m=>{l.has(m.id)&&(m.coordinate=o)}),e.linkedNodeGroups=cu({nodes:e.nodes,nodeLinks:e.linkedNodeGroups,nodeId:s.id,movedNodeIds:u,linkToNodeId:c})},insertNodeIntoMeasurementEdge:(e,n)=>{const{annotationId:t,startNodeId:o,endNodeId:r,coordinate:a}=n.payload,i=e.annotationEntries.find(b=>b.id===t);if(!i)return;const s=i.nodeIds.findIndex((b,T)=>b===o&&i.nodeIds[T+1]===r),u=i.closed&&i.nodeIds.length>=3&&i.nodeIds[i.nodeIds.length-1]===o&&i.nodeIds[0]===r,l=s>=0?s+1:u?i.nodeIds.length:-1;if(l<0)return;const d=new Map(e.edges.map(b=>[b.id,b])),c=i.edgeIds.findIndex(b=>{const T=d.get(b);return(T==null?void 0:T.startNodeId)===o&&T.endNodeId===r}),m=c>=0?i.edgeIds[c]:null,y=m?d.get(m):void 0;if(!y||c<0)return;const p=`node-${at(e.nodes.map(b=>b.id))+1}`,A=`edge-${at(e.edges.map(b=>b.id))+1}`;e.nodes.push({id:p,coordinate:a}),e.linkedNodeGroups=kn({nodes:e.nodes,nodeLinks:[...e.linkedNodeGroups,{id:p,nodeIds:[p]}]}),y.endNodeId=p;const f={id:A,startNodeId:p,endNodeId:r},v=e.edges.findIndex(b=>b.id===m);v>=0?e.edges.splice(v+1,0,f):e.edges.push(f),i.nodeIds=[...i.nodeIds.slice(0,l),p,...i.nodeIds.slice(l)],i.edgeIds=[...i.edgeIds.slice(0,c+1),A,...i.edgeIds.slice(c+1)]},removeNodeFromAnnotation:(e,n)=>{const{annotationId:t,nodeId:o}=n.payload,r=e.annotationEntries.find(u=>u.id===t);if(!(r!=null&&r.nodeIds.includes(o)))return;const a=r.nodeIds.filter(u=>u!==o),i=new Set(r.edgeIds),s=mu({nodeIds:a,closed:!!r.closed,previousEdgeNumericSuffix:at(e.edges.map(u=>u.id))});r.nodeIds=a,r.edgeIds=s.map(u=>u.id),e.edges=[...e.edges.filter(u=>!i.has(u.id)),...s],Ou(e)}},xa=(e,n,t=n[n.length-1]??null)=>{e.selectionState.previousSelectedAnnotationId=Zo(e),e.selectionState.selectedAnnotationIds=n,e.infoBoxState.activeAnnotationId=t},qa=(e,n)=>xa(e,n?[n]:[],n),sA={setSelectedAnnotationId:(e,n)=>{qa(e,n.payload)},setSelectedAnnotationIds:(e,n)=>{xa(e,Array.from(new Set(n.payload.filter(Boolean))))}},$i=(e,n,t)=>{if(!e.annotationEntries.some(a=>n.has(a.id)))return;e.annotationEntries=e.annotationEntries.filter(a=>!n.has(a.id));const o=new Set(e.annotationEntries.flatMap(a=>a.edgeIds));Ou(e),e.edges=e.edges.filter(a=>o.has(a.id));const{elevationReferenceAnnotationId:r}=e.settingsState;if(r&&n.has(r)&&(e.settingsState.elevationReferenceAnnotationId=null),t!==void 0){qa(e,t);return}xa(e,e.selectionState.selectedAnnotationIds.filter(a=>!n.has(a)))},lA={appendAnnotationEntities:(e,n)=>{const{annotationEntry:t,nodes:o,linkedNodeGroups:r,edges:a,selectAnnotationId:i}=n.payload;e.nodes.push(...o),r.forEach(s=>{const u=e.linkedNodeGroups.find(l=>l.id===s.id);if(!u){e.linkedNodeGroups.push({id:s.id,nodeIds:[...s.nodeIds]});return}u.nodeIds=Array.from(new Set([...u.nodeIds,...s.nodeIds]))}),e.edges.push(...a),e.annotationEntries.push({...t,nodeIds:[...t.nodeIds],edgeIds:[...t.edgeIds]}),e.linkedNodeGroups=kn({nodes:e.nodes,nodeLinks:e.linkedNodeGroups}),i!==void 0&&qa(e,i)},removeAnnotationById:(e,n)=>{$i(e,new Set([n.payload.annotationId]),n.payload.nextSelectedAnnotationId)},removeAnnotationsByIds:(e,n)=>{$i(e,new Set(n.payload.annotationIds),n.payload.nextSelectedAnnotationId)},updateAnnotationEntryById:(e,n)=>{const{annotationId:t,displayName:o,shortLabel:r,shortLabelSource:a,shortLabelCounter:i,hidden:s,locked:u,annotationRole:l,readOnly:d,labelAppearance:c,elevationDisplayMode:m,distanceAnchorCoordinateSelection:y,distanceTriangleAnchorCoordinateRole:p}=n.payload,A=e.annotationEntries.find(f=>f.id===t);A&&(o!==void 0&&(A.displayName=o),r!==void 0&&(A.shortLabel=r),a!==void 0&&(A.shortLabelSource=a),i!==void 0&&(A.shortLabelCounter=i),s!==void 0&&(A.hidden=s),u!==void 0&&(A.locked=u),l!==void 0&&(A.annotationRole=l),d!==void 0&&(A.readOnly=d),c!==void 0&&(A.labelAppearance={...A.labelAppearance??{},...c}),m!==void 0&&(A.elevationDisplayMode=m),y!==void 0&&(A.distanceAnchorCoordinateSelection=y),p!==void 0&&(A.distanceTriangleAnchorCoordinateRole=p))}},Lu=(e={})=>{const{initialToolType:n=In,initialPointTemporaryMode:t=!1}=e;return{annotationToolType:n,selectionState:{selectedAnnotationIds:[],previousSelectedAnnotationId:null},annotationEntries:[],nodes:[],linkedNodeGroups:[],edges:[],infoBoxState:{activeAnnotationId:null},settingsState:{pointTemporaryMode:t,elevationReferenceAnnotationId:null,nextShortLabelCounterByToolType:{}}}},Ru=xy({name:"annotationsRuntime",initialState:Lu(),reducers:{setAnnotationToolType:(e,n)=>{e.annotationToolType=n.payload},setPointTemporaryMode:(e,n)=>{e.settingsState.pointTemporaryMode=n.payload},setElevationReferenceAnnotationId:(e,n)=>{e.settingsState.elevationReferenceAnnotationId=n.payload},...sA,...lA,...iA}}),{appendAnnotationEntities:wu,removeAnnotationById:uA,removeAnnotationsByIds:_a,removeNodeFromAnnotation:dA,setElevationReferenceAnnotationId:cA,setPointTemporaryMode:mA,insertNodeIntoMeasurementEdge:yA,updateNodeCoordinateById:pA,updateAnnotationEntryById:qn,setAnnotationToolType:gA,setSelectedAnnotationId:it,setSelectedAnnotationIds:ft}=Ru.actions,fA=e=>Sy({reducer:Ru.reducer,preloadedState:e}),Pa=g.createContext(null),AA=ef(Pa),vA=zg(Pa),re=e=>vA(e),Lh=()=>AA(),TA=({enabled:e=!0,storageKey:n})=>{const t=g.useMemo(()=>!e||typeof window>"u"?null:tA(n),[e,n]),o=g.useCallback(r=>{!e||typeof window>"u"||oA(n,r)},[e,n]);return{initialPersistenceState:t,onPersistenceStateChange:e?o:void 0}},bA={lengthMeters:{locale:Nt.DE_DE,unitMode:nm.METERS,maximumFractionDigitsMeters:2},areaSquareMeters:{locale:Nt.DE_DE},degrees:{locale:Nt.DE_DE},geographicCoordinate:{locale:Nt.DE_DE,fractionDigits:6},decimalNumber:{locale:Nt.DE_DE,fractionDigits:2,useGrouping:!1}},xu={scalingMode:Aa.SCREEN,worldRadiusMeters:3,targetScreenRadiusCssPx:48,resizeWorldRadiusToScreenTarget:!1,resizeStepFactor:4,quantizeWorldRadius:!1},Ma={KEYBOARD:"keyboard",PROGRAMMATIC:"programmatic",UI:"ui"},kA=({annotations:e})=>{if(e.length===0)return!1;if(typeof window>"u")return!0;const n=e.length===1?"Diese Messung wirklich löschen?":`${e.length} Messungen wirklich löschen?`;return window.confirm(n)},NA=({activePlugin:e,activeToolType:n,activeToolSession:t,cancelToolId:o,focusAdjacentAnnotationEntry:r,removeSelectedAnnotations:a,removeEditedNode:i,clearInteractionState:s,requestFinishMeasurement:u,requestActivateTool:l,requestModeChange:d,sessionContext:c,setActiveToolTypeInStore:m})=>{g.useEffect(()=>{const y=p=>{var v;if(Tp(p)){const b=c.getState(),T=Cu(b);T.length>0&&(c.dispatch(ft(T)),p.preventDefault(),p.stopPropagation());return}const f=vp(p,{allowRepeat:!0})?bp(p):null;if(f===Ne.CANCEL_ACTIVE_TOOL&&o!==null&&n!==o){const b=c.getState();t==null||t.discardDraft(),b.annotationEntries.length>0&&m(o),s(),p.preventDefault();return}if(f===Ne.FOCUS_PREVIOUS_NAVIGATION_ITEM){r(-1),p.preventDefault();return}if(f===Ne.FOCUS_NEXT_NAVIGATION_ITEM){r(1),p.preventDefault();return}if((v=e==null?void 0:e.keyboard)!=null&&v.onKeyDown({event:p,activeToolType:n,activeToolSession:t,requestFinishMeasurement:u,requestActivateTool:l,requestModeChange:d,sessionContext:c})){s();return}if((f===Ne.DELETE_SELECTION||f===Ne.UNDO_LAST_POINT)&&c.drafts.get(n).coordinates.length>0){s(),p.preventDefault(),p.stopPropagation();return}if(f===Ne.DELETE_SELECTION||f===Ne.UNDO_LAST_POINT){if(i()){s(),p.preventDefault(),p.stopPropagation();return}if(c.getState().selectionState.selectedAnnotationIds.length>0){a({skipConfirmation:p.shiftKey,source:Ma.KEYBOARD}),p.preventDefault(),p.stopPropagation();return}}f===Ne.FINISH_MEASUREMENT&&u()&&p.preventDefault()};return window.addEventListener("keydown",y),()=>{window.removeEventListener("keydown",y)}},[e,t,n,o,s,r,i,a,u,d,l,c,m])},so=(e,n)=>e[n]??null,IA=(e,n,t)=>{const o=g.useCallback(()=>{const i=so(n,e);return i?i.requestFinish():!1},[e,n]),r=g.useCallback(i=>{if(i===e)return;const s=so(n,e);s&&s.requestFinish(),t();const u=so(n,i);u==null||u.requestStart()},[e,t,n]),a=g.useCallback((i=e)=>{if(i!==e){r(i);return}const s=so(n,e);s==null||s.discardDraft(),t(),s==null||s.requestStart()},[e,t,r,n]);return{requestModeChange:r,requestActivateTool:a,requestFinishMeasurement:o}},hA=14,SA=18,Wi=(e,n)=>n?e.find(t=>t.id===n)??null:null,qu=({engine:e,node:n,screenPosition:t})=>{const o=e.worldToScreen(H(n.coordinate));if(!o)return null;const r=o.x-t.x,a=o.y-t.y;return r*r+a*a},CA=({engine:e,nodes:n,screenPosition:t})=>{if(!t||!j(e)||n.length===0)return null;let r=hA**2,a=null;for(const i of n){const s=qu({engine:e,node:i,screenPosition:t});s===null||s>r||(r=s,a=i)}return a},_u=({engine:e,nodes:n,linkedNodeGroups:t,coordinate:o,screenPosition:r,forcedSnappedNodeId:a=null,lockedNodeId:i=null,excludedNodeIds:s=[]})=>{if(!j(e)||n.length===0)return{coordinate:o,linkedNodeGroupId:null,snappedNodeId:null};const u=new Set(s.filter(Boolean)),l=u.size===0?n:n.filter(y=>!u.has(y.id));if(l.length===0)return{coordinate:o,linkedNodeGroupId:null,snappedNodeId:null};const d=Wi(l,a);if(d)return{coordinate:d.coordinate,linkedNodeGroupId:vo(t,d.id),snappedNodeId:d.id};if(!r)return{coordinate:o,linkedNodeGroupId:null,snappedNodeId:null};const c=Wi(l,i);if(c){const y=qu({engine:e,node:c,screenPosition:r});if(y!==null&&y<=SA**2)return{coordinate:c.coordinate,linkedNodeGroupId:vo(t,c.id),snappedNodeId:c.id}}const m=CA({engine:e,nodes:l,screenPosition:r});return{coordinate:(m==null?void 0:m.coordinate)??o,linkedNodeGroupId:m?vo(t,m.id):null,snappedNodeId:(m==null?void 0:m.id)??null}},EA=(e,n)=>n?e.find(t=>t.id===n)??null:null,OA=({engine:e,nodes:n,linkedNodeGroups:t,activeToolType:o,toolSessions:r,getToolPlugin:a,sessionContext:i})=>{const s=r[o]??null,u=a(o),l=g.useRef(null);g.useEffect(()=>{EA(n,l.current)||(l.current=null)},[n]);const d=g.useCallback((y,p,A=null)=>{const f=_u({engine:e,nodes:n,linkedNodeGroups:t,coordinate:y,screenPosition:p,forcedSnappedNodeId:A,lockedNodeId:l.current});return l.current=f.snappedNodeId,{coordinate:f.coordinate,linkedNodeGroupId:f.linkedNodeGroupId}},[t,n,e]),c=g.useCallback((y,p)=>d(y,p).coordinate,[d]);return{handlePointQueryPointCreated:g.useCallback((y,p,A)=>{var b;const f=d(y,p,(A==null?void 0:A.forcedSnappedNodeId)??null),v=s==null?void 0:s.onNodeCreated;if(v){v(f.coordinate,f.linkedNodeGroupId,{inputModifier:A==null?void 0:A.inputModifier});return}(b=u==null?void 0:u.pointQuery)==null||b.onPointCreated({coordinate:f.coordinate,linkedNodeGroupId:f.linkedNodeGroupId,inputModifier:A==null?void 0:A.inputModifier,activeToolType:o,activeToolSession:s,toolSessions:r,sessionContext:i})},[u,s,o,d,i,r]),resolvePointQueryCoordinate:c,activeToolSession:s}},LA=(e,n)=>e.plugins.reduce((t,o)=>{var a;const r=(a=o.session)==null?void 0:a.createSession(n);return r?{...t,[o.id]:r}:t},{}),RA=e=>{},wA=(e,{enabled:n,onCoordinate:t,onLineFinish:o,onHoverCoordinateChange:r,onHoverSampleChange:a,onScreenPositionChange:i,singleClickDelayMs:s=220,inputModifiers:u})=>{((e==null?void 0:e.hooks.usePointQuery)??RA)({enabled:n,hideCursorWhileEnabled:!0,clickStrategy:o?Li.DELAYED_LINE_FINISH:Li.IMMEDIATE,config:{clickDelayMs:s},inputModifiers:u,onPointCreate:d=>{t==null||t(Fn(d.pickedPositionECEF),{x:d.screenPosition.x,y:d.screenPosition.y},{inputModifier:d.inputModifier})},onLineFinish:o,onPointerMove:(d,c,m,y)=>{const p=d?Fn(d):null,A={x:c.x,y:c.y};r==null||r(p,A),a==null||a({coordinate:p,screenPosition:A,pointECEF:d??null,surfaceNormalECEF:m??null,...y!=null&&y.inputModifier?{inputModifier:y.inputModifier}:{}})},onScreenPositionChange:i})},Dn={pointQuery:{discSmoothingSampleCount:120,discSmoothingWindowMs:500,discSmoothingWeightDecayGamma:3},hoverClearDelayMs:34,infoBoxFlyTo:{minRadiusMeters:80,paddingFactor:1.15},additiveSelectionModifierKey:"Shift"},Da=(e,n)=>e===n||e!=null&&n!==null&&n!==void 0&&e.latitude===n.latitude&&e.longitude===n.longitude&&e.altitude===n.altitude,Ba=(e,n)=>e.length===n.length&&e.every((t,o)=>Da(t,n[o])),xA=({engine:e,hoveredNode:n,coordinate:t,screenPosition:o,pointECEF:r,surfaceNormalECEF:a,inputModifier:i,resolvePointQueryCoordinate:s})=>{const u=(n==null?void 0:n.coordinate)??s(t,o),l=n!==null||!Da(u,t),d=l?H(u):r,c=l&&j(e)&&d?e.worldToScreen(d):null;return{isLockedToSnapPoint:l,pickResult:{coordinate:u,screenPosition:c?{x:c.x,y:c.y}:o,pointECEF:d??r,surfaceNormalECEF:l&&d?Gr(d):a,...i?{inputModifier:i}:{}}}},{POINT:lo}=q,qA=({pointTemporaryMode:e,annotationToolDraftStore:n,addAnnotation:t})=>{const o=g.useRef(e);g.useEffect(()=>{if(o.current&&!e){const r=n.get(lo);r.coordinates.length>0&&(r.coordinates.forEach((a,i)=>{t(lo,[a],void 0,[r.linkedNodeGroupIds[i]??null],lo)}),n.clear(lo))}o.current=e},[t,n,e])},_A=e=>{const n=g.useRef(e);return n.current=e,g.useCallback(t=>{const{engine:o,pointQueryEnabled:r,onPointCreated:a}=n.current;if(!r)return!1;const i=j(o)?o.worldToScreen(H(t)):null;return a(t,i??void 0),!0},[])},Rh="point-move-u-handle",wh=220,xh=30,PA=0,MA=1,DA=2,BA=3,FA="rgba(59, 130, 246, 0.98)",GA="rgba(239, 68, 68, 0.98)",jA="rgba(34, 197, 94, 0.98)",Pu="rgba(148, 163, 184, 0.98)",qh=1,Nr="rgba(255,255,255,0.92)",HA=.92,Nn=1.5,_h=48,Qn=320,Ph=16,Yi=40,Mh=48,Dh=.25,Bh=500,Fh=16,Gh=12,jh=1.3,Hh=1.05,Uh=.4,zh=4,Vh="row-resize",UA="move",Ki=8,$h=cc,Wh=.25,Yh=1,zA=[{id:"vertical",color:FA,labelKey:"verticalAxis"},{id:"horizontal-east",color:GA,labelKey:"eastAxis"},{id:"horizontal-north",color:jA,labelKey:"northAxis"}],VA=["vertical"],Mu=e=>VA.includes(e),Du=(e,n)=>zA.map(t=>({id:t.id,color:t.color,title:t.id==="vertical"&&n?n:e[t.labelKey]})),$A=(e,n)=>Du(e,n).filter(t=>Mu(t.id)),Kh=()=>{if(typeof window>"u")return 1;const e=window.devicePixelRatio;return!Number.isFinite(e)||e<=tm?1:1/e},Qh=e=>{if(e)try{e.destroy()}catch{}},WA=e=>{if(e)try{e()}catch{}},Xh=(e,n)=>{if(typeof document>"u")return;const t=document.documentElement,o=document.body;if(!(!t||!o)){if(!e.restoreGlobalCursor){const r=t.style.cursor,a=o.style.cursor;e.restoreGlobalCursor=()=>{t.style.cursor=r,o.style.cursor=a,e.restoreGlobalCursor=null}}t.style.cursor=n,o.style.cursor=n}},Zh=e=>{var n;(n=e.restoreGlobalCursor)==null||n.call(e)},Jh=(e,n)=>{e.dispatchEvent(new WheelEvent("wheel",{deltaX:n.deltaX,deltaY:n.deltaY,deltaZ:n.deltaZ,deltaMode:n.deltaMode,clientX:n.clientX,clientY:n.clientY,bubbles:!1,cancelable:!0}))},eS=(e,n)=>{e&&(e.setAttribute("d",Qs(n)),e.setAttribute("stroke-width",`${Nn}`),e.setAttribute("stroke-linejoin","round"),e.setAttribute("stroke-linecap","round"))},nn={primitiveId:"measurement-preview-point-ring",scalingMode:Aa.SCREEN,targetScreenRadiusCssPx:32,innerHoleRadiusRatio:.33,alpha:.6,materialPreset:Fp.COLOR,smoothingSampleCount:90,smoothingWindowMs:300,smoothingWeightDecayGamma:2};function bt(e,n,t){e.prototype=n.prototype=t,t.constructor=e}function Jt(e,n){var t=Object.create(e.prototype);for(var o in n)t[o]=n[o];return t}function hn(){}var $n=.7,At=1/$n,YA=/^#([0-9a-f]{3})$/,KA=/^#([0-9a-f]{6})$/,QA=/^rgb\(\s*([-+]?\d+)\s*,\s*([-+]?\d+)\s*,\s*([-+]?\d+)\s*\)$/,XA=/^rgb\(\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*\)$/,ZA=/^rgba\(\s*([-+]?\d+)\s*,\s*([-+]?\d+)\s*,\s*([-+]?\d+)\s*,\s*([-+]?\d+(?:\.\d+)?)\s*\)$/,JA=/^rgba\(\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)\s*\)$/,ev=/^hsl\(\s*([-+]?\d+(?:\.\d+)?)\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*\)$/,nv=/^hsla\(\s*([-+]?\d+(?:\.\d+)?)\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)\s*\)$/,Qi={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};bt(hn,$t,{displayable:function(){return this.rgb().displayable()},toString:function(){return this.rgb()+""}});function $t(e){var n;return e=(e+"").trim().toLowerCase(),(n=YA.exec(e))?(n=parseInt(n[1],16),new ye(n>>8&15|n>>4&240,n>>4&15|n&240,(n&15)<<4|n&15,1)):(n=KA.exec(e))?Xi(parseInt(n[1],16)):(n=QA.exec(e))?new ye(n[1],n[2],n[3],1):(n=XA.exec(e))?new ye(n[1]*255/100,n[2]*255/100,n[3]*255/100,1):(n=ZA.exec(e))?Zi(n[1],n[2],n[3],n[4]):(n=JA.exec(e))?Zi(n[1]*255/100,n[2]*255/100,n[3]*255/100,n[4]):(n=ev.exec(e))?Ji(n[1],n[2]/100,n[3]/100,1):(n=nv.exec(e))?Ji(n[1],n[2]/100,n[3]/100,n[4]):Qi.hasOwnProperty(e)?Xi(Qi[e]):e==="transparent"?new ye(NaN,NaN,NaN,0):null}function Xi(e){return new ye(e>>16&255,e>>8&255,e&255,1)}function Zi(e,n,t,o){return o<=0&&(e=n=t=NaN),new ye(e,n,t,o)}function Fa(e){return e instanceof hn||(e=$t(e)),e?(e=e.rgb(),new ye(e.r,e.g,e.b,e.opacity)):new ye}function Bu(e,n,t,o){return arguments.length===1?Fa(e):new ye(e,n,t,o??1)}function ye(e,n,t,o){this.r=+e,this.g=+n,this.b=+t,this.opacity=+o}bt(ye,Bu,Jt(hn,{brighter:function(e){return e=e==null?At:Math.pow(At,e),new ye(this.r*e,this.g*e,this.b*e,this.opacity)},darker:function(e){return e=e==null?$n:Math.pow($n,e),new ye(this.r*e,this.g*e,this.b*e,this.opacity)},rgb:function(){return this},displayable:function(){return 0<=this.r&&this.r<=255&&0<=this.g&&this.g<=255&&0<=this.b&&this.b<=255&&0<=this.opacity&&this.opacity<=1},toString:function(){var e=this.opacity;return e=isNaN(e)?1:Math.max(0,Math.min(1,e)),(e===1?"rgb(":"rgba(")+Math.max(0,Math.min(255,Math.round(this.r)||0))+", "+Math.max(0,Math.min(255,Math.round(this.g)||0))+", "+Math.max(0,Math.min(255,Math.round(this.b)||0))+(e===1?")":", "+e+")")}}));function Ji(e,n,t,o){return o<=0?e=n=t=NaN:t<=0||t>=1?e=n=NaN:n<=0&&(e=NaN),new We(e,n,t,o)}function tv(e){if(e instanceof We)return new We(e.h,e.s,e.l,e.opacity);if(e instanceof hn||(e=$t(e)),!e)return new We;if(e instanceof We)return e;e=e.rgb();var n=e.r/255,t=e.g/255,o=e.b/255,r=Math.min(n,t,o),a=Math.max(n,t,o),i=NaN,s=a-r,u=(a+r)/2;return s?(n===a?i=(t-o)/s+(t<o)*6:t===a?i=(o-n)/s+2:i=(n-t)/s+4,s/=u<.5?a+r:2-a-r,i*=60):s=u>0&&u<1?0:i,new We(i,s,u,e.opacity)}function ov(e,n,t,o){return arguments.length===1?tv(e):new We(e,n,t,o??1)}function We(e,n,t,o){this.h=+e,this.s=+n,this.l=+t,this.opacity=+o}bt(We,ov,Jt(hn,{brighter:function(e){return e=e==null?At:Math.pow(At,e),new We(this.h,this.s,this.l*e,this.opacity)},darker:function(e){return e=e==null?$n:Math.pow($n,e),new We(this.h,this.s,this.l*e,this.opacity)},rgb:function(){var e=this.h%360+(this.h<0)*360,n=isNaN(e)||isNaN(this.s)?0:this.s,t=this.l,o=t+(t<.5?t:1-t)*n,r=2*t-o;return new ye(Ir(e>=240?e-240:e+120,r,o),Ir(e,r,o),Ir(e<120?e+240:e-120,r,o),this.opacity)},displayable:function(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1}}));function Ir(e,n,t){return(e<60?n+(t-n)*e/60:e<180?t:e<240?n+(t-n)*(240-e)/60:n)*255}var Fu=Math.PI/180,Gu=180/Math.PI,qo=18,ju=.95047,Hu=1,Uu=1.08883,zu=4/29,st=6/29,Vu=3*st*st,rv=st*st*st;function Ga(e){if(e instanceof rn)return new rn(e.l,e.a,e.b,e.opacity);if(e instanceof An){var n=e.h*Fu;return new rn(e.l,Math.cos(n)*e.c,Math.sin(n)*e.c,e.opacity)}e instanceof ye||(e=Fa(e));var t=Er(e.r),o=Er(e.g),r=Er(e.b),a=hr((.4124564*t+.3575761*o+.1804375*r)/ju),i=hr((.2126729*t+.7151522*o+.072175*r)/Hu),s=hr((.0193339*t+.119192*o+.9503041*r)/Uu);return new rn(116*i-16,500*(a-i),200*(i-s),e.opacity)}function av(e,n,t,o){return arguments.length===1?Ga(e):new rn(e,n,t,o??1)}function rn(e,n,t,o){this.l=+e,this.a=+n,this.b=+t,this.opacity=+o}bt(rn,av,Jt(hn,{brighter:function(e){return new rn(this.l+qo*(e??1),this.a,this.b,this.opacity)},darker:function(e){return new rn(this.l-qo*(e??1),this.a,this.b,this.opacity)},rgb:function(){var e=(this.l+16)/116,n=isNaN(this.a)?e:e+this.a/500,t=isNaN(this.b)?e:e-this.b/200;return e=Hu*Sr(e),n=ju*Sr(n),t=Uu*Sr(t),new ye(Cr(3.2404542*n-1.5371385*e-.4985314*t),Cr(-.969266*n+1.8760108*e+.041556*t),Cr(.0556434*n-.2040259*e+1.0572252*t),this.opacity)}}));function hr(e){return e>rv?Math.pow(e,1/3):e/Vu+zu}function Sr(e){return e>st?e*e*e:Vu*(e-zu)}function Cr(e){return 255*(e<=.0031308?12.92*e:1.055*Math.pow(e,1/2.4)-.055)}function Er(e){return(e/=255)<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)}function iv(e){if(e instanceof An)return new An(e.h,e.c,e.l,e.opacity);e instanceof rn||(e=Ga(e));var n=Math.atan2(e.b,e.a)*Gu;return new An(n<0?n+360:n,Math.sqrt(e.a*e.a+e.b*e.b),e.l,e.opacity)}function sv(e,n,t,o){return arguments.length===1?iv(e):new An(e,n,t,o??1)}function An(e,n,t,o){this.h=+e,this.c=+n,this.l=+t,this.opacity=+o}bt(An,sv,Jt(hn,{brighter:function(e){return new An(this.h,this.c,this.l+qo*(e??1),this.opacity)},darker:function(e){return new An(this.h,this.c,this.l-qo*(e??1),this.opacity)},rgb:function(){return Ga(this).rgb()}}));var $u=-.14861,ja=1.78277,Ha=-.29227,Jo=-.90649,Wt=1.97294,es=Wt*Jo,ns=Wt*ja,ts=ja*Ha-Jo*$u;function lv(e){if(e instanceof Bn)return new Bn(e.h,e.s,e.l,e.opacity);e instanceof ye||(e=Fa(e));var n=e.r/255,t=e.g/255,o=e.b/255,r=(ts*o+es*n-ns*t)/(ts+es-ns),a=o-r,i=(Wt*(t-r)-Ha*a)/Jo,s=Math.sqrt(i*i+a*a)/(Wt*r*(1-r)),u=s?Math.atan2(i,a)*Gu-120:NaN;return new Bn(u<0?u+360:u,s,r,e.opacity)}function uv(e,n,t,o){return arguments.length===1?lv(e):new Bn(e,n,t,o??1)}function Bn(e,n,t,o){this.h=+e,this.s=+n,this.l=+t,this.opacity=+o}bt(Bn,uv,Jt(hn,{brighter:function(e){return e=e==null?At:Math.pow(At,e),new Bn(this.h,this.s,this.l*e,this.opacity)},darker:function(e){return e=e==null?$n:Math.pow($n,e),new Bn(this.h,this.s,this.l*e,this.opacity)},rgb:function(){var e=isNaN(this.h)?0:(this.h+120)*Fu,n=+this.l,t=isNaN(this.s)?0:this.s*n*(1-n),o=Math.cos(e),r=Math.sin(e);return new ye(255*(n+t*($u*o+ja*r)),255*(n+t*(Ha*o+Jo*r)),255*(n+t*(Wt*o)),this.opacity)}}));const Yt={ALWAYS:"always",SELECTED:"selected",OFF:"off"},_o={ALWAYS:"always",SELECTED:"selected"},ra=Object.freeze({strokeWidthPx:1.5,overlayDashPattern:"8 8",meterMarkers:Yt.ALWAYS,components:_o.ALWAYS}),nS=(e,n)=>e===Yt.ALWAYS||e===Yt.SELECTED&&n,tS=e=>e!==Yt.OFF,oS=(e,n)=>e===_o.ALWAYS||e===_o.SELECTED&&n,dv=e=>Object.values(Yt).includes(e),cv=e=>Object.values(_o).includes(e),mv=(e,n)=>typeof e=="number"&&Number.isFinite(e)&&e>0?e:n,yv=(e,n)=>{const t=e==null?void 0:e.trim();return t||n},rS=(e,n=ra)=>({strokeWidthPx:mv(e==null?void 0:e.strokeWidthPx,n.strokeWidthPx),overlayDashPattern:yv(e==null?void 0:e.overlayDashPattern,n.overlayDashPattern),meterMarkers:dv(e==null?void 0:e.meterMarkers)?e.meterMarkers:n.meterMarkers,components:cv(e==null?void 0:e.components)?e.components:n.components}),os=Object.freeze({previewAlpha:.9,surfaceAlpha:.92}),X={colors:{neutral:Ao(1),accent:Ao(1),preview:Ao(os.previewAlpha),surface:sc(os.surfaceAlpha),transparent:"transparent",components:{direct:gr(Te.DIRECT),vertical:gr(Te.VERTICAL),horizontal:gr(Te.HORIZONTAL)},componentLabelAccents:{direct:fr(Te.DIRECT),vertical:fr(Te.VERTICAL),horizontal:fr(Te.HORIZONTAL)}},sizes:{edgeStrokeWidth:ra.strokeWidthPx,pointPixelSize:10,pointOutlineWidth:1},patterns:{edgeDashPattern:ra.overlayDashPattern}},aS=Object.freeze({edge:Object.freeze({stroke:X.colors.accent,strokeWidth:X.sizes.edgeStrokeWidth,overlayDashPattern:X.patterns.edgeDashPattern}),point:Object.freeze({pixelSize:X.sizes.pointPixelSize,fill:X.colors.transparent,outline:X.colors.surface,outlineWidth:X.sizes.pointOutlineWidth})}),Wu=Object.freeze({edge:Object.freeze({stroke:X.colors.neutral}),point:Object.freeze({outline:X.colors.neutral})}),pv=(e,n={})=>({...e,...n}),gv=(e,n={})=>({...e,...n}),iS=e=>pv(e,Wu.edge),sS=e=>gv(e,Wu.point),xe=Object.freeze({lineStrokeWidthPx:X.sizes.edgeStrokeWidth,layerZIndex:"1550",lineLabelOffsetPx:9,lineLabelMinLengthPx:44,geometryEpsilonMeters:.01,directLineColor:X.colors.components.direct,verticalLineColor:X.colors.components.vertical,horizontalLineColor:X.colors.components.horizontal,draftChainColor:X.colors.preview}),Yu=e=>e.createLineCollection(),Ku=(e,n,t,o)=>{const r=(o==null?void 0:o.width)??xe.lineStrokeWidthPx,a=(o==null?void 0:o.ruler)===!0,i=(o==null?void 0:o.occludedDashed)===!0,s=(o==null?void 0:o.halo)!==!1;return{line:e.addLine({id:n,positions:[],color:t,width:r,ruler:a,occludedDashed:i,halo:s,visible:!1}),colorCss:t,width:r,ruler:a,occludedDashed:i,halo:s}},Qu=(e,n)=>{e.colorCss!==n&&(e.line.setStyle({color:n,width:e.width,ruler:e.ruler,occludedDashed:e.occludedDashed,halo:e.halo}),e.colorCss=n)},Xu=e=>{e.line.setVisible(!1)},Zu=(e,n)=>{e.line.setPositions(n),e.line.setVisible(n.length>=2)},fv=.1,Av=(e,n)=>{const t=$t(e)??$t("white");if(!t)return`rgba(255,255,255,${n})`;const{r:o,g:r,b:a}=t.rgb();return`rgba(${[o,r,a].map(Math.round).join(",")},${n})`},vv=(e,n)=>{let t=null,o=null,r=!1;const a=()=>{o&&(Xu(o),r=!1)};return{apply:i=>{if(!i){a();return}t??(t=Yu(e)),o??(o=Ku(t,n,i.colorCss)),Qu(o,i.colorCss);const s=Math.max(i.lineLengthMeters,fv)/2;Zu(o,[new x(0,0,-s).applyMatrix4(i.modelMatrix),new x(0,0,s).applyMatrix4(i.modelMatrix)]),r=!0},clear:a,hide:()=>o==null?void 0:o.line.setVisible(!1),restore:()=>o==null?void 0:o.line.setVisible(r),destroy:()=>{t==null||t.destroy(),t=null,o=null}}},Tv=e=>{let n=[];const t=new x;return{hasTrail:()=>n.length>1,push:o=>Np({samples:n,normal:o,maxSampleCount:e().maxSampleCount,timestampMs:performance.now()}),average:o=>{const{maxSampleAgeMs:r,weightDecayGamma:a}=e();return Ip({samples:n,fallbackNormal:o,result:t,epsilonSquared:Fl,maxSampleAgeMs:r,weightDecayGamma:a,nowMs:performance.now()})},clear:()=>{n=[]}}},bv=(e,n,t)=>{const o=sm(1,t).map(({x:i,y:s})=>new x(i,s,0));o.length>0&&o.push(o[0].clone());let r=null,a=null;return{apply:(i,s)=>{r??(r=Yu(e)),a??(a=Ku(r,n,s,{width:Nn,occludedDashed:!0,halo:!1})),Qu(a,s),Zu(a,o.map(u=>u.clone().applyMatrix4(i)))},clear:()=>{a&&Xu(a)},destroy:()=>{r==null||r.destroy(),r=null,a=null}}},aa=(e,n)=>cm(e)?e:n,lS=(e,n)=>Math.max(0,aa(e,n)),Ju={TRUE_SAMPLE:"true-sample",CAMERA_PLANE_REPROJECT:"camera-plane-reproject"},kv=e=>e===Ju.CAMERA_PLANE_REPROJECT,Nv=.1,Iv=.999,hv=e=>Ze(e,0,Iv),Sv=({engine:e,pointECEF:n,discNormalECEF:t,radiusMeters:o,scalingMode:r,targetScreenRadiusCssPx:a})=>{const i=Math.max(o,Nv);return r==="world"?i:Bp(s=>e.worldToScreen(s),n,t,i,a)},Cv=.1,Kt=Object.freeze({SCALE_BAND:"scale-band",VIEW_CHANGE:"view-change"}),Ev=(e,n,t)=>{if(!Number.isFinite(e)||e<=0)return null;const o=n/e;return Math.max(t?Zs(o*2)/2:o,Cv)},Ov=(e,n,t,o)=>n===null||(e===Kt.VIEW_CHANGE?n.viewKey!==t.viewKey:el(n.referenceScale,t.referenceScale,o)),Lv=e=>{const n=e.getCameraPose();if(!n)return"";const{positionECEF:t,directionECEF:o,upECEF:r,verticalFovRad:a}=n;return[...t.toArray(),...o.toArray(),...r.toArray(),a,e.canvas.clientWidth,e.canvas.clientHeight].join()},Rv=({engine:e,stepFactor:n,targetScreenRadiusCssPx:t,quantize:o,fallbackRadiusMeters:r,trigger:a=Kt.SCALE_BAND})=>{const i=a===Kt.VIEW_CHANGE;let s=null,u=null;const l=new x;return d=>{const c={viewKey:i?Lv(e):"",referenceScale:u&&!i?e.getScreenPixelsPerMeterAt(l):0};if(s!==null&&!Ov(a,u,c,n))return s;const m=e.getScreenPixelsPerMeterAt(d),y=Ev(m,t,o);return y===null?s??r:(s=y,u={viewKey:c.viewKey,referenceScale:m},l.copy(d),y)}},wv=({engine:e,screenPosition:n,tangentPlane:t})=>{if(!t)return null;const o=e.getPickRay(n);if(!o)return null;const r=new Jc().setFromNormalAndCoplanarPoint(t.normalECEF.clone().normalize(),t.pointECEF),a=mm(new em(o.origin,o.direction),r);return a&&o.direction.dot(new x().subVectors(a,o.origin))>0?a:null},xv="white",rs={overlay:20,inScene:48},qv=(e,{radius:n,placementMode:t=Ju.CAMERA_PLANE_REPROJECT,color:o,opacity:r,materialPreset:a,innerHoleRadiusRatio:i=nn.innerHoleRadiusRatio,scalingMode:s=nn.scalingMode,targetScreenRadiusCssPx:u=nn.targetScreenRadiusCssPx,resizeWorldRadiusToScreenTarget:l=!1,discResizeStepFactor:d=4,quantizeStepWorldRadius:c=!1,showNormalLine:m=!1,tangentDiscVisualizerTrailSampleCount:y=nn.smoothingSampleCount,tangentDiscVisualizerSmoothingWindowMs:p=nn.smoothingWindowMs,tangentDiscVisualizerWeightDecayGamma:A=nn.smoothingWeightDecayGamma})=>{if(!e||!j(e))return{setEnabled:()=>{},setVisualStyle:()=>{},setPreview:()=>{},clearPreview:()=>{},destroy:()=>{}};const f=e,v=f.capabilities.pointQueryDiscInScene===!0,b=v?rs.inScene:rs.overlay,T=Math.max(n,.1),I=new Bo,N=aa(r,nn.alpha),h=M=>({colorCss:(M==null?void 0:M.color)??o??xv,opacity:aa(M==null?void 0:M.opacity,N)}),S=M=>Av(M.colorCss,M.opacity);let k=!1,O=h(),R=S(O),L=null;const C=vv(f,"measurement-preview-point-ring-normal"),w=v?bv(f,"measurement-preview-point-ring-rim",b):null,_=Tv(()=>({maxSampleCount:y,maxSampleAgeMs:p,weightDecayGamma:A}));let B=null,P=!1,F=null;const J=Rv({engine:f,stepFactor:d,targetScreenRadiusCssPx:u,quantize:c,fallbackRadiusMeters:T,trigger:v?Kt.VIEW_CHANGE:Kt.SCALE_BAND});let V=null,$=null,U=null,K=!1,ee=0,ne=null;const z=()=>{L==null||L.destroy(),L=null,C.clear(),w==null||w.clear(),_.clear(),ne=null,P=!1},te=()=>{if(!$)return null;if(!kv(t)||K||!U)return $;const M=f.pointer.getScreenPosition();return M?wv({engine:f,screenPosition:M,tangentPlane:{pointECEF:$,normalECEF:U}})??$:$},pe=()=>F?(L??(L=f.createRing({id:nn.primitiveId,radius:1,innerRadius:hv(i),color:O.colorCss,opacity:O.opacity,materialPreset:a??nn.materialPreset,segments:b,modelMatrix:I,occludable:v})),L):(z(),null),Ve=()=>{P||!_.hasTrail()||f.isDestroyed()||(P=!0,f.requestRender())},ie=({requestSmoothingRender:M=!0}={})=>{if(!k){z();return}const W=te();if(!W){z();return}F=(F??new x).copy(W);const ge=Mp(W,U??V,V),se=s===Aa.WORLD&&l?J(W):Sv({engine:f,pointECEF:W,discNormalECEF:ge,radiusMeters:T,scalingMode:s,targetScreenRadiusCssPx:u}),Y=L??pe();if(!Y)return;ne!==ee&&(ne=ee,_.push(ge));const Z=_.average(ge);M&&Ve(),Y.setModelMatrix(Dp(W,Z,se,I)),w==null||w.apply(I,R),C.apply(m?{modelMatrix:I,lineLengthMeters:se*2,colorCss:R}:null)},Ge=()=>{F=null,V=null,$=null,U=null,K=!1,ee+=1,z()},D=f.pointer.register();return B=f.subscribePreRender(()=>{P=!1,ie()}),{setEnabled:M=>{k!==M&&(k=M,k?ie({requestSmoothingRender:!1}):z(),f.requestRender())},setVisualStyle:(M,W)=>{const ge=h(M),se=S(ge);R!==se&&(O=ge,R=se,z(),ie({requestSmoothingRender:!1}),(W==null?void 0:W.requestRender)!==!1&&f.requestRender())},setPreview:(M,W)=>{if(!(M!=null&&M.pointECEF)){Ge(),(W==null?void 0:W.requestRender)!==!1&&f.requestRender();return}$=($??new x).copy(M.pointECEF),F=(F??new x).copy(M.pointECEF),U=M.surfaceNormalECEF?(U??new x).copy(M.surfaceNormalECEF):null,V=M.surfaceNormalECEF?(V??new x).copy(M.surfaceNormalECEF):null,K=M.lockToPreviewPoint===!0,ee+=1,ie({requestSmoothingRender:!1}),(W==null?void 0:W.requestRender)!==!1&&f.requestRender()},clearPreview:()=>{Ge(),f.requestRender()},destroy:()=>{D(),WA(B),B=null,z(),C.destroy(),w==null||w.destroy()}}},_v=({engine:e,referenceObjectSizing:n,pointQueryEnabled:t,refs:{indicatorControllerRef:o,latestPickResultRef:r,pointQueryEnabledRef:a},resolveHoveredPointQueryNodeRef:i})=>{g.useEffect(()=>{var u;(u=o.current)==null||u.destroy();const s=qv(e,{radius:n.worldRadiusMeters,scalingMode:n.scalingMode,targetScreenRadiusCssPx:n.targetScreenRadiusCssPx,resizeWorldRadiusToScreenTarget:n.resizeWorldRadiusToScreenTarget,discResizeStepFactor:n.resizeStepFactor,quantizeStepWorldRadius:n.quantizeWorldRadius,showNormalLine:!0,tangentDiscVisualizerTrailSampleCount:Dn.pointQuery.discSmoothingSampleCount,tangentDiscVisualizerSmoothingWindowMs:Dn.pointQuery.discSmoothingWindowMs,tangentDiscVisualizerWeightDecayGamma:Dn.pointQuery.discSmoothingWeightDecayGamma});return o.current=s,s==null||s.setEnabled(a.current),a.current&&r.current?s==null||s.setPreview({pointECEF:r.current.pointECEF,surfaceNormalECEF:r.current.surfaceNormalECEF,lockToPreviewPoint:i.current()!==null}):s==null||s.clearPreview(),()=>{var l;(l=o.current)==null||l.destroy(),o.current=null}},[n.quantizeWorldRadius,n.resizeWorldRadiusToScreenTarget,n.resizeStepFactor,n.scalingMode,n.targetScreenRadiusCssPx,n.worldRadiusMeters,e]),g.useEffect(()=>{var s;(s=o.current)==null||s.setEnabled(t)},[t])},Pv=({engine:e,activePlugin:n,context:t,pointQueryEnabled:o,refs:{authoringControllerRef:r,latestPickResultRef:a,pointQueryEnabledRef:i}})=>{const{annotationsStore:s,drafts:u,labelOverlay:l,formatOptions:d,lineLabelOptions:c}=t;g.useEffect(()=>{var y,p;(y=r.current)==null||y.destroy();const m=((p=n==null?void 0:n.authoringVisuals)==null?void 0:p.createController({engine:e,annotationsStore:s,drafts:u,labelOverlay:l,requestRender:()=>{j(e)&&e.requestRender()},formatOptions:d,lineLabelOptions:c}))??null;return r.current=m,m==null||m.setEnabled(i.current),m==null||m.setPointQueryPickResult(i.current?a.current:null),()=>{var A;(A=r.current)==null||A.destroy(),r.current=null}},[n,s,u,e,d,l,c]),g.useEffect(()=>{var m,y;(m=r.current)==null||m.setEnabled(o),o||(y=r.current)==null||y.setPointQueryPickResult(null)},[o])},ia={requestModeChange:()=>{},requestActivateTool:()=>{},requestFinishMeasurement:()=>!1,requestPointAt:()=>!1},uS="#00d9ff",Mv="#ef4444",Or={requestRender:!1},Dv=({engine:e,registry:n,annotationsStore:t,annotationToolDraftStore:o,setActiveToolTypeInStore:r,focusAdjacentAnnotationEntry:a,removeSelectedAnnotations:i,removeEditedNode:s,addAnnotation:u,bindApi:l,bindPreviewSnapTargetNodeClick:d,activeEditedNodeId:c,getHoveredPointQueryNodeId:m,setHoveredPointQueryNodeId:y,onPointQueryPickResultChange:p,formatOptions:A,lineLabelOptions:f,referenceObjectSizing:v,requestLabelText:b})=>{var Z,de;const T=Do(),I=re(G=>G.annotationToolType),N=re(G=>G.nodes),h=re(G=>G.linkedNodeGroups),S=re(G=>G.settingsState.pointTemporaryMode),k=g.useRef(null),O=g.useRef(null),R=g.useRef(null),L=g.useRef(null),C=g.useCallback((G,Pe)=>{var Ce;L.current=G,(Ce=O.current)==null||Ce.setPointQueryPickResult(G,Pe),p(G)},[p]),w=g.useMemo(()=>new Map(N.map(G=>[G.id,G])),[N]),_=g.useCallback(()=>{k.current!==null&&(window.clearTimeout(k.current),k.current=null)},[]),B=g.useCallback(()=>{var G,Pe;(G=R.current)==null||G.setVisualStyle(null),(Pe=R.current)==null||Pe.clearPreview()},[]),P=g.useCallback(()=>y(null),[y]),F=g.useCallback(()=>{_(),C(null),B(),P()},[P,B,_,C]),J=g.useCallback(()=>{const G=m();return G?w.get(G)??null:null},[m,w]),V=g.useMemo(()=>({getState:t.getState,dispatch:t.dispatch,setActiveToolType:r,drafts:o,requestLabelText:b,addAnnotation:u}),[u,o,t.dispatch,t.getState,b,r]),$=g.useMemo(()=>LA(n,V),[n,V]),U=n.getPlugin(I)??null;g.useMemo(()=>yu(n.plugins),[n.plugins]);const K=g.useMemo(()=>kf(n),[n]);qA({pointTemporaryMode:S,annotationToolDraftStore:o,addAnnotation:u});const{requestModeChange:ee,requestActivateTool:ne,requestFinishMeasurement:z}=IA(I,$,F),te=g.useCallback(()=>{const G=z();return G&&F(),G},[z,F]),{handlePointQueryPointCreated:pe,resolvePointQueryCoordinate:Ve,activeToolSession:ie}=OA({engine:e,nodes:N,linkedNodeGroups:h,activeToolType:I,toolSessions:$,getToolPlugin:G=>n.getPlugin(G)??null,sessionContext:V}),Ge=g.useCallback((G,Pe,Ce)=>{pe(G,Pe,{inputModifier:Ce==null?void 0:Ce.inputModifier}),F()},[pe,F]),D=!!((ie!=null&&ie.onNodeCreated||(Z=U==null?void 0:U.pointQuery)!=null&&Z.onPointCreated)&&!c),M=_A({engine:e,pointQueryEnabled:D,onPointCreated:Ge});g.useEffect(()=>(l({requestModeChange:ee,requestActivateTool:ne,requestFinishMeasurement:te,requestPointAt:M}),()=>{l(ia)}),[l,te,ee,ne,M]);const W=g.useRef(D);W.current=D;const ge=g.useRef(J);ge.current=J;const se=g.useCallback(G=>{if(!D)return!1;const Pe=N.find(Ce=>Ce.id===G)??null;return Pe?(pe(Pe.coordinate,void 0,{forcedSnappedNodeId:G}),F(),!0):!1},[pe,N,D,F]);g.useEffect(()=>d(se)??void 0,[d,se]);const Y={indicatorControllerRef:R,authoringControllerRef:O,latestPickResultRef:L,pointQueryEnabledRef:W};return _v({engine:e,referenceObjectSizing:v,pointQueryEnabled:D,refs:Y,resolveHoveredPointQueryNodeRef:ge}),Pv({engine:e,activePlugin:U,context:{annotationsStore:t,drafts:o,labelOverlay:T,formatOptions:A,lineLabelOptions:f},pointQueryEnabled:D,refs:Y}),g.useEffect(()=>{D||P()},[P,D]),wA(e,{enabled:D,inputModifiers:(de=U==null?void 0:U.pointQuery)==null?void 0:de.inputModifiers,onCoordinate:Ge,onLineFinish:ie!=null&&ie.finishesOnLoopClosure?()=>{te()}:void 0,onHoverSampleChange:({coordinate:G,screenPosition:Pe,pointECEF:Ce,surfaceNormalECEF:kt,inputModifier:oc})=>{var Qa,eo,Xa,no,Za,Ja;if(!D||!Ce||!G){_(),k.current=window.setTimeout(()=>{k.current=null,C(null),B()},Dn.hoverClearDelayMs);return}_();const{pickResult:rr,isLockedToSnapPoint:rc}=xA({engine:e,hoveredNode:J(),coordinate:G,screenPosition:Pe,pointECEF:Ce,surfaceNormalECEF:kt,inputModifier:oc,resolvePointQueryCoordinate:Ve});C(rr,Or),(Qa=R.current)==null||Qa.setPreview({pointECEF:rr.pointECEF,surfaceNormalECEF:rr.surfaceNormalECEF,lockToPreviewPoint:rc},Or);const ac=((Xa=(eo=O.current)==null?void 0:eo.isPointQueryPickResultAcceptable)==null?void 0:Xa.call(eo))??!0,Ka=(Za=(no=O.current)==null?void 0:no.getPointQueryVisualStyle)==null?void 0:Za.call(no);(Ja=R.current)==null||Ja.setVisualStyle(Ka!==void 0?Ka:ac?null:{color:Mv},Or)}}),g.useEffect(()=>{var G;D||(_(),C(null),(G=O.current)==null||G.setEnabled(!1),B())},[B,_,D,C]),g.useEffect(()=>()=>{_(),C(null)},[_,C]),NA({activePlugin:U,activeToolSession:ie,activeToolType:I,cancelToolId:K,clearInteractionState:F,focusAdjacentAnnotationEntry:a,removeEditedNode:s,removeSelectedAnnotations:i,requestFinishMeasurement:te,requestModeChange:ee,requestActivateTool:ne,sessionContext:V,setActiveToolTypeInStore:r}),null},Bv=({registry:e,setActiveToolType:n})=>{const t=re(o=>o.annotationToolType);return g.useEffect(()=>{var r;if(e.getPlugin(t))return;const o=(r=e.orderedDescriptors[0])==null?void 0:r.id;o&&n(o)},[t,e,n]),null},ed=e=>{const n=new Map;return{set:(t,o)=>{n.set(t,o),e()},get:t=>n.get(t),delete:t=>{n.delete(t)&&e()},clear:()=>{n.size!==0&&(n.clear(),e())},forEach:t=>n.forEach(t),get size(){return n.size}}},as=ip(),Wn=Object.freeze({style:Object.freeze({DARK_ON_BRIGHT:"dark-on-bright",BRIGHT_ON_DARK:"bright-on-dark"}),label:Object.freeze({textColor:as}),selection:Object.freeze({highlightPalette:Object.freeze({backgroundColor:Ni("background"),hoverBackgroundColor:Ni("hoverBackground"),textColor:as,glowColor:Ao(1),glowRadiusPx:5,preserveFillOnSelection:!0})}),lineLabel:Object.freeze({backgroundStyle:Object.freeze({SOFT_RECT_FADE:"soft-rect-fade",TEXT_ECHO_DARKEN:"text-echo-darken"})})}),Fv=Rn.fontSizePx.pointLabel,Gv=e=>`${e/Fv}rem`,lt=Object.freeze({fontFamily:Rn.fontFamily,rootFontSizeRem:"1rem",supportFontSizeRem:Gv(Rn.fontSizePx.supportText),headingFontSizeRem:"1rem",lineLabelFontWeight:Rn.fontWeight.medium,badgeFontWeight:Rn.fontWeight.medium,headingFontWeight:Rn.fontWeight.semibold,sectionTitleFontWeight:Rn.fontWeight.semibold}),nd={NONE:"none",MOVE_ON_LINE:"move-on-line"},Le=Object.freeze({appearance:Object.freeze({themeStyle:Wn.style.BRIGHT_ON_DARK}),text:Object.freeze({fontFamily:lt.fontFamily,fontWeight:lt.lineLabelFontWeight}),background:Object.freeze({style:Wn.lineLabel.backgroundStyle.TEXT_ECHO_DARKEN}),surface:Object.freeze({}),layout:Object.freeze({shortEdgeOffsetPx:-2}),collision:Object.freeze({allowEarlyRemoval:!0,resolutionStrategy:nd.MOVE_ON_LINE,anchorSlideStepRatio:.1,maxAnchorSlideDeltaRatio:.3})}),td=Object.freeze({verticalFlippedBaselineOffsetPx:0,verticalBaselineAngleEpsilonRad:1e-9,sideHysteresisPx:1.5}),er=e=>{var n,t;return{appearance:{...Le.appearance,...e==null?void 0:e.appearance},text:{...Le.text,...e==null?void 0:e.text,echo:((n=e==null?void 0:e.text)==null?void 0:n.echo)===void 0&&Le.text.echo===void 0?void 0:{...Le.text.echo,...(t=e==null?void 0:e.text)==null?void 0:t.echo}},background:{...Le.background,...e==null?void 0:e.background},surface:{...Le.surface,...e==null?void 0:e.surface},layout:{...Le.layout,...e==null?void 0:e.layout},collision:{...Le.collision,...e==null?void 0:e.collision}}},jv=e=>e.surface.blendMode??(e.appearance.themeStyle===Wn.style.DARK_ON_BRIGHT?"lighten":"darken"),Qe={RIGHTMOST_SCREEN_SPACE:"rightmost-screen-space",LEFTMOST_SCREEN_SPACE:"leftmost-screen-space"},qt={START_COORDINATE:"start-coordinate",END_COORDINATE:"end-coordinate"},sa={POINT_LABEL:"point-label",LINE_BLEND:"line-blend"},od={INSIDE:"inside",OUTSIDE:"outside"},et={MIN:1,MAX:1400,LOG_SCALE:64},rd=e=>{if(!Number.isFinite(e)||e<0)return et.MIN;const n=Math.log2(Math.max(1,e)+1)*et.LOG_SCALE;return Ze(Math.round(et.MAX-n),et.MIN,et.MAX)},ad=Object.freeze({reenterMarginPx:2,candidateSamples:10}),Hv=1e-9,wt=(e,n)=>({x:e,y:n}),Uv=(e,n,t,o,r=0)=>{const a=n/2+r,i=t/2+r,s=[wt(e.x-a,e.y-i),wt(e.x+a,e.y-i),wt(e.x+a,e.y+i),wt(e.x-a,e.y+i)];return s.every(u=>va(o,u))&&o.every((u,l)=>s.every((d,c)=>!lm(u,o[(l+1)%o.length],d,s[(c+1)%4],Hv)))},zv=e=>{const n=e.map(u=>u.x),t=e.map(u=>u.y),[o,r,a,i]=[Math.min(...n),Math.max(...n),Math.min(...t),Math.max(...t)],s=ad.candidateSamples;return Array.from({length:(s-1)**2},(u,l)=>wt(o+(r-o)*(l%(s-1)+1)/s,a+(i-a)*(Math.floor(l/(s-1))+1)/s))},Vv=({polygon:e,width:n,height:t,previous:o})=>{var c,m;const r={fits:!1,position:null,weights:null};if(!e||e.length<3)return r;const a=tp(e),i=(y,p=0)=>!!y&&Uv(y,n,t,e,p);if(o!=null&&o.fits){const y=((c=o.weights)==null?void 0:c.length)===e.length?xm(o.weights,e):a;if(i(y))return{fits:!0,position:y,weights:o.weights}}const s=o!=null&&o.fits?0:ad.reenterMarginPx;if(a&&i(a,s))return{fits:!0,position:a,weights:null};const u=a??e[0],l=(m=Rm(e))==null?void 0:m.center,d=[...l?[l]:[],...zv(e)].filter(y=>i(y,s)).sort((y,p)=>Math.hypot(y.x-u.x,y.y-u.y)-Math.hypot(p.x-u.x,p.y-u.y))[0];return d?{fits:!0,position:d,weights:wm(d,e)}:r},$v=.5,Wv=e=>({width:(typeof e=="string"?e:String(e??"")).length*8.5,height:18}),Lr=new WeakMap,Yv=e=>{if(e.offsetWidth<=0)return null;const n=getComputedStyle(e),t=e.offsetWidth-parseFloat(n.paddingLeft)-parseFloat(n.paddingRight),o=e.offsetHeight-parseFloat(n.paddingTop)-parseFloat(n.paddingBottom);return t>0&&o>0?{width:t,height:o}:null},Kv=e=>{const n=e.firstElementChild;if(!n)return null;const t=n.outerHTML,o=Lr.get(n);if((o==null?void 0:o.key)===t)return o.size;const r=Yv(n);return r?Lr.set(n,{key:t,size:r}):Lr.delete(n),r},Qv=e=>e.coordinateCandidates&&e.coordinateCandidates.length>0?e.coordinateCandidates:[{coordinate:e.coordinate,nodeId:e.nodeId}],Xv=(e,n)=>{const t=e.worldToScreen(H(n.coordinate));return t===null?null:{candidate:n,x:t.x,y:t.y}},Zv=({engine:e,label:n})=>{var s;const t=Qv(n),o=t[0]??{coordinate:n.coordinate,nodeId:n.nodeId};if(!j(e)||!n.coordinateSelection||t.length<=1)return o;const r=t.flatMap(u=>{const l=Xv(e,u);return l?[l]:[]});if(r.length===0)return o;const a=n.coordinateSelection===Qe.LEFTMOST_SCREEN_SPACE;return((s=r.sort((u,l)=>a?u.x-l.x:l.x-u.x)[0])==null?void 0:s.candidate)??o},Jv=(e,n)=>{const t=e.nodeId?n.get(e.nodeId):void 0;return t?Fn(t):e.coordinate},vn=Object.freeze({layoutConfig:ym(void 0),markerPixelSize:10,markerOutlineWidth:X.sizes.pointOutlineWidth,stemColor:X.colors.surface,activeMoveGizmoLabelZIndex:et.MAX+1}),la=()=>({screenPosition:null,isInViewport:!1,isHidden:!0,isOccluded:!1,hiddenByLayout:!0,angleRad:0,distance:vn.layoutConfig.stemDistance,attach:"center",zIndex:0}),Rr=(e,n)=>`${e}-${n}`,id=e=>e.hideMarker!==!0,sd=(e,n)=>({isOccluded:n,opacity:n?e.areaFit?$v:js:1}),ld=e=>({markerSize:e.markerPixelSize??vn.markerPixelSize,markerStrokeWidth:e.markerOutlineWidth??vn.markerOutlineWidth}),eT=({label:e,overlayState:n,areaLabelSurfaceBlendMode:t,markerInScene:o=!1})=>{const{markerSize:r,markerStrokeWidth:a}=ld(e),i=n.isHidden||n.hiddenByLayout,s=e.hideMarker===!0||o&&id(e);return{pointId:e.id,content:e.content,badgeContent:e.badgeContent,selected:e.selected,hideLabelAndStem:e.hideLabelAndStem,hideStem:o,hideMarker:s,markerSize:r,markerStrokeWidth:a,stemStartDistance:e.stemStartDistance??(e.hideMarker?0:r/2+a/2),markerBackgroundColor:e.markerBackgroundColor,markerTextColor:e.markerTextColor,lineColor:e.lineColor??vn.stemColor,labelStyle:e.labelStyle,collapse:e.collapse,textBackgroundColor:e.textBackgroundColor,textColor:e.textColor,selectedBackgroundColor:e.selectedBackgroundColor,selectedTextColor:e.selectedTextColor,selectedGlowColor:e.selectedGlowColor,selectedGlowRadiusPx:e.selectedGlowRadiusPx,preserveFillOnSelection:e.preserveFillOnSelection,hoverBackgroundColor:e.hoverBackgroundColor,textShadow:e.textShadow,fontSize:e.fontSize,fontFamily:e.fontFamily,fontWeight:e.fontWeight,mixBlendMode:e.mixBlendMode??(e.anchorKind===Xs.AREA_CENTROID?t:void 0),onClick:e.onClick,onDoubleClick:e.onDoubleClick,onHoverChange:e.onHoverChange,onLongPress:e.onLongPress,markerOnlyPointerEvents:e.markerOnlyPointerEvents,longPressDurationMs:e.longPressDurationMs,longPressOnlyOnMarker:!!e.onLongPress&&!!e.hideLabelAndStem,renderHiddenMarkerInteractionTarget:!!(e.onLongPress&&e.markerOnlyPointerEvents===!0)||s&&e.hideMarker!==!0,screenPosition:i?null:n.screenPosition,angleRad:n.angleRad,distance:n.distance,attach:n.attach,isOccluded:n.isOccluded,visible:!i,zIndex:n.zIndex}},wr=Object.freeze({viewportPaddingHorizontal:12,viewportPaddingVertical:8,occlusionToleranceMeters:1}),nT=()=>({screenPosition:null,isInViewport:!1,isHidden:!0,isOccluded:!1}),tT=e=>(e==null?void 0:e.getFrameKey())??null,ud=e=>(e==null?void 0:e.captureProjectionSnapshot())??null,dd=jp,cd=({engine:e,coordinate:n,shouldTestVisibility:t=!0,shouldTestOcclusion:o=!0,viewportPaddingHorizontal:r=wr.viewportPaddingHorizontal,viewportPaddingVertical:a=wr.viewportPaddingVertical,occlusionToleranceMeters:i=wr.occlusionToleranceMeters})=>j(e)?e.projectPoint(H(n),{shouldTestVisibility:t,shouldTestOcclusion:o,viewportPaddingHorizontal:r,viewportPaddingVertical:a,occlusionToleranceMeters:i}):nT(),oT={placements:{},hiddenByLayout:new Set,collapsedToCompact:new Set},rT=new x,xr=(e,n="")=>typeof e=="string"||typeof e=="number"?String(e):n,aT=({engine:e,labels:n,areaLabelSizeById:t,areaLabelFitByKey:o})=>{const r=new Map;return n.forEach(a=>{var l;if(((l=a.areaFit)==null?void 0:l.role)!==od.INSIDE)return;const i=[];for(const d of a.areaFit.outline){const c=e.worldToScreen(H(d));if(!c)break;i.push({x:c.x,y:c.y})}const s=t.get(a.id)??Wv(a.content),u=Vv({polygon:i.length===a.areaFit.outline.length?i:null,width:s.width,height:s.height,previous:o.get(a.areaFit.key)});r.set(a.areaFit.key,u),o.set(a.areaFit.key,u)}),r},iT=(e,n,t)=>{if(!e.areaFit)return n;const o=t.get(e.areaFit.key);return e.areaFit.role===od.INSIDE?o!=null&&o.fits&&o.position?{...n,screenPosition:o.position}:{...n,isHidden:!0}:o!=null&&o.fits?{...n,isHidden:!0}:n},sT=(e,n,t)=>({id:e.id,anchor:t,anchorKind:e.anchorKind,text:xr(e.content),compactText:xr(e.badgeContent,xr(e.content)),index:n,...e.preferredAttach!==void 0?{lockPreferredPlacement:!0,preferredAttach:e.preferredAttach}:{},...e.selected?{layoutPriority:Number.MAX_SAFE_INTEGER,lockPreferredPlacement:!0}:{}}),lT=({engine:e,labels:n,liveAnchors:t,isInPreviewNodeLink:o,previousStatesById:r,isCameraMoving:a,areaLabelSizeById:i,areaLabelFitByKey:s})=>{const u=new Map;if(!j(e))return u;const l=N=>N.hideLabelAndStem!==!0&&(o==null?void 0:o(N.nodeId))===!0,d=a&&e.capabilities.occlusionPerFrame!==!0||t.size>0,c=!d&&n.some(l),m=e.getCameraPitchRad(),y=e.getCameraPositionECEF(rT),p=aT({engine:e,labels:n,areaLabelSizeById:i,areaLabelFitByKey:s}),A=[],f=new Map,v=new Map,b=new Map,T=new Set;n.forEach((N,h)=>{var _;const S=l(N);S&&T.add(N.id);const k=Jv(Zv({engine:e,label:N}),t),O=cd({engine:e,coordinate:k,shouldTestOcclusion:!d&&(N.areaFit!==void 0||pm({anchorKind:N.anchorKind,occlusionMode:N.occlusionMode}))}),R=d?{...O,isOccluded:((_=r.get(N.id))==null?void 0:_.isOccluded)??!1}:O,L=iT(N,R,p),C=H(k),w=y?y.distanceTo(C):Number.NaN;f.set(N.id,L),b.set(N.id,C),v.set(N.id,S?vn.activeMoveGizmoLabelZIndex:rd(w)),!(!L.screenPosition||L.isHidden||N.hideLabelAndStem||S||c&&r.has(N.id))&&A.push(sT(N,h,L.screenPosition))});const I=A.length>0?gm({points:A,viewportWidth:Math.max(1,e.canvas.clientWidth),viewportHeight:Math.max(1,e.canvas.clientHeight),cameraPitch:typeof m=="number"?m:0,config:vn.layoutConfig}):oT;return n.forEach(N=>{const h=r.get(N.id),S=T.has(N.id),k=I.placements[N.id],O=S?h:c?h??k:k,R=N.hideLabelAndStem||S?!1:c?(h==null?void 0:h.hiddenByLayout)??I.hiddenByLayout.has(N.id):I.hiddenByLayout.has(N.id);u.set(N.id,{...f.get(N.id)??la(),hiddenByLayout:R,angleRad:(O==null?void 0:O.angleRad)??(h==null?void 0:h.angleRad)??0,distance:(O==null?void 0:O.distance)??(h==null?void 0:h.distance)??vn.layoutConfig.stemDistance,attach:(O==null?void 0:O.attach)??(h==null?void 0:h.attach)??"center",zIndex:v.get(N.id)??0,anchorECEF:b.get(N.id)})}),u},uT=({state:e,lineLabelOptions:n,surfaceBlendMode:t})=>[sa.LINE_BLEND,Hs(e),n.appearance.themeStyle,n.background.style,n.text.fontFamily,n.text.fontWeight,t??""].join(":"),dT=({elementDiv:e,state:n})=>!n.screenPosition||n.visible===!1?!1:(e.style.left=`${n.screenPosition.x}px`,e.style.top=`${n.screenPosition.y}px`,e.style.transform="translate(-50%, -50%)",e.style.zIndex=`${n.zIndex??0}`,e.style.opacity=n.isOccluded?"0.75":"1",!0),Ua="transparent",md=e=>({...e,scale:Ke.hover.scale,ring:{widthPx:Ke.hover.ringSpreadPx,color:Ke.colors.hoverRing}}),cT=e=>{const n={sizePx:e.pixelSize,fill:e.fill,outline:e.outline,outlineWidthPx:e.outlineWidth};return{style:n,hoverStyle:md(n)}},mT=e=>({sizePx:e.markerSize,fill:Ua,outline:e.selected?e.selectedGlowColor??e.selectedTextColor??Ke.colors.surfaceMax:Ke.colors.surfaceMax,outlineWidthPx:e.markerStrokeWidth,ring:{widthPx:Ke.shadow.markerBlurRadiusPx,color:Ke.colors.shadowSoft,soft:!0}}),yT=e=>{const n={sizePx:e.tickWidthPx,barLengthPx:e.tickLengthPx,fill:e.tickColor,outline:Ua,outlineWidthPx:0};return{style:n,hoverStyle:md(n)}},pT=(e,n)=>({sizePx:e,fill:n,outline:Ua,outlineWidthPx:0}),yd=(e,n,t)=>(n?e.get(n):void 0)??t,gT=(e,n,t,o)=>e.map(r=>{const a=H(r.coordinate);return{id:r.id,...cT(r),place:()=>({positionECEF:yd(n,r.nodeId,a),hovered:t.has(r.id),occluded:o(r.id)})}}),fT=(e,n,t)=>e.map(o=>{const r=H(o.coordinate);return{id:`${o.id}-marker`,style:mT(o),place:()=>{const a=t(o.id);if(!(a!=null&&a.visible))return null;const i=sd(o,a.isOccluded);return{positionECEF:a.anchorECEF??yd(n,o.nodeId,r),occluded:i.isOccluded,opacity:i.opacity}}}}),pd=(e,n)=>({...n!=null&&n.hovered&&e.hoverStyle?e.hoverStyle:e.style,occluded:(n==null?void 0:n.occluded)===!0,opacity:(n==null?void 0:n.opacity)??1}),nr=e=>(e==null?void 0:e.capabilities.occludedLinesInScene)===!0&&typeof e.createMarkerCollection=="function",AT=new x,is=e=>{var n,t,o;return e?[e.sizePx,e.fill,e.outline,e.outlineWidthPx,e.barLengthPx??0,e.scale??1,((n=e.ring)==null?void 0:n.widthPx)??0,((t=e.ring)==null?void 0:t.color)??"",((o=e.ring)==null?void 0:o.soft)===!0].join("|"):""},gd=(e,n)=>[n!=null&&n.hovered&&e.model.hoverStyle?e.hoverStyleSignature:e.styleSignature,(n==null?void 0:n.occluded)===!0,(n==null?void 0:n.opacity)??1].join("|"),qr=e=>{const n=e.model.place();n&&e.handle.setPosition(n.positionECEF,n.acrossECEF),e.handle.setVisible(n!==null);const t=gd(e,n);t!==e.appliedSignature&&(e.handle.setStyle(pd(e.model,n)),e.appliedSignature=t)},za=(e,n)=>{const t=g.useRef(null),o=g.useRef(new Map);g.useEffect(()=>{if(!j(e)||!nr(e))return;const r=e.createMarkerCollection();t.current=r;const a=o.current;return()=>{a.clear(),t.current=null,j(e)&&r.destroy()}},[e]),g.useEffect(()=>{const r=t.current,a=o.current;if(!j(e)||!r)return;const i=new Set(n.map(s=>s.id));a.forEach((s,u)=>{i.has(u)||(s.handle.destroy(),a.delete(u))}),n.forEach(s=>{const u=is(s.style),l=is(s.hoverStyle),d=a.get(s.id);if(d){d.model=s,d.styleSignature=u,d.hoverStyleSignature=l,qr(d);return}const c=s.place(),m={model:s,styleSignature:u,hoverStyleSignature:l},y={...m,handle:r.addMarker({...pd(s,c),id:s.id,positionECEF:(c==null?void 0:c.positionECEF)??AT,acrossECEF:c==null?void 0:c.acrossECEF,visible:c!==null}),appliedSignature:gd(m,c)};a.set(s.id,y),qr(y)}),e.requestRender()},[e,n]),g.useEffect(()=>{if(j(e))return e.subscribePreRender(()=>{try{o.current.forEach(qr)}catch{}})},[e])},uo=Object.freeze({paddingBlockEx:.25,paddingInlineEx:.65,backdropInsetBlockEx:-.35,backdropInsetInlineEx:-.75}),vT=Object.freeze({[Wn.style.BRIGHT_ON_DARK]:"15, 23, 42",[Wn.style.DARK_ON_BRIGHT]:"255, 255, 255"}),fd=e=>({...e!=null&&e.fontSize?{"--carma-annotation-text-overlay-font-size":e.fontSize}:{},...(e==null?void 0:e.fontWeight)!==void 0?{"--carma-annotation-text-overlay-font-weight":String(e.fontWeight)}:{},...e!=null&&e.letterSpacing?{"--carma-annotation-text-overlay-letter-spacing":e.letterSpacing}:{},...typeof(e==null?void 0:e.textEchoBlurPx)=="number"?{"--carma-annotation-text-overlay-text-echo-blur-px":`${e.textEchoBlurPx}px`}:{},...e!=null&&e.textEchoShadow?{"--carma-annotation-text-overlay-text-echo-shadow":e.textEchoShadow}:{}}),TT=(e,n)=>{Object.entries(fd(n)).forEach(([t,o])=>e.style.setProperty(t,o))},En=(e,n,t,{unit:o="",min:r,max:a}={})=>{typeof t!="number"||!Number.isFinite(t)||e.style.setProperty(n,`${Ze(t,r??-1/0,a??1/0)}${o}`)},co=(e,n)=>typeof e=="number"&&Number.isFinite(e)?e:n,bT=({element:e,backdrop:n,surface:t,accentColor:o,visualOptions:r=Le})=>{var d,c,m,y,p;const{text:a,background:i,surface:s}=r,u=(A,f)=>{f!=null&&f.trim()&&e.style.setProperty(A,f)};e.style.setProperty("--carma-annotation-text-overlay-font-family",a.fontFamily),e.style.setProperty("--carma-annotation-text-overlay-font-weight",String(a.fontWeight)),o&&e.style.setProperty("--carma-annotation-text-overlay-glow-color",o),e.dataset.annotationThemeStyle=r.appearance.themeStyle,e.dataset.annotationTextOverlayBackgroundStyle=i.style,typeof i.surfaceAlpha=="number"&&Number.isFinite(i.surfaceAlpha)&&!((d=i.color)!=null&&d.trim())&&e.style.setProperty("--carma-annotation-text-overlay-backdrop-background",`rgba(${vT[r.appearance.themeStyle]}, ${Ze(i.surfaceAlpha,0,1)})`);const l=i.showBackdrop!==!1;n.style.display=l?"block":"none",t.style.display=l?"block":"none",u("--carma-annotation-text-overlay-text-color",a.color),u("--carma-annotation-text-overlay-text-blend-mode",a.blendMode),u("--carma-annotation-text-overlay-backdrop-background",i.color),u("--carma-annotation-text-overlay-backdrop-blend-mode",i.blendMode),u("--carma-annotation-text-overlay-surface-blend-mode",s.blendMode),u("--carma-annotation-text-overlay-text-echo-color",(c=a.echo)==null?void 0:c.color),u("--carma-annotation-text-overlay-text-echo-blend-mode",(m=a.echo)==null?void 0:m.blendMode),En(e,"--carma-annotation-text-overlay-text-echo-blur-px",(y=a.echo)==null?void 0:y.blurPx,{unit:"px",min:0}),En(e,"--carma-annotation-text-overlay-text-echo-opacity",(p=a.echo)==null?void 0:p.opacity,{min:0,max:1}),En(e,"--carma-annotation-text-overlay-surface-blur-px",i.blurPx,{unit:"px",min:0}),En(e,"--carma-annotation-text-overlay-surface-brightness-pct",i.brightnessPct,{unit:"%",min:0}),En(e,"--carma-annotation-text-overlay-surface-saturate-pct",i.saturatePct,{unit:"%",min:0}),En(e,"--carma-annotation-text-overlay-backdrop-radius",i.radiusEx,{unit:"ex",min:0}),En(e,"--carma-annotation-text-overlay-surface-edge-blur-px",i.edgeBlurPx,{unit:"px",min:0}),(typeof s.paddingBlockEx=="number"||typeof s.paddingInlineEx=="number")&&(e.style.setProperty("--carma-annotation-text-overlay-padding-block",`${Math.max(co(s.paddingBlockEx,uo.paddingBlockEx),0)}ex`),e.style.setProperty("--carma-annotation-text-overlay-padding-inline",`${Math.max(co(s.paddingInlineEx,uo.paddingInlineEx),0)}ex`)),(typeof i.insetBlockEx=="number"||typeof i.insetInlineEx=="number")&&e.style.setProperty("--carma-annotation-text-overlay-backdrop-inset",`${co(i.insetBlockEx,uo.backdropInsetBlockEx)}ex ${co(i.insetInlineEx,uo.backdropInsetInlineEx)}ex`)},Ye=Object.freeze({root:"carma-annotation-text-overlay",backdrop:"carma-annotation-text-overlay__backdrop",surface:"carma-annotation-text-overlay__surface",textEcho:"carma-annotation-text-overlay__text-echo",text:"carma-annotation-text-overlay__text"}),kT='[data-annotation-text-overlay-text-echo="true"]',NT='[data-annotation-text-overlay-text="foreground"]',IT=Object.freeze({fontSize:"17px",letterSpacing:"5%",fontWeight:800,textEchoBlurPx:4,textEchoShadow:"0 0 2px rgba(2, 6, 23, 0.42), 0 0 6px rgba(2, 6, 23, 0.3)"}),St=e=>{const n=document.createElement("div");return n.className=e,n},hT=({accentColor:e,visualOptions:n,styleOptions:t})=>{const o=St(Ye.root),r=St(Ye.backdrop),a=St(Ye.surface),i=St(Ye.textEcho),s=St(Ye.text);return i.dataset.annotationTextOverlayTextEcho="true",s.dataset.annotationTextOverlayText="foreground",bT({element:o,backdrop:r,surface:a,accentColor:e,visualOptions:n}),TT(o,t),o.append(r,a,i,s),o},Ad=(e,n)=>{[NT,kT].forEach(t=>{const o=e.querySelector(t);o&&o.textContent!==n&&(o.textContent=n)})},ST=e=>typeof e=="string"||typeof e=="number"?String(e):"",CT=({textColor:e,fontSize:n,styleOptions:t,visualOptions:o,surfaceBlendMode:r,hasInteraction:a})=>{const i=(t==null?void 0:t.fontSize)===void 0?n:void 0;return{pointerEvents:a?"auto":"none",cursor:a?"pointer":"default","--carma-annotation-text-overlay-font-family":o.text.fontFamily,"--carma-annotation-text-overlay-font-weight":String(o.text.fontWeight),...i?{"--carma-annotation-text-overlay-font-size":i}:{},...fd(t),...e?{"--carma-annotation-text-overlay-text-color":e}:{},...r?{"--carma-annotation-text-overlay-backdrop-blend-mode":r,"--carma-annotation-text-overlay-surface-blend-mode":r}:{}}},vd=({content:e,selected:n,textColor:t,fontSize:o,styleOptions:r,visualOptions:a=Le,surfaceBlendMode:i,onClick:s,onDoubleClick:u,onLongPress:l,longPressDurationMs:d=320})=>{const c=g.useRef(null),m=g.useRef(!1),y=ST(e),p=!!(s||u||l),A=g.useCallback(()=>{c.current!==null&&(window.clearTimeout(c.current),c.current=null)},[]),f=g.useCallback(b=>{if(m.current){m.current=!1,b.preventDefault(),b.stopPropagation();return}s==null||s()},[s]),v=g.useCallback(()=>{l&&(A(),m.current=!1,c.current=window.setTimeout(()=>{c.current=null,m.current=!0,l()},d))},[A,d,l]);return g.useEffect(()=>A,[A]),E.jsxs("div",{className:Ye.root,"data-annotation-theme-style":a.appearance.themeStyle,"data-annotation-text-overlay-background-style":a.background.style,"data-selected":n?"true":void 0,style:CT({textColor:t,fontSize:o,styleOptions:r,visualOptions:a,surfaceBlendMode:i,hasInteraction:p}),onClick:s?f:void 0,onDoubleClick:u,onPointerDown:l?v:void 0,onPointerUp:l?A:void 0,onPointerLeave:l?A:void 0,onPointerCancel:l?A:void 0,children:[E.jsx("div",{className:Ye.backdrop}),E.jsx("div",{className:Ye.surface}),E.jsx("div",{className:Ye.textEcho,"data-annotation-text-overlay-text-echo":"true",children:y}),E.jsx("div",{className:Ye.text,"data-annotation-text-overlay-text":"foreground",children:y})]})};vd.__docgenInfo={description:"",methods:[],displayName:"TextOverlay",props:{content:{required:!0,tsType:{name:"ReactNode"},description:""},selected:{required:!1,tsType:{name:"boolean"},description:""},textColor:{required:!1,tsType:{name:"string"},description:""},fontSize:{required:!1,tsType:{name:"string"},description:""},styleOptions:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
})`,computed:!0}},surfaceBlendMode:{required:!1,tsType:{name:'CSSProperties["mixBlendMode"]',raw:'CSSProperties["mixBlendMode"]'},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onDoubleClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onLongPress:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},longPressDurationMs:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"320",computed:!1}}}};const ss=Object.freeze({widthPx:1,occludedDash:Object.freeze({dashPx:3,gapPx:3})}),ET=(e,n,t,o)=>{const r=e.getPickRay(n);if(!r)return null;const a=r.direction.dot(o);if(!(Math.abs(a)>1e-9))return null;const i=new x().subVectors(t,r.origin).dot(o)/a;return i>0?r.origin.clone().addScaledVector(r.direction,i):null},OT=(e,n,t)=>{const o=e.worldToScreen(n),r=o?e.getPickRay(o):null;if(!o||!r)return null;const a=u=>ET(e,{x:o.x+u.x,y:o.y+u.y},n,r.direction),i=a(t.start),s=a(t.end);return i&&s?[i,s]:null},ls=(e,{isOccluded:n,opacity:t})=>({color:e,width:ss.widthPx,overlay:!0,halo:!1,opacity:t,...n?{dash:ss.occludedDash}:{}}),us=[],LT=(e,n,t)=>{const o=g.useRef(t);o.current=t;const r=g.useRef(null),a=g.useRef(new Map);g.useEffect(()=>{if(!j(e))return;const i=e.createLineCollection();r.current=i;const s=a.current,u=e.subscribePreRender(()=>{s.forEach((l,d)=>{const c=o.current(d),m=c?OT(e,c.anchorECEF,c.segment):null;if(!c||!m){l.line.setPositions(us);return}const y=`${c.isOccluded}:${c.opacity}`;y!==l.styleKey&&(l.line.setStyle(ls(l.color,c)),l.styleKey=y),l.line.setPositions(m)})});return()=>{u(),j(e)&&(s.forEach(l=>l.line.destroy()),i.destroy()),s.clear(),r.current=null}},[e]),g.useEffect(()=>{const i=r.current;if(!i||!j(e))return;const s=a.current,u=new Map(n.map(l=>[l.id,l.lineColor??vn.stemColor]));s.forEach((l,d)=>{u.get(d)!==l.color&&(l.line.destroy(),s.delete(d))}),u.forEach((l,d)=>{s.has(d)||s.set(d,{line:i.addLine({id:`${d}-stem`,positions:us,...ls(l,{isOccluded:!1,opacity:1})}),color:l,styleKey:"false:1"})}),e.requestRender()},[e,n])},Td=({engine:e,liveAnchors:n,updatePositions:t,computeStates:o,createEmptyState:r})=>{const a=g.useRef({frameKey:null,sceneSnapshot:null,statesById:new Map}),i=g.useRef(!1),s=g.useRef(!1),u=g.useCallback((c=!1)=>{a.current={frameKey:null,sceneSnapshot:null,statesById:c?new Map:a.current.statesById}},[]);g.useEffect(()=>{if(!j(e)){i.current=!1;return}const c=e.subscribeCameraMove({onMoveStart:()=>{i.current=!0,u()},onMoveEnd:()=>{i.current=!1,u(),t(),e.requestRender()}});return()=>{i.current=!1,c()}},[e,u,t]);const l=g.useCallback(c=>{const m=tT(e);if(a.current.frameKey!==m){const y=ud(e),p=n.size>0,A=s.current&&!p;s.current=p;const f=p||A||!dd(a.current.sceneSnapshot,y);a.current={frameKey:m,sceneSnapshot:y,statesById:f?o({previousStatesById:a.current.statesById,isCameraMoving:i.current}):a.current.statesById}}return a.current.statesById.get(c)??r()},[o,r,e,n]),d=g.useCallback(c=>a.current.statesById.get(c),[]);return{resolveState:l,readCachedState:d,invalidate:u}},RT=e=>e.stem.isConnected&&e.stemLine.isConnected&&e.labelRoot.isConnected&&e.pointLabelRoot.isConnected,wT=(e,n,t,o,r="runtime-point-label",a=Le)=>{const{setLabelOverlayElement:i,removeLabelOverlayElement:s,invalidatePositions:u,updatePositions:l}=Do(),d=g.useRef(n),c=g.useRef(new Set),m=g.useRef(new Map),y=g.useRef(new Map),p=g.useRef(new Map),A=nr(e),f=A?u:l,v=g.useRef(new Map),b=g.useCallback(({previousStatesById:R,isCameraMoving:L})=>lT({engine:e,labels:d.current,liveAnchors:t,isInPreviewNodeLink:o,previousStatesById:R,isCameraMoving:L,areaLabelSizeById:p.current,areaLabelFitByKey:y.current}),[e,o,t]),{resolveState:T,readCachedState:I,invalidate:N}=Td({engine:e,liveAnchors:t,updatePositions:f,computeStates:b,createEmptyState:la});g.useEffect(()=>{d.current=n,N(),f(),e==null||e.requestRender()},[e,N,o,n,f]);const h=g.useMemo(()=>n.filter(R=>!R.hideLabelAndStem||R.markerOnlyPointerEvents===!0&&(!!R.onClick||!!R.onHoverChange||!!R.onLongPress)),[n]),S=g.useCallback((R,L)=>{const C=m.current.get(R);if(C&&RT(C))return C;const w=Hy(L);return w?(m.current.set(R,w),w):null},[]);g.useEffect(()=>{let R=!1;const L=new Set;h.forEach(C=>{var $;const w=C.renderStyle===sa.LINE_BLEND,_=C.mixBlendMode??jv(a),B=U=>eT({label:C,overlayState:U,areaLabelSurfaceBlendMode:_,markerInScene:A}),P=B(I(C.id)??la()),F=w?uT({state:P,lineLabelOptions:a,surfaceBlendMode:_}):Hs(P);L.add(C.id);const J=U=>{const K=B(T(C.id)),ee=sd(C,K.isOccluded===!0);if(w){const te=dT({elementDiv:U,state:K});if(C.areaFit){te&&(U.style.opacity=`${ee.opacity}`);const pe=Kv(U);pe&&p.current.set(C.id,pe)}return te}const ne=S(C.id,U);if(!ne)return!1;const z=Yy({elementDiv:U,domRefs:ne,state:K});if(A&&!K.hideLabelAndStem){const te=z?Wy({domRefs:ne,state:K}):null;te?v.current.set(C.id,{segment:te,...ee}):v.current.delete(C.id)}return z&&(ne.pointLabelRoot.style.opacity=`${ee.opacity}`),z},V=w?E.jsx(vd,{content:P.content,selected:P.selected,textColor:P.textColor,fontSize:P.fontSize,styleOptions:IT,visualOptions:a,surfaceBlendMode:_,onClick:P.onClick,onDoubleClick:P.onDoubleClick,onLongPress:P.onLongPress,longPressDurationMs:P.longPressDurationMs}):Yc(P);c.current.has(C.id)||(R=!0,m.current.delete(C.id)),i({id:Rr(r,C.id),contentKey:F,content:V,zIndex:(($=I(C.id))==null?void 0:$.zIndex)??0,updatePosition:J})}),c.current.forEach(C=>{L.has(C)||(R=!0,m.current.delete(C),v.current.delete(C),s(Rr(r,C)))}),c.current=L,f(),R&&(e==null||e.requestRender())},[i,e,A,h,r,a,I,s,T,S,f]),g.useEffect(()=>()=>{c.current.forEach(R=>{s(Rr(r,R))}),c.current.clear(),m.current.clear(),v.current.clear()},[r,s]);const k=g.useCallback(R=>{const L=I(R);return L&&L.screenPosition&&!L.isHidden&&!L.hiddenByLayout?L:null},[I]),O=g.useMemo(()=>{if(!A)return{markers:[],stemLabels:[]};const R=h.filter(L=>L.renderStyle!==sa.LINE_BLEND);return{markers:fT(R.filter(id).map(L=>({...L,...ld(L)})),t,L=>{const C=k(L);return{visible:C!==null,anchorECEF:C==null?void 0:C.anchorECEF,isOccluded:(C==null?void 0:C.isOccluded)===!0}}),stemLabels:R.filter(L=>L.hideLabelAndStem!==!0)}},[A,t,h,k]);za(e,O.markers),LT(A?e:null,O.stemLabels,R=>{var w;const L=(w=k(R))==null?void 0:w.anchorECEF,C=v.current.get(R);return L&&C?{anchorECEF:L,...C}:null})},xT=()=>({screenPosition:null,isInViewport:!1,isHidden:!0,isOccluded:!1}),qT=Object.freeze({longPressDurationMs:320}),_r=(e,n)=>`${e}-${n}`,_T=e=>[e.id,e.pixelSize,e.fill,e.outline,e.outlineWidth,`${e.longPressDurationMs??""}`,sr(e.onClick),sr(e.onHoverChange),sr(e.onLongPress)].join(":"),bd=({interactive:e,hitAreaOnly:n=!1,onClick:t,onHoverChange:o,onLongPress:r,longPressDurationMs:a=qT.longPressDurationMs,markerStyle:i})=>{const[s,u]=g.useState(!1),l=s&&!n,d=g.useRef(void 0),c=g.useRef(!1),m=g.useCallback(()=>{d.current!==void 0&&(window.clearTimeout(d.current),d.current=void 0)},[]),y=g.useCallback(v=>{if(v.stopPropagation(),v.button!==0||!r){m();return}c.current=!1,m(),d.current=window.setTimeout(()=>{c.current=!0,r()},a)},[m,a,r]),p=g.useCallback(v=>{if(v.stopPropagation(),c.current){c.current=!1;return}t==null||t()},[t]),A=g.useCallback(()=>{u(!0),o==null||o(!0)},[o]),f=g.useCallback(()=>{m(),u(!1),o==null||o(!1)},[m,o]);return g.useEffect(()=>m,[m]),E.jsx("div",{"data-runtime-point-marker-shell":"true",style:{position:"relative",width:"0px",height:"0px",overflow:"visible",pointerEvents:"none"},children:E.jsx("div",{"data-runtime-point-marker-circle":"true",style:{position:"absolute",left:"0px",top:"0px",transform:l?`translate(-50%, -50%) scale(${Ke.hover.scale})`:"translate(-50%, -50%)",borderRadius:"999px",boxSizing:"border-box",pointerEvents:e?"auto":"none",cursor:e?"pointer":"default",transition:Us(),boxShadow:l?zs():"none",filter:l?Vs():"none",...i},onClick:e?p:void 0,onMouseDown:e?y:void 0,onMouseUp:e?m:void 0,onMouseEnter:e?A:void 0,onMouseLeave:e?f:void 0})})},PT=(e,n,t,o="runtime-point-marker")=>{const{setLabelOverlayElement:r,removeLabelOverlayElement:a,invalidatePositions:i,updatePositions:s}=Do(),u=g.useRef(n),l=g.useRef(new Set),d=nr(e),c=d?i:s,m=g.useRef(new Set),y=g.useCallback(({previousStatesById:b,isCameraMoving:T})=>{const I=new Map,N=T&&(e==null?void 0:e.capabilities.occlusionPerFrame)!==!0||t.size>0;return u.current.forEach(h=>{var O;const S=h.nodeId?t.get(h.nodeId):void 0,k=cd({engine:e,coordinate:S?Fn(S):h.coordinate,shouldTestOcclusion:!N});I.set(h.id,N?{...k,isOccluded:((O=b.get(h.id))==null?void 0:O.isOccluded)??!1}:k)}),I},[e,t]),{resolveState:p,readCachedState:A,invalidate:f}=Td({engine:e,liveAnchors:t,updatePositions:c,computeStates:y,createEmptyState:xT});g.useEffect(()=>{u.current=n,f(!0),c(),e==null||e.requestRender()},[n,e,f,c]),g.useEffect(()=>{const b=new Set;n.forEach(T=>{const I=_r(o,T.id);b.add(T.id);const N=!!(T.onClick||T.onHoverChange||T.onLongPress),h=d&&N?k=>{var O;k?m.current.add(T.id):m.current.delete(T.id),e==null||e.requestRender(),(O=T.onHoverChange)==null||O.call(T,k)}:T.onHoverChange,S={id:I,zIndex:$s.zIndex.pointMarker,contentKey:`${_T(T)}:${d}`,content:E.jsx(bd,{interactive:N,hitAreaOnly:d,onClick:T.onClick,onHoverChange:h,onLongPress:T.onLongPress,longPressDurationMs:T.longPressDurationMs}),updatePosition:k=>{const O=p(T.id);if(!O.screenPosition||O.isHidden)return!1;let R=O.screenPosition;const L=T.nodeId?t.get(T.nodeId):void 0;if(L&&j(e)){const w=e.worldToScreen(L);w!==null&&(R={x:w.x,y:w.y})}k.style.left=`${R.x}px`,k.style.top=`${R.y}px`,k.style.transform="none";const C=k.querySelector('[data-runtime-point-marker-circle="true"]');return C?(C.style.width=`${T.pixelSize}px`,C.style.height=`${T.pixelSize}px`,d?(C.style.background="transparent",C.style.border="none",!0):(C.style.background=T.fill,C.style.border=`${T.outlineWidth}px ${O.isOccluded?"dotted":"solid"} ${T.outline}`,!0)):!1}};r(S)}),l.current.forEach(T=>{b.has(T)||(m.current.delete(T),a(_r(o,T)))}),l.current=b,c(),e==null||e.requestRender()},[r,e,d,t,o,n,a,p,c]),g.useEffect(()=>()=>{l.current.forEach(b=>{a(_r(o,b))}),l.current.clear()},[o,a]);const v=g.useMemo(()=>d?gT(n,t,m.current,b=>{var T;return((T=A(b))==null?void 0:T.isOccluded)===!0}):[],[d,t,n,A]);za(e,v)};bd.__docgenInfo={description:"",methods:[],displayName:"PointMarkerOverlayShell",props:{interactive:{required:!0,tsType:{name:"boolean"},description:""},hitAreaOnly:{required:!1,tsType:{name:"boolean"},description:"The engine draws the marker: only the invisible hit area, without hover visuals.",defaultValue:{value:"false",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onHoverChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(hovered: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"hovered"}],return:{name:"void"}}},description:""},onLongPress:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},longPressDurationMs:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"pointMarkerVisualizerDefaults.longPressDurationMs",computed:!0}},markerStyle:{required:!1,tsType:{name:"CSSProperties"},description:""}}};const kd=({directLabelText:e,verticalLabelText:n,horizontalLabelText:t})=>({showVerticalLabel:n!==null&&n!==e,showHorizontalLabel:t!==null&&t!==e}),ut=()=>({auxiliaryPoint:new x,auxiliaryScreen:{x:0,y:0}}),Nd=({anchorPointECEF:e,targetPointECEF:n,scratch:t})=>{const o=Io(e),r=Io(n);return!Number.isFinite(o.longitude)||!Number.isFinite(o.latitude)||!Number.isFinite(r.altitude)?null:qs(o.longitude,o.latitude,r.altitude,t.auxiliaryPoint)},dS=({firstCorner:e,oppositeCorner:n})=>{const t=H(e),o=H(n),r=Bl(t,o);return r?[t,r.adjacentHorizontalCorner,o,r.adjacentVerticalCorner,t]:null},Se=({x:e,y:n})=>({x:e,y:n}),cS=(e,n)=>{const t=e.worldToScreen(n);return t?Se(t):null},Xe=(e,n,t)=>{const o=n?e.get(n):void 0;return o?o.clone():H(t)},Id=({overlay:e})=>e.anchorCoordinateRole!==qt.END_COORDINATE,ds=(e,n)=>e.startNodeId!==void 0&&n.get(e.startNodeId)!==void 0||e.endNodeId!==void 0&&n.get(e.endNodeId)!==void 0,To=(e,n,t)=>{const o=e.distanceTriangleOverlay;if(!o||!e.startCoordinate||!e.endCoordinate)return null;const r=Xe(n,e.startNodeId,e.startCoordinate),a=Xe(n,e.endNodeId,e.endCoordinate),i=Id({overlay:o}),s=i?r:a,u=i?a:r,l=Nd({anchorPointECEF:s,targetPointECEF:u,scratch:t});return l?{anchorECEF:s,auxiliaryECEF:l.clone(),targetECEF:u}:null},hd=({engine:e,edge:n,scratch:t,previousOutsideSigns:o,formatOptions:r,liveAnchors:a})=>{const i=n.distanceTriangleOverlay;if(!i||!n.startCoordinate||!n.endCoordinate)return null;const s=Xe(a,n.startNodeId,n.startCoordinate),u=Xe(a,n.endNodeId,n.endCoordinate),l=e.worldToScreen(s),d=e.worldToScreen(u);if(l===null||d===null)return null;const c=Se(l),m=Se(d),y=Id({overlay:i}),p=y?n.startCoordinate:n.endCoordinate,A=y?n.endCoordinate:n.startCoordinate,f=y?s:u,v=y?u:s,b=y?c:m,T=y?m:c,I=Nd({anchorPointECEF:f,targetPointECEF:v,scratch:t});if(!I)return null;const N=e.worldToScreen(I,t.auxiliaryScreen);if(N===null)return null;const h=Se(N),S=np({anchor:b,target:T,aux:h,anchorAltitudeMeters:p.altitude,targetAltitudeMeters:A.altitude,previousOutsideSigns:o}),k=tt(f.distanceTo(v),r.lengthMeters),O=f.distanceTo(I),R=I.distanceTo(v),L=O>xe.geometryEpsilonMeters?tt(O,r.lengthMeters):null,C=R>xe.geometryEpsilonMeters?tt(R,r.lengthMeters):null,w=kd({directLabelText:k,verticalLabelText:L,horizontalLabelText:C});return{anchorPointECEF:f,targetPointECEF:v,auxiliaryPointECEF:I,anchorScreenPosition:b,targetScreenPosition:T,auxiliaryScreenPosition:h,directLabelText:k,verticalLabelText:L,horizontalLabelText:C,showVerticalLabel:w.showVerticalLabel,showHorizontalLabel:w.showHorizontalLabel,directOutsideReferencePoint:S.directOutsideReferencePoint,verticalOutsideReferencePoint:S.verticalOutsideReferencePoint,horizontalOutsideReferencePoint:S.horizontalOutsideReferencePoint,nextOutsideSigns:S.nextOutsideSigns}},MT=({edgeSegments:e,engine:n,formatOptions:t,liveAnchors:o,occludedLinesInScene:r,surfaceKey:a,activeEditedNodeId:i,blockEdgeInteractions:s,onEdgeClick:u,onAnnotationSelect:l})=>e.flatMap(d=>{var v;const c=i&&d.startNodeId&&d.endNodeId&&u?()=>u(d.startNodeId,d.endNodeId):void 0,m=!s&&l&&((v=d.distanceTriangleOverlay)!=null&&v.annotationId)?()=>l(d.distanceTriangleOverlay.annotationId):void 0,y=c??m,p=r&&d.overlayDashed?[]:lr({id:`${a}-runtime-edge-overlay-${d.id}`,getSvgLine:()=>{if(!j(n))return null;const b=n.worldToScreen(Xe(o,d.startNodeId,d.startCoordinate)),T=n.worldToScreen(Xe(o,d.endNodeId,d.endCoordinate));return b===null||T===null?null:{start:Se(b),end:Se(T)}},stroke:d.stroke,strokeWidth:d.strokeWidth,dashed:d.overlayDashed,dashPattern:d.overlayDashPattern,hitTargetStrokeWidth:10,onLineClick:y});if(!d.distanceTriangleOverlay||d.distanceTriangleOverlay.showComponents===!1||!j(n)||r)return p;const A=ut(),f=()=>hd({engine:n,edge:d,scratch:A,formatOptions:t,liveAnchors:o});return[...p,...lr({id:`${a}-runtime-edge-overlay-${d.id}-vertical`,getSvgLine:()=>{const b=f();return!b||!b.verticalLabelText?null:{start:b.anchorScreenPosition,end:b.auxiliaryScreenPosition}},stroke:xe.verticalLineColor,strokeWidth:d.strokeWidth,dashed:!0,dashPattern:d.overlayDashPattern,hitTargetStrokeWidth:8,onLineClick:y}),...lr({id:`${a}-runtime-edge-overlay-${d.id}-horizontal`,getSvgLine:()=>{const b=f();return!b||!b.horizontalLabelText?null:{start:b.auxiliaryScreenPosition,end:b.targetScreenPosition}},stroke:xe.horizontalLineColor,strokeWidth:d.strokeWidth,dashed:!0,dashPattern:d.overlayDashPattern,hitTargetStrokeWidth:8,onLineClick:y})]}),DT=({edgeSegments:e,engine:n,formatOptions:t,liveAnchors:o,occludedLinesInScene:r})=>e.flatMap(a=>{const i={id:a.id,start:H(a.startCoordinate),end:H(a.endCoordinate),stroke:a.stroke,strokeWidth:a.strokeWidth,occludedDashed:r&&a.overlayDashed===!0,ruler:a.ruler===!0,rulerStartMeters:a.rulerStartMeters,startNodeId:a.startNodeId,endNodeId:a.endNodeId};if(!j(n)||!a.distanceTriangleOverlay||a.distanceTriangleOverlay.showComponents===!1)return[i];const s=ut(),u=To(a,o,s);if(!u)return[i];const l=A=>A>xe.geometryEpsilonMeters?tt(A,t.lengthMeters):null,d=l(u.anchorECEF.distanceTo(u.auxiliaryECEF)),c=l(u.auxiliaryECEF.distanceTo(u.targetECEF)),m=kd({directLabelText:tt(u.anchorECEF.distanceTo(u.targetECEF),t.lengthMeters),verticalLabelText:d,horizontalLabelText:c}),y={anchorPointECEF:u.anchorECEF,auxiliaryPointECEF:u.auxiliaryECEF,targetPointECEF:u.targetECEF,verticalLabelText:d,horizontalLabelText:c,showVerticalLabel:m.showVerticalLabel,showHorizontalLabel:m.showHorizontalLabel},p=[];if(y.showVerticalLabel&&y.verticalLabelText){const A=ut();p.push({id:`${a.id}-vertical`,halo:!1,start:y.anchorPointECEF,end:y.auxiliaryPointECEF,stroke:xe.verticalLineColor,strokeWidth:a.strokeWidth,occludedDashed:r,ruler:a.ruler===!0,recompute:f=>{if(!ds(a,f))return null;const v=To(a,f,A);return v?[v.anchorECEF,v.auxiliaryECEF]:null}})}if(y.showHorizontalLabel&&y.horizontalLabelText){const A=ut();p.push({id:`${a.id}-horizontal`,halo:!1,start:y.auxiliaryPointECEF,end:y.targetPointECEF,stroke:xe.horizontalLineColor,strokeWidth:a.strokeWidth,occludedDashed:r,ruler:a.ruler===!0,recompute:f=>{if(!ds(a,f))return null;const v=To(a,f,A);return v?[v.auxiliaryECEF,v.targetECEF]:null}})}return[i,...p]}),cs=e=>{var n;return((n=e.distanceTriangleOverlay)==null?void 0:n.annotationId)??e.id},BT=e=>e.flatMap(n=>{var i,s;const t=[],o=Number.isFinite(n.strokeWidth)?n.strokeWidth:X.sizes.edgeStrokeWidth,r=n.overlayDashPattern??X.patterns.edgeDashPattern;let a=0;for(let u=0;u<n.coordinates.length-1;u+=1){const l=n.coordinates[u],d=n.coordinates[u+1];if(!l||!d)continue;const c=a;a+=H(l).distanceTo(H(d));const m=(i=n.nodeIds)==null?void 0:i[u],y=((s=n.nodeIds)==null?void 0:s[u+1])??(n.nodeIds&&n.coordinates.length===n.nodeIds.length+1&&u===n.nodeIds.length-1?n.nodeIds[0]:void 0);t.push({id:`${n.id}-${u}`,annotationId:n.annotationId,startNodeId:m,endNodeId:y,startCoordinate:l,endCoordinate:d,stroke:n.stroke,strokeWidth:o,overlayDashPattern:r,...n.overlayDashed?{overlayDashed:!0}:{},...n.ruler?{ruler:!0,rulerStartMeters:c}:{},...n.showSegmentLengthLabels?{showSegmentLengthLabels:!0}:{},distanceTriangleOverlay:u===0?n.distanceTriangleOverlay:void 0})}return t}),we=Object.freeze({pointLabelCollisionSelector:'[data-pillbutton-root="true"], [data-point-label-content-root="true"]',svgNamespace:"http://www.w3.org/2000/svg",distanceTriangle:Object.freeze({cornerDotRadiusPx:1.25/2}),midpointMarker:Object.freeze({...Kc({markerDiameterPx:X.sizes.pointPixelSize,markerStrokeWidthPx:X.sizes.pointOutlineWidth}),tickColor:Ke.colors.surfaceStrong,minOverlayZIndex:$s.zIndex.interactionHandleFloor})}),le=Object.freeze({cornerOverlay:Object.freeze({minBoxPx:20,paddingPx:6,targetRadiusPx:20,segments:20,strokeWidthPx:1.25,color:ap(),straightHitTargetPx:20,fallbackFovRad:Ps})}),ua=e=>`annotation-overlay-distance-triangle-label-layer-${e}`,FT=[],GT=yT(we.midpointMarker),jT=(e,n,t)=>e.map(o=>{const r=H(o.startCoordinate),a=H(o.endCoordinate),i=new x,s=new x;return{id:`${o.id}-insert-tick`,...GT,place:()=>{const u=o.startNodeId&&n.get(o.startNodeId)||r,l=o.endNodeId&&n.get(o.endNodeId)||a;return{positionECEF:i.addVectors(u,l).multiplyScalar(.5),acrossECEF:s.subVectors(l,u),hovered:t.has(o.id)}}}}),HT=({anchorECEF:e,auxiliaryECEF:n,targetECEF:t},o)=>{const r=rt.referenceLineEpsilonMeters;if(e.distanceTo(n)<=r||n.distanceTo(t)<=r)return e.distanceTo(t)<=r?null:{arc:null,dot:new x().addVectors(e,t).multiplyScalar(.5)};if(!(o>0))return null;const{targetRadiusPx:a,segments:i}=le.cornerOverlay,s=sl(n,e,t,a/o,i),u=s==null?void 0:s[Math.floor(s.length/2)];return!s||s.length<2||!u?null:{arc:s,dot:new x().addVectors(n,u).multiplyScalar(.5)}},UT=(e,n,t)=>{const{color:o,strokeWidthPx:r}=le.cornerOverlay,a=pT(2*we.distanceTriangle.cornerDotRadiusPx,o),i=n.filter(s=>s.distanceTriangleOverlay!==void 0&&s.distanceTriangleOverlay.showComponents!==!1).map(s=>{const u=ut();let l=null,d=null;return{edge:s,resolve:()=>{const m=e.getFrameKey();if(m===null||m!==l){l=m;const y=To(s,t,u);d=y?HT(y,e.getScreenPixelsPerMeterAt(y.auxiliaryECEF)):null}return d}}});return{lines:i.map(({edge:s,resolve:u})=>{const l=H(s.startCoordinate);return{id:`${s.id}-corner-arc`,start:l,end:l,stroke:o,strokeWidth:r,occludedDashed:!0,ruler:!1,halo:!1,followsView:!0,recompute:()=>{var d;return((d=u())==null?void 0:d.arc)??FT}}}),markers:i.map(({edge:s,resolve:u})=>({id:`${s.id}-corner-dot`,style:a,place:()=>{var d;const l=(d=u())==null?void 0:d.dot;return l?{positionECEF:l}:null}}))}},Sd=(e,n,t)=>[e.startNodeId,e.endNodeId].filter(r=>r!==void 0).some(r=>r===n||t(r)),Cd=e=>[e.id,e.start.x,e.start.y,e.start.z,e.end.x,e.end.y,e.end.z,e.stroke,e.strokeWidth,e.occludedDashed,e.ruler,e.rulerStartMeters??0,e.halo!==!1,e.segmentPairs===!0].join(":"),zT=e=>({snappable:e.createLineCollection(),excludedFromDragSamples:e.createLineCollection({excludeFromDragSamples:!0})}),VT=e=>{e.snappable.destroy(),e.excludedFromDragSamples.destroy()},$T=(e,n)=>n?e.excludedFromDragSamples:e.snappable,Ed=(e,n,t,o)=>{const r=$T(n,o).addLine({id:t.id,positions:[t.start,t.end],segmentPairs:t.segmentPairs,color:t.stroke,width:t.strokeWidth,occludedDashed:t.occludedDashed,ruler:t.ruler,rulerStartMeters:t.rulerStartMeters,halo:t.halo!==!1,visible:!0}),a=()=>{if(j(e))try{r.destroy()}catch(i){console.warn("[annotations/runtime] Ignoring committed edge destroy error.",i)}};return{signature:Cd(t),line:t,sceneLine:r,excludedFromDragSamples:o,startNodeId:t.startNodeId,endNodeId:t.endNodeId,baseStart:t.start,baseEnd:t.end,recompute:t.recompute,overridden:!1,destroy:a}},Pr=e=>{e.forEach(n=>{n.destroy()}),e.clear()},WT=(e,n)=>{const t=n.size>0;e.forEach(o=>{const r=t||o.line.followsView===!0;let a=null;if(o.recompute)a=r?o.recompute(n):null;else{const i=o.startNodeId?n.get(o.startNodeId):void 0,s=o.endNodeId?n.get(o.endNodeId):void 0;(i!==void 0||s!==void 0)&&(a=[i??o.baseStart,s??o.baseEnd])}a===null&&!o.overridden||(o.sceneLine.setPositions(a??[o.baseStart,o.baseEnd]),o.overridden=a!==null&&r)})},YT=(e,n,t,o,r)=>{t.forEach((a,i)=>{const s=Sd(a,o,l=>r.get(l)!==void 0);if(s===a.excludedFromDragSamples)return;a.destroy();const u=Ed(e,n,a.line,s);u.overridden=!1,t.set(i,u)})},Od=(e,n,t,o)=>{const r=g.useRef(null),a=g.useRef(new Map);g.useEffect(()=>{if(!j(e))return;const s=zT(e);return r.current=s,()=>{Pr(a.current),r.current===s&&(r.current=null),j(e)&&VT(s)}},[e]);const i=g.useRef(t);i.current=t,g.useEffect(()=>{const s=r.current;if(!j(e)||!s){Pr(a.current);return}return(l=>{const d=new Set(l.map(c=>c.id));a.current.forEach((c,m)=>{d.has(m)||(c.destroy(),a.current.delete(m))}),l.forEach(c=>{const m=Cd(c),y=a.current.get(c.id);if((y==null?void 0:y.signature)===m){y.line=c,y.recompute=c.recompute;return}y==null||y.destroy(),a.current.set(c.id,Ed(e,s,c,Sd(c,i.current,p=>o.get(p)!==void 0)))}),e.requestRender()})(n),()=>{Pr(a.current),j(e)&&e.requestRender()}},[e,o,n]),g.useEffect(()=>{if(!j(e))return;const s=()=>{const l=r.current;l&&YT(e,l,a.current,t,o)};s();const u=e.subscribePreRender(()=>{try{s(),WT(a.current,o)}catch{}});return()=>{u()}},[t,e,o])},KT=[],QT=(e,{edgeSegments:n,insertTickSegments:t,showInsertTicks:o,liveAnchors:r})=>{const a=nr(e),i=g.useRef(new Set),s=o?t:KT;g.useEffect(()=>{i.current.clear()},[s]);const u=g.useCallback((d,c)=>{c?i.current.add(d):i.current.delete(d),e==null||e.requestRender()},[e]),l=g.useMemo(()=>{if(!a)return{lines:[],markers:[]};const d=UT(e,n,r);return{lines:d.lines,markers:[...jT(s,r,i.current),...d.markers]}},[n,e,a,r,s]);return Od(a?e:null,l.lines,null,r),za(e,l.markers),{handlesInScene:a,onInsertTickHoverChange:a?u:void 0}},tr=(e,n)=>{Object.assign(e.style,n)},Va=(e,n,t=ve.LABEL)=>{const o=nu(e,t);if(!o)return null;const r=document.createElement("div");return r.id=n,r.dataset.annotationOverlayLayer="true",tr(r,{position:"absolute",inset:"0",overflow:"hidden",pointerEvents:"none",userSelect:"none",webkitUserSelect:"none",zIndex:"auto"}),o.appendChild(r),r},Ld=(e,n)=>Object.fromEntries(Object.entries(n).map(([t,o])=>[t,o?Va(e,o,t):null])),Qt=e=>{e==null||e.remove()},XT=Object.freeze({direct:{labelOffsetPx:xe.lineLabelOffsetPx},vertical:{labelOffsetPx:xe.lineLabelOffsetPx,labelFlippedBaselineOffsetPx:td.verticalFlippedBaselineOffsetPx,labelRotationMode:Qc.CLOCKWISE},horizontal:{labelOffsetPx:xe.lineLabelOffsetPx}}),ZT=({kind:e,outsideReferencePoint:n,anchorRatio:t})=>({...XT[e],anchorRatio:t===void 0?void 0:fa(t),getLabelOutsideReferencePoint:n?()=>Se(n):void 0}),Rd=({x:e,y:n,angleRad:t,anchor:o})=>`translate(${Math.round(e)}px, ${Math.round(n)}px) ${o==="left"?"translate(0%, -50%)":o==="right"?"translate(-100%, -50%)":"translate(-50%, -50%)"} rotate(${t}rad)`,JT=({start:e,end:n,kind:t,outsideReferencePoint:o,shortEdgeOffsetPx:r=Le.layout.shortEdgeOffsetPx,useShortEdgeRules:a=!0,previousShouldFlip:i=!1,anchorRatio:s})=>{const u=Xc({svgLine:{start:Se(e),end:Se(n)},options:ZT({kind:t,outsideReferencePoint:o,anchorRatio:s}),previousShouldFlip:i,sideSwitchThresholdPx:td.sideHysteresisPx});if(!u)return null;if(a&&u.lineLengthPx<xe.lineLabelMinLengthPx){const l=u.normalX>=0;return{x:u.midX+u.normalX*r,y:u.midY+u.normalY*r,angleRad:0,anchor:l?"left":"right",anchorRatio:u.anchorRatio,isShortEdge:!0,shouldFlip:u.shouldFlip,normalX:u.normalX,normalY:u.normalY}}return{x:u.textX,y:u.textY,angleRad:u.angleRad,anchor:"center",anchorRatio:u.anchorRatio,isShortEdge:!1,shouldFlip:u.shouldFlip,normalX:u.normalX,normalY:u.normalY}},eb="carma-annotation-overlay-line-label",nb="carma-annotation-overlay-line-label__frame",ms=e=>{const n=document.createElement("div");return n.className=e,n},tb=e=>e.dataset.annotationOverlayLineLabelKind==="vertical"||e.dataset.annotationOverlayLineLabelKind==="horizontal"?e.dataset.annotationOverlayLineLabelKind:"direct",ob=e=>{const n=e.dataset.annotationOverlayLineLabelShortEdgeOffsetPx,t=n?Number(n):Number.NaN;return Number.isFinite(t)?t:Le.layout.shortEdgeOffsetPx},wd=(e,n)=>{const t=er(n),o=ms(eb),r=ms(nb),a=hT({accentColor:e,visualOptions:t});return o.dataset.annotationOverlayLineLabelShortEdgeOffsetPx=String(t.layout.shortEdgeOffsetPx),r.append(a),o.appendChild(r),o},rb=e=>{const n=er(e),t=X.colors.componentLabelAccents,o=r=>{const a=wd(t[r],n);return a.dataset.annotationOverlayLineLabelKind=r,a};return{direct:o("direct"),vertical:o("vertical"),horizontal:o("horizontal")}},xd=e=>{e.direct.style.display="none",e.vertical.style.display="none",e.horizontal.style.display="none"},qd=({element:e,start:n,end:t,outsideReferencePoint:o,anchorRatio:r,previousShouldFlip:a=e.dataset.annotationOverlayLineLabelNormalFlip==="1"})=>{const i=tb(e);return JT({start:n,end:t,kind:i,outsideReferencePoint:o,shortEdgeOffsetPx:ob(e),useShortEdgeRules:i==="vertical",anchorRatio:r,previousShouldFlip:a})},_d=(e,n,t)=>{Ad(e,n),e.dataset.annotationOverlayLineLabelShortEdge=t.isShortEdge?"true":"false",e.dataset.annotationOverlayLineLabelAnchorRatio=`${t.anchorRatio}`,e.dataset.annotationOverlayLineLabelNormalFlip=t.shouldFlip?"1":"0"},ab=({text:e,...n})=>{const{element:t}=n,o=qd(n);if(!o){t.style.display="none";return}_d(t,e,o),t.style.display="block",t.style.transform=Rd(o)},ib="translate(0px, 0px) translate(-50%, -50%) rotate(0rad)",$a=new WeakMap,Ct=new WeakMap,sb=/(?:^|\s)(?:display|left|top|transform):[^;]*;/g,Wa=e=>{var o;const n=e.ownerDocument;Ct.has(n)||(Ct.set(n,0),(o=n.fonts)==null||o.addEventListener("loadingdone",()=>{Ct.set(n,(Ct.get(n)??0)+1)}));const t=n.defaultView;return`${Ct.get(n)}|${t==null?void 0:t.innerWidth}:${t==null?void 0:t.innerHeight}|${e.className}|${e.style.cssText.replace(sb,"")}|${e.innerHTML}`},lb=Object.freeze({x:0,y:0}),ub=e=>{var t;const n=(t=e.parentElement)==null?void 0:t.getBoundingClientRect();return n?{x:n.left,y:n.top}:lb},Pd=(e,n)=>{Ad(e,n),e.style.display="block",e.style.transform=ib},Md=(e,n)=>{const{width:t,height:o}=e.getBoundingClientRect();if(!(t>0&&o>0))return null;const r={text:n,width:t,height:o,layoutKey:Wa(e)};return $a.set(e,r),r},db=(e,n)=>{const t=$a.get(e);return(t==null?void 0:t.text)===n&&t.layoutKey===Wa(e)?t:(Pd(e,n),Md(e,n))},cb=e=>{const n=e.filter(({element:t,text:o})=>{const r=$a.get(t);return(r==null?void 0:r.text)!==o||r.layoutKey!==Wa(t)});n.forEach(({element:t,text:o})=>Pd(t,o)),n.forEach(({element:t,text:o})=>Md(t,o))},mb=({x:e,y:n,angleRad:t,anchor:o},{width:r,height:a},i)=>{const s=i.x+Math.round(e)+(o==="left"?r/2:o==="right"?-r/2:0),u=i.y+Math.round(n),l=Math.abs(Math.cos(t)),d=Math.abs(Math.sin(t)),c=(r*l+a*d)/2,m=(r*d+a*l)/2;return{left:s-c,top:u-m,right:s+c,bottom:u+m}},Be=Object.freeze({anchorRatio:.5,anchorRatioEpsilon:1e-6,minAnchorSlideStepRatio:.01}),yb=e=>{const n=Number.parseFloat(e.dataset.annotationOverlayLineLabelAnchorRatio??"");return Number.isFinite(n)?fa(n):Be.anchorRatio},pb=({element:e,collisionResolutionStrategy:n,stepRatio:t,maxDeltaRatio:o})=>{const r=Math.min(Be.anchorRatio,fa(o)),a=Be.anchorRatio-r,i=Be.anchorRatio+r,s=Ze(yb(e),a,i),u=new Set([s,Be.anchorRatio]);if(n!==nd.MOVE_ON_LINE)return{lastResolvedAnchorRatio:s,anchorRatios:[...u]};const l=Math.max(t,Be.minAnchorSlideStepRatio);for(let d=l;d<=r+Be.anchorRatioEpsilon;d+=l)u.add(Math.max(a,Be.anchorRatio-d)),u.add(Math.min(i,Be.anchorRatio+d));return{lastResolvedAnchorRatio:s,anchorRatios:[...u].sort((d,c)=>{const m=Math.abs(d-s),y=Math.abs(c-s);return m!==y?m-y:Math.abs(d-Be.anchorRatio)-Math.abs(c-Be.anchorRatio)})}},gb=(e,n,t)=>qd({element:e.element,start:e.start,end:e.end,outsideReferencePoint:e.outsideReferencePoint,anchorRatio:n,previousShouldFlip:t}),fb=(e,n,t,o)=>({anchorRatio:e,collisionRect:n,collisionCount:t.reduce((r,a)=>fm(n,a,Am)?r+1:r,0),lastSolutionJumpPenalty:Math.abs(e-o),originalOffsetPenalty:Math.abs(e-Be.anchorRatio)}),Ab=(e,n)=>n?e.collisionCount!==n.collisionCount?e.collisionCount<n.collisionCount:e.collisionCount===0?e.originalOffsetPenalty!==n.originalOffsetPenalty?e.originalOffsetPenalty<n.originalOffsetPenalty:e.lastSolutionJumpPenalty<n.lastSolutionJumpPenalty:e.lastSolutionJumpPenalty!==n.lastSolutionJumpPenalty?e.lastSolutionJumpPenalty<n.lastSolutionJumpPenalty:e.originalOffsetPenalty<n.originalOffsetPenalty:!0,Dd=({candidate:e,occupiedLabelRects:n,allowEarlyRemoval:t,collisionResolutionStrategy:o,anchorSlideStepRatio:r,maxAnchorSlideDeltaRatio:a,layerOrigin:i})=>{const{element:s,text:u}=e;let l=null;const{lastResolvedAnchorRatio:d,anchorRatios:c}=pb({element:s,collisionResolutionStrategy:o,stepRatio:r,maxDeltaRatio:a}),m=db(s,u),y=i??ub(s);let p=s.dataset.annotationOverlayLineLabelNormalFlip==="1",A=null;for(const f of c){const v=gb(e,f,p);if(!v||(A=v,p=v.shouldFlip,!m))continue;const b=fb(f,mb(v,m,y),n,d);Ab(b,l)&&(l=b)}return A&&(_d(s,u,A),s.style.transform=Rd(A)),l&&(l.collisionCount===0||!t)?(ab({element:s,text:u,start:e.start,end:e.end,outsideReferencePoint:e.outsideReferencePoint,anchorRatio:l.anchorRatio}),{visible:!0,anchorRatio:l.anchorRatio,collisionCount:l.collisionCount,collisionRect:l.collisionRect}):(s.style.display="none",{visible:!1,anchorRatio:(l==null?void 0:l.anchorRatio)??null,collisionCount:(l==null?void 0:l.collisionCount)??0,collisionRect:null})},Bd=(e,n)=>n.zIndex-e.zIndex,vb=(e,n)=>e.metricValueMeters!==n.metricValueMeters?n.metricValueMeters-e.metricValueMeters:Bd(e,n),Tb=e=>{const n=new Map;return e.forEach(t=>{const o=n.get(t.annotationId);o?o.push(t):n.set(t.annotationId,[t])}),n},bb=({candidates:e,occupiedLabelRects:n,...t})=>{const o=[],r=[...n];return[...e].sort(vb).forEach(a=>{const i=Dd({...t,candidate:a,occupiedLabelRects:r,allowEarlyRemoval:!0});i.visible&&i.collisionRect&&(r.push(i.collisionRect),o.push(a))}),o},kb=({candidates:e,occupiedLabelRects:n,allowEarlyRemoval:t,...o})=>{cb(e),[...Tb(e).values()].flatMap(a=>bb({...o,candidates:a,occupiedLabelRects:n})).sort(Bd).forEach(a=>{const i=Dd({...o,candidate:a,occupiedLabelRects:n,allowEarlyRemoval:t});i.visible&&i.collisionRect&&n.push(i.collisionRect)})},Nb=new x,Ib=(e,{hitAreaOnly:n=!1}={})=>{const t=document.createElement("div");t.style.position="absolute",t.style.display="none",t.style.pointerEvents="none",t.style.userSelect="none",t.style.webkitUserSelect="none",t.style.cursor="default",t.style.zIndex="0";const o=document.createElementNS(we.svgNamespace,"svg");o.setAttribute("width","100%"),o.setAttribute("height","100%"),o.style.overflow="visible",o.style.pointerEvents="none",n&&(o.style.visibility="hidden");const r=document.createElementNS(we.svgNamespace,"path");r.setAttribute("fill","none"),r.setAttribute("stroke",le.cornerOverlay.color),r.setAttribute("stroke-width",`${le.cornerOverlay.strokeWidthPx}`),r.setAttribute("stroke-linecap","round"),r.setAttribute("stroke-linejoin","round");const a=document.createElementNS(we.svgNamespace,"circle");return a.setAttribute("r",`${we.distanceTriangle.cornerDotRadiusPx}`),a.setAttribute("fill",le.cornerOverlay.color),o.append(r,a),t.appendChild(o),e.appendChild(t),{root:t,svg:o,path:r,dot:a}},Fd=e=>{e.root.remove()},ys=e=>{e.forEach(n=>{Fd(n)}),e.clear()},wn=e=>{e.root.style.display="none",e.root.onclick=null},hb=({handle:e,pathData:n,dotScreen:t,minX:o,minY:r,width:a,height:i,clickable:s,onClick:u})=>{e.path.setAttribute("d",n),e.path.style.display="block",e.svg.style.display="block",e.dot.setAttribute("cx",`${t.x-o+le.cornerOverlay.paddingPx}`),e.dot.setAttribute("cy",`${t.y-r+le.cornerOverlay.paddingPx}`),e.root.style.left=`${o-le.cornerOverlay.paddingPx}px`,e.root.style.top=`${r-le.cornerOverlay.paddingPx}px`,e.root.style.width=`${a}px`,e.root.style.height=`${i}px`,e.root.style.transform="none",e.root.style.display="block",e.root.style.pointerEvents=s?"auto":"none",e.root.style.cursor=s?"pointer":"default",e.root.onclick=s&&u?u:null},Sb=({handle:e,center:n,clickable:t,onClick:o})=>{const r=le.cornerOverlay.straightHitTargetPx,a=r/2;e.path.style.display="none",e.svg.style.display="block",e.dot.setAttribute("cx",`${a}`),e.dot.setAttribute("cy",`${a}`),e.root.style.left=`${n.x-a}px`,e.root.style.top=`${n.y-a}px`,e.root.style.width=`${r}px`,e.root.style.height=`${r}px`,e.root.style.transform="none",e.root.style.display="block",e.root.style.pointerEvents=t?"auto":"none",e.root.style.cursor=t?"pointer":"default",e.root.onclick=t&&o?o:null},Cb=({engine:e,cornerHandle:n,screenData:t,lengths:{directLengthMeters:o,verticalLengthMeters:r,horizontalLengthMeters:a},clickable:i,onClick:s})=>{if(r<=rt.referenceLineEpsilonMeters||a<=rt.referenceLineEpsilonMeters){if(o<=rt.referenceLineEpsilonMeters){wn(n);return}const S=Se({x:(t.anchorScreenPosition.x+t.targetScreenPosition.x)/2,y:(t.anchorScreenPosition.y+t.targetScreenPosition.y)/2});Sb({handle:n,center:S,clickable:i,onClick:s});return}const u=e.canvas.clientWidth,l=e.canvas.clientHeight;if(u<=0||l<=0){wn(n);return}let d=Number.NaN;try{const S=e.getScreenPixelsPerMeterAt(t.auxiliaryPointECEF);d=Number.isFinite(S)&&S>0?1/S:Number.NaN}catch{d=Number.NaN}if(!Number.isFinite(d)||d<=0){const S=e.getCameraPositionECEF(Nb),k=Math.max(S?S.distanceTo(t.auxiliaryPointECEF):Number.NaN,1),O=le.cornerOverlay.fallbackFovRad;d=Math.max(k*Math.tan(O/2)*2/Math.max(l,1),1e-6)}const c=sl(t.auxiliaryPointECEF,t.anchorPointECEF,t.targetPointECEF,le.cornerOverlay.targetRadiusPx*d,le.cornerOverlay.segments);if(!c||c.length<2){wn(n);return}const m=c[Math.floor(c.length/2)];if(!m){wn(n);return}const y=new x().addVectors(t.auxiliaryPointECEF,m).multiplyScalar(.5),p=e.worldToScreen(y);if(p===null){wn(n);return}const A=c.map(S=>e.worldToScreen(S)).filter(S=>S!==null);if(A.length<2){wn(n);return}const f=Math.min(...A.map(S=>S.x)),v=Math.max(...A.map(S=>S.x)),b=Math.min(...A.map(S=>S.y)),T=Math.max(...A.map(S=>S.y)),I=Math.max(le.cornerOverlay.minBoxPx,v-f+le.cornerOverlay.paddingPx*2),N=Math.max(le.cornerOverlay.minBoxPx,T-b+le.cornerOverlay.paddingPx*2),h=A.map((S,k)=>{const O=S.x-f+le.cornerOverlay.paddingPx,R=S.y-b+le.cornerOverlay.paddingPx;return`${k===0?"M":"L"} ${O} ${R}`}).join(" ");hb({handle:n,pathData:h,dotScreen:Se(p),minX:f,minY:b,width:I,height:N,clickable:i,onClick:s})},Eb=new x,da=(e,n)=>{const t=e.getCameraPositionECEF(Eb);return rd(t?t.distanceTo(n):Number.NaN)},_t=(e,n,t)=>Math.round((da(e,n)+da(e,t))/2),Ob=e=>({left:e.left,top:e.top,right:e.right,bottom:e.bottom}),Lb=e=>{const n=nu(e);return n?Array.from(n.querySelectorAll(we.pointLabelCollisionSelector)).map(t=>Ob(t.getBoundingClientRect())).filter(t=>t.right>t.left&&t.bottom>t.top):[]},Rb=(e,n)=>{const t=rb(n);return e.append(t.direct,t.vertical,t.horizontal),{lineLabels:t,scratch:ut()}},wb=(e,n)=>{const t=wd(X.colors.componentLabelAccents.direct,n);return e.appendChild(t),{element:t}},Gd=e=>{xd(e.lineLabels),e.lineLabels.direct.remove(),e.lineLabels.vertical.remove(),e.lineLabels.horizontal.remove()},jd=e=>{e.element.style.display="none",e.element.remove()},ps=e=>{e.forEach(n=>{Gd(n)}),e.clear()},gs=e=>{e.forEach(n=>{jd(n)}),e.clear()},xb=({engine:e,edge:n,labelHandle:t,formatOptions:o,liveAnchors:r,candidates:a})=>{const i=Xe(r,n.startNodeId,n.startCoordinate),s=Xe(r,n.endNodeId,n.endCoordinate),u=e.worldToScreen(i),l=e.worldToScreen(s),d=i.distanceTo(s);if(u===null||l===null||d<=rt.referenceLineEpsilonMeters){t.element.style.display="none";return}const c=_t(e,i,s);t.element.style.zIndex=`${c}`,a.push({element:t.element,zIndex:c,annotationId:n.annotationId??n.id,metricValueMeters:d,text:tt(d,o.lengthMeters),start:Se(u),end:Se(l)})},qb=({engine:e,edge:n,labelHandle:t,cornerHandle:o,formatOptions:r,liveAnchors:a,candidates:i,cornerClickable:s,onCornerClick:u})=>{var T;const l=hd({engine:e,edge:n,scratch:t.scratch,previousOutsideSigns:t.previousOutsideSigns,formatOptions:r,liveAnchors:a});if(!l){xd(t.lineLabels),o&&wn(o),t.previousOutsideSigns=void 0;return}t.previousOutsideSigns=l.nextOutsideSigns;const d=_t(e,l.anchorPointECEF,l.targetPointECEF),c=_t(e,l.anchorPointECEF,l.auxiliaryPointECEF),m=_t(e,l.auxiliaryPointECEF,l.targetPointECEF),y=da(e,l.auxiliaryPointECEF),p=cs(n),A=l.anchorPointECEF.distanceTo(l.targetPointECEF),f=l.anchorPointECEF.distanceTo(l.auxiliaryPointECEF),v=l.auxiliaryPointECEF.distanceTo(l.targetPointECEF);t.lineLabels.direct.style.zIndex=`${d}`,i.push({element:t.lineLabels.direct,zIndex:d,annotationId:p,metricValueMeters:A,text:l.directLabelText,start:l.anchorScreenPosition,end:l.targetScreenPosition,outsideReferencePoint:l.directOutsideReferencePoint});const b=((T=n.distanceTriangleOverlay)==null?void 0:T.showComponents)!==!1;b&&l.showVerticalLabel&&l.verticalLabelText?(t.lineLabels.vertical.style.zIndex=`${c}`,i.push({element:t.lineLabels.vertical,zIndex:c,annotationId:p,metricValueMeters:f,text:l.verticalLabelText,start:l.anchorScreenPosition,end:l.auxiliaryScreenPosition,outsideReferencePoint:l.verticalOutsideReferencePoint})):t.lineLabels.vertical.style.display="none",b&&l.showHorizontalLabel&&l.horizontalLabelText?(t.lineLabels.horizontal.style.zIndex=`${m}`,i.push({element:t.lineLabels.horizontal,zIndex:m,annotationId:p,metricValueMeters:v,text:l.horizontalLabelText,start:l.auxiliaryScreenPosition,end:l.targetScreenPosition,outsideReferencePoint:l.horizontalOutsideReferencePoint})):t.lineLabels.horizontal.style.display="none",!(!o||!b)&&(o.root.style.zIndex=`${y}`,Cb({engine:e,cornerHandle:o,screenData:l,lengths:{directLengthMeters:A,verticalLengthMeters:f,horizontalLengthMeters:v},clickable:s,onClick:u?()=>u(cs(n)):void 0}))},_b=(e,{edgeSegments:n,formatOptions:t,lineLabelOptions:o,surfaceKey:r,activeEditedNodeId:a,blockEdgeInteractions:i,liveAnchors:s,onDistanceTriangleCornerClick:u,cornerHitAreaOnly:l=!1})=>{const d=g.useRef(new Map),c=g.useRef(new Map),m=g.useRef(new Map);g.useEffect(()=>{if(ps(d.current),gs(c.current),ys(m.current),!j(e))return;const y=n.filter(N=>N.distanceTriangleOverlay!==void 0),p=n.filter(N=>N.showSegmentLengthLabels===!0);if(y.length===0&&p.length===0)return;const{[ve.LABEL]:A,[ve.VISUALIZER]:f}=Ld(e,{[ve.LABEL]:ua(r),[ve.VISUALIZER]:`${ua(r)}-visualizer`});if(!A||!f)return;const v=()=>{const N=new Set([...y.map(h=>h.id),...p.map(h=>h.id)]);d.current.forEach((h,S)=>{if(N.has(S))return;Gd(h),d.current.delete(S);const k=m.current.get(S);k&&(Fd(k),m.current.delete(S))}),y.forEach(h=>{var S;d.current.has(h.id)||(d.current.set(h.id,Rb(A,o)),((S=h.distanceTriangleOverlay)==null?void 0:S.showComponents)!==!1&&m.current.set(h.id,Ib(f,{hitAreaOnly:l})))}),c.current.forEach((h,S)=>{N.has(S)||(jd(h),c.current.delete(S))}),p.forEach(h=>{c.current.has(h.id)||c.current.set(h.id,wb(A,o))})};let b=null;const T=({force:N=!1}={})=>{const h=ud(e);if(!N&&s.size===0&&dd(b,h))return;b=h;const S=Lb(e),k=A.getBoundingClientRect(),O=[],R=!i&&a===null&&!!u;y.forEach(L=>{const C=d.current.get(L.id);C&&qb({engine:e,edge:L,labelHandle:C,cornerHandle:m.current.get(L.id),formatOptions:t,liveAnchors:s,candidates:O,cornerClickable:R,onCornerClick:u})}),p.forEach(L=>{const C=c.current.get(L.id);C&&xb({engine:e,edge:L,labelHandle:C,formatOptions:t,liveAnchors:s,candidates:O})}),kb({candidates:O,occupiedLabelRects:S,allowEarlyRemoval:o.collision.allowEarlyRemoval,collisionResolutionStrategy:o.collision.resolutionStrategy,anchorSlideStepRatio:o.collision.anchorSlideStepRatio,maxAnchorSlideDeltaRatio:o.collision.maxAnchorSlideDeltaRatio,layerOrigin:{x:k.left,y:k.top}})};v(),T({force:!0});const I=e.subscribePostRender(()=>{T()});return e.requestRender(),()=>{I(),ps(d.current),gs(c.current),ys(m.current),Qt(A),Qt(f),j(e)&&e.requestRender()}},[a,i,l,n,c,e,t,s,u,o,r])},Pb=(e,{hitAreaOnly:n=!1}={})=>{const t=document.createElement("div");t.style.position="absolute",t.style.display="none",t.style.pointerEvents="none",t.style.userSelect="none",t.style.webkitUserSelect="none",t.style.cursor="default";const o=document.createElement("div");return o.style.position="absolute",o.style.left="50%",o.style.top="50%",o.style.width=`${we.midpointMarker.tickLengthPx}px`,o.style.height=`${we.midpointMarker.tickWidthPx}px`,o.style.borderRadius="999px",o.style.background=we.midpointMarker.tickColor,o.style.transform="translate(-50%, -50%)",o.style.pointerEvents="none",o.style.transition=Us(),n&&(o.style.visibility="hidden"),t.appendChild(o),e.appendChild(t),{root:t,tick:o}},Mb=e=>{e.root.remove()},fs=e=>{e.forEach(n=>{Mb(n)}),e.clear()},Db=e=>{e.root.style.display="none",e.root.onclick=null,e.root.onmouseenter=null,e.root.onmouseleave=null,e.tick.style.transform="translate(-50%, -50%)",e.tick.style.boxShadow="none",e.tick.style.filter="none"},Mr=(e,n)=>{e.tick.style.transform=n?`translate(-50%, -50%) scale(${Ke.hover.scale})`:"translate(-50%, -50%)",e.tick.style.boxShadow=n?zs():"none",e.tick.style.filter=n?Vs():"none"},Bb=({handle:e,center:n,angleRad:t,zIndex:o,clickable:r,onClick:a,onHoverChange:i})=>{e.root.style.left=`${n.x}px`,e.root.style.top=`${n.y}px`,e.root.style.width=`${we.midpointMarker.hitTargetPx}px`,e.root.style.height=`${we.midpointMarker.hitTargetPx}px`,e.root.style.transform=`translate(-50%, -50%) rotate(${t}rad)`,e.root.style.transformOrigin="50% 50%",e.root.style.zIndex=`${Math.max(o,we.midpointMarker.minOverlayZIndex)}`,e.root.style.display="block",e.root.style.pointerEvents=r?"auto":"none",e.root.style.cursor=r?"pointer":"default",e.root.onclick=r&&a?a:null,e.root.onmouseenter=r?()=>{Mr(e,!0),i==null||i(!0)}:null,e.root.onmouseleave=r?()=>{Mr(e,!1),i==null||i(!1)}:null,Mr(e,!1)},Fb=(e,{insertNodeTargetSegments:n,surfaceKey:t,activeEditedNodeId:o,blockEdgeInteractions:r,liveAnchors:a,onInsertNodeTargetClick:i,hitAreaOnly:s=!1,onHoverChange:u})=>{const l=g.useRef(new Map);g.useEffect(()=>{if(fs(l.current),!j(e)||r||o!==null||n.length===0)return;const d=Ld(e,{[ve.VISUALIZER]:`${ua(t)}-midpoint-targets`})[ve.VISUALIZER];if(!d)return;n.forEach(y=>{l.current.set(y.id,Pb(d,{hitAreaOnly:s}))});const c=()=>{n.forEach(y=>{const p=l.current.get(y.id);if(!p)return;const A=Xe(a,y.startNodeId,y.startCoordinate),f=Xe(a,y.endNodeId,y.endCoordinate),v=e.worldToScreen(A),b=e.worldToScreen(f),T=e.worldToScreen(new x().addVectors(A,f).multiplyScalar(.5));if(v===null||b===null||T===null||!y.annotationId||!y.startNodeId||!y.endNodeId){Db(p);return}Bb({handle:p,center:Se(T),angleRad:Math.atan2(b.y-v.y,b.x-v.x)+mc,zIndex:_t(e,A,f),clickable:!!i,onClick:i?()=>i(y.annotationId,y.startNodeId,y.endNodeId):void 0,onHoverChange:u?I=>u(y.id,I):void 0})})};c();const m=e.subscribePostRender(()=>{c()});return e.requestRender(),()=>{m(),fs(l.current),Qt(d),j(e)&&e.requestRender()}},[o,r,e,s,n,a,u,i,t])},Gb=(e,{edges:n,formatOptions:t,lineLabelOptions:o,surfaceKey:r="committed",activeEditedNodeId:a,blockEdgeInteractions:i,onAnnotationSelect:s,onEdgeClick:u,insertNodeTargetAnnotationIds:l=[],onInsertNodeTargetClick:d,onDistanceTriangleCornerClick:c,liveAnchors:m})=>{const y=g.useMemo(()=>er(o),[o]),p=g.useMemo(()=>new Set(l),[l]),A=g.useMemo(()=>BT(n),[n]),f=g.useMemo(()=>A.filter(h=>h.annotationId!==void 0&&p.has(h.annotationId)&&h.startNodeId!==void 0&&h.endNodeId!==void 0),[A,p]),v=(e==null?void 0:e.capabilities.occludedLinesInScene)===!0,b=g.useMemo(()=>DT({edgeSegments:A,engine:e,formatOptions:t,liveAnchors:m,occludedLinesInScene:v}),[A,e,t,m,v]),T=g.useMemo(()=>MT({edgeSegments:A,engine:e,formatOptions:t,liveAnchors:m,occludedLinesInScene:v,surfaceKey:r,activeEditedNodeId:a,blockEdgeInteractions:i,onEdgeClick:u,onAnnotationSelect:s}),[a,i,A,e,t,m,v,u,s,r]);vm([...T],T.length>0),Od(e,b,a,m);const{handlesInScene:I,onInsertTickHoverChange:N}=QT(e,{edgeSegments:A,insertTickSegments:f,showInsertTicks:!i&&a===null,liveAnchors:m});Fb(e,{insertNodeTargetSegments:f,surfaceKey:r,activeEditedNodeId:a,blockEdgeInteractions:i,liveAnchors:m,onInsertNodeTargetClick:d,hitAreaOnly:I,onHoverChange:N}),_b(e,{edgeSegments:A,formatOptions:t,lineLabelOptions:y,surfaceKey:r,activeEditedNodeId:a,blockEdgeInteractions:i,liveAnchors:m,onDistanceTriangleCornerClick:c,cornerHitAreaOnly:I})},jb=e=>e.flatMap(n=>{const t=n.placement??Pn.COPLANAR;return t!==Pn.COPLANAR||!n.overlayFill||n.coordinates.length<3?[]:[{...n,overlayFill:n.overlayFill,placement:t}]}),Hb=(e,n)=>e.length===n.length&&e.every((t,o)=>{const r=n[o];return r!==void 0&&t.id===r.id&&t.annotationId===r.annotationId&&t.overlayFill===r.overlayFill&&t.selected===r.selected&&Ba(t.coordinates,r.coordinates)}),Ub=()=>{const e=document.createElementNS("http://www.w3.org/2000/svg","polygon");return e.style.pointerEvents="none",e},zb=(e,n)=>{if(!j(e))return{setPolygonFills:()=>{},clear:()=>{},destroy:()=>{}};const t=Va(e,`annotation-overlay-runtime-polygon-fill-layer-${n}`,ve.VISUALIZER);if(!t)return{setPolygonFills:()=>{},clear:()=>{},destroy:()=>{}};const o=document.createElementNS("http://www.w3.org/2000/svg","svg");o.setAttribute("width","100%"),o.setAttribute("height","100%"),o.style.position="absolute",o.style.inset="0",o.style.overflow="visible",o.style.pointerEvents="none",t.appendChild(o);let r=[],a=new Map;const i=()=>{a.forEach(l=>l.remove()),a=new Map},s=()=>{e.isDestroyed()||r.forEach(l=>{let d=a.get(l.id);d||(d=Ub(),a.set(l.id,d),o.appendChild(d)),d.setAttribute("fill",l.overlayFill);const c=l.coordinates.map(m=>e.worldToScreen(H(m))).filter(m=>m!==null);if(c.length!==l.coordinates.length){d.style.display="none";return}d.setAttribute("points",c.map(m=>`${m.x},${m.y}`).join(" ")),d.style.display="block"})},u=e.subscribePostRender(()=>{s()});return{setPolygonFills:(l,d=!0)=>{const c=jb(l);if(Hb(r,c))return;r=c;const m=new Set(r.map(y=>y.id));a.forEach((y,p)=>{m.has(p)||(y.remove(),a.delete(p))}),s(),d&&e.requestRender()},clear:(l=!0)=>{r.length!==0&&(r=[],i(),l&&e.requestRender())},destroy:()=>{r=[],u(),i(),Qt(t),e.isDestroyed()||e.requestRender()}}},Vb=(e,n,t)=>{const o=g.useRef(null),r=g.useRef(n);r.current=n,g.useEffect(()=>{const a=zb(e,t);return o.current=a,a.setPolygonFills(r.current),()=>{a.destroy(),o.current===a&&(o.current=null)}},[e,t]),g.useEffect(()=>{var a;(a=o.current)==null||a.setPolygonFills(n)},[n])},$b={[Pn.GROUND]:Pn.GROUND,[Pn.COPLANAR]:Pn.COPLANAR},Wb=e=>e.map(n=>({...n,placement:n.placement??Pn.COPLANAR})),Yb=(e,n)=>e.length===n.length&&e.every((t,o)=>{const r=n[o];return r!==void 0&&t.id===r.id&&t.annotationId===r.annotationId&&t.fill===r.fill&&t.placement===r.placement&&t.selected===r.selected&&Ba(t.coordinates,r.coordinates)}),Kb=e=>e.flatMap(n=>n.coordinates.length<3?[]:[{id:n.id,positionsECEF:n.coordinates.map(t=>H(t)),fill:n.fill,placement:$b[n.placement],...n.selected!==void 0?{selected:n.selected}:{}}]),Qb=(e,n={})=>{if(!j(e))return{setPolygonFills:()=>{},clear:()=>{},destroy:()=>{}};let t=[];const o=n.allowPicking??!0,r=e.createPolygonFills({allowPicking:o}),a=({requestRender:s})=>{r.clear(),s&&e.requestRender()},i=(s,u=!0)=>{r.setPolygonFills(Kb(s)),u&&e.requestRender()};return{setPolygonFills:(s,u=!0)=>{const l=Wb(s);Yb(t,l)||(t=l,!e.isDestroyed()&&i(l,u))},clear:(s=!0)=>{t.length!==0&&(t=[],!e.isDestroyed()&&a({requestRender:s}))},destroy:()=>{t=[],!e.isDestroyed()&&(r.destroy(),e.requestRender())}}},Xb=(e,n)=>{const t=g.useRef(null),o=g.useRef(n);o.current=n,g.useEffect(()=>{const r=Qb(e);return t.current=r,r.setPolygonFills(o.current),()=>{r.destroy(),t.current===r&&(t.current=null)}},[e]),g.useEffect(()=>{var r;(r=t.current)==null||r.setPolygonFills(n)},[n])},Hd=Bu(ae.ACCENT_MEASUREMENTS).brighter(.1);Hd.opacity=.5;const Zb=Object.freeze({id:"accent-measurements",label:"Measurements · Accent",colorPrimaryReduced:Hd.toString(),colorPrimary:ae.ACCENT_MEASUREMENTS,lineColor:X.colors.surface,textColor:Wn.label.textColor}),Ee=Object.freeze({scheme:Zb,fontFamily:lt.fontFamily,contentFontWeight:lt.lineLabelFontWeight,badgeFontWeight:lt.badgeFontWeight,selection:Wn.selection.highlightPalette}),fe=Object.freeze({fontSize:lt.rootFontSizeRem,fontFamily:Ee.fontFamily,fontWeight:Ee.contentFontWeight,lineColor:Ee.scheme.lineColor,textBackgroundColor:Ee.scheme.colorPrimaryReduced,textColor:Ee.scheme.textColor,markerBackgroundColor:Ee.scheme.colorPrimary,markerTextColor:Ee.scheme.textColor,selectedBackgroundColor:Ee.selection.backgroundColor,selectedTextColor:Ee.selection.textColor,selectedGlowColor:Ee.selection.glowColor,selectedGlowRadiusPx:Ee.selection.glowRadiusPx,preserveFillOnSelection:Ee.selection.preserveFillOnSelection,hoverBackgroundColor:Ee.selection.hoverBackgroundColor,markerPixelSize:X.sizes.pointPixelSize,markerOutlineWidth:X.sizes.pointOutlineWidth}),Jb=e=>({...e,fontSize:e.fontSize??fe.fontSize,fontFamily:e.fontFamily??fe.fontFamily,fontWeight:e.fontWeight??fe.fontWeight,lineColor:e.lineColor??fe.lineColor,textBackgroundColor:e.textBackgroundColor??fe.textBackgroundColor,textColor:e.textColor??fe.textColor,markerBackgroundColor:e.markerBackgroundColor??fe.markerBackgroundColor,markerTextColor:e.markerTextColor??fe.markerTextColor,selectedBackgroundColor:e.selectedBackgroundColor??fe.selectedBackgroundColor,selectedTextColor:e.selectedTextColor??fe.selectedTextColor,selectedGlowColor:e.selectedGlowColor??fe.selectedGlowColor,selectedGlowRadiusPx:e.selectedGlowRadiusPx??fe.selectedGlowRadiusPx,preserveFillOnSelection:e.preserveFillOnSelection??fe.preserveFillOnSelection,hoverBackgroundColor:e.hoverBackgroundColor??fe.hoverBackgroundColor,markerPixelSize:e.markerPixelSize??fe.markerPixelSize,markerOutlineWidth:e.markerOutlineWidth??fe.markerOutlineWidth}),bo=Object.freeze({nodeLabelLongPressDurationMs:320}),As=(e,n)=>n!==void 0&&e.has(n),ca=({nodeId:e,annotationId:n,onNodeLongPress:t,canStartNodeEditing:o})=>t&&e&&((o==null?void 0:o(e,n))??!0)?()=>t(e,n):void 0,Ud=({nodeId:e,annotationId:n,canStartNodeEditing:t})=>!e||((t==null?void 0:t(e,n))??!0),zd=({nodeId:e,annotationId:n,nodeAnnotationIds:t,referenceNodeInteractionEnabled:o,previewSnapTargetsEnabled:r,onReferenceNodeClick:a,onPreviewSnapTargetNodeClick:i,onNodeAnnotationsSelect:s,onAnnotationSelect:u})=>{if(o&&e)return()=>{a==null||a(e)};if(r&&e)return()=>{i==null||i(e)};if(t.length>0&&s)return()=>{s(t)};if(n&&u)return()=>{u(n)}},ek=e=>e.map(Jb).filter(n=>!(n.hideLabelAndStem===!0&&n.nodeId!==void 0)),Vd=(e,n)=>{const t=new Map;return e.forEach(o=>{if(!o.nodeId||!o.annotationId)return;const r=n.get(o.nodeId)??o.nodeId,a=t.get(r)??[];a.includes(o.annotationId)||(a.push(o.annotationId),t.set(r,a))}),t},$d=e=>new Set(e.flatMap(n=>n.pointMarkerId&&n.hideLabelAndStem!==!0&&n.hideMarker!==!0?[n.pointMarkerId]:[])),nk=({pointLabels:e,points:n,selectedAnnotationIdSet:t,previewSnapTargetsEnabled:o,referenceNodeClickEnabled:r,referenceNodeHoverEnabled:a,nodeLinkIdByNodeId:i,previewNodeLinkId:s,isInPreviewNodeLink:u,onAnnotationSelect:l,onNodeAnnotationsSelect:d,onNodeLongPress:c,canStartNodeEditing:m,onPreviewSnapTargetNodeClick:y,onReferenceNodeClick:p,onReferenceNodeHover:A,enableHostInteractionTargets:f})=>{const v=ek(e),b=f&&(a||o),T=f?v.map(k=>{const O=!!(r&&p&&k.nodeId&&!u(k.nodeId)),R=o&&k.nodeId!==void 0,L=Ud({nodeId:k.nodeId,annotationId:k.annotationId,canStartNodeEditing:m});return{...k,onClick:!R&&(k.onClick||O)?()=>{if(k.onClick){k.onClick();return}O&&k.nodeId&&(p==null||p(k.nodeId))}:void 0,onHoverChange:k.onHoverChange,onLongPress:O||R||!L?void 0:k.onLongPress??ca({nodeId:k.nodeId,annotationId:k.annotationId,onNodeLongPress:c,canStartNodeEditing:m}),longPressDurationMs:k.longPressDurationMs??bo.nodeLabelLongPressDurationMs}}):v.map(k=>({...k,onClick:void 0,onDoubleClick:void 0,onHoverChange:void 0,onLongPress:void 0,longPressDurationMs:k.longPressDurationMs??bo.nodeLabelLongPressDurationMs}));if(!!!(f&&(b||o||r||l||d||c)))return T;const N=$d(T),h=new Map,S=Vd(n,i);return n.forEach(k=>{const{nodeId:O,annotationId:R}=k;if(!O||!N.has(k.id))return;const L=i.get(O)??O;if(s!==null&&L===s)return;const C=!!(r&&p&&!u(O)),w=C||o?void 0:ca({nodeId:O,annotationId:R,onNodeLongPress:c,canStartNodeEditing:m}),_={id:`${k.id}-node-interaction`,annotationId:R,nodeId:O,pointMarkerId:k.id,coordinate:k.coordinate,markerPixelSize:k.pixelSize,content:"",hideLabelAndStem:!0,hideMarker:!0,markerOnlyPointerEvents:!0,onHoverChange:b?F=>{A==null||A(O,F)}:void 0,onClick:zd({nodeId:O,annotationId:R,nodeAnnotationIds:S.get(L)??[],referenceNodeInteractionEnabled:C,previewSnapTargetsEnabled:o,onReferenceNodeClick:p,onPreviewSnapTargetNodeClick:y,onNodeAnnotationsSelect:d,onAnnotationSelect:l}),onLongPress:w,longPressDurationMs:bo.nodeLabelLongPressDurationMs},B=w?k.id:L,P=h.get(B);(!P||!As(t,P.annotationId)&&As(t,k.annotationId))&&h.set(B,_)}),[...T,...h.values()]},tk=({points:e,enableHostInteractionTargets:n,previewSnapTargetsEnabled:t,referenceNodeClickEnabled:o,referenceNodeHoverEnabled:r,nodeLinkIdByNodeId:a,isInPreviewNodeLink:i,onAnnotationSelect:s,onNodeAnnotationsSelect:u,onNodeLongPress:l,canStartNodeEditing:d,onPreviewSnapTargetNodeClick:c,onReferenceNodeClick:m,onReferenceNodeHover:y})=>{if(!n)return e.map(f=>({...f,onClick:void 0,onHoverChange:void 0,onLongPress:void 0}));const p=r||t,A=Vd(e,a);return e.map(f=>{const{nodeId:v,annotationId:b}=f,T=v?a.get(v)??v:null,I=!!(o&&m&&v&&!i(v)),N=p&&v&&!i(v)?S=>{y==null||y(v,S)}:f.onHoverChange,h=t||I||i(v)||!Ud({nodeId:v,annotationId:b,canStartNodeEditing:d});return{...f,onClick:zd({nodeId:v,annotationId:b,nodeAnnotationIds:T?A.get(T)??[]:[],referenceNodeInteractionEnabled:I,previewSnapTargetsEnabled:t,onReferenceNodeClick:m,onPreviewSnapTargetNodeClick:c,onNodeAnnotationsSelect:u,onAnnotationSelect:s})??f.onClick,onHoverChange:N,onLongPress:h?void 0:f.onLongPress??ca({nodeId:v,annotationId:b,onNodeLongPress:l,canStartNodeEditing:d}),longPressDurationMs:f.longPressDurationMs??bo.nodeLabelLongPressDurationMs}})},ok=e=>{const n=nk(e),t=$d(n);return{pointLabels:n,visibleStandalonePoints:tk(e).filter(o=>!t.has(o.id))}},rk=(e,n)=>{if(e.anchorKind===Xs.AREA_CENTROID)return e;const t=e.coordinateCandidates;if(t&&t.length>0){const o=t.filter(a=>!n(a.nodeId));if(o.length===t.length)return e;if(o.length===0)return{...e,hideLabelAndStem:!0};const[r]=o;return{...e,coordinateCandidates:o,nodeId:r.nodeId??e.nodeId,coordinate:r.coordinate}}return n(e.nodeId)?{...e,hideLabelAndStem:!0}:e},vs=(e,{surfaceKey:n="committed",enableHostInteractionTargets:t,points:o,linkedNodeGroups:r,edges:a,polygonFills:i,pointLabels:s,selectedAnnotationIds:u,formatOptions:l,lineLabelOptions:d,activeEditedNodeId:c,isMoveGizmoDragging:m=!1,liveAnchors:y,previewSnapTargetHoverEnabled:p=!1,onPreviewSnapTargetNodeClick:A,onAnnotationSelect:f,onNodeAnnotationsSelect:v,onNodeLongPress:b,canStartNodeEditing:T,onReferenceNodeClick:I,onReferenceNodeHover:N,onReferenceEdgeClick:h,insertNodeTargetAnnotationIds:S=[],onInsertNodeTargetClick:k,onDistanceTriangleCornerClick:O})=>{const R=g.useMemo(()=>er(d),[d]),L=!!(p&&A);Gb(e,{edges:a,formatOptions:l,lineLabelOptions:R,surfaceKey:n,activeEditedNodeId:t?c:null,blockEdgeInteractions:!t||L||c!==null,onAnnotationSelect:f,onEdgeClick:h,insertNodeTargetAnnotationIds:S,onInsertNodeTargetClick:k,onDistanceTriangleCornerClick:O,liveAnchors:y}),Xb(e,i),Vb(e,i,n);const w=g.useMemo(()=>new Set(u),[u]),_=g.useMemo(()=>uu(r),[r]),B=g.useMemo(()=>c?_.get(c)??c:null,[c,_]),P=g.useCallback(K=>B!==null&&typeof K=="string"&&(_.get(K)??K)===B,[_,B]),F=g.useMemo(()=>c===null?s:s.map(K=>rk(K,P)),[c,P,s]),J=c!==null&&!m,V=!!(J&&I),$=!!(J&&N),U=g.useMemo(()=>ok({points:o,pointLabels:F,selectedAnnotationIdSet:w,previewSnapTargetsEnabled:L,referenceNodeClickEnabled:V,referenceNodeHoverEnabled:$,nodeLinkIdByNodeId:_,previewNodeLinkId:B,isInPreviewNodeLink:P,onAnnotationSelect:f,onNodeAnnotationsSelect:v,onNodeLongPress:b,canStartNodeEditing:T,onPreviewSnapTargetNodeClick:A,onReferenceNodeClick:I,onReferenceNodeHover:N,enableHostInteractionTargets:t}),[t,P,_,f,v,b,T,A,I,N,F,o,B,L,V,$,w]);PT(e,U.visibleStandalonePoints,y,`${n}-runtime-point-marker`),wT(e,U.pointLabels,y,P,`${n}-runtime-point-label`,R)},ak=(e,{baseVisualModels:n,overlayVisualModels:t,linkedNodeGroups:o,effectiveLinkedNodeGroups:r,selectedAnnotationIds:a,formatOptions:i,lineLabelOptions:s,activeEditedNodeId:u,isMoveGizmoDragging:l,liveAnchors:d,previewSnapTargetHoverEnabled:c,onPreviewSnapTargetNodeClick:m,onAnnotationSelect:y,onNodeAnnotationsSelect:p,onNodeLongPress:A,canStartNodeEditing:f,onReferenceNodeClick:v,onReferenceNodeHover:b,onPreviewNodeHover:T,onReferenceEdgeClick:I,insertNodeTargetAnnotationIds:N,onInsertNodeTargetClick:h,onDistanceTriangleCornerClick:S})=>{vs(e,{surfaceKey:"committed",enableHostInteractionTargets:!0,points:n.points??[],linkedNodeGroups:o,edges:n.edges??[],polygonFills:n.polygonFills??[],pointLabels:n.pointLabels??[],selectedAnnotationIds:a,formatOptions:i,lineLabelOptions:s,activeEditedNodeId:u,isMoveGizmoDragging:l,liveAnchors:d,previewSnapTargetHoverEnabled:c,onPreviewSnapTargetNodeClick:m,onAnnotationSelect:y,onNodeAnnotationsSelect:p,onNodeLongPress:A,canStartNodeEditing:f,onReferenceNodeClick:v,onReferenceNodeHover:u!==null?b:T,onReferenceEdgeClick:I,insertNodeTargetAnnotationIds:N,onInsertNodeTargetClick:h,onDistanceTriangleCornerClick:S});const k=u!==null;vs(e,{surfaceKey:"preview",enableHostInteractionTargets:k,points:(t==null?void 0:t.points)??[],linkedNodeGroups:r,edges:(t==null?void 0:t.edges)??[],polygonFills:(t==null?void 0:t.polygonFills)??[],pointLabels:(t==null?void 0:t.pointLabels)??[],selectedAnnotationIds:a,formatOptions:i,lineLabelOptions:s,activeEditedNodeId:u,isMoveGizmoDragging:l,liveAnchors:d,onNodeLongPress:k?A:void 0,canStartNodeEditing:k?f:void 0,onReferenceNodeClick:k?v:void 0,onReferenceNodeHover:k?b:void 0})},Et={},vt=e=>Object.keys(e).length>0,Ts=(e,n)=>{const t=Object.keys(e),o=Object.keys(n);return t.length!==o.length?!1:t.every(r=>{const a=e[r],i=n[r];return Da(a,i)})},ik=(e,n)=>vt(n)?e.map(t=>{const o=n[t.id];return o?{...t,coordinate:o}:t}):e,sk=({annotationEntries:e,coordinateOverrides:n})=>{const t=new Set(Object.keys(n));return new Set(e.flatMap(o=>o.nodeIds.some(r=>t.has(r))?[o.id]:[]))},mn=({models:e,isAffected:n,keepAffected:t})=>{if(!e)return;const o=e.filter(r=>n(r)===t);return o.length>0?o:void 0},lk=({point:e,affectedAnnotationIdSet:n,movedNodeIdSet:t})=>typeof e.annotationId=="string"&&n.has(e.annotationId)||typeof e.nodeId=="string"&&t.has(e.nodeId),uk=({edge:e,affectedAnnotationIdSet:n,movedNodeIdSet:t})=>{var o;return typeof e.annotationId=="string"&&n.has(e.annotationId)||!!((o=e.nodeIds)!=null&&o.some(r=>t.has(r)))},dk=({polygonFill:e,affectedAnnotationIdSet:n,movedNodeIdSet:t})=>{var o;return typeof e.annotationId=="string"&&n.has(e.annotationId)||!!((o=e.nodeIds)!=null&&o.some(r=>t.has(r)))},ck=({pointLabel:e,affectedAnnotationIdSet:n,movedNodeIdSet:t})=>{var o;return typeof e.annotationId=="string"&&n.has(e.annotationId)||typeof e.nodeId=="string"&&t.has(e.nodeId)||!!((o=e.coordinateCandidates)!=null&&o.some(r=>typeof r.nodeId=="string"&&t.has(r.nodeId)))},mk=({baseVisualModels:e,overlayVisualModels:n,annotationEntries:t,coordinateOverrides:o})=>{var y,p,A,f;if(!vt(o))return{baseVisualModels:e,overlayVisualModels:null};const r=new Set(Object.keys(o)),a=sk({annotationEntries:t,coordinateOverrides:o}),i=v=>lk({point:v,affectedAnnotationIdSet:a,movedNodeIdSet:r}),s=v=>uk({edge:v,affectedAnnotationIdSet:a,movedNodeIdSet:r}),u=v=>dk({polygonFill:v,affectedAnnotationIdSet:a,movedNodeIdSet:r}),l=v=>ck({pointLabel:v,affectedAnnotationIdSet:a,movedNodeIdSet:r}),d={points:mn({models:e.points,isAffected:i,keepAffected:!1}),edges:mn({models:e.edges,isAffected:s,keepAffected:!1}),polygonFills:mn({models:e.polygonFills,isAffected:u,keepAffected:!1}),pointLabels:mn({models:e.pointLabels,isAffected:l,keepAffected:!1})},c={points:mn({models:n.points,isAffected:i,keepAffected:!0}),edges:mn({models:n.edges,isAffected:s,keepAffected:!0}),polygonFills:mn({models:n.polygonFills,isAffected:u,keepAffected:!0}),pointLabels:mn({models:n.pointLabels,isAffected:l,keepAffected:!0})},m=!!((y=c.points)!=null&&y.length)||!!((p=c.edges)!=null&&p.length)||!!((A=c.polygonFills)!=null&&A.length)||!!((f=c.pointLabels)!=null&&f.length);return{baseVisualModels:d,overlayVisualModels:m?c:null}},yk=({plugins:e,...n})=>{const t=e.map(o=>{var r;return((r=o.visualModels)==null?void 0:r.build(n))??null}).filter(o=>!!o);return{points:t.flatMap(o=>o.points??[]),edges:t.flatMap(o=>o.edges??[]),polygonFills:t.flatMap(o=>o.polygonFills??[]),pointLabels:t.flatMap(o=>o.pointLabels??[])}},pk=({plugins:e,nodes:n,edges:t,linkedNodeGroups:o,annotationEntries:r,draftStatesByToolType:a,elevationReferenceAnnotationId:i,selectedAnnotationId:s,selectedAnnotationIds:u,isSelectionAdditiveModifierPressed:l,onAnnotationSelect:d,setElevationReferenceAnnotationId:c,toggleAnnotationElevationDisplayMode:m,onNodeLongPress:y,formatOptions:p,draftNodeCoordinateOverrides:A,effectiveNodes:f,effectiveLinkedNodeGroups:v})=>{const b=g.useCallback((N,h)=>yk({plugins:e,nodes:N,edges:t,linkedNodeGroups:h,annotationEntries:r,draftStatesByToolType:a,elevationReferenceAnnotationId:i,selectedAnnotationId:s,selectedAnnotationIds:u,isSelectionAdditiveModifierPressed:l,setSelectedAnnotationId:d,setElevationReferenceAnnotationId:c,toggleAnnotationElevationDisplayMode:m,onNodeLongPress:y,formatOptions:p}),[r,a,t,i,p,l,d,y,e,s,u,c,m]),T=g.useMemo(()=>b(n,o),[b,o,n]),I=g.useMemo(()=>vt(A)?b(f,v):null,[b,A,v,f]);return g.useMemo(()=>{if(!I)return{baseVisualModels:T,overlayVisualModels:null};const N=mk({baseVisualModels:T,overlayVisualModels:I,annotationEntries:r,coordinateOverrides:A});return{baseVisualModels:N.baseVisualModels,overlayVisualModels:N.overlayVisualModels}},[r,T,A,I])},On={clickDelayMs:220,doubleClickDistancePx:12,cameraMovePickIntervalMs:75,surfaceMissLimit:2,normalSampleIntervalMs:48,normalSampleDistancePx:6,debugLog:!1},gk={},Ot=(e,n)=>typeof e=="number"&&Number.isFinite(e)?Math.max(0,e):n,fk=(e,n)=>typeof e=="number"&&Number.isFinite(e)?Math.max(0,Math.floor(e)):n,mS=e=>{const n=e??gk;return{clickDelayMs:Ot(n.clickDelayMs,On.clickDelayMs),doubleClickDistancePx:Ot(n.doubleClickDistancePx,On.doubleClickDistancePx),cameraMovePickIntervalMs:Ot(n.cameraMovePickIntervalMs,On.cameraMovePickIntervalMs),surfaceMissLimit:fk(n.surfaceMissLimit,On.surfaceMissLimit),normalSampleIntervalMs:Ot(n.normalSampleIntervalMs,On.normalSampleIntervalMs),normalSampleDistancePx:Ot(n.normalSampleDistancePx,On.normalSampleDistancePx),debugLog:n.debugLog??On.debugLog}},Wd=(e,n)=>{const t=e.x-n.x,o=e.y-n.y;return Math.sqrt(t*t+o*o)},yS=(e,n,t)=>!!(e&&Wd(e,n)<=t),pS={x:Number.NaN,y:Number.NaN},gS=[],Ak=5,vk=0,Tk="unsupported",fS=e=>{if(e.shiftKey)return Gp.SHIFT;if(e.ctrlKey||e.altKey)return Tk},bs=(e,n)=>{const t=e.getBoundingClientRect();return{x:n.clientX-t.left,y:n.clientY-t.top}},AS=(e,n)=>e===n||e.x===n.x&&e.y===n.y,vS=(e,n)=>n?(n.x=e.x,n.y=e.y,n):{x:e.x,y:e.y},bk=({pickedIds:e,edgeAnnotationIdsById:n,polygonFillAnnotationIdsById:t})=>{for(const o of e){const r=[...n.entries()].find(([a])=>o===a||o.startsWith(`${a}-`));if(r)return{isRuntimeTarget:!0,annotationId:r[1]};if(t.has(o))return{isRuntimeTarget:!0,annotationId:t.get(o)??null}}return{isRuntimeTarget:!1,annotationId:null}},kk=e=>e.shiftKey||e.ctrlKey||e.altKey||e.metaKey,Nk=({engine:e,enabled:n,baseEdges:t,overlayEdges:o,basePolygonFills:r,overlayPolygonFills:a,onAnnotationSelect:i})=>{const s=g.useMemo(()=>new Map([...t,...o].map(l=>[l.id,l.annotationId??null])),[t,o]),u=g.useMemo(()=>new Map([...r,...a].map(l=>[l.id,l.annotationId??null])),[r,a]);return g.useEffect(()=>{if(!j(e)||!n)return;const{canvas:l}=e;let d=null;const c=y=>{d=y.button===vk?bs(l,y):null},m=y=>{const p=d;if(d=null,e.isDestroyed()||kk(y)||!p)return;const A=bs(l,y);if(Wd(p,A)>Ak)return;const f=e.pickAnnotationIdsAt(A),v=bk({pickedIds:f,edgeAnnotationIdsById:s,polygonFillAnnotationIdsById:u});if(v.isRuntimeTarget){i(v.annotationId),e.requestRender();return}i(null),e.requestRender()};return l.addEventListener("pointerdown",c,{capture:!0}),l.addEventListener("click",m),()=>{l.removeEventListener("pointerdown",c,{capture:!0}),l.removeEventListener("click",m)}},[s,n,e,i,u]),null},Ik=({annotationsStore:e,isSelectionAdditiveModifierPressed:n})=>g.useCallback(t=>{if(!t){e.dispatch(it(null));return}if(!n){e.dispatch(it(t));return}const o=e.getState().selectionState.selectedAnnotationIds,r=o.includes(t)?o.filter(a=>a!==t):[...o,t];e.dispatch(ft(r))},[e,n]),Yd=({draftStore:e,toolTypes:n})=>{const[t,o]=g.useReducer(r=>r+1,0);return g.useEffect(()=>{const r=n.map(a=>e.subscribe(a,o));return()=>{r.forEach(a=>a())}},[e,n]),g.useMemo(()=>Object.fromEntries(n.flatMap(r=>{const a=e.get(r);return a.coordinates.length>0||a.linkedNodeGroupIds.length>0||!!a.feedback?[[r,a]]:[]})),[e,n,t])},hk=e=>{const[n,t]=g.useState(!1),o=g.useCallback(r=>{t(a=>a===r?a:r)},[]);return g.useEffect(()=>{const r=()=>{o(!1)},a=l=>{o(l.shiftKey)},i=l=>{(l.key===e||l.shiftKey)&&o(l.shiftKey)},s=l=>{(l.key===e||!l.shiftKey)&&o(l.shiftKey)},u=()=>{document.hidden&&r()};return window.addEventListener("keydown",i,!0),window.addEventListener("keyup",s,!0),window.addEventListener("pointerdown",a,!0),window.addEventListener("blur",r),document.addEventListener("visibilitychange",u),()=>{window.removeEventListener("keydown",i,!0),window.removeEventListener("keyup",s,!0),window.removeEventListener("pointerdown",a,!0),window.removeEventListener("blur",r),document.removeEventListener("visibilitychange",u)}},[e,o]),n},Xt=(()=>{const e=zm+Vm,n=e*2;return Object.freeze({crosshair:Object.freeze({canvasHalfExtentPx:e,canvasSizePx:n,viewBox:`-27 -27 ${n} ${n}`}),selectionAdditiveIndicator:Object.freeze({fontSizeRem:"1.2857rem",offsetPx:Object.freeze({x:15,y:-10})})})})(),Yn={CROSSHAIR:"crosshair",SELECTION_ADDITIVE_INDICATOR:"selection-additive-indicator"},Sk={[Yn.CROSSHAIR]:"annotation-candidate-crosshair-layer",[Yn.SELECTION_ADDITIVE_INDICATOR]:"annotation-selection-additive-indicator-layer"},Ck={[Yn.CROSSHAIR]:"annotation-preview-crosshair",[Yn.SELECTION_ADDITIVE_INDICATOR]:"annotation-selection-additive-indicator"},Ek=()=>{const e=Qm({canvasSizePx:Xt.crosshair.canvasSizePx,foregroundBlendMode:Gs.NORMAL,foregroundFill:_c,pathDefinitions:$m,shadowBlendMode:Pc,shadowBlurPx:Mc,shadowStrokeColor:Dc,shadowStrokeLinejoin:"round",shadowStrokeWidth:Math.max(Bc,0)*2,showAura:!0,viewBox:Xt.crosshair.viewBox});return tr(e,{display:"none"}),e},Ok=()=>{const e=document.createElement("div");return e.textContent="+",tr(e,{display:"none",color:"rgba(255, 255, 255, 0.98)",fontFamily:'"Segoe UI", "Helvetica Neue", Helvetica, Arial, sans-serif',fontSize:Xt.selectionAdditiveIndicator.fontSizeRem,fontWeight:"700",lineHeight:"1",pointerEvents:"none",userSelect:"none",filter:"drop-shadow(0 0 1px rgba(0, 0, 0, 0.98)) drop-shadow(0 1px 2px rgba(0, 0, 0, 0.98))"}),e},Lk=e=>{const n=e===Yn.SELECTION_ADDITIVE_INDICATOR?Ok():Ek();return n.id=Ck[e],n},mo=e=>{const n=e.getBoundingClientRect();return{left:n.left,top:n.top,right:n.right,bottom:n.bottom}},Rk=(e,n)=>!!(n&&e.x>=n.left&&e.x<=n.right&&e.y>=n.top&&e.y<=n.bottom),ks=(e,n=null,{enabled:t=!0,variant:o=Yn.CROSSHAIR}={})=>{const r=g.useRef(t),a=g.useRef(null),i=g.useRef(n),s=g.useRef(()=>{});r.current=t,i.current=n,g.useEffect(()=>{s.current(a.current,i.current)},[n,t]),g.useEffect(()=>{if(!e||e.isDestroyed())return;const u=Va(e,Sk[o],ve.VISUALIZER),l=u==null?void 0:u.parentElement;if(!u||!(l instanceof HTMLElement))return;const d=e.pointer.register();tr(u,{zIndex:xe.layerZIndex});const c=Lk(o);u.appendChild(c);let m=mo(l),y=mo(e.canvas);const p=()=>{c.style.display="none"},A=(T,I)=>{if(a.current=T,i.current=I,!r.current){p();return}const N=T!==null&&Rk(T,y);if(o===Yn.SELECTION_ADDITIVE_INDICATOR){if(T&&m&&N){c.style.display="block",c.style.transform=`translate(${T.x-m.left+Xt.selectionAdditiveIndicator.offsetPx.x}px, ${T.y-m.top+Xt.selectionAdditiveIndicator.offsetPx.y}px)`;return}p();return}if(T&&m&&N){c.style.display="block",c.style.transform=`translate(${T.x-m.left}px, ${T.y-m.top}px) translate(-50%, -50%)`;return}if(N&&I&&y&&m&&Number.isFinite(I.x)&&Number.isFinite(I.y)){c.style.display="block",c.style.transform=`translate(${I.x+y.left-m.left}px, ${I.y+y.top-m.top}px) translate(-50%, -50%)`;return}p()};s.current=A;const f=()=>{m=mo(l),y=mo(e.canvas),A(a.current,i.current)},v=typeof ResizeObserver<"u"?new ResizeObserver(()=>{f()}):null;v==null||v.observe(l),v==null||v.observe(e.canvas),window.addEventListener("resize",f),window.addEventListener("scroll",f,!0);const b=e.pointer.subscribeClientPosition(T=>{A(T,i.current)});return A(e.pointer.getClientPosition(),i.current),()=>{v==null||v.disconnect(),window.removeEventListener("resize",f),window.removeEventListener("scroll",f,!0),b(),d(),Qt(u)}},[e,o])},or={FREE:"free",GROUND:"ground",MEASUREMENT_PLANE:"measurement-plane"},nt=Object.freeze({frame:or.FREE,axes:!0,surfaceDrag:!0,projectOntoMeasurementPlane:!1}),wk=Object.freeze({frame:or.GROUND,axes:!1,surfaceDrag:!0,projectOntoMeasurementPlane:!1}),Ns=Object.freeze({frame:or.MEASUREMENT_PLANE,axes:!1,surfaceDrag:!1,projectOntoMeasurementPlane:!0}),TS=Object.freeze({[q.AREA_PLANAR]:Object.freeze({frame:or.MEASUREMENT_PLANE,axes:!0,surfaceDrag:!0,projectOntoMeasurementPlane:!0,joinOffPlaneNodes:!0})}),xk=Object.freeze({[q.POINT]:nt,[q.DISTANCE]:nt,[q.POLYLINE]:nt,[q.LABEL]:nt,[q.AREA_GROUND]:wk,[q.AREA_PLANAR]:Ns,[q.AREA_VERTICAL]:Ns}),bS=e=>e&&xk[e]||nt,qk=(e,n,t,o=()=>!0)=>{const r=n.filter(a=>a.nodeIds.includes(e)&&o(a));for(let a=t.length-1;a>=0;a-=1){const i=r.find(s=>s.id===t[a]);if(i)return i}return r[0]??null},_k=.05,Pk=(e,n)=>{const t=new Map(n.map(r=>[r.id,H(r.coordinate)]));return _p({id:e.id,type:e.toolType,nodeIds:[...e.nodeIds],edgeRelationIds:[],closed:e.closed??!0,planeLocked:!0},t).plane??null},Mk=(e,n)=>Fn(Dl(H(e),n)),Dk=(e,n)=>{const t=H(e);return t.distanceTo(Dl(t,n))>_k},Po={referenceNodeInteractionReleaseGuardMs:48,draftPreviewFlushIntervalMs:200,labels:{verticalAxis:"Punkt entlang der U-Achse verschieben",eastAxis:"Punkt entlang der E-Achse verschieben",northAxis:"Punkt entlang der N-Achse verschieben",genericAxis:"Punkt entlang der Achse verschieben",outerDisc:"Punkt auf Höhenebene verschieben",surfacePlane:"Punkt auf Oberfläche verschieben",freePlane:"Punkt in der Ebene verschieben"},referenceLineAxis:{primary:{id:"reference-line-parallel",color:"rgba(59, 130, 246, 0.98)",title:"Punkt parallel zur Referenzlinie verschieben"},secondary:{id:"reference-line-secondary",color:"rgba(34, 197, 94, 0.98)",title:"Punkt orthogonal zur Referenzlinie verschieben"},tertiary:{id:"reference-line-tertiary",color:"rgba(239, 68, 68, 0.98)",title:"Punkt entlang der aktiven Referenzebene verschieben"}}},Bk=new Set([q.POINT,q.DISTANCE]),Fk=({activeEditedNodeId:e,annotationEntries:n,selectedAnnotationIds:t})=>{if(!e)return!1;const o=new Set(t);return n.some(r=>o.has(r.id)&&r.nodeIds.includes(e)&&Bk.has(r.toolType))},Is=e=>{e.current!==null&&typeof window<"u"&&(window.clearTimeout(e.current),e.current=null)},Gk=({annotationsStore:e,selectedAnnotationIds:n})=>{const[t,o]=g.useState(Et),[r,a]=g.useState(null),i=g.useRef(Et),s=g.useRef(null),u=g.useRef(null),l=g.useRef(0),d=g.useRef(null),c=g.useRef(null),m=g.useRef(null),y=g.useRef(null),p=g.useCallback(()=>{u.current=null,l.current=typeof performance<"u"?performance.now():0,a(()=>s.current),o(T=>Ts(T,i.current)?T:i.current)},[]),A=g.useCallback(()=>{if(u.current!==null)return;if(typeof window>"u"){p();return}const I=(typeof performance<"u"?performance.now():0)-l.current,N=Math.max(0,Po.draftPreviewFlushIntervalMs-I);u.current=window.setTimeout(p,N)},[p]),f=g.useCallback(({nextDraftNodeCoordinateOverrides:T,nextDraftLinkToNodeId:I})=>{const N=vt(T)?T:Et,h=!Ts(i.current,N),S=s.current!==I;!h&&!S||(i.current=N,s.current=I,A())},[A]),v=g.useCallback(()=>{Is(u),i.current=Et,s.current=null,d.current=null,c.current=null,m.current=null,y.current=null,a(null),o(T=>vt(T)?Et:T)},[]),b=g.useCallback(T=>{if(!T){v();return}const I=i.current,N=I[T]??t[T];if(!N){v();return}e.dispatch(pA({nodeId:T,coordinate:N,movedNodeIds:Object.keys(I),linkToNodeId:s.current,selectedAnnotationIds:n})),v()},[e,v,t,n]);return g.useEffect(()=>()=>Is(u),[]),{draftNodeCoordinateOverrides:t,draftLinkToNodeId:r,snappedNodeIdRef:d,draftBaseCoordinateRef:c,draftBaseScreenPositionRef:m,hoveredReferenceNodeIdRef:y,updateDraftPreviewState:f,clearDraftNodeCoordinateOverrides:v,commitDraftNodeCoordinateOverrides:b}},jk=e=>{const n=Oe(e);if(!n)return null;const t=Fo(n),{primary:o,secondary:r,tertiary:a}=Po.referenceLineAxis;return{axisDirection:n,axisTitle:o.title,preferredAxisId:o.id,axisCandidates:[{id:o.id,direction:n,color:o.color,title:o.title},{id:r.id,direction:t.xAxis,color:r.color,title:r.title},{id:a.id,direction:t.yAxis,color:a.color,title:a.title}]}},Hk=({activeEditedNodeId:e,activeNodeEditRule:n,nodesById:t,areReferenceInteractionsSuppressed:o,setDraftCoordinateForScopedMove:r,setAxisOverride:a,draftBaseCoordinateRef:i,draftBaseScreenPositionRef:s,hoveredReferenceNodeIdRef:u,nodes:l})=>{const d=g.useCallback(p=>{var A;return i.current??((A=l.find(f=>f.id===p))==null?void 0:A.coordinate)??null},[i,l]),c=g.useCallback(p=>{if(!e||o())return!1;const A=t.get(e),f=t.get(p);if(!A||!f)return!1;if(A.id!==f.id){const v={...A.coordinate,altitude:f.coordinate.altitude};u.current=null,i.current=v,r(A.id,v,{disableSnap:!0})}return!0},[e,o,i,u,t,r]),m=g.useCallback((p,A)=>{if(!e||o())return;const f=d(e),v=t.get(p);if(f){if(A){u.current=p,r(e,{...f,altitude:(v==null?void 0:v.coordinate.altitude)??f.altitude},{disableSnap:!0});return}u.current===p&&(u.current=null,r(e,f,{screenPosition:s.current??void 0,disableSnap:!0}))}},[e,o,s,u,t,d,r]),y=g.useCallback((p,A)=>{if(!e||!n.axes||o())return!1;const f=t.get(p),v=t.get(A);if(!f||!v)return!1;const b=jk(new x().subVectors(H(v.coordinate),H(f.coordinate)));return b?(a(b),!0):!1},[e,n,o,t,a]);return{handleReferenceNodeClick:c,handleReferenceNodeHover:m,handleReferenceEdgeClick:y}},Uk=({engine:e,nodes:n,linkedNodeGroups:t,annotationsStore:o,selectedAnnotationIds:r,measurementEditPlane:a,joinOffPlaneNodes:i,liveAnchors:s,updateDraftPreviewState:u,snappedNodeIdRef:l,draftBaseCoordinateRef:d,draftBaseScreenPositionRef:c,hoveredReferenceNodeIdRef:m})=>g.useCallback((y,p,{screenPosition:A,forcedSnappedNodeId:f,rememberBaseCoordinate:v=!1,disableSnap:b=!1}={})=>{const T=a?Mk(p,a):p,{movedNodeIds:I}=Eu({nodeId:y,nodes:n,linkedNodeGroups:t,annotationEntries:o.getState().annotationEntries,selectedAnnotationIds:r});if(I.length===0)return;v&&(d.current=T,c.current=A??null);const N=(k,O)=>{const R=H(k);I.forEach(L=>{s.set(L,R)}),u({nextDraftNodeCoordinateOverrides:Object.fromEntries(I.map(L=>[L,k])),nextDraftLinkToNodeId:O})};if(b){l.current=null,N(T,null);return}const h=e&&!e.isDestroyed()?e.worldToScreen(H(T))??void 0:void 0;let S=_u({engine:e,nodes:n,linkedNodeGroups:t,coordinate:T,screenPosition:A??c.current??h,forcedSnappedNodeId:f??m.current,lockedNodeId:l.current,excludedNodeIds:I});a&&!i&&S.snappedNodeId!==null&&Dk(S.coordinate,a)&&(S={...S,coordinate:T,snappedNodeId:null}),l.current=S.snappedNodeId,N(S.coordinate,S.snappedNodeId)},[a,i,o,t,s,n,e,r,u,l,d,c,m]),zk=()=>{},Vk=e=>{},$k=(e,n,t,{annotationsStore:o,annotationEntries:r,selectedAnnotationIds:a,onActiveEditedNodeIdChange:i,referenceObjectSizing:s=xu,liveAnchors:u,resolveNodeEditRule:l=zk})=>{const d=g.useMemo(()=>ed(()=>{}),[]),c=u??d,[m,y]=g.useState(null),[p,A]=g.useState(!1),[f,v]=g.useState(null),b=g.useRef(!1),T=g.useRef(0),{draftNodeCoordinateOverrides:I,draftLinkToNodeId:N,snappedNodeIdRef:h,draftBaseCoordinateRef:S,draftBaseScreenPositionRef:k,hoveredReferenceNodeIdRef:O,updateDraftPreviewState:R,clearDraftNodeCoordinateOverrides:L,commitDraftNodeCoordinateOverrides:C}=Gk({annotationsStore:o,selectedAnnotationIds:a}),w=g.useMemo(()=>m?qk(m,r,a,D=>l(D.toolType)!==void 0):null,[m,r,l,a]),_=g.useMemo(()=>w&&l(w.toolType)||nt,[w,l]),B=g.useMemo(()=>w&&_.projectOntoMeasurementPlane?Pk(w,n):null,[w,_,n]),P=g.useMemo(()=>B?be(B.normalECEF):null,[B]),F=g.useMemo(()=>Fk({activeEditedNodeId:m,annotationEntries:r,selectedAnnotationIds:a}),[m,r,a]),J=g.useCallback(()=>b.current||Date.now()<T.current,[]),V=Uk({engine:e,nodes:n,linkedNodeGroups:t,annotationsStore:o,selectedAnnotationIds:a,measurementEditPlane:B,joinOffPlaneNodes:_.joinOffPlaneNodes===!0,liveAnchors:c,updateDraftPreviewState:R,snappedNodeIdRef:h,draftBaseCoordinateRef:S,draftBaseScreenPositionRef:k,hoveredReferenceNodeIdRef:O}),$=g.useMemo(()=>ik(n,I),[I,n]),U=g.useMemo(()=>{const D=Object.keys(I),M=m??D[0]??null;return!M||D.length===0?t:cu({nodes:$,nodeLinks:t,nodeId:M,movedNodeIds:D,linkToNodeId:N})},[m,N,I,$,t]),K=g.useMemo(()=>new Map($.map(D=>[D.id,D])),[$]),ee=g.useCallback(D=>{r.some(W=>W.nodeIds.includes(D)&&a.includes(W.id)&&!W.locked&&!W.readOnly)&&(m&&m!==D&&C(m),v(null),y(D))},[m,r,C,a]),{handleReferenceNodeClick:ne,handleReferenceNodeHover:z,handleReferenceEdgeClick:te}=Hk({activeEditedNodeId:m,activeNodeEditRule:_,nodes:n,nodesById:K,areReferenceInteractionsSuppressed:J,setDraftCoordinateForScopedMove:V,setAxisOverride:v,draftBaseCoordinateRef:S,draftBaseScreenPositionRef:k,hoveredReferenceNodeIdRef:O}),pe=g.useCallback(D=>{if(b.current=D,A(D),D||!m){D&&(T.current=0);return}T.current=Date.now()+Po.referenceNodeInteractionReleaseGuardMs,C(m)},[m,C]),Ve=g.useMemo(()=>$.map(D=>({id:D.id,geometryECEF:H(D.coordinate)})),[$]),ie=g.useCallback((D,M,W)=>{V(D,Fn(M),{screenPosition:W,rememberBaseCoordinate:!0})},[V]);return((e==null?void 0:e.hooks.usePointMoveGizmo)??Vk)({points:Ve,labels:Po.labels,movePointId:m,axisDirection:(f==null?void 0:f.axisDirection)??null,discPlaneNormal:P,axisTitle:(f==null?void 0:f.axisTitle)??null,preferredAxisId:(f==null?void 0:f.preferredAxisId)??null,axisCandidates:(f==null?void 0:f.axisCandidates)??null,radius:s.worldRadiusMeters,discScalingMode:s.scalingMode,discOutlineScreenPixelRadius:s.targetScreenRadiusCssPx,discResizeWorldRadiusToScreenTarget:s.resizeWorldRadiusToScreenTarget,discQuantizeWorldRadius:s.quantizeWorldRadius,freezeDiscScaleDuringDrag:s.resizeWorldRadiusToScreenTarget,discResizeStepFactor:s.resizeStepFactor,showRotationHandle:!1,showAxes:_.axes,snapPlaneDragToGround:_.surfaceDrag&&B===null,excludeRegisteredDragSampleOccluders:F,onDragStateChange:pe,onPointPositionChange:ie,onExit:()=>{C(m),b.current=!1,A(!1),v(null),y(null)}}),g.useEffect(()=>{if(!m){L();return}$.some(D=>D.id===m)||(L(),v(null),y(null))},[m,L,$]),g.useEffect(()=>{!m||!n.some(M=>M.id===m)||r.some(M=>M.nodeIds.includes(m)&&a.includes(M.id))||(C(m),v(null),y(null))},[m,r,C,n,a]),g.useEffect(()=>{var D;m&&(S.current=((D=n.find(M=>M.id===m))==null?void 0:D.coordinate)??null,k.current=null,O.current=null)},[m,S,k,O,n]),g.useEffect(()=>{i==null||i(m)},[m,i]),g.useEffect(()=>{p||vt(I)||(c.clear(),e&&!e.isDestroyed()&&e.requestRender())},[I,p,c,e]),{activeEditedNodeId:m,draftNodeCoordinateOverrides:I,effectiveLinkedNodeGroups:U,effectiveNodes:$,handleNodeLongPress:ee,isMoveGizmoDragging:p,handleReferenceNodeClick:ne,handleReferenceNodeHover:z,handleReferenceEdgeClick:te}},Wk=e=>e===qt.START_COORDINATE?qt.END_COORDINATE:qt.START_COORDINATE,Yk=e=>qt.START_COORDINATE,kS=e=>e===Qe.LEFTMOST_SCREEN_SPACE?Qe.RIGHTMOST_SCREEN_SPACE:Qe.LEFTMOST_SCREEN_SPACE,Kk=e=>{const n=e[0],t=e[e.length-1];if(!n||!t)return Qe.RIGHTMOST_SCREEN_SPACE;const o=H(n),r=H(t),a=_s(o,r);return Math.hypot(a.east,a.north)>rt.referenceLineEpsilonMeters?Qe.LEFTMOST_SCREEN_SPACE:Qe.RIGHTMOST_SCREEN_SPACE},Qk=e=>new Map(e.map(n=>[n.id,n.coordinate])),Xk=(e,n)=>e.nodeIds.map(t=>n.get(t)).filter(t=>!!t),Ya=({annotationEntries:e,nodes:n,annotationId:t})=>{if(!t)return[];const o=zt(e,t);return o?Xk(o,Qk(n)):[]},ma=({annotationEntries:e,nodes:n,annotationId:t})=>Ya({annotationEntries:e,nodes:n,annotationId:t}).flatMap(o=>o?[H(o)]:[]),{POLYLINE:Zk,AREA_GROUND:Jk,AREA_PLANAR:eN,AREA_VERTICAL:nN}=q,hs=e=>e===Zk||e===Jk||e===eN||e===nN,tN=(e,n)=>Fn(new x().addVectors(H(e),H(n)).multiplyScalar(.5)),oN=({engine:e,nodes:n,linkedNodeGroups:t,annotationEntries:o,selectedAnnotationIds:r,annotationsStore:a,activeEditedNodeId:i,isInteractionToolActive:s,isMeasurementToolActive:u,isSelectionAdditiveModifierPressed:l,onActiveEditedNodeIdChange:d,onHoveredPointQueryNodeIdChange:c,referenceObjectSizing:m,liveAnchors:y,resolveNodeEditRule:p})=>{const A=i===null&&u,{draftNodeCoordinateOverrides:f,effectiveLinkedNodeGroups:v,effectiveNodes:b,handleNodeLongPress:T,isMoveGizmoDragging:I,handleReferenceNodeClick:N,handleReferenceNodeHover:h,handleReferenceEdgeClick:S}=$k(e,n,t,{annotationsStore:a,annotationEntries:o,selectedAnnotationIds:r,onActiveEditedNodeIdChange:d,referenceObjectSizing:m,liveAnchors:y,resolveNodeEditRule:p}),k=g.useCallback(C=>{const w=a.getState(),_=zt(w.annotationEntries,C);if(!_)return;const B=Ya({annotationEntries:w.annotationEntries,nodes:w.nodes,annotationId:C}),P=_.distanceTriangleAnchorCoordinateRole??Yk(),F=(_.distanceAnchorCoordinateSelection??Kk(B))===Qe.LEFTMOST_SCREEN_SPACE?Qe.RIGHTMOST_SCREEN_SPACE:Qe.LEFTMOST_SCREEN_SPACE;a.dispatch(qn({annotationId:C,distanceAnchorCoordinateSelection:F,distanceTriangleAnchorCoordinateRole:Wk(P)}))},[a]),O=g.useMemo(()=>{const C=new Set(r);return o.filter(w=>C.has(w.id)&&!w.locked&&!w.readOnly&&hs(w.toolType)).map(w=>w.id)},[o,r]),R=g.useCallback((C,w,_)=>{const B=a.getState(),P=zt(B.annotationEntries,C);if(!P||P.locked||P.readOnly||!hs(P.toolType))return!1;const F=B.nodes.find(V=>V.id===w),J=B.nodes.find(V=>V.id===_);return!F||!J?!1:(a.dispatch(yA({annotationId:C,startNodeId:w,endNodeId:_,coordinate:tN(F.coordinate,J.coordinate)})),e==null||e.requestRender(),!0)},[a,e]),L=g.useCallback((C,w)=>{c(w?C:null)},[c]);return g.useEffect(()=>{A||c(null)},[c,A]),ks(e,null,{enabled:A}),ks(e,null,{enabled:s&&l,variant:"selection-additive-indicator"}),{draftNodeCoordinateOverrides:f,effectiveLinkedNodeGroups:v,effectiveNodes:b,handleDistanceTriangleCornerClick:k,handleInsertNodeTargetClick:R,handleNodeLongPress:T,handlePreviewSnapTargetNodeHover:L,handleReferenceEdgeClick:S,handleReferenceNodeClick:N,handleReferenceNodeHover:h,insertNodeTargetAnnotationIds:O,isMoveGizmoDragging:I,previewSnapTargetHoverEnabled:A}},Kd=({engine:e,registry:n,annotationsStore:t,annotationToolDraftStore:o,setElevationReferenceAnnotationId:r,toggleAnnotationElevationDisplayMode:a,onActiveEditedNodeIdChange:i,onHoveredPointQueryNodeIdChange:s,onPreviewSnapTargetNodeClick:u,activeEditedNodeId:l,formatOptions:d,lineLabelOptions:c,referenceObjectSizing:m,visualInteractionEnabled:y=!1,visualAnnotationEntryRoles:p})=>{const{invalidatePositions:A}=Do(),f=g.useMemo(()=>ed(A),[A]),v=re(Y=>Y.annotationToolType),b=g.useMemo(()=>n.getPlugin(v)??null,[v,n]),T=(b==null?void 0:b.kind)===xo.INTERACTION,I=(b==null?void 0:b.kind)===xo.MEASUREMENT,N=g.useCallback(Y=>{var Z;return(Z=n.getPluginsByAnnotationType(Y).find(de=>de.nodeEdit))==null?void 0:Z.nodeEdit},[n]),h=re(Y=>Y.nodes),S=re(Y=>Y.linkedNodeGroups),k=re(Y=>Y.edges),O=re(Y=>Y.annotationEntries),R=g.useMemo(()=>Nf({annotationEntries:O},{roles:p}).map(Z=>Z.readOnly&&!Z.locked?{...Z,locked:!0}:Z),[O,p]),L=re(Zo),C=re(Y=>Y.selectionState.selectedAnnotationIds),w=g.useMemo(()=>n.plugins.map(Y=>Y.id),[n.plugins]),_=Yd({draftStore:o,toolTypes:w}),B=re(Y=>Y.settingsState.elevationReferenceAnnotationId),P=hk(Dn.additiveSelectionModifierKey),F=Ik({annotationsStore:t,isSelectionAdditiveModifierPressed:P}),J=g.useCallback(Y=>{const Z=Array.from(new Set(Y.filter(Boolean)));if(Z.length===0)return;if(!P){t.dispatch(ft(Z));return}const de=t.getState().selectionState.selectedAnnotationIds,G=new Set(Z),Ce=Z.every(kt=>de.includes(kt))?de.filter(kt=>!G.has(kt)):Array.from(new Set([...de,...Z]));t.dispatch(ft(Ce))},[t,P]),V=g.useMemo(()=>Oa(R),[R]),$=g.useCallback((Y,Z)=>v===In&&!V.has(Y)&&R.some(de=>(!Z||de.id===Z)&&de.nodeIds.includes(Y)&&C.includes(de.id)&&!de.locked&&!de.readOnly),[v,R,V,C]),{draftNodeCoordinateOverrides:U,effectiveLinkedNodeGroups:K,effectiveNodes:ee,handleDistanceTriangleCornerClick:ne,handleInsertNodeTargetClick:z,handleNodeLongPress:te,handlePreviewSnapTargetNodeHover:pe,handleReferenceEdgeClick:Ve,handleReferenceNodeClick:ie,handleReferenceNodeHover:Ge,insertNodeTargetAnnotationIds:D,isMoveGizmoDragging:M,previewSnapTargetHoverEnabled:W}=oN({engine:e,nodes:h,linkedNodeGroups:S,annotationEntries:R,selectedAnnotationIds:C,annotationsStore:t,activeEditedNodeId:l,isInteractionToolActive:T,isMeasurementToolActive:I,isSelectionAdditiveModifierPressed:P,onActiveEditedNodeIdChange:i,onHoveredPointQueryNodeIdChange:s,referenceObjectSizing:m,liveAnchors:f,resolveNodeEditRule:N}),{baseVisualModels:ge,overlayVisualModels:se}=pk({plugins:n.plugins,nodes:h,edges:k,linkedNodeGroups:S,annotationEntries:R,draftStatesByToolType:_,elevationReferenceAnnotationId:B,selectedAnnotationId:L,selectedAnnotationIds:C,isSelectionAdditiveModifierPressed:P,onAnnotationSelect:F,setElevationReferenceAnnotationId:r,toggleAnnotationElevationDisplayMode:a,onNodeLongPress:te,formatOptions:d,draftNodeCoordinateOverrides:U,effectiveNodes:ee,effectiveLinkedNodeGroups:K});return ak(e,{baseVisualModels:ge,overlayVisualModels:se,linkedNodeGroups:S,effectiveLinkedNodeGroups:K,selectedAnnotationIds:C,formatOptions:d,lineLabelOptions:c,activeEditedNodeId:l,isMoveGizmoDragging:M,liveAnchors:f,previewSnapTargetHoverEnabled:W,onPreviewSnapTargetNodeClick:u,onAnnotationSelect:F,onNodeAnnotationsSelect:J,onNodeLongPress:te,canStartNodeEditing:$,onReferenceNodeClick:ie,onReferenceNodeHover:Ge,onPreviewNodeHover:pe,onReferenceEdgeClick:Ve,insertNodeTargetAnnotationIds:D,onInsertNodeTargetClick:z,onDistanceTriangleCornerClick:ne}),E.jsx(Nk,{engine:e,enabled:T||y,baseEdges:ge.edges??[],overlayEdges:(se==null?void 0:se.edges)??[],basePolygonFills:ge.polygonFills??[],overlayPolygonFills:(se==null?void 0:se.polygonFills)??[],onAnnotationSelect:F})};Kd.__docgenInfo={description:"",methods:[],displayName:"RuntimeVisualHost",props:{engine:{required:!0,tsType:{name:"union",raw:"AnnotationEngine | null",elements:[{name:"AnnotationEngine"},{name:"null"}]},description:""},registry:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"scalingMode",value:{name:"ReferenceObjectScalingMode",required:!0}},{key:"worldRadiusMeters",value:{name:"number",required:!0}},{key:"targetScreenRadiusCssPx",value:{name:"number",required:!0}},{key:"resizeWorldRadiusToScreenTarget",value:{name:"boolean",required:!0}},{key:"resizeStepFactor",value:{name:"number",required:!0}},{key:"quantizeWorldRadius",value:{name:"boolean",required:!0}}]}},description:""},visualInteractionEnabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},visualAnnotationEntryRoles:{required:!1,tsType:{name:"unknown"},description:""}}};const Qd=(e,n)=>{var t,o;return n?((t=e.externalCollection)==null?void 0:t.type)===n.type&&((o=e.externalCollection)==null?void 0:o.id)===n.id:e.externalCollection===void 0},rN=(e,n,t)=>{const o=new Set(n.nodeIds),r=new Set(n.edgeIds);return{nodes:e.nodes.filter(a=>o.has(a.id)).map(a=>({...a,id:t(a.id)})),edges:e.edges.filter(a=>r.has(a.id)).map(a=>({...a,id:t(a.id),startNodeId:t(a.startNodeId),endNodeId:t(a.endNodeId)})),linkedNodeGroups:e.linkedNodeGroups.filter(a=>a.nodeIds.some(i=>o.has(i))).map(a=>({...a,id:t(a.id),nodeIds:a.nodeIds.filter(i=>o.has(i)).map(t)}))}},aN=(e,n,t={})=>{const{annotationEntries:o,nodes:r}=e.getState(),a=new Set(o.map(({id:l})=>l)),i=new Set(r.map(({id:l})=>l)),s=Jf(o.filter(l=>Qd(l,t.externalCollection))),u=[];for(const l of n.tables.annotationEntries){const d=eA(l,s,t.idPrefix?`${t.idPrefix}:${l.id}`:l.id);d&&t.replaceExisting&&(e.dispatch(uA({annotationId:d.id})),a.delete(d.id));const c=!d&&(a.has(l.id)||l.nodeIds.some(A=>i.has(A))),m=t.idPrefix??(c?`s${(l.uuid??l.id).replace(/[^a-z0-9]/gi,"").slice(0,8)}`:void 0),y=A=>m?`${m}:${A}`:A,p=d&&t.replaceExisting?d.id:y(l.id);if(t.skipExisting&&!t.replaceExisting&&(d!==void 0||a.has(p))){(t.annotationRole!==void 0||t.readOnly!==void 0)&&e.dispatch(qn({annotationId:(d==null?void 0:d.id)??p,annotationRole:t.annotationRole,readOnly:t.readOnly}));continue}e.dispatch(wu({annotationEntry:{...l,id:p,nodeIds:l.nodeIds.map(y),edgeIds:l.edgeIds.map(y),annotationRole:t.annotationRole??l.annotationRole,readOnly:t.readOnly??l.readOnly,externalCollection:t.externalCollection??l.externalCollection},...rN(n.tables,l,y),selectAnnotationId:t.selectAnnotationId})),a.add(p),u.push(p)}return u},iN=(e,n)=>{const t=e.getState().annotationEntries.filter(o=>Qd(o,n)).map(o=>o.id);return t.length===0?[]:(e.dispatch(_a({annotationIds:t,nextSelectedAnnotationId:null})),t)},sN=(e,n,t)=>{if(t){const r=e.getPlugin(t);if(r)return r}const o=e.getPluginsByAnnotationType(n);return o.find(r=>r.addAnnotation)??o[0]??null},lN=({registry:e,engine:n,annotationEntries:t,toolType:o,coordinates:r,options:a,linkedNodeGroupIds:i,sourceToolId:s})=>{var m,y;const u=sN(e,o,s),l=((m=u==null?void 0:u.addAnnotation)==null?void 0:m.resolveOptions({annotationType:o,toolId:s??(u==null?void 0:u.id)??null,engine:n,coordinates:r,options:a,linkedNodeGroupIds:i}))??a;if(!Ko(o))return l;const d=_f({annotationEntries:t,toolType:o}),c=(y=l==null?void 0:l.shortLabel)==null?void 0:y.trim();return{...l,shortLabel:c||Ll(o,d),shortLabelSource:c?(l==null?void 0:l.shortLabelSource)??Ut.CUSTOM:Ut.DEFAULT,shortLabelCounter:c?l==null?void 0:l.shortLabelCounter:d}},uN=({engine:e,registry:n,annotationsStore:t,measurementSequenceRef:o,nodeSequenceRef:r,edgeSequenceRef:a})=>g.useCallback((i,s,u,l,d)=>{const{annotationEntry:c,nodes:m,linkedNodeGroups:y,edges:p}=cf({toolType:i,coordinates:s,options:lN({registry:n,engine:e,annotationEntries:t.getState().annotationEntries,toolType:i,coordinates:s,options:u,linkedNodeGroupIds:l,sourceToolId:d}),linkedNodeGroupIds:l,measurementSequenceRef:o,nodeSequenceRef:r,edgeSequenceRef:a});return t.dispatch(wu({annotationEntry:c,nodes:m,linkedNodeGroups:y,edges:p,selectAnnotationId:c.id})),c},[t,n,e,o,r,a]),_n=(e,n)=>zt(e.getState().annotationEntries,n),Mo=e=>e!==null&&!e.locked&&!e.readOnly,Ss=(e,n)=>n.map(t=>zt(e,t)).filter(Mo),dN=({annotationsStore:e,activeEditedNodeId:n,setActiveEditedNodeId:t})=>{const o=g.useCallback(d=>{e.dispatch(cA(d))},[e]),r=g.useCallback(d=>{e.dispatch(mA(d))},[e]),a=g.useCallback(d=>{const c=_n(e,d);c&&e.dispatch(qn({annotationId:d,hidden:!c.hidden}))},[e]),i=g.useCallback(d=>{const c=_n(e,d);if(!c||c.readOnly)return;const m=!c.locked;e.dispatch(qn({annotationId:d,locked:m})),m&&c.nodeIds.includes(n??"")&&t(null)},[n,e,t]),s=g.useCallback((d,c)=>{Mo(_n(e,d))&&e.dispatch(qn({annotationId:d,displayName:c.trim()}))},[e]),u=g.useCallback((d,c)=>{Mo(_n(e,d))&&e.dispatch(qn({annotationId:d,shortLabel:c.trim(),shortLabelSource:Ut.CUSTOM}))},[e]),l=g.useCallback((d,c)=>{const m=_n(e,d);m&&e.dispatch(qn({annotationId:d,elevationDisplayMode:nf(c??m.elevationDisplayMode)}))},[e]);return{setElevationReferenceAnnotationIdInStore:o,setPointTemporaryModeInStore:r,toggleAnnotationVisibility:a,toggleAnnotationLocked:i,updateAnnotationDisplayName:s,updateAnnotationShortLabel:u,toggleAnnotationElevationDisplayMode:l}},cN=e=>{const n=g.useCallback(r=>{const a=_n(e,r);if(!a)return;const i=e.getState(),s=Tu({annotation:a,coordinates:Ya({annotationEntries:i.annotationEntries,nodes:i.nodes,annotationId:r})});if(!s)return;const{kind:u,name:l}=$f(a);Vi(`annotation-${zi(u)}-${zi(l)}.geojson`,s)},[e]),t=g.useCallback(()=>hu(wa(e.getState())),[e]),o=g.useCallback(()=>{Vi("annotations.geojson",t())},[t]);return{exportAnnotationGeoJson:n,buildAllAnnotationsGeoJson:t,exportAllAnnotationsGeoJson:o}},ya=({engine:e,points:n})=>{!j(e)||n.length===0||e.flyToPoints(n,{minRadiusMeters:Dn.infoBoxFlyTo.minRadiusMeters,paddingFactor:Dn.infoBoxFlyTo.paddingFactor})},mN=({annotationEntries:e,annotationIds:n,nodes:t})=>{const o=new Set(n);return e.filter(r=>o.has(r.id)).flatMap(r=>ma({annotationEntries:e,annotationId:r.id,nodes:t}))},yN=({annotationEntries:e,annotationIds:n,nodes:t,engine:o})=>{ya({engine:o,points:mN({annotationEntries:e,annotationIds:n,nodes:t})})},pN=({engine:e,annotationsStore:n,setActiveEditedNodeId:t})=>{const o=g.useCallback(d=>{d===null&&t(null),n.dispatch(it(d))},[n,t]),r=g.useCallback(d=>{d.length===0&&t(null),n.dispatch(ft(d))},[n,t]),a=g.useCallback(()=>{n.dispatch(ft(Cu(n.getState())))},[n]),i=g.useCallback(d=>{const c=n.getState();n.dispatch(it(aA(c.annotationEntries,Zo(c),d)))},[n]),s=g.useCallback(d=>{const c=n.getState();ya({engine:e,points:ma({annotationEntries:c.annotationEntries,nodes:c.nodes,annotationId:d})})},[n,e]),u=g.useCallback(()=>{const d=n.getState();ya({engine:e,points:Yo(d).flatMap(c=>ma({annotationEntries:d.annotationEntries,nodes:d.nodes,annotationId:c.id}))})},[n,e]),l=g.useCallback(d=>{d===null&&t(null),n.dispatch(it(d)),s(d)},[n,s,t]);return{setSelectedAnnotationIdInStore:o,setSelectedAnnotationIdsInStore:r,selectAllAnnotationEntries:a,focusAdjacentAnnotationEntry:i,flyToAnnotationById:s,flyToAllAnnotations:u,focusAnnotationId:l}},gN=({annotationsStore:e,annotationToolDraftStore:n,confirmAnnotationDelete:t})=>{const o=g.useCallback((u,l)=>{if(u.length===0)return Promise.resolve(!1);if(l!=null&&l.skipConfirmation)return Promise.resolve(!0);const d=t??kA;return Promise.resolve(d({annotations:u,source:(l==null?void 0:l.source)??Ma.PROGRAMMATIC})).catch(c=>(console.error("[Annotations] Delete confirmation failed",c),!1))},[t]),r=g.useCallback(()=>{const u=e.getState().annotationToolType;return n.get(u).coordinates.length>0},[n,e]),a=g.useCallback((u,l)=>{const d=Array.from(new Set(u));if(d.length===0||r())return;const c=Ss(e.getState().annotationEntries,d);c.length!==0&&o(c,l).then(m=>{if(!m)return;const y=Ss(e.getState().annotationEntries,c.map(({id:p})=>p)).map(({id:p})=>p);y.length!==0&&e.dispatch(_a({annotationIds:y}))})},[e,r,o]),i=g.useCallback((u,l)=>{Mo(_n(e,u))&&a([u],l)},[e,a]),s=g.useCallback(u=>{const l=rA(e.getState());l.length!==0&&a(l,u)},[e,a]);return{requestAnnotationDeleteConfirmation:o,removeAnnotationEntriesByIds:a,removeAnnotationEntryById:i,removeSelectedAnnotationEntries:s}},fN=[],AN=[],vN={coordinates:fN,linkedNodeGroupIds:AN,feedback:null},TN=(e,n)=>e.length===n.length&&e.every((t,o)=>t===n[o]),bN=(e,n)=>{var t,o,r,a;return Ba(e.coordinates,n.coordinates)&&TN(e.linkedNodeGroupIds,n.linkedNodeGroupIds)&&((t=e.feedback)==null?void 0:t.kind)===((o=n.feedback)==null?void 0:o.kind)&&((r=e.feedback)==null?void 0:r.message)===((a=n.feedback)==null?void 0:a.message)},kN=()=>{const e=new Map,n=new Map,t=r=>{var a;(a=n.get(r))==null||a.forEach(i=>i())},o=r=>e.get(r)??vN;return{get:o,set:(r,a)=>{const i={coordinates:[...a.coordinates],linkedNodeGroupIds:[...a.linkedNodeGroupIds],feedback:a.feedback??null},s=o(r);if(bN(s,i))return;i.coordinates.length>0||i.linkedNodeGroupIds.length>0||!!i.feedback?e.set(r,i):e.delete(r),t(r)},clear:r=>{e.has(r)&&(e.delete(r),t(r))},subscribe:(r,a)=>{const i=n.get(r)??new Set;return i.add(a),n.set(r,i),()=>{const s=n.get(r);s&&(s.delete(a),s.size===0&&n.delete(r))}}}},NN=()=>{let e=null;const n=new Set;return{getSnapshot:()=>e,setSnapshot:t=>{e!==t&&(e=t,n.forEach(o=>o()))},subscribe:t=>(n.add(t),()=>n.delete(t))}},IN=({registry:e,initialToolType:n,initialPointTemporaryMode:t,initialPersistenceState:o})=>{const r=o?nA({initialToolType:n,initialPointTemporaryMode:t,initialPersistenceState:o,isToolTypeAvailable:a=>!!e.getPlugin(a)}):Lu({initialToolType:n,initialPointTemporaryMode:t});return{annotationsStore:fA(r),annotationToolDraftStore:kN(),activePointQueryPickResultStore:NN(),sequenceRefs:{measurementSequenceRef:{current:at(r.annotationEntries.map(({id:a})=>a))},nodeSequenceRef:{current:at(r.nodes.map(({id:a})=>a))},edgeSequenceRef:{current:at(r.edges.map(({id:a})=>a))}},lastSerializedPersistenceState:JSON.stringify(wa(r)),mountedHosts:0}},Lt=new Map,hN=e=>{const{storeKey:n,onPersistenceStateChange:t}=e,o=g.useRef(null);let r=n?Lt.get(n):o.current;r||(r=IN(e),n?Lt.set(n,r):o.current=r);const a=r;return g.useEffect(()=>{if(n)return Lt.set(n,a),a.mountedHosts+=1,()=>{a.mountedHosts-=1,a.mountedHosts===0&&Lt.get(n)===a&&Lt.delete(n)}},[a,n]),g.useEffect(()=>{if(t)return a.annotationsStore.subscribe(()=>{const i=wa(a.annotationsStore.getState()),s=JSON.stringify(i);s!==a.lastSerializedPersistenceState&&(t(i),a.lastSerializedPersistenceState=s)})},[a,t]),{annotationsStore:a.annotationsStore,annotationToolDraftStore:a.annotationToolDraftStore,activePointQueryPickResultStore:a.activePointQueryPickResultStore,sequenceRefs:a.sequenceRefs}},{DISTANCE:SN,POLYLINE:CN,AREA_GROUND:EN,AREA_PLANAR:ON,AREA_VERTICAL:LN}=q,Cs=e=>{switch(e.toolType){case SN:case CN:return 2;case EN:case ON:case LN:return 3;default:return null}},RN=({annotationEntries:e,selectedAnnotationIds:n,editedNodeId:t})=>{const o=e.filter(i=>!i.locked&&!i.readOnly&&i.nodeIds.includes(t)&&Cs(i)!==null);let r=o[0];for(let i=n.length-1;i>=0;i-=1){const s=o.find(({id:u})=>u===n[i]);if(s){r=s;break}}const a=r?Cs(r):null;return r&&a!==null?{annotation:r,minimumNodeCount:a}:null},wN=({nodeIds:e,editedNodeId:n,closed:t})=>{const o=e.indexOf(n);if(!t||o<0)return e.filter(a=>a!==n);const r=[];for(let a=1;a<e.length;a+=1){const i=e[(o+a)%e.length];i&&i!==n&&r.push(i)}return r},xN=({annotationsStore:e,annotationToolDraftStore:n,activeEditedNodeId:t,setActiveEditedNodeId:o,requestAnnotationDeleteConfirmation:r})=>g.useCallback(()=>{if(!t)return!1;const a=e.getState(),i=RN({annotationEntries:a.annotationEntries,selectedAnnotationIds:a.selectionState.selectedAnnotationIds,editedNodeId:t});if(!i)return!1;const{annotation:s,minimumNodeCount:u}=i,l=s.nodeIds.filter(y=>y!==t);if(l.length>=u)return e.dispatch(dA({annotationId:s.id,nodeId:t})),o(null),!0;const d=wN({nodeIds:s.nodeIds,editedNodeId:t,closed:s.closed===!0});if(d.length!==l.length)return!1;const c=new Map(a.nodes.map(y=>[y.id,y])),m=d.flatMap(y=>{const p=c.get(y);return p?[p]:[]});return m.length!==d.length?!1:(r([s],{source:Ma.KEYBOARD}).then(y=>{y&&(n.set(s.toolType,{coordinates:m.map(p=>p.coordinate),linkedNodeGroupIds:d.map(p=>vo(a.linkedNodeGroups,p)),feedback:null}),e.dispatch(_a({annotationIds:[s.id],nextSelectedAnnotationId:null})),o(null))}),!0)},[t,n,e,r,o]),qN=({annotationsStore:e,setActiveEditedNodeId:n})=>{const t=g.useRef(ia),o=g.useRef(()=>!1),r=g.useRef(null),a=g.useCallback(y=>{const p=e.getState().annotationToolType;e.dispatch(gA(y)),p!==y&&(n(null),e.dispatch(it(null)))},[e,n]),i=g.useCallback(y=>{if(t.current===ia){a(y);return}t.current.requestModeChange(y)},[a]),s=g.useCallback(y=>{t.current=y},[]),u=g.useMemo(()=>({requestModeChange:y=>t.current.requestModeChange(y),requestActivateTool:y=>t.current.requestActivateTool(y),requestFinishMeasurement:()=>t.current.requestFinishMeasurement(),requestPointAt:y=>t.current.requestPointAt(y)}),[]),l=g.useCallback(y=>(o.current=y,()=>{o.current===y&&(o.current=()=>!1)}),[]),d=g.useCallback(y=>o.current(y),[]),c=g.useCallback(y=>{r.current=y},[]),m=g.useCallback(()=>r.current,[]);return{setActiveToolTypeInStore:a,setActiveToolType:i,bindLifecycleHostApi:s,lifecycleRequests:u,bindPreviewSnapTargetNodeClick:l,handlePreviewSnapTargetNodeClick:d,setHoveredPointQueryNodeId:c,getHoveredPointQueryNodeId:m}},_N=({engine:e,plugins:n,initialActiveToolType:t,initialPointTemporaryMode:o,formatOptions:r,lineLabelOptions:a,initialPersistenceState:i,storeKey:s,onPersistenceStateChange:u,requestLabelText:l,confirmAnnotationDelete:d})=>{var Z;const c=g.useMemo(()=>bf(n),[n]),m=((Z=c.orderedDescriptors[0])==null?void 0:Z.id)??null;if(!m)throw new Error("AnnotationsProvider requires at least one tool plugin.");const{annotationsStore:y,annotationToolDraftStore:p,activePointQueryPickResultStore:A,sequenceRefs:f}=hN({registry:c,initialToolType:t&&c.getPlugin(t)?t:m,initialPointTemporaryMode:o,initialPersistenceState:i,storeKey:s,onPersistenceStateChange:u}),[v,b]=g.useState(null),{setActiveToolTypeInStore:T,setActiveToolType:I,bindLifecycleHostApi:N,lifecycleRequests:h,bindPreviewSnapTargetNodeClick:S,handlePreviewSnapTargetNodeClick:k,setHoveredPointQueryNodeId:O,getHoveredPointQueryNodeId:R}=qN({annotationsStore:y,setActiveEditedNodeId:b}),{setSelectedAnnotationIdInStore:L,setSelectedAnnotationIdsInStore:C,selectAllAnnotationEntries:w,focusAdjacentAnnotationEntry:_,flyToAnnotationById:B,flyToAllAnnotations:P,focusAnnotationId:F}=pN({engine:e,annotationsStore:y,setActiveEditedNodeId:b}),{requestAnnotationDeleteConfirmation:J,removeAnnotationEntriesByIds:V,removeAnnotationEntryById:$,removeSelectedAnnotationEntries:U}=gN({annotationsStore:y,annotationToolDraftStore:p,confirmAnnotationDelete:d}),K=xN({annotationsStore:y,annotationToolDraftStore:p,activeEditedNodeId:v,setActiveEditedNodeId:b,requestAnnotationDeleteConfirmation:J}),{exportAnnotationGeoJson:ee,buildAllAnnotationsGeoJson:ne,exportAllAnnotationsGeoJson:z}=cN(y),{setElevationReferenceAnnotationIdInStore:te,setPointTemporaryModeInStore:pe,toggleAnnotationVisibility:Ve,toggleAnnotationLocked:ie,updateAnnotationDisplayName:Ge,updateAnnotationShortLabel:D,toggleAnnotationElevationDisplayMode:M}=dN({annotationsStore:y,activeEditedNodeId:v,setActiveEditedNodeId:b}),W=uN({engine:e,registry:c,annotationsStore:y,...f}),ge=g.useCallback((de,G)=>aN(y,de,G),[y]),se=g.useCallback(de=>iN(y,de),[y]),Y=g.useMemo(()=>({engine:e,registry:c,annotationToolDraftStore:p,annotationsStore:y,formatOptions:r,activeEditedNodeId:v,addAnnotation:W,appendAnnotationsRuntimePersistenceState:ge,removeExternalAnnotationsByCollection:se,setActiveToolType:I,requestModeChange:h.requestModeChange,requestActivateTool:h.requestActivateTool,requestFinishMeasurement:h.requestFinishMeasurement,requestPointAt:h.requestPointAt,focusAdjacentAnnotationEntry:_,focusAnnotationId:F,flyToAnnotationById:B,flyToAllAnnotations:P,removeAnnotationById:$,removeAnnotationsByIds:V,buildAllAnnotationsGeoJson:ne,exportAnnotationGeoJson:ee,exportAllAnnotationsGeoJson:z,toggleAnnotationVisibility:Ve,toggleAnnotationLocked:ie,removeSelectedAnnotations:U,selectAllAnnotations:w,setElevationReferenceAnnotationId:te,toggleAnnotationElevationDisplayMode:M,updateAnnotationDisplayName:Ge,updateAnnotationShortLabel:D,setPointTemporaryMode:pe,setSelectedAnnotationId:L,setSelectedAnnotationIds:C}),[W,ge,v,p,y,ne,_,F,z,ee,P,B,r,h,$,V,se,U,c,e,w,te,I,pe,L,C,ie,M,Ve,Ge,D]);return{annotationsStore:y,registry:c,services:Y,activePointQueryPickResultStore:A,setActiveToolType:I,runtimeAuthoringHost:{engine:e,registry:c,annotationsStore:y,annotationToolDraftStore:p,setActiveToolTypeInStore:T,focusAdjacentAnnotationEntry:_,removeSelectedAnnotations:U,removeEditedNode:K,addAnnotation:W,bindPreviewSnapTargetNodeClick:S,activeEditedNodeId:v,getHoveredPointQueryNodeId:R,setHoveredPointQueryNodeId:O,onPointQueryPickResultChange:A.setSnapshot,formatOptions:r,lineLabelOptions:a,bindApi:N,requestLabelText:l},runtimeVisualHost:{engine:e,registry:c,annotationsStore:y,annotationToolDraftStore:p,setElevationReferenceAnnotationId:te,toggleAnnotationElevationDisplayMode:M,onActiveEditedNodeIdChange:b,onHoveredPointQueryNodeIdChange:O,onPreviewSnapTargetNodeClick:k,activeEditedNodeId:v,formatOptions:r,lineLabelOptions:a}}},PN=({enabled:e=!0}={})=>{const n=g.useRef(null),t=g.useRef([]),[o,r]=g.useState(null),[a,i]=g.useState([]),s=g.useCallback(d=>{const c=n.current;if(n.current=null,r(null),d!==null){const m=cp(t.current,d);t.current=m,i(m)}c==null||c(d)},[]),u=g.useCallback(({defaultText:d,labelTextSuggestions:c})=>new Promise(m=>{var y;if(!e){m(null);return}(y=n.current)==null||y.call(n,null),n.current=m,r(yp({defaultText:d,labelTextHistory:t.current,labelTextSuggestions:c}))}),[e]);g.useEffect(()=>()=>{var d;(d=n.current)==null||d.call(n,null),n.current=null},[]),g.useEffect(()=>{e||s(null)},[e,s]);const l=g.useMemo(()=>!e||!o?{open:!1,initialValue:"",labelSuggestions:[],onAbort:()=>{},onFinish:()=>{}}:{open:!0,initialValue:o.initialValue,labelSuggestions:ha(a,o.labelSuggestions),onAbort:()=>s(null),onFinish:s},[e,a,o,s]);return g.useMemo(()=>({labelTextDialogState:l,requestLabelText:u}),[l,u])},yo=()=>new Promise(e=>{typeof requestAnimationFrame=="function"?requestAnimationFrame(()=>setTimeout(e,0)):setTimeout(e,16)}),Es=e=>new Promise(n=>setTimeout(n,e)),Dr=(e,n,t)=>new Promise(o=>{if(n(e.getState())){o(!0);return}let r=!1;const a=u=>{r||(r=!0,clearTimeout(s),i(),o(u))},i=e.subscribe(()=>{n(e.getState())&&a(!0)}),s=setTimeout(()=>a(!1),t)}),Br=2e3,Os=e=>new Set(e.annotationEntries.map(n=>n.id)),Xn=(e,n)=>{var t;return((t=e.annotationEntries.find(o=>!n.has(o.id)))==null?void 0:t.id)??null},MN=e=>{const n=()=>e().annotationsStore,t=()=>{const c=e(),m=c.annotationsStore.getState(),y=m.annotationToolType??null,p=y?c.annotationToolDraftStore.get(y).coordinates.length:0;return{activeTool:y,tools:c.registry.orderedDescriptors.map(A=>A.id),selectedIds:[...m.selectionState.selectedAnnotationIds??[]],draft:y&&p>0?{tool:y,nodeCount:p}:null,textPrompt:c.labelTextDialogState.open?c.labelTextDialogState.initialValue:null,annotations:m.annotationEntries.map(A=>({id:A.id,type:A.toolType,label:A.shortLabel??null,nodeCount:A.nodeIds.length,external:A.annotationRole===pt.EXTERNAL}))}},o=async c=>{const m=e();if(!m.registry.getPlugin(c))return!1;m.annotationsStore.getState().annotationToolType!==c&&m.requestModeChange(c);const y=await Dr(m.annotationsStore,p=>p.annotationToolType===c,Br);return await yo(),y},r=async c=>{await yo();const m=e().requestPointAt(c);return await yo(),m},a=async()=>{const c=Os(n().getState());return e().requestFinishMeasurement()&&await Dr(n(),m=>Xn(m,c)!==null,Br),await yo(),Xn(n().getState(),c)},i=()=>{const c=e(),m=c.annotationsStore.getState().annotationToolType;m&&c.annotationToolDraftStore.clear(m)},s=c=>{const m=e().labelTextDialogState;return m.open?(c===null?m.onAbort():m.onFinish(c),!0):!1};return{getState:t,subscribe:c=>n().subscribe(c),activateTool:o,pickAt:r,finish:a,cancel:i,answerTextPrompt:s,createMeasurement:async(c,m,y={})=>{const{stepDelayMs:p=0,select:A=!0}=y;if(!await o(c))return null;const f=Os(n().getState());e().annotationToolDraftStore.clear(c);for(const b of m){if(p>0&&await Es(p),!await r(b))return null;const T=e().labelTextDialogState;if(T.open&&(s(y.text??T.initialValue),await Dr(n(),I=>Xn(I,f)!==null,Br)),Xn(n().getState(),f))break}let v=Xn(n().getState(),f);return v||(p>0&&await Es(p),await a(),v=Xn(n().getState(),f)),v&&A&&e().setSelectedAnnotationIds([v]),v},addMeasurements:(c,m={})=>{const y=e(),p=Su(c)??Ra(c);if(!p)return[];if(m.replace){const f=y.annotationsStore.getState().annotationEntries.filter(v=>v.annotationRole!==pt.EXTERNAL).map(v=>v.id);f.length>0&&y.removeAnnotationsByIds(f,{skipConfirmation:!0})}const A=[...y.appendAnnotationsRuntimePersistenceState(p)];return m.select&&A.length>0&&y.setSelectedAnnotationIds(A),A},exportMeasurements:()=>e().buildAllAnnotationsGeoJson(),select:c=>e().setSelectedAnnotationIds(c),remove:c=>e().removeAnnotationsByIds(c,{skipConfirmation:!0}),flyTo:c=>{const m=e();if(!c||c.length===0){m.flyToAllAnnotations();return}const y=m.annotationsStore.getState();yN({annotationEntries:y.annotationEntries,annotationIds:c,nodes:y.nodes,engine:m.engine})}}},Xd=1500,ko=new WeakMap,pa=e=>{var n;(n=ko.get(e))==null||n()},DN=(e,n,{durationMs:t=Xd}={})=>{pa(e);const o=e.getCameraPose();return!o||!(t>0)?Promise.resolve(e.setCameraPose(n)):new Promise(r=>{let a=0,i=!1;const s=c=>{i||(i=!0,cancelAnimationFrame(a),ko.get(e)===u&&ko.delete(e),r(c))},u=()=>s(!1);ko.set(e,u);const l=performance.now(),d=c=>{if(i)return;const m=Math.min(1,(c-l)/t),y=m>=1?n:Hm(o,n,Im(0,1,m));if(e.isDestroyed()||!e.setCameraPose(y)){s(!1);return}m>=1?s(!0):a=requestAnimationFrame(d)};a=requestAnimationFrame(d)})},Pt=e=>Array.isArray(e)&&e.length===3&&e.every(n=>Number.isFinite(n)),BN=e=>({position:e.positionECEF.toArray(),direction:e.directionECEF.toArray(),up:e.upECEF.toArray(),fovY:e.verticalFovRad}),Ls=e=>{if(!e||!Pt(e.position)||!Pt(e.direction)||!Pt(e.up)||!(e.fovY>0&&e.fovY<Ms))return null;const n=new x(...e.direction);if(!(n.lengthSq()>0))return null;n.normalize();const t=Dt(new x(...e.up),n);return t.lengthSq()>0?{positionECEF:new x(...e.position),directionECEF:n,upECEF:t.normalize(),verticalFovRad:e.fovY}:null},FN=e=>{const n=()=>{const o=e();return j(o)?o:null},t=(o,r)=>{const a=n();return a&&o?DN(a,o,{durationMs:r}):Promise.resolve(!1)};return{getPose:()=>{var r;const o=(r=n())==null?void 0:r.getCameraPose();return o?BN(o):null},setPose:o=>{const r=n(),a=Ls(o);return!r||!a?!1:(pa(r),r.setCameraPose(a))},flyToPose:(o,r={})=>t(Ls(o),r.durationMs),lookAt:(o,r,a={})=>{var i,s;return Pt(o)&&Pt(r)?t(jm(new x(...o),new x(...r),a.fovY??((s=(i=n())==null?void 0:i.getCameraPose())==null?void 0:s.verticalFovRad)??ll),a.durationMs??Xd):Promise.resolve(!1)},stop:()=>{const o=n();o&&pa(o)}}},Zd=e=>{const n=[],t=()=>e(n.at(-1)??null);return o=>(n.push(o),t(),()=>{const r=n.indexOf(o);r>=0&&n.splice(r,1),t()})},GN=Zd(Ky),jN=Zd(Qy),HN=(e,n)=>{const t=g.useRef(e);t.current=e,g.useLayoutEffect(()=>{if(!n)return;const o=GN(MN(()=>t.current)),r=jN(FN(()=>t.current.engine));return()=>{r(),o()}},[n])},UN=Zg,Jd=g.createContext(null),ec=g.createContext(null),zN={},VN=()=>{const e=g.useContext(Jd);if(!e)throw new Error("useAnnotationsRuntime must be used within AnnotationsProvider.");return e},$N=()=>{const e=g.useContext(ec);if(!e)throw new Error("useActivePointQueryPickResult must be used within AnnotationsProvider.");return e},WN=({engine:e,plugins:n,children:t,annotationOverlayContainer:o=null,initialActiveToolType:r,initialPointTemporaryMode:a=!1,labelOverlayHost:i=null,localPersistence:s,renderEnabled:u=!0,visualRenderEnabled:l,visualInteractionEnabled:d,visualAnnotationEntryRoles:c,formatOptions:m=bA,lineLabelOptions:y=zN,referenceObjectSizing:p=xu,initialPersistenceState:A,onPersistenceStateChange:f,confirmAnnotationDelete:v,carmaApi:b=!0})=>{const{labelTextDialogState:T,requestLabelText:I}=PN({enabled:u}),N=!!(s!=null&&s.storageKey)&&((s==null?void 0:s.enabled)??!0),h=TA({enabled:N,storageKey:(s==null?void 0:s.storageKey)??""}),S=A!==void 0?A:h.initialPersistenceState,k=f??h.onPersistenceStateChange,O=N&&A===void 0&&f===void 0?s==null?void 0:s.storageKey:void 0,{annotationsStore:R,services:L,setActiveToolType:C,runtimeAuthoringHost:w,runtimeVisualHost:_,registry:B,activePointQueryPickResultStore:P}=_N({engine:e,plugins:n,initialActiveToolType:r,initialPointTemporaryMode:a,formatOptions:m,lineLabelOptions:y,initialPersistenceState:S,storeKey:O,onPersistenceStateChange:k,requestLabelText:u?I:void 0,confirmAnnotationDelete:v}),F=g.useMemo(()=>({...L,labelTextDialogState:T}),[T,L]);HN(F,b&&u);const J=(e==null?void 0:e.kind)??"none",V=E.jsx(UN,{context:Pa,store:R,children:E.jsx(Jd.Provider,{value:F,children:E.jsxs(ec.Provider,{value:P,children:[o?Fc.createPortal(E.jsx(tu,{}),o):null,E.jsxs(g.Fragment,{children:[u||!O?E.jsx(Bv,{registry:B,setActiveToolType:C}):null,u?E.jsx(Dv,{...w,referenceObjectSizing:p}):null,l??u?E.jsx(Kd,{..._,visualAnnotationEntryRoles:c,visualInteractionEnabled:d,referenceObjectSizing:p}):null]},J),t]})})});return i?E.jsx(Zc,{host:i,children:V}):V},nc=()=>{const{engine:e,registry:n,annotationToolDraftStore:t,formatOptions:o,addAnnotation:r,appendAnnotationsRuntimePersistenceState:a,removeExternalAnnotationsByCollection:i,setActiveToolType:s,requestModeChange:u,requestActivateTool:l,requestFinishMeasurement:d,focusAdjacentAnnotationEntry:c,focusAnnotationId:m,flyToAnnotationById:y,flyToAllAnnotations:p,removeAnnotationById:A,removeAnnotationsByIds:f,buildAllAnnotationsGeoJson:v,exportAnnotationGeoJson:b,exportAllAnnotationsGeoJson:T,toggleAnnotationVisibility:I,toggleAnnotationLocked:N,removeSelectedAnnotations:h,selectAllAnnotations:S,setElevationReferenceAnnotationId:k,toggleAnnotationElevationDisplayMode:O,updateAnnotationDisplayName:R,updateAnnotationShortLabel:L,activeEditedNodeId:C,setPointTemporaryMode:w,setSelectedAnnotationId:_,setSelectedAnnotationIds:B,labelTextDialogState:P}=VN(),F=re(z=>z.annotationToolType),J=re(z=>z.nodes),V=re(z=>z.edges),$=re(z=>z.annotationEntries),U=re(Zo),K=re(z=>z.selectionState.selectedAnnotationIds),ee=re(z=>z.settingsState.elevationReferenceAnnotationId),ne=re(z=>z.settingsState.pointTemporaryMode);return{engine:e,registry:n,annotationToolDraftStore:t,formatOptions:o,activeToolType:F,setActiveToolType:s,requestModeChange:u,requestActivateTool:l,requestFinishMeasurement:d,focusAdjacentAnnotationEntry:c,focusAnnotationId:m,flyToAnnotationById:y,flyToAllAnnotations:p,removeAnnotationById:A,removeAnnotationsByIds:f,buildAllAnnotationsGeoJson:v,exportAnnotationGeoJson:b,exportAllAnnotationsGeoJson:T,toggleAnnotationVisibility:I,toggleAnnotationLocked:N,removeSelectedAnnotations:h,selectAllAnnotations:S,elevationReferenceAnnotationId:ee,setElevationReferenceAnnotationId:k,toggleAnnotationElevationDisplayMode:O,updateAnnotationDisplayName:R,updateAnnotationShortLabel:L,activeEditedNodeId:C,pointTemporaryMode:ne,setPointTemporaryMode:w,nodes:J,edges:V,annotationEntries:$,selectedAnnotationId:U,selectedAnnotationIds:K,setSelectedAnnotationId:_,setSelectedAnnotationIds:B,addAnnotation:r,appendAnnotationsRuntimePersistenceState:a,removeExternalAnnotationsByCollection:i,labelTextDialogState:P}},YN=()=>{const e=$N();return g.useSyncExternalStore(e.subscribe,e.getSnapshot,e.getSnapshot)};WN.__docgenInfo={description:"",methods:[],displayName:"AnnotationsProvider",props:{engine:{required:!0,tsType:{name:"union",raw:"AnnotationEngine | null",elements:[{name:"AnnotationEngine"},{name:"null"}]},description:`Engine adapter the runtime draws and picks with. The app owns the engine
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
}`,signature:{properties:[{key:"annotations",value:{name:"unknown",required:!0}},{key:"source",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_DELETE_CONFIRMATION_SOURCES)[keyof typeof ANNOTATION_DELETE_CONFIRMATION_SOURCES]",required:!0}}]}},name:"context"}],return:{name:"union",raw:"boolean | Promise<boolean>",elements:[{name:"boolean"},{name:"Promise",elements:[{name:"boolean"}],raw:"Promise<boolean>"}]}}},description:""},carmaApi:{required:!1,tsType:{name:"boolean"},description:"Answer `carma.annotations` while mounted, so scripts, stories and tests\ncan drive the tools. On by default; the latest mounted runtime answers.",defaultValue:{value:"true",computed:!1}}}};const KN=({classNames:e,metrics:n,plugins:t,disableSelectWithoutAnnotations:o=!1,showToolTypeIndicators:r=!1,tooltipPlacement:a,getTooltipPopupContainer:i,renderToolButtonBackdrop:s})=>{const{registry:u,activeToolType:l,requestModeChange:d,annotationEntries:c}=nc(),m=t??u.plugins,y=g.useMemo(()=>Yo({annotationEntries:c}),[c]),p=g.useMemo(()=>If(y),[y]),A=g.useMemo(()=>m.map(f=>{const v=f.descriptor,b=v.id===In,T=b?y.length:f.annotationType?p.get(f.annotationType)??0:0;return{id:v.id,label:v.label,tooltip:v.tooltip,icon:v.icon,annotationCount:T,disabled:o&&b&&y.length===0}}),[p,y.length,o,m]);return E.jsx(Zl,{activeToolId:l,tools:A,onToolSelect:f=>{d(f)},classNames:e,metrics:n,showToolTypeIndicators:r,tooltipPlacement:a,getTooltipPopupContainer:i,renderToolButtonBackdrop:s})};KN.__docgenInfo={description:"",methods:[],displayName:"RuntimeAnnotationsToolbar",props:{classNames:{required:!1,tsType:{name:"Partial",elements:[{name:"AnnotationsToolbarClassNames"}],raw:"Partial<AnnotationsToolbarClassNames>"},description:""},metrics:{required:!1,tsType:{name:"Partial",elements:[{name:"AnnotationsToolbarMetrics"}],raw:"Partial<AnnotationsToolbarMetrics>"},description:""},plugins:{required:!1,tsType:{name:"unknown"},description:""},disableSelectWithoutAnnotations:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showToolTypeIndicators:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},tooltipPlacement:{required:!1,tsType:{name:'AnnotationsToolbarProps["tooltipPlacement"]',raw:'AnnotationsToolbarProps["tooltipPlacement"]'},description:""},getTooltipPopupContainer:{required:!1,tsType:{name:'AnnotationsToolbarProps["getTooltipPopupContainer"]',raw:'AnnotationsToolbarProps["getTooltipPopupContainer"]'},description:""},renderToolButtonBackdrop:{required:!1,tsType:{name:'AnnotationsToolbarProps["renderToolButtonBackdrop"]',raw:'AnnotationsToolbarProps["renderToolButtonBackdrop"]'},description:""}}};const Kn={ANNOTATION:"annotation",AUTHORING_INSTRUCTION:"authoringInstruction"},QN=(e,n)=>n?[{kind:ue.ALERT,severity:fn.WARNING,text:n.message},...e]:e,XN=({activePointQueryPickResult:e,activeToolDraftFeedback:n,activeToolDraftState:t,activeToolType:o,authoringInstructionHelpLayout:r,helpLocale:a,includeAuthoringInstruction:i,registry:s,visualOptions:u})=>g.useMemo(()=>{var p;if(!i)return null;const l=hf({activeToolType:o,registry:s});if(!l)return null;const d=((p=l.resolveHelpText)==null?void 0:p.call(l,{draftState:t,pointQueryPickResult:e}))??l.helpText??[],c=QN(d,n);if(c.length===0)return{plugin:l,content:null,visualOptions:null};const m={kind:Kn.AUTHORING_INSTRUCTION,plugin:l},y=Je(typeof u=="function"?u(m):u);return{plugin:l,content:g.createElement(Wo,{visualOptions:y},g.createElement($o,{items:c,layout:r,locale:a,actionTriggerAlign:Hn.START})),visualOptions:y}},[e,n,t,o,r,a,i,s,u]),No={POINT:"point",LINE:"line",AREA:"area"},tc=e=>{switch(e){case q.POINT:return No.POINT;case q.DISTANCE:case q.POLYLINE:return No.LINE;case q.AREA_GROUND:case q.AREA_PLANAR:case q.AREA_VERTICAL:return No.AREA;default:return null}},ZN={kind:ue.HEADING,text:"Bearbeitungsmodus",level:yt.TITLE},JN={kind:ue.HEADING,text:"Punkt verschieben durch ziehen von",level:yt.SECTION},eI={kind:ue.HEADING,text:"Weitere Funktionen",level:yt.SECTION},nI=[JN,{kind:ue.ACTION,leadingLabel:"Scheibenmitte",inputAlternatives:[[Ie.DISC_CENTER]],rightAlignInput:!0,description:"→ auf der Oberfläche des 3D-Modells"},{kind:ue.ACTION,leadingLabel:"Äußere Scheibe",inputAlternatives:[[Ie.DISC_OUTER]],rightAlignInput:!0,description:"→ in der Höhenebene"},{kind:ue.ACTION,leadingLabel:"Blaue Pfeilspitzen",inputAlternatives:[],description:"→ entlang der Höhenachse"}],tI={kind:ue.ACTION,inputAlternatives:[[Ie.CLICK]],trailingLabel:"auf anderen Punkt",description:"Höhe des Punktes übernehmen"},oI={kind:ue.ACTION,inputAlternatives:[[Ie.ESCAPE],[Ie.CLICK]],trailingLabel:"außerhalb des Punktes",trailingLabelAfterLastInput:!0,description:"Bearbeitungsmodus verlassen"},po=e=>({kind:ue.ACTION,inputAlternatives:[[Ie.BACKSPACE]],description:e}),rI=e=>{switch(e){case q.POINT:case q.DISTANCE:return po("Messung löschen");case q.POLYLINE:return po("Punkt löschen (beim letzten verbleibenden Punkt die Messung)");case q.AREA_GROUND:case q.AREA_PLANAR:case q.AREA_VERTICAL:return po("Punkt löschen (unter drei Punkten die Messung)");default:return po("Messung löschen")}},aI=({toolType:e})=>{const n=tc(e);if(!n)return[];const t=[eI,...n===No.POINT?[]:[tI],oI,rI(e)];return[ZN,...nI,...t]},iI=({activeEditedNodeId:e,activeToolType:n,annotationEntries:t,registry:o,authoringInstructionHelpLayout:r,helpLocale:a,includeAuthoringInstruction:i,visualOptions:s})=>g.useMemo(()=>{if(!i||!e||n!==In)return null;const u=t.find(y=>y.nodeIds.includes(e))??null;if(!u)return null;const l=o.getPlugin(u.toolType)??o.getPluginsByAnnotationType(u.toolType)[0]??null;if(!l)return null;const d=aI({toolType:u.toolType});if(d.length===0)return null;const c={kind:Kn.AUTHORING_INSTRUCTION,plugin:l},m=Je(typeof s=="function"?s(c):s);return{kind:Kn.AUTHORING_INSTRUCTION,plugin:l,slots:{content:g.createElement(Wo,{visualOptions:m},g.createElement($o,{items:d,layout:r,locale:a,actionTriggerAlign:Hn.START})),collapsible:!1},visualOptions:m}},[e,n,t,r,a,i,o,s]),Rs=Object.freeze({coordinates:Object.freeze([]),linkedNodeGroupIds:Object.freeze([]),feedback:null}),sI=({activeToolType:e,annotationToolDraftStore:n})=>{const t=g.useMemo(()=>e?[e]:[],[e]),o=Yd({draftStore:n,toolTypes:t}),r=e?o[e]??Rs:Rs;return{activeToolDraftState:r,activeToolDraftFeedback:e?r.feedback??null:null}},lI=Object.freeze([Ae.LOCK,Ae.DELETE]),uI=[{kind:ue.TEXT,text:"Lange auf einen Punkt der ausgewählten Messung klicken, um den Bearbeitungsmodus zu öffnen."}],dI=({annotation:e,visualOptions:n})=>{const t=pu(e),o={kind:Kn.ANNOTATION,annotation:e},r=Je(typeof n=="function"?n(o):n);return{...r,readOnly:!!e.locked||t,hiddenActionIds:t?Array.from(new Set([...r.hiddenActionIds,...lI])):r.hiddenActionIds}},cI=({activeToolDraftFeedback:e,activeToolDraftState:n,activeToolType:t,annotationEntries:o,elevationReferenceAnnotationId:r,exportAnnotationGeoJson:a,authoringInstruction:i,flyToAllAnnotations:s,focusAnnotationId:u,formatOptions:l,nodes:d,registry:c,removeAnnotationById:m,selectedAnnotationId:y,setElevationReferenceAnnotationId:p,setSelectedAnnotationId:A,toggleAnnotationLocked:f,toggleAnnotationVisibility:v,updateAnnotationDisplayName:b,updateAnnotationShortLabel:T,visualOptions:I})=>g.useMemo(()=>{var w;if(!y)return null;const N=o.find(_=>_.id===y)??null;if(!N)return null;const h=c.getPluginsByAnnotationType(N.toolType).find(_=>{var B;return(B=_.infoBox)==null?void 0:B.getSlots})??null;if(!((w=h==null?void 0:h.infoBox)!=null&&w.getSlots))return null;const S=pu(N),k=dI({annotation:N,visualOptions:I}),O=h.infoBox.getSlots({annotation:N,annotationEntries:o,nodes:d,selectedAnnotationId:N.id,setSelectedAnnotationId:A,focusAnnotationId:u,flyToAllAnnotations:s,removeAnnotationById:m,exportAnnotationGeoJson:a,toggleAnnotationVisibility:v,toggleAnnotationLocked:f,elevationReferenceAnnotationId:r,setElevationReferenceAnnotationId:p,updateAnnotationDisplayName:S?()=>{}:b,updateAnnotationShortLabel:S?()=>{}:T,formatOptions:l,infoBoxVisualOptions:k});if(!O)return null;const R=(i==null?void 0:i.plugin.alwaysShowHelpTextWhileActive)===!0&&(n.coordinates.length>0||e!==null),L=t===In&&tc(N.toolType)!==null&&!N.locked&&!S;let C;return L&&(C=g.createElement(Wo,{visualOptions:k,children:g.createElement($o,{items:uI})})),{kind:Kn.ANNOTATION,annotation:N,instructionContent:R?i.content??void 0:C,instructionToolId:R?i.plugin.id:void 0,slots:O,visualOptions:k}},[e,n,t,o,r,a,i,s,u,l,d,c,m,y,p,A,f,v,b,T,I]),mI=({authoringInstructionHelpLayout:e,helpLocale:n,includeAuthoringInstruction:t=!1,visualOptions:o}={})=>{const r=nc(),a=YN(),{activeToolDraftFeedback:i,activeToolDraftState:s}=sI(r),u=XN({activePointQueryPickResult:a,activeToolDraftFeedback:i,activeToolDraftState:s,activeToolType:r.activeToolType,authoringInstructionHelpLayout:e,helpLocale:n,includeAuthoringInstruction:t,registry:r.registry,visualOptions:o}),l=iI({activeEditedNodeId:r.activeEditedNodeId,activeToolType:r.activeToolType,annotationEntries:r.annotationEntries,registry:r.registry,authoringInstructionHelpLayout:e,helpLocale:n,includeAuthoringInstruction:t,visualOptions:o}),d=cI({activeToolDraftFeedback:i,activeToolDraftState:s,activeToolType:r.activeToolType,annotationEntries:r.annotationEntries,elevationReferenceAnnotationId:r.elevationReferenceAnnotationId,exportAnnotationGeoJson:r.exportAnnotationGeoJson,authoringInstruction:u,flyToAllAnnotations:r.flyToAllAnnotations,focusAnnotationId:r.focusAnnotationId,formatOptions:r.formatOptions,nodes:r.nodes,registry:r.registry,removeAnnotationById:r.removeAnnotationById,selectedAnnotationId:r.selectedAnnotationId,setElevationReferenceAnnotationId:r.setElevationReferenceAnnotationId,setSelectedAnnotationId:r.setSelectedAnnotationId,toggleAnnotationLocked:r.toggleAnnotationLocked,toggleAnnotationVisibility:r.toggleAnnotationVisibility,updateAnnotationDisplayName:r.updateAnnotationDisplayName,updateAnnotationShortLabel:r.updateAnnotationShortLabel,visualOptions:o});return l||(d||r.selectedAnnotationId?d:!(u!=null&&u.content)||!u.visualOptions?null:{kind:Kn.AUTHORING_INSTRUCTION,plugin:u.plugin,slots:{content:u.content,collapsible:!1},visualOptions:u.visualOptions})},yI=({pixelWidth:e,fitContentWidth:n,useControlLayout:t,controlPosition:o,controlOrder:r,collapsedHorizontalAnchor:a,style:i,visualOptions:s})=>{const u=mI({visualOptions:s});return!u||u.kind!==Kn.ANNOTATION?null:E.jsx(Gl,{pixelWidth:e,fitContentWidth:n,useControlLayout:t,controlPosition:o,controlOrder:r,collapsedHorizontalAnchor:a,style:i,slots:u.slots,visualOptions:u.visualOptions})};yI.__docgenInfo={description:"",methods:[],displayName:"RuntimeAnnotationInfoBox"};const pI=new Bo,gI=(e,n,t)=>{const o=new x,r=new x,a=new x;uc(e,pI).invert().extractBasis(o,r,a);const i={vertical:a.normalize(),"horizontal-east":o.normalize(),"horizontal-north":r.normalize()};return Du(n,t).map(s=>({...s,direction:i[s.id]}))},NS=(e,n,t)=>gI(e,n,t).filter(o=>Mu(o.id)),fI={vertical:new x(0,0,1),"horizontal-east":new x(1,0,0),"horizontal-north":new x(0,1,0)},IS=(e,n,t)=>e&&e.length>0?e.map(o=>({...o,color:o.color??Pu})):$A(n,t).map(o=>({...o,direction:fI[o.id]})),hS="#ffffff",SS=.5,CS="#ffffff",AI="rgba(255,255,255,0.82)",vI=.7,ES=Nn+1,TI=Nn/2,bI="rgba(255, 255, 255, 0.95)",ws="rgba(255, 255, 255, 0.95)",xs=(e,n,{labels:t,arrowActiveEdgePx:o,onAxisMouseDown:r,onWheel:a})=>g.createElement("svg",{key:`${n.id}-arrow-${e}`,[`data-point-move-axis-arrow-${e}`]:n.id,onMouseDown:i=>r(i,n),onWheel:a,viewBox:um(o),style:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -100%)",transformOrigin:"50% 100%",width:`${o}px`,height:`${dm(o)}px`,display:"block",color:n.color??Pu,zIndex:BA,pointerEvents:"auto",cursor:"move",userSelect:"none",overflow:"visible"},title:n.title??t.genericAxis},g.createElement("path",{"data-point-move-axis-arrow-outline":"true",d:Qs(o),fill:"currentColor",stroke:ws,strokeWidth:`${Nn}`,strokeLinejoin:"round",strokeLinecap:"round",paintOrder:"stroke",vectorEffect:"non-scaling-stroke",shapeRendering:"geometricPrecision"}),g.createElement("path",{"data-point-move-axis-arrow-rim":"true",d:"",fill:"none",stroke:ws,strokeOpacity:vI,strokeWidth:`${Nn}`,strokeLinejoin:"round",vectorEffect:"non-scaling-stroke",shapeRendering:"geometricPrecision",style:{display:"none"}}),g.createElement("circle",{"data-point-move-axis-arrow-tip":"true",cx:o/2,cy:0,r:TI,fill:bI})),kI=(e,{axisArrowOffsetPx:n,axisWidthPx:t})=>g.createElement("div",{key:`${e.id}-line`,"data-point-move-axis-line":e.id,style:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)",width:`${n*2}px`,height:`${t}px`,background:AI,opacity:1,zIndex:PA,pointerEvents:"none"}}),NI=e=>{const{axisCandidates:n,labels:t,axisUiLengthPx:o,showAxes:r,showRotationHandle:a,hitOnly:i,snapPlaneDragToGround:s,centerPlaneDragCursor:u,onDiscPlaneMouseDown:l,onRotationHandleMouseDown:d,onCenterMouseDown:c,onWheel:m}=e;return g.createElement("div",{style:{position:"relative",width:`${o}px`,height:`${o}px`,pointerEvents:"none",userSelect:"none",overflow:"visible"}},...(r?n:[]).flatMap(y=>[...i?[]:[kI(y,e)],xs("up",y,e),xs("down",y,e)]),g.createElement("svg",{key:"disc-outline-svg","data-point-move-disc-outline-svg":"true",viewBox:`-160 -160 ${Qn} ${Qn}`,width:`${Qn}`,height:`${Qn}`,style:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)",width:`${Qn}px`,height:`${Qn}px`,overflow:"hidden",pointerEvents:"none",zIndex:MA}},...(i?[]:n).map(y=>g.createElement("path",{key:`disc-outline-path-${y.id}`,"data-point-move-disc-outline-path":y.id,d:"",fill:"none",stroke:Nr,strokeWidth:`${Nn}`,strokeLinejoin:"round",strokeLinecap:"round",vectorEffect:"non-scaling-stroke",shapeRendering:"geometricPrecision",style:{opacity:HA,display:"none",pointerEvents:"none"}})),g.createElement("path",{key:"disc-interaction-path","data-point-move-disc-interaction-path":"true",d:"",onMouseDown:l,onWheel:m,fill:"rgba(255,255,255,0.001)",stroke:"none",style:{display:"none",pointerEvents:"auto",cursor:UA}},g.createElement("title",null,t.outerDisc)),...a?[g.createElement("ellipse",{key:"disc-rotation-handle","data-point-move-disc-rotation-handle":"true",cx:"0",cy:"0",rx:`${Ki}`,ry:`${Ki}`,onMouseDown:d,onWheel:m,fill:Nr,stroke:Nr,strokeWidth:`${Nn}`,vectorEffect:"non-scaling-stroke",style:{display:"none",opacity:i?0:1,pointerEvents:"auto",cursor:"grab"}})]:[]),g.createElement("div",{"data-point-move-axis-center-hit":"true",onMouseDown:c,onWheel:m,style:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)",width:`${Yi}px`,height:`${Yi}px`,borderRadius:"50%",background:"transparent",zIndex:DA,pointerEvents:"auto",cursor:u,userSelect:"none"},title:s?t.surfacePlane:t.freePlane}))};NI.__docgenInfo={description:"The overlay markup; `layoutPointMoveGizmoOverlay` positions it every frame.",methods:[],displayName:"createPointMoveGizmoOverlayContent",props:{axisCandidates:{required:!0,tsType:{name:"Array",elements:[{name:"AnnotationGizmoAxisCandidate"}],raw:"AnnotationGizmoAxisCandidate[]"},description:""},labels:{required:!0,tsType:{name:"AnnotationGizmoLabels"},description:""},axisUiLengthPx:{required:!0,tsType:{name:"number"},description:""},axisArrowOffsetPx:{required:!0,tsType:{name:"number"},description:""},axisWidthPx:{required:!0,tsType:{name:"number"},description:""},arrowActiveEdgePx:{required:!0,tsType:{name:"number"},description:""},showAxes:{required:!0,tsType:{name:"boolean"},description:""},showRotationHandle:{required:!0,tsType:{name:"boolean"},description:""},hitOnly:{required:!0,tsType:{name:"boolean"},description:"The scene draws the gizmo: only the transparent hit areas stay here."},snapPlaneDragToGround:{required:!0,tsType:{name:"boolean"},description:""},centerPlaneDragCursor:{required:!0,tsType:{name:"string"},description:""},onAxisMouseDown:{required:!0,tsType:{name:"signature",type:"function",raw:`(
  event: ReactMouseEvent<HTMLDivElement>,
  axisCandidate: AnnotationGizmoAxisCandidate
) => void`,signature:{arguments:[{type:{name:"ReactMouseEvent",elements:[{name:"HTMLDivElement"}],raw:"ReactMouseEvent<HTMLDivElement>"},name:"event"},{type:{name:"AnnotationGizmoAxisCandidate"},name:"axisCandidate"}],return:{name:"void"}}},description:""},onDiscPlaneMouseDown:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: ReactMouseEvent<SVGPathElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",elements:[{name:"SVGPathElement"}],raw:"ReactMouseEvent<SVGPathElement>"},name:"event"}],return:{name:"void"}}},description:""},onRotationHandleMouseDown:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: ReactMouseEvent<SVGCircleElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",elements:[{name:"SVGCircleElement"}],raw:"ReactMouseEvent<SVGCircleElement>"},name:"event"}],return:{name:"void"}}},description:""},onCenterMouseDown:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: ReactMouseEvent<HTMLDivElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",elements:[{name:"HTMLDivElement"}],raw:"ReactMouseEvent<HTMLDivElement>"},name:"event"}],return:{name:"void"}}},description:""},onWheel:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: ReactWheelEvent) => void",signature:{arguments:[{type:{name:"ReactWheelEvent"},name:"event"}],return:{name:"void"}}},description:""}}};const II=new Bo,hI=({model:e,handle:n})=>{const t=e.place();t&&n.setModelMatrix(t),n.setVisible(t!==null)},SI=e=>{e.forEach(({handle:n})=>n.destroy()),e.clear()},OS=(e,n)=>{const t=g.useRef(new Map);g.useEffect(()=>{const o=t.current;return()=>{j(e)?(SI(o),e.requestRender()):o.clear()}},[e]),g.useEffect(()=>{const o=t.current;if(!j(e)){o.clear();return}const r=new Set(n.map(a=>a.id));o.forEach((a,i)=>{r.has(i)||(a.handle.destroy(),o.delete(i))}),n.forEach(a=>{const i=o.get(a.id);if((i==null?void 0:i.model.signature)===a.signature){i.model=a;return}i==null||i.handle.destroy(),o.delete(a.id);const s=a.place(),u=a.create(e,s??II);u&&(u.setVisible(s!==null),o.set(a.id,{model:a,handle:u}))}),e.requestRender()},[e,n]),g.useEffect(()=>{if(j(e))return e.subscribePreRender(()=>{try{t.current.forEach(hI)}catch{}})},[e])};export{BA as $,zm as A,Le as B,np as C,nd as D,rb as E,xd as F,xe as G,Dd as H,kd as I,Im as J,Aa as K,qv as L,ZI as M,Kh as N,wh as O,bd as P,FA as Q,Qe as R,Pu as S,Zh as T,Xh as U,Qh as V,WA as W,JI as X,Jh as Y,$A as Z,PA as _,rh as a,vk as a$,Nn as a0,Qn as a1,MA as a2,Nr as a3,HA as a4,UA as a5,Ki as a6,DA as a7,Rh as a8,xh as a9,Bp as aA,kv as aB,Ju as aC,nn as aD,Fp as aE,Yu as aF,Ku as aG,Av as aH,Xu as aI,Qu as aJ,Zu as aK,Np as aL,Ip as aM,Fl as aN,Mp as aO,Sv as aP,Dp as aQ,wv as aR,vg as aS,Ae as aT,sh as aU,lh as aV,uh as aW,ch as aX,yh as aY,gh as aZ,In as a_,Ph as aa,zh as ab,Uh as ac,$h as ad,Wh as ae,Yh as af,XI as ag,Mh as ah,Dh as ai,Bh as aj,qh as ak,jh as al,Hh as am,eS as an,_h as ao,Fh as ap,Gh as aq,Mu as ar,Vh as as,hm as at,Yi as au,Du as av,Li as aw,Pn as ax,Eh as ay,ll as az,ah as b,_p as b$,bs as b0,Wd as b1,Ak as b2,fS as b3,Gp as b4,yS as b5,vS as b6,AS as b7,pS as b8,mS as b9,nc as bA,ya as bB,mt as bC,Hy as bD,Yy as bE,oe as bF,xo as bG,$t as bH,Yo as bI,aS as bJ,tr as bK,Sp as bL,Dl as bM,be as bN,oh as bO,Gm as bP,hT as bQ,er as bR,IT as bS,cS as bT,Ad as bU,nh as bV,lS as bW,aa as bX,Va as bY,Ba as bZ,Qt as b_,j as ba,gS as bb,NS as bc,ba as bd,Oh as be,ES as bf,eh as bg,AI as bh,hS as bi,SS as bj,ws as bk,CS as bl,Od as bm,OS as bn,ed as bo,IS as bp,NI as bq,Fn as br,Gr as bs,il as bt,th as bu,eu as bv,ve as bw,WN as bx,KN as by,yI as bz,$m as c,rS as c0,Qb as c1,zb as c2,kh as c3,Nd as c4,Se as c5,ut as c6,nr as c7,ih as c8,wd as c9,_o as cA,nS as cB,Yt as cC,Kk as cD,uu as cE,kS as cF,Rn as cG,fe as cH,Nh as cI,ln as cJ,Lh as cK,qn as cL,Ih as cM,cA as cN,Tr as cO,gp as cP,Bl as cQ,rp as cR,bS as cS,TS as cT,Bu as cU,dS as ca,Ch as cb,Ah as cc,Xk as cd,Qk as ce,Ma as cf,od as cg,pv as ch,gv as ci,iS as cj,sS as ck,sa as cl,bp as cm,Ne as cn,hh as co,Sh as cp,wp as cq,Ie as cr,fn as cs,uS as ct,bh as cu,vh as cv,Th as cw,tS as cx,Yk as cy,oS as cz,Vm as d,Fe as e,Hn as f,q as g,$o as h,ue as i,Wn as j,Ee as k,Je as l,Wo as m,Ig as n,Up as o,Tg as p,kg as q,aI as r,Zy as s,lt as t,H as u,gr as v,X as w,Te as x,Ll as y,ab as z};
