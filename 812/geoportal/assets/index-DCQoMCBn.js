const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/shadow-sun-vector-zmmLwS9T.js","assets/index-BpxG7u85.js","assets/vendor-react-core-DBOd_2-S.js","assets/vendor-ui-icons-FPYkdTwk.js","assets/vendor-cismap-DrLiO-IL.js","assets/vendor-leaflet-BuDGw_T9.js","assets/vendor-ui-DwftSr8b.js","assets/vendor-cismap-DCHbl3AQ.css","assets/vendor-cesium-CNm9W3AS.js","assets/vendor-maplibre-XZ2NtLMv.js","assets/index-eSP5RzaY.css","assets/ShadowProjectionDebugView-BQcY5i4E.js","assets/ShadowSimulationDisplaySettingsPanel-CxpB0ejP.js","assets/ShadowSimulationCurveSettings-BavMpJpu.js"])))=>i.map(i=>d[i]);
import{S as Nr,C as Oi,a as er,G as Lr,L as ll,N as Eo,M as kr,P as fs,V as re,b as ze,W as je,F as xt,R as Fr,c as Ee,D as rr,U as Ht,d as He,g as ps,e as Ni,f as gs,h as ul,i as Li,k as ve,l as Ro,j as P,o as Xn,m as dl,n as Ao,p as _n,q as _i,r as Hr,s as te,t as at,u as T,v as hl,B as Ie,E as Co,w as ml,x as fl,y as Io,z as I,A as Fi,T as Do,O as vs,H as Po,I as ua,J as ys,K as pl,Q as Qn,X as da,Y as Ss,Z as gl,_ as vl,$ as ha,a0 as yl,a1 as Sl,a2 as wl,a3 as Oo,a4 as Nt,a5 as _l,a6 as No,a7 as ma,a8 as xl,a9 as Lo,aa as Tl,ab as bl,ac as Ml,ad as Zn,ae as xn,af as El,ag as Rl,ah as yi,ai as Fo,aj as Zt,ak as Al,al as Bo,am as Cl,an as Il,ao as Dl,ap as Pl,aq as Ol,ar as fa,as as Me,at as ws,au as Nl,av as Uo,aw as Ll,ax as Bi,ay as ko,az as Fl,aA as Bl,aB as Sr,aC as Ul,aD as kl,aE as Tn,aF as Hl,aG as Br,aH as zl,aI as Vl,aJ as Wl,aK as Gl}from"./index-BpxG7u85.js";import{g as jl,r as j,d as Yl}from"./vendor-react-core-DBOd_2-S.js";import{F as Ot,V as $l,bs as Kl,W as ql,z as Xl,b7 as Ql,b8 as Zl,bt as Jl,bc as eu,D as tu}from"./vendor-ui-icons-FPYkdTwk.js";import{J as ru,K as iu,L as nu,e as su}from"./vendor-ui-DwftSr8b.js";import{a as au}from"./vendor-maplibre-XZ2NtLMv.js";import"./vendor-cismap-DrLiO-IL.js";import"./vendor-leaflet-BuDGw_T9.js";const pa=20;class ou{constructor(e,r=256*1024**2){this.renderer=e,this.maximumBytes=r,this.quad.frustumCulled=!1,this.scene.add(this.quad)}target=null;key=null;broken=!1;captures=0;reuses=0;scene=new Nr;camera=new Oi;material=new er({glslVersion:Lr,uniforms:{color:{value:null},depth:{value:null}},vertexShader:`out vec2 uvCopy;
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
      }`,depthTest:!0,depthFunc:ll,depthWrite:!0,transparent:!0,blending:Eo});quad=new kr(new fs(2,2),this.material);get stats(){return{captures:this.captures,reuses:this.reuses,bytes:this.target?this.target.width*this.target.height*pa:0,broken:this.broken}}invalidate(){this.key=null}render(e,r,i,n){var p,y;const s=this.renderer;if(this.broken||!Number.isInteger(r)||!Number.isInteger(i)||r<1||i<1||r>s.capabilities.maxTextureSize||i>s.capabilities.maxTextureSize||r*i*pa>this.maximumBytes||!s.extensions.has("EXT_color_buffer_float"))return this.releaseTarget(),n(),!1;const a=s.getRenderTarget(),o=s.getActiveCubeFace(),c=s.getActiveMipmapLevel(),l=s.getViewport(new re),u=s.getScissor(new re),d=s.getScissorTest(),g=s.getClearColor(new ze),h=s.getClearAlpha(),m=s.autoClear,v=()=>{s.setRenderTarget(a,o,c),s.setViewport(l),s.setScissor(u),s.setScissorTest(d),s.setClearColor(g,h),s.autoClear=m};try{if(((p=this.target)==null?void 0:p.width)!==r||((y=this.target)==null?void 0:y.height)!==i){this.releaseTarget(),this.target=new je(r,i,{type:xt,format:Fr,minFilter:Ee,magFilter:Ee,depthTexture:new rr(r,i,Ht),samples:0});try{s.initRenderTarget(this.target)}catch{return this.broken=!0,this.releaseTarget(),v(),n(),!1}}const b=JSON.stringify([e,r,i,s.outputColorSpace,s.toneMapping,s.toneMappingExposure,a==null?void 0:a.texture.colorSpace]);return s.autoClear=!1,this.key!==b?(this.key=null,s.setRenderTarget(this.target),s.setViewport(new re(0,0,r,i)),s.setScissorTest(!1),s.setClearColor(0,0),s.clear(!0,!0,!1),n(),this.key=b,this.captures+=1):this.reuses+=1,v(),s.autoClear=!1,this.material.uniforms.color.value=this.target.texture,this.material.uniforms.depth.value=this.target.depthTexture,s.render(this.scene,this.camera),!0}catch(b){throw this.invalidate(),b}finally{v()}}releaseTarget(){var e,r,i;(r=(e=this.target)==null?void 0:e.depthTexture)==null||r.dispose(),(i=this.target)==null||i.dispose(),this.target=null,this.key=null}dispose(){this.releaseTarget(),this.broken=!0,this.material.dispose(),this.quad.geometry.dispose()}}const Le={STANDARD:"standard",HIGH:"high",MAX:"max",ULTRA:"ultra",EXTREME:"extreme"},Jn={QUICK:"quick",CURVE:"curve"},kt={DAY:"day",YEAR:"year"},xi={OVERLAY:"isShadowSimulationOverlay"},bt={FPS_120:4,FPS_60:16,FPS_30:64,ULTRA:256},_s="max",si=64,cu=[0,2,4,8,_s],ot={[bt.FPS_120]:{targetFps:120,depthSize:2048,terrainErrorPixels:2,shadowTexelErrorPixels:2,terrainTileLimit:96,terrainSegments:128,sunSamples:si,msaaSamples:0},[bt.FPS_60]:{targetFps:60,depthSize:3072,terrainErrorPixels:1,shadowTexelErrorPixels:1,terrainTileLimit:144,terrainSegments:256,sunSamples:si,msaaSamples:2},[bt.FPS_30]:{targetFps:30,depthSize:4096,terrainErrorPixels:.5,shadowTexelErrorPixels:.5,terrainTileLimit:192,terrainSegments:512,sunSamples:si,msaaSamples:4},[bt.ULTRA]:{targetFps:null,depthSize:16384,terrainErrorPixels:.25,shadowTexelErrorPixels:.25,terrainTileLimit:256,terrainSegments:512,sunSamples:si,msaaSamples:_s}},lu=(t,e,r=Ir)=>{if(!t)return;const i=ot[e];return{...t,errorTargetPixels:r,meshSegments:Math.min(t.tileSize,i.terrainSegments),maxSelectionTiles:Math.min(t.maxSelectionTiles??i.terrainTileLimit,i.terrainTileLimit)}},or=64,Ir=2,uu=6*1024**3,xs="#d3d3d3",Ho=0,zo=1,Vo="#ffffff",Ti={MONO:"mono",TILED:"tiled"},Mt={HDR_16:"rgba16f",HDR_16_32:"rgba16f-32f",HDR_32:"rgba32f",SDR_8:"rgba8"},du=[32,64,128,256,512,1024,2048,4096,8192],hu=!0,bn=(t={},e=or)=>({shadowAdaptiveQuality:t.shadowAdaptiveQuality??!0,shadowBufferLayout:t.shadowBufferLayout&&Object.values(Ti).includes(t.shadowBufferLayout)?t.shadowBufferLayout:Ti.MONO,shadowBufferFormat:t.shadowBufferFormat&&Object.values(Mt).includes(t.shadowBufferFormat)?t.shadowBufferFormat:Mt.HDR_16_32,shadowSunDiscSamples:t.shadowSunDiscSamples&&du.includes(t.shadowSunDiscSamples)?t.shadowSunDiscSamples:ot[e].sunSamples,shadowMsaaSamples:t.shadowBufferFormat===Mt.HDR_32?0:t.shadowMsaaSamples!==void 0&&cu.includes(t.shadowMsaaSamples)?t.shadowMsaaSamples:ot[e].msaaSamples,shadowGroundTexelFit:t.shadowGroundTexelFit??hu}),ga=t=>Object.values(bt).includes(t)?t:or,mu=t=>typeof t=="string"&&/^#[\da-f]{6}$/i.test(t)?t:typeof t=="number"&&Number.isFinite(t)?`#${He(Math.round(t),0,16777215).toString(16).padStart(6,"0")}`:xs,Vg=(t,e)=>({...t,shadowQuality:e,shadowBufferFormat:void 0,shadowSunDiscSamples:void 0,shadowMsaaSamples:void 0,shadowGroundTexelFit:void 0}),fu=t=>{var r,i,n;const e=((i=(r=t==null?void 0:t.terrainSources)==null?void 0:r[0])==null?void 0:i.terrain)??(t==null?void 0:t.terrain);return{enabled:!1,terrainColor:mu((n=e==null?void 0:e.material)==null?void 0:n.color),terrainSourceId:e==null?void 0:e.id,terrainQuality:Le.MAX,buildingsFullOpacity:!0,buildingColorMix:Ho,meshTextureSaturation:zo,meshTextureColorCorrection:!0,buildingColor:Vo,shadowQuality:or,shadowAdaptiveQuality:!0,terrainErrorTarget:Ir,meshCacheBudgetBytes:uu,showSunDebugVector:!0,showTileBounds:!0,showProjectionDebugView:!1,showDisplaySettings:!1,softSunShadows:!0,showMapStyleContent:!0,showMapStyleLabels:!0,showMapStyleElevationLines:!1,showMapStyleElevationLabels:!1,useTransmittanceLut:!0,useSkyIrradianceLut:!0,controlStyle:Jn.QUICK,animationMode:kt.DAY,animationSpeed:4,isAnimating:!1,shadowIntensity:1}},pu=(t,e,r=new Date)=>{const i=(t==null?void 0:t.timeZone)??gs,n=ps(r,i),s={year:(t==null?void 0:t.year)??n.year,dayOfYear:(t==null?void 0:t.initialDayOfYear)??n.dayOfYear,minutes:(t==null?void 0:t.initialMinutes)??n.minutes,timeZone:i};return Ni(s,e)??{...s,minutes:12*60}};var Ui={},ki={};Object.defineProperty(ki,"__esModule",{value:!0});ki.default=void 0;var gu={items_per_page:"/ Seite",jump_to:"Gehe zu",jump_to_confirm:"bestätigen",page:"Seite",prev_page:"Vorherige Seite",next_page:"Nächste Seite",prev_5:"5 Seiten zurück",next_5:"5 Seiten vor",prev_3:"3 Seiten zurück",next_3:"3 Seiten vor",page_size:"Page Size"};ki.default=gu;var Hi={},zr={},zi={},Wo={exports:{}};(function(t){var e=ul;function r(n,s){var a=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);s&&(o=o.filter(function(c){return Object.getOwnPropertyDescriptor(n,c).enumerable})),a.push.apply(a,o)}return a}function i(n){for(var s=1;s<arguments.length;s++){var a=arguments[s]!=null?arguments[s]:{};s%2?r(Object(a),!0).forEach(function(o){e(n,o,a[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach(function(o){Object.defineProperty(n,o,Object.getOwnPropertyDescriptor(a,o))})}return n}t.exports=i,t.exports.__esModule=!0,t.exports.default=t.exports})(Wo);var vu=Wo.exports,Vi={};Object.defineProperty(Vi,"__esModule",{value:!0});Vi.commonLocale=void 0;Vi.commonLocale={yearFormat:"YYYY",dayFormat:"D",cellMeridiemFormat:"A",monthBeforeYear:!0};var yu=Li.default;Object.defineProperty(zi,"__esModule",{value:!0});zi.default=void 0;var va=yu(vu),Su=Vi,wu=(0,va.default)((0,va.default)({},Su.commonLocale),{},{locale:"de_DE",today:"Heute",now:"Jetzt",backToToday:"Zurück zu Heute",ok:"OK",clear:"Zurücksetzen",month:"Monat",year:"Jahr",timeSelect:"Zeit wählen",dateSelect:"Datum wählen",monthSelect:"Wähle einen Monat",yearSelect:"Wähle ein Jahr",decadeSelect:"Wähle ein Jahrzehnt",dateFormat:"D.M.YYYY",dateTimeFormat:"D.M.YYYY HH:mm:ss",previousMonth:"Vorheriger Monat (PageUp)",nextMonth:"Nächster Monat (PageDown)",previousYear:"Vorheriges Jahr (Ctrl + left)",nextYear:"Nächstes Jahr (Ctrl + right)",previousDecade:"Vorheriges Jahrzehnt",nextDecade:"Nächstes Jahrzehnt",previousCentury:"Vorheriges Jahrhundert",nextCentury:"Nächstes Jahrhundert"});zi.default=wu;var Vr={};Object.defineProperty(Vr,"__esModule",{value:!0});Vr.default=void 0;const _u={placeholder:"Zeit auswählen",rangePlaceholder:["Startzeit","Endzeit"]};Vr.default=_u;var Go=Li.default;Object.defineProperty(zr,"__esModule",{value:!0});zr.default=void 0;var xu=Go(zi),Tu=Go(Vr);const bu={lang:Object.assign({placeholder:"Datum auswählen",rangePlaceholder:["Startdatum","Enddatum"],shortWeekDays:["So","Mo","Di","Mi","Do","Fr","Sa"],shortMonths:["Jan","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"]},xu.default),timePickerLocale:Object.assign({},Tu.default)};zr.default=bu;var Mu=Li.default;Object.defineProperty(Hi,"__esModule",{value:!0});Hi.default=void 0;var Eu=Mu(zr);Hi.default=Eu.default;var Wi=Li.default;Object.defineProperty(Ui,"__esModule",{value:!0});Ui.default=void 0;var Ru=Wi(ki),Au=Wi(Hi),Cu=Wi(zr),Iu=Wi(Vr);const Ue="${label} ist nicht gültig. ${type} erwartet",Du={locale:"de",Pagination:Ru.default,DatePicker:Cu.default,TimePicker:Iu.default,Calendar:Au.default,global:{placeholder:"Bitte auswählen"},Table:{filterTitle:"Filter-Menü",filterConfirm:"OK",filterReset:"Zurücksetzen",filterEmptyText:"Keine Filter",filterSearchPlaceholder:"Suche in Filtern",filterCheckall:"Alle auswählen",selectAll:"Selektiere Alle",selectInvert:"Selektion Invertieren",selectionAll:"Wählen Sie alle Daten aus",sortTitle:"Sortieren",emptyText:"Keine Daten",expand:"Zeile erweitern",collapse:"Zeile reduzieren",triggerDesc:"Klicken zur absteigenden Sortierung",triggerAsc:"Klicken zur aufsteigenden Sortierung",cancelSort:"Klicken zum Abbrechen der Sortierung"},Tour:{Next:"Weiter",Previous:"Zurück",Finish:"Fertig"},Modal:{okText:"OK",cancelText:"Abbrechen",justOkText:"OK"},Popconfirm:{okText:"OK",cancelText:"Abbrechen"},Transfer:{titles:["",""],searchPlaceholder:"Suchen",itemUnit:"Eintrag",itemsUnit:"Einträge",remove:"Entfernen",selectCurrent:"Alle auf aktueller Seite auswählen",removeCurrent:"Auswahl auf aktueller Seite aufheben",selectAll:"Alle auswählen",removeAll:"Auswahl aufheben",selectInvert:"Auswahl umkehren"},Upload:{uploading:"Hochladen...",removeFile:"Datei entfernen",uploadError:"Fehler beim Hochladen",previewFile:"Dateivorschau",downloadFile:"Download-Datei"},Empty:{description:"Keine Daten"},Text:{edit:"Bearbeiten",copy:"Kopieren",copied:"Kopiert",expand:"Erweitern"},Form:{defaultValidateMessages:{default:"Feld-Validierungsfehler: ${label}",required:"Bitte geben Sie ${label} an",enum:"${label} muss eines der folgenden sein [${enum}]",whitespace:"${label} darf kein Leerzeichen sein",date:{format:"${label} ist ein ungültiges Datumsformat",parse:"${label} kann nicht in ein Datum umgewandelt werden",invalid:"${label} ist ein ungültiges Datum"},types:{string:Ue,method:Ue,array:Ue,object:Ue,number:Ue,date:Ue,boolean:Ue,integer:Ue,float:Ue,regexp:Ue,email:Ue,url:Ue,hex:Ue},string:{len:"${label} muss genau ${len} Zeichen lang sein",min:"${label} muss mindestens ${min} Zeichen lang sein",max:"${label} darf höchstens ${max} Zeichen lang sein",range:"${label} muss zwischen ${min} und ${max} Zeichen lang sein"},number:{len:"${label} muss gleich ${len} sein",min:"${label} muss mindestens ${min} sein",max:"${label} darf maximal ${max} sein",range:"${label} muss zwischen ${min} und ${max} liegen"},array:{len:"Es müssen ${len} ${label} sein",min:"Es müssen mindestens ${min} ${label} sein",max:"Es dürfen maximal ${max} ${label} sein",range:"Die Anzahl an ${label} muss zwischen ${min} und ${max} liegen"},pattern:{mismatch:"${label} entspricht nicht dem ${pattern} Muster"}}},Image:{preview:"Vorschau"},QRCode:{expired:"QR-Code abgelaufen",refresh:"Aktualisieren"}};Ui.default=Du;var Pu=Ui;const Ou=jl(Pu),Gi=(t,e,r)=>Ni(e,r)??t,Nu=(t,e,r,i)=>Gi(t,{...t,year:e,dayOfYear:r},i),Lu=(t,e,r=new Date)=>{const i=ps(r,t.timeZone);return Gi(t,{...i,minutes:t.minutes},e)},Fu=(t,e,r=new Date)=>{const i=ps(r,t.timeZone);return Ni(i,e)??t},Bu=(t,e)=>({latitude:(t==null?void 0:t.latitude)??e.latitude,longitude:(t==null?void 0:t.longitude)??e.longitude}),Uu=(t,e)=>t.latitude===e.latitude&&t.longitude===e.longitude,ya=(t,e,r)=>{const i=t==null?void 0:t.getCenter();return Bu(i?{latitude:i.lat,longitude:i.lng}:null,{latitude:e,longitude:r})},jo=(t,e,r)=>{const[i,n]=j.useState(()=>ya(t,e,r));return j.useEffect(()=>{const s=()=>{const a=ya(t,e,r);n(o=>Uu(o,a)?o:a)};if(s(),!!t)return t.on(ve.MOVE_END,s),()=>{t.off(ve.MOVE_END,s)}},[e,r,t]),i},wr="flex h-9 min-w-0 items-center justify-center whitespace-nowrap rounded-md border border-neutral-300 bg-white px-1 text-center text-sm text-neutral-800 transition-colors hover:border-amber-500 hover:text-amber-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/40",Sa="h-8 whitespace-nowrap border-r border-neutral-300 px-3 text-sm text-neutral-700 transition-colors last:border-r-0 hover:text-amber-700",Wg=[{label:"120 FPS",value:bt.FPS_120},{label:"60 FPS",value:bt.FPS_60},{label:"30 FPS",value:bt.FPS_30},{label:"Ultra",value:bt.ULTRA}],Gg=[{label:"0,25 px",value:.25},{label:"0,5 px",value:.5},{label:"1 px",value:1},{label:"2 px",value:2},{label:"4 px",value:4}],jg=[{value:Mt.HDR_16,label:"HDR · 16 Bit (Experiment)"},{value:Mt.HDR_16_32,label:"HDR · 16/32 Bit (Standard)"},{value:Mt.HDR_32,label:"HDR · 32 Bit (ohne MSAA)"},{value:Mt.SDR_8,label:"SDR · 8 Bit (Experiment)"}],ku=t=>`${String(t).padStart(2,"0")}:00`,Yo=(t,e,r)=>({"--shadow-range-progress":`${r>e?Math.max(0,Math.min(100,(t-e)/(r-e)*100)):0}%`});var Hu={exports:{}};(function(t,e){(function(r,i){t.exports=i(ru)})(Yl,function(r){function i(c){return c&&typeof c=="object"&&"default"in c?c:{default:c}}var n=i(r),s={s:"ein paar Sekunden",m:["eine Minute","einer Minute"],mm:"%d Minuten",h:["eine Stunde","einer Stunde"],hh:"%d Stunden",d:["ein Tag","einem Tag"],dd:["%d Tage","%d Tagen"],M:["ein Monat","einem Monat"],MM:["%d Monate","%d Monaten"],y:["ein Jahr","einem Jahr"],yy:["%d Jahre","%d Jahren"]};function a(c,l,u){var d=s[u];return Array.isArray(d)&&(d=d[l?0:1]),d.replace("%d",c)}var o={name:"de",weekdays:"Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),weekdaysShort:"So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),weekdaysMin:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),months:"Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sept._Okt._Nov._Dez.".split("_"),ordinal:function(c){return c+"."},weekStart:1,yearStart:4,formats:{LTS:"HH:mm:ss",LT:"HH:mm",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY HH:mm",LLLL:"dddd, D. MMMM YYYY HH:mm"},relativeTime:{future:"in %s",past:"vor %s",s:a,m:a,mm:a,h:a,hh:a,d:a,dd:a,M:a,MM:a,y:a,yy:a}};return n.default.locale(o,null,!0),o})})(Hu);const zu=({config:t,libreMap:e,state:r,setState:i,dateState:n,setDateState:s})=>{const{latitude:a=_i.latitude,longitude:o=_i.longitude}=t??{},c=jo(e,a,o),[l,u]=j.useState(!1),d=n,g=j.useMemo(()=>d?Ro(d,c):null,[c,d]),h=j.useMemo(()=>d?iu(new Date(Date.UTC(d.year,0,d.dayOfYear))).locale("de"):null,[d]);if(!r||!d||!g||!h)return null;const m=Math.ceil(g.sunriseMinutes),v=Math.floor(g.sunsetMinutes),p=y=>{s(Gi(d,y,c))};return P.jsx("div",{className:"shadow-simulation-header-controls text-sm text-neutral-700","data-test-id":"shadow-simulation-header-controls",children:P.jsxs("div",{className:"shadow-simulation-header-layout",children:[P.jsxs("div",{className:"shadow-simulation-header-date grid grid-cols-[28px_minmax(0,118px)_28px] items-center",children:[P.jsx("button",{type:"button",className:"flex h-9 w-7 items-center justify-center rounded-full hover:bg-neutral-100","aria-label":"Vorheriger Tag",onClick:()=>p({...d,...Xn(d,-1)}),children:P.jsx(Ot,{icon:$l})}),P.jsxs("div",{className:"relative min-w-0 justify-self-center",children:[P.jsxs("button",{type:"button",className:"flex h-9 max-w-full items-center gap-1.5 whitespace-nowrap rounded-md px-1 tabular-nums hover:bg-neutral-100","aria-label":"Datum auswählen","aria-expanded":l,onClick:()=>u(!0),children:[P.jsx(Ot,{icon:Kl,className:"shrink-0 text-neutral-500"}),P.jsx("span",{className:"truncate",children:dl(d,!1)})]}),P.jsx(nu,{open:l,value:h,locale:Ou.DatePicker,format:"D. MMMM YYYY",allowClear:!1,inputReadOnly:!0,getPopupContainer:y=>y.parentElement??y,onOpenChange:u,onChange:y=>{y&&(p({...d,year:y.year(),dayOfYear:Ao(y.year(),y.month(),y.date())}),u(!1))},className:"pointer-events-none absolute left-0 top-full h-0 w-0 overflow-hidden p-0 opacity-0","aria-label":"Datum auswählen"})]}),P.jsx("button",{type:"button",className:"flex h-9 w-7 items-center justify-center rounded-full hover:bg-neutral-100","aria-label":"Nächster Tag",onClick:()=>p({...d,...Xn(d,1)}),children:P.jsx(Ot,{icon:ql})})]}),P.jsx("span",{className:"shadow-simulation-header-divider h-7 w-px bg-neutral-200","aria-hidden":"true"}),P.jsxs("label",{className:"shadow-simulation-header-time m-0 flex h-9 w-fit cursor-pointer items-center gap-1.5 rounded-md px-1 hover:bg-neutral-100",children:[P.jsx(Ot,{icon:Xl,className:"shrink-0 text-neutral-500"}),P.jsx("input",{type:"time",value:_n(d.minutes),min:_n(m),max:_n(v),step:60,onClick:y=>{try{y.currentTarget.showPicker()}catch{return}},onChange:y=>{const[b,R]=y.currentTarget.value.split(":").map(Number);!Number.isFinite(b)||!Number.isFinite(R)||p({...d,minutes:b*60+R})},className:"shadow-simulation-time-input w-[46px] cursor-pointer bg-transparent p-0 text-sm font-medium leading-none tabular-nums text-neutral-800 outline-none","aria-label":"Uhrzeit auswählen","data-test-id":"shadow-simulation-time-input"})]}),P.jsx("input",{type:"range",min:m,max:v,step:1,value:d.minutes,onChange:y=>p({...d,minutes:Number(y.currentTarget.value)}),className:"shadow-simulation-header-range shadow-simulation-range cursor-pointer",style:Yo(d.minutes,m,v),"aria-label":"Uhrzeit","data-test-id":"shadow-simulation-ribbon-time"}),P.jsx("button",{type:"button",className:"shadow-simulation-header-play flex h-9 w-9 items-center justify-center rounded-full bg-amber-50 text-amber-600 hover:bg-amber-100","aria-label":r.isAnimating?"Animation pausieren":"Animation starten","aria-pressed":r.isAnimating??!1,onClick:()=>i({...r,isAnimating:!r.isAnimating}),children:P.jsx(Ot,{icon:r.isAnimating?Ql:Zl})})]})})},wa=[[0,1],[1,3],[3,2],[2,0],[4,5],[5,7],[7,6],[6,4],[0,4],[1,5],[2,6],[3,7]],Vu=({min:t,max:e})=>[new T(t.x,t.y,t.z),new T(e.x,t.y,t.z),new T(t.x,e.y,t.z),new T(e.x,e.y,t.z),new T(t.x,t.y,e.z),new T(e.x,t.y,e.z),new T(t.x,e.y,e.z),new T(e.x,e.y,e.z)],Wu=t=>[t.coordinateSystem===hl?0:-1,1].flatMap(r=>[-1,1].flatMap(i=>[-1,1].map(n=>new T(n,i,r).unproject(t)))),Mn=(t,e,r)=>t.every(i=>i.distanceToPoint(e)>=-r),_a=(t,e,r)=>e.x>=t.min.x-r&&e.x<=t.max.x+r&&e.y>=t.min.y-r&&e.y<=t.max.y+r&&e.z>=t.min.z-r&&e.z<=t.max.z+r,es=(t,e,r)=>{t.some(i=>i.distanceToSquared(e)<=r)||t.push(e)},xa=(t,e,r,i,n,s)=>{const a=e.clone().sub(t);for(const o of r){const c=o.distanceToPoint(t),l=o.distanceToPoint(e),u=c-l;if(Math.abs(u)<=Number.EPSILON)continue;const d=c/u;if(d<0||d>1)continue;const g=t.clone().addScaledVector(a,d);i(g)&&es(n,g,s)}},$o=(t,e,r=1e-6)=>{if(e.isEmpty())return[];t.updateMatrixWorld(!0);const i=new Hr().setFromProjectionMatrix(new te().multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),t.coordinateSystem,t.reversedDepth);if(!i.intersectsBox(e))return[];const n=r*r,s=Vu(e),a=Wu(t),o=[];for(const l of s)Mn(i.planes,l,r)&&es(o,l,n);for(const l of a)_a(e,l,r)&&es(o,l,n);for(const[l,u]of wa)xa(s[l],s[u],i.planes,d=>Mn(i.planes,d,r),o,n);const c=[new at(new T(1,0,0),-e.min.x),new at(new T(-1,0,0),e.max.x),new at(new T(0,1,0),-e.min.y),new at(new T(0,-1,0),e.max.y),new at(new T(0,0,1),-e.min.z),new at(new T(0,0,-1),e.max.z)];for(const[l,u]of wa)xa(a[l],a[u],c,d=>_a(e,d,r)&&Mn(i.planes,d,r),o,n);return o},Ko=(t,e)=>{const r=Wr(t).map(o=>new re(o.x,o.y,o.z,1).applyMatrix4(e));if(r.some(o=>o.w<=0))return new re(0,0,1,1);const i=Math.max(0,(Math.min(...r.map(o=>o.x/o.w))+1)/2),n=Math.max(0,(Math.min(...r.map(o=>o.y/o.w))+1)/2),s=Math.min(1,(Math.max(...r.map(o=>o.x/o.w))+1)/2),a=Math.min(1,(Math.max(...r.map(o=>o.y/o.w))+1)/2);return new re(i,n,Math.max(0,s-i),Math.max(0,a-n))},Wr=t=>[t.min.x,t.max.x].flatMap(e=>[t.min.y,t.max.y].flatMap(r=>[t.min.z,t.max.z].map(i=>new T(e,r,i)))),qo=(t,e,r)=>{const i=e.elements,n=Wr(t).map(o=>new re(o.x,o.y,o.z,1).applyMatrix4(e)),s=Math.min(...n.map(o=>o.w));if(s<=0)return 1/0;let a=0;for(const[o,c]of[[0,r.x],[1,r.y]])for(let l=0;l<3;l+=1){const u=Math.max(...n.map(d=>Math.abs(i[l*4+o]*d.w-(o===0?d.x:d.y)*i[l*4+3])));a+=(c*.5*u/(s*s))**2}return Math.sqrt(a)},Gu=(t,e,r,i)=>{if(!(i>0&&Number.isFinite(i))||!(r.x>0&&r.y>0))throw new RangeError("Shadow page projection requires a positive pixel target and viewport");const n=new te().multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),s=new Set;for(const{id:o,bounds:c}of t){if(s.has(o)||c.isEmpty()||![...c.min.toArray(),...c.max.toArray()].every(Number.isFinite))throw new RangeError("Receiver cells require unique IDs and finite, nonempty bounds");s.add(o)}const a=new Hr().setFromProjectionMatrix(n);return t.filter(({bounds:o})=>a.intersectsBox(o)).map(o=>({...o,screenBounds:Ko(o.bounds,n),groundTexelTargetMeters:Math.max(1e-9,i/qo(o.bounds,n,r))}))},ju=(t,e,r,i,n)=>t.clone().union(t.clone().translate(e.clone().normalize().multiplyScalar(r))).expandByScalar(2*r*Math.sin(i/2)+n),Yu=(t,e)=>t.flatMap(({bounds:r})=>$o(e,r).length>0?Wr(r):[]),ai={WEST:"west",EAST:"east",SOUTH:"south",NORTH:"north"},_r=({bounds:t})=>(t.max.x-t.min.x)*(t.max.z-t.min.z),$u=(t,e)=>t.min.z===e.min.z&&t.max.z===e.max.z&&(t.max.x===e.min.x||e.max.x===t.min.x)||t.min.x===e.min.x&&t.max.x===e.max.x&&(t.max.z===e.min.z||e.max.z===t.min.z),Ku=t=>{const e=new Map(t.map(i=>[i.id,i]));let r=!0;for(;r;){r=!1;for(const i of e.values()){if(Math.min(i.bounds.max.x-i.bounds.min.x,i.bounds.max.z-i.bounds.min.z)>=i.fragmentMergeWidthMeters)continue;const s=_r(i),a=[...e.values()].filter(o=>o!==i&&(_r(o)>s||_r(o)===s&&o.id<i.id)&&$u(i.bounds,o.bounds)).sort((o,c)=>_r(c)-_r(o)||(o.id<c.id?-1:o.id>c.id?1:0))[0];if(a){e.set(a.id,{...a,bounds:a.bounds.clone().union(i.bounds)}),e.delete(i.id),r=!0;break}}}return[...e.values()].map(({id:i,bounds:n})=>({id:i,bounds:n}))},En=t=>({west:t.min.x,east:t.max.x,south:t.min.z,north:t.max.z}),Xo=(t,e)=>t.west<e.east&&t.east>e.west&&t.south<e.north&&t.north>e.south,qu=(t,e,r)=>{if(!Xo(t,e))return[t];const i=Math.max(t.west,e.west),n=Math.min(t.east,e.east),s=Math.max(t.south,e.south),a=Math.min(t.north,e.north);return[{...t,east:i,side:ai.WEST},{...t,west:n,side:ai.EAST},{west:i,east:n,south:t.south,north:s,side:ai.SOUTH},{west:i,east:n,south:a,north:t.north,side:ai.NORTH}].filter(o=>o.west<o.east&&o.south<o.north).map(({side:o,...c})=>({...c,splitPath:[...t.splitPath,r,o]}))},Xu=t=>{const e=new Set;for(const{id:n,bounds:s}of t){if(e.has(n)||s.isEmpty()||![...s.min.toArray(),...s.max.toArray()].every(Number.isFinite))throw new RangeError("Receiver tiles require unique IDs and finite bounds");e.add(n)}const r=[...t].sort((n,s)=>n.id<s.id?-1:n.id>s.id?1:0);if(r.every(({receiverObjectId:n})=>n!==void 0))return r;const i=r.flatMap(({id:n,bounds:s},a)=>{const o=En(s);return o.west===o.east||o.south===o.north?[]:r.slice(0,a).reduce((l,u)=>l.flatMap(d=>qu(d,En(u.bounds),u.id)),[{...o,splitPath:[]}]).map(l=>{const u=r.reduce((d,g)=>Xo(l,En(g.bounds))?[Math.min(d[0],g.bounds.min.y),Math.max(d[1],g.bounds.max.y)]:d,[s.min.y,s.max.y]);return{fragmentMergeWidthMeters:l.splitPath.length===0?0:Math.max(.1,.01*Math.min(o.east-o.west,o.north-o.south)),id:l.splitPath.length===0?n:JSON.stringify([n,...l.splitPath]),bounds:new Ie(new T(l.west,u[0],l.south),new T(l.east,u[1],l.north))}})});return Ku(i)},Qu=(t,e=16)=>{if(!Number.isInteger(e)||e<=0||t.length===0)return[];const i=t.reduce((c,l)=>c.union(l.bounds),new Ie).getCenter(new T),n=new Set(t.map(({id:c})=>c)),s=new Map;for(const c of t){const l=c.bounds.max.x-c.bounds.min.x;if(!(l>0&&Number.isFinite(l)))continue;const u=Math.round(c.bounds.min.x/l),d=Math.round(c.bounds.min.z/l);for(let g=-1;g<=1;g+=1)for(let h=-1;h<=1;h+=1){const m=`${l}:${u+g}:${d+h}`;n.has(m)||s.has(m)||s.set(m,{id:m,bounds:c.bounds.clone().translate(new T(g*l,0,h*l))})}}const a=Array.from({length:8},()=>[]);for(const c of s.values()){const l=c.bounds.getCenter(new T).sub(i),u=(Math.round(Math.atan2(l.z,l.x)/(Math.PI/4))+8)%8;a[u].push(c)}for(const c of a)c.sort((l,u)=>l.bounds.distanceToPoint(i)-u.bounds.distanceToPoint(i)||l.id.localeCompare(u.id));const o=[];for(let c=0;o.length<e;c+=1){const l=a.flatMap(u=>u[c]?[u[c]]:[]);if(l.length===0)break;o.push(...l.slice(0,e-o.length))}return o},Zu=(t,e)=>{const r=t.getCenter(new T);let i=null,n=1/0;for(const s of e){const a=s.receiverBounds.distanceToPoint(r);a<n&&Number.isInteger(s.terrainLevel)&&(n=a,i=s.terrainLevel)}return i};/**
 * postprocessing v6.39.4 build Mon Jul 27 2026
 * https://github.com/pmndrs/postprocessing
 * Copyright 2015-2026 Raoul van Rüschen
 * @license Zlib
 */var Ju=(()=>{const t=new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),e=new Float32Array([0,0,2,0,0,2]),r=new Po;return r.setAttribute("position",new ua(t,3)),r.setAttribute("uv",new ua(e,2)),r})(),ed=class ts{static get fullscreenGeometry(){return Ju}constructor(e="Pass",r=new Nr,i=new vs){this.name=e,this.renderer=null,this.scene=r,this.camera=i,this.screen=null,this.rtt=!0,this.needsSwap=!0,this.needsDepthBlit=!1,this.needsDepthTexture=!1,this.enabled=!0}get renderToScreen(){return!this.rtt}set renderToScreen(e){if(this.rtt===e){const r=this.fullscreenMaterial;r!==null&&(r.needsUpdate=!0),this.rtt=!e}}set mainScene(e){}set mainCamera(e){}setRenderer(e){this.renderer=e}isEnabled(){return this.enabled}setEnabled(e){this.enabled=e}get fullscreenMaterial(){return this.screen!==null?this.screen.material:null}set fullscreenMaterial(e){let r=this.screen;r!==null?r.material=e:(r=new kr(ts.fullscreenGeometry,e),r.frustumCulled=!1,this.scene===null&&(this.scene=new Nr),this.scene.add(r),this.screen=r)}getFullscreenMaterial(){return this.fullscreenMaterial}setFullscreenMaterial(e){this.fullscreenMaterial=e}getDepthTexture(){return null}setDepthTexture(e,r=Io){}render(e,r,i,n,s){throw new Error("Render method not implemented!")}setSize(e,r){}initialize(e,r,i){}dispose(){for(const e of Object.keys(this)){const r=this[e];(r instanceof je||r instanceof Fi||r instanceof Do||r instanceof ts)&&this[e].dispose()}this.fullscreenMaterial!==null&&this.fullscreenMaterial.dispose()}},Qo={NONE:0,DEPTH:1,CONVOLUTION:2},J={SKIP:9,SET:30,ADD:0,ALPHA:1,AVERAGE:2,COLOR:3,COLOR_BURN:4,COLOR_DODGE:5,DARKEN:6,DIFFERENCE:7,DIVIDE:8,DST:9,EXCLUSION:10,HARD_LIGHT:11,HARD_MIX:12,HUE:13,INVERT:14,INVERT_RGB:15,LIGHTEN:16,LINEAR_BURN:17,LINEAR_DODGE:18,LINEAR_LIGHT:19,LUMINOSITY:20,MULTIPLY:21,NEGATION:22,NORMAL:23,OVERLAY:24,PIN_LIGHT:25,REFLECT:26,SATURATION:27,SCREEN:28,SOFT_LIGHT:29,SRC:30,SUBTRACT:31,VIVID_LIGHT:32},td="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",rd="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,src.a*opacity);}",id="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=(dst.rgb+src.rgb)*0.5;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",nd="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.xy,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",sd="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=mix(step(0.0,b)*(1.0-min(vec3(1.0),(1.0-a)/max(b,1e-9))),vec3(1.0),step(1.0,a));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",ad="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=step(0.0,a)*mix(min(vec3(1.0),a/max(1.0-b,1e-9)),vec3(1.0),step(1.0,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",od="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",cd="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=abs(dst.rgb-src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",ld="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb/max(src.rgb,1e-9);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",ud="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-2.0*dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",dd="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb,1.0);vec3 b=min(src.rgb,1.0);vec3 c=mix(2.0*a*b,1.0-2.0*(1.0-a)*(1.0-b),step(0.5,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",hd="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=step(1.0,dst.rgb+src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",md="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.x,a.yz));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",fd="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",pd="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=src.rgb*max(1.0-dst.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",gd="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",vd="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",yd="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb+src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Sd="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(2.0*src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",wd="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.xy,b.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",_d="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",xd="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-abs(1.0-dst.rgb-src.rgb),0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Td="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,opacity);}",bd="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=2.0*src.rgb*dst.rgb;vec3 b=1.0-2.0*(1.0-src.rgb)*(1.0-dst.rgb);vec3 c=mix(a,b,step(0.5,dst.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Md="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 c=mix(mix(src2,dst.rgb,step(0.5*dst.rgb,src.rgb)),max(src2-1.0,vec3(0.0)),step(dst.rgb,src2-1.0));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Ed="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb*dst.rgb/max(1.0-src.rgb,1e-9),1.0);vec3 c=mix(a,src.rgb,step(1.0,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Rd="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.x,b.y,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Ad="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-min(dst.rgb*src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Cd="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 d=dst.rgb+(src2-1.0);vec3 w=step(0.5,src.rgb);vec3 a=dst.rgb-(1.0-src2)*dst.rgb*(1.0-dst.rgb);vec3 b=mix(d*(sqrt(dst.rgb)-dst.rgb),d*dst.rgb*((16.0*dst.rgb-12.0)*dst.rgb+3.0),w*(1.0-step(0.25,dst.rgb)));vec3 c=mix(a,b,w);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Id="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return src;}",Dd="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Pd="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=mix(max(1.0-min((1.0-dst.rgb)/(2.0*src.rgb),1.0),0.0),min(dst.rgb/(2.0*(1.0-src.rgb)),1.0),step(0.5,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Od=new Map([[J.ADD,td],[J.ALPHA,rd],[J.AVERAGE,id],[J.COLOR,nd],[J.COLOR_BURN,sd],[J.COLOR_DODGE,ad],[J.DARKEN,od],[J.DIFFERENCE,cd],[J.DIVIDE,ld],[J.DST,null],[J.EXCLUSION,ud],[J.HARD_LIGHT,dd],[J.HARD_MIX,hd],[J.HUE,md],[J.INVERT,fd],[J.INVERT_RGB,pd],[J.LIGHTEN,gd],[J.LINEAR_BURN,vd],[J.LINEAR_DODGE,yd],[J.LINEAR_LIGHT,Sd],[J.LUMINOSITY,wd],[J.MULTIPLY,_d],[J.NEGATION,xd],[J.NORMAL,Td],[J.OVERLAY,bd],[J.PIN_LIGHT,Md],[J.REFLECT,Ed],[J.SATURATION,Rd],[J.SCREEN,Ad],[J.SOFT_LIGHT,Cd],[J.SRC,Id],[J.SUBTRACT,Dd],[J.VIVID_LIGHT,Pd]]),Nd=class extends Co{constructor(t,e=1){super(),this._blendFunction=t,this.opacity=new I(e)}getOpacity(){return this.opacity.value}setOpacity(t){this.opacity.value=t}get blendFunction(){return this._blendFunction}set blendFunction(t){this._blendFunction=t,this.dispatchEvent({type:"change"})}getBlendFunction(){return this.blendFunction}setBlendFunction(t){this.blendFunction=t}getShaderCode(){return Od.get(this.blendFunction)}},Ld=class extends Co{constructor(t,e,{attributes:r=Qo.NONE,blendFunction:i=J.NORMAL,defines:n=new Map,uniforms:s=new Map,extensions:a=null,vertexShader:o=null}={}){super(),this.name=t,this.renderer=null,this.attributes=r,this.fragmentShader=e,this.vertexShader=o,this.defines=n,this.uniforms=s,this.extensions=a,this.blendMode=new Nd(i),this.blendMode.addEventListener("change",c=>this.setChanged()),this._inputColorSpace=ml,this._outputColorSpace=fl}get inputColorSpace(){return this._inputColorSpace}set inputColorSpace(t){this._inputColorSpace=t,this.setChanged()}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t,this.setChanged()}set mainScene(t){}set mainCamera(t){}getName(){return this.name}setRenderer(t){this.renderer=t}getDefines(){return this.defines}getUniforms(){return this.uniforms}getExtensions(){return this.extensions}getBlendMode(){return this.blendMode}getAttributes(){return this.attributes}setAttributes(t){this.attributes=t,this.setChanged()}getFragmentShader(){return this.fragmentShader}setFragmentShader(t){this.fragmentShader=t,this.setChanged()}getVertexShader(){return this.vertexShader}setVertexShader(t){this.vertexShader=t,this.setChanged()}setChanged(){this.dispatchEvent({type:"change"})}setDepthTexture(t,e=Io){}update(t,e,r){}setSize(t,e){}initialize(t,e,r){}dispose(){for(const t of Object.keys(this)){const e=this[t];(e instanceof je||e instanceof Fi||e instanceof Do||e instanceof ed)&&this[t].dispose()}}};const Fd=new T;function Zo(t,e,r=new T,i){const{x:n,y:s,z:a}=t,o=e.x,c=e.y,l=e.z,u=n*n*o,d=s*s*c,g=a*a*l,h=u+d+g,m=Math.sqrt(1/h);if(!Number.isFinite(m))return;const v=Fd.copy(t).multiplyScalar(m);if(h<((i==null?void 0:i.centerTolerance)??.1))return r.copy(v);const p=v.multiply(e).multiplyScalar(2);let y=(1-m)*t.length()/(p.length()/2),b=0,R,M,C,E;do{y-=b,R=1/(1+y*o),M=1/(1+y*c),C=1/(1+y*l);const A=R*R,F=M*M,U=C*C,N=A*R,z=F*M,Z=U*C;E=u*A+d*F+g*U-1,b=E/((u*N*o+d*z*c+g*Z*l)*-2)}while(Math.abs(E)>1e-12);return r.set(n*R,s*M,a*C)}const oi=new T,Ta=new T,ba=new T,rs=class{constructor(e,r,i){this.radii=new T(e,r,i)}get minimumRadius(){return Math.min(this.radii.x,this.radii.y,this.radii.z)}get maximumRadius(){return Math.max(this.radii.x,this.radii.y,this.radii.z)}reciprocalRadii(e=new T){const{x:r,y:i,z:n}=this.radii;return e.set(1/r,1/i,1/n)}reciprocalRadiiSquared(e=new T){const{x:r,y:i,z:n}=this.radii;return e.set(1/r**2,1/i**2,1/n**2)}projectOnSurface(e,r=new T,i){return Zo(e,this.reciprocalRadiiSquared(),r,i)}getSurfaceNormal(e,r=new T){return r.multiplyVectors(this.reciprocalRadiiSquared(oi),e).normalize()}getEastNorthUpVectors(e,r=new T,i=new T,n=new T){this.getSurfaceNormal(e,n),r.set(-e.y,e.x,0).normalize(),i.crossVectors(n,r).normalize()}getEastNorthUpFrame(e,r=new te){const i=oi,n=Ta,s=ba;return this.getEastNorthUpVectors(e,i,n,s),r.makeBasis(i,n,s).setPosition(e)}getIntersection(e,r=new T){const i=this.reciprocalRadii(oi),n=Ta.copy(i).multiply(e.origin),s=ba.copy(i).multiply(e.direction),a=n.lengthSq(),o=s.lengthSq(),c=n.dot(s),l=c**2-o*(a-1);if(a===1)return r.copy(e.origin);if(a>1){if(c>=0||l<0)return;const u=Math.sqrt(l),d=(-c-u)/o,g=(-c+u)/o;return e.at(Math.min(d,g),r)}if(a<1){const u=c**2-o*(a-1),d=Math.sqrt(u),g=(-c+d)/o;return e.at(g,r)}if(c<0)return e.at(-c/o,r)}getOsculatingSphereCenter(e,r,i=new T){const n=this.radii.x**2,s=oi.set(e.x/n,e.y/n,e.z/this.radii.z**2).normalize();return i.copy(s.multiplyScalar(-r).add(e))}};rs.WGS84=new rs(6378137,6378137,6356752314245179e-9);let ct=rs;const ci=new T,Ma=new T,Er=class is{constructor(e=0,r=0,i=0){this.longitude=e,this.latitude=r,this.height=i}set(e,r,i){return this.longitude=e,this.latitude=r,i!=null&&(this.height=i),this}clone(){return new is(this.longitude,this.latitude,this.height)}copy(e){return this.longitude=e.longitude,this.latitude=e.latitude,this.height=e.height,this}equals(e){return e.longitude===this.longitude&&e.latitude===this.latitude&&e.height===this.height}setLongitude(e){return this.longitude=e,this}setLatitude(e){return this.latitude=e,this}setHeight(e){return this.height=e,this}normalize(){return this.longitude<is.MIN_LONGITUDE&&(this.longitude+=Math.PI*2),this}setFromECEF(e,r){const i=((r==null?void 0:r.ellipsoid)??ct.WGS84).reciprocalRadiiSquared(ci),n=Zo(e,i,Ma,r);if(n==null)throw new Error(`Could not project position to ellipsoid surface: ${e.toArray()}`);const s=ci.multiplyVectors(n,i).normalize();this.longitude=Math.atan2(s.y,s.x),this.latitude=Math.asin(s.z);const a=ci.subVectors(e,n);return this.height=Math.sign(a.dot(e))*a.length(),this}toECEF(e=new T,r){const i=(r==null?void 0:r.ellipsoid)??ct.WGS84,n=ci.multiplyVectors(i.radii,i.radii),s=Math.cos(this.latitude),a=Ma.set(s*Math.cos(this.longitude),s*Math.sin(this.longitude),Math.sin(this.latitude)).normalize();return e.multiplyVectors(n,a),e.divideScalar(Math.sqrt(a.dot(e))).add(a.multiplyScalar(this.height))}fromArray(e,r=0){return this.longitude=e[r],this.latitude=e[r+1],this.height=e[r+2],this}toArray(e=[],r=0){return e[r]=this.longitude,e[r+1]=this.latitude,e[r+2]=this.height,e}*[Symbol.iterator](){yield this.longitude,yield this.latitude,yield this.height}};Er.MIN_LONGITUDE=-Math.PI,Er.MAX_LONGITUDE=Math.PI,Er.MIN_LATITUDE=-Math.PI/2,Er.MAX_LATITUDE=Math.PI/2;let Jo=Er;var Bd="Invariant failed";function ec(t,e){if(!t)throw new Error(Bd)}class Ud extends Ss{load(e,r,i,n){const s=new gl(this.manager);s.setResponseType("arraybuffer"),s.setRequestHeader(this.requestHeader),s.setPath(this.path),s.setWithCredentials(this.withCredentials),s.load(e,a=>{ec(a instanceof ArrayBuffer);try{r(a)}catch(o){n!=null?n(o):console.error(o),this.manager.itemError(e)}},i,n)}}const kd="This is not an object",Hd="This is not a Float16Array object",Ea="This constructor is not a subclass of Float16Array",tc="The constructor property value is not an object",zd="Species constructor didn't return TypedArray object",Vd="Derived constructor created TypedArray object which was too small length",Dr="Attempting to access detached ArrayBuffer",ns="Cannot convert undefined or null to object",ss="Cannot mix BigInt and other types, use explicit conversions",Ra="@@iterator property is not callable",Aa="Reduce of empty array with no initial value",Wd="The comparison function must be either a function or undefined",Rn="Offset is out of bounds";function ue(t){return(e,...r)=>Ne(t,e,r)}function cr(t,e){return ue(ir(t,e).get)}const{apply:Ne,construct:Rr,defineProperty:Gd,get:An,getOwnPropertyDescriptor:ir,getPrototypeOf:Gr,has:as,ownKeys:rc,set:Ca,setPrototypeOf:ic}=Reflect,jd=Proxy,{EPSILON:Yd,MAX_SAFE_INTEGER:Ia,isFinite:nc,isNaN:nr}=Number,{iterator:lt,species:$d,toStringTag:Ts,for:Kd}=Symbol,sr=Object,{create:ji,defineProperty:jr,freeze:qd,is:Da}=sr,os=sr.prototype,Xd=os.__lookupGetter__?ue(os.__lookupGetter__):(t,e)=>{if(t==null)throw ge(ns);let r=sr(t);do{const i=ir(r,e);if(i!==void 0)return Tt(i,"get")?i.get:void 0}while((r=Gr(r))!==null)},Tt=sr.hasOwn||ue(os.hasOwnProperty),sc=Array,ac=sc.isArray,Yi=sc.prototype,Qd=ue(Yi.join),Zd=ue(Yi.push),Jd=ue(Yi.toLocaleString),bs=Yi[lt],eh=ue(bs),{abs:th,trunc:oc}=Math,$i=ArrayBuffer,rh=$i.isView,cc=$i.prototype,ih=ue(cc.slice),nh=cr(cc,"byteLength"),cs=typeof SharedArrayBuffer<"u"?SharedArrayBuffer:null,sh=cs&&cr(cs.prototype,"byteLength"),Ms=Gr(Uint8Array),ah=Ms.from,xe=Ms.prototype,oh=xe[lt],ch=ue(xe.keys),lh=ue(xe.values),uh=ue(xe.entries),dh=ue(xe.set),Pa=ue(xe.reverse),hh=ue(xe.fill),mh=ue(xe.copyWithin),Oa=ue(xe.sort),xr=ue(xe.slice),fh=ue(xe.subarray),_e=cr(xe,"buffer"),Ft=cr(xe,"byteOffset"),ne=cr(xe,"length"),lc=cr(xe,Ts),ph=Uint8Array,ke=Uint16Array,Na=(...t)=>Ne(ah,ke,t),Es=Uint32Array,gh=Float32Array,zt=Gr([][lt]()),Ki=ue(zt.next),vh=ue(function*(){}().next),yh=Gr(zt),Sh=DataView.prototype,wh=ue(Sh.getUint16),ge=TypeError,Cn=RangeError,uc=WeakSet,dc=uc.prototype,_h=ue(dc.add),xh=ue(dc.has),qi=WeakMap,Rs=qi.prototype,bi=ue(Rs.get),Th=ue(Rs.has),As=ue(Rs.set),hc=new qi,bh=ji(null,{next:{value:function(){const t=bi(hc,this);return Ki(t)}},[lt]:{value:function(){return this}}});function Ar(t){if(t[lt]===bs&&zt.next===Ki)return t;const e=ji(bh);return As(hc,e,eh(t)),e}const mc=new qi,fc=ji(yh,{next:{value:function(){const t=bi(mc,this);return vh(t)},writable:!0,configurable:!0}});for(const t of rc(zt))t!=="next"&&jr(fc,t,ir(zt,t));function La(t){const e=ji(fc);return As(mc,e,t),e}function Mi(t){return t!==null&&typeof t=="object"||typeof t=="function"}function Fa(t){return t!==null&&typeof t=="object"}function Ei(t){return lc(t)!==void 0}function ls(t){const e=lc(t);return e==="BigInt64Array"||e==="BigUint64Array"}function Mh(t){try{return ac(t)?!1:(nh(t),!0)}catch{return!1}}function pc(t){if(cs===null)return!1;try{return sh(t),!0}catch{return!1}}function Eh(t){return Mh(t)||pc(t)}function Ba(t){return ac(t)?t[lt]===bs&&zt.next===Ki:!1}function Rh(t){return Ei(t)?t[lt]===oh&&zt.next===Ki:!1}function li(t){if(typeof t!="string")return!1;const e=+t;return t!==e+""||!nc(e)?!1:e===oc(e)}const Ri=Kd("__Float16Array__");function Ah(t){if(!Fa(t))return!1;const e=Gr(t);if(!Fa(e))return!1;const r=e.constructor;if(r===void 0)return!1;if(!Mi(r))throw ge(tc);return as(r,Ri)}const us=1/Yd;function Ch(t){return t+us-us}const gc=6103515625e-14,Ih=65504,vc=.0009765625,Ua=vc*gc,Dh=vc*us;function Ph(t){const e=+t;if(!nc(e)||e===0)return e;const r=e>0?1:-1,i=th(e);if(i<gc)return r*Ch(i/Ua)*Ua;const n=(1+Dh)*i,s=n-(n-i);return s>Ih||nr(s)?r*(1/0):r*s}const yc=new $i(4),Sc=new gh(yc),wc=new Es(yc),Je=new ke(512),et=new ph(512);for(let t=0;t<256;++t){const e=t-127;e<-24?(Je[t]=0,Je[t|256]=32768,et[t]=24,et[t|256]=24):e<-14?(Je[t]=1024>>-e-14,Je[t|256]=1024>>-e-14|32768,et[t]=-e-1,et[t|256]=-e-1):e<=15?(Je[t]=e+15<<10,Je[t|256]=e+15<<10|32768,et[t]=13,et[t|256]=13):e<128?(Je[t]=31744,Je[t|256]=64512,et[t]=24,et[t|256]=24):(Je[t]=31744,Je[t|256]=64512,et[t]=13,et[t|256]=13)}function nt(t){Sc[0]=Ph(t);const e=wc[0],r=e>>23&511;return Je[r]+((e&8388607)>>et[r])}const Cs=new Es(2048);for(let t=1;t<1024;++t){let e=t<<13,r=0;for(;!(e&8388608);)e<<=1,r-=8388608;e&=-8388609,r+=947912704,Cs[t]=e|r}for(let t=1024;t<2048;++t)Cs[t]=939524096+(t-1024<<13);const lr=new Es(64);for(let t=1;t<31;++t)lr[t]=t<<23;lr[31]=1199570944;lr[32]=2147483648;for(let t=33;t<63;++t)lr[t]=2147483648+(t-32<<23);lr[63]=3347054592;const _c=new ke(64);for(let t=1;t<64;++t)t!==32&&(_c[t]=1024);function se(t){const e=t>>10;return wc[0]=Cs[_c[e]+(t&1023)]+lr[e],Sc[0]}function _t(t){const e=+t;return nr(e)||e===0?0:oc(e)}function In(t){const e=_t(t);return e<0?0:e<Ia?e:Ia}function ui(t,e){if(!Mi(t))throw ge(kd);const r=t.constructor;if(r===void 0)return e;if(!Mi(r))throw ge(tc);return r[$d]??e}function Pr(t){if(pc(t))return!1;try{return ih(t,0,0),!1}catch{}return!0}function ka(t,e){const r=nr(t),i=nr(e);if(r&&i)return 0;if(r)return 1;if(i||t<e)return-1;if(t>e)return 1;if(t===0&&e===0){const n=Da(t,0),s=Da(e,0);if(!n&&s)return-1;if(n&&!s)return 1}return 0}const Is=2,Ai=new qi;function Jt(t){return Th(Ai,t)||!rh(t)&&Ah(t)}function ie(t){if(!Jt(t))throw ge(Hd)}function di(t,e){const r=Jt(t),i=Ei(t);if(!r&&!i)throw ge(zd);if(typeof e=="number"){let n;if(r){const s=X(t);n=ne(s)}else n=ne(t);if(n<e)throw ge(Vd)}if(ls(t))throw ge(ss)}function X(t){const e=bi(Ai,t);if(e!==void 0){const n=_e(e);if(Pr(n))throw ge(Dr);return e}const r=t.buffer;if(Pr(r))throw ge(Dr);const i=Rr(oe,[r,t.byteOffset,t.length],t.constructor);return bi(Ai,i)}function Ha(t){const e=ne(t),r=[];for(let i=0;i<e;++i)r[i]=se(t[i]);return r}const xc=new uc;for(const t of rc(xe)){if(t===Ts)continue;const e=ir(xe,t);Tt(e,"get")&&typeof e.get=="function"&&_h(xc,e.get)}const Oh=qd({get(t,e,r){return li(e)&&Tt(t,e)?se(An(t,e)):xh(xc,Xd(t,e))?An(t,e):An(t,e,r)},set(t,e,r,i){return li(e)&&Tt(t,e)?Ca(t,e,nt(r)):Ca(t,e,r,i)},getOwnPropertyDescriptor(t,e){if(li(e)&&Tt(t,e)){const r=ir(t,e);return r.value=se(r.value),r}return ir(t,e)},defineProperty(t,e,r){return li(e)&&Tt(t,e)&&Tt(r,"value")&&(r.value=nt(r.value)),Gd(t,e,r)}});class oe{constructor(e,r,i){let n;if(Jt(e))n=Rr(ke,[X(e)],new.target);else if(Mi(e)&&!Eh(e)){let a,o;if(Ei(e)){a=e,o=ne(e);const c=_e(e);if(Pr(c))throw ge(Dr);if(ls(e))throw ge(ss);const l=new $i(o*Is);n=Rr(ke,[l],new.target)}else{const c=e[lt];if(c!=null&&typeof c!="function")throw ge(Ra);c!=null?Ba(e)?(a=e,o=e.length):(a=[...e],o=a.length):(a=e,o=In(a.length)),n=Rr(ke,[o],new.target)}for(let c=0;c<o;++c)n[c]=nt(a[c])}else n=Rr(ke,arguments,new.target);const s=new jd(n,Oh);return As(Ai,s,n),s}static from(e,...r){const i=this;if(!as(i,Ri))throw ge(Ea);if(i===oe){if(Jt(e)&&r.length===0){const u=X(e),d=new ke(_e(u),Ft(u),ne(u));return new oe(_e(xr(d)))}if(r.length===0)return new oe(_e(Na(e,nt)));const c=r[0],l=r[1];return new oe(_e(Na(e,function(u,...d){return nt(Ne(c,this,[u,...Ar(d)]))},l)))}let n,s;const a=e[lt];if(a!=null&&typeof a!="function")throw ge(Ra);if(a!=null)Ba(e)?(n=e,s=e.length):Rh(e)?(n=e,s=ne(e)):(n=[...e],s=n.length);else{if(e==null)throw ge(ns);n=sr(e),s=In(n.length)}const o=new i(s);if(r.length===0)for(let c=0;c<s;++c)o[c]=n[c];else{const c=r[0],l=r[1];for(let u=0;u<s;++u)o[u]=Ne(c,l,[n[u],u])}return o}static of(...e){const r=this;if(!as(r,Ri))throw ge(Ea);const i=e.length;if(r===oe){const s=new oe(i),a=X(s);for(let o=0;o<i;++o)a[o]=nt(e[o]);return s}const n=new r(i);for(let s=0;s<i;++s)n[s]=e[s];return n}keys(){ie(this);const e=X(this);return ch(e)}values(){ie(this);const e=X(this);return La(function*(){for(const r of lh(e))yield se(r)}())}entries(){ie(this);const e=X(this);return La(function*(){for(const[r,i]of uh(e))yield[r,se(i)]}())}at(e){ie(this);const r=X(this),i=ne(r),n=_t(e),s=n>=0?n:i+n;if(!(s<0||s>=i))return se(r[s])}with(e,r){ie(this);const i=X(this),n=ne(i),s=_t(e),a=s>=0?s:n+s,o=+r;if(a<0||a>=n)throw Cn(Rn);const c=new ke(_e(i),Ft(i),ne(i)),l=new oe(_e(xr(c))),u=X(l);return u[a]=nt(o),l}map(e,...r){ie(this);const i=X(this),n=ne(i),s=r[0],a=ui(i,oe);if(a===oe){const c=new oe(n),l=X(c);for(let u=0;u<n;++u){const d=se(i[u]);l[u]=nt(Ne(e,s,[d,u,this]))}return c}const o=new a(n);di(o,n);for(let c=0;c<n;++c){const l=se(i[c]);o[c]=Ne(e,s,[l,c,this])}return o}filter(e,...r){ie(this);const i=X(this),n=ne(i),s=r[0],a=[];for(let l=0;l<n;++l){const u=se(i[l]);Ne(e,s,[u,l,this])&&Zd(a,u)}const o=ui(i,oe),c=new o(a);return di(c),c}reduce(e,...r){ie(this);const i=X(this),n=ne(i);if(n===0&&r.length===0)throw ge(Aa);let s,a;r.length===0?(s=se(i[0]),a=1):(s=r[0],a=0);for(let o=a;o<n;++o)s=e(s,se(i[o]),o,this);return s}reduceRight(e,...r){ie(this);const i=X(this),n=ne(i);if(n===0&&r.length===0)throw ge(Aa);let s,a;r.length===0?(s=se(i[n-1]),a=n-2):(s=r[0],a=n-1);for(let o=a;o>=0;--o)s=e(s,se(i[o]),o,this);return s}forEach(e,...r){ie(this);const i=X(this),n=ne(i),s=r[0];for(let a=0;a<n;++a)Ne(e,s,[se(i[a]),a,this])}find(e,...r){ie(this);const i=X(this),n=ne(i),s=r[0];for(let a=0;a<n;++a){const o=se(i[a]);if(Ne(e,s,[o,a,this]))return o}}findIndex(e,...r){ie(this);const i=X(this),n=ne(i),s=r[0];for(let a=0;a<n;++a){const o=se(i[a]);if(Ne(e,s,[o,a,this]))return a}return-1}findLast(e,...r){ie(this);const i=X(this),n=ne(i),s=r[0];for(let a=n-1;a>=0;--a){const o=se(i[a]);if(Ne(e,s,[o,a,this]))return o}}findLastIndex(e,...r){ie(this);const i=X(this),n=ne(i),s=r[0];for(let a=n-1;a>=0;--a){const o=se(i[a]);if(Ne(e,s,[o,a,this]))return a}return-1}every(e,...r){ie(this);const i=X(this),n=ne(i),s=r[0];for(let a=0;a<n;++a)if(!Ne(e,s,[se(i[a]),a,this]))return!1;return!0}some(e,...r){ie(this);const i=X(this),n=ne(i),s=r[0];for(let a=0;a<n;++a)if(Ne(e,s,[se(i[a]),a,this]))return!0;return!1}set(e,...r){ie(this);const i=X(this),n=_t(r[0]);if(n<0)throw Cn(Rn);if(e==null)throw ge(ns);if(ls(e))throw ge(ss);if(Jt(e))return dh(X(this),X(e),n);if(Ei(e)){const c=_e(e);if(Pr(c))throw ge(Dr)}const s=ne(i),a=sr(e),o=In(a.length);if(n===1/0||o+n>s)throw Cn(Rn);for(let c=0;c<o;++c)i[c+n]=nt(a[c])}reverse(){ie(this);const e=X(this);return Pa(e),this}toReversed(){ie(this);const e=X(this),r=new ke(_e(e),Ft(e),ne(e)),i=new oe(_e(xr(r))),n=X(i);return Pa(n),i}fill(e,...r){ie(this);const i=X(this);return hh(i,nt(e),...Ar(r)),this}copyWithin(e,r,...i){ie(this);const n=X(this);return mh(n,e,r,...Ar(i)),this}sort(e){ie(this);const r=X(this),i=e!==void 0?e:ka;return Oa(r,(n,s)=>i(se(n),se(s))),this}toSorted(e){ie(this);const r=X(this);if(e!==void 0&&typeof e!="function")throw new ge(Wd);const i=e!==void 0?e:ka,n=new ke(_e(r),Ft(r),ne(r)),s=new oe(_e(xr(n))),a=X(s);return Oa(a,(o,c)=>i(se(o),se(c))),s}slice(e,r){ie(this);const i=X(this),n=ui(i,oe);if(n===oe){const m=new ke(_e(i),Ft(i),ne(i));return new oe(_e(xr(m,e,r)))}const s=ne(i),a=_t(e),o=r===void 0?s:_t(r);let c;a===-1/0?c=0:a<0?c=s+a>0?s+a:0:c=s<a?s:a;let l;o===-1/0?l=0:o<0?l=s+o>0?s+o:0:l=s<o?s:o;const u=l-c>0?l-c:0,d=new n(u);if(di(d,u),u===0)return d;const g=_e(i);if(Pr(g))throw ge(Dr);let h=0;for(;c<l;)d[h]=se(i[c]),++c,++h;return d}subarray(e,r){ie(this);const i=X(this),n=ui(i,oe),s=new ke(_e(i),Ft(i),ne(i)),a=fh(s,e,r),o=new n(_e(a),Ft(a),ne(a));return di(o),o}indexOf(e,...r){ie(this);const i=X(this),n=ne(i);let s=_t(r[0]);if(s===1/0)return-1;s<0&&(s+=n,s<0&&(s=0));for(let a=s;a<n;++a)if(Tt(i,a)&&se(i[a])===e)return a;return-1}lastIndexOf(e,...r){ie(this);const i=X(this),n=ne(i);let s=r.length>=1?_t(r[0]):n-1;if(s===-1/0)return-1;s>=0?s=s<n-1?s:n-1:s+=n;for(let a=s;a>=0;--a)if(Tt(i,a)&&se(i[a])===e)return a;return-1}includes(e,...r){ie(this);const i=X(this),n=ne(i);let s=_t(r[0]);if(s===1/0)return!1;s<0&&(s+=n,s<0&&(s=0));const a=nr(e);for(let o=s;o<n;++o){const c=se(i[o]);if(a&&nr(c)||c===e)return!0}return!1}join(e){ie(this);const r=X(this),i=Ha(r);return Qd(i,e)}toLocaleString(...e){ie(this);const r=X(this),i=Ha(r);return Jd(i,...Ar(e))}get[Ts](){if(Jt(this))return"Float16Array"}}jr(oe,"BYTES_PER_ELEMENT",{value:Is});jr(oe,Ri,{});ic(oe,Ms);const Ci=oe.prototype;jr(Ci,"BYTES_PER_ELEMENT",{value:Is});jr(Ci,lt,{value:Ci.values,writable:!0,configurable:!0});ic(Ci,xe);function Nh(t,e,...r){return se(wh(t,e,...Ar(r)))}function Lh(t){return t instanceof Int8Array||t instanceof Uint8Array||t instanceof Uint8ClampedArray||t instanceof Int16Array||t instanceof Uint16Array||t instanceof Int32Array||t instanceof Uint32Array||t instanceof oe||t instanceof Float32Array||t instanceof Float64Array}let hi;function Fh(){if(hi!=null)return hi;const t=new Uint32Array([268435456]);return hi=new Uint8Array(t.buffer,t.byteOffset,t.byteLength)[0]===0,hi}function Bh(t,e,r,i=!0){if(i===Fh())return new e(t);const n=Object.assign(new DataView(t),{getFloat16(a,o){return Nh(this,a,o)}}),s=new e(n.byteLength/e.BYTES_PER_ELEMENT);for(let a=0,o=0;a<s.length;++a,o+=e.BYTES_PER_ELEMENT)s[a]=n[r](o,i);return s}const Dn=(t,e)=>Bh(t,oe,"getFloat16",e);class Uh extends Ss{load(e,r,i,n){const s=new Ud(this.manager);s.setRequestHeader(this.requestHeader),s.setPath(this.path),s.setWithCredentials(this.withCredentials),s.load(e,a=>{try{r(this.parseTypedArray(a))}catch(o){n!=null?n(o):console.error(o),this.manager.itemError(e)}},i,n)}}function kh(t){return class extends Uh{constructor(){super(...arguments),this.parseTypedArray=t}}}function Hh(t){const e=t instanceof Int8Array?vl:t instanceof Uint8Array?ha:t instanceof Uint8ClampedArray?ha:t instanceof Int16Array?yl:t instanceof Uint16Array?Sl:t instanceof Int32Array?wl:t instanceof Uint32Array?Ht:t instanceof oe?Oo:t instanceof Float32Array?xt:t instanceof Float64Array?xt:null;return ec(e!=null),e}const zh={format:Fr,minFilter:da,magFilter:da};class Vh extends Ss{constructor(){super(...arguments),this.parameters={}}load(e,r,i,n){const s=new this.Texture,a=new this.TypedArrayLoader(this.manager);a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(this.withCredentials),a.load(e,o=>{s.image.data=o instanceof oe?new Uint16Array(o.buffer):o;const{width:c,height:l,depth:u,...d}=this.parameters;c!=null&&(s.image.width=c),l!=null&&(s.image.height=l),"depth"in s.image&&u!=null&&(s.image.depth=u),s.type=Hh(o),Object.assign(s,d),s.needsUpdate=!0,r(s)},i,n)}}function Tc(t,e,r){return class extends Vh{constructor(){super(...arguments),this.Texture=t,this.TypedArrayLoader=kh(e),this.parameters={...zh,...r}}}}function Wh(t,e){return Tc(pl,t,e)}function Gh(t,e){return Tc(Qn,t,e)}function jh(t,e){return new(Wh(t,e))}function za(t,e){return new(Gh(t,e))}const Ii=ys.clamp,ds=ys.degToRad;function Yh(t,e,r,i=0,n=1){return ys.mapLinear(t,e,r,i,n)}function $h(t){return Math.min(Math.max(t,0),1)}function De(t){return(e,r)=>{e instanceof Fi?Object.defineProperty(e,r,{enumerable:!0,get(){var i;return((i=this.defines)==null?void 0:i[t])!=null},set(i){var n;i!==this[r]&&(i?(this.defines??(this.defines={}),this.defines[t]="1"):(n=this.defines)==null||delete n[t],this.needsUpdate=!0)}}):Object.defineProperty(e,r,{enumerable:!0,get(){return this.defines.has(t)},set(i){i!==this[r]&&(i?this.defines.set(t,"1"):this.defines.delete(t),this.setChanged())}})}}function Kh(t,{min:e=Number.MIN_SAFE_INTEGER,max:r=Number.MAX_SAFE_INTEGER}={}){return(i,n)=>{i instanceof Fi?Object.defineProperty(i,n,{enumerable:!0,get(){var s;const a=(s=this.defines)==null?void 0:s[t];return a!=null?parseInt(a):0},set(s){const a=this[n];s!==a&&(this.defines??(this.defines={}),this.defines[t]=Ii(s,e,r).toFixed(0),this.needsUpdate=!0)}}):Object.defineProperty(i,n,{enumerable:!0,get(){const s=this.defines.get(t);return s!=null?parseInt(s):0},set(s){const a=this[n];s!==a&&(this.defines.set(t,Ii(s,e,r).toFixed(0)),this.setChanged())}})}}var Yr=Uint8Array,bc=Uint16Array,qh=Uint32Array,Xh=new Yr([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Qh=new Yr([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Mc=function(t,e){for(var r=new bc(31),i=0;i<31;++i)r[i]=e+=1<<t[i-1];for(var n=new qh(r[30]),i=1;i<30;++i)for(var s=r[i];s<r[i+1];++s)n[s]=s-r[i]<<5|i;return[r,n]},Ec=Mc(Xh,2),Zh=Ec[0],Jh=Ec[1];Zh[28]=258,Jh[258]=28;Mc(Qh,0);var em=new bc(32768);for(var he=0;he<32768;++he){var It=(he&43690)>>>1|(he&21845)<<1;It=(It&52428)>>>2|(It&13107)<<2,It=(It&61680)>>>4|(It&3855)<<4,em[he]=((It&65280)>>>8|(It&255)<<8)>>>1}var Xi=new Yr(288);for(var he=0;he<144;++he)Xi[he]=8;for(var he=144;he<256;++he)Xi[he]=9;for(var he=256;he<280;++he)Xi[he]=7;for(var he=280;he<288;++he)Xi[he]=8;var tm=new Yr(32);for(var he=0;he<32;++he)tm[he]=5;var rm=new Yr(0),im=typeof TextDecoder<"u"&&new TextDecoder,nm=0;try{im.decode(rm,{stream:!0}),nm=1}catch{}const sm=/^[ \t]*#include +"([\w\d./]+)"/gm;function Vt(t,e){return t.replace(sm,(r,i)=>{const n=i.split("/").reduce((s,a)=>typeof s!="string"&&s!=null?s[a]:void 0,e);if(typeof n!="string")throw new Error(`Could not find include for ${i}.`);return Vt(n,e)})}const am=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*(?:i\s*\+\+|\+\+\s*i)\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function om(t,e,r,i){let n="";for(let s=parseInt(e);s<parseInt(r);++s)n+=i.replace(/\[\s*i\s*\]/g,"["+s+"]").replace(/UNROLLED_LOOP_INDEX/g,`${s}`);return n}function cm(t){return t.replace(am,om)}const lm=`// Reference: https://github.com/mrdoob/three.js/blob/r171/examples/jsm/csm/CSMShader.js

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
`,um=`// cSpell:words logdepthbuf

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
`,dm=`// Reference: https://advances.realtimerendering.com/s2014/index.html#_NEXT_GENERATION_POST

float interleavedGradientNoise(const vec2 coord) {
  const vec3 magic = vec3(0.06711056, 0.00583715, 52.9829189);
  return fract(magic.z * fract(dot(coord, magic.xy)));
}
`,hm=`#if !defined(saturate)
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
`,mm=`// Reference: https://jcgt.org/published/0003/02/01/paper.pdf

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
`,fm=`float raySphereFirstIntersection(
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
`,pm=`vec3 screenToView(
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
`,gm=`// Reference: https://www.gamedev.net/tutorials/programming/graphics/contact-hardening-soft-shadows-made-fast-r4906/

vec2 vogelDisk(const int index, const int sampleCount, const float phi) {
  const float goldenAngle = 2.39996322972865332;
  float r = sqrt(float(index) + 0.5) / sqrt(float(sampleCount));
  float theta = float(index) * goldenAngle + phi;
  return r * vec2(cos(theta), sin(theta));
}
`,vm=lm,ym=um,Sm=dm,wm=hm,_m=mm,Rc=fm,xm=pm,Tm=gm,Ds=`// Based on the following work and adapted to Three.js.
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
`,ar=`uniform vec3 u_solar_irradiance;
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
`,bm=["solarIrradiance","sunAngularRadius","bottomRadius","topRadius","rayleighScattering","mieScattering","miePhaseFunctionG","muSMin","skyRadianceToLuminance","sunRadianceToLuminance","luminousEfficiency"];function Mm(t,e){if(e!=null)for(const r of bm){const i=e[r];i!=null&&(t[r]instanceof T?t[r].copy(i):t[r]=i)}}const hs=class{constructor(e){this.solarIrradiance=new T(1.474,1.8504,1.91198),this.sunAngularRadius=.004675,this.bottomRadius=636e4,this.topRadius=642e4,this.rayleighScattering=new T(.005802,.013558,.0331),this.mieScattering=new T(.003996,.003996,.003996),this.miePhaseFunctionG=.8,this.muSMin=Math.cos(ds(120)),this.skyRadianceToLuminance=new T(114974.916437,71305.954816,65310.548555),this.sunRadianceToLuminance=new T(98242.786222,69954.398112,66475.012354),this.luminousEfficiency=new T(.2126,.7152,.0722),this.skyRadianceToRelativeLuminance=new T,this.sunRadianceToRelativeLuminance=new T,Mm(this,e);const r=this.luminousEfficiency.dot(this.skyRadianceToLuminance);this.skyRadianceToRelativeLuminance.copy(this.skyRadianceToLuminance).divideScalar(r),this.sunRadianceToRelativeLuminance.copy(this.sunRadianceToLuminance).divideScalar(r)}};hs.DEFAULT=new hs;let Qi=hs;const Zi=64,Ji=16,Ps=32,Os=128,Ns=32,Ls=8,Em=Ls*Ns,Rm=Os,Am=Ps,en=256,tn=64,tr=1/1e3,Cm="82e00c5222d6cbc222af69abdf6d3f4fc9f63030",Pn=`https://media.githubusercontent.com/media/takram-design-engineering/three-geospatial/${Cm}/packages/atmosphere/assets`,Im=new T;function rn(t,e,r,i,n=!0){const s=r.projectOnSurface(t,Im);return s!=null?r.getOsculatingSphereCenter(!n||s.lengthSq()<t.lengthSq()?s:t,e,i):i.setScalar(0)}const Dm=`precision highp sampler2DArray;

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
`,Pm=`uniform mat4 inverseViewMatrix;
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
`,Ac=`vec3 getLunarRadiance(const float moonAngularRadius) {
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
`;var Om=Object.defineProperty,Ye=(t,e,r,i)=>{for(var n=void 0,s=t.length-1,a;s>=0;s--)(a=t[s])&&(n=a(e,r,n)||n);return n&&Om(e,r,n),n};const Nm=new T,Lm=new T,Fm=new Jo,Bm={blendFunction:J.NORMAL,octEncodedNormal:!1,reconstructNormal:!1,ellipsoid:ct.WGS84,correctAltitude:!0,correctGeometricError:!0,photometric:!0,sunIrradiance:!1,skyIrradiance:!1,transmittance:!0,inscatter:!0,irradianceScale:1,sky:!1,sun:!0,moon:!0,moonAngularRadius:.0045,lunarRadianceScale:1};class $e extends Ld{constructor(e=new Oi,r,i=Qi.DEFAULT){const{blendFunction:n,normalBuffer:s=null,octEncodedNormal:a,reconstructNormal:o,irradianceTexture:c=null,scatteringTexture:l=null,transmittanceTexture:u=null,ellipsoid:d,correctAltitude:g,correctGeometricError:h,photometric:m,sunDirection:v,sunIrradiance:p,skyIrradiance:y,transmittance:b,inscatter:R,irradianceScale:M,sky:C,sun:E,moon:A,moonDirection:F,moonAngularRadius:U,lunarRadianceScale:N}={...Bm,...r};super("AerialPerspectiveEffect",cm(Vt(Dm,{core:{depth:ym,packing:_m,math:wm,transform:xm,raySphereIntersection:Rc,cascadedShadowMaps:vm,interleavedGradientNoise:Sm,vogelDisk:Tm},parameters:ar,functions:Ds,sky:Ac})),{blendFunction:n,vertexShader:Vt(Pm,{parameters:ar}),attributes:Qo.DEPTH,uniforms:new Map(Object.entries({normalBuffer:new I(s),projectionMatrix:new I(new te),viewMatrix:new I(new te),inverseProjectionMatrix:new I(new te),inverseViewMatrix:new I(new te),cameraPosition:new I(new T),bottomRadius:new I(i.bottomRadius),ellipsoidRadii:new I(new T),ellipsoidCenter:new I(new T),inverseEllipsoidMatrix:new I(new te),altitudeCorrection:new I(new T),sunDirection:new I((v==null?void 0:v.clone())??new T),irradianceScale:new I(M),idealSphereAlpha:new I(0),moonDirection:new I((F==null?void 0:F.clone())??new T),moonAngularRadius:new I(U),lunarRadianceScale:new I(N),overlayBuffer:new I(null),shadowBuffer:new I(null),shadowMapSize:new I(new Nt),shadowIntervals:new I([]),shadowMatrices:new I([]),inverseShadowMatrices:new I([]),shadowFar:new I(0),shadowTopHeight:new I(0),shadowRadius:new I(3),stbnTexture:new I(null),frame:new I(0),shadowLengthBuffer:new I(null),u_solar_irradiance:new I(i.solarIrradiance),u_sun_angular_radius:new I(i.sunAngularRadius),u_bottom_radius:new I(i.bottomRadius*tr),u_top_radius:new I(i.topRadius*tr),u_rayleigh_scattering:new I(i.rayleighScattering),u_mie_scattering:new I(i.mieScattering),u_mie_phase_function_g:new I(i.miePhaseFunctionG),u_mu_s_min:new I(i.muSMin),u_irradiance_texture:new I(c),u_scattering_texture:new I(l),u_single_mie_scattering_texture:new I(l),u_transmittance_texture:new I(u)})),defines:new Map([["TRANSMITTANCE_TEXTURE_WIDTH",en.toFixed(0)],["TRANSMITTANCE_TEXTURE_HEIGHT",tn.toFixed(0)],["SCATTERING_TEXTURE_R_SIZE",Ps.toFixed(0)],["SCATTERING_TEXTURE_MU_SIZE",Os.toFixed(0)],["SCATTERING_TEXTURE_MU_S_SIZE",Ns.toFixed(0)],["SCATTERING_TEXTURE_NU_SIZE",Ls.toFixed(0)],["IRRADIANCE_TEXTURE_WIDTH",Zi.toFixed(0)],["IRRADIANCE_TEXTURE_HEIGHT",Ji.toFixed(0)],["METER_TO_LENGTH_UNIT",tr.toFixed(7)],["SUN_SPECTRAL_RADIANCE_TO_LUMINANCE",`vec3(${i.sunRadianceToRelativeLuminance.toArray().map(z=>z.toFixed(12)).join(",")})`],["SKY_SPECTRAL_RADIANCE_TO_LUMINANCE",`vec3(${i.skyRadianceToRelativeLuminance.toArray().map(z=>z.toFixed(12)).join(",")})`]])}),this.camera=e,this.atmosphere=i,this.ellipsoidMatrix=new te,this.overlay=null,this.shadow=null,this.shadowLength=null,this.shadowSampleCount=8,this.octEncodedNormal=a,this.reconstructNormal=o,this.ellipsoid=d,this.correctAltitude=g,this.correctGeometricError=h,this.photometric=m,this.sunIrradiance=p,this.skyIrradiance=y,this.transmittance=b,this.inscatter=R,this.sky=C,this.sun=E,this.moon=A}get mainCamera(){return this.camera}set mainCamera(e){this.camera=e}copyCameraSettings(e){const{projectionMatrix:r,matrixWorldInverse:i,projectionMatrixInverse:n,matrixWorld:s}=e,a=this.uniforms;a.get("projectionMatrix").value.copy(r),a.get("viewMatrix").value.copy(i),a.get("inverseProjectionMatrix").value.copy(n),a.get("inverseViewMatrix").value.copy(s);const o=e.getWorldPosition(a.get("cameraPosition").value),c=a.get("inverseEllipsoidMatrix").value.copy(this.ellipsoidMatrix).invert(),l=Nm.copy(o).applyMatrix4(c).sub(a.get("ellipsoidCenter").value);try{const d=Fm.setFromECEF(l).height,g=Lm.set(0,this.ellipsoid.maximumRadius,-d).applyMatrix4(r);a.get("idealSphereAlpha").value=$h(Yh(g.y,41.5,13.8,0,1))}catch{return}const u=a.get("altitudeCorrection");this.correctAltitude?rn(l,this.atmosphere.bottomRadius,this.ellipsoid,u.value):u.value.setScalar(0)}updateComposition(){const{uniforms:e,defines:r,overlay:i,shadow:n,shadowLength:s}=this,a=r.has("HAS_OVERLAY"),o=i!=null;o!==a&&(o?r.set("HAS_OVERLAY","1"):(r.delete("HAS_OVERLAY"),e.get("overlayBuffer").value=null),this.setChanged()),o&&(e.get("overlayBuffer").value=i.map);const c=r.has("HAS_SHADOW"),l=n!=null;if(l!==c&&(l?r.set("HAS_SHADOW","1"):(r.delete("HAS_SHADOW"),e.get("shadowBuffer").value=null),this.setChanged()),l){const g=r.get("SHADOW_CASCADE_COUNT"),h=`${n.cascadeCount}`;g!==h&&(r.set("SHADOW_CASCADE_COUNT",n.cascadeCount.toFixed(0)),this.setChanged()),e.get("shadowBuffer").value=n.map,e.get("shadowMapSize").value=n.mapSize,e.get("shadowIntervals").value=n.intervals,e.get("shadowMatrices").value=n.matrices,e.get("inverseShadowMatrices").value=n.inverseMatrices,e.get("shadowFar").value=n.far,e.get("shadowTopHeight").value=n.topHeight}const u=r.has("HAS_SHADOW_LENGTH"),d=s!=null;d!==u&&(d?r.set("HAS_SHADOW_LENGTH","1"):(r.delete("HAS_SHADOW_LENGTH"),e.get("shadowLengthBuffer").value=null),this.setChanged()),d&&(e.get("shadowLengthBuffer").value=s.map)}update(e,r,i){this.copyCameraSettings(this.camera),this.updateComposition(),++this.uniforms.get("frame").value}get normalBuffer(){return this.uniforms.get("normalBuffer").value}set normalBuffer(e){this.uniforms.get("normalBuffer").value=e}get irradianceTexture(){return this.uniforms.get("u_irradiance_texture").value}set irradianceTexture(e){this.uniforms.get("u_irradiance_texture").value=e}get scatteringTexture(){return this.uniforms.get("u_scattering_texture").value}set scatteringTexture(e){this.uniforms.get("u_scattering_texture").value=e,this.uniforms.get("u_single_mie_scattering_texture").value=e}get transmittanceTexture(){return this.uniforms.get("u_transmittance_texture").value}set transmittanceTexture(e){this.uniforms.get("u_transmittance_texture").value=e}get useHalfFloat(){return!0}set useHalfFloat(e){}get ellipsoid(){return this._ellipsoid}set ellipsoid(e){this._ellipsoid=e,this.uniforms.get("ellipsoidRadii").value.copy(e.radii)}get ellipsoidCenter(){return this.uniforms.get("ellipsoidCenter").value}get sunDirection(){return this.uniforms.get("sunDirection").value}get irradianceScale(){return this.uniforms.get("irradianceScale").value}set irradianceScale(e){this.uniforms.get("irradianceScale").value=e}get moonDirection(){return this.uniforms.get("moonDirection").value}get moonAngularRadius(){return this.uniforms.get("moonAngularRadius").value}set moonAngularRadius(e){this.uniforms.get("moonAngularRadius").value=e}get lunarRadianceScale(){return this.uniforms.get("lunarRadianceScale").value}set lunarRadianceScale(e){this.uniforms.get("lunarRadianceScale").value=e}get stbnTexture(){return this.uniforms.get("stbnTexture").value}set stbnTexture(e){this.uniforms.get("stbnTexture").value=e}get shadowRadius(){return this.uniforms.get("shadowRadius").value}set shadowRadius(e){this.uniforms.get("shadowRadius").value=e}}Ye([De("OCT_ENCODED_NORMAL")],$e.prototype,"octEncodedNormal");Ye([De("RECONSTRUCT_NORMAL")],$e.prototype,"reconstructNormal");Ye([De("CORRECT_GEOMETRIC_ERROR")],$e.prototype,"correctGeometricError");Ye([De("PHOTOMETRIC")],$e.prototype,"photometric");Ye([De("SUN_IRRADIANCE")],$e.prototype,"sunIrradiance");Ye([De("SKY_IRRADIANCE")],$e.prototype,"skyIrradiance");Ye([De("TRANSMITTANCE")],$e.prototype,"transmittance");Ye([De("INSCATTER")],$e.prototype,"inscatter");Ye([De("SKY")],$e.prototype,"sky");Ye([De("SUN")],$e.prototype,"sun");Ye([De("MOON")],$e.prototype,"moon");Ye([Kh("SHADOW_SAMPLE_COUNT",{min:1,max:16})],$e.prototype,"shadowSampleCount");var Um=Object.defineProperty,km=(t,e,r,i)=>{for(var n=void 0,s=t.length-1,a;s>=0;s--)(a=t[s])&&(n=a(e,r,n)||n);return n&&Um(e,r,n),n};const Hm=new T;function zm(t,e){let r="",i="";for(let n=1;n<e;++n)r+=`layout(location = ${n}) out float renderTarget${n};
`,i+=`renderTarget${n} = 0.0;
`;return t.replace("#include <mrt_layout>",r).replace("#include <mrt_output>",i)}const Fs={ellipsoid:ct.WGS84,correctAltitude:!0,photometric:!0,renderTargetCount:1};class Bs extends _l{constructor(e,r=Qi.DEFAULT){const{irradianceTexture:i=null,scatteringTexture:n=null,transmittanceTexture:s=null,useHalfFloat:a,ellipsoid:o,correctAltitude:c,photometric:l,sunDirection:u,sunAngularRadius:d,renderTargetCount:g,...h}={...Fs,...e};super({toneMapped:!1,depthWrite:!1,depthTest:!1,...h,uniforms:{cameraPosition:new I(new T),ellipsoidCenter:new I(new T),inverseEllipsoidMatrix:new I(new te),altitudeCorrection:new I(new T),sunDirection:new I((u==null?void 0:u.clone())??new T),u_solar_irradiance:new I(r.solarIrradiance),u_sun_angular_radius:new I(d??r.sunAngularRadius),u_bottom_radius:new I(r.bottomRadius*tr),u_top_radius:new I(r.topRadius*tr),u_rayleigh_scattering:new I(r.rayleighScattering),u_mie_scattering:new I(r.mieScattering),u_mie_phase_function_g:new I(r.miePhaseFunctionG),u_mu_s_min:new I(r.muSMin),u_irradiance_texture:new I(i),u_scattering_texture:new I(n),u_single_mie_scattering_texture:new I(n),u_transmittance_texture:new I(s),...h.uniforms},defines:{PI:`${Math.PI}`,TRANSMITTANCE_TEXTURE_WIDTH:en.toFixed(0),TRANSMITTANCE_TEXTURE_HEIGHT:tn.toFixed(0),SCATTERING_TEXTURE_R_SIZE:Ps.toFixed(0),SCATTERING_TEXTURE_MU_SIZE:Os.toFixed(0),SCATTERING_TEXTURE_MU_S_SIZE:Ns.toFixed(0),SCATTERING_TEXTURE_NU_SIZE:Ls.toFixed(0),IRRADIANCE_TEXTURE_WIDTH:Zi.toFixed(0),IRRADIANCE_TEXTURE_HEIGHT:Ji.toFixed(0),METER_TO_LENGTH_UNIT:tr.toFixed(7),SUN_SPECTRAL_RADIANCE_TO_LUMINANCE:`vec3(${r.sunRadianceToRelativeLuminance.toArray().map(m=>m.toFixed(12)).join(",")})`,SKY_SPECTRAL_RADIANCE_TO_LUMINANCE:`vec3(${r.skyRadianceToRelativeLuminance.toArray().map(m=>m.toFixed(12)).join(",")})`,...h.defines}}),this.atmosphere=r,this.ellipsoidMatrix=new te,this.atmosphere=r,this.ellipsoid=o,this.correctAltitude=c,this.photometric=l,this.renderTargetCount=g}copyCameraSettings(e){const r=this.uniforms,i=e.getWorldPosition(r.cameraPosition.value),n=r.inverseEllipsoidMatrix.value.copy(this.ellipsoidMatrix).invert(),s=Hm.copy(i).applyMatrix4(n).sub(r.ellipsoidCenter.value),a=r.altitudeCorrection.value;this.correctAltitude?rn(s,this.atmosphere.bottomRadius,this.ellipsoid,a):a.setScalar(0)}onBeforeCompile(e,r){e.fragmentShader=zm(e.fragmentShader,this.renderTargetCount)}onBeforeRender(e,r,i,n,s,a){this.copyCameraSettings(i)}get irradianceTexture(){return this.uniforms.u_irradiance_texture.value}set irradianceTexture(e){this.uniforms.u_irradiance_texture.value=e}get scatteringTexture(){return this.uniforms.u_scattering_texture.value}set scatteringTexture(e){this.uniforms.u_scattering_texture.value=e,this.uniforms.u_single_mie_scattering_texture.value=e}get transmittanceTexture(){return this.uniforms.u_transmittance_texture.value}set transmittanceTexture(e){this.uniforms.u_transmittance_texture.value=e}get useHalfFloat(){return!0}set useHalfFloat(e){}get ellipsoidCenter(){return this.uniforms.ellipsoidCenter.value}get sunDirection(){return this.uniforms.sunDirection.value}get sunAngularRadius(){return this.uniforms.u_sun_angular_radius.value}set sunAngularRadius(e){this.uniforms.u_sun_angular_radius.value=e}get renderTargetCount(){return this._renderTargetCount}set renderTargetCount(e){e!==this.renderTargetCount&&(this._renderTargetCount=e,this.needsUpdate=!0)}}km([De("PHOTOMETRIC")],Bs.prototype,"photometric");var st;(function(t){t.Sun="Sun",t.Moon="Moon",t.Mercury="Mercury",t.Venus="Venus",t.Earth="Earth",t.Mars="Mars",t.Jupiter="Jupiter",t.Saturn="Saturn",t.Uranus="Uranus",t.Neptune="Neptune",t.Pluto="Pluto",t.SSB="SSB",t.EMB="EMB",t.Star1="Star1",t.Star2="Star2",t.Star3="Star3",t.Star4="Star4",t.Star5="Star5",t.Star6="Star6",t.Star7="Star7",t.Star8="Star8"})(st||(st={}));st.Star1,st.Star2,st.Star3,st.Star4,st.Star5,st.Star6,st.Star7,st.Star8;var Va;(function(t){t[t.From2000=0]="From2000",t[t.Into2000=1]="Into2000"})(Va||(Va={}));var Wa;(function(t){t[t.Pericenter=0]="Pericenter",t[t.Apocenter=1]="Apocenter"})(Wa||(Wa={}));var Ga;(function(t){t.Penumbral="penumbral",t.Partial="partial",t.Annular="annular",t.Total="total"})(Ga||(Ga={}));var ja;(function(t){t[t.Invalid=0]="Invalid",t[t.Ascending=1]="Ascending",t[t.Descending=-1]="Descending"})(ja||(ja={}));function Cc(t){return Math.sqrt(Math.max(t,0))}function Vm(t){return Math.max(t,0)}function Wm(t,e,r){const{bottomRadius:i}=t;return r<0&&e**2*(r**2-1)+i**2>=0}function Gm(t,e,r){const{topRadius:i}=t,n=e**2*(r**2-1)+i**2;return Vm(-e*r+Cc(n))}function Di(t,e){return .5/e+t*(1-1/e)}var jm="Invariant failed";function Ym(t,e){if(!t)throw new Error(jm)}const $m=new T,Ya=new T,Km=new T;function mi(t,e,r){const i=e*4;return r.set(t[i],t[i+1],t[i+2])}function Ic(t,e,r){const{width:i,height:n}=t.image;Ym(Lh(t.image.data));let s=t.image.data;t.type===Oo&&s instanceof Uint16Array&&(s=new oe(s.buffer));const a=Ii(e.x,0,1)*(i-1),o=Ii(e.y,0,1)*(n-1),c=Math.floor(a),l=Math.floor(o),u=a-c,d=o-l,g=u,h=d,m=c%i,v=(m+1)%i,p=l%n,y=(p+1)%n,b=mi(s,p*i+m,$m),R=mi(s,p*i+v,Ya),M=b.lerp(R,g),C=mi(s,y*i+m,Ya),E=mi(s,y*i+v,Km),A=C.lerp(E,g);return r.copy(M.lerp(A,h))}function qm(t,e,r,i){const{topRadius:n,bottomRadius:s}=t,a=Math.sqrt(n**2-s**2),o=Cc(e**2-s**2),c=Gm(t,e,r),l=n-e,u=o+a,d=(c-l)/(u-l),g=o/a;return i.set(Di(d,en),Di(g,tn))}const Xm=new T,On=new T,Qm=new Nt;function $a(t,e,r,i=new ze,{ellipsoid:n=ct.WGS84,correctAltitude:s=!0,photometric:a=!0}={},o=Qi.DEFAULT){const c=Xm.copy(e);if(s){const v=n.projectOnSurface(e,On);v!=null&&c.sub(n.getOsculatingSphereCenter(v,o.bottomRadius,On))}const l=On;let u=c.length(),d=c.dot(r);const{topRadius:g}=o,h=-d-Math.sqrt(d**2-u**2+g**2);if(h>0&&(u=g,d+=h),u>g)l.set(1,1,1);else{const v=d/u;if(Wm(o,u,v))l.setScalar(0);else{const p=qm(o,u,v,Qm);Ic(t,p,l)}}const m=l.multiply(o.solarIrradiance);return a&&m.multiply(o.sunRadianceToRelativeLuminance),i.setFromVector3(m)}var $r=Uint8Array,Dc=Uint16Array,Zm=Uint32Array,Jm=new $r([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),ef=new $r([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Pc=function(t,e){for(var r=new Dc(31),i=0;i<31;++i)r[i]=e+=1<<t[i-1];for(var n=new Zm(r[30]),i=1;i<30;++i)for(var s=r[i];s<r[i+1];++s)n[s]=s-r[i]<<5|i;return[r,n]},Oc=Pc(Jm,2),tf=Oc[0],rf=Oc[1];tf[28]=258,rf[258]=28;Pc(ef,0);var nf=new Dc(32768);for(var me=0;me<32768;++me){var Dt=(me&43690)>>>1|(me&21845)<<1;Dt=(Dt&52428)>>>2|(Dt&13107)<<2,Dt=(Dt&61680)>>>4|(Dt&3855)<<4,nf[me]=((Dt&65280)>>>8|(Dt&255)<<8)>>>1}var nn=new $r(288);for(var me=0;me<144;++me)nn[me]=8;for(var me=144;me<256;++me)nn[me]=9;for(var me=256;me<280;++me)nn[me]=7;for(var me=280;me<288;++me)nn[me]=8;var sf=new $r(32);for(var me=0;me<32;++me)sf[me]=5;var af=new $r(0),of=typeof TextDecoder<"u"&&new TextDecoder,cf=0;try{of.decode(af,{stream:!0}),cf=1}catch{}function lf({topRadius:t,bottomRadius:e},r,i,n){const s=(r-e)/(t-e),a=i*.5+.5;return n.set(Di(a,Zi),Di(s,Ji))}const uf=1/Math.sqrt(Math.PI),Nn=Math.sqrt(3)/(2*Math.sqrt(Math.PI)),df=new T,Ln=new T,hf=new Nt,mf=new te,ff={ellipsoid:ct.WGS84,correctAltitude:!0,photometric:!0};class pf extends No{constructor(e,r=Qi.DEFAULT){super(),this.atmosphere=r,this.ellipsoidCenter=new T,this.ellipsoidMatrix=new te;const{irradianceTexture:i=null,ellipsoid:n,correctAltitude:s,photometric:a,sunDirection:o}={...ff,...e};this.irradianceTexture=i,this.ellipsoid=n,this.correctAltitude=s,this.photometric=a,this.sunDirection=(o==null?void 0:o.clone())??new T}update(){if(this.irradianceTexture==null)return;const e=mf.copy(this.ellipsoidMatrix).invert(),r=this.getWorldPosition(df).applyMatrix4(e).sub(this.ellipsoidCenter);if(this.correctAltitude){const l=this.ellipsoid.projectOnSurface(r,Ln);l!=null&&r.sub(rn(l,this.atmosphere.bottomRadius,this.ellipsoid,Ln))}const i=r.length(),n=r.dot(this.sunDirection)/i,s=lf(this.atmosphere,i,n,hf),a=Ic(this.irradianceTexture,s,Ln);this.photometric&&a.multiply(this.atmosphere.skyRadianceToRelativeLuminance);const o=this.ellipsoid.getSurfaceNormal(r).applyMatrix4(this.ellipsoidMatrix),c=this.sh.coefficients;c[0].copy(a).multiplyScalar(uf),c[1].copy(a).multiplyScalar(Nn*o.y),c[2].copy(a).multiplyScalar(Nn*o.z),c[3].copy(a).multiplyScalar(Nn*o.x)}}const gf=`precision highp float;
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
`,vf=`precision highp float;
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
`;var yf=Object.defineProperty,Nc=(t,e,r,i)=>{for(var n=void 0,s=t.length-1,a;s>=0;s--)(a=t[s])&&(n=a(e,r,n)||n);return n&&yf(e,r,n),n};const Sf={...Fs,sun:!0,moon:!0,moonAngularRadius:.0045,lunarRadianceScale:1};class Us extends Bs{constructor(e){const{sun:r,moon:i,moonDirection:n,moonAngularRadius:s,lunarRadianceScale:a,groundAlbedo:o,...c}={...Sf,...e};super({name:"SkyMaterial",glslVersion:Lr,vertexShader:Vt(vf,{parameters:ar}),fragmentShader:Vt(gf,{core:{raySphereIntersection:Rc},parameters:ar,functions:Ds,sky:Ac}),...c,uniforms:{inverseProjectionMatrix:new I(new te),inverseViewMatrix:new I(new te),moonDirection:new I((n==null?void 0:n.clone())??new T),moonAngularRadius:new I(s),lunarRadianceScale:new I(a),groundAlbedo:new I((o==null?void 0:o.clone())??new ze(0)),shadowLengthBuffer:new I(null),...c.uniforms},defines:{PERSPECTIVE_CAMERA:"1"},depthTest:!0}),this.shadowLength=null,this.sun=r,this.moon=i}onBeforeRender(e,r,i,n,s,a){super.onBeforeRender(e,r,i,n,s,a);const{uniforms:o,defines:c}=this;o.inverseProjectionMatrix.value.copy(i.projectionMatrixInverse),o.inverseViewMatrix.value.copy(i.matrixWorld);const l=c.PERSPECTIVE_CAMERA!=null,u=i.isPerspectiveCamera===!0;u!==l&&(u?c.PERSPECTIVE_CAMERA="1":delete c.PERSPECTIVE_CAMERA,this.needsUpdate=!0);const d=this.groundAlbedo,g=c.GROUND_ALBEDO!=null,h=d.r!==0||d.g!==0||d.b!==0;h!==g&&(h?this.defines.GROUND_ALBEDO="1":delete this.defines.GROUND_ALBEDO,this.needsUpdate=!0);const m=this.shadowLength,v=c.HAS_SHADOW_LENGTH!=null,p=m!=null;p!==v&&(p?c.HAS_SHADOW_LENGTH="1":(delete c.HAS_SHADOW_LENGTH,o.shadowLengthBuffer.value=null),this.needsUpdate=!0),p&&(o.shadowLengthBuffer.value=m.map)}get moonDirection(){return this.uniforms.moonDirection.value}get moonAngularRadius(){return this.uniforms.moonAngularRadius.value}set moonAngularRadius(e){this.uniforms.moonAngularRadius.value=e}get lunarRadianceScale(){return this.uniforms.lunarRadianceScale.value}set lunarRadianceScale(e){this.uniforms.lunarRadianceScale.value=e}get groundAlbedo(){return this.uniforms.groundAlbedo.value}}Nc([De("SUN")],Us.prototype,"sun");Nc([De("MOON")],Us.prototype,"moon");const wf=`precision highp float;
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
`,_f=`precision highp float;
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
`;var xf=Object.defineProperty,Tf=(t,e,r,i)=>{for(var n=void 0,s=t.length-1,a;s>=0;s--)(a=t[s])&&(n=a(e,r,n)||n);return n&&xf(e,r,n),n};const bf={...Fs,pointSize:1,radianceScale:1,background:!0};class Mf extends Bs{constructor(e){const{pointSize:r,radianceScale:i,background:n,...s}={...bf,...e};super({name:"StarsMaterial",glslVersion:Lr,vertexShader:Vt(_f,{parameters:ar}),fragmentShader:Vt(wf,{parameters:ar,functions:Ds}),...s,uniforms:{projectionMatrix:new I(new te),modelViewMatrix:new I(new te),viewMatrix:new I(new te),matrixWorld:new I(new te),cameraFar:new I(0),pointSize:new I(0),magnitudeRange:new I(new Nt(-2,8)),radianceScale:new I(i),...s.uniforms},defines:{PERSPECTIVE_CAMERA:"1"}}),this.pointSize=r,this.background=n}onBeforeRender(e,r,i,n,s,a){super.onBeforeRender(e,r,i,n,s,a);const o=this.uniforms;o.projectionMatrix.value.copy(i.projectionMatrix),o.modelViewMatrix.value.copy(i.modelViewMatrix),o.viewMatrix.value.copy(i.matrixWorldInverse),o.matrixWorld.value.copy(s.matrixWorld),o.cameraFar.value=i.far,o.pointSize.value=this.pointSize*e.getPixelRatio();const c=i.isPerspectiveCamera===!0;this.defines.PERSPECTIVE_CAMERA!=null!==c&&(c?this.defines.PERSPECTIVE_CAMERA="1":delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}get magnitudeRange(){return this.uniforms.magnitudeRange.value}get radianceScale(){return this.uniforms.radianceScale.value}set radianceScale(e){this.uniforms.radianceScale.value=e}}Tf([De("BACKGROUND")],Mf.prototype,"background");const Ka=new ze("#fff2d8"),qa=1e-8,Fn=3e4,Xa=-1e3,Qa=1e7,Ef=5e6,Rf=8e6,Ur=t=>Number.isFinite(t.x)&&Number.isFinite(t.y)&&Number.isFinite(t.z),Za=t=>!Number.isFinite(t.longitude)||Math.abs(t.longitude)>180?"longitude must be a finite value in degrees within [-180, 180]":!Number.isFinite(t.latitude)||Math.abs(t.latitude)>90?"latitude must be a finite value in degrees within [-90, 90]":!Number.isFinite(t.altitudeMeters)||t.altitudeMeters<Xa||t.altitudeMeters>Qa?`altitudeMeters must be within [${Xa}, ${Qa}]`:null,Af=(t,e,r)=>{if(!Number.isFinite(t.getTime()))return"instant must be a valid Date";const i=Za(e);if(i)return`observer ${i}`;if(!r)return null;const n=Za(r.observer);return n?`sky reference observer ${n}`:Ur(r.scenePosition)?null:"sky reference scenePosition must contain finite metre coordinates"},Lc=t=>{if(!Ur(t.directionToSunECEF))return"sun direction contains a non-finite component";if(Math.abs(t.directionToSunECEF.length()-1)>1e-6)return"sun direction is not normalized";if(!t.ecefToSceneMatrix.elements.every(Number.isFinite))return"ECEF-to-scene matrix contains a non-finite component";const e=t.ecefToSceneMatrix.elements,r=[new T(e[0],e[4],e[8]),new T(e[1],e[5],e[9]),new T(e[2],e[6],e[10])];if(r.some(s=>Math.abs(s.length()-1)>1e-6)||Math.abs(r[0].dot(r[1]))>1e-6||Math.abs(r[0].dot(r[2]))>1e-6||Math.abs(r[1].dot(r[2]))>1e-6||Math.abs(e[3])>1e-12||Math.abs(e[7])>1e-12||Math.abs(e[11])>1e-12||Math.abs(e[12])>1e-12||Math.abs(e[13])>1e-12||Math.abs(e[14])>1e-12||Math.abs(e[15]-1)>1e-12)return"ECEF-to-scene matrix is not an affine orthonormal rotation";const i=t.ecefToSceneMatrix.determinant();if(!Number.isFinite(i)||Math.abs(i-1)>1e-6)return"ECEF-to-scene matrix is not a proper orthonormal rotation";if(!Ur(t.ellipsoidCenterECEF))return"ellipsoid center contains a non-finite component";const n=t.ellipsoidCenterECEF.length();return n<Ef||n>Rf?"ellipsoid center is outside the plausible WGS84 distance range":null},Cf=t=>{var r;const e=Lc(t.skyFrame);return e||(Ur(t.directionToSun)?Math.abs(t.directionToSun.length()-1)>1e-6?"scene sun direction is not normalized":![t.color.r,t.color.g,t.color.b].every(Number.isFinite)||![t.radiance.r,t.radiance.g,t.radiance.b].every(Number.isFinite)||!Number.isFinite(t.relativeIntensity)||t.relativeIntensity<0||t.relativeIntensity>1||!Number.isFinite(t.azimuthDegrees)||!Number.isFinite(t.elevationDegrees)?"sunlight color, intensity, or angles contain invalid values":(r=t.skyIrradianceCoefficients)!=null&&r.some(i=>!Ur(i))?"sky irradiance contains a non-finite coefficient":null:"scene sun direction contains a non-finite component")},Bn={useTransmittanceLut:!0,useIrradianceLut:!0},If=({east:t,north:e,up:r})=>new te().set(t.x,t.y,t.z,0,r.x,r.y,r.z,0,-e.x,-e.y,-e.z,0,0,0,0,1);function ks({longitude:t,latitude:e,altitudeMeters:r}){const i=new Jo(ds(t),ds(e),r).toECEF(),n=new T,s=new T,a=new T;return ct.WGS84.getEastNorthUpVectors(i,n,s,a),{observerECEF:i,east:n,north:s,up:a}}const Fc=(t,{east:e,north:r,up:i},n)=>n.set(t.dot(e),t.dot(i),-t.dot(r)).normalize(),Bc=(t,e,r)=>{const i=r?ks(r.observer):e,n=If(i);r!=null&&r.sceneFromLocal&&n.premultiply(r.sceneFromLocal);const s=n.clone().invert(),a=((r==null?void 0:r.scenePosition)??new T).clone().applyMatrix4(s).sub(i.observerECEF);return{directionToSunECEF:t.clone(),ecefToSceneMatrix:n,ellipsoidCenterECEF:a}},Df=(t,e,{observerECEF:r,east:i,north:n,up:s})=>t!=null&&t.irradianceTexture?(t.ellipsoidMatrix.set(i.x,i.y,i.z,0,s.x,s.y,s.z,0,-n.x,-n.y,-n.z,0,0,0,0,1),t.ellipsoidCenter.copy(r).negate(),t.sunDirection.copy(e),t.position.set(0,0,0),t.updateMatrixWorld(!0),t.update(),t.sh.coefficients.map(a=>a.clone())):null,Uc=t=>{const e=ma(Math.asin(He(t.y,-1,1)));return{azimuthDegrees:(ma(Math.atan2(t.x,-t.z))+360)%360,elevationDegrees:e}},Pf=(t,e)=>{const r=ks(e.observer),i=Fc(t.skyFrame.directionToSunECEF,r,new T);return e.sceneFromLocal&&i.transformDirection(e.sceneFromLocal),{...t,directionToSun:i,...Uc(i),skyFrame:Bc(t.skyFrame.directionToSunECEF,r,e)}},Of=(t,e,r,i=null,n)=>{const s=ks(e),{observerECEF:a,up:o}=s,c=new T(...xl(t)),l=Fc(c,s,new T);n!=null&&n.sceneFromLocal&&l.transformDirection(n.sceneFromLocal);const u=Bc(c,s,n),d=Df(i,c,s),{azimuthDegrees:g,elevationDegrees:h}=Uc(l);if(!r){const R=Math.sqrt(He(l.y,0,1));return{directionToSun:l,color:Ka.clone(),relativeIntensity:R,radiance:Ka.clone().multiplyScalar(R),atmosphericTransmittanceReady:!1,atmosphericIrradianceReady:d!==null,skyIrradianceCoefficients:d,azimuthDegrees:g,elevationDegrees:h,skyFrame:u}}const m=$a(r,a,c,new ze,{ellipsoid:ct.WGS84,correctAltitude:!0,photometric:!0}),v=$a(r,a,o,new ze,{ellipsoid:ct.WGS84,correctAltitude:!0,photometric:!0}),p=Math.max(m.r,m.g,m.b,0),y=Math.max(v.r,v.g,v.b,qa),b=p>qa?m.clone().multiplyScalar(1/p):new ze(0,0,0);return{directionToSun:l,color:b,relativeIntensity:He(p/y,0,1),radiance:m,atmosphericTransmittanceReady:!0,atmosphericIrradianceReady:d!==null,skyIrradianceCoefficients:d,azimuthDegrees:g,elevationDegrees:h,skyFrame:u}};class Nf{transmittanceTexture=null;irradianceTexture=null;scatteringTexture=null;skyLightProbe=new pf({ellipsoid:ct.WGS84,correctAltitude:!0,photometric:!0});transmittanceLoading=!1;irradianceLoading=!1;scatteringLoading=!1;transmittanceRetryAt=0;irradianceRetryAt=0;scatteringRetryAt=0;disposed=!1;get ready(){return this.transmittanceTexture!==null&&this.irradianceTexture!==null}get skyReady(){return this.skyTextures!==null}get skyTextures(){return!this.transmittanceTexture||!this.irradianceTexture||!this.scatteringTexture?null:{transmittanceTexture:this.transmittanceTexture,irradianceTexture:this.irradianceTexture,scatteringTexture:this.scatteringTexture}}get isSkyLoading(){return this.transmittanceLoading||this.irradianceLoading||this.scatteringLoading}isLoadingFor(e=Bn){return e.useTransmittanceLut&&this.transmittanceLoading||e.useIrradianceLut&&this.irradianceLoading}ensure(e,r=Bn){if(this.disposed)return;const i=()=>{this.isLoadingFor(r)||e()};r.useTransmittanceLut&&this.ensureTransmittance(i),r.useIrradianceLut&&this.ensureIrradiance(i)}ensureSky(e){if(this.disposed||this.skyReady)return;let r=!1;const i=()=>{!r&&!this.isSkyLoading&&(r=!0,e())};this.ensureTransmittance(i),this.ensureIrradiance(i),this.ensureScattering(i)}ensureTransmittance(e){this.transmittanceTexture||this.transmittanceLoading||Date.now()<this.transmittanceRetryAt||(this.transmittanceLoading=!0,za(Dn,{width:en,height:tn}).load(`${Pn}/transmittance.bin`,r=>{if(this.transmittanceLoading=!1,this.disposed){r.dispose();return}this.transmittanceRetryAt=0,this.transmittanceTexture=r,e()},void 0,r=>{this.transmittanceLoading=!1,this.disposed||(this.transmittanceRetryAt=Date.now()+Fn,console.error("[SHADOW] Takram transmittance LUT failed",r),e())}))}ensureIrradiance(e){this.irradianceTexture||this.irradianceLoading||Date.now()<this.irradianceRetryAt||(this.irradianceLoading=!0,za(Dn,{width:Zi,height:Ji}).load(`${Pn}/irradiance.bin`,r=>{if(this.irradianceLoading=!1,this.disposed){r.dispose();return}this.irradianceRetryAt=0,this.irradianceTexture=r,this.skyLightProbe.irradianceTexture=r,e()},void 0,r=>{this.irradianceLoading=!1,this.disposed||(this.irradianceRetryAt=Date.now()+Fn,console.error("[SHADOW] Takram irradiance LUT failed",r),e())}))}ensureScattering(e){this.scatteringTexture||this.scatteringLoading||Date.now()<this.scatteringRetryAt||(this.scatteringLoading=!0,jh(Dn,{width:Em,height:Rm,depth:Am}).load(`${Pn}/scattering.bin`,r=>{if(this.scatteringLoading=!1,this.disposed){r.dispose();return}this.scatteringRetryAt=0,this.scatteringTexture=r,e()},void 0,r=>{this.scatteringLoading=!1,this.disposed||(this.scatteringRetryAt=Date.now()+Fn,console.error("[SHADOW] Takram scattering LUT failed",r),e())}))}evaluate(e,r,i=Bn,n){return Of(e,r,i.useTransmittanceLut?this.transmittanceTexture:null,i.useIrradianceLut?this.skyLightProbe:null,n)}dispose(){var e,r,i;this.disposed||(this.disposed=!0,this.transmittanceLoading=!1,this.irradianceLoading=!1,this.scatteringLoading=!1,this.transmittanceRetryAt=0,this.irradianceRetryAt=0,this.scatteringRetryAt=0,(e=this.transmittanceTexture)==null||e.dispose(),(r=this.irradianceTexture)==null||r.dispose(),(i=this.scatteringTexture)==null||i.dispose(),this.transmittanceTexture=null,this.irradianceTexture=null,this.scatteringTexture=null,this.skyLightProbe.irradianceTexture=null,this.skyLightProbe.sh.zero())}}const Lf="shadow-simulation-atmospheric-sky",Kr=2,Si="carmaOutputToSrgb",Un="carmaDisplayExposure",Ff=new T;class Bf extends Us{observerScenePosition=new T;hasObserverScenePosition=!1;viewCamera=null;copyCameraSettings(e){if(super.copyCameraSettings(e),!this.hasObserverScenePosition)return;const r=this.uniforms;if(r.cameraPosition.value.copy(this.observerScenePosition),!this.correctAltitude)return;const i=Ff.copy(this.observerScenePosition).applyMatrix4(r.inverseEllipsoidMatrix.value).sub(r.ellipsoidCenter.value);rn(i,this.atmosphere.bottomRadius,this.ellipsoid,r.altitudeCorrection.value)}onBeforeRender(e,r,i,n,s,a){super.onBeforeRender(e,r,this.viewCamera??i,n,s,a)}}const Uf=t=>{t.uniforms.toneMappingExposure=new I(1),t.uniforms[Si]=new I(!1),t.uniforms[Un]=new I(Kr),t.fragmentShader=t.fragmentShader.replace("precision highp sampler3D;",`precision highp sampler3D;

uniform bool ${Si};
uniform float ${Un};
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
  }`).replace("outputColor.a = 1.0;",`outputColor.rgb *= ${Un};
  outputColor.a = 1.0;
  if (${Si}) {
    // SkyMaterial is raw GLSL: match terrain's AgX on the display target.
    // Offscreen samples stay linear HDR until the shared final composite.
    outputColor.rgb = AgXToneMapping(outputColor.rgb);
    outputColor = carmaLinearToSrgb(outputColor);
  }`)},kf=t=>{const e=new Bf({groundAlbedo:t,moon:!1,photometric:!0,side:Lo,sun:!0});Uf(e),e.depthTest=!1,e.depthWrite=!1;const r=new Po;r.setAttribute("position",new Tl([-1,-1,0,3,-1,0,-1,3,0],3));const i=new kr(r,e);return i.name=Lf,i.visible=!1,i.frustumCulled=!1,i.renderOrder=-100,i.castShadow=!1,i.receiveShadow=!1,i.onBeforeRender=n=>{e.uniforms.toneMappingExposure.value=n.toneMappingExposure,e.uniforms[Si].value=n.getRenderTarget()===null},{mesh:i,update(n,s){return s?Lc(n)?!1:(i.visible=!0,e.irradianceTexture=s.irradianceTexture,e.scatteringTexture=s.scatteringTexture,e.transmittanceTexture=s.transmittanceTexture,e.sunDirection.copy(n.directionToSunECEF),e.ellipsoidCenter.copy(n.ellipsoidCenterECEF),e.ellipsoidMatrix.copy(n.ecefToSceneMatrix),!0):(i.visible=!1,!1)},updateViewCamera(n){e.viewCamera=n},updateObserverScenePosition(n){e.observerScenePosition.copy(n),e.hasObserverScenePosition=!0},updateGroundAlbedo(n){e.groundAlbedo.copy(n)},dispose(){r.dispose(),e.dispose()}}},fi=3,Hf=.5,it=64,Ja=.01,zf=(t,e,r)=>Math.min(r**2,Math.max(it**2,Math.floor(t!==void 0&&Number.isFinite(t)&&t>0?t:e))),Vf=(t,e)=>{const{mapSize:r,maxMapSize:i,elevationSine:n,sunDiscGuardMeters:s,groundTexelFit:a}=e,o=t.right-t.left+2*s,c=t.top-t.bottom+2*s,l=Math.max(Ja,Math.abs(n)),d=2*(a?fi+Hf:fi);let g=r,h=r,m=!1,v=!1;const p=e.groundTexelTargetMeters;if(p!==void 0&&(!Number.isFinite(p)||p<=0))throw new RangeError("Shadow ground texel target must be positive and finite");if(p!==void 0){const z=D=>Math.max(it,2**Math.ceil(Math.log2(D))),Z=z(o/p+d),B=z(c/(p*l)+d);g=Math.min(i,Z),h=Math.min(i,B),m=g<Z||h<B}else if(a){const z=o*l/c,Z=e.mapTexelBudget??r*r,B=d*(z+1),D=Z-d*d,k=2*D/(B+Math.sqrt(B**2+4*z*D)),W=z*k+d,ce=k+d;m=W>i||ce>i;const q=Math.max(o,c)/(r-d),de=Math.min(r,Math.max(it,Math.ceil((o/q+d)/it)*it)),Re=Math.min(r,Math.max(it,Math.ceil((c/q+d)/it)*it));v=W<de||ce<Re;const Ke=Math.min(Math.max(W,de,Z/i),i,Z/Re),O=V=>Math.floor(V/it+1e-9)*it;g=Math.max(de,O(Ke)),h=Math.max(Re,O(Math.min(i,Z/g)))}const y=e.mapDimensions;y&&(v||(v=g!==y.width||h!==y.height),g=y.width,h=y.height);const b=o/Math.max(1,g-d),R=c/Math.max(1,h-d),M=Math.max(b,R,Number.EPSILON),C=a?b:M,E=a?R:M,A=Math.round((t.left+t.right)/2/C)*C,F=Math.round((t.bottom+t.top)/2/E)*E,U=C*g,N=E*h;return{left:A-U/2,right:A+U/2,bottom:F-N/2,top:F+N/2,mapWidth:g,mapHeight:h,metersPerTexelX:C,metersPerTexelY:E,guardMetersX:C*fi,guardMetersY:E*fi,groundTexelWidthMeters:C,groundTexelHeightMeters:Math.abs(n)>Number.EPSILON?E/Math.abs(n):1/0,groundTexelFitLimited:a&&(m||v||Math.abs(n)<Ja)}},Wf=(t,e,r)=>{if(r<=0)return{planarMeters:0,depthMeters:0};const i=Math.sqrt(Math.max(0,1-e**2)),n=i>Math.sin(r)?Math.asin(Math.sin(r)/i):Math.PI;return{planarMeters:2*t*Math.sin(Math.min(Math.PI,n+r)/2),depthMeters:2*t*Math.sin(r/2)}},Gf=t=>{const e=Math.floor(t/2)+1,r=t%2===0?1:-1;return[r*(e*.7548776662466927%1-.5),r*(e*.5698402909980532%1-.5)]},jf=2048,kc=8192,eo=2,to=50,Yf=1e4,$f=.04,kn=25,Kf=4,qf=1.2,Xf=.2,ro=.05,Qf=8,Or=Ml(.53/2),Zf=Math.PI*(3-Math.sqrt(5)),Jf=300,ep=new T(0,1,0),io=(t,e,r=new te)=>r.lookAt(t,e,ep).setPosition(t).invert(),tp=(t,e)=>{if(t.length===0)return null;const r=t.map(m=>m.clone().applyMatrix4(e)),i=Math.min(...r.map(({x:m})=>m)),n=Math.max(...r.map(({x:m})=>m)),s=Math.min(...r.map(({y:m})=>m)),a=Math.max(...r.map(({y:m})=>m)),o=r.map(({z:m})=>-m),c=Math.max(0,Math.min(...o)),l=Math.max(c+.01,Math.max(...o)),u=(i+n)/2,d=(s+a)/2,g=Math.max((n-i)/2,eo/2),h=Math.max((a-s)/2,eo/2);return{left:u-g,right:u+g,bottom:d-h,top:d+h,near:c,far:l}},rp=(t,e=kc)=>t>=16?e:Math.min(e,jf*Math.sqrt(t));class Hc{constructor(e){this.host=e,this.lights=Array.from({length:1},()=>{const r=new bl(16777215,0);return r.name="shadow-simulation-sun",r.visible=!1,r.castShadow=!1,r.shadow.camera.name="shadow-simulation-shadow-camera",r.shadow.autoUpdate=!1,r.shadow.radius=0,r.shadow.bias=0,r.shadow.normalBias=ro,e.add(r,r.target),r})}lights;softSun=!1;lastSoftFit=null;maxShadowMapSize=kc;mapAllocation=null;disposed=!1;setMaxShadowMapSize(e){if(!Number.isFinite(e)||e<=0)return;const r=Math.max(256,Math.floor(e));this.disposed||this.maxShadowMapSize===r||(this.maxShadowMapSize=r)}setSoftSun(e){this.disposed||this.softSun===e||(e||this.restoreSunDiscCenter(),this.softSun=e,e||(this.lastSoftFit=null))}applySunDiscSample(e,r,i=!0){if(this.disposed)return;const n=this.lastSoftFit;if(!n)return;const s=Math.max(1,Math.floor(r)),a=(Math.floor(e)%s+s)%s,o=Or*Math.sqrt((a+.5)/s),c=a*Zf,l=Math.cos(c)*o,u=Math.sin(c)*o,d=n.tangentA.clone().multiplyScalar(l).addScaledVector(n.tangentB,u).normalize(),g=n.directionToSun.clone().multiplyScalar(Math.cos(o)).addScaledVector(d,Math.sin(o)).normalize(),h=this.lights[0],[m,v]=i&&s>1?Gf(a):[0,0],p=h.shadow.camera,y=n.rasterBounds,b=m*(y.right-y.left)/h.shadow.mapSize.x,R=v*(y.top-y.bottom)/h.shadow.mapSize.y;p.left=y.left+b,p.right=y.right+b,p.bottom=y.bottom+R,p.top=y.top+R,p.updateProjectionMatrix(),h.position.copy(g).multiplyScalar(n.lightDistance).add(n.anchorPosition),h.updateMatrixWorld(!0),h.target.updateMatrixWorld(!0),h.shadow.updateMatrices(h),h.shadow.needsUpdate=!0}restoreSunDiscCenter(){if(this.disposed||!this.lastSoftFit)return;const e=this.lastSoftFit,r=this.lights[0],i=r.shadow.camera;i.left=e.rasterBounds.left,i.right=e.rasterBounds.right,i.bottom=e.rasterBounds.bottom,i.top=e.rasterBounds.top,i.updateProjectionMatrix(),r.position.copy(e.directionToSun).multiplyScalar(e.lightDistance).add(e.anchorPosition),r.updateMatrixWorld(!0),r.target.updateMatrixWorld(!0),r.shadow.updateMatrices(r),r.shadow.needsUpdate=!0}invalidate(){this.lights[0].shadow.needsUpdate=!0}update({receiverWorldPoints:e,receiverAnchorWorldPosition:r,minimumElevationMeters:i,maximumElevationMeters:n,directionToSun:s,color:a,intensity:o,shadowIntensity:c,quality:l,groundTexelFit:u=!0,stabilizeMapSize:d=!1,mapTexelBudget:g,groundTexelTargetMeters:h,maxReceiverBiasMeters:m}){var Rt,ut;if(this.disposed)return null;if(e.length===0){for(const Te of this.lights)Te.visible=!1,Te.castShadow=!1,Te.intensity=0,Te.shadow.needsUpdate=!1;return null}const v=s.clone().normalize(),p=Math.max(0,n-i),y=Math.max($f,v.y),b=He((p+Jf)/y+to,to,Yf),R=b+p+kn,M=rp(l,this.maxShadowMapSize),C=zf(g,Math.floor(M)**2,this.maxShadowMapSize),E=Math.floor(Math.sqrt(C)),A=new ze(a),F=r.clone(),U=e.reduce((Te,Oe)=>Math.max(Te,Oe.distanceTo(r)),0),N=U+R,z=this.lights[0];z.position.copy(v).multiplyScalar(N).add(F),z.target.position.copy(F),z.updateMatrixWorld(!0),z.target.updateMatrixWorld(!0),z.shadow.updateMatrices(z);const Z=tp(e,io(z.position,z.target.position));if(!Z)return null;const B=Wf(U,v.y,this.softSun?Or:0),D=this.softSun?Math.max(Math.tan(Or)*N,B.planarMeters):0,k=Vf(Z,{mapSize:E,mapTexelBudget:C,maxMapSize:this.maxShadowMapSize,elevationSine:v.y,sunDiscGuardMeters:D,groundTexelFit:u,groundTexelTargetMeters:h,mapDimensions:d&&((Rt=this.mapAllocation)==null?void 0:Rt.texelBudget)===C&&this.mapAllocation.maxMapSize===this.maxShadowMapSize&&this.mapAllocation.groundTexelFit===u?this.mapAllocation:void 0});this.mapAllocation={width:k.mapWidth,height:k.mapHeight,texelBudget:C,maxMapSize:this.maxShadowMapSize,groundTexelFit:u};const W=Math.max(k.metersPerTexelX,k.metersPerTexelY),ce=Math.max(k.guardMetersX,k.guardMetersY),q={left:k.left,right:k.right,bottom:k.bottom,top:k.top,near:Math.max(.01,Z.near-B.depthMeters-b-p-kn),far:Math.max(1,Z.far+B.depthMeters+p+kn)};q.far=Math.max(q.near+1,q.far);const de=He(W*qf/Math.max(Xf,v.y),ro,Qf),Re=-He(W*Kf/Math.max(q.far-q.near,1),Number.EPSILON,.01),Ke=new T;Math.abs(v.y)>.99?Ke.set(1,0,0):Ke.crossVectors(new T(0,1,0),v).normalize();const O=new T().crossVectors(v,Ke),V=this.lights[0];V.visible=!0,V.castShadow=!0,V.intensity=o,V.color.copy(A),V.shadow.intensity=He(c,0,1),V.shadow.needsUpdate=!0,(V.shadow.mapSize.x!==k.mapWidth||V.shadow.mapSize.y!==k.mapHeight)&&((ut=V.shadow.map)==null||ut.dispose(),V.shadow.map=null,V.shadow.mapSize.set(k.mapWidth,k.mapHeight)),V.position.copy(v).multiplyScalar(N).add(F),V.target.position.copy(F);const ye=m!==void 0&&Number.isFinite(m)?Math.max(0,m):1/0;V.shadow.bias=Math.max(Re,-ye/(q.far-q.near)),V.shadow.normalBias=Math.min(de,ye);const Se=V.shadow.camera;Se.left=q.left,Se.right=q.right,Se.bottom=q.bottom,Se.top=q.top,Se.near=q.near,Se.far=q.far,Se.updateProjectionMatrix(),V.updateMatrixWorld(!0),V.target.updateMatrixWorld(!0),V.shadow.updateMatrices(V),this.lastSoftFit=this.softSun?{directionToSun:v.clone(),tangentA:Ke,tangentB:O,anchorPosition:F.clone(),lightDistance:N,rasterBounds:q}:null;const Pe=z.shadow.camera;return{sampleCount:1,totalShadowTexels:k.mapWidth*k.mapHeight,mapTexelBudget:h===void 0?C:void 0,casterReachMeters:b,camera:{receiverPointCount:e.length,receiverLeftMeters:Z.left,receiverRightMeters:Z.right,receiverBottomMeters:Z.bottom,receiverTopMeters:Z.top,leftMeters:Pe.left,rightMeters:Pe.right,bottomMeters:Pe.bottom,topMeters:Pe.top,nearMeters:Pe.near,farMeters:Pe.far,shadowMapWidth:k.mapWidth,shadowMapHeight:k.mapHeight,viewMatrixElements:[...io(z.position,z.target.position).elements],projectionMatrixElements:[...Pe.projectionMatrix.elements],guardMeters:ce,metersPerTexel:W,metersPerTexelX:k.metersPerTexelX,metersPerTexelY:k.metersPerTexelY,groundTexelWidthMeters:k.groundTexelWidthMeters,groundTexelHeightMeters:k.groundTexelHeightMeters,groundTexelFitLimited:k.groundTexelFitLimited,groundTexelFit:u,groundTexelTargetMeters:h}}}dispose(){var e;if(!this.disposed){this.disposed=!0;for(const r of this.lights)(e=r.shadow.map)==null||e.dispose(),this.host.remove(r.target,r)}}}const ip=`
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
`,no="float getShadow( sampler2DShadow shadowMap,",Hn="#elif defined( SHADOWMAP_TYPE_VSM )",np=()=>{const t=Zn.shadowmap_pars_fragment;if(!t.includes(no)||!t.includes(Hn))throw new Error("Three PCF shader changed; validate receiver-plane shadow integration");return`uniform bool carmaReceiverPlaneShadow;
${t.replace(no,"float carmaOriginalGetShadow( sampler2DShadow shadowMap,").replace(Hn,`${ip}
${Hn}`)}`},so=new WeakMap,sp=(t,e)=>{const r=so.get(t);if(r)return e!==void 0&&r.value!==e&&(r.value=e,t.needsUpdate=!0),r;const i={value:e??!1},n=t.onBeforeCompile,s=t.customProgramCacheKey(),a=np();return t.onBeforeCompile=function(o,c){n.call(this,o,c),o.uniforms.carmaReceiverPlaneShadow=i,o.fragmentShader=o.fragmentShader.replace("#include <shadowmap_pars_fragment>",a)},t.customProgramCacheKey=()=>`${s}|carma-receiver-plane-pcf-v3|${i.value?"mesh":"stock"}`,t.needsUpdate=!0,so.set(t,i),i},ao=new WeakMap,oo=(t,e,r,i,n="shadow-and-color")=>{const s=()=>r.render(t,i);if(e===void 0)return s(),!0;const a=t.getObjectById(e);if(!a)return!1;let o=ao.get(a);if(!o){const l=new Set;a.traverse(u=>l.add(u)),ao.set(a,l),o=l}if(n==="color-only"){const l=new Set;for(let d=a.parent;d;d=d.parent)l.add(d);const u=[];t.traverse(d=>{d.isMesh&&d.visible&&!o.has(d)&&!l.has(d)&&(u.push(d),d.visible=!1)});try{return s(),!0}finally{for(const d of u)d.visible=!0}}const c=r.renderBufferDirect;r.renderBufferDirect=function(...l){const[u,,,,d]=l;u===i&&d.isMesh&&!o.has(d)||c.apply(this,l)};try{return s(),!0}finally{r.renderBufferDirect=c}},Pt=t=>{var e;(e=t.depthTexture)==null||e.dispose(),t.dispose()},Bt=(t,e)=>t*e*8;class ap{entries=new Map;retainedBytes=0;capacityBytes=0;activeVariantIds=null;hits=0;misses=0;get bytes(){return this.retainedBytes}get count(){return this.entries.size}get availableBytes(){return Math.max(0,this.capacityBytes-this.retainedBytes)}has(e){return this.entries.has(e)}setActiveVariants(e){this.activeVariantIds=e}setBudget(e,r){this.capacityBytes=Math.max(0,e-r),this.evictInactive(0);for(const i of this.entries.keys()){if(this.retainedBytes<=this.capacityBytes)break;this.remove(i)}}get(e){const r=this.entries.get(e);return r?this.hits+=1:this.misses+=1,r==null?void 0:r.target}admit(e,r,i,n=r,s={}){var o;if(this.entries.has(e))return!1;const a=Bt(i.width,i.height);return a>this.capacityBytes||(s.evictInactive!==!1&&((o=this.activeVariantIds)!=null&&o.has(n))&&this.evictInactive(a),this.retainedBytes+a>this.capacityBytes)?!1:(this.entries.set(e,{pageId:r,variantId:n,target:i,bytes:a}),this.retainedBytes+=a,!0)}invalidate(e){for(const[r,i]of this.entries)i.pageId===e&&this.remove(r)}clear(){for(const e of this.entries.keys())this.remove(e)}evictInactive(e){if(this.activeVariantIds)for(const[r,i]of this.entries){if(this.retainedBytes+e<=this.capacityBytes)break;this.activeVariantIds.has(i.variantId)||this.remove(r)}}remove(e){const r=this.entries.get(e);r&&(this.entries.delete(e),this.retainedBytes-=r.bytes,Pt(r.target))}}const op=16,zn=4;class cp{constructor(e,r,i,n=4096,s=e){if(this.scene=e,this.renderer=r,this.memoryBudgetBytes=i,this.host=s,!Number.isFinite(i)||!(i>=Bt(64,64)))throw new RangeError("Shadow page budget must fit at least one 64-square page");if(!Number.isFinite(n)||n<64)throw new RangeError("Maximum shadow page size must be finite and at least 64");if(r.shadowMap.type!==xn)throw new Error("Tiled shadow reference requires the shared PCF shadow path");this.maxMapSize=Math.max(64,2**Math.floor(Math.log2(Math.min(n,r.capabilities.maxTextureSize,Math.sqrt(i/8)))))}pages=new Map;activePageIds=new Set;activeSamples=1;prewarmPageIds=new Set;prewarmSamples=1;prewarmRevision=0;prewarmSink=null;prewarmCamera=new El([]);cache=new ap;scratchBytes=0;depthRenders=0;colorPasses=0;disposed=!1;streamedTarget=null;maxMapSize;setView(e,r,i,n,s,a){if(this.disposed)return;if(this.clearPrewarmView(),![s.directionToSun.x,s.directionToSun.y,s.directionToSun.z].every(Number.isFinite)||s.directionToSun.lengthSq()===0||s.directionToSun.y<=0)throw new RangeError("Tiled shadow reference requires a finite sun direction above the horizon");const o=Gu(e,r,i,n);this.activePageIds=new Set(o.map(({id:l})=>l));for(const l of o)this.configurePage(l,s,a);const c=Math.max(32,this.activePageIds.size*2);for(const[l,u]of this.pages){if(this.pages.size<=c)break;this.activePageIds.has(l)||(this.cache.invalidate(l),u.controller.dispose(),this.pages.delete(l))}this.updateActiveVariants(),this.scratchBytes=Math.max(0,...Array.from(this.activePageIds,l=>{const u=this.pages.get(l);return Bt(u.width,u.height)})),this.streamedTarget&&Bt(this.streamedTarget.width,this.streamedTarget.height)>this.scratchBytes&&(Pt(this.streamedTarget),this.streamedTarget=null),this.cache.setBudget(this.memoryBudgetBytes,this.reservedBytes)}updatePresentation(e){if(this.disposed)return;e.updateMatrixWorld(!0);const r=new te().multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i=new Hr().setFromProjectionMatrix(r),n=new Set;for(const[s,a]of this.pages)i.intersectsBox(a.receiverBounds)&&(a.screenBounds.copy(Ko(a.receiverBounds,r)),n.add(s));this.activePageIds=n,this.updateActiveVariants()}get reservedBytes(){return this.scratchBytes+(this.prewarmSink?zn:0)}setPrewarmView(e,r,i,n,s,a){if(this.clearPrewarmView(),this.disposed)return;if(!Number.isSafeInteger(a)||a<1||a>4096||!(n>0&&Number.isFinite(n))||![i.x,i.y].every(l=>l>0&&Number.isFinite(l))||!s.directionToSun.toArray().every(Number.isFinite)||s.directionToSun.y<=0)throw new RangeError("Invalid shadow prewarm view");const o=new te().multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),c=new Set;for(const{id:l,bounds:u}of e){if(c.has(l)||u.isEmpty()||![...u.min.toArray(),...u.max.toArray()].every(Number.isFinite))throw new RangeError("Prewarm cells require unique IDs and finite bounds");c.add(l)}this.prewarmSamples=a;for(const l of e){if(this.prewarmPageIds.size>=op)break;this.activePageIds.has(l.id)||!this.pages.has(l.id)&&this.pages.size>=Math.max(32,this.activePageIds.size*2)||(this.configurePage({...l,screenBounds:new re,groundTexelTargetMeters:Math.max(1e-9,2*n/qo(l.bounds,o,i))},s),this.prewarmPageIds.add(l.id))}}clearPrewarmView(){this.prewarmPageIds.clear(),this.prewarmRevision+=1}get prewarmPages(){const e=[...this.prewarmPageIds].map(i=>{const n=this.pages.get(i),s=this.countPrewarmSamples(i,n);return{id:i,receiverBounds:n.receiverBounds.clone(),casterBounds:n.casterBounds.clone(),width:n.width,height:n.height,samples:this.prewarmSamples,cachedSamples:s,sampleBudget:s,limited:n.limited,canPrewarm:!1}});let r=this.cache.availableBytes-(this.prewarmSink?0:zn);for(;r>0;){const i=e.filter(n=>n.sampleBudget<n.samples&&Bt(n.width,n.height)<=r).sort((n,s)=>n.sampleBudget-s.sampleBudget);if(i.length===0)break;for(const n of i){const s=Bt(n.width,n.height);s>r||(n.sampleBudget+=1,r-=s)}}return e.map(i=>({...i,canPrewarm:i.sampleBudget>i.cachedSamples}))}canPrewarm(e){return!this.disposed&&this.prewarmPages.some(r=>r.id===e&&r.canPrewarm)}countPrewarmSamples(e,r){const i=JSON.stringify([e,r.projectionKey,this.prewarmSamples]);let n=0;for(let s=0;s<this.prewarmSamples;s+=1)this.cache.has(JSON.stringify([i,s]))&&(n+=1);return n}prewarmNext(e,r,i={}){var v,p;const n=this.pages.get(r),s=!this.disposed&&this.prewarmPageIds.has(r)&&!!n,a=(y,b=!1)=>{var M;const R=s?this.countPrewarmSamples(r,n):0;return{pageId:r,rendered:y,cachedSamples:R,totalSamples:s?this.prewarmSamples:0,complete:s&&R===this.prewarmSamples,budgetLimited:b,aborted:((M=i.signal)==null?void 0:M.aborted)===!0}};if(!s||(v=i.signal)!=null&&v.aborted)return a(0);const o=this.prewarmRevision,c=n.contentRevision;if(this.renderer.shadowMap.type!==xn)throw new Error("Shadow prewarm requires the shared PCF shadow path");const l=JSON.stringify([r,n.projectionKey,this.prewarmSamples]);let u=0;for(;u<this.prewarmSamples&&this.cache.has(JSON.stringify([l,u]));)u+=1;if(u===this.prewarmSamples)return a(0);if(!this.canPrewarm(r)||Bt(n.width,n.height)+(this.prewarmSink?0:zn)>this.cache.availableBytes)return a(0,!0);this.prewarmSink||(this.prewarmSink=new je(1,1,{depthBuffer:!1}),this.cache.setBudget(this.memoryBudgetBytes,this.reservedBytes));const g=n.controller.lights[0];this.prewarmSamples===1?n.controller.restoreSunDiscCenter():n.controller.applySunDiscSample(u,this.prewarmSamples),g.shadow.map=null,g.shadow.needsUpdate=!0;const h=g.visible;g.visible=!0,this.prewarmCamera.layers.mask=e.layers.mask,this.prewarmCamera.matrixAutoUpdate=!1,this.prewarmCamera.matrixWorldAutoUpdate=!1,this.prewarmCamera.matrixWorld.copy(e.matrixWorld),this.prewarmCamera.matrixWorldInverse.copy(e.matrixWorldInverse),this.prewarmCamera.projectionMatrix.copy(e.projectionMatrix);let m=0;try{this.renderPrewarmDepth(g);const y=g.shadow.map;y&&(m=1,this.depthRenders+=1,((p=i.signal)!=null&&p.aborted||o!==this.prewarmRevision||c!==n.contentRevision||!this.prewarmPageIds.has(r)||!this.cache.admit(JSON.stringify([l,u]),r,y,l,{evictInactive:!1}))&&Pt(y))}catch(y){throw g.shadow.map&&Pt(g.shadow.map),y}finally{g.visible=h,g.shadow.map=null}return a(m)}renderPrewarmDepth(e){const{renderer:r,scene:i}=this,n=r.getContext(),s=r.getRenderTarget(),a=r.getActiveCubeFace(),o=r.getActiveMipmapLevel(),c=r.getViewport(new re),l=r.getScissor(new re),u=r.getScissorTest(),d=n.getParameter(n.DRAW_FRAMEBUFFER_BINDING),g=n.getParameter(n.READ_FRAMEBUFFER_BINDING),h=new re().fromArray(n.getParameter(n.VIEWPORT)),m=new re().fromArray(n.getParameter(n.SCISSOR_BOX)),v=n.isEnabled(n.SCISSOR_TEST),p=n.isEnabled(n.DEPTH_TEST),y=n.getParameter(n.DEPTH_RANGE),b=n.getParameter(n.DEPTH_WRITEMASK),R=n.getParameter(n.DEPTH_FUNC),M=n.getParameter(n.DEPTH_CLEAR_VALUE),C=n.getParameter(n.COLOR_CLEAR_VALUE),E=n.getParameter(n.COLOR_WRITEMASK),A=r.clippingPlanes,F=r.autoClear,U=i.background,N=r.xr.enabled,z=r.shadowMap.enabled,Z=r.shadowMap.autoUpdate,B=r.shadowMap.needsUpdate,D=[];i.traverse(k=>{const W=k;W.isLight&&W.castShadow&&W!==e&&D.push(W)});try{r.resetState(),r.autoClear=!1,r.xr.enabled=!1,r.shadowMap.enabled=!0,r.shadowMap.autoUpdate=!0;for(const k of D)k.castShadow=!1;i.background=null,r.clippingPlanes=A,r.setRenderTarget(this.prewarmSink),n.depthRange(0,1),r.render(i,this.prewarmCamera)}finally{r.clippingPlanes=A,r.autoClear=F,r.xr.enabled=N,r.shadowMap.enabled=z,r.shadowMap.autoUpdate=Z,r.shadowMap.needsUpdate=B;for(const k of D)k.castShadow=!0;i.background=U,r.resetState(),r.setRenderTarget(s,a,o),r.setViewport(c),r.setScissor(l),r.setScissorTest(u),r.state.bindFramebuffer(n.DRAW_FRAMEBUFFER,d),r.state.bindFramebuffer(n.READ_FRAMEBUFFER,g),r.state.viewport(h),r.state.scissor(m),r.state.setScissorTest(v),p?r.state.enable(n.DEPTH_TEST):r.state.disable(n.DEPTH_TEST),n.depthRange(y[0],y[1]),n.depthMask(b),n.depthFunc(R),n.clearDepth(M),n.clearColor(C[0],C[1],C[2],C[3]),n.colorMask(E[0],E[1],E[2],E[3])}}configurePage(e,r,i){let n=this.pages.get(e.id);if(!n){const u=new Hc(this.host);u.setMaxShadowMapSize(this.maxMapSize),u.setSoftSun(!0),n={controller:u,projectionKey:"",lightingKey:"",presentationKey:"",corridor:new Ie,planes:[],width:0,height:0,limited:!1,screenBounds:e.screenBounds,receiverBounds:e.bounds.clone(),groundTexelTargetMeters:e.groundTexelTargetMeters,casterBounds:new Ie,contentRevision:0,casterRevision:null}}this.pages.delete(e.id),this.pages.set(e.id,n);const s=n.controller.update({...r,maxReceiverBiasMeters:i?i(e.bounds,e.groundTexelTargetMeters):r.maxReceiverBiasMeters,receiverWorldPoints:Wr(e.bounds),receiverAnchorWorldPosition:e.bounds.getCenter(new T),minimumElevationMeters:e.bounds.min.y,maximumElevationMeters:e.bounds.max.y,quality:4,groundTexelFit:!0,groundTexelTargetMeters:e.groundTexelTargetMeters});if(!s)return;const a=n.controller.lights[0];a.visible=!1;const o=s.camera,c=e.receiverObjectId===void 0?"spatial-partition-v1":"native-object-v1",l=JSON.stringify([c,o.viewMatrixElements,o.projectionMatrixElements,o.shadowMapWidth,o.shadowMapHeight,a.shadow.bias,a.shadow.normalBias,e.bounds.min,e.bounds.max]);n.projectionKey=l,n.lightingKey=JSON.stringify([r.directionToSun,r.shadowIntensity,e.bounds.min,e.bounds.max]),n.presentationKey=JSON.stringify([c,r.directionToSun,r.shadowIntensity,e.bounds.min.x,e.bounds.min.z,e.bounds.max.x,e.bounds.max.z]),n.receiverBounds.copy(e.bounds),n.receiverObjectId=e.receiverObjectId,n.groundTexelTargetMeters=e.groundTexelTargetMeters,n.screenBounds=e.screenBounds,n.width=o.shadowMapWidth,n.height=o.shadowMapHeight,n.limited=(o.groundTexelWidthMeters??1/0)>e.groundTexelTargetMeters*1.001||(o.groundTexelHeightMeters??1/0)>e.groundTexelTargetMeters*1.001,n.casterBounds.copy(ju(e.bounds,r.directionToSun,s.casterReachMeters+e.bounds.getSize(new T).length(),Or,o.guardMeters)),n.corridor.union(n.casterBounds),n.planes=[new at(new T(1,0,0),-e.bounds.min.x),new at(new T(-1,0,0),e.bounds.max.x),new at(new T(0,0,1),-e.bounds.min.z),new at(new T(0,0,-1),e.bounds.max.z)]}invalidateCasters(e){const r=e instanceof Ie?[e]:e,i=[];for(const[n,s]of this.pages)r.some(a=>s.corridor.intersectsBox(a))&&(s.contentRevision+=1,this.cache.invalidate(n),i.push(n));return i}setCasterRevision(e,r){const i=this.pages.get(e);return!i||r===null||i.casterRevision===r?!1:(i.casterRevision=r,i.contentRevision+=1,this.cache.invalidate(e),!0)}renderSample(e,r,i){this.renderSamples(e,this.activePageIds,r,i)}renderPageSample(e,r,i,n,s){return this.disposed||!this.activePageIds.has(r)?!1:this.renderSamples(e,[r],i,n,s)>0}renderPageColor(e,r){const i=this.pages.get(r);if(this.disposed||!i||!this.activePageIds.has(r))return!1;const{renderer:n,scene:s}=this,a=n.clippingPlanes,o=n.autoClear,c=s.background,l=n.shadowMap.autoUpdate,u=n.shadowMap.needsUpdate;n.autoClear=!1,n.shadowMap.autoUpdate=!1,n.shadowMap.needsUpdate=!1,n.clippingPlanes=[...a,...i.planes],s.background=null;try{const d=oo(s,i.receiverObjectId,n,e,"color-only");return d&&(this.colorPasses+=1),d}finally{n.clippingPlanes=a,n.autoClear=o,n.shadowMap.autoUpdate=l,n.shadowMap.needsUpdate=u,s.background=c}}get accumulationPages(){return[...this.activePageIds].map(e=>{const r=this.pages.get(e),i=r.controller.lights[0];return{id:e,receiverObjectId:r.receiverObjectId,contentKey:JSON.stringify([r.lightingKey,r.contentRevision]),casterRevision:r.casterRevision,presentationKey:r.presentationKey,revision:JSON.stringify([r.projectionKey,r.contentRevision,i.color.toArray(),i.intensity,i.shadow.intensity]),screenBounds:r.screenBounds.clone(),receiverBounds:r.receiverBounds.clone(),groundTexelTargetMeters:r.groundTexelTargetMeters}})}areCastersReady(e,r){const i=this.pages.get(e);return!!(i&&r(i.casterBounds))}getPageGeometry(e){const r=this.pages.get(e);return r?{casterBounds:r.casterBounds.clone(),receiverBounds:r.receiverBounds.clone(),width:r.width,height:r.height,projectionKey:r.projectionKey}:null}get supportsOpaqueAccumulation(){let e=!0;return this.scene.traverseVisible(r=>{const i=r;if(!(!i.isMesh||!i.receiveShadow))for(const n of Array.isArray(i.material)?i.material:[i.material])n.visible&&(n.transparent||!n.depthWrite||!n.depthTest)&&(e=!1)}),e}renderSamples(e,r,i,n,s){if(this.disposed)return 0;if(this.renderer.shadowMap.type!==xn)throw new Error("Shadow page cache must be recreated after changing the depth/filter format");if(!Number.isInteger(n)||n<1||!Number.isInteger(i)||i<0||i>=n)throw new RangeError("Shadow sample must lie within its finite-disc sequence");n!==this.activeSamples&&(this.activeSamples=n,this.updateActiveVariants());const{renderer:a,scene:o}=this,c=a.clippingPlanes,l=a.autoClear,u=o.background,d=a.getRenderTarget(),g=d==null?void 0:d.scissor.clone(),h=d==null?void 0:d.scissorTest;let m=0;a.autoClear=!1,o.background=null;try{for(const v of r){const p=this.pages.get(v),y=p.controller.lights[0];n===1?p.controller.restoreSunDiscCenter():p.controller.applySunDiscSample(i,n);const b=JSON.stringify([v,p.projectionKey,n]),R=JSON.stringify([b,i]),M=this.cache.get(R);if(!M&&this.streamedTarget&&(this.streamedTarget.width!==p.width||this.streamedTarget.height!==p.height)&&(Pt(this.streamedTarget),this.streamedTarget=null),y.shadow.map=M??this.streamedTarget,M||(this.streamedTarget=null),y.shadow.needsUpdate=!M,y.visible=!0,a.clippingPlanes=[...c,...p.planes],d){const{x:C,y:E,z:A,w:F}=s??p.screenBounds,U=Math.floor(C*d.width),N=Math.floor(E*d.height);d.scissor.set(U,N,Math.ceil((C+A)*d.width)-U,Math.ceil((E+F)*d.height)-N),d.scissorTest=!0,a.setRenderTarget(d)}try{if(oo(o,p.receiverObjectId,a,e)&&(this.colorPasses+=1,m+=1),!M&&y.shadow.map){this.depthRenders+=1;const E=y.shadow.map;this.cache.admit(R,v,E,b)||(this.streamedTarget=E)}}catch(C){throw!M&&y.shadow.map&&Pt(y.shadow.map),C}finally{y.visible=!1,y.shadow.map=null}}}finally{a.clippingPlanes=c,a.autoClear=l,o.background=u,d&&g&&(d.scissor.copy(g),d.scissorTest=h??!1,a.setRenderTarget(d))}return m}get stats(){const e=[...this.activePageIds].map(r=>this.pages.get(r));return{pages:e.length,cachedSamplePages:this.cache.count,cacheBytes:this.cache.bytes,scratchBytes:this.reservedBytes,hits:this.cache.hits,misses:this.cache.misses,depthRenders:this.depthRenders,colorPasses:this.colorPasses,limitedPages:e.filter(r=>r.limited).length,dimensions:e.map(r=>`${r.width}×${r.height}`)}}clearCache(){this.cache.clear();for(const e of this.pages.values())e.contentRevision+=1}updateActiveVariants(){this.cache.setActiveVariants(new Set([...this.activePageIds].flatMap(e=>[...new Set([1,this.activeSamples])].map(r=>JSON.stringify([e,this.pages.get(e).projectionKey,r])))))}get pageLevels(){return[...this.activePageIds].map(e=>{const r=this.pages.get(e);return{id:e,level:Math.max(0,Math.round(Math.log2(this.maxMapSize/Math.max(r.width,r.height)))),width:r.width,height:r.height}})}dispose(){var e;if(!this.disposed){this.disposed=!0,this.cache.clear(),this.streamedTarget&&Pt(this.streamedTarget),this.streamedTarget=null,(e=this.prewarmSink)==null||e.dispose(),this.prewarmSink=null,this.clearPrewarmView(),this.scratchBytes=0;for(const r of this.pages.values())r.controller.dispose();this.pages.clear(),this.activePageIds.clear()}}}const lp=async({pages:t,signal:e,prepare:r,render:i,yieldToInput:n})=>{let s=0,a=0,o=0,c=!1;try{for(const l of t){if(e.aborted)break;if(l.cachedSamples>=l.samples){s+=1;continue}if(!l.canPrewarm){c=!0;continue}if(await n(e),e.aborted)break;const u=await r(l,e);try{if(e.aborted)break;if(!u.covered||!u.isCurrent()){a+=1;continue}const d=Math.min(l.samples,l.sampleBudget);d<l.samples&&(c=!0);for(let g=l.cachedSamples;g<d&&(await n(e),!(e.aborted||!u.isCurrent()));g+=1){const h=i(l.id,u.group,e);if(o+=h.rendered,h.complete){s+=1;break}if(h.budgetLimited){c=!0;break}if(h.aborted||!h.rendered)break}}finally{u.dispose()}}}catch(l){if(!e.aborted)throw l}return{offered:t.length,completed:s,skippedCoverage:a,renderedSamples:o,budgetLimited:c,aborted:e.aborted}},up=t=>{const e=globalThis.scheduler;return e!=null&&e.postTask?e.postTask(()=>{},{priority:"background",delay:0,signal:t}):Promise.reject(new Error("Background scheduler unavailable"))},dp=({getRequest:t})=>{let e=!1,r=null,i=null,n=!1;const s=()=>{n=!1,i==null||i.abort()},a=()=>{if(!e){if(i){n=!0;return}try{const o=globalThis.scheduler;if(typeof(o==null?void 0:o.postTask)!="function")return;const c=t();if(!c||c.key===r)return;r=c.key;const l=new AbortController;i=l;let u=!1;const d=()=>{if(i!==l||u)return;i=null;const g=n;n=!1,g&&a()};try{o.postTask(async()=>{if(e||l.signal.aborted)return;const g=t();if(!(!g||g.key!==c.key)){u=!0;try{await g.run(l.signal)}finally{u=!1,d()}}},{priority:"background",delay:150,signal:l.signal}).then(d,d)}catch{d()}}catch{}}};return{onSettled:a,cancel:s,dispose(){e=!0,s()}}},zc=(t,e,r)=>JSON.stringify([t.matrixWorldInverse.elements,t.projectionMatrix.elements,e,r]),hp=(t,e)=>{if(!Number.isFinite(e)||e<t.length*8)throw new RangeError("Capture budget must fit at least one scalar/depth pixel per page");const r=[...t].sort((n,s)=>n.id<s.id?-1:n.id>s.id?1:0).map(({id:n,plan:s,screenArea:a})=>({id:n,plan:s,width:s.width,height:s.height,weight:2**Math.floor(Math.log2(Math.max(1/65536,Math.min(1,a))))}));let i=r.reduce((n,s)=>n+s.width*s.height,0);for(;i*8>e;){let n;for(const a of r)a.width===1&&a.height===1||(!n||a.width*a.height/a.weight>n.width*n.height/n.weight)&&(n=a);if(!n)break;const s=n.width*n.height;n.width>=n.height&&n.width>1?n.width/=2:n.height/=2,i-=s-n.width*n.height}return new Map(r.map(({id:n,plan:s,width:a,height:o})=>[n,a===s.width&&o===s.height?s:{...s,width:a,height:o,limited:!0,key:zc(s.camera,a,o)}]))},mp=(t,e,r)=>{const{groundTexelTargetMeters:i,maximumDimension:n,maximumPixels:s}=r;if(t.isEmpty()||![...t.min.toArray(),...t.max.toArray(),...e.toArray()].every(Number.isFinite)||!(i>0&&Number.isFinite(i))||!(n>=1&&Number.isFinite(n))||!(s>=1&&Number.isFinite(s)))throw new RangeError("Receiver capture requires finite bounds and positive allocation limits");const a=t.getCenter(new T),o=t.getSize(new T).length()*.5,c=Math.max(.001,o*.001),l=new vs;l.quaternion.copy(e).normalize(),l.position.copy(a).add(new T(0,0,o+c+1).applyQuaternion(l.quaternion)),l.updateMatrixWorld(!0);const u=new Ie().setFromPoints(Wr(t).map(y=>y.applyMatrix4(l.matrixWorldInverse)));l.left=u.min.x-c,l.right=u.max.x+c,l.bottom=u.min.y-c,l.top=u.max.y+c,l.near=Math.max(.001,-u.max.z-c),l.far=Math.max(l.near+.001,-u.min.z+c),l.updateProjectionMatrix();const d=y=>2**Math.ceil(Math.log2(Math.max(1,y/i))),g=d(l.right-l.left),h=d(l.top-l.bottom),m=2**Math.floor(Math.log2(n));let v=Math.min(g,m),p=Math.min(h,m);for(;v*p>s;)v>=p&&v>1?v/=2:p/=2;return{camera:l,width:v,height:p,limited:v<g||p<h,key:zc(l,v,p)}},fp=t=>new Rl().setFromRotationMatrix(new te().extractRotation(t.matrixWorld)),Pi={namespace:"shadow-corridor-visibility",schema:"visibility-depth-world-basis-v1",maximumPayloadBytes:32*1024**2,maximumRecordBytes:33*1024**2,maximumIdentityCharacters:65536},pi={read:"read",write:"write",writePacked:"write-packed"},Ge=t=>{if(!t||!Number.isInteger(t.samples)||t.samples<1||t.samples>4096)return null;const e=[t.source,t.dateTime,t.corridor,t.resolution,t.geometryFingerprint];return e.some(r=>typeof r!="string"||r.length===0)||e.reduce((r,i)=>r+i.length,0)>Pi.maximumIdentityCharacters?null:JSON.stringify([Pi.schema,...e,t.samples])},Vn=(t,e)=>Array.isArray(t)&&t.length===e&&t.every(Number.isFinite),Vc=t=>{if(!t||typeof t!="object")return!1;const e=t,r=e.width*e.height;return Number.isSafeInteger(e.width)&&e.width>0&&Number.isSafeInteger(e.height)&&e.height>0&&Number.isSafeInteger(r)&&r*8<=Pi.maximumPayloadBytes&&Vn(e.captureMatrix,16)&&Vn(e.worldBasis,16)&&Vn(e.crop,4)&&e.crop[0]>=0&&e.crop[1]>=0&&e.crop[2]>0&&e.crop[3]>0&&e.crop[0]+e.crop[2]<=1.000001&&e.crop[1]+e.crop[3]<=1.000001},co=t=>{if(!Vc(t))return!1;const e=t,r=e.width*e.height;return e.visibility instanceof Float32Array&&e.visibility.length===r&&e.depth instanceof Float32Array&&e.depth.length===r},pp=t=>{if(!Vc(t))return!1;const e=t;return e.rgba instanceof Float32Array&&e.rgba.length===e.width*e.height*4},Tr=64,ms=256*1024**2,Wn=ms,gp=128*1024**2,lo=8,uo=32*1024**2,vp=4,br=t=>{var e;t.target?((e=t.target.depthTexture)==null||e.dispose(),t.target.dispose()):(t.visibility.dispose(),t.depth.dispose())},yp=(t,e)=>t.elements.every((r,i)=>Number.isFinite(r)&&Math.abs(r-e.elements[i])<=1e-10*Math.max(1,Math.abs(r)));class Wc{constructor(e){this.renderer=e,this.copyQuad.frustumCulled=!1,this.copyScene.add(this.copyQuad)}captures=new Map;visiblePageIds=new Set;samples=0;replayCount=0;matchingPages=0;persistence;persistenceGeneration=0;disposed=!1;restoreAttempts=new Set;pendingRestores=new Map;restoreRequests=new Map;pendingWrites=new Map;persistenceOffers=new WeakMap;persistenceAttempted=new WeakSet;persistenceTimer=null;readbackBusy=!1;readbackBytes=0;packMaterial=new er({uniforms:{visibility:{value:null},depth:{value:null}},vertexShader:"varying vec2 uvCopy; void main() { uvCopy = position.xy * 0.5 + 0.5; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:"uniform sampler2D visibility; uniform sampler2D depth; varying vec2 uvCopy; void main() { gl_FragColor = vec4(texture2D(visibility, uvCopy).r, texture2D(depth, uvCopy).r, 0.0, 1.0); }",depthTest:!1,depthWrite:!1,blending:yi,toneMapped:!1});materials=new Map;unsupportedMaterials=new WeakSet;captureSupported=!0;contentRevision=0;get revision(){return this.contentRevision}get supportsCapture(){return this.captureSupported}copyScene=new Nr;copyCamera=new Oi;copyMaterial=new er({uniforms:{source:{value:null},crop:{value:new re}},vertexShader:"varying vec2 uvCopy; void main() { uvCopy = position.xy * 0.5 + 0.5; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:"uniform sampler2D source; uniform vec4 crop; varying vec2 uvCopy; void main() { gl_FragColor = vec4(texture2D(source, crop.xy + uvCopy * crop.zw).r, 0.0, 0.0, 1.0); }",depthTest:!1,depthWrite:!1,blending:yi,toneMapped:!1});copyQuad=new kr(new fs(2,2),this.copyMaterial);downsampleMaterial=new er({uniforms:{source:{value:null},depth:{value:null},texel:{value:new Nt}},vertexShader:"varying vec2 uvCopy; void main() { uvCopy = position.xy * 0.5 + 0.5; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:`uniform sampler2D source; uniform sampler2D depth;
      uniform vec2 texel; varying vec2 uvCopy;
      void main() {
        vec2 d = texel * 0.25;
        float visibility = (texture2D(source, uvCopy + d).r
          + texture2D(source, uvCopy - d).r
          + texture2D(source, uvCopy + vec2(d.x, -d.y)).r
          + texture2D(source, uvCopy + vec2(-d.x, d.y)).r) * 0.25;
        gl_FragColor = vec4(visibility, 0.0, 0.0, 1.0);
        gl_FragDepth = texture2D(depth, uvCopy).r;
      }`,depthTest:!0,depthFunc:Fo,depthWrite:!0,blending:yi,toneMapped:!1});uniforms={carmaCaptureVisibility:{value:!1},carmaRetainedEnabled:{value:!1},carmaRetainedColor:{value:null},carmaRetainedDepth:{value:null},carmaRetainedMatrix:{value:new te},carmaRetainedCrop:{value:new re(0,0,1,1)},carmaRetainedCount:{value:0},carmaRetainedBounds:{value:Array.from({length:Tr},()=>new re)}};get memoryBytes(){return[...this.captures.values()].reduce((e,r)=>e+r.bytes,this.readbackBytes)}getCapturedSize(e){const r=this.captures.get(e);return r?{width:r.width,height:r.height,samples:r.samples}:null}get stats(){return{pages:this.captures.size,samples:this.samples,matchingPages:this.matchingPages,replays:this.replayCount,bytes:this.memoryBytes}}beginFrame(e=[]){this.matchingPages=0,this.visiblePageIds=new Set(e.map(r=>r.id)),this.schedulePersistence()}has(e,r){var n;const i=this.captures.get(e.id);if(!this.canReplay(e)||(i==null?void 0:i.casterRevision)!==e.casterRevision)return!1;if(i&&i.samples>1&&i.samples>=r&&e.captureSize&&e.presentationKey&&i.crop.x===0&&i.crop.y===0&&i.crop.z===1&&i.crop.w===1)return i.width>=e.captureSize.width&&i.height>=e.captureSize.height;if(i!=null&&i.restored){const s=this.restoreRequests.get(e.id),a=(n=this.persistence)==null?void 0:n.identity(e,r);if(e.ready===!1||!(s!=null&&s.expected)||!a||Ge(a)!==i.persistentKey||!yp(i.matrix,s.expected))return!1;const o=e.screenBounds,c=i.crop;if(c.x>o.x+1e-6||c.y>o.y+1e-6||c.x+c.z<o.x+o.z-1e-6||c.y+c.w<o.y+o.w-1e-6)return!1}return(i==null?void 0:i.revision)===(e.contentKey??e.revision)&&i.samples===r}hasAtLeast(e,r){const i=this.captures.get(e.id);return!!(i&&i.samples>=r&&this.has(e,i.samples))}downsample(e,r,i){var p;if(!Number.isInteger(r)||!Number.isInteger(i)||r<1||i<1)return!1;const n=this.captures.get(e.id);if(!n||!this.canReplay(e))return!1;const s=Math.max(r,Math.ceil(n.width/2)),a=Math.max(i,Math.ceil(n.height/2));if(s>n.width||a>n.height||s*a>=n.width*n.height)return!1;const o=new je(s,a,{type:xt,format:Zt,minFilter:Ee,magFilter:Ee,depthTexture:new rr(s,a,Ht),samples:0}),c=this.renderer,l=c.getRenderTarget(),u=c.getActiveCubeFace(),d=c.getActiveMipmapLevel(),g=c.getViewport(new re),h=c.getScissor(new re),m=c.getScissorTest(),v=c.autoClear;try{c.initRenderTarget(o),this.downsampleMaterial.uniforms.source.value=n.visibility,this.downsampleMaterial.uniforms.depth.value=n.depth,this.downsampleMaterial.uniforms.texel.value.set(1/s,1/a),this.copyQuad.material=this.downsampleMaterial,c.autoClear=!1,c.setRenderTarget(o),c.setViewport(new re(0,0,s,a)),c.setScissorTest(!1),c.render(this.copyScene,this.copyCamera)}catch(y){throw(p=o.depthTexture)==null||p.dispose(),o.dispose(),y}finally{this.copyQuad.material=this.copyMaterial,c.setRenderTarget(l,u,d),c.setViewport(g),c.setScissor(h),c.setScissorTest(m),c.autoClear=v}return this.captures.set(e.id,{...n,target:o,visibility:o.texture,depth:o.depthTexture,width:s,height:a,bytes:s*a*8}),this.pendingWrites.delete(e.id),br(n),this.contentRevision+=1,!0}isRestorePending(e,r){var s;const i=this.pendingRestores.get(e.id);if(!i||i.samples!==r)return!1;const n=(s=this.persistence)==null?void 0:s.identity(e,r);return!!(n&&Ge(n)===i.key)}setPersistence(e){this.persistence!==e&&(this.cancelPendingPersistence(),this.persistence=e)}cancelPendingPersistence(){var e;(e=this.persistence)==null||e.cache.cancelPending(),this.persistenceGeneration+=1,this.restoreAttempts.clear(),this.pendingRestores.clear(),this.restoreRequests.clear(),this.pendingWrites.clear(),this.persistenceOffers=new WeakMap,this.persistenceAttempted=new WeakSet,this.persistenceTimer!==null&&clearTimeout(this.persistenceTimer),this.persistenceTimer=null}beginSolarTransition(){this.cancelPendingPersistence()}canPresent(e){return this.canReplay(e)}prepareRestore(e,r,i){if(this.disposed)return;if(this.restoreRequests.set(e.id,{page:e,samples:r,expected:i==null?void 0:i.clone()}),this.restoreRequests.size>Tr*2){for(const l of this.restoreRequests.keys())if(l!==e.id&&!this.visiblePageIds.has(l)){this.restoreRequests.delete(l);break}}const n=this.persistence;if(!(n!=null&&n.cache.enabled)||n.cache.busy||e.ready===!1||this.hasAtLeast(e,r))return;const s=n.identity(e,r),a=s&&Ge(s);if(!s||!a||this.restoreAttempts.has(a))return;this.restoreAttempts.add(a),this.restoreAttempts.size>Tr*4&&this.restoreAttempts.delete(this.restoreAttempts.values().next().value);const o=this.persistenceGeneration,c=this.captures.get(e.id);this.pendingRestores.set(e.id,{key:a,samples:r}),n.cache.read(s).then(l=>{const u=this.restoreRequests.get(e.id),d=u&&n.identity(u.page,r);if(!l||this.disposed||this.persistenceGeneration!==o||this.persistence!==n||!u||u.page.ready===!1||!d||Ge(d)!==a||this.captures.get(e.id)!==c)return;const g=new te().fromArray(l.worldBasis),h=n.worldBasis();if(!g.elements.every(Number.isFinite)||g.determinant()===0||!h.elements.every(Number.isFinite)||h.determinant()===0)return;const m=new te().fromArray(l.captureMatrix).multiply(g.invert()).multiply(h),v=[...new Set([l.visibility.buffer,l.depth.buffer])].reduce((R,M)=>R+M.byteLength,0),p=l.width*l.height*lo+v;if(!this.admit(e.id,p))return;const y=new Qn(l.visibility,l.width,l.height,Zt,xt),b=new Qn(l.depth,l.width,l.height,Zt,xt);for(const R of[y,b])R.minFilter=Ee,R.magFilter=Ee,R.generateMipmaps=!1,R.needsUpdate=!0;c&&br(c),this.captures.delete(e.id),this.captures.set(e.id,{target:null,visibility:y,depth:b,width:l.width,height:l.height,bytes:p,restored:!0,persistentKey:a,persistentIdentity:l.identity,revision:u.page.contentKey??u.page.revision,casterRevision:u.page.casterRevision,presentationKey:u.page.presentationKey??u.page.contentKey??u.page.revision,samples:l.identity.samples,matrix:m,crop:new re().fromArray(l.crop)}),this.samples=l.identity.samples,this.contentRevision+=1}).catch(()=>{}).finally(()=>{var l,u;!this.disposed&&o===this.persistenceGeneration&&(((l=this.pendingRestores.get(e.id))==null?void 0:l.key)===a&&this.pendingRestores.delete(e.id),(u=n.requestRepaint)==null||u.call(n),this.schedulePersistence())})}admit(e,r,i=!1){var a;const n=i?Math.min(((a=this.captures.get(e))==null?void 0:a.bytes)??0,gp):0,s=Wn+n;for(const[o,c]of this.captures){if(r+this.memoryBytes<=s)break;o===e||this.visiblePageIds.has(o)||(br(c),this.captures.delete(o),this.contentRevision+=1,this.pendingWrites.delete(o))}return r+this.memoryBytes<=s}publish(e,r,i,n,s){var U;if(!this.captureSupported)return!1;const a=n.screenBounds,o=Math.max(0,Math.floor(a.x*e.width)),c=Math.max(0,Math.floor(a.y*e.height)),l=Math.min(e.width,Math.ceil((a.x+a.z)*e.width)),u=Math.min(e.height,Math.ceil((a.y+a.w)*e.height)),d=l-o,g=u-c,h=d*g*lo;if(d<=0||g<=0||h>Wn||!r.depthTexture||!this.admit(n.id,h,!0))return!1;const m=this.renderer,v=m.getRenderTarget(),p=m.getActiveCubeFace(),y=m.getActiveMipmapLevel(),b=m.getViewport(new re),R=m.getScissor(new re),M=m.getScissorTest(),C=m.autoClear,E=new je(d,g,{type:xt,format:Zt,minFilter:Ee,magFilter:Ee,depthTexture:new rr(d,g,Ht),samples:0});try{m.initRenderTarget(E);const N=new Al(new Nt(o,c),new Nt(l,u));this.copyMaterial.uniforms.source.value=e.texture,this.copyMaterial.uniforms.crop.value.set(o/e.width,c/e.height,d/e.width,g/e.height),m.autoClear=!1,m.setRenderTarget(E),m.setViewport(new re(0,0,d,g)),m.setScissorTest(!1),m.render(this.copyScene,this.copyCamera),m.copyTextureToTexture(r.depthTexture,E.depthTexture,N)}catch(N){throw(U=E.depthTexture)==null||U.dispose(),E.dispose(),N}finally{m.setRenderTarget(v,p,y),m.setViewport(b),m.setScissor(R),m.setScissorTest(M),m.autoClear=C}const A=this.captures.get(n.id);A&&br(A),this.samples=s,this.captures.delete(n.id);const F={target:E,visibility:E.texture,depth:E.depthTexture,width:d,height:g,bytes:h,restored:!1,revision:n.contentKey??n.revision,casterRevision:n.casterRevision,samples:s,presentationKey:n.presentationKey??n.contentKey??n.revision,matrix:new te().multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),crop:new re(o/e.width,c/e.height,d/e.width,g/e.height)};return this.captures.set(n.id,F),this.contentRevision+=1,this.queuePersistence(n,F),!0}queuePersistence(e,r){const i=this.persistence;if(!(i!=null&&i.cache.enabled)||e.ready===!1||this.disposed)return;const n=i.identity(e,r.samples),s=n&&Ge(n),a=i.worldBasis();!n||n.samples!==r.samples||!s||!a.elements.every(Number.isFinite)||a.determinant()===0||r.width*r.height*16>uo||(this.pendingWrites.delete(e.id),this.persistenceOffers.set(r,{page:e,capture:r,identity:n,key:s,worldBasis:[...a.elements]}),this.schedulePersistence())}schedulePersistence(){var e;if(!(this.disposed||this.persistenceTimer!==null||this.readbackBusy||!((e=this.persistence)!=null&&e.cache.enabled)||this.persistence.cache.busy)){for(const[r,i]of this.pendingWrites)this.captures.get(r)!==i.capture&&this.pendingWrites.delete(r);for(const r of[!0,!1])for(const[i,n]of this.captures){if(this.pendingWrites.size>=vp)break;const s=this.persistenceOffers.get(n);this.visiblePageIds.has(i)===r&&s&&!this.persistenceAttempted.has(n)&&!this.pendingWrites.has(i)&&this.pendingWrites.set(i,s)}this.pendingWrites.size!==0&&(this.persistenceTimer=setTimeout(()=>{this.persistenceTimer=null,this.persistNextCapture()},0))}}persistNextCapture(){var m,v,p;const e=this.persistence;if(this.disposed||this.readbackBusy||!(e!=null&&e.cache.enabled)||e.cache.busy||typeof this.renderer.readRenderTargetPixelsAsync!="function")return;const r=[...this.pendingWrites.entries()].find(([y,b])=>this.captures.get(y)===b.capture);if(!r){this.pendingWrites.clear();return}const[i,n]=r,s=((m=this.restoreRequests.get(i))==null?void 0:m.page)??n.page,a=e.identity(s,n.capture.samples);if(s.ready===!1||!a||Ge(a)!==n.key){this.pendingWrites.delete(i),this.persistenceAttempted.add(n.capture),this.schedulePersistence();return}const{capture:o}=n,c=o.width*o.height*16;if(c>uo||this.memoryBytes+c*2>Wn){this.pendingWrites.delete(i),this.persistenceAttempted.add(o),this.schedulePersistence();return}const l=this.persistenceGeneration,u={target:null,pixels:null,reading:null},d=()=>{const y=this.renderer,b=y.getRenderTarget(),R=y.getActiveCubeFace(),M=y.getActiveMipmapLevel(),C=y.getViewport(new re),E=y.getScissor(new re),A=y.getScissorTest(),F=y.autoClear,U=this.copyQuad.material;try{u.target=new je(o.width,o.height,{format:Fr,type:xt,depthBuffer:!1,minFilter:Ee,magFilter:Ee}),y.initRenderTarget(u.target),u.pixels=new Float32Array(o.width*o.height*4),this.packMaterial.uniforms.visibility.value=o.visibility,this.packMaterial.uniforms.depth.value=o.depth,this.copyQuad.material=this.packMaterial,y.autoClear=!1,y.setRenderTarget(u.target),y.setViewport(new re(0,0,o.width,o.height)),y.setScissorTest(!1),y.render(this.copyScene,this.copyCamera),u.reading=y.readRenderTargetPixelsAsync(u.target,0,0,o.width,o.height,u.pixels)}finally{this.copyQuad.material=U,y.setRenderTarget(b,R,M),y.setViewport(C),y.setScissor(E),y.setScissorTest(A),y.autoClear=F}};try{if(e.runIdleRender){if(!e.runIdleRender(d)&&!u.target)return}else d()}catch{(v=u.target)==null||v.dispose(),this.pendingWrites.delete(i),this.persistenceAttempted.add(o),this.schedulePersistence();return}if(!u.reading||!u.target||!u.pixels){(p=u.target)==null||p.dispose();return}const g=u.target,h=u.pixels;this.pendingWrites.delete(i),this.persistenceAttempted.add(o),this.readbackBusy=!0,this.readbackBytes=c*2,u.reading.then(async()=>{var R;const y=((R=this.restoreRequests.get(i))==null?void 0:R.page)??n.page,b=e.identity(y,o.samples);this.disposed||l!==this.persistenceGeneration||this.persistence!==e||y.ready===!1||!b||Ge(b)!==n.key||await e.cache.writePacked(n.identity,{width:o.width,height:o.height,rgba:h,captureMatrix:[...o.matrix.elements],crop:o.crop.toArray(),worldBasis:n.worldBasis})}).catch(()=>{}).finally(()=>{var y;g.dispose(),this.readbackBusy=!1,this.readbackBytes=0,this.disposed||((y=e.requestRepaint)==null||y.call(e),this.schedulePersistence())})}canReplay(e){var i;const r=this.captures.get(e.id);if(!r||r.presentationKey!==(e.presentationKey??e.contentKey??e.revision))return!1;if(r.restored){const n=(i=this.persistence)==null?void 0:i.identity(e,r.samples),s=r.persistentIdentity;if(e.captureSize&&s)return!!(n&&n.source===s.source&&n.dateTime===s.dateTime&&n.corridor===s.corridor&&n.geometryFingerprint===s.geometryFingerprint&&n.samples===s.samples);if(!n||Ge(n)!==r.persistentKey)return!1}return!0}activate(e){const r=this.captures.get(e.id);this.captures.delete(e.id),this.captures.set(e.id,r),this.uniforms.carmaRetainedMatrix.value.copy(r.matrix),this.uniforms.carmaRetainedCrop.value.copy(r.crop),this.uniforms.carmaRetainedColor.value=r.visibility,this.uniforms.carmaRetainedDepth.value=r.depth,this.matchingPages+=1,this.replayCount+=1,this.uniforms.carmaRetainedCount.value=1;const i=e.receiverBounds;this.uniforms.carmaRetainedBounds.value[0].set(i.min.x,i.min.z,i.max.x,i.max.z),this.uniforms.carmaRetainedEnabled.value=!0}renderNative(e,r,i){if(r.length===0)return i(),new Set;this.configureScene(e);const n=new Map(r.filter(u=>u.receiverObjectId!==void 0&&this.canPresent(u)).map(u=>[u.receiverObjectId,u])),s=[],a=new Map;e.traverseVisible(u=>{const d=u;if(!d.isMesh)return;let g;for(let h=d;h&&(g=n.get(h.id),!g);h=h.parent);s.push({mesh:d,page:g});for(const h of Array.isArray(d.material)?d.material:[d.material]){let m=a.get(h);m||a.set(h,m=new Set),m.add(g==null?void 0:g.id)}});const o=new Set;for(const u of a.values())if(!(u.size<2))for(const d of u)d!==void 0&&o.add(d);const c=new Set,l=[];for(const{mesh:u,page:d}of s){const g=u.onBeforeRender,h=d!==void 0&&!o.has(d.id);u.onBeforeRender=(...m)=>{g.call(u,...m),this.uniforms.carmaRetainedEnabled.value=!1,h&&this.activate(d)},h&&c.add(d.id),l.push(()=>{u.onBeforeRender=g})}this.uniforms.carmaRetainedEnabled.value=!1;try{return i(),c}finally{this.uniforms.carmaRetainedEnabled.value=!1;for(const u of l)u()}}render(e,r,i,n){if(!this.canPresent(r))return n();this.configureScene(e),this.activate(r);try{return n()}finally{this.uniforms.carmaRetainedEnabled.value=!1}}capture(e,r){this.captureSupported=!0,this.configureScene(e),this.uniforms.carmaCaptureVisibility.value=!0;try{return r()}finally{this.uniforms.carmaCaptureVisibility.value=!1}}configureScene(e){e.traverseVisible(r=>{const i=r;if(!(!i.isMesh||!i.receiveShadow)){if(i.isInstancedMesh||i.isSkinnedMesh){this.captureSupported=!1;return}for(const n of Array.isArray(i.material)?i.material:[i.material]){if(this.unsupportedMaterials.has(n)&&(this.captureSupported=!1),!(n.isMeshStandardMaterial||n.isMeshLambertMaterial||n.isMeshPhongMaterial)||n.transparent){this.captureSupported=!1;continue}this.materials.has(n)||this.configure(n)}}})}configure(e){const r=e.onBeforeCompile,i=e.customProgramCacheKey,n=this.uniforms,s=(l,u)=>{r.call(e,l,u);const d=/getShadow\( directionalShadowMap\[ i \][^;]+?\)/;if(!l.vertexShader.includes("#include <common>")||!l.vertexShader.includes("#include <project_vertex>")||!l.fragmentShader.includes("#include <common>")||!l.fragmentShader.includes("#include <lights_fragment_begin>")||!l.fragmentShader.includes("#include <dithering_fragment>")||!d.test(Zn.lights_fragment_begin)){this.unsupportedMaterials.add(e),this.captureSupported=!1;return}this.unsupportedMaterials.delete(e),Object.assign(l.uniforms,n),l.vertexShader=l.vertexShader.replace("#include <common>",`#include <common>
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
uniform vec4 carmaRetainedBounds[${Tr}];
varying vec4 vCarmaRetainedClip;
varying vec2 vCarmaRetainedWorld;
float carmaRetainedCoverage(float fallbackCoverage) {
  vec3 ndc = vCarmaRetainedClip.xyz / vCarmaRetainedClip.w;
  vec2 uv = ndc.xy * 0.5 + 0.5;
  uv = (uv - carmaRetainedCrop.xy) / carmaRetainedCrop.zw;
  if (!carmaRetainedEnabled || carmaCaptureVisibility || vCarmaRetainedClip.w <= 0.0) return fallbackCoverage;
  bool owned = false;
  for (int i = 0; i < ${Tr}; i++) {
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
`);const g=Zn.lights_fragment_begin.replace(d,h=>`(carmaCapturedCoverage = ${h}, carmaRetainedCoverage(carmaCapturedCoverage))`);l.fragmentShader=l.fragmentShader.replace("#include <lights_fragment_begin>",`float carmaCapturedCoverage = 1.0;
${g}`).replace("#include <dithering_fragment>",`#include <dithering_fragment>
if (carmaCaptureVisibility) gl_FragColor.rgb = vec3(carmaCapturedCoverage);`)},a=()=>`${i.call(e)}|retained-corridor-visibility-v4`;e.onBeforeCompile=s,e.customProgramCacheKey=a,e.needsUpdate=!0;const o=()=>{e.onBeforeCompile===s&&(e.onBeforeCompile=r),e.customProgramCacheKey===a&&(e.customProgramCacheKey=i),e.removeEventListener("dispose",c),e.needsUpdate=!0},c=()=>{o(),this.materials.delete(e)};e.addEventListener("dispose",c),this.materials.set(e,o)}dispose(){this.disposed=!0,this.setPersistence(void 0);for(const e of this.captures.values())br(e);this.captures.clear(),this.uniforms.carmaRetainedEnabled.value=!1,this.uniforms.carmaRetainedColor.value=null,this.uniforms.carmaRetainedDepth.value=null,this.copyQuad.geometry.dispose(),this.copyMaterial.dispose(),this.downsampleMaterial.dispose(),this.packMaterial.dispose();for(const e of this.materials.values())e();this.materials.clear()}}const Ut=64,wi=512*1024**2,Ze={inactive:"inactive",dimensions:"dimensions",budget:"budget",msaa:"msaa",format:"format",receivers:"receivers",pages:"pages",renderer:"renderer",disposed:"disposed"},ho=`
  out vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`,Sp=`
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
`,wp=`
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
`;class _p{constructor(e,r){this.renderer=e,this.ownsPresentation=r===void 0,this.presentation=r??new Wc(e),this.quad.frustumCulled=!1,this.fullscreenScene.add(this.quad)}fullscreenScene=new Nr;fullscreenCamera=new vs(-1,1,1,-1,0,1);blendMaterial=new er({glslVersion:Lr,vertexShader:ho,fragmentShader:Sp,uniforms:{tPrevious:{value:null},tReference:{value:null},tReferenceDepth:{value:null},tSample:{value:null},tSampleDepth:{value:null},uInverseViewProjection:{value:new te},uBounds:{value:Array.from({length:Ut},()=>new re)},uBoundsCount:{value:0},uRefresh:{value:!1},uResetAll:{value:!1},uWeights:{value:new Float32Array(Ut).fill(1)}},depthTest:!1,depthWrite:!1,blending:yi});compositeMaterial=new er({glslVersion:Lr,vertexShader:ho,fragmentShader:wp,uniforms:{tColor:{value:null},tDepth:{value:null},uOutputDither:{value:!1}},dithering:!0,transparent:!0,blending:Eo,depthTest:!0,depthFunc:Fo,depthWrite:!0});quad=new kr(new fs(2,2),this.blendMaterial);referenceTarget=null;sampleTarget=null;readTarget=null;writeTarget=null;pages=new Map;stateKey="";targetKey="";cursor=0;totalSamples=1;broken=!1;disposed=!1;allocatedBytes=0;lastFallbackReason=null;presentation;publishedStateKeys=new Map;publicationRetryMs=250;ownsPresentation;get pageProgress(){return[...this.pages].map(([e,r])=>({id:e,samples:r.samples,totalSamples:this.totalSamples,ready:r.page.ready!==!1,published:this.publishedStateKeys.get(e)===JSON.stringify([this.stateKey,r.page.revision])}))}get memoryBytes(){return this.allocatedBytes+this.presentation.memoryBytes}get fallbackReason(){return this.lastFallbackReason}render(e,r,i){var F,U;if(this.disposed)return this.fallback(Ze.disposed);if(this.broken)return this.fallback(Ze.renderer);if(!i.active)return this.stateKey="",this.lastFallbackReason=Ze.inactive,null;const{width:n,height:s,samples:a}=i,o=Bo((F=i.options)==null?void 0:F.format),c=((U=i.options)==null?void 0:U.msaaSamples)??Cl.msaaSamples,l=n*s,u=i.visibilityOnly?Zt:Fr,d=i.visibilityOnly?1:4,g=l*(2*(o.bytesPerPixel*d/4+4)+2*o.accumulationBytesPerPixel*d/4);if(!Number.isInteger(n)||n<1||!Number.isInteger(s)||s<1||!Number.isInteger(a)||a<1||n>this.renderer.capabilities.maxTextureSize||s>this.renderer.capabilities.maxTextureSize)return this.fallback(Ze.dimensions);if(i.maxRenderTargetPixels!==void 0&&(!(i.maxRenderTargetPixels>0)||l>i.maxRenderTargetPixels)||g+this.presentation.memoryBytes>wi)return this.fallback(Ze.budget);if(o.format!==Fr)return this.fallback(Ze.format);if(c!==0)return this.fallback(Ze.msaa);if(!r.supportsOpaqueAccumulation)return this.fallback(Ze.receivers);const h=r.accumulationPages.map(N=>{var z;return{...N,ready:N.ready!==!1&&(((z=i.isPageReady)==null?void 0:z.call(i,N.id))??!0)}});if(h.length===0||h.length>Ut)return this.fallback(Ze.pages);this.lastFallbackReason=null;const m=this.renderer,v=m.getRenderTarget(),p=m.getActiveCubeFace(),y=m.getActiveMipmapLevel(),b=m.getClearColor(new ze),R=m.getClearAlpha(),M=m.autoClear,C=m.getViewport(new re),E=m.getScissor(new re),A=m.getScissorTest();try{m.autoClear=!1;const N=JSON.stringify([n,s,o.type,o.accumulationType,u]);if(this.targetKey!==N){this.releaseTargets();const O={type:o.type,format:u,minFilter:Ee,magFilter:Ee,depthBuffer:!0,samples:0};this.referenceTarget=new je(n,s,{...O,depthTexture:new rr(n,s,Ht)}),this.sampleTarget=new je(n,s,{...O,depthTexture:new rr(n,s,Ht)});const V={type:o.accumulationType,format:u,minFilter:Ee,magFilter:Ee,depthBuffer:!1};this.readTarget=new je(n,s,V),this.writeTarget=new je(n,s,V),this.targetKey=N,this.allocatedBytes=g}const z=JSON.stringify([i.viewKey,i.visibilityOnly?0:i.styleEpoch,a,N]),Z=this.stateKey!==z,B=new Set(h.map(({id:O})=>O)),D=[...this.pages.values()].filter(({page:O})=>!B.has(O.id)).map(({page:O})=>O),W=[...Z?h:h.filter(O=>{var ye;const V=(ye=this.pages.get(O.id))==null?void 0:ye.page;return(V==null?void 0:V.revision)!==O.revision||(V==null?void 0:V.ready)===!1&&O.ready}),...D].flatMap(O=>[O.screenBounds,...this.pages.has(O.id)?[this.pages.get(O.id).page.screenBounds]:[]]),ce=Z?h:h.filter(O=>W.some(V=>this.overlaps(O.screenBounds,V)));this.blendMaterial.uniforms.uInverseViewProjection.value.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse).invert(),Z&&(this.pages.clear(),this.cursor=0);for(const O of D)this.pages.delete(O.id);for(const O of ce)this.publishedStateKeys.delete(O.id);ce.length>0&&(this.publicationRetryMs=250),this.cursor%=Math.max(1,h.length);for(const O of h){const V=this.pages.get(O.id);V?V.page=O:this.pages.set(O.id,{page:O,samples:0})}if(this.totalSamples=a,ce.length>0||D.length>0){this.clearTarget(this.referenceTarget),r.renderSample(e,0,a),this.blend(ce,!0,Z,ce.map(()=>1));for(const O of ce)this.pages.get(O.id).samples=1}else{const O=[...this.pages.values()],V=performance.now(),ye=i.maxPagesPerFrame??4,Se=Number.isFinite(ye)?Math.min(Ut,Math.max(1,Math.floor(ye))):4,Pe=i.maxFrameCpuMilliseconds??4,Rt=Number.isFinite(Pe)?Math.max(0,Pe):4;let ut=0;do{const Te=[],Oe=this.cursor;for(let Ve=0;Ve<O.length;Ve+=1){const Wt=(Oe+Ve)%O.length,Y=O[Wt];if(!(Y.samples>=a||Y.page.ready===!1)){if(Te.length===0&&this.clearTarget(this.sampleTarget),!r.renderPageSample(e,Y.page.id,Y.samples,a))return this.fallback(Ze.pages);if(Te.push(Y),ut+=1,this.cursor=(Wt+1)%O.length,ut>=Se||performance.now()-V>=Rt)break}}if(Te.length===0)break;this.blend(Te.map(({page:Ve})=>Ve),!1,!1,Te.map(Ve=>1/(Ve.samples+1)));for(const Ve of Te)Ve.samples+=1}while(ut<Se&&performance.now()-V<Rt)}this.stateKey=z,m.setRenderTarget(v,p,y),m.setViewport(C),m.setScissor(E),m.setScissorTest(A),this.quad.material=this.compositeMaterial;const q=[...this.pages.values()].every(O=>O.samples>=a);this.compositeMaterial.uniforms.tColor.value=q?this.readTarget.texture:this.referenceTarget.texture,this.compositeMaterial.uniforms.tDepth.value=this.referenceTarget.depthTexture,this.compositeMaterial.uniforms.uOutputDither.value=v===null,i.visibilityOnly||m.render(this.fullscreenScene,this.fullscreenCamera);let de=!1;for(const{page:O,samples:V}of this.pages.values()){if(O.ready===!1||V<a)continue;const ye=JSON.stringify([z,O.revision]);if(this.publishedStateKeys.get(O.id)!==ye)try{this.presentation.publish(this.readTarget,this.referenceTarget,e,O,a)?this.publishedStateKeys.set(O.id,ye):de=!0}catch(Se){de=!0,console.error("[shadow-simulation] retaining previous corridor capture after copy failure",Se)}}for(const O of this.publishedStateKeys.keys())B.has(O)||this.publishedStateKeys.delete(O);const Re=[...this.pages.values()].reduce((O,{page:V,samples:ye})=>{const Se=V.ready!==!1&&this.publishedStateKeys.get(V.id)===JSON.stringify([z,V.revision]);return O+(Se?a:Math.min(ye,a-1))},0),Ke=de?this.publicationRetryMs:void 0;return this.publicationRetryMs=de?Math.min(4e3,this.publicationRetryMs*2):250,{progress:Re/(this.pages.size*a),settled:Re===this.pages.size*a,...Ke===void 0?{}:{retryAfterMs:Ke},needsRepaint:[...this.pages.values()].some(O=>O.samples<a&&O.page.ready!==!1)}}catch(N){return this.broken=!0,console.error("[shadow-simulation] corridor accumulation failed; using direct rendering",N),this.fallback(Ze.renderer)}finally{m.autoClear=M,m.setClearColor(b,R),m.setRenderTarget(v,p,y),m.setViewport(C),m.setScissor(E),m.setScissorTest(A)}}overlaps(e,r){return e.x<=r.x+r.z&&e.x+e.z>=r.x&&e.y<=r.y+r.w&&e.y+e.w>=r.y}clearTarget(e){this.renderer.setRenderTarget(e),this.renderer.setClearColor(0,0),this.renderer.clear(!0,!0,!1)}blend(e,r,i,n){const s=this.blendMaterial.uniforms;s.tPrevious.value=this.readTarget.texture,s.tReference.value=this.referenceTarget.texture,s.tReferenceDepth.value=this.referenceTarget.depthTexture,s.tSample.value=this.sampleTarget.texture,s.tSampleDepth.value=this.sampleTarget.depthTexture,s.uBoundsCount.value=e.length,e.forEach(({receiverBounds:o},c)=>s.uBounds.value[c].set(o.min.x,o.min.z,o.max.x,o.max.z)),s.uRefresh.value=r,s.uResetAll.value=i,s.uWeights.value.set(n),this.quad.material=this.blendMaterial,this.renderer.setRenderTarget(this.writeTarget),this.renderer.render(this.fullscreenScene,this.fullscreenCamera);const a=this.readTarget;this.readTarget=this.writeTarget,this.writeTarget=a}releaseTargets(){var e;for(const r of[this.referenceTarget,this.sampleTarget,this.readTarget,this.writeTarget])(e=r==null?void 0:r.depthTexture)==null||e.dispose(),r==null||r.dispose();this.referenceTarget=null,this.sampleTarget=null,this.readTarget=null,this.writeTarget=null,this.stateKey="",this.targetKey="",this.allocatedBytes=0,this.pages.clear()}releaseScratch(e=!1){e?(this.stateKey="",this.pages.clear()):this.releaseTargets(),this.publishedStateKeys.clear(),this.cursor=0}fallback(e){return this.lastFallbackReason=e,this.releaseTargets(),null}dispose(){this.disposed||(this.disposed=!0,this.releaseTargets(),this.ownsPresentation&&this.presentation.dispose(),this.quad.geometry.dispose(),this.blendMaterial.dispose(),this.compositeMaterial.dispose())}}const mo=2e4;let xp=0;var Mo;class Tp{enabled=Il((Mo=globalThis.location)==null?void 0:Mo.hostname);reportId=++xp;nextCorridorId=0;labels=new Map;pending=new Map;timer;context;observe(e,r){var s;if(!this.enabled)return;const i=performance.now();for(const{id:a}of e)this.labels.has(a)||this.labels.set(a,`C${this.reportId}.${++this.nextCorridorId}`);this.context={total:e.length,ready:e.filter(a=>a.ready).length,completed:e.filter(a=>a.published).length,samples:e.reduce((a,o)=>a+o.samples,0),activeId:r.activeId?this.labels.get(r.activeId):null,memoryBytes:r.memoryBytes,fallbackReason:r.fallbackReason,publicationRetries:(s=r.publicationRetries)==null?void 0:s.map(([a,o])=>({id:this.labels.get(a),attempts:o.attempts,retryInMs:Math.max(0,Math.round(o.retryAt-i))}))};const n=new Set(e.map(({id:a})=>a));for(const a of this.pending.keys())n.has(a)||this.pending.delete(a);for(const a of this.labels.keys())n.has(a)||this.labels.delete(a);for(const a of e){if(a.published){this.pending.delete(a.id);continue}const o=this.pending.get(a.id),c=!o||a.samples>o.progress.samples;this.pending.set(a.id,{progress:a,advancedAt:c?i:o.advancedAt,reported:c?!1:o.reported})}this.schedule()}pause(){clearTimeout(this.timer),this.timer=void 0,this.pending.clear()}schedule(){if(this.timer!==void 0)return;let e=1/0;for(const r of this.pending.values())r.reported||(e=Math.min(e,r.advancedAt+mo));Number.isFinite(e)&&(this.timer=setTimeout(()=>{var n;this.timer=void 0;const r=performance.now(),i=[];for(const s of this.pending.values())s.reported||r-s.advancedAt<mo||(s.reported=!0,i.push({...s.progress,id:this.labels.get(s.progress.id),file:(n=s.progress.id.match(/\/([^/"\\]+\.b3dm)/))==null?void 0:n[1],stalledMilliseconds:Math.round(r-s.advancedAt),waitingForReadiness:!s.progress.ready}));i.length>0&&console.warn("[shadow-simulation] corridors without progress for 20 seconds",JSON.stringify({corridors:i,scheduler:this.context})),this.schedule()},Math.max(0,e-performance.now())))}}class bp{constructor(e){this.renderer=e,this.presentation=new Wc(e),this.scratch=new _p(e,this.presentation)}presentation;scratch;captures=[];activeId=null;activeCapture=null;cursor=0;samples=1;disposed=!1;watchdog=new Tp;publicationRetries=new Map;restoreOpportunities=new Map;allocationKey="";allocations=new Map;plans=new Map;get memoryBytes(){return this.scratch.memoryBytes}get fallbackReason(){return this.presentation.supportsCapture?this.scratch.fallbackReason:"receivers"}get capturePages(){return this.captures.map(({page:e})=>e)}get pageProgress(){const e=this.scratch.pageProgress;return this.captures.map(({page:r,plan:i,ready:n})=>{const s=n&&this.presentation.has(r,this.samples),a=e.find(({id:o})=>o===r.id);return{id:r.id,samples:s?this.samples:(a==null?void 0:a.samples)??0,totalSamples:this.samples,ready:n,published:s,limited:i.limited,width:i.width,height:i.height}})}updateCaptures(e,r,i,n=!0){var m;const s=fp(e),a=Bo((m=i.options)==null?void 0:m.format),o=2*(a.bytesPerPixel/4+4)+2*a.accumulationBytesPerPixel/4+8,c=Math.max(1,Math.floor(Math.min(i.maxRenderTargetPixels??i.width*i.height,wi/2/o))),l=r.accumulationPages.map(v=>{const p=this.plans.get(v.id),y=(p==null?void 0:p.orientation)??s,b={groundTexelTargetMeters:v.groundTexelTargetMeters??1,maximumDimension:this.renderer.capabilities.maxTextureSize,maximumPixels:c},R=JSON.stringify([v.receiverBounds.min,v.receiverBounds.max,y.toArray(),b]),M=(p==null?void 0:p.inputs)===R?p.plan:mp(v.receiverBounds,y,b);return this.plans.set(v.id,{inputs:R,plan:M,orientation:y}),M.camera.layers.mask=e.layers.mask,{page:v,plan:M}}),u=l.find(({page:v})=>{var p;return this.activeId===v.id&&((p=this.activeCapture)==null?void 0:p.page.id)===v.id&&this.activeCapture.page.contentKey===JSON.stringify([v.contentKey??v.revision,this.activeCapture.plan.key])}),d=u?this.activeCapture.plan:null,g=JSON.stringify(l.map(({page:v,plan:p})=>[v.id,p.key,v.screenBounds.z*v.screenBounds.w]));if(g!==this.allocationKey){const v=new Map(hp(l.filter(({page:p})=>p.id!==(u==null?void 0:u.page.id)).map(({page:p,plan:y})=>({id:p.id,plan:y,screenArea:p.screenBounds.z*p.screenBounds.w})),ms-(d?d.width*d.height*8:0)));u&&d&&v.set(u.page.id,d),this.allocationKey=g,this.allocations=v}this.captures=l.map(({page:v,plan:p})=>{var M;const y=this.allocations.get(v.id)??p,b=JSON.stringify([v.contentKey??v.revision,y.key]),R=(!n||v.ready!==!1)&&(((M=i.isPageReady)==null?void 0:M.call(i,v.id))??!0);return{page:{...v,ready:R,captureKey:JSON.stringify([y.camera.quaternion.toArray(),y.width,y.height]),captureSize:{width:y.width,height:y.height},contentKey:b,revision:b,screenBounds:new re(0,0,1,1)},plan:y,ready:R}});const h=new Set(this.captures.map(({page:v})=>v.id));for(const v of this.plans.keys())h.has(v)||this.plans.delete(v);for(const[v,p]of this.publicationRetries){const y=this.captures.find(({page:b})=>b.id===v);(!y||y.page.contentKey!==p.contentKey)&&this.publicationRetries.delete(v)}this.presentation.beginFrame(this.capturePages);for(const{page:v,plan:p}of this.captures)this.presentation.prepareRestore(v,i.samples,new te().multiplyMatrices(p.camera.projectionMatrix,p.camera.matrixWorldInverse));i.active&&this.reportProgress()}reportProgress(){this.watchdog.enabled&&this.watchdog.observe(this.pageProgress,{activeId:this.activeId,memoryBytes:this.memoryBytes,fallbackReason:this.fallbackReason,publicationRetries:[...this.publicationRetries.entries()]})}yieldForRestore(e,r){if(!this.presentation.isRestorePending(e,r))return!1;const i=JSON.stringify([e.id,r]),n=e.contentKey??e.revision;if(this.restoreOpportunities.get(i)===n)return!1;if(this.restoreOpportunities.set(i,n),this.restoreOpportunities.size>1024){const s=this.restoreOpportunities.keys().next().value;s!==void 0&&this.restoreOpportunities.delete(s)}return!0}render(e,r,i){var g;if(this.disposed)return null;if(!i.active)return this.watchdog.pause(),null;if(this.samples=i.samples,this.updateCaptures(e,r,i),!this.presentation.supportsCapture)return this.scratch.releaseScratch(),this.activeId=null,null;const n=performance.now();let s,a=this.captures.find(({page:h})=>h.id===this.activeId);const o=a&&!a.ready&&this.captures.some(({page:h,ready:m})=>m&&h.id!==(a==null?void 0:a.page.id)&&!this.presentation.has(h,i.samples));if((!a||o||this.presentation.has(a.page,i.samples))&&(this.scratch.releaseScratch(!0),this.activeId=null,a=void 0),a){const h=this.publicationRetries.get(a.page.id);h&&h.retryAt>n&&(s=Math.ceil(h.retryAt-n))}if(!a&&this.captures.length>0)for(let h=0;h<this.captures.length;h+=1){const m=(this.cursor+h)%this.captures.length,v=this.captures[m];if(!v.ready||this.presentation.has(v.page,i.samples)||this.yieldForRestore(v.page,i.samples))continue;const p=this.publicationRetries.get(v.page.id);if(p&&p.retryAt>n){s=Math.min(s??1/0,Math.ceil(p.retryAt-n));continue}a=v,s=void 0,this.activeId=v.page.id,this.activeCapture=v,this.cursor=(m+1)%this.captures.length;break}let c=null;if(a!=null&&a.ready&&s===void 0){this.activeCapture=a;const{page:h,plan:m}=a,v=(p,y,b)=>r.renderPageSample(p,h.id,y,b,h.screenBounds);if(c=this.scratch.render(m.camera,{accumulationPages:[h],supportsOpaqueAccumulation:r.supportsOpaqueAccumulation,renderSample:v,renderPageSample:(p,y,b,R)=>v(p,b,R)},{...i,width:m.width,height:m.height,viewKey:m.key,visibilityOnly:!0,isPageReady:void 0,maxPagesPerFrame:i.maxPagesPerFrame??4}),c!=null&&c.settled)this.publicationRetries.delete(h.id),this.scratch.releaseScratch(!0),this.activeId=null;else if((c==null?void 0:c.retryAfterMs)!==void 0){const p=(((g=this.publicationRetries.get(h.id))==null?void 0:g.attempts)??0)+1;s=Math.max(250,c.retryAfterMs);const y=p>=3;y&&(s=Math.max(1e3,s)),this.publicationRetries.set(h.id,{contentKey:h.contentKey,attempts:y?0:p,retryAt:n+s}),y&&(this.scratch.releaseScratch(),this.activeId=null,this.captures.some(({page:b,ready:R})=>{var M;return R&&b.id!==h.id&&!this.presentation.has(b,i.samples)&&(((M=this.publicationRetries.get(b.id))==null?void 0:M.retryAt)??0)<=n})&&(s=void 0))}if(!c)return null}!this.activeId&&!this.captures.some(({page:h,ready:m})=>m&&!this.presentation.has(h,i.samples))&&this.scratch.releaseScratch();const l=this.pageProgress;this.reportProgress();const u=l.reduce((h,m)=>h+(m.published?i.samples:Math.min(m.samples,i.samples-1)),0),d=l.length*i.samples;return{progress:d>0?u/d:1,settled:d===u,needsRepaint:l.some(h=>h.ready&&!h.published)&&s===void 0,...s===void 0?{}:{retryAfterMs:s}}}renderHard(e,r,i){var E;if(this.disposed||!i.active)return{published:0,needsRepaint:!1};if(this.updateCaptures(e,r,{...i,samples:1},i.isPageReady===void 0),!r.supportsOpaqueAccumulation||!this.presentation.supportsCapture||!this.renderer.extensions.has("EXT_color_buffer_float"))return{published:0,needsRepaint:!1};const n=new Map(this.captures.map(({page:A})=>[A.id,this.presentation.getCapturedSize(A.id)])),s=this.captures.reduce((A,{page:F,plan:U})=>{const N=n.get(F.id);return A+Math.max(U.width*U.height,N?N.width*N.height:0)*8},0)>ms,a=({page:A,plan:F})=>{const U=n.get(A.id);return U?(U.width*U.height-F.width*F.height)*8:0},o=this.captures.filter(({page:A,plan:F,ready:U})=>{if(!U)return!1;const N=n.get(A.id);return this.presentation.hasAtLeast(A,1)&&(!s||!N||N.width*N.height<=F.width*F.height)?!1:!(N&&N.samples>1&&!s&&(N.width!==F.width||N.height!==F.height)&&this.presentation.canReplay(A))});s&&o.sort((A,F)=>a(F)-a(A));const c=o.find(({page:A})=>!this.yieldForRestore(A,1));if(!c)return{published:0,needsRepaint:o.length>0};const{page:l,plan:u}=c;if(s&&this.presentation.hasAtLeast(l,1)&&a(c)>0){const A=n.get(l.id),F=Math.max(u.width,Math.ceil(A.width/2))*Math.max(u.height,Math.ceil(A.height/2))*8;if(this.memoryBytes+F>wi)return{published:0,needsRepaint:!1,retryAfterMs:1e3};try{const U=this.presentation.downsample(l,u.width,u.height);return{published:U?1:0,needsRepaint:U,...U?{}:{retryAfterMs:1e3}}}catch{return{published:0,needsRepaint:!1,retryAfterMs:1e3}}}if(this.memoryBytes+u.width*u.height*16>wi)return{published:0,needsRepaint:!1,retryAfterMs:1e3};const d=this.renderer,g=d.getRenderTarget(),h=d.getActiveCubeFace(),m=d.getActiveMipmapLevel(),v=d.getViewport(new re),p=d.getScissor(new re),y=d.getScissorTest(),b=d.autoClear,R=d.getClearColor(new ze),M=d.getClearAlpha(),C=new je(u.width,u.height,{type:xt,format:Zt,minFilter:Ee,magFilter:Ee,samples:0,depthTexture:new rr(u.width,u.height,Ht)});try{d.initRenderTarget(C),d.autoClear=!1,d.setRenderTarget(C),d.setViewport(new re(0,0,u.width,u.height)),d.setScissorTest(!1),d.setClearColor(0,0),d.clear(!0,!0,!1);const F=r.renderPageSample(u.camera,l.id,0,1,l.screenBounds)&&this.presentation.publish(C,C,u.camera,l,1);return{published:F?1:0,needsRepaint:F&&o.length>1,...F?{}:{retryAfterMs:1e3}}}catch(A){return console.warn("[shadow-simulation] retaining completed corridor after hard-stage capture failure",A),{published:0,needsRepaint:!1,retryAfterMs:1e3}}finally{d.setRenderTarget(g,h,m),d.setViewport(v),d.setScissor(p),d.setScissorTest(y),d.setClearColor(R,M),d.autoClear=b,(E=C.depthTexture)==null||E.dispose(),C.dispose()}}pausePending(){this.watchdog.pause()}cancelPending(){this.watchdog.pause(),this.activeId!==null&&this.scratch.releaseScratch(),this.activeId=null,this.publicationRetries.clear(),this.restoreOpportunities.clear()}dispose(){this.disposed||(this.disposed=!0,this.watchdog.pause(),this.scratch.dispose(),this.presentation.dispose(),this.captures=[],this.plans.clear(),this.allocations=new Map,this.publicationRetries.clear(),this.restoreOpportunities.clear())}}const Mp=750,Ep=5e3,fo=new Set,Rp=t=>{const e=Dl({assetUrl:t,production:!0});let r=null,i=!1,n=!1,s=0,a=null;const o=()=>{if(r&&(r.onmessage=null,r.onerror=null,r.onmessageerror=null,r.terminate(),r=null),a){const d=a;a=null,clearTimeout(d.timer),d.finish(null)}},c=()=>{n=!0,o()},l=(d,g=[])=>{if(!e||i||n||a||typeof Worker>"u")return Promise.resolve(null);try{return r||(r=new Worker(new URL("https://cismet.github.io/carma-pr-deployments/812/geoportal/assets/shadow-corridor-cache.worker-VQZLpq-f.js",import.meta.url),{type:"module"}),r.onerror=c,r.onmessageerror=c,r.onmessage=h=>{var v;if(!a||((v=h.data)==null?void 0:v.id)!==a.id)return;const m=a;a=null,clearTimeout(m.timer),m.finish(h.data)}),new Promise(h=>{const m=setTimeout(c,d.operation===pi.read?Mp:Ep);a={id:d.id,timer:m,finish:h};try{r.postMessage(d,g)}catch{c()}})}catch{return c(),Promise.resolve(null)}},u={cancelPending:o,get enabled(){return!!(e&&!i&&!n&&typeof Worker<"u")},get busy(){return a!==null},async read(d){const g=Ge(d);if(!g)return null;const h=await l({id:++s,producerAssetUrl:e??"",identity:d,operation:pi.read}),m=h==null?void 0:h.record;return!i&&(m==null?void 0:m.schema)===Pi.schema&&Ge(m.identity)===g&&co(m)?m:null},async write(d,g,h){if(!Ge(d)||!co(g))return!1;const m=[g.visibility,g.depth];if(m.some(p=>!(p.buffer instanceof ArrayBuffer)||p.byteOffset!==0||p.byteLength!==p.buffer.byteLength))return!1;const v=await l({id:++s,producerAssetUrl:e??"",identity:d,operation:pi.write,capture:g,costs:h},[...new Set(m.map(p=>p.buffer))]);return!i&&(v==null?void 0:v.written)===!0},async writePacked(d,g,h){if(!Ge(d)||!pp(g)||!(g.rgba.buffer instanceof ArrayBuffer)||g.rgba.byteOffset!==0||g.rgba.byteLength!==g.rgba.buffer.byteLength)return!1;const m=await l({id:++s,producerAssetUrl:e??"",identity:d,operation:pi.writePacked,capture:g,costs:h},[g.rgba.buffer]);return!i&&(m==null?void 0:m.written)===!0},dispose(){i=!0,o(),fo.delete(u)}};return fo.add(u),u};class Ap{constructor(e,r,i){this.scene=e,this.renderer=r,this.host=i,this.frameCache=new ou(r),this.pages=new cp(e,r,i.maximumMapSize**2*8*2,i.maximumMapSize,i.frame),this.accumulation=new bp(r),i.worldBasis&&i.corridorRevision&&i.dateTimeKey&&this.accumulation.presentation.setPersistence({cache:this.persistentCache,identity:(n,s)=>{var u,d,g;const a=this.pages.getPageGeometry(n.id),o=(u=i.dateTimeKey)==null?void 0:u.call(i);if(!a||!o||!n.captureKey)return null;const c=s===1?(d=i.receiverStageError)==null?void 0:d.call(i,n.receiverBounds):void 0,l=(g=i.corridorRevision)==null?void 0:g.call(i,a.casterBounds,c,n.receiverBounds);return l?{source:"shared-scene-corridor-v2",dateTime:o,corridor:n.id,resolution:JSON.stringify([a.width,a.height,n.captureKey]),geometryFingerprint:l,samples:s}:null},worldBasis:i.worldBasis,runIdleRender:i.runIdleRender,requestRepaint:i.requestRepaint})}pages;viewKey="";idleStats=null;accumulation;persistentCache=Rp(import.meta.url);accumulationSettled=!1;viewport=new Nt(1,1);lastFrame=null;frameCache;presentedPageIds=new Set;casterRevisionsDirty=!0;casterRevisionCursor=0;hardRetryTimer=null;update(e,r,i,n,s=r.renderCamera){this.viewport.copy(r.viewport);const a=JSON.stringify([e.map(({id:o,bounds:c,receiverObjectId:l})=>[o,c.min,c.max,l]),s.projectionMatrix.elements,s.matrixWorldInverse.elements,r.viewport,i,n]);a!==this.viewKey&&(this.pages.setView(e,s,r.viewport,n,i,this.host.receiverBiasLimit),this.viewKey=a,this.casterRevisionsDirty=!0,this.casterRevisionCursor=0)}updatePresentation(e,r=e.renderCamera){this.viewport.copy(e.viewport),this.pages.updatePresentation(r)}invalidateContent(e){(e==null?void 0:e.length)!==0&&(this.casterRevisionsDirty=!0,this.casterRevisionCursor=0,this.frameCache.invalidate(),e?e.length>0&&this.pages.invalidateCasters(e):this.pages.clearCache())}async prewarm({cells:e,frame:r,lighting:i,targetPixels:n,samples:s,prepare:a,signal:o,yieldToInput:c=up,planningCamera:l}){if(o.aborted)return null;this.idleStats=null,this.pages.setPrewarmView(e,l??r.renderCamera,r.viewport,n,i,s);try{return this.idleStats=await lp({pages:this.pages.prewarmPages,signal:o,prepare:a,yieldToInput:c,render:(u,d,g)=>{if(d!=null&&d.parent)throw new Error("Idle caster lease must own an unmounted group");const h=this.host.light.visible;this.host.light.visible=!1,d&&this.scene.add(d);try{let m=null;const v=()=>{m=this.pages.prewarmNext(r.renderCamera,u,{signal:g})};return this.host.runIdleRender?this.host.runIdleRender(v):v(),m??{pageId:u,rendered:0,cachedSamples:0,totalSamples:s,complete:!1,budgetLimited:!1,aborted:!0}}finally{d&&this.scene.remove(d),this.host.light.visible=h}}}),this.idleStats}finally{this.pages.clearPrewarmView()}}renderProgressive(e,r){if(this.lastFrame=r,!r.active)return this.pausePending(),null;if(this.pages.accumulationPages.length===0)return this.accumulationSettled=!1,null;const i=this.renderWithHost(e,()=>{const a=this.captureHard(e);if(this.casterRevisionsDirty&&this.host.corridorRevision)return null;const o=this.accumulation.presentation.capture(this.scene,()=>this.accumulation.render(e,this.pages,{...r,visibilityOnly:!0,maxPagesPerFrame:Math.min(r.samples,64),maxFrameCpuMilliseconds:r.maxFrameCpuMilliseconds??2,isPageReady:c=>this.isPageReady(c,!1)}));return o&&this.renderContent(e,null,r.samples),o&&{...o,settled:o.settled&&!a.needsRepaint,needsRepaint:o.needsRepaint||a.needsRepaint}});if(!i)return this.accumulationSettled=!1,null;const n="retryAfterMs"in i?i.retryAfterMs:void 0;n!==void 0&&this.hardRetryTimer===null&&(this.hardRetryTimer=globalThis.setTimeout(()=>{var a,o;this.hardRetryTimer=null,(o=(a=this.host).requestRepaint)==null||o.call(a)},Math.max(1,n)));const s=i.settled&&!this.accumulationSettled;return this.accumulationSettled=i.settled,{...i,settled:s}}render(e,r,i,n=!0){return this.pages.accumulationPages.length===0?!1:(this.renderWithHost(e,()=>{n&&this.captureHard(e),this.renderContent(e,r,i,!n)}),!0)}cancelPending(e=!1){this.accumulation.cancelPending(),e&&this.accumulation.presentation.beginSolarTransition(),this.pausePending()}pausePending(){this.accumulation.pausePending(),this.hardRetryTimer!==null&&(globalThis.clearTimeout(this.hardRetryTimer),this.hardRetryTimer=null),this.accumulationSettled=!1}isPageReady(e,r){var n,s;const i=this.pages.getPageGeometry(e);return i?!this.host.isCorridorReady||this.host.isCorridorReady(i.casterBounds,r?(s=(n=this.host).receiverStageError)==null?void 0:s.call(n,i.receiverBounds):void 0,i.receiverBounds):!1}captureHard(e){var i,n,s,a,o,c;if(this.casterRevisionsDirty&&this.host.corridorRevision){const l=this.pages.accumulationPages,u=performance.now();let d=0;for(;this.casterRevisionCursor<l.length;){if(d>=4||d>0&&performance.now()-u>=4)return(n=(i=this.host).requestRepaint)==null||n.call(i),{published:0,needsRepaint:!0};const g=l[this.casterRevisionCursor++];d+=1;const h=this.pages.getPageGeometry(g.id);if(!h)continue;const m=this.host.corridorRevision(h.casterBounds,(a=(s=this.host).receiverStageError)==null?void 0:a.call(s,h.receiverBounds),h.receiverBounds);this.pages.setCasterRevision(g.id,m)&&this.frameCache.invalidate()}this.casterRevisionsDirty=!1,this.casterRevisionCursor=0}const r=this.accumulation.presentation.capture(this.scene,()=>{var l;return this.accumulation.renderHard(e,this.pages,{...this.lastFrame,width:this.viewport.x,height:this.viewport.y,viewKey:this.viewKey,styleEpoch:((l=this.lastFrame)==null?void 0:l.styleEpoch)??0,samples:1,active:!0,isPageReady:u=>this.isPageReady(u,!0)})});return r.needsRepaint&&((c=(o=this.host).requestRepaint)==null||c.call(o)),r.retryAfterMs!==void 0&&this.hardRetryTimer===null&&(this.hardRetryTimer=globalThis.setTimeout(()=>{var l,u;this.hardRetryTimer=null,(u=(l=this.host).requestRepaint)==null||u.call(l)},r.retryAfterMs)),r}renderContent(e,r,i,n=!1){var u,d,g,h,m;const s=this.accumulation.capturePages;this.accumulation.presentation.beginFrame(s);const a=s.map(v=>{const p=this.accumulation.presentation.canPresent(v);return{page:v,replay:p,ready:p||(!this.host.corridorRevision||!this.casterRevisionsDirty)&&this.isPageReady(v.id,!0)}});let o=!1;const c=()=>{this.presentedPageIds.clear();const v=this.host.light.visible,p=r===null&&a.some(({replay:y})=>y);this.host.light.visible=!0;try{let y=new Set;r===null?y=this.accumulation.presentation.renderNative(this.scene,a.filter(b=>b.replay).map(b=>b.page),()=>this.renderer.render(this.scene,e)):this.renderer.render(this.scene,e);for(const{page:b,replay:R,ready:M}of a){if(!M)continue;if(y.has(b.id)){this.presentedPageIds.add(b.id);continue}if(r===null&&!R){this.presentedPageIds.add(b.id);continue}if(n&&!R){this.presentedPageIds.add(b.id);continue}const C=n||p&&R;this.host.light.visible=C,this.accumulation.presentation.render(this.scene,b,i,()=>C?this.pages.renderPageColor(e,b.id):this.pages.renderPageSample(e,b.id,r??0,r===null?1:i))?this.presentedPageIds.add(b.id):o=!0}}finally{this.host.light.visible=v}};if((u=this.lastFrame)!=null&&u.active&&r===null&&this.accumulation.presentation.supportsCapture){const v=JSON.stringify([this.viewKey,e.projectionMatrix.elements,e.matrixWorldInverse.elements,e.layers.mask,this.lastFrame.styleEpoch,((g=(d=this.host).visualEpoch)==null?void 0:g.call(d))??0,this.accumulation.presentation.revision,a.map(({page:p,replay:y,ready:b})=>[p.id,p.contentKey??p.revision,y,b])]);this.frameCache.render(v,this.lastFrame.width,this.lastFrame.height,c),o&&this.frameCache.invalidate()}else this.frameCache.invalidate(),c();const l=a.filter(({page:v,replay:p})=>this.presentedPageIds.has(v.id)&&(this.accumulation.presentation.hasAtLeast(v,1)||!p&&(r===null||i===1))).map(({page:v})=>v);l.length>0&&((m=(h=this.host).onPresentedPages)==null||m.call(h,l,s))}renderWithHost(e,r){const{renderer:i,host:n}=this,s=n.light.visible,a=n.sky.visible,o=n.overlay.visible,c=i.autoClear;n.light.visible=!1,i.autoClear=!1;try{a&&this.renderHostObject(n.sky,e),n.sky.visible=!1,n.overlay.visible=!1;const l=r();return l!==null&&o&&(n.overlay.visible=!0,this.renderHostObject(n.overlay,e)),l}finally{i.autoClear=c,n.light.visible=s,n.sky.visible=a,n.overlay.visible=o}}renderHostObject(e,r){const i=this.scene.children.filter(n=>n!==e&&n.visible);for(const n of i)n.visible=!1;try{this.renderer.render(this.scene,r)}finally{for(const n of i)n.visible=!0}}get pageLevels(){return this.pages.pageLevels}get stats(){return{...this.pages.stats,framePresentation:this.frameCache.stats,corridorAccumulation:{retained:this.accumulation.presentation.stats,pageSamples:this.accumulation.pageProgress,memoryBytes:this.accumulation.memoryBytes,fallbackReason:this.accumulation.fallbackReason},...this.idleStats?{idlePrewarm:this.idleStats}:{},...this.host.auditCorridors?{corridorAudit:this.host.auditCorridors(this.pages.accumulationPages.flatMap(e=>{const r=this.pages.getPageGeometry(e.id);return r?[{id:e.id,casterBounds:r.casterBounds,receiverBounds:r.receiverBounds}]:[]}))}:{}}}dispose(){this.hardRetryTimer!==null&&globalThis.clearTimeout(this.hardRetryTimer),this.hardRetryTimer=null,this.accumulation.dispose(),this.frameCache.dispose(),this.persistentCache.dispose(),this.pages.dispose()}}function Cp(){const t=new WeakSet;return e=>{let r=!1;for(const i of e)if(!(!i.providesTerrain||!i.hasRenderableContent)&&(r=!0,t.has(i)||i.hasRenderableContent()))return t.add(i),!1;return r}}const Gn=(t,e,r)=>JSON.stringify([t.min.toArray(),t.max.toArray(),e,r==null?void 0:r.min.toArray(),r==null?void 0:r.max.toArray()]),Ip=(t,e)=>{const r=new Map(t.map(s=>[s.id,s])),i=[],n=s=>i.push(new Ie(new T(...s.minimum),new T(...s.maximum)));for(const s of e){const a=r.get(s.id);a&&s.minimum.every((c,l)=>c===a.minimum[l])&&s.maximum.every((c,l)=>c===a.maximum[l])||(a&&n(a),n(s)),r.delete(s.id)}for(const s of r.values())n(s);return i},Dp=(t,e,r)=>{const i=new Set(r.map(({id:n})=>n));return t.filter(n=>{if(n.loadReason==="shadow")return!1;const s=e.filter(({bounds:a})=>n.minimum[0]<a.max.x&&n.maximum[0]>a.min.x&&n.minimum[2]<a.max.z&&n.maximum[2]>a.min.z);return s.length>0&&s.every(({id:a})=>i.has(a))}).map(({id:n})=>n)},Pp=(t,e,r)=>{if(![t,e,r].every(Number.isFinite)||r<=0)throw new RangeError("Invalid shared-scene Mercator basis");return new te().set(r,0,0,t,0,0,r,e,0,r,0,0,0,0,0,1)},po=(t,e,r)=>Pl(e.reduce((i,n)=>{if(n.loadReason==="shadow")return i;const[s,,a]=n.minimum,[o,,c]=n.maximum;return s<t.max.x&&o>t.min.x&&a<t.max.z&&c>t.min.z&&Number.isFinite(n.errorPixels)?Math.max(i,n.errorPixels):i},r),r),Op=({stageErrorPixels:t,targetErrorPixels:e,groundTexelTargetMeters:r,finalBiasMeters:i,maximumCoarseBiasMeters:n})=>{const s=Math.max(1,Math.min(n/i,t/Math.max(e,.25)));return Math.min(n,i*s,Math.max(i,r*2))},Np=({id:t,casterBounds:e,sunElevationDegrees:r,regions:i,volumes:n})=>{const s=new Set(i.flatMap(u=>u.selectedTileIds)),a=new Map(n.map(u=>[u.id,u])),o=[],c=[];let l=0;for(const u of s){const d=a.get(u);if(!d){o.push(u);continue}d.loadReason==="shadow"&&(l+=1),e.intersectsBox(new Ie(new T(...d.minimum),new T(...d.maximum)))||c.push(u)}return{id:t,ready:i.length>0&&i.every(u=>u.ready),selectedTiles:s.size,offscreenTiles:l,reviewCount:r>=10&&s.size>10,nearHorizon:r<10,exactPrismTested:i.length>0&&i.every(u=>u.receiverPrismTested),visitedNodes:i.reduce((u,d)=>u+d.visitedNodes,0),broadPhaseNodes:i.reduce((u,d)=>u+d.broadPhaseNodes,0),rejectedPrismNodes:i.reduce((u,d)=>u+d.rejectedPrismNodes,0),missingPublishedVolumes:o,outsideEnvelope:c,selectedTileIds:[...s].sort()}},Lp={[Le.STANDARD]:0,[Le.HIGH]:1,[Le.MAX]:1,[Le.ULTRA]:1,[Le.EXTREME]:1},Fp=128,Bp={[Le.STANDARD]:0,[Le.HIGH]:0,[Le.MAX]:1,[Le.ULTRA]:2,[Le.EXTREME]:3},Up=(t,e,r,i)=>{var u,d;const n=t==null?void 0:t.tileManager;if(!t||!n||!Number.isFinite(n.deltaZoom)||!Number.isFinite(n.tileSize)||!n.tileManager)return()=>{};const s={deltaZoom:n.deltaZoom,terrainTileSize:n.tileSize,sourceTileSize:n.tileManager.tileSize,meshSize:t.meshSize,calculateTileZoom:(u=n.tileManager._source)==null?void 0:u.calculateTileZoom},o=1-Lp[r],c=e*2**o;n.deltaZoom=o,n.tileSize=c,n.tileManager.tileSize=c,t.meshSize=Fp;const l=Bp[r];if(l>0&&n.tileManager._source){s.calculateTileZoom||i==null||i();const g=n.tileManager._source.calculateTileZoom;g&&(n.tileManager._source.calculateTileZoom=(...h)=>g(...h)+l)}return t._meshCache={},(d=n.freeRtt)==null||d.call(n),()=>{var g;n.deltaZoom=s.deltaZoom,n.tileSize=s.terrainTileSize,n.tileManager.tileSize=s.sourceTileSize,t.meshSize=s.meshSize,n.tileManager._source&&(n.tileManager._source.calculateTileZoom=s.calculateTileZoom),t._meshCache={},(g=n.freeRtt)==null||g.call(n)}},kp=2048,Hp=4096,zp=4096,Vp=1e6,Wp=2e6,Gp=()=>typeof navigator>"u"?{userAgent:"",platform:"",maxTouchPoints:0}:{userAgent:navigator.userAgent,platform:navigator.platform,maxTouchPoints:navigator.maxTouchPoints},go=(t,e=Gp())=>{const r=Math.max(256,Math.floor(t)),i=/iPhone|iPod|Android.+Mobile/i.test(e.userAgent),n=/iPad|Android(?!.*Mobile)/i.test(e.userAgent)||e.platform==="MacIntel"&&e.maxTouchPoints>1;return i?{maxShadowMapSize:Math.min(r,kp),maxAccumulationPixels:Vp}:n?{maxShadowMapSize:Math.min(r,Hp),maxAccumulationPixels:Wp}:{maxShadowMapSize:Math.min(r,zp),maxAccumulationPixels:Number.POSITIVE_INFINITY}},jp=(t,e=or,r=2560*1440,i=1)=>Math.floor(Math.max(256**2,Math.min(t**2,ot[e].depthSize**2*(Number.isFinite(r)&&r>0?r/(2560*1440):1)*i**2))),vo=new WeakMap,Yp=t=>{const e=vo.get(t);if(e)return e;const r=t.getContext(),i=r.getInternalformatParameter(r.RENDERBUFFER,r.DEPTH_COMPONENT24,r.SAMPLES),n=a=>[0,...Array.from(r.getInternalformatParameter(r.RENDERBUFFER,a,r.SAMPLES)).filter(o=>i.includes(o))],s={maxTextureSize:t.capabilities.maxTextureSize,maxRenderbufferSize:r.getParameter(r.MAX_RENDERBUFFER_SIZE),hdrSamples:n(r.RGBA16F),sdrSamples:n(r.RGBA8)};return vo.set(t,s),s},$p=(t,e)=>{if(t.shadowBufferFormat===Mt.HDR_32)return 0;const r=t.shadowMsaaSamples===_s?1/0:t.shadowMsaaSamples;return Math.max(0,...e.filter(i=>Number.isFinite(i)&&i<=r))},Et=new WeakMap,Gc=t=>{let e=Et.get(t);return e||(e={snapshot:null,listeners:new Set,demandListeners:new Set},Et.set(t,e)),e},Kg=t=>{var e;return((e=Et.get(t))==null?void 0:e.snapshot)??null},qg=(t,e)=>{const r=Gc(t),i=r.listeners.size===0;if(r.listeners.add(e),i)for(const n of r.demandListeners)n(!0);return()=>{if(!(!r.listeners.delete(e)||r.listeners.size>0)){r.snapshot=null;for(const n of r.demandListeners)n(!1);r.demandListeners.size===0&&Et.delete(t)}}},Kp=(t,e)=>{const r=Gc(t);return r.demandListeners.add(e),r.listeners.size>0&&e(!0),()=>{r.demandListeners.delete(e),r.listeners.size===0&&r.demandListeners.size===0&&Et.delete(t)}},yo=t=>{var e;return(((e=Et.get(t))==null?void 0:e.listeners.size)??0)>0},qp=(t,e)=>{const r=Et.get(t);if(r!=null&&r.listeners.size){r.snapshot=e;for(const i of r.listeners)i()}},jn=t=>{const e=Et.get(t);if(e){e.snapshot=null;for(const r of e.listeners)r();e.listeners.size===0&&e.demandListeners.size===0&&Et.delete(t)}},So=.01,Xp=500,Yn=1500,$n=(t=or)=>({lastFrameMs:null,sampleDurationMs:0,sampleCount:0,recoveryDurationMs:0,updateIntervalMs:ot[t].targetFps?1e3/ot[t].targetFps:0,targetFrameMs:ot[t].targetFps?1e3/ot[t].targetFps:0,depthScale:1,trial:null,adaptationBlocked:!1}),Kn=(t,e,r,{enabled:i=!0,allowCadenceReduction:n=!0}={})=>{var v,p;if(t.targetFrameMs===0)return t;if(!i)return t.lastFrameMs===null&&t.updateIntervalMs===t.targetFrameMs&&t.depthScale===1&&!t.adaptationBlocked?t:{...t,lastFrameMs:null,sampleDurationMs:0,sampleCount:0,recoveryDurationMs:0,updateIntervalMs:t.targetFrameMs,depthScale:1,trial:null,adaptationBlocked:!1};if(!r||!Number.isFinite(e))return t.lastFrameMs===null?t:{...t,lastFrameMs:null,sampleDurationMs:0,sampleCount:0,recoveryDurationMs:0,depthScale:1,trial:null,adaptationBlocked:!1};const s=t.lastFrameMs===null?0:e-t.lastFrameMs;if(s<=0)return{...t,lastFrameMs:e};const a=t.sampleDurationMs+s,o=t.sampleCount+1;if(a<Xp)return{...t,lastFrameMs:e,sampleDurationMs:a,sampleCount:o};const c=a/o,l=t.targetFrameMs;if(t.trial&&c>=t.trial.baselineFrameMs*.95||t.adaptationBlocked)return{...t,lastFrameMs:e,sampleDurationMs:0,sampleCount:0,trial:null,adaptationBlocked:!0,updateIntervalMs:((v=t.trial)==null?void 0:v.updateIntervalMs)??t.updateIntervalMs,depthScale:((p=t.trial)==null?void 0:p.depthScale)??t.depthScale};const g=c<l/1.2?t.recoveryDurationMs+a:0,h=n?c>l+So?Math.min(l*4,t.updateIntervalMs+l):g>=Yn?Math.max(l,t.updateIntervalMs-l):t.updateIntervalMs:l,m=c>l+So&&(!n||t.updateIntervalMs>=l*4)?Math.max(.5,t.depthScale-.25):g>=Yn?Math.min(1,t.depthScale+.25):t.depthScale;return{...t,lastFrameMs:e,sampleDurationMs:0,sampleCount:0,recoveryDurationMs:g>=Yn?0:g,updateIntervalMs:h,depthScale:m,trial:h>t.updateIntervalMs||m<t.depthScale?{baselineFrameMs:c,updateIntervalMs:t.updateIntervalMs,depthScale:t.depthScale}:null,adaptationBlocked:!1}},Qp=900,gi=.01,Zp=.25,Jp=1e3,wo=4e3,eg=10,jc=2500,tg="shadow-simulation-raster-dem",rg=200,Yc=.5,ig="shadow-simulation-sky-light",vi=100,_o=1e3,ng=1e3,xo=100,Mr="carma-shadow-map-style-base",sg=(t,e=ko,r=()=>!0,i=()=>"opaque",n=Le.MAX)=>{const s=e.id,a=t;if(typeof a.getTerrain!="function"||typeof a.getSource!="function"||typeof a.setTerrain!="function")return Object.assign(()=>{},{refresh:()=>{}});const o=a.getTerrain(),c=new Map,l=new Map;let u=!1,d=!1,g=!1,h=null,m=!1,v,p=null,y=()=>{},b=null;const R=()=>{h&&(m?delete h.getMeshFrameDelta:h.getMeshFrameDelta=v,h=null,v=void 0,m=!1)},M=()=>{const B=a.terrain;!B||B===h||(R(),typeof B.getMeshFrameDelta=="function"&&(m=!Object.prototype.hasOwnProperty.call(B,"getMeshFrameDelta"),v=B.getMeshFrameDelta,B.getMeshFrameDelta=()=>0,h=B))},C=()=>{var D;const B=a.terrain;!B||B===p||(y(),p=B,y=Up(B,e.tileSize,n,()=>{var k;(k=t.setSourceTileLodParams)==null||k.call(t,9.314,3,e.id)}),(D=t.triggerRepaint)==null||D.call(t))},E=B=>`${B.type}:${String(B.source)}:${String(B["source-layer"])}`,A=()=>{var k;const D=t.getStyle().layers??[];for(const W of D){if(!kl(W))continue;const ce=E(W);let q=l.get(W.id);const de=t.getLayoutProperty(W.id,"visibility");!q||q.signature!==ce?(q={signature:ce,value:de},l.set(W.id,q)):de!=="none"&&(q.value=de),de!=="none"&&t.setLayoutProperty(W.id,"visibility","none")}if(r()){t.getLayer(Mr)||(t.addLayer({id:Mr,type:"background",paint:{"background-color":Tn.baseColor,"background-opacity":Tn.opacity}},(k=D[0])==null?void 0:k.id),g=!0);for(const W of D){if(W.id===Mr||W.type==="custom")continue;const ce=Tn.opaqueDrapeProperties.get(W.type);if(!ce)continue;const q=E(W);let de=c.get(W.id);const Re=t.getPaintProperty(W.id,ce);!de||de.signature!==q?(de={signature:q,property:ce,value:Re},c.set(W.id,de)):Re!==1&&(de.value=Re),Re!==1&&t.setPaintProperty(W.id,ce,1)}}},F=B=>{var D;for(const[k,W]of B)try{const ce=(D=t.getStyle().layers)==null?void 0:D.find(({id:q})=>q===k);ce&&E(ce)===W.signature&&t.getLayoutProperty(k,"visibility")==="none"&&t.setLayoutProperty(k,"visibility",W.value===void 0?null:W.value)}catch{}B.clear()},U=()=>{var B;for(const[D,k]of c)try{const W=(B=t.getStyle().layers)==null?void 0:B.find(({id:ce})=>ce===D);W&&E(W)===k.signature&&t.getPaintProperty(D,k.property)===1&&t.setPaintProperty(D,k.property,k.value===void 0?null:k.value)}catch{}if(c.clear(),g){g=!1;try{t.getLayer(Mr)&&t.removeLayer(Mr)}catch{}}},N=()=>{if(!(u||d)){d=!0;try{if(!a.getSource(s)&&t.isStyleLoaded()&&t.addSource(s,{type:"raster-dem",tiles:[e.url],tileSize:e.tileSize,minzoom:e.minzoom,maxzoom:e.maxzoom,encoding:e.encoding,bounds:[...e.bounds]}),i()==="labels"?(U(),F(l)):A(),a.getSource(s)){const B=a.getTerrain();((B==null?void 0:B.source)!==s||(B.exaggeration??1)!==1)&&a.setTerrain({source:s,exaggeration:1}),C(),M()}b=null}catch(B){const D=B instanceof Error?B.message:String(B);D!==b&&(b=D,console.error("[shadow-simulation] MapLibre terrain setup failed",B))}finally{d=!1}}},z=()=>{d||N()};return t.on(ve.STYLE_DATA,N),t.on(ve.TERRAIN,z),N(),Object.assign(()=>{if(!u){u=!0,t.off(ve.STYLE_DATA,N),t.off(ve.TERRAIN,z),R(),y(),p=null,U(),F(l);try{o&&a.getSource(o.source)!==void 0?a.setTerrain(o):a.setTerrain(null)}catch{}}},{refresh:()=>{!u&&!d&&N()}})},$c=(t,e=!1)=>{if(t.userData[xi.OVERLAY])return;t.castShadow=t.userData.disableShadowCasting!==!0;const r=Array.isArray(t.material)?t.material:[t.material];if(t.receiveShadow=r.some(i=>i.visible&&i.colorWrite),!t.userData.isShadowTerrainSurface)for(const i of r)i.shadowSide??(i.shadowSide=Lo),sp(i,e)},Cr=(t,e=!1)=>{t.traverseVisible(r=>{const i=r;!i.isMesh&&!i.isInstancedMesh||$c(i,e)})},ag=t=>t.visible&&t.opacity>0,og=(t,e)=>{let r=t;for(;r&&r!==e;){if(!r.visible)return!1;r=r.parent}return(Array.isArray(t.material)?t.material:[t.material]).some(ag)},To=t=>{t.traverse(e=>{const r=e;if(!r.isMesh&&!r.isInstancedMesh)return;const i=Array.isArray(r.material)?r.material:[r.material];for(const n of i)n.dispose()})},Kc=(t,e,r)=>{t.updateMatrixWorld(!0),r==null||r.updateMatrixWorld(!0);const i=r?new Hr().setFromProjectionMatrix(new te().multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),r.coordinateSystem,r.reversedDepth):null;let n=e,s=e;const a=new Ie;return t.traverseVisible(o=>{var l,u;const c=o;c.userData[xi.OVERLAY]||!c.isMesh&&!c.isInstancedMesh||!((u=(l=c.geometry)==null?void 0:l.getAttribute("position"))!=null&&u.count)||(c.geometry.boundingBox||c.geometry.computeBoundingBox(),c.geometry.boundingBox&&(a.copy(c.geometry.boundingBox).applyMatrix4(c.matrixWorld),!(i&&!i.intersectsBox(a))&&(n=Math.min(n,a.min.y),s=Math.max(s,a.max.y))))}),[n,s]},cg=(t,e,r,i)=>{var o;const n=e.filter(c=>c.providesTerrain).flatMap(c=>{var u;const l=(u=c.getViewElevationRange)==null?void 0:u.call(c,r);return l?[l]:[]});if(n.length>0)return[Math.min(...n.map(c=>c[0])),Math.max(...n.map(c=>c[1]))];let[s,a]=Kc(t,i,r);for(const c of e){const l=(o=c.getViewElevationRange)==null?void 0:o.call(c,r);l&&(s=Math.min(s,l[0]),a=Math.max(a,l[1]))}return[s,a]},lg=[[-1,-1],[-1,1],[1,-1],[1,1]],ug=[[0,1],[1,3],[3,2],[2,0],[4,5],[5,7],[7,6],[6,4],[0,4],[1,5],[2,6],[3,7]],dg=(t,e,r,i)=>{t.updateMatrixWorld(!0);const n=Math.min(e,r),s=Math.max(e,r),a=[-1,1].flatMap(c=>lg.map(([l,u])=>new T(l,u,c).unproject(t))),o=a.filter(c=>c.y>=n&&c.y<=s).map(c=>c.clone());for(const[c,l]of ug){const u=a[c],d=a[l],g=d.y-u.y;if(!(Math.abs(g)<=Number.EPSILON))for(const h of[n,s]){const m=(h-u.y)/g;m<0||m>1||o.push(u.clone().lerp(d,m))}}for(const c of o){const l=c.clone().sub(i),u=Math.hypot(l.x,l.z);if(u<=wo)continue;const d=wo/u;l.x*=d,l.z*=d,c.copy(i).add(l)}return o},hg=(t,e)=>{const r=e.uniformColor!==null&&He(e.uniformColorMix??1,0,1)>=1;t.traverse(i=>{const n=i;if(!n.userData.isBuilding)return;const s=Array.isArray(n.material)?n.material:[n.material];for(const a of s){e.fullOpacity&&(a.opacity=1,a.transparent=!1,a.depthWrite=!0);const o=a;r&&e.uniformColor&&o.color&&(o.color.set(e.uniformColor),o.vertexColors=!1),a.needsUpdate=!0}})},mg=(t,e,r)=>{var d;const i=(d=e._originMerc)==null?void 0:d.toLngLat();if(!i)return null;const n=new ws;n.name=`shadow-simulation-copy-${e.id}`;const s=new Map;let a=r,o=!1;const c=()=>{for(const[g,h]of s)g.visible=h;s.clear()},l=()=>{if(o)return;c(),To(n),n.clear(),e.scene.updateMatrixWorld(!0);const g=[];e.scene.traverse(h=>{var v,p;const m=h;!m.isMesh&&!m.isInstancedMesh||(p=(v=m.geometry)==null?void 0:v.getAttribute("position"))!=null&&p.count&&og(m,e.scene)&&g.push(m)});for(const h of g){const m=h.clone(!1);m.name=`${h.name||"mesh"}-shadow-simulation-copy`,m.visible=!0,m.matrixAutoUpdate=!1,m.matrix.copy(h.matrixWorld),m.material=Array.isArray(h.material)?h.material.map(v=>v.clone()):h.material.clone(),$c(m),s.set(h,h.visible),h.visible=!1,n.add(m)}n.visible=n.children.length>0,hg(n,a)},u={id:`shadow-simulation-generic-${e.id}`,originLngLat:[i.lng,i.lat],root:n,update:()=>{},dispose:()=>{o||(o=!0,c(),To(n),n.clear())}};return l(),n.visible?(t.addRuntime(u),{runtime:u,sync:l,updateBuildingAppearance(g){a=g,l()}}):(u.dispose(),null)},fg=t=>{const e=new Ie().setFromObject(t.scene);e.isEmpty()?t.center.set(0,0,0):e.getCenter(t.center)},pg=(t,e,r,i)=>{const n=new Hc(e),a=n.lights[0].target,o=new ws;o.visible=!1,o.userData[xi.OVERLAY]=!0;const c=new No(void 0,0);c.name=ig;const l=kf(i);l.mesh.userData[xi.OVERLAY]=!0;const u=new Map;t.traverse(g=>{const h=g;h.isAmbientLight&&u.set(h,h.intensity)});const d={scene:t,frame:e,controller:n,skyLight:c,atmosphericSky:l,ambientLightIntensities:u,lightTarget:a,sunVector:null,sunVectorRoot:o,center:new T,shadowCameraOffsetMeters:Math.max(jc,r*1.5),shadowAreaMeters:r,sunVectorLengthMeters:r*Yc,sunVectorVisible:!1,shadowQuality:or,shadowIntensity:1,directionToSun:new T(0,1,0),sunColor:new ze(16773848),sunIntensity:Kr,receiverWorldPoints:[],minimumElevationMeters:0,maximumElevationMeters:0,dirty:!0};return Cr(t),fg(d),t.add(c),t.add(l.mesh),d},gg=(t,e)=>{t.scene.traverse(i=>{const n=i;n.isAmbientLight&&!t.ambientLightIntensities.has(n)&&t.ambientLightIntensities.set(n,n.intensity)});const r=e.skyIrradianceCoefficients;if((r==null?void 0:r.length)===t.skyLight.sh.coefficients.length){r.forEach((i,n)=>{t.skyLight.sh.coefficients[n].copy(i)}),t.skyLight.intensity=Kr;for(const i of t.ambientLightIntensities.keys())i.intensity=0;return}t.skyLight.sh.zero(),t.skyLight.intensity=0;for(const[i,n]of t.ambientLightIntensities)i.intensity=n},qn=new te,bo=(t,e,r=16773848,i,n=!0)=>{var a;const s=e.clone().normalize();t.directionToSun.copy(s),t.sunColor.set(r),t.lightTarget.position.copy(t.center);for(const o of t.controller.lights)o.target.position.copy(t.center),o.position.copy(s).multiplyScalar(t.shadowCameraOffsetMeters).add(t.center),o.color.copy(t.sunColor);(a=t.sunVector)==null||a.update(t.center,s,t.sunVectorLengthMeters),t.sunVectorRoot.visible=t.sunVectorVisible&&!!t.sunVector,t.sunIntensity=i??Kr;for(const o of t.controller.lights)o.intensity=t.sunIntensity;t.lightTarget.updateMatrixWorld(!0);for(const o of t.controller.lights)o.updateMatrixWorld(!0);n&&(t.controller.invalidate(),t.dirty=!0)},vg=t=>{var e;for(const[r,i]of t.ambientLightIntensities)r.intensity=i;t.scene.remove(t.skyLight),t.scene.remove(t.atmosphericSky.mesh),t.scene.remove(t.sunVectorRoot),(e=t.sunVector)==null||e.dispose(),t.atmosphericSky.dispose(),t.controller.dispose()},yg=(t,e={})=>{var ia,na,sa,aa,oa,ca,la;const{shadowAreaMeters:r,terrain:i,mapLibreTerrain:n,terrainQuality:s=Le.MAX}=e;let a=i;const o=r??Qp,c=t.getLight();let l=!0;const u=()=>{const f=Me(t).filter(S=>S.providesTerrain===!0);return f.length>0&&f.every(S=>S.mapStyleProjectionBlend==="overlay")?"labels":"opaque"},d=sg(t,n??ko,()=>l,u,s),g=()=>{D.setMeshLabelStyle(u()==="labels")};let h=null,m={fullOpacity:!0,uniformColor:null,uniformColorMix:0,textureSaturation:1,textureColorCorrection:!0},v=1,p=null;const y=()=>{var f,S;return p??((S=(f=Me(t).find(w=>w.providesTerrain===!0))==null?void 0:f.getErrorTarget)==null?void 0:S.call(f))??Hl};let b;const R=new WeakMap;let M=null,C={useTransmittanceLut:!0,useIrradianceLut:!0},E=!1,A=!1,F=Number.NEGATIVE_INFINITY,U=null,N=null,z=null,Z=new ze(((ia=a==null?void 0:a.material)==null?void 0:ia.color)??xs);const B=()=>{var f,S,w,x;if(l){z==null||z(),z=null,(S=(f=D.layer).setMapStyleProjectionVisible)==null||S.call(f,!0);return}(x=(w=D.layer).setMapStyleProjectionVisible)==null||x.call(w,!1),z??(z=Fl(t))},D=Ol(t),k=(f,S)=>{var w,x;return{observer:{longitude:f[0],latitude:f[1],altitudeMeters:0},scenePosition:((x=(w=D.layer).projectLngLatToScene)==null?void 0:x.call(w,[f[0],f[1]],vi))??new T(0,vi,0),sceneFromLocal:S}},W=((sa=(na=D.layer).getLocalFrame)==null?void 0:sa.call(na))??null;let ce=(W==null?void 0:W.revision)??0,q=W?k(W.lngLat,W.sceneFromLocalRotation):k([t.getCenter().lng,t.getCenter().lat]);const de=()=>{var f;return((f=we==null?void 0:we.localFrame)==null?void 0:f.currentToReference)??(W==null?void 0:W.currentToReference)??qn},Re=new fa,Ke=new Oi,O=f=>{const S=f.renderCamera,{localFrame:w}=f;if(!w||w.currentToReference.equals(qn))return S;const x=S instanceof fa?Re.copy(S,!1):Ke.copy(S,!1);return x.matrixAutoUpdate=!1,x.matrixWorldAutoUpdate=!1,x.matrixWorld.multiplyMatrices(w.currentToReference,S.matrixWorld),x.matrixWorld.decompose(x.position,x.quaternion,x.scale),x.matrix.copy(x.matrixWorld),x.matrixWorldInverse.multiplyMatrices(S.matrixWorldInverse,w.referenceToCurrent),x},V=(f,S)=>{if(f!=null&&f.mountsOnLocalFrame||S.length===0)return S;const w=de();if(w.equals(qn))return S;const x=new Ie;return S.map(G=>(x.min.set(...G.minimum),x.max.set(...G.maximum),x.applyMatrix4(w),{...G,minimum:[x.min.x,x.min.y,x.min.z],maximum:[x.max.x,x.max.y,x.max.z]}))},ye=new Nf;let Se=()=>{},Pe=f=>Se(f),Rt=null,ut=0;const Te=f=>{if(!a)return null;const S=t.getCenter(),{errorTargetPixels:w,motionErrorTargetPixels:x,shadowLevelOffset:G,minimumLevel:L,maximumLevel:H,maxSelectionTiles:K,requestConcurrency:ae,maxCacheBytes:le,maxCachedMeshes:fe,meshSegments:ee,noDataHeightMeters:pe,heightRangeMeters:$,material:Ct,...Lt}=a;return Bl(`${tg}-${++ut}`,Lt,f??[S.lng,S.lat],{errorTargetPixels:w??Ir,motionErrorTargetPixels:x,shadowLevelOffset:G,minimumLevel:L,maximumLevel:H,maxSelectionTiles:K,requestConcurrency:ae,maxCacheBytes:le,maxCachedMeshes:fe,meshSegments:ee??Lt.tileSize,noDataHeightMeters:pe,heightRangeMeters:$,material:Ct,receivesMapStyleTexture:!0,onContentChanged:yt=>Pe(yt),onError:yt=>{const St=yt instanceof Error?yt.message:String(yt);St!==Rt&&(Rt=St,console.error("[shadow-simulation] Raster DEM terrain runtime failed",yt))}})},Oe=()=>Me(t).some(f=>f.providesTerrain===!0),Ve=()=>Me(t).every(f=>{var S;return!f.providesTerrain||(((S=f.isMainViewReady)==null?void 0:S.call(f))??!0)});let Wt=Me(t).filter(f=>f.providesTerrain),Y=Oe()?null:Te(),Gt=Y===null;Y&&D.layer.addRuntime(Y);const qc=((oa=(aa=D.layer).getLocalFrameGroup)==null?void 0:oa.call(aa))??D.layer.getScene(),_=pg(D.layer.getScene(),qc,o,Z),Xc=new T;let qr=0,Xr=0;const Fe=dp({getRequest:()=>{var w;if(E||!a||!Y||!Gt||Sr(t)||be||A||Xe!==0||!tt||!qt||!we)return null;const f=(w=Y.getIdlePrefetchAvailability)==null?void 0:w.call(Y);if(!(f!=null&&f.ready))return null;const S=Y;return{key:JSON.stringify([ut,qr,Xr,we.renderCamera.projectionMatrix.elements,we.renderCamera.matrixWorldInverse.elements,we.viewport.x,we.viewport.y]),run:async x=>{var L;if(await S.prefetchIdleTerrain(x),x.aborted||!Ce()||!Q||!we||!D.layer.runIdleRender||ht.size>0||mt().some(H=>H!==S&&H!==Qt)||At.some(({id:H})=>!/^\d+:[-\d]+:[-\d]+$/.test(H)))return;const G=((L=S.getIdleShadowRegions)==null?void 0:L.call(S))??[];G.length===0||!S.prepareIdleShadowRegion||(await Q.prewarm({cells:Qu(At),frame:we,planningCamera:O(we),lighting:{directionToSun:_.directionToSun,color:_.sunColor,intensity:_.sunIntensity,shadowIntensity:_.shadowIntensity},targetPixels:ot[_.shadowQuality].shadowTexelErrorPixels,samples:yr(),signal:x,prepare:async(H,K)=>{const ae=Zu(H.receiverBounds,G);return ae===null?{covered:!1,group:null,isCurrent:()=>!1,dispose:()=>{}}:S.prepareIdleShadowRegion({receiverBounds:H.receiverBounds,casterBounds:H.casterBounds,terrainLevel:ae},K)}}),x.aborted||Xt())}}}});let dt=null,sn="";const Qr=(f,S,w)=>{const x=`${f}:${S}`;x!==sn&&(sn=x,console.error(`[SHADOW] Atmospheric update rejected; retaining last valid frame (${f}: ${S})`,{phase:f,reason:S,...w}))},Qc=()=>{sn=""},Be=()=>{Fe.cancel(),qr+=1,Xr+=1},Hs=f=>{U=null,F=performance.now();const S=`#${f.color.getHexString()}`;if(A||D.setLocationLabelColor(S),!t.isStyleLoaded())return;const w=[1.5,f.azimuthDegrees,90-f.elevationDegrees],x=He(f.relativeIntensity,0,1),G=t.getLight(),L=G.position;G.anchor==="map"&&Array.isArray(L)&&L.length===w.length&&L.every((H,K)=>H===w[K])&&G.color===S&&G.intensity===x||t.setLight({anchor:"map",position:w,color:S,intensity:x})},Zr=()=>{N!==null&&(globalThis.clearTimeout(N),N=null);const f=U;f&&Hs(f)},zs=f=>{if(U=f,!A&&!be){Zr();return}const S=performance.now()-F;if(S>=_o){Zr();return}N===null&&(N=globalThis.setTimeout(()=>{N=null;const w=U;w&&Hs(w)},_o-S))},jt=f=>{const S={longitude:q.observer.longitude,latitude:q.observer.latitude,altitudeMeters:vi},w=Af(f.instant,S,q);if(w)return Qr("sunlight input",w,{observer:S,skyReference:q}),M;ye.ensure(()=>{if(E||!h)return;Be();const L=jt(h);L&&zs(L),t.triggerRepaint()},C),ye.ensureSky(()=>{E||!h||(Be(),jt(h),t.triggerRepaint())});let x;try{x=ye.evaluate(f.instant,S,C,q)}catch(L){return Qr("sunlight generation","generator threw",{observer:S,error:L}),M}const G=Cf(x);return G?(Qr("sunlight output",G,{observer:S,sample:x}),M):(Qc(),M=x,_.atmosphericSky.update(x.skyFrame,ye.skyTextures),gg(_,x),bo(_,x.directionToSun.clone().transformDirection(de()),x.radiance,Kr),x)};Se=f=>{E||(Fe.cancel(),Q==null||Q.invalidateContent(f),_.controller.invalidate(),_.dirty=!0)};const ht=new Map,mt=()=>{const f=Me(t);return Y&&!f.includes(Y)?[Y,...f]:f};let Yt=null,ft=null,We=null,pt=null,Vs=[];const Ws=()=>mt().flatMap(f=>{var S;return V(f,((S=f.getActiveTileVolumes)==null?void 0:S.call(f))??[])}),ur=()=>Yt??Ws(),Gs=(f,S=gi*4)=>{if(!Oe())return;const w=ur(),x=y(),G=f?po(f,w,x):Math.max(x,...w.filter(({loadReason:L})=>L!=="shadow").map(({errorPixels:L})=>L).filter(L=>Number.isFinite(L)));return Op({stageErrorPixels:G,targetErrorPixels:x,groundTexelTargetMeters:S,finalBiasMeters:gi,maximumCoarseBiasMeters:Zp})},js=f=>{const S=Yt,w=ft,x=We,G=pt;if(Yt=S??Ws(),ft=w??new Map,We=x??new Map,pt=G??new Map,!S){const L=Ip(Vs,Yt);L.length>0&&(Q==null||Q.invalidateContent(L),mr.length=0),Vs=Yt}try{return f()}finally{Yt=S,ft=w,We=x,pt=G}};let be=!1,$t=null,Kt=null,an=Number.NEGATIVE_INFINITY,on=!1;const Ys=new WeakMap,Zc=f=>{var x,G,L;if(!f)return"none";const S=t.getCenter(),w=t.getCanvas();return[Math.round(S.lng*1e7),Math.round(S.lat*1e7),Math.round((((x=t.getZoom)==null?void 0:x.call(t))??0)*1e4),Math.round((((G=t.getBearing)==null?void 0:G.call(t))??0)*1e3),Math.round((((L=t.getPitch)==null?void 0:L.call(t))??0)*1e3),`${w.clientWidth||w.width}x${w.clientHeight||w.height}`,(h==null?void 0:h.azimuthDegrees)??"no-sun",(h==null?void 0:h.elevationDegrees)??"no-sun",_.shadowQuality].join(";")},dr=f=>{var K,ae,le,fe,ee,pe;if(Kt=f,A){const $=performance.now();if($-an<ng){on=!0;return}an=$}on=!1;const S=Zc(f),w=we==null?void 0:we.renderCamera,x=f&&w?new Hr().setFromProjectionMatrix(new te().multiplyMatrices(w.projectionMatrix,w.matrixWorldInverse),w.coordinateSystem,w.reversedDepth):null,G=new Ie,L=x?V(Y,((K=Y==null?void 0:Y.getActiveTileVolumes)==null?void 0:K.call(Y))??[]).filter($=>(G.min.fromArray($.minimum),G.max.fromArray($.maximum),x.intersectsBox(G))):void 0,H=[...Me(t),...Y?[Y]:[]];for(const $ of new Set(H)){if((ae=$.setShadowStagePresentationGate)==null||ae.call($,!1),!$.providesTerrain){$===Y?(le=$.setErrorTarget)==null||le.call($,(a==null?void 0:a.errorTargetPixels)??Ir):(fe=$.setErrorTargetOverride)==null||fe.call($,p),(ee=$.setShadowView)==null||ee.call($,f?{...f,terrainReceivers:L}:null);continue}Ys.get($)!==S&&(Ys.set($,S),(pe=$.setShadowView)==null||pe.call($,f))}},cn=f=>{$t=f,be||dr(f)};let ln=Number.NEGATIVE_INFINITY,qe=null,gt=null,un=null,dn="",tt=!0,hn={},Ae=bn(hn),rt=null;const Jr=()=>({format:Ae.shadowBufferFormat,msaaSamples:Ae.shadowBufferLayout===Ti.TILED?0:$p(Ae,(Ae.shadowBufferFormat===Mt.SDR_8?rt==null?void 0:rt.sdrSamples:rt==null?void 0:rt.hdrSamples)??[0,2,4])});let hr=Jr(),Xe=0,mn=!1,ei=!1;const mr=[];let Qe=!0,fn=[],$s="",vt=$n(),ti=Number.POSITIVE_INFINITY,qt=!0,fr=go(4096),we=null,Q=null,pn=null,At=[];const Ce=()=>Ae.shadowBufferLayout===Ti.TILED,pr=()=>{Q==null||Q.dispose(),Q=null,pn=null,At=[]},Xt=()=>{if(E||!gt||!yo(t))return;const f=performance.now()-ln;if(f<xo){qe??(qe=globalThis.setTimeout(()=>{qe=null,Xt()},xo-f));return}qe!==null&&(globalThis.clearTimeout(qe),qe=null);const S=Ae.shadowBufferLayout,w=Ae.shadowSunDiscSamples,x=Ce()?(Q==null?void 0:Q.stats)??null:null,G=JSON.stringify([S,w,x]);un===gt&&dn===G||(ln=performance.now(),un=gt,dn=G,qp(t,{...gt,bufferLayout:S,sunDiscSamples:w,tiledStats:x}))};_.controller.setSoftSun(tt);const gr=(f,S)=>Math.round(f/S)*S,Jc=f=>{var w,x,G;const S=t.getCenter();return[gr(S.lng,1e-7),gr(S.lat,1e-7),gr(((w=t.getZoom)==null?void 0:w.call(t))??0,1e-4),gr(((x=t.getBearing)==null?void 0:x.call(t))??0,.001),gr(((G=t.getPitch)==null?void 0:G.call(t))??0,.001),`${f.viewport.x}x${f.viewport.y}`].join(";")},vr=(f=!0,S=!0,w)=>{var ae,le,fe,ee;const x=t.getCenter(),G=(Y==null?void 0:Y.getElevation(x.lng,x.lat))??0,L=(le=(ae=D.layer).projectLngLatToScene)==null?void 0:le.call(ae,[x.lng,x.lat],G);if(!L){h&&jt(h),S&&t.triggerRepaint();return}_.center.copy(L).applyMatrix4(de()),dt??(dt=Kc(_.scene,L.y));const[H,K]=dt;if(w){const pe=dg(O(w),H,K,_.center);if(pe.length>0){const $=new Ie().setFromPoints(pe).getSize(new T),Ct=Math.max(...pe.map(Lt=>Lt.distanceTo(_.center)));_.sunVectorLengthMeters=Math.min($.x,$.z)*Yc,_.shadowAreaMeters=Math.max(r??0,eg,Ct*2),fn=pe}}else Qe=!0;if(_.shadowCameraOffsetMeters=Math.max(jc,_.shadowAreaMeters*1.5),_.receiverWorldPoints=fn,_.minimumElevationMeters=H,_.maximumElevationMeters=K,_.dirty=!0,h&&(f||!M))jt(h);else{_.lightTarget.position.copy(_.center);for(const pe of _.controller.lights)pe.target.position.copy(_.center),pe.target.updateMatrixWorld(!0);(fe=_.sunVector)==null||fe.root.position.copy(_.center),(ee=_.sunVector)==null||ee.root.updateMatrixWorld(!0)}S&&t.triggerRepaint()},Qt={id:"shadow-simulation-controller",originLngLat:[t.getCenter().lng,t.getCenter().lat],root:new ws,updatePriority:rg,update(f){var Lt,yt;we=f;const{localFrame:S}=f;S&&S.revision!==ce&&(ce=S.revision,q=k(S.lngLat,S.sceneFromLocalRotation),M&&(M=Pf(M,q),_.atmosphericSky.update(M.skyFrame,ye.skyTextures)));const w=(yt=(Lt=D.layer).getRenderer)==null?void 0:yt.call(Lt);w&&!rt&&(rt=Yp(w),hr=Jr(),fr=go(Math.min(rt.maxTextureSize,rt.maxRenderbufferSize)),_.controller.setMaxShadowMapSize(fr.maxShadowMapSize),ti=fr.maxAccumulationPixels),qt=f.viewport.x*f.viewport.y<=ti,vt=Kn(vt,performance.now(),be,{enabled:Ae.shadowAdaptiveQuality,allowCadenceReduction:!Ce()});const x=Math.max(0,f.lodCamera.position.y-f.lookTarget.y),G=vi+x,L=q.scenePosition.y+x;![...f.lodCamera.matrixWorld.elements,...f.lodCamera.projectionMatrix.elements].every(Number.isFinite)||!Number.isFinite(G)||!Number.isFinite(L)?Qr("render camera","local Three.js camera matrix or altitude is invalid",{altitudeMeters:G,cameraHeightAboveTargetMeters:x,matrixWorld:f.lodCamera.matrixWorld.elements,projectionMatrix:f.lodCamera.projectionMatrix.elements}):(_.atmosphericSky.updateViewCamera(f.lodCamera),_.atmosphericSky.updateObserverScenePosition(Xc.set(q.scenePosition.x,L,q.scenePosition.z)));const K=Jc(f);if(Qe||K!==$s){if(be)return;performance.now(),$s=K,dt=be?dt??[_.minimumElevationMeters,_.maximumElevationMeters]:cg(_.scene,Me(t),f.renderCamera,_.center.y),vr(!1,!1,f),Qe=!1}if(!_.dirty)return;_.sunVectorVisible&&_.sunVector&&_.sunVector.root.cone.position.y!==_.sunVectorLengthMeters&&bo(_,_.directionToSun,_.sunColor,_.sunIntensity),qr+=1;const ae=ur(),le=ae.flatMap(({minimum:St,maximum:wt})=>$o(O(f),new Ie(new T(...St),new T(...wt))));if(_.receiverWorldPoints=le.length>0?le:fn,_.receiverWorldPoints.length===0||!h){cn(null),gt=null,jn(t);return}if(Ce()){At=Xu(ae.filter(({loadReason:wt})=>wt!=="shadow").map(({id:wt,minimum:ni,maximum:Sn,receiverObjectId:wn})=>({id:wt,receiverObjectId:wn,bounds:new Ie(new T(...ni),new T(...Sn))})));const St=Yu(At,O(f));St.length>0&&(_.receiverWorldPoints=[...St])}const fe=_.controller.update({maxReceiverBiasMeters:Gs(),receiverWorldPoints:_.receiverWorldPoints,receiverAnchorWorldPosition:_.center,minimumElevationMeters:_.minimumElevationMeters,maximumElevationMeters:_.maximumElevationMeters,directionToSun:_.directionToSun,color:_.sunColor,intensity:_.sunIntensity,shadowIntensity:_.shadowIntensity,quality:_.shadowQuality,mapTexelBudget:jp(fr.maxShadowMapSize,_.shadowQuality,f.viewport.x*f.viewport.y,be?vt.depthScale:1),groundTexelFit:Ae.shadowGroundTexelFit,stabilizeMapSize:be});if(_.dirty=!1,!fe){cn(null),gt=null,jn(t);return}const ee=fe.camera,pe=_.controller.lights[0].shadow.camera,$=M==null?void 0:M.skyFrame.directionToSunECEF;cn({camera:pe,directionToSunECEF:$?[$.x,$.y,$.z]:void 0,casterAngularRadiusRadians:tt?Or:0,shadowMapSize:{width:ee.shadowMapWidth,height:ee.shadowMapHeight}});const Ct=yo(t);if(ee&&Ct){f.lodCamera.updateMatrixWorld(!0),f.lodCamera.updateProjectionMatrix();const St=mt().flatMap(wt=>{var ni;return(((ni=wt.getActiveTileVolumes)==null?void 0:ni.call(wt))??[]).map(({id:Sn,loadReason:wn,minimum:ol,maximum:cl})=>({id:Sn,loadReason:wn,minimum:ol,maximum:cl}))});gt={bufferLayout:Ae.shadowBufferLayout,sunDiscSamples:Ae.shadowSunDiscSamples,tiledStats:null,cameraRangeMeters:pe.position.distanceTo(_.controller.lights[0].target.position),leftMeters:ee.leftMeters,rightMeters:ee.rightMeters,bottomMeters:ee.bottomMeters,topMeters:ee.topMeters,nearMeters:ee.nearMeters,farMeters:ee.farMeters,projectionMatrixElements:ee.projectionMatrixElements,shadowMapWidth:ee.shadowMapWidth,shadowMapHeight:ee.shadowMapHeight,minimumElevationMeters:_.minimumElevationMeters,maximumElevationMeters:_.maximumElevationMeters,sceneAnchorPositionElements:_.center.toArray(),mainCamera:{viewMatrixElements:[...f.lodCamera.matrixWorldInverse.elements],projectionMatrixElements:[...f.lodCamera.projectionMatrix.elements],nearMeters:f.lodCamera.near,farMeters:f.lodCamera.far,viewportWidth:f.viewport.x,viewportHeight:f.viewport.y},tileVolumes:St,shadow:fe,atmosphericSunlight:M?{azimuthDegrees:M.azimuthDegrees,elevationDegrees:M.elevationDegrees,relativeIntensity:M.relativeIntensity,color:`#${M.color.getHexString()}`,transmittanceReady:M.atmosphericTransmittanceReady,irradianceReady:M.atmosphericIrradianceReady}:null},Xt()}},dispose:()=>{}};D.layer.addRuntime(Qt);const yr=()=>Ae.shadowSunDiscSamples,Ks=()=>{var w,x;if(!Ce()||!we||_.directionToSun.y<=0)return null;const f=(x=(w=D.layer).getRenderer)==null?void 0:x.call(w);if(!f)return null;let S=!1;if(!Q||pn!==f){const G=At;pr(),At=G,pn=f,Q=new Ap(_.scene,f,{light:_.controller.lights[0],sky:_.atmosphericSky.mesh,overlay:_.sunVectorRoot,frame:_.frame,maximumMapSize:fr.maxShadowMapSize,isCorridorReady:(L,H,K)=>{const ae=Gn(L,H,K),le=ft==null?void 0:ft.get(ae);if(le!==void 0)return le;const fe=mt().every(ee=>{var pe;return((pe=ee.isShadowRegionReady)==null?void 0:pe.call(ee,L,H,K))??(ee.getRequestDemand?ee.getRequestDemand()===0:!ee.providesTerrain||!Sr(t))});return ft==null||ft.set(ae,fe),fe},receiverStageError:L=>{const H=Gn(L),K=pt==null?void 0:pt.get(H);if(K!==void 0)return K;const ae=po(L,ur(),Oe()?y():(a==null?void 0:a.errorTargetPixels)??Ir);return pt==null||pt.set(H,ae),ae},receiverBiasLimit:(L,H)=>Gs(L,H)??gi,onPresentedPages:(L,H)=>{var ae;const K=Dp(ur(),H.map(({id:le,receiverBounds:fe})=>({id:le,bounds:fe})),L.map(({id:le,receiverBounds:fe})=>({id:le,bounds:fe})));if(K.length!==0)for(const le of mt())(ae=le.acknowledgeShadowStage)==null||ae.call(le,K)},corridorRevision:(L,H,K)=>{var pe;const ae=Gn(L,H,K),le=We==null?void 0:We.get(ae);if(le!==void 0)return le;const fe=[];for(const $ of mt()){if($===Qt)continue;const Ct=(pe=$.getShadowRegionRevision)==null?void 0:pe.call($,L,H,K);if(!Ct)return We==null||We.set(ae,null),null;fe.push(JSON.stringify([$.id,Ct]))}const ee=fe.length?JSON.stringify(fe.sort()):null;return We==null||We.set(ae,ee),ee},dateTimeKey:()=>(h==null?void 0:h.instant.toISOString())??null,worldBasis:()=>{const L=D.layer.projectSceneToLngLat([0,0,0]);if(!L)throw new Error("Shared scene origin is not initialized");const H=au.MercatorCoordinate.fromLngLat(L,0);return Pp(H.x,H.y,H.meterInMercatorCoordinateUnits())},requestRepaint:()=>t.triggerRepaint(),visualEpoch:()=>Xr,auditCorridors:L=>{const H=ur(),K=mt();return L.map(({id:ae,casterBounds:le,receiverBounds:fe})=>Np({id:ae,casterBounds:le,sunElevationDegrees:(h==null?void 0:h.elevationDegrees)??0,volumes:H,regions:K.flatMap(ee=>{var $;const pe=($=ee.getShadowRegionDiagnostics)==null?void 0:$.call(ee,le,void 0,fe);return pe?[pe]:[]})}))},runIdleRender:L=>{var H,K;return((K=(H=D.layer).runIdleRender)==null?void 0:K.call(H,L))??!1}}),S=!0}return!be||S?Q.update(At,we,{maxReceiverBiasMeters:Oe()?gi:void 0,directionToSun:_.directionToSun,color:_.sunColor,intensity:_.sunIntensity,shadowIntensity:_.shadowIntensity},ot[_.shadowQuality].shadowTexelErrorPixels,O(we)):Q.updatePresentation(we,O(we)),Q},el=Cp(),ri=()=>Ce()&&el(mt()),qs={onSettled:Fe.onSettled,get options(){return hr},get maxRenderTargetPixels(){return ti},get rounds(){return yr()},epoch:()=>qr,visualEpoch:()=>Xr,pending:()=>qt&&tt&&!A&&(!Gt||ri()||!Ce()&&!Ve()||!Ce()&&Sr(t)||be||!Ce()&&Xe!==0),active:()=>qt&&tt&&Gt&&!ri()&&(Ce()||Ve())&&(Ce()||!Sr(t))&&!be&&!A&&(Ce()||Xe===0)&&h!==null&&$t!==null&&_.receiverWorldPoints.length>0,retainSettledFrame:()=>qt&&tt&&h!==null&&$t!==null&&_.receiverWorldPoints.length>0,prepareRound:f=>{Ce()||_.controller.applySunDiscSample(f,yr())},finishRound:()=>_.controller.restoreSunDiscCenter(),get renderProgressive(){if(Ce())return(f,S)=>!tt||A||!qt?null:js(()=>{if(ri())return null;const w=Ks();if(!w)return null;const x=w.renderProgressive(f,{...S,samples:yr(),maxRenderTargetPixels:ti,options:hr});return Xt(),x})},renderScene:(f,S)=>!tt||A||!Ce()?!1:js(()=>{if(ri())return!1;const w=Ks();if(!w)return!1;const x=w.render(f,S,yr(),!be);return Xt(),x})};(la=(ca=D.layer).setAccumulationController)==null||la.call(ca,qs);const ii=()=>{dt=null,Qe=!0,vr()};Pe=f=>{Se(f),ii()};const Xs=()=>{Fe.cancel(),Q==null||Q.pausePending(),vt=Kn(vt,performance.now(),!1),be=!0,Qe=!0},gn=()=>{Fe.cancel(),Qe=!0},Qs=()=>{be=!1,vt=Kn(vt,performance.now(),!1),mn?(mn=!1,yn()):ii(),M&&(U=M,Zr()),Kt!==$t&&dr($t)},Zs=()=>{gn(),t.triggerRepaint()};t.on(ve.MOVE_START,Xs),t.on(ve.MOVE,gn),t.on(ve.MOVE_END,Qs),t.on(ve.RESIZE,Zs);const vn=f=>{f.ready.then(S=>{!S||E||Y!==f||(Gt=!0,ii(),t.triggerRepaint())})},tl=()=>{var x,G,L,H;const f=Me(t).filter(K=>K.providesTerrain);if(f.length!==Wt.length||f.some(K=>!Wt.includes(K))){Wt=f,pr(),(G=(x=D.layer).setAccumulationController)==null||G.call(x,null),(H=(L=D.layer).setAccumulationController)==null||H.call(L,qs);for(const K of _.controller.lights)K.shadow.map&&(Pt(K.shadow.map),K.shadow.map=null);Be()}const S=Oe();if(!a)return;if(S){Fe.cancel(),Gt=!0;const K=Y;Y=null,K&&D.layer.hasRuntime(K.id)&&D.layer.removeRuntime(K.id),dt=null,Qe=!0;return}if(Y)return;const w=Te();w&&(Fe.cancel(),Gt=!1,Y=w,w.setMaterialColor(`#${Z.getHexString()}`),w.setShadowView(Kt),D.layer.addRuntime(w),vn(w),dt=null,Qe=!0)};Y&&vn(Y),vr();const Js=()=>{if(E)return;const f=new Set(Ul(t));for(const[S,w]of ht)f.has(S)||(D.layer.removeRuntime(w.runtime.id),ht.delete(S));for(const S of f){const w=ht.get(S);if(w){w.sync();continue}if(!S.scene)continue;const x=mg(D.layer,S,m);x&&ht.set(S,x)}Cr(D.layer.getScene(),Oe()),ii(),t.triggerRepaint()},rl=Nl(t,Js);Js(),g();const yn=()=>{var f,S,w;if(!E){Xe&&(window.clearTimeout(Xe),Xe=0),ei?Q==null||Q.invalidateContent():mr.length>0&&(Q==null||Q.invalidateContent(mr)),ei=!1,mr.length=0,Fe.cancel(),tl(),d.refresh();for(const x of Me(t))x.providesTerrain&&((f=x.setErrorTargetOverride)==null||f.call(x,p),(!R.has(x)||R.get(x)!==b)&&((S=x.setCacheBudget)==null||S.call(x,b),R.set(x,b))),(w=x.setShadowSimulationStyle)==null||w.call(x,m);dr(Kt),ht.size>0&&Cr(D.layer.getScene(),Oe()),_.controller.invalidate(),_.dirty=!0,Qe=!0,dt=null,t.triggerRepaint()}},il=Uo(t,f=>{if(E)return;const S=f==null?void 0:f.bounds;for(const w of(f==null?void 0:f.roots)??[])Cr(w,Oe());if((S==null?void 0:S.length)===0){t.triggerRepaint();return}if(S===void 0?ei=!0:S.length>0&&mr.push(...S.map(w=>w.clone())),Fe.cancel(),S===void 0&&mt().some(w=>w!==Qt&&!w.getActiveTileVolumes)&&(ei=!0),be){mn=!0,t.triggerRepaint();return}t.triggerRepaint(),!Xe&&(Xe=window.setTimeout(()=>{Xe=0,yn()},Jp))}),nl=Ll(t,()=>{Sr(t)&&Fe.cancel(),E||t.triggerRepaint()});yn();const ea=f=>{const S=M??jt(f);S&&zs(S)},sl=f=>{(h==null?void 0:h.instant.getTime())!==f.instant.getTime()&&(Q==null||Q.cancelPending(!0),Be(),h=f,vr(),ea(f))},ta=()=>{E||h&&ea(h)};t.on(ve.STYLE_LOAD,ta);const ra=()=>{ln=Number.NEGATIVE_INFINITY,_.dirty=!0,t.triggerRepaint()},al=Kp(t,f=>{f?ra():(qe!==null&&globalThis.clearTimeout(qe),qe=null,gt=null,un=null,dn="")});return{updateSolarPosition:sl,updateMeshCacheBudget(f){var w;const S=f!==void 0&&Number.isFinite(f)&&f>0?f:void 0;if(b!==S){b=S;for(const x of Me(t))x.providesTerrain&&((w=x.setCacheBudget)==null||w.call(x,S),R.set(x,S));t.triggerRepaint()}},updateTerrain(f){if(a===f||(Fe.cancel(),a=f,!f||Oe()))return;const S=Y,w=Te(S==null?void 0:S.originLngLat);w&&(w.setMaterialColor(`#${Z.getHexString()}`),w.setShadowView(Kt),S&&w.adoptPresentation(S),Y=w,D.layer.addRuntime(w),S&&D.layer.removeRuntime(S.id),vn(w),dt=null,Qe=!0,Be(),Pe(),t.triggerRepaint())},updateTerrainColor(f){const S=new ze(f);Z.equals(S)||(Be(),Y==null||Y.setMaterialColor(f),_.atmosphericSky.updateGroundAlbedo(S),Z=S)},updateMeshErrorTarget(f){var S;if(p!==f){p=f;for(const w of Me(t))(S=w.setErrorTargetOverride)==null||S.call(w,f);t.triggerRepaint()}},updateBuildingAppearance(f){var S;if(!(m.fullOpacity===f.fullOpacity&&m.uniformColor===f.uniformColor&&(m.uniformColorMix??1)===(f.uniformColorMix??1)&&(m.textureSaturation??1)===(f.textureSaturation??1)&&(m.textureColorCorrection??!1)===(f.textureColorCorrection??!1))){Be(),Q==null||Q.invalidateContent(),m=f;for(const w of ht.values())w.updateBuildingAppearance(f);for(const w of Me(t))(S=w.setShadowSimulationStyle)==null||S.call(w,f);Cr(D.layer.getScene(),Oe()),_.controller.invalidate(),_.dirty=!0,t.triggerRepaint()}},updateShadowQuality(f){_.shadowQuality!==f&&(Be(),_.shadowQuality=f,Ae=bn(hn,f),hr=Jr(),vt=$n(f),_.dirty=!0,vr(),_.controller.invalidate())},updateRenderQuality(f){const S=Ae,w=bn(f,_.shadowQuality);hn={...f},Ae=w;const x=S.shadowAdaptiveQuality!==w.shadowAdaptiveQuality;(x||S.shadowBufferLayout!==w.shadowBufferLayout)&&(vt=$n(_.shadowQuality)),!(!x&&S.shadowBufferLayout===w.shadowBufferLayout&&S.shadowBufferFormat===w.shadowBufferFormat&&S.shadowSunDiscSamples===w.shadowSunDiscSamples&&S.shadowMsaaSamples===w.shadowMsaaSamples&&S.shadowGroundTexelFit===w.shadowGroundTexelFit)&&(hr=Jr(),Be(),S.shadowBufferLayout!==w.shadowBufferLayout&&(pr(),Qe=!0),(x||S.shadowGroundTexelFit!==w.shadowGroundTexelFit||S.shadowBufferLayout!==w.shadowBufferLayout)&&(_.dirty=!0,_.controller.invalidate()),Xt(),t.triggerRepaint())},updateSoftSunShadows(f){tt!==f&&(Be(),tt=f,pr(),_.controller.setSoftSun(f),_.controller.invalidate(),_.dirty=!0,t.triggerRepaint())},updateTimeAnimating(f){A!==f&&(Fe.cancel(),A=f,f&&(Q==null||Q.pausePending()),f||(Zr(),an=Number.NEGATIVE_INFINITY,on&&!be&&dr(Kt),_.dirty=!0),t.triggerRepaint())},refreshProjectionDebug:ra,updateShadowIntensity(f){const S=He(f,0,1);if(v!==S){Be(),v=S,_.shadowIntensity=v;for(const w of _.controller.lights)w.shadow.intensity=v;t.triggerRepaint()}},updateMapStyleContentVisibility(f){l!==f&&(l=f,B(),t.triggerRepaint())},updateMapStyleElevationVisibility(f,S){D.setMapStyleElevationVisibility(f,S),t.triggerRepaint()},updateMapStyleLabelOverlayVisibility(f){D.setPointLabelOverlayVisible(f),t.triggerRepaint()},updateSunDebugVectorVisibility(f){_.sunVectorVisible!==f&&(Be(),_.sunVectorVisible=f,_.sunVectorRoot.visible=f&&!!h,f?(_.frame.add(_.sunVectorRoot),Bi(async()=>{const{buildSunVector:S}=await import("./shadow-sun-vector-zmmLwS9T.js");return{buildSunVector:S}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10])).then(({buildSunVector:S})=>{if(E||!_.sunVectorVisible||_.sunVector)return;const w=S();_.sunVector=w,_.sunVectorRoot.add(w.root),w.update(_.center,_.directionToSun,_.sunVectorLengthMeters),w.root.visible=!0,_.sunVectorRoot.visible=!!h,t.triggerRepaint()}).catch(S=>{E||console.error("Unable to load sun-vector diagnostics",S)})):(_.frame.remove(_.sunVectorRoot),_.sunVector&&(_.sunVectorRoot.remove(_.sunVector.root),_.sunVector.dispose(),_.sunVector=null)),t.triggerRepaint())},updateAtmosphericLutUsage(f){C.useTransmittanceLut===f.useTransmittanceLut&&C.useIrradianceLut===f.useIrradianceLut||(Be(),C=f,M=null,h&&(jt(h),Se()),t.triggerRepaint())},dispose(){var f,S,w,x,G,L;if(!E){E=!0,Fe.dispose(),al(),pr(),qe!==null&&(globalThis.clearTimeout(qe),qe=null),gt=null,Xe&&window.clearTimeout(Xe),N!==null&&(globalThis.clearTimeout(N),N=null),jn(t),t.off(ve.STYLE_LOAD,ta),t.off(ve.MOVE_START,Xs),t.off(ve.MOVE,gn),t.off(ve.MOVE_END,Qs),t.off(ve.RESIZE,Zs),rl(),il(),nl(),$t=null,dr(null);for(const H of Me(t))(f=H.setShadowSimulationStyle)==null||f.call(H,null),(S=H.setErrorTargetOverride)==null||S.call(H,null);for(const H of ht.values())D.layer.hasRuntime(H.runtime.id)&&D.layer.removeRuntime(H.runtime.id);ht.clear();try{z==null||z()}catch{}z=null,(x=(w=D.layer).setMapStyleProjectionVisible)==null||x.call(w,!0),d(),D.layer.hasRuntime(Qt.id)&&D.layer.removeRuntime(Qt.id),Y&&D.layer.hasRuntime(Y.id)&&D.layer.removeRuntime(Y.id),ye.dispose(),vg(_),(L=(G=D.layer).setAccumulationController)==null||L.call(G,null),D.release();try{t.isStyleLoaded()&&t.setLight(c)}catch{}}}}},Sg=(t,e,r,i)=>{const n=i+e/2,s=Math.floor(n),a=n-s;if(s===0)return{dateState:t,yearDayProgress:a};const o=Xn(t,s);return{dateState:Ni({...t,...o},r)??t,yearDayProgress:a}},wg=(t,e,r)=>{const i=Ro(t,r),n=Math.ceil(i.sunriseMinutes),s=Math.floor(i.sunsetMinutes),a=t.minutes+e;return{dateState:{...t,minutes:a>s?n:a},yearDayProgress:0}},_g=(t,e,r,i,n)=>{const s=e??r;if(!(t!=null&&t.enabled)||!t.isAnimating)return{dateState:s,yearDayProgress:n};const a=t.animationSpeed??4;return(t.animationMode??kt.DAY)===kt.YEAR?Sg(s,a,i,n):wg(s,a,i)},xg=1e3/30,Tg=250,bg=({dateState:t,setDateState:e,location:r,shadowState:i,onFrame:n})=>{const s=j.useRef(null),a=j.useRef(null),o=j.useRef(t),c=j.useRef(t),l=j.useRef(e),u=j.useRef(n);c.current=t,l.current=e,u.current=n;const{animationMode:d,animationSpeed:g,enabled:h,isAnimating:m}=i,v=h&&(m??!1);return j.useEffect(()=>{const p=t!==o.current;if(o.current=t,!!p){if(t===a.current){v||(s.current=null);return}s.current=null}},[v,t]),j.useEffect(()=>{if(!v)return;const p={animationMode:d,animationSpeed:g,enabled:h,isAnimating:m};let y=0,b=performance.now();const R=C=>{a.current=C,l.current(C)},M=window.setInterval(()=>{const C=s.current??c.current,E=_g(p,C,C,r,y);y=E.yearDayProgress,s.current=E.dateState,u.current(E.dateState);const A=performance.now();A-b>=Tg&&(b=A,R(E.dateState))},xg);return()=>{window.clearInterval(M);const C=s.current;C&&C!==a.current&&R(C)}},[v,d,g,h,m,r]),s},Mg=({tiledShadows:t=!1,libreMap:e,shadowAreaMeters:r,terrain:i,mapLibreTerrain:n,terrainQuality:s,location:a,state:o,dateState:c,setDateState:l})=>{const u=j.useRef(null),d=bg({dateState:c,setDateState:l,location:a,shadowState:o,onFrame:p=>{var y;o.enabled&&((y=u.current)==null||y.updateSolarPosition(Br(p,a)))}}),g=j.useMemo(()=>lu(i,ga(o.shadowQuality),o.terrainErrorTarget),[i,o.shadowQuality,o.terrainErrorTarget]),h=j.useRef(g);h.current=g;const[m,v]=j.useState(0);return j.useEffect(()=>{if(!e||!o.enabled)return;let p=null,y=null,b=null;const R=()=>{e.off(ve.STYLE_DATA,M),e.off(ve.STYLE_LOAD,M),e.off(ve.IDLE,M)},M=()=>{p||y!==null||b!==null||!e.isStyleLoaded()||(y=requestAnimationFrame(()=>{y=null,b=setTimeout(()=>{b=null,e.isStyleLoaded()&&(R(),p=yg(e,{shadowAreaMeters:r,terrain:h.current,mapLibreTerrain:n,terrainQuality:s}),u.current=p,v(C=>C+1))},0)}))};return e.on(ve.STYLE_DATA,M),e.on(ve.STYLE_LOAD,M),e.on(ve.IDLE,M),M(),()=>{R(),y!==null&&cancelAnimationFrame(y),b!==null&&clearTimeout(b),u.current=null,p==null||p.dispose(),p=null}},[e,r,o.enabled,n,s]),j.useEffect(()=>{var p;(p=u.current)==null||p.updateTerrain(g)},[g,m]),j.useEffect(()=>{var y;if(!o.enabled)return;const p=d.current??c;(y=u.current)==null||y.updateSolarPosition(Br(p,a))},[d,c,a,o.enabled,m]),j.useEffect(()=>{var p;o.enabled&&((p=u.current)==null||p.updateShadowQuality(ga(o.shadowQuality)))},[o.enabled,o.shadowQuality,m]),j.useEffect(()=>{var p;o.enabled&&((p=u.current)==null||p.updateRenderQuality({shadowAdaptiveQuality:o.shadowAdaptiveQuality,shadowBufferLayout:t?o.shadowBufferLayout:void 0,shadowBufferFormat:o.shadowBufferFormat,shadowSunDiscSamples:o.shadowSunDiscSamples,shadowMsaaSamples:o.shadowMsaaSamples,shadowGroundTexelFit:o.shadowGroundTexelFit}))},[o.enabled,t,o.shadowAdaptiveQuality,o.shadowBufferLayout,o.shadowBufferFormat,o.shadowSunDiscSamples,o.shadowMsaaSamples,o.shadowGroundTexelFit,m]),j.useEffect(()=>{var p;o.enabled&&((p=u.current)==null||p.updateMeshErrorTarget(o.meshErrorTarget??null))},[o.enabled,o.meshErrorTarget,m]),j.useEffect(()=>{var p;o.enabled&&((p=u.current)==null||p.updateMeshCacheBudget(o.meshCacheBudgetBytes))},[o.enabled,o.meshCacheBudgetBytes,m]),j.useEffect(()=>{var p;o.enabled&&((p=u.current)==null||p.updateSoftSunShadows(o.softSunShadows??!0))},[o.enabled,o.softSunShadows,m]),j.useEffect(()=>{var p;o.enabled&&((p=u.current)==null||p.updateTimeAnimating(o.isAnimating??!1))},[o.enabled,o.isAnimating,m]),j.useEffect(()=>{var p;o.enabled&&((p=u.current)==null||p.updateShadowIntensity(o.shadowIntensity??1))},[o.enabled,o.shadowIntensity,m]),j.useEffect(()=>{var p;o.enabled&&((p=u.current)==null||p.updateMapStyleContentVisibility(o.showMapStyleContent??!0))},[o.enabled,o.showMapStyleContent,m]),j.useEffect(()=>{var p;o.enabled&&((p=u.current)==null||p.updateMapStyleLabelOverlayVisibility((o.showMapStyleContent??!0)&&(o.showMapStyleLabels??!0)))},[o.enabled,o.showMapStyleContent,o.showMapStyleLabels,m]),j.useEffect(()=>{var p;o.enabled&&((p=u.current)==null||p.updateMapStyleElevationVisibility(o.showMapStyleElevationLines??!1,o.showMapStyleElevationLabels??!1))},[o.enabled,o.showMapStyleElevationLines,o.showMapStyleElevationLabels,m]),j.useEffect(()=>{var p;o.enabled&&((p=u.current)==null||p.updateSunDebugVectorVisibility((o.showProjectionDebugView??!1)&&(o.showSunDebugVector??!0)))},[o.enabled,o.showProjectionDebugView,o.showSunDebugVector,m]),j.useEffect(()=>{if(!e)return;const p=o.enabled&&(o.showProjectionDebugView??!1)&&(o.showTileBounds??!0);if(!p)return;const y=new Set,b=()=>{var C;const M=Me(e);for(const E of y)M.includes(E)||y.delete(E);for(const E of M)y.has(E)||((C=E.setTileBoundsVisible)==null||C.call(E,p),y.add(E))};b();const R=Uo(e,b);return()=>{var M;R();for(const C of Me(e))(M=C.setTileBoundsVisible)==null||M.call(C,!1)}},[e,m,o.enabled,o.showProjectionDebugView,o.showTileBounds]),j.useEffect(()=>{var p;o.enabled&&((p=u.current)==null||p.updateAtmosphericLutUsage({useTransmittanceLut:o.useTransmittanceLut??!0,useIrradianceLut:o.useSkyIrradianceLut??!0}))},[o.enabled,o.useSkyIrradianceLut,o.useTransmittanceLut,m]),j.useEffect(()=>{var p;o.enabled&&((p=u.current)==null||p.updateTerrainColor(o.terrainColor??xs))},[o.enabled,o.terrainColor,m]),j.useEffect(()=>{var p;o.enabled&&((p=u.current)==null||p.updateBuildingAppearance({fullOpacity:o.buildingsFullOpacity??!0,uniformColor:o.buildingColor??Vo,uniformColorMix:He(o.buildingColorMix??Ho,0,1),textureColorCorrection:o.meshTextureColorCorrection??!0,textureSaturation:He(o.meshTextureSaturation??zo,0,1)}))},[o.buildingColor,o.buildingColorMix,o.buildingsFullOpacity,o.enabled,o.meshTextureSaturation,o.meshTextureColorCorrection,m]),null},Eg=t=>({...t,animationMode:kt.DAY,animationSpeed:4,isAnimating:!1,shadowIntensity:1,meshTextureColorCorrection:!0,showSunDebugVector:!0,showTileBounds:!0,showProjectionDebugView:!1,showDisplaySettings:!1,showMapStyleContent:!0,showMapStyleLabels:!0,showMapStyleElevationLines:!1,showMapStyleElevationLabels:!1,useTransmittanceLut:!0,useSkyIrradianceLut:!0,shadowBufferLayout:void 0,shadowBufferFormat:void 0,shadowSunDiscSamples:void 0,shadowMsaaSamples:void 0,shadowGroundTexelFit:void 0,shadowAdaptiveQuality:void 0}),Rg=({location:t,state:e,setState:r,dateState:i,setDateState:n})=>{const s=e.animationMode??kt.DAY,a=e.animationSpeed??4,o=(c,l)=>n(Nu(i,i.year,Ao(i.year,c,l),t));return P.jsxs(P.Fragment,{children:[P.jsxs("section",{className:"min-w-0",children:[P.jsx("h3",{className:"mb-1.5 text-xs font-medium uppercase tracking-wide text-neutral-500",children:"Datum"}),P.jsxs("div",{className:"grid grid-cols-2 gap-2","data-test-id":"shadow-date-shortcuts",children:[P.jsx("button",{type:"button",className:wr,onClick:()=>n(Lu(i,t)),children:"Heute"}),P.jsx("button",{type:"button",className:wr,onClick:()=>o(2,21),children:"21. März"}),P.jsx("button",{type:"button",className:wr,onClick:()=>o(5,21),children:"21. Juni"}),P.jsx("button",{type:"button",className:wr,onClick:()=>o(11,21),children:"21. Dezember"})]})]}),P.jsxs("section",{children:[P.jsx("h3",{className:"mb-1.5 text-xs font-medium uppercase tracking-wide text-neutral-500",children:"Uhrzeit"}),P.jsx("div",{className:"grid grid-cols-4 gap-2",children:[9,12,15,18].map(c=>P.jsx("button",{type:"button",className:wr,onClick:()=>n(Gi(i,{...i,minutes:c*60},t)),children:ku(c)},c))})]}),P.jsxs("section",{children:[P.jsx("h3",{className:"mb-1.5 text-xs font-medium uppercase tracking-wide text-neutral-500",children:"Animation"}),P.jsxs("div",{className:"flex flex-wrap items-center gap-x-3 gap-y-2",children:[P.jsx("div",{className:"flex shrink-0 overflow-hidden rounded-md border border-neutral-300",children:[[kt.DAY,"Tagesverlauf"],[kt.YEAR,"Jahresverlauf"]].map(([c,l])=>P.jsx("button",{type:"button",className:`${Sa} ${s===c?"bg-amber-50 font-medium text-amber-700":"bg-white"}`,"aria-pressed":s===c,onClick:()=>{const u=c;r({...e,animationMode:u,isAnimating:s===u?!e.isAnimating:!0})},children:l},c))}),P.jsx("div",{className:"flex shrink-0 overflow-hidden rounded-md border border-neutral-300",children:[1,4,12].map(c=>P.jsxs("button",{type:"button",className:`${Sa} px-3 ${a===c?"bg-amber-50 font-medium text-amber-700":"bg-white"}`,"aria-pressed":a===c,onClick:()=>r({...e,animationSpeed:c}),children:[c,"×"]},c))})]})]})]})},Ag=({location:t,state:e,setState:r,dateState:i,setDateState:n})=>{const s=e.shadowIntensity??1,a=j.useMemo(()=>Br(i,t),[i,t]);return P.jsxs("div",{className:"w-full","data-test-id":"shadow-simulation-secondary-panel",children:[P.jsxs("div",{className:"mb-2 flex flex-wrap items-center justify-between gap-x-4 gap-y-2",children:[P.jsxs("span",{className:"whitespace-nowrap text-sm tabular-nums text-neutral-500",children:["Höhe ",a.elevationDegrees.toFixed(0),"° · Azimut"," ",a.azimuthDegrees.toFixed(0),"°"]}),P.jsx("div",{className:"flex items-center gap-5 text-sm text-neutral-600",children:P.jsxs("button",{type:"button",className:"flex items-center gap-2 whitespace-nowrap hover:text-amber-700",onClick:()=>{r(Eg(e)),n(Fu(i,t))},children:[P.jsx(Ot,{icon:Jl}),"Zurücksetzen"]})})]}),P.jsxs("div",{className:"grid grid-cols-1 gap-x-8 gap-y-4 lg:grid-cols-2",children:[P.jsx(Rg,{location:t,state:e,setState:r,dateState:i,setDateState:n}),P.jsxs("section",{className:"min-w-0",children:[P.jsxs("h3",{className:"mb-1.5 flex items-center gap-1 text-xs font-medium uppercase tracking-wide text-neutral-500",children:["Darstellung",P.jsx("button",{type:"button",className:"inline-flex items-center justify-center p-1 text-neutral-700 hover:text-amber-700","aria-label":"Darstellungseinstellungen",title:"Darstellungseinstellungen","aria-expanded":e.showDisplaySettings??!1,onClick:()=>r({...e,showDisplaySettings:!e.showDisplaySettings}),"data-test-id":"shadow-simulation-display-settings",children:P.jsx(Ot,{icon:eu})})]}),P.jsxs("label",{className:"grid grid-cols-[110px_minmax(0,1fr)_42px] items-center gap-3 text-sm text-neutral-700",children:[P.jsx("span",{children:"Intensität"}),P.jsx("input",{type:"range",min:0,max:1,step:.01,value:s,onChange:o=>r({...e,shadowIntensity:Number(o.currentTarget.value)}),className:"shadow-simulation-range min-w-0 cursor-pointer",style:Yo(s,0,1),"aria-label":"Schattenintensität","data-test-id":"shadow-simulation-intensity"}),P.jsxs("span",{className:"text-right tabular-nums",children:[Math.round(s*100),"%"]})]})]})]})]})},Cg=j.lazy(()=>Bi(()=>import("./ShadowProjectionDebugView-BQcY5i4E.js"),__vite__mapDeps([11,1,2,3,4,5,6,7,8,9,10])).then(t=>({default:t.ShadowProjectionDebugView}))),Ig=j.lazy(()=>Bi(()=>import("./ShadowSimulationDisplaySettingsPanel-CxpB0ejP.js"),__vite__mapDeps([12,1,2,3,4,5,6,7,8,9,10])).then(t=>({default:t.ShadowSimulationDisplaySettingsPanel}))),Dg=j.lazy(()=>Bi(()=>import("./ShadowSimulationCurveSettings-BavMpJpu.js"),__vite__mapDeps([13,1,2,3,4,5,6,7,8,9,10])).then(t=>({default:t.ShadowSimulationCurveSettings}))),Pg="#1677ff",Og=({config:t,libreMap:e,targeted:r,sharedState:i,setSharedState:n,sharedDateState:s,setSharedDateState:a})=>{var z,Z;const{year:o,initialDayOfYear:c,initialMinutes:l,latitude:u=_i.latitude,longitude:d=_i.longitude,timeZone:g=gs,shadowAreaMeters:h,terrain:m,terrainSources:v,mapLibreTerrain:p,controlPosition:y="topleft",controlOrder:b=70,experimentalTiledShadows:R=!1}=t??{},M=jo(e,u,d),C=j.useMemo(()=>fu({terrain:m,terrainSources:v}),[m,v]),E=j.useMemo(()=>s??pu({year:o,initialDayOfYear:c,initialMinutes:l,timeZone:g},M),[s,c,l,M,g,o]),A=i??C,F=s??E,U=j.useMemo(()=>v??(m?[{label:m.id,terrain:m}]:void 0),[m,v]),N=((z=U==null?void 0:U.find(({terrain:B})=>B.id===A.terrainSourceId))==null?void 0:z.terrain)??((Z=U==null?void 0:U[0])==null?void 0:Z.terrain);return j.useEffect(()=>{i||n(C)},[C,n,i]),j.useEffect(()=>{s||a(E)},[E,a,s]),r?P.jsx(Ag,{location:M,state:A,setState:n,dateState:F,setDateState:a}):P.jsxs(P.Fragment,{children:[e&&P.jsx(zl,{position:y,order:b,children:P.jsx(su,{title:A.enabled?"Schattensimulation ausschalten":"Schattensimulation einschalten",placement:"right",children:P.jsx(Vl,{onClick:()=>n({...A,enabled:!A.enabled}),dataTestId:"shadow-simulation-control-button","aria-label":A.enabled?"Schattensimulation ausschalten":"Schattensimulation einschalten","aria-pressed":A.enabled,children:P.jsx(Ot,{icon:tu,style:A.enabled?{color:Pg}:void 0})})})}),P.jsx(Mg,{tiledShadows:R,libreMap:e,shadowAreaMeters:h,terrain:N,mapLibreTerrain:p,terrainQuality:A.terrainQuality,location:M,state:A,dateState:F,setDateState:a}),A.controlStyle===Jn.CURVE&&P.jsx(j.Suspense,{fallback:null,children:P.jsx(Dg,{location:M,dateState:F,setDateState:a,onClose:()=>n({...A,controlStyle:Jn.QUICK})})}),A.showDisplaySettings&&P.jsx(j.Suspense,{fallback:null,children:P.jsx(Ig,{tiledShadows:R,state:A,setState:n,terrainSources:U,map:e})}),A.enabled&&A.showProjectionDebugView&&e&&P.jsx(j.Suspense,{fallback:null,children:P.jsx(Cg,{map:e,solarPosition:Br(F,M),settings:{showSunDebugVector:A.showSunDebugVector??!0,showTileBounds:A.showTileBounds??!0},onSettingsChange:B=>n({...A,...B}),onClose:()=>n({...A,showProjectionDebugView:!1})})})]})},Xg=Object.freeze(Object.defineProperty({__proto__:null,DEFAULT_SHADOW_SIMULATION_TIME_ZONE:gs,SHADOW_TERRAIN_QUALITY:Le,ShadowSimulationHeaderControlsView:zu,ShadowSimulationView:Og,clampShadowSimulationSelectionToDaylight:Wl,formatShadowSelection:Gl,getSolarPosition:Br},Symbol.toStringTag,{value:"Module"}));export{xs as D,Gg as M,Ti as S,bn as a,ga as b,jg as c,du as d,Mt as e,cu as f,_s as g,Ho as h,zo as i,Vo as j,Ir as k,Wg as l,Vg as m,Jn as n,bt as o,xi as p,Xg as q,Kg as r,qg as s};
