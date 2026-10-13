import{F as p,S as q,O as z,l as I,m as k,R as L,N as V,A as H,M as Q,n as X,U as B,o as F,L as A,W as P,p as j}from"./three.module-DbFHiiZ-.js";import{r as J,D as K}from"./scene-accumulation-format-B1jl1jRV.js";const G=`
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
    // Captured depth is normalized; restore the host framebuffer range for
    // subsequent scene overlays, matching the tiled scene-frame replay.
    gl_FragDepth = mix(gl_DepthRange.near, gl_DepthRange.far, texture(tDepth, vUv).r);
  }
`,te=(g,U,r)=>{const f=Math.max(1,Math.floor(g)),t=Math.max(1,Math.floor(U));if(!Number.isFinite(r)||f*t<=r)return{width:f,height:t};const o=Math.sqrt(Math.max(1,Math.floor(r))/(f*t));return{width:Math.max(1,Math.floor(f*o)),height:Math.max(1,Math.floor(t*o))}},re=(g,U={})=>{const r=J(U.format),f=r.type===p?0:U.msaaSamples??K.msaaSamples;let t=null,o=null,a=null,l=null,i=null,s=0,c=0,n=0,N="",_=!1,x=!1,D=!1;const O=new q,E=new z(-1,1,1,-1,0,1),v=new I({glslVersion:k,vertexShader:G,fragmentShader:Y,uniforms:{tPrevious:{value:null},tRound:{value:null},uRoundWeight:{value:1}},depthTest:!1,depthWrite:!1}),u=new I({dithering:!0,glslVersion:k,vertexShader:G,fragmentShader:Z,uniforms:{tColor:{value:null},tDepth:{value:null},tUnshadowed:{value:null},tIndirect:{value:null},uOutputDither:{value:!1},uMonochrome:{value:r.format===L},uLighting:{value:!1}},transparent:!0,blending:V,depthTest:!0,depthFunc:H,depthWrite:!0}),R=new Q(new X(2,2),v);R.frustumCulled=!1,O.add(R);const C=()=>{var e,d;(e=t==null?void 0:t.depthTexture)==null||e.dispose(),t==null||t.dispose(),(d=o==null?void 0:o.depthTexture)==null||d.dispose(),o==null||o.dispose(),a==null||a.dispose(),l==null||l.dispose(),i==null||i.dispose(),t=null,o=null,a=null,l=null,i=null,D=!1},W=(e,d)=>{if(t&&s===e&&c===d)return;C(),s=e,c=d;const T=()=>new P(s,c,{type:r.type,format:r.format,minFilter:r.accumulationType===p?F:A,magFilter:r.accumulationType===p?F:A,depthBuffer:!0,depthTexture:new j(s,c),samples:f});t=T(),o=T();const h={type:r.accumulationType,format:r.format,minFilter:r.accumulationType===p?F:A,magFilter:r.accumulationType===p?F:A,depthBuffer:!1};a=new P(s,c,h),l=new P(s,c,h),i=new P(s,c,h),n=0};return{get msaaSamples(){return f},get broken(){return x},get converged(){return n>=g},get hasSettledFrame(){return D},get nextRound(){return n},ensureState(e){N!==e&&(N=e,n=0)},renderRound(e,d,T,h){if(x)return;const S=e.getRenderTarget();try{if(W(d,T),!t||!a||!l)return;if(e.setRenderTarget(t),e.setClearColor(0,0),e.clear(!0,!0,!1),h(),e.setRenderTarget(l),R.material=v,v.uniforms.tPrevious.value=a.texture,v.uniforms.tRound.value=t.texture,v.uniforms.uRoundWeight.value=1/(n+1),e.render(O,E),e.setRenderTarget(S),!_&&n===0&&r.format!==L){_=!0;const M=r.type===p?Float32Array:r.type===B?Uint8Array:Uint16Array,w=r.accumulationType===p?Float32Array:r.accumulationType===B?Uint8Array:Uint16Array,m=new M(4);e.readRenderTargetPixels(t,Math.floor(s/2),Math.floor(c/2),1,1,m);const b=new w(4);if(e.readRenderTargetPixels(l,Math.floor(s/2),Math.floor(c/2),1,1,b),m[3]>0&&b[0]===0&&b[1]===0&&b[2]===0&&b[3]===0){x=!0,console.error("[shadow-simulation] accumulation self-check failed; falling back to direct rendering"),C();return}}const y=a;if(a=l,l=y,n+=1,n>=g&&i&&o){const M=i;i=a,a=M;const w=o;o=t,t=w,D=!0}}catch(y){x=!0,C();try{e.setRenderTarget(S)}catch{}console.error("[shadow-simulation] accumulation render target failed; falling back to direct rendering",y)}},composite(e,d=!1,T,h){const S=D&&(d||n>=g),y=(h==null?void 0:h.allowPartial)&&n>0&&n<g,M=S?i:y?a:null,w=S?o:y?t:null;if(x||!M||!w)return!1;R.material=u,u.uniforms.tColor.value=M.texture,u.uniforms.tDepth.value=w.depthTexture;const m=r.format===L&&T;return u.uniforms.uLighting.value=!!m,u.uniforms.tUnshadowed.value=m?m.unshadowed:null,u.uniforms.tIndirect.value=m?m.indirect:null,u.uniforms.uOutputDither.value=e.getRenderTarget()===null,e.render(O,E),!0},dispose(){C(),u.uniforms.tUnshadowed.value=null,u.uniforms.tIndirect.value=null,v.dispose(),u.dispose(),R.geometry.dispose()}}};export{re as b,te as f};
