import{F as p,S as q,O as V,l as _,m as k,R as L,N as z,A as H,M as Q,n as X,U as B,o as D,L as F,W as A,p as j}from"./three.module-BsINTyXW.js";import{r as J,D as K}from"./scene-accumulation-format-pMkB0RMu.js";const G=`
  out vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`,Y=`
  layout(location = 0) out highp vec4 outColor;
  in vec2 vUv;
  uniform sampler2D tPrevious;
  uniform sampler2D tRound;
  uniform float uRoundWeight;
  void main() {
    outColor = mix(
      texture(tPrevious, vUv),
      texture(tRound, vUv),
      uRoundWeight
    );
  }
`,Z=`
#include <common>
#include <dithering_pars_fragment>
  layout(location = 0) out highp vec4 outColor;
  in vec2 vUv;
  uniform sampler2D tColor;
  uniform sampler2D tDepth;
  uniform sampler2D tUnshadowed;
  uniform sampler2D tIndirect;
  uniform bool uOutputDither;
  uniform bool uMonochrome;
  uniform bool uLighting;
  void main() {
    vec4 color = texture(tColor, vUv);
    if (uMonochrome) {
      if (uLighting) {
        vec4 unshadowed = texture(tUnshadowed, vUv);
        vec4 indirect = texture(tIndirect, vUv);
        color = vec4(
          indirect.rgb + color.r * (unshadowed.rgb - indirect.rgb),
          unshadowed.a
        );
      } else {
        color = vec4(vec3(color.r), 1.0);
      }
    }
    if (color.a < 0.004) discard;
    #ifdef TONE_MAPPING
      if (!uMonochrome || uLighting) color.rgb = toneMapping(color.rgb);
    #endif
    outColor = linearToOutputTexel(color);
    // Quantization dither belongs after tone mapping and output encoding,
    // never in the linear-light sun samples. Three's screen-space pattern is
    // static, so a settled frame neither flickers nor needs further repaints.
    #ifdef DITHERING
      if (uOutputDither) outColor.rgb = dithering(outColor.rgb);
    #endif
    gl_FragDepth = texture(tDepth, vUv).r;
  }
`,te=(g,U,r)=>{const f=Math.max(1,Math.floor(g)),t=Math.max(1,Math.floor(U));if(!Number.isFinite(r)||f*t<=r)return{width:f,height:t};const o=Math.sqrt(Math.max(1,Math.floor(r))/(f*t));return{width:Math.max(1,Math.floor(f*o)),height:Math.max(1,Math.floor(t*o))}},re=(g,U={})=>{const r=J(U.format),f=r.type===p?0:U.msaaSamples??K.msaaSamples;let t=null,o=null,a=null,l=null,i=null,s=0,c=0,n=0,N="",E=!1,b=!1,C=!1;const P=new q,I=new V(-1,1,1,-1,0,1),v=new _({glslVersion:k,vertexShader:G,fragmentShader:Y,uniforms:{tPrevious:{value:null},tRound:{value:null},uRoundWeight:{value:1}},depthTest:!1,depthWrite:!1}),u=new _({dithering:!0,glslVersion:k,vertexShader:G,fragmentShader:Z,uniforms:{tColor:{value:null},tDepth:{value:null},tUnshadowed:{value:null},tIndirect:{value:null},uOutputDither:{value:!1},uMonochrome:{value:r.format===L},uLighting:{value:!1}},transparent:!0,blending:z,depthTest:!0,depthFunc:H,depthWrite:!0}),S=new Q(new X(2,2),v);S.frustumCulled=!1,P.add(S);const O=()=>{var e,d;(e=t==null?void 0:t.depthTexture)==null||e.dispose(),t==null||t.dispose(),(d=o==null?void 0:o.depthTexture)==null||d.dispose(),o==null||o.dispose(),a==null||a.dispose(),l==null||l.dispose(),i==null||i.dispose(),t=null,o=null,a=null,l=null,i=null,C=!1},W=(e,d)=>{if(t&&s===e&&c===d)return;O(),s=e,c=d;const T=()=>new A(s,c,{type:r.type,format:r.format,minFilter:r.accumulationType===p?D:F,magFilter:r.accumulationType===p?D:F,depthBuffer:!0,depthTexture:new j(s,c),samples:f});t=T(),o=T();const m={type:r.accumulationType,format:r.format,minFilter:r.accumulationType===p?D:F,magFilter:r.accumulationType===p?D:F,depthBuffer:!1};a=new A(s,c,m),l=new A(s,c,m),i=new A(s,c,m),n=0};return{get msaaSamples(){return f},get broken(){return b},get converged(){return n>=g},get hasSettledFrame(){return C},get nextRound(){return n},ensureState(e){N!==e&&(N=e,n=0)},renderRound(e,d,T,m){const x=e.getRenderTarget();try{if(W(d,T),!t||!a||!l)return;if(e.setRenderTarget(t),e.setClearColor(0,0),e.clear(!0,!0,!1),m(),e.setRenderTarget(l),S.material=v,v.uniforms.tPrevious.value=a.texture,v.uniforms.tRound.value=t.texture,v.uniforms.uRoundWeight.value=1/(n+1),e.render(P,I),e.setRenderTarget(x),!E&&n===0&&r.format!==L){E=!0;const M=r.type===p?Float32Array:r.type===B?Uint8Array:Uint16Array,w=r.accumulationType===p?Float32Array:r.accumulationType===B?Uint8Array:Uint16Array,h=new M(4);e.readRenderTargetPixels(t,Math.floor(s/2),Math.floor(c/2),1,1,h);const R=new w(4);e.readRenderTargetPixels(l,Math.floor(s/2),Math.floor(c/2),1,1,R),h[3]>0&&R[0]===0&&R[1]===0&&R[2]===0&&R[3]===0&&(b=!0,console.error("[shadow-simulation] accumulation self-check failed; falling back to direct rendering"))}const y=a;if(a=l,l=y,n+=1,n>=g&&i&&o){const M=i;i=a,a=M;const w=o;o=t,t=w,C=!0}}catch(y){b=!0,O();try{e.setRenderTarget(x)}catch{}console.error("[shadow-simulation] accumulation render target failed; falling back to direct rendering",y)}},composite(e,d=!1,T,m){const x=C&&(d||n>=g),y=(m==null?void 0:m.allowPartial)&&n>0&&n<g,M=x?i:y?a:null,w=x?o:y?t:null;if(b||!M||!w)return!1;S.material=u,u.uniforms.tColor.value=M.texture,u.uniforms.tDepth.value=w.depthTexture;const h=r.format===L&&T;return u.uniforms.uLighting.value=!!h,u.uniforms.tUnshadowed.value=h?h.unshadowed:null,u.uniforms.tIndirect.value=h?h.indirect:null,u.uniforms.uOutputDither.value=e.getRenderTarget()===null,e.render(P,I),!0},dispose(){O(),u.uniforms.tUnshadowed.value=null,u.uniforms.tIndirect.value=null,v.dispose(),u.dispose(),S.geometry.dispose()}}};export{re as b,te as f};
