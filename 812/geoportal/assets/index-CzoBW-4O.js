const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/shadow-sun-vector-CsEdK9ix.js","assets/index-BaY7E-rk.js","assets/vendor-react-core-BX5W9YLx.js","assets/vendor-ui-icons-DLtkh_tl.js","assets/vendor-cismap-Bovh4_cJ.js","assets/vendor-leaflet-DLsinmnd.js","assets/vendor-ui-DhnPd_en.js","assets/vendor-cismap-DCHbl3AQ.css","assets/vendor-cesium-HKQswYd8.js","assets/vendor-maplibre-uvO0ssSK.js","assets/index-sqlKuICJ.css","assets/ShadowProjectionDebugView-grz5w4Al.js","assets/ShadowSimulationDisplaySettingsPanel-BkH2o5OO.js","assets/ShadowSimulationCurveSettings-BjntA-Ng.js"])))=>i.map(i=>d[i]);
import{S as Br,C as ki,a as ir,G as Ur,L as Tl,N as ko,M as Wr,P as xs,V as te,b as je,W as Ke,F as Et,R as kr,c as De,D as sr,U as Vt,d as Ge,g as Ts,e as Hi,f as bs,h as bl,i as zi,k as Se,l as Ho,j as N,o as ns,m as Ml,n as zo,p as An,q as Ai,r as Gr,s as J,t as ut,u as T,v as El,B as Fe,E as Vo,w as Rl,x as Al,y as Wo,z as D,A as Vi,T as Go,O as Ms,H as jo,I as wa,J as Es,K as Cl,Q as ss,X as _a,Y as Rs,Z as Il,_ as Dl,$ as xa,a0 as Pl,a1 as Nl,a2 as Ol,a3 as Yo,a4 as Lt,a5 as Ll,a6 as $o,a7 as Ta,a8 as Fl,a9 as Ko,aa as Bl,ab as Ul,ac as kl,ad as as,ae as Cn,af as Hl,ag as zl,ah as bi,ai as qo,aj as tr,ak as Vl,al as As,am as Xo,an as Wl,ao as Gl,ap as jl,aq as Qo,ar as Yl,as as ba,at as xe,au as Cs,av as $l,aw as Zo,ax as Kl,ay as Wi,az as ui,aA as ql,aB as Xl,aC as Ql,aD as xr,aE as Zl,aF as Jl,aG as In,aH as eu,aI as Hr,aJ as tu,aK as ru,aL as iu,aM as nu}from"./index-BaY7E-rk.js";import{g as su,r as z,d as au}from"./vendor-react-core-BX5W9YLx.js";import{F as Ot,V as ou,bv as cu,W as lu,z as uu,bc as du,bd as hu,bw as mu,bg as fu,D as pu}from"./vendor-ui-icons-DLtkh_tl.js";import{K as gu,L as vu,N as yu,e as Su}from"./vendor-ui-DhnPd_en.js";import{a as wu}from"./vendor-maplibre-uvO0ssSK.js";import"./vendor-cismap-Bovh4_cJ.js";import"./vendor-leaflet-DLsinmnd.js";const Ma=20;class _u{constructor(e,r=256*1024**2){this.renderer=e,this.maximumBytes=r,this.quad.frustumCulled=!1,this.scene.add(this.quad)}target=null;key=null;broken=!1;captures=0;reuses=0;scene=new Br;camera=new ki;material=new ir({glslVersion:Ur,uniforms:{color:{value:null},depth:{value:null}},vertexShader:`out vec2 uvCopy;
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
      }`,depthTest:!0,depthFunc:Tl,depthWrite:!0,transparent:!0,blending:ko});quad=new Wr(new xs(2,2),this.material);get stats(){return{captures:this.captures,reuses:this.reuses,bytes:this.target?this.target.width*this.target.height*Ma:0,broken:this.broken}}invalidate(){this.key=null}render(e,r,i,n){var f,v;const s=this.renderer;if(this.broken||!Number.isInteger(r)||!Number.isInteger(i)||r<1||i<1||r>s.capabilities.maxTextureSize||i>s.capabilities.maxTextureSize||r*i*Ma>this.maximumBytes||!s.extensions.has("EXT_color_buffer_float"))return this.releaseTarget(),n(),!1;const a=s.getRenderTarget(),o=s.getActiveCubeFace(),c=s.getActiveMipmapLevel(),l=s.getViewport(new te),u=s.getScissor(new te),d=s.getScissorTest(),g=s.getClearColor(new je),p=s.getClearAlpha(),h=s.autoClear,S=()=>{s.setRenderTarget(a,o,c),s.setViewport(l),s.setScissor(u),s.setScissorTest(d),s.setClearColor(g,p),s.autoClear=h};try{if(((f=this.target)==null?void 0:f.width)!==r||((v=this.target)==null?void 0:v.height)!==i){this.releaseTarget(),this.target=new Ke(r,i,{type:Et,format:kr,minFilter:De,magFilter:De,depthTexture:new sr(r,i,Vt),samples:0});try{s.initRenderTarget(this.target)}catch{return this.broken=!0,this.releaseTarget(),S(),n(),!1}}const b=JSON.stringify([e,r,i,s.outputColorSpace,s.toneMapping,s.toneMappingExposure,a==null?void 0:a.texture.colorSpace]);return s.autoClear=!1,this.key!==b?(this.key=null,s.setRenderTarget(this.target),s.setViewport(new te(0,0,r,i)),s.setScissorTest(!1),s.setClearColor(0,0),s.clear(!0,!0,!1),n(),this.key=b,this.captures+=1):this.reuses+=1,S(),s.autoClear=!1,this.material.uniforms.color.value=this.target.texture,this.material.uniforms.depth.value=this.target.depthTexture,s.render(this.scene,this.camera),!0}catch(b){throw this.invalidate(),b}finally{S()}}releaseTarget(){var e,r,i;(r=(e=this.target)==null?void 0:e.depthTexture)==null||r.dispose(),(i=this.target)==null||i.dispose(),this.target=null,this.key=null}dispose(){this.releaseTarget(),this.broken=!0,this.material.dispose(),this.quad.geometry.dispose()}}const Ci={OVERLAY:"isShadowSimulationOverlay"},qe={FPS_120:4,FPS_60:16,FPS_30:64,ULTRA:256},Is="max",di=64,xu=[0,2,4,8,Is],dt={[qe.FPS_120]:{targetFps:120,depthSize:2048,terrainErrorPixels:2,shadowTexelErrorPixels:2,terrainTileLimit:96,terrainSegments:128,sunSamples:di,msaaSamples:0},[qe.FPS_60]:{targetFps:60,depthSize:3072,terrainErrorPixels:1,shadowTexelErrorPixels:1,terrainTileLimit:144,terrainSegments:256,sunSamples:di,msaaSamples:2},[qe.FPS_30]:{targetFps:30,depthSize:4096,terrainErrorPixels:.5,shadowTexelErrorPixels:.5,terrainTileLimit:192,terrainSegments:512,sunSamples:di,msaaSamples:4},[qe.ULTRA]:{targetFps:null,depthSize:16384,terrainErrorPixels:.25,shadowTexelErrorPixels:.25,terrainTileLimit:256,terrainSegments:512,sunSamples:di,msaaSamples:Is}},Tu=(t,e,r=Nr)=>{if(!t)return;const i=dt[e];return{...t,errorTargetPixels:r,meshSegments:Math.min(t.tileSize,i.terrainSegments),maxSelectionTiles:Math.min(t.maxSelectionTiles??i.terrainTileLimit,i.terrainTileLimit)}},ur=64,Nr=2,bu=6*1024**3,Ds="#d3d3d3",Jo=0,ec=1,tc="#ffffff",zr={MONO:"mono",TILED:"tiled"},ht={HDR_16:"rgba16f",HDR_16_32:"rgba16f-32f",HDR_32:"rgba32f",SDR_8:"rgba8"},Mu=[32,64,128,256,512,1024,2048,4096,8192],Eu=!0,Dn=(t={},e=ur)=>({shadowAdaptiveQuality:t.shadowAdaptiveQuality??!0,shadowBufferLayout:t.shadowBufferLayout&&Object.values(zr).includes(t.shadowBufferLayout)?t.shadowBufferLayout:zr.MONO,shadowBufferFormat:t.shadowBufferFormat&&Object.values(ht).includes(t.shadowBufferFormat)?t.shadowBufferFormat:ht.HDR_16_32,shadowSunDiscSamples:t.shadowSunDiscSamples&&Mu.includes(t.shadowSunDiscSamples)?t.shadowSunDiscSamples:dt[e].sunSamples,shadowMsaaSamples:t.shadowBufferFormat===ht.HDR_32?0:t.shadowMsaaSamples!==void 0&&xu.includes(t.shadowMsaaSamples)?t.shadowMsaaSamples:dt[e].msaaSamples,shadowGroundTexelFit:t.shadowGroundTexelFit??Eu}),Ea=t=>Object.values(qe).includes(t)?t:ur,Ru=t=>typeof t=="string"&&/^#[\da-f]{6}$/i.test(t)?t:typeof t=="number"&&Number.isFinite(t)?`#${Ge(Math.round(t),0,16777215).toString(16).padStart(6,"0")}`:Ds,rc=()=>{var t;return typeof navigator>"u"?{userAgent:"",platform:"",maxTouchPoints:0}:{userAgent:navigator.userAgent,platform:navigator.platform,maxTouchPoints:navigator.maxTouchPoints,mobile:(t=navigator.userAgentData)==null?void 0:t.mobile}},ic=(t=rc())=>/iPhone|iPod|Android.*Mobile/i.test(t.userAgent)||t.mobile?"phone":/iPad|Android/i.test(t.userAgent)||t.platform==="MacIntel"&&t.maxTouchPoints>1?"tablet":"desktop",Gi=()=>ic()!=="desktop",Mi=96*1024**2,Au=(t,e=Gi())=>!t||!e?t:{...t,meshSegments:Math.min(t.meshSegments??t.tileSize,128),maximumMeshSegments:Math.min(t.maximumMeshSegments??128,128),maxSelectionTiles:Math.min(t.maxSelectionTiles??48,48),maxCachedMeshes:Math.min(t.maxCachedMeshes??64,64),maxCachedMeshBytes:Math.min(t.maxCachedMeshBytes??32*1024**2,32*1024**2),maxCacheBytes:Math.min(t.maxCacheBytes??16*1024**2,16*1024**2),requestConcurrency:Math.min(t.requestConcurrency??2,2)},Pn=(t,e=Gi())=>e?{...t,shadowAdaptiveQuality:!0,shadowBufferLayout:zr.MONO,shadowBufferFormat:ht.SDR_8,shadowMsaaSamples:0}:t,Pe={STANDARD:"standard",HIGH:"high",MAX:"max",ULTRA:"ultra",EXTREME:"extreme"},os={QUICK:"quick",CURVE:"curve"},zt={DAY:"day",YEAR:"year"},ev=(t,e)=>({...t,shadowQuality:e,shadowBufferFormat:void 0,shadowSunDiscSamples:void 0,shadowMsaaSamples:void 0,shadowGroundTexelFit:void 0}),Cu=t=>{var i,n,s;const e=Gi(),r=((n=(i=t==null?void 0:t.terrainSources)==null?void 0:i[0])==null?void 0:n.terrain)??(t==null?void 0:t.terrain);return{enabled:!1,terrainColor:Ru((s=r==null?void 0:r.material)==null?void 0:s.color),terrainSourceId:r==null?void 0:r.id,terrainQuality:e?Pe.STANDARD:Pe.MAX,buildingsFullOpacity:!0,buildingColorMix:Jo,meshTextureSaturation:ec,meshTextureColorCorrection:!0,buildingColor:tc,shadowQuality:e?qe.FPS_120:ur,shadowAdaptiveQuality:!0,terrainErrorTarget:Nr,meshCacheBudgetBytes:e?Mi:bu,showSunDebugVector:!0,showTileBounds:!0,showProjectionDebugView:!1,showDisplaySettings:!1,softSunShadows:!e,showMapStyleContent:!0,showMapStyleLabels:!0,showMapStyleElevationLines:!1,showMapStyleElevationLabels:!1,useTransmittanceLut:!0,useSkyIrradianceLut:!0,controlStyle:os.QUICK,animationMode:zt.DAY,animationSpeed:4,isAnimating:!1,shadowIntensity:1}},Iu=(t,e,r=new Date)=>{const i=(t==null?void 0:t.timeZone)??bs,n=Ts(r,i),s={year:(t==null?void 0:t.year)??n.year,dayOfYear:(t==null?void 0:t.initialDayOfYear)??n.dayOfYear,minutes:(t==null?void 0:t.initialMinutes)??n.minutes,timeZone:i};return Hi(s,e)??{...s,minutes:12*60}};var ji={},Yi={};Object.defineProperty(Yi,"__esModule",{value:!0});Yi.default=void 0;var Du={items_per_page:"/ Seite",jump_to:"Gehe zu",jump_to_confirm:"bestätigen",page:"Seite",prev_page:"Vorherige Seite",next_page:"Nächste Seite",prev_5:"5 Seiten zurück",next_5:"5 Seiten vor",prev_3:"3 Seiten zurück",next_3:"3 Seiten vor",page_size:"Page Size"};Yi.default=Du;var $i={},jr={},Ki={},nc={exports:{}};(function(t){var e=bl;function r(n,s){var a=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);s&&(o=o.filter(function(c){return Object.getOwnPropertyDescriptor(n,c).enumerable})),a.push.apply(a,o)}return a}function i(n){for(var s=1;s<arguments.length;s++){var a=arguments[s]!=null?arguments[s]:{};s%2?r(Object(a),!0).forEach(function(o){e(n,o,a[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach(function(o){Object.defineProperty(n,o,Object.getOwnPropertyDescriptor(a,o))})}return n}t.exports=i,t.exports.__esModule=!0,t.exports.default=t.exports})(nc);var Pu=nc.exports,qi={};Object.defineProperty(qi,"__esModule",{value:!0});qi.commonLocale=void 0;qi.commonLocale={yearFormat:"YYYY",dayFormat:"D",cellMeridiemFormat:"A",monthBeforeYear:!0};var Nu=zi.default;Object.defineProperty(Ki,"__esModule",{value:!0});Ki.default=void 0;var Ra=Nu(Pu),Ou=qi,Lu=(0,Ra.default)((0,Ra.default)({},Ou.commonLocale),{},{locale:"de_DE",today:"Heute",now:"Jetzt",backToToday:"Zurück zu Heute",ok:"OK",clear:"Zurücksetzen",month:"Monat",year:"Jahr",timeSelect:"Zeit wählen",dateSelect:"Datum wählen",monthSelect:"Wähle einen Monat",yearSelect:"Wähle ein Jahr",decadeSelect:"Wähle ein Jahrzehnt",dateFormat:"D.M.YYYY",dateTimeFormat:"D.M.YYYY HH:mm:ss",previousMonth:"Vorheriger Monat (PageUp)",nextMonth:"Nächster Monat (PageDown)",previousYear:"Vorheriges Jahr (Ctrl + left)",nextYear:"Nächstes Jahr (Ctrl + right)",previousDecade:"Vorheriges Jahrzehnt",nextDecade:"Nächstes Jahrzehnt",previousCentury:"Vorheriges Jahrhundert",nextCentury:"Nächstes Jahrhundert"});Ki.default=Lu;var Yr={};Object.defineProperty(Yr,"__esModule",{value:!0});Yr.default=void 0;const Fu={placeholder:"Zeit auswählen",rangePlaceholder:["Startzeit","Endzeit"]};Yr.default=Fu;var sc=zi.default;Object.defineProperty(jr,"__esModule",{value:!0});jr.default=void 0;var Bu=sc(Ki),Uu=sc(Yr);const ku={lang:Object.assign({placeholder:"Datum auswählen",rangePlaceholder:["Startdatum","Enddatum"],shortWeekDays:["So","Mo","Di","Mi","Do","Fr","Sa"],shortMonths:["Jan","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"]},Bu.default),timePickerLocale:Object.assign({},Uu.default)};jr.default=ku;var Hu=zi.default;Object.defineProperty($i,"__esModule",{value:!0});$i.default=void 0;var zu=Hu(jr);$i.default=zu.default;var Xi=zi.default;Object.defineProperty(ji,"__esModule",{value:!0});ji.default=void 0;var Vu=Xi(Yi),Wu=Xi($i),Gu=Xi(jr),ju=Xi(Yr);const Ve="${label} ist nicht gültig. ${type} erwartet",Yu={locale:"de",Pagination:Vu.default,DatePicker:Gu.default,TimePicker:ju.default,Calendar:Wu.default,global:{placeholder:"Bitte auswählen"},Table:{filterTitle:"Filter-Menü",filterConfirm:"OK",filterReset:"Zurücksetzen",filterEmptyText:"Keine Filter",filterSearchPlaceholder:"Suche in Filtern",filterCheckall:"Alle auswählen",selectAll:"Selektiere Alle",selectInvert:"Selektion Invertieren",selectionAll:"Wählen Sie alle Daten aus",sortTitle:"Sortieren",emptyText:"Keine Daten",expand:"Zeile erweitern",collapse:"Zeile reduzieren",triggerDesc:"Klicken zur absteigenden Sortierung",triggerAsc:"Klicken zur aufsteigenden Sortierung",cancelSort:"Klicken zum Abbrechen der Sortierung"},Tour:{Next:"Weiter",Previous:"Zurück",Finish:"Fertig"},Modal:{okText:"OK",cancelText:"Abbrechen",justOkText:"OK"},Popconfirm:{okText:"OK",cancelText:"Abbrechen"},Transfer:{titles:["",""],searchPlaceholder:"Suchen",itemUnit:"Eintrag",itemsUnit:"Einträge",remove:"Entfernen",selectCurrent:"Alle auf aktueller Seite auswählen",removeCurrent:"Auswahl auf aktueller Seite aufheben",selectAll:"Alle auswählen",removeAll:"Auswahl aufheben",selectInvert:"Auswahl umkehren"},Upload:{uploading:"Hochladen...",removeFile:"Datei entfernen",uploadError:"Fehler beim Hochladen",previewFile:"Dateivorschau",downloadFile:"Download-Datei"},Empty:{description:"Keine Daten"},Text:{edit:"Bearbeiten",copy:"Kopieren",copied:"Kopiert",expand:"Erweitern"},Form:{defaultValidateMessages:{default:"Feld-Validierungsfehler: ${label}",required:"Bitte geben Sie ${label} an",enum:"${label} muss eines der folgenden sein [${enum}]",whitespace:"${label} darf kein Leerzeichen sein",date:{format:"${label} ist ein ungültiges Datumsformat",parse:"${label} kann nicht in ein Datum umgewandelt werden",invalid:"${label} ist ein ungültiges Datum"},types:{string:Ve,method:Ve,array:Ve,object:Ve,number:Ve,date:Ve,boolean:Ve,integer:Ve,float:Ve,regexp:Ve,email:Ve,url:Ve,hex:Ve},string:{len:"${label} muss genau ${len} Zeichen lang sein",min:"${label} muss mindestens ${min} Zeichen lang sein",max:"${label} darf höchstens ${max} Zeichen lang sein",range:"${label} muss zwischen ${min} und ${max} Zeichen lang sein"},number:{len:"${label} muss gleich ${len} sein",min:"${label} muss mindestens ${min} sein",max:"${label} darf maximal ${max} sein",range:"${label} muss zwischen ${min} und ${max} liegen"},array:{len:"Es müssen ${len} ${label} sein",min:"Es müssen mindestens ${min} ${label} sein",max:"Es dürfen maximal ${max} ${label} sein",range:"Die Anzahl an ${label} muss zwischen ${min} und ${max} liegen"},pattern:{mismatch:"${label} entspricht nicht dem ${pattern} Muster"}}},Image:{preview:"Vorschau"},QRCode:{expired:"QR-Code abgelaufen",refresh:"Aktualisieren"}};ji.default=Yu;var $u=ji;const Ku=su($u),Qi=(t,e,r)=>Hi(e,r)??t,qu=(t,e,r,i)=>Qi(t,{...t,year:e,dayOfYear:r},i),Xu=(t,e,r=new Date)=>{const i=Ts(r,t.timeZone);return Qi(t,{...i,minutes:t.minutes},e)},Qu=(t,e,r=new Date)=>{const i=Ts(r,t.timeZone);return Hi(i,e)??t},Zu=(t,e)=>({latitude:(t==null?void 0:t.latitude)??e.latitude,longitude:(t==null?void 0:t.longitude)??e.longitude}),Ju=(t,e)=>t.latitude===e.latitude&&t.longitude===e.longitude,Aa=(t,e,r)=>{const i=t==null?void 0:t.getCenter();return Zu(i?{latitude:i.lat,longitude:i.lng}:null,{latitude:e,longitude:r})},ac=(t,e,r)=>{const[i,n]=z.useState(()=>Aa(t,e,r));return z.useEffect(()=>{const s=()=>{const a=Aa(t,e,r);n(o=>Ju(o,a)?o:a)};if(s(),!!t)return t.on(Se.MOVE_END,s),()=>{t.off(Se.MOVE_END,s)}},[e,r,t]),i},Tr="flex h-9 min-w-0 items-center justify-center whitespace-nowrap rounded-md border border-neutral-300 bg-white px-1 text-center text-sm text-neutral-800 transition-colors hover:border-amber-500 hover:text-amber-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/40",Ca="h-8 whitespace-nowrap border-r border-neutral-300 px-3 text-sm text-neutral-700 transition-colors last:border-r-0 hover:text-amber-700",tv=[{label:"120 FPS",value:qe.FPS_120},{label:"60 FPS",value:qe.FPS_60},{label:"30 FPS",value:qe.FPS_30},{label:"Ultra",value:qe.ULTRA}],rv=[{label:"0,25 px",value:.25},{label:"0,5 px",value:.5},{label:"1 px",value:1},{label:"2 px",value:2},{label:"4 px",value:4}],iv=[{value:ht.HDR_16,label:"HDR · 16 Bit (Experiment)"},{value:ht.HDR_16_32,label:"HDR · 16/32 Bit (Standard)"},{value:ht.HDR_32,label:"HDR · 32 Bit (ohne MSAA)"},{value:ht.SDR_8,label:"SDR · 8 Bit (Experiment)"}],ed=t=>`${String(t).padStart(2,"0")}:00`,oc=(t,e,r)=>({"--shadow-range-progress":`${r>e?Math.max(0,Math.min(100,(t-e)/(r-e)*100)):0}%`});var td={exports:{}};(function(t,e){(function(r,i){t.exports=i(gu)})(au,function(r){function i(c){return c&&typeof c=="object"&&"default"in c?c:{default:c}}var n=i(r),s={s:"ein paar Sekunden",m:["eine Minute","einer Minute"],mm:"%d Minuten",h:["eine Stunde","einer Stunde"],hh:"%d Stunden",d:["ein Tag","einem Tag"],dd:["%d Tage","%d Tagen"],M:["ein Monat","einem Monat"],MM:["%d Monate","%d Monaten"],y:["ein Jahr","einem Jahr"],yy:["%d Jahre","%d Jahren"]};function a(c,l,u){var d=s[u];return Array.isArray(d)&&(d=d[l?0:1]),d.replace("%d",c)}var o={name:"de",weekdays:"Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),weekdaysShort:"So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),weekdaysMin:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),months:"Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sept._Okt._Nov._Dez.".split("_"),ordinal:function(c){return c+"."},weekStart:1,yearStart:4,formats:{LTS:"HH:mm:ss",LT:"HH:mm",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY HH:mm",LLLL:"dddd, D. MMMM YYYY HH:mm"},relativeTime:{future:"in %s",past:"vor %s",s:a,m:a,mm:a,h:a,hh:a,d:a,dd:a,M:a,MM:a,y:a,yy:a}};return n.default.locale(o,null,!0),o})})(td);const rd=({config:t,libreMap:e,state:r,setState:i,dateState:n,setDateState:s})=>{const{latitude:a=Ai.latitude,longitude:o=Ai.longitude}=t??{},c=ac(e,a,o),[l,u]=z.useState(!1),d=n,g=z.useMemo(()=>d?Ho(d,c):null,[c,d]),p=z.useMemo(()=>d?vu(new Date(Date.UTC(d.year,0,d.dayOfYear))).locale("de"):null,[d]);if(!r||!d||!g||!p)return null;const h=Math.ceil(g.sunriseMinutes),S=Math.floor(g.sunsetMinutes),f=v=>{s(Qi(d,v,c))};return N.jsx("div",{className:"shadow-simulation-header-controls text-sm text-neutral-700","data-test-id":"shadow-simulation-header-controls",children:N.jsxs("div",{className:"shadow-simulation-header-layout",children:[N.jsxs("div",{className:"shadow-simulation-header-date grid grid-cols-[28px_minmax(0,118px)_28px] items-center",children:[N.jsx("button",{type:"button",className:"flex h-9 w-7 items-center justify-center rounded-full hover:bg-neutral-100","aria-label":"Vorheriger Tag",onClick:()=>f({...d,...ns(d,-1)}),children:N.jsx(Ot,{icon:ou})}),N.jsxs("div",{className:"relative min-w-0 justify-self-center",children:[N.jsxs("button",{type:"button",className:"flex h-9 max-w-full items-center gap-1.5 whitespace-nowrap rounded-md px-1 tabular-nums hover:bg-neutral-100","aria-label":"Datum auswählen","aria-expanded":l,onClick:()=>u(!0),children:[N.jsx(Ot,{icon:cu,className:"shrink-0 text-neutral-500"}),N.jsx("span",{className:"truncate",children:Ml(d,!1)})]}),N.jsx(yu,{open:l,value:p,locale:Ku.DatePicker,format:"D. MMMM YYYY",allowClear:!1,inputReadOnly:!0,getPopupContainer:v=>v.parentElement??v,onOpenChange:u,onChange:v=>{v&&(f({...d,year:v.year(),dayOfYear:zo(v.year(),v.month(),v.date())}),u(!1))},className:"pointer-events-none absolute left-0 top-full h-0 w-0 overflow-hidden p-0 opacity-0","aria-label":"Datum auswählen"})]}),N.jsx("button",{type:"button",className:"flex h-9 w-7 items-center justify-center rounded-full hover:bg-neutral-100","aria-label":"Nächster Tag",onClick:()=>f({...d,...ns(d,1)}),children:N.jsx(Ot,{icon:lu})})]}),N.jsx("span",{className:"shadow-simulation-header-divider h-7 w-px bg-neutral-200","aria-hidden":"true"}),N.jsxs("label",{className:"shadow-simulation-header-time m-0 flex h-9 w-fit cursor-pointer items-center gap-1.5 rounded-md px-1 hover:bg-neutral-100",children:[N.jsx(Ot,{icon:uu,className:"shrink-0 text-neutral-500"}),N.jsx("input",{type:"time",value:An(d.minutes),min:An(h),max:An(S),step:60,onClick:v=>{try{v.currentTarget.showPicker()}catch{return}},onChange:v=>{const[b,A]=v.currentTarget.value.split(":").map(Number);!Number.isFinite(b)||!Number.isFinite(A)||f({...d,minutes:b*60+A})},className:"shadow-simulation-time-input w-[46px] cursor-pointer bg-transparent p-0 text-sm font-medium leading-none tabular-nums text-neutral-800 outline-none","aria-label":"Uhrzeit auswählen","data-test-id":"shadow-simulation-time-input"})]}),N.jsx("input",{type:"range",min:h,max:S,step:1,value:d.minutes,onChange:v=>f({...d,minutes:Number(v.currentTarget.value)}),className:"shadow-simulation-header-range shadow-simulation-range cursor-pointer",style:oc(d.minutes,h,S),"aria-label":"Uhrzeit","data-test-id":"shadow-simulation-ribbon-time"}),N.jsx("button",{type:"button",className:"shadow-simulation-header-play flex h-9 w-9 items-center justify-center rounded-full bg-amber-50 text-amber-600 hover:bg-amber-100","aria-label":r.isAnimating?"Animation pausieren":"Animation starten","aria-pressed":r.isAnimating??!1,onClick:()=>i({...r,isAnimating:!r.isAnimating}),children:N.jsx(Ot,{icon:r.isAnimating?du:hu})})]})})},Ia=[[0,1],[1,3],[3,2],[2,0],[4,5],[5,7],[7,6],[6,4],[0,4],[1,5],[2,6],[3,7]],id=({min:t,max:e})=>[new T(t.x,t.y,t.z),new T(e.x,t.y,t.z),new T(t.x,e.y,t.z),new T(e.x,e.y,t.z),new T(t.x,t.y,e.z),new T(e.x,t.y,e.z),new T(t.x,e.y,e.z),new T(e.x,e.y,e.z)],nd=t=>[t.coordinateSystem===El?0:-1,1].flatMap(r=>[-1,1].flatMap(i=>[-1,1].map(n=>new T(n,i,r).unproject(t)))),Nn=(t,e,r)=>t.every(i=>i.distanceToPoint(e)>=-r),Da=(t,e,r)=>e.x>=t.min.x-r&&e.x<=t.max.x+r&&e.y>=t.min.y-r&&e.y<=t.max.y+r&&e.z>=t.min.z-r&&e.z<=t.max.z+r,cs=(t,e,r)=>{t.some(i=>i.distanceToSquared(e)<=r)||t.push(e)},Pa=(t,e,r,i,n,s)=>{const a=e.clone().sub(t);for(const o of r){const c=o.distanceToPoint(t),l=o.distanceToPoint(e),u=c-l;if(Math.abs(u)<=Number.EPSILON)continue;const d=c/u;if(d<0||d>1)continue;const g=t.clone().addScaledVector(a,d);i(g)&&cs(n,g,s)}},cc=(t,e,r=1e-6)=>{if(e.isEmpty())return[];t.updateMatrixWorld(!0);const i=new Gr().setFromProjectionMatrix(new J().multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),t.coordinateSystem,t.reversedDepth);if(!i.intersectsBox(e))return[];const n=r*r,s=id(e),a=nd(t),o=[];for(const l of s)Nn(i.planes,l,r)&&cs(o,l,n);for(const l of a)Da(e,l,r)&&cs(o,l,n);for(const[l,u]of Ia)Pa(s[l],s[u],i.planes,d=>Nn(i.planes,d,r),o,n);const c=[new ut(new T(1,0,0),-e.min.x),new ut(new T(-1,0,0),e.max.x),new ut(new T(0,1,0),-e.min.y),new ut(new T(0,-1,0),e.max.y),new ut(new T(0,0,1),-e.min.z),new ut(new T(0,0,-1),e.max.z)];for(const[l,u]of Ia)Pa(a[l],a[u],c,d=>Da(e,d,r)&&Nn(i.planes,d,r),o,n);return o},lc=(t,e)=>{const r=$r(t).map(o=>new te(o.x,o.y,o.z,1).applyMatrix4(e));if(r.some(o=>o.w<=0))return new te(0,0,1,1);const i=Math.max(0,(Math.min(...r.map(o=>o.x/o.w))+1)/2),n=Math.max(0,(Math.min(...r.map(o=>o.y/o.w))+1)/2),s=Math.min(1,(Math.max(...r.map(o=>o.x/o.w))+1)/2),a=Math.min(1,(Math.max(...r.map(o=>o.y/o.w))+1)/2);return new te(i,n,Math.max(0,s-i),Math.max(0,a-n))},$r=t=>[t.min.x,t.max.x].flatMap(e=>[t.min.y,t.max.y].flatMap(r=>[t.min.z,t.max.z].map(i=>new T(e,r,i)))),uc=(t,e,r)=>{const i=e.elements,n=$r(t).map(o=>new te(o.x,o.y,o.z,1).applyMatrix4(e)),s=Math.min(...n.map(o=>o.w));if(s<=0)return 1/0;let a=0;for(const[o,c]of[[0,r.x],[1,r.y]])for(let l=0;l<3;l+=1){const u=Math.max(...n.map(d=>Math.abs(i[l*4+o]*d.w-(o===0?d.x:d.y)*i[l*4+3])));a+=(c*.5*u/(s*s))**2}return Math.sqrt(a)},sd=(t,e,r,i)=>{if(!(i>0&&Number.isFinite(i))||!(r.x>0&&r.y>0))throw new RangeError("Shadow page projection requires a positive pixel target and viewport");const n=new J().multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),s=new Set;for(const{id:o,bounds:c}of t){if(s.has(o)||c.isEmpty()||![...c.min.toArray(),...c.max.toArray()].every(Number.isFinite))throw new RangeError("Receiver cells require unique IDs and finite, nonempty bounds");s.add(o)}const a=new Gr().setFromProjectionMatrix(n);return t.filter(({bounds:o})=>a.intersectsBox(o)).map(o=>({...o,screenBounds:lc(o.bounds,n),groundTexelTargetMeters:Math.max(1e-9,i/uc(o.bounds,n,r))}))},ad=(t,e,r,i,n)=>t.clone().union(t.clone().translate(e.clone().normalize().multiplyScalar(r))).expandByScalar(2*r*Math.sin(i/2)+n),od=(t,e)=>t.flatMap(({bounds:r})=>cc(e,r).length>0?$r(r):[]),hi={WEST:"west",EAST:"east",SOUTH:"south",NORTH:"north"},br=({bounds:t})=>(t.max.x-t.min.x)*(t.max.z-t.min.z),cd=(t,e)=>t.min.z===e.min.z&&t.max.z===e.max.z&&(t.max.x===e.min.x||e.max.x===t.min.x)||t.min.x===e.min.x&&t.max.x===e.max.x&&(t.max.z===e.min.z||e.max.z===t.min.z),ld=t=>{const e=new Map(t.map(i=>[i.id,i]));let r=!0;for(;r;){r=!1;for(const i of e.values()){if(Math.min(i.bounds.max.x-i.bounds.min.x,i.bounds.max.z-i.bounds.min.z)>=i.fragmentMergeWidthMeters)continue;const s=br(i),a=[...e.values()].filter(o=>o!==i&&(br(o)>s||br(o)===s&&o.id<i.id)&&cd(i.bounds,o.bounds)).sort((o,c)=>br(c)-br(o)||(o.id<c.id?-1:o.id>c.id?1:0))[0];if(a){e.set(a.id,{...a,bounds:a.bounds.clone().union(i.bounds)}),e.delete(i.id),r=!0;break}}}return[...e.values()].map(({id:i,bounds:n})=>({id:i,bounds:n}))},On=t=>({west:t.min.x,east:t.max.x,south:t.min.z,north:t.max.z}),dc=(t,e)=>t.west<e.east&&t.east>e.west&&t.south<e.north&&t.north>e.south,ud=(t,e,r)=>{if(!dc(t,e))return[t];const i=Math.max(t.west,e.west),n=Math.min(t.east,e.east),s=Math.max(t.south,e.south),a=Math.min(t.north,e.north);return[{...t,east:i,side:hi.WEST},{...t,west:n,side:hi.EAST},{west:i,east:n,south:t.south,north:s,side:hi.SOUTH},{west:i,east:n,south:a,north:t.north,side:hi.NORTH}].filter(o=>o.west<o.east&&o.south<o.north).map(({side:o,...c})=>({...c,splitPath:[...t.splitPath,r,o]}))},dd=t=>{const e=new Set;for(const{id:n,bounds:s}of t){if(e.has(n)||s.isEmpty()||![...s.min.toArray(),...s.max.toArray()].every(Number.isFinite))throw new RangeError("Receiver tiles require unique IDs and finite bounds");e.add(n)}const r=[...t].sort((n,s)=>n.id<s.id?-1:n.id>s.id?1:0);if(r.every(({receiverObjectId:n})=>n!==void 0))return r;const i=r.flatMap(({id:n,bounds:s},a)=>{const o=On(s);return o.west===o.east||o.south===o.north?[]:r.slice(0,a).reduce((l,u)=>l.flatMap(d=>ud(d,On(u.bounds),u.id)),[{...o,splitPath:[]}]).map(l=>{const u=r.reduce((d,g)=>dc(l,On(g.bounds))?[Math.min(d[0],g.bounds.min.y),Math.max(d[1],g.bounds.max.y)]:d,[s.min.y,s.max.y]);return{fragmentMergeWidthMeters:l.splitPath.length===0?0:Math.max(.1,.01*Math.min(o.east-o.west,o.north-o.south)),id:l.splitPath.length===0?n:JSON.stringify([n,...l.splitPath]),bounds:new Fe(new T(l.west,u[0],l.south),new T(l.east,u[1],l.north))}})});return ld(i)},hd=(t,e=16)=>{if(!Number.isInteger(e)||e<=0||t.length===0)return[];const i=t.reduce((c,l)=>c.union(l.bounds),new Fe).getCenter(new T),n=new Set(t.map(({id:c})=>c)),s=new Map;for(const c of t){const l=c.bounds.max.x-c.bounds.min.x;if(!(l>0&&Number.isFinite(l)))continue;const u=Math.round(c.bounds.min.x/l),d=Math.round(c.bounds.min.z/l);for(let g=-1;g<=1;g+=1)for(let p=-1;p<=1;p+=1){const h=`${l}:${u+g}:${d+p}`;n.has(h)||s.has(h)||s.set(h,{id:h,bounds:c.bounds.clone().translate(new T(g*l,0,p*l))})}}const a=Array.from({length:8},()=>[]);for(const c of s.values()){const l=c.bounds.getCenter(new T).sub(i),u=(Math.round(Math.atan2(l.z,l.x)/(Math.PI/4))+8)%8;a[u].push(c)}for(const c of a)c.sort((l,u)=>l.bounds.distanceToPoint(i)-u.bounds.distanceToPoint(i)||l.id.localeCompare(u.id));const o=[];for(let c=0;o.length<e;c+=1){const l=a.flatMap(u=>u[c]?[u[c]]:[]);if(l.length===0)break;o.push(...l.slice(0,e-o.length))}return o},md=(t,e)=>{const r=t.getCenter(new T);let i=null,n=1/0;for(const s of e){const a=s.receiverBounds.distanceToPoint(r);a<n&&Number.isInteger(s.terrainLevel)&&(n=a,i=s.terrainLevel)}return i};/**
 * postprocessing v6.39.4 build Mon Jul 27 2026
 * https://github.com/pmndrs/postprocessing
 * Copyright 2015-2026 Raoul van Rüschen
 * @license Zlib
 */var fd=(()=>{const t=new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),e=new Float32Array([0,0,2,0,0,2]),r=new jo;return r.setAttribute("position",new wa(t,3)),r.setAttribute("uv",new wa(e,2)),r})(),pd=class ls{static get fullscreenGeometry(){return fd}constructor(e="Pass",r=new Br,i=new Ms){this.name=e,this.renderer=null,this.scene=r,this.camera=i,this.screen=null,this.rtt=!0,this.needsSwap=!0,this.needsDepthBlit=!1,this.needsDepthTexture=!1,this.enabled=!0}get renderToScreen(){return!this.rtt}set renderToScreen(e){if(this.rtt===e){const r=this.fullscreenMaterial;r!==null&&(r.needsUpdate=!0),this.rtt=!e}}set mainScene(e){}set mainCamera(e){}setRenderer(e){this.renderer=e}isEnabled(){return this.enabled}setEnabled(e){this.enabled=e}get fullscreenMaterial(){return this.screen!==null?this.screen.material:null}set fullscreenMaterial(e){let r=this.screen;r!==null?r.material=e:(r=new Wr(ls.fullscreenGeometry,e),r.frustumCulled=!1,this.scene===null&&(this.scene=new Br),this.scene.add(r),this.screen=r)}getFullscreenMaterial(){return this.fullscreenMaterial}setFullscreenMaterial(e){this.fullscreenMaterial=e}getDepthTexture(){return null}setDepthTexture(e,r=Wo){}render(e,r,i,n,s){throw new Error("Render method not implemented!")}setSize(e,r){}initialize(e,r,i){}dispose(){for(const e of Object.keys(this)){const r=this[e];(r instanceof Ke||r instanceof Vi||r instanceof Go||r instanceof ls)&&this[e].dispose()}this.fullscreenMaterial!==null&&this.fullscreenMaterial.dispose()}},hc={NONE:0,DEPTH:1,CONVOLUTION:2},X={SKIP:9,SET:30,ADD:0,ALPHA:1,AVERAGE:2,COLOR:3,COLOR_BURN:4,COLOR_DODGE:5,DARKEN:6,DIFFERENCE:7,DIVIDE:8,DST:9,EXCLUSION:10,HARD_LIGHT:11,HARD_MIX:12,HUE:13,INVERT:14,INVERT_RGB:15,LIGHTEN:16,LINEAR_BURN:17,LINEAR_DODGE:18,LINEAR_LIGHT:19,LUMINOSITY:20,MULTIPLY:21,NEGATION:22,NORMAL:23,OVERLAY:24,PIN_LIGHT:25,REFLECT:26,SATURATION:27,SCREEN:28,SOFT_LIGHT:29,SRC:30,SUBTRACT:31,VIVID_LIGHT:32},gd="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",vd="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,src.a*opacity);}",yd="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=(dst.rgb+src.rgb)*0.5;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Sd="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.xy,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",wd="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=mix(step(0.0,b)*(1.0-min(vec3(1.0),(1.0-a)/max(b,1e-9))),vec3(1.0),step(1.0,a));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",_d="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=step(0.0,a)*mix(min(vec3(1.0),a/max(1.0-b,1e-9)),vec3(1.0),step(1.0,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",xd="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Td="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=abs(dst.rgb-src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",bd="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb/max(src.rgb,1e-9);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Md="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-2.0*dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Ed="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb,1.0);vec3 b=min(src.rgb,1.0);vec3 c=mix(2.0*a*b,1.0-2.0*(1.0-a)*(1.0-b),step(0.5,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Rd="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=step(1.0,dst.rgb+src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Ad="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.x,a.yz));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Cd="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Id="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=src.rgb*max(1.0-dst.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Dd="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Pd="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Nd="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb+src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Od="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(2.0*src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Ld="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.xy,b.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Fd="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Bd="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-abs(1.0-dst.rgb-src.rgb),0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Ud="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,opacity);}",kd="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=2.0*src.rgb*dst.rgb;vec3 b=1.0-2.0*(1.0-src.rgb)*(1.0-dst.rgb);vec3 c=mix(a,b,step(0.5,dst.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Hd="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 c=mix(mix(src2,dst.rgb,step(0.5*dst.rgb,src.rgb)),max(src2-1.0,vec3(0.0)),step(dst.rgb,src2-1.0));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",zd="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb*dst.rgb/max(1.0-src.rgb,1e-9),1.0);vec3 c=mix(a,src.rgb,step(1.0,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Vd="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.x,b.y,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Wd="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-min(dst.rgb*src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Gd="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 d=dst.rgb+(src2-1.0);vec3 w=step(0.5,src.rgb);vec3 a=dst.rgb-(1.0-src2)*dst.rgb*(1.0-dst.rgb);vec3 b=mix(d*(sqrt(dst.rgb)-dst.rgb),d*dst.rgb*((16.0*dst.rgb-12.0)*dst.rgb+3.0),w*(1.0-step(0.25,dst.rgb)));vec3 c=mix(a,b,w);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",jd="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return src;}",Yd="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",$d="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=mix(max(1.0-min((1.0-dst.rgb)/(2.0*src.rgb),1.0),0.0),min(dst.rgb/(2.0*(1.0-src.rgb)),1.0),step(0.5,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Kd=new Map([[X.ADD,gd],[X.ALPHA,vd],[X.AVERAGE,yd],[X.COLOR,Sd],[X.COLOR_BURN,wd],[X.COLOR_DODGE,_d],[X.DARKEN,xd],[X.DIFFERENCE,Td],[X.DIVIDE,bd],[X.DST,null],[X.EXCLUSION,Md],[X.HARD_LIGHT,Ed],[X.HARD_MIX,Rd],[X.HUE,Ad],[X.INVERT,Cd],[X.INVERT_RGB,Id],[X.LIGHTEN,Dd],[X.LINEAR_BURN,Pd],[X.LINEAR_DODGE,Nd],[X.LINEAR_LIGHT,Od],[X.LUMINOSITY,Ld],[X.MULTIPLY,Fd],[X.NEGATION,Bd],[X.NORMAL,Ud],[X.OVERLAY,kd],[X.PIN_LIGHT,Hd],[X.REFLECT,zd],[X.SATURATION,Vd],[X.SCREEN,Wd],[X.SOFT_LIGHT,Gd],[X.SRC,jd],[X.SUBTRACT,Yd],[X.VIVID_LIGHT,$d]]),qd=class extends Vo{constructor(t,e=1){super(),this._blendFunction=t,this.opacity=new D(e)}getOpacity(){return this.opacity.value}setOpacity(t){this.opacity.value=t}get blendFunction(){return this._blendFunction}set blendFunction(t){this._blendFunction=t,this.dispatchEvent({type:"change"})}getBlendFunction(){return this.blendFunction}setBlendFunction(t){this.blendFunction=t}getShaderCode(){return Kd.get(this.blendFunction)}},Xd=class extends Vo{constructor(t,e,{attributes:r=hc.NONE,blendFunction:i=X.NORMAL,defines:n=new Map,uniforms:s=new Map,extensions:a=null,vertexShader:o=null}={}){super(),this.name=t,this.renderer=null,this.attributes=r,this.fragmentShader=e,this.vertexShader=o,this.defines=n,this.uniforms=s,this.extensions=a,this.blendMode=new qd(i),this.blendMode.addEventListener("change",c=>this.setChanged()),this._inputColorSpace=Rl,this._outputColorSpace=Al}get inputColorSpace(){return this._inputColorSpace}set inputColorSpace(t){this._inputColorSpace=t,this.setChanged()}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t,this.setChanged()}set mainScene(t){}set mainCamera(t){}getName(){return this.name}setRenderer(t){this.renderer=t}getDefines(){return this.defines}getUniforms(){return this.uniforms}getExtensions(){return this.extensions}getBlendMode(){return this.blendMode}getAttributes(){return this.attributes}setAttributes(t){this.attributes=t,this.setChanged()}getFragmentShader(){return this.fragmentShader}setFragmentShader(t){this.fragmentShader=t,this.setChanged()}getVertexShader(){return this.vertexShader}setVertexShader(t){this.vertexShader=t,this.setChanged()}setChanged(){this.dispatchEvent({type:"change"})}setDepthTexture(t,e=Wo){}update(t,e,r){}setSize(t,e){}initialize(t,e,r){}dispose(){for(const t of Object.keys(this)){const e=this[t];(e instanceof Ke||e instanceof Vi||e instanceof Go||e instanceof pd)&&this[t].dispose()}}};const Qd=new T;function mc(t,e,r=new T,i){const{x:n,y:s,z:a}=t,o=e.x,c=e.y,l=e.z,u=n*n*o,d=s*s*c,g=a*a*l,p=u+d+g,h=Math.sqrt(1/p);if(!Number.isFinite(h))return;const S=Qd.copy(t).multiplyScalar(h);if(p<((i==null?void 0:i.centerTolerance)??.1))return r.copy(S);const f=S.multiply(e).multiplyScalar(2);let v=(1-h)*t.length()/(f.length()/2),b=0,A,C,M,I;do{v-=b,A=1/(1+v*o),C=1/(1+v*c),M=1/(1+v*l);const R=A*A,L=C*C,U=M*M,B=R*A,G=L*C,W=U*M;I=u*R+d*L+g*U-1,b=I/((u*B*o+d*G*c+g*W*l)*-2)}while(Math.abs(I)>1e-12);return r.set(n*A,s*C,a*M)}const mi=new T,Na=new T,Oa=new T,us=class{constructor(e,r,i){this.radii=new T(e,r,i)}get minimumRadius(){return Math.min(this.radii.x,this.radii.y,this.radii.z)}get maximumRadius(){return Math.max(this.radii.x,this.radii.y,this.radii.z)}reciprocalRadii(e=new T){const{x:r,y:i,z:n}=this.radii;return e.set(1/r,1/i,1/n)}reciprocalRadiiSquared(e=new T){const{x:r,y:i,z:n}=this.radii;return e.set(1/r**2,1/i**2,1/n**2)}projectOnSurface(e,r=new T,i){return mc(e,this.reciprocalRadiiSquared(),r,i)}getSurfaceNormal(e,r=new T){return r.multiplyVectors(this.reciprocalRadiiSquared(mi),e).normalize()}getEastNorthUpVectors(e,r=new T,i=new T,n=new T){this.getSurfaceNormal(e,n),r.set(-e.y,e.x,0).normalize(),i.crossVectors(n,r).normalize()}getEastNorthUpFrame(e,r=new J){const i=mi,n=Na,s=Oa;return this.getEastNorthUpVectors(e,i,n,s),r.makeBasis(i,n,s).setPosition(e)}getIntersection(e,r=new T){const i=this.reciprocalRadii(mi),n=Na.copy(i).multiply(e.origin),s=Oa.copy(i).multiply(e.direction),a=n.lengthSq(),o=s.lengthSq(),c=n.dot(s),l=c**2-o*(a-1);if(a===1)return r.copy(e.origin);if(a>1){if(c>=0||l<0)return;const u=Math.sqrt(l),d=(-c-u)/o,g=(-c+u)/o;return e.at(Math.min(d,g),r)}if(a<1){const u=c**2-o*(a-1),d=Math.sqrt(u),g=(-c+d)/o;return e.at(g,r)}if(c<0)return e.at(-c/o,r)}getOsculatingSphereCenter(e,r,i=new T){const n=this.radii.x**2,s=mi.set(e.x/n,e.y/n,e.z/this.radii.z**2).normalize();return i.copy(s.multiplyScalar(-r).add(e))}};us.WGS84=new us(6378137,6378137,6356752314245179e-9);let mt=us;const fi=new T,La=new T,Cr=class ds{constructor(e=0,r=0,i=0){this.longitude=e,this.latitude=r,this.height=i}set(e,r,i){return this.longitude=e,this.latitude=r,i!=null&&(this.height=i),this}clone(){return new ds(this.longitude,this.latitude,this.height)}copy(e){return this.longitude=e.longitude,this.latitude=e.latitude,this.height=e.height,this}equals(e){return e.longitude===this.longitude&&e.latitude===this.latitude&&e.height===this.height}setLongitude(e){return this.longitude=e,this}setLatitude(e){return this.latitude=e,this}setHeight(e){return this.height=e,this}normalize(){return this.longitude<ds.MIN_LONGITUDE&&(this.longitude+=Math.PI*2),this}setFromECEF(e,r){const i=((r==null?void 0:r.ellipsoid)??mt.WGS84).reciprocalRadiiSquared(fi),n=mc(e,i,La,r);if(n==null)throw new Error(`Could not project position to ellipsoid surface: ${e.toArray()}`);const s=fi.multiplyVectors(n,i).normalize();this.longitude=Math.atan2(s.y,s.x),this.latitude=Math.asin(s.z);const a=fi.subVectors(e,n);return this.height=Math.sign(a.dot(e))*a.length(),this}toECEF(e=new T,r){const i=(r==null?void 0:r.ellipsoid)??mt.WGS84,n=fi.multiplyVectors(i.radii,i.radii),s=Math.cos(this.latitude),a=La.set(s*Math.cos(this.longitude),s*Math.sin(this.longitude),Math.sin(this.latitude)).normalize();return e.multiplyVectors(n,a),e.divideScalar(Math.sqrt(a.dot(e))).add(a.multiplyScalar(this.height))}fromArray(e,r=0){return this.longitude=e[r],this.latitude=e[r+1],this.height=e[r+2],this}toArray(e=[],r=0){return e[r]=this.longitude,e[r+1]=this.latitude,e[r+2]=this.height,e}*[Symbol.iterator](){yield this.longitude,yield this.latitude,yield this.height}};Cr.MIN_LONGITUDE=-Math.PI,Cr.MAX_LONGITUDE=Math.PI,Cr.MIN_LATITUDE=-Math.PI/2,Cr.MAX_LATITUDE=Math.PI/2;let fc=Cr;var Zd="Invariant failed";function pc(t,e){if(!t)throw new Error(Zd)}class Jd extends Rs{load(e,r,i,n){const s=new Il(this.manager);s.setResponseType("arraybuffer"),s.setRequestHeader(this.requestHeader),s.setPath(this.path),s.setWithCredentials(this.withCredentials),s.load(e,a=>{pc(a instanceof ArrayBuffer);try{r(a)}catch(o){n!=null?n(o):console.error(o),this.manager.itemError(e)}},i,n)}}const eh="This is not an object",th="This is not a Float16Array object",Fa="This constructor is not a subclass of Float16Array",gc="The constructor property value is not an object",rh="Species constructor didn't return TypedArray object",ih="Derived constructor created TypedArray object which was too small length",Or="Attempting to access detached ArrayBuffer",hs="Cannot convert undefined or null to object",ms="Cannot mix BigInt and other types, use explicit conversions",Ba="@@iterator property is not callable",Ua="Reduce of empty array with no initial value",nh="The comparison function must be either a function or undefined",Ln="Offset is out of bounds";function ue(t){return(e,...r)=>Ue(t,e,r)}function dr(t,e){return ue(ar(t,e).get)}const{apply:Ue,construct:Ir,defineProperty:sh,get:Fn,getOwnPropertyDescriptor:ar,getPrototypeOf:Kr,has:fs,ownKeys:vc,set:ka,setPrototypeOf:yc}=Reflect,ah=Proxy,{EPSILON:oh,MAX_SAFE_INTEGER:Ha,isFinite:Sc,isNaN:or}=Number,{iterator:ft,species:ch,toStringTag:Ps,for:lh}=Symbol,cr=Object,{create:Zi,defineProperty:qr,freeze:uh,is:za}=cr,ps=cr.prototype,dh=ps.__lookupGetter__?ue(ps.__lookupGetter__):(t,e)=>{if(t==null)throw pe(hs);let r=cr(t);do{const i=ar(r,e);if(i!==void 0)return Rt(i,"get")?i.get:void 0}while((r=Kr(r))!==null)},Rt=cr.hasOwn||ue(ps.hasOwnProperty),wc=Array,_c=wc.isArray,Ji=wc.prototype,hh=ue(Ji.join),mh=ue(Ji.push),fh=ue(Ji.toLocaleString),Ns=Ji[ft],ph=ue(Ns),{abs:gh,trunc:xc}=Math,en=ArrayBuffer,vh=en.isView,Tc=en.prototype,yh=ue(Tc.slice),Sh=dr(Tc,"byteLength"),gs=typeof SharedArrayBuffer<"u"?SharedArrayBuffer:null,wh=gs&&dr(gs.prototype,"byteLength"),Os=Kr(Uint8Array),_h=Os.from,Ae=Os.prototype,xh=Ae[ft],Th=ue(Ae.keys),bh=ue(Ae.values),Mh=ue(Ae.entries),Eh=ue(Ae.set),Va=ue(Ae.reverse),Rh=ue(Ae.fill),Ah=ue(Ae.copyWithin),Wa=ue(Ae.sort),Mr=ue(Ae.slice),Ch=ue(Ae.subarray),Re=dr(Ae,"buffer"),Ut=dr(Ae,"byteOffset"),ne=dr(Ae,"length"),bc=dr(Ae,Ps),Ih=Uint8Array,We=Uint16Array,Ga=(...t)=>Ue(_h,We,t),Ls=Uint32Array,Dh=Float32Array,Wt=Kr([][ft]()),tn=ue(Wt.next),Ph=ue(function*(){}().next),Nh=Kr(Wt),Oh=DataView.prototype,Lh=ue(Oh.getUint16),pe=TypeError,Bn=RangeError,Mc=WeakSet,Ec=Mc.prototype,Fh=ue(Ec.add),Bh=ue(Ec.has),rn=WeakMap,Fs=rn.prototype,Ii=ue(Fs.get),Uh=ue(Fs.has),Bs=ue(Fs.set),Rc=new rn,kh=Zi(null,{next:{value:function(){const t=Ii(Rc,this);return tn(t)}},[ft]:{value:function(){return this}}});function Dr(t){if(t[ft]===Ns&&Wt.next===tn)return t;const e=Zi(kh);return Bs(Rc,e,ph(t)),e}const Ac=new rn,Cc=Zi(Nh,{next:{value:function(){const t=Ii(Ac,this);return Ph(t)},writable:!0,configurable:!0}});for(const t of vc(Wt))t!=="next"&&qr(Cc,t,ar(Wt,t));function ja(t){const e=Zi(Cc);return Bs(Ac,e,t),e}function Di(t){return t!==null&&typeof t=="object"||typeof t=="function"}function Ya(t){return t!==null&&typeof t=="object"}function Pi(t){return bc(t)!==void 0}function vs(t){const e=bc(t);return e==="BigInt64Array"||e==="BigUint64Array"}function Hh(t){try{return _c(t)?!1:(Sh(t),!0)}catch{return!1}}function Ic(t){if(gs===null)return!1;try{return wh(t),!0}catch{return!1}}function zh(t){return Hh(t)||Ic(t)}function $a(t){return _c(t)?t[ft]===Ns&&Wt.next===tn:!1}function Vh(t){return Pi(t)?t[ft]===xh&&Wt.next===tn:!1}function pi(t){if(typeof t!="string")return!1;const e=+t;return t!==e+""||!Sc(e)?!1:e===xc(e)}const Ni=lh("__Float16Array__");function Wh(t){if(!Ya(t))return!1;const e=Kr(t);if(!Ya(e))return!1;const r=e.constructor;if(r===void 0)return!1;if(!Di(r))throw pe(gc);return fs(r,Ni)}const ys=1/oh;function Gh(t){return t+ys-ys}const Dc=6103515625e-14,jh=65504,Pc=.0009765625,Ka=Pc*Dc,Yh=Pc*ys;function $h(t){const e=+t;if(!Sc(e)||e===0)return e;const r=e>0?1:-1,i=gh(e);if(i<Dc)return r*Gh(i/Ka)*Ka;const n=(1+Yh)*i,s=n-(n-i);return s>jh||or(s)?r*(1/0):r*s}const Nc=new en(4),Oc=new Dh(Nc),Lc=new Ls(Nc),rt=new We(512),it=new Ih(512);for(let t=0;t<256;++t){const e=t-127;e<-24?(rt[t]=0,rt[t|256]=32768,it[t]=24,it[t|256]=24):e<-14?(rt[t]=1024>>-e-14,rt[t|256]=1024>>-e-14|32768,it[t]=-e-1,it[t|256]=-e-1):e<=15?(rt[t]=e+15<<10,rt[t|256]=e+15<<10|32768,it[t]=13,it[t|256]=13):e<128?(rt[t]=31744,rt[t|256]=64512,it[t]=24,it[t|256]=24):(rt[t]=31744,rt[t|256]=64512,it[t]=13,it[t|256]=13)}function ct(t){Oc[0]=$h(t);const e=Lc[0],r=e>>23&511;return rt[r]+((e&8388607)>>it[r])}const Us=new Ls(2048);for(let t=1;t<1024;++t){let e=t<<13,r=0;for(;!(e&8388608);)e<<=1,r-=8388608;e&=-8388609,r+=947912704,Us[t]=e|r}for(let t=1024;t<2048;++t)Us[t]=939524096+(t-1024<<13);const hr=new Ls(64);for(let t=1;t<31;++t)hr[t]=t<<23;hr[31]=1199570944;hr[32]=2147483648;for(let t=33;t<63;++t)hr[t]=2147483648+(t-32<<23);hr[63]=3347054592;const Fc=new We(64);for(let t=1;t<64;++t)t!==32&&(Fc[t]=1024);function se(t){const e=t>>10;return Lc[0]=Us[Fc[e]+(t&1023)]+hr[e],Oc[0]}function Mt(t){const e=+t;return or(e)||e===0?0:xc(e)}function Un(t){const e=Mt(t);return e<0?0:e<Ha?e:Ha}function gi(t,e){if(!Di(t))throw pe(eh);const r=t.constructor;if(r===void 0)return e;if(!Di(r))throw pe(gc);return r[ch]??e}function Lr(t){if(Ic(t))return!1;try{return yh(t,0,0),!1}catch{}return!0}function qa(t,e){const r=or(t),i=or(e);if(r&&i)return 0;if(r)return 1;if(i||t<e)return-1;if(t>e)return 1;if(t===0&&e===0){const n=za(t,0),s=za(e,0);if(!n&&s)return-1;if(n&&!s)return 1}return 0}const ks=2,Oi=new rn;function rr(t){return Uh(Oi,t)||!vh(t)&&Wh(t)}function ie(t){if(!rr(t))throw pe(th)}function vi(t,e){const r=rr(t),i=Pi(t);if(!r&&!i)throw pe(rh);if(typeof e=="number"){let n;if(r){const s=$(t);n=ne(s)}else n=ne(t);if(n<e)throw pe(ih)}if(vs(t))throw pe(ms)}function $(t){const e=Ii(Oi,t);if(e!==void 0){const n=Re(e);if(Lr(n))throw pe(Or);return e}const r=t.buffer;if(Lr(r))throw pe(Or);const i=Ir(oe,[r,t.byteOffset,t.length],t.constructor);return Ii(Oi,i)}function Xa(t){const e=ne(t),r=[];for(let i=0;i<e;++i)r[i]=se(t[i]);return r}const Bc=new Mc;for(const t of vc(Ae)){if(t===Ps)continue;const e=ar(Ae,t);Rt(e,"get")&&typeof e.get=="function"&&Fh(Bc,e.get)}const Kh=uh({get(t,e,r){return pi(e)&&Rt(t,e)?se(Fn(t,e)):Bh(Bc,dh(t,e))?Fn(t,e):Fn(t,e,r)},set(t,e,r,i){return pi(e)&&Rt(t,e)?ka(t,e,ct(r)):ka(t,e,r,i)},getOwnPropertyDescriptor(t,e){if(pi(e)&&Rt(t,e)){const r=ar(t,e);return r.value=se(r.value),r}return ar(t,e)},defineProperty(t,e,r){return pi(e)&&Rt(t,e)&&Rt(r,"value")&&(r.value=ct(r.value)),sh(t,e,r)}});class oe{constructor(e,r,i){let n;if(rr(e))n=Ir(We,[$(e)],new.target);else if(Di(e)&&!zh(e)){let a,o;if(Pi(e)){a=e,o=ne(e);const c=Re(e);if(Lr(c))throw pe(Or);if(vs(e))throw pe(ms);const l=new en(o*ks);n=Ir(We,[l],new.target)}else{const c=e[ft];if(c!=null&&typeof c!="function")throw pe(Ba);c!=null?$a(e)?(a=e,o=e.length):(a=[...e],o=a.length):(a=e,o=Un(a.length)),n=Ir(We,[o],new.target)}for(let c=0;c<o;++c)n[c]=ct(a[c])}else n=Ir(We,arguments,new.target);const s=new ah(n,Kh);return Bs(Oi,s,n),s}static from(e,...r){const i=this;if(!fs(i,Ni))throw pe(Fa);if(i===oe){if(rr(e)&&r.length===0){const u=$(e),d=new We(Re(u),Ut(u),ne(u));return new oe(Re(Mr(d)))}if(r.length===0)return new oe(Re(Ga(e,ct)));const c=r[0],l=r[1];return new oe(Re(Ga(e,function(u,...d){return ct(Ue(c,this,[u,...Dr(d)]))},l)))}let n,s;const a=e[ft];if(a!=null&&typeof a!="function")throw pe(Ba);if(a!=null)$a(e)?(n=e,s=e.length):Vh(e)?(n=e,s=ne(e)):(n=[...e],s=n.length);else{if(e==null)throw pe(hs);n=cr(e),s=Un(n.length)}const o=new i(s);if(r.length===0)for(let c=0;c<s;++c)o[c]=n[c];else{const c=r[0],l=r[1];for(let u=0;u<s;++u)o[u]=Ue(c,l,[n[u],u])}return o}static of(...e){const r=this;if(!fs(r,Ni))throw pe(Fa);const i=e.length;if(r===oe){const s=new oe(i),a=$(s);for(let o=0;o<i;++o)a[o]=ct(e[o]);return s}const n=new r(i);for(let s=0;s<i;++s)n[s]=e[s];return n}keys(){ie(this);const e=$(this);return Th(e)}values(){ie(this);const e=$(this);return ja(function*(){for(const r of bh(e))yield se(r)}())}entries(){ie(this);const e=$(this);return ja(function*(){for(const[r,i]of Mh(e))yield[r,se(i)]}())}at(e){ie(this);const r=$(this),i=ne(r),n=Mt(e),s=n>=0?n:i+n;if(!(s<0||s>=i))return se(r[s])}with(e,r){ie(this);const i=$(this),n=ne(i),s=Mt(e),a=s>=0?s:n+s,o=+r;if(a<0||a>=n)throw Bn(Ln);const c=new We(Re(i),Ut(i),ne(i)),l=new oe(Re(Mr(c))),u=$(l);return u[a]=ct(o),l}map(e,...r){ie(this);const i=$(this),n=ne(i),s=r[0],a=gi(i,oe);if(a===oe){const c=new oe(n),l=$(c);for(let u=0;u<n;++u){const d=se(i[u]);l[u]=ct(Ue(e,s,[d,u,this]))}return c}const o=new a(n);vi(o,n);for(let c=0;c<n;++c){const l=se(i[c]);o[c]=Ue(e,s,[l,c,this])}return o}filter(e,...r){ie(this);const i=$(this),n=ne(i),s=r[0],a=[];for(let l=0;l<n;++l){const u=se(i[l]);Ue(e,s,[u,l,this])&&mh(a,u)}const o=gi(i,oe),c=new o(a);return vi(c),c}reduce(e,...r){ie(this);const i=$(this),n=ne(i);if(n===0&&r.length===0)throw pe(Ua);let s,a;r.length===0?(s=se(i[0]),a=1):(s=r[0],a=0);for(let o=a;o<n;++o)s=e(s,se(i[o]),o,this);return s}reduceRight(e,...r){ie(this);const i=$(this),n=ne(i);if(n===0&&r.length===0)throw pe(Ua);let s,a;r.length===0?(s=se(i[n-1]),a=n-2):(s=r[0],a=n-1);for(let o=a;o>=0;--o)s=e(s,se(i[o]),o,this);return s}forEach(e,...r){ie(this);const i=$(this),n=ne(i),s=r[0];for(let a=0;a<n;++a)Ue(e,s,[se(i[a]),a,this])}find(e,...r){ie(this);const i=$(this),n=ne(i),s=r[0];for(let a=0;a<n;++a){const o=se(i[a]);if(Ue(e,s,[o,a,this]))return o}}findIndex(e,...r){ie(this);const i=$(this),n=ne(i),s=r[0];for(let a=0;a<n;++a){const o=se(i[a]);if(Ue(e,s,[o,a,this]))return a}return-1}findLast(e,...r){ie(this);const i=$(this),n=ne(i),s=r[0];for(let a=n-1;a>=0;--a){const o=se(i[a]);if(Ue(e,s,[o,a,this]))return o}}findLastIndex(e,...r){ie(this);const i=$(this),n=ne(i),s=r[0];for(let a=n-1;a>=0;--a){const o=se(i[a]);if(Ue(e,s,[o,a,this]))return a}return-1}every(e,...r){ie(this);const i=$(this),n=ne(i),s=r[0];for(let a=0;a<n;++a)if(!Ue(e,s,[se(i[a]),a,this]))return!1;return!0}some(e,...r){ie(this);const i=$(this),n=ne(i),s=r[0];for(let a=0;a<n;++a)if(Ue(e,s,[se(i[a]),a,this]))return!0;return!1}set(e,...r){ie(this);const i=$(this),n=Mt(r[0]);if(n<0)throw Bn(Ln);if(e==null)throw pe(hs);if(vs(e))throw pe(ms);if(rr(e))return Eh($(this),$(e),n);if(Pi(e)){const c=Re(e);if(Lr(c))throw pe(Or)}const s=ne(i),a=cr(e),o=Un(a.length);if(n===1/0||o+n>s)throw Bn(Ln);for(let c=0;c<o;++c)i[c+n]=ct(a[c])}reverse(){ie(this);const e=$(this);return Va(e),this}toReversed(){ie(this);const e=$(this),r=new We(Re(e),Ut(e),ne(e)),i=new oe(Re(Mr(r))),n=$(i);return Va(n),i}fill(e,...r){ie(this);const i=$(this);return Rh(i,ct(e),...Dr(r)),this}copyWithin(e,r,...i){ie(this);const n=$(this);return Ah(n,e,r,...Dr(i)),this}sort(e){ie(this);const r=$(this),i=e!==void 0?e:qa;return Wa(r,(n,s)=>i(se(n),se(s))),this}toSorted(e){ie(this);const r=$(this);if(e!==void 0&&typeof e!="function")throw new pe(nh);const i=e!==void 0?e:qa,n=new We(Re(r),Ut(r),ne(r)),s=new oe(Re(Mr(n))),a=$(s);return Wa(a,(o,c)=>i(se(o),se(c))),s}slice(e,r){ie(this);const i=$(this),n=gi(i,oe);if(n===oe){const h=new We(Re(i),Ut(i),ne(i));return new oe(Re(Mr(h,e,r)))}const s=ne(i),a=Mt(e),o=r===void 0?s:Mt(r);let c;a===-1/0?c=0:a<0?c=s+a>0?s+a:0:c=s<a?s:a;let l;o===-1/0?l=0:o<0?l=s+o>0?s+o:0:l=s<o?s:o;const u=l-c>0?l-c:0,d=new n(u);if(vi(d,u),u===0)return d;const g=Re(i);if(Lr(g))throw pe(Or);let p=0;for(;c<l;)d[p]=se(i[c]),++c,++p;return d}subarray(e,r){ie(this);const i=$(this),n=gi(i,oe),s=new We(Re(i),Ut(i),ne(i)),a=Ch(s,e,r),o=new n(Re(a),Ut(a),ne(a));return vi(o),o}indexOf(e,...r){ie(this);const i=$(this),n=ne(i);let s=Mt(r[0]);if(s===1/0)return-1;s<0&&(s+=n,s<0&&(s=0));for(let a=s;a<n;++a)if(Rt(i,a)&&se(i[a])===e)return a;return-1}lastIndexOf(e,...r){ie(this);const i=$(this),n=ne(i);let s=r.length>=1?Mt(r[0]):n-1;if(s===-1/0)return-1;s>=0?s=s<n-1?s:n-1:s+=n;for(let a=s;a>=0;--a)if(Rt(i,a)&&se(i[a])===e)return a;return-1}includes(e,...r){ie(this);const i=$(this),n=ne(i);let s=Mt(r[0]);if(s===1/0)return!1;s<0&&(s+=n,s<0&&(s=0));const a=or(e);for(let o=s;o<n;++o){const c=se(i[o]);if(a&&or(c)||c===e)return!0}return!1}join(e){ie(this);const r=$(this),i=Xa(r);return hh(i,e)}toLocaleString(...e){ie(this);const r=$(this),i=Xa(r);return fh(i,...Dr(e))}get[Ps](){if(rr(this))return"Float16Array"}}qr(oe,"BYTES_PER_ELEMENT",{value:ks});qr(oe,Ni,{});yc(oe,Os);const Li=oe.prototype;qr(Li,"BYTES_PER_ELEMENT",{value:ks});qr(Li,ft,{value:Li.values,writable:!0,configurable:!0});yc(Li,Ae);function qh(t,e,...r){return se(Lh(t,e,...Dr(r)))}function Xh(t){return t instanceof Int8Array||t instanceof Uint8Array||t instanceof Uint8ClampedArray||t instanceof Int16Array||t instanceof Uint16Array||t instanceof Int32Array||t instanceof Uint32Array||t instanceof oe||t instanceof Float32Array||t instanceof Float64Array}let yi;function Qh(){if(yi!=null)return yi;const t=new Uint32Array([268435456]);return yi=new Uint8Array(t.buffer,t.byteOffset,t.byteLength)[0]===0,yi}function Zh(t,e,r,i=!0){if(i===Qh())return new e(t);const n=Object.assign(new DataView(t),{getFloat16(a,o){return qh(this,a,o)}}),s=new e(n.byteLength/e.BYTES_PER_ELEMENT);for(let a=0,o=0;a<s.length;++a,o+=e.BYTES_PER_ELEMENT)s[a]=n[r](o,i);return s}const kn=(t,e)=>Zh(t,oe,"getFloat16",e);class Jh extends Rs{load(e,r,i,n){const s=new Jd(this.manager);s.setRequestHeader(this.requestHeader),s.setPath(this.path),s.setWithCredentials(this.withCredentials),s.load(e,a=>{try{r(this.parseTypedArray(a))}catch(o){n!=null?n(o):console.error(o),this.manager.itemError(e)}},i,n)}}function em(t){return class extends Jh{constructor(){super(...arguments),this.parseTypedArray=t}}}function tm(t){const e=t instanceof Int8Array?Dl:t instanceof Uint8Array?xa:t instanceof Uint8ClampedArray?xa:t instanceof Int16Array?Pl:t instanceof Uint16Array?Nl:t instanceof Int32Array?Ol:t instanceof Uint32Array?Vt:t instanceof oe?Yo:t instanceof Float32Array?Et:t instanceof Float64Array?Et:null;return pc(e!=null),e}const rm={format:kr,minFilter:_a,magFilter:_a};class im extends Rs{constructor(){super(...arguments),this.parameters={}}load(e,r,i,n){const s=new this.Texture,a=new this.TypedArrayLoader(this.manager);a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(this.withCredentials),a.load(e,o=>{s.image.data=o instanceof oe?new Uint16Array(o.buffer):o;const{width:c,height:l,depth:u,...d}=this.parameters;c!=null&&(s.image.width=c),l!=null&&(s.image.height=l),"depth"in s.image&&u!=null&&(s.image.depth=u),s.type=tm(o),Object.assign(s,d),s.needsUpdate=!0,r(s)},i,n)}}function Uc(t,e,r){return class extends im{constructor(){super(...arguments),this.Texture=t,this.TypedArrayLoader=em(e),this.parameters={...rm,...r}}}}function nm(t,e){return Uc(Cl,t,e)}function sm(t,e){return Uc(ss,t,e)}function am(t,e){return new(nm(t,e))}function Qa(t,e){return new(sm(t,e))}const Fi=Es.clamp,Ss=Es.degToRad;function om(t,e,r,i=0,n=1){return Es.mapLinear(t,e,r,i,n)}function cm(t){return Math.min(Math.max(t,0),1)}function Be(t){return(e,r)=>{e instanceof Vi?Object.defineProperty(e,r,{enumerable:!0,get(){var i;return((i=this.defines)==null?void 0:i[t])!=null},set(i){var n;i!==this[r]&&(i?(this.defines??(this.defines={}),this.defines[t]="1"):(n=this.defines)==null||delete n[t],this.needsUpdate=!0)}}):Object.defineProperty(e,r,{enumerable:!0,get(){return this.defines.has(t)},set(i){i!==this[r]&&(i?this.defines.set(t,"1"):this.defines.delete(t),this.setChanged())}})}}function lm(t,{min:e=Number.MIN_SAFE_INTEGER,max:r=Number.MAX_SAFE_INTEGER}={}){return(i,n)=>{i instanceof Vi?Object.defineProperty(i,n,{enumerable:!0,get(){var s;const a=(s=this.defines)==null?void 0:s[t];return a!=null?parseInt(a):0},set(s){const a=this[n];s!==a&&(this.defines??(this.defines={}),this.defines[t]=Fi(s,e,r).toFixed(0),this.needsUpdate=!0)}}):Object.defineProperty(i,n,{enumerable:!0,get(){const s=this.defines.get(t);return s!=null?parseInt(s):0},set(s){const a=this[n];s!==a&&(this.defines.set(t,Fi(s,e,r).toFixed(0)),this.setChanged())}})}}var Xr=Uint8Array,kc=Uint16Array,um=Uint32Array,dm=new Xr([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),hm=new Xr([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Hc=function(t,e){for(var r=new kc(31),i=0;i<31;++i)r[i]=e+=1<<t[i-1];for(var n=new um(r[30]),i=1;i<30;++i)for(var s=r[i];s<r[i+1];++s)n[s]=s-r[i]<<5|i;return[r,n]},zc=Hc(dm,2),mm=zc[0],fm=zc[1];mm[28]=258,fm[258]=28;Hc(hm,0);var pm=new kc(32768);for(var he=0;he<32768;++he){var Dt=(he&43690)>>>1|(he&21845)<<1;Dt=(Dt&52428)>>>2|(Dt&13107)<<2,Dt=(Dt&61680)>>>4|(Dt&3855)<<4,pm[he]=((Dt&65280)>>>8|(Dt&255)<<8)>>>1}var nn=new Xr(288);for(var he=0;he<144;++he)nn[he]=8;for(var he=144;he<256;++he)nn[he]=9;for(var he=256;he<280;++he)nn[he]=7;for(var he=280;he<288;++he)nn[he]=8;var gm=new Xr(32);for(var he=0;he<32;++he)gm[he]=5;var vm=new Xr(0),ym=typeof TextDecoder<"u"&&new TextDecoder,Sm=0;try{ym.decode(vm,{stream:!0}),Sm=1}catch{}const wm=/^[ \t]*#include +"([\w\d./]+)"/gm;function Gt(t,e){return t.replace(wm,(r,i)=>{const n=i.split("/").reduce((s,a)=>typeof s!="string"&&s!=null?s[a]:void 0,e);if(typeof n!="string")throw new Error(`Could not find include for ${i}.`);return Gt(n,e)})}const _m=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*(?:i\s*\+\+|\+\+\s*i)\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xm(t,e,r,i){let n="";for(let s=parseInt(e);s<parseInt(r);++s)n+=i.replace(/\[\s*i\s*\]/g,"["+s+"]").replace(/UNROLLED_LOOP_INDEX/g,`${s}`);return n}function Tm(t){return t.replace(_m,xm)}const bm=`// Reference: https://github.com/mrdoob/three.js/blob/r171/examples/jsm/csm/CSMShader.js

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
`,Mm=`// cSpell:words logdepthbuf

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
`,Em=`// Reference: https://advances.realtimerendering.com/s2014/index.html#_NEXT_GENERATION_POST

float interleavedGradientNoise(const vec2 coord) {
  const vec3 magic = vec3(0.06711056, 0.00583715, 52.9829189);
  return fract(magic.z * fract(dot(coord, magic.xy)));
}
`,Rm=`#if !defined(saturate)
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
`,Am=`// Reference: https://jcgt.org/published/0003/02/01/paper.pdf

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
`,Cm=`float raySphereFirstIntersection(
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
`,Im=`vec3 screenToView(
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
`,Dm=`// Reference: https://www.gamedev.net/tutorials/programming/graphics/contact-hardening-soft-shadows-made-fast-r4906/

vec2 vogelDisk(const int index, const int sampleCount, const float phi) {
  const float goldenAngle = 2.39996322972865332;
  float r = sqrt(float(index) + 0.5) / sqrt(float(sampleCount));
  float theta = float(index) * goldenAngle + phi;
  return r * vec2(cos(theta), sin(theta));
}
`,Pm=bm,Nm=Mm,Om=Em,Lm=Rm,Fm=Am,Vc=Cm,Bm=Im,Um=Dm,Hs=`// Based on the following work and adapted to Three.js.
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
`,km=["solarIrradiance","sunAngularRadius","bottomRadius","topRadius","rayleighScattering","mieScattering","miePhaseFunctionG","muSMin","skyRadianceToLuminance","sunRadianceToLuminance","luminousEfficiency"];function Hm(t,e){if(e!=null)for(const r of km){const i=e[r];i!=null&&(t[r]instanceof T?t[r].copy(i):t[r]=i)}}const ws=class{constructor(e){this.solarIrradiance=new T(1.474,1.8504,1.91198),this.sunAngularRadius=.004675,this.bottomRadius=636e4,this.topRadius=642e4,this.rayleighScattering=new T(.005802,.013558,.0331),this.mieScattering=new T(.003996,.003996,.003996),this.miePhaseFunctionG=.8,this.muSMin=Math.cos(Ss(120)),this.skyRadianceToLuminance=new T(114974.916437,71305.954816,65310.548555),this.sunRadianceToLuminance=new T(98242.786222,69954.398112,66475.012354),this.luminousEfficiency=new T(.2126,.7152,.0722),this.skyRadianceToRelativeLuminance=new T,this.sunRadianceToRelativeLuminance=new T,Hm(this,e);const r=this.luminousEfficiency.dot(this.skyRadianceToLuminance);this.skyRadianceToRelativeLuminance.copy(this.skyRadianceToLuminance).divideScalar(r),this.sunRadianceToRelativeLuminance.copy(this.sunRadianceToLuminance).divideScalar(r)}};ws.DEFAULT=new ws;let sn=ws;const an=64,on=16,zs=32,Vs=128,Ws=32,Gs=8,zm=Gs*Ws,Vm=Vs,Wm=zs,cn=256,ln=64,nr=1/1e3,Gm="82e00c5222d6cbc222af69abdf6d3f4fc9f63030",Hn=`https://media.githubusercontent.com/media/takram-design-engineering/three-geospatial/${Gm}/packages/atmosphere/assets`,jm=new T;function un(t,e,r,i,n=!0){const s=r.projectOnSurface(t,jm);return s!=null?r.getOsculatingSphereCenter(!n||s.lengthSq()<t.lengthSq()?s:t,e,i):i.setScalar(0)}const Ym=`precision highp sampler2DArray;

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
`,$m=`uniform mat4 inverseViewMatrix;
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
`,Wc=`vec3 getLunarRadiance(const float moonAngularRadius) {
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
`;var Km=Object.defineProperty,Xe=(t,e,r,i)=>{for(var n=void 0,s=t.length-1,a;s>=0;s--)(a=t[s])&&(n=a(e,r,n)||n);return n&&Km(e,r,n),n};const qm=new T,Xm=new T,Qm=new fc,Zm={blendFunction:X.NORMAL,octEncodedNormal:!1,reconstructNormal:!1,ellipsoid:mt.WGS84,correctAltitude:!0,correctGeometricError:!0,photometric:!0,sunIrradiance:!1,skyIrradiance:!1,transmittance:!0,inscatter:!0,irradianceScale:1,sky:!1,sun:!0,moon:!0,moonAngularRadius:.0045,lunarRadianceScale:1};class Qe extends Xd{constructor(e=new ki,r,i=sn.DEFAULT){const{blendFunction:n,normalBuffer:s=null,octEncodedNormal:a,reconstructNormal:o,irradianceTexture:c=null,scatteringTexture:l=null,transmittanceTexture:u=null,ellipsoid:d,correctAltitude:g,correctGeometricError:p,photometric:h,sunDirection:S,sunIrradiance:f,skyIrradiance:v,transmittance:b,inscatter:A,irradianceScale:C,sky:M,sun:I,moon:R,moonDirection:L,moonAngularRadius:U,lunarRadianceScale:B}={...Zm,...r};super("AerialPerspectiveEffect",Tm(Gt(Ym,{core:{depth:Nm,packing:Fm,math:Lm,transform:Bm,raySphereIntersection:Vc,cascadedShadowMaps:Pm,interleavedGradientNoise:Om,vogelDisk:Um},parameters:lr,functions:Hs,sky:Wc})),{blendFunction:n,vertexShader:Gt($m,{parameters:lr}),attributes:hc.DEPTH,uniforms:new Map(Object.entries({normalBuffer:new D(s),projectionMatrix:new D(new J),viewMatrix:new D(new J),inverseProjectionMatrix:new D(new J),inverseViewMatrix:new D(new J),cameraPosition:new D(new T),bottomRadius:new D(i.bottomRadius),ellipsoidRadii:new D(new T),ellipsoidCenter:new D(new T),inverseEllipsoidMatrix:new D(new J),altitudeCorrection:new D(new T),sunDirection:new D((S==null?void 0:S.clone())??new T),irradianceScale:new D(C),idealSphereAlpha:new D(0),moonDirection:new D((L==null?void 0:L.clone())??new T),moonAngularRadius:new D(U),lunarRadianceScale:new D(B),overlayBuffer:new D(null),shadowBuffer:new D(null),shadowMapSize:new D(new Lt),shadowIntervals:new D([]),shadowMatrices:new D([]),inverseShadowMatrices:new D([]),shadowFar:new D(0),shadowTopHeight:new D(0),shadowRadius:new D(3),stbnTexture:new D(null),frame:new D(0),shadowLengthBuffer:new D(null),u_solar_irradiance:new D(i.solarIrradiance),u_sun_angular_radius:new D(i.sunAngularRadius),u_bottom_radius:new D(i.bottomRadius*nr),u_top_radius:new D(i.topRadius*nr),u_rayleigh_scattering:new D(i.rayleighScattering),u_mie_scattering:new D(i.mieScattering),u_mie_phase_function_g:new D(i.miePhaseFunctionG),u_mu_s_min:new D(i.muSMin),u_irradiance_texture:new D(c),u_scattering_texture:new D(l),u_single_mie_scattering_texture:new D(l),u_transmittance_texture:new D(u)})),defines:new Map([["TRANSMITTANCE_TEXTURE_WIDTH",cn.toFixed(0)],["TRANSMITTANCE_TEXTURE_HEIGHT",ln.toFixed(0)],["SCATTERING_TEXTURE_R_SIZE",zs.toFixed(0)],["SCATTERING_TEXTURE_MU_SIZE",Vs.toFixed(0)],["SCATTERING_TEXTURE_MU_S_SIZE",Ws.toFixed(0)],["SCATTERING_TEXTURE_NU_SIZE",Gs.toFixed(0)],["IRRADIANCE_TEXTURE_WIDTH",an.toFixed(0)],["IRRADIANCE_TEXTURE_HEIGHT",on.toFixed(0)],["METER_TO_LENGTH_UNIT",nr.toFixed(7)],["SUN_SPECTRAL_RADIANCE_TO_LUMINANCE",`vec3(${i.sunRadianceToRelativeLuminance.toArray().map(G=>G.toFixed(12)).join(",")})`],["SKY_SPECTRAL_RADIANCE_TO_LUMINANCE",`vec3(${i.skyRadianceToRelativeLuminance.toArray().map(G=>G.toFixed(12)).join(",")})`]])}),this.camera=e,this.atmosphere=i,this.ellipsoidMatrix=new J,this.overlay=null,this.shadow=null,this.shadowLength=null,this.shadowSampleCount=8,this.octEncodedNormal=a,this.reconstructNormal=o,this.ellipsoid=d,this.correctAltitude=g,this.correctGeometricError=p,this.photometric=h,this.sunIrradiance=f,this.skyIrradiance=v,this.transmittance=b,this.inscatter=A,this.sky=M,this.sun=I,this.moon=R}get mainCamera(){return this.camera}set mainCamera(e){this.camera=e}copyCameraSettings(e){const{projectionMatrix:r,matrixWorldInverse:i,projectionMatrixInverse:n,matrixWorld:s}=e,a=this.uniforms;a.get("projectionMatrix").value.copy(r),a.get("viewMatrix").value.copy(i),a.get("inverseProjectionMatrix").value.copy(n),a.get("inverseViewMatrix").value.copy(s);const o=e.getWorldPosition(a.get("cameraPosition").value),c=a.get("inverseEllipsoidMatrix").value.copy(this.ellipsoidMatrix).invert(),l=qm.copy(o).applyMatrix4(c).sub(a.get("ellipsoidCenter").value);try{const d=Qm.setFromECEF(l).height,g=Xm.set(0,this.ellipsoid.maximumRadius,-d).applyMatrix4(r);a.get("idealSphereAlpha").value=cm(om(g.y,41.5,13.8,0,1))}catch{return}const u=a.get("altitudeCorrection");this.correctAltitude?un(l,this.atmosphere.bottomRadius,this.ellipsoid,u.value):u.value.setScalar(0)}updateComposition(){const{uniforms:e,defines:r,overlay:i,shadow:n,shadowLength:s}=this,a=r.has("HAS_OVERLAY"),o=i!=null;o!==a&&(o?r.set("HAS_OVERLAY","1"):(r.delete("HAS_OVERLAY"),e.get("overlayBuffer").value=null),this.setChanged()),o&&(e.get("overlayBuffer").value=i.map);const c=r.has("HAS_SHADOW"),l=n!=null;if(l!==c&&(l?r.set("HAS_SHADOW","1"):(r.delete("HAS_SHADOW"),e.get("shadowBuffer").value=null),this.setChanged()),l){const g=r.get("SHADOW_CASCADE_COUNT"),p=`${n.cascadeCount}`;g!==p&&(r.set("SHADOW_CASCADE_COUNT",n.cascadeCount.toFixed(0)),this.setChanged()),e.get("shadowBuffer").value=n.map,e.get("shadowMapSize").value=n.mapSize,e.get("shadowIntervals").value=n.intervals,e.get("shadowMatrices").value=n.matrices,e.get("inverseShadowMatrices").value=n.inverseMatrices,e.get("shadowFar").value=n.far,e.get("shadowTopHeight").value=n.topHeight}const u=r.has("HAS_SHADOW_LENGTH"),d=s!=null;d!==u&&(d?r.set("HAS_SHADOW_LENGTH","1"):(r.delete("HAS_SHADOW_LENGTH"),e.get("shadowLengthBuffer").value=null),this.setChanged()),d&&(e.get("shadowLengthBuffer").value=s.map)}update(e,r,i){this.copyCameraSettings(this.camera),this.updateComposition(),++this.uniforms.get("frame").value}get normalBuffer(){return this.uniforms.get("normalBuffer").value}set normalBuffer(e){this.uniforms.get("normalBuffer").value=e}get irradianceTexture(){return this.uniforms.get("u_irradiance_texture").value}set irradianceTexture(e){this.uniforms.get("u_irradiance_texture").value=e}get scatteringTexture(){return this.uniforms.get("u_scattering_texture").value}set scatteringTexture(e){this.uniforms.get("u_scattering_texture").value=e,this.uniforms.get("u_single_mie_scattering_texture").value=e}get transmittanceTexture(){return this.uniforms.get("u_transmittance_texture").value}set transmittanceTexture(e){this.uniforms.get("u_transmittance_texture").value=e}get useHalfFloat(){return!0}set useHalfFloat(e){}get ellipsoid(){return this._ellipsoid}set ellipsoid(e){this._ellipsoid=e,this.uniforms.get("ellipsoidRadii").value.copy(e.radii)}get ellipsoidCenter(){return this.uniforms.get("ellipsoidCenter").value}get sunDirection(){return this.uniforms.get("sunDirection").value}get irradianceScale(){return this.uniforms.get("irradianceScale").value}set irradianceScale(e){this.uniforms.get("irradianceScale").value=e}get moonDirection(){return this.uniforms.get("moonDirection").value}get moonAngularRadius(){return this.uniforms.get("moonAngularRadius").value}set moonAngularRadius(e){this.uniforms.get("moonAngularRadius").value=e}get lunarRadianceScale(){return this.uniforms.get("lunarRadianceScale").value}set lunarRadianceScale(e){this.uniforms.get("lunarRadianceScale").value=e}get stbnTexture(){return this.uniforms.get("stbnTexture").value}set stbnTexture(e){this.uniforms.get("stbnTexture").value=e}get shadowRadius(){return this.uniforms.get("shadowRadius").value}set shadowRadius(e){this.uniforms.get("shadowRadius").value=e}}Xe([Be("OCT_ENCODED_NORMAL")],Qe.prototype,"octEncodedNormal");Xe([Be("RECONSTRUCT_NORMAL")],Qe.prototype,"reconstructNormal");Xe([Be("CORRECT_GEOMETRIC_ERROR")],Qe.prototype,"correctGeometricError");Xe([Be("PHOTOMETRIC")],Qe.prototype,"photometric");Xe([Be("SUN_IRRADIANCE")],Qe.prototype,"sunIrradiance");Xe([Be("SKY_IRRADIANCE")],Qe.prototype,"skyIrradiance");Xe([Be("TRANSMITTANCE")],Qe.prototype,"transmittance");Xe([Be("INSCATTER")],Qe.prototype,"inscatter");Xe([Be("SKY")],Qe.prototype,"sky");Xe([Be("SUN")],Qe.prototype,"sun");Xe([Be("MOON")],Qe.prototype,"moon");Xe([lm("SHADOW_SAMPLE_COUNT",{min:1,max:16})],Qe.prototype,"shadowSampleCount");var Jm=Object.defineProperty,ef=(t,e,r,i)=>{for(var n=void 0,s=t.length-1,a;s>=0;s--)(a=t[s])&&(n=a(e,r,n)||n);return n&&Jm(e,r,n),n};const tf=new T;function rf(t,e){let r="",i="";for(let n=1;n<e;++n)r+=`layout(location = ${n}) out float renderTarget${n};
`,i+=`renderTarget${n} = 0.0;
`;return t.replace("#include <mrt_layout>",r).replace("#include <mrt_output>",i)}const js={ellipsoid:mt.WGS84,correctAltitude:!0,photometric:!0,renderTargetCount:1};class Ys extends Ll{constructor(e,r=sn.DEFAULT){const{irradianceTexture:i=null,scatteringTexture:n=null,transmittanceTexture:s=null,useHalfFloat:a,ellipsoid:o,correctAltitude:c,photometric:l,sunDirection:u,sunAngularRadius:d,renderTargetCount:g,...p}={...js,...e};super({toneMapped:!1,depthWrite:!1,depthTest:!1,...p,uniforms:{cameraPosition:new D(new T),ellipsoidCenter:new D(new T),inverseEllipsoidMatrix:new D(new J),altitudeCorrection:new D(new T),sunDirection:new D((u==null?void 0:u.clone())??new T),u_solar_irradiance:new D(r.solarIrradiance),u_sun_angular_radius:new D(d??r.sunAngularRadius),u_bottom_radius:new D(r.bottomRadius*nr),u_top_radius:new D(r.topRadius*nr),u_rayleigh_scattering:new D(r.rayleighScattering),u_mie_scattering:new D(r.mieScattering),u_mie_phase_function_g:new D(r.miePhaseFunctionG),u_mu_s_min:new D(r.muSMin),u_irradiance_texture:new D(i),u_scattering_texture:new D(n),u_single_mie_scattering_texture:new D(n),u_transmittance_texture:new D(s),...p.uniforms},defines:{PI:`${Math.PI}`,TRANSMITTANCE_TEXTURE_WIDTH:cn.toFixed(0),TRANSMITTANCE_TEXTURE_HEIGHT:ln.toFixed(0),SCATTERING_TEXTURE_R_SIZE:zs.toFixed(0),SCATTERING_TEXTURE_MU_SIZE:Vs.toFixed(0),SCATTERING_TEXTURE_MU_S_SIZE:Ws.toFixed(0),SCATTERING_TEXTURE_NU_SIZE:Gs.toFixed(0),IRRADIANCE_TEXTURE_WIDTH:an.toFixed(0),IRRADIANCE_TEXTURE_HEIGHT:on.toFixed(0),METER_TO_LENGTH_UNIT:nr.toFixed(7),SUN_SPECTRAL_RADIANCE_TO_LUMINANCE:`vec3(${r.sunRadianceToRelativeLuminance.toArray().map(h=>h.toFixed(12)).join(",")})`,SKY_SPECTRAL_RADIANCE_TO_LUMINANCE:`vec3(${r.skyRadianceToRelativeLuminance.toArray().map(h=>h.toFixed(12)).join(",")})`,...p.defines}}),this.atmosphere=r,this.ellipsoidMatrix=new J,this.atmosphere=r,this.ellipsoid=o,this.correctAltitude=c,this.photometric=l,this.renderTargetCount=g}copyCameraSettings(e){const r=this.uniforms,i=e.getWorldPosition(r.cameraPosition.value),n=r.inverseEllipsoidMatrix.value.copy(this.ellipsoidMatrix).invert(),s=tf.copy(i).applyMatrix4(n).sub(r.ellipsoidCenter.value),a=r.altitudeCorrection.value;this.correctAltitude?un(s,this.atmosphere.bottomRadius,this.ellipsoid,a):a.setScalar(0)}onBeforeCompile(e,r){e.fragmentShader=rf(e.fragmentShader,this.renderTargetCount)}onBeforeRender(e,r,i,n,s,a){this.copyCameraSettings(i)}get irradianceTexture(){return this.uniforms.u_irradiance_texture.value}set irradianceTexture(e){this.uniforms.u_irradiance_texture.value=e}get scatteringTexture(){return this.uniforms.u_scattering_texture.value}set scatteringTexture(e){this.uniforms.u_scattering_texture.value=e,this.uniforms.u_single_mie_scattering_texture.value=e}get transmittanceTexture(){return this.uniforms.u_transmittance_texture.value}set transmittanceTexture(e){this.uniforms.u_transmittance_texture.value=e}get useHalfFloat(){return!0}set useHalfFloat(e){}get ellipsoidCenter(){return this.uniforms.ellipsoidCenter.value}get sunDirection(){return this.uniforms.sunDirection.value}get sunAngularRadius(){return this.uniforms.u_sun_angular_radius.value}set sunAngularRadius(e){this.uniforms.u_sun_angular_radius.value=e}get renderTargetCount(){return this._renderTargetCount}set renderTargetCount(e){e!==this.renderTargetCount&&(this._renderTargetCount=e,this.needsUpdate=!0)}}ef([Be("PHOTOMETRIC")],Ys.prototype,"photometric");var lt;(function(t){t.Sun="Sun",t.Moon="Moon",t.Mercury="Mercury",t.Venus="Venus",t.Earth="Earth",t.Mars="Mars",t.Jupiter="Jupiter",t.Saturn="Saturn",t.Uranus="Uranus",t.Neptune="Neptune",t.Pluto="Pluto",t.SSB="SSB",t.EMB="EMB",t.Star1="Star1",t.Star2="Star2",t.Star3="Star3",t.Star4="Star4",t.Star5="Star5",t.Star6="Star6",t.Star7="Star7",t.Star8="Star8"})(lt||(lt={}));lt.Star1,lt.Star2,lt.Star3,lt.Star4,lt.Star5,lt.Star6,lt.Star7,lt.Star8;var Za;(function(t){t[t.From2000=0]="From2000",t[t.Into2000=1]="Into2000"})(Za||(Za={}));var Ja;(function(t){t[t.Pericenter=0]="Pericenter",t[t.Apocenter=1]="Apocenter"})(Ja||(Ja={}));var eo;(function(t){t.Penumbral="penumbral",t.Partial="partial",t.Annular="annular",t.Total="total"})(eo||(eo={}));var to;(function(t){t[t.Invalid=0]="Invalid",t[t.Ascending=1]="Ascending",t[t.Descending=-1]="Descending"})(to||(to={}));function Gc(t){return Math.sqrt(Math.max(t,0))}function nf(t){return Math.max(t,0)}function sf(t,e,r){const{bottomRadius:i}=t;return r<0&&e**2*(r**2-1)+i**2>=0}function af(t,e,r){const{topRadius:i}=t,n=e**2*(r**2-1)+i**2;return nf(-e*r+Gc(n))}function Bi(t,e){return .5/e+t*(1-1/e)}var of="Invariant failed";function cf(t,e){if(!t)throw new Error(of)}const lf=new T,ro=new T,uf=new T;function Si(t,e,r){const i=e*4;return r.set(t[i],t[i+1],t[i+2])}function jc(t,e,r){const{width:i,height:n}=t.image;cf(Xh(t.image.data));let s=t.image.data;t.type===Yo&&s instanceof Uint16Array&&(s=new oe(s.buffer));const a=Fi(e.x,0,1)*(i-1),o=Fi(e.y,0,1)*(n-1),c=Math.floor(a),l=Math.floor(o),u=a-c,d=o-l,g=u,p=d,h=c%i,S=(h+1)%i,f=l%n,v=(f+1)%n,b=Si(s,f*i+h,lf),A=Si(s,f*i+S,ro),C=b.lerp(A,g),M=Si(s,v*i+h,ro),I=Si(s,v*i+S,uf),R=M.lerp(I,g);return r.copy(C.lerp(R,p))}function df(t,e,r,i){const{topRadius:n,bottomRadius:s}=t,a=Math.sqrt(n**2-s**2),o=Gc(e**2-s**2),c=af(t,e,r),l=n-e,u=o+a,d=(c-l)/(u-l),g=o/a;return i.set(Bi(d,cn),Bi(g,ln))}const hf=new T,zn=new T,mf=new Lt;function io(t,e,r,i=new je,{ellipsoid:n=mt.WGS84,correctAltitude:s=!0,photometric:a=!0}={},o=sn.DEFAULT){const c=hf.copy(e);if(s){const S=n.projectOnSurface(e,zn);S!=null&&c.sub(n.getOsculatingSphereCenter(S,o.bottomRadius,zn))}const l=zn;let u=c.length(),d=c.dot(r);const{topRadius:g}=o,p=-d-Math.sqrt(d**2-u**2+g**2);if(p>0&&(u=g,d+=p),u>g)l.set(1,1,1);else{const S=d/u;if(sf(o,u,S))l.setScalar(0);else{const f=df(o,u,S,mf);jc(t,f,l)}}const h=l.multiply(o.solarIrradiance);return a&&h.multiply(o.sunRadianceToRelativeLuminance),i.setFromVector3(h)}var Qr=Uint8Array,Yc=Uint16Array,ff=Uint32Array,pf=new Qr([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),gf=new Qr([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),$c=function(t,e){for(var r=new Yc(31),i=0;i<31;++i)r[i]=e+=1<<t[i-1];for(var n=new ff(r[30]),i=1;i<30;++i)for(var s=r[i];s<r[i+1];++s)n[s]=s-r[i]<<5|i;return[r,n]},Kc=$c(pf,2),vf=Kc[0],yf=Kc[1];vf[28]=258,yf[258]=28;$c(gf,0);var Sf=new Yc(32768);for(var me=0;me<32768;++me){var Pt=(me&43690)>>>1|(me&21845)<<1;Pt=(Pt&52428)>>>2|(Pt&13107)<<2,Pt=(Pt&61680)>>>4|(Pt&3855)<<4,Sf[me]=((Pt&65280)>>>8|(Pt&255)<<8)>>>1}var dn=new Qr(288);for(var me=0;me<144;++me)dn[me]=8;for(var me=144;me<256;++me)dn[me]=9;for(var me=256;me<280;++me)dn[me]=7;for(var me=280;me<288;++me)dn[me]=8;var wf=new Qr(32);for(var me=0;me<32;++me)wf[me]=5;var _f=new Qr(0),xf=typeof TextDecoder<"u"&&new TextDecoder,Tf=0;try{xf.decode(_f,{stream:!0}),Tf=1}catch{}function bf({topRadius:t,bottomRadius:e},r,i,n){const s=(r-e)/(t-e),a=i*.5+.5;return n.set(Bi(a,an),Bi(s,on))}const Mf=1/Math.sqrt(Math.PI),Vn=Math.sqrt(3)/(2*Math.sqrt(Math.PI)),Ef=new T,Wn=new T,Rf=new Lt,Af=new J,Cf={ellipsoid:mt.WGS84,correctAltitude:!0,photometric:!0};class If extends $o{constructor(e,r=sn.DEFAULT){super(),this.atmosphere=r,this.ellipsoidCenter=new T,this.ellipsoidMatrix=new J;const{irradianceTexture:i=null,ellipsoid:n,correctAltitude:s,photometric:a,sunDirection:o}={...Cf,...e};this.irradianceTexture=i,this.ellipsoid=n,this.correctAltitude=s,this.photometric=a,this.sunDirection=(o==null?void 0:o.clone())??new T}update(){if(this.irradianceTexture==null)return;const e=Af.copy(this.ellipsoidMatrix).invert(),r=this.getWorldPosition(Ef).applyMatrix4(e).sub(this.ellipsoidCenter);if(this.correctAltitude){const l=this.ellipsoid.projectOnSurface(r,Wn);l!=null&&r.sub(un(l,this.atmosphere.bottomRadius,this.ellipsoid,Wn))}const i=r.length(),n=r.dot(this.sunDirection)/i,s=bf(this.atmosphere,i,n,Rf),a=jc(this.irradianceTexture,s,Wn);this.photometric&&a.multiply(this.atmosphere.skyRadianceToRelativeLuminance);const o=this.ellipsoid.getSurfaceNormal(r).applyMatrix4(this.ellipsoidMatrix),c=this.sh.coefficients;c[0].copy(a).multiplyScalar(Mf),c[1].copy(a).multiplyScalar(Vn*o.y),c[2].copy(a).multiplyScalar(Vn*o.z),c[3].copy(a).multiplyScalar(Vn*o.x)}}const Df=`precision highp float;
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
`,Pf=`precision highp float;
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
`;var Nf=Object.defineProperty,qc=(t,e,r,i)=>{for(var n=void 0,s=t.length-1,a;s>=0;s--)(a=t[s])&&(n=a(e,r,n)||n);return n&&Nf(e,r,n),n};const Of={...js,sun:!0,moon:!0,moonAngularRadius:.0045,lunarRadianceScale:1};class $s extends Ys{constructor(e){const{sun:r,moon:i,moonDirection:n,moonAngularRadius:s,lunarRadianceScale:a,groundAlbedo:o,...c}={...Of,...e};super({name:"SkyMaterial",glslVersion:Ur,vertexShader:Gt(Pf,{parameters:lr}),fragmentShader:Gt(Df,{core:{raySphereIntersection:Vc},parameters:lr,functions:Hs,sky:Wc}),...c,uniforms:{inverseProjectionMatrix:new D(new J),inverseViewMatrix:new D(new J),moonDirection:new D((n==null?void 0:n.clone())??new T),moonAngularRadius:new D(s),lunarRadianceScale:new D(a),groundAlbedo:new D((o==null?void 0:o.clone())??new je(0)),shadowLengthBuffer:new D(null),...c.uniforms},defines:{PERSPECTIVE_CAMERA:"1"},depthTest:!0}),this.shadowLength=null,this.sun=r,this.moon=i}onBeforeRender(e,r,i,n,s,a){super.onBeforeRender(e,r,i,n,s,a);const{uniforms:o,defines:c}=this;o.inverseProjectionMatrix.value.copy(i.projectionMatrixInverse),o.inverseViewMatrix.value.copy(i.matrixWorld);const l=c.PERSPECTIVE_CAMERA!=null,u=i.isPerspectiveCamera===!0;u!==l&&(u?c.PERSPECTIVE_CAMERA="1":delete c.PERSPECTIVE_CAMERA,this.needsUpdate=!0);const d=this.groundAlbedo,g=c.GROUND_ALBEDO!=null,p=d.r!==0||d.g!==0||d.b!==0;p!==g&&(p?this.defines.GROUND_ALBEDO="1":delete this.defines.GROUND_ALBEDO,this.needsUpdate=!0);const h=this.shadowLength,S=c.HAS_SHADOW_LENGTH!=null,f=h!=null;f!==S&&(f?c.HAS_SHADOW_LENGTH="1":(delete c.HAS_SHADOW_LENGTH,o.shadowLengthBuffer.value=null),this.needsUpdate=!0),f&&(o.shadowLengthBuffer.value=h.map)}get moonDirection(){return this.uniforms.moonDirection.value}get moonAngularRadius(){return this.uniforms.moonAngularRadius.value}set moonAngularRadius(e){this.uniforms.moonAngularRadius.value=e}get lunarRadianceScale(){return this.uniforms.lunarRadianceScale.value}set lunarRadianceScale(e){this.uniforms.lunarRadianceScale.value=e}get groundAlbedo(){return this.uniforms.groundAlbedo.value}}qc([Be("SUN")],$s.prototype,"sun");qc([Be("MOON")],$s.prototype,"moon");const Lf=`precision highp float;
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
`,Ff=`precision highp float;
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
`;var Bf=Object.defineProperty,Uf=(t,e,r,i)=>{for(var n=void 0,s=t.length-1,a;s>=0;s--)(a=t[s])&&(n=a(e,r,n)||n);return n&&Bf(e,r,n),n};const kf={...js,pointSize:1,radianceScale:1,background:!0};class Hf extends Ys{constructor(e){const{pointSize:r,radianceScale:i,background:n,...s}={...kf,...e};super({name:"StarsMaterial",glslVersion:Ur,vertexShader:Gt(Ff,{parameters:lr}),fragmentShader:Gt(Lf,{parameters:lr,functions:Hs}),...s,uniforms:{projectionMatrix:new D(new J),modelViewMatrix:new D(new J),viewMatrix:new D(new J),matrixWorld:new D(new J),cameraFar:new D(0),pointSize:new D(0),magnitudeRange:new D(new Lt(-2,8)),radianceScale:new D(i),...s.uniforms},defines:{PERSPECTIVE_CAMERA:"1"}}),this.pointSize=r,this.background=n}onBeforeRender(e,r,i,n,s,a){super.onBeforeRender(e,r,i,n,s,a);const o=this.uniforms;o.projectionMatrix.value.copy(i.projectionMatrix),o.modelViewMatrix.value.copy(i.modelViewMatrix),o.viewMatrix.value.copy(i.matrixWorldInverse),o.matrixWorld.value.copy(s.matrixWorld),o.cameraFar.value=i.far,o.pointSize.value=this.pointSize*e.getPixelRatio();const c=i.isPerspectiveCamera===!0;this.defines.PERSPECTIVE_CAMERA!=null!==c&&(c?this.defines.PERSPECTIVE_CAMERA="1":delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}get magnitudeRange(){return this.uniforms.magnitudeRange.value}get radianceScale(){return this.uniforms.radianceScale.value}set radianceScale(e){this.uniforms.radianceScale.value=e}}Uf([Be("BACKGROUND")],Hf.prototype,"background");const no=new je("#fff2d8"),so=1e-8,Gn=3e4,ao=-1e3,oo=1e7,zf=5e6,Vf=8e6,Vr=t=>Number.isFinite(t.x)&&Number.isFinite(t.y)&&Number.isFinite(t.z),co=t=>!Number.isFinite(t.longitude)||Math.abs(t.longitude)>180?"longitude must be a finite value in degrees within [-180, 180]":!Number.isFinite(t.latitude)||Math.abs(t.latitude)>90?"latitude must be a finite value in degrees within [-90, 90]":!Number.isFinite(t.altitudeMeters)||t.altitudeMeters<ao||t.altitudeMeters>oo?`altitudeMeters must be within [${ao}, ${oo}]`:null,Wf=(t,e,r)=>{if(!Number.isFinite(t.getTime()))return"instant must be a valid Date";const i=co(e);if(i)return`observer ${i}`;if(!r)return null;const n=co(r.observer);return n?`sky reference observer ${n}`:Vr(r.scenePosition)?null:"sky reference scenePosition must contain finite metre coordinates"},Xc=t=>{if(!Vr(t.directionToSunECEF))return"sun direction contains a non-finite component";if(Math.abs(t.directionToSunECEF.length()-1)>1e-6)return"sun direction is not normalized";if(!t.ecefToSceneMatrix.elements.every(Number.isFinite))return"ECEF-to-scene matrix contains a non-finite component";const e=t.ecefToSceneMatrix.elements,r=[new T(e[0],e[4],e[8]),new T(e[1],e[5],e[9]),new T(e[2],e[6],e[10])];if(r.some(s=>Math.abs(s.length()-1)>1e-6)||Math.abs(r[0].dot(r[1]))>1e-6||Math.abs(r[0].dot(r[2]))>1e-6||Math.abs(r[1].dot(r[2]))>1e-6||Math.abs(e[3])>1e-12||Math.abs(e[7])>1e-12||Math.abs(e[11])>1e-12||Math.abs(e[12])>1e-12||Math.abs(e[13])>1e-12||Math.abs(e[14])>1e-12||Math.abs(e[15]-1)>1e-12)return"ECEF-to-scene matrix is not an affine orthonormal rotation";const i=t.ecefToSceneMatrix.determinant();if(!Number.isFinite(i)||Math.abs(i-1)>1e-6)return"ECEF-to-scene matrix is not a proper orthonormal rotation";if(!Vr(t.ellipsoidCenterECEF))return"ellipsoid center contains a non-finite component";const n=t.ellipsoidCenterECEF.length();return n<zf||n>Vf?"ellipsoid center is outside the plausible WGS84 distance range":null},Gf=t=>{var r;const e=Xc(t.skyFrame);return e||(Vr(t.directionToSun)?Math.abs(t.directionToSun.length()-1)>1e-6?"scene sun direction is not normalized":![t.color.r,t.color.g,t.color.b].every(Number.isFinite)||![t.radiance.r,t.radiance.g,t.radiance.b].every(Number.isFinite)||!Number.isFinite(t.relativeIntensity)||t.relativeIntensity<0||t.relativeIntensity>1||!Number.isFinite(t.azimuthDegrees)||!Number.isFinite(t.elevationDegrees)?"sunlight color, intensity, or angles contain invalid values":(r=t.skyIrradianceCoefficients)!=null&&r.some(i=>!Vr(i))?"sky irradiance contains a non-finite coefficient":null:"scene sun direction contains a non-finite component")},jn={useTransmittanceLut:!0,useIrradianceLut:!0},jf=({east:t,north:e,up:r})=>new J().set(t.x,t.y,t.z,0,r.x,r.y,r.z,0,-e.x,-e.y,-e.z,0,0,0,0,1);function Ks({longitude:t,latitude:e,altitudeMeters:r}){const i=new fc(Ss(t),Ss(e),r).toECEF(),n=new T,s=new T,a=new T;return mt.WGS84.getEastNorthUpVectors(i,n,s,a),{observerECEF:i,east:n,north:s,up:a}}const Qc=(t,{east:e,north:r,up:i},n)=>n.set(t.dot(e),t.dot(i),-t.dot(r)).normalize(),Zc=(t,e,r)=>{const i=r?Ks(r.observer):e,n=jf(i);r!=null&&r.sceneFromLocal&&n.premultiply(r.sceneFromLocal);const s=n.clone().invert(),a=((r==null?void 0:r.scenePosition)??new T).clone().applyMatrix4(s).sub(i.observerECEF);return{directionToSunECEF:t.clone(),ecefToSceneMatrix:n,ellipsoidCenterECEF:a}},Yf=(t,e,{observerECEF:r,east:i,north:n,up:s})=>t!=null&&t.irradianceTexture?(t.ellipsoidMatrix.set(i.x,i.y,i.z,0,s.x,s.y,s.z,0,-n.x,-n.y,-n.z,0,0,0,0,1),t.ellipsoidCenter.copy(r).negate(),t.sunDirection.copy(e),t.position.set(0,0,0),t.updateMatrixWorld(!0),t.update(),t.sh.coefficients.map(a=>a.clone())):null,Jc=t=>{const e=Ta(Math.asin(Ge(t.y,-1,1)));return{azimuthDegrees:(Ta(Math.atan2(t.x,-t.z))+360)%360,elevationDegrees:e}},$f=(t,e)=>{const r=Ks(e.observer),i=Qc(t.skyFrame.directionToSunECEF,r,new T);return e.sceneFromLocal&&i.transformDirection(e.sceneFromLocal),{...t,directionToSun:i,...Jc(i),skyFrame:Zc(t.skyFrame.directionToSunECEF,r,e)}},Kf=(t,e,r,i=null,n)=>{const s=Ks(e),{observerECEF:a,up:o}=s,c=new T(...Fl(t)),l=Qc(c,s,new T);n!=null&&n.sceneFromLocal&&l.transformDirection(n.sceneFromLocal);const u=Zc(c,s,n),d=Yf(i,c,s),{azimuthDegrees:g,elevationDegrees:p}=Jc(l);if(!r){const A=Math.sqrt(Ge(l.y,0,1));return{directionToSun:l,color:no.clone(),relativeIntensity:A,radiance:no.clone().multiplyScalar(A),atmosphericTransmittanceReady:!1,atmosphericIrradianceReady:d!==null,skyIrradianceCoefficients:d,azimuthDegrees:g,elevationDegrees:p,skyFrame:u}}const h=io(r,a,c,new je,{ellipsoid:mt.WGS84,correctAltitude:!0,photometric:!0}),S=io(r,a,o,new je,{ellipsoid:mt.WGS84,correctAltitude:!0,photometric:!0}),f=Math.max(h.r,h.g,h.b,0),v=Math.max(S.r,S.g,S.b,so),b=f>so?h.clone().multiplyScalar(1/f):new je(0,0,0);return{directionToSun:l,color:b,relativeIntensity:Ge(f/v,0,1),radiance:h,atmosphericTransmittanceReady:!0,atmosphericIrradianceReady:d!==null,skyIrradianceCoefficients:d,azimuthDegrees:g,elevationDegrees:p,skyFrame:u}};class qf{transmittanceTexture=null;irradianceTexture=null;scatteringTexture=null;skyLightProbe=new If({ellipsoid:mt.WGS84,correctAltitude:!0,photometric:!0});transmittanceLoading=!1;irradianceLoading=!1;scatteringLoading=!1;transmittanceRetryAt=0;irradianceRetryAt=0;scatteringRetryAt=0;disposed=!1;get ready(){return this.transmittanceTexture!==null&&this.irradianceTexture!==null}get skyReady(){return this.skyTextures!==null}get skyTextures(){return!this.transmittanceTexture||!this.irradianceTexture||!this.scatteringTexture?null:{transmittanceTexture:this.transmittanceTexture,irradianceTexture:this.irradianceTexture,scatteringTexture:this.scatteringTexture}}get isSkyLoading(){return this.transmittanceLoading||this.irradianceLoading||this.scatteringLoading}isLoadingFor(e=jn){return e.useTransmittanceLut&&this.transmittanceLoading||e.useIrradianceLut&&this.irradianceLoading}ensure(e,r=jn){if(this.disposed)return;const i=()=>{this.isLoadingFor(r)||e()};r.useTransmittanceLut&&this.ensureTransmittance(i),r.useIrradianceLut&&this.ensureIrradiance(i)}ensureSky(e){if(this.disposed||this.skyReady)return;let r=!1;const i=()=>{!r&&!this.isSkyLoading&&(r=!0,e())};this.ensureTransmittance(i),this.ensureIrradiance(i),this.ensureScattering(i)}ensureTransmittance(e){this.transmittanceTexture||this.transmittanceLoading||Date.now()<this.transmittanceRetryAt||(this.transmittanceLoading=!0,Qa(kn,{width:cn,height:ln}).load(`${Hn}/transmittance.bin`,r=>{if(this.transmittanceLoading=!1,this.disposed){r.dispose();return}this.transmittanceRetryAt=0,this.transmittanceTexture=r,e()},void 0,r=>{this.transmittanceLoading=!1,this.disposed||(this.transmittanceRetryAt=Date.now()+Gn,console.error("[SHADOW] Takram transmittance LUT failed",r),e())}))}ensureIrradiance(e){this.irradianceTexture||this.irradianceLoading||Date.now()<this.irradianceRetryAt||(this.irradianceLoading=!0,Qa(kn,{width:an,height:on}).load(`${Hn}/irradiance.bin`,r=>{if(this.irradianceLoading=!1,this.disposed){r.dispose();return}this.irradianceRetryAt=0,this.irradianceTexture=r,this.skyLightProbe.irradianceTexture=r,e()},void 0,r=>{this.irradianceLoading=!1,this.disposed||(this.irradianceRetryAt=Date.now()+Gn,console.error("[SHADOW] Takram irradiance LUT failed",r),e())}))}ensureScattering(e){this.scatteringTexture||this.scatteringLoading||Date.now()<this.scatteringRetryAt||(this.scatteringLoading=!0,am(kn,{width:zm,height:Vm,depth:Wm}).load(`${Hn}/scattering.bin`,r=>{if(this.scatteringLoading=!1,this.disposed){r.dispose();return}this.scatteringRetryAt=0,this.scatteringTexture=r,e()},void 0,r=>{this.scatteringLoading=!1,this.disposed||(this.scatteringRetryAt=Date.now()+Gn,console.error("[SHADOW] Takram scattering LUT failed",r),e())}))}evaluate(e,r,i=jn,n){return Kf(e,r,i.useTransmittanceLut?this.transmittanceTexture:null,i.useIrradianceLut?this.skyLightProbe:null,n)}dispose(){var e,r,i;this.disposed||(this.disposed=!0,this.transmittanceLoading=!1,this.irradianceLoading=!1,this.scatteringLoading=!1,this.transmittanceRetryAt=0,this.irradianceRetryAt=0,this.scatteringRetryAt=0,(e=this.transmittanceTexture)==null||e.dispose(),(r=this.irradianceTexture)==null||r.dispose(),(i=this.scatteringTexture)==null||i.dispose(),this.transmittanceTexture=null,this.irradianceTexture=null,this.scatteringTexture=null,this.skyLightProbe.irradianceTexture=null,this.skyLightProbe.sh.zero())}}const Xf="shadow-simulation-atmospheric-sky",Zr=2,Ei="carmaOutputToSrgb",Yn="carmaDisplayExposure",Qf=new T;class Zf extends $s{observerScenePosition=new T;hasObserverScenePosition=!1;viewCamera=null;copyCameraSettings(e){if(super.copyCameraSettings(e),!this.hasObserverScenePosition)return;const r=this.uniforms;if(r.cameraPosition.value.copy(this.observerScenePosition),!this.correctAltitude)return;const i=Qf.copy(this.observerScenePosition).applyMatrix4(r.inverseEllipsoidMatrix.value).sub(r.ellipsoidCenter.value);un(i,this.atmosphere.bottomRadius,this.ellipsoid,r.altitudeCorrection.value)}onBeforeRender(e,r,i,n,s,a){super.onBeforeRender(e,r,this.viewCamera??i,n,s,a)}}const Jf=t=>{t.uniforms.toneMappingExposure=new D(1),t.uniforms[Ei]=new D(!1),t.uniforms[Yn]=new D(Zr),t.fragmentShader=t.fragmentShader.replace("precision highp sampler3D;",`precision highp sampler3D;

uniform bool ${Ei};
uniform float ${Yn};
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
  }`).replace("outputColor.a = 1.0;",`outputColor.rgb *= ${Yn};
  outputColor.a = 1.0;
  if (${Ei}) {
    // SkyMaterial is raw GLSL: match terrain's AgX on the display target.
    // Offscreen samples stay linear HDR until the shared final composite.
    outputColor.rgb = AgXToneMapping(outputColor.rgb);
    outputColor = carmaLinearToSrgb(outputColor);
  }`)},ep=t=>{const e=new Zf({groundAlbedo:t,moon:!1,photometric:!0,side:Ko,sun:!0});Jf(e),e.depthTest=!1,e.depthWrite=!1;const r=new jo;r.setAttribute("position",new Bl([-1,-1,0,3,-1,0,-1,3,0],3));const i=new Wr(r,e);return i.name=Xf,i.visible=!1,i.frustumCulled=!1,i.renderOrder=-100,i.castShadow=!1,i.receiveShadow=!1,i.onBeforeRender=n=>{e.uniforms.toneMappingExposure.value=n.toneMappingExposure,e.uniforms[Ei].value=n.getRenderTarget()===null},{mesh:i,update(n,s){return s?Xc(n)?!1:(i.visible=!0,e.irradianceTexture=s.irradianceTexture,e.scatteringTexture=s.scatteringTexture,e.transmittanceTexture=s.transmittanceTexture,e.sunDirection.copy(n.directionToSunECEF),e.ellipsoidCenter.copy(n.ellipsoidCenterECEF),e.ellipsoidMatrix.copy(n.ecefToSceneMatrix),!0):(i.visible=!1,!1)},updateViewCamera(n){e.viewCamera=n},updateObserverScenePosition(n){e.observerScenePosition.copy(n),e.hasObserverScenePosition=!0},updateGroundAlbedo(n){e.groundAlbedo.copy(n)},dispose(){r.dispose(),e.dispose()}}},wi=3,tp=.5,ot=64,lo=.01,uo=(t,e,r)=>Math.min(r**2,Math.max(ot**2,Math.floor(t!==void 0&&Number.isFinite(t)&&t>0?t:e))),ho=(t,e)=>{const{mapSize:r,maxMapSize:i,elevationSine:n,sunDiscGuardMeters:s,groundTexelFit:a}=e,o=t.right-t.left+2*s,c=t.top-t.bottom+2*s,l=Math.max(lo,Math.abs(n)),d=2*(a?wi+tp:wi);let g=r,p=r,h=!1,S=!1;const f=e.groundTexelTargetMeters;if(f!==void 0&&(!Number.isFinite(f)||f<=0))throw new RangeError("Shadow ground texel target must be positive and finite");if(f!==void 0){const G=Te=>Math.max(ot,2**Math.ceil(Math.log2(Te))),W=G(o/f+d),re=G(c/(f*l)+d);g=Math.min(i,W),p=Math.min(i,re),h=g<W||p<re}else if(a){const G=o*l/c,W=e.mapTexelBudget??r*r,re=d*(G+1),Te=W-d*d,E=2*Te/(re+Math.sqrt(re**2+4*G*Te)),Q=G*E+d,F=E+d;h=Q>i||F>i;const ee=Math.max(o,c)/(r-d),q=Math.min(r,Math.max(ot,Math.ceil((o/ee+d)/ot)*ot)),de=Math.min(r,Math.max(ot,Math.ceil((c/ee+d)/ot)*ot));S=Q<q||F<de;const be=Math.min(Math.max(Q,q,W/i),i,W/de),P=Z=>Math.floor(Z/ot+1e-9)*ot;g=Math.max(q,P(be)),p=Math.max(de,P(Math.min(i,W/g)))}const v=e.mapDimensions;v&&(S||(S=g!==v.width||p!==v.height),g=v.width,p=v.height);const b=o/Math.max(1,g-d),A=c/Math.max(1,p-d),C=Math.max(b,A,Number.EPSILON),M=a?b:C,I=a?A:C,R=Math.round((t.left+t.right)/2/M)*M,L=Math.round((t.bottom+t.top)/2/I)*I,U=M*g,B=I*p;return{left:R-U/2,right:R+U/2,bottom:L-B/2,top:L+B/2,mapWidth:g,mapHeight:p,metersPerTexelX:M,metersPerTexelY:I,guardMetersX:M*wi,guardMetersY:I*wi,groundTexelWidthMeters:M,groundTexelHeightMeters:Math.abs(n)>Number.EPSILON?I/Math.abs(n):1/0,groundTexelFitLimited:a&&(h||S||Math.abs(n)<lo)}},rp=(t,e,r)=>{if(r<=0)return{planarMeters:0,depthMeters:0};const i=Math.sqrt(Math.max(0,1-e**2)),n=i>Math.sin(r)?Math.asin(Math.sin(r)/i):Math.PI;return{planarMeters:2*t*Math.sin(Math.min(Math.PI,n+r)/2),depthMeters:2*t*Math.sin(r/2)}},ip=t=>{const e=Math.floor(t/2)+1,r=t%2===0?1:-1;return[r*(e*.7548776662466927%1-.5),r*(e*.5698402909980532%1-.5)]},np=2048,el=8192,mo=2,fo=50,sp=1e4,ap=.04,$n=25,op=4,cp=1.2,lp=.2,po=.05,up=8,Fr=kl(.53/2),dp=Math.PI*(3-Math.sqrt(5)),hp=300,mp=new T(0,1,0),go=(t,e,r=new J)=>r.lookAt(t,e,mp).setPosition(t).invert(),fp=(t,e)=>{if(t.length===0)return null;const r=t.map(h=>h.clone().applyMatrix4(e)),i=Math.min(...r.map(({x:h})=>h)),n=Math.max(...r.map(({x:h})=>h)),s=Math.min(...r.map(({y:h})=>h)),a=Math.max(...r.map(({y:h})=>h)),o=r.map(({z:h})=>-h),c=Math.max(0,Math.min(...o)),l=Math.max(c+.01,Math.max(...o)),u=(i+n)/2,d=(s+a)/2,g=Math.max((n-i)/2,mo/2),p=Math.max((a-s)/2,mo/2);return{left:u-g,right:u+g,bottom:d-p,top:d+p,near:c,far:l}},pp=(t,e=el)=>t>=16?e:Math.min(e,np*Math.sqrt(t));class tl{constructor(e){this.host=e,this.lights=Array.from({length:1},()=>{const r=new Ul(16777215,0);return r.name="shadow-simulation-sun",r.visible=!1,r.castShadow=!1,r.shadow.camera.name="shadow-simulation-shadow-camera",r.shadow.autoUpdate=!1,r.shadow.radius=0,r.shadow.bias=0,r.shadow.normalBias=po,e.add(r,r.target),r})}lights;softSun=!1;lastSoftFit=null;maxShadowMapSize=el;mapAllocation=null;disposed=!1;setMaxShadowMapSize(e){if(!Number.isFinite(e)||e<=0)return;const r=Math.max(256,Math.floor(e));this.disposed||this.maxShadowMapSize===r||(this.maxShadowMapSize=r)}setSoftSun(e){this.disposed||this.softSun===e||(e||this.restoreSunDiscCenter(),this.softSun=e,e||(this.lastSoftFit=null))}applySunDiscSample(e,r,i=!0){if(this.disposed)return;const n=this.lastSoftFit;if(!n)return;const s=Math.max(1,Math.floor(r)),a=(Math.floor(e)%s+s)%s,o=Fr*Math.sqrt((a+.5)/s),c=a*dp,l=Math.cos(c)*o,u=Math.sin(c)*o,d=n.tangentA.clone().multiplyScalar(l).addScaledVector(n.tangentB,u).normalize(),g=n.directionToSun.clone().multiplyScalar(Math.cos(o)).addScaledVector(d,Math.sin(o)).normalize(),p=this.lights[0],[h,S]=i&&s>1?ip(a):[0,0],f=p.shadow.camera,v=n.rasterBounds,b=h*(v.right-v.left)/p.shadow.mapSize.x,A=S*(v.top-v.bottom)/p.shadow.mapSize.y;f.left=v.left+b,f.right=v.right+b,f.bottom=v.bottom+A,f.top=v.top+A,f.updateProjectionMatrix(),p.position.copy(g).multiplyScalar(n.lightDistance).add(n.anchorPosition),p.updateMatrixWorld(!0),p.target.updateMatrixWorld(!0),p.shadow.updateMatrices(p),p.shadow.needsUpdate=!0}restoreSunDiscCenter(){if(this.disposed||!this.lastSoftFit)return;const e=this.lastSoftFit,r=this.lights[0],i=r.shadow.camera;i.left=e.rasterBounds.left,i.right=e.rasterBounds.right,i.bottom=e.rasterBounds.bottom,i.top=e.rasterBounds.top,i.updateProjectionMatrix(),r.position.copy(e.directionToSun).multiplyScalar(e.lightDistance).add(e.anchorPosition),r.updateMatrixWorld(!0),r.target.updateMatrixWorld(!0),r.shadow.updateMatrices(r),r.shadow.needsUpdate=!0}invalidate(){this.lights[0].shadow.needsUpdate=!0}update({receiverWorldPoints:e,receiverAnchorWorldPosition:r,minimumElevationMeters:i,maximumElevationMeters:n,directionToSun:s,color:a,intensity:o,shadowIntensity:c,quality:l,groundTexelFit:u=!0,stabilizeMapSize:d=!1,mapTexelBudget:g,casterMapTexelBudget:p,groundTexelTargetMeters:h,maxReceiverBiasMeters:S}){var ge,Ct;if(this.disposed)return null;if(e.length===0){for(const Ee of this.lights)Ee.visible=!1,Ee.castShadow=!1,Ee.intensity=0,Ee.shadow.needsUpdate=!1;return null}const f=s.clone().normalize(),v=Math.max(0,n-i),b=Math.max(ap,f.y),A=Ge((v+hp)/b+fo,fo,sp),C=A+v+$n,M=pp(l,this.maxShadowMapSize),I=uo(g,Math.floor(M)**2,this.maxShadowMapSize),R=Math.floor(Math.sqrt(I)),L=new je(a),U=r.clone(),B=e.reduce((Ee,Y)=>Math.max(Ee,Y.distanceTo(r)),0),G=B+C,W=this.lights[0];W.position.copy(f).multiplyScalar(G).add(U),W.target.position.copy(U),W.updateMatrixWorld(!0),W.target.updateMatrixWorld(!0),W.shadow.updateMatrices(W);const re=fp(e,go(W.position,W.target.position));if(!re)return null;const Te=rp(B,f.y,this.softSun?Fr:0),E=this.softSun?Math.max(Math.tan(Fr)*G,Te.planarMeters):0,Q={maxMapSize:this.maxShadowMapSize,elevationSine:f.y,sunDiscGuardMeters:E,groundTexelFit:u,groundTexelTargetMeters:h},F=ho(re,{...Q,mapSize:R,mapTexelBudget:I,mapDimensions:d&&((ge=this.mapAllocation)==null?void 0:ge.texelBudget)===I&&this.mapAllocation.maxMapSize===this.maxShadowMapSize&&this.mapAllocation.groundTexelFit===u?this.mapAllocation:void 0}),ee=uo(p,I,this.maxShadowMapSize),q=p===void 0?F:ho(re,{...Q,mapSize:Math.floor(Math.sqrt(ee)),mapTexelBudget:ee});this.mapAllocation={width:F.mapWidth,height:F.mapHeight,texelBudget:I,maxMapSize:this.maxShadowMapSize,groundTexelFit:u};const de=Math.max(F.metersPerTexelX,F.metersPerTexelY),be=Math.max(F.guardMetersX,F.guardMetersY),P={left:F.left,right:F.right,bottom:F.bottom,top:F.top,near:Math.max(.01,re.near-Te.depthMeters-A-v-$n),far:Math.max(1,re.far+Te.depthMeters+v+$n)};P.far=Math.max(P.near+1,P.far);const Z=Ge(de*cp/Math.max(lp,f.y),po,up),Ne=-Ge(de*op/Math.max(P.far-P.near,1),Number.EPSILON,.01),Me=new T;Math.abs(f.y)>.99?Me.set(1,0,0):Me.crossVectors(new T(0,1,0),f).normalize();const pt=new T().crossVectors(f,Me),ce=this.lights[0];ce.visible=!0,ce.castShadow=!0,ce.intensity=o,ce.color.copy(L),ce.shadow.intensity=Ge(c,0,1),ce.shadow.needsUpdate=!0,(ce.shadow.mapSize.x!==F.mapWidth||ce.shadow.mapSize.y!==F.mapHeight)&&((Ct=ce.shadow.map)==null||Ct.dispose(),ce.shadow.map=null,ce.shadow.mapSize.set(F.mapWidth,F.mapHeight)),ce.position.copy(f).multiplyScalar(G).add(U),ce.target.position.copy(U);const gt=S!==void 0&&Number.isFinite(S)?Math.max(0,S):1/0;ce.shadow.bias=Math.max(Ne,-gt/(P.far-P.near)),ce.shadow.normalBias=Math.min(Z,gt);const Ce=ce.shadow.camera;Ce.left=P.left,Ce.right=P.right,Ce.bottom=P.bottom,Ce.top=P.top,Ce.near=P.near,Ce.far=P.far,Ce.updateProjectionMatrix(),ce.updateMatrixWorld(!0),ce.target.updateMatrixWorld(!0),ce.shadow.updateMatrices(ce),this.lastSoftFit=this.softSun?{directionToSun:f.clone(),tangentA:Me,tangentB:pt,anchorPosition:U.clone(),lightDistance:G,rasterBounds:P}:null;const ke=W.shadow.camera;return{sampleCount:1,totalShadowTexels:F.mapWidth*F.mapHeight,mapTexelBudget:h===void 0?I:void 0,casterReachMeters:A,casterMetersPerTexel:[q.metersPerTexelX,q.metersPerTexelY],camera:{receiverPointCount:e.length,receiverLeftMeters:re.left,receiverRightMeters:re.right,receiverBottomMeters:re.bottom,receiverTopMeters:re.top,leftMeters:ke.left,rightMeters:ke.right,bottomMeters:ke.bottom,topMeters:ke.top,nearMeters:ke.near,farMeters:ke.far,shadowMapWidth:F.mapWidth,shadowMapHeight:F.mapHeight,viewMatrixElements:[...go(W.position,W.target.position).elements],projectionMatrixElements:[...ke.projectionMatrix.elements],guardMeters:be,metersPerTexel:de,metersPerTexelX:F.metersPerTexelX,metersPerTexelY:F.metersPerTexelY,groundTexelWidthMeters:F.groundTexelWidthMeters,groundTexelHeightMeters:F.groundTexelHeightMeters,groundTexelFitLimited:F.groundTexelFitLimited,groundTexelFit:u,groundTexelTargetMeters:h}}}dispose(){var e;if(!this.disposed){this.disposed=!0;for(const r of this.lights)(e=r.shadow.map)==null||e.dispose(),this.host.remove(r.target,r)}}}const gp=`
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
`,vo="float getShadow( sampler2DShadow shadowMap,",Kn="#elif defined( SHADOWMAP_TYPE_VSM )",vp=()=>{const t=as.shadowmap_pars_fragment;if(!t.includes(vo)||!t.includes(Kn))throw new Error("Three PCF shader changed; validate receiver-plane shadow integration");return`uniform bool carmaReceiverPlaneShadow;
${t.replace(vo,"float carmaOriginalGetShadow( sampler2DShadow shadowMap,").replace(Kn,`${gp}
${Kn}`)}`},yo=new WeakMap,yp=(t,e)=>{const r=yo.get(t);if(r)return e!==void 0&&r.value!==e&&(r.value=e,t.needsUpdate=!0),r;const i={value:e??!1},n=t.onBeforeCompile,s=t.customProgramCacheKey(),a=vp();return t.onBeforeCompile=function(o,c){n.call(this,o,c),o.uniforms.carmaReceiverPlaneShadow=i,o.fragmentShader=o.fragmentShader.replace("#include <shadowmap_pars_fragment>",a)},t.customProgramCacheKey=()=>`${s}|carma-receiver-plane-pcf-v3|${i.value?"mesh":"stock"}`,t.needsUpdate=!0,yo.set(t,i),i},So=new WeakMap,wo=(t,e,r,i,n="shadow-and-color")=>{const s=()=>r.render(t,i);if(e===void 0)return s(),!0;const a=t.getObjectById(e);if(!a)return!1;let o=So.get(a);if(!o){const l=new Set;a.traverse(u=>l.add(u)),So.set(a,l),o=l}if(n==="color-only"){const l=new Set;for(let d=a.parent;d;d=d.parent)l.add(d);const u=[];t.traverse(d=>{d.isMesh&&d.visible&&!o.has(d)&&!l.has(d)&&(u.push(d),d.visible=!1)});try{return s(),!0}finally{for(const d of u)d.visible=!0}}const c=r.renderBufferDirect;r.renderBufferDirect=function(...l){const[u,,,,d]=l;u===i&&d.isMesh&&!o.has(d)||c.apply(this,l)};try{return s(),!0}finally{r.renderBufferDirect=c}},Nt=t=>{var e;(e=t.depthTexture)==null||e.dispose(),t.dispose()},kt=(t,e)=>t*e*8;class Sp{entries=new Map;retainedBytes=0;capacityBytes=0;activeVariantIds=null;hits=0;misses=0;get bytes(){return this.retainedBytes}get count(){return this.entries.size}get availableBytes(){return Math.max(0,this.capacityBytes-this.retainedBytes)}has(e){return this.entries.has(e)}setActiveVariants(e){this.activeVariantIds=e}setBudget(e,r){this.capacityBytes=Math.max(0,e-r),this.evictInactive(0);for(const i of this.entries.keys()){if(this.retainedBytes<=this.capacityBytes)break;this.remove(i)}}get(e){const r=this.entries.get(e);return r?this.hits+=1:this.misses+=1,r==null?void 0:r.target}admit(e,r,i,n=r,s={}){var o;if(this.entries.has(e))return!1;const a=kt(i.width,i.height);return a>this.capacityBytes||(s.evictInactive!==!1&&((o=this.activeVariantIds)!=null&&o.has(n))&&this.evictInactive(a),this.retainedBytes+a>this.capacityBytes)?!1:(this.entries.set(e,{pageId:r,variantId:n,target:i,bytes:a}),this.retainedBytes+=a,!0)}invalidate(e){for(const[r,i]of this.entries)i.pageId===e&&this.remove(r)}clear(){for(const e of this.entries.keys())this.remove(e)}evictInactive(e){if(this.activeVariantIds)for(const[r,i]of this.entries){if(this.retainedBytes+e<=this.capacityBytes)break;this.activeVariantIds.has(i.variantId)||this.remove(r)}}remove(e){const r=this.entries.get(e);r&&(this.entries.delete(e),this.retainedBytes-=r.bytes,Nt(r.target))}}const wp=16,qn=4;class _p{constructor(e,r,i,n=4096,s=e){if(this.scene=e,this.renderer=r,this.memoryBudgetBytes=i,this.host=s,!Number.isFinite(i)||!(i>=kt(64,64)))throw new RangeError("Shadow page budget must fit at least one 64-square page");if(!Number.isFinite(n)||n<64)throw new RangeError("Maximum shadow page size must be finite and at least 64");if(r.shadowMap.type!==Cn)throw new Error("Tiled shadow reference requires the shared PCF shadow path");this.maxMapSize=Math.max(64,2**Math.floor(Math.log2(Math.min(n,r.capabilities.maxTextureSize,Math.sqrt(i/8)))))}pages=new Map;activePageIds=new Set;activeSamples=1;prewarmPageIds=new Set;prewarmSamples=1;prewarmRevision=0;prewarmSink=null;prewarmCamera=new Hl([]);cache=new Sp;scratchBytes=0;depthRenders=0;colorPasses=0;disposed=!1;streamedTarget=null;maxMapSize;setView(e,r,i,n,s,a){if(this.disposed)return;if(this.clearPrewarmView(),![s.directionToSun.x,s.directionToSun.y,s.directionToSun.z].every(Number.isFinite)||s.directionToSun.lengthSq()===0||s.directionToSun.y<=0)throw new RangeError("Tiled shadow reference requires a finite sun direction above the horizon");const o=sd(e,r,i,n);this.activePageIds=new Set(o.map(({id:l})=>l));for(const l of o)this.configurePage(l,s,a);const c=Math.max(32,this.activePageIds.size*2);for(const[l,u]of this.pages){if(this.pages.size<=c)break;this.activePageIds.has(l)||(this.cache.invalidate(l),u.controller.dispose(),this.pages.delete(l))}this.updateActiveVariants(),this.scratchBytes=Math.max(0,...Array.from(this.activePageIds,l=>{const u=this.pages.get(l);return kt(u.width,u.height)})),this.streamedTarget&&kt(this.streamedTarget.width,this.streamedTarget.height)>this.scratchBytes&&(Nt(this.streamedTarget),this.streamedTarget=null),this.cache.setBudget(this.memoryBudgetBytes,this.reservedBytes)}updatePresentation(e){if(this.disposed)return;e.updateMatrixWorld(!0);const r=new J().multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i=new Gr().setFromProjectionMatrix(r),n=new Set;for(const[s,a]of this.pages)i.intersectsBox(a.receiverBounds)&&(a.screenBounds.copy(lc(a.receiverBounds,r)),n.add(s));this.activePageIds=n,this.updateActiveVariants()}get reservedBytes(){return this.scratchBytes+(this.prewarmSink?qn:0)}setPrewarmView(e,r,i,n,s,a){if(this.clearPrewarmView(),this.disposed)return;if(!Number.isSafeInteger(a)||a<1||a>4096||!(n>0&&Number.isFinite(n))||![i.x,i.y].every(l=>l>0&&Number.isFinite(l))||!s.directionToSun.toArray().every(Number.isFinite)||s.directionToSun.y<=0)throw new RangeError("Invalid shadow prewarm view");const o=new J().multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),c=new Set;for(const{id:l,bounds:u}of e){if(c.has(l)||u.isEmpty()||![...u.min.toArray(),...u.max.toArray()].every(Number.isFinite))throw new RangeError("Prewarm cells require unique IDs and finite bounds");c.add(l)}this.prewarmSamples=a;for(const l of e){if(this.prewarmPageIds.size>=wp)break;this.activePageIds.has(l.id)||!this.pages.has(l.id)&&this.pages.size>=Math.max(32,this.activePageIds.size*2)||(this.configurePage({...l,screenBounds:new te,groundTexelTargetMeters:Math.max(1e-9,2*n/uc(l.bounds,o,i))},s),this.prewarmPageIds.add(l.id))}}clearPrewarmView(){this.prewarmPageIds.clear(),this.prewarmRevision+=1}get prewarmPages(){const e=[...this.prewarmPageIds].map(i=>{const n=this.pages.get(i),s=this.countPrewarmSamples(i,n);return{id:i,receiverBounds:n.receiverBounds.clone(),casterBounds:n.casterBounds.clone(),width:n.width,height:n.height,samples:this.prewarmSamples,cachedSamples:s,sampleBudget:s,limited:n.limited,canPrewarm:!1}});let r=this.cache.availableBytes-(this.prewarmSink?0:qn);for(;r>0;){const i=e.filter(n=>n.sampleBudget<n.samples&&kt(n.width,n.height)<=r).sort((n,s)=>n.sampleBudget-s.sampleBudget);if(i.length===0)break;for(const n of i){const s=kt(n.width,n.height);s>r||(n.sampleBudget+=1,r-=s)}}return e.map(i=>({...i,canPrewarm:i.sampleBudget>i.cachedSamples}))}canPrewarm(e){return!this.disposed&&this.prewarmPages.some(r=>r.id===e&&r.canPrewarm)}countPrewarmSamples(e,r){const i=JSON.stringify([e,r.projectionKey,this.prewarmSamples]);let n=0;for(let s=0;s<this.prewarmSamples;s+=1)this.cache.has(JSON.stringify([i,s]))&&(n+=1);return n}prewarmNext(e,r,i={}){var S,f;const n=this.pages.get(r),s=!this.disposed&&this.prewarmPageIds.has(r)&&!!n,a=(v,b=!1)=>{var C;const A=s?this.countPrewarmSamples(r,n):0;return{pageId:r,rendered:v,cachedSamples:A,totalSamples:s?this.prewarmSamples:0,complete:s&&A===this.prewarmSamples,budgetLimited:b,aborted:((C=i.signal)==null?void 0:C.aborted)===!0}};if(!s||(S=i.signal)!=null&&S.aborted)return a(0);const o=this.prewarmRevision,c=n.contentRevision;if(this.renderer.shadowMap.type!==Cn)throw new Error("Shadow prewarm requires the shared PCF shadow path");const l=JSON.stringify([r,n.projectionKey,this.prewarmSamples]);let u=0;for(;u<this.prewarmSamples&&this.cache.has(JSON.stringify([l,u]));)u+=1;if(u===this.prewarmSamples)return a(0);if(!this.canPrewarm(r)||kt(n.width,n.height)+(this.prewarmSink?0:qn)>this.cache.availableBytes)return a(0,!0);this.prewarmSink||(this.prewarmSink=new Ke(1,1,{depthBuffer:!1}),this.cache.setBudget(this.memoryBudgetBytes,this.reservedBytes));const g=n.controller.lights[0];this.prewarmSamples===1?n.controller.restoreSunDiscCenter():n.controller.applySunDiscSample(u,this.prewarmSamples),g.shadow.map=null,g.shadow.needsUpdate=!0;const p=g.visible;g.visible=!0,this.prewarmCamera.layers.mask=e.layers.mask,this.prewarmCamera.matrixAutoUpdate=!1,this.prewarmCamera.matrixWorldAutoUpdate=!1,this.prewarmCamera.matrixWorld.copy(e.matrixWorld),this.prewarmCamera.matrixWorldInverse.copy(e.matrixWorldInverse),this.prewarmCamera.projectionMatrix.copy(e.projectionMatrix);let h=0;try{this.renderPrewarmDepth(g);const v=g.shadow.map;v&&(h=1,this.depthRenders+=1,((f=i.signal)!=null&&f.aborted||o!==this.prewarmRevision||c!==n.contentRevision||!this.prewarmPageIds.has(r)||!this.cache.admit(JSON.stringify([l,u]),r,v,l,{evictInactive:!1}))&&Nt(v))}catch(v){throw g.shadow.map&&Nt(g.shadow.map),v}finally{g.visible=p,g.shadow.map=null}return a(h)}renderPrewarmDepth(e){const{renderer:r,scene:i}=this,n=r.getContext(),s=r.getRenderTarget(),a=r.getActiveCubeFace(),o=r.getActiveMipmapLevel(),c=r.getViewport(new te),l=r.getScissor(new te),u=r.getScissorTest(),d=n.getParameter(n.DRAW_FRAMEBUFFER_BINDING),g=n.getParameter(n.READ_FRAMEBUFFER_BINDING),p=new te().fromArray(n.getParameter(n.VIEWPORT)),h=new te().fromArray(n.getParameter(n.SCISSOR_BOX)),S=n.isEnabled(n.SCISSOR_TEST),f=n.isEnabled(n.DEPTH_TEST),v=n.getParameter(n.DEPTH_RANGE),b=n.getParameter(n.DEPTH_WRITEMASK),A=n.getParameter(n.DEPTH_FUNC),C=n.getParameter(n.DEPTH_CLEAR_VALUE),M=n.getParameter(n.COLOR_CLEAR_VALUE),I=n.getParameter(n.COLOR_WRITEMASK),R=r.clippingPlanes,L=r.autoClear,U=i.background,B=r.xr.enabled,G=r.shadowMap.enabled,W=r.shadowMap.autoUpdate,re=r.shadowMap.needsUpdate,Te=[];i.traverse(E=>{const Q=E;Q.isLight&&Q.castShadow&&Q!==e&&Te.push(Q)});try{r.resetState(),r.autoClear=!1,r.xr.enabled=!1,r.shadowMap.enabled=!0,r.shadowMap.autoUpdate=!0;for(const E of Te)E.castShadow=!1;i.background=null,r.clippingPlanes=R,r.setRenderTarget(this.prewarmSink),n.depthRange(0,1),r.render(i,this.prewarmCamera)}finally{r.clippingPlanes=R,r.autoClear=L,r.xr.enabled=B,r.shadowMap.enabled=G,r.shadowMap.autoUpdate=W,r.shadowMap.needsUpdate=re;for(const E of Te)E.castShadow=!0;i.background=U,r.resetState(),r.setRenderTarget(s,a,o),r.setViewport(c),r.setScissor(l),r.setScissorTest(u),r.state.bindFramebuffer(n.DRAW_FRAMEBUFFER,d),r.state.bindFramebuffer(n.READ_FRAMEBUFFER,g),r.state.viewport(p),r.state.scissor(h),r.state.setScissorTest(S),f?r.state.enable(n.DEPTH_TEST):r.state.disable(n.DEPTH_TEST),n.depthRange(v[0],v[1]),n.depthMask(b),n.depthFunc(A),n.clearDepth(C),n.clearColor(M[0],M[1],M[2],M[3]),n.colorMask(I[0],I[1],I[2],I[3])}}configurePage(e,r,i){let n=this.pages.get(e.id);if(!n){const u=new tl(this.host);u.setMaxShadowMapSize(this.maxMapSize),u.setSoftSun(!0),n={controller:u,projectionKey:"",lightingKey:"",presentationKey:"",corridor:new Fe,planes:[],width:0,height:0,limited:!1,screenBounds:e.screenBounds,receiverBounds:e.bounds.clone(),groundTexelTargetMeters:e.groundTexelTargetMeters,casterBounds:new Fe,contentRevision:0,casterRevision:null}}this.pages.delete(e.id),this.pages.set(e.id,n);const s=n.controller.update({...r,maxReceiverBiasMeters:i?i(e.bounds,e.groundTexelTargetMeters):r.maxReceiverBiasMeters,receiverWorldPoints:$r(e.bounds),receiverAnchorWorldPosition:e.bounds.getCenter(new T),minimumElevationMeters:e.bounds.min.y,maximumElevationMeters:e.bounds.max.y,quality:4,groundTexelFit:!0,groundTexelTargetMeters:e.groundTexelTargetMeters});if(!s)return;const a=n.controller.lights[0];a.visible=!1;const o=s.camera,c=e.receiverObjectId===void 0?"spatial-partition-v1":"native-object-v1",l=JSON.stringify([c,o.viewMatrixElements,o.projectionMatrixElements,o.shadowMapWidth,o.shadowMapHeight,a.shadow.bias,a.shadow.normalBias,e.bounds.min,e.bounds.max]);n.projectionKey=l,n.lightingKey=JSON.stringify([r.directionToSun,r.shadowIntensity,e.bounds.min,e.bounds.max]),n.presentationKey=JSON.stringify([c,r.directionToSun,r.shadowIntensity,e.bounds.min.x,e.bounds.min.z,e.bounds.max.x,e.bounds.max.z]),n.receiverBounds.copy(e.bounds),n.receiverObjectId=e.receiverObjectId,n.groundTexelTargetMeters=e.groundTexelTargetMeters,n.screenBounds=e.screenBounds,n.width=o.shadowMapWidth,n.height=o.shadowMapHeight,n.limited=(o.groundTexelWidthMeters??1/0)>e.groundTexelTargetMeters*1.001||(o.groundTexelHeightMeters??1/0)>e.groundTexelTargetMeters*1.001,n.casterBounds.copy(ad(e.bounds,r.directionToSun,s.casterReachMeters+e.bounds.getSize(new T).length(),Fr,o.guardMeters)),n.corridor.union(n.casterBounds),n.planes=[new ut(new T(1,0,0),-e.bounds.min.x),new ut(new T(-1,0,0),e.bounds.max.x),new ut(new T(0,0,1),-e.bounds.min.z),new ut(new T(0,0,-1),e.bounds.max.z)]}invalidateCasters(e){const r=e instanceof Fe?[e]:e,i=[];for(const[n,s]of this.pages)r.some(a=>s.corridor.intersectsBox(a))&&(s.contentRevision+=1,this.cache.invalidate(n),i.push(n));return i}setCasterRevision(e,r){const i=this.pages.get(e);return!i||r===null||i.casterRevision===r?!1:(i.casterRevision=r,i.contentRevision+=1,this.cache.invalidate(e),!0)}renderSample(e,r,i){this.renderSamples(e,this.activePageIds,r,i)}renderPageSample(e,r,i,n,s){return this.disposed||!this.activePageIds.has(r)?!1:this.renderSamples(e,[r],i,n,s)>0}renderPageColor(e,r){const i=this.pages.get(r);if(this.disposed||!i||!this.activePageIds.has(r))return!1;const{renderer:n,scene:s}=this,a=n.clippingPlanes,o=n.autoClear,c=s.background,l=n.shadowMap.autoUpdate,u=n.shadowMap.needsUpdate;n.autoClear=!1,n.shadowMap.autoUpdate=!1,n.shadowMap.needsUpdate=!1,n.clippingPlanes=[...a,...i.planes],s.background=null;try{const d=wo(s,i.receiverObjectId,n,e,"color-only");return d&&(this.colorPasses+=1),d}finally{n.clippingPlanes=a,n.autoClear=o,n.shadowMap.autoUpdate=l,n.shadowMap.needsUpdate=u,s.background=c}}get accumulationPages(){return[...this.activePageIds].map(e=>{const r=this.pages.get(e),i=r.controller.lights[0];return{id:e,receiverObjectId:r.receiverObjectId,contentKey:JSON.stringify([r.lightingKey,r.contentRevision]),casterRevision:r.casterRevision,presentationKey:r.presentationKey,revision:JSON.stringify([r.projectionKey,r.contentRevision,i.color.toArray(),i.intensity,i.shadow.intensity]),screenBounds:r.screenBounds.clone(),receiverBounds:r.receiverBounds.clone(),groundTexelTargetMeters:r.groundTexelTargetMeters}})}areCastersReady(e,r){const i=this.pages.get(e);return!!(i&&r(i.casterBounds))}getPageGeometry(e){const r=this.pages.get(e);return r?{casterBounds:r.casterBounds.clone(),receiverBounds:r.receiverBounds.clone(),width:r.width,height:r.height,projectionKey:r.projectionKey}:null}get supportsOpaqueAccumulation(){let e=!0;return this.scene.traverseVisible(r=>{const i=r;if(!(!i.isMesh||!i.receiveShadow))for(const n of Array.isArray(i.material)?i.material:[i.material])n.visible&&(n.transparent||!n.depthWrite||!n.depthTest)&&(e=!1)}),e}renderSamples(e,r,i,n,s){if(this.disposed)return 0;if(this.renderer.shadowMap.type!==Cn)throw new Error("Shadow page cache must be recreated after changing the depth/filter format");if(!Number.isInteger(n)||n<1||!Number.isInteger(i)||i<0||i>=n)throw new RangeError("Shadow sample must lie within its finite-disc sequence");n!==this.activeSamples&&(this.activeSamples=n,this.updateActiveVariants());const{renderer:a,scene:o}=this,c=a.clippingPlanes,l=a.autoClear,u=o.background,d=a.getRenderTarget(),g=d==null?void 0:d.scissor.clone(),p=d==null?void 0:d.scissorTest;let h=0;a.autoClear=!1,o.background=null;try{for(const S of r){const f=this.pages.get(S),v=f.controller.lights[0];n===1?f.controller.restoreSunDiscCenter():f.controller.applySunDiscSample(i,n);const b=JSON.stringify([S,f.projectionKey,n]),A=JSON.stringify([b,i]),C=this.cache.get(A);if(!C&&this.streamedTarget&&(this.streamedTarget.width!==f.width||this.streamedTarget.height!==f.height)&&(Nt(this.streamedTarget),this.streamedTarget=null),v.shadow.map=C??this.streamedTarget,C||(this.streamedTarget=null),v.shadow.needsUpdate=!C,v.visible=!0,a.clippingPlanes=[...c,...f.planes],d){const{x:M,y:I,z:R,w:L}=s??f.screenBounds,U=Math.floor(M*d.width),B=Math.floor(I*d.height);d.scissor.set(U,B,Math.ceil((M+R)*d.width)-U,Math.ceil((I+L)*d.height)-B),d.scissorTest=!0,a.setRenderTarget(d)}try{if(wo(o,f.receiverObjectId,a,e)&&(this.colorPasses+=1,h+=1),!C&&v.shadow.map){this.depthRenders+=1;const I=v.shadow.map;this.cache.admit(A,S,I,b)||(this.streamedTarget=I)}}catch(M){throw!C&&v.shadow.map&&Nt(v.shadow.map),M}finally{v.visible=!1,v.shadow.map=null}}}finally{a.clippingPlanes=c,a.autoClear=l,o.background=u,d&&g&&(d.scissor.copy(g),d.scissorTest=p??!1,a.setRenderTarget(d))}return h}get stats(){const e=[...this.activePageIds].map(r=>this.pages.get(r));return{pages:e.length,cachedSamplePages:this.cache.count,cacheBytes:this.cache.bytes,scratchBytes:this.reservedBytes,hits:this.cache.hits,misses:this.cache.misses,depthRenders:this.depthRenders,colorPasses:this.colorPasses,limitedPages:e.filter(r=>r.limited).length,dimensions:e.map(r=>`${r.width}×${r.height}`)}}clearCache(){this.cache.clear();for(const e of this.pages.values())e.contentRevision+=1}updateActiveVariants(){this.cache.setActiveVariants(new Set([...this.activePageIds].flatMap(e=>[...new Set([1,this.activeSamples])].map(r=>JSON.stringify([e,this.pages.get(e).projectionKey,r])))))}get pageLevels(){return[...this.activePageIds].map(e=>{const r=this.pages.get(e);return{id:e,level:Math.max(0,Math.round(Math.log2(this.maxMapSize/Math.max(r.width,r.height)))),width:r.width,height:r.height}})}dispose(){var e;if(!this.disposed){this.disposed=!0,this.cache.clear(),this.streamedTarget&&Nt(this.streamedTarget),this.streamedTarget=null,(e=this.prewarmSink)==null||e.dispose(),this.prewarmSink=null,this.clearPrewarmView(),this.scratchBytes=0;for(const r of this.pages.values())r.controller.dispose();this.pages.clear(),this.activePageIds.clear()}}}const xp=async({pages:t,signal:e,prepare:r,render:i,yieldToInput:n})=>{let s=0,a=0,o=0,c=!1;try{for(const l of t){if(e.aborted)break;if(l.cachedSamples>=l.samples){s+=1;continue}if(!l.canPrewarm){c=!0;continue}if(await n(e),e.aborted)break;const u=await r(l,e);try{if(e.aborted)break;if(!u.covered||!u.isCurrent()){a+=1;continue}const d=Math.min(l.samples,l.sampleBudget);d<l.samples&&(c=!0);for(let g=l.cachedSamples;g<d&&(await n(e),!(e.aborted||!u.isCurrent()));g+=1){const p=i(l.id,u.group,e);if(o+=p.rendered,p.complete){s+=1;break}if(p.budgetLimited){c=!0;break}if(p.aborted||!p.rendered)break}}finally{u.dispose()}}}catch(l){if(!e.aborted)throw l}return{offered:t.length,completed:s,skippedCoverage:a,renderedSamples:o,budgetLimited:c,aborted:e.aborted}},Tp=t=>{const e=globalThis.scheduler;return e!=null&&e.postTask?e.postTask(()=>{},{priority:"background",delay:0,signal:t}):Promise.reject(new Error("Background scheduler unavailable"))},bp=({getRequest:t})=>{let e=!1,r=null,i=null,n=!1;const s=()=>{n=!1,i==null||i.abort()},a=()=>{if(!e){if(i){n=!0;return}try{const o=globalThis.scheduler;if(typeof(o==null?void 0:o.postTask)!="function")return;const c=t();if(!c||c.key===r)return;r=c.key;const l=new AbortController;i=l;let u=!1;const d=()=>{if(i!==l||u)return;i=null;const g=n;n=!1,g&&a()};try{o.postTask(async()=>{if(e||l.signal.aborted)return;const g=t();if(!(!g||g.key!==c.key)){u=!0;try{await g.run(l.signal)}finally{u=!1,d()}}},{priority:"background",delay:150,signal:l.signal}).then(d,d)}catch{d()}}catch{}}};return{onSettled:a,cancel:s,dispose(){e=!0,s()}}},rl=(t,e,r)=>JSON.stringify([t.matrixWorldInverse.elements,t.projectionMatrix.elements,e,r]),Mp=(t,e)=>{if(!Number.isFinite(e)||e<t.length*8)throw new RangeError("Capture budget must fit at least one scalar/depth pixel per page");const r=[...t].sort((n,s)=>n.id<s.id?-1:n.id>s.id?1:0).map(({id:n,plan:s,screenArea:a})=>({id:n,plan:s,width:s.width,height:s.height,weight:2**Math.floor(Math.log2(Math.max(1/65536,Math.min(1,a))))}));let i=r.reduce((n,s)=>n+s.width*s.height,0);for(;i*8>e;){let n;for(const a of r)a.width===1&&a.height===1||(!n||a.width*a.height/a.weight>n.width*n.height/n.weight)&&(n=a);if(!n)break;const s=n.width*n.height;n.width>=n.height&&n.width>1?n.width/=2:n.height/=2,i-=s-n.width*n.height}return new Map(r.map(({id:n,plan:s,width:a,height:o})=>[n,a===s.width&&o===s.height?s:{...s,width:a,height:o,limited:!0,key:rl(s.camera,a,o)}]))},Ep=(t,e,r)=>{const{groundTexelTargetMeters:i,maximumDimension:n,maximumPixels:s}=r;if(t.isEmpty()||![...t.min.toArray(),...t.max.toArray(),...e.toArray()].every(Number.isFinite)||!(i>0&&Number.isFinite(i))||!(n>=1&&Number.isFinite(n))||!(s>=1&&Number.isFinite(s)))throw new RangeError("Receiver capture requires finite bounds and positive allocation limits");const a=t.getCenter(new T),o=t.getSize(new T).length()*.5,c=Math.max(.001,o*.001),l=new Ms;l.quaternion.copy(e).normalize(),l.position.copy(a).add(new T(0,0,o+c+1).applyQuaternion(l.quaternion)),l.updateMatrixWorld(!0);const u=new Fe().setFromPoints($r(t).map(v=>v.applyMatrix4(l.matrixWorldInverse)));l.left=u.min.x-c,l.right=u.max.x+c,l.bottom=u.min.y-c,l.top=u.max.y+c,l.near=Math.max(.001,-u.max.z-c),l.far=Math.max(l.near+.001,-u.min.z+c),l.updateProjectionMatrix();const d=v=>2**Math.ceil(Math.log2(Math.max(1,v/i))),g=d(l.right-l.left),p=d(l.top-l.bottom),h=2**Math.floor(Math.log2(n));let S=Math.min(g,h),f=Math.min(p,h);for(;S*f>s;)S>=f&&S>1?S/=2:f/=2;return{camera:l,width:S,height:f,limited:S<g||f<p,key:rl(l,S,f)}},Rp=t=>new zl().setFromRotationMatrix(new J().extractRotation(t.matrixWorld)),Ui={namespace:"shadow-corridor-visibility",schema:"visibility-depth-world-basis-v1",maximumPayloadBytes:32*1024**2,maximumRecordBytes:33*1024**2,maximumIdentityCharacters:65536},_i={read:"read",write:"write",writePacked:"write-packed"},$e=t=>{if(!t||!Number.isInteger(t.samples)||t.samples<1||t.samples>4096)return null;const e=[t.source,t.dateTime,t.corridor,t.resolution,t.geometryFingerprint];return e.some(r=>typeof r!="string"||r.length===0)||e.reduce((r,i)=>r+i.length,0)>Ui.maximumIdentityCharacters?null:JSON.stringify([Ui.schema,...e,t.samples])},Xn=(t,e)=>Array.isArray(t)&&t.length===e&&t.every(Number.isFinite),il=t=>{if(!t||typeof t!="object")return!1;const e=t,r=e.width*e.height;return Number.isSafeInteger(e.width)&&e.width>0&&Number.isSafeInteger(e.height)&&e.height>0&&Number.isSafeInteger(r)&&r*8<=Ui.maximumPayloadBytes&&Xn(e.captureMatrix,16)&&Xn(e.worldBasis,16)&&Xn(e.crop,4)&&e.crop[0]>=0&&e.crop[1]>=0&&e.crop[2]>0&&e.crop[3]>0&&e.crop[0]+e.crop[2]<=1.000001&&e.crop[1]+e.crop[3]<=1.000001},_o=t=>{if(!il(t))return!1;const e=t,r=e.width*e.height;return e.visibility instanceof Float32Array&&e.visibility.length===r&&e.depth instanceof Float32Array&&e.depth.length===r},Ap=t=>{if(!il(t))return!1;const e=t;return e.rgba instanceof Float32Array&&e.rgba.length===e.width*e.height*4},Er=64,_s=256*1024**2,Qn=_s,Cp=128*1024**2,xo=8,To=32*1024**2,Ip=4,Rr=t=>{var e;t.target?((e=t.target.depthTexture)==null||e.dispose(),t.target.dispose()):(t.visibility.dispose(),t.depth.dispose())},Dp=(t,e)=>t.elements.every((r,i)=>Number.isFinite(r)&&Math.abs(r-e.elements[i])<=1e-10*Math.max(1,Math.abs(r)));class nl{constructor(e){this.renderer=e,this.copyQuad.frustumCulled=!1,this.copyScene.add(this.copyQuad)}captures=new Map;visiblePageIds=new Set;samples=0;replayCount=0;matchingPages=0;persistence;persistenceGeneration=0;disposed=!1;restoreAttempts=new Set;pendingRestores=new Map;restoreRequests=new Map;pendingWrites=new Map;persistenceOffers=new WeakMap;persistenceAttempted=new WeakSet;persistenceTimer=null;readbackBusy=!1;readbackBytes=0;packMaterial=new ir({uniforms:{visibility:{value:null},depth:{value:null}},vertexShader:"varying vec2 uvCopy; void main() { uvCopy = position.xy * 0.5 + 0.5; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:"uniform sampler2D visibility; uniform sampler2D depth; varying vec2 uvCopy; void main() { gl_FragColor = vec4(texture2D(visibility, uvCopy).r, texture2D(depth, uvCopy).r, 0.0, 1.0); }",depthTest:!1,depthWrite:!1,blending:bi,toneMapped:!1});materials=new Map;unsupportedMaterials=new WeakSet;captureSupported=!0;contentRevision=0;get revision(){return this.contentRevision}get supportsCapture(){return this.captureSupported}copyScene=new Br;copyCamera=new ki;copyMaterial=new ir({uniforms:{source:{value:null},crop:{value:new te}},vertexShader:"varying vec2 uvCopy; void main() { uvCopy = position.xy * 0.5 + 0.5; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:"uniform sampler2D source; uniform vec4 crop; varying vec2 uvCopy; void main() { gl_FragColor = vec4(texture2D(source, crop.xy + uvCopy * crop.zw).r, 0.0, 0.0, 1.0); }",depthTest:!1,depthWrite:!1,blending:bi,toneMapped:!1});copyQuad=new Wr(new xs(2,2),this.copyMaterial);downsampleMaterial=new ir({uniforms:{source:{value:null},depth:{value:null},texel:{value:new Lt}},vertexShader:"varying vec2 uvCopy; void main() { uvCopy = position.xy * 0.5 + 0.5; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:`uniform sampler2D source; uniform sampler2D depth;
      uniform vec2 texel; varying vec2 uvCopy;
      void main() {
        vec2 d = texel * 0.25;
        float visibility = (texture2D(source, uvCopy + d).r
          + texture2D(source, uvCopy - d).r
          + texture2D(source, uvCopy + vec2(d.x, -d.y)).r
          + texture2D(source, uvCopy + vec2(-d.x, d.y)).r) * 0.25;
        gl_FragColor = vec4(visibility, 0.0, 0.0, 1.0);
        gl_FragDepth = texture2D(depth, uvCopy).r;
      }`,depthTest:!0,depthFunc:qo,depthWrite:!0,blending:bi,toneMapped:!1});uniforms={carmaCaptureVisibility:{value:!1},carmaRetainedEnabled:{value:!1},carmaRetainedColor:{value:null},carmaRetainedDepth:{value:null},carmaRetainedMatrix:{value:new J},carmaRetainedCrop:{value:new te(0,0,1,1)},carmaRetainedCount:{value:0},carmaRetainedBounds:{value:Array.from({length:Er},()=>new te)}};get memoryBytes(){return[...this.captures.values()].reduce((e,r)=>e+r.bytes,this.readbackBytes)}getCapturedSize(e){const r=this.captures.get(e);return r?{width:r.width,height:r.height,samples:r.samples}:null}get stats(){return{pages:this.captures.size,samples:this.samples,matchingPages:this.matchingPages,replays:this.replayCount,bytes:this.memoryBytes}}beginFrame(e=[]){this.matchingPages=0,this.visiblePageIds=new Set(e.map(r=>r.id)),this.schedulePersistence()}has(e,r){var n;const i=this.captures.get(e.id);if(!this.canReplay(e)||(i==null?void 0:i.casterRevision)!==e.casterRevision)return!1;if(i&&i.samples>1&&i.samples>=r&&e.captureSize&&e.presentationKey&&i.crop.x===0&&i.crop.y===0&&i.crop.z===1&&i.crop.w===1)return i.width>=e.captureSize.width&&i.height>=e.captureSize.height;if(i!=null&&i.restored){const s=this.restoreRequests.get(e.id),a=(n=this.persistence)==null?void 0:n.identity(e,r);if(e.ready===!1||!(s!=null&&s.expected)||!a||$e(a)!==i.persistentKey||!Dp(i.matrix,s.expected))return!1;const o=e.screenBounds,c=i.crop;if(c.x>o.x+1e-6||c.y>o.y+1e-6||c.x+c.z<o.x+o.z-1e-6||c.y+c.w<o.y+o.w-1e-6)return!1}return(i==null?void 0:i.revision)===(e.contentKey??e.revision)&&i.samples===r}hasAtLeast(e,r){const i=this.captures.get(e.id);return!!(i&&i.samples>=r&&this.has(e,i.samples))}downsample(e,r,i){var f;if(!Number.isInteger(r)||!Number.isInteger(i)||r<1||i<1)return!1;const n=this.captures.get(e.id);if(!n||!this.canReplay(e))return!1;const s=Math.max(r,Math.ceil(n.width/2)),a=Math.max(i,Math.ceil(n.height/2));if(s>n.width||a>n.height||s*a>=n.width*n.height)return!1;const o=new Ke(s,a,{type:Et,format:tr,minFilter:De,magFilter:De,depthTexture:new sr(s,a,Vt),samples:0}),c=this.renderer,l=c.getRenderTarget(),u=c.getActiveCubeFace(),d=c.getActiveMipmapLevel(),g=c.getViewport(new te),p=c.getScissor(new te),h=c.getScissorTest(),S=c.autoClear;try{c.initRenderTarget(o),this.downsampleMaterial.uniforms.source.value=n.visibility,this.downsampleMaterial.uniforms.depth.value=n.depth,this.downsampleMaterial.uniforms.texel.value.set(1/s,1/a),this.copyQuad.material=this.downsampleMaterial,c.autoClear=!1,c.setRenderTarget(o),c.setViewport(new te(0,0,s,a)),c.setScissorTest(!1),c.render(this.copyScene,this.copyCamera)}catch(v){throw(f=o.depthTexture)==null||f.dispose(),o.dispose(),v}finally{this.copyQuad.material=this.copyMaterial,c.setRenderTarget(l,u,d),c.setViewport(g),c.setScissor(p),c.setScissorTest(h),c.autoClear=S}return this.captures.set(e.id,{...n,target:o,visibility:o.texture,depth:o.depthTexture,width:s,height:a,bytes:s*a*8}),this.pendingWrites.delete(e.id),Rr(n),this.contentRevision+=1,!0}isRestorePending(e,r){var s;const i=this.pendingRestores.get(e.id);if(!i||i.samples!==r)return!1;const n=(s=this.persistence)==null?void 0:s.identity(e,r);return!!(n&&$e(n)===i.key)}setPersistence(e){this.persistence!==e&&(this.cancelPendingPersistence(),this.persistence=e)}cancelPendingPersistence(){var e;(e=this.persistence)==null||e.cache.cancelPending(),this.persistenceGeneration+=1,this.restoreAttempts.clear(),this.pendingRestores.clear(),this.restoreRequests.clear(),this.pendingWrites.clear(),this.persistenceOffers=new WeakMap,this.persistenceAttempted=new WeakSet,this.persistenceTimer!==null&&clearTimeout(this.persistenceTimer),this.persistenceTimer=null}beginSolarTransition(){this.cancelPendingPersistence()}canPresent(e){return this.canReplay(e)}prepareRestore(e,r,i){if(this.disposed)return;if(this.restoreRequests.set(e.id,{page:e,samples:r,expected:i==null?void 0:i.clone()}),this.restoreRequests.size>Er*2){for(const l of this.restoreRequests.keys())if(l!==e.id&&!this.visiblePageIds.has(l)){this.restoreRequests.delete(l);break}}const n=this.persistence;if(!(n!=null&&n.cache.enabled)||n.cache.busy||e.ready===!1||this.hasAtLeast(e,r))return;const s=n.identity(e,r),a=s&&$e(s);if(!s||!a||this.restoreAttempts.has(a))return;this.restoreAttempts.add(a),this.restoreAttempts.size>Er*4&&this.restoreAttempts.delete(this.restoreAttempts.values().next().value);const o=this.persistenceGeneration,c=this.captures.get(e.id);this.pendingRestores.set(e.id,{key:a,samples:r}),n.cache.read(s).then(l=>{const u=this.restoreRequests.get(e.id),d=u&&n.identity(u.page,r);if(!l||this.disposed||this.persistenceGeneration!==o||this.persistence!==n||!u||u.page.ready===!1||!d||$e(d)!==a||this.captures.get(e.id)!==c)return;const g=new J().fromArray(l.worldBasis),p=n.worldBasis();if(!g.elements.every(Number.isFinite)||g.determinant()===0||!p.elements.every(Number.isFinite)||p.determinant()===0)return;const h=new J().fromArray(l.captureMatrix).multiply(g.invert()).multiply(p),S=[...new Set([l.visibility.buffer,l.depth.buffer])].reduce((A,C)=>A+C.byteLength,0),f=l.width*l.height*xo+S;if(!this.admit(e.id,f))return;const v=new ss(l.visibility,l.width,l.height,tr,Et),b=new ss(l.depth,l.width,l.height,tr,Et);for(const A of[v,b])A.minFilter=De,A.magFilter=De,A.generateMipmaps=!1,A.needsUpdate=!0;c&&Rr(c),this.captures.delete(e.id),this.captures.set(e.id,{target:null,visibility:v,depth:b,width:l.width,height:l.height,bytes:f,restored:!0,persistentKey:a,persistentIdentity:l.identity,revision:u.page.contentKey??u.page.revision,casterRevision:u.page.casterRevision,presentationKey:u.page.presentationKey??u.page.contentKey??u.page.revision,samples:l.identity.samples,matrix:h,crop:new te().fromArray(l.crop)}),this.samples=l.identity.samples,this.contentRevision+=1}).catch(()=>{}).finally(()=>{var l,u;!this.disposed&&o===this.persistenceGeneration&&(((l=this.pendingRestores.get(e.id))==null?void 0:l.key)===a&&this.pendingRestores.delete(e.id),(u=n.requestRepaint)==null||u.call(n),this.schedulePersistence())})}admit(e,r,i=!1){var a;const n=i?Math.min(((a=this.captures.get(e))==null?void 0:a.bytes)??0,Cp):0,s=Qn+n;for(const[o,c]of this.captures){if(r+this.memoryBytes<=s)break;o===e||this.visiblePageIds.has(o)||(Rr(c),this.captures.delete(o),this.contentRevision+=1,this.pendingWrites.delete(o))}return r+this.memoryBytes<=s}publish(e,r,i,n,s){var U;if(!this.captureSupported)return!1;const a=n.screenBounds,o=Math.max(0,Math.floor(a.x*e.width)),c=Math.max(0,Math.floor(a.y*e.height)),l=Math.min(e.width,Math.ceil((a.x+a.z)*e.width)),u=Math.min(e.height,Math.ceil((a.y+a.w)*e.height)),d=l-o,g=u-c,p=d*g*xo;if(d<=0||g<=0||p>Qn||!r.depthTexture||!this.admit(n.id,p,!0))return!1;const h=this.renderer,S=h.getRenderTarget(),f=h.getActiveCubeFace(),v=h.getActiveMipmapLevel(),b=h.getViewport(new te),A=h.getScissor(new te),C=h.getScissorTest(),M=h.autoClear,I=new Ke(d,g,{type:Et,format:tr,minFilter:De,magFilter:De,depthTexture:new sr(d,g,Vt),samples:0});try{h.initRenderTarget(I);const B=new Vl(new Lt(o,c),new Lt(l,u));this.copyMaterial.uniforms.source.value=e.texture,this.copyMaterial.uniforms.crop.value.set(o/e.width,c/e.height,d/e.width,g/e.height),h.autoClear=!1,h.setRenderTarget(I),h.setViewport(new te(0,0,d,g)),h.setScissorTest(!1),h.render(this.copyScene,this.copyCamera),h.copyTextureToTexture(r.depthTexture,I.depthTexture,B)}catch(B){throw(U=I.depthTexture)==null||U.dispose(),I.dispose(),B}finally{h.setRenderTarget(S,f,v),h.setViewport(b),h.setScissor(A),h.setScissorTest(C),h.autoClear=M}const R=this.captures.get(n.id);R&&Rr(R),this.samples=s,this.captures.delete(n.id);const L={target:I,visibility:I.texture,depth:I.depthTexture,width:d,height:g,bytes:p,restored:!1,revision:n.contentKey??n.revision,casterRevision:n.casterRevision,samples:s,presentationKey:n.presentationKey??n.contentKey??n.revision,matrix:new J().multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),crop:new te(o/e.width,c/e.height,d/e.width,g/e.height)};return this.captures.set(n.id,L),this.contentRevision+=1,this.queuePersistence(n,L),!0}queuePersistence(e,r){const i=this.persistence;if(!(i!=null&&i.cache.enabled)||e.ready===!1||this.disposed)return;const n=i.identity(e,r.samples),s=n&&$e(n),a=i.worldBasis();!n||n.samples!==r.samples||!s||!a.elements.every(Number.isFinite)||a.determinant()===0||r.width*r.height*16>To||(this.pendingWrites.delete(e.id),this.persistenceOffers.set(r,{page:e,capture:r,identity:n,key:s,worldBasis:[...a.elements]}),this.schedulePersistence())}schedulePersistence(){var e;if(!(this.disposed||this.persistenceTimer!==null||this.readbackBusy||!((e=this.persistence)!=null&&e.cache.enabled)||this.persistence.cache.busy)){for(const[r,i]of this.pendingWrites)this.captures.get(r)!==i.capture&&this.pendingWrites.delete(r);for(const r of[!0,!1])for(const[i,n]of this.captures){if(this.pendingWrites.size>=Ip)break;const s=this.persistenceOffers.get(n);this.visiblePageIds.has(i)===r&&s&&!this.persistenceAttempted.has(n)&&!this.pendingWrites.has(i)&&this.pendingWrites.set(i,s)}this.pendingWrites.size!==0&&(this.persistenceTimer=setTimeout(()=>{this.persistenceTimer=null,this.persistNextCapture()},0))}}persistNextCapture(){var h,S,f;const e=this.persistence;if(this.disposed||this.readbackBusy||!(e!=null&&e.cache.enabled)||e.cache.busy||typeof this.renderer.readRenderTargetPixelsAsync!="function")return;const r=[...this.pendingWrites.entries()].find(([v,b])=>this.captures.get(v)===b.capture);if(!r){this.pendingWrites.clear();return}const[i,n]=r,s=((h=this.restoreRequests.get(i))==null?void 0:h.page)??n.page,a=e.identity(s,n.capture.samples);if(s.ready===!1||!a||$e(a)!==n.key){this.pendingWrites.delete(i),this.persistenceAttempted.add(n.capture),this.schedulePersistence();return}const{capture:o}=n,c=o.width*o.height*16;if(c>To||this.memoryBytes+c*2>Qn){this.pendingWrites.delete(i),this.persistenceAttempted.add(o),this.schedulePersistence();return}const l=this.persistenceGeneration,u={target:null,pixels:null,reading:null},d=()=>{const v=this.renderer,b=v.getRenderTarget(),A=v.getActiveCubeFace(),C=v.getActiveMipmapLevel(),M=v.getViewport(new te),I=v.getScissor(new te),R=v.getScissorTest(),L=v.autoClear,U=this.copyQuad.material;try{u.target=new Ke(o.width,o.height,{format:kr,type:Et,depthBuffer:!1,minFilter:De,magFilter:De}),v.initRenderTarget(u.target),u.pixels=new Float32Array(o.width*o.height*4),this.packMaterial.uniforms.visibility.value=o.visibility,this.packMaterial.uniforms.depth.value=o.depth,this.copyQuad.material=this.packMaterial,v.autoClear=!1,v.setRenderTarget(u.target),v.setViewport(new te(0,0,o.width,o.height)),v.setScissorTest(!1),v.render(this.copyScene,this.copyCamera),u.reading=v.readRenderTargetPixelsAsync(u.target,0,0,o.width,o.height,u.pixels)}finally{this.copyQuad.material=U,v.setRenderTarget(b,A,C),v.setViewport(M),v.setScissor(I),v.setScissorTest(R),v.autoClear=L}};try{if(e.runIdleRender){if(!e.runIdleRender(d)&&!u.target)return}else d()}catch{(S=u.target)==null||S.dispose(),this.pendingWrites.delete(i),this.persistenceAttempted.add(o),this.schedulePersistence();return}if(!u.reading||!u.target||!u.pixels){(f=u.target)==null||f.dispose();return}const g=u.target,p=u.pixels;this.pendingWrites.delete(i),this.persistenceAttempted.add(o),this.readbackBusy=!0,this.readbackBytes=c*2,u.reading.then(async()=>{var A;const v=((A=this.restoreRequests.get(i))==null?void 0:A.page)??n.page,b=e.identity(v,o.samples);this.disposed||l!==this.persistenceGeneration||this.persistence!==e||v.ready===!1||!b||$e(b)!==n.key||await e.cache.writePacked(n.identity,{width:o.width,height:o.height,rgba:p,captureMatrix:[...o.matrix.elements],crop:o.crop.toArray(),worldBasis:n.worldBasis})}).catch(()=>{}).finally(()=>{var v;g.dispose(),this.readbackBusy=!1,this.readbackBytes=0,this.disposed||((v=e.requestRepaint)==null||v.call(e),this.schedulePersistence())})}canReplay(e){var i;const r=this.captures.get(e.id);if(!r||r.presentationKey!==(e.presentationKey??e.contentKey??e.revision))return!1;if(r.restored){const n=(i=this.persistence)==null?void 0:i.identity(e,r.samples),s=r.persistentIdentity;if(e.captureSize&&s)return!!(n&&n.source===s.source&&n.dateTime===s.dateTime&&n.corridor===s.corridor&&n.geometryFingerprint===s.geometryFingerprint&&n.samples===s.samples);if(!n||$e(n)!==r.persistentKey)return!1}return!0}activate(e){const r=this.captures.get(e.id);this.captures.delete(e.id),this.captures.set(e.id,r),this.uniforms.carmaRetainedMatrix.value.copy(r.matrix),this.uniforms.carmaRetainedCrop.value.copy(r.crop),this.uniforms.carmaRetainedColor.value=r.visibility,this.uniforms.carmaRetainedDepth.value=r.depth,this.matchingPages+=1,this.replayCount+=1,this.uniforms.carmaRetainedCount.value=1;const i=e.receiverBounds;this.uniforms.carmaRetainedBounds.value[0].set(i.min.x,i.min.z,i.max.x,i.max.z),this.uniforms.carmaRetainedEnabled.value=!0}renderNative(e,r,i){if(r.length===0)return i(),new Set;this.configureScene(e);const n=new Map(r.filter(u=>u.receiverObjectId!==void 0&&this.canPresent(u)).map(u=>[u.receiverObjectId,u])),s=[],a=new Map;e.traverseVisible(u=>{const d=u;if(!d.isMesh)return;let g;for(let p=d;p&&(g=n.get(p.id),!g);p=p.parent);s.push({mesh:d,page:g});for(const p of Array.isArray(d.material)?d.material:[d.material]){let h=a.get(p);h||a.set(p,h=new Set),h.add(g==null?void 0:g.id)}});const o=new Set;for(const u of a.values())if(!(u.size<2))for(const d of u)d!==void 0&&o.add(d);const c=new Set,l=[];for(const{mesh:u,page:d}of s){const g=u.onBeforeRender,p=d!==void 0&&!o.has(d.id);u.onBeforeRender=(...h)=>{g.call(u,...h),this.uniforms.carmaRetainedEnabled.value=!1,p&&this.activate(d)},p&&c.add(d.id),l.push(()=>{u.onBeforeRender=g})}this.uniforms.carmaRetainedEnabled.value=!1;try{return i(),c}finally{this.uniforms.carmaRetainedEnabled.value=!1;for(const u of l)u()}}render(e,r,i,n){if(!this.canPresent(r))return n();this.configureScene(e),this.activate(r);try{return n()}finally{this.uniforms.carmaRetainedEnabled.value=!1}}capture(e,r){this.captureSupported=!0,this.configureScene(e),this.uniforms.carmaCaptureVisibility.value=!0;try{return r()}finally{this.uniforms.carmaCaptureVisibility.value=!1}}configureScene(e){e.traverseVisible(r=>{const i=r;if(!(!i.isMesh||!i.receiveShadow)){if(i.isInstancedMesh||i.isSkinnedMesh){this.captureSupported=!1;return}for(const n of Array.isArray(i.material)?i.material:[i.material]){if(this.unsupportedMaterials.has(n)&&(this.captureSupported=!1),!(n.isMeshStandardMaterial||n.isMeshLambertMaterial||n.isMeshPhongMaterial)||n.transparent){this.captureSupported=!1;continue}this.materials.has(n)||this.configure(n)}}})}configure(e){const r=e.onBeforeCompile,i=e.customProgramCacheKey,n=this.uniforms,s=(l,u)=>{r.call(e,l,u);const d=/getShadow\( directionalShadowMap\[ i \][^;]+?\)/;if(!l.vertexShader.includes("#include <common>")||!l.vertexShader.includes("#include <project_vertex>")||!l.fragmentShader.includes("#include <common>")||!l.fragmentShader.includes("#include <lights_fragment_begin>")||!l.fragmentShader.includes("#include <dithering_fragment>")||!d.test(as.lights_fragment_begin)){this.unsupportedMaterials.add(e),this.captureSupported=!1;return}this.unsupportedMaterials.delete(e),Object.assign(l.uniforms,n),l.vertexShader=l.vertexShader.replace("#include <common>",`#include <common>
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
`);const g=as.lights_fragment_begin.replace(d,p=>`(carmaCapturedCoverage = ${p}, carmaRetainedCoverage(carmaCapturedCoverage))`);l.fragmentShader=l.fragmentShader.replace("#include <lights_fragment_begin>",`float carmaCapturedCoverage = 1.0;
${g}`).replace("#include <dithering_fragment>",`#include <dithering_fragment>
if (carmaCaptureVisibility) gl_FragColor.rgb = vec3(carmaCapturedCoverage);`)},a=()=>`${i.call(e)}|retained-corridor-visibility-v4`;e.onBeforeCompile=s,e.customProgramCacheKey=a,e.needsUpdate=!0;const o=()=>{e.onBeforeCompile===s&&(e.onBeforeCompile=r),e.customProgramCacheKey===a&&(e.customProgramCacheKey=i),e.removeEventListener("dispose",c),e.needsUpdate=!0},c=()=>{o(),this.materials.delete(e)};e.addEventListener("dispose",c),this.materials.set(e,o)}dispose(){this.disposed=!0,this.setPersistence(void 0);for(const e of this.captures.values())Rr(e);this.captures.clear(),this.uniforms.carmaRetainedEnabled.value=!1,this.uniforms.carmaRetainedColor.value=null,this.uniforms.carmaRetainedDepth.value=null,this.copyQuad.geometry.dispose(),this.copyMaterial.dispose(),this.downsampleMaterial.dispose(),this.packMaterial.dispose();for(const e of this.materials.values())e();this.materials.clear()}}const Ht=64,Ri=512*1024**2,tt={inactive:"inactive",dimensions:"dimensions",budget:"budget",msaa:"msaa",format:"format",receivers:"receivers",pages:"pages",renderer:"renderer",disposed:"disposed"},bo=`
  out vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`,Pp=`
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
`,Np=`
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
`;class Op{constructor(e,r){this.renderer=e,this.ownsPresentation=r===void 0,this.presentation=r??new nl(e),this.quad.frustumCulled=!1,this.fullscreenScene.add(this.quad)}fullscreenScene=new Br;fullscreenCamera=new Ms(-1,1,1,-1,0,1);blendMaterial=new ir({glslVersion:Ur,vertexShader:bo,fragmentShader:Pp,uniforms:{tPrevious:{value:null},tReference:{value:null},tReferenceDepth:{value:null},tSample:{value:null},tSampleDepth:{value:null},uInverseViewProjection:{value:new J},uBounds:{value:Array.from({length:Ht},()=>new te)},uBoundsCount:{value:0},uRefresh:{value:!1},uResetAll:{value:!1},uWeights:{value:new Float32Array(Ht).fill(1)}},depthTest:!1,depthWrite:!1,blending:bi});compositeMaterial=new ir({glslVersion:Ur,vertexShader:bo,fragmentShader:Np,uniforms:{tColor:{value:null},tDepth:{value:null},uOutputDither:{value:!1}},dithering:!0,transparent:!0,blending:ko,depthTest:!0,depthFunc:qo,depthWrite:!0});quad=new Wr(new xs(2,2),this.blendMaterial);referenceTarget=null;sampleTarget=null;readTarget=null;writeTarget=null;pages=new Map;stateKey="";targetKey="";cursor=0;totalSamples=1;broken=!1;disposed=!1;allocatedBytes=0;lastFallbackReason=null;presentation;publishedStateKeys=new Map;publicationRetryMs=250;ownsPresentation;get pageProgress(){return[...this.pages].map(([e,r])=>({id:e,samples:r.samples,totalSamples:this.totalSamples,ready:r.page.ready!==!1,published:this.publishedStateKeys.get(e)===JSON.stringify([this.stateKey,r.page.revision])}))}get memoryBytes(){return this.allocatedBytes+this.presentation.memoryBytes}get fallbackReason(){return this.lastFallbackReason}render(e,r,i){var L,U;if(this.disposed)return this.fallback(tt.disposed);if(this.broken)return this.fallback(tt.renderer);if(!i.active)return this.stateKey="",this.lastFallbackReason=tt.inactive,null;const{width:n,height:s,samples:a}=i,o=As((L=i.options)==null?void 0:L.format),c=((U=i.options)==null?void 0:U.msaaSamples)??Xo.msaaSamples,l=n*s,u=i.visibilityOnly?tr:kr,d=i.visibilityOnly?1:4,g=l*(2*(o.bytesPerPixel*d/4+4)+2*o.accumulationBytesPerPixel*d/4);if(!Number.isInteger(n)||n<1||!Number.isInteger(s)||s<1||!Number.isInteger(a)||a<1||n>this.renderer.capabilities.maxTextureSize||s>this.renderer.capabilities.maxTextureSize)return this.fallback(tt.dimensions);if(i.maxRenderTargetPixels!==void 0&&(!(i.maxRenderTargetPixels>0)||l>i.maxRenderTargetPixels)||g+this.presentation.memoryBytes>Ri)return this.fallback(tt.budget);if(o.format!==kr)return this.fallback(tt.format);if(c!==0)return this.fallback(tt.msaa);if(!r.supportsOpaqueAccumulation)return this.fallback(tt.receivers);const p=r.accumulationPages.map(B=>{var G;return{...B,ready:B.ready!==!1&&(((G=i.isPageReady)==null?void 0:G.call(i,B.id))??!0)}});if(p.length===0||p.length>Ht)return this.fallback(tt.pages);this.lastFallbackReason=null;const h=this.renderer,S=h.getRenderTarget(),f=h.getActiveCubeFace(),v=h.getActiveMipmapLevel(),b=h.getClearColor(new je),A=h.getClearAlpha(),C=h.autoClear,M=h.getViewport(new te),I=h.getScissor(new te),R=h.getScissorTest();try{h.autoClear=!1;const B=JSON.stringify([n,s,o.type,o.accumulationType,u]);if(this.targetKey!==B){this.releaseTargets();const P={type:o.type,format:u,minFilter:De,magFilter:De,depthBuffer:!0,samples:0};this.referenceTarget=new Ke(n,s,{...P,depthTexture:new sr(n,s,Vt)}),this.sampleTarget=new Ke(n,s,{...P,depthTexture:new sr(n,s,Vt)});const Z={type:o.accumulationType,format:u,minFilter:De,magFilter:De,depthBuffer:!1};this.readTarget=new Ke(n,s,Z),this.writeTarget=new Ke(n,s,Z),this.targetKey=B,this.allocatedBytes=g}const G=JSON.stringify([i.viewKey,i.visibilityOnly?0:i.styleEpoch,a,B]),W=this.stateKey!==G,re=new Set(p.map(({id:P})=>P)),Te=[...this.pages.values()].filter(({page:P})=>!re.has(P.id)).map(({page:P})=>P),Q=[...W?p:p.filter(P=>{var Ne;const Z=(Ne=this.pages.get(P.id))==null?void 0:Ne.page;return(Z==null?void 0:Z.revision)!==P.revision||(Z==null?void 0:Z.ready)===!1&&P.ready}),...Te].flatMap(P=>[P.screenBounds,...this.pages.has(P.id)?[this.pages.get(P.id).page.screenBounds]:[]]),F=W?p:p.filter(P=>Q.some(Z=>this.overlaps(P.screenBounds,Z)));this.blendMaterial.uniforms.uInverseViewProjection.value.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse).invert(),W&&(this.pages.clear(),this.cursor=0);for(const P of Te)this.pages.delete(P.id);for(const P of F)this.publishedStateKeys.delete(P.id);F.length>0&&(this.publicationRetryMs=250),this.cursor%=Math.max(1,p.length);for(const P of p){const Z=this.pages.get(P.id);Z?Z.page=P:this.pages.set(P.id,{page:P,samples:0})}if(this.totalSamples=a,F.length>0||Te.length>0){this.clearTarget(this.referenceTarget),r.renderSample(e,0,a),this.blend(F,!0,W,F.map(()=>1));for(const P of F)this.pages.get(P.id).samples=1}else{const P=[...this.pages.values()],Z=performance.now(),Ne=i.maxPagesPerFrame??4,Me=Number.isFinite(Ne)?Math.min(Ht,Math.max(1,Math.floor(Ne))):4,pt=i.maxFrameCpuMilliseconds??4,ce=Number.isFinite(pt)?Math.max(0,pt):4;let gt=0;do{const Ce=[],ke=this.cursor;for(let ge=0;ge<P.length;ge+=1){const Ct=(ke+ge)%P.length,Ee=P[Ct];if(!(Ee.samples>=a||Ee.page.ready===!1)){if(Ce.length===0&&this.clearTarget(this.sampleTarget),!r.renderPageSample(e,Ee.page.id,Ee.samples,a))return this.fallback(tt.pages);if(Ce.push(Ee),gt+=1,this.cursor=(Ct+1)%P.length,gt>=Me||performance.now()-Z>=ce)break}}if(Ce.length===0)break;this.blend(Ce.map(({page:ge})=>ge),!1,!1,Ce.map(ge=>1/(ge.samples+1)));for(const ge of Ce)ge.samples+=1}while(gt<Me&&performance.now()-Z<ce)}this.stateKey=G,h.setRenderTarget(S,f,v),h.setViewport(M),h.setScissor(I),h.setScissorTest(R),this.quad.material=this.compositeMaterial;const ee=[...this.pages.values()].every(P=>P.samples>=a);this.compositeMaterial.uniforms.tColor.value=ee?this.readTarget.texture:this.referenceTarget.texture,this.compositeMaterial.uniforms.tDepth.value=this.referenceTarget.depthTexture,this.compositeMaterial.uniforms.uOutputDither.value=S===null,i.visibilityOnly||h.render(this.fullscreenScene,this.fullscreenCamera);let q=!1;for(const{page:P,samples:Z}of this.pages.values()){if(P.ready===!1||Z<a)continue;const Ne=JSON.stringify([G,P.revision]);if(this.publishedStateKeys.get(P.id)!==Ne)try{this.presentation.publish(this.readTarget,this.referenceTarget,e,P,a)?this.publishedStateKeys.set(P.id,Ne):q=!0}catch(Me){q=!0,console.error("[shadow-simulation] retaining previous corridor capture after copy failure",Me)}}for(const P of this.publishedStateKeys.keys())re.has(P)||this.publishedStateKeys.delete(P);const de=[...this.pages.values()].reduce((P,{page:Z,samples:Ne})=>{const Me=Z.ready!==!1&&this.publishedStateKeys.get(Z.id)===JSON.stringify([G,Z.revision]);return P+(Me?a:Math.min(Ne,a-1))},0),be=q?this.publicationRetryMs:void 0;return this.publicationRetryMs=q?Math.min(4e3,this.publicationRetryMs*2):250,{progress:de/(this.pages.size*a),settled:de===this.pages.size*a,...be===void 0?{}:{retryAfterMs:be},needsRepaint:[...this.pages.values()].some(P=>P.samples<a&&P.page.ready!==!1)}}catch(B){return this.broken=!0,console.error("[shadow-simulation] corridor accumulation failed; using direct rendering",B),this.fallback(tt.renderer)}finally{h.autoClear=C,h.setClearColor(b,A),h.setRenderTarget(S,f,v),h.setViewport(M),h.setScissor(I),h.setScissorTest(R)}}overlaps(e,r){return e.x<=r.x+r.z&&e.x+e.z>=r.x&&e.y<=r.y+r.w&&e.y+e.w>=r.y}clearTarget(e){this.renderer.setRenderTarget(e),this.renderer.setClearColor(0,0),this.renderer.clear(!0,!0,!1)}blend(e,r,i,n){const s=this.blendMaterial.uniforms;s.tPrevious.value=this.readTarget.texture,s.tReference.value=this.referenceTarget.texture,s.tReferenceDepth.value=this.referenceTarget.depthTexture,s.tSample.value=this.sampleTarget.texture,s.tSampleDepth.value=this.sampleTarget.depthTexture,s.uBoundsCount.value=e.length,e.forEach(({receiverBounds:o},c)=>s.uBounds.value[c].set(o.min.x,o.min.z,o.max.x,o.max.z)),s.uRefresh.value=r,s.uResetAll.value=i,s.uWeights.value.set(n),this.quad.material=this.blendMaterial,this.renderer.setRenderTarget(this.writeTarget),this.renderer.render(this.fullscreenScene,this.fullscreenCamera);const a=this.readTarget;this.readTarget=this.writeTarget,this.writeTarget=a}releaseTargets(){var e;for(const r of[this.referenceTarget,this.sampleTarget,this.readTarget,this.writeTarget])(e=r==null?void 0:r.depthTexture)==null||e.dispose(),r==null||r.dispose();this.referenceTarget=null,this.sampleTarget=null,this.readTarget=null,this.writeTarget=null,this.stateKey="",this.targetKey="",this.allocatedBytes=0,this.pages.clear()}releaseScratch(e=!1){e?(this.stateKey="",this.pages.clear()):this.releaseTargets(),this.publishedStateKeys.clear(),this.cursor=0}fallback(e){return this.lastFallbackReason=e,this.releaseTargets(),null}dispose(){this.disposed||(this.disposed=!0,this.releaseTargets(),this.ownsPresentation&&this.presentation.dispose(),this.quad.geometry.dispose(),this.blendMaterial.dispose(),this.compositeMaterial.dispose())}}const Mo=2e4;let Lp=0;var Uo;class Fp{enabled=Wl((Uo=globalThis.location)==null?void 0:Uo.hostname);reportId=++Lp;nextCorridorId=0;labels=new Map;pending=new Map;timer;context;observe(e,r){var s;if(!this.enabled)return;const i=performance.now();for(const{id:a}of e)this.labels.has(a)||this.labels.set(a,`C${this.reportId}.${++this.nextCorridorId}`);this.context={total:e.length,ready:e.filter(a=>a.ready).length,completed:e.filter(a=>a.published).length,samples:e.reduce((a,o)=>a+o.samples,0),activeId:r.activeId?this.labels.get(r.activeId):null,memoryBytes:r.memoryBytes,fallbackReason:r.fallbackReason,publicationRetries:(s=r.publicationRetries)==null?void 0:s.map(([a,o])=>({id:this.labels.get(a),attempts:o.attempts,retryInMs:Math.max(0,Math.round(o.retryAt-i))}))};const n=new Set(e.map(({id:a})=>a));for(const a of this.pending.keys())n.has(a)||this.pending.delete(a);for(const a of this.labels.keys())n.has(a)||this.labels.delete(a);for(const a of e){if(a.published){this.pending.delete(a.id);continue}const o=this.pending.get(a.id),c=!o||a.samples>o.progress.samples;this.pending.set(a.id,{progress:a,advancedAt:c?i:o.advancedAt,reported:c?!1:o.reported})}this.schedule()}pause(){clearTimeout(this.timer),this.timer=void 0,this.pending.clear()}schedule(){if(this.timer!==void 0)return;let e=1/0;for(const r of this.pending.values())r.reported||(e=Math.min(e,r.advancedAt+Mo));Number.isFinite(e)&&(this.timer=setTimeout(()=>{var n;this.timer=void 0;const r=performance.now(),i=[];for(const s of this.pending.values())s.reported||r-s.advancedAt<Mo||(s.reported=!0,i.push({...s.progress,id:this.labels.get(s.progress.id),file:(n=s.progress.id.match(/\/([^/"\\]+\.b3dm)/))==null?void 0:n[1],stalledMilliseconds:Math.round(r-s.advancedAt),waitingForReadiness:!s.progress.ready}));i.length>0&&console.warn("[shadow-simulation] corridors without progress for 20 seconds",JSON.stringify({corridors:i,scheduler:this.context})),this.schedule()},Math.max(0,e-performance.now())))}}class Bp{constructor(e){this.renderer=e,this.presentation=new nl(e),this.scratch=new Op(e,this.presentation)}presentation;scratch;captures=[];activeId=null;activeCapture=null;cursor=0;samples=1;disposed=!1;watchdog=new Fp;publicationRetries=new Map;restoreOpportunities=new Map;allocationKey="";allocations=new Map;plans=new Map;get memoryBytes(){return this.scratch.memoryBytes}get fallbackReason(){return this.presentation.supportsCapture?this.scratch.fallbackReason:"receivers"}get capturePages(){return this.captures.map(({page:e})=>e)}get pageProgress(){const e=this.scratch.pageProgress;return this.captures.map(({page:r,plan:i,ready:n})=>{const s=n&&this.presentation.has(r,this.samples),a=e.find(({id:o})=>o===r.id);return{id:r.id,samples:s?this.samples:(a==null?void 0:a.samples)??0,totalSamples:this.samples,ready:n,published:s,limited:i.limited,width:i.width,height:i.height}})}updateCaptures(e,r,i,n=!0){var h;const s=Rp(e),a=As((h=i.options)==null?void 0:h.format),o=2*(a.bytesPerPixel/4+4)+2*a.accumulationBytesPerPixel/4+8,c=Math.max(1,Math.floor(Math.min(i.maxRenderTargetPixels??i.width*i.height,Ri/2/o))),l=r.accumulationPages.map(S=>{const f=this.plans.get(S.id),v=(f==null?void 0:f.orientation)??s,b={groundTexelTargetMeters:S.groundTexelTargetMeters??1,maximumDimension:this.renderer.capabilities.maxTextureSize,maximumPixels:c},A=JSON.stringify([S.receiverBounds.min,S.receiverBounds.max,v.toArray(),b]),C=(f==null?void 0:f.inputs)===A?f.plan:Ep(S.receiverBounds,v,b);return this.plans.set(S.id,{inputs:A,plan:C,orientation:v}),C.camera.layers.mask=e.layers.mask,{page:S,plan:C}}),u=l.find(({page:S})=>{var f;return this.activeId===S.id&&((f=this.activeCapture)==null?void 0:f.page.id)===S.id&&this.activeCapture.page.contentKey===JSON.stringify([S.contentKey??S.revision,this.activeCapture.plan.key])}),d=u?this.activeCapture.plan:null,g=JSON.stringify(l.map(({page:S,plan:f})=>[S.id,f.key,S.screenBounds.z*S.screenBounds.w]));if(g!==this.allocationKey){const S=new Map(Mp(l.filter(({page:f})=>f.id!==(u==null?void 0:u.page.id)).map(({page:f,plan:v})=>({id:f.id,plan:v,screenArea:f.screenBounds.z*f.screenBounds.w})),_s-(d?d.width*d.height*8:0)));u&&d&&S.set(u.page.id,d),this.allocationKey=g,this.allocations=S}this.captures=l.map(({page:S,plan:f})=>{var C;const v=this.allocations.get(S.id)??f,b=JSON.stringify([S.contentKey??S.revision,v.key]),A=(!n||S.ready!==!1)&&(((C=i.isPageReady)==null?void 0:C.call(i,S.id))??!0);return{page:{...S,ready:A,captureKey:JSON.stringify([v.camera.quaternion.toArray(),v.width,v.height]),captureSize:{width:v.width,height:v.height},contentKey:b,revision:b,screenBounds:new te(0,0,1,1)},plan:v,ready:A}});const p=new Set(this.captures.map(({page:S})=>S.id));for(const S of this.plans.keys())p.has(S)||this.plans.delete(S);for(const[S,f]of this.publicationRetries){const v=this.captures.find(({page:b})=>b.id===S);(!v||v.page.contentKey!==f.contentKey)&&this.publicationRetries.delete(S)}this.presentation.beginFrame(this.capturePages);for(const{page:S,plan:f}of this.captures)this.presentation.prepareRestore(S,i.samples,new J().multiplyMatrices(f.camera.projectionMatrix,f.camera.matrixWorldInverse));i.active&&this.reportProgress()}reportProgress(){this.watchdog.enabled&&this.watchdog.observe(this.pageProgress,{activeId:this.activeId,memoryBytes:this.memoryBytes,fallbackReason:this.fallbackReason,publicationRetries:[...this.publicationRetries.entries()]})}yieldForRestore(e,r){if(!this.presentation.isRestorePending(e,r))return!1;const i=JSON.stringify([e.id,r]),n=e.contentKey??e.revision;if(this.restoreOpportunities.get(i)===n)return!1;if(this.restoreOpportunities.set(i,n),this.restoreOpportunities.size>1024){const s=this.restoreOpportunities.keys().next().value;s!==void 0&&this.restoreOpportunities.delete(s)}return!0}render(e,r,i){var g;if(this.disposed)return null;if(!i.active)return this.watchdog.pause(),null;if(this.samples=i.samples,this.updateCaptures(e,r,i),!this.presentation.supportsCapture)return this.scratch.releaseScratch(),this.activeId=null,null;const n=performance.now();let s,a=this.captures.find(({page:p})=>p.id===this.activeId);const o=a&&!a.ready&&this.captures.some(({page:p,ready:h})=>h&&p.id!==(a==null?void 0:a.page.id)&&!this.presentation.has(p,i.samples));if((!a||o||this.presentation.has(a.page,i.samples))&&(this.scratch.releaseScratch(!0),this.activeId=null,a=void 0),a){const p=this.publicationRetries.get(a.page.id);p&&p.retryAt>n&&(s=Math.ceil(p.retryAt-n))}if(!a&&this.captures.length>0)for(let p=0;p<this.captures.length;p+=1){const h=(this.cursor+p)%this.captures.length,S=this.captures[h];if(!S.ready||this.presentation.has(S.page,i.samples)||this.yieldForRestore(S.page,i.samples))continue;const f=this.publicationRetries.get(S.page.id);if(f&&f.retryAt>n){s=Math.min(s??1/0,Math.ceil(f.retryAt-n));continue}a=S,s=void 0,this.activeId=S.page.id,this.activeCapture=S,this.cursor=(h+1)%this.captures.length;break}let c=null;if(a!=null&&a.ready&&s===void 0){this.activeCapture=a;const{page:p,plan:h}=a,S=(f,v,b)=>r.renderPageSample(f,p.id,v,b,p.screenBounds);if(c=this.scratch.render(h.camera,{accumulationPages:[p],supportsOpaqueAccumulation:r.supportsOpaqueAccumulation,renderSample:S,renderPageSample:(f,v,b,A)=>S(f,b,A)},{...i,width:h.width,height:h.height,viewKey:h.key,visibilityOnly:!0,isPageReady:void 0,maxPagesPerFrame:i.maxPagesPerFrame??4}),c!=null&&c.settled)this.publicationRetries.delete(p.id),this.scratch.releaseScratch(!0),this.activeId=null;else if((c==null?void 0:c.retryAfterMs)!==void 0){const f=(((g=this.publicationRetries.get(p.id))==null?void 0:g.attempts)??0)+1;s=Math.max(250,c.retryAfterMs);const v=f>=3;v&&(s=Math.max(1e3,s)),this.publicationRetries.set(p.id,{contentKey:p.contentKey,attempts:v?0:f,retryAt:n+s}),v&&(this.scratch.releaseScratch(),this.activeId=null,this.captures.some(({page:b,ready:A})=>{var C;return A&&b.id!==p.id&&!this.presentation.has(b,i.samples)&&(((C=this.publicationRetries.get(b.id))==null?void 0:C.retryAt)??0)<=n})&&(s=void 0))}if(!c)return null}!this.activeId&&!this.captures.some(({page:p,ready:h})=>h&&!this.presentation.has(p,i.samples))&&this.scratch.releaseScratch();const l=this.pageProgress;this.reportProgress();const u=l.reduce((p,h)=>p+(h.published?i.samples:Math.min(h.samples,i.samples-1)),0),d=l.length*i.samples;return{progress:d>0?u/d:1,settled:d===u,needsRepaint:l.some(p=>p.ready&&!p.published)&&s===void 0,...s===void 0?{}:{retryAfterMs:s}}}renderHard(e,r,i){var I;if(this.disposed||!i.active)return{published:0,needsRepaint:!1};if(this.updateCaptures(e,r,{...i,samples:1},i.isPageReady===void 0),!r.supportsOpaqueAccumulation||!this.presentation.supportsCapture||!this.renderer.extensions.has("EXT_color_buffer_float"))return{published:0,needsRepaint:!1};const n=new Map(this.captures.map(({page:R})=>[R.id,this.presentation.getCapturedSize(R.id)])),s=this.captures.reduce((R,{page:L,plan:U})=>{const B=n.get(L.id);return R+Math.max(U.width*U.height,B?B.width*B.height:0)*8},0)>_s,a=({page:R,plan:L})=>{const U=n.get(R.id);return U?(U.width*U.height-L.width*L.height)*8:0},o=this.captures.filter(({page:R,plan:L,ready:U})=>{if(!U)return!1;const B=n.get(R.id);return this.presentation.hasAtLeast(R,1)&&(!s||!B||B.width*B.height<=L.width*L.height)?!1:!(B&&B.samples>1&&!s&&(B.width!==L.width||B.height!==L.height)&&this.presentation.canReplay(R))});s&&o.sort((R,L)=>a(L)-a(R));const c=o.find(({page:R})=>!this.yieldForRestore(R,1));if(!c)return{published:0,needsRepaint:o.length>0};const{page:l,plan:u}=c;if(s&&this.presentation.hasAtLeast(l,1)&&a(c)>0){const R=n.get(l.id),L=Math.max(u.width,Math.ceil(R.width/2))*Math.max(u.height,Math.ceil(R.height/2))*8;if(this.memoryBytes+L>Ri)return{published:0,needsRepaint:!1,retryAfterMs:1e3};try{const U=this.presentation.downsample(l,u.width,u.height);return{published:U?1:0,needsRepaint:U,...U?{}:{retryAfterMs:1e3}}}catch{return{published:0,needsRepaint:!1,retryAfterMs:1e3}}}if(this.memoryBytes+u.width*u.height*16>Ri)return{published:0,needsRepaint:!1,retryAfterMs:1e3};const d=this.renderer,g=d.getRenderTarget(),p=d.getActiveCubeFace(),h=d.getActiveMipmapLevel(),S=d.getViewport(new te),f=d.getScissor(new te),v=d.getScissorTest(),b=d.autoClear,A=d.getClearColor(new je),C=d.getClearAlpha(),M=new Ke(u.width,u.height,{type:Et,format:tr,minFilter:De,magFilter:De,samples:0,depthTexture:new sr(u.width,u.height,Vt)});try{d.initRenderTarget(M),d.autoClear=!1,d.setRenderTarget(M),d.setViewport(new te(0,0,u.width,u.height)),d.setScissorTest(!1),d.setClearColor(0,0),d.clear(!0,!0,!1);const L=r.renderPageSample(u.camera,l.id,0,1,l.screenBounds)&&this.presentation.publish(M,M,u.camera,l,1);return{published:L?1:0,needsRepaint:L&&o.length>1,...L?{}:{retryAfterMs:1e3}}}catch(R){return console.warn("[shadow-simulation] retaining completed corridor after hard-stage capture failure",R),{published:0,needsRepaint:!1,retryAfterMs:1e3}}finally{d.setRenderTarget(g,p,h),d.setViewport(S),d.setScissor(f),d.setScissorTest(v),d.setClearColor(A,C),d.autoClear=b,(I=M.depthTexture)==null||I.dispose(),M.dispose()}}pausePending(){this.watchdog.pause()}cancelPending(){this.watchdog.pause(),this.activeId!==null&&this.scratch.releaseScratch(),this.activeId=null,this.publicationRetries.clear(),this.restoreOpportunities.clear()}dispose(){this.disposed||(this.disposed=!0,this.watchdog.pause(),this.scratch.dispose(),this.presentation.dispose(),this.captures=[],this.plans.clear(),this.allocations=new Map,this.publicationRetries.clear(),this.restoreOpportunities.clear())}}const Up=750,kp=5e3,Eo=new Set,Hp=t=>{const e=Gl({assetUrl:t,production:!0});let r=null,i=!1,n=!1,s=0,a=null;const o=()=>{if(r&&(r.onmessage=null,r.onerror=null,r.onmessageerror=null,r.terminate(),r=null),a){const d=a;a=null,clearTimeout(d.timer),d.finish(null)}},c=()=>{n=!0,o()},l=(d,g=[])=>{if(!e||i||n||a||typeof Worker>"u")return Promise.resolve(null);try{return r||(r=new Worker(new URL("https://cismet.github.io/carma-pr-deployments/812/geoportal/assets/shadow-corridor-cache.worker-VQZLpq-f.js",import.meta.url),{type:"module"}),r.onerror=c,r.onmessageerror=c,r.onmessage=p=>{var S;if(!a||((S=p.data)==null?void 0:S.id)!==a.id)return;const h=a;a=null,clearTimeout(h.timer),h.finish(p.data)}),new Promise(p=>{const h=setTimeout(c,d.operation===_i.read?Up:kp);a={id:d.id,timer:h,finish:p};try{r.postMessage(d,g)}catch{c()}})}catch{return c(),Promise.resolve(null)}},u={cancelPending:o,get enabled(){return!!(e&&!i&&!n&&typeof Worker<"u")},get busy(){return a!==null},async read(d){const g=$e(d);if(!g)return null;const p=await l({id:++s,producerAssetUrl:e??"",identity:d,operation:_i.read}),h=p==null?void 0:p.record;return!i&&(h==null?void 0:h.schema)===Ui.schema&&$e(h.identity)===g&&_o(h)?h:null},async write(d,g,p){if(!$e(d)||!_o(g))return!1;const h=[g.visibility,g.depth];if(h.some(f=>!(f.buffer instanceof ArrayBuffer)||f.byteOffset!==0||f.byteLength!==f.buffer.byteLength))return!1;const S=await l({id:++s,producerAssetUrl:e??"",identity:d,operation:_i.write,capture:g,costs:p},[...new Set(h.map(f=>f.buffer))]);return!i&&(S==null?void 0:S.written)===!0},async writePacked(d,g,p){if(!$e(d)||!Ap(g)||!(g.rgba.buffer instanceof ArrayBuffer)||g.rgba.byteOffset!==0||g.rgba.byteLength!==g.rgba.buffer.byteLength)return!1;const h=await l({id:++s,producerAssetUrl:e??"",identity:d,operation:_i.writePacked,capture:g,costs:p},[g.rgba.buffer]);return!i&&(h==null?void 0:h.written)===!0},dispose(){i=!0,o(),Eo.delete(u)}};return Eo.add(u),u};class zp{constructor(e,r,i){this.scene=e,this.renderer=r,this.host=i,this.frameCache=new _u(r),this.pages=new _p(e,r,i.maximumMapSize**2*8*2,i.maximumMapSize,i.frame),this.accumulation=new Bp(r),i.worldBasis&&i.corridorRevision&&i.dateTimeKey&&this.accumulation.presentation.setPersistence({cache:this.persistentCache,identity:(n,s)=>{var u,d,g;const a=this.pages.getPageGeometry(n.id),o=(u=i.dateTimeKey)==null?void 0:u.call(i);if(!a||!o||!n.captureKey)return null;const c=s===1?(d=i.receiverStageError)==null?void 0:d.call(i,n.receiverBounds):void 0,l=(g=i.corridorRevision)==null?void 0:g.call(i,a.casterBounds,c,n.receiverBounds);return l?{source:"shared-scene-corridor-v2",dateTime:o,corridor:n.id,resolution:JSON.stringify([a.width,a.height,n.captureKey]),geometryFingerprint:l,samples:s}:null},worldBasis:i.worldBasis,runIdleRender:i.runIdleRender,requestRepaint:i.requestRepaint})}pages;viewKey="";idleStats=null;accumulation;persistentCache=Hp(import.meta.url);accumulationSettled=!1;viewport=new Lt(1,1);lastFrame=null;frameCache;presentedPageIds=new Set;casterRevisionsDirty=!0;casterRevisionCursor=0;hardRetryTimer=null;update(e,r,i,n,s=r.renderCamera){this.viewport.copy(r.viewport);const a=JSON.stringify([e.map(({id:o,bounds:c,receiverObjectId:l})=>[o,c.min,c.max,l]),s.projectionMatrix.elements,s.matrixWorldInverse.elements,r.viewport,i,n]);a!==this.viewKey&&(this.pages.setView(e,s,r.viewport,n,i,this.host.receiverBiasLimit),this.viewKey=a,this.casterRevisionsDirty=!0,this.casterRevisionCursor=0)}updatePresentation(e,r=e.renderCamera){this.viewport.copy(e.viewport),this.pages.updatePresentation(r)}invalidateContent(e){(e==null?void 0:e.length)!==0&&(this.casterRevisionsDirty=!0,this.casterRevisionCursor=0,this.frameCache.invalidate(),e?e.length>0&&this.pages.invalidateCasters(e):this.pages.clearCache())}async prewarm({cells:e,frame:r,lighting:i,targetPixels:n,samples:s,prepare:a,signal:o,yieldToInput:c=Tp,planningCamera:l}){if(o.aborted)return null;this.idleStats=null,this.pages.setPrewarmView(e,l??r.renderCamera,r.viewport,n,i,s);try{return this.idleStats=await xp({pages:this.pages.prewarmPages,signal:o,prepare:a,yieldToInput:c,render:(u,d,g)=>{if(d!=null&&d.parent)throw new Error("Idle caster lease must own an unmounted group");const p=this.host.light.visible;this.host.light.visible=!1,d&&this.scene.add(d);try{let h=null;const S=()=>{h=this.pages.prewarmNext(r.renderCamera,u,{signal:g})};return this.host.runIdleRender?this.host.runIdleRender(S):S(),h??{pageId:u,rendered:0,cachedSamples:0,totalSamples:s,complete:!1,budgetLimited:!1,aborted:!0}}finally{d&&this.scene.remove(d),this.host.light.visible=p}}}),this.idleStats}finally{this.pages.clearPrewarmView()}}renderProgressive(e,r){if(this.lastFrame=r,!r.active)return this.pausePending(),null;if(this.pages.accumulationPages.length===0)return this.accumulationSettled=!1,null;const i=this.renderWithHost(e,()=>{const a=this.captureHard(e);if(this.casterRevisionsDirty&&this.host.corridorRevision)return null;const o=this.accumulation.presentation.capture(this.scene,()=>this.accumulation.render(e,this.pages,{...r,visibilityOnly:!0,maxPagesPerFrame:Math.min(r.samples,64),maxFrameCpuMilliseconds:r.maxFrameCpuMilliseconds??2,isPageReady:c=>this.isPageReady(c,!1)}));return o&&this.renderContent(e,null,r.samples),o&&{...o,settled:o.settled&&!a.needsRepaint,needsRepaint:o.needsRepaint||a.needsRepaint}});if(!i)return this.accumulationSettled=!1,null;const n="retryAfterMs"in i?i.retryAfterMs:void 0;n!==void 0&&this.hardRetryTimer===null&&(this.hardRetryTimer=globalThis.setTimeout(()=>{var a,o;this.hardRetryTimer=null,(o=(a=this.host).requestRepaint)==null||o.call(a)},Math.max(1,n)));const s=i.settled&&!this.accumulationSettled;return this.accumulationSettled=i.settled,{...i,settled:s}}render(e,r,i,n=!0){return this.pages.accumulationPages.length===0?!1:(this.renderWithHost(e,()=>{n&&this.captureHard(e),this.renderContent(e,r,i,!n)}),!0)}cancelPending(e=!1){this.accumulation.cancelPending(),e&&this.accumulation.presentation.beginSolarTransition(),this.pausePending()}pausePending(){this.accumulation.pausePending(),this.hardRetryTimer!==null&&(globalThis.clearTimeout(this.hardRetryTimer),this.hardRetryTimer=null),this.accumulationSettled=!1}isPageReady(e,r){var n,s;const i=this.pages.getPageGeometry(e);return i?!this.host.isCorridorReady||this.host.isCorridorReady(i.casterBounds,r?(s=(n=this.host).receiverStageError)==null?void 0:s.call(n,i.receiverBounds):void 0,i.receiverBounds):!1}captureHard(e){var i,n,s,a,o,c;if(this.casterRevisionsDirty&&this.host.corridorRevision){const l=this.pages.accumulationPages,u=performance.now();let d=0;for(;this.casterRevisionCursor<l.length;){if(d>=4||d>0&&performance.now()-u>=4)return(n=(i=this.host).requestRepaint)==null||n.call(i),{published:0,needsRepaint:!0};const g=l[this.casterRevisionCursor++];d+=1;const p=this.pages.getPageGeometry(g.id);if(!p)continue;const h=this.host.corridorRevision(p.casterBounds,(a=(s=this.host).receiverStageError)==null?void 0:a.call(s,p.receiverBounds),p.receiverBounds);this.pages.setCasterRevision(g.id,h)&&this.frameCache.invalidate()}this.casterRevisionsDirty=!1,this.casterRevisionCursor=0}const r=this.accumulation.presentation.capture(this.scene,()=>{var l;return this.accumulation.renderHard(e,this.pages,{...this.lastFrame,width:this.viewport.x,height:this.viewport.y,viewKey:this.viewKey,styleEpoch:((l=this.lastFrame)==null?void 0:l.styleEpoch)??0,samples:1,active:!0,isPageReady:u=>this.isPageReady(u,!0)})});return r.needsRepaint&&((c=(o=this.host).requestRepaint)==null||c.call(o)),r.retryAfterMs!==void 0&&this.hardRetryTimer===null&&(this.hardRetryTimer=globalThis.setTimeout(()=>{var l,u;this.hardRetryTimer=null,(u=(l=this.host).requestRepaint)==null||u.call(l)},r.retryAfterMs)),r}renderContent(e,r,i,n=!1){var u,d,g,p,h;const s=this.accumulation.capturePages;this.accumulation.presentation.beginFrame(s);const a=s.map(S=>{const f=this.accumulation.presentation.canPresent(S);return{page:S,replay:f,ready:f||(!this.host.corridorRevision||!this.casterRevisionsDirty)&&this.isPageReady(S.id,!0)}});let o=!1;const c=()=>{this.presentedPageIds.clear();const S=this.host.light.visible,f=r===null&&a.some(({replay:v})=>v);this.host.light.visible=!0;try{let v=new Set;r===null?v=this.accumulation.presentation.renderNative(this.scene,a.filter(b=>b.replay).map(b=>b.page),()=>this.renderer.render(this.scene,e)):this.renderer.render(this.scene,e);for(const{page:b,replay:A,ready:C}of a){if(!C)continue;if(v.has(b.id)){this.presentedPageIds.add(b.id);continue}if(r===null&&!A){this.presentedPageIds.add(b.id);continue}if(n&&!A){this.presentedPageIds.add(b.id);continue}const M=n||f&&A;this.host.light.visible=M,this.accumulation.presentation.render(this.scene,b,i,()=>M?this.pages.renderPageColor(e,b.id):this.pages.renderPageSample(e,b.id,r??0,r===null?1:i))?this.presentedPageIds.add(b.id):o=!0}}finally{this.host.light.visible=S}};if((u=this.lastFrame)!=null&&u.active&&r===null&&this.accumulation.presentation.supportsCapture){const S=JSON.stringify([this.viewKey,e.projectionMatrix.elements,e.matrixWorldInverse.elements,e.layers.mask,this.lastFrame.styleEpoch,((g=(d=this.host).visualEpoch)==null?void 0:g.call(d))??0,this.accumulation.presentation.revision,a.map(({page:f,replay:v,ready:b})=>[f.id,f.contentKey??f.revision,v,b])]);this.frameCache.render(S,this.lastFrame.width,this.lastFrame.height,c),o&&this.frameCache.invalidate()}else this.frameCache.invalidate(),c();const l=a.filter(({page:S,replay:f})=>this.presentedPageIds.has(S.id)&&(this.accumulation.presentation.hasAtLeast(S,1)||!f&&(r===null||i===1))).map(({page:S})=>S);l.length>0&&((h=(p=this.host).onPresentedPages)==null||h.call(p,l,s))}renderWithHost(e,r){const{renderer:i,host:n}=this,s=n.light.visible,a=n.sky.visible,o=n.overlay.visible,c=i.autoClear;n.light.visible=!1,i.autoClear=!1;try{a&&this.renderHostObject(n.sky,e),n.sky.visible=!1,n.overlay.visible=!1;const l=r();return l!==null&&o&&(n.overlay.visible=!0,this.renderHostObject(n.overlay,e)),l}finally{i.autoClear=c,n.light.visible=s,n.sky.visible=a,n.overlay.visible=o}}renderHostObject(e,r){const i=this.scene.children.filter(n=>n!==e&&n.visible);for(const n of i)n.visible=!1;try{this.renderer.render(this.scene,r)}finally{for(const n of i)n.visible=!0}}get pageLevels(){return this.pages.pageLevels}get stats(){return{...this.pages.stats,framePresentation:this.frameCache.stats,corridorAccumulation:{retained:this.accumulation.presentation.stats,pageSamples:this.accumulation.pageProgress,memoryBytes:this.accumulation.memoryBytes,fallbackReason:this.accumulation.fallbackReason},...this.idleStats?{idlePrewarm:this.idleStats}:{},...this.host.auditCorridors?{corridorAudit:this.host.auditCorridors(this.pages.accumulationPages.flatMap(e=>{const r=this.pages.getPageGeometry(e.id);return r?[{id:e.id,casterBounds:r.casterBounds,receiverBounds:r.receiverBounds}]:[]}))}:{}}}dispose(){this.hardRetryTimer!==null&&globalThis.clearTimeout(this.hardRetryTimer),this.hardRetryTimer=null,this.accumulation.dispose(),this.frameCache.dispose(),this.persistentCache.dispose(),this.pages.dispose()}}function Vp(){const t=new WeakSet;return e=>{let r=!1;for(const i of e)if(!(!i.providesTerrain||!i.hasRenderableContent)&&(r=!0,t.has(i)||i.hasRenderableContent()))return t.add(i),!1;return r}}const Zn=(t,e,r)=>JSON.stringify([t.min.toArray(),t.max.toArray(),e,r==null?void 0:r.min.toArray(),r==null?void 0:r.max.toArray()]),Wp=(t,e)=>{const r=new Map(t.map(s=>[s.id,s])),i=[],n=s=>i.push(new Fe(new T(...s.minimum),new T(...s.maximum)));for(const s of e){const a=r.get(s.id);a&&s.minimum.every((c,l)=>c===a.minimum[l])&&s.maximum.every((c,l)=>c===a.maximum[l])||(a&&n(a),n(s)),r.delete(s.id)}for(const s of r.values())n(s);return i},Gp=(t,e,r)=>{const i=new Set(r.map(({id:n})=>n));return t.filter(n=>{if(n.loadReason==="shadow")return!1;const s=e.filter(({bounds:a})=>n.minimum[0]<a.max.x&&n.maximum[0]>a.min.x&&n.minimum[2]<a.max.z&&n.maximum[2]>a.min.z);return s.length>0&&s.every(({id:a})=>i.has(a))}).map(({id:n})=>n)},jp=(t,e,r)=>{if(![t,e,r].every(Number.isFinite)||r<=0)throw new RangeError("Invalid shared-scene Mercator basis");return new J().set(r,0,0,t,0,0,r,e,0,r,0,0,0,0,0,1)},Ro=(t,e,r)=>jl(e.reduce((i,n)=>{if(n.loadReason==="shadow")return i;const[s,,a]=n.minimum,[o,,c]=n.maximum;return s<t.max.x&&o>t.min.x&&a<t.max.z&&c>t.min.z&&Number.isFinite(n.errorPixels)?Math.max(i,n.errorPixels):i},r),r),Yp=({stageErrorPixels:t,targetErrorPixels:e,groundTexelTargetMeters:r,finalBiasMeters:i,maximumCoarseBiasMeters:n})=>{const s=Math.max(1,Math.min(n/i,t/Math.max(e,.25)));return Math.min(n,i*s,Math.max(i,r*2))},$p=({id:t,casterBounds:e,sunElevationDegrees:r,regions:i,volumes:n})=>{const s=new Set(i.flatMap(u=>u.selectedTileIds)),a=new Map(n.map(u=>[u.id,u])),o=[],c=[];let l=0;for(const u of s){const d=a.get(u);if(!d){o.push(u);continue}d.loadReason==="shadow"&&(l+=1),e.intersectsBox(new Fe(new T(...d.minimum),new T(...d.maximum)))||c.push(u)}return{id:t,ready:i.length>0&&i.every(u=>u.ready),selectedTiles:s.size,offscreenTiles:l,reviewCount:r>=10&&s.size>10,nearHorizon:r<10,exactPrismTested:i.length>0&&i.every(u=>u.receiverPrismTested),visitedNodes:i.reduce((u,d)=>u+d.visitedNodes,0),broadPhaseNodes:i.reduce((u,d)=>u+d.broadPhaseNodes,0),rejectedPrismNodes:i.reduce((u,d)=>u+d.rejectedPrismNodes,0),missingPublishedVolumes:o,outsideEnvelope:c,selectedTileIds:[...s].sort()}},Kp={[Pe.STANDARD]:0,[Pe.HIGH]:1,[Pe.MAX]:1,[Pe.ULTRA]:1,[Pe.EXTREME]:1},qp=128,Xp={[Pe.STANDARD]:0,[Pe.HIGH]:0,[Pe.MAX]:1,[Pe.ULTRA]:2,[Pe.EXTREME]:3},Qp=(t,e,r,i)=>{var u,d;const n=t==null?void 0:t.tileManager;if(!t||!n||!Number.isFinite(n.deltaZoom)||!Number.isFinite(n.tileSize)||!n.tileManager)return()=>{};const s={deltaZoom:n.deltaZoom,terrainTileSize:n.tileSize,sourceTileSize:n.tileManager.tileSize,meshSize:t.meshSize,calculateTileZoom:(u=n.tileManager._source)==null?void 0:u.calculateTileZoom},o=1-Kp[r],c=e*2**o;n.deltaZoom=o,n.tileSize=c,n.tileManager.tileSize=c,t.meshSize=qp;const l=Xp[r];if(l>0&&n.tileManager._source){s.calculateTileZoom||i==null||i();const g=n.tileManager._source.calculateTileZoom;g&&(n.tileManager._source.calculateTileZoom=(...p)=>g(...p)+l)}return t._meshCache={},(d=n.freeRtt)==null||d.call(n),()=>{var g;n.deltaZoom=s.deltaZoom,n.tileSize=s.terrainTileSize,n.tileManager.tileSize=s.sourceTileSize,t.meshSize=s.meshSize,n.tileManager._source&&(n.tileManager._source.calculateTileZoom=s.calculateTileZoom),t._meshCache={},(g=n.freeRtt)==null||g.call(n)}},Zp=1024,Jp=2048,eg=4096,tg=1e6,rg=2e6,Ao=(t,e=rc())=>{const r=Math.max(256,Math.floor(t)),i=ic(e);return i==="phone"?{maxShadowMapSize:Math.min(r,Zp),maxAccumulationPixels:tg}:i==="tablet"?{maxShadowMapSize:Math.min(r,Jp),maxAccumulationPixels:rg}:{maxShadowMapSize:Math.min(r,eg),maxAccumulationPixels:Number.POSITIVE_INFINITY}},ig=(t,e)=>{if(t===Number.POSITIVE_INFINITY)return t;const r=As(e.format),i=e.msaaSamples??Xo.msaaSamples,n=2*(r.bytesPerPixel+4)*(1+Math.max(0,i))+3*r.accumulationBytesPerPixel;return Math.min(t,Math.floor(256*1024*1024/n))},Co=(t,e=ur,r=2560*1440,i=1)=>Math.floor(Math.max(256**2,Math.min(t**2,dt[e].depthSize**2*(Number.isFinite(r)&&r>0?r/(2560*1440):1)*i**2))),Io=new WeakMap,ng=t=>{const e=Io.get(t);if(e)return e;const r=t.getContext(),i=r.getInternalformatParameter(r.RENDERBUFFER,r.DEPTH_COMPONENT24,r.SAMPLES),n=a=>[0,...Array.from(r.getInternalformatParameter(r.RENDERBUFFER,a,r.SAMPLES)).filter(o=>i.includes(o))],s={maxTextureSize:t.capabilities.maxTextureSize,maxRenderbufferSize:r.getParameter(r.MAX_RENDERBUFFER_SIZE),hdrSamples:n(r.RGBA16F),sdrSamples:n(r.RGBA8)};return Io.set(t,s),s},sg=(t,e)=>{if(t.shadowBufferFormat===ht.HDR_32)return 0;const r=t.shadowMsaaSamples===Is?1/0:t.shadowMsaaSamples;return Math.max(0,...e.filter(i=>Number.isFinite(i)&&i<=r))},At=new WeakMap,sl=t=>{let e=At.get(t);return e||(e={snapshot:null,listeners:new Set,demandListeners:new Set},At.set(t,e)),e},av=t=>{var e;return((e=At.get(t))==null?void 0:e.snapshot)??null},ov=(t,e)=>{const r=sl(t),i=r.listeners.size===0;if(r.listeners.add(e),i)for(const n of r.demandListeners)n(!0);return()=>{if(!(!r.listeners.delete(e)||r.listeners.size>0)){r.snapshot=null;for(const n of r.demandListeners)n(!1);r.demandListeners.size===0&&At.delete(t)}}},ag=(t,e)=>{const r=sl(t);return r.demandListeners.add(e),r.listeners.size>0&&e(!0),()=>{r.demandListeners.delete(e),r.listeners.size===0&&r.demandListeners.size===0&&At.delete(t)}},Do=t=>{var e;return(((e=At.get(t))==null?void 0:e.listeners.size)??0)>0},og=(t,e)=>{const r=At.get(t);if(r!=null&&r.listeners.size){r.snapshot=e;for(const i of r.listeners)i()}},Jn=t=>{const e=At.get(t);if(e){e.snapshot=null;for(const r of e.listeners)r();e.listeners.size===0&&e.demandListeners.size===0&&At.delete(t)}},Po=.01,cg=500,es=1500,ts=(t=ur)=>({lastFrameMs:null,sampleDurationMs:0,sampleCount:0,recoveryDurationMs:0,updateIntervalMs:dt[t].targetFps?1e3/dt[t].targetFps:0,targetFrameMs:dt[t].targetFps?1e3/dt[t].targetFps:0,depthScale:1,trial:null,adaptationBlocked:!1}),rs=(t,e,r,{enabled:i=!0,allowCadenceReduction:n=!0}={})=>{var S,f;if(t.targetFrameMs===0)return t;if(!i)return t.lastFrameMs===null&&t.updateIntervalMs===t.targetFrameMs&&t.depthScale===1&&!t.adaptationBlocked?t:{...t,lastFrameMs:null,sampleDurationMs:0,sampleCount:0,recoveryDurationMs:0,updateIntervalMs:t.targetFrameMs,depthScale:1,trial:null,adaptationBlocked:!1};if(!r||!Number.isFinite(e))return t.lastFrameMs===null?t:{...t,lastFrameMs:null,sampleDurationMs:0,sampleCount:0,recoveryDurationMs:0,depthScale:1,trial:null,adaptationBlocked:!1};const s=t.lastFrameMs===null?0:e-t.lastFrameMs;if(s<=0)return{...t,lastFrameMs:e};const a=t.sampleDurationMs+s,o=t.sampleCount+1;if(a<cg)return{...t,lastFrameMs:e,sampleDurationMs:a,sampleCount:o};const c=a/o,l=t.targetFrameMs;if(t.trial&&c>=t.trial.baselineFrameMs*.95||t.adaptationBlocked)return{...t,lastFrameMs:e,sampleDurationMs:0,sampleCount:0,trial:null,adaptationBlocked:!0,updateIntervalMs:((S=t.trial)==null?void 0:S.updateIntervalMs)??t.updateIntervalMs,depthScale:((f=t.trial)==null?void 0:f.depthScale)??t.depthScale};const g=c<l/1.2?t.recoveryDurationMs+a:0,p=n?c>l+Po?Math.min(l*4,t.updateIntervalMs+l):g>=es?Math.max(l,t.updateIntervalMs-l):t.updateIntervalMs:l,h=c>l+Po&&(!n||t.updateIntervalMs>=l*4)?Math.max(.5,t.depthScale-.25):g>=es?Math.min(1,t.depthScale+.25):t.depthScale;return{...t,lastFrameMs:e,sampleDurationMs:0,sampleCount:0,recoveryDurationMs:g>=es?0:g,updateIntervalMs:p,depthScale:h,trial:p>t.updateIntervalMs||h<t.depthScale?{baselineFrameMs:c,updateIntervalMs:t.updateIntervalMs,depthScale:t.depthScale}:null,adaptationBlocked:!1}},lg=900,xi=.01,ug=.25,dg=1e3,No=4e3,hg=10,al=2500,mg="shadow-simulation-raster-dem",fg=200,ol=.5,pg="shadow-simulation-sky-light",Ti=100,Oo=1e3,gg=1e3,Lo=100,Ar="carma-shadow-map-style-base",vg=(t,e=Qo,r=()=>!0,i=()=>"opaque",n=Pe.MAX)=>{const s=e.id,a=t;if(typeof a.getTerrain!="function"||typeof a.getSource!="function"||typeof a.setTerrain!="function")return Object.assign(()=>{},{refresh:()=>{}});const o=a.getTerrain(),c=new Map,l=new Map;let u=!1,d=!1,g=!1,p=null,h=!1,S,f=null,v=()=>{},b=null;const A=()=>{p&&(h?delete p.getMeshFrameDelta:p.getMeshFrameDelta=S,p=null,S=void 0,h=!1)},C=()=>{const E=a.terrain;!E||E===p||(A(),typeof E.getMeshFrameDelta=="function"&&(h=!Object.prototype.hasOwnProperty.call(E,"getMeshFrameDelta"),S=E.getMeshFrameDelta,E.getMeshFrameDelta=()=>0,p=E))},M=()=>{var Q;const E=a.terrain;!E||E===f||(v(),f=E,v=Qp(E,e.tileSize,n,()=>{var F;(F=t.setSourceTileLodParams)==null||F.call(t,9.314,3,e.id)}),(Q=t.triggerRepaint)==null||Q.call(t))},I=E=>`${E.type}:${String(E.source)}:${String(E["source-layer"])}`,R=()=>{var F;const Q=t.getStyle().layers??[];for(const ee of Q){if(!Jl(ee))continue;const q=I(ee);let de=l.get(ee.id);const be=t.getLayoutProperty(ee.id,"visibility");!de||de.signature!==q?(de={signature:q,value:be},l.set(ee.id,de)):be!=="none"&&(de.value=be),be!=="none"&&t.setLayoutProperty(ee.id,"visibility","none")}if(r()){t.getLayer(Ar)||(t.addLayer({id:Ar,type:"background",paint:{"background-color":In.baseColor,"background-opacity":In.opacity}},(F=Q[0])==null?void 0:F.id),g=!0);for(const ee of Q){if(ee.id===Ar||ee.type==="custom")continue;const q=In.opaqueDrapeProperties.get(ee.type);if(!q)continue;const de=I(ee);let be=c.get(ee.id);const P=t.getPaintProperty(ee.id,q);!be||be.signature!==de?(be={signature:de,property:q,value:P},c.set(ee.id,be)):P!==1&&(be.value=P),P!==1&&t.setPaintProperty(ee.id,q,1)}}},L=E=>{var Q;for(const[F,ee]of E)try{const q=(Q=t.getStyle().layers)==null?void 0:Q.find(({id:de})=>de===F);q&&I(q)===ee.signature&&t.getLayoutProperty(F,"visibility")==="none"&&t.setLayoutProperty(F,"visibility",ee.value===void 0?null:ee.value)}catch{}E.clear()},U=()=>{var E;for(const[Q,F]of c)try{const ee=(E=t.getStyle().layers)==null?void 0:E.find(({id:q})=>q===Q);ee&&I(ee)===F.signature&&t.getPaintProperty(Q,F.property)===1&&t.setPaintProperty(Q,F.property,F.value===void 0?null:F.value)}catch{}if(c.clear(),g){g=!1;try{t.getLayer(Ar)&&t.removeLayer(Ar)}catch{}}},B=()=>{if(!(u||d)){d=!0;try{if(ui(t)){A(),v(),v=()=>{},f=null,U(),L(l),a.getTerrain()&&a.setTerrain(null),b=null;return}if(!a.getSource(s)&&t.isStyleLoaded()&&t.addSource(s,{type:"raster-dem",tiles:[e.url],tileSize:e.tileSize,minzoom:e.minzoom,maxzoom:e.maxzoom,encoding:e.encoding,bounds:[...e.bounds]}),i()==="labels"?(U(),L(l)):R(),a.getSource(s)){const E=a.getTerrain();((E==null?void 0:E.source)!==s||(E.exaggeration??1)!==1)&&a.setTerrain({source:s,exaggeration:1}),M(),C()}b=null}catch(E){const Q=E instanceof Error?E.message:String(E);Q!==b&&(b=Q,console.error("[shadow-simulation] MapLibre terrain setup failed",E))}finally{d=!1}}},G=()=>{d||B()};t.on(Se.STYLE_DATA,B),t.on(Se.TERRAIN,G);let W=ui(t);const re=ql(t,()=>{const E=ui(t);E!==W&&(W=E,B())});return B(),Object.assign(()=>{if(!u){u=!0,re(),t.off(Se.STYLE_DATA,B),t.off(Se.TERRAIN,G),A(),v(),f=null,U(),L(l);try{!ui(t)&&o&&a.getSource(o.source)!==void 0?a.setTerrain(o):a.getTerrain()&&a.setTerrain(null)}catch{}}},{refresh:()=>{!u&&!d&&B()}})},cl=(t,e=!1)=>{if(t.userData[Ci.OVERLAY])return;t.castShadow=t.userData.disableShadowCasting!==!0;const r=Array.isArray(t.material)?t.material:[t.material];if(t.receiveShadow=r.some(i=>i.visible&&i.colorWrite),!t.userData.isShadowTerrainSurface)for(const i of r)i.shadowSide??(i.shadowSide=Ko),yp(i,e)},Pr=(t,e=!1)=>{t.traverseVisible(r=>{const i=r;!i.isMesh&&!i.isInstancedMesh||cl(i,e)})},yg=t=>t.visible&&t.opacity>0,Sg=(t,e)=>{let r=t;for(;r&&r!==e;){if(!r.visible)return!1;r=r.parent}return(Array.isArray(t.material)?t.material:[t.material]).some(yg)},Fo=t=>{t.traverse(e=>{const r=e;if(!r.isMesh&&!r.isInstancedMesh)return;const i=Array.isArray(r.material)?r.material:[r.material];for(const n of i)n.dispose()})},ll=(t,e,r)=>{t.updateMatrixWorld(!0),r==null||r.updateMatrixWorld(!0);const i=r?new Gr().setFromProjectionMatrix(new J().multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),r.coordinateSystem,r.reversedDepth):null;let n=e,s=e;const a=new Fe;return t.traverseVisible(o=>{var l,u;const c=o;c.userData[Ci.OVERLAY]||!c.isMesh&&!c.isInstancedMesh||!((u=(l=c.geometry)==null?void 0:l.getAttribute("position"))!=null&&u.count)||(c.geometry.boundingBox||c.geometry.computeBoundingBox(),c.geometry.boundingBox&&(a.copy(c.geometry.boundingBox).applyMatrix4(c.matrixWorld),!(i&&!i.intersectsBox(a))&&(n=Math.min(n,a.min.y),s=Math.max(s,a.max.y))))}),[n,s]},wg=(t,e,r,i)=>{var o;const n=e.filter(c=>c.providesTerrain).flatMap(c=>{var u;const l=(u=c.getViewElevationRange)==null?void 0:u.call(c,r);return l?[l]:[]});if(n.length>0)return[Math.min(...n.map(c=>c[0])),Math.max(...n.map(c=>c[1]))];let[s,a]=ll(t,i,r);for(const c of e){const l=(o=c.getViewElevationRange)==null?void 0:o.call(c,r);l&&(s=Math.min(s,l[0]),a=Math.max(a,l[1]))}return[s,a]},_g=[[-1,-1],[-1,1],[1,-1],[1,1]],xg=[[0,1],[1,3],[3,2],[2,0],[4,5],[5,7],[7,6],[6,4],[0,4],[1,5],[2,6],[3,7]],Tg=(t,e,r,i)=>{t.updateMatrixWorld(!0);const n=Math.min(e,r),s=Math.max(e,r),a=[-1,1].flatMap(c=>_g.map(([l,u])=>new T(l,u,c).unproject(t))),o=a.filter(c=>c.y>=n&&c.y<=s).map(c=>c.clone());for(const[c,l]of xg){const u=a[c],d=a[l],g=d.y-u.y;if(!(Math.abs(g)<=Number.EPSILON))for(const p of[n,s]){const h=(p-u.y)/g;h<0||h>1||o.push(u.clone().lerp(d,h))}}for(const c of o){const l=c.clone().sub(i),u=Math.hypot(l.x,l.z);if(u<=No)continue;const d=No/u;l.x*=d,l.z*=d,c.copy(i).add(l)}return o},bg=(t,e)=>{const r=e.uniformColor!==null&&Ge(e.uniformColorMix??1,0,1)>=1;t.traverse(i=>{const n=i;if(!n.userData.isBuilding)return;const s=Array.isArray(n.material)?n.material:[n.material];for(const a of s){e.fullOpacity&&(a.opacity=1,a.transparent=!1,a.depthWrite=!0);const o=a;r&&e.uniformColor&&o.color&&(o.color.set(e.uniformColor),o.vertexColors=!1),a.needsUpdate=!0}})},Mg=(t,e,r)=>{var d;const i=(d=e._originMerc)==null?void 0:d.toLngLat();if(!i)return null;const n=new Cs;n.name=`shadow-simulation-copy-${e.id}`;const s=new Map;let a=r,o=!1;const c=()=>{for(const[g,p]of s)g.visible=p;s.clear()},l=()=>{if(o)return;c(),Fo(n),n.clear(),e.scene.updateMatrixWorld(!0);const g=[];e.scene.traverse(p=>{var S,f;const h=p;!h.isMesh&&!h.isInstancedMesh||(f=(S=h.geometry)==null?void 0:S.getAttribute("position"))!=null&&f.count&&Sg(h,e.scene)&&g.push(h)});for(const p of g){const h=p.clone(!1);h.name=`${p.name||"mesh"}-shadow-simulation-copy`,h.visible=!0,h.matrixAutoUpdate=!1,h.matrix.copy(p.matrixWorld),h.material=Array.isArray(p.material)?p.material.map(S=>S.clone()):p.material.clone(),cl(h),s.set(p,p.visible),p.visible=!1,n.add(h)}n.visible=n.children.length>0,bg(n,a)},u={id:`shadow-simulation-generic-${e.id}`,originLngLat:[i.lng,i.lat],root:n,update:()=>{},dispose:()=>{o||(o=!0,c(),Fo(n),n.clear())}};return l(),n.visible?(t.addRuntime(u),{runtime:u,sync:l,updateBuildingAppearance(g){a=g,l()}}):(u.dispose(),null)},Eg=t=>{const e=new Fe().setFromObject(t.scene);e.isEmpty()?t.center.set(0,0,0):e.getCenter(t.center)},Rg=(t,e,r,i)=>{const n=new tl(e),a=n.lights[0].target,o=new Cs;o.visible=!1,o.userData[Ci.OVERLAY]=!0;const c=new $o(void 0,0);c.name=pg;const l=ep(i);l.mesh.userData[Ci.OVERLAY]=!0;const u=new Map;t.traverse(g=>{const p=g;p.isAmbientLight&&u.set(p,p.intensity)});const d={scene:t,frame:e,controller:n,skyLight:c,atmosphericSky:l,ambientLightIntensities:u,lightTarget:a,sunVector:null,sunVectorRoot:o,center:new T,shadowCameraOffsetMeters:Math.max(al,r*1.5),shadowAreaMeters:r,sunVectorLengthMeters:r*ol,sunVectorVisible:!1,shadowQuality:ur,shadowIntensity:1,directionToSun:new T(0,1,0),sunColor:new je(16773848),sunIntensity:Zr,receiverWorldPoints:[],minimumElevationMeters:0,maximumElevationMeters:0,dirty:!0};return Pr(t),Eg(d),t.add(c),t.add(l.mesh),d},Ag=(t,e)=>{t.scene.traverse(i=>{const n=i;n.isAmbientLight&&!t.ambientLightIntensities.has(n)&&t.ambientLightIntensities.set(n,n.intensity)});const r=e.skyIrradianceCoefficients;if((r==null?void 0:r.length)===t.skyLight.sh.coefficients.length){r.forEach((i,n)=>{t.skyLight.sh.coefficients[n].copy(i)}),t.skyLight.intensity=Zr;for(const i of t.ambientLightIntensities.keys())i.intensity=0;return}t.skyLight.sh.zero(),t.skyLight.intensity=0;for(const[i,n]of t.ambientLightIntensities)i.intensity=n},is=new J,Bo=(t,e,r=16773848,i,n=!0)=>{var a;const s=e.clone().normalize();t.directionToSun.copy(s),t.sunColor.set(r),t.lightTarget.position.copy(t.center);for(const o of t.controller.lights)o.target.position.copy(t.center),o.position.copy(s).multiplyScalar(t.shadowCameraOffsetMeters).add(t.center),o.color.copy(t.sunColor);(a=t.sunVector)==null||a.update(t.center,s,t.sunVectorLengthMeters),t.sunVectorRoot.visible=t.sunVectorVisible&&!!t.sunVector,t.sunIntensity=i??Zr;for(const o of t.controller.lights)o.intensity=t.sunIntensity;t.lightTarget.updateMatrixWorld(!0);for(const o of t.controller.lights)o.updateMatrixWorld(!0);n&&(t.controller.invalidate(),t.dirty=!0)},Cg=t=>{var e;for(const[r,i]of t.ambientLightIntensities)r.intensity=i;t.scene.remove(t.skyLight),t.scene.remove(t.atmosphericSky.mesh),t.scene.remove(t.sunVectorRoot),(e=t.sunVector)==null||e.dispose(),t.atmosphericSky.dispose(),t.controller.dispose()},Ig=(t,e={})=>{var ma,fa,pa,ga,va,ya,Sa;const{shadowAreaMeters:r,terrain:i,mapLibreTerrain:n,terrainQuality:s=Pe.MAX}=e,a=Gi();let o=i;const c=r??lg,l=t.getLight();let u=!0;const d=()=>{const m=xe(t).filter(y=>y.providesTerrain===!0);return m.length>0&&m.every(y=>y.mapStyleProjectionBlend==="overlay")?"labels":"opaque"},g=vg(t,n??Qo,()=>u,d,a?Pe.STANDARD:s),p=()=>{E.setMeshLabelStyle(d()==="labels")};let h=null,S={fullOpacity:!0,uniformColor:null,uniformColorMix:0,textureSaturation:1,textureColorCorrection:!0},f=1,v=null;const b=()=>{var m,y;return v??((y=(m=xe(t).find(w=>w.providesTerrain===!0))==null?void 0:m.getErrorTarget)==null?void 0:y.call(m))??eu};let A=a?Mi:void 0;const C=new WeakMap;let M=null,I={useTransmittanceLut:!0,useIrradianceLut:!0},R=!1,L=!1,U=Number.NEGATIVE_INFINITY,B=null,G=null,W=null,re=new je(((ma=o==null?void 0:o.material)==null?void 0:ma.color)??Ds);const Te=()=>{var m,y,w,x;if(u){W==null||W(),W=null,(y=(m=E.layer).setMapStyleProjectionVisible)==null||y.call(m,!0);return}(x=(w=E.layer).setMapStyleProjectionVisible)==null||x.call(w,!1),W??(W=Xl(t))},E=Yl(t),Q=(m,y)=>{var w,x;return{observer:{longitude:m[0],latitude:m[1],altitudeMeters:0},scenePosition:((x=(w=E.layer).projectLngLatToScene)==null?void 0:x.call(w,[m[0],m[1]],Ti))??new T(0,Ti,0),sceneFromLocal:y}},F=((pa=(fa=E.layer).getLocalFrame)==null?void 0:pa.call(fa))??null;let ee=(F==null?void 0:F.revision)??0,q=F?Q(F.lngLat,F.sceneFromLocalRotation):Q([t.getCenter().lng,t.getCenter().lat]);const de=()=>{var m;return((m=_e==null?void 0:_e.localFrame)==null?void 0:m.currentToReference)??(F==null?void 0:F.currentToReference)??is},be=new ba,P=new ki,Z=m=>{const y=m.renderCamera,{localFrame:w}=m;if(!w||w.currentToReference.equals(is))return y;const x=y instanceof ba?be.copy(y,!1):P.copy(y,!1);return x.matrixAutoUpdate=!1,x.matrixWorldAutoUpdate=!1,x.matrixWorld.multiplyMatrices(w.currentToReference,y.matrixWorld),x.matrixWorld.decompose(x.position,x.quaternion,x.scale),x.matrix.copy(x.matrixWorld),x.matrixWorldInverse.multiplyMatrices(y.matrixWorldInverse,w.referenceToCurrent),x},Ne=(m,y)=>{if(m!=null&&m.mountsOnLocalFrame||y.length===0)return y;const w=de();if(w.equals(is))return y;const x=new Fe;return y.map(H=>(x.min.set(...H.minimum),x.max.set(...H.maximum),x.applyMatrix4(w),{...H,minimum:[x.min.x,x.min.y,x.min.z],maximum:[x.max.x,x.max.y,x.max.z]}))},Me=new qf;let pt=()=>{},ce=m=>pt(m),gt=null,Ce=0;const ke=m=>{if(!o)return null;const y=t.getCenter(),{errorTargetPixels:w,motionErrorTargetPixels:x,shadowLevelOffset:H,minimumLevel:O,maximumLevel:k,maxSelectionTiles:j,requestConcurrency:ae,maxCacheBytes:le,maxCachedMeshes:ye,maxCachedMeshBytes:fe,meshSegments:ve,maximumMeshSegments:V,noDataHeightMeters:we,heightRangeMeters:Zt,material:Jt,...ci}=Au(o,a);return Ql(`${mg}-${++Ce}`,ci,m??[y.lng,y.lat],{errorTargetPixels:w??Nr,motionErrorTargetPixels:x,shadowLevelOffset:H,minimumLevel:O,maximumLevel:k,maxSelectionTiles:j,requestConcurrency:ae,maxCacheBytes:le,maxCachedMeshes:ye,maxCachedMeshBytes:fe,meshSegments:ve??ci.tileSize,maximumMeshSegments:V,noDataHeightMeters:we,heightRangeMeters:Zt,material:Jt,receivesMapStyleTexture:!0,onContentChanged:Tt=>ce(Tt),onError:Tt=>{const _r=Tt instanceof Error?Tt.message:String(Tt);_r!==gt&&(gt=_r,console.error("[shadow-simulation] Raster DEM terrain runtime failed",Tt))}})},ge=()=>xe(t).some(m=>m.providesTerrain===!0),Ct=()=>xe(t).every(m=>{var y,w;return!m.providesTerrain||(((y=m.hasRenderableContent)==null?void 0:y.call(m))??((w=m.isMainViewReady)==null?void 0:w.call(m))??!0)});let Ee=xe(t).filter(m=>m.providesTerrain),Y=ge()?null:ke(),jt=Y===null;Y&&E.layer.addRuntime(Y);const ul=((va=(ga=E.layer).getLocalFrameGroup)==null?void 0:va.call(ga))??E.layer.getScene(),_=Rg(E.layer.getScene(),ul,c,re),dl=new T;let Jr=0,ei=0;const He=bp({getRequest:()=>{var w;if(R||!o||!Y||!jt||xr(t)||Ie||L||Je!==0||!nt||!qt||!_e)return null;const m=(w=Y.getIdlePrefetchAvailability)==null?void 0:w.call(Y);if(!(m!=null&&m.ready))return null;const y=Y;return{key:JSON.stringify([Ce,Jr,ei,_e.renderCamera.projectionMatrix.elements,_e.renderCamera.matrixWorldInverse.elements,_e.viewport.x,_e.viewport.y]),run:async x=>{var O;if(await y.prefetchIdleTerrain(x),x.aborted||!Le()||!K||!_e||!E.layer.runIdleRender||yt.size>0||St().some(k=>k!==y&&k!==Qt)||It.some(({id:k})=>!/^\d+:[-\d]+:[-\d]+$/.test(k)))return;const H=((O=y.getIdleShadowRegions)==null?void 0:O.call(y))??[];H.length===0||!y.prepareIdleShadowRegion||(await K.prewarm({cells:hd(It),frame:_e,planningCamera:Z(_e),lighting:{directionToSun:_.directionToSun,color:_.sunColor,intensity:_.sunIntensity,shadowIntensity:_.shadowIntensity},targetPixels:dt[_.shadowQuality].shadowTexelErrorPixels,samples:wr(),signal:x,prepare:async(k,j)=>{const ae=md(k.receiverBounds,H);return ae===null?{covered:!1,group:null,isCurrent:()=>!1,dispose:()=>{}}:y.prepareIdleShadowRegion({receiverBounds:k.receiverBounds,casterBounds:k.casterBounds,terrainLevel:ae},j)}}),x.aborted||Xt())}}}});let vt=null,hn="";const ti=(m,y,w)=>{const x=`${m}:${y}`;x!==hn&&(hn=x,console.error(`[SHADOW] Atmospheric update rejected; retaining last valid frame (${m}: ${y})`,{phase:m,reason:y,...w}))},hl=()=>{hn=""},ze=()=>{He.cancel(),Jr+=1,ei+=1},qs=m=>{B=null,U=performance.now();const y=`#${m.color.getHexString()}`;if(L||E.setLocationLabelColor(y),!t.isStyleLoaded())return;const w=[1.5,m.azimuthDegrees,90-m.elevationDegrees],x=Ge(m.relativeIntensity,0,1),H=t.getLight(),O=H.position;H.anchor==="map"&&Array.isArray(O)&&O.length===w.length&&O.every((k,j)=>k===w[j])&&H.color===y&&H.intensity===x||t.setLight({anchor:"map",position:w,color:y,intensity:x})},ri=()=>{G!==null&&(globalThis.clearTimeout(G),G=null);const m=B;m&&qs(m)},Xs=m=>{if(B=m,!L&&!Ie){ri();return}const y=performance.now()-U;if(y>=Oo){ri();return}G===null&&(G=globalThis.setTimeout(()=>{G=null;const w=B;w&&qs(w)},Oo-y))},Yt=m=>{const y={longitude:q.observer.longitude,latitude:q.observer.latitude,altitudeMeters:Ti},w=Wf(m.instant,y,q);if(w)return ti("sunlight input",w,{observer:y,skyReference:q}),M;Me.ensure(()=>{if(R||!h)return;ze();const O=Yt(h);O&&Xs(O),t.triggerRepaint()},I),Me.ensureSky(()=>{R||!h||(ze(),Yt(h),t.triggerRepaint())});let x;try{x=Me.evaluate(m.instant,y,I,q)}catch(O){return ti("sunlight generation","generator threw",{observer:y,error:O}),M}const H=Gf(x);return H?(ti("sunlight output",H,{observer:y,sample:x}),M):(hl(),M=x,_.atmosphericSky.update(x.skyFrame,Me.skyTextures),Ag(_,x),Bo(_,x.directionToSun.clone().transformDirection(de()),x.radiance,Zr),x)};pt=m=>{R||(He.cancel(),K==null||K.invalidateContent(m),_.controller.invalidate(),_.dirty=!0)};const yt=new Map,St=()=>{const m=xe(t);return Y&&!m.includes(Y)?[Y,...m]:m};let $t=null,wt=null,Ye=null,_t=null,Qs=[];const Zs=()=>St().flatMap(m=>{var y;return Ne(m,((y=m.getActiveTileVolumes)==null?void 0:y.call(m))??[])}),mr=()=>$t??Zs(),Js=(m,y=xi*4)=>{if(!ge())return;const w=mr(),x=b(),H=m?Ro(m,w,x):Math.max(x,...w.filter(({loadReason:O})=>O!=="shadow").map(({errorPixels:O})=>O).filter(O=>Number.isFinite(O)));return Yp({stageErrorPixels:H,targetErrorPixels:x,groundTexelTargetMeters:y,finalBiasMeters:xi,maximumCoarseBiasMeters:ug})},ea=m=>{const y=$t,w=wt,x=Ye,H=_t;if($t=y??Zs(),wt=w??new Map,Ye=x??new Map,_t=H??new Map,!y){const O=Wp(Qs,$t);O.length>0&&(K==null||K.invalidateContent(O),gr.length=0),Qs=$t}try{return m()}finally{$t=y,wt=w,Ye=x,_t=H}};let Ie=!1,Ft=null,fr=null,mn=Number.NEGATIVE_INFINITY,fn=!1;const ta=new WeakMap,ml=m=>{var x,H,O;if(!m)return"none";const y=t.getCenter(),w=t.getCanvas();return[Math.round(y.lng*1e7),Math.round(y.lat*1e7),Math.round((((x=t.getZoom)==null?void 0:x.call(t))??0)*1e4),Math.round((((H=t.getBearing)==null?void 0:H.call(t))??0)*1e3),Math.round((((O=t.getPitch)==null?void 0:O.call(t))??0)*1e3),`${w.clientWidth||w.width}x${w.clientHeight||w.height}`,(h==null?void 0:h.azimuthDegrees)??"no-sun",(h==null?void 0:h.elevationDegrees)??"no-sun",_.shadowQuality].join(";")},pr=m=>{var j,ae,le,ye,fe,ve;if(L){const V=performance.now();if(V-mn<gg){fn=!0;return}mn=V}fr=m,fn=!1;const y=ml(m),w=_e==null?void 0:_e.renderCamera,x=m&&w?new Gr().setFromProjectionMatrix(new J().multiplyMatrices(w.projectionMatrix,w.matrixWorldInverse),w.coordinateSystem,w.reversedDepth):null,H=new Fe,O=x?Ne(Y,((j=Y==null?void 0:Y.getActiveTileVolumes)==null?void 0:j.call(Y))??[]).filter(V=>(H.min.fromArray(V.minimum),H.max.fromArray(V.maximum),x.intersectsBox(H))):void 0,k=[...xe(t),...Y?[Y]:[]];for(const V of new Set(k)){if((ae=V.setShadowStagePresentationGate)==null||ae.call(V,!1),!V.providesTerrain){V===Y?(le=V.setErrorTarget)==null||le.call(V,(o==null?void 0:o.errorTargetPixels)??Nr):(ye=V.setErrorTargetOverride)==null||ye.call(V,v),(fe=V.setShadowView)==null||fe.call(V,m?{...m,terrainReceivers:O}:null);continue}ta.get(V)!==y&&(ta.set(V,y),(ve=V.setShadowView)==null||ve.call(V,m))}},pn=m=>{var y;Ft=m;for(const w of new Set([...xe(t),...Y?[Y]:[]]))(y=w.setLiveShadowView)==null||y.call(w,m);Ie||pr(m)};let gn=Number.NEGATIVE_INFINITY,Ze=null,xt=null,vn=null,yn="",nt=!a;a&&(_.shadowQuality=qe.FPS_120);let Sn={},Oe=Dn(Pn(Sn,a),_.shadowQuality),st=null;const ii=()=>({format:Oe.shadowBufferFormat,msaaSamples:Oe.shadowBufferLayout===zr.TILED?0:sg(Oe,(Oe.shadowBufferFormat===ht.SDR_8?st==null?void 0:st.sdrSamples:st==null?void 0:st.hdrSamples)??[0,2,4])});let Kt=ii(),Je=0,wn=!1,ni=!1;const gr=[];let et=!0,_n=[],ra="",at=ts(_.shadowQuality),si=Number.POSITIVE_INFINITY,qt=!0,Bt=Ao(4096);_.controller.setMaxShadowMapSize(Bt.maxShadowMapSize);let _e=null,K=null,xn=null,It=[];const Le=()=>Oe.shadowBufferLayout===zr.TILED,vr=()=>{K==null||K.dispose(),K=null,xn=null,It=[]},Xt=()=>{if(R||!xt||!Do(t))return;const m=performance.now()-gn;if(m<Lo){Ze??(Ze=globalThis.setTimeout(()=>{Ze=null,Xt()},Lo-m));return}Ze!==null&&(globalThis.clearTimeout(Ze),Ze=null);const y=Oe.shadowBufferLayout,w=Oe.shadowSunDiscSamples,x=Le()?(K==null?void 0:K.stats)??null:null,H=JSON.stringify([y,w,x]);vn===xt&&yn===H||(gn=performance.now(),vn=xt,yn=H,og(t,{...xt,bufferLayout:y,sunDiscSamples:w,tiledStats:x}))};_.controller.setSoftSun(nt);const yr=(m,y)=>Math.round(m/y)*y,fl=m=>{var w,x,H,O;const y=t.getCenter();return[yr(y.lng,1e-7),yr(y.lat,1e-7),yr(((w=t.getZoom)==null?void 0:w.call(t))??0,1e-4),yr(((x=t.getBearing)==null?void 0:x.call(t))??0,.001),yr(((H=t.getPitch)==null?void 0:H.call(t))??0,.001),`${m.viewport.x}x${m.viewport.y}`,(O=m.cssViewport)==null?void 0:O.toArray().join("x")].join(";")},Sr=(m=!0,y=!0,w)=>{var ae,le,ye,fe;const x=t.getCenter(),H=(Y==null?void 0:Y.getElevation(x.lng,x.lat))??0,O=(le=(ae=E.layer).projectLngLatToScene)==null?void 0:le.call(ae,[x.lng,x.lat],H);if(!O){h&&Yt(h),y&&t.triggerRepaint();return}_.center.copy(O).applyMatrix4(de()),vt??(vt=ll(_.scene,O.y));const[k,j]=vt;if(w){const ve=Tg(Z(w),k,j,_.center);if(ve.length>0){const V=new Fe().setFromPoints(ve).getSize(new T),we=Math.max(...ve.map(Zt=>Zt.distanceTo(_.center)));_.sunVectorLengthMeters=Math.min(V.x,V.z)*ol,_.shadowAreaMeters=Math.max(r??0,hg,we*2),_n=ve}}else et=!0;if(_.shadowCameraOffsetMeters=Math.max(al,_.shadowAreaMeters*1.5),_.receiverWorldPoints=_n,_.minimumElevationMeters=k,_.maximumElevationMeters=j,_.dirty=!0,h&&(m||!M))Yt(h);else{_.lightTarget.position.copy(_.center);for(const ve of _.controller.lights)ve.target.position.copy(_.center),ve.target.updateMatrixWorld(!0);(ye=_.sunVector)==null||ye.root.position.copy(_.center),(fe=_.sunVector)==null||fe.root.updateMatrixWorld(!0)}y&&t.triggerRepaint()},Qt={id:"shadow-simulation-controller",originLngLat:[t.getCenter().lng,t.getCenter().lat],root:new Cs,updatePriority:fg,update(m){var Tt,_r;_e=m;const{localFrame:y}=m;y&&y.revision!==ee&&(ee=y.revision,q=Q(y.lngLat,y.sceneFromLocalRotation),M&&(M=$f(M,q),_.atmosphericSky.update(M.skyFrame,Me.skyTextures)));const w=(_r=(Tt=E.layer).getRenderer)==null?void 0:_r.call(Tt);w&&!st&&(st=ng(w),Kt=ii(),Bt=Ao(Math.min(st.maxTextureSize,st.maxRenderbufferSize)),_.controller.setMaxShadowMapSize(Bt.maxShadowMapSize)),si=ig(Bt.maxAccumulationPixels,Kt),qt=m.viewport.x*m.viewport.y<=si,at=rs(at,performance.now(),Ie,{enabled:Oe.shadowAdaptiveQuality,allowCadenceReduction:!Le()});const x=Math.max(0,m.lodCamera.position.y-m.lookTarget.y),H=Ti+x,O=q.scenePosition.y+x;![...m.lodCamera.matrixWorld.elements,...m.lodCamera.projectionMatrix.elements].every(Number.isFinite)||!Number.isFinite(H)||!Number.isFinite(O)?ti("render camera","local Three.js camera matrix or altitude is invalid",{altitudeMeters:H,cameraHeightAboveTargetMeters:x,matrixWorld:m.lodCamera.matrixWorld.elements,projectionMatrix:m.lodCamera.projectionMatrix.elements}):(_.atmosphericSky.updateViewCamera(m.lodCamera),_.atmosphericSky.updateObserverScenePosition(dl.set(q.scenePosition.x,O,q.scenePosition.z)));const j=fl(m);if((et||j!==ra)&&(performance.now(),ra=j,vt=Ie?vt??[_.minimumElevationMeters,_.maximumElevationMeters]:wg(_.scene,xe(t),m.renderCamera,_.center.y),Sr(!1,!1,m),et=!1),!_.dirty)return;_.sunVectorVisible&&_.sunVector&&_.sunVector.root.cone.position.y!==_.sunVectorLengthMeters&&Bo(_,_.directionToSun,_.sunColor,_.sunIntensity),Jr+=1;const ae=mr(),le=ae.flatMap(({minimum:er,maximum:bt})=>cc(Z(m),new Fe(new T(...er),new T(...bt))));if(_.receiverWorldPoints=le.length>0?le:_n,_.receiverWorldPoints.length===0||!h){pn(null),xt=null,Jn(t);return}if(Le()){It=dd(ae.filter(({loadReason:bt})=>bt!=="shadow").map(({id:bt,minimum:li,maximum:En,receiverObjectId:Rn})=>({id:bt,receiverObjectId:Rn,bounds:new Fe(new T(...li),new T(...En))})));const er=od(It,Z(m));er.length>0&&(_.receiverWorldPoints=[...er])}const ye=Co(Bt.maxShadowMapSize,_.shadowQuality,m.viewport.x*m.viewport.y,Ie?at.depthScale:1),fe=m.cssViewport??m.viewport,ve=Co(Bt.maxShadowMapSize,_.shadowQuality,fe.x*fe.y,Ie?at.depthScale:1),V=_.controller.update({maxReceiverBiasMeters:Js(),receiverWorldPoints:_.receiverWorldPoints,receiverAnchorWorldPosition:_.center,minimumElevationMeters:_.minimumElevationMeters,maximumElevationMeters:_.maximumElevationMeters,directionToSun:_.directionToSun,color:_.sunColor,intensity:_.sunIntensity,shadowIntensity:_.shadowIntensity,quality:_.shadowQuality,mapTexelBudget:ye,casterMapTexelBudget:ve,groundTexelFit:Oe.shadowGroundTexelFit,stabilizeMapSize:Ie});if(_.dirty=!1,!V){pn(null),xt=null,Jn(t);return}const we=V.camera,Zt=_.controller.lights[0].shadow.camera,Jt=M==null?void 0:M.skyFrame.directionToSunECEF;pn({camera:Zt,directionToSunECEF:Jt?[Jt.x,Jt.y,Jt.z]:void 0,casterAngularRadiusRadians:nt?Fr:0,shadowMapSize:{width:(we.rightMeters-we.leftMeters)/V.casterMetersPerTexel[0],height:(we.topMeters-we.bottomMeters)/V.casterMetersPerTexel[1]}});const ci=Do(t);if(we&&ci){m.lodCamera.updateMatrixWorld(!0),m.lodCamera.updateProjectionMatrix();const er=St().flatMap(bt=>{var li;return(((li=bt.getActiveTileVolumes)==null?void 0:li.call(bt))??[]).map(({id:En,loadReason:Rn,minimum:_l,maximum:xl})=>({id:En,loadReason:Rn,minimum:_l,maximum:xl}))});xt={bufferLayout:Oe.shadowBufferLayout,sunDiscSamples:Oe.shadowSunDiscSamples,tiledStats:null,cameraRangeMeters:Zt.position.distanceTo(_.controller.lights[0].target.position),leftMeters:we.leftMeters,rightMeters:we.rightMeters,bottomMeters:we.bottomMeters,topMeters:we.topMeters,nearMeters:we.nearMeters,farMeters:we.farMeters,projectionMatrixElements:we.projectionMatrixElements,shadowMapWidth:we.shadowMapWidth,shadowMapHeight:we.shadowMapHeight,minimumElevationMeters:_.minimumElevationMeters,maximumElevationMeters:_.maximumElevationMeters,sceneAnchorPositionElements:_.center.toArray(),mainCamera:{viewMatrixElements:[...m.lodCamera.matrixWorldInverse.elements],projectionMatrixElements:[...m.lodCamera.projectionMatrix.elements],nearMeters:m.lodCamera.near,farMeters:m.lodCamera.far,viewportWidth:m.viewport.x,viewportHeight:m.viewport.y},tileVolumes:er,shadow:V,atmosphericSunlight:M?{azimuthDegrees:M.azimuthDegrees,elevationDegrees:M.elevationDegrees,relativeIntensity:M.relativeIntensity,color:`#${M.color.getHexString()}`,transmittanceReady:M.atmosphericTransmittanceReady,irradianceReady:M.atmosphericIrradianceReady}:null},Xt()}},dispose:()=>{}};E.layer.addRuntime(Qt);const wr=()=>Oe.shadowSunDiscSamples,ia=()=>{var w,x;if(!Le()||!_e||_.directionToSun.y<=0)return null;const m=(x=(w=E.layer).getRenderer)==null?void 0:x.call(w);if(!m)return null;let y=!1;if(!K||xn!==m){const H=It;vr(),It=H,xn=m,K=new zp(_.scene,m,{light:_.controller.lights[0],sky:_.atmosphericSky.mesh,overlay:_.sunVectorRoot,frame:_.frame,maximumMapSize:Bt.maxShadowMapSize,isCorridorReady:(O,k,j)=>{const ae=Zn(O,k,j),le=wt==null?void 0:wt.get(ae);if(le!==void 0)return le;const ye=St().every(fe=>{var ve;return((ve=fe.isShadowRegionReady)==null?void 0:ve.call(fe,O,k,j))??(fe.getRequestDemand?fe.getRequestDemand()===0:!fe.providesTerrain||!xr(t))});return wt==null||wt.set(ae,ye),ye},receiverStageError:O=>{const k=Zn(O),j=_t==null?void 0:_t.get(k);if(j!==void 0)return j;const ae=Ro(O,mr(),ge()?b():(o==null?void 0:o.errorTargetPixels)??Nr);return _t==null||_t.set(k,ae),ae},receiverBiasLimit:(O,k)=>Js(O,k)??xi,onPresentedPages:(O,k)=>{var ae;const j=Gp(mr(),k.map(({id:le,receiverBounds:ye})=>({id:le,bounds:ye})),O.map(({id:le,receiverBounds:ye})=>({id:le,bounds:ye})));if(j.length!==0)for(const le of St())(ae=le.acknowledgeShadowStage)==null||ae.call(le,j)},corridorRevision:(O,k,j)=>{var ve;const ae=Zn(O,k,j),le=Ye==null?void 0:Ye.get(ae);if(le!==void 0)return le;const ye=[];for(const V of St()){if(V===Qt)continue;const we=(ve=V.getShadowRegionRevision)==null?void 0:ve.call(V,O,k,j);if(!we)return Ye==null||Ye.set(ae,null),null;ye.push(JSON.stringify([V.id,we]))}const fe=ye.length?JSON.stringify(ye.sort()):null;return Ye==null||Ye.set(ae,fe),fe},dateTimeKey:()=>(h==null?void 0:h.instant.toISOString())??null,worldBasis:()=>{const O=E.layer.projectSceneToLngLat([0,0,0]);if(!O)throw new Error("Shared scene origin is not initialized");const k=wu.MercatorCoordinate.fromLngLat(O,0);return jp(k.x,k.y,k.meterInMercatorCoordinateUnits())},requestRepaint:()=>t.triggerRepaint(),visualEpoch:()=>ei,auditCorridors:O=>{const k=mr(),j=St();return O.map(({id:ae,casterBounds:le,receiverBounds:ye})=>$p({id:ae,casterBounds:le,sunElevationDegrees:(h==null?void 0:h.elevationDegrees)??0,volumes:k,regions:j.flatMap(fe=>{var V;const ve=(V=fe.getShadowRegionDiagnostics)==null?void 0:V.call(fe,le,void 0,ye);return ve?[ve]:[]})}))},runIdleRender:O=>{var k,j;return((j=(k=E.layer).runIdleRender)==null?void 0:j.call(k,O))??!1}}),y=!0}return!Ie||y?K.update(It,_e,{maxReceiverBiasMeters:ge()?xi:void 0,directionToSun:_.directionToSun,color:_.sunColor,intensity:_.sunIntensity,shadowIntensity:_.shadowIntensity},dt[_.shadowQuality].shadowTexelErrorPixels,Z(_e)):K.updatePresentation(_e,Z(_e)),K},pl=Vp(),ai=()=>Le()&&pl(St()),na={onSettled:He.onSettled,onPresented:()=>{var y;const m=performance.now();for(const w of xe(t))(y=w.onShadowPresented)==null||y.call(w,m)},get options(){return Kt},get maxRenderTargetPixels(){return si},get rounds(){return wr()},epoch:()=>Jr,visualEpoch:()=>ei,pending:()=>qt&&nt&&!L&&(!jt||ai()||!Le()&&!Ct()||!Le()&&xr(t)||Ie||!Le()&&Je!==0),active:()=>qt&&nt&&jt&&!ai()&&(Le()||Ct())&&(Le()||!xr(t))&&!Ie&&!L&&(Le()||Je===0)&&h!==null&&Ft!==null&&_.receiverWorldPoints.length>0,retainSettledFrame:()=>qt&&nt&&h!==null&&Ft!==null&&_.receiverWorldPoints.length>0,prepareRound:m=>{Le()||_.controller.applySunDiscSample(m,wr())},finishRound:()=>_.controller.restoreSunDiscCenter(),get renderProgressive(){if(Le())return(m,y)=>!nt||L||!qt?null:ea(()=>{if(ai())return null;const w=ia();if(!w)return null;const x=w.renderProgressive(m,{...y,samples:wr(),maxRenderTargetPixels:si,options:Kt});return Xt(),x})},renderScene:(m,y)=>!nt||L||!Le()?!1:ea(()=>{if(ai())return!1;const w=ia();if(!w)return!1;const x=w.render(m,y,wr(),!Ie);return Xt(),x})};(Sa=(ya=E.layer).setAccumulationController)==null||Sa.call(ya,na);const oi=()=>{vt=null,et=!0,Sr()};ce=m=>{pt(m),oi()};const sa=()=>{He.cancel(),K==null||K.pausePending(),at=rs(at,performance.now(),!1),Ie=!0,et=!0},Tn=()=>{He.cancel(),et=!0},aa=()=>{Ie=!1,at=rs(at,performance.now(),!1),wn?(wn=!1,Mn()):oi(),M&&(B=M,ri()),fr!==Ft&&pr(Ft)},oa=()=>{Tn(),t.triggerRepaint()};t.on(Se.MOVE_START,sa),t.on(Se.MOVE,Tn),t.on(Se.MOVE_END,aa),t.on(Se.RESIZE,oa);const bn=m=>{m.ready.then(y=>{!y||R||Y!==m||(jt=!0,oi(),t.triggerRepaint())})},ca=()=>{var x,H,O,k;const m=xe(t).filter(j=>j.providesTerrain);if(m.length!==Ee.length||m.some(j=>!Ee.includes(j))){Ee=m,vr(),(H=(x=E.layer).setAccumulationController)==null||H.call(x,null),(k=(O=E.layer).setAccumulationController)==null||k.call(O,na);for(const j of _.controller.lights)j.shadow.map&&(Nt(j.shadow.map),j.shadow.map=null);ze()}const y=ge();if(!o)return;if(y){He.cancel(),jt=!0;const j=Y;Y=null,j&&E.layer.hasRuntime(j.id)&&E.layer.removeRuntime(j.id),vt=null,et=!0;return}if(Y)return;const w=ke();w&&(He.cancel(),jt=!1,Y=w,w.setMaterialColor(`#${re.getHexString()}`),w.setShadowView(fr),E.layer.addRuntime(w),bn(w),vt=null,et=!0)};Y&&bn(Y),Sr();const la=()=>{if(R)return;const m=new Set(Zl(t));for(const[y,w]of yt)m.has(y)||(E.layer.removeRuntime(w.runtime.id),yt.delete(y));for(const y of m){const w=yt.get(y);if(w){w.sync();continue}if(!y.scene)continue;const x=Mg(E.layer,y,S);x&&yt.set(y,x)}Pr(E.layer.getScene(),ge()),oi(),t.triggerRepaint()},gl=$l(t,la);la(),p();const Mn=()=>{var m,y,w;if(!R){Je&&(window.clearTimeout(Je),Je=0),ni?K==null||K.invalidateContent():gr.length>0&&(K==null||K.invalidateContent(gr)),ni=!1,gr.length=0,He.cancel(),ca(),g.refresh(),p();for(const x of xe(t))x.providesTerrain&&((m=x.setErrorTargetOverride)==null||m.call(x,v),(!C.has(x)||C.get(x)!==A)&&((y=x.setCacheBudget)==null||y.call(x,A),C.set(x,A))),(w=x.setShadowSimulationStyle)==null||w.call(x,S);pr(fr),yt.size>0&&Pr(E.layer.getScene(),ge()),_.controller.invalidate(),_.dirty=!0,et=!0,vt=null,t.triggerRepaint()}},vl=Zo(t,m=>{if(R)return;const y=m==null?void 0:m.bounds;if(m===void 0){const w=xe(t).filter(x=>x.providesTerrain);(w.length!==Ee.length||w.some(x=>!Ee.includes(x)))&&(ca(),g.refresh(),p())}for(const w of(m==null?void 0:m.roots)??[])Pr(w,ge());if((y==null?void 0:y.length)===0){t.triggerRepaint();return}if(y===void 0?ni=!0:y.length>0&&gr.push(...y.map(w=>w.clone())),He.cancel(),y===void 0&&St().some(w=>w!==Qt&&!w.getActiveTileVolumes)&&(ni=!0),Ie){wn=!0,t.triggerRepaint();return}t.triggerRepaint(),!Je&&(Je=window.setTimeout(()=>{Je=0,Mn()},dg))}),yl=Kl(t,()=>{xr(t)&&He.cancel(),R||t.triggerRepaint()});Mn();const ua=m=>{const y=M??Yt(m);y&&Xs(y)},Sl=m=>{(h==null?void 0:h.instant.getTime())!==m.instant.getTime()&&(K==null||K.cancelPending(!0),ze(),h=m,Sr(),ua(m))},da=()=>{R||h&&ua(h)};t.on(Se.STYLE_LOAD,da);const ha=()=>{gn=Number.NEGATIVE_INFINITY,_.dirty=!0,t.triggerRepaint()},wl=ag(t,m=>{m?ha():(Ze!==null&&globalThis.clearTimeout(Ze),Ze=null,xt=null,vn=null,yn="")});return{updateSolarPosition:Sl,updateMeshCacheBudget(m){var w;a&&(m=Math.min(m??Mi,Mi));const y=m!==void 0&&Number.isFinite(m)&&m>0?m:void 0;if(!(A===y&&xe(t).filter(x=>x.providesTerrain).every(x=>C.has(x)&&C.get(x)===y))){A=y;for(const x of xe(t))x.providesTerrain&&((w=x.setCacheBudget)==null||w.call(x,y),C.set(x,y));t.triggerRepaint()}},updateTerrain(m){if(o===m||(He.cancel(),o=m,!m||ge()))return;const y=Y,w=ke(y==null?void 0:y.originLngLat);w&&(w.setMaterialColor(`#${re.getHexString()}`),w.setShadowView(fr),y&&w.adoptPresentation(y),Y=w,E.layer.addRuntime(w),y&&E.layer.removeRuntime(y.id),bn(w),vt=null,et=!0,ze(),ce(),t.triggerRepaint())},updateTerrainColor(m){const y=new je(m);re.equals(y)||(ze(),Y==null||Y.setMaterialColor(m),_.atmosphericSky.updateGroundAlbedo(y),re=y)},updateMeshErrorTarget(m){var y;if(v!==m){v=m;for(const w of xe(t))(y=w.setErrorTargetOverride)==null||y.call(w,m);t.triggerRepaint()}},updateBuildingAppearance(m){var y;if(!(S.fullOpacity===m.fullOpacity&&S.uniformColor===m.uniformColor&&(S.uniformColorMix??1)===(m.uniformColorMix??1)&&(S.textureSaturation??1)===(m.textureSaturation??1)&&(S.textureColorCorrection??!1)===(m.textureColorCorrection??!1))){ze(),K==null||K.invalidateContent(),S=m;for(const w of yt.values())w.updateBuildingAppearance(m);for(const w of xe(t))(y=w.setShadowSimulationStyle)==null||y.call(w,m);Pr(E.layer.getScene(),ge()),_.controller.invalidate(),_.dirty=!0,t.triggerRepaint()}},updateShadowQuality(m){a&&(m=qe.FPS_120),_.shadowQuality!==m&&(ze(),_.shadowQuality=m,Oe=Dn(Pn(Sn,a),m),Kt=ii(),at=ts(m),_.dirty=!0,Sr(),_.controller.invalidate())},updateRenderQuality(m){m=Pn(m,a);const y=Oe,w=Dn(m,_.shadowQuality);Sn={...m},Oe=w;const x=y.shadowAdaptiveQuality!==w.shadowAdaptiveQuality;(x||y.shadowBufferLayout!==w.shadowBufferLayout)&&(at=ts(_.shadowQuality)),!(!x&&y.shadowBufferLayout===w.shadowBufferLayout&&y.shadowBufferFormat===w.shadowBufferFormat&&y.shadowSunDiscSamples===w.shadowSunDiscSamples&&y.shadowMsaaSamples===w.shadowMsaaSamples&&y.shadowGroundTexelFit===w.shadowGroundTexelFit)&&(Kt=ii(),ze(),y.shadowBufferLayout!==w.shadowBufferLayout&&(vr(),et=!0),(x||y.shadowGroundTexelFit!==w.shadowGroundTexelFit||y.shadowBufferLayout!==w.shadowBufferLayout)&&(_.dirty=!0,_.controller.invalidate()),Xt(),t.triggerRepaint())},updateSoftSunShadows(m){m=m&&!a,nt!==m&&(ze(),nt=m,vr(),_.controller.setSoftSun(m),_.controller.invalidate(),_.dirty=!0,t.triggerRepaint())},updateTimeAnimating(m){L!==m&&(He.cancel(),L=m,m&&(K==null||K.pausePending()),m||(ri(),mn=Number.NEGATIVE_INFINITY,fn&&!Ie&&pr(Ft),_.dirty=!0),t.triggerRepaint())},refreshProjectionDebug:ha,updateShadowIntensity(m){const y=Ge(m,0,1);if(f!==y){ze(),f=y,_.shadowIntensity=f;for(const w of _.controller.lights)w.shadow.intensity=f;t.triggerRepaint()}},updateMapStyleContentVisibility(m){u!==m&&(u=m,Te(),t.triggerRepaint())},updateMapStyleElevationVisibility(m,y){E.setMapStyleElevationVisibility(m,y),t.triggerRepaint()},updateMapStyleLabelOverlayVisibility(m){E.setPointLabelOverlayVisible(m),t.triggerRepaint()},updateSunDebugVectorVisibility(m){_.sunVectorVisible!==m&&(ze(),_.sunVectorVisible=m,_.sunVectorRoot.visible=m&&!!h,m?(_.frame.add(_.sunVectorRoot),Wi(async()=>{const{buildSunVector:y}=await import("./shadow-sun-vector-CsEdK9ix.js");return{buildSunVector:y}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10])).then(({buildSunVector:y})=>{if(R||!_.sunVectorVisible||_.sunVector)return;const w=y();_.sunVector=w,_.sunVectorRoot.add(w.root),w.update(_.center,_.directionToSun,_.sunVectorLengthMeters),w.root.visible=!0,_.sunVectorRoot.visible=!!h,t.triggerRepaint()}).catch(y=>{R||console.error("Unable to load sun-vector diagnostics",y)})):(_.frame.remove(_.sunVectorRoot),_.sunVector&&(_.sunVectorRoot.remove(_.sunVector.root),_.sunVector.dispose(),_.sunVector=null)),t.triggerRepaint())},updateAtmosphericLutUsage(m){I.useTransmittanceLut===m.useTransmittanceLut&&I.useIrradianceLut===m.useIrradianceLut||(ze(),I=m,M=null,h&&(Yt(h),pt()),t.triggerRepaint())},dispose(){var m,y,w,x,H,O;if(!R){R=!0,He.dispose(),wl(),vr(),Ze!==null&&(globalThis.clearTimeout(Ze),Ze=null),xt=null,Je&&window.clearTimeout(Je),G!==null&&(globalThis.clearTimeout(G),G=null),Jn(t),t.off(Se.STYLE_LOAD,da),t.off(Se.MOVE_START,sa),t.off(Se.MOVE,Tn),t.off(Se.MOVE_END,aa),t.off(Se.RESIZE,oa),gl(),vl(),yl(),Ft=null,pr(null);for(const k of xe(t))(m=k.setShadowSimulationStyle)==null||m.call(k,null),(y=k.setErrorTargetOverride)==null||y.call(k,null);for(const k of yt.values())E.layer.hasRuntime(k.runtime.id)&&E.layer.removeRuntime(k.runtime.id);yt.clear();try{W==null||W()}catch{}W=null,(x=(w=E.layer).setMapStyleProjectionVisible)==null||x.call(w,!0),g(),E.layer.hasRuntime(Qt.id)&&E.layer.removeRuntime(Qt.id),Y&&E.layer.hasRuntime(Y.id)&&E.layer.removeRuntime(Y.id),Me.dispose(),Cg(_),(O=(H=E.layer).setAccumulationController)==null||O.call(H,null),E.release();try{t.isStyleLoaded()&&t.setLight(l)}catch{}}}}},Dg=(t,e,r,i)=>{const n=i+e/2,s=Math.floor(n),a=n-s;if(s===0)return{dateState:t,yearDayProgress:a};const o=ns(t,s);return{dateState:Hi({...t,...o},r)??t,yearDayProgress:a}},Pg=(t,e,r)=>{const i=Ho(t,r),n=Math.ceil(i.sunriseMinutes),s=Math.floor(i.sunsetMinutes),a=t.minutes+e;return{dateState:{...t,minutes:a>s?n:a},yearDayProgress:0}},Ng=(t,e,r,i,n)=>{const s=e??r;if(!(t!=null&&t.enabled)||!t.isAnimating)return{dateState:s,yearDayProgress:n};const a=t.animationSpeed??4;return(t.animationMode??zt.DAY)===zt.YEAR?Dg(s,a,i,n):Pg(s,a,i)},Og=1e3/30,Lg=250,Fg=({dateState:t,setDateState:e,location:r,shadowState:i,onFrame:n})=>{const s=z.useRef(null),a=z.useRef(null),o=z.useRef(t),c=z.useRef(t),l=z.useRef(e),u=z.useRef(n);c.current=t,l.current=e,u.current=n;const{animationMode:d,animationSpeed:g,enabled:p,isAnimating:h}=i,S=p&&(h??!1);return z.useEffect(()=>{const f=t!==o.current;if(o.current=t,!!f){if(t===a.current){S||(s.current=null);return}s.current=null}},[S,t]),z.useEffect(()=>{if(!S)return;const f={animationMode:d,animationSpeed:g,enabled:p,isAnimating:h};let v=0,b=performance.now();const A=M=>{a.current=M,l.current(M)},C=window.setInterval(()=>{const M=s.current??c.current,I=Ng(f,M,M,r,v);v=I.yearDayProgress,s.current=I.dateState,u.current(I.dateState);const R=performance.now();R-b>=Lg&&(b=R,A(I.dateState))},Og);return()=>{window.clearInterval(C);const M=s.current;M&&M!==a.current&&A(M)}},[S,d,g,p,h,r]),s},Bg=({tiledShadows:t=!1,libreMap:e,shadowAreaMeters:r,terrain:i,mapLibreTerrain:n,terrainQuality:s,location:a,state:o,dateState:c,setDateState:l})=>{const u=z.useRef(null),d=Fg({dateState:c,setDateState:l,location:a,shadowState:o,onFrame:f=>{var v;o.enabled&&((v=u.current)==null||v.updateSolarPosition(Hr(f,a)))}}),g=z.useMemo(()=>Tu(i,Ea(o.shadowQuality),o.terrainErrorTarget),[i,o.shadowQuality,o.terrainErrorTarget]),p=z.useRef(g);p.current=g;const[h,S]=z.useState(0);return z.useEffect(()=>{if(!e||!o.enabled)return;let f=null,v=null,b=null;const A=()=>{e.off(Se.STYLE_DATA,C),e.off(Se.STYLE_LOAD,C),e.off(Se.IDLE,C)},C=()=>{f||v!==null||b!==null||!e.isStyleLoaded()||(v=requestAnimationFrame(()=>{v=null,b=setTimeout(()=>{b=null,e.isStyleLoaded()&&(A(),f=Ig(e,{shadowAreaMeters:r,terrain:p.current,mapLibreTerrain:n,terrainQuality:s}),u.current=f,S(M=>M+1))},0)}))};return e.on(Se.STYLE_DATA,C),e.on(Se.STYLE_LOAD,C),e.on(Se.IDLE,C),C(),()=>{A(),v!==null&&cancelAnimationFrame(v),b!==null&&clearTimeout(b),u.current=null,f==null||f.dispose(),f=null}},[e,r,o.enabled,n,s]),z.useEffect(()=>{var f;(f=u.current)==null||f.updateTerrain(g)},[g,h]),z.useEffect(()=>{var v;if(!o.enabled)return;const f=d.current??c;(v=u.current)==null||v.updateSolarPosition(Hr(f,a))},[d,c,a,o.enabled,h]),z.useEffect(()=>{var f;o.enabled&&((f=u.current)==null||f.updateShadowQuality(Ea(o.shadowQuality)))},[o.enabled,o.shadowQuality,h]),z.useEffect(()=>{var f;o.enabled&&((f=u.current)==null||f.updateRenderQuality({shadowAdaptiveQuality:o.shadowAdaptiveQuality,shadowBufferLayout:t?o.shadowBufferLayout:void 0,shadowBufferFormat:o.shadowBufferFormat,shadowSunDiscSamples:o.shadowSunDiscSamples,shadowMsaaSamples:o.shadowMsaaSamples,shadowGroundTexelFit:o.shadowGroundTexelFit}))},[o.enabled,t,o.shadowAdaptiveQuality,o.shadowBufferLayout,o.shadowBufferFormat,o.shadowSunDiscSamples,o.shadowMsaaSamples,o.shadowGroundTexelFit,h]),z.useEffect(()=>{var f;o.enabled&&((f=u.current)==null||f.updateMeshErrorTarget(o.meshErrorTarget??null))},[o.enabled,o.meshErrorTarget,h]),z.useEffect(()=>{var f;o.enabled&&((f=u.current)==null||f.updateMeshCacheBudget(o.meshCacheBudgetBytes))},[o.enabled,o.meshCacheBudgetBytes,h]),z.useEffect(()=>{var f;o.enabled&&((f=u.current)==null||f.updateSoftSunShadows(o.softSunShadows??!0))},[o.enabled,o.softSunShadows,h]),z.useEffect(()=>{var f;o.enabled&&((f=u.current)==null||f.updateTimeAnimating(o.isAnimating??!1))},[o.enabled,o.isAnimating,h]),z.useEffect(()=>{var f;o.enabled&&((f=u.current)==null||f.updateShadowIntensity(o.shadowIntensity??1))},[o.enabled,o.shadowIntensity,h]),z.useEffect(()=>{var f;o.enabled&&((f=u.current)==null||f.updateMapStyleContentVisibility(o.showMapStyleContent??!0))},[o.enabled,o.showMapStyleContent,h]),z.useEffect(()=>{var f;o.enabled&&((f=u.current)==null||f.updateMapStyleLabelOverlayVisibility((o.showMapStyleContent??!0)&&(o.showMapStyleLabels??!0)))},[o.enabled,o.showMapStyleContent,o.showMapStyleLabels,h]),z.useEffect(()=>{var f;o.enabled&&((f=u.current)==null||f.updateMapStyleElevationVisibility(o.showMapStyleElevationLines??!1,o.showMapStyleElevationLabels??!1))},[o.enabled,o.showMapStyleElevationLines,o.showMapStyleElevationLabels,h]),z.useEffect(()=>{var f;o.enabled&&((f=u.current)==null||f.updateSunDebugVectorVisibility((o.showProjectionDebugView??!1)&&(o.showSunDebugVector??!0)))},[o.enabled,o.showProjectionDebugView,o.showSunDebugVector,h]),z.useEffect(()=>{if(!e)return;const f=o.enabled&&(o.showProjectionDebugView??!1)&&(o.showTileBounds??!0);if(!f)return;const v=new Set,b=()=>{var M;const C=xe(e);for(const I of v)C.includes(I)||v.delete(I);for(const I of C)v.has(I)||((M=I.setTileBoundsVisible)==null||M.call(I,f),v.add(I))};b();const A=Zo(e,b);return()=>{var C;A();for(const M of xe(e))(C=M.setTileBoundsVisible)==null||C.call(M,!1)}},[e,h,o.enabled,o.showProjectionDebugView,o.showTileBounds]),z.useEffect(()=>{var f;o.enabled&&((f=u.current)==null||f.updateAtmosphericLutUsage({useTransmittanceLut:o.useTransmittanceLut??!0,useIrradianceLut:o.useSkyIrradianceLut??!0}))},[o.enabled,o.useSkyIrradianceLut,o.useTransmittanceLut,h]),z.useEffect(()=>{var f;o.enabled&&((f=u.current)==null||f.updateTerrainColor(o.terrainColor??Ds))},[o.enabled,o.terrainColor,h]),z.useEffect(()=>{var f;o.enabled&&((f=u.current)==null||f.updateBuildingAppearance({fullOpacity:o.buildingsFullOpacity??!0,uniformColor:o.buildingColor??tc,uniformColorMix:Ge(o.buildingColorMix??Jo,0,1),textureColorCorrection:o.meshTextureColorCorrection??!0,textureSaturation:Ge(o.meshTextureSaturation??ec,0,1)}))},[o.buildingColor,o.buildingColorMix,o.buildingsFullOpacity,o.enabled,o.meshTextureSaturation,o.meshTextureColorCorrection,h]),null},Ug=t=>({...t,animationMode:zt.DAY,animationSpeed:4,isAnimating:!1,shadowIntensity:1,meshTextureColorCorrection:!0,showSunDebugVector:!0,showTileBounds:!0,showProjectionDebugView:!1,showDisplaySettings:!1,showMapStyleContent:!0,showMapStyleLabels:!0,showMapStyleElevationLines:!1,showMapStyleElevationLabels:!1,useTransmittanceLut:!0,useSkyIrradianceLut:!0,shadowBufferLayout:void 0,shadowBufferFormat:void 0,shadowSunDiscSamples:void 0,shadowMsaaSamples:void 0,shadowGroundTexelFit:void 0,shadowAdaptiveQuality:void 0}),kg=({location:t,state:e,setState:r,dateState:i,setDateState:n})=>{const s=e.animationMode??zt.DAY,a=e.animationSpeed??4,o=(c,l)=>n(qu(i,i.year,zo(i.year,c,l),t));return N.jsxs(N.Fragment,{children:[N.jsxs("section",{className:"min-w-0",children:[N.jsx("h3",{className:"mb-1.5 text-xs font-medium uppercase tracking-wide text-neutral-500",children:"Datum"}),N.jsxs("div",{className:"grid grid-cols-2 gap-2","data-test-id":"shadow-date-shortcuts",children:[N.jsx("button",{type:"button",className:Tr,onClick:()=>n(Xu(i,t)),children:"Heute"}),N.jsx("button",{type:"button",className:Tr,onClick:()=>o(2,21),children:"21. März"}),N.jsx("button",{type:"button",className:Tr,onClick:()=>o(5,21),children:"21. Juni"}),N.jsx("button",{type:"button",className:Tr,onClick:()=>o(11,21),children:"21. Dezember"})]})]}),N.jsxs("section",{children:[N.jsx("h3",{className:"mb-1.5 text-xs font-medium uppercase tracking-wide text-neutral-500",children:"Uhrzeit"}),N.jsx("div",{className:"grid grid-cols-4 gap-2",children:[9,12,15,18].map(c=>N.jsx("button",{type:"button",className:Tr,onClick:()=>n(Qi(i,{...i,minutes:c*60},t)),children:ed(c)},c))})]}),N.jsxs("section",{children:[N.jsx("h3",{className:"mb-1.5 text-xs font-medium uppercase tracking-wide text-neutral-500",children:"Animation"}),N.jsxs("div",{className:"flex flex-wrap items-center gap-x-3 gap-y-2",children:[N.jsx("div",{className:"flex shrink-0 overflow-hidden rounded-md border border-neutral-300",children:[[zt.DAY,"Tagesverlauf"],[zt.YEAR,"Jahresverlauf"]].map(([c,l])=>N.jsx("button",{type:"button",className:`${Ca} ${s===c?"bg-amber-50 font-medium text-amber-700":"bg-white"}`,"aria-pressed":s===c,onClick:()=>{const u=c;r({...e,animationMode:u,isAnimating:s===u?!e.isAnimating:!0})},children:l},c))}),N.jsx("div",{className:"flex shrink-0 overflow-hidden rounded-md border border-neutral-300",children:[1,4,12].map(c=>N.jsxs("button",{type:"button",className:`${Ca} px-3 ${a===c?"bg-amber-50 font-medium text-amber-700":"bg-white"}`,"aria-pressed":a===c,onClick:()=>r({...e,animationSpeed:c}),children:[c,"×"]},c))})]})]})]})},Hg=({location:t,state:e,setState:r,dateState:i,setDateState:n})=>{const s=e.shadowIntensity??1,a=z.useMemo(()=>Hr(i,t),[i,t]);return N.jsxs("div",{className:"w-full","data-test-id":"shadow-simulation-secondary-panel",children:[N.jsxs("div",{className:"mb-2 flex flex-wrap items-center justify-between gap-x-4 gap-y-2",children:[N.jsxs("span",{className:"whitespace-nowrap text-sm tabular-nums text-neutral-500",children:["Höhe ",a.elevationDegrees.toFixed(0),"° · Azimut"," ",a.azimuthDegrees.toFixed(0),"°"]}),N.jsx("div",{className:"flex items-center gap-5 text-sm text-neutral-600",children:N.jsxs("button",{type:"button",className:"flex items-center gap-2 whitespace-nowrap hover:text-amber-700",onClick:()=>{r(Ug(e)),n(Qu(i,t))},children:[N.jsx(Ot,{icon:mu}),"Zurücksetzen"]})})]}),N.jsxs("div",{className:"grid grid-cols-1 gap-x-8 gap-y-4 lg:grid-cols-2",children:[N.jsx(kg,{location:t,state:e,setState:r,dateState:i,setDateState:n}),N.jsxs("section",{className:"min-w-0",children:[N.jsxs("h3",{className:"mb-1.5 flex items-center gap-1 text-xs font-medium uppercase tracking-wide text-neutral-500",children:["Darstellung",N.jsx("button",{type:"button",className:"inline-flex items-center justify-center p-1 text-neutral-700 hover:text-amber-700","aria-label":"Darstellungseinstellungen",title:"Darstellungseinstellungen","aria-expanded":e.showDisplaySettings??!1,onClick:()=>r({...e,showDisplaySettings:!e.showDisplaySettings}),"data-test-id":"shadow-simulation-display-settings",children:N.jsx(Ot,{icon:fu})})]}),N.jsxs("label",{className:"grid grid-cols-[110px_minmax(0,1fr)_42px] items-center gap-3 text-sm text-neutral-700",children:[N.jsx("span",{children:"Intensität"}),N.jsx("input",{type:"range",min:0,max:1,step:.01,value:s,onChange:o=>r({...e,shadowIntensity:Number(o.currentTarget.value)}),className:"shadow-simulation-range min-w-0 cursor-pointer",style:oc(s,0,1),"aria-label":"Schattenintensität","data-test-id":"shadow-simulation-intensity"}),N.jsxs("span",{className:"text-right tabular-nums",children:[Math.round(s*100),"%"]})]})]})]})]})},zg=z.lazy(()=>Wi(()=>import("./ShadowProjectionDebugView-grz5w4Al.js"),__vite__mapDeps([11,1,2,3,4,5,6,7,8,9,10])).then(t=>({default:t.ShadowProjectionDebugView}))),Vg=z.lazy(()=>Wi(()=>import("./ShadowSimulationDisplaySettingsPanel-BkH2o5OO.js"),__vite__mapDeps([12,1,2,3,4,5,6,7,8,9,10])).then(t=>({default:t.ShadowSimulationDisplaySettingsPanel}))),Wg=z.lazy(()=>Wi(()=>import("./ShadowSimulationCurveSettings-BjntA-Ng.js"),__vite__mapDeps([13,1,2,3,4,5,6,7,8,9,10])).then(t=>({default:t.ShadowSimulationCurveSettings}))),Gg="#1677ff",jg=({config:t,libreMap:e,targeted:r,sharedState:i,setSharedState:n,sharedDateState:s,setSharedDateState:a})=>{var G,W;const{year:o,initialDayOfYear:c,initialMinutes:l,latitude:u=Ai.latitude,longitude:d=Ai.longitude,timeZone:g=bs,shadowAreaMeters:p,terrain:h,terrainSources:S,mapLibreTerrain:f,controlPosition:v="topleft",controlOrder:b=70,experimentalTiledShadows:A=!1}=t??{},C=ac(e,u,d),M=z.useMemo(()=>Cu({terrain:h,terrainSources:S}),[h,S]),I=z.useMemo(()=>s??Iu({year:o,initialDayOfYear:c,initialMinutes:l,timeZone:g},C),[s,c,l,C,g,o]),R=i??M,L=s??I,U=z.useMemo(()=>S??(h?[{label:h.id,terrain:h}]:void 0),[h,S]),B=((G=U==null?void 0:U.find(({terrain:re})=>re.id===R.terrainSourceId))==null?void 0:G.terrain)??((W=U==null?void 0:U[0])==null?void 0:W.terrain);return z.useEffect(()=>{i||n(M)},[M,n,i]),z.useEffect(()=>{s||a(I)},[I,a,s]),r?N.jsx(Hg,{location:C,state:R,setState:n,dateState:L,setDateState:a}):N.jsxs(N.Fragment,{children:[e&&N.jsx(tu,{position:v,order:b,children:N.jsx(Su,{title:R.enabled?"Schattensimulation ausschalten":"Schattensimulation einschalten",placement:"right",children:N.jsx(ru,{onClick:()=>n({...R,enabled:!R.enabled}),dataTestId:"shadow-simulation-control-button","aria-label":R.enabled?"Schattensimulation ausschalten":"Schattensimulation einschalten","aria-pressed":R.enabled,children:N.jsx(Ot,{icon:pu,style:R.enabled?{color:Gg}:void 0})})})}),N.jsx(Bg,{tiledShadows:A,libreMap:e,shadowAreaMeters:p,terrain:B,mapLibreTerrain:f,terrainQuality:R.terrainQuality,location:C,state:R,dateState:L,setDateState:a}),R.controlStyle===os.CURVE&&N.jsx(z.Suspense,{fallback:null,children:N.jsx(Wg,{location:C,dateState:L,setDateState:a,onClose:()=>n({...R,controlStyle:os.QUICK})})}),R.showDisplaySettings&&N.jsx(z.Suspense,{fallback:null,children:N.jsx(Vg,{tiledShadows:A,state:R,setState:n,terrainSources:U,map:e})}),R.enabled&&R.showProjectionDebugView&&e&&N.jsx(z.Suspense,{fallback:null,children:N.jsx(zg,{map:e,solarPosition:Hr(L,C),settings:{showSunDebugVector:R.showSunDebugVector??!0,showTileBounds:R.showTileBounds??!0},onSettingsChange:re=>n({...R,...re}),onClose:()=>n({...R,showProjectionDebugView:!1})})})]})},cv=Object.freeze(Object.defineProperty({__proto__:null,DEFAULT_SHADOW_SIMULATION_TIME_ZONE:bs,SHADOW_TERRAIN_QUALITY:Pe,ShadowSimulationHeaderControlsView:rd,ShadowSimulationView:jg,clampShadowSimulationSelectionToDaylight:iu,formatShadowSelection:nu,getSolarPosition:Hr},Symbol.toStringTag,{value:"Module"}));export{Ds as D,rv as M,zr as S,Dn as a,Ea as b,iv as c,Mu as d,ht as e,xu as f,Is as g,Jo as h,ec as i,tc as j,Nr as k,tv as l,ev as m,os as n,qe as o,Ci as p,cv as q,av as r,ov as s,Gi as u};
