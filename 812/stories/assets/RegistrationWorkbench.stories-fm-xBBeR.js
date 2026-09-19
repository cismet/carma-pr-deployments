import{j as t}from"./jsx-runtime-DNp_qQjF.js";import{r as b}from"./index-CSJjS6Ct.js";import"./point-cloud-assets-C3oBEnza.js";import{P as De}from"./pointcloud-preset-features-B3eyQwWW.js";import{a as Te,S as Ue,P as Ve}from"./StandalonePointCloudViewer-BXUGMz8l.js";import{F as oe,A as $e,Y as ze,Z as ke,$ as Ne,W as He}from"./index-Rb3gQRgL.js";import{F as Se,b as pe,P as ce}from"./PointColorizer-CouuL1Hy.js";import{V as g,k as ue,Q as ie,aN as ve,t as ge}from"./three.module-BsINTyXW.js";import{R as Be}from"./colorRamps-CwOicvqF.js";import"./plugins-DiPIaVd3-BUs4OHma.js";import"./DRACOLoader-B-rO9Syu.js";import"./plugins-BN2uUf5f-B-a5kHaQ.js";import"./OrbitControls-BwHICXcJ.js";import"./LineSegments2-k4_0rUZU.js";import"./LineGeometry-CzSN4Jlh.js";import"./wms-uhWQECSC.js";import"./tileset3d-DwPutm-L.js";import"./gcg2016-DMNkBqyz.js";import"./angles-o81lIhgd.js";import"./pi-mVFkAveX.js";import"./iframe-CTzTqcw3.js";import"./gcg2016-transformers-C11X1cOa.js";import"./gltf1-upgrade-plugin-BnIraZfg.js";import"./maplibre-gl-BvLDYGIs.js";import"./georadar-road-centerlines-_ZSzB661.js";import"./index-D1cknlJ6.js";import"./___vite-browser-external_commonjs-proxy-N_IygbFj.js";import"./index-CoajjuZM.js";import"./context-I8jzfftW.js";import"./KeyCode-BdmgSkON.js";import"./index-BVXUvhBO.js";import"./index-BLAdF5ws.js";import"./button-BtRslTd2.js";import"./index-hGp9Xz7s.js";import"./BaseInput-D2aTWTFu.js";import"./TextArea-8emZYHnR.js";import"./CheckOutlined-Bd4uYSq5.js";import"./useCSSVarCls-BbL8lFdQ.js";import"./index-CUfaA7OE.js";import"./index-eOK6k3Ll.js";import"./index-2RWzZT5N.js";import"./index-DQEVkUO_.js";import"./index-CnZqwaRO.js";const We=15,Ye=.005,Je=4,Qe=1e-4,se=n=>new g(n.x,n.y,n.z),Ce={allowTranslation:{x:!0,y:!0,z:!0},allowRotation:{x:!0,y:!0,z:!0}};function Ge(n){if(n.length===0)return[];const i=n.reduce((w,p)=>w.add(se(p)),new g).multiplyScalar(1/n.length),m=n.reduce((w,p)=>w+se(p).distanceToSquared(i),0)/n.length*.0625;if(m<=Number.EPSILON)return n.map(()=>1);const c=-1/(2*m),o=n.map(w=>{const p=se(w);let P=0;for(const _ of n)P+=Math.exp(c*p.distanceToSquared(se(_)));return 1/P}),f=o.reduce((w,p)=>w+p,0)/o.length;return o.map(w=>w/f)}const Ke=n=>{const i=n.map(c=>[...c]),l=[[1,0,0],[0,1,0],[0,0,1]],m=[[0,1],[0,2],[1,2]];for(let c=0;c<32;c++){let o=0,f=1,w=0;for(const[x,N]of m)Math.abs(i[x][N])>w&&(w=Math.abs(i[x][N]),o=x,f=N);if(w<1e-14)break;const p=.5*Math.atan2(2*i[o][f],i[f][f]-i[o][o]),P=Math.cos(p),_=Math.sin(p);for(let x=0;x<3;x++){const N=i[x][o],F=i[x][f];i[x][o]=P*N-_*F,i[x][f]=_*N+P*F}for(let x=0;x<3;x++){const N=i[o][x],F=i[f][x];i[o][x]=P*N-_*F,i[f][x]=_*N+P*F}for(let x=0;x<3;x++){const N=l[x][o],F=l[x][f];l[x][o]=P*N-_*F,l[x][f]=_*N+P*F}}return{values:[i[0][0],i[1][1],i[2][2]],vectors:[new g(l[0][0],l[1][0],l[2][0]),new g(l[0][1],l[1][1],l[2][1]),new g(l[0][2],l[1][2],l[2][2])]}},Xe=(n,i)=>{const l=i.length,m=n.map((c,o)=>[...c,i[o]]);for(let c=0;c<l;c++){let o=c;for(let f=c+1;f<l;f++)Math.abs(m[f][c])>Math.abs(m[o][c])&&(o=f);if(Math.abs(m[o][c])<1e-12)return null;[m[c],m[o]]=[m[o],m[c]];for(let f=0;f<l;f++){if(f===c)continue;const w=m[f][c]/m[c][c];for(let p=c;p<=l;p++)m[f][p]-=w*m[c][p]}}return m.map((c,o)=>c[l]/m[o][o])},Me=(n,i)=>{const l=2*Math.acos(ue.clamp(Math.abs(n.w),-1,1));return l<=i||l===0?n:new ie().slerp(n,i/l)};function Ze(n,i={}){if(n.length<3)throw new Error("At least three point pairs are required");const l=n.map(e=>se(e.source)),m=n.map(e=>se(e.target)),c=(i.weighting??"density")==="density"?Ge(l):l.map(()=>1),o=c.reduce((e,r)=>e+r,0),f=l.reduce((e,r,s)=>e.addScaledVector(r,c[s]),new g).multiplyScalar(1/o),w=m.reduce((e,r,s)=>e.addScaledVector(r,c[s]),new g).multiplyScalar(1/o),p={...Ce.allowRotation,...i.allowRotation},P=p.x||p.y||p.z,_=ue.degToRad(Math.max(0,i.maxRotationDegrees??We)),x=Math.max(0,i.maxUniformScaleDeviation??Ye),N=i.minUniformScale??1-x,F=i.maxUniformScale??1+x,$=[1,Math.max(Number.EPSILON,i.verticalErrorWeight??Je),1],y=new Float64Array(9);for(let e=0;e<n.length;e++){const r=c[e],s=l[e].clone().sub(f),d=m[e].clone().sub(w);y[0]+=r*d.x*s.x,y[1]+=r*d.x*s.y,y[2]+=r*d.x*s.z,y[3]+=r*d.y*s.x,y[4]+=r*d.y*s.y,y[5]+=r*d.y*s.z,y[6]+=r*d.z*s.x,y[7]+=r*d.z*s.y,y[8]+=r*d.z*s.z}const he=y[0]+y[4]+y[8],le=y[7]-y[5],K=y[2]-y[6],A=y[3]-y[1],ee=y[0]-y[4]-y[8],J=y[3]+y[1],I=y[2]+y[6],te=-y[0]+y[4]-y[8],re=y[7]+y[5],me=-y[0]-y[4]+y[8],H=[[he,le,K,A],[le,ee,J,I],[K,J,te,re],[A,I,re,me]],fe=Math.max(...H.map(e=>e.reduce((r,s)=>r+Math.abs(s),0))),Q=H.map((e,r)=>e.map((s,d)=>r===d?s+fe:s));let D=[1,.5,.25,.125];for(let e=0;e<128;e++){const r=Q.map(d=>d.reduce((M,h,j)=>M+h*D[j],0)),s=Math.hypot(...r);D=r.map(d=>d/(s||1))}let v=P?new ie(D[1],D[2],D[3],D[0]).normalize():new ie;if(!(p.x&&p.y&&p.z)){const e=new ve().setFromQuaternion(v,"XYZ");e.x=p.x?e.x:0,e.y=p.y?e.y:0,e.z=p.z?e.z:0,v=new ie().setFromEuler(e)}v=Me(v,_);let z=1;if(i.allowUniformScale){let e=0,r=0;for(let s=0;s<l.length;s++){const d=c[s],M=l[s].clone().sub(f),h=m[s].clone().sub(w);e+=d*h.dot(M.applyQuaternion(v)),r+=d*M.lengthSq()}z=r>Number.EPSILON?e/r:1,z=ue.clamp(z,N,F)}let S=w.clone().sub(f.clone().applyQuaternion(v).multiplyScalar(z));const C=[];if(P){const e=[[0,0,0],[0,0,0],[0,0,0]],r=[new g(1,0,0),new g(0,1,0),new g(0,0,1)];for(let j=0;j<l.length;j++){const O=l[j].clone().sub(f).applyQuaternion(v).multiplyScalar(z),U=r.map(k=>k.clone().cross(O));for(let k=0;k<3;k++)for(let E=k;E<3;E++){let R=0;R+=$[0]*U[k].x*U[E].x,R+=$[1]*U[k].y*U[E].y,R+=$[2]*U[k].z*U[E].z,e[k][E]+=c[j]*R,k!==E&&(e[E][k]=e[k][E])}}if(!p.x){e[0]=[0,0,0];for(const j of e)j[0]=0}if(!p.y){e[1]=[0,0,0];for(const j of e)j[1]=0}if(!p.z){e[2]=[0,0,0];for(const j of e)j[2]=0}const{values:s,vectors:d}=Ke(e),M=Math.max(...s,0);for(let j=0;j<3;j++)s[j]>M*Qe&&C.push(d[j]);const h=2*Math.acos(ue.clamp(Math.abs(v.w),-1,1));if(h>1e-9&&C.length<3){const O=new g(v.x,v.y,v.z).multiplyScalar(Math.sign(v.w)||1).normalize().multiplyScalar(h),U=C.reduce((E,R)=>E.addScaledVector(R,O.dot(R)),new g),k=U.length();v=k>1e-12?new ie().setFromAxisAngle(U.clone().normalize(),k):new ie}}const q=!!i.allowUniformScale,T=C.length+3+(q?1:0);for(let e=0;e<20;e++){const r=Array.from({length:T},()=>new Array(T).fill(0)),s=new Array(T).fill(0),d=new Array(T);for(let h=0;h<l.length;h++){const j=l[h].clone().applyQuaternion(v),O=j.clone().multiplyScalar(z),U=O.clone().add(S),k=m[h].clone().sub(U);for(let R=0;R<C.length;R++)d[R]=C[R].clone().cross(O);d[C.length]=new g(1,0,0),d[C.length+1]=new g(0,1,0),d[C.length+2]=new g(0,0,1),q&&(d[C.length+3]=j);const E=c[h];for(let R=0;R<T;R++){const Z=d[R];s[R]+=E*($[0]*Z.x*k.x+$[1]*Z.y*k.y+$[2]*Z.z*k.z);for(let W=R;W<T;W++){const a=d[W],u=E*($[0]*Z.x*a.x+$[1]*Z.y*a.y+$[2]*Z.z*a.z);r[R][W]+=u,R!==W&&(r[W][R]=r[R][W])}}}for(let h=0;h<T;h++)r[h][h]+=1e-12+r[h][h]*1e-9;const M=Xe(r,s);if(!M)break;if(C.length>0){const h=C.reduce((O,U,k)=>O.addScaledVector(U,M[k]),new g),j=h.length();j>1e-15&&(v=new ie().setFromAxisAngle(h.clone().normalize(),j).multiply(v),v=Me(v,_))}if(S.x+=M[C.length],S.y+=M[C.length+1],S.z+=M[C.length+2],q&&(z=ue.clamp(z+M[C.length+3],N,F)),Math.max(...M.map(h=>Math.abs(h)))<1e-12)break}const L=new ve().setFromQuaternion(v,"XYZ");L.x=p.x?L.x:0,L.y=p.y?L.y:0,L.z=p.z?L.z:0;const V=Me(new ie().setFromEuler(L),_),ae=new ve().setFromQuaternion(V,"XYZ");S=new g;for(let e=0;e<l.length;e++){const r=l[e].clone().applyQuaternion(V).multiplyScalar(z);S.addScaledVector(m[e].clone().sub(r),c[e])}S.multiplyScalar(1/o);const X={...Ce.allowTranslation,...i.allowTranslation};if(X.x||(S.x=0),X.y||(S.y=0),X.z||(S.z=0),i.maxTranslationMeters!==void 0){const e=Math.max(0,i.maxTranslationMeters);S.clampLength(0,e)}const ne=new ge().compose(S,V,new g(z,z,z)),B=n.map(e=>se(e.target).distanceTo(se(e.source).applyMatrix4(ne))),ye=B.reduce((e,r)=>e+r*r,0);return{matrix:ne,translation:S,rotation:ae,residuals:B,rmsResidualMeters:Math.sqrt(ye/B.length),maximumResidualMeters:Math.max(...B),uniformScale:z,weights:c}}const Pe=n=>`[${n.x.toFixed(3)}, ${n.y.toFixed(3)}, ${n.z.toFixed(3)}]`;function et({pair:n,anchor:i,onChange:l}){const m=b.useRef(null),c=w=>{var F;const p=(F=m.current)==null?void 0:F.getBoundingClientRect();if(!p)return;const P=ue.clamp((w.clientX-p.left)/p.width*4-2,-2,2),_=ue.clamp(2-(w.clientY-p.top)/p.height*4,-2,2),x=Math.hypot(P,_),N=x>2?2/x:1;l(P*N,_*N)},o=n.target.x-i.east,f=-n.target.z-i.north;return t.jsxs("div",{ref:m,className:"mesh-xy-pad",role:"slider","aria-label":"Mesh relative East North adjustment",onPointerDown:w=>{w.currentTarget.setPointerCapture(w.pointerId),c(w)},onPointerMove:w=>{w.currentTarget.hasPointerCapture(w.pointerId)&&c(w)},children:[t.jsx("span",{className:"mesh-xy-pad-axis mesh-xy-pad-axis-x"}),t.jsx("span",{className:"mesh-xy-pad-axis mesh-xy-pad-axis-y"}),t.jsx("span",{className:"mesh-xy-pad-point",style:{left:`${50+o*25}%`,top:`${50-f*25}%`}}),t.jsx("span",{className:"mesh-xy-pad-label mesh-xy-pad-label-x",children:"+E"}),t.jsx("span",{className:"mesh-xy-pad-label mesh-xy-pad-label-y",children:"+N"})]})}function tt({pair:n,xyAnchor:i,zAnchor:l,onXYChange:m,onZChange:c,onZStart:o}){return t.jsxs("div",{className:"mesh-point-adjustment",children:[t.jsxs("div",{className:"mesh-point-delta","aria-live":"polite",children:["ΔE ",(n.target.x-i.east).toFixed(2)," m · ΔN ",(-n.target.z-i.north).toFixed(2)," m · ΔU ",(n.target.y-l).toFixed(2)," m"]}),t.jsxs("div",{className:"mesh-point-inputs",children:[t.jsx("div",{title:"Mesh relative East/North adjustment, maximum radius 2 meters",children:t.jsx(et,{pair:n,anchor:i,onChange:m})}),t.jsx("input",{type:"range",min:"-10",max:"10",step:"0.01",className:"mesh-z-adjustment","aria-label":"Mesh relative Up adjustment",title:"Mesh relative Up adjustment",value:n.target.y-l,onFocus:o,onChange:f=>c(Number(f.target.value))})]})]})}function Ie({pairs:n,onRemoveLastPair:i,onClear:l,onSolved:m,onSelectPair:c,selectedPairIndex:o,onUpdatePair:f,onRemovePair:w,onAddPointPair:p,onImportPairs:P,onLoadPreset:_,datasetPresets:x,activeDatasetId:N,onSelectDataset:F,meshLoadState:de,onFramePointCloud:$,onMaximizeCurrentView:y,onFrameMesh:he,onFrameRegistrationPairs:le,onFrameRegistrationPair:K,pointStyle:A,onPointStyleChange:ee,onOpenFieldColorizer:J,meshInspectionPreview:I,onMeshInspectionPreviewChange:te,meshErrorTarget:re,onMeshErrorTargetChange:me}){const[H,fe]=b.useState(!0),[Q,D]=b.useState(!0),[v,z]=b.useState(100),[S,C]=b.useState(null),[q,T]=b.useState(!1),L=b.useRef(new Map),V=b.useRef(new Map),ae=b.useMemo(()=>n.map(({source:e,target:r})=>`${e.x},${e.y},${e.z}|${r.x},${r.y},${r.z}`).join(";"),[n]),X=b.useMemo(()=>({allowRotation:{x:H,y:H,z:H},allowTranslation:{x:!0,y:!0,z:!0},maxTranslationMeters:v,allowUniformScale:Q}),[H,v,Q]),ne=()=>{if(n.length<3)return;const e=Ze(n,X);C(e),m==null||m(e)};b.useEffect(()=>{n.length>=3?ne():C(null)},[ae,X]);const B=()=>{const e={format:"carma-mesh-registration-v1",pairs:n.map(({source:M,target:h})=>({source:[M.x,M.y,M.z],target:[h.x,h.y,h.z]})),constraints:{allowRotation:H,allowVerticalTranslation:!0,maxTranslation:v,allowUniformScale:Q}},r=new Blob([JSON.stringify(e,null,2)],{type:"application/json"}),s=URL.createObjectURL(r),d=document.createElement("a");d.href=s,d.download="mesh-registration.json",d.click(),URL.revokeObjectURL(s)},ye=async e=>{try{const r=JSON.parse(await e.text());if(r.format!=="carma-mesh-registration-v1"||!Array.isArray(r.pairs))throw new Error("Unsupported registration file");const s=r.pairs.map(({source:d,target:M})=>{if(![d,M].every(h=>Array.isArray(h)&&h.length===3&&h.every(Number.isFinite)))throw new Error("Invalid registration pair");return{source:new g(...d),target:new g(...M)}});P==null||P(s)}catch(r){window.alert(r instanceof Error?r.message:"Invalid registration file")}};return t.jsxs(t.Fragment,{children:[t.jsx(Se,{title:"Mesh registration",onClose:()=>{},showClose:!1,className:"registration-modal",initial:{x:12,y:12},zIndex:20,headerActions:t.jsx("button",{className:"info-action",type:"button",onClick:()=>T(e=>!e),title:"Registration info","aria-label":"Registration info",children:t.jsx(oe,{icon:$e})}),children:t.jsxs("aside",{className:"pointcloud-registration-panel","aria-label":"Registration",children:[q&&t.jsxs("div",{className:"registration-info",children:[t.jsxs("p",{children:["Click a point on the point cloud, then the corresponding point on the mesh. The solver moves point-cloud coordinates into Mesh 2024 coordinates. Pair ",n.length," of at least 3 is currently selected."]}),t.jsxs("div",{className:"pointcloud-registration-status",children:["Mesh 2024: ",de==="loaded"?"loaded":de==="error"?"error":"loading…"]})]}),x&&x.length>0&&F&&t.jsxs("label",{className:"registration-dataset-picker",children:["Dataset",t.jsx("select",{value:N,onChange:e=>F(e.target.value),children:x.map(e=>t.jsx("option",{value:e.id,children:e.label},e.id))})]}),t.jsxs("fieldset",{className:"pointcloud-style-fieldset",children:[t.jsx("legend",{children:"Point cloud style"}),t.jsxs("label",{children:["Size mode",t.jsx("span",{className:"pointcloud-style-buttons",children:[[pe.AUTO,"Auto"],[pe.PIXELS,"Pixels"],[pe.METERS,"Meters"]].map(([e,r])=>t.jsx("button",{type:"button",className:A.sizeMode===e?"is-active":"",onClick:()=>ee({...A,sizeMode:e}),children:r},e))})]}),A.sizeMode===pe.PIXELS&&t.jsxs("label",{className:"inline-range-label",children:["Point size ",t.jsx("input",{type:"range",min:"0.5",max:"8",step:"0.25",value:A.pointSize,onChange:e=>ee({...A,pointSize:Number(e.target.value)})}),t.jsxs("output",{children:[A.pointSize.toFixed(2)," px"]})]}),A.sizeMode===pe.METERS&&t.jsxs("label",{className:"inline-range-label",children:["Radius ",t.jsx("input",{type:"range",min:"0.01",max:"2",step:"0.01",value:A.radiusMeters,onChange:e=>ee({...A,radiusMeters:Number(e.target.value)})}),t.jsxs("output",{children:[A.radiusMeters.toFixed(2)," m"]})]}),A.sizeMode===pe.AUTO&&t.jsxs("label",{className:"inline-range-label",children:["Radius scale ",t.jsx("input",{type:"range",min:"0.25",max:"4",step:"0.25",value:A.radiusScale,onChange:e=>ee({...A,radiusScale:Number(e.target.value)})}),t.jsxs("output",{children:["×",A.radiusScale.toFixed(2)]})]}),t.jsxs("label",{children:["Form",t.jsx("span",{className:"pointcloud-style-buttons",children:[[ce.SQUARE,"Square"],[ce.CIRCLE,"Circle"],[ce.DOME,"Dome"],[ce.SOFT_SPLAT,"Gradient"]].map(([e,r])=>t.jsx("button",{type:"button",className:A.shape===e?"is-active":"",onClick:()=>ee({...A,shape:e}),children:r},e))})]}),J&&t.jsx("div",{className:"pointcloud-style-buttons",children:t.jsx("button",{type:"button",onClick:J,children:"Field colorizer…"})})]}),t.jsxs("div",{className:"mesh-appearance-controls",children:[t.jsxs("label",{children:["Quality",t.jsx("input",{type:"range",min:"0",max:"50",step:"0.5",value:re,onChange:e=>me(Number(e.target.value))}),t.jsx("output",{children:re.toFixed(1)})]}),t.jsxs("label",{children:["Opacity",t.jsx("input",{type:"range",min:"0.1",max:"1",step:"0.05",value:I.opacity,onChange:e=>{const r=Number(e.target.value);te({...I,enabled:r<1||I.wireframe,opacity:r})}}),t.jsxs("output",{children:[Math.round(I.opacity*100),"%"]})]}),t.jsx("button",{type:"button",className:I.wireframe?"is-active":"",onClick:()=>{const e=!I.wireframe;te({...I,enabled:e||I.opacity<1,wireframe:e})},children:"Wireframe"})]}),t.jsxs("div",{className:"pointcloud-registration-actions pointcloud-registration-view-actions",children:[t.jsx("button",{type:"button",onClick:$,children:"Fly to point cloud"}),t.jsx("button",{type:"button",onClick:y,children:"Maximize current view"}),t.jsx("button",{type:"button",disabled:de!=="loaded",onClick:he,children:"Fly to mesh"}),t.jsx("button",{type:"button",disabled:n.length===0,onClick:le,children:"Fly to pairs"})]}),t.jsxs("div",{className:"registration-constraints",children:[t.jsxs("label",{children:[t.jsx("input",{type:"checkbox",checked:H,onChange:e=>fe(e.target.checked)})," Rotation"]}),t.jsxs("label",{children:[t.jsx("input",{type:"checkbox",checked:Q,onChange:e=>D(e.target.checked)})," Scale"]})]}),t.jsxs("div",{className:"pointcloud-registration-actions",children:[t.jsx("button",{type:"button",disabled:n.length<3,onClick:ne,children:"Solve"}),t.jsx("button",{type:"button",disabled:n.length===0,onClick:B,children:"Export JSON"}),t.jsxs("label",{className:"pointcloud-registration-file-button",children:["Import JSON",t.jsx("input",{type:"file",accept:"application/json,.json",hidden:!0,onChange:e=>{var s;const r=(s=e.target.files)==null?void 0:s[0];r&&ye(r),e.target.value=""}})]}),_&&t.jsx("button",{type:"button",onClick:_,children:"Nordbahn preset"})]})]})}),t.jsx(Se,{title:`Point pairs (${n.length})`,onClose:()=>{},showClose:!1,className:"point-pairs-modal",headerActions:t.jsxs("span",{className:"pair-header-actions",children:[t.jsx("button",{type:"button",disabled:n.length===0,onClick:le,title:"Fly to all pairs","aria-label":"Fly to all pairs",children:t.jsx(oe,{icon:ze})}),t.jsx("button",{type:"button",disabled:o===null||o<=0,onClick:()=>{if(o!==null){const e=o-1;c(e),K(e)}},title:"Previous pair","aria-label":"Previous pair",children:t.jsx(oe,{icon:ke})}),t.jsx("button",{type:"button",disabled:o===null||o>=n.length-1,onClick:()=>{if(o!==null){const e=o+1;c(e),K(e)}},title:"Next pair","aria-label":"Next pair",children:t.jsx(oe,{icon:Ne})})]}),initial:{x:430,y:12},zIndex:21,children:t.jsxs("aside",{className:"pointcloud-registration-panel pointcloud-pair-list-panel","aria-label":"Point pairs",children:[t.jsxs("div",{className:"pointcloud-registration-actions",children:[t.jsx("button",{type:"button",onClick:p,children:"Add point pair"}),t.jsx("button",{type:"button",disabled:n.length===0,onClick:i,children:"Remove last"}),t.jsx("button",{type:"button",disabled:n.length===0,onClick:l,children:"Clear"})]}),t.jsx("ol",{children:n.map((e,r)=>{var s,d;return t.jsxs("li",{className:"pointcloud-registration-pair",children:[t.jsxs("button",{className:`pair-summary-button${o===r?" is-selected":""}`,type:"button",onClick:()=>c(r),title:"Adjust pair",children:[t.jsxs("span",{children:["Pair ",r+1]}),t.jsx("code",{children:Pe(new g(e.source.x,e.source.y,e.source.z))})]}),t.jsxs("span",{className:"pair-target-summary",title:"Mesh point",children:["→ ",Pe(new g(e.target.x,e.target.y,e.target.z))]}),t.jsxs("span",{className:"pair-delta-summary",title:"Mesh adjustment delta",children:["Δ ",(e.target.x-(((s=V.current.get(r))==null?void 0:s.east)??e.target.x)).toFixed(2),", ",(-e.target.z-(((d=V.current.get(r))==null?void 0:d.north)??-e.target.z)).toFixed(2),", ",(e.target.y-(L.current.get(r)??e.target.y)).toFixed(2)," m"]}),S&&Number.isFinite(S.residuals[r])&&t.jsxs("small",{className:`pair-error${S.residuals[r]===S.maximumResidualMeters?" is-worst":""}`,title:"Pair residual",children:[S.residuals[r].toFixed(3)," m"]}),t.jsx("button",{className:"icon-action",type:"button",onClick:()=>K(r),title:"Fly to pair","aria-label":"Fly to pair",children:t.jsx(oe,{icon:ze})}),t.jsx("button",{className:"icon-action icon-action-danger",type:"button",onClick:()=>w(r),title:"Delete pair","aria-label":"Delete pair",children:t.jsx(oe,{icon:He})})]},r)})}),S&&t.jsxs("output",{className:"registration-result",children:["RMS residual: ",S.rmsResidualMeters.toFixed(3)," m; maximum: "," ",S.maximumResidualMeters.toFixed(3)," m",Q&&`; scale: ${S.uniformScale.toFixed(5)}×`,t.jsx("div",{className:"matrix-readout","aria-label":"Solved transformation matrix",children:Array.from({length:4},(e,r)=>t.jsx("div",{children:Array.from({length:4},(s,d)=>S.matrix.elements[d*4+r].toFixed(5)).join("  ")},r))})]})]})}),o!==null&&n[o]&&t.jsx(Se,{title:`Adjust pair ${o+1}`,onClose:()=>{},showClose:!1,className:"point-adjustment-modal",transparent:!0,headerActions:t.jsxs("span",{className:"pair-header-actions",children:[t.jsx("button",{type:"button",disabled:o<=0,onClick:()=>{const e=o-1;c(e),K(e)},title:"Previous pair","aria-label":"Previous pair",children:t.jsx(oe,{icon:ke})}),t.jsx("button",{type:"button",disabled:o>=n.length-1,onClick:()=>{const e=o+1;c(e),K(e)},title:"Next pair","aria-label":"Next pair",children:t.jsx(oe,{icon:Ne})})]}),initial:{x:430,y:360},zIndex:22,children:t.jsx("div",{className:"point-adjustment-modal-content",children:t.jsx(tt,{pair:n[o],xyAnchor:V.current.get(o)??{east:n[o].target.x,north:-n[o].target.z},zAnchor:L.current.get(o)??n[o].target.y,onXYChange:(e,r)=>{const s=o,d=n[s],M=V.current.get(s)??{east:d.target.x,north:-d.target.z};V.current.set(s,M),f(s,{source:d.source,target:new g(M.east+e,d.target.y,-(M.north+r))})},onZStart:()=>L.current.set(o,n[o].target.y),onZChange:e=>{const r=o,s=n[r],d=L.current.get(r)??s.target.y;f(r,{source:s.source,target:new g(s.target.x,d+e,s.target.z)})}})})})]})}Ie.__docgenInfo={description:"",methods:[],displayName:"RegistrationWorkbench",props:{pairs:{required:!0,tsType:{name:"unknown"},description:""},onRemoveLastPair:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onClear:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onSolved:{required:!1,tsType:{name:"signature",type:"function",raw:"(result: RigidRegistrationResult) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  matrix: THREE.Matrix4;
  translation: THREE.Vector3;
  rotation: THREE.Euler;
  residuals: number[];
  rmsResidualMeters: number;
  maximumResidualMeters: number;
  uniformScale: number;
  /** Per-pair solver weights (normalized to mean 1); absent on restored solves. */
  weights?: number[];
}`,signature:{properties:[{key:"matrix",value:{name:"THREE.Matrix4",required:!0}},{key:"translation",value:{name:"THREE.Vector3",required:!0}},{key:"rotation",value:{name:"THREE.Euler",required:!0}},{key:"residuals",value:{name:"Array",elements:[{name:"number"}],raw:"number[]",required:!0}},{key:"rmsResidualMeters",value:{name:"number",required:!0}},{key:"maximumResidualMeters",value:{name:"number",required:!0}},{key:"uniformScale",value:{name:"number",required:!0}},{key:"weights",value:{name:"Array",elements:[{name:"number"}],raw:"number[]",required:!1},description:"Per-pair solver weights (normalized to mean 1); absent on restored solves."}]}},name:"result"}],return:{name:"void"}}},description:""},onSelectPair:{required:!0,tsType:{name:"signature",type:"function",raw:"(index: number) => void",signature:{arguments:[{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:""},selectedPairIndex:{required:!0,tsType:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}]},description:""},onUpdatePair:{required:!0,tsType:{name:"signature",type:"function",raw:"(index: number, pair: RegistrationPair) => void",signature:{arguments:[{type:{name:"number"},name:"index"},{type:{name:"signature",type:"object",raw:`{
  /** Point-cloud coordinate that is transformed by the result matrix. */
  source: THREE.Vector3Like;
  /** Corresponding Mesh 2024 coordinate. */
  target: THREE.Vector3Like;
}`,signature:{properties:[{key:"source",value:{name:"THREE.Vector3Like",required:!0},description:"Point-cloud coordinate that is transformed by the result matrix."},{key:"target",value:{name:"THREE.Vector3Like",required:!0},description:"Corresponding Mesh 2024 coordinate."}]}},name:"pair"}],return:{name:"void"}}},description:""},onRemovePair:{required:!0,tsType:{name:"signature",type:"function",raw:"(index: number) => void",signature:{arguments:[{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:""},onAddPointPair:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onImportPairs:{required:!1,tsType:{name:"signature",type:"function",raw:"(pairs: RegistrationPair[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  /** Point-cloud coordinate that is transformed by the result matrix. */
  source: THREE.Vector3Like;
  /** Corresponding Mesh 2024 coordinate. */
  target: THREE.Vector3Like;
}`,signature:{properties:[{key:"source",value:{name:"THREE.Vector3Like",required:!0},description:"Point-cloud coordinate that is transformed by the result matrix."},{key:"target",value:{name:"THREE.Vector3Like",required:!0},description:"Corresponding Mesh 2024 coordinate."}]}}],raw:"RegistrationPair[]"},name:"pairs"}],return:{name:"void"}}},description:""},onLoadPreset:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Replaces the current pairs with the story's bundled preset."},datasetPresets:{required:!1,tsType:{name:"ReadonlyArray",elements:[{name:"signature",type:"object",raw:"{ id: string; label: string }",signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}}]}}],raw:"ReadonlyArray<{ id: string; label: string }>"},description:"Registerable dataset presets (ng playground FeatureCollection entries)."},activeDatasetId:{required:!1,tsType:{name:"string"},description:""},onSelectDataset:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""},meshLoadState:{required:!0,tsType:{name:"union",raw:'"loading" | "loaded" | "error"',elements:[{name:"literal",value:'"loading"'},{name:"literal",value:'"loaded"'},{name:"literal",value:'"error"'}]},description:""},onFramePointCloud:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onMaximizeCurrentView:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onFrameMesh:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onFrameRegistrationPairs:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onFrameRegistrationPair:{required:!0,tsType:{name:"signature",type:"function",raw:"(index: number) => void",signature:{arguments:[{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:""},pointStyle:{required:!0,tsType:{name:"signature",type:"object",raw:"{ sizeMode: PointSizeMode; pointSize: number; radiusMeters: number; radiusScale: number; shape: PointShape }",signature:{properties:[{key:"sizeMode",value:{name:"unknown[union]",raw:"(typeof POINT_SIZE_MODES)[keyof typeof POINT_SIZE_MODES]",required:!0}},{key:"pointSize",value:{name:"number",required:!0}},{key:"radiusMeters",value:{name:"number",required:!0}},{key:"radiusScale",value:{name:"number",required:!0}},{key:"shape",value:{name:"unknown[union]",raw:"(typeof POINT_SHAPES)[keyof typeof POINT_SHAPES]",required:!0}}]}},description:""},onPointStyleChange:{required:!0,tsType:{name:"signature",type:"function",raw:'(next: RegistrationWorkbenchProps["pointStyle"]) => void',signature:{arguments:[{type:{name:"signature",raw:'RegistrationWorkbenchProps["pointStyle"]'},name:"next"}],return:{name:"void"}}},description:""},onOpenFieldColorizer:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Opens the field colorizer panel; renders its trigger in the style section."},meshInspectionPreview:{required:!0,tsType:{name:"signature",type:"object",raw:"{ enabled: boolean; opacity: number; wireframe: boolean }",signature:{properties:[{key:"enabled",value:{name:"boolean",required:!0}},{key:"opacity",value:{name:"number",required:!0}},{key:"wireframe",value:{name:"boolean",required:!0}}]}},description:""},onMeshInspectionPreviewChange:{required:!0,tsType:{name:"signature",type:"function",raw:'(next: RegistrationWorkbenchProps["meshInspectionPreview"]) => void',signature:{arguments:[{type:{name:"signature",raw:'RegistrationWorkbenchProps["meshInspectionPreview"]'},name:"next"}],return:{name:"void"}}},description:""},meshErrorTarget:{required:!0,tsType:{name:"number"},description:""},onMeshErrorTargetChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: number) => void",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"void"}}},description:""}}};const nt=`{
  "format": "carma-mesh-registration-v1",
  "pairs": [
    {
      "source": [
        890.3499239973465,
        25.310189668635992,
        -683.870014354774
      ],
      "target": [
        895.8295238736391,
        -18.861171336212006,
        -682.7662032682346
      ]
    },
    {
      "source": [
        861.5480113784284,
        26.27822254570915,
        -668.4721818466365
      ],
      "target": [
        866.4000196502494,
        -17.677400262626698,
        -666.1739850911
      ]
    },
    {
      "source": [
        835.3984945041783,
        26.75934491389927,
        -650.9865674945731
      ],
      "target": [
        839.8425509415837,
        -17.022922030055625,
        -648.3941578214478
      ]
    },
    {
      "source": [
        786.7532306186023,
        26.098772291911516,
        -611.7725363762765
      ],
      "target": [
        790.4851022803922,
        -17.929437394075542,
        -611.1698164696376
      ]
    },
    {
      "source": [
        784.748552685149,
        22.584242358259015,
        -606.3999044001878
      ],
      "target": [
        788.0640836405362,
        -21.090033456667992,
        -605.7710391339638
      ]
    },
    {
      "source": [
        813.8469118394893,
        24.015783654487542,
        -636.2602083587952
      ],
      "target": [
        818.0558233335717,
        -20.010234861794675,
        -634.4935732505614
      ]
    },
    {
      "source": [
        837.6535501277064,
        23.491841524266405,
        -655.5521014399975
      ],
      "target": [
        842.3973113460373,
        -20.098669698529363,
        -653.1879390924358
      ]
    },
    {
      "source": [
        889.2081884802005,
        23.18690277101934,
        -729.41883759705
      ],
      "target": [
        894.0707477369155,
        -18.295542106814366,
        -728.2980837834862
      ]
    },
    {
      "source": [
        871.5185652385921,
        21.31149895195828,
        -701.7762545161089
      ],
      "target": [
        876.8410567715094,
        -21.010486099648713,
        -700.5994681125485
      ]
    },
    {
      "source": [
        733.7437704970088,
        16.879797200753075,
        -558.6031650797344
      ],
      "target": [
        736.0841482243485,
        -28.234435361487055,
        -558.3991346931916
      ]
    },
    {
      "source": [
        743.020464896249,
        17.233189850815638,
        -554.6264960790248
      ],
      "target": [
        745.7592445942453,
        -28.067287357284407,
        -553.8379764109575
      ]
    },
    {
      "source": [
        674.8649468993408,
        14.55379984132481,
        -485.9618716030955
      ],
      "target": [
        677.0187997468536,
        -31.737111302590478,
        -485.85900489776526
      ]
    },
    {
      "source": [
        -61.153133801041264,
        19.36436807753466,
        42.736514682437644
      ],
      "target": [
        -60.873923673406,
        -27.63397364204036,
        45.120454843122545
      ]
    },
    {
      "source": [
        -63.290336410800535,
        18.802241838138738,
        36.19574891606061
      ],
      "target": [
        -62.86799077809065,
        -27.736924933779605,
        38.007812256658134
      ]
    },
    {
      "source": [
        536.4882281560516,
        11.976537304854057,
        -499.8420094723357
      ],
      "target": [
        537.3749203798775,
        -29.11560040290566,
        -498.8194360892053
      ]
    },
    {
      "source": [
        531.8707160227452,
        12.043260351107847,
        -490.1773063841601
      ],
      "target": [
        532.6754472606052,
        -29.127528531686846,
        -488.9726886276573
      ]
    },
    {
      "source": [
        -63.266685842448155,
        18.904175612905814,
        43.046909298785
      ],
      "target": [
        -63.20647669085746,
        -27.66893337452685,
        45.137555281797226
      ]
    },
    {
      "source": [
        -63.16026518874685,
        18.853722049270857,
        44.19882223021935
      ],
      "target": [
        -62.90007629966725,
        -27.650987901088037,
        46.0519909525846
      ]
    },
    {
      "source": [
        -992.7449883822836,
        18.301283417983264,
        813.8548804993634
      ],
      "target": [
        -995.1535336504542,
        -30.566124589076267,
        815.0960640142903
      ]
    },
    {
      "source": [
        -973.2617240306091,
        18.93150526912781,
        821.4844516082987
      ],
      "target": [
        -976.1080017438778,
        -32.38807736186271,
        822.0954266023766
      ]
    },
    {
      "source": [
        530.4044799804686,
        17.501703262329098,
        -497.4608764648437
      ],
      "target": [
        531.1264442368304,
        -22.86919249098667,
        -496.02176994812964
      ]
    },
    {
      "source": [
        541.7421264648438,
        22.70199966430665,
        -450.54574584960926
      ],
      "target": [
        543.3345762799142,
        -20.91482835011316,
        -448.62420528306814
      ]
    },
    {
      "source": [
        105.0669708251953,
        19.400289535522468,
        -76.07749176025393
      ],
      "target": [
        105.28094699938494,
        -27.31479028594576,
        -75.52102748056083
      ]
    },
    {
      "source": [
        91.40924835205077,
        19.400247573852532,
        -65.08194732666016
      ],
      "target": [
        90.87892937548429,
        -27.19929164355458,
        -63.96365991061423
      ]
    },
    {
      "source": [
        63.70952987670899,
        19.250160217285146,
        -42.6848258972168
      ],
      "target": [
        64.98422168873354,
        -27.285894499912562,
        -42.28578791076329
      ]
    },
    {
      "source": [
        18.75416564941406,
        19.20003318786621,
        -8.636353492736816
      ],
      "target": [
        17.537425540460994,
        -27.563157599958373,
        -6.227560045473615
      ]
    },
    {
      "source": [
        -21.2696762084961,
        20.149942398071286,
        14.555904388427734
      ],
      "target": [
        -22.76302714078503,
        -27.619134853997316,
        17.388842109783575
      ]
    },
    {
      "source": [
        -203.12760925292977,
        17.39949798583985,
        147.6065826416016
      ],
      "target": [
        -203.20493576723368,
        -27.827831982737965,
        150.57601371627283
      ]
    },
    {
      "source": [
        -196.57135009765625,
        17.499513626098636,
        142.36973571777344
      ],
      "target": [
        -196.60897737512866,
        -27.776755295256255,
        145.28517383399358
      ]
    },
    {
      "source": [
        -156.71359252929688,
        17.749612808227532,
        111.49617767333983
      ],
      "target": [
        -157.3496032125025,
        -27.749931584477583,
        113.97837580008192
      ]
    }
  ],
  "constraints": {
    "allowRotation": true,
    "allowVerticalTranslation": true,
    "maxTranslation": 100,
    "allowUniformScale": true
  }
}`,Ae="carma.mesh-registration.dataset",Ee=De.features.map(n=>{var m;const i=n.properties,l=(m=i.carmaConf3D)==null?void 0:m.pointcloud;if(!l)throw new Error(`Preset feature ${String(n.id)} carries no carma-pointcloud-v1 config`);return{id:String(n.id),label:i.title??String(n.id),sourceTag:i.sourceTag??"",defaultDatum:i.defaultDatum??"ellipsoidal",pointcloud:l}}),Oe="seg2512",rt=n=>n.url,_e=n=>({source:new g(n.source.x,n.source.y,n.source.z),target:new g(n.target.x,n.target.y,n.target.z)}),at=JSON.parse(nt),je=()=>at.pairs.map(({source:n,target:i})=>({source:new g(...n),target:new g(...i)}));function Re(n={}){const[i,l]=b.useState(()=>{try{return localStorage.getItem(Ae)??Oe}catch{return Oe}});b.useEffect(()=>{try{localStorage.setItem(Ae,i)}catch{}},[i]);const m=Ee.find(c=>c.id===i)??Ee[0];return t.jsx(ot,{preset:m,onSelectDataset:l,...n},m.id)}function ot({preset:n,onSelectDataset:i,color:l="classification",metric:m="z",colorRamp:c,sizeMode:o,pointSize:f,radiusMeters:w,radiusScale:p,shape:P=ce.CIRCLE,metricBlendMode:_,pointCompositeMode:x,background:N,sourceHeightDatum:F,heightOffset:de,meshOpacity:$,meshErrorTarget:y,meshWhite:he,clampMode:le,clampMin:K,clampMax:A,onColorizerOptionsChange:ee}){const J=n.id,I=`carma.mesh-registration.${J}`,te=`${I}.solve`,re=`${I}.style`,me=`${I}.mesh-preview`,H=b.useRef(new ge),fe=F??(n.defaultDatum==="dhhn"?Te.DHHN2016:Te.ELLIPSOIDAL),[Q,D]=b.useState(()=>{try{const a=localStorage.getItem(I);return a?JSON.parse(a).map(({source:Y,target:G})=>({source:new g(...Y),target:new g(...G)})):J==="seg2512"?je():[]}catch{return J==="seg2512"?je():[]}}),[v,z]=b.useState("pointcloud"),[S,C]=b.useState(!1),[q]=b.useState(()=>{try{const a=localStorage.getItem(te);return a?JSON.parse(a):null}catch{return null}}),[T,L]=b.useState(()=>q?{matrix:new ge().fromArray(q.matrix),translation:new g(...q.translation),rotation:new ve(...q.rotation),residuals:q.residuals,rmsResidualMeters:q.rmsResidualMeters,maximumResidualMeters:q.maximumResidualMeters,uniformScale:q.uniformScale??1}:null),[V,ae]=b.useState(()=>q?new ge().fromArray(q.matrix):new ge),[X,ne]=b.useState(null),[B,ye]=b.useState(()=>{try{const a=localStorage.getItem(me);if(a){const u=JSON.parse(a),Y=typeof u.opacity=="number"?Math.min(1,Math.max(.1,u.opacity)):1,G=!!u.wireframe;return{enabled:Y<1||G,opacity:Y,wireframe:G}}}catch{}return{enabled:!1,opacity:1,wireframe:!1}}),[e,r]=b.useState(y??.5),s=b.useRef(!1),[d,M]=b.useState("loading"),[h,j]=b.useState(()=>{const a={sizeMode:o??"meters",pointSize:f??2,radiusMeters:w??.3,radiusScale:p??1,shape:P};try{const u=localStorage.getItem(re);return u?{...a,...JSON.parse(u)}:a}catch{return a}});b.useEffect(()=>{localStorage.setItem(re,JSON.stringify(h))},[h]),b.useEffect(()=>{localStorage.setItem(me,JSON.stringify({opacity:B.opacity,wireframe:B.wireframe}))},[B]);const O=b.useRef({framePointCloud:()=>{},frameMesh:()=>{},frameRegistrationPairs:a=>{},maximizeCurrentView:()=>{},setRegistrationPairLines:(a,u)=>{},highlightPoint:(a,u)=>{},setMeshInspectionPreview:a=>{},openFieldColorizer:()=>{}}),U=b.useRef(Q);U.current=Q;const k=b.useCallback((a,u)=>{if(a===v)if(a==="pointcloud")D(U.current.concat({source:u.clone(),target:new g})),z("mesh");else{const Y=U.current,G=Y[Y.length-1];if(!G)return;const be=Y.slice(0,-1).concat({source:G.source,target:u.clone()});D(be),ne(be.filter(we=>we.target.lengthSq()>0).length-1),z("pointcloud"),C(!1)}},[v]),E=Q.filter(a=>a.target.lengthSq()>0),R=a=>{ne(a);const u=E[a];u&&(O.current.highlightPoint("pointcloud",new g(u.source.x,u.source.y,u.source.z)),O.current.highlightPoint("mesh",new g(u.target.x,u.target.y,u.target.z)))},Z=b.useCallback(()=>{O.current.setRegistrationPairLines(E.map(a=>({pointcloud:new g(a.source.x,a.source.y,a.source.z).applyMatrix4(V),mesh:new g(a.target.x,a.target.y,a.target.z)})),X)},[E,V,X]);b.useEffect(Z,[Z]);const W=E.map(({source:a,target:u})=>`${a.x},${a.y},${a.z}|${u.x},${u.y},${u.z}`).join(";");return b.useEffect(()=>{q&&q.pairSignature!==W&&(s.current?s.current=!1:(L(null),ae(H.current.clone()),localStorage.removeItem(te)))},[W,q]),b.useEffect(()=>{if(!T){localStorage.removeItem(te);return}localStorage.setItem(te,JSON.stringify({pairSignature:W,matrix:T.matrix.toArray(),translation:[T.translation.x,T.translation.y,T.translation.z],rotation:[T.rotation.x,T.rotation.y,T.rotation.z],residuals:T.residuals,rmsResidualMeters:T.rmsResidualMeters,maximumResidualMeters:T.maximumResidualMeters,uniformScale:T.uniformScale}))},[W,T]),b.useEffect(()=>{localStorage.setItem(I,JSON.stringify(E.map(({source:a,target:u})=>({source:[a.x,a.y,a.z],target:[u.x,u.y,u.z]}))))},[E]),t.jsxs("div",{className:"pointcloud-registration-scene",children:[t.jsx(Ue,{datasetUrl:rt(n.pointcloud),datasetName:n.label,sourceTag:n.sourceTag,fieldDimensions:n.pointcloud.fields??[],hasRgb:n.pointcloud.hasRgb??!1,sourceHeightDatum:fe,color:l,metric:m,colorRamp:c,sizeMode:h.sizeMode,pointSize:h.pointSize,radiusMeters:h.radiusMeters,shape:h.shape,metricBlendMode:_,pointCompositeMode:x,pointBudgetPercent:5,background:N,heightOffset:de,clampMode:le,clampMin:K,clampMax:A,showFieldColorizer:!0,showFieldColorizerButton:!1,showMesh2024:!0,pointTileset:n.pointcloud.delivery==="3d-tiles"&&n.pointcloud.bounds?{url:n.pointcloud.url,bounds:{min:n.pointcloud.bounds.min,max:n.pointcloud.bounds.max}}:void 0,registrationMatrix:V,sourceTransform:n.pointcloud.transform,onMountPriorResolved:a=>{H.current=a,q||ae(u=>u.equals(new ge)?a.clone():u)},meshErrorTarget:e,meshOpacity:$,meshWhite:he,pickingEnabled:S,pickKind:v,cameraStorageKey:`${I}.camera`,autoMaximizeOnCameraEnd:!0,onPick:k,onPairPicked:R,onColorizerOptionsChange:ee,onMeshLoadStateChange:M,onViewerReady:a=>{O.current=a,Z(),B.enabled&&a.setMeshInspectionPreview(B)}}),t.jsx(Ie,{pairs:E,onImportPairs:a=>{D(a.map(_e)),z("pointcloud"),L(null)},onLoadPreset:J==="seg2512"?()=>{D(je()),z("pointcloud"),L(null)}:void 0,datasetPresets:Ee.map(({id:a,label:u})=>({id:a,label:u})),activeDatasetId:J,onSelectDataset:i,onRemoveLastPair:()=>{D(a=>a.slice(0,-1)),z("pointcloud")},onClear:()=>{D([]),L(null),z("pointcloud")},onSolved:a=>{L(a),ae(a.matrix.clone())},onSelectPair:R,selectedPairIndex:X,onUpdatePair:(a,u)=>{const Y=E[a],G=_e(u);s.current=!0,D(be=>be.map(we=>we===Y?G:we)),O.current.highlightPoint("mesh",new g(u.target.x,u.target.y,u.target.z))},onRemovePair:a=>{const u=E[a];D(Y=>Y.filter(G=>G!==u)),ne(null),L(null),ae(H.current.clone()),z("pointcloud")},onAddPointPair:()=>{z("pointcloud"),C(!0)},meshLoadState:d,onFramePointCloud:()=>O.current.framePointCloud(),onMaximizeCurrentView:()=>O.current.maximizeCurrentView(),onFrameMesh:()=>O.current.frameMesh(),onFrameRegistrationPairs:()=>O.current.frameRegistrationPairs(E.flatMap(a=>[new g(a.source.x,a.source.y,a.source.z).applyMatrix4(V),new g(a.target.x,a.target.y,a.target.z)])),onFrameRegistrationPair:a=>{const u=E[a];u&&O.current.frameRegistrationPairs([new g(u.source.x,u.source.y,u.source.z).applyMatrix4(V),new g(u.target.x,u.target.y,u.target.z)])},pointStyle:h,onPointStyleChange:j,onOpenFieldColorizer:()=>O.current.openFieldColorizer(),meshInspectionPreview:B,onMeshInspectionPreviewChange:a=>{const u={...a,enabled:a.opacity<1||a.wireframe};ye(u),O.current.setMeshInspectionPreview(u)},meshErrorTarget:e,onMeshErrorTargetChange:a=>r(a)}),t.jsx("div",{className:"pointcloud-registration-instruction",children:T?"Solved. Export the transform from the result panel.":S?`Pick a ${v} point.`:"Use Add point pair to start picking."})]})}Re.__docgenInfo={description:"",methods:[],displayName:"MeshRegistrationScene"};const{useArgs:it}=__STORYBOOK_MODULE_PREVIEW_API__,Kt={title:"Applications/Point Clouds",id:"pointcloud-investigation-registration-workbench",component:Re,argTypes:{color:{control:"inline-radio",options:["white","rgb","classification","intensity"]},metric:{control:"select",options:Ve},colorRamp:{control:"select",options:Be},sizeMode:{name:"point size mode",control:"inline-radio",options:["auto","pixels","meters"],table:{category:"Point cloud"}},radiusScale:{name:"automatic radius scale",control:{type:"range",min:.25,max:4,step:.25},if:{arg:"sizeMode",eq:"auto"},table:{category:"Point cloud"}},pointSize:{name:"point size (pixels)",control:{type:"range",min:.5,max:8,step:.25},if:{arg:"sizeMode",eq:"pixels"},table:{category:"Point cloud"}},radiusMeters:{name:"point radius (meters)",control:{type:"range",min:.01,max:2,step:.01},if:{arg:"sizeMode",eq:"meters"},table:{category:"Point cloud"}},shape:{name:"point form",control:"inline-radio",options:Object.values(ce),table:{category:"Point cloud"}},metricBlendMode:{name:"metric blend",control:"inline-radio",options:["normal","multiply"]},pointCompositeMode:{name:"point blend",control:"inline-radio",options:["normal","multiply"]},background:{control:"inline-radio",options:["white","black"]},heightOffset:{name:"height offset",control:{type:"range",min:-70,max:70,step:.5}},meshOpacity:{name:"mesh opacity",control:{type:"range",min:0,max:1,step:.05}},meshErrorTarget:{name:"mesh error target",control:{type:"range",min:0,max:50,step:.5}},meshWhite:{name:"white mesh shading",control:"boolean"},clampMode:{name:"field clamp",control:"inline-radio",options:["auto","manual"]},clampMin:{name:"field minimum",control:"number",if:{arg:"clampMode",eq:"manual"}},clampMax:{name:"field maximum",control:"number",if:{arg:"clampMode",eq:"manual"}}},parameters:{docs:{description:{component:"Registers the built-in point-cloud datasets against Mesh 2024: pick corresponding point-cloud and mesh positions, then solve a constrained rigid registration. Dataset presets come from the ng playground's point-cloud FeatureCollection, including each dataset's mount prior and declared height datum."}}}},xe={render:n=>{const[,i]=it();return t.jsx(Re,{...n,onColorizerOptionsChange:l=>{Object.entries(l).some(([c,o])=>n[c]!==o)&&i(l)}})}};xe.args={sizeMode:"meters",pointSize:2,radiusMeters:.3,radiusScale:1,shape:ce.DOME,metricBlendMode:"multiply",pointCompositeMode:"normal",background:"white",heightOffset:0,color:"intensity",metric:"none",colorRamp:"viridis",clampMode:"manual",clampMin:2,clampMax:24};var qe,Fe,Le;xe.parameters={...xe.parameters,docs:{...(qe=xe.parameters)==null?void 0:qe.docs,source:{originalSource:`{
  render: args => {
    const [, updateArgs] = useArgs<typeof args>();
    return <MeshRegistrationScene {...args} onColorizerOptionsChange={next => {
      const changed = Object.entries(next).some(([key, value]) => args[key as keyof typeof args] !== value);
      if (changed) updateArgs(next);
    }} />;
  }
}`,...(Le=(Fe=xe.parameters)==null?void 0:Fe.docs)==null?void 0:Le.source}}};const Xt=["Workbench"];export{xe as Workbench,Xt as __namedExportsOrder,Kt as default};
