import{j as C}from"./jsx-runtime-DNp_qQjF.js";import{r as g,b as Ba,R as Sd}from"./index-CSJjS6Ct.js";import{f as Wo,C as te,a as je,r as Cd}from"./index-D9NkO_DI.js";import{c as ms,a as Rt,b as ys,J as ps,K as Ed,l as Cr,n as Od}from"./camera-local-mercator-fit-DXf9YOQm.js";import{d as Fa,r as Lt,i as gs,b as fs,T as Oo,P as Rd,M as Ld}from"./angles-O4gcnBa7.js";import{V as w,s as na,g as As,f as Ts}from"./three.module-Dt7s5xph.js";import{c as Ue}from"./clamp-co6UzHBn.js";import{V as Ln}from"./constants-C6-_E4xW.js";import{F as ot,bv as wd,bw as qd,aq as xd,ap as _d,bx as Pd,by as Md,bz as Dd,V as Bd,aX as Fd,bA as Gd,z as jd,bB as Ud,bC as Hd,bD as zd,bE as Vd}from"./index-A73S1lKT.js";import{T as vs}from"./index-CXgqBzOb.js";import{h as $d,l as Ns,i as ks,k as Yd,q as bs,s as Wd,t as Qd,u as Kd,e as Xd,A as Zd,d as Jd,c as ec,a as nc,b as tc}from"./StripChartPanel-MDqMJoPP.js";import{r as oc}from"./index-D1cknlJ6.js";import{w as Qo,x as Qt,y as rc,z as ac,A as ic,i as sc,B as lc,D as uc,C as dc,E as cc,f as Ro,s as Is,t as mc,F as ta,G as hs,H as Ss,I as Cs,m as Es,n as Ko,S as yc,J as pc,l as oa,K as gc,M as Xo,L as fc}from"./useLineSegmentVisualizers-CwmHx-Me.js";import{F as gt}from"./locales-DbHdB30_.js";import{f as Xn,L as Ac}from"./length-format-BQI28fDZ.js";import{c as ra}from"./plane-basis-BMhQcvTN.js";import{i as Tc}from"./is-finite-number-DNiDh1l_.js";import{i as Os}from"./plane-intersections-DhJfyQJx.js";import{r as vc,P as Rs,s as Nc,c as kc,a as bc,L as Ic}from"./computePointLabelLayout-CH1gZACd.js";import{q as Ls,h as ws,s as qs,f as hc,i as Sc,j as Cc,g as Ec,n as Oc,c as Rc,d as Lc,a as wc}from"./geometry2d-CyyfBlyf.js";import{u as qc}from"./useLineVisualizers-DSwtMydO.js";/* empty css                                      */import{z as xc}from"./angle-normalization-9MH7zpFM.js";import{r as _c,c as Pc}from"./geospatial-camera-basis-DSM7oewj.js";import{g as Mc,A as xs}from"./cssAxisGizmoElement-CU0gfUN_.js";const Dc=(e,n,t)=>{const o=Ue((t-e)/(n-e),0,1);return o*o*(3-2*o)},aa={SCREEN:"screen",WORLD:"world"},Ga=[1,2,5,10],_s=e=>{if(!Number.isFinite(e)||e<=0)return e;const n=10**Math.floor(Math.log10(e));let t=Ga[0]*n;for(const o of Ga){const r=o*n;Math.abs(r-e)<Math.abs(t-e)&&(t=r)}return t},Bc=({targetScreenPx:e,pixelPerWorld:n,quantize:t})=>{if(!Number.isFinite(n)||n<=0)return e>0?e:0;const o=e/n;return t?_s(o):o},Ib=(e,n,t,o)=>!Number.isFinite(e)||e<=Ln?0:Ue(n/e,t,o),Ps=2,Ms=(e,n,t=Ps)=>{if(!Number.isFinite(e)||e<=0)return!0;if(!Number.isFinite(n)||n<=0)return!1;const o=n/e;return o>=t||o<=1/t},hb=()=>{let e=null,n=null;return{resolve:({currentScale:t,targetScreenPx:o,fallback:r,stepFactor:a=Ps,quantize:i=!1,minWorldSize:s=0})=>!Number.isFinite(t)||t<=0?e??r:((e===null||Ms(n??0,t,a))&&(e=Math.max(Bc({targetScreenPx:o,pixelPerWorld:t,quantize:i}),s),n=t),e),reset:()=>{e=null,n=null}}},Fc={minSegments:48,maxSegments:256,targetEdgePx:2.5},Sb=(e,n={})=>{const{minSegments:t,maxSegments:o,targetEdgePx:r}={...Fc,...n};if(!Number.isFinite(e)||e<=0)return t;const a=2*Math.PI*e,i=Math.ceil(a/Math.max(.5,r));return Math.min(o,Math.max(t,i))},yn=Object.freeze({epsilon:1e-6,polylabelPrecision:.5,polylabelMaxCells:2e4,interiorSampleGrid:18,minInteriorSampleGrid:6,inwardProbeSteps:[.5,1,2,4,8,12,16,24,32]}),Gc=(e,n,t)=>{const o=t.x-n.x,r=t.y-n.y,a=o*o+r*r;return a<=yn.epsilon**2?0:Ue(((e.x-n.x)*o+(e.y-n.y)*r)/a,0,1)},jc=(e,n,t)=>{const o=Gc(e,n,t);return{x:n.x+(t.x-n.x)*o,y:n.y+(t.y-n.y)*o}},Ds=(e,n,t)=>{const o=jc(e,n,t);return Math.hypot(e.x-o.x,e.y-o.y)},Bs=e=>e.map((n,t)=>[n,e[(t+1)%e.length]]),ia=(e,n,t=yn.epsilon)=>{if(e.length<3)return!1;let o=!1;for(const[r,a]of Bs(e)){if(Ds(n,r,a)<=t)return!0;a.y>n.y!=r.y>n.y&&n.x<(r.x-a.x)*(n.y-a.y)/(r.y-a.y+Number.EPSILON)+a.x&&(o=!o)}return o},Fs=(e,n)=>e.length<2?0:Math.min(...Bs(e).map(([t,o])=>Ds(n,t,o))),Uc=(e,n)=>(ia(e,n)?1:-1)*Fs(e,n),Gs=e=>{const n=e.map(a=>a.x),t=e.map(a=>a.y),o=Math.min(...n),r=Math.min(...t);return{minX:o,minY:r,width:Math.max(...n)-o,height:Math.max(...t)-r}},Hc=(e,n=yn.interiorSampleGrid)=>{const{minX:t,minY:o,width:r,height:a}=Gs(e);if(r<=0||a<=0)return null;const i=Math.max(yn.minInteriorSampleGrid,Math.floor(n));let s=null;for(let l=0;l<=i;l+=1)for(let u=0;u<=i;u+=1){const d={x:t+r*u/i,y:o+a*l/i};if(!ia(e,d))continue;const c=Fs(e,d);(!s||c>s.radius)&&(s={center:d,radius:c})}return s},zc=(e,n=yn.polylabelPrecision,t=yn.polylabelMaxCells)=>{if(e.length<3||e.some(p=>!Number.isFinite(p.x)||!Number.isFinite(p.y)))return null;const{minX:o,minY:r,width:a,height:i}=Gs(e),s=Math.min(a,i);if(a<=0||i<=0||s<=yn.epsilon)return null;const l=(p,A,f)=>{const T=Uc(e,{x:p,y:A});return{x:p,y:A,h:f,d:T,max:T+f*Math.SQRT2}},u=[];for(let p=o;p<o+a;p+=s)for(let A=r;A<r+i;A+=s)u.push(l(p+s/2,A+s/2,s/2));const d=Ls({points:e,degenerateAreaEpsilon:yn.epsilon}),c=l(o+a/2,r+i/2,0);let y=d?l(d.x,d.y,0):c;c.d>y.d&&(y=c);const m=Math.max(.1,n);for(let p=0;u.length>0&&p<t;p+=1){const A=u.reduce((k,N,v)=>N.max>u[k].max?v:k,0),[f]=u.splice(A,1);if(!f)break;if(f.d>y.d&&(y=f),f.max-y.d<=m)continue;const T=f.h/2;u.push(l(f.x-T,f.y-T,T),l(f.x+T,f.y-T,T),l(f.x-T,f.y+T,T),l(f.x+T,f.y+T,T))}return Number.isFinite(y.d)&&y.d>0?{center:{x:y.x,y:y.y},radius:y.d}:Hc(e)},Vc=(e,n)=>{const t=n.map(s=>({x:s.x-e.x,y:s.y-e.y})),o=t.map(s=>Math.hypot(s.x,s.y));if(o.some(s=>s<1e-9))return null;const r=t.map((s,l)=>{const u=t[(l+1)%t.length];return Math.tan(Math.atan2(s.x*u.y-s.y*u.x,s.x*u.x+s.y*u.y)/2)}),a=o.map((s,l)=>(r[(l-1+o.length)%o.length]+r[l])/s),i=a.reduce((s,l)=>s+l,0);return!Number.isFinite(i)||Math.abs(i)<1e-12?null:a.map(s=>s/i)},$c=(e,n)=>n.reduce((t,o,r)=>ws(t,qs(o,e[r]??0)),{x:0,y:0}),Yc=e=>{if(e.length<3)return[...e];const n=[...e].sort((i,s)=>i.x-s.x||i.y-s.y),t=(i,s,l)=>(s.x-i.x)*(l.y-i.y)-(s.y-i.y)*(l.x-i.x),o=i=>i.reduce((s,l)=>{for(;s.length>=2&&t(s[s.length-2],s[s.length-1],l)<=0;)s.pop();return s.push(l),s},[]),r=o(n),a=o([...n].reverse());return[...r.slice(0,-1),...a.slice(0,-1)]},Lo=Ln*Ln,Wc=e=>e.length===0?null:e.reduce((n,t)=>n.add(t),e[0].clone().setScalar(0)).divideScalar(e.length),Cb=(e,n,t)=>{const o=n.clone().sub(e),r=o.length();return r>0?e.clone().addScaledVector(o,Math.min(t,r)/r):e.clone()},Ee=e=>e.lengthSq()<=Lo?null:e.clone().normalize(),rt=(e,n,t=e.clone())=>{const o=n.lengthSq();return o<=Lo?t.copy(e):t.copy(e).addScaledVector(n,-e.dot(n)/o)},js=(e,n,t,o=e.clone())=>{const r=t.lengthSq();if(r<=Lo)return o.copy(e);const a=e.clone().sub(n).dot(t);return o.copy(e).addScaledVector(t,-a/r)},Eb=(e,n,t)=>{const o=t.length();return o<=Ln?0:e.clone().sub(n).dot(t)/o},Us=(e,n,t,o=e.clone())=>(o.crossVectors(n.clone().sub(e),t.clone().sub(e)),o.lengthSq()<=Lo?null:o.normalize()),Qc=(e,n,t,o,r)=>{if(!Number.isFinite(o)||o<=0)return null;const a=n.clone().sub(e),i=t.clone().sub(e),s=a.length(),l=i.length();if(s<=Ln||l<=Ln)return null;const u=a.normalize(),d=i.normalize(),c=Ue(u.dot(d),-1,1),y=Math.acos(c);if(!Number.isFinite(y)||y<=.001)return null;const m=d.clone().addScaledVector(u,-c);if(m.length()<=1e-5)return null;m.normalize();const p=Math.min(o,s*.999,l*.999);if(p<=Ln)return null;const A=Math.max(8,r);return Array.from({length:A+1},(f,T)=>{const k=y*(T/A);return u.clone().multiplyScalar(Math.cos(k)).addScaledVector(m,Math.sin(k)).normalize().multiplyScalar(p).add(e)})},Kc=1e-12,U=(e,n)=>ms(Fa(e.longitude),Fa(e.latitude),e.altitude,n),_n=e=>{const n=Rt(e);return{longitude:Lt(n.longitude),latitude:Lt(n.latitude),altitude:n.altitude}},Er=(e,n=new w)=>n.copy(e).lengthSq()>Kc?n.normalize():n.set(0,0,1),sa=(e,n=new w)=>{const{longitude:t,latitude:o}=Rt(e),r=Math.cos(o);return n.set(r*Math.cos(t),r*Math.sin(t),Math.sin(o))},Ob=(e,n,t)=>{const o=U({...e,altitude:0}).lerp(U({...n,altitude:0}),t),{longitude:r,latitude:a}=Rt(o);return{longitude:Lt(r),latitude:Lt(a),altitude:e.altitude+(n.altitude-e.altitude)*t}},Xc=(e,n)=>{const t=ys(U({...n,altitude:0}),U({...e,altitude:0}));return Math.hypot(t.east,t.north)},Ae=(e,n=new w)=>n.set(e.x,e.y,e.z),en=e=>({x:e.x,y:e.y,z:e.z}),Hs=gs,Zc=(e,n,t=Hs)=>{const o=n.clone().sub(e);if(!(o.lengthSq()>0))return null;o.normalize();const{north:r,up:a}=ps(e),i=Math.abs(a.dot(o))>1-1e-12?r:a;return{positionECEF:e.clone(),directionECEF:o,upECEF:rt(i,o).normalize(),verticalFovRad:t}},ja=e=>Pc({forward:e.directionECEF,up:e.upECEF,right:new w().crossVectors(e.directionECEF,e.upECEF)}),Jc=(e,n,t)=>{const{forward:o,up:r}=_c(ja(e).slerp(ja(n),t));return{positionECEF:Ed(e.positionECEF,n.positionECEF,t),directionECEF:o,upECEF:r,verticalFovRad:Cr(e.verticalFovRad,n.verticalFovRad,t)}},Rb=(e,n,t)=>{const o=e.dot(t.up),r=Math.atan2(e.dot(t.east),e.dot(t.north)),a=rt(t.up,e);return a.lengthSq()<1e-12&&a.copy(t.east).multiplyScalar(Math.sin(r)).addScaledVector(t.north,Math.cos(r)),a.normalize(),{bearing:r,pitch:Math.acos(Ue(-o,-1,1)),roll:Math.atan2(new w().crossVectors(a,n).dot(e),a.dot(n))}},em={prefix:"fac",iconName:"row-resize",icon:[512,512,[],"","M278.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-64 64c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8l32 0l0 96l-214.7 0l0 64l214.7 0l0 96l-32 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l64 64c12.5 12.5 32.8 12.5 45.3 0l64-64c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8l-32 0l0-96l214.7 0l0-64l-214.7 0l0-96l32 0c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-64-64z"]},nm=Ns+ks,tm=10,sn=$d/2,ze=Ns,ln=ks,un=Yd,om=Object.freeze([{key:"right",pathD:`M ${ze} 0 L ${ze+un} ${-1.5} L ${ze+ln} ${-1.5} L ${ze+ln} ${sn} L ${ze+un} ${sn} Z`},{key:"left",pathD:`M ${-5-ln} ${-1.5} L ${-5-un} ${-1.5} L -5 0 L ${-5-un} ${sn} L ${-5-ln} ${sn} Z`},{key:"bottom",pathD:`M ${-1.5} ${ze+un} L 0 ${ze} L ${sn} ${ze+un} L ${sn} ${ze+ln} L ${-1.5} ${ze+ln} Z`},{key:"top",pathD:`M ${-1.5} ${-5-ln} L ${sn} ${-5-ln} L ${sn} ${-5-un} L 0 -5 L ${-1.5} ${-5-un} Z`}]),Ua=100,Ha=300,Or=({additionalAttributes:e="",fill:n,pathDefinitions:t,stroke:o,strokeLinejoin:r,strokeWidth:a})=>t.map(({pathD:i})=>`<path d="${i}" fill="${n}"${typeof o=="string"?` stroke="${o}"`:""}${typeof r=="string"?` stroke-linejoin="${r}"`:""}${typeof a=="number"?` stroke-width="${a}"`:""}${e}/>`).join(""),zs=({contentMarkup:e,rootStyleText:n,sizePx:t,viewBox:o})=>[`<svg xmlns="http://www.w3.org/2000/svg" width="${t}" height="${t}" viewBox="${o}" preserveAspectRatio="xMidYMid meet" shape-rendering="geometricPrecision"${typeof n=="string"&&n.length>0?` style="${n}"`:""}>`,e,"</svg>"].join(""),Lb=({pathDefinitions:e,foregroundFill:n,rootStyleText:t,sizePx:o,viewBox:r})=>zs({contentMarkup:Or({fill:n,pathDefinitions:e}),rootStyleText:t,sizePx:o,viewBox:r}),wb=({pathDefinitions:e,shadowBlurPx:n,shadowStrokeColor:t,shadowStrokeLinejoin:o,shadowStrokeWidth:r,rootStyleText:a,sizePx:i,viewBox:s})=>{const l=Math.max(n,0),u=Math.max(r,0),d="cursor-shadow-blur";return zs({contentMarkup:[l>0?`<defs><filter id="${d}" x="-${Ua}%" y="-${Ua}%" width="${Ha}%" height="${Ha}%"><feDropShadow dx="0" dy="0" stdDeviation="${l}" flood-color="${t}" flood-opacity="1"/></filter></defs>`:"",u>0?Or({additionalAttributes:l>0?` filter="url(#${d})"`:"",fill:t,pathDefinitions:e,stroke:t,strokeLinejoin:o,strokeWidth:u}):Or({additionalAttributes:l>0?` filter="url(#${d})"`:"",fill:t,pathDefinitions:e})].join(""),rootStyleText:a,sizePx:i,viewBox:s})},Vs="http://www.w3.org/2000/svg",za=100,Va=300;let $a=0;const Zn=e=>document.createElementNS(Vs,e),$s=(e,{blendMode:n=bs.NORMAL,sizePx:t,viewBox:o})=>{e.setAttribute("xmlns",Vs),e.setAttribute("width",`${t}`),e.setAttribute("height",`${t}`),e.setAttribute("viewBox",o),e.setAttribute("preserveAspectRatio","xMidYMid meet"),e.setAttribute("shape-rendering","geometricPrecision"),e.style.display="block",e.style.overflow="visible",e.style.mixBlendMode=n,e.style.pointerEvents="none"},Ys=({filterId:e,fill:n,pathDefinitions:t,parentElement:o,stroke:r,strokeLinejoin:a,strokeWidth:i})=>{t.forEach(({pathD:s})=>{const l=Zn("path");l.setAttribute("d",s),l.setAttribute("fill",n),typeof r=="string"&&l.setAttribute("stroke",r),typeof a=="string"&&l.setAttribute("stroke-linejoin",a),typeof i=="number"&&l.setAttribute("stroke-width",`${i}`),typeof e=="string"&&e.length>0&&l.setAttribute("filter",`url(#${e})`),o.appendChild(l)})},rm=(e,n,t)=>{if(!(n>0))return;$a+=1;const o=`annotation-cursor-shadow-blur-${$a}`,r=Zn("defs"),a=Zn("filter"),i=Zn("feDropShadow");return a.setAttribute("id",o),a.setAttribute("x",`-${za}%`),a.setAttribute("y",`-${za}%`),a.setAttribute("width",`${Va}%`),a.setAttribute("height",`${Va}%`),i.setAttribute("dx","0"),i.setAttribute("dy","0"),i.setAttribute("flood-color",t),i.setAttribute("flood-opacity","1"),i.setAttribute("stdDeviation",`${n}`),a.appendChild(i),r.appendChild(a),e.appendChild(r),o},am=({blendMode:e="normal",foregroundFill:n,pathDefinitions:t,sizePx:o,viewBox:r})=>{const a=Zn("svg");return $s(a,{blendMode:e,sizePx:o,viewBox:r}),Ys({fill:n,parentElement:a,pathDefinitions:t}),a},im=({blendMode:e="normal",pathDefinitions:n,shadowBlurPx:t,shadowStrokeColor:o,shadowStrokeLinejoin:r,shadowStrokeWidth:a,sizePx:i,viewBox:s})=>{const l=Zn("svg"),u=Math.max(a,0),d=rm(l,Math.max(t,0),o);return $s(l,{blendMode:e,sizePx:i,viewBox:s}),Ys({fill:o,filterId:d,parentElement:l,pathDefinitions:n,stroke:u>0?o:void 0,strokeLinejoin:u>0?r:void 0,strokeWidth:u>0?u:void 0}),l},Ya=({blendMode:e="normal",svgElement:n})=>{const t=document.createElement("div");return t.style.position="absolute",t.style.inset="0",t.style.pointerEvents="none",t.style.mixBlendMode="normal",n.style.mixBlendMode=e,t.appendChild(n),t},sm=({canvasSizePx:e,foregroundBlendMode:n="normal",foregroundFill:t,pathDefinitions:o,shadowBlendMode:r="normal",shadowBlurPx:a,shadowStrokeColor:i,shadowStrokeLinejoin:s,shadowStrokeWidth:l,showAura:u,viewBox:d})=>{const c=document.createElement("div");return c.style.position="absolute",c.style.left="0",c.style.top="0",c.style.width=`${e}px`,c.style.height=`${e}px`,c.style.pointerEvents="none",c.style.willChange="transform",u&&c.appendChild(Ya({blendMode:r,svgElement:im({blendMode:r,pathDefinitions:o,shadowBlurPx:a,shadowStrokeColor:i,shadowStrokeLinejoin:s,shadowStrokeWidth:l,sizePx:e,viewBox:d})})),c.appendChild(Ya({blendMode:n,svgElement:am({blendMode:n,foregroundFill:t,pathDefinitions:o,sizePx:e,viewBox:d})})),c},Zo={de:{backspace:"Rücktaste",escape:"Escape",shift:"Umschalt"},en:{backspace:"Backspace",escape:"Escape",shift:"Shift"}},lm=e=>e||(Wd||Qd?"macos":Kd?"windows":"other"),um=e=>{const n=e==null?void 0:e.split("-")[0];return n&&Zo[n]?Zo[n]:Zo.en},dm=(e,n)=>`${e==="macos"?"⌫":"←"} ${n.backspace}`;function ie(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var cm=typeof Symbol=="function"&&Symbol.observable||"@@observable",Wa=cm,Jo=()=>Math.random().toString(36).substring(7).split("").join("."),mm={INIT:`@@redux/INIT${Jo()}`,REPLACE:`@@redux/REPLACE${Jo()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${Jo()}`},po=mm;function la(e){if(typeof e!="object"||e===null)return!1;let n=e;for(;Object.getPrototypeOf(n)!==null;)n=Object.getPrototypeOf(n);return Object.getPrototypeOf(e)===n||Object.getPrototypeOf(e)===null}function Ws(e,n,t){if(typeof e!="function")throw new Error(ie(2));if(typeof n=="function"&&typeof t=="function"||typeof t=="function"&&typeof arguments[3]=="function")throw new Error(ie(0));if(typeof n=="function"&&typeof t>"u"&&(t=n,n=void 0),typeof t<"u"){if(typeof t!="function")throw new Error(ie(1));return t(Ws)(e,n)}let o=e,r=n,a=new Map,i=a,s=0,l=!1;function u(){i===a&&(i=new Map,a.forEach((f,T)=>{i.set(T,f)}))}function d(){if(l)throw new Error(ie(3));return r}function c(f){if(typeof f!="function")throw new Error(ie(4));if(l)throw new Error(ie(5));let T=!0;u();const k=s++;return i.set(k,f),function(){if(T){if(l)throw new Error(ie(6));T=!1,u(),i.delete(k),a=null}}}function y(f){if(!la(f))throw new Error(ie(7));if(typeof f.type>"u")throw new Error(ie(8));if(typeof f.type!="string")throw new Error(ie(17));if(l)throw new Error(ie(9));try{l=!0,r=o(r,f)}finally{l=!1}return(a=i).forEach(k=>{k()}),f}function m(f){if(typeof f!="function")throw new Error(ie(10));o=f,y({type:po.REPLACE})}function p(){const f=c;return{subscribe(T){if(typeof T!="object"||T===null)throw new Error(ie(11));function k(){const v=T;v.next&&v.next(d())}return k(),{unsubscribe:f(k)}},[Wa](){return this}}}return y({type:po.INIT}),{dispatch:y,subscribe:c,getState:d,replaceReducer:m,[Wa]:p}}function ym(e){Object.keys(e).forEach(n=>{const t=e[n];if(typeof t(void 0,{type:po.INIT})>"u")throw new Error(ie(12));if(typeof t(void 0,{type:po.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(ie(13))})}function pm(e){const n=Object.keys(e),t={};for(let a=0;a<n.length;a++){const i=n[a];typeof e[i]=="function"&&(t[i]=e[i])}const o=Object.keys(t);let r;try{ym(t)}catch(a){r=a}return function(i={},s){if(r)throw r;let l=!1;const u={};for(let d=0;d<o.length;d++){const c=o[d],y=t[c],m=i[c],p=y(m,s);if(typeof p>"u")throw s&&s.type,new Error(ie(14));u[c]=p,l=l||p!==m}return l=l||o.length!==Object.keys(i).length,l?u:i}}function go(...e){return e.length===0?n=>n:e.length===1?e[0]:e.reduce((n,t)=>(...o)=>n(t(...o)))}function gm(...e){return n=>(t,o)=>{const r=n(t,o);let a=()=>{throw new Error(ie(15))};const i={getState:r.getState,dispatch:(l,...u)=>a(l,...u)},s=e.map(l=>l(i));return a=go(...s)(r.dispatch),{...r,dispatch:a}}}function fm(e){return la(e)&&"type"in e&&typeof e.type=="string"}var Qs=Symbol.for("immer-nothing"),Qa=Symbol.for("immer-draftable"),we=Symbol.for("immer-state");function Be(e,...n){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var at=Object.getPrototypeOf;function Pn(e){return!!e&&!!e[we]}function tn(e){var n;return e?Ks(e)||Array.isArray(e)||!!e[Qa]||!!((n=e.constructor)!=null&&n[Qa])||qo(e)||xo(e):!1}var Am=Object.prototype.constructor.toString();function Ks(e){if(!e||typeof e!="object")return!1;const n=at(e);if(n===null)return!0;const t=Object.hasOwnProperty.call(n,"constructor")&&n.constructor;return t===Object?!0:typeof t=="function"&&Function.toString.call(t)===Am}function fo(e,n){wo(e)===0?Reflect.ownKeys(e).forEach(t=>{n(t,e[t],e)}):e.forEach((t,o)=>n(o,t,e))}function wo(e){const n=e[we];return n?n.type_:Array.isArray(e)?1:qo(e)?2:xo(e)?3:0}function Rr(e,n){return wo(e)===2?e.has(n):Object.prototype.hasOwnProperty.call(e,n)}function Xs(e,n,t){const o=wo(e);o===2?e.set(n,t):o===3?e.add(t):e[n]=t}function Tm(e,n){return e===n?e!==0||1/e===1/n:e!==e&&n!==n}function qo(e){return e instanceof Map}function xo(e){return e instanceof Set}function hn(e){return e.copy_||e.base_}function Lr(e,n){if(qo(e))return new Map(e);if(xo(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);const t=Ks(e);if(n===!0||n==="class_only"&&!t){const o=Object.getOwnPropertyDescriptors(e);delete o[we];let r=Reflect.ownKeys(o);for(let a=0;a<r.length;a++){const i=r[a],s=o[i];s.writable===!1&&(s.writable=!0,s.configurable=!0),(s.get||s.set)&&(o[i]={configurable:!0,writable:!0,enumerable:s.enumerable,value:e[i]})}return Object.create(at(e),o)}else{const o=at(e);if(o!==null&&t)return{...e};const r=Object.create(o);return Object.assign(r,e)}}function ua(e,n=!1){return _o(e)||Pn(e)||!tn(e)||(wo(e)>1&&(e.set=e.add=e.clear=e.delete=vm),Object.freeze(e),n&&Object.entries(e).forEach(([t,o])=>ua(o,!0))),e}function vm(){Be(2)}function _o(e){return Object.isFrozen(e)}var Nm={};function Mn(e){const n=Nm[e];return n||Be(0,e),n}var wt;function Zs(){return wt}function km(e,n){return{drafts_:[],parent_:e,immer_:n,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function Ka(e,n){n&&(Mn("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=n)}function wr(e){qr(e),e.drafts_.forEach(bm),e.drafts_=null}function qr(e){e===wt&&(wt=e.parent_)}function Xa(e){return wt=km(wt,e)}function bm(e){const n=e[we];n.type_===0||n.type_===1?n.revoke_():n.revoked_=!0}function Za(e,n){n.unfinalizedDrafts_=n.drafts_.length;const t=n.drafts_[0];return e!==void 0&&e!==t?(t[we].modified_&&(wr(n),Be(4)),tn(e)&&(e=Ao(n,e),n.parent_||To(n,e)),n.patches_&&Mn("Patches").generateReplacementPatches_(t[we].base_,e,n.patches_,n.inversePatches_)):e=Ao(n,t,[]),wr(n),n.patches_&&n.patchListener_(n.patches_,n.inversePatches_),e!==Qs?e:void 0}function Ao(e,n,t){if(_o(n))return n;const o=n[we];if(!o)return fo(n,(r,a)=>Ja(e,o,n,r,a,t)),n;if(o.scope_!==e)return n;if(!o.modified_)return To(e,o.base_,!0),o.base_;if(!o.finalized_){o.finalized_=!0,o.scope_.unfinalizedDrafts_--;const r=o.copy_;let a=r,i=!1;o.type_===3&&(a=new Set(r),r.clear(),i=!0),fo(a,(s,l)=>Ja(e,o,r,s,l,t,i)),To(e,r,!1),t&&e.patches_&&Mn("Patches").generatePatches_(o,t,e.patches_,e.inversePatches_)}return o.copy_}function Ja(e,n,t,o,r,a,i){if(Pn(r)){const s=a&&n&&n.type_!==3&&!Rr(n.assigned_,o)?a.concat(o):void 0,l=Ao(e,r,s);if(Xs(t,o,l),Pn(l))e.canAutoFreeze_=!1;else return}else i&&t.add(r);if(tn(r)&&!_o(r)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;Ao(e,r),(!n||!n.scope_.parent_)&&typeof o!="symbol"&&Object.prototype.propertyIsEnumerable.call(t,o)&&To(e,r)}}function To(e,n,t=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&ua(n,t)}function Im(e,n){const t=Array.isArray(e),o={type_:t?1:0,scope_:n?n.scope_:Zs(),modified_:!1,finalized_:!1,assigned_:{},parent_:n,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let r=o,a=da;t&&(r=[o],a=qt);const{revoke:i,proxy:s}=Proxy.revocable(r,a);return o.draft_=s,o.revoke_=i,s}var da={get(e,n){if(n===we)return e;const t=hn(e);if(!Rr(t,n))return hm(e,t,n);const o=t[n];return e.finalized_||!tn(o)?o:o===er(e.base_,n)?(nr(e),e.copy_[n]=_r(o,e)):o},has(e,n){return n in hn(e)},ownKeys(e){return Reflect.ownKeys(hn(e))},set(e,n,t){const o=Js(hn(e),n);if(o!=null&&o.set)return o.set.call(e.draft_,t),!0;if(!e.modified_){const r=er(hn(e),n),a=r==null?void 0:r[we];if(a&&a.base_===t)return e.copy_[n]=t,e.assigned_[n]=!1,!0;if(Tm(t,r)&&(t!==void 0||Rr(e.base_,n)))return!0;nr(e),xr(e)}return e.copy_[n]===t&&(t!==void 0||n in e.copy_)||Number.isNaN(t)&&Number.isNaN(e.copy_[n])||(e.copy_[n]=t,e.assigned_[n]=!0),!0},deleteProperty(e,n){return er(e.base_,n)!==void 0||n in e.base_?(e.assigned_[n]=!1,nr(e),xr(e)):delete e.assigned_[n],e.copy_&&delete e.copy_[n],!0},getOwnPropertyDescriptor(e,n){const t=hn(e),o=Reflect.getOwnPropertyDescriptor(t,n);return o&&{writable:!0,configurable:e.type_!==1||n!=="length",enumerable:o.enumerable,value:t[n]}},defineProperty(){Be(11)},getPrototypeOf(e){return at(e.base_)},setPrototypeOf(){Be(12)}},qt={};fo(da,(e,n)=>{qt[e]=function(){return arguments[0]=arguments[0][0],n.apply(this,arguments)}});qt.deleteProperty=function(e,n){return qt.set.call(this,e,n,void 0)};qt.set=function(e,n,t){return da.set.call(this,e[0],n,t,e[0])};function er(e,n){const t=e[we];return(t?hn(t):e)[n]}function hm(e,n,t){var r;const o=Js(n,t);return o?"value"in o?o.value:(r=o.get)==null?void 0:r.call(e.draft_):void 0}function Js(e,n){if(!(n in e))return;let t=at(e);for(;t;){const o=Object.getOwnPropertyDescriptor(t,n);if(o)return o;t=at(t)}}function xr(e){e.modified_||(e.modified_=!0,e.parent_&&xr(e.parent_))}function nr(e){e.copy_||(e.copy_=Lr(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var Sm=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(n,t,o)=>{if(typeof n=="function"&&typeof t!="function"){const a=t;t=n;const i=this;return function(l=a,...u){return i.produce(l,d=>t.call(this,d,...u))}}typeof t!="function"&&Be(6),o!==void 0&&typeof o!="function"&&Be(7);let r;if(tn(n)){const a=Xa(this),i=_r(n,void 0);let s=!0;try{r=t(i),s=!1}finally{s?wr(a):qr(a)}return Ka(a,o),Za(r,a)}else if(!n||typeof n!="object"){if(r=t(n),r===void 0&&(r=n),r===Qs&&(r=void 0),this.autoFreeze_&&ua(r,!0),o){const a=[],i=[];Mn("Patches").generateReplacementPatches_(n,r,a,i),o(a,i)}return r}else Be(1,n)},this.produceWithPatches=(n,t)=>{if(typeof n=="function")return(i,...s)=>this.produceWithPatches(i,l=>n(l,...s));let o,r;return[this.produce(n,t,(i,s)=>{o=i,r=s}),o,r]},typeof(e==null?void 0:e.autoFreeze)=="boolean"&&this.setAutoFreeze(e.autoFreeze),typeof(e==null?void 0:e.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){tn(e)||Be(8),Pn(e)&&(e=Cm(e));const n=Xa(this),t=_r(e,void 0);return t[we].isManual_=!0,qr(n),t}finishDraft(e,n){const t=e&&e[we];(!t||!t.isManual_)&&Be(9);const{scope_:o}=t;return Ka(o,n),Za(void 0,o)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,n){let t;for(t=n.length-1;t>=0;t--){const r=n[t];if(r.path.length===0&&r.op==="replace"){e=r.value;break}}t>-1&&(n=n.slice(t+1));const o=Mn("Patches").applyPatches_;return Pn(e)?o(e,n):this.produce(e,r=>o(r,n))}};function _r(e,n){const t=qo(e)?Mn("MapSet").proxyMap_(e,n):xo(e)?Mn("MapSet").proxySet_(e,n):Im(e,n);return(n?n.scope_:Zs()).drafts_.push(t),t}function Cm(e){return Pn(e)||Be(10,e),el(e)}function el(e){if(!tn(e)||_o(e))return e;const n=e[we];let t;if(n){if(!n.modified_)return n.base_;n.finalized_=!0,t=Lr(e,n.scope_.immer_.useStrictShallowCopy_)}else t=Lr(e,!0);return fo(t,(o,r)=>{Xs(t,o,el(r))}),n&&(n.finalized_=!1),t}var qe=new Sm,nl=qe.produce;qe.produceWithPatches.bind(qe);qe.setAutoFreeze.bind(qe);qe.setUseStrictShallowCopy.bind(qe);qe.applyPatches.bind(qe);qe.createDraft.bind(qe);qe.finishDraft.bind(qe);function tl(e){return({dispatch:t,getState:o})=>r=>a=>typeof a=="function"?a(t,o,e):r(a)}var Em=tl(),Om=tl,Rm=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?go:go.apply(null,arguments)};function ei(e,n){function t(...o){if(n){let r=n(...o);if(!r)throw new Error(Ge(0));return{type:e,payload:r.payload,..."meta"in r&&{meta:r.meta},..."error"in r&&{error:r.error}}}return{type:e,payload:o[0]}}return t.toString=()=>`${e}`,t.type=e,t.match=o=>fm(o)&&o.type===e,t}var ol=class Nt extends Array{constructor(...n){super(...n),Object.setPrototypeOf(this,Nt.prototype)}static get[Symbol.species](){return Nt}concat(...n){return super.concat.apply(this,n)}prepend(...n){return n.length===1&&Array.isArray(n[0])?new Nt(...n[0].concat(this)):new Nt(...n.concat(this))}};function ni(e){return tn(e)?nl(e,()=>{}):e}function ti(e,n,t){if(e.has(n)){let r=e.get(n);return t.update&&(r=t.update(r,n,e),e.set(n,r)),r}if(!t.insert)throw new Error(Ge(10));const o=t.insert(n,e);return e.set(n,o),o}function Lm(e){return typeof e=="boolean"}var wm=()=>function(n){const{thunk:t=!0,immutableCheck:o=!0,serializableCheck:r=!0,actionCreatorCheck:a=!0}=n??{};let i=new ol;return t&&(Lm(t)?i.push(Em):i.push(Om(t.extraArgument))),i},qm="RTK_autoBatch",rl=e=>n=>{setTimeout(n,e)},xm=typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:rl(10),_m=(e={type:"raf"})=>n=>(...t)=>{const o=n(...t);let r=!0,a=!1,i=!1;const s=new Set,l=e.type==="tick"?queueMicrotask:e.type==="raf"?xm:e.type==="callback"?e.queueNotification:rl(e.timeout),u=()=>{i=!1,a&&(a=!1,s.forEach(d=>d()))};return Object.assign({},o,{subscribe(d){const c=()=>r&&d(),y=o.subscribe(c);return s.add(d),()=>{y(),s.delete(d)}},dispatch(d){var c;try{return r=!((c=d==null?void 0:d.meta)!=null&&c[qm]),a=!r,a&&(i||(i=!0,l(u))),o.dispatch(d)}finally{r=!0}}})},Pm=e=>function(t){const{autoBatch:o=!0}=t??{};let r=new ol(e);return o&&r.push(_m(typeof o=="object"?o:void 0)),r};function Mm(e){const n=wm(),{reducer:t=void 0,middleware:o,devTools:r=!0,preloadedState:a=void 0,enhancers:i=void 0}=e;let s;if(typeof t=="function")s=t;else if(la(t))s=pm(t);else throw new Error(Ge(1));let l;typeof o=="function"?l=o(n):l=n();let u=go;r&&(u=Rm({trace:!1,...typeof r=="object"&&r}));const d=gm(...l),c=Pm(d);let y=typeof i=="function"?i(c):c();const m=u(...y);return Ws(s,a,m)}function al(e){const n={},t=[];let o;const r={addCase(a,i){const s=typeof a=="string"?a:a.type;if(!s)throw new Error(Ge(28));if(s in n)throw new Error(Ge(29));return n[s]=i,r},addMatcher(a,i){return t.push({matcher:a,reducer:i}),r},addDefaultCase(a){return o=a,r}};return e(r),[n,t,o]}function Dm(e){return typeof e=="function"}function Bm(e,n){let[t,o,r]=al(n),a;if(Dm(e))a=()=>ni(e());else{const s=ni(e);a=()=>s}function i(s=a(),l){let u=[t[l.type],...o.filter(({matcher:d})=>d(l)).map(({reducer:d})=>d)];return u.filter(d=>!!d).length===0&&(u=[r]),u.reduce((d,c)=>{if(c)if(Pn(d)){const m=c(d,l);return m===void 0?d:m}else{if(tn(d))return nl(d,y=>c(y,l));{const y=c(d,l);if(y===void 0){if(d===null)return d;throw new Error(Ge(9))}return y}}return d},s)}return i.getInitialState=a,i}var Fm=Symbol.for("rtk-slice-createasyncthunk");function Gm(e,n){return`${e}/${n}`}function jm({creators:e}={}){var t;const n=(t=e==null?void 0:e.asyncThunk)==null?void 0:t[Fm];return function(r){const{name:a,reducerPath:i=a}=r;if(!a)throw new Error(Ge(11));const s=(typeof r.reducers=="function"?r.reducers(zm()):r.reducers)||{},l=Object.keys(s),u={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},d={addCase(N,v){const b=typeof N=="string"?N:N.type;if(!b)throw new Error(Ge(12));if(b in u.sliceCaseReducersByType)throw new Error(Ge(13));return u.sliceCaseReducersByType[b]=v,d},addMatcher(N,v){return u.sliceMatchers.push({matcher:N,reducer:v}),d},exposeAction(N,v){return u.actionCreators[N]=v,d},exposeCaseReducer(N,v){return u.sliceCaseReducersByName[N]=v,d}};l.forEach(N=>{const v=s[N],b={reducerName:N,type:Gm(a,N),createNotation:typeof r.reducers=="function"};$m(v)?Wm(b,v,d,n):Vm(b,v,d)});function c(){const[N={},v=[],b=void 0]=typeof r.extraReducers=="function"?al(r.extraReducers):[r.extraReducers],h={...N,...u.sliceCaseReducersByType};return Bm(r.initialState,S=>{for(let I in h)S.addCase(I,h[I]);for(let I of u.sliceMatchers)S.addMatcher(I.matcher,I.reducer);for(let I of v)S.addMatcher(I.matcher,I.reducer);b&&S.addDefaultCase(b)})}const y=N=>N,m=new Map;let p;function A(N,v){return p||(p=c()),p(N,v)}function f(){return p||(p=c()),p.getInitialState()}function T(N,v=!1){function b(S){let I=S[N];return typeof I>"u"&&v&&(I=f()),I}function h(S=y){const I=ti(m,v,{insert:()=>new WeakMap});return ti(I,S,{insert:()=>{const E={};for(const[O,R]of Object.entries(r.selectors??{}))E[O]=Um(R,S,f,v);return E}})}return{reducerPath:N,getSelectors:h,get selectors(){return h(b)},selectSlice:b}}const k={name:a,reducer:A,actions:u.actionCreators,caseReducers:u.sliceCaseReducersByName,getInitialState:f,...T(i),injectInto(N,{reducerPath:v,...b}={}){const h=v??i;return N.inject({reducerPath:h,reducer:A},b),{...k,...T(h,!0)}}};return k}}function Um(e,n,t,o){function r(a,...i){let s=n(a);return typeof s>"u"&&o&&(s=t()),e(s,...i)}return r.unwrapped=e,r}var Hm=jm();function zm(){function e(n,t){return{_reducerDefinitionType:"asyncThunk",payloadCreator:n,...t}}return e.withTypes=()=>e,{reducer(n){return Object.assign({[n.name](...t){return n(...t)}}[n.name],{_reducerDefinitionType:"reducer"})},preparedReducer(n,t){return{_reducerDefinitionType:"reducerWithPrepare",prepare:n,reducer:t}},asyncThunk:e}}function Vm({type:e,reducerName:n,createNotation:t},o,r){let a,i;if("reducer"in o){if(t&&!Ym(o))throw new Error(Ge(17));a=o.reducer,i=o.prepare}else a=o;r.addCase(e,a).exposeCaseReducer(n,a).exposeAction(n,i?ei(e,i):ei(e))}function $m(e){return e._reducerDefinitionType==="asyncThunk"}function Ym(e){return e._reducerDefinitionType==="reducerWithPrepare"}function Wm({type:e,reducerName:n},t,o,r){if(!r)throw new Error(Ge(18));const{payloadCreator:a,fulfilled:i,pending:s,rejected:l,settled:u,options:d}=t,c=r(e,a,d);o.exposeAction(n,c),i&&o.addCase(c.fulfilled,i),s&&o.addCase(c.pending,s),l&&o.addCase(c.rejected,l),u&&o.addMatcher(c.settled,u),o.exposeCaseReducer(n,{fulfilled:i||Kt,pending:s||Kt,rejected:l||Kt,settled:u||Kt})}function Kt(){}function Ge(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}const Kn=Object.freeze({markerSize:Qo.markerSize,markerStrokeWidth:Qo.markerStrokeWidth,lineColor:Qo.lineColor,zIndex:0,fallbackFontSizePx:12,rootFontSizePx:16}),oi=Object.freeze({brightOnDark:Object.freeze({backgroundColor:"rgba(15, 23, 42, 0.82)",textColor:"rgba(248, 250, 252, 0.98)"}),darkOnBright:Object.freeze({backgroundColor:"rgba(255, 255, 255, 0.9)",textColor:"rgba(15, 23, 42, 0.92)"})}),qb=({text:e,getScreenPosition:n,theme:t="bright-on-dark",lineColor:o,textBackgroundColor:r,textColor:a,fontSize:i,fontFamily:s,fontWeight:l,mixBlendMode:u,attach:d="center",distance:c=0,hideMarker:y=!0})=>{const m=t==="dark-on-bright"?oi.darkOnBright:oi.brightOnDark;return{content:e,hideMarker:y,lineColor:o,textBackgroundColor:r??m.backgroundColor,textColor:a??m.textColor,fontSize:i,fontFamily:s,fontWeight:l,mixBlendMode:u,attach:d,distance:c,getScreenPosition:n}},Qm=e=>e.getScreenPosition?e.getScreenPosition():e.screenPosition??null,Km=(e,n)=>e==="left"?`translate(${-n}px, -50%)`:e==="right"?`translate(calc(-100% + ${n}px), -50%)`:"translate(-50%, -50%)",Xm=(e=uc)=>{const n=e.trim(),t=Number.parseFloat(n);return Number.isFinite(t)?n.endsWith("rem")?t*Kn.rootFontSizePx:t:Kn.fallbackFontSizePx},Zm=({labelRoot:e,fontSize:n})=>{var r;const t=((r=e.ownerDocument.defaultView)==null?void 0:r.getComputedStyle(e).fontSize)??"",o=Number.parseFloat(t);return Number.isFinite(o)?o:Xm(n)},Jm=e=>{const n=e.querySelector('[data-point-label-stem="true"]'),t=e.querySelector('[data-point-label-stem-line="true"]'),o=e.querySelector('[data-pillbutton-root="true"], [data-point-label-content-root="true"]'),r=e.querySelector('[data-pillbutton-badge="true"]'),a=e.querySelector('[data-pillbutton-content="true"]'),i=e.querySelector('[data-point-label-root="true"]');return!n||!t||!o||!i?null:{stem:n,stemLine:t,labelRoot:o,pillBadge:r,pillContent:a,pointLabelRoot:i}},ey=({elementDiv:e,domRefs:n,state:t})=>{const o=Qm(t);if(!o||t.visible===!1)return!1;e.style.left=`${o.x}px`,e.style.top=`${o.y}px`,e.style.transform="none",e.style.zIndex=`${t.zIndex??Kn.zIndex}`;const r=t.isOccluded?"0.75":"1";if(t.hideLabelAndStem)return n.pointLabelRoot.style.opacity=r,!0;const{labelRoot:a,pillBadge:i,pillContent:s}=n,l=a.hasAttribute("data-pillbutton-root");l?(Qt(i,rc(t)),Qt(s,t.content),i===null&&s===null&&Qt(a,t.content)):Qt(a,t.content);const u=t.angleRad??0,d=t.distance??0,c=t.attach??"center",y=Math.cos(u),m=Math.sin(u),p=t.hideMarker?0:(t.markerSize??Kn.markerSize)/2+(t.markerStrokeWidth??Kn.markerStrokeWidth)/2,A=i!==null&&s===null,f=A?i.offsetWidth:0,T=A?i.offsetHeight:0,k=T>0?T/2:null,N=l&&a.offsetHeight>0?a.offsetHeight/2:null,v=c==="center"?0:k??N??ac(Zm({labelRoot:a,fontSize:t.fontSize})),b=t.stemStartDistance??p,h={x:y*b,y:m*b},S={x:y*(d+v),y:m*(d+v)},I=f>0&&T>0?ic(h,S,c,f,T):v>0?sc(h,S,v):{x:y*d,y:m*d},E=I.x-h.x,O=I.y-h.y,R=Math.hypot(E,O);return n.stem.style.display=R>0?"block":"none",n.stem.style.left=`${h.x}px`,n.stem.style.top=`${h.y}px`,n.stem.style.transformOrigin="0 0",n.stem.style.transform=`rotate(${Math.atan2(O,E)}rad)`,n.stemLine.style.width=`${R}px`,n.stemLine.style.borderBottom=`1px ${t.isOccluded?"dashed":"solid"} ${t.lineColor??Kn.lineColor}`,a.style.left=`${S.x}px`,a.style.top=`${S.y}px`,a.style.transform=l?Km(c,v):lc(c),n.pointLabelRoot.style.opacity=r,!0};function yt(e){const n={current:null};return{facade:e(()=>n.current),register:t=>{n.current=t}}}const{facade:xb,register:ny}=yt(e=>({isAvailable:()=>e()!==null,getState:()=>{var n,t;return((t=(n=e())==null?void 0:n.getState)==null?void 0:t.call(n))??null},subscribe:n=>{var t,o;return((o=(t=e())==null?void 0:t.subscribe)==null?void 0:o.call(t,n))??(()=>{})},activateTool:n=>{var t,o;return((o=(t=e())==null?void 0:t.activateTool)==null?void 0:o.call(t,n))??Promise.resolve(!1)},pickAt:n=>{var t,o;return((o=(t=e())==null?void 0:t.pickAt)==null?void 0:o.call(t,n))??Promise.resolve(!1)},finish:()=>{var n,t;return((t=(n=e())==null?void 0:n.finish)==null?void 0:t.call(n))??Promise.resolve(null)},cancel:()=>{var n,t;return(t=(n=e())==null?void 0:n.cancel)==null?void 0:t.call(n)},answerTextPrompt:n=>{var t,o;return((o=(t=e())==null?void 0:t.answerTextPrompt)==null?void 0:o.call(t,n))??!1},createMeasurement:(n,t,o)=>{var r,a;return((a=(r=e())==null?void 0:r.createMeasurement)==null?void 0:a.call(r,n,t,o))??Promise.resolve(null)},addMeasurements:(n,t)=>{var o,r;return((r=(o=e())==null?void 0:o.addMeasurements)==null?void 0:r.call(o,n,t))??[]},exportMeasurements:()=>{var n,t;return((t=(n=e())==null?void 0:n.exportMeasurements)==null?void 0:t.call(n))??null},select:n=>{var t,o;return(o=(t=e())==null?void 0:t.select)==null?void 0:o.call(t,n)},remove:n=>{var t,o;return(o=(t=e())==null?void 0:t.remove)==null?void 0:o.call(t,n)},flyTo:n=>{var t,o;return(o=(t=e())==null?void 0:t.flyTo)==null?void 0:o.call(t,n)}})),{facade:_b,register:ty}=yt(e=>({isAvailable:()=>e()!==null,getPose:()=>{var n,t;return((t=(n=e())==null?void 0:n.getPose)==null?void 0:t.call(n))??null},setPose:n=>{var t,o;return((o=(t=e())==null?void 0:t.setPose)==null?void 0:o.call(t,n))??!1},flyToPose:(n,t)=>{var o,r;return((r=(o=e())==null?void 0:o.flyToPose)==null?void 0:r.call(o,n,t))??Promise.resolve(!1)},lookAt:(n,t,o)=>{var r,a;return((a=(r=e())==null?void 0:r.lookAt)==null?void 0:a.call(r,n,t,o))??Promise.resolve(!1)},stop:()=>{var n,t;return(t=(n=e())==null?void 0:n.stop)==null?void 0:t.call(n)}})),{facade:Pb,register:Mb}=yt(e=>({applyById:n=>{var t,o;return((o=(t=e())==null?void 0:t.applyById)==null?void 0:o.call(t,n))??Promise.resolve(!1)},setMappingConfig:n=>{var t,o;return((o=(t=e())==null?void 0:t.setMappingConfig)==null?void 0:o.call(t,n))??Promise.resolve(!1)},getAppliedId:()=>{var n,t;return((t=(n=e())==null?void 0:n.getAppliedId)==null?void 0:t.call(n))??null},getMappingConfig:()=>{var n,t;return((t=(n=e())==null?void 0:n.getMappingConfig)==null?void 0:t.call(n))??null},backgroundAsLayers:n=>{var t,o;return((o=(t=e())==null?void 0:t.backgroundAsLayers)==null?void 0:o.call(t,n))??n}})),ri=()=>{},{facade:Db,register:Bb}=yt(e=>({addSource:n=>{var t;return((t=e())==null?void 0:t.registerContribution({sources:[n]}))??ri},addMode:n=>{var t;return((t=e())==null?void 0:t.registerContribution({additionalModes:[n]}))??ri}})),oy={localStorage:[],sessionStorage:[],localforage:[],catalogCache:[],indexedDB:[]},Xe=(e,n)=>t=>{var o,r;return((r=(o=e())==null?void 0:o[n])==null?void 0:r.call(o,t))??Promise.resolve([])},{facade:Fb,register:Gb}=yt(e=>({all:Xe(e,"all"),persistedState:Xe(e,"persistedState"),layers:Xe(e,"layers"),catalogCache:Xe(e,"catalogCache"),favorites:Xe(e,"favorites"),measurements:Xe(e,"measurements"),addonOverrides:Xe(e,"addonOverrides"),auth:Xe(e,"auth"),localStorage:Xe(e,"localStorage"),list:()=>{var n,t;return((t=(n=e())==null?void 0:n.list)==null?void 0:t.call(n))??Promise.resolve(oy)}})),{facade:jb,register:Ub}=yt(e=>({openMenu:()=>{var n,t;return(t=(n=e())==null?void 0:n.openMenu)==null?void 0:t.call(n)},openHelperOverlay:()=>{var n,t;return(t=(n=e())==null?void 0:n.openHelperOverlay)==null?void 0:t.call(n)}})),de={FLY_TO:"flyTo",EXPORT:"export",VISIBILITY:"visibility",REFERENCE:"reference",LOCK:"lock",STYLE:"style",DELETE:"delete"},De=(()=>{const e="1rem",n="0.8571rem",t="1rem";return Object.freeze({rootFontSizeRem:e,supportFontSizeRem:n,headingFontSizeRem:t,headingFontWeight:600,headingTypographyClassName:`text-[${n}] font-semibold tracking-[0.03em]`,titleTypographyClassName:`text-[${t}] font-semibold leading-[1.25]`})})(),xe=Object.freeze({borderRadiusRem:"0.2143rem",hairlineBorderWidthRem:"0.0357rem",panelInsetShadowYOffsetRem:"0.0714rem",panelInsetShadowBlurRem:"0.0714rem",panelBackdropBlurRem:"0.1429rem"}),K=Object.freeze({heading:te.ACCENT_MEASUREMENTS,panelSurface:te.NEUTRAL_SURFACE_SUBTLE,panelBorder:te.NEUTRAL_BORDER_SUBTLE,shadowBase:te.NEUTRAL_BLACK,bodyText:te.NEUTRAL_TEXT_PRIMARY,mutedText:te.NEUTRAL_TEXT_MUTED,linkText:te.WUPP_BLUE,fieldText:te.NEUTRAL_TEXT_STRONG,fieldBorder:te.NEUTRAL_BORDER_DEFAULT,fieldInputBorder:te.NEUTRAL_BORDER_INPUT,fieldFocusBackground:te.STATE_FOCUS_BACKGROUND_WARM,fieldFocusOutline:te.STATE_FOCUS_OUTLINE,titleText:te.NEUTRAL_TEXT_STRONG}),tr=Object.freeze({panelSurface:.9,panelBorder:.9,panelInsetShadow:.02}),ry=Object.freeze({defaultPixelWidth:430,headingColor:K.heading,headerStyle:{},bodyPanelStyle:{backgroundColor:Wo(K.panelSurface,tr.panelSurface),border:`${xe.hairlineBorderWidthRem} solid ${Wo(K.panelBorder,tr.panelBorder)}`,boxShadow:`${Wo(K.shadowBase,tr.panelInsetShadow)} 0 ${xe.panelInsetShadowYOffsetRem} ${xe.panelInsetShadowBlurRem} inset`,backdropFilter:`blur(${xe.panelBackdropBlurRem})`,WebkitBackdropFilter:`blur(${xe.panelBackdropBlurRem})`},resolveActionTooltipPopupContainer:e=>e.closest('[data-test-id="annotation-info-box"]')??e.ownerDocument.body,headerForegroundClassName:"text-white/80",headerTitleClassName:`truncate ${De.headingTypographyClassName}`,subtitleContainerClassName:"mb-0 w-full px-2 pt-[0.28em]",subtitleTextStyle:{color:te.ACCENT_NEUTRALS},subtitleTextClassName:`px-2 text-[${De.supportFontSizeRem}] leading-[1.1] font-semibold`,subtitleMetaTextStyle:{color:te.ACCENT_NEUTRALS},subtitleMetaTextClassName:`mt-[0.08em] whitespace-nowrap text-[${De.supportFontSizeRem}] leading-[1.1] font-semibold`,showSubtitleMetaText:!0,readOnly:!1,bodyContainerClassName:"px-2 pb-2 pt-1",bodyTextStyle:{fontSize:De.rootFontSizeRem,lineHeight:1.4,color:K.bodyText},bodyTextClassName:`text-[${De.rootFontSizeRem}] leading-[1.4] text-[${K.bodyText}]`,emptyContentLineStyle:{minHeight:"1.4em"},emptyContentLineClassName:"w-full",mutedTextClassName:`text-[${K.mutedText}]`,linkTextClassName:`text-[${K.linkText}]`,actionIconClassName:"transition-colors",actionIconColor:te.ACCENT_NEUTRALS,actionIconHoverColor:te.ACCENT_NEUTRALS_HOVER,actionIconFontSize:null,hiddenActionIds:[],fieldTextClassName:`text-[${K.fieldText}]`,fieldBorderClassName:`border-[${xe.hairlineBorderWidthRem}] border-[${K.fieldBorder}]`,fieldInputBorderClassName:`border-[${xe.hairlineBorderWidthRem}] border-[${K.fieldInputBorder}]`,fieldFocusBackgroundClassName:`focus:bg-[${K.fieldFocusBackground}]`,fieldFocusOutlineClassName:`focus:outline focus:outline-2 focus:outline-[${K.fieldFocusOutline}]`,subtleFieldBackgroundClassName:"bg-white/85",titleTextStyle:{fontSize:De.headingFontSizeRem,fontWeight:De.headingFontWeight,lineHeight:1.25},titleTextClassName:`text-[${K.titleText}]/80 ${De.titleTypographyClassName}`,titleInputClassName:`min-w-0 w-auto max-w-full appearance-none [field-sizing:content] break-words rounded-[${xe.borderRadiusRem}] border border-transparent bg-transparent px-0 py-[0.05em] text-[${K.titleText}]/80 placeholder:text-[${K.titleText}]/50 focus:bg-[${K.fieldFocusBackground}] focus:outline focus:outline-2 focus:outline-[${K.fieldFocusOutline}] ${De.titleTypographyClassName}`,shortLabelInputClassName:`shrink-0 w-auto appearance-none [field-sizing:content] border-[${xe.hairlineBorderWidthRem}] px-[0.5ex] py-0 text-center tabular-nums border-[${K.fieldBorder}] bg-white/85 text-[${K.titleText}]/80 placeholder:text-[${K.titleText}]/80 focus:bg-[${K.fieldFocusBackground}] focus:outline focus:outline-2 focus:outline-[${K.fieldFocusOutline}] ${De.titleTypographyClassName}`,navigationInstructionContainerClassName:"mt-1 flex w-full items-center justify-center px-2 pt-1",navigationAvailabilityContainerClassName:"mt-1 flex w-full items-center justify-center px-2 pt-1",navigationSummaryContainerClassName:"mb-1 mt-0 flex w-full items-center justify-between px-2",navigationLinkFontSize:De.supportFontSizeRem,inlineFieldButtonClassName:`inline-flex h-5 w-5 items-center justify-center rounded border-[${xe.hairlineBorderWidthRem}] border-[${K.fieldInputBorder}]`,colorInputClassName:`h-6 w-8 cursor-pointer rounded border-[${xe.hairlineBorderWidthRem}] border-[${K.fieldInputBorder}] bg-transparent p-0`,inlineActionButtonClassName:`inline-flex items-center gap-1 rounded border-[${xe.hairlineBorderWidthRem}] border-[${K.fieldInputBorder}] px-2 py-1`}),Ke=e=>({...ry,...e}),Se=Object.freeze({lineLengthEpsilonPx:.001,referenceDistanceFactor:.2,lineLabelReferenceDistancePx:24,flipThresholdPx:4,referenceMinDistancePx:24,referenceMaxDistancePx:48,insideBlendFactor:.35,elevationEpsilonMeters:.001,polygonAreaEpsilonPx2:1e-6}),ay=(e,n,t=Se.flipThresholdPx)=>{if(!Number.isFinite(e))return n??1;const o=e>=0?1:-1;return!n||n===o?o:Math.abs(e)<t?n:o},io=({start:e,end:n,insidePoint:t,previousOutsideSign:o,flipThresholdPx:r=Se.flipThresholdPx,referenceDistanceFactor:a=Se.referenceDistanceFactor,referenceDistancePx:i,minDistancePx:s=Se.referenceMinDistancePx,maxDistancePx:l=Se.referenceMaxDistancePx})=>{const u=hc({start:e,end:n,epsilon:Se.lineLengthEpsilonPx});if(!u)return null;const d=Sc(t,u.midpoint),c=Cc(d,u.leftUnitNormal),y=ay(-c,o,r),m=i??Ue(u.length*a,s,l),p=qs(u.leftUnitNormal,y*m);return{outsideSign:y,referencePoint:ws(u.midpoint,p)}},Hb=(e,n,t,o=Se.referenceMinDistancePx,r=Se.referenceMaxDistancePx)=>{var a;return((a=io({start:e,end:n,insidePoint:t,minDistancePx:o,maxDistancePx:r}))==null?void 0:a.referencePoint)??null},iy=({triangle:e,auxiliaryAltitudeMeters:n,highestAltitudeMeters:t,insideBlendFactor:o=Se.insideBlendFactor,elevationEpsilonMeters:r=Se.elevationEpsilonMeters})=>{const a=n<t-r?e.highest:e.aux;return{x:Cr(a.x,e.centroid.x,o),y:Cr(a.y,e.centroid.y,o)}},sy=({anchor:e,target:n,aux:t,anchorAltitudeMeters:o,targetAltitudeMeters:r,previousOutsideSigns:a,insideBlendFactor:i=Se.insideBlendFactor,flipThresholdPx:s=Se.flipThresholdPx,referenceDistancePx:l=Se.lineLabelReferenceDistancePx})=>{const u=o>=r?e:n,d={anchor:e,target:n,aux:t,highest:u,centroid:{x:(e.x+n.x+t.x)/3,y:(e.y+n.y+t.y)/3}},c=iy({triangle:d,auxiliaryAltitudeMeters:r,highestAltitudeMeters:Math.max(o,r),insideBlendFactor:i}),y=io({start:e,end:n,insidePoint:c,previousOutsideSign:a==null?void 0:a.direct,flipThresholdPx:s,referenceDistancePx:l}),m=io({start:t,end:n,insidePoint:c,previousOutsideSign:a==null?void 0:a.horizontal,flipThresholdPx:s,referenceDistancePx:l}),p=io({start:e,end:t,insidePoint:n,previousOutsideSign:a==null?void 0:a.vertical,flipThresholdPx:s,referenceDistancePx:l});return{directOutsideReferencePoint:(y==null?void 0:y.referencePoint)??null,verticalOutsideReferencePoint:(p==null?void 0:p.referencePoint)??null,horizontalOutsideReferencePoint:(m==null?void 0:m.referencePoint)??null,nextOutsideSigns:{direct:y==null?void 0:y.outsideSign,vertical:p==null?void 0:p.outsideSign,horizontal:m==null?void 0:m.outsideSign}}},ly=e=>Ls({points:e,degenerateAreaEpsilon:Se.polygonAreaEpsilonPx2}),q={POINT:"point",DISTANCE:"distance",POLYLINE:"polyline",AREA_GROUND:"area",AREA_PLANAR:"planar",AREA_VERTICAL:"vertical",LABEL:"label"},vn="select",zb="planar-biggest-triangle",Vb="planar-pca",$b="planar-trapezoid",il=e=>e===q.AREA_GROUND||e===q.AREA_VERTICAL||e===q.AREA_PLANAR,so=Object.freeze({fillAlpha:.25,selectedFillAlpha:.35,rgb255ByType:{[q.AREA_VERTICAL]:[112,168,255],[q.AREA_GROUND]:[107,188,123],[q.AREA_PLANAR]:[239,223,145]}}),sl=e=>so.rgb255ByType[e],uy=(e,n)=>je(sl(e),n),ai=e=>typeof e=="number"&&Number.isFinite(e)&&e>=0&&e<=1,dy=(e={})=>{const n=ai(e.fillAlpha)?e.fillAlpha:so.fillAlpha,t=ai(e.selectedFillAlpha)?e.selectedFillAlpha:so.selectedFillAlpha,o=r=>{var a;return((a=e.rgb255ByType)==null?void 0:a[r])??so.rgb255ByType[r]};return{rgb255:o,fillCssColor:(r,a)=>je(o(r),a?t:n),cssColor:(r,a)=>je(o(r),a)}},Yb=dy(),fe={DIRECT:"direct",VERTICAL:"vertical",HORIZONTAL:"horizontal"},rn=Object.freeze({textRgb255:{dark:[17,24,39],light:[255,255,255]},labelTextRgb255:[248,250,252],shortLabelRgb255ByType:{[q.POINT]:[200,200,200],[q.DISTANCE]:[102,126,234],[q.POLYLINE]:[226,178,60],[q.LABEL]:[88,152,255]},surfaceRgb255:{stroke:[255,255,255],accent:[246,248,255]},lineComponentRgb255ByKind:{[fe.DIRECT]:[255,255,255],[fe.VERTICAL]:[111,168,255],[fe.HORIZONTAL]:[188,194,102]},selectionRgb255:{background:[15,23,42],hoverBackground:[30,41,59],glow:[255,255,255]}}),fn=Object.freeze({alpha:{text:{dark:.9,light:1},shortLabelBackgroundByType:{[q.POINT]:.92,[q.DISTANCE]:.95,[q.POLYLINE]:.95,[q.LABEL]:.95,area:.95},lineComponentByKind:{[fe.DIRECT]:1,[fe.VERTICAL]:.96,[fe.HORIZONTAL]:.95},lineComponentLabelAccentByKind:{[fe.DIRECT]:.34,[fe.VERTICAL]:.54,[fe.HORIZONTAL]:.5},selection:{background:.92,hoverBackground:.9,glow:1},surfaceStroke:.95}}),kn=(e,n=fn.alpha.text[e])=>je(rn.textRgb255[e],n),lo=(e=fn.alpha.surfaceStroke)=>je(rn.surfaceRgb255.stroke,e),cy=(e=fn.alpha.surfaceStroke)=>je(rn.surfaceRgb255.accent,e),or=(e,n=fn.alpha.lineComponentByKind[e])=>je(rn.lineComponentRgb255ByKind[e],n),rr=(e,n=fn.alpha.lineComponentLabelAccentByKind[e])=>je(rn.lineComponentRgb255ByKind[e],n),bn=e=>il(e)?uy(e,fn.alpha.shortLabelBackgroundByType.area):je(rn.shortLabelRgb255ByType[e],fn.alpha.shortLabelBackgroundByType[e]),Wb=e=>il(e)?sl(e):rn.shortLabelRgb255ByType[e],ii=(e,n=fn.alpha.selection[e])=>je(rn.selectionRgb255[e],n),my=(e=1)=>je(rn.labelTextRgb255,e),Sn=Object.freeze({fontFamily:'"Helvetica Neue", Arial, Helvetica, sans-serif',fontWeight:{regular:400,medium:500,semibold:600},fontSizePx:{supportText:12,pointLabel:14,measurementLabel:16,compactBadge:10,distancePairLabel:11}}),yy=e=>{if(!Number.isFinite(e)||e<0)return"A";let n=Math.floor(e),t="";do t=String.fromCharCode(65+n%26)+t,n=Math.floor(n/26)-1;while(n>=0);return t},cn={NUMERIC:"numeric",ALPHABETIC:"alphabetic"},py={[q.POINT]:{prefix:"",counterStyle:cn.NUMERIC,backgroundColor:bn(q.POINT),textColor:kn("dark")},[q.DISTANCE]:{prefix:"",counterStyle:cn.ALPHABETIC,backgroundColor:bn(q.DISTANCE),textColor:kn("light")},[q.POLYLINE]:{prefix:"L",counterStyle:cn.NUMERIC,backgroundColor:bn(q.POLYLINE),textColor:kn("dark")},[q.AREA_GROUND]:{prefix:"A",counterStyle:cn.NUMERIC,backgroundColor:bn(q.AREA_GROUND),textColor:kn("light")},[q.AREA_PLANAR]:{prefix:"D",counterStyle:cn.NUMERIC,backgroundColor:bn(q.AREA_PLANAR),textColor:kn("light")},[q.AREA_VERTICAL]:{prefix:"F",counterStyle:cn.NUMERIC,backgroundColor:bn(q.AREA_VERTICAL),textColor:kn("light")},[q.LABEL]:{prefix:"T",counterStyle:cn.NUMERIC,backgroundColor:bn(q.LABEL),textColor:kn("light")}},ll=(e,n,t=py)=>{const o=t[e],r=Number.isFinite(n)&&n>0?Math.floor(n):1,a=o.counterStyle===cn.ALPHABETIC?yy(r-1):`${r}`;return`${o.prefix}${a}`},ul=/^(.*?)(\d+)$/,gy=8,fy=(e,n)=>{const t=e==null?void 0:e.trim();if(!t)return n;const o=t.match(ul);if(!o)return t;const[,r,a]=o,i=String(Number(a)+1).padStart(a.length,"0");return`${r}${i}`},Ay=(e,n)=>{const t=n.trim();return t?[t,...e.filter(o=>o!==t)].slice(0,gy):e},si=e=>{const n=e.match(ul);if(!n)return null;const[,t]=n,o=t.trimEnd();return o?{baseText:o,prefix:t}:null},Ty=e=>{const n=new Set(e.filter(o=>!si(o))),t=new Set;return e.filter(o=>{const r=si(o);return r?n.has(r.baseText)||t.has(r.prefix)?!1:(t.add(r.prefix),!0):!0})},ca=(...e)=>Ty([...new Set(e.flat().map(n=>n.trim()).filter(Boolean))]),vy=({defaultText:e,labelTextHistory:n,labelTextSuggestions:t})=>({initialValue:fy(n[0],e),labelSuggestions:ca(n,t)}),Qb=({annotationEntries:e,additionalSuggestions:n=[]})=>ca([...e].reverse().filter(t=>t.toolType===q.LABEL||t.type===q.LABEL).flatMap(t=>t.displayName??t.name??[]),n),Ny="data-annotation-keyboard-shortcuts-suspended",li=e=>e instanceof HTMLElement?e.isContentEditable?!0:e.closest("input, textarea, select, [contenteditable]:not([contenteditable='false'])")instanceof HTMLElement:!1,ui=e=>e instanceof HTMLElement?!!e.closest(`[${Ny}]`):!1,dl=e=>e instanceof Element?e:e instanceof Node?e.parentElement:null,ky=e=>{const n=dl(e);return li(n)?!0:li(document.activeElement)},cl=e=>{const n=dl(e);return ky(e)||ui(n)||ui(document.activeElement)},Ie={CANCEL_ACTIVE_TOOL:"cancel-active-tool",DELETE_SELECTION:"delete-selection",FINISH_MEASUREMENT:"finish-measurement",FOCUS_NEXT_NAVIGATION_ITEM:"focus-next-navigation-item",FOCUS_PREVIOUS_NAVIGATION_ITEM:"focus-previous-navigation-item",UNDO_LAST_POINT:"undo-last-point"},by=(e,n)=>{const t=e.key.toLowerCase(),o=e.code.toLowerCase();return n.some(r=>{const a=r.toLowerCase();return a===t||a===o})},Iy=[{action:Ie.CANCEL_ACTIVE_TOOL,keys:["Escape"]},{action:Ie.FINISH_MEASUREMENT,keys:["Enter"]},{action:Ie.FOCUS_PREVIOUS_NAVIGATION_ITEM,keys:["ArrowLeft"]},{action:Ie.FOCUS_NEXT_NAVIGATION_ITEM,keys:["ArrowRight"]},{action:Ie.DELETE_SELECTION,keys:["Delete"]},{action:Ie.UNDO_LAST_POINT,keys:["Backspace"]}],hy=(e,{allowRepeat:n=!1}={})=>!(e.defaultPrevented||!n&&e.repeat||e.metaKey||e.ctrlKey||e.altKey||cl(e.target)),Sy=e=>!e.defaultPrevented&&!e.altKey&&!cl(e.target)&&(e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==="a",Cy=(e,n={})=>{var t;return((t=Iy.find(({action:o,keys:r})=>{var a;return!((a=n.disabledActions)!=null&&a.includes(o))&&by(e,r)}))==null?void 0:t.action)??null},Yn=new w,Ey=new w,Pr=(e,n)=>e.dot(n)<0?e.negate():e,Oy=({samples:e,normal:n,maxSampleCount:t,timestampMs:o=performance.now()})=>{const r=Yn.copy(n);if(e.length>0){const i=e[e.length-1];i&&Pr(r,Ey.set(i.normalX,i.normalY,i.normalZ))}e.push({normalX:r.x,normalY:r.y,normalZ:r.z,timestampMs:o});const a=e.length-t;a>0&&e.splice(0,a)},Ry=({samples:e,fallbackNormal:n,result:t,epsilonSquared:o,maxSampleAgeMs:r,weightDecayWindowMs:a=r,weightDecayGamma:i=1,nowMs:s=performance.now()})=>{const l=s-Math.max(0,r);for(;e.length>1&&e[0].timestampMs<l;)e.shift();if(e.length===0)return n;let u=0,d=0,c=0,y=0;const m=Math.max(0,a),p=Math.max(i,.01),A=e[e.length-1];for(const T of e){Yn.set(T.normalX,T.normalY,T.normalZ),Pr(Yn,n);const k=Math.max(0,s-T.timestampMs),N=T===A?1:m>0?Math.pow(Math.max(0,1-k/m),p):1;N<=0||(u+=Yn.x*N,d+=Yn.y*N,c+=Yn.z*N,y+=N)}if(y<=0)return t.copy(n);const f=1/y;return t.set(u*f,d*f,c*f),t.lengthSq()<=o?t.copy(n):(t.normalize(),Pr(t,n)),t},It=Object.freeze({referenceLineEpsilonMeters:.001}),Ly=[[0,1],[0,2],[1,2]],wy=32,qy=1e-10,be=(e,n,t)=>{var o;return((o=e[n])==null?void 0:o[t])??0},_e=(e,n,t,o)=>{const r=e[n];r&&(r[t]=o)},xy=e=>Ly.map(([n,t])=>({row:n,column:t,value:Math.abs(be(e,n,t))})).reduce((n,t)=>t.value>n.value?t:n),_y=(e,n)=>{const t=[[0,0,0],[0,0,0],[0,0,0]];return e.forEach(o=>{const r=new w().subVectors(o,n),a=[r.x,r.y,r.z];for(let i=0;i<3;i+=1)for(let s=i;s<3;s+=1){const l=be(t,i,s)+(a[i]??0)*(a[s]??0);_e(t,i,s,l),_e(t,s,i,l)}}),t},Py=e=>{const n=e.map(r=>[...r]),t=[[1,0,0],[0,1,0],[0,0,1]];for(let r=0;r<wy;r+=1){const{row:a,column:i,value:s}=xy(n);if(s<=qy)break;const l=be(n,a,a),u=be(n,i,i),d=be(n,a,i),c=.5*Math.atan2(2*d,u-l),y=Math.cos(c),m=Math.sin(c);for(let p=0;p<3;p+=1){if(p===a||p===i)continue;const A=be(n,p,a),f=be(n,p,i),T=y*A-m*f,k=m*A+y*f;_e(n,p,a,T),_e(n,a,p,T),_e(n,p,i,k),_e(n,i,p,k)}_e(n,a,a,y*y*l-2*m*y*d+m*m*u),_e(n,i,i,m*m*l+2*m*y*d+y*y*u),_e(n,a,i,0),_e(n,i,a,0);for(let p=0;p<3;p+=1){const A=be(t,p,a),f=be(t,p,i);_e(t,p,a,y*A-m*f),_e(t,p,i,m*A+y*f)}}let o=0;for(let r=1;r<3;r+=1)be(n,r,r)<be(n,o,o)&&(o=r);return Ee(new w(be(t,0,o),be(t,1,o),be(t,2,o)))},ma=1e-8,ml=(e,n,t)=>new w().crossVectors(new w().subVectors(n,e),new w().subVectors(t,e)).lengthSq(),yl=e=>{if(e.length<3)return null;let n=null,t=ma;for(let o=0;o<e.length;o+=1){const r=e[o],a=e[(o+1)%e.length],i=e[(o+2)%e.length];if(!r||!a||!i)continue;const s=ml(r,a,i);s>t&&(t=s,n=[r,a,i])}return n},My=e=>{for(let n=0;n<e.length-2;n+=1)for(let t=n+1;t<e.length-1;t+=1)for(let o=t+1;o<e.length;o+=1){const r=e[n],a=e[t],i=e[o];if(r&&a&&i&&ml(r,a,i)>ma)return[r,a,i]}return null},pl=(e,n)=>{if(!n)return e;const t=Ae(e.anchorECEF),o=Ee(Ae(e.normalECEF));if(!o)return e;const r=new w().subVectors(n,t);return r.lengthSq()<=ma||o.dot(r)>=0?e:{...e,normalECEF:en(o.negate())}},gl=(e,n)=>{if(!e)return null;const[t,o,r]=e,a=Us(t,o,r);return a?pl({anchorECEF:en(t),normalECEF:en(a)},n):null},Dy=(e,n)=>gl(My(e),n),Kb=(e,n)=>gl(yl(e),n),Xb=(e,n)=>{if(e.length<3||!yl(e))return null;const t=Wc(e),o=t&&Py(_y(e,t));return!t||!o?null:pl({anchorECEF:en(t),normalECEF:en(o)},n)},By=new w(1,0,0),Fy=new w(0,1,0),Gy=(e,n,t)=>{if(e.length===0)return;const o=e[0]??Ae(n.anchorECEF);let r=Ee(Ae(n.normalECEF));if(!r)return;if(t){const l=Ee(Ae(t.northECEF));l&&r.dot(l)<0&&(r=r.clone().negate())}const a=Ee(rt(sa(o),r));let i=a?Ee(new w().crossVectors(r,a)):null;for(let l=0;!i&&l<e.length-1;l+=1){const u=e[l],d=e[l+1];!u||!d||(i=Ee(rt(new w().subVectors(d,u),r)))}if(i??(i=Ee(new w().crossVectors(r,By))),i??(i=Ee(new w().crossVectors(r,Fy))),!i)return;const s=Ee(new w().crossVectors(i,r));if(s){if(t){const l=Ee(Ae(t.eastECEF));l&&i.dot(l)<0&&(i=i.clone().negate(),r=r.clone().negate())}return{originECEF:en(o),eastECEF:en(i),northECEF:en(r),upECEF:en(s)}}},jy=1e-8,Uy=e=>{const n=Ee(Ae(e.normalECEF));if(!n)return;const{east:t,north:o}=ps(Ae(e.anchorECEF)),r=n.dot(t),a=n.dot(o);if(!(Math.hypot(r,a)<=jy))return xc(Math.atan2(r,a))},fl=(e,n)=>js(e,Ae(n.anchorECEF),Ae(n.normalECEF)),Hy=(e,n)=>{if(e.length<3)return 0;const t=Ae(n.anchorECEF),{xAxis:o,yAxis:r}=ra(Ae(n.normalECEF).normalize());return Ec(e.map(a=>{const i=new w().subVectors(a,t);return{x:i.dot(o),y:i.dot(r)}}))},zy=e=>{const n=Ae(e.normalECEF).normalize(),t=sa(Ae(e.anchorECEF)),o=n.angleTo(t);return Lt(Math.min(o,fs-o))},Vy=(e,n)=>{let t=0;for(let a=1;a<e.length;a+=1){const i=e[a-1],s=e[a];i&&s&&(t+=i.distanceTo(s))}const o=e[0],r=e[e.length-1];return n&&e.length>=3&&o&&r&&(t+=r.distanceTo(o)),t},$y=(e,n,t)=>{var s;const o=e.nodeIds.map(l=>n.get(l)).filter(l=>!!l),r=Vy(o,e.closed),a=o.length<3?null:Dy(o,(t==null?void 0:t.preferredFacingPositionECEF)??null);if(!a)return{...e,perimeterMeters:r,areaSquareMeters:0};const i=e.closed||e.planeLocked?Hy(o,a):0;return{...e,plane:a,planarPolygonLocalFrame:e.type===q.AREA_VERTICAL?Gy(o,a,(s=t==null?void 0:t.previousDerivedGeometry)==null?void 0:s.planarPolygonLocalFrame):void 0,perimeterMeters:r,areaSquareMeters:i,verticalityDeg:zy(a),bearingRad:Uy(a)}},di=Object.freeze({componentEpsilonMeters:.05}),Al=(e,n)=>{const t=sa(e),o=new w().subVectors(n,e),r=o.dot(t),a=new w().copy(t).multiplyScalar(r),i=rt(o,t),s=i.length(),l=Math.abs(r);if(s<di.componentEpsilonMeters||l<di.componentEpsilonMeters)return null;const u=new w().addVectors(e,i),d=new w().addVectors(e,a),c=new w().addVectors(e,t),y=Us(e,c,u),m=p=>y?js(p,e,y):p;return{adjacentHorizontalCorner:m(u),adjacentVerticalCorner:m(d)}},Zb=(e,n)=>{const t=Al(e,n);if(!t)return 0;const o=e.distanceTo(t.adjacentHorizontalCorner),r=e.distanceTo(t.adjacentVerticalCorner);return o*r},Tl=1e-8,Mr=.001,Yy=1e-6,ci=16,vl=ra,mi=e=>!e||e.lengthSq()<=Tl?null:e.clone().normalize(),Wy=(e,n,t)=>{const o=mi(n),r=mi(t);return o?r&&o.dot(r)<0||o.dot(Er(e))<0?o.negate():o:r||Er(e)},Qy=(e,n,t,o=new na)=>{const r=Math.max(t,Mr),a=n.clone().normalize(),{xAxis:i,yAxis:s}=vl(a);return o.makeBasis(i,s,a).scale(new w(r,r,1)).setPosition(e)},Ky=(e,n,t,o,r)=>{const a=Math.max(o,Mr);if(r===void 0)return a;const i=e(n);if(!i)return a;const{xAxis:s,yAxis:l}=vl(t),u=new w;let d=0;for(let c=0;c<ci;c+=1){const y=c/ci*Oo;u.copy(n).addScaledVector(s,Math.cos(y)).addScaledVector(l,Math.sin(y));const m=e(u);if(!m)continue;const p=Math.hypot(m.x-i.x,m.y-i.y);Number.isFinite(p)&&p>d&&(d=p)}return d<=Yy?a:Math.max(r/d,Mr)},Jb={CESIUM:"cesium",MAPLIBRE_THREE:"maplibre-three"},Xy={COLOR:"color",CHROME_MIRROR:"chrome-mirror",FROSTED_GLASS:"frosted-glass"},yi={GROUND:"ground",COPLANAR:"coplanar"},pi={IMMEDIATE:"immediate",DELAYED_LINE_FINISH:"delayed-line-finish"},eI={SHIFT:"shift"},nI={SCREEN:"screen",WORLD:"world"},V=e=>!!e&&!e.isDestroyed(),Zy=(e,n)=>e===n?!0:!e||!n?!1:e.viewportWidth===n.viewportWidth&&e.viewportHeight===n.viewportHeight&&e.viewKey===n.viewKey,gi=Object.freeze({tooltipZIndex:1700,triggerClassName:"inline-flex items-center text-[16px] leading-none"}),mn=({actionId:e,title:n,icon:t,onClick:o,dataTestId:r,className:a,ariaLabel:i,disabled:s=!1,visualOptions:l})=>{var A;const u=Ke(l),[d,c]=g.useState(!1),y=`${u.actionIconClassName}${a?` ${a}`:""}${s?" cursor-not-allowed opacity-50":" cursor-pointer"}`,m={color:d&&!s?u.actionIconHoverColor:u.actionIconColor};u.actionIconFontSize!==null&&(m.fontSize=u.actionIconFontSize);const p=(A=u.renderActionIcon)==null?void 0:A.call(u,{actionId:e,icon:t,className:y,style:m,dataTestId:r,ariaLabel:i,disabled:s});return C.jsx(vs,{title:n,zIndex:gi.tooltipZIndex,getPopupContainer:f=>{const T=f instanceof HTMLElement?f:document.body;return u.resolveActionTooltipPopupContainer(T)},children:C.jsx("span",{onClick:f=>{if(s){f.stopPropagation();return}o(f)},onMouseEnter:()=>c(!0),onMouseLeave:()=>c(!1),className:gi.triggerClassName,"aria-label":i,"aria-disabled":s,children:p??C.jsx(ot,{className:y,style:m,icon:t,"data-test-id":r,"aria-hidden":i?void 0:!0})})})};mn.__docgenInfo={description:"",methods:[],displayName:"AnnotationInfoBoxActionIcon",props:{actionId:{required:!0,tsType:{name:"unknown[union]",raw:"(typeof ANNOTATION_INFO_BOX_ACTION_IDS)[keyof typeof ANNOTATION_INFO_BOX_ACTION_IDS]"},description:""},title:{required:!0,tsType:{name:"string"},description:""},icon:{required:!0,tsType:{name:"IconDefinition"},description:""},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: ReactMouseEvent<HTMLElement, MouseEvent>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",elements:[{name:"HTMLElement"},{name:"MouseEvent"}],raw:"ReactMouseEvent<HTMLElement, MouseEvent>"},name:"event"}],return:{name:"void"}}},description:""},dataTestId:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},visualOptions:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};const Jy=Object.freeze({flyTo:"Zur Messung fliegen",exportGeoJson:"Als GeoJSON exportieren",show:"Einblenden",hide:"Ausblenden",setReference:"Als Referenzhöhe setzen",lock:"Sperren",unlock:"Entsperren",editStyle:"Darstellung bearbeiten",delete:"Löschen",deleteLocked:"Gesperrte Messung kann nicht gelöscht werden"}),ep=({hidden:e=!1,locked:n=!1,labels:t,onFlyTo:o,onExport:r,onToggleVisibility:a,onToggleLock:i,onEditStyle:s,onDelete:l,onSetReference:u,visualOptions:d,dataTestIdPrefix:c,dataTestIds:y})=>{const m={...Jy,...t},p=new Set((d==null?void 0:d.hiddenActionIds)??[]),A=f=>!p.has(f);return C.jsxs("div",{className:"flex items-center gap-2",children:[A(de.FLY_TO)?C.jsx(mn,{actionId:de.FLY_TO,title:m.flyTo,icon:wd,onClick:o,dataTestId:(y==null?void 0:y.flyTo)??`${c}-flyto-btn`,visualOptions:d}):null,A(de.EXPORT)?C.jsx(mn,{actionId:de.EXPORT,title:m.exportGeoJson,icon:qd,onClick:r,dataTestId:(y==null?void 0:y.export)??`${c}-export-geojson-btn`,visualOptions:d}):null,A(de.VISIBILITY)?C.jsx(mn,{actionId:de.VISIBILITY,title:e?m.show:m.hide,icon:e?xd:_d,onClick:a,dataTestId:(y==null?void 0:y.visibility)??`${c}-toggle-visibility-btn`,visualOptions:d}):null,u&&A(de.REFERENCE)?C.jsx(mn,{actionId:de.REFERENCE,title:m.setReference,icon:Pd,onClick:u,dataTestId:(y==null?void 0:y.reference)??`${c}-set-reference-btn`,visualOptions:d}):null,A(de.LOCK)?C.jsx(mn,{actionId:de.LOCK,title:n?m.unlock:m.lock,icon:n?Md:Dd,onClick:i,dataTestId:(y==null?void 0:y.lock)??`${c}-toggle-lock-btn`,visualOptions:d}):null,s&&A(de.STYLE)?C.jsx(mn,{actionId:de.STYLE,title:m.editStyle,icon:Bd,onClick:s,visualOptions:d}):null,A(de.DELETE)?C.jsx(mn,{actionId:de.DELETE,title:n?m.deleteLocked:m.delete,icon:Fd,onClick:l,dataTestId:(y==null?void 0:y.delete)??`${c}-delete-btn`,disabled:n,visualOptions:d}):null]})};ep.__docgenInfo={description:"",methods:[],displayName:"AnnotationInfoBoxActions",props:{hidden:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},locked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},labels:{required:!1,tsType:{name:"Partial",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};const Nl=({pixelWidth:e,fitContentWidth:n=!0,collapsedHorizontalAnchor:t="control-edge",useControlLayout:o=!0,controlPosition:r="bottomright",controlOrder:a=11,style:i,slots:s,visualOptions:l})=>{var c;const u=Ke(l),d=((c=s.headingTitle)==null?void 0:c.trim())??"";return C.jsx("div",{"data-test-id":"annotation-info-box",children:C.jsx(Xd,{width:e??u.defaultPixelWidth,fitContentWidth:n,useControlLayout:o,controlPosition:r,controlOrder:a,style:i,bodyStyle:u.bodyPanelStyle,onPanelClick:y=>y.stopPropagation(),collapsible:s.collapsible??!0,header:void 0,headingColor:s.headingColor??u.headingColor,headingStyle:u.headerStyle,footer:s.footer,hideSubtitleWhenCollapsed:!1,hideFooterWhenCollapsed:!0,collapsedHorizontalAnchor:t,heading:d?C.jsx("div",{className:"flex w-full items-center gap-2",children:C.jsx("span",{className:`${u.headerForegroundClassName} ${u.headerTitleClassName}`,title:d,children:d})}):void 0,subtitle:s.subtitle,content:s.content})})};Nl.__docgenInfo={description:"",methods:[],displayName:"AnnotationInfoBoxContainer",props:{pixelWidth:{required:!1,tsType:{name:"number"},description:""},fitContentWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},collapsedHorizontalAnchor:{required:!1,tsType:{name:"union",raw:'"control-edge" | "expanded-left"',elements:[{name:"literal",value:'"control-edge"'},{name:"literal",value:'"expanded-left"'}]},description:"",defaultValue:{value:'"control-edge"',computed:!1}},useControlLayout:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},controlPosition:{required:!1,tsType:{name:"union",raw:`| "topleft"
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
}`,signature:{properties:[{key:"headingTitle",value:{name:"string",required:!1}},{key:"headingColor",value:{name:"string",required:!1}},{key:"subtitle",value:{name:"ReactNode",required:!1}},{key:"content",value:{name:"ReactNode",required:!1}},{key:"footer",value:{name:"ReactNode",required:!1}},{key:"collapsible",value:{name:"boolean",required:!1}}]}},description:""}}};const oe={TEXT:"text",ACTION:"action",ALERT:"alert",HEADING:"heading"},it={TITLE:"title",SECTION:"section"},Dn={END:"end",START:"start"},he={CLICK:"click",DOUBLE_CLICK:"double-click",ENTER:"enter",BACKSPACE:"backspace",ESCAPE:"escape",SHIFT:"shift",DISC_CENTER:"disc-center",DISC_OUTER:"disc-outer"},xt={INFO:"info",WARNING:"warning"},pn={INFO:"info",WARNING:"warning"},Me={STANDARD:"standard",COMPACT:"compact"},np="#00d9ff",tp="rgba(0, 217, 255, 0.2)",op="#004b5c",rp="#ef4444",ap="rgba(239, 68, 68, 0.18)",ip="#7f1d1d",ya="--carma-help-baseline",sp="1.5em",on=1.5,_t=`var(${ya})`,Po=`calc(var(${ya}) / 2)`,fi=.74,ar=4/3,Dr=e=>`${on/e}em`,kl={[ya]:sp,lineHeight:on},bl={margin:`0 0 ${_t}`,lineHeight:on},Ai={[it.TITLE]:{margin:0,fontWeight:700,lineHeight:on},[it.SECTION]:{margin:`${Po} 0 0`,fontWeight:700,lineHeight:on}},lp={gridColumn:"1 / -1"},Xt={whiteSpace:"normal"},up={display:"inline-flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"flex-start",minWidth:0},vo={display:"inline-flex",flexWrap:"wrap",alignItems:"center",gap:"0.34em",minHeight:_t},dp={...vo,marginTop:Po},cp={...vo,justifyContent:"space-between",width:"100%"},No="1em",mp="0.5em",Il="max-content minmax(0, 1fr)",yp="7.75rem minmax(0, 1fr)",pp=e=>({...kl,display:"grid",gridTemplateColumns:e===Dn.START?yp:Il,columnGap:e===Dn.START?mp:No,rowGap:Po,alignItems:"start"}),hl={...bl,gridColumn:"1 / -1"},gp={...hl,margin:0},Sl={[Me.STANDARD]:{display:"grid",gridTemplateColumns:Il,columnGap:No,alignItems:"start",margin:`0 0 ${Po}`,lineHeight:on},[Me.COMPACT]:{display:"contents"}},Mo={display:"inline-flex",alignItems:"center",justifyContent:"flex-end",gap:"0.22em",minHeight:_t,whiteSpace:"nowrap"},Br={display:"flex",flexDirection:"column",alignItems:"flex-end",gap:0,whiteSpace:"nowrap"},fp={lineHeight:1},Fr={[pn.INFO]:{margin:"-0.2rem 0 0.8rem",padding:"0.48rem 0.56rem",borderRadius:4,background:tp,color:op},[pn.WARNING]:{margin:"-0.2rem 0 0.8rem",padding:"0.48rem 0.56rem",borderRadius:4,background:ap,color:ip}},Ap={[pn.INFO]:{...Fr[pn.INFO],display:"grid",gridColumn:"1 / -1",gridTemplateColumns:"subgrid",columnGap:No,rowGap:"0.58rem",margin:"-0.2rem 0 0.8rem",padding:"0.48rem 0"},[pn.WARNING]:{...Fr[pn.WARNING],display:"grid",gridColumn:"1 / -1",gridTemplateColumns:"subgrid",columnGap:No,rowGap:"0.58rem",margin:"-0.2rem 0 0.8rem",padding:"0.48rem 0"}},Tp={minWidth:0,fontWeight:600,lineHeight:on},vp={[Me.STANDARD]:{minWidth:0,lineHeight:on,whiteSpace:"nowrap"},[Me.COMPACT]:{minWidth:0,lineHeight:on}},Cl={display:"inline-flex",boxSizing:"border-box",minWidth:"3.4em",height:Dr(fi),alignItems:"center",justifyContent:"center",border:"1px solid rgba(0, 0, 0, 0.34)",borderRadius:"0.28rem",background:"rgba(255, 255, 255, 0.68)",boxShadow:"inset 0 -1px 0 rgba(0, 0, 0, 0.2)",color:"#1f2937",fontSize:`${fi}em`,fontWeight:700,lineHeight:1,padding:"0 0.58em"},Np={...Cl,gap:"0.22rem"},kp={display:"inline-flex",minWidth:_t,height:_t,alignItems:"center",justifyContent:"center",lineHeight:1},bp={[xt.INFO]:{color:np},[xt.WARNING]:{color:rp}},Ip={display:"inline-flex",alignItems:"center",justifyContent:"center",minWidth:Dr(ar),height:Dr(ar),fontSize:`${ar}em`,lineHeight:1,color:te.ACCENT_NEUTRALS},ir={de:{alternative:"oder",click:"Klick",doubleClick:"2x Klick"},en:{alternative:"or",click:"Click",doubleClick:"Double click"}},hp=e=>{const n=e==null?void 0:e.split("-")[0];return n&&ir[n]?ir[n]:ir.en},ht=e=>C.jsx("span",{style:Cl,children:e}),Gr=e=>C.jsxs("span",{style:Np,children:[C.jsx(ot,{icon:Ud}),C.jsx("span",{children:e})]}),jr=e=>C.jsx("span",{style:Ip,children:C.jsx(ot,{icon:e})}),Pt=e=>C.jsx("span",{style:kp,children:C.jsx(ot,{style:bp[e],icon:e===xt.WARNING?Gd:jd})}),El=e=>Pt(e===pn.WARNING?xt.WARNING:xt.INFO),Ol=(e,n)=>ht(dm(e,n)),Rl=(e,n,t,o)=>{switch(e){case he.CLICK:return Gr(o.click);case he.DOUBLE_CLICK:return Gr(o.doubleClick);case he.ENTER:return ht("Enter");case he.BACKSPACE:return Ol(t,n);case he.ESCAPE:return ht(n.escape);case he.SHIFT:return ht(n.shift);case he.DISC_CENTER:return jr(em);case he.DISC_OUTER:return jr(Hd)}},ko=(e,n,t,o)=>C.jsx("span",{style:Mo,children:e.map((r,a)=>C.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"0.22rem"},children:[a>0?C.jsx("span",{children:"+"}):null,Rl(r,n,t,o)]},`${r}-${a}`))}),Ll=(e,n,t,o,r,a)=>a===Me.COMPACT?C.jsxs("span",{style:Br,children:[e?Pt(e):null,n.map((i,s)=>C.jsxs("span",{style:Br,children:[s>0?C.jsx("span",{style:fp,children:r.alternative}):null,ko(i,t,o,r)]},`${i.join("+")}-${s}`))]}):C.jsxs("span",{style:Mo,children:[e?Pt(e):null,n.map((i,s)=>C.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"0.22rem"},children:[s>0?C.jsx("span",{children:r.alternative}):null,ko(i,t,o,r)]},`${i.join("+")}-${s}`))]}),wl=(e,n,t,o)=>{const r=e.inputAlternatives.length-1;return C.jsxs("span",{style:up,children:[e.inputAlternatives.length===0?e.leadingLabel&&C.jsx("span",{style:vo,children:C.jsx("span",{style:Xt,children:e.leadingLabel})}):e.inputAlternatives.map((a,i)=>C.jsxs("span",{style:e.rightAlignInput&&i===0?cp:i===0?vo:dp,children:[i===0&&e.leadingLabel?C.jsx("span",{style:Xt,children:e.leadingLabel}):null,i===0&&e.indicator?Pt(e.indicator):null,ko(a,n,t,o),i<r?C.jsx("span",{children:o.alternative}):null,i===r&&e.trailingLabelAfterLastInput&&e.trailingLabel?C.jsx("span",{style:Xt,children:e.trailingLabel}):null]},`${a.join("+")}-${i}`)),e.trailingLabel&&!e.trailingLabelAfterLastInput?C.jsx("span",{style:Xt,children:e.trailingLabel}):null]})};ht.__docgenInfo={description:"",methods:[],displayName:"renderKeyToken"};Gr.__docgenInfo={description:"",methods:[],displayName:"renderPointerToken"};jr.__docgenInfo={description:"",methods:[],displayName:"renderDragTargetToken"};Pt.__docgenInfo={description:"",methods:[],displayName:"renderActionIndicatorToken"};El.__docgenInfo={description:"",methods:[],displayName:"renderAlertSeverityToken"};Ol.__docgenInfo={description:"",methods:[],displayName:"renderBackspaceToken"};Rl.__docgenInfo={description:"",methods:[],displayName:"renderHelpActionInput"};ko.__docgenInfo={description:"",methods:[],displayName:"renderHelpActionInputCombination"};Ll.__docgenInfo={description:"",methods:[],displayName:"renderHelpActionInputAlternatives"};wl.__docgenInfo={description:"",methods:[],displayName:"renderStartAlignedTrigger"};const Sp=()=>typeof navigator>"u"?void 0:navigator.language,Cp=e=>e===Me.COMPACT?e:Me.STANDARD,Ep=e=>typeof e=="string"||e.kind===oe.TEXT,Ti=e=>typeof e!="string"&&e.kind===oe.ALERT,Op=e=>{const n=e.findIndex(Ep);if(n<=0)return e;const t=e.slice(0,n),o=t.filter(Ti);return o.length===0?e:[...t.filter(r=>!Ti(r)),e[n],...o,...e.slice(n+1)]},Zt=(e,n,t=!1)=>{const o=typeof e=="string"?e:e.text;return C.jsx("p",{style:n===Me.COMPACT?t?gp:hl:bl,children:o},o)},vi=(e,n,t)=>{const o=e.level??it.SECTION;return C.jsx("div",{"data-testid":"annotation-help-heading","data-level":o,style:t===Me.COMPACT?{...Ai[o],...lp}:Ai[o],children:e.text},`heading-${e.text}-${n}`)},Ur=(e,n,t,o,r,a,i=Dn.END)=>{const l=i===Dn.START?wl(e,t,o,r):(e.inputAlternatives.length>0||e.indicator?Ll(e.indicator,e.inputAlternatives,t,o,r,a):null)??C.jsx("span",{style:Mo});return C.jsxs("div",{"data-testid":"annotation-help-action",style:Sl[a],children:[l,C.jsx("span",{style:vp[a],children:e.description})]},`${e.inputAlternatives.map(u=>u.join("+")).join("-")}-${e.leadingLabel??""}-${n}`)},Ni=(e,n,t,o,r,a)=>{const i=e.actions??[],s=a===Me.COMPACT?Ap[e.severity]:Fr[e.severity];return C.jsxs("div",{"data-testid":"annotation-help-alert","data-severity":e.severity,style:s,children:[C.jsxs("div",{style:Sl[a],children:[C.jsx("span",{style:a===Me.COMPACT?Br:Mo,children:El(e.severity)}),C.jsx("span",{style:Tp,children:e.text})]}),i.map((l,u)=>Ur(l,u,t,o,r,a))]},`${e.severity}-${e.text}-${n}`)},Do=({items:e,layout:n,locale:t,platform:o,actionTriggerAlign:r=Dn.END})=>{const a=Cp(n),i=t??Sp(),s=um(i),l=lm(o),u=hp(i),d=Op(e);if(a===Me.COMPACT){const y=d.map((m,p)=>typeof m=="string"||m.kind===oe.TEXT?Zt(m,a,p===d.length-1):m.kind===oe.HEADING?vi(m,p,a):m.kind===oe.ALERT?Ni(m,p,s,l,u,a):Ur(m,p,s,l,u,a,r));return C.jsx("div",{"data-testid":"annotation-help-content",style:pp(r),children:y})}const c=d.map((y,m)=>typeof y=="string"||y.kind===oe.TEXT?Zt(y,a):y.kind===oe.HEADING?vi(y,m,a):y.kind===oe.ALERT?Ni(y,m,s,l,u,a):Ur(y,m,s,l,u,a,r));return C.jsx("div",{"data-testid":"annotation-help-content",style:kl,children:c})};Do.__docgenInfo={description:"",methods:[],displayName:"AnnotationInfoBoxHelpContent",props:{items:{required:!0,tsType:{name:"unknown"},description:""},layout:{required:!1,tsType:{name:"unknown[union]",raw:"(typeof ANNOTATION_INFO_BOX_HELP_LAYOUTS)[keyof typeof ANNOTATION_INFO_BOX_HELP_LAYOUTS]"},description:""},locale:{required:!1,tsType:{name:"string"},description:""},platform:{required:!1,tsType:{name:"KeyboardDisplayPlatform"},description:""},actionTriggerAlign:{required:!1,tsType:{name:"unknown[union]",raw:"(typeof ANNOTATION_INFO_BOX_HELP_ACTION_TRIGGER_ALIGNMENTS)[keyof typeof ANNOTATION_INFO_BOX_HELP_ACTION_TRIGGER_ALIGNMENTS]"},description:"",defaultValue:{value:'"end"',computed:!1}}}};const Rp=({items:e,className:n,visualOptions:t})=>{const o=Ke(t),r=o.subtitleTextClassName.split(/\s+/).filter(a=>a.length>0&&!a.startsWith("px-")).join(" ");return C.jsx("dl",{className:`m-0 flex flex-wrap items-start tabular-nums${n?` ${n}`:""}`,style:{columnGap:"1.35rem",rowGap:"0.5rem"},children:e.map((a,i)=>C.jsxs("div",{className:"grid max-w-full min-w-[5rem] flex-[0_1_auto] grid-rows-[auto,auto] content-start items-start gap-y-[0.1em] text-left",children:[C.jsx("dt",{className:r,style:o.subtitleTextStyle,children:a.label}),C.jsx("dd",{className:"m-0 leading-[1.25]",children:a.value})]},a.id??i))})};Rp.__docgenInfo={description:"",methods:[],displayName:"AnnotationInfoBoxMetricGrid",props:{items:{required:!0,tsType:{name:"unknown"},description:""},className:{required:!1,tsType:{name:"string"},description:""},visualOptions:{required:!1,tsType:{name:"Partial",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Partial<AnnotationInfoBoxVisualOptions>"},description:""}}};const Lp=({children:e,className:n,style:t,visualOptions:o})=>{const r=Ke(o);return C.jsx("div",{className:`${r.subtitleMetaTextClassName}${n?` ${n}`:""}`,style:{...r.subtitleMetaTextStyle,...t},children:e})};Lp.__docgenInfo={description:"",methods:[],displayName:"AnnotationInfoBoxMetaText",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""},visualOptions:{required:!1,tsType:{name:"Partial",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Partial<AnnotationInfoBoxVisualOptions>"},description:""}}};const wp=Object.freeze({entrySingular:"Messung",entryPlural:"Messungen",availableSuffix:"verfügbar",previousAriaLabel:"Vorherige Messung",nextAriaLabel:"Nächste Messung",counterSeparator:"von"}),ki=(e,n)=>`${e} ${e===1?n.entrySingular:n.entryPlural} ${n.availableSuffix}`.trim(),qp=({totalEntries:e,currentIndex:n,instructionText:t,availabilityLabel:o,labels:r,onFlyToAll:a,onPrevious:i,onNext:s,visualOptions:l})=>{var p,A;const u=Ke(l),d={...wp,...r};if(e<=0&&!t)return null;const c={fontSize:u.navigationLinkFontSize,border:"none",background:"transparent",padding:0,userSelect:"none"},y=((p=u.navigationControlLabels)==null?void 0:p.previous)??C.jsx(ot,{icon:zd}),m=((A=u.navigationControlLabels)==null?void 0:A.next)??C.jsx(ot,{icon:Vd});return C.jsxs(C.Fragment,{children:[t?C.jsx("div",{className:`${u.navigationInstructionContainerClassName} ${u.mutedTextClassName}`,children:C.jsx("span",{children:t})}):null,e>0?C.jsx("div",{className:u.navigationAvailabilityContainerClassName,children:a?C.jsx("button",{type:"button",className:`${u.linkTextClassName} cursor-pointer`,onClick:a,style:{border:"none",background:"transparent",padding:0},children:o??ki(e,d)}):C.jsx("span",{className:u.linkTextClassName,children:o??ki(e,d)})}):null,e>0?C.jsxs("div",{className:u.navigationSummaryContainerClassName,children:[C.jsx("button",{type:"button",className:`renderAsLink cursor-pointer select-none ${u.linkTextClassName}`,onClick:i,"data-test-id":"switch-measurement-left",style:c,"aria-label":d.previousAriaLabel,children:y}),C.jsxs("span",{className:"mx-4",children:[n+1," ",d.counterSeparator," ",e]}),C.jsx("button",{type:"button",className:`renderAsLink cursor-pointer select-none ${u.linkTextClassName}`,onClick:s,"data-test-id":"switch-measurement-right",style:c,"aria-label":d.nextAriaLabel,children:m})]}):null]})};qp.__docgenInfo={description:"",methods:[],displayName:"AnnotationInfoBoxNavigation",props:{totalEntries:{required:!0,tsType:{name:"number"},description:""},currentIndex:{required:!0,tsType:{name:"number"},description:""},instructionText:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},availabilityLabel:{required:!1,tsType:{name:"ReactNode"},description:""},labels:{required:!1,tsType:{name:"Partial",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};const Bo=({children:e,className:n,style:t,visualOptions:o})=>{const r=Ke(o);return C.jsx("div",{className:`${r.bodyContainerClassName} ${r.bodyTextClassName}${n?` ${n}`:""}`,style:{...r.bodyTextStyle,...t},children:e})};Bo.__docgenInfo={description:"",methods:[],displayName:"AnnotationInfoBoxTextContent",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""},visualOptions:{required:!1,tsType:{name:"Partial",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Partial<AnnotationInfoBoxVisualOptions>"},description:""}}};const Wn=e=>e.trim(),Je=Object.freeze({borderRadiusRem:"0.2143rem",shortLabelMaxLength:64,shortLabelWidthPaddingCh:.5,shortLabelMinWidthCh:2.5}),ft=e=>Wn(e).slice(0,Je.shortLabelMaxLength),xp=e=>e.slice(0,Je.shortLabelMaxLength),_p=({value:e,placeholder:n,onCommit:t,readOnly:o=!1,shortLabelValue:r,shortLabelPlaceholder:a,onShortLabelCommit:i,visualOptions:s})=>{const l=Ke(s),[u,d]=g.useState(()=>Wn(e)),[c,y]=g.useState(()=>ft(r??"")),m=g.useRef(null),p=g.useRef(null),A=Je.shortLabelMaxLength+Je.shortLabelWidthPaddingCh,f=Math.min(Math.max(Wn(c||a||"").length+Je.shortLabelWidthPaddingCh,Je.shortLabelMinWidthCh),A);g.useEffect(()=>{d(Wn(e))},[e]),g.useEffect(()=>{y(ft(r??""))},[r]);const T=I=>{if(o){d(Wn(e));return}const E=Wn(I);d(E),t(E)},k=I=>{if(!i||o){y(ft(r??""));return}const E=ft(I);if(!E){const O=ft(r??"");y(O);return}y(E),i(E)},N=I=>{I.stopPropagation()},v=I=>{var E;I.key==="Enter"&&(I.preventDefault(),(E=m.current)==null||E.blur())},b=I=>{var E;I.key==="Enter"&&(I.preventDefault(),(E=p.current)==null||E.blur())},h={...l.titleTextStyle,flex:"0 1 auto",minWidth:"1ch",maxWidth:"100%",fieldSizing:"content"},S={...l.titleTextStyle,borderRadius:Je.borderRadiusRem,flex:"0 1 auto",width:`${f}ch`,minWidth:`${Je.shortLabelMinWidthCh}ch`,maxWidth:`min(${A}ch, 100%)`,fieldSizing:"content"};return C.jsxs("div",{className:"inline-flex min-w-0 max-w-full flex-1 items-center",style:{columnGap:"0.35em"},onMouseDown:N,onClick:N,children:[C.jsx("input",{ref:m,type:"text",value:u,placeholder:n,readOnly:o,"aria-readonly":o,className:l.titleInputClassName,style:h,onMouseDown:N,onClick:N,onChange:I=>d(I.target.value),onBlur:I=>T(I.target.value),onKeyDown:v}),i?C.jsx("input",{ref:p,type:"text",value:c,placeholder:a,readOnly:o,"aria-readonly":o,maxLength:Je.shortLabelMaxLength,className:l.shortLabelInputClassName,style:S,onMouseDown:N,onClick:N,onChange:I=>y(xp(I.target.value)),onBlur:I=>k(I.target.value),onKeyDown:b}):null]})};_p.__docgenInfo={description:"",methods:[],displayName:"AnnotationInfoBoxTitleInput",props:{value:{required:!0,tsType:{name:"string"},description:""},placeholder:{required:!0,tsType:{name:"string"},description:""},onCommit:{required:!0,tsType:{name:"signature",type:"function",raw:"(nextValue: string) => void",signature:{arguments:[{type:{name:"string"},name:"nextValue"}],return:{name:"void"}}},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},shortLabelValue:{required:!1,tsType:{name:"string"},description:""},shortLabelPlaceholder:{required:!1,tsType:{name:"string"},description:""},onShortLabelCommit:{required:!1,tsType:{name:"signature",type:"function",raw:"(nextValue: string) => void",signature:{arguments:[{type:{name:"string"},name:"nextValue"}],return:{name:"void"}}},description:""},visualOptions:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};const Pp={toolButtonWidthPx:48},Mp={wrapper:"w-fit max-w-full flex items-start gap-2 overflow-visible",toolButtonBase:"flex h-8 w-12 min-w-12 items-center justify-center rounded-[10px] bg-white px-2 text-gray-700 button-shadow transition-colors hover:text-gray-900",toolButtonActive:"text-[#1677ff]",toolButtonInactive:"",toolButtonDisabled:"cursor-not-allowed opacity-45 hover:text-gray-700",toolButtonBackdrop:"pointer-events-none absolute inset-0 z-0 overflow-hidden rounded-[10px]",toolGroup:"relative flex min-w-12 items-center overflow-visible",toolButtonShell:"relative overflow-visible",toolButtonIcon:"inline-flex items-center justify-center text-base leading-none",toolButtonBadge:"absolute right-0 top-0 z-10 inline-flex h-5 min-w-5 translate-x-1/3 -translate-y-1/3 items-center justify-center rounded-full bg-[#4b5563] px-1 text-[12px] font-medium leading-none text-white shadow-sm",separator:"inline-block h-[18px] w-px bg-gray-300"},ql=({activeToolId:e,tools:n,onToolSelect:t,classNames:o,metrics:r,tooltipPlacement:a="top",getTooltipPopupContainer:i,renderToolButtonBackdrop:s,showToolTypeIndicators:l=!1})=>{const u={...Mp,...o},d={...Pp,...r};return C.jsx("div",{className:u.wrapper,onClick:c=>c.stopPropagation(),children:n.map(c=>{const y=c.id===e,m=c.annotationCount??0,p=c.tooltipContent??c.tooltip,A=c.ariaLabel??c.tooltip,f=s==null?void 0:s(c);return C.jsxs("div",{className:u.toolGroup,children:[C.jsxs("div",{className:u.toolButtonShell,style:{width:d.toolButtonWidthPx},children:[l&&m>0?C.jsx("span",{className:u.toolButtonBadge,children:m}):null,C.jsx(vs,{title:p,placement:a,getPopupContainer:i,children:C.jsxs("button",{type:"button",onClick:()=>t(c.id),"aria-pressed":y,"aria-label":A,disabled:c.disabled,className:["relative z-[1] overflow-hidden",u.toolButtonBase,y?u.toolButtonActive:u.toolButtonInactive,c.disabled?u.toolButtonDisabled:""].join(" "),style:{width:d.toolButtonWidthPx},children:[f?C.jsx("span",{className:u.toolButtonBackdrop,"aria-hidden":"true",children:f}):null,C.jsx("span",{className:["relative z-[1]",u.toolButtonIcon].join(" "),children:c.icon})]})})]}),c.separatorAfter?C.jsx("span",{className:u.separator,"aria-hidden":"true"}):null]},c.id)})})};ql.__docgenInfo={description:"",methods:[],displayName:"AnnotationsToolbar",props:{activeToolId:{required:!0,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},tools:{required:!0,tsType:{name:"unknown"},description:""},onToolSelect:{required:!0,tsType:{name:"signature",type:"function",raw:"(toolId: string) => void",signature:{arguments:[{type:{name:"string"},name:"toolId"}],return:{name:"void"}}},description:""},classNames:{required:!1,tsType:{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"tooltip",value:{name:"string",required:!0}},{key:"tooltipContent",value:{name:"ReactNode",required:!1}},{key:"icon",value:{name:"ReactNode",required:!1}},{key:"annotationCount",value:{name:"number",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"separatorAfter",value:{name:"boolean",required:!1}},{key:"ariaLabel",value:{name:"string",required:!1}}]}},name:"tool"}],return:{name:"ReactNode"}}},description:""},showToolTypeIndicators:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const ce={LABEL:"label",VISUALIZER:"visualizer"},Hr=e=>`[${e}="true"]`,bi="data-annotation-label-overlay-root",Ii="data-annotation-visualizer-overlay-root",xl="data-annotation-visualizer-overlay-container",Dp=Hr(xl),Bp=Object.freeze([ce.VISUALIZER,ce.LABEL]),Fp=Object.freeze({[ce.LABEL]:{rootAttribute:bi,containerAttribute:dc,rootSelector:Hr(bi),containerSelector:cc},[ce.VISUALIZER]:{rootAttribute:Ii,containerAttribute:xl,rootSelector:Hr(Ii),containerSelector:Dp}}),_l=e=>Fp[e],Pl=(e,n=ce.LABEL)=>{var i,s;const{rootSelector:t,containerSelector:o}=_l(n);let r=e.getOverlayContainer(),a=r;for(;r;){if(r.matches(o))return r;const l=(i=r.querySelector)==null?void 0:i.call(r,o);if(l instanceof HTMLElement)return l;if(r.matches(t))return r;const u=(s=r.querySelector)==null?void 0:s.call(r,t);if(u instanceof HTMLElement)return u;a=r,r=r.parentElement}return a},Gp={position:"absolute",inset:0,overflow:"hidden",pointerEvents:"none",isolation:"isolate"},jp={position:"absolute",inset:0,overflow:"hidden",pointerEvents:"none"},Up=Object.freeze({[ce.VISUALIZER]:100,[ce.LABEL]:110}),Ml=({groups:e=Bp})=>C.jsx(C.Fragment,{children:e.map(n=>{const{rootAttribute:t,containerAttribute:o}=_l(n);return C.jsx("div",{[t]:"true",style:{...Gp,zIndex:Up[n]},children:C.jsx("div",{[o]:"true",style:jp})},n)})});Ml.__docgenInfo={description:"",methods:[],displayName:"AnnotationOverlayRoots",props:{groups:{required:!1,tsType:{name:"unknown"},description:"",defaultValue:{value:`Object.freeze([
  ANNOTATION_OVERLAY_GROUP.VISUALIZER,
  ANNOTATION_OVERLAY_GROUP.LABEL,
] as const satisfies readonly AnnotationOverlayGroup[])`,computed:!0}}}};var Dl={exports:{}},Bl={};/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vt=g;function Hp(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var zp=typeof Object.is=="function"?Object.is:Hp,Vp=Vt.useSyncExternalStore,$p=Vt.useRef,Yp=Vt.useEffect,Wp=Vt.useMemo,Qp=Vt.useDebugValue;Bl.useSyncExternalStoreWithSelector=function(e,n,t,o,r){var a=$p(null);if(a.current===null){var i={hasValue:!1,value:null};a.current=i}else i=a.current;a=Wp(function(){function l(m){if(!u){if(u=!0,d=m,m=o(m),r!==void 0&&i.hasValue){var p=i.value;if(r(p,m))return c=p}return c=m}if(p=c,zp(d,m))return p;var A=o(m);return r!==void 0&&r(p,A)?p:(d=m,c=A)}var u=!1,d,c,y=t===void 0?null:t;return[function(){return l(n())},y===null?void 0:function(){return l(y())}]},[n,t,o,r]);var s=Vp(e,a[0],a[1]);return Yp(function(){i.hasValue=!0,i.value=s},[s]),Qp(s),s};Dl.exports=Bl;var Kp=Dl.exports,Re="default"in Ba?Sd:Ba,hi=Symbol.for("react-redux-context"),Si=typeof globalThis<"u"?globalThis:{};function Xp(){if(!Re.createContext)return{};const e=Si[hi]??(Si[hi]=new Map);let n=e.get(Re.createContext);return n||(n=Re.createContext(null),e.set(Re.createContext,n)),n}var An=Xp(),Zp=()=>{throw new Error("uSES not initialized!")};function pa(e=An){return function(){return Re.useContext(e)}}var Fl=pa(),Gl=Zp,Jp=e=>{Gl=e},eg=(e,n)=>e===n;function ng(e=An){const n=e===An?Fl:pa(e),t=(o,r={})=>{const{equalityFn:a=eg,devModeChecks:i={}}=typeof r=="function"?{equalityFn:r}:r,{store:s,subscription:l,getServerState:u,stabilityCheck:d,identityFunctionCheck:c}=n();Re.useRef(!0);const y=Re.useCallback({[o.name](p){return o(p)}}[o.name],[o,d,i.stabilityCheck]),m=Gl(l.addNestedSub,s.getState,u||s.getState,y,a);return Re.useDebugValue(m),m};return Object.assign(t,{withTypes:()=>t}),t}function tg(e){e()}function og(){let e=null,n=null;return{clear(){e=null,n=null},notify(){tg(()=>{let t=e;for(;t;)t.callback(),t=t.next})},get(){const t=[];let o=e;for(;o;)t.push(o),o=o.next;return t},subscribe(t){let o=!0;const r=n={callback:t,next:null,prev:n};return r.prev?r.prev.next=r:e=r,function(){!o||e===null||(o=!1,r.next?r.next.prev=r.prev:n=r.prev,r.prev?r.prev.next=r.next:e=r.next)}}}}var Ci={notify(){},get:()=>[]};function rg(e,n){let t,o=Ci,r=0,a=!1;function i(A){d();const f=o.subscribe(A);let T=!1;return()=>{T||(T=!0,f(),c())}}function s(){o.notify()}function l(){p.onStateChange&&p.onStateChange()}function u(){return a}function d(){r++,t||(t=e.subscribe(l),o=og())}function c(){r--,t&&r===0&&(t(),t=void 0,o.clear(),o=Ci)}function y(){a||(a=!0,d())}function m(){a&&(a=!1,c())}const p={addNestedSub:i,notifyNestedSubs:s,handleChangeWrapper:l,isSubscribed:u,trySubscribe:y,tryUnsubscribe:m,getListeners:()=>o};return p}var ag=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",ig=typeof navigator<"u"&&navigator.product==="ReactNative",sg=ag||ig?Re.useLayoutEffect:Re.useEffect;function lg({store:e,context:n,children:t,serverState:o,stabilityCheck:r="once",identityFunctionCheck:a="once"}){const i=Re.useMemo(()=>{const u=rg(e);return{store:e,subscription:u,getServerState:o?()=>o:void 0,stabilityCheck:r,identityFunctionCheck:a}},[e,o,r,a]),s=Re.useMemo(()=>e.getState(),[e]);sg(()=>{const{subscription:u}=i;return u.onStateChange=u.notifyNestedSubs,u.trySubscribe(),s!==e.getState()&&u.notifyNestedSubs(),()=>{u.tryUnsubscribe(),u.onStateChange=void 0}},[i,s]);const l=n||An;return Re.createElement(l.Provider,{value:i},t)}var ug=lg;function jl(e=An){const n=e===An?Fl:pa(e),t=()=>{const{store:o}=n();return o};return Object.assign(t,{withTypes:()=>t}),t}var dg=jl();function cg(e=An){const n=e===An?dg:jl(e),t=()=>n().dispatch;return Object.assign(t,{withTypes:()=>t}),t}Jp(Kp.useSyncExternalStoreWithSelector);const st={AUTHORING:"authoring",EXTERNAL:"external"},Mt={DEFAULT:"default",CUSTOM:"custom"},sr={RELATIVE:"relative",ABSOLUTE:"absolute"},Dt=(e,n)=>n?e.find(t=>t.id===n)??null:null,ga=e=>new Set(e.filter(n=>n.annotationRole===st.EXTERNAL||n.readOnly||n.locked).flatMap(n=>n.nodeIds)),mg=e=>e===sr.ABSOLUTE?sr.RELATIVE:sr.ABSOLUTE,Ul=()=>{const e=globalThis.crypto;if(e&&typeof e.randomUUID=="function")return e.randomUUID();const n=()=>Math.floor(Math.random()*65536).toString(16).padStart(4,"0");return`${Date.now().toString(16)}-${n()}-${n()}-${n()}-${n()}${n()}`},Hl=e=>new Map(e.flatMap(n=>n.nodeIds.map(t=>[t,n.id]))),uo=(e,n)=>Hl(e).get(n)??null,yg=(e,n)=>{var t;return((t=e.find(o=>o.nodeIds.includes(n)))==null?void 0:t.nodeIds)??[n]},Tn=({nodes:e,nodeLinks:n})=>{const t=new Set(e.map(i=>i.id)),o=n.map(i=>({...i,nodeIds:Array.from(new Set(i.nodeIds.filter(s=>t.has(s))))})).filter(i=>i.nodeIds.length>0),r=new Set(o.flatMap(i=>i.nodeIds)),a=e.filter(i=>!r.has(i.id)).map(i=>({id:i.id,nodeIds:[i.id]}));return[...o,...a]},pg=.1,gg=(e,n)=>Math.hypot(Xc(e,n),n.altitude-e.altitude),zl=e=>typeof e=="string"&&e.trim().length>0?e.trim():null,Vl=({nodes:e,nodeLinks:n,nodeId:t,movedNodeIds:o,linkToNodeId:r})=>{const a=e.find(p=>p.id===t)??null,i=Array.from(new Set(o.filter(Boolean)));if(!a||i.length===0)return[...n];const s=new Set(i),l=n.find(p=>p.nodeIds.includes(t))??null,u=zl(r),d=u&&!s.has(u)?n.find(p=>p.nodeIds.includes(u))??null:null;return d!==null&&!d.nodeIds.some(p=>s.has(p))?Tn({nodes:e,nodeLinks:n.map(p=>p.id===d.id?{...p,nodeIds:Array.from(new Set([...p.nodeIds,...i]))}:{...p,nodeIds:p.nodeIds.filter(A=>!s.has(A))})}):!l||i.length===l.nodeIds.length?[...n]:e.filter(p=>l.nodeIds.includes(p.id)&&!s.has(p.id)).some(p=>gg(p.coordinate,a.coordinate)>pg)?Tn({nodes:e,nodeLinks:n.map(p=>p.id===l.id?{...p,nodeIds:p.nodeIds.filter(A=>!s.has(A))}:{...p})}):[...n]},Jn=e=>e.reduce((n,t)=>{const o=t.match(/(\d+)$/),r=o?Number(o[1]):Number.NaN;return Number.isFinite(r)?Math.max(n,r):n},0),$l=({nodeIds:e,closed:n,previousEdgeNumericSuffix:t})=>{const o=e.slice(0,-1).map((r,a)=>({startNodeId:r,endNodeId:e[a+1]}));return n&&e.length>=3&&o.push({startNodeId:e[e.length-1],endNodeId:e[0]}),o.map((r,a)=>({id:`edge-${t+a+1}`,...r}))},fg=({toolType:e,coordinates:n,options:t,linkedNodeGroupIds:o,measurementSequenceRef:r,nodeSequenceRef:a,edgeSequenceRef:i})=>{r.current+=1;const s=`${e}-${r.current}`,l=n.map(y=>(a.current+=1,{id:`node-${a.current}`,coordinate:y})),u=l.map((y,m)=>({id:zl(o==null?void 0:o[m])??y.id,nodeIds:[y.id]})),d=$l({nodeIds:l.map(y=>y.id),closed:!!(t!=null&&t.closed),previousEdgeNumericSuffix:i.current});return i.current+=d.length,{annotationEntry:{id:s,uuid:Ul(),toolType:e,...t,nodeIds:l.map(y=>y.id),edgeIds:d.map(y=>y.id)},nodes:l,linkedNodeGroups:u,edges:d}},bo={INTERACTION:"interaction",MEASUREMENT:"measurement"},ee={SESSION:"session",POINT_QUERY:"pointQuery",ADD_ANNOTATION:"addAnnotation",AUTHORING_VISUALS:"authoringVisuals",KEYBOARD:"keyboard",VISUAL_MODELS:"visualModels",INFO_BOX:"infoBox"},Ei=new Set,Ag=[],Tg=(e,n)=>{const t=`${e}:${n}`;Ei.has(t)||(Ei.add(t),console.warn(`[annotations-runtime] Plugin "${e}" is missing capability implementation "${n}". Using a no-op fallback at registry build time.`))},vg=(e,n)=>{const t=e.descriptor.order-n.descriptor.order;return t!==0?t:e.id.localeCompare(n.id)},Ng=e=>{const n=new Map;return e.forEach(t=>{if(n.get(t.id))throw new Error(`Duplicate annotation tool plugin registration for "${t.id}".`);n.set(t.id,t)}),n},kg=e=>e.reduce((n,t)=>{if(!t.annotationType)return n;const o=n.get(t.annotationType)??[];return n.set(t.annotationType,[...o,t]),n},new Map),bg=e=>{const n=new Map;e.forEach(t=>{var a;const o=((a=t.descriptor.shortcutKey)==null?void 0:a.trim().toLowerCase())??null;if(!o)return;const r=n.get(o);if(r&&r!==t.id)throw new Error(`Duplicate annotation tool shortcut key "${t.descriptor.shortcutKey}" for "${r}" and "${t.id}".`);n.set(o,t.id)})},Ig=(e,n)=>!!(n===ee.SESSION&&e.session||n===ee.POINT_QUERY&&e.pointQuery||n===ee.ADD_ANNOTATION&&e.addAnnotation||n===ee.AUTHORING_VISUALS&&e.authoringVisuals||n===ee.KEYBOARD&&e.keyboard||n===ee.VISUAL_MODELS&&e.visualModels||n===ee.INFO_BOX&&e.infoBox||n!==ee.SESSION&&n!==ee.POINT_QUERY&&n!==ee.ADD_ANNOTATION&&n!==ee.AUTHORING_VISUALS&&n!==ee.KEYBOARD&&n!==ee.VISUAL_MODELS&&n!==ee.INFO_BOX),hg=e=>{if(e.descriptor.id!==e.id)throw new Error(`Plugin "${e.id}" descriptor id "${e.descriptor.id}" must match plugin id.`);if(e.kind==="measurement"&&!e.visualModels)throw new Error(`Measurement plugin "${e.id}" must implement visualModels.build(...).`);if(e.kind==="measurement"&&!e.annotationType)throw new Error(`Measurement plugin "${e.id}" must declare annotationType.`);let n={...e};return(e.capabilities??[]).forEach(t=>{if(!Ig(n,t)){if(Tg(e.id,t),t===ee.SESSION){n={...n,session:{createSession:()=>({toolType:e.id,requestStart:()=>{},requestFinish:()=>!1,discardDraft:()=>{}})}};return}if(t===ee.POINT_QUERY){n={...n,pointQuery:{onPointCreated:()=>{}}};return}if(t===ee.ADD_ANNOTATION){n={...n,addAnnotation:{resolveOptions:()=>{}}};return}if(t===ee.AUTHORING_VISUALS){n={...n,authoringVisuals:{createController:()=>null}};return}if(t===ee.KEYBOARD){n={...n,keyboard:{onKeyDown:()=>!1}};return}if(t===ee.VISUAL_MODELS){n={...n,visualModels:{build:()=>null}};return}t===ee.INFO_BOX&&(n={...n,infoBox:{getSlots:()=>null}})}}),n},Sg=e=>{const t=[...e.map(hg)].sort(vg);bg(t);const o=Ng(t),r=kg(t);return{plugins:t,orderedDescriptors:t.map(a=>a.descriptor),byId:o,getPlugin:a=>o.get(a),assertPlugin:a=>{const i=o.get(a);if(!i)throw new Error(`Missing annotation tool plugin for tool id "${a}".`);return i},getPluginsByAnnotationType:a=>r.get(a)??Ag}},Yl=e=>{var t;const n=e.find(o=>o.id===vn&&o.kind===bo.INTERACTION);return n?n.id:((t=e.find(o=>o.kind===bo.INTERACTION))==null?void 0:t.id)??null},Cg=e=>{var n;return((n=e.getPlugin(vn))==null?void 0:n.id)??Yl(e.plugins)},Wl=e=>!!e.readOnly,Ql=e=>e.annotationRole??(e.externalCollection?st.EXTERNAL:st.AUTHORING),Fo=e=>e.annotationEntries.filter(n=>Ql(n)===st.AUTHORING),Eg=(e,n={})=>{if(n.roles===void 0)return e.annotationEntries;const t=new Set(n.roles);return e.annotationEntries.filter(o=>t.has(Ql(o)))},Og=e=>Fo({annotationEntries:e}).reduce((n,t)=>(n.set(t.toolType,(n.get(t.toolType)??0)+1),n),new Map),Rg=({activeToolType:e,registry:n,defaultToolId:t=vn})=>{if(e){const o=n.getPlugin(e);if(o)return o}return n.getPlugin(t)??null},{AREA_GROUND:Lg,AREA_PLANAR:wg,AREA_VERTICAL:qg,DISTANCE:xg,LABEL:_g,POINT:Pg,POLYLINE:Mg}=q,Dg=new Set([Pg,xg,Mg,Lg,wg,qg,_g]),Go=e=>Dg.has(e),Bg=e=>{if(e.shortLabelSource===Mt.CUSTOM)return null;const n=e.shortLabelCounter;return typeof n=="number"&&Number.isFinite(n)&&n>0?Math.floor(n):null},Kl=e=>{let n=1;for(;e!=null&&e.has(n);)n+=1;return n},Xl=e=>{var t;const n={};for(const o of e){if(!Go(o.toolType))continue;const r=Bg(o);r!==null&&(n[t=o.toolType]??(n[t]=new Set)).add(r)}return n},jo=e=>{const n=Xl(e),t={};for(const[o,r]of Object.entries(n))t[o]=Kl(r);return t},Fg=({annotationEntries:e,toolType:n})=>Go(n)?jo(e)[n]??1:1,Zl=e=>{const n=Xl(e);return e.map(t=>{var a;if(!Go(t.toolType)||(a=t.shortLabel)!=null&&a.trim())return t;const o=n[t.toolType]??new Set;n[t.toolType]=o;const r=Kl(o);return o.add(r),{...t,shortLabel:ll(t.toolType,r),shortLabelSource:Mt.DEFAULT,shortLabelCounter:r}})},Gg=e=>e.uuid?e:{...e,uuid:Ul()},{AREA_GROUND:jg,AREA_PLANAR:Ug,AREA_VERTICAL:Hg,LABEL:zg,POINT:Vg}=q,$g=1,Yg=new Set([jg,Ug,Hg]),Wg=new Set([Vg,zg]),zr=e=>{if(e!==void 0)return e===null||typeof e=="string"||typeof e=="number"||typeof e=="boolean"?e:Array.isArray(e)?e.map(n=>zr(n)).filter(n=>n!==void 0):typeof e=="object"?Object.fromEntries(Object.entries(e).flatMap(([n,t])=>{const o=zr(t);return o===void 0?[]:[[n,o]]})):String(e)},Qg=e=>zr(e)??{},lr=({longitude:e,latitude:n,altitude:t})=>[e,n,t??0],Kg=({toolType:e,coordinates:n})=>{if(n.length===0)return null;if(Yg.has(e)&&n.length>=3){const t=n.map(lr);return{type:"Polygon",coordinates:[[...t,t[0]]]}}return!Wg.has(e)&&n.length>=2?{type:"LineString",coordinates:n.map(lr)}:{type:"Point",coordinates:lr(n[0])}},Oi=e=>{const n=(e??"").trim().toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"");return n.length>0?n:"annotation"},Xg=e=>{var n,t;return{kind:e.toolType,name:((n=e.displayName)==null?void 0:n.trim())||((t=e.shortLabel)==null?void 0:t.trim())||e.id}},Jl=({annotation:e,coordinates:n})=>{const t=Kg({toolType:e.toolType,coordinates:n});return t?{type:"FeatureCollection",features:[{type:"Feature",id:e.id,geometry:t,properties:{exportVersion:$g,annotationId:e.id,annotationKind:e.toolType,annotation:Qg(e),nodes:n.map((r,a)=>({order:a,coordinate:r}))}}]}:null},Zg=({annotations:e})=>{const n=e.flatMap(({annotation:t,coordinates:o})=>{const r=Jl({annotation:t,coordinates:o});return(r==null?void 0:r.features)??[]});return n.length===0?null:{type:"FeatureCollection",features:n}},Ri=(e,n)=>{if(!n||typeof window>"u"||typeof document>"u")return;const t=new Blob([JSON.stringify(n,null,2)],{type:"application/geo+json;charset=utf-8"}),o=window.URL.createObjectURL(t),r=document.createElement("a");r.href=o,r.download=e,document.body.appendChild(r),r.click(),document.body.removeChild(r),window.setTimeout(()=>{window.URL.revokeObjectURL(o)},0)},Bt=e=>{const{nodeIds:n,edgeIds:t,...o}=e;return{...o,nodeIds:[...n],edgeIds:[...t]}},fa=e=>{const n=Bt(e);return delete n.updatedAt,n},Bn=e=>({...e,coordinate:{...e.coordinate}}),Fn=e=>({...e}),Gn=e=>({...e,nodeIds:[...e.nodeIds]}),lt="annotations-runtime-persistence",Uo=1,eu=new Set([1,2]),nu="carma-3d-annotations-geojson",Jg=1,ef=new Set([1,2]),tu="carma-3d-annotation-runtime-feature",ou=1,En=e=>typeof e=="object"&&e!==null,nf=e=>{if(!En(e)||!En(e.properties))return null;const{carmaConf:n}=e.properties;if(!En(n)||!En(n.annotationRuntime))return null;const t=n.annotationRuntime;return t.formatId!==tu||t.formatVersion!==ou||!En(t.annotation)||!Array.isArray(t.nodes)||!Array.isArray(t.linkedNodeGroups)||!Array.isArray(t.edges)?null:{annotation:fa(t.annotation),nodes:t.nodes.map(o=>Bn(o)),linkedNodeGroups:t.linkedNodeGroups.map(o=>Gn(o)),edges:t.edges.map(o=>Fn(o))}},tf=e=>{if(!En(e)||e.type!=="FeatureCollection")return null;const n=e.features;if(!Array.isArray(n))return null;const t=[],o=new Map,r=new Map,a=new Map;for(const s of n){const l=nf(s);if(l){t.push(l.annotation);for(const u of l.nodes)o.set(u.id,u);for(const u of l.linkedNodeGroups)r.set(u.id,u);for(const u of l.edges)a.set(u.id,u)}}if(t.length===0)return null;const i=Zl(t);return{formatId:lt,version:Uo,tables:{annotationEntries:i.map(Bt),nodes:[...o.values()].map(Bn),linkedNodeGroups:Tn({nodes:[...o.values()],nodeLinks:[...r.values()].map(Gn)}),edges:[...a.values()].map(Fn)},settings:{lastActiveToolType:null,elevationReferenceAnnotationId:null,nextShortLabelCounterByToolType:jo(i)}}},ru=e=>{const n=new Map(e.tables.nodes.map(s=>[s.id,s])),t=new Map(e.tables.annotationEntries.map(s=>[s.id,s])),o=new Map(e.tables.edges.map(s=>[s.id,s])),r=new Map;for(const s of e.tables.linkedNodeGroups)for(const l of s.nodeIds){const u=r.get(l)??[];u.push(s),r.set(l,u)}const a=Zg({annotations:e.tables.annotationEntries.map(s=>({annotation:s,coordinates:s.nodeIds.flatMap(l=>{var d;const u=(d=n.get(l))==null?void 0:d.coordinate;return u?[u]:[]})}))});return{type:"FeatureCollection",features:((a==null?void 0:a.features)??[]).map(s=>{var A;const l=typeof s.id=="string"?s.id:typeof((A=s.properties)==null?void 0:A.annotationId)=="string"?s.properties.annotationId:null,u=l?t.get(l):null;if(!u)return s;const d=new Set(u.nodeIds),c=new Set,y=u.nodeIds.flatMap(f=>(r.get(f)??[]).flatMap(T=>c.has(T.id)?[]:(c.add(T.id),[Gn(T)]))),m=s.properties??{},p=En(m.carmaConf)?m.carmaConf:{};return{...s,properties:{...m,carmaConf:{...p,annotationRuntime:{formatId:tu,formatVersion:ou,annotation:Bt(u),nodes:u.nodeIds.flatMap(f=>{const T=n.get(f);return T?[Bn(T)]:[]}),linkedNodeGroups:y,edges:u.edgeIds.flatMap(f=>{const T=o.get(f);return!T||!d.has(T.startNodeId)||!d.has(T.endNodeId)?[]:[Fn(T)]})}}}}}),metadata:{carmaConf:{formatId:nu,formatVersion:Jg,source:"geoportal-cesium-annotations",annotationsRuntimePersistence:{formatId:lt,version:Uo,tables:{annotationEntries:e.tables.annotationEntries.map(Bt),nodes:e.tables.nodes.map(Bn),linkedNodeGroups:e.tables.linkedNodeGroups.map(Gn),edges:e.tables.edges.map(Fn)},settings:{...e.settings,nextShortLabelCounterByToolType:{...e.settings.nextShortLabelCounterByToolType}}}}}}},Aa=e=>{var t,o,r;const n=e;return(n==null?void 0:n.formatId)!==lt||typeof n.version!="number"||!eu.has(n.version)||!n.tables||!Array.isArray(n.tables.annotationEntries)||!Array.isArray(n.tables.nodes)||!Array.isArray(n.tables.linkedNodeGroups)||!Array.isArray(n.tables.edges)?null:{formatId:lt,version:Uo,tables:{annotationEntries:n.tables.annotationEntries.map(a=>fa(a)),nodes:n.tables.nodes.map(a=>Bn(a)),linkedNodeGroups:n.tables.linkedNodeGroups.map(a=>Gn(a)),edges:n.tables.edges.map(a=>Fn(a))},settings:{lastActiveToolType:typeof((t=n.settings)==null?void 0:t.lastActiveToolType)=="string"?n.settings.lastActiveToolType:null,elevationReferenceAnnotationId:typeof((o=n.settings)==null?void 0:o.elevationReferenceAnnotationId)=="string"?n.settings.elevationReferenceAnnotationId:null,nextShortLabelCounterByToolType:(r=n.settings)!=null&&r.nextShortLabelCounterByToolType&&typeof n.settings.nextShortLabelCounterByToolType=="object"?{...n.settings.nextShortLabelCounterByToolType}:{}}}},au=e=>{var r;const n=e;if((n==null?void 0:n.type)!=="FeatureCollection")return null;const t=(r=n.metadata)==null?void 0:r.carmaConf;return((t==null?void 0:t.formatId)===nu&&typeof t.formatVersion=="number"&&ef.has(t.formatVersion)?Aa(t.annotationsRuntimePersistence):null)??tf(e)},Ta=e=>{const n=Fo(e).map(Bt),t=new Set(n.flatMap(i=>i.nodeIds)),o=new Set(n.flatMap(i=>i.edgeIds)),r=e.nodes.filter(i=>t.has(i.id)).map(Bn),a=Tn({nodes:r,nodeLinks:e.linkedNodeGroups.map(Gn).filter(i=>i.nodeIds.some(s=>t.has(s)))});return{formatId:lt,version:Uo,tables:{annotationEntries:n,nodes:r,linkedNodeGroups:a,edges:e.edges.filter(i=>o.has(i.id)).map(Fn)},settings:{lastActiveToolType:e.annotationToolType,elevationReferenceAnnotationId:e.settingsState.elevationReferenceAnnotationId,nextShortLabelCounterByToolType:jo(n)}}},of=({initialToolType:e,initialPointTemporaryMode:n,initialPersistenceState:t,isToolTypeAvailable:o})=>{const r=(t==null?void 0:t.formatId)===lt&&eu.has(t.version)?t:null,a=r==null?void 0:r.tables,i=Zl((a==null?void 0:a.annotationEntries.map(c=>Gg(fa(c))))??[]),s=(r==null?void 0:r.tables.nodes.map(Bn))??[],l=Tn({nodes:s,nodeLinks:(r==null?void 0:r.tables.linkedNodeGroups.map(Gn))??[]}),u=jo(i);return{annotationToolType:(typeof(r==null?void 0:r.settings.lastActiveToolType)=="string"&&((o==null?void 0:o(r.settings.lastActiveToolType))??!0)?r.settings.lastActiveToolType:null)??e,selectionState:{selectedAnnotationIds:[],previousSelectedAnnotationId:null},annotationEntries:i,nodes:s,linkedNodeGroups:l,edges:(a==null?void 0:a.edges.map(Fn))??[],infoBoxState:{activeAnnotationId:null},settingsState:{pointTemporaryMode:n,elevationReferenceAnnotationId:(r==null?void 0:r.settings.elevationReferenceAnnotationId)??null,nextShortLabelCounterByToolType:u}}},rf=e=>{try{const n=localStorage.getItem(e);if(!n)return null;const t=JSON.parse(n);return au(t)??Aa(t)}catch(n){console.warn("Failed to load annotations runtime state from localStorage:",n)}return null},af=(e,n)=>{try{localStorage.setItem(e,JSON.stringify(ru(n)))}catch(t){console.warn("Failed to save annotations runtime state to localStorage:",t)}},Ho=e=>e.selectionState.selectedAnnotationIds[e.selectionState.selectedAnnotationIds.length-1]??null,sf=e=>{const n=new Set(e.selectionState.selectedAnnotationIds);return e.annotationEntries.filter(t=>n.has(t.id)&&!t.locked&&!t.readOnly).map(t=>t.id)},iu=e=>e.annotationEntries.map(n=>n.id),lf=(e,n,t)=>{var i;if(e.length===0)return null;const o=n?e.findIndex(s=>s.id===n):-1,r=t>0?0:e.length-1,a=o<0?r:(o+t+e.length)%e.length;return((i=e[a])==null?void 0:i.id)??null},su=({nodeId:e,nodes:n,linkedNodeGroups:t,annotationEntries:o,selectedAnnotationIds:r=[],preferredMovedNodeIds:a})=>{const i=n.find(p=>p.id===e)??null;if(!i)return{targetNode:null,movedNodeIds:[]};const s=yg(t,e),l=Array.from(new Set((a??[]).filter(p=>s.includes(p)))),u=new Set(r.filter(Boolean)),d=new Set(o.filter(p=>u.has(p.id)).flatMap(p=>p.nodeIds)),c=s.filter(p=>d.has(p)),y=l.length>0?l:c.length>0?c:[...s],m=ga(o);return{targetNode:i,movedNodeIds:y.filter(p=>!m.has(p))}},lu=e=>{const n=new Set(e.annotationEntries.flatMap(t=>t.nodeIds));e.nodes=e.nodes.filter(t=>n.has(t.id)),e.linkedNodeGroups=Tn({nodes:e.nodes,nodeLinks:e.linkedNodeGroups})},uf={updateNodeCoordinateById:(e,n)=>{const{nodeId:t,coordinate:o,selectedAnnotationIds:r=[],movedNodeIds:a,linkToNodeId:i}=n.payload,{targetNode:s,movedNodeIds:l}=su({nodeId:t,nodes:e.nodes,linkedNodeGroups:e.linkedNodeGroups,annotationEntries:e.annotationEntries,selectedAnnotationIds:r,preferredMovedNodeIds:a});if(!s||l.length===0)return;const u=new Set(l),d=ga(e.annotationEntries),c=i&&!d.has(i)?i:null;e.nodes.forEach(y=>{u.has(y.id)&&(y.coordinate=o)}),e.linkedNodeGroups=Vl({nodes:e.nodes,nodeLinks:e.linkedNodeGroups,nodeId:s.id,movedNodeIds:l,linkToNodeId:c})},insertNodeIntoMeasurementEdge:(e,n)=>{const{annotationId:t,startNodeId:o,endNodeId:r,coordinate:a}=n.payload,i=e.annotationEntries.find(k=>k.id===t);if(!i)return;const s=i.nodeIds.findIndex((k,N)=>k===o&&i.nodeIds[N+1]===r),l=i.closed&&i.nodeIds.length>=3&&i.nodeIds[i.nodeIds.length-1]===o&&i.nodeIds[0]===r,u=s>=0?s+1:l?i.nodeIds.length:-1;if(u<0)return;const d=new Map(e.edges.map(k=>[k.id,k])),c=i.edgeIds.findIndex(k=>{const N=d.get(k);return(N==null?void 0:N.startNodeId)===o&&N.endNodeId===r}),y=c>=0?i.edgeIds[c]:null,m=y?d.get(y):void 0;if(!m||c<0)return;const p=`node-${Jn(e.nodes.map(k=>k.id))+1}`,A=`edge-${Jn(e.edges.map(k=>k.id))+1}`;e.nodes.push({id:p,coordinate:a}),e.linkedNodeGroups=Tn({nodes:e.nodes,nodeLinks:[...e.linkedNodeGroups,{id:p,nodeIds:[p]}]}),m.endNodeId=p;const f={id:A,startNodeId:p,endNodeId:r},T=e.edges.findIndex(k=>k.id===y);T>=0?e.edges.splice(T+1,0,f):e.edges.push(f),i.nodeIds=[...i.nodeIds.slice(0,u),p,...i.nodeIds.slice(u)],i.edgeIds=[...i.edgeIds.slice(0,c+1),A,...i.edgeIds.slice(c+1)]},removeNodeFromAnnotation:(e,n)=>{const{annotationId:t,nodeId:o}=n.payload,r=e.annotationEntries.find(l=>l.id===t);if(!(r!=null&&r.nodeIds.includes(o)))return;const a=r.nodeIds.filter(l=>l!==o),i=new Set(r.edgeIds),s=$l({nodeIds:a,closed:!!r.closed,previousEdgeNumericSuffix:Jn(e.edges.map(l=>l.id))});r.nodeIds=a,r.edgeIds=s.map(l=>l.id),e.edges=[...e.edges.filter(l=>!i.has(l.id)),...s],lu(e)}},va=(e,n,t=n[n.length-1]??null)=>{e.selectionState.previousSelectedAnnotationId=Ho(e),e.selectionState.selectedAnnotationIds=n,e.infoBoxState.activeAnnotationId=t},Na=(e,n)=>va(e,n?[n]:[],n),df={setSelectedAnnotationId:(e,n)=>{Na(e,n.payload)},setSelectedAnnotationIds:(e,n)=>{va(e,Array.from(new Set(n.payload.filter(Boolean))))}},Li=(e,n,t)=>{if(!e.annotationEntries.some(a=>n.has(a.id)))return;e.annotationEntries=e.annotationEntries.filter(a=>!n.has(a.id));const o=new Set(e.annotationEntries.flatMap(a=>a.edgeIds));lu(e),e.edges=e.edges.filter(a=>o.has(a.id));const{elevationReferenceAnnotationId:r}=e.settingsState;if(r&&n.has(r)&&(e.settingsState.elevationReferenceAnnotationId=null),t!==void 0){Na(e,t);return}va(e,e.selectionState.selectedAnnotationIds.filter(a=>!n.has(a)))},cf={appendAnnotationEntities:(e,n)=>{const{annotationEntry:t,nodes:o,linkedNodeGroups:r,edges:a,selectAnnotationId:i}=n.payload;e.nodes.push(...o),r.forEach(s=>{const l=e.linkedNodeGroups.find(u=>u.id===s.id);if(!l){e.linkedNodeGroups.push({id:s.id,nodeIds:[...s.nodeIds]});return}l.nodeIds=Array.from(new Set([...l.nodeIds,...s.nodeIds]))}),e.edges.push(...a),e.annotationEntries.push({...t,nodeIds:[...t.nodeIds],edgeIds:[...t.edgeIds]}),e.linkedNodeGroups=Tn({nodes:e.nodes,nodeLinks:e.linkedNodeGroups}),i!==void 0&&Na(e,i)},removeAnnotationById:(e,n)=>{Li(e,new Set([n.payload.annotationId]),n.payload.nextSelectedAnnotationId)},removeAnnotationsByIds:(e,n)=>{Li(e,new Set(n.payload.annotationIds),n.payload.nextSelectedAnnotationId)},updateAnnotationEntryById:(e,n)=>{const{annotationId:t,displayName:o,shortLabel:r,shortLabelSource:a,shortLabelCounter:i,hidden:s,locked:l,annotationRole:u,readOnly:d,labelAppearance:c,elevationDisplayMode:y,distanceAnchorCoordinateSelection:m,distanceTriangleAnchorCoordinateRole:p}=n.payload,A=e.annotationEntries.find(f=>f.id===t);A&&(o!==void 0&&(A.displayName=o),r!==void 0&&(A.shortLabel=r),a!==void 0&&(A.shortLabelSource=a),i!==void 0&&(A.shortLabelCounter=i),s!==void 0&&(A.hidden=s),l!==void 0&&(A.locked=l),u!==void 0&&(A.annotationRole=u),d!==void 0&&(A.readOnly=d),c!==void 0&&(A.labelAppearance={...A.labelAppearance??{},...c}),y!==void 0&&(A.elevationDisplayMode=y),m!==void 0&&(A.distanceAnchorCoordinateSelection=m),p!==void 0&&(A.distanceTriangleAnchorCoordinateRole=p))}},uu=(e={})=>{const{initialToolType:n=vn,initialPointTemporaryMode:t=!1}=e;return{annotationToolType:n,selectionState:{selectedAnnotationIds:[],previousSelectedAnnotationId:null},annotationEntries:[],nodes:[],linkedNodeGroups:[],edges:[],infoBoxState:{activeAnnotationId:null},settingsState:{pointTemporaryMode:t,elevationReferenceAnnotationId:null,nextShortLabelCounterByToolType:{}}}},du=Hm({name:"annotationsRuntime",initialState:uu(),reducers:{setAnnotationToolType:(e,n)=>{e.annotationToolType=n.payload},setPointTemporaryMode:(e,n)=>{e.settingsState.pointTemporaryMode=n.payload},setElevationReferenceAnnotationId:(e,n)=>{e.settingsState.elevationReferenceAnnotationId=n.payload},...df,...cf,...uf}}),{appendAnnotationEntities:cu,removeAnnotationById:mf,removeAnnotationsByIds:ka,removeNodeFromAnnotation:yf,setElevationReferenceAnnotationId:pf,setPointTemporaryMode:gf,insertNodeIntoMeasurementEdge:ff,updateNodeCoordinateById:Af,updateAnnotationEntryById:On,setAnnotationToolType:Tf,setSelectedAnnotationId:et,setSelectedAnnotationIds:ut}=du.actions,vf=e=>Mm({reducer:du.reducer,preloadedState:e}),ba=g.createContext(null),Nf=cg(ba),kf=ng(ba),ne=e=>kf(e),tI=()=>Nf(),bf=({enabled:e=!0,storageKey:n})=>{const t=g.useMemo(()=>!e||typeof window>"u"?null:rf(n),[e,n]),o=g.useCallback(r=>{!e||typeof window>"u"||af(n,r)},[e,n]);return{initialPersistenceState:t,onPersistenceStateChange:e?o:void 0}},mu={scalingMode:aa.SCREEN,worldRadiusMeters:3,targetScreenRadiusCssPx:48,resizeWorldRadiusToScreenTarget:!1,resizeStepFactor:4,quantizeWorldRadius:!1},Ia={KEYBOARD:"keyboard",PROGRAMMATIC:"programmatic",UI:"ui"},If=({annotations:e})=>{if(e.length===0)return!1;if(typeof window>"u")return!0;const n=e.length===1?"Diese Messung wirklich löschen?":`${e.length} Messungen wirklich löschen?`;return window.confirm(n)},hf=({activePlugin:e,activeToolType:n,activeToolSession:t,cancelToolId:o,focusAdjacentAnnotationEntry:r,removeSelectedAnnotations:a,removeEditedNode:i,clearInteractionState:s,requestFinishMeasurement:l,requestActivateTool:u,requestModeChange:d,sessionContext:c,setActiveToolTypeInStore:y})=>{g.useEffect(()=>{const m=p=>{var T;if(Sy(p)){const k=c.getState(),N=iu(k);N.length>0&&(c.dispatch(ut(N)),p.preventDefault(),p.stopPropagation());return}const f=hy(p,{allowRepeat:!0})?Cy(p):null;if(f===Ie.CANCEL_ACTIVE_TOOL&&o!==null&&n!==o){const k=c.getState();t==null||t.discardDraft(),k.annotationEntries.length>0&&y(o),s(),p.preventDefault();return}if(f===Ie.FOCUS_PREVIOUS_NAVIGATION_ITEM){r(-1),p.preventDefault();return}if(f===Ie.FOCUS_NEXT_NAVIGATION_ITEM){r(1),p.preventDefault();return}if((T=e==null?void 0:e.keyboard)!=null&&T.onKeyDown({event:p,activeToolType:n,activeToolSession:t,requestFinishMeasurement:l,requestActivateTool:u,requestModeChange:d,sessionContext:c})){s();return}if((f===Ie.DELETE_SELECTION||f===Ie.UNDO_LAST_POINT)&&c.drafts.get(n).coordinates.length>0){s(),p.preventDefault(),p.stopPropagation();return}if(f===Ie.DELETE_SELECTION||f===Ie.UNDO_LAST_POINT){if(i()){s(),p.preventDefault(),p.stopPropagation();return}if(c.getState().selectionState.selectedAnnotationIds.length>0){a({skipConfirmation:p.shiftKey,source:Ia.KEYBOARD}),p.preventDefault(),p.stopPropagation();return}}f===Ie.FINISH_MEASUREMENT&&l()&&p.preventDefault()};return window.addEventListener("keydown",m),()=>{window.removeEventListener("keydown",m)}},[e,t,n,o,s,r,i,a,l,d,u,c,y])},Jt=(e,n)=>e[n]??null,Sf=(e,n,t)=>{const o=g.useCallback(()=>{const i=Jt(n,e);return i?i.requestFinish():!1},[e,n]),r=g.useCallback(i=>{if(i===e)return;const s=Jt(n,e);s&&s.requestFinish(),t();const l=Jt(n,i);l==null||l.requestStart()},[e,t,n]),a=g.useCallback((i=e)=>{if(i!==e){r(i);return}const s=Jt(n,e);s==null||s.discardDraft(),t(),s==null||s.requestStart()},[e,t,r,n]);return{requestModeChange:r,requestActivateTool:a,requestFinishMeasurement:o}},Cf=14,Ef=18,wi=(e,n)=>n?e.find(t=>t.id===n)??null:null,yu=({engine:e,node:n,screenPosition:t})=>{const o=e.worldToScreen(U(n.coordinate));if(!o)return null;const r=o.x-t.x,a=o.y-t.y;return r*r+a*a},Of=({engine:e,nodes:n,screenPosition:t})=>{if(!t||!V(e)||n.length===0)return null;let r=Cf**2,a=null;for(const i of n){const s=yu({engine:e,node:i,screenPosition:t});s===null||s>r||(r=s,a=i)}return a},pu=({engine:e,nodes:n,linkedNodeGroups:t,coordinate:o,screenPosition:r,forcedSnappedNodeId:a=null,lockedNodeId:i=null,excludedNodeIds:s=[]})=>{if(!V(e)||n.length===0)return{coordinate:o,linkedNodeGroupId:null,snappedNodeId:null};const l=new Set(s.filter(Boolean)),u=l.size===0?n:n.filter(m=>!l.has(m.id));if(u.length===0)return{coordinate:o,linkedNodeGroupId:null,snappedNodeId:null};const d=wi(u,a);if(d)return{coordinate:d.coordinate,linkedNodeGroupId:uo(t,d.id),snappedNodeId:d.id};if(!r)return{coordinate:o,linkedNodeGroupId:null,snappedNodeId:null};const c=wi(u,i);if(c){const m=yu({engine:e,node:c,screenPosition:r});if(m!==null&&m<=Ef**2)return{coordinate:c.coordinate,linkedNodeGroupId:uo(t,c.id),snappedNodeId:c.id}}const y=Of({engine:e,nodes:u,screenPosition:r});return{coordinate:(y==null?void 0:y.coordinate)??o,linkedNodeGroupId:y?uo(t,y.id):null,snappedNodeId:(y==null?void 0:y.id)??null}},Rf=(e,n)=>n?e.find(t=>t.id===n)??null:null,Lf=({engine:e,nodes:n,linkedNodeGroups:t,activeToolType:o,toolSessions:r,getToolPlugin:a,sessionContext:i})=>{const s=r[o]??null,l=a(o),u=g.useRef(null);g.useEffect(()=>{Rf(n,u.current)||(u.current=null)},[n]);const d=g.useCallback((m,p,A=null)=>{const f=pu({engine:e,nodes:n,linkedNodeGroups:t,coordinate:m,screenPosition:p,forcedSnappedNodeId:A,lockedNodeId:u.current});return u.current=f.snappedNodeId,{coordinate:f.coordinate,linkedNodeGroupId:f.linkedNodeGroupId}},[t,n,e]),c=g.useCallback((m,p)=>d(m,p).coordinate,[d]);return{handlePointQueryPointCreated:g.useCallback((m,p,A)=>{var k;const f=d(m,p,(A==null?void 0:A.forcedSnappedNodeId)??null),T=s==null?void 0:s.onNodeCreated;if(T){T(f.coordinate,f.linkedNodeGroupId,{inputModifier:A==null?void 0:A.inputModifier});return}(k=l==null?void 0:l.pointQuery)==null||k.onPointCreated({coordinate:f.coordinate,linkedNodeGroupId:f.linkedNodeGroupId,inputModifier:A==null?void 0:A.inputModifier,activeToolType:o,activeToolSession:s,toolSessions:r,sessionContext:i})},[l,s,o,d,i,r]),resolvePointQueryCoordinate:c,activeToolSession:s}},wf=(e,n)=>e.plugins.reduce((t,o)=>{var a;const r=(a=o.session)==null?void 0:a.createSession(n);return r?{...t,[o.id]:r}:t},{}),qf=e=>{},xf=(e,{enabled:n,onCoordinate:t,onLineFinish:o,onHoverCoordinateChange:r,onHoverSampleChange:a,onScreenPositionChange:i,singleClickDelayMs:s=220,inputModifiers:l})=>{((e==null?void 0:e.hooks.usePointQuery)??qf)({enabled:n,hideCursorWhileEnabled:!0,clickStrategy:o?pi.DELAYED_LINE_FINISH:pi.IMMEDIATE,config:{clickDelayMs:s},inputModifiers:l,onPointCreate:d=>{t==null||t(_n(d.pickedPositionECEF),{x:d.screenPosition.x,y:d.screenPosition.y},{inputModifier:d.inputModifier})},onLineFinish:o,onPointerMove:(d,c,y,m)=>{const p=d?_n(d):null,A={x:c.x,y:c.y};r==null||r(p,A),a==null||a({coordinate:p,screenPosition:A,pointECEF:d??null,surfaceNormalECEF:y??null,...m!=null&&m.inputModifier?{inputModifier:m.inputModifier}:{}})},onScreenPositionChange:i})},wn={pointQuery:{discSmoothingSampleCount:120,discSmoothingWindowMs:500,discSmoothingWeightDecayGamma:3},hoverClearDelayMs:34,infoBoxFlyTo:{minRadiusMeters:80,paddingFactor:1.15},additiveSelectionModifierKey:"Shift"},ha=(e,n)=>e===n||e!=null&&n!==null&&n!==void 0&&e.latitude===n.latitude&&e.longitude===n.longitude&&e.altitude===n.altitude,Sa=(e,n)=>e.length===n.length&&e.every((t,o)=>ha(t,n[o])),_f=({engine:e,hoveredNode:n,coordinate:t,screenPosition:o,pointECEF:r,surfaceNormalECEF:a,inputModifier:i,resolvePointQueryCoordinate:s})=>{const l=(n==null?void 0:n.coordinate)??s(t,o),u=n!==null||!ha(l,t),d=u?U(l):r,c=u&&V(e)&&d?e.worldToScreen(d):null;return{isLockedToSnapPoint:u,pickResult:{coordinate:l,screenPosition:c?{x:c.x,y:c.y}:o,pointECEF:d??r,surfaceNormalECEF:u&&d?Er(d):a,...i?{inputModifier:i}:{}}}},{POINT:eo}=q,Pf=({pointTemporaryMode:e,annotationToolDraftStore:n,addAnnotation:t})=>{const o=g.useRef(e);g.useEffect(()=>{if(o.current&&!e){const r=n.get(eo);r.coordinates.length>0&&(r.coordinates.forEach((a,i)=>{t(eo,[a],void 0,[r.linkedNodeGroupIds[i]??null],eo)}),n.clear(eo))}o.current=e},[t,n,e])},Ze={primitiveId:"measurement-preview-point-ring",scalingMode:aa.SCREEN,targetScreenRadiusCssPx:32,innerHoleRadiusRatio:.33,alpha:.6,materialPreset:Xy.COLOR,smoothingSampleCount:90,smoothingWindowMs:300,smoothingWeightDecayGamma:2};function pt(e,n,t){e.prototype=n.prototype=t,t.constructor=e}function $t(e,n){var t=Object.create(e.prototype);for(var o in n)t[o]=n[o];return t}function Nn(){}var jn=.7,dt=1/jn,Mf=/^#([0-9a-f]{3})$/,Df=/^#([0-9a-f]{6})$/,Bf=/^rgb\(\s*([-+]?\d+)\s*,\s*([-+]?\d+)\s*,\s*([-+]?\d+)\s*\)$/,Ff=/^rgb\(\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*\)$/,Gf=/^rgba\(\s*([-+]?\d+)\s*,\s*([-+]?\d+)\s*,\s*([-+]?\d+)\s*,\s*([-+]?\d+(?:\.\d+)?)\s*\)$/,jf=/^rgba\(\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)\s*\)$/,Uf=/^hsl\(\s*([-+]?\d+(?:\.\d+)?)\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*\)$/,Hf=/^hsla\(\s*([-+]?\d+(?:\.\d+)?)\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)\s*\)$/,qi={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};pt(Nn,Ft,{displayable:function(){return this.rgb().displayable()},toString:function(){return this.rgb()+""}});function Ft(e){var n;return e=(e+"").trim().toLowerCase(),(n=Mf.exec(e))?(n=parseInt(n[1],16),new le(n>>8&15|n>>4&240,n>>4&15|n&240,(n&15)<<4|n&15,1)):(n=Df.exec(e))?xi(parseInt(n[1],16)):(n=Bf.exec(e))?new le(n[1],n[2],n[3],1):(n=Ff.exec(e))?new le(n[1]*255/100,n[2]*255/100,n[3]*255/100,1):(n=Gf.exec(e))?_i(n[1],n[2],n[3],n[4]):(n=jf.exec(e))?_i(n[1]*255/100,n[2]*255/100,n[3]*255/100,n[4]):(n=Uf.exec(e))?Pi(n[1],n[2]/100,n[3]/100,1):(n=Hf.exec(e))?Pi(n[1],n[2]/100,n[3]/100,n[4]):qi.hasOwnProperty(e)?xi(qi[e]):e==="transparent"?new le(NaN,NaN,NaN,0):null}function xi(e){return new le(e>>16&255,e>>8&255,e&255,1)}function _i(e,n,t,o){return o<=0&&(e=n=t=NaN),new le(e,n,t,o)}function Ca(e){return e instanceof Nn||(e=Ft(e)),e?(e=e.rgb(),new le(e.r,e.g,e.b,e.opacity)):new le}function gu(e,n,t,o){return arguments.length===1?Ca(e):new le(e,n,t,o??1)}function le(e,n,t,o){this.r=+e,this.g=+n,this.b=+t,this.opacity=+o}pt(le,gu,$t(Nn,{brighter:function(e){return e=e==null?dt:Math.pow(dt,e),new le(this.r*e,this.g*e,this.b*e,this.opacity)},darker:function(e){return e=e==null?jn:Math.pow(jn,e),new le(this.r*e,this.g*e,this.b*e,this.opacity)},rgb:function(){return this},displayable:function(){return 0<=this.r&&this.r<=255&&0<=this.g&&this.g<=255&&0<=this.b&&this.b<=255&&0<=this.opacity&&this.opacity<=1},toString:function(){var e=this.opacity;return e=isNaN(e)?1:Math.max(0,Math.min(1,e)),(e===1?"rgb(":"rgba(")+Math.max(0,Math.min(255,Math.round(this.r)||0))+", "+Math.max(0,Math.min(255,Math.round(this.g)||0))+", "+Math.max(0,Math.min(255,Math.round(this.b)||0))+(e===1?")":", "+e+")")}}));function Pi(e,n,t,o){return o<=0?e=n=t=NaN:t<=0||t>=1?e=n=NaN:n<=0&&(e=NaN),new Ve(e,n,t,o)}function zf(e){if(e instanceof Ve)return new Ve(e.h,e.s,e.l,e.opacity);if(e instanceof Nn||(e=Ft(e)),!e)return new Ve;if(e instanceof Ve)return e;e=e.rgb();var n=e.r/255,t=e.g/255,o=e.b/255,r=Math.min(n,t,o),a=Math.max(n,t,o),i=NaN,s=a-r,l=(a+r)/2;return s?(n===a?i=(t-o)/s+(t<o)*6:t===a?i=(o-n)/s+2:i=(n-t)/s+4,s/=l<.5?a+r:2-a-r,i*=60):s=l>0&&l<1?0:i,new Ve(i,s,l,e.opacity)}function Vf(e,n,t,o){return arguments.length===1?zf(e):new Ve(e,n,t,o??1)}function Ve(e,n,t,o){this.h=+e,this.s=+n,this.l=+t,this.opacity=+o}pt(Ve,Vf,$t(Nn,{brighter:function(e){return e=e==null?dt:Math.pow(dt,e),new Ve(this.h,this.s,this.l*e,this.opacity)},darker:function(e){return e=e==null?jn:Math.pow(jn,e),new Ve(this.h,this.s,this.l*e,this.opacity)},rgb:function(){var e=this.h%360+(this.h<0)*360,n=isNaN(e)||isNaN(this.s)?0:this.s,t=this.l,o=t+(t<.5?t:1-t)*n,r=2*t-o;return new le(ur(e>=240?e-240:e+120,r,o),ur(e,r,o),ur(e<120?e+240:e-120,r,o),this.opacity)},displayable:function(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1}}));function ur(e,n,t){return(e<60?n+(t-n)*e/60:e<180?t:e<240?n+(t-n)*(240-e)/60:n)*255}var fu=Math.PI/180,Au=180/Math.PI,Io=18,Tu=.95047,vu=1,Nu=1.08883,ku=4/29,nt=6/29,bu=3*nt*nt,$f=nt*nt*nt;function Ea(e){if(e instanceof nn)return new nn(e.l,e.a,e.b,e.opacity);if(e instanceof gn){var n=e.h*fu;return new nn(e.l,Math.cos(n)*e.c,Math.sin(n)*e.c,e.opacity)}e instanceof le||(e=Ca(e));var t=yr(e.r),o=yr(e.g),r=yr(e.b),a=dr((.4124564*t+.3575761*o+.1804375*r)/Tu),i=dr((.2126729*t+.7151522*o+.072175*r)/vu),s=dr((.0193339*t+.119192*o+.9503041*r)/Nu);return new nn(116*i-16,500*(a-i),200*(i-s),e.opacity)}function Yf(e,n,t,o){return arguments.length===1?Ea(e):new nn(e,n,t,o??1)}function nn(e,n,t,o){this.l=+e,this.a=+n,this.b=+t,this.opacity=+o}pt(nn,Yf,$t(Nn,{brighter:function(e){return new nn(this.l+Io*(e??1),this.a,this.b,this.opacity)},darker:function(e){return new nn(this.l-Io*(e??1),this.a,this.b,this.opacity)},rgb:function(){var e=(this.l+16)/116,n=isNaN(this.a)?e:e+this.a/500,t=isNaN(this.b)?e:e-this.b/200;return e=vu*cr(e),n=Tu*cr(n),t=Nu*cr(t),new le(mr(3.2404542*n-1.5371385*e-.4985314*t),mr(-.969266*n+1.8760108*e+.041556*t),mr(.0556434*n-.2040259*e+1.0572252*t),this.opacity)}}));function dr(e){return e>$f?Math.pow(e,1/3):e/bu+ku}function cr(e){return e>nt?e*e*e:bu*(e-ku)}function mr(e){return 255*(e<=.0031308?12.92*e:1.055*Math.pow(e,1/2.4)-.055)}function yr(e){return(e/=255)<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)}function Wf(e){if(e instanceof gn)return new gn(e.h,e.c,e.l,e.opacity);e instanceof nn||(e=Ea(e));var n=Math.atan2(e.b,e.a)*Au;return new gn(n<0?n+360:n,Math.sqrt(e.a*e.a+e.b*e.b),e.l,e.opacity)}function Qf(e,n,t,o){return arguments.length===1?Wf(e):new gn(e,n,t,o??1)}function gn(e,n,t,o){this.h=+e,this.c=+n,this.l=+t,this.opacity=+o}pt(gn,Qf,$t(Nn,{brighter:function(e){return new gn(this.h,this.c,this.l+Io*(e??1),this.opacity)},darker:function(e){return new gn(this.h,this.c,this.l-Io*(e??1),this.opacity)},rgb:function(){return Ea(this).rgb()}}));var Iu=-.14861,Oa=1.78277,Ra=-.29227,zo=-.90649,Gt=1.97294,Mi=Gt*zo,Di=Gt*Oa,Bi=Oa*Ra-zo*Iu;function Kf(e){if(e instanceof qn)return new qn(e.h,e.s,e.l,e.opacity);e instanceof le||(e=Ca(e));var n=e.r/255,t=e.g/255,o=e.b/255,r=(Bi*o+Mi*n-Di*t)/(Bi+Mi-Di),a=o-r,i=(Gt*(t-r)-Ra*a)/zo,s=Math.sqrt(i*i+a*a)/(Gt*r*(1-r)),l=s?Math.atan2(i,a)*Au-120:NaN;return new qn(l<0?l+360:l,s,r,e.opacity)}function Xf(e,n,t,o){return arguments.length===1?Kf(e):new qn(e,n,t,o??1)}function qn(e,n,t,o){this.h=+e,this.s=+n,this.l=+t,this.opacity=+o}pt(qn,Xf,$t(Nn,{brighter:function(e){return e=e==null?dt:Math.pow(dt,e),new qn(this.h,this.s,this.l*e,this.opacity)},darker:function(e){return e=e==null?jn:Math.pow(jn,e),new qn(this.h,this.s,this.l*e,this.opacity)},rgb:function(){var e=isNaN(this.h)?0:(this.h+120)*fu,n=+this.l,t=isNaN(this.s)?0:this.s*n*(1-n),o=Math.cos(e),r=Math.sin(e);return new le(255*(n+t*(Iu*o+Oa*r)),255*(n+t*(Ra*o+zo*r)),255*(n+t*(Gt*o)),this.opacity)}}));const jt={ALWAYS:"always",SELECTED:"selected",OFF:"off"},ho={ALWAYS:"always",SELECTED:"selected"},Vr=Object.freeze({strokeWidthPx:1.5,overlayDashPattern:"8 8",meterMarkers:jt.ALWAYS,components:ho.ALWAYS}),oI=(e,n)=>e===jt.ALWAYS||e===jt.SELECTED&&n,rI=e=>e!==jt.OFF,aI=(e,n)=>e===ho.ALWAYS||e===ho.SELECTED&&n,Zf=e=>Object.values(jt).includes(e),Jf=e=>Object.values(ho).includes(e),eA=(e,n)=>typeof e=="number"&&Number.isFinite(e)&&e>0?e:n,nA=(e,n)=>{const t=e==null?void 0:e.trim();return t||n},iI=(e,n=Vr)=>({strokeWidthPx:eA(e==null?void 0:e.strokeWidthPx,n.strokeWidthPx),overlayDashPattern:nA(e==null?void 0:e.overlayDashPattern,n.overlayDashPattern),meterMarkers:Zf(e==null?void 0:e.meterMarkers)?e.meterMarkers:n.meterMarkers,components:Jf(e==null?void 0:e.components)?e.components:n.components}),Fi=Object.freeze({previewAlpha:.9,surfaceAlpha:.92}),X={colors:{neutral:lo(1),accent:lo(1),preview:lo(Fi.previewAlpha),surface:Cd(Fi.surfaceAlpha),transparent:"transparent",components:{direct:or(fe.DIRECT),vertical:or(fe.VERTICAL),horizontal:or(fe.HORIZONTAL)},componentLabelAccents:{direct:rr(fe.DIRECT),vertical:rr(fe.VERTICAL),horizontal:rr(fe.HORIZONTAL)}},sizes:{edgeStrokeWidth:Vr.strokeWidthPx,pointPixelSize:10,pointOutlineWidth:1},patterns:{edgeDashPattern:Vr.overlayDashPattern}},sI=Object.freeze({edge:Object.freeze({stroke:X.colors.accent,strokeWidth:X.sizes.edgeStrokeWidth,overlayDashPattern:X.patterns.edgeDashPattern}),point:Object.freeze({pixelSize:X.sizes.pointPixelSize,fill:X.colors.transparent,outline:X.colors.surface,outlineWidth:X.sizes.pointOutlineWidth})}),hu=Object.freeze({edge:Object.freeze({stroke:X.colors.neutral}),point:Object.freeze({outline:X.colors.neutral})}),tA=(e,n={})=>({...e,...n}),oA=(e,n={})=>({...e,...n}),lI=e=>tA(e,hu.edge),uI=e=>oA(e,hu.point),Le=Object.freeze({lineStrokeWidthPx:X.sizes.edgeStrokeWidth,layerZIndex:"1550",lineLabelOffsetPx:9,lineLabelMinLengthPx:44,geometryEpsilonMeters:.01,directLineColor:X.colors.components.direct,verticalLineColor:X.colors.components.vertical,horizontalLineColor:X.colors.components.horizontal,draftChainColor:X.colors.preview}),rA=e=>e.createLineCollection(),aA=(e,n,t,o)=>{const r=(o==null?void 0:o.width)??Le.lineStrokeWidthPx,a=(o==null?void 0:o.ruler)===!0,i=(o==null?void 0:o.occludedDashed)===!0,s=(o==null?void 0:o.halo)!==!1;return{line:e.addLine({id:n,positions:[],color:t,width:r,ruler:a,occludedDashed:i,halo:s,visible:!1}),colorCss:t,width:r,ruler:a,occludedDashed:i,halo:s}},iA=(e,n)=>{e.colorCss!==n&&(e.line.setStyle({color:n,width:e.width,ruler:e.ruler,occludedDashed:e.occludedDashed,halo:e.halo}),e.colorCss=n)},sA=e=>{e.line.setVisible(!1)},lA=(e,n)=>{e.line.setPositions(n),e.line.setVisible(n.length>=2)},uA=.1,dA=(e,n)=>{const t=Ft(e)??Ft("white");if(!t)return`rgba(255,255,255,${n})`;const{r:o,g:r,b:a}=t.rgb();return`rgba(${[o,r,a].map(Math.round).join(",")},${n})`},cA=(e,n)=>{let t=null,o=null,r=!1;const a=()=>{o&&(sA(o),r=!1)};return{apply:i=>{if(!i){a();return}t??(t=rA(e)),o??(o=aA(t,n,i.colorCss)),iA(o,i.colorCss);const s=Math.max(i.lineLengthMeters,uA)/2;lA(o,[new w(0,0,-s).applyMatrix4(i.modelMatrix),new w(0,0,s).applyMatrix4(i.modelMatrix)]),r=!0},clear:a,hide:()=>o==null?void 0:o.line.setVisible(!1),restore:()=>o==null?void 0:o.line.setVisible(r),destroy:()=>{t==null||t.destroy(),t=null,o=null}}},mA=e=>{let n=[];const t=new w;return{hasTrail:()=>n.length>1,push:o=>Oy({samples:n,normal:o,maxSampleCount:e().maxSampleCount,timestampMs:performance.now()}),average:o=>{const{maxSampleAgeMs:r,weightDecayGamma:a}=e();return Ry({samples:n,fallbackNormal:o,result:t,epsilonSquared:Tl,maxSampleAgeMs:r,weightDecayGamma:a,nowMs:performance.now()})},clear:()=>{n=[]}}},$r=(e,n)=>Tc(e)?e:n,dI=(e,n)=>Math.max(0,$r(e,n)),Su={TRUE_SAMPLE:"true-sample",CAMERA_PLANE_REPROJECT:"camera-plane-reproject"},yA=e=>e===Su.CAMERA_PLANE_REPROJECT,pA=.1,gA=.999,fA=e=>Ue(e,0,gA),AA=({engine:e,pointECEF:n,discNormalECEF:t,radiusMeters:o,scalingMode:r,targetScreenRadiusCssPx:a})=>{const i=Math.max(o,pA);return r==="world"?i:Ky(s=>e.worldToScreen(s),n,t,i,a)},TA=.1,vA=({engine:e,stepFactor:n,targetScreenRadiusCssPx:t,quantize:o,fallbackRadiusMeters:r})=>{let a=null,i=0;const s=new w;return l=>{if(a!==null&&!Ms(i,e.getScreenPixelsPerMeterAt(s),n))return a;const u=e.getScreenPixelsPerMeterAt(l);if(!Number.isFinite(u)||u<=0)return a??r;const d=t/u;return a=Math.max(o?_s(d*2)/2:d,TA),i=u,s.copy(l),a}},NA=({engine:e,screenPosition:n,tangentPlane:t})=>{if(!t)return null;const o=e.getPickRay(n);if(!o)return null;const r=new As().setFromNormalAndCoplanarPoint(t.normalECEF.clone().normalize(),t.pointECEF),a=Os(new Ts(o.origin,o.direction),r);return a&&o.direction.dot(new w().subVectors(a,o.origin))>0?a:null},kA="white",bA=e=>{if(e)try{e()}catch{}},IA=(e,{radius:n,placementMode:t=Su.CAMERA_PLANE_REPROJECT,color:o,opacity:r,materialPreset:a,innerHoleRadiusRatio:i=Ze.innerHoleRadiusRatio,scalingMode:s=Ze.scalingMode,targetScreenRadiusCssPx:l=Ze.targetScreenRadiusCssPx,resizeWorldRadiusToScreenTarget:u=!1,discResizeStepFactor:d=4,quantizeStepWorldRadius:c=!1,showNormalLine:y=!1,tangentDiscVisualizerTrailSampleCount:m=Ze.smoothingSampleCount,tangentDiscVisualizerSmoothingWindowMs:p=Ze.smoothingWindowMs,tangentDiscVisualizerWeightDecayGamma:A=Ze.smoothingWeightDecayGamma})=>{if(!e||!V(e))return{setEnabled:()=>{},setVisualStyle:()=>{},setPreview:()=>{},clearPreview:()=>{},destroy:()=>{}};const f=e,T=Math.max(n,.1),k=new na,N=$r(r,Ze.alpha),v=B=>({colorCss:(B==null?void 0:B.color)??o??kA,opacity:$r(B==null?void 0:B.opacity,N)}),b=B=>dA(B.colorCss,B.opacity);let h=!1,S=v(),I=b(S),E=null;const O=cA(f,"measurement-preview-point-ring-normal"),R=mA(()=>({maxSampleCount:m,maxSampleAgeMs:p,weightDecayGamma:A}));let L=null,P=!1,x=null;const M=vA({engine:f,stepFactor:d,targetScreenRadiusCssPx:l,quantize:c,fallbackRadiusMeters:T});let F=null,G=null,H=null,j=!1,J=0,W=null;const Z=()=>{E==null||E.destroy(),E=null,O.clear(),R.clear(),W=null,P=!1},Te=()=>{if(!G)return null;if(!yA(t)||j||!H)return G;const B=f.pointer.getScreenPosition();return B?NA({engine:f,screenPosition:B,tangentPlane:{pointECEF:G,normalECEF:H}})??G:G},ve=()=>x?(E??(E=f.createRing({id:Ze.primitiveId,radius:1,innerRadius:fA(i),color:S.colorCss,opacity:S.opacity,materialPreset:a??Ze.materialPreset,segments:20,modelMatrix:k})),E):(Z(),null),Q=()=>{P||!R.hasTrail()||f.isDestroyed()||(P=!0,f.requestRender())},ae=({requestSmoothingRender:B=!0}={})=>{if(!h){Z();return}const _=Te();if(!_){Z();return}x=(x??new w).copy(_);const $=Wy(_,H??F,F),z=s===aa.WORLD&&u?M(_):AA({engine:f,pointECEF:_,discNormalECEF:$,radiusMeters:T,scalingMode:s,targetScreenRadiusCssPx:l}),ke=E??ve();if(!ke)return;W!==J&&(W=J,R.push($));const me=R.average($);B&&Q(),ke.setModelMatrix(Qy(_,me,z,k)),O.apply(y?{modelMatrix:k,lineLengthMeters:z*2,colorCss:I}:null)},Ne=()=>{x=null,F=null,G=null,H=null,j=!1,J+=1,Z()},He=f.pointer.register();return L=f.subscribePreRender(()=>{P=!1,ae()}),{setEnabled:B=>{h!==B&&(h=B,h?ae({requestSmoothingRender:!1}):Z(),f.requestRender())},setVisualStyle:(B,_)=>{const $=v(B),z=b($);I!==z&&(S=$,I=z,Z(),ae({requestSmoothingRender:!1}),(_==null?void 0:_.requestRender)!==!1&&f.requestRender())},setPreview:(B,_)=>{if(!(B!=null&&B.pointECEF)){Ne(),(_==null?void 0:_.requestRender)!==!1&&f.requestRender();return}G=(G??new w).copy(B.pointECEF),x=(x??new w).copy(B.pointECEF),H=B.surfaceNormalECEF?(H??new w).copy(B.surfaceNormalECEF):null,F=B.surfaceNormalECEF?(F??new w).copy(B.surfaceNormalECEF):null,j=B.lockToPreviewPoint===!0,J+=1,ae({requestSmoothingRender:!1}),(_==null?void 0:_.requestRender)!==!1&&f.requestRender()},clearPreview:()=>{Ne(),f.requestRender()},destroy:()=>{He(),bA(L),L=null,Z(),O.destroy()}}},hA=({engine:e,referenceObjectSizing:n,pointQueryEnabled:t,refs:{indicatorControllerRef:o,latestPickResultRef:r,pointQueryEnabledRef:a},resolveHoveredPointQueryNodeRef:i})=>{g.useEffect(()=>{var l;(l=o.current)==null||l.destroy();const s=IA(e,{radius:n.worldRadiusMeters,scalingMode:n.scalingMode,targetScreenRadiusCssPx:n.targetScreenRadiusCssPx,resizeWorldRadiusToScreenTarget:n.resizeWorldRadiusToScreenTarget,discResizeStepFactor:n.resizeStepFactor,quantizeStepWorldRadius:n.quantizeWorldRadius,showNormalLine:!0,tangentDiscVisualizerTrailSampleCount:wn.pointQuery.discSmoothingSampleCount,tangentDiscVisualizerSmoothingWindowMs:wn.pointQuery.discSmoothingWindowMs,tangentDiscVisualizerWeightDecayGamma:wn.pointQuery.discSmoothingWeightDecayGamma});return o.current=s,s==null||s.setEnabled(a.current),a.current&&r.current?s==null||s.setPreview({pointECEF:r.current.pointECEF,surfaceNormalECEF:r.current.surfaceNormalECEF,lockToPreviewPoint:i.current()!==null}):s==null||s.clearPreview(),()=>{var u;(u=o.current)==null||u.destroy(),o.current=null}},[n.quantizeWorldRadius,n.resizeWorldRadiusToScreenTarget,n.resizeStepFactor,n.scalingMode,n.targetScreenRadiusCssPx,n.worldRadiusMeters,e]),g.useEffect(()=>{var s;(s=o.current)==null||s.setEnabled(t)},[t])},SA=({engine:e,activePlugin:n,context:t,pointQueryEnabled:o,refs:{authoringControllerRef:r,latestPickResultRef:a,pointQueryEnabledRef:i}})=>{const{annotationsStore:s,drafts:l,labelOverlay:u,formatOptions:d,lineLabelOptions:c}=t;g.useEffect(()=>{var m,p;(m=r.current)==null||m.destroy();const y=((p=n==null?void 0:n.authoringVisuals)==null?void 0:p.createController({engine:e,annotationsStore:s,drafts:l,labelOverlay:u,requestRender:()=>{V(e)&&e.requestRender()},formatOptions:d,lineLabelOptions:c}))??null;return r.current=y,y==null||y.setEnabled(i.current),y==null||y.setPointQueryPickResult(i.current?a.current:null),()=>{var A;(A=r.current)==null||A.destroy(),r.current=null}},[n,s,l,e,d,u,c]),g.useEffect(()=>{var y,m;(y=r.current)==null||y.setEnabled(o),o||(m=r.current)==null||m.setPointQueryPickResult(null)},[o])},Yr={requestModeChange:()=>{},requestActivateTool:()=>{},requestFinishMeasurement:()=>!1,requestPointAt:()=>!1},cI="#00d9ff",CA="#ef4444",pr={requestRender:!1},EA=({engine:e,registry:n,annotationsStore:t,annotationToolDraftStore:o,setActiveToolTypeInStore:r,focusAdjacentAnnotationEntry:a,removeSelectedAnnotations:i,removeEditedNode:s,addAnnotation:l,bindApi:u,bindPreviewSnapTargetNodeClick:d,activeEditedNodeId:c,getHoveredPointQueryNodeId:y,setHoveredPointQueryNodeId:m,onPointQueryPickResultChange:p,formatOptions:A,lineLabelOptions:f,referenceObjectSizing:T,requestLabelText:k})=>{var ye,an;const N=Ro(),v=ne(D=>D.annotationToolType),b=ne(D=>D.nodes),h=ne(D=>D.linkedNodeGroups),S=ne(D=>D.settingsState.pointTemporaryMode),I=g.useRef(null),E=g.useRef(null),O=g.useRef(null),R=g.useRef(null),L=g.useCallback((D,pe)=>{var ge;R.current=D,(ge=E.current)==null||ge.setPointQueryPickResult(D,pe),p(D)},[p]),P=g.useMemo(()=>new Map(b.map(D=>[D.id,D])),[b]),x=g.useCallback(()=>{I.current!==null&&(window.clearTimeout(I.current),I.current=null)},[]),M=g.useCallback(()=>{var D,pe;(D=O.current)==null||D.setVisualStyle(null),(pe=O.current)==null||pe.clearPreview()},[]),F=g.useCallback(()=>m(null),[m]),G=g.useCallback(()=>{x(),L(null),M(),F()},[F,M,x,L]),H=g.useCallback(()=>{const D=y();return D?P.get(D)??null:null},[y,P]),j=g.useMemo(()=>({getState:t.getState,dispatch:t.dispatch,setActiveToolType:r,drafts:o,requestLabelText:k,addAnnotation:l}),[l,o,t.dispatch,t.getState,k,r]),J=g.useMemo(()=>wf(n,j),[n,j]),W=n.getPlugin(v)??null;g.useMemo(()=>Yl(n.plugins),[n.plugins]);const Z=g.useMemo(()=>Cg(n),[n]);Pf({pointTemporaryMode:S,annotationToolDraftStore:o,addAnnotation:l});const{requestModeChange:Te,requestActivateTool:ve,requestFinishMeasurement:Q}=Sf(v,J,G),ae=g.useCallback(()=>{const D=Q();return D&&G(),D},[Q,G]),{handlePointQueryPointCreated:Ne,resolvePointQueryCoordinate:He,activeToolSession:B}=Lf({engine:e,nodes:b,linkedNodeGroups:h,activeToolType:v,toolSessions:J,getToolPlugin:D=>n.getPlugin(D)??null,sessionContext:j}),_=g.useCallback((D,pe,ge)=>{Ne(D,pe,{inputModifier:ge==null?void 0:ge.inputModifier}),G()},[Ne,G]),$=g.useRef(()=>!1);$.current=D=>{if(!ke.current)return!1;const pe=V(e)?e.worldToScreen(U(D)):null;return _(D,pe??void 0),!0},g.useEffect(()=>(u({requestModeChange:Te,requestActivateTool:ve,requestFinishMeasurement:ae,requestPointAt:D=>$.current(D)}),()=>{u(Yr)}),[u,ae,Te,ve]);const z=!!((B!=null&&B.onNodeCreated||(ye=W==null?void 0:W.pointQuery)!=null&&ye.onPointCreated)&&!c),ke=g.useRef(z);ke.current=z;const me=g.useRef(H);me.current=H;const Y=g.useCallback(D=>{if(!z)return!1;const pe=b.find(ge=>ge.id===D)??null;return pe?(Ne(pe.coordinate,void 0,{forcedSnappedNodeId:D}),G(),!0):!1},[Ne,b,z,G]);g.useEffect(()=>d(Y)??void 0,[d,Y]);const re={indicatorControllerRef:O,authoringControllerRef:E,latestPickResultRef:R,pointQueryEnabledRef:ke};return hA({engine:e,referenceObjectSizing:T,pointQueryEnabled:z,refs:re,resolveHoveredPointQueryNodeRef:me}),SA({engine:e,activePlugin:W,context:{annotationsStore:t,drafts:o,labelOverlay:N,formatOptions:A,lineLabelOptions:f},pointQueryEnabled:z,refs:re}),g.useEffect(()=>{z||F()},[F,z]),xf(e,{enabled:z,inputModifiers:(an=W==null?void 0:W.pointQuery)==null?void 0:an.inputModifiers,onCoordinate:_,onLineFinish:B!=null&&B.finishesOnLoopClosure?()=>{ae()}:void 0,onHoverSampleChange:({coordinate:D,screenPosition:pe,pointECEF:ge,surfaceNormalECEF:kd,inputModifier:bd})=>{var _a,Yt,Pa,Wt,Ma,Da;if(!z||!ge||!D){x(),I.current=window.setTimeout(()=>{I.current=null,L(null),M()},wn.hoverClearDelayMs);return}x();const{pickResult:Yo,isLockedToSnapPoint:Id}=_f({engine:e,hoveredNode:H(),coordinate:D,screenPosition:pe,pointECEF:ge,surfaceNormalECEF:kd,inputModifier:bd,resolvePointQueryCoordinate:He});L(Yo,pr),(_a=O.current)==null||_a.setPreview({pointECEF:Yo.pointECEF,surfaceNormalECEF:Yo.surfaceNormalECEF,lockToPreviewPoint:Id},pr);const hd=((Pa=(Yt=E.current)==null?void 0:Yt.isPointQueryPickResultAcceptable)==null?void 0:Pa.call(Yt))??!0,xa=(Ma=(Wt=E.current)==null?void 0:Wt.getPointQueryVisualStyle)==null?void 0:Ma.call(Wt);(Da=O.current)==null||Da.setVisualStyle(xa!==void 0?xa:hd?null:{color:CA},pr)}}),g.useEffect(()=>{var D;z||(x(),L(null),(D=E.current)==null||D.setEnabled(!1),M())},[M,x,z,L]),g.useEffect(()=>()=>{x(),L(null)},[x,L]),hf({activePlugin:W,activeToolSession:B,activeToolType:v,cancelToolId:Z,clearInteractionState:G,focusAdjacentAnnotationEntry:a,removeEditedNode:s,removeSelectedAnnotations:i,requestFinishMeasurement:ae,requestModeChange:Te,requestActivateTool:ve,sessionContext:j,setActiveToolTypeInStore:r}),null},OA=({registry:e,setActiveToolType:n})=>{const t=ne(o=>o.annotationToolType);return g.useEffect(()=>{var r;if(e.getPlugin(t))return;const o=(r=e.orderedDescriptors[0])==null?void 0:r.id;o&&n(o)},[t,e,n]),null},Cu=e=>{const n=new Map;return{set:(t,o)=>{n.set(t,o),e()},get:t=>n.get(t),delete:t=>{n.delete(t)&&e()},clear:()=>{n.size!==0&&(n.clear(),e())},forEach:t=>n.forEach(t),get size(){return n.size}}},Gi=my(),Un=Object.freeze({style:Object.freeze({DARK_ON_BRIGHT:"dark-on-bright",BRIGHT_ON_DARK:"bright-on-dark"}),label:Object.freeze({textColor:Gi}),selection:Object.freeze({highlightPalette:Object.freeze({backgroundColor:ii("background"),hoverBackgroundColor:ii("hoverBackground"),textColor:Gi,glowColor:lo(1),glowRadiusPx:5,preserveFillOnSelection:!0})}),lineLabel:Object.freeze({backgroundStyle:Object.freeze({SOFT_RECT_FADE:"soft-rect-fade",TEXT_ECHO_DARKEN:"text-echo-darken"})})}),RA=Sn.fontSizePx.pointLabel,LA=e=>`${e/RA}rem`,tt=Object.freeze({fontFamily:Sn.fontFamily,rootFontSizeRem:"1rem",supportFontSizeRem:LA(Sn.fontSizePx.supportText),headingFontSizeRem:"1rem",lineLabelFontWeight:Sn.fontWeight.medium,badgeFontWeight:Sn.fontWeight.medium,headingFontWeight:Sn.fontWeight.semibold,sectionTitleFontWeight:Sn.fontWeight.semibold}),Eu={NONE:"none",MOVE_ON_LINE:"move-on-line"},Oe=Object.freeze({appearance:Object.freeze({themeStyle:Un.style.BRIGHT_ON_DARK}),text:Object.freeze({fontFamily:tt.fontFamily,fontWeight:tt.lineLabelFontWeight}),background:Object.freeze({style:Un.lineLabel.backgroundStyle.TEXT_ECHO_DARKEN}),surface:Object.freeze({}),layout:Object.freeze({shortEdgeOffsetPx:-2}),collision:Object.freeze({allowEarlyRemoval:!0,resolutionStrategy:Eu.MOVE_ON_LINE,anchorSlideStepRatio:.1,maxAnchorSlideDeltaRatio:.3})}),Ou=Object.freeze({verticalFlippedBaselineOffsetPx:0,verticalBaselineAngleEpsilonRad:1e-9,sideHysteresisPx:1.5}),Vo=e=>{var n,t;return{appearance:{...Oe.appearance,...e==null?void 0:e.appearance},text:{...Oe.text,...e==null?void 0:e.text,echo:((n=e==null?void 0:e.text)==null?void 0:n.echo)===void 0&&Oe.text.echo===void 0?void 0:{...Oe.text.echo,...(t=e==null?void 0:e.text)==null?void 0:t.echo}},background:{...Oe.background,...e==null?void 0:e.background},surface:{...Oe.surface,...e==null?void 0:e.surface},layout:{...Oe.layout,...e==null?void 0:e.layout},collision:{...Oe.collision,...e==null?void 0:e.collision}}},wA=e=>e.surface.blendMode??(e.appearance.themeStyle===Un.style.DARK_ON_BRIGHT?"lighten":"darken"),Ye={RIGHTMOST_SCREEN_SPACE:"rightmost-screen-space",LEFTMOST_SCREEN_SPACE:"leftmost-screen-space"},St={START_COORDINATE:"start-coordinate",END_COORDINATE:"end-coordinate"},Ru={POINT_LABEL:"point-label",LINE_BLEND:"line-blend"},Lu={INSIDE:"inside",OUTSIDE:"outside"},Ut={GROUND:"ground",COPLANAR:"coplanar"},Qn={MIN:1,MAX:1400,LOG_SCALE:64},wu=e=>{if(!Number.isFinite(e)||e<0)return Qn.MIN;const n=Math.log2(Math.max(1,e)+1)*Qn.LOG_SCALE;return Ue(Math.round(Qn.MAX-n),Qn.MIN,Qn.MAX)},qu=Object.freeze({reenterMarginPx:2,candidateSamples:10}),qA=1e-9,kt=(e,n)=>({x:e,y:n}),xA=(e,n,t,o,r=0)=>{const a=n/2+r,i=t/2+r,s=[kt(e.x-a,e.y-i),kt(e.x+a,e.y-i),kt(e.x+a,e.y+i),kt(e.x-a,e.y+i)];return s.every(l=>ia(o,l))&&o.every((l,u)=>s.every((d,c)=>!Oc(l,o[(u+1)%o.length],d,s[(c+1)%4],qA)))},_A=e=>{const n=e.map(l=>l.x),t=e.map(l=>l.y),[o,r,a,i]=[Math.min(...n),Math.max(...n),Math.min(...t),Math.max(...t)],s=qu.candidateSamples;return Array.from({length:(s-1)**2},(l,u)=>kt(o+(r-o)*(u%(s-1)+1)/s,a+(i-a)*(Math.floor(u/(s-1))+1)/s))},PA=({polygon:e,width:n,height:t,previous:o})=>{var c,y;const r={fits:!1,position:null,weights:null};if(!e||e.length<3)return r;const a=ly(e),i=(m,p=0)=>!!m&&xA(m,n,t,e,p);if(o!=null&&o.fits){const m=((c=o.weights)==null?void 0:c.length)===e.length?$c(o.weights,e):a;if(i(m))return{fits:!0,position:m,weights:o.weights}}const s=o!=null&&o.fits?0:qu.reenterMarginPx;if(a&&i(a,s))return{fits:!0,position:a,weights:null};const l=a??e[0],u=(y=zc(e))==null?void 0:y.center,d=[...u?[u]:[],..._A(e)].filter(m=>i(m,s)).sort((m,p)=>Math.hypot(m.x-l.x,m.y-l.y)-Math.hypot(p.x-l.x,p.y-l.y))[0];return d?{fits:!0,position:d,weights:Vc(d,e)}:r},ji="0.5",MA=e=>({width:(typeof e=="string"?e:String(e??"")).length*8.5,height:18}),DA=e=>{const n=e.firstElementChild;if(!n||n.offsetWidth<=0)return null;const t=getComputedStyle(n),o=n.offsetWidth-parseFloat(t.paddingLeft)-parseFloat(t.paddingRight),r=n.offsetHeight-parseFloat(t.paddingTop)-parseFloat(t.paddingBottom);return o>0&&r>0?{width:o,height:r}:null},BA=({state:e,lineLabelOptions:n,surfaceBlendMode:t})=>[Ru.LINE_BLEND,Is(e),n.appearance.themeStyle,n.background.style,n.text.fontFamily,n.text.fontWeight,t??""].join(":"),FA=({elementDiv:e,state:n})=>!n.screenPosition||n.visible===!1?!1:(e.style.left=`${n.screenPosition.x}px`,e.style.top=`${n.screenPosition.y}px`,e.style.transform="translate(-50%, -50%)",e.style.zIndex=`${n.zIndex??0}`,e.style.opacity=n.isOccluded?"0.75":"1",!0),GA=e=>e.coordinateCandidates&&e.coordinateCandidates.length>0?e.coordinateCandidates:[{coordinate:e.coordinate,nodeId:e.nodeId}],jA=(e,n)=>{const t=e.worldToScreen(U(n.coordinate));return t===null?null:{candidate:n,x:t.x,y:t.y}},UA=({engine:e,label:n})=>{var s;const t=GA(n),o=t[0]??{coordinate:n.coordinate,nodeId:n.nodeId};if(!V(e)||!n.coordinateSelection||t.length<=1)return o;const r=t.flatMap(l=>{const u=jA(e,l);return u?[u]:[]});if(r.length===0)return o;const a=n.coordinateSelection===Ye.LEFTMOST_SCREEN_SPACE;return((s=r.sort((l,u)=>a?l.x-u.x:u.x-l.x)[0])==null?void 0:s.candidate)??o},HA=(e,n)=>{const t=e.nodeId?n.get(e.nodeId):void 0;return t?_n(t):e.coordinate},xn=Object.freeze({layoutConfig:vc(void 0),markerPixelSize:10,markerOutlineWidth:X.sizes.pointOutlineWidth,stemColor:X.colors.surface,activeMoveGizmoLabelZIndex:Qn.MAX+1}),Wr=()=>({screenPosition:null,isInViewport:!1,isHidden:!0,isOccluded:!1,hiddenByLayout:!0,angleRad:0,distance:xn.layoutConfig.stemDistance,attach:"center",zIndex:0}),gr=(e,n)=>`${e}-${n}`,zA=({label:e,overlayState:n,areaLabelSurfaceBlendMode:t})=>{const o=e.markerPixelSize??xn.markerPixelSize,r=e.markerOutlineWidth??xn.markerOutlineWidth,a=n.isHidden||n.hiddenByLayout;return{pointId:e.id,content:e.content,badgeContent:e.badgeContent,selected:e.selected,hideLabelAndStem:e.hideLabelAndStem,hideMarker:e.hideMarker??!1,markerSize:o,markerStrokeWidth:r,stemStartDistance:e.stemStartDistance??(e.hideMarker?0:o/2+r/2),markerBackgroundColor:e.markerBackgroundColor,markerTextColor:e.markerTextColor,lineColor:e.lineColor??xn.stemColor,labelStyle:e.labelStyle,collapse:e.collapse,textBackgroundColor:e.textBackgroundColor,textColor:e.textColor,selectedBackgroundColor:e.selectedBackgroundColor,selectedTextColor:e.selectedTextColor,selectedGlowColor:e.selectedGlowColor,selectedGlowRadiusPx:e.selectedGlowRadiusPx,preserveFillOnSelection:e.preserveFillOnSelection,hoverBackgroundColor:e.hoverBackgroundColor,textShadow:e.textShadow,fontSize:e.fontSize,fontFamily:e.fontFamily,fontWeight:e.fontWeight,mixBlendMode:e.mixBlendMode??(e.anchorKind===Rs.AREA_CENTROID?t:void 0),onClick:e.onClick,onDoubleClick:e.onDoubleClick,onHoverChange:e.onHoverChange,onLongPress:e.onLongPress,markerOnlyPointerEvents:e.markerOnlyPointerEvents,longPressDurationMs:e.longPressDurationMs,longPressOnlyOnMarker:!!e.onLongPress&&!!e.hideLabelAndStem,renderHiddenMarkerInteractionTarget:!!(e.onLongPress&&e.markerOnlyPointerEvents===!0),screenPosition:a?null:n.screenPosition,angleRad:n.angleRad,distance:n.distance,attach:n.attach,isOccluded:n.isOccluded,visible:!a,zIndex:n.zIndex}},fr=Object.freeze({viewportPaddingHorizontal:12,viewportPaddingVertical:8,occlusionToleranceMeters:1}),VA=()=>({screenPosition:null,isInViewport:!1,isHidden:!0,isOccluded:!1}),$A=e=>(e==null?void 0:e.getFrameKey())??null,xu=e=>(e==null?void 0:e.captureProjectionSnapshot())??null,_u=Zy,Pu=({engine:e,coordinate:n,shouldTestVisibility:t=!0,shouldTestOcclusion:o=!0,viewportPaddingHorizontal:r=fr.viewportPaddingHorizontal,viewportPaddingVertical:a=fr.viewportPaddingVertical,occlusionToleranceMeters:i=fr.occlusionToleranceMeters})=>V(e)?e.projectPoint(U(n),{shouldTestVisibility:t,shouldTestOcclusion:o,viewportPaddingHorizontal:r,viewportPaddingVertical:a,occlusionToleranceMeters:i}):VA(),YA={placements:{},hiddenByLayout:new Set,collapsedToCompact:new Set},WA=new w,Ar=(e,n="")=>typeof e=="string"||typeof e=="number"?String(e):n,QA=({engine:e,labels:n,areaLabelSizeById:t,areaLabelFitByKey:o})=>{const r=new Map;return n.forEach(a=>{var u;if(((u=a.areaFit)==null?void 0:u.role)!==Lu.INSIDE)return;const i=[];for(const d of a.areaFit.outline){const c=e.worldToScreen(U(d));if(!c)break;i.push({x:c.x,y:c.y})}const s=t.get(a.id)??MA(a.content),l=PA({polygon:i.length===a.areaFit.outline.length?i:null,width:s.width,height:s.height,previous:o.get(a.areaFit.key)});r.set(a.areaFit.key,l),o.set(a.areaFit.key,l)}),r},KA=(e,n,t)=>{if(!e.areaFit)return n;const o=t.get(e.areaFit.key);return e.areaFit.role===Lu.INSIDE?o!=null&&o.fits&&o.position?{...n,screenPosition:o.position}:{...n,isHidden:!0}:o!=null&&o.fits?{...n,isHidden:!0}:n},XA=(e,n,t)=>({id:e.id,anchor:t,anchorKind:e.anchorKind,text:Ar(e.content),compactText:Ar(e.badgeContent,Ar(e.content)),index:n,...e.preferredAttach!==void 0?{lockPreferredPlacement:!0,preferredAttach:e.preferredAttach}:{},...e.selected?{layoutPriority:Number.MAX_SAFE_INTEGER,lockPreferredPlacement:!0}:{}}),ZA=({engine:e,labels:n,liveAnchors:t,isInPreviewNodeLink:o,previousStatesById:r,isCameraMoving:a,areaLabelSizeById:i,areaLabelFitByKey:s})=>{const l=new Map;if(!V(e))return l;const u=v=>v.hideLabelAndStem!==!0&&(o==null?void 0:o(v.nodeId))===!0,d=a&&e.capabilities.occlusionPerFrame!==!0||t.size>0,c=!d&&n.some(u),y=e.getCameraPitchRad(),m=e.getCameraPositionECEF(WA),p=QA({engine:e,labels:n,areaLabelSizeById:i,areaLabelFitByKey:s}),A=[],f=new Map,T=new Map,k=new Set;n.forEach((v,b)=>{var L;const h=u(v);h&&k.add(v.id);const S=HA(UA({engine:e,label:v}),t),I=Pu({engine:e,coordinate:S,shouldTestOcclusion:!d&&(v.areaFit!==void 0||Nc({anchorKind:v.anchorKind,occlusionMode:v.occlusionMode}))}),E=d?{...I,isOccluded:((L=r.get(v.id))==null?void 0:L.isOccluded)??!1}:I,O=KA(v,E,p),R=m?m.distanceTo(U(S)):Number.NaN;f.set(v.id,O),T.set(v.id,h?xn.activeMoveGizmoLabelZIndex:wu(R)),!(!O.screenPosition||O.isHidden||v.hideLabelAndStem||h||c&&r.has(v.id))&&A.push(XA(v,b,O.screenPosition))});const N=A.length>0?kc({points:A,viewportWidth:Math.max(1,e.canvas.clientWidth),viewportHeight:Math.max(1,e.canvas.clientHeight),cameraPitch:typeof y=="number"?y:0,config:xn.layoutConfig}):YA;return n.forEach(v=>{const b=r.get(v.id),h=k.has(v.id),S=N.placements[v.id],I=h?b:c?b??S:S,E=v.hideLabelAndStem||h?!1:c?(b==null?void 0:b.hiddenByLayout)??N.hiddenByLayout.has(v.id):N.hiddenByLayout.has(v.id);l.set(v.id,{...f.get(v.id)??Wr(),hiddenByLayout:E,angleRad:(I==null?void 0:I.angleRad)??(b==null?void 0:b.angleRad)??0,distance:(I==null?void 0:I.distance)??(b==null?void 0:b.distance)??xn.layoutConfig.stemDistance,attach:(I==null?void 0:I.attach)??(b==null?void 0:b.attach)??"center",zIndex:T.get(v.id)??0})}),l},no=Object.freeze({paddingBlockEx:.25,paddingInlineEx:.65,backdropInsetBlockEx:-.35,backdropInsetInlineEx:-.75}),JA=Object.freeze({[Un.style.BRIGHT_ON_DARK]:"15, 23, 42",[Un.style.DARK_ON_BRIGHT]:"255, 255, 255"}),Mu=e=>({...e!=null&&e.fontSize?{"--carma-annotation-text-overlay-font-size":e.fontSize}:{},...(e==null?void 0:e.fontWeight)!==void 0?{"--carma-annotation-text-overlay-font-weight":String(e.fontWeight)}:{},...e!=null&&e.letterSpacing?{"--carma-annotation-text-overlay-letter-spacing":e.letterSpacing}:{},...typeof(e==null?void 0:e.textEchoBlurPx)=="number"?{"--carma-annotation-text-overlay-text-echo-blur-px":`${e.textEchoBlurPx}px`}:{},...e!=null&&e.textEchoShadow?{"--carma-annotation-text-overlay-text-echo-shadow":e.textEchoShadow}:{}}),eT=(e,n)=>{Object.entries(Mu(n)).forEach(([t,o])=>e.style.setProperty(t,o))},In=(e,n,t,{unit:o="",min:r,max:a}={})=>{typeof t!="number"||!Number.isFinite(t)||e.style.setProperty(n,`${Ue(t,r??-1/0,a??1/0)}${o}`)},to=(e,n)=>typeof e=="number"&&Number.isFinite(e)?e:n,nT=({element:e,backdrop:n,surface:t,accentColor:o,visualOptions:r=Oe})=>{var d,c,y,m,p;const{text:a,background:i,surface:s}=r,l=(A,f)=>{f!=null&&f.trim()&&e.style.setProperty(A,f)};e.style.setProperty("--carma-annotation-text-overlay-font-family",a.fontFamily),e.style.setProperty("--carma-annotation-text-overlay-font-weight",String(a.fontWeight)),o&&e.style.setProperty("--carma-annotation-text-overlay-glow-color",o),e.dataset.annotationThemeStyle=r.appearance.themeStyle,e.dataset.annotationTextOverlayBackgroundStyle=i.style,typeof i.surfaceAlpha=="number"&&Number.isFinite(i.surfaceAlpha)&&!((d=i.color)!=null&&d.trim())&&e.style.setProperty("--carma-annotation-text-overlay-backdrop-background",`rgba(${JA[r.appearance.themeStyle]}, ${Ue(i.surfaceAlpha,0,1)})`);const u=i.showBackdrop!==!1;n.style.display=u?"block":"none",t.style.display=u?"block":"none",l("--carma-annotation-text-overlay-text-color",a.color),l("--carma-annotation-text-overlay-text-blend-mode",a.blendMode),l("--carma-annotation-text-overlay-backdrop-background",i.color),l("--carma-annotation-text-overlay-backdrop-blend-mode",i.blendMode),l("--carma-annotation-text-overlay-surface-blend-mode",s.blendMode),l("--carma-annotation-text-overlay-text-echo-color",(c=a.echo)==null?void 0:c.color),l("--carma-annotation-text-overlay-text-echo-blend-mode",(y=a.echo)==null?void 0:y.blendMode),In(e,"--carma-annotation-text-overlay-text-echo-blur-px",(m=a.echo)==null?void 0:m.blurPx,{unit:"px",min:0}),In(e,"--carma-annotation-text-overlay-text-echo-opacity",(p=a.echo)==null?void 0:p.opacity,{min:0,max:1}),In(e,"--carma-annotation-text-overlay-surface-blur-px",i.blurPx,{unit:"px",min:0}),In(e,"--carma-annotation-text-overlay-surface-brightness-pct",i.brightnessPct,{unit:"%",min:0}),In(e,"--carma-annotation-text-overlay-surface-saturate-pct",i.saturatePct,{unit:"%",min:0}),In(e,"--carma-annotation-text-overlay-backdrop-radius",i.radiusEx,{unit:"ex",min:0}),In(e,"--carma-annotation-text-overlay-surface-edge-blur-px",i.edgeBlurPx,{unit:"px",min:0}),(typeof s.paddingBlockEx=="number"||typeof s.paddingInlineEx=="number")&&(e.style.setProperty("--carma-annotation-text-overlay-padding-block",`${Math.max(to(s.paddingBlockEx,no.paddingBlockEx),0)}ex`),e.style.setProperty("--carma-annotation-text-overlay-padding-inline",`${Math.max(to(s.paddingInlineEx,no.paddingInlineEx),0)}ex`)),(typeof i.insetBlockEx=="number"||typeof i.insetInlineEx=="number")&&e.style.setProperty("--carma-annotation-text-overlay-backdrop-inset",`${to(i.insetBlockEx,no.backdropInsetBlockEx)}ex ${to(i.insetInlineEx,no.backdropInsetInlineEx)}ex`)},$e=Object.freeze({root:"carma-annotation-text-overlay",backdrop:"carma-annotation-text-overlay__backdrop",surface:"carma-annotation-text-overlay__surface",textEcho:"carma-annotation-text-overlay__text-echo",text:"carma-annotation-text-overlay__text"}),tT='[data-annotation-text-overlay-text-echo="true"]',oT='[data-annotation-text-overlay-text="foreground"]',rT=Object.freeze({fontSize:"17px",letterSpacing:"5%",fontWeight:800,textEchoBlurPx:4,textEchoShadow:"0 0 2px rgba(2, 6, 23, 0.42), 0 0 6px rgba(2, 6, 23, 0.3)"}),At=e=>{const n=document.createElement("div");return n.className=e,n},aT=({accentColor:e,visualOptions:n,styleOptions:t})=>{const o=At($e.root),r=At($e.backdrop),a=At($e.surface),i=At($e.textEcho),s=At($e.text);return i.dataset.annotationTextOverlayTextEcho="true",s.dataset.annotationTextOverlayText="foreground",nT({element:o,backdrop:r,surface:a,accentColor:e,visualOptions:n}),eT(o,t),o.append(r,a,i,s),o},iT=(e,n)=>{[oT,tT].forEach(t=>{const o=e.querySelector(t);o&&o.textContent!==n&&(o.textContent=n)})},sT=e=>typeof e=="string"||typeof e=="number"?String(e):"",lT=({textColor:e,fontSize:n,styleOptions:t,visualOptions:o,surfaceBlendMode:r,hasInteraction:a})=>{const i=(t==null?void 0:t.fontSize)===void 0?n:void 0;return{pointerEvents:a?"auto":"none",cursor:a?"pointer":"default","--carma-annotation-text-overlay-font-family":o.text.fontFamily,"--carma-annotation-text-overlay-font-weight":String(o.text.fontWeight),...i?{"--carma-annotation-text-overlay-font-size":i}:{},...Mu(t),...e?{"--carma-annotation-text-overlay-text-color":e}:{},...r?{"--carma-annotation-text-overlay-backdrop-blend-mode":r,"--carma-annotation-text-overlay-surface-blend-mode":r}:{}}},Du=({content:e,selected:n,textColor:t,fontSize:o,styleOptions:r,visualOptions:a=Oe,surfaceBlendMode:i,onClick:s,onDoubleClick:l,onLongPress:u,longPressDurationMs:d=320})=>{const c=g.useRef(null),y=g.useRef(!1),m=sT(e),p=!!(s||l||u),A=g.useCallback(()=>{c.current!==null&&(window.clearTimeout(c.current),c.current=null)},[]),f=g.useCallback(k=>{if(y.current){y.current=!1,k.preventDefault(),k.stopPropagation();return}s==null||s()},[s]),T=g.useCallback(()=>{u&&(A(),y.current=!1,c.current=window.setTimeout(()=>{c.current=null,y.current=!0,u()},d))},[A,d,u]);return g.useEffect(()=>A,[A]),C.jsxs("div",{className:$e.root,"data-annotation-theme-style":a.appearance.themeStyle,"data-annotation-text-overlay-background-style":a.background.style,"data-selected":n?"true":void 0,style:lT({textColor:t,fontSize:o,styleOptions:r,visualOptions:a,surfaceBlendMode:i,hasInteraction:p}),onClick:s?f:void 0,onDoubleClick:l,onPointerDown:u?T:void 0,onPointerUp:u?A:void 0,onPointerLeave:u?A:void 0,onPointerCancel:u?A:void 0,children:[C.jsx("div",{className:$e.backdrop}),C.jsx("div",{className:$e.surface}),C.jsx("div",{className:$e.textEcho,"data-annotation-text-overlay-text-echo":"true",children:m}),C.jsx("div",{className:$e.text,"data-annotation-text-overlay-text":"foreground",children:m})]})};Du.__docgenInfo={description:"",methods:[],displayName:"TextOverlay",props:{content:{required:!0,tsType:{name:"ReactNode"},description:""},selected:{required:!1,tsType:{name:"boolean"},description:""},textColor:{required:!1,tsType:{name:"string"},description:""},fontSize:{required:!1,tsType:{name:"string"},description:""},styleOptions:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
})`,computed:!0}},surfaceBlendMode:{required:!1,tsType:{name:'CSSProperties["mixBlendMode"]',raw:'CSSProperties["mixBlendMode"]'},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onDoubleClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onLongPress:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},longPressDurationMs:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"320",computed:!1}}}};const Bu=({engine:e,liveAnchors:n,updatePositions:t,computeStates:o,createEmptyState:r})=>{const a=g.useRef({frameKey:null,sceneSnapshot:null,statesById:new Map}),i=g.useRef(!1),s=g.useRef(!1),l=g.useCallback((c=!1)=>{a.current={frameKey:null,sceneSnapshot:null,statesById:c?new Map:a.current.statesById}},[]);g.useEffect(()=>{if(!V(e)){i.current=!1;return}const c=e.subscribeCameraMove({onMoveStart:()=>{i.current=!0,l()},onMoveEnd:()=>{i.current=!1,l(),t(),e.requestRender()}});return()=>{i.current=!1,c()}},[e,l,t]);const u=g.useCallback(c=>{const y=$A(e);if(a.current.frameKey!==y){const m=xu(e),p=n.size>0,A=s.current&&!p;s.current=p;const f=p||A||!_u(a.current.sceneSnapshot,m);a.current={frameKey:y,sceneSnapshot:m,statesById:f?o({previousStatesById:a.current.statesById,isCameraMoving:i.current}):a.current.statesById}}return a.current.statesById.get(c)??r()},[o,r,e,n]),d=g.useCallback(c=>a.current.statesById.get(c),[]);return{resolveState:u,readCachedState:d,invalidate:l}},uT=e=>e.stem.isConnected&&e.stemLine.isConnected&&e.labelRoot.isConnected&&e.pointLabelRoot.isConnected,dT=(e,n,t,o,r="runtime-point-label",a=Oe)=>{const{setLabelOverlayElement:i,removeLabelOverlayElement:s,updatePositions:l}=Ro(),u=g.useRef(n),d=g.useRef(new Set),c=g.useRef(new Map),y=g.useRef(new Map),m=g.useRef(new Map),p=g.useCallback(({previousStatesById:v,isCameraMoving:b})=>ZA({engine:e,labels:u.current,liveAnchors:t,isInPreviewNodeLink:o,previousStatesById:v,isCameraMoving:b,areaLabelSizeById:m.current,areaLabelFitByKey:y.current}),[e,o,t]),{resolveState:A,readCachedState:f,invalidate:T}=Bu({engine:e,liveAnchors:t,updatePositions:l,computeStates:p,createEmptyState:Wr});g.useEffect(()=>{u.current=n,T(),l(),e==null||e.requestRender()},[e,T,o,n,l]);const k=g.useMemo(()=>n.filter(v=>!v.hideLabelAndStem||v.markerOnlyPointerEvents===!0&&(!!v.onClick||!!v.onHoverChange||!!v.onLongPress)),[n]),N=g.useCallback((v,b)=>{const h=c.current.get(v);if(h&&uT(h))return h;const S=Jm(b);return S?(c.current.set(v,S),S):null},[]);g.useEffect(()=>{let v=!1;const b=new Set;k.forEach(h=>{var x;const S=h.renderStyle===Ru.LINE_BLEND,I=h.mixBlendMode??wA(a),E=M=>zA({label:h,overlayState:M,areaLabelSurfaceBlendMode:I}),O=E(f(h.id)??Wr()),R=S?BA({state:O,lineLabelOptions:a,surfaceBlendMode:I}):Is(O);b.add(h.id);const L=M=>{const F=E(A(h.id));if(S){const j=FA({elementDiv:M,state:F});if(h.areaFit){j&&(M.style.opacity=F.isOccluded?ji:"1");const J=DA(M);J&&m.current.set(h.id,J)}return j}const G=N(h.id,M);if(!G)return!1;const H=ey({elementDiv:M,domRefs:G,state:F});return h.areaFit&&F.isOccluded&&(G.pointLabelRoot.style.opacity=ji),H},P=S?C.jsx(Du,{content:O.content,selected:O.selected,textColor:O.textColor,fontSize:O.fontSize,styleOptions:rT,visualOptions:a,surfaceBlendMode:I,onClick:O.onClick,onDoubleClick:O.onDoubleClick,onLongPress:O.onLongPress,longPressDurationMs:O.longPressDurationMs}):mc(O);d.current.has(h.id)||(v=!0,c.current.delete(h.id)),i({id:gr(r,h.id),contentKey:R,content:P,zIndex:((x=f(h.id))==null?void 0:x.zIndex)??0,updatePosition:L})}),d.current.forEach(h=>{b.has(h)||(v=!0,c.current.delete(h),s(gr(r,h)))}),d.current=b,l(),v&&(e==null||e.requestRender())},[i,e,k,r,a,f,s,A,N,l]),g.useEffect(()=>()=>{d.current.forEach(v=>{s(gr(r,v))}),d.current.clear(),c.current.clear()},[r,s])},cT=()=>({screenPosition:null,isInViewport:!1,isHidden:!0,isOccluded:!1}),mT=Object.freeze({longPressDurationMs:320}),Tr=(e,n)=>`${e}-${n}`,yT=e=>[e.id,e.pixelSize,e.fill,e.outline,e.outlineWidth,`${e.longPressDurationMs??""}`,Ko(e.onClick),Ko(e.onHoverChange),Ko(e.onLongPress)].join(":"),Fu=({interactive:e,onClick:n,onHoverChange:t,onLongPress:o,longPressDurationMs:r=mT.longPressDurationMs,markerStyle:a})=>{const[i,s]=g.useState(!1),l=g.useRef(void 0),u=g.useRef(!1),d=g.useCallback(()=>{l.current!==void 0&&(window.clearTimeout(l.current),l.current=void 0)},[]),c=g.useCallback(A=>{if(A.stopPropagation(),A.button!==0||!o){d();return}u.current=!1,d(),l.current=window.setTimeout(()=>{u.current=!0,o()},r)},[d,r,o]),y=g.useCallback(A=>{if(A.stopPropagation(),u.current){u.current=!1;return}n==null||n()},[n]),m=g.useCallback(()=>{s(!0),t==null||t(!0)},[t]),p=g.useCallback(()=>{d(),s(!1),t==null||t(!1)},[d,t]);return g.useEffect(()=>d,[d]),C.jsx("div",{"data-runtime-point-marker-shell":"true",style:{position:"relative",width:"0px",height:"0px",overflow:"visible",pointerEvents:"none"},children:C.jsx("div",{"data-runtime-point-marker-circle":"true",style:{position:"absolute",left:"0px",top:"0px",transform:i?`translate(-50%, -50%) scale(${ta.hover.scale})`:"translate(-50%, -50%)",borderRadius:"999px",boxSizing:"border-box",pointerEvents:e?"auto":"none",cursor:e?"pointer":"default",transition:hs(),boxShadow:i?Ss():"none",filter:i?Cs():"none",...a},onClick:e?y:void 0,onMouseDown:e?c:void 0,onMouseUp:e?d:void 0,onMouseEnter:e?m:void 0,onMouseLeave:e?p:void 0})})},pT=(e,n,t,o="runtime-point-marker")=>{const{setLabelOverlayElement:r,removeLabelOverlayElement:a,updatePositions:i}=Ro(),s=g.useRef(n),l=g.useRef(new Set),u=g.useCallback(({previousStatesById:y,isCameraMoving:m})=>{const p=new Map,A=m&&(e==null?void 0:e.capabilities.occlusionPerFrame)!==!0||t.size>0;return s.current.forEach(f=>{var N;const T=f.nodeId?t.get(f.nodeId):void 0,k=Pu({engine:e,coordinate:T?_n(T):f.coordinate,shouldTestOcclusion:!A});p.set(f.id,A?{...k,isOccluded:((N=y.get(f.id))==null?void 0:N.isOccluded)??!1}:k)}),p},[e,t]),{resolveState:d,invalidate:c}=Bu({engine:e,liveAnchors:t,updatePositions:i,computeStates:u,createEmptyState:cT});g.useEffect(()=>{s.current=n,c(!0),i(),e==null||e.requestRender()},[n,e,c,i]),g.useEffect(()=>{const y=new Set;n.forEach(m=>{const p=Tr(o,m.id);y.add(m.id);const A={id:p,zIndex:Es.zIndex.pointMarker,contentKey:yT(m),content:C.jsx(Fu,{interactive:!!(m.onClick||m.onHoverChange||m.onLongPress),onClick:m.onClick,onHoverChange:m.onHoverChange,onLongPress:m.onLongPress,longPressDurationMs:m.longPressDurationMs}),updatePosition:f=>{const T=d(m.id);if(!T.screenPosition||T.isHidden)return!1;let k=T.screenPosition;const N=m.nodeId?t.get(m.nodeId):void 0;if(N&&V(e)){const b=e.worldToScreen(N);b!==null&&(k={x:b.x,y:b.y})}f.style.left=`${k.x}px`,f.style.top=`${k.y}px`,f.style.transform="none";const v=f.querySelector('[data-runtime-point-marker-circle="true"]');return v?(v.style.width=`${m.pixelSize}px`,v.style.height=`${m.pixelSize}px`,v.style.background=m.fill,v.style.border=`${m.outlineWidth}px ${T.isOccluded?"dotted":"solid"} ${m.outline}`,!0):!1}};r(A)}),l.current.forEach(m=>{y.has(m)||a(Tr(o,m))}),l.current=y,i(),e==null||e.requestRender()},[r,e,t,o,n,a,d,i]),g.useEffect(()=>()=>{l.current.forEach(y=>{a(Tr(o,y))}),l.current.clear()},[o,a])};Fu.__docgenInfo={description:"",methods:[],displayName:"PointMarkerOverlayShell",props:{interactive:{required:!0,tsType:{name:"boolean"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onHoverChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(hovered: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"hovered"}],return:{name:"void"}}},description:""},onLongPress:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},longPressDurationMs:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"pointMarkerVisualizerDefaults.longPressDurationMs",computed:!0}},markerStyle:{required:!1,tsType:{name:"CSSProperties"},description:""}}};const $o=(e,n)=>{Object.assign(e.style,n)},La=(e,n,t=ce.LABEL)=>{const o=Pl(e,t);if(!o)return null;const r=document.createElement("div");return r.id=n,r.dataset.annotationOverlayLayer="true",$o(r,{position:"absolute",inset:"0",overflow:"hidden",pointerEvents:"none",userSelect:"none",webkitUserSelect:"none",zIndex:"auto"}),o.appendChild(r),r},Gu=(e,n)=>Object.fromEntries(Object.entries(n).map(([t,o])=>[t,o?La(e,o,t):null])),Ht=e=>{e==null||e.remove()},So=({x:e,y:n})=>({x:e,y:n}),mI=(e,n)=>{const t=e.worldToScreen(n);return t?So(t):null},gT=Object.freeze({direct:{labelOffsetPx:Le.lineLabelOffsetPx},vertical:{labelOffsetPx:Le.lineLabelOffsetPx,labelFlippedBaselineOffsetPx:Ou.verticalFlippedBaselineOffsetPx,labelRotationMode:yc.CLOCKWISE},horizontal:{labelOffsetPx:Le.lineLabelOffsetPx}}),fT=({kind:e,outsideReferencePoint:n,anchorRatio:t})=>({...gT[e],anchorRatio:t===void 0?void 0:oa(t),getLabelOutsideReferencePoint:n?()=>So(n):void 0}),AT=({x:e,y:n,angleRad:t,anchor:o})=>`translate(${Math.round(e)}px, ${Math.round(n)}px) ${o==="left"?"translate(0%, -50%)":o==="right"?"translate(-100%, -50%)":"translate(-50%, -50%)"} rotate(${t}rad)`,TT=({start:e,end:n,kind:t,outsideReferencePoint:o,shortEdgeOffsetPx:r=Oe.layout.shortEdgeOffsetPx,useShortEdgeRules:a=!0,previousShouldFlip:i=!1,anchorRatio:s})=>{const l=pc({svgLine:{start:So(e),end:So(n)},options:fT({kind:t,outsideReferencePoint:o,anchorRatio:s}),previousShouldFlip:i,sideSwitchThresholdPx:Ou.sideHysteresisPx});if(!l)return null;if(a&&l.lineLengthPx<Le.lineLabelMinLengthPx){const u=l.normalX>=0;return{x:l.midX+l.normalX*r,y:l.midY+l.normalY*r,angleRad:0,anchor:u?"left":"right",anchorRatio:l.anchorRatio,isShortEdge:!0,shouldFlip:l.shouldFlip,normalX:l.normalX,normalY:l.normalY}}return{x:l.textX,y:l.textY,angleRad:l.angleRad,anchor:"center",anchorRatio:l.anchorRatio,isShortEdge:!1,shouldFlip:l.shouldFlip,normalX:l.normalX,normalY:l.normalY}},vT="carma-annotation-overlay-line-label",NT="carma-annotation-overlay-line-label__frame",Ui=e=>{const n=document.createElement("div");return n.className=e,n},kT=e=>e.dataset.annotationOverlayLineLabelKind==="vertical"||e.dataset.annotationOverlayLineLabelKind==="horizontal"?e.dataset.annotationOverlayLineLabelKind:"direct",bT=e=>{const n=e.dataset.annotationOverlayLineLabelShortEdgeOffsetPx,t=n?Number(n):Number.NaN;return Number.isFinite(t)?t:Oe.layout.shortEdgeOffsetPx},ju=(e,n)=>{const t=Vo(n),o=Ui(vT),r=Ui(NT),a=aT({accentColor:e,visualOptions:t});return o.dataset.annotationOverlayLineLabelShortEdgeOffsetPx=String(t.layout.shortEdgeOffsetPx),r.append(a),o.appendChild(r),o},IT=e=>{const n=Vo(e),t=X.colors.componentLabelAccents,o=r=>{const a=ju(t[r],n);return a.dataset.annotationOverlayLineLabelKind=r,a};return{direct:o("direct"),vertical:o("vertical"),horizontal:o("horizontal")}},Uu=e=>{e.direct.style.display="none",e.vertical.style.display="none",e.horizontal.style.display="none"},hT=({element:e,text:n,start:t,end:o,outsideReferencePoint:r,anchorRatio:a})=>{const i=kT(e),s=TT({start:t,end:o,kind:i,outsideReferencePoint:r,shortEdgeOffsetPx:bT(e),useShortEdgeRules:i==="vertical",anchorRatio:a,previousShouldFlip:e.dataset.annotationOverlayLineLabelNormalFlip==="1"});if(!s){e.style.display="none";return}iT(e,n),e.style.display="block",e.dataset.annotationOverlayLineLabelShortEdge=s.isShortEdge?"true":"false",e.dataset.annotationOverlayLineLabelAnchorRatio=`${s.anchorRatio}`,e.dataset.annotationOverlayLineLabelNormalFlip=s.shouldFlip?"1":"0",e.style.transform=AT(s)},Hu=({directLabelText:e,verticalLabelText:n,horizontalLabelText:t})=>({showVerticalLabel:n!==null&&n!==e,showHorizontalLabel:t!==null&&t!==e}),Ct=()=>({auxiliaryPoint:new w,auxiliaryScreen:{x:0,y:0}}),zu=({anchorPointECEF:e,targetPointECEF:n,scratch:t})=>{const o=Rt(e),r=Rt(n);return!Number.isFinite(o.longitude)||!Number.isFinite(o.latitude)||!Number.isFinite(r.altitude)?null:ms(o.longitude,o.latitude,r.altitude,t.auxiliaryPoint)},yI=({firstCorner:e,oppositeCorner:n})=>{const t=U(e),o=U(n),r=Al(t,o);return r?[t,r.adjacentHorizontalCorner,o,r.adjacentVerticalCorner,t]:null},Fe=Object.freeze({pointLabelCollisionSelector:'[data-pillbutton-root="true"], [data-point-label-content-root="true"]',svgNamespace:"http://www.w3.org/2000/svg",distanceTriangle:Object.freeze({cornerDotRadiusPx:1.25/2}),midpointMarker:Object.freeze({...gc({markerDiameterPx:X.sizes.pointPixelSize,markerStrokeWidthPx:X.sizes.pointOutlineWidth}),tickColor:ta.colors.surfaceStrong,minOverlayZIndex:Es.zIndex.interactionHandleFloor})}),se=Object.freeze({cornerOverlay:Object.freeze({minBoxPx:20,paddingPx:6,targetRadiusPx:20,segments:20,strokeWidthPx:1.25,color:cy(),straightHitTargetPx:20,fallbackFovRad:gs})}),Qr=e=>`annotation-overlay-distance-triangle-label-layer-${e}`,Vu=new w,Kr=(e,n)=>{const t=e.getCameraPositionECEF(Vu);return wu(t?t.distanceTo(n):Number.NaN)},Et=(e,n,t)=>Math.round((Kr(e,n)+Kr(e,t))/2),ST=e=>({left:e.left,top:e.top,right:e.right,bottom:e.bottom}),CT=e=>{const n=Pl(e);return n?Array.from(n.querySelectorAll(Fe.pointLabelCollisionSelector)).map(t=>ST(t.getBoundingClientRect())).filter(t=>t.right>t.left&&t.bottom>t.top):[]},Qe=(e,n,t)=>{const o=n?e.get(n):void 0;return o?o.clone():U(t)},We=(e,n)=>({x:e,y:n}),$u=({overlay:e})=>e.anchorCoordinateRole!==St.END_COORDINATE,Hi=(e,n)=>e.startNodeId!==void 0&&n.get(e.startNodeId)!==void 0||e.endNodeId!==void 0&&n.get(e.endNodeId)!==void 0,vr=(e,n,t,o)=>{const r=n.distanceTriangleOverlay;if(!r||!n.startCoordinate||!n.endCoordinate)return null;const a=Qe(t,n.startNodeId,n.startCoordinate),i=Qe(t,n.endNodeId,n.endCoordinate),s=$u({overlay:r}),l=s?a:i,u=s?i:a,d=zu({engine:e,anchorPointECEF:l,targetPointECEF:u,scratch:o});return d?{anchorECEF:l,auxiliaryECEF:d.clone(),targetECEF:u}:null},Yu=({engine:e,edge:n,scratch:t,previousOutsideSigns:o,formatOptions:r,liveAnchors:a})=>{const i=n.distanceTriangleOverlay;if(!i||!n.startCoordinate||!n.endCoordinate)return null;const s=Qe(a,n.startNodeId,n.startCoordinate),l=Qe(a,n.endNodeId,n.endCoordinate),u=e.worldToScreen(s),d=e.worldToScreen(l);if(u===null||d===null)return null;const c=We(u.x,u.y),y=We(d.x,d.y),m=$u({overlay:i}),p=m?n.startCoordinate:n.endCoordinate,A=m?n.endCoordinate:n.startCoordinate,f=m?s:l,T=m?l:s,k=m?c:y,N=m?y:c,v=zu({engine:e,anchorPointECEF:f,targetPointECEF:T,scratch:t});if(!v)return null;const b=e.worldToScreen(v,t.auxiliaryScreen);if(b===null)return null;const h=We(b.x,b.y),S=sy({anchor:k,target:N,aux:h,anchorAltitudeMeters:p.altitude,targetAltitudeMeters:A.altitude,previousOutsideSigns:o}),I=Xn(f.distanceTo(T),r.lengthMeters),E=f.distanceTo(v),O=v.distanceTo(T),R=E>Le.geometryEpsilonMeters?Xn(E,r.lengthMeters):null,L=O>Le.geometryEpsilonMeters?Xn(O,r.lengthMeters):null,P=Hu({directLabelText:I,verticalLabelText:R,horizontalLabelText:L});return{anchorPointECEF:f,targetPointECEF:T,auxiliaryPointECEF:v,anchorScreenPosition:k,targetScreenPosition:N,auxiliaryScreenPosition:h,directLabelText:I,verticalLabelText:R,horizontalLabelText:L,showVerticalLabel:P.showVerticalLabel,showHorizontalLabel:P.showHorizontalLabel,directOutsideReferencePoint:S.directOutsideReferencePoint,verticalOutsideReferencePoint:S.verticalOutsideReferencePoint,horizontalOutsideReferencePoint:S.horizontalOutsideReferencePoint,nextOutsideSigns:S.nextOutsideSigns}},ET=({edgeSegments:e,engine:n,formatOptions:t,liveAnchors:o,occludedLinesInScene:r,surfaceKey:a,activeEditedNodeId:i,blockEdgeInteractions:s,onEdgeClick:l,onAnnotationSelect:u})=>e.flatMap(d=>{var T;const c=i&&d.startNodeId&&d.endNodeId&&l?()=>l(d.startNodeId,d.endNodeId):void 0,y=!s&&u&&((T=d.distanceTriangleOverlay)!=null&&T.annotationId)?()=>u(d.distanceTriangleOverlay.annotationId):void 0,m=c??y,p=r&&d.overlayDashed?[]:Xo({id:`${a}-runtime-edge-overlay-${d.id}`,getSvgLine:()=>{if(!V(n))return null;const k=n.worldToScreen(Qe(o,d.startNodeId,d.startCoordinate)),N=n.worldToScreen(Qe(o,d.endNodeId,d.endCoordinate));return k===null||N===null?null:{start:We(k.x,k.y),end:We(N.x,N.y)}},stroke:d.stroke,strokeWidth:d.strokeWidth,dashed:d.overlayDashed,dashPattern:d.overlayDashPattern,hitTargetStrokeWidth:10,onLineClick:m});if(!d.distanceTriangleOverlay||d.distanceTriangleOverlay.showComponents===!1||!V(n)||r)return p;const A=Ct(),f=()=>Yu({engine:n,edge:d,scratch:A,formatOptions:t,liveAnchors:o});return[...p,...Xo({id:`${a}-runtime-edge-overlay-${d.id}-vertical`,getSvgLine:()=>{const k=f();return!k||!k.verticalLabelText?null:{start:k.anchorScreenPosition,end:k.auxiliaryScreenPosition}},stroke:Le.verticalLineColor,strokeWidth:d.strokeWidth,dashed:!0,dashPattern:d.overlayDashPattern,hitTargetStrokeWidth:8,onLineClick:m}),...Xo({id:`${a}-runtime-edge-overlay-${d.id}-horizontal`,getSvgLine:()=>{const k=f();return!k||!k.horizontalLabelText?null:{start:k.auxiliaryScreenPosition,end:k.targetScreenPosition}},stroke:Le.horizontalLineColor,strokeWidth:d.strokeWidth,dashed:!0,dashPattern:d.overlayDashPattern,hitTargetStrokeWidth:8,onLineClick:m})]}),OT=({edgeSegments:e,engine:n,formatOptions:t,liveAnchors:o,occludedLinesInScene:r})=>e.flatMap(a=>{const i={id:a.id,start:U(a.startCoordinate),end:U(a.endCoordinate),stroke:a.stroke,strokeWidth:a.strokeWidth,occludedDashed:r&&a.overlayDashed===!0,ruler:a.ruler===!0,rulerStartMeters:a.rulerStartMeters,startNodeId:a.startNodeId,endNodeId:a.endNodeId};if(!V(n)||!a.distanceTriangleOverlay||a.distanceTriangleOverlay.showComponents===!1)return[i];const s=Ct(),l=vr(n,a,o,s);if(!l)return[i];const u=A=>A>Le.geometryEpsilonMeters?Xn(A,t.lengthMeters):null,d=u(l.anchorECEF.distanceTo(l.auxiliaryECEF)),c=u(l.auxiliaryECEF.distanceTo(l.targetECEF)),y=Hu({directLabelText:Xn(l.anchorECEF.distanceTo(l.targetECEF),t.lengthMeters),verticalLabelText:d,horizontalLabelText:c}),m={anchorPointECEF:l.anchorECEF,auxiliaryPointECEF:l.auxiliaryECEF,targetPointECEF:l.targetECEF,verticalLabelText:d,horizontalLabelText:c,showVerticalLabel:y.showVerticalLabel,showHorizontalLabel:y.showHorizontalLabel},p=[];if(m.showVerticalLabel&&m.verticalLabelText){const A=Ct();p.push({id:`${a.id}-vertical`,halo:!1,start:m.anchorPointECEF,end:m.auxiliaryPointECEF,stroke:Le.verticalLineColor,strokeWidth:a.strokeWidth,occludedDashed:r,ruler:a.ruler===!0,recompute:f=>{if(!Hi(a,f))return null;const T=vr(n,a,f,A);return T?[T.anchorECEF,T.auxiliaryECEF]:null}})}if(m.showHorizontalLabel&&m.horizontalLabelText){const A=Ct();p.push({id:`${a.id}-horizontal`,halo:!1,start:m.auxiliaryPointECEF,end:m.targetPointECEF,stroke:Le.horizontalLineColor,strokeWidth:a.strokeWidth,occludedDashed:r,ruler:a.ruler===!0,recompute:f=>{if(!Hi(a,f))return null;const T=vr(n,a,f,A);return T?[T.auxiliaryECEF,T.targetECEF]:null}})}return[i,...p]}),zi=e=>{var n;return((n=e.distanceTriangleOverlay)==null?void 0:n.annotationId)??e.id},RT=e=>e.flatMap(n=>{var i,s;const t=[],o=Number.isFinite(n.strokeWidth)?n.strokeWidth:X.sizes.edgeStrokeWidth,r=n.overlayDashPattern??X.patterns.edgeDashPattern;let a=0;for(let l=0;l<n.coordinates.length-1;l+=1){const u=n.coordinates[l],d=n.coordinates[l+1];if(!u||!d)continue;const c=a;a+=U(u).distanceTo(U(d));const y=(i=n.nodeIds)==null?void 0:i[l],m=((s=n.nodeIds)==null?void 0:s[l+1])??(n.nodeIds&&n.coordinates.length===n.nodeIds.length+1&&l===n.nodeIds.length-1?n.nodeIds[0]:void 0);t.push({id:`${n.id}-${l}`,annotationId:n.annotationId,startNodeId:y,endNodeId:m,startCoordinate:u,endCoordinate:d,stroke:n.stroke,strokeWidth:o,overlayDashPattern:r,...n.overlayDashed?{overlayDashed:!0}:{},...n.ruler?{ruler:!0,rulerStartMeters:c}:{},...n.showSegmentLengthLabels?{showSegmentLengthLabels:!0}:{},distanceTriangleOverlay:l===0?n.distanceTriangleOverlay:void 0})}return t}),Pe=Object.freeze({anchorRatio:.5,anchorRatioEpsilon:1e-6,minAnchorSlideStepRatio:.01}),LT=e=>{if(e.style.display==="none")return null;const o=(e.querySelector('[data-annotation-overlay-line-label-text="foreground"]')??e).getBoundingClientRect();return o.width>0&&o.height>0?{left:o.left,top:o.top,right:o.right,bottom:o.bottom}:null},wT=e=>{const n=Number.parseFloat(e.dataset.annotationOverlayLineLabelAnchorRatio??"");return Number.isFinite(n)?oa(n):Pe.anchorRatio},qT=({element:e,collisionResolutionStrategy:n,stepRatio:t,maxDeltaRatio:o})=>{const r=Math.min(Pe.anchorRatio,oa(o)),a=Pe.anchorRatio-r,i=Pe.anchorRatio+r,s=Ue(wT(e),a,i),l=new Set([s,Pe.anchorRatio]);if(n!==Eu.MOVE_ON_LINE)return{lastResolvedAnchorRatio:s,anchorRatios:[...l]};const u=Math.max(t,Pe.minAnchorSlideStepRatio);for(let d=u;d<=r+Pe.anchorRatioEpsilon;d+=u)l.add(Math.max(a,Pe.anchorRatio-d)),l.add(Math.min(i,Pe.anchorRatio+d));return{lastResolvedAnchorRatio:s,anchorRatios:[...l].sort((d,c)=>{const y=Math.abs(d-s),m=Math.abs(c-s);return y!==m?y-m:Math.abs(d-Pe.anchorRatio)-Math.abs(c-Pe.anchorRatio)})}},Wu=(e,n)=>hT({element:e.element,text:e.text,start:e.start,end:e.end,outsideReferencePoint:e.outsideReferencePoint,flipReadingDirection:e.flipReadingDirection,anchorRatio:n}),xT=({candidate:e,anchorRatio:n,occupiedLabelRects:t,lastResolvedAnchorRatio:o})=>{Wu(e,n);const r=LT(e.element);return r?{anchorRatio:n,collisionRect:r,collisionCount:t.reduce((a,i)=>bc(r,i,Ic)?a+1:a,0),lastSolutionJumpPenalty:Math.abs(n-o),originalOffsetPenalty:Math.abs(n-Pe.anchorRatio)}:null},_T=(e,n)=>n?e.collisionCount!==n.collisionCount?e.collisionCount<n.collisionCount:e.collisionCount===0?e.originalOffsetPenalty!==n.originalOffsetPenalty?e.originalOffsetPenalty<n.originalOffsetPenalty:e.lastSolutionJumpPenalty<n.lastSolutionJumpPenalty:e.lastSolutionJumpPenalty!==n.lastSolutionJumpPenalty?e.lastSolutionJumpPenalty<n.lastSolutionJumpPenalty:e.originalOffsetPenalty<n.originalOffsetPenalty:!0,Qu=({candidate:e,occupiedLabelRects:n,allowEarlyRemoval:t,collisionResolutionStrategy:o,anchorSlideStepRatio:r,maxAnchorSlideDeltaRatio:a})=>{let i=null;const{lastResolvedAnchorRatio:s,anchorRatios:l}=qT({element:e.element,collisionResolutionStrategy:o,stepRatio:r,maxDeltaRatio:a});for(const u of l){const d=xT({candidate:e,anchorRatio:u,occupiedLabelRects:n,lastResolvedAnchorRatio:s});d&&_T(d,i)&&(i=d)}return i&&(i.collisionCount===0||!t)?(Wu(e,i.anchorRatio),{visible:!0,anchorRatio:i.anchorRatio,collisionCount:i.collisionCount,collisionRect:i.collisionRect}):(e.element.style.display="none",{visible:!1,anchorRatio:(i==null?void 0:i.anchorRatio)??null,collisionCount:(i==null?void 0:i.collisionCount)??0,collisionRect:null})},Ku=(e,n)=>n.zIndex-e.zIndex,PT=(e,n)=>e.metricValueMeters!==n.metricValueMeters?n.metricValueMeters-e.metricValueMeters:Ku(e,n),MT=e=>{const n=new Map;return e.forEach(t=>{const o=n.get(t.annotationId);o?o.push(t):n.set(t.annotationId,[t])}),n},DT=({candidates:e,occupiedLabelRects:n,...t})=>{const o=[],r=[...n];return[...e].sort(PT).forEach(a=>{const i=Qu({...t,candidate:a,occupiedLabelRects:r,allowEarlyRemoval:!0});i.visible&&i.collisionRect&&(r.push(i.collisionRect),o.push(a))}),o},BT=({candidates:e,occupiedLabelRects:n,allowEarlyRemoval:t,...o})=>{[...MT(e).values()].flatMap(a=>DT({...o,candidates:a,occupiedLabelRects:n})).sort(Ku).forEach(a=>{const i=Qu({...o,candidate:a,occupiedLabelRects:n,allowEarlyRemoval:t});i.visible&&i.collisionRect&&n.push(i.collisionRect)})},FT=e=>{const n=document.createElement("div");n.style.position="absolute",n.style.display="none",n.style.pointerEvents="none",n.style.userSelect="none",n.style.webkitUserSelect="none",n.style.cursor="default",n.style.zIndex="0";const t=document.createElementNS(Fe.svgNamespace,"svg");t.setAttribute("width","100%"),t.setAttribute("height","100%"),t.style.overflow="visible",t.style.pointerEvents="none";const o=document.createElementNS(Fe.svgNamespace,"path");o.setAttribute("fill","none"),o.setAttribute("stroke",se.cornerOverlay.color),o.setAttribute("stroke-width",`${se.cornerOverlay.strokeWidthPx}`),o.setAttribute("stroke-linecap","round"),o.setAttribute("stroke-linejoin","round");const r=document.createElementNS(Fe.svgNamespace,"circle");return r.setAttribute("r",`${Fe.distanceTriangle.cornerDotRadiusPx}`),r.setAttribute("fill",se.cornerOverlay.color),t.append(o,r),n.appendChild(t),e.appendChild(n),{root:n,svg:t,path:o,dot:r}},Xu=e=>{e.root.remove()},Vi=e=>{e.forEach(n=>{Xu(n)}),e.clear()},Cn=e=>{e.root.style.display="none",e.root.onclick=null},GT=({handle:e,pathData:n,dotScreen:t,minX:o,minY:r,width:a,height:i,clickable:s,onClick:l})=>{e.path.setAttribute("d",n),e.path.style.display="block",e.svg.style.display="block",e.dot.setAttribute("cx",`${t.x-o+se.cornerOverlay.paddingPx}`),e.dot.setAttribute("cy",`${t.y-r+se.cornerOverlay.paddingPx}`),e.root.style.left=`${o-se.cornerOverlay.paddingPx}px`,e.root.style.top=`${r-se.cornerOverlay.paddingPx}px`,e.root.style.width=`${a}px`,e.root.style.height=`${i}px`,e.root.style.transform="none",e.root.style.display="block",e.root.style.pointerEvents=s?"auto":"none",e.root.style.cursor=s?"pointer":"default",e.root.onclick=s&&l?l:null},jT=({handle:e,center:n,clickable:t,onClick:o})=>{const r=se.cornerOverlay.straightHitTargetPx,a=r/2;e.path.style.display="none",e.svg.style.display="block",e.dot.setAttribute("cx",`${a}`),e.dot.setAttribute("cy",`${a}`),e.root.style.left=`${n.x-a}px`,e.root.style.top=`${n.y-a}px`,e.root.style.width=`${r}px`,e.root.style.height=`${r}px`,e.root.style.transform="none",e.root.style.display="block",e.root.style.pointerEvents=t?"auto":"none",e.root.style.cursor=t?"pointer":"default",e.root.onclick=t&&o?o:null},UT=({engine:e,cornerHandle:n,screenData:t,lengths:{directLengthMeters:o,verticalLengthMeters:r,horizontalLengthMeters:a},clickable:i,onClick:s})=>{if(r<=It.referenceLineEpsilonMeters||a<=It.referenceLineEpsilonMeters){if(o<=It.referenceLineEpsilonMeters){Cn(n);return}const S=We((t.anchorScreenPosition.x+t.targetScreenPosition.x)/2,(t.anchorScreenPosition.y+t.targetScreenPosition.y)/2);jT({handle:n,center:S,clickable:i,onClick:s});return}const l=e.canvas.clientWidth,u=e.canvas.clientHeight;if(l<=0||u<=0){Cn(n);return}let d=Number.NaN;try{const S=e.getScreenPixelsPerMeterAt(t.auxiliaryPointECEF);d=Number.isFinite(S)&&S>0?1/S:Number.NaN}catch{d=Number.NaN}if(!Number.isFinite(d)||d<=0){const S=e.getCameraPositionECEF(Vu),I=Math.max(S?S.distanceTo(t.auxiliaryPointECEF):Number.NaN,1),E=se.cornerOverlay.fallbackFovRad;d=Math.max(I*Math.tan(E/2)*2/Math.max(u,1),1e-6)}const c=Qc(t.auxiliaryPointECEF,t.anchorPointECEF,t.targetPointECEF,se.cornerOverlay.targetRadiusPx*d,se.cornerOverlay.segments);if(!c||c.length<2){Cn(n);return}const y=c[Math.floor(c.length/2)];if(!y){Cn(n);return}const m=new w().addVectors(t.auxiliaryPointECEF,y).multiplyScalar(.5),p=e.worldToScreen(m);if(p===null){Cn(n);return}const A=c.map(S=>e.worldToScreen(S)).filter(S=>S!==null);if(A.length<2){Cn(n);return}const f=Math.min(...A.map(S=>S.x)),T=Math.max(...A.map(S=>S.x)),k=Math.min(...A.map(S=>S.y)),N=Math.max(...A.map(S=>S.y)),v=Math.max(se.cornerOverlay.minBoxPx,T-f+se.cornerOverlay.paddingPx*2),b=Math.max(se.cornerOverlay.minBoxPx,N-k+se.cornerOverlay.paddingPx*2),h=A.map((S,I)=>{const E=S.x-f+se.cornerOverlay.paddingPx,O=S.y-k+se.cornerOverlay.paddingPx;return`${I===0?"M":"L"} ${E} ${O}`}).join(" ");GT({handle:n,pathData:h,dotScreen:We(p.x,p.y),minX:f,minY:k,width:v,height:b,clickable:i,onClick:s})},HT=(e,n)=>{const t=IT(n);return e.append(t.direct,t.vertical,t.horizontal),{lineLabels:t,scratch:Ct()}},zT=(e,n)=>{const t=ju(X.colors.componentLabelAccents.direct,n);return e.appendChild(t),{element:t}},Zu=e=>{Uu(e.lineLabels),e.lineLabels.direct.remove(),e.lineLabels.vertical.remove(),e.lineLabels.horizontal.remove()},Ju=e=>{e.element.style.display="none",e.element.remove()},$i=e=>{e.forEach(n=>{Zu(n)}),e.clear()},Yi=e=>{e.forEach(n=>{Ju(n)}),e.clear()},VT=({engine:e,edge:n,labelHandle:t,formatOptions:o,liveAnchors:r,candidates:a})=>{const i=Qe(r,n.startNodeId,n.startCoordinate),s=Qe(r,n.endNodeId,n.endCoordinate),l=e.worldToScreen(i),u=e.worldToScreen(s),d=i.distanceTo(s);if(l===null||u===null||d<=It.referenceLineEpsilonMeters){t.element.style.display="none";return}const c=Et(e,i,s);t.element.style.zIndex=`${c}`,a.push({element:t.element,zIndex:c,annotationId:n.annotationId??n.id,metricValueMeters:d,text:Xn(d,o.lengthMeters),start:We(l.x,l.y),end:We(u.x,u.y)})},$T=({engine:e,edge:n,labelHandle:t,cornerHandle:o,formatOptions:r,liveAnchors:a,candidates:i,cornerClickable:s,onCornerClick:l})=>{var N;const u=Yu({engine:e,edge:n,scratch:t.scratch,previousOutsideSigns:t.previousOutsideSigns,formatOptions:r,liveAnchors:a});if(!u){Uu(t.lineLabels),o&&Cn(o),t.previousOutsideSigns=void 0;return}t.previousOutsideSigns=u.nextOutsideSigns;const d=Et(e,u.anchorPointECEF,u.targetPointECEF),c=Et(e,u.anchorPointECEF,u.auxiliaryPointECEF),y=Et(e,u.auxiliaryPointECEF,u.targetPointECEF),m=Kr(e,u.auxiliaryPointECEF),p=zi(n),A=u.anchorPointECEF.distanceTo(u.targetPointECEF),f=u.anchorPointECEF.distanceTo(u.auxiliaryPointECEF),T=u.auxiliaryPointECEF.distanceTo(u.targetPointECEF);t.lineLabels.direct.style.zIndex=`${d}`,i.push({element:t.lineLabels.direct,zIndex:d,annotationId:p,metricValueMeters:A,text:u.directLabelText,start:u.anchorScreenPosition,end:u.targetScreenPosition,outsideReferencePoint:u.directOutsideReferencePoint});const k=((N=n.distanceTriangleOverlay)==null?void 0:N.showComponents)!==!1;k&&u.showVerticalLabel&&u.verticalLabelText?(t.lineLabels.vertical.style.zIndex=`${c}`,i.push({element:t.lineLabels.vertical,zIndex:c,annotationId:p,metricValueMeters:f,text:u.verticalLabelText,start:u.anchorScreenPosition,end:u.auxiliaryScreenPosition,outsideReferencePoint:u.verticalOutsideReferencePoint,flipReadingDirection:!0})):t.lineLabels.vertical.style.display="none",k&&u.showHorizontalLabel&&u.horizontalLabelText?(t.lineLabels.horizontal.style.zIndex=`${y}`,i.push({element:t.lineLabels.horizontal,zIndex:y,annotationId:p,metricValueMeters:T,text:u.horizontalLabelText,start:u.auxiliaryScreenPosition,end:u.targetScreenPosition,outsideReferencePoint:u.horizontalOutsideReferencePoint})):t.lineLabels.horizontal.style.display="none",!(!o||!k)&&(o.root.style.zIndex=`${m}`,UT({engine:e,cornerHandle:o,screenData:u,lengths:{directLengthMeters:A,verticalLengthMeters:f,horizontalLengthMeters:T},clickable:s,onClick:l?()=>l(zi(n)):void 0}))},YT=(e,{edgeSegments:n,formatOptions:t,lineLabelOptions:o,surfaceKey:r,activeEditedNodeId:a,blockEdgeInteractions:i,liveAnchors:s,onDistanceTriangleCornerClick:l})=>{const u=g.useRef(new Map),d=g.useRef(new Map),c=g.useRef(new Map);g.useEffect(()=>{if($i(u.current),Yi(d.current),Vi(c.current),!V(e))return;const y=n.filter(v=>v.distanceTriangleOverlay!==void 0),m=n.filter(v=>v.showSegmentLengthLabels===!0);if(y.length===0&&m.length===0)return;const{[ce.LABEL]:p,[ce.VISUALIZER]:A}=Gu(e,{[ce.LABEL]:Qr(r),[ce.VISUALIZER]:`${Qr(r)}-visualizer`});if(!p||!A)return;const f=()=>{const v=new Set([...y.map(b=>b.id),...m.map(b=>b.id)]);u.current.forEach((b,h)=>{if(v.has(h))return;Zu(b),u.current.delete(h);const S=c.current.get(h);S&&(Xu(S),c.current.delete(h))}),y.forEach(b=>{var h;u.current.has(b.id)||(u.current.set(b.id,HT(p,o)),((h=b.distanceTriangleOverlay)==null?void 0:h.showComponents)!==!1&&c.current.set(b.id,FT(A)))}),d.current.forEach((b,h)=>{v.has(h)||(Ju(b),d.current.delete(h))}),m.forEach(b=>{d.current.has(b.id)||d.current.set(b.id,zT(p,o))})};let T=null;const k=({force:v=!1}={})=>{const b=xu(e);if(!v&&s.size===0&&_u(T,b))return;T=b;const h=CT(e),S=[],I=!i&&a===null&&!!l;y.forEach(E=>{const O=u.current.get(E.id);O&&$T({engine:e,edge:E,labelHandle:O,cornerHandle:c.current.get(E.id),formatOptions:t,liveAnchors:s,candidates:S,cornerClickable:I,onCornerClick:l})}),m.forEach(E=>{const O=d.current.get(E.id);O&&VT({engine:e,edge:E,labelHandle:O,formatOptions:t,liveAnchors:s,candidates:S})}),BT({candidates:S,occupiedLabelRects:h,allowEarlyRemoval:o.collision.allowEarlyRemoval,collisionResolutionStrategy:o.collision.resolutionStrategy,anchorSlideStepRatio:o.collision.anchorSlideStepRatio,maxAnchorSlideDeltaRatio:o.collision.maxAnchorSlideDeltaRatio})};f(),k({force:!0});const N=e.subscribePostRender(()=>{k()});return e.requestRender(),()=>{N(),$i(u.current),Yi(d.current),Vi(c.current),Ht(p),Ht(A),V(e)&&e.requestRender()}},[a,i,n,d,e,t,s,l,o,r])},WT=e=>{const n=document.createElement("div");n.style.position="absolute",n.style.display="none",n.style.pointerEvents="none",n.style.userSelect="none",n.style.webkitUserSelect="none",n.style.cursor="default";const t=document.createElement("div");return t.style.position="absolute",t.style.left="50%",t.style.top="50%",t.style.width=`${Fe.midpointMarker.tickLengthPx}px`,t.style.height=`${Fe.midpointMarker.tickWidthPx}px`,t.style.borderRadius="999px",t.style.background=Fe.midpointMarker.tickColor,t.style.transform="translate(-50%, -50%)",t.style.pointerEvents="none",t.style.transition=hs(),n.appendChild(t),e.appendChild(n),{root:n,tick:t}},QT=e=>{e.root.remove()},Wi=e=>{e.forEach(n=>{QT(n)}),e.clear()},KT=e=>{e.root.style.display="none",e.root.onclick=null,e.root.onmouseenter=null,e.root.onmouseleave=null,e.tick.style.transform="translate(-50%, -50%)",e.tick.style.boxShadow="none",e.tick.style.filter="none"},Nr=(e,n)=>{e.tick.style.transform=n?`translate(-50%, -50%) scale(${ta.hover.scale})`:"translate(-50%, -50%)",e.tick.style.boxShadow=n?Ss():"none",e.tick.style.filter=n?Cs():"none"},XT=({handle:e,center:n,angleRad:t,zIndex:o,clickable:r,onClick:a})=>{e.root.style.left=`${n.x}px`,e.root.style.top=`${n.y}px`,e.root.style.width=`${Fe.midpointMarker.hitTargetPx}px`,e.root.style.height=`${Fe.midpointMarker.hitTargetPx}px`,e.root.style.transform=`translate(-50%, -50%) rotate(${t}rad)`,e.root.style.transformOrigin="50% 50%",e.root.style.zIndex=`${Math.max(o,Fe.midpointMarker.minOverlayZIndex)}`,e.root.style.display="block",e.root.style.pointerEvents=r?"auto":"none",e.root.style.cursor=r?"pointer":"default",e.root.onclick=r&&a?a:null,e.root.onmouseenter=r?()=>{Nr(e,!0)}:null,e.root.onmouseleave=r?()=>{Nr(e,!1)}:null,Nr(e,!1)},ZT=(e,{insertNodeTargetSegments:n,surfaceKey:t,activeEditedNodeId:o,blockEdgeInteractions:r,liveAnchors:a,onInsertNodeTargetClick:i})=>{const s=g.useRef(new Map);g.useEffect(()=>{if(Wi(s.current),!V(e)||r||o!==null||n.length===0)return;const l=Gu(e,{[ce.VISUALIZER]:`${Qr(t)}-midpoint-targets`})[ce.VISUALIZER];if(!l)return;n.forEach(c=>{s.current.set(c.id,WT(l))});const u=()=>{n.forEach(c=>{const y=s.current.get(c.id);if(!y)return;const m=Qe(a,c.startNodeId,c.startCoordinate),p=Qe(a,c.endNodeId,c.endCoordinate),A=e.worldToScreen(m),f=e.worldToScreen(p),T=e.worldToScreen(new w().addVectors(m,p).multiplyScalar(.5));if(A===null||f===null||T===null||!c.annotationId||!c.startNodeId||!c.endNodeId){KT(y);return}XT({handle:y,center:We(T.x,T.y),angleRad:Math.atan2(f.y-A.y,f.x-A.x)+Rd,zIndex:Et(e,m,p),clickable:!!i,onClick:i?()=>i(c.annotationId,c.startNodeId,c.endNodeId):void 0})})};u();const d=e.subscribePostRender(()=>{u()});return e.requestRender(),()=>{d(),Wi(s.current),Ht(l),V(e)&&e.requestRender()}},[o,r,e,n,a,i,t])},ed=(e,n,t)=>[e.startNodeId,e.endNodeId].filter(r=>r!==void 0).some(r=>r===n||t(r)),nd=e=>[e.id,e.start.x,e.start.y,e.start.z,e.end.x,e.end.y,e.end.z,e.stroke,e.strokeWidth,e.occludedDashed,e.ruler,e.rulerStartMeters??0,e.halo!==!1].join(":"),JT=e=>({snappable:e.createLineCollection(),excludedFromDragSamples:e.createLineCollection({excludeFromDragSamples:!0})}),ev=e=>{e.snappable.destroy(),e.excludedFromDragSamples.destroy()},nv=(e,n)=>n?e.excludedFromDragSamples:e.snappable,td=(e,n,t,o)=>{const r=nv(n,o).addLine({id:t.id,positions:[t.start,t.end],color:t.stroke,width:t.strokeWidth,occludedDashed:t.occludedDashed,ruler:t.ruler,rulerStartMeters:t.rulerStartMeters,halo:t.halo!==!1,visible:!0}),a=()=>{if(V(e))try{r.destroy()}catch(i){console.warn("[annotations/runtime] Ignoring committed edge destroy error.",i)}};return{signature:nd(t),line:t,sceneLine:r,excludedFromDragSamples:o,startNodeId:t.startNodeId,endNodeId:t.endNodeId,baseStart:t.start,baseEnd:t.end,recompute:t.recompute,overridden:!1,destroy:a}},kr=e=>{e.forEach(n=>{n.destroy()}),e.clear()},tv=(e,n)=>{const t=n.size>0;e.forEach(o=>{let r=null;if(o.recompute)r=t?o.recompute(n):null;else{const a=o.startNodeId?n.get(o.startNodeId):void 0,i=o.endNodeId?n.get(o.endNodeId):void 0;(a!==void 0||i!==void 0)&&(r=[a??o.baseStart,i??o.baseEnd])}r===null&&!o.overridden||(o.sceneLine.setPositions(r?[r[0],r[1]]:[o.baseStart,o.baseEnd]),o.overridden=r!==null&&t)})},ov=(e,n,t,o,r)=>{t.forEach((a,i)=>{const s=ed(a,o,u=>r.get(u)!==void 0);if(s===a.excludedFromDragSamples)return;a.destroy();const l=td(e,n,a.line,s);l.overridden=!1,t.set(i,l)})},rv=(e,n,t,o)=>{const r=g.useRef(null),a=g.useRef(new Map);g.useEffect(()=>{if(!V(e))return;const s=JT(e);return r.current=s,()=>{kr(a.current),r.current===s&&(r.current=null),V(e)&&ev(s)}},[e]);const i=g.useRef(t);i.current=t,g.useEffect(()=>{const s=r.current;if(!V(e)||!s){kr(a.current);return}return(u=>{const d=new Set(u.map(c=>c.id));a.current.forEach((c,y)=>{d.has(y)||(c.destroy(),a.current.delete(y))}),u.forEach(c=>{const y=nd(c),m=a.current.get(c.id);(m==null?void 0:m.signature)!==y&&(m==null||m.destroy(),a.current.set(c.id,td(e,s,c,ed(c,i.current,p=>o.get(p)!==void 0))))}),e.requestRender()})(n),()=>{kr(a.current),V(e)&&e.requestRender()}},[e,o,n]),g.useEffect(()=>{if(!V(e))return;const s=()=>{const u=r.current;u&&ov(e,u,a.current,t,o)};s();const l=e.subscribePreRender(()=>{try{s(),tv(a.current,o)}catch{}});return()=>{l()}},[t,e,o])},av=(e,{edges:n,formatOptions:t,lineLabelOptions:o,surfaceKey:r="committed",activeEditedNodeId:a,blockEdgeInteractions:i,onAnnotationSelect:s,onEdgeClick:l,insertNodeTargetAnnotationIds:u=[],onInsertNodeTargetClick:d,onDistanceTriangleCornerClick:c,liveAnchors:y})=>{const m=g.useMemo(()=>Vo(o),[o]),p=g.useMemo(()=>new Set(u),[u]),A=g.useMemo(()=>RT(n),[n]),f=g.useMemo(()=>A.filter(v=>v.annotationId!==void 0&&p.has(v.annotationId)&&v.startNodeId!==void 0&&v.endNodeId!==void 0),[A,p]),T=(e==null?void 0:e.capabilities.occludedLinesInScene)===!0,k=g.useMemo(()=>OT({edgeSegments:A,engine:e,formatOptions:t,liveAnchors:y,occludedLinesInScene:T}),[A,e,t,y,T]),N=g.useMemo(()=>ET({edgeSegments:A,engine:e,formatOptions:t,liveAnchors:y,occludedLinesInScene:T,surfaceKey:r,activeEditedNodeId:a,blockEdgeInteractions:i,onEdgeClick:l,onAnnotationSelect:s}),[a,i,A,e,t,y,T,l,s,r]);qc([...N],N.length>0),rv(e,k,a,y),ZT(e,{insertNodeTargetSegments:f,surfaceKey:r,activeEditedNodeId:a,blockEdgeInteractions:i,liveAnchors:y,onInsertNodeTargetClick:d}),YT(e,{edgeSegments:A,formatOptions:t,lineLabelOptions:m,surfaceKey:r,activeEditedNodeId:a,blockEdgeInteractions:i,liveAnchors:y,onDistanceTriangleCornerClick:c})},iv=e=>e.flatMap(n=>{const t=n.placement??Ut.COPLANAR;return t!==Ut.COPLANAR||!n.overlayFill||n.coordinates.length<3?[]:[{...n,overlayFill:n.overlayFill,placement:t}]}),sv=(e,n)=>e.length===n.length&&e.every((t,o)=>{const r=n[o];return r!==void 0&&t.id===r.id&&t.annotationId===r.annotationId&&t.overlayFill===r.overlayFill&&t.selected===r.selected&&Sa(t.coordinates,r.coordinates)}),lv=()=>{const e=document.createElementNS("http://www.w3.org/2000/svg","polygon");return e.style.pointerEvents="none",e},uv=(e,n)=>{if(!V(e))return{setPolygonFills:()=>{},clear:()=>{},destroy:()=>{}};const t=La(e,`annotation-overlay-runtime-polygon-fill-layer-${n}`,ce.VISUALIZER);if(!t)return{setPolygonFills:()=>{},clear:()=>{},destroy:()=>{}};const o=document.createElementNS("http://www.w3.org/2000/svg","svg");o.setAttribute("width","100%"),o.setAttribute("height","100%"),o.style.position="absolute",o.style.inset="0",o.style.overflow="visible",o.style.pointerEvents="none",t.appendChild(o);let r=[],a=new Map;const i=()=>{a.forEach(u=>u.remove()),a=new Map},s=()=>{e.isDestroyed()||r.forEach(u=>{let d=a.get(u.id);d||(d=lv(),a.set(u.id,d),o.appendChild(d)),d.setAttribute("fill",u.overlayFill);const c=u.coordinates.map(y=>e.worldToScreen(U(y))).filter(y=>y!==null);if(c.length!==u.coordinates.length){d.style.display="none";return}d.setAttribute("points",c.map(y=>`${y.x},${y.y}`).join(" ")),d.style.display="block"})},l=e.subscribePostRender(()=>{s()});return{setPolygonFills:(u,d=!0)=>{const c=iv(u);if(sv(r,c))return;r=c;const y=new Set(r.map(m=>m.id));a.forEach((m,p)=>{y.has(p)||(m.remove(),a.delete(p))}),s(),d&&e.requestRender()},clear:(u=!0)=>{r.length!==0&&(r=[],i(),u&&e.requestRender())},destroy:()=>{r=[],l(),i(),Ht(t),e.isDestroyed()||e.requestRender()}}},dv=(e,n,t)=>{const o=g.useRef(null),r=g.useRef(n);r.current=n,g.useEffect(()=>{const a=uv(e,t);return o.current=a,a.setPolygonFills(r.current),()=>{a.destroy(),o.current===a&&(o.current=null)}},[e,t]),g.useEffect(()=>{var a;(a=o.current)==null||a.setPolygonFills(n)},[n])},cv={[Ut.GROUND]:yi.GROUND,[Ut.COPLANAR]:yi.COPLANAR},mv=e=>e.map(n=>({...n,placement:n.placement??Ut.COPLANAR})),yv=(e,n)=>e.length===n.length&&e.every((t,o)=>{const r=n[o];return r!==void 0&&t.id===r.id&&t.annotationId===r.annotationId&&t.fill===r.fill&&t.placement===r.placement&&t.selected===r.selected&&Sa(t.coordinates,r.coordinates)}),pv=e=>e.flatMap(n=>n.coordinates.length<3?[]:[{id:n.id,positionsECEF:n.coordinates.map(t=>U(t)),fill:n.fill,placement:cv[n.placement],...n.selected!==void 0?{selected:n.selected}:{}}]),gv=(e,n={})=>{if(!V(e))return{setPolygonFills:()=>{},clear:()=>{},destroy:()=>{}};let t=[];const o=n.allowPicking??!0,r=e.createPolygonFills({allowPicking:o}),a=({requestRender:s})=>{r.clear(),s&&e.requestRender()},i=(s,l=!0)=>{r.setPolygonFills(pv(s)),l&&e.requestRender()};return{setPolygonFills:(s,l=!0)=>{const u=mv(s);yv(t,u)||(t=u,!e.isDestroyed()&&i(u,l))},clear:(s=!0)=>{t.length!==0&&(t=[],!e.isDestroyed()&&a({requestRender:s}))},destroy:()=>{t=[],!e.isDestroyed()&&(r.destroy(),e.requestRender())}}},fv=(e,n)=>{const t=g.useRef(null),o=g.useRef(n);o.current=n,g.useEffect(()=>{const r=gv(e);return t.current=r,r.setPolygonFills(o.current),()=>{r.destroy(),t.current===r&&(t.current=null)}},[e]),g.useEffect(()=>{var r;(r=t.current)==null||r.setPolygonFills(n)},[n])},od=gu(te.ACCENT_MEASUREMENTS).brighter(.1);od.opacity=.5;const Av=Object.freeze({id:"accent-measurements",label:"Measurements · Accent",colorPrimaryReduced:od.toString(),colorPrimary:te.ACCENT_MEASUREMENTS,lineColor:X.colors.surface,textColor:Un.label.textColor}),Ce=Object.freeze({scheme:Av,fontFamily:tt.fontFamily,contentFontWeight:tt.lineLabelFontWeight,badgeFontWeight:tt.badgeFontWeight,selection:Un.selection.highlightPalette}),ue=Object.freeze({fontSize:tt.rootFontSizeRem,fontFamily:Ce.fontFamily,fontWeight:Ce.contentFontWeight,lineColor:Ce.scheme.lineColor,textBackgroundColor:Ce.scheme.colorPrimaryReduced,textColor:Ce.scheme.textColor,markerBackgroundColor:Ce.scheme.colorPrimary,markerTextColor:Ce.scheme.textColor,selectedBackgroundColor:Ce.selection.backgroundColor,selectedTextColor:Ce.selection.textColor,selectedGlowColor:Ce.selection.glowColor,selectedGlowRadiusPx:Ce.selection.glowRadiusPx,preserveFillOnSelection:Ce.selection.preserveFillOnSelection,hoverBackgroundColor:Ce.selection.hoverBackgroundColor,markerPixelSize:X.sizes.pointPixelSize,markerOutlineWidth:X.sizes.pointOutlineWidth}),Tv=e=>({...e,fontSize:e.fontSize??ue.fontSize,fontFamily:e.fontFamily??ue.fontFamily,fontWeight:e.fontWeight??ue.fontWeight,lineColor:e.lineColor??ue.lineColor,textBackgroundColor:e.textBackgroundColor??ue.textBackgroundColor,textColor:e.textColor??ue.textColor,markerBackgroundColor:e.markerBackgroundColor??ue.markerBackgroundColor,markerTextColor:e.markerTextColor??ue.markerTextColor,selectedBackgroundColor:e.selectedBackgroundColor??ue.selectedBackgroundColor,selectedTextColor:e.selectedTextColor??ue.selectedTextColor,selectedGlowColor:e.selectedGlowColor??ue.selectedGlowColor,selectedGlowRadiusPx:e.selectedGlowRadiusPx??ue.selectedGlowRadiusPx,preserveFillOnSelection:e.preserveFillOnSelection??ue.preserveFillOnSelection,hoverBackgroundColor:e.hoverBackgroundColor??ue.hoverBackgroundColor,markerPixelSize:e.markerPixelSize??ue.markerPixelSize,markerOutlineWidth:e.markerOutlineWidth??ue.markerOutlineWidth}),co=Object.freeze({nodeLabelLongPressDurationMs:320}),Qi=(e,n)=>n!==void 0&&e.has(n),Xr=({nodeId:e,annotationId:n,onNodeLongPress:t,canStartNodeEditing:o})=>t&&e&&((o==null?void 0:o(e,n))??!0)?()=>t(e,n):void 0,rd=({nodeId:e,annotationId:n,canStartNodeEditing:t})=>!e||((t==null?void 0:t(e,n))??!0),ad=({nodeId:e,annotationId:n,nodeAnnotationIds:t,referenceNodeInteractionEnabled:o,previewSnapTargetsEnabled:r,onReferenceNodeClick:a,onPreviewSnapTargetNodeClick:i,onNodeAnnotationsSelect:s,onAnnotationSelect:l})=>{if(o&&e)return()=>{a==null||a(e)};if(r&&e)return()=>{i==null||i(e)};if(t.length>0&&s)return()=>{s(t)};if(n&&l)return()=>{l(n)}},vv=e=>e.map(Tv).filter(n=>!(n.hideLabelAndStem===!0&&n.nodeId!==void 0)),id=(e,n)=>{const t=new Map;return e.forEach(o=>{if(!o.nodeId||!o.annotationId)return;const r=n.get(o.nodeId)??o.nodeId,a=t.get(r)??[];a.includes(o.annotationId)||(a.push(o.annotationId),t.set(r,a))}),t},sd=e=>new Set(e.flatMap(n=>n.pointMarkerId&&n.hideLabelAndStem!==!0&&n.hideMarker!==!0?[n.pointMarkerId]:[])),Nv=({pointLabels:e,points:n,selectedAnnotationIdSet:t,previewSnapTargetsEnabled:o,referenceNodeClickEnabled:r,referenceNodeHoverEnabled:a,nodeLinkIdByNodeId:i,previewNodeLinkId:s,isInPreviewNodeLink:l,onAnnotationSelect:u,onNodeAnnotationsSelect:d,onNodeLongPress:c,canStartNodeEditing:y,onPreviewSnapTargetNodeClick:m,onReferenceNodeClick:p,onReferenceNodeHover:A,enableHostInteractionTargets:f})=>{const T=vv(e),k=f&&(a||o),N=f?T.map(I=>{const E=!!(r&&p&&I.nodeId&&!l(I.nodeId)),O=o&&I.nodeId!==void 0,R=rd({nodeId:I.nodeId,annotationId:I.annotationId,canStartNodeEditing:y});return{...I,onClick:!O&&(I.onClick||E)?()=>{if(I.onClick){I.onClick();return}E&&I.nodeId&&(p==null||p(I.nodeId))}:void 0,onHoverChange:I.onHoverChange,onLongPress:E||O||!R?void 0:I.onLongPress??Xr({nodeId:I.nodeId,annotationId:I.annotationId,onNodeLongPress:c,canStartNodeEditing:y}),longPressDurationMs:I.longPressDurationMs??co.nodeLabelLongPressDurationMs}}):T.map(I=>({...I,onClick:void 0,onDoubleClick:void 0,onHoverChange:void 0,onLongPress:void 0,longPressDurationMs:I.longPressDurationMs??co.nodeLabelLongPressDurationMs}));if(!!!(f&&(k||o||r||u||d||c)))return N;const b=sd(N),h=new Map,S=id(n,i);return n.forEach(I=>{const{nodeId:E,annotationId:O}=I;if(!E||!b.has(I.id))return;const R=i.get(E)??E;if(s!==null&&R===s)return;const L=!!(r&&p&&!l(E)),P=L||o?void 0:Xr({nodeId:E,annotationId:O,onNodeLongPress:c,canStartNodeEditing:y}),x={id:`${I.id}-node-interaction`,annotationId:O,nodeId:E,pointMarkerId:I.id,coordinate:I.coordinate,markerPixelSize:I.pixelSize,content:"",hideLabelAndStem:!0,hideMarker:!0,markerOnlyPointerEvents:!0,onHoverChange:k?G=>{A==null||A(E,G)}:void 0,onClick:ad({nodeId:E,annotationId:O,nodeAnnotationIds:S.get(R)??[],referenceNodeInteractionEnabled:L,previewSnapTargetsEnabled:o,onReferenceNodeClick:p,onPreviewSnapTargetNodeClick:m,onNodeAnnotationsSelect:d,onAnnotationSelect:u}),onLongPress:P,longPressDurationMs:co.nodeLabelLongPressDurationMs},M=P?I.id:R,F=h.get(M);(!F||!Qi(t,F.annotationId)&&Qi(t,I.annotationId))&&h.set(M,x)}),[...N,...h.values()]},kv=({points:e,enableHostInteractionTargets:n,previewSnapTargetsEnabled:t,referenceNodeClickEnabled:o,referenceNodeHoverEnabled:r,nodeLinkIdByNodeId:a,isInPreviewNodeLink:i,onAnnotationSelect:s,onNodeAnnotationsSelect:l,onNodeLongPress:u,canStartNodeEditing:d,onPreviewSnapTargetNodeClick:c,onReferenceNodeClick:y,onReferenceNodeHover:m})=>{if(!n)return e.map(f=>({...f,onClick:void 0,onHoverChange:void 0,onLongPress:void 0}));const p=r||t,A=id(e,a);return e.map(f=>{const{nodeId:T,annotationId:k}=f,N=T?a.get(T)??T:null,v=!!(o&&y&&T&&!i(T)),b=p&&T&&!i(T)?S=>{m==null||m(T,S)}:f.onHoverChange,h=t||v||i(T)||!rd({nodeId:T,annotationId:k,canStartNodeEditing:d});return{...f,onClick:ad({nodeId:T,annotationId:k,nodeAnnotationIds:N?A.get(N)??[]:[],referenceNodeInteractionEnabled:v,previewSnapTargetsEnabled:t,onReferenceNodeClick:y,onPreviewSnapTargetNodeClick:c,onNodeAnnotationsSelect:l,onAnnotationSelect:s})??f.onClick,onHoverChange:b,onLongPress:h?void 0:f.onLongPress??Xr({nodeId:T,annotationId:k,onNodeLongPress:u,canStartNodeEditing:d}),longPressDurationMs:f.longPressDurationMs??co.nodeLabelLongPressDurationMs}})},bv=e=>{const n=Nv(e),t=sd(n);return{pointLabels:n,visibleStandalonePoints:kv(e).filter(o=>!t.has(o.id))}},Iv=(e,n)=>{if(e.anchorKind===Rs.AREA_CENTROID)return e;const t=e.coordinateCandidates;if(t&&t.length>0){const o=t.filter(a=>!n(a.nodeId));if(o.length===t.length)return e;if(o.length===0)return{...e,hideLabelAndStem:!0};const[r]=o;return{...e,coordinateCandidates:o,nodeId:r.nodeId??e.nodeId,coordinate:r.coordinate}}return n(e.nodeId)?{...e,hideLabelAndStem:!0}:e},Ki=(e,{surfaceKey:n="committed",enableHostInteractionTargets:t,points:o,linkedNodeGroups:r,edges:a,polygonFills:i,pointLabels:s,selectedAnnotationIds:l,formatOptions:u,lineLabelOptions:d,activeEditedNodeId:c,isMoveGizmoDragging:y=!1,liveAnchors:m,previewSnapTargetHoverEnabled:p=!1,onPreviewSnapTargetNodeClick:A,onAnnotationSelect:f,onNodeAnnotationsSelect:T,onNodeLongPress:k,canStartNodeEditing:N,onReferenceNodeClick:v,onReferenceNodeHover:b,onReferenceEdgeClick:h,insertNodeTargetAnnotationIds:S=[],onInsertNodeTargetClick:I,onDistanceTriangleCornerClick:E})=>{const O=g.useMemo(()=>Vo(d),[d]),R=!!(p&&A);av(e,{edges:a,formatOptions:u,lineLabelOptions:O,surfaceKey:n,activeEditedNodeId:t?c:null,blockEdgeInteractions:!t||R||c!==null,onAnnotationSelect:f,onEdgeClick:h,insertNodeTargetAnnotationIds:S,onInsertNodeTargetClick:I,onDistanceTriangleCornerClick:E,liveAnchors:m}),fv(e,i),dv(e,i,n);const P=g.useMemo(()=>new Set(l),[l]),x=g.useMemo(()=>Hl(r),[r]),M=g.useMemo(()=>c?x.get(c)??c:null,[c,x]),F=g.useCallback(Z=>M!==null&&typeof Z=="string"&&(x.get(Z)??Z)===M,[x,M]),G=g.useMemo(()=>c===null?s:s.map(Z=>Iv(Z,F)),[c,F,s]),H=c!==null&&!y,j=!!(H&&v),J=!!(H&&b),W=g.useMemo(()=>bv({points:o,pointLabels:G,selectedAnnotationIdSet:P,previewSnapTargetsEnabled:R,referenceNodeClickEnabled:j,referenceNodeHoverEnabled:J,nodeLinkIdByNodeId:x,previewNodeLinkId:M,isInPreviewNodeLink:F,onAnnotationSelect:f,onNodeAnnotationsSelect:T,onNodeLongPress:k,canStartNodeEditing:N,onPreviewSnapTargetNodeClick:A,onReferenceNodeClick:v,onReferenceNodeHover:b,enableHostInteractionTargets:t}),[t,F,x,f,T,k,N,A,v,b,G,o,M,R,j,J,P]);pT(e,W.visibleStandalonePoints,m,`${n}-runtime-point-marker`),dT(e,W.pointLabels,m,F,`${n}-runtime-point-label`,O)},hv=(e,{baseVisualModels:n,overlayVisualModels:t,linkedNodeGroups:o,effectiveLinkedNodeGroups:r,selectedAnnotationIds:a,formatOptions:i,lineLabelOptions:s,activeEditedNodeId:l,isMoveGizmoDragging:u,liveAnchors:d,previewSnapTargetHoverEnabled:c,onPreviewSnapTargetNodeClick:y,onAnnotationSelect:m,onNodeAnnotationsSelect:p,onNodeLongPress:A,canStartNodeEditing:f,onReferenceNodeClick:T,onReferenceNodeHover:k,onPreviewNodeHover:N,onReferenceEdgeClick:v,insertNodeTargetAnnotationIds:b,onInsertNodeTargetClick:h,onDistanceTriangleCornerClick:S})=>{Ki(e,{surfaceKey:"committed",enableHostInteractionTargets:!0,points:n.points??[],linkedNodeGroups:o,edges:n.edges??[],polygonFills:n.polygonFills??[],pointLabels:n.pointLabels??[],selectedAnnotationIds:a,formatOptions:i,lineLabelOptions:s,activeEditedNodeId:l,isMoveGizmoDragging:u,liveAnchors:d,previewSnapTargetHoverEnabled:c,onPreviewSnapTargetNodeClick:y,onAnnotationSelect:m,onNodeAnnotationsSelect:p,onNodeLongPress:A,canStartNodeEditing:f,onReferenceNodeClick:T,onReferenceNodeHover:l!==null?k:N,onReferenceEdgeClick:v,insertNodeTargetAnnotationIds:b,onInsertNodeTargetClick:h,onDistanceTriangleCornerClick:S});const I=l!==null;Ki(e,{surfaceKey:"preview",enableHostInteractionTargets:I,points:(t==null?void 0:t.points)??[],linkedNodeGroups:r,edges:(t==null?void 0:t.edges)??[],polygonFills:(t==null?void 0:t.polygonFills)??[],pointLabels:(t==null?void 0:t.pointLabels)??[],selectedAnnotationIds:a,formatOptions:i,lineLabelOptions:s,activeEditedNodeId:l,isMoveGizmoDragging:u,liveAnchors:d,onNodeLongPress:I?A:void 0,canStartNodeEditing:I?f:void 0,onReferenceNodeClick:I?T:void 0,onReferenceNodeHover:I?k:void 0})},Tt={},ct=e=>Object.keys(e).length>0,Xi=(e,n)=>{const t=Object.keys(e),o=Object.keys(n);return t.length!==o.length?!1:t.every(r=>{const a=e[r],i=n[r];return ha(a,i)})},Sv=(e,n)=>ct(n)?e.map(t=>{const o=n[t.id];return o?{...t,coordinate:o}:t}):e,Cv=({annotationEntries:e,coordinateOverrides:n})=>{const t=new Set(Object.keys(n));return new Set(e.flatMap(o=>o.nodeIds.some(r=>t.has(r))?[o.id]:[]))},dn=({models:e,isAffected:n,keepAffected:t})=>{if(!e)return;const o=e.filter(r=>n(r)===t);return o.length>0?o:void 0},Ev=({point:e,affectedAnnotationIdSet:n,movedNodeIdSet:t})=>typeof e.annotationId=="string"&&n.has(e.annotationId)||typeof e.nodeId=="string"&&t.has(e.nodeId),Ov=({edge:e,affectedAnnotationIdSet:n,movedNodeIdSet:t})=>{var o;return typeof e.annotationId=="string"&&n.has(e.annotationId)||!!((o=e.nodeIds)!=null&&o.some(r=>t.has(r)))},Rv=({polygonFill:e,affectedAnnotationIdSet:n,movedNodeIdSet:t})=>{var o;return typeof e.annotationId=="string"&&n.has(e.annotationId)||!!((o=e.nodeIds)!=null&&o.some(r=>t.has(r)))},Lv=({pointLabel:e,affectedAnnotationIdSet:n,movedNodeIdSet:t})=>{var o;return typeof e.annotationId=="string"&&n.has(e.annotationId)||typeof e.nodeId=="string"&&t.has(e.nodeId)||!!((o=e.coordinateCandidates)!=null&&o.some(r=>typeof r.nodeId=="string"&&t.has(r.nodeId)))},wv=({baseVisualModels:e,overlayVisualModels:n,annotationEntries:t,coordinateOverrides:o})=>{var m,p,A,f;if(!ct(o))return{baseVisualModels:e,overlayVisualModels:null};const r=new Set(Object.keys(o)),a=Cv({annotationEntries:t,coordinateOverrides:o}),i=T=>Ev({point:T,affectedAnnotationIdSet:a,movedNodeIdSet:r}),s=T=>Ov({edge:T,affectedAnnotationIdSet:a,movedNodeIdSet:r}),l=T=>Rv({polygonFill:T,affectedAnnotationIdSet:a,movedNodeIdSet:r}),u=T=>Lv({pointLabel:T,affectedAnnotationIdSet:a,movedNodeIdSet:r}),d={points:dn({models:e.points,isAffected:i,keepAffected:!1}),edges:dn({models:e.edges,isAffected:s,keepAffected:!1}),polygonFills:dn({models:e.polygonFills,isAffected:l,keepAffected:!1}),pointLabels:dn({models:e.pointLabels,isAffected:u,keepAffected:!1})},c={points:dn({models:n.points,isAffected:i,keepAffected:!0}),edges:dn({models:n.edges,isAffected:s,keepAffected:!0}),polygonFills:dn({models:n.polygonFills,isAffected:l,keepAffected:!0}),pointLabels:dn({models:n.pointLabels,isAffected:u,keepAffected:!0})},y=!!((m=c.points)!=null&&m.length)||!!((p=c.edges)!=null&&p.length)||!!((A=c.polygonFills)!=null&&A.length)||!!((f=c.pointLabels)!=null&&f.length);return{baseVisualModels:d,overlayVisualModels:y?c:null}},qv=({plugins:e,...n})=>{const t=e.map(o=>{var r;return((r=o.visualModels)==null?void 0:r.build(n))??null}).filter(o=>!!o);return{points:t.flatMap(o=>o.points??[]),edges:t.flatMap(o=>o.edges??[]),polygonFills:t.flatMap(o=>o.polygonFills??[]),pointLabels:t.flatMap(o=>o.pointLabels??[])}},xv=({plugins:e,nodes:n,edges:t,linkedNodeGroups:o,annotationEntries:r,draftStatesByToolType:a,elevationReferenceAnnotationId:i,selectedAnnotationId:s,selectedAnnotationIds:l,isSelectionAdditiveModifierPressed:u,onAnnotationSelect:d,setElevationReferenceAnnotationId:c,toggleAnnotationElevationDisplayMode:y,onNodeLongPress:m,formatOptions:p,draftNodeCoordinateOverrides:A,effectiveNodes:f,effectiveLinkedNodeGroups:T})=>{const k=g.useCallback((b,h)=>qv({plugins:e,nodes:b,edges:t,linkedNodeGroups:h,annotationEntries:r,draftStatesByToolType:a,elevationReferenceAnnotationId:i,selectedAnnotationId:s,selectedAnnotationIds:l,isSelectionAdditiveModifierPressed:u,setSelectedAnnotationId:d,setElevationReferenceAnnotationId:c,toggleAnnotationElevationDisplayMode:y,onNodeLongPress:m,formatOptions:p}),[r,a,t,i,p,u,d,m,e,s,l,c,y]),N=g.useMemo(()=>k(n,o),[k,o,n]),v=g.useMemo(()=>ct(A)?k(f,T):null,[k,A,T,f]);return g.useMemo(()=>{if(!v)return{baseVisualModels:N,overlayVisualModels:null};const b=wv({baseVisualModels:N,overlayVisualModels:v,annotationEntries:r,coordinateOverrides:A});return{baseVisualModels:b.baseVisualModels,overlayVisualModels:b.overlayVisualModels}},[r,N,A,v])},_v=({pickedIds:e,edgeAnnotationIdsById:n,polygonFillAnnotationIdsById:t})=>{for(const o of e){const r=[...n.entries()].find(([a])=>o===a||o.startsWith(`${a}-`));if(r)return{isRuntimeTarget:!0,annotationId:r[1]};if(t.has(o))return{isRuntimeTarget:!0,annotationId:t.get(o)??null}}return{isRuntimeTarget:!1,annotationId:null}},Pv=(e,n)=>{const t=e.getBoundingClientRect();return{x:n.clientX-t.left,y:n.clientY-t.top}},Mv=({engine:e,enabled:n,baseEdges:t,overlayEdges:o,basePolygonFills:r,overlayPolygonFills:a,onAnnotationSelect:i})=>{const s=g.useMemo(()=>new Map([...t,...o].map(u=>[u.id,u.annotationId??null])),[t,o]),l=g.useMemo(()=>new Map([...r,...a].map(u=>[u.id,u.annotationId??null])),[r,a]);return g.useEffect(()=>{if(!V(e)||!n)return;const{canvas:u}=e,d=c=>{if(e.isDestroyed())return;const y=e.pickAnnotationIdsAt(Pv(u,c)),m=_v({pickedIds:y,edgeAnnotationIdsById:s,polygonFillAnnotationIdsById:l});if(m.isRuntimeTarget){i(m.annotationId),e.requestRender();return}i(null),e.requestRender()};return u.addEventListener("click",d),()=>{u.removeEventListener("click",d)}},[s,n,e,i,l]),null},Dv=({annotationsStore:e,isSelectionAdditiveModifierPressed:n})=>g.useCallback(t=>{if(!t){e.dispatch(et(null));return}if(!n){e.dispatch(et(t));return}const o=e.getState().selectionState.selectedAnnotationIds,r=o.includes(t)?o.filter(a=>a!==t):[...o,t];e.dispatch(ut(r))},[e,n]),ld=({draftStore:e,toolTypes:n})=>{const[t,o]=g.useReducer(r=>r+1,0);return g.useEffect(()=>{const r=n.map(a=>e.subscribe(a,o));return()=>{r.forEach(a=>a())}},[e,n]),g.useMemo(()=>Object.fromEntries(n.flatMap(r=>{const a=e.get(r);return a.coordinates.length>0||a.linkedNodeGroupIds.length>0||!!a.feedback?[[r,a]]:[]})),[e,n,t])},Bv=e=>{const[n,t]=g.useState(!1),o=g.useCallback(r=>{t(a=>a===r?a:r)},[]);return g.useEffect(()=>{const r=()=>{o(!1)},a=u=>{o(u.shiftKey)},i=u=>{(u.key===e||u.shiftKey)&&o(u.shiftKey)},s=u=>{(u.key===e||!u.shiftKey)&&o(u.shiftKey)},l=()=>{document.hidden&&r()};return window.addEventListener("keydown",i,!0),window.addEventListener("keyup",s,!0),window.addEventListener("pointerdown",a,!0),window.addEventListener("blur",r),document.addEventListener("visibilitychange",l),()=>{window.removeEventListener("keydown",i,!0),window.removeEventListener("keyup",s,!0),window.removeEventListener("pointerdown",a,!0),window.removeEventListener("blur",r),document.removeEventListener("visibilitychange",l)}},[e,o]),n},zt=(()=>{const e=nm+tm,n=e*2;return Object.freeze({crosshair:Object.freeze({canvasHalfExtentPx:e,canvasSizePx:n,viewBox:`-27 -27 ${n} ${n}`}),selectionAdditiveIndicator:Object.freeze({fontSizeRem:"1.2857rem",offsetPx:Object.freeze({x:15,y:-10})})})})(),Hn={CROSSHAIR:"crosshair",SELECTION_ADDITIVE_INDICATOR:"selection-additive-indicator"},Fv={[Hn.CROSSHAIR]:"annotation-candidate-crosshair-layer",[Hn.SELECTION_ADDITIVE_INDICATOR]:"annotation-selection-additive-indicator-layer"},Gv={[Hn.CROSSHAIR]:"annotation-preview-crosshair",[Hn.SELECTION_ADDITIVE_INDICATOR]:"annotation-selection-additive-indicator"},jv=()=>{const e=sm({canvasSizePx:zt.crosshair.canvasSizePx,foregroundBlendMode:bs.NORMAL,foregroundFill:Zd,pathDefinitions:om,shadowBlendMode:Jd,shadowBlurPx:ec,shadowStrokeColor:nc,shadowStrokeLinejoin:"round",shadowStrokeWidth:Math.max(tc,0)*2,showAura:!0,viewBox:zt.crosshair.viewBox});return $o(e,{display:"none"}),e},Uv=()=>{const e=document.createElement("div");return e.textContent="+",$o(e,{display:"none",color:"rgba(255, 255, 255, 0.98)",fontFamily:'"Segoe UI", "Helvetica Neue", Helvetica, Arial, sans-serif',fontSize:zt.selectionAdditiveIndicator.fontSizeRem,fontWeight:"700",lineHeight:"1",pointerEvents:"none",userSelect:"none",filter:"drop-shadow(0 0 1px rgba(0, 0, 0, 0.98)) drop-shadow(0 1px 2px rgba(0, 0, 0, 0.98))"}),e},Hv=e=>{const n=e===Hn.SELECTION_ADDITIVE_INDICATOR?Uv():jv();return n.id=Gv[e],n},oo=e=>{const n=e.getBoundingClientRect();return{left:n.left,top:n.top,right:n.right,bottom:n.bottom}},zv=(e,n)=>!!(n&&e.x>=n.left&&e.x<=n.right&&e.y>=n.top&&e.y<=n.bottom),Zi=(e,n=null,{enabled:t=!0,variant:o=Hn.CROSSHAIR}={})=>{const r=g.useRef(t),a=g.useRef(null),i=g.useRef(n),s=g.useRef(()=>{});r.current=t,i.current=n,g.useEffect(()=>{s.current(a.current,i.current)},[n,t]),g.useEffect(()=>{if(!e||e.isDestroyed())return;const l=La(e,Fv[o],ce.VISUALIZER),u=l==null?void 0:l.parentElement;if(!l||!(u instanceof HTMLElement))return;const d=e.pointer.register();$o(l,{zIndex:Le.layerZIndex});const c=Hv(o);l.appendChild(c);let y=oo(u),m=oo(e.canvas);const p=()=>{c.style.display="none"},A=(N,v)=>{if(a.current=N,i.current=v,!r.current){p();return}const b=N!==null&&zv(N,m);if(o===Hn.SELECTION_ADDITIVE_INDICATOR){if(N&&y&&b){c.style.display="block",c.style.transform=`translate(${N.x-y.left+zt.selectionAdditiveIndicator.offsetPx.x}px, ${N.y-y.top+zt.selectionAdditiveIndicator.offsetPx.y}px)`;return}p();return}if(N&&y&&b){c.style.display="block",c.style.transform=`translate(${N.x-y.left}px, ${N.y-y.top}px) translate(-50%, -50%)`;return}if(b&&v&&m&&y&&Number.isFinite(v.x)&&Number.isFinite(v.y)){c.style.display="block",c.style.transform=`translate(${v.x+m.left-y.left}px, ${v.y+m.top-y.top}px) translate(-50%, -50%)`;return}p()};s.current=A;const f=()=>{y=oo(u),m=oo(e.canvas),A(a.current,i.current)},T=typeof ResizeObserver<"u"?new ResizeObserver(()=>{f()}):null;T==null||T.observe(u),T==null||T.observe(e.canvas),window.addEventListener("resize",f),window.addEventListener("scroll",f,!0);const k=e.pointer.subscribeClientPosition(N=>{A(N,i.current)});return A(e.pointer.getClientPosition(),i.current),()=>{T==null||T.disconnect(),window.removeEventListener("resize",f),window.removeEventListener("scroll",f,!0),k(),d(),Ht(l)}},[e,o])},wa={FREE:"free",GROUND:"ground",MEASUREMENT_PLANE:"measurement-plane"},bt=Object.freeze({frame:wa.FREE,axes:!0,surfaceDrag:!0,projectOntoMeasurementPlane:!1}),Vv=Object.freeze({frame:wa.GROUND,axes:!1,surfaceDrag:!0,projectOntoMeasurementPlane:!1}),Ji=Object.freeze({frame:wa.MEASUREMENT_PLANE,axes:!1,surfaceDrag:!1,projectOntoMeasurementPlane:!0}),$v=Object.freeze({[q.POINT]:bt,[q.DISTANCE]:bt,[q.POLYLINE]:bt,[q.LABEL]:bt,[q.AREA_GROUND]:Vv,[q.AREA_PLANAR]:Ji,[q.AREA_VERTICAL]:Ji}),Yv=e=>e&&$v[e]||bt,Wv=(e,n,t)=>{for(let o=t.length-1;o>=0;o-=1){const r=n.find(a=>a.id===t[o]&&a.nodeIds.includes(e));if(r)return r}return n.find(o=>o.nodeIds.includes(e))??null},Qv=.05,Kv=(e,n)=>{const t=new Map(n.map(r=>[r.id,U(r.coordinate)]));return $y({id:e.id,type:e.toolType,nodeIds:[...e.nodeIds],edgeRelationIds:[],closed:e.closed??!0,planeLocked:!0},t).plane??null},Xv=(e,n)=>_n(fl(U(e),n)),Zv=(e,n)=>{const t=U(e);return t.distanceTo(fl(t,n))>Qv},Co={referenceNodeInteractionReleaseGuardMs:48,draftPreviewFlushIntervalMs:200,labels:{verticalAxis:"Punkt entlang der U-Achse verschieben",eastAxis:"Punkt entlang der E-Achse verschieben",northAxis:"Punkt entlang der N-Achse verschieben",genericAxis:"Punkt entlang der Achse verschieben",outerDisc:"Punkt auf Höhenebene verschieben",surfacePlane:"Punkt auf Oberfläche verschieben",freePlane:"Punkt in der Ebene verschieben"},referenceLineAxis:{primary:{id:"reference-line-parallel",color:"rgba(59, 130, 246, 0.98)",title:"Punkt parallel zur Referenzlinie verschieben"},secondary:{id:"reference-line-secondary",color:"rgba(34, 197, 94, 0.98)",title:"Punkt orthogonal zur Referenzlinie verschieben"},tertiary:{id:"reference-line-tertiary",color:"rgba(239, 68, 68, 0.98)",title:"Punkt entlang der aktiven Referenzebene verschieben"}}},Jv=new Set([q.POINT,q.DISTANCE]),eN=({activeEditedNodeId:e,annotationEntries:n,selectedAnnotationIds:t})=>{if(!e)return!1;const o=new Set(t);return n.some(r=>o.has(r.id)&&r.nodeIds.includes(e)&&Jv.has(r.toolType))},es=e=>{e.current!==null&&typeof window<"u"&&(window.clearTimeout(e.current),e.current=null)},nN=({annotationsStore:e,selectedAnnotationIds:n})=>{const[t,o]=g.useState(Tt),[r,a]=g.useState(null),i=g.useRef(Tt),s=g.useRef(null),l=g.useRef(null),u=g.useRef(0),d=g.useRef(null),c=g.useRef(null),y=g.useRef(null),m=g.useRef(null),p=g.useCallback(()=>{l.current=null,u.current=typeof performance<"u"?performance.now():0,a(()=>s.current),o(N=>Xi(N,i.current)?N:i.current)},[]),A=g.useCallback(()=>{if(l.current!==null)return;if(typeof window>"u"){p();return}const v=(typeof performance<"u"?performance.now():0)-u.current,b=Math.max(0,Co.draftPreviewFlushIntervalMs-v);l.current=window.setTimeout(p,b)},[p]),f=g.useCallback(({nextDraftNodeCoordinateOverrides:N,nextDraftLinkToNodeId:v})=>{const b=ct(N)?N:Tt,h=!Xi(i.current,b),S=s.current!==v;!h&&!S||(i.current=b,s.current=v,A())},[A]),T=g.useCallback(()=>{es(l),i.current=Tt,s.current=null,d.current=null,c.current=null,y.current=null,m.current=null,a(null),o(N=>ct(N)?Tt:N)},[]),k=g.useCallback(N=>{if(!N){T();return}const v=i.current,b=v[N]??t[N];if(!b){T();return}e.dispatch(Af({nodeId:N,coordinate:b,movedNodeIds:Object.keys(v),linkToNodeId:s.current,selectedAnnotationIds:n})),T()},[e,T,t,n]);return g.useEffect(()=>()=>es(l),[]),{draftNodeCoordinateOverrides:t,draftLinkToNodeId:r,snappedNodeIdRef:d,draftBaseCoordinateRef:c,draftBaseScreenPositionRef:y,hoveredReferenceNodeIdRef:m,updateDraftPreviewState:f,clearDraftNodeCoordinateOverrides:T,commitDraftNodeCoordinateOverrides:k}},tN=e=>{const n=Ee(e);if(!n)return null;const t=ra(n),{primary:o,secondary:r,tertiary:a}=Co.referenceLineAxis;return{axisDirection:n,axisTitle:o.title,preferredAxisId:o.id,axisCandidates:[{id:o.id,direction:n,color:o.color,title:o.title},{id:r.id,direction:t.xAxis,color:r.color,title:r.title},{id:a.id,direction:t.yAxis,color:a.color,title:a.title}]}},oN=({activeEditedNodeId:e,activeNodeEditRule:n,nodesById:t,areReferenceInteractionsSuppressed:o,setDraftCoordinateForScopedMove:r,setAxisOverride:a,draftBaseCoordinateRef:i,draftBaseScreenPositionRef:s,hoveredReferenceNodeIdRef:l,nodes:u})=>{const d=g.useCallback(p=>{var A;return i.current??((A=u.find(f=>f.id===p))==null?void 0:A.coordinate)??null},[i,u]),c=g.useCallback(p=>{if(!e||o())return!1;const A=t.get(e),f=t.get(p);if(!A||!f)return!1;if(A.id!==f.id){const T={...A.coordinate,altitude:f.coordinate.altitude};l.current=null,i.current=T,r(A.id,T,{disableSnap:!0})}return!0},[e,o,i,l,t,r]),y=g.useCallback((p,A)=>{if(!e||o())return;const f=d(e),T=t.get(p);if(f){if(A){l.current=p,r(e,{...f,altitude:(T==null?void 0:T.coordinate.altitude)??f.altitude},{disableSnap:!0});return}l.current===p&&(l.current=null,r(e,f,{screenPosition:s.current??void 0,disableSnap:!0}))}},[e,o,s,l,t,d,r]),m=g.useCallback((p,A)=>{if(!e||!n.axes||o())return!1;const f=t.get(p),T=t.get(A);if(!f||!T)return!1;const k=tN(new w().subVectors(U(T.coordinate),U(f.coordinate)));return k?(a(k),!0):!1},[e,n,o,t,a]);return{handleReferenceNodeClick:c,handleReferenceNodeHover:y,handleReferenceEdgeClick:m}},rN=({engine:e,nodes:n,linkedNodeGroups:t,annotationsStore:o,selectedAnnotationIds:r,measurementEditPlane:a,liveAnchors:i,updateDraftPreviewState:s,snappedNodeIdRef:l,draftBaseCoordinateRef:u,draftBaseScreenPositionRef:d,hoveredReferenceNodeIdRef:c})=>g.useCallback((y,m,{screenPosition:p,forcedSnappedNodeId:A,rememberBaseCoordinate:f=!1,disableSnap:T=!1}={})=>{const k=a?Xv(m,a):m,{movedNodeIds:N}=su({nodeId:y,nodes:n,linkedNodeGroups:t,annotationEntries:o.getState().annotationEntries,selectedAnnotationIds:r});if(N.length===0)return;f&&(u.current=k,d.current=p??null);const v=(S,I)=>{const E=U(S);N.forEach(O=>{i.set(O,E)}),s({nextDraftNodeCoordinateOverrides:Object.fromEntries(N.map(O=>[O,S])),nextDraftLinkToNodeId:I})};if(T){l.current=null,v(k,null);return}const b=e&&!e.isDestroyed()?e.worldToScreen(U(k))??void 0:void 0;let h=pu({engine:e,nodes:n,linkedNodeGroups:t,coordinate:k,screenPosition:p??d.current??b,forcedSnappedNodeId:A??c.current,lockedNodeId:l.current,excludedNodeIds:N});a&&h.snappedNodeId!==null&&Zv(h.coordinate,a)&&(h={...h,coordinate:k,snappedNodeId:null}),l.current=h.snappedNodeId,v(h.coordinate,h.snappedNodeId)},[a,o,t,i,n,e,r,s,l,u,d,c]),aN=e=>{},iN=(e,n,t,{annotationsStore:o,annotationEntries:r,selectedAnnotationIds:a,onActiveEditedNodeIdChange:i,referenceObjectSizing:s=mu,liveAnchors:l})=>{const u=g.useMemo(()=>Cu(()=>{}),[]),d=l??u,[c,y]=g.useState(null),[m,p]=g.useState(!1),[A,f]=g.useState(null),T=g.useRef(!1),k=g.useRef(0),{draftNodeCoordinateOverrides:N,draftLinkToNodeId:v,snappedNodeIdRef:b,draftBaseCoordinateRef:h,draftBaseScreenPositionRef:S,hoveredReferenceNodeIdRef:I,updateDraftPreviewState:E,clearDraftNodeCoordinateOverrides:O,commitDraftNodeCoordinateOverrides:R}=nN({annotationsStore:o,selectedAnnotationIds:a}),L=g.useMemo(()=>c?Wv(c,r,a):null,[c,r,a]),P=g.useMemo(()=>Yv(L==null?void 0:L.toolType),[L]),x=g.useMemo(()=>L&&P.projectOntoMeasurementPlane?Kv(L,n):null,[L,P,n]),M=g.useMemo(()=>x?Ae(x.normalECEF):null,[x]),F=g.useMemo(()=>eN({activeEditedNodeId:c,annotationEntries:r,selectedAnnotationIds:a}),[c,r,a]),G=g.useCallback(()=>T.current||Date.now()<k.current,[]),H=rN({engine:e,nodes:n,linkedNodeGroups:t,annotationsStore:o,selectedAnnotationIds:a,measurementEditPlane:x,liveAnchors:d,updateDraftPreviewState:E,snappedNodeIdRef:b,draftBaseCoordinateRef:h,draftBaseScreenPositionRef:S,hoveredReferenceNodeIdRef:I}),j=g.useMemo(()=>Sv(n,N),[N,n]),J=g.useMemo(()=>{const _=Object.keys(N),$=c??_[0]??null;return!$||_.length===0?t:Vl({nodes:j,nodeLinks:t,nodeId:$,movedNodeIds:_,linkToNodeId:v})},[c,v,N,j,t]),W=g.useMemo(()=>new Map(j.map(_=>[_.id,_])),[j]),Z=g.useCallback(_=>{r.some(z=>z.nodeIds.includes(_)&&a.includes(z.id)&&!z.locked&&!z.readOnly)&&(c&&c!==_&&R(c),f(null),y(_))},[c,r,R,a]),{handleReferenceNodeClick:Te,handleReferenceNodeHover:ve,handleReferenceEdgeClick:Q}=oN({activeEditedNodeId:c,activeNodeEditRule:P,nodes:n,nodesById:W,areReferenceInteractionsSuppressed:G,setDraftCoordinateForScopedMove:H,setAxisOverride:f,draftBaseCoordinateRef:h,draftBaseScreenPositionRef:S,hoveredReferenceNodeIdRef:I}),ae=g.useCallback(_=>{if(T.current=_,p(_),_||!c){_&&(k.current=0);return}k.current=Date.now()+Co.referenceNodeInteractionReleaseGuardMs,R(c)},[c,R]),Ne=g.useMemo(()=>j.map(_=>({id:_.id,geometryECEF:U(_.coordinate)})),[j]),He=g.useCallback((_,$,z)=>{H(_,_n($),{screenPosition:z,rememberBaseCoordinate:!0})},[H]);return((e==null?void 0:e.hooks.usePointMoveGizmo)??aN)({points:Ne,labels:Co.labels,movePointId:c,axisDirection:(A==null?void 0:A.axisDirection)??null,discPlaneNormal:M,axisTitle:(A==null?void 0:A.axisTitle)??null,preferredAxisId:(A==null?void 0:A.preferredAxisId)??null,axisCandidates:(A==null?void 0:A.axisCandidates)??null,radius:s.worldRadiusMeters,discScalingMode:s.scalingMode,discOutlineScreenPixelRadius:s.targetScreenRadiusCssPx,discResizeWorldRadiusToScreenTarget:s.resizeWorldRadiusToScreenTarget,discQuantizeWorldRadius:s.quantizeWorldRadius,freezeDiscScaleDuringDrag:s.resizeWorldRadiusToScreenTarget,discResizeStepFactor:s.resizeStepFactor,showRotationHandle:!1,showAxes:P.axes,snapPlaneDragToGround:P.surfaceDrag,excludeRegisteredDragSampleOccluders:F,onDragStateChange:ae,onPointPositionChange:He,onExit:()=>{R(c),T.current=!1,p(!1),f(null),y(null)}}),g.useEffect(()=>{if(!c){O();return}j.some(_=>_.id===c)||(O(),f(null),y(null))},[c,O,j]),g.useEffect(()=>{!c||!n.some($=>$.id===c)||r.some($=>$.nodeIds.includes(c)&&a.includes($.id))||(R(c),f(null),y(null))},[c,r,R,n,a]),g.useEffect(()=>{var _;c&&(h.current=((_=n.find($=>$.id===c))==null?void 0:_.coordinate)??null,S.current=null,I.current=null)},[c,h,S,I,n]),g.useEffect(()=>{i==null||i(c)},[c,i]),g.useEffect(()=>{m||ct(N)||(d.clear(),e&&!e.isDestroyed()&&e.requestRender())},[N,m,d,e]),{activeEditedNodeId:c,draftNodeCoordinateOverrides:N,effectiveLinkedNodeGroups:J,effectiveNodes:j,handleNodeLongPress:Z,isMoveGizmoDragging:m,handleReferenceNodeClick:Te,handleReferenceNodeHover:ve,handleReferenceEdgeClick:Q}},sN=e=>e===St.START_COORDINATE?St.END_COORDINATE:St.START_COORDINATE,lN=e=>St.START_COORDINATE,pI=e=>e===Ye.LEFTMOST_SCREEN_SPACE?Ye.RIGHTMOST_SCREEN_SPACE:Ye.LEFTMOST_SCREEN_SPACE,uN=e=>{const n=e[0],t=e[e.length-1];if(!n||!t)return Ye.RIGHTMOST_SCREEN_SPACE;const o=U(n),r=U(t),a=ys(o,r);return Math.hypot(a.east,a.north)>It.referenceLineEpsilonMeters?Ye.LEFTMOST_SCREEN_SPACE:Ye.RIGHTMOST_SCREEN_SPACE},dN=e=>new Map(e.map(n=>[n.id,n.coordinate])),cN=(e,n)=>e.nodeIds.map(t=>n.get(t)).filter(t=>!!t),qa=({annotationEntries:e,nodes:n,annotationId:t})=>{if(!t)return[];const o=Dt(e,t);return o?cN(o,dN(n)):[]},Zr=({annotationEntries:e,nodes:n,annotationId:t})=>qa({annotationEntries:e,nodes:n,annotationId:t}).flatMap(o=>o?[U(o)]:[]),{POLYLINE:mN,AREA_GROUND:yN,AREA_PLANAR:pN,AREA_VERTICAL:gN}=q,ns=e=>e===mN||e===yN||e===pN||e===gN,fN=(e,n)=>_n(new w().addVectors(U(e),U(n)).multiplyScalar(.5)),AN=({engine:e,nodes:n,linkedNodeGroups:t,annotationEntries:o,selectedAnnotationIds:r,annotationsStore:a,activeEditedNodeId:i,isInteractionToolActive:s,isMeasurementToolActive:l,isSelectionAdditiveModifierPressed:u,onActiveEditedNodeIdChange:d,onHoveredPointQueryNodeIdChange:c,referenceObjectSizing:y,liveAnchors:m})=>{const p=i===null&&l,{draftNodeCoordinateOverrides:A,effectiveLinkedNodeGroups:f,effectiveNodes:T,handleNodeLongPress:k,isMoveGizmoDragging:N,handleReferenceNodeClick:v,handleReferenceNodeHover:b,handleReferenceEdgeClick:h}=iN(e,n,t,{annotationsStore:a,annotationEntries:o,selectedAnnotationIds:r,onActiveEditedNodeIdChange:d,referenceObjectSizing:y,liveAnchors:m}),S=g.useCallback(R=>{const L=a.getState(),P=Dt(L.annotationEntries,R);if(!P)return;const x=qa({annotationEntries:L.annotationEntries,nodes:L.nodes,annotationId:R}),M=P.distanceTriangleAnchorCoordinateRole??lN(),F=(P.distanceAnchorCoordinateSelection??uN(x))===Ye.LEFTMOST_SCREEN_SPACE?Ye.RIGHTMOST_SCREEN_SPACE:Ye.LEFTMOST_SCREEN_SPACE;a.dispatch(On({annotationId:R,distanceAnchorCoordinateSelection:F,distanceTriangleAnchorCoordinateRole:sN(M)}))},[a]),I=g.useMemo(()=>{const R=new Set(r);return o.filter(L=>R.has(L.id)&&!L.locked&&!L.readOnly&&ns(L.toolType)).map(L=>L.id)},[o,r]),E=g.useCallback((R,L,P)=>{const x=a.getState(),M=Dt(x.annotationEntries,R);if(!M||M.locked||M.readOnly||!ns(M.toolType))return!1;const F=x.nodes.find(H=>H.id===L),G=x.nodes.find(H=>H.id===P);return!F||!G?!1:(a.dispatch(ff({annotationId:R,startNodeId:L,endNodeId:P,coordinate:fN(F.coordinate,G.coordinate)})),e==null||e.requestRender(),!0)},[a,e]),O=g.useCallback((R,L)=>{c(L?R:null)},[c]);return g.useEffect(()=>{p||c(null)},[c,p]),Zi(e,null,{enabled:p}),Zi(e,null,{enabled:s&&u,variant:"selection-additive-indicator"}),{draftNodeCoordinateOverrides:A,effectiveLinkedNodeGroups:f,effectiveNodes:T,handleDistanceTriangleCornerClick:S,handleInsertNodeTargetClick:E,handleNodeLongPress:k,handlePreviewSnapTargetNodeHover:O,handleReferenceEdgeClick:h,handleReferenceNodeClick:v,handleReferenceNodeHover:b,insertNodeTargetAnnotationIds:I,isMoveGizmoDragging:N,previewSnapTargetHoverEnabled:p}},ud=({engine:e,registry:n,annotationsStore:t,annotationToolDraftStore:o,setElevationReferenceAnnotationId:r,toggleAnnotationElevationDisplayMode:a,onActiveEditedNodeIdChange:i,onHoveredPointQueryNodeIdChange:s,onPreviewSnapTargetNodeClick:l,activeEditedNodeId:u,formatOptions:d,lineLabelOptions:c,referenceObjectSizing:y,visualInteractionEnabled:m=!1,visualAnnotationEntryRoles:p})=>{const{invalidatePositions:A}=Ro(),f=g.useMemo(()=>Cu(A),[A]),T=ne(Y=>Y.annotationToolType),k=g.useMemo(()=>n.getPlugin(T)??null,[T,n]),N=(k==null?void 0:k.kind)===bo.INTERACTION,v=(k==null?void 0:k.kind)===bo.MEASUREMENT,b=ne(Y=>Y.nodes),h=ne(Y=>Y.linkedNodeGroups),S=ne(Y=>Y.edges),I=ne(Y=>Y.annotationEntries),E=g.useMemo(()=>Eg({annotationEntries:I},{roles:p}).map(re=>re.readOnly&&!re.locked?{...re,locked:!0}:re),[I,p]),O=ne(Ho),R=ne(Y=>Y.selectionState.selectedAnnotationIds),L=g.useMemo(()=>n.plugins.map(Y=>Y.id),[n.plugins]),P=ld({draftStore:o,toolTypes:L}),x=ne(Y=>Y.settingsState.elevationReferenceAnnotationId),M=Bv(wn.additiveSelectionModifierKey),F=Dv({annotationsStore:t,isSelectionAdditiveModifierPressed:M}),G=g.useCallback(Y=>{const re=Array.from(new Set(Y.filter(Boolean)));if(re.length===0)return;if(!M){t.dispatch(ut(re));return}const ye=t.getState().selectionState.selectedAnnotationIds,an=new Set(re),pe=re.every(ge=>ye.includes(ge))?ye.filter(ge=>!an.has(ge)):Array.from(new Set([...ye,...re]));t.dispatch(ut(pe))},[t,M]),H=g.useMemo(()=>ga(E),[E]),j=g.useCallback((Y,re)=>T===vn&&!H.has(Y)&&E.some(ye=>(!re||ye.id===re)&&ye.nodeIds.includes(Y)&&R.includes(ye.id)&&!ye.locked&&!ye.readOnly),[T,E,H,R]),{draftNodeCoordinateOverrides:J,effectiveLinkedNodeGroups:W,effectiveNodes:Z,handleDistanceTriangleCornerClick:Te,handleInsertNodeTargetClick:ve,handleNodeLongPress:Q,handlePreviewSnapTargetNodeHover:ae,handleReferenceEdgeClick:Ne,handleReferenceNodeClick:He,handleReferenceNodeHover:B,insertNodeTargetAnnotationIds:_,isMoveGizmoDragging:$,previewSnapTargetHoverEnabled:z}=AN({engine:e,nodes:b,linkedNodeGroups:h,annotationEntries:E,selectedAnnotationIds:R,annotationsStore:t,activeEditedNodeId:u,isInteractionToolActive:N,isMeasurementToolActive:v,isSelectionAdditiveModifierPressed:M,onActiveEditedNodeIdChange:i,onHoveredPointQueryNodeIdChange:s,referenceObjectSizing:y,liveAnchors:f}),{baseVisualModels:ke,overlayVisualModels:me}=xv({plugins:n.plugins,nodes:b,edges:S,linkedNodeGroups:h,annotationEntries:E,draftStatesByToolType:P,elevationReferenceAnnotationId:x,selectedAnnotationId:O,selectedAnnotationIds:R,isSelectionAdditiveModifierPressed:M,onAnnotationSelect:F,setElevationReferenceAnnotationId:r,toggleAnnotationElevationDisplayMode:a,onNodeLongPress:Q,formatOptions:d,draftNodeCoordinateOverrides:J,effectiveNodes:Z,effectiveLinkedNodeGroups:W});return hv(e,{baseVisualModels:ke,overlayVisualModels:me,linkedNodeGroups:h,effectiveLinkedNodeGroups:W,selectedAnnotationIds:R,formatOptions:d,lineLabelOptions:c,activeEditedNodeId:u,isMoveGizmoDragging:$,liveAnchors:f,previewSnapTargetHoverEnabled:z,onPreviewSnapTargetNodeClick:l,onAnnotationSelect:F,onNodeAnnotationsSelect:G,onNodeLongPress:Q,canStartNodeEditing:j,onReferenceNodeClick:He,onReferenceNodeHover:B,onPreviewNodeHover:ae,onReferenceEdgeClick:Ne,insertNodeTargetAnnotationIds:_,onInsertNodeTargetClick:ve,onDistanceTriangleCornerClick:Te}),C.jsx(Mv,{engine:e,enabled:N||m,baseEdges:ke.edges??[],overlayEdges:(me==null?void 0:me.edges)??[],basePolygonFills:ke.polygonFills??[],overlayPolygonFills:(me==null?void 0:me.polygonFills)??[],onAnnotationSelect:F})};ud.__docgenInfo={description:"",methods:[],displayName:"RuntimeVisualHost",props:{engine:{required:!0,tsType:{name:"union",raw:"AnnotationEngine | null",elements:[{name:"AnnotationEngine"},{name:"null"}]},description:""},registry:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"scalingMode",value:{name:"ReferenceObjectScalingMode",required:!0}},{key:"worldRadiusMeters",value:{name:"number",required:!0}},{key:"targetScreenRadiusCssPx",value:{name:"number",required:!0}},{key:"resizeWorldRadiusToScreenTarget",value:{name:"boolean",required:!0}},{key:"resizeStepFactor",value:{name:"number",required:!0}},{key:"quantizeWorldRadius",value:{name:"boolean",required:!0}}]}},description:""},visualInteractionEnabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},visualAnnotationEntryRoles:{required:!1,tsType:{name:"unknown"},description:""}}};const TN=(e,n)=>{var t,o;return n?((t=e.externalCollection)==null?void 0:t.type)===n.type&&((o=e.externalCollection)==null?void 0:o.id)===n.id:e.externalCollection===void 0},vN=(e,n,t)=>{const o=new Set(n.nodeIds),r=new Set(n.edgeIds);return{nodes:e.nodes.filter(a=>o.has(a.id)).map(a=>({...a,id:t(a.id)})),edges:e.edges.filter(a=>r.has(a.id)).map(a=>({...a,id:t(a.id),startNodeId:t(a.startNodeId),endNodeId:t(a.endNodeId)})),linkedNodeGroups:e.linkedNodeGroups.filter(a=>a.nodeIds.some(i=>o.has(i))).map(a=>({...a,id:t(a.id),nodeIds:a.nodeIds.filter(i=>o.has(i)).map(t)}))}},NN=(e,n,t={})=>{const{annotationEntries:o,nodes:r}=e.getState(),a=new Set(o.map(({id:d})=>d)),i=new Set(r.map(({id:d})=>d)),s=o.filter(d=>TN(d,t.externalCollection)),l=new Map(s.filter(d=>d.uuid).map(d=>[d.uuid,d])),u=[];for(const d of n.tables.annotationEntries){const c=s.find(T=>T.id===(t.idPrefix?`${t.idPrefix}:${d.id}`:d.id)),y=d.uuid&&l.get(d.uuid)||(c&&(!d.uuid||!c.uuid)?c:void 0);y&&t.replaceExisting&&(e.dispatch(mf({annotationId:y.id})),a.delete(y.id));const m=!y&&(a.has(d.id)||d.nodeIds.some(T=>i.has(T))),p=t.idPrefix??(m?`s${(d.uuid??d.id).replace(/[^a-z0-9]/gi,"").slice(0,8)}`:void 0),A=T=>p?`${p}:${T}`:T,f=y&&t.replaceExisting?y.id:A(d.id);if(t.skipExisting&&!t.replaceExisting&&(y!==void 0||a.has(f))){(t.annotationRole!==void 0||t.readOnly!==void 0)&&e.dispatch(On({annotationId:(y==null?void 0:y.id)??f,annotationRole:t.annotationRole,readOnly:t.readOnly}));continue}e.dispatch(cu({annotationEntry:{...d,id:f,nodeIds:d.nodeIds.map(A),edgeIds:d.edgeIds.map(A),annotationRole:t.annotationRole??d.annotationRole,readOnly:t.readOnly??d.readOnly,externalCollection:t.externalCollection??d.externalCollection},...vN(n.tables,d,A),selectAnnotationId:t.selectAnnotationId})),a.add(f),u.push(f)}return u},kN=(e,n)=>{const t=e.getState().annotationEntries.filter(o=>{var r;return((r=o.externalCollection)==null?void 0:r.type)===n.type&&o.externalCollection.id===n.id}).map(o=>o.id);return t.length===0?[]:(e.dispatch(ka({annotationIds:t,nextSelectedAnnotationId:null})),t)},bN=(e,n,t)=>{if(t){const r=e.getPlugin(t);if(r)return r}const o=e.getPluginsByAnnotationType(n);return o.find(r=>r.addAnnotation)??o[0]??null},IN=({registry:e,engine:n,annotationEntries:t,toolType:o,coordinates:r,options:a,linkedNodeGroupIds:i,sourceToolId:s})=>{var y,m;const l=bN(e,o,s),u=((y=l==null?void 0:l.addAnnotation)==null?void 0:y.resolveOptions({annotationType:o,toolId:s??(l==null?void 0:l.id)??null,engine:n,coordinates:r,options:a,linkedNodeGroupIds:i}))??a;if(!Go(o))return u;const d=Fg({annotationEntries:t,toolType:o}),c=(m=u==null?void 0:u.shortLabel)==null?void 0:m.trim();return{...u,shortLabel:c||ll(o,d),shortLabelSource:c?(u==null?void 0:u.shortLabelSource)??Mt.CUSTOM:Mt.DEFAULT,shortLabelCounter:c?u==null?void 0:u.shortLabelCounter:d}},hN=({engine:e,registry:n,annotationsStore:t,measurementSequenceRef:o,nodeSequenceRef:r,edgeSequenceRef:a})=>g.useCallback((i,s,l,u,d)=>{const{annotationEntry:c,nodes:y,linkedNodeGroups:m,edges:p}=fg({toolType:i,coordinates:s,options:IN({registry:n,engine:e,annotationEntries:t.getState().annotationEntries,toolType:i,coordinates:s,options:l,linkedNodeGroupIds:u,sourceToolId:d}),linkedNodeGroupIds:u,measurementSequenceRef:o,nodeSequenceRef:r,edgeSequenceRef:a});return t.dispatch(cu({annotationEntry:c,nodes:y,linkedNodeGroups:m,edges:p,selectAnnotationId:c.id})),c},[t,n,e,o,r,a]),Rn=(e,n)=>Dt(e.getState().annotationEntries,n),Eo=e=>e!==null&&!e.locked&&!e.readOnly,ts=(e,n)=>n.map(t=>Dt(e,t)).filter(Eo),SN=({annotationsStore:e,activeEditedNodeId:n,setActiveEditedNodeId:t})=>{const o=g.useCallback(d=>{e.dispatch(pf(d))},[e]),r=g.useCallback(d=>{e.dispatch(gf(d))},[e]),a=g.useCallback(d=>{const c=Rn(e,d);c&&e.dispatch(On({annotationId:d,hidden:!c.hidden}))},[e]),i=g.useCallback(d=>{const c=Rn(e,d);if(!c||c.readOnly)return;const y=!c.locked;e.dispatch(On({annotationId:d,locked:y})),y&&c.nodeIds.includes(n??"")&&t(null)},[n,e,t]),s=g.useCallback((d,c)=>{Eo(Rn(e,d))&&e.dispatch(On({annotationId:d,displayName:c.trim()}))},[e]),l=g.useCallback((d,c)=>{Eo(Rn(e,d))&&e.dispatch(On({annotationId:d,shortLabel:c.trim(),shortLabelSource:Mt.CUSTOM}))},[e]),u=g.useCallback((d,c)=>{const y=Rn(e,d);y&&e.dispatch(On({annotationId:d,elevationDisplayMode:mg(c??y.elevationDisplayMode)}))},[e]);return{setElevationReferenceAnnotationIdInStore:o,setPointTemporaryModeInStore:r,toggleAnnotationVisibility:a,toggleAnnotationLocked:i,updateAnnotationDisplayName:s,updateAnnotationShortLabel:l,toggleAnnotationElevationDisplayMode:u}},CN=e=>{const n=g.useCallback(r=>{const a=Rn(e,r);if(!a)return;const i=e.getState(),s=Jl({annotation:a,coordinates:qa({annotationEntries:i.annotationEntries,nodes:i.nodes,annotationId:r})});if(!s)return;const{kind:l,name:u}=Xg(a);Ri(`annotation-${Oi(l)}-${Oi(u)}.geojson`,s)},[e]),t=g.useCallback(()=>ru(Ta(e.getState())),[e]),o=g.useCallback(()=>{Ri("annotations.geojson",t())},[t]);return{exportAnnotationGeoJson:n,buildAllAnnotationsGeoJson:t,exportAllAnnotationsGeoJson:o}},Jr=({engine:e,points:n})=>{!V(e)||n.length===0||e.flyToPoints(n,{minRadiusMeters:wn.infoBoxFlyTo.minRadiusMeters,paddingFactor:wn.infoBoxFlyTo.paddingFactor})},EN=({annotationEntries:e,annotationIds:n,nodes:t})=>{const o=new Set(n);return e.filter(r=>o.has(r.id)).flatMap(r=>Zr({annotationEntries:e,annotationId:r.id,nodes:t}))},ON=({annotationEntries:e,annotationIds:n,nodes:t,engine:o})=>{Jr({engine:o,points:EN({annotationEntries:e,annotationIds:n,nodes:t})})},RN=({engine:e,annotationsStore:n,setActiveEditedNodeId:t})=>{const o=g.useCallback(d=>{d===null&&t(null),n.dispatch(et(d))},[n,t]),r=g.useCallback(d=>{d.length===0&&t(null),n.dispatch(ut(d))},[n,t]),a=g.useCallback(()=>{n.dispatch(ut(iu(n.getState())))},[n]),i=g.useCallback(d=>{const c=n.getState();n.dispatch(et(lf(c.annotationEntries,Ho(c),d)))},[n]),s=g.useCallback(d=>{const c=n.getState();Jr({engine:e,points:Zr({annotationEntries:c.annotationEntries,nodes:c.nodes,annotationId:d})})},[n,e]),l=g.useCallback(()=>{const d=n.getState();Jr({engine:e,points:Fo(d).flatMap(c=>Zr({annotationEntries:d.annotationEntries,nodes:d.nodes,annotationId:c.id}))})},[n,e]),u=g.useCallback(d=>{d===null&&t(null),n.dispatch(et(d)),s(d)},[n,s,t]);return{setSelectedAnnotationIdInStore:o,setSelectedAnnotationIdsInStore:r,selectAllAnnotationEntries:a,focusAdjacentAnnotationEntry:i,flyToAnnotationById:s,flyToAllAnnotations:l,focusAnnotationId:u}},LN=({annotationsStore:e,annotationToolDraftStore:n,confirmAnnotationDelete:t})=>{const o=g.useCallback((l,u)=>{if(l.length===0)return Promise.resolve(!1);if(u!=null&&u.skipConfirmation)return Promise.resolve(!0);const d=t??If;return Promise.resolve(d({annotations:l,source:(u==null?void 0:u.source)??Ia.PROGRAMMATIC})).catch(c=>(console.error("[Annotations] Delete confirmation failed",c),!1))},[t]),r=g.useCallback(()=>{const l=e.getState().annotationToolType;return n.get(l).coordinates.length>0},[n,e]),a=g.useCallback((l,u)=>{const d=Array.from(new Set(l));if(d.length===0||r())return;const c=ts(e.getState().annotationEntries,d);c.length!==0&&o(c,u).then(y=>{if(!y)return;const m=ts(e.getState().annotationEntries,c.map(({id:p})=>p)).map(({id:p})=>p);m.length!==0&&e.dispatch(ka({annotationIds:m}))})},[e,r,o]),i=g.useCallback((l,u)=>{Eo(Rn(e,l))&&a([l],u)},[e,a]),s=g.useCallback(l=>{const u=sf(e.getState());u.length!==0&&a(u,l)},[e,a]);return{requestAnnotationDeleteConfirmation:o,removeAnnotationEntriesByIds:a,removeAnnotationEntryById:i,removeSelectedAnnotationEntries:s}},wN=[],qN=[],xN={coordinates:wN,linkedNodeGroupIds:qN,feedback:null},_N=(e,n)=>e.length===n.length&&e.every((t,o)=>t===n[o]),PN=(e,n)=>{var t,o,r,a;return Sa(e.coordinates,n.coordinates)&&_N(e.linkedNodeGroupIds,n.linkedNodeGroupIds)&&((t=e.feedback)==null?void 0:t.kind)===((o=n.feedback)==null?void 0:o.kind)&&((r=e.feedback)==null?void 0:r.message)===((a=n.feedback)==null?void 0:a.message)},MN=()=>{const e=new Map,n=new Map,t=r=>{var a;(a=n.get(r))==null||a.forEach(i=>i())},o=r=>e.get(r)??xN;return{get:o,set:(r,a)=>{const i={coordinates:[...a.coordinates],linkedNodeGroupIds:[...a.linkedNodeGroupIds],feedback:a.feedback??null},s=o(r);if(PN(s,i))return;i.coordinates.length>0||i.linkedNodeGroupIds.length>0||!!i.feedback?e.set(r,i):e.delete(r),t(r)},clear:r=>{e.has(r)&&(e.delete(r),t(r))},subscribe:(r,a)=>{const i=n.get(r)??new Set;return i.add(a),n.set(r,i),()=>{const s=n.get(r);s&&(s.delete(a),s.size===0&&n.delete(r))}}}},DN=()=>{let e=null;const n=new Set;return{getSnapshot:()=>e,setSnapshot:t=>{e!==t&&(e=t,n.forEach(o=>o()))},subscribe:t=>(n.add(t),()=>n.delete(t))}},BN=({registry:e,initialToolType:n,initialPointTemporaryMode:t,initialPersistenceState:o})=>{const r=o?of({initialToolType:n,initialPointTemporaryMode:t,initialPersistenceState:o,isToolTypeAvailable:a=>!!e.getPlugin(a)}):uu({initialToolType:n,initialPointTemporaryMode:t});return{annotationsStore:vf(r),annotationToolDraftStore:MN(),activePointQueryPickResultStore:DN(),sequenceRefs:{measurementSequenceRef:{current:Jn(r.annotationEntries.map(({id:a})=>a))},nodeSequenceRef:{current:Jn(r.nodes.map(({id:a})=>a))},edgeSequenceRef:{current:Jn(r.edges.map(({id:a})=>a))}},lastSerializedPersistenceState:JSON.stringify(Ta(r)),mountedHosts:0}},vt=new Map,FN=e=>{const{storeKey:n,onPersistenceStateChange:t}=e,o=g.useRef(null);let r=n?vt.get(n):o.current;r||(r=BN(e),n?vt.set(n,r):o.current=r);const a=r;return g.useEffect(()=>{if(n)return vt.set(n,a),a.mountedHosts+=1,()=>{a.mountedHosts-=1,a.mountedHosts===0&&vt.get(n)===a&&vt.delete(n)}},[a,n]),g.useEffect(()=>{if(t)return a.annotationsStore.subscribe(()=>{const i=Ta(a.annotationsStore.getState()),s=JSON.stringify(i);s!==a.lastSerializedPersistenceState&&(t(i),a.lastSerializedPersistenceState=s)})},[a,t]),{annotationsStore:a.annotationsStore,annotationToolDraftStore:a.annotationToolDraftStore,activePointQueryPickResultStore:a.activePointQueryPickResultStore,sequenceRefs:a.sequenceRefs}},{DISTANCE:GN,POLYLINE:jN,AREA_GROUND:UN,AREA_PLANAR:HN,AREA_VERTICAL:zN}=q,os=e=>{switch(e.toolType){case GN:case jN:return 2;case UN:case HN:case zN:return 3;default:return null}},VN=({annotationEntries:e,selectedAnnotationIds:n,editedNodeId:t})=>{const o=e.filter(i=>!i.locked&&!i.readOnly&&i.nodeIds.includes(t)&&os(i)!==null);let r=o[0];for(let i=n.length-1;i>=0;i-=1){const s=o.find(({id:l})=>l===n[i]);if(s){r=s;break}}const a=r?os(r):null;return r&&a!==null?{annotation:r,minimumNodeCount:a}:null},$N=({nodeIds:e,editedNodeId:n,closed:t})=>{const o=e.indexOf(n);if(!t||o<0)return e.filter(a=>a!==n);const r=[];for(let a=1;a<e.length;a+=1){const i=e[(o+a)%e.length];i&&i!==n&&r.push(i)}return r},YN=({annotationsStore:e,annotationToolDraftStore:n,activeEditedNodeId:t,setActiveEditedNodeId:o,requestAnnotationDeleteConfirmation:r})=>g.useCallback(()=>{if(!t)return!1;const a=e.getState(),i=VN({annotationEntries:a.annotationEntries,selectedAnnotationIds:a.selectionState.selectedAnnotationIds,editedNodeId:t});if(!i)return!1;const{annotation:s,minimumNodeCount:l}=i,u=s.nodeIds.filter(m=>m!==t);if(u.length>=l)return e.dispatch(yf({annotationId:s.id,nodeId:t})),o(null),!0;const d=$N({nodeIds:s.nodeIds,editedNodeId:t,closed:s.closed===!0});if(d.length!==u.length)return!1;const c=new Map(a.nodes.map(m=>[m.id,m])),y=d.flatMap(m=>{const p=c.get(m);return p?[p]:[]});return y.length!==d.length?!1:(r([s],{source:Ia.KEYBOARD}).then(m=>{m&&(n.set(s.toolType,{coordinates:y.map(p=>p.coordinate),linkedNodeGroupIds:d.map(p=>uo(a.linkedNodeGroups,p)),feedback:null}),e.dispatch(ka({annotationIds:[s.id],nextSelectedAnnotationId:null})),o(null))}),!0)},[t,n,e,r,o]),WN=({annotationsStore:e,setActiveEditedNodeId:n})=>{const t=g.useRef(Yr),o=g.useRef(()=>!1),r=g.useRef(null),a=g.useCallback(m=>{const p=e.getState().annotationToolType;e.dispatch(Tf(m)),p!==m&&(n(null),e.dispatch(et(null)))},[e,n]),i=g.useCallback(m=>{if(t.current===Yr){a(m);return}t.current.requestModeChange(m)},[a]),s=g.useCallback(m=>{t.current=m},[]),l=g.useMemo(()=>({requestModeChange:m=>t.current.requestModeChange(m),requestActivateTool:m=>t.current.requestActivateTool(m),requestFinishMeasurement:()=>t.current.requestFinishMeasurement(),requestPointAt:m=>t.current.requestPointAt(m)}),[]),u=g.useCallback(m=>(o.current=m,()=>{o.current===m&&(o.current=()=>!1)}),[]),d=g.useCallback(m=>o.current(m),[]),c=g.useCallback(m=>{r.current=m},[]),y=g.useCallback(()=>r.current,[]);return{setActiveToolTypeInStore:a,setActiveToolType:i,bindLifecycleHostApi:s,lifecycleRequests:l,bindPreviewSnapTargetNodeClick:u,handlePreviewSnapTargetNodeClick:d,setHoveredPointQueryNodeId:c,getHoveredPointQueryNodeId:y}},QN=({engine:e,plugins:n,initialActiveToolType:t,initialPointTemporaryMode:o,formatOptions:r,lineLabelOptions:a,initialPersistenceState:i,storeKey:s,onPersistenceStateChange:l,requestLabelText:u,confirmAnnotationDelete:d})=>{var ye;const c=g.useMemo(()=>Sg(n),[n]),y=((ye=c.orderedDescriptors[0])==null?void 0:ye.id)??null;if(!y)throw new Error("AnnotationsProvider requires at least one tool plugin.");const{annotationsStore:m,annotationToolDraftStore:p,activePointQueryPickResultStore:A,sequenceRefs:f}=FN({registry:c,initialToolType:t&&c.getPlugin(t)?t:y,initialPointTemporaryMode:o,initialPersistenceState:i,storeKey:s,onPersistenceStateChange:l}),[T,k]=g.useState(null),{setActiveToolTypeInStore:N,setActiveToolType:v,bindLifecycleHostApi:b,lifecycleRequests:h,bindPreviewSnapTargetNodeClick:S,handlePreviewSnapTargetNodeClick:I,setHoveredPointQueryNodeId:E,getHoveredPointQueryNodeId:O}=WN({annotationsStore:m,setActiveEditedNodeId:k}),{setSelectedAnnotationIdInStore:R,setSelectedAnnotationIdsInStore:L,selectAllAnnotationEntries:P,focusAdjacentAnnotationEntry:x,flyToAnnotationById:M,flyToAllAnnotations:F,focusAnnotationId:G}=RN({engine:e,annotationsStore:m,setActiveEditedNodeId:k}),{requestAnnotationDeleteConfirmation:H,removeAnnotationEntriesByIds:j,removeAnnotationEntryById:J,removeSelectedAnnotationEntries:W}=LN({annotationsStore:m,annotationToolDraftStore:p,confirmAnnotationDelete:d}),Z=YN({annotationsStore:m,annotationToolDraftStore:p,activeEditedNodeId:T,setActiveEditedNodeId:k,requestAnnotationDeleteConfirmation:H}),{exportAnnotationGeoJson:Te,buildAllAnnotationsGeoJson:ve,exportAllAnnotationsGeoJson:Q}=CN(m),{setElevationReferenceAnnotationIdInStore:ae,setPointTemporaryModeInStore:Ne,toggleAnnotationVisibility:He,toggleAnnotationLocked:B,updateAnnotationDisplayName:_,updateAnnotationShortLabel:$,toggleAnnotationElevationDisplayMode:z}=SN({annotationsStore:m,activeEditedNodeId:T,setActiveEditedNodeId:k}),ke=hN({engine:e,registry:c,annotationsStore:m,...f}),me=g.useCallback((an,D)=>NN(m,an,D),[m]),Y=g.useCallback(an=>kN(m,an),[m]),re=g.useMemo(()=>({engine:e,registry:c,annotationToolDraftStore:p,annotationsStore:m,formatOptions:r,activeEditedNodeId:T,addAnnotation:ke,appendAnnotationsRuntimePersistenceState:me,removeExternalAnnotationsByCollection:Y,setActiveToolType:v,requestModeChange:h.requestModeChange,requestActivateTool:h.requestActivateTool,requestFinishMeasurement:h.requestFinishMeasurement,requestPointAt:h.requestPointAt,focusAdjacentAnnotationEntry:x,focusAnnotationId:G,flyToAnnotationById:M,flyToAllAnnotations:F,removeAnnotationById:J,removeAnnotationsByIds:j,buildAllAnnotationsGeoJson:ve,exportAnnotationGeoJson:Te,exportAllAnnotationsGeoJson:Q,toggleAnnotationVisibility:He,toggleAnnotationLocked:B,removeSelectedAnnotations:W,selectAllAnnotations:P,setElevationReferenceAnnotationId:ae,toggleAnnotationElevationDisplayMode:z,updateAnnotationDisplayName:_,updateAnnotationShortLabel:$,setPointTemporaryMode:Ne,setSelectedAnnotationId:R,setSelectedAnnotationIds:L}),[ke,me,T,p,m,ve,x,G,Q,Te,F,M,r,h,J,j,Y,W,c,e,P,ae,v,Ne,R,L,B,z,He,_,$]);return{annotationsStore:m,registry:c,services:re,activePointQueryPickResultStore:A,setActiveToolType:v,runtimeAuthoringHost:{engine:e,registry:c,annotationsStore:m,annotationToolDraftStore:p,setActiveToolTypeInStore:N,focusAdjacentAnnotationEntry:x,removeSelectedAnnotations:W,removeEditedNode:Z,addAnnotation:ke,bindPreviewSnapTargetNodeClick:S,activeEditedNodeId:T,getHoveredPointQueryNodeId:O,setHoveredPointQueryNodeId:E,onPointQueryPickResultChange:A.setSnapshot,formatOptions:r,lineLabelOptions:a,bindApi:b,requestLabelText:u},runtimeVisualHost:{engine:e,registry:c,annotationsStore:m,annotationToolDraftStore:p,setElevationReferenceAnnotationId:ae,toggleAnnotationElevationDisplayMode:z,onActiveEditedNodeIdChange:k,onHoveredPointQueryNodeIdChange:E,onPreviewSnapTargetNodeClick:I,activeEditedNodeId:T,formatOptions:r,lineLabelOptions:a}}},KN=({enabled:e=!0}={})=>{const n=g.useRef(null),t=g.useRef([]),[o,r]=g.useState(null),[a,i]=g.useState([]),s=g.useCallback(d=>{const c=n.current;if(n.current=null,r(null),d!==null){const y=Ay(t.current,d);t.current=y,i(y)}c==null||c(d)},[]),l=g.useCallback(({defaultText:d,labelTextSuggestions:c})=>new Promise(y=>{var m;if(!e){y(null);return}(m=n.current)==null||m.call(n,null),n.current=y,r(vy({defaultText:d,labelTextHistory:t.current,labelTextSuggestions:c}))}),[e]);g.useEffect(()=>()=>{var d;(d=n.current)==null||d.call(n,null),n.current=null},[]),g.useEffect(()=>{e||s(null)},[e,s]);const u=g.useMemo(()=>!e||!o?{open:!1,initialValue:"",labelSuggestions:[],onAbort:()=>{},onFinish:()=>{}}:{open:!0,initialValue:o.initialValue,labelSuggestions:ca(a,o.labelSuggestions),onAbort:()=>s(null),onFinish:s},[e,a,o,s]);return g.useMemo(()=>({labelTextDialogState:u,requestLabelText:l}),[u,l])},dd=1500,mo=new WeakMap,ea=e=>{var n;(n=mo.get(e))==null||n()},XN=(e,n,{durationMs:t=dd}={})=>{ea(e);const o=e.getCameraPose();return!o||!(t>0)?Promise.resolve(e.setCameraPose(n)):new Promise(r=>{let a=0,i=!1;const s=c=>{i||(i=!0,cancelAnimationFrame(a),mo.get(e)===l&&mo.delete(e),r(c))},l=()=>s(!1);mo.set(e,l);const u=performance.now(),d=c=>{if(i)return;const y=Math.min(1,(c-u)/t),m=y>=1?n:Jc(o,n,Dc(0,1,y));if(e.isDestroyed()||!e.setCameraPose(m)){s(!1);return}y>=1?s(!0):a=requestAnimationFrame(d)};a=requestAnimationFrame(d)})},Ot=e=>Array.isArray(e)&&e.length===3&&e.every(n=>Number.isFinite(n)),ZN=e=>({position:e.positionECEF.toArray(),direction:e.directionECEF.toArray(),up:e.upECEF.toArray(),fovY:e.verticalFovRad}),rs=e=>{if(!e||!Ot(e.position)||!Ot(e.direction)||!Ot(e.up)||!(e.fovY>0&&e.fovY<fs))return null;const n=new w(...e.direction);if(!(n.lengthSq()>0))return null;n.normalize();const t=rt(new w(...e.up),n);return t.lengthSq()>0?{positionECEF:new w(...e.position),directionECEF:n,upECEF:t.normalize(),verticalFovRad:e.fovY}:null},JN=e=>{const n=()=>{const o=e();return V(o)?o:null},t=(o,r)=>{const a=n();return a&&o?XN(a,o,{durationMs:r}):Promise.resolve(!1)};return{getPose:()=>{var r;const o=(r=n())==null?void 0:r.getCameraPose();return o?ZN(o):null},setPose:o=>{const r=n(),a=rs(o);return!r||!a?!1:(ea(r),r.setCameraPose(a))},flyToPose:(o,r={})=>t(rs(o),r.durationMs),lookAt:(o,r,a={})=>{var i,s;return Ot(o)&&Ot(r)?t(Zc(new w(...o),new w(...r),a.fovY??((s=(i=n())==null?void 0:i.getCameraPose())==null?void 0:s.verticalFovRad)??Hs),a.durationMs??dd):Promise.resolve(!1)},stop:()=>{const o=n();o&&ea(o)}}},br=Object.freeze({settleTimeoutMs:2e3}),ro=()=>new Promise(e=>{typeof requestAnimationFrame=="function"?requestAnimationFrame(()=>setTimeout(e,0)):setTimeout(e,16)}),as=e=>new Promise(n=>setTimeout(n,e)),Ir=(e,n,t)=>new Promise(o=>{if(n(e.getState())){o(!0);return}let r=!1;const a=l=>{r||(r=!0,clearTimeout(s),i(),o(l))},i=e.subscribe(()=>{n(e.getState())&&a(!0)}),s=setTimeout(()=>a(!1),t)}),is=e=>new Set(e.annotationEntries.map(n=>n.id)),Vn=(e,n)=>{var t;return((t=e.annotationEntries.find(o=>!n.has(o.id)))==null?void 0:t.id)??null},ek=e=>{const n=()=>e().annotationsStore,t=()=>{const c=e(),y=c.annotationsStore.getState(),m=y.annotationToolType??null,p=m?c.annotationToolDraftStore.get(m).coordinates.length:0;return{activeTool:m,tools:c.registry.orderedDescriptors.map(A=>A.id),selectedIds:[...y.selectionState.selectedAnnotationIds??[]],draft:m&&p>0?{tool:m,nodeCount:p}:null,textPrompt:c.labelTextDialogState.open?c.labelTextDialogState.initialValue:null,annotations:y.annotationEntries.map(A=>({id:A.id,type:A.toolType,label:A.shortLabel??null,nodeCount:A.nodeIds.length,external:A.annotationRole===st.EXTERNAL}))}},o=async c=>{const y=e();if(!y.registry.getPlugin(c))return!1;y.annotationsStore.getState().annotationToolType!==c&&y.requestModeChange(c);const m=await Ir(y.annotationsStore,p=>p.annotationToolType===c,br.settleTimeoutMs);return await ro(),m},r=async c=>{await ro();const y=e().requestPointAt(c);return await ro(),y},a=async()=>{const c=is(n().getState());return e().requestFinishMeasurement()&&await Ir(n(),y=>Vn(y,c)!==null,br.settleTimeoutMs),await ro(),Vn(n().getState(),c)},i=()=>{const c=e(),y=c.annotationsStore.getState().annotationToolType;y&&c.annotationToolDraftStore.clear(y)},s=c=>{const y=e().labelTextDialogState;return y.open?(c===null?y.onAbort():y.onFinish(c),!0):!1};return{getState:t,subscribe:c=>n().subscribe(c),activateTool:o,pickAt:r,finish:a,cancel:i,answerTextPrompt:s,createMeasurement:async(c,y,m={})=>{const{stepDelayMs:p=0,select:A=!0}=m;if(!await o(c))return null;const f=is(n().getState());e().annotationToolDraftStore.clear(c);for(const k of y){if(p>0&&await as(p),!await r(k))return null;const N=e().labelTextDialogState;if(N.open&&(s(m.text??N.initialValue),await Ir(n(),v=>Vn(v,f)!==null,br.settleTimeoutMs)),Vn(n().getState(),f))break}let T=Vn(n().getState(),f);return T||(p>0&&await as(p),await a(),T=Vn(n().getState(),f)),T&&A&&e().setSelectedAnnotationIds([T]),T},addMeasurements:(c,y={})=>{const m=e(),p=au(c)??Aa(c);if(!p)return[];if(y.replace){const f=m.annotationsStore.getState().annotationEntries.filter(T=>T.annotationRole!==st.EXTERNAL).map(T=>T.id);f.length>0&&m.removeAnnotationsByIds(f,{skipConfirmation:!0})}const A=[...m.appendAnnotationsRuntimePersistenceState(p)];return y.select&&A.length>0&&m.setSelectedAnnotationIds(A),A},exportMeasurements:()=>e().buildAllAnnotationsGeoJson(),select:c=>e().setSelectedAnnotationIds(c),remove:c=>e().removeAnnotationsByIds(c,{skipConfirmation:!0}),flyTo:c=>{const y=e();if(!c||c.length===0){y.flyToAllAnnotations();return}const m=y.annotationsStore.getState();ON({annotationEntries:m.annotationEntries,annotationIds:c,nodes:m.nodes,engine:y.engine})}}},cd=e=>{const n=[],t=()=>e(n.at(-1)??null);return o=>(n.push(o),t(),()=>{const r=n.indexOf(o);r>=0&&n.splice(r,1),t()})},nk=cd(ny),tk=cd(ty),ok=(e,n)=>{const t=g.useRef(e);t.current=e,g.useLayoutEffect(()=>{if(!n)return;const o=nk(ek(()=>t.current)),r=tk(JN(()=>t.current.engine));return()=>{r(),o()}},[n])},rk=ug,md=g.createContext(null),yd=g.createContext(null),ak={lengthMeters:{locale:gt.DE_DE,unitMode:Ac.METERS,maximumFractionDigitsMeters:2},areaSquareMeters:{locale:gt.DE_DE},degrees:{locale:gt.DE_DE},geographicCoordinate:{locale:gt.DE_DE,fractionDigits:6},decimalNumber:{locale:gt.DE_DE,fractionDigits:2,useGrouping:!1}},ik={},sk=()=>{const e=g.useContext(md);if(!e)throw new Error("useAnnotationsRuntime must be used within AnnotationsProvider.");return e},lk=()=>{const e=g.useContext(yd);if(!e)throw new Error("useActivePointQueryPickResult must be used within AnnotationsProvider.");return e},uk=({engine:e,plugins:n,children:t,annotationOverlayContainer:o=null,initialActiveToolType:r,initialPointTemporaryMode:a=!1,labelOverlayHost:i=null,localPersistence:s,renderEnabled:l=!0,visualRenderEnabled:u,visualInteractionEnabled:d,visualAnnotationEntryRoles:c,formatOptions:y=ak,lineLabelOptions:m=ik,referenceObjectSizing:p=mu,initialPersistenceState:A,onPersistenceStateChange:f,confirmAnnotationDelete:T,carmaApi:k=!0})=>{const{labelTextDialogState:N,requestLabelText:v}=KN({enabled:l}),b=!!(s!=null&&s.storageKey)&&((s==null?void 0:s.enabled)??!0),h=bf({enabled:b,storageKey:(s==null?void 0:s.storageKey)??""}),S=A!==void 0?A:h.initialPersistenceState,I=f??h.onPersistenceStateChange,E=b&&A===void 0&&f===void 0?s==null?void 0:s.storageKey:void 0,{annotationsStore:O,services:R,setActiveToolType:L,runtimeAuthoringHost:P,runtimeVisualHost:x,registry:M,activePointQueryPickResultStore:F}=QN({engine:e,plugins:n,initialActiveToolType:r,initialPointTemporaryMode:a,formatOptions:y,lineLabelOptions:m,initialPersistenceState:S,storeKey:E,onPersistenceStateChange:I,requestLabelText:l?v:void 0,confirmAnnotationDelete:T}),G=g.useMemo(()=>({...R,labelTextDialogState:N}),[N,R]);ok(G,k&&l);const H=(e==null?void 0:e.kind)??"none",j=C.jsx(rk,{context:ba,store:O,children:C.jsx(md.Provider,{value:G,children:C.jsxs(yd.Provider,{value:F,children:[o?oc.createPortal(C.jsx(Ml,{}),o):null,C.jsxs(g.Fragment,{children:[l||!E?C.jsx(OA,{registry:M,setActiveToolType:L}):null,l?C.jsx(EA,{...P,referenceObjectSizing:p}):null,u??l?C.jsx(ud,{...x,visualAnnotationEntryRoles:c,visualInteractionEnabled:d,referenceObjectSizing:p}):null]},H),t]})})});return i?C.jsx(fc,{host:i,children:j}):j},pd=()=>{const{engine:e,registry:n,annotationToolDraftStore:t,formatOptions:o,addAnnotation:r,appendAnnotationsRuntimePersistenceState:a,removeExternalAnnotationsByCollection:i,setActiveToolType:s,requestModeChange:l,requestActivateTool:u,requestFinishMeasurement:d,focusAdjacentAnnotationEntry:c,focusAnnotationId:y,flyToAnnotationById:m,flyToAllAnnotations:p,removeAnnotationById:A,removeAnnotationsByIds:f,buildAllAnnotationsGeoJson:T,exportAnnotationGeoJson:k,exportAllAnnotationsGeoJson:N,toggleAnnotationVisibility:v,toggleAnnotationLocked:b,removeSelectedAnnotations:h,selectAllAnnotations:S,setElevationReferenceAnnotationId:I,toggleAnnotationElevationDisplayMode:E,updateAnnotationDisplayName:O,updateAnnotationShortLabel:R,activeEditedNodeId:L,setPointTemporaryMode:P,setSelectedAnnotationId:x,setSelectedAnnotationIds:M,labelTextDialogState:F}=sk(),G=ne(Q=>Q.annotationToolType),H=ne(Q=>Q.nodes),j=ne(Q=>Q.edges),J=ne(Q=>Q.annotationEntries),W=ne(Ho),Z=ne(Q=>Q.selectionState.selectedAnnotationIds),Te=ne(Q=>Q.settingsState.elevationReferenceAnnotationId),ve=ne(Q=>Q.settingsState.pointTemporaryMode);return{engine:e,registry:n,annotationToolDraftStore:t,formatOptions:o,activeToolType:G,setActiveToolType:s,requestModeChange:l,requestActivateTool:u,requestFinishMeasurement:d,focusAdjacentAnnotationEntry:c,focusAnnotationId:y,flyToAnnotationById:m,flyToAllAnnotations:p,removeAnnotationById:A,removeAnnotationsByIds:f,buildAllAnnotationsGeoJson:T,exportAnnotationGeoJson:k,exportAllAnnotationsGeoJson:N,toggleAnnotationVisibility:v,toggleAnnotationLocked:b,removeSelectedAnnotations:h,selectAllAnnotations:S,elevationReferenceAnnotationId:Te,setElevationReferenceAnnotationId:I,toggleAnnotationElevationDisplayMode:E,updateAnnotationDisplayName:O,updateAnnotationShortLabel:R,activeEditedNodeId:L,pointTemporaryMode:ve,setPointTemporaryMode:P,nodes:H,edges:j,annotationEntries:J,selectedAnnotationId:W,selectedAnnotationIds:Z,setSelectedAnnotationId:x,setSelectedAnnotationIds:M,addAnnotation:r,appendAnnotationsRuntimePersistenceState:a,removeExternalAnnotationsByCollection:i,labelTextDialogState:F}},dk=()=>{const e=lk();return g.useSyncExternalStore(e.subscribe,e.getSnapshot,e.getSnapshot)};uk.__docgenInfo={description:"",methods:[],displayName:"AnnotationsProvider",props:{engine:{required:!0,tsType:{name:"union",raw:"AnnotationEngine | null",elements:[{name:"AnnotationEngine"},{name:"null"}]},description:`Engine adapter the runtime draws and picks with. The app owns the engine
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
}`,signature:{properties:[{key:"annotations",value:{name:"unknown",required:!0}},{key:"source",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_DELETE_CONFIRMATION_SOURCES)[keyof typeof ANNOTATION_DELETE_CONFIRMATION_SOURCES]",required:!0}}]}},name:"context"}],return:{name:"union",raw:"boolean | Promise<boolean>",elements:[{name:"boolean"},{name:"Promise",elements:[{name:"boolean"}],raw:"Promise<boolean>"}]}}},description:""},carmaApi:{required:!1,tsType:{name:"boolean"},description:"Answer `carma.annotations` while mounted, so scripts, stories and tests\ncan drive the tools. On by default; the latest mounted runtime answers.",defaultValue:{value:"true",computed:!1}}}};const ck=({classNames:e,metrics:n,plugins:t,disableSelectWithoutAnnotations:o=!1,showToolTypeIndicators:r=!1,tooltipPlacement:a,getTooltipPopupContainer:i,renderToolButtonBackdrop:s})=>{const{registry:l,activeToolType:u,requestModeChange:d,annotationEntries:c}=pd(),y=t??l.plugins,m=g.useMemo(()=>Fo({annotationEntries:c}),[c]),p=g.useMemo(()=>Og(m),[m]),A=g.useMemo(()=>y.map(f=>{const T=f.descriptor,k=T.id===vn,N=k?m.length:f.annotationType?p.get(f.annotationType)??0:0;return{id:T.id,label:T.label,tooltip:T.tooltip,icon:T.icon,annotationCount:N,disabled:o&&k&&m.length===0}}),[p,m.length,o,y]);return C.jsx(ql,{activeToolId:u,tools:A,onToolSelect:f=>{d(f)},classNames:e,metrics:n,showToolTypeIndicators:r,tooltipPlacement:a,getTooltipPopupContainer:i,renderToolButtonBackdrop:s})};ck.__docgenInfo={description:"",methods:[],displayName:"RuntimeAnnotationsToolbar",props:{classNames:{required:!1,tsType:{name:"Partial",elements:[{name:"AnnotationsToolbarClassNames"}],raw:"Partial<AnnotationsToolbarClassNames>"},description:""},metrics:{required:!1,tsType:{name:"Partial",elements:[{name:"AnnotationsToolbarMetrics"}],raw:"Partial<AnnotationsToolbarMetrics>"},description:""},plugins:{required:!1,tsType:{name:"unknown"},description:""},disableSelectWithoutAnnotations:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showToolTypeIndicators:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},tooltipPlacement:{required:!1,tsType:{name:'AnnotationsToolbarProps["tooltipPlacement"]',raw:'AnnotationsToolbarProps["tooltipPlacement"]'},description:""},getTooltipPopupContainer:{required:!1,tsType:{name:'AnnotationsToolbarProps["getTooltipPopupContainer"]',raw:'AnnotationsToolbarProps["getTooltipPopupContainer"]'},description:""},renderToolButtonBackdrop:{required:!1,tsType:{name:'AnnotationsToolbarProps["renderToolButtonBackdrop"]',raw:'AnnotationsToolbarProps["renderToolButtonBackdrop"]'},description:""}}};const zn={ANNOTATION:"annotation",AUTHORING_INSTRUCTION:"authoringInstruction"},mk=(e,n)=>n?[{kind:oe.ALERT,severity:pn.WARNING,text:n.message},...e]:e,yk=({activePointQueryPickResult:e,activeToolDraftFeedback:n,activeToolDraftState:t,activeToolType:o,authoringInstructionHelpLayout:r,helpLocale:a,includeAuthoringInstruction:i,registry:s,visualOptions:l})=>g.useMemo(()=>{var p;if(!i)return null;const u=Rg({activeToolType:o,registry:s});if(!u)return null;const d=((p=u.resolveHelpText)==null?void 0:p.call(u,{draftState:t,pointQueryPickResult:e}))??u.helpText??[],c=mk(d,n);if(c.length===0)return{plugin:u,content:null,visualOptions:null};const y={kind:zn.AUTHORING_INSTRUCTION,plugin:u},m=Ke(typeof l=="function"?l(y):l);return{plugin:u,content:g.createElement(Bo,{visualOptions:m},g.createElement(Do,{items:c,layout:r,locale:a,actionTriggerAlign:Dn.START})),visualOptions:m}},[e,n,t,o,r,a,i,s,l]),yo={POINT:"point",LINE:"line",AREA:"area"},gd=e=>{switch(e){case q.POINT:return yo.POINT;case q.DISTANCE:case q.POLYLINE:return yo.LINE;case q.AREA_GROUND:case q.AREA_PLANAR:case q.AREA_VERTICAL:return yo.AREA;default:return null}},pk={kind:oe.HEADING,text:"Bearbeitungsmodus",level:it.TITLE},gk={kind:oe.HEADING,text:"Punkt verschieben durch ziehen von",level:it.SECTION},fk={kind:oe.HEADING,text:"Weitere Funktionen",level:it.SECTION},Ak=[gk,{kind:oe.ACTION,leadingLabel:"Scheibenmitte",inputAlternatives:[[he.DISC_CENTER]],rightAlignInput:!0,description:"→ auf der Oberfläche des 3D-Modells"},{kind:oe.ACTION,leadingLabel:"Äußere Scheibe",inputAlternatives:[[he.DISC_OUTER]],rightAlignInput:!0,description:"→ in der Höhenebene"},{kind:oe.ACTION,leadingLabel:"Blaue Pfeilspitzen",inputAlternatives:[],description:"→ entlang der Höhenachse"}],Tk={kind:oe.ACTION,inputAlternatives:[[he.CLICK]],trailingLabel:"auf anderen Punkt",description:"Höhe des Punktes übernehmen"},vk={kind:oe.ACTION,inputAlternatives:[[he.ESCAPE],[he.CLICK]],trailingLabel:"außerhalb des Punktes",trailingLabelAfterLastInput:!0,description:"Bearbeitungsmodus verlassen"},ao=e=>({kind:oe.ACTION,inputAlternatives:[[he.BACKSPACE]],description:e}),Nk=e=>{switch(e){case q.POINT:case q.DISTANCE:return ao("Messung löschen");case q.POLYLINE:return ao("Punkt löschen (beim letzten verbleibenden Punkt die Messung)");case q.AREA_GROUND:case q.AREA_PLANAR:case q.AREA_VERTICAL:return ao("Punkt löschen (unter drei Punkten die Messung)");default:return ao("Messung löschen")}},kk=({toolType:e})=>{const n=gd(e);if(!n)return[];const t=[fk,...n===yo.POINT?[]:[Tk],vk,Nk(e)];return[pk,...Ak,...t]},bk=({activeEditedNodeId:e,activeToolType:n,annotationEntries:t,registry:o,authoringInstructionHelpLayout:r,helpLocale:a,includeAuthoringInstruction:i,visualOptions:s})=>g.useMemo(()=>{if(!i||!e||n!==vn)return null;const l=t.find(m=>m.nodeIds.includes(e))??null;if(!l)return null;const u=o.getPlugin(l.toolType)??o.getPluginsByAnnotationType(l.toolType)[0]??null;if(!u)return null;const d=kk({toolType:l.toolType});if(d.length===0)return null;const c={kind:zn.AUTHORING_INSTRUCTION,plugin:u},y=Ke(typeof s=="function"?s(c):s);return{kind:zn.AUTHORING_INSTRUCTION,plugin:u,slots:{content:g.createElement(Bo,{visualOptions:y},g.createElement(Do,{items:d,layout:r,locale:a,actionTriggerAlign:Dn.START})),collapsible:!1},visualOptions:y}},[e,n,t,r,a,i,o,s]),ss=Object.freeze({coordinates:Object.freeze([]),linkedNodeGroupIds:Object.freeze([]),feedback:null}),Ik=({activeToolType:e,annotationToolDraftStore:n})=>{const t=g.useMemo(()=>e?[e]:[],[e]),o=ld({draftStore:n,toolTypes:t}),r=e?o[e]??ss:ss;return{activeToolDraftState:r,activeToolDraftFeedback:e?r.feedback??null:null}},hk=Object.freeze([de.LOCK,de.DELETE]),Sk=[{kind:oe.TEXT,text:"Lange auf einen Punkt der ausgewählten Messung klicken, um den Bearbeitungsmodus zu öffnen."}],Ck=({annotation:e,visualOptions:n})=>{const t=Wl(e),o={kind:zn.ANNOTATION,annotation:e},r=Ke(typeof n=="function"?n(o):n);return{...r,readOnly:!!e.locked||t,hiddenActionIds:t?Array.from(new Set([...r.hiddenActionIds,...hk])):r.hiddenActionIds}},Ek=({activeToolDraftFeedback:e,activeToolDraftState:n,activeToolType:t,annotationEntries:o,elevationReferenceAnnotationId:r,exportAnnotationGeoJson:a,authoringInstruction:i,flyToAllAnnotations:s,focusAnnotationId:l,formatOptions:u,nodes:d,registry:c,removeAnnotationById:y,selectedAnnotationId:m,setElevationReferenceAnnotationId:p,setSelectedAnnotationId:A,toggleAnnotationLocked:f,toggleAnnotationVisibility:T,updateAnnotationDisplayName:k,updateAnnotationShortLabel:N,visualOptions:v})=>g.useMemo(()=>{var P;if(!m)return null;const b=o.find(x=>x.id===m)??null;if(!b)return null;const h=c.getPluginsByAnnotationType(b.toolType).find(x=>{var M;return(M=x.infoBox)==null?void 0:M.getSlots})??null;if(!((P=h==null?void 0:h.infoBox)!=null&&P.getSlots))return null;const S=Wl(b),I=Ck({annotation:b,visualOptions:v}),E=h.infoBox.getSlots({annotation:b,annotationEntries:o,nodes:d,selectedAnnotationId:b.id,setSelectedAnnotationId:A,focusAnnotationId:l,flyToAllAnnotations:s,removeAnnotationById:y,exportAnnotationGeoJson:a,toggleAnnotationVisibility:T,toggleAnnotationLocked:f,elevationReferenceAnnotationId:r,setElevationReferenceAnnotationId:p,updateAnnotationDisplayName:S?()=>{}:k,updateAnnotationShortLabel:S?()=>{}:N,formatOptions:u,infoBoxVisualOptions:I});if(!E)return null;const O=(i==null?void 0:i.plugin.alwaysShowHelpTextWhileActive)===!0&&(n.coordinates.length>0||e!==null),R=t===vn&&gd(b.toolType)!==null&&!b.locked&&!S;let L;return R&&(L=g.createElement(Bo,{visualOptions:I,children:g.createElement(Do,{items:Sk})})),{kind:zn.ANNOTATION,annotation:b,instructionContent:O?i.content??void 0:L,instructionToolId:O?i.plugin.id:void 0,slots:E,visualOptions:I}},[e,n,t,o,r,a,i,s,l,u,d,c,y,m,p,A,f,T,k,N,v]),Ok=({authoringInstructionHelpLayout:e,helpLocale:n,includeAuthoringInstruction:t=!1,visualOptions:o}={})=>{const r=pd(),a=dk(),{activeToolDraftFeedback:i,activeToolDraftState:s}=Ik(r),l=yk({activePointQueryPickResult:a,activeToolDraftFeedback:i,activeToolDraftState:s,activeToolType:r.activeToolType,authoringInstructionHelpLayout:e,helpLocale:n,includeAuthoringInstruction:t,registry:r.registry,visualOptions:o}),u=bk({activeEditedNodeId:r.activeEditedNodeId,activeToolType:r.activeToolType,annotationEntries:r.annotationEntries,registry:r.registry,authoringInstructionHelpLayout:e,helpLocale:n,includeAuthoringInstruction:t,visualOptions:o}),d=Ek({activeToolDraftFeedback:i,activeToolDraftState:s,activeToolType:r.activeToolType,annotationEntries:r.annotationEntries,elevationReferenceAnnotationId:r.elevationReferenceAnnotationId,exportAnnotationGeoJson:r.exportAnnotationGeoJson,authoringInstruction:l,flyToAllAnnotations:r.flyToAllAnnotations,focusAnnotationId:r.focusAnnotationId,formatOptions:r.formatOptions,nodes:r.nodes,registry:r.registry,removeAnnotationById:r.removeAnnotationById,selectedAnnotationId:r.selectedAnnotationId,setElevationReferenceAnnotationId:r.setElevationReferenceAnnotationId,setSelectedAnnotationId:r.setSelectedAnnotationId,toggleAnnotationLocked:r.toggleAnnotationLocked,toggleAnnotationVisibility:r.toggleAnnotationVisibility,updateAnnotationDisplayName:r.updateAnnotationDisplayName,updateAnnotationShortLabel:r.updateAnnotationShortLabel,visualOptions:o});return u||(d||r.selectedAnnotationId?d:!(l!=null&&l.content)||!l.visualOptions?null:{kind:zn.AUTHORING_INSTRUCTION,plugin:l.plugin,slots:{content:l.content,collapsible:!1},visualOptions:l.visualOptions})},Rk=({pixelWidth:e,fitContentWidth:n,useControlLayout:t,controlPosition:o,controlOrder:r,collapsedHorizontalAnchor:a,style:i,visualOptions:s})=>{const l=Ok({visualOptions:s});return!l||l.kind!==zn.ANNOTATION?null:C.jsx(Nl,{pixelWidth:e,fitContentWidth:n,useControlLayout:t,controlPosition:o,controlOrder:r,collapsedHorizontalAnchor:a,style:i,slots:l.slots,visualOptions:l.visualOptions})};Rk.__docgenInfo={description:"",methods:[],displayName:"RuntimeAnnotationInfoBox"};const gI="point-move-u-handle",fI=30,Lk="rgba(59, 130, 246, 0.98)",wk="rgba(239, 68, 68, 0.98)",qk="rgba(34, 197, 94, 0.98)",fd="rgba(148, 163, 184, 0.98)",AI=1,hr="rgba(255,255,255,0.92)",xk=.92,TI=48,$n=320,vI=16,NI=220,kI=48,bI=.25,II=500,hI=16,SI=12,_k=0,Pk=1,Mk=2,Dk=3,ls=40,mt=1.5,CI="row-resize",Bk="move",EI=1.3,OI=1.05,RI=.4,LI=4,us=8,wI=Ld,qI=.25,xI=1,Fk=[{id:"vertical",color:Lk,labelKey:"verticalAxis"},{id:"horizontal-east",color:wk,labelKey:"eastAxis"},{id:"horizontal-north",color:qk,labelKey:"northAxis"}],Gk=["vertical"],Ad=e=>Gk.includes(e),Td=(e,n)=>Fk.map(t=>({id:t.id,color:t.color,title:t.id==="vertical"&&n?n:e[t.labelKey]})),jk=(e,n)=>Td(e,n).filter(t=>Ad(t.id)),_I="#ffffff",PI=.5,MI="#ffffff",DI=5,Uk=.7,BI=mt+1,Hk=mt/2,zk="rgba(255, 255, 255, 0.95)",ds="rgba(255, 255, 255, 0.95)",Vk=new na,$k=(e,n,t)=>{const o=new w,r=new w,a=new w;Od(e,Vk).invert().extractBasis(o,r,a);const i={vertical:a.normalize(),"horizontal-east":o.normalize(),"horizontal-north":r.normalize()};return Td(n,t).map(s=>({...s,direction:i[s.id]}))},FI=(e,n,t)=>$k(e,n,t).filter(o=>Ad(o.id)),Yk={vertical:new w(0,0,1),"horizontal-east":new w(1,0,0),"horizontal-north":new w(0,1,0)},GI=(e,n,t)=>e&&e.length>0?e.map(o=>({...o,color:o.color??fd})):jk(n,t).map(o=>({...o,direction:Yk[o.id]})),cs=(e,n,{labels:t,arrowActiveEdgePx:o,onAxisMouseDown:r,onWheel:a})=>g.createElement("svg",{key:`${n.id}-arrow-${e}`,[`data-point-move-axis-arrow-${e}`]:n.id,onMouseDown:i=>r(i,n),onWheel:a,viewBox:Rc(o),style:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -100%)",transformOrigin:"50% 100%",width:`${o}px`,height:`${Lc(o)}px`,display:"block",color:n.color??fd,zIndex:Dk,pointerEvents:"auto",cursor:"move",userSelect:"none",overflow:"visible"},title:n.title??t.genericAxis},g.createElement("path",{"data-point-move-axis-arrow-outline":"true",d:wc(o),fill:"currentColor",stroke:ds,strokeWidth:`${mt}`,strokeLinejoin:"round",strokeLinecap:"round",paintOrder:"stroke",vectorEffect:"non-scaling-stroke",shapeRendering:"geometricPrecision"}),g.createElement("path",{"data-point-move-axis-arrow-rim":"true",d:"",fill:"none",stroke:ds,strokeOpacity:Uk,strokeWidth:`${mt}`,strokeLinejoin:"round",vectorEffect:"non-scaling-stroke",shapeRendering:"geometricPrecision",style:{display:"none"}}),g.createElement("circle",{"data-point-move-axis-arrow-tip":"true",cx:o/2,cy:0,r:Hk,fill:zk})),Wk=e=>{const{axisCandidates:n,labels:t,axisUiLengthPx:o,axisArrowOffsetPx:r,axisWidthPx:a,showAxes:i,showRotationHandle:s,snapPlaneDragToGround:l,centerPlaneDragCursor:u,onDiscPlaneMouseDown:d,onRotationHandleMouseDown:c,onCenterMouseDown:y,onWheel:m}=e;return g.createElement("div",{style:{position:"relative",width:`${o}px`,height:`${o}px`,pointerEvents:"none",userSelect:"none",overflow:"visible"}},...(i?n:[]).flatMap(p=>[g.createElement("div",{key:`${p.id}-line`,"data-point-move-axis-line":p.id,style:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)",width:`${r*2}px`,height:`${a}px`,background:"rgba(255,255,255,0.82)",opacity:1,zIndex:_k,pointerEvents:"none"}}),cs("up",p,e),cs("down",p,e)]),g.createElement("svg",{key:"disc-outline-svg","data-point-move-disc-outline-svg":"true",viewBox:`-160 -160 ${$n} ${$n}`,width:`${$n}`,height:`${$n}`,style:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)",width:`${$n}px`,height:`${$n}px`,overflow:"hidden",pointerEvents:"none",zIndex:Pk}},...n.map(p=>g.createElement("path",{key:`disc-outline-path-${p.id}`,"data-point-move-disc-outline-path":p.id,d:"",fill:"none",stroke:hr,strokeWidth:`${mt}`,strokeLinejoin:"round",strokeLinecap:"round",vectorEffect:"non-scaling-stroke",shapeRendering:"geometricPrecision",style:{opacity:xk,display:"none",pointerEvents:"none"}})),g.createElement("path",{key:"disc-interaction-path","data-point-move-disc-interaction-path":"true",d:"",onMouseDown:d,onWheel:m,fill:"rgba(255,255,255,0.001)",stroke:"none",style:{display:"none",pointerEvents:"auto",cursor:Bk}},g.createElement("title",null,t.outerDisc)),...s?[g.createElement("ellipse",{key:"disc-rotation-handle","data-point-move-disc-rotation-handle":"true",cx:"0",cy:"0",rx:`${us}`,ry:`${us}`,onMouseDown:c,onWheel:m,fill:hr,stroke:hr,strokeWidth:`${mt}`,vectorEffect:"non-scaling-stroke",style:{display:"none",pointerEvents:"auto",cursor:"grab"}})]:[]),g.createElement("div",{"data-point-move-axis-center-hit":"true",onMouseDown:y,onWheel:m,style:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)",width:`${ls}px`,height:`${ls}px`,borderRadius:"50%",background:"transparent",zIndex:Mk,pointerEvents:"auto",cursor:u,userSelect:"none"},title:l?t.surfacePlane:t.freePlane}))};Wk.__docgenInfo={description:"The overlay markup; `layoutPointMoveGizmoOverlay` positions it every frame.",methods:[],displayName:"createPointMoveGizmoOverlayContent",props:{axisCandidates:{required:!0,tsType:{name:"Array",elements:[{name:"AnnotationGizmoAxisCandidate"}],raw:"AnnotationGizmoAxisCandidate[]"},description:""},labels:{required:!0,tsType:{name:"AnnotationGizmoLabels"},description:""},axisUiLengthPx:{required:!0,tsType:{name:"number"},description:""},axisArrowOffsetPx:{required:!0,tsType:{name:"number"},description:""},axisWidthPx:{required:!0,tsType:{name:"number"},description:""},arrowActiveEdgePx:{required:!0,tsType:{name:"number"},description:""},showAxes:{required:!0,tsType:{name:"boolean"},description:""},showRotationHandle:{required:!0,tsType:{name:"boolean"},description:""},snapPlaneDragToGround:{required:!0,tsType:{name:"boolean"},description:""},centerPlaneDragCursor:{required:!0,tsType:{name:"string"},description:""},onAxisMouseDown:{required:!0,tsType:{name:"signature",type:"function",raw:`(
  event: ReactMouseEvent<HTMLDivElement>,
  axisCandidate: AnnotationGizmoAxisCandidate
) => void`,signature:{arguments:[{type:{name:"ReactMouseEvent",elements:[{name:"HTMLDivElement"}],raw:"ReactMouseEvent<HTMLDivElement>"},name:"event"},{type:{name:"AnnotationGizmoAxisCandidate"},name:"axisCandidate"}],return:{name:"void"}}},description:""},onDiscPlaneMouseDown:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: ReactMouseEvent<SVGPathElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",elements:[{name:"SVGPathElement"}],raw:"ReactMouseEvent<SVGPathElement>"},name:"event"}],return:{name:"void"}}},description:""},onRotationHandleMouseDown:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: ReactMouseEvent<SVGCircleElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",elements:[{name:"SVGCircleElement"}],raw:"ReactMouseEvent<SVGCircleElement>"},name:"event"}],return:{name:"void"}}},description:""},onCenterMouseDown:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: ReactMouseEvent<HTMLDivElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",elements:[{name:"HTMLDivElement"}],raw:"ReactMouseEvent<HTMLDivElement>"},name:"event"}],return:{name:"void"}}},description:""},onWheel:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: ReactWheelEvent) => void",signature:{arguments:[{type:{name:"ReactWheelEvent"},name:"event"}],return:{name:"void"}}},description:""}}};const Qk=new As,vd=(e,n,t)=>{const o=e.canvas.getBoundingClientRect();return{x:n-o.left,y:t-o.top}},Nd=(e,n,t)=>{if(e.isDestroyed())return null;const o=e.getPickRay(vd(e,n,t));return o?new Ts(o.origin,o.direction):null},jI=(e,n,t,o,r)=>{let a=0;const i=new w;for(let s=0;s<r;s+=1){const l=s/r*Oo;i.copy(n).addScaledVector(t.xAxis,Math.cos(l)).addScaledVector(t.yAxis,Math.sin(l));const u=e.worldToScreen(i);if(!u)continue;const d=Math.hypot(u.x-o.x,u.y-o.y);Number.isFinite(d)&&d>a&&(a=d)}return a},UI=(e,n,t,o,r,a,i=8192)=>{const s=[],l=new w;for(let u=0;u<r;u+=1){const d=u/r*Oo;l.copy(n).addScaledVector(t.xAxis,Math.cos(d)*o).addScaledVector(t.yAxis,Math.sin(d)*o);const c=e.worldToScreen(l);if(!c)continue;const y=c.x-a.x,m=c.y-a.y;!Number.isFinite(y)||!Number.isFinite(m)||Math.abs(y)>i||Math.abs(m)>i||s.push({x:y,y:m})}return s},HI=(e,n,t,o,r)=>{const a=Nd(e,n,t);return a?Mc(a,o,r):null},Kk=(e,n,t,o,r)=>{const a=Nd(e,n,t);return a?Os(a,Qk.setFromNormalAndCoplanarPoint(r,o),xs):null},zI=(e,n,t,o,r,a,i)=>{const s=Kk(e,n,t,o,r);if(!s)return null;const l=new w().subVectors(s,o),u=l.dot(a),d=l.dot(i);return!Number.isFinite(u)||!Number.isFinite(d)||Math.hypot(u,d)<=xs?null:Math.atan2(d,u)},VI=(e,n,t,o)=>{var i,s;if(e.isDestroyed())return null;const r=vd(e,n,t);let a=null;try{a=e.resolveSurfacePick(r,{resolveGlobePosition:!0,excludeDragSampleOccluders:(o==null?void 0:o.includeDragSampleExclusions)===!0})}catch{}return((i=a==null?void 0:a.surfacePositionECEF)==null?void 0:i.clone())??((s=a==null?void 0:a.globePositionECEF)==null?void 0:s.clone())??null},Xk=1e5,Sr=1e-6,$I=({project:e,origin:n,direction:t,offsetPx:o,edgePx:r,heightPx:a,anchorCanvasPosition:i,cameraPosition:s,segments:l=24})=>{const u=R=>{const L=e(R);return L?Math.hypot(L.x-i.x,L.y-i.y):null},d=new w,c=u(d.copy(n).addScaledVector(t,1));if(c===null||c<Sr)return null;let y=o/c;for(let R=0;R<2;R+=1){const L=u(d.copy(n).addScaledVector(t,y));if(L===null||L<Sr)return null;y*=o/L}if(!Number.isFinite(y)||y>Xk)return null;const m=n.clone().addScaledVector(t,y),p=e(m);if(!p)return null;const A=m.clone().sub(s),f=new w().crossVectors(t,A);f.lengthSq()<1e-12&&(f.set(1,0,0).cross(t),f.lengthSq()<1e-12&&f.set(0,1,0).cross(t)),f.normalize();const T=Math.max(y*.1,1e-6),k=e(d.copy(m).addScaledVector(f,T));if(!k)return null;const N=Math.hypot(k.x-p.x,k.y-p.y)/T;if(N<Sr)return null;const v=r/2/N,b=a/N,h=new w().crossVectors(t,f).normalize(),S=R=>{const L=e(R);if(!L)return null;const P=L.x-i.x,x=L.y-i.y;return Number.isFinite(P)&&Number.isFinite(x)?{x:P,y:x}:null},I=S(d.copy(m).addScaledVector(t,b));if(!I)return null;const E=[];for(let R=0;R<l;R+=1){const L=R/l*Oo,P=S(d.copy(m).addScaledVector(f,Math.cos(L)*v).addScaledVector(h,Math.sin(L)*v));if(!P)return null;E.push(P)}const O=A.dot(t)>0;return{hull:Yc([I,...E]),baseRim:O?E:null,apex:I}};export{Bk as $,nm as A,Oe as B,sy as C,mt as D,Eu as E,IT as F,Uu as G,Le as H,Qu as I,Hu as J,aa as K,IA as L,Dc as M,hb as N,NI as O,Fu as P,Lk as Q,Ye as R,fd as S,Sb as T,jk as U,_k as V,Dk as W,$n as X,Pk as Y,hr as Z,xk as _,Lb as a,zI as a$,us as a0,Mk as a1,gI as a2,fI as a3,vI as a4,LI as a5,RI as a6,wI as a7,qI as a8,xI as a9,aA,sA as aB,iA as aC,lA as aD,Oy as aE,Ry as aF,Tl as aG,Wy as aH,AA as aI,Qy as aJ,NA as aK,Rp as aL,de as aM,xb as aN,_b as aO,Pb as aP,Db as aQ,Fb as aR,jb as aS,vn as aT,eI as aU,V as aV,FI as aW,sa as aX,jI as aY,nI as aZ,HI as a_,Ib as aa,kI as ab,bI as ac,II as ad,AI as ae,EI as af,OI as ag,TI as ah,hI as ai,SI as aj,Ad as ak,CI as al,Bc as am,ls as an,Td as ao,pi as ap,yi as aq,Jb as ar,Hs as as,Ky as at,yA as au,Ft as av,Su as aw,Ze as ax,Xy as ay,rA as az,wb as b,Zb as b$,Kk as b0,VI as b1,vd as b2,BI as b3,$I as b4,UI as b5,MI as b6,_I as b7,PI as b8,GI as b9,mI as bA,iT as bB,sI as bC,Ut as bD,Fo as bE,Dy as bF,fl as bG,Ae as bH,Ob as bI,Xc as bJ,Eb as bK,dI as bL,$r as bM,La as bN,Sa as bO,Ht as bP,$y as bQ,iI as bR,gv as bS,uv as bT,Yb as bU,zu as bV,So as bW,Ct as bX,qb as bY,ju as bZ,yI as b_,Wk as ba,DI as bb,_n as bc,rt as bd,Rb as be,Wc as bf,Cb as bg,Er as bh,js as bi,Us as bj,_l as bk,ce as bl,uk as bm,ck as bn,Rk as bo,pd as bp,Jr as bq,Kn as br,Jm as bs,ey as bt,ee as bu,bo as bv,aT as bw,Vo as bx,rT as by,$o as bz,om as c,Hb as c0,cN as c1,dN as c2,Ia as c3,Lu as c4,tA as c5,oA as c6,lI as c7,uI as c8,Ru as c9,Qb as cA,pf as cB,sr as cC,ky as cD,Al as cE,dy as cF,gu as cG,Cy as ca,Ie as cb,Kb as cc,Xb as cd,Hy as ce,he as cf,pn as cg,cI as ch,zb as ci,Vb as cj,$b as ck,rI as cl,lN as cm,aI as cn,ho as co,oI as cp,jt as cq,uN as cr,Hl as cs,pI as ct,Sn as cu,ue as cv,Wb as cw,rn as cx,tI as cy,On as cz,tm as d,Me as e,Dn as f,q as g,Do as h,oe as i,Un as j,Ce as k,Ke as l,Bo as m,_p as n,ep as o,Lp as p,qp as q,kk as r,ry as s,tt as t,U as u,or as v,X as w,fe as x,ll as y,hT as z};
