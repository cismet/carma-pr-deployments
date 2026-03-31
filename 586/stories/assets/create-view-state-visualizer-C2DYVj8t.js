import{i as b,c as _t,C as Y,j as Gi}from"./derivations-Dua_HNfC.js";import{V as P,P as rn,Q as Et,R as ki,a as he,L as ai,B as _e,e as on,I as Xi,F as wn,f as Zt,g as Ge,W as Yi,h as ri,U as oi,i as vt,j as qi,k as Rt,c as it,M as si,l as Zi,m as be,n as $i,C as Ki,o as li,D as zt,p as Qi,q as tt,r as Ji,s as Cn,t as sn,u as ea,v as ta,w as na,x as ia,y as aa,S as ra,b as oa,z as sa,A as la,H as ca,E as da,G as ua}from"./three.module-DzkIFmz1.js";import{C as Ce}from"./maplibre-gl-fs-Ci3W0.js";import"./jsx-runtime-DCY474Ph.js";import"./index-f9CH5uyH.js";import{P as ze,e as ha,T as ci,a as me,f as xn}from"./pi-CbcS5xMh.js";import{c as H}from"./clamp-co6UzHBn.js";import{r as ma}from"./createRingSegment-CIBPlpEf.js";import{z as di}from"./angle-normalization-DfY_rR75.js";import{r as fa,d as ui}from"./angles-DDSQPScU.js";import"./geodetic-BZRRboRE.js";import{i as ga}from"./plane-intersections-DhJfyQJx.js";import{b as pa}from"./geometry2d-BgvfrEuo.js";import{V as ln}from"./constants-C6-_E4xW.js";const bn=(n,e,t)=>{const i=n[n.length-1];i&&i.distanceToSquared(e)<=t*t||n.push(e)},Pa=(n,e,t,i=ln)=>{const a=e.clone().sub(n),r=a.dot(t.normal);if(Math.abs(r)<=i)return null;const s=-t.distanceToPoint(n)/r;return!Number.isFinite(s)||s<-i||s>1+i?null:n.clone().add(a.multiplyScalar(Math.min(1,Math.max(0,s))))},wa=(n,e,t=ln)=>{if(n.length===0)return[];const i=[];let a=n[n.length-1],r=e.distanceToPoint(a)>=-t;if(n.forEach(s=>{const l=e.distanceToPoint(s)>=-t;if(r!==l){const c=Pa(a,s,e,t);c&&bn(i,c,t)}l&&bn(i,s.clone(),t),a=s,r=l}),i.length>=2){const s=i[0],o=i[i.length-1];s.distanceToSquared(o)<=t*t&&i.pop()}return i},Ca=(n,e,{epsilon:t=ln}={})=>e.reduce((i,a)=>wa(i,a,t),[...n]),$t=({origin:n,normal:e})=>new rn().setFromNormalAndCoplanarPoint(e.clone(),n),xa=({origin:n,normal:e,insidePoint:t,epsilon:i})=>{if(e.lengthSq()<=i*i)return null;const a=$t({origin:n,normal:e.clone().normalize()});return a.distanceToPoint(t)<0&&a.negate(),a},ba=({apex:n,forward:e,up:t,fovHorizontalRad:i,fovVerticalRad:a,near:r,far:s,epsilon:o=0})=>{const l=e.clone();if(l.lengthSq()<=o*o)return[];l.normalize();const c=l.clone().cross(t);if(c.lengthSq()<=o*o)return[];c.normalize();const d=c.clone().cross(l);if(d.lengthSq()<=o*o)return[];d.normalize();const g=Math.tan(i*.5),h=Math.tan(a*.5),w=[l.clone().add(c.clone().multiplyScalar(g)).add(d.clone().multiplyScalar(h)).normalize(),l.clone().add(c.clone().multiplyScalar(-g)).add(d.clone().multiplyScalar(h)).normalize(),l.clone().add(c.clone().multiplyScalar(-g)).add(d.clone().multiplyScalar(-h)).normalize(),l.clone().add(c.clone().multiplyScalar(g)).add(d.clone().multiplyScalar(-h)).normalize()],u=w.reduce((A,R)=>A.add(R),new P);if(u.lengthSq()<=o*o)return[];const y=w.map((A,R)=>xa({origin:n,normal:A.clone().cross(w[(R+1)%w.length]),insidePoint:n.clone().add(u.clone().normalize()),epsilon:o})).filter(A=>A!==null);return b(r)&&r>o&&y.unshift($t({origin:n.clone().add(l.clone().multiplyScalar(r)),normal:l.clone()})),b(s)&&s>o&&y.push($t({origin:n.clone().add(l.clone().multiplyScalar(s)),normal:l.clone().negate()})),y},Re=Object.freeze({bearing:"#22d3ee",pitch:"#f59e0b",range:"#64748b",altitude:"#94a3b8",east:Ce.AXIS_EAST,north:Ce.AXIS_NORTH,up:Ce.AXIS_UP,cameraForward:"#64748b",cameraRight:Ce.AXIS_EAST,cameraUp:Ce.AXIS_UP,imageX:Ce.AXIS_EAST,imageY:Ce.AXIS_UP}),Kt=Object.freeze({fovDeg:38,orthographic:!1}),Sa=!1,Sn=Object.freeze({maxPitch:null,imagePlaneDistance:null}),$=Object.freeze({surface:Object.freeze({showGraticule:!1,show:!0,rotateWithPose:!1,sphereCapRad:ze,sphereOpacity:.13}),worldAxes:Object.freeze({show:!0,lineWidthPx:.5}),angleCues:Object.freeze({show:!0,lineWidthPx:1}),cameraView:Object.freeze({imagePlane:Object.freeze({show:!0,showOffset:!0}),axes:Object.freeze({show:!0,showInactive:!0,lineWidthPx:.5}),frustum:Object.freeze({show:!0,showInactive:!0,lineWidthPx:.5}),projectionPlane:Object.freeze({show:!0}),marker:Object.freeze({show:!0})}),altitude:Object.freeze({show:!0,showScaleBreak:!0,lineWidthPx:2}),labels:Object.freeze({showAxes:!0,showAngles:!0,showImagePlane:!0,fontSizePx:11}),cueColors:Re}),An=(...n)=>{const e=n.reduce((t,i)=>i?{...t,...i}:t,{});return{...Kt,...e}},yn=(...n)=>{const e=n.reduce((t,i)=>i?{...t,...i}:t,{});return{maxPitch:typeof e.maxPitch=="number"&&Number.isFinite(e.maxPitch)?e.maxPitch:Sn.maxPitch,imagePlaneDistance:typeof e.imagePlaneDistance=="number"&&Number.isFinite(e.imagePlaneDistance)?e.imagePlaneDistance:Sn.imagePlaneDistance}},On=(...n)=>{var t,i,a,r,s;const e=n.reduce((o,l)=>{var c,d,g,h,w,u,y,A,R,O;return l?{surface:{...o.surface??{},...l.surface??{}},worldAxes:{...o.worldAxes??{},...l.worldAxes??{}},angleCues:{...o.angleCues??{},...l.angleCues??{}},cameraView:{...o.cameraView??{},...l.cameraView??{},imagePlane:{...((c=o.cameraView)==null?void 0:c.imagePlane)??{},...((d=l.cameraView)==null?void 0:d.imagePlane)??{}},axes:{...((g=o.cameraView)==null?void 0:g.axes)??{},...((h=l.cameraView)==null?void 0:h.axes)??{}},frustum:{...((w=o.cameraView)==null?void 0:w.frustum)??{},...((u=l.cameraView)==null?void 0:u.frustum)??{}},projectionPlane:{...((y=o.cameraView)==null?void 0:y.projectionPlane)??{},...((A=l.cameraView)==null?void 0:A.projectionPlane)??{}},marker:{...((R=o.cameraView)==null?void 0:R.marker)??{},...((O=l.cameraView)==null?void 0:O.marker)??{}}},altitude:{...o.altitude??{},...l.altitude??{}},labels:{...o.labels??{},...l.labels??{}},cueColors:{...o.cueColors??{},...l.cueColors??{}}}:o},{});return{surface:{...$.surface,...e.surface??{}},worldAxes:{...$.worldAxes,...e.worldAxes??{}},angleCues:{...$.angleCues,...e.angleCues??{}},cameraView:{imagePlane:{...$.cameraView.imagePlane,...((t=e.cameraView)==null?void 0:t.imagePlane)??{}},axes:{...$.cameraView.axes,...((i=e.cameraView)==null?void 0:i.axes)??{}},frustum:{...$.cameraView.frustum,...((a=e.cameraView)==null?void 0:a.frustum)??{}},projectionPlane:{...$.cameraView.projectionPlane,...((r=e.cameraView)==null?void 0:r.projectionPlane)??{}},marker:{...$.cameraView.marker,...((s=e.cameraView)==null?void 0:s.marker)??{}}},altitude:{...$.altitude,...e.altitude??{}},labels:{...$.labels,...e.labels??{}},cueColors:{...$.cueColors,...e.cueColors??{}}}},Qt=Object.freeze({hemisphere:Object.freeze({radius:1,widthSegments:80,heightSegments:48,minCapRad:.01}),sampling:Object.freeze({circleSampleCount:96,horizontalArcSampleCount:64,pitchArcSampleCount:56,discSegments:96}),overviewCamera:Object.freeze({rotationAroundUpRad:ha,orbitPhiRad:Math.acos(1.22/Math.hypot(4.1,1.22)),fovDeg:38,near:.1,far:100}),frame:Object.freeze({cameraBoxSize:1/6,padding:.25}),axes:Object.freeze({axisLength:.5,labelUpOffset:.01,northLabelExtraLength:.05}),arcs:Object.freeze({indicatorRadius:.15,outerRadius:1,maxPitchRingDashSize:.08,maxPitchRingGapSize:.06}),imagePlane:Object.freeze({distance:.42,basisLineLength:.24,originHalfExtent:.05,fallbackHalfHeight:.18,fallbackHalfWidth:.24,maxDistance:1.5,labelOffsetFactor:.14}),altitude:Object.freeze({zeroElevationDiscRadius:.25,overflowGapHalfHeight:.16,scaleBreakHalfHeight:.032,scaleBreakHalfWidth:.024,rangeLabelFallbackUpFactor:.35}),numeric:Object.freeze({minRenderLineWidthPx:.1,epsilon:1e-6}),interaction:Object.freeze({minOrbitPhi:.15,maxOrbitPhiFactorOfPi:.48})}),hi=Object.freeze({scene:Object.freeze({ambientLight:Object.freeze({color:16777215,intensity:.45}),hemisphereLight:Object.freeze({skyColor:14742270,groundColor:13358561,intensity:.72}),directionalLight:Object.freeze({color:16777215,intensity:1.34,position:Object.freeze({x:2.6,y:3.1,z:1.7})})}),surface:Object.freeze({hemisphere:Object.freeze({color:15857145,roughness:.12,metalness:.01,clearcoat:1,clearcoatRoughness:.06,emissive:14742270,emissiveIntensity:.025}),altitudeDisc:Object.freeze({color:9741240,opacity:.12}),altitudeOutline:Object.freeze({color:9741240,opacity:.72}),maxPitchRing:Object.freeze({color:Ce.AXIS_EAST,opacity:.95})}),camera:Object.freeze({fillColor:9741240,edgeColor:6583435,emissiveColor:3359061,rangeOpacity:.76,bodyOpacity:.32,markerEmissiveIntensity:.05}),altitude:Object.freeze({lineColor:9741240,lineOpacity:.96,breakOpacity:.98}),arcs:Object.freeze({bearingOpacity:.88,pitchOpacity:.9}),axes:Object.freeze({opacity:.95}),imagePlane:Object.freeze({neutralColor:988970,forwardOpacity:.62,originOpacity:.95,rightColor:8141549,rightOpacity:.95,upColor:1409085,upOpacity:.95,surfaceOpacity:.32,offsetSurfaceOpacity:.32}),frustum:Object.freeze({color:4674921,opacity:.64})}),Aa=Object.freeze({size:Object.freeze({widthPx:176,heightPx:176}),geometry:Qt,materials:hi,display:$,overviewCamera:Qt.overviewCamera}),mi=1e-8,vn=n=>b(n)?n:0,Rn=n=>b(n)&&Math.abs(n)>mi?Math.abs(n):1,En=(n,e)=>b(n)?n:e,ya=({clientX:n,clientY:e,viewport:t})=>{const i=vn(t.left),a=vn(t.top),r=Rn(t.width),s=Rn(t.height),o=En(n,i+r*.5),l=En(e,a+s*.5),c=(o-i)/r*2-1,d=1-(l-a)/s*2,g=c*c+d*d;if(g<=1)return new P(c,d,Math.sqrt(1-g));const h=Math.sqrt(g);return new P(c/h,d/h,0)},Oa=({startVector:n,currentVector:e,epsilon:t=mi})=>{const i=n.clone(),a=e.clone();return i.lengthSq()<=t||a.lengthSq()<=t?new Et:(i.normalize(),a.normalize(),new Et().setFromUnitVectors(i,a).normalize())},va=({screenRotation:n,cameraWorldQuaternion:e})=>{const t=n.clone().normalize(),i=e.clone().normalize(),a=i.clone().invert();return i.multiply(t).multiply(a).normalize()},Ra=({startVector:n,currentVector:e,cameraWorldQuaternion:t})=>{const i=Oa({startVector:n,currentVector:e});return va({screenRotation:i,cameraWorldQuaternion:t})},In=new P(0,1,0),Ln=new P(1,0,0),_n=new P(0,0,1),It={XZ:"xz",XY:"xy",YZ:"yz"},Ea=n=>n===It.XZ?{tangentU:_n,tangentV:Ln}:n===It.XY?{tangentU:Ln,tangentV:In}:{tangentU:_n,tangentV:In},cn=({center:n=new P(0,0,0),tangentU:e,tangentV:t,radiusU:i,radiusV:a=i,startAngle:r=0,endAngle:s=ci,sampleCount:o,closeLoop:l=!1})=>{const c=e.clone().normalize(),d=t.clone().normalize();return Array.from({length:o+1},(g,h)=>{const u=(l&&h===o?0:h)/o,y=r+(s-r)*u;return n.clone().add(c.clone().multiplyScalar(Math.cos(y)*i)).add(d.clone().multiplyScalar(Math.sin(y)*a))})},fi=({radius:n,axis:e,offset:t=new P(0,0,0),sampleCount:i,closeLoop:a=!0})=>{const{tangentU:r,tangentV:s}=Ea(e);return cn({center:t,tangentU:r,tangentV:s,radiusU:n,startAngle:0,endAngle:ci,sampleCount:i,closeLoop:a})},Ia=new P(0,1,0),La=new P(1,0,0),_a=new P(0,0,-1),Lt=({bearing:n,radius:e,y:t=0})=>new P(Math.sin(n)*e,t,-Math.cos(n)*e),zn=({radius:n,startAngle:e,endAngle:t,y:i=0,sampleCount:a})=>cn({center:new P(0,i,0),tangentU:_a,tangentV:La,radiusU:n,startAngle:e,endAngle:t,sampleCount:a}),Dn=({bearing:n,elevation:e,radius:t,sampleCount:i})=>{const a=Lt({bearing:n,radius:1});return cn({tangentU:a,tangentV:Ia,radiusU:t,startAngle:0,endAngle:e,sampleCount:i})},za=({maxPitch:n,hemisphereRadius:e,sampleCount:t})=>n===null?null:fi({radius:Math.sin(n)*e,axis:It.XZ,offset:new P(0,Math.cos(n)*e,0),closeLoop:!0,sampleCount:t}),Da=({altitudeMeters:n,rangeMeters:e,hemisphereRadius:t})=>{if(!b(n)||n<=0)return{groundDistance:0,overflow:!1};if(!b(e)||e<=0)return{groundDistance:t,overflow:!0};const i=n/e;return{groundDistance:H(i,0,t),overflow:i>t}},Ma=({planeDiscY:n,overflow:e,showScaleBreak:t,overflowGapHalfHeight:i,scaleBreakHalfHeight:a,scaleBreakHalfWidth:r})=>{if(!e||!t)return{stemSegments:[[new P(0,n,0),new P(0,0,0)]],overflowScaleBreakMarkers:null};const s=n*.5,o=s+i,l=s-i,c=d=>[new P(0,d+a*1.5,0),new P(r,d+a*.5,0),new P(-r,d-a*.5,0),new P(0,d-a*1.5,0)];return{stemSegments:[[new P(0,n,0),new P(0,o,0)],[new P(0,l,0),new P(0,0,0)]],overflowScaleBreakMarkers:[c(o),c(l)]}},Ta=({center:n,horizontalDirection:e,verticalDirection:t,halfExtent:i})=>({horizontal:[n.clone().add(e.clone().normalize().multiplyScalar(-i)),n.clone().add(e.clone().normalize().multiplyScalar(i))],vertical:[n.clone().add(t.clone().normalize().multiplyScalar(-i)),n.clone().add(t.clone().normalize().multiplyScalar(i))]}),Wa=new P(0,1,0),Va=128,Ba=n=>{if(n.length<3)return 0;let e=0;for(let t=0;t<n.length;t+=1){const i=n[t],a=n[(t+1)%n.length];e+=i.x*a.z-a.x*i.z}return Math.abs(e)*.5},Ua=n=>pa(n,Va).map(e=>new P(e.x,0,e.y)),nt=({origin:n,normal:e})=>new rn().setFromNormalAndCoplanarPoint(e.clone(),n),gi=({origin:n,normal:e,insidePoint:t,epsilon:i})=>{if(e.lengthSq()<=i*i)return null;const a=nt({origin:n,normal:e.clone().normalize()});return a.distanceToPoint(t)<0&&a.negate(),a},Na=({polygon:n,epsilon:e})=>{const t=Ba(n);return n.length>=3&&t>e?n:null},Mn=({radius:n,clipPlanes:e,epsilon:t})=>Na({polygon:Ca(Ua(n),e,{epsilon:t}),epsilon:t}),Fa=({tangentPlaneCorners:n,imagePlaneCenter:e,forward:t,near:i,far:a,epsilon:r})=>{const s=[[0,1],[1,2],[2,3],[3,0]],o=t.clone();return o.lengthSq()<=r*r?[]:(o.normalize(),[...[nt({origin:e.clone().add(o.clone().multiplyScalar(typeof i=="number"?i:0)),normal:o}),...typeof a=="number"&&a>r?[nt({origin:e.clone().add(o.clone().multiplyScalar(a)),normal:o.clone().negate()})]:[]],...s.map(([c,d])=>gi({origin:n[c],normal:n[d].clone().sub(n[c]).cross(o),insidePoint:e,epsilon:r})).filter(c=>c!==null)])},ja=({projectedCorners:n,imagePlaneCenter:e,forward:t,near:i,far:a,epsilon:r})=>{const s=[[0,1],[1,2],[2,3],[3,0]],o=n.reduce((c,d)=>c.add(d.clone()),new P).multiplyScalar(1/n.length),l=t.clone();return l.lengthSq()<=r*r?[]:(l.normalize(),s.map(([c,d])=>gi({origin:n[c],normal:n[d].clone().sub(n[c]).cross(Wa),insidePoint:o,epsilon:r})).filter(c=>c!==null).concat(typeof i=="number"?[nt({origin:e.clone().add(l.clone().multiplyScalar(i)),normal:l.clone()})]:[]).concat(typeof a=="number"&&a>r?[nt({origin:e.clone().add(l.clone().multiplyScalar(a)),normal:l.clone().negate()})]:[]))},Tn=1e-6,Ha=new P(0,0,0),Ga=new P(0,1,0),ka=new rn().setFromNormalAndCoplanarPoint(Ga.clone(),Ha),Wn=new P(0,1,0),Vn={bearingRotation:new Et,inverseBearingRotation:new Et},pi=n=>di(n),Pi=n=>H(n,Tn,me-Tn),Ue=(n,e)=>b(n)&&n>e?n:void 0,ke=({distanceMeters:n,rangeMeters:e,hemisphereRadius:t,epsilon:i})=>{if(!(!b(n)||n<=i||!b(e)||e<=i))return n/e*t},Xa=n=>{var t;const e=(t=n.intrinsics)==null?void 0:t.fovHorizontal;return b(e)?Pi(e):null},Ya=n=>{var t;const e=(t=n.intrinsics)==null?void 0:t.fov;return b(e)?Pi(e):null},qa=n=>{var r,s,o;const e=n.metadata.viewport;if(b(e==null?void 0:e.widthPx)&&e.widthPx>0&&b(e==null?void 0:e.heightPx)&&e.heightPx>0)return e.widthPx/e.heightPx;const t=(r=n.intrinsics)==null?void 0:r.viewOffset;if(b(t==null?void 0:t.width)&&t.width>0&&b(t==null?void 0:t.height)&&t.height>0)return t.width/t.height;const i=(s=n.intrinsics)==null?void 0:s.fov,a=(o=n.intrinsics)==null?void 0:o.fovHorizontal;if(b(i)&&i>0&&b(a)&&a>0){const l=Math.tan(i*.5),c=Math.tan(a*.5);if(b(l)&&l>0&&b(c)&&c>0)return c/l}return 1},Za=({viewState:n,visualized:e,distance:t,maxDistance:i,hemisphereRadius:a,epsilon:r})=>{var l;const o=(((l=n.intrinsics)==null?void 0:l.type)??Y.PERSPECTIVE)===Y.ORTHOGRAPHIC?a:t;return H(e.imagePlaneDistance??o,r,a*i)},le=({value:n,epsilon:e})=>Math.max(e,n),$a=n=>{var i;const e=n.metadata.viewport;if(b(e==null?void 0:e.widthPx)&&e.widthPx>0&&b(e==null?void 0:e.heightPx)&&e.heightPx>0)return{widthPx:e.widthPx,heightPx:e.heightPx};const t=(i=n.intrinsics)==null?void 0:i.viewOffset;return b(t==null?void 0:t.width)&&t.width>0&&b(t==null?void 0:t.height)&&t.height>0?{widthPx:t.width,heightPx:t.height}:null},Ka=({viewState:n,rangeMeters:e,hemisphereRadius:t,epsilon:i})=>{const a=$a(n);if(!a)return null;const r=Gi({intrinsics:n.intrinsics,rangeM:e,viewportWidthPx:a.widthPx,viewportHeightPx:a.heightPx});if(!b(r)||r<=i||!b(e)||e<=i)return null;const s=ke({distanceMeters:r*a.widthPx*.5,rangeMeters:e,hemisphereRadius:t,epsilon:i}),o=ke({distanceMeters:r*a.heightPx*.5,rangeMeters:e,hemisphereRadius:t,epsilon:i});return b(s)&&s>i&&b(o)&&o>i?{halfWidth:le({value:s,epsilon:i}),halfHeight:le({value:o,epsilon:i})}:null},Qa=({aspect:n,hemisphereRadius:e,epsilon:t})=>{const i=b(n)&&n>0?n:1;return i>=1?{halfWidth:le({value:e*.25,epsilon:t}),halfHeight:le({value:e*.25/i,epsilon:t})}:{halfWidth:le({value:e*.25*i,epsilon:t}),halfHeight:le({value:e*.25,epsilon:t})}},wi=({origin:n,direction:e,epsilon:t})=>{const i=e.clone();if(i.lengthSq()<=t*t)return null;i.normalize();const a=ga(new ki(n.clone(),i),ka,t);return a&&a.clone().sub(n).dot(i)>=-t?a:null},Ja=({origin:n,direction:e,radius:t,epsilon:i})=>{const a=e.clone();if(a.lengthSq()<=i*i)return null;a.normalize();const r=a.dot(a),s=2*n.dot(a),o=n.dot(n)-t*t,l=s*s-4*r*o;if(!Number.isFinite(l)||l<0)return null;const c=Math.sqrt(Math.max(0,l)),d=(-s-c)/(2*r),g=(-s+c)/(2*r),h=[d,g].filter(u=>Number.isFinite(u)&&u>i).sort((u,y)=>u-y),w=h.length>=2?h[1]:h.length===1?h[0]:void 0;return typeof w=="number"?n.clone().add(a.multiplyScalar(w)):null},Bn=({origin:n,direction:e,hemisphereRadius:t,epsilon:i})=>{var o;if(n.y<-i)return null;const a=wi({origin:n,direction:e,epsilon:i}),r=Ja({origin:n,direction:e,radius:t,epsilon:i});return((o=[a,r].filter(l=>l!==null).map(l=>({point:l,distanceSq:l.distanceToSquared(n)})).sort((l,c)=>l.distanceSq-c.distanceSq)[0])==null?void 0:o.point)??null},dn=({viewingBearing:n,pitch:e,hemisphereRadius:t})=>{const i=H(e,0,ze),a=pi(n+me);return Lt({bearing:a,radius:Math.sin(i)*t,y:Math.cos(i)*t})},Gt=n=>{const e=n.clone().normalize(),t=Math.asin(H(e.y,-1,1)),i=ze-t,a=Math.atan2(e.x,-e.z);return{bearing:pi(a-me),pitch:i,elevation:t}},Un=({viewState:n,hemisphereRadius:e})=>(()=>{const{bearing:t,pitch:i}=_t(n);return dn({viewingBearing:t,pitch:i,hemisphereRadius:e})})(),er=({viewState:n,hemisphereRadius:e})=>{const{bearing:t,pitch:i}=_t(n),a=dn({viewingBearing:t,pitch:i,hemisphereRadius:e}),{forward:r,right:s,up:o}=ma(n.orientation);return{bearing:t,cameraPosition:a,forward:r,right:s,up:o}},I=(n,e)=>n.clone().applyQuaternion(e),Jt=(n,e)=>[I(n[0],e),I(n[1],e)],en=(n,e)=>[I(n[0],e),I(n[1],e),I(n[2],e),I(n[3],e)],Nn=(n,e)=>n?en(n,e):null,tr=(n,e)=>(n==null?void 0:n.map(t=>I(t,e)))??null,nr=(n,e)=>n.map(t=>t?Jt(t,e):null),ir=(n,e)=>({...n,cameraPosition:I(n.cameraPosition,e),forward:I(n.forward,e),right:I(n.right,e),up:I(n.up,e),imagePlaneCenter:I(n.imagePlaneCenter,e),croppedImagePlaneCenter:I(n.croppedImagePlaneCenter,e),imagePlaneCorners:en(n.imagePlaneCorners,e),offsetImagePlaneCorners:Nn(n.offsetImagePlaneCorners,e),orthographicTangentPlaneCorners:Nn(n.orthographicTangentPlaneCorners,e),projectionPlanePolygon:tr(n.projectionPlanePolygon,e),fullImagePlaneCorners:en(n.fullImagePlaneCorners,e),frustumEdges:nr(n.frustumEdges,e),imagePlaneAxisOrigin:I(n.imagePlaneAxisOrigin,e),imagePlaneXAxisEnd:I(n.imagePlaneXAxisEnd,e),imagePlaneYAxisEnd:I(n.imagePlaneYAxisEnd,e),basisRightEnd:I(n.basisRightEnd,e),basisUpEnd:I(n.basisUpEnd,e),imagePlaneOriginX:Jt(n.imagePlaneOriginX,e),imagePlaneOriginY:Jt(n.imagePlaneOriginY,e)}),ar=({viewState:n,visualized:e,hemisphereRadius:t,imagePlaneDefaults:i,epsilon:a,cameraPosition:r,forward:s,right:o,up:l})=>{var Wt,Vt,Bt,Ut,Nt,Ft,jt,m,f,C,v;const c=Ya(n),d=Xa(n),{range:g}=_t(n),h=Za({viewState:n,visualized:e,distance:i.distance,maxDistance:i.maxDistance,hemisphereRadius:t,epsilon:a}),w=((Wt=n.intrinsics)==null?void 0:Wt.type)??Y.PERSPECTIVE,u=(Vt=n.intrinsics)==null?void 0:Vt.viewOffset,y=(Bt=n.intrinsics)==null?void 0:Bt.projectionMatrix,A=!!u&&b(u.fullWidth)&&b(u.width)&&b(u.offsetX)&&u.fullWidth>0,R=!!u&&b(u.fullHeight)&&b(u.height)&&b(u.offsetY)&&u.fullHeight>0,O=r.clone().add(s.clone().multiplyScalar(h)),j=w===Y.PERSPECTIVE&&y?Math.abs(y.elements[0]):null,D=w===Y.PERSPECTIVE&&y?Math.abs(y.elements[5]):null,fe=qa(n),Me=w===Y.ORTHOGRAPHIC?Ka({viewState:n,rangeMeters:g,hemisphereRadius:t,epsilon:a})??Qa({aspect:fe,hemisphereRadius:t,epsilon:a}):null,at=Me?Me.halfHeight:b(D)&&D>0?le({value:h/D,epsilon:a}):b(c)?le({value:Math.tan((c??xn)*.5)*h,epsilon:a}):i.fallbackHalfHeight,_=Me?Me.halfWidth:b(j)&&j>0?le({value:h/j,epsilon:a}):b(d)?le({value:Math.tan((d??ze)*.5)*h,epsilon:a}):i.fallbackHalfWidth,Q=at,qe=O.clone(),Te=O.clone().add(o.clone().multiplyScalar(_)).add(l.clone().multiplyScalar(Q)),ce=O.clone().add(o.clone().multiplyScalar(-_)).add(l.clone().multiplyScalar(Q)),ge=O.clone().add(o.clone().multiplyScalar(-_)).add(l.clone().multiplyScalar(-Q)),Se=O.clone().add(o.clone().multiplyScalar(_)).add(l.clone().multiplyScalar(-Q)),We=A||R,ot=A&&u.fullWidth>0?u.offsetX/u.fullWidth:0,st=R&&u.fullHeight>0?u.offsetY/u.fullHeight:0,U=A&&u.fullWidth>0?u.width/u.fullWidth:1,J=R&&u.fullHeight>0?u.height/u.fullHeight:1,M=Te.clone().sub(ce),Ve=ge.clone().sub(ce),ee=We?ce.clone().add(M.clone().multiplyScalar(ot)).add(Ve.clone().multiplyScalar(st)):null,pe=ee?ee.clone().add(M.clone().multiplyScalar(U)):null,Ae=ee?ee.clone().add(Ve.clone().multiplyScalar(J)):null,Be=pe&&Ae?pe.clone().add(Ve.clone().multiplyScalar(J)):null,de=[r.clone().add(o.clone().multiplyScalar(_)).add(l.clone().multiplyScalar(Q)),r.clone().add(o.clone().multiplyScalar(-_)).add(l.clone().multiplyScalar(Q)),r.clone().add(o.clone().multiplyScalar(-_)).add(l.clone().multiplyScalar(-Q)),r.clone().add(o.clone().multiplyScalar(_)).add(l.clone().multiplyScalar(-Q))],G=[Te,ce,ge,Se],ye=[de[0],de[1],de[2],de[3]],ue=w===Y.ORTHOGRAPHIC?ye:G,te=w===Y.ORTHOGRAPHIC?r.clone():qe;ue[0].clone().sub(ue[1]);const lt=ue[2].clone().sub(ue[1]).clone().normalize(),Ze=ue[1].clone(),$e=w===Y.ORTHOGRAPHIC?ye.map(E=>wi({origin:E,direction:s,epsilon:a})):null,ct=$e&&$e.every(E=>E!==null)?$e:null,Tt=w===Y.PERSPECTIVE?ba({apex:r,forward:s,up:l,fovHorizontalRad:d??ze,fovVerticalRad:c??xn,near:ke({distanceMeters:Ue((Nt=(Ut=n.intrinsics)==null?void 0:Ut.frustum)==null?void 0:Nt.near,a),rangeMeters:g,hemisphereRadius:t,epsilon:a}),far:ke({distanceMeters:Ue((jt=(Ft=n.intrinsics)==null?void 0:Ft.frustum)==null?void 0:jt.far,a),rangeMeters:g,hemisphereRadius:t,epsilon:a}),epsilon:a}):null,dt=Ue(ke({distanceMeters:Ue((f=(m=n.intrinsics)==null?void 0:m.frustum)==null?void 0:f.near,a),rangeMeters:g,hemisphereRadius:t,epsilon:a}),a),q=Ue(ke({distanceMeters:Ue((v=(C=n.intrinsics)==null?void 0:C.frustum)==null?void 0:v.far,a),rangeMeters:g,hemisphereRadius:t,epsilon:a}),a),ut=w===Y.ORTHOGRAPHIC?Mn({radius:t,clipPlanes:ct?ja({projectedCorners:ct,imagePlaneCenter:te,forward:s,near:dt,far:q,epsilon:a}):Fa({tangentPlaneCorners:ye,imagePlaneCenter:te,forward:s,near:dt,far:q,epsilon:a}),epsilon:a}):Mn({radius:t,clipPlanes:Tt,epsilon:a}),ht=w===Y.ORTHOGRAPHIC?ye.map(E=>{const L=Bn({origin:E,direction:s,hemisphereRadius:t,epsilon:a});return L?[E,L]:null}):G.map(E=>{const L=Bn({origin:r,direction:E.clone().sub(r),hemisphereRadius:t,epsilon:a});return[r,L??E]}),Oe=Ta({center:te,horizontalDirection:o,verticalDirection:l,halfExtent:i.originHalfExtent});return{cameraPosition:r,forward:s,right:o,up:l,imagePlaneCenter:te,croppedImagePlaneCenter:te.clone(),hasViewOffset:We,imagePlaneCorners:ue,offsetImagePlaneCorners:We?[pe,ee,Ae,Be]:null,orthographicTangentPlaneCorners:w===Y.ORTHOGRAPHIC?ye:null,projectionPlanePolygon:ut,fullImagePlaneCorners:ue,frustumEdges:ht,imagePlaneAxisOrigin:Ze,imagePlaneXAxisEnd:Ze.clone().add(o.clone().multiplyScalar(i.basisLineLength)),imagePlaneYAxisEnd:Ze.clone().add(lt.clone().multiplyScalar(i.basisLineLength)),basisRightEnd:te.clone().add(o.clone().multiplyScalar(i.basisLineLength)),basisUpEnd:te.clone().add(l.clone().multiplyScalar(i.basisLineLength)),imagePlaneOriginX:Oe.horizontal,imagePlaneOriginY:Oe.vertical}},rr=({viewState:n,visualized:e,hemisphereRadius:t,imagePlaneDefaults:i,epsilon:a})=>{const{bearing:r,cameraPosition:s,forward:o,right:l,up:c}=er({viewState:n,hemisphereRadius:t}),d=Vn.inverseBearingRotation.setFromAxisAngle(Wn,-r),g=ar({viewState:n,visualized:e,hemisphereRadius:t,imagePlaneDefaults:i,epsilon:a,cameraPosition:I(s,d),forward:I(o,d),right:I(l,d),up:I(c,d)});if(Math.abs(r)<=a)return g;const h=Vn.bearingRotation.setFromAxisAngle(Wn,r);return ir(g,h)},un=(n,e)=>{const t=new P;return i=>(t.copy(i).project(e),{leftPx:(t.x*.5+.5)*n.widthPx,topPx:(-t.y*.5+.5)*n.heightPx})},or=({lineStart:n,lineEnd:e,size:t,camera:i,projectPoint:a,offsetPx:r,biasToward:s,fallbackBiasToward:o,biasDotEpsilonPx:l=.5})=>{const c=a??un(t,i),d=c(n),g=c(e),h=new he((d.leftPx+g.leftPx)*.5,(d.topPx+g.topPx)*.5),w=new he(g.leftPx-d.leftPx,g.topPx-d.topPx);if(w.lengthSq()<1e-6)return{leftPx:h.x,topPx:h.y};const u=new he(-w.y,w.x).normalize(),y=j=>{const D=c(j),fe=new he(D.leftPx-h.x,D.topPx-h.y);return fe.lengthSq()<1e-6?0:u.dot(fe)},A=s?y(s):0,R=Math.abs(A)<=l&&o?y(o):0;return(Math.abs(R)>l?R:A)<0&&u.multiplyScalar(-1),{leftPx:h.x+u.x*r,topPx:h.y+u.y*r}},Fn=({points:n,size:e,camera:t,projectPoint:i,offsetPx:a,biasToward:r})=>{const s=i??un(e,t);if(n.length<2)return{leftPx:e.widthPx*.5,topPx:e.heightPx*.5};const o=Math.floor(n.length*.5),l=n[Math.min(o,n.length-1)],c=n[Math.max(0,o-1)],d=n[Math.min(n.length-1,o+1)],g=s(l),h=s(c),w=s(d),u=new he(w.leftPx-h.leftPx,w.topPx-h.topPx);if(u.lengthSq()<1e-6)return g;const y=new he(-u.y,u.x).normalize();if(r){const A=s(r),R=new he(A.leftPx-g.leftPx,A.topPx-g.topPx);y.dot(R)<0&&y.multiplyScalar(-1)}return{leftPx:g.leftPx+y.x*a,topPx:g.topPx+y.y*a}},bt=()=>{},ie=({update:n,setDisplay:e,resize:t,dispose:i})=>({update:n??bt,setDisplay:e??bt,resize:t??bt,dispose:i??bt}),sr=n=>{n.setIndex(null),n.setAttribute("position",new _e(new Float32Array(6),3)),n.setAttribute("lineDistance",new _e(new Float32Array(2),1)),n.setDrawRange(0,0),n.computeBoundingSphere()},tn=(n,e)=>{const t=n.geometry;if(e.length<2){sr(t);return}t.setFromPoints(e),t.setDrawRange(0,e.length),n instanceof ai&&"computeLineDistances"in n&&n.computeLineDistances()},Ci=(n,e)=>{n.material.linewidth=e},xi=(n,e)=>{n.material.color.set(e)},bi=n=>{n.removeFromParent(),n.geometry.dispose(),n.material.dispose()},lr=(n,e)=>{const i=n.lengthSq()>0?n.clone().normalize():{x:0,y:1,z:0},a=new Float32Array(e*3);for(let r=0;r<e;r+=1){const s=r*3;a[s]=i.x,a[s+1]=i.y,a[s+2]=i.z}return a},Si=n=>{n.setIndex(null),n.setAttribute("position",new _e(new Float32Array(9),3)),n.setAttribute("normal",new _e(new Float32Array(9),3)),n.setDrawRange(0,0),n.computeBoundingSphere()},jn=(n,e)=>{const t=n.geometry;if(!e||e.length<4){Si(t);return}const i=new Float32Array([e[0].x,e[0].y,e[0].z,e[1].x,e[1].y,e[1].z,e[2].x,e[2].y,e[2].z,e[0].x,e[0].y,e[0].z,e[2].x,e[2].y,e[2].z,e[3].x,e[3].y,e[3].z]);t.setIndex(null),t.setAttribute("position",new _e(i,3)),t.deleteAttribute("normal"),t.computeVertexNormals(),t.setDrawRange(0,i.length/3),t.computeBoundingSphere()},cr=({mesh:n,polygon:e,planeNormal:t})=>{const i=n.geometry;if(!e||e.length<3){Si(i);return}const a=e.length-2,r=new Float32Array(a*9);for(let s=0;s<a;s+=1)[e[0],e[s+1],e[s+2]].forEach((l,c)=>{const d=s*9+c*3;r[d]=l.x,r[d+1]=l.y,r[d+2]=l.z});i.setIndex(null),i.setAttribute("position",new _e(r,3)),i.setAttribute("normal",new _e(lr(t,r.length/3),3)),i.setDrawRange(0,r.length/3),i.computeBoundingSphere()},De=n=>{n.removeFromParent(),n.geometry.dispose(),n.material.dispose()},Hn=new on,St=new P;class Ai extends Xi{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],i=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(i),this.setAttribute("position",new wn(e,3)),this.setAttribute("uv",new wn(t,2))}applyMatrix4(e){const t=this.attributes.instanceStart,i=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),i.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const i=new Zt(t,6,1);return this.setAttribute("instanceStart",new Ge(i,3,0)),this.setAttribute("instanceEnd",new Ge(i,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const i=new Zt(t,6,1);return this.setAttribute("instanceColorStart",new Ge(i,3,0)),this.setAttribute("instanceColorEnd",new Ge(i,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new Yi(e.geometry)),this}fromLineSegments(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new on);const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),Hn.setFromBufferAttribute(t),this.boundingBox.union(Hn))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ri),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){const i=this.boundingSphere.center;this.boundingBox.getCenter(i);let a=0;for(let r=0,s=e.count;r<s;r++)St.fromBufferAttribute(e,r),a=Math.max(a,i.distanceToSquared(St)),St.fromBufferAttribute(t,r),a=Math.max(a,i.distanceToSquared(St));this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}}vt.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new he(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};Rt.line={uniforms:oi.merge([vt.common,vt.fog,vt.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			float alpha = opacity;
			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};class xe extends qi{constructor(e){super({type:"LineMaterial",uniforms:oi.clone(Rt.line.uniforms),vertexShader:Rt.line.vertexShader,fragmentShader:Rt.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(e){e===!0!==this.worldUnits&&(this.needsUpdate=!0),e===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return"USE_DASH"in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}}const kt=new it,Gn=new P,kn=new P,W=new it,V=new it,ae=new it,Xt=new P,Yt=new si,B=new Zi,Xn=new P,At=new on,yt=new ri,re=new it;let se,Le;function Yn(n,e,t){return re.set(0,0,-e,1).applyMatrix4(n.projectionMatrix),re.multiplyScalar(1/re.w),re.x=Le/t.width,re.y=Le/t.height,re.applyMatrix4(n.projectionMatrixInverse),re.multiplyScalar(1/re.w),Math.abs(Math.max(re.x,re.y))}function dr(n,e){const t=n.matrixWorld,i=n.geometry,a=i.attributes.instanceStart,r=i.attributes.instanceEnd,s=Math.min(i.instanceCount,a.count);for(let o=0,l=s;o<l;o++){B.start.fromBufferAttribute(a,o),B.end.fromBufferAttribute(r,o),B.applyMatrix4(t);const c=new P,d=new P;se.distanceSqToSegment(B.start,B.end,d,c),d.distanceTo(c)<Le*.5&&e.push({point:d,pointOnLine:c,distance:se.origin.distanceTo(d),object:n,face:null,faceIndex:o,uv:null,uv1:null})}}function ur(n,e,t){const i=e.projectionMatrix,r=n.material.resolution,s=n.matrixWorld,o=n.geometry,l=o.attributes.instanceStart,c=o.attributes.instanceEnd,d=Math.min(o.instanceCount,l.count),g=-e.near;se.at(1,ae),ae.w=1,ae.applyMatrix4(e.matrixWorldInverse),ae.applyMatrix4(i),ae.multiplyScalar(1/ae.w),ae.x*=r.x/2,ae.y*=r.y/2,ae.z=0,Xt.copy(ae),Yt.multiplyMatrices(e.matrixWorldInverse,s);for(let h=0,w=d;h<w;h++){if(W.fromBufferAttribute(l,h),V.fromBufferAttribute(c,h),W.w=1,V.w=1,W.applyMatrix4(Yt),V.applyMatrix4(Yt),W.z>g&&V.z>g)continue;if(W.z>g){const j=W.z-V.z,D=(W.z-g)/j;W.lerp(V,D)}else if(V.z>g){const j=V.z-W.z,D=(V.z-g)/j;V.lerp(W,D)}W.applyMatrix4(i),V.applyMatrix4(i),W.multiplyScalar(1/W.w),V.multiplyScalar(1/V.w),W.x*=r.x/2,W.y*=r.y/2,V.x*=r.x/2,V.y*=r.y/2,B.start.copy(W),B.start.z=0,B.end.copy(V),B.end.z=0;const y=B.closestPointToPointParameter(Xt,!0);B.at(y,Xn);const A=$i.lerp(W.z,V.z,y),R=A>=-1&&A<=1,O=Xt.distanceTo(Xn)<Le*.5;if(R&&O){B.start.fromBufferAttribute(l,h),B.end.fromBufferAttribute(c,h),B.start.applyMatrix4(s),B.end.applyMatrix4(s);const j=new P,D=new P;se.distanceSqToSegment(B.start,B.end,D,j),t.push({point:D,pointOnLine:j,distance:se.origin.distanceTo(D),object:n,face:null,faceIndex:h,uv:null,uv1:null})}}}class hr extends be{constructor(e=new Ai,t=new xe({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const e=this.geometry,t=e.attributes.instanceStart,i=e.attributes.instanceEnd,a=new Float32Array(2*t.count);for(let s=0,o=0,l=t.count;s<l;s++,o+=2)Gn.fromBufferAttribute(t,s),kn.fromBufferAttribute(i,s),a[o]=o===0?0:a[o-1],a[o+1]=a[o]+Gn.distanceTo(kn);const r=new Zt(a,2,1);return e.setAttribute("instanceDistanceStart",new Ge(r,1,0)),e.setAttribute("instanceDistanceEnd",new Ge(r,1,1)),this}raycast(e,t){const i=this.material.worldUnits,a=e.camera;a===null&&!i&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const r=e.params.Line2!==void 0&&e.params.Line2.threshold||0;se=e.ray;const s=this.matrixWorld,o=this.geometry,l=this.material;Le=l.linewidth+r,o.boundingSphere===null&&o.computeBoundingSphere(),yt.copy(o.boundingSphere).applyMatrix4(s);let c;if(i)c=Le*.5;else{const g=Math.max(a.near,yt.distanceToPoint(se.origin));c=Yn(a,g,l.resolution)}if(yt.radius+=c,se.intersectsSphere(yt)===!1)return;o.boundingBox===null&&o.computeBoundingBox(),At.copy(o.boundingBox).applyMatrix4(s);let d;if(i)d=Le*.5;else{const g=Math.max(a.near,At.distanceToPoint(se.origin));d=Yn(a,g,l.resolution)}At.expandByScalar(d),se.intersectsBox(At)!==!1&&(i?dr(this,t):ur(this,a,t))}onBeforeRender(e){const t=this.material.uniforms;t&&t.resolution&&(e.getViewport(kt),this.material.uniforms.resolution.value.set(kt.z,kt.w))}}class Ee extends Ai{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(e){const t=e.length-3,i=new Float32Array(2*t);for(let a=0;a<t;a+=3)i[2*a]=e[a],i[2*a+1]=e[a+1],i[2*a+2]=e[a+2],i[2*a+3]=e[a+3],i[2*a+4]=e[a+4],i[2*a+5]=e[a+5];return super.setPositions(i),this}setColors(e){const t=e.length-3,i=new Float32Array(2*t);for(let a=0;a<t;a+=3)i[2*a]=e[a],i[2*a+1]=e[a+1],i[2*a+2]=e[a+2],i[2*a+3]=e[a+3],i[2*a+4]=e[a+4],i[2*a+5]=e[a+5];return super.setColors(i),this}setFromPoints(e){const t=e.length-1,i=new Float32Array(6*t);for(let a=0;a<t;a++)i[6*a]=e[a].x,i[6*a+1]=e[a].y,i[6*a+2]=e[a].z||0,i[6*a+3]=e[a+1].x,i[6*a+4]=e[a+1].y,i[6*a+5]=e[a+1].z||0;return super.setPositions(i),this}fromLine(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}}class Xe extends hr{constructor(e=new Ee,t=new xe({color:Math.random()*16777215})){super(e,t),this.isLine2=!0,this.type="Line2"}}const ne=(n,e)=>{const i=(e.length>=2?e:[{x:0,y:0,z:0},{x:0,y:0,z:0}]).flatMap(a=>[a.x,a.y,a.z]);n.geometry.setPositions(i),n.computeLineDistances()},mr=(n,e)=>{if(e.length===0){ne(n,[]);return}ne(n,[...e,e[0].clone()])},Ie=(n,e)=>{n.material.linewidth=e},et=(n,e)=>{n.material.color.set(e)},K=(n,e)=>{n.material.resolution.set(e.widthPx,e.heightPx)},Ye=n=>{n.geometry.dispose(),n.material.dispose()},Dt=(n,e,t)=>{const i={};return t.forEach(a=>{const r=new Xe(new Ee,new xe({color:a.color,transparent:!0,opacity:a.opacity??1}));K(r,e),n.add(r),i[a.key]=r}),{lines:i,setLine:(a,r)=>{ne(i[a],r)},setLoop:(a,r)=>{mr(i[a],r)},setVisible:(a,r)=>{i[a].visible=r},setWidth:(a,r)=>{Ie(i[a],r)},setColor:(a,r)=>{et(i[a],r)},resize:a=>{Object.values(i).forEach(r=>K(r,a))},dispose:()=>{Object.values(i).forEach(Ye)}}},fr=(n,e,t)=>{const i=new be(new Ki(t.zeroElevationDiscRadius,t.discSegments),new li({color:t.discColor,transparent:!0,opacity:t.discOpacity,depthWrite:!1,side:zt}));i.rotation.x=-Math.PI/2,n.add(i);const a=new Qi(new tt,new Ji({color:t.outlineColor,transparent:!0,opacity:t.outlineOpacity}));n.add(a);const r=new Xe(new Ee,new xe({color:t.lineColor,transparent:!0,opacity:t.lineOpacity}));K(r,e),n.add(r);const s=new Xe(new Ee,new xe({color:t.lineColor,transparent:!0,opacity:t.lineOpacity}));K(s,e),n.add(s);const o=new Xe(new Ee,new xe({color:t.lineColor,transparent:!0,opacity:t.breakOpacity}));K(o,e),n.add(o);const l=new Xe(new Ee,new xe({color:t.lineColor,transparent:!0,opacity:t.breakOpacity}));K(l,e),n.add(l);let c={visible:!0,showScaleBreak:!0,lineWidthPx:1,cueColor:t.lineColor};const d=()=>{ne(s,[]),s.visible=!1},g=()=>{ne(o,[]),ne(l,[]),o.visible=!1,l.visible=!1};return ie({update:({planeDiscY:h,planeDiscPoints:w,stemGeometry:u})=>{i.position.set(0,h,0),tn(a,w);const[y,A]=u.stemSegments;if(ne(r,y??[]),r.visible=c.visible&&!!y,A?(ne(s,A),s.visible=c.visible):d(),u.overflowScaleBreakMarkers){ne(o,u.overflowScaleBreakMarkers[0]),ne(l,u.overflowScaleBreakMarkers[1]);const R=c.visible&&c.showScaleBreak;o.visible=R,l.visible=R}else g()},setDisplay:h=>{c=h,i.visible=h.visible,a.visible=h.visible,r.visible=h.visible&&r.visible,s.visible=h.visible&&s.visible,o.visible=h.visible&&h.showScaleBreak&&o.visible,l.visible=h.visible&&h.showScaleBreak&&l.visible,Ci(a,h.lineWidthPx),Ie(r,h.lineWidthPx),Ie(s,h.lineWidthPx),Ie(o,h.lineWidthPx),Ie(l,h.lineWidthPx),xi(a,h.cueColor),et(r,h.cueColor),et(s,h.cueColor),et(o,h.cueColor),et(l,h.cueColor)},resize:h=>{K(r,h),K(s,h),K(o,h),K(l,h)},dispose:()=>{De(i),bi(a),Ye(r),Ye(s),Ye(o),Ye(l)}})},gr=(n,e)=>{const t=e.cameraBoxSize,i=e.cameraBoxSize,a=e.cameraBoxSize*.5,r=new be(new Cn(t,i,a),new sn({color:e.fillColor,transparent:e.opacity<1,opacity:e.opacity,depthWrite:e.opacity>=1,roughness:.82,metalness:.03,emissive:e.emissiveColor,emissiveIntensity:e.markerEmissiveIntensity}));n.add(r);const s=new be(new Cn(t*1.9,i*1.9,a*2.2),new li({transparent:!0,opacity:0,depthWrite:!1}));n.add(s);let o={show:!0};return{...ie({update:c=>{const d=c.cameraPosition.clone().normalize(),g=c.cameraPosition.clone().add(d.multiplyScalar(a*.5));r.position.copy(g),s.position.copy(g);const h=new si().makeBasis(c.right,c.up,c.forward.clone().negate());r.setRotationFromMatrix(h),s.setRotationFromMatrix(h),r.visible=o.show,s.visible=o.show},setDisplay:c=>{o=c,r.visible=c.show,s.visible=c.show},dispose:()=>{De(r),De(s)}}),mesh:r,dragMesh:s}},pr=(n,e,t)=>{const i=Array.from({length:4},()=>{const o=new Xe(new Ee,new xe({color:t.color,transparent:!0,opacity:t.opacity}));return K(o,e),n.add(o),o});let a={show:!0,lineWidthPx:1},r=null;const s=()=>{i.forEach((o,l)=>{const c=r==null?void 0:r.frustumEdges[l];o.visible=a.show&&!!c})};return ie({update:o=>{r=o,i.forEach((l,c)=>{const d=o.frustumEdges[c];ne(l,d||[o.cameraPosition.clone(),o.cameraPosition.clone()])}),s()},setDisplay:o=>{a=o,i.forEach(l=>{Ie(l,o.lineWidthPx)}),s()},resize:o=>{i.forEach(l=>K(l,o))},dispose:()=>{i.forEach(Ye)}})},qn=({color:n,opacity:e,emissive:t,emissiveIntensity:i,polygonOffsetFactor:a,polygonOffsetUnits:r})=>new sn({color:n,transparent:!0,opacity:e,depthWrite:!1,roughness:.82,metalness:.03,emissive:t,emissiveIntensity:i,side:zt,polygonOffset:!0,polygonOffsetFactor:a,polygonOffsetUnits:r}),Pr=(n,e,t)=>{const i=new be(new tt,qn({color:t.fillColor,opacity:t.surfaceOpacity,emissive:t.emissiveColor,emissiveIntensity:.03,polygonOffsetFactor:2,polygonOffsetUnits:2}));n.add(i);const a=new be(new tt,qn({color:t.fillColor,opacity:t.offsetSurfaceOpacity,emissive:t.emissiveColor,emissiveIntensity:.04,polygonOffsetFactor:1,polygonOffsetUnits:1}));n.add(a);const r=Dt(n,e,[{key:"tangentPlane",color:t.outlineColor,opacity:t.outlineOpacity}]);let s={show:!0,showOffset:!0,outlineLineWidthPx:1},o=null;const l=()=>{i.visible=s.show,a.visible=s.showOffset&&!!(o!=null&&o.hasViewOffset),r.setVisible("tangentPlane",!1)};return{...ie({update:d=>{o=d,jn(i,d.orthographicTangentPlaneCorners??d.imagePlaneCorners),jn(a,d.offsetImagePlaneCorners),r.setLoop("tangentPlane",[]),l()},setDisplay:d=>{s=d,Ie(r.lines.tangentPlane,d.outlineLineWidthPx),l()},resize:d=>{r.resize(d)},dispose:()=>{De(i),De(a),r.dispose()}}),surface:i}},S={FORWARD:"forward",RIGHT:"right",UP:"up",ORIGIN_X:"originX",ORIGIN_Y:"originY",CAMERA_FORWARD:"cameraForward",CAMERA_RIGHT:"cameraRight",CAMERA_UP:"cameraUp"},wr=(n,e,t)=>{const i=Dt(n,e,[{key:S.FORWARD,color:t.initialColors.edge,opacity:t.forwardOpacity},{key:S.RIGHT,color:t.initialColors.imageX,opacity:t.rightOpacity},{key:S.UP,color:t.initialColors.imageY,opacity:t.upOpacity},{key:S.ORIGIN_X,color:t.initialColors.edge,opacity:t.originOpacity},{key:S.ORIGIN_Y,color:t.initialColors.edge,opacity:t.originOpacity},{key:S.CAMERA_FORWARD,color:t.initialColors.edge,opacity:t.forwardOpacity},{key:S.CAMERA_RIGHT,color:t.initialColors.imageX,opacity:t.rightOpacity},{key:S.CAMERA_UP,color:t.initialColors.imageY,opacity:t.upOpacity}]);return ie({update:a=>{const r=a.cameraPosition.clone(),s=t.cameraBoxSize*1.1;i.setLine(S.FORWARD,[a.cameraPosition.clone(),a.cameraPosition.clone().add(a.forward.clone().multiplyScalar(a.cameraPosition.length()))]),i.setLine(S.RIGHT,[a.imagePlaneAxisOrigin.clone(),a.imagePlaneXAxisEnd.clone()]),i.setLine(S.UP,[a.imagePlaneAxisOrigin.clone(),a.imagePlaneYAxisEnd.clone()]),i.setLine(S.ORIGIN_X,a.imagePlaneOriginX),i.setLine(S.ORIGIN_Y,a.imagePlaneOriginY),i.setLine(S.CAMERA_FORWARD,[r.clone(),r.clone().add(a.forward.clone().negate().multiplyScalar(s))]),i.setLine(S.CAMERA_RIGHT,[r.clone(),r.clone().add(a.right.clone().multiplyScalar(s))]),i.setLine(S.CAMERA_UP,[r.clone(),r.clone().add(a.up.clone().multiplyScalar(s))])},setDisplay:a=>{i.setVisible(S.FORWARD,a.showAxes),i.setVisible(S.RIGHT,a.showAxes),i.setVisible(S.UP,a.showAxes),i.setVisible(S.ORIGIN_X,a.showAxes),i.setVisible(S.ORIGIN_Y,a.showAxes),i.setVisible(S.CAMERA_FORWARD,a.showAxes),i.setVisible(S.CAMERA_RIGHT,a.showAxes),i.setVisible(S.CAMERA_UP,a.showAxes),i.setWidth(S.FORWARD,a.axisLineWidthPx),i.setWidth(S.RIGHT,a.axisLineWidthPx),i.setWidth(S.UP,a.axisLineWidthPx),i.setWidth(S.ORIGIN_X,a.axisLineWidthPx),i.setWidth(S.ORIGIN_Y,a.axisLineWidthPx),i.setWidth(S.CAMERA_FORWARD,a.axisLineWidthPx),i.setWidth(S.CAMERA_RIGHT,a.axisLineWidthPx),i.setWidth(S.CAMERA_UP,a.axisLineWidthPx),i.setColor(S.FORWARD,a.edgeColor),i.setColor(S.RIGHT,a.cueColors.imageX),i.setColor(S.UP,a.cueColors.imageY),i.setColor(S.ORIGIN_X,a.edgeColor),i.setColor(S.ORIGIN_Y,a.edgeColor),i.setColor(S.CAMERA_FORWARD,a.edgeColor),i.setColor(S.CAMERA_RIGHT,a.cueColors.imageX),i.setColor(S.CAMERA_UP,a.cueColors.imageY)},resize:i.resize,dispose:i.dispose})},Cr=.002,xr=new P(0,1,0),br=(n,e)=>{const t=new be(new tt,new sn({color:e.fillColor,transparent:!0,opacity:e.opacity,depthWrite:!1,roughness:.86,metalness:.02,emissive:e.emissiveColor,emissiveIntensity:.025,side:zt,polygonOffset:!0,polygonOffsetFactor:3,polygonOffsetUnits:3}));t.name="projectionPlane",t.position.y=Cr,n.add(t);let i={show:!1},a=null;const r=()=>{t.visible=i.show&&!!(a!=null&&a.projectionPlanePolygon)&&a.projectionPlanePolygon.length>=3};return ie({update:s=>{a=s,cr({mesh:t,polygon:s.projectionPlanePolygon,planeNormal:xr}),r()},setDisplay:s=>{i=s,r()},dispose:()=>{De(t)}})},Sr=(n,e,t)=>{const i=Pr(n,e,{fillColor:t.camera.fillColor,emissiveColor:t.camera.emissiveColor,surfaceOpacity:t.imagePlane.surfaceOpacity,offsetSurfaceOpacity:t.imagePlane.offsetSurfaceOpacity,outlineColor:t.initialEdgeColor,outlineOpacity:t.frustum.opacity}),a=wr(n,e,{initialColors:{edge:t.initialEdgeColor,imageX:t.initialImageXColor,imageY:t.initialImageYColor},cameraBoxSize:t.cameraBoxSize,forwardOpacity:t.imagePlane.forwardOpacity,rightOpacity:t.imagePlane.rightOpacity,upOpacity:t.imagePlane.upOpacity,originOpacity:t.imagePlane.originOpacity}),r=pr(n,e,{color:t.frustum.color,opacity:t.frustum.opacity}),s=br(n,{fillColor:t.camera.fillColor,emissiveColor:t.camera.emissiveColor,opacity:t.camera.bodyOpacity}),o=gr(n,{cameraBoxSize:t.cameraBoxSize,fillColor:t.camera.fillColor,emissiveColor:t.camera.emissiveColor,opacity:t.camera.bodyOpacity,markerEmissiveIntensity:t.camera.markerEmissiveIntensity});let l=null,c={showImagePlane:!0,showImagePlaneOffset:!0,showAxes:!0,showFrustum:!0,showProjectionPlane:!1,showMarker:!0,axisLineWidthPx:1,frustumLineWidthPx:1,cueColors:{imageX:t.initialImageXColor,imageY:t.initialImageYColor,range:String(t.initialEdgeColor)}};const d=u=>!!(u!=null&&u.orthographicTangentPlaneCorners),g=()=>{o.setDisplay({show:c.showMarker&&!d(l)})},h=()=>{s.setDisplay({show:c.showProjectionPlane})};return{...ie({update:u=>{l=u,i.update(u),a.update(u),r.update(u),s.update(u),o.update(u),g(),h()},setDisplay:u=>{c=u,i.setDisplay({show:u.showImagePlane,showOffset:u.showImagePlane&&u.showImagePlaneOffset,outlineLineWidthPx:u.frustumLineWidthPx}),a.setDisplay({showAxes:u.showImagePlane&&u.showAxes,axisLineWidthPx:u.axisLineWidthPx,cueColors:{imageX:u.cueColors.imageX,imageY:u.cueColors.imageY},edgeColor:t.initialEdgeColor}),r.setDisplay({show:u.showImagePlane&&u.showFrustum,lineWidthPx:u.frustumLineWidthPx}),g(),h()},resize:u=>{i.resize(u),a.resize(u),r.resize(u)},dispose:()=>{i.dispose(),a.dispose(),r.dispose(),s.dispose(),o.dispose()}}),cameraMarker:o.mesh,readDragTargetMesh:()=>d(l)?i.surface:o.dragMesh}},z={BEARING_ARC:"bearingArc",PITCH_ARC:"pitchArc",BEARING_INDICATOR_ARC:"bearingIndicatorArc",BEARING_RADIAL:"bearingRadial",PITCH_ORIGIN_LINE:"pitchOriginLine",ELEVATION_ARC:"elevationArc"},Ar=Object.values(z),yr=(n,e,t)=>{const i=Dt(n,e,[{key:z.BEARING_ARC,color:t.initialColors.bearing,opacity:t.bearingOpacity},{key:z.PITCH_ARC,color:t.initialColors.pitch,opacity:t.pitchOpacity},{key:z.BEARING_INDICATOR_ARC,color:t.initialColors.bearing,opacity:t.bearingOpacity},{key:z.BEARING_RADIAL,color:t.initialColors.bearing,opacity:t.bearingOpacity},{key:z.PITCH_ORIGIN_LINE,color:t.initialColors.range,opacity:t.rangeOpacity},{key:z.ELEVATION_ARC,color:t.initialColors.pitch,opacity:t.pitchOpacity}]);return ie({update:a=>{i.setLine(z.BEARING_ARC,a.bearingArcPoints),i.setLine(z.PITCH_ARC,a.pitchArcPoints),i.setLine(z.BEARING_INDICATOR_ARC,a.bearingIndicatorArcPoints),i.setLine(z.BEARING_RADIAL,a.bearingRadialPoints),i.setLine(z.PITCH_ORIGIN_LINE,a.pitchOriginPoints),i.setLine(z.ELEVATION_ARC,a.elevationArcPoints)},setDisplay:a=>{Ar.forEach(r=>{i.setVisible(r,a.visible),i.setWidth(r,a.lineWidthPx)}),i.setColor(z.BEARING_ARC,a.cueColors.bearing),i.setColor(z.BEARING_INDICATOR_ARC,a.cueColors.bearing),i.setColor(z.BEARING_RADIAL,a.cueColors.bearing),i.setColor(z.PITCH_ARC,a.cueColors.pitch),i.setColor(z.ELEVATION_ARC,a.cueColors.pitch),i.setColor(z.PITCH_ORIGIN_LINE,a.cueColors.range)},resize:i.resize,dispose:i.dispose})},Or=[],vr=(n,e)=>{const t=new ai(new tt,new ea({color:e.color,transparent:!0,opacity:e.opacity,dashSize:e.dashSize,gapSize:e.gapSize,depthTest:!1,depthWrite:!1}));t.renderOrder=e.renderOrder??4,n.add(t);let i={visible:!0,lineWidthPx:1,color:e.color};return ie({update:a=>{if(a&&a.length>0){tn(t,a),t.visible=i.visible;return}tn(t,Or),t.visible=!1},setDisplay:a=>{var r;i=a,Ci(t,a.lineWidthPx),xi(t,a.color),t.visible=a.visible&&(((r=t.geometry.getAttribute("position"))==null?void 0:r.count)??0)>0},dispose:()=>bi(t)})},Zn=1e-6,$n=({radius:n,widthSegments:e,heightSegments:t,capRad:i})=>new na(n,e,t,0,Math.PI*2,0,i),Rr=(n,e)=>{const t=new be($n({radius:e.radius,widthSegments:e.widthSegments,heightSegments:e.heightSegments,capRad:e.initialCapRad}),new ta({color:e.material.color,transparent:e.initialOpacity<1,opacity:e.initialOpacity,depthWrite:e.initialOpacity>=1,roughness:e.material.roughness,metalness:e.material.metalness,clearcoat:e.material.clearcoat,clearcoatRoughness:e.material.clearcoatRoughness,emissive:e.material.emissive,emissiveIntensity:e.material.emissiveIntensity,side:zt}));n.add(t);const i=t.material;let a=e.initialCapRad,r=null,s=!1;return{...ie({update:l=>{if(t.position.set(0,0,0),s){const c=l.clone().normalize();r||(r=c.clone()),t.quaternion.setFromUnitVectors(r,c);return}r=null,t.quaternion.identity()},setDisplay:l=>{t.visible=l.visible,i.opacity=H(l.opacity,0,1),i.transparent=i.opacity<1,i.depthWrite=i.opacity>=1,i.needsUpdate=!0,s=l.rotateWithPose;const c=H(l.sphereCapRad,e.minCapRad,me-Zn);Math.abs(c-a)>Zn&&(t.geometry.dispose(),t.geometry=$n({radius:e.radius,widthSegments:e.widthSegments,heightSegments:e.heightSegments,capRad:c}),a=c)},dispose:()=>De(t)}),mesh:t}},qt=({origin:n,direction:e,length:t})=>[n.clone(),n.clone().add(e.clone().normalize().multiplyScalar(t))],oe={EAST:"east",NORTH:"north",UP:"up"},Er=Object.values(oe),Ir=(n,e,t)=>{const i=Dt(n,e,[{key:oe.EAST,color:t.initialColors.east,opacity:t.opacity},{key:oe.NORTH,color:t.initialColors.north,opacity:t.opacity},{key:oe.UP,color:t.initialColors.up,opacity:t.opacity}]);return ie({update:a=>{i.setLine(oe.EAST,qt({origin:a.origin,direction:a.eastDirection,length:a.eastLength})),i.setLine(oe.NORTH,qt({origin:a.origin,direction:a.northDirection,length:a.northLength})),i.setLine(oe.UP,qt({origin:a.origin,direction:a.upDirection,length:a.upLength}))},setDisplay:a=>{Er.forEach(r=>{i.setVisible(r,a.visible),i.setWidth(r,a.lineWidthPx)}),i.setColor(oe.EAST,a.cueColors.east),i.setColor(oe.NORTH,a.cueColors.north),i.setColor(oe.UP,a.cueColors.up)},resize:i.resize,dispose:i.dispose})},Lr=Aa.size,p=Qt,x=hi,F=p.hemisphere.radius,Je=p.numeric.minRenderLineWidthPx,nn=p.numeric.epsilon,_r=()=>F+p.frame.padding,He=new P(0,1,0),Kn=new P(0,0,-1),Qn=new P(1,0,0),ve=new P(0,0,0),Ne={ORBIT:"orbit",CAMERA_MARKER_ARCBALL_POSE:"camera-marker-arcball-pose"},Fe={IDLE:"grab",DRAGGING:"grabbing"},Ot=[{edgeColor:"#2563eb",imageXColor:"#60a5fa",imageYColor:"#93c5fd",fillColor:2450411,emissiveColor:2450411,frustumColor:2450411},{edgeColor:"#d97706",imageXColor:"#f59e0b",imageYColor:"#fbbf24",fillColor:14251782,emissiveColor:14251782,frustumColor:14251782},{edgeColor:"#7c3aed",imageXColor:"#a855f7",imageYColor:"#fb7185",fillColor:8141549,emissiveColor:8141549,frustumColor:8141549},{edgeColor:"#0f766e",imageXColor:"#2dd4bf",imageYColor:"#99f6e4",fillColor:1013358,emissiveColor:1013358,frustumColor:1013358},{edgeColor:"#e11d48",imageXColor:"#fb7185",imageYColor:"#fda4af",fillColor:14753096,emissiveColor:14753096,frustumColor:14753096},{edgeColor:"#65a30d",imageXColor:"#84cc16",imageYColor:"#bef264",fillColor:6660877,emissiveColor:6660877,frustumColor:6660877},{edgeColor:"#0891b2",imageXColor:"#22d3ee",imageYColor:"#67e8f9",fillColor:561586,emissiveColor:561586,frustumColor:561586},{edgeColor:"#c2410c",imageXColor:"#fb923c",imageYColor:"#fdba74",fillColor:12730636,emissiveColor:12730636,frustumColor:12730636}],Jn=n=>di(n),ei=n=>Array.isArray(n)?[...n]:[n],je=(n,e)=>{if(e.length<=1)return 0;const t=Number.isFinite(n)?Math.floor(n):0;return H(t,0,e.length-1)},ti=n=>Ot[(Math.max(0,Math.floor(n))%Ot.length+Ot.length)%Ot.length],zr=n=>H(n,nn,me-nn),an=n=>{const e=ui(n);return b(e)?fa(zr(e)):p.overviewCamera.fovDeg},ni=n=>H(n.surface.sphereCapRad,p.hemisphere.minCapRad,me),ii=n=>H(n.surface.sphereOpacity,0,1),Dr=n=>({showSurface:n.surface.show,showWorldAxes:n.worldAxes.show,showAngleCues:n.angleCues.show,showCameraImagePlane:n.cameraView.imagePlane.show,showCameraImagePlaneOffset:n.cameraView.imagePlane.show&&n.cameraView.imagePlane.showOffset,showCameraAxes:n.cameraView.imagePlane.show&&n.cameraView.axes.show,showCameraFrustum:n.cameraView.imagePlane.show&&n.cameraView.frustum.show,showCameraProjectionPlane:n.cameraView.projectionPlane.show,showAltitude:n.altitude.show,showCameraMarker:n.cameraView.marker.show,showAltitudeScaleBreak:n.altitude.show&&n.altitude.showScaleBreak,rotateSurfaceWithPose:n.surface.rotateWithPose}),Mr=n=>({worldAxesLineWidthPx:Math.max(Je,n.worldAxes.lineWidthPx),angleCueLineWidthPx:Math.max(Je,n.angleCues.lineWidthPx),cameraAxesLineWidthPx:Math.max(Je,n.cameraView.axes.lineWidthPx),cameraFrustumLineWidthPx:Math.max(Je,n.cameraView.frustum.lineWidthPx),altitudeLineWidthPx:Math.max(Je,n.altitude.lineWidthPx)}),Tr=n=>n.cueColors,Wr=n=>b(n.maxPitch)?H(n.maxPitch??0,0,ze):null,Vr=n=>{const e=an(n),t=new ua(e,1,p.overviewCamera.near,p.overviewCamera.far);return t.up.copy(He),t.updateProjectionMatrix(),t},Qr=(n,e,t={})=>{let i={...Lr,...t.size},a=An(Kt,t.overview),r=yn(t.visualized),s=On(t.display),o=t.interactive??Sa;const l=new ia({canvas:n,alpha:!0,antialias:!0});l.setPixelRatio(typeof window>"u"?1:Math.max(1,window.devicePixelRatio)),l.setSize(i.widthPx,i.heightPx,!1),l.outputColorSpace=aa;const c=new ra;let d=a.orbitPhi??p.overviewCamera.orbitPhiRad,g=a.orbitTheta??p.overviewCamera.rotationAroundUpRad;const h=an(a.fovDeg),w=_r();let u=h;const y=()=>w/Math.tan(ui(u)*.5),A=Vr(h),R=w,O=new oa(-R,R,R,-R,p.overviewCamera.near,p.overviewCamera.far);O.position.copy(A.position),O.up.copy(He),O.lookAt(0,0,0),O.updateProjectionMatrix(),O.updateMatrixWorld();let j=a.orthographic;const D=()=>j?O:A,fe=new P,Me=({target:m,radius:f,theta:C,phi:v})=>{m.setFromSphericalCoords(f,v,C)},at=()=>{const m=y();Me({target:fe,radius:m,theta:g,phi:d}),A.position.copy(fe),A.lookAt(0,0,0),A.updateProjectionMatrix(),A.updateMatrixWorld(),O.position.copy(fe),O.lookAt(0,0,0),O.updateMatrixWorld()},rt=new sa;let _=null,Q=new P,qe=0,Te=0,ce=0,ge=!1,Se=!1,We=0,ot=0;const st=(m,f)=>{const C=n.getBoundingClientRect();return ya({clientX:m,clientY:f,viewport:{left:C.left,top:C.top,width:C.width,height:C.height}})};let U=ei(e),J=je(t.activeCameraIndex??0,U),M=null;c.add(new la(x.scene.ambientLight.color,x.scene.ambientLight.intensity)),c.add(new ca(x.scene.hemisphereLight.skyColor,x.scene.hemisphereLight.groundColor,x.scene.hemisphereLight.intensity));const Ve=new da(x.scene.directionalLight.color,x.scene.directionalLight.intensity);Ve.position.set(x.scene.directionalLight.position.x,x.scene.directionalLight.position.y,x.scene.directionalLight.position.z),c.add(Ve);const ee=Rr(c,{radius:F,widthSegments:p.hemisphere.widthSegments,heightSegments:p.hemisphere.heightSegments,minCapRad:p.hemisphere.minCapRad,initialCapRad:ni(s),initialOpacity:ii(s),material:{color:x.surface.hemisphere.color,roughness:x.surface.hemisphere.roughness,metalness:x.surface.hemisphere.metalness,clearcoat:x.surface.hemisphere.clearcoat,clearcoatRoughness:x.surface.hemisphere.clearcoatRoughness,emissive:x.surface.hemisphere.emissive,emissiveIntensity:x.surface.hemisphere.emissiveIntensity}});ee.mesh.renderOrder=0;const pe=vr(c,{color:x.surface.maxPitchRing.color,opacity:x.surface.maxPitchRing.opacity,dashSize:F*p.arcs.maxPitchRingDashSize,gapSize:F*p.arcs.maxPitchRingGapSize,renderOrder:4}),Ae=fr(c,i,{zeroElevationDiscRadius:p.altitude.zeroElevationDiscRadius,discSegments:p.sampling.discSegments,discColor:x.surface.altitudeDisc.color,discOpacity:x.surface.altitudeDisc.opacity,outlineColor:x.surface.altitudeOutline.color,outlineOpacity:x.surface.altitudeOutline.opacity,lineColor:x.altitude.lineColor,lineOpacity:x.altitude.lineOpacity,breakOpacity:x.altitude.breakOpacity}),Be=yr(c,i,{initialColors:{bearing:Re.bearing,pitch:Re.pitch,range:Re.range},bearingOpacity:x.arcs.bearingOpacity,pitchOpacity:x.arcs.pitchOpacity,rangeOpacity:x.camera.rangeOpacity}),de=Ir(c,i,{initialColors:{east:Re.east,north:Re.north,up:Re.up},opacity:x.axes.opacity}),G=[],ye=m=>{const f=ti(m);return Sr(c,i,{cameraBoxSize:p.frame.cameraBoxSize,initialEdgeColor:f.edgeColor,initialImageXColor:f.imageXColor,initialImageYColor:f.imageYColor,imagePlane:{surfaceOpacity:x.imagePlane.surfaceOpacity,offsetSurfaceOpacity:x.imagePlane.offsetSurfaceOpacity,forwardOpacity:x.imagePlane.forwardOpacity,rightOpacity:x.imagePlane.rightOpacity,upOpacity:x.imagePlane.upOpacity,originOpacity:x.imagePlane.originOpacity,neutralColor:x.imagePlane.neutralColor},camera:{fillColor:f.fillColor,emissiveColor:f.emissiveColor,bodyOpacity:x.camera.bodyOpacity,markerEmissiveIntensity:x.camera.markerEmissiveIntensity},frustum:{color:f.frustumColor,opacity:x.frustum.opacity}})},ue=m=>{var f;for(;G.length<m;)G.push(ye(G.length));for(;G.length>m;)(f=G.pop())==null||f.dispose()},te=m=>{const f=Dr(m),C=Mr(m),v=Tr(m);ee.setDisplay({visible:f.showSurface,opacity:ii(m),sphereCapRad:ni(m),rotateWithPose:f.rotateSurfaceWithPose}),de.setDisplay({visible:f.showWorldAxes,lineWidthPx:C.worldAxesLineWidthPx,cueColors:{east:v.east,north:v.north,up:v.up}}),Be.setDisplay({visible:f.showAngleCues,lineWidthPx:C.angleCueLineWidthPx,cueColors:{bearing:v.bearing,pitch:v.pitch,range:v.range}}),pe.setDisplay({visible:f.showAngleCues,lineWidthPx:C.angleCueLineWidthPx,color:x.surface.maxPitchRing.color}),G.forEach((E,L)=>{const k=ti(L),Z=f.showCameraAxes&&(m.cameraView.axes.showInactive||L===J),N=f.showCameraFrustum&&(m.cameraView.frustum.showInactive||L===J);E.setDisplay({showImagePlane:f.showCameraImagePlane,showImagePlaneOffset:f.showCameraImagePlaneOffset,showAxes:Z,showFrustum:N,showProjectionPlane:f.showCameraProjectionPlane,showMarker:f.showCameraMarker,axisLineWidthPx:C.cameraAxesLineWidthPx,frustumLineWidthPx:C.cameraFrustumLineWidthPx,cueColors:{imageX:k.imageXColor,imageY:k.imageYColor,range:v.range}})}),Ae.setDisplay({visible:f.showAltitude,showScaleBreak:f.showAltitudeScaleBreak,lineWidthPx:C.altitudeLineWidthPx,cueColor:v.altitude})},Mt=m=>{m.orbitTheta!==void 0&&(g=m.orbitTheta),m.orbitPhi!==void 0&&(d=m.orbitPhi),j=m.orthographic;const f=an(m.fovDeg);u=f,A.fov=f,A.updateProjectionMatrix();const C=i.widthPx/i.heightPx;O.left=-w*C,O.right=w*C,O.top=w,O.bottom=-w,O.updateProjectionMatrix(),at()},lt=m=>{n.setPointerCapture(m),n.style.cursor=Fe.DRAGGING},Ze=m=>{const f=Un({viewState:U[je(m,U)],hemisphereRadius:F});return Gt(f)},$e=(m,f,C,v)=>{var L;ge||(ge=!0,(L=t.onCameraPoseDragStateChange)==null||L.call(t,!0)),_=Ne.CAMERA_MARKER_ARCBALL_POSE,ce=je(m,U),Q=st(C,v);const E=Ze(ce);We=E.bearing,ot=E.pitch,lt(f)},ct=(m,f,C)=>{var v;Se||(Se=!0,(v=t.onOrbitDragStateChange)==null||v.call(t,!0)),_=Ne.ORBIT,qe=f,Te=C,lt(m)},Tt=(m,f)=>{var X;const C=st(m,f),v=Ra({startVector:Q,currentVector:C,cameraWorldQuaternion:D().quaternion}),L=dn({viewingBearing:We,pitch:ot,hemisphereRadius:1}).clone().applyQuaternion(v),k=Gt(L),Z=r.maxPitch??ze,N=H(k.pitch,0,Z);if(t.onCameraPoseChange){t.onCameraPoseChange(ce,k.bearing,N);return}ce===0&&((X=t.onPoseChange)==null||X.call(t,k.bearing,N))},dt=(m,f)=>{var Z;const C=n.getBoundingClientRect(),v=(m-qe)/Math.max(C.width,1),E=(f-Te)/Math.max(C.height,1),L=me*1.2;g-=v*L,d=H(d-E*L,p.interaction.minOrbitPhi,me*p.interaction.maxOrbitPhiFactorOfPi),qe=m,Te=f,at();const k=q(U);(Z=t.onInteraction)==null||Z.call(t,k)};te(s),Mt(a);const q=m=>{const f=ei(m),C=je(J,f),v=f[C];U=f,J=C;const E=D(),{range:L}=_t(v),k=Un({viewState:v,hemisphereRadius:F}),{bearing:Z,elevation:N}=Gt(k),X=Jn(Z),Pe=Jn(Z+me),{groundDistance:hn,overflow:mt}=Da({altitudeMeters:v.anchorCartographic.altitude??0,rangeMeters:L??0,hemisphereRadius:F}),ft=-hn,yi=s.altitude.showScaleBreak,gt=s.labels.fontSizePx,Oi=fi({radius:p.altitude.zeroElevationDiscRadius,axis:It.XZ,offset:new P(0,ft,0),sampleCount:p.sampling.circleSampleCount}),vi=Wr(r),Ri=za({maxPitch:vi,hemisphereRadius:F,sampleCount:p.sampling.circleSampleCount});ue(f.length),te(s);const mn=f.map(Qe=>rr({viewState:Qe,visualized:r,hemisphereRadius:F,imagePlaneDefaults:p.imagePlane,epsilon:nn})),T=mn[C],Ei=Ma({planeDiscY:ft,overflow:mt,showScaleBreak:yi,overflowGapHalfHeight:p.altitude.overflowGapHalfHeight,scaleBreakHalfHeight:p.altitude.scaleBreakHalfHeight,scaleBreakHalfWidth:p.altitude.scaleBreakHalfWidth});pe.update(Ri),Ae.update({planeDiscY:ft,planeDiscPoints:Oi,stemGeometry:Ei});const pt=zn({radius:p.arcs.outerRadius,startAngle:0,endAngle:X,y:0,sampleCount:p.sampling.horizontalArcSampleCount}),Ii=Dn({bearing:Pe,elevation:N,radius:p.arcs.indicatorRadius,sampleCount:p.sampling.pitchArcSampleCount}),Li=zn({radius:p.arcs.indicatorRadius,startAngle:0,endAngle:X,y:0,sampleCount:p.sampling.horizontalArcSampleCount}),Pt=Dn({bearing:Pe,elevation:N,radius:p.arcs.outerRadius,sampleCount:p.sampling.pitchArcSampleCount}),Ht=Lt({bearing:Pe,radius:p.arcs.outerRadius}),_i=Lt({bearing:X,radius:p.arcs.outerRadius});Be.update({bearingArcPoints:pt,pitchArcPoints:Ii,bearingIndicatorArcPoints:Li,bearingRadialPoints:[_i,ve.clone()],pitchOriginPoints:[ve.clone(),Ht],elevationArcPoints:Pt}),de.update({origin:ve,eastDirection:Qn,eastLength:F,northDirection:Kn,northLength:F,upDirection:He,upLength:F}),mn.forEach((Qe,Ct)=>{var xt;(xt=G[Ct])==null||xt.update(Qe)}),ee.update(T.cameraPosition),l.render(c,E);const we=un(i,E),wt=He.clone().multiplyScalar(p.axes.labelUpOffset),zi=new P(0,ft*.5,0),fn=we(zi),Di=pt[Math.floor(pt.length*.5)]??ve.clone(),gn=Pt[Math.floor(Pt.length*.5)]??ve.clone(),Mi=Fn({points:pt,size:i,camera:E,projectPoint:we,offsetPx:gt,biasToward:Di.clone().multiplyScalar(1.08)}),Ti=Fn({points:Pt,size:i,camera:E,projectPoint:we,offsetPx:gt,biasToward:gn.clone().multiplyScalar(1.08)}),Wi=Ht.clone().add(He.clone().multiplyScalar(F*p.altitude.rangeLabelFallbackUpFactor)),Vi=or({lineStart:ve,lineEnd:Ht,size:i,camera:E,projectPoint:we,offsetPx:gt,biasToward:gn,fallbackBiasToward:Wi}),Bi=T.cameraPosition.clone().add(T.right.clone().multiplyScalar(p.frame.cameraBoxSize*1.25)),Ui=T.cameraPosition.clone().add(T.up.clone().multiplyScalar(p.frame.cameraBoxSize*1.25)),Ni=T.cameraPosition.clone().add(T.forward.clone().negate().multiplyScalar(p.frame.cameraBoxSize*1.25)),Fi=T.imagePlaneXAxisEnd.clone().add(T.right.clone().multiplyScalar(p.imagePlane.basisLineLength*p.imagePlane.labelOffsetFactor)),ji=T.imagePlaneYAxisEnd.clone().add(T.imagePlaneYAxisEnd.clone().sub(T.imagePlaneAxisOrigin).normalize().multiplyScalar(p.imagePlane.basisLineLength*p.imagePlane.labelOffsetFactor)),Ke=({lineStart:Qe,lineEnd:Ct,extension:xt,extraOffset:Hi})=>we(Ct.clone().add(Ct.clone().sub(Qe).normalize().multiplyScalar(xt)).add(Hi??ve)),pn=p.axes.northLabelExtraLength*.35,Pn=p.imagePlane.basisLineLength*p.imagePlane.labelOffsetFactor*.35;return M={bearing:Mi,pitch:Ti,range:Vi,altitude:{leftPx:fn.leftPx+gt,topPx:fn.topPx},east:we(Qn.clone().multiplyScalar(F+p.axes.northLabelExtraLength).add(wt)),north:we(Kn.clone().multiplyScalar(F+p.axes.northLabelExtraLength).add(wt)),up:we(He.clone().multiplyScalar(F+p.axes.labelUpOffset*2)),cameraForward:Ke({lineStart:T.cameraPosition,lineEnd:Ni,extension:pn}),cameraRight:Ke({lineStart:T.cameraPosition,lineEnd:Bi,extension:pn,extraOffset:wt}),cameraUp:Ke({lineStart:T.cameraPosition,lineEnd:Ui,extension:p.axes.labelUpOffset*2}),imageX:Ke({lineStart:T.imagePlaneAxisOrigin,lineEnd:Fi,extension:Pn,extraOffset:wt}),imageY:Ke({lineStart:T.imagePlaneAxisOrigin,lineEnd:ji,extension:Pn})},M},ut=m=>{var k,Z;const f=n.getBoundingClientRect(),C=(m.clientX-f.left)/f.width*2-1,v=1-(m.clientY-f.top)/f.height*2;rt.setFromCamera(new he(C,v),D());const E=rt.intersectObject(ee.mesh,!1),L=G.flatMap((N,X)=>{const Pe=N.readDragTargetMesh();if(!(!!Pe&&Pe.visible&&(!!t.onCameraPoseChange||X===0&&!!t.onPoseChange))||!Pe)return[];const mt=rt.intersectObject(Pe,!1)[0];return mt?[{cameraIndex:X,distance:mt.distance}]:[]}).sort((N,X)=>N.distance-X.distance)[0];if(L){const N=je(L.cameraIndex,U);if(N!==J){J=N;const X=q(U);(k=t.onInteraction)==null||k.call(t,X),(Z=t.onActiveCameraChange)==null||Z.call(t,N)}$e(N,m.pointerId,m.clientX,m.clientY);return}if(E.length>0&&o){ct(m.pointerId,m.clientX,m.clientY);return}},ht=m=>{_&&(_===Ne.CAMERA_MARKER_ARCBALL_POSE?Tt(m.clientX,m.clientY):_===Ne.ORBIT&&dt(m.clientX,m.clientY))},Oe=m=>{var f,C;_&&(_===Ne.CAMERA_MARKER_ARCBALL_POSE?(ge=!1,(f=t.onCameraPoseDragStateChange)==null||f.call(t,!1)):_===Ne.ORBIT&&(Se=!1,(C=t.onOrbitDragStateChange)==null||C.call(t,!1)),_=null,n.releasePointerCapture(m.pointerId),n.style.cursor=Fe.IDLE)};return n.addEventListener("pointerdown",ut),n.addEventListener("pointermove",ht),n.addEventListener("pointerup",Oe),n.addEventListener("pointercancel",Oe),n.style.cursor=Fe.IDLE,M=q(e),{update:q,resize:m=>{i=m,l.setSize(i.widthPx,i.heightPx,!1),A.aspect=i.widthPx/i.heightPx,A.updateProjectionMatrix(),A.updateMatrixWorld(),Be.resize(i),de.resize(i),pe.resize(i),Ae.resize(i),G.forEach(C=>C.resize(i));const f=i.widthPx/i.heightPx;return O.left=-w*f,O.right=w*f,O.top=w,O.bottom=-w,O.updateProjectionMatrix(),O.updateMatrixWorld(),M=q(U),M},setActiveCameraIndex:m=>{const f=je(m,U);return f===J||(J=f,M=q(U)),M},setOverview:m=>(a=An(Kt,a,m),Mt(a),M=q(U),M),setVisualized:m=>(r=yn(r,m),M=q(U),M),setDisplay:m=>(s=On(s,m),te(s),n.style.cursor=_?Fe.DRAGGING:Fe.IDLE,M=q(U),M),setInteractive:m=>{o=m,_||(n.style.cursor=Fe.IDLE)},readLabelAnchors:()=>M,dispose:()=>{var m,f;ge&&(ge=!1,(m=t.onCameraPoseDragStateChange)==null||m.call(t,!1)),Se&&(Se=!1,(f=t.onOrbitDragStateChange)==null||f.call(t,!1)),n.removeEventListener("pointerdown",ut),n.removeEventListener("pointermove",ht),n.removeEventListener("pointerup",Oe),n.removeEventListener("pointercancel",Oe),l.dispose(),ee.dispose(),pe.dispose(),Ae.dispose(),Be.dispose(),de.dispose(),G.forEach(C=>C.dispose())}}};export{$ as D,Qt as V,ba as a,An as b,Ca as c,yn as d,Re as e,Qr as f,On as m};
