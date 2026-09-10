const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/shadow-sun-vector-BJy7WQzg.js","assets/index-B9Q12Itp.js","assets/vendor-react-core-Bc0fA4qm.js","assets/vendor-ui-icons-BUypCdrk.js","assets/vendor-cismap-D_MsyIvc.js","assets/vendor-leaflet-DQDZzA6S.js","assets/vendor-ui-DAA_1AVu.js","assets/vendor-cismap-BYgBZZPN.css","assets/vendor-cesium-L1yX2YSe.js","assets/vendor-maplibre-CQ-ZO8sW.js","assets/index-CNl7qnd7.css","assets/ShadowProjectionDebugView-BxKjctKI.js","assets/ShadowSimulationDisplaySettingsPanel-BDALVWRu.js","assets/ShadowSimulationCurveSettings-NpAXnZCW.js"])))=>i.map(i=>d[i]);
import{S as Ar,C as rs,a as $t,G as Cr,L as jc,N as ho,M as Pr,P as is,V as ee,b as Ve,W as $e,F as wt,R as Ir,c as be,D as qt,U as Ft,d as ze,g as ns,e as Mi,f as ss,h as Yc,i as Ri,k as ve,l as mo,j as D,o as Un,m as $c,n as fo,p as un,q as mi,r as Or,s as re,t as lt,u as x,v as Kc,B as Fe,E as po,w as qc,x as Xc,y as go,z as E,A as Ei,T as vo,O as as,H as yo,I as Zs,J as os,K as Qc,Q as kn,X as Js,Y as cs,Z as Zc,_ as Jc,$ as ea,a0 as el,a1 as tl,a2 as rl,a3 as So,a4 as It,a5 as il,a6 as wo,a7 as nl,a8 as ta,a9 as _o,aa as sl,ab as al,ac as ol,ad as Hn,ae as dn,af as cl,ag as ll,ah as ui,ai as xo,aj as jt,ak as ul,al as To,am as dl,an as hl,ao as ml,ap as fl,aq as pl,ar as Ie,as as ls,at as gl,au as bo,av as vl,aw as Ai,ax as Mo,ay as yl,az as Sl,aA as mr,aB as wl,aC as _l,aD as hn,aE as us,aF as xl,aG as Tl,aH as bl,aI as Ml}from"./index-B9Q12Itp.js";import{g as Rl,r as $,d as El}from"./vendor-react-core-Bc0fA4qm.js";import{F as Ct,V as Al,bs as Cl,W as Il,z as Dl,b7 as Pl,b8 as Ol,bt as Nl,bc as Ll,D as Fl}from"./vendor-ui-icons-BUypCdrk.js";import{J as Bl,K as Ul,L as kl,e as Hl}from"./vendor-ui-DAA_1AVu.js";import{a as zl}from"./vendor-maplibre-CQ-ZO8sW.js";import"./vendor-cismap-D_MsyIvc.js";import"./vendor-leaflet-DQDZzA6S.js";const ra=20;class Vl{constructor(e,r=256*1024**2){this.renderer=e,this.maximumBytes=r,this.quad.frustumCulled=!1,this.scene.add(this.quad)}target=null;key=null;broken=!1;captures=0;reuses=0;scene=new Ar;camera=new rs;material=new $t({glslVersion:Cr,uniforms:{color:{value:null},depth:{value:null}},vertexShader:`out vec2 uvCopy;
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
      }`,depthTest:!0,depthFunc:jc,depthWrite:!0,transparent:!0,blending:ho});quad=new Pr(new is(2,2),this.material);get stats(){return{captures:this.captures,reuses:this.reuses,bytes:this.target?this.target.width*this.target.height*ra:0,broken:this.broken}}invalidate(){this.key=null}render(e,r,i,n){var v,y;const a=this.renderer;if(this.broken||!Number.isInteger(r)||!Number.isInteger(i)||r<1||i<1||r>a.capabilities.maxTextureSize||i>a.capabilities.maxTextureSize||r*i*ra>this.maximumBytes||!a.extensions.has("EXT_color_buffer_float"))return this.releaseTarget(),n(),!1;const s=a.getRenderTarget(),o=a.getActiveCubeFace(),c=a.getActiveMipmapLevel(),l=a.getViewport(new ee),u=a.getScissor(new ee),d=a.getScissorTest(),p=a.getClearColor(new Ve),m=a.getClearAlpha(),h=a.autoClear,g=()=>{a.setRenderTarget(s,o,c),a.setViewport(l),a.setScissor(u),a.setScissorTest(d),a.setClearColor(p,m),a.autoClear=h};try{if(((v=this.target)==null?void 0:v.width)!==r||((y=this.target)==null?void 0:y.height)!==i){this.releaseTarget(),this.target=new $e(r,i,{type:wt,format:Ir,minFilter:be,magFilter:be,depthTexture:new qt(r,i,Ft),samples:0});try{a.initRenderTarget(this.target)}catch{return this.broken=!0,this.releaseTarget(),g(),n(),!1}}const T=JSON.stringify([e,r,i,a.outputColorSpace,a.toneMapping,a.toneMappingExposure,s==null?void 0:s.texture.colorSpace]);return a.autoClear=!1,this.key!==T?(this.key=null,a.setRenderTarget(this.target),a.setViewport(new ee(0,0,r,i)),a.setScissorTest(!1),a.setClearColor(0,0),a.clear(!0,!0,!1),n(),this.key=T,this.captures+=1):this.reuses+=1,g(),a.autoClear=!1,this.material.uniforms.color.value=this.target.texture,this.material.uniforms.depth.value=this.target.depthTexture,a.render(this.scene,this.camera),!0}catch(T){throw this.invalidate(),T}finally{g()}}releaseTarget(){var e,r,i;(r=(e=this.target)==null?void 0:e.depthTexture)==null||r.dispose(),(i=this.target)==null||i.dispose(),this.target=null,this.key=null}dispose(){this.releaseTarget(),this.broken=!0,this.material.dispose(),this.quad.geometry.dispose()}}const Le={STANDARD:"standard",HIGH:"high",MAX:"max",ULTRA:"ultra",EXTREME:"extreme"},zn={QUICK:"quick",CURVE:"curve"},Lt={DAY:"day",YEAR:"year"},fi={OVERLAY:"isShadowSimulationOverlay"},xt={FPS_120:4,FPS_60:16,FPS_30:64,ULTRA:256},ds="max",Qr=64,Wl=[0,2,4,8,ds],rt={[xt.FPS_120]:{targetFps:120,depthSize:2048,terrainErrorPixels:2,shadowTexelErrorPixels:2,terrainTileLimit:96,terrainSegments:128,meshErrorPixels:4,sunSamples:Qr,msaaSamples:0},[xt.FPS_60]:{targetFps:60,depthSize:3072,terrainErrorPixels:1,shadowTexelErrorPixels:1,terrainTileLimit:144,terrainSegments:256,meshErrorPixels:1,sunSamples:Qr,msaaSamples:2},[xt.FPS_30]:{targetFps:30,depthSize:4096,terrainErrorPixels:.5,shadowTexelErrorPixels:.5,terrainTileLimit:192,terrainSegments:512,meshErrorPixels:1,sunSamples:Qr,msaaSamples:4},[xt.ULTRA]:{targetFps:null,depthSize:16384,terrainErrorPixels:.25,shadowTexelErrorPixels:.25,terrainTileLimit:256,terrainSegments:512,meshErrorPixels:.25,sunSamples:Qr,msaaSamples:ds}},Gl=(t,e,r=br)=>{if(!t)return;const i=rt[e];return{...t,errorTargetPixels:r,meshSegments:Math.min(t.tileSize,i.terrainSegments),maxSelectionTiles:Math.min(t.maxSelectionTiles??i.terrainTileLimit,i.terrainTileLimit)}},er=64,hs=2,br=2,jl=24*1024**3,ms="#d3d3d3",Ro=0,Eo=1,Ao="#ffffff",pi={MONO:"mono",TILED:"tiled"},Tt={HDR_16:"rgba16f",HDR_16_32:"rgba16f-32f",HDR_32:"rgba32f",SDR_8:"rgba8"},Yl=[32,64,128,256,512,1024,2048,4096,8192],$l=!0,mn=(t={},e=er)=>({shadowAdaptiveQuality:t.shadowAdaptiveQuality??!0,shadowBufferLayout:t.shadowBufferLayout&&Object.values(pi).includes(t.shadowBufferLayout)?t.shadowBufferLayout:pi.MONO,shadowBufferFormat:t.shadowBufferFormat&&Object.values(Tt).includes(t.shadowBufferFormat)?t.shadowBufferFormat:Tt.HDR_16_32,shadowSunDiscSamples:t.shadowSunDiscSamples&&Yl.includes(t.shadowSunDiscSamples)?t.shadowSunDiscSamples:rt[e].sunSamples,shadowMsaaSamples:t.shadowBufferFormat===Tt.HDR_32?0:t.shadowMsaaSamples!==void 0&&Wl.includes(t.shadowMsaaSamples)?t.shadowMsaaSamples:rt[e].msaaSamples,shadowGroundTexelFit:t.shadowGroundTexelFit??$l}),ia=t=>Object.values(xt).includes(t)?t:er,Kl=t=>typeof t=="string"&&/^#[\da-f]{6}$/i.test(t)?t:typeof t=="number"&&Number.isFinite(t)?`#${ze(Math.round(t),0,16777215).toString(16).padStart(6,"0")}`:ms,xg=(t,e)=>({...t,shadowQuality:e,meshErrorTarget:rt[e].meshErrorPixels,shadowBufferFormat:void 0,shadowSunDiscSamples:void 0,shadowMsaaSamples:void 0,shadowGroundTexelFit:void 0}),ql=t=>{var r,i,n;const e=((i=(r=t==null?void 0:t.terrainSources)==null?void 0:r[0])==null?void 0:i.terrain)??(t==null?void 0:t.terrain);return{enabled:!1,terrainColor:Kl((n=e==null?void 0:e.material)==null?void 0:n.color),terrainSourceId:e==null?void 0:e.id,terrainQuality:Le.MAX,buildingsFullOpacity:!0,buildingColorMix:Ro,meshTextureSaturation:Eo,meshTextureColorCorrection:!0,buildingColor:Ao,shadowQuality:er,shadowAdaptiveQuality:!0,meshErrorTarget:hs,terrainErrorTarget:br,meshCacheBudgetBytes:jl,showSunDebugVector:!0,showTileBounds:!0,showProjectionDebugView:!1,showDisplaySettings:!1,softSunShadows:!0,showMapStyleContent:!0,showMapStyleLabels:!0,showMapStyleElevationLines:!1,showMapStyleElevationLabels:!1,useTransmittanceLut:!0,useSkyIrradianceLut:!0,controlStyle:zn.QUICK,animationMode:Lt.DAY,animationSpeed:4,isAnimating:!1,shadowIntensity:1}},Xl=(t,e,r=new Date)=>{const i=(t==null?void 0:t.timeZone)??ss,n=ns(r,i),a={year:(t==null?void 0:t.year)??n.year,dayOfYear:(t==null?void 0:t.initialDayOfYear)??n.dayOfYear,minutes:(t==null?void 0:t.initialMinutes)??n.minutes,timeZone:i};return Mi(a,e)??{...a,minutes:12*60}};var Ci={},Ii={};Object.defineProperty(Ii,"__esModule",{value:!0});Ii.default=void 0;var Ql={items_per_page:"/ Seite",jump_to:"Gehe zu",jump_to_confirm:"bestätigen",page:"Seite",prev_page:"Vorherige Seite",next_page:"Nächste Seite",prev_5:"5 Seiten zurück",next_5:"5 Seiten vor",prev_3:"3 Seiten zurück",next_3:"3 Seiten vor",page_size:"Page Size"};Ii.default=Ql;var Di={},Nr={},Pi={},Co={exports:{}};(function(t){var e=Yc;function r(n,a){var s=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);a&&(o=o.filter(function(c){return Object.getOwnPropertyDescriptor(n,c).enumerable})),s.push.apply(s,o)}return s}function i(n){for(var a=1;a<arguments.length;a++){var s=arguments[a]!=null?arguments[a]:{};a%2?r(Object(s),!0).forEach(function(o){e(n,o,s[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(s)):r(Object(s)).forEach(function(o){Object.defineProperty(n,o,Object.getOwnPropertyDescriptor(s,o))})}return n}t.exports=i,t.exports.__esModule=!0,t.exports.default=t.exports})(Co);var Zl=Co.exports,Oi={};Object.defineProperty(Oi,"__esModule",{value:!0});Oi.commonLocale=void 0;Oi.commonLocale={yearFormat:"YYYY",dayFormat:"D",cellMeridiemFormat:"A",monthBeforeYear:!0};var Jl=Ri.default;Object.defineProperty(Pi,"__esModule",{value:!0});Pi.default=void 0;var na=Jl(Zl),eu=Oi,tu=(0,na.default)((0,na.default)({},eu.commonLocale),{},{locale:"de_DE",today:"Heute",now:"Jetzt",backToToday:"Zurück zu Heute",ok:"OK",clear:"Zurücksetzen",month:"Monat",year:"Jahr",timeSelect:"Zeit wählen",dateSelect:"Datum wählen",monthSelect:"Wähle einen Monat",yearSelect:"Wähle ein Jahr",decadeSelect:"Wähle ein Jahrzehnt",dateFormat:"D.M.YYYY",dateTimeFormat:"D.M.YYYY HH:mm:ss",previousMonth:"Vorheriger Monat (PageUp)",nextMonth:"Nächster Monat (PageDown)",previousYear:"Vorheriges Jahr (Ctrl + left)",nextYear:"Nächstes Jahr (Ctrl + right)",previousDecade:"Vorheriges Jahrzehnt",nextDecade:"Nächstes Jahrzehnt",previousCentury:"Vorheriges Jahrhundert",nextCentury:"Nächstes Jahrhundert"});Pi.default=tu;var Lr={};Object.defineProperty(Lr,"__esModule",{value:!0});Lr.default=void 0;const ru={placeholder:"Zeit auswählen",rangePlaceholder:["Startzeit","Endzeit"]};Lr.default=ru;var Io=Ri.default;Object.defineProperty(Nr,"__esModule",{value:!0});Nr.default=void 0;var iu=Io(Pi),nu=Io(Lr);const su={lang:Object.assign({placeholder:"Datum auswählen",rangePlaceholder:["Startdatum","Enddatum"],shortWeekDays:["So","Mo","Di","Mi","Do","Fr","Sa"],shortMonths:["Jan","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"]},iu.default),timePickerLocale:Object.assign({},nu.default)};Nr.default=su;var au=Ri.default;Object.defineProperty(Di,"__esModule",{value:!0});Di.default=void 0;var ou=au(Nr);Di.default=ou.default;var Ni=Ri.default;Object.defineProperty(Ci,"__esModule",{value:!0});Ci.default=void 0;var cu=Ni(Ii),lu=Ni(Di),uu=Ni(Nr),du=Ni(Lr);const ke="${label} ist nicht gültig. ${type} erwartet",hu={locale:"de",Pagination:cu.default,DatePicker:uu.default,TimePicker:du.default,Calendar:lu.default,global:{placeholder:"Bitte auswählen"},Table:{filterTitle:"Filter-Menü",filterConfirm:"OK",filterReset:"Zurücksetzen",filterEmptyText:"Keine Filter",filterSearchPlaceholder:"Suche in Filtern",filterCheckall:"Alle auswählen",selectAll:"Selektiere Alle",selectInvert:"Selektion Invertieren",selectionAll:"Wählen Sie alle Daten aus",sortTitle:"Sortieren",emptyText:"Keine Daten",expand:"Zeile erweitern",collapse:"Zeile reduzieren",triggerDesc:"Klicken zur absteigenden Sortierung",triggerAsc:"Klicken zur aufsteigenden Sortierung",cancelSort:"Klicken zum Abbrechen der Sortierung"},Tour:{Next:"Weiter",Previous:"Zurück",Finish:"Fertig"},Modal:{okText:"OK",cancelText:"Abbrechen",justOkText:"OK"},Popconfirm:{okText:"OK",cancelText:"Abbrechen"},Transfer:{titles:["",""],searchPlaceholder:"Suchen",itemUnit:"Eintrag",itemsUnit:"Einträge",remove:"Entfernen",selectCurrent:"Alle auf aktueller Seite auswählen",removeCurrent:"Auswahl auf aktueller Seite aufheben",selectAll:"Alle auswählen",removeAll:"Auswahl aufheben",selectInvert:"Auswahl umkehren"},Upload:{uploading:"Hochladen...",removeFile:"Datei entfernen",uploadError:"Fehler beim Hochladen",previewFile:"Dateivorschau",downloadFile:"Download-Datei"},Empty:{description:"Keine Daten"},Text:{edit:"Bearbeiten",copy:"Kopieren",copied:"Kopiert",expand:"Erweitern"},Form:{defaultValidateMessages:{default:"Feld-Validierungsfehler: ${label}",required:"Bitte geben Sie ${label} an",enum:"${label} muss eines der folgenden sein [${enum}]",whitespace:"${label} darf kein Leerzeichen sein",date:{format:"${label} ist ein ungültiges Datumsformat",parse:"${label} kann nicht in ein Datum umgewandelt werden",invalid:"${label} ist ein ungültiges Datum"},types:{string:ke,method:ke,array:ke,object:ke,number:ke,date:ke,boolean:ke,integer:ke,float:ke,regexp:ke,email:ke,url:ke,hex:ke},string:{len:"${label} muss genau ${len} Zeichen lang sein",min:"${label} muss mindestens ${min} Zeichen lang sein",max:"${label} darf höchstens ${max} Zeichen lang sein",range:"${label} muss zwischen ${min} und ${max} Zeichen lang sein"},number:{len:"${label} muss gleich ${len} sein",min:"${label} muss mindestens ${min} sein",max:"${label} darf maximal ${max} sein",range:"${label} muss zwischen ${min} und ${max} liegen"},array:{len:"Es müssen ${len} ${label} sein",min:"Es müssen mindestens ${min} ${label} sein",max:"Es dürfen maximal ${max} ${label} sein",range:"Die Anzahl an ${label} muss zwischen ${min} und ${max} liegen"},pattern:{mismatch:"${label} entspricht nicht dem ${pattern} Muster"}}},Image:{preview:"Vorschau"},QRCode:{expired:"QR-Code abgelaufen",refresh:"Aktualisieren"}};Ci.default=hu;var mu=Ci;const fu=Rl(mu),Li=(t,e,r)=>Mi(e,r)??t,pu=(t,e,r,i)=>Li(t,{...t,year:e,dayOfYear:r},i),gu=(t,e,r=new Date)=>{const i=ns(r,t.timeZone);return Li(t,{...i,minutes:t.minutes},e)},vu=(t,e,r=new Date)=>{const i=ns(r,t.timeZone);return Mi(i,e)??t},yu=(t,e)=>({latitude:(t==null?void 0:t.latitude)??e.latitude,longitude:(t==null?void 0:t.longitude)??e.longitude}),Su=(t,e)=>t.latitude===e.latitude&&t.longitude===e.longitude,sa=(t,e,r)=>{const i=t==null?void 0:t.getCenter();return yu(i?{latitude:i.lat,longitude:i.lng}:null,{latitude:e,longitude:r})},Do=(t,e,r)=>{const[i,n]=$.useState(()=>sa(t,e,r));return $.useEffect(()=>{const a=()=>{const s=sa(t,e,r);n(o=>Su(o,s)?o:s)};if(a(),!!t)return t.on(ve.MOVE_END,a),()=>{t.off(ve.MOVE_END,a)}},[e,r,t]),i},fr="flex h-9 min-w-0 items-center justify-center whitespace-nowrap rounded-md border border-neutral-300 bg-white px-1 text-center text-sm text-neutral-800 transition-colors hover:border-amber-500 hover:text-amber-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/40",aa="h-8 whitespace-nowrap border-r border-neutral-300 px-3 text-sm text-neutral-700 transition-colors last:border-r-0 hover:text-amber-700",Tg=[{label:"120 FPS",value:xt.FPS_120},{label:"60 FPS",value:xt.FPS_60},{label:"30 FPS",value:xt.FPS_30},{label:"Ultra",value:xt.ULTRA}],bg=[{label:"0,25 px",value:.25},{label:"0,5 px",value:.5},{label:"1 px",value:1},{label:"2 px",value:2},{label:"4 px",value:4}],Mg=[{value:Tt.HDR_16,label:"HDR · 16 Bit (Experiment)"},{value:Tt.HDR_16_32,label:"HDR · 16/32 Bit (Standard)"},{value:Tt.HDR_32,label:"HDR · 32 Bit (ohne MSAA)"},{value:Tt.SDR_8,label:"SDR · 8 Bit (Experiment)"}],wu=t=>`${String(t).padStart(2,"0")}:00`,Po=(t,e,r)=>({"--shadow-range-progress":`${r>e?Math.max(0,Math.min(100,(t-e)/(r-e)*100)):0}%`});var _u={exports:{}};(function(t,e){(function(r,i){t.exports=i(Bl)})(El,function(r){function i(c){return c&&typeof c=="object"&&"default"in c?c:{default:c}}var n=i(r),a={s:"ein paar Sekunden",m:["eine Minute","einer Minute"],mm:"%d Minuten",h:["eine Stunde","einer Stunde"],hh:"%d Stunden",d:["ein Tag","einem Tag"],dd:["%d Tage","%d Tagen"],M:["ein Monat","einem Monat"],MM:["%d Monate","%d Monaten"],y:["ein Jahr","einem Jahr"],yy:["%d Jahre","%d Jahren"]};function s(c,l,u){var d=a[u];return Array.isArray(d)&&(d=d[l?0:1]),d.replace("%d",c)}var o={name:"de",weekdays:"Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),weekdaysShort:"So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),weekdaysMin:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),months:"Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sept._Okt._Nov._Dez.".split("_"),ordinal:function(c){return c+"."},weekStart:1,yearStart:4,formats:{LTS:"HH:mm:ss",LT:"HH:mm",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY HH:mm",LLLL:"dddd, D. MMMM YYYY HH:mm"},relativeTime:{future:"in %s",past:"vor %s",s,m:s,mm:s,h:s,hh:s,d:s,dd:s,M:s,MM:s,y:s,yy:s}};return n.default.locale(o,null,!0),o})})(_u);const xu=({config:t,libreMap:e,state:r,setState:i,dateState:n,setDateState:a})=>{const{latitude:s=mi.latitude,longitude:o=mi.longitude}=t??{},c=Do(e,s,o),[l,u]=$.useState(!1),d=n,p=$.useMemo(()=>d?mo(d,c):null,[c,d]),m=$.useMemo(()=>d?Ul(new Date(Date.UTC(d.year,0,d.dayOfYear))).locale("de"):null,[d]);if(!r||!d||!p||!m)return null;const h=Math.ceil(p.sunriseMinutes),g=Math.floor(p.sunsetMinutes),v=y=>{a(Li(d,y,c))};return D.jsx("div",{className:"shadow-simulation-header-controls text-sm text-neutral-700","data-test-id":"shadow-simulation-header-controls",children:D.jsxs("div",{className:"shadow-simulation-header-layout",children:[D.jsxs("div",{className:"shadow-simulation-header-date grid grid-cols-[28px_minmax(0,118px)_28px] items-center",children:[D.jsx("button",{type:"button",className:"flex h-9 w-7 items-center justify-center rounded-full hover:bg-neutral-100","aria-label":"Vorheriger Tag",onClick:()=>v({...d,...Un(d,-1)}),children:D.jsx(Ct,{icon:Al})}),D.jsxs("div",{className:"relative min-w-0 justify-self-center",children:[D.jsxs("button",{type:"button",className:"flex h-9 max-w-full items-center gap-1.5 whitespace-nowrap rounded-md px-1 tabular-nums hover:bg-neutral-100","aria-label":"Datum auswählen","aria-expanded":l,onClick:()=>u(!0),children:[D.jsx(Ct,{icon:Cl,className:"shrink-0 text-neutral-500"}),D.jsx("span",{className:"truncate",children:$c(d,!1)})]}),D.jsx(kl,{open:l,value:m,locale:fu.DatePicker,format:"D. MMMM YYYY",allowClear:!1,inputReadOnly:!0,getPopupContainer:y=>y.parentElement??y,onOpenChange:u,onChange:y=>{y&&(v({...d,year:y.year(),dayOfYear:fo(y.year(),y.month(),y.date())}),u(!1))},className:"pointer-events-none absolute left-0 top-full h-0 w-0 overflow-hidden p-0 opacity-0","aria-label":"Datum auswählen"})]}),D.jsx("button",{type:"button",className:"flex h-9 w-7 items-center justify-center rounded-full hover:bg-neutral-100","aria-label":"Nächster Tag",onClick:()=>v({...d,...Un(d,1)}),children:D.jsx(Ct,{icon:Il})})]}),D.jsx("span",{className:"shadow-simulation-header-divider h-7 w-px bg-neutral-200","aria-hidden":"true"}),D.jsxs("label",{className:"shadow-simulation-header-time m-0 flex h-9 w-fit cursor-pointer items-center gap-1.5 rounded-md px-1 hover:bg-neutral-100",children:[D.jsx(Ct,{icon:Dl,className:"shrink-0 text-neutral-500"}),D.jsx("input",{type:"time",value:un(d.minutes),min:un(h),max:un(g),step:60,onClick:y=>{try{y.currentTarget.showPicker()}catch{return}},onChange:y=>{const[T,b]=y.currentTarget.value.split(":").map(Number);!Number.isFinite(T)||!Number.isFinite(b)||v({...d,minutes:T*60+b})},className:"shadow-simulation-time-input w-[46px] cursor-pointer bg-transparent p-0 text-sm font-medium leading-none tabular-nums text-neutral-800 outline-none","aria-label":"Uhrzeit auswählen","data-test-id":"shadow-simulation-time-input"})]}),D.jsx("input",{type:"range",min:h,max:g,step:1,value:d.minutes,onChange:y=>v({...d,minutes:Number(y.currentTarget.value)}),className:"shadow-simulation-header-range shadow-simulation-range cursor-pointer",style:Po(d.minutes,h,g),"aria-label":"Uhrzeit","data-test-id":"shadow-simulation-ribbon-time"}),D.jsx("button",{type:"button",className:"shadow-simulation-header-play flex h-9 w-9 items-center justify-center rounded-full bg-amber-50 text-amber-600 hover:bg-amber-100","aria-label":r.isAnimating?"Animation pausieren":"Animation starten","aria-pressed":r.isAnimating??!1,onClick:()=>i({...r,isAnimating:!r.isAnimating}),children:D.jsx(Ct,{icon:r.isAnimating?Pl:Ol})})]})})},oa=[[0,1],[1,3],[3,2],[2,0],[4,5],[5,7],[7,6],[6,4],[0,4],[1,5],[2,6],[3,7]],Tu=({min:t,max:e})=>[new x(t.x,t.y,t.z),new x(e.x,t.y,t.z),new x(t.x,e.y,t.z),new x(e.x,e.y,t.z),new x(t.x,t.y,e.z),new x(e.x,t.y,e.z),new x(t.x,e.y,e.z),new x(e.x,e.y,e.z)],bu=t=>[t.coordinateSystem===Kc?0:-1,1].flatMap(r=>[-1,1].flatMap(i=>[-1,1].map(n=>new x(n,i,r).unproject(t)))),fn=(t,e,r)=>t.every(i=>i.distanceToPoint(e)>=-r),ca=(t,e,r)=>e.x>=t.min.x-r&&e.x<=t.max.x+r&&e.y>=t.min.y-r&&e.y<=t.max.y+r&&e.z>=t.min.z-r&&e.z<=t.max.z+r,Vn=(t,e,r)=>{t.some(i=>i.distanceToSquared(e)<=r)||t.push(e)},la=(t,e,r,i,n,a)=>{const s=e.clone().sub(t);for(const o of r){const c=o.distanceToPoint(t),l=o.distanceToPoint(e),u=c-l;if(Math.abs(u)<=Number.EPSILON)continue;const d=c/u;if(d<0||d>1)continue;const p=t.clone().addScaledVector(s,d);i(p)&&Vn(n,p,a)}},Oo=(t,e,r=1e-6)=>{if(e.isEmpty())return[];t.updateMatrixWorld(!0);const i=new Or().setFromProjectionMatrix(new re().multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),t.coordinateSystem,t.reversedDepth);if(!i.intersectsBox(e))return[];const n=r*r,a=Tu(e),s=bu(t),o=[];for(const l of a)fn(i.planes,l,r)&&Vn(o,l,n);for(const l of s)ca(e,l,r)&&Vn(o,l,n);for(const[l,u]of oa)la(a[l],a[u],i.planes,d=>fn(i.planes,d,r),o,n);const c=[new lt(new x(1,0,0),-e.min.x),new lt(new x(-1,0,0),e.max.x),new lt(new x(0,1,0),-e.min.y),new lt(new x(0,-1,0),e.max.y),new lt(new x(0,0,1),-e.min.z),new lt(new x(0,0,-1),e.max.z)];for(const[l,u]of oa)la(s[l],s[u],c,d=>ca(e,d,r)&&fn(i.planes,d,r),o,n);return o},No=(t,e)=>{const r=Fr(t).map(o=>new ee(o.x,o.y,o.z,1).applyMatrix4(e));if(r.some(o=>o.w<=0))return new ee(0,0,1,1);const i=Math.max(0,(Math.min(...r.map(o=>o.x/o.w))+1)/2),n=Math.max(0,(Math.min(...r.map(o=>o.y/o.w))+1)/2),a=Math.min(1,(Math.max(...r.map(o=>o.x/o.w))+1)/2),s=Math.min(1,(Math.max(...r.map(o=>o.y/o.w))+1)/2);return new ee(i,n,Math.max(0,a-i),Math.max(0,s-n))},Fr=t=>[t.min.x,t.max.x].flatMap(e=>[t.min.y,t.max.y].flatMap(r=>[t.min.z,t.max.z].map(i=>new x(e,r,i)))),Lo=(t,e,r)=>{const i=e.elements,n=Fr(t).map(o=>new ee(o.x,o.y,o.z,1).applyMatrix4(e)),a=Math.min(...n.map(o=>o.w));if(a<=0)return 1/0;let s=0;for(const[o,c]of[[0,r.x],[1,r.y]])for(let l=0;l<3;l+=1){const u=Math.max(...n.map(d=>Math.abs(i[l*4+o]*d.w-(o===0?d.x:d.y)*i[l*4+3])));s+=(c*.5*u/(a*a))**2}return Math.sqrt(s)},Mu=(t,e,r,i)=>{if(!(i>0&&Number.isFinite(i))||!(r.x>0&&r.y>0))throw new RangeError("Shadow page projection requires a positive pixel target and viewport");const n=new re().multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),a=new Set;for(const{id:o,bounds:c}of t){if(a.has(o)||c.isEmpty()||![...c.min.toArray(),...c.max.toArray()].every(Number.isFinite))throw new RangeError("Receiver cells require unique IDs and finite, nonempty bounds");a.add(o)}const s=new Or().setFromProjectionMatrix(n);return t.filter(({bounds:o})=>s.intersectsBox(o)).map(o=>({...o,screenBounds:No(o.bounds,n),groundTexelTargetMeters:Math.max(1e-9,i/Lo(o.bounds,n,r))}))},Ru=(t,e,r,i,n)=>t.clone().union(t.clone().translate(e.clone().normalize().multiplyScalar(r))).expandByScalar(2*r*Math.sin(i/2)+n),Eu=(t,e)=>t.flatMap(({bounds:r})=>Oo(e,r).length>0?Fr(r):[]),Zr={WEST:"west",EAST:"east",SOUTH:"south",NORTH:"north"},pr=({bounds:t})=>(t.max.x-t.min.x)*(t.max.z-t.min.z),Au=(t,e)=>t.min.z===e.min.z&&t.max.z===e.max.z&&(t.max.x===e.min.x||e.max.x===t.min.x)||t.min.x===e.min.x&&t.max.x===e.max.x&&(t.max.z===e.min.z||e.max.z===t.min.z),Cu=t=>{const e=new Map(t.map(i=>[i.id,i]));let r=!0;for(;r;){r=!1;for(const i of e.values()){if(Math.min(i.bounds.max.x-i.bounds.min.x,i.bounds.max.z-i.bounds.min.z)>=i.fragmentMergeWidthMeters)continue;const a=pr(i),s=[...e.values()].filter(o=>o!==i&&(pr(o)>a||pr(o)===a&&o.id<i.id)&&Au(i.bounds,o.bounds)).sort((o,c)=>pr(c)-pr(o)||(o.id<c.id?-1:o.id>c.id?1:0))[0];if(s){e.set(s.id,{...s,bounds:s.bounds.clone().union(i.bounds)}),e.delete(i.id),r=!0;break}}}return[...e.values()].map(({id:i,bounds:n})=>({id:i,bounds:n}))},pn=t=>({west:t.min.x,east:t.max.x,south:t.min.z,north:t.max.z}),Fo=(t,e)=>t.west<e.east&&t.east>e.west&&t.south<e.north&&t.north>e.south,Iu=(t,e,r)=>{if(!Fo(t,e))return[t];const i=Math.max(t.west,e.west),n=Math.min(t.east,e.east),a=Math.max(t.south,e.south),s=Math.min(t.north,e.north);return[{...t,east:i,side:Zr.WEST},{...t,west:n,side:Zr.EAST},{west:i,east:n,south:t.south,north:a,side:Zr.SOUTH},{west:i,east:n,south:s,north:t.north,side:Zr.NORTH}].filter(o=>o.west<o.east&&o.south<o.north).map(({side:o,...c})=>({...c,splitPath:[...t.splitPath,r,o]}))},Du=t=>{const e=new Set;for(const{id:n,bounds:a}of t){if(e.has(n)||a.isEmpty()||![...a.min.toArray(),...a.max.toArray()].every(Number.isFinite))throw new RangeError("Receiver tiles require unique IDs and finite bounds");e.add(n)}const r=[...t].sort((n,a)=>n.id<a.id?-1:n.id>a.id?1:0);if(r.every(({receiverObjectId:n})=>n!==void 0))return r;const i=r.flatMap(({id:n,bounds:a},s)=>{const o=pn(a);return o.west===o.east||o.south===o.north?[]:r.slice(0,s).reduce((l,u)=>l.flatMap(d=>Iu(d,pn(u.bounds),u.id)),[{...o,splitPath:[]}]).map(l=>{const u=r.reduce((d,p)=>Fo(l,pn(p.bounds))?[Math.min(d[0],p.bounds.min.y),Math.max(d[1],p.bounds.max.y)]:d,[a.min.y,a.max.y]);return{fragmentMergeWidthMeters:l.splitPath.length===0?0:Math.max(.1,.01*Math.min(o.east-o.west,o.north-o.south)),id:l.splitPath.length===0?n:JSON.stringify([n,...l.splitPath]),bounds:new Fe(new x(l.west,u[0],l.south),new x(l.east,u[1],l.north))}})});return Cu(i)},Pu=(t,e=16)=>{if(!Number.isInteger(e)||e<=0||t.length===0)return[];const i=t.reduce((c,l)=>c.union(l.bounds),new Fe).getCenter(new x),n=new Set(t.map(({id:c})=>c)),a=new Map;for(const c of t){const l=c.bounds.max.x-c.bounds.min.x;if(!(l>0&&Number.isFinite(l)))continue;const u=Math.round(c.bounds.min.x/l),d=Math.round(c.bounds.min.z/l);for(let p=-1;p<=1;p+=1)for(let m=-1;m<=1;m+=1){const h=`${l}:${u+p}:${d+m}`;n.has(h)||a.has(h)||a.set(h,{id:h,bounds:c.bounds.clone().translate(new x(p*l,0,m*l))})}}const s=Array.from({length:8},()=>[]);for(const c of a.values()){const l=c.bounds.getCenter(new x).sub(i),u=(Math.round(Math.atan2(l.z,l.x)/(Math.PI/4))+8)%8;s[u].push(c)}for(const c of s)c.sort((l,u)=>l.bounds.distanceToPoint(i)-u.bounds.distanceToPoint(i)||l.id.localeCompare(u.id));const o=[];for(let c=0;o.length<e;c+=1){const l=s.flatMap(u=>u[c]?[u[c]]:[]);if(l.length===0)break;o.push(...l.slice(0,e-o.length))}return o},Ou=(t,e)=>{const r=t.getCenter(new x);let i=null,n=1/0;for(const a of e){const s=a.receiverBounds.distanceToPoint(r);s<n&&Number.isInteger(a.terrainLevel)&&(n=s,i=a.terrainLevel)}return i};/**
 * postprocessing v6.39.4 build Mon Jul 27 2026
 * https://github.com/pmndrs/postprocessing
 * Copyright 2015-2026 Raoul van Rüschen
 * @license Zlib
 */var Nu=(()=>{const t=new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),e=new Float32Array([0,0,2,0,0,2]),r=new yo;return r.setAttribute("position",new Zs(t,3)),r.setAttribute("uv",new Zs(e,2)),r})(),Lu=class Wn{static get fullscreenGeometry(){return Nu}constructor(e="Pass",r=new Ar,i=new as){this.name=e,this.renderer=null,this.scene=r,this.camera=i,this.screen=null,this.rtt=!0,this.needsSwap=!0,this.needsDepthBlit=!1,this.needsDepthTexture=!1,this.enabled=!0}get renderToScreen(){return!this.rtt}set renderToScreen(e){if(this.rtt===e){const r=this.fullscreenMaterial;r!==null&&(r.needsUpdate=!0),this.rtt=!e}}set mainScene(e){}set mainCamera(e){}setRenderer(e){this.renderer=e}isEnabled(){return this.enabled}setEnabled(e){this.enabled=e}get fullscreenMaterial(){return this.screen!==null?this.screen.material:null}set fullscreenMaterial(e){let r=this.screen;r!==null?r.material=e:(r=new Pr(Wn.fullscreenGeometry,e),r.frustumCulled=!1,this.scene===null&&(this.scene=new Ar),this.scene.add(r),this.screen=r)}getFullscreenMaterial(){return this.fullscreenMaterial}setFullscreenMaterial(e){this.fullscreenMaterial=e}getDepthTexture(){return null}setDepthTexture(e,r=go){}render(e,r,i,n,a){throw new Error("Render method not implemented!")}setSize(e,r){}initialize(e,r,i){}dispose(){for(const e of Object.keys(this)){const r=this[e];(r instanceof $e||r instanceof Ei||r instanceof vo||r instanceof Wn)&&this[e].dispose()}this.fullscreenMaterial!==null&&this.fullscreenMaterial.dispose()}},Bo={NONE:0,DEPTH:1,CONVOLUTION:2},Z={SKIP:9,SET:30,ADD:0,ALPHA:1,AVERAGE:2,COLOR:3,COLOR_BURN:4,COLOR_DODGE:5,DARKEN:6,DIFFERENCE:7,DIVIDE:8,DST:9,EXCLUSION:10,HARD_LIGHT:11,HARD_MIX:12,HUE:13,INVERT:14,INVERT_RGB:15,LIGHTEN:16,LINEAR_BURN:17,LINEAR_DODGE:18,LINEAR_LIGHT:19,LUMINOSITY:20,MULTIPLY:21,NEGATION:22,NORMAL:23,OVERLAY:24,PIN_LIGHT:25,REFLECT:26,SATURATION:27,SCREEN:28,SOFT_LIGHT:29,SRC:30,SUBTRACT:31,VIVID_LIGHT:32},Fu="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Bu="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,src.a*opacity);}",Uu="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=(dst.rgb+src.rgb)*0.5;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",ku="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.xy,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Hu="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=mix(step(0.0,b)*(1.0-min(vec3(1.0),(1.0-a)/max(b,1e-9))),vec3(1.0),step(1.0,a));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",zu="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=step(0.0,a)*mix(min(vec3(1.0),a/max(1.0-b,1e-9)),vec3(1.0),step(1.0,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Vu="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Wu="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=abs(dst.rgb-src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Gu="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb/max(src.rgb,1e-9);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",ju="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-2.0*dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Yu="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb,1.0);vec3 b=min(src.rgb,1.0);vec3 c=mix(2.0*a*b,1.0-2.0*(1.0-a)*(1.0-b),step(0.5,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",$u="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=step(1.0,dst.rgb+src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Ku="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.x,a.yz));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",qu="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Xu="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=src.rgb*max(1.0-dst.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Qu="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Zu="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Ju="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb+src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",ed="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(2.0*src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",td="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.xy,b.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",rd="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",id="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-abs(1.0-dst.rgb-src.rgb),0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",nd="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,opacity);}",sd="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=2.0*src.rgb*dst.rgb;vec3 b=1.0-2.0*(1.0-src.rgb)*(1.0-dst.rgb);vec3 c=mix(a,b,step(0.5,dst.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",ad="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 c=mix(mix(src2,dst.rgb,step(0.5*dst.rgb,src.rgb)),max(src2-1.0,vec3(0.0)),step(dst.rgb,src2-1.0));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",od="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb*dst.rgb/max(1.0-src.rgb,1e-9),1.0);vec3 c=mix(a,src.rgb,step(1.0,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",cd="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.x,b.y,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",ld="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-min(dst.rgb*src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",ud="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 d=dst.rgb+(src2-1.0);vec3 w=step(0.5,src.rgb);vec3 a=dst.rgb-(1.0-src2)*dst.rgb*(1.0-dst.rgb);vec3 b=mix(d*(sqrt(dst.rgb)-dst.rgb),d*dst.rgb*((16.0*dst.rgb-12.0)*dst.rgb+3.0),w*(1.0-step(0.25,dst.rgb)));vec3 c=mix(a,b,w);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",dd="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return src;}",hd="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",md="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=mix(max(1.0-min((1.0-dst.rgb)/(2.0*src.rgb),1.0),0.0),min(dst.rgb/(2.0*(1.0-src.rgb)),1.0),step(0.5,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",fd=new Map([[Z.ADD,Fu],[Z.ALPHA,Bu],[Z.AVERAGE,Uu],[Z.COLOR,ku],[Z.COLOR_BURN,Hu],[Z.COLOR_DODGE,zu],[Z.DARKEN,Vu],[Z.DIFFERENCE,Wu],[Z.DIVIDE,Gu],[Z.DST,null],[Z.EXCLUSION,ju],[Z.HARD_LIGHT,Yu],[Z.HARD_MIX,$u],[Z.HUE,Ku],[Z.INVERT,qu],[Z.INVERT_RGB,Xu],[Z.LIGHTEN,Qu],[Z.LINEAR_BURN,Zu],[Z.LINEAR_DODGE,Ju],[Z.LINEAR_LIGHT,ed],[Z.LUMINOSITY,td],[Z.MULTIPLY,rd],[Z.NEGATION,id],[Z.NORMAL,nd],[Z.OVERLAY,sd],[Z.PIN_LIGHT,ad],[Z.REFLECT,od],[Z.SATURATION,cd],[Z.SCREEN,ld],[Z.SOFT_LIGHT,ud],[Z.SRC,dd],[Z.SUBTRACT,hd],[Z.VIVID_LIGHT,md]]),pd=class extends po{constructor(t,e=1){super(),this._blendFunction=t,this.opacity=new E(e)}getOpacity(){return this.opacity.value}setOpacity(t){this.opacity.value=t}get blendFunction(){return this._blendFunction}set blendFunction(t){this._blendFunction=t,this.dispatchEvent({type:"change"})}getBlendFunction(){return this.blendFunction}setBlendFunction(t){this.blendFunction=t}getShaderCode(){return fd.get(this.blendFunction)}},gd=class extends po{constructor(t,e,{attributes:r=Bo.NONE,blendFunction:i=Z.NORMAL,defines:n=new Map,uniforms:a=new Map,extensions:s=null,vertexShader:o=null}={}){super(),this.name=t,this.renderer=null,this.attributes=r,this.fragmentShader=e,this.vertexShader=o,this.defines=n,this.uniforms=a,this.extensions=s,this.blendMode=new pd(i),this.blendMode.addEventListener("change",c=>this.setChanged()),this._inputColorSpace=qc,this._outputColorSpace=Xc}get inputColorSpace(){return this._inputColorSpace}set inputColorSpace(t){this._inputColorSpace=t,this.setChanged()}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t,this.setChanged()}set mainScene(t){}set mainCamera(t){}getName(){return this.name}setRenderer(t){this.renderer=t}getDefines(){return this.defines}getUniforms(){return this.uniforms}getExtensions(){return this.extensions}getBlendMode(){return this.blendMode}getAttributes(){return this.attributes}setAttributes(t){this.attributes=t,this.setChanged()}getFragmentShader(){return this.fragmentShader}setFragmentShader(t){this.fragmentShader=t,this.setChanged()}getVertexShader(){return this.vertexShader}setVertexShader(t){this.vertexShader=t,this.setChanged()}setChanged(){this.dispatchEvent({type:"change"})}setDepthTexture(t,e=go){}update(t,e,r){}setSize(t,e){}initialize(t,e,r){}dispose(){for(const t of Object.keys(this)){const e=this[t];(e instanceof $e||e instanceof Ei||e instanceof vo||e instanceof Lu)&&this[t].dispose()}}};const vd=new x;function Uo(t,e,r=new x,i){const{x:n,y:a,z:s}=t,o=e.x,c=e.y,l=e.z,u=n*n*o,d=a*a*c,p=s*s*l,m=u+d+p,h=Math.sqrt(1/m);if(!Number.isFinite(h))return;const g=vd.copy(t).multiplyScalar(h);if(m<((i==null?void 0:i.centerTolerance)??.1))return r.copy(g);const v=g.multiply(e).multiplyScalar(2);let y=(1-h)*t.length()/(v.length()/2),T=0,b,I,A,R;do{y-=T,b=1/(1+y*o),I=1/(1+y*c),A=1/(1+y*l);const F=b*b,P=I*I,U=A*A,O=F*b,W=P*I,te=U*A;R=u*F+d*P+p*U-1,T=R/((u*O*o+d*W*c+p*te*l)*-2)}while(Math.abs(R)>1e-12);return r.set(n*b,a*I,s*A)}const Jr=new x,ua=new x,da=new x,Gn=class{constructor(e,r,i){this.radii=new x(e,r,i)}get minimumRadius(){return Math.min(this.radii.x,this.radii.y,this.radii.z)}get maximumRadius(){return Math.max(this.radii.x,this.radii.y,this.radii.z)}reciprocalRadii(e=new x){const{x:r,y:i,z:n}=this.radii;return e.set(1/r,1/i,1/n)}reciprocalRadiiSquared(e=new x){const{x:r,y:i,z:n}=this.radii;return e.set(1/r**2,1/i**2,1/n**2)}projectOnSurface(e,r=new x,i){return Uo(e,this.reciprocalRadiiSquared(),r,i)}getSurfaceNormal(e,r=new x){return r.multiplyVectors(this.reciprocalRadiiSquared(Jr),e).normalize()}getEastNorthUpVectors(e,r=new x,i=new x,n=new x){this.getSurfaceNormal(e,n),r.set(-e.y,e.x,0).normalize(),i.crossVectors(n,r).normalize()}getEastNorthUpFrame(e,r=new re){const i=Jr,n=ua,a=da;return this.getEastNorthUpVectors(e,i,n,a),r.makeBasis(i,n,a).setPosition(e)}getIntersection(e,r=new x){const i=this.reciprocalRadii(Jr),n=ua.copy(i).multiply(e.origin),a=da.copy(i).multiply(e.direction),s=n.lengthSq(),o=a.lengthSq(),c=n.dot(a),l=c**2-o*(s-1);if(s===1)return r.copy(e.origin);if(s>1){if(c>=0||l<0)return;const u=Math.sqrt(l),d=(-c-u)/o,p=(-c+u)/o;return e.at(Math.min(d,p),r)}if(s<1){const u=c**2-o*(s-1),d=Math.sqrt(u),p=(-c+d)/o;return e.at(p,r)}if(c<0)return e.at(-c/o,r)}getOsculatingSphereCenter(e,r,i=new x){const n=this.radii.x**2,a=Jr.set(e.x/n,e.y/n,e.z/this.radii.z**2).normalize();return i.copy(a.multiplyScalar(-r).add(e))}};Gn.WGS84=new Gn(6378137,6378137,6356752314245179e-9);let ut=Gn;const ei=new x,ha=new x,wr=class jn{constructor(e=0,r=0,i=0){this.longitude=e,this.latitude=r,this.height=i}set(e,r,i){return this.longitude=e,this.latitude=r,i!=null&&(this.height=i),this}clone(){return new jn(this.longitude,this.latitude,this.height)}copy(e){return this.longitude=e.longitude,this.latitude=e.latitude,this.height=e.height,this}equals(e){return e.longitude===this.longitude&&e.latitude===this.latitude&&e.height===this.height}setLongitude(e){return this.longitude=e,this}setLatitude(e){return this.latitude=e,this}setHeight(e){return this.height=e,this}normalize(){return this.longitude<jn.MIN_LONGITUDE&&(this.longitude+=Math.PI*2),this}setFromECEF(e,r){const i=((r==null?void 0:r.ellipsoid)??ut.WGS84).reciprocalRadiiSquared(ei),n=Uo(e,i,ha,r);if(n==null)throw new Error(`Could not project position to ellipsoid surface: ${e.toArray()}`);const a=ei.multiplyVectors(n,i).normalize();this.longitude=Math.atan2(a.y,a.x),this.latitude=Math.asin(a.z);const s=ei.subVectors(e,n);return this.height=Math.sign(s.dot(e))*s.length(),this}toECEF(e=new x,r){const i=(r==null?void 0:r.ellipsoid)??ut.WGS84,n=ei.multiplyVectors(i.radii,i.radii),a=Math.cos(this.latitude),s=ha.set(a*Math.cos(this.longitude),a*Math.sin(this.longitude),Math.sin(this.latitude)).normalize();return e.multiplyVectors(n,s),e.divideScalar(Math.sqrt(s.dot(e))).add(s.multiplyScalar(this.height))}fromArray(e,r=0){return this.longitude=e[r],this.latitude=e[r+1],this.height=e[r+2],this}toArray(e=[],r=0){return e[r]=this.longitude,e[r+1]=this.latitude,e[r+2]=this.height,e}*[Symbol.iterator](){yield this.longitude,yield this.latitude,yield this.height}};wr.MIN_LONGITUDE=-Math.PI,wr.MAX_LONGITUDE=Math.PI,wr.MIN_LATITUDE=-Math.PI/2,wr.MAX_LATITUDE=Math.PI/2;let ko=wr;var yd="Invariant failed";function Ho(t,e){if(!t)throw new Error(yd)}class Sd extends cs{load(e,r,i,n){const a=new Zc(this.manager);a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(this.withCredentials),a.load(e,s=>{Ho(s instanceof ArrayBuffer);try{r(s)}catch(o){n!=null?n(o):console.error(o),this.manager.itemError(e)}},i,n)}}const wd="This is not an object",_d="This is not a Float16Array object",ma="This constructor is not a subclass of Float16Array",zo="The constructor property value is not an object",xd="Species constructor didn't return TypedArray object",Td="Derived constructor created TypedArray object which was too small length",Mr="Attempting to access detached ArrayBuffer",Yn="Cannot convert undefined or null to object",$n="Cannot mix BigInt and other types, use explicit conversions",fa="@@iterator property is not callable",pa="Reduce of empty array with no initial value",bd="The comparison function must be either a function or undefined",gn="Offset is out of bounds";function de(t){return(e,...r)=>Ne(t,e,r)}function tr(t,e){return de(Xt(t,e).get)}const{apply:Ne,construct:_r,defineProperty:Md,get:vn,getOwnPropertyDescriptor:Xt,getPrototypeOf:Br,has:Kn,ownKeys:Vo,set:ga,setPrototypeOf:Wo}=Reflect,Rd=Proxy,{EPSILON:Ed,MAX_SAFE_INTEGER:va,isFinite:Go,isNaN:Qt}=Number,{iterator:dt,species:Ad,toStringTag:fs,for:Cd}=Symbol,Zt=Object,{create:Fi,defineProperty:Ur,freeze:Id,is:ya}=Zt,qn=Zt.prototype,Dd=qn.__lookupGetter__?de(qn.__lookupGetter__):(t,e)=>{if(t==null)throw ge(Yn);let r=Zt(t);do{const i=Xt(r,e);if(i!==void 0)return _t(i,"get")?i.get:void 0}while((r=Br(r))!==null)},_t=Zt.hasOwn||de(qn.hasOwnProperty),jo=Array,Yo=jo.isArray,Bi=jo.prototype,Pd=de(Bi.join),Od=de(Bi.push),Nd=de(Bi.toLocaleString),ps=Bi[dt],Ld=de(ps),{abs:Fd,trunc:$o}=Math,Ui=ArrayBuffer,Bd=Ui.isView,Ko=Ui.prototype,Ud=de(Ko.slice),kd=tr(Ko,"byteLength"),Xn=typeof SharedArrayBuffer<"u"?SharedArrayBuffer:null,Hd=Xn&&tr(Xn.prototype,"byteLength"),gs=Br(Uint8Array),zd=gs.from,_e=gs.prototype,Vd=_e[dt],Wd=de(_e.keys),Gd=de(_e.values),jd=de(_e.entries),Yd=de(_e.set),Sa=de(_e.reverse),$d=de(_e.fill),Kd=de(_e.copyWithin),wa=de(_e.sort),gr=de(_e.slice),qd=de(_e.subarray),we=tr(_e,"buffer"),Pt=tr(_e,"byteOffset"),ne=tr(_e,"length"),qo=tr(_e,fs),Xd=Uint8Array,He=Uint16Array,_a=(...t)=>Ne(zd,He,t),vs=Uint32Array,Qd=Float32Array,Bt=Br([][dt]()),ki=de(Bt.next),Zd=de(function*(){}().next),Jd=Br(Bt),eh=DataView.prototype,th=de(eh.getUint16),ge=TypeError,yn=RangeError,Xo=WeakSet,Qo=Xo.prototype,rh=de(Qo.add),ih=de(Qo.has),Hi=WeakMap,ys=Hi.prototype,gi=de(ys.get),nh=de(ys.has),Ss=de(ys.set),Zo=new Hi,sh=Fi(null,{next:{value:function(){const t=gi(Zo,this);return ki(t)}},[dt]:{value:function(){return this}}});function xr(t){if(t[dt]===ps&&Bt.next===ki)return t;const e=Fi(sh);return Ss(Zo,e,Ld(t)),e}const Jo=new Hi,ec=Fi(Jd,{next:{value:function(){const t=gi(Jo,this);return Zd(t)},writable:!0,configurable:!0}});for(const t of Vo(Bt))t!=="next"&&Ur(ec,t,Xt(Bt,t));function xa(t){const e=Fi(ec);return Ss(Jo,e,t),e}function vi(t){return t!==null&&typeof t=="object"||typeof t=="function"}function Ta(t){return t!==null&&typeof t=="object"}function yi(t){return qo(t)!==void 0}function Qn(t){const e=qo(t);return e==="BigInt64Array"||e==="BigUint64Array"}function ah(t){try{return Yo(t)?!1:(kd(t),!0)}catch{return!1}}function tc(t){if(Xn===null)return!1;try{return Hd(t),!0}catch{return!1}}function oh(t){return ah(t)||tc(t)}function ba(t){return Yo(t)?t[dt]===ps&&Bt.next===ki:!1}function ch(t){return yi(t)?t[dt]===Vd&&Bt.next===ki:!1}function ti(t){if(typeof t!="string")return!1;const e=+t;return t!==e+""||!Go(e)?!1:e===$o(e)}const Si=Cd("__Float16Array__");function lh(t){if(!Ta(t))return!1;const e=Br(t);if(!Ta(e))return!1;const r=e.constructor;if(r===void 0)return!1;if(!vi(r))throw ge(zo);return Kn(r,Si)}const Zn=1/Ed;function uh(t){return t+Zn-Zn}const rc=6103515625e-14,dh=65504,ic=.0009765625,Ma=ic*rc,hh=ic*Zn;function mh(t){const e=+t;if(!Go(e)||e===0)return e;const r=e>0?1:-1,i=Fd(e);if(i<rc)return r*uh(i/Ma)*Ma;const n=(1+hh)*i,a=n-(n-i);return a>dh||Qt(a)?r*(1/0):r*a}const nc=new Ui(4),sc=new Qd(nc),ac=new vs(nc),et=new He(512),tt=new Xd(512);for(let t=0;t<256;++t){const e=t-127;e<-24?(et[t]=0,et[t|256]=32768,tt[t]=24,tt[t|256]=24):e<-14?(et[t]=1024>>-e-14,et[t|256]=1024>>-e-14|32768,tt[t]=-e-1,tt[t|256]=-e-1):e<=15?(et[t]=e+15<<10,et[t|256]=e+15<<10|32768,tt[t]=13,tt[t|256]=13):e<128?(et[t]=31744,et[t|256]=64512,tt[t]=24,tt[t|256]=24):(et[t]=31744,et[t|256]=64512,tt[t]=13,tt[t|256]=13)}function ot(t){sc[0]=mh(t);const e=ac[0],r=e>>23&511;return et[r]+((e&8388607)>>tt[r])}const ws=new vs(2048);for(let t=1;t<1024;++t){let e=t<<13,r=0;for(;!(e&8388608);)e<<=1,r-=8388608;e&=-8388609,r+=947912704,ws[t]=e|r}for(let t=1024;t<2048;++t)ws[t]=939524096+(t-1024<<13);const rr=new vs(64);for(let t=1;t<31;++t)rr[t]=t<<23;rr[31]=1199570944;rr[32]=2147483648;for(let t=33;t<63;++t)rr[t]=2147483648+(t-32<<23);rr[63]=3347054592;const oc=new He(64);for(let t=1;t<64;++t)t!==32&&(oc[t]=1024);function se(t){const e=t>>10;return ac[0]=ws[oc[e]+(t&1023)]+rr[e],sc[0]}function St(t){const e=+t;return Qt(e)||e===0?0:$o(e)}function Sn(t){const e=St(t);return e<0?0:e<va?e:va}function ri(t,e){if(!vi(t))throw ge(wd);const r=t.constructor;if(r===void 0)return e;if(!vi(r))throw ge(zo);return r[Ad]??e}function Rr(t){if(tc(t))return!1;try{return Ud(t,0,0),!1}catch{}return!0}function Ra(t,e){const r=Qt(t),i=Qt(e);if(r&&i)return 0;if(r)return 1;if(i||t<e)return-1;if(t>e)return 1;if(t===0&&e===0){const n=ya(t,0),a=ya(e,0);if(!n&&a)return-1;if(n&&!a)return 1}return 0}const _s=2,wi=new Hi;function Yt(t){return nh(wi,t)||!Bd(t)&&lh(t)}function ie(t){if(!Yt(t))throw ge(_d)}function ii(t,e){const r=Yt(t),i=yi(t);if(!r&&!i)throw ge(xd);if(typeof e=="number"){let n;if(r){const a=K(t);n=ne(a)}else n=ne(t);if(n<e)throw ge(Td)}if(Qn(t))throw ge($n)}function K(t){const e=gi(wi,t);if(e!==void 0){const n=we(e);if(Rr(n))throw ge(Mr);return e}const r=t.buffer;if(Rr(r))throw ge(Mr);const i=_r(le,[r,t.byteOffset,t.length],t.constructor);return gi(wi,i)}function Ea(t){const e=ne(t),r=[];for(let i=0;i<e;++i)r[i]=se(t[i]);return r}const cc=new Xo;for(const t of Vo(_e)){if(t===fs)continue;const e=Xt(_e,t);_t(e,"get")&&typeof e.get=="function"&&rh(cc,e.get)}const fh=Id({get(t,e,r){return ti(e)&&_t(t,e)?se(vn(t,e)):ih(cc,Dd(t,e))?vn(t,e):vn(t,e,r)},set(t,e,r,i){return ti(e)&&_t(t,e)?ga(t,e,ot(r)):ga(t,e,r,i)},getOwnPropertyDescriptor(t,e){if(ti(e)&&_t(t,e)){const r=Xt(t,e);return r.value=se(r.value),r}return Xt(t,e)},defineProperty(t,e,r){return ti(e)&&_t(t,e)&&_t(r,"value")&&(r.value=ot(r.value)),Md(t,e,r)}});class le{constructor(e,r,i){let n;if(Yt(e))n=_r(He,[K(e)],new.target);else if(vi(e)&&!oh(e)){let s,o;if(yi(e)){s=e,o=ne(e);const c=we(e);if(Rr(c))throw ge(Mr);if(Qn(e))throw ge($n);const l=new Ui(o*_s);n=_r(He,[l],new.target)}else{const c=e[dt];if(c!=null&&typeof c!="function")throw ge(fa);c!=null?ba(e)?(s=e,o=e.length):(s=[...e],o=s.length):(s=e,o=Sn(s.length)),n=_r(He,[o],new.target)}for(let c=0;c<o;++c)n[c]=ot(s[c])}else n=_r(He,arguments,new.target);const a=new Rd(n,fh);return Ss(wi,a,n),a}static from(e,...r){const i=this;if(!Kn(i,Si))throw ge(ma);if(i===le){if(Yt(e)&&r.length===0){const u=K(e),d=new He(we(u),Pt(u),ne(u));return new le(we(gr(d)))}if(r.length===0)return new le(we(_a(e,ot)));const c=r[0],l=r[1];return new le(we(_a(e,function(u,...d){return ot(Ne(c,this,[u,...xr(d)]))},l)))}let n,a;const s=e[dt];if(s!=null&&typeof s!="function")throw ge(fa);if(s!=null)ba(e)?(n=e,a=e.length):ch(e)?(n=e,a=ne(e)):(n=[...e],a=n.length);else{if(e==null)throw ge(Yn);n=Zt(e),a=Sn(n.length)}const o=new i(a);if(r.length===0)for(let c=0;c<a;++c)o[c]=n[c];else{const c=r[0],l=r[1];for(let u=0;u<a;++u)o[u]=Ne(c,l,[n[u],u])}return o}static of(...e){const r=this;if(!Kn(r,Si))throw ge(ma);const i=e.length;if(r===le){const a=new le(i),s=K(a);for(let o=0;o<i;++o)s[o]=ot(e[o]);return a}const n=new r(i);for(let a=0;a<i;++a)n[a]=e[a];return n}keys(){ie(this);const e=K(this);return Wd(e)}values(){ie(this);const e=K(this);return xa(function*(){for(const r of Gd(e))yield se(r)}())}entries(){ie(this);const e=K(this);return xa(function*(){for(const[r,i]of jd(e))yield[r,se(i)]}())}at(e){ie(this);const r=K(this),i=ne(r),n=St(e),a=n>=0?n:i+n;if(!(a<0||a>=i))return se(r[a])}with(e,r){ie(this);const i=K(this),n=ne(i),a=St(e),s=a>=0?a:n+a,o=+r;if(s<0||s>=n)throw yn(gn);const c=new He(we(i),Pt(i),ne(i)),l=new le(we(gr(c))),u=K(l);return u[s]=ot(o),l}map(e,...r){ie(this);const i=K(this),n=ne(i),a=r[0],s=ri(i,le);if(s===le){const c=new le(n),l=K(c);for(let u=0;u<n;++u){const d=se(i[u]);l[u]=ot(Ne(e,a,[d,u,this]))}return c}const o=new s(n);ii(o,n);for(let c=0;c<n;++c){const l=se(i[c]);o[c]=Ne(e,a,[l,c,this])}return o}filter(e,...r){ie(this);const i=K(this),n=ne(i),a=r[0],s=[];for(let l=0;l<n;++l){const u=se(i[l]);Ne(e,a,[u,l,this])&&Od(s,u)}const o=ri(i,le),c=new o(s);return ii(c),c}reduce(e,...r){ie(this);const i=K(this),n=ne(i);if(n===0&&r.length===0)throw ge(pa);let a,s;r.length===0?(a=se(i[0]),s=1):(a=r[0],s=0);for(let o=s;o<n;++o)a=e(a,se(i[o]),o,this);return a}reduceRight(e,...r){ie(this);const i=K(this),n=ne(i);if(n===0&&r.length===0)throw ge(pa);let a,s;r.length===0?(a=se(i[n-1]),s=n-2):(a=r[0],s=n-1);for(let o=s;o>=0;--o)a=e(a,se(i[o]),o,this);return a}forEach(e,...r){ie(this);const i=K(this),n=ne(i),a=r[0];for(let s=0;s<n;++s)Ne(e,a,[se(i[s]),s,this])}find(e,...r){ie(this);const i=K(this),n=ne(i),a=r[0];for(let s=0;s<n;++s){const o=se(i[s]);if(Ne(e,a,[o,s,this]))return o}}findIndex(e,...r){ie(this);const i=K(this),n=ne(i),a=r[0];for(let s=0;s<n;++s){const o=se(i[s]);if(Ne(e,a,[o,s,this]))return s}return-1}findLast(e,...r){ie(this);const i=K(this),n=ne(i),a=r[0];for(let s=n-1;s>=0;--s){const o=se(i[s]);if(Ne(e,a,[o,s,this]))return o}}findLastIndex(e,...r){ie(this);const i=K(this),n=ne(i),a=r[0];for(let s=n-1;s>=0;--s){const o=se(i[s]);if(Ne(e,a,[o,s,this]))return s}return-1}every(e,...r){ie(this);const i=K(this),n=ne(i),a=r[0];for(let s=0;s<n;++s)if(!Ne(e,a,[se(i[s]),s,this]))return!1;return!0}some(e,...r){ie(this);const i=K(this),n=ne(i),a=r[0];for(let s=0;s<n;++s)if(Ne(e,a,[se(i[s]),s,this]))return!0;return!1}set(e,...r){ie(this);const i=K(this),n=St(r[0]);if(n<0)throw yn(gn);if(e==null)throw ge(Yn);if(Qn(e))throw ge($n);if(Yt(e))return Yd(K(this),K(e),n);if(yi(e)){const c=we(e);if(Rr(c))throw ge(Mr)}const a=ne(i),s=Zt(e),o=Sn(s.length);if(n===1/0||o+n>a)throw yn(gn);for(let c=0;c<o;++c)i[c+n]=ot(s[c])}reverse(){ie(this);const e=K(this);return Sa(e),this}toReversed(){ie(this);const e=K(this),r=new He(we(e),Pt(e),ne(e)),i=new le(we(gr(r))),n=K(i);return Sa(n),i}fill(e,...r){ie(this);const i=K(this);return $d(i,ot(e),...xr(r)),this}copyWithin(e,r,...i){ie(this);const n=K(this);return Kd(n,e,r,...xr(i)),this}sort(e){ie(this);const r=K(this),i=e!==void 0?e:Ra;return wa(r,(n,a)=>i(se(n),se(a))),this}toSorted(e){ie(this);const r=K(this);if(e!==void 0&&typeof e!="function")throw new ge(bd);const i=e!==void 0?e:Ra,n=new He(we(r),Pt(r),ne(r)),a=new le(we(gr(n))),s=K(a);return wa(s,(o,c)=>i(se(o),se(c))),a}slice(e,r){ie(this);const i=K(this),n=ri(i,le);if(n===le){const h=new He(we(i),Pt(i),ne(i));return new le(we(gr(h,e,r)))}const a=ne(i),s=St(e),o=r===void 0?a:St(r);let c;s===-1/0?c=0:s<0?c=a+s>0?a+s:0:c=a<s?a:s;let l;o===-1/0?l=0:o<0?l=a+o>0?a+o:0:l=a<o?a:o;const u=l-c>0?l-c:0,d=new n(u);if(ii(d,u),u===0)return d;const p=we(i);if(Rr(p))throw ge(Mr);let m=0;for(;c<l;)d[m]=se(i[c]),++c,++m;return d}subarray(e,r){ie(this);const i=K(this),n=ri(i,le),a=new He(we(i),Pt(i),ne(i)),s=qd(a,e,r),o=new n(we(s),Pt(s),ne(s));return ii(o),o}indexOf(e,...r){ie(this);const i=K(this),n=ne(i);let a=St(r[0]);if(a===1/0)return-1;a<0&&(a+=n,a<0&&(a=0));for(let s=a;s<n;++s)if(_t(i,s)&&se(i[s])===e)return s;return-1}lastIndexOf(e,...r){ie(this);const i=K(this),n=ne(i);let a=r.length>=1?St(r[0]):n-1;if(a===-1/0)return-1;a>=0?a=a<n-1?a:n-1:a+=n;for(let s=a;s>=0;--s)if(_t(i,s)&&se(i[s])===e)return s;return-1}includes(e,...r){ie(this);const i=K(this),n=ne(i);let a=St(r[0]);if(a===1/0)return!1;a<0&&(a+=n,a<0&&(a=0));const s=Qt(e);for(let o=a;o<n;++o){const c=se(i[o]);if(s&&Qt(c)||c===e)return!0}return!1}join(e){ie(this);const r=K(this),i=Ea(r);return Pd(i,e)}toLocaleString(...e){ie(this);const r=K(this),i=Ea(r);return Nd(i,...xr(e))}get[fs](){if(Yt(this))return"Float16Array"}}Ur(le,"BYTES_PER_ELEMENT",{value:_s});Ur(le,Si,{});Wo(le,gs);const _i=le.prototype;Ur(_i,"BYTES_PER_ELEMENT",{value:_s});Ur(_i,dt,{value:_i.values,writable:!0,configurable:!0});Wo(_i,_e);function ph(t,e,...r){return se(th(t,e,...xr(r)))}function gh(t){return t instanceof Int8Array||t instanceof Uint8Array||t instanceof Uint8ClampedArray||t instanceof Int16Array||t instanceof Uint16Array||t instanceof Int32Array||t instanceof Uint32Array||t instanceof le||t instanceof Float32Array||t instanceof Float64Array}let ni;function vh(){if(ni!=null)return ni;const t=new Uint32Array([268435456]);return ni=new Uint8Array(t.buffer,t.byteOffset,t.byteLength)[0]===0,ni}function yh(t,e,r,i=!0){if(i===vh())return new e(t);const n=Object.assign(new DataView(t),{getFloat16(s,o){return ph(this,s,o)}}),a=new e(n.byteLength/e.BYTES_PER_ELEMENT);for(let s=0,o=0;s<a.length;++s,o+=e.BYTES_PER_ELEMENT)a[s]=n[r](o,i);return a}const wn=(t,e)=>yh(t,le,"getFloat16",e);class Sh extends cs{load(e,r,i,n){const a=new Sd(this.manager);a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(this.withCredentials),a.load(e,s=>{try{r(this.parseTypedArray(s))}catch(o){n!=null?n(o):console.error(o),this.manager.itemError(e)}},i,n)}}function wh(t){return class extends Sh{constructor(){super(...arguments),this.parseTypedArray=t}}}function _h(t){const e=t instanceof Int8Array?Jc:t instanceof Uint8Array?ea:t instanceof Uint8ClampedArray?ea:t instanceof Int16Array?el:t instanceof Uint16Array?tl:t instanceof Int32Array?rl:t instanceof Uint32Array?Ft:t instanceof le?So:t instanceof Float32Array?wt:t instanceof Float64Array?wt:null;return Ho(e!=null),e}const xh={format:Ir,minFilter:Js,magFilter:Js};class Th extends cs{constructor(){super(...arguments),this.parameters={}}load(e,r,i,n){const a=new this.Texture,s=new this.TypedArrayLoader(this.manager);s.setRequestHeader(this.requestHeader),s.setPath(this.path),s.setWithCredentials(this.withCredentials),s.load(e,o=>{a.image.data=o instanceof le?new Uint16Array(o.buffer):o;const{width:c,height:l,depth:u,...d}=this.parameters;c!=null&&(a.image.width=c),l!=null&&(a.image.height=l),"depth"in a.image&&u!=null&&(a.image.depth=u),a.type=_h(o),Object.assign(a,d),a.needsUpdate=!0,r(a)},i,n)}}function lc(t,e,r){return class extends Th{constructor(){super(...arguments),this.Texture=t,this.TypedArrayLoader=wh(e),this.parameters={...xh,...r}}}}function bh(t,e){return lc(Qc,t,e)}function Mh(t,e){return lc(kn,t,e)}function Rh(t,e){return new(bh(t,e))}function Aa(t,e){return new(Mh(t,e))}const xi=os.clamp,Jn=os.degToRad;function Eh(t,e,r,i=0,n=1){return os.mapLinear(t,e,r,i,n)}function Ah(t){return Math.min(Math.max(t,0),1)}function De(t){return(e,r)=>{e instanceof Ei?Object.defineProperty(e,r,{enumerable:!0,get(){var i;return((i=this.defines)==null?void 0:i[t])!=null},set(i){var n;i!==this[r]&&(i?(this.defines??(this.defines={}),this.defines[t]="1"):(n=this.defines)==null||delete n[t],this.needsUpdate=!0)}}):Object.defineProperty(e,r,{enumerable:!0,get(){return this.defines.has(t)},set(i){i!==this[r]&&(i?this.defines.set(t,"1"):this.defines.delete(t),this.setChanged())}})}}function Ch(t,{min:e=Number.MIN_SAFE_INTEGER,max:r=Number.MAX_SAFE_INTEGER}={}){return(i,n)=>{i instanceof Ei?Object.defineProperty(i,n,{enumerable:!0,get(){var a;const s=(a=this.defines)==null?void 0:a[t];return s!=null?parseInt(s):0},set(a){const s=this[n];a!==s&&(this.defines??(this.defines={}),this.defines[t]=xi(a,e,r).toFixed(0),this.needsUpdate=!0)}}):Object.defineProperty(i,n,{enumerable:!0,get(){const a=this.defines.get(t);return a!=null?parseInt(a):0},set(a){const s=this[n];a!==s&&(this.defines.set(t,xi(a,e,r).toFixed(0)),this.setChanged())}})}}var kr=Uint8Array,uc=Uint16Array,Ih=Uint32Array,Dh=new kr([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Ph=new kr([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),dc=function(t,e){for(var r=new uc(31),i=0;i<31;++i)r[i]=e+=1<<t[i-1];for(var n=new Ih(r[30]),i=1;i<30;++i)for(var a=r[i];a<r[i+1];++a)n[a]=a-r[i]<<5|i;return[r,n]},hc=dc(Dh,2),Oh=hc[0],Nh=hc[1];Oh[28]=258,Nh[258]=28;dc(Ph,0);var Lh=new uc(32768);for(var he=0;he<32768;++he){var Rt=(he&43690)>>>1|(he&21845)<<1;Rt=(Rt&52428)>>>2|(Rt&13107)<<2,Rt=(Rt&61680)>>>4|(Rt&3855)<<4,Lh[he]=((Rt&65280)>>>8|(Rt&255)<<8)>>>1}var zi=new kr(288);for(var he=0;he<144;++he)zi[he]=8;for(var he=144;he<256;++he)zi[he]=9;for(var he=256;he<280;++he)zi[he]=7;for(var he=280;he<288;++he)zi[he]=8;var Fh=new kr(32);for(var he=0;he<32;++he)Fh[he]=5;var Bh=new kr(0),Uh=typeof TextDecoder<"u"&&new TextDecoder,kh=0;try{Uh.decode(Bh,{stream:!0}),kh=1}catch{}const Hh=/^[ \t]*#include +"([\w\d./]+)"/gm;function Ut(t,e){return t.replace(Hh,(r,i)=>{const n=i.split("/").reduce((a,s)=>typeof a!="string"&&a!=null?a[s]:void 0,e);if(typeof n!="string")throw new Error(`Could not find include for ${i}.`);return Ut(n,e)})}const zh=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*(?:i\s*\+\+|\+\+\s*i)\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vh(t,e,r,i){let n="";for(let a=parseInt(e);a<parseInt(r);++a)n+=i.replace(/\[\s*i\s*\]/g,"["+a+"]").replace(/UNROLLED_LOOP_INDEX/g,`${a}`);return n}function Wh(t){return t.replace(zh,Vh)}const Gh=`// Reference: https://github.com/mrdoob/three.js/blob/r171/examples/jsm/csm/CSMShader.js

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
`,jh=`// cSpell:words logdepthbuf

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
`,Yh=`// Reference: https://advances.realtimerendering.com/s2014/index.html#_NEXT_GENERATION_POST

float interleavedGradientNoise(const vec2 coord) {
  const vec3 magic = vec3(0.06711056, 0.00583715, 52.9829189);
  return fract(magic.z * fract(dot(coord, magic.xy)));
}
`,$h=`#if !defined(saturate)
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
`,Kh=`// Reference: https://jcgt.org/published/0003/02/01/paper.pdf

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
`,qh=`float raySphereFirstIntersection(
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
`,Xh=`vec3 screenToView(
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
`,Qh=`// Reference: https://www.gamedev.net/tutorials/programming/graphics/contact-hardening-soft-shadows-made-fast-r4906/

vec2 vogelDisk(const int index, const int sampleCount, const float phi) {
  const float goldenAngle = 2.39996322972865332;
  float r = sqrt(float(index) + 0.5) / sqrt(float(sampleCount));
  float theta = float(index) * goldenAngle + phi;
  return r * vec2(cos(theta), sin(theta));
}
`,Zh=Gh,Jh=jh,em=Yh,tm=$h,rm=Kh,mc=qh,im=Xh,nm=Qh,xs=`// Based on the following work and adapted to Three.js.
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
`,Jt=`uniform vec3 u_solar_irradiance;
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
`,sm=["solarIrradiance","sunAngularRadius","bottomRadius","topRadius","rayleighScattering","mieScattering","miePhaseFunctionG","muSMin","skyRadianceToLuminance","sunRadianceToLuminance","luminousEfficiency"];function am(t,e){if(e!=null)for(const r of sm){const i=e[r];i!=null&&(t[r]instanceof x?t[r].copy(i):t[r]=i)}}const es=class{constructor(e){this.solarIrradiance=new x(1.474,1.8504,1.91198),this.sunAngularRadius=.004675,this.bottomRadius=636e4,this.topRadius=642e4,this.rayleighScattering=new x(.005802,.013558,.0331),this.mieScattering=new x(.003996,.003996,.003996),this.miePhaseFunctionG=.8,this.muSMin=Math.cos(Jn(120)),this.skyRadianceToLuminance=new x(114974.916437,71305.954816,65310.548555),this.sunRadianceToLuminance=new x(98242.786222,69954.398112,66475.012354),this.luminousEfficiency=new x(.2126,.7152,.0722),this.skyRadianceToRelativeLuminance=new x,this.sunRadianceToRelativeLuminance=new x,am(this,e);const r=this.luminousEfficiency.dot(this.skyRadianceToLuminance);this.skyRadianceToRelativeLuminance.copy(this.skyRadianceToLuminance).divideScalar(r),this.sunRadianceToRelativeLuminance.copy(this.sunRadianceToLuminance).divideScalar(r)}};es.DEFAULT=new es;let Vi=es;const Wi=64,Gi=16,Ts=32,bs=128,Ms=32,Rs=8,om=Rs*Ms,cm=bs,lm=Ts,ji=256,Yi=64,Kt=1/1e3,um="82e00c5222d6cbc222af69abdf6d3f4fc9f63030",_n=`https://media.githubusercontent.com/media/takram-design-engineering/three-geospatial/${um}/packages/atmosphere/assets`,dm=new x;function $i(t,e,r,i,n=!0){const a=r.projectOnSurface(t,dm);return a!=null?r.getOsculatingSphereCenter(!n||a.lengthSq()<t.lengthSq()?a:t,e,i):i.setScalar(0)}const hm=`precision highp sampler2DArray;

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
`,mm=`uniform mat4 inverseViewMatrix;
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
`,fc=`vec3 getLunarRadiance(const float moonAngularRadius) {
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
`;var fm=Object.defineProperty,Ke=(t,e,r,i)=>{for(var n=void 0,a=t.length-1,s;a>=0;a--)(s=t[a])&&(n=s(e,r,n)||n);return n&&fm(e,r,n),n};const pm=new x,gm=new x,vm=new ko,ym={blendFunction:Z.NORMAL,octEncodedNormal:!1,reconstructNormal:!1,ellipsoid:ut.WGS84,correctAltitude:!0,correctGeometricError:!0,photometric:!0,sunIrradiance:!1,skyIrradiance:!1,transmittance:!0,inscatter:!0,irradianceScale:1,sky:!1,sun:!0,moon:!0,moonAngularRadius:.0045,lunarRadianceScale:1};class qe extends gd{constructor(e=new rs,r,i=Vi.DEFAULT){const{blendFunction:n,normalBuffer:a=null,octEncodedNormal:s,reconstructNormal:o,irradianceTexture:c=null,scatteringTexture:l=null,transmittanceTexture:u=null,ellipsoid:d,correctAltitude:p,correctGeometricError:m,photometric:h,sunDirection:g,sunIrradiance:v,skyIrradiance:y,transmittance:T,inscatter:b,irradianceScale:I,sky:A,sun:R,moon:F,moonDirection:P,moonAngularRadius:U,lunarRadianceScale:O}={...ym,...r};super("AerialPerspectiveEffect",Wh(Ut(hm,{core:{depth:Jh,packing:rm,math:tm,transform:im,raySphereIntersection:mc,cascadedShadowMaps:Zh,interleavedGradientNoise:em,vogelDisk:nm},parameters:Jt,functions:xs,sky:fc})),{blendFunction:n,vertexShader:Ut(mm,{parameters:Jt}),attributes:Bo.DEPTH,uniforms:new Map(Object.entries({normalBuffer:new E(a),projectionMatrix:new E(new re),viewMatrix:new E(new re),inverseProjectionMatrix:new E(new re),inverseViewMatrix:new E(new re),cameraPosition:new E(new x),bottomRadius:new E(i.bottomRadius),ellipsoidRadii:new E(new x),ellipsoidCenter:new E(new x),inverseEllipsoidMatrix:new E(new re),altitudeCorrection:new E(new x),sunDirection:new E((g==null?void 0:g.clone())??new x),irradianceScale:new E(I),idealSphereAlpha:new E(0),moonDirection:new E((P==null?void 0:P.clone())??new x),moonAngularRadius:new E(U),lunarRadianceScale:new E(O),overlayBuffer:new E(null),shadowBuffer:new E(null),shadowMapSize:new E(new It),shadowIntervals:new E([]),shadowMatrices:new E([]),inverseShadowMatrices:new E([]),shadowFar:new E(0),shadowTopHeight:new E(0),shadowRadius:new E(3),stbnTexture:new E(null),frame:new E(0),shadowLengthBuffer:new E(null),u_solar_irradiance:new E(i.solarIrradiance),u_sun_angular_radius:new E(i.sunAngularRadius),u_bottom_radius:new E(i.bottomRadius*Kt),u_top_radius:new E(i.topRadius*Kt),u_rayleigh_scattering:new E(i.rayleighScattering),u_mie_scattering:new E(i.mieScattering),u_mie_phase_function_g:new E(i.miePhaseFunctionG),u_mu_s_min:new E(i.muSMin),u_irradiance_texture:new E(c),u_scattering_texture:new E(l),u_single_mie_scattering_texture:new E(l),u_transmittance_texture:new E(u)})),defines:new Map([["TRANSMITTANCE_TEXTURE_WIDTH",ji.toFixed(0)],["TRANSMITTANCE_TEXTURE_HEIGHT",Yi.toFixed(0)],["SCATTERING_TEXTURE_R_SIZE",Ts.toFixed(0)],["SCATTERING_TEXTURE_MU_SIZE",bs.toFixed(0)],["SCATTERING_TEXTURE_MU_S_SIZE",Ms.toFixed(0)],["SCATTERING_TEXTURE_NU_SIZE",Rs.toFixed(0)],["IRRADIANCE_TEXTURE_WIDTH",Wi.toFixed(0)],["IRRADIANCE_TEXTURE_HEIGHT",Gi.toFixed(0)],["METER_TO_LENGTH_UNIT",Kt.toFixed(7)],["SUN_SPECTRAL_RADIANCE_TO_LUMINANCE",`vec3(${i.sunRadianceToRelativeLuminance.toArray().map(W=>W.toFixed(12)).join(",")})`],["SKY_SPECTRAL_RADIANCE_TO_LUMINANCE",`vec3(${i.skyRadianceToRelativeLuminance.toArray().map(W=>W.toFixed(12)).join(",")})`]])}),this.camera=e,this.atmosphere=i,this.ellipsoidMatrix=new re,this.overlay=null,this.shadow=null,this.shadowLength=null,this.shadowSampleCount=8,this.octEncodedNormal=s,this.reconstructNormal=o,this.ellipsoid=d,this.correctAltitude=p,this.correctGeometricError=m,this.photometric=h,this.sunIrradiance=v,this.skyIrradiance=y,this.transmittance=T,this.inscatter=b,this.sky=A,this.sun=R,this.moon=F}get mainCamera(){return this.camera}set mainCamera(e){this.camera=e}copyCameraSettings(e){const{projectionMatrix:r,matrixWorldInverse:i,projectionMatrixInverse:n,matrixWorld:a}=e,s=this.uniforms;s.get("projectionMatrix").value.copy(r),s.get("viewMatrix").value.copy(i),s.get("inverseProjectionMatrix").value.copy(n),s.get("inverseViewMatrix").value.copy(a);const o=e.getWorldPosition(s.get("cameraPosition").value),c=s.get("inverseEllipsoidMatrix").value.copy(this.ellipsoidMatrix).invert(),l=pm.copy(o).applyMatrix4(c).sub(s.get("ellipsoidCenter").value);try{const d=vm.setFromECEF(l).height,p=gm.set(0,this.ellipsoid.maximumRadius,-d).applyMatrix4(r);s.get("idealSphereAlpha").value=Ah(Eh(p.y,41.5,13.8,0,1))}catch{return}const u=s.get("altitudeCorrection");this.correctAltitude?$i(l,this.atmosphere.bottomRadius,this.ellipsoid,u.value):u.value.setScalar(0)}updateComposition(){const{uniforms:e,defines:r,overlay:i,shadow:n,shadowLength:a}=this,s=r.has("HAS_OVERLAY"),o=i!=null;o!==s&&(o?r.set("HAS_OVERLAY","1"):(r.delete("HAS_OVERLAY"),e.get("overlayBuffer").value=null),this.setChanged()),o&&(e.get("overlayBuffer").value=i.map);const c=r.has("HAS_SHADOW"),l=n!=null;if(l!==c&&(l?r.set("HAS_SHADOW","1"):(r.delete("HAS_SHADOW"),e.get("shadowBuffer").value=null),this.setChanged()),l){const p=r.get("SHADOW_CASCADE_COUNT"),m=`${n.cascadeCount}`;p!==m&&(r.set("SHADOW_CASCADE_COUNT",n.cascadeCount.toFixed(0)),this.setChanged()),e.get("shadowBuffer").value=n.map,e.get("shadowMapSize").value=n.mapSize,e.get("shadowIntervals").value=n.intervals,e.get("shadowMatrices").value=n.matrices,e.get("inverseShadowMatrices").value=n.inverseMatrices,e.get("shadowFar").value=n.far,e.get("shadowTopHeight").value=n.topHeight}const u=r.has("HAS_SHADOW_LENGTH"),d=a!=null;d!==u&&(d?r.set("HAS_SHADOW_LENGTH","1"):(r.delete("HAS_SHADOW_LENGTH"),e.get("shadowLengthBuffer").value=null),this.setChanged()),d&&(e.get("shadowLengthBuffer").value=a.map)}update(e,r,i){this.copyCameraSettings(this.camera),this.updateComposition(),++this.uniforms.get("frame").value}get normalBuffer(){return this.uniforms.get("normalBuffer").value}set normalBuffer(e){this.uniforms.get("normalBuffer").value=e}get irradianceTexture(){return this.uniforms.get("u_irradiance_texture").value}set irradianceTexture(e){this.uniforms.get("u_irradiance_texture").value=e}get scatteringTexture(){return this.uniforms.get("u_scattering_texture").value}set scatteringTexture(e){this.uniforms.get("u_scattering_texture").value=e,this.uniforms.get("u_single_mie_scattering_texture").value=e}get transmittanceTexture(){return this.uniforms.get("u_transmittance_texture").value}set transmittanceTexture(e){this.uniforms.get("u_transmittance_texture").value=e}get useHalfFloat(){return!0}set useHalfFloat(e){}get ellipsoid(){return this._ellipsoid}set ellipsoid(e){this._ellipsoid=e,this.uniforms.get("ellipsoidRadii").value.copy(e.radii)}get ellipsoidCenter(){return this.uniforms.get("ellipsoidCenter").value}get sunDirection(){return this.uniforms.get("sunDirection").value}get irradianceScale(){return this.uniforms.get("irradianceScale").value}set irradianceScale(e){this.uniforms.get("irradianceScale").value=e}get moonDirection(){return this.uniforms.get("moonDirection").value}get moonAngularRadius(){return this.uniforms.get("moonAngularRadius").value}set moonAngularRadius(e){this.uniforms.get("moonAngularRadius").value=e}get lunarRadianceScale(){return this.uniforms.get("lunarRadianceScale").value}set lunarRadianceScale(e){this.uniforms.get("lunarRadianceScale").value=e}get stbnTexture(){return this.uniforms.get("stbnTexture").value}set stbnTexture(e){this.uniforms.get("stbnTexture").value=e}get shadowRadius(){return this.uniforms.get("shadowRadius").value}set shadowRadius(e){this.uniforms.get("shadowRadius").value=e}}Ke([De("OCT_ENCODED_NORMAL")],qe.prototype,"octEncodedNormal");Ke([De("RECONSTRUCT_NORMAL")],qe.prototype,"reconstructNormal");Ke([De("CORRECT_GEOMETRIC_ERROR")],qe.prototype,"correctGeometricError");Ke([De("PHOTOMETRIC")],qe.prototype,"photometric");Ke([De("SUN_IRRADIANCE")],qe.prototype,"sunIrradiance");Ke([De("SKY_IRRADIANCE")],qe.prototype,"skyIrradiance");Ke([De("TRANSMITTANCE")],qe.prototype,"transmittance");Ke([De("INSCATTER")],qe.prototype,"inscatter");Ke([De("SKY")],qe.prototype,"sky");Ke([De("SUN")],qe.prototype,"sun");Ke([De("MOON")],qe.prototype,"moon");Ke([Ch("SHADOW_SAMPLE_COUNT",{min:1,max:16})],qe.prototype,"shadowSampleCount");var Sm=Object.defineProperty,wm=(t,e,r,i)=>{for(var n=void 0,a=t.length-1,s;a>=0;a--)(s=t[a])&&(n=s(e,r,n)||n);return n&&Sm(e,r,n),n};const _m=new x;function xm(t,e){let r="",i="";for(let n=1;n<e;++n)r+=`layout(location = ${n}) out float renderTarget${n};
`,i+=`renderTarget${n} = 0.0;
`;return t.replace("#include <mrt_layout>",r).replace("#include <mrt_output>",i)}const Es={ellipsoid:ut.WGS84,correctAltitude:!0,photometric:!0,renderTargetCount:1};class As extends il{constructor(e,r=Vi.DEFAULT){const{irradianceTexture:i=null,scatteringTexture:n=null,transmittanceTexture:a=null,useHalfFloat:s,ellipsoid:o,correctAltitude:c,photometric:l,sunDirection:u,sunAngularRadius:d,renderTargetCount:p,...m}={...Es,...e};super({toneMapped:!1,depthWrite:!1,depthTest:!1,...m,uniforms:{cameraPosition:new E(new x),ellipsoidCenter:new E(new x),inverseEllipsoidMatrix:new E(new re),altitudeCorrection:new E(new x),sunDirection:new E((u==null?void 0:u.clone())??new x),u_solar_irradiance:new E(r.solarIrradiance),u_sun_angular_radius:new E(d??r.sunAngularRadius),u_bottom_radius:new E(r.bottomRadius*Kt),u_top_radius:new E(r.topRadius*Kt),u_rayleigh_scattering:new E(r.rayleighScattering),u_mie_scattering:new E(r.mieScattering),u_mie_phase_function_g:new E(r.miePhaseFunctionG),u_mu_s_min:new E(r.muSMin),u_irradiance_texture:new E(i),u_scattering_texture:new E(n),u_single_mie_scattering_texture:new E(n),u_transmittance_texture:new E(a),...m.uniforms},defines:{PI:`${Math.PI}`,TRANSMITTANCE_TEXTURE_WIDTH:ji.toFixed(0),TRANSMITTANCE_TEXTURE_HEIGHT:Yi.toFixed(0),SCATTERING_TEXTURE_R_SIZE:Ts.toFixed(0),SCATTERING_TEXTURE_MU_SIZE:bs.toFixed(0),SCATTERING_TEXTURE_MU_S_SIZE:Ms.toFixed(0),SCATTERING_TEXTURE_NU_SIZE:Rs.toFixed(0),IRRADIANCE_TEXTURE_WIDTH:Wi.toFixed(0),IRRADIANCE_TEXTURE_HEIGHT:Gi.toFixed(0),METER_TO_LENGTH_UNIT:Kt.toFixed(7),SUN_SPECTRAL_RADIANCE_TO_LUMINANCE:`vec3(${r.sunRadianceToRelativeLuminance.toArray().map(h=>h.toFixed(12)).join(",")})`,SKY_SPECTRAL_RADIANCE_TO_LUMINANCE:`vec3(${r.skyRadianceToRelativeLuminance.toArray().map(h=>h.toFixed(12)).join(",")})`,...m.defines}}),this.atmosphere=r,this.ellipsoidMatrix=new re,this.atmosphere=r,this.ellipsoid=o,this.correctAltitude=c,this.photometric=l,this.renderTargetCount=p}copyCameraSettings(e){const r=this.uniforms,i=e.getWorldPosition(r.cameraPosition.value),n=r.inverseEllipsoidMatrix.value.copy(this.ellipsoidMatrix).invert(),a=_m.copy(i).applyMatrix4(n).sub(r.ellipsoidCenter.value),s=r.altitudeCorrection.value;this.correctAltitude?$i(a,this.atmosphere.bottomRadius,this.ellipsoid,s):s.setScalar(0)}onBeforeCompile(e,r){e.fragmentShader=xm(e.fragmentShader,this.renderTargetCount)}onBeforeRender(e,r,i,n,a,s){this.copyCameraSettings(i)}get irradianceTexture(){return this.uniforms.u_irradiance_texture.value}set irradianceTexture(e){this.uniforms.u_irradiance_texture.value=e}get scatteringTexture(){return this.uniforms.u_scattering_texture.value}set scatteringTexture(e){this.uniforms.u_scattering_texture.value=e,this.uniforms.u_single_mie_scattering_texture.value=e}get transmittanceTexture(){return this.uniforms.u_transmittance_texture.value}set transmittanceTexture(e){this.uniforms.u_transmittance_texture.value=e}get useHalfFloat(){return!0}set useHalfFloat(e){}get ellipsoidCenter(){return this.uniforms.ellipsoidCenter.value}get sunDirection(){return this.uniforms.sunDirection.value}get sunAngularRadius(){return this.uniforms.u_sun_angular_radius.value}set sunAngularRadius(e){this.uniforms.u_sun_angular_radius.value=e}get renderTargetCount(){return this._renderTargetCount}set renderTargetCount(e){e!==this.renderTargetCount&&(this._renderTargetCount=e,this.needsUpdate=!0)}}wm([De("PHOTOMETRIC")],As.prototype,"photometric");var ct;(function(t){t.Sun="Sun",t.Moon="Moon",t.Mercury="Mercury",t.Venus="Venus",t.Earth="Earth",t.Mars="Mars",t.Jupiter="Jupiter",t.Saturn="Saturn",t.Uranus="Uranus",t.Neptune="Neptune",t.Pluto="Pluto",t.SSB="SSB",t.EMB="EMB",t.Star1="Star1",t.Star2="Star2",t.Star3="Star3",t.Star4="Star4",t.Star5="Star5",t.Star6="Star6",t.Star7="Star7",t.Star8="Star8"})(ct||(ct={}));ct.Star1,ct.Star2,ct.Star3,ct.Star4,ct.Star5,ct.Star6,ct.Star7,ct.Star8;var Ca;(function(t){t[t.From2000=0]="From2000",t[t.Into2000=1]="Into2000"})(Ca||(Ca={}));var Ia;(function(t){t[t.Pericenter=0]="Pericenter",t[t.Apocenter=1]="Apocenter"})(Ia||(Ia={}));var Da;(function(t){t.Penumbral="penumbral",t.Partial="partial",t.Annular="annular",t.Total="total"})(Da||(Da={}));var Pa;(function(t){t[t.Invalid=0]="Invalid",t[t.Ascending=1]="Ascending",t[t.Descending=-1]="Descending"})(Pa||(Pa={}));function pc(t){return Math.sqrt(Math.max(t,0))}function Tm(t){return Math.max(t,0)}function bm(t,e,r){const{bottomRadius:i}=t;return r<0&&e**2*(r**2-1)+i**2>=0}function Mm(t,e,r){const{topRadius:i}=t,n=e**2*(r**2-1)+i**2;return Tm(-e*r+pc(n))}function Ti(t,e){return .5/e+t*(1-1/e)}var Rm="Invariant failed";function Em(t,e){if(!t)throw new Error(Rm)}const Am=new x,Oa=new x,Cm=new x;function si(t,e,r){const i=e*4;return r.set(t[i],t[i+1],t[i+2])}function gc(t,e,r){const{width:i,height:n}=t.image;Em(gh(t.image.data));let a=t.image.data;t.type===So&&a instanceof Uint16Array&&(a=new le(a.buffer));const s=xi(e.x,0,1)*(i-1),o=xi(e.y,0,1)*(n-1),c=Math.floor(s),l=Math.floor(o),u=s-c,d=o-l,p=u,m=d,h=c%i,g=(h+1)%i,v=l%n,y=(v+1)%n,T=si(a,v*i+h,Am),b=si(a,v*i+g,Oa),I=T.lerp(b,p),A=si(a,y*i+h,Oa),R=si(a,y*i+g,Cm),F=A.lerp(R,p);return r.copy(I.lerp(F,m))}function Im(t,e,r,i){const{topRadius:n,bottomRadius:a}=t,s=Math.sqrt(n**2-a**2),o=pc(e**2-a**2),c=Mm(t,e,r),l=n-e,u=o+s,d=(c-l)/(u-l),p=o/s;return i.set(Ti(d,ji),Ti(p,Yi))}const Dm=new x,xn=new x,Pm=new It;function Na(t,e,r,i=new Ve,{ellipsoid:n=ut.WGS84,correctAltitude:a=!0,photometric:s=!0}={},o=Vi.DEFAULT){const c=Dm.copy(e);if(a){const g=n.projectOnSurface(e,xn);g!=null&&c.sub(n.getOsculatingSphereCenter(g,o.bottomRadius,xn))}const l=xn;let u=c.length(),d=c.dot(r);const{topRadius:p}=o,m=-d-Math.sqrt(d**2-u**2+p**2);if(m>0&&(u=p,d+=m),u>p)l.set(1,1,1);else{const g=d/u;if(bm(o,u,g))l.setScalar(0);else{const v=Im(o,u,g,Pm);gc(t,v,l)}}const h=l.multiply(o.solarIrradiance);return s&&h.multiply(o.sunRadianceToRelativeLuminance),i.setFromVector3(h)}var Hr=Uint8Array,vc=Uint16Array,Om=Uint32Array,Nm=new Hr([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Lm=new Hr([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),yc=function(t,e){for(var r=new vc(31),i=0;i<31;++i)r[i]=e+=1<<t[i-1];for(var n=new Om(r[30]),i=1;i<30;++i)for(var a=r[i];a<r[i+1];++a)n[a]=a-r[i]<<5|i;return[r,n]},Sc=yc(Nm,2),Fm=Sc[0],Bm=Sc[1];Fm[28]=258,Bm[258]=28;yc(Lm,0);var Um=new vc(32768);for(var me=0;me<32768;++me){var Et=(me&43690)>>>1|(me&21845)<<1;Et=(Et&52428)>>>2|(Et&13107)<<2,Et=(Et&61680)>>>4|(Et&3855)<<4,Um[me]=((Et&65280)>>>8|(Et&255)<<8)>>>1}var Ki=new Hr(288);for(var me=0;me<144;++me)Ki[me]=8;for(var me=144;me<256;++me)Ki[me]=9;for(var me=256;me<280;++me)Ki[me]=7;for(var me=280;me<288;++me)Ki[me]=8;var km=new Hr(32);for(var me=0;me<32;++me)km[me]=5;var Hm=new Hr(0),zm=typeof TextDecoder<"u"&&new TextDecoder,Vm=0;try{zm.decode(Hm,{stream:!0}),Vm=1}catch{}function Wm({topRadius:t,bottomRadius:e},r,i,n){const a=(r-e)/(t-e),s=i*.5+.5;return n.set(Ti(s,Wi),Ti(a,Gi))}const Gm=1/Math.sqrt(Math.PI),Tn=Math.sqrt(3)/(2*Math.sqrt(Math.PI)),jm=new x,bn=new x,Ym=new It,$m=new re,Km={ellipsoid:ut.WGS84,correctAltitude:!0,photometric:!0};class qm extends wo{constructor(e,r=Vi.DEFAULT){super(),this.atmosphere=r,this.ellipsoidCenter=new x,this.ellipsoidMatrix=new re;const{irradianceTexture:i=null,ellipsoid:n,correctAltitude:a,photometric:s,sunDirection:o}={...Km,...e};this.irradianceTexture=i,this.ellipsoid=n,this.correctAltitude=a,this.photometric=s,this.sunDirection=(o==null?void 0:o.clone())??new x}update(){if(this.irradianceTexture==null)return;const e=$m.copy(this.ellipsoidMatrix).invert(),r=this.getWorldPosition(jm).applyMatrix4(e).sub(this.ellipsoidCenter);if(this.correctAltitude){const l=this.ellipsoid.projectOnSurface(r,bn);l!=null&&r.sub($i(l,this.atmosphere.bottomRadius,this.ellipsoid,bn))}const i=r.length(),n=r.dot(this.sunDirection)/i,a=Wm(this.atmosphere,i,n,Ym),s=gc(this.irradianceTexture,a,bn);this.photometric&&s.multiply(this.atmosphere.skyRadianceToRelativeLuminance);const o=this.ellipsoid.getSurfaceNormal(r).applyMatrix4(this.ellipsoidMatrix),c=this.sh.coefficients;c[0].copy(s).multiplyScalar(Gm),c[1].copy(s).multiplyScalar(Tn*o.y),c[2].copy(s).multiplyScalar(Tn*o.z),c[3].copy(s).multiplyScalar(Tn*o.x)}}const Xm=`precision highp float;
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
`,Qm=`precision highp float;
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
`;var Zm=Object.defineProperty,wc=(t,e,r,i)=>{for(var n=void 0,a=t.length-1,s;a>=0;a--)(s=t[a])&&(n=s(e,r,n)||n);return n&&Zm(e,r,n),n};const Jm={...Es,sun:!0,moon:!0,moonAngularRadius:.0045,lunarRadianceScale:1};class Cs extends As{constructor(e){const{sun:r,moon:i,moonDirection:n,moonAngularRadius:a,lunarRadianceScale:s,groundAlbedo:o,...c}={...Jm,...e};super({name:"SkyMaterial",glslVersion:Cr,vertexShader:Ut(Qm,{parameters:Jt}),fragmentShader:Ut(Xm,{core:{raySphereIntersection:mc},parameters:Jt,functions:xs,sky:fc}),...c,uniforms:{inverseProjectionMatrix:new E(new re),inverseViewMatrix:new E(new re),moonDirection:new E((n==null?void 0:n.clone())??new x),moonAngularRadius:new E(a),lunarRadianceScale:new E(s),groundAlbedo:new E((o==null?void 0:o.clone())??new Ve(0)),shadowLengthBuffer:new E(null),...c.uniforms},defines:{PERSPECTIVE_CAMERA:"1"},depthTest:!0}),this.shadowLength=null,this.sun=r,this.moon=i}onBeforeRender(e,r,i,n,a,s){super.onBeforeRender(e,r,i,n,a,s);const{uniforms:o,defines:c}=this;o.inverseProjectionMatrix.value.copy(i.projectionMatrixInverse),o.inverseViewMatrix.value.copy(i.matrixWorld);const l=c.PERSPECTIVE_CAMERA!=null,u=i.isPerspectiveCamera===!0;u!==l&&(u?c.PERSPECTIVE_CAMERA="1":delete c.PERSPECTIVE_CAMERA,this.needsUpdate=!0);const d=this.groundAlbedo,p=c.GROUND_ALBEDO!=null,m=d.r!==0||d.g!==0||d.b!==0;m!==p&&(m?this.defines.GROUND_ALBEDO="1":delete this.defines.GROUND_ALBEDO,this.needsUpdate=!0);const h=this.shadowLength,g=c.HAS_SHADOW_LENGTH!=null,v=h!=null;v!==g&&(v?c.HAS_SHADOW_LENGTH="1":(delete c.HAS_SHADOW_LENGTH,o.shadowLengthBuffer.value=null),this.needsUpdate=!0),v&&(o.shadowLengthBuffer.value=h.map)}get moonDirection(){return this.uniforms.moonDirection.value}get moonAngularRadius(){return this.uniforms.moonAngularRadius.value}set moonAngularRadius(e){this.uniforms.moonAngularRadius.value=e}get lunarRadianceScale(){return this.uniforms.lunarRadianceScale.value}set lunarRadianceScale(e){this.uniforms.lunarRadianceScale.value=e}get groundAlbedo(){return this.uniforms.groundAlbedo.value}}wc([De("SUN")],Cs.prototype,"sun");wc([De("MOON")],Cs.prototype,"moon");const ef=`precision highp float;
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
`,tf=`precision highp float;
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
`;var rf=Object.defineProperty,nf=(t,e,r,i)=>{for(var n=void 0,a=t.length-1,s;a>=0;a--)(s=t[a])&&(n=s(e,r,n)||n);return n&&rf(e,r,n),n};const sf={...Es,pointSize:1,radianceScale:1,background:!0};class af extends As{constructor(e){const{pointSize:r,radianceScale:i,background:n,...a}={...sf,...e};super({name:"StarsMaterial",glslVersion:Cr,vertexShader:Ut(tf,{parameters:Jt}),fragmentShader:Ut(ef,{parameters:Jt,functions:xs}),...a,uniforms:{projectionMatrix:new E(new re),modelViewMatrix:new E(new re),viewMatrix:new E(new re),matrixWorld:new E(new re),cameraFar:new E(0),pointSize:new E(0),magnitudeRange:new E(new It(-2,8)),radianceScale:new E(i),...a.uniforms},defines:{PERSPECTIVE_CAMERA:"1"}}),this.pointSize=r,this.background=n}onBeforeRender(e,r,i,n,a,s){super.onBeforeRender(e,r,i,n,a,s);const o=this.uniforms;o.projectionMatrix.value.copy(i.projectionMatrix),o.modelViewMatrix.value.copy(i.modelViewMatrix),o.viewMatrix.value.copy(i.matrixWorldInverse),o.matrixWorld.value.copy(a.matrixWorld),o.cameraFar.value=i.far,o.pointSize.value=this.pointSize*e.getPixelRatio();const c=i.isPerspectiveCamera===!0;this.defines.PERSPECTIVE_CAMERA!=null!==c&&(c?this.defines.PERSPECTIVE_CAMERA="1":delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}get magnitudeRange(){return this.uniforms.magnitudeRange.value}get radianceScale(){return this.uniforms.radianceScale.value}set radianceScale(e){this.uniforms.radianceScale.value=e}}nf([De("BACKGROUND")],af.prototype,"background");const La=new Ve("#fff2d8"),Fa=1e-8,Mn=3e4,Ba=-1e3,Ua=1e7,of=5e6,cf=8e6,Dr=t=>Number.isFinite(t.x)&&Number.isFinite(t.y)&&Number.isFinite(t.z),ka=t=>!Number.isFinite(t.longitude)||Math.abs(t.longitude)>180?"longitude must be a finite value in degrees within [-180, 180]":!Number.isFinite(t.latitude)||Math.abs(t.latitude)>90?"latitude must be a finite value in degrees within [-90, 90]":!Number.isFinite(t.altitudeMeters)||t.altitudeMeters<Ba||t.altitudeMeters>Ua?`altitudeMeters must be within [${Ba}, ${Ua}]`:null,lf=(t,e,r)=>{if(!Number.isFinite(t.getTime()))return"instant must be a valid Date";const i=ka(e);if(i)return`observer ${i}`;if(!r)return null;const n=ka(r.observer);return n?`sky reference observer ${n}`:Dr(r.scenePosition)?null:"sky reference scenePosition must contain finite metre coordinates"},_c=t=>{if(!Dr(t.directionToSunECEF))return"sun direction contains a non-finite component";if(Math.abs(t.directionToSunECEF.length()-1)>1e-6)return"sun direction is not normalized";if(!t.ecefToSceneMatrix.elements.every(Number.isFinite))return"ECEF-to-scene matrix contains a non-finite component";const e=t.ecefToSceneMatrix.elements,r=[new x(e[0],e[4],e[8]),new x(e[1],e[5],e[9]),new x(e[2],e[6],e[10])];if(r.some(a=>Math.abs(a.length()-1)>1e-6)||Math.abs(r[0].dot(r[1]))>1e-6||Math.abs(r[0].dot(r[2]))>1e-6||Math.abs(r[1].dot(r[2]))>1e-6||Math.abs(e[3])>1e-12||Math.abs(e[7])>1e-12||Math.abs(e[11])>1e-12||Math.abs(e[12])>1e-12||Math.abs(e[13])>1e-12||Math.abs(e[14])>1e-12||Math.abs(e[15]-1)>1e-12)return"ECEF-to-scene matrix is not an affine orthonormal rotation";const i=t.ecefToSceneMatrix.determinant();if(!Number.isFinite(i)||Math.abs(i-1)>1e-6)return"ECEF-to-scene matrix is not a proper orthonormal rotation";if(!Dr(t.ellipsoidCenterECEF))return"ellipsoid center contains a non-finite component";const n=t.ellipsoidCenterECEF.length();return n<of||n>cf?"ellipsoid center is outside the plausible WGS84 distance range":null},uf=t=>{var r;const e=_c(t.skyFrame);return e||(Dr(t.directionToSun)?Math.abs(t.directionToSun.length()-1)>1e-6?"scene sun direction is not normalized":![t.color.r,t.color.g,t.color.b].every(Number.isFinite)||![t.radiance.r,t.radiance.g,t.radiance.b].every(Number.isFinite)||!Number.isFinite(t.relativeIntensity)||t.relativeIntensity<0||t.relativeIntensity>1||!Number.isFinite(t.azimuthDegrees)||!Number.isFinite(t.elevationDegrees)?"sunlight color, intensity, or angles contain invalid values":(r=t.skyIrradianceCoefficients)!=null&&r.some(i=>!Dr(i))?"sky irradiance contains a non-finite coefficient":null:"scene sun direction contains a non-finite component")},Rn={useTransmittanceLut:!0,useIrradianceLut:!0},df=({east:t,north:e,up:r})=>new re().set(t.x,t.y,t.z,0,r.x,r.y,r.z,0,-e.x,-e.y,-e.z,0,0,0,0,1);function xc({longitude:t,latitude:e,altitudeMeters:r}){const i=new ko(Jn(t),Jn(e),r).toECEF(),n=new x,a=new x,s=new x;return ut.WGS84.getEastNorthUpVectors(i,n,a,s),{observerECEF:i,east:n,north:a,up:s}}const hf=(t,{east:e,north:r,up:i},n)=>n.set(t.dot(e),t.dot(i),-t.dot(r)).normalize(),mf=(t,e,r)=>{const i=r?xc(r.observer):e,n=df(i),a=n.clone().invert(),s=((r==null?void 0:r.scenePosition)??new x).clone().applyMatrix4(a).sub(i.observerECEF);return{directionToSunECEF:t.clone(),ecefToSceneMatrix:n,ellipsoidCenterECEF:s}},ff=(t,e,{observerECEF:r,east:i,north:n,up:a})=>t!=null&&t.irradianceTexture?(t.ellipsoidMatrix.set(i.x,i.y,i.z,0,a.x,a.y,a.z,0,-n.x,-n.y,-n.z,0,0,0,0,1),t.ellipsoidCenter.copy(r).negate(),t.sunDirection.copy(e),t.position.set(0,0,0),t.updateMatrixWorld(!0),t.update(),t.sh.coefficients.map(s=>s.clone())):null,pf=t=>{const e=ta(Math.asin(ze(t.y,-1,1)));return{azimuthDegrees:(ta(Math.atan2(t.x,-t.z))+360)%360,elevationDegrees:e}},gf=(t,e,r,i=null,n)=>{const a=xc(e),{observerECEF:s,up:o}=a,c=new x(...nl(t)),l=hf(c,a,new x),u=mf(c,a,n),d=ff(i,c,a),{azimuthDegrees:p,elevationDegrees:m}=pf(l);if(!r){const b=Math.sqrt(ze(l.y,0,1));return{directionToSun:l,color:La.clone(),relativeIntensity:b,radiance:La.clone().multiplyScalar(b),atmosphericTransmittanceReady:!1,atmosphericIrradianceReady:d!==null,skyIrradianceCoefficients:d,azimuthDegrees:p,elevationDegrees:m,skyFrame:u}}const h=Na(r,s,c,new Ve,{ellipsoid:ut.WGS84,correctAltitude:!0,photometric:!0}),g=Na(r,s,o,new Ve,{ellipsoid:ut.WGS84,correctAltitude:!0,photometric:!0}),v=Math.max(h.r,h.g,h.b,0),y=Math.max(g.r,g.g,g.b,Fa),T=v>Fa?h.clone().multiplyScalar(1/v):new Ve(0,0,0);return{directionToSun:l,color:T,relativeIntensity:ze(v/y,0,1),radiance:h,atmosphericTransmittanceReady:!0,atmosphericIrradianceReady:d!==null,skyIrradianceCoefficients:d,azimuthDegrees:p,elevationDegrees:m,skyFrame:u}};class vf{transmittanceTexture=null;irradianceTexture=null;scatteringTexture=null;skyLightProbe=new qm({ellipsoid:ut.WGS84,correctAltitude:!0,photometric:!0});transmittanceLoading=!1;irradianceLoading=!1;scatteringLoading=!1;transmittanceRetryAt=0;irradianceRetryAt=0;scatteringRetryAt=0;disposed=!1;get ready(){return this.transmittanceTexture!==null&&this.irradianceTexture!==null}get skyReady(){return this.skyTextures!==null}get skyTextures(){return!this.transmittanceTexture||!this.irradianceTexture||!this.scatteringTexture?null:{transmittanceTexture:this.transmittanceTexture,irradianceTexture:this.irradianceTexture,scatteringTexture:this.scatteringTexture}}get isSkyLoading(){return this.transmittanceLoading||this.irradianceLoading||this.scatteringLoading}isLoadingFor(e=Rn){return e.useTransmittanceLut&&this.transmittanceLoading||e.useIrradianceLut&&this.irradianceLoading}ensure(e,r=Rn){if(this.disposed)return;const i=()=>{this.isLoadingFor(r)||e()};r.useTransmittanceLut&&this.ensureTransmittance(i),r.useIrradianceLut&&this.ensureIrradiance(i)}ensureSky(e){if(this.disposed||this.skyReady)return;let r=!1;const i=()=>{!r&&!this.isSkyLoading&&(r=!0,e())};this.ensureTransmittance(i),this.ensureIrradiance(i),this.ensureScattering(i)}ensureTransmittance(e){this.transmittanceTexture||this.transmittanceLoading||Date.now()<this.transmittanceRetryAt||(this.transmittanceLoading=!0,Aa(wn,{width:ji,height:Yi}).load(`${_n}/transmittance.bin`,r=>{if(this.transmittanceLoading=!1,this.disposed){r.dispose();return}this.transmittanceRetryAt=0,this.transmittanceTexture=r,e()},void 0,r=>{this.transmittanceLoading=!1,this.disposed||(this.transmittanceRetryAt=Date.now()+Mn,console.error("[SHADOW] Takram transmittance LUT failed",r),e())}))}ensureIrradiance(e){this.irradianceTexture||this.irradianceLoading||Date.now()<this.irradianceRetryAt||(this.irradianceLoading=!0,Aa(wn,{width:Wi,height:Gi}).load(`${_n}/irradiance.bin`,r=>{if(this.irradianceLoading=!1,this.disposed){r.dispose();return}this.irradianceRetryAt=0,this.irradianceTexture=r,this.skyLightProbe.irradianceTexture=r,e()},void 0,r=>{this.irradianceLoading=!1,this.disposed||(this.irradianceRetryAt=Date.now()+Mn,console.error("[SHADOW] Takram irradiance LUT failed",r),e())}))}ensureScattering(e){this.scatteringTexture||this.scatteringLoading||Date.now()<this.scatteringRetryAt||(this.scatteringLoading=!0,Rh(wn,{width:om,height:cm,depth:lm}).load(`${_n}/scattering.bin`,r=>{if(this.scatteringLoading=!1,this.disposed){r.dispose();return}this.scatteringRetryAt=0,this.scatteringTexture=r,e()},void 0,r=>{this.scatteringLoading=!1,this.disposed||(this.scatteringRetryAt=Date.now()+Mn,console.error("[SHADOW] Takram scattering LUT failed",r),e())}))}evaluate(e,r,i=Rn,n){return gf(e,r,i.useTransmittanceLut?this.transmittanceTexture:null,i.useIrradianceLut?this.skyLightProbe:null,n)}dispose(){var e,r,i;this.disposed||(this.disposed=!0,this.transmittanceLoading=!1,this.irradianceLoading=!1,this.scatteringLoading=!1,this.transmittanceRetryAt=0,this.irradianceRetryAt=0,this.scatteringRetryAt=0,(e=this.transmittanceTexture)==null||e.dispose(),(r=this.irradianceTexture)==null||r.dispose(),(i=this.scatteringTexture)==null||i.dispose(),this.transmittanceTexture=null,this.irradianceTexture=null,this.scatteringTexture=null,this.skyLightProbe.irradianceTexture=null,this.skyLightProbe.sh.zero())}}const yf="shadow-simulation-atmospheric-sky",zr=2,di="carmaOutputToSrgb",En="carmaDisplayExposure",Sf=new x;class wf extends Cs{observerScenePosition=new x;hasObserverScenePosition=!1;viewCamera=null;copyCameraSettings(e){if(super.copyCameraSettings(e),!this.hasObserverScenePosition)return;const r=this.uniforms;if(r.cameraPosition.value.copy(this.observerScenePosition),!this.correctAltitude)return;const i=Sf.copy(this.observerScenePosition).applyMatrix4(r.inverseEllipsoidMatrix.value).sub(r.ellipsoidCenter.value);$i(i,this.atmosphere.bottomRadius,this.ellipsoid,r.altitudeCorrection.value)}onBeforeRender(e,r,i,n,a,s){super.onBeforeRender(e,r,this.viewCamera??i,n,a,s)}}const _f=t=>{t.uniforms.toneMappingExposure=new E(1),t.uniforms[di]=new E(!1),t.uniforms[En]=new E(zr),t.fragmentShader=t.fragmentShader.replace("precision highp sampler3D;",`precision highp sampler3D;

uniform bool ${di};
uniform float ${En};
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
  }`).replace("outputColor.a = 1.0;",`outputColor.rgb *= ${En};
  outputColor.a = 1.0;
  if (${di}) {
    // SkyMaterial is raw GLSL: match terrain's AgX on the display target.
    // Offscreen samples stay linear HDR until the shared final composite.
    outputColor.rgb = AgXToneMapping(outputColor.rgb);
    outputColor = carmaLinearToSrgb(outputColor);
  }`)},xf=t=>{const e=new wf({groundAlbedo:t,moon:!1,photometric:!0,side:_o,sun:!0});_f(e),e.depthTest=!1,e.depthWrite=!1;const r=new yo;r.setAttribute("position",new sl([-1,-1,0,3,-1,0,-1,3,0],3));const i=new Pr(r,e);return i.name=yf,i.visible=!1,i.frustumCulled=!1,i.renderOrder=-100,i.castShadow=!1,i.receiveShadow=!1,i.onBeforeRender=n=>{e.uniforms.toneMappingExposure.value=n.toneMappingExposure,e.uniforms[di].value=n.getRenderTarget()===null},{mesh:i,update(n,a){return a?_c(n)?!1:(i.visible=!0,e.irradianceTexture=a.irradianceTexture,e.scatteringTexture=a.scatteringTexture,e.transmittanceTexture=a.transmittanceTexture,e.sunDirection.copy(n.directionToSunECEF),e.ellipsoidCenter.copy(n.ellipsoidCenterECEF),e.ellipsoidMatrix.copy(n.ecefToSceneMatrix),!0):(i.visible=!1,!1)},updateViewCamera(n){e.viewCamera=n},updateObserverScenePosition(n){e.observerScenePosition.copy(n),e.hasObserverScenePosition=!0},updateGroundAlbedo(n){e.groundAlbedo.copy(n)},dispose(){r.dispose(),e.dispose()}}},ai=3,Tf=.5,at=64,Ha=.01,bf=(t,e,r)=>Math.min(r**2,Math.max(at**2,Math.floor(t!==void 0&&Number.isFinite(t)&&t>0?t:e))),Mf=(t,e)=>{const{mapSize:r,maxMapSize:i,elevationSine:n,sunDiscGuardMeters:a,groundTexelFit:s}=e,o=t.right-t.left+2*a,c=t.top-t.bottom+2*a,l=Math.max(Ha,Math.abs(n)),d=2*(s?ai+Tf:ai);let p=r,m=r,h=!1,g=!1;const v=e.groundTexelTargetMeters;if(v!==void 0&&(!Number.isFinite(v)||v<=0))throw new RangeError("Shadow ground texel target must be positive and finite");if(v!==void 0){const W=C=>Math.max(at,2**Math.ceil(Math.log2(C))),te=W(o/v+d),B=W(c/(v*l)+d);p=Math.min(i,te),m=Math.min(i,B),h=p<te||m<B}else if(s){const W=o*l/c,te=e.mapTexelBudget??r*r,B=d*(W+1),C=te-d*d,k=2*C/(B+Math.sqrt(B**2+4*W*C)),j=W*k+d,ae=k+d;h=j>i||ae>i;const Q=Math.max(o,c)/(r-d),ue=Math.min(r,Math.max(at,Math.ceil((o/Q+d)/at)*at)),xe=Math.min(r,Math.max(at,Math.ceil((c/Q+d)/at)*at));g=j<ue||ae<xe;const We=Math.min(Math.max(j,ue,te/i),i,te/xe),N=H=>Math.floor(H/at+1e-9)*at;p=Math.max(ue,N(We)),m=Math.max(xe,N(Math.min(i,te/p)))}const y=e.mapDimensions;y&&(g||(g=p!==y.width||m!==y.height),p=y.width,m=y.height);const T=o/Math.max(1,p-d),b=c/Math.max(1,m-d),I=Math.max(T,b,Number.EPSILON),A=s?T:I,R=s?b:I,F=Math.round((t.left+t.right)/2/A)*A,P=Math.round((t.bottom+t.top)/2/R)*R,U=A*p,O=R*m;return{left:F-U/2,right:F+U/2,bottom:P-O/2,top:P+O/2,mapWidth:p,mapHeight:m,metersPerTexelX:A,metersPerTexelY:R,guardMetersX:A*ai,guardMetersY:R*ai,groundTexelWidthMeters:A,groundTexelHeightMeters:Math.abs(n)>Number.EPSILON?R/Math.abs(n):1/0,groundTexelFitLimited:s&&(h||g||Math.abs(n)<Ha)}},Rf=(t,e,r)=>{if(r<=0)return{planarMeters:0,depthMeters:0};const i=Math.sqrt(Math.max(0,1-e**2)),n=i>Math.sin(r)?Math.asin(Math.sin(r)/i):Math.PI;return{planarMeters:2*t*Math.sin(Math.min(Math.PI,n+r)/2),depthMeters:2*t*Math.sin(r/2)}},Ef=t=>{const e=Math.floor(t/2)+1,r=t%2===0?1:-1;return[r*(e*.7548776662466927%1-.5),r*(e*.5698402909980532%1-.5)]},Af=2048,Tc=8192,za=2,Va=50,Cf=1e4,If=.04,An=25,Df=4,Pf=1.2,Of=.2,Wa=.05,Nf=8,Er=ol(.53/2),Lf=Math.PI*(3-Math.sqrt(5)),Ff=300,Bf=(t,e)=>{if(t.length===0)return null;e.updateMatrixWorld(!0);const r=t.map(h=>h.clone().applyMatrix4(e.matrixWorldInverse)),i=Math.min(...r.map(({x:h})=>h)),n=Math.max(...r.map(({x:h})=>h)),a=Math.min(...r.map(({y:h})=>h)),s=Math.max(...r.map(({y:h})=>h)),o=r.map(({z:h})=>-h),c=Math.max(0,Math.min(...o)),l=Math.max(c+.01,Math.max(...o)),u=(i+n)/2,d=(a+s)/2,p=Math.max((n-i)/2,za/2),m=Math.max((s-a)/2,za/2);return{left:u-p,right:u+p,bottom:d-m,top:d+m,near:c,far:l}},Uf=(t,e=Tc)=>t>=16?e:Math.min(e,Af*Math.sqrt(t));class bc{constructor(e){this.hostScene=e,this.lights=Array.from({length:1},()=>{const r=new al(16777215,0);return r.name="shadow-simulation-sun",r.visible=!1,r.castShadow=!1,r.shadow.camera.name="shadow-simulation-shadow-camera",r.shadow.autoUpdate=!1,r.shadow.radius=0,r.shadow.bias=0,r.shadow.normalBias=Wa,e.add(r,r.target),r})}lights;softSun=!1;lastSoftFit=null;maxShadowMapSize=Tc;mapAllocation=null;disposed=!1;setMaxShadowMapSize(e){if(!Number.isFinite(e)||e<=0)return;const r=Math.max(256,Math.floor(e));this.disposed||this.maxShadowMapSize===r||(this.maxShadowMapSize=r)}setSoftSun(e){this.disposed||this.softSun===e||(e||this.restoreSunDiscCenter(),this.softSun=e,e||(this.lastSoftFit=null))}applySunDiscSample(e,r,i=!0){if(this.disposed)return;const n=this.lastSoftFit;if(!n)return;const a=Math.max(1,Math.floor(r)),s=(Math.floor(e)%a+a)%a,o=Er*Math.sqrt((s+.5)/a),c=s*Lf,l=Math.cos(c)*o,u=Math.sin(c)*o,d=n.tangentA.clone().multiplyScalar(l).addScaledVector(n.tangentB,u).normalize(),p=n.directionToSun.clone().multiplyScalar(Math.cos(o)).addScaledVector(d,Math.sin(o)).normalize(),m=this.lights[0],[h,g]=i&&a>1?Ef(s):[0,0],v=m.shadow.camera,y=n.rasterBounds,T=h*(y.right-y.left)/m.shadow.mapSize.x,b=g*(y.top-y.bottom)/m.shadow.mapSize.y;v.left=y.left+T,v.right=y.right+T,v.bottom=y.bottom+b,v.top=y.top+b,v.updateProjectionMatrix(),m.position.copy(p).multiplyScalar(n.lightDistance).add(n.anchorPosition),m.updateMatrixWorld(!0),m.target.updateMatrixWorld(!0),m.shadow.updateMatrices(m),m.shadow.needsUpdate=!0}restoreSunDiscCenter(){if(this.disposed||!this.lastSoftFit)return;const e=this.lastSoftFit,r=this.lights[0],i=r.shadow.camera;i.left=e.rasterBounds.left,i.right=e.rasterBounds.right,i.bottom=e.rasterBounds.bottom,i.top=e.rasterBounds.top,i.updateProjectionMatrix(),r.position.copy(e.directionToSun).multiplyScalar(e.lightDistance).add(e.anchorPosition),r.updateMatrixWorld(!0),r.target.updateMatrixWorld(!0),r.shadow.updateMatrices(r),r.shadow.needsUpdate=!0}invalidate(){this.lights[0].shadow.needsUpdate=!0}update({receiverWorldPoints:e,receiverAnchorWorldPosition:r,minimumElevationMeters:i,maximumElevationMeters:n,directionToSun:a,color:s,intensity:o,shadowIntensity:c,quality:l,groundTexelFit:u=!0,stabilizeMapSize:d=!1,mapTexelBudget:p,groundTexelTargetMeters:m,maxReceiverBiasMeters:h}){var Y,Be;if(this.disposed)return null;if(e.length===0){for(const w of this.lights)w.visible=!1,w.castShadow=!1,w.intensity=0,w.shadow.needsUpdate=!1;return null}const g=a.clone().normalize(),v=Math.max(0,n-i),y=Math.max(If,g.y),T=ze((v+Ff)/y+Va,Va,Cf),b=T+v+An,I=Uf(l,this.maxShadowMapSize),A=bf(p,Math.floor(I)**2,this.maxShadowMapSize),R=Math.floor(Math.sqrt(A)),F=new Ve(s),P=r.clone(),U=e.reduce((w,ir)=>Math.max(w,ir.distanceTo(r)),0),O=U+b,W=this.lights[0];W.position.copy(g).multiplyScalar(O).add(P),W.target.position.copy(P),W.updateMatrixWorld(!0),W.target.updateMatrixWorld(!0),W.shadow.updateMatrices(W);const te=Bf(e,W.shadow.camera);if(!te)return null;const B=Rf(U,g.y,this.softSun?Er:0),C=this.softSun?Math.max(Math.tan(Er)*O,B.planarMeters):0,k=Mf(te,{mapSize:R,mapTexelBudget:A,maxMapSize:this.maxShadowMapSize,elevationSine:g.y,sunDiscGuardMeters:C,groundTexelFit:u,groundTexelTargetMeters:m,mapDimensions:d&&((Y=this.mapAllocation)==null?void 0:Y.texelBudget)===A&&this.mapAllocation.maxMapSize===this.maxShadowMapSize&&this.mapAllocation.groundTexelFit===u?this.mapAllocation:void 0});this.mapAllocation={width:k.mapWidth,height:k.mapHeight,texelBudget:A,maxMapSize:this.maxShadowMapSize,groundTexelFit:u};const j=Math.max(k.metersPerTexelX,k.metersPerTexelY),ae=Math.max(k.guardMetersX,k.guardMetersY),Q={left:k.left,right:k.right,bottom:k.bottom,top:k.top,near:Math.max(.01,te.near-B.depthMeters-T-v-An),far:Math.max(1,te.far+B.depthMeters+v+An)};Q.far=Math.max(Q.near+1,Q.far);const ue=ze(j*Pf/Math.max(Of,g.y),Wa,Nf),xe=-ze(j*Df/Math.max(Q.far-Q.near,1),Number.EPSILON,.01),We=new x;Math.abs(g.y)>.99?We.set(1,0,0):We.crossVectors(new x(0,1,0),g).normalize();const N=new x().crossVectors(g,We),H=this.lights[0];H.visible=!0,H.castShadow=!0,H.intensity=o,H.color.copy(F),H.shadow.intensity=ze(c,0,1),H.shadow.needsUpdate=!0,(H.shadow.mapSize.x!==k.mapWidth||H.shadow.mapSize.y!==k.mapHeight)&&((Be=H.shadow.map)==null||Be.dispose(),H.shadow.map=null,H.shadow.mapSize.set(k.mapWidth,k.mapHeight)),H.position.copy(g).multiplyScalar(O).add(P),H.target.position.copy(P);const fe=h!==void 0&&Number.isFinite(h)?Math.max(0,h):1/0;H.shadow.bias=Math.max(xe,-fe/(Q.far-Q.near)),H.shadow.normalBias=Math.min(ue,fe);const Se=H.shadow.camera;Se.left=Q.left,Se.right=Q.right,Se.bottom=Q.bottom,Se.top=Q.top,Se.near=Q.near,Se.far=Q.far,Se.updateProjectionMatrix(),H.updateMatrixWorld(!0),H.target.updateMatrixWorld(!0),H.shadow.updateMatrices(H),this.lastSoftFit=this.softSun?{directionToSun:g.clone(),tangentA:We,tangentB:N,anchorPosition:P.clone(),lightDistance:O,rasterBounds:Q}:null;const Me=W.shadow.camera;return{sampleCount:1,totalShadowTexels:k.mapWidth*k.mapHeight,mapTexelBudget:m===void 0?A:void 0,casterReachMeters:T,camera:{receiverPointCount:e.length,receiverLeftMeters:te.left,receiverRightMeters:te.right,receiverBottomMeters:te.bottom,receiverTopMeters:te.top,leftMeters:Me.left,rightMeters:Me.right,bottomMeters:Me.bottom,topMeters:Me.top,nearMeters:Me.near,farMeters:Me.far,shadowMapWidth:k.mapWidth,shadowMapHeight:k.mapHeight,viewMatrixElements:[...Me.matrixWorldInverse.elements],projectionMatrixElements:[...Me.projectionMatrix.elements],guardMeters:ae,metersPerTexel:j,metersPerTexelX:k.metersPerTexelX,metersPerTexelY:k.metersPerTexelY,groundTexelWidthMeters:k.groundTexelWidthMeters,groundTexelHeightMeters:k.groundTexelHeightMeters,groundTexelFitLimited:k.groundTexelFitLimited,groundTexelFit:u,groundTexelTargetMeters:m}}}dispose(){var e;if(!this.disposed){this.disposed=!0;for(const r of this.lights)(e=r.shadow.map)==null||e.dispose(),this.hostScene.remove(r.target,r)}}}const kf=`
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
`,Ga="float getShadow( sampler2DShadow shadowMap,",Cn="#elif defined( SHADOWMAP_TYPE_VSM )",Hf=()=>{const t=Hn.shadowmap_pars_fragment;if(!t.includes(Ga)||!t.includes(Cn))throw new Error("Three PCF shader changed; validate receiver-plane shadow integration");return`uniform bool carmaReceiverPlaneShadow;
${t.replace(Ga,"float carmaOriginalGetShadow( sampler2DShadow shadowMap,").replace(Cn,`${kf}
${Cn}`)}`},ja=new WeakMap,zf=(t,e)=>{const r=ja.get(t);if(r)return e!==void 0&&r.value!==e&&(r.value=e,t.needsUpdate=!0),r;const i={value:e??!1},n=t.onBeforeCompile,a=t.customProgramCacheKey(),s=Hf();return t.onBeforeCompile=function(o,c){n.call(this,o,c),o.uniforms.carmaReceiverPlaneShadow=i,o.fragmentShader=o.fragmentShader.replace("#include <shadowmap_pars_fragment>",s)},t.customProgramCacheKey=()=>`${a}|carma-receiver-plane-pcf-v3|${i.value?"mesh":"stock"}`,t.needsUpdate=!0,ja.set(t,i),i},Ya=new WeakMap,$a=(t,e,r,i,n="shadow-and-color")=>{const a=()=>r.render(t,i);if(e===void 0)return a(),!0;const s=t.getObjectById(e);if(!s)return!1;let o=Ya.get(s);if(!o){const l=new Set;s.traverse(u=>l.add(u)),Ya.set(s,l),o=l}if(n==="color-only"){const l=new Set;for(let d=s.parent;d;d=d.parent)l.add(d);const u=[];t.traverse(d=>{d.isMesh&&d.visible&&!o.has(d)&&!l.has(d)&&(u.push(d),d.visible=!1)});try{return a(),!0}finally{for(const d of u)d.visible=!0}}const c=r.renderBufferDirect;r.renderBufferDirect=function(...l){const[u,,,,d]=l;u===i&&d.isMesh&&!o.has(d)||c.apply(this,l)};try{return a(),!0}finally{r.renderBufferDirect=c}},At=t=>{var e;(e=t.depthTexture)==null||e.dispose(),t.dispose()},Ot=(t,e)=>t*e*8;class Vf{entries=new Map;retainedBytes=0;capacityBytes=0;activeVariantIds=null;hits=0;misses=0;get bytes(){return this.retainedBytes}get count(){return this.entries.size}get availableBytes(){return Math.max(0,this.capacityBytes-this.retainedBytes)}has(e){return this.entries.has(e)}setActiveVariants(e){this.activeVariantIds=e}setBudget(e,r){this.capacityBytes=Math.max(0,e-r),this.evictInactive(0);for(const i of this.entries.keys()){if(this.retainedBytes<=this.capacityBytes)break;this.remove(i)}}get(e){const r=this.entries.get(e);return r?this.hits+=1:this.misses+=1,r==null?void 0:r.target}admit(e,r,i,n=r,a={}){var o;if(this.entries.has(e))return!1;const s=Ot(i.width,i.height);return s>this.capacityBytes||(a.evictInactive!==!1&&((o=this.activeVariantIds)!=null&&o.has(n))&&this.evictInactive(s),this.retainedBytes+s>this.capacityBytes)?!1:(this.entries.set(e,{pageId:r,variantId:n,target:i,bytes:s}),this.retainedBytes+=s,!0)}invalidate(e){for(const[r,i]of this.entries)i.pageId===e&&this.remove(r)}clear(){for(const e of this.entries.keys())this.remove(e)}evictInactive(e){if(this.activeVariantIds)for(const[r,i]of this.entries){if(this.retainedBytes+e<=this.capacityBytes)break;this.activeVariantIds.has(i.variantId)||this.remove(r)}}remove(e){const r=this.entries.get(e);r&&(this.entries.delete(e),this.retainedBytes-=r.bytes,At(r.target))}}const Wf=16,In=4;class Gf{constructor(e,r,i,n=4096){if(this.scene=e,this.renderer=r,this.memoryBudgetBytes=i,!Number.isFinite(i)||!(i>=Ot(64,64)))throw new RangeError("Shadow page budget must fit at least one 64-square page");if(!Number.isFinite(n)||n<64)throw new RangeError("Maximum shadow page size must be finite and at least 64");if(r.shadowMap.type!==dn)throw new Error("Tiled shadow reference requires the shared PCF shadow path");this.maxMapSize=Math.max(64,2**Math.floor(Math.log2(Math.min(n,r.capabilities.maxTextureSize,Math.sqrt(i/8)))))}pages=new Map;activePageIds=new Set;activeSamples=1;prewarmPageIds=new Set;prewarmSamples=1;prewarmRevision=0;prewarmSink=null;prewarmCamera=new cl([]);cache=new Vf;scratchBytes=0;depthRenders=0;colorPasses=0;disposed=!1;streamedTarget=null;maxMapSize;setView(e,r,i,n,a,s){if(this.disposed)return;if(this.clearPrewarmView(),![a.directionToSun.x,a.directionToSun.y,a.directionToSun.z].every(Number.isFinite)||a.directionToSun.lengthSq()===0||a.directionToSun.y<=0)throw new RangeError("Tiled shadow reference requires a finite sun direction above the horizon");const o=Mu(e,r,i,n);this.activePageIds=new Set(o.map(({id:l})=>l));for(const l of o)this.configurePage(l,a,s);const c=Math.max(32,this.activePageIds.size*2);for(const[l,u]of this.pages){if(this.pages.size<=c)break;this.activePageIds.has(l)||(this.cache.invalidate(l),u.controller.dispose(),this.pages.delete(l))}this.updateActiveVariants(),this.scratchBytes=Math.max(0,...Array.from(this.activePageIds,l=>{const u=this.pages.get(l);return Ot(u.width,u.height)})),this.streamedTarget&&Ot(this.streamedTarget.width,this.streamedTarget.height)>this.scratchBytes&&(At(this.streamedTarget),this.streamedTarget=null),this.cache.setBudget(this.memoryBudgetBytes,this.reservedBytes)}updatePresentation(e){if(this.disposed)return;e.updateMatrixWorld(!0);const r=new re().multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i=new Or().setFromProjectionMatrix(r),n=new Set;for(const[a,s]of this.pages)i.intersectsBox(s.receiverBounds)&&(s.screenBounds.copy(No(s.receiverBounds,r)),n.add(a));this.activePageIds=n,this.updateActiveVariants()}get reservedBytes(){return this.scratchBytes+(this.prewarmSink?In:0)}setPrewarmView(e,r,i,n,a,s){if(this.clearPrewarmView(),this.disposed)return;if(!Number.isSafeInteger(s)||s<1||s>4096||!(n>0&&Number.isFinite(n))||![i.x,i.y].every(l=>l>0&&Number.isFinite(l))||!a.directionToSun.toArray().every(Number.isFinite)||a.directionToSun.y<=0)throw new RangeError("Invalid shadow prewarm view");const o=new re().multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),c=new Set;for(const{id:l,bounds:u}of e){if(c.has(l)||u.isEmpty()||![...u.min.toArray(),...u.max.toArray()].every(Number.isFinite))throw new RangeError("Prewarm cells require unique IDs and finite bounds");c.add(l)}this.prewarmSamples=s;for(const l of e){if(this.prewarmPageIds.size>=Wf)break;this.activePageIds.has(l.id)||!this.pages.has(l.id)&&this.pages.size>=Math.max(32,this.activePageIds.size*2)||(this.configurePage({...l,screenBounds:new ee,groundTexelTargetMeters:Math.max(1e-9,2*n/Lo(l.bounds,o,i))},a),this.prewarmPageIds.add(l.id))}}clearPrewarmView(){this.prewarmPageIds.clear(),this.prewarmRevision+=1}get prewarmPages(){const e=[...this.prewarmPageIds].map(i=>{const n=this.pages.get(i),a=this.countPrewarmSamples(i,n);return{id:i,receiverBounds:n.receiverBounds.clone(),casterBounds:n.casterBounds.clone(),width:n.width,height:n.height,samples:this.prewarmSamples,cachedSamples:a,sampleBudget:a,limited:n.limited,canPrewarm:!1}});let r=this.cache.availableBytes-(this.prewarmSink?0:In);for(;r>0;){const i=e.filter(n=>n.sampleBudget<n.samples&&Ot(n.width,n.height)<=r).sort((n,a)=>n.sampleBudget-a.sampleBudget);if(i.length===0)break;for(const n of i){const a=Ot(n.width,n.height);a>r||(n.sampleBudget+=1,r-=a)}}return e.map(i=>({...i,canPrewarm:i.sampleBudget>i.cachedSamples}))}canPrewarm(e){return!this.disposed&&this.prewarmPages.some(r=>r.id===e&&r.canPrewarm)}countPrewarmSamples(e,r){const i=JSON.stringify([e,r.projectionKey,this.prewarmSamples]);let n=0;for(let a=0;a<this.prewarmSamples;a+=1)this.cache.has(JSON.stringify([i,a]))&&(n+=1);return n}prewarmNext(e,r,i={}){var g,v;const n=this.pages.get(r),a=!this.disposed&&this.prewarmPageIds.has(r)&&!!n,s=(y,T=!1)=>{var I;const b=a?this.countPrewarmSamples(r,n):0;return{pageId:r,rendered:y,cachedSamples:b,totalSamples:a?this.prewarmSamples:0,complete:a&&b===this.prewarmSamples,budgetLimited:T,aborted:((I=i.signal)==null?void 0:I.aborted)===!0}};if(!a||(g=i.signal)!=null&&g.aborted)return s(0);const o=this.prewarmRevision,c=n.contentRevision;if(this.renderer.shadowMap.type!==dn)throw new Error("Shadow prewarm requires the shared PCF shadow path");const l=JSON.stringify([r,n.projectionKey,this.prewarmSamples]);let u=0;for(;u<this.prewarmSamples&&this.cache.has(JSON.stringify([l,u]));)u+=1;if(u===this.prewarmSamples)return s(0);if(!this.canPrewarm(r)||Ot(n.width,n.height)+(this.prewarmSink?0:In)>this.cache.availableBytes)return s(0,!0);this.prewarmSink||(this.prewarmSink=new $e(1,1,{depthBuffer:!1}),this.cache.setBudget(this.memoryBudgetBytes,this.reservedBytes));const p=n.controller.lights[0];this.prewarmSamples===1?n.controller.restoreSunDiscCenter():n.controller.applySunDiscSample(u,this.prewarmSamples),p.shadow.map=null,p.shadow.needsUpdate=!0;const m=p.visible;p.visible=!0,this.prewarmCamera.layers.mask=e.layers.mask,this.prewarmCamera.matrixAutoUpdate=!1,this.prewarmCamera.matrixWorldAutoUpdate=!1,this.prewarmCamera.matrixWorld.copy(e.matrixWorld),this.prewarmCamera.matrixWorldInverse.copy(e.matrixWorldInverse),this.prewarmCamera.projectionMatrix.copy(e.projectionMatrix);let h=0;try{this.renderPrewarmDepth(p);const y=p.shadow.map;y&&(h=1,this.depthRenders+=1,((v=i.signal)!=null&&v.aborted||o!==this.prewarmRevision||c!==n.contentRevision||!this.prewarmPageIds.has(r)||!this.cache.admit(JSON.stringify([l,u]),r,y,l,{evictInactive:!1}))&&At(y))}catch(y){throw p.shadow.map&&At(p.shadow.map),y}finally{p.visible=m,p.shadow.map=null}return s(h)}renderPrewarmDepth(e){const{renderer:r,scene:i}=this,n=r.getContext(),a=r.getRenderTarget(),s=r.getActiveCubeFace(),o=r.getActiveMipmapLevel(),c=r.getViewport(new ee),l=r.getScissor(new ee),u=r.getScissorTest(),d=n.getParameter(n.DRAW_FRAMEBUFFER_BINDING),p=n.getParameter(n.READ_FRAMEBUFFER_BINDING),m=new ee().fromArray(n.getParameter(n.VIEWPORT)),h=new ee().fromArray(n.getParameter(n.SCISSOR_BOX)),g=n.isEnabled(n.SCISSOR_TEST),v=n.isEnabled(n.DEPTH_TEST),y=n.getParameter(n.DEPTH_RANGE),T=n.getParameter(n.DEPTH_WRITEMASK),b=n.getParameter(n.DEPTH_FUNC),I=n.getParameter(n.DEPTH_CLEAR_VALUE),A=n.getParameter(n.COLOR_CLEAR_VALUE),R=n.getParameter(n.COLOR_WRITEMASK),F=r.clippingPlanes,P=r.autoClear,U=i.background,O=r.xr.enabled,W=r.shadowMap.enabled,te=r.shadowMap.autoUpdate,B=r.shadowMap.needsUpdate,C=[];i.traverse(k=>{const j=k;j.isLight&&j.castShadow&&j!==e&&C.push(j)});try{r.resetState(),r.autoClear=!1,r.xr.enabled=!1,r.shadowMap.enabled=!0,r.shadowMap.autoUpdate=!0;for(const k of C)k.castShadow=!1;i.background=null,r.clippingPlanes=F,r.setRenderTarget(this.prewarmSink),n.depthRange(0,1),r.render(i,this.prewarmCamera)}finally{r.clippingPlanes=F,r.autoClear=P,r.xr.enabled=O,r.shadowMap.enabled=W,r.shadowMap.autoUpdate=te,r.shadowMap.needsUpdate=B;for(const k of C)k.castShadow=!0;i.background=U,r.resetState(),r.setRenderTarget(a,s,o),r.setViewport(c),r.setScissor(l),r.setScissorTest(u),r.state.bindFramebuffer(n.DRAW_FRAMEBUFFER,d),r.state.bindFramebuffer(n.READ_FRAMEBUFFER,p),r.state.viewport(m),r.state.scissor(h),r.state.setScissorTest(g),v?r.state.enable(n.DEPTH_TEST):r.state.disable(n.DEPTH_TEST),n.depthRange(y[0],y[1]),n.depthMask(T),n.depthFunc(b),n.clearDepth(I),n.clearColor(A[0],A[1],A[2],A[3]),n.colorMask(R[0],R[1],R[2],R[3])}}configurePage(e,r,i){let n=this.pages.get(e.id);if(!n){const u=new bc(this.scene);u.setMaxShadowMapSize(this.maxMapSize),u.setSoftSun(!0),n={controller:u,projectionKey:"",lightingKey:"",presentationKey:"",corridor:new Fe,planes:[],width:0,height:0,limited:!1,screenBounds:e.screenBounds,receiverBounds:e.bounds.clone(),groundTexelTargetMeters:e.groundTexelTargetMeters,casterBounds:new Fe,contentRevision:0,casterRevision:null}}this.pages.delete(e.id),this.pages.set(e.id,n);const a=n.controller.update({...r,maxReceiverBiasMeters:i?i(e.bounds,e.groundTexelTargetMeters):r.maxReceiverBiasMeters,receiverWorldPoints:Fr(e.bounds),receiverAnchorWorldPosition:e.bounds.getCenter(new x),minimumElevationMeters:e.bounds.min.y,maximumElevationMeters:e.bounds.max.y,quality:4,groundTexelFit:!0,groundTexelTargetMeters:e.groundTexelTargetMeters});if(!a)return;const s=n.controller.lights[0];s.visible=!1;const o=a.camera,c=e.receiverObjectId===void 0?"spatial-partition-v1":"native-object-v1",l=JSON.stringify([c,o.viewMatrixElements,o.projectionMatrixElements,o.shadowMapWidth,o.shadowMapHeight,s.shadow.bias,s.shadow.normalBias,e.bounds.min,e.bounds.max]);n.projectionKey=l,n.lightingKey=JSON.stringify([r.directionToSun,r.shadowIntensity,e.bounds.min,e.bounds.max]),n.presentationKey=JSON.stringify([c,r.directionToSun,r.shadowIntensity,e.bounds.min.x,e.bounds.min.z,e.bounds.max.x,e.bounds.max.z]),n.receiverBounds.copy(e.bounds),n.receiverObjectId=e.receiverObjectId,n.groundTexelTargetMeters=e.groundTexelTargetMeters,n.screenBounds=e.screenBounds,n.width=o.shadowMapWidth,n.height=o.shadowMapHeight,n.limited=(o.groundTexelWidthMeters??1/0)>e.groundTexelTargetMeters*1.001||(o.groundTexelHeightMeters??1/0)>e.groundTexelTargetMeters*1.001,n.casterBounds.copy(Ru(e.bounds,r.directionToSun,a.casterReachMeters+e.bounds.getSize(new x).length(),Er,o.guardMeters)),n.corridor.union(n.casterBounds),n.planes=[new lt(new x(1,0,0),-e.bounds.min.x),new lt(new x(-1,0,0),e.bounds.max.x),new lt(new x(0,0,1),-e.bounds.min.z),new lt(new x(0,0,-1),e.bounds.max.z)]}invalidateCasters(e){const r=e instanceof Fe?[e]:e,i=[];for(const[n,a]of this.pages)r.some(s=>a.corridor.intersectsBox(s))&&(a.contentRevision+=1,this.cache.invalidate(n),i.push(n));return i}setCasterRevision(e,r){const i=this.pages.get(e);return!i||r===null||i.casterRevision===r?!1:(i.casterRevision=r,i.contentRevision+=1,this.cache.invalidate(e),!0)}renderSample(e,r,i){this.renderSamples(e,this.activePageIds,r,i)}renderPageSample(e,r,i,n,a){return this.disposed||!this.activePageIds.has(r)?!1:this.renderSamples(e,[r],i,n,a)>0}renderPageColor(e,r){const i=this.pages.get(r);if(this.disposed||!i||!this.activePageIds.has(r))return!1;const{renderer:n,scene:a}=this,s=n.clippingPlanes,o=n.autoClear,c=a.background,l=n.shadowMap.autoUpdate,u=n.shadowMap.needsUpdate;n.autoClear=!1,n.shadowMap.autoUpdate=!1,n.shadowMap.needsUpdate=!1,n.clippingPlanes=[...s,...i.planes],a.background=null;try{const d=$a(a,i.receiverObjectId,n,e,"color-only");return d&&(this.colorPasses+=1),d}finally{n.clippingPlanes=s,n.autoClear=o,n.shadowMap.autoUpdate=l,n.shadowMap.needsUpdate=u,a.background=c}}get accumulationPages(){return[...this.activePageIds].map(e=>{const r=this.pages.get(e),i=r.controller.lights[0];return{id:e,receiverObjectId:r.receiverObjectId,contentKey:JSON.stringify([r.lightingKey,r.contentRevision]),casterRevision:r.casterRevision,presentationKey:r.presentationKey,revision:JSON.stringify([r.projectionKey,r.contentRevision,i.color.toArray(),i.intensity,i.shadow.intensity]),screenBounds:r.screenBounds.clone(),receiverBounds:r.receiverBounds.clone(),groundTexelTargetMeters:r.groundTexelTargetMeters}})}areCastersReady(e,r){const i=this.pages.get(e);return!!(i&&r(i.casterBounds))}getPageGeometry(e){const r=this.pages.get(e);return r?{casterBounds:r.casterBounds.clone(),receiverBounds:r.receiverBounds.clone(),width:r.width,height:r.height,projectionKey:r.projectionKey}:null}get supportsOpaqueAccumulation(){let e=!0;return this.scene.traverseVisible(r=>{const i=r;if(!(!i.isMesh||!i.receiveShadow))for(const n of Array.isArray(i.material)?i.material:[i.material])n.visible&&(n.transparent||!n.depthWrite||!n.depthTest)&&(e=!1)}),e}renderSamples(e,r,i,n,a){if(this.disposed)return 0;if(this.renderer.shadowMap.type!==dn)throw new Error("Shadow page cache must be recreated after changing the depth/filter format");if(!Number.isInteger(n)||n<1||!Number.isInteger(i)||i<0||i>=n)throw new RangeError("Shadow sample must lie within its finite-disc sequence");n!==this.activeSamples&&(this.activeSamples=n,this.updateActiveVariants());const{renderer:s,scene:o}=this,c=s.clippingPlanes,l=s.autoClear,u=o.background,d=s.getRenderTarget(),p=d==null?void 0:d.scissor.clone(),m=d==null?void 0:d.scissorTest;let h=0;s.autoClear=!1,o.background=null;try{for(const g of r){const v=this.pages.get(g),y=v.controller.lights[0];n===1?v.controller.restoreSunDiscCenter():v.controller.applySunDiscSample(i,n);const T=JSON.stringify([g,v.projectionKey,n]),b=JSON.stringify([T,i]),I=this.cache.get(b);if(!I&&this.streamedTarget&&(this.streamedTarget.width!==v.width||this.streamedTarget.height!==v.height)&&(At(this.streamedTarget),this.streamedTarget=null),y.shadow.map=I??this.streamedTarget,I||(this.streamedTarget=null),y.shadow.needsUpdate=!I,y.visible=!0,s.clippingPlanes=[...c,...v.planes],d){const{x:A,y:R,z:F,w:P}=a??v.screenBounds,U=Math.floor(A*d.width),O=Math.floor(R*d.height);d.scissor.set(U,O,Math.ceil((A+F)*d.width)-U,Math.ceil((R+P)*d.height)-O),d.scissorTest=!0,s.setRenderTarget(d)}try{if($a(o,v.receiverObjectId,s,e)&&(this.colorPasses+=1,h+=1),!I&&y.shadow.map){this.depthRenders+=1;const R=y.shadow.map;this.cache.admit(b,g,R,T)||(this.streamedTarget=R)}}catch(A){throw!I&&y.shadow.map&&At(y.shadow.map),A}finally{y.visible=!1,y.shadow.map=null}}}finally{s.clippingPlanes=c,s.autoClear=l,o.background=u,d&&p&&(d.scissor.copy(p),d.scissorTest=m??!1,s.setRenderTarget(d))}return h}get stats(){const e=[...this.activePageIds].map(r=>this.pages.get(r));return{pages:e.length,cachedSamplePages:this.cache.count,cacheBytes:this.cache.bytes,scratchBytes:this.reservedBytes,hits:this.cache.hits,misses:this.cache.misses,depthRenders:this.depthRenders,colorPasses:this.colorPasses,limitedPages:e.filter(r=>r.limited).length,dimensions:e.map(r=>`${r.width}×${r.height}`)}}clearCache(){this.cache.clear();for(const e of this.pages.values())e.contentRevision+=1}updateActiveVariants(){this.cache.setActiveVariants(new Set([...this.activePageIds].flatMap(e=>[...new Set([1,this.activeSamples])].map(r=>JSON.stringify([e,this.pages.get(e).projectionKey,r])))))}get pageLevels(){return[...this.activePageIds].map(e=>{const r=this.pages.get(e);return{id:e,level:Math.max(0,Math.round(Math.log2(this.maxMapSize/Math.max(r.width,r.height)))),width:r.width,height:r.height}})}dispose(){var e;if(!this.disposed){this.disposed=!0,this.cache.clear(),this.streamedTarget&&At(this.streamedTarget),this.streamedTarget=null,(e=this.prewarmSink)==null||e.dispose(),this.prewarmSink=null,this.clearPrewarmView(),this.scratchBytes=0;for(const r of this.pages.values())r.controller.dispose();this.pages.clear(),this.activePageIds.clear()}}}const jf=async({pages:t,signal:e,prepare:r,render:i,yieldToInput:n})=>{let a=0,s=0,o=0,c=!1;try{for(const l of t){if(e.aborted)break;if(l.cachedSamples>=l.samples){a+=1;continue}if(!l.canPrewarm){c=!0;continue}if(await n(e),e.aborted)break;const u=await r(l,e);try{if(e.aborted)break;if(!u.covered||!u.isCurrent()){s+=1;continue}const d=Math.min(l.samples,l.sampleBudget);d<l.samples&&(c=!0);for(let p=l.cachedSamples;p<d&&(await n(e),!(e.aborted||!u.isCurrent()));p+=1){const m=i(l.id,u.group,e);if(o+=m.rendered,m.complete){a+=1;break}if(m.budgetLimited){c=!0;break}if(m.aborted||!m.rendered)break}}finally{u.dispose()}}}catch(l){if(!e.aborted)throw l}return{offered:t.length,completed:a,skippedCoverage:s,renderedSamples:o,budgetLimited:c,aborted:e.aborted}},Yf=t=>{const e=globalThis.scheduler;return e!=null&&e.postTask?e.postTask(()=>{},{priority:"background",delay:0,signal:t}):Promise.reject(new Error("Background scheduler unavailable"))},$f=({getRequest:t})=>{let e=!1,r=null,i=null,n=!1;const a=()=>{n=!1,i==null||i.abort()},s=()=>{if(!e){if(i){n=!0;return}try{const o=globalThis.scheduler;if(typeof(o==null?void 0:o.postTask)!="function")return;const c=t();if(!c||c.key===r)return;r=c.key;const l=new AbortController;i=l;let u=!1;const d=()=>{if(i!==l||u)return;i=null;const p=n;n=!1,p&&s()};try{o.postTask(async()=>{if(e||l.signal.aborted)return;const p=t();if(!(!p||p.key!==c.key)){u=!0;try{await p.run(l.signal)}finally{u=!1,d()}}},{priority:"background",delay:150,signal:l.signal}).then(d,d)}catch{d()}}catch{}}};return{onSettled:s,cancel:a,dispose(){e=!0,a()}}},Mc=(t,e,r)=>JSON.stringify([t.matrixWorldInverse.elements,t.projectionMatrix.elements,e,r]),Kf=(t,e)=>{if(!Number.isFinite(e)||e<t.length*8)throw new RangeError("Capture budget must fit at least one scalar/depth pixel per page");const r=[...t].sort((n,a)=>n.id<a.id?-1:n.id>a.id?1:0).map(({id:n,plan:a,screenArea:s})=>({id:n,plan:a,width:a.width,height:a.height,weight:2**Math.floor(Math.log2(Math.max(1/65536,Math.min(1,s))))}));let i=r.reduce((n,a)=>n+a.width*a.height,0);for(;i*8>e;){let n;for(const s of r)s.width===1&&s.height===1||(!n||s.width*s.height/s.weight>n.width*n.height/n.weight)&&(n=s);if(!n)break;const a=n.width*n.height;n.width>=n.height&&n.width>1?n.width/=2:n.height/=2,i-=a-n.width*n.height}return new Map(r.map(({id:n,plan:a,width:s,height:o})=>[n,s===a.width&&o===a.height?a:{...a,width:s,height:o,limited:!0,key:Mc(a.camera,s,o)}]))},qf=(t,e,r)=>{const{groundTexelTargetMeters:i,maximumDimension:n,maximumPixels:a}=r;if(t.isEmpty()||![...t.min.toArray(),...t.max.toArray(),...e.toArray()].every(Number.isFinite)||!(i>0&&Number.isFinite(i))||!(n>=1&&Number.isFinite(n))||!(a>=1&&Number.isFinite(a)))throw new RangeError("Receiver capture requires finite bounds and positive allocation limits");const s=t.getCenter(new x),o=t.getSize(new x).length()*.5,c=Math.max(.001,o*.001),l=new as;l.quaternion.copy(e).normalize(),l.position.copy(s).add(new x(0,0,o+c+1).applyQuaternion(l.quaternion)),l.updateMatrixWorld(!0);const u=new Fe().setFromPoints(Fr(t).map(y=>y.applyMatrix4(l.matrixWorldInverse)));l.left=u.min.x-c,l.right=u.max.x+c,l.bottom=u.min.y-c,l.top=u.max.y+c,l.near=Math.max(.001,-u.max.z-c),l.far=Math.max(l.near+.001,-u.min.z+c),l.updateProjectionMatrix();const d=y=>2**Math.ceil(Math.log2(Math.max(1,y/i))),p=d(l.right-l.left),m=d(l.top-l.bottom),h=2**Math.floor(Math.log2(n));let g=Math.min(p,h),v=Math.min(m,h);for(;g*v>a;)g>=v&&g>1?g/=2:v/=2;return{camera:l,width:g,height:v,limited:g<p||v<m,key:Mc(l,g,v)}},Xf=t=>new ll().setFromRotationMatrix(new re().extractRotation(t.matrixWorld)),bi={namespace:"shadow-corridor-visibility",schema:"visibility-depth-world-basis-v1",maximumPayloadBytes:32*1024**2,maximumRecordBytes:33*1024**2,maximumIdentityCharacters:65536},oi={read:"read",write:"write",writePacked:"write-packed"},Ye=t=>{if(!t||!Number.isInteger(t.samples)||t.samples<1||t.samples>4096)return null;const e=[t.source,t.dateTime,t.corridor,t.resolution,t.geometryFingerprint];return e.some(r=>typeof r!="string"||r.length===0)||e.reduce((r,i)=>r+i.length,0)>bi.maximumIdentityCharacters?null:JSON.stringify([bi.schema,...e,t.samples])},Dn=(t,e)=>Array.isArray(t)&&t.length===e&&t.every(Number.isFinite),Rc=t=>{if(!t||typeof t!="object")return!1;const e=t,r=e.width*e.height;return Number.isSafeInteger(e.width)&&e.width>0&&Number.isSafeInteger(e.height)&&e.height>0&&Number.isSafeInteger(r)&&r*8<=bi.maximumPayloadBytes&&Dn(e.captureMatrix,16)&&Dn(e.worldBasis,16)&&Dn(e.crop,4)&&e.crop[0]>=0&&e.crop[1]>=0&&e.crop[2]>0&&e.crop[3]>0&&e.crop[0]+e.crop[2]<=1.000001&&e.crop[1]+e.crop[3]<=1.000001},Ka=t=>{if(!Rc(t))return!1;const e=t,r=e.width*e.height;return e.visibility instanceof Float32Array&&e.visibility.length===r&&e.depth instanceof Float32Array&&e.depth.length===r},Qf=t=>{if(!Rc(t))return!1;const e=t;return e.rgba instanceof Float32Array&&e.rgba.length===e.width*e.height*4},vr=64,ts=256*1024**2,Pn=ts,Zf=128*1024**2,qa=8,Xa=32*1024**2,Jf=4,yr=t=>{var e;t.target?((e=t.target.depthTexture)==null||e.dispose(),t.target.dispose()):(t.visibility.dispose(),t.depth.dispose())},ep=(t,e)=>t.elements.every((r,i)=>Number.isFinite(r)&&Math.abs(r-e.elements[i])<=1e-10*Math.max(1,Math.abs(r)));class Ec{constructor(e){this.renderer=e,this.copyQuad.frustumCulled=!1,this.copyScene.add(this.copyQuad)}captures=new Map;visiblePageIds=new Set;samples=0;replayCount=0;matchingPages=0;persistence;persistenceGeneration=0;disposed=!1;restoreAttempts=new Set;pendingRestores=new Map;restoreRequests=new Map;pendingWrites=new Map;persistenceOffers=new WeakMap;persistenceAttempted=new WeakSet;persistenceTimer=null;readbackBusy=!1;readbackBytes=0;packMaterial=new $t({uniforms:{visibility:{value:null},depth:{value:null}},vertexShader:"varying vec2 uvCopy; void main() { uvCopy = position.xy * 0.5 + 0.5; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:"uniform sampler2D visibility; uniform sampler2D depth; varying vec2 uvCopy; void main() { gl_FragColor = vec4(texture2D(visibility, uvCopy).r, texture2D(depth, uvCopy).r, 0.0, 1.0); }",depthTest:!1,depthWrite:!1,blending:ui,toneMapped:!1});materials=new Map;unsupportedMaterials=new WeakSet;captureSupported=!0;contentRevision=0;get revision(){return this.contentRevision}get supportsCapture(){return this.captureSupported}copyScene=new Ar;copyCamera=new rs;copyMaterial=new $t({uniforms:{source:{value:null},crop:{value:new ee}},vertexShader:"varying vec2 uvCopy; void main() { uvCopy = position.xy * 0.5 + 0.5; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:"uniform sampler2D source; uniform vec4 crop; varying vec2 uvCopy; void main() { gl_FragColor = vec4(texture2D(source, crop.xy + uvCopy * crop.zw).r, 0.0, 0.0, 1.0); }",depthTest:!1,depthWrite:!1,blending:ui,toneMapped:!1});copyQuad=new Pr(new is(2,2),this.copyMaterial);downsampleMaterial=new $t({uniforms:{source:{value:null},depth:{value:null},texel:{value:new It}},vertexShader:"varying vec2 uvCopy; void main() { uvCopy = position.xy * 0.5 + 0.5; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:`uniform sampler2D source; uniform sampler2D depth;
      uniform vec2 texel; varying vec2 uvCopy;
      void main() {
        vec2 d = texel * 0.25;
        float visibility = (texture2D(source, uvCopy + d).r
          + texture2D(source, uvCopy - d).r
          + texture2D(source, uvCopy + vec2(d.x, -d.y)).r
          + texture2D(source, uvCopy + vec2(-d.x, d.y)).r) * 0.25;
        gl_FragColor = vec4(visibility, 0.0, 0.0, 1.0);
        gl_FragDepth = texture2D(depth, uvCopy).r;
      }`,depthTest:!0,depthFunc:xo,depthWrite:!0,blending:ui,toneMapped:!1});uniforms={carmaCaptureVisibility:{value:!1},carmaRetainedEnabled:{value:!1},carmaRetainedColor:{value:null},carmaRetainedDepth:{value:null},carmaRetainedMatrix:{value:new re},carmaRetainedCrop:{value:new ee(0,0,1,1)},carmaRetainedCount:{value:0},carmaRetainedBounds:{value:Array.from({length:vr},()=>new ee)}};get memoryBytes(){return[...this.captures.values()].reduce((e,r)=>e+r.bytes,this.readbackBytes)}getCapturedSize(e){const r=this.captures.get(e);return r?{width:r.width,height:r.height,samples:r.samples}:null}get stats(){return{pages:this.captures.size,samples:this.samples,matchingPages:this.matchingPages,replays:this.replayCount,bytes:this.memoryBytes}}beginFrame(e=[]){this.matchingPages=0,this.visiblePageIds=new Set(e.map(r=>r.id)),this.schedulePersistence()}has(e,r){var n;const i=this.captures.get(e.id);if(!this.canReplay(e)||(i==null?void 0:i.casterRevision)!==e.casterRevision)return!1;if(i&&i.samples>1&&i.samples>=r&&e.captureSize&&e.presentationKey&&i.crop.x===0&&i.crop.y===0&&i.crop.z===1&&i.crop.w===1)return i.width>=e.captureSize.width&&i.height>=e.captureSize.height;if(i!=null&&i.restored){const a=this.restoreRequests.get(e.id),s=(n=this.persistence)==null?void 0:n.identity(e,r);if(e.ready===!1||!(a!=null&&a.expected)||!s||Ye(s)!==i.persistentKey||!ep(i.matrix,a.expected))return!1;const o=e.screenBounds,c=i.crop;if(c.x>o.x+1e-6||c.y>o.y+1e-6||c.x+c.z<o.x+o.z-1e-6||c.y+c.w<o.y+o.w-1e-6)return!1}return(i==null?void 0:i.revision)===(e.contentKey??e.revision)&&i.samples===r}hasAtLeast(e,r){const i=this.captures.get(e.id);return!!(i&&i.samples>=r&&this.has(e,i.samples))}downsample(e,r,i){var v;if(!Number.isInteger(r)||!Number.isInteger(i)||r<1||i<1)return!1;const n=this.captures.get(e.id);if(!n||!this.canReplay(e))return!1;const a=Math.max(r,Math.ceil(n.width/2)),s=Math.max(i,Math.ceil(n.height/2));if(a>n.width||s>n.height||a*s>=n.width*n.height)return!1;const o=new $e(a,s,{type:wt,format:jt,minFilter:be,magFilter:be,depthTexture:new qt(a,s,Ft),samples:0}),c=this.renderer,l=c.getRenderTarget(),u=c.getActiveCubeFace(),d=c.getActiveMipmapLevel(),p=c.getViewport(new ee),m=c.getScissor(new ee),h=c.getScissorTest(),g=c.autoClear;try{c.initRenderTarget(o),this.downsampleMaterial.uniforms.source.value=n.visibility,this.downsampleMaterial.uniforms.depth.value=n.depth,this.downsampleMaterial.uniforms.texel.value.set(1/a,1/s),this.copyQuad.material=this.downsampleMaterial,c.autoClear=!1,c.setRenderTarget(o),c.setViewport(new ee(0,0,a,s)),c.setScissorTest(!1),c.render(this.copyScene,this.copyCamera)}catch(y){throw(v=o.depthTexture)==null||v.dispose(),o.dispose(),y}finally{this.copyQuad.material=this.copyMaterial,c.setRenderTarget(l,u,d),c.setViewport(p),c.setScissor(m),c.setScissorTest(h),c.autoClear=g}return this.captures.set(e.id,{...n,target:o,visibility:o.texture,depth:o.depthTexture,width:a,height:s,bytes:a*s*8}),this.pendingWrites.delete(e.id),yr(n),this.contentRevision+=1,!0}isRestorePending(e,r){var a;const i=this.pendingRestores.get(e.id);if(!i||i.samples!==r)return!1;const n=(a=this.persistence)==null?void 0:a.identity(e,r);return!!(n&&Ye(n)===i.key)}setPersistence(e){this.persistence!==e&&(this.cancelPendingPersistence(),this.persistence=e)}cancelPendingPersistence(){var e;(e=this.persistence)==null||e.cache.cancelPending(),this.persistenceGeneration+=1,this.restoreAttempts.clear(),this.pendingRestores.clear(),this.restoreRequests.clear(),this.pendingWrites.clear(),this.persistenceOffers=new WeakMap,this.persistenceAttempted=new WeakSet,this.persistenceTimer!==null&&clearTimeout(this.persistenceTimer),this.persistenceTimer=null}beginSolarTransition(){this.cancelPendingPersistence()}canPresent(e){return this.canReplay(e)}prepareRestore(e,r,i){if(this.disposed)return;if(this.restoreRequests.set(e.id,{page:e,samples:r,expected:i==null?void 0:i.clone()}),this.restoreRequests.size>vr*2){for(const l of this.restoreRequests.keys())if(l!==e.id&&!this.visiblePageIds.has(l)){this.restoreRequests.delete(l);break}}const n=this.persistence;if(!(n!=null&&n.cache.enabled)||n.cache.busy||e.ready===!1||this.hasAtLeast(e,r))return;const a=n.identity(e,r),s=a&&Ye(a);if(!a||!s||this.restoreAttempts.has(s))return;this.restoreAttempts.add(s),this.restoreAttempts.size>vr*4&&this.restoreAttempts.delete(this.restoreAttempts.values().next().value);const o=this.persistenceGeneration,c=this.captures.get(e.id);this.pendingRestores.set(e.id,{key:s,samples:r}),n.cache.read(a).then(l=>{const u=this.restoreRequests.get(e.id),d=u&&n.identity(u.page,r);if(!l||this.disposed||this.persistenceGeneration!==o||this.persistence!==n||!u||u.page.ready===!1||!d||Ye(d)!==s||this.captures.get(e.id)!==c)return;const p=new re().fromArray(l.worldBasis),m=n.worldBasis();if(!p.elements.every(Number.isFinite)||p.determinant()===0||!m.elements.every(Number.isFinite)||m.determinant()===0)return;const h=new re().fromArray(l.captureMatrix).multiply(p.invert()).multiply(m),g=[...new Set([l.visibility.buffer,l.depth.buffer])].reduce((b,I)=>b+I.byteLength,0),v=l.width*l.height*qa+g;if(!this.admit(e.id,v))return;const y=new kn(l.visibility,l.width,l.height,jt,wt),T=new kn(l.depth,l.width,l.height,jt,wt);for(const b of[y,T])b.minFilter=be,b.magFilter=be,b.generateMipmaps=!1,b.needsUpdate=!0;c&&yr(c),this.captures.delete(e.id),this.captures.set(e.id,{target:null,visibility:y,depth:T,width:l.width,height:l.height,bytes:v,restored:!0,persistentKey:s,persistentIdentity:l.identity,revision:u.page.contentKey??u.page.revision,casterRevision:u.page.casterRevision,presentationKey:u.page.presentationKey??u.page.contentKey??u.page.revision,samples:l.identity.samples,matrix:h,crop:new ee().fromArray(l.crop)}),this.samples=l.identity.samples,this.contentRevision+=1}).catch(()=>{}).finally(()=>{var l,u;!this.disposed&&o===this.persistenceGeneration&&(((l=this.pendingRestores.get(e.id))==null?void 0:l.key)===s&&this.pendingRestores.delete(e.id),(u=n.requestRepaint)==null||u.call(n),this.schedulePersistence())})}admit(e,r,i=!1){var s;const n=i?Math.min(((s=this.captures.get(e))==null?void 0:s.bytes)??0,Zf):0,a=Pn+n;for(const[o,c]of this.captures){if(r+this.memoryBytes<=a)break;o===e||this.visiblePageIds.has(o)||(yr(c),this.captures.delete(o),this.contentRevision+=1,this.pendingWrites.delete(o))}return r+this.memoryBytes<=a}publish(e,r,i,n,a){var U;if(!this.captureSupported)return!1;const s=n.screenBounds,o=Math.max(0,Math.floor(s.x*e.width)),c=Math.max(0,Math.floor(s.y*e.height)),l=Math.min(e.width,Math.ceil((s.x+s.z)*e.width)),u=Math.min(e.height,Math.ceil((s.y+s.w)*e.height)),d=l-o,p=u-c,m=d*p*qa;if(d<=0||p<=0||m>Pn||!r.depthTexture||!this.admit(n.id,m,!0))return!1;const h=this.renderer,g=h.getRenderTarget(),v=h.getActiveCubeFace(),y=h.getActiveMipmapLevel(),T=h.getViewport(new ee),b=h.getScissor(new ee),I=h.getScissorTest(),A=h.autoClear,R=new $e(d,p,{type:wt,format:jt,minFilter:be,magFilter:be,depthTexture:new qt(d,p,Ft),samples:0});try{h.initRenderTarget(R);const O=new ul(new It(o,c),new It(l,u));this.copyMaterial.uniforms.source.value=e.texture,this.copyMaterial.uniforms.crop.value.set(o/e.width,c/e.height,d/e.width,p/e.height),h.autoClear=!1,h.setRenderTarget(R),h.setViewport(new ee(0,0,d,p)),h.setScissorTest(!1),h.render(this.copyScene,this.copyCamera),h.copyTextureToTexture(r.depthTexture,R.depthTexture,O)}catch(O){throw(U=R.depthTexture)==null||U.dispose(),R.dispose(),O}finally{h.setRenderTarget(g,v,y),h.setViewport(T),h.setScissor(b),h.setScissorTest(I),h.autoClear=A}const F=this.captures.get(n.id);F&&yr(F),this.samples=a,this.captures.delete(n.id);const P={target:R,visibility:R.texture,depth:R.depthTexture,width:d,height:p,bytes:m,restored:!1,revision:n.contentKey??n.revision,casterRevision:n.casterRevision,samples:a,presentationKey:n.presentationKey??n.contentKey??n.revision,matrix:new re().multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),crop:new ee(o/e.width,c/e.height,d/e.width,p/e.height)};return this.captures.set(n.id,P),this.contentRevision+=1,this.queuePersistence(n,P),!0}queuePersistence(e,r){const i=this.persistence;if(!(i!=null&&i.cache.enabled)||e.ready===!1||this.disposed)return;const n=i.identity(e,r.samples),a=n&&Ye(n),s=i.worldBasis();!n||n.samples!==r.samples||!a||!s.elements.every(Number.isFinite)||s.determinant()===0||r.width*r.height*16>Xa||(this.pendingWrites.delete(e.id),this.persistenceOffers.set(r,{page:e,capture:r,identity:n,key:a,worldBasis:[...s.elements]}),this.schedulePersistence())}schedulePersistence(){var e;if(!(this.disposed||this.persistenceTimer!==null||this.readbackBusy||!((e=this.persistence)!=null&&e.cache.enabled)||this.persistence.cache.busy)){for(const[r,i]of this.pendingWrites)this.captures.get(r)!==i.capture&&this.pendingWrites.delete(r);for(const r of[!0,!1])for(const[i,n]of this.captures){if(this.pendingWrites.size>=Jf)break;const a=this.persistenceOffers.get(n);this.visiblePageIds.has(i)===r&&a&&!this.persistenceAttempted.has(n)&&!this.pendingWrites.has(i)&&this.pendingWrites.set(i,a)}this.pendingWrites.size!==0&&(this.persistenceTimer=setTimeout(()=>{this.persistenceTimer=null,this.persistNextCapture()},0))}}persistNextCapture(){var h,g,v;const e=this.persistence;if(this.disposed||this.readbackBusy||!(e!=null&&e.cache.enabled)||e.cache.busy||typeof this.renderer.readRenderTargetPixelsAsync!="function")return;const r=[...this.pendingWrites.entries()].find(([y,T])=>this.captures.get(y)===T.capture);if(!r){this.pendingWrites.clear();return}const[i,n]=r,a=((h=this.restoreRequests.get(i))==null?void 0:h.page)??n.page,s=e.identity(a,n.capture.samples);if(a.ready===!1||!s||Ye(s)!==n.key){this.pendingWrites.delete(i),this.persistenceAttempted.add(n.capture),this.schedulePersistence();return}const{capture:o}=n,c=o.width*o.height*16;if(c>Xa||this.memoryBytes+c*2>Pn){this.pendingWrites.delete(i),this.persistenceAttempted.add(o),this.schedulePersistence();return}const l=this.persistenceGeneration,u={target:null,pixels:null,reading:null},d=()=>{const y=this.renderer,T=y.getRenderTarget(),b=y.getActiveCubeFace(),I=y.getActiveMipmapLevel(),A=y.getViewport(new ee),R=y.getScissor(new ee),F=y.getScissorTest(),P=y.autoClear,U=this.copyQuad.material;try{u.target=new $e(o.width,o.height,{format:Ir,type:wt,depthBuffer:!1,minFilter:be,magFilter:be}),y.initRenderTarget(u.target),u.pixels=new Float32Array(o.width*o.height*4),this.packMaterial.uniforms.visibility.value=o.visibility,this.packMaterial.uniforms.depth.value=o.depth,this.copyQuad.material=this.packMaterial,y.autoClear=!1,y.setRenderTarget(u.target),y.setViewport(new ee(0,0,o.width,o.height)),y.setScissorTest(!1),y.render(this.copyScene,this.copyCamera),u.reading=y.readRenderTargetPixelsAsync(u.target,0,0,o.width,o.height,u.pixels)}finally{this.copyQuad.material=U,y.setRenderTarget(T,b,I),y.setViewport(A),y.setScissor(R),y.setScissorTest(F),y.autoClear=P}};try{if(e.runIdleRender){if(!e.runIdleRender(d)&&!u.target)return}else d()}catch{(g=u.target)==null||g.dispose(),this.pendingWrites.delete(i),this.persistenceAttempted.add(o),this.schedulePersistence();return}if(!u.reading||!u.target||!u.pixels){(v=u.target)==null||v.dispose();return}const p=u.target,m=u.pixels;this.pendingWrites.delete(i),this.persistenceAttempted.add(o),this.readbackBusy=!0,this.readbackBytes=c*2,u.reading.then(async()=>{var b;const y=((b=this.restoreRequests.get(i))==null?void 0:b.page)??n.page,T=e.identity(y,o.samples);this.disposed||l!==this.persistenceGeneration||this.persistence!==e||y.ready===!1||!T||Ye(T)!==n.key||await e.cache.writePacked(n.identity,{width:o.width,height:o.height,rgba:m,captureMatrix:[...o.matrix.elements],crop:o.crop.toArray(),worldBasis:n.worldBasis})}).catch(()=>{}).finally(()=>{var y;p.dispose(),this.readbackBusy=!1,this.readbackBytes=0,this.disposed||((y=e.requestRepaint)==null||y.call(e),this.schedulePersistence())})}canReplay(e){var i;const r=this.captures.get(e.id);if(!r||r.presentationKey!==(e.presentationKey??e.contentKey??e.revision))return!1;if(r.restored){const n=(i=this.persistence)==null?void 0:i.identity(e,r.samples),a=r.persistentIdentity;if(e.captureSize&&a)return!!(n&&n.source===a.source&&n.dateTime===a.dateTime&&n.corridor===a.corridor&&n.geometryFingerprint===a.geometryFingerprint&&n.samples===a.samples);if(!n||Ye(n)!==r.persistentKey)return!1}return!0}activate(e){const r=this.captures.get(e.id);this.captures.delete(e.id),this.captures.set(e.id,r),this.uniforms.carmaRetainedMatrix.value.copy(r.matrix),this.uniforms.carmaRetainedCrop.value.copy(r.crop),this.uniforms.carmaRetainedColor.value=r.visibility,this.uniforms.carmaRetainedDepth.value=r.depth,this.matchingPages+=1,this.replayCount+=1,this.uniforms.carmaRetainedCount.value=1;const i=e.receiverBounds;this.uniforms.carmaRetainedBounds.value[0].set(i.min.x,i.min.z,i.max.x,i.max.z),this.uniforms.carmaRetainedEnabled.value=!0}renderNative(e,r,i){if(r.length===0)return i(),new Set;this.configureScene(e);const n=new Map(r.filter(u=>u.receiverObjectId!==void 0&&this.canPresent(u)).map(u=>[u.receiverObjectId,u])),a=[],s=new Map;e.traverseVisible(u=>{const d=u;if(!d.isMesh)return;let p;for(let m=d;m&&(p=n.get(m.id),!p);m=m.parent);a.push({mesh:d,page:p});for(const m of Array.isArray(d.material)?d.material:[d.material]){let h=s.get(m);h||s.set(m,h=new Set),h.add(p==null?void 0:p.id)}});const o=new Set;for(const u of s.values())if(!(u.size<2))for(const d of u)d!==void 0&&o.add(d);const c=new Set,l=[];for(const{mesh:u,page:d}of a){const p=u.onBeforeRender,m=d!==void 0&&!o.has(d.id);u.onBeforeRender=(...h)=>{p.call(u,...h),this.uniforms.carmaRetainedEnabled.value=!1,m&&this.activate(d)},m&&c.add(d.id),l.push(()=>{u.onBeforeRender=p})}this.uniforms.carmaRetainedEnabled.value=!1;try{return i(),c}finally{this.uniforms.carmaRetainedEnabled.value=!1;for(const u of l)u()}}render(e,r,i,n){if(!this.canPresent(r))return n();this.configureScene(e),this.activate(r);try{return n()}finally{this.uniforms.carmaRetainedEnabled.value=!1}}capture(e,r){this.captureSupported=!0,this.configureScene(e),this.uniforms.carmaCaptureVisibility.value=!0;try{return r()}finally{this.uniforms.carmaCaptureVisibility.value=!1}}configureScene(e){e.traverseVisible(r=>{const i=r;if(!(!i.isMesh||!i.receiveShadow)){if(i.isInstancedMesh||i.isSkinnedMesh){this.captureSupported=!1;return}for(const n of Array.isArray(i.material)?i.material:[i.material]){if(this.unsupportedMaterials.has(n)&&(this.captureSupported=!1),!(n.isMeshStandardMaterial||n.isMeshLambertMaterial||n.isMeshPhongMaterial)||n.transparent){this.captureSupported=!1;continue}this.materials.has(n)||this.configure(n)}}})}configure(e){const r=e.onBeforeCompile,i=e.customProgramCacheKey,n=this.uniforms,a=(l,u)=>{r.call(e,l,u);const d=/getShadow\( directionalShadowMap\[ i \][^;]+?\)/;if(!l.vertexShader.includes("#include <common>")||!l.vertexShader.includes("#include <project_vertex>")||!l.fragmentShader.includes("#include <common>")||!l.fragmentShader.includes("#include <lights_fragment_begin>")||!l.fragmentShader.includes("#include <dithering_fragment>")||!d.test(Hn.lights_fragment_begin)){this.unsupportedMaterials.add(e),this.captureSupported=!1;return}this.unsupportedMaterials.delete(e),Object.assign(l.uniforms,n),l.vertexShader=l.vertexShader.replace("#include <common>",`#include <common>
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
uniform vec4 carmaRetainedBounds[${vr}];
varying vec4 vCarmaRetainedClip;
varying vec2 vCarmaRetainedWorld;
float carmaRetainedCoverage(float fallbackCoverage) {
  vec3 ndc = vCarmaRetainedClip.xyz / vCarmaRetainedClip.w;
  vec2 uv = ndc.xy * 0.5 + 0.5;
  uv = (uv - carmaRetainedCrop.xy) / carmaRetainedCrop.zw;
  if (!carmaRetainedEnabled || carmaCaptureVisibility || vCarmaRetainedClip.w <= 0.0) return fallbackCoverage;
  bool owned = false;
  for (int i = 0; i < ${vr}; i++) {
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
`);const p=Hn.lights_fragment_begin.replace(d,m=>`(carmaCapturedCoverage = ${m}, carmaRetainedCoverage(carmaCapturedCoverage))`);l.fragmentShader=l.fragmentShader.replace("#include <lights_fragment_begin>",`float carmaCapturedCoverage = 1.0;
${p}`).replace("#include <dithering_fragment>",`#include <dithering_fragment>
if (carmaCaptureVisibility) gl_FragColor.rgb = vec3(carmaCapturedCoverage);`)},s=()=>`${i.call(e)}|retained-corridor-visibility-v4`;e.onBeforeCompile=a,e.customProgramCacheKey=s,e.needsUpdate=!0;const o=()=>{e.onBeforeCompile===a&&(e.onBeforeCompile=r),e.customProgramCacheKey===s&&(e.customProgramCacheKey=i),e.removeEventListener("dispose",c),e.needsUpdate=!0},c=()=>{o(),this.materials.delete(e)};e.addEventListener("dispose",c),this.materials.set(e,o)}dispose(){this.disposed=!0,this.setPersistence(void 0);for(const e of this.captures.values())yr(e);this.captures.clear(),this.uniforms.carmaRetainedEnabled.value=!1,this.uniforms.carmaRetainedColor.value=null,this.uniforms.carmaRetainedDepth.value=null,this.copyQuad.geometry.dispose(),this.copyMaterial.dispose(),this.downsampleMaterial.dispose(),this.packMaterial.dispose();for(const e of this.materials.values())e();this.materials.clear()}}const Nt=64,hi=512*1024**2,Je={inactive:"inactive",dimensions:"dimensions",budget:"budget",msaa:"msaa",format:"format",receivers:"receivers",pages:"pages",renderer:"renderer",disposed:"disposed"},Qa=`
  out vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`,tp=`
  layout(location = 0) out highp vec4 outColor;
  in vec2 vUv;
  uniform sampler2D tPrevious;
  uniform sampler2D tReference;
  uniform sampler2D tReferenceDepth;
  uniform sampler2D tSample;
  uniform sampler2D tSampleDepth;
  uniform mat4 uInverseViewProjection;
  uniform vec4 uBounds[${Nt}];
  uniform int uBoundsCount;
  uniform bool uRefresh;
  uniform bool uResetAll;
  uniform float uWeights[${Nt}];
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
    for (int i = 0; i < ${Nt}; i++) {
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
`,rp=`
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
`;class ip{constructor(e,r){this.renderer=e,this.ownsPresentation=r===void 0,this.presentation=r??new Ec(e),this.quad.frustumCulled=!1,this.fullscreenScene.add(this.quad)}fullscreenScene=new Ar;fullscreenCamera=new as(-1,1,1,-1,0,1);blendMaterial=new $t({glslVersion:Cr,vertexShader:Qa,fragmentShader:tp,uniforms:{tPrevious:{value:null},tReference:{value:null},tReferenceDepth:{value:null},tSample:{value:null},tSampleDepth:{value:null},uInverseViewProjection:{value:new re},uBounds:{value:Array.from({length:Nt},()=>new ee)},uBoundsCount:{value:0},uRefresh:{value:!1},uResetAll:{value:!1},uWeights:{value:new Float32Array(Nt).fill(1)}},depthTest:!1,depthWrite:!1,blending:ui});compositeMaterial=new $t({glslVersion:Cr,vertexShader:Qa,fragmentShader:rp,uniforms:{tColor:{value:null},tDepth:{value:null},uOutputDither:{value:!1}},dithering:!0,transparent:!0,blending:ho,depthTest:!0,depthFunc:xo,depthWrite:!0});quad=new Pr(new is(2,2),this.blendMaterial);referenceTarget=null;sampleTarget=null;readTarget=null;writeTarget=null;pages=new Map;stateKey="";targetKey="";cursor=0;totalSamples=1;broken=!1;disposed=!1;allocatedBytes=0;lastFallbackReason=null;presentation;publishedStateKeys=new Map;publicationRetryMs=250;ownsPresentation;get pageProgress(){return[...this.pages].map(([e,r])=>({id:e,samples:r.samples,totalSamples:this.totalSamples,ready:r.page.ready!==!1,published:this.publishedStateKeys.get(e)===JSON.stringify([this.stateKey,r.page.revision])}))}get memoryBytes(){return this.allocatedBytes+this.presentation.memoryBytes}get fallbackReason(){return this.lastFallbackReason}render(e,r,i){var P,U;if(this.disposed)return this.fallback(Je.disposed);if(this.broken)return this.fallback(Je.renderer);if(!i.active)return this.stateKey="",this.lastFallbackReason=Je.inactive,null;const{width:n,height:a,samples:s}=i,o=To((P=i.options)==null?void 0:P.format),c=((U=i.options)==null?void 0:U.msaaSamples)??dl.msaaSamples,l=n*a,u=i.visibilityOnly?jt:Ir,d=i.visibilityOnly?1:4,p=l*(2*(o.bytesPerPixel*d/4+4)+2*o.accumulationBytesPerPixel*d/4);if(!Number.isInteger(n)||n<1||!Number.isInteger(a)||a<1||!Number.isInteger(s)||s<1||n>this.renderer.capabilities.maxTextureSize||a>this.renderer.capabilities.maxTextureSize)return this.fallback(Je.dimensions);if(i.maxRenderTargetPixels!==void 0&&(!(i.maxRenderTargetPixels>0)||l>i.maxRenderTargetPixels)||p+this.presentation.memoryBytes>hi)return this.fallback(Je.budget);if(o.format!==Ir)return this.fallback(Je.format);if(c!==0)return this.fallback(Je.msaa);if(!r.supportsOpaqueAccumulation)return this.fallback(Je.receivers);const m=r.accumulationPages.map(O=>{var W;return{...O,ready:O.ready!==!1&&(((W=i.isPageReady)==null?void 0:W.call(i,O.id))??!0)}});if(m.length===0||m.length>Nt)return this.fallback(Je.pages);this.lastFallbackReason=null;const h=this.renderer,g=h.getRenderTarget(),v=h.getActiveCubeFace(),y=h.getActiveMipmapLevel(),T=h.getClearColor(new Ve),b=h.getClearAlpha(),I=h.autoClear,A=h.getViewport(new ee),R=h.getScissor(new ee),F=h.getScissorTest();try{h.autoClear=!1;const O=JSON.stringify([n,a,o.type,o.accumulationType,u]);if(this.targetKey!==O){this.releaseTargets();const N={type:o.type,format:u,minFilter:be,magFilter:be,depthBuffer:!0,samples:0};this.referenceTarget=new $e(n,a,{...N,depthTexture:new qt(n,a,Ft)}),this.sampleTarget=new $e(n,a,{...N,depthTexture:new qt(n,a,Ft)});const H={type:o.accumulationType,format:u,minFilter:be,magFilter:be,depthBuffer:!1};this.readTarget=new $e(n,a,H),this.writeTarget=new $e(n,a,H),this.targetKey=O,this.allocatedBytes=p}const W=JSON.stringify([i.viewKey,i.visibilityOnly?0:i.styleEpoch,s,O]),te=this.stateKey!==W,B=new Set(m.map(({id:N})=>N)),C=[...this.pages.values()].filter(({page:N})=>!B.has(N.id)).map(({page:N})=>N),j=[...te?m:m.filter(N=>{var fe;const H=(fe=this.pages.get(N.id))==null?void 0:fe.page;return(H==null?void 0:H.revision)!==N.revision||(H==null?void 0:H.ready)===!1&&N.ready}),...C].flatMap(N=>[N.screenBounds,...this.pages.has(N.id)?[this.pages.get(N.id).page.screenBounds]:[]]),ae=te?m:m.filter(N=>j.some(H=>this.overlaps(N.screenBounds,H)));this.blendMaterial.uniforms.uInverseViewProjection.value.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse).invert(),te&&(this.pages.clear(),this.cursor=0);for(const N of C)this.pages.delete(N.id);for(const N of ae)this.publishedStateKeys.delete(N.id);ae.length>0&&(this.publicationRetryMs=250),this.cursor%=Math.max(1,m.length);for(const N of m){const H=this.pages.get(N.id);H?H.page=N:this.pages.set(N.id,{page:N,samples:0})}if(this.totalSamples=s,ae.length>0||C.length>0){this.clearTarget(this.referenceTarget),r.renderSample(e,0,s),this.blend(ae,!0,te,ae.map(()=>1));for(const N of ae)this.pages.get(N.id).samples=1}else{const N=[...this.pages.values()],H=performance.now(),fe=i.maxPagesPerFrame??4,Se=Number.isFinite(fe)?Math.min(Nt,Math.max(1,Math.floor(fe))):4,Me=i.maxFrameCpuMilliseconds??4,Y=Number.isFinite(Me)?Math.max(0,Me):4;let Be=0;do{const w=[],ir=this.cursor;for(let Pe=0;Pe<N.length;Pe+=1){const Dt=(ir+Pe)%N.length,ye=N[Dt];if(!(ye.samples>=s||ye.page.ready===!1)){if(w.length===0&&this.clearTarget(this.sampleTarget),!r.renderPageSample(e,ye.page.id,ye.samples,s))return this.fallback(Je.pages);if(w.push(ye),Be+=1,this.cursor=(Dt+1)%N.length,Be>=Se||performance.now()-H>=Y)break}}if(w.length===0)break;this.blend(w.map(({page:Pe})=>Pe),!1,!1,w.map(Pe=>1/(Pe.samples+1)));for(const Pe of w)Pe.samples+=1}while(Be<Se&&performance.now()-H<Y)}this.stateKey=W,h.setRenderTarget(g,v,y),h.setViewport(A),h.setScissor(R),h.setScissorTest(F),this.quad.material=this.compositeMaterial;const Q=[...this.pages.values()].every(N=>N.samples>=s);this.compositeMaterial.uniforms.tColor.value=Q?this.readTarget.texture:this.referenceTarget.texture,this.compositeMaterial.uniforms.tDepth.value=this.referenceTarget.depthTexture,this.compositeMaterial.uniforms.uOutputDither.value=g===null,i.visibilityOnly||h.render(this.fullscreenScene,this.fullscreenCamera);let ue=!1;for(const{page:N,samples:H}of this.pages.values()){if(N.ready===!1||H<s)continue;const fe=JSON.stringify([W,N.revision]);if(this.publishedStateKeys.get(N.id)!==fe)try{this.presentation.publish(this.readTarget,this.referenceTarget,e,N,s)?this.publishedStateKeys.set(N.id,fe):ue=!0}catch(Se){ue=!0,console.error("[shadow-simulation] retaining previous corridor capture after copy failure",Se)}}for(const N of this.publishedStateKeys.keys())B.has(N)||this.publishedStateKeys.delete(N);const xe=[...this.pages.values()].reduce((N,{page:H,samples:fe})=>{const Se=H.ready!==!1&&this.publishedStateKeys.get(H.id)===JSON.stringify([W,H.revision]);return N+(Se?s:Math.min(fe,s-1))},0),We=ue?this.publicationRetryMs:void 0;return this.publicationRetryMs=ue?Math.min(4e3,this.publicationRetryMs*2):250,{progress:xe/(this.pages.size*s),settled:xe===this.pages.size*s,...We===void 0?{}:{retryAfterMs:We},needsRepaint:[...this.pages.values()].some(N=>N.samples<s&&N.page.ready!==!1)}}catch(O){return this.broken=!0,console.error("[shadow-simulation] corridor accumulation failed; using direct rendering",O),this.fallback(Je.renderer)}finally{h.autoClear=I,h.setClearColor(T,b),h.setRenderTarget(g,v,y),h.setViewport(A),h.setScissor(R),h.setScissorTest(F)}}overlaps(e,r){return e.x<=r.x+r.z&&e.x+e.z>=r.x&&e.y<=r.y+r.w&&e.y+e.w>=r.y}clearTarget(e){this.renderer.setRenderTarget(e),this.renderer.setClearColor(0,0),this.renderer.clear(!0,!0,!1)}blend(e,r,i,n){const a=this.blendMaterial.uniforms;a.tPrevious.value=this.readTarget.texture,a.tReference.value=this.referenceTarget.texture,a.tReferenceDepth.value=this.referenceTarget.depthTexture,a.tSample.value=this.sampleTarget.texture,a.tSampleDepth.value=this.sampleTarget.depthTexture,a.uBoundsCount.value=e.length,e.forEach(({receiverBounds:o},c)=>a.uBounds.value[c].set(o.min.x,o.min.z,o.max.x,o.max.z)),a.uRefresh.value=r,a.uResetAll.value=i,a.uWeights.value.set(n),this.quad.material=this.blendMaterial,this.renderer.setRenderTarget(this.writeTarget),this.renderer.render(this.fullscreenScene,this.fullscreenCamera);const s=this.readTarget;this.readTarget=this.writeTarget,this.writeTarget=s}releaseTargets(){var e;for(const r of[this.referenceTarget,this.sampleTarget,this.readTarget,this.writeTarget])(e=r==null?void 0:r.depthTexture)==null||e.dispose(),r==null||r.dispose();this.referenceTarget=null,this.sampleTarget=null,this.readTarget=null,this.writeTarget=null,this.stateKey="",this.targetKey="",this.allocatedBytes=0,this.pages.clear()}releaseScratch(e=!1){e?(this.stateKey="",this.pages.clear()):this.releaseTargets(),this.publishedStateKeys.clear(),this.cursor=0}fallback(e){return this.lastFallbackReason=e,this.releaseTargets(),null}dispose(){this.disposed||(this.disposed=!0,this.releaseTargets(),this.ownsPresentation&&this.presentation.dispose(),this.quad.geometry.dispose(),this.blendMaterial.dispose(),this.compositeMaterial.dispose())}}const Za=2e4;let np=0;var uo;class sp{enabled=hl((uo=globalThis.location)==null?void 0:uo.hostname);reportId=++np;nextCorridorId=0;labels=new Map;pending=new Map;timer;context;observe(e,r){var a;if(!this.enabled)return;const i=performance.now();for(const{id:s}of e)this.labels.has(s)||this.labels.set(s,`C${this.reportId}.${++this.nextCorridorId}`);this.context={total:e.length,ready:e.filter(s=>s.ready).length,completed:e.filter(s=>s.published).length,samples:e.reduce((s,o)=>s+o.samples,0),activeId:r.activeId?this.labels.get(r.activeId):null,memoryBytes:r.memoryBytes,fallbackReason:r.fallbackReason,publicationRetries:(a=r.publicationRetries)==null?void 0:a.map(([s,o])=>({id:this.labels.get(s),attempts:o.attempts,retryInMs:Math.max(0,Math.round(o.retryAt-i))}))};const n=new Set(e.map(({id:s})=>s));for(const s of this.pending.keys())n.has(s)||this.pending.delete(s);for(const s of this.labels.keys())n.has(s)||this.labels.delete(s);for(const s of e){if(s.published){this.pending.delete(s.id);continue}const o=this.pending.get(s.id),c=!o||s.samples>o.progress.samples;this.pending.set(s.id,{progress:s,advancedAt:c?i:o.advancedAt,reported:c?!1:o.reported})}this.schedule()}pause(){clearTimeout(this.timer),this.timer=void 0,this.pending.clear()}schedule(){if(this.timer!==void 0)return;let e=1/0;for(const r of this.pending.values())r.reported||(e=Math.min(e,r.advancedAt+Za));Number.isFinite(e)&&(this.timer=setTimeout(()=>{var n;this.timer=void 0;const r=performance.now(),i=[];for(const a of this.pending.values())a.reported||r-a.advancedAt<Za||(a.reported=!0,i.push({...a.progress,id:this.labels.get(a.progress.id),file:(n=a.progress.id.match(/\/([^/"\\]+\.b3dm)/))==null?void 0:n[1],stalledMilliseconds:Math.round(r-a.advancedAt),waitingForReadiness:!a.progress.ready}));i.length>0&&console.warn("[shadow-simulation] corridors without progress for 20 seconds",JSON.stringify({corridors:i,scheduler:this.context})),this.schedule()},Math.max(0,e-performance.now())))}}class ap{constructor(e){this.renderer=e,this.presentation=new Ec(e),this.scratch=new ip(e,this.presentation)}presentation;scratch;captures=[];activeId=null;activeCapture=null;cursor=0;samples=1;disposed=!1;watchdog=new sp;publicationRetries=new Map;restoreOpportunities=new Map;allocationKey="";allocations=new Map;plans=new Map;get memoryBytes(){return this.scratch.memoryBytes}get fallbackReason(){return this.presentation.supportsCapture?this.scratch.fallbackReason:"receivers"}get capturePages(){return this.captures.map(({page:e})=>e)}get pageProgress(){const e=this.scratch.pageProgress;return this.captures.map(({page:r,plan:i,ready:n})=>{const a=n&&this.presentation.has(r,this.samples),s=e.find(({id:o})=>o===r.id);return{id:r.id,samples:a?this.samples:(s==null?void 0:s.samples)??0,totalSamples:this.samples,ready:n,published:a,limited:i.limited,width:i.width,height:i.height}})}updateCaptures(e,r,i,n=!0){var h;const a=Xf(e),s=To((h=i.options)==null?void 0:h.format),o=2*(s.bytesPerPixel/4+4)+2*s.accumulationBytesPerPixel/4+8,c=Math.max(1,Math.floor(Math.min(i.maxRenderTargetPixels??i.width*i.height,hi/2/o))),l=r.accumulationPages.map(g=>{const v=this.plans.get(g.id),y=(v==null?void 0:v.orientation)??a,T={groundTexelTargetMeters:g.groundTexelTargetMeters??1,maximumDimension:this.renderer.capabilities.maxTextureSize,maximumPixels:c},b=JSON.stringify([g.receiverBounds.min,g.receiverBounds.max,y.toArray(),T]),I=(v==null?void 0:v.inputs)===b?v.plan:qf(g.receiverBounds,y,T);return this.plans.set(g.id,{inputs:b,plan:I,orientation:y}),I.camera.layers.mask=e.layers.mask,{page:g,plan:I}}),u=l.find(({page:g})=>{var v;return this.activeId===g.id&&((v=this.activeCapture)==null?void 0:v.page.id)===g.id&&this.activeCapture.page.contentKey===JSON.stringify([g.contentKey??g.revision,this.activeCapture.plan.key])}),d=u?this.activeCapture.plan:null,p=JSON.stringify(l.map(({page:g,plan:v})=>[g.id,v.key,g.screenBounds.z*g.screenBounds.w]));if(p!==this.allocationKey){const g=new Map(Kf(l.filter(({page:v})=>v.id!==(u==null?void 0:u.page.id)).map(({page:v,plan:y})=>({id:v.id,plan:y,screenArea:v.screenBounds.z*v.screenBounds.w})),ts-(d?d.width*d.height*8:0)));u&&d&&g.set(u.page.id,d),this.allocationKey=p,this.allocations=g}this.captures=l.map(({page:g,plan:v})=>{var I;const y=this.allocations.get(g.id)??v,T=JSON.stringify([g.contentKey??g.revision,y.key]),b=(!n||g.ready!==!1)&&(((I=i.isPageReady)==null?void 0:I.call(i,g.id))??!0);return{page:{...g,ready:b,captureKey:JSON.stringify([y.camera.quaternion.toArray(),y.width,y.height]),captureSize:{width:y.width,height:y.height},contentKey:T,revision:T,screenBounds:new ee(0,0,1,1)},plan:y,ready:b}});const m=new Set(this.captures.map(({page:g})=>g.id));for(const g of this.plans.keys())m.has(g)||this.plans.delete(g);for(const[g,v]of this.publicationRetries){const y=this.captures.find(({page:T})=>T.id===g);(!y||y.page.contentKey!==v.contentKey)&&this.publicationRetries.delete(g)}this.presentation.beginFrame(this.capturePages);for(const{page:g,plan:v}of this.captures)this.presentation.prepareRestore(g,i.samples,new re().multiplyMatrices(v.camera.projectionMatrix,v.camera.matrixWorldInverse));i.active&&this.reportProgress()}reportProgress(){this.watchdog.enabled&&this.watchdog.observe(this.pageProgress,{activeId:this.activeId,memoryBytes:this.memoryBytes,fallbackReason:this.fallbackReason,publicationRetries:[...this.publicationRetries.entries()]})}yieldForRestore(e,r){if(!this.presentation.isRestorePending(e,r))return!1;const i=JSON.stringify([e.id,r]),n=e.contentKey??e.revision;if(this.restoreOpportunities.get(i)===n)return!1;if(this.restoreOpportunities.set(i,n),this.restoreOpportunities.size>1024){const a=this.restoreOpportunities.keys().next().value;a!==void 0&&this.restoreOpportunities.delete(a)}return!0}render(e,r,i){var p;if(this.disposed)return null;if(!i.active)return this.watchdog.pause(),null;if(this.samples=i.samples,this.updateCaptures(e,r,i),!this.presentation.supportsCapture)return this.scratch.releaseScratch(),this.activeId=null,null;const n=performance.now();let a,s=this.captures.find(({page:m})=>m.id===this.activeId);const o=s&&!s.ready&&this.captures.some(({page:m,ready:h})=>h&&m.id!==(s==null?void 0:s.page.id)&&!this.presentation.has(m,i.samples));if((!s||o||this.presentation.has(s.page,i.samples))&&(this.scratch.releaseScratch(!0),this.activeId=null,s=void 0),s){const m=this.publicationRetries.get(s.page.id);m&&m.retryAt>n&&(a=Math.ceil(m.retryAt-n))}if(!s&&this.captures.length>0)for(let m=0;m<this.captures.length;m+=1){const h=(this.cursor+m)%this.captures.length,g=this.captures[h];if(!g.ready||this.presentation.has(g.page,i.samples)||this.yieldForRestore(g.page,i.samples))continue;const v=this.publicationRetries.get(g.page.id);if(v&&v.retryAt>n){a=Math.min(a??1/0,Math.ceil(v.retryAt-n));continue}s=g,a=void 0,this.activeId=g.page.id,this.activeCapture=g,this.cursor=(h+1)%this.captures.length;break}let c=null;if(s!=null&&s.ready&&a===void 0){this.activeCapture=s;const{page:m,plan:h}=s,g=(v,y,T)=>r.renderPageSample(v,m.id,y,T,m.screenBounds);if(c=this.scratch.render(h.camera,{accumulationPages:[m],supportsOpaqueAccumulation:r.supportsOpaqueAccumulation,renderSample:g,renderPageSample:(v,y,T,b)=>g(v,T,b)},{...i,width:h.width,height:h.height,viewKey:h.key,visibilityOnly:!0,isPageReady:void 0,maxPagesPerFrame:i.maxPagesPerFrame??4}),c!=null&&c.settled)this.publicationRetries.delete(m.id),this.scratch.releaseScratch(!0),this.activeId=null;else if((c==null?void 0:c.retryAfterMs)!==void 0){const v=(((p=this.publicationRetries.get(m.id))==null?void 0:p.attempts)??0)+1;a=Math.max(250,c.retryAfterMs);const y=v>=3;y&&(a=Math.max(1e3,a)),this.publicationRetries.set(m.id,{contentKey:m.contentKey,attempts:y?0:v,retryAt:n+a}),y&&(this.scratch.releaseScratch(),this.activeId=null,this.captures.some(({page:T,ready:b})=>{var I;return b&&T.id!==m.id&&!this.presentation.has(T,i.samples)&&(((I=this.publicationRetries.get(T.id))==null?void 0:I.retryAt)??0)<=n})&&(a=void 0))}if(!c)return null}!this.activeId&&!this.captures.some(({page:m,ready:h})=>h&&!this.presentation.has(m,i.samples))&&this.scratch.releaseScratch();const l=this.pageProgress;this.reportProgress();const u=l.reduce((m,h)=>m+(h.published?i.samples:Math.min(h.samples,i.samples-1)),0),d=l.length*i.samples;return{progress:d>0?u/d:1,settled:d===u,needsRepaint:l.some(m=>m.ready&&!m.published)&&a===void 0,...a===void 0?{}:{retryAfterMs:a}}}renderHard(e,r,i){var R;if(this.disposed||!i.active)return{published:0,needsRepaint:!1};if(this.updateCaptures(e,r,{...i,samples:1},i.isPageReady===void 0),!r.supportsOpaqueAccumulation||!this.presentation.supportsCapture||!this.renderer.extensions.has("EXT_color_buffer_float"))return{published:0,needsRepaint:!1};const n=new Map(this.captures.map(({page:F})=>[F.id,this.presentation.getCapturedSize(F.id)])),a=this.captures.reduce((F,{page:P,plan:U})=>{const O=n.get(P.id);return F+Math.max(U.width*U.height,O?O.width*O.height:0)*8},0)>ts,s=({page:F,plan:P})=>{const U=n.get(F.id);return U?(U.width*U.height-P.width*P.height)*8:0},o=this.captures.filter(({page:F,plan:P,ready:U})=>{if(!U)return!1;const O=n.get(F.id);return this.presentation.hasAtLeast(F,1)&&(!a||!O||O.width*O.height<=P.width*P.height)?!1:!(O&&O.samples>1&&!a&&(O.width!==P.width||O.height!==P.height)&&this.presentation.canReplay(F))});a&&o.sort((F,P)=>s(P)-s(F));const c=o.find(({page:F})=>!this.yieldForRestore(F,1));if(!c)return{published:0,needsRepaint:o.length>0};const{page:l,plan:u}=c;if(a&&this.presentation.hasAtLeast(l,1)&&s(c)>0){const F=n.get(l.id),P=Math.max(u.width,Math.ceil(F.width/2))*Math.max(u.height,Math.ceil(F.height/2))*8;if(this.memoryBytes+P>hi)return{published:0,needsRepaint:!1,retryAfterMs:1e3};try{const U=this.presentation.downsample(l,u.width,u.height);return{published:U?1:0,needsRepaint:U,...U?{}:{retryAfterMs:1e3}}}catch{return{published:0,needsRepaint:!1,retryAfterMs:1e3}}}if(this.memoryBytes+u.width*u.height*16>hi)return{published:0,needsRepaint:!1,retryAfterMs:1e3};const d=this.renderer,p=d.getRenderTarget(),m=d.getActiveCubeFace(),h=d.getActiveMipmapLevel(),g=d.getViewport(new ee),v=d.getScissor(new ee),y=d.getScissorTest(),T=d.autoClear,b=d.getClearColor(new Ve),I=d.getClearAlpha(),A=new $e(u.width,u.height,{type:wt,format:jt,minFilter:be,magFilter:be,samples:0,depthTexture:new qt(u.width,u.height,Ft)});try{d.initRenderTarget(A),d.autoClear=!1,d.setRenderTarget(A),d.setViewport(new ee(0,0,u.width,u.height)),d.setScissorTest(!1),d.setClearColor(0,0),d.clear(!0,!0,!1);const P=r.renderPageSample(u.camera,l.id,0,1,l.screenBounds)&&this.presentation.publish(A,A,u.camera,l,1);return{published:P?1:0,needsRepaint:P&&o.length>1,...P?{}:{retryAfterMs:1e3}}}catch(F){return console.warn("[shadow-simulation] retaining completed corridor after hard-stage capture failure",F),{published:0,needsRepaint:!1,retryAfterMs:1e3}}finally{d.setRenderTarget(p,m,h),d.setViewport(g),d.setScissor(v),d.setScissorTest(y),d.setClearColor(b,I),d.autoClear=T,(R=A.depthTexture)==null||R.dispose(),A.dispose()}}pausePending(){this.watchdog.pause()}cancelPending(){this.watchdog.pause(),this.activeId!==null&&this.scratch.releaseScratch(),this.activeId=null,this.publicationRetries.clear(),this.restoreOpportunities.clear()}dispose(){this.disposed||(this.disposed=!0,this.watchdog.pause(),this.scratch.dispose(),this.presentation.dispose(),this.captures=[],this.plans.clear(),this.allocations=new Map,this.publicationRetries.clear(),this.restoreOpportunities.clear())}}const op=750,cp=5e3,Ja=new Set,lp=t=>{const e=ml({assetUrl:t,production:!0});let r=null,i=!1,n=!1,a=0,s=null;const o=()=>{if(r&&(r.onmessage=null,r.onerror=null,r.onmessageerror=null,r.terminate(),r=null),s){const d=s;s=null,clearTimeout(d.timer),d.finish(null)}},c=()=>{n=!0,o()},l=(d,p=[])=>{if(!e||i||n||s||typeof Worker>"u")return Promise.resolve(null);try{return r||(r=new Worker(new URL("https://cismet.github.io/carma-pr-deployments/779/geoportal/assets/shadow-corridor-cache.worker-VQZLpq-f.js",import.meta.url),{type:"module"}),r.onerror=c,r.onmessageerror=c,r.onmessage=m=>{var g;if(!s||((g=m.data)==null?void 0:g.id)!==s.id)return;const h=s;s=null,clearTimeout(h.timer),h.finish(m.data)}),new Promise(m=>{const h=setTimeout(c,d.operation===oi.read?op:cp);s={id:d.id,timer:h,finish:m};try{r.postMessage(d,p)}catch{c()}})}catch{return c(),Promise.resolve(null)}},u={cancelPending:o,get enabled(){return!!(e&&!i&&!n&&typeof Worker<"u")},get busy(){return s!==null},async read(d){const p=Ye(d);if(!p)return null;const m=await l({id:++a,producerAssetUrl:e??"",identity:d,operation:oi.read}),h=m==null?void 0:m.record;return!i&&(h==null?void 0:h.schema)===bi.schema&&Ye(h.identity)===p&&Ka(h)?h:null},async write(d,p,m){if(!Ye(d)||!Ka(p))return!1;const h=[p.visibility,p.depth];if(h.some(v=>!(v.buffer instanceof ArrayBuffer)||v.byteOffset!==0||v.byteLength!==v.buffer.byteLength))return!1;const g=await l({id:++a,producerAssetUrl:e??"",identity:d,operation:oi.write,capture:p,costs:m},[...new Set(h.map(v=>v.buffer))]);return!i&&(g==null?void 0:g.written)===!0},async writePacked(d,p,m){if(!Ye(d)||!Qf(p)||!(p.rgba.buffer instanceof ArrayBuffer)||p.rgba.byteOffset!==0||p.rgba.byteLength!==p.rgba.buffer.byteLength)return!1;const h=await l({id:++a,producerAssetUrl:e??"",identity:d,operation:oi.writePacked,capture:p,costs:m},[p.rgba.buffer]);return!i&&(h==null?void 0:h.written)===!0},dispose(){i=!0,o(),Ja.delete(u)}};return Ja.add(u),u};class up{constructor(e,r,i){this.scene=e,this.renderer=r,this.host=i,this.frameCache=new Vl(r),this.pages=new Gf(e,r,i.maximumMapSize**2*8*2,i.maximumMapSize),this.accumulation=new ap(r),i.worldBasis&&i.corridorRevision&&i.dateTimeKey&&this.accumulation.presentation.setPersistence({cache:this.persistentCache,identity:(n,a)=>{var u,d,p;const s=this.pages.getPageGeometry(n.id),o=(u=i.dateTimeKey)==null?void 0:u.call(i);if(!s||!o||!n.captureKey)return null;const c=a===1?(d=i.receiverStageError)==null?void 0:d.call(i,n.receiverBounds):void 0,l=(p=i.corridorRevision)==null?void 0:p.call(i,s.casterBounds,c,n.receiverBounds);return l?{source:"shared-scene-corridor-v2",dateTime:o,corridor:n.id,resolution:JSON.stringify([s.width,s.height,n.captureKey]),geometryFingerprint:l,samples:a}:null},worldBasis:i.worldBasis,runIdleRender:i.runIdleRender,requestRepaint:i.requestRepaint})}pages;viewKey="";idleStats=null;accumulation;persistentCache=lp(import.meta.url);accumulationSettled=!1;viewport=new It(1,1);lastFrame=null;frameCache;presentedPageIds=new Set;casterRevisionsDirty=!0;casterRevisionCursor=0;hardRetryTimer=null;update(e,r,i,n){this.viewport.copy(r.viewport);const a=JSON.stringify([e.map(({id:s,bounds:o,receiverObjectId:c})=>[s,o.min,o.max,c]),r.renderCamera.projectionMatrix.elements,r.renderCamera.matrixWorldInverse.elements,r.viewport,i,n]);a!==this.viewKey&&(this.pages.setView(e,r.renderCamera,r.viewport,n,i,this.host.receiverBiasLimit),this.viewKey=a,this.casterRevisionsDirty=!0,this.casterRevisionCursor=0)}updatePresentation(e){this.viewport.copy(e.viewport),this.pages.updatePresentation(e.renderCamera)}invalidateContent(e){(e==null?void 0:e.length)!==0&&(this.casterRevisionsDirty=!0,this.casterRevisionCursor=0,this.frameCache.invalidate(),e?e.length>0&&this.pages.invalidateCasters(e):this.pages.clearCache())}async prewarm({cells:e,frame:r,lighting:i,targetPixels:n,samples:a,prepare:s,signal:o,yieldToInput:c=Yf}){if(o.aborted)return null;this.idleStats=null,this.pages.setPrewarmView(e,r.renderCamera,r.viewport,n,i,a);try{return this.idleStats=await jf({pages:this.pages.prewarmPages,signal:o,prepare:s,yieldToInput:c,render:(l,u,d)=>{if(u!=null&&u.parent)throw new Error("Idle caster lease must own an unmounted group");const p=this.host.light.visible;this.host.light.visible=!1,u&&this.scene.add(u);try{let m=null;const h=()=>{m=this.pages.prewarmNext(r.renderCamera,l,{signal:d})};return this.host.runIdleRender?this.host.runIdleRender(h):h(),m??{pageId:l,rendered:0,cachedSamples:0,totalSamples:a,complete:!1,budgetLimited:!1,aborted:!0}}finally{u&&this.scene.remove(u),this.host.light.visible=p}}}),this.idleStats}finally{this.pages.clearPrewarmView()}}renderProgressive(e,r){if(this.lastFrame=r,!r.active)return this.pausePending(),null;if(this.pages.accumulationPages.length===0)return this.accumulationSettled=!1,null;const i=this.renderWithHost(e,()=>{const s=this.captureHard(e);if(this.casterRevisionsDirty&&this.host.corridorRevision)return null;const o=this.accumulation.presentation.capture(this.scene,()=>this.accumulation.render(e,this.pages,{...r,visibilityOnly:!0,maxPagesPerFrame:Math.min(r.samples,64),maxFrameCpuMilliseconds:r.maxFrameCpuMilliseconds??2,isPageReady:c=>this.isPageReady(c,!1)}));return o&&this.renderContent(e,null,r.samples),o&&{...o,settled:o.settled&&!s.needsRepaint,needsRepaint:o.needsRepaint||s.needsRepaint}});if(!i)return this.accumulationSettled=!1,null;const n="retryAfterMs"in i?i.retryAfterMs:void 0;n!==void 0&&this.hardRetryTimer===null&&(this.hardRetryTimer=globalThis.setTimeout(()=>{var s,o;this.hardRetryTimer=null,(o=(s=this.host).requestRepaint)==null||o.call(s)},Math.max(1,n)));const a=i.settled&&!this.accumulationSettled;return this.accumulationSettled=i.settled,{...i,settled:a}}render(e,r,i,n=!0){return this.pages.accumulationPages.length===0?!1:(this.renderWithHost(e,()=>{n&&this.captureHard(e),this.renderContent(e,r,i,!n)}),!0)}cancelPending(e=!1){this.accumulation.cancelPending(),e&&this.accumulation.presentation.beginSolarTransition(),this.pausePending()}pausePending(){this.accumulation.pausePending(),this.hardRetryTimer!==null&&(globalThis.clearTimeout(this.hardRetryTimer),this.hardRetryTimer=null),this.accumulationSettled=!1}isPageReady(e,r){var n,a;const i=this.pages.getPageGeometry(e);return i?!this.host.isCorridorReady||this.host.isCorridorReady(i.casterBounds,r?(a=(n=this.host).receiverStageError)==null?void 0:a.call(n,i.receiverBounds):void 0,i.receiverBounds):!1}captureHard(e){var i,n,a,s,o,c;if(this.casterRevisionsDirty&&this.host.corridorRevision){const l=this.pages.accumulationPages,u=performance.now();let d=0;for(;this.casterRevisionCursor<l.length;){if(d>=4||d>0&&performance.now()-u>=4)return(n=(i=this.host).requestRepaint)==null||n.call(i),{published:0,needsRepaint:!0};const p=l[this.casterRevisionCursor++];d+=1;const m=this.pages.getPageGeometry(p.id);if(!m)continue;const h=this.host.corridorRevision(m.casterBounds,(s=(a=this.host).receiverStageError)==null?void 0:s.call(a,m.receiverBounds),m.receiverBounds);this.pages.setCasterRevision(p.id,h)&&this.frameCache.invalidate()}this.casterRevisionsDirty=!1,this.casterRevisionCursor=0}const r=this.accumulation.presentation.capture(this.scene,()=>{var l;return this.accumulation.renderHard(e,this.pages,{...this.lastFrame,width:this.viewport.x,height:this.viewport.y,viewKey:this.viewKey,styleEpoch:((l=this.lastFrame)==null?void 0:l.styleEpoch)??0,samples:1,active:!0,isPageReady:u=>this.isPageReady(u,!0)})});return r.needsRepaint&&((c=(o=this.host).requestRepaint)==null||c.call(o)),r.retryAfterMs!==void 0&&this.hardRetryTimer===null&&(this.hardRetryTimer=globalThis.setTimeout(()=>{var l,u;this.hardRetryTimer=null,(u=(l=this.host).requestRepaint)==null||u.call(l)},r.retryAfterMs)),r}renderContent(e,r,i,n=!1){var u,d,p,m,h;const a=this.accumulation.capturePages;this.accumulation.presentation.beginFrame(a);const s=a.map(g=>{const v=this.accumulation.presentation.canPresent(g);return{page:g,replay:v,ready:v||(!this.host.corridorRevision||!this.casterRevisionsDirty)&&this.isPageReady(g.id,!0)}});let o=!1;const c=()=>{this.presentedPageIds.clear();const g=this.host.light.visible,v=r===null&&s.some(({replay:y})=>y);this.host.light.visible=!0;try{let y=new Set;r===null?y=this.accumulation.presentation.renderNative(this.scene,s.filter(T=>T.replay).map(T=>T.page),()=>this.renderer.render(this.scene,e)):this.renderer.render(this.scene,e);for(const{page:T,replay:b,ready:I}of s){if(!I)continue;if(y.has(T.id)){this.presentedPageIds.add(T.id);continue}if(r===null&&!b){this.presentedPageIds.add(T.id);continue}if(n&&!b){this.presentedPageIds.add(T.id);continue}const A=n||v&&b;this.host.light.visible=A,this.accumulation.presentation.render(this.scene,T,i,()=>A?this.pages.renderPageColor(e,T.id):this.pages.renderPageSample(e,T.id,r??0,r===null?1:i))?this.presentedPageIds.add(T.id):o=!0}}finally{this.host.light.visible=g}};if((u=this.lastFrame)!=null&&u.active&&r===null&&this.accumulation.presentation.supportsCapture){const g=JSON.stringify([this.viewKey,e.projectionMatrix.elements,e.matrixWorldInverse.elements,e.layers.mask,this.lastFrame.styleEpoch,((p=(d=this.host).visualEpoch)==null?void 0:p.call(d))??0,this.accumulation.presentation.revision,s.map(({page:v,replay:y,ready:T})=>[v.id,v.contentKey??v.revision,y,T])]);this.frameCache.render(g,this.lastFrame.width,this.lastFrame.height,c),o&&this.frameCache.invalidate()}else this.frameCache.invalidate(),c();const l=s.filter(({page:g,replay:v})=>this.presentedPageIds.has(g.id)&&(this.accumulation.presentation.hasAtLeast(g,1)||!v&&(r===null||i===1))).map(({page:g})=>g);l.length>0&&((h=(m=this.host).onPresentedPages)==null||h.call(m,l,a))}renderWithHost(e,r){const{renderer:i,host:n}=this,a=n.light.visible,s=n.sky.visible,o=n.overlay.visible,c=i.autoClear;n.light.visible=!1,i.autoClear=!1;try{s&&this.renderHostObject(n.sky,e),n.sky.visible=!1,n.overlay.visible=!1;const l=r();return l!==null&&o&&(n.overlay.visible=!0,this.renderHostObject(n.overlay,e)),l}finally{i.autoClear=c,n.light.visible=a,n.sky.visible=s,n.overlay.visible=o}}renderHostObject(e,r){const i=this.scene.children.filter(n=>n!==e&&n.visible);for(const n of i)n.visible=!1;try{this.renderer.render(this.scene,r)}finally{for(const n of i)n.visible=!0}}get stats(){return{...this.pages.stats,framePresentation:this.frameCache.stats,corridorAccumulation:{retained:this.accumulation.presentation.stats,pageSamples:this.accumulation.pageProgress,memoryBytes:this.accumulation.memoryBytes,fallbackReason:this.accumulation.fallbackReason},...this.idleStats?{idlePrewarm:this.idleStats}:{},...this.host.auditCorridors?{corridorAudit:this.host.auditCorridors(this.pages.accumulationPages.flatMap(e=>{const r=this.pages.getPageGeometry(e.id);return r?[{id:e.id,casterBounds:r.casterBounds,receiverBounds:r.receiverBounds}]:[]}))}:{}}}dispose(){this.hardRetryTimer!==null&&globalThis.clearTimeout(this.hardRetryTimer),this.hardRetryTimer=null,this.accumulation.dispose(),this.frameCache.dispose(),this.persistentCache.dispose(),this.pages.dispose()}}function dp(){const t=new WeakSet;return e=>{let r=!1;for(const i of e)if(!(!i.providesTerrain||!i.hasRenderableContent)&&(r=!0,t.has(i)||i.hasRenderableContent()))return t.add(i),!1;return r}}const On=(t,e,r)=>JSON.stringify([t.min.toArray(),t.max.toArray(),e,r==null?void 0:r.min.toArray(),r==null?void 0:r.max.toArray()]),hp=(t,e)=>{const r=new Map(t.map(a=>[a.id,a])),i=[],n=a=>i.push(new Fe(new x(...a.minimum),new x(...a.maximum)));for(const a of e){const s=r.get(a.id);s&&a.minimum.every((c,l)=>c===s.minimum[l])&&a.maximum.every((c,l)=>c===s.maximum[l])||(s&&n(s),n(a)),r.delete(a.id)}for(const a of r.values())n(a);return i},mp=(t,e,r)=>{const i=new Set(r.map(({id:n})=>n));return t.filter(n=>{if(n.loadReason==="shadow")return!1;const a=e.filter(({bounds:s})=>n.minimum[0]<s.max.x&&n.maximum[0]>s.min.x&&n.minimum[2]<s.max.z&&n.maximum[2]>s.min.z);return a.length>0&&a.every(({id:s})=>i.has(s))}).map(({id:n})=>n)},fp=(t,e,r)=>{if(![t,e,r].every(Number.isFinite)||r<=0)throw new RangeError("Invalid shared-scene Mercator basis");return new re().set(r,0,0,t,0,0,r,e,0,r,0,0,0,0,0,1)},eo=(t,e,r)=>fl(e.reduce((i,n)=>{if(n.loadReason==="shadow")return i;const[a,,s]=n.minimum,[o,,c]=n.maximum;return a<t.max.x&&o>t.min.x&&s<t.max.z&&c>t.min.z&&Number.isFinite(n.errorPixels)?Math.max(i,n.errorPixels):i},r),r),pp=({stageErrorPixels:t,targetErrorPixels:e,groundTexelTargetMeters:r,finalBiasMeters:i,maximumCoarseBiasMeters:n})=>{const a=Math.max(1,Math.min(n/i,t/Math.max(e,.25)));return Math.min(n,i*a,Math.max(i,r*2))},gp=({id:t,casterBounds:e,sunElevationDegrees:r,regions:i,volumes:n})=>{const a=new Set(i.flatMap(u=>u.selectedTileIds)),s=new Map(n.map(u=>[u.id,u])),o=[],c=[];let l=0;for(const u of a){const d=s.get(u);if(!d){o.push(u);continue}d.loadReason==="shadow"&&(l+=1),e.intersectsBox(new Fe(new x(...d.minimum),new x(...d.maximum)))||c.push(u)}return{id:t,ready:i.length>0&&i.every(u=>u.ready),selectedTiles:a.size,offscreenTiles:l,reviewCount:r>=10&&a.size>10,nearHorizon:r<10,exactPrismTested:i.length>0&&i.every(u=>u.receiverPrismTested),visitedNodes:i.reduce((u,d)=>u+d.visitedNodes,0),broadPhaseNodes:i.reduce((u,d)=>u+d.broadPhaseNodes,0),rejectedPrismNodes:i.reduce((u,d)=>u+d.rejectedPrismNodes,0),missingPublishedVolumes:o,outsideEnvelope:c,selectedTileIds:[...a].sort()}},vp={[Le.STANDARD]:0,[Le.HIGH]:1,[Le.MAX]:1,[Le.ULTRA]:1,[Le.EXTREME]:1},yp=128,Sp={[Le.STANDARD]:0,[Le.HIGH]:0,[Le.MAX]:1,[Le.ULTRA]:2,[Le.EXTREME]:3},wp=(t,e,r,i)=>{var u,d;const n=t==null?void 0:t.tileManager;if(!t||!n||!Number.isFinite(n.deltaZoom)||!Number.isFinite(n.tileSize)||!n.tileManager)return()=>{};const a={deltaZoom:n.deltaZoom,terrainTileSize:n.tileSize,sourceTileSize:n.tileManager.tileSize,meshSize:t.meshSize,calculateTileZoom:(u=n.tileManager._source)==null?void 0:u.calculateTileZoom},o=1-vp[r],c=e*2**o;n.deltaZoom=o,n.tileSize=c,n.tileManager.tileSize=c,t.meshSize=yp;const l=Sp[r];if(l>0&&n.tileManager._source){a.calculateTileZoom||i==null||i();const p=n.tileManager._source.calculateTileZoom;p&&(n.tileManager._source.calculateTileZoom=(...m)=>p(...m)+l)}return t._meshCache={},(d=n.freeRtt)==null||d.call(n),()=>{var p;n.deltaZoom=a.deltaZoom,n.tileSize=a.terrainTileSize,n.tileManager.tileSize=a.sourceTileSize,t.meshSize=a.meshSize,n.tileManager._source&&(n.tileManager._source.calculateTileZoom=a.calculateTileZoom),t._meshCache={},(p=n.freeRtt)==null||p.call(n)}},_p=2048,xp=4096,Tp=4096,bp=1e6,Mp=2e6,Rp=()=>typeof navigator>"u"?{userAgent:"",platform:"",maxTouchPoints:0}:{userAgent:navigator.userAgent,platform:navigator.platform,maxTouchPoints:navigator.maxTouchPoints},to=(t,e=Rp())=>{const r=Math.max(256,Math.floor(t)),i=/iPhone|iPod|Android.+Mobile/i.test(e.userAgent),n=/iPad|Android(?!.*Mobile)/i.test(e.userAgent)||e.platform==="MacIntel"&&e.maxTouchPoints>1;return i?{maxShadowMapSize:Math.min(r,_p),maxAccumulationPixels:bp}:n?{maxShadowMapSize:Math.min(r,xp),maxAccumulationPixels:Mp}:{maxShadowMapSize:Math.min(r,Tp),maxAccumulationPixels:Number.POSITIVE_INFINITY}},Ep=(t,e=er,r=2560*1440,i=1)=>Math.floor(Math.max(256**2,Math.min(t**2,rt[e].depthSize**2*(Number.isFinite(r)&&r>0?r/(2560*1440):1)*i**2))),ro=new WeakMap,Ap=t=>{const e=ro.get(t);if(e)return e;const r=t.getContext(),i=r.getInternalformatParameter(r.RENDERBUFFER,r.DEPTH_COMPONENT24,r.SAMPLES),n=s=>[0,...Array.from(r.getInternalformatParameter(r.RENDERBUFFER,s,r.SAMPLES)).filter(o=>i.includes(o))],a={maxTextureSize:t.capabilities.maxTextureSize,maxRenderbufferSize:r.getParameter(r.MAX_RENDERBUFFER_SIZE),hdrSamples:n(r.RGBA16F),sdrSamples:n(r.RGBA8)};return ro.set(t,a),a},Cp=(t,e)=>{if(t.shadowBufferFormat===Tt.HDR_32)return 0;const r=t.shadowMsaaSamples===ds?1/0:t.shadowMsaaSamples;return Math.max(0,...e.filter(i=>Number.isFinite(i)&&i<=r))},bt=new WeakMap,Ac=t=>{let e=bt.get(t);return e||(e={snapshot:null,listeners:new Set,demandListeners:new Set},bt.set(t,e)),e},Ag=t=>{var e;return((e=bt.get(t))==null?void 0:e.snapshot)??null},Cg=(t,e)=>{const r=Ac(t),i=r.listeners.size===0;if(r.listeners.add(e),i)for(const n of r.demandListeners)n(!0);return()=>{if(!(!r.listeners.delete(e)||r.listeners.size>0)){r.snapshot=null;for(const n of r.demandListeners)n(!1);r.demandListeners.size===0&&bt.delete(t)}}},Ip=(t,e)=>{const r=Ac(t);return r.demandListeners.add(e),r.listeners.size>0&&e(!0),()=>{r.demandListeners.delete(e),r.listeners.size===0&&r.demandListeners.size===0&&bt.delete(t)}},io=t=>{var e;return(((e=bt.get(t))==null?void 0:e.listeners.size)??0)>0},Dp=(t,e)=>{const r=bt.get(t);if(r!=null&&r.listeners.size){r.snapshot=e;for(const i of r.listeners)i()}},Nn=t=>{const e=bt.get(t);if(e){e.snapshot=null;for(const r of e.listeners)r();e.listeners.size===0&&e.demandListeners.size===0&&bt.delete(t)}},no=.01,Pp=500,Ln=1500,Fn=(t=er)=>({lastFrameMs:null,sampleDurationMs:0,sampleCount:0,recoveryDurationMs:0,updateIntervalMs:rt[t].targetFps?1e3/rt[t].targetFps:0,targetFrameMs:rt[t].targetFps?1e3/rt[t].targetFps:0,depthScale:1,trial:null,adaptationBlocked:!1}),Bn=(t,e,r,{enabled:i=!0,allowCadenceReduction:n=!0}={})=>{var g,v;if(t.targetFrameMs===0)return t;if(!i)return t.lastFrameMs===null&&t.updateIntervalMs===t.targetFrameMs&&t.depthScale===1&&!t.adaptationBlocked?t:{...t,lastFrameMs:null,sampleDurationMs:0,sampleCount:0,recoveryDurationMs:0,updateIntervalMs:t.targetFrameMs,depthScale:1,trial:null,adaptationBlocked:!1};if(!r||!Number.isFinite(e))return t.lastFrameMs===null?t:{...t,lastFrameMs:null,sampleDurationMs:0,sampleCount:0,recoveryDurationMs:0,depthScale:1,trial:null,adaptationBlocked:!1};const a=t.lastFrameMs===null?0:e-t.lastFrameMs;if(a<=0)return{...t,lastFrameMs:e};const s=t.sampleDurationMs+a,o=t.sampleCount+1;if(s<Pp)return{...t,lastFrameMs:e,sampleDurationMs:s,sampleCount:o};const c=s/o,l=t.targetFrameMs;if(t.trial&&c>=t.trial.baselineFrameMs*.95||t.adaptationBlocked)return{...t,lastFrameMs:e,sampleDurationMs:0,sampleCount:0,trial:null,adaptationBlocked:!0,updateIntervalMs:((g=t.trial)==null?void 0:g.updateIntervalMs)??t.updateIntervalMs,depthScale:((v=t.trial)==null?void 0:v.depthScale)??t.depthScale};const p=c<l/1.2?t.recoveryDurationMs+s:0,m=n?c>l+no?Math.min(l*4,t.updateIntervalMs+l):p>=Ln?Math.max(l,t.updateIntervalMs-l):t.updateIntervalMs:l,h=c>l+no&&(!n||t.updateIntervalMs>=l*4)?Math.max(.5,t.depthScale-.25):p>=Ln?Math.min(1,t.depthScale+.25):t.depthScale;return{...t,lastFrameMs:e,sampleDurationMs:0,sampleCount:0,recoveryDurationMs:p>=Ln?0:p,updateIntervalMs:m,depthScale:h,trial:m>t.updateIntervalMs||h<t.depthScale?{baselineFrameMs:c,updateIntervalMs:t.updateIntervalMs,depthScale:t.depthScale}:null,adaptationBlocked:!1}},Op=900,ci=.01,Np=.25,Lp=1e3,so=4e3,Fp=10,Cc=2500,Bp="shadow-simulation-raster-dem",Up=200,Ic=.5,kp="shadow-simulation-sky-light",li=100,ao=1e3,oo=100,Sr="carma-shadow-map-style-base",Hp=(t,e=Mo,r=()=>!0,i=()=>"opaque",n=Le.MAX)=>{const a=e.id,s=t;if(typeof s.getTerrain!="function"||typeof s.getSource!="function"||typeof s.setTerrain!="function")return Object.assign(()=>{},{refresh:()=>{}});const o=s.getTerrain(),c=new Map,l=new Map;let u=!1,d=!1,p=!1,m=null,h=!1,g,v=null,y=()=>{},T=null;const b=()=>{m&&(h?delete m.getMeshFrameDelta:m.getMeshFrameDelta=g,m=null,g=void 0,h=!1)},I=()=>{const B=s.terrain;!B||B===m||(b(),typeof B.getMeshFrameDelta=="function"&&(h=!Object.prototype.hasOwnProperty.call(B,"getMeshFrameDelta"),g=B.getMeshFrameDelta,B.getMeshFrameDelta=()=>0,m=B))},A=()=>{var C;const B=s.terrain;!B||B===v||(y(),v=B,y=wp(B,e.tileSize,n,()=>{var k;(k=t.setSourceTileLodParams)==null||k.call(t,9.314,3,e.id)}),(C=t.triggerRepaint)==null||C.call(t))},R=B=>`${B.type}:${String(B.source)}:${String(B["source-layer"])}`,F=()=>{var k;const C=t.getStyle().layers??[];for(const j of C){if(!_l(j))continue;const ae=R(j);let Q=l.get(j.id);const ue=t.getLayoutProperty(j.id,"visibility");!Q||Q.signature!==ae?(Q={signature:ae,value:ue},l.set(j.id,Q)):ue!=="none"&&(Q.value=ue),ue!=="none"&&t.setLayoutProperty(j.id,"visibility","none")}if(r()){t.getLayer(Sr)||(t.addLayer({id:Sr,type:"background",paint:{"background-color":hn.baseColor,"background-opacity":hn.opacity}},(k=C[0])==null?void 0:k.id),p=!0);for(const j of C){if(j.id===Sr||j.type==="custom")continue;const ae=hn.opaqueDrapeProperties.get(j.type);if(!ae)continue;const Q=R(j);let ue=c.get(j.id);const xe=t.getPaintProperty(j.id,ae);!ue||ue.signature!==Q?(ue={signature:Q,property:ae,value:xe},c.set(j.id,ue)):xe!==1&&(ue.value=xe),xe!==1&&t.setPaintProperty(j.id,ae,1)}}},P=B=>{var C;for(const[k,j]of B)try{const ae=(C=t.getStyle().layers)==null?void 0:C.find(({id:Q})=>Q===k);ae&&R(ae)===j.signature&&t.getLayoutProperty(k,"visibility")==="none"&&t.setLayoutProperty(k,"visibility",j.value===void 0?null:j.value)}catch{}B.clear()},U=()=>{var B;for(const[C,k]of c)try{const j=(B=t.getStyle().layers)==null?void 0:B.find(({id:ae})=>ae===C);j&&R(j)===k.signature&&t.getPaintProperty(C,k.property)===1&&t.setPaintProperty(C,k.property,k.value===void 0?null:k.value)}catch{}if(c.clear(),p){p=!1;try{t.getLayer(Sr)&&t.removeLayer(Sr)}catch{}}},O=()=>{if(!(u||d)){d=!0;try{if(!s.getSource(a)&&t.isStyleLoaded()&&t.addSource(a,{type:"raster-dem",tiles:[e.url],tileSize:e.tileSize,minzoom:e.minzoom,maxzoom:e.maxzoom,encoding:e.encoding,bounds:[...e.bounds]}),i()==="labels"?(U(),P(l)):F(),s.getSource(a)){const B=s.getTerrain();((B==null?void 0:B.source)!==a||(B.exaggeration??1)!==1)&&s.setTerrain({source:a,exaggeration:1}),A(),I()}T=null}catch(B){const C=B instanceof Error?B.message:String(B);C!==T&&(T=C,console.error("[shadow-simulation] MapLibre terrain setup failed",B))}finally{d=!1}}},W=()=>{d||O()};return t.on(ve.STYLE_DATA,O),t.on(ve.TERRAIN,W),O(),Object.assign(()=>{if(!u){u=!0,t.off(ve.STYLE_DATA,O),t.off(ve.TERRAIN,W),b(),y(),v=null,U(),P(l);try{o&&s.getSource(o.source)!==void 0?s.setTerrain(o):s.setTerrain(null)}catch{}}},{refresh:()=>{!u&&!d&&O()}})},Dc=(t,e=!1)=>{if(t.userData[fi.OVERLAY])return;t.castShadow=t.userData.disableShadowCasting!==!0;const r=Array.isArray(t.material)?t.material:[t.material];if(t.receiveShadow=r.some(i=>i.visible&&i.colorWrite),!t.userData.isShadowTerrainSurface)for(const i of r)i.shadowSide??(i.shadowSide=_o),zf(i,e)},Tr=(t,e=!1)=>{t.traverseVisible(r=>{const i=r;!i.isMesh&&!i.isInstancedMesh||Dc(i,e)})},zp=t=>t.visible&&t.opacity>0,Vp=(t,e)=>{let r=t;for(;r&&r!==e;){if(!r.visible)return!1;r=r.parent}return(Array.isArray(t.material)?t.material:[t.material]).some(zp)},co=t=>{t.traverse(e=>{const r=e;if(!r.isMesh&&!r.isInstancedMesh)return;const i=Array.isArray(r.material)?r.material:[r.material];for(const n of i)n.dispose()})},Pc=(t,e,r)=>{t.updateMatrixWorld(!0),r==null||r.updateMatrixWorld(!0);const i=r?new Or().setFromProjectionMatrix(new re().multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),r.coordinateSystem,r.reversedDepth):null;let n=e,a=e;const s=new Fe;return t.traverseVisible(o=>{var l,u;const c=o;c.userData[fi.OVERLAY]||!c.isMesh&&!c.isInstancedMesh||!((u=(l=c.geometry)==null?void 0:l.getAttribute("position"))!=null&&u.count)||(c.geometry.boundingBox||c.geometry.computeBoundingBox(),c.geometry.boundingBox&&(s.copy(c.geometry.boundingBox).applyMatrix4(c.matrixWorld),!(i&&!i.intersectsBox(s))&&(n=Math.min(n,s.min.y),a=Math.max(a,s.max.y))))}),[n,a]},Wp=(t,e,r,i)=>{var o;const n=e.filter(c=>c.providesTerrain).flatMap(c=>{var u;const l=(u=c.getViewElevationRange)==null?void 0:u.call(c,r);return l?[l]:[]});if(n.length>0)return[Math.min(...n.map(c=>c[0])),Math.max(...n.map(c=>c[1]))];let[a,s]=Pc(t,i,r);for(const c of e){const l=(o=c.getViewElevationRange)==null?void 0:o.call(c,r);l&&(a=Math.min(a,l[0]),s=Math.max(s,l[1]))}return[a,s]},Gp=[[-1,-1],[-1,1],[1,-1],[1,1]],jp=[[0,1],[1,3],[3,2],[2,0],[4,5],[5,7],[7,6],[6,4],[0,4],[1,5],[2,6],[3,7]],Yp=(t,e,r,i)=>{t.updateMatrixWorld(!0);const n=Math.min(e,r),a=Math.max(e,r),s=[-1,1].flatMap(c=>Gp.map(([l,u])=>new x(l,u,c).unproject(t))),o=s.filter(c=>c.y>=n&&c.y<=a).map(c=>c.clone());for(const[c,l]of jp){const u=s[c],d=s[l],p=d.y-u.y;if(!(Math.abs(p)<=Number.EPSILON))for(const m of[n,a]){const h=(m-u.y)/p;h<0||h>1||o.push(u.clone().lerp(d,h))}}for(const c of o){const l=c.clone().sub(i),u=Math.hypot(l.x,l.z);if(u<=so)continue;const d=so/u;l.x*=d,l.z*=d,c.copy(i).add(l)}return o},$p=(t,e)=>{const r=e.uniformColor!==null&&ze(e.uniformColorMix??1,0,1)>=1;t.traverse(i=>{const n=i;if(!n.userData.isBuilding)return;const a=Array.isArray(n.material)?n.material:[n.material];for(const s of a){e.fullOpacity&&(s.opacity=1,s.transparent=!1,s.depthWrite=!0);const o=s;r&&e.uniformColor&&o.color&&(o.color.set(e.uniformColor),o.vertexColors=!1),s.needsUpdate=!0}})},Kp=(t,e,r)=>{var d;const i=(d=e._originMerc)==null?void 0:d.toLngLat();if(!i)return null;const n=new ls;n.name=`shadow-simulation-copy-${e.id}`;const a=new Map;let s=r,o=!1;const c=()=>{for(const[p,m]of a)p.visible=m;a.clear()},l=()=>{if(o)return;c(),co(n),n.clear(),e.scene.updateMatrixWorld(!0);const p=[];e.scene.traverse(m=>{var g,v;const h=m;!h.isMesh&&!h.isInstancedMesh||(v=(g=h.geometry)==null?void 0:g.getAttribute("position"))!=null&&v.count&&Vp(h,e.scene)&&p.push(h)});for(const m of p){const h=m.clone(!1);h.name=`${m.name||"mesh"}-shadow-simulation-copy`,h.visible=!0,h.matrixAutoUpdate=!1,h.matrix.copy(m.matrixWorld),h.material=Array.isArray(m.material)?m.material.map(g=>g.clone()):m.material.clone(),Dc(h),a.set(m,m.visible),m.visible=!1,n.add(h)}n.visible=n.children.length>0,$p(n,s)},u={id:`shadow-simulation-generic-${e.id}`,originLngLat:[i.lng,i.lat],root:n,update:()=>{},dispose:()=>{o||(o=!0,c(),co(n),n.clear())}};return l(),n.visible?(t.addRuntime(u),{runtime:u,sync:l,updateBuildingAppearance(p){s=p,l()}}):(u.dispose(),null)},qp=t=>{const e=new Fe().setFromObject(t.scene);e.isEmpty()?t.center.set(0,0,0):e.getCenter(t.center)},Xp=(t,e,r)=>{const i=new bc(t),a=i.lights[0].target,s=new ls;s.visible=!1,s.userData[fi.OVERLAY]=!0;const o=new wo(void 0,0);o.name=kp;const c=xf(r);c.mesh.userData[fi.OVERLAY]=!0;const l=new Map;t.traverse(d=>{const p=d;p.isAmbientLight&&l.set(p,p.intensity)});const u={scene:t,controller:i,skyLight:o,atmosphericSky:c,ambientLightIntensities:l,lightTarget:a,sunVector:null,sunVectorRoot:s,center:new x,shadowCameraOffsetMeters:Math.max(Cc,e*1.5),shadowAreaMeters:e,sunVectorLengthMeters:e*Ic,sunVectorVisible:!1,shadowQuality:er,shadowIntensity:1,directionToSun:new x(0,1,0),sunColor:new Ve(16773848),sunIntensity:zr,receiverWorldPoints:[],minimumElevationMeters:0,maximumElevationMeters:0,dirty:!0};return Tr(t),qp(u),t.add(o),t.add(c.mesh),u},Qp=(t,e)=>{t.scene.traverse(i=>{const n=i;n.isAmbientLight&&!t.ambientLightIntensities.has(n)&&t.ambientLightIntensities.set(n,n.intensity)});const r=e.skyIrradianceCoefficients;if((r==null?void 0:r.length)===t.skyLight.sh.coefficients.length){r.forEach((i,n)=>{t.skyLight.sh.coefficients[n].copy(i)}),t.skyLight.intensity=zr;for(const i of t.ambientLightIntensities.keys())i.intensity=0;return}t.skyLight.sh.zero(),t.skyLight.intensity=0;for(const[i,n]of t.ambientLightIntensities)i.intensity=n},lo=(t,e,r=16773848,i)=>{var a;const n=e.clone().normalize();t.directionToSun.copy(n),t.sunColor.set(r),t.lightTarget.position.copy(t.center);for(const s of t.controller.lights)s.target.position.copy(t.center),s.position.copy(n).multiplyScalar(t.shadowCameraOffsetMeters).add(t.center),s.color.copy(t.sunColor);(a=t.sunVector)==null||a.update(t.center,n,t.sunVectorLengthMeters),t.sunVectorRoot.visible=t.sunVectorVisible&&!!t.sunVector,t.sunIntensity=i??zr;for(const s of t.controller.lights)s.intensity=t.sunIntensity;t.lightTarget.updateMatrixWorld(!0);for(const s of t.controller.lights)s.updateMatrixWorld(!0);t.controller.invalidate(),t.dirty=!0},Zp=t=>{var e;for(const[r,i]of t.ambientLightIntensities)r.intensity=i;t.scene.remove(t.skyLight),t.scene.remove(t.atmosphericSky.mesh),t.scene.remove(t.sunVectorRoot),(e=t.sunVector)==null||e.dispose(),t.atmosphericSky.dispose(),t.controller.dispose()},Jp=(t,e={})=>{var $s,Ks,qs,Xs,Qs;const{shadowAreaMeters:r,terrain:i,mapLibreTerrain:n,terrainQuality:a=Le.MAX}=e;let s=i;const o=r??Op,c=t.getLight();let l=!0;const u=()=>{const f=Ie(t).filter(S=>S.providesTerrain===!0);return f.length>0&&f.every(S=>S.mapStyleProjectionBlend==="overlay")?"labels":"opaque"},d=Hp(t,n??Mo,()=>l,u,a),p=()=>{C.setMeshLabelStyle(u()==="labels")};let m=null,h={fullOpacity:!0,uniformColor:null,uniformColorMix:0,textureSaturation:1,textureColorCorrection:!0},g=1,v=hs,y;const T=new WeakMap;let b=null,I={useTransmittanceLut:!0,useIrradianceLut:!0},A=!1,R=!1,F=Number.NEGATIVE_INFINITY,P=null,U=null,O=null,W=new Ve((($s=s==null?void 0:s.material)==null?void 0:$s.color)??ms);const te=()=>{var f,S,_,M;if(l){O==null||O(),O=null,(S=(f=C.layer).setMapStyleProjectionVisible)==null||S.call(f,!0);return}(M=(_=C.layer).setMapStyleProjectionVisible)==null||M.call(_,!1),O??(O=yl(t))},B=t.getCenter(),C=pl(t),k={longitude:B.lng,latitude:B.lat,altitudeMeters:0},j=((qs=(Ks=C.layer).projectLngLatToScene)==null?void 0:qs.call(Ks,[B.lng,B.lat],li))??new x(0,li,0),ae={observer:k,scenePosition:j},Q=new vf;let ue=()=>{},xe=f=>ue(f),We=null,N=0;const H=f=>{if(!s)return null;const S=t.getCenter(),{errorTargetPixels:_,shadowLevelOffset:M,minimumLevel:z,maximumLevel:L,maxSelectionTiles:V,requestConcurrency:G,maxCacheBytes:oe,maxCachedMeshes:ce,meshSegments:J,noDataHeightMeters:pe,heightRangeMeters:q,material:Te,...st}=s;return Sl(`${Bp}-${++N}`,st,f??[S.lng,S.lat],{errorTargetPixels:_??br,shadowLevelOffset:M,minimumLevel:z,maximumLevel:L,maxSelectionTiles:V,requestConcurrency:G,maxCacheBytes:oe,maxCachedMeshes:ce,meshSegments:J??st.tileSize,noDataHeightMeters:pe,heightRangeMeters:q,material:Te,receivesMapStyleTexture:!0,onContentChanged:Ce=>xe(Ce),onError:Ce=>{const je=Ce instanceof Error?Ce.message:String(Ce);je!==We&&(We=je,console.error("[shadow-simulation] Raster DEM terrain runtime failed",Ce))}})},fe=()=>Ie(t).some(f=>f.providesTerrain===!0),Se=()=>Ie(t).every(f=>{var S;return!f.providesTerrain||(((S=f.isMainViewReady)==null?void 0:S.call(f))??!0)});let Me=Ie(t).filter(f=>f.providesTerrain),Y=fe()?null:H(),Be=Y===null;Y&&C.layer.addRuntime(Y);const w=Xp(C.layer.getScene(),o,W),ir=new x;let Pe=0,Dt=0;const ye=$f({getRequest:()=>{var _;if(A||!s||!Y||!Be||mr(t)||Re||R||Qe!==0||!it||!Vt||!Oe)return null;const f=(_=Y.getIdlePrefetchAvailability)==null?void 0:_.call(Y);if(!(f!=null&&f.ready))return null;const S=Y;return{key:JSON.stringify([N,Pe,Dt,Oe.renderCamera.projectionMatrix.elements,Oe.renderCamera.matrixWorldInverse.elements,Oe.viewport.x,Oe.viewport.y]),run:async M=>{var L;if(await S.prefetchIdleTerrain(M),M.aborted||!Ae()||!X||!Oe||!C.layer.runIdleRender||mt.size>0||ft().some(V=>V!==S&&V!==Gt)||Mt.some(({id:V})=>!/^\d+:[-\d]+:[-\d]+$/.test(V)))return;const z=((L=S.getIdleShadowRegions)==null?void 0:L.call(S))??[];z.length===0||!S.prepareIdleShadowRegion||(await X.prewarm({cells:Pu(Mt),frame:Oe,lighting:{directionToSun:w.directionToSun,color:w.sunColor,intensity:w.sunIntensity,shadowIntensity:w.shadowIntensity},targetPixels:rt[w.shadowQuality].shadowTexelErrorPixels,samples:hr(),signal:M,prepare:async(V,G)=>{const oe=Ou(V.receiverBounds,z);return oe===null?{covered:!1,group:null,isCurrent:()=>!1,dispose:()=>{}}:S.prepareIdleShadowRegion({receiverBounds:V.receiverBounds,casterBounds:V.casterBounds,terrainLevel:oe},G)}}),M.aborted||Wt())}}}});let ht=null,qi="";const Vr=(f,S,_)=>{const M=`${f}:${S}`;M!==qi&&(qi=M,console.error(`[SHADOW] Atmospheric update rejected; retaining last valid frame (${f}: ${S})`,{phase:f,reason:S,..._}))},Oc=()=>{qi=""},Ue=()=>{ye.cancel(),Pe+=1,Dt+=1},Is=f=>{P=null,F=performance.now();const S=`#${f.color.getHexString()}`;if(C.setLocationLabelColor(S),!t.isStyleLoaded())return;const _=[1.5,f.azimuthDegrees,90-f.elevationDegrees],M=ze(f.relativeIntensity,0,1),z=t.getLight(),L=z.position;z.anchor==="map"&&Array.isArray(L)&&L.length===_.length&&L.every((V,G)=>V===_[G])&&z.color===S&&z.intensity===M||t.setLight({anchor:"map",position:_,color:S,intensity:M})},Wr=()=>{U!==null&&(globalThis.clearTimeout(U),U=null);const f=P;f&&Is(f)},Ds=f=>{if(P=f,!R&&!Re){Wr();return}const S=performance.now()-F;if(S>=ao){Wr();return}U===null&&(U=globalThis.setTimeout(()=>{U=null;const _=P;_&&Is(_)},ao-S))},kt=f=>{const S={longitude:B.lng,latitude:B.lat,altitudeMeters:li},_=lf(f.instant,S,ae);if(_)return Vr("sunlight input",_,{observer:S,skyReference:ae}),b;Q.ensure(()=>{if(A||!m)return;Ue();const L=kt(m);L&&Ds(L),t.triggerRepaint()},I),Q.ensureSky(()=>{A||!m||(Ue(),kt(m),t.triggerRepaint())});let M;try{M=Q.evaluate(f.instant,S,I,ae)}catch(L){return Vr("sunlight generation","generator threw",{observer:S,error:L}),b}const z=uf(M);return z?(Vr("sunlight output",z,{observer:S,sample:M}),b):(Oc(),b=M,w.atmosphericSky.update(M.skyFrame,Q.skyTextures),Qp(w,M),lo(w,M.directionToSun,M.radiance,zr),M)};ue=f=>{A||(ye.cancel(),X==null||X.invalidateContent(f),w.controller.invalidate(),w.dirty=!0)};const mt=new Map,ft=()=>{const f=Ie(t);return Y&&!f.includes(Y)?[Y,...f]:f};let Ht=null,pt=null,Ge=null,gt=null,Ps=[];const Os=()=>ft().flatMap(f=>{var S;return((S=f.getActiveTileVolumes)==null?void 0:S.call(f))??[]}),nr=()=>Ht??Os(),Ns=(f,S=ci*4)=>{if(!fe())return;const _=nr(),M=f?eo(f,_,v):Math.max(v,..._.filter(({loadReason:z})=>z!=="shadow").map(({errorPixels:z})=>z).filter(z=>Number.isFinite(z)));return pp({stageErrorPixels:M,targetErrorPixels:v,groundTexelTargetMeters:S,finalBiasMeters:ci,maximumCoarseBiasMeters:Np})},Ls=f=>{const S=Ht,_=pt,M=Ge,z=gt;if(Ht=S??Os(),pt=_??new Map,Ge=M??new Map,gt=z??new Map,!S){const L=hp(Ps,Ht);L.length>0&&(X==null||X.invalidateContent(L),or.length=0),Ps=Ht}try{return f()}finally{Ht=S,pt=_,Ge=M,gt=z}};let Re=!1,zt=null,sr=null;const Fs=new WeakMap,Nc=f=>{var M,z,L;if(!f)return"none";const S=t.getCenter(),_=t.getCanvas();return[Math.round(S.lng*1e7),Math.round(S.lat*1e7),Math.round((((M=t.getZoom)==null?void 0:M.call(t))??0)*1e4),Math.round((((z=t.getBearing)==null?void 0:z.call(t))??0)*1e3),Math.round((((L=t.getPitch)==null?void 0:L.call(t))??0)*1e3),`${_.clientWidth||_.width}x${_.clientHeight||_.height}`,(m==null?void 0:m.azimuthDegrees)??"no-sun",(m==null?void 0:m.elevationDegrees)??"no-sun",w.shadowQuality].join(";")},Gr=f=>{var G,oe,ce,J,pe;sr=f;const S=Nc(f),_=Oe==null?void 0:Oe.renderCamera,M=f&&_?new Or().setFromProjectionMatrix(new re().multiplyMatrices(_.projectionMatrix,_.matrixWorldInverse),_.coordinateSystem,_.reversedDepth):null,z=new Fe,L=M?(G=Y==null?void 0:Y.getActiveTileVolumes)==null?void 0:G.call(Y).filter(q=>(z.min.fromArray(q.minimum),z.max.fromArray(q.maximum),M.intersectsBox(z))):void 0,V=[...Ie(t),...Y?[Y]:[]];for(const q of new Set(V)){if((oe=q.setShadowStagePresentationGate)==null||oe.call(q,!1),!q.providesTerrain){(ce=q.setErrorTarget)==null||ce.call(q,(s==null?void 0:s.errorTargetPixels)??br),(J=q.setShadowView)==null||J.call(q,f?{...f,terrainReceivers:L}:null);continue}Fs.get(q)!==S&&(Fs.set(q,S),(pe=q.setShadowView)==null||pe.call(q,f))}},Xi=f=>{zt=f,Re||Gr(f)};let Qi=Number.NEGATIVE_INFINITY,Xe=null,vt=null,Zi=null,Ji="",it=!0,en={},Ee=mn(en),nt=null;const jr=()=>({format:Ee.shadowBufferFormat,msaaSamples:Ee.shadowBufferLayout===pi.TILED?0:Cp(Ee,(Ee.shadowBufferFormat===Tt.SDR_8?nt==null?void 0:nt.sdrSamples:nt==null?void 0:nt.hdrSamples)??[0,2,4])});let ar=jr(),Qe=0,tn=!1,Yr=!1;const or=[];let Ze=!0,rn=[],Bs="",yt=Fn(),$r=Number.POSITIVE_INFINITY,Vt=!0,cr=to(4096),Oe=null,X=null,nn=null,Mt=[];const Ae=()=>Ee.shadowBufferLayout===pi.TILED,lr=()=>{X==null||X.dispose(),X=null,nn=null,Mt=[]},Wt=()=>{if(A||!vt||!io(t))return;const f=performance.now()-Qi;if(f<oo){Xe??(Xe=globalThis.setTimeout(()=>{Xe=null,Wt()},oo-f));return}Xe!==null&&(globalThis.clearTimeout(Xe),Xe=null);const S=Ee.shadowBufferLayout,_=Ee.shadowSunDiscSamples,M=Ae()?(X==null?void 0:X.stats)??null:null,z=JSON.stringify([S,_,M]);Zi===vt&&Ji===z||(Qi=performance.now(),Zi=vt,Ji=z,Dp(t,{...vt,bufferLayout:S,sunDiscSamples:_,tiledStats:M}))};w.controller.setSoftSun(it);const ur=(f,S)=>Math.round(f/S)*S,Lc=f=>{var _,M,z;const S=t.getCenter();return[ur(S.lng,1e-7),ur(S.lat,1e-7),ur(((_=t.getZoom)==null?void 0:_.call(t))??0,1e-4),ur(((M=t.getBearing)==null?void 0:M.call(t))??0,.001),ur(((z=t.getPitch)==null?void 0:z.call(t))??0,.001),`${f.viewport.x}x${f.viewport.y}`].join(";")},dr=(f=!0,S=!0,_)=>{var oe,ce,J,pe;const M=t.getCenter(),z=(Y==null?void 0:Y.getElevation(M.lng,M.lat))??0,L=(ce=(oe=C.layer).projectLngLatToScene)==null?void 0:ce.call(oe,[M.lng,M.lat],z);if(!L){m&&kt(m),S&&t.triggerRepaint();return}w.center.copy(L),ht??(ht=Pc(w.scene,L.y));const[V,G]=ht;if(_){const q=Yp(_.renderCamera,V,G,L);if(q.length>0){const Te=new Fe().setFromPoints(q).getSize(new x),st=Math.max(...q.map(Ce=>Ce.distanceTo(L)));w.sunVectorLengthMeters=Math.min(Te.x,Te.z)*Ic,w.shadowAreaMeters=Math.max(r??0,Fp,st*2),rn=q}}else Ze=!0;if(w.shadowCameraOffsetMeters=Math.max(Cc,w.shadowAreaMeters*1.5),w.receiverWorldPoints=rn,w.minimumElevationMeters=V,w.maximumElevationMeters=G,w.dirty=!0,m&&(f||!b))kt(m);else{w.lightTarget.position.copy(w.center);for(const q of w.controller.lights)q.target.position.copy(w.center),q.target.updateMatrixWorld(!0);(J=w.sunVector)==null||J.root.position.copy(w.center),(pe=w.sunVector)==null||pe.root.updateMatrixWorld(!0)}S&&t.triggerRepaint()},Gt={id:"shadow-simulation-controller",originLngLat:[t.getCenter().lng,t.getCenter().lat],root:new ls,updatePriority:Up,update(f){var Te,st;Oe=f;const S=(st=(Te=C.layer).getRenderer)==null?void 0:st.call(Te);S&&!nt&&(nt=Ap(S),ar=jr(),cr=to(Math.min(nt.maxTextureSize,nt.maxRenderbufferSize)),w.controller.setMaxShadowMapSize(cr.maxShadowMapSize),$r=cr.maxAccumulationPixels),Vt=f.viewport.x*f.viewport.y<=$r,yt=Bn(yt,performance.now(),Re,{enabled:Ee.shadowAdaptiveQuality,allowCadenceReduction:!Ae()});const _=Math.max(0,f.lodCamera.position.y-f.lookTarget.y),M=li+_,z=j.y+_;![...f.lodCamera.matrixWorld.elements,...f.lodCamera.projectionMatrix.elements].every(Number.isFinite)||!Number.isFinite(M)||!Number.isFinite(z)?Vr("render camera","local Three.js camera matrix or altitude is invalid",{altitudeMeters:M,cameraHeightAboveTargetMeters:_,matrixWorld:f.lodCamera.matrixWorld.elements,projectionMatrix:f.lodCamera.projectionMatrix.elements}):(w.atmosphericSky.updateViewCamera(f.lodCamera),w.atmosphericSky.updateObserverScenePosition(ir.set(j.x,z,j.z)));const V=Lc(f);if(Ze||V!==Bs){if(Re)return;performance.now(),Bs=V,ht=Re?ht??[w.minimumElevationMeters,w.maximumElevationMeters]:Wp(w.scene,Ie(t),f.renderCamera,w.center.y),dr(!1,!1,f),Ze=!1}if(!w.dirty)return;w.sunVectorVisible&&w.sunVector&&w.sunVector.root.cone.position.y!==w.sunVectorLengthMeters&&lo(w,w.directionToSun,w.sunColor,w.sunIntensity),Pe+=1;const G=nr(),oe=G.flatMap(({minimum:Ce,maximum:je})=>Oo(f.renderCamera,new Fe(new x(...Ce),new x(...je))));if(w.receiverWorldPoints=oe.length>0?oe:rn,w.receiverWorldPoints.length===0||!m){Xi(null),vt=null,Nn(t);return}if(Ae()){Mt=Du(G.filter(({loadReason:je})=>je!=="shadow").map(({id:je,minimum:Xr,maximum:cn,receiverObjectId:ln})=>({id:je,receiverObjectId:ln,bounds:new Fe(new x(...Xr),new x(...cn))})));const Ce=Eu(Mt,f.renderCamera);Ce.length>0&&(w.receiverWorldPoints=[...Ce])}const ce=w.controller.update({maxReceiverBiasMeters:Ns(),receiverWorldPoints:w.receiverWorldPoints,receiverAnchorWorldPosition:w.center,minimumElevationMeters:w.minimumElevationMeters,maximumElevationMeters:w.maximumElevationMeters,directionToSun:w.directionToSun,color:w.sunColor,intensity:w.sunIntensity,shadowIntensity:w.shadowIntensity,quality:w.shadowQuality,mapTexelBudget:Ep(cr.maxShadowMapSize,w.shadowQuality,f.viewport.x*f.viewport.y,Re?yt.depthScale:1),groundTexelFit:Ee.shadowGroundTexelFit,stabilizeMapSize:Re});if(w.dirty=!1,!ce){Xi(null),vt=null,Nn(t);return}const J=ce.camera,pe=w.controller.lights[0].shadow.camera;Xi({camera:pe,casterAngularRadiusRadians:it?Er:0,shadowMapSize:{width:J.shadowMapWidth,height:J.shadowMapHeight}});const q=io(t);if(J&&q){f.lodCamera.updateMatrixWorld(!0),f.lodCamera.updateProjectionMatrix();const Ce=ft().flatMap(je=>{var Xr;return(((Xr=je.getActiveTileVolumes)==null?void 0:Xr.call(je))??[]).map(({id:cn,loadReason:ln,minimum:Wc,maximum:Gc})=>({id:cn,loadReason:ln,minimum:Wc,maximum:Gc}))});vt={bufferLayout:Ee.shadowBufferLayout,sunDiscSamples:Ee.shadowSunDiscSamples,tiledStats:null,cameraRangeMeters:pe.position.distanceTo(w.controller.lights[0].target.position),leftMeters:J.leftMeters,rightMeters:J.rightMeters,bottomMeters:J.bottomMeters,topMeters:J.topMeters,nearMeters:J.nearMeters,farMeters:J.farMeters,projectionMatrixElements:J.projectionMatrixElements,shadowMapWidth:J.shadowMapWidth,shadowMapHeight:J.shadowMapHeight,minimumElevationMeters:w.minimumElevationMeters,maximumElevationMeters:w.maximumElevationMeters,sceneAnchorPositionElements:w.center.toArray(),mainCamera:{viewMatrixElements:[...f.lodCamera.matrixWorldInverse.elements],projectionMatrixElements:[...f.lodCamera.projectionMatrix.elements],nearMeters:f.lodCamera.near,farMeters:f.lodCamera.far,viewportWidth:f.viewport.x,viewportHeight:f.viewport.y},tileVolumes:Ce,shadow:ce,atmosphericSunlight:b?{azimuthDegrees:b.azimuthDegrees,elevationDegrees:b.elevationDegrees,relativeIntensity:b.relativeIntensity,color:`#${b.color.getHexString()}`,transmittanceReady:b.atmosphericTransmittanceReady,irradianceReady:b.atmosphericIrradianceReady}:null},Wt()}},dispose:()=>{}};C.layer.addRuntime(Gt);const hr=()=>Ee.shadowSunDiscSamples,Us=()=>{var _,M;if(!Ae()||!Oe||w.directionToSun.y<=0)return null;const f=(M=(_=C.layer).getRenderer)==null?void 0:M.call(_);if(!f)return null;let S=!1;if(!X||nn!==f){const z=Mt;lr(),Mt=z,nn=f,X=new up(w.scene,f,{light:w.controller.lights[0],sky:w.atmosphericSky.mesh,overlay:w.sunVectorRoot,maximumMapSize:cr.maxShadowMapSize,isCorridorReady:(L,V,G)=>{const oe=On(L,V,G),ce=pt==null?void 0:pt.get(oe);if(ce!==void 0)return ce;const J=ft().every(pe=>{var q;return((q=pe.isShadowRegionReady)==null?void 0:q.call(pe,L,V,G))??(pe.getRequestDemand?pe.getRequestDemand()===0:!pe.providesTerrain||!mr(t))});return pt==null||pt.set(oe,J),J},receiverStageError:L=>{const V=On(L),G=gt==null?void 0:gt.get(V);if(G!==void 0)return G;const oe=eo(L,nr(),fe()?v:(s==null?void 0:s.errorTargetPixels)??br);return gt==null||gt.set(V,oe),oe},receiverBiasLimit:(L,V)=>Ns(L,V)??ci,onPresentedPages:(L,V)=>{var oe;const G=mp(nr(),V.map(({id:ce,receiverBounds:J})=>({id:ce,bounds:J})),L.map(({id:ce,receiverBounds:J})=>({id:ce,bounds:J})));if(G.length!==0)for(const ce of ft())(oe=ce.acknowledgeShadowStage)==null||oe.call(ce,G)},corridorRevision:(L,V,G)=>{var q;const oe=On(L,V,G),ce=Ge==null?void 0:Ge.get(oe);if(ce!==void 0)return ce;const J=[];for(const Te of ft()){if(Te===Gt)continue;const st=(q=Te.getShadowRegionRevision)==null?void 0:q.call(Te,L,V,G);if(!st)return Ge==null||Ge.set(oe,null),null;J.push(JSON.stringify([Te.id,st]))}const pe=J.length?JSON.stringify(J.sort()):null;return Ge==null||Ge.set(oe,pe),pe},dateTimeKey:()=>(m==null?void 0:m.instant.toISOString())??null,worldBasis:()=>{const L=C.layer.projectSceneToLngLat([0,0,0]);if(!L)throw new Error("Shared scene origin is not initialized");const V=zl.MercatorCoordinate.fromLngLat(L,0);return fp(V.x,V.y,V.meterInMercatorCoordinateUnits())},requestRepaint:()=>t.triggerRepaint(),visualEpoch:()=>Dt,auditCorridors:L=>{const V=nr(),G=ft();return L.map(({id:oe,casterBounds:ce,receiverBounds:J})=>gp({id:oe,casterBounds:ce,sunElevationDegrees:(m==null?void 0:m.elevationDegrees)??0,volumes:V,regions:G.flatMap(pe=>{var Te;const q=(Te=pe.getShadowRegionDiagnostics)==null?void 0:Te.call(pe,ce,void 0,J);return q?[q]:[]})}))},runIdleRender:L=>{var V,G;return((G=(V=C.layer).runIdleRender)==null?void 0:G.call(V,L))??!1}}),S=!0}return!Re||S?X.update(Mt,Oe,{maxReceiverBiasMeters:fe()?ci:void 0,directionToSun:w.directionToSun,color:w.sunColor,intensity:w.sunIntensity,shadowIntensity:w.shadowIntensity},rt[w.shadowQuality].shadowTexelErrorPixels):X.updatePresentation(Oe),X},Fc=dp(),Kr=()=>Ae()&&Fc(ft()),ks={onSettled:ye.onSettled,get options(){return ar},get maxRenderTargetPixels(){return $r},get rounds(){return hr()},epoch:()=>Pe,visualEpoch:()=>Dt,pending:()=>Vt&&it&&!R&&(!Be||Kr()||!Ae()&&!Se()||!Ae()&&mr(t)||Re||!Ae()&&Qe!==0),active:()=>Vt&&it&&Be&&!Kr()&&(Ae()||Se())&&(Ae()||!mr(t))&&!Re&&!R&&(Ae()||Qe===0)&&m!==null&&zt!==null&&w.receiverWorldPoints.length>0,retainSettledFrame:()=>Vt&&it&&m!==null&&zt!==null&&w.receiverWorldPoints.length>0,prepareRound:f=>{Ae()||w.controller.applySunDiscSample(f,hr())},finishRound:()=>w.controller.restoreSunDiscCenter(),get renderProgressive(){if(Ae())return(f,S)=>!it||R||!Vt?null:Ls(()=>{if(Kr())return null;const _=Us();if(!_)return null;const M=_.renderProgressive(f,{...S,samples:hr(),maxRenderTargetPixels:$r,options:ar});return Wt(),M})},renderScene:(f,S)=>!it||R||!Ae()?!1:Ls(()=>{if(Kr())return!1;const _=Us();if(!_)return!1;const M=_.render(f,S,hr(),!Re);return Wt(),M})};(Qs=(Xs=C.layer).setAccumulationController)==null||Qs.call(Xs,ks);const qr=()=>{ht=null,Ze=!0,dr()};xe=f=>{ue(f),qr()};const Hs=()=>{ye.cancel(),X==null||X.pausePending(),yt=Bn(yt,performance.now(),!1),Re=!0,Ze=!0},sn=()=>{ye.cancel(),Ze=!0},zs=()=>{Re=!1,yt=Bn(yt,performance.now(),!1),tn?(tn=!1,on()):qr(),b&&(P=b,Wr()),sr!==zt&&Gr(zt)},Vs=()=>{sn(),t.triggerRepaint()};t.on(ve.MOVE_START,Hs),t.on(ve.MOVE,sn),t.on(ve.MOVE_END,zs),t.on(ve.RESIZE,Vs);const an=f=>{f.ready.then(S=>{!S||A||Y!==f||(Be=!0,qr(),t.triggerRepaint())})},Bc=()=>{var M,z,L,V;const f=Ie(t).filter(G=>G.providesTerrain);if(f.length!==Me.length||f.some(G=>!Me.includes(G))){Me=f,lr(),(z=(M=C.layer).setAccumulationController)==null||z.call(M,null),(V=(L=C.layer).setAccumulationController)==null||V.call(L,ks);for(const G of w.controller.lights)G.shadow.map&&(At(G.shadow.map),G.shadow.map=null);Ue()}const S=fe();if(!s)return;if(S){ye.cancel(),Be=!0;const G=Y;Y=null,G&&C.layer.hasRuntime(G.id)&&C.layer.removeRuntime(G.id),ht=null,Ze=!0;return}if(Y)return;const _=H();_&&(ye.cancel(),Be=!1,Y=_,_.setMaterialColor(`#${W.getHexString()}`),_.setShadowView(sr),C.layer.addRuntime(_),an(_),ht=null,Ze=!0)};Y&&an(Y),dr();const Ws=()=>{if(A)return;const f=new Set(wl(t));for(const[S,_]of mt)f.has(S)||(C.layer.removeRuntime(_.runtime.id),mt.delete(S));for(const S of f){const _=mt.get(S);if(_){_.sync();continue}if(!S.scene)continue;const M=Kp(C.layer,S,h);M&&mt.set(S,M)}Tr(C.layer.getScene(),fe()),qr(),t.triggerRepaint()},Uc=gl(t,Ws);Ws(),p();const on=()=>{var f,S,_;if(!A){Qe&&(window.clearTimeout(Qe),Qe=0),Yr?X==null||X.invalidateContent():or.length>0&&(X==null||X.invalidateContent(or)),Yr=!1,or.length=0,ye.cancel(),Bc(),d.refresh();for(const M of Ie(t))M.providesTerrain&&((f=M.setErrorTarget)==null||f.call(M,v),(!T.has(M)||T.get(M)!==y)&&((S=M.setCacheBudget)==null||S.call(M,y),T.set(M,y))),(_=M.setShadowSimulationStyle)==null||_.call(M,h);Gr(sr),mt.size>0&&Tr(C.layer.getScene(),fe()),w.controller.invalidate(),w.dirty=!0,Ze=!0,ht=null,t.triggerRepaint()}},kc=bo(t,f=>{if(A)return;const S=f==null?void 0:f.bounds;for(const _ of(f==null?void 0:f.roots)??[])Tr(_,fe());if((S==null?void 0:S.length)===0){t.triggerRepaint();return}if(S===void 0?Yr=!0:S.length>0&&or.push(...S.map(_=>_.clone())),ye.cancel(),S===void 0&&ft().some(_=>_!==Gt&&!_.getActiveTileVolumes)&&(Yr=!0),Re){tn=!0,t.triggerRepaint();return}t.triggerRepaint(),!Qe&&(Qe=window.setTimeout(()=>{Qe=0,on()},Lp))}),Hc=vl(t,()=>{mr(t)&&ye.cancel(),A||t.triggerRepaint()});on();const Gs=f=>{const S=b??kt(f);S&&Ds(S)},zc=f=>{(m==null?void 0:m.instant.getTime())!==f.instant.getTime()&&(X==null||X.cancelPending(!0),Ue(),m=f,dr(),Gs(f))},js=()=>{A||m&&Gs(m)};t.on(ve.STYLE_LOAD,js);const Ys=()=>{Qi=Number.NEGATIVE_INFINITY,w.dirty=!0,t.triggerRepaint()},Vc=Ip(t,f=>{f?Ys():(Xe!==null&&globalThis.clearTimeout(Xe),Xe=null,vt=null,Zi=null,Ji="")});return{updateSolarPosition:zc,updateMeshCacheBudget(f){var _;const S=f!==void 0&&Number.isFinite(f)&&f>0?f:void 0;if(y!==S){y=S;for(const M of Ie(t))M.providesTerrain&&((_=M.setCacheBudget)==null||_.call(M,S),T.set(M,S));t.triggerRepaint()}},updateTerrain(f){if(s===f||(ye.cancel(),s=f,!f||fe()))return;const S=Y,_=H(S==null?void 0:S.originLngLat);_&&(_.setMaterialColor(`#${W.getHexString()}`),_.setShadowView(sr),S&&_.adoptPresentation(S),Y=_,C.layer.addRuntime(_),S&&C.layer.removeRuntime(S.id),an(_),ht=null,Ze=!0,Ue(),xe(),t.triggerRepaint())},updateTerrainColor(f){const S=new Ve(f);W.equals(S)||(Ue(),Y==null||Y.setMaterialColor(f),w.atmosphericSky.updateGroundAlbedo(S),W=S)},updateMeshErrorTarget(f){var S;if(v!==f){v=f;for(const _ of Ie(t))_.providesTerrain&&((S=_.setErrorTarget)==null||S.call(_,f));t.triggerRepaint()}},updateBuildingAppearance(f){var S;if(!(h.fullOpacity===f.fullOpacity&&h.uniformColor===f.uniformColor&&(h.uniformColorMix??1)===(f.uniformColorMix??1)&&(h.textureSaturation??1)===(f.textureSaturation??1)&&(h.textureColorCorrection??!1)===(f.textureColorCorrection??!1))){Ue(),X==null||X.invalidateContent(),h=f;for(const _ of mt.values())_.updateBuildingAppearance(f);for(const _ of Ie(t))(S=_.setShadowSimulationStyle)==null||S.call(_,f);Tr(C.layer.getScene(),fe()),w.controller.invalidate(),w.dirty=!0,t.triggerRepaint()}},updateShadowQuality(f){w.shadowQuality!==f&&(Ue(),w.shadowQuality=f,Ee=mn(en,f),ar=jr(),yt=Fn(f),w.dirty=!0,dr(),w.controller.invalidate())},updateRenderQuality(f){const S=Ee,_=mn(f,w.shadowQuality);en={...f},Ee=_;const M=S.shadowAdaptiveQuality!==_.shadowAdaptiveQuality;(M||S.shadowBufferLayout!==_.shadowBufferLayout)&&(yt=Fn(w.shadowQuality)),!(!M&&S.shadowBufferLayout===_.shadowBufferLayout&&S.shadowBufferFormat===_.shadowBufferFormat&&S.shadowSunDiscSamples===_.shadowSunDiscSamples&&S.shadowMsaaSamples===_.shadowMsaaSamples&&S.shadowGroundTexelFit===_.shadowGroundTexelFit)&&(ar=jr(),Ue(),S.shadowBufferLayout!==_.shadowBufferLayout&&(lr(),Ze=!0),(M||S.shadowGroundTexelFit!==_.shadowGroundTexelFit||S.shadowBufferLayout!==_.shadowBufferLayout)&&(w.dirty=!0,w.controller.invalidate()),Wt(),t.triggerRepaint())},updateSoftSunShadows(f){it!==f&&(Ue(),it=f,lr(),w.controller.setSoftSun(f),w.controller.invalidate(),w.dirty=!0,t.triggerRepaint())},updateTimeAnimating(f){R!==f&&(ye.cancel(),R=f,f&&(X==null||X.pausePending()),f||(Wr(),w.dirty=!0),t.triggerRepaint())},refreshProjectionDebug:Ys,updateShadowIntensity(f){const S=ze(f,0,1);if(g!==S){Ue(),g=S,w.shadowIntensity=g;for(const _ of w.controller.lights)_.shadow.intensity=g;t.triggerRepaint()}},updateMapStyleContentVisibility(f){l!==f&&(l=f,te(),t.triggerRepaint())},updateMapStyleElevationVisibility(f,S){C.setMapStyleElevationVisibility(f,S),t.triggerRepaint()},updateMapStyleLabelOverlayVisibility(f){C.setPointLabelOverlayVisible(f),t.triggerRepaint()},updateSunDebugVectorVisibility(f){w.sunVectorVisible!==f&&(Ue(),w.sunVectorVisible=f,w.sunVectorRoot.visible=f&&!!m,f?(w.scene.add(w.sunVectorRoot),Ai(async()=>{const{buildSunVector:S}=await import("./shadow-sun-vector-BJy7WQzg.js");return{buildSunVector:S}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10])).then(({buildSunVector:S})=>{if(A||!w.sunVectorVisible||w.sunVector)return;const _=S();w.sunVector=_,w.sunVectorRoot.add(_.root),_.update(w.center,w.directionToSun,w.sunVectorLengthMeters),_.root.visible=!0,w.sunVectorRoot.visible=!!m,t.triggerRepaint()}).catch(S=>{A||console.error("Unable to load sun-vector diagnostics",S)})):(w.scene.remove(w.sunVectorRoot),w.sunVector&&(w.sunVectorRoot.remove(w.sunVector.root),w.sunVector.dispose(),w.sunVector=null)),t.triggerRepaint())},updateAtmosphericLutUsage(f){I.useTransmittanceLut===f.useTransmittanceLut&&I.useIrradianceLut===f.useIrradianceLut||(Ue(),I=f,b=null,m&&(kt(m),ue()),t.triggerRepaint())},dispose(){var f,S,_,M,z;if(!A){A=!0,ye.dispose(),Vc(),lr(),Xe!==null&&(globalThis.clearTimeout(Xe),Xe=null),vt=null,Qe&&window.clearTimeout(Qe),U!==null&&(globalThis.clearTimeout(U),U=null),Nn(t),t.off(ve.STYLE_LOAD,js),t.off(ve.MOVE_START,Hs),t.off(ve.MOVE,sn),t.off(ve.MOVE_END,zs),t.off(ve.RESIZE,Vs),Uc(),kc(),Hc(),zt=null,Gr(null);for(const L of Ie(t))(f=L.setShadowSimulationStyle)==null||f.call(L,null);for(const L of mt.values())C.layer.hasRuntime(L.runtime.id)&&C.layer.removeRuntime(L.runtime.id);mt.clear();try{O==null||O()}catch{}O=null,(_=(S=C.layer).setMapStyleProjectionVisible)==null||_.call(S,!0),d(),C.layer.hasRuntime(Gt.id)&&C.layer.removeRuntime(Gt.id),Y&&C.layer.hasRuntime(Y.id)&&C.layer.removeRuntime(Y.id),Q.dispose(),Zp(w),(z=(M=C.layer).setAccumulationController)==null||z.call(M,null),C.release();try{t.isStyleLoaded()&&t.setLight(c)}catch{}}}}},eg=({libreMap:t,shadowAreaMeters:e,terrain:r,mapLibreTerrain:i,terrainQuality:n,location:a,state:s,dateState:o})=>{const c=$.useRef(null),l=$.useMemo(()=>Gl(r,ia(s.shadowQuality),s.terrainErrorTarget),[r,s.shadowQuality,s.terrainErrorTarget]),u=$.useRef(l);u.current=l;const[d,p]=$.useState(0),m=$.useMemo(()=>us(o,a),[o,a]);return $.useEffect(()=>{if(!t||!s.enabled)return;let h=null,g=null,v=null;const y=()=>{t.off(ve.STYLE_DATA,T),t.off(ve.STYLE_LOAD,T),t.off(ve.IDLE,T)},T=()=>{h||g!==null||v!==null||!t.isStyleLoaded()||(g=requestAnimationFrame(()=>{g=null,v=setTimeout(()=>{v=null,t.isStyleLoaded()&&(y(),h=Jp(t,{shadowAreaMeters:e,terrain:u.current,mapLibreTerrain:i,terrainQuality:n}),c.current=h,p(b=>b+1))},0)}))};return t.on(ve.STYLE_DATA,T),t.on(ve.STYLE_LOAD,T),t.on(ve.IDLE,T),T(),()=>{y(),g!==null&&cancelAnimationFrame(g),v!==null&&clearTimeout(v),c.current=null,h==null||h.dispose(),h=null}},[t,e,s.enabled,i,n]),$.useEffect(()=>{var h;(h=c.current)==null||h.updateTerrain(l)},[l,d]),$.useEffect(()=>{var h;s.enabled&&((h=c.current)==null||h.updateSolarPosition(m))},[m,s.enabled,d]),$.useEffect(()=>{var h;s.enabled&&((h=c.current)==null||h.updateShadowQuality(ia(s.shadowQuality)))},[s.enabled,s.shadowQuality,d]),$.useEffect(()=>{var h;s.enabled&&((h=c.current)==null||h.updateRenderQuality({shadowAdaptiveQuality:s.shadowAdaptiveQuality,shadowBufferLayout:s.shadowBufferLayout,shadowBufferFormat:s.shadowBufferFormat,shadowSunDiscSamples:s.shadowSunDiscSamples,shadowMsaaSamples:s.shadowMsaaSamples,shadowGroundTexelFit:s.shadowGroundTexelFit}))},[s.enabled,s.shadowAdaptiveQuality,s.shadowBufferLayout,s.shadowBufferFormat,s.shadowSunDiscSamples,s.shadowMsaaSamples,s.shadowGroundTexelFit,d]),$.useEffect(()=>{var h;s.enabled&&((h=c.current)==null||h.updateMeshErrorTarget(s.meshErrorTarget??hs))},[s.enabled,s.meshErrorTarget,d]),$.useEffect(()=>{var h;s.enabled&&((h=c.current)==null||h.updateMeshCacheBudget(s.meshCacheBudgetBytes))},[s.enabled,s.meshCacheBudgetBytes,d]),$.useEffect(()=>{var h;s.enabled&&((h=c.current)==null||h.updateSoftSunShadows(s.softSunShadows??!0))},[s.enabled,s.softSunShadows,d]),$.useEffect(()=>{var h;s.enabled&&((h=c.current)==null||h.updateTimeAnimating(s.isAnimating??!1))},[s.enabled,s.isAnimating,d]),$.useEffect(()=>{var h;s.enabled&&((h=c.current)==null||h.updateShadowIntensity(s.shadowIntensity??1))},[s.enabled,s.shadowIntensity,d]),$.useEffect(()=>{var h;s.enabled&&((h=c.current)==null||h.updateMapStyleContentVisibility(s.showMapStyleContent??!0))},[s.enabled,s.showMapStyleContent,d]),$.useEffect(()=>{var h;s.enabled&&((h=c.current)==null||h.updateMapStyleLabelOverlayVisibility((s.showMapStyleContent??!0)&&(s.showMapStyleLabels??!0)))},[s.enabled,s.showMapStyleContent,s.showMapStyleLabels,d]),$.useEffect(()=>{var h;s.enabled&&((h=c.current)==null||h.updateMapStyleElevationVisibility(s.showMapStyleElevationLines??!1,s.showMapStyleElevationLabels??!1))},[s.enabled,s.showMapStyleElevationLines,s.showMapStyleElevationLabels,d]),$.useEffect(()=>{var h;s.enabled&&((h=c.current)==null||h.updateSunDebugVectorVisibility((s.showProjectionDebugView??!1)&&(s.showSunDebugVector??!0)))},[s.enabled,s.showProjectionDebugView,s.showSunDebugVector,d]),$.useEffect(()=>{if(!t)return;const h=s.enabled&&(s.showProjectionDebugView??!1)&&(s.showTileBounds??!0);if(!h)return;const g=new Set,v=()=>{var b;const T=Ie(t);for(const I of g)T.includes(I)||g.delete(I);for(const I of T)g.has(I)||((b=I.setTileBoundsVisible)==null||b.call(I,h),g.add(I))};v();const y=bo(t,v);return()=>{var T;y();for(const b of Ie(t))(T=b.setTileBoundsVisible)==null||T.call(b,!1)}},[t,d,s.enabled,s.showProjectionDebugView,s.showTileBounds]),$.useEffect(()=>{var h;s.enabled&&((h=c.current)==null||h.updateAtmosphericLutUsage({useTransmittanceLut:s.useTransmittanceLut??!0,useIrradianceLut:s.useSkyIrradianceLut??!0}))},[s.enabled,s.useSkyIrradianceLut,s.useTransmittanceLut,d]),$.useEffect(()=>{var h;s.enabled&&((h=c.current)==null||h.updateTerrainColor(s.terrainColor??ms))},[s.enabled,s.terrainColor,d]),$.useEffect(()=>{var h;s.enabled&&((h=c.current)==null||h.updateBuildingAppearance({fullOpacity:s.buildingsFullOpacity??!0,uniformColor:s.buildingColor??Ao,uniformColorMix:ze(s.buildingColorMix??Ro,0,1),textureColorCorrection:s.meshTextureColorCorrection??!0,textureSaturation:ze(s.meshTextureSaturation??Eo,0,1)}))},[s.buildingColor,s.buildingColorMix,s.buildingsFullOpacity,s.enabled,s.meshTextureSaturation,s.meshTextureColorCorrection,d]),null},tg=(t,e,r,i)=>{const n=i+e/2,a=Math.floor(n),s=n-a;if(a===0)return{dateState:t,yearDayProgress:s};const o=Un(t,a);return{dateState:Mi({...t,...o},r)??t,yearDayProgress:s}},rg=(t,e,r)=>{const i=mo(t,r),n=Math.ceil(i.sunriseMinutes),a=Math.floor(i.sunsetMinutes),s=t.minutes+e;return{dateState:{...t,minutes:s>a?n:s},yearDayProgress:0}},ig=(t,e,r,i,n)=>{const a=e??r;if(!(t!=null&&t.enabled)||!t.isAnimating)return{dateState:a,yearDayProgress:n};const s=t.animationSpeed??4;return(t.animationMode??Lt.DAY)===Lt.YEAR?tg(a,s,i,n):rg(a,s,i)},ng=1e3/30,sg=({initialDateState:t,setDateState:e,location:r,shadowState:i})=>{const n=$.useRef(0),{animationMode:a,animationSpeed:s,enabled:o,isAnimating:c}=i;$.useEffect(()=>{if(!o||!c)return;const l={animationMode:a,animationSpeed:s,enabled:o,isAnimating:c};n.current=0;const u=window.setInterval(()=>{e(d=>{const p=ig(l,d,t,r,n.current);return n.current=p.yearDayProgress,p.dateState})},ng);return()=>window.clearInterval(u)},[t,a,s,o,c,r,e])},ag=t=>({...t,animationMode:Lt.DAY,animationSpeed:4,isAnimating:!1,shadowIntensity:1,meshTextureColorCorrection:!0,showSunDebugVector:!0,showTileBounds:!0,showProjectionDebugView:!1,showDisplaySettings:!1,showMapStyleContent:!0,showMapStyleLabels:!0,showMapStyleElevationLines:!1,showMapStyleElevationLabels:!1,useTransmittanceLut:!0,useSkyIrradianceLut:!0,shadowBufferLayout:void 0,shadowBufferFormat:void 0,shadowSunDiscSamples:void 0,shadowMsaaSamples:void 0,shadowGroundTexelFit:void 0,shadowAdaptiveQuality:void 0}),og=({location:t,state:e,setState:r,dateState:i,setDateState:n})=>{const a=e.animationMode??Lt.DAY,s=e.animationSpeed??4,o=(c,l)=>n(pu(i,i.year,fo(i.year,c,l),t));return D.jsxs(D.Fragment,{children:[D.jsxs("section",{className:"min-w-0",children:[D.jsx("h3",{className:"mb-1.5 text-xs font-medium uppercase tracking-wide text-neutral-500",children:"Datum"}),D.jsxs("div",{className:"grid grid-cols-2 gap-2","data-test-id":"shadow-date-shortcuts",children:[D.jsx("button",{type:"button",className:fr,onClick:()=>n(gu(i,t)),children:"Heute"}),D.jsx("button",{type:"button",className:fr,onClick:()=>o(2,21),children:"21. März"}),D.jsx("button",{type:"button",className:fr,onClick:()=>o(5,21),children:"21. Juni"}),D.jsx("button",{type:"button",className:fr,onClick:()=>o(11,21),children:"21. Dezember"})]})]}),D.jsxs("section",{children:[D.jsx("h3",{className:"mb-1.5 text-xs font-medium uppercase tracking-wide text-neutral-500",children:"Uhrzeit"}),D.jsx("div",{className:"grid grid-cols-4 gap-2",children:[9,12,15,18].map(c=>D.jsx("button",{type:"button",className:fr,onClick:()=>n(Li(i,{...i,minutes:c*60},t)),children:wu(c)},c))})]}),D.jsxs("section",{children:[D.jsx("h3",{className:"mb-1.5 text-xs font-medium uppercase tracking-wide text-neutral-500",children:"Animation"}),D.jsxs("div",{className:"flex flex-wrap items-center gap-x-3 gap-y-2",children:[D.jsx("div",{className:"flex shrink-0 overflow-hidden rounded-md border border-neutral-300",children:[[Lt.DAY,"Tagesverlauf"],[Lt.YEAR,"Jahresverlauf"]].map(([c,l])=>D.jsx("button",{type:"button",className:`${aa} ${a===c?"bg-amber-50 font-medium text-amber-700":"bg-white"}`,"aria-pressed":a===c,onClick:()=>{const u=c;r({...e,animationMode:u,isAnimating:a===u?!e.isAnimating:!0})},children:l},c))}),D.jsx("div",{className:"flex shrink-0 overflow-hidden rounded-md border border-neutral-300",children:[1,4,12].map(c=>D.jsxs("button",{type:"button",className:`${aa} px-3 ${s===c?"bg-amber-50 font-medium text-amber-700":"bg-white"}`,"aria-pressed":s===c,onClick:()=>r({...e,animationSpeed:c}),children:[c,"×"]},c))})]})]})]})},cg=({location:t,state:e,setState:r,dateState:i,setDateState:n})=>{const a=e.shadowIntensity??1,s=$.useMemo(()=>us(i,t),[i,t]);return D.jsxs("div",{className:"w-full","data-test-id":"shadow-simulation-secondary-panel",children:[D.jsxs("div",{className:"mb-2 flex flex-wrap items-center justify-between gap-x-4 gap-y-2",children:[D.jsxs("span",{className:"whitespace-nowrap text-sm tabular-nums text-neutral-500",children:["Höhe ",s.elevationDegrees.toFixed(0),"° · Azimut"," ",s.azimuthDegrees.toFixed(0),"°"]}),D.jsx("div",{className:"flex items-center gap-5 text-sm text-neutral-600",children:D.jsxs("button",{type:"button",className:"flex items-center gap-2 whitespace-nowrap hover:text-amber-700",onClick:()=>{r(ag(e)),n(vu(i,t))},children:[D.jsx(Ct,{icon:Nl}),"Zurücksetzen"]})})]}),D.jsxs("div",{className:"grid grid-cols-1 gap-x-8 gap-y-4 lg:grid-cols-2",children:[D.jsx(og,{location:t,state:e,setState:r,dateState:i,setDateState:n}),D.jsxs("section",{className:"min-w-0",children:[D.jsxs("h3",{className:"mb-1.5 flex items-center gap-1 text-xs font-medium uppercase tracking-wide text-neutral-500",children:["Darstellung",D.jsx("button",{type:"button",className:"inline-flex items-center justify-center p-1 text-neutral-700 hover:text-amber-700","aria-label":"Darstellungseinstellungen",title:"Darstellungseinstellungen","aria-expanded":e.showDisplaySettings??!1,onClick:()=>r({...e,showDisplaySettings:!e.showDisplaySettings}),"data-test-id":"shadow-simulation-display-settings",children:D.jsx(Ct,{icon:Ll})})]}),D.jsxs("label",{className:"grid grid-cols-[110px_minmax(0,1fr)_42px] items-center gap-3 text-sm text-neutral-700",children:[D.jsx("span",{children:"Intensität"}),D.jsx("input",{type:"range",min:0,max:1,step:.01,value:a,onChange:o=>r({...e,shadowIntensity:Number(o.currentTarget.value)}),className:"shadow-simulation-range min-w-0 cursor-pointer",style:Po(a,0,1),"aria-label":"Schattenintensität","data-test-id":"shadow-simulation-intensity"}),D.jsxs("span",{className:"text-right tabular-nums",children:[Math.round(a*100),"%"]})]})]})]})]})},lg=$.lazy(()=>Ai(()=>import("./ShadowProjectionDebugView-BxKjctKI.js"),__vite__mapDeps([11,1,2,3,4,5,6,7,8,9,10])).then(t=>({default:t.ShadowProjectionDebugView}))),ug=$.lazy(()=>Ai(()=>import("./ShadowSimulationDisplaySettingsPanel-BDALVWRu.js"),__vite__mapDeps([12,1,2,3,4,5,6,7,8,9,10])).then(t=>({default:t.ShadowSimulationDisplaySettingsPanel}))),dg=$.lazy(()=>Ai(()=>import("./ShadowSimulationCurveSettings-NpAXnZCW.js"),__vite__mapDeps([13,1,2,3,4,5,6,7,8,9,10])).then(t=>({default:t.ShadowSimulationCurveSettings}))),hg="#1677ff",mg=({config:t,libreMap:e,targeted:r,sharedState:i,setSharedState:n,sharedDateState:a,setSharedDateState:s})=>{var O,W;const{year:o,initialDayOfYear:c,initialMinutes:l,latitude:u=mi.latitude,longitude:d=mi.longitude,timeZone:p=ss,shadowAreaMeters:m,terrain:h,terrainSources:g,mapLibreTerrain:v,controlPosition:y="topleft",controlOrder:T=70}=t??{},b=Do(e,u,d),I=$.useMemo(()=>ql({terrain:h,terrainSources:g}),[h,g]),A=$.useMemo(()=>a??Xl({year:o,initialDayOfYear:c,initialMinutes:l,timeZone:p},b),[a,c,l,b,p,o]),R=i??I,F=a??A,P=$.useMemo(()=>g??(h?[{label:h.id,terrain:h}]:void 0),[h,g]),U=((O=P==null?void 0:P.find(({terrain:te})=>te.id===R.terrainSourceId))==null?void 0:O.terrain)??((W=P==null?void 0:P[0])==null?void 0:W.terrain);return $.useEffect(()=>{i||n(I)},[I,n,i]),$.useEffect(()=>{a||s(A)},[A,s,a]),sg({initialDateState:A,setDateState:s,location:b,shadowState:R}),r?D.jsx(cg,{location:b,state:R,setState:n,dateState:F,setDateState:s}):D.jsxs(D.Fragment,{children:[e&&D.jsx(xl,{position:y,order:T,children:D.jsx(Hl,{title:R.enabled?"Schattensimulation ausschalten":"Schattensimulation einschalten",placement:"right",children:D.jsx(Tl,{onClick:()=>n({...R,enabled:!R.enabled}),dataTestId:"shadow-simulation-control-button","aria-label":R.enabled?"Schattensimulation ausschalten":"Schattensimulation einschalten","aria-pressed":R.enabled,children:D.jsx(Ct,{icon:Fl,style:R.enabled?{color:hg}:void 0})})})}),D.jsx(eg,{libreMap:e,shadowAreaMeters:m,terrain:U,mapLibreTerrain:v,terrainQuality:R.terrainQuality,location:b,state:R,dateState:F}),R.controlStyle===zn.CURVE&&D.jsx($.Suspense,{fallback:null,children:D.jsx(dg,{location:b,dateState:F,setDateState:s,onClose:()=>n({...R,controlStyle:zn.QUICK})})}),R.showDisplaySettings&&D.jsx($.Suspense,{fallback:null,children:D.jsx(ug,{state:R,setState:n,terrainSources:P,map:e})}),R.enabled&&R.showProjectionDebugView&&e&&D.jsx($.Suspense,{fallback:null,children:D.jsx(lg,{map:e,solarPosition:us(F,b),settings:{showSunDebugVector:R.showSunDebugVector??!0,showTileBounds:R.showTileBounds??!0},onSettingsChange:te=>n({...R,...te}),onClose:()=>n({...R,showProjectionDebugView:!1})})})]})},Ig=Object.freeze(Object.defineProperty({__proto__:null,DEFAULT_SHADOW_SIMULATION_TIME_ZONE:ss,SHADOW_TERRAIN_QUALITY:Le,ShadowSimulationHeaderControlsView:xu,ShadowSimulationView:mg,clampShadowSimulationSelectionToDaylight:bl,formatShadowSelection:Ml},Symbol.toStringTag,{value:"Module"}));export{hs as D,bg as M,pi as S,mn as a,ia as b,Mg as c,Yl as d,Tt as e,Wl as f,ds as g,ms as h,Ro as i,Eo as j,Ao as k,br as l,Tg as m,xg as n,zn as o,xt as p,fi as q,Ag as r,Cg as s,Ig as t};
