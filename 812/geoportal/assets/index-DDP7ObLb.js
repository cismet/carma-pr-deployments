const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/shadow-sun-vector-CwtEpBko.js","assets/index-D_vqJUpr.js","assets/vendor-react-core-DBOd_2-S.js","assets/vendor-ui-icons-9AIi8EdF.js","assets/vendor-cismap-BBoECxFN.js","assets/vendor-leaflet-BuDGw_T9.js","assets/vendor-ui-D-s7eOwo.js","assets/vendor-cismap-DCHbl3AQ.css","assets/vendor-cesium-CNm9W3AS.js","assets/vendor-maplibre-XZ2NtLMv.js","assets/index-sqlKuICJ.css","assets/ShadowProjectionDebugView-4OKQeU52.js","assets/ShadowSimulationDisplaySettingsPanel-BNcTbhQF.js","assets/ShadowSimulationCurveSettings-BdfRkfHU.js"])))=>i.map(i=>d[i]);
import{S as Br,C as Ui,a as ir,G as Ur,L as xl,N as Uo,M as Wr,P as _s,V as re,b as Ge,W as $e,F as Mt,R as kr,c as Ie,D as sr,U as Vt,d as We,g as xs,e as ki,f as Ts,h as Tl,i as Hi,k as ye,l as ko,j as N,o as is,m as bl,n as Ho,p as Rn,q as Ri,r as Gr,s as ee,t as lt,u as T,v as Ml,B as Le,E as zo,w as El,x as Rl,y as Vo,z as I,A as zi,T as Wo,O as bs,H as Go,I as Sa,J as Ms,K as Al,Q as ns,X as wa,Y as Es,Z as Cl,_ as Il,$ as _a,a0 as Dl,a1 as Pl,a2 as Nl,a3 as jo,a4 as Lt,a5 as Ol,a6 as Yo,a7 as xa,a8 as Ll,a9 as $o,aa as Fl,ab as Bl,ac as Ul,ad as ss,ae as An,af as kl,ag as Hl,ah as Ti,ai as Ko,aj as tr,ak as zl,al as Rs,am as qo,an as Vl,ao as Wl,ap as Gl,aq as Xo,ar as jl,as as Ta,at as xe,au as As,av as Yl,aw as Qo,ax as $l,ay as Vi,az as Kl,aA as ql,aB as xr,aC as Xl,aD as Ql,aE as Cn,aF as Zl,aG as Hr,aH as Jl,aI as eu,aJ as tu,aK as ru}from"./index-D_vqJUpr.js";import{g as iu,r as V,d as nu}from"./vendor-react-core-DBOd_2-S.js";import{F as Ot,V as su,bv as au,W as ou,z as cu,bc as lu,bd as uu,bw as du,bg as hu,D as mu}from"./vendor-ui-icons-9AIi8EdF.js";import{K as fu,L as pu,N as gu,e as vu}from"./vendor-ui-D-s7eOwo.js";import{a as yu}from"./vendor-maplibre-XZ2NtLMv.js";import"./vendor-cismap-BBoECxFN.js";import"./vendor-leaflet-BuDGw_T9.js";const ba=20;class Su{constructor(e,r=256*1024**2){this.renderer=e,this.maximumBytes=r,this.quad.frustumCulled=!1,this.scene.add(this.quad)}target=null;key=null;broken=!1;captures=0;reuses=0;scene=new Br;camera=new Ui;material=new ir({glslVersion:Ur,uniforms:{color:{value:null},depth:{value:null}},vertexShader:`out vec2 uvCopy;
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
      }`,depthTest:!0,depthFunc:xl,depthWrite:!0,transparent:!0,blending:Uo});quad=new Wr(new _s(2,2),this.material);get stats(){return{captures:this.captures,reuses:this.reuses,bytes:this.target?this.target.width*this.target.height*ba:0,broken:this.broken}}invalidate(){this.key=null}render(e,r,i,n){var f,v;const s=this.renderer;if(this.broken||!Number.isInteger(r)||!Number.isInteger(i)||r<1||i<1||r>s.capabilities.maxTextureSize||i>s.capabilities.maxTextureSize||r*i*ba>this.maximumBytes||!s.extensions.has("EXT_color_buffer_float"))return this.releaseTarget(),n(),!1;const a=s.getRenderTarget(),o=s.getActiveCubeFace(),c=s.getActiveMipmapLevel(),l=s.getViewport(new re),u=s.getScissor(new re),d=s.getScissorTest(),g=s.getClearColor(new Ge),p=s.getClearAlpha(),h=s.autoClear,S=()=>{s.setRenderTarget(a,o,c),s.setViewport(l),s.setScissor(u),s.setScissorTest(d),s.setClearColor(g,p),s.autoClear=h};try{if(((f=this.target)==null?void 0:f.width)!==r||((v=this.target)==null?void 0:v.height)!==i){this.releaseTarget(),this.target=new $e(r,i,{type:Mt,format:kr,minFilter:Ie,magFilter:Ie,depthTexture:new sr(r,i,Vt),samples:0});try{s.initRenderTarget(this.target)}catch{return this.broken=!0,this.releaseTarget(),S(),n(),!1}}const b=JSON.stringify([e,r,i,s.outputColorSpace,s.toneMapping,s.toneMappingExposure,a==null?void 0:a.texture.colorSpace]);return s.autoClear=!1,this.key!==b?(this.key=null,s.setRenderTarget(this.target),s.setViewport(new re(0,0,r,i)),s.setScissorTest(!1),s.setClearColor(0,0),s.clear(!0,!0,!1),n(),this.key=b,this.captures+=1):this.reuses+=1,S(),s.autoClear=!1,this.material.uniforms.color.value=this.target.texture,this.material.uniforms.depth.value=this.target.depthTexture,s.render(this.scene,this.camera),!0}catch(b){throw this.invalidate(),b}finally{S()}}releaseTarget(){var e,r,i;(r=(e=this.target)==null?void 0:e.depthTexture)==null||r.dispose(),(i=this.target)==null||i.dispose(),this.target=null,this.key=null}dispose(){this.releaseTarget(),this.broken=!0,this.material.dispose(),this.quad.geometry.dispose()}}const Ai={OVERLAY:"isShadowSimulationOverlay"},Ke={FPS_120:4,FPS_60:16,FPS_30:64,ULTRA:256},Cs="max",ui=64,wu=[0,2,4,8,Cs],ut={[Ke.FPS_120]:{targetFps:120,depthSize:2048,terrainErrorPixels:2,shadowTexelErrorPixels:2,terrainTileLimit:96,terrainSegments:128,sunSamples:ui,msaaSamples:0},[Ke.FPS_60]:{targetFps:60,depthSize:3072,terrainErrorPixels:1,shadowTexelErrorPixels:1,terrainTileLimit:144,terrainSegments:256,sunSamples:ui,msaaSamples:2},[Ke.FPS_30]:{targetFps:30,depthSize:4096,terrainErrorPixels:.5,shadowTexelErrorPixels:.5,terrainTileLimit:192,terrainSegments:512,sunSamples:ui,msaaSamples:4},[Ke.ULTRA]:{targetFps:null,depthSize:16384,terrainErrorPixels:.25,shadowTexelErrorPixels:.25,terrainTileLimit:256,terrainSegments:512,sunSamples:ui,msaaSamples:Cs}},_u=(t,e,r=Nr)=>{if(!t)return;const i=ut[e];return{...t,errorTargetPixels:r,meshSegments:Math.min(t.tileSize,i.terrainSegments),maxSelectionTiles:Math.min(t.maxSelectionTiles??i.terrainTileLimit,i.terrainTileLimit)}},ur=64,Nr=2,xu=6*1024**3,Is="#d3d3d3",Zo=0,Jo=1,ec="#ffffff",zr={MONO:"mono",TILED:"tiled"},dt={HDR_16:"rgba16f",HDR_16_32:"rgba16f-32f",HDR_32:"rgba32f",SDR_8:"rgba8"},Tu=[32,64,128,256,512,1024,2048,4096,8192],bu=!0,In=(t={},e=ur)=>({shadowAdaptiveQuality:t.shadowAdaptiveQuality??!0,shadowBufferLayout:t.shadowBufferLayout&&Object.values(zr).includes(t.shadowBufferLayout)?t.shadowBufferLayout:zr.MONO,shadowBufferFormat:t.shadowBufferFormat&&Object.values(dt).includes(t.shadowBufferFormat)?t.shadowBufferFormat:dt.HDR_16_32,shadowSunDiscSamples:t.shadowSunDiscSamples&&Tu.includes(t.shadowSunDiscSamples)?t.shadowSunDiscSamples:ut[e].sunSamples,shadowMsaaSamples:t.shadowBufferFormat===dt.HDR_32?0:t.shadowMsaaSamples!==void 0&&wu.includes(t.shadowMsaaSamples)?t.shadowMsaaSamples:ut[e].msaaSamples,shadowGroundTexelFit:t.shadowGroundTexelFit??bu}),Ma=t=>Object.values(Ke).includes(t)?t:ur,Mu=t=>typeof t=="string"&&/^#[\da-f]{6}$/i.test(t)?t:typeof t=="number"&&Number.isFinite(t)?`#${We(Math.round(t),0,16777215).toString(16).padStart(6,"0")}`:Is,tc=()=>{var t;return typeof navigator>"u"?{userAgent:"",platform:"",maxTouchPoints:0}:{userAgent:navigator.userAgent,platform:navigator.platform,maxTouchPoints:navigator.maxTouchPoints,mobile:(t=navigator.userAgentData)==null?void 0:t.mobile}},rc=(t=tc())=>/iPhone|iPod|Android.*Mobile/i.test(t.userAgent)||t.mobile?"phone":/iPad|Android/i.test(t.userAgent)||t.platform==="MacIntel"&&t.maxTouchPoints>1?"tablet":"desktop",Wi=()=>rc()!=="desktop",bi=96*1024**2,Eu=(t,e=Wi())=>!t||!e?t:{...t,meshSegments:Math.min(t.meshSegments??t.tileSize,128),maximumMeshSegments:Math.min(t.maximumMeshSegments??128,128),maxSelectionTiles:Math.min(t.maxSelectionTiles??48,48),maxCachedMeshes:Math.min(t.maxCachedMeshes??64,64),maxCachedMeshBytes:Math.min(t.maxCachedMeshBytes??32*1024**2,32*1024**2),maxCacheBytes:Math.min(t.maxCacheBytes??16*1024**2,16*1024**2),requestConcurrency:Math.min(t.requestConcurrency??2,2)},Dn=(t,e=Wi())=>e?{...t,shadowAdaptiveQuality:!0,shadowBufferLayout:zr.MONO,shadowBufferFormat:dt.SDR_8,shadowMsaaSamples:0}:t,De={STANDARD:"standard",HIGH:"high",MAX:"max",ULTRA:"ultra",EXTREME:"extreme"},as={QUICK:"quick",CURVE:"curve"},zt={DAY:"day",YEAR:"year"},Zg=(t,e)=>({...t,shadowQuality:e,shadowBufferFormat:void 0,shadowSunDiscSamples:void 0,shadowMsaaSamples:void 0,shadowGroundTexelFit:void 0}),Ru=t=>{var i,n,s;const e=Wi(),r=((n=(i=t==null?void 0:t.terrainSources)==null?void 0:i[0])==null?void 0:n.terrain)??(t==null?void 0:t.terrain);return{enabled:!1,terrainColor:Mu((s=r==null?void 0:r.material)==null?void 0:s.color),terrainSourceId:r==null?void 0:r.id,terrainQuality:e?De.STANDARD:De.MAX,buildingsFullOpacity:!0,buildingColorMix:Zo,meshTextureSaturation:Jo,meshTextureColorCorrection:!0,buildingColor:ec,shadowQuality:e?Ke.FPS_120:ur,shadowAdaptiveQuality:!0,terrainErrorTarget:Nr,meshCacheBudgetBytes:e?bi:xu,showSunDebugVector:!0,showTileBounds:!0,showProjectionDebugView:!1,showDisplaySettings:!1,softSunShadows:!e,showMapStyleContent:!0,showMapStyleLabels:!0,showMapStyleElevationLines:!1,showMapStyleElevationLabels:!1,useTransmittanceLut:!0,useSkyIrradianceLut:!0,controlStyle:as.QUICK,animationMode:zt.DAY,animationSpeed:4,isAnimating:!1,shadowIntensity:1}},Au=(t,e,r=new Date)=>{const i=(t==null?void 0:t.timeZone)??Ts,n=xs(r,i),s={year:(t==null?void 0:t.year)??n.year,dayOfYear:(t==null?void 0:t.initialDayOfYear)??n.dayOfYear,minutes:(t==null?void 0:t.initialMinutes)??n.minutes,timeZone:i};return ki(s,e)??{...s,minutes:12*60}};var Gi={},ji={};Object.defineProperty(ji,"__esModule",{value:!0});ji.default=void 0;var Cu={items_per_page:"/ Seite",jump_to:"Gehe zu",jump_to_confirm:"bestätigen",page:"Seite",prev_page:"Vorherige Seite",next_page:"Nächste Seite",prev_5:"5 Seiten zurück",next_5:"5 Seiten vor",prev_3:"3 Seiten zurück",next_3:"3 Seiten vor",page_size:"Page Size"};ji.default=Cu;var Yi={},jr={},$i={},ic={exports:{}};(function(t){var e=Tl;function r(n,s){var a=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);s&&(o=o.filter(function(c){return Object.getOwnPropertyDescriptor(n,c).enumerable})),a.push.apply(a,o)}return a}function i(n){for(var s=1;s<arguments.length;s++){var a=arguments[s]!=null?arguments[s]:{};s%2?r(Object(a),!0).forEach(function(o){e(n,o,a[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach(function(o){Object.defineProperty(n,o,Object.getOwnPropertyDescriptor(a,o))})}return n}t.exports=i,t.exports.__esModule=!0,t.exports.default=t.exports})(ic);var Iu=ic.exports,Ki={};Object.defineProperty(Ki,"__esModule",{value:!0});Ki.commonLocale=void 0;Ki.commonLocale={yearFormat:"YYYY",dayFormat:"D",cellMeridiemFormat:"A",monthBeforeYear:!0};var Du=Hi.default;Object.defineProperty($i,"__esModule",{value:!0});$i.default=void 0;var Ea=Du(Iu),Pu=Ki,Nu=(0,Ea.default)((0,Ea.default)({},Pu.commonLocale),{},{locale:"de_DE",today:"Heute",now:"Jetzt",backToToday:"Zurück zu Heute",ok:"OK",clear:"Zurücksetzen",month:"Monat",year:"Jahr",timeSelect:"Zeit wählen",dateSelect:"Datum wählen",monthSelect:"Wähle einen Monat",yearSelect:"Wähle ein Jahr",decadeSelect:"Wähle ein Jahrzehnt",dateFormat:"D.M.YYYY",dateTimeFormat:"D.M.YYYY HH:mm:ss",previousMonth:"Vorheriger Monat (PageUp)",nextMonth:"Nächster Monat (PageDown)",previousYear:"Vorheriges Jahr (Ctrl + left)",nextYear:"Nächstes Jahr (Ctrl + right)",previousDecade:"Vorheriges Jahrzehnt",nextDecade:"Nächstes Jahrzehnt",previousCentury:"Vorheriges Jahrhundert",nextCentury:"Nächstes Jahrhundert"});$i.default=Nu;var Yr={};Object.defineProperty(Yr,"__esModule",{value:!0});Yr.default=void 0;const Ou={placeholder:"Zeit auswählen",rangePlaceholder:["Startzeit","Endzeit"]};Yr.default=Ou;var nc=Hi.default;Object.defineProperty(jr,"__esModule",{value:!0});jr.default=void 0;var Lu=nc($i),Fu=nc(Yr);const Bu={lang:Object.assign({placeholder:"Datum auswählen",rangePlaceholder:["Startdatum","Enddatum"],shortWeekDays:["So","Mo","Di","Mi","Do","Fr","Sa"],shortMonths:["Jan","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"]},Lu.default),timePickerLocale:Object.assign({},Fu.default)};jr.default=Bu;var Uu=Hi.default;Object.defineProperty(Yi,"__esModule",{value:!0});Yi.default=void 0;var ku=Uu(jr);Yi.default=ku.default;var qi=Hi.default;Object.defineProperty(Gi,"__esModule",{value:!0});Gi.default=void 0;var Hu=qi(ji),zu=qi(Yi),Vu=qi(jr),Wu=qi(Yr);const ze="${label} ist nicht gültig. ${type} erwartet",Gu={locale:"de",Pagination:Hu.default,DatePicker:Vu.default,TimePicker:Wu.default,Calendar:zu.default,global:{placeholder:"Bitte auswählen"},Table:{filterTitle:"Filter-Menü",filterConfirm:"OK",filterReset:"Zurücksetzen",filterEmptyText:"Keine Filter",filterSearchPlaceholder:"Suche in Filtern",filterCheckall:"Alle auswählen",selectAll:"Selektiere Alle",selectInvert:"Selektion Invertieren",selectionAll:"Wählen Sie alle Daten aus",sortTitle:"Sortieren",emptyText:"Keine Daten",expand:"Zeile erweitern",collapse:"Zeile reduzieren",triggerDesc:"Klicken zur absteigenden Sortierung",triggerAsc:"Klicken zur aufsteigenden Sortierung",cancelSort:"Klicken zum Abbrechen der Sortierung"},Tour:{Next:"Weiter",Previous:"Zurück",Finish:"Fertig"},Modal:{okText:"OK",cancelText:"Abbrechen",justOkText:"OK"},Popconfirm:{okText:"OK",cancelText:"Abbrechen"},Transfer:{titles:["",""],searchPlaceholder:"Suchen",itemUnit:"Eintrag",itemsUnit:"Einträge",remove:"Entfernen",selectCurrent:"Alle auf aktueller Seite auswählen",removeCurrent:"Auswahl auf aktueller Seite aufheben",selectAll:"Alle auswählen",removeAll:"Auswahl aufheben",selectInvert:"Auswahl umkehren"},Upload:{uploading:"Hochladen...",removeFile:"Datei entfernen",uploadError:"Fehler beim Hochladen",previewFile:"Dateivorschau",downloadFile:"Download-Datei"},Empty:{description:"Keine Daten"},Text:{edit:"Bearbeiten",copy:"Kopieren",copied:"Kopiert",expand:"Erweitern"},Form:{defaultValidateMessages:{default:"Feld-Validierungsfehler: ${label}",required:"Bitte geben Sie ${label} an",enum:"${label} muss eines der folgenden sein [${enum}]",whitespace:"${label} darf kein Leerzeichen sein",date:{format:"${label} ist ein ungültiges Datumsformat",parse:"${label} kann nicht in ein Datum umgewandelt werden",invalid:"${label} ist ein ungültiges Datum"},types:{string:ze,method:ze,array:ze,object:ze,number:ze,date:ze,boolean:ze,integer:ze,float:ze,regexp:ze,email:ze,url:ze,hex:ze},string:{len:"${label} muss genau ${len} Zeichen lang sein",min:"${label} muss mindestens ${min} Zeichen lang sein",max:"${label} darf höchstens ${max} Zeichen lang sein",range:"${label} muss zwischen ${min} und ${max} Zeichen lang sein"},number:{len:"${label} muss gleich ${len} sein",min:"${label} muss mindestens ${min} sein",max:"${label} darf maximal ${max} sein",range:"${label} muss zwischen ${min} und ${max} liegen"},array:{len:"Es müssen ${len} ${label} sein",min:"Es müssen mindestens ${min} ${label} sein",max:"Es dürfen maximal ${max} ${label} sein",range:"Die Anzahl an ${label} muss zwischen ${min} und ${max} liegen"},pattern:{mismatch:"${label} entspricht nicht dem ${pattern} Muster"}}},Image:{preview:"Vorschau"},QRCode:{expired:"QR-Code abgelaufen",refresh:"Aktualisieren"}};Gi.default=Gu;var ju=Gi;const Yu=iu(ju),Xi=(t,e,r)=>ki(e,r)??t,$u=(t,e,r,i)=>Xi(t,{...t,year:e,dayOfYear:r},i),Ku=(t,e,r=new Date)=>{const i=xs(r,t.timeZone);return Xi(t,{...i,minutes:t.minutes},e)},qu=(t,e,r=new Date)=>{const i=xs(r,t.timeZone);return ki(i,e)??t},Xu=(t,e)=>({latitude:(t==null?void 0:t.latitude)??e.latitude,longitude:(t==null?void 0:t.longitude)??e.longitude}),Qu=(t,e)=>t.latitude===e.latitude&&t.longitude===e.longitude,Ra=(t,e,r)=>{const i=t==null?void 0:t.getCenter();return Xu(i?{latitude:i.lat,longitude:i.lng}:null,{latitude:e,longitude:r})},sc=(t,e,r)=>{const[i,n]=V.useState(()=>Ra(t,e,r));return V.useEffect(()=>{const s=()=>{const a=Ra(t,e,r);n(o=>Qu(o,a)?o:a)};if(s(),!!t)return t.on(ye.MOVE_END,s),()=>{t.off(ye.MOVE_END,s)}},[e,r,t]),i},Tr="flex h-9 min-w-0 items-center justify-center whitespace-nowrap rounded-md border border-neutral-300 bg-white px-1 text-center text-sm text-neutral-800 transition-colors hover:border-amber-500 hover:text-amber-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/40",Aa="h-8 whitespace-nowrap border-r border-neutral-300 px-3 text-sm text-neutral-700 transition-colors last:border-r-0 hover:text-amber-700",Jg=[{label:"120 FPS",value:Ke.FPS_120},{label:"60 FPS",value:Ke.FPS_60},{label:"30 FPS",value:Ke.FPS_30},{label:"Ultra",value:Ke.ULTRA}],ev=[{label:"0,25 px",value:.25},{label:"0,5 px",value:.5},{label:"1 px",value:1},{label:"2 px",value:2},{label:"4 px",value:4}],tv=[{value:dt.HDR_16,label:"HDR · 16 Bit (Experiment)"},{value:dt.HDR_16_32,label:"HDR · 16/32 Bit (Standard)"},{value:dt.HDR_32,label:"HDR · 32 Bit (ohne MSAA)"},{value:dt.SDR_8,label:"SDR · 8 Bit (Experiment)"}],Zu=t=>`${String(t).padStart(2,"0")}:00`,ac=(t,e,r)=>({"--shadow-range-progress":`${r>e?Math.max(0,Math.min(100,(t-e)/(r-e)*100)):0}%`});var Ju={exports:{}};(function(t,e){(function(r,i){t.exports=i(fu)})(nu,function(r){function i(c){return c&&typeof c=="object"&&"default"in c?c:{default:c}}var n=i(r),s={s:"ein paar Sekunden",m:["eine Minute","einer Minute"],mm:"%d Minuten",h:["eine Stunde","einer Stunde"],hh:"%d Stunden",d:["ein Tag","einem Tag"],dd:["%d Tage","%d Tagen"],M:["ein Monat","einem Monat"],MM:["%d Monate","%d Monaten"],y:["ein Jahr","einem Jahr"],yy:["%d Jahre","%d Jahren"]};function a(c,l,u){var d=s[u];return Array.isArray(d)&&(d=d[l?0:1]),d.replace("%d",c)}var o={name:"de",weekdays:"Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),weekdaysShort:"So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),weekdaysMin:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),months:"Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sept._Okt._Nov._Dez.".split("_"),ordinal:function(c){return c+"."},weekStart:1,yearStart:4,formats:{LTS:"HH:mm:ss",LT:"HH:mm",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY HH:mm",LLLL:"dddd, D. MMMM YYYY HH:mm"},relativeTime:{future:"in %s",past:"vor %s",s:a,m:a,mm:a,h:a,hh:a,d:a,dd:a,M:a,MM:a,y:a,yy:a}};return n.default.locale(o,null,!0),o})})(Ju);const ed=({config:t,libreMap:e,state:r,setState:i,dateState:n,setDateState:s})=>{const{latitude:a=Ri.latitude,longitude:o=Ri.longitude}=t??{},c=sc(e,a,o),[l,u]=V.useState(!1),d=n,g=V.useMemo(()=>d?ko(d,c):null,[c,d]),p=V.useMemo(()=>d?pu(new Date(Date.UTC(d.year,0,d.dayOfYear))).locale("de"):null,[d]);if(!r||!d||!g||!p)return null;const h=Math.ceil(g.sunriseMinutes),S=Math.floor(g.sunsetMinutes),f=v=>{s(Xi(d,v,c))};return N.jsx("div",{className:"shadow-simulation-header-controls text-sm text-neutral-700","data-test-id":"shadow-simulation-header-controls",children:N.jsxs("div",{className:"shadow-simulation-header-layout",children:[N.jsxs("div",{className:"shadow-simulation-header-date grid grid-cols-[28px_minmax(0,118px)_28px] items-center",children:[N.jsx("button",{type:"button",className:"flex h-9 w-7 items-center justify-center rounded-full hover:bg-neutral-100","aria-label":"Vorheriger Tag",onClick:()=>f({...d,...is(d,-1)}),children:N.jsx(Ot,{icon:su})}),N.jsxs("div",{className:"relative min-w-0 justify-self-center",children:[N.jsxs("button",{type:"button",className:"flex h-9 max-w-full items-center gap-1.5 whitespace-nowrap rounded-md px-1 tabular-nums hover:bg-neutral-100","aria-label":"Datum auswählen","aria-expanded":l,onClick:()=>u(!0),children:[N.jsx(Ot,{icon:au,className:"shrink-0 text-neutral-500"}),N.jsx("span",{className:"truncate",children:bl(d,!1)})]}),N.jsx(gu,{open:l,value:p,locale:Yu.DatePicker,format:"D. MMMM YYYY",allowClear:!1,inputReadOnly:!0,getPopupContainer:v=>v.parentElement??v,onOpenChange:u,onChange:v=>{v&&(f({...d,year:v.year(),dayOfYear:Ho(v.year(),v.month(),v.date())}),u(!1))},className:"pointer-events-none absolute left-0 top-full h-0 w-0 overflow-hidden p-0 opacity-0","aria-label":"Datum auswählen"})]}),N.jsx("button",{type:"button",className:"flex h-9 w-7 items-center justify-center rounded-full hover:bg-neutral-100","aria-label":"Nächster Tag",onClick:()=>f({...d,...is(d,1)}),children:N.jsx(Ot,{icon:ou})})]}),N.jsx("span",{className:"shadow-simulation-header-divider h-7 w-px bg-neutral-200","aria-hidden":"true"}),N.jsxs("label",{className:"shadow-simulation-header-time m-0 flex h-9 w-fit cursor-pointer items-center gap-1.5 rounded-md px-1 hover:bg-neutral-100",children:[N.jsx(Ot,{icon:cu,className:"shrink-0 text-neutral-500"}),N.jsx("input",{type:"time",value:Rn(d.minutes),min:Rn(h),max:Rn(S),step:60,onClick:v=>{try{v.currentTarget.showPicker()}catch{return}},onChange:v=>{const[b,R]=v.currentTarget.value.split(":").map(Number);!Number.isFinite(b)||!Number.isFinite(R)||f({...d,minutes:b*60+R})},className:"shadow-simulation-time-input w-[46px] cursor-pointer bg-transparent p-0 text-sm font-medium leading-none tabular-nums text-neutral-800 outline-none","aria-label":"Uhrzeit auswählen","data-test-id":"shadow-simulation-time-input"})]}),N.jsx("input",{type:"range",min:h,max:S,step:1,value:d.minutes,onChange:v=>f({...d,minutes:Number(v.currentTarget.value)}),className:"shadow-simulation-header-range shadow-simulation-range cursor-pointer",style:ac(d.minutes,h,S),"aria-label":"Uhrzeit","data-test-id":"shadow-simulation-ribbon-time"}),N.jsx("button",{type:"button",className:"shadow-simulation-header-play flex h-9 w-9 items-center justify-center rounded-full bg-amber-50 text-amber-600 hover:bg-amber-100","aria-label":r.isAnimating?"Animation pausieren":"Animation starten","aria-pressed":r.isAnimating??!1,onClick:()=>i({...r,isAnimating:!r.isAnimating}),children:N.jsx(Ot,{icon:r.isAnimating?lu:uu})})]})})},Ca=[[0,1],[1,3],[3,2],[2,0],[4,5],[5,7],[7,6],[6,4],[0,4],[1,5],[2,6],[3,7]],td=({min:t,max:e})=>[new T(t.x,t.y,t.z),new T(e.x,t.y,t.z),new T(t.x,e.y,t.z),new T(e.x,e.y,t.z),new T(t.x,t.y,e.z),new T(e.x,t.y,e.z),new T(t.x,e.y,e.z),new T(e.x,e.y,e.z)],rd=t=>[t.coordinateSystem===Ml?0:-1,1].flatMap(r=>[-1,1].flatMap(i=>[-1,1].map(n=>new T(n,i,r).unproject(t)))),Pn=(t,e,r)=>t.every(i=>i.distanceToPoint(e)>=-r),Ia=(t,e,r)=>e.x>=t.min.x-r&&e.x<=t.max.x+r&&e.y>=t.min.y-r&&e.y<=t.max.y+r&&e.z>=t.min.z-r&&e.z<=t.max.z+r,os=(t,e,r)=>{t.some(i=>i.distanceToSquared(e)<=r)||t.push(e)},Da=(t,e,r,i,n,s)=>{const a=e.clone().sub(t);for(const o of r){const c=o.distanceToPoint(t),l=o.distanceToPoint(e),u=c-l;if(Math.abs(u)<=Number.EPSILON)continue;const d=c/u;if(d<0||d>1)continue;const g=t.clone().addScaledVector(a,d);i(g)&&os(n,g,s)}},oc=(t,e,r=1e-6)=>{if(e.isEmpty())return[];t.updateMatrixWorld(!0);const i=new Gr().setFromProjectionMatrix(new ee().multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),t.coordinateSystem,t.reversedDepth);if(!i.intersectsBox(e))return[];const n=r*r,s=td(e),a=rd(t),o=[];for(const l of s)Pn(i.planes,l,r)&&os(o,l,n);for(const l of a)Ia(e,l,r)&&os(o,l,n);for(const[l,u]of Ca)Da(s[l],s[u],i.planes,d=>Pn(i.planes,d,r),o,n);const c=[new lt(new T(1,0,0),-e.min.x),new lt(new T(-1,0,0),e.max.x),new lt(new T(0,1,0),-e.min.y),new lt(new T(0,-1,0),e.max.y),new lt(new T(0,0,1),-e.min.z),new lt(new T(0,0,-1),e.max.z)];for(const[l,u]of Ca)Da(a[l],a[u],c,d=>Ia(e,d,r)&&Pn(i.planes,d,r),o,n);return o},cc=(t,e)=>{const r=$r(t).map(o=>new re(o.x,o.y,o.z,1).applyMatrix4(e));if(r.some(o=>o.w<=0))return new re(0,0,1,1);const i=Math.max(0,(Math.min(...r.map(o=>o.x/o.w))+1)/2),n=Math.max(0,(Math.min(...r.map(o=>o.y/o.w))+1)/2),s=Math.min(1,(Math.max(...r.map(o=>o.x/o.w))+1)/2),a=Math.min(1,(Math.max(...r.map(o=>o.y/o.w))+1)/2);return new re(i,n,Math.max(0,s-i),Math.max(0,a-n))},$r=t=>[t.min.x,t.max.x].flatMap(e=>[t.min.y,t.max.y].flatMap(r=>[t.min.z,t.max.z].map(i=>new T(e,r,i)))),lc=(t,e,r)=>{const i=e.elements,n=$r(t).map(o=>new re(o.x,o.y,o.z,1).applyMatrix4(e)),s=Math.min(...n.map(o=>o.w));if(s<=0)return 1/0;let a=0;for(const[o,c]of[[0,r.x],[1,r.y]])for(let l=0;l<3;l+=1){const u=Math.max(...n.map(d=>Math.abs(i[l*4+o]*d.w-(o===0?d.x:d.y)*i[l*4+3])));a+=(c*.5*u/(s*s))**2}return Math.sqrt(a)},id=(t,e,r,i)=>{if(!(i>0&&Number.isFinite(i))||!(r.x>0&&r.y>0))throw new RangeError("Shadow page projection requires a positive pixel target and viewport");const n=new ee().multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),s=new Set;for(const{id:o,bounds:c}of t){if(s.has(o)||c.isEmpty()||![...c.min.toArray(),...c.max.toArray()].every(Number.isFinite))throw new RangeError("Receiver cells require unique IDs and finite, nonempty bounds");s.add(o)}const a=new Gr().setFromProjectionMatrix(n);return t.filter(({bounds:o})=>a.intersectsBox(o)).map(o=>({...o,screenBounds:cc(o.bounds,n),groundTexelTargetMeters:Math.max(1e-9,i/lc(o.bounds,n,r))}))},nd=(t,e,r,i,n)=>t.clone().union(t.clone().translate(e.clone().normalize().multiplyScalar(r))).expandByScalar(2*r*Math.sin(i/2)+n),sd=(t,e)=>t.flatMap(({bounds:r})=>oc(e,r).length>0?$r(r):[]),di={WEST:"west",EAST:"east",SOUTH:"south",NORTH:"north"},br=({bounds:t})=>(t.max.x-t.min.x)*(t.max.z-t.min.z),ad=(t,e)=>t.min.z===e.min.z&&t.max.z===e.max.z&&(t.max.x===e.min.x||e.max.x===t.min.x)||t.min.x===e.min.x&&t.max.x===e.max.x&&(t.max.z===e.min.z||e.max.z===t.min.z),od=t=>{const e=new Map(t.map(i=>[i.id,i]));let r=!0;for(;r;){r=!1;for(const i of e.values()){if(Math.min(i.bounds.max.x-i.bounds.min.x,i.bounds.max.z-i.bounds.min.z)>=i.fragmentMergeWidthMeters)continue;const s=br(i),a=[...e.values()].filter(o=>o!==i&&(br(o)>s||br(o)===s&&o.id<i.id)&&ad(i.bounds,o.bounds)).sort((o,c)=>br(c)-br(o)||(o.id<c.id?-1:o.id>c.id?1:0))[0];if(a){e.set(a.id,{...a,bounds:a.bounds.clone().union(i.bounds)}),e.delete(i.id),r=!0;break}}}return[...e.values()].map(({id:i,bounds:n})=>({id:i,bounds:n}))},Nn=t=>({west:t.min.x,east:t.max.x,south:t.min.z,north:t.max.z}),uc=(t,e)=>t.west<e.east&&t.east>e.west&&t.south<e.north&&t.north>e.south,cd=(t,e,r)=>{if(!uc(t,e))return[t];const i=Math.max(t.west,e.west),n=Math.min(t.east,e.east),s=Math.max(t.south,e.south),a=Math.min(t.north,e.north);return[{...t,east:i,side:di.WEST},{...t,west:n,side:di.EAST},{west:i,east:n,south:t.south,north:s,side:di.SOUTH},{west:i,east:n,south:a,north:t.north,side:di.NORTH}].filter(o=>o.west<o.east&&o.south<o.north).map(({side:o,...c})=>({...c,splitPath:[...t.splitPath,r,o]}))},ld=t=>{const e=new Set;for(const{id:n,bounds:s}of t){if(e.has(n)||s.isEmpty()||![...s.min.toArray(),...s.max.toArray()].every(Number.isFinite))throw new RangeError("Receiver tiles require unique IDs and finite bounds");e.add(n)}const r=[...t].sort((n,s)=>n.id<s.id?-1:n.id>s.id?1:0);if(r.every(({receiverObjectId:n})=>n!==void 0))return r;const i=r.flatMap(({id:n,bounds:s},a)=>{const o=Nn(s);return o.west===o.east||o.south===o.north?[]:r.slice(0,a).reduce((l,u)=>l.flatMap(d=>cd(d,Nn(u.bounds),u.id)),[{...o,splitPath:[]}]).map(l=>{const u=r.reduce((d,g)=>uc(l,Nn(g.bounds))?[Math.min(d[0],g.bounds.min.y),Math.max(d[1],g.bounds.max.y)]:d,[s.min.y,s.max.y]);return{fragmentMergeWidthMeters:l.splitPath.length===0?0:Math.max(.1,.01*Math.min(o.east-o.west,o.north-o.south)),id:l.splitPath.length===0?n:JSON.stringify([n,...l.splitPath]),bounds:new Le(new T(l.west,u[0],l.south),new T(l.east,u[1],l.north))}})});return od(i)},ud=(t,e=16)=>{if(!Number.isInteger(e)||e<=0||t.length===0)return[];const i=t.reduce((c,l)=>c.union(l.bounds),new Le).getCenter(new T),n=new Set(t.map(({id:c})=>c)),s=new Map;for(const c of t){const l=c.bounds.max.x-c.bounds.min.x;if(!(l>0&&Number.isFinite(l)))continue;const u=Math.round(c.bounds.min.x/l),d=Math.round(c.bounds.min.z/l);for(let g=-1;g<=1;g+=1)for(let p=-1;p<=1;p+=1){const h=`${l}:${u+g}:${d+p}`;n.has(h)||s.has(h)||s.set(h,{id:h,bounds:c.bounds.clone().translate(new T(g*l,0,p*l))})}}const a=Array.from({length:8},()=>[]);for(const c of s.values()){const l=c.bounds.getCenter(new T).sub(i),u=(Math.round(Math.atan2(l.z,l.x)/(Math.PI/4))+8)%8;a[u].push(c)}for(const c of a)c.sort((l,u)=>l.bounds.distanceToPoint(i)-u.bounds.distanceToPoint(i)||l.id.localeCompare(u.id));const o=[];for(let c=0;o.length<e;c+=1){const l=a.flatMap(u=>u[c]?[u[c]]:[]);if(l.length===0)break;o.push(...l.slice(0,e-o.length))}return o},dd=(t,e)=>{const r=t.getCenter(new T);let i=null,n=1/0;for(const s of e){const a=s.receiverBounds.distanceToPoint(r);a<n&&Number.isInteger(s.terrainLevel)&&(n=a,i=s.terrainLevel)}return i};/**
 * postprocessing v6.39.4 build Mon Jul 27 2026
 * https://github.com/pmndrs/postprocessing
 * Copyright 2015-2026 Raoul van Rüschen
 * @license Zlib
 */var hd=(()=>{const t=new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),e=new Float32Array([0,0,2,0,0,2]),r=new Go;return r.setAttribute("position",new Sa(t,3)),r.setAttribute("uv",new Sa(e,2)),r})(),md=class cs{static get fullscreenGeometry(){return hd}constructor(e="Pass",r=new Br,i=new bs){this.name=e,this.renderer=null,this.scene=r,this.camera=i,this.screen=null,this.rtt=!0,this.needsSwap=!0,this.needsDepthBlit=!1,this.needsDepthTexture=!1,this.enabled=!0}get renderToScreen(){return!this.rtt}set renderToScreen(e){if(this.rtt===e){const r=this.fullscreenMaterial;r!==null&&(r.needsUpdate=!0),this.rtt=!e}}set mainScene(e){}set mainCamera(e){}setRenderer(e){this.renderer=e}isEnabled(){return this.enabled}setEnabled(e){this.enabled=e}get fullscreenMaterial(){return this.screen!==null?this.screen.material:null}set fullscreenMaterial(e){let r=this.screen;r!==null?r.material=e:(r=new Wr(cs.fullscreenGeometry,e),r.frustumCulled=!1,this.scene===null&&(this.scene=new Br),this.scene.add(r),this.screen=r)}getFullscreenMaterial(){return this.fullscreenMaterial}setFullscreenMaterial(e){this.fullscreenMaterial=e}getDepthTexture(){return null}setDepthTexture(e,r=Vo){}render(e,r,i,n,s){throw new Error("Render method not implemented!")}setSize(e,r){}initialize(e,r,i){}dispose(){for(const e of Object.keys(this)){const r=this[e];(r instanceof $e||r instanceof zi||r instanceof Wo||r instanceof cs)&&this[e].dispose()}this.fullscreenMaterial!==null&&this.fullscreenMaterial.dispose()}},dc={NONE:0,DEPTH:1,CONVOLUTION:2},Z={SKIP:9,SET:30,ADD:0,ALPHA:1,AVERAGE:2,COLOR:3,COLOR_BURN:4,COLOR_DODGE:5,DARKEN:6,DIFFERENCE:7,DIVIDE:8,DST:9,EXCLUSION:10,HARD_LIGHT:11,HARD_MIX:12,HUE:13,INVERT:14,INVERT_RGB:15,LIGHTEN:16,LINEAR_BURN:17,LINEAR_DODGE:18,LINEAR_LIGHT:19,LUMINOSITY:20,MULTIPLY:21,NEGATION:22,NORMAL:23,OVERLAY:24,PIN_LIGHT:25,REFLECT:26,SATURATION:27,SCREEN:28,SOFT_LIGHT:29,SRC:30,SUBTRACT:31,VIVID_LIGHT:32},fd="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",pd="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,src.a*opacity);}",gd="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=(dst.rgb+src.rgb)*0.5;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",vd="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.xy,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",yd="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=mix(step(0.0,b)*(1.0-min(vec3(1.0),(1.0-a)/max(b,1e-9))),vec3(1.0),step(1.0,a));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Sd="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=step(0.0,a)*mix(min(vec3(1.0),a/max(1.0-b,1e-9)),vec3(1.0),step(1.0,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",wd="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",_d="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=abs(dst.rgb-src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",xd="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb/max(src.rgb,1e-9);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Td="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-2.0*dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",bd="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb,1.0);vec3 b=min(src.rgb,1.0);vec3 c=mix(2.0*a*b,1.0-2.0*(1.0-a)*(1.0-b),step(0.5,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Md="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=step(1.0,dst.rgb+src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Ed="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.x,a.yz));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Rd="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Ad="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=src.rgb*max(1.0-dst.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Cd="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Id="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Dd="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb+src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Pd="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(2.0*src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Nd="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.xy,b.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Od="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Ld="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-abs(1.0-dst.rgb-src.rgb),0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Fd="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,opacity);}",Bd="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=2.0*src.rgb*dst.rgb;vec3 b=1.0-2.0*(1.0-src.rgb)*(1.0-dst.rgb);vec3 c=mix(a,b,step(0.5,dst.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Ud="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 c=mix(mix(src2,dst.rgb,step(0.5*dst.rgb,src.rgb)),max(src2-1.0,vec3(0.0)),step(dst.rgb,src2-1.0));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",kd="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb*dst.rgb/max(1.0-src.rgb,1e-9),1.0);vec3 c=mix(a,src.rgb,step(1.0,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Hd="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.x,b.y,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",zd="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-min(dst.rgb*src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Vd="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 d=dst.rgb+(src2-1.0);vec3 w=step(0.5,src.rgb);vec3 a=dst.rgb-(1.0-src2)*dst.rgb*(1.0-dst.rgb);vec3 b=mix(d*(sqrt(dst.rgb)-dst.rgb),d*dst.rgb*((16.0*dst.rgb-12.0)*dst.rgb+3.0),w*(1.0-step(0.25,dst.rgb)));vec3 c=mix(a,b,w);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Wd="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return src;}",Gd="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",jd="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=mix(max(1.0-min((1.0-dst.rgb)/(2.0*src.rgb),1.0),0.0),min(dst.rgb/(2.0*(1.0-src.rgb)),1.0),step(0.5,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Yd=new Map([[Z.ADD,fd],[Z.ALPHA,pd],[Z.AVERAGE,gd],[Z.COLOR,vd],[Z.COLOR_BURN,yd],[Z.COLOR_DODGE,Sd],[Z.DARKEN,wd],[Z.DIFFERENCE,_d],[Z.DIVIDE,xd],[Z.DST,null],[Z.EXCLUSION,Td],[Z.HARD_LIGHT,bd],[Z.HARD_MIX,Md],[Z.HUE,Ed],[Z.INVERT,Rd],[Z.INVERT_RGB,Ad],[Z.LIGHTEN,Cd],[Z.LINEAR_BURN,Id],[Z.LINEAR_DODGE,Dd],[Z.LINEAR_LIGHT,Pd],[Z.LUMINOSITY,Nd],[Z.MULTIPLY,Od],[Z.NEGATION,Ld],[Z.NORMAL,Fd],[Z.OVERLAY,Bd],[Z.PIN_LIGHT,Ud],[Z.REFLECT,kd],[Z.SATURATION,Hd],[Z.SCREEN,zd],[Z.SOFT_LIGHT,Vd],[Z.SRC,Wd],[Z.SUBTRACT,Gd],[Z.VIVID_LIGHT,jd]]),$d=class extends zo{constructor(t,e=1){super(),this._blendFunction=t,this.opacity=new I(e)}getOpacity(){return this.opacity.value}setOpacity(t){this.opacity.value=t}get blendFunction(){return this._blendFunction}set blendFunction(t){this._blendFunction=t,this.dispatchEvent({type:"change"})}getBlendFunction(){return this.blendFunction}setBlendFunction(t){this.blendFunction=t}getShaderCode(){return Yd.get(this.blendFunction)}},Kd=class extends zo{constructor(t,e,{attributes:r=dc.NONE,blendFunction:i=Z.NORMAL,defines:n=new Map,uniforms:s=new Map,extensions:a=null,vertexShader:o=null}={}){super(),this.name=t,this.renderer=null,this.attributes=r,this.fragmentShader=e,this.vertexShader=o,this.defines=n,this.uniforms=s,this.extensions=a,this.blendMode=new $d(i),this.blendMode.addEventListener("change",c=>this.setChanged()),this._inputColorSpace=El,this._outputColorSpace=Rl}get inputColorSpace(){return this._inputColorSpace}set inputColorSpace(t){this._inputColorSpace=t,this.setChanged()}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t,this.setChanged()}set mainScene(t){}set mainCamera(t){}getName(){return this.name}setRenderer(t){this.renderer=t}getDefines(){return this.defines}getUniforms(){return this.uniforms}getExtensions(){return this.extensions}getBlendMode(){return this.blendMode}getAttributes(){return this.attributes}setAttributes(t){this.attributes=t,this.setChanged()}getFragmentShader(){return this.fragmentShader}setFragmentShader(t){this.fragmentShader=t,this.setChanged()}getVertexShader(){return this.vertexShader}setVertexShader(t){this.vertexShader=t,this.setChanged()}setChanged(){this.dispatchEvent({type:"change"})}setDepthTexture(t,e=Vo){}update(t,e,r){}setSize(t,e){}initialize(t,e,r){}dispose(){for(const t of Object.keys(this)){const e=this[t];(e instanceof $e||e instanceof zi||e instanceof Wo||e instanceof md)&&this[t].dispose()}}};const qd=new T;function hc(t,e,r=new T,i){const{x:n,y:s,z:a}=t,o=e.x,c=e.y,l=e.z,u=n*n*o,d=s*s*c,g=a*a*l,p=u+d+g,h=Math.sqrt(1/p);if(!Number.isFinite(h))return;const S=qd.copy(t).multiplyScalar(h);if(p<((i==null?void 0:i.centerTolerance)??.1))return r.copy(S);const f=S.multiply(e).multiplyScalar(2);let v=(1-h)*t.length()/(f.length()/2),b=0,R,A,M,C;do{v-=b,R=1/(1+v*o),A=1/(1+v*c),M=1/(1+v*l);const E=R*R,F=A*A,k=M*M,U=E*R,G=F*A,Y=k*M;C=u*E+d*F+g*k-1,b=C/((u*U*o+d*G*c+g*Y*l)*-2)}while(Math.abs(C)>1e-12);return r.set(n*R,s*A,a*M)}const hi=new T,Pa=new T,Na=new T,ls=class{constructor(e,r,i){this.radii=new T(e,r,i)}get minimumRadius(){return Math.min(this.radii.x,this.radii.y,this.radii.z)}get maximumRadius(){return Math.max(this.radii.x,this.radii.y,this.radii.z)}reciprocalRadii(e=new T){const{x:r,y:i,z:n}=this.radii;return e.set(1/r,1/i,1/n)}reciprocalRadiiSquared(e=new T){const{x:r,y:i,z:n}=this.radii;return e.set(1/r**2,1/i**2,1/n**2)}projectOnSurface(e,r=new T,i){return hc(e,this.reciprocalRadiiSquared(),r,i)}getSurfaceNormal(e,r=new T){return r.multiplyVectors(this.reciprocalRadiiSquared(hi),e).normalize()}getEastNorthUpVectors(e,r=new T,i=new T,n=new T){this.getSurfaceNormal(e,n),r.set(-e.y,e.x,0).normalize(),i.crossVectors(n,r).normalize()}getEastNorthUpFrame(e,r=new ee){const i=hi,n=Pa,s=Na;return this.getEastNorthUpVectors(e,i,n,s),r.makeBasis(i,n,s).setPosition(e)}getIntersection(e,r=new T){const i=this.reciprocalRadii(hi),n=Pa.copy(i).multiply(e.origin),s=Na.copy(i).multiply(e.direction),a=n.lengthSq(),o=s.lengthSq(),c=n.dot(s),l=c**2-o*(a-1);if(a===1)return r.copy(e.origin);if(a>1){if(c>=0||l<0)return;const u=Math.sqrt(l),d=(-c-u)/o,g=(-c+u)/o;return e.at(Math.min(d,g),r)}if(a<1){const u=c**2-o*(a-1),d=Math.sqrt(u),g=(-c+d)/o;return e.at(g,r)}if(c<0)return e.at(-c/o,r)}getOsculatingSphereCenter(e,r,i=new T){const n=this.radii.x**2,s=hi.set(e.x/n,e.y/n,e.z/this.radii.z**2).normalize();return i.copy(s.multiplyScalar(-r).add(e))}};ls.WGS84=new ls(6378137,6378137,6356752314245179e-9);let ht=ls;const mi=new T,Oa=new T,Cr=class us{constructor(e=0,r=0,i=0){this.longitude=e,this.latitude=r,this.height=i}set(e,r,i){return this.longitude=e,this.latitude=r,i!=null&&(this.height=i),this}clone(){return new us(this.longitude,this.latitude,this.height)}copy(e){return this.longitude=e.longitude,this.latitude=e.latitude,this.height=e.height,this}equals(e){return e.longitude===this.longitude&&e.latitude===this.latitude&&e.height===this.height}setLongitude(e){return this.longitude=e,this}setLatitude(e){return this.latitude=e,this}setHeight(e){return this.height=e,this}normalize(){return this.longitude<us.MIN_LONGITUDE&&(this.longitude+=Math.PI*2),this}setFromECEF(e,r){const i=((r==null?void 0:r.ellipsoid)??ht.WGS84).reciprocalRadiiSquared(mi),n=hc(e,i,Oa,r);if(n==null)throw new Error(`Could not project position to ellipsoid surface: ${e.toArray()}`);const s=mi.multiplyVectors(n,i).normalize();this.longitude=Math.atan2(s.y,s.x),this.latitude=Math.asin(s.z);const a=mi.subVectors(e,n);return this.height=Math.sign(a.dot(e))*a.length(),this}toECEF(e=new T,r){const i=(r==null?void 0:r.ellipsoid)??ht.WGS84,n=mi.multiplyVectors(i.radii,i.radii),s=Math.cos(this.latitude),a=Oa.set(s*Math.cos(this.longitude),s*Math.sin(this.longitude),Math.sin(this.latitude)).normalize();return e.multiplyVectors(n,a),e.divideScalar(Math.sqrt(a.dot(e))).add(a.multiplyScalar(this.height))}fromArray(e,r=0){return this.longitude=e[r],this.latitude=e[r+1],this.height=e[r+2],this}toArray(e=[],r=0){return e[r]=this.longitude,e[r+1]=this.latitude,e[r+2]=this.height,e}*[Symbol.iterator](){yield this.longitude,yield this.latitude,yield this.height}};Cr.MIN_LONGITUDE=-Math.PI,Cr.MAX_LONGITUDE=Math.PI,Cr.MIN_LATITUDE=-Math.PI/2,Cr.MAX_LATITUDE=Math.PI/2;let mc=Cr;var Xd="Invariant failed";function fc(t,e){if(!t)throw new Error(Xd)}class Qd extends Es{load(e,r,i,n){const s=new Cl(this.manager);s.setResponseType("arraybuffer"),s.setRequestHeader(this.requestHeader),s.setPath(this.path),s.setWithCredentials(this.withCredentials),s.load(e,a=>{fc(a instanceof ArrayBuffer);try{r(a)}catch(o){n!=null?n(o):console.error(o),this.manager.itemError(e)}},i,n)}}const Zd="This is not an object",Jd="This is not a Float16Array object",La="This constructor is not a subclass of Float16Array",pc="The constructor property value is not an object",eh="Species constructor didn't return TypedArray object",th="Derived constructor created TypedArray object which was too small length",Or="Attempting to access detached ArrayBuffer",ds="Cannot convert undefined or null to object",hs="Cannot mix BigInt and other types, use explicit conversions",Fa="@@iterator property is not callable",Ba="Reduce of empty array with no initial value",rh="The comparison function must be either a function or undefined",On="Offset is out of bounds";function ue(t){return(e,...r)=>Be(t,e,r)}function dr(t,e){return ue(ar(t,e).get)}const{apply:Be,construct:Ir,defineProperty:ih,get:Ln,getOwnPropertyDescriptor:ar,getPrototypeOf:Kr,has:ms,ownKeys:gc,set:Ua,setPrototypeOf:vc}=Reflect,nh=Proxy,{EPSILON:sh,MAX_SAFE_INTEGER:ka,isFinite:yc,isNaN:or}=Number,{iterator:mt,species:ah,toStringTag:Ds,for:oh}=Symbol,cr=Object,{create:Qi,defineProperty:qr,freeze:ch,is:Ha}=cr,fs=cr.prototype,lh=fs.__lookupGetter__?ue(fs.__lookupGetter__):(t,e)=>{if(t==null)throw fe(ds);let r=cr(t);do{const i=ar(r,e);if(i!==void 0)return Et(i,"get")?i.get:void 0}while((r=Kr(r))!==null)},Et=cr.hasOwn||ue(fs.hasOwnProperty),Sc=Array,wc=Sc.isArray,Zi=Sc.prototype,uh=ue(Zi.join),dh=ue(Zi.push),hh=ue(Zi.toLocaleString),Ps=Zi[mt],mh=ue(Ps),{abs:fh,trunc:_c}=Math,Ji=ArrayBuffer,ph=Ji.isView,xc=Ji.prototype,gh=ue(xc.slice),vh=dr(xc,"byteLength"),ps=typeof SharedArrayBuffer<"u"?SharedArrayBuffer:null,yh=ps&&dr(ps.prototype,"byteLength"),Ns=Kr(Uint8Array),Sh=Ns.from,Re=Ns.prototype,wh=Re[mt],_h=ue(Re.keys),xh=ue(Re.values),Th=ue(Re.entries),bh=ue(Re.set),za=ue(Re.reverse),Mh=ue(Re.fill),Eh=ue(Re.copyWithin),Va=ue(Re.sort),Mr=ue(Re.slice),Rh=ue(Re.subarray),Ee=dr(Re,"buffer"),Ut=dr(Re,"byteOffset"),ne=dr(Re,"length"),Tc=dr(Re,Ds),Ah=Uint8Array,Ve=Uint16Array,Wa=(...t)=>Be(Sh,Ve,t),Os=Uint32Array,Ch=Float32Array,Wt=Kr([][mt]()),en=ue(Wt.next),Ih=ue(function*(){}().next),Dh=Kr(Wt),Ph=DataView.prototype,Nh=ue(Ph.getUint16),fe=TypeError,Fn=RangeError,bc=WeakSet,Mc=bc.prototype,Oh=ue(Mc.add),Lh=ue(Mc.has),tn=WeakMap,Ls=tn.prototype,Ci=ue(Ls.get),Fh=ue(Ls.has),Fs=ue(Ls.set),Ec=new tn,Bh=Qi(null,{next:{value:function(){const t=Ci(Ec,this);return en(t)}},[mt]:{value:function(){return this}}});function Dr(t){if(t[mt]===Ps&&Wt.next===en)return t;const e=Qi(Bh);return Fs(Ec,e,mh(t)),e}const Rc=new tn,Ac=Qi(Dh,{next:{value:function(){const t=Ci(Rc,this);return Ih(t)},writable:!0,configurable:!0}});for(const t of gc(Wt))t!=="next"&&qr(Ac,t,ar(Wt,t));function Ga(t){const e=Qi(Ac);return Fs(Rc,e,t),e}function Ii(t){return t!==null&&typeof t=="object"||typeof t=="function"}function ja(t){return t!==null&&typeof t=="object"}function Di(t){return Tc(t)!==void 0}function gs(t){const e=Tc(t);return e==="BigInt64Array"||e==="BigUint64Array"}function Uh(t){try{return wc(t)?!1:(vh(t),!0)}catch{return!1}}function Cc(t){if(ps===null)return!1;try{return yh(t),!0}catch{return!1}}function kh(t){return Uh(t)||Cc(t)}function Ya(t){return wc(t)?t[mt]===Ps&&Wt.next===en:!1}function Hh(t){return Di(t)?t[mt]===wh&&Wt.next===en:!1}function fi(t){if(typeof t!="string")return!1;const e=+t;return t!==e+""||!yc(e)?!1:e===_c(e)}const Pi=oh("__Float16Array__");function zh(t){if(!ja(t))return!1;const e=Kr(t);if(!ja(e))return!1;const r=e.constructor;if(r===void 0)return!1;if(!Ii(r))throw fe(pc);return ms(r,Pi)}const vs=1/sh;function Vh(t){return t+vs-vs}const Ic=6103515625e-14,Wh=65504,Dc=.0009765625,$a=Dc*Ic,Gh=Dc*vs;function jh(t){const e=+t;if(!yc(e)||e===0)return e;const r=e>0?1:-1,i=fh(e);if(i<Ic)return r*Vh(i/$a)*$a;const n=(1+Gh)*i,s=n-(n-i);return s>Wh||or(s)?r*(1/0):r*s}const Pc=new Ji(4),Nc=new Ch(Pc),Oc=new Os(Pc),tt=new Ve(512),rt=new Ah(512);for(let t=0;t<256;++t){const e=t-127;e<-24?(tt[t]=0,tt[t|256]=32768,rt[t]=24,rt[t|256]=24):e<-14?(tt[t]=1024>>-e-14,tt[t|256]=1024>>-e-14|32768,rt[t]=-e-1,rt[t|256]=-e-1):e<=15?(tt[t]=e+15<<10,tt[t|256]=e+15<<10|32768,rt[t]=13,rt[t|256]=13):e<128?(tt[t]=31744,tt[t|256]=64512,rt[t]=24,rt[t|256]=24):(tt[t]=31744,tt[t|256]=64512,rt[t]=13,rt[t|256]=13)}function ot(t){Nc[0]=jh(t);const e=Oc[0],r=e>>23&511;return tt[r]+((e&8388607)>>rt[r])}const Bs=new Os(2048);for(let t=1;t<1024;++t){let e=t<<13,r=0;for(;!(e&8388608);)e<<=1,r-=8388608;e&=-8388609,r+=947912704,Bs[t]=e|r}for(let t=1024;t<2048;++t)Bs[t]=939524096+(t-1024<<13);const hr=new Os(64);for(let t=1;t<31;++t)hr[t]=t<<23;hr[31]=1199570944;hr[32]=2147483648;for(let t=33;t<63;++t)hr[t]=2147483648+(t-32<<23);hr[63]=3347054592;const Lc=new Ve(64);for(let t=1;t<64;++t)t!==32&&(Lc[t]=1024);function se(t){const e=t>>10;return Oc[0]=Bs[Lc[e]+(t&1023)]+hr[e],Nc[0]}function bt(t){const e=+t;return or(e)||e===0?0:_c(e)}function Bn(t){const e=bt(t);return e<0?0:e<ka?e:ka}function pi(t,e){if(!Ii(t))throw fe(Zd);const r=t.constructor;if(r===void 0)return e;if(!Ii(r))throw fe(pc);return r[ah]??e}function Lr(t){if(Cc(t))return!1;try{return gh(t,0,0),!1}catch{}return!0}function Ka(t,e){const r=or(t),i=or(e);if(r&&i)return 0;if(r)return 1;if(i||t<e)return-1;if(t>e)return 1;if(t===0&&e===0){const n=Ha(t,0),s=Ha(e,0);if(!n&&s)return-1;if(n&&!s)return 1}return 0}const Us=2,Ni=new tn;function rr(t){return Fh(Ni,t)||!ph(t)&&zh(t)}function ie(t){if(!rr(t))throw fe(Jd)}function gi(t,e){const r=rr(t),i=Di(t);if(!r&&!i)throw fe(eh);if(typeof e=="number"){let n;if(r){const s=q(t);n=ne(s)}else n=ne(t);if(n<e)throw fe(th)}if(gs(t))throw fe(hs)}function q(t){const e=Ci(Ni,t);if(e!==void 0){const n=Ee(e);if(Lr(n))throw fe(Or);return e}const r=t.buffer;if(Lr(r))throw fe(Or);const i=Ir(oe,[r,t.byteOffset,t.length],t.constructor);return Ci(Ni,i)}function qa(t){const e=ne(t),r=[];for(let i=0;i<e;++i)r[i]=se(t[i]);return r}const Fc=new bc;for(const t of gc(Re)){if(t===Ds)continue;const e=ar(Re,t);Et(e,"get")&&typeof e.get=="function"&&Oh(Fc,e.get)}const Yh=ch({get(t,e,r){return fi(e)&&Et(t,e)?se(Ln(t,e)):Lh(Fc,lh(t,e))?Ln(t,e):Ln(t,e,r)},set(t,e,r,i){return fi(e)&&Et(t,e)?Ua(t,e,ot(r)):Ua(t,e,r,i)},getOwnPropertyDescriptor(t,e){if(fi(e)&&Et(t,e)){const r=ar(t,e);return r.value=se(r.value),r}return ar(t,e)},defineProperty(t,e,r){return fi(e)&&Et(t,e)&&Et(r,"value")&&(r.value=ot(r.value)),ih(t,e,r)}});class oe{constructor(e,r,i){let n;if(rr(e))n=Ir(Ve,[q(e)],new.target);else if(Ii(e)&&!kh(e)){let a,o;if(Di(e)){a=e,o=ne(e);const c=Ee(e);if(Lr(c))throw fe(Or);if(gs(e))throw fe(hs);const l=new Ji(o*Us);n=Ir(Ve,[l],new.target)}else{const c=e[mt];if(c!=null&&typeof c!="function")throw fe(Fa);c!=null?Ya(e)?(a=e,o=e.length):(a=[...e],o=a.length):(a=e,o=Bn(a.length)),n=Ir(Ve,[o],new.target)}for(let c=0;c<o;++c)n[c]=ot(a[c])}else n=Ir(Ve,arguments,new.target);const s=new nh(n,Yh);return Fs(Ni,s,n),s}static from(e,...r){const i=this;if(!ms(i,Pi))throw fe(La);if(i===oe){if(rr(e)&&r.length===0){const u=q(e),d=new Ve(Ee(u),Ut(u),ne(u));return new oe(Ee(Mr(d)))}if(r.length===0)return new oe(Ee(Wa(e,ot)));const c=r[0],l=r[1];return new oe(Ee(Wa(e,function(u,...d){return ot(Be(c,this,[u,...Dr(d)]))},l)))}let n,s;const a=e[mt];if(a!=null&&typeof a!="function")throw fe(Fa);if(a!=null)Ya(e)?(n=e,s=e.length):Hh(e)?(n=e,s=ne(e)):(n=[...e],s=n.length);else{if(e==null)throw fe(ds);n=cr(e),s=Bn(n.length)}const o=new i(s);if(r.length===0)for(let c=0;c<s;++c)o[c]=n[c];else{const c=r[0],l=r[1];for(let u=0;u<s;++u)o[u]=Be(c,l,[n[u],u])}return o}static of(...e){const r=this;if(!ms(r,Pi))throw fe(La);const i=e.length;if(r===oe){const s=new oe(i),a=q(s);for(let o=0;o<i;++o)a[o]=ot(e[o]);return s}const n=new r(i);for(let s=0;s<i;++s)n[s]=e[s];return n}keys(){ie(this);const e=q(this);return _h(e)}values(){ie(this);const e=q(this);return Ga(function*(){for(const r of xh(e))yield se(r)}())}entries(){ie(this);const e=q(this);return Ga(function*(){for(const[r,i]of Th(e))yield[r,se(i)]}())}at(e){ie(this);const r=q(this),i=ne(r),n=bt(e),s=n>=0?n:i+n;if(!(s<0||s>=i))return se(r[s])}with(e,r){ie(this);const i=q(this),n=ne(i),s=bt(e),a=s>=0?s:n+s,o=+r;if(a<0||a>=n)throw Fn(On);const c=new Ve(Ee(i),Ut(i),ne(i)),l=new oe(Ee(Mr(c))),u=q(l);return u[a]=ot(o),l}map(e,...r){ie(this);const i=q(this),n=ne(i),s=r[0],a=pi(i,oe);if(a===oe){const c=new oe(n),l=q(c);for(let u=0;u<n;++u){const d=se(i[u]);l[u]=ot(Be(e,s,[d,u,this]))}return c}const o=new a(n);gi(o,n);for(let c=0;c<n;++c){const l=se(i[c]);o[c]=Be(e,s,[l,c,this])}return o}filter(e,...r){ie(this);const i=q(this),n=ne(i),s=r[0],a=[];for(let l=0;l<n;++l){const u=se(i[l]);Be(e,s,[u,l,this])&&dh(a,u)}const o=pi(i,oe),c=new o(a);return gi(c),c}reduce(e,...r){ie(this);const i=q(this),n=ne(i);if(n===0&&r.length===0)throw fe(Ba);let s,a;r.length===0?(s=se(i[0]),a=1):(s=r[0],a=0);for(let o=a;o<n;++o)s=e(s,se(i[o]),o,this);return s}reduceRight(e,...r){ie(this);const i=q(this),n=ne(i);if(n===0&&r.length===0)throw fe(Ba);let s,a;r.length===0?(s=se(i[n-1]),a=n-2):(s=r[0],a=n-1);for(let o=a;o>=0;--o)s=e(s,se(i[o]),o,this);return s}forEach(e,...r){ie(this);const i=q(this),n=ne(i),s=r[0];for(let a=0;a<n;++a)Be(e,s,[se(i[a]),a,this])}find(e,...r){ie(this);const i=q(this),n=ne(i),s=r[0];for(let a=0;a<n;++a){const o=se(i[a]);if(Be(e,s,[o,a,this]))return o}}findIndex(e,...r){ie(this);const i=q(this),n=ne(i),s=r[0];for(let a=0;a<n;++a){const o=se(i[a]);if(Be(e,s,[o,a,this]))return a}return-1}findLast(e,...r){ie(this);const i=q(this),n=ne(i),s=r[0];for(let a=n-1;a>=0;--a){const o=se(i[a]);if(Be(e,s,[o,a,this]))return o}}findLastIndex(e,...r){ie(this);const i=q(this),n=ne(i),s=r[0];for(let a=n-1;a>=0;--a){const o=se(i[a]);if(Be(e,s,[o,a,this]))return a}return-1}every(e,...r){ie(this);const i=q(this),n=ne(i),s=r[0];for(let a=0;a<n;++a)if(!Be(e,s,[se(i[a]),a,this]))return!1;return!0}some(e,...r){ie(this);const i=q(this),n=ne(i),s=r[0];for(let a=0;a<n;++a)if(Be(e,s,[se(i[a]),a,this]))return!0;return!1}set(e,...r){ie(this);const i=q(this),n=bt(r[0]);if(n<0)throw Fn(On);if(e==null)throw fe(ds);if(gs(e))throw fe(hs);if(rr(e))return bh(q(this),q(e),n);if(Di(e)){const c=Ee(e);if(Lr(c))throw fe(Or)}const s=ne(i),a=cr(e),o=Bn(a.length);if(n===1/0||o+n>s)throw Fn(On);for(let c=0;c<o;++c)i[c+n]=ot(a[c])}reverse(){ie(this);const e=q(this);return za(e),this}toReversed(){ie(this);const e=q(this),r=new Ve(Ee(e),Ut(e),ne(e)),i=new oe(Ee(Mr(r))),n=q(i);return za(n),i}fill(e,...r){ie(this);const i=q(this);return Mh(i,ot(e),...Dr(r)),this}copyWithin(e,r,...i){ie(this);const n=q(this);return Eh(n,e,r,...Dr(i)),this}sort(e){ie(this);const r=q(this),i=e!==void 0?e:Ka;return Va(r,(n,s)=>i(se(n),se(s))),this}toSorted(e){ie(this);const r=q(this);if(e!==void 0&&typeof e!="function")throw new fe(rh);const i=e!==void 0?e:Ka,n=new Ve(Ee(r),Ut(r),ne(r)),s=new oe(Ee(Mr(n))),a=q(s);return Va(a,(o,c)=>i(se(o),se(c))),s}slice(e,r){ie(this);const i=q(this),n=pi(i,oe);if(n===oe){const h=new Ve(Ee(i),Ut(i),ne(i));return new oe(Ee(Mr(h,e,r)))}const s=ne(i),a=bt(e),o=r===void 0?s:bt(r);let c;a===-1/0?c=0:a<0?c=s+a>0?s+a:0:c=s<a?s:a;let l;o===-1/0?l=0:o<0?l=s+o>0?s+o:0:l=s<o?s:o;const u=l-c>0?l-c:0,d=new n(u);if(gi(d,u),u===0)return d;const g=Ee(i);if(Lr(g))throw fe(Or);let p=0;for(;c<l;)d[p]=se(i[c]),++c,++p;return d}subarray(e,r){ie(this);const i=q(this),n=pi(i,oe),s=new Ve(Ee(i),Ut(i),ne(i)),a=Rh(s,e,r),o=new n(Ee(a),Ut(a),ne(a));return gi(o),o}indexOf(e,...r){ie(this);const i=q(this),n=ne(i);let s=bt(r[0]);if(s===1/0)return-1;s<0&&(s+=n,s<0&&(s=0));for(let a=s;a<n;++a)if(Et(i,a)&&se(i[a])===e)return a;return-1}lastIndexOf(e,...r){ie(this);const i=q(this),n=ne(i);let s=r.length>=1?bt(r[0]):n-1;if(s===-1/0)return-1;s>=0?s=s<n-1?s:n-1:s+=n;for(let a=s;a>=0;--a)if(Et(i,a)&&se(i[a])===e)return a;return-1}includes(e,...r){ie(this);const i=q(this),n=ne(i);let s=bt(r[0]);if(s===1/0)return!1;s<0&&(s+=n,s<0&&(s=0));const a=or(e);for(let o=s;o<n;++o){const c=se(i[o]);if(a&&or(c)||c===e)return!0}return!1}join(e){ie(this);const r=q(this),i=qa(r);return uh(i,e)}toLocaleString(...e){ie(this);const r=q(this),i=qa(r);return hh(i,...Dr(e))}get[Ds](){if(rr(this))return"Float16Array"}}qr(oe,"BYTES_PER_ELEMENT",{value:Us});qr(oe,Pi,{});vc(oe,Ns);const Oi=oe.prototype;qr(Oi,"BYTES_PER_ELEMENT",{value:Us});qr(Oi,mt,{value:Oi.values,writable:!0,configurable:!0});vc(Oi,Re);function $h(t,e,...r){return se(Nh(t,e,...Dr(r)))}function Kh(t){return t instanceof Int8Array||t instanceof Uint8Array||t instanceof Uint8ClampedArray||t instanceof Int16Array||t instanceof Uint16Array||t instanceof Int32Array||t instanceof Uint32Array||t instanceof oe||t instanceof Float32Array||t instanceof Float64Array}let vi;function qh(){if(vi!=null)return vi;const t=new Uint32Array([268435456]);return vi=new Uint8Array(t.buffer,t.byteOffset,t.byteLength)[0]===0,vi}function Xh(t,e,r,i=!0){if(i===qh())return new e(t);const n=Object.assign(new DataView(t),{getFloat16(a,o){return $h(this,a,o)}}),s=new e(n.byteLength/e.BYTES_PER_ELEMENT);for(let a=0,o=0;a<s.length;++a,o+=e.BYTES_PER_ELEMENT)s[a]=n[r](o,i);return s}const Un=(t,e)=>Xh(t,oe,"getFloat16",e);class Qh extends Es{load(e,r,i,n){const s=new Qd(this.manager);s.setRequestHeader(this.requestHeader),s.setPath(this.path),s.setWithCredentials(this.withCredentials),s.load(e,a=>{try{r(this.parseTypedArray(a))}catch(o){n!=null?n(o):console.error(o),this.manager.itemError(e)}},i,n)}}function Zh(t){return class extends Qh{constructor(){super(...arguments),this.parseTypedArray=t}}}function Jh(t){const e=t instanceof Int8Array?Il:t instanceof Uint8Array?_a:t instanceof Uint8ClampedArray?_a:t instanceof Int16Array?Dl:t instanceof Uint16Array?Pl:t instanceof Int32Array?Nl:t instanceof Uint32Array?Vt:t instanceof oe?jo:t instanceof Float32Array?Mt:t instanceof Float64Array?Mt:null;return fc(e!=null),e}const em={format:kr,minFilter:wa,magFilter:wa};class tm extends Es{constructor(){super(...arguments),this.parameters={}}load(e,r,i,n){const s=new this.Texture,a=new this.TypedArrayLoader(this.manager);a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(this.withCredentials),a.load(e,o=>{s.image.data=o instanceof oe?new Uint16Array(o.buffer):o;const{width:c,height:l,depth:u,...d}=this.parameters;c!=null&&(s.image.width=c),l!=null&&(s.image.height=l),"depth"in s.image&&u!=null&&(s.image.depth=u),s.type=Jh(o),Object.assign(s,d),s.needsUpdate=!0,r(s)},i,n)}}function Bc(t,e,r){return class extends tm{constructor(){super(...arguments),this.Texture=t,this.TypedArrayLoader=Zh(e),this.parameters={...em,...r}}}}function rm(t,e){return Bc(Al,t,e)}function im(t,e){return Bc(ns,t,e)}function nm(t,e){return new(rm(t,e))}function Xa(t,e){return new(im(t,e))}const Li=Ms.clamp,ys=Ms.degToRad;function sm(t,e,r,i=0,n=1){return Ms.mapLinear(t,e,r,i,n)}function am(t){return Math.min(Math.max(t,0),1)}function Fe(t){return(e,r)=>{e instanceof zi?Object.defineProperty(e,r,{enumerable:!0,get(){var i;return((i=this.defines)==null?void 0:i[t])!=null},set(i){var n;i!==this[r]&&(i?(this.defines??(this.defines={}),this.defines[t]="1"):(n=this.defines)==null||delete n[t],this.needsUpdate=!0)}}):Object.defineProperty(e,r,{enumerable:!0,get(){return this.defines.has(t)},set(i){i!==this[r]&&(i?this.defines.set(t,"1"):this.defines.delete(t),this.setChanged())}})}}function om(t,{min:e=Number.MIN_SAFE_INTEGER,max:r=Number.MAX_SAFE_INTEGER}={}){return(i,n)=>{i instanceof zi?Object.defineProperty(i,n,{enumerable:!0,get(){var s;const a=(s=this.defines)==null?void 0:s[t];return a!=null?parseInt(a):0},set(s){const a=this[n];s!==a&&(this.defines??(this.defines={}),this.defines[t]=Li(s,e,r).toFixed(0),this.needsUpdate=!0)}}):Object.defineProperty(i,n,{enumerable:!0,get(){const s=this.defines.get(t);return s!=null?parseInt(s):0},set(s){const a=this[n];s!==a&&(this.defines.set(t,Li(s,e,r).toFixed(0)),this.setChanged())}})}}var Xr=Uint8Array,Uc=Uint16Array,cm=Uint32Array,lm=new Xr([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),um=new Xr([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),kc=function(t,e){for(var r=new Uc(31),i=0;i<31;++i)r[i]=e+=1<<t[i-1];for(var n=new cm(r[30]),i=1;i<30;++i)for(var s=r[i];s<r[i+1];++s)n[s]=s-r[i]<<5|i;return[r,n]},Hc=kc(lm,2),dm=Hc[0],hm=Hc[1];dm[28]=258,hm[258]=28;kc(um,0);var mm=new Uc(32768);for(var de=0;de<32768;++de){var Dt=(de&43690)>>>1|(de&21845)<<1;Dt=(Dt&52428)>>>2|(Dt&13107)<<2,Dt=(Dt&61680)>>>4|(Dt&3855)<<4,mm[de]=((Dt&65280)>>>8|(Dt&255)<<8)>>>1}var rn=new Xr(288);for(var de=0;de<144;++de)rn[de]=8;for(var de=144;de<256;++de)rn[de]=9;for(var de=256;de<280;++de)rn[de]=7;for(var de=280;de<288;++de)rn[de]=8;var fm=new Xr(32);for(var de=0;de<32;++de)fm[de]=5;var pm=new Xr(0),gm=typeof TextDecoder<"u"&&new TextDecoder,vm=0;try{gm.decode(pm,{stream:!0}),vm=1}catch{}const ym=/^[ \t]*#include +"([\w\d./]+)"/gm;function Gt(t,e){return t.replace(ym,(r,i)=>{const n=i.split("/").reduce((s,a)=>typeof s!="string"&&s!=null?s[a]:void 0,e);if(typeof n!="string")throw new Error(`Could not find include for ${i}.`);return Gt(n,e)})}const Sm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*(?:i\s*\+\+|\+\+\s*i)\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wm(t,e,r,i){let n="";for(let s=parseInt(e);s<parseInt(r);++s)n+=i.replace(/\[\s*i\s*\]/g,"["+s+"]").replace(/UNROLLED_LOOP_INDEX/g,`${s}`);return n}function _m(t){return t.replace(Sm,wm)}const xm=`// Reference: https://github.com/mrdoob/three.js/blob/r171/examples/jsm/csm/CSMShader.js

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
`,Tm=`// cSpell:words logdepthbuf

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
`,bm=`// Reference: https://advances.realtimerendering.com/s2014/index.html#_NEXT_GENERATION_POST

float interleavedGradientNoise(const vec2 coord) {
  const vec3 magic = vec3(0.06711056, 0.00583715, 52.9829189);
  return fract(magic.z * fract(dot(coord, magic.xy)));
}
`,Mm=`#if !defined(saturate)
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
`,Em=`// Reference: https://jcgt.org/published/0003/02/01/paper.pdf

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
`,Rm=`float raySphereFirstIntersection(
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
`,Am=`vec3 screenToView(
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
`,Cm=`// Reference: https://www.gamedev.net/tutorials/programming/graphics/contact-hardening-soft-shadows-made-fast-r4906/

vec2 vogelDisk(const int index, const int sampleCount, const float phi) {
  const float goldenAngle = 2.39996322972865332;
  float r = sqrt(float(index) + 0.5) / sqrt(float(sampleCount));
  float theta = float(index) * goldenAngle + phi;
  return r * vec2(cos(theta), sin(theta));
}
`,Im=xm,Dm=Tm,Pm=bm,Nm=Mm,Om=Em,zc=Rm,Lm=Am,Fm=Cm,ks=`// Based on the following work and adapted to Three.js.
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
`,Bm=["solarIrradiance","sunAngularRadius","bottomRadius","topRadius","rayleighScattering","mieScattering","miePhaseFunctionG","muSMin","skyRadianceToLuminance","sunRadianceToLuminance","luminousEfficiency"];function Um(t,e){if(e!=null)for(const r of Bm){const i=e[r];i!=null&&(t[r]instanceof T?t[r].copy(i):t[r]=i)}}const Ss=class{constructor(e){this.solarIrradiance=new T(1.474,1.8504,1.91198),this.sunAngularRadius=.004675,this.bottomRadius=636e4,this.topRadius=642e4,this.rayleighScattering=new T(.005802,.013558,.0331),this.mieScattering=new T(.003996,.003996,.003996),this.miePhaseFunctionG=.8,this.muSMin=Math.cos(ys(120)),this.skyRadianceToLuminance=new T(114974.916437,71305.954816,65310.548555),this.sunRadianceToLuminance=new T(98242.786222,69954.398112,66475.012354),this.luminousEfficiency=new T(.2126,.7152,.0722),this.skyRadianceToRelativeLuminance=new T,this.sunRadianceToRelativeLuminance=new T,Um(this,e);const r=this.luminousEfficiency.dot(this.skyRadianceToLuminance);this.skyRadianceToRelativeLuminance.copy(this.skyRadianceToLuminance).divideScalar(r),this.sunRadianceToRelativeLuminance.copy(this.sunRadianceToLuminance).divideScalar(r)}};Ss.DEFAULT=new Ss;let nn=Ss;const sn=64,an=16,Hs=32,zs=128,Vs=32,Ws=8,km=Ws*Vs,Hm=zs,zm=Hs,on=256,cn=64,nr=1/1e3,Vm="82e00c5222d6cbc222af69abdf6d3f4fc9f63030",kn=`https://media.githubusercontent.com/media/takram-design-engineering/three-geospatial/${Vm}/packages/atmosphere/assets`,Wm=new T;function ln(t,e,r,i,n=!0){const s=r.projectOnSurface(t,Wm);return s!=null?r.getOsculatingSphereCenter(!n||s.lengthSq()<t.lengthSq()?s:t,e,i):i.setScalar(0)}const Gm=`precision highp sampler2DArray;

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
`,jm=`uniform mat4 inverseViewMatrix;
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
`,Vc=`vec3 getLunarRadiance(const float moonAngularRadius) {
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
`;var Ym=Object.defineProperty,qe=(t,e,r,i)=>{for(var n=void 0,s=t.length-1,a;s>=0;s--)(a=t[s])&&(n=a(e,r,n)||n);return n&&Ym(e,r,n),n};const $m=new T,Km=new T,qm=new mc,Xm={blendFunction:Z.NORMAL,octEncodedNormal:!1,reconstructNormal:!1,ellipsoid:ht.WGS84,correctAltitude:!0,correctGeometricError:!0,photometric:!0,sunIrradiance:!1,skyIrradiance:!1,transmittance:!0,inscatter:!0,irradianceScale:1,sky:!1,sun:!0,moon:!0,moonAngularRadius:.0045,lunarRadianceScale:1};class Xe extends Kd{constructor(e=new Ui,r,i=nn.DEFAULT){const{blendFunction:n,normalBuffer:s=null,octEncodedNormal:a,reconstructNormal:o,irradianceTexture:c=null,scatteringTexture:l=null,transmittanceTexture:u=null,ellipsoid:d,correctAltitude:g,correctGeometricError:p,photometric:h,sunDirection:S,sunIrradiance:f,skyIrradiance:v,transmittance:b,inscatter:R,irradianceScale:A,sky:M,sun:C,moon:E,moonDirection:F,moonAngularRadius:k,lunarRadianceScale:U}={...Xm,...r};super("AerialPerspectiveEffect",_m(Gt(Gm,{core:{depth:Dm,packing:Om,math:Nm,transform:Lm,raySphereIntersection:zc,cascadedShadowMaps:Im,interleavedGradientNoise:Pm,vogelDisk:Fm},parameters:lr,functions:ks,sky:Vc})),{blendFunction:n,vertexShader:Gt(jm,{parameters:lr}),attributes:dc.DEPTH,uniforms:new Map(Object.entries({normalBuffer:new I(s),projectionMatrix:new I(new ee),viewMatrix:new I(new ee),inverseProjectionMatrix:new I(new ee),inverseViewMatrix:new I(new ee),cameraPosition:new I(new T),bottomRadius:new I(i.bottomRadius),ellipsoidRadii:new I(new T),ellipsoidCenter:new I(new T),inverseEllipsoidMatrix:new I(new ee),altitudeCorrection:new I(new T),sunDirection:new I((S==null?void 0:S.clone())??new T),irradianceScale:new I(A),idealSphereAlpha:new I(0),moonDirection:new I((F==null?void 0:F.clone())??new T),moonAngularRadius:new I(k),lunarRadianceScale:new I(U),overlayBuffer:new I(null),shadowBuffer:new I(null),shadowMapSize:new I(new Lt),shadowIntervals:new I([]),shadowMatrices:new I([]),inverseShadowMatrices:new I([]),shadowFar:new I(0),shadowTopHeight:new I(0),shadowRadius:new I(3),stbnTexture:new I(null),frame:new I(0),shadowLengthBuffer:new I(null),u_solar_irradiance:new I(i.solarIrradiance),u_sun_angular_radius:new I(i.sunAngularRadius),u_bottom_radius:new I(i.bottomRadius*nr),u_top_radius:new I(i.topRadius*nr),u_rayleigh_scattering:new I(i.rayleighScattering),u_mie_scattering:new I(i.mieScattering),u_mie_phase_function_g:new I(i.miePhaseFunctionG),u_mu_s_min:new I(i.muSMin),u_irradiance_texture:new I(c),u_scattering_texture:new I(l),u_single_mie_scattering_texture:new I(l),u_transmittance_texture:new I(u)})),defines:new Map([["TRANSMITTANCE_TEXTURE_WIDTH",on.toFixed(0)],["TRANSMITTANCE_TEXTURE_HEIGHT",cn.toFixed(0)],["SCATTERING_TEXTURE_R_SIZE",Hs.toFixed(0)],["SCATTERING_TEXTURE_MU_SIZE",zs.toFixed(0)],["SCATTERING_TEXTURE_MU_S_SIZE",Vs.toFixed(0)],["SCATTERING_TEXTURE_NU_SIZE",Ws.toFixed(0)],["IRRADIANCE_TEXTURE_WIDTH",sn.toFixed(0)],["IRRADIANCE_TEXTURE_HEIGHT",an.toFixed(0)],["METER_TO_LENGTH_UNIT",nr.toFixed(7)],["SUN_SPECTRAL_RADIANCE_TO_LUMINANCE",`vec3(${i.sunRadianceToRelativeLuminance.toArray().map(G=>G.toFixed(12)).join(",")})`],["SKY_SPECTRAL_RADIANCE_TO_LUMINANCE",`vec3(${i.skyRadianceToRelativeLuminance.toArray().map(G=>G.toFixed(12)).join(",")})`]])}),this.camera=e,this.atmosphere=i,this.ellipsoidMatrix=new ee,this.overlay=null,this.shadow=null,this.shadowLength=null,this.shadowSampleCount=8,this.octEncodedNormal=a,this.reconstructNormal=o,this.ellipsoid=d,this.correctAltitude=g,this.correctGeometricError=p,this.photometric=h,this.sunIrradiance=f,this.skyIrradiance=v,this.transmittance=b,this.inscatter=R,this.sky=M,this.sun=C,this.moon=E}get mainCamera(){return this.camera}set mainCamera(e){this.camera=e}copyCameraSettings(e){const{projectionMatrix:r,matrixWorldInverse:i,projectionMatrixInverse:n,matrixWorld:s}=e,a=this.uniforms;a.get("projectionMatrix").value.copy(r),a.get("viewMatrix").value.copy(i),a.get("inverseProjectionMatrix").value.copy(n),a.get("inverseViewMatrix").value.copy(s);const o=e.getWorldPosition(a.get("cameraPosition").value),c=a.get("inverseEllipsoidMatrix").value.copy(this.ellipsoidMatrix).invert(),l=$m.copy(o).applyMatrix4(c).sub(a.get("ellipsoidCenter").value);try{const d=qm.setFromECEF(l).height,g=Km.set(0,this.ellipsoid.maximumRadius,-d).applyMatrix4(r);a.get("idealSphereAlpha").value=am(sm(g.y,41.5,13.8,0,1))}catch{return}const u=a.get("altitudeCorrection");this.correctAltitude?ln(l,this.atmosphere.bottomRadius,this.ellipsoid,u.value):u.value.setScalar(0)}updateComposition(){const{uniforms:e,defines:r,overlay:i,shadow:n,shadowLength:s}=this,a=r.has("HAS_OVERLAY"),o=i!=null;o!==a&&(o?r.set("HAS_OVERLAY","1"):(r.delete("HAS_OVERLAY"),e.get("overlayBuffer").value=null),this.setChanged()),o&&(e.get("overlayBuffer").value=i.map);const c=r.has("HAS_SHADOW"),l=n!=null;if(l!==c&&(l?r.set("HAS_SHADOW","1"):(r.delete("HAS_SHADOW"),e.get("shadowBuffer").value=null),this.setChanged()),l){const g=r.get("SHADOW_CASCADE_COUNT"),p=`${n.cascadeCount}`;g!==p&&(r.set("SHADOW_CASCADE_COUNT",n.cascadeCount.toFixed(0)),this.setChanged()),e.get("shadowBuffer").value=n.map,e.get("shadowMapSize").value=n.mapSize,e.get("shadowIntervals").value=n.intervals,e.get("shadowMatrices").value=n.matrices,e.get("inverseShadowMatrices").value=n.inverseMatrices,e.get("shadowFar").value=n.far,e.get("shadowTopHeight").value=n.topHeight}const u=r.has("HAS_SHADOW_LENGTH"),d=s!=null;d!==u&&(d?r.set("HAS_SHADOW_LENGTH","1"):(r.delete("HAS_SHADOW_LENGTH"),e.get("shadowLengthBuffer").value=null),this.setChanged()),d&&(e.get("shadowLengthBuffer").value=s.map)}update(e,r,i){this.copyCameraSettings(this.camera),this.updateComposition(),++this.uniforms.get("frame").value}get normalBuffer(){return this.uniforms.get("normalBuffer").value}set normalBuffer(e){this.uniforms.get("normalBuffer").value=e}get irradianceTexture(){return this.uniforms.get("u_irradiance_texture").value}set irradianceTexture(e){this.uniforms.get("u_irradiance_texture").value=e}get scatteringTexture(){return this.uniforms.get("u_scattering_texture").value}set scatteringTexture(e){this.uniforms.get("u_scattering_texture").value=e,this.uniforms.get("u_single_mie_scattering_texture").value=e}get transmittanceTexture(){return this.uniforms.get("u_transmittance_texture").value}set transmittanceTexture(e){this.uniforms.get("u_transmittance_texture").value=e}get useHalfFloat(){return!0}set useHalfFloat(e){}get ellipsoid(){return this._ellipsoid}set ellipsoid(e){this._ellipsoid=e,this.uniforms.get("ellipsoidRadii").value.copy(e.radii)}get ellipsoidCenter(){return this.uniforms.get("ellipsoidCenter").value}get sunDirection(){return this.uniforms.get("sunDirection").value}get irradianceScale(){return this.uniforms.get("irradianceScale").value}set irradianceScale(e){this.uniforms.get("irradianceScale").value=e}get moonDirection(){return this.uniforms.get("moonDirection").value}get moonAngularRadius(){return this.uniforms.get("moonAngularRadius").value}set moonAngularRadius(e){this.uniforms.get("moonAngularRadius").value=e}get lunarRadianceScale(){return this.uniforms.get("lunarRadianceScale").value}set lunarRadianceScale(e){this.uniforms.get("lunarRadianceScale").value=e}get stbnTexture(){return this.uniforms.get("stbnTexture").value}set stbnTexture(e){this.uniforms.get("stbnTexture").value=e}get shadowRadius(){return this.uniforms.get("shadowRadius").value}set shadowRadius(e){this.uniforms.get("shadowRadius").value=e}}qe([Fe("OCT_ENCODED_NORMAL")],Xe.prototype,"octEncodedNormal");qe([Fe("RECONSTRUCT_NORMAL")],Xe.prototype,"reconstructNormal");qe([Fe("CORRECT_GEOMETRIC_ERROR")],Xe.prototype,"correctGeometricError");qe([Fe("PHOTOMETRIC")],Xe.prototype,"photometric");qe([Fe("SUN_IRRADIANCE")],Xe.prototype,"sunIrradiance");qe([Fe("SKY_IRRADIANCE")],Xe.prototype,"skyIrradiance");qe([Fe("TRANSMITTANCE")],Xe.prototype,"transmittance");qe([Fe("INSCATTER")],Xe.prototype,"inscatter");qe([Fe("SKY")],Xe.prototype,"sky");qe([Fe("SUN")],Xe.prototype,"sun");qe([Fe("MOON")],Xe.prototype,"moon");qe([om("SHADOW_SAMPLE_COUNT",{min:1,max:16})],Xe.prototype,"shadowSampleCount");var Qm=Object.defineProperty,Zm=(t,e,r,i)=>{for(var n=void 0,s=t.length-1,a;s>=0;s--)(a=t[s])&&(n=a(e,r,n)||n);return n&&Qm(e,r,n),n};const Jm=new T;function ef(t,e){let r="",i="";for(let n=1;n<e;++n)r+=`layout(location = ${n}) out float renderTarget${n};
`,i+=`renderTarget${n} = 0.0;
`;return t.replace("#include <mrt_layout>",r).replace("#include <mrt_output>",i)}const Gs={ellipsoid:ht.WGS84,correctAltitude:!0,photometric:!0,renderTargetCount:1};class js extends Ol{constructor(e,r=nn.DEFAULT){const{irradianceTexture:i=null,scatteringTexture:n=null,transmittanceTexture:s=null,useHalfFloat:a,ellipsoid:o,correctAltitude:c,photometric:l,sunDirection:u,sunAngularRadius:d,renderTargetCount:g,...p}={...Gs,...e};super({toneMapped:!1,depthWrite:!1,depthTest:!1,...p,uniforms:{cameraPosition:new I(new T),ellipsoidCenter:new I(new T),inverseEllipsoidMatrix:new I(new ee),altitudeCorrection:new I(new T),sunDirection:new I((u==null?void 0:u.clone())??new T),u_solar_irradiance:new I(r.solarIrradiance),u_sun_angular_radius:new I(d??r.sunAngularRadius),u_bottom_radius:new I(r.bottomRadius*nr),u_top_radius:new I(r.topRadius*nr),u_rayleigh_scattering:new I(r.rayleighScattering),u_mie_scattering:new I(r.mieScattering),u_mie_phase_function_g:new I(r.miePhaseFunctionG),u_mu_s_min:new I(r.muSMin),u_irradiance_texture:new I(i),u_scattering_texture:new I(n),u_single_mie_scattering_texture:new I(n),u_transmittance_texture:new I(s),...p.uniforms},defines:{PI:`${Math.PI}`,TRANSMITTANCE_TEXTURE_WIDTH:on.toFixed(0),TRANSMITTANCE_TEXTURE_HEIGHT:cn.toFixed(0),SCATTERING_TEXTURE_R_SIZE:Hs.toFixed(0),SCATTERING_TEXTURE_MU_SIZE:zs.toFixed(0),SCATTERING_TEXTURE_MU_S_SIZE:Vs.toFixed(0),SCATTERING_TEXTURE_NU_SIZE:Ws.toFixed(0),IRRADIANCE_TEXTURE_WIDTH:sn.toFixed(0),IRRADIANCE_TEXTURE_HEIGHT:an.toFixed(0),METER_TO_LENGTH_UNIT:nr.toFixed(7),SUN_SPECTRAL_RADIANCE_TO_LUMINANCE:`vec3(${r.sunRadianceToRelativeLuminance.toArray().map(h=>h.toFixed(12)).join(",")})`,SKY_SPECTRAL_RADIANCE_TO_LUMINANCE:`vec3(${r.skyRadianceToRelativeLuminance.toArray().map(h=>h.toFixed(12)).join(",")})`,...p.defines}}),this.atmosphere=r,this.ellipsoidMatrix=new ee,this.atmosphere=r,this.ellipsoid=o,this.correctAltitude=c,this.photometric=l,this.renderTargetCount=g}copyCameraSettings(e){const r=this.uniforms,i=e.getWorldPosition(r.cameraPosition.value),n=r.inverseEllipsoidMatrix.value.copy(this.ellipsoidMatrix).invert(),s=Jm.copy(i).applyMatrix4(n).sub(r.ellipsoidCenter.value),a=r.altitudeCorrection.value;this.correctAltitude?ln(s,this.atmosphere.bottomRadius,this.ellipsoid,a):a.setScalar(0)}onBeforeCompile(e,r){e.fragmentShader=ef(e.fragmentShader,this.renderTargetCount)}onBeforeRender(e,r,i,n,s,a){this.copyCameraSettings(i)}get irradianceTexture(){return this.uniforms.u_irradiance_texture.value}set irradianceTexture(e){this.uniforms.u_irradiance_texture.value=e}get scatteringTexture(){return this.uniforms.u_scattering_texture.value}set scatteringTexture(e){this.uniforms.u_scattering_texture.value=e,this.uniforms.u_single_mie_scattering_texture.value=e}get transmittanceTexture(){return this.uniforms.u_transmittance_texture.value}set transmittanceTexture(e){this.uniforms.u_transmittance_texture.value=e}get useHalfFloat(){return!0}set useHalfFloat(e){}get ellipsoidCenter(){return this.uniforms.ellipsoidCenter.value}get sunDirection(){return this.uniforms.sunDirection.value}get sunAngularRadius(){return this.uniforms.u_sun_angular_radius.value}set sunAngularRadius(e){this.uniforms.u_sun_angular_radius.value=e}get renderTargetCount(){return this._renderTargetCount}set renderTargetCount(e){e!==this.renderTargetCount&&(this._renderTargetCount=e,this.needsUpdate=!0)}}Zm([Fe("PHOTOMETRIC")],js.prototype,"photometric");var ct;(function(t){t.Sun="Sun",t.Moon="Moon",t.Mercury="Mercury",t.Venus="Venus",t.Earth="Earth",t.Mars="Mars",t.Jupiter="Jupiter",t.Saturn="Saturn",t.Uranus="Uranus",t.Neptune="Neptune",t.Pluto="Pluto",t.SSB="SSB",t.EMB="EMB",t.Star1="Star1",t.Star2="Star2",t.Star3="Star3",t.Star4="Star4",t.Star5="Star5",t.Star6="Star6",t.Star7="Star7",t.Star8="Star8"})(ct||(ct={}));ct.Star1,ct.Star2,ct.Star3,ct.Star4,ct.Star5,ct.Star6,ct.Star7,ct.Star8;var Qa;(function(t){t[t.From2000=0]="From2000",t[t.Into2000=1]="Into2000"})(Qa||(Qa={}));var Za;(function(t){t[t.Pericenter=0]="Pericenter",t[t.Apocenter=1]="Apocenter"})(Za||(Za={}));var Ja;(function(t){t.Penumbral="penumbral",t.Partial="partial",t.Annular="annular",t.Total="total"})(Ja||(Ja={}));var eo;(function(t){t[t.Invalid=0]="Invalid",t[t.Ascending=1]="Ascending",t[t.Descending=-1]="Descending"})(eo||(eo={}));function Wc(t){return Math.sqrt(Math.max(t,0))}function tf(t){return Math.max(t,0)}function rf(t,e,r){const{bottomRadius:i}=t;return r<0&&e**2*(r**2-1)+i**2>=0}function nf(t,e,r){const{topRadius:i}=t,n=e**2*(r**2-1)+i**2;return tf(-e*r+Wc(n))}function Fi(t,e){return .5/e+t*(1-1/e)}var sf="Invariant failed";function af(t,e){if(!t)throw new Error(sf)}const of=new T,to=new T,cf=new T;function yi(t,e,r){const i=e*4;return r.set(t[i],t[i+1],t[i+2])}function Gc(t,e,r){const{width:i,height:n}=t.image;af(Kh(t.image.data));let s=t.image.data;t.type===jo&&s instanceof Uint16Array&&(s=new oe(s.buffer));const a=Li(e.x,0,1)*(i-1),o=Li(e.y,0,1)*(n-1),c=Math.floor(a),l=Math.floor(o),u=a-c,d=o-l,g=u,p=d,h=c%i,S=(h+1)%i,f=l%n,v=(f+1)%n,b=yi(s,f*i+h,of),R=yi(s,f*i+S,to),A=b.lerp(R,g),M=yi(s,v*i+h,to),C=yi(s,v*i+S,cf),E=M.lerp(C,g);return r.copy(A.lerp(E,p))}function lf(t,e,r,i){const{topRadius:n,bottomRadius:s}=t,a=Math.sqrt(n**2-s**2),o=Wc(e**2-s**2),c=nf(t,e,r),l=n-e,u=o+a,d=(c-l)/(u-l),g=o/a;return i.set(Fi(d,on),Fi(g,cn))}const uf=new T,Hn=new T,df=new Lt;function ro(t,e,r,i=new Ge,{ellipsoid:n=ht.WGS84,correctAltitude:s=!0,photometric:a=!0}={},o=nn.DEFAULT){const c=uf.copy(e);if(s){const S=n.projectOnSurface(e,Hn);S!=null&&c.sub(n.getOsculatingSphereCenter(S,o.bottomRadius,Hn))}const l=Hn;let u=c.length(),d=c.dot(r);const{topRadius:g}=o,p=-d-Math.sqrt(d**2-u**2+g**2);if(p>0&&(u=g,d+=p),u>g)l.set(1,1,1);else{const S=d/u;if(rf(o,u,S))l.setScalar(0);else{const f=lf(o,u,S,df);Gc(t,f,l)}}const h=l.multiply(o.solarIrradiance);return a&&h.multiply(o.sunRadianceToRelativeLuminance),i.setFromVector3(h)}var Qr=Uint8Array,jc=Uint16Array,hf=Uint32Array,mf=new Qr([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),ff=new Qr([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Yc=function(t,e){for(var r=new jc(31),i=0;i<31;++i)r[i]=e+=1<<t[i-1];for(var n=new hf(r[30]),i=1;i<30;++i)for(var s=r[i];s<r[i+1];++s)n[s]=s-r[i]<<5|i;return[r,n]},$c=Yc(mf,2),pf=$c[0],gf=$c[1];pf[28]=258,gf[258]=28;Yc(ff,0);var vf=new jc(32768);for(var he=0;he<32768;++he){var Pt=(he&43690)>>>1|(he&21845)<<1;Pt=(Pt&52428)>>>2|(Pt&13107)<<2,Pt=(Pt&61680)>>>4|(Pt&3855)<<4,vf[he]=((Pt&65280)>>>8|(Pt&255)<<8)>>>1}var un=new Qr(288);for(var he=0;he<144;++he)un[he]=8;for(var he=144;he<256;++he)un[he]=9;for(var he=256;he<280;++he)un[he]=7;for(var he=280;he<288;++he)un[he]=8;var yf=new Qr(32);for(var he=0;he<32;++he)yf[he]=5;var Sf=new Qr(0),wf=typeof TextDecoder<"u"&&new TextDecoder,_f=0;try{wf.decode(Sf,{stream:!0}),_f=1}catch{}function xf({topRadius:t,bottomRadius:e},r,i,n){const s=(r-e)/(t-e),a=i*.5+.5;return n.set(Fi(a,sn),Fi(s,an))}const Tf=1/Math.sqrt(Math.PI),zn=Math.sqrt(3)/(2*Math.sqrt(Math.PI)),bf=new T,Vn=new T,Mf=new Lt,Ef=new ee,Rf={ellipsoid:ht.WGS84,correctAltitude:!0,photometric:!0};class Af extends Yo{constructor(e,r=nn.DEFAULT){super(),this.atmosphere=r,this.ellipsoidCenter=new T,this.ellipsoidMatrix=new ee;const{irradianceTexture:i=null,ellipsoid:n,correctAltitude:s,photometric:a,sunDirection:o}={...Rf,...e};this.irradianceTexture=i,this.ellipsoid=n,this.correctAltitude=s,this.photometric=a,this.sunDirection=(o==null?void 0:o.clone())??new T}update(){if(this.irradianceTexture==null)return;const e=Ef.copy(this.ellipsoidMatrix).invert(),r=this.getWorldPosition(bf).applyMatrix4(e).sub(this.ellipsoidCenter);if(this.correctAltitude){const l=this.ellipsoid.projectOnSurface(r,Vn);l!=null&&r.sub(ln(l,this.atmosphere.bottomRadius,this.ellipsoid,Vn))}const i=r.length(),n=r.dot(this.sunDirection)/i,s=xf(this.atmosphere,i,n,Mf),a=Gc(this.irradianceTexture,s,Vn);this.photometric&&a.multiply(this.atmosphere.skyRadianceToRelativeLuminance);const o=this.ellipsoid.getSurfaceNormal(r).applyMatrix4(this.ellipsoidMatrix),c=this.sh.coefficients;c[0].copy(a).multiplyScalar(Tf),c[1].copy(a).multiplyScalar(zn*o.y),c[2].copy(a).multiplyScalar(zn*o.z),c[3].copy(a).multiplyScalar(zn*o.x)}}const Cf=`precision highp float;
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
`,If=`precision highp float;
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
`;var Df=Object.defineProperty,Kc=(t,e,r,i)=>{for(var n=void 0,s=t.length-1,a;s>=0;s--)(a=t[s])&&(n=a(e,r,n)||n);return n&&Df(e,r,n),n};const Pf={...Gs,sun:!0,moon:!0,moonAngularRadius:.0045,lunarRadianceScale:1};class Ys extends js{constructor(e){const{sun:r,moon:i,moonDirection:n,moonAngularRadius:s,lunarRadianceScale:a,groundAlbedo:o,...c}={...Pf,...e};super({name:"SkyMaterial",glslVersion:Ur,vertexShader:Gt(If,{parameters:lr}),fragmentShader:Gt(Cf,{core:{raySphereIntersection:zc},parameters:lr,functions:ks,sky:Vc}),...c,uniforms:{inverseProjectionMatrix:new I(new ee),inverseViewMatrix:new I(new ee),moonDirection:new I((n==null?void 0:n.clone())??new T),moonAngularRadius:new I(s),lunarRadianceScale:new I(a),groundAlbedo:new I((o==null?void 0:o.clone())??new Ge(0)),shadowLengthBuffer:new I(null),...c.uniforms},defines:{PERSPECTIVE_CAMERA:"1"},depthTest:!0}),this.shadowLength=null,this.sun=r,this.moon=i}onBeforeRender(e,r,i,n,s,a){super.onBeforeRender(e,r,i,n,s,a);const{uniforms:o,defines:c}=this;o.inverseProjectionMatrix.value.copy(i.projectionMatrixInverse),o.inverseViewMatrix.value.copy(i.matrixWorld);const l=c.PERSPECTIVE_CAMERA!=null,u=i.isPerspectiveCamera===!0;u!==l&&(u?c.PERSPECTIVE_CAMERA="1":delete c.PERSPECTIVE_CAMERA,this.needsUpdate=!0);const d=this.groundAlbedo,g=c.GROUND_ALBEDO!=null,p=d.r!==0||d.g!==0||d.b!==0;p!==g&&(p?this.defines.GROUND_ALBEDO="1":delete this.defines.GROUND_ALBEDO,this.needsUpdate=!0);const h=this.shadowLength,S=c.HAS_SHADOW_LENGTH!=null,f=h!=null;f!==S&&(f?c.HAS_SHADOW_LENGTH="1":(delete c.HAS_SHADOW_LENGTH,o.shadowLengthBuffer.value=null),this.needsUpdate=!0),f&&(o.shadowLengthBuffer.value=h.map)}get moonDirection(){return this.uniforms.moonDirection.value}get moonAngularRadius(){return this.uniforms.moonAngularRadius.value}set moonAngularRadius(e){this.uniforms.moonAngularRadius.value=e}get lunarRadianceScale(){return this.uniforms.lunarRadianceScale.value}set lunarRadianceScale(e){this.uniforms.lunarRadianceScale.value=e}get groundAlbedo(){return this.uniforms.groundAlbedo.value}}Kc([Fe("SUN")],Ys.prototype,"sun");Kc([Fe("MOON")],Ys.prototype,"moon");const Nf=`precision highp float;
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
`,Of=`precision highp float;
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
`;var Lf=Object.defineProperty,Ff=(t,e,r,i)=>{for(var n=void 0,s=t.length-1,a;s>=0;s--)(a=t[s])&&(n=a(e,r,n)||n);return n&&Lf(e,r,n),n};const Bf={...Gs,pointSize:1,radianceScale:1,background:!0};class Uf extends js{constructor(e){const{pointSize:r,radianceScale:i,background:n,...s}={...Bf,...e};super({name:"StarsMaterial",glslVersion:Ur,vertexShader:Gt(Of,{parameters:lr}),fragmentShader:Gt(Nf,{parameters:lr,functions:ks}),...s,uniforms:{projectionMatrix:new I(new ee),modelViewMatrix:new I(new ee),viewMatrix:new I(new ee),matrixWorld:new I(new ee),cameraFar:new I(0),pointSize:new I(0),magnitudeRange:new I(new Lt(-2,8)),radianceScale:new I(i),...s.uniforms},defines:{PERSPECTIVE_CAMERA:"1"}}),this.pointSize=r,this.background=n}onBeforeRender(e,r,i,n,s,a){super.onBeforeRender(e,r,i,n,s,a);const o=this.uniforms;o.projectionMatrix.value.copy(i.projectionMatrix),o.modelViewMatrix.value.copy(i.modelViewMatrix),o.viewMatrix.value.copy(i.matrixWorldInverse),o.matrixWorld.value.copy(s.matrixWorld),o.cameraFar.value=i.far,o.pointSize.value=this.pointSize*e.getPixelRatio();const c=i.isPerspectiveCamera===!0;this.defines.PERSPECTIVE_CAMERA!=null!==c&&(c?this.defines.PERSPECTIVE_CAMERA="1":delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}get magnitudeRange(){return this.uniforms.magnitudeRange.value}get radianceScale(){return this.uniforms.radianceScale.value}set radianceScale(e){this.uniforms.radianceScale.value=e}}Ff([Fe("BACKGROUND")],Uf.prototype,"background");const io=new Ge("#fff2d8"),no=1e-8,Wn=3e4,so=-1e3,ao=1e7,kf=5e6,Hf=8e6,Vr=t=>Number.isFinite(t.x)&&Number.isFinite(t.y)&&Number.isFinite(t.z),oo=t=>!Number.isFinite(t.longitude)||Math.abs(t.longitude)>180?"longitude must be a finite value in degrees within [-180, 180]":!Number.isFinite(t.latitude)||Math.abs(t.latitude)>90?"latitude must be a finite value in degrees within [-90, 90]":!Number.isFinite(t.altitudeMeters)||t.altitudeMeters<so||t.altitudeMeters>ao?`altitudeMeters must be within [${so}, ${ao}]`:null,zf=(t,e,r)=>{if(!Number.isFinite(t.getTime()))return"instant must be a valid Date";const i=oo(e);if(i)return`observer ${i}`;if(!r)return null;const n=oo(r.observer);return n?`sky reference observer ${n}`:Vr(r.scenePosition)?null:"sky reference scenePosition must contain finite metre coordinates"},qc=t=>{if(!Vr(t.directionToSunECEF))return"sun direction contains a non-finite component";if(Math.abs(t.directionToSunECEF.length()-1)>1e-6)return"sun direction is not normalized";if(!t.ecefToSceneMatrix.elements.every(Number.isFinite))return"ECEF-to-scene matrix contains a non-finite component";const e=t.ecefToSceneMatrix.elements,r=[new T(e[0],e[4],e[8]),new T(e[1],e[5],e[9]),new T(e[2],e[6],e[10])];if(r.some(s=>Math.abs(s.length()-1)>1e-6)||Math.abs(r[0].dot(r[1]))>1e-6||Math.abs(r[0].dot(r[2]))>1e-6||Math.abs(r[1].dot(r[2]))>1e-6||Math.abs(e[3])>1e-12||Math.abs(e[7])>1e-12||Math.abs(e[11])>1e-12||Math.abs(e[12])>1e-12||Math.abs(e[13])>1e-12||Math.abs(e[14])>1e-12||Math.abs(e[15]-1)>1e-12)return"ECEF-to-scene matrix is not an affine orthonormal rotation";const i=t.ecefToSceneMatrix.determinant();if(!Number.isFinite(i)||Math.abs(i-1)>1e-6)return"ECEF-to-scene matrix is not a proper orthonormal rotation";if(!Vr(t.ellipsoidCenterECEF))return"ellipsoid center contains a non-finite component";const n=t.ellipsoidCenterECEF.length();return n<kf||n>Hf?"ellipsoid center is outside the plausible WGS84 distance range":null},Vf=t=>{var r;const e=qc(t.skyFrame);return e||(Vr(t.directionToSun)?Math.abs(t.directionToSun.length()-1)>1e-6?"scene sun direction is not normalized":![t.color.r,t.color.g,t.color.b].every(Number.isFinite)||![t.radiance.r,t.radiance.g,t.radiance.b].every(Number.isFinite)||!Number.isFinite(t.relativeIntensity)||t.relativeIntensity<0||t.relativeIntensity>1||!Number.isFinite(t.azimuthDegrees)||!Number.isFinite(t.elevationDegrees)?"sunlight color, intensity, or angles contain invalid values":(r=t.skyIrradianceCoefficients)!=null&&r.some(i=>!Vr(i))?"sky irradiance contains a non-finite coefficient":null:"scene sun direction contains a non-finite component")},Gn={useTransmittanceLut:!0,useIrradianceLut:!0},Wf=({east:t,north:e,up:r})=>new ee().set(t.x,t.y,t.z,0,r.x,r.y,r.z,0,-e.x,-e.y,-e.z,0,0,0,0,1);function $s({longitude:t,latitude:e,altitudeMeters:r}){const i=new mc(ys(t),ys(e),r).toECEF(),n=new T,s=new T,a=new T;return ht.WGS84.getEastNorthUpVectors(i,n,s,a),{observerECEF:i,east:n,north:s,up:a}}const Xc=(t,{east:e,north:r,up:i},n)=>n.set(t.dot(e),t.dot(i),-t.dot(r)).normalize(),Qc=(t,e,r)=>{const i=r?$s(r.observer):e,n=Wf(i);r!=null&&r.sceneFromLocal&&n.premultiply(r.sceneFromLocal);const s=n.clone().invert(),a=((r==null?void 0:r.scenePosition)??new T).clone().applyMatrix4(s).sub(i.observerECEF);return{directionToSunECEF:t.clone(),ecefToSceneMatrix:n,ellipsoidCenterECEF:a}},Gf=(t,e,{observerECEF:r,east:i,north:n,up:s})=>t!=null&&t.irradianceTexture?(t.ellipsoidMatrix.set(i.x,i.y,i.z,0,s.x,s.y,s.z,0,-n.x,-n.y,-n.z,0,0,0,0,1),t.ellipsoidCenter.copy(r).negate(),t.sunDirection.copy(e),t.position.set(0,0,0),t.updateMatrixWorld(!0),t.update(),t.sh.coefficients.map(a=>a.clone())):null,Zc=t=>{const e=xa(Math.asin(We(t.y,-1,1)));return{azimuthDegrees:(xa(Math.atan2(t.x,-t.z))+360)%360,elevationDegrees:e}},jf=(t,e)=>{const r=$s(e.observer),i=Xc(t.skyFrame.directionToSunECEF,r,new T);return e.sceneFromLocal&&i.transformDirection(e.sceneFromLocal),{...t,directionToSun:i,...Zc(i),skyFrame:Qc(t.skyFrame.directionToSunECEF,r,e)}},Yf=(t,e,r,i=null,n)=>{const s=$s(e),{observerECEF:a,up:o}=s,c=new T(...Ll(t)),l=Xc(c,s,new T);n!=null&&n.sceneFromLocal&&l.transformDirection(n.sceneFromLocal);const u=Qc(c,s,n),d=Gf(i,c,s),{azimuthDegrees:g,elevationDegrees:p}=Zc(l);if(!r){const R=Math.sqrt(We(l.y,0,1));return{directionToSun:l,color:io.clone(),relativeIntensity:R,radiance:io.clone().multiplyScalar(R),atmosphericTransmittanceReady:!1,atmosphericIrradianceReady:d!==null,skyIrradianceCoefficients:d,azimuthDegrees:g,elevationDegrees:p,skyFrame:u}}const h=ro(r,a,c,new Ge,{ellipsoid:ht.WGS84,correctAltitude:!0,photometric:!0}),S=ro(r,a,o,new Ge,{ellipsoid:ht.WGS84,correctAltitude:!0,photometric:!0}),f=Math.max(h.r,h.g,h.b,0),v=Math.max(S.r,S.g,S.b,no),b=f>no?h.clone().multiplyScalar(1/f):new Ge(0,0,0);return{directionToSun:l,color:b,relativeIntensity:We(f/v,0,1),radiance:h,atmosphericTransmittanceReady:!0,atmosphericIrradianceReady:d!==null,skyIrradianceCoefficients:d,azimuthDegrees:g,elevationDegrees:p,skyFrame:u}};class $f{transmittanceTexture=null;irradianceTexture=null;scatteringTexture=null;skyLightProbe=new Af({ellipsoid:ht.WGS84,correctAltitude:!0,photometric:!0});transmittanceLoading=!1;irradianceLoading=!1;scatteringLoading=!1;transmittanceRetryAt=0;irradianceRetryAt=0;scatteringRetryAt=0;disposed=!1;get ready(){return this.transmittanceTexture!==null&&this.irradianceTexture!==null}get skyReady(){return this.skyTextures!==null}get skyTextures(){return!this.transmittanceTexture||!this.irradianceTexture||!this.scatteringTexture?null:{transmittanceTexture:this.transmittanceTexture,irradianceTexture:this.irradianceTexture,scatteringTexture:this.scatteringTexture}}get isSkyLoading(){return this.transmittanceLoading||this.irradianceLoading||this.scatteringLoading}isLoadingFor(e=Gn){return e.useTransmittanceLut&&this.transmittanceLoading||e.useIrradianceLut&&this.irradianceLoading}ensure(e,r=Gn){if(this.disposed)return;const i=()=>{this.isLoadingFor(r)||e()};r.useTransmittanceLut&&this.ensureTransmittance(i),r.useIrradianceLut&&this.ensureIrradiance(i)}ensureSky(e){if(this.disposed||this.skyReady)return;let r=!1;const i=()=>{!r&&!this.isSkyLoading&&(r=!0,e())};this.ensureTransmittance(i),this.ensureIrradiance(i),this.ensureScattering(i)}ensureTransmittance(e){this.transmittanceTexture||this.transmittanceLoading||Date.now()<this.transmittanceRetryAt||(this.transmittanceLoading=!0,Xa(Un,{width:on,height:cn}).load(`${kn}/transmittance.bin`,r=>{if(this.transmittanceLoading=!1,this.disposed){r.dispose();return}this.transmittanceRetryAt=0,this.transmittanceTexture=r,e()},void 0,r=>{this.transmittanceLoading=!1,this.disposed||(this.transmittanceRetryAt=Date.now()+Wn,console.error("[SHADOW] Takram transmittance LUT failed",r),e())}))}ensureIrradiance(e){this.irradianceTexture||this.irradianceLoading||Date.now()<this.irradianceRetryAt||(this.irradianceLoading=!0,Xa(Un,{width:sn,height:an}).load(`${kn}/irradiance.bin`,r=>{if(this.irradianceLoading=!1,this.disposed){r.dispose();return}this.irradianceRetryAt=0,this.irradianceTexture=r,this.skyLightProbe.irradianceTexture=r,e()},void 0,r=>{this.irradianceLoading=!1,this.disposed||(this.irradianceRetryAt=Date.now()+Wn,console.error("[SHADOW] Takram irradiance LUT failed",r),e())}))}ensureScattering(e){this.scatteringTexture||this.scatteringLoading||Date.now()<this.scatteringRetryAt||(this.scatteringLoading=!0,nm(Un,{width:km,height:Hm,depth:zm}).load(`${kn}/scattering.bin`,r=>{if(this.scatteringLoading=!1,this.disposed){r.dispose();return}this.scatteringRetryAt=0,this.scatteringTexture=r,e()},void 0,r=>{this.scatteringLoading=!1,this.disposed||(this.scatteringRetryAt=Date.now()+Wn,console.error("[SHADOW] Takram scattering LUT failed",r),e())}))}evaluate(e,r,i=Gn,n){return Yf(e,r,i.useTransmittanceLut?this.transmittanceTexture:null,i.useIrradianceLut?this.skyLightProbe:null,n)}dispose(){var e,r,i;this.disposed||(this.disposed=!0,this.transmittanceLoading=!1,this.irradianceLoading=!1,this.scatteringLoading=!1,this.transmittanceRetryAt=0,this.irradianceRetryAt=0,this.scatteringRetryAt=0,(e=this.transmittanceTexture)==null||e.dispose(),(r=this.irradianceTexture)==null||r.dispose(),(i=this.scatteringTexture)==null||i.dispose(),this.transmittanceTexture=null,this.irradianceTexture=null,this.scatteringTexture=null,this.skyLightProbe.irradianceTexture=null,this.skyLightProbe.sh.zero())}}const Kf="shadow-simulation-atmospheric-sky",Zr=2,Mi="carmaOutputToSrgb",jn="carmaDisplayExposure",qf=new T;class Xf extends Ys{observerScenePosition=new T;hasObserverScenePosition=!1;viewCamera=null;copyCameraSettings(e){if(super.copyCameraSettings(e),!this.hasObserverScenePosition)return;const r=this.uniforms;if(r.cameraPosition.value.copy(this.observerScenePosition),!this.correctAltitude)return;const i=qf.copy(this.observerScenePosition).applyMatrix4(r.inverseEllipsoidMatrix.value).sub(r.ellipsoidCenter.value);ln(i,this.atmosphere.bottomRadius,this.ellipsoid,r.altitudeCorrection.value)}onBeforeRender(e,r,i,n,s,a){super.onBeforeRender(e,r,this.viewCamera??i,n,s,a)}}const Qf=t=>{t.uniforms.toneMappingExposure=new I(1),t.uniforms[Mi]=new I(!1),t.uniforms[jn]=new I(Zr),t.fragmentShader=t.fragmentShader.replace("precision highp sampler3D;",`precision highp sampler3D;

uniform bool ${Mi};
uniform float ${jn};
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
  }`).replace("outputColor.a = 1.0;",`outputColor.rgb *= ${jn};
  outputColor.a = 1.0;
  if (${Mi}) {
    // SkyMaterial is raw GLSL: match terrain's AgX on the display target.
    // Offscreen samples stay linear HDR until the shared final composite.
    outputColor.rgb = AgXToneMapping(outputColor.rgb);
    outputColor = carmaLinearToSrgb(outputColor);
  }`)},Zf=t=>{const e=new Xf({groundAlbedo:t,moon:!1,photometric:!0,side:$o,sun:!0});Qf(e),e.depthTest=!1,e.depthWrite=!1;const r=new Go;r.setAttribute("position",new Fl([-1,-1,0,3,-1,0,-1,3,0],3));const i=new Wr(r,e);return i.name=Kf,i.visible=!1,i.frustumCulled=!1,i.renderOrder=-100,i.castShadow=!1,i.receiveShadow=!1,i.onBeforeRender=n=>{e.uniforms.toneMappingExposure.value=n.toneMappingExposure,e.uniforms[Mi].value=n.getRenderTarget()===null},{mesh:i,update(n,s){return s?qc(n)?!1:(i.visible=!0,e.irradianceTexture=s.irradianceTexture,e.scatteringTexture=s.scatteringTexture,e.transmittanceTexture=s.transmittanceTexture,e.sunDirection.copy(n.directionToSunECEF),e.ellipsoidCenter.copy(n.ellipsoidCenterECEF),e.ellipsoidMatrix.copy(n.ecefToSceneMatrix),!0):(i.visible=!1,!1)},updateViewCamera(n){e.viewCamera=n},updateObserverScenePosition(n){e.observerScenePosition.copy(n),e.hasObserverScenePosition=!0},updateGroundAlbedo(n){e.groundAlbedo.copy(n)},dispose(){r.dispose(),e.dispose()}}},Si=3,Jf=.5,at=64,co=.01,lo=(t,e,r)=>Math.min(r**2,Math.max(at**2,Math.floor(t!==void 0&&Number.isFinite(t)&&t>0?t:e))),uo=(t,e)=>{const{mapSize:r,maxMapSize:i,elevationSine:n,sunDiscGuardMeters:s,groundTexelFit:a}=e,o=t.right-t.left+2*s,c=t.top-t.bottom+2*s,l=Math.max(co,Math.abs(n)),d=2*(a?Si+Jf:Si);let g=r,p=r,h=!1,S=!1;const f=e.groundTexelTargetMeters;if(f!==void 0&&(!Number.isFinite(f)||f<=0))throw new RangeError("Shadow ground texel target must be positive and finite");if(f!==void 0){const G=Q=>Math.max(at,2**Math.ceil(Math.log2(Q))),Y=G(o/f+d),O=G(c/(f*l)+d);g=Math.min(i,Y),p=Math.min(i,O),h=g<Y||p<O}else if(a){const G=o*l/c,Y=e.mapTexelBudget??r*r,O=d*(G+1),Q=Y-d*d,P=2*Q/(O+Math.sqrt(O**2+4*G*Q)),K=G*P+d,B=P+d;h=K>i||B>i;const Se=Math.max(o,c)/(r-d),te=Math.min(r,Math.max(at,Math.ceil((o/Se+d)/at)*at)),Te=Math.min(r,Math.max(at,Math.ceil((c/Se+d)/at)*at));S=K<te||B<Te;const At=Math.min(Math.max(K,te,Y/i),i,Y/Te),D=J=>Math.floor(J/at+1e-9)*at;g=Math.max(te,D(At)),p=Math.max(Te,D(Math.min(i,Y/g)))}const v=e.mapDimensions;v&&(S||(S=g!==v.width||p!==v.height),g=v.width,p=v.height);const b=o/Math.max(1,g-d),R=c/Math.max(1,p-d),A=Math.max(b,R,Number.EPSILON),M=a?b:A,C=a?R:A,E=Math.round((t.left+t.right)/2/M)*M,F=Math.round((t.bottom+t.top)/2/C)*C,k=M*g,U=C*p;return{left:E-k/2,right:E+k/2,bottom:F-U/2,top:F+U/2,mapWidth:g,mapHeight:p,metersPerTexelX:M,metersPerTexelY:C,guardMetersX:M*Si,guardMetersY:C*Si,groundTexelWidthMeters:M,groundTexelHeightMeters:Math.abs(n)>Number.EPSILON?C/Math.abs(n):1/0,groundTexelFitLimited:a&&(h||S||Math.abs(n)<co)}},ep=(t,e,r)=>{if(r<=0)return{planarMeters:0,depthMeters:0};const i=Math.sqrt(Math.max(0,1-e**2)),n=i>Math.sin(r)?Math.asin(Math.sin(r)/i):Math.PI;return{planarMeters:2*t*Math.sin(Math.min(Math.PI,n+r)/2),depthMeters:2*t*Math.sin(r/2)}},tp=t=>{const e=Math.floor(t/2)+1,r=t%2===0?1:-1;return[r*(e*.7548776662466927%1-.5),r*(e*.5698402909980532%1-.5)]},rp=2048,Jc=8192,ho=2,mo=50,ip=1e4,np=.04,Yn=25,sp=4,ap=1.2,op=.2,fo=.05,cp=8,Fr=Ul(.53/2),lp=Math.PI*(3-Math.sqrt(5)),up=300,dp=new T(0,1,0),po=(t,e,r=new ee)=>r.lookAt(t,e,dp).setPosition(t).invert(),hp=(t,e)=>{if(t.length===0)return null;const r=t.map(h=>h.clone().applyMatrix4(e)),i=Math.min(...r.map(({x:h})=>h)),n=Math.max(...r.map(({x:h})=>h)),s=Math.min(...r.map(({y:h})=>h)),a=Math.max(...r.map(({y:h})=>h)),o=r.map(({z:h})=>-h),c=Math.max(0,Math.min(...o)),l=Math.max(c+.01,Math.max(...o)),u=(i+n)/2,d=(s+a)/2,g=Math.max((n-i)/2,ho/2),p=Math.max((a-s)/2,ho/2);return{left:u-g,right:u+g,bottom:d-p,top:d+p,near:c,far:l}},mp=(t,e=Jc)=>t>=16?e:Math.min(e,rp*Math.sqrt(t));class el{constructor(e){this.host=e,this.lights=Array.from({length:1},()=>{const r=new Bl(16777215,0);return r.name="shadow-simulation-sun",r.visible=!1,r.castShadow=!1,r.shadow.camera.name="shadow-simulation-shadow-camera",r.shadow.autoUpdate=!1,r.shadow.radius=0,r.shadow.bias=0,r.shadow.normalBias=fo,e.add(r,r.target),r})}lights;softSun=!1;lastSoftFit=null;maxShadowMapSize=Jc;mapAllocation=null;disposed=!1;setMaxShadowMapSize(e){if(!Number.isFinite(e)||e<=0)return;const r=Math.max(256,Math.floor(e));this.disposed||this.maxShadowMapSize===r||(this.maxShadowMapSize=r)}setSoftSun(e){this.disposed||this.softSun===e||(e||this.restoreSunDiscCenter(),this.softSun=e,e||(this.lastSoftFit=null))}applySunDiscSample(e,r,i=!0){if(this.disposed)return;const n=this.lastSoftFit;if(!n)return;const s=Math.max(1,Math.floor(r)),a=(Math.floor(e)%s+s)%s,o=Fr*Math.sqrt((a+.5)/s),c=a*lp,l=Math.cos(c)*o,u=Math.sin(c)*o,d=n.tangentA.clone().multiplyScalar(l).addScaledVector(n.tangentB,u).normalize(),g=n.directionToSun.clone().multiplyScalar(Math.cos(o)).addScaledVector(d,Math.sin(o)).normalize(),p=this.lights[0],[h,S]=i&&s>1?tp(a):[0,0],f=p.shadow.camera,v=n.rasterBounds,b=h*(v.right-v.left)/p.shadow.mapSize.x,R=S*(v.top-v.bottom)/p.shadow.mapSize.y;f.left=v.left+b,f.right=v.right+b,f.bottom=v.bottom+R,f.top=v.top+R,f.updateProjectionMatrix(),p.position.copy(g).multiplyScalar(n.lightDistance).add(n.anchorPosition),p.updateMatrixWorld(!0),p.target.updateMatrixWorld(!0),p.shadow.updateMatrices(p),p.shadow.needsUpdate=!0}restoreSunDiscCenter(){if(this.disposed||!this.lastSoftFit)return;const e=this.lastSoftFit,r=this.lights[0],i=r.shadow.camera;i.left=e.rasterBounds.left,i.right=e.rasterBounds.right,i.bottom=e.rasterBounds.bottom,i.top=e.rasterBounds.top,i.updateProjectionMatrix(),r.position.copy(e.directionToSun).multiplyScalar(e.lightDistance).add(e.anchorPosition),r.updateMatrixWorld(!0),r.target.updateMatrixWorld(!0),r.shadow.updateMatrices(r),r.shadow.needsUpdate=!0}invalidate(){this.lights[0].shadow.needsUpdate=!0}update({receiverWorldPoints:e,receiverAnchorWorldPosition:r,minimumElevationMeters:i,maximumElevationMeters:n,directionToSun:s,color:a,intensity:o,shadowIntensity:c,quality:l,groundTexelFit:u=!0,stabilizeMapSize:d=!1,mapTexelBudget:g,casterMapTexelBudget:p,groundTexelTargetMeters:h,maxReceiverBiasMeters:S}){var pe,Ct;if(this.disposed)return null;if(e.length===0){for(const Me of this.lights)Me.visible=!1,Me.castShadow=!1,Me.intensity=0,Me.shadow.needsUpdate=!1;return null}const f=s.clone().normalize(),v=Math.max(0,n-i),b=Math.max(np,f.y),R=We((v+up)/b+mo,mo,ip),A=R+v+Yn,M=mp(l,this.maxShadowMapSize),C=lo(g,Math.floor(M)**2,this.maxShadowMapSize),E=Math.floor(Math.sqrt(C)),F=new Ge(a),k=r.clone(),U=e.reduce((Me,$)=>Math.max(Me,$.distanceTo(r)),0),G=U+A,Y=this.lights[0];Y.position.copy(f).multiplyScalar(G).add(k),Y.target.position.copy(k),Y.updateMatrixWorld(!0),Y.target.updateMatrixWorld(!0),Y.shadow.updateMatrices(Y);const O=hp(e,po(Y.position,Y.target.position));if(!O)return null;const Q=ep(U,f.y,this.softSun?Fr:0),P=this.softSun?Math.max(Math.tan(Fr)*G,Q.planarMeters):0,K={maxMapSize:this.maxShadowMapSize,elevationSine:f.y,sunDiscGuardMeters:P,groundTexelFit:u,groundTexelTargetMeters:h},B=uo(O,{...K,mapSize:E,mapTexelBudget:C,mapDimensions:d&&((pe=this.mapAllocation)==null?void 0:pe.texelBudget)===C&&this.mapAllocation.maxMapSize===this.maxShadowMapSize&&this.mapAllocation.groundTexelFit===u?this.mapAllocation:void 0}),Se=lo(p,C,this.maxShadowMapSize),te=p===void 0?B:uo(O,{...K,mapSize:Math.floor(Math.sqrt(Se)),mapTexelBudget:Se});this.mapAllocation={width:B.mapWidth,height:B.mapHeight,texelBudget:C,maxMapSize:this.maxShadowMapSize,groundTexelFit:u};const Te=Math.max(B.metersPerTexelX,B.metersPerTexelY),At=Math.max(B.guardMetersX,B.guardMetersY),D={left:B.left,right:B.right,bottom:B.bottom,top:B.top,near:Math.max(.01,O.near-Q.depthMeters-R-v-Yn),far:Math.max(1,O.far+Q.depthMeters+v+Yn)};D.far=Math.max(D.near+1,D.far);const J=We(Te*ap/Math.max(op,f.y),fo,cp),Pe=-We(Te*sp/Math.max(D.far-D.near,1),Number.EPSILON,.01),be=new T;Math.abs(f.y)>.99?be.set(1,0,0):be.crossVectors(new T(0,1,0),f).normalize();const ft=new T().crossVectors(f,be),ce=this.lights[0];ce.visible=!0,ce.castShadow=!0,ce.intensity=o,ce.color.copy(F),ce.shadow.intensity=We(c,0,1),ce.shadow.needsUpdate=!0,(ce.shadow.mapSize.x!==B.mapWidth||ce.shadow.mapSize.y!==B.mapHeight)&&((Ct=ce.shadow.map)==null||Ct.dispose(),ce.shadow.map=null,ce.shadow.mapSize.set(B.mapWidth,B.mapHeight)),ce.position.copy(f).multiplyScalar(G).add(k),ce.target.position.copy(k);const pt=S!==void 0&&Number.isFinite(S)?Math.max(0,S):1/0;ce.shadow.bias=Math.max(Pe,-pt/(D.far-D.near)),ce.shadow.normalBias=Math.min(J,pt);const Ae=ce.shadow.camera;Ae.left=D.left,Ae.right=D.right,Ae.bottom=D.bottom,Ae.top=D.top,Ae.near=D.near,Ae.far=D.far,Ae.updateProjectionMatrix(),ce.updateMatrixWorld(!0),ce.target.updateMatrixWorld(!0),ce.shadow.updateMatrices(ce),this.lastSoftFit=this.softSun?{directionToSun:f.clone(),tangentA:be,tangentB:ft,anchorPosition:k.clone(),lightDistance:G,rasterBounds:D}:null;const Ue=Y.shadow.camera;return{sampleCount:1,totalShadowTexels:B.mapWidth*B.mapHeight,mapTexelBudget:h===void 0?C:void 0,casterReachMeters:R,casterMetersPerTexel:[te.metersPerTexelX,te.metersPerTexelY],camera:{receiverPointCount:e.length,receiverLeftMeters:O.left,receiverRightMeters:O.right,receiverBottomMeters:O.bottom,receiverTopMeters:O.top,leftMeters:Ue.left,rightMeters:Ue.right,bottomMeters:Ue.bottom,topMeters:Ue.top,nearMeters:Ue.near,farMeters:Ue.far,shadowMapWidth:B.mapWidth,shadowMapHeight:B.mapHeight,viewMatrixElements:[...po(Y.position,Y.target.position).elements],projectionMatrixElements:[...Ue.projectionMatrix.elements],guardMeters:At,metersPerTexel:Te,metersPerTexelX:B.metersPerTexelX,metersPerTexelY:B.metersPerTexelY,groundTexelWidthMeters:B.groundTexelWidthMeters,groundTexelHeightMeters:B.groundTexelHeightMeters,groundTexelFitLimited:B.groundTexelFitLimited,groundTexelFit:u,groundTexelTargetMeters:h}}}dispose(){var e;if(!this.disposed){this.disposed=!0;for(const r of this.lights)(e=r.shadow.map)==null||e.dispose(),this.host.remove(r.target,r)}}}const fp=`
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
`,go="float getShadow( sampler2DShadow shadowMap,",$n="#elif defined( SHADOWMAP_TYPE_VSM )",pp=()=>{const t=ss.shadowmap_pars_fragment;if(!t.includes(go)||!t.includes($n))throw new Error("Three PCF shader changed; validate receiver-plane shadow integration");return`uniform bool carmaReceiverPlaneShadow;
${t.replace(go,"float carmaOriginalGetShadow( sampler2DShadow shadowMap,").replace($n,`${fp}
${$n}`)}`},vo=new WeakMap,gp=(t,e)=>{const r=vo.get(t);if(r)return e!==void 0&&r.value!==e&&(r.value=e,t.needsUpdate=!0),r;const i={value:e??!1},n=t.onBeforeCompile,s=t.customProgramCacheKey(),a=pp();return t.onBeforeCompile=function(o,c){n.call(this,o,c),o.uniforms.carmaReceiverPlaneShadow=i,o.fragmentShader=o.fragmentShader.replace("#include <shadowmap_pars_fragment>",a)},t.customProgramCacheKey=()=>`${s}|carma-receiver-plane-pcf-v3|${i.value?"mesh":"stock"}`,t.needsUpdate=!0,vo.set(t,i),i},yo=new WeakMap,So=(t,e,r,i,n="shadow-and-color")=>{const s=()=>r.render(t,i);if(e===void 0)return s(),!0;const a=t.getObjectById(e);if(!a)return!1;let o=yo.get(a);if(!o){const l=new Set;a.traverse(u=>l.add(u)),yo.set(a,l),o=l}if(n==="color-only"){const l=new Set;for(let d=a.parent;d;d=d.parent)l.add(d);const u=[];t.traverse(d=>{d.isMesh&&d.visible&&!o.has(d)&&!l.has(d)&&(u.push(d),d.visible=!1)});try{return s(),!0}finally{for(const d of u)d.visible=!0}}const c=r.renderBufferDirect;r.renderBufferDirect=function(...l){const[u,,,,d]=l;u===i&&d.isMesh&&!o.has(d)||c.apply(this,l)};try{return s(),!0}finally{r.renderBufferDirect=c}},Nt=t=>{var e;(e=t.depthTexture)==null||e.dispose(),t.dispose()},kt=(t,e)=>t*e*8;class vp{entries=new Map;retainedBytes=0;capacityBytes=0;activeVariantIds=null;hits=0;misses=0;get bytes(){return this.retainedBytes}get count(){return this.entries.size}get availableBytes(){return Math.max(0,this.capacityBytes-this.retainedBytes)}has(e){return this.entries.has(e)}setActiveVariants(e){this.activeVariantIds=e}setBudget(e,r){this.capacityBytes=Math.max(0,e-r),this.evictInactive(0);for(const i of this.entries.keys()){if(this.retainedBytes<=this.capacityBytes)break;this.remove(i)}}get(e){const r=this.entries.get(e);return r?this.hits+=1:this.misses+=1,r==null?void 0:r.target}admit(e,r,i,n=r,s={}){var o;if(this.entries.has(e))return!1;const a=kt(i.width,i.height);return a>this.capacityBytes||(s.evictInactive!==!1&&((o=this.activeVariantIds)!=null&&o.has(n))&&this.evictInactive(a),this.retainedBytes+a>this.capacityBytes)?!1:(this.entries.set(e,{pageId:r,variantId:n,target:i,bytes:a}),this.retainedBytes+=a,!0)}invalidate(e){for(const[r,i]of this.entries)i.pageId===e&&this.remove(r)}clear(){for(const e of this.entries.keys())this.remove(e)}evictInactive(e){if(this.activeVariantIds)for(const[r,i]of this.entries){if(this.retainedBytes+e<=this.capacityBytes)break;this.activeVariantIds.has(i.variantId)||this.remove(r)}}remove(e){const r=this.entries.get(e);r&&(this.entries.delete(e),this.retainedBytes-=r.bytes,Nt(r.target))}}const yp=16,Kn=4;class Sp{constructor(e,r,i,n=4096,s=e){if(this.scene=e,this.renderer=r,this.memoryBudgetBytes=i,this.host=s,!Number.isFinite(i)||!(i>=kt(64,64)))throw new RangeError("Shadow page budget must fit at least one 64-square page");if(!Number.isFinite(n)||n<64)throw new RangeError("Maximum shadow page size must be finite and at least 64");if(r.shadowMap.type!==An)throw new Error("Tiled shadow reference requires the shared PCF shadow path");this.maxMapSize=Math.max(64,2**Math.floor(Math.log2(Math.min(n,r.capabilities.maxTextureSize,Math.sqrt(i/8)))))}pages=new Map;activePageIds=new Set;activeSamples=1;prewarmPageIds=new Set;prewarmSamples=1;prewarmRevision=0;prewarmSink=null;prewarmCamera=new kl([]);cache=new vp;scratchBytes=0;depthRenders=0;colorPasses=0;disposed=!1;streamedTarget=null;maxMapSize;setView(e,r,i,n,s,a){if(this.disposed)return;if(this.clearPrewarmView(),![s.directionToSun.x,s.directionToSun.y,s.directionToSun.z].every(Number.isFinite)||s.directionToSun.lengthSq()===0||s.directionToSun.y<=0)throw new RangeError("Tiled shadow reference requires a finite sun direction above the horizon");const o=id(e,r,i,n);this.activePageIds=new Set(o.map(({id:l})=>l));for(const l of o)this.configurePage(l,s,a);const c=Math.max(32,this.activePageIds.size*2);for(const[l,u]of this.pages){if(this.pages.size<=c)break;this.activePageIds.has(l)||(this.cache.invalidate(l),u.controller.dispose(),this.pages.delete(l))}this.updateActiveVariants(),this.scratchBytes=Math.max(0,...Array.from(this.activePageIds,l=>{const u=this.pages.get(l);return kt(u.width,u.height)})),this.streamedTarget&&kt(this.streamedTarget.width,this.streamedTarget.height)>this.scratchBytes&&(Nt(this.streamedTarget),this.streamedTarget=null),this.cache.setBudget(this.memoryBudgetBytes,this.reservedBytes)}updatePresentation(e){if(this.disposed)return;e.updateMatrixWorld(!0);const r=new ee().multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i=new Gr().setFromProjectionMatrix(r),n=new Set;for(const[s,a]of this.pages)i.intersectsBox(a.receiverBounds)&&(a.screenBounds.copy(cc(a.receiverBounds,r)),n.add(s));this.activePageIds=n,this.updateActiveVariants()}get reservedBytes(){return this.scratchBytes+(this.prewarmSink?Kn:0)}setPrewarmView(e,r,i,n,s,a){if(this.clearPrewarmView(),this.disposed)return;if(!Number.isSafeInteger(a)||a<1||a>4096||!(n>0&&Number.isFinite(n))||![i.x,i.y].every(l=>l>0&&Number.isFinite(l))||!s.directionToSun.toArray().every(Number.isFinite)||s.directionToSun.y<=0)throw new RangeError("Invalid shadow prewarm view");const o=new ee().multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),c=new Set;for(const{id:l,bounds:u}of e){if(c.has(l)||u.isEmpty()||![...u.min.toArray(),...u.max.toArray()].every(Number.isFinite))throw new RangeError("Prewarm cells require unique IDs and finite bounds");c.add(l)}this.prewarmSamples=a;for(const l of e){if(this.prewarmPageIds.size>=yp)break;this.activePageIds.has(l.id)||!this.pages.has(l.id)&&this.pages.size>=Math.max(32,this.activePageIds.size*2)||(this.configurePage({...l,screenBounds:new re,groundTexelTargetMeters:Math.max(1e-9,2*n/lc(l.bounds,o,i))},s),this.prewarmPageIds.add(l.id))}}clearPrewarmView(){this.prewarmPageIds.clear(),this.prewarmRevision+=1}get prewarmPages(){const e=[...this.prewarmPageIds].map(i=>{const n=this.pages.get(i),s=this.countPrewarmSamples(i,n);return{id:i,receiverBounds:n.receiverBounds.clone(),casterBounds:n.casterBounds.clone(),width:n.width,height:n.height,samples:this.prewarmSamples,cachedSamples:s,sampleBudget:s,limited:n.limited,canPrewarm:!1}});let r=this.cache.availableBytes-(this.prewarmSink?0:Kn);for(;r>0;){const i=e.filter(n=>n.sampleBudget<n.samples&&kt(n.width,n.height)<=r).sort((n,s)=>n.sampleBudget-s.sampleBudget);if(i.length===0)break;for(const n of i){const s=kt(n.width,n.height);s>r||(n.sampleBudget+=1,r-=s)}}return e.map(i=>({...i,canPrewarm:i.sampleBudget>i.cachedSamples}))}canPrewarm(e){return!this.disposed&&this.prewarmPages.some(r=>r.id===e&&r.canPrewarm)}countPrewarmSamples(e,r){const i=JSON.stringify([e,r.projectionKey,this.prewarmSamples]);let n=0;for(let s=0;s<this.prewarmSamples;s+=1)this.cache.has(JSON.stringify([i,s]))&&(n+=1);return n}prewarmNext(e,r,i={}){var S,f;const n=this.pages.get(r),s=!this.disposed&&this.prewarmPageIds.has(r)&&!!n,a=(v,b=!1)=>{var A;const R=s?this.countPrewarmSamples(r,n):0;return{pageId:r,rendered:v,cachedSamples:R,totalSamples:s?this.prewarmSamples:0,complete:s&&R===this.prewarmSamples,budgetLimited:b,aborted:((A=i.signal)==null?void 0:A.aborted)===!0}};if(!s||(S=i.signal)!=null&&S.aborted)return a(0);const o=this.prewarmRevision,c=n.contentRevision;if(this.renderer.shadowMap.type!==An)throw new Error("Shadow prewarm requires the shared PCF shadow path");const l=JSON.stringify([r,n.projectionKey,this.prewarmSamples]);let u=0;for(;u<this.prewarmSamples&&this.cache.has(JSON.stringify([l,u]));)u+=1;if(u===this.prewarmSamples)return a(0);if(!this.canPrewarm(r)||kt(n.width,n.height)+(this.prewarmSink?0:Kn)>this.cache.availableBytes)return a(0,!0);this.prewarmSink||(this.prewarmSink=new $e(1,1,{depthBuffer:!1}),this.cache.setBudget(this.memoryBudgetBytes,this.reservedBytes));const g=n.controller.lights[0];this.prewarmSamples===1?n.controller.restoreSunDiscCenter():n.controller.applySunDiscSample(u,this.prewarmSamples),g.shadow.map=null,g.shadow.needsUpdate=!0;const p=g.visible;g.visible=!0,this.prewarmCamera.layers.mask=e.layers.mask,this.prewarmCamera.matrixAutoUpdate=!1,this.prewarmCamera.matrixWorldAutoUpdate=!1,this.prewarmCamera.matrixWorld.copy(e.matrixWorld),this.prewarmCamera.matrixWorldInverse.copy(e.matrixWorldInverse),this.prewarmCamera.projectionMatrix.copy(e.projectionMatrix);let h=0;try{this.renderPrewarmDepth(g);const v=g.shadow.map;v&&(h=1,this.depthRenders+=1,((f=i.signal)!=null&&f.aborted||o!==this.prewarmRevision||c!==n.contentRevision||!this.prewarmPageIds.has(r)||!this.cache.admit(JSON.stringify([l,u]),r,v,l,{evictInactive:!1}))&&Nt(v))}catch(v){throw g.shadow.map&&Nt(g.shadow.map),v}finally{g.visible=p,g.shadow.map=null}return a(h)}renderPrewarmDepth(e){const{renderer:r,scene:i}=this,n=r.getContext(),s=r.getRenderTarget(),a=r.getActiveCubeFace(),o=r.getActiveMipmapLevel(),c=r.getViewport(new re),l=r.getScissor(new re),u=r.getScissorTest(),d=n.getParameter(n.DRAW_FRAMEBUFFER_BINDING),g=n.getParameter(n.READ_FRAMEBUFFER_BINDING),p=new re().fromArray(n.getParameter(n.VIEWPORT)),h=new re().fromArray(n.getParameter(n.SCISSOR_BOX)),S=n.isEnabled(n.SCISSOR_TEST),f=n.isEnabled(n.DEPTH_TEST),v=n.getParameter(n.DEPTH_RANGE),b=n.getParameter(n.DEPTH_WRITEMASK),R=n.getParameter(n.DEPTH_FUNC),A=n.getParameter(n.DEPTH_CLEAR_VALUE),M=n.getParameter(n.COLOR_CLEAR_VALUE),C=n.getParameter(n.COLOR_WRITEMASK),E=r.clippingPlanes,F=r.autoClear,k=i.background,U=r.xr.enabled,G=r.shadowMap.enabled,Y=r.shadowMap.autoUpdate,O=r.shadowMap.needsUpdate,Q=[];i.traverse(P=>{const K=P;K.isLight&&K.castShadow&&K!==e&&Q.push(K)});try{r.resetState(),r.autoClear=!1,r.xr.enabled=!1,r.shadowMap.enabled=!0,r.shadowMap.autoUpdate=!0;for(const P of Q)P.castShadow=!1;i.background=null,r.clippingPlanes=E,r.setRenderTarget(this.prewarmSink),n.depthRange(0,1),r.render(i,this.prewarmCamera)}finally{r.clippingPlanes=E,r.autoClear=F,r.xr.enabled=U,r.shadowMap.enabled=G,r.shadowMap.autoUpdate=Y,r.shadowMap.needsUpdate=O;for(const P of Q)P.castShadow=!0;i.background=k,r.resetState(),r.setRenderTarget(s,a,o),r.setViewport(c),r.setScissor(l),r.setScissorTest(u),r.state.bindFramebuffer(n.DRAW_FRAMEBUFFER,d),r.state.bindFramebuffer(n.READ_FRAMEBUFFER,g),r.state.viewport(p),r.state.scissor(h),r.state.setScissorTest(S),f?r.state.enable(n.DEPTH_TEST):r.state.disable(n.DEPTH_TEST),n.depthRange(v[0],v[1]),n.depthMask(b),n.depthFunc(R),n.clearDepth(A),n.clearColor(M[0],M[1],M[2],M[3]),n.colorMask(C[0],C[1],C[2],C[3])}}configurePage(e,r,i){let n=this.pages.get(e.id);if(!n){const u=new el(this.host);u.setMaxShadowMapSize(this.maxMapSize),u.setSoftSun(!0),n={controller:u,projectionKey:"",lightingKey:"",presentationKey:"",corridor:new Le,planes:[],width:0,height:0,limited:!1,screenBounds:e.screenBounds,receiverBounds:e.bounds.clone(),groundTexelTargetMeters:e.groundTexelTargetMeters,casterBounds:new Le,contentRevision:0,casterRevision:null}}this.pages.delete(e.id),this.pages.set(e.id,n);const s=n.controller.update({...r,maxReceiverBiasMeters:i?i(e.bounds,e.groundTexelTargetMeters):r.maxReceiverBiasMeters,receiverWorldPoints:$r(e.bounds),receiverAnchorWorldPosition:e.bounds.getCenter(new T),minimumElevationMeters:e.bounds.min.y,maximumElevationMeters:e.bounds.max.y,quality:4,groundTexelFit:!0,groundTexelTargetMeters:e.groundTexelTargetMeters});if(!s)return;const a=n.controller.lights[0];a.visible=!1;const o=s.camera,c=e.receiverObjectId===void 0?"spatial-partition-v1":"native-object-v1",l=JSON.stringify([c,o.viewMatrixElements,o.projectionMatrixElements,o.shadowMapWidth,o.shadowMapHeight,a.shadow.bias,a.shadow.normalBias,e.bounds.min,e.bounds.max]);n.projectionKey=l,n.lightingKey=JSON.stringify([r.directionToSun,r.shadowIntensity,e.bounds.min,e.bounds.max]),n.presentationKey=JSON.stringify([c,r.directionToSun,r.shadowIntensity,e.bounds.min.x,e.bounds.min.z,e.bounds.max.x,e.bounds.max.z]),n.receiverBounds.copy(e.bounds),n.receiverObjectId=e.receiverObjectId,n.groundTexelTargetMeters=e.groundTexelTargetMeters,n.screenBounds=e.screenBounds,n.width=o.shadowMapWidth,n.height=o.shadowMapHeight,n.limited=(o.groundTexelWidthMeters??1/0)>e.groundTexelTargetMeters*1.001||(o.groundTexelHeightMeters??1/0)>e.groundTexelTargetMeters*1.001,n.casterBounds.copy(nd(e.bounds,r.directionToSun,s.casterReachMeters+e.bounds.getSize(new T).length(),Fr,o.guardMeters)),n.corridor.union(n.casterBounds),n.planes=[new lt(new T(1,0,0),-e.bounds.min.x),new lt(new T(-1,0,0),e.bounds.max.x),new lt(new T(0,0,1),-e.bounds.min.z),new lt(new T(0,0,-1),e.bounds.max.z)]}invalidateCasters(e){const r=e instanceof Le?[e]:e,i=[];for(const[n,s]of this.pages)r.some(a=>s.corridor.intersectsBox(a))&&(s.contentRevision+=1,this.cache.invalidate(n),i.push(n));return i}setCasterRevision(e,r){const i=this.pages.get(e);return!i||r===null||i.casterRevision===r?!1:(i.casterRevision=r,i.contentRevision+=1,this.cache.invalidate(e),!0)}renderSample(e,r,i){this.renderSamples(e,this.activePageIds,r,i)}renderPageSample(e,r,i,n,s){return this.disposed||!this.activePageIds.has(r)?!1:this.renderSamples(e,[r],i,n,s)>0}renderPageColor(e,r){const i=this.pages.get(r);if(this.disposed||!i||!this.activePageIds.has(r))return!1;const{renderer:n,scene:s}=this,a=n.clippingPlanes,o=n.autoClear,c=s.background,l=n.shadowMap.autoUpdate,u=n.shadowMap.needsUpdate;n.autoClear=!1,n.shadowMap.autoUpdate=!1,n.shadowMap.needsUpdate=!1,n.clippingPlanes=[...a,...i.planes],s.background=null;try{const d=So(s,i.receiverObjectId,n,e,"color-only");return d&&(this.colorPasses+=1),d}finally{n.clippingPlanes=a,n.autoClear=o,n.shadowMap.autoUpdate=l,n.shadowMap.needsUpdate=u,s.background=c}}get accumulationPages(){return[...this.activePageIds].map(e=>{const r=this.pages.get(e),i=r.controller.lights[0];return{id:e,receiverObjectId:r.receiverObjectId,contentKey:JSON.stringify([r.lightingKey,r.contentRevision]),casterRevision:r.casterRevision,presentationKey:r.presentationKey,revision:JSON.stringify([r.projectionKey,r.contentRevision,i.color.toArray(),i.intensity,i.shadow.intensity]),screenBounds:r.screenBounds.clone(),receiverBounds:r.receiverBounds.clone(),groundTexelTargetMeters:r.groundTexelTargetMeters}})}areCastersReady(e,r){const i=this.pages.get(e);return!!(i&&r(i.casterBounds))}getPageGeometry(e){const r=this.pages.get(e);return r?{casterBounds:r.casterBounds.clone(),receiverBounds:r.receiverBounds.clone(),width:r.width,height:r.height,projectionKey:r.projectionKey}:null}get supportsOpaqueAccumulation(){let e=!0;return this.scene.traverseVisible(r=>{const i=r;if(!(!i.isMesh||!i.receiveShadow))for(const n of Array.isArray(i.material)?i.material:[i.material])n.visible&&(n.transparent||!n.depthWrite||!n.depthTest)&&(e=!1)}),e}renderSamples(e,r,i,n,s){if(this.disposed)return 0;if(this.renderer.shadowMap.type!==An)throw new Error("Shadow page cache must be recreated after changing the depth/filter format");if(!Number.isInteger(n)||n<1||!Number.isInteger(i)||i<0||i>=n)throw new RangeError("Shadow sample must lie within its finite-disc sequence");n!==this.activeSamples&&(this.activeSamples=n,this.updateActiveVariants());const{renderer:a,scene:o}=this,c=a.clippingPlanes,l=a.autoClear,u=o.background,d=a.getRenderTarget(),g=d==null?void 0:d.scissor.clone(),p=d==null?void 0:d.scissorTest;let h=0;a.autoClear=!1,o.background=null;try{for(const S of r){const f=this.pages.get(S),v=f.controller.lights[0];n===1?f.controller.restoreSunDiscCenter():f.controller.applySunDiscSample(i,n);const b=JSON.stringify([S,f.projectionKey,n]),R=JSON.stringify([b,i]),A=this.cache.get(R);if(!A&&this.streamedTarget&&(this.streamedTarget.width!==f.width||this.streamedTarget.height!==f.height)&&(Nt(this.streamedTarget),this.streamedTarget=null),v.shadow.map=A??this.streamedTarget,A||(this.streamedTarget=null),v.shadow.needsUpdate=!A,v.visible=!0,a.clippingPlanes=[...c,...f.planes],d){const{x:M,y:C,z:E,w:F}=s??f.screenBounds,k=Math.floor(M*d.width),U=Math.floor(C*d.height);d.scissor.set(k,U,Math.ceil((M+E)*d.width)-k,Math.ceil((C+F)*d.height)-U),d.scissorTest=!0,a.setRenderTarget(d)}try{if(So(o,f.receiverObjectId,a,e)&&(this.colorPasses+=1,h+=1),!A&&v.shadow.map){this.depthRenders+=1;const C=v.shadow.map;this.cache.admit(R,S,C,b)||(this.streamedTarget=C)}}catch(M){throw!A&&v.shadow.map&&Nt(v.shadow.map),M}finally{v.visible=!1,v.shadow.map=null}}}finally{a.clippingPlanes=c,a.autoClear=l,o.background=u,d&&g&&(d.scissor.copy(g),d.scissorTest=p??!1,a.setRenderTarget(d))}return h}get stats(){const e=[...this.activePageIds].map(r=>this.pages.get(r));return{pages:e.length,cachedSamplePages:this.cache.count,cacheBytes:this.cache.bytes,scratchBytes:this.reservedBytes,hits:this.cache.hits,misses:this.cache.misses,depthRenders:this.depthRenders,colorPasses:this.colorPasses,limitedPages:e.filter(r=>r.limited).length,dimensions:e.map(r=>`${r.width}×${r.height}`)}}clearCache(){this.cache.clear();for(const e of this.pages.values())e.contentRevision+=1}updateActiveVariants(){this.cache.setActiveVariants(new Set([...this.activePageIds].flatMap(e=>[...new Set([1,this.activeSamples])].map(r=>JSON.stringify([e,this.pages.get(e).projectionKey,r])))))}get pageLevels(){return[...this.activePageIds].map(e=>{const r=this.pages.get(e);return{id:e,level:Math.max(0,Math.round(Math.log2(this.maxMapSize/Math.max(r.width,r.height)))),width:r.width,height:r.height}})}dispose(){var e;if(!this.disposed){this.disposed=!0,this.cache.clear(),this.streamedTarget&&Nt(this.streamedTarget),this.streamedTarget=null,(e=this.prewarmSink)==null||e.dispose(),this.prewarmSink=null,this.clearPrewarmView(),this.scratchBytes=0;for(const r of this.pages.values())r.controller.dispose();this.pages.clear(),this.activePageIds.clear()}}}const wp=async({pages:t,signal:e,prepare:r,render:i,yieldToInput:n})=>{let s=0,a=0,o=0,c=!1;try{for(const l of t){if(e.aborted)break;if(l.cachedSamples>=l.samples){s+=1;continue}if(!l.canPrewarm){c=!0;continue}if(await n(e),e.aborted)break;const u=await r(l,e);try{if(e.aborted)break;if(!u.covered||!u.isCurrent()){a+=1;continue}const d=Math.min(l.samples,l.sampleBudget);d<l.samples&&(c=!0);for(let g=l.cachedSamples;g<d&&(await n(e),!(e.aborted||!u.isCurrent()));g+=1){const p=i(l.id,u.group,e);if(o+=p.rendered,p.complete){s+=1;break}if(p.budgetLimited){c=!0;break}if(p.aborted||!p.rendered)break}}finally{u.dispose()}}}catch(l){if(!e.aborted)throw l}return{offered:t.length,completed:s,skippedCoverage:a,renderedSamples:o,budgetLimited:c,aborted:e.aborted}},_p=t=>{const e=globalThis.scheduler;return e!=null&&e.postTask?e.postTask(()=>{},{priority:"background",delay:0,signal:t}):Promise.reject(new Error("Background scheduler unavailable"))},xp=({getRequest:t})=>{let e=!1,r=null,i=null,n=!1;const s=()=>{n=!1,i==null||i.abort()},a=()=>{if(!e){if(i){n=!0;return}try{const o=globalThis.scheduler;if(typeof(o==null?void 0:o.postTask)!="function")return;const c=t();if(!c||c.key===r)return;r=c.key;const l=new AbortController;i=l;let u=!1;const d=()=>{if(i!==l||u)return;i=null;const g=n;n=!1,g&&a()};try{o.postTask(async()=>{if(e||l.signal.aborted)return;const g=t();if(!(!g||g.key!==c.key)){u=!0;try{await g.run(l.signal)}finally{u=!1,d()}}},{priority:"background",delay:150,signal:l.signal}).then(d,d)}catch{d()}}catch{}}};return{onSettled:a,cancel:s,dispose(){e=!0,s()}}},tl=(t,e,r)=>JSON.stringify([t.matrixWorldInverse.elements,t.projectionMatrix.elements,e,r]),Tp=(t,e)=>{if(!Number.isFinite(e)||e<t.length*8)throw new RangeError("Capture budget must fit at least one scalar/depth pixel per page");const r=[...t].sort((n,s)=>n.id<s.id?-1:n.id>s.id?1:0).map(({id:n,plan:s,screenArea:a})=>({id:n,plan:s,width:s.width,height:s.height,weight:2**Math.floor(Math.log2(Math.max(1/65536,Math.min(1,a))))}));let i=r.reduce((n,s)=>n+s.width*s.height,0);for(;i*8>e;){let n;for(const a of r)a.width===1&&a.height===1||(!n||a.width*a.height/a.weight>n.width*n.height/n.weight)&&(n=a);if(!n)break;const s=n.width*n.height;n.width>=n.height&&n.width>1?n.width/=2:n.height/=2,i-=s-n.width*n.height}return new Map(r.map(({id:n,plan:s,width:a,height:o})=>[n,a===s.width&&o===s.height?s:{...s,width:a,height:o,limited:!0,key:tl(s.camera,a,o)}]))},bp=(t,e,r)=>{const{groundTexelTargetMeters:i,maximumDimension:n,maximumPixels:s}=r;if(t.isEmpty()||![...t.min.toArray(),...t.max.toArray(),...e.toArray()].every(Number.isFinite)||!(i>0&&Number.isFinite(i))||!(n>=1&&Number.isFinite(n))||!(s>=1&&Number.isFinite(s)))throw new RangeError("Receiver capture requires finite bounds and positive allocation limits");const a=t.getCenter(new T),o=t.getSize(new T).length()*.5,c=Math.max(.001,o*.001),l=new bs;l.quaternion.copy(e).normalize(),l.position.copy(a).add(new T(0,0,o+c+1).applyQuaternion(l.quaternion)),l.updateMatrixWorld(!0);const u=new Le().setFromPoints($r(t).map(v=>v.applyMatrix4(l.matrixWorldInverse)));l.left=u.min.x-c,l.right=u.max.x+c,l.bottom=u.min.y-c,l.top=u.max.y+c,l.near=Math.max(.001,-u.max.z-c),l.far=Math.max(l.near+.001,-u.min.z+c),l.updateProjectionMatrix();const d=v=>2**Math.ceil(Math.log2(Math.max(1,v/i))),g=d(l.right-l.left),p=d(l.top-l.bottom),h=2**Math.floor(Math.log2(n));let S=Math.min(g,h),f=Math.min(p,h);for(;S*f>s;)S>=f&&S>1?S/=2:f/=2;return{camera:l,width:S,height:f,limited:S<g||f<p,key:tl(l,S,f)}},Mp=t=>new Hl().setFromRotationMatrix(new ee().extractRotation(t.matrixWorld)),Bi={namespace:"shadow-corridor-visibility",schema:"visibility-depth-world-basis-v1",maximumPayloadBytes:32*1024**2,maximumRecordBytes:33*1024**2,maximumIdentityCharacters:65536},wi={read:"read",write:"write",writePacked:"write-packed"},Ye=t=>{if(!t||!Number.isInteger(t.samples)||t.samples<1||t.samples>4096)return null;const e=[t.source,t.dateTime,t.corridor,t.resolution,t.geometryFingerprint];return e.some(r=>typeof r!="string"||r.length===0)||e.reduce((r,i)=>r+i.length,0)>Bi.maximumIdentityCharacters?null:JSON.stringify([Bi.schema,...e,t.samples])},qn=(t,e)=>Array.isArray(t)&&t.length===e&&t.every(Number.isFinite),rl=t=>{if(!t||typeof t!="object")return!1;const e=t,r=e.width*e.height;return Number.isSafeInteger(e.width)&&e.width>0&&Number.isSafeInteger(e.height)&&e.height>0&&Number.isSafeInteger(r)&&r*8<=Bi.maximumPayloadBytes&&qn(e.captureMatrix,16)&&qn(e.worldBasis,16)&&qn(e.crop,4)&&e.crop[0]>=0&&e.crop[1]>=0&&e.crop[2]>0&&e.crop[3]>0&&e.crop[0]+e.crop[2]<=1.000001&&e.crop[1]+e.crop[3]<=1.000001},wo=t=>{if(!rl(t))return!1;const e=t,r=e.width*e.height;return e.visibility instanceof Float32Array&&e.visibility.length===r&&e.depth instanceof Float32Array&&e.depth.length===r},Ep=t=>{if(!rl(t))return!1;const e=t;return e.rgba instanceof Float32Array&&e.rgba.length===e.width*e.height*4},Er=64,ws=256*1024**2,Xn=ws,Rp=128*1024**2,_o=8,xo=32*1024**2,Ap=4,Rr=t=>{var e;t.target?((e=t.target.depthTexture)==null||e.dispose(),t.target.dispose()):(t.visibility.dispose(),t.depth.dispose())},Cp=(t,e)=>t.elements.every((r,i)=>Number.isFinite(r)&&Math.abs(r-e.elements[i])<=1e-10*Math.max(1,Math.abs(r)));class il{constructor(e){this.renderer=e,this.copyQuad.frustumCulled=!1,this.copyScene.add(this.copyQuad)}captures=new Map;visiblePageIds=new Set;samples=0;replayCount=0;matchingPages=0;persistence;persistenceGeneration=0;disposed=!1;restoreAttempts=new Set;pendingRestores=new Map;restoreRequests=new Map;pendingWrites=new Map;persistenceOffers=new WeakMap;persistenceAttempted=new WeakSet;persistenceTimer=null;readbackBusy=!1;readbackBytes=0;packMaterial=new ir({uniforms:{visibility:{value:null},depth:{value:null}},vertexShader:"varying vec2 uvCopy; void main() { uvCopy = position.xy * 0.5 + 0.5; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:"uniform sampler2D visibility; uniform sampler2D depth; varying vec2 uvCopy; void main() { gl_FragColor = vec4(texture2D(visibility, uvCopy).r, texture2D(depth, uvCopy).r, 0.0, 1.0); }",depthTest:!1,depthWrite:!1,blending:Ti,toneMapped:!1});materials=new Map;unsupportedMaterials=new WeakSet;captureSupported=!0;contentRevision=0;get revision(){return this.contentRevision}get supportsCapture(){return this.captureSupported}copyScene=new Br;copyCamera=new Ui;copyMaterial=new ir({uniforms:{source:{value:null},crop:{value:new re}},vertexShader:"varying vec2 uvCopy; void main() { uvCopy = position.xy * 0.5 + 0.5; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:"uniform sampler2D source; uniform vec4 crop; varying vec2 uvCopy; void main() { gl_FragColor = vec4(texture2D(source, crop.xy + uvCopy * crop.zw).r, 0.0, 0.0, 1.0); }",depthTest:!1,depthWrite:!1,blending:Ti,toneMapped:!1});copyQuad=new Wr(new _s(2,2),this.copyMaterial);downsampleMaterial=new ir({uniforms:{source:{value:null},depth:{value:null},texel:{value:new Lt}},vertexShader:"varying vec2 uvCopy; void main() { uvCopy = position.xy * 0.5 + 0.5; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:`uniform sampler2D source; uniform sampler2D depth;
      uniform vec2 texel; varying vec2 uvCopy;
      void main() {
        vec2 d = texel * 0.25;
        float visibility = (texture2D(source, uvCopy + d).r
          + texture2D(source, uvCopy - d).r
          + texture2D(source, uvCopy + vec2(d.x, -d.y)).r
          + texture2D(source, uvCopy + vec2(-d.x, d.y)).r) * 0.25;
        gl_FragColor = vec4(visibility, 0.0, 0.0, 1.0);
        gl_FragDepth = texture2D(depth, uvCopy).r;
      }`,depthTest:!0,depthFunc:Ko,depthWrite:!0,blending:Ti,toneMapped:!1});uniforms={carmaCaptureVisibility:{value:!1},carmaRetainedEnabled:{value:!1},carmaRetainedColor:{value:null},carmaRetainedDepth:{value:null},carmaRetainedMatrix:{value:new ee},carmaRetainedCrop:{value:new re(0,0,1,1)},carmaRetainedCount:{value:0},carmaRetainedBounds:{value:Array.from({length:Er},()=>new re)}};get memoryBytes(){return[...this.captures.values()].reduce((e,r)=>e+r.bytes,this.readbackBytes)}getCapturedSize(e){const r=this.captures.get(e);return r?{width:r.width,height:r.height,samples:r.samples}:null}get stats(){return{pages:this.captures.size,samples:this.samples,matchingPages:this.matchingPages,replays:this.replayCount,bytes:this.memoryBytes}}beginFrame(e=[]){this.matchingPages=0,this.visiblePageIds=new Set(e.map(r=>r.id)),this.schedulePersistence()}has(e,r){var n;const i=this.captures.get(e.id);if(!this.canReplay(e)||(i==null?void 0:i.casterRevision)!==e.casterRevision)return!1;if(i&&i.samples>1&&i.samples>=r&&e.captureSize&&e.presentationKey&&i.crop.x===0&&i.crop.y===0&&i.crop.z===1&&i.crop.w===1)return i.width>=e.captureSize.width&&i.height>=e.captureSize.height;if(i!=null&&i.restored){const s=this.restoreRequests.get(e.id),a=(n=this.persistence)==null?void 0:n.identity(e,r);if(e.ready===!1||!(s!=null&&s.expected)||!a||Ye(a)!==i.persistentKey||!Cp(i.matrix,s.expected))return!1;const o=e.screenBounds,c=i.crop;if(c.x>o.x+1e-6||c.y>o.y+1e-6||c.x+c.z<o.x+o.z-1e-6||c.y+c.w<o.y+o.w-1e-6)return!1}return(i==null?void 0:i.revision)===(e.contentKey??e.revision)&&i.samples===r}hasAtLeast(e,r){const i=this.captures.get(e.id);return!!(i&&i.samples>=r&&this.has(e,i.samples))}downsample(e,r,i){var f;if(!Number.isInteger(r)||!Number.isInteger(i)||r<1||i<1)return!1;const n=this.captures.get(e.id);if(!n||!this.canReplay(e))return!1;const s=Math.max(r,Math.ceil(n.width/2)),a=Math.max(i,Math.ceil(n.height/2));if(s>n.width||a>n.height||s*a>=n.width*n.height)return!1;const o=new $e(s,a,{type:Mt,format:tr,minFilter:Ie,magFilter:Ie,depthTexture:new sr(s,a,Vt),samples:0}),c=this.renderer,l=c.getRenderTarget(),u=c.getActiveCubeFace(),d=c.getActiveMipmapLevel(),g=c.getViewport(new re),p=c.getScissor(new re),h=c.getScissorTest(),S=c.autoClear;try{c.initRenderTarget(o),this.downsampleMaterial.uniforms.source.value=n.visibility,this.downsampleMaterial.uniforms.depth.value=n.depth,this.downsampleMaterial.uniforms.texel.value.set(1/s,1/a),this.copyQuad.material=this.downsampleMaterial,c.autoClear=!1,c.setRenderTarget(o),c.setViewport(new re(0,0,s,a)),c.setScissorTest(!1),c.render(this.copyScene,this.copyCamera)}catch(v){throw(f=o.depthTexture)==null||f.dispose(),o.dispose(),v}finally{this.copyQuad.material=this.copyMaterial,c.setRenderTarget(l,u,d),c.setViewport(g),c.setScissor(p),c.setScissorTest(h),c.autoClear=S}return this.captures.set(e.id,{...n,target:o,visibility:o.texture,depth:o.depthTexture,width:s,height:a,bytes:s*a*8}),this.pendingWrites.delete(e.id),Rr(n),this.contentRevision+=1,!0}isRestorePending(e,r){var s;const i=this.pendingRestores.get(e.id);if(!i||i.samples!==r)return!1;const n=(s=this.persistence)==null?void 0:s.identity(e,r);return!!(n&&Ye(n)===i.key)}setPersistence(e){this.persistence!==e&&(this.cancelPendingPersistence(),this.persistence=e)}cancelPendingPersistence(){var e;(e=this.persistence)==null||e.cache.cancelPending(),this.persistenceGeneration+=1,this.restoreAttempts.clear(),this.pendingRestores.clear(),this.restoreRequests.clear(),this.pendingWrites.clear(),this.persistenceOffers=new WeakMap,this.persistenceAttempted=new WeakSet,this.persistenceTimer!==null&&clearTimeout(this.persistenceTimer),this.persistenceTimer=null}beginSolarTransition(){this.cancelPendingPersistence()}canPresent(e){return this.canReplay(e)}prepareRestore(e,r,i){if(this.disposed)return;if(this.restoreRequests.set(e.id,{page:e,samples:r,expected:i==null?void 0:i.clone()}),this.restoreRequests.size>Er*2){for(const l of this.restoreRequests.keys())if(l!==e.id&&!this.visiblePageIds.has(l)){this.restoreRequests.delete(l);break}}const n=this.persistence;if(!(n!=null&&n.cache.enabled)||n.cache.busy||e.ready===!1||this.hasAtLeast(e,r))return;const s=n.identity(e,r),a=s&&Ye(s);if(!s||!a||this.restoreAttempts.has(a))return;this.restoreAttempts.add(a),this.restoreAttempts.size>Er*4&&this.restoreAttempts.delete(this.restoreAttempts.values().next().value);const o=this.persistenceGeneration,c=this.captures.get(e.id);this.pendingRestores.set(e.id,{key:a,samples:r}),n.cache.read(s).then(l=>{const u=this.restoreRequests.get(e.id),d=u&&n.identity(u.page,r);if(!l||this.disposed||this.persistenceGeneration!==o||this.persistence!==n||!u||u.page.ready===!1||!d||Ye(d)!==a||this.captures.get(e.id)!==c)return;const g=new ee().fromArray(l.worldBasis),p=n.worldBasis();if(!g.elements.every(Number.isFinite)||g.determinant()===0||!p.elements.every(Number.isFinite)||p.determinant()===0)return;const h=new ee().fromArray(l.captureMatrix).multiply(g.invert()).multiply(p),S=[...new Set([l.visibility.buffer,l.depth.buffer])].reduce((R,A)=>R+A.byteLength,0),f=l.width*l.height*_o+S;if(!this.admit(e.id,f))return;const v=new ns(l.visibility,l.width,l.height,tr,Mt),b=new ns(l.depth,l.width,l.height,tr,Mt);for(const R of[v,b])R.minFilter=Ie,R.magFilter=Ie,R.generateMipmaps=!1,R.needsUpdate=!0;c&&Rr(c),this.captures.delete(e.id),this.captures.set(e.id,{target:null,visibility:v,depth:b,width:l.width,height:l.height,bytes:f,restored:!0,persistentKey:a,persistentIdentity:l.identity,revision:u.page.contentKey??u.page.revision,casterRevision:u.page.casterRevision,presentationKey:u.page.presentationKey??u.page.contentKey??u.page.revision,samples:l.identity.samples,matrix:h,crop:new re().fromArray(l.crop)}),this.samples=l.identity.samples,this.contentRevision+=1}).catch(()=>{}).finally(()=>{var l,u;!this.disposed&&o===this.persistenceGeneration&&(((l=this.pendingRestores.get(e.id))==null?void 0:l.key)===a&&this.pendingRestores.delete(e.id),(u=n.requestRepaint)==null||u.call(n),this.schedulePersistence())})}admit(e,r,i=!1){var a;const n=i?Math.min(((a=this.captures.get(e))==null?void 0:a.bytes)??0,Rp):0,s=Xn+n;for(const[o,c]of this.captures){if(r+this.memoryBytes<=s)break;o===e||this.visiblePageIds.has(o)||(Rr(c),this.captures.delete(o),this.contentRevision+=1,this.pendingWrites.delete(o))}return r+this.memoryBytes<=s}publish(e,r,i,n,s){var k;if(!this.captureSupported)return!1;const a=n.screenBounds,o=Math.max(0,Math.floor(a.x*e.width)),c=Math.max(0,Math.floor(a.y*e.height)),l=Math.min(e.width,Math.ceil((a.x+a.z)*e.width)),u=Math.min(e.height,Math.ceil((a.y+a.w)*e.height)),d=l-o,g=u-c,p=d*g*_o;if(d<=0||g<=0||p>Xn||!r.depthTexture||!this.admit(n.id,p,!0))return!1;const h=this.renderer,S=h.getRenderTarget(),f=h.getActiveCubeFace(),v=h.getActiveMipmapLevel(),b=h.getViewport(new re),R=h.getScissor(new re),A=h.getScissorTest(),M=h.autoClear,C=new $e(d,g,{type:Mt,format:tr,minFilter:Ie,magFilter:Ie,depthTexture:new sr(d,g,Vt),samples:0});try{h.initRenderTarget(C);const U=new zl(new Lt(o,c),new Lt(l,u));this.copyMaterial.uniforms.source.value=e.texture,this.copyMaterial.uniforms.crop.value.set(o/e.width,c/e.height,d/e.width,g/e.height),h.autoClear=!1,h.setRenderTarget(C),h.setViewport(new re(0,0,d,g)),h.setScissorTest(!1),h.render(this.copyScene,this.copyCamera),h.copyTextureToTexture(r.depthTexture,C.depthTexture,U)}catch(U){throw(k=C.depthTexture)==null||k.dispose(),C.dispose(),U}finally{h.setRenderTarget(S,f,v),h.setViewport(b),h.setScissor(R),h.setScissorTest(A),h.autoClear=M}const E=this.captures.get(n.id);E&&Rr(E),this.samples=s,this.captures.delete(n.id);const F={target:C,visibility:C.texture,depth:C.depthTexture,width:d,height:g,bytes:p,restored:!1,revision:n.contentKey??n.revision,casterRevision:n.casterRevision,samples:s,presentationKey:n.presentationKey??n.contentKey??n.revision,matrix:new ee().multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),crop:new re(o/e.width,c/e.height,d/e.width,g/e.height)};return this.captures.set(n.id,F),this.contentRevision+=1,this.queuePersistence(n,F),!0}queuePersistence(e,r){const i=this.persistence;if(!(i!=null&&i.cache.enabled)||e.ready===!1||this.disposed)return;const n=i.identity(e,r.samples),s=n&&Ye(n),a=i.worldBasis();!n||n.samples!==r.samples||!s||!a.elements.every(Number.isFinite)||a.determinant()===0||r.width*r.height*16>xo||(this.pendingWrites.delete(e.id),this.persistenceOffers.set(r,{page:e,capture:r,identity:n,key:s,worldBasis:[...a.elements]}),this.schedulePersistence())}schedulePersistence(){var e;if(!(this.disposed||this.persistenceTimer!==null||this.readbackBusy||!((e=this.persistence)!=null&&e.cache.enabled)||this.persistence.cache.busy)){for(const[r,i]of this.pendingWrites)this.captures.get(r)!==i.capture&&this.pendingWrites.delete(r);for(const r of[!0,!1])for(const[i,n]of this.captures){if(this.pendingWrites.size>=Ap)break;const s=this.persistenceOffers.get(n);this.visiblePageIds.has(i)===r&&s&&!this.persistenceAttempted.has(n)&&!this.pendingWrites.has(i)&&this.pendingWrites.set(i,s)}this.pendingWrites.size!==0&&(this.persistenceTimer=setTimeout(()=>{this.persistenceTimer=null,this.persistNextCapture()},0))}}persistNextCapture(){var h,S,f;const e=this.persistence;if(this.disposed||this.readbackBusy||!(e!=null&&e.cache.enabled)||e.cache.busy||typeof this.renderer.readRenderTargetPixelsAsync!="function")return;const r=[...this.pendingWrites.entries()].find(([v,b])=>this.captures.get(v)===b.capture);if(!r){this.pendingWrites.clear();return}const[i,n]=r,s=((h=this.restoreRequests.get(i))==null?void 0:h.page)??n.page,a=e.identity(s,n.capture.samples);if(s.ready===!1||!a||Ye(a)!==n.key){this.pendingWrites.delete(i),this.persistenceAttempted.add(n.capture),this.schedulePersistence();return}const{capture:o}=n,c=o.width*o.height*16;if(c>xo||this.memoryBytes+c*2>Xn){this.pendingWrites.delete(i),this.persistenceAttempted.add(o),this.schedulePersistence();return}const l=this.persistenceGeneration,u={target:null,pixels:null,reading:null},d=()=>{const v=this.renderer,b=v.getRenderTarget(),R=v.getActiveCubeFace(),A=v.getActiveMipmapLevel(),M=v.getViewport(new re),C=v.getScissor(new re),E=v.getScissorTest(),F=v.autoClear,k=this.copyQuad.material;try{u.target=new $e(o.width,o.height,{format:kr,type:Mt,depthBuffer:!1,minFilter:Ie,magFilter:Ie}),v.initRenderTarget(u.target),u.pixels=new Float32Array(o.width*o.height*4),this.packMaterial.uniforms.visibility.value=o.visibility,this.packMaterial.uniforms.depth.value=o.depth,this.copyQuad.material=this.packMaterial,v.autoClear=!1,v.setRenderTarget(u.target),v.setViewport(new re(0,0,o.width,o.height)),v.setScissorTest(!1),v.render(this.copyScene,this.copyCamera),u.reading=v.readRenderTargetPixelsAsync(u.target,0,0,o.width,o.height,u.pixels)}finally{this.copyQuad.material=k,v.setRenderTarget(b,R,A),v.setViewport(M),v.setScissor(C),v.setScissorTest(E),v.autoClear=F}};try{if(e.runIdleRender){if(!e.runIdleRender(d)&&!u.target)return}else d()}catch{(S=u.target)==null||S.dispose(),this.pendingWrites.delete(i),this.persistenceAttempted.add(o),this.schedulePersistence();return}if(!u.reading||!u.target||!u.pixels){(f=u.target)==null||f.dispose();return}const g=u.target,p=u.pixels;this.pendingWrites.delete(i),this.persistenceAttempted.add(o),this.readbackBusy=!0,this.readbackBytes=c*2,u.reading.then(async()=>{var R;const v=((R=this.restoreRequests.get(i))==null?void 0:R.page)??n.page,b=e.identity(v,o.samples);this.disposed||l!==this.persistenceGeneration||this.persistence!==e||v.ready===!1||!b||Ye(b)!==n.key||await e.cache.writePacked(n.identity,{width:o.width,height:o.height,rgba:p,captureMatrix:[...o.matrix.elements],crop:o.crop.toArray(),worldBasis:n.worldBasis})}).catch(()=>{}).finally(()=>{var v;g.dispose(),this.readbackBusy=!1,this.readbackBytes=0,this.disposed||((v=e.requestRepaint)==null||v.call(e),this.schedulePersistence())})}canReplay(e){var i;const r=this.captures.get(e.id);if(!r||r.presentationKey!==(e.presentationKey??e.contentKey??e.revision))return!1;if(r.restored){const n=(i=this.persistence)==null?void 0:i.identity(e,r.samples),s=r.persistentIdentity;if(e.captureSize&&s)return!!(n&&n.source===s.source&&n.dateTime===s.dateTime&&n.corridor===s.corridor&&n.geometryFingerprint===s.geometryFingerprint&&n.samples===s.samples);if(!n||Ye(n)!==r.persistentKey)return!1}return!0}activate(e){const r=this.captures.get(e.id);this.captures.delete(e.id),this.captures.set(e.id,r),this.uniforms.carmaRetainedMatrix.value.copy(r.matrix),this.uniforms.carmaRetainedCrop.value.copy(r.crop),this.uniforms.carmaRetainedColor.value=r.visibility,this.uniforms.carmaRetainedDepth.value=r.depth,this.matchingPages+=1,this.replayCount+=1,this.uniforms.carmaRetainedCount.value=1;const i=e.receiverBounds;this.uniforms.carmaRetainedBounds.value[0].set(i.min.x,i.min.z,i.max.x,i.max.z),this.uniforms.carmaRetainedEnabled.value=!0}renderNative(e,r,i){if(r.length===0)return i(),new Set;this.configureScene(e);const n=new Map(r.filter(u=>u.receiverObjectId!==void 0&&this.canPresent(u)).map(u=>[u.receiverObjectId,u])),s=[],a=new Map;e.traverseVisible(u=>{const d=u;if(!d.isMesh)return;let g;for(let p=d;p&&(g=n.get(p.id),!g);p=p.parent);s.push({mesh:d,page:g});for(const p of Array.isArray(d.material)?d.material:[d.material]){let h=a.get(p);h||a.set(p,h=new Set),h.add(g==null?void 0:g.id)}});const o=new Set;for(const u of a.values())if(!(u.size<2))for(const d of u)d!==void 0&&o.add(d);const c=new Set,l=[];for(const{mesh:u,page:d}of s){const g=u.onBeforeRender,p=d!==void 0&&!o.has(d.id);u.onBeforeRender=(...h)=>{g.call(u,...h),this.uniforms.carmaRetainedEnabled.value=!1,p&&this.activate(d)},p&&c.add(d.id),l.push(()=>{u.onBeforeRender=g})}this.uniforms.carmaRetainedEnabled.value=!1;try{return i(),c}finally{this.uniforms.carmaRetainedEnabled.value=!1;for(const u of l)u()}}render(e,r,i,n){if(!this.canPresent(r))return n();this.configureScene(e),this.activate(r);try{return n()}finally{this.uniforms.carmaRetainedEnabled.value=!1}}capture(e,r){this.captureSupported=!0,this.configureScene(e),this.uniforms.carmaCaptureVisibility.value=!0;try{return r()}finally{this.uniforms.carmaCaptureVisibility.value=!1}}configureScene(e){e.traverseVisible(r=>{const i=r;if(!(!i.isMesh||!i.receiveShadow)){if(i.isInstancedMesh||i.isSkinnedMesh){this.captureSupported=!1;return}for(const n of Array.isArray(i.material)?i.material:[i.material]){if(this.unsupportedMaterials.has(n)&&(this.captureSupported=!1),!(n.isMeshStandardMaterial||n.isMeshLambertMaterial||n.isMeshPhongMaterial)||n.transparent){this.captureSupported=!1;continue}this.materials.has(n)||this.configure(n)}}})}configure(e){const r=e.onBeforeCompile,i=e.customProgramCacheKey,n=this.uniforms,s=(l,u)=>{r.call(e,l,u);const d=/getShadow\( directionalShadowMap\[ i \][^;]+?\)/;if(!l.vertexShader.includes("#include <common>")||!l.vertexShader.includes("#include <project_vertex>")||!l.fragmentShader.includes("#include <common>")||!l.fragmentShader.includes("#include <lights_fragment_begin>")||!l.fragmentShader.includes("#include <dithering_fragment>")||!d.test(ss.lights_fragment_begin)){this.unsupportedMaterials.add(e),this.captureSupported=!1;return}this.unsupportedMaterials.delete(e),Object.assign(l.uniforms,n),l.vertexShader=l.vertexShader.replace("#include <common>",`#include <common>
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
uniform vec4 carmaRetainedBounds[${Er}];
varying vec4 vCarmaRetainedClip;
varying vec2 vCarmaRetainedWorld;
float carmaRetainedCoverage(float fallbackCoverage) {
  vec3 ndc = vCarmaRetainedClip.xyz / vCarmaRetainedClip.w;
  vec2 uv = ndc.xy * 0.5 + 0.5;
  uv = (uv - carmaRetainedCrop.xy) / carmaRetainedCrop.zw;
  if (!carmaRetainedEnabled || carmaCaptureVisibility || vCarmaRetainedClip.w <= 0.0) return fallbackCoverage;
  bool owned = false;
  for (int i = 0; i < ${Er}; i++) {
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
`);const g=ss.lights_fragment_begin.replace(d,p=>`(carmaCapturedCoverage = ${p}, carmaRetainedCoverage(carmaCapturedCoverage))`);l.fragmentShader=l.fragmentShader.replace("#include <lights_fragment_begin>",`float carmaCapturedCoverage = 1.0;
${g}`).replace("#include <dithering_fragment>",`#include <dithering_fragment>
if (carmaCaptureVisibility) gl_FragColor.rgb = vec3(carmaCapturedCoverage);`)},a=()=>`${i.call(e)}|retained-corridor-visibility-v4`;e.onBeforeCompile=s,e.customProgramCacheKey=a,e.needsUpdate=!0;const o=()=>{e.onBeforeCompile===s&&(e.onBeforeCompile=r),e.customProgramCacheKey===a&&(e.customProgramCacheKey=i),e.removeEventListener("dispose",c),e.needsUpdate=!0},c=()=>{o(),this.materials.delete(e)};e.addEventListener("dispose",c),this.materials.set(e,o)}dispose(){this.disposed=!0,this.setPersistence(void 0);for(const e of this.captures.values())Rr(e);this.captures.clear(),this.uniforms.carmaRetainedEnabled.value=!1,this.uniforms.carmaRetainedColor.value=null,this.uniforms.carmaRetainedDepth.value=null,this.copyQuad.geometry.dispose(),this.copyMaterial.dispose(),this.downsampleMaterial.dispose(),this.packMaterial.dispose();for(const e of this.materials.values())e();this.materials.clear()}}const Ht=64,Ei=512*1024**2,et={inactive:"inactive",dimensions:"dimensions",budget:"budget",msaa:"msaa",format:"format",receivers:"receivers",pages:"pages",renderer:"renderer",disposed:"disposed"},To=`
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
`;class Pp{constructor(e,r){this.renderer=e,this.ownsPresentation=r===void 0,this.presentation=r??new il(e),this.quad.frustumCulled=!1,this.fullscreenScene.add(this.quad)}fullscreenScene=new Br;fullscreenCamera=new bs(-1,1,1,-1,0,1);blendMaterial=new ir({glslVersion:Ur,vertexShader:To,fragmentShader:Ip,uniforms:{tPrevious:{value:null},tReference:{value:null},tReferenceDepth:{value:null},tSample:{value:null},tSampleDepth:{value:null},uInverseViewProjection:{value:new ee},uBounds:{value:Array.from({length:Ht},()=>new re)},uBoundsCount:{value:0},uRefresh:{value:!1},uResetAll:{value:!1},uWeights:{value:new Float32Array(Ht).fill(1)}},depthTest:!1,depthWrite:!1,blending:Ti});compositeMaterial=new ir({glslVersion:Ur,vertexShader:To,fragmentShader:Dp,uniforms:{tColor:{value:null},tDepth:{value:null},uOutputDither:{value:!1}},dithering:!0,transparent:!0,blending:Uo,depthTest:!0,depthFunc:Ko,depthWrite:!0});quad=new Wr(new _s(2,2),this.blendMaterial);referenceTarget=null;sampleTarget=null;readTarget=null;writeTarget=null;pages=new Map;stateKey="";targetKey="";cursor=0;totalSamples=1;broken=!1;disposed=!1;allocatedBytes=0;lastFallbackReason=null;presentation;publishedStateKeys=new Map;publicationRetryMs=250;ownsPresentation;get pageProgress(){return[...this.pages].map(([e,r])=>({id:e,samples:r.samples,totalSamples:this.totalSamples,ready:r.page.ready!==!1,published:this.publishedStateKeys.get(e)===JSON.stringify([this.stateKey,r.page.revision])}))}get memoryBytes(){return this.allocatedBytes+this.presentation.memoryBytes}get fallbackReason(){return this.lastFallbackReason}render(e,r,i){var F,k;if(this.disposed)return this.fallback(et.disposed);if(this.broken)return this.fallback(et.renderer);if(!i.active)return this.stateKey="",this.lastFallbackReason=et.inactive,null;const{width:n,height:s,samples:a}=i,o=Rs((F=i.options)==null?void 0:F.format),c=((k=i.options)==null?void 0:k.msaaSamples)??qo.msaaSamples,l=n*s,u=i.visibilityOnly?tr:kr,d=i.visibilityOnly?1:4,g=l*(2*(o.bytesPerPixel*d/4+4)+2*o.accumulationBytesPerPixel*d/4);if(!Number.isInteger(n)||n<1||!Number.isInteger(s)||s<1||!Number.isInteger(a)||a<1||n>this.renderer.capabilities.maxTextureSize||s>this.renderer.capabilities.maxTextureSize)return this.fallback(et.dimensions);if(i.maxRenderTargetPixels!==void 0&&(!(i.maxRenderTargetPixels>0)||l>i.maxRenderTargetPixels)||g+this.presentation.memoryBytes>Ei)return this.fallback(et.budget);if(o.format!==kr)return this.fallback(et.format);if(c!==0)return this.fallback(et.msaa);if(!r.supportsOpaqueAccumulation)return this.fallback(et.receivers);const p=r.accumulationPages.map(U=>{var G;return{...U,ready:U.ready!==!1&&(((G=i.isPageReady)==null?void 0:G.call(i,U.id))??!0)}});if(p.length===0||p.length>Ht)return this.fallback(et.pages);this.lastFallbackReason=null;const h=this.renderer,S=h.getRenderTarget(),f=h.getActiveCubeFace(),v=h.getActiveMipmapLevel(),b=h.getClearColor(new Ge),R=h.getClearAlpha(),A=h.autoClear,M=h.getViewport(new re),C=h.getScissor(new re),E=h.getScissorTest();try{h.autoClear=!1;const U=JSON.stringify([n,s,o.type,o.accumulationType,u]);if(this.targetKey!==U){this.releaseTargets();const D={type:o.type,format:u,minFilter:Ie,magFilter:Ie,depthBuffer:!0,samples:0};this.referenceTarget=new $e(n,s,{...D,depthTexture:new sr(n,s,Vt)}),this.sampleTarget=new $e(n,s,{...D,depthTexture:new sr(n,s,Vt)});const J={type:o.accumulationType,format:u,minFilter:Ie,magFilter:Ie,depthBuffer:!1};this.readTarget=new $e(n,s,J),this.writeTarget=new $e(n,s,J),this.targetKey=U,this.allocatedBytes=g}const G=JSON.stringify([i.viewKey,i.visibilityOnly?0:i.styleEpoch,a,U]),Y=this.stateKey!==G,O=new Set(p.map(({id:D})=>D)),Q=[...this.pages.values()].filter(({page:D})=>!O.has(D.id)).map(({page:D})=>D),K=[...Y?p:p.filter(D=>{var Pe;const J=(Pe=this.pages.get(D.id))==null?void 0:Pe.page;return(J==null?void 0:J.revision)!==D.revision||(J==null?void 0:J.ready)===!1&&D.ready}),...Q].flatMap(D=>[D.screenBounds,...this.pages.has(D.id)?[this.pages.get(D.id).page.screenBounds]:[]]),B=Y?p:p.filter(D=>K.some(J=>this.overlaps(D.screenBounds,J)));this.blendMaterial.uniforms.uInverseViewProjection.value.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse).invert(),Y&&(this.pages.clear(),this.cursor=0);for(const D of Q)this.pages.delete(D.id);for(const D of B)this.publishedStateKeys.delete(D.id);B.length>0&&(this.publicationRetryMs=250),this.cursor%=Math.max(1,p.length);for(const D of p){const J=this.pages.get(D.id);J?J.page=D:this.pages.set(D.id,{page:D,samples:0})}if(this.totalSamples=a,B.length>0||Q.length>0){this.clearTarget(this.referenceTarget),r.renderSample(e,0,a),this.blend(B,!0,Y,B.map(()=>1));for(const D of B)this.pages.get(D.id).samples=1}else{const D=[...this.pages.values()],J=performance.now(),Pe=i.maxPagesPerFrame??4,be=Number.isFinite(Pe)?Math.min(Ht,Math.max(1,Math.floor(Pe))):4,ft=i.maxFrameCpuMilliseconds??4,ce=Number.isFinite(ft)?Math.max(0,ft):4;let pt=0;do{const Ae=[],Ue=this.cursor;for(let pe=0;pe<D.length;pe+=1){const Ct=(Ue+pe)%D.length,Me=D[Ct];if(!(Me.samples>=a||Me.page.ready===!1)){if(Ae.length===0&&this.clearTarget(this.sampleTarget),!r.renderPageSample(e,Me.page.id,Me.samples,a))return this.fallback(et.pages);if(Ae.push(Me),pt+=1,this.cursor=(Ct+1)%D.length,pt>=be||performance.now()-J>=ce)break}}if(Ae.length===0)break;this.blend(Ae.map(({page:pe})=>pe),!1,!1,Ae.map(pe=>1/(pe.samples+1)));for(const pe of Ae)pe.samples+=1}while(pt<be&&performance.now()-J<ce)}this.stateKey=G,h.setRenderTarget(S,f,v),h.setViewport(M),h.setScissor(C),h.setScissorTest(E),this.quad.material=this.compositeMaterial;const Se=[...this.pages.values()].every(D=>D.samples>=a);this.compositeMaterial.uniforms.tColor.value=Se?this.readTarget.texture:this.referenceTarget.texture,this.compositeMaterial.uniforms.tDepth.value=this.referenceTarget.depthTexture,this.compositeMaterial.uniforms.uOutputDither.value=S===null,i.visibilityOnly||h.render(this.fullscreenScene,this.fullscreenCamera);let te=!1;for(const{page:D,samples:J}of this.pages.values()){if(D.ready===!1||J<a)continue;const Pe=JSON.stringify([G,D.revision]);if(this.publishedStateKeys.get(D.id)!==Pe)try{this.presentation.publish(this.readTarget,this.referenceTarget,e,D,a)?this.publishedStateKeys.set(D.id,Pe):te=!0}catch(be){te=!0,console.error("[shadow-simulation] retaining previous corridor capture after copy failure",be)}}for(const D of this.publishedStateKeys.keys())O.has(D)||this.publishedStateKeys.delete(D);const Te=[...this.pages.values()].reduce((D,{page:J,samples:Pe})=>{const be=J.ready!==!1&&this.publishedStateKeys.get(J.id)===JSON.stringify([G,J.revision]);return D+(be?a:Math.min(Pe,a-1))},0),At=te?this.publicationRetryMs:void 0;return this.publicationRetryMs=te?Math.min(4e3,this.publicationRetryMs*2):250,{progress:Te/(this.pages.size*a),settled:Te===this.pages.size*a,...At===void 0?{}:{retryAfterMs:At},needsRepaint:[...this.pages.values()].some(D=>D.samples<a&&D.page.ready!==!1)}}catch(U){return this.broken=!0,console.error("[shadow-simulation] corridor accumulation failed; using direct rendering",U),this.fallback(et.renderer)}finally{h.autoClear=A,h.setClearColor(b,R),h.setRenderTarget(S,f,v),h.setViewport(M),h.setScissor(C),h.setScissorTest(E)}}overlaps(e,r){return e.x<=r.x+r.z&&e.x+e.z>=r.x&&e.y<=r.y+r.w&&e.y+e.w>=r.y}clearTarget(e){this.renderer.setRenderTarget(e),this.renderer.setClearColor(0,0),this.renderer.clear(!0,!0,!1)}blend(e,r,i,n){const s=this.blendMaterial.uniforms;s.tPrevious.value=this.readTarget.texture,s.tReference.value=this.referenceTarget.texture,s.tReferenceDepth.value=this.referenceTarget.depthTexture,s.tSample.value=this.sampleTarget.texture,s.tSampleDepth.value=this.sampleTarget.depthTexture,s.uBoundsCount.value=e.length,e.forEach(({receiverBounds:o},c)=>s.uBounds.value[c].set(o.min.x,o.min.z,o.max.x,o.max.z)),s.uRefresh.value=r,s.uResetAll.value=i,s.uWeights.value.set(n),this.quad.material=this.blendMaterial,this.renderer.setRenderTarget(this.writeTarget),this.renderer.render(this.fullscreenScene,this.fullscreenCamera);const a=this.readTarget;this.readTarget=this.writeTarget,this.writeTarget=a}releaseTargets(){var e;for(const r of[this.referenceTarget,this.sampleTarget,this.readTarget,this.writeTarget])(e=r==null?void 0:r.depthTexture)==null||e.dispose(),r==null||r.dispose();this.referenceTarget=null,this.sampleTarget=null,this.readTarget=null,this.writeTarget=null,this.stateKey="",this.targetKey="",this.allocatedBytes=0,this.pages.clear()}releaseScratch(e=!1){e?(this.stateKey="",this.pages.clear()):this.releaseTargets(),this.publishedStateKeys.clear(),this.cursor=0}fallback(e){return this.lastFallbackReason=e,this.releaseTargets(),null}dispose(){this.disposed||(this.disposed=!0,this.releaseTargets(),this.ownsPresentation&&this.presentation.dispose(),this.quad.geometry.dispose(),this.blendMaterial.dispose(),this.compositeMaterial.dispose())}}const bo=2e4;let Np=0;var Bo;class Op{enabled=Vl((Bo=globalThis.location)==null?void 0:Bo.hostname);reportId=++Np;nextCorridorId=0;labels=new Map;pending=new Map;timer;context;observe(e,r){var s;if(!this.enabled)return;const i=performance.now();for(const{id:a}of e)this.labels.has(a)||this.labels.set(a,`C${this.reportId}.${++this.nextCorridorId}`);this.context={total:e.length,ready:e.filter(a=>a.ready).length,completed:e.filter(a=>a.published).length,samples:e.reduce((a,o)=>a+o.samples,0),activeId:r.activeId?this.labels.get(r.activeId):null,memoryBytes:r.memoryBytes,fallbackReason:r.fallbackReason,publicationRetries:(s=r.publicationRetries)==null?void 0:s.map(([a,o])=>({id:this.labels.get(a),attempts:o.attempts,retryInMs:Math.max(0,Math.round(o.retryAt-i))}))};const n=new Set(e.map(({id:a})=>a));for(const a of this.pending.keys())n.has(a)||this.pending.delete(a);for(const a of this.labels.keys())n.has(a)||this.labels.delete(a);for(const a of e){if(a.published){this.pending.delete(a.id);continue}const o=this.pending.get(a.id),c=!o||a.samples>o.progress.samples;this.pending.set(a.id,{progress:a,advancedAt:c?i:o.advancedAt,reported:c?!1:o.reported})}this.schedule()}pause(){clearTimeout(this.timer),this.timer=void 0,this.pending.clear()}schedule(){if(this.timer!==void 0)return;let e=1/0;for(const r of this.pending.values())r.reported||(e=Math.min(e,r.advancedAt+bo));Number.isFinite(e)&&(this.timer=setTimeout(()=>{var n;this.timer=void 0;const r=performance.now(),i=[];for(const s of this.pending.values())s.reported||r-s.advancedAt<bo||(s.reported=!0,i.push({...s.progress,id:this.labels.get(s.progress.id),file:(n=s.progress.id.match(/\/([^/"\\]+\.b3dm)/))==null?void 0:n[1],stalledMilliseconds:Math.round(r-s.advancedAt),waitingForReadiness:!s.progress.ready}));i.length>0&&console.warn("[shadow-simulation] corridors without progress for 20 seconds",JSON.stringify({corridors:i,scheduler:this.context})),this.schedule()},Math.max(0,e-performance.now())))}}class Lp{constructor(e){this.renderer=e,this.presentation=new il(e),this.scratch=new Pp(e,this.presentation)}presentation;scratch;captures=[];activeId=null;activeCapture=null;cursor=0;samples=1;disposed=!1;watchdog=new Op;publicationRetries=new Map;restoreOpportunities=new Map;allocationKey="";allocations=new Map;plans=new Map;get memoryBytes(){return this.scratch.memoryBytes}get fallbackReason(){return this.presentation.supportsCapture?this.scratch.fallbackReason:"receivers"}get capturePages(){return this.captures.map(({page:e})=>e)}get pageProgress(){const e=this.scratch.pageProgress;return this.captures.map(({page:r,plan:i,ready:n})=>{const s=n&&this.presentation.has(r,this.samples),a=e.find(({id:o})=>o===r.id);return{id:r.id,samples:s?this.samples:(a==null?void 0:a.samples)??0,totalSamples:this.samples,ready:n,published:s,limited:i.limited,width:i.width,height:i.height}})}updateCaptures(e,r,i,n=!0){var h;const s=Mp(e),a=Rs((h=i.options)==null?void 0:h.format),o=2*(a.bytesPerPixel/4+4)+2*a.accumulationBytesPerPixel/4+8,c=Math.max(1,Math.floor(Math.min(i.maxRenderTargetPixels??i.width*i.height,Ei/2/o))),l=r.accumulationPages.map(S=>{const f=this.plans.get(S.id),v=(f==null?void 0:f.orientation)??s,b={groundTexelTargetMeters:S.groundTexelTargetMeters??1,maximumDimension:this.renderer.capabilities.maxTextureSize,maximumPixels:c},R=JSON.stringify([S.receiverBounds.min,S.receiverBounds.max,v.toArray(),b]),A=(f==null?void 0:f.inputs)===R?f.plan:bp(S.receiverBounds,v,b);return this.plans.set(S.id,{inputs:R,plan:A,orientation:v}),A.camera.layers.mask=e.layers.mask,{page:S,plan:A}}),u=l.find(({page:S})=>{var f;return this.activeId===S.id&&((f=this.activeCapture)==null?void 0:f.page.id)===S.id&&this.activeCapture.page.contentKey===JSON.stringify([S.contentKey??S.revision,this.activeCapture.plan.key])}),d=u?this.activeCapture.plan:null,g=JSON.stringify(l.map(({page:S,plan:f})=>[S.id,f.key,S.screenBounds.z*S.screenBounds.w]));if(g!==this.allocationKey){const S=new Map(Tp(l.filter(({page:f})=>f.id!==(u==null?void 0:u.page.id)).map(({page:f,plan:v})=>({id:f.id,plan:v,screenArea:f.screenBounds.z*f.screenBounds.w})),ws-(d?d.width*d.height*8:0)));u&&d&&S.set(u.page.id,d),this.allocationKey=g,this.allocations=S}this.captures=l.map(({page:S,plan:f})=>{var A;const v=this.allocations.get(S.id)??f,b=JSON.stringify([S.contentKey??S.revision,v.key]),R=(!n||S.ready!==!1)&&(((A=i.isPageReady)==null?void 0:A.call(i,S.id))??!0);return{page:{...S,ready:R,captureKey:JSON.stringify([v.camera.quaternion.toArray(),v.width,v.height]),captureSize:{width:v.width,height:v.height},contentKey:b,revision:b,screenBounds:new re(0,0,1,1)},plan:v,ready:R}});const p=new Set(this.captures.map(({page:S})=>S.id));for(const S of this.plans.keys())p.has(S)||this.plans.delete(S);for(const[S,f]of this.publicationRetries){const v=this.captures.find(({page:b})=>b.id===S);(!v||v.page.contentKey!==f.contentKey)&&this.publicationRetries.delete(S)}this.presentation.beginFrame(this.capturePages);for(const{page:S,plan:f}of this.captures)this.presentation.prepareRestore(S,i.samples,new ee().multiplyMatrices(f.camera.projectionMatrix,f.camera.matrixWorldInverse));i.active&&this.reportProgress()}reportProgress(){this.watchdog.enabled&&this.watchdog.observe(this.pageProgress,{activeId:this.activeId,memoryBytes:this.memoryBytes,fallbackReason:this.fallbackReason,publicationRetries:[...this.publicationRetries.entries()]})}yieldForRestore(e,r){if(!this.presentation.isRestorePending(e,r))return!1;const i=JSON.stringify([e.id,r]),n=e.contentKey??e.revision;if(this.restoreOpportunities.get(i)===n)return!1;if(this.restoreOpportunities.set(i,n),this.restoreOpportunities.size>1024){const s=this.restoreOpportunities.keys().next().value;s!==void 0&&this.restoreOpportunities.delete(s)}return!0}render(e,r,i){var g;if(this.disposed)return null;if(!i.active)return this.watchdog.pause(),null;if(this.samples=i.samples,this.updateCaptures(e,r,i),!this.presentation.supportsCapture)return this.scratch.releaseScratch(),this.activeId=null,null;const n=performance.now();let s,a=this.captures.find(({page:p})=>p.id===this.activeId);const o=a&&!a.ready&&this.captures.some(({page:p,ready:h})=>h&&p.id!==(a==null?void 0:a.page.id)&&!this.presentation.has(p,i.samples));if((!a||o||this.presentation.has(a.page,i.samples))&&(this.scratch.releaseScratch(!0),this.activeId=null,a=void 0),a){const p=this.publicationRetries.get(a.page.id);p&&p.retryAt>n&&(s=Math.ceil(p.retryAt-n))}if(!a&&this.captures.length>0)for(let p=0;p<this.captures.length;p+=1){const h=(this.cursor+p)%this.captures.length,S=this.captures[h];if(!S.ready||this.presentation.has(S.page,i.samples)||this.yieldForRestore(S.page,i.samples))continue;const f=this.publicationRetries.get(S.page.id);if(f&&f.retryAt>n){s=Math.min(s??1/0,Math.ceil(f.retryAt-n));continue}a=S,s=void 0,this.activeId=S.page.id,this.activeCapture=S,this.cursor=(h+1)%this.captures.length;break}let c=null;if(a!=null&&a.ready&&s===void 0){this.activeCapture=a;const{page:p,plan:h}=a,S=(f,v,b)=>r.renderPageSample(f,p.id,v,b,p.screenBounds);if(c=this.scratch.render(h.camera,{accumulationPages:[p],supportsOpaqueAccumulation:r.supportsOpaqueAccumulation,renderSample:S,renderPageSample:(f,v,b,R)=>S(f,b,R)},{...i,width:h.width,height:h.height,viewKey:h.key,visibilityOnly:!0,isPageReady:void 0,maxPagesPerFrame:i.maxPagesPerFrame??4}),c!=null&&c.settled)this.publicationRetries.delete(p.id),this.scratch.releaseScratch(!0),this.activeId=null;else if((c==null?void 0:c.retryAfterMs)!==void 0){const f=(((g=this.publicationRetries.get(p.id))==null?void 0:g.attempts)??0)+1;s=Math.max(250,c.retryAfterMs);const v=f>=3;v&&(s=Math.max(1e3,s)),this.publicationRetries.set(p.id,{contentKey:p.contentKey,attempts:v?0:f,retryAt:n+s}),v&&(this.scratch.releaseScratch(),this.activeId=null,this.captures.some(({page:b,ready:R})=>{var A;return R&&b.id!==p.id&&!this.presentation.has(b,i.samples)&&(((A=this.publicationRetries.get(b.id))==null?void 0:A.retryAt)??0)<=n})&&(s=void 0))}if(!c)return null}!this.activeId&&!this.captures.some(({page:p,ready:h})=>h&&!this.presentation.has(p,i.samples))&&this.scratch.releaseScratch();const l=this.pageProgress;this.reportProgress();const u=l.reduce((p,h)=>p+(h.published?i.samples:Math.min(h.samples,i.samples-1)),0),d=l.length*i.samples;return{progress:d>0?u/d:1,settled:d===u,needsRepaint:l.some(p=>p.ready&&!p.published)&&s===void 0,...s===void 0?{}:{retryAfterMs:s}}}renderHard(e,r,i){var C;if(this.disposed||!i.active)return{published:0,needsRepaint:!1};if(this.updateCaptures(e,r,{...i,samples:1},i.isPageReady===void 0),!r.supportsOpaqueAccumulation||!this.presentation.supportsCapture||!this.renderer.extensions.has("EXT_color_buffer_float"))return{published:0,needsRepaint:!1};const n=new Map(this.captures.map(({page:E})=>[E.id,this.presentation.getCapturedSize(E.id)])),s=this.captures.reduce((E,{page:F,plan:k})=>{const U=n.get(F.id);return E+Math.max(k.width*k.height,U?U.width*U.height:0)*8},0)>ws,a=({page:E,plan:F})=>{const k=n.get(E.id);return k?(k.width*k.height-F.width*F.height)*8:0},o=this.captures.filter(({page:E,plan:F,ready:k})=>{if(!k)return!1;const U=n.get(E.id);return this.presentation.hasAtLeast(E,1)&&(!s||!U||U.width*U.height<=F.width*F.height)?!1:!(U&&U.samples>1&&!s&&(U.width!==F.width||U.height!==F.height)&&this.presentation.canReplay(E))});s&&o.sort((E,F)=>a(F)-a(E));const c=o.find(({page:E})=>!this.yieldForRestore(E,1));if(!c)return{published:0,needsRepaint:o.length>0};const{page:l,plan:u}=c;if(s&&this.presentation.hasAtLeast(l,1)&&a(c)>0){const E=n.get(l.id),F=Math.max(u.width,Math.ceil(E.width/2))*Math.max(u.height,Math.ceil(E.height/2))*8;if(this.memoryBytes+F>Ei)return{published:0,needsRepaint:!1,retryAfterMs:1e3};try{const k=this.presentation.downsample(l,u.width,u.height);return{published:k?1:0,needsRepaint:k,...k?{}:{retryAfterMs:1e3}}}catch{return{published:0,needsRepaint:!1,retryAfterMs:1e3}}}if(this.memoryBytes+u.width*u.height*16>Ei)return{published:0,needsRepaint:!1,retryAfterMs:1e3};const d=this.renderer,g=d.getRenderTarget(),p=d.getActiveCubeFace(),h=d.getActiveMipmapLevel(),S=d.getViewport(new re),f=d.getScissor(new re),v=d.getScissorTest(),b=d.autoClear,R=d.getClearColor(new Ge),A=d.getClearAlpha(),M=new $e(u.width,u.height,{type:Mt,format:tr,minFilter:Ie,magFilter:Ie,samples:0,depthTexture:new sr(u.width,u.height,Vt)});try{d.initRenderTarget(M),d.autoClear=!1,d.setRenderTarget(M),d.setViewport(new re(0,0,u.width,u.height)),d.setScissorTest(!1),d.setClearColor(0,0),d.clear(!0,!0,!1);const F=r.renderPageSample(u.camera,l.id,0,1,l.screenBounds)&&this.presentation.publish(M,M,u.camera,l,1);return{published:F?1:0,needsRepaint:F&&o.length>1,...F?{}:{retryAfterMs:1e3}}}catch(E){return console.warn("[shadow-simulation] retaining completed corridor after hard-stage capture failure",E),{published:0,needsRepaint:!1,retryAfterMs:1e3}}finally{d.setRenderTarget(g,p,h),d.setViewport(S),d.setScissor(f),d.setScissorTest(v),d.setClearColor(R,A),d.autoClear=b,(C=M.depthTexture)==null||C.dispose(),M.dispose()}}pausePending(){this.watchdog.pause()}cancelPending(){this.watchdog.pause(),this.activeId!==null&&this.scratch.releaseScratch(),this.activeId=null,this.publicationRetries.clear(),this.restoreOpportunities.clear()}dispose(){this.disposed||(this.disposed=!0,this.watchdog.pause(),this.scratch.dispose(),this.presentation.dispose(),this.captures=[],this.plans.clear(),this.allocations=new Map,this.publicationRetries.clear(),this.restoreOpportunities.clear())}}const Fp=750,Bp=5e3,Mo=new Set,Up=t=>{const e=Wl({assetUrl:t,production:!0});let r=null,i=!1,n=!1,s=0,a=null;const o=()=>{if(r&&(r.onmessage=null,r.onerror=null,r.onmessageerror=null,r.terminate(),r=null),a){const d=a;a=null,clearTimeout(d.timer),d.finish(null)}},c=()=>{n=!0,o()},l=(d,g=[])=>{if(!e||i||n||a||typeof Worker>"u")return Promise.resolve(null);try{return r||(r=new Worker(new URL("https://cismet.github.io/carma-pr-deployments/812/geoportal/assets/shadow-corridor-cache.worker-VQZLpq-f.js",import.meta.url),{type:"module"}),r.onerror=c,r.onmessageerror=c,r.onmessage=p=>{var S;if(!a||((S=p.data)==null?void 0:S.id)!==a.id)return;const h=a;a=null,clearTimeout(h.timer),h.finish(p.data)}),new Promise(p=>{const h=setTimeout(c,d.operation===wi.read?Fp:Bp);a={id:d.id,timer:h,finish:p};try{r.postMessage(d,g)}catch{c()}})}catch{return c(),Promise.resolve(null)}},u={cancelPending:o,get enabled(){return!!(e&&!i&&!n&&typeof Worker<"u")},get busy(){return a!==null},async read(d){const g=Ye(d);if(!g)return null;const p=await l({id:++s,producerAssetUrl:e??"",identity:d,operation:wi.read}),h=p==null?void 0:p.record;return!i&&(h==null?void 0:h.schema)===Bi.schema&&Ye(h.identity)===g&&wo(h)?h:null},async write(d,g,p){if(!Ye(d)||!wo(g))return!1;const h=[g.visibility,g.depth];if(h.some(f=>!(f.buffer instanceof ArrayBuffer)||f.byteOffset!==0||f.byteLength!==f.buffer.byteLength))return!1;const S=await l({id:++s,producerAssetUrl:e??"",identity:d,operation:wi.write,capture:g,costs:p},[...new Set(h.map(f=>f.buffer))]);return!i&&(S==null?void 0:S.written)===!0},async writePacked(d,g,p){if(!Ye(d)||!Ep(g)||!(g.rgba.buffer instanceof ArrayBuffer)||g.rgba.byteOffset!==0||g.rgba.byteLength!==g.rgba.buffer.byteLength)return!1;const h=await l({id:++s,producerAssetUrl:e??"",identity:d,operation:wi.writePacked,capture:g,costs:p},[g.rgba.buffer]);return!i&&(h==null?void 0:h.written)===!0},dispose(){i=!0,o(),Mo.delete(u)}};return Mo.add(u),u};class kp{constructor(e,r,i){this.scene=e,this.renderer=r,this.host=i,this.frameCache=new Su(r),this.pages=new Sp(e,r,i.maximumMapSize**2*8*2,i.maximumMapSize,i.frame),this.accumulation=new Lp(r),i.worldBasis&&i.corridorRevision&&i.dateTimeKey&&this.accumulation.presentation.setPersistence({cache:this.persistentCache,identity:(n,s)=>{var u,d,g;const a=this.pages.getPageGeometry(n.id),o=(u=i.dateTimeKey)==null?void 0:u.call(i);if(!a||!o||!n.captureKey)return null;const c=s===1?(d=i.receiverStageError)==null?void 0:d.call(i,n.receiverBounds):void 0,l=(g=i.corridorRevision)==null?void 0:g.call(i,a.casterBounds,c,n.receiverBounds);return l?{source:"shared-scene-corridor-v2",dateTime:o,corridor:n.id,resolution:JSON.stringify([a.width,a.height,n.captureKey]),geometryFingerprint:l,samples:s}:null},worldBasis:i.worldBasis,runIdleRender:i.runIdleRender,requestRepaint:i.requestRepaint})}pages;viewKey="";idleStats=null;accumulation;persistentCache=Up(import.meta.url);accumulationSettled=!1;viewport=new Lt(1,1);lastFrame=null;frameCache;presentedPageIds=new Set;casterRevisionsDirty=!0;casterRevisionCursor=0;hardRetryTimer=null;update(e,r,i,n,s=r.renderCamera){this.viewport.copy(r.viewport);const a=JSON.stringify([e.map(({id:o,bounds:c,receiverObjectId:l})=>[o,c.min,c.max,l]),s.projectionMatrix.elements,s.matrixWorldInverse.elements,r.viewport,i,n]);a!==this.viewKey&&(this.pages.setView(e,s,r.viewport,n,i,this.host.receiverBiasLimit),this.viewKey=a,this.casterRevisionsDirty=!0,this.casterRevisionCursor=0)}updatePresentation(e,r=e.renderCamera){this.viewport.copy(e.viewport),this.pages.updatePresentation(r)}invalidateContent(e){(e==null?void 0:e.length)!==0&&(this.casterRevisionsDirty=!0,this.casterRevisionCursor=0,this.frameCache.invalidate(),e?e.length>0&&this.pages.invalidateCasters(e):this.pages.clearCache())}async prewarm({cells:e,frame:r,lighting:i,targetPixels:n,samples:s,prepare:a,signal:o,yieldToInput:c=_p,planningCamera:l}){if(o.aborted)return null;this.idleStats=null,this.pages.setPrewarmView(e,l??r.renderCamera,r.viewport,n,i,s);try{return this.idleStats=await wp({pages:this.pages.prewarmPages,signal:o,prepare:a,yieldToInput:c,render:(u,d,g)=>{if(d!=null&&d.parent)throw new Error("Idle caster lease must own an unmounted group");const p=this.host.light.visible;this.host.light.visible=!1,d&&this.scene.add(d);try{let h=null;const S=()=>{h=this.pages.prewarmNext(r.renderCamera,u,{signal:g})};return this.host.runIdleRender?this.host.runIdleRender(S):S(),h??{pageId:u,rendered:0,cachedSamples:0,totalSamples:s,complete:!1,budgetLimited:!1,aborted:!0}}finally{d&&this.scene.remove(d),this.host.light.visible=p}}}),this.idleStats}finally{this.pages.clearPrewarmView()}}renderProgressive(e,r){if(this.lastFrame=r,!r.active)return this.pausePending(),null;if(this.pages.accumulationPages.length===0)return this.accumulationSettled=!1,null;const i=this.renderWithHost(e,()=>{const a=this.captureHard(e);if(this.casterRevisionsDirty&&this.host.corridorRevision)return null;const o=this.accumulation.presentation.capture(this.scene,()=>this.accumulation.render(e,this.pages,{...r,visibilityOnly:!0,maxPagesPerFrame:Math.min(r.samples,64),maxFrameCpuMilliseconds:r.maxFrameCpuMilliseconds??2,isPageReady:c=>this.isPageReady(c,!1)}));return o&&this.renderContent(e,null,r.samples),o&&{...o,settled:o.settled&&!a.needsRepaint,needsRepaint:o.needsRepaint||a.needsRepaint}});if(!i)return this.accumulationSettled=!1,null;const n="retryAfterMs"in i?i.retryAfterMs:void 0;n!==void 0&&this.hardRetryTimer===null&&(this.hardRetryTimer=globalThis.setTimeout(()=>{var a,o;this.hardRetryTimer=null,(o=(a=this.host).requestRepaint)==null||o.call(a)},Math.max(1,n)));const s=i.settled&&!this.accumulationSettled;return this.accumulationSettled=i.settled,{...i,settled:s}}render(e,r,i,n=!0){return this.pages.accumulationPages.length===0?!1:(this.renderWithHost(e,()=>{n&&this.captureHard(e),this.renderContent(e,r,i,!n)}),!0)}cancelPending(e=!1){this.accumulation.cancelPending(),e&&this.accumulation.presentation.beginSolarTransition(),this.pausePending()}pausePending(){this.accumulation.pausePending(),this.hardRetryTimer!==null&&(globalThis.clearTimeout(this.hardRetryTimer),this.hardRetryTimer=null),this.accumulationSettled=!1}isPageReady(e,r){var n,s;const i=this.pages.getPageGeometry(e);return i?!this.host.isCorridorReady||this.host.isCorridorReady(i.casterBounds,r?(s=(n=this.host).receiverStageError)==null?void 0:s.call(n,i.receiverBounds):void 0,i.receiverBounds):!1}captureHard(e){var i,n,s,a,o,c;if(this.casterRevisionsDirty&&this.host.corridorRevision){const l=this.pages.accumulationPages,u=performance.now();let d=0;for(;this.casterRevisionCursor<l.length;){if(d>=4||d>0&&performance.now()-u>=4)return(n=(i=this.host).requestRepaint)==null||n.call(i),{published:0,needsRepaint:!0};const g=l[this.casterRevisionCursor++];d+=1;const p=this.pages.getPageGeometry(g.id);if(!p)continue;const h=this.host.corridorRevision(p.casterBounds,(a=(s=this.host).receiverStageError)==null?void 0:a.call(s,p.receiverBounds),p.receiverBounds);this.pages.setCasterRevision(g.id,h)&&this.frameCache.invalidate()}this.casterRevisionsDirty=!1,this.casterRevisionCursor=0}const r=this.accumulation.presentation.capture(this.scene,()=>{var l;return this.accumulation.renderHard(e,this.pages,{...this.lastFrame,width:this.viewport.x,height:this.viewport.y,viewKey:this.viewKey,styleEpoch:((l=this.lastFrame)==null?void 0:l.styleEpoch)??0,samples:1,active:!0,isPageReady:u=>this.isPageReady(u,!0)})});return r.needsRepaint&&((c=(o=this.host).requestRepaint)==null||c.call(o)),r.retryAfterMs!==void 0&&this.hardRetryTimer===null&&(this.hardRetryTimer=globalThis.setTimeout(()=>{var l,u;this.hardRetryTimer=null,(u=(l=this.host).requestRepaint)==null||u.call(l)},r.retryAfterMs)),r}renderContent(e,r,i,n=!1){var u,d,g,p,h;const s=this.accumulation.capturePages;this.accumulation.presentation.beginFrame(s);const a=s.map(S=>{const f=this.accumulation.presentation.canPresent(S);return{page:S,replay:f,ready:f||(!this.host.corridorRevision||!this.casterRevisionsDirty)&&this.isPageReady(S.id,!0)}});let o=!1;const c=()=>{this.presentedPageIds.clear();const S=this.host.light.visible,f=r===null&&a.some(({replay:v})=>v);this.host.light.visible=!0;try{let v=new Set;r===null?v=this.accumulation.presentation.renderNative(this.scene,a.filter(b=>b.replay).map(b=>b.page),()=>this.renderer.render(this.scene,e)):this.renderer.render(this.scene,e);for(const{page:b,replay:R,ready:A}of a){if(!A)continue;if(v.has(b.id)){this.presentedPageIds.add(b.id);continue}if(r===null&&!R){this.presentedPageIds.add(b.id);continue}if(n&&!R){this.presentedPageIds.add(b.id);continue}const M=n||f&&R;this.host.light.visible=M,this.accumulation.presentation.render(this.scene,b,i,()=>M?this.pages.renderPageColor(e,b.id):this.pages.renderPageSample(e,b.id,r??0,r===null?1:i))?this.presentedPageIds.add(b.id):o=!0}}finally{this.host.light.visible=S}};if((u=this.lastFrame)!=null&&u.active&&r===null&&this.accumulation.presentation.supportsCapture){const S=JSON.stringify([this.viewKey,e.projectionMatrix.elements,e.matrixWorldInverse.elements,e.layers.mask,this.lastFrame.styleEpoch,((g=(d=this.host).visualEpoch)==null?void 0:g.call(d))??0,this.accumulation.presentation.revision,a.map(({page:f,replay:v,ready:b})=>[f.id,f.contentKey??f.revision,v,b])]);this.frameCache.render(S,this.lastFrame.width,this.lastFrame.height,c),o&&this.frameCache.invalidate()}else this.frameCache.invalidate(),c();const l=a.filter(({page:S,replay:f})=>this.presentedPageIds.has(S.id)&&(this.accumulation.presentation.hasAtLeast(S,1)||!f&&(r===null||i===1))).map(({page:S})=>S);l.length>0&&((h=(p=this.host).onPresentedPages)==null||h.call(p,l,s))}renderWithHost(e,r){const{renderer:i,host:n}=this,s=n.light.visible,a=n.sky.visible,o=n.overlay.visible,c=i.autoClear;n.light.visible=!1,i.autoClear=!1;try{a&&this.renderHostObject(n.sky,e),n.sky.visible=!1,n.overlay.visible=!1;const l=r();return l!==null&&o&&(n.overlay.visible=!0,this.renderHostObject(n.overlay,e)),l}finally{i.autoClear=c,n.light.visible=s,n.sky.visible=a,n.overlay.visible=o}}renderHostObject(e,r){const i=this.scene.children.filter(n=>n!==e&&n.visible);for(const n of i)n.visible=!1;try{this.renderer.render(this.scene,r)}finally{for(const n of i)n.visible=!0}}get pageLevels(){return this.pages.pageLevels}get stats(){return{...this.pages.stats,framePresentation:this.frameCache.stats,corridorAccumulation:{retained:this.accumulation.presentation.stats,pageSamples:this.accumulation.pageProgress,memoryBytes:this.accumulation.memoryBytes,fallbackReason:this.accumulation.fallbackReason},...this.idleStats?{idlePrewarm:this.idleStats}:{},...this.host.auditCorridors?{corridorAudit:this.host.auditCorridors(this.pages.accumulationPages.flatMap(e=>{const r=this.pages.getPageGeometry(e.id);return r?[{id:e.id,casterBounds:r.casterBounds,receiverBounds:r.receiverBounds}]:[]}))}:{}}}dispose(){this.hardRetryTimer!==null&&globalThis.clearTimeout(this.hardRetryTimer),this.hardRetryTimer=null,this.accumulation.dispose(),this.frameCache.dispose(),this.persistentCache.dispose(),this.pages.dispose()}}function Hp(){const t=new WeakSet;return e=>{let r=!1;for(const i of e)if(!(!i.providesTerrain||!i.hasRenderableContent)&&(r=!0,t.has(i)||i.hasRenderableContent()))return t.add(i),!1;return r}}const Qn=(t,e,r)=>JSON.stringify([t.min.toArray(),t.max.toArray(),e,r==null?void 0:r.min.toArray(),r==null?void 0:r.max.toArray()]),zp=(t,e)=>{const r=new Map(t.map(s=>[s.id,s])),i=[],n=s=>i.push(new Le(new T(...s.minimum),new T(...s.maximum)));for(const s of e){const a=r.get(s.id);a&&s.minimum.every((c,l)=>c===a.minimum[l])&&s.maximum.every((c,l)=>c===a.maximum[l])||(a&&n(a),n(s)),r.delete(s.id)}for(const s of r.values())n(s);return i},Vp=(t,e,r)=>{const i=new Set(r.map(({id:n})=>n));return t.filter(n=>{if(n.loadReason==="shadow")return!1;const s=e.filter(({bounds:a})=>n.minimum[0]<a.max.x&&n.maximum[0]>a.min.x&&n.minimum[2]<a.max.z&&n.maximum[2]>a.min.z);return s.length>0&&s.every(({id:a})=>i.has(a))}).map(({id:n})=>n)},Wp=(t,e,r)=>{if(![t,e,r].every(Number.isFinite)||r<=0)throw new RangeError("Invalid shared-scene Mercator basis");return new ee().set(r,0,0,t,0,0,r,e,0,r,0,0,0,0,0,1)},Eo=(t,e,r)=>Gl(e.reduce((i,n)=>{if(n.loadReason==="shadow")return i;const[s,,a]=n.minimum,[o,,c]=n.maximum;return s<t.max.x&&o>t.min.x&&a<t.max.z&&c>t.min.z&&Number.isFinite(n.errorPixels)?Math.max(i,n.errorPixels):i},r),r),Gp=({stageErrorPixels:t,targetErrorPixels:e,groundTexelTargetMeters:r,finalBiasMeters:i,maximumCoarseBiasMeters:n})=>{const s=Math.max(1,Math.min(n/i,t/Math.max(e,.25)));return Math.min(n,i*s,Math.max(i,r*2))},jp=({id:t,casterBounds:e,sunElevationDegrees:r,regions:i,volumes:n})=>{const s=new Set(i.flatMap(u=>u.selectedTileIds)),a=new Map(n.map(u=>[u.id,u])),o=[],c=[];let l=0;for(const u of s){const d=a.get(u);if(!d){o.push(u);continue}d.loadReason==="shadow"&&(l+=1),e.intersectsBox(new Le(new T(...d.minimum),new T(...d.maximum)))||c.push(u)}return{id:t,ready:i.length>0&&i.every(u=>u.ready),selectedTiles:s.size,offscreenTiles:l,reviewCount:r>=10&&s.size>10,nearHorizon:r<10,exactPrismTested:i.length>0&&i.every(u=>u.receiverPrismTested),visitedNodes:i.reduce((u,d)=>u+d.visitedNodes,0),broadPhaseNodes:i.reduce((u,d)=>u+d.broadPhaseNodes,0),rejectedPrismNodes:i.reduce((u,d)=>u+d.rejectedPrismNodes,0),missingPublishedVolumes:o,outsideEnvelope:c,selectedTileIds:[...s].sort()}},Yp={[De.STANDARD]:0,[De.HIGH]:1,[De.MAX]:1,[De.ULTRA]:1,[De.EXTREME]:1},$p=128,Kp={[De.STANDARD]:0,[De.HIGH]:0,[De.MAX]:1,[De.ULTRA]:2,[De.EXTREME]:3},qp=(t,e,r,i)=>{var u,d;const n=t==null?void 0:t.tileManager;if(!t||!n||!Number.isFinite(n.deltaZoom)||!Number.isFinite(n.tileSize)||!n.tileManager)return()=>{};const s={deltaZoom:n.deltaZoom,terrainTileSize:n.tileSize,sourceTileSize:n.tileManager.tileSize,meshSize:t.meshSize,calculateTileZoom:(u=n.tileManager._source)==null?void 0:u.calculateTileZoom},o=1-Yp[r],c=e*2**o;n.deltaZoom=o,n.tileSize=c,n.tileManager.tileSize=c,t.meshSize=$p;const l=Kp[r];if(l>0&&n.tileManager._source){s.calculateTileZoom||i==null||i();const g=n.tileManager._source.calculateTileZoom;g&&(n.tileManager._source.calculateTileZoom=(...p)=>g(...p)+l)}return t._meshCache={},(d=n.freeRtt)==null||d.call(n),()=>{var g;n.deltaZoom=s.deltaZoom,n.tileSize=s.terrainTileSize,n.tileManager.tileSize=s.sourceTileSize,t.meshSize=s.meshSize,n.tileManager._source&&(n.tileManager._source.calculateTileZoom=s.calculateTileZoom),t._meshCache={},(g=n.freeRtt)==null||g.call(n)}},Xp=1024,Qp=2048,Zp=4096,Jp=1e6,eg=2e6,Ro=(t,e=tc())=>{const r=Math.max(256,Math.floor(t)),i=rc(e);return i==="phone"?{maxShadowMapSize:Math.min(r,Xp),maxAccumulationPixels:Jp}:i==="tablet"?{maxShadowMapSize:Math.min(r,Qp),maxAccumulationPixels:eg}:{maxShadowMapSize:Math.min(r,Zp),maxAccumulationPixels:Number.POSITIVE_INFINITY}},tg=(t,e)=>{if(t===Number.POSITIVE_INFINITY)return t;const r=Rs(e.format),i=e.msaaSamples??qo.msaaSamples,n=2*(r.bytesPerPixel+4)*(1+Math.max(0,i))+3*r.accumulationBytesPerPixel;return Math.min(t,Math.floor(256*1024*1024/n))},Ao=(t,e=ur,r=2560*1440,i=1)=>Math.floor(Math.max(256**2,Math.min(t**2,ut[e].depthSize**2*(Number.isFinite(r)&&r>0?r/(2560*1440):1)*i**2))),Co=new WeakMap,rg=t=>{const e=Co.get(t);if(e)return e;const r=t.getContext(),i=r.getInternalformatParameter(r.RENDERBUFFER,r.DEPTH_COMPONENT24,r.SAMPLES),n=a=>[0,...Array.from(r.getInternalformatParameter(r.RENDERBUFFER,a,r.SAMPLES)).filter(o=>i.includes(o))],s={maxTextureSize:t.capabilities.maxTextureSize,maxRenderbufferSize:r.getParameter(r.MAX_RENDERBUFFER_SIZE),hdrSamples:n(r.RGBA16F),sdrSamples:n(r.RGBA8)};return Co.set(t,s),s},ig=(t,e)=>{if(t.shadowBufferFormat===dt.HDR_32)return 0;const r=t.shadowMsaaSamples===Cs?1/0:t.shadowMsaaSamples;return Math.max(0,...e.filter(i=>Number.isFinite(i)&&i<=r))},Rt=new WeakMap,nl=t=>{let e=Rt.get(t);return e||(e={snapshot:null,listeners:new Set,demandListeners:new Set},Rt.set(t,e)),e},nv=t=>{var e;return((e=Rt.get(t))==null?void 0:e.snapshot)??null},sv=(t,e)=>{const r=nl(t),i=r.listeners.size===0;if(r.listeners.add(e),i)for(const n of r.demandListeners)n(!0);return()=>{if(!(!r.listeners.delete(e)||r.listeners.size>0)){r.snapshot=null;for(const n of r.demandListeners)n(!1);r.demandListeners.size===0&&Rt.delete(t)}}},ng=(t,e)=>{const r=nl(t);return r.demandListeners.add(e),r.listeners.size>0&&e(!0),()=>{r.demandListeners.delete(e),r.listeners.size===0&&r.demandListeners.size===0&&Rt.delete(t)}},Io=t=>{var e;return(((e=Rt.get(t))==null?void 0:e.listeners.size)??0)>0},sg=(t,e)=>{const r=Rt.get(t);if(r!=null&&r.listeners.size){r.snapshot=e;for(const i of r.listeners)i()}},Zn=t=>{const e=Rt.get(t);if(e){e.snapshot=null;for(const r of e.listeners)r();e.listeners.size===0&&e.demandListeners.size===0&&Rt.delete(t)}},Do=.01,ag=500,Jn=1500,es=(t=ur)=>({lastFrameMs:null,sampleDurationMs:0,sampleCount:0,recoveryDurationMs:0,updateIntervalMs:ut[t].targetFps?1e3/ut[t].targetFps:0,targetFrameMs:ut[t].targetFps?1e3/ut[t].targetFps:0,depthScale:1,trial:null,adaptationBlocked:!1}),ts=(t,e,r,{enabled:i=!0,allowCadenceReduction:n=!0}={})=>{var S,f;if(t.targetFrameMs===0)return t;if(!i)return t.lastFrameMs===null&&t.updateIntervalMs===t.targetFrameMs&&t.depthScale===1&&!t.adaptationBlocked?t:{...t,lastFrameMs:null,sampleDurationMs:0,sampleCount:0,recoveryDurationMs:0,updateIntervalMs:t.targetFrameMs,depthScale:1,trial:null,adaptationBlocked:!1};if(!r||!Number.isFinite(e))return t.lastFrameMs===null?t:{...t,lastFrameMs:null,sampleDurationMs:0,sampleCount:0,recoveryDurationMs:0,depthScale:1,trial:null,adaptationBlocked:!1};const s=t.lastFrameMs===null?0:e-t.lastFrameMs;if(s<=0)return{...t,lastFrameMs:e};const a=t.sampleDurationMs+s,o=t.sampleCount+1;if(a<ag)return{...t,lastFrameMs:e,sampleDurationMs:a,sampleCount:o};const c=a/o,l=t.targetFrameMs;if(t.trial&&c>=t.trial.baselineFrameMs*.95||t.adaptationBlocked)return{...t,lastFrameMs:e,sampleDurationMs:0,sampleCount:0,trial:null,adaptationBlocked:!0,updateIntervalMs:((S=t.trial)==null?void 0:S.updateIntervalMs)??t.updateIntervalMs,depthScale:((f=t.trial)==null?void 0:f.depthScale)??t.depthScale};const g=c<l/1.2?t.recoveryDurationMs+a:0,p=n?c>l+Do?Math.min(l*4,t.updateIntervalMs+l):g>=Jn?Math.max(l,t.updateIntervalMs-l):t.updateIntervalMs:l,h=c>l+Do&&(!n||t.updateIntervalMs>=l*4)?Math.max(.5,t.depthScale-.25):g>=Jn?Math.min(1,t.depthScale+.25):t.depthScale;return{...t,lastFrameMs:e,sampleDurationMs:0,sampleCount:0,recoveryDurationMs:g>=Jn?0:g,updateIntervalMs:p,depthScale:h,trial:p>t.updateIntervalMs||h<t.depthScale?{baselineFrameMs:c,updateIntervalMs:t.updateIntervalMs,depthScale:t.depthScale}:null,adaptationBlocked:!1}},og=900,_i=.01,cg=.25,lg=1e3,Po=4e3,ug=10,sl=2500,dg="shadow-simulation-raster-dem",hg=200,al=.5,mg="shadow-simulation-sky-light",xi=100,No=1e3,fg=1e3,Oo=100,Ar="carma-shadow-map-style-base",pg=(t,e=Xo,r=()=>!0,i=()=>"opaque",n=De.MAX)=>{const s=e.id,a=t;if(typeof a.getTerrain!="function"||typeof a.getSource!="function"||typeof a.setTerrain!="function")return Object.assign(()=>{},{refresh:()=>{}});const o=a.getTerrain(),c=new Map,l=new Map;let u=!1,d=!1,g=!1,p=null,h=!1,S,f=null,v=()=>{},b=null;const R=()=>{p&&(h?delete p.getMeshFrameDelta:p.getMeshFrameDelta=S,p=null,S=void 0,h=!1)},A=()=>{const O=a.terrain;!O||O===p||(R(),typeof O.getMeshFrameDelta=="function"&&(h=!Object.prototype.hasOwnProperty.call(O,"getMeshFrameDelta"),S=O.getMeshFrameDelta,O.getMeshFrameDelta=()=>0,p=O))},M=()=>{var Q;const O=a.terrain;!O||O===f||(v(),f=O,v=qp(O,e.tileSize,n,()=>{var P;(P=t.setSourceTileLodParams)==null||P.call(t,9.314,3,e.id)}),(Q=t.triggerRepaint)==null||Q.call(t))},C=O=>`${O.type}:${String(O.source)}:${String(O["source-layer"])}`,E=()=>{var P;const Q=t.getStyle().layers??[];for(const K of Q){if(!Ql(K))continue;const B=C(K);let Se=l.get(K.id);const te=t.getLayoutProperty(K.id,"visibility");!Se||Se.signature!==B?(Se={signature:B,value:te},l.set(K.id,Se)):te!=="none"&&(Se.value=te),te!=="none"&&t.setLayoutProperty(K.id,"visibility","none")}if(r()){t.getLayer(Ar)||(t.addLayer({id:Ar,type:"background",paint:{"background-color":Cn.baseColor,"background-opacity":Cn.opacity}},(P=Q[0])==null?void 0:P.id),g=!0);for(const K of Q){if(K.id===Ar||K.type==="custom")continue;const B=Cn.opaqueDrapeProperties.get(K.type);if(!B)continue;const Se=C(K);let te=c.get(K.id);const Te=t.getPaintProperty(K.id,B);!te||te.signature!==Se?(te={signature:Se,property:B,value:Te},c.set(K.id,te)):Te!==1&&(te.value=Te),Te!==1&&t.setPaintProperty(K.id,B,1)}}},F=O=>{var Q;for(const[P,K]of O)try{const B=(Q=t.getStyle().layers)==null?void 0:Q.find(({id:Se})=>Se===P);B&&C(B)===K.signature&&t.getLayoutProperty(P,"visibility")==="none"&&t.setLayoutProperty(P,"visibility",K.value===void 0?null:K.value)}catch{}O.clear()},k=()=>{var O;for(const[Q,P]of c)try{const K=(O=t.getStyle().layers)==null?void 0:O.find(({id:B})=>B===Q);K&&C(K)===P.signature&&t.getPaintProperty(Q,P.property)===1&&t.setPaintProperty(Q,P.property,P.value===void 0?null:P.value)}catch{}if(c.clear(),g){g=!1;try{t.getLayer(Ar)&&t.removeLayer(Ar)}catch{}}},U=()=>{if(!(u||d)){d=!0;try{if(!a.getSource(s)&&t.isStyleLoaded()&&t.addSource(s,{type:"raster-dem",tiles:[e.url],tileSize:e.tileSize,minzoom:e.minzoom,maxzoom:e.maxzoom,encoding:e.encoding,bounds:[...e.bounds]}),i()==="labels"?(k(),F(l)):E(),a.getSource(s)){const O=a.getTerrain();((O==null?void 0:O.source)!==s||(O.exaggeration??1)!==1)&&a.setTerrain({source:s,exaggeration:1}),M(),A()}b=null}catch(O){const Q=O instanceof Error?O.message:String(O);Q!==b&&(b=Q,console.error("[shadow-simulation] MapLibre terrain setup failed",O))}finally{d=!1}}},G=()=>{d||U()};return t.on(ye.STYLE_DATA,U),t.on(ye.TERRAIN,G),U(),Object.assign(()=>{if(!u){u=!0,t.off(ye.STYLE_DATA,U),t.off(ye.TERRAIN,G),R(),v(),f=null,k(),F(l);try{o&&a.getSource(o.source)!==void 0?a.setTerrain(o):a.setTerrain(null)}catch{}}},{refresh:()=>{!u&&!d&&U()}})},ol=(t,e=!1)=>{if(t.userData[Ai.OVERLAY])return;t.castShadow=t.userData.disableShadowCasting!==!0;const r=Array.isArray(t.material)?t.material:[t.material];if(t.receiveShadow=r.some(i=>i.visible&&i.colorWrite),!t.userData.isShadowTerrainSurface)for(const i of r)i.shadowSide??(i.shadowSide=$o),gp(i,e)},Pr=(t,e=!1)=>{t.traverseVisible(r=>{const i=r;!i.isMesh&&!i.isInstancedMesh||ol(i,e)})},gg=t=>t.visible&&t.opacity>0,vg=(t,e)=>{let r=t;for(;r&&r!==e;){if(!r.visible)return!1;r=r.parent}return(Array.isArray(t.material)?t.material:[t.material]).some(gg)},Lo=t=>{t.traverse(e=>{const r=e;if(!r.isMesh&&!r.isInstancedMesh)return;const i=Array.isArray(r.material)?r.material:[r.material];for(const n of i)n.dispose()})},cl=(t,e,r)=>{t.updateMatrixWorld(!0),r==null||r.updateMatrixWorld(!0);const i=r?new Gr().setFromProjectionMatrix(new ee().multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),r.coordinateSystem,r.reversedDepth):null;let n=e,s=e;const a=new Le;return t.traverseVisible(o=>{var l,u;const c=o;c.userData[Ai.OVERLAY]||!c.isMesh&&!c.isInstancedMesh||!((u=(l=c.geometry)==null?void 0:l.getAttribute("position"))!=null&&u.count)||(c.geometry.boundingBox||c.geometry.computeBoundingBox(),c.geometry.boundingBox&&(a.copy(c.geometry.boundingBox).applyMatrix4(c.matrixWorld),!(i&&!i.intersectsBox(a))&&(n=Math.min(n,a.min.y),s=Math.max(s,a.max.y))))}),[n,s]},yg=(t,e,r,i)=>{var o;const n=e.filter(c=>c.providesTerrain).flatMap(c=>{var u;const l=(u=c.getViewElevationRange)==null?void 0:u.call(c,r);return l?[l]:[]});if(n.length>0)return[Math.min(...n.map(c=>c[0])),Math.max(...n.map(c=>c[1]))];let[s,a]=cl(t,i,r);for(const c of e){const l=(o=c.getViewElevationRange)==null?void 0:o.call(c,r);l&&(s=Math.min(s,l[0]),a=Math.max(a,l[1]))}return[s,a]},Sg=[[-1,-1],[-1,1],[1,-1],[1,1]],wg=[[0,1],[1,3],[3,2],[2,0],[4,5],[5,7],[7,6],[6,4],[0,4],[1,5],[2,6],[3,7]],_g=(t,e,r,i)=>{t.updateMatrixWorld(!0);const n=Math.min(e,r),s=Math.max(e,r),a=[-1,1].flatMap(c=>Sg.map(([l,u])=>new T(l,u,c).unproject(t))),o=a.filter(c=>c.y>=n&&c.y<=s).map(c=>c.clone());for(const[c,l]of wg){const u=a[c],d=a[l],g=d.y-u.y;if(!(Math.abs(g)<=Number.EPSILON))for(const p of[n,s]){const h=(p-u.y)/g;h<0||h>1||o.push(u.clone().lerp(d,h))}}for(const c of o){const l=c.clone().sub(i),u=Math.hypot(l.x,l.z);if(u<=Po)continue;const d=Po/u;l.x*=d,l.z*=d,c.copy(i).add(l)}return o},xg=(t,e)=>{const r=e.uniformColor!==null&&We(e.uniformColorMix??1,0,1)>=1;t.traverse(i=>{const n=i;if(!n.userData.isBuilding)return;const s=Array.isArray(n.material)?n.material:[n.material];for(const a of s){e.fullOpacity&&(a.opacity=1,a.transparent=!1,a.depthWrite=!0);const o=a;r&&e.uniformColor&&o.color&&(o.color.set(e.uniformColor),o.vertexColors=!1),a.needsUpdate=!0}})},Tg=(t,e,r)=>{var d;const i=(d=e._originMerc)==null?void 0:d.toLngLat();if(!i)return null;const n=new As;n.name=`shadow-simulation-copy-${e.id}`;const s=new Map;let a=r,o=!1;const c=()=>{for(const[g,p]of s)g.visible=p;s.clear()},l=()=>{if(o)return;c(),Lo(n),n.clear(),e.scene.updateMatrixWorld(!0);const g=[];e.scene.traverse(p=>{var S,f;const h=p;!h.isMesh&&!h.isInstancedMesh||(f=(S=h.geometry)==null?void 0:S.getAttribute("position"))!=null&&f.count&&vg(h,e.scene)&&g.push(h)});for(const p of g){const h=p.clone(!1);h.name=`${p.name||"mesh"}-shadow-simulation-copy`,h.visible=!0,h.matrixAutoUpdate=!1,h.matrix.copy(p.matrixWorld),h.material=Array.isArray(p.material)?p.material.map(S=>S.clone()):p.material.clone(),ol(h),s.set(p,p.visible),p.visible=!1,n.add(h)}n.visible=n.children.length>0,xg(n,a)},u={id:`shadow-simulation-generic-${e.id}`,originLngLat:[i.lng,i.lat],root:n,update:()=>{},dispose:()=>{o||(o=!0,c(),Lo(n),n.clear())}};return l(),n.visible?(t.addRuntime(u),{runtime:u,sync:l,updateBuildingAppearance(g){a=g,l()}}):(u.dispose(),null)},bg=t=>{const e=new Le().setFromObject(t.scene);e.isEmpty()?t.center.set(0,0,0):e.getCenter(t.center)},Mg=(t,e,r,i)=>{const n=new el(e),a=n.lights[0].target,o=new As;o.visible=!1,o.userData[Ai.OVERLAY]=!0;const c=new Yo(void 0,0);c.name=mg;const l=Zf(i);l.mesh.userData[Ai.OVERLAY]=!0;const u=new Map;t.traverse(g=>{const p=g;p.isAmbientLight&&u.set(p,p.intensity)});const d={scene:t,frame:e,controller:n,skyLight:c,atmosphericSky:l,ambientLightIntensities:u,lightTarget:a,sunVector:null,sunVectorRoot:o,center:new T,shadowCameraOffsetMeters:Math.max(sl,r*1.5),shadowAreaMeters:r,sunVectorLengthMeters:r*al,sunVectorVisible:!1,shadowQuality:ur,shadowIntensity:1,directionToSun:new T(0,1,0),sunColor:new Ge(16773848),sunIntensity:Zr,receiverWorldPoints:[],minimumElevationMeters:0,maximumElevationMeters:0,dirty:!0};return Pr(t),bg(d),t.add(c),t.add(l.mesh),d},Eg=(t,e)=>{t.scene.traverse(i=>{const n=i;n.isAmbientLight&&!t.ambientLightIntensities.has(n)&&t.ambientLightIntensities.set(n,n.intensity)});const r=e.skyIrradianceCoefficients;if((r==null?void 0:r.length)===t.skyLight.sh.coefficients.length){r.forEach((i,n)=>{t.skyLight.sh.coefficients[n].copy(i)}),t.skyLight.intensity=Zr;for(const i of t.ambientLightIntensities.keys())i.intensity=0;return}t.skyLight.sh.zero(),t.skyLight.intensity=0;for(const[i,n]of t.ambientLightIntensities)i.intensity=n},rs=new ee,Fo=(t,e,r=16773848,i,n=!0)=>{var a;const s=e.clone().normalize();t.directionToSun.copy(s),t.sunColor.set(r),t.lightTarget.position.copy(t.center);for(const o of t.controller.lights)o.target.position.copy(t.center),o.position.copy(s).multiplyScalar(t.shadowCameraOffsetMeters).add(t.center),o.color.copy(t.sunColor);(a=t.sunVector)==null||a.update(t.center,s,t.sunVectorLengthMeters),t.sunVectorRoot.visible=t.sunVectorVisible&&!!t.sunVector,t.sunIntensity=i??Zr;for(const o of t.controller.lights)o.intensity=t.sunIntensity;t.lightTarget.updateMatrixWorld(!0);for(const o of t.controller.lights)o.updateMatrixWorld(!0);n&&(t.controller.invalidate(),t.dirty=!0)},Rg=t=>{var e;for(const[r,i]of t.ambientLightIntensities)r.intensity=i;t.scene.remove(t.skyLight),t.scene.remove(t.atmosphericSky.mesh),t.scene.remove(t.sunVectorRoot),(e=t.sunVector)==null||e.dispose(),t.atmosphericSky.dispose(),t.controller.dispose()},Ag=(t,e={})=>{var ha,ma,fa,pa,ga,va,ya;const{shadowAreaMeters:r,terrain:i,mapLibreTerrain:n,terrainQuality:s=De.MAX}=e,a=Wi();let o=i;const c=r??og,l=t.getLight();let u=!0;const d=()=>{const m=xe(t).filter(y=>y.providesTerrain===!0);return m.length>0&&m.every(y=>y.mapStyleProjectionBlend==="overlay")?"labels":"opaque"},g=pg(t,n??Xo,()=>u,d,a?De.STANDARD:s),p=()=>{P.setMeshLabelStyle(d()==="labels")};let h=null,S={fullOpacity:!0,uniformColor:null,uniformColorMix:0,textureSaturation:1,textureColorCorrection:!0},f=1,v=null;const b=()=>{var m,y;return v??((y=(m=xe(t).find(w=>w.providesTerrain===!0))==null?void 0:m.getErrorTarget)==null?void 0:y.call(m))??Zl};let R=a?bi:void 0;const A=new WeakMap;let M=null,C={useTransmittanceLut:!0,useIrradianceLut:!0},E=!1,F=!1,k=Number.NEGATIVE_INFINITY,U=null,G=null,Y=null,O=new Ge(((ha=o==null?void 0:o.material)==null?void 0:ha.color)??Is);const Q=()=>{var m,y,w,x;if(u){Y==null||Y(),Y=null,(y=(m=P.layer).setMapStyleProjectionVisible)==null||y.call(m,!0);return}(x=(w=P.layer).setMapStyleProjectionVisible)==null||x.call(w,!1),Y??(Y=Kl(t))},P=jl(t),K=(m,y)=>{var w,x;return{observer:{longitude:m[0],latitude:m[1],altitudeMeters:0},scenePosition:((x=(w=P.layer).projectLngLatToScene)==null?void 0:x.call(w,[m[0],m[1]],xi))??new T(0,xi,0),sceneFromLocal:y}},B=((fa=(ma=P.layer).getLocalFrame)==null?void 0:fa.call(ma))??null;let Se=(B==null?void 0:B.revision)??0,te=B?K(B.lngLat,B.sceneFromLocalRotation):K([t.getCenter().lng,t.getCenter().lat]);const Te=()=>{var m;return((m=_e==null?void 0:_e.localFrame)==null?void 0:m.currentToReference)??(B==null?void 0:B.currentToReference)??rs},At=new Ta,D=new Ui,J=m=>{const y=m.renderCamera,{localFrame:w}=m;if(!w||w.currentToReference.equals(rs))return y;const x=y instanceof Ta?At.copy(y,!1):D.copy(y,!1);return x.matrixAutoUpdate=!1,x.matrixWorldAutoUpdate=!1,x.matrixWorld.multiplyMatrices(w.currentToReference,y.matrixWorld),x.matrixWorld.decompose(x.position,x.quaternion,x.scale),x.matrix.copy(x.matrixWorld),x.matrixWorldInverse.multiplyMatrices(y.matrixWorldInverse,w.referenceToCurrent),x},Pe=(m,y)=>{if(m!=null&&m.mountsOnLocalFrame||y.length===0)return y;const w=Te();if(w.equals(rs))return y;const x=new Le;return y.map(z=>(x.min.set(...z.minimum),x.max.set(...z.maximum),x.applyMatrix4(w),{...z,minimum:[x.min.x,x.min.y,x.min.z],maximum:[x.max.x,x.max.y,x.max.z]}))},be=new $f;let ft=()=>{},ce=m=>ft(m),pt=null,Ae=0;const Ue=m=>{if(!o)return null;const y=t.getCenter(),{errorTargetPixels:w,motionErrorTargetPixels:x,shadowLevelOffset:z,minimumLevel:L,maximumLevel:H,maxSelectionTiles:j,requestConcurrency:ae,maxCacheBytes:le,maxCachedMeshes:ve,maxCachedMeshBytes:me,meshSegments:ge,maximumMeshSegments:W,noDataHeightMeters:we,heightRangeMeters:Zt,material:Jt,...ci}=Eu(o,a);return ql(`${dg}-${++Ae}`,ci,m??[y.lng,y.lat],{errorTargetPixels:w??Nr,motionErrorTargetPixels:x,shadowLevelOffset:z,minimumLevel:L,maximumLevel:H,maxSelectionTiles:j,requestConcurrency:ae,maxCacheBytes:le,maxCachedMeshes:ve,maxCachedMeshBytes:me,meshSegments:ge??ci.tileSize,maximumMeshSegments:W,noDataHeightMeters:we,heightRangeMeters:Zt,material:Jt,receivesMapStyleTexture:!0,onContentChanged:xt=>ce(xt),onError:xt=>{const _r=xt instanceof Error?xt.message:String(xt);_r!==pt&&(pt=_r,console.error("[shadow-simulation] Raster DEM terrain runtime failed",xt))}})},pe=()=>xe(t).some(m=>m.providesTerrain===!0),Ct=()=>xe(t).every(m=>{var y,w;return!m.providesTerrain||(((y=m.hasRenderableContent)==null?void 0:y.call(m))??((w=m.isMainViewReady)==null?void 0:w.call(m))??!0)});let Me=xe(t).filter(m=>m.providesTerrain),$=pe()?null:Ue(),jt=$===null;$&&P.layer.addRuntime($);const ll=((ga=(pa=P.layer).getLocalFrameGroup)==null?void 0:ga.call(pa))??P.layer.getScene(),_=Mg(P.layer.getScene(),ll,c,O),ul=new T;let Jr=0,ei=0;const ke=xp({getRequest:()=>{var w;if(E||!o||!$||!jt||xr(t)||Ce||F||Ze!==0||!it||!qt||!_e)return null;const m=(w=$.getIdlePrefetchAvailability)==null?void 0:w.call($);if(!(m!=null&&m.ready))return null;const y=$;return{key:JSON.stringify([Ae,Jr,ei,_e.renderCamera.projectionMatrix.elements,_e.renderCamera.matrixWorldInverse.elements,_e.viewport.x,_e.viewport.y]),run:async x=>{var L;if(await y.prefetchIdleTerrain(x),x.aborted||!Oe()||!X||!_e||!P.layer.runIdleRender||vt.size>0||yt().some(H=>H!==y&&H!==Qt)||It.some(({id:H})=>!/^\d+:[-\d]+:[-\d]+$/.test(H)))return;const z=((L=y.getIdleShadowRegions)==null?void 0:L.call(y))??[];z.length===0||!y.prepareIdleShadowRegion||(await X.prewarm({cells:ud(It),frame:_e,planningCamera:J(_e),lighting:{directionToSun:_.directionToSun,color:_.sunColor,intensity:_.sunIntensity,shadowIntensity:_.shadowIntensity},targetPixels:ut[_.shadowQuality].shadowTexelErrorPixels,samples:wr(),signal:x,prepare:async(H,j)=>{const ae=dd(H.receiverBounds,z);return ae===null?{covered:!1,group:null,isCurrent:()=>!1,dispose:()=>{}}:y.prepareIdleShadowRegion({receiverBounds:H.receiverBounds,casterBounds:H.casterBounds,terrainLevel:ae},j)}}),x.aborted||Xt())}}}});let gt=null,dn="";const ti=(m,y,w)=>{const x=`${m}:${y}`;x!==dn&&(dn=x,console.error(`[SHADOW] Atmospheric update rejected; retaining last valid frame (${m}: ${y})`,{phase:m,reason:y,...w}))},dl=()=>{dn=""},He=()=>{ke.cancel(),Jr+=1,ei+=1},Ks=m=>{U=null,k=performance.now();const y=`#${m.color.getHexString()}`;if(F||P.setLocationLabelColor(y),!t.isStyleLoaded())return;const w=[1.5,m.azimuthDegrees,90-m.elevationDegrees],x=We(m.relativeIntensity,0,1),z=t.getLight(),L=z.position;z.anchor==="map"&&Array.isArray(L)&&L.length===w.length&&L.every((H,j)=>H===w[j])&&z.color===y&&z.intensity===x||t.setLight({anchor:"map",position:w,color:y,intensity:x})},ri=()=>{G!==null&&(globalThis.clearTimeout(G),G=null);const m=U;m&&Ks(m)},qs=m=>{if(U=m,!F&&!Ce){ri();return}const y=performance.now()-k;if(y>=No){ri();return}G===null&&(G=globalThis.setTimeout(()=>{G=null;const w=U;w&&Ks(w)},No-y))},Yt=m=>{const y={longitude:te.observer.longitude,latitude:te.observer.latitude,altitudeMeters:xi},w=zf(m.instant,y,te);if(w)return ti("sunlight input",w,{observer:y,skyReference:te}),M;be.ensure(()=>{if(E||!h)return;He();const L=Yt(h);L&&qs(L),t.triggerRepaint()},C),be.ensureSky(()=>{E||!h||(He(),Yt(h),t.triggerRepaint())});let x;try{x=be.evaluate(m.instant,y,C,te)}catch(L){return ti("sunlight generation","generator threw",{observer:y,error:L}),M}const z=Vf(x);return z?(ti("sunlight output",z,{observer:y,sample:x}),M):(dl(),M=x,_.atmosphericSky.update(x.skyFrame,be.skyTextures),Eg(_,x),Fo(_,x.directionToSun.clone().transformDirection(Te()),x.radiance,Zr),x)};ft=m=>{E||(ke.cancel(),X==null||X.invalidateContent(m),_.controller.invalidate(),_.dirty=!0)};const vt=new Map,yt=()=>{const m=xe(t);return $&&!m.includes($)?[$,...m]:m};let $t=null,St=null,je=null,wt=null,Xs=[];const Qs=()=>yt().flatMap(m=>{var y;return Pe(m,((y=m.getActiveTileVolumes)==null?void 0:y.call(m))??[])}),mr=()=>$t??Qs(),Zs=(m,y=_i*4)=>{if(!pe())return;const w=mr(),x=b(),z=m?Eo(m,w,x):Math.max(x,...w.filter(({loadReason:L})=>L!=="shadow").map(({errorPixels:L})=>L).filter(L=>Number.isFinite(L)));return Gp({stageErrorPixels:z,targetErrorPixels:x,groundTexelTargetMeters:y,finalBiasMeters:_i,maximumCoarseBiasMeters:cg})},Js=m=>{const y=$t,w=St,x=je,z=wt;if($t=y??Qs(),St=w??new Map,je=x??new Map,wt=z??new Map,!y){const L=zp(Xs,$t);L.length>0&&(X==null||X.invalidateContent(L),gr.length=0),Xs=$t}try{return m()}finally{$t=y,St=w,je=x,wt=z}};let Ce=!1,Ft=null,fr=null,hn=Number.NEGATIVE_INFINITY,mn=!1;const ea=new WeakMap,hl=m=>{var x,z,L;if(!m)return"none";const y=t.getCenter(),w=t.getCanvas();return[Math.round(y.lng*1e7),Math.round(y.lat*1e7),Math.round((((x=t.getZoom)==null?void 0:x.call(t))??0)*1e4),Math.round((((z=t.getBearing)==null?void 0:z.call(t))??0)*1e3),Math.round((((L=t.getPitch)==null?void 0:L.call(t))??0)*1e3),`${w.clientWidth||w.width}x${w.clientHeight||w.height}`,(h==null?void 0:h.azimuthDegrees)??"no-sun",(h==null?void 0:h.elevationDegrees)??"no-sun",_.shadowQuality].join(";")},pr=m=>{var j,ae,le,ve,me,ge;if(F){const W=performance.now();if(W-hn<fg){mn=!0;return}hn=W}fr=m,mn=!1;const y=hl(m),w=_e==null?void 0:_e.renderCamera,x=m&&w?new Gr().setFromProjectionMatrix(new ee().multiplyMatrices(w.projectionMatrix,w.matrixWorldInverse),w.coordinateSystem,w.reversedDepth):null,z=new Le,L=x?Pe($,((j=$==null?void 0:$.getActiveTileVolumes)==null?void 0:j.call($))??[]).filter(W=>(z.min.fromArray(W.minimum),z.max.fromArray(W.maximum),x.intersectsBox(z))):void 0,H=[...xe(t),...$?[$]:[]];for(const W of new Set(H)){if((ae=W.setShadowStagePresentationGate)==null||ae.call(W,!1),!W.providesTerrain){W===$?(le=W.setErrorTarget)==null||le.call(W,(o==null?void 0:o.errorTargetPixels)??Nr):(ve=W.setErrorTargetOverride)==null||ve.call(W,v),(me=W.setShadowView)==null||me.call(W,m?{...m,terrainReceivers:L}:null);continue}ea.get(W)!==y&&(ea.set(W,y),(ge=W.setShadowView)==null||ge.call(W,m))}},fn=m=>{var y;Ft=m;for(const w of new Set([...xe(t),...$?[$]:[]]))(y=w.setLiveShadowView)==null||y.call(w,m);Ce||pr(m)};let pn=Number.NEGATIVE_INFINITY,Qe=null,_t=null,gn=null,vn="",it=!a;a&&(_.shadowQuality=Ke.FPS_120);let yn={},Ne=In(Dn(yn,a),_.shadowQuality),nt=null;const ii=()=>({format:Ne.shadowBufferFormat,msaaSamples:Ne.shadowBufferLayout===zr.TILED?0:ig(Ne,(Ne.shadowBufferFormat===dt.SDR_8?nt==null?void 0:nt.sdrSamples:nt==null?void 0:nt.hdrSamples)??[0,2,4])});let Kt=ii(),Ze=0,Sn=!1,ni=!1;const gr=[];let Je=!0,wn=[],ta="",st=es(_.shadowQuality),si=Number.POSITIVE_INFINITY,qt=!0,Bt=Ro(4096);_.controller.setMaxShadowMapSize(Bt.maxShadowMapSize);let _e=null,X=null,_n=null,It=[];const Oe=()=>Ne.shadowBufferLayout===zr.TILED,vr=()=>{X==null||X.dispose(),X=null,_n=null,It=[]},Xt=()=>{if(E||!_t||!Io(t))return;const m=performance.now()-pn;if(m<Oo){Qe??(Qe=globalThis.setTimeout(()=>{Qe=null,Xt()},Oo-m));return}Qe!==null&&(globalThis.clearTimeout(Qe),Qe=null);const y=Ne.shadowBufferLayout,w=Ne.shadowSunDiscSamples,x=Oe()?(X==null?void 0:X.stats)??null:null,z=JSON.stringify([y,w,x]);gn===_t&&vn===z||(pn=performance.now(),gn=_t,vn=z,sg(t,{..._t,bufferLayout:y,sunDiscSamples:w,tiledStats:x}))};_.controller.setSoftSun(it);const yr=(m,y)=>Math.round(m/y)*y,ml=m=>{var w,x,z,L;const y=t.getCenter();return[yr(y.lng,1e-7),yr(y.lat,1e-7),yr(((w=t.getZoom)==null?void 0:w.call(t))??0,1e-4),yr(((x=t.getBearing)==null?void 0:x.call(t))??0,.001),yr(((z=t.getPitch)==null?void 0:z.call(t))??0,.001),`${m.viewport.x}x${m.viewport.y}`,(L=m.cssViewport)==null?void 0:L.toArray().join("x")].join(";")},Sr=(m=!0,y=!0,w)=>{var ae,le,ve,me;const x=t.getCenter(),z=($==null?void 0:$.getElevation(x.lng,x.lat))??0,L=(le=(ae=P.layer).projectLngLatToScene)==null?void 0:le.call(ae,[x.lng,x.lat],z);if(!L){h&&Yt(h),y&&t.triggerRepaint();return}_.center.copy(L).applyMatrix4(Te()),gt??(gt=cl(_.scene,L.y));const[H,j]=gt;if(w){const ge=_g(J(w),H,j,_.center);if(ge.length>0){const W=new Le().setFromPoints(ge).getSize(new T),we=Math.max(...ge.map(Zt=>Zt.distanceTo(_.center)));_.sunVectorLengthMeters=Math.min(W.x,W.z)*al,_.shadowAreaMeters=Math.max(r??0,ug,we*2),wn=ge}}else Je=!0;if(_.shadowCameraOffsetMeters=Math.max(sl,_.shadowAreaMeters*1.5),_.receiverWorldPoints=wn,_.minimumElevationMeters=H,_.maximumElevationMeters=j,_.dirty=!0,h&&(m||!M))Yt(h);else{_.lightTarget.position.copy(_.center);for(const ge of _.controller.lights)ge.target.position.copy(_.center),ge.target.updateMatrixWorld(!0);(ve=_.sunVector)==null||ve.root.position.copy(_.center),(me=_.sunVector)==null||me.root.updateMatrixWorld(!0)}y&&t.triggerRepaint()},Qt={id:"shadow-simulation-controller",originLngLat:[t.getCenter().lng,t.getCenter().lat],root:new As,updatePriority:hg,update(m){var xt,_r;_e=m;const{localFrame:y}=m;y&&y.revision!==Se&&(Se=y.revision,te=K(y.lngLat,y.sceneFromLocalRotation),M&&(M=jf(M,te),_.atmosphericSky.update(M.skyFrame,be.skyTextures)));const w=(_r=(xt=P.layer).getRenderer)==null?void 0:_r.call(xt);w&&!nt&&(nt=rg(w),Kt=ii(),Bt=Ro(Math.min(nt.maxTextureSize,nt.maxRenderbufferSize)),_.controller.setMaxShadowMapSize(Bt.maxShadowMapSize)),si=tg(Bt.maxAccumulationPixels,Kt),qt=m.viewport.x*m.viewport.y<=si,st=ts(st,performance.now(),Ce,{enabled:Ne.shadowAdaptiveQuality,allowCadenceReduction:!Oe()});const x=Math.max(0,m.lodCamera.position.y-m.lookTarget.y),z=xi+x,L=te.scenePosition.y+x;![...m.lodCamera.matrixWorld.elements,...m.lodCamera.projectionMatrix.elements].every(Number.isFinite)||!Number.isFinite(z)||!Number.isFinite(L)?ti("render camera","local Three.js camera matrix or altitude is invalid",{altitudeMeters:z,cameraHeightAboveTargetMeters:x,matrixWorld:m.lodCamera.matrixWorld.elements,projectionMatrix:m.lodCamera.projectionMatrix.elements}):(_.atmosphericSky.updateViewCamera(m.lodCamera),_.atmosphericSky.updateObserverScenePosition(ul.set(te.scenePosition.x,L,te.scenePosition.z)));const j=ml(m);if((Je||j!==ta)&&(performance.now(),ta=j,gt=Ce?gt??[_.minimumElevationMeters,_.maximumElevationMeters]:yg(_.scene,xe(t),m.renderCamera,_.center.y),Sr(!1,!1,m),Je=!1),!_.dirty)return;_.sunVectorVisible&&_.sunVector&&_.sunVector.root.cone.position.y!==_.sunVectorLengthMeters&&Fo(_,_.directionToSun,_.sunColor,_.sunIntensity),Jr+=1;const ae=mr(),le=ae.flatMap(({minimum:er,maximum:Tt})=>oc(J(m),new Le(new T(...er),new T(...Tt))));if(_.receiverWorldPoints=le.length>0?le:wn,_.receiverWorldPoints.length===0||!h){fn(null),_t=null,Zn(t);return}if(Oe()){It=ld(ae.filter(({loadReason:Tt})=>Tt!=="shadow").map(({id:Tt,minimum:li,maximum:Mn,receiverObjectId:En})=>({id:Tt,receiverObjectId:En,bounds:new Le(new T(...li),new T(...Mn))})));const er=sd(It,J(m));er.length>0&&(_.receiverWorldPoints=[...er])}const ve=Ao(Bt.maxShadowMapSize,_.shadowQuality,m.viewport.x*m.viewport.y,Ce?st.depthScale:1),me=m.cssViewport??m.viewport,ge=Ao(Bt.maxShadowMapSize,_.shadowQuality,me.x*me.y,Ce?st.depthScale:1),W=_.controller.update({maxReceiverBiasMeters:Zs(),receiverWorldPoints:_.receiverWorldPoints,receiverAnchorWorldPosition:_.center,minimumElevationMeters:_.minimumElevationMeters,maximumElevationMeters:_.maximumElevationMeters,directionToSun:_.directionToSun,color:_.sunColor,intensity:_.sunIntensity,shadowIntensity:_.shadowIntensity,quality:_.shadowQuality,mapTexelBudget:ve,casterMapTexelBudget:ge,groundTexelFit:Ne.shadowGroundTexelFit,stabilizeMapSize:Ce});if(_.dirty=!1,!W){fn(null),_t=null,Zn(t);return}const we=W.camera,Zt=_.controller.lights[0].shadow.camera,Jt=M==null?void 0:M.skyFrame.directionToSunECEF;fn({camera:Zt,directionToSunECEF:Jt?[Jt.x,Jt.y,Jt.z]:void 0,casterAngularRadiusRadians:it?Fr:0,shadowMapSize:{width:(we.rightMeters-we.leftMeters)/W.casterMetersPerTexel[0],height:(we.topMeters-we.bottomMeters)/W.casterMetersPerTexel[1]}});const ci=Io(t);if(we&&ci){m.lodCamera.updateMatrixWorld(!0),m.lodCamera.updateProjectionMatrix();const er=yt().flatMap(Tt=>{var li;return(((li=Tt.getActiveTileVolumes)==null?void 0:li.call(Tt))??[]).map(({id:Mn,loadReason:En,minimum:wl,maximum:_l})=>({id:Mn,loadReason:En,minimum:wl,maximum:_l}))});_t={bufferLayout:Ne.shadowBufferLayout,sunDiscSamples:Ne.shadowSunDiscSamples,tiledStats:null,cameraRangeMeters:Zt.position.distanceTo(_.controller.lights[0].target.position),leftMeters:we.leftMeters,rightMeters:we.rightMeters,bottomMeters:we.bottomMeters,topMeters:we.topMeters,nearMeters:we.nearMeters,farMeters:we.farMeters,projectionMatrixElements:we.projectionMatrixElements,shadowMapWidth:we.shadowMapWidth,shadowMapHeight:we.shadowMapHeight,minimumElevationMeters:_.minimumElevationMeters,maximumElevationMeters:_.maximumElevationMeters,sceneAnchorPositionElements:_.center.toArray(),mainCamera:{viewMatrixElements:[...m.lodCamera.matrixWorldInverse.elements],projectionMatrixElements:[...m.lodCamera.projectionMatrix.elements],nearMeters:m.lodCamera.near,farMeters:m.lodCamera.far,viewportWidth:m.viewport.x,viewportHeight:m.viewport.y},tileVolumes:er,shadow:W,atmosphericSunlight:M?{azimuthDegrees:M.azimuthDegrees,elevationDegrees:M.elevationDegrees,relativeIntensity:M.relativeIntensity,color:`#${M.color.getHexString()}`,transmittanceReady:M.atmosphericTransmittanceReady,irradianceReady:M.atmosphericIrradianceReady}:null},Xt()}},dispose:()=>{}};P.layer.addRuntime(Qt);const wr=()=>Ne.shadowSunDiscSamples,ra=()=>{var w,x;if(!Oe()||!_e||_.directionToSun.y<=0)return null;const m=(x=(w=P.layer).getRenderer)==null?void 0:x.call(w);if(!m)return null;let y=!1;if(!X||_n!==m){const z=It;vr(),It=z,_n=m,X=new kp(_.scene,m,{light:_.controller.lights[0],sky:_.atmosphericSky.mesh,overlay:_.sunVectorRoot,frame:_.frame,maximumMapSize:Bt.maxShadowMapSize,isCorridorReady:(L,H,j)=>{const ae=Qn(L,H,j),le=St==null?void 0:St.get(ae);if(le!==void 0)return le;const ve=yt().every(me=>{var ge;return((ge=me.isShadowRegionReady)==null?void 0:ge.call(me,L,H,j))??(me.getRequestDemand?me.getRequestDemand()===0:!me.providesTerrain||!xr(t))});return St==null||St.set(ae,ve),ve},receiverStageError:L=>{const H=Qn(L),j=wt==null?void 0:wt.get(H);if(j!==void 0)return j;const ae=Eo(L,mr(),pe()?b():(o==null?void 0:o.errorTargetPixels)??Nr);return wt==null||wt.set(H,ae),ae},receiverBiasLimit:(L,H)=>Zs(L,H)??_i,onPresentedPages:(L,H)=>{var ae;const j=Vp(mr(),H.map(({id:le,receiverBounds:ve})=>({id:le,bounds:ve})),L.map(({id:le,receiverBounds:ve})=>({id:le,bounds:ve})));if(j.length!==0)for(const le of yt())(ae=le.acknowledgeShadowStage)==null||ae.call(le,j)},corridorRevision:(L,H,j)=>{var ge;const ae=Qn(L,H,j),le=je==null?void 0:je.get(ae);if(le!==void 0)return le;const ve=[];for(const W of yt()){if(W===Qt)continue;const we=(ge=W.getShadowRegionRevision)==null?void 0:ge.call(W,L,H,j);if(!we)return je==null||je.set(ae,null),null;ve.push(JSON.stringify([W.id,we]))}const me=ve.length?JSON.stringify(ve.sort()):null;return je==null||je.set(ae,me),me},dateTimeKey:()=>(h==null?void 0:h.instant.toISOString())??null,worldBasis:()=>{const L=P.layer.projectSceneToLngLat([0,0,0]);if(!L)throw new Error("Shared scene origin is not initialized");const H=yu.MercatorCoordinate.fromLngLat(L,0);return Wp(H.x,H.y,H.meterInMercatorCoordinateUnits())},requestRepaint:()=>t.triggerRepaint(),visualEpoch:()=>ei,auditCorridors:L=>{const H=mr(),j=yt();return L.map(({id:ae,casterBounds:le,receiverBounds:ve})=>jp({id:ae,casterBounds:le,sunElevationDegrees:(h==null?void 0:h.elevationDegrees)??0,volumes:H,regions:j.flatMap(me=>{var W;const ge=(W=me.getShadowRegionDiagnostics)==null?void 0:W.call(me,le,void 0,ve);return ge?[ge]:[]})}))},runIdleRender:L=>{var H,j;return((j=(H=P.layer).runIdleRender)==null?void 0:j.call(H,L))??!1}}),y=!0}return!Ce||y?X.update(It,_e,{maxReceiverBiasMeters:pe()?_i:void 0,directionToSun:_.directionToSun,color:_.sunColor,intensity:_.sunIntensity,shadowIntensity:_.shadowIntensity},ut[_.shadowQuality].shadowTexelErrorPixels,J(_e)):X.updatePresentation(_e,J(_e)),X},fl=Hp(),ai=()=>Oe()&&fl(yt()),ia={onSettled:ke.onSettled,onPresented:()=>{var y;const m=performance.now();for(const w of xe(t))(y=w.onShadowPresented)==null||y.call(w,m)},get options(){return Kt},get maxRenderTargetPixels(){return si},get rounds(){return wr()},epoch:()=>Jr,visualEpoch:()=>ei,pending:()=>qt&&it&&!F&&(!jt||ai()||!Oe()&&!Ct()||!Oe()&&xr(t)||Ce||!Oe()&&Ze!==0),active:()=>qt&&it&&jt&&!ai()&&(Oe()||Ct())&&(Oe()||!xr(t))&&!Ce&&!F&&(Oe()||Ze===0)&&h!==null&&Ft!==null&&_.receiverWorldPoints.length>0,retainSettledFrame:()=>qt&&it&&h!==null&&Ft!==null&&_.receiverWorldPoints.length>0,prepareRound:m=>{Oe()||_.controller.applySunDiscSample(m,wr())},finishRound:()=>_.controller.restoreSunDiscCenter(),get renderProgressive(){if(Oe())return(m,y)=>!it||F||!qt?null:Js(()=>{if(ai())return null;const w=ra();if(!w)return null;const x=w.renderProgressive(m,{...y,samples:wr(),maxRenderTargetPixels:si,options:Kt});return Xt(),x})},renderScene:(m,y)=>!it||F||!Oe()?!1:Js(()=>{if(ai())return!1;const w=ra();if(!w)return!1;const x=w.render(m,y,wr(),!Ce);return Xt(),x})};(ya=(va=P.layer).setAccumulationController)==null||ya.call(va,ia);const oi=()=>{gt=null,Je=!0,Sr()};ce=m=>{ft(m),oi()};const na=()=>{ke.cancel(),X==null||X.pausePending(),st=ts(st,performance.now(),!1),Ce=!0,Je=!0},xn=()=>{ke.cancel(),Je=!0},sa=()=>{Ce=!1,st=ts(st,performance.now(),!1),Sn?(Sn=!1,bn()):oi(),M&&(U=M,ri()),fr!==Ft&&pr(Ft)},aa=()=>{xn(),t.triggerRepaint()};t.on(ye.MOVE_START,na),t.on(ye.MOVE,xn),t.on(ye.MOVE_END,sa),t.on(ye.RESIZE,aa);const Tn=m=>{m.ready.then(y=>{!y||E||$!==m||(jt=!0,oi(),t.triggerRepaint())})},oa=()=>{var x,z,L,H;const m=xe(t).filter(j=>j.providesTerrain);if(m.length!==Me.length||m.some(j=>!Me.includes(j))){Me=m,vr(),(z=(x=P.layer).setAccumulationController)==null||z.call(x,null),(H=(L=P.layer).setAccumulationController)==null||H.call(L,ia);for(const j of _.controller.lights)j.shadow.map&&(Nt(j.shadow.map),j.shadow.map=null);He()}const y=pe();if(!o)return;if(y){ke.cancel(),jt=!0;const j=$;$=null,j&&P.layer.hasRuntime(j.id)&&P.layer.removeRuntime(j.id),gt=null,Je=!0;return}if($)return;const w=Ue();w&&(ke.cancel(),jt=!1,$=w,w.setMaterialColor(`#${O.getHexString()}`),w.setShadowView(fr),P.layer.addRuntime(w),Tn(w),gt=null,Je=!0)};$&&Tn($),Sr();const ca=()=>{if(E)return;const m=new Set(Xl(t));for(const[y,w]of vt)m.has(y)||(P.layer.removeRuntime(w.runtime.id),vt.delete(y));for(const y of m){const w=vt.get(y);if(w){w.sync();continue}if(!y.scene)continue;const x=Tg(P.layer,y,S);x&&vt.set(y,x)}Pr(P.layer.getScene(),pe()),oi(),t.triggerRepaint()},pl=Yl(t,ca);ca(),p();const bn=()=>{var m,y,w;if(!E){Ze&&(window.clearTimeout(Ze),Ze=0),ni?X==null||X.invalidateContent():gr.length>0&&(X==null||X.invalidateContent(gr)),ni=!1,gr.length=0,ke.cancel(),oa(),g.refresh(),p();for(const x of xe(t))x.providesTerrain&&((m=x.setErrorTargetOverride)==null||m.call(x,v),(!A.has(x)||A.get(x)!==R)&&((y=x.setCacheBudget)==null||y.call(x,R),A.set(x,R))),(w=x.setShadowSimulationStyle)==null||w.call(x,S);pr(fr),vt.size>0&&Pr(P.layer.getScene(),pe()),_.controller.invalidate(),_.dirty=!0,Je=!0,gt=null,t.triggerRepaint()}},gl=Qo(t,m=>{if(E)return;const y=m==null?void 0:m.bounds;if(m===void 0){const w=xe(t).filter(x=>x.providesTerrain);(w.length!==Me.length||w.some(x=>!Me.includes(x)))&&(oa(),g.refresh(),p())}for(const w of(m==null?void 0:m.roots)??[])Pr(w,pe());if((y==null?void 0:y.length)===0){t.triggerRepaint();return}if(y===void 0?ni=!0:y.length>0&&gr.push(...y.map(w=>w.clone())),ke.cancel(),y===void 0&&yt().some(w=>w!==Qt&&!w.getActiveTileVolumes)&&(ni=!0),Ce){Sn=!0,t.triggerRepaint();return}t.triggerRepaint(),!Ze&&(Ze=window.setTimeout(()=>{Ze=0,bn()},lg))}),vl=$l(t,()=>{xr(t)&&ke.cancel(),E||t.triggerRepaint()});bn();const la=m=>{const y=M??Yt(m);y&&qs(y)},yl=m=>{(h==null?void 0:h.instant.getTime())!==m.instant.getTime()&&(X==null||X.cancelPending(!0),He(),h=m,Sr(),la(m))},ua=()=>{E||h&&la(h)};t.on(ye.STYLE_LOAD,ua);const da=()=>{pn=Number.NEGATIVE_INFINITY,_.dirty=!0,t.triggerRepaint()},Sl=ng(t,m=>{m?da():(Qe!==null&&globalThis.clearTimeout(Qe),Qe=null,_t=null,gn=null,vn="")});return{updateSolarPosition:yl,updateMeshCacheBudget(m){var w;a&&(m=Math.min(m??bi,bi));const y=m!==void 0&&Number.isFinite(m)&&m>0?m:void 0;if(!(R===y&&xe(t).filter(x=>x.providesTerrain).every(x=>A.has(x)&&A.get(x)===y))){R=y;for(const x of xe(t))x.providesTerrain&&((w=x.setCacheBudget)==null||w.call(x,y),A.set(x,y));t.triggerRepaint()}},updateTerrain(m){if(o===m||(ke.cancel(),o=m,!m||pe()))return;const y=$,w=Ue(y==null?void 0:y.originLngLat);w&&(w.setMaterialColor(`#${O.getHexString()}`),w.setShadowView(fr),y&&w.adoptPresentation(y),$=w,P.layer.addRuntime(w),y&&P.layer.removeRuntime(y.id),Tn(w),gt=null,Je=!0,He(),ce(),t.triggerRepaint())},updateTerrainColor(m){const y=new Ge(m);O.equals(y)||(He(),$==null||$.setMaterialColor(m),_.atmosphericSky.updateGroundAlbedo(y),O=y)},updateMeshErrorTarget(m){var y;if(v!==m){v=m;for(const w of xe(t))(y=w.setErrorTargetOverride)==null||y.call(w,m);t.triggerRepaint()}},updateBuildingAppearance(m){var y;if(!(S.fullOpacity===m.fullOpacity&&S.uniformColor===m.uniformColor&&(S.uniformColorMix??1)===(m.uniformColorMix??1)&&(S.textureSaturation??1)===(m.textureSaturation??1)&&(S.textureColorCorrection??!1)===(m.textureColorCorrection??!1))){He(),X==null||X.invalidateContent(),S=m;for(const w of vt.values())w.updateBuildingAppearance(m);for(const w of xe(t))(y=w.setShadowSimulationStyle)==null||y.call(w,m);Pr(P.layer.getScene(),pe()),_.controller.invalidate(),_.dirty=!0,t.triggerRepaint()}},updateShadowQuality(m){a&&(m=Ke.FPS_120),_.shadowQuality!==m&&(He(),_.shadowQuality=m,Ne=In(Dn(yn,a),m),Kt=ii(),st=es(m),_.dirty=!0,Sr(),_.controller.invalidate())},updateRenderQuality(m){m=Dn(m,a);const y=Ne,w=In(m,_.shadowQuality);yn={...m},Ne=w;const x=y.shadowAdaptiveQuality!==w.shadowAdaptiveQuality;(x||y.shadowBufferLayout!==w.shadowBufferLayout)&&(st=es(_.shadowQuality)),!(!x&&y.shadowBufferLayout===w.shadowBufferLayout&&y.shadowBufferFormat===w.shadowBufferFormat&&y.shadowSunDiscSamples===w.shadowSunDiscSamples&&y.shadowMsaaSamples===w.shadowMsaaSamples&&y.shadowGroundTexelFit===w.shadowGroundTexelFit)&&(Kt=ii(),He(),y.shadowBufferLayout!==w.shadowBufferLayout&&(vr(),Je=!0),(x||y.shadowGroundTexelFit!==w.shadowGroundTexelFit||y.shadowBufferLayout!==w.shadowBufferLayout)&&(_.dirty=!0,_.controller.invalidate()),Xt(),t.triggerRepaint())},updateSoftSunShadows(m){m=m&&!a,it!==m&&(He(),it=m,vr(),_.controller.setSoftSun(m),_.controller.invalidate(),_.dirty=!0,t.triggerRepaint())},updateTimeAnimating(m){F!==m&&(ke.cancel(),F=m,m&&(X==null||X.pausePending()),m||(ri(),hn=Number.NEGATIVE_INFINITY,mn&&!Ce&&pr(Ft),_.dirty=!0),t.triggerRepaint())},refreshProjectionDebug:da,updateShadowIntensity(m){const y=We(m,0,1);if(f!==y){He(),f=y,_.shadowIntensity=f;for(const w of _.controller.lights)w.shadow.intensity=f;t.triggerRepaint()}},updateMapStyleContentVisibility(m){u!==m&&(u=m,Q(),t.triggerRepaint())},updateMapStyleElevationVisibility(m,y){P.setMapStyleElevationVisibility(m,y),t.triggerRepaint()},updateMapStyleLabelOverlayVisibility(m){P.setPointLabelOverlayVisible(m),t.triggerRepaint()},updateSunDebugVectorVisibility(m){_.sunVectorVisible!==m&&(He(),_.sunVectorVisible=m,_.sunVectorRoot.visible=m&&!!h,m?(_.frame.add(_.sunVectorRoot),Vi(async()=>{const{buildSunVector:y}=await import("./shadow-sun-vector-CwtEpBko.js");return{buildSunVector:y}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10])).then(({buildSunVector:y})=>{if(E||!_.sunVectorVisible||_.sunVector)return;const w=y();_.sunVector=w,_.sunVectorRoot.add(w.root),w.update(_.center,_.directionToSun,_.sunVectorLengthMeters),w.root.visible=!0,_.sunVectorRoot.visible=!!h,t.triggerRepaint()}).catch(y=>{E||console.error("Unable to load sun-vector diagnostics",y)})):(_.frame.remove(_.sunVectorRoot),_.sunVector&&(_.sunVectorRoot.remove(_.sunVector.root),_.sunVector.dispose(),_.sunVector=null)),t.triggerRepaint())},updateAtmosphericLutUsage(m){C.useTransmittanceLut===m.useTransmittanceLut&&C.useIrradianceLut===m.useIrradianceLut||(He(),C=m,M=null,h&&(Yt(h),ft()),t.triggerRepaint())},dispose(){var m,y,w,x,z,L;if(!E){E=!0,ke.dispose(),Sl(),vr(),Qe!==null&&(globalThis.clearTimeout(Qe),Qe=null),_t=null,Ze&&window.clearTimeout(Ze),G!==null&&(globalThis.clearTimeout(G),G=null),Zn(t),t.off(ye.STYLE_LOAD,ua),t.off(ye.MOVE_START,na),t.off(ye.MOVE,xn),t.off(ye.MOVE_END,sa),t.off(ye.RESIZE,aa),pl(),gl(),vl(),Ft=null,pr(null);for(const H of xe(t))(m=H.setShadowSimulationStyle)==null||m.call(H,null),(y=H.setErrorTargetOverride)==null||y.call(H,null);for(const H of vt.values())P.layer.hasRuntime(H.runtime.id)&&P.layer.removeRuntime(H.runtime.id);vt.clear();try{Y==null||Y()}catch{}Y=null,(x=(w=P.layer).setMapStyleProjectionVisible)==null||x.call(w,!0),g(),P.layer.hasRuntime(Qt.id)&&P.layer.removeRuntime(Qt.id),$&&P.layer.hasRuntime($.id)&&P.layer.removeRuntime($.id),be.dispose(),Rg(_),(L=(z=P.layer).setAccumulationController)==null||L.call(z,null),P.release();try{t.isStyleLoaded()&&t.setLight(l)}catch{}}}}},Cg=(t,e,r,i)=>{const n=i+e/2,s=Math.floor(n),a=n-s;if(s===0)return{dateState:t,yearDayProgress:a};const o=is(t,s);return{dateState:ki({...t,...o},r)??t,yearDayProgress:a}},Ig=(t,e,r)=>{const i=ko(t,r),n=Math.ceil(i.sunriseMinutes),s=Math.floor(i.sunsetMinutes),a=t.minutes+e;return{dateState:{...t,minutes:a>s?n:a},yearDayProgress:0}},Dg=(t,e,r,i,n)=>{const s=e??r;if(!(t!=null&&t.enabled)||!t.isAnimating)return{dateState:s,yearDayProgress:n};const a=t.animationSpeed??4;return(t.animationMode??zt.DAY)===zt.YEAR?Cg(s,a,i,n):Ig(s,a,i)},Pg=1e3/30,Ng=250,Og=({dateState:t,setDateState:e,location:r,shadowState:i,onFrame:n})=>{const s=V.useRef(null),a=V.useRef(null),o=V.useRef(t),c=V.useRef(t),l=V.useRef(e),u=V.useRef(n);c.current=t,l.current=e,u.current=n;const{animationMode:d,animationSpeed:g,enabled:p,isAnimating:h}=i,S=p&&(h??!1);return V.useEffect(()=>{const f=t!==o.current;if(o.current=t,!!f){if(t===a.current){S||(s.current=null);return}s.current=null}},[S,t]),V.useEffect(()=>{if(!S)return;const f={animationMode:d,animationSpeed:g,enabled:p,isAnimating:h};let v=0,b=performance.now();const R=M=>{a.current=M,l.current(M)},A=window.setInterval(()=>{const M=s.current??c.current,C=Dg(f,M,M,r,v);v=C.yearDayProgress,s.current=C.dateState,u.current(C.dateState);const E=performance.now();E-b>=Ng&&(b=E,R(C.dateState))},Pg);return()=>{window.clearInterval(A);const M=s.current;M&&M!==a.current&&R(M)}},[S,d,g,p,h,r]),s},Lg=({tiledShadows:t=!1,libreMap:e,shadowAreaMeters:r,terrain:i,mapLibreTerrain:n,terrainQuality:s,location:a,state:o,dateState:c,setDateState:l})=>{const u=V.useRef(null),d=Og({dateState:c,setDateState:l,location:a,shadowState:o,onFrame:f=>{var v;o.enabled&&((v=u.current)==null||v.updateSolarPosition(Hr(f,a)))}}),g=V.useMemo(()=>_u(i,Ma(o.shadowQuality),o.terrainErrorTarget),[i,o.shadowQuality,o.terrainErrorTarget]),p=V.useRef(g);p.current=g;const[h,S]=V.useState(0);return V.useEffect(()=>{if(!e||!o.enabled)return;let f=null,v=null,b=null;const R=()=>{e.off(ye.STYLE_DATA,A),e.off(ye.STYLE_LOAD,A),e.off(ye.IDLE,A)},A=()=>{f||v!==null||b!==null||!e.isStyleLoaded()||(v=requestAnimationFrame(()=>{v=null,b=setTimeout(()=>{b=null,e.isStyleLoaded()&&(R(),f=Ag(e,{shadowAreaMeters:r,terrain:p.current,mapLibreTerrain:n,terrainQuality:s}),u.current=f,S(M=>M+1))},0)}))};return e.on(ye.STYLE_DATA,A),e.on(ye.STYLE_LOAD,A),e.on(ye.IDLE,A),A(),()=>{R(),v!==null&&cancelAnimationFrame(v),b!==null&&clearTimeout(b),u.current=null,f==null||f.dispose(),f=null}},[e,r,o.enabled,n,s]),V.useEffect(()=>{var f;(f=u.current)==null||f.updateTerrain(g)},[g,h]),V.useEffect(()=>{var v;if(!o.enabled)return;const f=d.current??c;(v=u.current)==null||v.updateSolarPosition(Hr(f,a))},[d,c,a,o.enabled,h]),V.useEffect(()=>{var f;o.enabled&&((f=u.current)==null||f.updateShadowQuality(Ma(o.shadowQuality)))},[o.enabled,o.shadowQuality,h]),V.useEffect(()=>{var f;o.enabled&&((f=u.current)==null||f.updateRenderQuality({shadowAdaptiveQuality:o.shadowAdaptiveQuality,shadowBufferLayout:t?o.shadowBufferLayout:void 0,shadowBufferFormat:o.shadowBufferFormat,shadowSunDiscSamples:o.shadowSunDiscSamples,shadowMsaaSamples:o.shadowMsaaSamples,shadowGroundTexelFit:o.shadowGroundTexelFit}))},[o.enabled,t,o.shadowAdaptiveQuality,o.shadowBufferLayout,o.shadowBufferFormat,o.shadowSunDiscSamples,o.shadowMsaaSamples,o.shadowGroundTexelFit,h]),V.useEffect(()=>{var f;o.enabled&&((f=u.current)==null||f.updateMeshErrorTarget(o.meshErrorTarget??null))},[o.enabled,o.meshErrorTarget,h]),V.useEffect(()=>{var f;o.enabled&&((f=u.current)==null||f.updateMeshCacheBudget(o.meshCacheBudgetBytes))},[o.enabled,o.meshCacheBudgetBytes,h]),V.useEffect(()=>{var f;o.enabled&&((f=u.current)==null||f.updateSoftSunShadows(o.softSunShadows??!0))},[o.enabled,o.softSunShadows,h]),V.useEffect(()=>{var f;o.enabled&&((f=u.current)==null||f.updateTimeAnimating(o.isAnimating??!1))},[o.enabled,o.isAnimating,h]),V.useEffect(()=>{var f;o.enabled&&((f=u.current)==null||f.updateShadowIntensity(o.shadowIntensity??1))},[o.enabled,o.shadowIntensity,h]),V.useEffect(()=>{var f;o.enabled&&((f=u.current)==null||f.updateMapStyleContentVisibility(o.showMapStyleContent??!0))},[o.enabled,o.showMapStyleContent,h]),V.useEffect(()=>{var f;o.enabled&&((f=u.current)==null||f.updateMapStyleLabelOverlayVisibility((o.showMapStyleContent??!0)&&(o.showMapStyleLabels??!0)))},[o.enabled,o.showMapStyleContent,o.showMapStyleLabels,h]),V.useEffect(()=>{var f;o.enabled&&((f=u.current)==null||f.updateMapStyleElevationVisibility(o.showMapStyleElevationLines??!1,o.showMapStyleElevationLabels??!1))},[o.enabled,o.showMapStyleElevationLines,o.showMapStyleElevationLabels,h]),V.useEffect(()=>{var f;o.enabled&&((f=u.current)==null||f.updateSunDebugVectorVisibility((o.showProjectionDebugView??!1)&&(o.showSunDebugVector??!0)))},[o.enabled,o.showProjectionDebugView,o.showSunDebugVector,h]),V.useEffect(()=>{if(!e)return;const f=o.enabled&&(o.showProjectionDebugView??!1)&&(o.showTileBounds??!0);if(!f)return;const v=new Set,b=()=>{var M;const A=xe(e);for(const C of v)A.includes(C)||v.delete(C);for(const C of A)v.has(C)||((M=C.setTileBoundsVisible)==null||M.call(C,f),v.add(C))};b();const R=Qo(e,b);return()=>{var A;R();for(const M of xe(e))(A=M.setTileBoundsVisible)==null||A.call(M,!1)}},[e,h,o.enabled,o.showProjectionDebugView,o.showTileBounds]),V.useEffect(()=>{var f;o.enabled&&((f=u.current)==null||f.updateAtmosphericLutUsage({useTransmittanceLut:o.useTransmittanceLut??!0,useIrradianceLut:o.useSkyIrradianceLut??!0}))},[o.enabled,o.useSkyIrradianceLut,o.useTransmittanceLut,h]),V.useEffect(()=>{var f;o.enabled&&((f=u.current)==null||f.updateTerrainColor(o.terrainColor??Is))},[o.enabled,o.terrainColor,h]),V.useEffect(()=>{var f;o.enabled&&((f=u.current)==null||f.updateBuildingAppearance({fullOpacity:o.buildingsFullOpacity??!0,uniformColor:o.buildingColor??ec,uniformColorMix:We(o.buildingColorMix??Zo,0,1),textureColorCorrection:o.meshTextureColorCorrection??!0,textureSaturation:We(o.meshTextureSaturation??Jo,0,1)}))},[o.buildingColor,o.buildingColorMix,o.buildingsFullOpacity,o.enabled,o.meshTextureSaturation,o.meshTextureColorCorrection,h]),null},Fg=t=>({...t,animationMode:zt.DAY,animationSpeed:4,isAnimating:!1,shadowIntensity:1,meshTextureColorCorrection:!0,showSunDebugVector:!0,showTileBounds:!0,showProjectionDebugView:!1,showDisplaySettings:!1,showMapStyleContent:!0,showMapStyleLabels:!0,showMapStyleElevationLines:!1,showMapStyleElevationLabels:!1,useTransmittanceLut:!0,useSkyIrradianceLut:!0,shadowBufferLayout:void 0,shadowBufferFormat:void 0,shadowSunDiscSamples:void 0,shadowMsaaSamples:void 0,shadowGroundTexelFit:void 0,shadowAdaptiveQuality:void 0}),Bg=({location:t,state:e,setState:r,dateState:i,setDateState:n})=>{const s=e.animationMode??zt.DAY,a=e.animationSpeed??4,o=(c,l)=>n($u(i,i.year,Ho(i.year,c,l),t));return N.jsxs(N.Fragment,{children:[N.jsxs("section",{className:"min-w-0",children:[N.jsx("h3",{className:"mb-1.5 text-xs font-medium uppercase tracking-wide text-neutral-500",children:"Datum"}),N.jsxs("div",{className:"grid grid-cols-2 gap-2","data-test-id":"shadow-date-shortcuts",children:[N.jsx("button",{type:"button",className:Tr,onClick:()=>n(Ku(i,t)),children:"Heute"}),N.jsx("button",{type:"button",className:Tr,onClick:()=>o(2,21),children:"21. März"}),N.jsx("button",{type:"button",className:Tr,onClick:()=>o(5,21),children:"21. Juni"}),N.jsx("button",{type:"button",className:Tr,onClick:()=>o(11,21),children:"21. Dezember"})]})]}),N.jsxs("section",{children:[N.jsx("h3",{className:"mb-1.5 text-xs font-medium uppercase tracking-wide text-neutral-500",children:"Uhrzeit"}),N.jsx("div",{className:"grid grid-cols-4 gap-2",children:[9,12,15,18].map(c=>N.jsx("button",{type:"button",className:Tr,onClick:()=>n(Xi(i,{...i,minutes:c*60},t)),children:Zu(c)},c))})]}),N.jsxs("section",{children:[N.jsx("h3",{className:"mb-1.5 text-xs font-medium uppercase tracking-wide text-neutral-500",children:"Animation"}),N.jsxs("div",{className:"flex flex-wrap items-center gap-x-3 gap-y-2",children:[N.jsx("div",{className:"flex shrink-0 overflow-hidden rounded-md border border-neutral-300",children:[[zt.DAY,"Tagesverlauf"],[zt.YEAR,"Jahresverlauf"]].map(([c,l])=>N.jsx("button",{type:"button",className:`${Aa} ${s===c?"bg-amber-50 font-medium text-amber-700":"bg-white"}`,"aria-pressed":s===c,onClick:()=>{const u=c;r({...e,animationMode:u,isAnimating:s===u?!e.isAnimating:!0})},children:l},c))}),N.jsx("div",{className:"flex shrink-0 overflow-hidden rounded-md border border-neutral-300",children:[1,4,12].map(c=>N.jsxs("button",{type:"button",className:`${Aa} px-3 ${a===c?"bg-amber-50 font-medium text-amber-700":"bg-white"}`,"aria-pressed":a===c,onClick:()=>r({...e,animationSpeed:c}),children:[c,"×"]},c))})]})]})]})},Ug=({location:t,state:e,setState:r,dateState:i,setDateState:n})=>{const s=e.shadowIntensity??1,a=V.useMemo(()=>Hr(i,t),[i,t]);return N.jsxs("div",{className:"w-full","data-test-id":"shadow-simulation-secondary-panel",children:[N.jsxs("div",{className:"mb-2 flex flex-wrap items-center justify-between gap-x-4 gap-y-2",children:[N.jsxs("span",{className:"whitespace-nowrap text-sm tabular-nums text-neutral-500",children:["Höhe ",a.elevationDegrees.toFixed(0),"° · Azimut"," ",a.azimuthDegrees.toFixed(0),"°"]}),N.jsx("div",{className:"flex items-center gap-5 text-sm text-neutral-600",children:N.jsxs("button",{type:"button",className:"flex items-center gap-2 whitespace-nowrap hover:text-amber-700",onClick:()=>{r(Fg(e)),n(qu(i,t))},children:[N.jsx(Ot,{icon:du}),"Zurücksetzen"]})})]}),N.jsxs("div",{className:"grid grid-cols-1 gap-x-8 gap-y-4 lg:grid-cols-2",children:[N.jsx(Bg,{location:t,state:e,setState:r,dateState:i,setDateState:n}),N.jsxs("section",{className:"min-w-0",children:[N.jsxs("h3",{className:"mb-1.5 flex items-center gap-1 text-xs font-medium uppercase tracking-wide text-neutral-500",children:["Darstellung",N.jsx("button",{type:"button",className:"inline-flex items-center justify-center p-1 text-neutral-700 hover:text-amber-700","aria-label":"Darstellungseinstellungen",title:"Darstellungseinstellungen","aria-expanded":e.showDisplaySettings??!1,onClick:()=>r({...e,showDisplaySettings:!e.showDisplaySettings}),"data-test-id":"shadow-simulation-display-settings",children:N.jsx(Ot,{icon:hu})})]}),N.jsxs("label",{className:"grid grid-cols-[110px_minmax(0,1fr)_42px] items-center gap-3 text-sm text-neutral-700",children:[N.jsx("span",{children:"Intensität"}),N.jsx("input",{type:"range",min:0,max:1,step:.01,value:s,onChange:o=>r({...e,shadowIntensity:Number(o.currentTarget.value)}),className:"shadow-simulation-range min-w-0 cursor-pointer",style:ac(s,0,1),"aria-label":"Schattenintensität","data-test-id":"shadow-simulation-intensity"}),N.jsxs("span",{className:"text-right tabular-nums",children:[Math.round(s*100),"%"]})]})]})]})]})},kg=V.lazy(()=>Vi(()=>import("./ShadowProjectionDebugView-4OKQeU52.js"),__vite__mapDeps([11,1,2,3,4,5,6,7,8,9,10])).then(t=>({default:t.ShadowProjectionDebugView}))),Hg=V.lazy(()=>Vi(()=>import("./ShadowSimulationDisplaySettingsPanel-BNcTbhQF.js"),__vite__mapDeps([12,1,2,3,4,5,6,7,8,9,10])).then(t=>({default:t.ShadowSimulationDisplaySettingsPanel}))),zg=V.lazy(()=>Vi(()=>import("./ShadowSimulationCurveSettings-BdfRkfHU.js"),__vite__mapDeps([13,1,2,3,4,5,6,7,8,9,10])).then(t=>({default:t.ShadowSimulationCurveSettings}))),Vg="#1677ff",Wg=({config:t,libreMap:e,targeted:r,sharedState:i,setSharedState:n,sharedDateState:s,setSharedDateState:a})=>{var G,Y;const{year:o,initialDayOfYear:c,initialMinutes:l,latitude:u=Ri.latitude,longitude:d=Ri.longitude,timeZone:g=Ts,shadowAreaMeters:p,terrain:h,terrainSources:S,mapLibreTerrain:f,controlPosition:v="topleft",controlOrder:b=70,experimentalTiledShadows:R=!1}=t??{},A=sc(e,u,d),M=V.useMemo(()=>Ru({terrain:h,terrainSources:S}),[h,S]),C=V.useMemo(()=>s??Au({year:o,initialDayOfYear:c,initialMinutes:l,timeZone:g},A),[s,c,l,A,g,o]),E=i??M,F=s??C,k=V.useMemo(()=>S??(h?[{label:h.id,terrain:h}]:void 0),[h,S]),U=((G=k==null?void 0:k.find(({terrain:O})=>O.id===E.terrainSourceId))==null?void 0:G.terrain)??((Y=k==null?void 0:k[0])==null?void 0:Y.terrain);return V.useEffect(()=>{i||n(M)},[M,n,i]),V.useEffect(()=>{s||a(C)},[C,a,s]),r?N.jsx(Ug,{location:A,state:E,setState:n,dateState:F,setDateState:a}):N.jsxs(N.Fragment,{children:[e&&N.jsx(Jl,{position:v,order:b,children:N.jsx(vu,{title:E.enabled?"Schattensimulation ausschalten":"Schattensimulation einschalten",placement:"right",children:N.jsx(eu,{onClick:()=>n({...E,enabled:!E.enabled}),dataTestId:"shadow-simulation-control-button","aria-label":E.enabled?"Schattensimulation ausschalten":"Schattensimulation einschalten","aria-pressed":E.enabled,children:N.jsx(Ot,{icon:mu,style:E.enabled?{color:Vg}:void 0})})})}),N.jsx(Lg,{tiledShadows:R,libreMap:e,shadowAreaMeters:p,terrain:U,mapLibreTerrain:f,terrainQuality:E.terrainQuality,location:A,state:E,dateState:F,setDateState:a}),E.controlStyle===as.CURVE&&N.jsx(V.Suspense,{fallback:null,children:N.jsx(zg,{location:A,dateState:F,setDateState:a,onClose:()=>n({...E,controlStyle:as.QUICK})})}),E.showDisplaySettings&&N.jsx(V.Suspense,{fallback:null,children:N.jsx(Hg,{tiledShadows:R,state:E,setState:n,terrainSources:k,map:e})}),E.enabled&&E.showProjectionDebugView&&e&&N.jsx(V.Suspense,{fallback:null,children:N.jsx(kg,{map:e,solarPosition:Hr(F,A),settings:{showSunDebugVector:E.showSunDebugVector??!0,showTileBounds:E.showTileBounds??!0},onSettingsChange:O=>n({...E,...O}),onClose:()=>n({...E,showProjectionDebugView:!1})})})]})},av=Object.freeze(Object.defineProperty({__proto__:null,DEFAULT_SHADOW_SIMULATION_TIME_ZONE:Ts,SHADOW_TERRAIN_QUALITY:De,ShadowSimulationHeaderControlsView:ed,ShadowSimulationView:Wg,clampShadowSimulationSelectionToDaylight:tu,formatShadowSelection:ru,getSolarPosition:Hr},Symbol.toStringTag,{value:"Module"}));export{Is as D,ev as M,zr as S,In as a,Ma as b,tv as c,Tu as d,dt as e,wu as f,Cs as g,Zo as h,Jo as i,ec as j,Nr as k,Jg as l,Zg as m,as as n,Ke as o,Ai as p,av as q,nv as r,sv as s,Wi as u};
