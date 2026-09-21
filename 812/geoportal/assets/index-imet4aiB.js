const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/shadow-sun-vector-G-_3CFXk.js","assets/index-CmL0agm7.js","assets/vendor-react-core-DBOd_2-S.js","assets/vendor-ui-icons-FPYkdTwk.js","assets/vendor-cismap-CPrzCqVL.js","assets/vendor-leaflet-BuDGw_T9.js","assets/vendor-ui-DwftSr8b.js","assets/vendor-cismap-DCHbl3AQ.css","assets/vendor-cesium-CNm9W3AS.js","assets/vendor-maplibre-XZ2NtLMv.js","assets/index-eSP5RzaY.css","assets/ShadowProjectionDebugView-CT_Qm_so.js","assets/ShadowSimulationDisplaySettingsPanel-Ds46tPFt.js","assets/ShadowSimulationCurveSettings-lQt8AbNq.js"])))=>i.map(i=>d[i]);
import{S as Fr,C as Fi,a as rr,G as Br,L as wl,N as Fo,M as Vr,P as ws,V as ie,b as We,W as Ke,F as bt,R as Ur,c as Ae,D as nr,U as kt,d as Ve,g as _s,e as Bi,f as xs,h as _l,i as Ui,k as ye,l as Bo,j as D,o as rs,m as xl,n as Uo,p as Mn,q as Mi,r as Wr,s as re,t as ut,u as T,v as Tl,B as Ne,E as Ho,w as bl,x as Ml,y as ko,z as A,A as Hi,T as zo,O as Ts,H as Vo,I as wa,J as bs,K as El,Q as is,X as _a,Y as Ms,Z as Rl,_ as Al,$ as xa,a0 as Cl,a1 as Il,a2 as Dl,a3 as Wo,a4 as Ot,a5 as Pl,a6 as Go,a7 as Ta,a8 as Ol,a9 as jo,aa as Nl,ab as Ll,ac as Fl,ad as ns,ae as En,af as Bl,ag as Ul,ah as _i,ai as Yo,aj as er,ak as Hl,al as Es,am as $o,an as kl,ao as zl,ap as Vl,aq as Ko,ar as Wl,as as ba,at as _e,au as Rs,av as Gl,aw as qo,ax as jl,ay as ki,az as Yl,aA as $l,aB as _r,aC as Kl,aD as ql,aE as Rn,aF as Xl,aG as Hr,aH as Ql,aI as Zl,aJ as Jl,aK as eu}from"./index-CmL0agm7.js";import{g as tu,r as W,d as ru}from"./vendor-react-core-DBOd_2-S.js";import{F as Pt,V as iu,bs as nu,W as su,z as au,b7 as ou,b8 as cu,bt as lu,bc as uu,D as du}from"./vendor-ui-icons-FPYkdTwk.js";import{J as hu,K as mu,L as fu,e as pu}from"./vendor-ui-DwftSr8b.js";import{a as gu}from"./vendor-maplibre-XZ2NtLMv.js";import"./vendor-cismap-CPrzCqVL.js";import"./vendor-leaflet-BuDGw_T9.js";const Ma=20;class vu{constructor(e,r=256*1024**2){this.renderer=e,this.maximumBytes=r,this.quad.frustumCulled=!1,this.scene.add(this.quad)}target=null;key=null;broken=!1;captures=0;reuses=0;scene=new Fr;camera=new Fi;material=new rr({glslVersion:Br,uniforms:{color:{value:null},depth:{value:null}},vertexShader:`out vec2 uvCopy;
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
      }`,depthTest:!0,depthFunc:wl,depthWrite:!0,transparent:!0,blending:Fo});quad=new Vr(new ws(2,2),this.material);get stats(){return{captures:this.captures,reuses:this.reuses,bytes:this.target?this.target.width*this.target.height*Ma:0,broken:this.broken}}invalidate(){this.key=null}render(e,r,i,n){var h,v;const s=this.renderer;if(this.broken||!Number.isInteger(r)||!Number.isInteger(i)||r<1||i<1||r>s.capabilities.maxTextureSize||i>s.capabilities.maxTextureSize||r*i*Ma>this.maximumBytes||!s.extensions.has("EXT_color_buffer_float"))return this.releaseTarget(),n(),!1;const a=s.getRenderTarget(),o=s.getActiveCubeFace(),c=s.getActiveMipmapLevel(),l=s.getViewport(new ie),u=s.getScissor(new ie),d=s.getScissorTest(),g=s.getClearColor(new We),p=s.getClearAlpha(),f=s.autoClear,y=()=>{s.setRenderTarget(a,o,c),s.setViewport(l),s.setScissor(u),s.setScissorTest(d),s.setClearColor(g,p),s.autoClear=f};try{if(((h=this.target)==null?void 0:h.width)!==r||((v=this.target)==null?void 0:v.height)!==i){this.releaseTarget(),this.target=new Ke(r,i,{type:bt,format:Ur,minFilter:Ae,magFilter:Ae,depthTexture:new nr(r,i,kt),samples:0});try{s.initRenderTarget(this.target)}catch{return this.broken=!0,this.releaseTarget(),y(),n(),!1}}const b=JSON.stringify([e,r,i,s.outputColorSpace,s.toneMapping,s.toneMappingExposure,a==null?void 0:a.texture.colorSpace]);return s.autoClear=!1,this.key!==b?(this.key=null,s.setRenderTarget(this.target),s.setViewport(new ie(0,0,r,i)),s.setScissorTest(!1),s.setClearColor(0,0),s.clear(!0,!0,!1),n(),this.key=b,this.captures+=1):this.reuses+=1,y(),s.autoClear=!1,this.material.uniforms.color.value=this.target.texture,this.material.uniforms.depth.value=this.target.depthTexture,s.render(this.scene,this.camera),!0}catch(b){throw this.invalidate(),b}finally{y()}}releaseTarget(){var e,r,i;(r=(e=this.target)==null?void 0:e.depthTexture)==null||r.dispose(),(i=this.target)==null||i.dispose(),this.target=null,this.key=null}dispose(){this.releaseTarget(),this.broken=!0,this.material.dispose(),this.quad.geometry.dispose()}}const Ei={OVERLAY:"isShadowSimulationOverlay"},qe={FPS_120:4,FPS_60:16,FPS_30:64,ULTRA:256},As="max",ci=64,yu=[0,2,4,8,As],dt={[qe.FPS_120]:{targetFps:120,depthSize:2048,terrainErrorPixels:2,shadowTexelErrorPixels:2,terrainTileLimit:96,terrainSegments:128,sunSamples:ci,msaaSamples:0},[qe.FPS_60]:{targetFps:60,depthSize:3072,terrainErrorPixels:1,shadowTexelErrorPixels:1,terrainTileLimit:144,terrainSegments:256,sunSamples:ci,msaaSamples:2},[qe.FPS_30]:{targetFps:30,depthSize:4096,terrainErrorPixels:.5,shadowTexelErrorPixels:.5,terrainTileLimit:192,terrainSegments:512,sunSamples:ci,msaaSamples:4},[qe.ULTRA]:{targetFps:null,depthSize:16384,terrainErrorPixels:.25,shadowTexelErrorPixels:.25,terrainTileLimit:256,terrainSegments:512,sunSamples:ci,msaaSamples:As}},Su=(t,e,r=Pr)=>{if(!t)return;const i=dt[e];return{...t,errorTargetPixels:r,meshSegments:Math.min(t.tileSize,i.terrainSegments),maxSelectionTiles:Math.min(t.maxSelectionTiles??i.terrainTileLimit,i.terrainTileLimit)}},lr=64,Pr=2,wu=6*1024**3,Cs="#d3d3d3",Xo=0,Qo=1,Zo="#ffffff",kr={MONO:"mono",TILED:"tiled"},ht={HDR_16:"rgba16f",HDR_16_32:"rgba16f-32f",HDR_32:"rgba32f",SDR_8:"rgba8"},_u=[32,64,128,256,512,1024,2048,4096,8192],xu=!0,An=(t={},e=lr)=>({shadowAdaptiveQuality:t.shadowAdaptiveQuality??!0,shadowBufferLayout:t.shadowBufferLayout&&Object.values(kr).includes(t.shadowBufferLayout)?t.shadowBufferLayout:kr.MONO,shadowBufferFormat:t.shadowBufferFormat&&Object.values(ht).includes(t.shadowBufferFormat)?t.shadowBufferFormat:ht.HDR_16_32,shadowSunDiscSamples:t.shadowSunDiscSamples&&_u.includes(t.shadowSunDiscSamples)?t.shadowSunDiscSamples:dt[e].sunSamples,shadowMsaaSamples:t.shadowBufferFormat===ht.HDR_32?0:t.shadowMsaaSamples!==void 0&&yu.includes(t.shadowMsaaSamples)?t.shadowMsaaSamples:dt[e].msaaSamples,shadowGroundTexelFit:t.shadowGroundTexelFit??xu}),Ea=t=>Object.values(qe).includes(t)?t:lr,Tu=t=>typeof t=="string"&&/^#[\da-f]{6}$/i.test(t)?t:typeof t=="number"&&Number.isFinite(t)?`#${Ve(Math.round(t),0,16777215).toString(16).padStart(6,"0")}`:Cs,Jo=()=>{var t;return typeof navigator>"u"?{userAgent:"",platform:"",maxTouchPoints:0}:{userAgent:navigator.userAgent,platform:navigator.platform,maxTouchPoints:navigator.maxTouchPoints,mobile:(t=navigator.userAgentData)==null?void 0:t.mobile}},ec=(t=Jo())=>/iPhone|iPod|Android.*Mobile/i.test(t.userAgent)||t.mobile?"phone":/iPad|Android/i.test(t.userAgent)||t.platform==="MacIntel"&&t.maxTouchPoints>1?"tablet":"desktop",zi=()=>ec()!=="desktop",Cn=1.5,xi=96*1024**2,bu=(t,e=zi())=>!t||!e?t:{...t,meshSegments:Math.min(t.meshSegments??t.tileSize,128),maximumMeshSegments:Math.min(t.maximumMeshSegments??128,128),maxSelectionTiles:Math.min(t.maxSelectionTiles??48,48),maxCachedMeshes:Math.min(t.maxCachedMeshes??64,64),maxCachedMeshBytes:Math.min(t.maxCachedMeshBytes??32*1024**2,32*1024**2),maxCacheBytes:Math.min(t.maxCacheBytes??16*1024**2,16*1024**2),requestConcurrency:Math.min(t.requestConcurrency??2,2)},In=(t,e=zi())=>e?{...t,shadowAdaptiveQuality:!0,shadowBufferLayout:kr.MONO,shadowBufferFormat:ht.SDR_8,shadowMsaaSamples:0}:t,Ce={STANDARD:"standard",HIGH:"high",MAX:"max",ULTRA:"ultra",EXTREME:"extreme"},ss={QUICK:"quick",CURVE:"curve"},Ht={DAY:"day",YEAR:"year"},Jg=(t,e)=>({...t,shadowQuality:e,shadowBufferFormat:void 0,shadowSunDiscSamples:void 0,shadowMsaaSamples:void 0,shadowGroundTexelFit:void 0}),Mu=t=>{var i,n,s;const e=zi(),r=((n=(i=t==null?void 0:t.terrainSources)==null?void 0:i[0])==null?void 0:n.terrain)??(t==null?void 0:t.terrain);return{enabled:!1,terrainColor:Tu((s=r==null?void 0:r.material)==null?void 0:s.color),terrainSourceId:r==null?void 0:r.id,terrainQuality:e?Ce.STANDARD:Ce.MAX,buildingsFullOpacity:!0,buildingColorMix:Xo,meshTextureSaturation:Qo,meshTextureColorCorrection:!0,buildingColor:Zo,shadowQuality:e?qe.FPS_120:lr,shadowAdaptiveQuality:!0,terrainErrorTarget:Pr,meshCacheBudgetBytes:e?xi:wu,showSunDebugVector:!0,showTileBounds:!0,showProjectionDebugView:!1,showDisplaySettings:!1,softSunShadows:!e,showMapStyleContent:!0,showMapStyleLabels:!0,showMapStyleElevationLines:!1,showMapStyleElevationLabels:!1,useTransmittanceLut:!0,useSkyIrradianceLut:!0,controlStyle:ss.QUICK,animationMode:Ht.DAY,animationSpeed:4,isAnimating:!1,shadowIntensity:1}},Eu=(t,e,r=new Date)=>{const i=(t==null?void 0:t.timeZone)??xs,n=_s(r,i),s={year:(t==null?void 0:t.year)??n.year,dayOfYear:(t==null?void 0:t.initialDayOfYear)??n.dayOfYear,minutes:(t==null?void 0:t.initialMinutes)??n.minutes,timeZone:i};return Bi(s,e)??{...s,minutes:12*60}};var Vi={},Wi={};Object.defineProperty(Wi,"__esModule",{value:!0});Wi.default=void 0;var Ru={items_per_page:"/ Seite",jump_to:"Gehe zu",jump_to_confirm:"bestätigen",page:"Seite",prev_page:"Vorherige Seite",next_page:"Nächste Seite",prev_5:"5 Seiten zurück",next_5:"5 Seiten vor",prev_3:"3 Seiten zurück",next_3:"3 Seiten vor",page_size:"Page Size"};Wi.default=Ru;var Gi={},Gr={},ji={},tc={exports:{}};(function(t){var e=_l;function r(n,s){var a=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);s&&(o=o.filter(function(c){return Object.getOwnPropertyDescriptor(n,c).enumerable})),a.push.apply(a,o)}return a}function i(n){for(var s=1;s<arguments.length;s++){var a=arguments[s]!=null?arguments[s]:{};s%2?r(Object(a),!0).forEach(function(o){e(n,o,a[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach(function(o){Object.defineProperty(n,o,Object.getOwnPropertyDescriptor(a,o))})}return n}t.exports=i,t.exports.__esModule=!0,t.exports.default=t.exports})(tc);var Au=tc.exports,Yi={};Object.defineProperty(Yi,"__esModule",{value:!0});Yi.commonLocale=void 0;Yi.commonLocale={yearFormat:"YYYY",dayFormat:"D",cellMeridiemFormat:"A",monthBeforeYear:!0};var Cu=Ui.default;Object.defineProperty(ji,"__esModule",{value:!0});ji.default=void 0;var Ra=Cu(Au),Iu=Yi,Du=(0,Ra.default)((0,Ra.default)({},Iu.commonLocale),{},{locale:"de_DE",today:"Heute",now:"Jetzt",backToToday:"Zurück zu Heute",ok:"OK",clear:"Zurücksetzen",month:"Monat",year:"Jahr",timeSelect:"Zeit wählen",dateSelect:"Datum wählen",monthSelect:"Wähle einen Monat",yearSelect:"Wähle ein Jahr",decadeSelect:"Wähle ein Jahrzehnt",dateFormat:"D.M.YYYY",dateTimeFormat:"D.M.YYYY HH:mm:ss",previousMonth:"Vorheriger Monat (PageUp)",nextMonth:"Nächster Monat (PageDown)",previousYear:"Vorheriges Jahr (Ctrl + left)",nextYear:"Nächstes Jahr (Ctrl + right)",previousDecade:"Vorheriges Jahrzehnt",nextDecade:"Nächstes Jahrzehnt",previousCentury:"Vorheriges Jahrhundert",nextCentury:"Nächstes Jahrhundert"});ji.default=Du;var jr={};Object.defineProperty(jr,"__esModule",{value:!0});jr.default=void 0;const Pu={placeholder:"Zeit auswählen",rangePlaceholder:["Startzeit","Endzeit"]};jr.default=Pu;var rc=Ui.default;Object.defineProperty(Gr,"__esModule",{value:!0});Gr.default=void 0;var Ou=rc(ji),Nu=rc(jr);const Lu={lang:Object.assign({placeholder:"Datum auswählen",rangePlaceholder:["Startdatum","Enddatum"],shortWeekDays:["So","Mo","Di","Mi","Do","Fr","Sa"],shortMonths:["Jan","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"]},Ou.default),timePickerLocale:Object.assign({},Nu.default)};Gr.default=Lu;var Fu=Ui.default;Object.defineProperty(Gi,"__esModule",{value:!0});Gi.default=void 0;var Bu=Fu(Gr);Gi.default=Bu.default;var $i=Ui.default;Object.defineProperty(Vi,"__esModule",{value:!0});Vi.default=void 0;var Uu=$i(Wi),Hu=$i(Gi),ku=$i(Gr),zu=$i(jr);const ke="${label} ist nicht gültig. ${type} erwartet",Vu={locale:"de",Pagination:Uu.default,DatePicker:ku.default,TimePicker:zu.default,Calendar:Hu.default,global:{placeholder:"Bitte auswählen"},Table:{filterTitle:"Filter-Menü",filterConfirm:"OK",filterReset:"Zurücksetzen",filterEmptyText:"Keine Filter",filterSearchPlaceholder:"Suche in Filtern",filterCheckall:"Alle auswählen",selectAll:"Selektiere Alle",selectInvert:"Selektion Invertieren",selectionAll:"Wählen Sie alle Daten aus",sortTitle:"Sortieren",emptyText:"Keine Daten",expand:"Zeile erweitern",collapse:"Zeile reduzieren",triggerDesc:"Klicken zur absteigenden Sortierung",triggerAsc:"Klicken zur aufsteigenden Sortierung",cancelSort:"Klicken zum Abbrechen der Sortierung"},Tour:{Next:"Weiter",Previous:"Zurück",Finish:"Fertig"},Modal:{okText:"OK",cancelText:"Abbrechen",justOkText:"OK"},Popconfirm:{okText:"OK",cancelText:"Abbrechen"},Transfer:{titles:["",""],searchPlaceholder:"Suchen",itemUnit:"Eintrag",itemsUnit:"Einträge",remove:"Entfernen",selectCurrent:"Alle auf aktueller Seite auswählen",removeCurrent:"Auswahl auf aktueller Seite aufheben",selectAll:"Alle auswählen",removeAll:"Auswahl aufheben",selectInvert:"Auswahl umkehren"},Upload:{uploading:"Hochladen...",removeFile:"Datei entfernen",uploadError:"Fehler beim Hochladen",previewFile:"Dateivorschau",downloadFile:"Download-Datei"},Empty:{description:"Keine Daten"},Text:{edit:"Bearbeiten",copy:"Kopieren",copied:"Kopiert",expand:"Erweitern"},Form:{defaultValidateMessages:{default:"Feld-Validierungsfehler: ${label}",required:"Bitte geben Sie ${label} an",enum:"${label} muss eines der folgenden sein [${enum}]",whitespace:"${label} darf kein Leerzeichen sein",date:{format:"${label} ist ein ungültiges Datumsformat",parse:"${label} kann nicht in ein Datum umgewandelt werden",invalid:"${label} ist ein ungültiges Datum"},types:{string:ke,method:ke,array:ke,object:ke,number:ke,date:ke,boolean:ke,integer:ke,float:ke,regexp:ke,email:ke,url:ke,hex:ke},string:{len:"${label} muss genau ${len} Zeichen lang sein",min:"${label} muss mindestens ${min} Zeichen lang sein",max:"${label} darf höchstens ${max} Zeichen lang sein",range:"${label} muss zwischen ${min} und ${max} Zeichen lang sein"},number:{len:"${label} muss gleich ${len} sein",min:"${label} muss mindestens ${min} sein",max:"${label} darf maximal ${max} sein",range:"${label} muss zwischen ${min} und ${max} liegen"},array:{len:"Es müssen ${len} ${label} sein",min:"Es müssen mindestens ${min} ${label} sein",max:"Es dürfen maximal ${max} ${label} sein",range:"Die Anzahl an ${label} muss zwischen ${min} und ${max} liegen"},pattern:{mismatch:"${label} entspricht nicht dem ${pattern} Muster"}}},Image:{preview:"Vorschau"},QRCode:{expired:"QR-Code abgelaufen",refresh:"Aktualisieren"}};Vi.default=Vu;var Wu=Vi;const Gu=tu(Wu),Ki=(t,e,r)=>Bi(e,r)??t,ju=(t,e,r,i)=>Ki(t,{...t,year:e,dayOfYear:r},i),Yu=(t,e,r=new Date)=>{const i=_s(r,t.timeZone);return Ki(t,{...i,minutes:t.minutes},e)},$u=(t,e,r=new Date)=>{const i=_s(r,t.timeZone);return Bi(i,e)??t},Ku=(t,e)=>({latitude:(t==null?void 0:t.latitude)??e.latitude,longitude:(t==null?void 0:t.longitude)??e.longitude}),qu=(t,e)=>t.latitude===e.latitude&&t.longitude===e.longitude,Aa=(t,e,r)=>{const i=t==null?void 0:t.getCenter();return Ku(i?{latitude:i.lat,longitude:i.lng}:null,{latitude:e,longitude:r})},ic=(t,e,r)=>{const[i,n]=W.useState(()=>Aa(t,e,r));return W.useEffect(()=>{const s=()=>{const a=Aa(t,e,r);n(o=>qu(o,a)?o:a)};if(s(),!!t)return t.on(ye.MOVE_END,s),()=>{t.off(ye.MOVE_END,s)}},[e,r,t]),i},xr="flex h-9 min-w-0 items-center justify-center whitespace-nowrap rounded-md border border-neutral-300 bg-white px-1 text-center text-sm text-neutral-800 transition-colors hover:border-amber-500 hover:text-amber-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/40",Ca="h-8 whitespace-nowrap border-r border-neutral-300 px-3 text-sm text-neutral-700 transition-colors last:border-r-0 hover:text-amber-700",ev=[{label:"120 FPS",value:qe.FPS_120},{label:"60 FPS",value:qe.FPS_60},{label:"30 FPS",value:qe.FPS_30},{label:"Ultra",value:qe.ULTRA}],tv=[{label:"0,25 px",value:.25},{label:"0,5 px",value:.5},{label:"1 px",value:1},{label:"2 px",value:2},{label:"4 px",value:4}],rv=[{value:ht.HDR_16,label:"HDR · 16 Bit (Experiment)"},{value:ht.HDR_16_32,label:"HDR · 16/32 Bit (Standard)"},{value:ht.HDR_32,label:"HDR · 32 Bit (ohne MSAA)"},{value:ht.SDR_8,label:"SDR · 8 Bit (Experiment)"}],Xu=t=>`${String(t).padStart(2,"0")}:00`,nc=(t,e,r)=>({"--shadow-range-progress":`${r>e?Math.max(0,Math.min(100,(t-e)/(r-e)*100)):0}%`});var Qu={exports:{}};(function(t,e){(function(r,i){t.exports=i(hu)})(ru,function(r){function i(c){return c&&typeof c=="object"&&"default"in c?c:{default:c}}var n=i(r),s={s:"ein paar Sekunden",m:["eine Minute","einer Minute"],mm:"%d Minuten",h:["eine Stunde","einer Stunde"],hh:"%d Stunden",d:["ein Tag","einem Tag"],dd:["%d Tage","%d Tagen"],M:["ein Monat","einem Monat"],MM:["%d Monate","%d Monaten"],y:["ein Jahr","einem Jahr"],yy:["%d Jahre","%d Jahren"]};function a(c,l,u){var d=s[u];return Array.isArray(d)&&(d=d[l?0:1]),d.replace("%d",c)}var o={name:"de",weekdays:"Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),weekdaysShort:"So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),weekdaysMin:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),months:"Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sept._Okt._Nov._Dez.".split("_"),ordinal:function(c){return c+"."},weekStart:1,yearStart:4,formats:{LTS:"HH:mm:ss",LT:"HH:mm",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY HH:mm",LLLL:"dddd, D. MMMM YYYY HH:mm"},relativeTime:{future:"in %s",past:"vor %s",s:a,m:a,mm:a,h:a,hh:a,d:a,dd:a,M:a,MM:a,y:a,yy:a}};return n.default.locale(o,null,!0),o})})(Qu);const Zu=({config:t,libreMap:e,state:r,setState:i,dateState:n,setDateState:s})=>{const{latitude:a=Mi.latitude,longitude:o=Mi.longitude}=t??{},c=ic(e,a,o),[l,u]=W.useState(!1),d=n,g=W.useMemo(()=>d?Bo(d,c):null,[c,d]),p=W.useMemo(()=>d?mu(new Date(Date.UTC(d.year,0,d.dayOfYear))).locale("de"):null,[d]);if(!r||!d||!g||!p)return null;const f=Math.ceil(g.sunriseMinutes),y=Math.floor(g.sunsetMinutes),h=v=>{s(Ki(d,v,c))};return D.jsx("div",{className:"shadow-simulation-header-controls text-sm text-neutral-700","data-test-id":"shadow-simulation-header-controls",children:D.jsxs("div",{className:"shadow-simulation-header-layout",children:[D.jsxs("div",{className:"shadow-simulation-header-date grid grid-cols-[28px_minmax(0,118px)_28px] items-center",children:[D.jsx("button",{type:"button",className:"flex h-9 w-7 items-center justify-center rounded-full hover:bg-neutral-100","aria-label":"Vorheriger Tag",onClick:()=>h({...d,...rs(d,-1)}),children:D.jsx(Pt,{icon:iu})}),D.jsxs("div",{className:"relative min-w-0 justify-self-center",children:[D.jsxs("button",{type:"button",className:"flex h-9 max-w-full items-center gap-1.5 whitespace-nowrap rounded-md px-1 tabular-nums hover:bg-neutral-100","aria-label":"Datum auswählen","aria-expanded":l,onClick:()=>u(!0),children:[D.jsx(Pt,{icon:nu,className:"shrink-0 text-neutral-500"}),D.jsx("span",{className:"truncate",children:xl(d,!1)})]}),D.jsx(fu,{open:l,value:p,locale:Gu.DatePicker,format:"D. MMMM YYYY",allowClear:!1,inputReadOnly:!0,getPopupContainer:v=>v.parentElement??v,onOpenChange:u,onChange:v=>{v&&(h({...d,year:v.year(),dayOfYear:Uo(v.year(),v.month(),v.date())}),u(!1))},className:"pointer-events-none absolute left-0 top-full h-0 w-0 overflow-hidden p-0 opacity-0","aria-label":"Datum auswählen"})]}),D.jsx("button",{type:"button",className:"flex h-9 w-7 items-center justify-center rounded-full hover:bg-neutral-100","aria-label":"Nächster Tag",onClick:()=>h({...d,...rs(d,1)}),children:D.jsx(Pt,{icon:su})})]}),D.jsx("span",{className:"shadow-simulation-header-divider h-7 w-px bg-neutral-200","aria-hidden":"true"}),D.jsxs("label",{className:"shadow-simulation-header-time m-0 flex h-9 w-fit cursor-pointer items-center gap-1.5 rounded-md px-1 hover:bg-neutral-100",children:[D.jsx(Pt,{icon:au,className:"shrink-0 text-neutral-500"}),D.jsx("input",{type:"time",value:Mn(d.minutes),min:Mn(f),max:Mn(y),step:60,onClick:v=>{try{v.currentTarget.showPicker()}catch{return}},onChange:v=>{const[b,E]=v.currentTarget.value.split(":").map(Number);!Number.isFinite(b)||!Number.isFinite(E)||h({...d,minutes:b*60+E})},className:"shadow-simulation-time-input w-[46px] cursor-pointer bg-transparent p-0 text-sm font-medium leading-none tabular-nums text-neutral-800 outline-none","aria-label":"Uhrzeit auswählen","data-test-id":"shadow-simulation-time-input"})]}),D.jsx("input",{type:"range",min:f,max:y,step:1,value:d.minutes,onChange:v=>h({...d,minutes:Number(v.currentTarget.value)}),className:"shadow-simulation-header-range shadow-simulation-range cursor-pointer",style:nc(d.minutes,f,y),"aria-label":"Uhrzeit","data-test-id":"shadow-simulation-ribbon-time"}),D.jsx("button",{type:"button",className:"shadow-simulation-header-play flex h-9 w-9 items-center justify-center rounded-full bg-amber-50 text-amber-600 hover:bg-amber-100","aria-label":r.isAnimating?"Animation pausieren":"Animation starten","aria-pressed":r.isAnimating??!1,onClick:()=>i({...r,isAnimating:!r.isAnimating}),children:D.jsx(Pt,{icon:r.isAnimating?ou:cu})})]})})},Ia=[[0,1],[1,3],[3,2],[2,0],[4,5],[5,7],[7,6],[6,4],[0,4],[1,5],[2,6],[3,7]],Ju=({min:t,max:e})=>[new T(t.x,t.y,t.z),new T(e.x,t.y,t.z),new T(t.x,e.y,t.z),new T(e.x,e.y,t.z),new T(t.x,t.y,e.z),new T(e.x,t.y,e.z),new T(t.x,e.y,e.z),new T(e.x,e.y,e.z)],ed=t=>[t.coordinateSystem===Tl?0:-1,1].flatMap(r=>[-1,1].flatMap(i=>[-1,1].map(n=>new T(n,i,r).unproject(t)))),Dn=(t,e,r)=>t.every(i=>i.distanceToPoint(e)>=-r),Da=(t,e,r)=>e.x>=t.min.x-r&&e.x<=t.max.x+r&&e.y>=t.min.y-r&&e.y<=t.max.y+r&&e.z>=t.min.z-r&&e.z<=t.max.z+r,as=(t,e,r)=>{t.some(i=>i.distanceToSquared(e)<=r)||t.push(e)},Pa=(t,e,r,i,n,s)=>{const a=e.clone().sub(t);for(const o of r){const c=o.distanceToPoint(t),l=o.distanceToPoint(e),u=c-l;if(Math.abs(u)<=Number.EPSILON)continue;const d=c/u;if(d<0||d>1)continue;const g=t.clone().addScaledVector(a,d);i(g)&&as(n,g,s)}},sc=(t,e,r=1e-6)=>{if(e.isEmpty())return[];t.updateMatrixWorld(!0);const i=new Wr().setFromProjectionMatrix(new re().multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),t.coordinateSystem,t.reversedDepth);if(!i.intersectsBox(e))return[];const n=r*r,s=Ju(e),a=ed(t),o=[];for(const l of s)Dn(i.planes,l,r)&&as(o,l,n);for(const l of a)Da(e,l,r)&&as(o,l,n);for(const[l,u]of Ia)Pa(s[l],s[u],i.planes,d=>Dn(i.planes,d,r),o,n);const c=[new ut(new T(1,0,0),-e.min.x),new ut(new T(-1,0,0),e.max.x),new ut(new T(0,1,0),-e.min.y),new ut(new T(0,-1,0),e.max.y),new ut(new T(0,0,1),-e.min.z),new ut(new T(0,0,-1),e.max.z)];for(const[l,u]of Ia)Pa(a[l],a[u],c,d=>Da(e,d,r)&&Dn(i.planes,d,r),o,n);return o},ac=(t,e)=>{const r=Yr(t).map(o=>new ie(o.x,o.y,o.z,1).applyMatrix4(e));if(r.some(o=>o.w<=0))return new ie(0,0,1,1);const i=Math.max(0,(Math.min(...r.map(o=>o.x/o.w))+1)/2),n=Math.max(0,(Math.min(...r.map(o=>o.y/o.w))+1)/2),s=Math.min(1,(Math.max(...r.map(o=>o.x/o.w))+1)/2),a=Math.min(1,(Math.max(...r.map(o=>o.y/o.w))+1)/2);return new ie(i,n,Math.max(0,s-i),Math.max(0,a-n))},Yr=t=>[t.min.x,t.max.x].flatMap(e=>[t.min.y,t.max.y].flatMap(r=>[t.min.z,t.max.z].map(i=>new T(e,r,i)))),oc=(t,e,r)=>{const i=e.elements,n=Yr(t).map(o=>new ie(o.x,o.y,o.z,1).applyMatrix4(e)),s=Math.min(...n.map(o=>o.w));if(s<=0)return 1/0;let a=0;for(const[o,c]of[[0,r.x],[1,r.y]])for(let l=0;l<3;l+=1){const u=Math.max(...n.map(d=>Math.abs(i[l*4+o]*d.w-(o===0?d.x:d.y)*i[l*4+3])));a+=(c*.5*u/(s*s))**2}return Math.sqrt(a)},td=(t,e,r,i)=>{if(!(i>0&&Number.isFinite(i))||!(r.x>0&&r.y>0))throw new RangeError("Shadow page projection requires a positive pixel target and viewport");const n=new re().multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),s=new Set;for(const{id:o,bounds:c}of t){if(s.has(o)||c.isEmpty()||![...c.min.toArray(),...c.max.toArray()].every(Number.isFinite))throw new RangeError("Receiver cells require unique IDs and finite, nonempty bounds");s.add(o)}const a=new Wr().setFromProjectionMatrix(n);return t.filter(({bounds:o})=>a.intersectsBox(o)).map(o=>({...o,screenBounds:ac(o.bounds,n),groundTexelTargetMeters:Math.max(1e-9,i/oc(o.bounds,n,r))}))},rd=(t,e,r,i,n)=>t.clone().union(t.clone().translate(e.clone().normalize().multiplyScalar(r))).expandByScalar(2*r*Math.sin(i/2)+n),id=(t,e)=>t.flatMap(({bounds:r})=>sc(e,r).length>0?Yr(r):[]),li={WEST:"west",EAST:"east",SOUTH:"south",NORTH:"north"},Tr=({bounds:t})=>(t.max.x-t.min.x)*(t.max.z-t.min.z),nd=(t,e)=>t.min.z===e.min.z&&t.max.z===e.max.z&&(t.max.x===e.min.x||e.max.x===t.min.x)||t.min.x===e.min.x&&t.max.x===e.max.x&&(t.max.z===e.min.z||e.max.z===t.min.z),sd=t=>{const e=new Map(t.map(i=>[i.id,i]));let r=!0;for(;r;){r=!1;for(const i of e.values()){if(Math.min(i.bounds.max.x-i.bounds.min.x,i.bounds.max.z-i.bounds.min.z)>=i.fragmentMergeWidthMeters)continue;const s=Tr(i),a=[...e.values()].filter(o=>o!==i&&(Tr(o)>s||Tr(o)===s&&o.id<i.id)&&nd(i.bounds,o.bounds)).sort((o,c)=>Tr(c)-Tr(o)||(o.id<c.id?-1:o.id>c.id?1:0))[0];if(a){e.set(a.id,{...a,bounds:a.bounds.clone().union(i.bounds)}),e.delete(i.id),r=!0;break}}}return[...e.values()].map(({id:i,bounds:n})=>({id:i,bounds:n}))},Pn=t=>({west:t.min.x,east:t.max.x,south:t.min.z,north:t.max.z}),cc=(t,e)=>t.west<e.east&&t.east>e.west&&t.south<e.north&&t.north>e.south,ad=(t,e,r)=>{if(!cc(t,e))return[t];const i=Math.max(t.west,e.west),n=Math.min(t.east,e.east),s=Math.max(t.south,e.south),a=Math.min(t.north,e.north);return[{...t,east:i,side:li.WEST},{...t,west:n,side:li.EAST},{west:i,east:n,south:t.south,north:s,side:li.SOUTH},{west:i,east:n,south:a,north:t.north,side:li.NORTH}].filter(o=>o.west<o.east&&o.south<o.north).map(({side:o,...c})=>({...c,splitPath:[...t.splitPath,r,o]}))},od=t=>{const e=new Set;for(const{id:n,bounds:s}of t){if(e.has(n)||s.isEmpty()||![...s.min.toArray(),...s.max.toArray()].every(Number.isFinite))throw new RangeError("Receiver tiles require unique IDs and finite bounds");e.add(n)}const r=[...t].sort((n,s)=>n.id<s.id?-1:n.id>s.id?1:0);if(r.every(({receiverObjectId:n})=>n!==void 0))return r;const i=r.flatMap(({id:n,bounds:s},a)=>{const o=Pn(s);return o.west===o.east||o.south===o.north?[]:r.slice(0,a).reduce((l,u)=>l.flatMap(d=>ad(d,Pn(u.bounds),u.id)),[{...o,splitPath:[]}]).map(l=>{const u=r.reduce((d,g)=>cc(l,Pn(g.bounds))?[Math.min(d[0],g.bounds.min.y),Math.max(d[1],g.bounds.max.y)]:d,[s.min.y,s.max.y]);return{fragmentMergeWidthMeters:l.splitPath.length===0?0:Math.max(.1,.01*Math.min(o.east-o.west,o.north-o.south)),id:l.splitPath.length===0?n:JSON.stringify([n,...l.splitPath]),bounds:new Ne(new T(l.west,u[0],l.south),new T(l.east,u[1],l.north))}})});return sd(i)},cd=(t,e=16)=>{if(!Number.isInteger(e)||e<=0||t.length===0)return[];const i=t.reduce((c,l)=>c.union(l.bounds),new Ne).getCenter(new T),n=new Set(t.map(({id:c})=>c)),s=new Map;for(const c of t){const l=c.bounds.max.x-c.bounds.min.x;if(!(l>0&&Number.isFinite(l)))continue;const u=Math.round(c.bounds.min.x/l),d=Math.round(c.bounds.min.z/l);for(let g=-1;g<=1;g+=1)for(let p=-1;p<=1;p+=1){const f=`${l}:${u+g}:${d+p}`;n.has(f)||s.has(f)||s.set(f,{id:f,bounds:c.bounds.clone().translate(new T(g*l,0,p*l))})}}const a=Array.from({length:8},()=>[]);for(const c of s.values()){const l=c.bounds.getCenter(new T).sub(i),u=(Math.round(Math.atan2(l.z,l.x)/(Math.PI/4))+8)%8;a[u].push(c)}for(const c of a)c.sort((l,u)=>l.bounds.distanceToPoint(i)-u.bounds.distanceToPoint(i)||l.id.localeCompare(u.id));const o=[];for(let c=0;o.length<e;c+=1){const l=a.flatMap(u=>u[c]?[u[c]]:[]);if(l.length===0)break;o.push(...l.slice(0,e-o.length))}return o},ld=(t,e)=>{const r=t.getCenter(new T);let i=null,n=1/0;for(const s of e){const a=s.receiverBounds.distanceToPoint(r);a<n&&Number.isInteger(s.terrainLevel)&&(n=a,i=s.terrainLevel)}return i};/**
 * postprocessing v6.39.4 build Mon Jul 27 2026
 * https://github.com/pmndrs/postprocessing
 * Copyright 2015-2026 Raoul van Rüschen
 * @license Zlib
 */var ud=(()=>{const t=new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),e=new Float32Array([0,0,2,0,0,2]),r=new Vo;return r.setAttribute("position",new wa(t,3)),r.setAttribute("uv",new wa(e,2)),r})(),dd=class os{static get fullscreenGeometry(){return ud}constructor(e="Pass",r=new Fr,i=new Ts){this.name=e,this.renderer=null,this.scene=r,this.camera=i,this.screen=null,this.rtt=!0,this.needsSwap=!0,this.needsDepthBlit=!1,this.needsDepthTexture=!1,this.enabled=!0}get renderToScreen(){return!this.rtt}set renderToScreen(e){if(this.rtt===e){const r=this.fullscreenMaterial;r!==null&&(r.needsUpdate=!0),this.rtt=!e}}set mainScene(e){}set mainCamera(e){}setRenderer(e){this.renderer=e}isEnabled(){return this.enabled}setEnabled(e){this.enabled=e}get fullscreenMaterial(){return this.screen!==null?this.screen.material:null}set fullscreenMaterial(e){let r=this.screen;r!==null?r.material=e:(r=new Vr(os.fullscreenGeometry,e),r.frustumCulled=!1,this.scene===null&&(this.scene=new Fr),this.scene.add(r),this.screen=r)}getFullscreenMaterial(){return this.fullscreenMaterial}setFullscreenMaterial(e){this.fullscreenMaterial=e}getDepthTexture(){return null}setDepthTexture(e,r=ko){}render(e,r,i,n,s){throw new Error("Render method not implemented!")}setSize(e,r){}initialize(e,r,i){}dispose(){for(const e of Object.keys(this)){const r=this[e];(r instanceof Ke||r instanceof Hi||r instanceof zo||r instanceof os)&&this[e].dispose()}this.fullscreenMaterial!==null&&this.fullscreenMaterial.dispose()}},lc={NONE:0,DEPTH:1,CONVOLUTION:2},J={SKIP:9,SET:30,ADD:0,ALPHA:1,AVERAGE:2,COLOR:3,COLOR_BURN:4,COLOR_DODGE:5,DARKEN:6,DIFFERENCE:7,DIVIDE:8,DST:9,EXCLUSION:10,HARD_LIGHT:11,HARD_MIX:12,HUE:13,INVERT:14,INVERT_RGB:15,LIGHTEN:16,LINEAR_BURN:17,LINEAR_DODGE:18,LINEAR_LIGHT:19,LUMINOSITY:20,MULTIPLY:21,NEGATION:22,NORMAL:23,OVERLAY:24,PIN_LIGHT:25,REFLECT:26,SATURATION:27,SCREEN:28,SOFT_LIGHT:29,SRC:30,SUBTRACT:31,VIVID_LIGHT:32},hd="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",md="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,src.a*opacity);}",fd="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=(dst.rgb+src.rgb)*0.5;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",pd="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.xy,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",gd="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=mix(step(0.0,b)*(1.0-min(vec3(1.0),(1.0-a)/max(b,1e-9))),vec3(1.0),step(1.0,a));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",vd="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=step(0.0,a)*mix(min(vec3(1.0),a/max(1.0-b,1e-9)),vec3(1.0),step(1.0,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",yd="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Sd="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=abs(dst.rgb-src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",wd="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb/max(src.rgb,1e-9);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",_d="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-2.0*dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",xd="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb,1.0);vec3 b=min(src.rgb,1.0);vec3 c=mix(2.0*a*b,1.0-2.0*(1.0-a)*(1.0-b),step(0.5,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Td="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=step(1.0,dst.rgb+src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",bd="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.x,a.yz));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Md="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Ed="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=src.rgb*max(1.0-dst.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Rd="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Ad="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Cd="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb+src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Id="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(2.0*src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Dd="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.xy,b.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Pd="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Od="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-abs(1.0-dst.rgb-src.rgb),0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Nd="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,opacity);}",Ld="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=2.0*src.rgb*dst.rgb;vec3 b=1.0-2.0*(1.0-src.rgb)*(1.0-dst.rgb);vec3 c=mix(a,b,step(0.5,dst.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Fd="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 c=mix(mix(src2,dst.rgb,step(0.5*dst.rgb,src.rgb)),max(src2-1.0,vec3(0.0)),step(dst.rgb,src2-1.0));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Bd="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb*dst.rgb/max(1.0-src.rgb,1e-9),1.0);vec3 c=mix(a,src.rgb,step(1.0,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Ud="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.x,b.y,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Hd="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-min(dst.rgb*src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",kd="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 d=dst.rgb+(src2-1.0);vec3 w=step(0.5,src.rgb);vec3 a=dst.rgb-(1.0-src2)*dst.rgb*(1.0-dst.rgb);vec3 b=mix(d*(sqrt(dst.rgb)-dst.rgb),d*dst.rgb*((16.0*dst.rgb-12.0)*dst.rgb+3.0),w*(1.0-step(0.25,dst.rgb)));vec3 c=mix(a,b,w);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",zd="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return src;}",Vd="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Wd="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=mix(max(1.0-min((1.0-dst.rgb)/(2.0*src.rgb),1.0),0.0),min(dst.rgb/(2.0*(1.0-src.rgb)),1.0),step(0.5,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Gd=new Map([[J.ADD,hd],[J.ALPHA,md],[J.AVERAGE,fd],[J.COLOR,pd],[J.COLOR_BURN,gd],[J.COLOR_DODGE,vd],[J.DARKEN,yd],[J.DIFFERENCE,Sd],[J.DIVIDE,wd],[J.DST,null],[J.EXCLUSION,_d],[J.HARD_LIGHT,xd],[J.HARD_MIX,Td],[J.HUE,bd],[J.INVERT,Md],[J.INVERT_RGB,Ed],[J.LIGHTEN,Rd],[J.LINEAR_BURN,Ad],[J.LINEAR_DODGE,Cd],[J.LINEAR_LIGHT,Id],[J.LUMINOSITY,Dd],[J.MULTIPLY,Pd],[J.NEGATION,Od],[J.NORMAL,Nd],[J.OVERLAY,Ld],[J.PIN_LIGHT,Fd],[J.REFLECT,Bd],[J.SATURATION,Ud],[J.SCREEN,Hd],[J.SOFT_LIGHT,kd],[J.SRC,zd],[J.SUBTRACT,Vd],[J.VIVID_LIGHT,Wd]]),jd=class extends Ho{constructor(t,e=1){super(),this._blendFunction=t,this.opacity=new A(e)}getOpacity(){return this.opacity.value}setOpacity(t){this.opacity.value=t}get blendFunction(){return this._blendFunction}set blendFunction(t){this._blendFunction=t,this.dispatchEvent({type:"change"})}getBlendFunction(){return this.blendFunction}setBlendFunction(t){this.blendFunction=t}getShaderCode(){return Gd.get(this.blendFunction)}},Yd=class extends Ho{constructor(t,e,{attributes:r=lc.NONE,blendFunction:i=J.NORMAL,defines:n=new Map,uniforms:s=new Map,extensions:a=null,vertexShader:o=null}={}){super(),this.name=t,this.renderer=null,this.attributes=r,this.fragmentShader=e,this.vertexShader=o,this.defines=n,this.uniforms=s,this.extensions=a,this.blendMode=new jd(i),this.blendMode.addEventListener("change",c=>this.setChanged()),this._inputColorSpace=bl,this._outputColorSpace=Ml}get inputColorSpace(){return this._inputColorSpace}set inputColorSpace(t){this._inputColorSpace=t,this.setChanged()}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t,this.setChanged()}set mainScene(t){}set mainCamera(t){}getName(){return this.name}setRenderer(t){this.renderer=t}getDefines(){return this.defines}getUniforms(){return this.uniforms}getExtensions(){return this.extensions}getBlendMode(){return this.blendMode}getAttributes(){return this.attributes}setAttributes(t){this.attributes=t,this.setChanged()}getFragmentShader(){return this.fragmentShader}setFragmentShader(t){this.fragmentShader=t,this.setChanged()}getVertexShader(){return this.vertexShader}setVertexShader(t){this.vertexShader=t,this.setChanged()}setChanged(){this.dispatchEvent({type:"change"})}setDepthTexture(t,e=ko){}update(t,e,r){}setSize(t,e){}initialize(t,e,r){}dispose(){for(const t of Object.keys(this)){const e=this[t];(e instanceof Ke||e instanceof Hi||e instanceof zo||e instanceof dd)&&this[t].dispose()}}};const $d=new T;function uc(t,e,r=new T,i){const{x:n,y:s,z:a}=t,o=e.x,c=e.y,l=e.z,u=n*n*o,d=s*s*c,g=a*a*l,p=u+d+g,f=Math.sqrt(1/p);if(!Number.isFinite(f))return;const y=$d.copy(t).multiplyScalar(f);if(p<((i==null?void 0:i.centerTolerance)??.1))return r.copy(y);const h=y.multiply(e).multiplyScalar(2);let v=(1-f)*t.length()/(h.length()/2),b=0,E,C,R,I;do{v-=b,E=1/(1+v*o),C=1/(1+v*c),R=1/(1+v*l);const M=E*E,U=C*C,O=R*R,L=M*E,j=U*C,Z=O*R;I=u*M+d*U+g*O-1,b=I/((u*L*o+d*j*c+g*Z*l)*-2)}while(Math.abs(I)>1e-12);return r.set(n*E,s*C,a*R)}const ui=new T,Oa=new T,Na=new T,cs=class{constructor(e,r,i){this.radii=new T(e,r,i)}get minimumRadius(){return Math.min(this.radii.x,this.radii.y,this.radii.z)}get maximumRadius(){return Math.max(this.radii.x,this.radii.y,this.radii.z)}reciprocalRadii(e=new T){const{x:r,y:i,z:n}=this.radii;return e.set(1/r,1/i,1/n)}reciprocalRadiiSquared(e=new T){const{x:r,y:i,z:n}=this.radii;return e.set(1/r**2,1/i**2,1/n**2)}projectOnSurface(e,r=new T,i){return uc(e,this.reciprocalRadiiSquared(),r,i)}getSurfaceNormal(e,r=new T){return r.multiplyVectors(this.reciprocalRadiiSquared(ui),e).normalize()}getEastNorthUpVectors(e,r=new T,i=new T,n=new T){this.getSurfaceNormal(e,n),r.set(-e.y,e.x,0).normalize(),i.crossVectors(n,r).normalize()}getEastNorthUpFrame(e,r=new re){const i=ui,n=Oa,s=Na;return this.getEastNorthUpVectors(e,i,n,s),r.makeBasis(i,n,s).setPosition(e)}getIntersection(e,r=new T){const i=this.reciprocalRadii(ui),n=Oa.copy(i).multiply(e.origin),s=Na.copy(i).multiply(e.direction),a=n.lengthSq(),o=s.lengthSq(),c=n.dot(s),l=c**2-o*(a-1);if(a===1)return r.copy(e.origin);if(a>1){if(c>=0||l<0)return;const u=Math.sqrt(l),d=(-c-u)/o,g=(-c+u)/o;return e.at(Math.min(d,g),r)}if(a<1){const u=c**2-o*(a-1),d=Math.sqrt(u),g=(-c+d)/o;return e.at(g,r)}if(c<0)return e.at(-c/o,r)}getOsculatingSphereCenter(e,r,i=new T){const n=this.radii.x**2,s=ui.set(e.x/n,e.y/n,e.z/this.radii.z**2).normalize();return i.copy(s.multiplyScalar(-r).add(e))}};cs.WGS84=new cs(6378137,6378137,6356752314245179e-9);let mt=cs;const di=new T,La=new T,Ar=class ls{constructor(e=0,r=0,i=0){this.longitude=e,this.latitude=r,this.height=i}set(e,r,i){return this.longitude=e,this.latitude=r,i!=null&&(this.height=i),this}clone(){return new ls(this.longitude,this.latitude,this.height)}copy(e){return this.longitude=e.longitude,this.latitude=e.latitude,this.height=e.height,this}equals(e){return e.longitude===this.longitude&&e.latitude===this.latitude&&e.height===this.height}setLongitude(e){return this.longitude=e,this}setLatitude(e){return this.latitude=e,this}setHeight(e){return this.height=e,this}normalize(){return this.longitude<ls.MIN_LONGITUDE&&(this.longitude+=Math.PI*2),this}setFromECEF(e,r){const i=((r==null?void 0:r.ellipsoid)??mt.WGS84).reciprocalRadiiSquared(di),n=uc(e,i,La,r);if(n==null)throw new Error(`Could not project position to ellipsoid surface: ${e.toArray()}`);const s=di.multiplyVectors(n,i).normalize();this.longitude=Math.atan2(s.y,s.x),this.latitude=Math.asin(s.z);const a=di.subVectors(e,n);return this.height=Math.sign(a.dot(e))*a.length(),this}toECEF(e=new T,r){const i=(r==null?void 0:r.ellipsoid)??mt.WGS84,n=di.multiplyVectors(i.radii,i.radii),s=Math.cos(this.latitude),a=La.set(s*Math.cos(this.longitude),s*Math.sin(this.longitude),Math.sin(this.latitude)).normalize();return e.multiplyVectors(n,a),e.divideScalar(Math.sqrt(a.dot(e))).add(a.multiplyScalar(this.height))}fromArray(e,r=0){return this.longitude=e[r],this.latitude=e[r+1],this.height=e[r+2],this}toArray(e=[],r=0){return e[r]=this.longitude,e[r+1]=this.latitude,e[r+2]=this.height,e}*[Symbol.iterator](){yield this.longitude,yield this.latitude,yield this.height}};Ar.MIN_LONGITUDE=-Math.PI,Ar.MAX_LONGITUDE=Math.PI,Ar.MIN_LATITUDE=-Math.PI/2,Ar.MAX_LATITUDE=Math.PI/2;let dc=Ar;var Kd="Invariant failed";function hc(t,e){if(!t)throw new Error(Kd)}class qd extends Ms{load(e,r,i,n){const s=new Rl(this.manager);s.setResponseType("arraybuffer"),s.setRequestHeader(this.requestHeader),s.setPath(this.path),s.setWithCredentials(this.withCredentials),s.load(e,a=>{hc(a instanceof ArrayBuffer);try{r(a)}catch(o){n!=null?n(o):console.error(o),this.manager.itemError(e)}},i,n)}}const Xd="This is not an object",Qd="This is not a Float16Array object",Fa="This constructor is not a subclass of Float16Array",mc="The constructor property value is not an object",Zd="Species constructor didn't return TypedArray object",Jd="Derived constructor created TypedArray object which was too small length",Or="Attempting to access detached ArrayBuffer",us="Cannot convert undefined or null to object",ds="Cannot mix BigInt and other types, use explicit conversions",Ba="@@iterator property is not callable",Ua="Reduce of empty array with no initial value",eh="The comparison function must be either a function or undefined",On="Offset is out of bounds";function de(t){return(e,...r)=>Fe(t,e,r)}function ur(t,e){return de(sr(t,e).get)}const{apply:Fe,construct:Cr,defineProperty:th,get:Nn,getOwnPropertyDescriptor:sr,getPrototypeOf:$r,has:hs,ownKeys:fc,set:Ha,setPrototypeOf:pc}=Reflect,rh=Proxy,{EPSILON:ih,MAX_SAFE_INTEGER:ka,isFinite:gc,isNaN:ar}=Number,{iterator:ft,species:nh,toStringTag:Is,for:sh}=Symbol,or=Object,{create:qi,defineProperty:Kr,freeze:ah,is:za}=or,ms=or.prototype,oh=ms.__lookupGetter__?de(ms.__lookupGetter__):(t,e)=>{if(t==null)throw ge(us);let r=or(t);do{const i=sr(r,e);if(i!==void 0)return Mt(i,"get")?i.get:void 0}while((r=$r(r))!==null)},Mt=or.hasOwn||de(ms.hasOwnProperty),vc=Array,yc=vc.isArray,Xi=vc.prototype,ch=de(Xi.join),lh=de(Xi.push),uh=de(Xi.toLocaleString),Ds=Xi[ft],dh=de(Ds),{abs:hh,trunc:Sc}=Math,Qi=ArrayBuffer,mh=Qi.isView,wc=Qi.prototype,fh=de(wc.slice),ph=ur(wc,"byteLength"),fs=typeof SharedArrayBuffer<"u"?SharedArrayBuffer:null,gh=fs&&ur(fs.prototype,"byteLength"),Ps=$r(Uint8Array),vh=Ps.from,Te=Ps.prototype,yh=Te[ft],Sh=de(Te.keys),wh=de(Te.values),_h=de(Te.entries),xh=de(Te.set),Va=de(Te.reverse),Th=de(Te.fill),bh=de(Te.copyWithin),Wa=de(Te.sort),br=de(Te.slice),Mh=de(Te.subarray),xe=ur(Te,"buffer"),Ft=ur(Te,"byteOffset"),ae=ur(Te,"length"),_c=ur(Te,Is),Eh=Uint8Array,ze=Uint16Array,Ga=(...t)=>Fe(vh,ze,t),Os=Uint32Array,Rh=Float32Array,zt=$r([][ft]()),Zi=de(zt.next),Ah=de(function*(){}().next),Ch=$r(zt),Ih=DataView.prototype,Dh=de(Ih.getUint16),ge=TypeError,Ln=RangeError,xc=WeakSet,Tc=xc.prototype,Ph=de(Tc.add),Oh=de(Tc.has),Ji=WeakMap,Ns=Ji.prototype,Ri=de(Ns.get),Nh=de(Ns.has),Ls=de(Ns.set),bc=new Ji,Lh=qi(null,{next:{value:function(){const t=Ri(bc,this);return Zi(t)}},[ft]:{value:function(){return this}}});function Ir(t){if(t[ft]===Ds&&zt.next===Zi)return t;const e=qi(Lh);return Ls(bc,e,dh(t)),e}const Mc=new Ji,Ec=qi(Ch,{next:{value:function(){const t=Ri(Mc,this);return Ah(t)},writable:!0,configurable:!0}});for(const t of fc(zt))t!=="next"&&Kr(Ec,t,sr(zt,t));function ja(t){const e=qi(Ec);return Ls(Mc,e,t),e}function Ai(t){return t!==null&&typeof t=="object"||typeof t=="function"}function Ya(t){return t!==null&&typeof t=="object"}function Ci(t){return _c(t)!==void 0}function ps(t){const e=_c(t);return e==="BigInt64Array"||e==="BigUint64Array"}function Fh(t){try{return yc(t)?!1:(ph(t),!0)}catch{return!1}}function Rc(t){if(fs===null)return!1;try{return gh(t),!0}catch{return!1}}function Bh(t){return Fh(t)||Rc(t)}function $a(t){return yc(t)?t[ft]===Ds&&zt.next===Zi:!1}function Uh(t){return Ci(t)?t[ft]===yh&&zt.next===Zi:!1}function hi(t){if(typeof t!="string")return!1;const e=+t;return t!==e+""||!gc(e)?!1:e===Sc(e)}const Ii=sh("__Float16Array__");function Hh(t){if(!Ya(t))return!1;const e=$r(t);if(!Ya(e))return!1;const r=e.constructor;if(r===void 0)return!1;if(!Ai(r))throw ge(mc);return hs(r,Ii)}const gs=1/ih;function kh(t){return t+gs-gs}const Ac=6103515625e-14,zh=65504,Cc=.0009765625,Ka=Cc*Ac,Vh=Cc*gs;function Wh(t){const e=+t;if(!gc(e)||e===0)return e;const r=e>0?1:-1,i=hh(e);if(i<Ac)return r*kh(i/Ka)*Ka;const n=(1+Vh)*i,s=n-(n-i);return s>zh||ar(s)?r*(1/0):r*s}const Ic=new Qi(4),Dc=new Rh(Ic),Pc=new Os(Ic),it=new ze(512),nt=new Eh(512);for(let t=0;t<256;++t){const e=t-127;e<-24?(it[t]=0,it[t|256]=32768,nt[t]=24,nt[t|256]=24):e<-14?(it[t]=1024>>-e-14,it[t|256]=1024>>-e-14|32768,nt[t]=-e-1,nt[t|256]=-e-1):e<=15?(it[t]=e+15<<10,it[t|256]=e+15<<10|32768,nt[t]=13,nt[t|256]=13):e<128?(it[t]=31744,it[t|256]=64512,nt[t]=24,nt[t|256]=24):(it[t]=31744,it[t|256]=64512,nt[t]=13,nt[t|256]=13)}function ct(t){Dc[0]=Wh(t);const e=Pc[0],r=e>>23&511;return it[r]+((e&8388607)>>nt[r])}const Fs=new Os(2048);for(let t=1;t<1024;++t){let e=t<<13,r=0;for(;!(e&8388608);)e<<=1,r-=8388608;e&=-8388609,r+=947912704,Fs[t]=e|r}for(let t=1024;t<2048;++t)Fs[t]=939524096+(t-1024<<13);const dr=new Os(64);for(let t=1;t<31;++t)dr[t]=t<<23;dr[31]=1199570944;dr[32]=2147483648;for(let t=33;t<63;++t)dr[t]=2147483648+(t-32<<23);dr[63]=3347054592;const Oc=new ze(64);for(let t=1;t<64;++t)t!==32&&(Oc[t]=1024);function oe(t){const e=t>>10;return Pc[0]=Fs[Oc[e]+(t&1023)]+dr[e],Dc[0]}function Tt(t){const e=+t;return ar(e)||e===0?0:Sc(e)}function Fn(t){const e=Tt(t);return e<0?0:e<ka?e:ka}function mi(t,e){if(!Ai(t))throw ge(Xd);const r=t.constructor;if(r===void 0)return e;if(!Ai(r))throw ge(mc);return r[nh]??e}function Nr(t){if(Rc(t))return!1;try{return fh(t,0,0),!1}catch{}return!0}function qa(t,e){const r=ar(t),i=ar(e);if(r&&i)return 0;if(r)return 1;if(i||t<e)return-1;if(t>e)return 1;if(t===0&&e===0){const n=za(t,0),s=za(e,0);if(!n&&s)return-1;if(n&&!s)return 1}return 0}const Bs=2,Di=new Ji;function tr(t){return Nh(Di,t)||!mh(t)&&Hh(t)}function se(t){if(!tr(t))throw ge(Qd)}function fi(t,e){const r=tr(t),i=Ci(t);if(!r&&!i)throw ge(Zd);if(typeof e=="number"){let n;if(r){const s=q(t);n=ae(s)}else n=ae(t);if(n<e)throw ge(Jd)}if(ps(t))throw ge(ds)}function q(t){const e=Ri(Di,t);if(e!==void 0){const n=xe(e);if(Nr(n))throw ge(Or);return e}const r=t.buffer;if(Nr(r))throw ge(Or);const i=Cr(le,[r,t.byteOffset,t.length],t.constructor);return Ri(Di,i)}function Xa(t){const e=ae(t),r=[];for(let i=0;i<e;++i)r[i]=oe(t[i]);return r}const Nc=new xc;for(const t of fc(Te)){if(t===Is)continue;const e=sr(Te,t);Mt(e,"get")&&typeof e.get=="function"&&Ph(Nc,e.get)}const Gh=ah({get(t,e,r){return hi(e)&&Mt(t,e)?oe(Nn(t,e)):Oh(Nc,oh(t,e))?Nn(t,e):Nn(t,e,r)},set(t,e,r,i){return hi(e)&&Mt(t,e)?Ha(t,e,ct(r)):Ha(t,e,r,i)},getOwnPropertyDescriptor(t,e){if(hi(e)&&Mt(t,e)){const r=sr(t,e);return r.value=oe(r.value),r}return sr(t,e)},defineProperty(t,e,r){return hi(e)&&Mt(t,e)&&Mt(r,"value")&&(r.value=ct(r.value)),th(t,e,r)}});class le{constructor(e,r,i){let n;if(tr(e))n=Cr(ze,[q(e)],new.target);else if(Ai(e)&&!Bh(e)){let a,o;if(Ci(e)){a=e,o=ae(e);const c=xe(e);if(Nr(c))throw ge(Or);if(ps(e))throw ge(ds);const l=new Qi(o*Bs);n=Cr(ze,[l],new.target)}else{const c=e[ft];if(c!=null&&typeof c!="function")throw ge(Ba);c!=null?$a(e)?(a=e,o=e.length):(a=[...e],o=a.length):(a=e,o=Fn(a.length)),n=Cr(ze,[o],new.target)}for(let c=0;c<o;++c)n[c]=ct(a[c])}else n=Cr(ze,arguments,new.target);const s=new rh(n,Gh);return Ls(Di,s,n),s}static from(e,...r){const i=this;if(!hs(i,Ii))throw ge(Fa);if(i===le){if(tr(e)&&r.length===0){const u=q(e),d=new ze(xe(u),Ft(u),ae(u));return new le(xe(br(d)))}if(r.length===0)return new le(xe(Ga(e,ct)));const c=r[0],l=r[1];return new le(xe(Ga(e,function(u,...d){return ct(Fe(c,this,[u,...Ir(d)]))},l)))}let n,s;const a=e[ft];if(a!=null&&typeof a!="function")throw ge(Ba);if(a!=null)$a(e)?(n=e,s=e.length):Uh(e)?(n=e,s=ae(e)):(n=[...e],s=n.length);else{if(e==null)throw ge(us);n=or(e),s=Fn(n.length)}const o=new i(s);if(r.length===0)for(let c=0;c<s;++c)o[c]=n[c];else{const c=r[0],l=r[1];for(let u=0;u<s;++u)o[u]=Fe(c,l,[n[u],u])}return o}static of(...e){const r=this;if(!hs(r,Ii))throw ge(Fa);const i=e.length;if(r===le){const s=new le(i),a=q(s);for(let o=0;o<i;++o)a[o]=ct(e[o]);return s}const n=new r(i);for(let s=0;s<i;++s)n[s]=e[s];return n}keys(){se(this);const e=q(this);return Sh(e)}values(){se(this);const e=q(this);return ja(function*(){for(const r of wh(e))yield oe(r)}())}entries(){se(this);const e=q(this);return ja(function*(){for(const[r,i]of _h(e))yield[r,oe(i)]}())}at(e){se(this);const r=q(this),i=ae(r),n=Tt(e),s=n>=0?n:i+n;if(!(s<0||s>=i))return oe(r[s])}with(e,r){se(this);const i=q(this),n=ae(i),s=Tt(e),a=s>=0?s:n+s,o=+r;if(a<0||a>=n)throw Ln(On);const c=new ze(xe(i),Ft(i),ae(i)),l=new le(xe(br(c))),u=q(l);return u[a]=ct(o),l}map(e,...r){se(this);const i=q(this),n=ae(i),s=r[0],a=mi(i,le);if(a===le){const c=new le(n),l=q(c);for(let u=0;u<n;++u){const d=oe(i[u]);l[u]=ct(Fe(e,s,[d,u,this]))}return c}const o=new a(n);fi(o,n);for(let c=0;c<n;++c){const l=oe(i[c]);o[c]=Fe(e,s,[l,c,this])}return o}filter(e,...r){se(this);const i=q(this),n=ae(i),s=r[0],a=[];for(let l=0;l<n;++l){const u=oe(i[l]);Fe(e,s,[u,l,this])&&lh(a,u)}const o=mi(i,le),c=new o(a);return fi(c),c}reduce(e,...r){se(this);const i=q(this),n=ae(i);if(n===0&&r.length===0)throw ge(Ua);let s,a;r.length===0?(s=oe(i[0]),a=1):(s=r[0],a=0);for(let o=a;o<n;++o)s=e(s,oe(i[o]),o,this);return s}reduceRight(e,...r){se(this);const i=q(this),n=ae(i);if(n===0&&r.length===0)throw ge(Ua);let s,a;r.length===0?(s=oe(i[n-1]),a=n-2):(s=r[0],a=n-1);for(let o=a;o>=0;--o)s=e(s,oe(i[o]),o,this);return s}forEach(e,...r){se(this);const i=q(this),n=ae(i),s=r[0];for(let a=0;a<n;++a)Fe(e,s,[oe(i[a]),a,this])}find(e,...r){se(this);const i=q(this),n=ae(i),s=r[0];for(let a=0;a<n;++a){const o=oe(i[a]);if(Fe(e,s,[o,a,this]))return o}}findIndex(e,...r){se(this);const i=q(this),n=ae(i),s=r[0];for(let a=0;a<n;++a){const o=oe(i[a]);if(Fe(e,s,[o,a,this]))return a}return-1}findLast(e,...r){se(this);const i=q(this),n=ae(i),s=r[0];for(let a=n-1;a>=0;--a){const o=oe(i[a]);if(Fe(e,s,[o,a,this]))return o}}findLastIndex(e,...r){se(this);const i=q(this),n=ae(i),s=r[0];for(let a=n-1;a>=0;--a){const o=oe(i[a]);if(Fe(e,s,[o,a,this]))return a}return-1}every(e,...r){se(this);const i=q(this),n=ae(i),s=r[0];for(let a=0;a<n;++a)if(!Fe(e,s,[oe(i[a]),a,this]))return!1;return!0}some(e,...r){se(this);const i=q(this),n=ae(i),s=r[0];for(let a=0;a<n;++a)if(Fe(e,s,[oe(i[a]),a,this]))return!0;return!1}set(e,...r){se(this);const i=q(this),n=Tt(r[0]);if(n<0)throw Ln(On);if(e==null)throw ge(us);if(ps(e))throw ge(ds);if(tr(e))return xh(q(this),q(e),n);if(Ci(e)){const c=xe(e);if(Nr(c))throw ge(Or)}const s=ae(i),a=or(e),o=Fn(a.length);if(n===1/0||o+n>s)throw Ln(On);for(let c=0;c<o;++c)i[c+n]=ct(a[c])}reverse(){se(this);const e=q(this);return Va(e),this}toReversed(){se(this);const e=q(this),r=new ze(xe(e),Ft(e),ae(e)),i=new le(xe(br(r))),n=q(i);return Va(n),i}fill(e,...r){se(this);const i=q(this);return Th(i,ct(e),...Ir(r)),this}copyWithin(e,r,...i){se(this);const n=q(this);return bh(n,e,r,...Ir(i)),this}sort(e){se(this);const r=q(this),i=e!==void 0?e:qa;return Wa(r,(n,s)=>i(oe(n),oe(s))),this}toSorted(e){se(this);const r=q(this);if(e!==void 0&&typeof e!="function")throw new ge(eh);const i=e!==void 0?e:qa,n=new ze(xe(r),Ft(r),ae(r)),s=new le(xe(br(n))),a=q(s);return Wa(a,(o,c)=>i(oe(o),oe(c))),s}slice(e,r){se(this);const i=q(this),n=mi(i,le);if(n===le){const f=new ze(xe(i),Ft(i),ae(i));return new le(xe(br(f,e,r)))}const s=ae(i),a=Tt(e),o=r===void 0?s:Tt(r);let c;a===-1/0?c=0:a<0?c=s+a>0?s+a:0:c=s<a?s:a;let l;o===-1/0?l=0:o<0?l=s+o>0?s+o:0:l=s<o?s:o;const u=l-c>0?l-c:0,d=new n(u);if(fi(d,u),u===0)return d;const g=xe(i);if(Nr(g))throw ge(Or);let p=0;for(;c<l;)d[p]=oe(i[c]),++c,++p;return d}subarray(e,r){se(this);const i=q(this),n=mi(i,le),s=new ze(xe(i),Ft(i),ae(i)),a=Mh(s,e,r),o=new n(xe(a),Ft(a),ae(a));return fi(o),o}indexOf(e,...r){se(this);const i=q(this),n=ae(i);let s=Tt(r[0]);if(s===1/0)return-1;s<0&&(s+=n,s<0&&(s=0));for(let a=s;a<n;++a)if(Mt(i,a)&&oe(i[a])===e)return a;return-1}lastIndexOf(e,...r){se(this);const i=q(this),n=ae(i);let s=r.length>=1?Tt(r[0]):n-1;if(s===-1/0)return-1;s>=0?s=s<n-1?s:n-1:s+=n;for(let a=s;a>=0;--a)if(Mt(i,a)&&oe(i[a])===e)return a;return-1}includes(e,...r){se(this);const i=q(this),n=ae(i);let s=Tt(r[0]);if(s===1/0)return!1;s<0&&(s+=n,s<0&&(s=0));const a=ar(e);for(let o=s;o<n;++o){const c=oe(i[o]);if(a&&ar(c)||c===e)return!0}return!1}join(e){se(this);const r=q(this),i=Xa(r);return ch(i,e)}toLocaleString(...e){se(this);const r=q(this),i=Xa(r);return uh(i,...Ir(e))}get[Is](){if(tr(this))return"Float16Array"}}Kr(le,"BYTES_PER_ELEMENT",{value:Bs});Kr(le,Ii,{});pc(le,Ps);const Pi=le.prototype;Kr(Pi,"BYTES_PER_ELEMENT",{value:Bs});Kr(Pi,ft,{value:Pi.values,writable:!0,configurable:!0});pc(Pi,Te);function jh(t,e,...r){return oe(Dh(t,e,...Ir(r)))}function Yh(t){return t instanceof Int8Array||t instanceof Uint8Array||t instanceof Uint8ClampedArray||t instanceof Int16Array||t instanceof Uint16Array||t instanceof Int32Array||t instanceof Uint32Array||t instanceof le||t instanceof Float32Array||t instanceof Float64Array}let pi;function $h(){if(pi!=null)return pi;const t=new Uint32Array([268435456]);return pi=new Uint8Array(t.buffer,t.byteOffset,t.byteLength)[0]===0,pi}function Kh(t,e,r,i=!0){if(i===$h())return new e(t);const n=Object.assign(new DataView(t),{getFloat16(a,o){return jh(this,a,o)}}),s=new e(n.byteLength/e.BYTES_PER_ELEMENT);for(let a=0,o=0;a<s.length;++a,o+=e.BYTES_PER_ELEMENT)s[a]=n[r](o,i);return s}const Bn=(t,e)=>Kh(t,le,"getFloat16",e);class qh extends Ms{load(e,r,i,n){const s=new qd(this.manager);s.setRequestHeader(this.requestHeader),s.setPath(this.path),s.setWithCredentials(this.withCredentials),s.load(e,a=>{try{r(this.parseTypedArray(a))}catch(o){n!=null?n(o):console.error(o),this.manager.itemError(e)}},i,n)}}function Xh(t){return class extends qh{constructor(){super(...arguments),this.parseTypedArray=t}}}function Qh(t){const e=t instanceof Int8Array?Al:t instanceof Uint8Array?xa:t instanceof Uint8ClampedArray?xa:t instanceof Int16Array?Cl:t instanceof Uint16Array?Il:t instanceof Int32Array?Dl:t instanceof Uint32Array?kt:t instanceof le?Wo:t instanceof Float32Array?bt:t instanceof Float64Array?bt:null;return hc(e!=null),e}const Zh={format:Ur,minFilter:_a,magFilter:_a};class Jh extends Ms{constructor(){super(...arguments),this.parameters={}}load(e,r,i,n){const s=new this.Texture,a=new this.TypedArrayLoader(this.manager);a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(this.withCredentials),a.load(e,o=>{s.image.data=o instanceof le?new Uint16Array(o.buffer):o;const{width:c,height:l,depth:u,...d}=this.parameters;c!=null&&(s.image.width=c),l!=null&&(s.image.height=l),"depth"in s.image&&u!=null&&(s.image.depth=u),s.type=Qh(o),Object.assign(s,d),s.needsUpdate=!0,r(s)},i,n)}}function Lc(t,e,r){return class extends Jh{constructor(){super(...arguments),this.Texture=t,this.TypedArrayLoader=Xh(e),this.parameters={...Zh,...r}}}}function em(t,e){return Lc(El,t,e)}function tm(t,e){return Lc(is,t,e)}function rm(t,e){return new(em(t,e))}function Qa(t,e){return new(tm(t,e))}const Oi=bs.clamp,vs=bs.degToRad;function im(t,e,r,i=0,n=1){return bs.mapLinear(t,e,r,i,n)}function nm(t){return Math.min(Math.max(t,0),1)}function Le(t){return(e,r)=>{e instanceof Hi?Object.defineProperty(e,r,{enumerable:!0,get(){var i;return((i=this.defines)==null?void 0:i[t])!=null},set(i){var n;i!==this[r]&&(i?(this.defines??(this.defines={}),this.defines[t]="1"):(n=this.defines)==null||delete n[t],this.needsUpdate=!0)}}):Object.defineProperty(e,r,{enumerable:!0,get(){return this.defines.has(t)},set(i){i!==this[r]&&(i?this.defines.set(t,"1"):this.defines.delete(t),this.setChanged())}})}}function sm(t,{min:e=Number.MIN_SAFE_INTEGER,max:r=Number.MAX_SAFE_INTEGER}={}){return(i,n)=>{i instanceof Hi?Object.defineProperty(i,n,{enumerable:!0,get(){var s;const a=(s=this.defines)==null?void 0:s[t];return a!=null?parseInt(a):0},set(s){const a=this[n];s!==a&&(this.defines??(this.defines={}),this.defines[t]=Oi(s,e,r).toFixed(0),this.needsUpdate=!0)}}):Object.defineProperty(i,n,{enumerable:!0,get(){const s=this.defines.get(t);return s!=null?parseInt(s):0},set(s){const a=this[n];s!==a&&(this.defines.set(t,Oi(s,e,r).toFixed(0)),this.setChanged())}})}}var qr=Uint8Array,Fc=Uint16Array,am=Uint32Array,om=new qr([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),cm=new qr([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Bc=function(t,e){for(var r=new Fc(31),i=0;i<31;++i)r[i]=e+=1<<t[i-1];for(var n=new am(r[30]),i=1;i<30;++i)for(var s=r[i];s<r[i+1];++s)n[s]=s-r[i]<<5|i;return[r,n]},Uc=Bc(om,2),lm=Uc[0],um=Uc[1];lm[28]=258,um[258]=28;Bc(cm,0);var dm=new Fc(32768);for(var he=0;he<32768;++he){var Ct=(he&43690)>>>1|(he&21845)<<1;Ct=(Ct&52428)>>>2|(Ct&13107)<<2,Ct=(Ct&61680)>>>4|(Ct&3855)<<4,dm[he]=((Ct&65280)>>>8|(Ct&255)<<8)>>>1}var en=new qr(288);for(var he=0;he<144;++he)en[he]=8;for(var he=144;he<256;++he)en[he]=9;for(var he=256;he<280;++he)en[he]=7;for(var he=280;he<288;++he)en[he]=8;var hm=new qr(32);for(var he=0;he<32;++he)hm[he]=5;var mm=new qr(0),fm=typeof TextDecoder<"u"&&new TextDecoder,pm=0;try{fm.decode(mm,{stream:!0}),pm=1}catch{}const gm=/^[ \t]*#include +"([\w\d./]+)"/gm;function Vt(t,e){return t.replace(gm,(r,i)=>{const n=i.split("/").reduce((s,a)=>typeof s!="string"&&s!=null?s[a]:void 0,e);if(typeof n!="string")throw new Error(`Could not find include for ${i}.`);return Vt(n,e)})}const vm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*(?:i\s*\+\+|\+\+\s*i)\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ym(t,e,r,i){let n="";for(let s=parseInt(e);s<parseInt(r);++s)n+=i.replace(/\[\s*i\s*\]/g,"["+s+"]").replace(/UNROLLED_LOOP_INDEX/g,`${s}`);return n}function Sm(t){return t.replace(vm,ym)}const wm=`// Reference: https://github.com/mrdoob/three.js/blob/r171/examples/jsm/csm/CSMShader.js

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
`,_m=`// cSpell:words logdepthbuf

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
`,xm=`// Reference: https://advances.realtimerendering.com/s2014/index.html#_NEXT_GENERATION_POST

float interleavedGradientNoise(const vec2 coord) {
  const vec3 magic = vec3(0.06711056, 0.00583715, 52.9829189);
  return fract(magic.z * fract(dot(coord, magic.xy)));
}
`,Tm=`#if !defined(saturate)
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
`,bm=`// Reference: https://jcgt.org/published/0003/02/01/paper.pdf

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
`,Mm=`float raySphereFirstIntersection(
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
`,Em=`vec3 screenToView(
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
`,Rm=`// Reference: https://www.gamedev.net/tutorials/programming/graphics/contact-hardening-soft-shadows-made-fast-r4906/

vec2 vogelDisk(const int index, const int sampleCount, const float phi) {
  const float goldenAngle = 2.39996322972865332;
  float r = sqrt(float(index) + 0.5) / sqrt(float(sampleCount));
  float theta = float(index) * goldenAngle + phi;
  return r * vec2(cos(theta), sin(theta));
}
`,Am=wm,Cm=_m,Im=xm,Dm=Tm,Pm=bm,Hc=Mm,Om=Em,Nm=Rm,Us=`// Based on the following work and adapted to Three.js.
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
`,cr=`uniform vec3 u_solar_irradiance;
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
`,Lm=["solarIrradiance","sunAngularRadius","bottomRadius","topRadius","rayleighScattering","mieScattering","miePhaseFunctionG","muSMin","skyRadianceToLuminance","sunRadianceToLuminance","luminousEfficiency"];function Fm(t,e){if(e!=null)for(const r of Lm){const i=e[r];i!=null&&(t[r]instanceof T?t[r].copy(i):t[r]=i)}}const ys=class{constructor(e){this.solarIrradiance=new T(1.474,1.8504,1.91198),this.sunAngularRadius=.004675,this.bottomRadius=636e4,this.topRadius=642e4,this.rayleighScattering=new T(.005802,.013558,.0331),this.mieScattering=new T(.003996,.003996,.003996),this.miePhaseFunctionG=.8,this.muSMin=Math.cos(vs(120)),this.skyRadianceToLuminance=new T(114974.916437,71305.954816,65310.548555),this.sunRadianceToLuminance=new T(98242.786222,69954.398112,66475.012354),this.luminousEfficiency=new T(.2126,.7152,.0722),this.skyRadianceToRelativeLuminance=new T,this.sunRadianceToRelativeLuminance=new T,Fm(this,e);const r=this.luminousEfficiency.dot(this.skyRadianceToLuminance);this.skyRadianceToRelativeLuminance.copy(this.skyRadianceToLuminance).divideScalar(r),this.sunRadianceToRelativeLuminance.copy(this.sunRadianceToLuminance).divideScalar(r)}};ys.DEFAULT=new ys;let tn=ys;const rn=64,nn=16,Hs=32,ks=128,zs=32,Vs=8,Bm=Vs*zs,Um=ks,Hm=Hs,sn=256,an=64,ir=1/1e3,km="82e00c5222d6cbc222af69abdf6d3f4fc9f63030",Un=`https://media.githubusercontent.com/media/takram-design-engineering/three-geospatial/${km}/packages/atmosphere/assets`,zm=new T;function on(t,e,r,i,n=!0){const s=r.projectOnSurface(t,zm);return s!=null?r.getOsculatingSphereCenter(!n||s.lengthSq()<t.lengthSq()?s:t,e,i):i.setScalar(0)}const Vm=`precision highp sampler2DArray;

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
`,Wm=`uniform mat4 inverseViewMatrix;
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
`,kc=`vec3 getLunarRadiance(const float moonAngularRadius) {
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
`;var Gm=Object.defineProperty,Xe=(t,e,r,i)=>{for(var n=void 0,s=t.length-1,a;s>=0;s--)(a=t[s])&&(n=a(e,r,n)||n);return n&&Gm(e,r,n),n};const jm=new T,Ym=new T,$m=new dc,Km={blendFunction:J.NORMAL,octEncodedNormal:!1,reconstructNormal:!1,ellipsoid:mt.WGS84,correctAltitude:!0,correctGeometricError:!0,photometric:!0,sunIrradiance:!1,skyIrradiance:!1,transmittance:!0,inscatter:!0,irradianceScale:1,sky:!1,sun:!0,moon:!0,moonAngularRadius:.0045,lunarRadianceScale:1};class Qe extends Yd{constructor(e=new Fi,r,i=tn.DEFAULT){const{blendFunction:n,normalBuffer:s=null,octEncodedNormal:a,reconstructNormal:o,irradianceTexture:c=null,scatteringTexture:l=null,transmittanceTexture:u=null,ellipsoid:d,correctAltitude:g,correctGeometricError:p,photometric:f,sunDirection:y,sunIrradiance:h,skyIrradiance:v,transmittance:b,inscatter:E,irradianceScale:C,sky:R,sun:I,moon:M,moonDirection:U,moonAngularRadius:O,lunarRadianceScale:L}={...Km,...r};super("AerialPerspectiveEffect",Sm(Vt(Vm,{core:{depth:Cm,packing:Pm,math:Dm,transform:Om,raySphereIntersection:Hc,cascadedShadowMaps:Am,interleavedGradientNoise:Im,vogelDisk:Nm},parameters:cr,functions:Us,sky:kc})),{blendFunction:n,vertexShader:Vt(Wm,{parameters:cr}),attributes:lc.DEPTH,uniforms:new Map(Object.entries({normalBuffer:new A(s),projectionMatrix:new A(new re),viewMatrix:new A(new re),inverseProjectionMatrix:new A(new re),inverseViewMatrix:new A(new re),cameraPosition:new A(new T),bottomRadius:new A(i.bottomRadius),ellipsoidRadii:new A(new T),ellipsoidCenter:new A(new T),inverseEllipsoidMatrix:new A(new re),altitudeCorrection:new A(new T),sunDirection:new A((y==null?void 0:y.clone())??new T),irradianceScale:new A(C),idealSphereAlpha:new A(0),moonDirection:new A((U==null?void 0:U.clone())??new T),moonAngularRadius:new A(O),lunarRadianceScale:new A(L),overlayBuffer:new A(null),shadowBuffer:new A(null),shadowMapSize:new A(new Ot),shadowIntervals:new A([]),shadowMatrices:new A([]),inverseShadowMatrices:new A([]),shadowFar:new A(0),shadowTopHeight:new A(0),shadowRadius:new A(3),stbnTexture:new A(null),frame:new A(0),shadowLengthBuffer:new A(null),u_solar_irradiance:new A(i.solarIrradiance),u_sun_angular_radius:new A(i.sunAngularRadius),u_bottom_radius:new A(i.bottomRadius*ir),u_top_radius:new A(i.topRadius*ir),u_rayleigh_scattering:new A(i.rayleighScattering),u_mie_scattering:new A(i.mieScattering),u_mie_phase_function_g:new A(i.miePhaseFunctionG),u_mu_s_min:new A(i.muSMin),u_irradiance_texture:new A(c),u_scattering_texture:new A(l),u_single_mie_scattering_texture:new A(l),u_transmittance_texture:new A(u)})),defines:new Map([["TRANSMITTANCE_TEXTURE_WIDTH",sn.toFixed(0)],["TRANSMITTANCE_TEXTURE_HEIGHT",an.toFixed(0)],["SCATTERING_TEXTURE_R_SIZE",Hs.toFixed(0)],["SCATTERING_TEXTURE_MU_SIZE",ks.toFixed(0)],["SCATTERING_TEXTURE_MU_S_SIZE",zs.toFixed(0)],["SCATTERING_TEXTURE_NU_SIZE",Vs.toFixed(0)],["IRRADIANCE_TEXTURE_WIDTH",rn.toFixed(0)],["IRRADIANCE_TEXTURE_HEIGHT",nn.toFixed(0)],["METER_TO_LENGTH_UNIT",ir.toFixed(7)],["SUN_SPECTRAL_RADIANCE_TO_LUMINANCE",`vec3(${i.sunRadianceToRelativeLuminance.toArray().map(j=>j.toFixed(12)).join(",")})`],["SKY_SPECTRAL_RADIANCE_TO_LUMINANCE",`vec3(${i.skyRadianceToRelativeLuminance.toArray().map(j=>j.toFixed(12)).join(",")})`]])}),this.camera=e,this.atmosphere=i,this.ellipsoidMatrix=new re,this.overlay=null,this.shadow=null,this.shadowLength=null,this.shadowSampleCount=8,this.octEncodedNormal=a,this.reconstructNormal=o,this.ellipsoid=d,this.correctAltitude=g,this.correctGeometricError=p,this.photometric=f,this.sunIrradiance=h,this.skyIrradiance=v,this.transmittance=b,this.inscatter=E,this.sky=R,this.sun=I,this.moon=M}get mainCamera(){return this.camera}set mainCamera(e){this.camera=e}copyCameraSettings(e){const{projectionMatrix:r,matrixWorldInverse:i,projectionMatrixInverse:n,matrixWorld:s}=e,a=this.uniforms;a.get("projectionMatrix").value.copy(r),a.get("viewMatrix").value.copy(i),a.get("inverseProjectionMatrix").value.copy(n),a.get("inverseViewMatrix").value.copy(s);const o=e.getWorldPosition(a.get("cameraPosition").value),c=a.get("inverseEllipsoidMatrix").value.copy(this.ellipsoidMatrix).invert(),l=jm.copy(o).applyMatrix4(c).sub(a.get("ellipsoidCenter").value);try{const d=$m.setFromECEF(l).height,g=Ym.set(0,this.ellipsoid.maximumRadius,-d).applyMatrix4(r);a.get("idealSphereAlpha").value=nm(im(g.y,41.5,13.8,0,1))}catch{return}const u=a.get("altitudeCorrection");this.correctAltitude?on(l,this.atmosphere.bottomRadius,this.ellipsoid,u.value):u.value.setScalar(0)}updateComposition(){const{uniforms:e,defines:r,overlay:i,shadow:n,shadowLength:s}=this,a=r.has("HAS_OVERLAY"),o=i!=null;o!==a&&(o?r.set("HAS_OVERLAY","1"):(r.delete("HAS_OVERLAY"),e.get("overlayBuffer").value=null),this.setChanged()),o&&(e.get("overlayBuffer").value=i.map);const c=r.has("HAS_SHADOW"),l=n!=null;if(l!==c&&(l?r.set("HAS_SHADOW","1"):(r.delete("HAS_SHADOW"),e.get("shadowBuffer").value=null),this.setChanged()),l){const g=r.get("SHADOW_CASCADE_COUNT"),p=`${n.cascadeCount}`;g!==p&&(r.set("SHADOW_CASCADE_COUNT",n.cascadeCount.toFixed(0)),this.setChanged()),e.get("shadowBuffer").value=n.map,e.get("shadowMapSize").value=n.mapSize,e.get("shadowIntervals").value=n.intervals,e.get("shadowMatrices").value=n.matrices,e.get("inverseShadowMatrices").value=n.inverseMatrices,e.get("shadowFar").value=n.far,e.get("shadowTopHeight").value=n.topHeight}const u=r.has("HAS_SHADOW_LENGTH"),d=s!=null;d!==u&&(d?r.set("HAS_SHADOW_LENGTH","1"):(r.delete("HAS_SHADOW_LENGTH"),e.get("shadowLengthBuffer").value=null),this.setChanged()),d&&(e.get("shadowLengthBuffer").value=s.map)}update(e,r,i){this.copyCameraSettings(this.camera),this.updateComposition(),++this.uniforms.get("frame").value}get normalBuffer(){return this.uniforms.get("normalBuffer").value}set normalBuffer(e){this.uniforms.get("normalBuffer").value=e}get irradianceTexture(){return this.uniforms.get("u_irradiance_texture").value}set irradianceTexture(e){this.uniforms.get("u_irradiance_texture").value=e}get scatteringTexture(){return this.uniforms.get("u_scattering_texture").value}set scatteringTexture(e){this.uniforms.get("u_scattering_texture").value=e,this.uniforms.get("u_single_mie_scattering_texture").value=e}get transmittanceTexture(){return this.uniforms.get("u_transmittance_texture").value}set transmittanceTexture(e){this.uniforms.get("u_transmittance_texture").value=e}get useHalfFloat(){return!0}set useHalfFloat(e){}get ellipsoid(){return this._ellipsoid}set ellipsoid(e){this._ellipsoid=e,this.uniforms.get("ellipsoidRadii").value.copy(e.radii)}get ellipsoidCenter(){return this.uniforms.get("ellipsoidCenter").value}get sunDirection(){return this.uniforms.get("sunDirection").value}get irradianceScale(){return this.uniforms.get("irradianceScale").value}set irradianceScale(e){this.uniforms.get("irradianceScale").value=e}get moonDirection(){return this.uniforms.get("moonDirection").value}get moonAngularRadius(){return this.uniforms.get("moonAngularRadius").value}set moonAngularRadius(e){this.uniforms.get("moonAngularRadius").value=e}get lunarRadianceScale(){return this.uniforms.get("lunarRadianceScale").value}set lunarRadianceScale(e){this.uniforms.get("lunarRadianceScale").value=e}get stbnTexture(){return this.uniforms.get("stbnTexture").value}set stbnTexture(e){this.uniforms.get("stbnTexture").value=e}get shadowRadius(){return this.uniforms.get("shadowRadius").value}set shadowRadius(e){this.uniforms.get("shadowRadius").value=e}}Xe([Le("OCT_ENCODED_NORMAL")],Qe.prototype,"octEncodedNormal");Xe([Le("RECONSTRUCT_NORMAL")],Qe.prototype,"reconstructNormal");Xe([Le("CORRECT_GEOMETRIC_ERROR")],Qe.prototype,"correctGeometricError");Xe([Le("PHOTOMETRIC")],Qe.prototype,"photometric");Xe([Le("SUN_IRRADIANCE")],Qe.prototype,"sunIrradiance");Xe([Le("SKY_IRRADIANCE")],Qe.prototype,"skyIrradiance");Xe([Le("TRANSMITTANCE")],Qe.prototype,"transmittance");Xe([Le("INSCATTER")],Qe.prototype,"inscatter");Xe([Le("SKY")],Qe.prototype,"sky");Xe([Le("SUN")],Qe.prototype,"sun");Xe([Le("MOON")],Qe.prototype,"moon");Xe([sm("SHADOW_SAMPLE_COUNT",{min:1,max:16})],Qe.prototype,"shadowSampleCount");var qm=Object.defineProperty,Xm=(t,e,r,i)=>{for(var n=void 0,s=t.length-1,a;s>=0;s--)(a=t[s])&&(n=a(e,r,n)||n);return n&&qm(e,r,n),n};const Qm=new T;function Zm(t,e){let r="",i="";for(let n=1;n<e;++n)r+=`layout(location = ${n}) out float renderTarget${n};
`,i+=`renderTarget${n} = 0.0;
`;return t.replace("#include <mrt_layout>",r).replace("#include <mrt_output>",i)}const Ws={ellipsoid:mt.WGS84,correctAltitude:!0,photometric:!0,renderTargetCount:1};class Gs extends Pl{constructor(e,r=tn.DEFAULT){const{irradianceTexture:i=null,scatteringTexture:n=null,transmittanceTexture:s=null,useHalfFloat:a,ellipsoid:o,correctAltitude:c,photometric:l,sunDirection:u,sunAngularRadius:d,renderTargetCount:g,...p}={...Ws,...e};super({toneMapped:!1,depthWrite:!1,depthTest:!1,...p,uniforms:{cameraPosition:new A(new T),ellipsoidCenter:new A(new T),inverseEllipsoidMatrix:new A(new re),altitudeCorrection:new A(new T),sunDirection:new A((u==null?void 0:u.clone())??new T),u_solar_irradiance:new A(r.solarIrradiance),u_sun_angular_radius:new A(d??r.sunAngularRadius),u_bottom_radius:new A(r.bottomRadius*ir),u_top_radius:new A(r.topRadius*ir),u_rayleigh_scattering:new A(r.rayleighScattering),u_mie_scattering:new A(r.mieScattering),u_mie_phase_function_g:new A(r.miePhaseFunctionG),u_mu_s_min:new A(r.muSMin),u_irradiance_texture:new A(i),u_scattering_texture:new A(n),u_single_mie_scattering_texture:new A(n),u_transmittance_texture:new A(s),...p.uniforms},defines:{PI:`${Math.PI}`,TRANSMITTANCE_TEXTURE_WIDTH:sn.toFixed(0),TRANSMITTANCE_TEXTURE_HEIGHT:an.toFixed(0),SCATTERING_TEXTURE_R_SIZE:Hs.toFixed(0),SCATTERING_TEXTURE_MU_SIZE:ks.toFixed(0),SCATTERING_TEXTURE_MU_S_SIZE:zs.toFixed(0),SCATTERING_TEXTURE_NU_SIZE:Vs.toFixed(0),IRRADIANCE_TEXTURE_WIDTH:rn.toFixed(0),IRRADIANCE_TEXTURE_HEIGHT:nn.toFixed(0),METER_TO_LENGTH_UNIT:ir.toFixed(7),SUN_SPECTRAL_RADIANCE_TO_LUMINANCE:`vec3(${r.sunRadianceToRelativeLuminance.toArray().map(f=>f.toFixed(12)).join(",")})`,SKY_SPECTRAL_RADIANCE_TO_LUMINANCE:`vec3(${r.skyRadianceToRelativeLuminance.toArray().map(f=>f.toFixed(12)).join(",")})`,...p.defines}}),this.atmosphere=r,this.ellipsoidMatrix=new re,this.atmosphere=r,this.ellipsoid=o,this.correctAltitude=c,this.photometric=l,this.renderTargetCount=g}copyCameraSettings(e){const r=this.uniforms,i=e.getWorldPosition(r.cameraPosition.value),n=r.inverseEllipsoidMatrix.value.copy(this.ellipsoidMatrix).invert(),s=Qm.copy(i).applyMatrix4(n).sub(r.ellipsoidCenter.value),a=r.altitudeCorrection.value;this.correctAltitude?on(s,this.atmosphere.bottomRadius,this.ellipsoid,a):a.setScalar(0)}onBeforeCompile(e,r){e.fragmentShader=Zm(e.fragmentShader,this.renderTargetCount)}onBeforeRender(e,r,i,n,s,a){this.copyCameraSettings(i)}get irradianceTexture(){return this.uniforms.u_irradiance_texture.value}set irradianceTexture(e){this.uniforms.u_irradiance_texture.value=e}get scatteringTexture(){return this.uniforms.u_scattering_texture.value}set scatteringTexture(e){this.uniforms.u_scattering_texture.value=e,this.uniforms.u_single_mie_scattering_texture.value=e}get transmittanceTexture(){return this.uniforms.u_transmittance_texture.value}set transmittanceTexture(e){this.uniforms.u_transmittance_texture.value=e}get useHalfFloat(){return!0}set useHalfFloat(e){}get ellipsoidCenter(){return this.uniforms.ellipsoidCenter.value}get sunDirection(){return this.uniforms.sunDirection.value}get sunAngularRadius(){return this.uniforms.u_sun_angular_radius.value}set sunAngularRadius(e){this.uniforms.u_sun_angular_radius.value=e}get renderTargetCount(){return this._renderTargetCount}set renderTargetCount(e){e!==this.renderTargetCount&&(this._renderTargetCount=e,this.needsUpdate=!0)}}Xm([Le("PHOTOMETRIC")],Gs.prototype,"photometric");var lt;(function(t){t.Sun="Sun",t.Moon="Moon",t.Mercury="Mercury",t.Venus="Venus",t.Earth="Earth",t.Mars="Mars",t.Jupiter="Jupiter",t.Saturn="Saturn",t.Uranus="Uranus",t.Neptune="Neptune",t.Pluto="Pluto",t.SSB="SSB",t.EMB="EMB",t.Star1="Star1",t.Star2="Star2",t.Star3="Star3",t.Star4="Star4",t.Star5="Star5",t.Star6="Star6",t.Star7="Star7",t.Star8="Star8"})(lt||(lt={}));lt.Star1,lt.Star2,lt.Star3,lt.Star4,lt.Star5,lt.Star6,lt.Star7,lt.Star8;var Za;(function(t){t[t.From2000=0]="From2000",t[t.Into2000=1]="Into2000"})(Za||(Za={}));var Ja;(function(t){t[t.Pericenter=0]="Pericenter",t[t.Apocenter=1]="Apocenter"})(Ja||(Ja={}));var eo;(function(t){t.Penumbral="penumbral",t.Partial="partial",t.Annular="annular",t.Total="total"})(eo||(eo={}));var to;(function(t){t[t.Invalid=0]="Invalid",t[t.Ascending=1]="Ascending",t[t.Descending=-1]="Descending"})(to||(to={}));function zc(t){return Math.sqrt(Math.max(t,0))}function Jm(t){return Math.max(t,0)}function ef(t,e,r){const{bottomRadius:i}=t;return r<0&&e**2*(r**2-1)+i**2>=0}function tf(t,e,r){const{topRadius:i}=t,n=e**2*(r**2-1)+i**2;return Jm(-e*r+zc(n))}function Ni(t,e){return .5/e+t*(1-1/e)}var rf="Invariant failed";function nf(t,e){if(!t)throw new Error(rf)}const sf=new T,ro=new T,af=new T;function gi(t,e,r){const i=e*4;return r.set(t[i],t[i+1],t[i+2])}function Vc(t,e,r){const{width:i,height:n}=t.image;nf(Yh(t.image.data));let s=t.image.data;t.type===Wo&&s instanceof Uint16Array&&(s=new le(s.buffer));const a=Oi(e.x,0,1)*(i-1),o=Oi(e.y,0,1)*(n-1),c=Math.floor(a),l=Math.floor(o),u=a-c,d=o-l,g=u,p=d,f=c%i,y=(f+1)%i,h=l%n,v=(h+1)%n,b=gi(s,h*i+f,sf),E=gi(s,h*i+y,ro),C=b.lerp(E,g),R=gi(s,v*i+f,ro),I=gi(s,v*i+y,af),M=R.lerp(I,g);return r.copy(C.lerp(M,p))}function of(t,e,r,i){const{topRadius:n,bottomRadius:s}=t,a=Math.sqrt(n**2-s**2),o=zc(e**2-s**2),c=tf(t,e,r),l=n-e,u=o+a,d=(c-l)/(u-l),g=o/a;return i.set(Ni(d,sn),Ni(g,an))}const cf=new T,Hn=new T,lf=new Ot;function io(t,e,r,i=new We,{ellipsoid:n=mt.WGS84,correctAltitude:s=!0,photometric:a=!0}={},o=tn.DEFAULT){const c=cf.copy(e);if(s){const y=n.projectOnSurface(e,Hn);y!=null&&c.sub(n.getOsculatingSphereCenter(y,o.bottomRadius,Hn))}const l=Hn;let u=c.length(),d=c.dot(r);const{topRadius:g}=o,p=-d-Math.sqrt(d**2-u**2+g**2);if(p>0&&(u=g,d+=p),u>g)l.set(1,1,1);else{const y=d/u;if(ef(o,u,y))l.setScalar(0);else{const h=of(o,u,y,lf);Vc(t,h,l)}}const f=l.multiply(o.solarIrradiance);return a&&f.multiply(o.sunRadianceToRelativeLuminance),i.setFromVector3(f)}var Xr=Uint8Array,Wc=Uint16Array,uf=Uint32Array,df=new Xr([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),hf=new Xr([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Gc=function(t,e){for(var r=new Wc(31),i=0;i<31;++i)r[i]=e+=1<<t[i-1];for(var n=new uf(r[30]),i=1;i<30;++i)for(var s=r[i];s<r[i+1];++s)n[s]=s-r[i]<<5|i;return[r,n]},jc=Gc(df,2),mf=jc[0],ff=jc[1];mf[28]=258,ff[258]=28;Gc(hf,0);var pf=new Wc(32768);for(var me=0;me<32768;++me){var It=(me&43690)>>>1|(me&21845)<<1;It=(It&52428)>>>2|(It&13107)<<2,It=(It&61680)>>>4|(It&3855)<<4,pf[me]=((It&65280)>>>8|(It&255)<<8)>>>1}var cn=new Xr(288);for(var me=0;me<144;++me)cn[me]=8;for(var me=144;me<256;++me)cn[me]=9;for(var me=256;me<280;++me)cn[me]=7;for(var me=280;me<288;++me)cn[me]=8;var gf=new Xr(32);for(var me=0;me<32;++me)gf[me]=5;var vf=new Xr(0),yf=typeof TextDecoder<"u"&&new TextDecoder,Sf=0;try{yf.decode(vf,{stream:!0}),Sf=1}catch{}function wf({topRadius:t,bottomRadius:e},r,i,n){const s=(r-e)/(t-e),a=i*.5+.5;return n.set(Ni(a,rn),Ni(s,nn))}const _f=1/Math.sqrt(Math.PI),kn=Math.sqrt(3)/(2*Math.sqrt(Math.PI)),xf=new T,zn=new T,Tf=new Ot,bf=new re,Mf={ellipsoid:mt.WGS84,correctAltitude:!0,photometric:!0};class Ef extends Go{constructor(e,r=tn.DEFAULT){super(),this.atmosphere=r,this.ellipsoidCenter=new T,this.ellipsoidMatrix=new re;const{irradianceTexture:i=null,ellipsoid:n,correctAltitude:s,photometric:a,sunDirection:o}={...Mf,...e};this.irradianceTexture=i,this.ellipsoid=n,this.correctAltitude=s,this.photometric=a,this.sunDirection=(o==null?void 0:o.clone())??new T}update(){if(this.irradianceTexture==null)return;const e=bf.copy(this.ellipsoidMatrix).invert(),r=this.getWorldPosition(xf).applyMatrix4(e).sub(this.ellipsoidCenter);if(this.correctAltitude){const l=this.ellipsoid.projectOnSurface(r,zn);l!=null&&r.sub(on(l,this.atmosphere.bottomRadius,this.ellipsoid,zn))}const i=r.length(),n=r.dot(this.sunDirection)/i,s=wf(this.atmosphere,i,n,Tf),a=Vc(this.irradianceTexture,s,zn);this.photometric&&a.multiply(this.atmosphere.skyRadianceToRelativeLuminance);const o=this.ellipsoid.getSurfaceNormal(r).applyMatrix4(this.ellipsoidMatrix),c=this.sh.coefficients;c[0].copy(a).multiplyScalar(_f),c[1].copy(a).multiplyScalar(kn*o.y),c[2].copy(a).multiplyScalar(kn*o.z),c[3].copy(a).multiplyScalar(kn*o.x)}}const Rf=`precision highp float;
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
`,Af=`precision highp float;
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
`;var Cf=Object.defineProperty,Yc=(t,e,r,i)=>{for(var n=void 0,s=t.length-1,a;s>=0;s--)(a=t[s])&&(n=a(e,r,n)||n);return n&&Cf(e,r,n),n};const If={...Ws,sun:!0,moon:!0,moonAngularRadius:.0045,lunarRadianceScale:1};class js extends Gs{constructor(e){const{sun:r,moon:i,moonDirection:n,moonAngularRadius:s,lunarRadianceScale:a,groundAlbedo:o,...c}={...If,...e};super({name:"SkyMaterial",glslVersion:Br,vertexShader:Vt(Af,{parameters:cr}),fragmentShader:Vt(Rf,{core:{raySphereIntersection:Hc},parameters:cr,functions:Us,sky:kc}),...c,uniforms:{inverseProjectionMatrix:new A(new re),inverseViewMatrix:new A(new re),moonDirection:new A((n==null?void 0:n.clone())??new T),moonAngularRadius:new A(s),lunarRadianceScale:new A(a),groundAlbedo:new A((o==null?void 0:o.clone())??new We(0)),shadowLengthBuffer:new A(null),...c.uniforms},defines:{PERSPECTIVE_CAMERA:"1"},depthTest:!0}),this.shadowLength=null,this.sun=r,this.moon=i}onBeforeRender(e,r,i,n,s,a){super.onBeforeRender(e,r,i,n,s,a);const{uniforms:o,defines:c}=this;o.inverseProjectionMatrix.value.copy(i.projectionMatrixInverse),o.inverseViewMatrix.value.copy(i.matrixWorld);const l=c.PERSPECTIVE_CAMERA!=null,u=i.isPerspectiveCamera===!0;u!==l&&(u?c.PERSPECTIVE_CAMERA="1":delete c.PERSPECTIVE_CAMERA,this.needsUpdate=!0);const d=this.groundAlbedo,g=c.GROUND_ALBEDO!=null,p=d.r!==0||d.g!==0||d.b!==0;p!==g&&(p?this.defines.GROUND_ALBEDO="1":delete this.defines.GROUND_ALBEDO,this.needsUpdate=!0);const f=this.shadowLength,y=c.HAS_SHADOW_LENGTH!=null,h=f!=null;h!==y&&(h?c.HAS_SHADOW_LENGTH="1":(delete c.HAS_SHADOW_LENGTH,o.shadowLengthBuffer.value=null),this.needsUpdate=!0),h&&(o.shadowLengthBuffer.value=f.map)}get moonDirection(){return this.uniforms.moonDirection.value}get moonAngularRadius(){return this.uniforms.moonAngularRadius.value}set moonAngularRadius(e){this.uniforms.moonAngularRadius.value=e}get lunarRadianceScale(){return this.uniforms.lunarRadianceScale.value}set lunarRadianceScale(e){this.uniforms.lunarRadianceScale.value=e}get groundAlbedo(){return this.uniforms.groundAlbedo.value}}Yc([Le("SUN")],js.prototype,"sun");Yc([Le("MOON")],js.prototype,"moon");const Df=`precision highp float;
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
`,Pf=`precision highp float;
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
`;var Of=Object.defineProperty,Nf=(t,e,r,i)=>{for(var n=void 0,s=t.length-1,a;s>=0;s--)(a=t[s])&&(n=a(e,r,n)||n);return n&&Of(e,r,n),n};const Lf={...Ws,pointSize:1,radianceScale:1,background:!0};class Ff extends Gs{constructor(e){const{pointSize:r,radianceScale:i,background:n,...s}={...Lf,...e};super({name:"StarsMaterial",glslVersion:Br,vertexShader:Vt(Pf,{parameters:cr}),fragmentShader:Vt(Df,{parameters:cr,functions:Us}),...s,uniforms:{projectionMatrix:new A(new re),modelViewMatrix:new A(new re),viewMatrix:new A(new re),matrixWorld:new A(new re),cameraFar:new A(0),pointSize:new A(0),magnitudeRange:new A(new Ot(-2,8)),radianceScale:new A(i),...s.uniforms},defines:{PERSPECTIVE_CAMERA:"1"}}),this.pointSize=r,this.background=n}onBeforeRender(e,r,i,n,s,a){super.onBeforeRender(e,r,i,n,s,a);const o=this.uniforms;o.projectionMatrix.value.copy(i.projectionMatrix),o.modelViewMatrix.value.copy(i.modelViewMatrix),o.viewMatrix.value.copy(i.matrixWorldInverse),o.matrixWorld.value.copy(s.matrixWorld),o.cameraFar.value=i.far,o.pointSize.value=this.pointSize*e.getPixelRatio();const c=i.isPerspectiveCamera===!0;this.defines.PERSPECTIVE_CAMERA!=null!==c&&(c?this.defines.PERSPECTIVE_CAMERA="1":delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}get magnitudeRange(){return this.uniforms.magnitudeRange.value}get radianceScale(){return this.uniforms.radianceScale.value}set radianceScale(e){this.uniforms.radianceScale.value=e}}Nf([Le("BACKGROUND")],Ff.prototype,"background");const no=new We("#fff2d8"),so=1e-8,Vn=3e4,ao=-1e3,oo=1e7,Bf=5e6,Uf=8e6,zr=t=>Number.isFinite(t.x)&&Number.isFinite(t.y)&&Number.isFinite(t.z),co=t=>!Number.isFinite(t.longitude)||Math.abs(t.longitude)>180?"longitude must be a finite value in degrees within [-180, 180]":!Number.isFinite(t.latitude)||Math.abs(t.latitude)>90?"latitude must be a finite value in degrees within [-90, 90]":!Number.isFinite(t.altitudeMeters)||t.altitudeMeters<ao||t.altitudeMeters>oo?`altitudeMeters must be within [${ao}, ${oo}]`:null,Hf=(t,e,r)=>{if(!Number.isFinite(t.getTime()))return"instant must be a valid Date";const i=co(e);if(i)return`observer ${i}`;if(!r)return null;const n=co(r.observer);return n?`sky reference observer ${n}`:zr(r.scenePosition)?null:"sky reference scenePosition must contain finite metre coordinates"},$c=t=>{if(!zr(t.directionToSunECEF))return"sun direction contains a non-finite component";if(Math.abs(t.directionToSunECEF.length()-1)>1e-6)return"sun direction is not normalized";if(!t.ecefToSceneMatrix.elements.every(Number.isFinite))return"ECEF-to-scene matrix contains a non-finite component";const e=t.ecefToSceneMatrix.elements,r=[new T(e[0],e[4],e[8]),new T(e[1],e[5],e[9]),new T(e[2],e[6],e[10])];if(r.some(s=>Math.abs(s.length()-1)>1e-6)||Math.abs(r[0].dot(r[1]))>1e-6||Math.abs(r[0].dot(r[2]))>1e-6||Math.abs(r[1].dot(r[2]))>1e-6||Math.abs(e[3])>1e-12||Math.abs(e[7])>1e-12||Math.abs(e[11])>1e-12||Math.abs(e[12])>1e-12||Math.abs(e[13])>1e-12||Math.abs(e[14])>1e-12||Math.abs(e[15]-1)>1e-12)return"ECEF-to-scene matrix is not an affine orthonormal rotation";const i=t.ecefToSceneMatrix.determinant();if(!Number.isFinite(i)||Math.abs(i-1)>1e-6)return"ECEF-to-scene matrix is not a proper orthonormal rotation";if(!zr(t.ellipsoidCenterECEF))return"ellipsoid center contains a non-finite component";const n=t.ellipsoidCenterECEF.length();return n<Bf||n>Uf?"ellipsoid center is outside the plausible WGS84 distance range":null},kf=t=>{var r;const e=$c(t.skyFrame);return e||(zr(t.directionToSun)?Math.abs(t.directionToSun.length()-1)>1e-6?"scene sun direction is not normalized":![t.color.r,t.color.g,t.color.b].every(Number.isFinite)||![t.radiance.r,t.radiance.g,t.radiance.b].every(Number.isFinite)||!Number.isFinite(t.relativeIntensity)||t.relativeIntensity<0||t.relativeIntensity>1||!Number.isFinite(t.azimuthDegrees)||!Number.isFinite(t.elevationDegrees)?"sunlight color, intensity, or angles contain invalid values":(r=t.skyIrradianceCoefficients)!=null&&r.some(i=>!zr(i))?"sky irradiance contains a non-finite coefficient":null:"scene sun direction contains a non-finite component")},Wn={useTransmittanceLut:!0,useIrradianceLut:!0},zf=({east:t,north:e,up:r})=>new re().set(t.x,t.y,t.z,0,r.x,r.y,r.z,0,-e.x,-e.y,-e.z,0,0,0,0,1);function Ys({longitude:t,latitude:e,altitudeMeters:r}){const i=new dc(vs(t),vs(e),r).toECEF(),n=new T,s=new T,a=new T;return mt.WGS84.getEastNorthUpVectors(i,n,s,a),{observerECEF:i,east:n,north:s,up:a}}const Kc=(t,{east:e,north:r,up:i},n)=>n.set(t.dot(e),t.dot(i),-t.dot(r)).normalize(),qc=(t,e,r)=>{const i=r?Ys(r.observer):e,n=zf(i);r!=null&&r.sceneFromLocal&&n.premultiply(r.sceneFromLocal);const s=n.clone().invert(),a=((r==null?void 0:r.scenePosition)??new T).clone().applyMatrix4(s).sub(i.observerECEF);return{directionToSunECEF:t.clone(),ecefToSceneMatrix:n,ellipsoidCenterECEF:a}},Vf=(t,e,{observerECEF:r,east:i,north:n,up:s})=>t!=null&&t.irradianceTexture?(t.ellipsoidMatrix.set(i.x,i.y,i.z,0,s.x,s.y,s.z,0,-n.x,-n.y,-n.z,0,0,0,0,1),t.ellipsoidCenter.copy(r).negate(),t.sunDirection.copy(e),t.position.set(0,0,0),t.updateMatrixWorld(!0),t.update(),t.sh.coefficients.map(a=>a.clone())):null,Xc=t=>{const e=Ta(Math.asin(Ve(t.y,-1,1)));return{azimuthDegrees:(Ta(Math.atan2(t.x,-t.z))+360)%360,elevationDegrees:e}},Wf=(t,e)=>{const r=Ys(e.observer),i=Kc(t.skyFrame.directionToSunECEF,r,new T);return e.sceneFromLocal&&i.transformDirection(e.sceneFromLocal),{...t,directionToSun:i,...Xc(i),skyFrame:qc(t.skyFrame.directionToSunECEF,r,e)}},Gf=(t,e,r,i=null,n)=>{const s=Ys(e),{observerECEF:a,up:o}=s,c=new T(...Ol(t)),l=Kc(c,s,new T);n!=null&&n.sceneFromLocal&&l.transformDirection(n.sceneFromLocal);const u=qc(c,s,n),d=Vf(i,c,s),{azimuthDegrees:g,elevationDegrees:p}=Xc(l);if(!r){const E=Math.sqrt(Ve(l.y,0,1));return{directionToSun:l,color:no.clone(),relativeIntensity:E,radiance:no.clone().multiplyScalar(E),atmosphericTransmittanceReady:!1,atmosphericIrradianceReady:d!==null,skyIrradianceCoefficients:d,azimuthDegrees:g,elevationDegrees:p,skyFrame:u}}const f=io(r,a,c,new We,{ellipsoid:mt.WGS84,correctAltitude:!0,photometric:!0}),y=io(r,a,o,new We,{ellipsoid:mt.WGS84,correctAltitude:!0,photometric:!0}),h=Math.max(f.r,f.g,f.b,0),v=Math.max(y.r,y.g,y.b,so),b=h>so?f.clone().multiplyScalar(1/h):new We(0,0,0);return{directionToSun:l,color:b,relativeIntensity:Ve(h/v,0,1),radiance:f,atmosphericTransmittanceReady:!0,atmosphericIrradianceReady:d!==null,skyIrradianceCoefficients:d,azimuthDegrees:g,elevationDegrees:p,skyFrame:u}};class jf{transmittanceTexture=null;irradianceTexture=null;scatteringTexture=null;skyLightProbe=new Ef({ellipsoid:mt.WGS84,correctAltitude:!0,photometric:!0});transmittanceLoading=!1;irradianceLoading=!1;scatteringLoading=!1;transmittanceRetryAt=0;irradianceRetryAt=0;scatteringRetryAt=0;disposed=!1;get ready(){return this.transmittanceTexture!==null&&this.irradianceTexture!==null}get skyReady(){return this.skyTextures!==null}get skyTextures(){return!this.transmittanceTexture||!this.irradianceTexture||!this.scatteringTexture?null:{transmittanceTexture:this.transmittanceTexture,irradianceTexture:this.irradianceTexture,scatteringTexture:this.scatteringTexture}}get isSkyLoading(){return this.transmittanceLoading||this.irradianceLoading||this.scatteringLoading}isLoadingFor(e=Wn){return e.useTransmittanceLut&&this.transmittanceLoading||e.useIrradianceLut&&this.irradianceLoading}ensure(e,r=Wn){if(this.disposed)return;const i=()=>{this.isLoadingFor(r)||e()};r.useTransmittanceLut&&this.ensureTransmittance(i),r.useIrradianceLut&&this.ensureIrradiance(i)}ensureSky(e){if(this.disposed||this.skyReady)return;let r=!1;const i=()=>{!r&&!this.isSkyLoading&&(r=!0,e())};this.ensureTransmittance(i),this.ensureIrradiance(i),this.ensureScattering(i)}ensureTransmittance(e){this.transmittanceTexture||this.transmittanceLoading||Date.now()<this.transmittanceRetryAt||(this.transmittanceLoading=!0,Qa(Bn,{width:sn,height:an}).load(`${Un}/transmittance.bin`,r=>{if(this.transmittanceLoading=!1,this.disposed){r.dispose();return}this.transmittanceRetryAt=0,this.transmittanceTexture=r,e()},void 0,r=>{this.transmittanceLoading=!1,this.disposed||(this.transmittanceRetryAt=Date.now()+Vn,console.error("[SHADOW] Takram transmittance LUT failed",r),e())}))}ensureIrradiance(e){this.irradianceTexture||this.irradianceLoading||Date.now()<this.irradianceRetryAt||(this.irradianceLoading=!0,Qa(Bn,{width:rn,height:nn}).load(`${Un}/irradiance.bin`,r=>{if(this.irradianceLoading=!1,this.disposed){r.dispose();return}this.irradianceRetryAt=0,this.irradianceTexture=r,this.skyLightProbe.irradianceTexture=r,e()},void 0,r=>{this.irradianceLoading=!1,this.disposed||(this.irradianceRetryAt=Date.now()+Vn,console.error("[SHADOW] Takram irradiance LUT failed",r),e())}))}ensureScattering(e){this.scatteringTexture||this.scatteringLoading||Date.now()<this.scatteringRetryAt||(this.scatteringLoading=!0,rm(Bn,{width:Bm,height:Um,depth:Hm}).load(`${Un}/scattering.bin`,r=>{if(this.scatteringLoading=!1,this.disposed){r.dispose();return}this.scatteringRetryAt=0,this.scatteringTexture=r,e()},void 0,r=>{this.scatteringLoading=!1,this.disposed||(this.scatteringRetryAt=Date.now()+Vn,console.error("[SHADOW] Takram scattering LUT failed",r),e())}))}evaluate(e,r,i=Wn,n){return Gf(e,r,i.useTransmittanceLut?this.transmittanceTexture:null,i.useIrradianceLut?this.skyLightProbe:null,n)}dispose(){var e,r,i;this.disposed||(this.disposed=!0,this.transmittanceLoading=!1,this.irradianceLoading=!1,this.scatteringLoading=!1,this.transmittanceRetryAt=0,this.irradianceRetryAt=0,this.scatteringRetryAt=0,(e=this.transmittanceTexture)==null||e.dispose(),(r=this.irradianceTexture)==null||r.dispose(),(i=this.scatteringTexture)==null||i.dispose(),this.transmittanceTexture=null,this.irradianceTexture=null,this.scatteringTexture=null,this.skyLightProbe.irradianceTexture=null,this.skyLightProbe.sh.zero())}}const Yf="shadow-simulation-atmospheric-sky",Qr=2,Ti="carmaOutputToSrgb",Gn="carmaDisplayExposure",$f=new T;class Kf extends js{observerScenePosition=new T;hasObserverScenePosition=!1;viewCamera=null;copyCameraSettings(e){if(super.copyCameraSettings(e),!this.hasObserverScenePosition)return;const r=this.uniforms;if(r.cameraPosition.value.copy(this.observerScenePosition),!this.correctAltitude)return;const i=$f.copy(this.observerScenePosition).applyMatrix4(r.inverseEllipsoidMatrix.value).sub(r.ellipsoidCenter.value);on(i,this.atmosphere.bottomRadius,this.ellipsoid,r.altitudeCorrection.value)}onBeforeRender(e,r,i,n,s,a){super.onBeforeRender(e,r,this.viewCamera??i,n,s,a)}}const qf=t=>{t.uniforms.toneMappingExposure=new A(1),t.uniforms[Ti]=new A(!1),t.uniforms[Gn]=new A(Qr),t.fragmentShader=t.fragmentShader.replace("precision highp sampler3D;",`precision highp sampler3D;

uniform bool ${Ti};
uniform float ${Gn};
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
  }`).replace("outputColor.a = 1.0;",`outputColor.rgb *= ${Gn};
  outputColor.a = 1.0;
  if (${Ti}) {
    // SkyMaterial is raw GLSL: match terrain's AgX on the display target.
    // Offscreen samples stay linear HDR until the shared final composite.
    outputColor.rgb = AgXToneMapping(outputColor.rgb);
    outputColor = carmaLinearToSrgb(outputColor);
  }`)},Xf=t=>{const e=new Kf({groundAlbedo:t,moon:!1,photometric:!0,side:jo,sun:!0});qf(e),e.depthTest=!1,e.depthWrite=!1;const r=new Vo;r.setAttribute("position",new Nl([-1,-1,0,3,-1,0,-1,3,0],3));const i=new Vr(r,e);return i.name=Yf,i.visible=!1,i.frustumCulled=!1,i.renderOrder=-100,i.castShadow=!1,i.receiveShadow=!1,i.onBeforeRender=n=>{e.uniforms.toneMappingExposure.value=n.toneMappingExposure,e.uniforms[Ti].value=n.getRenderTarget()===null},{mesh:i,update(n,s){return s?$c(n)?!1:(i.visible=!0,e.irradianceTexture=s.irradianceTexture,e.scatteringTexture=s.scatteringTexture,e.transmittanceTexture=s.transmittanceTexture,e.sunDirection.copy(n.directionToSunECEF),e.ellipsoidCenter.copy(n.ellipsoidCenterECEF),e.ellipsoidMatrix.copy(n.ecefToSceneMatrix),!0):(i.visible=!1,!1)},updateViewCamera(n){e.viewCamera=n},updateObserverScenePosition(n){e.observerScenePosition.copy(n),e.hasObserverScenePosition=!0},updateGroundAlbedo(n){e.groundAlbedo.copy(n)},dispose(){r.dispose(),e.dispose()}}},vi=3,Qf=.5,ot=64,lo=.01,Zf=(t,e,r)=>Math.min(r**2,Math.max(ot**2,Math.floor(t!==void 0&&Number.isFinite(t)&&t>0?t:e))),Jf=(t,e)=>{const{mapSize:r,maxMapSize:i,elevationSine:n,sunDiscGuardMeters:s,groundTexelFit:a}=e,o=t.right-t.left+2*s,c=t.top-t.bottom+2*s,l=Math.max(lo,Math.abs(n)),d=2*(a?vi+Qf:vi);let g=r,p=r,f=!1,y=!1;const h=e.groundTexelTargetMeters;if(h!==void 0&&(!Number.isFinite(h)||h<=0))throw new RangeError("Shadow ground texel target must be positive and finite");if(h!==void 0){const j=$=>Math.max(ot,2**Math.ceil(Math.log2($))),Z=j(o/h+d),N=j(c/(h*l)+d);g=Math.min(i,Z),p=Math.min(i,N),f=g<Z||p<N}else if(a){const j=o*l/c,Z=e.mapTexelBudget??r*r,N=d*(j+1),$=Z-d*d,H=2*$/(N+Math.sqrt(N**2+4*j*$)),X=j*H+d,P=H+d;f=X>i||P>i;const ee=Math.max(o,c)/(r-d),ne=Math.min(r,Math.max(ot,Math.ceil((o/ee+d)/ot)*ot)),Me=Math.min(r,Math.max(ot,Math.ceil((c/ee+d)/ot)*ot));y=X<ne||P<Me;const Se=Math.min(Math.max(X,ne,Z/i),i,Z/Me),B=z=>Math.floor(z/ot+1e-9)*ot;g=Math.max(ne,B(Se)),p=Math.max(Me,B(Math.min(i,Z/g)))}const v=e.mapDimensions;v&&(y||(y=g!==v.width||p!==v.height),g=v.width,p=v.height);const b=o/Math.max(1,g-d),E=c/Math.max(1,p-d),C=Math.max(b,E,Number.EPSILON),R=a?b:C,I=a?E:C,M=Math.round((t.left+t.right)/2/R)*R,U=Math.round((t.bottom+t.top)/2/I)*I,O=R*g,L=I*p;return{left:M-O/2,right:M+O/2,bottom:U-L/2,top:U+L/2,mapWidth:g,mapHeight:p,metersPerTexelX:R,metersPerTexelY:I,guardMetersX:R*vi,guardMetersY:I*vi,groundTexelWidthMeters:R,groundTexelHeightMeters:Math.abs(n)>Number.EPSILON?I/Math.abs(n):1/0,groundTexelFitLimited:a&&(f||y||Math.abs(n)<lo)}},ep=(t,e,r)=>{if(r<=0)return{planarMeters:0,depthMeters:0};const i=Math.sqrt(Math.max(0,1-e**2)),n=i>Math.sin(r)?Math.asin(Math.sin(r)/i):Math.PI;return{planarMeters:2*t*Math.sin(Math.min(Math.PI,n+r)/2),depthMeters:2*t*Math.sin(r/2)}},tp=t=>{const e=Math.floor(t/2)+1,r=t%2===0?1:-1;return[r*(e*.7548776662466927%1-.5),r*(e*.5698402909980532%1-.5)]},rp=2048,Qc=8192,uo=2,ho=50,ip=1e4,np=.04,jn=25,sp=4,ap=1.2,op=.2,mo=.05,cp=8,Lr=Fl(.53/2),lp=Math.PI*(3-Math.sqrt(5)),up=300,dp=new T(0,1,0),fo=(t,e,r=new re)=>r.lookAt(t,e,dp).setPosition(t).invert(),hp=(t,e)=>{if(t.length===0)return null;const r=t.map(f=>f.clone().applyMatrix4(e)),i=Math.min(...r.map(({x:f})=>f)),n=Math.max(...r.map(({x:f})=>f)),s=Math.min(...r.map(({y:f})=>f)),a=Math.max(...r.map(({y:f})=>f)),o=r.map(({z:f})=>-f),c=Math.max(0,Math.min(...o)),l=Math.max(c+.01,Math.max(...o)),u=(i+n)/2,d=(s+a)/2,g=Math.max((n-i)/2,uo/2),p=Math.max((a-s)/2,uo/2);return{left:u-g,right:u+g,bottom:d-p,top:d+p,near:c,far:l}},mp=(t,e=Qc)=>t>=16?e:Math.min(e,rp*Math.sqrt(t));class Zc{constructor(e){this.host=e,this.lights=Array.from({length:1},()=>{const r=new Ll(16777215,0);return r.name="shadow-simulation-sun",r.visible=!1,r.castShadow=!1,r.shadow.camera.name="shadow-simulation-shadow-camera",r.shadow.autoUpdate=!1,r.shadow.radius=0,r.shadow.bias=0,r.shadow.normalBias=mo,e.add(r,r.target),r})}lights;softSun=!1;lastSoftFit=null;maxShadowMapSize=Qc;mapAllocation=null;disposed=!1;setMaxShadowMapSize(e){if(!Number.isFinite(e)||e<=0)return;const r=Math.max(256,Math.floor(e));this.disposed||this.maxShadowMapSize===r||(this.maxShadowMapSize=r)}setSoftSun(e){this.disposed||this.softSun===e||(e||this.restoreSunDiscCenter(),this.softSun=e,e||(this.lastSoftFit=null))}applySunDiscSample(e,r,i=!0){if(this.disposed)return;const n=this.lastSoftFit;if(!n)return;const s=Math.max(1,Math.floor(r)),a=(Math.floor(e)%s+s)%s,o=Lr*Math.sqrt((a+.5)/s),c=a*lp,l=Math.cos(c)*o,u=Math.sin(c)*o,d=n.tangentA.clone().multiplyScalar(l).addScaledVector(n.tangentB,u).normalize(),g=n.directionToSun.clone().multiplyScalar(Math.cos(o)).addScaledVector(d,Math.sin(o)).normalize(),p=this.lights[0],[f,y]=i&&s>1?tp(a):[0,0],h=p.shadow.camera,v=n.rasterBounds,b=f*(v.right-v.left)/p.shadow.mapSize.x,E=y*(v.top-v.bottom)/p.shadow.mapSize.y;h.left=v.left+b,h.right=v.right+b,h.bottom=v.bottom+E,h.top=v.top+E,h.updateProjectionMatrix(),p.position.copy(g).multiplyScalar(n.lightDistance).add(n.anchorPosition),p.updateMatrixWorld(!0),p.target.updateMatrixWorld(!0),p.shadow.updateMatrices(p),p.shadow.needsUpdate=!0}restoreSunDiscCenter(){if(this.disposed||!this.lastSoftFit)return;const e=this.lastSoftFit,r=this.lights[0],i=r.shadow.camera;i.left=e.rasterBounds.left,i.right=e.rasterBounds.right,i.bottom=e.rasterBounds.bottom,i.top=e.rasterBounds.top,i.updateProjectionMatrix(),r.position.copy(e.directionToSun).multiplyScalar(e.lightDistance).add(e.anchorPosition),r.updateMatrixWorld(!0),r.target.updateMatrixWorld(!0),r.shadow.updateMatrices(r),r.shadow.needsUpdate=!0}invalidate(){this.lights[0].shadow.needsUpdate=!0}update({receiverWorldPoints:e,receiverAnchorWorldPosition:r,minimumElevationMeters:i,maximumElevationMeters:n,directionToSun:s,color:a,intensity:o,shadowIntensity:c,quality:l,groundTexelFit:u=!0,stabilizeMapSize:d=!1,mapTexelBudget:g,groundTexelTargetMeters:p,maxReceiverBiasMeters:f}){var Ge,Ze;if(this.disposed)return null;if(e.length===0){for(const be of this.lights)be.visible=!1,be.castShadow=!1,be.intensity=0,be.shadow.needsUpdate=!1;return null}const y=s.clone().normalize(),h=Math.max(0,n-i),v=Math.max(np,y.y),b=Ve((h+up)/v+ho,ho,ip),E=b+h+jn,C=mp(l,this.maxShadowMapSize),R=Zf(g,Math.floor(C)**2,this.maxShadowMapSize),I=Math.floor(Math.sqrt(R)),M=new We(a),U=r.clone(),O=e.reduce((be,Wt)=>Math.max(be,Wt.distanceTo(r)),0),L=O+E,j=this.lights[0];j.position.copy(y).multiplyScalar(L).add(U),j.target.position.copy(U),j.updateMatrixWorld(!0),j.target.updateMatrixWorld(!0),j.shadow.updateMatrices(j);const Z=hp(e,fo(j.position,j.target.position));if(!Z)return null;const N=ep(O,y.y,this.softSun?Lr:0),$=this.softSun?Math.max(Math.tan(Lr)*L,N.planarMeters):0,H=Jf(Z,{mapSize:I,mapTexelBudget:R,maxMapSize:this.maxShadowMapSize,elevationSine:y.y,sunDiscGuardMeters:$,groundTexelFit:u,groundTexelTargetMeters:p,mapDimensions:d&&((Ge=this.mapAllocation)==null?void 0:Ge.texelBudget)===R&&this.mapAllocation.maxMapSize===this.maxShadowMapSize&&this.mapAllocation.groundTexelFit===u?this.mapAllocation:void 0});this.mapAllocation={width:H.mapWidth,height:H.mapHeight,texelBudget:R,maxMapSize:this.maxShadowMapSize,groundTexelFit:u};const X=Math.max(H.metersPerTexelX,H.metersPerTexelY),P=Math.max(H.guardMetersX,H.guardMetersY),ee={left:H.left,right:H.right,bottom:H.bottom,top:H.top,near:Math.max(.01,Z.near-N.depthMeters-b-h-jn),far:Math.max(1,Z.far+N.depthMeters+h+jn)};ee.far=Math.max(ee.near+1,ee.far);const ne=Ve(X*ap/Math.max(op,y.y),mo,cp),Me=-Ve(X*sp/Math.max(ee.far-ee.near,1),Number.EPSILON,.01),Se=new T;Math.abs(y.y)>.99?Se.set(1,0,0):Se.crossVectors(new T(0,1,0),y).normalize();const B=new T().crossVectors(y,Se),z=this.lights[0];z.visible=!0,z.castShadow=!0,z.intensity=o,z.color.copy(M),z.shadow.intensity=Ve(c,0,1),z.shadow.needsUpdate=!0,(z.shadow.mapSize.x!==H.mapWidth||z.shadow.mapSize.y!==H.mapHeight)&&((Ze=z.shadow.map)==null||Ze.dispose(),z.shadow.map=null,z.shadow.mapSize.set(H.mapWidth,H.mapHeight)),z.position.copy(y).multiplyScalar(L).add(U),z.target.position.copy(U);const Ie=f!==void 0&&Number.isFinite(f)?Math.max(0,f):1/0;z.shadow.bias=Math.max(Me,-Ie/(ee.far-ee.near)),z.shadow.normalBias=Math.min(ne,Ie);const ve=z.shadow.camera;ve.left=ee.left,ve.right=ee.right,ve.bottom=ee.bottom,ve.top=ee.top,ve.near=ee.near,ve.far=ee.far,ve.updateProjectionMatrix(),z.updateMatrixWorld(!0),z.target.updateMatrixWorld(!0),z.shadow.updateMatrices(z),this.lastSoftFit=this.softSun?{directionToSun:y.clone(),tangentA:Se,tangentB:B,anchorPosition:U.clone(),lightDistance:L,rasterBounds:ee}:null;const Be=j.shadow.camera;return{sampleCount:1,totalShadowTexels:H.mapWidth*H.mapHeight,mapTexelBudget:p===void 0?R:void 0,casterReachMeters:b,camera:{receiverPointCount:e.length,receiverLeftMeters:Z.left,receiverRightMeters:Z.right,receiverBottomMeters:Z.bottom,receiverTopMeters:Z.top,leftMeters:Be.left,rightMeters:Be.right,bottomMeters:Be.bottom,topMeters:Be.top,nearMeters:Be.near,farMeters:Be.far,shadowMapWidth:H.mapWidth,shadowMapHeight:H.mapHeight,viewMatrixElements:[...fo(j.position,j.target.position).elements],projectionMatrixElements:[...Be.projectionMatrix.elements],guardMeters:P,metersPerTexel:X,metersPerTexelX:H.metersPerTexelX,metersPerTexelY:H.metersPerTexelY,groundTexelWidthMeters:H.groundTexelWidthMeters,groundTexelHeightMeters:H.groundTexelHeightMeters,groundTexelFitLimited:H.groundTexelFitLimited,groundTexelFit:u,groundTexelTargetMeters:p}}}dispose(){var e;if(!this.disposed){this.disposed=!0;for(const r of this.lights)(e=r.shadow.map)==null||e.dispose(),this.host.remove(r.target,r)}}}const fp=`
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
`,po="float getShadow( sampler2DShadow shadowMap,",Yn="#elif defined( SHADOWMAP_TYPE_VSM )",pp=()=>{const t=ns.shadowmap_pars_fragment;if(!t.includes(po)||!t.includes(Yn))throw new Error("Three PCF shader changed; validate receiver-plane shadow integration");return`uniform bool carmaReceiverPlaneShadow;
${t.replace(po,"float carmaOriginalGetShadow( sampler2DShadow shadowMap,").replace(Yn,`${fp}
${Yn}`)}`},go=new WeakMap,gp=(t,e)=>{const r=go.get(t);if(r)return e!==void 0&&r.value!==e&&(r.value=e,t.needsUpdate=!0),r;const i={value:e??!1},n=t.onBeforeCompile,s=t.customProgramCacheKey(),a=pp();return t.onBeforeCompile=function(o,c){n.call(this,o,c),o.uniforms.carmaReceiverPlaneShadow=i,o.fragmentShader=o.fragmentShader.replace("#include <shadowmap_pars_fragment>",a)},t.customProgramCacheKey=()=>`${s}|carma-receiver-plane-pcf-v3|${i.value?"mesh":"stock"}`,t.needsUpdate=!0,go.set(t,i),i},vo=new WeakMap,yo=(t,e,r,i,n="shadow-and-color")=>{const s=()=>r.render(t,i);if(e===void 0)return s(),!0;const a=t.getObjectById(e);if(!a)return!1;let o=vo.get(a);if(!o){const l=new Set;a.traverse(u=>l.add(u)),vo.set(a,l),o=l}if(n==="color-only"){const l=new Set;for(let d=a.parent;d;d=d.parent)l.add(d);const u=[];t.traverse(d=>{d.isMesh&&d.visible&&!o.has(d)&&!l.has(d)&&(u.push(d),d.visible=!1)});try{return s(),!0}finally{for(const d of u)d.visible=!0}}const c=r.renderBufferDirect;r.renderBufferDirect=function(...l){const[u,,,,d]=l;u===i&&d.isMesh&&!o.has(d)||c.apply(this,l)};try{return s(),!0}finally{r.renderBufferDirect=c}},Dt=t=>{var e;(e=t.depthTexture)==null||e.dispose(),t.dispose()},Bt=(t,e)=>t*e*8;class vp{entries=new Map;retainedBytes=0;capacityBytes=0;activeVariantIds=null;hits=0;misses=0;get bytes(){return this.retainedBytes}get count(){return this.entries.size}get availableBytes(){return Math.max(0,this.capacityBytes-this.retainedBytes)}has(e){return this.entries.has(e)}setActiveVariants(e){this.activeVariantIds=e}setBudget(e,r){this.capacityBytes=Math.max(0,e-r),this.evictInactive(0);for(const i of this.entries.keys()){if(this.retainedBytes<=this.capacityBytes)break;this.remove(i)}}get(e){const r=this.entries.get(e);return r?this.hits+=1:this.misses+=1,r==null?void 0:r.target}admit(e,r,i,n=r,s={}){var o;if(this.entries.has(e))return!1;const a=Bt(i.width,i.height);return a>this.capacityBytes||(s.evictInactive!==!1&&((o=this.activeVariantIds)!=null&&o.has(n))&&this.evictInactive(a),this.retainedBytes+a>this.capacityBytes)?!1:(this.entries.set(e,{pageId:r,variantId:n,target:i,bytes:a}),this.retainedBytes+=a,!0)}invalidate(e){for(const[r,i]of this.entries)i.pageId===e&&this.remove(r)}clear(){for(const e of this.entries.keys())this.remove(e)}evictInactive(e){if(this.activeVariantIds)for(const[r,i]of this.entries){if(this.retainedBytes+e<=this.capacityBytes)break;this.activeVariantIds.has(i.variantId)||this.remove(r)}}remove(e){const r=this.entries.get(e);r&&(this.entries.delete(e),this.retainedBytes-=r.bytes,Dt(r.target))}}const yp=16,$n=4;class Sp{constructor(e,r,i,n=4096,s=e){if(this.scene=e,this.renderer=r,this.memoryBudgetBytes=i,this.host=s,!Number.isFinite(i)||!(i>=Bt(64,64)))throw new RangeError("Shadow page budget must fit at least one 64-square page");if(!Number.isFinite(n)||n<64)throw new RangeError("Maximum shadow page size must be finite and at least 64");if(r.shadowMap.type!==En)throw new Error("Tiled shadow reference requires the shared PCF shadow path");this.maxMapSize=Math.max(64,2**Math.floor(Math.log2(Math.min(n,r.capabilities.maxTextureSize,Math.sqrt(i/8)))))}pages=new Map;activePageIds=new Set;activeSamples=1;prewarmPageIds=new Set;prewarmSamples=1;prewarmRevision=0;prewarmSink=null;prewarmCamera=new Bl([]);cache=new vp;scratchBytes=0;depthRenders=0;colorPasses=0;disposed=!1;streamedTarget=null;maxMapSize;setView(e,r,i,n,s,a){if(this.disposed)return;if(this.clearPrewarmView(),![s.directionToSun.x,s.directionToSun.y,s.directionToSun.z].every(Number.isFinite)||s.directionToSun.lengthSq()===0||s.directionToSun.y<=0)throw new RangeError("Tiled shadow reference requires a finite sun direction above the horizon");const o=td(e,r,i,n);this.activePageIds=new Set(o.map(({id:l})=>l));for(const l of o)this.configurePage(l,s,a);const c=Math.max(32,this.activePageIds.size*2);for(const[l,u]of this.pages){if(this.pages.size<=c)break;this.activePageIds.has(l)||(this.cache.invalidate(l),u.controller.dispose(),this.pages.delete(l))}this.updateActiveVariants(),this.scratchBytes=Math.max(0,...Array.from(this.activePageIds,l=>{const u=this.pages.get(l);return Bt(u.width,u.height)})),this.streamedTarget&&Bt(this.streamedTarget.width,this.streamedTarget.height)>this.scratchBytes&&(Dt(this.streamedTarget),this.streamedTarget=null),this.cache.setBudget(this.memoryBudgetBytes,this.reservedBytes)}updatePresentation(e){if(this.disposed)return;e.updateMatrixWorld(!0);const r=new re().multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i=new Wr().setFromProjectionMatrix(r),n=new Set;for(const[s,a]of this.pages)i.intersectsBox(a.receiverBounds)&&(a.screenBounds.copy(ac(a.receiverBounds,r)),n.add(s));this.activePageIds=n,this.updateActiveVariants()}get reservedBytes(){return this.scratchBytes+(this.prewarmSink?$n:0)}setPrewarmView(e,r,i,n,s,a){if(this.clearPrewarmView(),this.disposed)return;if(!Number.isSafeInteger(a)||a<1||a>4096||!(n>0&&Number.isFinite(n))||![i.x,i.y].every(l=>l>0&&Number.isFinite(l))||!s.directionToSun.toArray().every(Number.isFinite)||s.directionToSun.y<=0)throw new RangeError("Invalid shadow prewarm view");const o=new re().multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),c=new Set;for(const{id:l,bounds:u}of e){if(c.has(l)||u.isEmpty()||![...u.min.toArray(),...u.max.toArray()].every(Number.isFinite))throw new RangeError("Prewarm cells require unique IDs and finite bounds");c.add(l)}this.prewarmSamples=a;for(const l of e){if(this.prewarmPageIds.size>=yp)break;this.activePageIds.has(l.id)||!this.pages.has(l.id)&&this.pages.size>=Math.max(32,this.activePageIds.size*2)||(this.configurePage({...l,screenBounds:new ie,groundTexelTargetMeters:Math.max(1e-9,2*n/oc(l.bounds,o,i))},s),this.prewarmPageIds.add(l.id))}}clearPrewarmView(){this.prewarmPageIds.clear(),this.prewarmRevision+=1}get prewarmPages(){const e=[...this.prewarmPageIds].map(i=>{const n=this.pages.get(i),s=this.countPrewarmSamples(i,n);return{id:i,receiverBounds:n.receiverBounds.clone(),casterBounds:n.casterBounds.clone(),width:n.width,height:n.height,samples:this.prewarmSamples,cachedSamples:s,sampleBudget:s,limited:n.limited,canPrewarm:!1}});let r=this.cache.availableBytes-(this.prewarmSink?0:$n);for(;r>0;){const i=e.filter(n=>n.sampleBudget<n.samples&&Bt(n.width,n.height)<=r).sort((n,s)=>n.sampleBudget-s.sampleBudget);if(i.length===0)break;for(const n of i){const s=Bt(n.width,n.height);s>r||(n.sampleBudget+=1,r-=s)}}return e.map(i=>({...i,canPrewarm:i.sampleBudget>i.cachedSamples}))}canPrewarm(e){return!this.disposed&&this.prewarmPages.some(r=>r.id===e&&r.canPrewarm)}countPrewarmSamples(e,r){const i=JSON.stringify([e,r.projectionKey,this.prewarmSamples]);let n=0;for(let s=0;s<this.prewarmSamples;s+=1)this.cache.has(JSON.stringify([i,s]))&&(n+=1);return n}prewarmNext(e,r,i={}){var y,h;const n=this.pages.get(r),s=!this.disposed&&this.prewarmPageIds.has(r)&&!!n,a=(v,b=!1)=>{var C;const E=s?this.countPrewarmSamples(r,n):0;return{pageId:r,rendered:v,cachedSamples:E,totalSamples:s?this.prewarmSamples:0,complete:s&&E===this.prewarmSamples,budgetLimited:b,aborted:((C=i.signal)==null?void 0:C.aborted)===!0}};if(!s||(y=i.signal)!=null&&y.aborted)return a(0);const o=this.prewarmRevision,c=n.contentRevision;if(this.renderer.shadowMap.type!==En)throw new Error("Shadow prewarm requires the shared PCF shadow path");const l=JSON.stringify([r,n.projectionKey,this.prewarmSamples]);let u=0;for(;u<this.prewarmSamples&&this.cache.has(JSON.stringify([l,u]));)u+=1;if(u===this.prewarmSamples)return a(0);if(!this.canPrewarm(r)||Bt(n.width,n.height)+(this.prewarmSink?0:$n)>this.cache.availableBytes)return a(0,!0);this.prewarmSink||(this.prewarmSink=new Ke(1,1,{depthBuffer:!1}),this.cache.setBudget(this.memoryBudgetBytes,this.reservedBytes));const g=n.controller.lights[0];this.prewarmSamples===1?n.controller.restoreSunDiscCenter():n.controller.applySunDiscSample(u,this.prewarmSamples),g.shadow.map=null,g.shadow.needsUpdate=!0;const p=g.visible;g.visible=!0,this.prewarmCamera.layers.mask=e.layers.mask,this.prewarmCamera.matrixAutoUpdate=!1,this.prewarmCamera.matrixWorldAutoUpdate=!1,this.prewarmCamera.matrixWorld.copy(e.matrixWorld),this.prewarmCamera.matrixWorldInverse.copy(e.matrixWorldInverse),this.prewarmCamera.projectionMatrix.copy(e.projectionMatrix);let f=0;try{this.renderPrewarmDepth(g);const v=g.shadow.map;v&&(f=1,this.depthRenders+=1,((h=i.signal)!=null&&h.aborted||o!==this.prewarmRevision||c!==n.contentRevision||!this.prewarmPageIds.has(r)||!this.cache.admit(JSON.stringify([l,u]),r,v,l,{evictInactive:!1}))&&Dt(v))}catch(v){throw g.shadow.map&&Dt(g.shadow.map),v}finally{g.visible=p,g.shadow.map=null}return a(f)}renderPrewarmDepth(e){const{renderer:r,scene:i}=this,n=r.getContext(),s=r.getRenderTarget(),a=r.getActiveCubeFace(),o=r.getActiveMipmapLevel(),c=r.getViewport(new ie),l=r.getScissor(new ie),u=r.getScissorTest(),d=n.getParameter(n.DRAW_FRAMEBUFFER_BINDING),g=n.getParameter(n.READ_FRAMEBUFFER_BINDING),p=new ie().fromArray(n.getParameter(n.VIEWPORT)),f=new ie().fromArray(n.getParameter(n.SCISSOR_BOX)),y=n.isEnabled(n.SCISSOR_TEST),h=n.isEnabled(n.DEPTH_TEST),v=n.getParameter(n.DEPTH_RANGE),b=n.getParameter(n.DEPTH_WRITEMASK),E=n.getParameter(n.DEPTH_FUNC),C=n.getParameter(n.DEPTH_CLEAR_VALUE),R=n.getParameter(n.COLOR_CLEAR_VALUE),I=n.getParameter(n.COLOR_WRITEMASK),M=r.clippingPlanes,U=r.autoClear,O=i.background,L=r.xr.enabled,j=r.shadowMap.enabled,Z=r.shadowMap.autoUpdate,N=r.shadowMap.needsUpdate,$=[];i.traverse(H=>{const X=H;X.isLight&&X.castShadow&&X!==e&&$.push(X)});try{r.resetState(),r.autoClear=!1,r.xr.enabled=!1,r.shadowMap.enabled=!0,r.shadowMap.autoUpdate=!0;for(const H of $)H.castShadow=!1;i.background=null,r.clippingPlanes=M,r.setRenderTarget(this.prewarmSink),n.depthRange(0,1),r.render(i,this.prewarmCamera)}finally{r.clippingPlanes=M,r.autoClear=U,r.xr.enabled=L,r.shadowMap.enabled=j,r.shadowMap.autoUpdate=Z,r.shadowMap.needsUpdate=N;for(const H of $)H.castShadow=!0;i.background=O,r.resetState(),r.setRenderTarget(s,a,o),r.setViewport(c),r.setScissor(l),r.setScissorTest(u),r.state.bindFramebuffer(n.DRAW_FRAMEBUFFER,d),r.state.bindFramebuffer(n.READ_FRAMEBUFFER,g),r.state.viewport(p),r.state.scissor(f),r.state.setScissorTest(y),h?r.state.enable(n.DEPTH_TEST):r.state.disable(n.DEPTH_TEST),n.depthRange(v[0],v[1]),n.depthMask(b),n.depthFunc(E),n.clearDepth(C),n.clearColor(R[0],R[1],R[2],R[3]),n.colorMask(I[0],I[1],I[2],I[3])}}configurePage(e,r,i){let n=this.pages.get(e.id);if(!n){const u=new Zc(this.host);u.setMaxShadowMapSize(this.maxMapSize),u.setSoftSun(!0),n={controller:u,projectionKey:"",lightingKey:"",presentationKey:"",corridor:new Ne,planes:[],width:0,height:0,limited:!1,screenBounds:e.screenBounds,receiverBounds:e.bounds.clone(),groundTexelTargetMeters:e.groundTexelTargetMeters,casterBounds:new Ne,contentRevision:0,casterRevision:null}}this.pages.delete(e.id),this.pages.set(e.id,n);const s=n.controller.update({...r,maxReceiverBiasMeters:i?i(e.bounds,e.groundTexelTargetMeters):r.maxReceiverBiasMeters,receiverWorldPoints:Yr(e.bounds),receiverAnchorWorldPosition:e.bounds.getCenter(new T),minimumElevationMeters:e.bounds.min.y,maximumElevationMeters:e.bounds.max.y,quality:4,groundTexelFit:!0,groundTexelTargetMeters:e.groundTexelTargetMeters});if(!s)return;const a=n.controller.lights[0];a.visible=!1;const o=s.camera,c=e.receiverObjectId===void 0?"spatial-partition-v1":"native-object-v1",l=JSON.stringify([c,o.viewMatrixElements,o.projectionMatrixElements,o.shadowMapWidth,o.shadowMapHeight,a.shadow.bias,a.shadow.normalBias,e.bounds.min,e.bounds.max]);n.projectionKey=l,n.lightingKey=JSON.stringify([r.directionToSun,r.shadowIntensity,e.bounds.min,e.bounds.max]),n.presentationKey=JSON.stringify([c,r.directionToSun,r.shadowIntensity,e.bounds.min.x,e.bounds.min.z,e.bounds.max.x,e.bounds.max.z]),n.receiverBounds.copy(e.bounds),n.receiverObjectId=e.receiverObjectId,n.groundTexelTargetMeters=e.groundTexelTargetMeters,n.screenBounds=e.screenBounds,n.width=o.shadowMapWidth,n.height=o.shadowMapHeight,n.limited=(o.groundTexelWidthMeters??1/0)>e.groundTexelTargetMeters*1.001||(o.groundTexelHeightMeters??1/0)>e.groundTexelTargetMeters*1.001,n.casterBounds.copy(rd(e.bounds,r.directionToSun,s.casterReachMeters+e.bounds.getSize(new T).length(),Lr,o.guardMeters)),n.corridor.union(n.casterBounds),n.planes=[new ut(new T(1,0,0),-e.bounds.min.x),new ut(new T(-1,0,0),e.bounds.max.x),new ut(new T(0,0,1),-e.bounds.min.z),new ut(new T(0,0,-1),e.bounds.max.z)]}invalidateCasters(e){const r=e instanceof Ne?[e]:e,i=[];for(const[n,s]of this.pages)r.some(a=>s.corridor.intersectsBox(a))&&(s.contentRevision+=1,this.cache.invalidate(n),i.push(n));return i}setCasterRevision(e,r){const i=this.pages.get(e);return!i||r===null||i.casterRevision===r?!1:(i.casterRevision=r,i.contentRevision+=1,this.cache.invalidate(e),!0)}renderSample(e,r,i){this.renderSamples(e,this.activePageIds,r,i)}renderPageSample(e,r,i,n,s){return this.disposed||!this.activePageIds.has(r)?!1:this.renderSamples(e,[r],i,n,s)>0}renderPageColor(e,r){const i=this.pages.get(r);if(this.disposed||!i||!this.activePageIds.has(r))return!1;const{renderer:n,scene:s}=this,a=n.clippingPlanes,o=n.autoClear,c=s.background,l=n.shadowMap.autoUpdate,u=n.shadowMap.needsUpdate;n.autoClear=!1,n.shadowMap.autoUpdate=!1,n.shadowMap.needsUpdate=!1,n.clippingPlanes=[...a,...i.planes],s.background=null;try{const d=yo(s,i.receiverObjectId,n,e,"color-only");return d&&(this.colorPasses+=1),d}finally{n.clippingPlanes=a,n.autoClear=o,n.shadowMap.autoUpdate=l,n.shadowMap.needsUpdate=u,s.background=c}}get accumulationPages(){return[...this.activePageIds].map(e=>{const r=this.pages.get(e),i=r.controller.lights[0];return{id:e,receiverObjectId:r.receiverObjectId,contentKey:JSON.stringify([r.lightingKey,r.contentRevision]),casterRevision:r.casterRevision,presentationKey:r.presentationKey,revision:JSON.stringify([r.projectionKey,r.contentRevision,i.color.toArray(),i.intensity,i.shadow.intensity]),screenBounds:r.screenBounds.clone(),receiverBounds:r.receiverBounds.clone(),groundTexelTargetMeters:r.groundTexelTargetMeters}})}areCastersReady(e,r){const i=this.pages.get(e);return!!(i&&r(i.casterBounds))}getPageGeometry(e){const r=this.pages.get(e);return r?{casterBounds:r.casterBounds.clone(),receiverBounds:r.receiverBounds.clone(),width:r.width,height:r.height,projectionKey:r.projectionKey}:null}get supportsOpaqueAccumulation(){let e=!0;return this.scene.traverseVisible(r=>{const i=r;if(!(!i.isMesh||!i.receiveShadow))for(const n of Array.isArray(i.material)?i.material:[i.material])n.visible&&(n.transparent||!n.depthWrite||!n.depthTest)&&(e=!1)}),e}renderSamples(e,r,i,n,s){if(this.disposed)return 0;if(this.renderer.shadowMap.type!==En)throw new Error("Shadow page cache must be recreated after changing the depth/filter format");if(!Number.isInteger(n)||n<1||!Number.isInteger(i)||i<0||i>=n)throw new RangeError("Shadow sample must lie within its finite-disc sequence");n!==this.activeSamples&&(this.activeSamples=n,this.updateActiveVariants());const{renderer:a,scene:o}=this,c=a.clippingPlanes,l=a.autoClear,u=o.background,d=a.getRenderTarget(),g=d==null?void 0:d.scissor.clone(),p=d==null?void 0:d.scissorTest;let f=0;a.autoClear=!1,o.background=null;try{for(const y of r){const h=this.pages.get(y),v=h.controller.lights[0];n===1?h.controller.restoreSunDiscCenter():h.controller.applySunDiscSample(i,n);const b=JSON.stringify([y,h.projectionKey,n]),E=JSON.stringify([b,i]),C=this.cache.get(E);if(!C&&this.streamedTarget&&(this.streamedTarget.width!==h.width||this.streamedTarget.height!==h.height)&&(Dt(this.streamedTarget),this.streamedTarget=null),v.shadow.map=C??this.streamedTarget,C||(this.streamedTarget=null),v.shadow.needsUpdate=!C,v.visible=!0,a.clippingPlanes=[...c,...h.planes],d){const{x:R,y:I,z:M,w:U}=s??h.screenBounds,O=Math.floor(R*d.width),L=Math.floor(I*d.height);d.scissor.set(O,L,Math.ceil((R+M)*d.width)-O,Math.ceil((I+U)*d.height)-L),d.scissorTest=!0,a.setRenderTarget(d)}try{if(yo(o,h.receiverObjectId,a,e)&&(this.colorPasses+=1,f+=1),!C&&v.shadow.map){this.depthRenders+=1;const I=v.shadow.map;this.cache.admit(E,y,I,b)||(this.streamedTarget=I)}}catch(R){throw!C&&v.shadow.map&&Dt(v.shadow.map),R}finally{v.visible=!1,v.shadow.map=null}}}finally{a.clippingPlanes=c,a.autoClear=l,o.background=u,d&&g&&(d.scissor.copy(g),d.scissorTest=p??!1,a.setRenderTarget(d))}return f}get stats(){const e=[...this.activePageIds].map(r=>this.pages.get(r));return{pages:e.length,cachedSamplePages:this.cache.count,cacheBytes:this.cache.bytes,scratchBytes:this.reservedBytes,hits:this.cache.hits,misses:this.cache.misses,depthRenders:this.depthRenders,colorPasses:this.colorPasses,limitedPages:e.filter(r=>r.limited).length,dimensions:e.map(r=>`${r.width}×${r.height}`)}}clearCache(){this.cache.clear();for(const e of this.pages.values())e.contentRevision+=1}updateActiveVariants(){this.cache.setActiveVariants(new Set([...this.activePageIds].flatMap(e=>[...new Set([1,this.activeSamples])].map(r=>JSON.stringify([e,this.pages.get(e).projectionKey,r])))))}get pageLevels(){return[...this.activePageIds].map(e=>{const r=this.pages.get(e);return{id:e,level:Math.max(0,Math.round(Math.log2(this.maxMapSize/Math.max(r.width,r.height)))),width:r.width,height:r.height}})}dispose(){var e;if(!this.disposed){this.disposed=!0,this.cache.clear(),this.streamedTarget&&Dt(this.streamedTarget),this.streamedTarget=null,(e=this.prewarmSink)==null||e.dispose(),this.prewarmSink=null,this.clearPrewarmView(),this.scratchBytes=0;for(const r of this.pages.values())r.controller.dispose();this.pages.clear(),this.activePageIds.clear()}}}const wp=async({pages:t,signal:e,prepare:r,render:i,yieldToInput:n})=>{let s=0,a=0,o=0,c=!1;try{for(const l of t){if(e.aborted)break;if(l.cachedSamples>=l.samples){s+=1;continue}if(!l.canPrewarm){c=!0;continue}if(await n(e),e.aborted)break;const u=await r(l,e);try{if(e.aborted)break;if(!u.covered||!u.isCurrent()){a+=1;continue}const d=Math.min(l.samples,l.sampleBudget);d<l.samples&&(c=!0);for(let g=l.cachedSamples;g<d&&(await n(e),!(e.aborted||!u.isCurrent()));g+=1){const p=i(l.id,u.group,e);if(o+=p.rendered,p.complete){s+=1;break}if(p.budgetLimited){c=!0;break}if(p.aborted||!p.rendered)break}}finally{u.dispose()}}}catch(l){if(!e.aborted)throw l}return{offered:t.length,completed:s,skippedCoverage:a,renderedSamples:o,budgetLimited:c,aborted:e.aborted}},_p=t=>{const e=globalThis.scheduler;return e!=null&&e.postTask?e.postTask(()=>{},{priority:"background",delay:0,signal:t}):Promise.reject(new Error("Background scheduler unavailable"))},xp=({getRequest:t})=>{let e=!1,r=null,i=null,n=!1;const s=()=>{n=!1,i==null||i.abort()},a=()=>{if(!e){if(i){n=!0;return}try{const o=globalThis.scheduler;if(typeof(o==null?void 0:o.postTask)!="function")return;const c=t();if(!c||c.key===r)return;r=c.key;const l=new AbortController;i=l;let u=!1;const d=()=>{if(i!==l||u)return;i=null;const g=n;n=!1,g&&a()};try{o.postTask(async()=>{if(e||l.signal.aborted)return;const g=t();if(!(!g||g.key!==c.key)){u=!0;try{await g.run(l.signal)}finally{u=!1,d()}}},{priority:"background",delay:150,signal:l.signal}).then(d,d)}catch{d()}}catch{}}};return{onSettled:a,cancel:s,dispose(){e=!0,s()}}},Jc=(t,e,r)=>JSON.stringify([t.matrixWorldInverse.elements,t.projectionMatrix.elements,e,r]),Tp=(t,e)=>{if(!Number.isFinite(e)||e<t.length*8)throw new RangeError("Capture budget must fit at least one scalar/depth pixel per page");const r=[...t].sort((n,s)=>n.id<s.id?-1:n.id>s.id?1:0).map(({id:n,plan:s,screenArea:a})=>({id:n,plan:s,width:s.width,height:s.height,weight:2**Math.floor(Math.log2(Math.max(1/65536,Math.min(1,a))))}));let i=r.reduce((n,s)=>n+s.width*s.height,0);for(;i*8>e;){let n;for(const a of r)a.width===1&&a.height===1||(!n||a.width*a.height/a.weight>n.width*n.height/n.weight)&&(n=a);if(!n)break;const s=n.width*n.height;n.width>=n.height&&n.width>1?n.width/=2:n.height/=2,i-=s-n.width*n.height}return new Map(r.map(({id:n,plan:s,width:a,height:o})=>[n,a===s.width&&o===s.height?s:{...s,width:a,height:o,limited:!0,key:Jc(s.camera,a,o)}]))},bp=(t,e,r)=>{const{groundTexelTargetMeters:i,maximumDimension:n,maximumPixels:s}=r;if(t.isEmpty()||![...t.min.toArray(),...t.max.toArray(),...e.toArray()].every(Number.isFinite)||!(i>0&&Number.isFinite(i))||!(n>=1&&Number.isFinite(n))||!(s>=1&&Number.isFinite(s)))throw new RangeError("Receiver capture requires finite bounds and positive allocation limits");const a=t.getCenter(new T),o=t.getSize(new T).length()*.5,c=Math.max(.001,o*.001),l=new Ts;l.quaternion.copy(e).normalize(),l.position.copy(a).add(new T(0,0,o+c+1).applyQuaternion(l.quaternion)),l.updateMatrixWorld(!0);const u=new Ne().setFromPoints(Yr(t).map(v=>v.applyMatrix4(l.matrixWorldInverse)));l.left=u.min.x-c,l.right=u.max.x+c,l.bottom=u.min.y-c,l.top=u.max.y+c,l.near=Math.max(.001,-u.max.z-c),l.far=Math.max(l.near+.001,-u.min.z+c),l.updateProjectionMatrix();const d=v=>2**Math.ceil(Math.log2(Math.max(1,v/i))),g=d(l.right-l.left),p=d(l.top-l.bottom),f=2**Math.floor(Math.log2(n));let y=Math.min(g,f),h=Math.min(p,f);for(;y*h>s;)y>=h&&y>1?y/=2:h/=2;return{camera:l,width:y,height:h,limited:y<g||h<p,key:Jc(l,y,h)}},Mp=t=>new Ul().setFromRotationMatrix(new re().extractRotation(t.matrixWorld)),Li={namespace:"shadow-corridor-visibility",schema:"visibility-depth-world-basis-v1",maximumPayloadBytes:32*1024**2,maximumRecordBytes:33*1024**2,maximumIdentityCharacters:65536},yi={read:"read",write:"write",writePacked:"write-packed"},$e=t=>{if(!t||!Number.isInteger(t.samples)||t.samples<1||t.samples>4096)return null;const e=[t.source,t.dateTime,t.corridor,t.resolution,t.geometryFingerprint];return e.some(r=>typeof r!="string"||r.length===0)||e.reduce((r,i)=>r+i.length,0)>Li.maximumIdentityCharacters?null:JSON.stringify([Li.schema,...e,t.samples])},Kn=(t,e)=>Array.isArray(t)&&t.length===e&&t.every(Number.isFinite),el=t=>{if(!t||typeof t!="object")return!1;const e=t,r=e.width*e.height;return Number.isSafeInteger(e.width)&&e.width>0&&Number.isSafeInteger(e.height)&&e.height>0&&Number.isSafeInteger(r)&&r*8<=Li.maximumPayloadBytes&&Kn(e.captureMatrix,16)&&Kn(e.worldBasis,16)&&Kn(e.crop,4)&&e.crop[0]>=0&&e.crop[1]>=0&&e.crop[2]>0&&e.crop[3]>0&&e.crop[0]+e.crop[2]<=1.000001&&e.crop[1]+e.crop[3]<=1.000001},So=t=>{if(!el(t))return!1;const e=t,r=e.width*e.height;return e.visibility instanceof Float32Array&&e.visibility.length===r&&e.depth instanceof Float32Array&&e.depth.length===r},Ep=t=>{if(!el(t))return!1;const e=t;return e.rgba instanceof Float32Array&&e.rgba.length===e.width*e.height*4},Mr=64,Ss=256*1024**2,qn=Ss,Rp=128*1024**2,wo=8,_o=32*1024**2,Ap=4,Er=t=>{var e;t.target?((e=t.target.depthTexture)==null||e.dispose(),t.target.dispose()):(t.visibility.dispose(),t.depth.dispose())},Cp=(t,e)=>t.elements.every((r,i)=>Number.isFinite(r)&&Math.abs(r-e.elements[i])<=1e-10*Math.max(1,Math.abs(r)));class tl{constructor(e){this.renderer=e,this.copyQuad.frustumCulled=!1,this.copyScene.add(this.copyQuad)}captures=new Map;visiblePageIds=new Set;samples=0;replayCount=0;matchingPages=0;persistence;persistenceGeneration=0;disposed=!1;restoreAttempts=new Set;pendingRestores=new Map;restoreRequests=new Map;pendingWrites=new Map;persistenceOffers=new WeakMap;persistenceAttempted=new WeakSet;persistenceTimer=null;readbackBusy=!1;readbackBytes=0;packMaterial=new rr({uniforms:{visibility:{value:null},depth:{value:null}},vertexShader:"varying vec2 uvCopy; void main() { uvCopy = position.xy * 0.5 + 0.5; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:"uniform sampler2D visibility; uniform sampler2D depth; varying vec2 uvCopy; void main() { gl_FragColor = vec4(texture2D(visibility, uvCopy).r, texture2D(depth, uvCopy).r, 0.0, 1.0); }",depthTest:!1,depthWrite:!1,blending:_i,toneMapped:!1});materials=new Map;unsupportedMaterials=new WeakSet;captureSupported=!0;contentRevision=0;get revision(){return this.contentRevision}get supportsCapture(){return this.captureSupported}copyScene=new Fr;copyCamera=new Fi;copyMaterial=new rr({uniforms:{source:{value:null},crop:{value:new ie}},vertexShader:"varying vec2 uvCopy; void main() { uvCopy = position.xy * 0.5 + 0.5; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:"uniform sampler2D source; uniform vec4 crop; varying vec2 uvCopy; void main() { gl_FragColor = vec4(texture2D(source, crop.xy + uvCopy * crop.zw).r, 0.0, 0.0, 1.0); }",depthTest:!1,depthWrite:!1,blending:_i,toneMapped:!1});copyQuad=new Vr(new ws(2,2),this.copyMaterial);downsampleMaterial=new rr({uniforms:{source:{value:null},depth:{value:null},texel:{value:new Ot}},vertexShader:"varying vec2 uvCopy; void main() { uvCopy = position.xy * 0.5 + 0.5; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:`uniform sampler2D source; uniform sampler2D depth;
      uniform vec2 texel; varying vec2 uvCopy;
      void main() {
        vec2 d = texel * 0.25;
        float visibility = (texture2D(source, uvCopy + d).r
          + texture2D(source, uvCopy - d).r
          + texture2D(source, uvCopy + vec2(d.x, -d.y)).r
          + texture2D(source, uvCopy + vec2(-d.x, d.y)).r) * 0.25;
        gl_FragColor = vec4(visibility, 0.0, 0.0, 1.0);
        gl_FragDepth = texture2D(depth, uvCopy).r;
      }`,depthTest:!0,depthFunc:Yo,depthWrite:!0,blending:_i,toneMapped:!1});uniforms={carmaCaptureVisibility:{value:!1},carmaRetainedEnabled:{value:!1},carmaRetainedColor:{value:null},carmaRetainedDepth:{value:null},carmaRetainedMatrix:{value:new re},carmaRetainedCrop:{value:new ie(0,0,1,1)},carmaRetainedCount:{value:0},carmaRetainedBounds:{value:Array.from({length:Mr},()=>new ie)}};get memoryBytes(){return[...this.captures.values()].reduce((e,r)=>e+r.bytes,this.readbackBytes)}getCapturedSize(e){const r=this.captures.get(e);return r?{width:r.width,height:r.height,samples:r.samples}:null}get stats(){return{pages:this.captures.size,samples:this.samples,matchingPages:this.matchingPages,replays:this.replayCount,bytes:this.memoryBytes}}beginFrame(e=[]){this.matchingPages=0,this.visiblePageIds=new Set(e.map(r=>r.id)),this.schedulePersistence()}has(e,r){var n;const i=this.captures.get(e.id);if(!this.canReplay(e)||(i==null?void 0:i.casterRevision)!==e.casterRevision)return!1;if(i&&i.samples>1&&i.samples>=r&&e.captureSize&&e.presentationKey&&i.crop.x===0&&i.crop.y===0&&i.crop.z===1&&i.crop.w===1)return i.width>=e.captureSize.width&&i.height>=e.captureSize.height;if(i!=null&&i.restored){const s=this.restoreRequests.get(e.id),a=(n=this.persistence)==null?void 0:n.identity(e,r);if(e.ready===!1||!(s!=null&&s.expected)||!a||$e(a)!==i.persistentKey||!Cp(i.matrix,s.expected))return!1;const o=e.screenBounds,c=i.crop;if(c.x>o.x+1e-6||c.y>o.y+1e-6||c.x+c.z<o.x+o.z-1e-6||c.y+c.w<o.y+o.w-1e-6)return!1}return(i==null?void 0:i.revision)===(e.contentKey??e.revision)&&i.samples===r}hasAtLeast(e,r){const i=this.captures.get(e.id);return!!(i&&i.samples>=r&&this.has(e,i.samples))}downsample(e,r,i){var h;if(!Number.isInteger(r)||!Number.isInteger(i)||r<1||i<1)return!1;const n=this.captures.get(e.id);if(!n||!this.canReplay(e))return!1;const s=Math.max(r,Math.ceil(n.width/2)),a=Math.max(i,Math.ceil(n.height/2));if(s>n.width||a>n.height||s*a>=n.width*n.height)return!1;const o=new Ke(s,a,{type:bt,format:er,minFilter:Ae,magFilter:Ae,depthTexture:new nr(s,a,kt),samples:0}),c=this.renderer,l=c.getRenderTarget(),u=c.getActiveCubeFace(),d=c.getActiveMipmapLevel(),g=c.getViewport(new ie),p=c.getScissor(new ie),f=c.getScissorTest(),y=c.autoClear;try{c.initRenderTarget(o),this.downsampleMaterial.uniforms.source.value=n.visibility,this.downsampleMaterial.uniforms.depth.value=n.depth,this.downsampleMaterial.uniforms.texel.value.set(1/s,1/a),this.copyQuad.material=this.downsampleMaterial,c.autoClear=!1,c.setRenderTarget(o),c.setViewport(new ie(0,0,s,a)),c.setScissorTest(!1),c.render(this.copyScene,this.copyCamera)}catch(v){throw(h=o.depthTexture)==null||h.dispose(),o.dispose(),v}finally{this.copyQuad.material=this.copyMaterial,c.setRenderTarget(l,u,d),c.setViewport(g),c.setScissor(p),c.setScissorTest(f),c.autoClear=y}return this.captures.set(e.id,{...n,target:o,visibility:o.texture,depth:o.depthTexture,width:s,height:a,bytes:s*a*8}),this.pendingWrites.delete(e.id),Er(n),this.contentRevision+=1,!0}isRestorePending(e,r){var s;const i=this.pendingRestores.get(e.id);if(!i||i.samples!==r)return!1;const n=(s=this.persistence)==null?void 0:s.identity(e,r);return!!(n&&$e(n)===i.key)}setPersistence(e){this.persistence!==e&&(this.cancelPendingPersistence(),this.persistence=e)}cancelPendingPersistence(){var e;(e=this.persistence)==null||e.cache.cancelPending(),this.persistenceGeneration+=1,this.restoreAttempts.clear(),this.pendingRestores.clear(),this.restoreRequests.clear(),this.pendingWrites.clear(),this.persistenceOffers=new WeakMap,this.persistenceAttempted=new WeakSet,this.persistenceTimer!==null&&clearTimeout(this.persistenceTimer),this.persistenceTimer=null}beginSolarTransition(){this.cancelPendingPersistence()}canPresent(e){return this.canReplay(e)}prepareRestore(e,r,i){if(this.disposed)return;if(this.restoreRequests.set(e.id,{page:e,samples:r,expected:i==null?void 0:i.clone()}),this.restoreRequests.size>Mr*2){for(const l of this.restoreRequests.keys())if(l!==e.id&&!this.visiblePageIds.has(l)){this.restoreRequests.delete(l);break}}const n=this.persistence;if(!(n!=null&&n.cache.enabled)||n.cache.busy||e.ready===!1||this.hasAtLeast(e,r))return;const s=n.identity(e,r),a=s&&$e(s);if(!s||!a||this.restoreAttempts.has(a))return;this.restoreAttempts.add(a),this.restoreAttempts.size>Mr*4&&this.restoreAttempts.delete(this.restoreAttempts.values().next().value);const o=this.persistenceGeneration,c=this.captures.get(e.id);this.pendingRestores.set(e.id,{key:a,samples:r}),n.cache.read(s).then(l=>{const u=this.restoreRequests.get(e.id),d=u&&n.identity(u.page,r);if(!l||this.disposed||this.persistenceGeneration!==o||this.persistence!==n||!u||u.page.ready===!1||!d||$e(d)!==a||this.captures.get(e.id)!==c)return;const g=new re().fromArray(l.worldBasis),p=n.worldBasis();if(!g.elements.every(Number.isFinite)||g.determinant()===0||!p.elements.every(Number.isFinite)||p.determinant()===0)return;const f=new re().fromArray(l.captureMatrix).multiply(g.invert()).multiply(p),y=[...new Set([l.visibility.buffer,l.depth.buffer])].reduce((E,C)=>E+C.byteLength,0),h=l.width*l.height*wo+y;if(!this.admit(e.id,h))return;const v=new is(l.visibility,l.width,l.height,er,bt),b=new is(l.depth,l.width,l.height,er,bt);for(const E of[v,b])E.minFilter=Ae,E.magFilter=Ae,E.generateMipmaps=!1,E.needsUpdate=!0;c&&Er(c),this.captures.delete(e.id),this.captures.set(e.id,{target:null,visibility:v,depth:b,width:l.width,height:l.height,bytes:h,restored:!0,persistentKey:a,persistentIdentity:l.identity,revision:u.page.contentKey??u.page.revision,casterRevision:u.page.casterRevision,presentationKey:u.page.presentationKey??u.page.contentKey??u.page.revision,samples:l.identity.samples,matrix:f,crop:new ie().fromArray(l.crop)}),this.samples=l.identity.samples,this.contentRevision+=1}).catch(()=>{}).finally(()=>{var l,u;!this.disposed&&o===this.persistenceGeneration&&(((l=this.pendingRestores.get(e.id))==null?void 0:l.key)===a&&this.pendingRestores.delete(e.id),(u=n.requestRepaint)==null||u.call(n),this.schedulePersistence())})}admit(e,r,i=!1){var a;const n=i?Math.min(((a=this.captures.get(e))==null?void 0:a.bytes)??0,Rp):0,s=qn+n;for(const[o,c]of this.captures){if(r+this.memoryBytes<=s)break;o===e||this.visiblePageIds.has(o)||(Er(c),this.captures.delete(o),this.contentRevision+=1,this.pendingWrites.delete(o))}return r+this.memoryBytes<=s}publish(e,r,i,n,s){var O;if(!this.captureSupported)return!1;const a=n.screenBounds,o=Math.max(0,Math.floor(a.x*e.width)),c=Math.max(0,Math.floor(a.y*e.height)),l=Math.min(e.width,Math.ceil((a.x+a.z)*e.width)),u=Math.min(e.height,Math.ceil((a.y+a.w)*e.height)),d=l-o,g=u-c,p=d*g*wo;if(d<=0||g<=0||p>qn||!r.depthTexture||!this.admit(n.id,p,!0))return!1;const f=this.renderer,y=f.getRenderTarget(),h=f.getActiveCubeFace(),v=f.getActiveMipmapLevel(),b=f.getViewport(new ie),E=f.getScissor(new ie),C=f.getScissorTest(),R=f.autoClear,I=new Ke(d,g,{type:bt,format:er,minFilter:Ae,magFilter:Ae,depthTexture:new nr(d,g,kt),samples:0});try{f.initRenderTarget(I);const L=new Hl(new Ot(o,c),new Ot(l,u));this.copyMaterial.uniforms.source.value=e.texture,this.copyMaterial.uniforms.crop.value.set(o/e.width,c/e.height,d/e.width,g/e.height),f.autoClear=!1,f.setRenderTarget(I),f.setViewport(new ie(0,0,d,g)),f.setScissorTest(!1),f.render(this.copyScene,this.copyCamera),f.copyTextureToTexture(r.depthTexture,I.depthTexture,L)}catch(L){throw(O=I.depthTexture)==null||O.dispose(),I.dispose(),L}finally{f.setRenderTarget(y,h,v),f.setViewport(b),f.setScissor(E),f.setScissorTest(C),f.autoClear=R}const M=this.captures.get(n.id);M&&Er(M),this.samples=s,this.captures.delete(n.id);const U={target:I,visibility:I.texture,depth:I.depthTexture,width:d,height:g,bytes:p,restored:!1,revision:n.contentKey??n.revision,casterRevision:n.casterRevision,samples:s,presentationKey:n.presentationKey??n.contentKey??n.revision,matrix:new re().multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),crop:new ie(o/e.width,c/e.height,d/e.width,g/e.height)};return this.captures.set(n.id,U),this.contentRevision+=1,this.queuePersistence(n,U),!0}queuePersistence(e,r){const i=this.persistence;if(!(i!=null&&i.cache.enabled)||e.ready===!1||this.disposed)return;const n=i.identity(e,r.samples),s=n&&$e(n),a=i.worldBasis();!n||n.samples!==r.samples||!s||!a.elements.every(Number.isFinite)||a.determinant()===0||r.width*r.height*16>_o||(this.pendingWrites.delete(e.id),this.persistenceOffers.set(r,{page:e,capture:r,identity:n,key:s,worldBasis:[...a.elements]}),this.schedulePersistence())}schedulePersistence(){var e;if(!(this.disposed||this.persistenceTimer!==null||this.readbackBusy||!((e=this.persistence)!=null&&e.cache.enabled)||this.persistence.cache.busy)){for(const[r,i]of this.pendingWrites)this.captures.get(r)!==i.capture&&this.pendingWrites.delete(r);for(const r of[!0,!1])for(const[i,n]of this.captures){if(this.pendingWrites.size>=Ap)break;const s=this.persistenceOffers.get(n);this.visiblePageIds.has(i)===r&&s&&!this.persistenceAttempted.has(n)&&!this.pendingWrites.has(i)&&this.pendingWrites.set(i,s)}this.pendingWrites.size!==0&&(this.persistenceTimer=setTimeout(()=>{this.persistenceTimer=null,this.persistNextCapture()},0))}}persistNextCapture(){var f,y,h;const e=this.persistence;if(this.disposed||this.readbackBusy||!(e!=null&&e.cache.enabled)||e.cache.busy||typeof this.renderer.readRenderTargetPixelsAsync!="function")return;const r=[...this.pendingWrites.entries()].find(([v,b])=>this.captures.get(v)===b.capture);if(!r){this.pendingWrites.clear();return}const[i,n]=r,s=((f=this.restoreRequests.get(i))==null?void 0:f.page)??n.page,a=e.identity(s,n.capture.samples);if(s.ready===!1||!a||$e(a)!==n.key){this.pendingWrites.delete(i),this.persistenceAttempted.add(n.capture),this.schedulePersistence();return}const{capture:o}=n,c=o.width*o.height*16;if(c>_o||this.memoryBytes+c*2>qn){this.pendingWrites.delete(i),this.persistenceAttempted.add(o),this.schedulePersistence();return}const l=this.persistenceGeneration,u={target:null,pixels:null,reading:null},d=()=>{const v=this.renderer,b=v.getRenderTarget(),E=v.getActiveCubeFace(),C=v.getActiveMipmapLevel(),R=v.getViewport(new ie),I=v.getScissor(new ie),M=v.getScissorTest(),U=v.autoClear,O=this.copyQuad.material;try{u.target=new Ke(o.width,o.height,{format:Ur,type:bt,depthBuffer:!1,minFilter:Ae,magFilter:Ae}),v.initRenderTarget(u.target),u.pixels=new Float32Array(o.width*o.height*4),this.packMaterial.uniforms.visibility.value=o.visibility,this.packMaterial.uniforms.depth.value=o.depth,this.copyQuad.material=this.packMaterial,v.autoClear=!1,v.setRenderTarget(u.target),v.setViewport(new ie(0,0,o.width,o.height)),v.setScissorTest(!1),v.render(this.copyScene,this.copyCamera),u.reading=v.readRenderTargetPixelsAsync(u.target,0,0,o.width,o.height,u.pixels)}finally{this.copyQuad.material=O,v.setRenderTarget(b,E,C),v.setViewport(R),v.setScissor(I),v.setScissorTest(M),v.autoClear=U}};try{if(e.runIdleRender){if(!e.runIdleRender(d)&&!u.target)return}else d()}catch{(y=u.target)==null||y.dispose(),this.pendingWrites.delete(i),this.persistenceAttempted.add(o),this.schedulePersistence();return}if(!u.reading||!u.target||!u.pixels){(h=u.target)==null||h.dispose();return}const g=u.target,p=u.pixels;this.pendingWrites.delete(i),this.persistenceAttempted.add(o),this.readbackBusy=!0,this.readbackBytes=c*2,u.reading.then(async()=>{var E;const v=((E=this.restoreRequests.get(i))==null?void 0:E.page)??n.page,b=e.identity(v,o.samples);this.disposed||l!==this.persistenceGeneration||this.persistence!==e||v.ready===!1||!b||$e(b)!==n.key||await e.cache.writePacked(n.identity,{width:o.width,height:o.height,rgba:p,captureMatrix:[...o.matrix.elements],crop:o.crop.toArray(),worldBasis:n.worldBasis})}).catch(()=>{}).finally(()=>{var v;g.dispose(),this.readbackBusy=!1,this.readbackBytes=0,this.disposed||((v=e.requestRepaint)==null||v.call(e),this.schedulePersistence())})}canReplay(e){var i;const r=this.captures.get(e.id);if(!r||r.presentationKey!==(e.presentationKey??e.contentKey??e.revision))return!1;if(r.restored){const n=(i=this.persistence)==null?void 0:i.identity(e,r.samples),s=r.persistentIdentity;if(e.captureSize&&s)return!!(n&&n.source===s.source&&n.dateTime===s.dateTime&&n.corridor===s.corridor&&n.geometryFingerprint===s.geometryFingerprint&&n.samples===s.samples);if(!n||$e(n)!==r.persistentKey)return!1}return!0}activate(e){const r=this.captures.get(e.id);this.captures.delete(e.id),this.captures.set(e.id,r),this.uniforms.carmaRetainedMatrix.value.copy(r.matrix),this.uniforms.carmaRetainedCrop.value.copy(r.crop),this.uniforms.carmaRetainedColor.value=r.visibility,this.uniforms.carmaRetainedDepth.value=r.depth,this.matchingPages+=1,this.replayCount+=1,this.uniforms.carmaRetainedCount.value=1;const i=e.receiverBounds;this.uniforms.carmaRetainedBounds.value[0].set(i.min.x,i.min.z,i.max.x,i.max.z),this.uniforms.carmaRetainedEnabled.value=!0}renderNative(e,r,i){if(r.length===0)return i(),new Set;this.configureScene(e);const n=new Map(r.filter(u=>u.receiverObjectId!==void 0&&this.canPresent(u)).map(u=>[u.receiverObjectId,u])),s=[],a=new Map;e.traverseVisible(u=>{const d=u;if(!d.isMesh)return;let g;for(let p=d;p&&(g=n.get(p.id),!g);p=p.parent);s.push({mesh:d,page:g});for(const p of Array.isArray(d.material)?d.material:[d.material]){let f=a.get(p);f||a.set(p,f=new Set),f.add(g==null?void 0:g.id)}});const o=new Set;for(const u of a.values())if(!(u.size<2))for(const d of u)d!==void 0&&o.add(d);const c=new Set,l=[];for(const{mesh:u,page:d}of s){const g=u.onBeforeRender,p=d!==void 0&&!o.has(d.id);u.onBeforeRender=(...f)=>{g.call(u,...f),this.uniforms.carmaRetainedEnabled.value=!1,p&&this.activate(d)},p&&c.add(d.id),l.push(()=>{u.onBeforeRender=g})}this.uniforms.carmaRetainedEnabled.value=!1;try{return i(),c}finally{this.uniforms.carmaRetainedEnabled.value=!1;for(const u of l)u()}}render(e,r,i,n){if(!this.canPresent(r))return n();this.configureScene(e),this.activate(r);try{return n()}finally{this.uniforms.carmaRetainedEnabled.value=!1}}capture(e,r){this.captureSupported=!0,this.configureScene(e),this.uniforms.carmaCaptureVisibility.value=!0;try{return r()}finally{this.uniforms.carmaCaptureVisibility.value=!1}}configureScene(e){e.traverseVisible(r=>{const i=r;if(!(!i.isMesh||!i.receiveShadow)){if(i.isInstancedMesh||i.isSkinnedMesh){this.captureSupported=!1;return}for(const n of Array.isArray(i.material)?i.material:[i.material]){if(this.unsupportedMaterials.has(n)&&(this.captureSupported=!1),!(n.isMeshStandardMaterial||n.isMeshLambertMaterial||n.isMeshPhongMaterial)||n.transparent){this.captureSupported=!1;continue}this.materials.has(n)||this.configure(n)}}})}configure(e){const r=e.onBeforeCompile,i=e.customProgramCacheKey,n=this.uniforms,s=(l,u)=>{r.call(e,l,u);const d=/getShadow\( directionalShadowMap\[ i \][^;]+?\)/;if(!l.vertexShader.includes("#include <common>")||!l.vertexShader.includes("#include <project_vertex>")||!l.fragmentShader.includes("#include <common>")||!l.fragmentShader.includes("#include <lights_fragment_begin>")||!l.fragmentShader.includes("#include <dithering_fragment>")||!d.test(ns.lights_fragment_begin)){this.unsupportedMaterials.add(e),this.captureSupported=!1;return}this.unsupportedMaterials.delete(e),Object.assign(l.uniforms,n),l.vertexShader=l.vertexShader.replace("#include <common>",`#include <common>
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
uniform vec4 carmaRetainedBounds[${Mr}];
varying vec4 vCarmaRetainedClip;
varying vec2 vCarmaRetainedWorld;
float carmaRetainedCoverage(float fallbackCoverage) {
  vec3 ndc = vCarmaRetainedClip.xyz / vCarmaRetainedClip.w;
  vec2 uv = ndc.xy * 0.5 + 0.5;
  uv = (uv - carmaRetainedCrop.xy) / carmaRetainedCrop.zw;
  if (!carmaRetainedEnabled || carmaCaptureVisibility || vCarmaRetainedClip.w <= 0.0) return fallbackCoverage;
  bool owned = false;
  for (int i = 0; i < ${Mr}; i++) {
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
`);const g=ns.lights_fragment_begin.replace(d,p=>`(carmaCapturedCoverage = ${p}, carmaRetainedCoverage(carmaCapturedCoverage))`);l.fragmentShader=l.fragmentShader.replace("#include <lights_fragment_begin>",`float carmaCapturedCoverage = 1.0;
${g}`).replace("#include <dithering_fragment>",`#include <dithering_fragment>
if (carmaCaptureVisibility) gl_FragColor.rgb = vec3(carmaCapturedCoverage);`)},a=()=>`${i.call(e)}|retained-corridor-visibility-v4`;e.onBeforeCompile=s,e.customProgramCacheKey=a,e.needsUpdate=!0;const o=()=>{e.onBeforeCompile===s&&(e.onBeforeCompile=r),e.customProgramCacheKey===a&&(e.customProgramCacheKey=i),e.removeEventListener("dispose",c),e.needsUpdate=!0},c=()=>{o(),this.materials.delete(e)};e.addEventListener("dispose",c),this.materials.set(e,o)}dispose(){this.disposed=!0,this.setPersistence(void 0);for(const e of this.captures.values())Er(e);this.captures.clear(),this.uniforms.carmaRetainedEnabled.value=!1,this.uniforms.carmaRetainedColor.value=null,this.uniforms.carmaRetainedDepth.value=null,this.copyQuad.geometry.dispose(),this.copyMaterial.dispose(),this.downsampleMaterial.dispose(),this.packMaterial.dispose();for(const e of this.materials.values())e();this.materials.clear()}}const Ut=64,bi=512*1024**2,rt={inactive:"inactive",dimensions:"dimensions",budget:"budget",msaa:"msaa",format:"format",receivers:"receivers",pages:"pages",renderer:"renderer",disposed:"disposed"},xo=`
  out vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`,Ip=`
  layout(location = 0) out highp vec4 outColor;
  in vec2 vUv;
  uniform sampler2D tPrevious;
  uniform sampler2D tReference;
  uniform sampler2D tReferenceDepth;
  uniform sampler2D tSample;
  uniform sampler2D tSampleDepth;
  uniform mat4 uInverseViewProjection;
  uniform vec4 uBounds[${Ut}];
  uniform int uBoundsCount;
  uniform bool uRefresh;
  uniform bool uResetAll;
  uniform float uWeights[${Ut}];
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
    for (int i = 0; i < ${Ut}; i++) {
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
`,Dp=`
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
`;class Pp{constructor(e,r){this.renderer=e,this.ownsPresentation=r===void 0,this.presentation=r??new tl(e),this.quad.frustumCulled=!1,this.fullscreenScene.add(this.quad)}fullscreenScene=new Fr;fullscreenCamera=new Ts(-1,1,1,-1,0,1);blendMaterial=new rr({glslVersion:Br,vertexShader:xo,fragmentShader:Ip,uniforms:{tPrevious:{value:null},tReference:{value:null},tReferenceDepth:{value:null},tSample:{value:null},tSampleDepth:{value:null},uInverseViewProjection:{value:new re},uBounds:{value:Array.from({length:Ut},()=>new ie)},uBoundsCount:{value:0},uRefresh:{value:!1},uResetAll:{value:!1},uWeights:{value:new Float32Array(Ut).fill(1)}},depthTest:!1,depthWrite:!1,blending:_i});compositeMaterial=new rr({glslVersion:Br,vertexShader:xo,fragmentShader:Dp,uniforms:{tColor:{value:null},tDepth:{value:null},uOutputDither:{value:!1}},dithering:!0,transparent:!0,blending:Fo,depthTest:!0,depthFunc:Yo,depthWrite:!0});quad=new Vr(new ws(2,2),this.blendMaterial);referenceTarget=null;sampleTarget=null;readTarget=null;writeTarget=null;pages=new Map;stateKey="";targetKey="";cursor=0;totalSamples=1;broken=!1;disposed=!1;allocatedBytes=0;lastFallbackReason=null;presentation;publishedStateKeys=new Map;publicationRetryMs=250;ownsPresentation;get pageProgress(){return[...this.pages].map(([e,r])=>({id:e,samples:r.samples,totalSamples:this.totalSamples,ready:r.page.ready!==!1,published:this.publishedStateKeys.get(e)===JSON.stringify([this.stateKey,r.page.revision])}))}get memoryBytes(){return this.allocatedBytes+this.presentation.memoryBytes}get fallbackReason(){return this.lastFallbackReason}render(e,r,i){var U,O;if(this.disposed)return this.fallback(rt.disposed);if(this.broken)return this.fallback(rt.renderer);if(!i.active)return this.stateKey="",this.lastFallbackReason=rt.inactive,null;const{width:n,height:s,samples:a}=i,o=Es((U=i.options)==null?void 0:U.format),c=((O=i.options)==null?void 0:O.msaaSamples)??$o.msaaSamples,l=n*s,u=i.visibilityOnly?er:Ur,d=i.visibilityOnly?1:4,g=l*(2*(o.bytesPerPixel*d/4+4)+2*o.accumulationBytesPerPixel*d/4);if(!Number.isInteger(n)||n<1||!Number.isInteger(s)||s<1||!Number.isInteger(a)||a<1||n>this.renderer.capabilities.maxTextureSize||s>this.renderer.capabilities.maxTextureSize)return this.fallback(rt.dimensions);if(i.maxRenderTargetPixels!==void 0&&(!(i.maxRenderTargetPixels>0)||l>i.maxRenderTargetPixels)||g+this.presentation.memoryBytes>bi)return this.fallback(rt.budget);if(o.format!==Ur)return this.fallback(rt.format);if(c!==0)return this.fallback(rt.msaa);if(!r.supportsOpaqueAccumulation)return this.fallback(rt.receivers);const p=r.accumulationPages.map(L=>{var j;return{...L,ready:L.ready!==!1&&(((j=i.isPageReady)==null?void 0:j.call(i,L.id))??!0)}});if(p.length===0||p.length>Ut)return this.fallback(rt.pages);this.lastFallbackReason=null;const f=this.renderer,y=f.getRenderTarget(),h=f.getActiveCubeFace(),v=f.getActiveMipmapLevel(),b=f.getClearColor(new We),E=f.getClearAlpha(),C=f.autoClear,R=f.getViewport(new ie),I=f.getScissor(new ie),M=f.getScissorTest();try{f.autoClear=!1;const L=JSON.stringify([n,s,o.type,o.accumulationType,u]);if(this.targetKey!==L){this.releaseTargets();const B={type:o.type,format:u,minFilter:Ae,magFilter:Ae,depthBuffer:!0,samples:0};this.referenceTarget=new Ke(n,s,{...B,depthTexture:new nr(n,s,kt)}),this.sampleTarget=new Ke(n,s,{...B,depthTexture:new nr(n,s,kt)});const z={type:o.accumulationType,format:u,minFilter:Ae,magFilter:Ae,depthBuffer:!1};this.readTarget=new Ke(n,s,z),this.writeTarget=new Ke(n,s,z),this.targetKey=L,this.allocatedBytes=g}const j=JSON.stringify([i.viewKey,i.visibilityOnly?0:i.styleEpoch,a,L]),Z=this.stateKey!==j,N=new Set(p.map(({id:B})=>B)),$=[...this.pages.values()].filter(({page:B})=>!N.has(B.id)).map(({page:B})=>B),X=[...Z?p:p.filter(B=>{var Ie;const z=(Ie=this.pages.get(B.id))==null?void 0:Ie.page;return(z==null?void 0:z.revision)!==B.revision||(z==null?void 0:z.ready)===!1&&B.ready}),...$].flatMap(B=>[B.screenBounds,...this.pages.has(B.id)?[this.pages.get(B.id).page.screenBounds]:[]]),P=Z?p:p.filter(B=>X.some(z=>this.overlaps(B.screenBounds,z)));this.blendMaterial.uniforms.uInverseViewProjection.value.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse).invert(),Z&&(this.pages.clear(),this.cursor=0);for(const B of $)this.pages.delete(B.id);for(const B of P)this.publishedStateKeys.delete(B.id);P.length>0&&(this.publicationRetryMs=250),this.cursor%=Math.max(1,p.length);for(const B of p){const z=this.pages.get(B.id);z?z.page=B:this.pages.set(B.id,{page:B,samples:0})}if(this.totalSamples=a,P.length>0||$.length>0){this.clearTarget(this.referenceTarget),r.renderSample(e,0,a),this.blend(P,!0,Z,P.map(()=>1));for(const B of P)this.pages.get(B.id).samples=1}else{const B=[...this.pages.values()],z=performance.now(),Ie=i.maxPagesPerFrame??4,ve=Number.isFinite(Ie)?Math.min(Ut,Math.max(1,Math.floor(Ie))):4,Be=i.maxFrameCpuMilliseconds??4,Ge=Number.isFinite(Be)?Math.max(0,Be):4;let Ze=0;do{const be=[],Wt=this.cursor;for(let je=0;je<B.length;je+=1){const Gt=(Wt+je)%B.length,Ee=B[Gt];if(!(Ee.samples>=a||Ee.page.ready===!1)){if(be.length===0&&this.clearTarget(this.sampleTarget),!r.renderPageSample(e,Ee.page.id,Ee.samples,a))return this.fallback(rt.pages);if(be.push(Ee),Ze+=1,this.cursor=(Gt+1)%B.length,Ze>=ve||performance.now()-z>=Ge)break}}if(be.length===0)break;this.blend(be.map(({page:je})=>je),!1,!1,be.map(je=>1/(je.samples+1)));for(const je of be)je.samples+=1}while(Ze<ve&&performance.now()-z<Ge)}this.stateKey=j,f.setRenderTarget(y,h,v),f.setViewport(R),f.setScissor(I),f.setScissorTest(M),this.quad.material=this.compositeMaterial;const ee=[...this.pages.values()].every(B=>B.samples>=a);this.compositeMaterial.uniforms.tColor.value=ee?this.readTarget.texture:this.referenceTarget.texture,this.compositeMaterial.uniforms.tDepth.value=this.referenceTarget.depthTexture,this.compositeMaterial.uniforms.uOutputDither.value=y===null,i.visibilityOnly||f.render(this.fullscreenScene,this.fullscreenCamera);let ne=!1;for(const{page:B,samples:z}of this.pages.values()){if(B.ready===!1||z<a)continue;const Ie=JSON.stringify([j,B.revision]);if(this.publishedStateKeys.get(B.id)!==Ie)try{this.presentation.publish(this.readTarget,this.referenceTarget,e,B,a)?this.publishedStateKeys.set(B.id,Ie):ne=!0}catch(ve){ne=!0,console.error("[shadow-simulation] retaining previous corridor capture after copy failure",ve)}}for(const B of this.publishedStateKeys.keys())N.has(B)||this.publishedStateKeys.delete(B);const Me=[...this.pages.values()].reduce((B,{page:z,samples:Ie})=>{const ve=z.ready!==!1&&this.publishedStateKeys.get(z.id)===JSON.stringify([j,z.revision]);return B+(ve?a:Math.min(Ie,a-1))},0),Se=ne?this.publicationRetryMs:void 0;return this.publicationRetryMs=ne?Math.min(4e3,this.publicationRetryMs*2):250,{progress:Me/(this.pages.size*a),settled:Me===this.pages.size*a,...Se===void 0?{}:{retryAfterMs:Se},needsRepaint:[...this.pages.values()].some(B=>B.samples<a&&B.page.ready!==!1)}}catch(L){return this.broken=!0,console.error("[shadow-simulation] corridor accumulation failed; using direct rendering",L),this.fallback(rt.renderer)}finally{f.autoClear=C,f.setClearColor(b,E),f.setRenderTarget(y,h,v),f.setViewport(R),f.setScissor(I),f.setScissorTest(M)}}overlaps(e,r){return e.x<=r.x+r.z&&e.x+e.z>=r.x&&e.y<=r.y+r.w&&e.y+e.w>=r.y}clearTarget(e){this.renderer.setRenderTarget(e),this.renderer.setClearColor(0,0),this.renderer.clear(!0,!0,!1)}blend(e,r,i,n){const s=this.blendMaterial.uniforms;s.tPrevious.value=this.readTarget.texture,s.tReference.value=this.referenceTarget.texture,s.tReferenceDepth.value=this.referenceTarget.depthTexture,s.tSample.value=this.sampleTarget.texture,s.tSampleDepth.value=this.sampleTarget.depthTexture,s.uBoundsCount.value=e.length,e.forEach(({receiverBounds:o},c)=>s.uBounds.value[c].set(o.min.x,o.min.z,o.max.x,o.max.z)),s.uRefresh.value=r,s.uResetAll.value=i,s.uWeights.value.set(n),this.quad.material=this.blendMaterial,this.renderer.setRenderTarget(this.writeTarget),this.renderer.render(this.fullscreenScene,this.fullscreenCamera);const a=this.readTarget;this.readTarget=this.writeTarget,this.writeTarget=a}releaseTargets(){var e;for(const r of[this.referenceTarget,this.sampleTarget,this.readTarget,this.writeTarget])(e=r==null?void 0:r.depthTexture)==null||e.dispose(),r==null||r.dispose();this.referenceTarget=null,this.sampleTarget=null,this.readTarget=null,this.writeTarget=null,this.stateKey="",this.targetKey="",this.allocatedBytes=0,this.pages.clear()}releaseScratch(e=!1){e?(this.stateKey="",this.pages.clear()):this.releaseTargets(),this.publishedStateKeys.clear(),this.cursor=0}fallback(e){return this.lastFallbackReason=e,this.releaseTargets(),null}dispose(){this.disposed||(this.disposed=!0,this.releaseTargets(),this.ownsPresentation&&this.presentation.dispose(),this.quad.geometry.dispose(),this.blendMaterial.dispose(),this.compositeMaterial.dispose())}}const To=2e4;let Op=0;var Lo;class Np{enabled=kl((Lo=globalThis.location)==null?void 0:Lo.hostname);reportId=++Op;nextCorridorId=0;labels=new Map;pending=new Map;timer;context;observe(e,r){var s;if(!this.enabled)return;const i=performance.now();for(const{id:a}of e)this.labels.has(a)||this.labels.set(a,`C${this.reportId}.${++this.nextCorridorId}`);this.context={total:e.length,ready:e.filter(a=>a.ready).length,completed:e.filter(a=>a.published).length,samples:e.reduce((a,o)=>a+o.samples,0),activeId:r.activeId?this.labels.get(r.activeId):null,memoryBytes:r.memoryBytes,fallbackReason:r.fallbackReason,publicationRetries:(s=r.publicationRetries)==null?void 0:s.map(([a,o])=>({id:this.labels.get(a),attempts:o.attempts,retryInMs:Math.max(0,Math.round(o.retryAt-i))}))};const n=new Set(e.map(({id:a})=>a));for(const a of this.pending.keys())n.has(a)||this.pending.delete(a);for(const a of this.labels.keys())n.has(a)||this.labels.delete(a);for(const a of e){if(a.published){this.pending.delete(a.id);continue}const o=this.pending.get(a.id),c=!o||a.samples>o.progress.samples;this.pending.set(a.id,{progress:a,advancedAt:c?i:o.advancedAt,reported:c?!1:o.reported})}this.schedule()}pause(){clearTimeout(this.timer),this.timer=void 0,this.pending.clear()}schedule(){if(this.timer!==void 0)return;let e=1/0;for(const r of this.pending.values())r.reported||(e=Math.min(e,r.advancedAt+To));Number.isFinite(e)&&(this.timer=setTimeout(()=>{var n;this.timer=void 0;const r=performance.now(),i=[];for(const s of this.pending.values())s.reported||r-s.advancedAt<To||(s.reported=!0,i.push({...s.progress,id:this.labels.get(s.progress.id),file:(n=s.progress.id.match(/\/([^/"\\]+\.b3dm)/))==null?void 0:n[1],stalledMilliseconds:Math.round(r-s.advancedAt),waitingForReadiness:!s.progress.ready}));i.length>0&&console.warn("[shadow-simulation] corridors without progress for 20 seconds",JSON.stringify({corridors:i,scheduler:this.context})),this.schedule()},Math.max(0,e-performance.now())))}}class Lp{constructor(e){this.renderer=e,this.presentation=new tl(e),this.scratch=new Pp(e,this.presentation)}presentation;scratch;captures=[];activeId=null;activeCapture=null;cursor=0;samples=1;disposed=!1;watchdog=new Np;publicationRetries=new Map;restoreOpportunities=new Map;allocationKey="";allocations=new Map;plans=new Map;get memoryBytes(){return this.scratch.memoryBytes}get fallbackReason(){return this.presentation.supportsCapture?this.scratch.fallbackReason:"receivers"}get capturePages(){return this.captures.map(({page:e})=>e)}get pageProgress(){const e=this.scratch.pageProgress;return this.captures.map(({page:r,plan:i,ready:n})=>{const s=n&&this.presentation.has(r,this.samples),a=e.find(({id:o})=>o===r.id);return{id:r.id,samples:s?this.samples:(a==null?void 0:a.samples)??0,totalSamples:this.samples,ready:n,published:s,limited:i.limited,width:i.width,height:i.height}})}updateCaptures(e,r,i,n=!0){var f;const s=Mp(e),a=Es((f=i.options)==null?void 0:f.format),o=2*(a.bytesPerPixel/4+4)+2*a.accumulationBytesPerPixel/4+8,c=Math.max(1,Math.floor(Math.min(i.maxRenderTargetPixels??i.width*i.height,bi/2/o))),l=r.accumulationPages.map(y=>{const h=this.plans.get(y.id),v=(h==null?void 0:h.orientation)??s,b={groundTexelTargetMeters:y.groundTexelTargetMeters??1,maximumDimension:this.renderer.capabilities.maxTextureSize,maximumPixels:c},E=JSON.stringify([y.receiverBounds.min,y.receiverBounds.max,v.toArray(),b]),C=(h==null?void 0:h.inputs)===E?h.plan:bp(y.receiverBounds,v,b);return this.plans.set(y.id,{inputs:E,plan:C,orientation:v}),C.camera.layers.mask=e.layers.mask,{page:y,plan:C}}),u=l.find(({page:y})=>{var h;return this.activeId===y.id&&((h=this.activeCapture)==null?void 0:h.page.id)===y.id&&this.activeCapture.page.contentKey===JSON.stringify([y.contentKey??y.revision,this.activeCapture.plan.key])}),d=u?this.activeCapture.plan:null,g=JSON.stringify(l.map(({page:y,plan:h})=>[y.id,h.key,y.screenBounds.z*y.screenBounds.w]));if(g!==this.allocationKey){const y=new Map(Tp(l.filter(({page:h})=>h.id!==(u==null?void 0:u.page.id)).map(({page:h,plan:v})=>({id:h.id,plan:v,screenArea:h.screenBounds.z*h.screenBounds.w})),Ss-(d?d.width*d.height*8:0)));u&&d&&y.set(u.page.id,d),this.allocationKey=g,this.allocations=y}this.captures=l.map(({page:y,plan:h})=>{var C;const v=this.allocations.get(y.id)??h,b=JSON.stringify([y.contentKey??y.revision,v.key]),E=(!n||y.ready!==!1)&&(((C=i.isPageReady)==null?void 0:C.call(i,y.id))??!0);return{page:{...y,ready:E,captureKey:JSON.stringify([v.camera.quaternion.toArray(),v.width,v.height]),captureSize:{width:v.width,height:v.height},contentKey:b,revision:b,screenBounds:new ie(0,0,1,1)},plan:v,ready:E}});const p=new Set(this.captures.map(({page:y})=>y.id));for(const y of this.plans.keys())p.has(y)||this.plans.delete(y);for(const[y,h]of this.publicationRetries){const v=this.captures.find(({page:b})=>b.id===y);(!v||v.page.contentKey!==h.contentKey)&&this.publicationRetries.delete(y)}this.presentation.beginFrame(this.capturePages);for(const{page:y,plan:h}of this.captures)this.presentation.prepareRestore(y,i.samples,new re().multiplyMatrices(h.camera.projectionMatrix,h.camera.matrixWorldInverse));i.active&&this.reportProgress()}reportProgress(){this.watchdog.enabled&&this.watchdog.observe(this.pageProgress,{activeId:this.activeId,memoryBytes:this.memoryBytes,fallbackReason:this.fallbackReason,publicationRetries:[...this.publicationRetries.entries()]})}yieldForRestore(e,r){if(!this.presentation.isRestorePending(e,r))return!1;const i=JSON.stringify([e.id,r]),n=e.contentKey??e.revision;if(this.restoreOpportunities.get(i)===n)return!1;if(this.restoreOpportunities.set(i,n),this.restoreOpportunities.size>1024){const s=this.restoreOpportunities.keys().next().value;s!==void 0&&this.restoreOpportunities.delete(s)}return!0}render(e,r,i){var g;if(this.disposed)return null;if(!i.active)return this.watchdog.pause(),null;if(this.samples=i.samples,this.updateCaptures(e,r,i),!this.presentation.supportsCapture)return this.scratch.releaseScratch(),this.activeId=null,null;const n=performance.now();let s,a=this.captures.find(({page:p})=>p.id===this.activeId);const o=a&&!a.ready&&this.captures.some(({page:p,ready:f})=>f&&p.id!==(a==null?void 0:a.page.id)&&!this.presentation.has(p,i.samples));if((!a||o||this.presentation.has(a.page,i.samples))&&(this.scratch.releaseScratch(!0),this.activeId=null,a=void 0),a){const p=this.publicationRetries.get(a.page.id);p&&p.retryAt>n&&(s=Math.ceil(p.retryAt-n))}if(!a&&this.captures.length>0)for(let p=0;p<this.captures.length;p+=1){const f=(this.cursor+p)%this.captures.length,y=this.captures[f];if(!y.ready||this.presentation.has(y.page,i.samples)||this.yieldForRestore(y.page,i.samples))continue;const h=this.publicationRetries.get(y.page.id);if(h&&h.retryAt>n){s=Math.min(s??1/0,Math.ceil(h.retryAt-n));continue}a=y,s=void 0,this.activeId=y.page.id,this.activeCapture=y,this.cursor=(f+1)%this.captures.length;break}let c=null;if(a!=null&&a.ready&&s===void 0){this.activeCapture=a;const{page:p,plan:f}=a,y=(h,v,b)=>r.renderPageSample(h,p.id,v,b,p.screenBounds);if(c=this.scratch.render(f.camera,{accumulationPages:[p],supportsOpaqueAccumulation:r.supportsOpaqueAccumulation,renderSample:y,renderPageSample:(h,v,b,E)=>y(h,b,E)},{...i,width:f.width,height:f.height,viewKey:f.key,visibilityOnly:!0,isPageReady:void 0,maxPagesPerFrame:i.maxPagesPerFrame??4}),c!=null&&c.settled)this.publicationRetries.delete(p.id),this.scratch.releaseScratch(!0),this.activeId=null;else if((c==null?void 0:c.retryAfterMs)!==void 0){const h=(((g=this.publicationRetries.get(p.id))==null?void 0:g.attempts)??0)+1;s=Math.max(250,c.retryAfterMs);const v=h>=3;v&&(s=Math.max(1e3,s)),this.publicationRetries.set(p.id,{contentKey:p.contentKey,attempts:v?0:h,retryAt:n+s}),v&&(this.scratch.releaseScratch(),this.activeId=null,this.captures.some(({page:b,ready:E})=>{var C;return E&&b.id!==p.id&&!this.presentation.has(b,i.samples)&&(((C=this.publicationRetries.get(b.id))==null?void 0:C.retryAt)??0)<=n})&&(s=void 0))}if(!c)return null}!this.activeId&&!this.captures.some(({page:p,ready:f})=>f&&!this.presentation.has(p,i.samples))&&this.scratch.releaseScratch();const l=this.pageProgress;this.reportProgress();const u=l.reduce((p,f)=>p+(f.published?i.samples:Math.min(f.samples,i.samples-1)),0),d=l.length*i.samples;return{progress:d>0?u/d:1,settled:d===u,needsRepaint:l.some(p=>p.ready&&!p.published)&&s===void 0,...s===void 0?{}:{retryAfterMs:s}}}renderHard(e,r,i){var I;if(this.disposed||!i.active)return{published:0,needsRepaint:!1};if(this.updateCaptures(e,r,{...i,samples:1},i.isPageReady===void 0),!r.supportsOpaqueAccumulation||!this.presentation.supportsCapture||!this.renderer.extensions.has("EXT_color_buffer_float"))return{published:0,needsRepaint:!1};const n=new Map(this.captures.map(({page:M})=>[M.id,this.presentation.getCapturedSize(M.id)])),s=this.captures.reduce((M,{page:U,plan:O})=>{const L=n.get(U.id);return M+Math.max(O.width*O.height,L?L.width*L.height:0)*8},0)>Ss,a=({page:M,plan:U})=>{const O=n.get(M.id);return O?(O.width*O.height-U.width*U.height)*8:0},o=this.captures.filter(({page:M,plan:U,ready:O})=>{if(!O)return!1;const L=n.get(M.id);return this.presentation.hasAtLeast(M,1)&&(!s||!L||L.width*L.height<=U.width*U.height)?!1:!(L&&L.samples>1&&!s&&(L.width!==U.width||L.height!==U.height)&&this.presentation.canReplay(M))});s&&o.sort((M,U)=>a(U)-a(M));const c=o.find(({page:M})=>!this.yieldForRestore(M,1));if(!c)return{published:0,needsRepaint:o.length>0};const{page:l,plan:u}=c;if(s&&this.presentation.hasAtLeast(l,1)&&a(c)>0){const M=n.get(l.id),U=Math.max(u.width,Math.ceil(M.width/2))*Math.max(u.height,Math.ceil(M.height/2))*8;if(this.memoryBytes+U>bi)return{published:0,needsRepaint:!1,retryAfterMs:1e3};try{const O=this.presentation.downsample(l,u.width,u.height);return{published:O?1:0,needsRepaint:O,...O?{}:{retryAfterMs:1e3}}}catch{return{published:0,needsRepaint:!1,retryAfterMs:1e3}}}if(this.memoryBytes+u.width*u.height*16>bi)return{published:0,needsRepaint:!1,retryAfterMs:1e3};const d=this.renderer,g=d.getRenderTarget(),p=d.getActiveCubeFace(),f=d.getActiveMipmapLevel(),y=d.getViewport(new ie),h=d.getScissor(new ie),v=d.getScissorTest(),b=d.autoClear,E=d.getClearColor(new We),C=d.getClearAlpha(),R=new Ke(u.width,u.height,{type:bt,format:er,minFilter:Ae,magFilter:Ae,samples:0,depthTexture:new nr(u.width,u.height,kt)});try{d.initRenderTarget(R),d.autoClear=!1,d.setRenderTarget(R),d.setViewport(new ie(0,0,u.width,u.height)),d.setScissorTest(!1),d.setClearColor(0,0),d.clear(!0,!0,!1);const U=r.renderPageSample(u.camera,l.id,0,1,l.screenBounds)&&this.presentation.publish(R,R,u.camera,l,1);return{published:U?1:0,needsRepaint:U&&o.length>1,...U?{}:{retryAfterMs:1e3}}}catch(M){return console.warn("[shadow-simulation] retaining completed corridor after hard-stage capture failure",M),{published:0,needsRepaint:!1,retryAfterMs:1e3}}finally{d.setRenderTarget(g,p,f),d.setViewport(y),d.setScissor(h),d.setScissorTest(v),d.setClearColor(E,C),d.autoClear=b,(I=R.depthTexture)==null||I.dispose(),R.dispose()}}pausePending(){this.watchdog.pause()}cancelPending(){this.watchdog.pause(),this.activeId!==null&&this.scratch.releaseScratch(),this.activeId=null,this.publicationRetries.clear(),this.restoreOpportunities.clear()}dispose(){this.disposed||(this.disposed=!0,this.watchdog.pause(),this.scratch.dispose(),this.presentation.dispose(),this.captures=[],this.plans.clear(),this.allocations=new Map,this.publicationRetries.clear(),this.restoreOpportunities.clear())}}const Fp=750,Bp=5e3,bo=new Set,Up=t=>{const e=zl({assetUrl:t,production:!0});let r=null,i=!1,n=!1,s=0,a=null;const o=()=>{if(r&&(r.onmessage=null,r.onerror=null,r.onmessageerror=null,r.terminate(),r=null),a){const d=a;a=null,clearTimeout(d.timer),d.finish(null)}},c=()=>{n=!0,o()},l=(d,g=[])=>{if(!e||i||n||a||typeof Worker>"u")return Promise.resolve(null);try{return r||(r=new Worker(new URL("https://cismet.github.io/carma-pr-deployments/812/geoportal/assets/shadow-corridor-cache.worker-VQZLpq-f.js",import.meta.url),{type:"module"}),r.onerror=c,r.onmessageerror=c,r.onmessage=p=>{var y;if(!a||((y=p.data)==null?void 0:y.id)!==a.id)return;const f=a;a=null,clearTimeout(f.timer),f.finish(p.data)}),new Promise(p=>{const f=setTimeout(c,d.operation===yi.read?Fp:Bp);a={id:d.id,timer:f,finish:p};try{r.postMessage(d,g)}catch{c()}})}catch{return c(),Promise.resolve(null)}},u={cancelPending:o,get enabled(){return!!(e&&!i&&!n&&typeof Worker<"u")},get busy(){return a!==null},async read(d){const g=$e(d);if(!g)return null;const p=await l({id:++s,producerAssetUrl:e??"",identity:d,operation:yi.read}),f=p==null?void 0:p.record;return!i&&(f==null?void 0:f.schema)===Li.schema&&$e(f.identity)===g&&So(f)?f:null},async write(d,g,p){if(!$e(d)||!So(g))return!1;const f=[g.visibility,g.depth];if(f.some(h=>!(h.buffer instanceof ArrayBuffer)||h.byteOffset!==0||h.byteLength!==h.buffer.byteLength))return!1;const y=await l({id:++s,producerAssetUrl:e??"",identity:d,operation:yi.write,capture:g,costs:p},[...new Set(f.map(h=>h.buffer))]);return!i&&(y==null?void 0:y.written)===!0},async writePacked(d,g,p){if(!$e(d)||!Ep(g)||!(g.rgba.buffer instanceof ArrayBuffer)||g.rgba.byteOffset!==0||g.rgba.byteLength!==g.rgba.buffer.byteLength)return!1;const f=await l({id:++s,producerAssetUrl:e??"",identity:d,operation:yi.writePacked,capture:g,costs:p},[g.rgba.buffer]);return!i&&(f==null?void 0:f.written)===!0},dispose(){i=!0,o(),bo.delete(u)}};return bo.add(u),u};class Hp{constructor(e,r,i){this.scene=e,this.renderer=r,this.host=i,this.frameCache=new vu(r),this.pages=new Sp(e,r,i.maximumMapSize**2*8*2,i.maximumMapSize,i.frame),this.accumulation=new Lp(r),i.worldBasis&&i.corridorRevision&&i.dateTimeKey&&this.accumulation.presentation.setPersistence({cache:this.persistentCache,identity:(n,s)=>{var u,d,g;const a=this.pages.getPageGeometry(n.id),o=(u=i.dateTimeKey)==null?void 0:u.call(i);if(!a||!o||!n.captureKey)return null;const c=s===1?(d=i.receiverStageError)==null?void 0:d.call(i,n.receiverBounds):void 0,l=(g=i.corridorRevision)==null?void 0:g.call(i,a.casterBounds,c,n.receiverBounds);return l?{source:"shared-scene-corridor-v2",dateTime:o,corridor:n.id,resolution:JSON.stringify([a.width,a.height,n.captureKey]),geometryFingerprint:l,samples:s}:null},worldBasis:i.worldBasis,runIdleRender:i.runIdleRender,requestRepaint:i.requestRepaint})}pages;viewKey="";idleStats=null;accumulation;persistentCache=Up(import.meta.url);accumulationSettled=!1;viewport=new Ot(1,1);lastFrame=null;frameCache;presentedPageIds=new Set;casterRevisionsDirty=!0;casterRevisionCursor=0;hardRetryTimer=null;update(e,r,i,n,s=r.renderCamera){this.viewport.copy(r.viewport);const a=JSON.stringify([e.map(({id:o,bounds:c,receiverObjectId:l})=>[o,c.min,c.max,l]),s.projectionMatrix.elements,s.matrixWorldInverse.elements,r.viewport,i,n]);a!==this.viewKey&&(this.pages.setView(e,s,r.viewport,n,i,this.host.receiverBiasLimit),this.viewKey=a,this.casterRevisionsDirty=!0,this.casterRevisionCursor=0)}updatePresentation(e,r=e.renderCamera){this.viewport.copy(e.viewport),this.pages.updatePresentation(r)}invalidateContent(e){(e==null?void 0:e.length)!==0&&(this.casterRevisionsDirty=!0,this.casterRevisionCursor=0,this.frameCache.invalidate(),e?e.length>0&&this.pages.invalidateCasters(e):this.pages.clearCache())}async prewarm({cells:e,frame:r,lighting:i,targetPixels:n,samples:s,prepare:a,signal:o,yieldToInput:c=_p,planningCamera:l}){if(o.aborted)return null;this.idleStats=null,this.pages.setPrewarmView(e,l??r.renderCamera,r.viewport,n,i,s);try{return this.idleStats=await wp({pages:this.pages.prewarmPages,signal:o,prepare:a,yieldToInput:c,render:(u,d,g)=>{if(d!=null&&d.parent)throw new Error("Idle caster lease must own an unmounted group");const p=this.host.light.visible;this.host.light.visible=!1,d&&this.scene.add(d);try{let f=null;const y=()=>{f=this.pages.prewarmNext(r.renderCamera,u,{signal:g})};return this.host.runIdleRender?this.host.runIdleRender(y):y(),f??{pageId:u,rendered:0,cachedSamples:0,totalSamples:s,complete:!1,budgetLimited:!1,aborted:!0}}finally{d&&this.scene.remove(d),this.host.light.visible=p}}}),this.idleStats}finally{this.pages.clearPrewarmView()}}renderProgressive(e,r){if(this.lastFrame=r,!r.active)return this.pausePending(),null;if(this.pages.accumulationPages.length===0)return this.accumulationSettled=!1,null;const i=this.renderWithHost(e,()=>{const a=this.captureHard(e);if(this.casterRevisionsDirty&&this.host.corridorRevision)return null;const o=this.accumulation.presentation.capture(this.scene,()=>this.accumulation.render(e,this.pages,{...r,visibilityOnly:!0,maxPagesPerFrame:Math.min(r.samples,64),maxFrameCpuMilliseconds:r.maxFrameCpuMilliseconds??2,isPageReady:c=>this.isPageReady(c,!1)}));return o&&this.renderContent(e,null,r.samples),o&&{...o,settled:o.settled&&!a.needsRepaint,needsRepaint:o.needsRepaint||a.needsRepaint}});if(!i)return this.accumulationSettled=!1,null;const n="retryAfterMs"in i?i.retryAfterMs:void 0;n!==void 0&&this.hardRetryTimer===null&&(this.hardRetryTimer=globalThis.setTimeout(()=>{var a,o;this.hardRetryTimer=null,(o=(a=this.host).requestRepaint)==null||o.call(a)},Math.max(1,n)));const s=i.settled&&!this.accumulationSettled;return this.accumulationSettled=i.settled,{...i,settled:s}}render(e,r,i,n=!0){return this.pages.accumulationPages.length===0?!1:(this.renderWithHost(e,()=>{n&&this.captureHard(e),this.renderContent(e,r,i,!n)}),!0)}cancelPending(e=!1){this.accumulation.cancelPending(),e&&this.accumulation.presentation.beginSolarTransition(),this.pausePending()}pausePending(){this.accumulation.pausePending(),this.hardRetryTimer!==null&&(globalThis.clearTimeout(this.hardRetryTimer),this.hardRetryTimer=null),this.accumulationSettled=!1}isPageReady(e,r){var n,s;const i=this.pages.getPageGeometry(e);return i?!this.host.isCorridorReady||this.host.isCorridorReady(i.casterBounds,r?(s=(n=this.host).receiverStageError)==null?void 0:s.call(n,i.receiverBounds):void 0,i.receiverBounds):!1}captureHard(e){var i,n,s,a,o,c;if(this.casterRevisionsDirty&&this.host.corridorRevision){const l=this.pages.accumulationPages,u=performance.now();let d=0;for(;this.casterRevisionCursor<l.length;){if(d>=4||d>0&&performance.now()-u>=4)return(n=(i=this.host).requestRepaint)==null||n.call(i),{published:0,needsRepaint:!0};const g=l[this.casterRevisionCursor++];d+=1;const p=this.pages.getPageGeometry(g.id);if(!p)continue;const f=this.host.corridorRevision(p.casterBounds,(a=(s=this.host).receiverStageError)==null?void 0:a.call(s,p.receiverBounds),p.receiverBounds);this.pages.setCasterRevision(g.id,f)&&this.frameCache.invalidate()}this.casterRevisionsDirty=!1,this.casterRevisionCursor=0}const r=this.accumulation.presentation.capture(this.scene,()=>{var l;return this.accumulation.renderHard(e,this.pages,{...this.lastFrame,width:this.viewport.x,height:this.viewport.y,viewKey:this.viewKey,styleEpoch:((l=this.lastFrame)==null?void 0:l.styleEpoch)??0,samples:1,active:!0,isPageReady:u=>this.isPageReady(u,!0)})});return r.needsRepaint&&((c=(o=this.host).requestRepaint)==null||c.call(o)),r.retryAfterMs!==void 0&&this.hardRetryTimer===null&&(this.hardRetryTimer=globalThis.setTimeout(()=>{var l,u;this.hardRetryTimer=null,(u=(l=this.host).requestRepaint)==null||u.call(l)},r.retryAfterMs)),r}renderContent(e,r,i,n=!1){var u,d,g,p,f;const s=this.accumulation.capturePages;this.accumulation.presentation.beginFrame(s);const a=s.map(y=>{const h=this.accumulation.presentation.canPresent(y);return{page:y,replay:h,ready:h||(!this.host.corridorRevision||!this.casterRevisionsDirty)&&this.isPageReady(y.id,!0)}});let o=!1;const c=()=>{this.presentedPageIds.clear();const y=this.host.light.visible,h=r===null&&a.some(({replay:v})=>v);this.host.light.visible=!0;try{let v=new Set;r===null?v=this.accumulation.presentation.renderNative(this.scene,a.filter(b=>b.replay).map(b=>b.page),()=>this.renderer.render(this.scene,e)):this.renderer.render(this.scene,e);for(const{page:b,replay:E,ready:C}of a){if(!C)continue;if(v.has(b.id)){this.presentedPageIds.add(b.id);continue}if(r===null&&!E){this.presentedPageIds.add(b.id);continue}if(n&&!E){this.presentedPageIds.add(b.id);continue}const R=n||h&&E;this.host.light.visible=R,this.accumulation.presentation.render(this.scene,b,i,()=>R?this.pages.renderPageColor(e,b.id):this.pages.renderPageSample(e,b.id,r??0,r===null?1:i))?this.presentedPageIds.add(b.id):o=!0}}finally{this.host.light.visible=y}};if((u=this.lastFrame)!=null&&u.active&&r===null&&this.accumulation.presentation.supportsCapture){const y=JSON.stringify([this.viewKey,e.projectionMatrix.elements,e.matrixWorldInverse.elements,e.layers.mask,this.lastFrame.styleEpoch,((g=(d=this.host).visualEpoch)==null?void 0:g.call(d))??0,this.accumulation.presentation.revision,a.map(({page:h,replay:v,ready:b})=>[h.id,h.contentKey??h.revision,v,b])]);this.frameCache.render(y,this.lastFrame.width,this.lastFrame.height,c),o&&this.frameCache.invalidate()}else this.frameCache.invalidate(),c();const l=a.filter(({page:y,replay:h})=>this.presentedPageIds.has(y.id)&&(this.accumulation.presentation.hasAtLeast(y,1)||!h&&(r===null||i===1))).map(({page:y})=>y);l.length>0&&((f=(p=this.host).onPresentedPages)==null||f.call(p,l,s))}renderWithHost(e,r){const{renderer:i,host:n}=this,s=n.light.visible,a=n.sky.visible,o=n.overlay.visible,c=i.autoClear;n.light.visible=!1,i.autoClear=!1;try{a&&this.renderHostObject(n.sky,e),n.sky.visible=!1,n.overlay.visible=!1;const l=r();return l!==null&&o&&(n.overlay.visible=!0,this.renderHostObject(n.overlay,e)),l}finally{i.autoClear=c,n.light.visible=s,n.sky.visible=a,n.overlay.visible=o}}renderHostObject(e,r){const i=this.scene.children.filter(n=>n!==e&&n.visible);for(const n of i)n.visible=!1;try{this.renderer.render(this.scene,r)}finally{for(const n of i)n.visible=!0}}get pageLevels(){return this.pages.pageLevels}get stats(){return{...this.pages.stats,framePresentation:this.frameCache.stats,corridorAccumulation:{retained:this.accumulation.presentation.stats,pageSamples:this.accumulation.pageProgress,memoryBytes:this.accumulation.memoryBytes,fallbackReason:this.accumulation.fallbackReason},...this.idleStats?{idlePrewarm:this.idleStats}:{},...this.host.auditCorridors?{corridorAudit:this.host.auditCorridors(this.pages.accumulationPages.flatMap(e=>{const r=this.pages.getPageGeometry(e.id);return r?[{id:e.id,casterBounds:r.casterBounds,receiverBounds:r.receiverBounds}]:[]}))}:{}}}dispose(){this.hardRetryTimer!==null&&globalThis.clearTimeout(this.hardRetryTimer),this.hardRetryTimer=null,this.accumulation.dispose(),this.frameCache.dispose(),this.persistentCache.dispose(),this.pages.dispose()}}function kp(){const t=new WeakSet;return e=>{let r=!1;for(const i of e)if(!(!i.providesTerrain||!i.hasRenderableContent)&&(r=!0,t.has(i)||i.hasRenderableContent()))return t.add(i),!1;return r}}const Xn=(t,e,r)=>JSON.stringify([t.min.toArray(),t.max.toArray(),e,r==null?void 0:r.min.toArray(),r==null?void 0:r.max.toArray()]),zp=(t,e)=>{const r=new Map(t.map(s=>[s.id,s])),i=[],n=s=>i.push(new Ne(new T(...s.minimum),new T(...s.maximum)));for(const s of e){const a=r.get(s.id);a&&s.minimum.every((c,l)=>c===a.minimum[l])&&s.maximum.every((c,l)=>c===a.maximum[l])||(a&&n(a),n(s)),r.delete(s.id)}for(const s of r.values())n(s);return i},Vp=(t,e,r)=>{const i=new Set(r.map(({id:n})=>n));return t.filter(n=>{if(n.loadReason==="shadow")return!1;const s=e.filter(({bounds:a})=>n.minimum[0]<a.max.x&&n.maximum[0]>a.min.x&&n.minimum[2]<a.max.z&&n.maximum[2]>a.min.z);return s.length>0&&s.every(({id:a})=>i.has(a))}).map(({id:n})=>n)},Wp=(t,e,r)=>{if(![t,e,r].every(Number.isFinite)||r<=0)throw new RangeError("Invalid shared-scene Mercator basis");return new re().set(r,0,0,t,0,0,r,e,0,r,0,0,0,0,0,1)},Mo=(t,e,r)=>Vl(e.reduce((i,n)=>{if(n.loadReason==="shadow")return i;const[s,,a]=n.minimum,[o,,c]=n.maximum;return s<t.max.x&&o>t.min.x&&a<t.max.z&&c>t.min.z&&Number.isFinite(n.errorPixels)?Math.max(i,n.errorPixels):i},r),r),Gp=({stageErrorPixels:t,targetErrorPixels:e,groundTexelTargetMeters:r,finalBiasMeters:i,maximumCoarseBiasMeters:n})=>{const s=Math.max(1,Math.min(n/i,t/Math.max(e,.25)));return Math.min(n,i*s,Math.max(i,r*2))},jp=({id:t,casterBounds:e,sunElevationDegrees:r,regions:i,volumes:n})=>{const s=new Set(i.flatMap(u=>u.selectedTileIds)),a=new Map(n.map(u=>[u.id,u])),o=[],c=[];let l=0;for(const u of s){const d=a.get(u);if(!d){o.push(u);continue}d.loadReason==="shadow"&&(l+=1),e.intersectsBox(new Ne(new T(...d.minimum),new T(...d.maximum)))||c.push(u)}return{id:t,ready:i.length>0&&i.every(u=>u.ready),selectedTiles:s.size,offscreenTiles:l,reviewCount:r>=10&&s.size>10,nearHorizon:r<10,exactPrismTested:i.length>0&&i.every(u=>u.receiverPrismTested),visitedNodes:i.reduce((u,d)=>u+d.visitedNodes,0),broadPhaseNodes:i.reduce((u,d)=>u+d.broadPhaseNodes,0),rejectedPrismNodes:i.reduce((u,d)=>u+d.rejectedPrismNodes,0),missingPublishedVolumes:o,outsideEnvelope:c,selectedTileIds:[...s].sort()}},Yp={[Ce.STANDARD]:0,[Ce.HIGH]:1,[Ce.MAX]:1,[Ce.ULTRA]:1,[Ce.EXTREME]:1},$p=128,Kp={[Ce.STANDARD]:0,[Ce.HIGH]:0,[Ce.MAX]:1,[Ce.ULTRA]:2,[Ce.EXTREME]:3},qp=(t,e,r,i)=>{var u,d;const n=t==null?void 0:t.tileManager;if(!t||!n||!Number.isFinite(n.deltaZoom)||!Number.isFinite(n.tileSize)||!n.tileManager)return()=>{};const s={deltaZoom:n.deltaZoom,terrainTileSize:n.tileSize,sourceTileSize:n.tileManager.tileSize,meshSize:t.meshSize,calculateTileZoom:(u=n.tileManager._source)==null?void 0:u.calculateTileZoom},o=1-Yp[r],c=e*2**o;n.deltaZoom=o,n.tileSize=c,n.tileManager.tileSize=c,t.meshSize=$p;const l=Kp[r];if(l>0&&n.tileManager._source){s.calculateTileZoom||i==null||i();const g=n.tileManager._source.calculateTileZoom;g&&(n.tileManager._source.calculateTileZoom=(...p)=>g(...p)+l)}return t._meshCache={},(d=n.freeRtt)==null||d.call(n),()=>{var g;n.deltaZoom=s.deltaZoom,n.tileSize=s.terrainTileSize,n.tileManager.tileSize=s.sourceTileSize,t.meshSize=s.meshSize,n.tileManager._source&&(n.tileManager._source.calculateTileZoom=s.calculateTileZoom),t._meshCache={},(g=n.freeRtt)==null||g.call(n)}},Xp=1024,Qp=2048,Zp=4096,Jp=1e6,eg=2e6,Eo=(t,e=Jo())=>{const r=Math.max(256,Math.floor(t)),i=ec(e);return i==="phone"?{maxShadowMapSize:Math.min(r,Xp),maxAccumulationPixels:Jp}:i==="tablet"?{maxShadowMapSize:Math.min(r,Qp),maxAccumulationPixels:eg}:{maxShadowMapSize:Math.min(r,Zp),maxAccumulationPixels:Number.POSITIVE_INFINITY}},tg=(t,e)=>{if(t===Number.POSITIVE_INFINITY)return t;const r=Es(e.format),i=e.msaaSamples??$o.msaaSamples,n=2*(r.bytesPerPixel+4)*(1+Math.max(0,i))+3*r.accumulationBytesPerPixel;return Math.min(t,Math.floor(256*1024*1024/n))},rg=(t,e=lr,r=2560*1440,i=1)=>Math.floor(Math.max(256**2,Math.min(t**2,dt[e].depthSize**2*(Number.isFinite(r)&&r>0?r/(2560*1440):1)*i**2))),Ro=new WeakMap,ig=t=>{const e=Ro.get(t);if(e)return e;const r=t.getContext(),i=r.getInternalformatParameter(r.RENDERBUFFER,r.DEPTH_COMPONENT24,r.SAMPLES),n=a=>[0,...Array.from(r.getInternalformatParameter(r.RENDERBUFFER,a,r.SAMPLES)).filter(o=>i.includes(o))],s={maxTextureSize:t.capabilities.maxTextureSize,maxRenderbufferSize:r.getParameter(r.MAX_RENDERBUFFER_SIZE),hdrSamples:n(r.RGBA16F),sdrSamples:n(r.RGBA8)};return Ro.set(t,s),s},ng=(t,e)=>{if(t.shadowBufferFormat===ht.HDR_32)return 0;const r=t.shadowMsaaSamples===As?1/0:t.shadowMsaaSamples;return Math.max(0,...e.filter(i=>Number.isFinite(i)&&i<=r))},Et=new WeakMap,rl=t=>{let e=Et.get(t);return e||(e={snapshot:null,listeners:new Set,demandListeners:new Set},Et.set(t,e)),e},sv=t=>{var e;return((e=Et.get(t))==null?void 0:e.snapshot)??null},av=(t,e)=>{const r=rl(t),i=r.listeners.size===0;if(r.listeners.add(e),i)for(const n of r.demandListeners)n(!0);return()=>{if(!(!r.listeners.delete(e)||r.listeners.size>0)){r.snapshot=null;for(const n of r.demandListeners)n(!1);r.demandListeners.size===0&&Et.delete(t)}}},sg=(t,e)=>{const r=rl(t);return r.demandListeners.add(e),r.listeners.size>0&&e(!0),()=>{r.demandListeners.delete(e),r.listeners.size===0&&r.demandListeners.size===0&&Et.delete(t)}},Ao=t=>{var e;return(((e=Et.get(t))==null?void 0:e.listeners.size)??0)>0},ag=(t,e)=>{const r=Et.get(t);if(r!=null&&r.listeners.size){r.snapshot=e;for(const i of r.listeners)i()}},Qn=t=>{const e=Et.get(t);if(e){e.snapshot=null;for(const r of e.listeners)r();e.listeners.size===0&&e.demandListeners.size===0&&Et.delete(t)}},Co=.01,og=500,Zn=1500,Jn=(t=lr)=>({lastFrameMs:null,sampleDurationMs:0,sampleCount:0,recoveryDurationMs:0,updateIntervalMs:dt[t].targetFps?1e3/dt[t].targetFps:0,targetFrameMs:dt[t].targetFps?1e3/dt[t].targetFps:0,depthScale:1,trial:null,adaptationBlocked:!1}),es=(t,e,r,{enabled:i=!0,allowCadenceReduction:n=!0}={})=>{var y,h;if(t.targetFrameMs===0)return t;if(!i)return t.lastFrameMs===null&&t.updateIntervalMs===t.targetFrameMs&&t.depthScale===1&&!t.adaptationBlocked?t:{...t,lastFrameMs:null,sampleDurationMs:0,sampleCount:0,recoveryDurationMs:0,updateIntervalMs:t.targetFrameMs,depthScale:1,trial:null,adaptationBlocked:!1};if(!r||!Number.isFinite(e))return t.lastFrameMs===null?t:{...t,lastFrameMs:null,sampleDurationMs:0,sampleCount:0,recoveryDurationMs:0,depthScale:1,trial:null,adaptationBlocked:!1};const s=t.lastFrameMs===null?0:e-t.lastFrameMs;if(s<=0)return{...t,lastFrameMs:e};const a=t.sampleDurationMs+s,o=t.sampleCount+1;if(a<og)return{...t,lastFrameMs:e,sampleDurationMs:a,sampleCount:o};const c=a/o,l=t.targetFrameMs;if(t.trial&&c>=t.trial.baselineFrameMs*.95||t.adaptationBlocked)return{...t,lastFrameMs:e,sampleDurationMs:0,sampleCount:0,trial:null,adaptationBlocked:!0,updateIntervalMs:((y=t.trial)==null?void 0:y.updateIntervalMs)??t.updateIntervalMs,depthScale:((h=t.trial)==null?void 0:h.depthScale)??t.depthScale};const g=c<l/1.2?t.recoveryDurationMs+a:0,p=n?c>l+Co?Math.min(l*4,t.updateIntervalMs+l):g>=Zn?Math.max(l,t.updateIntervalMs-l):t.updateIntervalMs:l,f=c>l+Co&&(!n||t.updateIntervalMs>=l*4)?Math.max(.5,t.depthScale-.25):g>=Zn?Math.min(1,t.depthScale+.25):t.depthScale;return{...t,lastFrameMs:e,sampleDurationMs:0,sampleCount:0,recoveryDurationMs:g>=Zn?0:g,updateIntervalMs:p,depthScale:f,trial:p>t.updateIntervalMs||f<t.depthScale?{baselineFrameMs:c,updateIntervalMs:t.updateIntervalMs,depthScale:t.depthScale}:null,adaptationBlocked:!1}},cg=900,Si=.01,lg=.25,ug=1e3,Io=4e3,dg=10,il=2500,hg="shadow-simulation-raster-dem",mg=200,nl=.5,fg="shadow-simulation-sky-light",wi=100,Do=1e3,pg=1e3,Po=100,Rr="carma-shadow-map-style-base",gg=(t,e=Ko,r=()=>!0,i=()=>"opaque",n=Ce.MAX)=>{const s=e.id,a=t;if(typeof a.getTerrain!="function"||typeof a.getSource!="function"||typeof a.setTerrain!="function")return Object.assign(()=>{},{refresh:()=>{}});const o=a.getTerrain(),c=new Map,l=new Map;let u=!1,d=!1,g=!1,p=null,f=!1,y,h=null,v=()=>{},b=null;const E=()=>{p&&(f?delete p.getMeshFrameDelta:p.getMeshFrameDelta=y,p=null,y=void 0,f=!1)},C=()=>{const N=a.terrain;!N||N===p||(E(),typeof N.getMeshFrameDelta=="function"&&(f=!Object.prototype.hasOwnProperty.call(N,"getMeshFrameDelta"),y=N.getMeshFrameDelta,N.getMeshFrameDelta=()=>0,p=N))},R=()=>{var $;const N=a.terrain;!N||N===h||(v(),h=N,v=qp(N,e.tileSize,n,()=>{var H;(H=t.setSourceTileLodParams)==null||H.call(t,9.314,3,e.id)}),($=t.triggerRepaint)==null||$.call(t))},I=N=>`${N.type}:${String(N.source)}:${String(N["source-layer"])}`,M=()=>{var H;const $=t.getStyle().layers??[];for(const X of $){if(!ql(X))continue;const P=I(X);let ee=l.get(X.id);const ne=t.getLayoutProperty(X.id,"visibility");!ee||ee.signature!==P?(ee={signature:P,value:ne},l.set(X.id,ee)):ne!=="none"&&(ee.value=ne),ne!=="none"&&t.setLayoutProperty(X.id,"visibility","none")}if(r()){t.getLayer(Rr)||(t.addLayer({id:Rr,type:"background",paint:{"background-color":Rn.baseColor,"background-opacity":Rn.opacity}},(H=$[0])==null?void 0:H.id),g=!0);for(const X of $){if(X.id===Rr||X.type==="custom")continue;const P=Rn.opaqueDrapeProperties.get(X.type);if(!P)continue;const ee=I(X);let ne=c.get(X.id);const Me=t.getPaintProperty(X.id,P);!ne||ne.signature!==ee?(ne={signature:ee,property:P,value:Me},c.set(X.id,ne)):Me!==1&&(ne.value=Me),Me!==1&&t.setPaintProperty(X.id,P,1)}}},U=N=>{var $;for(const[H,X]of N)try{const P=($=t.getStyle().layers)==null?void 0:$.find(({id:ee})=>ee===H);P&&I(P)===X.signature&&t.getLayoutProperty(H,"visibility")==="none"&&t.setLayoutProperty(H,"visibility",X.value===void 0?null:X.value)}catch{}N.clear()},O=()=>{var N;for(const[$,H]of c)try{const X=(N=t.getStyle().layers)==null?void 0:N.find(({id:P})=>P===$);X&&I(X)===H.signature&&t.getPaintProperty($,H.property)===1&&t.setPaintProperty($,H.property,H.value===void 0?null:H.value)}catch{}if(c.clear(),g){g=!1;try{t.getLayer(Rr)&&t.removeLayer(Rr)}catch{}}},L=()=>{if(!(u||d)){d=!0;try{if(!a.getSource(s)&&t.isStyleLoaded()&&t.addSource(s,{type:"raster-dem",tiles:[e.url],tileSize:e.tileSize,minzoom:e.minzoom,maxzoom:e.maxzoom,encoding:e.encoding,bounds:[...e.bounds]}),i()==="labels"?(O(),U(l)):M(),a.getSource(s)){const N=a.getTerrain();((N==null?void 0:N.source)!==s||(N.exaggeration??1)!==1)&&a.setTerrain({source:s,exaggeration:1}),R(),C()}b=null}catch(N){const $=N instanceof Error?N.message:String(N);$!==b&&(b=$,console.error("[shadow-simulation] MapLibre terrain setup failed",N))}finally{d=!1}}},j=()=>{d||L()};return t.on(ye.STYLE_DATA,L),t.on(ye.TERRAIN,j),L(),Object.assign(()=>{if(!u){u=!0,t.off(ye.STYLE_DATA,L),t.off(ye.TERRAIN,j),E(),v(),h=null,O(),U(l);try{o&&a.getSource(o.source)!==void 0?a.setTerrain(o):a.setTerrain(null)}catch{}}},{refresh:()=>{!u&&!d&&L()}})},sl=(t,e=!1)=>{if(t.userData[Ei.OVERLAY])return;t.castShadow=t.userData.disableShadowCasting!==!0;const r=Array.isArray(t.material)?t.material:[t.material];if(t.receiveShadow=r.some(i=>i.visible&&i.colorWrite),!t.userData.isShadowTerrainSurface)for(const i of r)i.shadowSide??(i.shadowSide=jo),gp(i,e)},Dr=(t,e=!1)=>{t.traverseVisible(r=>{const i=r;!i.isMesh&&!i.isInstancedMesh||sl(i,e)})},vg=t=>t.visible&&t.opacity>0,yg=(t,e)=>{let r=t;for(;r&&r!==e;){if(!r.visible)return!1;r=r.parent}return(Array.isArray(t.material)?t.material:[t.material]).some(vg)},Oo=t=>{t.traverse(e=>{const r=e;if(!r.isMesh&&!r.isInstancedMesh)return;const i=Array.isArray(r.material)?r.material:[r.material];for(const n of i)n.dispose()})},al=(t,e,r)=>{t.updateMatrixWorld(!0),r==null||r.updateMatrixWorld(!0);const i=r?new Wr().setFromProjectionMatrix(new re().multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),r.coordinateSystem,r.reversedDepth):null;let n=e,s=e;const a=new Ne;return t.traverseVisible(o=>{var l,u;const c=o;c.userData[Ei.OVERLAY]||!c.isMesh&&!c.isInstancedMesh||!((u=(l=c.geometry)==null?void 0:l.getAttribute("position"))!=null&&u.count)||(c.geometry.boundingBox||c.geometry.computeBoundingBox(),c.geometry.boundingBox&&(a.copy(c.geometry.boundingBox).applyMatrix4(c.matrixWorld),!(i&&!i.intersectsBox(a))&&(n=Math.min(n,a.min.y),s=Math.max(s,a.max.y))))}),[n,s]},Sg=(t,e,r,i)=>{var o;const n=e.filter(c=>c.providesTerrain).flatMap(c=>{var u;const l=(u=c.getViewElevationRange)==null?void 0:u.call(c,r);return l?[l]:[]});if(n.length>0)return[Math.min(...n.map(c=>c[0])),Math.max(...n.map(c=>c[1]))];let[s,a]=al(t,i,r);for(const c of e){const l=(o=c.getViewElevationRange)==null?void 0:o.call(c,r);l&&(s=Math.min(s,l[0]),a=Math.max(a,l[1]))}return[s,a]},wg=[[-1,-1],[-1,1],[1,-1],[1,1]],_g=[[0,1],[1,3],[3,2],[2,0],[4,5],[5,7],[7,6],[6,4],[0,4],[1,5],[2,6],[3,7]],xg=(t,e,r,i)=>{t.updateMatrixWorld(!0);const n=Math.min(e,r),s=Math.max(e,r),a=[-1,1].flatMap(c=>wg.map(([l,u])=>new T(l,u,c).unproject(t))),o=a.filter(c=>c.y>=n&&c.y<=s).map(c=>c.clone());for(const[c,l]of _g){const u=a[c],d=a[l],g=d.y-u.y;if(!(Math.abs(g)<=Number.EPSILON))for(const p of[n,s]){const f=(p-u.y)/g;f<0||f>1||o.push(u.clone().lerp(d,f))}}for(const c of o){const l=c.clone().sub(i),u=Math.hypot(l.x,l.z);if(u<=Io)continue;const d=Io/u;l.x*=d,l.z*=d,c.copy(i).add(l)}return o},Tg=(t,e)=>{const r=e.uniformColor!==null&&Ve(e.uniformColorMix??1,0,1)>=1;t.traverse(i=>{const n=i;if(!n.userData.isBuilding)return;const s=Array.isArray(n.material)?n.material:[n.material];for(const a of s){e.fullOpacity&&(a.opacity=1,a.transparent=!1,a.depthWrite=!0);const o=a;r&&e.uniformColor&&o.color&&(o.color.set(e.uniformColor),o.vertexColors=!1),a.needsUpdate=!0}})},bg=(t,e,r)=>{var d;const i=(d=e._originMerc)==null?void 0:d.toLngLat();if(!i)return null;const n=new Rs;n.name=`shadow-simulation-copy-${e.id}`;const s=new Map;let a=r,o=!1;const c=()=>{for(const[g,p]of s)g.visible=p;s.clear()},l=()=>{if(o)return;c(),Oo(n),n.clear(),e.scene.updateMatrixWorld(!0);const g=[];e.scene.traverse(p=>{var y,h;const f=p;!f.isMesh&&!f.isInstancedMesh||(h=(y=f.geometry)==null?void 0:y.getAttribute("position"))!=null&&h.count&&yg(f,e.scene)&&g.push(f)});for(const p of g){const f=p.clone(!1);f.name=`${p.name||"mesh"}-shadow-simulation-copy`,f.visible=!0,f.matrixAutoUpdate=!1,f.matrix.copy(p.matrixWorld),f.material=Array.isArray(p.material)?p.material.map(y=>y.clone()):p.material.clone(),sl(f),s.set(p,p.visible),p.visible=!1,n.add(f)}n.visible=n.children.length>0,Tg(n,a)},u={id:`shadow-simulation-generic-${e.id}`,originLngLat:[i.lng,i.lat],root:n,update:()=>{},dispose:()=>{o||(o=!0,c(),Oo(n),n.clear())}};return l(),n.visible?(t.addRuntime(u),{runtime:u,sync:l,updateBuildingAppearance(g){a=g,l()}}):(u.dispose(),null)},Mg=t=>{const e=new Ne().setFromObject(t.scene);e.isEmpty()?t.center.set(0,0,0):e.getCenter(t.center)},Eg=(t,e,r,i)=>{const n=new Zc(e),a=n.lights[0].target,o=new Rs;o.visible=!1,o.userData[Ei.OVERLAY]=!0;const c=new Go(void 0,0);c.name=fg;const l=Xf(i);l.mesh.userData[Ei.OVERLAY]=!0;const u=new Map;t.traverse(g=>{const p=g;p.isAmbientLight&&u.set(p,p.intensity)});const d={scene:t,frame:e,controller:n,skyLight:c,atmosphericSky:l,ambientLightIntensities:u,lightTarget:a,sunVector:null,sunVectorRoot:o,center:new T,shadowCameraOffsetMeters:Math.max(il,r*1.5),shadowAreaMeters:r,sunVectorLengthMeters:r*nl,sunVectorVisible:!1,shadowQuality:lr,shadowIntensity:1,directionToSun:new T(0,1,0),sunColor:new We(16773848),sunIntensity:Qr,receiverWorldPoints:[],minimumElevationMeters:0,maximumElevationMeters:0,dirty:!0};return Dr(t),Mg(d),t.add(c),t.add(l.mesh),d},Rg=(t,e)=>{t.scene.traverse(i=>{const n=i;n.isAmbientLight&&!t.ambientLightIntensities.has(n)&&t.ambientLightIntensities.set(n,n.intensity)});const r=e.skyIrradianceCoefficients;if((r==null?void 0:r.length)===t.skyLight.sh.coefficients.length){r.forEach((i,n)=>{t.skyLight.sh.coefficients[n].copy(i)}),t.skyLight.intensity=Qr;for(const i of t.ambientLightIntensities.keys())i.intensity=0;return}t.skyLight.sh.zero(),t.skyLight.intensity=0;for(const[i,n]of t.ambientLightIntensities)i.intensity=n},ts=new re,No=(t,e,r=16773848,i,n=!0)=>{var a;const s=e.clone().normalize();t.directionToSun.copy(s),t.sunColor.set(r),t.lightTarget.position.copy(t.center);for(const o of t.controller.lights)o.target.position.copy(t.center),o.position.copy(s).multiplyScalar(t.shadowCameraOffsetMeters).add(t.center),o.color.copy(t.sunColor);(a=t.sunVector)==null||a.update(t.center,s,t.sunVectorLengthMeters),t.sunVectorRoot.visible=t.sunVectorVisible&&!!t.sunVector,t.sunIntensity=i??Qr;for(const o of t.controller.lights)o.intensity=t.sunIntensity;t.lightTarget.updateMatrixWorld(!0);for(const o of t.controller.lights)o.updateMatrixWorld(!0);n&&(t.controller.invalidate(),t.dirty=!0)},Ag=t=>{var e;for(const[r,i]of t.ambientLightIntensities)r.intensity=i;t.scene.remove(t.skyLight),t.scene.remove(t.atmosphericSky.mesh),t.scene.remove(t.sunVectorRoot),(e=t.sunVector)==null||e.dispose(),t.atmosphericSky.dispose(),t.controller.dispose()},Cg=(t,e={})=>{var ha,ma,fa,pa,ga,va,ya,Sa;const{shadowAreaMeters:r,terrain:i,mapLibreTerrain:n,terrainQuality:s=Ce.MAX}=e,a=zi(),o=a?(ha=t.getPixelRatio)==null?void 0:ha.call(t):void 0,c=o!==void 0&&o>Cn;c&&t.setPixelRatio(Cn);let l=i;const u=r??cg,d=t.getLight();let g=!0;const p=()=>{const m=_e(t).filter(S=>S.providesTerrain===!0);return m.length>0&&m.every(S=>S.mapStyleProjectionBlend==="overlay")?"labels":"opaque"},f=gg(t,n??Ko,()=>g,p,a?Ce.STANDARD:s),y=()=>{P.setMeshLabelStyle(p()==="labels")};let h=null,v={fullOpacity:!0,uniformColor:null,uniformColorMix:0,textureSaturation:1,textureColorCorrection:!0},b=1,E=null;const C=()=>{var m,S;return E??((S=(m=_e(t).find(w=>w.providesTerrain===!0))==null?void 0:m.getErrorTarget)==null?void 0:S.call(m))??Xl};let R=a?xi:void 0;const I=new WeakMap;let M=null,U={useTransmittanceLut:!0,useIrradianceLut:!0},O=!1,L=!1,j=Number.NEGATIVE_INFINITY,Z=null,N=null,$=null,H=new We(((ma=l==null?void 0:l.material)==null?void 0:ma.color)??Cs);const X=()=>{var m,S,w,x;if(g){$==null||$(),$=null,(S=(m=P.layer).setMapStyleProjectionVisible)==null||S.call(m,!0);return}(x=(w=P.layer).setMapStyleProjectionVisible)==null||x.call(w,!1),$??($=Yl(t))},P=Wl(t),ee=(m,S)=>{var w,x;return{observer:{longitude:m[0],latitude:m[1],altitudeMeters:0},scenePosition:((x=(w=P.layer).projectLngLatToScene)==null?void 0:x.call(w,[m[0],m[1]],wi))??new T(0,wi,0),sceneFromLocal:S}},ne=((pa=(fa=P.layer).getLocalFrame)==null?void 0:pa.call(fa))??null;let Me=(ne==null?void 0:ne.revision)??0,Se=ne?ee(ne.lngLat,ne.sceneFromLocalRotation):ee([t.getCenter().lng,t.getCenter().lat]);const B=()=>{var m;return((m=we==null?void 0:we.localFrame)==null?void 0:m.currentToReference)??(ne==null?void 0:ne.currentToReference)??ts},z=new ba,Ie=new Fi,ve=m=>{const S=m.renderCamera,{localFrame:w}=m;if(!w||w.currentToReference.equals(ts))return S;const x=S instanceof ba?z.copy(S,!1):Ie.copy(S,!1);return x.matrixAutoUpdate=!1,x.matrixWorldAutoUpdate=!1,x.matrixWorld.multiplyMatrices(w.currentToReference,S.matrixWorld),x.matrixWorld.decompose(x.position,x.quaternion,x.scale),x.matrix.copy(x.matrixWorld),x.matrixWorldInverse.multiplyMatrices(S.matrixWorldInverse,w.referenceToCurrent),x},Be=(m,S)=>{if(m!=null&&m.mountsOnLocalFrame||S.length===0)return S;const w=B();if(w.equals(ts))return S;const x=new Ne;return S.map(V=>(x.min.set(...V.minimum),x.max.set(...V.maximum),x.applyMatrix4(w),{...V,minimum:[x.min.x,x.min.y,x.min.z],maximum:[x.max.x,x.max.y,x.max.z]}))},Ge=new jf;let Ze=()=>{},be=m=>Ze(m),Wt=null,je=0;const Gt=m=>{if(!l)return null;const S=t.getCenter(),{errorTargetPixels:w,motionErrorTargetPixels:x,shadowLevelOffset:V,minimumLevel:F,maximumLevel:k,maxSelectionTiles:Y,requestConcurrency:ce,maxCacheBytes:ue,maxCachedMeshes:fe,maxCachedMeshBytes:te,meshSegments:pe,maximumMeshSegments:G,noDataHeightMeters:At,heightRangeMeters:Jt,material:oi,...xt}=bu(l,a);return $l(`${hg}-${++je}`,xt,m??[S.lng,S.lat],{errorTargetPixels:w??Pr,motionErrorTargetPixels:x,shadowLevelOffset:V,minimumLevel:F,maximumLevel:k,maxSelectionTiles:Y,requestConcurrency:ce,maxCacheBytes:ue,maxCachedMeshes:fe,maxCachedMeshBytes:te,meshSegments:pe??xt.tileSize,maximumMeshSegments:G,noDataHeightMeters:At,heightRangeMeters:Jt,material:oi,receivesMapStyleTexture:!0,onContentChanged:Re=>be(Re),onError:Re=>{const Lt=Re instanceof Error?Re.message:String(Re);Lt!==Wt&&(Wt=Lt,console.error("[shadow-simulation] Raster DEM terrain runtime failed",Re))}})},Ee=()=>_e(t).some(m=>m.providesTerrain===!0),$s=()=>_e(t).every(m=>{var S;return!m.providesTerrain||(((S=m.isMainViewReady)==null?void 0:S.call(m))??!0)});let hr=_e(t).filter(m=>m.providesTerrain),K=Ee()?null:Gt(),jt=K===null;K&&P.layer.addRuntime(K);const ol=((va=(ga=P.layer).getLocalFrameGroup)==null?void 0:va.call(ga))??P.layer.getScene(),_=Eg(P.layer.getScene(),ol,u,H),cl=new T;let Zr=0,Jr=0;const Ue=xp({getRequest:()=>{var w;if(O||!l||!K||!jt||_r(t)||De||L||et!==0||!st||!qt||!we)return null;const m=(w=K.getIdlePrefetchAvailability)==null?void 0:w.call(K);if(!(m!=null&&m.ready))return null;const S=K;return{key:JSON.stringify([je,Zr,Jr,we.renderCamera.projectionMatrix.elements,we.renderCamera.matrixWorldInverse.elements,we.viewport.x,we.viewport.y]),run:async x=>{var F;if(await S.prefetchIdleTerrain(x),x.aborted||!Oe()||!Q||!we||!P.layer.runIdleRender||gt.size>0||vt().some(k=>k!==S&&k!==Zt)||Rt.some(({id:k})=>!/^\d+:[-\d]+:[-\d]+$/.test(k)))return;const V=((F=S.getIdleShadowRegions)==null?void 0:F.call(S))??[];V.length===0||!S.prepareIdleShadowRegion||(await Q.prewarm({cells:cd(Rt),frame:we,planningCamera:ve(we),lighting:{directionToSun:_.directionToSun,color:_.sunColor,intensity:_.sunIntensity,shadowIntensity:_.shadowIntensity},targetPixels:dt[_.shadowQuality].shadowTexelErrorPixels,samples:wr(),signal:x,prepare:async(k,Y)=>{const ce=ld(k.receiverBounds,V);return ce===null?{covered:!1,group:null,isCurrent:()=>!1,dispose:()=>{}}:S.prepareIdleShadowRegion({receiverBounds:k.receiverBounds,casterBounds:k.casterBounds,terrainLevel:ce},Y)}}),x.aborted||Qt())}}}});let pt=null,ln="";const ei=(m,S,w)=>{const x=`${m}:${S}`;x!==ln&&(ln=x,console.error(`[SHADOW] Atmospheric update rejected; retaining last valid frame (${m}: ${S})`,{phase:m,reason:S,...w}))},ll=()=>{ln=""},He=()=>{Ue.cancel(),Zr+=1,Jr+=1},Ks=m=>{Z=null,j=performance.now();const S=`#${m.color.getHexString()}`;if(L||P.setLocationLabelColor(S),!t.isStyleLoaded())return;const w=[1.5,m.azimuthDegrees,90-m.elevationDegrees],x=Ve(m.relativeIntensity,0,1),V=t.getLight(),F=V.position;V.anchor==="map"&&Array.isArray(F)&&F.length===w.length&&F.every((k,Y)=>k===w[Y])&&V.color===S&&V.intensity===x||t.setLight({anchor:"map",position:w,color:S,intensity:x})},ti=()=>{N!==null&&(globalThis.clearTimeout(N),N=null);const m=Z;m&&Ks(m)},qs=m=>{if(Z=m,!L&&!De){ti();return}const S=performance.now()-j;if(S>=Do){ti();return}N===null&&(N=globalThis.setTimeout(()=>{N=null;const w=Z;w&&Ks(w)},Do-S))},Yt=m=>{const S={longitude:Se.observer.longitude,latitude:Se.observer.latitude,altitudeMeters:wi},w=Hf(m.instant,S,Se);if(w)return ei("sunlight input",w,{observer:S,skyReference:Se}),M;Ge.ensure(()=>{if(O||!h)return;He();const F=Yt(h);F&&qs(F),t.triggerRepaint()},U),Ge.ensureSky(()=>{O||!h||(He(),Yt(h),t.triggerRepaint())});let x;try{x=Ge.evaluate(m.instant,S,U,Se)}catch(F){return ei("sunlight generation","generator threw",{observer:S,error:F}),M}const V=kf(x);return V?(ei("sunlight output",V,{observer:S,sample:x}),M):(ll(),M=x,_.atmosphericSky.update(x.skyFrame,Ge.skyTextures),Rg(_,x),No(_,x.directionToSun.clone().transformDirection(B()),x.radiance,Qr),x)};Ze=m=>{O||(Ue.cancel(),Q==null||Q.invalidateContent(m),_.controller.invalidate(),_.dirty=!0)};const gt=new Map,vt=()=>{const m=_e(t);return K&&!m.includes(K)?[K,...m]:m};let $t=null,yt=null,Ye=null,St=null,Xs=[];const Qs=()=>vt().flatMap(m=>{var S;return Be(m,((S=m.getActiveTileVolumes)==null?void 0:S.call(m))??[])}),mr=()=>$t??Qs(),Zs=(m,S=Si*4)=>{if(!Ee())return;const w=mr(),x=C(),V=m?Mo(m,w,x):Math.max(x,...w.filter(({loadReason:F})=>F!=="shadow").map(({errorPixels:F})=>F).filter(F=>Number.isFinite(F)));return Gp({stageErrorPixels:V,targetErrorPixels:x,groundTexelTargetMeters:S,finalBiasMeters:Si,maximumCoarseBiasMeters:lg})},Js=m=>{const S=$t,w=yt,x=Ye,V=St;if($t=S??Qs(),yt=w??new Map,Ye=x??new Map,St=V??new Map,!S){const F=zp(Xs,$t);F.length>0&&(Q==null||Q.invalidateContent(F),gr.length=0),Xs=$t}try{return m()}finally{$t=S,yt=w,Ye=x,St=V}};let De=!1,Nt=null,fr=null,un=Number.NEGATIVE_INFINITY,dn=!1;const ea=new WeakMap,ul=m=>{var x,V,F;if(!m)return"none";const S=t.getCenter(),w=t.getCanvas();return[Math.round(S.lng*1e7),Math.round(S.lat*1e7),Math.round((((x=t.getZoom)==null?void 0:x.call(t))??0)*1e4),Math.round((((V=t.getBearing)==null?void 0:V.call(t))??0)*1e3),Math.round((((F=t.getPitch)==null?void 0:F.call(t))??0)*1e3),`${w.clientWidth||w.width}x${w.clientHeight||w.height}`,(h==null?void 0:h.azimuthDegrees)??"no-sun",(h==null?void 0:h.elevationDegrees)??"no-sun",_.shadowQuality].join(";")},pr=m=>{var Y,ce,ue,fe,te,pe;if(L){const G=performance.now();if(G-un<pg){dn=!0;return}un=G}fr=m,dn=!1;const S=ul(m),w=we==null?void 0:we.renderCamera,x=m&&w?new Wr().setFromProjectionMatrix(new re().multiplyMatrices(w.projectionMatrix,w.matrixWorldInverse),w.coordinateSystem,w.reversedDepth):null,V=new Ne,F=x?Be(K,((Y=K==null?void 0:K.getActiveTileVolumes)==null?void 0:Y.call(K))??[]).filter(G=>(V.min.fromArray(G.minimum),V.max.fromArray(G.maximum),x.intersectsBox(V))):void 0,k=[..._e(t),...K?[K]:[]];for(const G of new Set(k)){if((ce=G.setShadowStagePresentationGate)==null||ce.call(G,!1),!G.providesTerrain){G===K?(ue=G.setErrorTarget)==null||ue.call(G,(l==null?void 0:l.errorTargetPixels)??Pr):(fe=G.setErrorTargetOverride)==null||fe.call(G,E),(te=G.setShadowView)==null||te.call(G,m?{...m,terrainReceivers:F}:null);continue}ea.get(G)!==S&&(ea.set(G,S),(pe=G.setShadowView)==null||pe.call(G,m))}},hn=m=>{var S;Nt=m;for(const w of new Set([..._e(t),...K?[K]:[]]))(S=w.setLiveShadowView)==null||S.call(w,m);De||pr(m)};let mn=Number.NEGATIVE_INFINITY,Je=null,wt=null,fn=null,pn="",st=!a;a&&(_.shadowQuality=qe.FPS_120);let gn={},Pe=An(In(gn,a),_.shadowQuality),at=null;const ri=()=>({format:Pe.shadowBufferFormat,msaaSamples:Pe.shadowBufferLayout===kr.TILED?0:ng(Pe,(Pe.shadowBufferFormat===ht.SDR_8?at==null?void 0:at.sdrSamples:at==null?void 0:at.hdrSamples)??[0,2,4])});let Kt=ri(),et=0,vn=!1,ii=!1;const gr=[];let tt=!0,yn=[],ta="",_t=Jn(_.shadowQuality),ni=Number.POSITIVE_INFINITY,qt=!0,Xt=Eo(4096);_.controller.setMaxShadowMapSize(Xt.maxShadowMapSize);let we=null,Q=null,Sn=null,Rt=[];const Oe=()=>Pe.shadowBufferLayout===kr.TILED,vr=()=>{Q==null||Q.dispose(),Q=null,Sn=null,Rt=[]},Qt=()=>{if(O||!wt||!Ao(t))return;const m=performance.now()-mn;if(m<Po){Je??(Je=globalThis.setTimeout(()=>{Je=null,Qt()},Po-m));return}Je!==null&&(globalThis.clearTimeout(Je),Je=null);const S=Pe.shadowBufferLayout,w=Pe.shadowSunDiscSamples,x=Oe()?(Q==null?void 0:Q.stats)??null:null,V=JSON.stringify([S,w,x]);fn===wt&&pn===V||(mn=performance.now(),fn=wt,pn=V,ag(t,{...wt,bufferLayout:S,sunDiscSamples:w,tiledStats:x}))};_.controller.setSoftSun(st);const yr=(m,S)=>Math.round(m/S)*S,dl=m=>{var w,x,V;const S=t.getCenter();return[yr(S.lng,1e-7),yr(S.lat,1e-7),yr(((w=t.getZoom)==null?void 0:w.call(t))??0,1e-4),yr(((x=t.getBearing)==null?void 0:x.call(t))??0,.001),yr(((V=t.getPitch)==null?void 0:V.call(t))??0,.001),`${m.viewport.x}x${m.viewport.y}`].join(";")},Sr=(m=!0,S=!0,w)=>{var ce,ue,fe,te;const x=t.getCenter(),V=(K==null?void 0:K.getElevation(x.lng,x.lat))??0,F=(ue=(ce=P.layer).projectLngLatToScene)==null?void 0:ue.call(ce,[x.lng,x.lat],V);if(!F){h&&Yt(h),S&&t.triggerRepaint();return}_.center.copy(F).applyMatrix4(B()),pt??(pt=al(_.scene,F.y));const[k,Y]=pt;if(w){const pe=xg(ve(w),k,Y,_.center);if(pe.length>0){const G=new Ne().setFromPoints(pe).getSize(new T),At=Math.max(...pe.map(Jt=>Jt.distanceTo(_.center)));_.sunVectorLengthMeters=Math.min(G.x,G.z)*nl,_.shadowAreaMeters=Math.max(r??0,dg,At*2),yn=pe}}else tt=!0;if(_.shadowCameraOffsetMeters=Math.max(il,_.shadowAreaMeters*1.5),_.receiverWorldPoints=yn,_.minimumElevationMeters=k,_.maximumElevationMeters=Y,_.dirty=!0,h&&(m||!M))Yt(h);else{_.lightTarget.position.copy(_.center);for(const pe of _.controller.lights)pe.target.position.copy(_.center),pe.target.updateMatrixWorld(!0);(fe=_.sunVector)==null||fe.root.position.copy(_.center),(te=_.sunVector)==null||te.root.updateMatrixWorld(!0)}S&&t.triggerRepaint()},Zt={id:"shadow-simulation-controller",originLngLat:[t.getCenter().lng,t.getCenter().lat],root:new Rs,updatePriority:mg,update(m){var Jt,oi;we=m;const{localFrame:S}=m;S&&S.revision!==Me&&(Me=S.revision,Se=ee(S.lngLat,S.sceneFromLocalRotation),M&&(M=Wf(M,Se),_.atmosphericSky.update(M.skyFrame,Ge.skyTextures)));const w=(oi=(Jt=P.layer).getRenderer)==null?void 0:oi.call(Jt);w&&!at&&(at=ig(w),Kt=ri(),Xt=Eo(Math.min(at.maxTextureSize,at.maxRenderbufferSize)),_.controller.setMaxShadowMapSize(Xt.maxShadowMapSize)),ni=tg(Xt.maxAccumulationPixels,Kt),qt=m.viewport.x*m.viewport.y<=ni,_t=es(_t,performance.now(),De,{enabled:Pe.shadowAdaptiveQuality,allowCadenceReduction:!Oe()});const x=Math.max(0,m.lodCamera.position.y-m.lookTarget.y),V=wi+x,F=Se.scenePosition.y+x;![...m.lodCamera.matrixWorld.elements,...m.lodCamera.projectionMatrix.elements].every(Number.isFinite)||!Number.isFinite(V)||!Number.isFinite(F)?ei("render camera","local Three.js camera matrix or altitude is invalid",{altitudeMeters:V,cameraHeightAboveTargetMeters:x,matrixWorld:m.lodCamera.matrixWorld.elements,projectionMatrix:m.lodCamera.projectionMatrix.elements}):(_.atmosphericSky.updateViewCamera(m.lodCamera),_.atmosphericSky.updateObserverScenePosition(cl.set(Se.scenePosition.x,F,Se.scenePosition.z)));const Y=dl(m);if((tt||Y!==ta)&&(performance.now(),ta=Y,pt=De?pt??[_.minimumElevationMeters,_.maximumElevationMeters]:Sg(_.scene,_e(t),m.renderCamera,_.center.y),Sr(!1,!1,m),tt=!1),!_.dirty)return;_.sunVectorVisible&&_.sunVector&&_.sunVector.root.cone.position.y!==_.sunVectorLengthMeters&&No(_,_.directionToSun,_.sunColor,_.sunIntensity),Zr+=1;const ce=mr(),ue=ce.flatMap(({minimum:xt,maximum:Re})=>sc(ve(m),new Ne(new T(...xt),new T(...Re))));if(_.receiverWorldPoints=ue.length>0?ue:yn,_.receiverWorldPoints.length===0||!h){hn(null),wt=null,Qn(t);return}if(Oe()){Rt=od(ce.filter(({loadReason:Re})=>Re!=="shadow").map(({id:Re,minimum:Lt,maximum:Tn,receiverObjectId:bn})=>({id:Re,receiverObjectId:bn,bounds:new Ne(new T(...Lt),new T(...Tn))})));const xt=id(Rt,ve(m));xt.length>0&&(_.receiverWorldPoints=[...xt])}const fe=_.controller.update({maxReceiverBiasMeters:Zs(),receiverWorldPoints:_.receiverWorldPoints,receiverAnchorWorldPosition:_.center,minimumElevationMeters:_.minimumElevationMeters,maximumElevationMeters:_.maximumElevationMeters,directionToSun:_.directionToSun,color:_.sunColor,intensity:_.sunIntensity,shadowIntensity:_.shadowIntensity,quality:_.shadowQuality,mapTexelBudget:rg(Xt.maxShadowMapSize,_.shadowQuality,m.viewport.x*m.viewport.y,De?_t.depthScale:1),groundTexelFit:Pe.shadowGroundTexelFit,stabilizeMapSize:De});if(_.dirty=!1,!fe){hn(null),wt=null,Qn(t);return}const te=fe.camera,pe=_.controller.lights[0].shadow.camera,G=M==null?void 0:M.skyFrame.directionToSunECEF;hn({camera:pe,directionToSunECEF:G?[G.x,G.y,G.z]:void 0,casterAngularRadiusRadians:st?Lr:0,shadowMapSize:{width:te.shadowMapWidth,height:te.shadowMapHeight}});const At=Ao(t);if(te&&At){m.lodCamera.updateMatrixWorld(!0),m.lodCamera.updateProjectionMatrix();const xt=vt().flatMap(Re=>{var Lt;return(((Lt=Re.getActiveTileVolumes)==null?void 0:Lt.call(Re))??[]).map(({id:Tn,loadReason:bn,minimum:yl,maximum:Sl})=>({id:Tn,loadReason:bn,minimum:yl,maximum:Sl}))});wt={bufferLayout:Pe.shadowBufferLayout,sunDiscSamples:Pe.shadowSunDiscSamples,tiledStats:null,cameraRangeMeters:pe.position.distanceTo(_.controller.lights[0].target.position),leftMeters:te.leftMeters,rightMeters:te.rightMeters,bottomMeters:te.bottomMeters,topMeters:te.topMeters,nearMeters:te.nearMeters,farMeters:te.farMeters,projectionMatrixElements:te.projectionMatrixElements,shadowMapWidth:te.shadowMapWidth,shadowMapHeight:te.shadowMapHeight,minimumElevationMeters:_.minimumElevationMeters,maximumElevationMeters:_.maximumElevationMeters,sceneAnchorPositionElements:_.center.toArray(),mainCamera:{viewMatrixElements:[...m.lodCamera.matrixWorldInverse.elements],projectionMatrixElements:[...m.lodCamera.projectionMatrix.elements],nearMeters:m.lodCamera.near,farMeters:m.lodCamera.far,viewportWidth:m.viewport.x,viewportHeight:m.viewport.y},tileVolumes:xt,shadow:fe,atmosphericSunlight:M?{azimuthDegrees:M.azimuthDegrees,elevationDegrees:M.elevationDegrees,relativeIntensity:M.relativeIntensity,color:`#${M.color.getHexString()}`,transmittanceReady:M.atmosphericTransmittanceReady,irradianceReady:M.atmosphericIrradianceReady}:null},Qt()}},dispose:()=>{}};P.layer.addRuntime(Zt);const wr=()=>Pe.shadowSunDiscSamples,ra=()=>{var w,x;if(!Oe()||!we||_.directionToSun.y<=0)return null;const m=(x=(w=P.layer).getRenderer)==null?void 0:x.call(w);if(!m)return null;let S=!1;if(!Q||Sn!==m){const V=Rt;vr(),Rt=V,Sn=m,Q=new Hp(_.scene,m,{light:_.controller.lights[0],sky:_.atmosphericSky.mesh,overlay:_.sunVectorRoot,frame:_.frame,maximumMapSize:Xt.maxShadowMapSize,isCorridorReady:(F,k,Y)=>{const ce=Xn(F,k,Y),ue=yt==null?void 0:yt.get(ce);if(ue!==void 0)return ue;const fe=vt().every(te=>{var pe;return((pe=te.isShadowRegionReady)==null?void 0:pe.call(te,F,k,Y))??(te.getRequestDemand?te.getRequestDemand()===0:!te.providesTerrain||!_r(t))});return yt==null||yt.set(ce,fe),fe},receiverStageError:F=>{const k=Xn(F),Y=St==null?void 0:St.get(k);if(Y!==void 0)return Y;const ce=Mo(F,mr(),Ee()?C():(l==null?void 0:l.errorTargetPixels)??Pr);return St==null||St.set(k,ce),ce},receiverBiasLimit:(F,k)=>Zs(F,k)??Si,onPresentedPages:(F,k)=>{var ce;const Y=Vp(mr(),k.map(({id:ue,receiverBounds:fe})=>({id:ue,bounds:fe})),F.map(({id:ue,receiverBounds:fe})=>({id:ue,bounds:fe})));if(Y.length!==0)for(const ue of vt())(ce=ue.acknowledgeShadowStage)==null||ce.call(ue,Y)},corridorRevision:(F,k,Y)=>{var pe;const ce=Xn(F,k,Y),ue=Ye==null?void 0:Ye.get(ce);if(ue!==void 0)return ue;const fe=[];for(const G of vt()){if(G===Zt)continue;const At=(pe=G.getShadowRegionRevision)==null?void 0:pe.call(G,F,k,Y);if(!At)return Ye==null||Ye.set(ce,null),null;fe.push(JSON.stringify([G.id,At]))}const te=fe.length?JSON.stringify(fe.sort()):null;return Ye==null||Ye.set(ce,te),te},dateTimeKey:()=>(h==null?void 0:h.instant.toISOString())??null,worldBasis:()=>{const F=P.layer.projectSceneToLngLat([0,0,0]);if(!F)throw new Error("Shared scene origin is not initialized");const k=gu.MercatorCoordinate.fromLngLat(F,0);return Wp(k.x,k.y,k.meterInMercatorCoordinateUnits())},requestRepaint:()=>t.triggerRepaint(),visualEpoch:()=>Jr,auditCorridors:F=>{const k=mr(),Y=vt();return F.map(({id:ce,casterBounds:ue,receiverBounds:fe})=>jp({id:ce,casterBounds:ue,sunElevationDegrees:(h==null?void 0:h.elevationDegrees)??0,volumes:k,regions:Y.flatMap(te=>{var G;const pe=(G=te.getShadowRegionDiagnostics)==null?void 0:G.call(te,ue,void 0,fe);return pe?[pe]:[]})}))},runIdleRender:F=>{var k,Y;return((Y=(k=P.layer).runIdleRender)==null?void 0:Y.call(k,F))??!1}}),S=!0}return!De||S?Q.update(Rt,we,{maxReceiverBiasMeters:Ee()?Si:void 0,directionToSun:_.directionToSun,color:_.sunColor,intensity:_.sunIntensity,shadowIntensity:_.shadowIntensity},dt[_.shadowQuality].shadowTexelErrorPixels,ve(we)):Q.updatePresentation(we,ve(we)),Q},hl=kp(),si=()=>Oe()&&hl(vt()),ia={onSettled:Ue.onSettled,onPresented:()=>{var S;const m=performance.now();for(const w of _e(t))(S=w.onShadowPresented)==null||S.call(w,m)},get options(){return Kt},get maxRenderTargetPixels(){return ni},get rounds(){return wr()},epoch:()=>Zr,visualEpoch:()=>Jr,pending:()=>qt&&st&&!L&&(!jt||si()||!Oe()&&!$s()||!Oe()&&_r(t)||De||!Oe()&&et!==0),active:()=>qt&&st&&jt&&!si()&&(Oe()||$s())&&(Oe()||!_r(t))&&!De&&!L&&(Oe()||et===0)&&h!==null&&Nt!==null&&_.receiverWorldPoints.length>0,retainSettledFrame:()=>qt&&st&&h!==null&&Nt!==null&&_.receiverWorldPoints.length>0,prepareRound:m=>{Oe()||_.controller.applySunDiscSample(m,wr())},finishRound:()=>_.controller.restoreSunDiscCenter(),get renderProgressive(){if(Oe())return(m,S)=>!st||L||!qt?null:Js(()=>{if(si())return null;const w=ra();if(!w)return null;const x=w.renderProgressive(m,{...S,samples:wr(),maxRenderTargetPixels:ni,options:Kt});return Qt(),x})},renderScene:(m,S)=>!st||L||!Oe()?!1:Js(()=>{if(si())return!1;const w=ra();if(!w)return!1;const x=w.render(m,S,wr(),!De);return Qt(),x})};(Sa=(ya=P.layer).setAccumulationController)==null||Sa.call(ya,ia);const ai=()=>{pt=null,tt=!0,Sr()};be=m=>{Ze(m),ai()};const na=()=>{Ue.cancel(),Q==null||Q.pausePending(),_t=es(_t,performance.now(),!1),De=!0,tt=!0},wn=()=>{Ue.cancel(),tt=!0},sa=()=>{De=!1,_t=es(_t,performance.now(),!1),vn?(vn=!1,xn()):ai(),M&&(Z=M,ti()),fr!==Nt&&pr(Nt)},aa=()=>{wn(),t.triggerRepaint()};t.on(ye.MOVE_START,na),t.on(ye.MOVE,wn),t.on(ye.MOVE_END,sa),t.on(ye.RESIZE,aa);const _n=m=>{m.ready.then(S=>{!S||O||K!==m||(jt=!0,ai(),t.triggerRepaint())})},oa=()=>{var x,V,F,k;const m=_e(t).filter(Y=>Y.providesTerrain);if(m.length!==hr.length||m.some(Y=>!hr.includes(Y))){hr=m,vr(),(V=(x=P.layer).setAccumulationController)==null||V.call(x,null),(k=(F=P.layer).setAccumulationController)==null||k.call(F,ia);for(const Y of _.controller.lights)Y.shadow.map&&(Dt(Y.shadow.map),Y.shadow.map=null);He()}const S=Ee();if(!l)return;if(S){Ue.cancel(),jt=!0;const Y=K;K=null,Y&&P.layer.hasRuntime(Y.id)&&P.layer.removeRuntime(Y.id),pt=null,tt=!0;return}if(K)return;const w=Gt();w&&(Ue.cancel(),jt=!1,K=w,w.setMaterialColor(`#${H.getHexString()}`),w.setShadowView(fr),P.layer.addRuntime(w),_n(w),pt=null,tt=!0)};K&&_n(K),Sr();const ca=()=>{if(O)return;const m=new Set(Kl(t));for(const[S,w]of gt)m.has(S)||(P.layer.removeRuntime(w.runtime.id),gt.delete(S));for(const S of m){const w=gt.get(S);if(w){w.sync();continue}if(!S.scene)continue;const x=bg(P.layer,S,v);x&&gt.set(S,x)}Dr(P.layer.getScene(),Ee()),ai(),t.triggerRepaint()},ml=Gl(t,ca);ca(),y();const xn=()=>{var m,S,w;if(!O){et&&(window.clearTimeout(et),et=0),ii?Q==null||Q.invalidateContent():gr.length>0&&(Q==null||Q.invalidateContent(gr)),ii=!1,gr.length=0,Ue.cancel(),oa(),f.refresh(),y();for(const x of _e(t))x.providesTerrain&&((m=x.setErrorTargetOverride)==null||m.call(x,E),(!I.has(x)||I.get(x)!==R)&&((S=x.setCacheBudget)==null||S.call(x,R),I.set(x,R))),(w=x.setShadowSimulationStyle)==null||w.call(x,v);pr(fr),gt.size>0&&Dr(P.layer.getScene(),Ee()),_.controller.invalidate(),_.dirty=!0,tt=!0,pt=null,t.triggerRepaint()}},fl=qo(t,m=>{if(O)return;const S=m==null?void 0:m.bounds;if(m===void 0){const w=_e(t).filter(x=>x.providesTerrain);(w.length!==hr.length||w.some(x=>!hr.includes(x)))&&(oa(),f.refresh(),y())}for(const w of(m==null?void 0:m.roots)??[])Dr(w,Ee());if((S==null?void 0:S.length)===0){t.triggerRepaint();return}if(S===void 0?ii=!0:S.length>0&&gr.push(...S.map(w=>w.clone())),Ue.cancel(),S===void 0&&vt().some(w=>w!==Zt&&!w.getActiveTileVolumes)&&(ii=!0),De){vn=!0,t.triggerRepaint();return}t.triggerRepaint(),!et&&(et=window.setTimeout(()=>{et=0,xn()},ug))}),pl=jl(t,()=>{_r(t)&&Ue.cancel(),O||t.triggerRepaint()});xn();const la=m=>{const S=M??Yt(m);S&&qs(S)},gl=m=>{(h==null?void 0:h.instant.getTime())!==m.instant.getTime()&&(Q==null||Q.cancelPending(!0),He(),h=m,Sr(),la(m))},ua=()=>{O||h&&la(h)};t.on(ye.STYLE_LOAD,ua);const da=()=>{mn=Number.NEGATIVE_INFINITY,_.dirty=!0,t.triggerRepaint()},vl=sg(t,m=>{m?da():(Je!==null&&globalThis.clearTimeout(Je),Je=null,wt=null,fn=null,pn="")});return{updateSolarPosition:gl,updateMeshCacheBudget(m){var w;a&&(m=Math.min(m??xi,xi));const S=m!==void 0&&Number.isFinite(m)&&m>0?m:void 0;if(!(R===S&&_e(t).filter(x=>x.providesTerrain).every(x=>I.has(x)&&I.get(x)===S))){R=S;for(const x of _e(t))x.providesTerrain&&((w=x.setCacheBudget)==null||w.call(x,S),I.set(x,S));t.triggerRepaint()}},updateTerrain(m){if(l===m||(Ue.cancel(),l=m,!m||Ee()))return;const S=K,w=Gt(S==null?void 0:S.originLngLat);w&&(w.setMaterialColor(`#${H.getHexString()}`),w.setShadowView(fr),S&&w.adoptPresentation(S),K=w,P.layer.addRuntime(w),S&&P.layer.removeRuntime(S.id),_n(w),pt=null,tt=!0,He(),be(),t.triggerRepaint())},updateTerrainColor(m){const S=new We(m);H.equals(S)||(He(),K==null||K.setMaterialColor(m),_.atmosphericSky.updateGroundAlbedo(S),H=S)},updateMeshErrorTarget(m){var S;if(E!==m){E=m;for(const w of _e(t))(S=w.setErrorTargetOverride)==null||S.call(w,m);t.triggerRepaint()}},updateBuildingAppearance(m){var S;if(!(v.fullOpacity===m.fullOpacity&&v.uniformColor===m.uniformColor&&(v.uniformColorMix??1)===(m.uniformColorMix??1)&&(v.textureSaturation??1)===(m.textureSaturation??1)&&(v.textureColorCorrection??!1)===(m.textureColorCorrection??!1))){He(),Q==null||Q.invalidateContent(),v=m;for(const w of gt.values())w.updateBuildingAppearance(m);for(const w of _e(t))(S=w.setShadowSimulationStyle)==null||S.call(w,m);Dr(P.layer.getScene(),Ee()),_.controller.invalidate(),_.dirty=!0,t.triggerRepaint()}},updateShadowQuality(m){a&&(m=qe.FPS_120),_.shadowQuality!==m&&(He(),_.shadowQuality=m,Pe=An(In(gn,a),m),Kt=ri(),_t=Jn(m),_.dirty=!0,Sr(),_.controller.invalidate())},updateRenderQuality(m){m=In(m,a);const S=Pe,w=An(m,_.shadowQuality);gn={...m},Pe=w;const x=S.shadowAdaptiveQuality!==w.shadowAdaptiveQuality;(x||S.shadowBufferLayout!==w.shadowBufferLayout)&&(_t=Jn(_.shadowQuality)),!(!x&&S.shadowBufferLayout===w.shadowBufferLayout&&S.shadowBufferFormat===w.shadowBufferFormat&&S.shadowSunDiscSamples===w.shadowSunDiscSamples&&S.shadowMsaaSamples===w.shadowMsaaSamples&&S.shadowGroundTexelFit===w.shadowGroundTexelFit)&&(Kt=ri(),He(),S.shadowBufferLayout!==w.shadowBufferLayout&&(vr(),tt=!0),(x||S.shadowGroundTexelFit!==w.shadowGroundTexelFit||S.shadowBufferLayout!==w.shadowBufferLayout)&&(_.dirty=!0,_.controller.invalidate()),Qt(),t.triggerRepaint())},updateSoftSunShadows(m){m=m&&!a,st!==m&&(He(),st=m,vr(),_.controller.setSoftSun(m),_.controller.invalidate(),_.dirty=!0,t.triggerRepaint())},updateTimeAnimating(m){L!==m&&(Ue.cancel(),L=m,m&&(Q==null||Q.pausePending()),m||(ti(),un=Number.NEGATIVE_INFINITY,dn&&!De&&pr(Nt),_.dirty=!0),t.triggerRepaint())},refreshProjectionDebug:da,updateShadowIntensity(m){const S=Ve(m,0,1);if(b!==S){He(),b=S,_.shadowIntensity=b;for(const w of _.controller.lights)w.shadow.intensity=b;t.triggerRepaint()}},updateMapStyleContentVisibility(m){g!==m&&(g=m,X(),t.triggerRepaint())},updateMapStyleElevationVisibility(m,S){P.setMapStyleElevationVisibility(m,S),t.triggerRepaint()},updateMapStyleLabelOverlayVisibility(m){P.setPointLabelOverlayVisible(m),t.triggerRepaint()},updateSunDebugVectorVisibility(m){_.sunVectorVisible!==m&&(He(),_.sunVectorVisible=m,_.sunVectorRoot.visible=m&&!!h,m?(_.frame.add(_.sunVectorRoot),ki(async()=>{const{buildSunVector:S}=await import("./shadow-sun-vector-G-_3CFXk.js");return{buildSunVector:S}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10])).then(({buildSunVector:S})=>{if(O||!_.sunVectorVisible||_.sunVector)return;const w=S();_.sunVector=w,_.sunVectorRoot.add(w.root),w.update(_.center,_.directionToSun,_.sunVectorLengthMeters),w.root.visible=!0,_.sunVectorRoot.visible=!!h,t.triggerRepaint()}).catch(S=>{O||console.error("Unable to load sun-vector diagnostics",S)})):(_.frame.remove(_.sunVectorRoot),_.sunVector&&(_.sunVectorRoot.remove(_.sunVector.root),_.sunVector.dispose(),_.sunVector=null)),t.triggerRepaint())},updateAtmosphericLutUsage(m){U.useTransmittanceLut===m.useTransmittanceLut&&U.useIrradianceLut===m.useIrradianceLut||(He(),U=m,M=null,h&&(Yt(h),Ze()),t.triggerRepaint())},dispose(){var m,S,w,x,V,F;if(!O){O=!0,Ue.dispose(),vl(),vr(),Je!==null&&(globalThis.clearTimeout(Je),Je=null),wt=null,et&&window.clearTimeout(et),N!==null&&(globalThis.clearTimeout(N),N=null),Qn(t),t.off(ye.STYLE_LOAD,ua),t.off(ye.MOVE_START,na),t.off(ye.MOVE,wn),t.off(ye.MOVE_END,sa),t.off(ye.RESIZE,aa),ml(),fl(),pl(),Nt=null,pr(null);for(const k of _e(t))(m=k.setShadowSimulationStyle)==null||m.call(k,null),(S=k.setErrorTargetOverride)==null||S.call(k,null);for(const k of gt.values())P.layer.hasRuntime(k.runtime.id)&&P.layer.removeRuntime(k.runtime.id);gt.clear();try{$==null||$()}catch{}$=null,(x=(w=P.layer).setMapStyleProjectionVisible)==null||x.call(w,!0),f(),P.layer.hasRuntime(Zt.id)&&P.layer.removeRuntime(Zt.id),K&&P.layer.hasRuntime(K.id)&&P.layer.removeRuntime(K.id),Ge.dispose(),Ag(_),(F=(V=P.layer).setAccumulationController)==null||F.call(V,null),P.release();try{t.isStyleLoaded()&&(t.setLight(d),c&&t.getPixelRatio()===Cn&&t.setPixelRatio(o))}catch{}}}}},Ig=(t,e,r,i)=>{const n=i+e/2,s=Math.floor(n),a=n-s;if(s===0)return{dateState:t,yearDayProgress:a};const o=rs(t,s);return{dateState:Bi({...t,...o},r)??t,yearDayProgress:a}},Dg=(t,e,r)=>{const i=Bo(t,r),n=Math.ceil(i.sunriseMinutes),s=Math.floor(i.sunsetMinutes),a=t.minutes+e;return{dateState:{...t,minutes:a>s?n:a},yearDayProgress:0}},Pg=(t,e,r,i,n)=>{const s=e??r;if(!(t!=null&&t.enabled)||!t.isAnimating)return{dateState:s,yearDayProgress:n};const a=t.animationSpeed??4;return(t.animationMode??Ht.DAY)===Ht.YEAR?Ig(s,a,i,n):Dg(s,a,i)},Og=1e3/30,Ng=250,Lg=({dateState:t,setDateState:e,location:r,shadowState:i,onFrame:n})=>{const s=W.useRef(null),a=W.useRef(null),o=W.useRef(t),c=W.useRef(t),l=W.useRef(e),u=W.useRef(n);c.current=t,l.current=e,u.current=n;const{animationMode:d,animationSpeed:g,enabled:p,isAnimating:f}=i,y=p&&(f??!1);return W.useEffect(()=>{const h=t!==o.current;if(o.current=t,!!h){if(t===a.current){y||(s.current=null);return}s.current=null}},[y,t]),W.useEffect(()=>{if(!y)return;const h={animationMode:d,animationSpeed:g,enabled:p,isAnimating:f};let v=0,b=performance.now();const E=R=>{a.current=R,l.current(R)},C=window.setInterval(()=>{const R=s.current??c.current,I=Pg(h,R,R,r,v);v=I.yearDayProgress,s.current=I.dateState,u.current(I.dateState);const M=performance.now();M-b>=Ng&&(b=M,E(I.dateState))},Og);return()=>{window.clearInterval(C);const R=s.current;R&&R!==a.current&&E(R)}},[y,d,g,p,f,r]),s},Fg=({tiledShadows:t=!1,libreMap:e,shadowAreaMeters:r,terrain:i,mapLibreTerrain:n,terrainQuality:s,location:a,state:o,dateState:c,setDateState:l})=>{const u=W.useRef(null),d=Lg({dateState:c,setDateState:l,location:a,shadowState:o,onFrame:h=>{var v;o.enabled&&((v=u.current)==null||v.updateSolarPosition(Hr(h,a)))}}),g=W.useMemo(()=>Su(i,Ea(o.shadowQuality),o.terrainErrorTarget),[i,o.shadowQuality,o.terrainErrorTarget]),p=W.useRef(g);p.current=g;const[f,y]=W.useState(0);return W.useEffect(()=>{if(!e||!o.enabled)return;let h=null,v=null,b=null;const E=()=>{e.off(ye.STYLE_DATA,C),e.off(ye.STYLE_LOAD,C),e.off(ye.IDLE,C)},C=()=>{h||v!==null||b!==null||!e.isStyleLoaded()||(v=requestAnimationFrame(()=>{v=null,b=setTimeout(()=>{b=null,e.isStyleLoaded()&&(E(),h=Cg(e,{shadowAreaMeters:r,terrain:p.current,mapLibreTerrain:n,terrainQuality:s}),u.current=h,y(R=>R+1))},0)}))};return e.on(ye.STYLE_DATA,C),e.on(ye.STYLE_LOAD,C),e.on(ye.IDLE,C),C(),()=>{E(),v!==null&&cancelAnimationFrame(v),b!==null&&clearTimeout(b),u.current=null,h==null||h.dispose(),h=null}},[e,r,o.enabled,n,s]),W.useEffect(()=>{var h;(h=u.current)==null||h.updateTerrain(g)},[g,f]),W.useEffect(()=>{var v;if(!o.enabled)return;const h=d.current??c;(v=u.current)==null||v.updateSolarPosition(Hr(h,a))},[d,c,a,o.enabled,f]),W.useEffect(()=>{var h;o.enabled&&((h=u.current)==null||h.updateShadowQuality(Ea(o.shadowQuality)))},[o.enabled,o.shadowQuality,f]),W.useEffect(()=>{var h;o.enabled&&((h=u.current)==null||h.updateRenderQuality({shadowAdaptiveQuality:o.shadowAdaptiveQuality,shadowBufferLayout:t?o.shadowBufferLayout:void 0,shadowBufferFormat:o.shadowBufferFormat,shadowSunDiscSamples:o.shadowSunDiscSamples,shadowMsaaSamples:o.shadowMsaaSamples,shadowGroundTexelFit:o.shadowGroundTexelFit}))},[o.enabled,t,o.shadowAdaptiveQuality,o.shadowBufferLayout,o.shadowBufferFormat,o.shadowSunDiscSamples,o.shadowMsaaSamples,o.shadowGroundTexelFit,f]),W.useEffect(()=>{var h;o.enabled&&((h=u.current)==null||h.updateMeshErrorTarget(o.meshErrorTarget??null))},[o.enabled,o.meshErrorTarget,f]),W.useEffect(()=>{var h;o.enabled&&((h=u.current)==null||h.updateMeshCacheBudget(o.meshCacheBudgetBytes))},[o.enabled,o.meshCacheBudgetBytes,f]),W.useEffect(()=>{var h;o.enabled&&((h=u.current)==null||h.updateSoftSunShadows(o.softSunShadows??!0))},[o.enabled,o.softSunShadows,f]),W.useEffect(()=>{var h;o.enabled&&((h=u.current)==null||h.updateTimeAnimating(o.isAnimating??!1))},[o.enabled,o.isAnimating,f]),W.useEffect(()=>{var h;o.enabled&&((h=u.current)==null||h.updateShadowIntensity(o.shadowIntensity??1))},[o.enabled,o.shadowIntensity,f]),W.useEffect(()=>{var h;o.enabled&&((h=u.current)==null||h.updateMapStyleContentVisibility(o.showMapStyleContent??!0))},[o.enabled,o.showMapStyleContent,f]),W.useEffect(()=>{var h;o.enabled&&((h=u.current)==null||h.updateMapStyleLabelOverlayVisibility((o.showMapStyleContent??!0)&&(o.showMapStyleLabels??!0)))},[o.enabled,o.showMapStyleContent,o.showMapStyleLabels,f]),W.useEffect(()=>{var h;o.enabled&&((h=u.current)==null||h.updateMapStyleElevationVisibility(o.showMapStyleElevationLines??!1,o.showMapStyleElevationLabels??!1))},[o.enabled,o.showMapStyleElevationLines,o.showMapStyleElevationLabels,f]),W.useEffect(()=>{var h;o.enabled&&((h=u.current)==null||h.updateSunDebugVectorVisibility((o.showProjectionDebugView??!1)&&(o.showSunDebugVector??!0)))},[o.enabled,o.showProjectionDebugView,o.showSunDebugVector,f]),W.useEffect(()=>{if(!e)return;const h=o.enabled&&(o.showProjectionDebugView??!1)&&(o.showTileBounds??!0);if(!h)return;const v=new Set,b=()=>{var R;const C=_e(e);for(const I of v)C.includes(I)||v.delete(I);for(const I of C)v.has(I)||((R=I.setTileBoundsVisible)==null||R.call(I,h),v.add(I))};b();const E=qo(e,b);return()=>{var C;E();for(const R of _e(e))(C=R.setTileBoundsVisible)==null||C.call(R,!1)}},[e,f,o.enabled,o.showProjectionDebugView,o.showTileBounds]),W.useEffect(()=>{var h;o.enabled&&((h=u.current)==null||h.updateAtmosphericLutUsage({useTransmittanceLut:o.useTransmittanceLut??!0,useIrradianceLut:o.useSkyIrradianceLut??!0}))},[o.enabled,o.useSkyIrradianceLut,o.useTransmittanceLut,f]),W.useEffect(()=>{var h;o.enabled&&((h=u.current)==null||h.updateTerrainColor(o.terrainColor??Cs))},[o.enabled,o.terrainColor,f]),W.useEffect(()=>{var h;o.enabled&&((h=u.current)==null||h.updateBuildingAppearance({fullOpacity:o.buildingsFullOpacity??!0,uniformColor:o.buildingColor??Zo,uniformColorMix:Ve(o.buildingColorMix??Xo,0,1),textureColorCorrection:o.meshTextureColorCorrection??!0,textureSaturation:Ve(o.meshTextureSaturation??Qo,0,1)}))},[o.buildingColor,o.buildingColorMix,o.buildingsFullOpacity,o.enabled,o.meshTextureSaturation,o.meshTextureColorCorrection,f]),null},Bg=t=>({...t,animationMode:Ht.DAY,animationSpeed:4,isAnimating:!1,shadowIntensity:1,meshTextureColorCorrection:!0,showSunDebugVector:!0,showTileBounds:!0,showProjectionDebugView:!1,showDisplaySettings:!1,showMapStyleContent:!0,showMapStyleLabels:!0,showMapStyleElevationLines:!1,showMapStyleElevationLabels:!1,useTransmittanceLut:!0,useSkyIrradianceLut:!0,shadowBufferLayout:void 0,shadowBufferFormat:void 0,shadowSunDiscSamples:void 0,shadowMsaaSamples:void 0,shadowGroundTexelFit:void 0,shadowAdaptiveQuality:void 0}),Ug=({location:t,state:e,setState:r,dateState:i,setDateState:n})=>{const s=e.animationMode??Ht.DAY,a=e.animationSpeed??4,o=(c,l)=>n(ju(i,i.year,Uo(i.year,c,l),t));return D.jsxs(D.Fragment,{children:[D.jsxs("section",{className:"min-w-0",children:[D.jsx("h3",{className:"mb-1.5 text-xs font-medium uppercase tracking-wide text-neutral-500",children:"Datum"}),D.jsxs("div",{className:"grid grid-cols-2 gap-2","data-test-id":"shadow-date-shortcuts",children:[D.jsx("button",{type:"button",className:xr,onClick:()=>n(Yu(i,t)),children:"Heute"}),D.jsx("button",{type:"button",className:xr,onClick:()=>o(2,21),children:"21. März"}),D.jsx("button",{type:"button",className:xr,onClick:()=>o(5,21),children:"21. Juni"}),D.jsx("button",{type:"button",className:xr,onClick:()=>o(11,21),children:"21. Dezember"})]})]}),D.jsxs("section",{children:[D.jsx("h3",{className:"mb-1.5 text-xs font-medium uppercase tracking-wide text-neutral-500",children:"Uhrzeit"}),D.jsx("div",{className:"grid grid-cols-4 gap-2",children:[9,12,15,18].map(c=>D.jsx("button",{type:"button",className:xr,onClick:()=>n(Ki(i,{...i,minutes:c*60},t)),children:Xu(c)},c))})]}),D.jsxs("section",{children:[D.jsx("h3",{className:"mb-1.5 text-xs font-medium uppercase tracking-wide text-neutral-500",children:"Animation"}),D.jsxs("div",{className:"flex flex-wrap items-center gap-x-3 gap-y-2",children:[D.jsx("div",{className:"flex shrink-0 overflow-hidden rounded-md border border-neutral-300",children:[[Ht.DAY,"Tagesverlauf"],[Ht.YEAR,"Jahresverlauf"]].map(([c,l])=>D.jsx("button",{type:"button",className:`${Ca} ${s===c?"bg-amber-50 font-medium text-amber-700":"bg-white"}`,"aria-pressed":s===c,onClick:()=>{const u=c;r({...e,animationMode:u,isAnimating:s===u?!e.isAnimating:!0})},children:l},c))}),D.jsx("div",{className:"flex shrink-0 overflow-hidden rounded-md border border-neutral-300",children:[1,4,12].map(c=>D.jsxs("button",{type:"button",className:`${Ca} px-3 ${a===c?"bg-amber-50 font-medium text-amber-700":"bg-white"}`,"aria-pressed":a===c,onClick:()=>r({...e,animationSpeed:c}),children:[c,"×"]},c))})]})]})]})},Hg=({location:t,state:e,setState:r,dateState:i,setDateState:n})=>{const s=e.shadowIntensity??1,a=W.useMemo(()=>Hr(i,t),[i,t]);return D.jsxs("div",{className:"w-full","data-test-id":"shadow-simulation-secondary-panel",children:[D.jsxs("div",{className:"mb-2 flex flex-wrap items-center justify-between gap-x-4 gap-y-2",children:[D.jsxs("span",{className:"whitespace-nowrap text-sm tabular-nums text-neutral-500",children:["Höhe ",a.elevationDegrees.toFixed(0),"° · Azimut"," ",a.azimuthDegrees.toFixed(0),"°"]}),D.jsx("div",{className:"flex items-center gap-5 text-sm text-neutral-600",children:D.jsxs("button",{type:"button",className:"flex items-center gap-2 whitespace-nowrap hover:text-amber-700",onClick:()=>{r(Bg(e)),n($u(i,t))},children:[D.jsx(Pt,{icon:lu}),"Zurücksetzen"]})})]}),D.jsxs("div",{className:"grid grid-cols-1 gap-x-8 gap-y-4 lg:grid-cols-2",children:[D.jsx(Ug,{location:t,state:e,setState:r,dateState:i,setDateState:n}),D.jsxs("section",{className:"min-w-0",children:[D.jsxs("h3",{className:"mb-1.5 flex items-center gap-1 text-xs font-medium uppercase tracking-wide text-neutral-500",children:["Darstellung",D.jsx("button",{type:"button",className:"inline-flex items-center justify-center p-1 text-neutral-700 hover:text-amber-700","aria-label":"Darstellungseinstellungen",title:"Darstellungseinstellungen","aria-expanded":e.showDisplaySettings??!1,onClick:()=>r({...e,showDisplaySettings:!e.showDisplaySettings}),"data-test-id":"shadow-simulation-display-settings",children:D.jsx(Pt,{icon:uu})})]}),D.jsxs("label",{className:"grid grid-cols-[110px_minmax(0,1fr)_42px] items-center gap-3 text-sm text-neutral-700",children:[D.jsx("span",{children:"Intensität"}),D.jsx("input",{type:"range",min:0,max:1,step:.01,value:s,onChange:o=>r({...e,shadowIntensity:Number(o.currentTarget.value)}),className:"shadow-simulation-range min-w-0 cursor-pointer",style:nc(s,0,1),"aria-label":"Schattenintensität","data-test-id":"shadow-simulation-intensity"}),D.jsxs("span",{className:"text-right tabular-nums",children:[Math.round(s*100),"%"]})]})]})]})]})},kg=W.lazy(()=>ki(()=>import("./ShadowProjectionDebugView-CT_Qm_so.js"),__vite__mapDeps([11,1,2,3,4,5,6,7,8,9,10])).then(t=>({default:t.ShadowProjectionDebugView}))),zg=W.lazy(()=>ki(()=>import("./ShadowSimulationDisplaySettingsPanel-Ds46tPFt.js"),__vite__mapDeps([12,1,2,3,4,5,6,7,8,9,10])).then(t=>({default:t.ShadowSimulationDisplaySettingsPanel}))),Vg=W.lazy(()=>ki(()=>import("./ShadowSimulationCurveSettings-lQt8AbNq.js"),__vite__mapDeps([13,1,2,3,4,5,6,7,8,9,10])).then(t=>({default:t.ShadowSimulationCurveSettings}))),Wg="#1677ff",Gg=({config:t,libreMap:e,targeted:r,sharedState:i,setSharedState:n,sharedDateState:s,setSharedDateState:a})=>{var j,Z;const{year:o,initialDayOfYear:c,initialMinutes:l,latitude:u=Mi.latitude,longitude:d=Mi.longitude,timeZone:g=xs,shadowAreaMeters:p,terrain:f,terrainSources:y,mapLibreTerrain:h,controlPosition:v="topleft",controlOrder:b=70,experimentalTiledShadows:E=!1}=t??{},C=ic(e,u,d),R=W.useMemo(()=>Mu({terrain:f,terrainSources:y}),[f,y]),I=W.useMemo(()=>s??Eu({year:o,initialDayOfYear:c,initialMinutes:l,timeZone:g},C),[s,c,l,C,g,o]),M=i??R,U=s??I,O=W.useMemo(()=>y??(f?[{label:f.id,terrain:f}]:void 0),[f,y]),L=((j=O==null?void 0:O.find(({terrain:N})=>N.id===M.terrainSourceId))==null?void 0:j.terrain)??((Z=O==null?void 0:O[0])==null?void 0:Z.terrain);return W.useEffect(()=>{i||n(R)},[R,n,i]),W.useEffect(()=>{s||a(I)},[I,a,s]),r?D.jsx(Hg,{location:C,state:M,setState:n,dateState:U,setDateState:a}):D.jsxs(D.Fragment,{children:[e&&D.jsx(Ql,{position:v,order:b,children:D.jsx(pu,{title:M.enabled?"Schattensimulation ausschalten":"Schattensimulation einschalten",placement:"right",children:D.jsx(Zl,{onClick:()=>n({...M,enabled:!M.enabled}),dataTestId:"shadow-simulation-control-button","aria-label":M.enabled?"Schattensimulation ausschalten":"Schattensimulation einschalten","aria-pressed":M.enabled,children:D.jsx(Pt,{icon:du,style:M.enabled?{color:Wg}:void 0})})})}),D.jsx(Fg,{tiledShadows:E,libreMap:e,shadowAreaMeters:p,terrain:L,mapLibreTerrain:h,terrainQuality:M.terrainQuality,location:C,state:M,dateState:U,setDateState:a}),M.controlStyle===ss.CURVE&&D.jsx(W.Suspense,{fallback:null,children:D.jsx(Vg,{location:C,dateState:U,setDateState:a,onClose:()=>n({...M,controlStyle:ss.QUICK})})}),M.showDisplaySettings&&D.jsx(W.Suspense,{fallback:null,children:D.jsx(zg,{tiledShadows:E,state:M,setState:n,terrainSources:O,map:e})}),M.enabled&&M.showProjectionDebugView&&e&&D.jsx(W.Suspense,{fallback:null,children:D.jsx(kg,{map:e,solarPosition:Hr(U,C),settings:{showSunDebugVector:M.showSunDebugVector??!0,showTileBounds:M.showTileBounds??!0},onSettingsChange:N=>n({...M,...N}),onClose:()=>n({...M,showProjectionDebugView:!1})})})]})},ov=Object.freeze(Object.defineProperty({__proto__:null,DEFAULT_SHADOW_SIMULATION_TIME_ZONE:xs,SHADOW_TERRAIN_QUALITY:Ce,ShadowSimulationHeaderControlsView:Zu,ShadowSimulationView:Gg,clampShadowSimulationSelectionToDaylight:Jl,formatShadowSelection:eu,getSolarPosition:Hr},Symbol.toStringTag,{value:"Module"}));export{Cs as D,tv as M,kr as S,An as a,Ea as b,rv as c,_u as d,ht as e,yu as f,As as g,Xo as h,Qo as i,Zo as j,Pr as k,ev as l,Jg as m,ss as n,qe as o,Ei as p,ov as q,sv as r,av as s,zi as u};
