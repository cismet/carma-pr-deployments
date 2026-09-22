const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/shadow-sun-vector-Ce49Tu5y.js","assets/index-B6lxGdqe.js","assets/vendor-react-core-DBOd_2-S.js","assets/vendor-ui-icons-FPYkdTwk.js","assets/vendor-cismap-CPrzCqVL.js","assets/vendor-leaflet-BuDGw_T9.js","assets/vendor-ui-DwftSr8b.js","assets/vendor-cismap-DCHbl3AQ.css","assets/vendor-cesium-CNm9W3AS.js","assets/vendor-maplibre-XZ2NtLMv.js","assets/index-eSP5RzaY.css","assets/ShadowProjectionDebugView-BIMvD2YD.js","assets/ShadowSimulationDisplaySettingsPanel-bypTv2hn.js","assets/ShadowSimulationCurveSettings-6wjpM7Xg.js"])))=>i.map(i=>d[i]);
import{S as Ur,C as Hi,a as ir,G as kr,L as El,N as Vo,M as Gr,P as bs,V as ee,b as Ge,W as Ke,F as Et,R as Hr,c as Ie,D as sr,U as Vt,d as We,g as Ms,e as zi,f as Es,h as Rl,i as Vi,k as Se,l as Wo,j as O,o as as,m as Al,n as Go,p as Cn,q as Ci,r as jr,s as Z,t as dt,u as T,v as Cl,B as Le,E as jo,w as Il,x as Dl,y as Yo,z as I,A as Wi,T as $o,O as Rs,H as Ko,I as Ta,J as As,K as Pl,Q as os,X as ba,Y as Cs,Z as Ol,_ as Nl,$ as Ma,a0 as Ll,a1 as Fl,a2 as Bl,a3 as qo,a4 as Nt,a5 as Ul,a6 as Xo,a7 as Ea,a8 as kl,a9 as Qo,aa as Hl,ab as zl,ac as Vl,ad as cs,ae as In,af as Wl,ag as Gl,ah as Mi,ai as Zo,aj as tr,ak as jl,al as Is,am as Jo,an as Yl,ao as $l,ap as Kl,aq as ec,ar as ql,as as Ra,at as xe,au as Ds,av as Xl,aw as tc,ax as Ql,ay as Gi,az as Zl,aA as Jl,aB as Tr,aC as eu,aD as tu,aE as Dn,aF as ru,aG as zr,aH as iu,aI as nu,aJ as su,aK as au}from"./index-B6lxGdqe.js";import{g as ou,r as z,d as cu}from"./vendor-react-core-DBOd_2-S.js";import{F as Ot,V as lu,bs as uu,W as du,z as hu,b7 as mu,b8 as fu,bt as pu,bc as gu,D as vu}from"./vendor-ui-icons-FPYkdTwk.js";import{J as yu,K as Su,L as wu,e as _u}from"./vendor-ui-DwftSr8b.js";import{a as xu}from"./vendor-maplibre-XZ2NtLMv.js";import"./vendor-cismap-CPrzCqVL.js";import"./vendor-leaflet-BuDGw_T9.js";const Aa=20;class Tu{constructor(e,r=256*1024**2){this.renderer=e,this.maximumBytes=r,this.quad.frustumCulled=!1,this.scene.add(this.quad)}target=null;key=null;broken=!1;captures=0;reuses=0;scene=new Ur;camera=new Hi;material=new ir({glslVersion:kr,uniforms:{color:{value:null},depth:{value:null}},vertexShader:`out vec2 uvCopy;
      void main() { uvCopy = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`,fragmentShader:`
      layout(location = 0) out highp vec4 outputColor;
      in vec2 uvCopy;
      uniform sampler2D color;
      uniform sampler2D depth;
      void main() {
        vec4 value = texture(color, uvCopy);
        if (value.a == 0.0) discard;
        #ifdef TONE_MAPPING
          value.rgb = toneMapping(value.rgb);
        #endif
        outputColor = linearToOutputTexel(value);
        // Offscreen capture uses [0,1]; restore the host framebuffer's actual
        // depth range, including MapLibre's reserved overlay range.
        gl_FragDepth = mix(gl_DepthRange.near, gl_DepthRange.far, texture(depth, uvCopy).r);
      }`,depthTest:!0,depthFunc:El,depthWrite:!0,transparent:!0,blending:Vo});quad=new Gr(new bs(2,2),this.material);get stats(){return{captures:this.captures,reuses:this.reuses,bytes:this.target?this.target.width*this.target.height*Aa:0,broken:this.broken}}invalidate(){this.key=null}render(e,r,i,n){var h,v;const s=this.renderer;if(this.broken||!Number.isInteger(r)||!Number.isInteger(i)||r<1||i<1||r>s.capabilities.maxTextureSize||i>s.capabilities.maxTextureSize||r*i*Aa>this.maximumBytes||!s.extensions.has("EXT_color_buffer_float"))return this.releaseTarget(),n(),!1;const a=s.getRenderTarget(),o=s.getActiveCubeFace(),c=s.getActiveMipmapLevel(),l=s.getViewport(new ee),u=s.getScissor(new ee),d=s.getScissorTest(),g=s.getClearColor(new Ge),p=s.getClearAlpha(),f=s.autoClear,S=()=>{s.setRenderTarget(a,o,c),s.setViewport(l),s.setScissor(u),s.setScissorTest(d),s.setClearColor(g,p),s.autoClear=f};try{if(((h=this.target)==null?void 0:h.width)!==r||((v=this.target)==null?void 0:v.height)!==i){this.releaseTarget(),this.target=new Ke(r,i,{type:Et,format:Hr,minFilter:Ie,magFilter:Ie,depthTexture:new sr(r,i,Vt),samples:0});try{s.initRenderTarget(this.target)}catch{return this.broken=!0,this.releaseTarget(),S(),n(),!1}}const b=JSON.stringify([e,r,i,s.outputColorSpace,s.toneMapping,s.toneMappingExposure,a==null?void 0:a.texture.colorSpace]);return s.autoClear=!1,this.key!==b?(this.key=null,s.setRenderTarget(this.target),s.setViewport(new ee(0,0,r,i)),s.setScissorTest(!1),s.setClearColor(0,0),s.clear(!0,!0,!1),n(),this.key=b,this.captures+=1):this.reuses+=1,S(),s.autoClear=!1,this.material.uniforms.color.value=this.target.texture,this.material.uniforms.depth.value=this.target.depthTexture,s.render(this.scene,this.camera),!0}catch(b){throw this.invalidate(),b}finally{S()}}releaseTarget(){var e,r,i;(r=(e=this.target)==null?void 0:e.depthTexture)==null||r.dispose(),(i=this.target)==null||i.dispose(),this.target=null,this.key=null}dispose(){this.releaseTarget(),this.broken=!0,this.material.dispose(),this.quad.geometry.dispose()}}const Ii={OVERLAY:"isShadowSimulationOverlay"},qe={FPS_120:4,FPS_60:16,FPS_30:64,ULTRA:256},Ps="max",hi=64,bu=[0,2,4,8,Ps],ht={[qe.FPS_120]:{targetFps:120,depthSize:2048,terrainErrorPixels:2,shadowTexelErrorPixels:2,terrainTileLimit:96,terrainSegments:128,sunSamples:hi,msaaSamples:0},[qe.FPS_60]:{targetFps:60,depthSize:3072,terrainErrorPixels:1,shadowTexelErrorPixels:1,terrainTileLimit:144,terrainSegments:256,sunSamples:hi,msaaSamples:2},[qe.FPS_30]:{targetFps:30,depthSize:4096,terrainErrorPixels:.5,shadowTexelErrorPixels:.5,terrainTileLimit:192,terrainSegments:512,sunSamples:hi,msaaSamples:4},[qe.ULTRA]:{targetFps:null,depthSize:16384,terrainErrorPixels:.25,shadowTexelErrorPixels:.25,terrainTileLimit:256,terrainSegments:512,sunSamples:hi,msaaSamples:Ps}},Mu=(t,e,r=Nr)=>{if(!t)return;const i=ht[e];return{...t,errorTargetPixels:r,meshSegments:Math.min(t.tileSize,i.terrainSegments),maxSelectionTiles:Math.min(t.maxSelectionTiles??i.terrainTileLimit,i.terrainTileLimit)}},ur=64,Nr=2,Eu=6*1024**3,Os="#d3d3d3",rc=0,ic=1,nc="#ffffff",Vr={MONO:"mono",TILED:"tiled"},mt={HDR_16:"rgba16f",HDR_16_32:"rgba16f-32f",HDR_32:"rgba32f",SDR_8:"rgba8"},Ru=[32,64,128,256,512,1024,2048,4096,8192],Au=!0,Pn=(t={},e=ur)=>({shadowAdaptiveQuality:t.shadowAdaptiveQuality??!0,shadowBufferLayout:t.shadowBufferLayout&&Object.values(Vr).includes(t.shadowBufferLayout)?t.shadowBufferLayout:Vr.MONO,shadowBufferFormat:t.shadowBufferFormat&&Object.values(mt).includes(t.shadowBufferFormat)?t.shadowBufferFormat:mt.HDR_16_32,shadowSunDiscSamples:t.shadowSunDiscSamples&&Ru.includes(t.shadowSunDiscSamples)?t.shadowSunDiscSamples:ht[e].sunSamples,shadowMsaaSamples:t.shadowBufferFormat===mt.HDR_32?0:t.shadowMsaaSamples!==void 0&&bu.includes(t.shadowMsaaSamples)?t.shadowMsaaSamples:ht[e].msaaSamples,shadowGroundTexelFit:t.shadowGroundTexelFit??Au}),Ca=t=>Object.values(qe).includes(t)?t:ur,Cu=t=>typeof t=="string"&&/^#[\da-f]{6}$/i.test(t)?t:typeof t=="number"&&Number.isFinite(t)?`#${We(Math.round(t),0,16777215).toString(16).padStart(6,"0")}`:Os,sc=()=>{var t;return typeof navigator>"u"?{userAgent:"",platform:"",maxTouchPoints:0}:{userAgent:navigator.userAgent,platform:navigator.platform,maxTouchPoints:navigator.maxTouchPoints,mobile:(t=navigator.userAgentData)==null?void 0:t.mobile}},ac=(t=sc())=>/iPhone|iPod|Android.*Mobile/i.test(t.userAgent)||t.mobile?"phone":/iPad|Android/i.test(t.userAgent)||t.platform==="MacIntel"&&t.maxTouchPoints>1?"tablet":"desktop",ji=()=>ac()!=="desktop",On=1.5,Ei=96*1024**2,Iu=(t,e=ji())=>!t||!e?t:{...t,meshSegments:Math.min(t.meshSegments??t.tileSize,128),maximumMeshSegments:Math.min(t.maximumMeshSegments??128,128),maxSelectionTiles:Math.min(t.maxSelectionTiles??48,48),maxCachedMeshes:Math.min(t.maxCachedMeshes??64,64),maxCachedMeshBytes:Math.min(t.maxCachedMeshBytes??32*1024**2,32*1024**2),maxCacheBytes:Math.min(t.maxCacheBytes??16*1024**2,16*1024**2),requestConcurrency:Math.min(t.requestConcurrency??2,2)},Nn=(t,e=ji())=>e?{...t,shadowAdaptiveQuality:!0,shadowBufferLayout:Vr.MONO,shadowBufferFormat:mt.SDR_8,shadowMsaaSamples:0}:t,De={STANDARD:"standard",HIGH:"high",MAX:"max",ULTRA:"ultra",EXTREME:"extreme"},ls={QUICK:"quick",CURVE:"curve"},zt={DAY:"day",YEAR:"year"},rv=(t,e)=>({...t,shadowQuality:e,shadowBufferFormat:void 0,shadowSunDiscSamples:void 0,shadowMsaaSamples:void 0,shadowGroundTexelFit:void 0}),Du=t=>{var i,n,s;const e=ji(),r=((n=(i=t==null?void 0:t.terrainSources)==null?void 0:i[0])==null?void 0:n.terrain)??(t==null?void 0:t.terrain);return{enabled:!1,terrainColor:Cu((s=r==null?void 0:r.material)==null?void 0:s.color),terrainSourceId:r==null?void 0:r.id,terrainQuality:e?De.STANDARD:De.MAX,buildingsFullOpacity:!0,buildingColorMix:rc,meshTextureSaturation:ic,meshTextureColorCorrection:!0,buildingColor:nc,shadowQuality:e?qe.FPS_120:ur,shadowAdaptiveQuality:!0,terrainErrorTarget:Nr,meshCacheBudgetBytes:e?Ei:Eu,showSunDebugVector:!0,showTileBounds:!0,showProjectionDebugView:!1,showDisplaySettings:!1,softSunShadows:!e,showMapStyleContent:!0,showMapStyleLabels:!0,showMapStyleElevationLines:!1,showMapStyleElevationLabels:!1,useTransmittanceLut:!0,useSkyIrradianceLut:!0,controlStyle:ls.QUICK,animationMode:zt.DAY,animationSpeed:4,isAnimating:!1,shadowIntensity:1}},Pu=(t,e,r=new Date)=>{const i=(t==null?void 0:t.timeZone)??Es,n=Ms(r,i),s={year:(t==null?void 0:t.year)??n.year,dayOfYear:(t==null?void 0:t.initialDayOfYear)??n.dayOfYear,minutes:(t==null?void 0:t.initialMinutes)??n.minutes,timeZone:i};return zi(s,e)??{...s,minutes:12*60}};var Yi={},$i={};Object.defineProperty($i,"__esModule",{value:!0});$i.default=void 0;var Ou={items_per_page:"/ Seite",jump_to:"Gehe zu",jump_to_confirm:"bestätigen",page:"Seite",prev_page:"Vorherige Seite",next_page:"Nächste Seite",prev_5:"5 Seiten zurück",next_5:"5 Seiten vor",prev_3:"3 Seiten zurück",next_3:"3 Seiten vor",page_size:"Page Size"};$i.default=Ou;var Ki={},Yr={},qi={},oc={exports:{}};(function(t){var e=Rl;function r(n,s){var a=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);s&&(o=o.filter(function(c){return Object.getOwnPropertyDescriptor(n,c).enumerable})),a.push.apply(a,o)}return a}function i(n){for(var s=1;s<arguments.length;s++){var a=arguments[s]!=null?arguments[s]:{};s%2?r(Object(a),!0).forEach(function(o){e(n,o,a[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach(function(o){Object.defineProperty(n,o,Object.getOwnPropertyDescriptor(a,o))})}return n}t.exports=i,t.exports.__esModule=!0,t.exports.default=t.exports})(oc);var Nu=oc.exports,Xi={};Object.defineProperty(Xi,"__esModule",{value:!0});Xi.commonLocale=void 0;Xi.commonLocale={yearFormat:"YYYY",dayFormat:"D",cellMeridiemFormat:"A",monthBeforeYear:!0};var Lu=Vi.default;Object.defineProperty(qi,"__esModule",{value:!0});qi.default=void 0;var Ia=Lu(Nu),Fu=Xi,Bu=(0,Ia.default)((0,Ia.default)({},Fu.commonLocale),{},{locale:"de_DE",today:"Heute",now:"Jetzt",backToToday:"Zurück zu Heute",ok:"OK",clear:"Zurücksetzen",month:"Monat",year:"Jahr",timeSelect:"Zeit wählen",dateSelect:"Datum wählen",monthSelect:"Wähle einen Monat",yearSelect:"Wähle ein Jahr",decadeSelect:"Wähle ein Jahrzehnt",dateFormat:"D.M.YYYY",dateTimeFormat:"D.M.YYYY HH:mm:ss",previousMonth:"Vorheriger Monat (PageUp)",nextMonth:"Nächster Monat (PageDown)",previousYear:"Vorheriges Jahr (Ctrl + left)",nextYear:"Nächstes Jahr (Ctrl + right)",previousDecade:"Vorheriges Jahrzehnt",nextDecade:"Nächstes Jahrzehnt",previousCentury:"Vorheriges Jahrhundert",nextCentury:"Nächstes Jahrhundert"});qi.default=Bu;var $r={};Object.defineProperty($r,"__esModule",{value:!0});$r.default=void 0;const Uu={placeholder:"Zeit auswählen",rangePlaceholder:["Startzeit","Endzeit"]};$r.default=Uu;var cc=Vi.default;Object.defineProperty(Yr,"__esModule",{value:!0});Yr.default=void 0;var ku=cc(qi),Hu=cc($r);const zu={lang:Object.assign({placeholder:"Datum auswählen",rangePlaceholder:["Startdatum","Enddatum"],shortWeekDays:["So","Mo","Di","Mi","Do","Fr","Sa"],shortMonths:["Jan","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"]},ku.default),timePickerLocale:Object.assign({},Hu.default)};Yr.default=zu;var Vu=Vi.default;Object.defineProperty(Ki,"__esModule",{value:!0});Ki.default=void 0;var Wu=Vu(Yr);Ki.default=Wu.default;var Qi=Vi.default;Object.defineProperty(Yi,"__esModule",{value:!0});Yi.default=void 0;var Gu=Qi($i),ju=Qi(Ki),Yu=Qi(Yr),$u=Qi($r);const ze="${label} ist nicht gültig. ${type} erwartet",Ku={locale:"de",Pagination:Gu.default,DatePicker:Yu.default,TimePicker:$u.default,Calendar:ju.default,global:{placeholder:"Bitte auswählen"},Table:{filterTitle:"Filter-Menü",filterConfirm:"OK",filterReset:"Zurücksetzen",filterEmptyText:"Keine Filter",filterSearchPlaceholder:"Suche in Filtern",filterCheckall:"Alle auswählen",selectAll:"Selektiere Alle",selectInvert:"Selektion Invertieren",selectionAll:"Wählen Sie alle Daten aus",sortTitle:"Sortieren",emptyText:"Keine Daten",expand:"Zeile erweitern",collapse:"Zeile reduzieren",triggerDesc:"Klicken zur absteigenden Sortierung",triggerAsc:"Klicken zur aufsteigenden Sortierung",cancelSort:"Klicken zum Abbrechen der Sortierung"},Tour:{Next:"Weiter",Previous:"Zurück",Finish:"Fertig"},Modal:{okText:"OK",cancelText:"Abbrechen",justOkText:"OK"},Popconfirm:{okText:"OK",cancelText:"Abbrechen"},Transfer:{titles:["",""],searchPlaceholder:"Suchen",itemUnit:"Eintrag",itemsUnit:"Einträge",remove:"Entfernen",selectCurrent:"Alle auf aktueller Seite auswählen",removeCurrent:"Auswahl auf aktueller Seite aufheben",selectAll:"Alle auswählen",removeAll:"Auswahl aufheben",selectInvert:"Auswahl umkehren"},Upload:{uploading:"Hochladen...",removeFile:"Datei entfernen",uploadError:"Fehler beim Hochladen",previewFile:"Dateivorschau",downloadFile:"Download-Datei"},Empty:{description:"Keine Daten"},Text:{edit:"Bearbeiten",copy:"Kopieren",copied:"Kopiert",expand:"Erweitern"},Form:{defaultValidateMessages:{default:"Feld-Validierungsfehler: ${label}",required:"Bitte geben Sie ${label} an",enum:"${label} muss eines der folgenden sein [${enum}]",whitespace:"${label} darf kein Leerzeichen sein",date:{format:"${label} ist ein ungültiges Datumsformat",parse:"${label} kann nicht in ein Datum umgewandelt werden",invalid:"${label} ist ein ungültiges Datum"},types:{string:ze,method:ze,array:ze,object:ze,number:ze,date:ze,boolean:ze,integer:ze,float:ze,regexp:ze,email:ze,url:ze,hex:ze},string:{len:"${label} muss genau ${len} Zeichen lang sein",min:"${label} muss mindestens ${min} Zeichen lang sein",max:"${label} darf höchstens ${max} Zeichen lang sein",range:"${label} muss zwischen ${min} und ${max} Zeichen lang sein"},number:{len:"${label} muss gleich ${len} sein",min:"${label} muss mindestens ${min} sein",max:"${label} darf maximal ${max} sein",range:"${label} muss zwischen ${min} und ${max} liegen"},array:{len:"Es müssen ${len} ${label} sein",min:"Es müssen mindestens ${min} ${label} sein",max:"Es dürfen maximal ${max} ${label} sein",range:"Die Anzahl an ${label} muss zwischen ${min} und ${max} liegen"},pattern:{mismatch:"${label} entspricht nicht dem ${pattern} Muster"}}},Image:{preview:"Vorschau"},QRCode:{expired:"QR-Code abgelaufen",refresh:"Aktualisieren"}};Yi.default=Ku;var qu=Yi;const Xu=ou(qu),Zi=(t,e,r)=>zi(e,r)??t,Qu=(t,e,r,i)=>Zi(t,{...t,year:e,dayOfYear:r},i),Zu=(t,e,r=new Date)=>{const i=Ms(r,t.timeZone);return Zi(t,{...i,minutes:t.minutes},e)},Ju=(t,e,r=new Date)=>{const i=Ms(r,t.timeZone);return zi(i,e)??t},ed=(t,e)=>({latitude:(t==null?void 0:t.latitude)??e.latitude,longitude:(t==null?void 0:t.longitude)??e.longitude}),td=(t,e)=>t.latitude===e.latitude&&t.longitude===e.longitude,Da=(t,e,r)=>{const i=t==null?void 0:t.getCenter();return ed(i?{latitude:i.lat,longitude:i.lng}:null,{latitude:e,longitude:r})},lc=(t,e,r)=>{const[i,n]=z.useState(()=>Da(t,e,r));return z.useEffect(()=>{const s=()=>{const a=Da(t,e,r);n(o=>td(o,a)?o:a)};if(s(),!!t)return t.on(Se.MOVE_END,s),()=>{t.off(Se.MOVE_END,s)}},[e,r,t]),i},br="flex h-9 min-w-0 items-center justify-center whitespace-nowrap rounded-md border border-neutral-300 bg-white px-1 text-center text-sm text-neutral-800 transition-colors hover:border-amber-500 hover:text-amber-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/40",Pa="h-8 whitespace-nowrap border-r border-neutral-300 px-3 text-sm text-neutral-700 transition-colors last:border-r-0 hover:text-amber-700",iv=[{label:"120 FPS",value:qe.FPS_120},{label:"60 FPS",value:qe.FPS_60},{label:"30 FPS",value:qe.FPS_30},{label:"Ultra",value:qe.ULTRA}],nv=[{label:"0,25 px",value:.25},{label:"0,5 px",value:.5},{label:"1 px",value:1},{label:"2 px",value:2},{label:"4 px",value:4}],sv=[{value:mt.HDR_16,label:"HDR · 16 Bit (Experiment)"},{value:mt.HDR_16_32,label:"HDR · 16/32 Bit (Standard)"},{value:mt.HDR_32,label:"HDR · 32 Bit (ohne MSAA)"},{value:mt.SDR_8,label:"SDR · 8 Bit (Experiment)"}],rd=t=>`${String(t).padStart(2,"0")}:00`,uc=(t,e,r)=>({"--shadow-range-progress":`${r>e?Math.max(0,Math.min(100,(t-e)/(r-e)*100)):0}%`});var id={exports:{}};(function(t,e){(function(r,i){t.exports=i(yu)})(cu,function(r){function i(c){return c&&typeof c=="object"&&"default"in c?c:{default:c}}var n=i(r),s={s:"ein paar Sekunden",m:["eine Minute","einer Minute"],mm:"%d Minuten",h:["eine Stunde","einer Stunde"],hh:"%d Stunden",d:["ein Tag","einem Tag"],dd:["%d Tage","%d Tagen"],M:["ein Monat","einem Monat"],MM:["%d Monate","%d Monaten"],y:["ein Jahr","einem Jahr"],yy:["%d Jahre","%d Jahren"]};function a(c,l,u){var d=s[u];return Array.isArray(d)&&(d=d[l?0:1]),d.replace("%d",c)}var o={name:"de",weekdays:"Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),weekdaysShort:"So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),weekdaysMin:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),months:"Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sept._Okt._Nov._Dez.".split("_"),ordinal:function(c){return c+"."},weekStart:1,yearStart:4,formats:{LTS:"HH:mm:ss",LT:"HH:mm",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY HH:mm",LLLL:"dddd, D. MMMM YYYY HH:mm"},relativeTime:{future:"in %s",past:"vor %s",s:a,m:a,mm:a,h:a,hh:a,d:a,dd:a,M:a,MM:a,y:a,yy:a}};return n.default.locale(o,null,!0),o})})(id);const nd=({config:t,libreMap:e,state:r,setState:i,dateState:n,setDateState:s})=>{const{latitude:a=Ci.latitude,longitude:o=Ci.longitude}=t??{},c=lc(e,a,o),[l,u]=z.useState(!1),d=n,g=z.useMemo(()=>d?Wo(d,c):null,[c,d]),p=z.useMemo(()=>d?Su(new Date(Date.UTC(d.year,0,d.dayOfYear))).locale("de"):null,[d]);if(!r||!d||!g||!p)return null;const f=Math.ceil(g.sunriseMinutes),S=Math.floor(g.sunsetMinutes),h=v=>{s(Zi(d,v,c))};return O.jsx("div",{className:"shadow-simulation-header-controls text-sm text-neutral-700","data-test-id":"shadow-simulation-header-controls",children:O.jsxs("div",{className:"shadow-simulation-header-layout",children:[O.jsxs("div",{className:"shadow-simulation-header-date grid grid-cols-[28px_minmax(0,118px)_28px] items-center",children:[O.jsx("button",{type:"button",className:"flex h-9 w-7 items-center justify-center rounded-full hover:bg-neutral-100","aria-label":"Vorheriger Tag",onClick:()=>h({...d,...as(d,-1)}),children:O.jsx(Ot,{icon:lu})}),O.jsxs("div",{className:"relative min-w-0 justify-self-center",children:[O.jsxs("button",{type:"button",className:"flex h-9 max-w-full items-center gap-1.5 whitespace-nowrap rounded-md px-1 tabular-nums hover:bg-neutral-100","aria-label":"Datum auswählen","aria-expanded":l,onClick:()=>u(!0),children:[O.jsx(Ot,{icon:uu,className:"shrink-0 text-neutral-500"}),O.jsx("span",{className:"truncate",children:Al(d,!1)})]}),O.jsx(wu,{open:l,value:p,locale:Xu.DatePicker,format:"D. MMMM YYYY",allowClear:!1,inputReadOnly:!0,getPopupContainer:v=>v.parentElement??v,onOpenChange:u,onChange:v=>{v&&(h({...d,year:v.year(),dayOfYear:Go(v.year(),v.month(),v.date())}),u(!1))},className:"pointer-events-none absolute left-0 top-full h-0 w-0 overflow-hidden p-0 opacity-0","aria-label":"Datum auswählen"})]}),O.jsx("button",{type:"button",className:"flex h-9 w-7 items-center justify-center rounded-full hover:bg-neutral-100","aria-label":"Nächster Tag",onClick:()=>h({...d,...as(d,1)}),children:O.jsx(Ot,{icon:du})})]}),O.jsx("span",{className:"shadow-simulation-header-divider h-7 w-px bg-neutral-200","aria-hidden":"true"}),O.jsxs("label",{className:"shadow-simulation-header-time m-0 flex h-9 w-fit cursor-pointer items-center gap-1.5 rounded-md px-1 hover:bg-neutral-100",children:[O.jsx(Ot,{icon:hu,className:"shrink-0 text-neutral-500"}),O.jsx("input",{type:"time",value:Cn(d.minutes),min:Cn(f),max:Cn(S),step:60,onClick:v=>{try{v.currentTarget.showPicker()}catch{return}},onChange:v=>{const[b,R]=v.currentTarget.value.split(":").map(Number);!Number.isFinite(b)||!Number.isFinite(R)||h({...d,minutes:b*60+R})},className:"shadow-simulation-time-input w-[46px] cursor-pointer bg-transparent p-0 text-sm font-medium leading-none tabular-nums text-neutral-800 outline-none","aria-label":"Uhrzeit auswählen","data-test-id":"shadow-simulation-time-input"})]}),O.jsx("input",{type:"range",min:f,max:S,step:1,value:d.minutes,onChange:v=>h({...d,minutes:Number(v.currentTarget.value)}),className:"shadow-simulation-header-range shadow-simulation-range cursor-pointer",style:uc(d.minutes,f,S),"aria-label":"Uhrzeit","data-test-id":"shadow-simulation-ribbon-time"}),O.jsx("button",{type:"button",className:"shadow-simulation-header-play flex h-9 w-9 items-center justify-center rounded-full bg-amber-50 text-amber-600 hover:bg-amber-100","aria-label":r.isAnimating?"Animation pausieren":"Animation starten","aria-pressed":r.isAnimating??!1,onClick:()=>i({...r,isAnimating:!r.isAnimating}),children:O.jsx(Ot,{icon:r.isAnimating?mu:fu})})]})})},Oa=[[0,1],[1,3],[3,2],[2,0],[4,5],[5,7],[7,6],[6,4],[0,4],[1,5],[2,6],[3,7]],sd=({min:t,max:e})=>[new T(t.x,t.y,t.z),new T(e.x,t.y,t.z),new T(t.x,e.y,t.z),new T(e.x,e.y,t.z),new T(t.x,t.y,e.z),new T(e.x,t.y,e.z),new T(t.x,e.y,e.z),new T(e.x,e.y,e.z)],ad=t=>[t.coordinateSystem===Cl?0:-1,1].flatMap(r=>[-1,1].flatMap(i=>[-1,1].map(n=>new T(n,i,r).unproject(t)))),Ln=(t,e,r)=>t.every(i=>i.distanceToPoint(e)>=-r),Na=(t,e,r)=>e.x>=t.min.x-r&&e.x<=t.max.x+r&&e.y>=t.min.y-r&&e.y<=t.max.y+r&&e.z>=t.min.z-r&&e.z<=t.max.z+r,us=(t,e,r)=>{t.some(i=>i.distanceToSquared(e)<=r)||t.push(e)},La=(t,e,r,i,n,s)=>{const a=e.clone().sub(t);for(const o of r){const c=o.distanceToPoint(t),l=o.distanceToPoint(e),u=c-l;if(Math.abs(u)<=Number.EPSILON)continue;const d=c/u;if(d<0||d>1)continue;const g=t.clone().addScaledVector(a,d);i(g)&&us(n,g,s)}},dc=(t,e,r=1e-6)=>{if(e.isEmpty())return[];t.updateMatrixWorld(!0);const i=new jr().setFromProjectionMatrix(new Z().multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),t.coordinateSystem,t.reversedDepth);if(!i.intersectsBox(e))return[];const n=r*r,s=sd(e),a=ad(t),o=[];for(const l of s)Ln(i.planes,l,r)&&us(o,l,n);for(const l of a)Na(e,l,r)&&us(o,l,n);for(const[l,u]of Oa)La(s[l],s[u],i.planes,d=>Ln(i.planes,d,r),o,n);const c=[new dt(new T(1,0,0),-e.min.x),new dt(new T(-1,0,0),e.max.x),new dt(new T(0,1,0),-e.min.y),new dt(new T(0,-1,0),e.max.y),new dt(new T(0,0,1),-e.min.z),new dt(new T(0,0,-1),e.max.z)];for(const[l,u]of Oa)La(a[l],a[u],c,d=>Na(e,d,r)&&Ln(i.planes,d,r),o,n);return o},hc=(t,e)=>{const r=Kr(t).map(o=>new ee(o.x,o.y,o.z,1).applyMatrix4(e));if(r.some(o=>o.w<=0))return new ee(0,0,1,1);const i=Math.max(0,(Math.min(...r.map(o=>o.x/o.w))+1)/2),n=Math.max(0,(Math.min(...r.map(o=>o.y/o.w))+1)/2),s=Math.min(1,(Math.max(...r.map(o=>o.x/o.w))+1)/2),a=Math.min(1,(Math.max(...r.map(o=>o.y/o.w))+1)/2);return new ee(i,n,Math.max(0,s-i),Math.max(0,a-n))},Kr=t=>[t.min.x,t.max.x].flatMap(e=>[t.min.y,t.max.y].flatMap(r=>[t.min.z,t.max.z].map(i=>new T(e,r,i)))),mc=(t,e,r)=>{const i=e.elements,n=Kr(t).map(o=>new ee(o.x,o.y,o.z,1).applyMatrix4(e)),s=Math.min(...n.map(o=>o.w));if(s<=0)return 1/0;let a=0;for(const[o,c]of[[0,r.x],[1,r.y]])for(let l=0;l<3;l+=1){const u=Math.max(...n.map(d=>Math.abs(i[l*4+o]*d.w-(o===0?d.x:d.y)*i[l*4+3])));a+=(c*.5*u/(s*s))**2}return Math.sqrt(a)},od=(t,e,r,i)=>{if(!(i>0&&Number.isFinite(i))||!(r.x>0&&r.y>0))throw new RangeError("Shadow page projection requires a positive pixel target and viewport");const n=new Z().multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),s=new Set;for(const{id:o,bounds:c}of t){if(s.has(o)||c.isEmpty()||![...c.min.toArray(),...c.max.toArray()].every(Number.isFinite))throw new RangeError("Receiver cells require unique IDs and finite, nonempty bounds");s.add(o)}const a=new jr().setFromProjectionMatrix(n);return t.filter(({bounds:o})=>a.intersectsBox(o)).map(o=>({...o,screenBounds:hc(o.bounds,n),groundTexelTargetMeters:Math.max(1e-9,i/mc(o.bounds,n,r))}))},cd=(t,e,r,i,n)=>t.clone().union(t.clone().translate(e.clone().normalize().multiplyScalar(r))).expandByScalar(2*r*Math.sin(i/2)+n),ld=(t,e)=>t.flatMap(({bounds:r})=>dc(e,r).length>0?Kr(r):[]),mi={WEST:"west",EAST:"east",SOUTH:"south",NORTH:"north"},Mr=({bounds:t})=>(t.max.x-t.min.x)*(t.max.z-t.min.z),ud=(t,e)=>t.min.z===e.min.z&&t.max.z===e.max.z&&(t.max.x===e.min.x||e.max.x===t.min.x)||t.min.x===e.min.x&&t.max.x===e.max.x&&(t.max.z===e.min.z||e.max.z===t.min.z),dd=t=>{const e=new Map(t.map(i=>[i.id,i]));let r=!0;for(;r;){r=!1;for(const i of e.values()){if(Math.min(i.bounds.max.x-i.bounds.min.x,i.bounds.max.z-i.bounds.min.z)>=i.fragmentMergeWidthMeters)continue;const s=Mr(i),a=[...e.values()].filter(o=>o!==i&&(Mr(o)>s||Mr(o)===s&&o.id<i.id)&&ud(i.bounds,o.bounds)).sort((o,c)=>Mr(c)-Mr(o)||(o.id<c.id?-1:o.id>c.id?1:0))[0];if(a){e.set(a.id,{...a,bounds:a.bounds.clone().union(i.bounds)}),e.delete(i.id),r=!0;break}}}return[...e.values()].map(({id:i,bounds:n})=>({id:i,bounds:n}))},Fn=t=>({west:t.min.x,east:t.max.x,south:t.min.z,north:t.max.z}),fc=(t,e)=>t.west<e.east&&t.east>e.west&&t.south<e.north&&t.north>e.south,hd=(t,e,r)=>{if(!fc(t,e))return[t];const i=Math.max(t.west,e.west),n=Math.min(t.east,e.east),s=Math.max(t.south,e.south),a=Math.min(t.north,e.north);return[{...t,east:i,side:mi.WEST},{...t,west:n,side:mi.EAST},{west:i,east:n,south:t.south,north:s,side:mi.SOUTH},{west:i,east:n,south:a,north:t.north,side:mi.NORTH}].filter(o=>o.west<o.east&&o.south<o.north).map(({side:o,...c})=>({...c,splitPath:[...t.splitPath,r,o]}))},md=t=>{const e=new Set;for(const{id:n,bounds:s}of t){if(e.has(n)||s.isEmpty()||![...s.min.toArray(),...s.max.toArray()].every(Number.isFinite))throw new RangeError("Receiver tiles require unique IDs and finite bounds");e.add(n)}const r=[...t].sort((n,s)=>n.id<s.id?-1:n.id>s.id?1:0);if(r.every(({receiverObjectId:n})=>n!==void 0))return r;const i=r.flatMap(({id:n,bounds:s},a)=>{const o=Fn(s);return o.west===o.east||o.south===o.north?[]:r.slice(0,a).reduce((l,u)=>l.flatMap(d=>hd(d,Fn(u.bounds),u.id)),[{...o,splitPath:[]}]).map(l=>{const u=r.reduce((d,g)=>fc(l,Fn(g.bounds))?[Math.min(d[0],g.bounds.min.y),Math.max(d[1],g.bounds.max.y)]:d,[s.min.y,s.max.y]);return{fragmentMergeWidthMeters:l.splitPath.length===0?0:Math.max(.1,.01*Math.min(o.east-o.west,o.north-o.south)),id:l.splitPath.length===0?n:JSON.stringify([n,...l.splitPath]),bounds:new Le(new T(l.west,u[0],l.south),new T(l.east,u[1],l.north))}})});return dd(i)},fd=(t,e=16)=>{if(!Number.isInteger(e)||e<=0||t.length===0)return[];const i=t.reduce((c,l)=>c.union(l.bounds),new Le).getCenter(new T),n=new Set(t.map(({id:c})=>c)),s=new Map;for(const c of t){const l=c.bounds.max.x-c.bounds.min.x;if(!(l>0&&Number.isFinite(l)))continue;const u=Math.round(c.bounds.min.x/l),d=Math.round(c.bounds.min.z/l);for(let g=-1;g<=1;g+=1)for(let p=-1;p<=1;p+=1){const f=`${l}:${u+g}:${d+p}`;n.has(f)||s.has(f)||s.set(f,{id:f,bounds:c.bounds.clone().translate(new T(g*l,0,p*l))})}}const a=Array.from({length:8},()=>[]);for(const c of s.values()){const l=c.bounds.getCenter(new T).sub(i),u=(Math.round(Math.atan2(l.z,l.x)/(Math.PI/4))+8)%8;a[u].push(c)}for(const c of a)c.sort((l,u)=>l.bounds.distanceToPoint(i)-u.bounds.distanceToPoint(i)||l.id.localeCompare(u.id));const o=[];for(let c=0;o.length<e;c+=1){const l=a.flatMap(u=>u[c]?[u[c]]:[]);if(l.length===0)break;o.push(...l.slice(0,e-o.length))}return o},pd=(t,e)=>{const r=t.getCenter(new T);let i=null,n=1/0;for(const s of e){const a=s.receiverBounds.distanceToPoint(r);a<n&&Number.isInteger(s.terrainLevel)&&(n=a,i=s.terrainLevel)}return i};/**
 * postprocessing v6.39.4 build Mon Jul 27 2026
 * https://github.com/pmndrs/postprocessing
 * Copyright 2015-2026 Raoul van Rüschen
 * @license Zlib
 */var gd=(()=>{const t=new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),e=new Float32Array([0,0,2,0,0,2]),r=new Ko;return r.setAttribute("position",new Ta(t,3)),r.setAttribute("uv",new Ta(e,2)),r})(),vd=class ds{static get fullscreenGeometry(){return gd}constructor(e="Pass",r=new Ur,i=new Rs){this.name=e,this.renderer=null,this.scene=r,this.camera=i,this.screen=null,this.rtt=!0,this.needsSwap=!0,this.needsDepthBlit=!1,this.needsDepthTexture=!1,this.enabled=!0}get renderToScreen(){return!this.rtt}set renderToScreen(e){if(this.rtt===e){const r=this.fullscreenMaterial;r!==null&&(r.needsUpdate=!0),this.rtt=!e}}set mainScene(e){}set mainCamera(e){}setRenderer(e){this.renderer=e}isEnabled(){return this.enabled}setEnabled(e){this.enabled=e}get fullscreenMaterial(){return this.screen!==null?this.screen.material:null}set fullscreenMaterial(e){let r=this.screen;r!==null?r.material=e:(r=new Gr(ds.fullscreenGeometry,e),r.frustumCulled=!1,this.scene===null&&(this.scene=new Ur),this.scene.add(r),this.screen=r)}getFullscreenMaterial(){return this.fullscreenMaterial}setFullscreenMaterial(e){this.fullscreenMaterial=e}getDepthTexture(){return null}setDepthTexture(e,r=Yo){}render(e,r,i,n,s){throw new Error("Render method not implemented!")}setSize(e,r){}initialize(e,r,i){}dispose(){for(const e of Object.keys(this)){const r=this[e];(r instanceof Ke||r instanceof Wi||r instanceof $o||r instanceof ds)&&this[e].dispose()}this.fullscreenMaterial!==null&&this.fullscreenMaterial.dispose()}},pc={NONE:0,DEPTH:1,CONVOLUTION:2},Q={SKIP:9,SET:30,ADD:0,ALPHA:1,AVERAGE:2,COLOR:3,COLOR_BURN:4,COLOR_DODGE:5,DARKEN:6,DIFFERENCE:7,DIVIDE:8,DST:9,EXCLUSION:10,HARD_LIGHT:11,HARD_MIX:12,HUE:13,INVERT:14,INVERT_RGB:15,LIGHTEN:16,LINEAR_BURN:17,LINEAR_DODGE:18,LINEAR_LIGHT:19,LUMINOSITY:20,MULTIPLY:21,NEGATION:22,NORMAL:23,OVERLAY:24,PIN_LIGHT:25,REFLECT:26,SATURATION:27,SCREEN:28,SOFT_LIGHT:29,SRC:30,SUBTRACT:31,VIVID_LIGHT:32},yd="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Sd="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,src.a*opacity);}",wd="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=(dst.rgb+src.rgb)*0.5;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",_d="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.xy,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",xd="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=mix(step(0.0,b)*(1.0-min(vec3(1.0),(1.0-a)/max(b,1e-9))),vec3(1.0),step(1.0,a));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Td="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=step(0.0,a)*mix(min(vec3(1.0),a/max(1.0-b,1e-9)),vec3(1.0),step(1.0,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",bd="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Md="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=abs(dst.rgb-src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Ed="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb/max(src.rgb,1e-9);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Rd="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-2.0*dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Ad="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb,1.0);vec3 b=min(src.rgb,1.0);vec3 c=mix(2.0*a*b,1.0-2.0*(1.0-a)*(1.0-b),step(0.5,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Cd="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=step(1.0,dst.rgb+src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Id="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.x,a.yz));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Dd="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Pd="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=src.rgb*max(1.0-dst.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Od="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Nd="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Ld="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb+src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Fd="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(2.0*src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Bd="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.xy,b.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Ud="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",kd="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-abs(1.0-dst.rgb-src.rgb),0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Hd="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,opacity);}",zd="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=2.0*src.rgb*dst.rgb;vec3 b=1.0-2.0*(1.0-src.rgb)*(1.0-dst.rgb);vec3 c=mix(a,b,step(0.5,dst.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Vd="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 c=mix(mix(src2,dst.rgb,step(0.5*dst.rgb,src.rgb)),max(src2-1.0,vec3(0.0)),step(dst.rgb,src2-1.0));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Wd="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb*dst.rgb/max(1.0-src.rgb,1e-9),1.0);vec3 c=mix(a,src.rgb,step(1.0,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Gd="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.x,b.y,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",jd="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-min(dst.rgb*src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Yd="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 d=dst.rgb+(src2-1.0);vec3 w=step(0.5,src.rgb);vec3 a=dst.rgb-(1.0-src2)*dst.rgb*(1.0-dst.rgb);vec3 b=mix(d*(sqrt(dst.rgb)-dst.rgb),d*dst.rgb*((16.0*dst.rgb-12.0)*dst.rgb+3.0),w*(1.0-step(0.25,dst.rgb)));vec3 c=mix(a,b,w);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",$d="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return src;}",Kd="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",qd="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=mix(max(1.0-min((1.0-dst.rgb)/(2.0*src.rgb),1.0),0.0),min(dst.rgb/(2.0*(1.0-src.rgb)),1.0),step(0.5,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Xd=new Map([[Q.ADD,yd],[Q.ALPHA,Sd],[Q.AVERAGE,wd],[Q.COLOR,_d],[Q.COLOR_BURN,xd],[Q.COLOR_DODGE,Td],[Q.DARKEN,bd],[Q.DIFFERENCE,Md],[Q.DIVIDE,Ed],[Q.DST,null],[Q.EXCLUSION,Rd],[Q.HARD_LIGHT,Ad],[Q.HARD_MIX,Cd],[Q.HUE,Id],[Q.INVERT,Dd],[Q.INVERT_RGB,Pd],[Q.LIGHTEN,Od],[Q.LINEAR_BURN,Nd],[Q.LINEAR_DODGE,Ld],[Q.LINEAR_LIGHT,Fd],[Q.LUMINOSITY,Bd],[Q.MULTIPLY,Ud],[Q.NEGATION,kd],[Q.NORMAL,Hd],[Q.OVERLAY,zd],[Q.PIN_LIGHT,Vd],[Q.REFLECT,Wd],[Q.SATURATION,Gd],[Q.SCREEN,jd],[Q.SOFT_LIGHT,Yd],[Q.SRC,$d],[Q.SUBTRACT,Kd],[Q.VIVID_LIGHT,qd]]),Qd=class extends jo{constructor(t,e=1){super(),this._blendFunction=t,this.opacity=new I(e)}getOpacity(){return this.opacity.value}setOpacity(t){this.opacity.value=t}get blendFunction(){return this._blendFunction}set blendFunction(t){this._blendFunction=t,this.dispatchEvent({type:"change"})}getBlendFunction(){return this.blendFunction}setBlendFunction(t){this.blendFunction=t}getShaderCode(){return Xd.get(this.blendFunction)}},Zd=class extends jo{constructor(t,e,{attributes:r=pc.NONE,blendFunction:i=Q.NORMAL,defines:n=new Map,uniforms:s=new Map,extensions:a=null,vertexShader:o=null}={}){super(),this.name=t,this.renderer=null,this.attributes=r,this.fragmentShader=e,this.vertexShader=o,this.defines=n,this.uniforms=s,this.extensions=a,this.blendMode=new Qd(i),this.blendMode.addEventListener("change",c=>this.setChanged()),this._inputColorSpace=Il,this._outputColorSpace=Dl}get inputColorSpace(){return this._inputColorSpace}set inputColorSpace(t){this._inputColorSpace=t,this.setChanged()}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t,this.setChanged()}set mainScene(t){}set mainCamera(t){}getName(){return this.name}setRenderer(t){this.renderer=t}getDefines(){return this.defines}getUniforms(){return this.uniforms}getExtensions(){return this.extensions}getBlendMode(){return this.blendMode}getAttributes(){return this.attributes}setAttributes(t){this.attributes=t,this.setChanged()}getFragmentShader(){return this.fragmentShader}setFragmentShader(t){this.fragmentShader=t,this.setChanged()}getVertexShader(){return this.vertexShader}setVertexShader(t){this.vertexShader=t,this.setChanged()}setChanged(){this.dispatchEvent({type:"change"})}setDepthTexture(t,e=Yo){}update(t,e,r){}setSize(t,e){}initialize(t,e,r){}dispose(){for(const t of Object.keys(this)){const e=this[t];(e instanceof Ke||e instanceof Wi||e instanceof $o||e instanceof vd)&&this[t].dispose()}}};const Jd=new T;function gc(t,e,r=new T,i){const{x:n,y:s,z:a}=t,o=e.x,c=e.y,l=e.z,u=n*n*o,d=s*s*c,g=a*a*l,p=u+d+g,f=Math.sqrt(1/p);if(!Number.isFinite(f))return;const S=Jd.copy(t).multiplyScalar(f);if(p<((i==null?void 0:i.centerTolerance)??.1))return r.copy(S);const h=S.multiply(e).multiplyScalar(2);let v=(1-f)*t.length()/(h.length()/2),b=0,R,D,C,A;do{v-=b,R=1/(1+v*o),D=1/(1+v*c),C=1/(1+v*l);const M=R*R,U=D*D,L=C*C,B=M*R,X=U*D,$=L*C;A=u*M+d*U+g*L-1,b=A/((u*B*o+d*X*c+g*$*l)*-2)}while(Math.abs(A)>1e-12);return r.set(n*R,s*D,a*C)}const fi=new T,Fa=new T,Ba=new T,hs=class{constructor(e,r,i){this.radii=new T(e,r,i)}get minimumRadius(){return Math.min(this.radii.x,this.radii.y,this.radii.z)}get maximumRadius(){return Math.max(this.radii.x,this.radii.y,this.radii.z)}reciprocalRadii(e=new T){const{x:r,y:i,z:n}=this.radii;return e.set(1/r,1/i,1/n)}reciprocalRadiiSquared(e=new T){const{x:r,y:i,z:n}=this.radii;return e.set(1/r**2,1/i**2,1/n**2)}projectOnSurface(e,r=new T,i){return gc(e,this.reciprocalRadiiSquared(),r,i)}getSurfaceNormal(e,r=new T){return r.multiplyVectors(this.reciprocalRadiiSquared(fi),e).normalize()}getEastNorthUpVectors(e,r=new T,i=new T,n=new T){this.getSurfaceNormal(e,n),r.set(-e.y,e.x,0).normalize(),i.crossVectors(n,r).normalize()}getEastNorthUpFrame(e,r=new Z){const i=fi,n=Fa,s=Ba;return this.getEastNorthUpVectors(e,i,n,s),r.makeBasis(i,n,s).setPosition(e)}getIntersection(e,r=new T){const i=this.reciprocalRadii(fi),n=Fa.copy(i).multiply(e.origin),s=Ba.copy(i).multiply(e.direction),a=n.lengthSq(),o=s.lengthSq(),c=n.dot(s),l=c**2-o*(a-1);if(a===1)return r.copy(e.origin);if(a>1){if(c>=0||l<0)return;const u=Math.sqrt(l),d=(-c-u)/o,g=(-c+u)/o;return e.at(Math.min(d,g),r)}if(a<1){const u=c**2-o*(a-1),d=Math.sqrt(u),g=(-c+d)/o;return e.at(g,r)}if(c<0)return e.at(-c/o,r)}getOsculatingSphereCenter(e,r,i=new T){const n=this.radii.x**2,s=fi.set(e.x/n,e.y/n,e.z/this.radii.z**2).normalize();return i.copy(s.multiplyScalar(-r).add(e))}};hs.WGS84=new hs(6378137,6378137,6356752314245179e-9);let ft=hs;const pi=new T,Ua=new T,Ir=class ms{constructor(e=0,r=0,i=0){this.longitude=e,this.latitude=r,this.height=i}set(e,r,i){return this.longitude=e,this.latitude=r,i!=null&&(this.height=i),this}clone(){return new ms(this.longitude,this.latitude,this.height)}copy(e){return this.longitude=e.longitude,this.latitude=e.latitude,this.height=e.height,this}equals(e){return e.longitude===this.longitude&&e.latitude===this.latitude&&e.height===this.height}setLongitude(e){return this.longitude=e,this}setLatitude(e){return this.latitude=e,this}setHeight(e){return this.height=e,this}normalize(){return this.longitude<ms.MIN_LONGITUDE&&(this.longitude+=Math.PI*2),this}setFromECEF(e,r){const i=((r==null?void 0:r.ellipsoid)??ft.WGS84).reciprocalRadiiSquared(pi),n=gc(e,i,Ua,r);if(n==null)throw new Error(`Could not project position to ellipsoid surface: ${e.toArray()}`);const s=pi.multiplyVectors(n,i).normalize();this.longitude=Math.atan2(s.y,s.x),this.latitude=Math.asin(s.z);const a=pi.subVectors(e,n);return this.height=Math.sign(a.dot(e))*a.length(),this}toECEF(e=new T,r){const i=(r==null?void 0:r.ellipsoid)??ft.WGS84,n=pi.multiplyVectors(i.radii,i.radii),s=Math.cos(this.latitude),a=Ua.set(s*Math.cos(this.longitude),s*Math.sin(this.longitude),Math.sin(this.latitude)).normalize();return e.multiplyVectors(n,a),e.divideScalar(Math.sqrt(a.dot(e))).add(a.multiplyScalar(this.height))}fromArray(e,r=0){return this.longitude=e[r],this.latitude=e[r+1],this.height=e[r+2],this}toArray(e=[],r=0){return e[r]=this.longitude,e[r+1]=this.latitude,e[r+2]=this.height,e}*[Symbol.iterator](){yield this.longitude,yield this.latitude,yield this.height}};Ir.MIN_LONGITUDE=-Math.PI,Ir.MAX_LONGITUDE=Math.PI,Ir.MIN_LATITUDE=-Math.PI/2,Ir.MAX_LATITUDE=Math.PI/2;let vc=Ir;var eh="Invariant failed";function yc(t,e){if(!t)throw new Error(eh)}class th extends Cs{load(e,r,i,n){const s=new Ol(this.manager);s.setResponseType("arraybuffer"),s.setRequestHeader(this.requestHeader),s.setPath(this.path),s.setWithCredentials(this.withCredentials),s.load(e,a=>{yc(a instanceof ArrayBuffer);try{r(a)}catch(o){n!=null?n(o):console.error(o),this.manager.itemError(e)}},i,n)}}const rh="This is not an object",ih="This is not a Float16Array object",ka="This constructor is not a subclass of Float16Array",Sc="The constructor property value is not an object",nh="Species constructor didn't return TypedArray object",sh="Derived constructor created TypedArray object which was too small length",Lr="Attempting to access detached ArrayBuffer",fs="Cannot convert undefined or null to object",ps="Cannot mix BigInt and other types, use explicit conversions",Ha="@@iterator property is not callable",za="Reduce of empty array with no initial value",ah="The comparison function must be either a function or undefined",Bn="Offset is out of bounds";function ue(t){return(e,...r)=>Ue(t,e,r)}function dr(t,e){return ue(ar(t,e).get)}const{apply:Ue,construct:Dr,defineProperty:oh,get:Un,getOwnPropertyDescriptor:ar,getPrototypeOf:qr,has:gs,ownKeys:wc,set:Va,setPrototypeOf:_c}=Reflect,ch=Proxy,{EPSILON:lh,MAX_SAFE_INTEGER:Wa,isFinite:xc,isNaN:or}=Number,{iterator:pt,species:uh,toStringTag:Ns,for:dh}=Symbol,cr=Object,{create:Ji,defineProperty:Xr,freeze:hh,is:Ga}=cr,vs=cr.prototype,mh=vs.__lookupGetter__?ue(vs.__lookupGetter__):(t,e)=>{if(t==null)throw fe(fs);let r=cr(t);do{const i=ar(r,e);if(i!==void 0)return Rt(i,"get")?i.get:void 0}while((r=qr(r))!==null)},Rt=cr.hasOwn||ue(vs.hasOwnProperty),Tc=Array,bc=Tc.isArray,en=Tc.prototype,fh=ue(en.join),ph=ue(en.push),gh=ue(en.toLocaleString),Ls=en[pt],vh=ue(Ls),{abs:yh,trunc:Mc}=Math,tn=ArrayBuffer,Sh=tn.isView,Ec=tn.prototype,wh=ue(Ec.slice),_h=dr(Ec,"byteLength"),ys=typeof SharedArrayBuffer<"u"?SharedArrayBuffer:null,xh=ys&&dr(ys.prototype,"byteLength"),Fs=qr(Uint8Array),Th=Fs.from,Re=Fs.prototype,bh=Re[pt],Mh=ue(Re.keys),Eh=ue(Re.values),Rh=ue(Re.entries),Ah=ue(Re.set),ja=ue(Re.reverse),Ch=ue(Re.fill),Ih=ue(Re.copyWithin),Ya=ue(Re.sort),Er=ue(Re.slice),Dh=ue(Re.subarray),Ee=dr(Re,"buffer"),Ut=dr(Re,"byteOffset"),ne=dr(Re,"length"),Rc=dr(Re,Ns),Ph=Uint8Array,Ve=Uint16Array,$a=(...t)=>Ue(Th,Ve,t),Bs=Uint32Array,Oh=Float32Array,Wt=qr([][pt]()),rn=ue(Wt.next),Nh=ue(function*(){}().next),Lh=qr(Wt),Fh=DataView.prototype,Bh=ue(Fh.getUint16),fe=TypeError,kn=RangeError,Ac=WeakSet,Cc=Ac.prototype,Uh=ue(Cc.add),kh=ue(Cc.has),nn=WeakMap,Us=nn.prototype,Di=ue(Us.get),Hh=ue(Us.has),ks=ue(Us.set),Ic=new nn,zh=Ji(null,{next:{value:function(){const t=Di(Ic,this);return rn(t)}},[pt]:{value:function(){return this}}});function Pr(t){if(t[pt]===Ls&&Wt.next===rn)return t;const e=Ji(zh);return ks(Ic,e,vh(t)),e}const Dc=new nn,Pc=Ji(Lh,{next:{value:function(){const t=Di(Dc,this);return Nh(t)},writable:!0,configurable:!0}});for(const t of wc(Wt))t!=="next"&&Xr(Pc,t,ar(Wt,t));function Ka(t){const e=Ji(Pc);return ks(Dc,e,t),e}function Pi(t){return t!==null&&typeof t=="object"||typeof t=="function"}function qa(t){return t!==null&&typeof t=="object"}function Oi(t){return Rc(t)!==void 0}function Ss(t){const e=Rc(t);return e==="BigInt64Array"||e==="BigUint64Array"}function Vh(t){try{return bc(t)?!1:(_h(t),!0)}catch{return!1}}function Oc(t){if(ys===null)return!1;try{return xh(t),!0}catch{return!1}}function Wh(t){return Vh(t)||Oc(t)}function Xa(t){return bc(t)?t[pt]===Ls&&Wt.next===rn:!1}function Gh(t){return Oi(t)?t[pt]===bh&&Wt.next===rn:!1}function gi(t){if(typeof t!="string")return!1;const e=+t;return t!==e+""||!xc(e)?!1:e===Mc(e)}const Ni=dh("__Float16Array__");function jh(t){if(!qa(t))return!1;const e=qr(t);if(!qa(e))return!1;const r=e.constructor;if(r===void 0)return!1;if(!Pi(r))throw fe(Sc);return gs(r,Ni)}const ws=1/lh;function Yh(t){return t+ws-ws}const Nc=6103515625e-14,$h=65504,Lc=.0009765625,Qa=Lc*Nc,Kh=Lc*ws;function qh(t){const e=+t;if(!xc(e)||e===0)return e;const r=e>0?1:-1,i=yh(e);if(i<Nc)return r*Yh(i/Qa)*Qa;const n=(1+Kh)*i,s=n-(n-i);return s>$h||or(s)?r*(1/0):r*s}const Fc=new tn(4),Bc=new Oh(Fc),Uc=new Bs(Fc),it=new Ve(512),nt=new Ph(512);for(let t=0;t<256;++t){const e=t-127;e<-24?(it[t]=0,it[t|256]=32768,nt[t]=24,nt[t|256]=24):e<-14?(it[t]=1024>>-e-14,it[t|256]=1024>>-e-14|32768,nt[t]=-e-1,nt[t|256]=-e-1):e<=15?(it[t]=e+15<<10,it[t|256]=e+15<<10|32768,nt[t]=13,nt[t|256]=13):e<128?(it[t]=31744,it[t|256]=64512,nt[t]=24,nt[t|256]=24):(it[t]=31744,it[t|256]=64512,nt[t]=13,nt[t|256]=13)}function lt(t){Bc[0]=qh(t);const e=Uc[0],r=e>>23&511;return it[r]+((e&8388607)>>nt[r])}const Hs=new Bs(2048);for(let t=1;t<1024;++t){let e=t<<13,r=0;for(;!(e&8388608);)e<<=1,r-=8388608;e&=-8388609,r+=947912704,Hs[t]=e|r}for(let t=1024;t<2048;++t)Hs[t]=939524096+(t-1024<<13);const hr=new Bs(64);for(let t=1;t<31;++t)hr[t]=t<<23;hr[31]=1199570944;hr[32]=2147483648;for(let t=33;t<63;++t)hr[t]=2147483648+(t-32<<23);hr[63]=3347054592;const kc=new Ve(64);for(let t=1;t<64;++t)t!==32&&(kc[t]=1024);function ae(t){const e=t>>10;return Uc[0]=Hs[kc[e]+(t&1023)]+hr[e],Bc[0]}function Mt(t){const e=+t;return or(e)||e===0?0:Mc(e)}function Hn(t){const e=Mt(t);return e<0?0:e<Wa?e:Wa}function vi(t,e){if(!Pi(t))throw fe(rh);const r=t.constructor;if(r===void 0)return e;if(!Pi(r))throw fe(Sc);return r[uh]??e}function Fr(t){if(Oc(t))return!1;try{return wh(t,0,0),!1}catch{}return!0}function Za(t,e){const r=or(t),i=or(e);if(r&&i)return 0;if(r)return 1;if(i||t<e)return-1;if(t>e)return 1;if(t===0&&e===0){const n=Ga(t,0),s=Ga(e,0);if(!n&&s)return-1;if(n&&!s)return 1}return 0}const zs=2,Li=new nn;function rr(t){return Hh(Li,t)||!Sh(t)&&jh(t)}function ie(t){if(!rr(t))throw fe(ih)}function yi(t,e){const r=rr(t),i=Oi(t);if(!r&&!i)throw fe(nh);if(typeof e=="number"){let n;if(r){const s=Y(t);n=ne(s)}else n=ne(t);if(n<e)throw fe(sh)}if(Ss(t))throw fe(ps)}function Y(t){const e=Di(Li,t);if(e!==void 0){const n=Ee(e);if(Fr(n))throw fe(Lr);return e}const r=t.buffer;if(Fr(r))throw fe(Lr);const i=Dr(ce,[r,t.byteOffset,t.length],t.constructor);return Di(Li,i)}function Ja(t){const e=ne(t),r=[];for(let i=0;i<e;++i)r[i]=ae(t[i]);return r}const Hc=new Ac;for(const t of wc(Re)){if(t===Ns)continue;const e=ar(Re,t);Rt(e,"get")&&typeof e.get=="function"&&Uh(Hc,e.get)}const Xh=hh({get(t,e,r){return gi(e)&&Rt(t,e)?ae(Un(t,e)):kh(Hc,mh(t,e))?Un(t,e):Un(t,e,r)},set(t,e,r,i){return gi(e)&&Rt(t,e)?Va(t,e,lt(r)):Va(t,e,r,i)},getOwnPropertyDescriptor(t,e){if(gi(e)&&Rt(t,e)){const r=ar(t,e);return r.value=ae(r.value),r}return ar(t,e)},defineProperty(t,e,r){return gi(e)&&Rt(t,e)&&Rt(r,"value")&&(r.value=lt(r.value)),oh(t,e,r)}});class ce{constructor(e,r,i){let n;if(rr(e))n=Dr(Ve,[Y(e)],new.target);else if(Pi(e)&&!Wh(e)){let a,o;if(Oi(e)){a=e,o=ne(e);const c=Ee(e);if(Fr(c))throw fe(Lr);if(Ss(e))throw fe(ps);const l=new tn(o*zs);n=Dr(Ve,[l],new.target)}else{const c=e[pt];if(c!=null&&typeof c!="function")throw fe(Ha);c!=null?Xa(e)?(a=e,o=e.length):(a=[...e],o=a.length):(a=e,o=Hn(a.length)),n=Dr(Ve,[o],new.target)}for(let c=0;c<o;++c)n[c]=lt(a[c])}else n=Dr(Ve,arguments,new.target);const s=new ch(n,Xh);return ks(Li,s,n),s}static from(e,...r){const i=this;if(!gs(i,Ni))throw fe(ka);if(i===ce){if(rr(e)&&r.length===0){const u=Y(e),d=new Ve(Ee(u),Ut(u),ne(u));return new ce(Ee(Er(d)))}if(r.length===0)return new ce(Ee($a(e,lt)));const c=r[0],l=r[1];return new ce(Ee($a(e,function(u,...d){return lt(Ue(c,this,[u,...Pr(d)]))},l)))}let n,s;const a=e[pt];if(a!=null&&typeof a!="function")throw fe(Ha);if(a!=null)Xa(e)?(n=e,s=e.length):Gh(e)?(n=e,s=ne(e)):(n=[...e],s=n.length);else{if(e==null)throw fe(fs);n=cr(e),s=Hn(n.length)}const o=new i(s);if(r.length===0)for(let c=0;c<s;++c)o[c]=n[c];else{const c=r[0],l=r[1];for(let u=0;u<s;++u)o[u]=Ue(c,l,[n[u],u])}return o}static of(...e){const r=this;if(!gs(r,Ni))throw fe(ka);const i=e.length;if(r===ce){const s=new ce(i),a=Y(s);for(let o=0;o<i;++o)a[o]=lt(e[o]);return s}const n=new r(i);for(let s=0;s<i;++s)n[s]=e[s];return n}keys(){ie(this);const e=Y(this);return Mh(e)}values(){ie(this);const e=Y(this);return Ka(function*(){for(const r of Eh(e))yield ae(r)}())}entries(){ie(this);const e=Y(this);return Ka(function*(){for(const[r,i]of Rh(e))yield[r,ae(i)]}())}at(e){ie(this);const r=Y(this),i=ne(r),n=Mt(e),s=n>=0?n:i+n;if(!(s<0||s>=i))return ae(r[s])}with(e,r){ie(this);const i=Y(this),n=ne(i),s=Mt(e),a=s>=0?s:n+s,o=+r;if(a<0||a>=n)throw kn(Bn);const c=new Ve(Ee(i),Ut(i),ne(i)),l=new ce(Ee(Er(c))),u=Y(l);return u[a]=lt(o),l}map(e,...r){ie(this);const i=Y(this),n=ne(i),s=r[0],a=vi(i,ce);if(a===ce){const c=new ce(n),l=Y(c);for(let u=0;u<n;++u){const d=ae(i[u]);l[u]=lt(Ue(e,s,[d,u,this]))}return c}const o=new a(n);yi(o,n);for(let c=0;c<n;++c){const l=ae(i[c]);o[c]=Ue(e,s,[l,c,this])}return o}filter(e,...r){ie(this);const i=Y(this),n=ne(i),s=r[0],a=[];for(let l=0;l<n;++l){const u=ae(i[l]);Ue(e,s,[u,l,this])&&ph(a,u)}const o=vi(i,ce),c=new o(a);return yi(c),c}reduce(e,...r){ie(this);const i=Y(this),n=ne(i);if(n===0&&r.length===0)throw fe(za);let s,a;r.length===0?(s=ae(i[0]),a=1):(s=r[0],a=0);for(let o=a;o<n;++o)s=e(s,ae(i[o]),o,this);return s}reduceRight(e,...r){ie(this);const i=Y(this),n=ne(i);if(n===0&&r.length===0)throw fe(za);let s,a;r.length===0?(s=ae(i[n-1]),a=n-2):(s=r[0],a=n-1);for(let o=a;o>=0;--o)s=e(s,ae(i[o]),o,this);return s}forEach(e,...r){ie(this);const i=Y(this),n=ne(i),s=r[0];for(let a=0;a<n;++a)Ue(e,s,[ae(i[a]),a,this])}find(e,...r){ie(this);const i=Y(this),n=ne(i),s=r[0];for(let a=0;a<n;++a){const o=ae(i[a]);if(Ue(e,s,[o,a,this]))return o}}findIndex(e,...r){ie(this);const i=Y(this),n=ne(i),s=r[0];for(let a=0;a<n;++a){const o=ae(i[a]);if(Ue(e,s,[o,a,this]))return a}return-1}findLast(e,...r){ie(this);const i=Y(this),n=ne(i),s=r[0];for(let a=n-1;a>=0;--a){const o=ae(i[a]);if(Ue(e,s,[o,a,this]))return o}}findLastIndex(e,...r){ie(this);const i=Y(this),n=ne(i),s=r[0];for(let a=n-1;a>=0;--a){const o=ae(i[a]);if(Ue(e,s,[o,a,this]))return a}return-1}every(e,...r){ie(this);const i=Y(this),n=ne(i),s=r[0];for(let a=0;a<n;++a)if(!Ue(e,s,[ae(i[a]),a,this]))return!1;return!0}some(e,...r){ie(this);const i=Y(this),n=ne(i),s=r[0];for(let a=0;a<n;++a)if(Ue(e,s,[ae(i[a]),a,this]))return!0;return!1}set(e,...r){ie(this);const i=Y(this),n=Mt(r[0]);if(n<0)throw kn(Bn);if(e==null)throw fe(fs);if(Ss(e))throw fe(ps);if(rr(e))return Ah(Y(this),Y(e),n);if(Oi(e)){const c=Ee(e);if(Fr(c))throw fe(Lr)}const s=ne(i),a=cr(e),o=Hn(a.length);if(n===1/0||o+n>s)throw kn(Bn);for(let c=0;c<o;++c)i[c+n]=lt(a[c])}reverse(){ie(this);const e=Y(this);return ja(e),this}toReversed(){ie(this);const e=Y(this),r=new Ve(Ee(e),Ut(e),ne(e)),i=new ce(Ee(Er(r))),n=Y(i);return ja(n),i}fill(e,...r){ie(this);const i=Y(this);return Ch(i,lt(e),...Pr(r)),this}copyWithin(e,r,...i){ie(this);const n=Y(this);return Ih(n,e,r,...Pr(i)),this}sort(e){ie(this);const r=Y(this),i=e!==void 0?e:Za;return Ya(r,(n,s)=>i(ae(n),ae(s))),this}toSorted(e){ie(this);const r=Y(this);if(e!==void 0&&typeof e!="function")throw new fe(ah);const i=e!==void 0?e:Za,n=new Ve(Ee(r),Ut(r),ne(r)),s=new ce(Ee(Er(n))),a=Y(s);return Ya(a,(o,c)=>i(ae(o),ae(c))),s}slice(e,r){ie(this);const i=Y(this),n=vi(i,ce);if(n===ce){const f=new Ve(Ee(i),Ut(i),ne(i));return new ce(Ee(Er(f,e,r)))}const s=ne(i),a=Mt(e),o=r===void 0?s:Mt(r);let c;a===-1/0?c=0:a<0?c=s+a>0?s+a:0:c=s<a?s:a;let l;o===-1/0?l=0:o<0?l=s+o>0?s+o:0:l=s<o?s:o;const u=l-c>0?l-c:0,d=new n(u);if(yi(d,u),u===0)return d;const g=Ee(i);if(Fr(g))throw fe(Lr);let p=0;for(;c<l;)d[p]=ae(i[c]),++c,++p;return d}subarray(e,r){ie(this);const i=Y(this),n=vi(i,ce),s=new Ve(Ee(i),Ut(i),ne(i)),a=Dh(s,e,r),o=new n(Ee(a),Ut(a),ne(a));return yi(o),o}indexOf(e,...r){ie(this);const i=Y(this),n=ne(i);let s=Mt(r[0]);if(s===1/0)return-1;s<0&&(s+=n,s<0&&(s=0));for(let a=s;a<n;++a)if(Rt(i,a)&&ae(i[a])===e)return a;return-1}lastIndexOf(e,...r){ie(this);const i=Y(this),n=ne(i);let s=r.length>=1?Mt(r[0]):n-1;if(s===-1/0)return-1;s>=0?s=s<n-1?s:n-1:s+=n;for(let a=s;a>=0;--a)if(Rt(i,a)&&ae(i[a])===e)return a;return-1}includes(e,...r){ie(this);const i=Y(this),n=ne(i);let s=Mt(r[0]);if(s===1/0)return!1;s<0&&(s+=n,s<0&&(s=0));const a=or(e);for(let o=s;o<n;++o){const c=ae(i[o]);if(a&&or(c)||c===e)return!0}return!1}join(e){ie(this);const r=Y(this),i=Ja(r);return fh(i,e)}toLocaleString(...e){ie(this);const r=Y(this),i=Ja(r);return gh(i,...Pr(e))}get[Ns](){if(rr(this))return"Float16Array"}}Xr(ce,"BYTES_PER_ELEMENT",{value:zs});Xr(ce,Ni,{});_c(ce,Fs);const Fi=ce.prototype;Xr(Fi,"BYTES_PER_ELEMENT",{value:zs});Xr(Fi,pt,{value:Fi.values,writable:!0,configurable:!0});_c(Fi,Re);function Qh(t,e,...r){return ae(Bh(t,e,...Pr(r)))}function Zh(t){return t instanceof Int8Array||t instanceof Uint8Array||t instanceof Uint8ClampedArray||t instanceof Int16Array||t instanceof Uint16Array||t instanceof Int32Array||t instanceof Uint32Array||t instanceof ce||t instanceof Float32Array||t instanceof Float64Array}let Si;function Jh(){if(Si!=null)return Si;const t=new Uint32Array([268435456]);return Si=new Uint8Array(t.buffer,t.byteOffset,t.byteLength)[0]===0,Si}function em(t,e,r,i=!0){if(i===Jh())return new e(t);const n=Object.assign(new DataView(t),{getFloat16(a,o){return Qh(this,a,o)}}),s=new e(n.byteLength/e.BYTES_PER_ELEMENT);for(let a=0,o=0;a<s.length;++a,o+=e.BYTES_PER_ELEMENT)s[a]=n[r](o,i);return s}const zn=(t,e)=>em(t,ce,"getFloat16",e);class tm extends Cs{load(e,r,i,n){const s=new th(this.manager);s.setRequestHeader(this.requestHeader),s.setPath(this.path),s.setWithCredentials(this.withCredentials),s.load(e,a=>{try{r(this.parseTypedArray(a))}catch(o){n!=null?n(o):console.error(o),this.manager.itemError(e)}},i,n)}}function rm(t){return class extends tm{constructor(){super(...arguments),this.parseTypedArray=t}}}function im(t){const e=t instanceof Int8Array?Nl:t instanceof Uint8Array?Ma:t instanceof Uint8ClampedArray?Ma:t instanceof Int16Array?Ll:t instanceof Uint16Array?Fl:t instanceof Int32Array?Bl:t instanceof Uint32Array?Vt:t instanceof ce?qo:t instanceof Float32Array?Et:t instanceof Float64Array?Et:null;return yc(e!=null),e}const nm={format:Hr,minFilter:ba,magFilter:ba};class sm extends Cs{constructor(){super(...arguments),this.parameters={}}load(e,r,i,n){const s=new this.Texture,a=new this.TypedArrayLoader(this.manager);a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(this.withCredentials),a.load(e,o=>{s.image.data=o instanceof ce?new Uint16Array(o.buffer):o;const{width:c,height:l,depth:u,...d}=this.parameters;c!=null&&(s.image.width=c),l!=null&&(s.image.height=l),"depth"in s.image&&u!=null&&(s.image.depth=u),s.type=im(o),Object.assign(s,d),s.needsUpdate=!0,r(s)},i,n)}}function zc(t,e,r){return class extends sm{constructor(){super(...arguments),this.Texture=t,this.TypedArrayLoader=rm(e),this.parameters={...nm,...r}}}}function am(t,e){return zc(Pl,t,e)}function om(t,e){return zc(os,t,e)}function cm(t,e){return new(am(t,e))}function eo(t,e){return new(om(t,e))}const Bi=As.clamp,_s=As.degToRad;function lm(t,e,r,i=0,n=1){return As.mapLinear(t,e,r,i,n)}function um(t){return Math.min(Math.max(t,0),1)}function Fe(t){return(e,r)=>{e instanceof Wi?Object.defineProperty(e,r,{enumerable:!0,get(){var i;return((i=this.defines)==null?void 0:i[t])!=null},set(i){var n;i!==this[r]&&(i?(this.defines??(this.defines={}),this.defines[t]="1"):(n=this.defines)==null||delete n[t],this.needsUpdate=!0)}}):Object.defineProperty(e,r,{enumerable:!0,get(){return this.defines.has(t)},set(i){i!==this[r]&&(i?this.defines.set(t,"1"):this.defines.delete(t),this.setChanged())}})}}function dm(t,{min:e=Number.MIN_SAFE_INTEGER,max:r=Number.MAX_SAFE_INTEGER}={}){return(i,n)=>{i instanceof Wi?Object.defineProperty(i,n,{enumerable:!0,get(){var s;const a=(s=this.defines)==null?void 0:s[t];return a!=null?parseInt(a):0},set(s){const a=this[n];s!==a&&(this.defines??(this.defines={}),this.defines[t]=Bi(s,e,r).toFixed(0),this.needsUpdate=!0)}}):Object.defineProperty(i,n,{enumerable:!0,get(){const s=this.defines.get(t);return s!=null?parseInt(s):0},set(s){const a=this[n];s!==a&&(this.defines.set(t,Bi(s,e,r).toFixed(0)),this.setChanged())}})}}var Qr=Uint8Array,Vc=Uint16Array,hm=Uint32Array,mm=new Qr([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),fm=new Qr([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Wc=function(t,e){for(var r=new Vc(31),i=0;i<31;++i)r[i]=e+=1<<t[i-1];for(var n=new hm(r[30]),i=1;i<30;++i)for(var s=r[i];s<r[i+1];++s)n[s]=s-r[i]<<5|i;return[r,n]},Gc=Wc(mm,2),pm=Gc[0],gm=Gc[1];pm[28]=258,gm[258]=28;Wc(fm,0);var vm=new Vc(32768);for(var de=0;de<32768;++de){var It=(de&43690)>>>1|(de&21845)<<1;It=(It&52428)>>>2|(It&13107)<<2,It=(It&61680)>>>4|(It&3855)<<4,vm[de]=((It&65280)>>>8|(It&255)<<8)>>>1}var sn=new Qr(288);for(var de=0;de<144;++de)sn[de]=8;for(var de=144;de<256;++de)sn[de]=9;for(var de=256;de<280;++de)sn[de]=7;for(var de=280;de<288;++de)sn[de]=8;var ym=new Qr(32);for(var de=0;de<32;++de)ym[de]=5;var Sm=new Qr(0),wm=typeof TextDecoder<"u"&&new TextDecoder,_m=0;try{wm.decode(Sm,{stream:!0}),_m=1}catch{}const xm=/^[ \t]*#include +"([\w\d./]+)"/gm;function Gt(t,e){return t.replace(xm,(r,i)=>{const n=i.split("/").reduce((s,a)=>typeof s!="string"&&s!=null?s[a]:void 0,e);if(typeof n!="string")throw new Error(`Could not find include for ${i}.`);return Gt(n,e)})}const Tm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*(?:i\s*\+\+|\+\+\s*i)\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bm(t,e,r,i){let n="";for(let s=parseInt(e);s<parseInt(r);++s)n+=i.replace(/\[\s*i\s*\]/g,"["+s+"]").replace(/UNROLLED_LOOP_INDEX/g,`${s}`);return n}function Mm(t){return t.replace(Tm,bm)}const Em=`// Reference: https://github.com/mrdoob/three.js/blob/r171/examples/jsm/csm/CSMShader.js

#ifndef SHADOW_CASCADE_COUNT
#error "SHADOW_CASCADE_COUNT macro must be defined."
#endif // SHADOW_CASCADE_COUNT

int getCascadeIndex(
  const mat4 viewMatrix,
  const vec3 worldPosition,
  const vec2 intervals[SHADOW_CASCADE_COUNT],
  const float near,
  const float far
) {
  vec4 viewPosition = viewMatrix * vec4(worldPosition, 1.0);
  float depth = viewZToOrthographicDepth(viewPosition.z, near, far);
  vec2 interval;
  #pragma unroll_loop_start
  for (int i = 0; i < 4; ++i) {
    #if UNROLLED_LOOP_INDEX < SHADOW_CASCADE_COUNT
    interval = intervals[i];
    if (depth >= interval.x && depth < interval.y) {
      return UNROLLED_LOOP_INDEX;
    }
    #endif // UNROLLED_LOOP_INDEX < SHADOW_CASCADE_COUNT
  }
  #pragma unroll_loop_end
  return SHADOW_CASCADE_COUNT - 1;
}

int getFadedCascadeIndex(
  const mat4 viewMatrix,
  const vec3 worldPosition,
  const vec2 intervals[SHADOW_CASCADE_COUNT],
  const float near,
  const float far,
  const float jitter
) {
  vec4 viewPosition = viewMatrix * vec4(worldPosition, 1.0);
  float depth = viewZToOrthographicDepth(viewPosition.z, near, far);

  vec2 interval;
  float intervalCenter;
  float closestEdge;
  float margin;
  int nextIndex = -1;
  int prevIndex = -1;
  float alpha;

  #pragma unroll_loop_start
  for (int i = 0; i < 4; ++i) {
    #if UNROLLED_LOOP_INDEX < SHADOW_CASCADE_COUNT
    interval = intervals[i];
    intervalCenter = (interval.x + interval.y) * 0.5;
    closestEdge = depth < intervalCenter ? interval.x : interval.y;
    margin = closestEdge * closestEdge * 0.5;
    interval += margin * vec2(-0.5, 0.5);

    #if UNROLLED_LOOP_INDEX < SHADOW_CASCADE_COUNT - 1
    if (depth >= interval.x && depth < interval.y) {
      prevIndex = nextIndex;
      nextIndex = UNROLLED_LOOP_INDEX;
      alpha = saturate(min(depth - interval.x, interval.y - depth) / margin);
    }
    #else // UNROLLED_LOOP_INDEX < SHADOW_CASCADE_COUNT - 1
    // Don't fade out the last cascade.
    if (depth >= interval.x) {
      prevIndex = nextIndex;
      nextIndex = UNROLLED_LOOP_INDEX;
      alpha = saturate((depth - interval.x) / margin);
    }
    #endif // UNROLLED_LOOP_INDEX < SHADOW_CASCADE_COUNT - 1
    #endif // UNROLLED_LOOP_INDEX < SHADOW_CASCADE_COUNT
  }
  #pragma unroll_loop_end

  return jitter <= alpha
    ? nextIndex
    : prevIndex;
}
`,Rm=`// cSpell:words logdepthbuf

float reverseLogDepth(const float depth, const float near, const float far) {
  #ifdef USE_LOGDEPTHBUF
  float d = pow(2.0, depth * log2(far + 1.0)) - 1.0;
  float a = far / (far - near);
  float b = far * near / (near - far);
  return a + b / d;
  #else // USE_LOGDEPTHBUF
  return depth;
  #endif // USE_LOGDEPTHBUF
}

float linearizeDepth(const float depth, const float near, const float far) {
  float ndc = depth * 2.0 - 1.0;
  return 2.0 * near * far / (far + near - ndc * (far - near));
}
`,Am=`// Reference: https://advances.realtimerendering.com/s2014/index.html#_NEXT_GENERATION_POST

float interleavedGradientNoise(const vec2 coord) {
  const vec3 magic = vec3(0.06711056, 0.00583715, 52.9829189);
  return fract(magic.z * fract(dot(coord, magic.xy)));
}
`,Cm=`#if !defined(saturate)
#define saturate(a) clamp(a, 0.0, 1.0)
#endif // !defined(saturate)

float remap(const float x, const float min1, const float max1, const float min2, const float max2) {
  return min2 + (x - min1) / (max1 - min1) * (max2 - min2);
}

vec2 remap(const vec2 x, const vec2 min1, const vec2 max1, const vec2 min2, const vec2 max2) {
  return min2 + (x - min1) / (max1 - min1) * (max2 - min2);
}

vec3 remap(const vec3 x, const vec3 min1, const vec3 max1, const vec3 min2, const vec3 max2) {
  return min2 + (x - min1) / (max1 - min1) * (max2 - min2);
}

vec4 remap(const vec4 x, const vec4 min1, const vec4 max1, const vec4 min2, const vec4 max2) {
  return min2 + (x - min1) / (max1 - min1) * (max2 - min2);
}

float remapClamped(
  const float x,
  const float min1,
  const float max1,
  const float min2,
  const float max2
) {
  return clamp(min2 + (x - min1) / (max1 - min1) * (max2 - min2), min2, max2);
}

vec2 remapClamped(
  const vec2 x,
  const vec2 min1,
  const vec2 max1,
  const vec2 min2,
  const vec2 max2
) {
  return clamp(min2 + (x - min1) / (max1 - min1) * (max2 - min2), min2, max2);
}

vec3 remapClamped(
  const vec3 x,
  const vec3 min1,
  const vec3 max1,
  const vec3 min2,
  const vec3 max2
) {
  return clamp(min2 + (x - min1) / (max1 - min1) * (max2 - min2), min2, max2);
}

vec4 remapClamped(
  const vec4 x,
  const vec4 min1,
  const vec4 max1,
  const vec4 min2,
  const vec4 max2
) {
  return clamp(min2 + (x - min1) / (max1 - min1) * (max2 - min2), min2, max2);
}

// Implicitly remap to 0 and 1
float remap(const float x, const float min1, const float max1) {
  return (x - min1) / (max1 - min1);
}

vec2 remap(const vec2 x, const vec2 min1, const vec2 max1) {
  return (x - min1) / (max1 - min1);
}

vec3 remap(const vec3 x, const vec3 min1, const vec3 max1) {
  return (x - min1) / (max1 - min1);
}

vec4 remap(const vec4 x, const vec4 min1, const vec4 max1) {
  return (x - min1) / (max1 - min1);
}

float remapClamped(const float x, const float min1, const float max1) {
  return saturate((x - min1) / (max1 - min1));
}

vec2 remapClamped(const vec2 x, const vec2 min1, const vec2 max1) {
  return saturate((x - min1) / (max1 - min1));
}

vec3 remapClamped(const vec3 x, const vec3 min1, const vec3 max1) {
  return saturate((x - min1) / (max1 - min1));
}

vec4 remapClamped(const vec4 x, const vec4 min1, const vec4 max1) {
  return saturate((x - min1) / (max1 - min1));
}
`,Im=`// Reference: https://jcgt.org/published/0003/02/01/paper.pdf

vec2 signNotZero(vec2 v) {
  return vec2(v.x >= 0.0 ? 1.0 : -1.0, v.y >= 0.0 ? 1.0 : -1.0);
}

vec2 packNormalToVec2(vec3 v) {
  vec2 p = v.xy * (1.0 / (abs(v.x) + abs(v.y) + abs(v.z)));
  return v.z <= 0.0
    ? (1.0 - abs(p.yx)) * signNotZero(p)
    : p;
}

vec3 unpackVec2ToNormal(vec2 e) {
  vec3 v = vec3(e.xy, 1.0 - abs(e.x) - abs(e.y));
  if (v.z < 0.0) {
    v.xy = (1.0 - abs(v.yx)) * signNotZero(v.xy);
  }
  return normalize(v);
}
`,Dm=`float raySphereFirstIntersection(
  const vec3 origin,
  const vec3 direction,
  const vec3 center,
  const float radius
) {
  vec3 a = origin - center;
  float b = 2.0 * dot(direction, a);
  float c = dot(a, a) - radius * radius;
  float discriminant = b * b - 4.0 * c;
  return discriminant < 0.0
    ? -1.0
    : (-b - sqrt(discriminant)) * 0.5;
}

float raySphereFirstIntersection(const vec3 origin, const vec3 direction, const float radius) {
  return raySphereFirstIntersection(origin, direction, vec3(0.0), radius);
}

vec4 raySphereFirstIntersection(
  const vec3 origin,
  const vec3 direction,
  const vec3 center,
  const vec4 radius
) {
  vec3 a = origin - center;
  float b = 2.0 * dot(direction, a);
  vec4 c = dot(a, a) - radius * radius;
  vec4 discriminant = b * b - 4.0 * c;
  vec4 mask = step(discriminant, vec4(0.0));
  return mix((-b - sqrt(max(vec4(0.0), discriminant))) * 0.5, vec4(-1.0), mask);
}

vec4 raySphereFirstIntersection(const vec3 origin, const vec3 direction, const vec4 radius) {
  return raySphereFirstIntersection(origin, direction, vec3(0.0), radius);
}

float raySphereSecondIntersection(
  const vec3 origin,
  const vec3 direction,
  const vec3 center,
  const float radius
) {
  vec3 a = origin - center;
  float b = 2.0 * dot(direction, a);
  float c = dot(a, a) - radius * radius;
  float discriminant = b * b - 4.0 * c;
  return discriminant < 0.0
    ? -1.0
    : (-b + sqrt(discriminant)) * 0.5;
}

float raySphereSecondIntersection(const vec3 origin, const vec3 direction, const float radius) {
  return raySphereSecondIntersection(origin, direction, vec3(0.0), radius);
}

vec4 raySphereSecondIntersection(
  const vec3 origin,
  const vec3 direction,
  const vec3 center,
  const vec4 radius
) {
  vec3 a = origin - center;
  float b = 2.0 * dot(direction, a);
  vec4 c = dot(a, a) - radius * radius;
  vec4 discriminant = b * b - 4.0 * c;
  vec4 mask = step(discriminant, vec4(0.0));
  return mix((-b + sqrt(max(vec4(0.0), discriminant))) * 0.5, vec4(-1.0), mask);
}

vec4 raySphereSecondIntersection(const vec3 origin, const vec3 direction, const vec4 radius) {
  return raySphereSecondIntersection(origin, direction, vec3(0.0), radius);
}

void raySphereIntersections(
  const vec3 origin,
  const vec3 direction,
  const vec3 center,
  const float radius,
  out float intersection1,
  out float intersection2
) {
  vec3 a = origin - center;
  float b = 2.0 * dot(direction, a);
  float c = dot(a, a) - radius * radius;
  float discriminant = b * b - 4.0 * c;
  if (discriminant < 0.0) {
    intersection1 = -1.0;
    intersection2 = -1.0;
    return;
  } else {
    float Q = sqrt(discriminant);
    intersection1 = (-b - Q) * 0.5;
    intersection2 = (-b + Q) * 0.5;
  }
}

void raySphereIntersections(
  const vec3 origin,
  const vec3 direction,
  const float radius,
  out float intersection1,
  out float intersection2
) {
  raySphereIntersections(origin, direction, vec3(0.0), radius, intersection1, intersection2);
}

void raySphereIntersections(
  const vec3 origin,
  const vec3 direction,
  const vec3 center,
  const vec4 radius,
  out vec4 intersection1,
  out vec4 intersection2
) {
  vec3 a = origin - center;
  float b = 2.0 * dot(direction, a);
  vec4 c = dot(a, a) - radius * radius;
  vec4 discriminant = b * b - 4.0 * c;
  vec4 mask = step(discriminant, vec4(0.0));
  vec4 Q = sqrt(max(vec4(0.0), discriminant));
  intersection1 = mix((-b - Q) * 0.5, vec4(-1.0), mask);
  intersection2 = mix((-b + Q) * 0.5, vec4(-1.0), mask);
}

void raySphereIntersections(
  const vec3 origin,
  const vec3 direction,
  const vec4 radius,
  out vec4 intersection1,
  out vec4 intersection2
) {
  raySphereIntersections(origin, direction, vec3(0.0), radius, intersection1, intersection2);
}
`,Pm=`vec3 screenToView(
  const vec2 uv,
  const float depth,
  const float viewZ,
  const mat4 projectionMatrix,
  const mat4 inverseProjectionMatrix
) {
  vec4 clip = vec4(vec3(uv, depth) * 2.0 - 1.0, 1.0);
  float clipW = projectionMatrix[2][3] * viewZ + projectionMatrix[3][3];
  clip *= clipW;
  return (inverseProjectionMatrix * clip).xyz;
}
`,Om=`// Reference: https://www.gamedev.net/tutorials/programming/graphics/contact-hardening-soft-shadows-made-fast-r4906/

vec2 vogelDisk(const int index, const int sampleCount, const float phi) {
  const float goldenAngle = 2.39996322972865332;
  float r = sqrt(float(index) + 0.5) / sqrt(float(sampleCount));
  float theta = float(index) * goldenAngle + phi;
  return r * vec2(cos(theta), sin(theta));
}
`,Nm=Em,Lm=Rm,Fm=Am,Bm=Cm,Um=Im,jc=Dm,km=Pm,Hm=Om,Vs=`// Based on the following work and adapted to Three.js.
// This file includes runtime functions only. Please refer to Bruneton's source
// code for the whole picture. It has detailed comments.
// https://github.com/ebruneton/precomputed_atmospheric_scattering/blob/master/atmosphere/functions.glsl

/**
 * Copyright (c) 2017 Eric Bruneton
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 * 1. Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright
 *    notice, this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 * 3. Neither the name of the copyright holders nor the names of its
 *    contributors may be used to endorse or promote products derived from
 *    this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF
 * THE POSSIBILITY OF SUCH DAMAGE.
 *
 * Precomputed Atmospheric Scattering
 * Copyright (c) 2008 INRIA
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 * 1. Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright
 *    notice, this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 * 3. Neither the name of the copyright holders nor the names of its
 *    contributors may be used to endorse or promote products derived from
 *    this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF
 * THE POSSIBILITY OF SUCH DAMAGE.
 */

float ClampCosine(float mu) {
  return clamp(mu, float(-1.0), float(1.0));
}

float ClampDistance(float d) {
  return max(d, 0.0);
}

float ClampRadius(float r) {
  return clamp(r, u_bottom_radius, u_top_radius);
}

float SafeSqrt(float a) {
  return sqrt(max(a, 0.0));
}

float DistanceToTopAtmosphereBoundary(float r, float mu) {
  float discriminant = r * r * (mu * mu - 1.0) + u_top_radius * u_top_radius;
  return ClampDistance(-r * mu + SafeSqrt(discriminant));
}

bool RayIntersectsGround(float r, float mu) {
  return mu < 0.0 && r * r * (mu * mu - 1.0) + u_bottom_radius * u_bottom_radius >= 0.0;
}

float GetTextureCoordFromUnitRange(float x, int texture_size) {
  return 0.5 / float(texture_size) + x * (1.0 - 1.0 / float(texture_size));
}

vec2 GetTransmittanceTextureUvFromRMu(float r, float mu) {
  float H = sqrt(u_top_radius * u_top_radius - u_bottom_radius * u_bottom_radius);
  float rho = SafeSqrt(r * r - u_bottom_radius * u_bottom_radius);
  float d = DistanceToTopAtmosphereBoundary(r, mu);
  float d_min = u_top_radius - r;
  float d_max = rho + H;
  float x_mu = (d - d_min) / (d_max - d_min);
  float x_r = rho / H;
  return vec2(
    GetTextureCoordFromUnitRange(x_mu, TRANSMITTANCE_TEXTURE_WIDTH),
    GetTextureCoordFromUnitRange(x_r, TRANSMITTANCE_TEXTURE_HEIGHT)
  );
}

vec3 GetTransmittanceToTopAtmosphereBoundary(
  const sampler2D u_transmittance_texture,
  float r,
  float mu
) {
  vec2 uv = GetTransmittanceTextureUvFromRMu(r, mu);
  return vec3(texture(u_transmittance_texture, uv));
}

vec3 GetTransmittance(
  const sampler2D u_transmittance_texture,
  float r,
  float mu,
  float d,
  bool ray_r_mu_intersects_ground
) {
  float r_d = ClampRadius(sqrt(d * d + 2.0 * r * mu * d + r * r));
  float mu_d = ClampCosine((r * mu + d) / r_d);
  if (ray_r_mu_intersects_ground) {
    return min(
      GetTransmittanceToTopAtmosphereBoundary(u_transmittance_texture, r_d, -mu_d) /
        GetTransmittanceToTopAtmosphereBoundary(u_transmittance_texture, r, -mu),
      vec3(1.0)
    );
  } else {
    return min(
      GetTransmittanceToTopAtmosphereBoundary(u_transmittance_texture, r, mu) /
        GetTransmittanceToTopAtmosphereBoundary(u_transmittance_texture, r_d, mu_d),
      vec3(1.0)
    );
  }
}

vec3 GetTransmittanceToSun(const sampler2D u_transmittance_texture, float r, float mu_s) {
  float sin_theta_h = u_bottom_radius / r;
  float cos_theta_h = -sqrt(max(1.0 - sin_theta_h * sin_theta_h, 0.0));
  return GetTransmittanceToTopAtmosphereBoundary(u_transmittance_texture, r, mu_s) *
  smoothstep(
    -sin_theta_h * u_sun_angular_radius,
    sin_theta_h * u_sun_angular_radius,
    mu_s - cos_theta_h
  );
}

float RayleighPhaseFunction(float nu) {
  float k = 3.0 / (16.0 * PI);
  return k * (1.0 + nu * nu);
}

float MiePhaseFunction(float g, float nu) {
  float k = 3.0 / (8.0 * PI) * (1.0 - g * g) / (2.0 + g * g);
  return k * (1.0 + nu * nu) / pow(1.0 + g * g - 2.0 * g * nu, 1.5);
}

vec4 GetScatteringTextureUvwzFromRMuMuSNu(
  float r,
  float mu,
  float mu_s,
  float nu,
  bool ray_r_mu_intersects_ground
) {
  float H = sqrt(u_top_radius * u_top_radius - u_bottom_radius * u_bottom_radius);
  float rho = SafeSqrt(r * r - u_bottom_radius * u_bottom_radius);
  float u_r = GetTextureCoordFromUnitRange(rho / H, SCATTERING_TEXTURE_R_SIZE);
  float r_mu = r * mu;
  float discriminant = r_mu * r_mu - r * r + u_bottom_radius * u_bottom_radius;
  float u_mu;
  if (ray_r_mu_intersects_ground) {
    float d = -r_mu - SafeSqrt(discriminant);
    float d_min = r - u_bottom_radius;
    float d_max = rho;
    u_mu =
      0.5 -
      0.5 *
        GetTextureCoordFromUnitRange(
          d_max == d_min
            ? 0.0
            : (d - d_min) / (d_max - d_min),
          SCATTERING_TEXTURE_MU_SIZE / 2
        );
  } else {
    float d = -r_mu + SafeSqrt(discriminant + H * H);
    float d_min = u_top_radius - r;
    float d_max = rho + H;
    u_mu =
      0.5 +
      0.5 *
        GetTextureCoordFromUnitRange((d - d_min) / (d_max - d_min), SCATTERING_TEXTURE_MU_SIZE / 2);
  }
  float d = DistanceToTopAtmosphereBoundary(u_bottom_radius, mu_s);
  float d_min = u_top_radius - u_bottom_radius;
  float d_max = H;
  float a = (d - d_min) / (d_max - d_min);
  float D = DistanceToTopAtmosphereBoundary(u_bottom_radius, u_mu_s_min);
  float A = (D - d_min) / (d_max - d_min);
  float u_mu_s = GetTextureCoordFromUnitRange(
    max(1.0 - a / A, 0.0) / (1.0 + a),
    SCATTERING_TEXTURE_MU_S_SIZE
  );
  float u_nu = (nu + 1.0) / 2.0;
  return vec4(u_nu, u_mu_s, u_mu, u_r);
}

vec2 GetIrradianceTextureUvFromRMuS(float r, float mu_s) {
  float x_r = (r - u_bottom_radius) / (u_top_radius - u_bottom_radius);
  float x_mu_s = mu_s * 0.5 + 0.5;
  return vec2(
    GetTextureCoordFromUnitRange(x_mu_s, IRRADIANCE_TEXTURE_WIDTH),
    GetTextureCoordFromUnitRange(x_r, IRRADIANCE_TEXTURE_HEIGHT)
  );
}

vec3 GetIrradiance(const sampler2D u_irradiance_texture, float r, float mu_s) {
  vec2 uv = GetIrradianceTextureUvFromRMuS(r, mu_s);
  return vec3(texture(u_irradiance_texture, uv));
}

vec3 GetExtrapolatedSingleMieScattering(const vec4 scattering) {
  if (scattering.r <= 0.0) {
    return vec3(0.0);
  }
  return scattering.rgb *
  scattering.a /
  scattering.r *
  (u_rayleigh_scattering.r / u_mie_scattering.r) *
  (u_mie_scattering / u_rayleigh_scattering);
}

vec3 GetCombinedScattering(
  const sampler3D u_scattering_texture,
  const sampler3D u_single_mie_scattering_texture,
  float r,
  float mu,
  float mu_s,
  float nu,
  bool ray_r_mu_intersects_ground,
  out vec3 single_mie_scattering
) {
  vec4 uvwz = GetScatteringTextureUvwzFromRMuMuSNu(r, mu, mu_s, nu, ray_r_mu_intersects_ground);
  float tex_coord_x = uvwz.x * float(SCATTERING_TEXTURE_NU_SIZE - 1);
  float tex_x = floor(tex_coord_x);
  float lerp = tex_coord_x - tex_x;
  vec3 uvw0 = vec3((tex_x + uvwz.y) / float(SCATTERING_TEXTURE_NU_SIZE), uvwz.z, uvwz.w);
  vec3 uvw1 = vec3((tex_x + 1.0 + uvwz.y) / float(SCATTERING_TEXTURE_NU_SIZE), uvwz.z, uvwz.w);
  vec4 combined_scattering =
    texture(u_scattering_texture, uvw0) * (1.0 - lerp) + texture(u_scattering_texture, uvw1) * lerp;
  vec3 scattering = vec3(combined_scattering);
  single_mie_scattering = GetExtrapolatedSingleMieScattering(combined_scattering);
  return scattering;
}

vec3 GetSkyRadiance(
  const sampler2D u_transmittance_texture,
  const sampler3D u_scattering_texture,
  const sampler3D u_single_mie_scattering_texture,
  vec3 camera,
  const vec3 view_ray,
  float shadow_length,
  const vec3 sun_direction,
  out vec3 transmittance
) {
  float r = length(camera);
  float rmu = dot(camera, view_ray);
  float distance_to_top_atmosphere_boundary =
    -rmu - SafeSqrt(rmu * rmu - r * r + u_top_radius * u_top_radius);
  if (distance_to_top_atmosphere_boundary > 0.0) {
    camera = camera + view_ray * distance_to_top_atmosphere_boundary;
    r = u_top_radius;
    rmu += distance_to_top_atmosphere_boundary;
  } else if (r > u_top_radius) {
    transmittance = vec3(1.0);
    return vec3(0.0);
  }
  float mu = rmu / r;
  float mu_s = dot(camera, sun_direction) / r;
  float nu = dot(view_ray, sun_direction);
  bool ray_r_mu_intersects_ground = RayIntersectsGround(r, mu);
  transmittance = ray_r_mu_intersects_ground
    ? vec3(0.0)
    : GetTransmittanceToTopAtmosphereBoundary(u_transmittance_texture, r, mu);
  vec3 single_mie_scattering;
  vec3 scattering;

  if (shadow_length == 0.0) {
    scattering = GetCombinedScattering(
      u_scattering_texture,
      u_single_mie_scattering_texture,
      r,
      mu,
      mu_s,
      nu,
      ray_r_mu_intersects_ground,
      single_mie_scattering
    );
  } else {
    float d = shadow_length;
    float r_p = ClampRadius(sqrt(d * d + 2.0 * r * mu * d + r * r));
    float mu_p = (r * mu + d) / r_p;
    float mu_s_p = (r * mu_s + d * nu) / r_p;
    scattering = GetCombinedScattering(
      u_scattering_texture,
      u_single_mie_scattering_texture,
      r_p,
      mu_p,
      mu_s_p,
      nu,
      ray_r_mu_intersects_ground,
      single_mie_scattering
    );
    vec3 shadow_transmittance = GetTransmittance(
      u_transmittance_texture,
      r,
      mu,
      shadow_length,
      ray_r_mu_intersects_ground
    );
    scattering = scattering * shadow_transmittance;
    single_mie_scattering = single_mie_scattering * shadow_transmittance;
  }
  return scattering * RayleighPhaseFunction(nu) +
  single_mie_scattering * MiePhaseFunction(u_mie_phase_function_g, nu);
}

vec3 GetSkyRadianceToPoint(
  const sampler2D u_transmittance_texture,
  const sampler3D u_scattering_texture,
  const sampler3D u_single_mie_scattering_texture,
  vec3 camera,
  const vec3 point,
  float shadow_length,
  const vec3 sun_direction,
  out vec3 transmittance
) {
  vec3 view_ray = normalize(point - camera);
  float r = length(camera);
  float rmu = dot(camera, view_ray);
  float distance_to_top_atmosphere_boundary =
    -rmu - sqrt(rmu * rmu - r * r + u_top_radius * u_top_radius);
  if (distance_to_top_atmosphere_boundary > 0.0) {
    camera = camera + view_ray * distance_to_top_atmosphere_boundary;
    r = u_top_radius;
    rmu += distance_to_top_atmosphere_boundary;
  }
  float mu = rmu / r;
  float mu_s = dot(camera, sun_direction) / r;
  float nu = dot(view_ray, sun_direction);
  float d = length(point - camera);
  bool ray_r_mu_intersects_ground = RayIntersectsGround(r, mu);

  // Hack to avoid rendering artifacts near the horizon, due to finite
  // atmosphere texture resolution and finite floating point precision.
  // See: https://github.com/ebruneton/precomputed_atmospheric_scattering/pull/32
  if (!ray_r_mu_intersects_ground) {
    float mu_horiz = -SafeSqrt(1.0 - u_bottom_radius / r * (u_bottom_radius / r));
    mu = max(mu, mu_horiz + 0.004);
  }

  transmittance = GetTransmittance(u_transmittance_texture, r, mu, d, ray_r_mu_intersects_ground);
  vec3 single_mie_scattering;
  vec3 scattering = GetCombinedScattering(
    u_scattering_texture,
    u_single_mie_scattering_texture,
    r,
    mu,
    mu_s,
    nu,
    ray_r_mu_intersects_ground,
    single_mie_scattering
  );
  d = max(d - shadow_length, 0.0);
  float r_p = ClampRadius(sqrt(d * d + 2.0 * r * mu * d + r * r));
  float mu_p = (r * mu + d) / r_p;
  float mu_s_p = (r * mu_s + d * nu) / r_p;
  vec3 single_mie_scattering_p;
  vec3 scattering_p = GetCombinedScattering(
    u_scattering_texture,
    u_single_mie_scattering_texture,
    r_p,
    mu_p,
    mu_s_p,
    nu,
    ray_r_mu_intersects_ground,
    single_mie_scattering_p
  );
  vec3 shadow_transmittance = transmittance;
  if (shadow_length > 0.0) {
    shadow_transmittance = GetTransmittance(
      u_transmittance_texture,
      r,
      mu,
      d,
      ray_r_mu_intersects_ground
    );
  }
  scattering = scattering - shadow_transmittance * scattering_p;
  single_mie_scattering = single_mie_scattering - shadow_transmittance * single_mie_scattering_p;
  single_mie_scattering = GetExtrapolatedSingleMieScattering(
    vec4(scattering, single_mie_scattering.r)
  );
  single_mie_scattering = single_mie_scattering * smoothstep(float(0.0), float(0.01), mu_s);
  return scattering * RayleighPhaseFunction(nu) +
  single_mie_scattering * MiePhaseFunction(u_mie_phase_function_g, nu);
}

vec3 GetSunAndSkyIrradiance(
  const sampler2D u_transmittance_texture,
  const sampler2D u_irradiance_texture,
  const vec3 point,
  const vec3 sun_direction,
  out vec3 sky_irradiance
) {
  float r = length(point);
  float mu_s = dot(point, sun_direction) / r;
  sky_irradiance = GetIrradiance(u_irradiance_texture, r, mu_s);
  return u_solar_irradiance * GetTransmittanceToSun(u_transmittance_texture, r, mu_s);
}

vec3 GetSunAndSkyIrradiance(
  const sampler2D u_transmittance_texture,
  const sampler2D u_irradiance_texture,
  const vec3 point,
  const vec3 normal,
  const vec3 sun_direction,
  out vec3 sky_irradiance
) {
  float r = length(point);
  float mu_s = dot(point, sun_direction) / r;
  sky_irradiance =
    GetIrradiance(u_irradiance_texture, r, mu_s) * (1.0 + dot(normal, point) / r) * 0.5;
  return u_solar_irradiance *
  GetTransmittanceToSun(u_transmittance_texture, r, mu_s) *
  max(dot(normal, sun_direction), 0.0);
}

vec3 GetSolarRadiance() {
  vec3 radiance = u_solar_irradiance / (PI * u_sun_angular_radius * u_sun_angular_radius);
  #ifdef PHOTOMETRIC
  radiance *= SUN_SPECTRAL_RADIANCE_TO_LUMINANCE;
  #endif // PHOTOMETRIC
  return radiance;
}

vec3 GetSkyRadiance(
  vec3 camera,
  vec3 view_ray,
  float shadow_length,
  vec3 sun_direction,
  out vec3 transmittance
) {
  vec3 radiance = GetSkyRadiance(
    u_transmittance_texture,
    u_scattering_texture,
    u_single_mie_scattering_texture,
    camera,
    view_ray,
    shadow_length,
    sun_direction,
    transmittance
  );
  #ifdef PHOTOMETRIC
  radiance *= SKY_SPECTRAL_RADIANCE_TO_LUMINANCE;
  #endif // PHOTOMETRIC
  return radiance;
}

vec3 GetSkyRadianceToPoint(
  vec3 camera,
  vec3 point,
  float shadow_length,
  vec3 sun_direction,
  out vec3 transmittance
) {
  vec3 inscatter = GetSkyRadianceToPoint(
    u_transmittance_texture,
    u_scattering_texture,
    u_single_mie_scattering_texture,
    camera,
    point,
    shadow_length,
    sun_direction,
    transmittance
  );
  #ifdef PHOTOMETRIC
  inscatter *= SKY_SPECTRAL_RADIANCE_TO_LUMINANCE;
  #endif // PHOTOMETRIC
  return inscatter;
}

vec3 GetSunAndSkyIrradiance(vec3 point, vec3 sun_direction, out vec3 sky_irradiance) {
  vec3 sun_irradiance = GetSunAndSkyIrradiance(
    u_transmittance_texture,
    u_irradiance_texture,
    point,
    sun_direction,
    sky_irradiance
  );
  #ifdef PHOTOMETRIC
  sun_irradiance *= SUN_SPECTRAL_RADIANCE_TO_LUMINANCE;
  sky_irradiance *= SKY_SPECTRAL_RADIANCE_TO_LUMINANCE;
  #endif // PHOTOMETRIC
  return sun_irradiance;
}

vec3 GetSunAndSkyIrradiance(vec3 point, vec3 normal, vec3 sun_direction, out vec3 sky_irradiance) {
  vec3 sun_irradiance = GetSunAndSkyIrradiance(
    u_transmittance_texture,
    u_irradiance_texture,
    point,
    normal,
    sun_direction,
    sky_irradiance
  );
  #ifdef PHOTOMETRIC
  sun_irradiance *= SUN_SPECTRAL_RADIANCE_TO_LUMINANCE;
  sky_irradiance *= SKY_SPECTRAL_RADIANCE_TO_LUMINANCE;
  #endif // PHOTOMETRIC
  return sun_irradiance;
}
`,lr=`uniform vec3 u_solar_irradiance;
uniform float u_sun_angular_radius;
uniform float u_bottom_radius;
uniform float u_top_radius;
uniform vec3 u_rayleigh_scattering;
uniform vec3 u_mie_scattering;
uniform float u_mie_phase_function_g;
uniform float u_mu_s_min;

uniform sampler2D u_transmittance_texture;
uniform sampler3D u_scattering_texture;
uniform sampler3D u_single_mie_scattering_texture;
uniform sampler2D u_irradiance_texture;
`,zm=["solarIrradiance","sunAngularRadius","bottomRadius","topRadius","rayleighScattering","mieScattering","miePhaseFunctionG","muSMin","skyRadianceToLuminance","sunRadianceToLuminance","luminousEfficiency"];function Vm(t,e){if(e!=null)for(const r of zm){const i=e[r];i!=null&&(t[r]instanceof T?t[r].copy(i):t[r]=i)}}const xs=class{constructor(e){this.solarIrradiance=new T(1.474,1.8504,1.91198),this.sunAngularRadius=.004675,this.bottomRadius=636e4,this.topRadius=642e4,this.rayleighScattering=new T(.005802,.013558,.0331),this.mieScattering=new T(.003996,.003996,.003996),this.miePhaseFunctionG=.8,this.muSMin=Math.cos(_s(120)),this.skyRadianceToLuminance=new T(114974.916437,71305.954816,65310.548555),this.sunRadianceToLuminance=new T(98242.786222,69954.398112,66475.012354),this.luminousEfficiency=new T(.2126,.7152,.0722),this.skyRadianceToRelativeLuminance=new T,this.sunRadianceToRelativeLuminance=new T,Vm(this,e);const r=this.luminousEfficiency.dot(this.skyRadianceToLuminance);this.skyRadianceToRelativeLuminance.copy(this.skyRadianceToLuminance).divideScalar(r),this.sunRadianceToRelativeLuminance.copy(this.sunRadianceToLuminance).divideScalar(r)}};xs.DEFAULT=new xs;let an=xs;const on=64,cn=16,Ws=32,Gs=128,js=32,Ys=8,Wm=Ys*js,Gm=Gs,jm=Ws,ln=256,un=64,nr=1/1e3,Ym="82e00c5222d6cbc222af69abdf6d3f4fc9f63030",Vn=`https://media.githubusercontent.com/media/takram-design-engineering/three-geospatial/${Ym}/packages/atmosphere/assets`,$m=new T;function dn(t,e,r,i,n=!0){const s=r.projectOnSurface(t,$m);return s!=null?r.getOsculatingSphereCenter(!n||s.lengthSq()<t.lengthSq()?s:t,e,i):i.setScalar(0)}const Km=`precision highp sampler2DArray;

#include "core/depth"
#include "core/math"
#include "core/packing"
#include "core/transform"
#ifdef HAS_SHADOW
#include "core/raySphereIntersection"
#include "core/cascadedShadowMaps"
#include "core/interleavedGradientNoise"
#include "core/vogelDisk"
#endif // HAS_SHADOW
#include "parameters"
#include "functions"
#include "sky"

uniform sampler2D normalBuffer;

uniform mat4 projectionMatrix;
uniform mat4 viewMatrix;
uniform mat4 inverseProjectionMatrix;
uniform mat4 inverseViewMatrix;
uniform float bottomRadius;
uniform vec3 ellipsoidCenter;
uniform mat4 inverseEllipsoidMatrix;
uniform vec3 sunDirection;
uniform vec3 moonDirection;
uniform float moonAngularRadius;
uniform float lunarRadianceScale;
uniform float irradianceScale;
uniform float idealSphereAlpha;

#ifdef HAS_OVERLAY
uniform sampler2D overlayBuffer;
#endif // HAS_OVERLAY

#ifdef HAS_SHADOW
uniform sampler2DArray shadowBuffer;
uniform vec2 shadowIntervals[SHADOW_CASCADE_COUNT];
uniform mat4 shadowMatrices[SHADOW_CASCADE_COUNT];
uniform mat4 inverseShadowMatrices[SHADOW_CASCADE_COUNT];
uniform float shadowFar;
uniform float shadowTopHeight;
uniform float shadowRadius;
uniform sampler3D stbnTexture;
uniform int frame;
#endif // HAS_SHADOW

#ifdef HAS_SHADOW_LENGTH
uniform sampler2D shadowLengthBuffer;
#endif // HAS_SHADOW_LENGTH

varying vec3 vCameraPosition;
varying vec3 vRayDirection;
varying vec3 vEllipsoidCenter;
varying vec3 vGeometryEllipsoidCenter;
varying vec3 vEllipsoidRadiiSquared;

vec3 readNormal(const vec2 uv) {
  #ifdef OCT_ENCODED_NORMAL
  return unpackVec2ToNormal(texture(normalBuffer, uv).xy);
  #else // OCT_ENCODED_NORMAL
  return 2.0 * texture(normalBuffer, uv).xyz - 1.0;
  #endif // OCT_ENCODED_NORMAL
}

void correctGeometricError(inout vec3 positionECEF, inout vec3 normalECEF) {
  // TODO: The error is pronounced at the edge of the ellipsoid due to the
  // large difference between the sphere position and the unprojected position
  // at the current fragment. Calculating the sphere position from the fragment
  // UV may resolve this.

  // Correct way is slerp, but this will be small-angle interpolation anyways.
  vec3 sphereNormal = normalize(positionECEF / vEllipsoidRadiiSquared);
  vec3 spherePosition = u_bottom_radius * sphereNormal;
  normalECEF = mix(normalECEF, sphereNormal, idealSphereAlpha);
  positionECEF = mix(positionECEF, spherePosition, idealSphereAlpha);
}

#if defined(SUN_IRRADIANCE) || defined(SKY_IRRADIANCE)

vec3 getSunSkyIrradiance(
  const vec3 positionECEF,
  const vec3 normal,
  const vec3 inputColor,
  const float sunTransmittance
) {
  // Assume lambertian BRDF. If both SUN_IRRADIANCE and SKY_IRRADIANCE are not
  // defined, regard the inputColor as radiance at the texel.
  vec3 albedo = inputColor * irradianceScale * RECIPROCAL_PI;
  vec3 skyIrradiance;
  vec3 sunIrradiance = GetSunAndSkyIrradiance(positionECEF, normal, sunDirection, skyIrradiance);

  #ifdef HAS_SHADOW
  sunIrradiance *= sunTransmittance;
  #endif // HAS_SHADOW

  #if defined(SUN_IRRADIANCE) && defined(SKY_IRRADIANCE)
  return albedo * (sunIrradiance + skyIrradiance);
  #elif defined(SUN_IRRADIANCE)
  return albedo * sunIrradiance;
  #elif defined(SKY_IRRADIANCE)
  return albedo * skyIrradiance;
  #endif // defined(SUN_IRRADIANCE) && defined(SKY_IRRADIANCE)
}

#endif // defined(SUN_IRRADIANCE) || defined(SKY_IRRADIANCE)

#if defined(TRANSMITTANCE) || defined(INSCATTER)

void applyTransmittanceInscatter(const vec3 positionECEF, float shadowLength, inout vec3 radiance) {
  vec3 transmittance;
  vec3 inscatter = GetSkyRadianceToPoint(
    vCameraPosition - vGeometryEllipsoidCenter,
    positionECEF,
    shadowLength,
    sunDirection,
    transmittance
  );
  #ifdef TRANSMITTANCE
  radiance = radiance * transmittance;
  #endif // TRANSMITTANCE
  #ifdef INSCATTER
  radiance = radiance + inscatter;
  #endif // INSCATTER
}

#endif // defined(TRANSMITTANCE) || defined(INSCATTER)

#ifdef HAS_SHADOW

float getSTBN() {
  ivec3 size = textureSize(stbnTexture, 0);
  vec3 scale = 1.0 / vec3(size);
  return texture(stbnTexture, vec3(gl_FragCoord.xy, float(frame % size.z)) * scale).r;
}

vec2 getShadowUv(const vec3 worldPosition, const int cascadeIndex) {
  vec4 clip = shadowMatrices[cascadeIndex] * vec4(worldPosition, 1.0);
  clip /= clip.w;
  return clip.xy * 0.5 + 0.5;
}

float getDistanceToShadowTop(const vec3 positionECEF) {
  // Distance to the top of the shadows along the sun direction, which matches
  // the ray origin of BSM.
  return raySphereSecondIntersection(
    positionECEF / METER_TO_LENGTH_UNIT, // TODO: Make units consistent
    sunDirection,
    vec3(0.0),
    bottomRadius + shadowTopHeight
  );
}

float readShadowOpticalDepth(const vec2 uv, const float distanceToTop, const int cascadeIndex) {
  // r: frontDepth, g: meanExtinction, b: maxOpticalDepth, a: maxOpticalDepthTail
  vec4 shadow = texture(shadowBuffer, vec3(uv, float(cascadeIndex)));
  // Omit adding maxOpticalDepthTail to avoid pronounced aliasing. Ground
  // shadow will be attenuated by inscatter anyways.
  return min(shadow.b, shadow.g * max(0.0, distanceToTop - shadow.r));
}

float sampleShadowOpticalDepthPCF(
  const vec3 worldPosition,
  const float distanceToTop,
  const float radius,
  const int cascadeIndex
) {
  vec2 uv = getShadowUv(worldPosition, cascadeIndex);
  if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) {
    return 0.0;
  }

  vec2 texelSize = vec2(1.0) / vec2(textureSize(shadowBuffer, 0).xy);
  float sum = 0.0;
  vec2 offset;
  #pragma unroll_loop_start
  for (int i = 0; i < 16; ++i) {
    #if UNROLLED_LOOP_INDEX < SHADOW_SAMPLE_COUNT
    offset = vogelDisk(
      UNROLLED_LOOP_INDEX,
      SHADOW_SAMPLE_COUNT,
      interleavedGradientNoise(gl_FragCoord.xy) * PI2
    );
    sum += readShadowOpticalDepth(uv + offset * radius * texelSize, distanceToTop, cascadeIndex);
    #endif // UNROLLED_LOOP_INDEX < SHADOW_SAMPLE_COUNT
  }
  #pragma unroll_loop_end
  return sum / float(SHADOW_SAMPLE_COUNT);
}

float sampleShadowOpticalDepth(
  const vec3 worldPosition,
  const vec3 positionECEF,
  const float radius,
  const float jitter
) {
  float distanceToTop = getDistanceToShadowTop(positionECEF);
  if (distanceToTop <= 0.0) {
    return 0.0;
  }
  int cascadeIndex = getFadedCascadeIndex(
    viewMatrix,
    worldPosition,
    shadowIntervals,
    cameraNear,
    shadowFar,
    jitter
  );
  return cascadeIndex >= 0
    ? sampleShadowOpticalDepthPCF(worldPosition, distanceToTop, radius, cascadeIndex)
    : 0.0;
}

float getShadowRadius(const vec3 worldPosition) {
  vec4 clip = shadowMatrices[0] * vec4(worldPosition, 1.0);
  clip /= clip.w;

  // Offset by 1px in each direction in shadow's clip coordinates.
  vec2 shadowSize = vec2(textureSize(shadowBuffer, 0));
  vec3 offset = vec3(2.0 / shadowSize, 0.0);
  vec4 clipX = clip + offset.xzzz;
  vec4 clipY = clip + offset.zyzz;

  // Convert back to world space.
  vec4 worldX = inverseShadowMatrices[0] * clipX;
  vec4 worldY = inverseShadowMatrices[0] * clipY;

  // Project into the main camera's clip space.
  mat4 viewProjectionMatrix = projectionMatrix * viewMatrix;
  vec4 projected = viewProjectionMatrix * vec4(worldPosition, 1.0);
  vec4 projectedX = viewProjectionMatrix * worldX;
  vec4 projectedY = viewProjectionMatrix * worldY;
  projected /= projected.w;
  projectedX /= projectedX.w;
  projectedY /= projectedY.w;

  // Take the mean of pixel sizes.
  vec2 center = (projected.xy * 0.5 + 0.5) * resolution;
  vec2 offsetX = (projectedX.xy * 0.5 + 0.5) * resolution;
  vec2 offsetY = (projectedY.xy * 0.5 + 0.5) * resolution;
  float size = max(length(offsetX - center), length(offsetY - center));

  return remapClamped(size, 10.0, 50.0, 0.0, shadowRadius);
}

#endif // HAS_SHADOW

void mainImage(const vec4 inputColor, const vec2 uv, out vec4 outputColor) {
  float shadowLength = 0.0;
  #ifdef HAS_SHADOW_LENGTH
  shadowLength = texture(shadowLengthBuffer, uv).r;
  #endif // HAS_SHADOW_LENGTH

  #ifdef HAS_OVERLAY
  vec4 overlay = texture(overlayBuffer, uv);
  if (overlay.a == 1.0) {
    outputColor = overlay;
    return;
  }
  #endif // HAS_OVERLAY

  float depth = readDepth(uv);
  if (depth >= 1.0 - 1e-7) {
    #ifdef SKY
    vec3 rayDirection = normalize(vRayDirection);
    outputColor.rgb = getSkyRadiance(
      vCameraPosition - vEllipsoidCenter,
      rayDirection,
      shadowLength,
      sunDirection,
      moonDirection,
      moonAngularRadius,
      lunarRadianceScale
    );
    outputColor.a = 1.0;
    #else // SKY
    outputColor = inputColor;
    #endif // SKY

    #ifdef HAS_OVERLAY
    outputColor.rgb = outputColor.rgb * (1.0 - overlay.a) + overlay.rgb;
    #endif // HAS_OVERLAY
    return;
  }
  depth = reverseLogDepth(depth, cameraNear, cameraFar);

  // Reconstruct position and normal in world space.
  vec3 viewPosition = screenToView(
    uv,
    depth,
    getViewZ(depth),
    projectionMatrix,
    inverseProjectionMatrix
  );
  vec3 viewNormal;
  #ifdef RECONSTRUCT_NORMAL
  vec3 dx = dFdx(viewPosition);
  vec3 dy = dFdy(viewPosition);
  viewNormal = normalize(cross(dx, dy));
  #else // RECONSTRUCT_NORMAL
  viewNormal = readNormal(uv);
  #endif // RECONSTRUCT_NORMAL

  vec3 worldPosition = (inverseViewMatrix * vec4(viewPosition, 1.0)).xyz;
  vec3 worldNormal = normalize(mat3(inverseViewMatrix) * viewNormal);
  mat3 rotation = mat3(inverseEllipsoidMatrix);
  vec3 positionECEF = rotation * worldPosition * METER_TO_LENGTH_UNIT - vGeometryEllipsoidCenter;
  vec3 normalECEF = rotation * worldNormal;

  #ifdef CORRECT_GEOMETRIC_ERROR
  correctGeometricError(positionECEF, normalECEF);
  #endif // CORRECT_GEOMETRIC_ERROR

  #ifdef HAS_SHADOW
  float stbn = getSTBN();
  float radius = getShadowRadius(worldPosition);
  float opticalDepth = sampleShadowOpticalDepth(worldPosition, positionECEF, radius, stbn);
  float sunTransmittance = exp(-opticalDepth);
  #else // HAS_SHADOW
  float sunTransmittance = 1.0;
  #endif // HAS_SHADOW

  vec3 radiance;
  #if defined(SUN_IRRADIANCE) || defined(SKY_IRRADIANCE)
  radiance = getSunSkyIrradiance(positionECEF, normalECEF, inputColor.rgb, sunTransmittance);
  #else // defined(SUN_IRRADIANCE) || defined(SKY_IRRADIANCE)
  radiance = inputColor.rgb;
  #endif // defined(SUN_IRRADIANCE) || defined(SKY_IRRADIANCE)

  #if defined(TRANSMITTANCE) || defined(INSCATTER)
  applyTransmittanceInscatter(positionECEF, shadowLength, radiance);
  #endif // defined(TRANSMITTANCE) || defined(INSCATTER)

  outputColor = vec4(radiance, inputColor.a);

  #ifdef HAS_OVERLAY
  outputColor.rgb = outputColor.rgb * (1.0 - overlay.a) + overlay.rgb;
  #endif // HAS_OVERLAY
}
`,qm=`uniform mat4 inverseViewMatrix;
uniform mat4 inverseProjectionMatrix;
uniform vec3 cameraPosition;
uniform vec3 ellipsoidCenter;
uniform mat4 inverseEllipsoidMatrix;
uniform vec3 altitudeCorrection;
uniform vec3 ellipsoidRadii;
uniform float idealSphereAlpha;

varying vec3 vCameraPosition;
varying vec3 vRayDirection;
varying vec3 vEllipsoidCenter;
varying vec3 vGeometryEllipsoidCenter;
varying vec3 vEllipsoidRadiiSquared;

void getCameraRay(out vec3 origin, out vec3 direction) {
  bool isPerspective = inverseProjectionMatrix[2][3] != 0.0; // 4th entry in the 3rd column

  if (isPerspective) {
    // Calculate the camera ray for a perspective camera.
    vec4 viewPosition = inverseProjectionMatrix * vec4(position, 1.0);
    vec4 worldDirection = inverseViewMatrix * vec4(viewPosition.xyz, 0.0);
    origin = cameraPosition;
    direction = worldDirection.xyz;
  } else {
    // Unprojected points to calculate direction.
    vec4 nearPoint = inverseProjectionMatrix * vec4(position.xy, -1.0, 1.0);
    vec4 farPoint = inverseProjectionMatrix * vec4(position.xy, -0.9, 1.0);
    nearPoint /= nearPoint.w;
    farPoint /= farPoint.w;

    // Calculate world values.
    vec4 worldDirection = inverseViewMatrix * vec4(farPoint.xyz - nearPoint.xyz, 0.0);
    vec4 worldOrigin = inverseViewMatrix * nearPoint;

    // Outputs
    direction = worldDirection.xyz;
    origin = worldOrigin.xyz;
  }
}

void mainSupport() {
  vec3 direction, origin;
  getCameraRay(origin, direction);

  mat3 rotation = mat3(inverseEllipsoidMatrix);
  vCameraPosition = rotation * origin.xyz * METER_TO_LENGTH_UNIT;
  vRayDirection = rotation * direction.xyz;

  vEllipsoidCenter = (ellipsoidCenter + altitudeCorrection) * METER_TO_LENGTH_UNIT;
  #ifdef CORRECT_GEOMETRIC_ERROR
  // Gradually turn off altitude correction for aerial perspective as geometric
  // error correction takes effect.
  // See: https://github.com/takram-design-engineering/three-geospatial/pull/23#issuecomment-2542914656
  vGeometryEllipsoidCenter =
    (ellipsoidCenter + mix(altitudeCorrection, vec3(0.0), idealSphereAlpha)) * METER_TO_LENGTH_UNIT;
  #else
  vGeometryEllipsoidCenter = vEllipsoidCenter;
  #endif // CORRECT_GEOMETRIC_ERROR

  vec3 radii = ellipsoidRadii * METER_TO_LENGTH_UNIT;
  vEllipsoidRadiiSquared = radii * radii;
}
`,Yc=`vec3 getLunarRadiance(const float moonAngularRadius) {
  // Not a physical number but the order of 10^-6 relative to the sun may fit.
  vec3 radiance = u_solar_irradiance * 0.000002 / (PI * moonAngularRadius * moonAngularRadius);
  #ifdef PHOTOMETRIC
  radiance *= SUN_SPECTRAL_RADIANCE_TO_LUMINANCE;
  #endif // PHOTOMETRIC
  return radiance;
}

float intersectSphere(const vec3 ray, const vec3 point, const float radius) {
  vec3 P = -point;
  float PoR = dot(P, ray);
  float D = dot(P, P) - radius * radius;
  return -PoR - sqrt(PoR * PoR - D);
}

float orenNayarDiffuse(const vec3 L, const vec3 V, const vec3 N) {
  float NoL = dot(N, L);
  float NoV = dot(N, V);
  float s = dot(L, V) - NoL * NoV;
  float t = mix(1.0, max(NoL, NoV), step(0.0, s));
  return max(0.0, NoL) * (0.62406015 + 0.41284404 * s / t);
}

vec3 getSkyRadiance(
  const vec3 cameraPosition,
  const vec3 rayDirection,
  float shadowLength,
  const vec3 sunDirection,
  const vec3 moonDirection,
  const float moonAngularRadius,
  const float lunarRadianceScale
) {
  vec3 transmittance;
  vec3 radiance = GetSkyRadiance(
    cameraPosition,
    rayDirection,
    shadowLength,
    sunDirection,
    transmittance
  );

  // Rendering celestial objects without perspective doesn't make sense.
  #ifdef PERSPECTIVE_CAMERA

  #if defined(SUN) || defined(MOON)
  vec3 ddx = dFdx(rayDirection);
  vec3 ddy = dFdy(rayDirection);
  float fragmentAngle = length(ddx + ddy) / length(rayDirection);
  #endif // defined(SUN) || defined(MOON)

  #ifdef SUN
  float viewDotSun = dot(rayDirection, sunDirection);
  if (viewDotSun > cos(u_sun_angular_radius)) {
    float angle = acos(clamp(viewDotSun, -1.0, 1.0));
    float antialias = smoothstep(u_sun_angular_radius, u_sun_angular_radius - fragmentAngle, angle);
    radiance += transmittance * GetSolarRadiance() * antialias;
  }
  #endif // SUN

  #ifdef MOON
  float intersection = intersectSphere(rayDirection, moonDirection, moonAngularRadius);
  if (intersection > 0.0) {
    vec3 normal = normalize(moonDirection - rayDirection * intersection);
    float diffuse = orenNayarDiffuse(-sunDirection, rayDirection, normal);
    float viewDotMoon = dot(rayDirection, moonDirection);
    float angle = acos(clamp(viewDotMoon, -1.0, 1.0));
    float antialias = smoothstep(moonAngularRadius, moonAngularRadius - fragmentAngle, angle);
    radiance +=
      transmittance *
      getLunarRadiance(moonAngularRadius) *
      lunarRadianceScale *
      diffuse *
      antialias;
  }
  #endif // MOON

  #endif // PERSPECTIVE_CAMERA

  return radiance;
}
`;var Xm=Object.defineProperty,Xe=(t,e,r,i)=>{for(var n=void 0,s=t.length-1,a;s>=0;s--)(a=t[s])&&(n=a(e,r,n)||n);return n&&Xm(e,r,n),n};const Qm=new T,Zm=new T,Jm=new vc,ef={blendFunction:Q.NORMAL,octEncodedNormal:!1,reconstructNormal:!1,ellipsoid:ft.WGS84,correctAltitude:!0,correctGeometricError:!0,photometric:!0,sunIrradiance:!1,skyIrradiance:!1,transmittance:!0,inscatter:!0,irradianceScale:1,sky:!1,sun:!0,moon:!0,moonAngularRadius:.0045,lunarRadianceScale:1};class Qe extends Zd{constructor(e=new Hi,r,i=an.DEFAULT){const{blendFunction:n,normalBuffer:s=null,octEncodedNormal:a,reconstructNormal:o,irradianceTexture:c=null,scatteringTexture:l=null,transmittanceTexture:u=null,ellipsoid:d,correctAltitude:g,correctGeometricError:p,photometric:f,sunDirection:S,sunIrradiance:h,skyIrradiance:v,transmittance:b,inscatter:R,irradianceScale:D,sky:C,sun:A,moon:M,moonDirection:U,moonAngularRadius:L,lunarRadianceScale:B}={...ef,...r};super("AerialPerspectiveEffect",Mm(Gt(Km,{core:{depth:Lm,packing:Um,math:Bm,transform:km,raySphereIntersection:jc,cascadedShadowMaps:Nm,interleavedGradientNoise:Fm,vogelDisk:Hm},parameters:lr,functions:Vs,sky:Yc})),{blendFunction:n,vertexShader:Gt(qm,{parameters:lr}),attributes:pc.DEPTH,uniforms:new Map(Object.entries({normalBuffer:new I(s),projectionMatrix:new I(new Z),viewMatrix:new I(new Z),inverseProjectionMatrix:new I(new Z),inverseViewMatrix:new I(new Z),cameraPosition:new I(new T),bottomRadius:new I(i.bottomRadius),ellipsoidRadii:new I(new T),ellipsoidCenter:new I(new T),inverseEllipsoidMatrix:new I(new Z),altitudeCorrection:new I(new T),sunDirection:new I((S==null?void 0:S.clone())??new T),irradianceScale:new I(D),idealSphereAlpha:new I(0),moonDirection:new I((U==null?void 0:U.clone())??new T),moonAngularRadius:new I(L),lunarRadianceScale:new I(B),overlayBuffer:new I(null),shadowBuffer:new I(null),shadowMapSize:new I(new Nt),shadowIntervals:new I([]),shadowMatrices:new I([]),inverseShadowMatrices:new I([]),shadowFar:new I(0),shadowTopHeight:new I(0),shadowRadius:new I(3),stbnTexture:new I(null),frame:new I(0),shadowLengthBuffer:new I(null),u_solar_irradiance:new I(i.solarIrradiance),u_sun_angular_radius:new I(i.sunAngularRadius),u_bottom_radius:new I(i.bottomRadius*nr),u_top_radius:new I(i.topRadius*nr),u_rayleigh_scattering:new I(i.rayleighScattering),u_mie_scattering:new I(i.mieScattering),u_mie_phase_function_g:new I(i.miePhaseFunctionG),u_mu_s_min:new I(i.muSMin),u_irradiance_texture:new I(c),u_scattering_texture:new I(l),u_single_mie_scattering_texture:new I(l),u_transmittance_texture:new I(u)})),defines:new Map([["TRANSMITTANCE_TEXTURE_WIDTH",ln.toFixed(0)],["TRANSMITTANCE_TEXTURE_HEIGHT",un.toFixed(0)],["SCATTERING_TEXTURE_R_SIZE",Ws.toFixed(0)],["SCATTERING_TEXTURE_MU_SIZE",Gs.toFixed(0)],["SCATTERING_TEXTURE_MU_S_SIZE",js.toFixed(0)],["SCATTERING_TEXTURE_NU_SIZE",Ys.toFixed(0)],["IRRADIANCE_TEXTURE_WIDTH",on.toFixed(0)],["IRRADIANCE_TEXTURE_HEIGHT",cn.toFixed(0)],["METER_TO_LENGTH_UNIT",nr.toFixed(7)],["SUN_SPECTRAL_RADIANCE_TO_LUMINANCE",`vec3(${i.sunRadianceToRelativeLuminance.toArray().map(X=>X.toFixed(12)).join(",")})`],["SKY_SPECTRAL_RADIANCE_TO_LUMINANCE",`vec3(${i.skyRadianceToRelativeLuminance.toArray().map(X=>X.toFixed(12)).join(",")})`]])}),this.camera=e,this.atmosphere=i,this.ellipsoidMatrix=new Z,this.overlay=null,this.shadow=null,this.shadowLength=null,this.shadowSampleCount=8,this.octEncodedNormal=a,this.reconstructNormal=o,this.ellipsoid=d,this.correctAltitude=g,this.correctGeometricError=p,this.photometric=f,this.sunIrradiance=h,this.skyIrradiance=v,this.transmittance=b,this.inscatter=R,this.sky=C,this.sun=A,this.moon=M}get mainCamera(){return this.camera}set mainCamera(e){this.camera=e}copyCameraSettings(e){const{projectionMatrix:r,matrixWorldInverse:i,projectionMatrixInverse:n,matrixWorld:s}=e,a=this.uniforms;a.get("projectionMatrix").value.copy(r),a.get("viewMatrix").value.copy(i),a.get("inverseProjectionMatrix").value.copy(n),a.get("inverseViewMatrix").value.copy(s);const o=e.getWorldPosition(a.get("cameraPosition").value),c=a.get("inverseEllipsoidMatrix").value.copy(this.ellipsoidMatrix).invert(),l=Qm.copy(o).applyMatrix4(c).sub(a.get("ellipsoidCenter").value);try{const d=Jm.setFromECEF(l).height,g=Zm.set(0,this.ellipsoid.maximumRadius,-d).applyMatrix4(r);a.get("idealSphereAlpha").value=um(lm(g.y,41.5,13.8,0,1))}catch{return}const u=a.get("altitudeCorrection");this.correctAltitude?dn(l,this.atmosphere.bottomRadius,this.ellipsoid,u.value):u.value.setScalar(0)}updateComposition(){const{uniforms:e,defines:r,overlay:i,shadow:n,shadowLength:s}=this,a=r.has("HAS_OVERLAY"),o=i!=null;o!==a&&(o?r.set("HAS_OVERLAY","1"):(r.delete("HAS_OVERLAY"),e.get("overlayBuffer").value=null),this.setChanged()),o&&(e.get("overlayBuffer").value=i.map);const c=r.has("HAS_SHADOW"),l=n!=null;if(l!==c&&(l?r.set("HAS_SHADOW","1"):(r.delete("HAS_SHADOW"),e.get("shadowBuffer").value=null),this.setChanged()),l){const g=r.get("SHADOW_CASCADE_COUNT"),p=`${n.cascadeCount}`;g!==p&&(r.set("SHADOW_CASCADE_COUNT",n.cascadeCount.toFixed(0)),this.setChanged()),e.get("shadowBuffer").value=n.map,e.get("shadowMapSize").value=n.mapSize,e.get("shadowIntervals").value=n.intervals,e.get("shadowMatrices").value=n.matrices,e.get("inverseShadowMatrices").value=n.inverseMatrices,e.get("shadowFar").value=n.far,e.get("shadowTopHeight").value=n.topHeight}const u=r.has("HAS_SHADOW_LENGTH"),d=s!=null;d!==u&&(d?r.set("HAS_SHADOW_LENGTH","1"):(r.delete("HAS_SHADOW_LENGTH"),e.get("shadowLengthBuffer").value=null),this.setChanged()),d&&(e.get("shadowLengthBuffer").value=s.map)}update(e,r,i){this.copyCameraSettings(this.camera),this.updateComposition(),++this.uniforms.get("frame").value}get normalBuffer(){return this.uniforms.get("normalBuffer").value}set normalBuffer(e){this.uniforms.get("normalBuffer").value=e}get irradianceTexture(){return this.uniforms.get("u_irradiance_texture").value}set irradianceTexture(e){this.uniforms.get("u_irradiance_texture").value=e}get scatteringTexture(){return this.uniforms.get("u_scattering_texture").value}set scatteringTexture(e){this.uniforms.get("u_scattering_texture").value=e,this.uniforms.get("u_single_mie_scattering_texture").value=e}get transmittanceTexture(){return this.uniforms.get("u_transmittance_texture").value}set transmittanceTexture(e){this.uniforms.get("u_transmittance_texture").value=e}get useHalfFloat(){return!0}set useHalfFloat(e){}get ellipsoid(){return this._ellipsoid}set ellipsoid(e){this._ellipsoid=e,this.uniforms.get("ellipsoidRadii").value.copy(e.radii)}get ellipsoidCenter(){return this.uniforms.get("ellipsoidCenter").value}get sunDirection(){return this.uniforms.get("sunDirection").value}get irradianceScale(){return this.uniforms.get("irradianceScale").value}set irradianceScale(e){this.uniforms.get("irradianceScale").value=e}get moonDirection(){return this.uniforms.get("moonDirection").value}get moonAngularRadius(){return this.uniforms.get("moonAngularRadius").value}set moonAngularRadius(e){this.uniforms.get("moonAngularRadius").value=e}get lunarRadianceScale(){return this.uniforms.get("lunarRadianceScale").value}set lunarRadianceScale(e){this.uniforms.get("lunarRadianceScale").value=e}get stbnTexture(){return this.uniforms.get("stbnTexture").value}set stbnTexture(e){this.uniforms.get("stbnTexture").value=e}get shadowRadius(){return this.uniforms.get("shadowRadius").value}set shadowRadius(e){this.uniforms.get("shadowRadius").value=e}}Xe([Fe("OCT_ENCODED_NORMAL")],Qe.prototype,"octEncodedNormal");Xe([Fe("RECONSTRUCT_NORMAL")],Qe.prototype,"reconstructNormal");Xe([Fe("CORRECT_GEOMETRIC_ERROR")],Qe.prototype,"correctGeometricError");Xe([Fe("PHOTOMETRIC")],Qe.prototype,"photometric");Xe([Fe("SUN_IRRADIANCE")],Qe.prototype,"sunIrradiance");Xe([Fe("SKY_IRRADIANCE")],Qe.prototype,"skyIrradiance");Xe([Fe("TRANSMITTANCE")],Qe.prototype,"transmittance");Xe([Fe("INSCATTER")],Qe.prototype,"inscatter");Xe([Fe("SKY")],Qe.prototype,"sky");Xe([Fe("SUN")],Qe.prototype,"sun");Xe([Fe("MOON")],Qe.prototype,"moon");Xe([dm("SHADOW_SAMPLE_COUNT",{min:1,max:16})],Qe.prototype,"shadowSampleCount");var tf=Object.defineProperty,rf=(t,e,r,i)=>{for(var n=void 0,s=t.length-1,a;s>=0;s--)(a=t[s])&&(n=a(e,r,n)||n);return n&&tf(e,r,n),n};const nf=new T;function sf(t,e){let r="",i="";for(let n=1;n<e;++n)r+=`layout(location = ${n}) out float renderTarget${n};
`,i+=`renderTarget${n} = 0.0;
`;return t.replace("#include <mrt_layout>",r).replace("#include <mrt_output>",i)}const $s={ellipsoid:ft.WGS84,correctAltitude:!0,photometric:!0,renderTargetCount:1};class Ks extends Ul{constructor(e,r=an.DEFAULT){const{irradianceTexture:i=null,scatteringTexture:n=null,transmittanceTexture:s=null,useHalfFloat:a,ellipsoid:o,correctAltitude:c,photometric:l,sunDirection:u,sunAngularRadius:d,renderTargetCount:g,...p}={...$s,...e};super({toneMapped:!1,depthWrite:!1,depthTest:!1,...p,uniforms:{cameraPosition:new I(new T),ellipsoidCenter:new I(new T),inverseEllipsoidMatrix:new I(new Z),altitudeCorrection:new I(new T),sunDirection:new I((u==null?void 0:u.clone())??new T),u_solar_irradiance:new I(r.solarIrradiance),u_sun_angular_radius:new I(d??r.sunAngularRadius),u_bottom_radius:new I(r.bottomRadius*nr),u_top_radius:new I(r.topRadius*nr),u_rayleigh_scattering:new I(r.rayleighScattering),u_mie_scattering:new I(r.mieScattering),u_mie_phase_function_g:new I(r.miePhaseFunctionG),u_mu_s_min:new I(r.muSMin),u_irradiance_texture:new I(i),u_scattering_texture:new I(n),u_single_mie_scattering_texture:new I(n),u_transmittance_texture:new I(s),...p.uniforms},defines:{PI:`${Math.PI}`,TRANSMITTANCE_TEXTURE_WIDTH:ln.toFixed(0),TRANSMITTANCE_TEXTURE_HEIGHT:un.toFixed(0),SCATTERING_TEXTURE_R_SIZE:Ws.toFixed(0),SCATTERING_TEXTURE_MU_SIZE:Gs.toFixed(0),SCATTERING_TEXTURE_MU_S_SIZE:js.toFixed(0),SCATTERING_TEXTURE_NU_SIZE:Ys.toFixed(0),IRRADIANCE_TEXTURE_WIDTH:on.toFixed(0),IRRADIANCE_TEXTURE_HEIGHT:cn.toFixed(0),METER_TO_LENGTH_UNIT:nr.toFixed(7),SUN_SPECTRAL_RADIANCE_TO_LUMINANCE:`vec3(${r.sunRadianceToRelativeLuminance.toArray().map(f=>f.toFixed(12)).join(",")})`,SKY_SPECTRAL_RADIANCE_TO_LUMINANCE:`vec3(${r.skyRadianceToRelativeLuminance.toArray().map(f=>f.toFixed(12)).join(",")})`,...p.defines}}),this.atmosphere=r,this.ellipsoidMatrix=new Z,this.atmosphere=r,this.ellipsoid=o,this.correctAltitude=c,this.photometric=l,this.renderTargetCount=g}copyCameraSettings(e){const r=this.uniforms,i=e.getWorldPosition(r.cameraPosition.value),n=r.inverseEllipsoidMatrix.value.copy(this.ellipsoidMatrix).invert(),s=nf.copy(i).applyMatrix4(n).sub(r.ellipsoidCenter.value),a=r.altitudeCorrection.value;this.correctAltitude?dn(s,this.atmosphere.bottomRadius,this.ellipsoid,a):a.setScalar(0)}onBeforeCompile(e,r){e.fragmentShader=sf(e.fragmentShader,this.renderTargetCount)}onBeforeRender(e,r,i,n,s,a){this.copyCameraSettings(i)}get irradianceTexture(){return this.uniforms.u_irradiance_texture.value}set irradianceTexture(e){this.uniforms.u_irradiance_texture.value=e}get scatteringTexture(){return this.uniforms.u_scattering_texture.value}set scatteringTexture(e){this.uniforms.u_scattering_texture.value=e,this.uniforms.u_single_mie_scattering_texture.value=e}get transmittanceTexture(){return this.uniforms.u_transmittance_texture.value}set transmittanceTexture(e){this.uniforms.u_transmittance_texture.value=e}get useHalfFloat(){return!0}set useHalfFloat(e){}get ellipsoidCenter(){return this.uniforms.ellipsoidCenter.value}get sunDirection(){return this.uniforms.sunDirection.value}get sunAngularRadius(){return this.uniforms.u_sun_angular_radius.value}set sunAngularRadius(e){this.uniforms.u_sun_angular_radius.value=e}get renderTargetCount(){return this._renderTargetCount}set renderTargetCount(e){e!==this.renderTargetCount&&(this._renderTargetCount=e,this.needsUpdate=!0)}}rf([Fe("PHOTOMETRIC")],Ks.prototype,"photometric");var ut;(function(t){t.Sun="Sun",t.Moon="Moon",t.Mercury="Mercury",t.Venus="Venus",t.Earth="Earth",t.Mars="Mars",t.Jupiter="Jupiter",t.Saturn="Saturn",t.Uranus="Uranus",t.Neptune="Neptune",t.Pluto="Pluto",t.SSB="SSB",t.EMB="EMB",t.Star1="Star1",t.Star2="Star2",t.Star3="Star3",t.Star4="Star4",t.Star5="Star5",t.Star6="Star6",t.Star7="Star7",t.Star8="Star8"})(ut||(ut={}));ut.Star1,ut.Star2,ut.Star3,ut.Star4,ut.Star5,ut.Star6,ut.Star7,ut.Star8;var to;(function(t){t[t.From2000=0]="From2000",t[t.Into2000=1]="Into2000"})(to||(to={}));var ro;(function(t){t[t.Pericenter=0]="Pericenter",t[t.Apocenter=1]="Apocenter"})(ro||(ro={}));var io;(function(t){t.Penumbral="penumbral",t.Partial="partial",t.Annular="annular",t.Total="total"})(io||(io={}));var no;(function(t){t[t.Invalid=0]="Invalid",t[t.Ascending=1]="Ascending",t[t.Descending=-1]="Descending"})(no||(no={}));function $c(t){return Math.sqrt(Math.max(t,0))}function af(t){return Math.max(t,0)}function of(t,e,r){const{bottomRadius:i}=t;return r<0&&e**2*(r**2-1)+i**2>=0}function cf(t,e,r){const{topRadius:i}=t,n=e**2*(r**2-1)+i**2;return af(-e*r+$c(n))}function Ui(t,e){return .5/e+t*(1-1/e)}var lf="Invariant failed";function uf(t,e){if(!t)throw new Error(lf)}const df=new T,so=new T,hf=new T;function wi(t,e,r){const i=e*4;return r.set(t[i],t[i+1],t[i+2])}function Kc(t,e,r){const{width:i,height:n}=t.image;uf(Zh(t.image.data));let s=t.image.data;t.type===qo&&s instanceof Uint16Array&&(s=new ce(s.buffer));const a=Bi(e.x,0,1)*(i-1),o=Bi(e.y,0,1)*(n-1),c=Math.floor(a),l=Math.floor(o),u=a-c,d=o-l,g=u,p=d,f=c%i,S=(f+1)%i,h=l%n,v=(h+1)%n,b=wi(s,h*i+f,df),R=wi(s,h*i+S,so),D=b.lerp(R,g),C=wi(s,v*i+f,so),A=wi(s,v*i+S,hf),M=C.lerp(A,g);return r.copy(D.lerp(M,p))}function mf(t,e,r,i){const{topRadius:n,bottomRadius:s}=t,a=Math.sqrt(n**2-s**2),o=$c(e**2-s**2),c=cf(t,e,r),l=n-e,u=o+a,d=(c-l)/(u-l),g=o/a;return i.set(Ui(d,ln),Ui(g,un))}const ff=new T,Wn=new T,pf=new Nt;function ao(t,e,r,i=new Ge,{ellipsoid:n=ft.WGS84,correctAltitude:s=!0,photometric:a=!0}={},o=an.DEFAULT){const c=ff.copy(e);if(s){const S=n.projectOnSurface(e,Wn);S!=null&&c.sub(n.getOsculatingSphereCenter(S,o.bottomRadius,Wn))}const l=Wn;let u=c.length(),d=c.dot(r);const{topRadius:g}=o,p=-d-Math.sqrt(d**2-u**2+g**2);if(p>0&&(u=g,d+=p),u>g)l.set(1,1,1);else{const S=d/u;if(of(o,u,S))l.setScalar(0);else{const h=mf(o,u,S,pf);Kc(t,h,l)}}const f=l.multiply(o.solarIrradiance);return a&&f.multiply(o.sunRadianceToRelativeLuminance),i.setFromVector3(f)}var Zr=Uint8Array,qc=Uint16Array,gf=Uint32Array,vf=new Zr([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),yf=new Zr([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Xc=function(t,e){for(var r=new qc(31),i=0;i<31;++i)r[i]=e+=1<<t[i-1];for(var n=new gf(r[30]),i=1;i<30;++i)for(var s=r[i];s<r[i+1];++s)n[s]=s-r[i]<<5|i;return[r,n]},Qc=Xc(vf,2),Sf=Qc[0],wf=Qc[1];Sf[28]=258,wf[258]=28;Xc(yf,0);var _f=new qc(32768);for(var he=0;he<32768;++he){var Dt=(he&43690)>>>1|(he&21845)<<1;Dt=(Dt&52428)>>>2|(Dt&13107)<<2,Dt=(Dt&61680)>>>4|(Dt&3855)<<4,_f[he]=((Dt&65280)>>>8|(Dt&255)<<8)>>>1}var hn=new Zr(288);for(var he=0;he<144;++he)hn[he]=8;for(var he=144;he<256;++he)hn[he]=9;for(var he=256;he<280;++he)hn[he]=7;for(var he=280;he<288;++he)hn[he]=8;var xf=new Zr(32);for(var he=0;he<32;++he)xf[he]=5;var Tf=new Zr(0),bf=typeof TextDecoder<"u"&&new TextDecoder,Mf=0;try{bf.decode(Tf,{stream:!0}),Mf=1}catch{}function Ef({topRadius:t,bottomRadius:e},r,i,n){const s=(r-e)/(t-e),a=i*.5+.5;return n.set(Ui(a,on),Ui(s,cn))}const Rf=1/Math.sqrt(Math.PI),Gn=Math.sqrt(3)/(2*Math.sqrt(Math.PI)),Af=new T,jn=new T,Cf=new Nt,If=new Z,Df={ellipsoid:ft.WGS84,correctAltitude:!0,photometric:!0};class Pf extends Xo{constructor(e,r=an.DEFAULT){super(),this.atmosphere=r,this.ellipsoidCenter=new T,this.ellipsoidMatrix=new Z;const{irradianceTexture:i=null,ellipsoid:n,correctAltitude:s,photometric:a,sunDirection:o}={...Df,...e};this.irradianceTexture=i,this.ellipsoid=n,this.correctAltitude=s,this.photometric=a,this.sunDirection=(o==null?void 0:o.clone())??new T}update(){if(this.irradianceTexture==null)return;const e=If.copy(this.ellipsoidMatrix).invert(),r=this.getWorldPosition(Af).applyMatrix4(e).sub(this.ellipsoidCenter);if(this.correctAltitude){const l=this.ellipsoid.projectOnSurface(r,jn);l!=null&&r.sub(dn(l,this.atmosphere.bottomRadius,this.ellipsoid,jn))}const i=r.length(),n=r.dot(this.sunDirection)/i,s=Ef(this.atmosphere,i,n,Cf),a=Kc(this.irradianceTexture,s,jn);this.photometric&&a.multiply(this.atmosphere.skyRadianceToRelativeLuminance);const o=this.ellipsoid.getSurfaceNormal(r).applyMatrix4(this.ellipsoidMatrix),c=this.sh.coefficients;c[0].copy(a).multiplyScalar(Rf),c[1].copy(a).multiplyScalar(Gn*o.y),c[2].copy(a).multiplyScalar(Gn*o.z),c[3].copy(a).multiplyScalar(Gn*o.x)}}const Of=`precision highp float;
precision highp sampler3D;

#define RECIPROCAL_PI (0.3183098861837907)

#include "core/raySphereIntersection"
#include "parameters"
#include "functions"
#include "sky"

uniform vec3 sunDirection;
uniform vec3 moonDirection;
uniform float moonAngularRadius;
uniform float lunarRadianceScale;
uniform vec3 groundAlbedo;

#ifdef HAS_SHADOW_LENGTH
uniform sampler2D shadowLengthBuffer;
#endif // HAS_SHADOW_LENGTH

in vec2 vUv;
in vec3 vCameraPosition;
in vec3 vRayDirection;
in vec3 vEllipsoidCenter;

layout(location = 0) out vec4 outputColor;

#include <mrt_layout>

bool rayIntersectsGround(const vec3 cameraPosition, const vec3 rayDirection) {
  float r = length(cameraPosition);
  float mu = dot(cameraPosition, rayDirection) / r;
  return mu < 0.0 && r * r * (mu * mu - 1.0) + u_bottom_radius * u_bottom_radius >= 0.0;
}

void main() {
  float shadowLength = 0.0;
  #ifdef HAS_SHADOW_LENGTH
  shadowLength = texture(shadowLengthBuffer, vUv).r;
  #endif // HAS_SHADOW_LENGTH

  vec3 cameraPosition = vCameraPosition - vEllipsoidCenter;
  vec3 rayDirection = normalize(vRayDirection);

  #ifdef GROUND_ALBEDO

  bool intersectsGround = rayIntersectsGround(cameraPosition, rayDirection);
  if (intersectsGround) {
    float distanceToGround = raySphereFirstIntersection(
      cameraPosition,
      rayDirection,
      u_bottom_radius
    );
    vec3 groundPosition = rayDirection * distanceToGround + cameraPosition;
    vec3 surfaceNormal = normalize(groundPosition);
    vec3 skyIrradiance;
    vec3 sunIrradiance = GetSunAndSkyIrradiance(
      cameraPosition,
      surfaceNormal,
      sunDirection,
      skyIrradiance
    );
    vec3 transmittance;
    vec3 inscatter = GetSkyRadianceToPoint(
      cameraPosition,
      u_bottom_radius * surfaceNormal,
      shadowLength,
      sunDirection,
      transmittance
    );
    vec3 radiance = groundAlbedo * RECIPROCAL_PI * (sunIrradiance + skyIrradiance);
    outputColor.rgb = radiance * transmittance + inscatter;
  } else {
    outputColor.rgb = getSkyRadiance(
      cameraPosition,
      rayDirection,
      shadowLength,
      sunDirection,
      moonDirection,
      moonAngularRadius,
      lunarRadianceScale
    );
  }

  #else // GROUND_ALBEDO

  outputColor.rgb = getSkyRadiance(
    cameraPosition,
    rayDirection,
    shadowLength,
    sunDirection,
    moonDirection,
    moonAngularRadius,
    lunarRadianceScale
  );

  #endif // GROUND_ALBEDO

  outputColor.a = 1.0;

  #include <mrt_output>
}
`,Nf=`precision highp float;
precision highp sampler3D;

#include "parameters"

uniform mat4 inverseProjectionMatrix;
uniform mat4 inverseViewMatrix;
uniform vec3 cameraPosition;
uniform vec3 ellipsoidCenter;
uniform mat4 inverseEllipsoidMatrix;
uniform vec3 altitudeCorrection;

layout(location = 0) in vec3 position;

out vec2 vUv;
out vec3 vCameraPosition;
out vec3 vRayDirection;
out vec3 vEllipsoidCenter;

void getCameraRay(out vec3 origin, out vec3 direction) {
  bool isPerspective = inverseProjectionMatrix[2][3] != 0.0; // 4th entry in the 3rd column

  if (isPerspective) {
    // Calculate the camera ray for a perspective camera.
    vec4 viewPosition = inverseProjectionMatrix * vec4(position, 1.0);
    vec4 worldDirection = inverseViewMatrix * vec4(viewPosition.xyz, 0.0);
    origin = cameraPosition;
    direction = worldDirection.xyz;
  } else {
    // Unprojected points to calculate direction.
    vec4 nearPoint = inverseProjectionMatrix * vec4(position.xy, -1.0, 1.0);
    vec4 farPoint = inverseProjectionMatrix * vec4(position.xy, -0.9, 1.0);
    nearPoint /= nearPoint.w;
    farPoint /= farPoint.w;

    // Calculate world values
    vec4 worldDirection = inverseViewMatrix * vec4(farPoint.xyz - nearPoint.xyz, 0.0);
    vec4 worldOrigin = inverseViewMatrix * nearPoint;

    // Outputs
    direction = worldDirection.xyz;
    origin = worldOrigin.xyz;
  }
}

void main() {
  vUv = position.xy * 0.5 + 0.5;

  vec3 direction, origin;
  getCameraRay(origin, direction);

  mat3 rotation = mat3(inverseEllipsoidMatrix);
  vCameraPosition = rotation * origin.xyz * METER_TO_LENGTH_UNIT;
  vRayDirection = rotation * direction.xyz;
  vEllipsoidCenter = (ellipsoidCenter + altitudeCorrection) * METER_TO_LENGTH_UNIT;

  gl_Position = vec4(position.xy, 1.0, 1.0);
}
`;var Lf=Object.defineProperty,Zc=(t,e,r,i)=>{for(var n=void 0,s=t.length-1,a;s>=0;s--)(a=t[s])&&(n=a(e,r,n)||n);return n&&Lf(e,r,n),n};const Ff={...$s,sun:!0,moon:!0,moonAngularRadius:.0045,lunarRadianceScale:1};class qs extends Ks{constructor(e){const{sun:r,moon:i,moonDirection:n,moonAngularRadius:s,lunarRadianceScale:a,groundAlbedo:o,...c}={...Ff,...e};super({name:"SkyMaterial",glslVersion:kr,vertexShader:Gt(Nf,{parameters:lr}),fragmentShader:Gt(Of,{core:{raySphereIntersection:jc},parameters:lr,functions:Vs,sky:Yc}),...c,uniforms:{inverseProjectionMatrix:new I(new Z),inverseViewMatrix:new I(new Z),moonDirection:new I((n==null?void 0:n.clone())??new T),moonAngularRadius:new I(s),lunarRadianceScale:new I(a),groundAlbedo:new I((o==null?void 0:o.clone())??new Ge(0)),shadowLengthBuffer:new I(null),...c.uniforms},defines:{PERSPECTIVE_CAMERA:"1"},depthTest:!0}),this.shadowLength=null,this.sun=r,this.moon=i}onBeforeRender(e,r,i,n,s,a){super.onBeforeRender(e,r,i,n,s,a);const{uniforms:o,defines:c}=this;o.inverseProjectionMatrix.value.copy(i.projectionMatrixInverse),o.inverseViewMatrix.value.copy(i.matrixWorld);const l=c.PERSPECTIVE_CAMERA!=null,u=i.isPerspectiveCamera===!0;u!==l&&(u?c.PERSPECTIVE_CAMERA="1":delete c.PERSPECTIVE_CAMERA,this.needsUpdate=!0);const d=this.groundAlbedo,g=c.GROUND_ALBEDO!=null,p=d.r!==0||d.g!==0||d.b!==0;p!==g&&(p?this.defines.GROUND_ALBEDO="1":delete this.defines.GROUND_ALBEDO,this.needsUpdate=!0);const f=this.shadowLength,S=c.HAS_SHADOW_LENGTH!=null,h=f!=null;h!==S&&(h?c.HAS_SHADOW_LENGTH="1":(delete c.HAS_SHADOW_LENGTH,o.shadowLengthBuffer.value=null),this.needsUpdate=!0),h&&(o.shadowLengthBuffer.value=f.map)}get moonDirection(){return this.uniforms.moonDirection.value}get moonAngularRadius(){return this.uniforms.moonAngularRadius.value}set moonAngularRadius(e){this.uniforms.moonAngularRadius.value=e}get lunarRadianceScale(){return this.uniforms.lunarRadianceScale.value}set lunarRadianceScale(e){this.uniforms.lunarRadianceScale.value=e}get groundAlbedo(){return this.uniforms.groundAlbedo.value}}Zc([Fe("SUN")],qs.prototype,"sun");Zc([Fe("MOON")],qs.prototype,"moon");const Bf=`precision highp float;
precision highp sampler3D;

#include "parameters"
#include "functions"

uniform vec3 sunDirection;

in vec3 vCameraPosition;
in vec3 vRayDirection;
in vec3 vEllipsoidCenter;

layout(location = 0) out vec4 outputColor;

#include <mrt_layout>

in vec3 vColor;

void main() {
  #if !defined(PERSPECTIVE_CAMERA)
  outputColor = vec4(0.0);
  discard; // Rendering celestial objects without perspective doesn't make sense.
  #endif // !defined(PERSPECTIVE_CAMERA)

  #ifdef BACKGROUND
  vec3 cameraPosition = vCameraPosition - vEllipsoidCenter;
  vec3 rayDirection = normalize(vRayDirection);
  float r = length(cameraPosition);
  float mu = dot(cameraPosition, rayDirection) / r;

  if (RayIntersectsGround(r, mu)) {
    discard;
  }

  vec3 transmittance;
  vec3 radiance = GetSkyRadiance(
    vCameraPosition - vEllipsoidCenter,
    normalize(vRayDirection),
    0.0,
    sunDirection,
    transmittance
  );
  radiance += transmittance * vColor;
  outputColor = vec4(radiance, 1.0);
  #else // BACKGROUND
  outputColor = vec4(vColor, 1.0);
  #endif // BACKGROUND

  #include <mrt_output>
}
`,Uf=`precision highp float;
precision highp sampler3D;

#include "parameters"

#define saturate(x) clamp(x, 0.0, 1.0)

uniform mat4 projectionMatrix;
uniform mat4 modelViewMatrix;
uniform mat4 viewMatrix;
uniform mat4 matrixWorld;
uniform vec3 cameraPosition;
uniform float cameraFar;
uniform vec3 ellipsoidCenter;
uniform mat4 inverseEllipsoidMatrix;
uniform vec3 altitudeCorrection;
uniform float pointSize;
uniform vec2 magnitudeRange;
uniform float radianceScale;

layout(location = 0) in vec3 position;
layout(location = 1) in float magnitude;
layout(location = 2) in vec3 color;

out vec3 vCameraPosition;
out vec3 vRayDirection;
out vec3 vEllipsoidCenter;
out vec3 vColor;

void main() {
  // Magnitude is stored between 0 to 1 within the given range.
  float m = mix(magnitudeRange.x, magnitudeRange.y, magnitude);
  vec3 v = pow(vec3(10.0), -vec3(magnitudeRange, m) / 2.5);
  vColor = vec3(radianceScale * color);
  vColor *= saturate((v.z - v.y) / (v.x - v.y));

  #ifdef BACKGROUND
  vec3 worldDirection = normalize(matrixWorld * vec4(position, 1.0)).xyz;
  mat3 rotation = mat3(inverseEllipsoidMatrix);
  vCameraPosition = rotation * cameraPosition * METER_TO_LENGTH_UNIT;
  vRayDirection = rotation * worldDirection;
  vEllipsoidCenter = (ellipsoidCenter + altitudeCorrection) * METER_TO_LENGTH_UNIT;
  gl_Position =
    projectionMatrix * viewMatrix * vec4(cameraPosition + worldDirection * cameraFar, 1.0);
  #else // BACKGROUND
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  #endif // BACKGROUND

  gl_PointSize = pointSize;
}
`;var kf=Object.defineProperty,Hf=(t,e,r,i)=>{for(var n=void 0,s=t.length-1,a;s>=0;s--)(a=t[s])&&(n=a(e,r,n)||n);return n&&kf(e,r,n),n};const zf={...$s,pointSize:1,radianceScale:1,background:!0};class Vf extends Ks{constructor(e){const{pointSize:r,radianceScale:i,background:n,...s}={...zf,...e};super({name:"StarsMaterial",glslVersion:kr,vertexShader:Gt(Uf,{parameters:lr}),fragmentShader:Gt(Bf,{parameters:lr,functions:Vs}),...s,uniforms:{projectionMatrix:new I(new Z),modelViewMatrix:new I(new Z),viewMatrix:new I(new Z),matrixWorld:new I(new Z),cameraFar:new I(0),pointSize:new I(0),magnitudeRange:new I(new Nt(-2,8)),radianceScale:new I(i),...s.uniforms},defines:{PERSPECTIVE_CAMERA:"1"}}),this.pointSize=r,this.background=n}onBeforeRender(e,r,i,n,s,a){super.onBeforeRender(e,r,i,n,s,a);const o=this.uniforms;o.projectionMatrix.value.copy(i.projectionMatrix),o.modelViewMatrix.value.copy(i.modelViewMatrix),o.viewMatrix.value.copy(i.matrixWorldInverse),o.matrixWorld.value.copy(s.matrixWorld),o.cameraFar.value=i.far,o.pointSize.value=this.pointSize*e.getPixelRatio();const c=i.isPerspectiveCamera===!0;this.defines.PERSPECTIVE_CAMERA!=null!==c&&(c?this.defines.PERSPECTIVE_CAMERA="1":delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}get magnitudeRange(){return this.uniforms.magnitudeRange.value}get radianceScale(){return this.uniforms.radianceScale.value}set radianceScale(e){this.uniforms.radianceScale.value=e}}Hf([Fe("BACKGROUND")],Vf.prototype,"background");const oo=new Ge("#fff2d8"),co=1e-8,Yn=3e4,lo=-1e3,uo=1e7,Wf=5e6,Gf=8e6,Wr=t=>Number.isFinite(t.x)&&Number.isFinite(t.y)&&Number.isFinite(t.z),ho=t=>!Number.isFinite(t.longitude)||Math.abs(t.longitude)>180?"longitude must be a finite value in degrees within [-180, 180]":!Number.isFinite(t.latitude)||Math.abs(t.latitude)>90?"latitude must be a finite value in degrees within [-90, 90]":!Number.isFinite(t.altitudeMeters)||t.altitudeMeters<lo||t.altitudeMeters>uo?`altitudeMeters must be within [${lo}, ${uo}]`:null,jf=(t,e,r)=>{if(!Number.isFinite(t.getTime()))return"instant must be a valid Date";const i=ho(e);if(i)return`observer ${i}`;if(!r)return null;const n=ho(r.observer);return n?`sky reference observer ${n}`:Wr(r.scenePosition)?null:"sky reference scenePosition must contain finite metre coordinates"},Jc=t=>{if(!Wr(t.directionToSunECEF))return"sun direction contains a non-finite component";if(Math.abs(t.directionToSunECEF.length()-1)>1e-6)return"sun direction is not normalized";if(!t.ecefToSceneMatrix.elements.every(Number.isFinite))return"ECEF-to-scene matrix contains a non-finite component";const e=t.ecefToSceneMatrix.elements,r=[new T(e[0],e[4],e[8]),new T(e[1],e[5],e[9]),new T(e[2],e[6],e[10])];if(r.some(s=>Math.abs(s.length()-1)>1e-6)||Math.abs(r[0].dot(r[1]))>1e-6||Math.abs(r[0].dot(r[2]))>1e-6||Math.abs(r[1].dot(r[2]))>1e-6||Math.abs(e[3])>1e-12||Math.abs(e[7])>1e-12||Math.abs(e[11])>1e-12||Math.abs(e[12])>1e-12||Math.abs(e[13])>1e-12||Math.abs(e[14])>1e-12||Math.abs(e[15]-1)>1e-12)return"ECEF-to-scene matrix is not an affine orthonormal rotation";const i=t.ecefToSceneMatrix.determinant();if(!Number.isFinite(i)||Math.abs(i-1)>1e-6)return"ECEF-to-scene matrix is not a proper orthonormal rotation";if(!Wr(t.ellipsoidCenterECEF))return"ellipsoid center contains a non-finite component";const n=t.ellipsoidCenterECEF.length();return n<Wf||n>Gf?"ellipsoid center is outside the plausible WGS84 distance range":null},Yf=t=>{var r;const e=Jc(t.skyFrame);return e||(Wr(t.directionToSun)?Math.abs(t.directionToSun.length()-1)>1e-6?"scene sun direction is not normalized":![t.color.r,t.color.g,t.color.b].every(Number.isFinite)||![t.radiance.r,t.radiance.g,t.radiance.b].every(Number.isFinite)||!Number.isFinite(t.relativeIntensity)||t.relativeIntensity<0||t.relativeIntensity>1||!Number.isFinite(t.azimuthDegrees)||!Number.isFinite(t.elevationDegrees)?"sunlight color, intensity, or angles contain invalid values":(r=t.skyIrradianceCoefficients)!=null&&r.some(i=>!Wr(i))?"sky irradiance contains a non-finite coefficient":null:"scene sun direction contains a non-finite component")},$n={useTransmittanceLut:!0,useIrradianceLut:!0},$f=({east:t,north:e,up:r})=>new Z().set(t.x,t.y,t.z,0,r.x,r.y,r.z,0,-e.x,-e.y,-e.z,0,0,0,0,1);function Xs({longitude:t,latitude:e,altitudeMeters:r}){const i=new vc(_s(t),_s(e),r).toECEF(),n=new T,s=new T,a=new T;return ft.WGS84.getEastNorthUpVectors(i,n,s,a),{observerECEF:i,east:n,north:s,up:a}}const el=(t,{east:e,north:r,up:i},n)=>n.set(t.dot(e),t.dot(i),-t.dot(r)).normalize(),tl=(t,e,r)=>{const i=r?Xs(r.observer):e,n=$f(i);r!=null&&r.sceneFromLocal&&n.premultiply(r.sceneFromLocal);const s=n.clone().invert(),a=((r==null?void 0:r.scenePosition)??new T).clone().applyMatrix4(s).sub(i.observerECEF);return{directionToSunECEF:t.clone(),ecefToSceneMatrix:n,ellipsoidCenterECEF:a}},Kf=(t,e,{observerECEF:r,east:i,north:n,up:s})=>t!=null&&t.irradianceTexture?(t.ellipsoidMatrix.set(i.x,i.y,i.z,0,s.x,s.y,s.z,0,-n.x,-n.y,-n.z,0,0,0,0,1),t.ellipsoidCenter.copy(r).negate(),t.sunDirection.copy(e),t.position.set(0,0,0),t.updateMatrixWorld(!0),t.update(),t.sh.coefficients.map(a=>a.clone())):null,rl=t=>{const e=Ea(Math.asin(We(t.y,-1,1)));return{azimuthDegrees:(Ea(Math.atan2(t.x,-t.z))+360)%360,elevationDegrees:e}},qf=(t,e)=>{const r=Xs(e.observer),i=el(t.skyFrame.directionToSunECEF,r,new T);return e.sceneFromLocal&&i.transformDirection(e.sceneFromLocal),{...t,directionToSun:i,...rl(i),skyFrame:tl(t.skyFrame.directionToSunECEF,r,e)}},Xf=(t,e,r,i=null,n)=>{const s=Xs(e),{observerECEF:a,up:o}=s,c=new T(...kl(t)),l=el(c,s,new T);n!=null&&n.sceneFromLocal&&l.transformDirection(n.sceneFromLocal);const u=tl(c,s,n),d=Kf(i,c,s),{azimuthDegrees:g,elevationDegrees:p}=rl(l);if(!r){const R=Math.sqrt(We(l.y,0,1));return{directionToSun:l,color:oo.clone(),relativeIntensity:R,radiance:oo.clone().multiplyScalar(R),atmosphericTransmittanceReady:!1,atmosphericIrradianceReady:d!==null,skyIrradianceCoefficients:d,azimuthDegrees:g,elevationDegrees:p,skyFrame:u}}const f=ao(r,a,c,new Ge,{ellipsoid:ft.WGS84,correctAltitude:!0,photometric:!0}),S=ao(r,a,o,new Ge,{ellipsoid:ft.WGS84,correctAltitude:!0,photometric:!0}),h=Math.max(f.r,f.g,f.b,0),v=Math.max(S.r,S.g,S.b,co),b=h>co?f.clone().multiplyScalar(1/h):new Ge(0,0,0);return{directionToSun:l,color:b,relativeIntensity:We(h/v,0,1),radiance:f,atmosphericTransmittanceReady:!0,atmosphericIrradianceReady:d!==null,skyIrradianceCoefficients:d,azimuthDegrees:g,elevationDegrees:p,skyFrame:u}};class Qf{transmittanceTexture=null;irradianceTexture=null;scatteringTexture=null;skyLightProbe=new Pf({ellipsoid:ft.WGS84,correctAltitude:!0,photometric:!0});transmittanceLoading=!1;irradianceLoading=!1;scatteringLoading=!1;transmittanceRetryAt=0;irradianceRetryAt=0;scatteringRetryAt=0;disposed=!1;get ready(){return this.transmittanceTexture!==null&&this.irradianceTexture!==null}get skyReady(){return this.skyTextures!==null}get skyTextures(){return!this.transmittanceTexture||!this.irradianceTexture||!this.scatteringTexture?null:{transmittanceTexture:this.transmittanceTexture,irradianceTexture:this.irradianceTexture,scatteringTexture:this.scatteringTexture}}get isSkyLoading(){return this.transmittanceLoading||this.irradianceLoading||this.scatteringLoading}isLoadingFor(e=$n){return e.useTransmittanceLut&&this.transmittanceLoading||e.useIrradianceLut&&this.irradianceLoading}ensure(e,r=$n){if(this.disposed)return;const i=()=>{this.isLoadingFor(r)||e()};r.useTransmittanceLut&&this.ensureTransmittance(i),r.useIrradianceLut&&this.ensureIrradiance(i)}ensureSky(e){if(this.disposed||this.skyReady)return;let r=!1;const i=()=>{!r&&!this.isSkyLoading&&(r=!0,e())};this.ensureTransmittance(i),this.ensureIrradiance(i),this.ensureScattering(i)}ensureTransmittance(e){this.transmittanceTexture||this.transmittanceLoading||Date.now()<this.transmittanceRetryAt||(this.transmittanceLoading=!0,eo(zn,{width:ln,height:un}).load(`${Vn}/transmittance.bin`,r=>{if(this.transmittanceLoading=!1,this.disposed){r.dispose();return}this.transmittanceRetryAt=0,this.transmittanceTexture=r,e()},void 0,r=>{this.transmittanceLoading=!1,this.disposed||(this.transmittanceRetryAt=Date.now()+Yn,console.error("[SHADOW] Takram transmittance LUT failed",r),e())}))}ensureIrradiance(e){this.irradianceTexture||this.irradianceLoading||Date.now()<this.irradianceRetryAt||(this.irradianceLoading=!0,eo(zn,{width:on,height:cn}).load(`${Vn}/irradiance.bin`,r=>{if(this.irradianceLoading=!1,this.disposed){r.dispose();return}this.irradianceRetryAt=0,this.irradianceTexture=r,this.skyLightProbe.irradianceTexture=r,e()},void 0,r=>{this.irradianceLoading=!1,this.disposed||(this.irradianceRetryAt=Date.now()+Yn,console.error("[SHADOW] Takram irradiance LUT failed",r),e())}))}ensureScattering(e){this.scatteringTexture||this.scatteringLoading||Date.now()<this.scatteringRetryAt||(this.scatteringLoading=!0,cm(zn,{width:Wm,height:Gm,depth:jm}).load(`${Vn}/scattering.bin`,r=>{if(this.scatteringLoading=!1,this.disposed){r.dispose();return}this.scatteringRetryAt=0,this.scatteringTexture=r,e()},void 0,r=>{this.scatteringLoading=!1,this.disposed||(this.scatteringRetryAt=Date.now()+Yn,console.error("[SHADOW] Takram scattering LUT failed",r),e())}))}evaluate(e,r,i=$n,n){return Xf(e,r,i.useTransmittanceLut?this.transmittanceTexture:null,i.useIrradianceLut?this.skyLightProbe:null,n)}dispose(){var e,r,i;this.disposed||(this.disposed=!0,this.transmittanceLoading=!1,this.irradianceLoading=!1,this.scatteringLoading=!1,this.transmittanceRetryAt=0,this.irradianceRetryAt=0,this.scatteringRetryAt=0,(e=this.transmittanceTexture)==null||e.dispose(),(r=this.irradianceTexture)==null||r.dispose(),(i=this.scatteringTexture)==null||i.dispose(),this.transmittanceTexture=null,this.irradianceTexture=null,this.scatteringTexture=null,this.skyLightProbe.irradianceTexture=null,this.skyLightProbe.sh.zero())}}const Zf="shadow-simulation-atmospheric-sky",Jr=2,Ri="carmaOutputToSrgb",Kn="carmaDisplayExposure",Jf=new T;class ep extends qs{observerScenePosition=new T;hasObserverScenePosition=!1;viewCamera=null;copyCameraSettings(e){if(super.copyCameraSettings(e),!this.hasObserverScenePosition)return;const r=this.uniforms;if(r.cameraPosition.value.copy(this.observerScenePosition),!this.correctAltitude)return;const i=Jf.copy(this.observerScenePosition).applyMatrix4(r.inverseEllipsoidMatrix.value).sub(r.ellipsoidCenter.value);dn(i,this.atmosphere.bottomRadius,this.ellipsoid,r.altitudeCorrection.value)}onBeforeRender(e,r,i,n,s,a){super.onBeforeRender(e,r,this.viewCamera??i,n,s,a)}}const tp=t=>{t.uniforms.toneMappingExposure=new I(1),t.uniforms[Ri]=new I(!1),t.uniforms[Kn]=new I(Jr),t.fragmentShader=t.fragmentShader.replace("precision highp sampler3D;",`precision highp sampler3D;

uniform bool ${Ri};
uniform float ${Kn};
#include <tonemapping_pars_fragment>

vec4 carmaLinearToSrgb(vec4 value) {
  return vec4(
    mix(
      pow(value.rgb, vec3(0.41666)) * 1.055 - vec3(0.055),
      value.rgb * 12.92,
      vec3(lessThanEqual(value.rgb, vec3(0.0031308)))
    ),
    value.a
  );
}`).replace("vec3 rayDirection = normalize(vRayDirection);",`vec3 rayDirection = normalize(vRayDirection);

  // The actual ground is rendered by streamed Three geometry. Do not let the
  // atmosphere shader add a second ellipsoid/zero-ground backdrop below it.
  // Rays that would hit that synthetic ground sample the tangent atmosphere
  // instead, so missing terrain reveals sky rather than a dark plane.
  if (rayIntersectsGround(cameraPosition, rayDirection)) {
    vec3 localUp = normalize(cameraPosition);
    float radius = max(length(cameraPosition), u_bottom_radius);
    float tangentMu = -sqrt(max(
      0.0,
      1.0 - u_bottom_radius * u_bottom_radius / (radius * radius)
    )) + 1e-5;
    vec3 tangent = rayDirection - localUp * dot(rayDirection, localUp);
    if (dot(tangent, tangent) < 1e-8) {
      tangent = normalize(cross(localUp, vec3(1.0, 0.0, 0.0)));
      if (dot(tangent, tangent) < 1e-8) {
        tangent = normalize(cross(localUp, vec3(0.0, 0.0, 1.0)));
      }
    } else {
      tangent = normalize(tangent);
    }
    rayDirection = normalize(
      tangent * sqrt(max(0.0, 1.0 - tangentMu * tangentMu)) +
      localUp * tangentMu
    );
  }`).replace("outputColor.a = 1.0;",`outputColor.rgb *= ${Kn};
  outputColor.a = 1.0;
  if (${Ri}) {
    // SkyMaterial is raw GLSL: match terrain's AgX on the display target.
    // Offscreen samples stay linear HDR until the shared final composite.
    outputColor.rgb = AgXToneMapping(outputColor.rgb);
    outputColor = carmaLinearToSrgb(outputColor);
  }`)},rp=t=>{const e=new ep({groundAlbedo:t,moon:!1,photometric:!0,side:Qo,sun:!0});tp(e),e.depthTest=!1,e.depthWrite=!1;const r=new Ko;r.setAttribute("position",new Hl([-1,-1,0,3,-1,0,-1,3,0],3));const i=new Gr(r,e);return i.name=Zf,i.visible=!1,i.frustumCulled=!1,i.renderOrder=-100,i.castShadow=!1,i.receiveShadow=!1,i.onBeforeRender=n=>{e.uniforms.toneMappingExposure.value=n.toneMappingExposure,e.uniforms[Ri].value=n.getRenderTarget()===null},{mesh:i,update(n,s){return s?Jc(n)?!1:(i.visible=!0,e.irradianceTexture=s.irradianceTexture,e.scatteringTexture=s.scatteringTexture,e.transmittanceTexture=s.transmittanceTexture,e.sunDirection.copy(n.directionToSunECEF),e.ellipsoidCenter.copy(n.ellipsoidCenterECEF),e.ellipsoidMatrix.copy(n.ecefToSceneMatrix),!0):(i.visible=!1,!1)},updateViewCamera(n){e.viewCamera=n},updateObserverScenePosition(n){e.observerScenePosition.copy(n),e.hasObserverScenePosition=!0},updateGroundAlbedo(n){e.groundAlbedo.copy(n)},dispose(){r.dispose(),e.dispose()}}},_i=3,ip=.5,ct=64,mo=.01,fo=(t,e,r)=>Math.min(r**2,Math.max(ct**2,Math.floor(t!==void 0&&Number.isFinite(t)&&t>0?t:e))),po=(t,e)=>{const{mapSize:r,maxMapSize:i,elevationSine:n,sunDiscGuardMeters:s,groundTexelFit:a}=e,o=t.right-t.left+2*s,c=t.top-t.bottom+2*s,l=Math.max(mo,Math.abs(n)),d=2*(a?_i+ip:_i);let g=r,p=r,f=!1,S=!1;const h=e.groundTexelTargetMeters;if(h!==void 0&&(!Number.isFinite(h)||h<=0))throw new RangeError("Shadow ground texel target must be positive and finite");if(h!==void 0){const X=W=>Math.max(ct,2**Math.ceil(Math.log2(W))),$=X(o/h+d),N=X(c/(h*l)+d);g=Math.min(i,$),p=Math.min(i,N),f=g<$||p<N}else if(a){const X=o*l/c,$=e.mapTexelBudget??r*r,N=d*(X+1),W=$-d*d,J=2*W/(N+Math.sqrt(N**2+4*X*W)),K=X*J+d,E=J+d;f=K>i||E>i;const ve=Math.max(o,c)/(r-d),te=Math.min(r,Math.max(ct,Math.ceil((o/ve+d)/ct)*ct)),be=Math.min(r,Math.max(ct,Math.ceil((c/ve+d)/ct)*ct));S=K<te||E<be;const Ae=Math.min(Math.max(K,te,$/i),i,$/be),P=se=>Math.floor(se/ct+1e-9)*ct;g=Math.max(te,P(Ae)),p=Math.max(be,P(Math.min(i,$/g)))}const v=e.mapDimensions;v&&(S||(S=g!==v.width||p!==v.height),g=v.width,p=v.height);const b=o/Math.max(1,g-d),R=c/Math.max(1,p-d),D=Math.max(b,R,Number.EPSILON),C=a?b:D,A=a?R:D,M=Math.round((t.left+t.right)/2/C)*C,U=Math.round((t.bottom+t.top)/2/A)*A,L=C*g,B=A*p;return{left:M-L/2,right:M+L/2,bottom:U-B/2,top:U+B/2,mapWidth:g,mapHeight:p,metersPerTexelX:C,metersPerTexelY:A,guardMetersX:C*_i,guardMetersY:A*_i,groundTexelWidthMeters:C,groundTexelHeightMeters:Math.abs(n)>Number.EPSILON?A/Math.abs(n):1/0,groundTexelFitLimited:a&&(f||S||Math.abs(n)<mo)}},np=(t,e,r)=>{if(r<=0)return{planarMeters:0,depthMeters:0};const i=Math.sqrt(Math.max(0,1-e**2)),n=i>Math.sin(r)?Math.asin(Math.sin(r)/i):Math.PI;return{planarMeters:2*t*Math.sin(Math.min(Math.PI,n+r)/2),depthMeters:2*t*Math.sin(r/2)}},sp=t=>{const e=Math.floor(t/2)+1,r=t%2===0?1:-1;return[r*(e*.7548776662466927%1-.5),r*(e*.5698402909980532%1-.5)]},ap=2048,il=8192,go=2,vo=50,op=1e4,cp=.04,qn=25,lp=4,up=1.2,dp=.2,yo=.05,hp=8,Br=Vl(.53/2),mp=Math.PI*(3-Math.sqrt(5)),fp=300,pp=new T(0,1,0),So=(t,e,r=new Z)=>r.lookAt(t,e,pp).setPosition(t).invert(),gp=(t,e)=>{if(t.length===0)return null;const r=t.map(f=>f.clone().applyMatrix4(e)),i=Math.min(...r.map(({x:f})=>f)),n=Math.max(...r.map(({x:f})=>f)),s=Math.min(...r.map(({y:f})=>f)),a=Math.max(...r.map(({y:f})=>f)),o=r.map(({z:f})=>-f),c=Math.max(0,Math.min(...o)),l=Math.max(c+.01,Math.max(...o)),u=(i+n)/2,d=(s+a)/2,g=Math.max((n-i)/2,go/2),p=Math.max((a-s)/2,go/2);return{left:u-g,right:u+g,bottom:d-p,top:d+p,near:c,far:l}},vp=(t,e=il)=>t>=16?e:Math.min(e,ap*Math.sqrt(t));class nl{constructor(e){this.host=e,this.lights=Array.from({length:1},()=>{const r=new zl(16777215,0);return r.name="shadow-simulation-sun",r.visible=!1,r.castShadow=!1,r.shadow.camera.name="shadow-simulation-shadow-camera",r.shadow.autoUpdate=!1,r.shadow.radius=0,r.shadow.bias=0,r.shadow.normalBias=yo,e.add(r,r.target),r})}lights;softSun=!1;lastSoftFit=null;maxShadowMapSize=il;mapAllocation=null;disposed=!1;setMaxShadowMapSize(e){if(!Number.isFinite(e)||e<=0)return;const r=Math.max(256,Math.floor(e));this.disposed||this.maxShadowMapSize===r||(this.maxShadowMapSize=r)}setSoftSun(e){this.disposed||this.softSun===e||(e||this.restoreSunDiscCenter(),this.softSun=e,e||(this.lastSoftFit=null))}applySunDiscSample(e,r,i=!0){if(this.disposed)return;const n=this.lastSoftFit;if(!n)return;const s=Math.max(1,Math.floor(r)),a=(Math.floor(e)%s+s)%s,o=Br*Math.sqrt((a+.5)/s),c=a*mp,l=Math.cos(c)*o,u=Math.sin(c)*o,d=n.tangentA.clone().multiplyScalar(l).addScaledVector(n.tangentB,u).normalize(),g=n.directionToSun.clone().multiplyScalar(Math.cos(o)).addScaledVector(d,Math.sin(o)).normalize(),p=this.lights[0],[f,S]=i&&s>1?sp(a):[0,0],h=p.shadow.camera,v=n.rasterBounds,b=f*(v.right-v.left)/p.shadow.mapSize.x,R=S*(v.top-v.bottom)/p.shadow.mapSize.y;h.left=v.left+b,h.right=v.right+b,h.bottom=v.bottom+R,h.top=v.top+R,h.updateProjectionMatrix(),p.position.copy(g).multiplyScalar(n.lightDistance).add(n.anchorPosition),p.updateMatrixWorld(!0),p.target.updateMatrixWorld(!0),p.shadow.updateMatrices(p),p.shadow.needsUpdate=!0}restoreSunDiscCenter(){if(this.disposed||!this.lastSoftFit)return;const e=this.lastSoftFit,r=this.lights[0],i=r.shadow.camera;i.left=e.rasterBounds.left,i.right=e.rasterBounds.right,i.bottom=e.rasterBounds.bottom,i.top=e.rasterBounds.top,i.updateProjectionMatrix(),r.position.copy(e.directionToSun).multiplyScalar(e.lightDistance).add(e.anchorPosition),r.updateMatrixWorld(!0),r.target.updateMatrixWorld(!0),r.shadow.updateMatrices(r),r.shadow.needsUpdate=!0}invalidate(){this.lights[0].shadow.needsUpdate=!0}update({receiverWorldPoints:e,receiverAnchorWorldPosition:r,minimumElevationMeters:i,maximumElevationMeters:n,directionToSun:s,color:a,intensity:o,shadowIntensity:c,quality:l,groundTexelFit:u=!0,stabilizeMapSize:d=!1,mapTexelBudget:g,casterMapTexelBudget:p,groundTexelTargetMeters:f,maxReceiverBiasMeters:S}){var Pe,gt;if(this.disposed)return null;if(e.length===0){for(const pe of this.lights)pe.visible=!1,pe.castShadow=!1,pe.intensity=0,pe.shadow.needsUpdate=!1;return null}const h=s.clone().normalize(),v=Math.max(0,n-i),b=Math.max(cp,h.y),R=We((v+fp)/b+vo,vo,op),D=R+v+qn,C=vp(l,this.maxShadowMapSize),A=fo(g,Math.floor(C)**2,this.maxShadowMapSize),M=Math.floor(Math.sqrt(A)),U=new Ge(a),L=r.clone(),B=e.reduce((pe,ei)=>Math.max(pe,ei.distanceTo(r)),0),X=B+D,$=this.lights[0];$.position.copy(h).multiplyScalar(X).add(L),$.target.position.copy(L),$.updateMatrixWorld(!0),$.target.updateMatrixWorld(!0),$.shadow.updateMatrices($);const N=gp(e,So($.position,$.target.position));if(!N)return null;const W=np(B,h.y,this.softSun?Br:0),J=this.softSun?Math.max(Math.tan(Br)*X,W.planarMeters):0,K={maxMapSize:this.maxShadowMapSize,elevationSine:h.y,sunDiscGuardMeters:J,groundTexelFit:u,groundTexelTargetMeters:f},E=po(N,{...K,mapSize:M,mapTexelBudget:A,mapDimensions:d&&((Pe=this.mapAllocation)==null?void 0:Pe.texelBudget)===A&&this.mapAllocation.maxMapSize===this.maxShadowMapSize&&this.mapAllocation.groundTexelFit===u?this.mapAllocation:void 0}),ve=fo(p,A,this.maxShadowMapSize),te=p===void 0?E:po(N,{...K,mapSize:Math.floor(Math.sqrt(ve)),mapTexelBudget:ve});this.mapAllocation={width:E.mapWidth,height:E.mapHeight,texelBudget:A,maxMapSize:this.maxShadowMapSize,groundTexelFit:u};const be=Math.max(E.metersPerTexelX,E.metersPerTexelY),Ae=Math.max(E.guardMetersX,E.guardMetersY),P={left:E.left,right:E.right,bottom:E.bottom,top:E.top,near:Math.max(.01,N.near-W.depthMeters-R-v-qn),far:Math.max(1,N.far+W.depthMeters+v+qn)};P.far=Math.max(P.near+1,P.far);const se=We(be*up/Math.max(dp,h.y),yo,hp),Be=-We(be*lp/Math.max(P.far-P.near,1),Number.EPSILON,.01),Te=new T;Math.abs(h.y)>.99?Te.set(1,0,0):Te.crossVectors(new T(0,1,0),h).normalize();const Lt=new T().crossVectors(h,Te),re=this.lights[0];re.visible=!0,re.castShadow=!0,re.intensity=o,re.color.copy(U),re.shadow.intensity=We(c,0,1),re.shadow.needsUpdate=!0,(re.shadow.mapSize.x!==E.mapWidth||re.shadow.mapSize.y!==E.mapHeight)&&((gt=re.shadow.map)==null||gt.dispose(),re.shadow.map=null,re.shadow.mapSize.set(E.mapWidth,E.mapHeight)),re.position.copy(h).multiplyScalar(X).add(L),re.target.position.copy(L);const Ze=S!==void 0&&Number.isFinite(S)?Math.max(0,S):1/0;re.shadow.bias=Math.max(Be,-Ze/(P.far-P.near)),re.shadow.normalBias=Math.min(se,Ze);const Me=re.shadow.camera;Me.left=P.left,Me.right=P.right,Me.bottom=P.bottom,Me.top=P.top,Me.near=P.near,Me.far=P.far,Me.updateProjectionMatrix(),re.updateMatrixWorld(!0),re.target.updateMatrixWorld(!0),re.shadow.updateMatrices(re),this.lastSoftFit=this.softSun?{directionToSun:h.clone(),tangentA:Te,tangentB:Lt,anchorPosition:L.clone(),lightDistance:X,rasterBounds:P}:null;const je=$.shadow.camera;return{sampleCount:1,totalShadowTexels:E.mapWidth*E.mapHeight,mapTexelBudget:f===void 0?A:void 0,casterReachMeters:R,casterMetersPerTexel:[te.metersPerTexelX,te.metersPerTexelY],camera:{receiverPointCount:e.length,receiverLeftMeters:N.left,receiverRightMeters:N.right,receiverBottomMeters:N.bottom,receiverTopMeters:N.top,leftMeters:je.left,rightMeters:je.right,bottomMeters:je.bottom,topMeters:je.top,nearMeters:je.near,farMeters:je.far,shadowMapWidth:E.mapWidth,shadowMapHeight:E.mapHeight,viewMatrixElements:[...So($.position,$.target.position).elements],projectionMatrixElements:[...je.projectionMatrix.elements],guardMeters:Ae,metersPerTexel:be,metersPerTexelX:E.metersPerTexelX,metersPerTexelY:E.metersPerTexelY,groundTexelWidthMeters:E.groundTexelWidthMeters,groundTexelHeightMeters:E.groundTexelHeightMeters,groundTexelFitLimited:E.groundTexelFitLimited,groundTexelFit:u,groundTexelTargetMeters:f}}}dispose(){var e;if(!this.disposed){this.disposed=!0;for(const r of this.lights)(e=r.shadow.map)==null||e.dispose(),this.host.remove(r.target,r)}}}const yp=`
float carmaReceiverPlaneTap(sampler2DShadow map, vec2 uv, vec3 receiver, vec2 gradient) {
  // Clamp the reference plane AND the depth fetch to the same texel centre.
  // CLAMP_TO_EDGE alone only clamps the fetch, creating false self-shadows for
  // sloped receivers whose bilinear footprint crosses the texture boundary.
  vec2 halfTexel = vec2(0.5) / vec2(textureSize(map, 0));
  uv = clamp(uv, halfTexel, vec2(1.0) - halfTexel);
  return texture(map, vec3(uv, receiver.z + dot(gradient, uv - receiver.xy)));
}
float getShadow(sampler2DShadow map, vec2 size, float intensity, float bias, float radius, vec4 coord) {
  if (!carmaReceiverPlaneShadow) return carmaOriginalGetShadow(map, size, intensity, bias, radius, coord);
  vec3 receiver = coord.xyz / coord.w;
  vec3 dx = dFdx(receiver);
  vec3 dy = dFdy(receiver);
  float determinant = dx.x * dy.y - dx.y * dy.x;
  float scale = max(length(dx.xy) * length(dy.xy), 1e-20);
  vec2 gradient = abs(determinant) > scale * 1e-5
    ? vec2(dy.y * dx.z - dx.y * dy.z, dx.x * dy.z - dy.x * dx.z) / determinant
    : vec2(0.0);
  receiver.z += bias;
  if (any(lessThan(receiver.xy, vec2(0.0))) || any(greaterThan(receiver.xy, vec2(1.0))) || receiver.z > 1.0) return 1.0;
  vec2 pixel = receiver.xy * size - 0.5;
  vec2 fraction = fract(pixel);
  vec2 uv = (floor(pixel) + 0.5) / size;
  vec2 stepUV = 1.0 / size;
  float a = carmaReceiverPlaneTap(map, uv, receiver, gradient);
  float b = carmaReceiverPlaneTap(map, uv + vec2(stepUV.x, 0.0), receiver, gradient);
  float c = carmaReceiverPlaneTap(map, uv + vec2(0.0, stepUV.y), receiver, gradient);
  float d = carmaReceiverPlaneTap(map, uv + stepUV, receiver, gradient);
  return mix(1.0, mix(mix(a, b, fraction.x), mix(c, d, fraction.x), fraction.y), intensity);
}
`,wo="float getShadow( sampler2DShadow shadowMap,",Xn="#elif defined( SHADOWMAP_TYPE_VSM )",Sp=()=>{const t=cs.shadowmap_pars_fragment;if(!t.includes(wo)||!t.includes(Xn))throw new Error("Three PCF shader changed; validate receiver-plane shadow integration");return`uniform bool carmaReceiverPlaneShadow;
${t.replace(wo,"float carmaOriginalGetShadow( sampler2DShadow shadowMap,").replace(Xn,`${yp}
${Xn}`)}`},_o=new WeakMap,wp=(t,e)=>{const r=_o.get(t);if(r)return e!==void 0&&r.value!==e&&(r.value=e,t.needsUpdate=!0),r;const i={value:e??!1},n=t.onBeforeCompile,s=t.customProgramCacheKey(),a=Sp();return t.onBeforeCompile=function(o,c){n.call(this,o,c),o.uniforms.carmaReceiverPlaneShadow=i,o.fragmentShader=o.fragmentShader.replace("#include <shadowmap_pars_fragment>",a)},t.customProgramCacheKey=()=>`${s}|carma-receiver-plane-pcf-v3|${i.value?"mesh":"stock"}`,t.needsUpdate=!0,_o.set(t,i),i},xo=new WeakMap,To=(t,e,r,i,n="shadow-and-color")=>{const s=()=>r.render(t,i);if(e===void 0)return s(),!0;const a=t.getObjectById(e);if(!a)return!1;let o=xo.get(a);if(!o){const l=new Set;a.traverse(u=>l.add(u)),xo.set(a,l),o=l}if(n==="color-only"){const l=new Set;for(let d=a.parent;d;d=d.parent)l.add(d);const u=[];t.traverse(d=>{d.isMesh&&d.visible&&!o.has(d)&&!l.has(d)&&(u.push(d),d.visible=!1)});try{return s(),!0}finally{for(const d of u)d.visible=!0}}const c=r.renderBufferDirect;r.renderBufferDirect=function(...l){const[u,,,,d]=l;u===i&&d.isMesh&&!o.has(d)||c.apply(this,l)};try{return s(),!0}finally{r.renderBufferDirect=c}},Pt=t=>{var e;(e=t.depthTexture)==null||e.dispose(),t.dispose()},kt=(t,e)=>t*e*8;class _p{entries=new Map;retainedBytes=0;capacityBytes=0;activeVariantIds=null;hits=0;misses=0;get bytes(){return this.retainedBytes}get count(){return this.entries.size}get availableBytes(){return Math.max(0,this.capacityBytes-this.retainedBytes)}has(e){return this.entries.has(e)}setActiveVariants(e){this.activeVariantIds=e}setBudget(e,r){this.capacityBytes=Math.max(0,e-r),this.evictInactive(0);for(const i of this.entries.keys()){if(this.retainedBytes<=this.capacityBytes)break;this.remove(i)}}get(e){const r=this.entries.get(e);return r?this.hits+=1:this.misses+=1,r==null?void 0:r.target}admit(e,r,i,n=r,s={}){var o;if(this.entries.has(e))return!1;const a=kt(i.width,i.height);return a>this.capacityBytes||(s.evictInactive!==!1&&((o=this.activeVariantIds)!=null&&o.has(n))&&this.evictInactive(a),this.retainedBytes+a>this.capacityBytes)?!1:(this.entries.set(e,{pageId:r,variantId:n,target:i,bytes:a}),this.retainedBytes+=a,!0)}invalidate(e){for(const[r,i]of this.entries)i.pageId===e&&this.remove(r)}clear(){for(const e of this.entries.keys())this.remove(e)}evictInactive(e){if(this.activeVariantIds)for(const[r,i]of this.entries){if(this.retainedBytes+e<=this.capacityBytes)break;this.activeVariantIds.has(i.variantId)||this.remove(r)}}remove(e){const r=this.entries.get(e);r&&(this.entries.delete(e),this.retainedBytes-=r.bytes,Pt(r.target))}}const xp=16,Qn=4;class Tp{constructor(e,r,i,n=4096,s=e){if(this.scene=e,this.renderer=r,this.memoryBudgetBytes=i,this.host=s,!Number.isFinite(i)||!(i>=kt(64,64)))throw new RangeError("Shadow page budget must fit at least one 64-square page");if(!Number.isFinite(n)||n<64)throw new RangeError("Maximum shadow page size must be finite and at least 64");if(r.shadowMap.type!==In)throw new Error("Tiled shadow reference requires the shared PCF shadow path");this.maxMapSize=Math.max(64,2**Math.floor(Math.log2(Math.min(n,r.capabilities.maxTextureSize,Math.sqrt(i/8)))))}pages=new Map;activePageIds=new Set;activeSamples=1;prewarmPageIds=new Set;prewarmSamples=1;prewarmRevision=0;prewarmSink=null;prewarmCamera=new Wl([]);cache=new _p;scratchBytes=0;depthRenders=0;colorPasses=0;disposed=!1;streamedTarget=null;maxMapSize;setView(e,r,i,n,s,a){if(this.disposed)return;if(this.clearPrewarmView(),![s.directionToSun.x,s.directionToSun.y,s.directionToSun.z].every(Number.isFinite)||s.directionToSun.lengthSq()===0||s.directionToSun.y<=0)throw new RangeError("Tiled shadow reference requires a finite sun direction above the horizon");const o=od(e,r,i,n);this.activePageIds=new Set(o.map(({id:l})=>l));for(const l of o)this.configurePage(l,s,a);const c=Math.max(32,this.activePageIds.size*2);for(const[l,u]of this.pages){if(this.pages.size<=c)break;this.activePageIds.has(l)||(this.cache.invalidate(l),u.controller.dispose(),this.pages.delete(l))}this.updateActiveVariants(),this.scratchBytes=Math.max(0,...Array.from(this.activePageIds,l=>{const u=this.pages.get(l);return kt(u.width,u.height)})),this.streamedTarget&&kt(this.streamedTarget.width,this.streamedTarget.height)>this.scratchBytes&&(Pt(this.streamedTarget),this.streamedTarget=null),this.cache.setBudget(this.memoryBudgetBytes,this.reservedBytes)}updatePresentation(e){if(this.disposed)return;e.updateMatrixWorld(!0);const r=new Z().multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i=new jr().setFromProjectionMatrix(r),n=new Set;for(const[s,a]of this.pages)i.intersectsBox(a.receiverBounds)&&(a.screenBounds.copy(hc(a.receiverBounds,r)),n.add(s));this.activePageIds=n,this.updateActiveVariants()}get reservedBytes(){return this.scratchBytes+(this.prewarmSink?Qn:0)}setPrewarmView(e,r,i,n,s,a){if(this.clearPrewarmView(),this.disposed)return;if(!Number.isSafeInteger(a)||a<1||a>4096||!(n>0&&Number.isFinite(n))||![i.x,i.y].every(l=>l>0&&Number.isFinite(l))||!s.directionToSun.toArray().every(Number.isFinite)||s.directionToSun.y<=0)throw new RangeError("Invalid shadow prewarm view");const o=new Z().multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),c=new Set;for(const{id:l,bounds:u}of e){if(c.has(l)||u.isEmpty()||![...u.min.toArray(),...u.max.toArray()].every(Number.isFinite))throw new RangeError("Prewarm cells require unique IDs and finite bounds");c.add(l)}this.prewarmSamples=a;for(const l of e){if(this.prewarmPageIds.size>=xp)break;this.activePageIds.has(l.id)||!this.pages.has(l.id)&&this.pages.size>=Math.max(32,this.activePageIds.size*2)||(this.configurePage({...l,screenBounds:new ee,groundTexelTargetMeters:Math.max(1e-9,2*n/mc(l.bounds,o,i))},s),this.prewarmPageIds.add(l.id))}}clearPrewarmView(){this.prewarmPageIds.clear(),this.prewarmRevision+=1}get prewarmPages(){const e=[...this.prewarmPageIds].map(i=>{const n=this.pages.get(i),s=this.countPrewarmSamples(i,n);return{id:i,receiverBounds:n.receiverBounds.clone(),casterBounds:n.casterBounds.clone(),width:n.width,height:n.height,samples:this.prewarmSamples,cachedSamples:s,sampleBudget:s,limited:n.limited,canPrewarm:!1}});let r=this.cache.availableBytes-(this.prewarmSink?0:Qn);for(;r>0;){const i=e.filter(n=>n.sampleBudget<n.samples&&kt(n.width,n.height)<=r).sort((n,s)=>n.sampleBudget-s.sampleBudget);if(i.length===0)break;for(const n of i){const s=kt(n.width,n.height);s>r||(n.sampleBudget+=1,r-=s)}}return e.map(i=>({...i,canPrewarm:i.sampleBudget>i.cachedSamples}))}canPrewarm(e){return!this.disposed&&this.prewarmPages.some(r=>r.id===e&&r.canPrewarm)}countPrewarmSamples(e,r){const i=JSON.stringify([e,r.projectionKey,this.prewarmSamples]);let n=0;for(let s=0;s<this.prewarmSamples;s+=1)this.cache.has(JSON.stringify([i,s]))&&(n+=1);return n}prewarmNext(e,r,i={}){var S,h;const n=this.pages.get(r),s=!this.disposed&&this.prewarmPageIds.has(r)&&!!n,a=(v,b=!1)=>{var D;const R=s?this.countPrewarmSamples(r,n):0;return{pageId:r,rendered:v,cachedSamples:R,totalSamples:s?this.prewarmSamples:0,complete:s&&R===this.prewarmSamples,budgetLimited:b,aborted:((D=i.signal)==null?void 0:D.aborted)===!0}};if(!s||(S=i.signal)!=null&&S.aborted)return a(0);const o=this.prewarmRevision,c=n.contentRevision;if(this.renderer.shadowMap.type!==In)throw new Error("Shadow prewarm requires the shared PCF shadow path");const l=JSON.stringify([r,n.projectionKey,this.prewarmSamples]);let u=0;for(;u<this.prewarmSamples&&this.cache.has(JSON.stringify([l,u]));)u+=1;if(u===this.prewarmSamples)return a(0);if(!this.canPrewarm(r)||kt(n.width,n.height)+(this.prewarmSink?0:Qn)>this.cache.availableBytes)return a(0,!0);this.prewarmSink||(this.prewarmSink=new Ke(1,1,{depthBuffer:!1}),this.cache.setBudget(this.memoryBudgetBytes,this.reservedBytes));const g=n.controller.lights[0];this.prewarmSamples===1?n.controller.restoreSunDiscCenter():n.controller.applySunDiscSample(u,this.prewarmSamples),g.shadow.map=null,g.shadow.needsUpdate=!0;const p=g.visible;g.visible=!0,this.prewarmCamera.layers.mask=e.layers.mask,this.prewarmCamera.matrixAutoUpdate=!1,this.prewarmCamera.matrixWorldAutoUpdate=!1,this.prewarmCamera.matrixWorld.copy(e.matrixWorld),this.prewarmCamera.matrixWorldInverse.copy(e.matrixWorldInverse),this.prewarmCamera.projectionMatrix.copy(e.projectionMatrix);let f=0;try{this.renderPrewarmDepth(g);const v=g.shadow.map;v&&(f=1,this.depthRenders+=1,((h=i.signal)!=null&&h.aborted||o!==this.prewarmRevision||c!==n.contentRevision||!this.prewarmPageIds.has(r)||!this.cache.admit(JSON.stringify([l,u]),r,v,l,{evictInactive:!1}))&&Pt(v))}catch(v){throw g.shadow.map&&Pt(g.shadow.map),v}finally{g.visible=p,g.shadow.map=null}return a(f)}renderPrewarmDepth(e){const{renderer:r,scene:i}=this,n=r.getContext(),s=r.getRenderTarget(),a=r.getActiveCubeFace(),o=r.getActiveMipmapLevel(),c=r.getViewport(new ee),l=r.getScissor(new ee),u=r.getScissorTest(),d=n.getParameter(n.DRAW_FRAMEBUFFER_BINDING),g=n.getParameter(n.READ_FRAMEBUFFER_BINDING),p=new ee().fromArray(n.getParameter(n.VIEWPORT)),f=new ee().fromArray(n.getParameter(n.SCISSOR_BOX)),S=n.isEnabled(n.SCISSOR_TEST),h=n.isEnabled(n.DEPTH_TEST),v=n.getParameter(n.DEPTH_RANGE),b=n.getParameter(n.DEPTH_WRITEMASK),R=n.getParameter(n.DEPTH_FUNC),D=n.getParameter(n.DEPTH_CLEAR_VALUE),C=n.getParameter(n.COLOR_CLEAR_VALUE),A=n.getParameter(n.COLOR_WRITEMASK),M=r.clippingPlanes,U=r.autoClear,L=i.background,B=r.xr.enabled,X=r.shadowMap.enabled,$=r.shadowMap.autoUpdate,N=r.shadowMap.needsUpdate,W=[];i.traverse(J=>{const K=J;K.isLight&&K.castShadow&&K!==e&&W.push(K)});try{r.resetState(),r.autoClear=!1,r.xr.enabled=!1,r.shadowMap.enabled=!0,r.shadowMap.autoUpdate=!0;for(const J of W)J.castShadow=!1;i.background=null,r.clippingPlanes=M,r.setRenderTarget(this.prewarmSink),n.depthRange(0,1),r.render(i,this.prewarmCamera)}finally{r.clippingPlanes=M,r.autoClear=U,r.xr.enabled=B,r.shadowMap.enabled=X,r.shadowMap.autoUpdate=$,r.shadowMap.needsUpdate=N;for(const J of W)J.castShadow=!0;i.background=L,r.resetState(),r.setRenderTarget(s,a,o),r.setViewport(c),r.setScissor(l),r.setScissorTest(u),r.state.bindFramebuffer(n.DRAW_FRAMEBUFFER,d),r.state.bindFramebuffer(n.READ_FRAMEBUFFER,g),r.state.viewport(p),r.state.scissor(f),r.state.setScissorTest(S),h?r.state.enable(n.DEPTH_TEST):r.state.disable(n.DEPTH_TEST),n.depthRange(v[0],v[1]),n.depthMask(b),n.depthFunc(R),n.clearDepth(D),n.clearColor(C[0],C[1],C[2],C[3]),n.colorMask(A[0],A[1],A[2],A[3])}}configurePage(e,r,i){let n=this.pages.get(e.id);if(!n){const u=new nl(this.host);u.setMaxShadowMapSize(this.maxMapSize),u.setSoftSun(!0),n={controller:u,projectionKey:"",lightingKey:"",presentationKey:"",corridor:new Le,planes:[],width:0,height:0,limited:!1,screenBounds:e.screenBounds,receiverBounds:e.bounds.clone(),groundTexelTargetMeters:e.groundTexelTargetMeters,casterBounds:new Le,contentRevision:0,casterRevision:null}}this.pages.delete(e.id),this.pages.set(e.id,n);const s=n.controller.update({...r,maxReceiverBiasMeters:i?i(e.bounds,e.groundTexelTargetMeters):r.maxReceiverBiasMeters,receiverWorldPoints:Kr(e.bounds),receiverAnchorWorldPosition:e.bounds.getCenter(new T),minimumElevationMeters:e.bounds.min.y,maximumElevationMeters:e.bounds.max.y,quality:4,groundTexelFit:!0,groundTexelTargetMeters:e.groundTexelTargetMeters});if(!s)return;const a=n.controller.lights[0];a.visible=!1;const o=s.camera,c=e.receiverObjectId===void 0?"spatial-partition-v1":"native-object-v1",l=JSON.stringify([c,o.viewMatrixElements,o.projectionMatrixElements,o.shadowMapWidth,o.shadowMapHeight,a.shadow.bias,a.shadow.normalBias,e.bounds.min,e.bounds.max]);n.projectionKey=l,n.lightingKey=JSON.stringify([r.directionToSun,r.shadowIntensity,e.bounds.min,e.bounds.max]),n.presentationKey=JSON.stringify([c,r.directionToSun,r.shadowIntensity,e.bounds.min.x,e.bounds.min.z,e.bounds.max.x,e.bounds.max.z]),n.receiverBounds.copy(e.bounds),n.receiverObjectId=e.receiverObjectId,n.groundTexelTargetMeters=e.groundTexelTargetMeters,n.screenBounds=e.screenBounds,n.width=o.shadowMapWidth,n.height=o.shadowMapHeight,n.limited=(o.groundTexelWidthMeters??1/0)>e.groundTexelTargetMeters*1.001||(o.groundTexelHeightMeters??1/0)>e.groundTexelTargetMeters*1.001,n.casterBounds.copy(cd(e.bounds,r.directionToSun,s.casterReachMeters+e.bounds.getSize(new T).length(),Br,o.guardMeters)),n.corridor.union(n.casterBounds),n.planes=[new dt(new T(1,0,0),-e.bounds.min.x),new dt(new T(-1,0,0),e.bounds.max.x),new dt(new T(0,0,1),-e.bounds.min.z),new dt(new T(0,0,-1),e.bounds.max.z)]}invalidateCasters(e){const r=e instanceof Le?[e]:e,i=[];for(const[n,s]of this.pages)r.some(a=>s.corridor.intersectsBox(a))&&(s.contentRevision+=1,this.cache.invalidate(n),i.push(n));return i}setCasterRevision(e,r){const i=this.pages.get(e);return!i||r===null||i.casterRevision===r?!1:(i.casterRevision=r,i.contentRevision+=1,this.cache.invalidate(e),!0)}renderSample(e,r,i){this.renderSamples(e,this.activePageIds,r,i)}renderPageSample(e,r,i,n,s){return this.disposed||!this.activePageIds.has(r)?!1:this.renderSamples(e,[r],i,n,s)>0}renderPageColor(e,r){const i=this.pages.get(r);if(this.disposed||!i||!this.activePageIds.has(r))return!1;const{renderer:n,scene:s}=this,a=n.clippingPlanes,o=n.autoClear,c=s.background,l=n.shadowMap.autoUpdate,u=n.shadowMap.needsUpdate;n.autoClear=!1,n.shadowMap.autoUpdate=!1,n.shadowMap.needsUpdate=!1,n.clippingPlanes=[...a,...i.planes],s.background=null;try{const d=To(s,i.receiverObjectId,n,e,"color-only");return d&&(this.colorPasses+=1),d}finally{n.clippingPlanes=a,n.autoClear=o,n.shadowMap.autoUpdate=l,n.shadowMap.needsUpdate=u,s.background=c}}get accumulationPages(){return[...this.activePageIds].map(e=>{const r=this.pages.get(e),i=r.controller.lights[0];return{id:e,receiverObjectId:r.receiverObjectId,contentKey:JSON.stringify([r.lightingKey,r.contentRevision]),casterRevision:r.casterRevision,presentationKey:r.presentationKey,revision:JSON.stringify([r.projectionKey,r.contentRevision,i.color.toArray(),i.intensity,i.shadow.intensity]),screenBounds:r.screenBounds.clone(),receiverBounds:r.receiverBounds.clone(),groundTexelTargetMeters:r.groundTexelTargetMeters}})}areCastersReady(e,r){const i=this.pages.get(e);return!!(i&&r(i.casterBounds))}getPageGeometry(e){const r=this.pages.get(e);return r?{casterBounds:r.casterBounds.clone(),receiverBounds:r.receiverBounds.clone(),width:r.width,height:r.height,projectionKey:r.projectionKey}:null}get supportsOpaqueAccumulation(){let e=!0;return this.scene.traverseVisible(r=>{const i=r;if(!(!i.isMesh||!i.receiveShadow))for(const n of Array.isArray(i.material)?i.material:[i.material])n.visible&&(n.transparent||!n.depthWrite||!n.depthTest)&&(e=!1)}),e}renderSamples(e,r,i,n,s){if(this.disposed)return 0;if(this.renderer.shadowMap.type!==In)throw new Error("Shadow page cache must be recreated after changing the depth/filter format");if(!Number.isInteger(n)||n<1||!Number.isInteger(i)||i<0||i>=n)throw new RangeError("Shadow sample must lie within its finite-disc sequence");n!==this.activeSamples&&(this.activeSamples=n,this.updateActiveVariants());const{renderer:a,scene:o}=this,c=a.clippingPlanes,l=a.autoClear,u=o.background,d=a.getRenderTarget(),g=d==null?void 0:d.scissor.clone(),p=d==null?void 0:d.scissorTest;let f=0;a.autoClear=!1,o.background=null;try{for(const S of r){const h=this.pages.get(S),v=h.controller.lights[0];n===1?h.controller.restoreSunDiscCenter():h.controller.applySunDiscSample(i,n);const b=JSON.stringify([S,h.projectionKey,n]),R=JSON.stringify([b,i]),D=this.cache.get(R);if(!D&&this.streamedTarget&&(this.streamedTarget.width!==h.width||this.streamedTarget.height!==h.height)&&(Pt(this.streamedTarget),this.streamedTarget=null),v.shadow.map=D??this.streamedTarget,D||(this.streamedTarget=null),v.shadow.needsUpdate=!D,v.visible=!0,a.clippingPlanes=[...c,...h.planes],d){const{x:C,y:A,z:M,w:U}=s??h.screenBounds,L=Math.floor(C*d.width),B=Math.floor(A*d.height);d.scissor.set(L,B,Math.ceil((C+M)*d.width)-L,Math.ceil((A+U)*d.height)-B),d.scissorTest=!0,a.setRenderTarget(d)}try{if(To(o,h.receiverObjectId,a,e)&&(this.colorPasses+=1,f+=1),!D&&v.shadow.map){this.depthRenders+=1;const A=v.shadow.map;this.cache.admit(R,S,A,b)||(this.streamedTarget=A)}}catch(C){throw!D&&v.shadow.map&&Pt(v.shadow.map),C}finally{v.visible=!1,v.shadow.map=null}}}finally{a.clippingPlanes=c,a.autoClear=l,o.background=u,d&&g&&(d.scissor.copy(g),d.scissorTest=p??!1,a.setRenderTarget(d))}return f}get stats(){const e=[...this.activePageIds].map(r=>this.pages.get(r));return{pages:e.length,cachedSamplePages:this.cache.count,cacheBytes:this.cache.bytes,scratchBytes:this.reservedBytes,hits:this.cache.hits,misses:this.cache.misses,depthRenders:this.depthRenders,colorPasses:this.colorPasses,limitedPages:e.filter(r=>r.limited).length,dimensions:e.map(r=>`${r.width}×${r.height}`)}}clearCache(){this.cache.clear();for(const e of this.pages.values())e.contentRevision+=1}updateActiveVariants(){this.cache.setActiveVariants(new Set([...this.activePageIds].flatMap(e=>[...new Set([1,this.activeSamples])].map(r=>JSON.stringify([e,this.pages.get(e).projectionKey,r])))))}get pageLevels(){return[...this.activePageIds].map(e=>{const r=this.pages.get(e);return{id:e,level:Math.max(0,Math.round(Math.log2(this.maxMapSize/Math.max(r.width,r.height)))),width:r.width,height:r.height}})}dispose(){var e;if(!this.disposed){this.disposed=!0,this.cache.clear(),this.streamedTarget&&Pt(this.streamedTarget),this.streamedTarget=null,(e=this.prewarmSink)==null||e.dispose(),this.prewarmSink=null,this.clearPrewarmView(),this.scratchBytes=0;for(const r of this.pages.values())r.controller.dispose();this.pages.clear(),this.activePageIds.clear()}}}const bp=async({pages:t,signal:e,prepare:r,render:i,yieldToInput:n})=>{let s=0,a=0,o=0,c=!1;try{for(const l of t){if(e.aborted)break;if(l.cachedSamples>=l.samples){s+=1;continue}if(!l.canPrewarm){c=!0;continue}if(await n(e),e.aborted)break;const u=await r(l,e);try{if(e.aborted)break;if(!u.covered||!u.isCurrent()){a+=1;continue}const d=Math.min(l.samples,l.sampleBudget);d<l.samples&&(c=!0);for(let g=l.cachedSamples;g<d&&(await n(e),!(e.aborted||!u.isCurrent()));g+=1){const p=i(l.id,u.group,e);if(o+=p.rendered,p.complete){s+=1;break}if(p.budgetLimited){c=!0;break}if(p.aborted||!p.rendered)break}}finally{u.dispose()}}}catch(l){if(!e.aborted)throw l}return{offered:t.length,completed:s,skippedCoverage:a,renderedSamples:o,budgetLimited:c,aborted:e.aborted}},Mp=t=>{const e=globalThis.scheduler;return e!=null&&e.postTask?e.postTask(()=>{},{priority:"background",delay:0,signal:t}):Promise.reject(new Error("Background scheduler unavailable"))},Ep=({getRequest:t})=>{let e=!1,r=null,i=null,n=!1;const s=()=>{n=!1,i==null||i.abort()},a=()=>{if(!e){if(i){n=!0;return}try{const o=globalThis.scheduler;if(typeof(o==null?void 0:o.postTask)!="function")return;const c=t();if(!c||c.key===r)return;r=c.key;const l=new AbortController;i=l;let u=!1;const d=()=>{if(i!==l||u)return;i=null;const g=n;n=!1,g&&a()};try{o.postTask(async()=>{if(e||l.signal.aborted)return;const g=t();if(!(!g||g.key!==c.key)){u=!0;try{await g.run(l.signal)}finally{u=!1,d()}}},{priority:"background",delay:150,signal:l.signal}).then(d,d)}catch{d()}}catch{}}};return{onSettled:a,cancel:s,dispose(){e=!0,s()}}},sl=(t,e,r)=>JSON.stringify([t.matrixWorldInverse.elements,t.projectionMatrix.elements,e,r]),Rp=(t,e)=>{if(!Number.isFinite(e)||e<t.length*8)throw new RangeError("Capture budget must fit at least one scalar/depth pixel per page");const r=[...t].sort((n,s)=>n.id<s.id?-1:n.id>s.id?1:0).map(({id:n,plan:s,screenArea:a})=>({id:n,plan:s,width:s.width,height:s.height,weight:2**Math.floor(Math.log2(Math.max(1/65536,Math.min(1,a))))}));let i=r.reduce((n,s)=>n+s.width*s.height,0);for(;i*8>e;){let n;for(const a of r)a.width===1&&a.height===1||(!n||a.width*a.height/a.weight>n.width*n.height/n.weight)&&(n=a);if(!n)break;const s=n.width*n.height;n.width>=n.height&&n.width>1?n.width/=2:n.height/=2,i-=s-n.width*n.height}return new Map(r.map(({id:n,plan:s,width:a,height:o})=>[n,a===s.width&&o===s.height?s:{...s,width:a,height:o,limited:!0,key:sl(s.camera,a,o)}]))},Ap=(t,e,r)=>{const{groundTexelTargetMeters:i,maximumDimension:n,maximumPixels:s}=r;if(t.isEmpty()||![...t.min.toArray(),...t.max.toArray(),...e.toArray()].every(Number.isFinite)||!(i>0&&Number.isFinite(i))||!(n>=1&&Number.isFinite(n))||!(s>=1&&Number.isFinite(s)))throw new RangeError("Receiver capture requires finite bounds and positive allocation limits");const a=t.getCenter(new T),o=t.getSize(new T).length()*.5,c=Math.max(.001,o*.001),l=new Rs;l.quaternion.copy(e).normalize(),l.position.copy(a).add(new T(0,0,o+c+1).applyQuaternion(l.quaternion)),l.updateMatrixWorld(!0);const u=new Le().setFromPoints(Kr(t).map(v=>v.applyMatrix4(l.matrixWorldInverse)));l.left=u.min.x-c,l.right=u.max.x+c,l.bottom=u.min.y-c,l.top=u.max.y+c,l.near=Math.max(.001,-u.max.z-c),l.far=Math.max(l.near+.001,-u.min.z+c),l.updateProjectionMatrix();const d=v=>2**Math.ceil(Math.log2(Math.max(1,v/i))),g=d(l.right-l.left),p=d(l.top-l.bottom),f=2**Math.floor(Math.log2(n));let S=Math.min(g,f),h=Math.min(p,f);for(;S*h>s;)S>=h&&S>1?S/=2:h/=2;return{camera:l,width:S,height:h,limited:S<g||h<p,key:sl(l,S,h)}},Cp=t=>new Gl().setFromRotationMatrix(new Z().extractRotation(t.matrixWorld)),ki={namespace:"shadow-corridor-visibility",schema:"visibility-depth-world-basis-v1",maximumPayloadBytes:32*1024**2,maximumRecordBytes:33*1024**2,maximumIdentityCharacters:65536},xi={read:"read",write:"write",writePacked:"write-packed"},$e=t=>{if(!t||!Number.isInteger(t.samples)||t.samples<1||t.samples>4096)return null;const e=[t.source,t.dateTime,t.corridor,t.resolution,t.geometryFingerprint];return e.some(r=>typeof r!="string"||r.length===0)||e.reduce((r,i)=>r+i.length,0)>ki.maximumIdentityCharacters?null:JSON.stringify([ki.schema,...e,t.samples])},Zn=(t,e)=>Array.isArray(t)&&t.length===e&&t.every(Number.isFinite),al=t=>{if(!t||typeof t!="object")return!1;const e=t,r=e.width*e.height;return Number.isSafeInteger(e.width)&&e.width>0&&Number.isSafeInteger(e.height)&&e.height>0&&Number.isSafeInteger(r)&&r*8<=ki.maximumPayloadBytes&&Zn(e.captureMatrix,16)&&Zn(e.worldBasis,16)&&Zn(e.crop,4)&&e.crop[0]>=0&&e.crop[1]>=0&&e.crop[2]>0&&e.crop[3]>0&&e.crop[0]+e.crop[2]<=1.000001&&e.crop[1]+e.crop[3]<=1.000001},bo=t=>{if(!al(t))return!1;const e=t,r=e.width*e.height;return e.visibility instanceof Float32Array&&e.visibility.length===r&&e.depth instanceof Float32Array&&e.depth.length===r},Ip=t=>{if(!al(t))return!1;const e=t;return e.rgba instanceof Float32Array&&e.rgba.length===e.width*e.height*4},Rr=64,Ts=256*1024**2,Jn=Ts,Dp=128*1024**2,Mo=8,Eo=32*1024**2,Pp=4,Ar=t=>{var e;t.target?((e=t.target.depthTexture)==null||e.dispose(),t.target.dispose()):(t.visibility.dispose(),t.depth.dispose())},Op=(t,e)=>t.elements.every((r,i)=>Number.isFinite(r)&&Math.abs(r-e.elements[i])<=1e-10*Math.max(1,Math.abs(r)));class ol{constructor(e){this.renderer=e,this.copyQuad.frustumCulled=!1,this.copyScene.add(this.copyQuad)}captures=new Map;visiblePageIds=new Set;samples=0;replayCount=0;matchingPages=0;persistence;persistenceGeneration=0;disposed=!1;restoreAttempts=new Set;pendingRestores=new Map;restoreRequests=new Map;pendingWrites=new Map;persistenceOffers=new WeakMap;persistenceAttempted=new WeakSet;persistenceTimer=null;readbackBusy=!1;readbackBytes=0;packMaterial=new ir({uniforms:{visibility:{value:null},depth:{value:null}},vertexShader:"varying vec2 uvCopy; void main() { uvCopy = position.xy * 0.5 + 0.5; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:"uniform sampler2D visibility; uniform sampler2D depth; varying vec2 uvCopy; void main() { gl_FragColor = vec4(texture2D(visibility, uvCopy).r, texture2D(depth, uvCopy).r, 0.0, 1.0); }",depthTest:!1,depthWrite:!1,blending:Mi,toneMapped:!1});materials=new Map;unsupportedMaterials=new WeakSet;captureSupported=!0;contentRevision=0;get revision(){return this.contentRevision}get supportsCapture(){return this.captureSupported}copyScene=new Ur;copyCamera=new Hi;copyMaterial=new ir({uniforms:{source:{value:null},crop:{value:new ee}},vertexShader:"varying vec2 uvCopy; void main() { uvCopy = position.xy * 0.5 + 0.5; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:"uniform sampler2D source; uniform vec4 crop; varying vec2 uvCopy; void main() { gl_FragColor = vec4(texture2D(source, crop.xy + uvCopy * crop.zw).r, 0.0, 0.0, 1.0); }",depthTest:!1,depthWrite:!1,blending:Mi,toneMapped:!1});copyQuad=new Gr(new bs(2,2),this.copyMaterial);downsampleMaterial=new ir({uniforms:{source:{value:null},depth:{value:null},texel:{value:new Nt}},vertexShader:"varying vec2 uvCopy; void main() { uvCopy = position.xy * 0.5 + 0.5; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:`uniform sampler2D source; uniform sampler2D depth;
      uniform vec2 texel; varying vec2 uvCopy;
      void main() {
        vec2 d = texel * 0.25;
        float visibility = (texture2D(source, uvCopy + d).r
          + texture2D(source, uvCopy - d).r
          + texture2D(source, uvCopy + vec2(d.x, -d.y)).r
          + texture2D(source, uvCopy + vec2(-d.x, d.y)).r) * 0.25;
        gl_FragColor = vec4(visibility, 0.0, 0.0, 1.0);
        gl_FragDepth = texture2D(depth, uvCopy).r;
      }`,depthTest:!0,depthFunc:Zo,depthWrite:!0,blending:Mi,toneMapped:!1});uniforms={carmaCaptureVisibility:{value:!1},carmaRetainedEnabled:{value:!1},carmaRetainedColor:{value:null},carmaRetainedDepth:{value:null},carmaRetainedMatrix:{value:new Z},carmaRetainedCrop:{value:new ee(0,0,1,1)},carmaRetainedCount:{value:0},carmaRetainedBounds:{value:Array.from({length:Rr},()=>new ee)}};get memoryBytes(){return[...this.captures.values()].reduce((e,r)=>e+r.bytes,this.readbackBytes)}getCapturedSize(e){const r=this.captures.get(e);return r?{width:r.width,height:r.height,samples:r.samples}:null}get stats(){return{pages:this.captures.size,samples:this.samples,matchingPages:this.matchingPages,replays:this.replayCount,bytes:this.memoryBytes}}beginFrame(e=[]){this.matchingPages=0,this.visiblePageIds=new Set(e.map(r=>r.id)),this.schedulePersistence()}has(e,r){var n;const i=this.captures.get(e.id);if(!this.canReplay(e)||(i==null?void 0:i.casterRevision)!==e.casterRevision)return!1;if(i&&i.samples>1&&i.samples>=r&&e.captureSize&&e.presentationKey&&i.crop.x===0&&i.crop.y===0&&i.crop.z===1&&i.crop.w===1)return i.width>=e.captureSize.width&&i.height>=e.captureSize.height;if(i!=null&&i.restored){const s=this.restoreRequests.get(e.id),a=(n=this.persistence)==null?void 0:n.identity(e,r);if(e.ready===!1||!(s!=null&&s.expected)||!a||$e(a)!==i.persistentKey||!Op(i.matrix,s.expected))return!1;const o=e.screenBounds,c=i.crop;if(c.x>o.x+1e-6||c.y>o.y+1e-6||c.x+c.z<o.x+o.z-1e-6||c.y+c.w<o.y+o.w-1e-6)return!1}return(i==null?void 0:i.revision)===(e.contentKey??e.revision)&&i.samples===r}hasAtLeast(e,r){const i=this.captures.get(e.id);return!!(i&&i.samples>=r&&this.has(e,i.samples))}downsample(e,r,i){var h;if(!Number.isInteger(r)||!Number.isInteger(i)||r<1||i<1)return!1;const n=this.captures.get(e.id);if(!n||!this.canReplay(e))return!1;const s=Math.max(r,Math.ceil(n.width/2)),a=Math.max(i,Math.ceil(n.height/2));if(s>n.width||a>n.height||s*a>=n.width*n.height)return!1;const o=new Ke(s,a,{type:Et,format:tr,minFilter:Ie,magFilter:Ie,depthTexture:new sr(s,a,Vt),samples:0}),c=this.renderer,l=c.getRenderTarget(),u=c.getActiveCubeFace(),d=c.getActiveMipmapLevel(),g=c.getViewport(new ee),p=c.getScissor(new ee),f=c.getScissorTest(),S=c.autoClear;try{c.initRenderTarget(o),this.downsampleMaterial.uniforms.source.value=n.visibility,this.downsampleMaterial.uniforms.depth.value=n.depth,this.downsampleMaterial.uniforms.texel.value.set(1/s,1/a),this.copyQuad.material=this.downsampleMaterial,c.autoClear=!1,c.setRenderTarget(o),c.setViewport(new ee(0,0,s,a)),c.setScissorTest(!1),c.render(this.copyScene,this.copyCamera)}catch(v){throw(h=o.depthTexture)==null||h.dispose(),o.dispose(),v}finally{this.copyQuad.material=this.copyMaterial,c.setRenderTarget(l,u,d),c.setViewport(g),c.setScissor(p),c.setScissorTest(f),c.autoClear=S}return this.captures.set(e.id,{...n,target:o,visibility:o.texture,depth:o.depthTexture,width:s,height:a,bytes:s*a*8}),this.pendingWrites.delete(e.id),Ar(n),this.contentRevision+=1,!0}isRestorePending(e,r){var s;const i=this.pendingRestores.get(e.id);if(!i||i.samples!==r)return!1;const n=(s=this.persistence)==null?void 0:s.identity(e,r);return!!(n&&$e(n)===i.key)}setPersistence(e){this.persistence!==e&&(this.cancelPendingPersistence(),this.persistence=e)}cancelPendingPersistence(){var e;(e=this.persistence)==null||e.cache.cancelPending(),this.persistenceGeneration+=1,this.restoreAttempts.clear(),this.pendingRestores.clear(),this.restoreRequests.clear(),this.pendingWrites.clear(),this.persistenceOffers=new WeakMap,this.persistenceAttempted=new WeakSet,this.persistenceTimer!==null&&clearTimeout(this.persistenceTimer),this.persistenceTimer=null}beginSolarTransition(){this.cancelPendingPersistence()}canPresent(e){return this.canReplay(e)}prepareRestore(e,r,i){if(this.disposed)return;if(this.restoreRequests.set(e.id,{page:e,samples:r,expected:i==null?void 0:i.clone()}),this.restoreRequests.size>Rr*2){for(const l of this.restoreRequests.keys())if(l!==e.id&&!this.visiblePageIds.has(l)){this.restoreRequests.delete(l);break}}const n=this.persistence;if(!(n!=null&&n.cache.enabled)||n.cache.busy||e.ready===!1||this.hasAtLeast(e,r))return;const s=n.identity(e,r),a=s&&$e(s);if(!s||!a||this.restoreAttempts.has(a))return;this.restoreAttempts.add(a),this.restoreAttempts.size>Rr*4&&this.restoreAttempts.delete(this.restoreAttempts.values().next().value);const o=this.persistenceGeneration,c=this.captures.get(e.id);this.pendingRestores.set(e.id,{key:a,samples:r}),n.cache.read(s).then(l=>{const u=this.restoreRequests.get(e.id),d=u&&n.identity(u.page,r);if(!l||this.disposed||this.persistenceGeneration!==o||this.persistence!==n||!u||u.page.ready===!1||!d||$e(d)!==a||this.captures.get(e.id)!==c)return;const g=new Z().fromArray(l.worldBasis),p=n.worldBasis();if(!g.elements.every(Number.isFinite)||g.determinant()===0||!p.elements.every(Number.isFinite)||p.determinant()===0)return;const f=new Z().fromArray(l.captureMatrix).multiply(g.invert()).multiply(p),S=[...new Set([l.visibility.buffer,l.depth.buffer])].reduce((R,D)=>R+D.byteLength,0),h=l.width*l.height*Mo+S;if(!this.admit(e.id,h))return;const v=new os(l.visibility,l.width,l.height,tr,Et),b=new os(l.depth,l.width,l.height,tr,Et);for(const R of[v,b])R.minFilter=Ie,R.magFilter=Ie,R.generateMipmaps=!1,R.needsUpdate=!0;c&&Ar(c),this.captures.delete(e.id),this.captures.set(e.id,{target:null,visibility:v,depth:b,width:l.width,height:l.height,bytes:h,restored:!0,persistentKey:a,persistentIdentity:l.identity,revision:u.page.contentKey??u.page.revision,casterRevision:u.page.casterRevision,presentationKey:u.page.presentationKey??u.page.contentKey??u.page.revision,samples:l.identity.samples,matrix:f,crop:new ee().fromArray(l.crop)}),this.samples=l.identity.samples,this.contentRevision+=1}).catch(()=>{}).finally(()=>{var l,u;!this.disposed&&o===this.persistenceGeneration&&(((l=this.pendingRestores.get(e.id))==null?void 0:l.key)===a&&this.pendingRestores.delete(e.id),(u=n.requestRepaint)==null||u.call(n),this.schedulePersistence())})}admit(e,r,i=!1){var a;const n=i?Math.min(((a=this.captures.get(e))==null?void 0:a.bytes)??0,Dp):0,s=Jn+n;for(const[o,c]of this.captures){if(r+this.memoryBytes<=s)break;o===e||this.visiblePageIds.has(o)||(Ar(c),this.captures.delete(o),this.contentRevision+=1,this.pendingWrites.delete(o))}return r+this.memoryBytes<=s}publish(e,r,i,n,s){var L;if(!this.captureSupported)return!1;const a=n.screenBounds,o=Math.max(0,Math.floor(a.x*e.width)),c=Math.max(0,Math.floor(a.y*e.height)),l=Math.min(e.width,Math.ceil((a.x+a.z)*e.width)),u=Math.min(e.height,Math.ceil((a.y+a.w)*e.height)),d=l-o,g=u-c,p=d*g*Mo;if(d<=0||g<=0||p>Jn||!r.depthTexture||!this.admit(n.id,p,!0))return!1;const f=this.renderer,S=f.getRenderTarget(),h=f.getActiveCubeFace(),v=f.getActiveMipmapLevel(),b=f.getViewport(new ee),R=f.getScissor(new ee),D=f.getScissorTest(),C=f.autoClear,A=new Ke(d,g,{type:Et,format:tr,minFilter:Ie,magFilter:Ie,depthTexture:new sr(d,g,Vt),samples:0});try{f.initRenderTarget(A);const B=new jl(new Nt(o,c),new Nt(l,u));this.copyMaterial.uniforms.source.value=e.texture,this.copyMaterial.uniforms.crop.value.set(o/e.width,c/e.height,d/e.width,g/e.height),f.autoClear=!1,f.setRenderTarget(A),f.setViewport(new ee(0,0,d,g)),f.setScissorTest(!1),f.render(this.copyScene,this.copyCamera),f.copyTextureToTexture(r.depthTexture,A.depthTexture,B)}catch(B){throw(L=A.depthTexture)==null||L.dispose(),A.dispose(),B}finally{f.setRenderTarget(S,h,v),f.setViewport(b),f.setScissor(R),f.setScissorTest(D),f.autoClear=C}const M=this.captures.get(n.id);M&&Ar(M),this.samples=s,this.captures.delete(n.id);const U={target:A,visibility:A.texture,depth:A.depthTexture,width:d,height:g,bytes:p,restored:!1,revision:n.contentKey??n.revision,casterRevision:n.casterRevision,samples:s,presentationKey:n.presentationKey??n.contentKey??n.revision,matrix:new Z().multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),crop:new ee(o/e.width,c/e.height,d/e.width,g/e.height)};return this.captures.set(n.id,U),this.contentRevision+=1,this.queuePersistence(n,U),!0}queuePersistence(e,r){const i=this.persistence;if(!(i!=null&&i.cache.enabled)||e.ready===!1||this.disposed)return;const n=i.identity(e,r.samples),s=n&&$e(n),a=i.worldBasis();!n||n.samples!==r.samples||!s||!a.elements.every(Number.isFinite)||a.determinant()===0||r.width*r.height*16>Eo||(this.pendingWrites.delete(e.id),this.persistenceOffers.set(r,{page:e,capture:r,identity:n,key:s,worldBasis:[...a.elements]}),this.schedulePersistence())}schedulePersistence(){var e;if(!(this.disposed||this.persistenceTimer!==null||this.readbackBusy||!((e=this.persistence)!=null&&e.cache.enabled)||this.persistence.cache.busy)){for(const[r,i]of this.pendingWrites)this.captures.get(r)!==i.capture&&this.pendingWrites.delete(r);for(const r of[!0,!1])for(const[i,n]of this.captures){if(this.pendingWrites.size>=Pp)break;const s=this.persistenceOffers.get(n);this.visiblePageIds.has(i)===r&&s&&!this.persistenceAttempted.has(n)&&!this.pendingWrites.has(i)&&this.pendingWrites.set(i,s)}this.pendingWrites.size!==0&&(this.persistenceTimer=setTimeout(()=>{this.persistenceTimer=null,this.persistNextCapture()},0))}}persistNextCapture(){var f,S,h;const e=this.persistence;if(this.disposed||this.readbackBusy||!(e!=null&&e.cache.enabled)||e.cache.busy||typeof this.renderer.readRenderTargetPixelsAsync!="function")return;const r=[...this.pendingWrites.entries()].find(([v,b])=>this.captures.get(v)===b.capture);if(!r){this.pendingWrites.clear();return}const[i,n]=r,s=((f=this.restoreRequests.get(i))==null?void 0:f.page)??n.page,a=e.identity(s,n.capture.samples);if(s.ready===!1||!a||$e(a)!==n.key){this.pendingWrites.delete(i),this.persistenceAttempted.add(n.capture),this.schedulePersistence();return}const{capture:o}=n,c=o.width*o.height*16;if(c>Eo||this.memoryBytes+c*2>Jn){this.pendingWrites.delete(i),this.persistenceAttempted.add(o),this.schedulePersistence();return}const l=this.persistenceGeneration,u={target:null,pixels:null,reading:null},d=()=>{const v=this.renderer,b=v.getRenderTarget(),R=v.getActiveCubeFace(),D=v.getActiveMipmapLevel(),C=v.getViewport(new ee),A=v.getScissor(new ee),M=v.getScissorTest(),U=v.autoClear,L=this.copyQuad.material;try{u.target=new Ke(o.width,o.height,{format:Hr,type:Et,depthBuffer:!1,minFilter:Ie,magFilter:Ie}),v.initRenderTarget(u.target),u.pixels=new Float32Array(o.width*o.height*4),this.packMaterial.uniforms.visibility.value=o.visibility,this.packMaterial.uniforms.depth.value=o.depth,this.copyQuad.material=this.packMaterial,v.autoClear=!1,v.setRenderTarget(u.target),v.setViewport(new ee(0,0,o.width,o.height)),v.setScissorTest(!1),v.render(this.copyScene,this.copyCamera),u.reading=v.readRenderTargetPixelsAsync(u.target,0,0,o.width,o.height,u.pixels)}finally{this.copyQuad.material=L,v.setRenderTarget(b,R,D),v.setViewport(C),v.setScissor(A),v.setScissorTest(M),v.autoClear=U}};try{if(e.runIdleRender){if(!e.runIdleRender(d)&&!u.target)return}else d()}catch{(S=u.target)==null||S.dispose(),this.pendingWrites.delete(i),this.persistenceAttempted.add(o),this.schedulePersistence();return}if(!u.reading||!u.target||!u.pixels){(h=u.target)==null||h.dispose();return}const g=u.target,p=u.pixels;this.pendingWrites.delete(i),this.persistenceAttempted.add(o),this.readbackBusy=!0,this.readbackBytes=c*2,u.reading.then(async()=>{var R;const v=((R=this.restoreRequests.get(i))==null?void 0:R.page)??n.page,b=e.identity(v,o.samples);this.disposed||l!==this.persistenceGeneration||this.persistence!==e||v.ready===!1||!b||$e(b)!==n.key||await e.cache.writePacked(n.identity,{width:o.width,height:o.height,rgba:p,captureMatrix:[...o.matrix.elements],crop:o.crop.toArray(),worldBasis:n.worldBasis})}).catch(()=>{}).finally(()=>{var v;g.dispose(),this.readbackBusy=!1,this.readbackBytes=0,this.disposed||((v=e.requestRepaint)==null||v.call(e),this.schedulePersistence())})}canReplay(e){var i;const r=this.captures.get(e.id);if(!r||r.presentationKey!==(e.presentationKey??e.contentKey??e.revision))return!1;if(r.restored){const n=(i=this.persistence)==null?void 0:i.identity(e,r.samples),s=r.persistentIdentity;if(e.captureSize&&s)return!!(n&&n.source===s.source&&n.dateTime===s.dateTime&&n.corridor===s.corridor&&n.geometryFingerprint===s.geometryFingerprint&&n.samples===s.samples);if(!n||$e(n)!==r.persistentKey)return!1}return!0}activate(e){const r=this.captures.get(e.id);this.captures.delete(e.id),this.captures.set(e.id,r),this.uniforms.carmaRetainedMatrix.value.copy(r.matrix),this.uniforms.carmaRetainedCrop.value.copy(r.crop),this.uniforms.carmaRetainedColor.value=r.visibility,this.uniforms.carmaRetainedDepth.value=r.depth,this.matchingPages+=1,this.replayCount+=1,this.uniforms.carmaRetainedCount.value=1;const i=e.receiverBounds;this.uniforms.carmaRetainedBounds.value[0].set(i.min.x,i.min.z,i.max.x,i.max.z),this.uniforms.carmaRetainedEnabled.value=!0}renderNative(e,r,i){if(r.length===0)return i(),new Set;this.configureScene(e);const n=new Map(r.filter(u=>u.receiverObjectId!==void 0&&this.canPresent(u)).map(u=>[u.receiverObjectId,u])),s=[],a=new Map;e.traverseVisible(u=>{const d=u;if(!d.isMesh)return;let g;for(let p=d;p&&(g=n.get(p.id),!g);p=p.parent);s.push({mesh:d,page:g});for(const p of Array.isArray(d.material)?d.material:[d.material]){let f=a.get(p);f||a.set(p,f=new Set),f.add(g==null?void 0:g.id)}});const o=new Set;for(const u of a.values())if(!(u.size<2))for(const d of u)d!==void 0&&o.add(d);const c=new Set,l=[];for(const{mesh:u,page:d}of s){const g=u.onBeforeRender,p=d!==void 0&&!o.has(d.id);u.onBeforeRender=(...f)=>{g.call(u,...f),this.uniforms.carmaRetainedEnabled.value=!1,p&&this.activate(d)},p&&c.add(d.id),l.push(()=>{u.onBeforeRender=g})}this.uniforms.carmaRetainedEnabled.value=!1;try{return i(),c}finally{this.uniforms.carmaRetainedEnabled.value=!1;for(const u of l)u()}}render(e,r,i,n){if(!this.canPresent(r))return n();this.configureScene(e),this.activate(r);try{return n()}finally{this.uniforms.carmaRetainedEnabled.value=!1}}capture(e,r){this.captureSupported=!0,this.configureScene(e),this.uniforms.carmaCaptureVisibility.value=!0;try{return r()}finally{this.uniforms.carmaCaptureVisibility.value=!1}}configureScene(e){e.traverseVisible(r=>{const i=r;if(!(!i.isMesh||!i.receiveShadow)){if(i.isInstancedMesh||i.isSkinnedMesh){this.captureSupported=!1;return}for(const n of Array.isArray(i.material)?i.material:[i.material]){if(this.unsupportedMaterials.has(n)&&(this.captureSupported=!1),!(n.isMeshStandardMaterial||n.isMeshLambertMaterial||n.isMeshPhongMaterial)||n.transparent){this.captureSupported=!1;continue}this.materials.has(n)||this.configure(n)}}})}configure(e){const r=e.onBeforeCompile,i=e.customProgramCacheKey,n=this.uniforms,s=(l,u)=>{r.call(e,l,u);const d=/getShadow\( directionalShadowMap\[ i \][^;]+?\)/;if(!l.vertexShader.includes("#include <common>")||!l.vertexShader.includes("#include <project_vertex>")||!l.fragmentShader.includes("#include <common>")||!l.fragmentShader.includes("#include <lights_fragment_begin>")||!l.fragmentShader.includes("#include <dithering_fragment>")||!d.test(cs.lights_fragment_begin)){this.unsupportedMaterials.add(e),this.captureSupported=!1;return}this.unsupportedMaterials.delete(e),Object.assign(l.uniforms,n),l.vertexShader=l.vertexShader.replace("#include <common>",`#include <common>
uniform mat4 carmaRetainedMatrix;
varying vec4 vCarmaRetainedClip;
varying vec2 vCarmaRetainedWorld;
`).replace("#include <project_vertex>",`#include <project_vertex>
vec4 retainedWorld = modelMatrix * vec4(transformed, 1.0);
vCarmaRetainedClip = carmaRetainedMatrix * retainedWorld;
vCarmaRetainedWorld = retainedWorld.xz;
`),l.fragmentShader=l.fragmentShader.replace("#include <common>",`#include <common>
uniform bool carmaRetainedEnabled;
uniform bool carmaCaptureVisibility;
uniform sampler2D carmaRetainedColor;
uniform sampler2D carmaRetainedDepth;
uniform vec4 carmaRetainedCrop;
uniform int carmaRetainedCount;
uniform vec4 carmaRetainedBounds[${Rr}];
varying vec4 vCarmaRetainedClip;
varying vec2 vCarmaRetainedWorld;
float carmaRetainedCoverage(float fallbackCoverage) {
  vec3 ndc = vCarmaRetainedClip.xyz / vCarmaRetainedClip.w;
  vec2 uv = ndc.xy * 0.5 + 0.5;
  uv = (uv - carmaRetainedCrop.xy) / carmaRetainedCrop.zw;
  if (!carmaRetainedEnabled || carmaCaptureVisibility || vCarmaRetainedClip.w <= 0.0) return fallbackCoverage;
  bool owned = false;
  for (int i = 0; i < ${Rr}; i++) {
    if (i >= carmaRetainedCount) break;
    vec4 b = carmaRetainedBounds[i];
    if (vCarmaRetainedWorld.x >= b.x && vCarmaRetainedWorld.y >= b.y &&
        vCarmaRetainedWorld.x < b.z && vCarmaRetainedWorld.y < b.w) owned = true;
  }
  if (owned && all(greaterThanEqual(uv, vec2(0.0))) && all(lessThanEqual(uv, vec2(1.0)))) {
    float depth = texture2D(carmaRetainedDepth, uv).r;
    // Depth is only a capture-coverage marker. Per-fragment depth matching
    // rejected valid triangle-edge samples and exposed hard-shadow patches.
    // Baked visibility intentionally survives observer motion; see
    // BAKED-VISIBILITY-20260909 in three/TILED_SHADOW_PAGES.md.
    if (depth < 1.0) {
      return texture2D(carmaRetainedColor, uv).r;
    }
  }
  return fallbackCoverage;
}
`);const g=cs.lights_fragment_begin.replace(d,p=>`(carmaCapturedCoverage = ${p}, carmaRetainedCoverage(carmaCapturedCoverage))`);l.fragmentShader=l.fragmentShader.replace("#include <lights_fragment_begin>",`float carmaCapturedCoverage = 1.0;
${g}`).replace("#include <dithering_fragment>",`#include <dithering_fragment>
if (carmaCaptureVisibility) gl_FragColor.rgb = vec3(carmaCapturedCoverage);`)},a=()=>`${i.call(e)}|retained-corridor-visibility-v4`;e.onBeforeCompile=s,e.customProgramCacheKey=a,e.needsUpdate=!0;const o=()=>{e.onBeforeCompile===s&&(e.onBeforeCompile=r),e.customProgramCacheKey===a&&(e.customProgramCacheKey=i),e.removeEventListener("dispose",c),e.needsUpdate=!0},c=()=>{o(),this.materials.delete(e)};e.addEventListener("dispose",c),this.materials.set(e,o)}dispose(){this.disposed=!0,this.setPersistence(void 0);for(const e of this.captures.values())Ar(e);this.captures.clear(),this.uniforms.carmaRetainedEnabled.value=!1,this.uniforms.carmaRetainedColor.value=null,this.uniforms.carmaRetainedDepth.value=null,this.copyQuad.geometry.dispose(),this.copyMaterial.dispose(),this.downsampleMaterial.dispose(),this.packMaterial.dispose();for(const e of this.materials.values())e();this.materials.clear()}}const Ht=64,Ai=512*1024**2,rt={inactive:"inactive",dimensions:"dimensions",budget:"budget",msaa:"msaa",format:"format",receivers:"receivers",pages:"pages",renderer:"renderer",disposed:"disposed"},Ro=`
  out vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`,Np=`
  layout(location = 0) out highp vec4 outColor;
  in vec2 vUv;
  uniform sampler2D tPrevious;
  uniform sampler2D tReference;
  uniform sampler2D tReferenceDepth;
  uniform sampler2D tSample;
  uniform sampler2D tSampleDepth;
  uniform mat4 uInverseViewProjection;
  uniform vec4 uBounds[${Ht}];
  uniform int uBoundsCount;
  uniform bool uRefresh;
  uniform bool uResetAll;
  uniform float uWeights[${Ht}];
  void main() {
    vec4 reference = texture(tReference, vUv);
    float depth = texture(tReferenceDepth, vUv).r;
    if (uResetAll || depth >= 1.0) {
      outColor = reference;
      return;
    }
    vec4 position = uInverseViewProjection * vec4(vUv * 2.0 - 1.0, depth * 2.0 - 1.0, 1.0);
    vec2 world = position.xz / position.w;
    bool owned = false;
    float weight = 0.0;
    for (int i = 0; i < ${Ht}; i++) {
      if (i >= uBoundsCount) break;
      vec4 bounds = uBounds[i];
      if (world.x >= bounds.x && world.y >= bounds.y &&
        world.x < bounds.z && world.y < bounds.w) {
        owned = true;
        weight = uWeights[i];
        break;
      }
    }
    vec4 previous = texture(tPrevious, vUv);
    if (!owned) {
      outColor = previous;
    } else if (uRefresh) {
      outColor = reference;
    } else {
      float sampleDepth = texture(tSampleDepth, vUv).r;
      // Screen rectangles overlap. Only the camera's nearest actual surface
      // belongs to this update, never a hidden receiver from another page.
      outColor = abs(sampleDepth - depth) <= 0.000001
        ? mix(previous, texture(tSample, vUv), weight)
        : previous;
    }
  }
`,Lp=`
#include <common>
#include <dithering_pars_fragment>
  layout(location = 0) out highp vec4 outColor;
  in vec2 vUv;
  uniform sampler2D tColor;
  uniform sampler2D tDepth;
  uniform bool uOutputDither;
  void main() {
    vec4 color = texture(tColor, vUv);
    if (color.a < 0.004) discard;
    #ifdef TONE_MAPPING
      color.rgb = toneMapping(color.rgb);
    #endif
    outColor = linearToOutputTexel(color);
    #ifdef DITHERING
      if (uOutputDither) outColor.rgb = dithering(outColor.rgb);
    #endif
    gl_FragDepth = texture(tDepth, vUv).r;
  }
`;class Fp{constructor(e,r){this.renderer=e,this.ownsPresentation=r===void 0,this.presentation=r??new ol(e),this.quad.frustumCulled=!1,this.fullscreenScene.add(this.quad)}fullscreenScene=new Ur;fullscreenCamera=new Rs(-1,1,1,-1,0,1);blendMaterial=new ir({glslVersion:kr,vertexShader:Ro,fragmentShader:Np,uniforms:{tPrevious:{value:null},tReference:{value:null},tReferenceDepth:{value:null},tSample:{value:null},tSampleDepth:{value:null},uInverseViewProjection:{value:new Z},uBounds:{value:Array.from({length:Ht},()=>new ee)},uBoundsCount:{value:0},uRefresh:{value:!1},uResetAll:{value:!1},uWeights:{value:new Float32Array(Ht).fill(1)}},depthTest:!1,depthWrite:!1,blending:Mi});compositeMaterial=new ir({glslVersion:kr,vertexShader:Ro,fragmentShader:Lp,uniforms:{tColor:{value:null},tDepth:{value:null},uOutputDither:{value:!1}},dithering:!0,transparent:!0,blending:Vo,depthTest:!0,depthFunc:Zo,depthWrite:!0});quad=new Gr(new bs(2,2),this.blendMaterial);referenceTarget=null;sampleTarget=null;readTarget=null;writeTarget=null;pages=new Map;stateKey="";targetKey="";cursor=0;totalSamples=1;broken=!1;disposed=!1;allocatedBytes=0;lastFallbackReason=null;presentation;publishedStateKeys=new Map;publicationRetryMs=250;ownsPresentation;get pageProgress(){return[...this.pages].map(([e,r])=>({id:e,samples:r.samples,totalSamples:this.totalSamples,ready:r.page.ready!==!1,published:this.publishedStateKeys.get(e)===JSON.stringify([this.stateKey,r.page.revision])}))}get memoryBytes(){return this.allocatedBytes+this.presentation.memoryBytes}get fallbackReason(){return this.lastFallbackReason}render(e,r,i){var U,L;if(this.disposed)return this.fallback(rt.disposed);if(this.broken)return this.fallback(rt.renderer);if(!i.active)return this.stateKey="",this.lastFallbackReason=rt.inactive,null;const{width:n,height:s,samples:a}=i,o=Is((U=i.options)==null?void 0:U.format),c=((L=i.options)==null?void 0:L.msaaSamples)??Jo.msaaSamples,l=n*s,u=i.visibilityOnly?tr:Hr,d=i.visibilityOnly?1:4,g=l*(2*(o.bytesPerPixel*d/4+4)+2*o.accumulationBytesPerPixel*d/4);if(!Number.isInteger(n)||n<1||!Number.isInteger(s)||s<1||!Number.isInteger(a)||a<1||n>this.renderer.capabilities.maxTextureSize||s>this.renderer.capabilities.maxTextureSize)return this.fallback(rt.dimensions);if(i.maxRenderTargetPixels!==void 0&&(!(i.maxRenderTargetPixels>0)||l>i.maxRenderTargetPixels)||g+this.presentation.memoryBytes>Ai)return this.fallback(rt.budget);if(o.format!==Hr)return this.fallback(rt.format);if(c!==0)return this.fallback(rt.msaa);if(!r.supportsOpaqueAccumulation)return this.fallback(rt.receivers);const p=r.accumulationPages.map(B=>{var X;return{...B,ready:B.ready!==!1&&(((X=i.isPageReady)==null?void 0:X.call(i,B.id))??!0)}});if(p.length===0||p.length>Ht)return this.fallback(rt.pages);this.lastFallbackReason=null;const f=this.renderer,S=f.getRenderTarget(),h=f.getActiveCubeFace(),v=f.getActiveMipmapLevel(),b=f.getClearColor(new Ge),R=f.getClearAlpha(),D=f.autoClear,C=f.getViewport(new ee),A=f.getScissor(new ee),M=f.getScissorTest();try{f.autoClear=!1;const B=JSON.stringify([n,s,o.type,o.accumulationType,u]);if(this.targetKey!==B){this.releaseTargets();const P={type:o.type,format:u,minFilter:Ie,magFilter:Ie,depthBuffer:!0,samples:0};this.referenceTarget=new Ke(n,s,{...P,depthTexture:new sr(n,s,Vt)}),this.sampleTarget=new Ke(n,s,{...P,depthTexture:new sr(n,s,Vt)});const se={type:o.accumulationType,format:u,minFilter:Ie,magFilter:Ie,depthBuffer:!1};this.readTarget=new Ke(n,s,se),this.writeTarget=new Ke(n,s,se),this.targetKey=B,this.allocatedBytes=g}const X=JSON.stringify([i.viewKey,i.visibilityOnly?0:i.styleEpoch,a,B]),$=this.stateKey!==X,N=new Set(p.map(({id:P})=>P)),W=[...this.pages.values()].filter(({page:P})=>!N.has(P.id)).map(({page:P})=>P),K=[...$?p:p.filter(P=>{var Be;const se=(Be=this.pages.get(P.id))==null?void 0:Be.page;return(se==null?void 0:se.revision)!==P.revision||(se==null?void 0:se.ready)===!1&&P.ready}),...W].flatMap(P=>[P.screenBounds,...this.pages.has(P.id)?[this.pages.get(P.id).page.screenBounds]:[]]),E=$?p:p.filter(P=>K.some(se=>this.overlaps(P.screenBounds,se)));this.blendMaterial.uniforms.uInverseViewProjection.value.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse).invert(),$&&(this.pages.clear(),this.cursor=0);for(const P of W)this.pages.delete(P.id);for(const P of E)this.publishedStateKeys.delete(P.id);E.length>0&&(this.publicationRetryMs=250),this.cursor%=Math.max(1,p.length);for(const P of p){const se=this.pages.get(P.id);se?se.page=P:this.pages.set(P.id,{page:P,samples:0})}if(this.totalSamples=a,E.length>0||W.length>0){this.clearTarget(this.referenceTarget),r.renderSample(e,0,a),this.blend(E,!0,$,E.map(()=>1));for(const P of E)this.pages.get(P.id).samples=1}else{const P=[...this.pages.values()],se=performance.now(),Be=i.maxPagesPerFrame??4,Te=Number.isFinite(Be)?Math.min(Ht,Math.max(1,Math.floor(Be))):4,Lt=i.maxFrameCpuMilliseconds??4,re=Number.isFinite(Lt)?Math.max(0,Lt):4;let Ze=0;do{const Me=[],je=this.cursor;for(let Pe=0;Pe<P.length;Pe+=1){const gt=(je+Pe)%P.length,pe=P[gt];if(!(pe.samples>=a||pe.page.ready===!1)){if(Me.length===0&&this.clearTarget(this.sampleTarget),!r.renderPageSample(e,pe.page.id,pe.samples,a))return this.fallback(rt.pages);if(Me.push(pe),Ze+=1,this.cursor=(gt+1)%P.length,Ze>=Te||performance.now()-se>=re)break}}if(Me.length===0)break;this.blend(Me.map(({page:Pe})=>Pe),!1,!1,Me.map(Pe=>1/(Pe.samples+1)));for(const Pe of Me)Pe.samples+=1}while(Ze<Te&&performance.now()-se<re)}this.stateKey=X,f.setRenderTarget(S,h,v),f.setViewport(C),f.setScissor(A),f.setScissorTest(M),this.quad.material=this.compositeMaterial;const ve=[...this.pages.values()].every(P=>P.samples>=a);this.compositeMaterial.uniforms.tColor.value=ve?this.readTarget.texture:this.referenceTarget.texture,this.compositeMaterial.uniforms.tDepth.value=this.referenceTarget.depthTexture,this.compositeMaterial.uniforms.uOutputDither.value=S===null,i.visibilityOnly||f.render(this.fullscreenScene,this.fullscreenCamera);let te=!1;for(const{page:P,samples:se}of this.pages.values()){if(P.ready===!1||se<a)continue;const Be=JSON.stringify([X,P.revision]);if(this.publishedStateKeys.get(P.id)!==Be)try{this.presentation.publish(this.readTarget,this.referenceTarget,e,P,a)?this.publishedStateKeys.set(P.id,Be):te=!0}catch(Te){te=!0,console.error("[shadow-simulation] retaining previous corridor capture after copy failure",Te)}}for(const P of this.publishedStateKeys.keys())N.has(P)||this.publishedStateKeys.delete(P);const be=[...this.pages.values()].reduce((P,{page:se,samples:Be})=>{const Te=se.ready!==!1&&this.publishedStateKeys.get(se.id)===JSON.stringify([X,se.revision]);return P+(Te?a:Math.min(Be,a-1))},0),Ae=te?this.publicationRetryMs:void 0;return this.publicationRetryMs=te?Math.min(4e3,this.publicationRetryMs*2):250,{progress:be/(this.pages.size*a),settled:be===this.pages.size*a,...Ae===void 0?{}:{retryAfterMs:Ae},needsRepaint:[...this.pages.values()].some(P=>P.samples<a&&P.page.ready!==!1)}}catch(B){return this.broken=!0,console.error("[shadow-simulation] corridor accumulation failed; using direct rendering",B),this.fallback(rt.renderer)}finally{f.autoClear=D,f.setClearColor(b,R),f.setRenderTarget(S,h,v),f.setViewport(C),f.setScissor(A),f.setScissorTest(M)}}overlaps(e,r){return e.x<=r.x+r.z&&e.x+e.z>=r.x&&e.y<=r.y+r.w&&e.y+e.w>=r.y}clearTarget(e){this.renderer.setRenderTarget(e),this.renderer.setClearColor(0,0),this.renderer.clear(!0,!0,!1)}blend(e,r,i,n){const s=this.blendMaterial.uniforms;s.tPrevious.value=this.readTarget.texture,s.tReference.value=this.referenceTarget.texture,s.tReferenceDepth.value=this.referenceTarget.depthTexture,s.tSample.value=this.sampleTarget.texture,s.tSampleDepth.value=this.sampleTarget.depthTexture,s.uBoundsCount.value=e.length,e.forEach(({receiverBounds:o},c)=>s.uBounds.value[c].set(o.min.x,o.min.z,o.max.x,o.max.z)),s.uRefresh.value=r,s.uResetAll.value=i,s.uWeights.value.set(n),this.quad.material=this.blendMaterial,this.renderer.setRenderTarget(this.writeTarget),this.renderer.render(this.fullscreenScene,this.fullscreenCamera);const a=this.readTarget;this.readTarget=this.writeTarget,this.writeTarget=a}releaseTargets(){var e;for(const r of[this.referenceTarget,this.sampleTarget,this.readTarget,this.writeTarget])(e=r==null?void 0:r.depthTexture)==null||e.dispose(),r==null||r.dispose();this.referenceTarget=null,this.sampleTarget=null,this.readTarget=null,this.writeTarget=null,this.stateKey="",this.targetKey="",this.allocatedBytes=0,this.pages.clear()}releaseScratch(e=!1){e?(this.stateKey="",this.pages.clear()):this.releaseTargets(),this.publishedStateKeys.clear(),this.cursor=0}fallback(e){return this.lastFallbackReason=e,this.releaseTargets(),null}dispose(){this.disposed||(this.disposed=!0,this.releaseTargets(),this.ownsPresentation&&this.presentation.dispose(),this.quad.geometry.dispose(),this.blendMaterial.dispose(),this.compositeMaterial.dispose())}}const Ao=2e4;let Bp=0;var zo;class Up{enabled=Yl((zo=globalThis.location)==null?void 0:zo.hostname);reportId=++Bp;nextCorridorId=0;labels=new Map;pending=new Map;timer;context;observe(e,r){var s;if(!this.enabled)return;const i=performance.now();for(const{id:a}of e)this.labels.has(a)||this.labels.set(a,`C${this.reportId}.${++this.nextCorridorId}`);this.context={total:e.length,ready:e.filter(a=>a.ready).length,completed:e.filter(a=>a.published).length,samples:e.reduce((a,o)=>a+o.samples,0),activeId:r.activeId?this.labels.get(r.activeId):null,memoryBytes:r.memoryBytes,fallbackReason:r.fallbackReason,publicationRetries:(s=r.publicationRetries)==null?void 0:s.map(([a,o])=>({id:this.labels.get(a),attempts:o.attempts,retryInMs:Math.max(0,Math.round(o.retryAt-i))}))};const n=new Set(e.map(({id:a})=>a));for(const a of this.pending.keys())n.has(a)||this.pending.delete(a);for(const a of this.labels.keys())n.has(a)||this.labels.delete(a);for(const a of e){if(a.published){this.pending.delete(a.id);continue}const o=this.pending.get(a.id),c=!o||a.samples>o.progress.samples;this.pending.set(a.id,{progress:a,advancedAt:c?i:o.advancedAt,reported:c?!1:o.reported})}this.schedule()}pause(){clearTimeout(this.timer),this.timer=void 0,this.pending.clear()}schedule(){if(this.timer!==void 0)return;let e=1/0;for(const r of this.pending.values())r.reported||(e=Math.min(e,r.advancedAt+Ao));Number.isFinite(e)&&(this.timer=setTimeout(()=>{var n;this.timer=void 0;const r=performance.now(),i=[];for(const s of this.pending.values())s.reported||r-s.advancedAt<Ao||(s.reported=!0,i.push({...s.progress,id:this.labels.get(s.progress.id),file:(n=s.progress.id.match(/\/([^/"\\]+\.b3dm)/))==null?void 0:n[1],stalledMilliseconds:Math.round(r-s.advancedAt),waitingForReadiness:!s.progress.ready}));i.length>0&&console.warn("[shadow-simulation] corridors without progress for 20 seconds",JSON.stringify({corridors:i,scheduler:this.context})),this.schedule()},Math.max(0,e-performance.now())))}}class kp{constructor(e){this.renderer=e,this.presentation=new ol(e),this.scratch=new Fp(e,this.presentation)}presentation;scratch;captures=[];activeId=null;activeCapture=null;cursor=0;samples=1;disposed=!1;watchdog=new Up;publicationRetries=new Map;restoreOpportunities=new Map;allocationKey="";allocations=new Map;plans=new Map;get memoryBytes(){return this.scratch.memoryBytes}get fallbackReason(){return this.presentation.supportsCapture?this.scratch.fallbackReason:"receivers"}get capturePages(){return this.captures.map(({page:e})=>e)}get pageProgress(){const e=this.scratch.pageProgress;return this.captures.map(({page:r,plan:i,ready:n})=>{const s=n&&this.presentation.has(r,this.samples),a=e.find(({id:o})=>o===r.id);return{id:r.id,samples:s?this.samples:(a==null?void 0:a.samples)??0,totalSamples:this.samples,ready:n,published:s,limited:i.limited,width:i.width,height:i.height}})}updateCaptures(e,r,i,n=!0){var f;const s=Cp(e),a=Is((f=i.options)==null?void 0:f.format),o=2*(a.bytesPerPixel/4+4)+2*a.accumulationBytesPerPixel/4+8,c=Math.max(1,Math.floor(Math.min(i.maxRenderTargetPixels??i.width*i.height,Ai/2/o))),l=r.accumulationPages.map(S=>{const h=this.plans.get(S.id),v=(h==null?void 0:h.orientation)??s,b={groundTexelTargetMeters:S.groundTexelTargetMeters??1,maximumDimension:this.renderer.capabilities.maxTextureSize,maximumPixels:c},R=JSON.stringify([S.receiverBounds.min,S.receiverBounds.max,v.toArray(),b]),D=(h==null?void 0:h.inputs)===R?h.plan:Ap(S.receiverBounds,v,b);return this.plans.set(S.id,{inputs:R,plan:D,orientation:v}),D.camera.layers.mask=e.layers.mask,{page:S,plan:D}}),u=l.find(({page:S})=>{var h;return this.activeId===S.id&&((h=this.activeCapture)==null?void 0:h.page.id)===S.id&&this.activeCapture.page.contentKey===JSON.stringify([S.contentKey??S.revision,this.activeCapture.plan.key])}),d=u?this.activeCapture.plan:null,g=JSON.stringify(l.map(({page:S,plan:h})=>[S.id,h.key,S.screenBounds.z*S.screenBounds.w]));if(g!==this.allocationKey){const S=new Map(Rp(l.filter(({page:h})=>h.id!==(u==null?void 0:u.page.id)).map(({page:h,plan:v})=>({id:h.id,plan:v,screenArea:h.screenBounds.z*h.screenBounds.w})),Ts-(d?d.width*d.height*8:0)));u&&d&&S.set(u.page.id,d),this.allocationKey=g,this.allocations=S}this.captures=l.map(({page:S,plan:h})=>{var D;const v=this.allocations.get(S.id)??h,b=JSON.stringify([S.contentKey??S.revision,v.key]),R=(!n||S.ready!==!1)&&(((D=i.isPageReady)==null?void 0:D.call(i,S.id))??!0);return{page:{...S,ready:R,captureKey:JSON.stringify([v.camera.quaternion.toArray(),v.width,v.height]),captureSize:{width:v.width,height:v.height},contentKey:b,revision:b,screenBounds:new ee(0,0,1,1)},plan:v,ready:R}});const p=new Set(this.captures.map(({page:S})=>S.id));for(const S of this.plans.keys())p.has(S)||this.plans.delete(S);for(const[S,h]of this.publicationRetries){const v=this.captures.find(({page:b})=>b.id===S);(!v||v.page.contentKey!==h.contentKey)&&this.publicationRetries.delete(S)}this.presentation.beginFrame(this.capturePages);for(const{page:S,plan:h}of this.captures)this.presentation.prepareRestore(S,i.samples,new Z().multiplyMatrices(h.camera.projectionMatrix,h.camera.matrixWorldInverse));i.active&&this.reportProgress()}reportProgress(){this.watchdog.enabled&&this.watchdog.observe(this.pageProgress,{activeId:this.activeId,memoryBytes:this.memoryBytes,fallbackReason:this.fallbackReason,publicationRetries:[...this.publicationRetries.entries()]})}yieldForRestore(e,r){if(!this.presentation.isRestorePending(e,r))return!1;const i=JSON.stringify([e.id,r]),n=e.contentKey??e.revision;if(this.restoreOpportunities.get(i)===n)return!1;if(this.restoreOpportunities.set(i,n),this.restoreOpportunities.size>1024){const s=this.restoreOpportunities.keys().next().value;s!==void 0&&this.restoreOpportunities.delete(s)}return!0}render(e,r,i){var g;if(this.disposed)return null;if(!i.active)return this.watchdog.pause(),null;if(this.samples=i.samples,this.updateCaptures(e,r,i),!this.presentation.supportsCapture)return this.scratch.releaseScratch(),this.activeId=null,null;const n=performance.now();let s,a=this.captures.find(({page:p})=>p.id===this.activeId);const o=a&&!a.ready&&this.captures.some(({page:p,ready:f})=>f&&p.id!==(a==null?void 0:a.page.id)&&!this.presentation.has(p,i.samples));if((!a||o||this.presentation.has(a.page,i.samples))&&(this.scratch.releaseScratch(!0),this.activeId=null,a=void 0),a){const p=this.publicationRetries.get(a.page.id);p&&p.retryAt>n&&(s=Math.ceil(p.retryAt-n))}if(!a&&this.captures.length>0)for(let p=0;p<this.captures.length;p+=1){const f=(this.cursor+p)%this.captures.length,S=this.captures[f];if(!S.ready||this.presentation.has(S.page,i.samples)||this.yieldForRestore(S.page,i.samples))continue;const h=this.publicationRetries.get(S.page.id);if(h&&h.retryAt>n){s=Math.min(s??1/0,Math.ceil(h.retryAt-n));continue}a=S,s=void 0,this.activeId=S.page.id,this.activeCapture=S,this.cursor=(f+1)%this.captures.length;break}let c=null;if(a!=null&&a.ready&&s===void 0){this.activeCapture=a;const{page:p,plan:f}=a,S=(h,v,b)=>r.renderPageSample(h,p.id,v,b,p.screenBounds);if(c=this.scratch.render(f.camera,{accumulationPages:[p],supportsOpaqueAccumulation:r.supportsOpaqueAccumulation,renderSample:S,renderPageSample:(h,v,b,R)=>S(h,b,R)},{...i,width:f.width,height:f.height,viewKey:f.key,visibilityOnly:!0,isPageReady:void 0,maxPagesPerFrame:i.maxPagesPerFrame??4}),c!=null&&c.settled)this.publicationRetries.delete(p.id),this.scratch.releaseScratch(!0),this.activeId=null;else if((c==null?void 0:c.retryAfterMs)!==void 0){const h=(((g=this.publicationRetries.get(p.id))==null?void 0:g.attempts)??0)+1;s=Math.max(250,c.retryAfterMs);const v=h>=3;v&&(s=Math.max(1e3,s)),this.publicationRetries.set(p.id,{contentKey:p.contentKey,attempts:v?0:h,retryAt:n+s}),v&&(this.scratch.releaseScratch(),this.activeId=null,this.captures.some(({page:b,ready:R})=>{var D;return R&&b.id!==p.id&&!this.presentation.has(b,i.samples)&&(((D=this.publicationRetries.get(b.id))==null?void 0:D.retryAt)??0)<=n})&&(s=void 0))}if(!c)return null}!this.activeId&&!this.captures.some(({page:p,ready:f})=>f&&!this.presentation.has(p,i.samples))&&this.scratch.releaseScratch();const l=this.pageProgress;this.reportProgress();const u=l.reduce((p,f)=>p+(f.published?i.samples:Math.min(f.samples,i.samples-1)),0),d=l.length*i.samples;return{progress:d>0?u/d:1,settled:d===u,needsRepaint:l.some(p=>p.ready&&!p.published)&&s===void 0,...s===void 0?{}:{retryAfterMs:s}}}renderHard(e,r,i){var A;if(this.disposed||!i.active)return{published:0,needsRepaint:!1};if(this.updateCaptures(e,r,{...i,samples:1},i.isPageReady===void 0),!r.supportsOpaqueAccumulation||!this.presentation.supportsCapture||!this.renderer.extensions.has("EXT_color_buffer_float"))return{published:0,needsRepaint:!1};const n=new Map(this.captures.map(({page:M})=>[M.id,this.presentation.getCapturedSize(M.id)])),s=this.captures.reduce((M,{page:U,plan:L})=>{const B=n.get(U.id);return M+Math.max(L.width*L.height,B?B.width*B.height:0)*8},0)>Ts,a=({page:M,plan:U})=>{const L=n.get(M.id);return L?(L.width*L.height-U.width*U.height)*8:0},o=this.captures.filter(({page:M,plan:U,ready:L})=>{if(!L)return!1;const B=n.get(M.id);return this.presentation.hasAtLeast(M,1)&&(!s||!B||B.width*B.height<=U.width*U.height)?!1:!(B&&B.samples>1&&!s&&(B.width!==U.width||B.height!==U.height)&&this.presentation.canReplay(M))});s&&o.sort((M,U)=>a(U)-a(M));const c=o.find(({page:M})=>!this.yieldForRestore(M,1));if(!c)return{published:0,needsRepaint:o.length>0};const{page:l,plan:u}=c;if(s&&this.presentation.hasAtLeast(l,1)&&a(c)>0){const M=n.get(l.id),U=Math.max(u.width,Math.ceil(M.width/2))*Math.max(u.height,Math.ceil(M.height/2))*8;if(this.memoryBytes+U>Ai)return{published:0,needsRepaint:!1,retryAfterMs:1e3};try{const L=this.presentation.downsample(l,u.width,u.height);return{published:L?1:0,needsRepaint:L,...L?{}:{retryAfterMs:1e3}}}catch{return{published:0,needsRepaint:!1,retryAfterMs:1e3}}}if(this.memoryBytes+u.width*u.height*16>Ai)return{published:0,needsRepaint:!1,retryAfterMs:1e3};const d=this.renderer,g=d.getRenderTarget(),p=d.getActiveCubeFace(),f=d.getActiveMipmapLevel(),S=d.getViewport(new ee),h=d.getScissor(new ee),v=d.getScissorTest(),b=d.autoClear,R=d.getClearColor(new Ge),D=d.getClearAlpha(),C=new Ke(u.width,u.height,{type:Et,format:tr,minFilter:Ie,magFilter:Ie,samples:0,depthTexture:new sr(u.width,u.height,Vt)});try{d.initRenderTarget(C),d.autoClear=!1,d.setRenderTarget(C),d.setViewport(new ee(0,0,u.width,u.height)),d.setScissorTest(!1),d.setClearColor(0,0),d.clear(!0,!0,!1);const U=r.renderPageSample(u.camera,l.id,0,1,l.screenBounds)&&this.presentation.publish(C,C,u.camera,l,1);return{published:U?1:0,needsRepaint:U&&o.length>1,...U?{}:{retryAfterMs:1e3}}}catch(M){return console.warn("[shadow-simulation] retaining completed corridor after hard-stage capture failure",M),{published:0,needsRepaint:!1,retryAfterMs:1e3}}finally{d.setRenderTarget(g,p,f),d.setViewport(S),d.setScissor(h),d.setScissorTest(v),d.setClearColor(R,D),d.autoClear=b,(A=C.depthTexture)==null||A.dispose(),C.dispose()}}pausePending(){this.watchdog.pause()}cancelPending(){this.watchdog.pause(),this.activeId!==null&&this.scratch.releaseScratch(),this.activeId=null,this.publicationRetries.clear(),this.restoreOpportunities.clear()}dispose(){this.disposed||(this.disposed=!0,this.watchdog.pause(),this.scratch.dispose(),this.presentation.dispose(),this.captures=[],this.plans.clear(),this.allocations=new Map,this.publicationRetries.clear(),this.restoreOpportunities.clear())}}const Hp=750,zp=5e3,Co=new Set,Vp=t=>{const e=$l({assetUrl:t,production:!0});let r=null,i=!1,n=!1,s=0,a=null;const o=()=>{if(r&&(r.onmessage=null,r.onerror=null,r.onmessageerror=null,r.terminate(),r=null),a){const d=a;a=null,clearTimeout(d.timer),d.finish(null)}},c=()=>{n=!0,o()},l=(d,g=[])=>{if(!e||i||n||a||typeof Worker>"u")return Promise.resolve(null);try{return r||(r=new Worker(new URL("https://cismet.github.io/carma-pr-deployments/812/geoportal/assets/shadow-corridor-cache.worker-VQZLpq-f.js",import.meta.url),{type:"module"}),r.onerror=c,r.onmessageerror=c,r.onmessage=p=>{var S;if(!a||((S=p.data)==null?void 0:S.id)!==a.id)return;const f=a;a=null,clearTimeout(f.timer),f.finish(p.data)}),new Promise(p=>{const f=setTimeout(c,d.operation===xi.read?Hp:zp);a={id:d.id,timer:f,finish:p};try{r.postMessage(d,g)}catch{c()}})}catch{return c(),Promise.resolve(null)}},u={cancelPending:o,get enabled(){return!!(e&&!i&&!n&&typeof Worker<"u")},get busy(){return a!==null},async read(d){const g=$e(d);if(!g)return null;const p=await l({id:++s,producerAssetUrl:e??"",identity:d,operation:xi.read}),f=p==null?void 0:p.record;return!i&&(f==null?void 0:f.schema)===ki.schema&&$e(f.identity)===g&&bo(f)?f:null},async write(d,g,p){if(!$e(d)||!bo(g))return!1;const f=[g.visibility,g.depth];if(f.some(h=>!(h.buffer instanceof ArrayBuffer)||h.byteOffset!==0||h.byteLength!==h.buffer.byteLength))return!1;const S=await l({id:++s,producerAssetUrl:e??"",identity:d,operation:xi.write,capture:g,costs:p},[...new Set(f.map(h=>h.buffer))]);return!i&&(S==null?void 0:S.written)===!0},async writePacked(d,g,p){if(!$e(d)||!Ip(g)||!(g.rgba.buffer instanceof ArrayBuffer)||g.rgba.byteOffset!==0||g.rgba.byteLength!==g.rgba.buffer.byteLength)return!1;const f=await l({id:++s,producerAssetUrl:e??"",identity:d,operation:xi.writePacked,capture:g,costs:p},[g.rgba.buffer]);return!i&&(f==null?void 0:f.written)===!0},dispose(){i=!0,o(),Co.delete(u)}};return Co.add(u),u};class Wp{constructor(e,r,i){this.scene=e,this.renderer=r,this.host=i,this.frameCache=new Tu(r),this.pages=new Tp(e,r,i.maximumMapSize**2*8*2,i.maximumMapSize,i.frame),this.accumulation=new kp(r),i.worldBasis&&i.corridorRevision&&i.dateTimeKey&&this.accumulation.presentation.setPersistence({cache:this.persistentCache,identity:(n,s)=>{var u,d,g;const a=this.pages.getPageGeometry(n.id),o=(u=i.dateTimeKey)==null?void 0:u.call(i);if(!a||!o||!n.captureKey)return null;const c=s===1?(d=i.receiverStageError)==null?void 0:d.call(i,n.receiverBounds):void 0,l=(g=i.corridorRevision)==null?void 0:g.call(i,a.casterBounds,c,n.receiverBounds);return l?{source:"shared-scene-corridor-v2",dateTime:o,corridor:n.id,resolution:JSON.stringify([a.width,a.height,n.captureKey]),geometryFingerprint:l,samples:s}:null},worldBasis:i.worldBasis,runIdleRender:i.runIdleRender,requestRepaint:i.requestRepaint})}pages;viewKey="";idleStats=null;accumulation;persistentCache=Vp(import.meta.url);accumulationSettled=!1;viewport=new Nt(1,1);lastFrame=null;frameCache;presentedPageIds=new Set;casterRevisionsDirty=!0;casterRevisionCursor=0;hardRetryTimer=null;update(e,r,i,n,s=r.renderCamera){this.viewport.copy(r.viewport);const a=JSON.stringify([e.map(({id:o,bounds:c,receiverObjectId:l})=>[o,c.min,c.max,l]),s.projectionMatrix.elements,s.matrixWorldInverse.elements,r.viewport,i,n]);a!==this.viewKey&&(this.pages.setView(e,s,r.viewport,n,i,this.host.receiverBiasLimit),this.viewKey=a,this.casterRevisionsDirty=!0,this.casterRevisionCursor=0)}updatePresentation(e,r=e.renderCamera){this.viewport.copy(e.viewport),this.pages.updatePresentation(r)}invalidateContent(e){(e==null?void 0:e.length)!==0&&(this.casterRevisionsDirty=!0,this.casterRevisionCursor=0,this.frameCache.invalidate(),e?e.length>0&&this.pages.invalidateCasters(e):this.pages.clearCache())}async prewarm({cells:e,frame:r,lighting:i,targetPixels:n,samples:s,prepare:a,signal:o,yieldToInput:c=Mp,planningCamera:l}){if(o.aborted)return null;this.idleStats=null,this.pages.setPrewarmView(e,l??r.renderCamera,r.viewport,n,i,s);try{return this.idleStats=await bp({pages:this.pages.prewarmPages,signal:o,prepare:a,yieldToInput:c,render:(u,d,g)=>{if(d!=null&&d.parent)throw new Error("Idle caster lease must own an unmounted group");const p=this.host.light.visible;this.host.light.visible=!1,d&&this.scene.add(d);try{let f=null;const S=()=>{f=this.pages.prewarmNext(r.renderCamera,u,{signal:g})};return this.host.runIdleRender?this.host.runIdleRender(S):S(),f??{pageId:u,rendered:0,cachedSamples:0,totalSamples:s,complete:!1,budgetLimited:!1,aborted:!0}}finally{d&&this.scene.remove(d),this.host.light.visible=p}}}),this.idleStats}finally{this.pages.clearPrewarmView()}}renderProgressive(e,r){if(this.lastFrame=r,!r.active)return this.pausePending(),null;if(this.pages.accumulationPages.length===0)return this.accumulationSettled=!1,null;const i=this.renderWithHost(e,()=>{const a=this.captureHard(e);if(this.casterRevisionsDirty&&this.host.corridorRevision)return null;const o=this.accumulation.presentation.capture(this.scene,()=>this.accumulation.render(e,this.pages,{...r,visibilityOnly:!0,maxPagesPerFrame:Math.min(r.samples,64),maxFrameCpuMilliseconds:r.maxFrameCpuMilliseconds??2,isPageReady:c=>this.isPageReady(c,!1)}));return o&&this.renderContent(e,null,r.samples),o&&{...o,settled:o.settled&&!a.needsRepaint,needsRepaint:o.needsRepaint||a.needsRepaint}});if(!i)return this.accumulationSettled=!1,null;const n="retryAfterMs"in i?i.retryAfterMs:void 0;n!==void 0&&this.hardRetryTimer===null&&(this.hardRetryTimer=globalThis.setTimeout(()=>{var a,o;this.hardRetryTimer=null,(o=(a=this.host).requestRepaint)==null||o.call(a)},Math.max(1,n)));const s=i.settled&&!this.accumulationSettled;return this.accumulationSettled=i.settled,{...i,settled:s}}render(e,r,i,n=!0){return this.pages.accumulationPages.length===0?!1:(this.renderWithHost(e,()=>{n&&this.captureHard(e),this.renderContent(e,r,i,!n)}),!0)}cancelPending(e=!1){this.accumulation.cancelPending(),e&&this.accumulation.presentation.beginSolarTransition(),this.pausePending()}pausePending(){this.accumulation.pausePending(),this.hardRetryTimer!==null&&(globalThis.clearTimeout(this.hardRetryTimer),this.hardRetryTimer=null),this.accumulationSettled=!1}isPageReady(e,r){var n,s;const i=this.pages.getPageGeometry(e);return i?!this.host.isCorridorReady||this.host.isCorridorReady(i.casterBounds,r?(s=(n=this.host).receiverStageError)==null?void 0:s.call(n,i.receiverBounds):void 0,i.receiverBounds):!1}captureHard(e){var i,n,s,a,o,c;if(this.casterRevisionsDirty&&this.host.corridorRevision){const l=this.pages.accumulationPages,u=performance.now();let d=0;for(;this.casterRevisionCursor<l.length;){if(d>=4||d>0&&performance.now()-u>=4)return(n=(i=this.host).requestRepaint)==null||n.call(i),{published:0,needsRepaint:!0};const g=l[this.casterRevisionCursor++];d+=1;const p=this.pages.getPageGeometry(g.id);if(!p)continue;const f=this.host.corridorRevision(p.casterBounds,(a=(s=this.host).receiverStageError)==null?void 0:a.call(s,p.receiverBounds),p.receiverBounds);this.pages.setCasterRevision(g.id,f)&&this.frameCache.invalidate()}this.casterRevisionsDirty=!1,this.casterRevisionCursor=0}const r=this.accumulation.presentation.capture(this.scene,()=>{var l;return this.accumulation.renderHard(e,this.pages,{...this.lastFrame,width:this.viewport.x,height:this.viewport.y,viewKey:this.viewKey,styleEpoch:((l=this.lastFrame)==null?void 0:l.styleEpoch)??0,samples:1,active:!0,isPageReady:u=>this.isPageReady(u,!0)})});return r.needsRepaint&&((c=(o=this.host).requestRepaint)==null||c.call(o)),r.retryAfterMs!==void 0&&this.hardRetryTimer===null&&(this.hardRetryTimer=globalThis.setTimeout(()=>{var l,u;this.hardRetryTimer=null,(u=(l=this.host).requestRepaint)==null||u.call(l)},r.retryAfterMs)),r}renderContent(e,r,i,n=!1){var u,d,g,p,f;const s=this.accumulation.capturePages;this.accumulation.presentation.beginFrame(s);const a=s.map(S=>{const h=this.accumulation.presentation.canPresent(S);return{page:S,replay:h,ready:h||(!this.host.corridorRevision||!this.casterRevisionsDirty)&&this.isPageReady(S.id,!0)}});let o=!1;const c=()=>{this.presentedPageIds.clear();const S=this.host.light.visible,h=r===null&&a.some(({replay:v})=>v);this.host.light.visible=!0;try{let v=new Set;r===null?v=this.accumulation.presentation.renderNative(this.scene,a.filter(b=>b.replay).map(b=>b.page),()=>this.renderer.render(this.scene,e)):this.renderer.render(this.scene,e);for(const{page:b,replay:R,ready:D}of a){if(!D)continue;if(v.has(b.id)){this.presentedPageIds.add(b.id);continue}if(r===null&&!R){this.presentedPageIds.add(b.id);continue}if(n&&!R){this.presentedPageIds.add(b.id);continue}const C=n||h&&R;this.host.light.visible=C,this.accumulation.presentation.render(this.scene,b,i,()=>C?this.pages.renderPageColor(e,b.id):this.pages.renderPageSample(e,b.id,r??0,r===null?1:i))?this.presentedPageIds.add(b.id):o=!0}}finally{this.host.light.visible=S}};if((u=this.lastFrame)!=null&&u.active&&r===null&&this.accumulation.presentation.supportsCapture){const S=JSON.stringify([this.viewKey,e.projectionMatrix.elements,e.matrixWorldInverse.elements,e.layers.mask,this.lastFrame.styleEpoch,((g=(d=this.host).visualEpoch)==null?void 0:g.call(d))??0,this.accumulation.presentation.revision,a.map(({page:h,replay:v,ready:b})=>[h.id,h.contentKey??h.revision,v,b])]);this.frameCache.render(S,this.lastFrame.width,this.lastFrame.height,c),o&&this.frameCache.invalidate()}else this.frameCache.invalidate(),c();const l=a.filter(({page:S,replay:h})=>this.presentedPageIds.has(S.id)&&(this.accumulation.presentation.hasAtLeast(S,1)||!h&&(r===null||i===1))).map(({page:S})=>S);l.length>0&&((f=(p=this.host).onPresentedPages)==null||f.call(p,l,s))}renderWithHost(e,r){const{renderer:i,host:n}=this,s=n.light.visible,a=n.sky.visible,o=n.overlay.visible,c=i.autoClear;n.light.visible=!1,i.autoClear=!1;try{a&&this.renderHostObject(n.sky,e),n.sky.visible=!1,n.overlay.visible=!1;const l=r();return l!==null&&o&&(n.overlay.visible=!0,this.renderHostObject(n.overlay,e)),l}finally{i.autoClear=c,n.light.visible=s,n.sky.visible=a,n.overlay.visible=o}}renderHostObject(e,r){const i=this.scene.children.filter(n=>n!==e&&n.visible);for(const n of i)n.visible=!1;try{this.renderer.render(this.scene,r)}finally{for(const n of i)n.visible=!0}}get pageLevels(){return this.pages.pageLevels}get stats(){return{...this.pages.stats,framePresentation:this.frameCache.stats,corridorAccumulation:{retained:this.accumulation.presentation.stats,pageSamples:this.accumulation.pageProgress,memoryBytes:this.accumulation.memoryBytes,fallbackReason:this.accumulation.fallbackReason},...this.idleStats?{idlePrewarm:this.idleStats}:{},...this.host.auditCorridors?{corridorAudit:this.host.auditCorridors(this.pages.accumulationPages.flatMap(e=>{const r=this.pages.getPageGeometry(e.id);return r?[{id:e.id,casterBounds:r.casterBounds,receiverBounds:r.receiverBounds}]:[]}))}:{}}}dispose(){this.hardRetryTimer!==null&&globalThis.clearTimeout(this.hardRetryTimer),this.hardRetryTimer=null,this.accumulation.dispose(),this.frameCache.dispose(),this.persistentCache.dispose(),this.pages.dispose()}}function Gp(){const t=new WeakSet;return e=>{let r=!1;for(const i of e)if(!(!i.providesTerrain||!i.hasRenderableContent)&&(r=!0,t.has(i)||i.hasRenderableContent()))return t.add(i),!1;return r}}const es=(t,e,r)=>JSON.stringify([t.min.toArray(),t.max.toArray(),e,r==null?void 0:r.min.toArray(),r==null?void 0:r.max.toArray()]),jp=(t,e)=>{const r=new Map(t.map(s=>[s.id,s])),i=[],n=s=>i.push(new Le(new T(...s.minimum),new T(...s.maximum)));for(const s of e){const a=r.get(s.id);a&&s.minimum.every((c,l)=>c===a.minimum[l])&&s.maximum.every((c,l)=>c===a.maximum[l])||(a&&n(a),n(s)),r.delete(s.id)}for(const s of r.values())n(s);return i},Yp=(t,e,r)=>{const i=new Set(r.map(({id:n})=>n));return t.filter(n=>{if(n.loadReason==="shadow")return!1;const s=e.filter(({bounds:a})=>n.minimum[0]<a.max.x&&n.maximum[0]>a.min.x&&n.minimum[2]<a.max.z&&n.maximum[2]>a.min.z);return s.length>0&&s.every(({id:a})=>i.has(a))}).map(({id:n})=>n)},$p=(t,e,r)=>{if(![t,e,r].every(Number.isFinite)||r<=0)throw new RangeError("Invalid shared-scene Mercator basis");return new Z().set(r,0,0,t,0,0,r,e,0,r,0,0,0,0,0,1)},Io=(t,e,r)=>Kl(e.reduce((i,n)=>{if(n.loadReason==="shadow")return i;const[s,,a]=n.minimum,[o,,c]=n.maximum;return s<t.max.x&&o>t.min.x&&a<t.max.z&&c>t.min.z&&Number.isFinite(n.errorPixels)?Math.max(i,n.errorPixels):i},r),r),Kp=({stageErrorPixels:t,targetErrorPixels:e,groundTexelTargetMeters:r,finalBiasMeters:i,maximumCoarseBiasMeters:n})=>{const s=Math.max(1,Math.min(n/i,t/Math.max(e,.25)));return Math.min(n,i*s,Math.max(i,r*2))},qp=({id:t,casterBounds:e,sunElevationDegrees:r,regions:i,volumes:n})=>{const s=new Set(i.flatMap(u=>u.selectedTileIds)),a=new Map(n.map(u=>[u.id,u])),o=[],c=[];let l=0;for(const u of s){const d=a.get(u);if(!d){o.push(u);continue}d.loadReason==="shadow"&&(l+=1),e.intersectsBox(new Le(new T(...d.minimum),new T(...d.maximum)))||c.push(u)}return{id:t,ready:i.length>0&&i.every(u=>u.ready),selectedTiles:s.size,offscreenTiles:l,reviewCount:r>=10&&s.size>10,nearHorizon:r<10,exactPrismTested:i.length>0&&i.every(u=>u.receiverPrismTested),visitedNodes:i.reduce((u,d)=>u+d.visitedNodes,0),broadPhaseNodes:i.reduce((u,d)=>u+d.broadPhaseNodes,0),rejectedPrismNodes:i.reduce((u,d)=>u+d.rejectedPrismNodes,0),missingPublishedVolumes:o,outsideEnvelope:c,selectedTileIds:[...s].sort()}},Xp={[De.STANDARD]:0,[De.HIGH]:1,[De.MAX]:1,[De.ULTRA]:1,[De.EXTREME]:1},Qp=128,Zp={[De.STANDARD]:0,[De.HIGH]:0,[De.MAX]:1,[De.ULTRA]:2,[De.EXTREME]:3},Jp=(t,e,r,i)=>{var u,d;const n=t==null?void 0:t.tileManager;if(!t||!n||!Number.isFinite(n.deltaZoom)||!Number.isFinite(n.tileSize)||!n.tileManager)return()=>{};const s={deltaZoom:n.deltaZoom,terrainTileSize:n.tileSize,sourceTileSize:n.tileManager.tileSize,meshSize:t.meshSize,calculateTileZoom:(u=n.tileManager._source)==null?void 0:u.calculateTileZoom},o=1-Xp[r],c=e*2**o;n.deltaZoom=o,n.tileSize=c,n.tileManager.tileSize=c,t.meshSize=Qp;const l=Zp[r];if(l>0&&n.tileManager._source){s.calculateTileZoom||i==null||i();const g=n.tileManager._source.calculateTileZoom;g&&(n.tileManager._source.calculateTileZoom=(...p)=>g(...p)+l)}return t._meshCache={},(d=n.freeRtt)==null||d.call(n),()=>{var g;n.deltaZoom=s.deltaZoom,n.tileSize=s.terrainTileSize,n.tileManager.tileSize=s.sourceTileSize,t.meshSize=s.meshSize,n.tileManager._source&&(n.tileManager._source.calculateTileZoom=s.calculateTileZoom),t._meshCache={},(g=n.freeRtt)==null||g.call(n)}},eg=1024,tg=2048,rg=4096,ig=1e6,ng=2e6,Do=(t,e=sc())=>{const r=Math.max(256,Math.floor(t)),i=ac(e);return i==="phone"?{maxShadowMapSize:Math.min(r,eg),maxAccumulationPixels:ig}:i==="tablet"?{maxShadowMapSize:Math.min(r,tg),maxAccumulationPixels:ng}:{maxShadowMapSize:Math.min(r,rg),maxAccumulationPixels:Number.POSITIVE_INFINITY}},sg=(t,e)=>{if(t===Number.POSITIVE_INFINITY)return t;const r=Is(e.format),i=e.msaaSamples??Jo.msaaSamples,n=2*(r.bytesPerPixel+4)*(1+Math.max(0,i))+3*r.accumulationBytesPerPixel;return Math.min(t,Math.floor(256*1024*1024/n))},Po=(t,e=ur,r=2560*1440,i=1)=>Math.floor(Math.max(256**2,Math.min(t**2,ht[e].depthSize**2*(Number.isFinite(r)&&r>0?r/(2560*1440):1)*i**2))),Oo=new WeakMap,ag=t=>{const e=Oo.get(t);if(e)return e;const r=t.getContext(),i=r.getInternalformatParameter(r.RENDERBUFFER,r.DEPTH_COMPONENT24,r.SAMPLES),n=a=>[0,...Array.from(r.getInternalformatParameter(r.RENDERBUFFER,a,r.SAMPLES)).filter(o=>i.includes(o))],s={maxTextureSize:t.capabilities.maxTextureSize,maxRenderbufferSize:r.getParameter(r.MAX_RENDERBUFFER_SIZE),hdrSamples:n(r.RGBA16F),sdrSamples:n(r.RGBA8)};return Oo.set(t,s),s},og=(t,e)=>{if(t.shadowBufferFormat===mt.HDR_32)return 0;const r=t.shadowMsaaSamples===Ps?1/0:t.shadowMsaaSamples;return Math.max(0,...e.filter(i=>Number.isFinite(i)&&i<=r))},At=new WeakMap,cl=t=>{let e=At.get(t);return e||(e={snapshot:null,listeners:new Set,demandListeners:new Set},At.set(t,e)),e},cv=t=>{var e;return((e=At.get(t))==null?void 0:e.snapshot)??null},lv=(t,e)=>{const r=cl(t),i=r.listeners.size===0;if(r.listeners.add(e),i)for(const n of r.demandListeners)n(!0);return()=>{if(!(!r.listeners.delete(e)||r.listeners.size>0)){r.snapshot=null;for(const n of r.demandListeners)n(!1);r.demandListeners.size===0&&At.delete(t)}}},cg=(t,e)=>{const r=cl(t);return r.demandListeners.add(e),r.listeners.size>0&&e(!0),()=>{r.demandListeners.delete(e),r.listeners.size===0&&r.demandListeners.size===0&&At.delete(t)}},No=t=>{var e;return(((e=At.get(t))==null?void 0:e.listeners.size)??0)>0},lg=(t,e)=>{const r=At.get(t);if(r!=null&&r.listeners.size){r.snapshot=e;for(const i of r.listeners)i()}},ts=t=>{const e=At.get(t);if(e){e.snapshot=null;for(const r of e.listeners)r();e.listeners.size===0&&e.demandListeners.size===0&&At.delete(t)}},Lo=.01,ug=500,rs=1500,is=(t=ur)=>({lastFrameMs:null,sampleDurationMs:0,sampleCount:0,recoveryDurationMs:0,updateIntervalMs:ht[t].targetFps?1e3/ht[t].targetFps:0,targetFrameMs:ht[t].targetFps?1e3/ht[t].targetFps:0,depthScale:1,trial:null,adaptationBlocked:!1}),ns=(t,e,r,{enabled:i=!0,allowCadenceReduction:n=!0}={})=>{var S,h;if(t.targetFrameMs===0)return t;if(!i)return t.lastFrameMs===null&&t.updateIntervalMs===t.targetFrameMs&&t.depthScale===1&&!t.adaptationBlocked?t:{...t,lastFrameMs:null,sampleDurationMs:0,sampleCount:0,recoveryDurationMs:0,updateIntervalMs:t.targetFrameMs,depthScale:1,trial:null,adaptationBlocked:!1};if(!r||!Number.isFinite(e))return t.lastFrameMs===null?t:{...t,lastFrameMs:null,sampleDurationMs:0,sampleCount:0,recoveryDurationMs:0,depthScale:1,trial:null,adaptationBlocked:!1};const s=t.lastFrameMs===null?0:e-t.lastFrameMs;if(s<=0)return{...t,lastFrameMs:e};const a=t.sampleDurationMs+s,o=t.sampleCount+1;if(a<ug)return{...t,lastFrameMs:e,sampleDurationMs:a,sampleCount:o};const c=a/o,l=t.targetFrameMs;if(t.trial&&c>=t.trial.baselineFrameMs*.95||t.adaptationBlocked)return{...t,lastFrameMs:e,sampleDurationMs:0,sampleCount:0,trial:null,adaptationBlocked:!0,updateIntervalMs:((S=t.trial)==null?void 0:S.updateIntervalMs)??t.updateIntervalMs,depthScale:((h=t.trial)==null?void 0:h.depthScale)??t.depthScale};const g=c<l/1.2?t.recoveryDurationMs+a:0,p=n?c>l+Lo?Math.min(l*4,t.updateIntervalMs+l):g>=rs?Math.max(l,t.updateIntervalMs-l):t.updateIntervalMs:l,f=c>l+Lo&&(!n||t.updateIntervalMs>=l*4)?Math.max(.5,t.depthScale-.25):g>=rs?Math.min(1,t.depthScale+.25):t.depthScale;return{...t,lastFrameMs:e,sampleDurationMs:0,sampleCount:0,recoveryDurationMs:g>=rs?0:g,updateIntervalMs:p,depthScale:f,trial:p>t.updateIntervalMs||f<t.depthScale?{baselineFrameMs:c,updateIntervalMs:t.updateIntervalMs,depthScale:t.depthScale}:null,adaptationBlocked:!1}},dg=900,Ti=.01,hg=.25,mg=1e3,Fo=4e3,fg=10,ll=2500,pg="shadow-simulation-raster-dem",gg=200,ul=.5,vg="shadow-simulation-sky-light",bi=100,Bo=1e3,yg=1e3,Uo=100,Cr="carma-shadow-map-style-base",Sg=(t,e=ec,r=()=>!0,i=()=>"opaque",n=De.MAX)=>{const s=e.id,a=t;if(typeof a.getTerrain!="function"||typeof a.getSource!="function"||typeof a.setTerrain!="function")return Object.assign(()=>{},{refresh:()=>{}});const o=a.getTerrain(),c=new Map,l=new Map;let u=!1,d=!1,g=!1,p=null,f=!1,S,h=null,v=()=>{},b=null;const R=()=>{p&&(f?delete p.getMeshFrameDelta:p.getMeshFrameDelta=S,p=null,S=void 0,f=!1)},D=()=>{const N=a.terrain;!N||N===p||(R(),typeof N.getMeshFrameDelta=="function"&&(f=!Object.prototype.hasOwnProperty.call(N,"getMeshFrameDelta"),S=N.getMeshFrameDelta,N.getMeshFrameDelta=()=>0,p=N))},C=()=>{var W;const N=a.terrain;!N||N===h||(v(),h=N,v=Jp(N,e.tileSize,n,()=>{var J;(J=t.setSourceTileLodParams)==null||J.call(t,9.314,3,e.id)}),(W=t.triggerRepaint)==null||W.call(t))},A=N=>`${N.type}:${String(N.source)}:${String(N["source-layer"])}`,M=()=>{var J;const W=t.getStyle().layers??[];for(const K of W){if(!tu(K))continue;const E=A(K);let ve=l.get(K.id);const te=t.getLayoutProperty(K.id,"visibility");!ve||ve.signature!==E?(ve={signature:E,value:te},l.set(K.id,ve)):te!=="none"&&(ve.value=te),te!=="none"&&t.setLayoutProperty(K.id,"visibility","none")}if(r()){t.getLayer(Cr)||(t.addLayer({id:Cr,type:"background",paint:{"background-color":Dn.baseColor,"background-opacity":Dn.opacity}},(J=W[0])==null?void 0:J.id),g=!0);for(const K of W){if(K.id===Cr||K.type==="custom")continue;const E=Dn.opaqueDrapeProperties.get(K.type);if(!E)continue;const ve=A(K);let te=c.get(K.id);const be=t.getPaintProperty(K.id,E);!te||te.signature!==ve?(te={signature:ve,property:E,value:be},c.set(K.id,te)):be!==1&&(te.value=be),be!==1&&t.setPaintProperty(K.id,E,1)}}},U=N=>{var W;for(const[J,K]of N)try{const E=(W=t.getStyle().layers)==null?void 0:W.find(({id:ve})=>ve===J);E&&A(E)===K.signature&&t.getLayoutProperty(J,"visibility")==="none"&&t.setLayoutProperty(J,"visibility",K.value===void 0?null:K.value)}catch{}N.clear()},L=()=>{var N;for(const[W,J]of c)try{const K=(N=t.getStyle().layers)==null?void 0:N.find(({id:E})=>E===W);K&&A(K)===J.signature&&t.getPaintProperty(W,J.property)===1&&t.setPaintProperty(W,J.property,J.value===void 0?null:J.value)}catch{}if(c.clear(),g){g=!1;try{t.getLayer(Cr)&&t.removeLayer(Cr)}catch{}}},B=()=>{if(!(u||d)){d=!0;try{if(!a.getSource(s)&&t.isStyleLoaded()&&t.addSource(s,{type:"raster-dem",tiles:[e.url],tileSize:e.tileSize,minzoom:e.minzoom,maxzoom:e.maxzoom,encoding:e.encoding,bounds:[...e.bounds]}),i()==="labels"?(L(),U(l)):M(),a.getSource(s)){const N=a.getTerrain();((N==null?void 0:N.source)!==s||(N.exaggeration??1)!==1)&&a.setTerrain({source:s,exaggeration:1}),C(),D()}b=null}catch(N){const W=N instanceof Error?N.message:String(N);W!==b&&(b=W,console.error("[shadow-simulation] MapLibre terrain setup failed",N))}finally{d=!1}}},X=()=>{d||B()};return t.on(Se.STYLE_DATA,B),t.on(Se.TERRAIN,X),B(),Object.assign(()=>{if(!u){u=!0,t.off(Se.STYLE_DATA,B),t.off(Se.TERRAIN,X),R(),v(),h=null,L(),U(l);try{o&&a.getSource(o.source)!==void 0?a.setTerrain(o):a.setTerrain(null)}catch{}}},{refresh:()=>{!u&&!d&&B()}})},dl=(t,e=!1)=>{if(t.userData[Ii.OVERLAY])return;t.castShadow=t.userData.disableShadowCasting!==!0;const r=Array.isArray(t.material)?t.material:[t.material];if(t.receiveShadow=r.some(i=>i.visible&&i.colorWrite),!t.userData.isShadowTerrainSurface)for(const i of r)i.shadowSide??(i.shadowSide=Qo),wp(i,e)},Or=(t,e=!1)=>{t.traverseVisible(r=>{const i=r;!i.isMesh&&!i.isInstancedMesh||dl(i,e)})},wg=t=>t.visible&&t.opacity>0,_g=(t,e)=>{let r=t;for(;r&&r!==e;){if(!r.visible)return!1;r=r.parent}return(Array.isArray(t.material)?t.material:[t.material]).some(wg)},ko=t=>{t.traverse(e=>{const r=e;if(!r.isMesh&&!r.isInstancedMesh)return;const i=Array.isArray(r.material)?r.material:[r.material];for(const n of i)n.dispose()})},hl=(t,e,r)=>{t.updateMatrixWorld(!0),r==null||r.updateMatrixWorld(!0);const i=r?new jr().setFromProjectionMatrix(new Z().multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),r.coordinateSystem,r.reversedDepth):null;let n=e,s=e;const a=new Le;return t.traverseVisible(o=>{var l,u;const c=o;c.userData[Ii.OVERLAY]||!c.isMesh&&!c.isInstancedMesh||!((u=(l=c.geometry)==null?void 0:l.getAttribute("position"))!=null&&u.count)||(c.geometry.boundingBox||c.geometry.computeBoundingBox(),c.geometry.boundingBox&&(a.copy(c.geometry.boundingBox).applyMatrix4(c.matrixWorld),!(i&&!i.intersectsBox(a))&&(n=Math.min(n,a.min.y),s=Math.max(s,a.max.y))))}),[n,s]},xg=(t,e,r,i)=>{var o;const n=e.filter(c=>c.providesTerrain).flatMap(c=>{var u;const l=(u=c.getViewElevationRange)==null?void 0:u.call(c,r);return l?[l]:[]});if(n.length>0)return[Math.min(...n.map(c=>c[0])),Math.max(...n.map(c=>c[1]))];let[s,a]=hl(t,i,r);for(const c of e){const l=(o=c.getViewElevationRange)==null?void 0:o.call(c,r);l&&(s=Math.min(s,l[0]),a=Math.max(a,l[1]))}return[s,a]},Tg=[[-1,-1],[-1,1],[1,-1],[1,1]],bg=[[0,1],[1,3],[3,2],[2,0],[4,5],[5,7],[7,6],[6,4],[0,4],[1,5],[2,6],[3,7]],Mg=(t,e,r,i)=>{t.updateMatrixWorld(!0);const n=Math.min(e,r),s=Math.max(e,r),a=[-1,1].flatMap(c=>Tg.map(([l,u])=>new T(l,u,c).unproject(t))),o=a.filter(c=>c.y>=n&&c.y<=s).map(c=>c.clone());for(const[c,l]of bg){const u=a[c],d=a[l],g=d.y-u.y;if(!(Math.abs(g)<=Number.EPSILON))for(const p of[n,s]){const f=(p-u.y)/g;f<0||f>1||o.push(u.clone().lerp(d,f))}}for(const c of o){const l=c.clone().sub(i),u=Math.hypot(l.x,l.z);if(u<=Fo)continue;const d=Fo/u;l.x*=d,l.z*=d,c.copy(i).add(l)}return o},Eg=(t,e)=>{const r=e.uniformColor!==null&&We(e.uniformColorMix??1,0,1)>=1;t.traverse(i=>{const n=i;if(!n.userData.isBuilding)return;const s=Array.isArray(n.material)?n.material:[n.material];for(const a of s){e.fullOpacity&&(a.opacity=1,a.transparent=!1,a.depthWrite=!0);const o=a;r&&e.uniformColor&&o.color&&(o.color.set(e.uniformColor),o.vertexColors=!1),a.needsUpdate=!0}})},Rg=(t,e,r)=>{var d;const i=(d=e._originMerc)==null?void 0:d.toLngLat();if(!i)return null;const n=new Ds;n.name=`shadow-simulation-copy-${e.id}`;const s=new Map;let a=r,o=!1;const c=()=>{for(const[g,p]of s)g.visible=p;s.clear()},l=()=>{if(o)return;c(),ko(n),n.clear(),e.scene.updateMatrixWorld(!0);const g=[];e.scene.traverse(p=>{var S,h;const f=p;!f.isMesh&&!f.isInstancedMesh||(h=(S=f.geometry)==null?void 0:S.getAttribute("position"))!=null&&h.count&&_g(f,e.scene)&&g.push(f)});for(const p of g){const f=p.clone(!1);f.name=`${p.name||"mesh"}-shadow-simulation-copy`,f.visible=!0,f.matrixAutoUpdate=!1,f.matrix.copy(p.matrixWorld),f.material=Array.isArray(p.material)?p.material.map(S=>S.clone()):p.material.clone(),dl(f),s.set(p,p.visible),p.visible=!1,n.add(f)}n.visible=n.children.length>0,Eg(n,a)},u={id:`shadow-simulation-generic-${e.id}`,originLngLat:[i.lng,i.lat],root:n,update:()=>{},dispose:()=>{o||(o=!0,c(),ko(n),n.clear())}};return l(),n.visible?(t.addRuntime(u),{runtime:u,sync:l,updateBuildingAppearance(g){a=g,l()}}):(u.dispose(),null)},Ag=t=>{const e=new Le().setFromObject(t.scene);e.isEmpty()?t.center.set(0,0,0):e.getCenter(t.center)},Cg=(t,e,r,i)=>{const n=new nl(e),a=n.lights[0].target,o=new Ds;o.visible=!1,o.userData[Ii.OVERLAY]=!0;const c=new Xo(void 0,0);c.name=vg;const l=rp(i);l.mesh.userData[Ii.OVERLAY]=!0;const u=new Map;t.traverse(g=>{const p=g;p.isAmbientLight&&u.set(p,p.intensity)});const d={scene:t,frame:e,controller:n,skyLight:c,atmosphericSky:l,ambientLightIntensities:u,lightTarget:a,sunVector:null,sunVectorRoot:o,center:new T,shadowCameraOffsetMeters:Math.max(ll,r*1.5),shadowAreaMeters:r,sunVectorLengthMeters:r*ul,sunVectorVisible:!1,shadowQuality:ur,shadowIntensity:1,directionToSun:new T(0,1,0),sunColor:new Ge(16773848),sunIntensity:Jr,receiverWorldPoints:[],minimumElevationMeters:0,maximumElevationMeters:0,dirty:!0};return Or(t),Ag(d),t.add(c),t.add(l.mesh),d},Ig=(t,e)=>{t.scene.traverse(i=>{const n=i;n.isAmbientLight&&!t.ambientLightIntensities.has(n)&&t.ambientLightIntensities.set(n,n.intensity)});const r=e.skyIrradianceCoefficients;if((r==null?void 0:r.length)===t.skyLight.sh.coefficients.length){r.forEach((i,n)=>{t.skyLight.sh.coefficients[n].copy(i)}),t.skyLight.intensity=Jr;for(const i of t.ambientLightIntensities.keys())i.intensity=0;return}t.skyLight.sh.zero(),t.skyLight.intensity=0;for(const[i,n]of t.ambientLightIntensities)i.intensity=n},ss=new Z,Ho=(t,e,r=16773848,i,n=!0)=>{var a;const s=e.clone().normalize();t.directionToSun.copy(s),t.sunColor.set(r),t.lightTarget.position.copy(t.center);for(const o of t.controller.lights)o.target.position.copy(t.center),o.position.copy(s).multiplyScalar(t.shadowCameraOffsetMeters).add(t.center),o.color.copy(t.sunColor);(a=t.sunVector)==null||a.update(t.center,s,t.sunVectorLengthMeters),t.sunVectorRoot.visible=t.sunVectorVisible&&!!t.sunVector,t.sunIntensity=i??Jr;for(const o of t.controller.lights)o.intensity=t.sunIntensity;t.lightTarget.updateMatrixWorld(!0);for(const o of t.controller.lights)o.updateMatrixWorld(!0);n&&(t.controller.invalidate(),t.dirty=!0)},Dg=t=>{var e;for(const[r,i]of t.ambientLightIntensities)r.intensity=i;t.scene.remove(t.skyLight),t.scene.remove(t.atmosphericSky.mesh),t.scene.remove(t.sunVectorRoot),(e=t.sunVector)==null||e.dispose(),t.atmosphericSky.dispose(),t.controller.dispose()},Pg=(t,e={})=>{var pa,ga,va,ya,Sa,wa,_a,xa;const{shadowAreaMeters:r,terrain:i,mapLibreTerrain:n,terrainQuality:s=De.MAX}=e,a=ji(),o=a?(pa=t.getPixelRatio)==null?void 0:pa.call(t):void 0,c=o!==void 0&&o>On;c&&t.setPixelRatio(On);let l=i;const u=r??dg,d=t.getLight();let g=!0;const p=()=>{const m=xe(t).filter(y=>y.providesTerrain===!0);return m.length>0&&m.every(y=>y.mapStyleProjectionBlend==="overlay")?"labels":"opaque"},f=Sg(t,n??ec,()=>g,p,a?De.STANDARD:s),S=()=>{E.setMeshLabelStyle(p()==="labels")};let h=null,v={fullOpacity:!0,uniformColor:null,uniformColorMix:0,textureSaturation:1,textureColorCorrection:!0},b=1,R=null;const D=()=>{var m,y;return R??((y=(m=xe(t).find(w=>w.providesTerrain===!0))==null?void 0:m.getErrorTarget)==null?void 0:y.call(m))??ru};let C=a?Ei:void 0;const A=new WeakMap;let M=null,U={useTransmittanceLut:!0,useIrradianceLut:!0},L=!1,B=!1,X=Number.NEGATIVE_INFINITY,$=null,N=null,W=null,J=new Ge(((ga=l==null?void 0:l.material)==null?void 0:ga.color)??Os);const K=()=>{var m,y,w,x;if(g){W==null||W(),W=null,(y=(m=E.layer).setMapStyleProjectionVisible)==null||y.call(m,!0);return}(x=(w=E.layer).setMapStyleProjectionVisible)==null||x.call(w,!1),W??(W=Zl(t))},E=ql(t),ve=(m,y)=>{var w,x;return{observer:{longitude:m[0],latitude:m[1],altitudeMeters:0},scenePosition:((x=(w=E.layer).projectLngLatToScene)==null?void 0:x.call(w,[m[0],m[1]],bi))??new T(0,bi,0),sceneFromLocal:y}},te=((ya=(va=E.layer).getLocalFrame)==null?void 0:ya.call(va))??null;let be=(te==null?void 0:te.revision)??0,Ae=te?ve(te.lngLat,te.sceneFromLocalRotation):ve([t.getCenter().lng,t.getCenter().lat]);const P=()=>{var m;return((m=_e==null?void 0:_e.localFrame)==null?void 0:m.currentToReference)??(te==null?void 0:te.currentToReference)??ss},se=new Ra,Be=new Hi,Te=m=>{const y=m.renderCamera,{localFrame:w}=m;if(!w||w.currentToReference.equals(ss))return y;const x=y instanceof Ra?se.copy(y,!1):Be.copy(y,!1);return x.matrixAutoUpdate=!1,x.matrixWorldAutoUpdate=!1,x.matrixWorld.multiplyMatrices(w.currentToReference,y.matrixWorld),x.matrixWorld.decompose(x.position,x.quaternion,x.scale),x.matrix.copy(x.matrixWorld),x.matrixWorldInverse.multiplyMatrices(y.matrixWorldInverse,w.referenceToCurrent),x},Lt=(m,y)=>{if(m!=null&&m.mountsOnLocalFrame||y.length===0)return y;const w=P();if(w.equals(ss))return y;const x=new Le;return y.map(H=>(x.min.set(...H.minimum),x.max.set(...H.maximum),x.applyMatrix4(w),{...H,minimum:[x.min.x,x.min.y,x.min.z],maximum:[x.max.x,x.max.y,x.max.z]}))},re=new Qf;let Ze=()=>{},Me=m=>Ze(m),je=null,Pe=0;const gt=m=>{if(!l)return null;const y=t.getCenter(),{errorTargetPixels:w,motionErrorTargetPixels:x,shadowLevelOffset:H,minimumLevel:F,maximumLevel:k,maxSelectionTiles:G,requestConcurrency:oe,maxCacheBytes:le,maxCachedMeshes:ye,maxCachedMeshBytes:me,meshSegments:ge,maximumMeshSegments:V,noDataHeightMeters:we,heightRangeMeters:Zt,material:Jt,...ui}=Iu(l,a);return Jl(`${pg}-${++Pe}`,ui,m??[y.lng,y.lat],{errorTargetPixels:w??Nr,motionErrorTargetPixels:x,shadowLevelOffset:H,minimumLevel:F,maximumLevel:k,maxSelectionTiles:G,requestConcurrency:oe,maxCacheBytes:le,maxCachedMeshes:ye,maxCachedMeshBytes:me,meshSegments:ge??ui.tileSize,maximumMeshSegments:V,noDataHeightMeters:we,heightRangeMeters:Zt,material:Jt,receivesMapStyleTexture:!0,onContentChanged:Tt=>Me(Tt),onError:Tt=>{const xr=Tt instanceof Error?Tt.message:String(Tt);xr!==je&&(je=xr,console.error("[shadow-simulation] Raster DEM terrain runtime failed",Tt))}})},pe=()=>xe(t).some(m=>m.providesTerrain===!0),ei=()=>xe(t).every(m=>{var y,w;return!m.providesTerrain||(((y=m.hasRenderableContent)==null?void 0:y.call(m))??((w=m.isMainViewReady)==null?void 0:w.call(m))??!0)});let mr=xe(t).filter(m=>m.providesTerrain),j=pe()?null:gt(),jt=j===null;j&&E.layer.addRuntime(j);const ml=((wa=(Sa=E.layer).getLocalFrameGroup)==null?void 0:wa.call(Sa))??E.layer.getScene(),_=Cg(E.layer.getScene(),ml,u,J),fl=new T;let ti=0,ri=0;const ke=Ep({getRequest:()=>{var w;if(L||!l||!j||!jt||Tr(t)||Ce||B||et!==0||!st||!qt||!_e)return null;const m=(w=j.getIdlePrefetchAvailability)==null?void 0:w.call(j);if(!(m!=null&&m.ready))return null;const y=j;return{key:JSON.stringify([Pe,ti,ri,_e.renderCamera.projectionMatrix.elements,_e.renderCamera.matrixWorldInverse.elements,_e.viewport.x,_e.viewport.y]),run:async x=>{var F;if(await y.prefetchIdleTerrain(x),x.aborted||!Ne()||!q||!_e||!E.layer.runIdleRender||yt.size>0||St().some(k=>k!==y&&k!==Qt)||Ct.some(({id:k})=>!/^\d+:[-\d]+:[-\d]+$/.test(k)))return;const H=((F=y.getIdleShadowRegions)==null?void 0:F.call(y))??[];H.length===0||!y.prepareIdleShadowRegion||(await q.prewarm({cells:fd(Ct),frame:_e,planningCamera:Te(_e),lighting:{directionToSun:_.directionToSun,color:_.sunColor,intensity:_.sunIntensity,shadowIntensity:_.shadowIntensity},targetPixels:ht[_.shadowQuality].shadowTexelErrorPixels,samples:_r(),signal:x,prepare:async(k,G)=>{const oe=pd(k.receiverBounds,H);return oe===null?{covered:!1,group:null,isCurrent:()=>!1,dispose:()=>{}}:y.prepareIdleShadowRegion({receiverBounds:k.receiverBounds,casterBounds:k.casterBounds,terrainLevel:oe},G)}}),x.aborted||Xt())}}}});let vt=null,mn="";const ii=(m,y,w)=>{const x=`${m}:${y}`;x!==mn&&(mn=x,console.error(`[SHADOW] Atmospheric update rejected; retaining last valid frame (${m}: ${y})`,{phase:m,reason:y,...w}))},pl=()=>{mn=""},He=()=>{ke.cancel(),ti+=1,ri+=1},Qs=m=>{$=null,X=performance.now();const y=`#${m.color.getHexString()}`;if(B||E.setLocationLabelColor(y),!t.isStyleLoaded())return;const w=[1.5,m.azimuthDegrees,90-m.elevationDegrees],x=We(m.relativeIntensity,0,1),H=t.getLight(),F=H.position;H.anchor==="map"&&Array.isArray(F)&&F.length===w.length&&F.every((k,G)=>k===w[G])&&H.color===y&&H.intensity===x||t.setLight({anchor:"map",position:w,color:y,intensity:x})},ni=()=>{N!==null&&(globalThis.clearTimeout(N),N=null);const m=$;m&&Qs(m)},Zs=m=>{if($=m,!B&&!Ce){ni();return}const y=performance.now()-X;if(y>=Bo){ni();return}N===null&&(N=globalThis.setTimeout(()=>{N=null;const w=$;w&&Qs(w)},Bo-y))},Yt=m=>{const y={longitude:Ae.observer.longitude,latitude:Ae.observer.latitude,altitudeMeters:bi},w=jf(m.instant,y,Ae);if(w)return ii("sunlight input",w,{observer:y,skyReference:Ae}),M;re.ensure(()=>{if(L||!h)return;He();const F=Yt(h);F&&Zs(F),t.triggerRepaint()},U),re.ensureSky(()=>{L||!h||(He(),Yt(h),t.triggerRepaint())});let x;try{x=re.evaluate(m.instant,y,U,Ae)}catch(F){return ii("sunlight generation","generator threw",{observer:y,error:F}),M}const H=Yf(x);return H?(ii("sunlight output",H,{observer:y,sample:x}),M):(pl(),M=x,_.atmosphericSky.update(x.skyFrame,re.skyTextures),Ig(_,x),Ho(_,x.directionToSun.clone().transformDirection(P()),x.radiance,Jr),x)};Ze=m=>{L||(ke.cancel(),q==null||q.invalidateContent(m),_.controller.invalidate(),_.dirty=!0)};const yt=new Map,St=()=>{const m=xe(t);return j&&!m.includes(j)?[j,...m]:m};let $t=null,wt=null,Ye=null,_t=null,Js=[];const ea=()=>St().flatMap(m=>{var y;return Lt(m,((y=m.getActiveTileVolumes)==null?void 0:y.call(m))??[])}),fr=()=>$t??ea(),ta=(m,y=Ti*4)=>{if(!pe())return;const w=fr(),x=D(),H=m?Io(m,w,x):Math.max(x,...w.filter(({loadReason:F})=>F!=="shadow").map(({errorPixels:F})=>F).filter(F=>Number.isFinite(F)));return Kp({stageErrorPixels:H,targetErrorPixels:x,groundTexelTargetMeters:y,finalBiasMeters:Ti,maximumCoarseBiasMeters:hg})},ra=m=>{const y=$t,w=wt,x=Ye,H=_t;if($t=y??ea(),wt=w??new Map,Ye=x??new Map,_t=H??new Map,!y){const F=jp(Js,$t);F.length>0&&(q==null||q.invalidateContent(F),vr.length=0),Js=$t}try{return m()}finally{$t=y,wt=w,Ye=x,_t=H}};let Ce=!1,Ft=null,pr=null,fn=Number.NEGATIVE_INFINITY,pn=!1;const ia=new WeakMap,gl=m=>{var x,H,F;if(!m)return"none";const y=t.getCenter(),w=t.getCanvas();return[Math.round(y.lng*1e7),Math.round(y.lat*1e7),Math.round((((x=t.getZoom)==null?void 0:x.call(t))??0)*1e4),Math.round((((H=t.getBearing)==null?void 0:H.call(t))??0)*1e3),Math.round((((F=t.getPitch)==null?void 0:F.call(t))??0)*1e3),`${w.clientWidth||w.width}x${w.clientHeight||w.height}`,(h==null?void 0:h.azimuthDegrees)??"no-sun",(h==null?void 0:h.elevationDegrees)??"no-sun",_.shadowQuality].join(";")},gr=m=>{var G,oe,le,ye,me,ge;if(B){const V=performance.now();if(V-fn<yg){pn=!0;return}fn=V}pr=m,pn=!1;const y=gl(m),w=_e==null?void 0:_e.renderCamera,x=m&&w?new jr().setFromProjectionMatrix(new Z().multiplyMatrices(w.projectionMatrix,w.matrixWorldInverse),w.coordinateSystem,w.reversedDepth):null,H=new Le,F=x?Lt(j,((G=j==null?void 0:j.getActiveTileVolumes)==null?void 0:G.call(j))??[]).filter(V=>(H.min.fromArray(V.minimum),H.max.fromArray(V.maximum),x.intersectsBox(H))):void 0,k=[...xe(t),...j?[j]:[]];for(const V of new Set(k)){if((oe=V.setShadowStagePresentationGate)==null||oe.call(V,!1),!V.providesTerrain){V===j?(le=V.setErrorTarget)==null||le.call(V,(l==null?void 0:l.errorTargetPixels)??Nr):(ye=V.setErrorTargetOverride)==null||ye.call(V,R),(me=V.setShadowView)==null||me.call(V,m?{...m,terrainReceivers:F}:null);continue}ia.get(V)!==y&&(ia.set(V,y),(ge=V.setShadowView)==null||ge.call(V,m))}},gn=m=>{var y;Ft=m;for(const w of new Set([...xe(t),...j?[j]:[]]))(y=w.setLiveShadowView)==null||y.call(w,m);Ce||gr(m)};let vn=Number.NEGATIVE_INFINITY,Je=null,xt=null,yn=null,Sn="",st=!a;a&&(_.shadowQuality=qe.FPS_120);let wn={},Oe=Pn(Nn(wn,a),_.shadowQuality),at=null;const si=()=>({format:Oe.shadowBufferFormat,msaaSamples:Oe.shadowBufferLayout===Vr.TILED?0:og(Oe,(Oe.shadowBufferFormat===mt.SDR_8?at==null?void 0:at.sdrSamples:at==null?void 0:at.hdrSamples)??[0,2,4])});let Kt=si(),et=0,_n=!1,ai=!1;const vr=[];let tt=!0,xn=[],na="",ot=is(_.shadowQuality),oi=Number.POSITIVE_INFINITY,qt=!0,Bt=Do(4096);_.controller.setMaxShadowMapSize(Bt.maxShadowMapSize);let _e=null,q=null,Tn=null,Ct=[];const Ne=()=>Oe.shadowBufferLayout===Vr.TILED,yr=()=>{q==null||q.dispose(),q=null,Tn=null,Ct=[]},Xt=()=>{if(L||!xt||!No(t))return;const m=performance.now()-vn;if(m<Uo){Je??(Je=globalThis.setTimeout(()=>{Je=null,Xt()},Uo-m));return}Je!==null&&(globalThis.clearTimeout(Je),Je=null);const y=Oe.shadowBufferLayout,w=Oe.shadowSunDiscSamples,x=Ne()?(q==null?void 0:q.stats)??null:null,H=JSON.stringify([y,w,x]);yn===xt&&Sn===H||(vn=performance.now(),yn=xt,Sn=H,lg(t,{...xt,bufferLayout:y,sunDiscSamples:w,tiledStats:x}))};_.controller.setSoftSun(st);const Sr=(m,y)=>Math.round(m/y)*y,vl=m=>{var w,x,H,F;const y=t.getCenter();return[Sr(y.lng,1e-7),Sr(y.lat,1e-7),Sr(((w=t.getZoom)==null?void 0:w.call(t))??0,1e-4),Sr(((x=t.getBearing)==null?void 0:x.call(t))??0,.001),Sr(((H=t.getPitch)==null?void 0:H.call(t))??0,.001),`${m.viewport.x}x${m.viewport.y}`,(F=m.cssViewport)==null?void 0:F.toArray().join("x")].join(";")},wr=(m=!0,y=!0,w)=>{var oe,le,ye,me;const x=t.getCenter(),H=(j==null?void 0:j.getElevation(x.lng,x.lat))??0,F=(le=(oe=E.layer).projectLngLatToScene)==null?void 0:le.call(oe,[x.lng,x.lat],H);if(!F){h&&Yt(h),y&&t.triggerRepaint();return}_.center.copy(F).applyMatrix4(P()),vt??(vt=hl(_.scene,F.y));const[k,G]=vt;if(w){const ge=Mg(Te(w),k,G,_.center);if(ge.length>0){const V=new Le().setFromPoints(ge).getSize(new T),we=Math.max(...ge.map(Zt=>Zt.distanceTo(_.center)));_.sunVectorLengthMeters=Math.min(V.x,V.z)*ul,_.shadowAreaMeters=Math.max(r??0,fg,we*2),xn=ge}}else tt=!0;if(_.shadowCameraOffsetMeters=Math.max(ll,_.shadowAreaMeters*1.5),_.receiverWorldPoints=xn,_.minimumElevationMeters=k,_.maximumElevationMeters=G,_.dirty=!0,h&&(m||!M))Yt(h);else{_.lightTarget.position.copy(_.center);for(const ge of _.controller.lights)ge.target.position.copy(_.center),ge.target.updateMatrixWorld(!0);(ye=_.sunVector)==null||ye.root.position.copy(_.center),(me=_.sunVector)==null||me.root.updateMatrixWorld(!0)}y&&t.triggerRepaint()},Qt={id:"shadow-simulation-controller",originLngLat:[t.getCenter().lng,t.getCenter().lat],root:new Ds,updatePriority:gg,update(m){var Tt,xr;_e=m;const{localFrame:y}=m;y&&y.revision!==be&&(be=y.revision,Ae=ve(y.lngLat,y.sceneFromLocalRotation),M&&(M=qf(M,Ae),_.atmosphericSky.update(M.skyFrame,re.skyTextures)));const w=(xr=(Tt=E.layer).getRenderer)==null?void 0:xr.call(Tt);w&&!at&&(at=ag(w),Kt=si(),Bt=Do(Math.min(at.maxTextureSize,at.maxRenderbufferSize)),_.controller.setMaxShadowMapSize(Bt.maxShadowMapSize)),oi=sg(Bt.maxAccumulationPixels,Kt),qt=m.viewport.x*m.viewport.y<=oi,ot=ns(ot,performance.now(),Ce,{enabled:Oe.shadowAdaptiveQuality,allowCadenceReduction:!Ne()});const x=Math.max(0,m.lodCamera.position.y-m.lookTarget.y),H=bi+x,F=Ae.scenePosition.y+x;![...m.lodCamera.matrixWorld.elements,...m.lodCamera.projectionMatrix.elements].every(Number.isFinite)||!Number.isFinite(H)||!Number.isFinite(F)?ii("render camera","local Three.js camera matrix or altitude is invalid",{altitudeMeters:H,cameraHeightAboveTargetMeters:x,matrixWorld:m.lodCamera.matrixWorld.elements,projectionMatrix:m.lodCamera.projectionMatrix.elements}):(_.atmosphericSky.updateViewCamera(m.lodCamera),_.atmosphericSky.updateObserverScenePosition(fl.set(Ae.scenePosition.x,F,Ae.scenePosition.z)));const G=vl(m);if((tt||G!==na)&&(performance.now(),na=G,vt=Ce?vt??[_.minimumElevationMeters,_.maximumElevationMeters]:xg(_.scene,xe(t),m.renderCamera,_.center.y),wr(!1,!1,m),tt=!1),!_.dirty)return;_.sunVectorVisible&&_.sunVector&&_.sunVector.root.cone.position.y!==_.sunVectorLengthMeters&&Ho(_,_.directionToSun,_.sunColor,_.sunIntensity),ti+=1;const oe=fr(),le=oe.flatMap(({minimum:er,maximum:bt})=>dc(Te(m),new Le(new T(...er),new T(...bt))));if(_.receiverWorldPoints=le.length>0?le:xn,_.receiverWorldPoints.length===0||!h){gn(null),xt=null,ts(t);return}if(Ne()){Ct=md(oe.filter(({loadReason:bt})=>bt!=="shadow").map(({id:bt,minimum:di,maximum:Rn,receiverObjectId:An})=>({id:bt,receiverObjectId:An,bounds:new Le(new T(...di),new T(...Rn))})));const er=ld(Ct,Te(m));er.length>0&&(_.receiverWorldPoints=[...er])}const ye=Po(Bt.maxShadowMapSize,_.shadowQuality,m.viewport.x*m.viewport.y,Ce?ot.depthScale:1),me=m.cssViewport??m.viewport,ge=Po(Bt.maxShadowMapSize,_.shadowQuality,me.x*me.y,Ce?ot.depthScale:1),V=_.controller.update({maxReceiverBiasMeters:ta(),receiverWorldPoints:_.receiverWorldPoints,receiverAnchorWorldPosition:_.center,minimumElevationMeters:_.minimumElevationMeters,maximumElevationMeters:_.maximumElevationMeters,directionToSun:_.directionToSun,color:_.sunColor,intensity:_.sunIntensity,shadowIntensity:_.shadowIntensity,quality:_.shadowQuality,mapTexelBudget:ye,casterMapTexelBudget:ge,groundTexelFit:Oe.shadowGroundTexelFit,stabilizeMapSize:Ce});if(_.dirty=!1,!V){gn(null),xt=null,ts(t);return}const we=V.camera,Zt=_.controller.lights[0].shadow.camera,Jt=M==null?void 0:M.skyFrame.directionToSunECEF;gn({camera:Zt,directionToSunECEF:Jt?[Jt.x,Jt.y,Jt.z]:void 0,casterAngularRadiusRadians:st?Br:0,shadowMapSize:{width:(we.rightMeters-we.leftMeters)/V.casterMetersPerTexel[0],height:(we.topMeters-we.bottomMeters)/V.casterMetersPerTexel[1]}});const ui=No(t);if(we&&ui){m.lodCamera.updateMatrixWorld(!0),m.lodCamera.updateProjectionMatrix();const er=St().flatMap(bt=>{var di;return(((di=bt.getActiveTileVolumes)==null?void 0:di.call(bt))??[]).map(({id:Rn,loadReason:An,minimum:bl,maximum:Ml})=>({id:Rn,loadReason:An,minimum:bl,maximum:Ml}))});xt={bufferLayout:Oe.shadowBufferLayout,sunDiscSamples:Oe.shadowSunDiscSamples,tiledStats:null,cameraRangeMeters:Zt.position.distanceTo(_.controller.lights[0].target.position),leftMeters:we.leftMeters,rightMeters:we.rightMeters,bottomMeters:we.bottomMeters,topMeters:we.topMeters,nearMeters:we.nearMeters,farMeters:we.farMeters,projectionMatrixElements:we.projectionMatrixElements,shadowMapWidth:we.shadowMapWidth,shadowMapHeight:we.shadowMapHeight,minimumElevationMeters:_.minimumElevationMeters,maximumElevationMeters:_.maximumElevationMeters,sceneAnchorPositionElements:_.center.toArray(),mainCamera:{viewMatrixElements:[...m.lodCamera.matrixWorldInverse.elements],projectionMatrixElements:[...m.lodCamera.projectionMatrix.elements],nearMeters:m.lodCamera.near,farMeters:m.lodCamera.far,viewportWidth:m.viewport.x,viewportHeight:m.viewport.y},tileVolumes:er,shadow:V,atmosphericSunlight:M?{azimuthDegrees:M.azimuthDegrees,elevationDegrees:M.elevationDegrees,relativeIntensity:M.relativeIntensity,color:`#${M.color.getHexString()}`,transmittanceReady:M.atmosphericTransmittanceReady,irradianceReady:M.atmosphericIrradianceReady}:null},Xt()}},dispose:()=>{}};E.layer.addRuntime(Qt);const _r=()=>Oe.shadowSunDiscSamples,sa=()=>{var w,x;if(!Ne()||!_e||_.directionToSun.y<=0)return null;const m=(x=(w=E.layer).getRenderer)==null?void 0:x.call(w);if(!m)return null;let y=!1;if(!q||Tn!==m){const H=Ct;yr(),Ct=H,Tn=m,q=new Wp(_.scene,m,{light:_.controller.lights[0],sky:_.atmosphericSky.mesh,overlay:_.sunVectorRoot,frame:_.frame,maximumMapSize:Bt.maxShadowMapSize,isCorridorReady:(F,k,G)=>{const oe=es(F,k,G),le=wt==null?void 0:wt.get(oe);if(le!==void 0)return le;const ye=St().every(me=>{var ge;return((ge=me.isShadowRegionReady)==null?void 0:ge.call(me,F,k,G))??(me.getRequestDemand?me.getRequestDemand()===0:!me.providesTerrain||!Tr(t))});return wt==null||wt.set(oe,ye),ye},receiverStageError:F=>{const k=es(F),G=_t==null?void 0:_t.get(k);if(G!==void 0)return G;const oe=Io(F,fr(),pe()?D():(l==null?void 0:l.errorTargetPixels)??Nr);return _t==null||_t.set(k,oe),oe},receiverBiasLimit:(F,k)=>ta(F,k)??Ti,onPresentedPages:(F,k)=>{var oe;const G=Yp(fr(),k.map(({id:le,receiverBounds:ye})=>({id:le,bounds:ye})),F.map(({id:le,receiverBounds:ye})=>({id:le,bounds:ye})));if(G.length!==0)for(const le of St())(oe=le.acknowledgeShadowStage)==null||oe.call(le,G)},corridorRevision:(F,k,G)=>{var ge;const oe=es(F,k,G),le=Ye==null?void 0:Ye.get(oe);if(le!==void 0)return le;const ye=[];for(const V of St()){if(V===Qt)continue;const we=(ge=V.getShadowRegionRevision)==null?void 0:ge.call(V,F,k,G);if(!we)return Ye==null||Ye.set(oe,null),null;ye.push(JSON.stringify([V.id,we]))}const me=ye.length?JSON.stringify(ye.sort()):null;return Ye==null||Ye.set(oe,me),me},dateTimeKey:()=>(h==null?void 0:h.instant.toISOString())??null,worldBasis:()=>{const F=E.layer.projectSceneToLngLat([0,0,0]);if(!F)throw new Error("Shared scene origin is not initialized");const k=xu.MercatorCoordinate.fromLngLat(F,0);return $p(k.x,k.y,k.meterInMercatorCoordinateUnits())},requestRepaint:()=>t.triggerRepaint(),visualEpoch:()=>ri,auditCorridors:F=>{const k=fr(),G=St();return F.map(({id:oe,casterBounds:le,receiverBounds:ye})=>qp({id:oe,casterBounds:le,sunElevationDegrees:(h==null?void 0:h.elevationDegrees)??0,volumes:k,regions:G.flatMap(me=>{var V;const ge=(V=me.getShadowRegionDiagnostics)==null?void 0:V.call(me,le,void 0,ye);return ge?[ge]:[]})}))},runIdleRender:F=>{var k,G;return((G=(k=E.layer).runIdleRender)==null?void 0:G.call(k,F))??!1}}),y=!0}return!Ce||y?q.update(Ct,_e,{maxReceiverBiasMeters:pe()?Ti:void 0,directionToSun:_.directionToSun,color:_.sunColor,intensity:_.sunIntensity,shadowIntensity:_.shadowIntensity},ht[_.shadowQuality].shadowTexelErrorPixels,Te(_e)):q.updatePresentation(_e,Te(_e)),q},yl=Gp(),ci=()=>Ne()&&yl(St()),aa={onSettled:ke.onSettled,onPresented:()=>{var y;const m=performance.now();for(const w of xe(t))(y=w.onShadowPresented)==null||y.call(w,m)},get options(){return Kt},get maxRenderTargetPixels(){return oi},get rounds(){return _r()},epoch:()=>ti,visualEpoch:()=>ri,pending:()=>qt&&st&&!B&&(!jt||ci()||!Ne()&&!ei()||!Ne()&&Tr(t)||Ce||!Ne()&&et!==0),active:()=>qt&&st&&jt&&!ci()&&(Ne()||ei())&&(Ne()||!Tr(t))&&!Ce&&!B&&(Ne()||et===0)&&h!==null&&Ft!==null&&_.receiverWorldPoints.length>0,retainSettledFrame:()=>qt&&st&&h!==null&&Ft!==null&&_.receiverWorldPoints.length>0,prepareRound:m=>{Ne()||_.controller.applySunDiscSample(m,_r())},finishRound:()=>_.controller.restoreSunDiscCenter(),get renderProgressive(){if(Ne())return(m,y)=>!st||B||!qt?null:ra(()=>{if(ci())return null;const w=sa();if(!w)return null;const x=w.renderProgressive(m,{...y,samples:_r(),maxRenderTargetPixels:oi,options:Kt});return Xt(),x})},renderScene:(m,y)=>!st||B||!Ne()?!1:ra(()=>{if(ci())return!1;const w=sa();if(!w)return!1;const x=w.render(m,y,_r(),!Ce);return Xt(),x})};(xa=(_a=E.layer).setAccumulationController)==null||xa.call(_a,aa);const li=()=>{vt=null,tt=!0,wr()};Me=m=>{Ze(m),li()};const oa=()=>{ke.cancel(),q==null||q.pausePending(),ot=ns(ot,performance.now(),!1),Ce=!0,tt=!0},bn=()=>{ke.cancel(),tt=!0},ca=()=>{Ce=!1,ot=ns(ot,performance.now(),!1),_n?(_n=!1,En()):li(),M&&($=M,ni()),pr!==Ft&&gr(Ft)},la=()=>{bn(),t.triggerRepaint()};t.on(Se.MOVE_START,oa),t.on(Se.MOVE,bn),t.on(Se.MOVE_END,ca),t.on(Se.RESIZE,la);const Mn=m=>{m.ready.then(y=>{!y||L||j!==m||(jt=!0,li(),t.triggerRepaint())})},ua=()=>{var x,H,F,k;const m=xe(t).filter(G=>G.providesTerrain);if(m.length!==mr.length||m.some(G=>!mr.includes(G))){mr=m,yr(),(H=(x=E.layer).setAccumulationController)==null||H.call(x,null),(k=(F=E.layer).setAccumulationController)==null||k.call(F,aa);for(const G of _.controller.lights)G.shadow.map&&(Pt(G.shadow.map),G.shadow.map=null);He()}const y=pe();if(!l)return;if(y){ke.cancel(),jt=!0;const G=j;j=null,G&&E.layer.hasRuntime(G.id)&&E.layer.removeRuntime(G.id),vt=null,tt=!0;return}if(j)return;const w=gt();w&&(ke.cancel(),jt=!1,j=w,w.setMaterialColor(`#${J.getHexString()}`),w.setShadowView(pr),E.layer.addRuntime(w),Mn(w),vt=null,tt=!0)};j&&Mn(j),wr();const da=()=>{if(L)return;const m=new Set(eu(t));for(const[y,w]of yt)m.has(y)||(E.layer.removeRuntime(w.runtime.id),yt.delete(y));for(const y of m){const w=yt.get(y);if(w){w.sync();continue}if(!y.scene)continue;const x=Rg(E.layer,y,v);x&&yt.set(y,x)}Or(E.layer.getScene(),pe()),li(),t.triggerRepaint()},Sl=Xl(t,da);da(),S();const En=()=>{var m,y,w;if(!L){et&&(window.clearTimeout(et),et=0),ai?q==null||q.invalidateContent():vr.length>0&&(q==null||q.invalidateContent(vr)),ai=!1,vr.length=0,ke.cancel(),ua(),f.refresh(),S();for(const x of xe(t))x.providesTerrain&&((m=x.setErrorTargetOverride)==null||m.call(x,R),(!A.has(x)||A.get(x)!==C)&&((y=x.setCacheBudget)==null||y.call(x,C),A.set(x,C))),(w=x.setShadowSimulationStyle)==null||w.call(x,v);gr(pr),yt.size>0&&Or(E.layer.getScene(),pe()),_.controller.invalidate(),_.dirty=!0,tt=!0,vt=null,t.triggerRepaint()}},wl=tc(t,m=>{if(L)return;const y=m==null?void 0:m.bounds;if(m===void 0){const w=xe(t).filter(x=>x.providesTerrain);(w.length!==mr.length||w.some(x=>!mr.includes(x)))&&(ua(),f.refresh(),S())}for(const w of(m==null?void 0:m.roots)??[])Or(w,pe());if((y==null?void 0:y.length)===0){t.triggerRepaint();return}if(y===void 0?ai=!0:y.length>0&&vr.push(...y.map(w=>w.clone())),ke.cancel(),y===void 0&&St().some(w=>w!==Qt&&!w.getActiveTileVolumes)&&(ai=!0),Ce){_n=!0,t.triggerRepaint();return}t.triggerRepaint(),!et&&(et=window.setTimeout(()=>{et=0,En()},mg))}),_l=Ql(t,()=>{Tr(t)&&ke.cancel(),L||t.triggerRepaint()});En();const ha=m=>{const y=M??Yt(m);y&&Zs(y)},xl=m=>{(h==null?void 0:h.instant.getTime())!==m.instant.getTime()&&(q==null||q.cancelPending(!0),He(),h=m,wr(),ha(m))},ma=()=>{L||h&&ha(h)};t.on(Se.STYLE_LOAD,ma);const fa=()=>{vn=Number.NEGATIVE_INFINITY,_.dirty=!0,t.triggerRepaint()},Tl=cg(t,m=>{m?fa():(Je!==null&&globalThis.clearTimeout(Je),Je=null,xt=null,yn=null,Sn="")});return{updateSolarPosition:xl,updateMeshCacheBudget(m){var w;a&&(m=Math.min(m??Ei,Ei));const y=m!==void 0&&Number.isFinite(m)&&m>0?m:void 0;if(!(C===y&&xe(t).filter(x=>x.providesTerrain).every(x=>A.has(x)&&A.get(x)===y))){C=y;for(const x of xe(t))x.providesTerrain&&((w=x.setCacheBudget)==null||w.call(x,y),A.set(x,y));t.triggerRepaint()}},updateTerrain(m){if(l===m||(ke.cancel(),l=m,!m||pe()))return;const y=j,w=gt(y==null?void 0:y.originLngLat);w&&(w.setMaterialColor(`#${J.getHexString()}`),w.setShadowView(pr),y&&w.adoptPresentation(y),j=w,E.layer.addRuntime(w),y&&E.layer.removeRuntime(y.id),Mn(w),vt=null,tt=!0,He(),Me(),t.triggerRepaint())},updateTerrainColor(m){const y=new Ge(m);J.equals(y)||(He(),j==null||j.setMaterialColor(m),_.atmosphericSky.updateGroundAlbedo(y),J=y)},updateMeshErrorTarget(m){var y;if(R!==m){R=m;for(const w of xe(t))(y=w.setErrorTargetOverride)==null||y.call(w,m);t.triggerRepaint()}},updateBuildingAppearance(m){var y;if(!(v.fullOpacity===m.fullOpacity&&v.uniformColor===m.uniformColor&&(v.uniformColorMix??1)===(m.uniformColorMix??1)&&(v.textureSaturation??1)===(m.textureSaturation??1)&&(v.textureColorCorrection??!1)===(m.textureColorCorrection??!1))){He(),q==null||q.invalidateContent(),v=m;for(const w of yt.values())w.updateBuildingAppearance(m);for(const w of xe(t))(y=w.setShadowSimulationStyle)==null||y.call(w,m);Or(E.layer.getScene(),pe()),_.controller.invalidate(),_.dirty=!0,t.triggerRepaint()}},updateShadowQuality(m){a&&(m=qe.FPS_120),_.shadowQuality!==m&&(He(),_.shadowQuality=m,Oe=Pn(Nn(wn,a),m),Kt=si(),ot=is(m),_.dirty=!0,wr(),_.controller.invalidate())},updateRenderQuality(m){m=Nn(m,a);const y=Oe,w=Pn(m,_.shadowQuality);wn={...m},Oe=w;const x=y.shadowAdaptiveQuality!==w.shadowAdaptiveQuality;(x||y.shadowBufferLayout!==w.shadowBufferLayout)&&(ot=is(_.shadowQuality)),!(!x&&y.shadowBufferLayout===w.shadowBufferLayout&&y.shadowBufferFormat===w.shadowBufferFormat&&y.shadowSunDiscSamples===w.shadowSunDiscSamples&&y.shadowMsaaSamples===w.shadowMsaaSamples&&y.shadowGroundTexelFit===w.shadowGroundTexelFit)&&(Kt=si(),He(),y.shadowBufferLayout!==w.shadowBufferLayout&&(yr(),tt=!0),(x||y.shadowGroundTexelFit!==w.shadowGroundTexelFit||y.shadowBufferLayout!==w.shadowBufferLayout)&&(_.dirty=!0,_.controller.invalidate()),Xt(),t.triggerRepaint())},updateSoftSunShadows(m){m=m&&!a,st!==m&&(He(),st=m,yr(),_.controller.setSoftSun(m),_.controller.invalidate(),_.dirty=!0,t.triggerRepaint())},updateTimeAnimating(m){B!==m&&(ke.cancel(),B=m,m&&(q==null||q.pausePending()),m||(ni(),fn=Number.NEGATIVE_INFINITY,pn&&!Ce&&gr(Ft),_.dirty=!0),t.triggerRepaint())},refreshProjectionDebug:fa,updateShadowIntensity(m){const y=We(m,0,1);if(b!==y){He(),b=y,_.shadowIntensity=b;for(const w of _.controller.lights)w.shadow.intensity=b;t.triggerRepaint()}},updateMapStyleContentVisibility(m){g!==m&&(g=m,K(),t.triggerRepaint())},updateMapStyleElevationVisibility(m,y){E.setMapStyleElevationVisibility(m,y),t.triggerRepaint()},updateMapStyleLabelOverlayVisibility(m){E.setPointLabelOverlayVisible(m),t.triggerRepaint()},updateSunDebugVectorVisibility(m){_.sunVectorVisible!==m&&(He(),_.sunVectorVisible=m,_.sunVectorRoot.visible=m&&!!h,m?(_.frame.add(_.sunVectorRoot),Gi(async()=>{const{buildSunVector:y}=await import("./shadow-sun-vector-Ce49Tu5y.js");return{buildSunVector:y}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10])).then(({buildSunVector:y})=>{if(L||!_.sunVectorVisible||_.sunVector)return;const w=y();_.sunVector=w,_.sunVectorRoot.add(w.root),w.update(_.center,_.directionToSun,_.sunVectorLengthMeters),w.root.visible=!0,_.sunVectorRoot.visible=!!h,t.triggerRepaint()}).catch(y=>{L||console.error("Unable to load sun-vector diagnostics",y)})):(_.frame.remove(_.sunVectorRoot),_.sunVector&&(_.sunVectorRoot.remove(_.sunVector.root),_.sunVector.dispose(),_.sunVector=null)),t.triggerRepaint())},updateAtmosphericLutUsage(m){U.useTransmittanceLut===m.useTransmittanceLut&&U.useIrradianceLut===m.useIrradianceLut||(He(),U=m,M=null,h&&(Yt(h),Ze()),t.triggerRepaint())},dispose(){var m,y,w,x,H,F;if(!L){L=!0,ke.dispose(),Tl(),yr(),Je!==null&&(globalThis.clearTimeout(Je),Je=null),xt=null,et&&window.clearTimeout(et),N!==null&&(globalThis.clearTimeout(N),N=null),ts(t),t.off(Se.STYLE_LOAD,ma),t.off(Se.MOVE_START,oa),t.off(Se.MOVE,bn),t.off(Se.MOVE_END,ca),t.off(Se.RESIZE,la),Sl(),wl(),_l(),Ft=null,gr(null);for(const k of xe(t))(m=k.setShadowSimulationStyle)==null||m.call(k,null),(y=k.setErrorTargetOverride)==null||y.call(k,null);for(const k of yt.values())E.layer.hasRuntime(k.runtime.id)&&E.layer.removeRuntime(k.runtime.id);yt.clear();try{W==null||W()}catch{}W=null,(x=(w=E.layer).setMapStyleProjectionVisible)==null||x.call(w,!0),f(),E.layer.hasRuntime(Qt.id)&&E.layer.removeRuntime(Qt.id),j&&E.layer.hasRuntime(j.id)&&E.layer.removeRuntime(j.id),re.dispose(),Dg(_),(F=(H=E.layer).setAccumulationController)==null||F.call(H,null),E.release();try{t.isStyleLoaded()&&(t.setLight(d),c&&t.getPixelRatio()===On&&t.setPixelRatio(o))}catch{}}}}},Og=(t,e,r,i)=>{const n=i+e/2,s=Math.floor(n),a=n-s;if(s===0)return{dateState:t,yearDayProgress:a};const o=as(t,s);return{dateState:zi({...t,...o},r)??t,yearDayProgress:a}},Ng=(t,e,r)=>{const i=Wo(t,r),n=Math.ceil(i.sunriseMinutes),s=Math.floor(i.sunsetMinutes),a=t.minutes+e;return{dateState:{...t,minutes:a>s?n:a},yearDayProgress:0}},Lg=(t,e,r,i,n)=>{const s=e??r;if(!(t!=null&&t.enabled)||!t.isAnimating)return{dateState:s,yearDayProgress:n};const a=t.animationSpeed??4;return(t.animationMode??zt.DAY)===zt.YEAR?Og(s,a,i,n):Ng(s,a,i)},Fg=1e3/30,Bg=250,Ug=({dateState:t,setDateState:e,location:r,shadowState:i,onFrame:n})=>{const s=z.useRef(null),a=z.useRef(null),o=z.useRef(t),c=z.useRef(t),l=z.useRef(e),u=z.useRef(n);c.current=t,l.current=e,u.current=n;const{animationMode:d,animationSpeed:g,enabled:p,isAnimating:f}=i,S=p&&(f??!1);return z.useEffect(()=>{const h=t!==o.current;if(o.current=t,!!h){if(t===a.current){S||(s.current=null);return}s.current=null}},[S,t]),z.useEffect(()=>{if(!S)return;const h={animationMode:d,animationSpeed:g,enabled:p,isAnimating:f};let v=0,b=performance.now();const R=C=>{a.current=C,l.current(C)},D=window.setInterval(()=>{const C=s.current??c.current,A=Lg(h,C,C,r,v);v=A.yearDayProgress,s.current=A.dateState,u.current(A.dateState);const M=performance.now();M-b>=Bg&&(b=M,R(A.dateState))},Fg);return()=>{window.clearInterval(D);const C=s.current;C&&C!==a.current&&R(C)}},[S,d,g,p,f,r]),s},kg=({tiledShadows:t=!1,libreMap:e,shadowAreaMeters:r,terrain:i,mapLibreTerrain:n,terrainQuality:s,location:a,state:o,dateState:c,setDateState:l})=>{const u=z.useRef(null),d=Ug({dateState:c,setDateState:l,location:a,shadowState:o,onFrame:h=>{var v;o.enabled&&((v=u.current)==null||v.updateSolarPosition(zr(h,a)))}}),g=z.useMemo(()=>Mu(i,Ca(o.shadowQuality),o.terrainErrorTarget),[i,o.shadowQuality,o.terrainErrorTarget]),p=z.useRef(g);p.current=g;const[f,S]=z.useState(0);return z.useEffect(()=>{if(!e||!o.enabled)return;let h=null,v=null,b=null;const R=()=>{e.off(Se.STYLE_DATA,D),e.off(Se.STYLE_LOAD,D),e.off(Se.IDLE,D)},D=()=>{h||v!==null||b!==null||!e.isStyleLoaded()||(v=requestAnimationFrame(()=>{v=null,b=setTimeout(()=>{b=null,e.isStyleLoaded()&&(R(),h=Pg(e,{shadowAreaMeters:r,terrain:p.current,mapLibreTerrain:n,terrainQuality:s}),u.current=h,S(C=>C+1))},0)}))};return e.on(Se.STYLE_DATA,D),e.on(Se.STYLE_LOAD,D),e.on(Se.IDLE,D),D(),()=>{R(),v!==null&&cancelAnimationFrame(v),b!==null&&clearTimeout(b),u.current=null,h==null||h.dispose(),h=null}},[e,r,o.enabled,n,s]),z.useEffect(()=>{var h;(h=u.current)==null||h.updateTerrain(g)},[g,f]),z.useEffect(()=>{var v;if(!o.enabled)return;const h=d.current??c;(v=u.current)==null||v.updateSolarPosition(zr(h,a))},[d,c,a,o.enabled,f]),z.useEffect(()=>{var h;o.enabled&&((h=u.current)==null||h.updateShadowQuality(Ca(o.shadowQuality)))},[o.enabled,o.shadowQuality,f]),z.useEffect(()=>{var h;o.enabled&&((h=u.current)==null||h.updateRenderQuality({shadowAdaptiveQuality:o.shadowAdaptiveQuality,shadowBufferLayout:t?o.shadowBufferLayout:void 0,shadowBufferFormat:o.shadowBufferFormat,shadowSunDiscSamples:o.shadowSunDiscSamples,shadowMsaaSamples:o.shadowMsaaSamples,shadowGroundTexelFit:o.shadowGroundTexelFit}))},[o.enabled,t,o.shadowAdaptiveQuality,o.shadowBufferLayout,o.shadowBufferFormat,o.shadowSunDiscSamples,o.shadowMsaaSamples,o.shadowGroundTexelFit,f]),z.useEffect(()=>{var h;o.enabled&&((h=u.current)==null||h.updateMeshErrorTarget(o.meshErrorTarget??null))},[o.enabled,o.meshErrorTarget,f]),z.useEffect(()=>{var h;o.enabled&&((h=u.current)==null||h.updateMeshCacheBudget(o.meshCacheBudgetBytes))},[o.enabled,o.meshCacheBudgetBytes,f]),z.useEffect(()=>{var h;o.enabled&&((h=u.current)==null||h.updateSoftSunShadows(o.softSunShadows??!0))},[o.enabled,o.softSunShadows,f]),z.useEffect(()=>{var h;o.enabled&&((h=u.current)==null||h.updateTimeAnimating(o.isAnimating??!1))},[o.enabled,o.isAnimating,f]),z.useEffect(()=>{var h;o.enabled&&((h=u.current)==null||h.updateShadowIntensity(o.shadowIntensity??1))},[o.enabled,o.shadowIntensity,f]),z.useEffect(()=>{var h;o.enabled&&((h=u.current)==null||h.updateMapStyleContentVisibility(o.showMapStyleContent??!0))},[o.enabled,o.showMapStyleContent,f]),z.useEffect(()=>{var h;o.enabled&&((h=u.current)==null||h.updateMapStyleLabelOverlayVisibility((o.showMapStyleContent??!0)&&(o.showMapStyleLabels??!0)))},[o.enabled,o.showMapStyleContent,o.showMapStyleLabels,f]),z.useEffect(()=>{var h;o.enabled&&((h=u.current)==null||h.updateMapStyleElevationVisibility(o.showMapStyleElevationLines??!1,o.showMapStyleElevationLabels??!1))},[o.enabled,o.showMapStyleElevationLines,o.showMapStyleElevationLabels,f]),z.useEffect(()=>{var h;o.enabled&&((h=u.current)==null||h.updateSunDebugVectorVisibility((o.showProjectionDebugView??!1)&&(o.showSunDebugVector??!0)))},[o.enabled,o.showProjectionDebugView,o.showSunDebugVector,f]),z.useEffect(()=>{if(!e)return;const h=o.enabled&&(o.showProjectionDebugView??!1)&&(o.showTileBounds??!0);if(!h)return;const v=new Set,b=()=>{var C;const D=xe(e);for(const A of v)D.includes(A)||v.delete(A);for(const A of D)v.has(A)||((C=A.setTileBoundsVisible)==null||C.call(A,h),v.add(A))};b();const R=tc(e,b);return()=>{var D;R();for(const C of xe(e))(D=C.setTileBoundsVisible)==null||D.call(C,!1)}},[e,f,o.enabled,o.showProjectionDebugView,o.showTileBounds]),z.useEffect(()=>{var h;o.enabled&&((h=u.current)==null||h.updateAtmosphericLutUsage({useTransmittanceLut:o.useTransmittanceLut??!0,useIrradianceLut:o.useSkyIrradianceLut??!0}))},[o.enabled,o.useSkyIrradianceLut,o.useTransmittanceLut,f]),z.useEffect(()=>{var h;o.enabled&&((h=u.current)==null||h.updateTerrainColor(o.terrainColor??Os))},[o.enabled,o.terrainColor,f]),z.useEffect(()=>{var h;o.enabled&&((h=u.current)==null||h.updateBuildingAppearance({fullOpacity:o.buildingsFullOpacity??!0,uniformColor:o.buildingColor??nc,uniformColorMix:We(o.buildingColorMix??rc,0,1),textureColorCorrection:o.meshTextureColorCorrection??!0,textureSaturation:We(o.meshTextureSaturation??ic,0,1)}))},[o.buildingColor,o.buildingColorMix,o.buildingsFullOpacity,o.enabled,o.meshTextureSaturation,o.meshTextureColorCorrection,f]),null},Hg=t=>({...t,animationMode:zt.DAY,animationSpeed:4,isAnimating:!1,shadowIntensity:1,meshTextureColorCorrection:!0,showSunDebugVector:!0,showTileBounds:!0,showProjectionDebugView:!1,showDisplaySettings:!1,showMapStyleContent:!0,showMapStyleLabels:!0,showMapStyleElevationLines:!1,showMapStyleElevationLabels:!1,useTransmittanceLut:!0,useSkyIrradianceLut:!0,shadowBufferLayout:void 0,shadowBufferFormat:void 0,shadowSunDiscSamples:void 0,shadowMsaaSamples:void 0,shadowGroundTexelFit:void 0,shadowAdaptiveQuality:void 0}),zg=({location:t,state:e,setState:r,dateState:i,setDateState:n})=>{const s=e.animationMode??zt.DAY,a=e.animationSpeed??4,o=(c,l)=>n(Qu(i,i.year,Go(i.year,c,l),t));return O.jsxs(O.Fragment,{children:[O.jsxs("section",{className:"min-w-0",children:[O.jsx("h3",{className:"mb-1.5 text-xs font-medium uppercase tracking-wide text-neutral-500",children:"Datum"}),O.jsxs("div",{className:"grid grid-cols-2 gap-2","data-test-id":"shadow-date-shortcuts",children:[O.jsx("button",{type:"button",className:br,onClick:()=>n(Zu(i,t)),children:"Heute"}),O.jsx("button",{type:"button",className:br,onClick:()=>o(2,21),children:"21. März"}),O.jsx("button",{type:"button",className:br,onClick:()=>o(5,21),children:"21. Juni"}),O.jsx("button",{type:"button",className:br,onClick:()=>o(11,21),children:"21. Dezember"})]})]}),O.jsxs("section",{children:[O.jsx("h3",{className:"mb-1.5 text-xs font-medium uppercase tracking-wide text-neutral-500",children:"Uhrzeit"}),O.jsx("div",{className:"grid grid-cols-4 gap-2",children:[9,12,15,18].map(c=>O.jsx("button",{type:"button",className:br,onClick:()=>n(Zi(i,{...i,minutes:c*60},t)),children:rd(c)},c))})]}),O.jsxs("section",{children:[O.jsx("h3",{className:"mb-1.5 text-xs font-medium uppercase tracking-wide text-neutral-500",children:"Animation"}),O.jsxs("div",{className:"flex flex-wrap items-center gap-x-3 gap-y-2",children:[O.jsx("div",{className:"flex shrink-0 overflow-hidden rounded-md border border-neutral-300",children:[[zt.DAY,"Tagesverlauf"],[zt.YEAR,"Jahresverlauf"]].map(([c,l])=>O.jsx("button",{type:"button",className:`${Pa} ${s===c?"bg-amber-50 font-medium text-amber-700":"bg-white"}`,"aria-pressed":s===c,onClick:()=>{const u=c;r({...e,animationMode:u,isAnimating:s===u?!e.isAnimating:!0})},children:l},c))}),O.jsx("div",{className:"flex shrink-0 overflow-hidden rounded-md border border-neutral-300",children:[1,4,12].map(c=>O.jsxs("button",{type:"button",className:`${Pa} px-3 ${a===c?"bg-amber-50 font-medium text-amber-700":"bg-white"}`,"aria-pressed":a===c,onClick:()=>r({...e,animationSpeed:c}),children:[c,"×"]},c))})]})]})]})},Vg=({location:t,state:e,setState:r,dateState:i,setDateState:n})=>{const s=e.shadowIntensity??1,a=z.useMemo(()=>zr(i,t),[i,t]);return O.jsxs("div",{className:"w-full","data-test-id":"shadow-simulation-secondary-panel",children:[O.jsxs("div",{className:"mb-2 flex flex-wrap items-center justify-between gap-x-4 gap-y-2",children:[O.jsxs("span",{className:"whitespace-nowrap text-sm tabular-nums text-neutral-500",children:["Höhe ",a.elevationDegrees.toFixed(0),"° · Azimut"," ",a.azimuthDegrees.toFixed(0),"°"]}),O.jsx("div",{className:"flex items-center gap-5 text-sm text-neutral-600",children:O.jsxs("button",{type:"button",className:"flex items-center gap-2 whitespace-nowrap hover:text-amber-700",onClick:()=>{r(Hg(e)),n(Ju(i,t))},children:[O.jsx(Ot,{icon:pu}),"Zurücksetzen"]})})]}),O.jsxs("div",{className:"grid grid-cols-1 gap-x-8 gap-y-4 lg:grid-cols-2",children:[O.jsx(zg,{location:t,state:e,setState:r,dateState:i,setDateState:n}),O.jsxs("section",{className:"min-w-0",children:[O.jsxs("h3",{className:"mb-1.5 flex items-center gap-1 text-xs font-medium uppercase tracking-wide text-neutral-500",children:["Darstellung",O.jsx("button",{type:"button",className:"inline-flex items-center justify-center p-1 text-neutral-700 hover:text-amber-700","aria-label":"Darstellungseinstellungen",title:"Darstellungseinstellungen","aria-expanded":e.showDisplaySettings??!1,onClick:()=>r({...e,showDisplaySettings:!e.showDisplaySettings}),"data-test-id":"shadow-simulation-display-settings",children:O.jsx(Ot,{icon:gu})})]}),O.jsxs("label",{className:"grid grid-cols-[110px_minmax(0,1fr)_42px] items-center gap-3 text-sm text-neutral-700",children:[O.jsx("span",{children:"Intensität"}),O.jsx("input",{type:"range",min:0,max:1,step:.01,value:s,onChange:o=>r({...e,shadowIntensity:Number(o.currentTarget.value)}),className:"shadow-simulation-range min-w-0 cursor-pointer",style:uc(s,0,1),"aria-label":"Schattenintensität","data-test-id":"shadow-simulation-intensity"}),O.jsxs("span",{className:"text-right tabular-nums",children:[Math.round(s*100),"%"]})]})]})]})]})},Wg=z.lazy(()=>Gi(()=>import("./ShadowProjectionDebugView-BIMvD2YD.js"),__vite__mapDeps([11,1,2,3,4,5,6,7,8,9,10])).then(t=>({default:t.ShadowProjectionDebugView}))),Gg=z.lazy(()=>Gi(()=>import("./ShadowSimulationDisplaySettingsPanel-bypTv2hn.js"),__vite__mapDeps([12,1,2,3,4,5,6,7,8,9,10])).then(t=>({default:t.ShadowSimulationDisplaySettingsPanel}))),jg=z.lazy(()=>Gi(()=>import("./ShadowSimulationCurveSettings-6wjpM7Xg.js"),__vite__mapDeps([13,1,2,3,4,5,6,7,8,9,10])).then(t=>({default:t.ShadowSimulationCurveSettings}))),Yg="#1677ff",$g=({config:t,libreMap:e,targeted:r,sharedState:i,setSharedState:n,sharedDateState:s,setSharedDateState:a})=>{var X,$;const{year:o,initialDayOfYear:c,initialMinutes:l,latitude:u=Ci.latitude,longitude:d=Ci.longitude,timeZone:g=Es,shadowAreaMeters:p,terrain:f,terrainSources:S,mapLibreTerrain:h,controlPosition:v="topleft",controlOrder:b=70,experimentalTiledShadows:R=!1}=t??{},D=lc(e,u,d),C=z.useMemo(()=>Du({terrain:f,terrainSources:S}),[f,S]),A=z.useMemo(()=>s??Pu({year:o,initialDayOfYear:c,initialMinutes:l,timeZone:g},D),[s,c,l,D,g,o]),M=i??C,U=s??A,L=z.useMemo(()=>S??(f?[{label:f.id,terrain:f}]:void 0),[f,S]),B=((X=L==null?void 0:L.find(({terrain:N})=>N.id===M.terrainSourceId))==null?void 0:X.terrain)??(($=L==null?void 0:L[0])==null?void 0:$.terrain);return z.useEffect(()=>{i||n(C)},[C,n,i]),z.useEffect(()=>{s||a(A)},[A,a,s]),r?O.jsx(Vg,{location:D,state:M,setState:n,dateState:U,setDateState:a}):O.jsxs(O.Fragment,{children:[e&&O.jsx(iu,{position:v,order:b,children:O.jsx(_u,{title:M.enabled?"Schattensimulation ausschalten":"Schattensimulation einschalten",placement:"right",children:O.jsx(nu,{onClick:()=>n({...M,enabled:!M.enabled}),dataTestId:"shadow-simulation-control-button","aria-label":M.enabled?"Schattensimulation ausschalten":"Schattensimulation einschalten","aria-pressed":M.enabled,children:O.jsx(Ot,{icon:vu,style:M.enabled?{color:Yg}:void 0})})})}),O.jsx(kg,{tiledShadows:R,libreMap:e,shadowAreaMeters:p,terrain:B,mapLibreTerrain:h,terrainQuality:M.terrainQuality,location:D,state:M,dateState:U,setDateState:a}),M.controlStyle===ls.CURVE&&O.jsx(z.Suspense,{fallback:null,children:O.jsx(jg,{location:D,dateState:U,setDateState:a,onClose:()=>n({...M,controlStyle:ls.QUICK})})}),M.showDisplaySettings&&O.jsx(z.Suspense,{fallback:null,children:O.jsx(Gg,{tiledShadows:R,state:M,setState:n,terrainSources:L,map:e})}),M.enabled&&M.showProjectionDebugView&&e&&O.jsx(z.Suspense,{fallback:null,children:O.jsx(Wg,{map:e,solarPosition:zr(U,D),settings:{showSunDebugVector:M.showSunDebugVector??!0,showTileBounds:M.showTileBounds??!0},onSettingsChange:N=>n({...M,...N}),onClose:()=>n({...M,showProjectionDebugView:!1})})})]})},uv=Object.freeze(Object.defineProperty({__proto__:null,DEFAULT_SHADOW_SIMULATION_TIME_ZONE:Es,SHADOW_TERRAIN_QUALITY:De,ShadowSimulationHeaderControlsView:nd,ShadowSimulationView:$g,clampShadowSimulationSelectionToDaylight:su,formatShadowSelection:au,getSolarPosition:zr},Symbol.toStringTag,{value:"Module"}));export{Os as D,nv as M,Vr as S,Pn as a,Ca as b,sv as c,Ru as d,mt as e,bu as f,Ps as g,rc as h,ic as i,nc as j,Nr as k,iv as l,rv as m,ls as n,qe as o,Ii as p,uv as q,cv as r,lv as s,ji as u};
