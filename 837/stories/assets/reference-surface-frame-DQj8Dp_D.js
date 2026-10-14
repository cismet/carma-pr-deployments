var Sl=Object.defineProperty;var bl=(n,e,t)=>e in n?Sl(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var Le=(n,e,t)=>bl(n,typeof e!="symbol"?e+"":e,t);import{ac as ru,ar as Rl,aN as Dl,d$ as iu,e0 as A,W as ou,aV as Co,aP as au,S as A0,O as Al,M as su,q as cu,r as M0,V as M,s as Ne,k as Ls,dG as Ps,b as Ml,L as x0,dB as xl,aW as Il,U as I0,aX as Cl,aY as Nl,aZ as Ol,a_ as Ll,H as uu,F as C0,v as Ln,h as No,t as Pl,e1 as Ul,m as du,aE as $l,af as lu,a as N0,D as Hl,a7 as Fl,dp as Gl}from"./three.module-DbFHiiZ-.js";import{c as vn}from"./clamp-co6UzHBn.js";import{r as O0,d as no}from"./angles-O4gcnBa7.js";import"./index-D9NkO_DI.js";import"./index-CSJjS6Ct.js";import{a as Us}from"./maplibre-gl-BvLDYGIs.js";import{n as zl,c as hu}from"./camera-local-mercator-fit-CkQjgYnf.js";const Pi={MAPPED_NOT_SURVEYED:"mapped-not-surveyed"},Ui={NODE:"node",WAY_BOUNDS_CENTER:"way-bounds-center"},$i={MAPPED:"mapped",MUNICIPALITY_PUBLISHED:"municipality-published"},Hi={APPROXIMATE_TERRAIN:"approximate-terrain"},Fi={NRW_DGM1_WCS:"nrw-dgm1-wcs"},Gi={CONTAINING_1M_PIXEL_CENTER:"containing-1m-pixel-center"},zi={AUTHORED_APPROXIMATE_SILHOUETTE:"authored-approximate-silhouette"},A3=[{id:"wdr-nordhelle",name:"WDR Sender Nordhelle",longitudeDegrees:7.7566997,latitudeDegrees:51.1480857,heightMeters:150,groundNormalHeightMeters:662.09,positionEvidence:{status:Pi.MAPPED_NOT_SURVEYED,sourceUrl:"https://www.openstreetmap.org/way/462542377",osmVersion:2,osmEditedAt:"2026-05-18T11:57:44Z",method:Ui.WAY_BOUNDS_CENTER},heightEvidence:{status:$i.MAPPED,sourceUrl:"https://www.openstreetmap.org/way/462542377",conflictingHeightMeters:130,conflictingSourceUrl:"https://www.meinerzhagen.de/fileadmin/user_upload/Meinerzhagen/TourismusFreizeit/Freizeitangebote/Sportliches/Wandern/MVG_Wanderbus_Broschuere_2017_WEB.pdf"},groundEvidence:{status:Hi.APPROXIMATE_TERRAIN,source:Fi.NRW_DGM1_WCS,verticalDatum:"DHHN2016",horizontalCrs:"EPSG:25832",sampleMethod:Gi.CONTAINING_1M_PIXEL_CENTER,requestBoundsUtm32Meters:[413032,5667022,413042,5667032],sampleCenterUtm32Meters:[413037.5,56670275e-1],sourceUrl:"https://www.wcs.nrw.de/geobasis/wcs_nw_dgm?SERVICE=WCS&VERSION=2.0.1&REQUEST=GetCoverage&COVERAGEID=nw_dgm&FORMAT=image%2Ftiff&SUBSET=x%28413032%2C413042%29&SUBSET=y%285667022%2C5667032%29"},geometryEvidence:zi.AUTHORED_APPROXIMATE_SILHOUETTE,parts:[{baseHeightMeters:0,heightMeters:76,radiusBottomMeters:4.2,radiusTopMeters:2.2,radialSegments:16,color:"#bcbcb4"},{baseHeightMeters:70,heightMeters:2,radiusBottomMeters:5.4,radiusTopMeters:5.4,radialSegments:16,color:"#888a88"},{baseHeightMeters:76,heightMeters:26,radiusBottomMeters:2.2,radiusTopMeters:1.5,radialSegments:16,color:"#e0ded5"},{baseHeightMeters:86,heightMeters:1.5,radiusBottomMeters:4.5,radiusTopMeters:4.5,radialSegments:16,color:"#8c8c86"},{baseHeightMeters:98,heightMeters:2,radiusBottomMeters:3.5,radiusTopMeters:3.5,radialSegments:16,color:"#e1ddd3"},{baseHeightMeters:102,heightMeters:48,radiusBottomMeters:1.3,radiusTopMeters:.55,radialSegments:12,color:"#eeeae1"},{baseHeightMeters:109,heightMeters:5,radiusBottomMeters:1.2,radiusTopMeters:1.12,radialSegments:12,color:"#ac4f44"},{baseHeightMeters:124,heightMeters:5,radiusBottomMeters:.96,radiusTopMeters:.88,radialSegments:12,color:"#ac4f44"},{baseHeightMeters:139,heightMeters:5,radiusBottomMeters:.72,radiusTopMeters:.64,radialSegments:12,color:"#ac4f44"}]},{id:"nato-nordhelle",name:"NATO-Fernmeldeturm Nordhelle",longitudeDegrees:7.7589117,latitudeDegrees:51.1494475,heightMeters:56,groundNormalHeightMeters:656.77,positionEvidence:{status:Pi.MAPPED_NOT_SURVEYED,sourceUrl:"https://www.openstreetmap.org/node/2812442525",osmVersion:4,osmEditedAt:"2023-01-11T18:00:38Z",method:Ui.NODE},heightEvidence:{status:$i.MAPPED,sourceUrl:"https://www.openstreetmap.org/node/2812442525"},groundEvidence:{status:Hi.APPROXIMATE_TERRAIN,source:Fi.NRW_DGM1_WCS,verticalDatum:"DHHN2016",horizontalCrs:"EPSG:25832",sampleMethod:Gi.CONTAINING_1M_PIXEL_CENTER,requestBoundsUtm32Meters:[413189,5667171,413199,5667181],sampleCenterUtm32Meters:[413194.5,56671765e-1],sourceUrl:"https://www.wcs.nrw.de/geobasis/wcs_nw_dgm?SERVICE=WCS&VERSION=2.0.1&REQUEST=GetCoverage&COVERAGEID=nw_dgm&FORMAT=image%2Ftiff&SUBSET=x%28413189%2C413199%29&SUBSET=y%285667171%2C5667181%29"},geometryEvidence:zi.AUTHORED_APPROXIMATE_SILHOUETTE,parts:[{baseHeightMeters:0,heightMeters:43,radiusBottomMeters:3.5,radiusTopMeters:2.2,radialSegments:16,color:"#a6a7a0"},{baseHeightMeters:34,heightMeters:1.5,radiusBottomMeters:5.4,radiusTopMeters:5.4,radialSegments:16,color:"#878a87"},{baseHeightMeters:41,heightMeters:2,radiusBottomMeters:5.1,radiusTopMeters:5.1,radialSegments:16,color:"#caccc6"},{baseHeightMeters:43,heightMeters:13,radiusBottomMeters:1.1,radiusTopMeters:.35,radialSegments:12,color:"#d8d9d1"}]},{id:"ebbegebirge-waldberg",name:"Fernmeldeturm Ebbegebirge / Waldbergsender",longitudeDegrees:7.7732476,latitudeDegrees:51.1467095,heightMeters:150,groundNormalHeightMeters:638.4,positionEvidence:{status:Pi.MAPPED_NOT_SURVEYED,sourceUrl:"https://www.openstreetmap.org/node/297576774",osmVersion:10,osmEditedAt:"2026-06-30T15:47:18Z",method:Ui.NODE},heightEvidence:{status:$i.MAPPED,sourceUrl:"https://www.openstreetmap.org/node/297576774"},groundEvidence:{status:Hi.APPROXIMATE_TERRAIN,source:Fi.NRW_DGM1_WCS,verticalDatum:"DHHN2016",horizontalCrs:"EPSG:25832",sampleMethod:Gi.CONTAINING_1M_PIXEL_CENTER,requestBoundsUtm32Meters:[414187,5666850,414197,5666860],sampleCenterUtm32Meters:[414192.5,56668555e-1],sourceUrl:"https://www.wcs.nrw.de/geobasis/wcs_nw_dgm?SERVICE=WCS&VERSION=2.0.1&REQUEST=GetCoverage&COVERAGEID=nw_dgm&FORMAT=image%2Ftiff&SUBSET=x%28414187%2C414197%29&SUBSET=y%285666850%2C5666860%29"},geometryEvidence:zi.AUTHORED_APPROXIMATE_SILHOUETTE,parts:[{baseHeightMeters:0,heightMeters:72,radiusBottomMeters:6,radiusTopMeters:3.1,radialSegments:16,color:"#b7b8b0"},{baseHeightMeters:68,heightMeters:4,radiusBottomMeters:9.5,radiusTopMeters:9.5,radialSegments:20,color:"#9b9c96"},{baseHeightMeters:72,heightMeters:6,radiusBottomMeters:9.5,radiusTopMeters:8,radialSegments:20,color:"#d2d1c8"},{baseHeightMeters:78,heightMeters:27,radiusBottomMeters:3.1,radiusTopMeters:2,radialSegments:16,color:"#b7b8b0"},{baseHeightMeters:86,heightMeters:1.5,radiusBottomMeters:6,radiusTopMeters:6,radialSegments:16,color:"#8d908c"},{baseHeightMeters:98,heightMeters:1.5,radiusBottomMeters:4.5,radiusTopMeters:4.5,radialSegments:16,color:"#8d908c"},{baseHeightMeters:105,heightMeters:45,radiusBottomMeters:1.45,radiusTopMeters:.45,radialSegments:12,color:"#ebe9df"},{baseHeightMeters:112,heightMeters:5,radiusBottomMeters:1.31,radiusTopMeters:1.2,radialSegments:12,color:"#b65248"},{baseHeightMeters:127,heightMeters:5,radiusBottomMeters:.98,radiusTopMeters:.87,radialSegments:12,color:"#b65248"},{baseHeightMeters:142,heightMeters:5,radiusBottomMeters:.64,radiusTopMeters:.53,radialSegments:12,color:"#b65248"}]},{id:"robert-kolb",name:"Robert-Kolb-Turm",longitudeDegrees:7.7561592,latitudeDegrees:51.1484355,heightMeters:18,groundNormalHeightMeters:663.5,positionEvidence:{status:Pi.MAPPED_NOT_SURVEYED,sourceUrl:"https://www.openstreetmap.org/way/462542374",osmVersion:4,osmEditedAt:"2020-02-16T16:58:11Z",method:Ui.WAY_BOUNDS_CENTER},heightEvidence:{status:$i.MUNICIPALITY_PUBLISHED,sourceUrl:"https://www.herscheid.de/freizeit-tourismus/wandern"},groundEvidence:{status:Hi.APPROXIMATE_TERRAIN,source:Fi.NRW_DGM1_WCS,verticalDatum:"DHHN2016",horizontalCrs:"EPSG:25832",sampleMethod:Gi.CONTAINING_1M_PIXEL_CENTER,requestBoundsUtm32Meters:[412995,5667062,413005,5667072],sampleCenterUtm32Meters:[413000.5,56670675e-1],sourceUrl:"https://www.wcs.nrw.de/geobasis/wcs_nw_dgm?SERVICE=WCS&VERSION=2.0.1&REQUEST=GetCoverage&COVERAGEID=nw_dgm&FORMAT=image%2Ftiff&SUBSET=x%28412995%2C413005%29&SUBSET=y%285667062%2C5667072%29"},geometryEvidence:zi.AUTHORED_APPROXIMATE_SILHOUETTE,parts:[{baseHeightMeters:0,heightMeters:13.5,radiusBottomMeters:4,radiusTopMeters:3.4,radialSegments:4,color:"#777167"},{baseHeightMeters:13.5,heightMeters:3,radiusBottomMeters:3.4,radiusTopMeters:3.4,radialSegments:4,color:"#575451"},{baseHeightMeters:16.5,heightMeters:1.5,radiusBottomMeters:3.9,radiusTopMeters:3.6,radialSegments:4,color:"#a39c8b"}]}],Yl=864e5,Oo=n=>new Date(Date.UTC(n,1,29)).getUTCMonth()===1?366:365,kl=(n,e,t)=>Math.floor((Date.UTC(n,e,t)-Date.UTC(n,0,1))/Yl)+1,jl=(n,e)=>new Date(Date.UTC(n,0,e)),Wl=(n,e)=>{const t=jl(n.year,n.dayOfYear+e);return{year:t.getUTCFullYear(),dayOfYear:kl(t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate())}};class h extends Array{constructor(e,t){if(super(e),this.sign=t,Object.setPrototypeOf(this,h.prototype),e>h.__kMaxLength)throw new RangeError("Maximum BigInt size exceeded")}static BigInt(e){var t=Math.floor,r=Number.isFinite;if(typeof e=="number"){if(e===0)return h.__zero();if(h.__isOneDigitInt(e))return 0>e?h.__oneDigit(-e,!0):h.__oneDigit(e,!1);if(!r(e)||t(e)!==e)throw new RangeError("The number "+e+" cannot be converted to BigInt because it is not an integer");return h.__fromDouble(e)}if(typeof e=="string"){const i=h.__fromString(e);if(i===null)throw new SyntaxError("Cannot convert "+e+" to a BigInt");return i}if(typeof e=="boolean")return e===!0?h.__oneDigit(1,!1):h.__zero();if(typeof e=="object"){if(e.constructor===h)return e;const i=h.__toPrimitive(e);return h.BigInt(i)}throw new TypeError("Cannot convert "+e+" to a BigInt")}toDebugString(){const e=["BigInt["];for(const t of this)e.push((t&&(t>>>0).toString(16))+", ");return e.push("]"),e.join("")}toString(e=10){if(2>e||36<e)throw new RangeError("toString() radix argument must be between 2 and 36");return this.length===0?"0":e&e-1?h.__toStringGeneric(this,e,!1):h.__toStringBasePowerOfTwo(this,e)}valueOf(){throw new Error("Convert JSBI instances to native numbers using `toNumber`.")}static toNumber(e){const t=e.length;if(t===0)return 0;if(t===1){const _=e.__unsignedDigit(0);return e.sign?-_:_}const r=e.__digit(t-1),i=h.__clz30(r),o=30*t-i;if(1024<o)return e.sign?-1/0:1/0;let a=o-1,s=r,c=t-1;const u=i+3;let d=u===32?0:s<<u;d>>>=12;const l=u-12;let f=12<=u?0:s<<20+u,g=20+u;for(0<l&&0<c&&(c--,s=e.__digit(c),d|=s>>>30-l,f=s<<l+2,g=l+2);0<g&&0<c;)c--,s=e.__digit(c),f|=30<=g?s<<g-30:s>>>30-g,g-=30;const p=h.__decideRounding(e,g,c,s);if((p===1||p===0&&(1&f)==1)&&(f=f+1>>>0,f===0&&(d++,d>>>20!=0&&(d=0,a++,1023<a))))return e.sign?-1/0:1/0;const y=e.sign?-2147483648:0;return a=a+1023<<20,h.__kBitConversionInts[h.__kBitConversionIntHigh]=y|a|d,h.__kBitConversionInts[h.__kBitConversionIntLow]=f,h.__kBitConversionDouble[0]}static unaryMinus(e){if(e.length===0)return e;const t=e.__copy();return t.sign=!e.sign,t}static bitwiseNot(e){return e.sign?h.__absoluteSubOne(e).__trim():h.__absoluteAddOne(e,!0)}static exponentiate(e,t){if(t.sign)throw new RangeError("Exponent must be positive");if(t.length===0)return h.__oneDigit(1,!1);if(e.length===0)return e;if(e.length===1&&e.__digit(0)===1)return e.sign&&!(1&t.__digit(0))?h.unaryMinus(e):e;if(1<t.length)throw new RangeError("BigInt too big");let r=t.__unsignedDigit(0);if(r===1)return e;if(r>=h.__kMaxLengthBits)throw new RangeError("BigInt too big");if(e.length===1&&e.__digit(0)===2){const a=1+(0|r/30),s=e.sign&&(1&r)!=0,c=new h(a,s);c.__initializeDigits();const u=1<<r%30;return c.__setDigit(a-1,u),c}let i=null,o=e;for(1&r&&(i=e),r>>=1;r!==0;r>>=1)o=h.multiply(o,o),1&r&&(i===null?i=o:i=h.multiply(i,o));return i}static multiply(e,t){if(e.length===0)return e;if(t.length===0)return t;let r=e.length+t.length;30<=e.__clzmsd()+t.__clzmsd()&&r--;const i=new h(r,e.sign!==t.sign);i.__initializeDigits();for(let o=0;o<e.length;o++)h.__multiplyAccumulate(t,e.__digit(o),i,o);return i.__trim()}static divide(e,t){if(t.length===0)throw new RangeError("Division by zero");if(0>h.__absoluteCompare(e,t))return h.__zero();const r=e.sign!==t.sign,i=t.__unsignedDigit(0);let o;if(t.length===1&&32767>=i){if(i===1)return r===e.sign?e:h.unaryMinus(e);o=h.__absoluteDivSmall(e,i,null)}else o=h.__absoluteDivLarge(e,t,!0,!1);return o.sign=r,o.__trim()}static remainder(e,t){if(t.length===0)throw new RangeError("Division by zero");if(0>h.__absoluteCompare(e,t))return e;const r=t.__unsignedDigit(0);if(t.length===1&&32767>=r){if(r===1)return h.__zero();const o=h.__absoluteModSmall(e,r);return o===0?h.__zero():h.__oneDigit(o,e.sign)}const i=h.__absoluteDivLarge(e,t,!1,!0);return i.sign=e.sign,i.__trim()}static add(e,t){const r=e.sign;return r===t.sign?h.__absoluteAdd(e,t,r):0<=h.__absoluteCompare(e,t)?h.__absoluteSub(e,t,r):h.__absoluteSub(t,e,!r)}static subtract(e,t){const r=e.sign;return r===t.sign?0<=h.__absoluteCompare(e,t)?h.__absoluteSub(e,t,r):h.__absoluteSub(t,e,!r):h.__absoluteAdd(e,t,r)}static leftShift(e,t){return t.length===0||e.length===0?e:t.sign?h.__rightShiftByAbsolute(e,t):h.__leftShiftByAbsolute(e,t)}static signedRightShift(e,t){return t.length===0||e.length===0?e:t.sign?h.__leftShiftByAbsolute(e,t):h.__rightShiftByAbsolute(e,t)}static unsignedRightShift(){throw new TypeError("BigInts have no unsigned right shift; use >> instead")}static lessThan(e,t){return 0>h.__compareToBigInt(e,t)}static lessThanOrEqual(e,t){return 0>=h.__compareToBigInt(e,t)}static greaterThan(e,t){return 0<h.__compareToBigInt(e,t)}static greaterThanOrEqual(e,t){return 0<=h.__compareToBigInt(e,t)}static equal(e,t){if(e.sign!==t.sign||e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e.__digit(r)!==t.__digit(r))return!1;return!0}static notEqual(e,t){return!h.equal(e,t)}static bitwiseAnd(e,t){var r=Math.max;if(!e.sign&&!t.sign)return h.__absoluteAnd(e,t).__trim();if(e.sign&&t.sign){const i=r(e.length,t.length)+1;let o=h.__absoluteSubOne(e,i);const a=h.__absoluteSubOne(t);return o=h.__absoluteOr(o,a,o),h.__absoluteAddOne(o,!0,o).__trim()}return e.sign&&([e,t]=[t,e]),h.__absoluteAndNot(e,h.__absoluteSubOne(t)).__trim()}static bitwiseXor(e,t){var r=Math.max;if(!e.sign&&!t.sign)return h.__absoluteXor(e,t).__trim();if(e.sign&&t.sign){const a=r(e.length,t.length),s=h.__absoluteSubOne(e,a),c=h.__absoluteSubOne(t);return h.__absoluteXor(s,c,s).__trim()}const i=r(e.length,t.length)+1;e.sign&&([e,t]=[t,e]);let o=h.__absoluteSubOne(t,i);return o=h.__absoluteXor(o,e,o),h.__absoluteAddOne(o,!0,o).__trim()}static bitwiseOr(e,t){var r=Math.max;const i=r(e.length,t.length);if(!e.sign&&!t.sign)return h.__absoluteOr(e,t).__trim();if(e.sign&&t.sign){let a=h.__absoluteSubOne(e,i);const s=h.__absoluteSubOne(t);return a=h.__absoluteAnd(a,s,a),h.__absoluteAddOne(a,!0,a).__trim()}e.sign&&([e,t]=[t,e]);let o=h.__absoluteSubOne(t,i);return o=h.__absoluteAndNot(o,e,o),h.__absoluteAddOne(o,!0,o).__trim()}static asIntN(e,t){var r=Math.floor;if(t.length===0)return t;if(e=r(e),0>e)throw new RangeError("Invalid value: not (convertible to) a safe integer");if(e===0)return h.__zero();if(e>=h.__kMaxLengthBits)return t;const i=0|(e+29)/30;if(t.length<i)return t;const o=t.__unsignedDigit(i-1),a=1<<(e-1)%30;if(t.length===i&&o<a)return t;if((o&a)!==a)return h.__truncateToNBits(e,t);if(!t.sign)return h.__truncateAndSubFromPowerOfTwo(e,t,!0);if(!(o&a-1)){for(let s=i-2;0<=s;s--)if(t.__digit(s)!==0)return h.__truncateAndSubFromPowerOfTwo(e,t,!1);return t.length===i&&o===a?t:h.__truncateToNBits(e,t)}return h.__truncateAndSubFromPowerOfTwo(e,t,!1)}static asUintN(e,t){var r=Math.floor;if(t.length===0)return t;if(e=r(e),0>e)throw new RangeError("Invalid value: not (convertible to) a safe integer");if(e===0)return h.__zero();if(t.sign){if(e>h.__kMaxLengthBits)throw new RangeError("BigInt too big");return h.__truncateAndSubFromPowerOfTwo(e,t,!1)}if(e>=h.__kMaxLengthBits)return t;const i=0|(e+29)/30;if(t.length<i)return t;const o=e%30;return t.length==i&&(o===0||!(t.__digit(i-1)>>>o))?t:h.__truncateToNBits(e,t)}static ADD(e,t){if(e=h.__toPrimitive(e),t=h.__toPrimitive(t),typeof e=="string")return typeof t!="string"&&(t=t.toString()),e+t;if(typeof t=="string")return e.toString()+t;if(e=h.__toNumeric(e),t=h.__toNumeric(t),h.__isBigInt(e)&&h.__isBigInt(t))return h.add(e,t);if(typeof e=="number"&&typeof t=="number")return e+t;throw new TypeError("Cannot mix BigInt and other types, use explicit conversions")}static LT(e,t){return h.__compare(e,t,0)}static LE(e,t){return h.__compare(e,t,1)}static GT(e,t){return h.__compare(e,t,2)}static GE(e,t){return h.__compare(e,t,3)}static EQ(e,t){for(;;){if(h.__isBigInt(e))return h.__isBigInt(t)?h.equal(e,t):h.EQ(t,e);if(typeof e=="number"){if(h.__isBigInt(t))return h.__equalToNumber(t,e);if(typeof t!="object")return e==t;t=h.__toPrimitive(t)}else if(typeof e=="string"){if(h.__isBigInt(t))return e=h.__fromString(e),e!==null&&h.equal(e,t);if(typeof t!="object")return e==t;t=h.__toPrimitive(t)}else if(typeof e=="boolean"){if(h.__isBigInt(t))return h.__equalToNumber(t,+e);if(typeof t!="object")return e==t;t=h.__toPrimitive(t)}else if(typeof e=="symbol"){if(h.__isBigInt(t))return!1;if(typeof t!="object")return e==t;t=h.__toPrimitive(t)}else if(typeof e=="object"){if(typeof t=="object"&&t.constructor!==h)return e==t;e=h.__toPrimitive(e)}else return e==t}}static NE(e,t){return!h.EQ(e,t)}static DataViewGetBigInt64(e,t,r=!1){return h.asIntN(64,h.DataViewGetBigUint64(e,t,r))}static DataViewGetBigUint64(e,t,r=!1){const[i,o]=r?[4,0]:[0,4],a=e.getUint32(t+i,r),s=e.getUint32(t+o,r),c=new h(3,!1);return c.__setDigit(0,1073741823&s),c.__setDigit(1,(268435455&a)<<2|s>>>30),c.__setDigit(2,a>>>28),c.__trim()}static DataViewSetBigInt64(e,t,r,i=!1){h.DataViewSetBigUint64(e,t,r,i)}static DataViewSetBigUint64(e,t,r,i=!1){r=h.asUintN(64,r);let o=0,a=0;if(0<r.length&&(a=r.__digit(0),1<r.length)){const u=r.__digit(1);a|=u<<30,o=u>>>2,2<r.length&&(o|=r.__digit(2)<<28)}const[s,c]=i?[4,0]:[0,4];e.setUint32(t+s,o,i),e.setUint32(t+c,a,i)}static __zero(){return new h(0,!1)}static __oneDigit(e,t){const r=new h(1,t);return r.__setDigit(0,e),r}__copy(){const e=new h(this.length,this.sign);for(let t=0;t<this.length;t++)e[t]=this[t];return e}__trim(){let e=this.length,t=this[e-1];for(;t===0;)e--,t=this[e-1],this.pop();return e===0&&(this.sign=!1),this}__initializeDigits(){for(let e=0;e<this.length;e++)this[e]=0}static __decideRounding(e,t,r,i){if(0<t)return-1;let o;if(0>t)o=-t-1;else{if(r===0)return-1;r--,i=e.__digit(r),o=29}let a=1<<o;if(!(i&a))return-1;if(a-=1,(i&a)!=0)return 1;for(;0<r;)if(r--,e.__digit(r)!==0)return 1;return 0}static __fromDouble(e){h.__kBitConversionDouble[0]=e;const t=2047&h.__kBitConversionInts[h.__kBitConversionIntHigh]>>>20,r=t-1023,i=(0|r/30)+1,o=new h(i,0>e);let a=1048575&h.__kBitConversionInts[h.__kBitConversionIntHigh]|1048576,s=h.__kBitConversionInts[h.__kBitConversionIntLow];const c=20,u=r%30;let d,l=0;if(u<20){const f=c-u;l=f+32,d=a>>>f,a=a<<32-f|s>>>f,s<<=32-f}else if(u===20)l=32,d=a,a=s,s=0;else{const f=u-c;l=32-f,d=a<<f|s>>>32-f,a=s<<f,s=0}o.__setDigit(i-1,d);for(let f=i-2;0<=f;f--)0<l?(l-=30,d=a>>>2,a=a<<30|s>>>2,s<<=30):d=0,o.__setDigit(f,d);return o.__trim()}static __isWhitespace(e){return 13>=e&&9<=e||(159>=e?e==32:131071>=e?e==160||e==5760:196607>=e?(e&=131071,10>=e||e==40||e==41||e==47||e==95||e==4096):e==65279)}static __fromString(e,t=0){let r=0;const i=e.length;let o=0;if(o===i)return h.__zero();let a=e.charCodeAt(o);for(;h.__isWhitespace(a);){if(++o===i)return h.__zero();a=e.charCodeAt(o)}if(a===43){if(++o===i)return null;a=e.charCodeAt(o),r=1}else if(a===45){if(++o===i)return null;a=e.charCodeAt(o),r=-1}if(t===0){if(t=10,a===48){if(++o===i)return h.__zero();if(a=e.charCodeAt(o),a===88||a===120){if(t=16,++o===i)return null;a=e.charCodeAt(o)}else if(a===79||a===111){if(t=8,++o===i)return null;a=e.charCodeAt(o)}else if(a===66||a===98){if(t=2,++o===i)return null;a=e.charCodeAt(o)}}}else if(t===16&&a===48){if(++o===i)return h.__zero();if(a=e.charCodeAt(o),a===88||a===120){if(++o===i)return null;a=e.charCodeAt(o)}}if(r!=0&&t!==10)return null;for(;a===48;){if(++o===i)return h.__zero();a=e.charCodeAt(o)}const s=i-o;let c=h.__kMaxBitsPerChar[t],u=h.__kBitsPerCharTableMultiplier-1;if(s>1073741824/c)return null;const d=c*s+u>>>h.__kBitsPerCharTableShift,l=new h(0|(d+29)/30,!1),f=10>t?t:10,g=10<t?t-10:0;if(t&t-1){l.__initializeDigits();let p=!1,y=0;do{let _=0,T=1;for(;;){let S;if(a-48>>>0<f)S=a-48;else if((32|a)-97>>>0<g)S=(32|a)-87;else{p=!0;break}const D=T*t;if(1073741823<D)break;if(T=D,_=_*t+S,y++,++o===i){p=!0;break}a=e.charCodeAt(o)}u=30*h.__kBitsPerCharTableMultiplier-1;const v=0|(c*y+u>>>h.__kBitsPerCharTableShift)/30;l.__inplaceMultiplyAdd(T,_,v)}while(!p)}else{c>>=h.__kBitsPerCharTableShift;const p=[],y=[];let _=!1;do{let T=0,v=0;for(;;){let S;if(a-48>>>0<f)S=a-48;else if((32|a)-97>>>0<g)S=(32|a)-87;else{_=!0;break}if(v+=c,T=T<<c|S,++o===i){_=!0;break}if(a=e.charCodeAt(o),30<v+c)break}p.push(T),y.push(v)}while(!_);h.__fillFromParts(l,p,y)}if(o!==i){if(!h.__isWhitespace(a))return null;for(o++;o<i;o++)if(a=e.charCodeAt(o),!h.__isWhitespace(a))return null}return l.sign=r==-1,l.__trim()}static __fillFromParts(e,t,r){let i=0,o=0,a=0;for(let s=t.length-1;0<=s;s--){const c=t[s],u=r[s];o|=c<<a,a+=u,a===30?(e.__setDigit(i++,o),a=0,o=0):30<a&&(e.__setDigit(i++,1073741823&o),a-=30,o=c>>>u-a)}if(o!==0){if(i>=e.length)throw new Error("implementation bug");e.__setDigit(i++,o)}for(;i<e.length;i++)e.__setDigit(i,0)}static __toStringBasePowerOfTwo(e,t){const r=e.length;let i=t-1;i=(85&i>>>1)+(85&i),i=(51&i>>>2)+(51&i),i=(15&i>>>4)+(15&i);const o=i,a=t-1,s=e.__digit(r-1),c=h.__clz30(s);let u=0|(30*r-c+o-1)/o;if(e.sign&&u++,268435456<u)throw new Error("string too long");const d=Array(u);let l=u-1,f=0,g=0;for(let y=0;y<r-1;y++){const _=e.__digit(y),T=(f|_<<g)&a;d[l--]=h.__kConversionChars[T];const v=o-g;for(f=_>>>v,g=30-v;g>=o;)d[l--]=h.__kConversionChars[f&a],f>>>=o,g-=o}const p=(f|s<<g)&a;for(d[l--]=h.__kConversionChars[p],f=s>>>o-g;f!==0;)d[l--]=h.__kConversionChars[f&a],f>>>=o;if(e.sign&&(d[l--]="-"),l!=-1)throw new Error("implementation bug");return d.join("")}static __toStringGeneric(e,t,r){const i=e.length;if(i===0)return"";if(i===1){let y=e.__unsignedDigit(0).toString(t);return r===!1&&e.sign&&(y="-"+y),y}const o=30*i-h.__clz30(e.__digit(i-1)),a=h.__kMaxBitsPerChar[t],s=a-1;let c=o*h.__kBitsPerCharTableMultiplier;c+=s-1,c=0|c/s;const u=c+1>>1,d=h.exponentiate(h.__oneDigit(t,!1),h.__oneDigit(u,!1));let l,f;const g=d.__unsignedDigit(0);if(d.length===1&&32767>=g){l=new h(e.length,!1),l.__initializeDigits();let y=0;for(let _=2*e.length-1;0<=_;_--){const T=y<<15|e.__halfDigit(_);l.__setHalfDigit(_,0|T/g),y=0|T%g}f=y.toString(t)}else{const y=h.__absoluteDivLarge(e,d,!0,!0);l=y.quotient;const _=y.remainder.__trim();f=h.__toStringGeneric(_,t,!0)}l.__trim();let p=h.__toStringGeneric(l,t,!0);for(;f.length<u;)f="0"+f;return r===!1&&e.sign&&(p="-"+p),p+f}static __unequalSign(e){return e?-1:1}static __absoluteGreater(e){return e?-1:1}static __absoluteLess(e){return e?1:-1}static __compareToBigInt(e,t){const r=e.sign;if(r!==t.sign)return h.__unequalSign(r);const i=h.__absoluteCompare(e,t);return 0<i?h.__absoluteGreater(r):0>i?h.__absoluteLess(r):0}static __compareToNumber(e,t){if(h.__isOneDigitInt(t)){const r=e.sign,i=0>t;if(r!==i)return h.__unequalSign(r);if(e.length===0){if(i)throw new Error("implementation bug");return t===0?0:-1}if(1<e.length)return h.__absoluteGreater(r);const o=Math.abs(t),a=e.__unsignedDigit(0);return a>o?h.__absoluteGreater(r):a<o?h.__absoluteLess(r):0}return h.__compareToDouble(e,t)}static __compareToDouble(e,t){if(t!==t)return t;if(t===1/0)return-1;if(t===-1/0)return 1;const r=e.sign;if(r!==0>t)return h.__unequalSign(r);if(t===0)throw new Error("implementation bug: should be handled elsewhere");if(e.length===0)return-1;h.__kBitConversionDouble[0]=t;const i=2047&h.__kBitConversionInts[h.__kBitConversionIntHigh]>>>20;if(i==2047)throw new Error("implementation bug: handled elsewhere");const o=i-1023;if(0>o)return h.__absoluteGreater(r);const a=e.length;let s=e.__digit(a-1);const c=h.__clz30(s),u=30*a-c,d=o+1;if(u<d)return h.__absoluteLess(r);if(u>d)return h.__absoluteGreater(r);let l=1048576|1048575&h.__kBitConversionInts[h.__kBitConversionIntHigh],f=h.__kBitConversionInts[h.__kBitConversionIntLow];const g=20,p=29-c;if(p!==(0|(u-1)%30))throw new Error("implementation bug");let y,_=0;if(20>p){const T=g-p;_=T+32,y=l>>>T,l=l<<32-T|f>>>T,f<<=32-T}else if(p===20)_=32,y=l,l=f,f=0;else{const T=p-g;_=32-T,y=l<<T|f>>>32-T,l=f<<T,f=0}if(s>>>=0,y>>>=0,s>y)return h.__absoluteGreater(r);if(s<y)return h.__absoluteLess(r);for(let T=a-2;0<=T;T--){0<_?(_-=30,y=l>>>2,l=l<<30|f>>>2,f<<=30):y=0;const v=e.__unsignedDigit(T);if(v>y)return h.__absoluteGreater(r);if(v<y)return h.__absoluteLess(r)}if(l!==0||f!==0){if(_===0)throw new Error("implementation bug");return h.__absoluteLess(r)}return 0}static __equalToNumber(e,t){var r=Math.abs;return h.__isOneDigitInt(t)?t===0?e.length===0:e.length===1&&e.sign===0>t&&e.__unsignedDigit(0)===r(t):h.__compareToDouble(e,t)===0}static __comparisonResultToBool(e,t){return t===0?0>e:t===1?0>=e:t===2?0<e:t===3?0<=e:void 0}static __compare(e,t,r){if(e=h.__toPrimitive(e),t=h.__toPrimitive(t),typeof e=="string"&&typeof t=="string")switch(r){case 0:return e<t;case 1:return e<=t;case 2:return e>t;case 3:return e>=t}if(h.__isBigInt(e)&&typeof t=="string")return t=h.__fromString(t),t!==null&&h.__comparisonResultToBool(h.__compareToBigInt(e,t),r);if(typeof e=="string"&&h.__isBigInt(t))return e=h.__fromString(e),e!==null&&h.__comparisonResultToBool(h.__compareToBigInt(e,t),r);if(e=h.__toNumeric(e),t=h.__toNumeric(t),h.__isBigInt(e)){if(h.__isBigInt(t))return h.__comparisonResultToBool(h.__compareToBigInt(e,t),r);if(typeof t!="number")throw new Error("implementation bug");return h.__comparisonResultToBool(h.__compareToNumber(e,t),r)}if(typeof e!="number")throw new Error("implementation bug");if(h.__isBigInt(t))return h.__comparisonResultToBool(h.__compareToNumber(t,e),2^r);if(typeof t!="number")throw new Error("implementation bug");return r===0?e<t:r===1?e<=t:r===2?e>t:r===3?e>=t:void 0}__clzmsd(){return h.__clz30(this.__digit(this.length-1))}static __absoluteAdd(e,t,r){if(e.length<t.length)return h.__absoluteAdd(t,e,r);if(e.length===0)return e;if(t.length===0)return e.sign===r?e:h.unaryMinus(e);let i=e.length;(e.__clzmsd()===0||t.length===e.length&&t.__clzmsd()===0)&&i++;const o=new h(i,r);let a=0,s=0;for(;s<t.length;s++){const c=e.__digit(s)+t.__digit(s)+a;a=c>>>30,o.__setDigit(s,1073741823&c)}for(;s<e.length;s++){const c=e.__digit(s)+a;a=c>>>30,o.__setDigit(s,1073741823&c)}return s<o.length&&o.__setDigit(s,a),o.__trim()}static __absoluteSub(e,t,r){if(e.length===0)return e;if(t.length===0)return e.sign===r?e:h.unaryMinus(e);const i=new h(e.length,r);let o=0,a=0;for(;a<t.length;a++){const s=e.__digit(a)-t.__digit(a)-o;o=1&s>>>30,i.__setDigit(a,1073741823&s)}for(;a<e.length;a++){const s=e.__digit(a)-o;o=1&s>>>30,i.__setDigit(a,1073741823&s)}return i.__trim()}static __absoluteAddOne(e,t,r=null){const i=e.length;r===null?r=new h(i,t):r.sign=t;let o=1;for(let a=0;a<i;a++){const s=e.__digit(a)+o;o=s>>>30,r.__setDigit(a,1073741823&s)}return o!=0&&r.__setDigitGrow(i,1),r}static __absoluteSubOne(e,t){const r=e.length;t=t||r;const i=new h(t,!1);let o=1;for(let a=0;a<r;a++){const s=e.__digit(a)-o;o=1&s>>>30,i.__setDigit(a,1073741823&s)}if(o!=0)throw new Error("implementation bug");for(let a=r;a<t;a++)i.__setDigit(a,0);return i}static __absoluteAnd(e,t,r=null){let i=e.length,o=t.length,a=o;if(i<o){a=i;const u=e,d=i;e=t,i=o,t=u,o=d}let s=a;r===null?r=new h(s,!1):s=r.length;let c=0;for(;c<a;c++)r.__setDigit(c,e.__digit(c)&t.__digit(c));for(;c<s;c++)r.__setDigit(c,0);return r}static __absoluteAndNot(e,t,r=null){const i=e.length,o=t.length;let a=o;i<o&&(a=i);let s=i;r===null?r=new h(s,!1):s=r.length;let c=0;for(;c<a;c++)r.__setDigit(c,e.__digit(c)&~t.__digit(c));for(;c<i;c++)r.__setDigit(c,e.__digit(c));for(;c<s;c++)r.__setDigit(c,0);return r}static __absoluteOr(e,t,r=null){let i=e.length,o=t.length,a=o;if(i<o){a=i;const u=e,d=i;e=t,i=o,t=u,o=d}let s=i;r===null?r=new h(s,!1):s=r.length;let c=0;for(;c<a;c++)r.__setDigit(c,e.__digit(c)|t.__digit(c));for(;c<i;c++)r.__setDigit(c,e.__digit(c));for(;c<s;c++)r.__setDigit(c,0);return r}static __absoluteXor(e,t,r=null){let i=e.length,o=t.length,a=o;if(i<o){a=i;const u=e,d=i;e=t,i=o,t=u,o=d}let s=i;r===null?r=new h(s,!1):s=r.length;let c=0;for(;c<a;c++)r.__setDigit(c,e.__digit(c)^t.__digit(c));for(;c<i;c++)r.__setDigit(c,e.__digit(c));for(;c<s;c++)r.__setDigit(c,0);return r}static __absoluteCompare(e,t){const r=e.length-t.length;if(r!=0)return r;let i=e.length-1;for(;0<=i&&e.__digit(i)===t.__digit(i);)i--;return 0>i?0:e.__unsignedDigit(i)>t.__unsignedDigit(i)?1:-1}static __multiplyAccumulate(e,t,r,i){if(t===0)return;const o=32767&t,a=t>>>15;let s=0,c=0;for(let u,d=0;d<e.length;d++,i++){u=r.__digit(i);const l=e.__digit(d),f=32767&l,g=l>>>15,p=h.__imul(f,o),y=h.__imul(f,a),_=h.__imul(g,o),T=h.__imul(g,a);u+=c+p+s,s=u>>>30,u&=1073741823,u+=((32767&y)<<15)+((32767&_)<<15),s+=u>>>30,c=T+(y>>>15)+(_>>>15),r.__setDigit(i,1073741823&u)}for(;s!=0||c!==0;i++){let u=r.__digit(i);u+=s+c,c=0,s=u>>>30,r.__setDigit(i,1073741823&u)}}static __internalMultiplyAdd(e,t,r,i,o){let a=r,s=0;for(let c=0;c<i;c++){const u=e.__digit(c),d=h.__imul(32767&u,t),l=h.__imul(u>>>15,t),f=d+((32767&l)<<15)+s+a;a=f>>>30,s=l>>>15,o.__setDigit(c,1073741823&f)}if(o.length>i)for(o.__setDigit(i++,a+s);i<o.length;)o.__setDigit(i++,0);else if(a+s!==0)throw new Error("implementation bug")}__inplaceMultiplyAdd(e,t,r){r>this.length&&(r=this.length);const i=32767&e,o=e>>>15;let a=0,s=t;for(let c=0;c<r;c++){const u=this.__digit(c),d=32767&u,l=u>>>15,f=h.__imul(d,i),g=h.__imul(d,o),p=h.__imul(l,i),y=h.__imul(l,o);let _=s+f+a;a=_>>>30,_&=1073741823,_+=((32767&g)<<15)+((32767&p)<<15),a+=_>>>30,s=y+(g>>>15)+(p>>>15),this.__setDigit(c,1073741823&_)}if(a!=0||s!==0)throw new Error("implementation bug")}static __absoluteDivSmall(e,t,r=null){r===null&&(r=new h(e.length,!1));let i=0;for(let o,a=2*e.length-1;0<=a;a-=2){o=(i<<15|e.__halfDigit(a))>>>0;const s=0|o/t;i=0|o%t,o=(i<<15|e.__halfDigit(a-1))>>>0;const c=0|o/t;i=0|o%t,r.__setDigit(a>>>1,s<<15|c)}return r}static __absoluteModSmall(e,t){let r=0;for(let i=2*e.length-1;0<=i;i--)r=0|((r<<15|e.__halfDigit(i))>>>0)%t;return r}static __absoluteDivLarge(e,t,r,i){const o=t.__halfDigitLength(),a=t.length,s=e.__halfDigitLength()-o;let c=null;r&&(c=new h(s+2>>>1,!1),c.__initializeDigits());const u=new h(o+2>>>1,!1);u.__initializeDigits();const d=h.__clz15(t.__halfDigit(o-1));0<d&&(t=h.__specialLeftShift(t,d,0));const l=h.__specialLeftShift(e,d,1),f=t.__halfDigit(o-1);let g=0;for(let p,y=s;0<=y;y--){p=32767;const _=l.__halfDigit(y+o);if(_!==f){const v=(_<<15|l.__halfDigit(y+o-1))>>>0;p=0|v/f;let S=0|v%f;const D=t.__halfDigit(o-2),R=l.__halfDigit(y+o-2);for(;h.__imul(p,D)>>>0>(S<<16|R)>>>0&&(p--,S+=f,!(32767<S)););}h.__internalMultiplyAdd(t,p,0,a,u);let T=l.__inplaceSub(u,y,o+1);T!==0&&(T=l.__inplaceAdd(t,y,o),l.__setHalfDigit(y+o,32767&l.__halfDigit(y+o)+T),p--),r&&(1&y?g=p<<15:c.__setDigit(y>>>1,g|p))}if(i)return l.__inplaceRightShift(d),r?{quotient:c,remainder:l}:l;if(r)return c;throw new Error("unreachable")}static __clz15(e){return h.__clz30(e)-15}__inplaceAdd(e,t,r){let i=0;for(let o=0;o<r;o++){const a=this.__halfDigit(t+o)+e.__halfDigit(o)+i;i=a>>>15,this.__setHalfDigit(t+o,32767&a)}return i}__inplaceSub(e,t,r){let i=0;if(1&t){t>>=1;let o=this.__digit(t),a=32767&o,s=0;for(;s<r-1>>>1;s++){const d=e.__digit(s),l=(o>>>15)-(32767&d)-i;i=1&l>>>15,this.__setDigit(t+s,(32767&l)<<15|32767&a),o=this.__digit(t+s+1),a=(32767&o)-(d>>>15)-i,i=1&a>>>15}const c=e.__digit(s),u=(o>>>15)-(32767&c)-i;if(i=1&u>>>15,this.__setDigit(t+s,(32767&u)<<15|32767&a),t+s+1>=this.length)throw new RangeError("out of bounds");!(1&r)&&(o=this.__digit(t+s+1),a=(32767&o)-(c>>>15)-i,i=1&a>>>15,this.__setDigit(t+e.length,1073709056&o|32767&a))}else{t>>=1;let o=0;for(;o<e.length-1;o++){const d=this.__digit(t+o),l=e.__digit(o),f=(32767&d)-(32767&l)-i;i=1&f>>>15;const g=(d>>>15)-(l>>>15)-i;i=1&g>>>15,this.__setDigit(t+o,(32767&g)<<15|32767&f)}const a=this.__digit(t+o),s=e.__digit(o),c=(32767&a)-(32767&s)-i;i=1&c>>>15;let u=0;!(1&r)&&(u=(a>>>15)-(s>>>15)-i,i=1&u>>>15),this.__setDigit(t+o,(32767&u)<<15|32767&c)}return i}__inplaceRightShift(e){if(e===0)return;let t=this.__digit(0)>>>e;const r=this.length-1;for(let i=0;i<r;i++){const o=this.__digit(i+1);this.__setDigit(i,1073741823&o<<30-e|t),t=o>>>e}this.__setDigit(r,t)}static __specialLeftShift(e,t,r){const i=e.length,o=new h(i+r,!1);if(t===0){for(let s=0;s<i;s++)o.__setDigit(s,e.__digit(s));return 0<r&&o.__setDigit(i,0),o}let a=0;for(let s=0;s<i;s++){const c=e.__digit(s);o.__setDigit(s,1073741823&c<<t|a),a=c>>>30-t}return 0<r&&o.__setDigit(i,a),o}static __leftShiftByAbsolute(e,t){const r=h.__toShiftAmount(t);if(0>r)throw new RangeError("BigInt too big");const i=0|r/30,o=r%30,a=e.length,s=o!==0&&e.__digit(a-1)>>>30-o!=0,c=a+i+(s?1:0),u=new h(c,e.sign);if(o===0){let d=0;for(;d<i;d++)u.__setDigit(d,0);for(;d<c;d++)u.__setDigit(d,e.__digit(d-i))}else{let d=0;for(let l=0;l<i;l++)u.__setDigit(l,0);for(let l=0;l<a;l++){const f=e.__digit(l);u.__setDigit(l+i,1073741823&f<<o|d),d=f>>>30-o}if(s)u.__setDigit(a+i,d);else if(d!==0)throw new Error("implementation bug")}return u.__trim()}static __rightShiftByAbsolute(e,t){const r=e.length,i=e.sign,o=h.__toShiftAmount(t);if(0>o)return h.__rightShiftByMaximum(i);const a=0|o/30,s=o%30;let c=r-a;if(0>=c)return h.__rightShiftByMaximum(i);let u=!1;if(i){if(e.__digit(a)&(1<<s)-1)u=!0;else for(let l=0;l<a;l++)if(e.__digit(l)!==0){u=!0;break}}u&&s===0&&!~e.__digit(r-1)&&c++;let d=new h(c,i);if(s===0){d.__setDigit(c-1,0);for(let l=a;l<r;l++)d.__setDigit(l-a,e.__digit(l))}else{let l=e.__digit(a)>>>s;const f=r-a-1;for(let g=0;g<f;g++){const p=e.__digit(g+a+1);d.__setDigit(g,1073741823&p<<30-s|l),l=p>>>s}d.__setDigit(f,l)}return u&&(d=h.__absoluteAddOne(d,!0,d)),d.__trim()}static __rightShiftByMaximum(e){return e?h.__oneDigit(1,!0):h.__zero()}static __toShiftAmount(e){if(1<e.length)return-1;const t=e.__unsignedDigit(0);return t>h.__kMaxLengthBits?-1:t}static __toPrimitive(e,t="default"){if(typeof e!="object"||e.constructor===h)return e;if(typeof Symbol<"u"&&typeof Symbol.toPrimitive=="symbol"&&e[Symbol.toPrimitive]){const o=e[Symbol.toPrimitive](t);if(typeof o!="object")return o;throw new TypeError("Cannot convert object to primitive value")}const r=e.valueOf;if(r){const o=r.call(e);if(typeof o!="object")return o}const i=e.toString;if(i){const o=i.call(e);if(typeof o!="object")return o}throw new TypeError("Cannot convert object to primitive value")}static __toNumeric(e){return h.__isBigInt(e)?e:+e}static __isBigInt(e){return typeof e=="object"&&e!==null&&e.constructor===h}static __truncateToNBits(e,t){const r=0|(e+29)/30,i=new h(r,t.sign),o=r-1;for(let s=0;s<o;s++)i.__setDigit(s,t.__digit(s));let a=t.__digit(o);if(e%30!=0){const s=32-e%30;a=a<<s>>>s}return i.__setDigit(o,a),i.__trim()}static __truncateAndSubFromPowerOfTwo(e,t,r){var i=Math.min;const o=0|(e+29)/30,a=new h(o,r);let s=0;const c=o-1;let u=0;for(const g=i(c,t.length);s<g;s++){const p=0-t.__digit(s)-u;u=1&p>>>30,a.__setDigit(s,1073741823&p)}for(;s<c;s++)a.__setDigit(s,0|1073741823&-u);let d=c<t.length?t.__digit(c):0;const l=e%30;let f;if(l==0)f=0-d-u,f&=1073741823;else{const g=32-l;d=d<<g>>>g;const p=1<<32-g;f=p-d-u,f&=p-1}return a.__setDigit(c,f),a.__trim()}__digit(e){return this[e]}__unsignedDigit(e){return this[e]>>>0}__setDigit(e,t){this[e]=0|t}__setDigitGrow(e,t){this[e]=0|t}__halfDigitLength(){const e=this.length;return 32767>=this.__unsignedDigit(e-1)?2*e-1:2*e}__halfDigit(e){return 32767&this[e>>>1]>>>15*(1&e)}__setHalfDigit(e,t){const r=e>>>1,i=this.__digit(r),o=1&e?32767&i|t<<15:1073709056&i|32767&t;this.__setDigit(r,o)}static __digitPow(e,t){let r=1;for(;0<t;)1&t&&(r*=e),t>>>=1,e*=e;return r}static __detectBigEndian(){return h.__kBitConversionDouble[0]=-0,h.__kBitConversionInts[0]!==0}static __isOneDigitInt(e){return(1073741823&e)===e}}h.__kMaxLength=33554432,h.__kMaxLengthBits=h.__kMaxLength<<5,h.__kMaxBitsPerChar=[0,0,32,51,64,75,83,90,96,102,107,111,115,119,122,126,128,131,134,136,139,141,143,145,147,149,151,153,154,156,158,159,160,162,163,165,166],h.__kBitsPerCharTableShift=5,h.__kBitsPerCharTableMultiplier=1<<h.__kBitsPerCharTableShift,h.__kConversionChars=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],h.__kBitConversionBuffer=new ArrayBuffer(8),h.__kBitConversionDouble=new Float64Array(h.__kBitConversionBuffer),h.__kBitConversionInts=new Int32Array(h.__kBitConversionBuffer),h.__kBitConversionIntHigh=h.__detectBigEndian()?0:1,h.__kBitConversionIntLow=h.__detectBigEndian()?1:0,h.__clz30=Math.clz32?function(n){return Math.clz32(n)-2}:function(n){return n===0?30:0|29-(0|Math.log(n>>>0)/Math.LN2)},h.__imul=Math.imul||function(n,e){return 0|n*e};const mt=h.BigInt(0),ni=h.BigInt(1),$s=h.BigInt(2),Bl=h.BigInt(10),Vl=h.BigInt(24),ql=h.BigInt(60),Zl=h.BigInt(1e3),gi=h.BigInt(1e6),qr=h.BigInt(1e9),mu=h.multiply(h.BigInt(3600),qr),Xl=h.multiply(ql,qr),Sn=h.multiply(mu,Vl);function Kt(n){return typeof n=="bigint"?h.BigInt(n.toString(10)):n}function fu(n){return h.equal(h.remainder(n,$s),mt)}function Cn(n){return h.lessThan(n,mt)?h.unaryMinus(n):n}function ro(n,e){return h.lessThan(n,e)?-1:h.greaterThan(n,e)?1:0}function Ur(n,e){return{quotient:h.divide(n,e),remainder:h.remainder(n,e)}}var L0,P0;const C="slot-epochNanoSeconds",N="slot-iso-date",re="slot-iso-date-time",se="slot-time",b="slot-calendar",gu="slot-date-brand",pu="slot-year-month-brand",yu="slot-month-day-brand",V="slot-time-zone",He="slot-years",Fe="slot-months",rt="slot-weeks",Ge="slot-days",ze="slot-hours",Ye="slot-minutes",ke="slot-seconds",je="slot-milliseconds",We="slot-microseconds",it="slot-nanoseconds",_u="date",Eu="ym",Tu="md",wu="time",vu="datetime",Su="instant",Wn="original",nr="timezone-canonical",Fa="timezone-original",$r="calendar-id",bu="locale",Ga="options",Ru=new WeakMap,za=Symbol.for("@@Temporal__GetSlots");(L0=globalThis)[za]||(L0[za]=function(n){return Ru.get(n)});const Lo=globalThis[za],Ya=Symbol.for("@@Temporal__CreateSlots");(P0=globalThis)[Ya]||(P0[Ya]=function(n){Ru.set(n,Object.create(null))});const dn=globalThis[Ya];function Ke(n,...e){if(!n||typeof n!="object")return!1;const t=Lo(n);return!!t&&e.every(r=>r in t)}function m(n,e){var r;const t=(r=Lo(n))==null?void 0:r[e];if(t===void 0)throw new TypeError(`Missing internal slot ${e}`);return t}function U(n,e,t){const r=Lo(n);if(r===void 0)throw new TypeError("Missing slots for the given container");if(r[e])throw new TypeError(`${e} already has set`);r[e]=t}const ka={};function ln(n,e){Object.defineProperty(n.prototype,Symbol.toStringTag,{value:e,writable:!1,enumerable:!1,configurable:!0});const t=Object.getOwnPropertyNames(n);for(let i=0;i<t.length;i++){const o=t[i],a=Object.getOwnPropertyDescriptor(n,o);a.configurable&&a.enumerable&&(a.enumerable=!1,Object.defineProperty(n,o,a))}const r=Object.getOwnPropertyNames(n.prototype);for(let i=0;i<r.length;i++){const o=r[i],a=Object.getOwnPropertyDescriptor(n.prototype,o);a.configurable&&a.enumerable&&(a.enumerable=!1,Object.defineProperty(n.prototype,o,a))}ja(e,n),ja(`${e}.prototype`,n.prototype)}function ja(n,e){const t=`%${n}%`;if(ka[t]!==void 0)throw new Error(`intrinsic ${n} already exists`);ka[t]=e}function Ae(n){return ka[n]}function or(n,e){let t=n;if(t===0)return{div:t,mod:t};const r=Math.sign(t);t=Math.abs(t);const i=Math.trunc(1+Math.log10(t));if(e>=i)return{div:0*r,mod:r*t};if(e===0)return{div:r*t,mod:0*r};const o=t.toPrecision(i);return{div:r*Number.parseInt(o.slice(0,i-e),10),mod:r*Number.parseInt(o.slice(i-e),10)}}function pa(n,e,t){let r=n,i=t;if(r===0)return i;const o=Math.sign(r)||Math.sign(i);r=Math.abs(r),i=Math.abs(i);const a=r.toPrecision(Math.trunc(1+Math.log10(r)));if(i===0)return o*Number.parseInt(a+"0".repeat(e),10);const s=a+i.toPrecision(Math.trunc(1+Math.log10(i))).padStart(e,"0");return o*Number.parseInt(s,10)}function Po(n,e){const t=e==="negative";switch(n){case"ceil":return t?"zero":"infinity";case"floor":return t?"infinity":"zero";case"expand":return"infinity";case"trunc":return"zero";case"halfCeil":return t?"half-zero":"half-infinity";case"halfFloor":return t?"half-infinity":"half-zero";case"halfExpand":return"half-infinity";case"halfTrunc":return"half-zero";case"halfEven":return"half-even"}}function Uo(n,e,t,r,i){return i==="zero"?n:i==="infinity"?e:t<0?n:t>0?e:i==="half-zero"?n:i==="half-infinity"?e:r?n:e}class F{constructor(e){this.totalNs=Kt(e),this.sec=h.toNumber(h.divide(this.totalNs,qr)),this.subsec=h.toNumber(h.remainder(this.totalNs,qr))}static validateNew(e,t){if(h.greaterThan(Cn(e),F.MAX))throw new RangeError(`${t} of duration time units cannot exceed ${F.MAX} s`);return new F(e)}static fromEpochNsDiff(e,t){const r=h.subtract(Kt(e),Kt(t));return new F(r)}static fromComponents(e,t,r,i,o,a){const s=h.add(h.add(h.add(h.add(h.add(h.BigInt(a),h.multiply(h.BigInt(o),Zl)),h.multiply(h.BigInt(i),gi)),h.multiply(h.BigInt(r),qr)),h.multiply(h.BigInt(t),Xl)),h.multiply(h.BigInt(e),mu));return F.validateNew(s,"total")}abs(){return new F(Cn(this.totalNs))}add(e){return F.validateNew(h.add(this.totalNs,e.totalNs),"sum")}add24HourDays(e){return F.validateNew(h.add(this.totalNs,h.multiply(h.BigInt(e),Sn)),"sum")}addToEpochNs(e){return h.add(Kt(e),this.totalNs)}cmp(e){return ro(this.totalNs,e.totalNs)}divmod(e){const{quotient:t,remainder:r}=Ur(this.totalNs,h.BigInt(e));return{quotient:h.toNumber(t),remainder:new F(r)}}fdiv(e){const t=Kt(e),r=h.BigInt(t);let{quotient:i,remainder:o}=Ur(this.totalNs,r);const a=[];let s;const c=(h.lessThan(this.totalNs,mt)?-1:1)*Math.sign(h.toNumber(t));for(;!h.equal(o,mt)&&a.length<50;)o=h.multiply(o,Bl),{quotient:s,remainder:o}=Ur(o,r),a.push(Math.abs(h.toNumber(s)));return c*+(Cn(i).toString()+"."+a.join(""))}isZero(){return h.equal(this.totalNs,mt)}round(e,t){const r=Kt(e);if(h.equal(r,ni))return this;const{quotient:i,remainder:o}=Ur(this.totalNs,r),a=h.lessThan(this.totalNs,mt)?"negative":"positive",s=h.multiply(Cn(i),r),c=h.add(s,r),u=ro(Cn(h.multiply(o,$s)),r),d=Po(t,a),l=h.equal(Cn(this.totalNs),s)?s:Uo(s,c,u,fu(i),d),f=a==="positive"?l:h.unaryMinus(l);return F.validateNew(f,"rounding")}sign(){return this.cmp(new F(mt))}subtract(e){return F.validateNew(h.subtract(this.totalNs,e.totalNs),"difference")}}F.MAX=h.BigInt("9007199254740991999999999"),F.ZERO=new F(mt);const U0=/[A-Za-z._][A-Za-z._0-9+-]*/,pi=new RegExp(`(?:${/(?:[+-](?:[01][0-9]|2[0-3])(?::?[0-5][0-9])?)/.source}|(?:${U0.source})(?:\\/(?:${U0.source}))*)`),Du=/(?:[+-]\d{6}|\d{4})/,io=/(?:0[1-9]|1[0-2])/,Wa=/(?:0[1-9]|[12]\d|3[01])/,Kl=new RegExp(`(${Du.source})(?:-(${io.source})-(${Wa.source})|(${io.source})(${Wa.source}))`),Au=/(\d{2})(?::(\d{2})(?::(\d{2})(?:[.,](\d{1,9}))?)?|(\d{2})(?:(\d{2})(?:[.,](\d{1,9}))?)?)?/,Mu=/((?:[+-])(?:[01][0-9]|2[0-3])(?::?(?:[0-5][0-9])(?::?(?:[0-5][0-9])(?:[.,](?:\d{1,9}))?)?)?)/,xu=new RegExp(`([zZ])|${Mu.source}?`),mr=/\[(!)?([a-z_][a-z0-9_-]*)=([A-Za-z0-9]+(?:-[A-Za-z0-9]+)*)\]/g,Ql=new RegExp([`^${Kl.source}`,`(?:(?:[tT]|\\s+)${Au.source}(?:${xu.source})?)?`,`(?:\\[!?(${pi.source})\\])?`,`((?:${mr.source})*)$`].join("")),Jl=new RegExp([`^[tT]?${Au.source}`,`(?:${xu.source})?`,`(?:\\[!?${pi.source}\\])?`,`((?:${mr.source})*)$`].join("")),eh=new RegExp(`^(${Du.source})-?(${io.source})(?:\\[!?${pi.source}\\])?((?:${mr.source})*)$`),th=new RegExp(`^(?:--)?(${io.source})-?(${Wa.source})(?:\\[!?${pi.source}\\])?((?:${mr.source})*)$`),ya=/(\d+)(?:[.,](\d{1,9}))?/,nh=new RegExp(`(?:${ya.source}H)?(?:${ya.source}M)?(?:${ya.source}S)?`),rh=new RegExp(`^([+-])?P${/(?:(\d+)Y)?(?:(\d+)M)?(?:(\d+)W)?(?:(\d+)D)?/.source}(?:T(?!$)${nh.source})?$`,"i"),bn=864e5,oo=1e6*bn,ih=6e10,Iu=1e8*bn,fr=$t(Iu),ri=h.unaryMinus(fr),oh=h.add(h.subtract(ri,Sn),ni),ah=h.subtract(h.add(fr,Sn),ni),sh=146097*bn,$0=-271821,H0=275760,Zr=Date.UTC(1847,0,1),ch=["iso8601","hebrew","islamic","islamic-umalqura","islamic-tbla","islamic-civil","islamic-rgsa","islamicc","persian","ethiopic","ethioaa","ethiopic-amete-alem","coptic","chinese","dangi","roc","indian","buddhist","japanese","gregory"],uh=new Set(["ACT","AET","AGT","ART","AST","BET","BST","CAT","CNT","CST","CTT","EAT","ECT","IET","IST","JST","MIT","NET","NST","PLT","PNT","PRT","PST","SST","VST"]);function ce(n){return typeof n=="object"&&n!==null||typeof n=="function"}function $o(n){if(typeof n=="bigint")throw new TypeError("Cannot convert BigInt to number");return Number(n)}function Ho(n){if(typeof n=="symbol")throw new TypeError("Cannot convert a Symbol value to a String");return String(n)}function O(n){const e=$o(n);if(e===0)return 0;if(Number.isNaN(e)||e===1/0||e===-1/0)throw new RangeError("invalid number value");const t=Math.trunc(e);return t===0?0:t}function F0(n,e){const t=O(n);if(t<=0)throw e!==void 0?new RangeError(`property '${e}' cannot be a a number less than one`):new RangeError("Cannot convert a number less than one to a positive integer");return t}function bt(n){const e=$o(n);if(Number.isNaN(e))throw new RangeError("not a number");if(e===1/0||e===-1/0)throw new RangeError("infinity is out of range");if(!function(t){if(typeof t!="number"||Number.isNaN(t)||t===1/0||t===-1/0)return!1;const r=Math.abs(t);return Math.floor(r)===r}(e))throw new RangeError(`unsupported fractional value ${n}`);return e===0?0:e}function ii(n,e){return String(n).padStart(e,"0")}function ye(n){if(typeof n!="string")throw new TypeError(`expected a string, not ${String(n)}`);return n}function Ba(n,e){if(ce(n)){const t=n==null?void 0:n.toString();if(typeof t=="string"||typeof t=="number")return t;throw new TypeError("Cannot convert object to primitive value")}return n}const Va=["era","eraYear","year","month","monthCode","day","hour","minute","second","millisecond","microsecond","nanosecond","offset","timeZone"],dh={era:Ho,eraYear:O,year:O,month:F0,monthCode:function(n){const e=ye(Ba(n));if(e.length<3||e.length>4||e[0]!=="M"||"0123456789".indexOf(e[1])===-1||"0123456789".indexOf(e[2])===-1||e[1]+e[2]==="00"&&e[3]!=="L"||e[3]!=="L"&&e[3]!==void 0)throw new RangeError(`bad month code ${e}; must match M01-M99 or M00L-M99L`);return e},day:F0,hour:O,minute:O,second:O,millisecond:O,microsecond:O,nanosecond:O,offset:function(n){const e=ye(Ba(n));return Ar(e),e},timeZone:qe},lh={hour:0,minute:0,second:0,millisecond:0,microsecond:0,nanosecond:0},gr=[["years","year","date"],["months","month","date"],["weeks","week","date"],["days","day","date"],["hours","hour","time"],["minutes","minute","time"],["seconds","second","time"],["milliseconds","millisecond","time"],["microseconds","microsecond","time"],["nanoseconds","nanosecond","time"]],G0=Object.fromEntries(gr.map(n=>[n[0],n[1]])),hh=Object.fromEntries(gr.map(([n,e])=>[e,n])),Xr=gr.map(([,n])=>n),pr={day:oo,hour:36e11,minute:6e10,second:1e9,millisecond:1e6,microsecond:1e3,nanosecond:1},ao=["days","hours","microseconds","milliseconds","minutes","months","nanoseconds","seconds","weeks","years"],mh=Intl.DateTimeFormat,z0=new Map;function Cu(n){const e=ui(n);let t=z0.get(e);return t===void 0&&(t=new mh("en-us",{timeZone:e,hour12:!1,era:"short",year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric"}),z0.set(e,t)),t}function be(n){return Ke(n,C)&&!Ke(n,V,b)}function oe(n){return Ke(n,He,Fe,Ge,ze,Ye,ke,je,We,it)}function ae(n){return Ke(n,gu)}function ue(n){return Ke(n,se)}function te(n){return Ke(n,re)}function Re(n){return Ke(n,pu)}function ht(n){return Ke(n,yu)}function H(n){return Ke(n,C,V,b)}function E(n,e){if(!e(n))throw new TypeError("invalid receiver: method called with the wrong type of this-object")}function br(n){if(Ke(n,b)||Ke(n,V))throw new TypeError("with() does not support a calendar or timeZone property");if(ue(n))throw new TypeError("with() does not accept Temporal.PlainTime, use withPlainTime() instead");if(n.calendar!==void 0)throw new TypeError("with() does not support a calendar property");if(n.timeZone!==void 0)throw new TypeError("with() does not support a timeZone property")}function yi(n,e){return e==="never"||e==="auto"&&n==="iso8601"?"":`[${e==="critical"?"!":""}u-ca=${n}]`}function Fo(n){let e,t,r=!1;for(mr.lastIndex=0;t=mr.exec(n);){const{1:i,2:o,3:a}=t;if(o==="u-ca"){if(e===void 0)e=a,r=i==="!";else if(i==="!"||r)throw new RangeError(`Invalid annotations in ${n}: more than one u-ca present with critical flag`)}else if(i==="!")throw new RangeError(`Unrecognized annotation: !${o}=${a}`)}return e}function jt(n){const e=Ql.exec(n);if(!e)throw new RangeError(`invalid RFC 9557 string: ${n}`);const t=Fo(e[16]);let r=e[1];if(r==="-000000")throw new RangeError(`invalid RFC 9557 string: ${n}`);const i=+r,o=+(e[2]??e[4]??1),a=+(e[3]??e[5]??1),s=e[6]!==void 0,c=+(e[6]??0),u=+(e[7]??e[10]??0);let d=+(e[8]??e[11]??0);d===60&&(d=59);const l=(e[9]??e[12]??"")+"000000000",f=+l.slice(0,3),g=+l.slice(3,6),p=+l.slice(6,9);let y,_=!1;e[13]?(y=void 0,_=!0):e[14]&&(y=e[14]);const T=e[15];return ks(i,o,a,c,u,d,f,g,p),{year:i,month:o,day:a,time:s?{hour:c,minute:u,second:d,millisecond:f,microsecond:g,nanosecond:p}:"start-of-day",tzAnnotation:T,offset:y,z:_,calendar:t}}function Nu(n){const e=Jl.exec(n);let t,r,i,o,a,s,c;if(e){c=Fo(e[10]),t=+(e[1]??0),r=+(e[2]??e[5]??0),i=+(e[3]??e[6]??0),i===60&&(i=59);const u=(e[4]??e[7]??"")+"000000000";if(o=+u.slice(0,3),a=+u.slice(3,6),s=+u.slice(6,9),e[8])throw new RangeError("Z designator not supported for PlainTime")}else{let u,d;if({time:u,z:d,calendar:c}=jt(n),u==="start-of-day")throw new RangeError(`time is missing in string: ${n}`);if(d)throw new RangeError("Z designator not supported for PlainTime");({hour:t,minute:r,second:i,millisecond:o,microsecond:a,nanosecond:s}=u)}if(ko(t,r,i,o,a,s),/[tT ][0-9][0-9]/.test(n))return{hour:t,minute:r,second:i,millisecond:o,microsecond:a,nanosecond:s,calendar:c};try{const{month:u,day:d}=Fs(n);Hn(1972,u,d)}catch{try{const{year:u,month:d}=Hs(n);Hn(u,d,1)}catch{return{hour:t,minute:r,second:i,millisecond:o,microsecond:a,nanosecond:s,calendar:c}}}throw new RangeError(`invalid RFC 9557 time-only string ${n}; may need a T prefix`)}function Hs(n){const e=eh.exec(n);let t,r,i,o;if(e){i=Fo(e[3]);let a=e[1];if(a==="-000000")throw new RangeError(`invalid RFC 9557 string: ${n}`);if(t=+a,r=+e[2],o=1,i!==void 0&&i!=="iso8601")throw new RangeError("YYYY-MM format is only valid with iso8601 calendar")}else{let a;if({year:t,month:r,calendar:i,day:o,z:a}=jt(n),a)throw new RangeError("Z designator not supported for PlainYearMonth")}return{year:t,month:r,calendar:i,referenceISODay:o}}function Fs(n){const e=th.exec(n);let t,r,i,o;if(e){if(i=Fo(e[3]),t=+e[1],r=+e[2],i!==void 0&&i!=="iso8601")throw new RangeError("MM-DD format is only valid with iso8601 calendar")}else{let a;if({month:t,day:r,calendar:i,year:o,z:a}=jt(n),a)throw new RangeError("Z designator not supported for PlainMonthDay")}return{month:t,day:r,calendar:i,referenceISOYear:o}}const Ou=new RegExp(`^${pi.source}$`,"i"),Lu=new RegExp(`^${/([+-])([01][0-9]|2[0-3])(?::?([0-5][0-9])?)?/.source}$`);function Pu(n){const e=gh.test(n)?"Seconds not allowed in offset time zone":"Invalid time zone";throw new RangeError(`${e}: ${n}`)}function wn(n){return Ou.test(n)||Pu(n),Lu.test(n)?{offsetMinutes:Ar(n)/6e10}:{tzName:n}}function Kr(n,e,t,r){let i=n,o=e,a=t;switch(r){case"reject":Hn(i,o,a);break;case"constrain":({year:i,month:o,day:a}=Qu(i,o,a))}return{year:i,month:o,day:a}}function Go(n,e,t,r,i,o,a){let s=n,c=e,u=t,d=r,l=i,f=o;switch(a){case"reject":ko(s,c,u,d,l,f);break;case"constrain":s=Be(s,0,23),c=Be(c,0,59),u=Be(u,0,59),d=Be(d,0,999),l=Be(l,0,999),f=Be(f,0,999)}return{hour:s,minute:c,second:u,millisecond:d,microsecond:l,nanosecond:f}}function Uu(n){if(!ce(n))throw new TypeError("invalid duration-like");const e={years:void 0,months:void 0,weeks:void 0,days:void 0,hours:void 0,minutes:void 0,seconds:void 0,milliseconds:void 0,microseconds:void 0,nanoseconds:void 0};let t=!1;for(let r=0;r<ao.length;r++){const i=ao[r],o=n[i];o!==void 0&&(t=!0,e[i]=bt(o))}if(!t)throw new TypeError("invalid duration-like");return e}function Ce({years:n,months:e,weeks:t,days:r},i,o,a){return{years:n,months:a??e,weeks:o??t,days:i??r}}function j(n,e){return{isoDate:n,time:e}}function k(n){return an(n,"overflow",["constrain","reject"],"constrain")}function Qr(n){return an(n,"disambiguation",["compatible","earlier","later","reject"],"compatible")}function At(n,e){return an(n,"roundingMode",["ceil","floor","expand","trunc","halfCeil","halfFloor","halfExpand","halfTrunc","halfEven"],e)}function Ji(n,e){return an(n,"offset",["prefer","use","ignore","reject"],e)}function _i(n){return an(n,"calendarName",["auto","always","never","critical"],"auto")}function Rr(n){let e=n.roundingIncrement;if(e===void 0)return 1;const t=O(e);if(t<1||t>1e9)throw new RangeError(`roundingIncrement must be at least 1 and at most 1e9, not ${e}`);return t}function Dr(n,e,t){const r=t?e:e-1;if(n>r)throw new RangeError(`roundingIncrement must be at least 1 and less than ${r}, not ${n}`);if(e%n!=0)throw new RangeError(`Rounding increment must divide evenly into ${e}`)}function Ei(n){const e=n.fractionalSecondDigits;if(e===void 0)return"auto";if(typeof e!="number"){if(Ho(e)!=="auto")throw new RangeError(`fractionalSecondDigits must be 'auto' or 0 through 9, not ${e}`);return"auto"}const t=Math.floor(e);if(!Number.isFinite(t)||t<0||t>9)throw new RangeError(`fractionalSecondDigits must be 'auto' or 0 through 9, not ${e}`);return t}function Ti(n,e){switch(n){case"minute":return{precision:"minute",unit:"minute",increment:1};case"second":return{precision:0,unit:"second",increment:1};case"millisecond":return{precision:3,unit:"millisecond",increment:1};case"microsecond":return{precision:6,unit:"microsecond",increment:1};case"nanosecond":return{precision:9,unit:"nanosecond",increment:1}}switch(e){case"auto":return{precision:e,unit:"nanosecond",increment:1};case 0:return{precision:e,unit:"second",increment:1};case 1:case 2:case 3:return{precision:e,unit:"millisecond",increment:10**(3-e)};case 4:case 5:case 6:return{precision:e,unit:"microsecond",increment:10**(6-e)};case 7:case 8:case 9:return{precision:e,unit:"nanosecond",increment:10**(9-e)};default:throw new RangeError(`fractionalSecondDigits must be 'auto' or 0 through 9, not ${e}`)}}const un=Symbol("~required~");function at(n,e,t,r,i=[]){let o=[];for(let u=0;u<gr.length;u++){const d=gr[u],l=d[1],f=d[2];t!=="datetime"&&t!==f||o.push(l)}o=o.concat(i);let a=r;a===un?a=void 0:a!==void 0&&o.push(a);let s=[];s=s.concat(o);for(let u=0;u<o.length;u++){const d=o[u],l=hh[d];l!==void 0&&s.push(l)}let c=an(n,e,s,a);if(c===void 0&&r===un)throw new RangeError(`${e} is required`);return c&&c in G0?G0[c]:c}function _a(n){const e=n.relativeTo;if(e===void 0)return{};let t,r,i,o,a,s="option",c=!1;if(ce(e)){if(H(e))return{zonedRelativeTo:e};if(ae(e))return{plainRelativeTo:e};if(te(e))return{plainRelativeTo:Ve(m(e,re).isoDate,m(e,b))};i=Ri(e);const u=pt(i,e,["year","month","monthCode","day"],["hour","minute","second","millisecond","microsecond","nanosecond","offset","timeZone"],[]);({isoDate:t,time:r}=vi(i,u,"constrain")),{offset:a,timeZone:o}=u,a===void 0&&(s="wall")}else{let u,d,l,f,g;if({year:l,month:f,day:g,time:r,calendar:i,tzAnnotation:u,offset:a,z:d}=jt(ye(e)),u)o=qe(u),d?s="exact":a||(s="wall"),c=!0;else if(d)throw new RangeError("Z designator not supported for PlainDate relativeTo; either remove the Z or add a bracketed time zone");i||(i="iso8601"),i=Qe(i),t={year:l,month:f,day:g}}return o===void 0?{plainRelativeTo:Ve(t,i)}:{zonedRelativeTo:xe(so(t,r,s,s==="option"?Ar(a):0,o,"compatible","reject",c),o,i)}}function Qt(n){return m(n,He)!==0?"year":m(n,Fe)!==0?"month":m(n,rt)!==0?"week":m(n,Ge)!==0?"day":m(n,ze)!==0?"hour":m(n,Ye)!==0?"minute":m(n,ke)!==0?"second":m(n,je)!==0?"millisecond":m(n,We)!==0?"microsecond":"nanosecond"}function rn(n,e){return Xr.indexOf(n)>Xr.indexOf(e)?e:n}function Ot(n){return n==="year"||n==="month"||n==="week"}function Jt(n){return Ot(n)||n==="day"?"date":"time"}function Dn(n){return Ae("%calendarImpl%")(n)}function wi(n){return Ae("%calendarImpl%")(m(n,b))}function Xe(n,e,t="date"){const r=Object.create(null),i=Dn(n).isoToDate(e,{year:!0,monthCode:!0,day:!0});return r.monthCode=i.monthCode,t!=="month-day"&&t!=="date"||(r.day=i.day),t!=="year-month"&&t!=="date"||(r.year=i.year),r}function pt(n,e,t,r,i){const o=Dn(n).extraFields(t),a=t.concat(r,o),s=Object.create(null);let c=!1;a.sort();for(let u=0;u<a.length;u++){const d=a[u],l=e[d];if(l!==void 0)c=!0,s[d]=(0,dh[d])(l);else if(i!=="partial"){if(i.includes(d))throw new TypeError(`required property '${d}' missing or undefined`);s[d]=lh[d]}}if(i==="partial"&&!c)throw new TypeError("no supported properties found");return s}function qa(n,e="complete"){const t=["hour","microsecond","millisecond","minute","nanosecond","second"];let r=!1;const i=Object.create(null);for(let o=0;o<t.length;o++){const a=t[o],s=n[a];s!==void 0?(i[a]=O(s),r=!0):e==="complete"&&(i[a]=0)}if(!r)throw new TypeError("invalid time-like");return i}function Hr(n,e){if(ce(n)){if(ae(n))return k(I(e)),Ve(m(n,N),m(n,b));if(H(n)){const c=wt(m(n,V),m(n,C));return k(I(e)),Ve(c.isoDate,m(n,b))}if(te(n))return k(I(e)),Ve(m(n,re).isoDate,m(n,b));const s=Ri(n);return Ve(Rn(s,pt(s,n,["year","month","monthCode","day"],[],[]),k(I(e))),s)}let{year:t,month:r,day:i,calendar:o,z:a}=jt(ye(n));if(a)throw new RangeError("Z designator not supported for PlainDate");return o||(o="iso8601"),o=Qe(o),k(I(e)),Ve({year:t,month:r,day:i},o)}function vi(n,e,t){return j(Rn(n,e,t),Go(e.hour,e.minute,e.second,e.millisecond,e.microsecond,e.nanosecond,t))}function Fr(n,e){let t,r,i;if(ce(n)){if(te(n))return k(I(e)),yt(m(n,re),m(n,b));if(H(n)){const s=wt(m(n,V),m(n,C));return k(I(e)),yt(s,m(n,b))}if(ae(n))return k(I(e)),yt(j(m(n,N),{deltaDays:0,hour:0,minute:0,second:0,millisecond:0,microsecond:0,nanosecond:0}),m(n,b));i=Ri(n);const o=pt(i,n,["year","month","monthCode","day"],["hour","minute","second","millisecond","microsecond","nanosecond"],[]),a=k(I(e));({isoDate:t,time:r}=vi(i,o,a))}else{let o,a,s,c;if({year:a,month:s,day:c,time:r,calendar:i,z:o}=jt(ye(n)),o)throw new RangeError("Z designator not supported for PlainDateTime");r==="start-of-day"&&(r={deltaDays:0,hour:0,minute:0,second:0,millisecond:0,microsecond:0,nanosecond:0}),ks(a,s,c,r.hour,r.minute,r.second,r.millisecond,r.microsecond,r.nanosecond),i||(i="iso8601"),i=Qe(i),k(I(e)),t={year:a,month:s,day:c}}return yt(j(t,r),i)}function Tt(n){const e=Ae("%Temporal.Duration%");if(oe(n))return new e(m(n,He),m(n,Fe),m(n,rt),m(n,Ge),m(n,ze),m(n,Ye),m(n,ke),m(n,je),m(n,We),m(n,it));if(!ce(n))return function(i){const{years:o,months:a,weeks:s,days:c,hours:u,minutes:d,seconds:l,milliseconds:f,microseconds:g,nanoseconds:p}=function(y){const _=rh.exec(y);if(!_)throw new RangeError(`invalid duration: ${y}`);if(_.every((hn,qn)=>qn<2||hn===void 0))throw new RangeError(`invalid duration: ${y}`);const T=_[1]==="-"?-1:1,v=_[2]===void 0?0:O(_[2])*T,S=_[3]===void 0?0:O(_[3])*T,D=_[4]===void 0?0:O(_[4])*T,R=_[5]===void 0?0:O(_[5])*T,G=_[6]===void 0?0:O(_[6])*T,Y=_[7],q=_[8],L=_[9],J=_[10],W=_[11];let $=0,le=0,ge=0;if(Y!==void 0){if(q??L??J??W)throw new RangeError("only the smallest unit can be fractional");ge=3600*O((Y+"000000000").slice(0,9))*T}else if($=q===void 0?0:O(q)*T,L!==void 0){if(J??W)throw new RangeError("only the smallest unit can be fractional");ge=60*O((L+"000000000").slice(0,9))*T}else le=J===void 0?0:O(J)*T,W!==void 0&&(ge=O((W+"000000000").slice(0,9))*T);const Me=ge%1e3,ut=Math.trunc(ge/1e3)%1e3,dt=Math.trunc(ge/1e6)%1e3;return le+=Math.trunc(ge/1e9)%60,$+=Math.trunc(ge/6e10),jo(v,S,D,R,G,$,le,dt,ut,Me),{years:v,months:S,weeks:D,days:R,hours:G,minutes:$,seconds:le,milliseconds:dt,microseconds:ut,nanoseconds:Me}}(i);return new(Ae("%Temporal.Duration%"))(o,a,s,c,u,d,l,f,g,p)}(ye(n));const t={years:0,months:0,weeks:0,days:0,hours:0,minutes:0,seconds:0,milliseconds:0,microseconds:0,nanoseconds:0};let r=Uu(n);for(let i=0;i<ao.length;i++){const o=ao[i],a=r[o];a!==void 0&&(t[o]=a)}return new e(t.years,t.months,t.weeks,t.days,t.hours,t.minutes,t.seconds,t.milliseconds,t.microseconds,t.nanoseconds)}function Gr(n){let e;if(ce(n)){if(be(n)||H(n))return Pt(m(n,C));e=Ba(n)}else e=n;const{year:t,month:r,day:i,time:o,offset:a,z:s}=function(y){const _=jt(y);if(!_.z&&!_.offset)throw new RangeError("Temporal.Instant requires a time zone offset");return _}(ye(e)),{hour:c=0,minute:u=0,second:d=0,millisecond:l=0,microsecond:f=0,nanosecond:g=0}=o==="start-of-day"?{}:o,p=ci(t,r,i,c,u,d,l,f,g-(s?0:Ar(a)));return dr(p.isoDate),Pt(De(p))}function Y0(n,e){if(ce(n)){if(ht(n))return k(I(e)),ar(m(n,N),m(n,b));let s;return Ke(n,b)?s=m(n,b):(s=n.calendar,s===void 0&&(s="iso8601"),s=bi(s)),ar(co(s,pt(s,n,["year","month","monthCode","day"],[],[]),k(I(e))),s)}let{month:t,day:r,referenceISOYear:i,calendar:o}=Fs(ye(n));if(o===void 0&&(o="iso8601"),o=Qe(o),k(I(e)),o==="iso8601")return ar({year:1972,month:t,day:r},o);let a={year:i,month:t,day:r};return Bn(a),a=co(o,Xe(o,a,"month-day"),"constrain"),ar(a,o)}function yn(n,e){let t;if(ce(n)){if(ue(n))return k(I(e)),tn(m(n,se));if(te(n))return k(I(e)),tn(m(n,re).time);if(H(n)){const u=wt(m(n,V),m(n,C));return k(I(e)),tn(u.time)}const{hour:r,minute:i,second:o,millisecond:a,microsecond:s,nanosecond:c}=qa(n);t=Go(r,i,o,a,s,c,k(I(e)))}else t=Nu(ye(n)),k(I(e));return tn(t)}function $u(n){return n===void 0?{deltaDays:0,hour:0,minute:0,second:0,millisecond:0,microsecond:0,nanosecond:0}:m(yn(n),se)}function zr(n,e){if(ce(n)){if(Re(n))return k(I(e)),ur(m(n,N),m(n,b));const s=Ri(n);return ur(oi(s,pt(s,n,["year","month","monthCode"],[],[]),k(I(e))),s)}let{year:t,month:r,referenceISODay:i,calendar:o}=Hs(ye(n));o===void 0&&(o="iso8601"),o=Qe(o),k(I(e));let a={year:t,month:r,day:i};return js(a),a=oi(o,Xe(o,a,"year-month"),"constrain"),ur(a,o)}function so(n,e,t,r,i,o,a,s){if(e==="start-of-day")return gn(i,n);const c=j(n,e);if(t==="wall"||a==="ignore")return Oe(i,c,o);if(t==="exact"||a==="use"){const l=ci(n.year,n.month,n.day,e.hour,e.minute,e.second,e.millisecond,e.microsecond,e.nanosecond-r);dr(l.isoDate);const f=De(l);return Gt(f),f}dr(n);const u=De(c),d=ai(i,c);for(let l=0;l<d.length;l++){const f=d[l],g=h.toNumber(h.subtract(u,f)),p=_n(g,6e10,"halfExpand");if(g===r||s&&p===r)return f}if(a==="reject"){const l=Za(r),f=si(c,"iso8601","auto");throw new RangeError(`Offset ${l} is invalid for ${f} in ${i}`)}return Bu(d,i,c,o)}function Yr(n,e){let t,r,i,o,a,s,c,u=!1,d="option";if(ce(n)){if(H(n)){const y=I(e);return Qr(y),Ji(y,"reject"),k(y),xe(m(n,C),m(n,V),m(n,b))}a=Ri(n);const f=pt(a,n,["year","month","monthCode","day"],["hour","minute","second","millisecond","microsecond","nanosecond","offset","timeZone"],["timeZone"]);({offset:o,timeZone:i}=f),o===void 0&&(d="wall");const g=I(e);s=Qr(g),c=Ji(g,"reject");const p=k(g);({isoDate:t,time:r}=vi(a,f,p))}else{let f,g,p,y,_;({year:p,month:y,day:_,time:r,tzAnnotation:f,offset:o,z:g,calendar:a}=function(v){const S=jt(v);if(!S.tzAnnotation)throw new RangeError("Temporal.ZonedDateTime requires a time zone ID in brackets");return S}(ye(n))),i=qe(f),g?d="exact":o||(d="wall"),a||(a="iso8601"),a=Qe(a),u=!0;const T=I(e);s=Qr(T),c=Ji(T,"reject"),k(T),t={year:p,month:y,day:_}}let l=0;return d==="option"&&(l=Ar(o)),xe(so(t,r,d,l,i,s,c,u),i,a)}function Hu(n,e,t){Bn(e),dn(n),U(n,N,e),U(n,b,t),U(n,gu,!0)}function Ve(n,e){const t=Ae("%Temporal.PlainDate%"),r=Object.create(t.prototype);return Hu(r,n,e),r}function Fu(n,e,t){Fn(e),dn(n),U(n,re,e),U(n,b,t)}function yt(n,e){const t=Ae("%Temporal.PlainDateTime%"),r=Object.create(t.prototype);return Fu(r,n,e),r}function Gu(n,e,t){Bn(e),dn(n),U(n,N,e),U(n,b,t),U(n,yu,!0)}function ar(n,e){const t=Ae("%Temporal.PlainMonthDay%"),r=Object.create(t.prototype);return Gu(r,n,e),r}function zu(n,e){dn(n),U(n,se,e)}function tn(n){const e=Ae("%Temporal.PlainTime%"),t=Object.create(e.prototype);return zu(t,n),t}function Yu(n,e,t){js(e),dn(n),U(n,N,e),U(n,b,t),U(n,pu,!0)}function ur(n,e){const t=Ae("%Temporal.PlainYearMonth%"),r=Object.create(t.prototype);return Yu(r,n,e),r}function ku(n,e){Gt(e),dn(n),U(n,C,e)}function Pt(n){const e=Ae("%Temporal.Instant%"),t=Object.create(e.prototype);return ku(t,n),t}function ju(n,e,t,r){Gt(e),dn(n),U(n,C,e),U(n,V,t),U(n,b,r)}function xe(n,e,t="iso8601"){const r=Ae("%Temporal.ZonedDateTime%"),i=Object.create(r.prototype);return ju(i,n,e,t),i}function k0(n){return Va.filter(e=>n[e]!==void 0)}function $n(n,e,t){const r=k0(t),i=Dn(n).fieldKeysToIgnore(r),o=Object.create(null),a=k0(e);for(let s=0;s<Va.length;s++){let c;const u=Va[s];a.includes(u)&&!i.includes(u)&&(c=e[u]),r.includes(u)&&(c=t[u]),c!==void 0&&(o[u]=c)}return o}function ft(n,e,t,r){const i=Dn(n).dateAdd(e,t,r);return Bn(i),i}function Si(n,e,t,r){return Dn(n).dateUntil(e,t,r)}function bi(n){if(ce(n)&&Ke(n,b))return m(n,b);const e=ye(n);try{return Qe(e)}catch{}let t;try{({calendar:t}=jt(e))}catch{try{({calendar:t}=Nu(e))}catch{try{({calendar:t}=Hs(e))}catch{({calendar:t}=Fs(e))}}}return t||(t="iso8601"),Qe(t)}function Ri(n){if(Ke(n,b))return m(n,b);const{calendar:e}=n;return e===void 0?"iso8601":bi(e)}function Ft(n,e){return Qe(n)===Qe(e)}function Rn(n,e,t){const r=Dn(n);r.resolveFields(e,"date");const i=r.dateToISO(e,t);return Bn(i),i}function oi(n,e,t){const r=Dn(n);r.resolveFields(e,"year-month"),e.day=1;const i=r.dateToISO(e,t);return js(i),i}function co(n,e,t){const r=Dn(n);r.resolveFields(e,"month-day");const i=r.monthDayToISOReferenceDate(e,t);return Bn(i),i}function qe(n){if(ce(n)&&H(n))return m(n,V);const e=ye(n);if(e==="UTC")return"UTC";const{tzName:t,offsetMinutes:r}=function(o){const{tzAnnotation:a,offset:s,z:c}=function(u){if(Ou.test(u))return{tzAnnotation:u,offset:void 0,z:!1};try{const{tzAnnotation:d,offset:l,z:f}=jt(u);if(f||d||l)return{tzAnnotation:d,offset:l,z:f}}catch{}Pu(u)}(o);return a?wn(a):c?wn("UTC"):s?wn(s):void 0}(e);if(r!==void 0)return Gs(r);const i=uo(t);if(!i)throw new RangeError(`Unrecognized time zone ${t}`);return i.identifier}function Wu(n,e){if(n===e)return!0;const t=wn(n).offsetMinutes,r=wn(e).offsetMinutes;if(t===void 0&&r===void 0){const i=uo(e);if(!i)return!1;const o=uo(n);return!!o&&o.primaryIdentifier===i.primaryIdentifier}return t===r}function nn(n,e){const t=wn(n).offsetMinutes;return t!==void 0?6e10*t:Xa(n,e)}function Za(n){const e=n<0?"-":"+",t=Math.abs(n),r=Math.floor(t/36e11),i=Math.floor(t/6e10)%60,o=Math.floor(t/1e9)%60,a=t%1e9;return`${e}${zo(r,i,o,a,o===0&&a===0?"minute":"auto")}`}function wt(n,e){const t=nn(n,e);let{isoDate:{year:r,month:i,day:o},time:{hour:a,minute:s,second:c,millisecond:u,microsecond:d,nanosecond:l}}=Zu(e);return ci(r,i,o,a,s,c,u,d,l+t)}function Oe(n,e,t){return Bu(ai(n,e),n,e,t)}function Bu(n,e,t,r){const i=n.length;if(i===1)return n[0];if(i)switch(r){case"compatible":case"earlier":return n[0];case"later":return n[i-1];case"reject":throw new RangeError("multiple instants found")}if(r==="reject")throw new RangeError("multiple instants found");const o=De(t),a=h.subtract(o,Sn);Gt(a);const s=nn(e,a),c=h.add(o,Sn);Gt(c);const u=nn(e,c)-s;switch(r){case"earlier":{const d=F.fromComponents(0,0,0,0,0,-u),l=yr(t.time,d);return ai(e,j(st(t.isoDate.year,t.isoDate.month,t.isoDate.day+l.deltaDays),l))[0]}case"compatible":case"later":{const d=F.fromComponents(0,0,0,0,0,u),l=yr(t.time,d),f=ai(e,j(st(t.isoDate.year,t.isoDate.month,t.isoDate.day+l.deltaDays),l));return f[f.length-1]}}}function ai(n,e){if(n==="UTC")return dr(e.isoDate),[De(e)];const t=wn(n).offsetMinutes;if(t!==void 0){const r=ci(e.isoDate.year,e.isoDate.month,e.isoDate.day,e.time.hour,e.time.minute-t,e.time.second,e.time.millisecond,e.time.microsecond,e.time.nanosecond);dr(r.isoDate);const i=De(r);return Gt(i),[i]}return dr(e.isoDate),function(r,i){let o=De(i),a=h.subtract(o,Sn);h.lessThan(a,ri)&&(a=o);let s=h.add(o,Sn);h.greaterThan(s,fr)&&(s=o);const c=Xa(r,a),u=Xa(r,s);return(c===u?[c]:[c,u]).map(l=>{const f=h.subtract(o,h.BigInt(l)),g=function(p,y){const{epochMilliseconds:_,time:{millisecond:T,microsecond:v,nanosecond:S}}=Zu(y),{year:D,month:R,day:G,hour:Y,minute:q,second:L}=Xu(p,_);return ci(D,R,G,Y,q,L,T,v,S)}(r,f);if(_r(i,g)===0)return Gt(f),f}).filter(l=>l!==void 0)}(n,e)}function gn(n,e){const t=j(e,{deltaDays:0,hour:0,minute:0,second:0,millisecond:0,microsecond:0,nanosecond:0}),r=ai(n,t);if(r.length)return r[0];const i=De(t),o=h.subtract(i,Sn);return Gt(o),Ys(n,o)}function Di(n){let e;return e=n<0||n>9999?(n<0?"-":"+")+ii(Math.abs(n),6):ii(n,4),e}function gt(n){return ii(n,2)}function Vu(n,e){let t;if(e==="auto"){if(n===0)return"";t=ii(n,9).replace(/0+$/,"")}else{if(e===0)return"";t=ii(n,9).slice(0,e)}return`.${t}`}function zo(n,e,t,r,i){let o=`${gt(n)}:${gt(e)}`;return i==="minute"||(o+=`:${gt(t)}`,o+=Vu(r,i)),o}function j0(n,e,t){let r=e;r===void 0&&(r="UTC");const i=m(n,C),o=si(wt(r,i),"iso8601",t,"never");let a="Z";return e!==void 0&&(a=qu(nn(r,i))),`${o}${a}`}function Yi(n,e){const t=m(n,He),r=m(n,Fe),i=m(n,rt),o=m(n,Ge),a=m(n,ze),s=m(n,Ye),c=ho(n);let u="";t!==0&&(u+=`${Math.abs(t)}Y`),r!==0&&(u+=`${Math.abs(r)}M`),i!==0&&(u+=`${Math.abs(i)}W`),o!==0&&(u+=`${Math.abs(o)}D`);let d="";a!==0&&(d+=`${Math.abs(a)}H`),s!==0&&(d+=`${Math.abs(s)}M`);const l=F.fromComponents(0,0,m(n,ke),m(n,je),m(n,We),m(n,it));l.isZero()&&!["second","millisecond","microsecond","nanosecond"].includes(Qt(n))&&e==="auto"||(d+=`${Math.abs(l.sec)}${Vu(Math.abs(l.subsec),e)}S`);let f=`${c<0?"-":""}P${u}`;return d&&(f=`${f}T${d}`),f}function W0(n,e="auto"){const{year:t,month:r,day:i}=m(n,N);return`${Di(t)}-${gt(r)}-${gt(i)}${yi(m(n,b),e)}`}function B0({hour:n,minute:e,second:t,millisecond:r,microsecond:i,nanosecond:o},a){return zo(n,e,t,1e6*r+1e3*i+o,a)}function si(n,e,t,r="auto"){const{isoDate:{year:i,month:o,day:a},time:{hour:s,minute:c,second:u,millisecond:d,microsecond:l,nanosecond:f}}=n;return`${Di(i)}-${gt(o)}-${gt(a)}T${zo(s,c,u,1e6*d+1e3*l+f,t)}${yi(e,r)}`}function V0(n,e="auto"){const{year:t,month:r,day:i}=m(n,N);let o=`${gt(r)}-${gt(i)}`;const a=m(n,b);e!=="always"&&e!=="critical"&&a==="iso8601"||(o=`${Di(t)}-${o}`);const s=yi(a,e);return s&&(o+=s),o}function q0(n,e="auto"){const{year:t,month:r,day:i}=m(n,N);let o=`${Di(t)}-${gt(r)}`;const a=m(n,b);e!=="always"&&e!=="critical"&&a==="iso8601"||(o+=`-${gt(i)}`);const s=yi(a,e);return s&&(o+=s),o}function Z0(n,e,t="auto",r="auto",i="auto",o=void 0){let a=m(n,C);if(o){const{unit:d,increment:l,roundingMode:f}=o;a=es(a,l,d,f)}const s=m(n,V),c=nn(s,a);let u=si(wt(s,a),"iso8601",e,"never");return i!=="never"&&(u+=qu(c)),r!=="never"&&(u+=`[${r==="critical"?"!":""}${s}]`),u+=yi(m(n,b),t),u}function X0(n){return Lu.test(n)}function Ar(n){const e=ph.exec(n);if(!e)throw new RangeError(`invalid time zone offset: ${n}; must match ±HH:MM[:SS.SSSSSSSSS]`);return(e[1]==="-"?-1:1)*(1e9*(60*(60*+e[2]+ +(e[3]||0))+ +(e[4]||0))+ +((e[5]||0)+"000000000").slice(0,9))}let Mn;const fh=Object.assign(Object.create(null),{"/":!0,"-":!0,_:!0});function uo(n){var o;if(Mn===void 0){const a=(o=Intl.supportedValuesOf)==null?void 0:o.call(Intl,"timeZone");if(a){Mn=new Map;for(let s=0;s<a.length;s++){const c=a[s];Mn.set(ui(c),c)}}else Mn=null}const e=ui(n);let t=Mn==null?void 0:Mn.get(e);if(t)return{identifier:t,primaryIdentifier:t};try{t=Cu(n).resolvedOptions().timeZone}catch{return}if(e==="antarctica/south_pole"&&(t="Antarctica/McMurdo"),uh.has(n))throw new RangeError(`${n} is a legacy time zone identifier from ICU. Use ${t} instead`);const r=[...e].map((a,s)=>s===0||fh[e[s-1]]?a.toUpperCase():a).join("").split("/");if(r.length===1)return e==="gb-eire"?{identifier:"GB-Eire",primaryIdentifier:t}:{identifier:e.length<=3||/[-0-9]/.test(e)?e.toUpperCase():r[0],primaryIdentifier:t};if(r[0]==="Etc")return{identifier:`Etc/${["Zulu","Greenwich","Universal"].includes(r[1])?r[1]:r[1].toUpperCase()}`,primaryIdentifier:t};if(r[0]==="Us")return{identifier:`US/${r[1]}`,primaryIdentifier:t};const i=new Map([["Act","ACT"],["Lhi","LHI"],["Nsw","NSW"],["Dar_Es_Salaam","Dar_es_Salaam"],["Port_Of_Spain","Port_of_Spain"],["Port-Au-Prince","Port-au-Prince"],["Isle_Of_Man","Isle_of_Man"],["Comodrivadavia","ComodRivadavia"],["Knox_In","Knox_IN"],["Dumontdurville","DumontDUrville"],["Mcmurdo","McMurdo"],["Denoronha","DeNoronha"],["Easterisland","EasterIsland"],["Bajanorte","BajaNorte"],["Bajasur","BajaSur"]]);return r[1]=i.get(r[1])??r[1],r.length>2&&(r[2]=i.get(r[2])??r[2]),{identifier:r.join("/"),primaryIdentifier:t}}function Pn(n,e){const{year:t,month:r,day:i,hour:o,minute:a,second:s}=Xu(n,e);let c=e%1e3;return c<0&&(c+=1e3),1e6*(zs({isoDate:{year:t,month:r,day:i},time:{hour:o,minute:a,second:s,millisecond:c}})-e)}function Xa(n,e){return Pn(n,vt(e,"floor"))}function Gs(n){const e=n<0?"-":"+",t=Math.abs(n);return`${e}${zo(Math.floor(t/60),t%60,0,0,"minute")}`}function qu(n){return Gs(_n(n,ih,"halfExpand")/6e10)}function zs({isoDate:{year:n,month:e,day:t},time:{hour:r,minute:i,second:o,millisecond:a}}){const s=n%400,c=(n-s)/400,u=new Date;return u.setUTCHours(r,i,o,a),u.setUTCFullYear(s,e-1,t),u.getTime()+sh*c}function De(n){const e=zs(n),t=1e3*n.time.microsecond+n.time.nanosecond;return h.add($t(e),h.BigInt(t))}function Zu(n){let e=vt(n,"trunc"),t=h.toNumber(h.remainder(n,gi));t<0&&(t+=1e6,e-=1);const r=Math.floor(t/1e3)%1e3,i=t%1e3,o=new Date(e);return{epochMilliseconds:e,isoDate:{year:o.getUTCFullYear(),month:o.getUTCMonth()+1,day:o.getUTCDate()},time:{hour:o.getUTCHours(),minute:o.getUTCMinutes(),second:o.getUTCSeconds(),millisecond:o.getUTCMilliseconds(),microsecond:r,nanosecond:i}}}function Ys(n,e){if(n==="UTC")return null;const t=vt(e,"floor");if(t<Zr)return Ys(n,$t(Zr));const r=Date.now(),i=Math.max(t,r)+366*bn*3;let o=t,a=Pn(n,o),s=o,c=a;for(;a===c&&o<i;){if(s=o+2*bn*7,s>Iu)return null;c=Pn(n,s),a===c&&(o=s)}return a===c?null:$t(ad(u=>Pn(n,u),o,s,a,c))}function Ka(n,e){if(n==="UTC")return null;const t=vt(e,"ceil"),r=Date.now(),i=r+366*bn*3;if(t>i){const u=Ka(n,$t(i));if(u===null||h.lessThan(u,$t(r)))return u}if(n==="Africa/Casablanca"||n==="Africa/El_Aaiun"){const u=Date.UTC(2088,0,1);if(u<t)return Ka(n,$t(u))}let o=t-1;if(o<Zr)return null;let a=Pn(n,o),s=o,c=a;for(;a===c&&o>Zr;){if(s=o-2*bn*7,s<Zr)return null;c=Pn(n,s),a===c&&(o=s)}return a===c?null:$t(ad(u=>Pn(n,u),s,o,c,a))}function Xu(n,e){return function(t){const r=t.split(/[^\w]+/);if(r.length!==7)throw new RangeError(`expected 7 parts in "${t}`);const i=+r[0],o=+r[1];let a=+r[2];const s=r[3];if(s[0]==="b"||s[0]==="B")a=1-a;else if(s[0]!=="a"&&s[0]!=="A")throw new RangeError(`Unknown era ${s} in "${t}`);const c=r[4]==="24"?0:+r[4],u=+r[5],d=+r[6];if(!(Number.isFinite(a)&&Number.isFinite(i)&&Number.isFinite(o)&&Number.isFinite(c)&&Number.isFinite(u)&&Number.isFinite(d)))throw new RangeError(`Invalid number in "${t}`);return{year:a,month:i,day:o,hour:c,minute:u,second:d}}(Cu(n).format(e))}function lo(n){return n!==void 0&&!(n%4!=0||n%100==0&&n%400!=0)}function Un(n,e){return{standard:[31,28,31,30,31,30,31,31,30,31,30,31],leapyear:[31,29,31,30,31,30,31,31,30,31,30,31]}[lo(n)?"leapyear":"standard"][e-1]}function ho(n){const e=[m(n,He),m(n,Fe),m(n,rt),m(n,Ge),m(n,ze),m(n,Ye),m(n,ke),m(n,je),m(n,We),m(n,it)];for(let t=0;t<e.length;t++){const r=e[t];if(r!==0)return r<0?-1:1}return 0}function Yo(n){const e=["years","months","weeks","days"];for(let t=0;t<e.length;t++){const r=n[e[t]];if(r!==0)return r<0?-1:1}return 0}function Ku(n){const e=Yo(n.date);return e!==0?e:n.time.sign()}function Nn(n,e){let t=n,r=e;if(!Number.isFinite(t)||!Number.isFinite(r))throw new RangeError("infinity is out of range");return r-=1,t+=Math.floor(r/12),r%=12,r<0&&(r+=12),r+=1,{year:t,month:r}}function st(n,e,t){let r=n,i=e,o=t;if(!Number.isFinite(o))throw new RangeError("infinity is out of range");({year:r,month:i}=Nn(r,i));const a=146097;if(Math.abs(o)>a){const u=Math.trunc(o/a);r+=400*u,o-=u*a}let s=0,c=i>2?r:r-1;for(;s=lo(c)?366:365,o<-s;)r-=1,c-=1,o+=s;for(c+=1;s=lo(c)?366:365,o>s;)r+=1,c+=1,o-=s;for(;o<1;)({year:r,month:i}=Nn(r,i-1)),o+=Un(r,i);for(;o>Un(r,i);)o-=Un(r,i),{year:r,month:i}=Nn(r,i+1);return{year:r,month:i,day:o}}function ci(n,e,t,r,i,o,a,s,c){const u=pn(r,i,o,a,s,c);return j(st(n,e,t+u.deltaDays),u)}function pn(n,e,t,r,i,o){let a,s=n,c=e,u=t,d=r,l=i,f=o;({div:a,mod:f}=or(f,3)),l+=a,f<0&&(l-=1,f+=1e3),{div:a,mod:l}=or(l,3),d+=a,l<0&&(d-=1,l+=1e3),u+=Math.trunc(d/1e3),d%=1e3,d<0&&(u-=1,d+=1e3),c+=Math.trunc(u/60),u%=60,u<0&&(c-=1,u+=60),s+=Math.trunc(c/60),c%=60,c<0&&(s-=1,c+=60);let g=Math.trunc(s/24);return s%=24,s<0&&(g-=1,s+=24),g+=0,s+=0,c+=0,u+=0,d+=0,l+=0,f+=0,{deltaDays:g,hour:s,minute:c,second:u,millisecond:d,microsecond:l,nanosecond:f}}function K0(n,e){const t=Ce(n,0);if(Yo(t)===0)return n.days;const r=m(e,N),i=ft(m(e,b),r,t,"constrain"),o=Gn(r.year,r.month-1,r.day),a=Gn(i.year,i.month-1,i.day)-o;return n.days+a}function ct(n){return new(Ae("%Temporal.Duration%"))(-m(n,He),-m(n,Fe),-m(n,rt),-m(n,Ge),-m(n,ze),-m(n,Ye),-m(n,ke),-m(n,je),-m(n,We),-m(n,it))}function Be(n,e,t){return Math.min(t,Math.max(e,n))}function Qu(n,e,t){const r=Be(e,1,12);return{year:n,month:r,day:Be(t,1,Un(n,r))}}function we(n,e,t){if(n<e||n>t)throw new RangeError(`value out of range: ${e} <= ${n} <= ${t}`)}function Hn(n,e,t){we(e,1,12),we(t,1,Un(n,e))}function Bn(n){Fn(j(n,{deltaDays:0,hour:12,minute:0,second:0,millisecond:0,microsecond:0,nanosecond:0}))}function ko(n,e,t,r,i,o){we(n,0,23),we(e,0,59),we(t,0,59),we(r,0,999),we(i,0,999),we(o,0,999)}function ks(n,e,t,r,i,o,a,s,c){Hn(n,e,t),ko(r,i,o,a,s,c)}function Fn(n){const e=De(n);(h.lessThan(e,oh)||h.greaterThan(e,ah))&&Gt(e)}function Qa(n){De(n)}function Gt(n){if(h.lessThan(n,ri)||h.greaterThan(n,fr))throw new RangeError("date/time value is outside of supported range")}function js({year:n,month:e}){we(n,$0,H0),n===$0?we(e,4,12):n===H0&&we(e,1,9)}function jo(n,e,t,r,i,o,a,s,c,u){let d=0;const l=[n,e,t,r,i,o,a,s,c,u];for(let T=0;T<l.length;T++){const v=l[T];if(v===1/0||v===-1/0)throw new RangeError("infinite values not allowed as duration fields");if(v!==0){const S=v<0?-1:1;if(d!==0&&S!==d)throw new RangeError("mixed-sign values not allowed as duration fields");d=S}}if(Math.abs(n)>=2**32||Math.abs(e)>=2**32||Math.abs(t)>=2**32)throw new RangeError("years, months, and weeks must be < 2³²");const f=or(s,3),g=or(c,6),p=or(u,9),y=or(1e6*f.mod+1e3*g.mod+p.mod,9).div,_=86400*r+3600*i+60*o+a+f.div+g.div+p.div+y;if(!Number.isSafeInteger(_))throw new RangeError("total of duration time units cannot exceed 9007199254740991.999999999 s")}function rr(n){return{date:{years:m(n,He),months:m(n,Fe),weeks:m(n,rt),days:m(n,Ge)},time:F.fromComponents(m(n,ze),m(n,Ye),m(n,ke),m(n,je),m(n,We),m(n,it))}}function Ut(n){const e=F.fromComponents(m(n,ze),m(n,Ye),m(n,ke),m(n,je),m(n,We),m(n,it)).add24HourDays(m(n,Ge));return{date:{years:m(n,He),months:m(n,Fe),weeks:m(n,rt),days:0},time:e}}function Ju(n){const e=Ut(n),t=Math.trunc(e.time.sec/86400);return jo(e.date.years,e.date.months,e.date.weeks,t,0,0,0,0,0,0),{...e.date,days:t}}function _t(n,e){const t=n.time.sign();let r=n.time.abs().subsec,i=0,o=0,a=n.time.abs().sec,s=0,c=0,u=0;switch(e){case"year":case"month":case"week":case"day":i=Math.trunc(r/1e3),r%=1e3,o=Math.trunc(i/1e3),i%=1e3,a+=Math.trunc(o/1e3),o%=1e3,s=Math.trunc(a/60),a%=60,c=Math.trunc(s/60),s%=60,u=Math.trunc(c/24),c%=24;break;case"hour":i=Math.trunc(r/1e3),r%=1e3,o=Math.trunc(i/1e3),i%=1e3,a+=Math.trunc(o/1e3),o%=1e3,s=Math.trunc(a/60),a%=60,c=Math.trunc(s/60),s%=60;break;case"minute":i=Math.trunc(r/1e3),r%=1e3,o=Math.trunc(i/1e3),i%=1e3,a+=Math.trunc(o/1e3),o%=1e3,s=Math.trunc(a/60),a%=60;break;case"second":i=Math.trunc(r/1e3),r%=1e3,o=Math.trunc(i/1e3),i%=1e3,a+=Math.trunc(o/1e3),o%=1e3;break;case"millisecond":i=Math.trunc(r/1e3),r%=1e3,o=pa(a,3,Math.trunc(i/1e3)),i%=1e3,a=0;break;case"microsecond":i=pa(a,6,Math.trunc(r/1e3)),r%=1e3,a=0;break;case"nanosecond":r=pa(a,9,r),a=0}return new(Ae("%Temporal.Duration%"))(n.date.years,n.date.months,n.date.weeks,n.date.days+t*u,t*c,t*s,t*a,t*o,t*i,t*r)}function on(n,e){return Yo(n),e.sign(),{date:n,time:e}}function Gn(n,e,t){return zs({isoDate:{year:n,month:e+1,day:t},time:{hour:0,minute:0,second:0,millisecond:0}})/bn}function dr({year:n,month:e,day:t}){if(Math.abs(Gn(n,e-1,t))>1e8)throw new RangeError("date/time value is outside the supported range")}function Ws(n,e){const t=e.hour-n.hour,r=e.minute-n.minute,i=e.second-n.second,o=e.millisecond-n.millisecond,a=e.microsecond-n.microsecond,s=e.nanosecond-n.nanosecond;return F.fromComponents(t,r,i,o,a,s)}function Bs(n,e,t,r,i){let o=F.fromEpochNsDiff(e,n);return o=mo(o,t,r,i),on({years:0,months:0,weeks:0,days:0},o)}function ed(n,e,t,r){Qa(n),Qa(e);let i=Ws(n.time,e.time);const o=i.sign(),a=zt(n.isoDate,e.isoDate);let s=e.isoDate;a===o&&(s=st(s.year,s.month,s.day+o),i=i.add24HourDays(-o));const c=rn("day",r),u=Si(t,n.isoDate,s,c);return r!==c&&(i=i.add24HourDays(u.days),u.days=0),on(u,i)}function td(n,e,t,r,i){const o=h.subtract(e,n);if(h.equal(o,mt))return{date:{years:0,months:0,weeks:0,days:0},time:F.ZERO};const a=h.lessThan(o,mt)?-1:1,s=wt(t,n),c=wt(t,e);let u,d=0,l=a===1?2:1,f=Ws(s.time,c.time);for(f.sign()===-a&&d++;d<=l;d++){u=j(st(c.isoDate.year,c.isoDate.month,c.isoDate.day-d*a),s.time);const p=Oe(t,u,"compatible");if(f=F.fromEpochNsDiff(e,p),f.sign()!==-a)break}const g=rn("day",i);return on(Si(r,s.isoDate,u.isoDate,g),f)}function nd(n,e,t,r,i,o,a,s,c){let u,d,l,f,g=e;switch(s){case"year":{const $=_n(g.date.years,a,"trunc");u=$,d=$+a*n,l={years:u,months:0,weeks:0,days:0},f={...l,years:d};break}case"month":{const $=_n(g.date.months,a,"trunc");u=$,d=$+a*n,l=Ce(g.date,0,0,u),f=Ce(g.date,0,0,d);break}case"week":{const $=Ce(g.date,0,0),le=ft(o,r.isoDate,$,"constrain"),ge=Si(o,le,st(le.year,le.month,le.day+g.date.days),"week"),Me=_n(g.date.weeks+ge.weeks,a,"trunc");u=Me,d=Me+a*n,l=Ce(g.date,0,u),f=Ce(g.date,0,d);break}case"day":{const $=_n(g.date.days,a,"trunc");u=$,d=$+a*n,l=Ce(g.date,u),f=Ce(g.date,d);break}}const p=ft(o,r.isoDate,l,"constrain"),y=ft(o,r.isoDate,f,"constrain");let _,T;const v=j(p,r.time),S=j(y,r.time);i?(_=Oe(i,v,"compatible"),T=Oe(i,S,"compatible")):(_=De(v),T=De(S));const D=F.fromEpochNsDiff(t,_),R=F.fromEpochNsDiff(T,_),G=Po(c,n<0?"negative":"positive"),Y=D.add(D).abs().subtract(R.abs()).sign(),q=Math.abs(u)/a%2==0,L=D.isZero()?Math.abs(u):D.cmp(R)?Uo(Math.abs(u),Math.abs(d),Y,q,G):Math.abs(d),J=new F(h.add(h.multiply(R.totalNs,h.BigInt(u)),h.multiply(D.totalNs,h.BigInt(a*n)))).fdiv(R.totalNs),W=L===Math.abs(d);return g={date:W?f:l,time:F.ZERO},{nudgeResult:{duration:g,nudgedEpochNs:W?T:_,didExpandCalendarUnit:W},total:J}}function Wo(n,e,t,r,i,o,a,s,c){let u=n;const d=Ot(s)||r&&s==="day",l=Ku(u)<0?-1:1;let f;return d?{nudgeResult:f}=nd(l,u,e,t,r,i,a,s,c):f=r?function(g,p,y,_,T,v,S,D){let R=p;const G=ft(T,y.isoDate,R.date,"constrain"),Y=j(G,y.time),q=j(st(G.year,G.month,G.day+g),y.time),L=Oe(_,Y,"compatible"),J=Oe(_,q,"compatible"),W=F.fromEpochNsDiff(J,L);if(W.sign()!==g)throw new RangeError("time zone returned inconsistent Instants");const $=h.BigInt(pr[S]*v);let le=R.time.round($,D);const ge=le.subtract(W),Me=ge.sign()!==-g;let ut,dt;return Me?(ut=g,le=ge.round($,D),dt=le.addToEpochNs(J)):(ut=0,dt=le.addToEpochNs(L)),{duration:on(Ce(R.date,R.date.days+ut),le),nudgedEpochNs:dt,didExpandCalendarUnit:Me}}(l,u,t,r,i,a,s,c):function(g,p,y,_,T,v){let S=g;const D=S.time.add24HourDays(S.date.days),R=D.round(h.BigInt(_*pr[T]),v),G=R.subtract(D),{quotient:Y}=D.divmod(oo),{quotient:q}=R.divmod(oo),L=Math.sign(q-Y)===D.sign(),J=G.addToEpochNs(p);let W=0,$=R;return Jt(y)==="date"&&(W=q,$=R.add(F.fromComponents(24*-q,0,0,0,0,0))),{duration:{date:Ce(S.date,W),time:$},nudgedEpochNs:J,didExpandCalendarUnit:L}}(u,e,o,a,s,c),u=f.duration,f.didExpandCalendarUnit&&s!=="week"&&(u=function(g,p,y,_,T,v,S,D){let R=p;if(D===S)return R;const G=Xr.indexOf(S);for(let Y=Xr.indexOf(D)-1;Y>=G;Y--){const q=Xr[Y];if(q==="week"&&S!=="week")continue;let L;switch(q){case"year":L={years:R.date.years+g,months:0,weeks:0,days:0};break;case"month":{const $=R.date.months+g;L=Ce(R.date,0,0,$);break}case"week":{const $=R.date.weeks+g;L=Ce(R.date,0,$);break}}const J=j(ft(v,_.isoDate,L,"constrain"),_.time);let W;if(W=T?Oe(T,J,"compatible"):De(J),ro(y,W)===-g)break;R={date:L,time:F.ZERO}}return R}(l,u,f.nudgedEpochNs,t,r,i,o,rn(s,"day"))),u}function Q0(n,e,t,r,i,o){return Ot(o)||r&&o==="day"?nd(Ku(n)<0?-1:1,n,e,t,r,i,1,o,"trunc").total:Jr(n.time.add24HourDays(n.date.days),o)}function rd(n,e,t,r,i,o,a){if(_r(n,e)==0)return{date:{years:0,months:0,weeks:0,days:0},time:F.ZERO};Fn(n),Fn(e);const s=ed(n,e,t,r);return o==="nanosecond"&&i===1?s:Wo(s,De(e),n,null,t,r,i,o,a)}function id(n,e,t,r,i,o,a,s){if(Jt(i)==="time")return Bs(n,e,o,a,s);const c=td(n,e,t,r,i);return a==="nanosecond"&&o===1?c:Wo(c,e,wt(t,n),t,r,i,o,a,s)}function Mr(n,e,t,r,i,o){const a=gr.reduce((g,p)=>{const y=p[0],_=p[1],T=p[2];return t!=="datetime"&&T!==t||r.includes(_)||g.push(_,y),g},[]);let s=at(e,"largestUnit",t,"auto");if(r.includes(s))throw new RangeError(`largestUnit must be one of ${a.join(", ")}, not ${s}`);const c=Rr(e);let u=At(e,"trunc");n==="since"&&(u=function(g){switch(g){case"ceil":return"floor";case"floor":return"ceil";case"halfCeil":return"halfFloor";case"halfFloor":return"halfCeil";default:return g}}(u));const d=at(e,"smallestUnit",t,i);if(r.includes(d))throw new RangeError(`smallestUnit must be one of ${a.join(", ")}, not ${d}`);const l=rn(o,d);if(s==="auto"&&(s=l),rn(s,d)!==s)throw new RangeError(`largestUnit ${s} cannot be smaller than smallestUnit ${d}`);const f={hour:24,minute:60,second:60,millisecond:1e3,microsecond:1e3,nanosecond:1e3}[d];return f!==void 0&&Dr(c,f,!1),{largestUnit:s,roundingIncrement:c,roundingMode:u,smallestUnit:d}}function J0(n,e,t,r){const i=Gr(t),o=Mr(n,I(r),"time",[],"nanosecond","second");let a=_t(Bs(m(e,C),m(i,C),o.roundingIncrement,o.smallestUnit,o.roundingMode),o.largestUnit);return n==="since"&&(a=ct(a)),a}function ec(n,e,t,r){const i=Hr(t),o=m(e,b),a=m(i,b);if(!Ft(o,a))throw new RangeError(`cannot compute difference between dates of ${o} and ${a} calendars`);const s=Mr(n,I(r),"date",[],"day","day"),c=Ae("%Temporal.Duration%"),u=m(e,N),d=m(i,N);if(zt(u,d)===0)return new c;let l={date:Si(o,u,d,s.largestUnit),time:F.ZERO};if(s.smallestUnit!=="day"||s.roundingIncrement!==1){const g=j(u,{deltaDays:0,hour:0,minute:0,second:0,millisecond:0,microsecond:0,nanosecond:0});l=Wo(l,De(j(d,{deltaDays:0,hour:0,minute:0,second:0,millisecond:0,microsecond:0,nanosecond:0})),g,null,o,s.largestUnit,s.roundingIncrement,s.smallestUnit,s.roundingMode)}let f=_t(l,"day");return n==="since"&&(f=ct(f)),f}function tc(n,e,t,r){const i=Fr(t),o=m(e,b),a=m(i,b);if(!Ft(o,a))throw new RangeError(`cannot compute difference between dates of ${o} and ${a} calendars`);const s=Mr(n,I(r),"datetime",[],"nanosecond","day"),c=Ae("%Temporal.Duration%"),u=m(e,re),d=m(i,re);if(_r(u,d)===0)return new c;let l=_t(rd(u,d,o,s.largestUnit,s.roundingIncrement,s.smallestUnit,s.roundingMode),s.largestUnit);return n==="since"&&(l=ct(l)),l}function nc(n,e,t,r){const i=yn(t),o=Mr(n,I(r),"time",[],"nanosecond","hour");let a=Ws(m(e,se),m(i,se));a=mo(a,o.roundingIncrement,o.smallestUnit,o.roundingMode);let s=_t(on({years:0,months:0,weeks:0,days:0},a),o.largestUnit);return n==="since"&&(s=ct(s)),s}function rc(n,e,t,r){const i=zr(t),o=m(e,b),a=m(i,b);if(!Ft(o,a))throw new RangeError(`cannot compute difference between months of ${o} and ${a} calendars`);const s=Mr(n,I(r),"date",["week","day"],"month","year"),c=Ae("%Temporal.Duration%");if(zt(m(e,N),m(i,N))==0)return new c;const u=Xe(o,m(e,N),"year-month");u.day=1;const d=Rn(o,u,"constrain"),l=Xe(o,m(i,N),"year-month");l.day=1;const f=Rn(o,l,"constrain");let g={date:Ce(Si(o,d,f,s.largestUnit),0,0),time:F.ZERO};if(s.smallestUnit!=="month"||s.roundingIncrement!==1){const y=j(d,{deltaDays:0,hour:0,minute:0,second:0,millisecond:0,microsecond:0,nanosecond:0});g=Wo(g,De(j(f,{deltaDays:0,hour:0,minute:0,second:0,millisecond:0,microsecond:0,nanosecond:0})),y,null,o,s.largestUnit,s.roundingIncrement,s.smallestUnit,s.roundingMode)}let p=_t(g,"day");return n==="since"&&(p=ct(p)),p}function ic(n,e,t,r){const i=Yr(t),o=m(e,b),a=m(i,b);if(!Ft(o,a))throw new RangeError(`cannot compute difference between dates of ${o} and ${a} calendars`);const s=Mr(n,I(r),"datetime",[],"nanosecond","hour"),c=m(e,C),u=m(i,C),d=Ae("%Temporal.Duration%");let l;if(Jt(s.largestUnit)!=="date")l=_t(Bs(c,u,s.roundingIncrement,s.smallestUnit,s.roundingMode),s.largestUnit);else{const f=m(e,V);if(!Wu(f,m(i,V)))throw new RangeError("When calculating difference between time zones, largestUnit must be 'hours' or smaller because day lengths can vary between time zones due to DST or time zone offset changes.");if(h.equal(c,u))return new d;l=_t(id(c,u,f,o,s.largestUnit,s.roundingIncrement,s.smallestUnit,s.roundingMode),"hour")}return n==="since"&&(l=ct(l)),l}function yr({hour:n,minute:e,second:t,millisecond:r,microsecond:i,nanosecond:o},a){let s=t,c=o;return s+=a.sec,c+=a.subsec,pn(n,e,s,r,i,c)}function Ja(n,e){const t=e.addToEpochNs(n);return Gt(t),t}function kr(n,e,t,r,i="constrain"){if(Yo(r.date)===0)return Ja(n,r.time);const o=wt(e,n);return Ja(Oe(e,j(ft(t,o.isoDate,r.date,i),o.time),"compatible"),r.time)}function oc(n,e,t){let r=Tt(t);n==="subtract"&&(r=ct(r));const i=rn(Qt(e),Qt(r));if(Ot(i))throw new RangeError("For years, months, or weeks arithmetic, use date arithmetic relative to a starting point");const o=Ut(e),a=Ut(r);return _t(on({years:0,months:0,weeks:0,days:0},o.time.add(a.time)),i)}function ac(n,e,t){let r=Tt(t);n==="subtract"&&(r=ct(r));const i=Qt(r);if(Jt(i)==="date")throw new RangeError(`Duration field ${i} not supported by Temporal.Instant. Try Temporal.ZonedDateTime instead.`);const o=Ut(r);return Pt(Ja(m(e,C),o.time))}function sc(n,e,t,r){const i=m(e,b);let o=Tt(t);n==="subtract"&&(o=ct(o));const a=Ju(o),s=k(I(r));return Ve(ft(i,m(e,N),a,s),i)}function cc(n,e,t,r){let i=Tt(t);n==="subtract"&&(i=ct(i));const o=k(I(r)),a=m(e,b),s=Ut(i),c=m(e,re),u=yr(c.time,s.time),d=Ce(s.date,u.deltaDays);return jo(d.years,d.months,d.weeks,d.days,0,0,0,0,0,0),yt(j(ft(a,c.isoDate,d,o),u),a)}function uc(n,e,t){let r=Tt(t);n==="subtract"&&(r=ct(r));const i=Ut(r),{hour:o,minute:a,second:s,millisecond:c,microsecond:u,nanosecond:d}=yr(m(e,se),i.time);return tn(Go(o,a,s,c,u,d,"reject"))}function dc(n,e,t,r){let i=Tt(t);n==="subtract"&&(i=ct(i));const o=k(I(r)),a=ho(i),s=m(e,b),c=Xe(s,m(e,N),"year-month");c.day=1;let u=Rn(s,c,"constrain");if(a<0){const l=ft(s,u,{months:1},"constrain");u=st(l.year,l.month,l.day-1)}const d=Ju(i);return Bn(u),ur(oi(s,Xe(s,ft(s,u,d,o),"year-month"),o),s)}function lc(n,e,t,r){let i=Tt(t);n==="subtract"&&(i=ct(i));const o=k(I(r)),a=m(e,V),s=m(e,b),c=rr(i);return xe(kr(m(e,C),a,s,c,o),a,s)}function _n(n,e,t){const r=Math.trunc(n/e),i=n%e,o=n<0?"negative":"positive",a=Math.abs(r),s=a+1,c=ot(Math.abs(2*i)-e),u=a%2==0,d=Po(t,o),l=i===0?a:Uo(a,s,c,u,d);return e*(o==="positive"?l:-l)}function es(n,e,t,r){const i=pr[t]*e;return function(o,a,s){const c=Kt(o),u=Kt(a),d=h.divide(c,u),l=h.remainder(c,u),f=Po(s,"positive");let g,p;h.lessThan(c,mt)?(g=h.subtract(d,ni),p=d):(g=d,p=h.add(d,ni));const y=ro(Cn(h.multiply(l,$s)),u)*(h.lessThan(c,mt)?-1:1)+0,_=h.equal(l,mt)?d:Uo(g,p,y,fu(g),f);return h.multiply(_,u)}(n,h.BigInt(i),r)}function ts(n,e,t,r){Qa(n);const{year:i,month:o,day:a}=n.isoDate,s=ns(n.time,e,t,r);return j(st(i,o,a+s.deltaDays),s)}function ns({hour:n,minute:e,second:t,millisecond:r,microsecond:i,nanosecond:o},a,s,c){let u;switch(s){case"day":case"hour":u=1e3*(1e3*(1e3*(60*(60*n+e)+t)+r)+i)+o;break;case"minute":u=1e3*(1e3*(1e3*(60*e+t)+r)+i)+o;break;case"second":u=1e3*(1e3*(1e3*t+r)+i)+o;break;case"millisecond":u=1e3*(1e3*r+i)+o;break;case"microsecond":u=1e3*i+o;break;case"nanosecond":u=o}const d=pr[s],l=_n(u,d*a,c)/d;switch(s){case"day":return{deltaDays:l,hour:0,minute:0,second:0,millisecond:0,microsecond:0,nanosecond:0};case"hour":return pn(l,0,0,0,0,0);case"minute":return pn(n,l,0,0,0,0);case"second":return pn(n,e,l,0,0,0);case"millisecond":return pn(n,e,t,l,0,0);case"microsecond":return pn(n,e,t,r,l,0);case"nanosecond":return pn(n,e,t,r,i,l);default:throw new Error(`Invalid unit ${s}`)}}function mo(n,e,t,r){const i=pr[t];return n.round(h.BigInt(i*e),r)}function Jr(n,e){const t=pr[e];return n.fdiv(h.BigInt(t))}function zt(n,e){return n.year!==e.year?ot(n.year-e.year):n.month!==e.month?ot(n.month-e.month):n.day!==e.day?ot(n.day-e.day):0}function rs(n,e){return n.hour!==e.hour?ot(n.hour-e.hour):n.minute!==e.minute?ot(n.minute-e.minute):n.second!==e.second?ot(n.second-e.second):n.millisecond!==e.millisecond?ot(n.millisecond-e.millisecond):n.microsecond!==e.microsecond?ot(n.microsecond-e.microsecond):n.nanosecond!==e.nanosecond?ot(n.nanosecond-e.nanosecond):0}function _r(n,e){const t=zt(n.isoDate,e.isoDate);return t!==0?t:rs(n.time,e.time)}function od(n){const e=fo(n);return globalThis.BigInt!==void 0?globalThis.BigInt(e.toString(10)):e}function vt(n,e){const t=Kt(n),{quotient:r,remainder:i}=Ur(t,gi);let o=h.toNumber(r);return e==="floor"&&h.toNumber(i)<0&&(o-=1),e==="ceil"&&h.toNumber(i)>0&&(o+=1),o}function $t(n){if(!Number.isInteger(n))throw new RangeError("epoch milliseconds must be an integer");return h.multiply(h.BigInt(n),gi)}function fo(n){let e=n;if(typeof n=="object"){const t=n[Symbol.toPrimitive];t&&typeof t=="function"&&(e=t.call(n,"number"))}if(typeof e=="number")throw new TypeError("cannot convert number to bigint");return typeof e=="bigint"?h.BigInt(e.toString(10)):h.BigInt(e)}const is=(()=>{let n=h.BigInt(Date.now()%1e6);return()=>{const e=Date.now(),t=h.BigInt(e),r=h.add($t(e),n);return n=h.remainder(t,gi),h.greaterThan(r,fr)?fr:h.lessThan(r,ri)?ri:r}})();function Nr(){return new Intl.DateTimeFormat().resolvedOptions().timeZone}function ot(n){return n<0?-1:n>0?1:n}function I(n){if(n===void 0)return Object.create(null);if(ce(n)&&n!==null)return n;throw new TypeError("Options parameter must be an object, not "+(n===null?"null":typeof n))}function zn(n,e){const t=Object.create(null);return t[n]=e,t}function an(n,e,t,r){let i=n[e];if(i!==void 0){if(i=Ho(i),!t.includes(i))throw new RangeError(`${e} must be one of ${t.join(", ")}, not ${i}`);return i}if(r===un)throw new RangeError(`${e} option is required`);return r}function Qe(n){const e=ui(n);if(!ch.includes(ui(e)))throw new RangeError(`invalid calendar identifier ${e}`);switch(e){case"ethiopic-amete-alem":return"ethioaa";case"islamicc":return"islamic-civil"}return e}function ui(n){let e="";for(let t=0;t<n.length;t++){const r=n.charCodeAt(t);e+=r>=65&&r<=90?String.fromCharCode(r+32):String.fromCharCode(r)}return e}function An(n){throw new TypeError(`Do not use built-in arithmetic operators with Temporal objects. When comparing, use ${n==="PlainMonthDay"?"Temporal.PlainDate.compare(obj1.toPlainDate(year), obj2.toPlainDate(year))":`Temporal.${n}.compare(obj1, obj2)`}, not obj1 > obj2. When coercing to strings, use \`\${obj}\` or String(obj), not '' + obj. When coercing to numbers, use properties or methods of the object, not \`+obj\`. When concatenating with strings, use \`\${str}\${obj}\` or str.concat(obj), not str + obj. In React, coerce to a string before rendering a Temporal object.`)}const gh=new RegExp(`^${Mu.source}$`),ph=new RegExp(`^${/([+-])([01][0-9]|2[0-3])(?::?([0-5][0-9])(?::?([0-5][0-9])(?:[.,](\d{1,9}))?)?)?/.source}$`);function ad(n,e,t,r=n(e),i=n(t)){let o=e,a=t,s=r,c=i;for(;a-o>1;){let u=Math.trunc((o+a)/2);const d=n(u);d===s?(o=u,s=d):d===c&&(a=u,c=d)}return a}function sd(n){return[...n]}function cd(n,e){if(n!=="gregory"&&n!=="iso8601")return;const t=Ai[n];let r=e.year;const{dayOfWeek:i,dayOfYear:o,daysInYear:a}=t.isoToDate(e,{dayOfWeek:!0,dayOfYear:!0,daysInYear:!0}),s=t.getFirstDayOfWeek(),c=t.getMinimalDaysInFirstWeek();let u=(i+7-s)%7,d=(i-o+7001-s)%7,l=Math.floor((o-1+d)/7);if(7-d>=c&&++l,l==0)l=function(f,g,p,y){let _=(y-f-p+1)%7;_<0&&(_+=7);let T=Math.floor((p+_-1)/7);return 7-_>=g&&++T,T}(s,c,o+t.isoToDate(t.dateAdd(e,{years:-1},"constrain"),{daysInYear:!0}).daysInYear,i),r--;else if(o>=a-5){let f=(u+a-o)%7;f<0&&(f+=7),6-f>=c&&o+7-u>a&&(l=1,r++)}return{week:l,year:r}}function hc(n,e,t,r,i){if(e!==i.year){if(n*(e-i.year)>0)return!0}else if(t!==i.month){if(n*(t-i.month)>0)return!0}else if(r!==i.day&&n*(r-i.day)>0)return!0;return!1}const Ai={};function Yn(n){if(!n.startsWith("M"))throw new RangeError(`Invalid month code: ${n}.  Month codes must start with M.`);const e=+n.slice(1);if(Number.isNaN(e))throw new RangeError(`Invalid month code: ${n}`);return e}function Ht(n,e=!1){return`M${`${n}`.padStart(2,"0")}${e?"L":""}`}function Vs(n,e=void 0,t=12){let{month:r,monthCode:i}=n;if(i===void 0){if(r===void 0)throw new TypeError("Either month or monthCode are required");e==="reject"&&we(r,1,t),e==="constrain"&&(r=Be(r,1,t)),i=Ht(r)}else{const o=Yn(i);if(i!==Ht(o))throw new RangeError(`Invalid month code: ${i}`);if(r!==void 0&&r!==o)throw new RangeError(`monthCode ${i} and month ${r} must match if both are present`);if(r=o,r<1||r>t)throw new RangeError(`Invalid monthCode: ${i}`)}return{...n,month:r,monthCode:i}}Ai.iso8601={resolveFields(n,e){if((e==="date"||e==="year-month")&&n.year===void 0)throw new TypeError("year is required");if((e==="date"||e==="month-day")&&n.day===void 0)throw new TypeError("day is required");Object.assign(n,Vs(n))},dateToISO:(n,e)=>Kr(n.year,n.month,n.day,e),monthDayToISOReferenceDate(n,e){const{month:t,day:r}=Kr(n.year??1972,n.month,n.day,e);return{month:t,day:r,year:1972}},extraFields:()=>[],fieldKeysToIgnore(n){const e=new Set;for(let t=0;t<n.length;t++){const r=n[t];e.add(r),r==="month"?e.add("monthCode"):r==="monthCode"&&e.add("month")}return sd(e)},dateAdd(n,{years:e=0,months:t=0,weeks:r=0,days:i=0},o){let{year:a,month:s,day:c}=n;return a+=e,s+=t,{year:a,month:s}=Nn(a,s),{year:a,month:s,day:c}=Kr(a,s,c,o),c+=i+7*r,st(a,s,c)},dateUntil(n,e,t){const r=-zt(n,e);if(r===0)return{years:0,months:0,weeks:0,days:0};let i,o=0,a=0;if(t==="year"||t==="month"){let d=e.year-n.year;for(d!==0&&(d-=r);!hc(r,n.year+d,n.month,n.day,e);)o=d,d+=r;let l=r;for(i=Nn(n.year+o,n.month+l);!hc(r,i.year,i.month,n.day,e);)a=l,l+=r,i=Nn(i.year,i.month+r);t==="month"&&(a+=12*o,o=0)}i=Nn(n.year+o,n.month+a);const s=Qu(i.year,i.month,n.day);let c=0,u=Gn(e.year,e.month-1,e.day)-Gn(s.year,s.month-1,s.day);return t==="week"&&(c=Math.trunc(u/7),u%=7),{years:o,months:a,weeks:c,days:u}},isoToDate({year:n,month:e,day:t},r){const i={era:void 0,eraYear:void 0,year:n,month:e,day:t,daysInWeek:7,monthsInYear:12};if(r.monthCode&&(i.monthCode=Ht(e)),r.dayOfWeek){const o=e+(e<3?10:-2),a=n-(e<3?1:0),s=Math.floor(a/100),c=a-100*s,u=(t+Math.floor(2.6*o-.2)+(c+Math.floor(c/4))+(Math.floor(s/4)-2*s))%7;i.dayOfWeek=u+(u<=0?7:0)}if(r.dayOfYear){let o=t;for(let a=e-1;a>0;a--)o+=Un(n,a);i.dayOfYear=o}return r.weekOfYear&&(i.weekOfYear=cd("iso8601",{year:n,month:e,day:t})),r.daysInMonth&&(i.daysInMonth=Un(n,e)),(r.daysInYear||r.inLeapYear)&&(i.inLeapYear=lo(n),i.daysInYear=i.inLeapYear?366:365),i},getFirstDayOfWeek:()=>1,getMinimalDaysInFirstWeek:()=>4};class Te{constructor(e){if(this.map=new Map,this.calls=0,this.hits=0,this.misses=0,e!==void 0){let t=0;for(const r of e.map.entries()){if(++t>Te.MAX_CACHE_ENTRIES)break;this.map.set(...r)}}}get(e){const t=this.map.get(e);return t&&(this.hits++,this.report()),this.calls++,t}set(e,t){this.map.set(e,t),this.misses++,this.report()}report(){}setObject(e){if(Te.objectMap.get(e))throw new RangeError("object already cached");Te.objectMap.set(e,this),this.report()}static getCacheForObject(e){let t=Te.objectMap.get(e);return t||(t=new Te,Te.objectMap.set(e,t)),t}}function ud({isoYear:n,isoMonth:e,isoDay:t}){return`${Di(n)}-${gt(e)}-${gt(t)}T00:00Z`}function Ea(n,e){return{years:n.year-e.year,months:n.month-e.month,days:n.day-e.day}}Te.objectMap=new WeakMap,Te.MAX_CACHE_ENTRIES=1e3;class Vn{constructor(){this.eras=[],this.hasEra=!1,this.erasBeginMidYear=!1}getFormatter(){return this.formatter===void 0&&(this.formatter=new Intl.DateTimeFormat(`en-US-u-ca-${this.id}`,{day:"numeric",month:"numeric",year:"numeric",era:"short",timeZone:"UTC"})),this.formatter}getCalendarParts(e){let t=this.getFormatter(),r=new Date(e);if(e==="-271821-04-19T00:00Z"){const i=t.resolvedOptions();t=new Intl.DateTimeFormat(i.locale,{...i,timeZone:"Etc/GMT+1"}),r=new Date("-271821-04-20T00:00Z")}try{return t.formatToParts(r)}catch{throw new RangeError(`Invalid ISO date: ${e}`)}}isoToCalendarDate(e,t){const{year:r,month:i,day:o}=e,a=JSON.stringify({func:"isoToCalendarDate",isoYear:r,isoMonth:i,isoDay:o,id:this.id}),s=t.get(a);if(s)return s;const c=ud({isoYear:r,isoMonth:i,isoDay:o}),u=this.getCalendarParts(c),d={};for(let f=0;f<u.length;f++){const{type:g,value:p}=u[f];if(g!=="year"&&g!=="relatedYear"||(this.hasEra?d.eraYear=+p:d.year=+p),g==="month"){const y=/^([0-9]*)(.*?)$/.exec(p);if(!y||y.length!=3||!y[1]&&!y[2])throw new RangeError(`Unexpected month: ${p}`);if(d.month=y[1]?+y[1]:1,d.month<1)throw new RangeError(`Invalid month ${p} from ${c}[u-ca-${this.id}] (probably due to https://bugs.chromium.org/p/v8/issues/detail?id=10527)`);if(d.month>13)throw new RangeError(`Invalid month ${p} from ${c}[u-ca-${this.id}] (probably due to https://bugs.chromium.org/p/v8/issues/detail?id=10529)`);y[2]&&(d.monthExtra=y[2])}g==="day"&&(d.day=+p),this.hasEra&&g==="era"&&p!=null&&p!==""&&(d.era=p.split(" (")[0].normalize("NFD").replace(/[^-0-9 \p{L}]/gu,"").replace(/ /g,"-").toLowerCase())}if(this.hasEra&&d.eraYear===void 0)throw new RangeError(`Intl.DateTimeFormat.formatToParts lacks relatedYear in ${this.id} calendar. Try Node 14+ or modern browsers.`);if(this.hasEra){const f=this.eras.find(g=>d.era===g.genericName);f&&(d.era=f.code)}if(this.reviseIntlEra){const{era:f,eraYear:g}=this.reviseIntlEra(d,e);d.era=f,d.eraYear=g}this.checkIcuBugs&&this.checkIcuBugs(e);const l=this.adjustCalendarDate(d,t,"constrain",!0);if(l.year===void 0)throw new RangeError(`Missing year converting ${JSON.stringify(e)}`);if(l.month===void 0)throw new RangeError(`Missing month converting ${JSON.stringify(e)}`);if(l.day===void 0)throw new RangeError(`Missing day converting ${JSON.stringify(e)}`);return t.set(a,l),["constrain","reject"].forEach(f=>{const g=JSON.stringify({func:"calendarToIsoDate",year:l.year,month:l.month,day:l.day,overflow:f,id:this.id});t.set(g,e)}),l}validateCalendarDate(e){const{month:t,year:r,day:i,eraYear:o,monthCode:a,monthExtra:s}=e;if(s!==void 0)throw new RangeError("Unexpected `monthExtra` value");if(r===void 0&&o===void 0)throw new TypeError("year or eraYear is required");if(t===void 0&&a===void 0)throw new TypeError("month or monthCode is required");if(i===void 0)throw new RangeError("Missing day");if(a!==void 0){if(typeof a!="string")throw new RangeError("monthCode must be a string, not "+typeof a);if(!/^M([01]?\d)(L?)$/.test(a))throw new RangeError(`Invalid monthCode: ${a}`)}if(this.hasEra&&e.era===void 0!=(e.eraYear===void 0))throw new TypeError("properties era and eraYear must be provided together")}adjustCalendarDate(e,t=void 0,r="constrain",i=!1){if(this.calendarType==="lunisolar")throw new RangeError("Override required for lunisolar calendars");let o=e;this.validateCalendarDate(o);const a=this.monthsInYear(o,t);let{month:s,monthCode:c}=o;return{month:s,monthCode:c}=Vs(o,r,a),{...o,month:s,monthCode:c}}regulateMonthDayNaive(e,t,r){const i=this.monthsInYear(e,r);let{month:o,day:a}=e;return t==="reject"?(we(o,1,i),we(a,1,this.maximumMonthLength(e))):(o=Be(o,1,i),a=Be(a,1,this.maximumMonthLength({...e,month:o}))),{...e,month:o,day:a}}calendarToIsoDate(e,t="constrain",r){const i=e;let o=this.adjustCalendarDate(e,r,t,!1);o=this.regulateMonthDayNaive(o,t,r);const{year:a,month:s,day:c}=o,u=JSON.stringify({func:"calendarToIsoDate",year:a,month:s,day:c,overflow:t,id:this.id});let d,l=r.get(u);if(l||i.year!==void 0&&i.month!==void 0&&i.day!==void 0&&(i.year!==o.year||i.month!==o.month||i.day!==o.day)&&(d=JSON.stringify({func:"calendarToIsoDate",year:i.year,month:i.month,day:i.day,overflow:t,id:this.id}),l=r.get(d),l))return l;let f=this.estimateIsoDate({year:a,month:s,day:c});const g=v=>{let S=this.addDaysIso(f,v);if(o.day>this.minimumMonthLength(o)){let D=this.isoToCalendarDate(S,r);for(;D.month!==s||D.year!==a;){if(t==="reject")throw new RangeError(`day ${c} does not exist in month ${s} of year ${a}`);S=this.addDaysIso(S,-1),D=this.isoToCalendarDate(S,r)}}return S};let p=0,y=this.isoToCalendarDate(f,r),_=Ea(o,y);if(_.years!==0||_.months!==0||_.days!==0){const v=365*_.years+30*_.months+_.days;f=this.addDaysIso(f,v),y=this.isoToCalendarDate(f,r),_=Ea(o,y),_.years===0&&_.months===0?f=g(_.days):p=this.compareCalendarDates(o,y)}let T=8;for(;p;){f=this.addDaysIso(f,p*T);const v=y;y=this.isoToCalendarDate(f,r);const S=p;if(p=this.compareCalendarDates(o,y),p){if(_=Ea(o,y),_.years===0&&_.months===0)f=g(_.days),p=0;else if(S&&p!==S)if(T>1)T/=2;else{if(t==="reject")throw new RangeError(`Can't find ISO date from calendar date: ${JSON.stringify({...i})}`);this.compareCalendarDates(y,v)>0&&(f=this.addDaysIso(f,-1)),p=0}}}if(r.set(u,f),d&&r.set(d,f),o.year===void 0||o.month===void 0||o.day===void 0||o.monthCode===void 0||this.hasEra&&(o.era===void 0||o.eraYear===void 0))throw new RangeError("Unexpected missing property");return f}compareCalendarDates(e,t){return e.year!==t.year?ot(e.year-t.year):e.month!==t.month?ot(e.month-t.month):e.day!==t.day?ot(e.day-t.day):0}regulateDate(e,t="constrain",r){const i=this.calendarToIsoDate(e,t,r);return this.isoToCalendarDate(i,r)}addDaysIso(e,t){return st(e.year,e.month,e.day+t)}addDaysCalendar(e,t,r){const i=this.calendarToIsoDate(e,"constrain",r),o=this.addDaysIso(i,t);return this.isoToCalendarDate(o,r)}addMonthsCalendar(e,t,r,i){let o=e;const{day:a}=o;for(let s=0,c=Math.abs(t);s<c;s++){const{month:u}=o,d=o,l=t<0?-Math.max(a,this.daysInPreviousMonth(o,i)):this.daysInMonth(o,i),f=this.calendarToIsoDate(o,"constrain",i);let g=this.addDaysIso(f,l);if(o=this.isoToCalendarDate(g,i),t>0){const p=this.monthsInYear(d,i);for(;o.month-1!=u%p;)g=this.addDaysIso(g,-1),o=this.isoToCalendarDate(g,i)}o.day!==a&&(o=this.regulateDate({...o,day:a},"constrain",i))}if(r==="reject"&&o.day!==a)throw new RangeError(`Day ${a} does not exist in resulting calendar month`);return o}addCalendar(e,{years:t=0,months:r=0,weeks:i=0,days:o=0},a,s){const{year:c,day:u,monthCode:d}=e,l=this.adjustCalendarDate({year:c+t,monthCode:d,day:u},s),f=this.addMonthsCalendar(l,r,a,s),g=o+7*i;return this.addDaysCalendar(f,g,s)}untilCalendar(e,t,r,i){let o=0,a=0,s=0,c=0;switch(r){case"day":o=this.calendarDaysUntil(e,t,i);break;case"week":{const u=this.calendarDaysUntil(e,t,i);o=u%7,a=(u-o)/7;break}case"month":case"year":{const u=this.compareCalendarDates(t,e);if(!u)return{years:0,months:0,weeks:0,days:0};const d=t.year-e.year,l=t.day-e.day;if(r==="year"&&d){let p=0;t.monthCode>e.monthCode&&(p=1),t.monthCode<e.monthCode&&(p=-1),p||(p=Math.sign(l)),c=p*u<0?d-u:d}let f,g=c?this.addCalendar(e,{years:c},"constrain",i):e;do s+=u,f=g,g=this.addMonthsCalendar(f,u,"constrain",i),g.day!==e.day&&(g=this.regulateDate({...g,day:e.day},"constrain",i));while(this.compareCalendarDates(t,g)*u>=0);s-=u,o=this.calendarDaysUntil(f,t,i);break}}return{years:c,months:s,weeks:a,days:o}}daysInMonth(e,t){const{day:r}=e,i=this.maximumMonthLength(e),o=this.minimumMonthLength(e);if(o===i)return o;const a=r<=i-o?i:o,s=this.calendarToIsoDate(e,"constrain",t),c=this.addDaysIso(s,a),u=this.isoToCalendarDate(c,t),d=this.addDaysIso(c,-u.day);return this.isoToCalendarDate(d,t).day}daysInPreviousMonth(e,t){const{day:r,month:i,year:o}=e;let a={year:i>1?o:o-1,month:i,day:1};const s=i>1?i-1:this.monthsInYear(a,t);a={...a,month:s};const c=this.minimumMonthLength(a),u=this.maximumMonthLength(a);if(c===u)return u;const d=this.calendarToIsoDate(e,"constrain",t),l=this.addDaysIso(d,-r);return this.isoToCalendarDate(l,t).day}startOfCalendarYear(e){return{year:e.year,month:1,monthCode:"M01",day:1}}startOfCalendarMonth(e){return{year:e.year,month:e.month,day:1}}calendarDaysUntil(e,t,r){const i=this.calendarToIsoDate(e,"constrain",r),o=this.calendarToIsoDate(t,"constrain",r);return Gn(o.year,o.month-1,o.day)-Gn(i.year,i.month-1,i.day)}monthDaySearchStartYear(e,t){return 1972}monthDayFromFields(e,t,r){let i,o,a,s,c,{era:u,eraYear:d,year:l,month:f,monthCode:g,day:p}=e;if(f!==void 0&&l===void 0&&(!this.hasEra||u===void 0||d===void 0))throw new TypeError("when month is present, year (or era and eraYear) are required");(g===void 0||l!==void 0||this.hasEra&&d!==void 0)&&({monthCode:g,day:p}=this.isoToCalendarDate(this.calendarToIsoDate(e,t,r),r));const y={year:this.monthDaySearchStartYear(g,p),month:12,day:31},_=this.isoToCalendarDate(y,r),T=_.monthCode>g||_.monthCode===g&&_.day>=p?_.year:_.year-1;for(let v=0;v<20;v++){const S=this.adjustCalendarDate({day:p,monthCode:g,year:T-v},r),D=this.calendarToIsoDate(S,"constrain",r),R=this.isoToCalendarDate(D,r);if({year:i,month:o,day:a}=D,R.monthCode===g&&R.day===p)return{month:o,day:a,year:i};if(t==="constrain"){const G=this.maxLengthOfMonthCodeInAnyYear(R.monthCode);if(R.monthCode===g&&R.day===G&&p>G)return{month:o,day:a,year:i};(s===void 0||R.monthCode===s.monthCode&&R.day>s.day)&&(s=R,c=D)}}if(t==="constrain"&&c!==void 0)return c;throw new RangeError(`No recent ${this.id} year with monthCode ${g} and day ${p}`)}getFirstDayOfWeek(){}getMinimalDaysInFirstWeek(){}}class yh extends Vn{constructor(){super(...arguments),this.id="hebrew",this.calendarType="lunisolar",this.months={Tishri:{leap:1,regular:1,monthCode:"M01",days:30},Heshvan:{leap:2,regular:2,monthCode:"M02",days:{min:29,max:30}},Kislev:{leap:3,regular:3,monthCode:"M03",days:{min:29,max:30}},Tevet:{leap:4,regular:4,monthCode:"M04",days:29},Shevat:{leap:5,regular:5,monthCode:"M05",days:30},Adar:{leap:void 0,regular:6,monthCode:"M06",days:29},"Adar I":{leap:6,regular:void 0,monthCode:"M05L",days:30},"Adar II":{leap:7,regular:void 0,monthCode:"M06",days:29},Nisan:{leap:8,regular:7,monthCode:"M07",days:30},Iyar:{leap:9,regular:8,monthCode:"M08",days:29},Sivan:{leap:10,regular:9,monthCode:"M09",days:30},Tamuz:{leap:11,regular:10,monthCode:"M10",days:29},Av:{leap:12,regular:11,monthCode:"M11",days:30},Elul:{leap:13,regular:12,monthCode:"M12",days:29}}}inLeapYear(e){const{year:t}=e;return(7*t+1)%19<7}monthsInYear(e){return this.inLeapYear(e)?13:12}minimumMonthLength(e){return this.minMaxMonthLength(e,"min")}maximumMonthLength(e){return this.minMaxMonthLength(e,"max")}minMaxMonthLength(e,t){const{month:r,year:i}=e,o=this.getMonthCode(i,r),a=Object.entries(this.months).find(c=>c[1].monthCode===o);if(a===void 0)throw new RangeError(`unmatched Hebrew month: ${r}`);const s=a[1].days;return typeof s=="number"?s:s[t]}maxLengthOfMonthCodeInAnyYear(e){return["M04","M06","M08","M10","M12"].includes(e)?29:30}estimateIsoDate(e){const{year:t}=e;return{year:t-3760,month:1,day:1}}getMonthCode(e,t){return this.inLeapYear({year:e})?t===6?Ht(5,!0):Ht(t<6?t:t-1):Ht(t)}adjustCalendarDate(e,t,r="constrain",i=!1){let{year:o,month:a,monthCode:s,day:c,monthExtra:u}=e;if(o===void 0)throw new TypeError("Missing property: year");if(i){if(u){const d=this.months[u];if(!d)throw new RangeError(`Unrecognized month from formatToParts: ${u}`);a=this.inLeapYear({year:o})?d.leap:d.regular}return s=this.getMonthCode(o,a),{year:o,month:a,day:c,monthCode:s}}if(this.validateCalendarDate(e),a===void 0)if(s.endsWith("L")){if(s!=="M05L")throw new RangeError(`Hebrew leap month must have monthCode M05L, not ${s}`);if(a=6,!this.inLeapYear({year:o})){if(r==="reject")throw new RangeError(`Hebrew monthCode M05L is invalid in year ${o} which is not a leap year`);a=6,s="M06"}}else{a=Yn(s),this.inLeapYear({year:o})&&a>=6&&a++;const d=this.monthsInYear({year:o});if(a<1||a>d)throw new RangeError(`Invalid monthCode: ${s}`)}else if(r==="reject"?(we(a,1,this.monthsInYear({year:o})),we(c,1,this.maximumMonthLength({year:o,month:a}))):(a=Be(a,1,this.monthsInYear({year:o})),c=Be(c,1,this.maximumMonthLength({year:o,month:a}))),s===void 0)s=this.getMonthCode(o,a);else if(this.getMonthCode(o,a)!==s)throw new RangeError(`monthCode ${s} doesn't correspond to month ${a} in Hebrew year ${o}`);return{...e,day:c,month:a,monthCode:s,year:o}}}class xr extends Vn{constructor(){super(...arguments),this.calendarType="lunar",this.DAYS_PER_ISLAMIC_YEAR=354+11/30,this.DAYS_PER_ISO_YEAR=365.2425}inLeapYear(e,t){const r={year:e.year,month:1,monthCode:"M01",day:1},i={year:e.year+1,month:1,monthCode:"M01",day:1};return this.calendarDaysUntil(r,i,t)===355}monthsInYear(){return 12}minimumMonthLength(){return 29}maximumMonthLength(){return 30}maxLengthOfMonthCodeInAnyYear(){return 30}estimateIsoDate(e){const{year:t}=this.adjustCalendarDate(e);return{year:Math.floor(t*this.DAYS_PER_ISLAMIC_YEAR/this.DAYS_PER_ISO_YEAR)+622,month:1,day:1}}}class _h extends xr{constructor(){super(...arguments),this.id="islamic"}}class Eh extends xr{constructor(){super(...arguments),this.id="islamic-umalqura"}}class Th extends xr{constructor(){super(...arguments),this.id="islamic-tbla"}}class wh extends xr{constructor(){super(...arguments),this.id="islamic-civil"}}class vh extends xr{constructor(){super(...arguments),this.id="islamic-rgsa"}}class Sh extends xr{constructor(){super(...arguments),this.id="islamicc"}}class bh extends Vn{constructor(){super(...arguments),this.id="persian",this.calendarType="solar"}inLeapYear(e,t){return this.daysInMonth({year:e.year,month:12,day:1},t)===30}monthsInYear(){return 12}minimumMonthLength(e){const{month:t}=e;return t===12?29:t<=6?31:30}maximumMonthLength(e){const{month:t}=e;return t===12?30:t<=6?31:30}maxLengthOfMonthCodeInAnyYear(e){return Yn(e)<=6?31:30}estimateIsoDate(e){const{year:t}=this.adjustCalendarDate(e);return{year:t+621,month:1,day:1}}}class Rh extends Vn{constructor(){super(...arguments),this.id="indian",this.calendarType="solar",this.months={1:{length:30,month:3,day:22,leap:{length:31,month:3,day:21}},2:{length:31,month:4,day:21},3:{length:31,month:5,day:22},4:{length:31,month:6,day:22},5:{length:31,month:7,day:23},6:{length:31,month:8,day:23},7:{length:30,month:9,day:23},8:{length:30,month:10,day:23},9:{length:30,month:11,day:22},10:{length:30,month:12,day:22},11:{length:30,month:1,nextYear:!0,day:21},12:{length:30,month:2,nextYear:!0,day:20}},this.vulnerableToBceBug=new Date("0000-01-01T00:00Z").toLocaleDateString("en-US-u-ca-indian",{timeZone:"UTC"})!=="10/11/-79 Saka"}inLeapYear(e){return qs(e.year+78)}monthsInYear(){return 12}minimumMonthLength(e){return this.getMonthInfo(e).length}maximumMonthLength(e){return this.getMonthInfo(e).length}maxLengthOfMonthCodeInAnyYear(e){const t=Yn(e);let r=this.months[t];return r=r.leap??r,r.length}getMonthInfo(e){const{month:t}=e;let r=this.months[t];if(r===void 0)throw new RangeError(`Invalid month: ${t}`);return this.inLeapYear(e)&&r.leap&&(r=r.leap),r}estimateIsoDate(e){const t=this.adjustCalendarDate(e),r=this.getMonthInfo(t);return st(t.year+78+(r.nextYear?1:0),r.month,r.day+t.day-1)}checkIcuBugs(e){if(this.vulnerableToBceBug&&e.year<1)throw new RangeError(`calendar '${this.id}' is broken for ISO dates before 0001-01-01 (see https://bugs.chromium.org/p/v8/issues/detail?id=10529)`)}}function qs(n){return n%4==0&&(n%100!=0||n%400==0)}class dd extends Vn{constructor(e,t){super(),this.calendarType="solar",this.id=e,this.isoEpoch=t}inLeapYear(e){const{year:t}=this.estimateIsoDate({month:1,day:1,year:e.year});return qs(t)}monthsInYear(){return 12}minimumMonthLength(e){const{month:t}=e;return t===2?this.inLeapYear(e)?29:28:[4,6,9,11].indexOf(t)>=0?30:31}maximumMonthLength(e){return this.minimumMonthLength(e)}maxLengthOfMonthCodeInAnyYear(e){return[31,29,31,30,31,30,31,31,30,31,30,31][Yn(e)-1]}estimateIsoDate(e){const t=this.adjustCalendarDate(e);return Kr(t.year+this.isoEpoch.year,t.month+this.isoEpoch.month,t.day+this.isoEpoch.day,"constrain")}}class ld extends Vn{constructor(e,t){super(),this.hasEra=!0,this.calendarType="solar",this.id=e;const{eras:r,anchorEra:i}=function(o){let a,s=o;if(s.length===0)throw new RangeError("Invalid era data: eras are required");if(s.length===1&&s[0].reverseOf)throw new RangeError("Invalid era data: anchor era cannot count years backwards");if(s.length===1&&!s[0].code)throw new RangeError("Invalid era data: at least one named era is required");if(s.filter(u=>u.reverseOf!=null).length>1)throw new RangeError("Invalid era data: only one era can count years backwards");s.forEach(u=>{if(u.isAnchor||!u.anchorEpoch&&!u.reverseOf){if(a)throw new RangeError("Invalid era data: cannot have multiple anchor eras");a=u,u.anchorEpoch={year:u.hasYearZero?0:1}}else if(!u.code)throw new RangeError("If era name is blank, it must be the anchor era")}),s=s.filter(u=>u.code),s.forEach(u=>{const{reverseOf:d}=u;if(d){const l=s.find(f=>f.code===d);if(l===void 0)throw new RangeError(`Invalid era data: unmatched reverseOf era: ${d}`);u.reverseOf=l,u.anchorEpoch=l.anchorEpoch,u.isoEpoch=l.isoEpoch}u.anchorEpoch.month===void 0&&(u.anchorEpoch.month=1),u.anchorEpoch.day===void 0&&(u.anchorEpoch.day=1)}),s.sort((u,d)=>{if(u.reverseOf)return 1;if(d.reverseOf)return-1;if(!u.isoEpoch||!d.isoEpoch)throw new RangeError("Invalid era data: missing ISO epoch");return d.isoEpoch.year-u.isoEpoch.year});const c=s[s.length-1].reverseOf;if(c&&c!==s[s.length-2])throw new RangeError("Invalid era data: invalid reverse-sign era");return s.forEach((u,d)=>{u.genericName="era"+(s.length-1-d)}),{eras:s,anchorEra:a||s[0]}}(t);this.anchorEra=i,this.eras=r}inLeapYear(e){const{year:t}=this.estimateIsoDate({month:1,day:1,year:e.year});return qs(t)}monthsInYear(){return 12}minimumMonthLength(e){const{month:t}=e;return t===2?this.inLeapYear(e)?29:28:[4,6,9,11].indexOf(t)>=0?30:31}maximumMonthLength(e){return this.minimumMonthLength(e)}maxLengthOfMonthCodeInAnyYear(e){return[31,29,31,30,31,30,31,31,30,31,30,31][Yn(e)-1]}completeEraYear(e){const t=(s,c,u)=>{const d=e[s];if(d!=null&&d!=c&&!(u||[]).includes(d)){const l=u==null?void 0:u[0];throw new RangeError(`Input ${s} ${d} doesn't match calculated value ${l?`${c} (also called ${l})`:c}`)}},r=s=>{let c;const u={...e,year:s},d=this.eras.find((l,f)=>{if(f===this.eras.length-1){if(l.reverseOf){if(s>0)throw new RangeError(`Signed year ${s} is invalid for era ${l.code}`);return c=l.anchorEpoch.year-s,!0}return c=s-l.anchorEpoch.year+(l.hasYearZero?0:1),!0}return this.compareCalendarDates(u,l.anchorEpoch)>=0&&(c=s-l.anchorEpoch.year+(l.hasYearZero?0:1),!0)});if(!d)throw new RangeError(`Year ${s} was not matched by any era`);return{eraYear:c,era:d.code,eraNames:d.names}};let{year:i,eraYear:o,era:a}=e;if(i!=null){const s=r(i);({eraYear:o,era:a}=s),t("era",a,s==null?void 0:s.eraNames),t("eraYear",o)}else{if(o==null)throw new RangeError("Either year or eraYear and era are required");{if(a===void 0)throw new RangeError("era and eraYear must be provided together");const s=this.eras.find(({code:c,names:u=[]})=>c===a||u.includes(a));if(!s)throw new RangeError(`Era ${a} (ISO year ${o}) was not matched by any era`);i=s.reverseOf?s.anchorEpoch.year-o:o+s.anchorEpoch.year-(s.hasYearZero?0:1),t("year",i),{eraYear:o,era:a}=r(i)}}return{...e,year:i,eraYear:o,era:a}}adjustCalendarDate(e,t,r="constrain"){let i=e;const{month:o,monthCode:a}=i;return o===void 0&&(i={...i,month:Yn(a)}),this.validateCalendarDate(i),i=this.completeEraYear(i),super.adjustCalendarDate(i,t,r)}estimateIsoDate(e){const t=this.adjustCalendarDate(e),{year:r,month:i,day:o}=t,{anchorEra:a}=this;return Kr(r+a.isoEpoch.year-(a.hasYearZero?0:1),i,o,"constrain")}}class Zs extends ld{constructor(e,t){super(e,t)}isoToCalendarDate(e){const{year:t,month:r,day:i}=e,o=Ht(r),a=t-this.anchorEra.isoEpoch.year+1;return this.completeEraYear({year:a,month:r,monthCode:o,day:i})}}const Lt={inLeapYear(n){const{year:e}=n;return(e+1)%4==0},monthsInYear:()=>13,minimumMonthLength(n){const{month:e}=n;return e===13?this.inLeapYear(n)?6:5:30},maximumMonthLength(n){return this.minimumMonthLength(n)},maxLengthOfMonthCodeInAnyYear:n=>n==="M13"?6:30};class Dh extends dd{constructor(e,t){super(e,t),this.inLeapYear=Lt.inLeapYear,this.monthsInYear=Lt.monthsInYear,this.minimumMonthLength=Lt.minimumMonthLength,this.maximumMonthLength=Lt.maximumMonthLength,this.maxLengthOfMonthCodeInAnyYear=Lt.maxLengthOfMonthCodeInAnyYear}}class hd extends ld{constructor(e,t){super(e,t),this.inLeapYear=Lt.inLeapYear,this.monthsInYear=Lt.monthsInYear,this.minimumMonthLength=Lt.minimumMonthLength,this.maximumMonthLength=Lt.maximumMonthLength,this.maxLengthOfMonthCodeInAnyYear=Lt.maxLengthOfMonthCodeInAnyYear}}class Ah extends Dh{constructor(){super("ethioaa",{year:-5492,month:7,day:17})}}class Mh extends hd{constructor(){super("coptic",[{code:"coptic",isoEpoch:{year:284,month:8,day:29}},{code:"coptic-inverse",reverseOf:"coptic"}])}}class xh extends hd{constructor(){super("ethiopic",[{code:"ethioaa",names:["ethiopic-amete-alem","mundi"],isoEpoch:{year:-5492,month:7,day:17}},{code:"ethiopic",names:["incar"],isoEpoch:{year:8,month:8,day:27},anchorEpoch:{year:5501}}])}}class Ih extends Zs{constructor(){super("roc",[{code:"roc",names:["minguo"],isoEpoch:{year:1912,month:1,day:1}},{code:"roc-inverse",names:["before-roc"],reverseOf:"roc"}])}}class Ch extends dd{constructor(){super("buddhist",{year:-543,month:1,day:1})}}class Nh extends Zs{constructor(){super("gregory",[{code:"gregory",names:["ad","ce"],isoEpoch:{year:1,month:1,day:1}},{code:"gregory-inverse",names:["be","bce"],reverseOf:"gregory"}])}reviseIntlEra(e){let{era:t,eraYear:r}=e;return t==="b"&&(t="gregory-inverse"),t==="a"&&(t="gregory"),{era:t,eraYear:r}}getFirstDayOfWeek(){return 1}getMinimalDaysInFirstWeek(){return 1}}class Oh extends Zs{constructor(){super("japanese",[{code:"reiwa",isoEpoch:{year:2019,month:5,day:1},anchorEpoch:{year:2019,month:5,day:1}},{code:"heisei",isoEpoch:{year:1989,month:1,day:8},anchorEpoch:{year:1989,month:1,day:8}},{code:"showa",isoEpoch:{year:1926,month:12,day:25},anchorEpoch:{year:1926,month:12,day:25}},{code:"taisho",isoEpoch:{year:1912,month:7,day:30},anchorEpoch:{year:1912,month:7,day:30}},{code:"meiji",isoEpoch:{year:1868,month:9,day:8},anchorEpoch:{year:1868,month:9,day:8}},{code:"japanese",names:["japanese","gregory","ad","ce"],isoEpoch:{year:1,month:1,day:1}},{code:"japanese-inverse",names:["japanese-inverse","gregory-inverse","bc","bce"],reverseOf:"japanese"}]),this.erasBeginMidYear=!0}reviseIntlEra(e,t){const{era:r,eraYear:i}=e,{year:o}=t;return this.eras.find(a=>a.code===r)?{era:r,eraYear:i}:o<1?{era:"japanese-inverse",eraYear:1-o}:{era:"japanese",eraYear:o}}}class md extends Vn{constructor(){super(...arguments),this.calendarType="lunisolar"}inLeapYear(e,t){const r=this.getMonthList(e.year,t);return Object.entries(r).length===13}monthsInYear(e,t){return this.inLeapYear(e,t)?13:12}minimumMonthLength(){return 29}maximumMonthLength(){return 30}maxLengthOfMonthCodeInAnyYear(e){return["M01L","M09L","M10L","M11L","M12L"].includes(e)?29:30}monthDaySearchStartYear(e,t){const r={M01L:[1651,1651],M02L:[1947,1765],M03L:[1966,1955],M04L:[1963,1944],M05L:[1971,1952],M06L:[1960,1941],M07L:[1968,1938],M08L:[1957,1718],M09L:[1832,1832],M10L:[1870,1870],M11L:[1814,1814],M12L:[1890,1890]}[e]??[1972,1972];return t<30?r[0]:r[1]}getMonthList(e,t){if(e===void 0)throw new TypeError("Missing year");const r=JSON.stringify({func:"getMonthList",calendarYear:e,id:this.id}),i=t.get(r);if(i)return i;const o=this.getFormatter(),a=(_,T)=>{const v=ud({isoYear:_,isoMonth:2,isoDay:1}),S=new Date(v);S.setUTCDate(T+1);const D=o.formatToParts(S),R=D.find(L=>L.type==="month").value,G=+D.find(L=>L.type==="day").value,Y=D.find(L=>L.type==="relatedYear");let q;if(Y===void 0)throw new RangeError(`Intl.DateTimeFormat.formatToParts lacks relatedYear in ${this.id} calendar. Try Node 14+ or modern browsers.`);return q=+Y.value,{calendarMonthString:R,calendarDay:G,calendarYearToVerify:q}};let s=17,{calendarMonthString:c,calendarDay:u,calendarYearToVerify:d}=a(e,s);c!=="1"&&(s+=29,{calendarMonthString:c,calendarDay:u}=a(e,s)),s-=u-5;const l={};let f,g,p=1,y=!1;do({calendarMonthString:c,calendarDay:u,calendarYearToVerify:d}=a(e,s)),f&&(l[g].daysInMonth=f+30-u),d!==e?y=!0:(l[c]={monthIndex:p++},s+=30),f=u,g=c;while(!y);return l[g].daysInMonth=f+30-u,t.set(r,l),l}estimateIsoDate(e){const{year:t,month:r}=e;return{year:t,month:r>=12?12:r+1,day:1}}adjustCalendarDate(e,t,r="constrain",i=!1){let{year:o,month:a,monthExtra:s,day:c,monthCode:u}=e;if(o===void 0)throw new TypeError("Missing property: year");if(i){if(s&&s!=="bis")throw new RangeError(`Unexpected leap month suffix: ${s}`);const d=Ht(a,s!==void 0),l=`${a}${s||""}`,f=this.getMonthList(o,t)[l];if(f===void 0)throw new RangeError(`Unmatched month ${l} in Chinese year ${o}`);return a=f.monthIndex,{year:o,month:a,day:c,monthCode:d}}if(this.validateCalendarDate(e),a===void 0){const d=this.getMonthList(o,t);let l=u.replace(/^M|L$/g,g=>g==="L"?"bis":"");l[0]==="0"&&(l=l.slice(1));let f=d[l];if(a=f&&f.monthIndex,a===void 0&&u.endsWith("L")&&u!="M13L"&&r==="constrain"){const g=+u.replace(/^M0?|L$/g,"");f=d[g],f&&(a=f.monthIndex,u=Ht(g))}if(a===void 0)throw new RangeError(`Unmatched month ${u} in Chinese year ${o}`)}else if(u===void 0){const d=this.getMonthList(o,t),l=Object.entries(d),f=l.length;r==="reject"?(we(a,1,f),we(c,1,this.maximumMonthLength())):(a=Be(a,1,f),c=Be(c,1,this.maximumMonthLength()));const g=l.find(p=>p[1].monthIndex===a);if(g===void 0)throw new RangeError(`Invalid month ${a} in Chinese year ${o}`);u=Ht(+g[0].replace("bis",""),g[0].indexOf("bis")!==-1)}else{const d=this.getMonthList(o,t);let l=u.replace(/^M|L$/g,g=>g==="L"?"bis":"");l[0]==="0"&&(l=l.slice(1));const f=d[l];if(!f)throw new RangeError(`Unmatched monthCode ${u} in Chinese year ${o}`);if(a!==f.monthIndex)throw new RangeError(`monthCode ${u} doesn't correspond to month ${a} in Chinese year ${o}`)}return{...e,year:o,month:a,monthCode:u,day:c}}}class Lh extends md{constructor(){super(...arguments),this.id="chinese"}}class Ph extends md{constructor(){super(...arguments),this.id="dangi"}}class Uh{constructor(e){this.helper=e}extraFields(e){return this.helper.hasEra&&e.includes("year")?["era","eraYear"]:[]}resolveFields(e){if(this.helper.calendarType!=="lunisolar"){const t=new Te;Vs(e,void 0,this.helper.monthsInYear({year:e.year??1972},t))}}dateToISO(e,t){const r=new Te,i=this.helper.calendarToIsoDate(e,t,r);return r.setObject(i),i}monthDayToISOReferenceDate(e,t){const r=new Te,i=this.helper.monthDayFromFields(e,t,r);return r.setObject(i),i}fieldKeysToIgnore(e){const t=new Set;for(let r=0;r<e.length;r++){const i=e[r];switch(t.add(i),i){case"era":t.add("eraYear"),t.add("year");break;case"eraYear":t.add("era"),t.add("year");break;case"year":t.add("era"),t.add("eraYear");break;case"month":t.add("monthCode"),this.helper.erasBeginMidYear&&(t.add("era"),t.add("eraYear"));break;case"monthCode":t.add("month"),this.helper.erasBeginMidYear&&(t.add("era"),t.add("eraYear"));break;case"day":this.helper.erasBeginMidYear&&(t.add("era"),t.add("eraYear"))}}return sd(t)}dateAdd(e,{years:t,months:r,weeks:i,days:o},a){const s=Te.getCacheForObject(e),c=this.helper.isoToCalendarDate(e,s),u=this.helper.addCalendar(c,{years:t,months:r,weeks:i,days:o},a,s),d=this.helper.calendarToIsoDate(u,"constrain",s);return Te.getCacheForObject(d)||new Te(s).setObject(d),d}dateUntil(e,t,r){const i=Te.getCacheForObject(e),o=Te.getCacheForObject(t),a=this.helper.isoToCalendarDate(e,i),s=this.helper.isoToCalendarDate(t,o);return this.helper.untilCalendar(a,s,r,i)}isoToDate(e,t){const r=Te.getCacheForObject(e),i=this.helper.isoToCalendarDate(e,r);if(t.dayOfWeek&&(i.dayOfWeek=Ai.iso8601.isoToDate(e,{dayOfWeek:!0}).dayOfWeek),t.dayOfYear){const o=this.helper.startOfCalendarYear(i),a=this.helper.calendarDaysUntil(o,i,r);i.dayOfYear=a+1}if(t.weekOfYear&&(i.weekOfYear=cd(this.helper.id,e)),i.daysInWeek=7,t.daysInMonth&&(i.daysInMonth=this.helper.daysInMonth(i,r)),t.daysInYear){const o=this.helper.startOfCalendarYear(i),a=this.helper.addCalendar(o,{years:1},"constrain",r);i.daysInYear=this.helper.calendarDaysUntil(o,a,r)}return t.monthsInYear&&(i.monthsInYear=this.helper.monthsInYear(i,r)),t.inLeapYear&&(i.inLeapYear=this.helper.inLeapYear(i,r)),i}getFirstDayOfWeek(){return this.helper.getFirstDayOfWeek()}getMinimalDaysInFirstWeek(){return this.helper.getMinimalDaysInFirstWeek()}}for(const n of[yh,bh,xh,Ah,Mh,Lh,Ph,Ih,Rh,Ch,Nh,Oh,_h,Eh,Th,wh,vh,Sh]){const e=new n;Ai[e.id]=new Uh(e)}ja("calendarImpl",function(n){return Ai[n]});const di=Intl.DateTimeFormat;function Xn(n,e){let t=m(n,e);return typeof t=="function"&&(t=new di(m(n,bu),t(m(n,Ga))),function(r,i,o){const a=Lo(r);if(a===void 0)throw new TypeError("Missing slots for the given container");if(a[i]===void 0)throw new TypeError(`tried to reset ${i} which was not set`);a[i]=o}(n,e,t)),t}function Or(n){return Ke(n,Wn)}class li{constructor(e=void 0,t=void 0){(function(r,i,o){const a=o!==void 0;let s;if(a){const l=["localeMatcher","calendar","numberingSystem","hour12","hourCycle","timeZone","weekday","era","year","month","day","dayPeriod","hour","minute","second","fractionalSecondDigits","timeZoneName","formatMatcher","dateStyle","timeStyle"];s=function(g){if(g==null)throw new TypeError(`Expected object not ${g}`);return Object(g)}(o);const f=Object.create(null);for(let g=0;g<l.length;g++){const p=l[g];Object.prototype.hasOwnProperty.call(s,p)&&(f[p]=s[p])}s=f}else s=Object.create(null);const c=new di(i,s),u=c.resolvedOptions();if(dn(r),a){const l=Object.assign(Object.create(null),u);for(const f in l)Object.prototype.hasOwnProperty.call(s,f)||delete l[f];l.hour12=s.hour12,l.hourCycle=s.hourCycle,U(r,Ga,l)}else U(r,Ga,s);U(r,bu,u.locale),U(r,Wn,c),U(r,nr,u.timeZone),U(r,$r,u.calendar),U(r,_u,Wh),U(r,Eu,kh),U(r,Tu,jh),U(r,wu,Yh),U(r,vu,Bh),U(r,Su,Vh);const d=a?s.timeZone:void 0;if(d===void 0)U(r,Fa,u.timeZone);else{const l=Ho(d);if(l.startsWith("−"))throw new RangeError("Unicode minus (U+2212) is not supported in time zone offsets");U(r,Fa,qe(l))}})(this,e,t)}get format(){E(this,Or);const e=Hh.bind(this);return Object.defineProperties(e,{length:{value:1,enumerable:!1,writable:!1,configurable:!0},name:{value:"",enumerable:!1,writable:!1,configurable:!0}}),e}formatRange(e,t){return E(this,Or),Gh.call(this,e,t)}formatToParts(e,...t){return E(this,Or),Fh.call(this,e,...t)}formatRangeToParts(e,t){return E(this,Or),zh.call(this,e,t)}resolvedOptions(){return E(this,Or),$h.call(this)}}"formatToParts"in di.prototype||delete li.prototype.formatToParts,"formatRangeToParts"in di.prototype||delete li.prototype.formatRangeToParts;const Et=function(n=void 0,e=void 0){return new li(n,e)};function $h(){const n=m(this,Wn).resolvedOptions();return n.timeZone=m(this,Fa),n}function Hh(n,...e){let t,r,i=Er(n,this);return i.formatter?(t=i.formatter,r=[vt(i.epochNs,"floor")]):(t=m(this,Wn),r=[n,...e]),t.format(...r)}function Fh(n,...e){let t,r,i=Er(n,this);return i.formatter?(t=i.formatter,r=[vt(i.epochNs,"floor")]):(t=m(this,Wn),r=[n,...e]),t.formatToParts(...r)}function Gh(n,e){if(n===void 0||e===void 0)throw new TypeError("Intl.DateTimeFormat.formatRange requires two values");const t=go(n),r=go(e);let i,o=[t,r];if(sn(t)!==sn(r))throw new TypeError("Intl.DateTimeFormat.formatRange accepts two values of the same type");if(sn(t)){if(!fd(t,r))throw new TypeError("Intl.DateTimeFormat.formatRange accepts two values of the same type");const{epochNs:a,formatter:s}=Er(t,this),{epochNs:c,formatter:u}=Er(r,this);s&&(i=s,o=[vt(a,"floor"),vt(c,"floor")])}return i||(i=m(this,Wn)),i.formatRange(...o)}function zh(n,e){if(n===void 0||e===void 0)throw new TypeError("Intl.DateTimeFormat.formatRange requires two values");const t=go(n),r=go(e);let i,o=[t,r];if(sn(t)!==sn(r))throw new TypeError("Intl.DateTimeFormat.formatRangeToParts accepts two values of the same type");if(sn(t)){if(!fd(t,r))throw new TypeError("Intl.DateTimeFormat.formatRangeToParts accepts two values of the same type");const{epochNs:a,formatter:s}=Er(t,this),{epochNs:c,formatter:u}=Er(r,this);s&&(i=s,o=[vt(a,"floor"),vt(c,"floor")])}return i||(i=m(this,Wn)),i.formatRangeToParts(...o)}function Mi(n={},e={}){const t=Object.assign({},n),r=["year","month","day","hour","minute","second","weekday","dayPeriod","timeZoneName","dateStyle","timeStyle"];for(let i=0;i<r.length;i++){const o=r[i];t[o]=o in e?e[o]:t[o],t[o]!==!1&&t[o]!==void 0||delete t[o]}return t}function Yh(n){const e=Mi(n,{year:!1,month:!1,day:!1,weekday:!1,timeZoneName:!1,dateStyle:!1});if(e.timeStyle!=="long"&&e.timeStyle!=="full"||(delete e.timeStyle,Object.assign(e,{hour:"numeric",minute:"2-digit",second:"2-digit"})),!Vo(e)){if(xi(n))throw new TypeError(`cannot format Temporal.PlainTime with options [${Object.keys(n)}]`);Object.assign(e,{hour:"numeric",minute:"numeric",second:"numeric"})}return e}function kh(n){const e={short:{year:"2-digit",month:"numeric"},medium:{year:"numeric",month:"short"},long:{year:"numeric",month:"long"},full:{year:"numeric",month:"long"}},t=Mi(n,{day:!1,hour:!1,minute:!1,second:!1,weekday:!1,dayPeriod:!1,timeZoneName:!1,timeStyle:!1});if("dateStyle"in t&&t.dateStyle){const r=t.dateStyle;delete t.dateStyle,Object.assign(t,e[r])}if(!("year"in t||"month"in t||"era"in t)){if(xi(n))throw new TypeError(`cannot format PlainYearMonth with options [${Object.keys(n)}]`);Object.assign(t,{year:"numeric",month:"numeric"})}return t}function jh(n){const e={short:{month:"numeric",day:"numeric"},medium:{month:"short",day:"numeric"},long:{month:"long",day:"numeric"},full:{month:"long",day:"numeric"}},t=Mi(n,{year:!1,hour:!1,minute:!1,second:!1,weekday:!1,dayPeriod:!1,timeZoneName:!1,timeStyle:!1});if("dateStyle"in t&&t.dateStyle){const r=t.dateStyle;delete t.dateStyle,Object.assign(t,e[r])}if(!("month"in t)&&!("day"in t)){if(xi(n))throw new TypeError(`cannot format PlainMonthDay with options [${Object.keys(n)}]`);Object.assign(t,{month:"numeric",day:"numeric"})}return t}function Wh(n){const e=Mi(n,{hour:!1,minute:!1,second:!1,dayPeriod:!1,timeZoneName:!1,timeStyle:!1});if(!Bo(e)){if(xi(n))throw new TypeError(`cannot format PlainDate with options [${Object.keys(n)}]`);Object.assign(e,{year:"numeric",month:"numeric",day:"numeric"})}return e}function Bh(n){const e=Mi(n,{timeZoneName:!1});if((e.timeStyle==="long"||e.timeStyle==="full")&&(delete e.timeStyle,Object.assign(e,{hour:"numeric",minute:"2-digit",second:"2-digit"}),e.dateStyle)&&(Object.assign(e,{short:{year:"numeric",month:"numeric",day:"numeric"},medium:{year:"numeric",month:"short",day:"numeric"},long:{year:"numeric",month:"long",day:"numeric"},full:{year:"numeric",month:"long",day:"numeric",weekday:"long"}}[e.dateStyle]),delete e.dateStyle),!Vo(e)&&!Bo(e)){if(xi(n))throw new TypeError(`cannot format PlainDateTime with options [${Object.keys(n)}]`);Object.assign(e,{year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric"})}return e}function Vh(n){let e=n;return Vo(e)||Bo(e)||(e=Object.assign({},e,{year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric"})),e}function Bo(n){return"year"in n||"month"in n||"day"in n||"weekday"in n||"dateStyle"in n||"era"in n}function Vo(n){return"hour"in n||"minute"in n||"second"in n||"timeStyle"in n||"dayPeriod"in n||"fractionalSecondDigits"in n}function xi(n){return Bo(n)||Vo(n)||"dateStyle"in n||"timeStyle"in n||"timeZoneName"in n}function sn(n){return ae(n)||ue(n)||te(n)||H(n)||Re(n)||ht(n)||be(n)}function go(n){return sn(n)?n:$o(n)}function fd(n,e){return!(!sn(n)||!sn(e)||ue(n)&&!ue(e)||ae(n)&&!ae(e)||te(n)&&!te(e)||H(n)&&!H(e)||Re(n)&&!Re(e)||ht(n)&&!ht(e)||be(n)&&!be(e))}function Er(n,e){if(ue(n)){const t={isoDate:{year:1970,month:1,day:1},time:m(n,se)};return{epochNs:Oe(m(e,nr),t,"compatible"),formatter:Xn(e,wu)}}if(Re(n)){const t=m(n,b),r=m(e,$r);if(t!==r)throw new RangeError(`cannot format PlainYearMonth with calendar ${t} in locale with calendar ${r}`);const i=j(m(n,N),{deltaDays:0,hour:12,minute:0,second:0,millisecond:0,microsecond:0,nanosecond:0});return{epochNs:Oe(m(e,nr),i,"compatible"),formatter:Xn(e,Eu)}}if(ht(n)){const t=m(n,b),r=m(e,$r);if(t!==r)throw new RangeError(`cannot format PlainMonthDay with calendar ${t} in locale with calendar ${r}`);const i=j(m(n,N),{deltaDays:0,hour:12,minute:0,second:0,millisecond:0,microsecond:0,nanosecond:0});return{epochNs:Oe(m(e,nr),i,"compatible"),formatter:Xn(e,Tu)}}if(ae(n)){const t=m(n,b),r=m(e,$r);if(t!=="iso8601"&&t!==r)throw new RangeError(`cannot format PlainDate with calendar ${t} in locale with calendar ${r}`);const i=j(m(n,N),{deltaDays:0,hour:12,minute:0,second:0,millisecond:0,microsecond:0,nanosecond:0});return{epochNs:Oe(m(e,nr),i,"compatible"),formatter:Xn(e,_u)}}if(te(n)){const t=m(n,b),r=m(e,$r);if(t!=="iso8601"&&t!==r)throw new RangeError(`cannot format PlainDateTime with calendar ${t} in locale with calendar ${r}`);const i=m(n,re);return{epochNs:Oe(m(e,nr),i,"compatible"),formatter:Xn(e,vu)}}if(H(n))throw new TypeError("Temporal.ZonedDateTime not supported in DateTimeFormat methods. Use toLocaleString() instead.");return be(n)?{epochNs:m(n,C),formatter:Xn(e,Su)}:{}}function gd(n){const e=Object.create(null);return e.years=m(n,He),e.months=m(n,Fe),e.weeks=m(n,rt),e.days=m(n,Ge),e.hours=m(n,ze),e.minutes=m(n,Ye),e.seconds=m(n,ke),e.milliseconds=m(n,je),e.microseconds=m(n,We),e.nanoseconds=m(n,it),e}li.prototype.constructor=Et,Object.defineProperty(Et,"prototype",{value:li.prototype,writable:!1,enumerable:!1,configurable:!1}),Et.supportedLocalesOf=di.supportedLocalesOf,ln(Et,"Intl.DateTimeFormat");var tu;const{format:qh,formatToParts:Zh}=((tu=Intl.DurationFormat)==null?void 0:tu.prototype)??Object.create(null);function pd(n){Intl.DurationFormat.prototype.resolvedOptions.call(this);const e=gd(Tt(n));return qh.call(this,e)}var nu;(nu=Intl.DurationFormat)!=null&&nu.prototype&&(Intl.DurationFormat.prototype.format=pd,Intl.DurationFormat.prototype.formatToParts=function(n){Intl.DurationFormat.prototype.resolvedOptions.call(this);const e=gd(Tt(n));return Zh.call(this,e)});class Xs{constructor(e){if(arguments.length<1)throw new TypeError("missing argument: epochNanoseconds is required");ku(this,fo(e))}get epochMilliseconds(){return E(this,be),vt(m(this,C),"floor")}get epochNanoseconds(){return E(this,be),od(h.BigInt(m(this,C)))}add(e){return E(this,be),ac("add",this,e)}subtract(e){return E(this,be),ac("subtract",this,e)}until(e,t=void 0){return E(this,be),J0("until",this,e,t)}since(e,t=void 0){return E(this,be),J0("since",this,e,t)}round(e){if(E(this,be),e===void 0)throw new TypeError("options parameter is required");const t=typeof e=="string"?zn("smallestUnit",e):I(e),r=Rr(t),i=At(t,"halfExpand"),o=at(t,"smallestUnit","time",un);return Dr(r,{hour:24,minute:1440,second:86400,millisecond:864e5,microsecond:864e8,nanosecond:864e11}[o],!0),Pt(es(m(this,C),r,o,i))}equals(e){E(this,be);const t=Gr(e),r=m(this,C),i=m(t,C);return h.equal(h.BigInt(r),h.BigInt(i))}toString(e=void 0){E(this,be);const t=I(e),r=Ei(t),i=At(t,"trunc"),o=at(t,"smallestUnit","time",void 0);if(o==="hour")throw new RangeError('smallestUnit must be a time unit other than "hour"');let a=t.timeZone;a!==void 0&&(a=qe(a));const{precision:s,unit:c,increment:u}=Ti(o,r);return j0(Pt(es(m(this,C),u,c,i)),a,s)}toJSON(){return E(this,be),j0(this,void 0,"auto")}toLocaleString(e=void 0,t=void 0){return E(this,be),new Et(e,t).format(this)}valueOf(){An("Instant")}toZonedDateTimeISO(e){E(this,be);const t=qe(e);return xe(m(this,C),t,"iso8601")}static fromEpochMilliseconds(e){return Pt($t($o(e)))}static fromEpochNanoseconds(e){return Pt(fo(e))}static from(e){return Gr(e)}static compare(e,t){const r=Gr(e),i=Gr(t),o=m(r,C),a=m(i,C);return h.lessThan(o,a)?-1:h.greaterThan(o,a)?1:0}}ln(Xs,"Temporal.Instant");class Ks{constructor(e,t,r,i="iso8601"){const o=O(e),a=O(t),s=O(r),c=Qe(i===void 0?"iso8601":ye(i));Hn(o,a,s),Hu(this,{year:o,month:a,day:s},c)}get calendarId(){return E(this,ae),m(this,b)}get era(){return Pe(this,"era")}get eraYear(){return Pe(this,"eraYear")}get year(){return Pe(this,"year")}get month(){return Pe(this,"month")}get monthCode(){return Pe(this,"monthCode")}get day(){return Pe(this,"day")}get dayOfWeek(){return Pe(this,"dayOfWeek")}get dayOfYear(){return Pe(this,"dayOfYear")}get weekOfYear(){var e;return(e=Pe(this,"weekOfYear"))==null?void 0:e.week}get yearOfWeek(){var e;return(e=Pe(this,"weekOfYear"))==null?void 0:e.year}get daysInWeek(){return Pe(this,"daysInWeek")}get daysInMonth(){return Pe(this,"daysInMonth")}get daysInYear(){return Pe(this,"daysInYear")}get monthsInYear(){return Pe(this,"monthsInYear")}get inLeapYear(){return Pe(this,"inLeapYear")}with(e,t=void 0){if(E(this,ae),!ce(e))throw new TypeError("invalid argument");br(e);const r=m(this,b);let i=Xe(r,m(this,N));return i=$n(r,i,pt(r,e,["year","month","monthCode","day"],[],"partial")),Ve(Rn(r,i,k(I(t))),r)}withCalendar(e){E(this,ae);const t=bi(e);return Ve(m(this,N),t)}add(e,t=void 0){return E(this,ae),sc("add",this,e,t)}subtract(e,t=void 0){return E(this,ae),sc("subtract",this,e,t)}until(e,t=void 0){return E(this,ae),ec("until",this,e,t)}since(e,t=void 0){return E(this,ae),ec("since",this,e,t)}equals(e){E(this,ae);const t=Hr(e);return zt(m(this,N),m(t,N))===0&&Ft(m(this,b),m(t,b))}toString(e=void 0){return E(this,ae),W0(this,_i(I(e)))}toJSON(){return E(this,ae),W0(this)}toLocaleString(e=void 0,t=void 0){return E(this,ae),new Et(e,t).format(this)}valueOf(){An("PlainDate")}toPlainDateTime(e=void 0){E(this,ae);const t=$u(e);return yt(j(m(this,N),t),m(this,b))}toZonedDateTime(e){let t,r;if(E(this,ae),ce(e)){const a=e.timeZone;a===void 0?t=qe(e):(t=qe(a),r=e.plainTime)}else t=qe(e);const i=m(this,N);let o;return r===void 0?o=gn(t,i):(r=yn(r),o=Oe(t,j(i,m(r,se)),"compatible")),xe(o,t,m(this,b))}toPlainYearMonth(){E(this,ae);const e=m(this,b);return ur(oi(e,Xe(e,m(this,N)),"constrain"),e)}toPlainMonthDay(){E(this,ae);const e=m(this,b);return ar(co(e,Xe(e,m(this,N)),"constrain"),e)}static from(e,t=void 0){return Hr(e,t)}static compare(e,t){const r=Hr(e),i=Hr(t);return zt(m(r,N),m(i,N))}}function Pe(n,e){E(n,ae);const t=m(n,N);return wi(n).isoToDate(t,{[e]:!0})[e]}ln(Ks,"Temporal.PlainDate");class Qs{constructor(e,t,r,i=0,o=0,a=0,s=0,c=0,u=0,d="iso8601"){const l=O(e),f=O(t),g=O(r),p=i===void 0?0:O(i),y=o===void 0?0:O(o),_=a===void 0?0:O(a),T=s===void 0?0:O(s),v=c===void 0?0:O(c),S=u===void 0?0:O(u),D=Qe(d===void 0?"iso8601":ye(d));ks(l,f,g,p,y,_,T,v,S),Fu(this,{isoDate:{year:l,month:f,day:g},time:{hour:p,minute:y,second:_,millisecond:T,microsecond:v,nanosecond:S}},D)}get calendarId(){return E(this,te),m(this,b)}get year(){return Ue(this,"year")}get month(){return Ue(this,"month")}get monthCode(){return Ue(this,"monthCode")}get day(){return Ue(this,"day")}get hour(){return Kn(this,"hour")}get minute(){return Kn(this,"minute")}get second(){return Kn(this,"second")}get millisecond(){return Kn(this,"millisecond")}get microsecond(){return Kn(this,"microsecond")}get nanosecond(){return Kn(this,"nanosecond")}get era(){return Ue(this,"era")}get eraYear(){return Ue(this,"eraYear")}get dayOfWeek(){return Ue(this,"dayOfWeek")}get dayOfYear(){return Ue(this,"dayOfYear")}get weekOfYear(){var e;return(e=Ue(this,"weekOfYear"))==null?void 0:e.week}get yearOfWeek(){var e;return(e=Ue(this,"weekOfYear"))==null?void 0:e.year}get daysInWeek(){return Ue(this,"daysInWeek")}get daysInYear(){return Ue(this,"daysInYear")}get daysInMonth(){return Ue(this,"daysInMonth")}get monthsInYear(){return Ue(this,"monthsInYear")}get inLeapYear(){return Ue(this,"inLeapYear")}with(e,t=void 0){if(E(this,te),!ce(e))throw new TypeError("invalid argument");br(e);const r=m(this,b),i=m(this,re);let o={...Xe(r,i.isoDate),...i.time};return o=$n(r,o,pt(r,e,["year","month","monthCode","day"],["hour","minute","second","millisecond","microsecond","nanosecond"],"partial")),yt(vi(r,o,k(I(t))),r)}withPlainTime(e=void 0){E(this,te);const t=$u(e);return yt(j(m(this,re).isoDate,t),m(this,b))}withCalendar(e){E(this,te);const t=bi(e);return yt(m(this,re),t)}add(e,t=void 0){return E(this,te),cc("add",this,e,t)}subtract(e,t=void 0){return E(this,te),cc("subtract",this,e,t)}until(e,t=void 0){return E(this,te),tc("until",this,e,t)}since(e,t=void 0){return E(this,te),tc("since",this,e,t)}round(e){if(E(this,te),e===void 0)throw new TypeError("options parameter is required");const t=typeof e=="string"?zn("smallestUnit",e):I(e),r=Rr(t),i=At(t,"halfExpand"),o=at(t,"smallestUnit","time",un,["day"]),a={day:1,hour:24,minute:60,second:60,millisecond:1e3,microsecond:1e3,nanosecond:1e3}[o];Dr(r,a,a===1);const s=m(this,re);return yt(r===1&&o==="nanosecond"?s:ts(s,r,o,i),m(this,b))}equals(e){E(this,te);const t=Fr(e);return _r(m(this,re),m(t,re))===0&&Ft(m(this,b),m(t,b))}toString(e=void 0){E(this,te);const t=I(e),r=_i(t),i=Ei(t),o=At(t,"trunc"),a=at(t,"smallestUnit","time",void 0);if(a==="hour")throw new RangeError('smallestUnit must be a time unit other than "hour"');const{precision:s,unit:c,increment:u}=Ti(a,i),d=ts(m(this,re),u,c,o);return Fn(d),si(d,m(this,b),s,r)}toJSON(){return E(this,te),si(m(this,re),m(this,b),"auto")}toLocaleString(e=void 0,t=void 0){return E(this,te),new Et(e,t).format(this)}valueOf(){An("PlainDateTime")}toZonedDateTime(e,t=void 0){E(this,te);const r=qe(e),i=Qr(I(t));return xe(Oe(r,m(this,re),i),r,m(this,b))}toPlainDate(){return E(this,te),Ve(m(this,re).isoDate,m(this,b))}toPlainTime(){return E(this,te),tn(m(this,re).time)}static from(e,t=void 0){return Fr(e,t)}static compare(e,t){const r=Fr(e),i=Fr(t);return _r(m(r,re),m(i,re))}}function Ue(n,e){E(n,te);const t=m(n,re).isoDate;return wi(n).isoToDate(t,{[e]:!0})[e]}function Kn(n,e){return E(n,te),m(n,re).time[e]}ln(Qs,"Temporal.PlainDateTime");class Tr{constructor(e=0,t=0,r=0,i=0,o=0,a=0,s=0,c=0,u=0,d=0){const l=e===void 0?0:bt(e),f=t===void 0?0:bt(t),g=r===void 0?0:bt(r),p=i===void 0?0:bt(i),y=o===void 0?0:bt(o),_=a===void 0?0:bt(a),T=s===void 0?0:bt(s),v=c===void 0?0:bt(c),S=u===void 0?0:bt(u),D=d===void 0?0:bt(d);jo(l,f,g,p,y,_,T,v,S,D),dn(this),U(this,He,l),U(this,Fe,f),U(this,rt,g),U(this,Ge,p),U(this,ze,y),U(this,Ye,_),U(this,ke,T),U(this,je,v),U(this,We,S),U(this,it,D)}get years(){return E(this,oe),m(this,He)}get months(){return E(this,oe),m(this,Fe)}get weeks(){return E(this,oe),m(this,rt)}get days(){return E(this,oe),m(this,Ge)}get hours(){return E(this,oe),m(this,ze)}get minutes(){return E(this,oe),m(this,Ye)}get seconds(){return E(this,oe),m(this,ke)}get milliseconds(){return E(this,oe),m(this,je)}get microseconds(){return E(this,oe),m(this,We)}get nanoseconds(){return E(this,oe),m(this,it)}get sign(){return E(this,oe),ho(this)}get blank(){return E(this,oe),ho(this)===0}with(e){E(this,oe);const t=Uu(e),{years:r=m(this,He),months:i=m(this,Fe),weeks:o=m(this,rt),days:a=m(this,Ge),hours:s=m(this,ze),minutes:c=m(this,Ye),seconds:u=m(this,ke),milliseconds:d=m(this,je),microseconds:l=m(this,We),nanoseconds:f=m(this,it)}=t;return new Tr(r,i,o,a,s,c,u,d,l,f)}negated(){return E(this,oe),ct(this)}abs(){return E(this,oe),new Tr(Math.abs(m(this,He)),Math.abs(m(this,Fe)),Math.abs(m(this,rt)),Math.abs(m(this,Ge)),Math.abs(m(this,ze)),Math.abs(m(this,Ye)),Math.abs(m(this,ke)),Math.abs(m(this,je)),Math.abs(m(this,We)),Math.abs(m(this,it)))}add(e){return E(this,oe),oc("add",this,e)}subtract(e){return E(this,oe),oc("subtract",this,e)}round(e){if(E(this,oe),e===void 0)throw new TypeError("options parameter is required");const t=Qt(this),r=typeof e=="string"?zn("smallestUnit",e):I(e);let i=at(r,"largestUnit","datetime",void 0,["auto"]),{plainRelativeTo:o,zonedRelativeTo:a}=_a(r);const s=Rr(r),c=At(r,"halfExpand");let u=at(r,"smallestUnit","datetime",void 0),d=!0;u||(d=!1,u="nanosecond");const l=rn(t,u);let f=!0;if(i||(f=!1,i=l),i==="auto"&&(i=l),!d&&!f)throw new RangeError("at least one of smallestUnit or largestUnit is required");if(rn(i,u)!==i)throw new RangeError(`largestUnit ${i} cannot be smaller than smallestUnit ${u}`);const g={hour:24,minute:60,second:60,millisecond:1e3,microsecond:1e3,nanosecond:1e3}[u];if(g!==void 0&&Dr(s,g,!1),s>1&&Jt(u)==="date"&&i!==u)throw new RangeError("For calendar units with roundingIncrement > 1, use largestUnit = smallestUnit");if(a){let y=rr(this);const _=m(a,V),T=m(a,b),v=m(a,C);return y=id(v,kr(v,_,T,y),_,T,i,s,u,c),Jt(i)==="date"&&(i="hour"),_t(y,i)}if(o){let y=Ut(this);const _=yr({deltaDays:0,hour:0,minute:0,second:0,millisecond:0,microsecond:0,nanosecond:0},y.time),T=m(o,N),v=m(o,b),S=ft(v,T,Ce(y.date,_.deltaDays),"constrain");return y=rd(j(T,{deltaDays:0,hour:0,minute:0,second:0,millisecond:0,microsecond:0,nanosecond:0}),j(S,_),v,i,s,u,c),_t(y,i)}if(Ot(t))throw new RangeError(`a starting point is required for ${t}s balancing`);if(Ot(i))throw new RangeError(`a starting point is required for ${i}s balancing`);let p=Ut(this);if(u==="day"){const{quotient:y,remainder:_}=p.time.divmod(oo);let T=p.date.days+y+Jr(_,"day");T=_n(T,s,c),p=on({years:0,months:0,weeks:0,days:T},F.ZERO)}else p=on({years:0,months:0,weeks:0,days:0},mo(p.time,s,u,c));return _t(p,i)}total(e){if(E(this,oe),e===void 0)throw new TypeError("options argument is required");const t=typeof e=="string"?zn("unit",e):I(e);let{plainRelativeTo:r,zonedRelativeTo:i}=_a(t);const o=at(t,"unit","datetime",un);if(i){const s=rr(this),c=m(i,V),u=m(i,b),d=m(i,C);return function(l,f,g,p,y){return Jt(y)==="time"?Jr(F.fromEpochNsDiff(f,l),y):Q0(td(l,f,g,p,y),f,wt(g,l),g,p,y)}(d,kr(d,c,u,s),c,u,o)}if(r){const s=Ut(this);let c=yr({deltaDays:0,hour:0,minute:0,second:0,millisecond:0,microsecond:0,nanosecond:0},s.time);const u=m(r,N),d=m(r,b),l=ft(d,u,Ce(s.date,c.deltaDays),"constrain");return function(f,g,p,y){if(_r(f,g)==0)return 0;Fn(f),Fn(g);const _=ed(f,g,p,y);return y==="nanosecond"?h.toNumber(_.time.totalNs):Q0(_,De(g),f,null,p,y)}(j(u,{deltaDays:0,hour:0,minute:0,second:0,millisecond:0,microsecond:0,nanosecond:0}),j(l,c),d,o)}const a=Qt(this);if(Ot(a))throw new RangeError(`a starting point is required for ${a}s total`);if(Ot(o))throw new RangeError(`a starting point is required for ${o}s total`);return Jr(Ut(this).time,o)}toString(e=void 0){E(this,oe);const t=I(e),r=Ei(t),i=At(t,"trunc"),o=at(t,"smallestUnit","time",void 0);if(o==="hour"||o==="minute")throw new RangeError('smallestUnit must be a time unit other than "hours" or "minutes"');const{precision:a,unit:s,increment:c}=Ti(o,r);if(s==="nanosecond"&&c===1)return Yi(this,a);const u=Qt(this);let d=rr(this);const l=mo(d.time,c,s,i);return d=on(d.date,l),Yi(_t(d,rn(u,"second")),a)}toJSON(){return E(this,oe),Yi(this,"auto")}toLocaleString(e=void 0,t=void 0){if(E(this,oe),typeof Intl.DurationFormat=="function"){const r=new Intl.DurationFormat(e,t);return pd.call(r,this)}return console.warn("Temporal.Duration.prototype.toLocaleString() requires Intl.DurationFormat."),Yi(this,"auto")}valueOf(){An("Duration")}static from(e){return Tt(e)}static compare(e,t,r=void 0){const i=Tt(e),o=Tt(t),a=I(r),{plainRelativeTo:s,zonedRelativeTo:c}=_a(a);if(m(i,He)===m(o,He)&&m(i,Fe)===m(o,Fe)&&m(i,rt)===m(o,rt)&&m(i,Ge)===m(o,Ge)&&m(i,ze)===m(o,ze)&&m(i,Ye)===m(o,Ye)&&m(i,ke)===m(o,ke)&&m(i,je)===m(o,je)&&m(i,We)===m(o,We)&&m(i,it)===m(o,it))return 0;const u=Qt(i),d=Qt(o),l=rr(i),f=rr(o);if(c&&(Jt(u)==="date"||Jt(d)==="date")){const T=m(c,V),v=m(c,b),S=m(c,C),D=kr(S,T,v,l),R=kr(S,T,v,f);return ot(h.toNumber(h.subtract(D,R)))}let g=l.date.days,p=f.date.days;if(Ot(u)||Ot(d)){if(!s)throw new RangeError("A starting point is required for years, months, or weeks comparison");g=K0(l.date,s),p=K0(f.date,s)}const y=l.time.add24HourDays(g),_=f.time.add24HourDays(p);return y.cmp(_)}}ln(Tr,"Temporal.Duration");class Js{constructor(e,t,r="iso8601",i=1972){const o=O(e),a=O(t),s=Qe(r===void 0?"iso8601":ye(r)),c=O(i);Hn(c,o,a),Gu(this,{year:c,month:o,day:a},s)}get monthCode(){return mc(this,"monthCode")}get day(){return mc(this,"day")}get calendarId(){return E(this,ht),m(this,b)}with(e,t=void 0){if(E(this,ht),!ce(e))throw new TypeError("invalid argument");br(e);const r=m(this,b);let i=Xe(r,m(this,N),"month-day");return i=$n(r,i,pt(r,e,["year","month","monthCode","day"],[],"partial")),ar(co(r,i,k(I(t))),r)}equals(e){E(this,ht);const t=Y0(e);return zt(m(this,N),m(t,N))===0&&Ft(m(this,b),m(t,b))}toString(e=void 0){return E(this,ht),V0(this,_i(I(e)))}toJSON(){return E(this,ht),V0(this)}toLocaleString(e=void 0,t=void 0){return E(this,ht),new Et(e,t).format(this)}valueOf(){An("PlainMonthDay")}toPlainDate(e){if(E(this,ht),!ce(e))throw new TypeError("argument should be an object");const t=m(this,b);return Ve(Rn(t,$n(t,Xe(t,m(this,N),"month-day"),pt(t,e,["year"],[],[])),"constrain"),t)}static from(e,t=void 0){return Y0(e,t)}}function mc(n,e){E(n,ht);const t=m(n,N);return wi(n).isoToDate(t,{[e]:!0})[e]}function Ta(n){return wt(n,is())}ln(Js,"Temporal.PlainMonthDay");const yd={instant:()=>Pt(is()),plainDateTimeISO:(n=Nr())=>yt(Ta(qe(n)),"iso8601"),plainDateISO:(n=Nr())=>Ve(Ta(qe(n)).isoDate,"iso8601"),plainTimeISO:(n=Nr())=>tn(Ta(qe(n)).time),timeZoneId:()=>Nr(),zonedDateTimeISO:(n=Nr())=>{const e=qe(n);return xe(is(),e,"iso8601")},[Symbol.toStringTag]:"Temporal.Now"};Object.defineProperty(yd,Symbol.toStringTag,{value:"Temporal.Now",writable:!1,enumerable:!1,configurable:!0});class Ii{constructor(e=0,t=0,r=0,i=0,o=0,a=0){const s=e===void 0?0:O(e),c=t===void 0?0:O(t),u=r===void 0?0:O(r),d=i===void 0?0:O(i),l=o===void 0?0:O(o),f=a===void 0?0:O(a);ko(s,c,u,d,l,f),zu(this,{hour:s,minute:c,second:u,millisecond:d,microsecond:l,nanosecond:f})}get hour(){return E(this,ue),m(this,se).hour}get minute(){return E(this,ue),m(this,se).minute}get second(){return E(this,ue),m(this,se).second}get millisecond(){return E(this,ue),m(this,se).millisecond}get microsecond(){return E(this,ue),m(this,se).microsecond}get nanosecond(){return E(this,ue),m(this,se).nanosecond}with(e,t=void 0){if(E(this,ue),!ce(e))throw new TypeError("invalid argument");br(e);const r=qa(e,"partial"),i=qa(this);let{hour:o,minute:a,second:s,millisecond:c,microsecond:u,nanosecond:d}=Object.assign(i,r);const l=k(I(t));return{hour:o,minute:a,second:s,millisecond:c,microsecond:u,nanosecond:d}=Go(o,a,s,c,u,d,l),new Ii(o,a,s,c,u,d)}add(e){return E(this,ue),uc("add",this,e)}subtract(e){return E(this,ue),uc("subtract",this,e)}until(e,t=void 0){return E(this,ue),nc("until",this,e,t)}since(e,t=void 0){return E(this,ue),nc("since",this,e,t)}round(e){if(E(this,ue),e===void 0)throw new TypeError("options parameter is required");const t=typeof e=="string"?zn("smallestUnit",e):I(e),r=Rr(t),i=At(t,"halfExpand"),o=at(t,"smallestUnit","time",un);return Dr(r,{hour:24,minute:60,second:60,millisecond:1e3,microsecond:1e3,nanosecond:1e3}[o],!1),tn(ns(m(this,se),r,o,i))}equals(e){E(this,ue);const t=yn(e);return rs(m(this,se),m(t,se))===0}toString(e=void 0){E(this,ue);const t=I(e),r=Ei(t),i=At(t,"trunc"),o=at(t,"smallestUnit","time",void 0);if(o==="hour")throw new RangeError('smallestUnit must be a time unit other than "hour"');const{precision:a,unit:s,increment:c}=Ti(o,r);return B0(ns(m(this,se),c,s,i),a)}toJSON(){return E(this,ue),B0(m(this,se),"auto")}toLocaleString(e=void 0,t=void 0){return E(this,ue),new Et(e,t).format(this)}valueOf(){An("PlainTime")}static from(e,t=void 0){return yn(e,t)}static compare(e,t){const r=yn(e),i=yn(t);return rs(m(r,se),m(i,se))}}ln(Ii,"Temporal.PlainTime");class e0{constructor(e,t,r="iso8601",i=1){const o=O(e),a=O(t),s=Qe(r===void 0?"iso8601":ye(r)),c=O(i);Hn(o,a,c),Yu(this,{year:o,month:a,day:c},s)}get year(){return Vt(this,"year")}get month(){return Vt(this,"month")}get monthCode(){return Vt(this,"monthCode")}get calendarId(){return E(this,Re),m(this,b)}get era(){return Vt(this,"era")}get eraYear(){return Vt(this,"eraYear")}get daysInMonth(){return Vt(this,"daysInMonth")}get daysInYear(){return Vt(this,"daysInYear")}get monthsInYear(){return Vt(this,"monthsInYear")}get inLeapYear(){return Vt(this,"inLeapYear")}with(e,t=void 0){if(E(this,Re),!ce(e))throw new TypeError("invalid argument");br(e);const r=m(this,b);let i=Xe(r,m(this,N),"year-month");return i=$n(r,i,pt(r,e,["year","month","monthCode"],[],"partial")),ur(oi(r,i,k(I(t))),r)}add(e,t=void 0){return E(this,Re),dc("add",this,e,t)}subtract(e,t=void 0){return E(this,Re),dc("subtract",this,e,t)}until(e,t=void 0){return E(this,Re),rc("until",this,e,t)}since(e,t=void 0){return E(this,Re),rc("since",this,e,t)}equals(e){E(this,Re);const t=zr(e);return zt(m(this,N),m(t,N))===0&&Ft(m(this,b),m(t,b))}toString(e=void 0){return E(this,Re),q0(this,_i(I(e)))}toJSON(){return E(this,Re),q0(this)}toLocaleString(e=void 0,t=void 0){return E(this,Re),new Et(e,t).format(this)}valueOf(){An("PlainYearMonth")}toPlainDate(e){if(E(this,Re),!ce(e))throw new TypeError("argument should be an object");const t=m(this,b);return Ve(Rn(t,$n(t,Xe(t,m(this,N),"year-month"),pt(t,e,["day"],[],[])),"constrain"),t)}static from(e,t=void 0){return zr(e,t)}static compare(e,t){const r=zr(e),i=zr(t);return zt(m(r,N),m(i,N))}}function Vt(n,e){E(n,Re);const t=m(n,N);return wi(n).isoToDate(t,{[e]:!0})[e]}ln(e0,"Temporal.PlainYearMonth");const Xh=Et.prototype.resolvedOptions;class t0{constructor(e,t,r="iso8601"){if(arguments.length<1)throw new TypeError("missing argument: epochNanoseconds is required");const i=fo(e);let o=ye(t);const{tzName:a,offsetMinutes:s}=wn(o);if(s===void 0){const c=uo(a);if(!c)throw new RangeError(`unknown time zone ${a}`);o=c.identifier}else o=Gs(s);ju(this,i,o,Qe(r===void 0?"iso8601":ye(r)))}get calendarId(){return E(this,H),m(this,b)}get timeZoneId(){return E(this,H),m(this,V)}get year(){return $e(this,"year")}get month(){return $e(this,"month")}get monthCode(){return $e(this,"monthCode")}get day(){return $e(this,"day")}get hour(){return Qn(this,"hour")}get minute(){return Qn(this,"minute")}get second(){return Qn(this,"second")}get millisecond(){return Qn(this,"millisecond")}get microsecond(){return Qn(this,"microsecond")}get nanosecond(){return Qn(this,"nanosecond")}get era(){return $e(this,"era")}get eraYear(){return $e(this,"eraYear")}get epochMilliseconds(){return E(this,H),vt(m(this,C),"floor")}get epochNanoseconds(){return E(this,H),od(m(this,C))}get dayOfWeek(){return $e(this,"dayOfWeek")}get dayOfYear(){return $e(this,"dayOfYear")}get weekOfYear(){var e;return(e=$e(this,"weekOfYear"))==null?void 0:e.week}get yearOfWeek(){var e;return(e=$e(this,"weekOfYear"))==null?void 0:e.year}get hoursInDay(){E(this,H);const e=m(this,V),t=It(this).isoDate,r=st(t.year,t.month,t.day+1),i=gn(e,t),o=gn(e,r);return Jr(F.fromEpochNsDiff(o,i),"hour")}get daysInWeek(){return $e(this,"daysInWeek")}get daysInMonth(){return $e(this,"daysInMonth")}get daysInYear(){return $e(this,"daysInYear")}get monthsInYear(){return $e(this,"monthsInYear")}get inLeapYear(){return $e(this,"inLeapYear")}get offset(){return E(this,H),Za(nn(m(this,V),m(this,C)))}get offsetNanoseconds(){return E(this,H),nn(m(this,V),m(this,C))}with(e,t=void 0){if(E(this,H),!ce(e))throw new TypeError("invalid zoned-date-time-like");br(e);const r=m(this,b),i=m(this,V),o=nn(i,m(this,C)),a=It(this);let s={...Xe(r,a.isoDate),...a.time,offset:Za(o)};s=$n(r,s,pt(r,e,["year","month","monthCode","day"],["hour","minute","second","millisecond","microsecond","nanosecond","offset"],"partial"));const c=I(t),u=Qr(c),d=Ji(c,"prefer"),l=vi(r,s,k(c)),f=Ar(s.offset);return xe(so(l.isoDate,l.time,"option",f,i,u,d,!1),i,r)}withPlainTime(e=void 0){E(this,H);const t=m(this,V),r=m(this,b),i=It(this).isoDate;let o;return o=e===void 0?gn(t,i):Oe(t,j(i,m(yn(e),se)),"compatible"),xe(o,t,r)}withTimeZone(e){E(this,H);const t=qe(e);return xe(m(this,C),t,m(this,b))}withCalendar(e){E(this,H);const t=bi(e);return xe(m(this,C),m(this,V),t)}add(e,t=void 0){return E(this,H),lc("add",this,e,t)}subtract(e,t=void 0){return E(this,H),lc("subtract",this,e,t)}until(e,t=void 0){return E(this,H),ic("until",this,e,t)}since(e,t=void 0){return E(this,H),ic("since",this,e,t)}round(e){if(E(this,H),e===void 0)throw new TypeError("options parameter is required");const t=typeof e=="string"?zn("smallestUnit",e):I(e),r=Rr(t),i=At(t,"halfExpand"),o=at(t,"smallestUnit","time",un,["day"]),a={day:1,hour:24,minute:60,second:60,millisecond:1e3,microsecond:1e3,nanosecond:1e3}[o];if(Dr(r,a,a===1),o==="nanosecond"&&r===1)return xe(m(this,C),m(this,V),m(this,b));const s=m(this,V),c=m(this,C),u=It(this);let d;if(o==="day"){const l=u.isoDate,f=st(l.year,l.month,l.day+1),g=gn(s,l),p=gn(s,f),y=h.subtract(p,g);d=F.fromEpochNsDiff(c,g).round(y,i).addToEpochNs(g)}else{const l=ts(u,r,o,i),f=nn(s,c);d=so(l.isoDate,l.time,"option",f,s,"compatible","prefer",!1)}return xe(d,s,m(this,b))}equals(e){E(this,H);const t=Yr(e),r=m(this,C),i=m(t,C);return!!h.equal(h.BigInt(r),h.BigInt(i))&&!!Wu(m(this,V),m(t,V))&&Ft(m(this,b),m(t,b))}toString(e=void 0){E(this,H);const t=I(e),r=_i(t),i=Ei(t),o=function(f){return an(f,"offset",["auto","never"],"auto")}(t),a=At(t,"trunc"),s=at(t,"smallestUnit","time",void 0);if(s==="hour")throw new RangeError('smallestUnit must be a time unit other than "hour"');const c=function(f){return an(f,"timeZoneName",["auto","never","critical"],"auto")}(t),{precision:u,unit:d,increment:l}=Ti(s,i);return Z0(this,u,r,c,o,{unit:d,increment:l,roundingMode:a})}toLocaleString(e=void 0,t=void 0){E(this,H);const r=I(t),i=Object.create(null);if(function(c,u,d,l){if(u==null)return;const f=Reflect.ownKeys(u);for(let g=0;g<f.length;g++){const p=f[g];if(!d.some(y=>Object.is(y,p))&&Object.prototype.propertyIsEnumerable.call(u,p)){const y=u[p];c[p]=y}}}(i,r,["timeZone"]),r.timeZone!==void 0)throw new TypeError("ZonedDateTime toLocaleString does not accept a timeZone option");if(i.year===void 0&&i.month===void 0&&i.day===void 0&&i.era===void 0&&i.weekday===void 0&&i.dateStyle===void 0&&i.hour===void 0&&i.minute===void 0&&i.second===void 0&&i.fractionalSecondDigits===void 0&&i.timeStyle===void 0&&i.dayPeriod===void 0&&i.timeZoneName===void 0&&(i.timeZoneName="short"),i.timeZone=m(this,V),X0(i.timeZone))throw new RangeError("toLocaleString does not currently support offset time zones");const o=new Et(e,i),a=Xh.call(o).calendar,s=m(this,b);if(s!=="iso8601"&&a!=="iso8601"&&!Ft(a,s))throw new RangeError(`cannot format ZonedDateTime with calendar ${s} in locale with calendar ${a}`);return o.format(Pt(m(this,C)))}toJSON(){return E(this,H),Z0(this,"auto")}valueOf(){An("ZonedDateTime")}startOfDay(){E(this,H);const e=m(this,V);return xe(gn(e,It(this).isoDate),e,m(this,b))}getTimeZoneTransition(e){E(this,H);const t=m(this,V);if(e===void 0)throw new TypeError("options parameter is required");const r=an(typeof e=="string"?zn("direction",e):I(e),"direction",["next","previous"],un);if(r===void 0)throw new TypeError("direction option is required");if(X0(t)||t==="UTC")return null;const i=m(this,C),o=r==="next"?Ys(t,i):Ka(t,i);return o===null?null:xe(o,t,m(this,b))}toInstant(){return E(this,H),Pt(m(this,C))}toPlainDate(){return E(this,H),Ve(It(this).isoDate,m(this,b))}toPlainTime(){return E(this,H),tn(It(this).time)}toPlainDateTime(){return E(this,H),yt(It(this),m(this,b))}static from(e,t=void 0){return Yr(e,t)}static compare(e,t){const r=Yr(e),i=Yr(t),o=m(r,C),a=m(i,C);return h.lessThan(h.BigInt(o),h.BigInt(a))?-1:h.greaterThan(h.BigInt(o),h.BigInt(a))?1:0}}function It(n){return wt(m(n,V),m(n,C))}function $e(n,e){E(n,H);const t=It(n).isoDate;return wi(n).isoToDate(t,{[e]:!0})[e]}function Qn(n,e){return E(n,H),It(n).time[e]}ln(t0,"Temporal.ZonedDateTime");var Kh=Object.freeze({__proto__:null,Duration:Tr,Instant:Xs,Now:yd,PlainDate:Ks,PlainDateTime:Qs,PlainMonthDay:Js,PlainTime:Ii,PlainYearMonth:e0,ZonedDateTime:t0});const Qh=[Xs,Ks,Qs,Tr,Js,Ii,e0,t0];for(const n of Qh){const e=Object.getOwnPropertyDescriptor(n,"prototype");(e.configurable||e.enumerable||e.writable)&&(e.configurable=!1,e.enumerable=!1,e.writable=!1,Object.defineProperty(n,"prototype",e))}const Jh=globalThis.Temporal,n0=Jh??Kh,e1=({year:n,dayOfYear:e})=>n0.PlainDate.from({year:n,month:1,day:1}).add({days:e-1}),t1=n=>{const e=e1(n),t=Math.round(n.minutes);return n0.ZonedDateTime.from({timeZone:n.timeZone,year:e.year,month:e.month,day:e.day,hour:Math.floor(t/60),minute:t%60},{disambiguation:"compatible"})},r0=(n,e)=>{const t=n0.Instant.fromEpochMilliseconds(n.getTime()).toZonedDateTimeISO(e);return{year:t.year,dayOfYear:t.dayOfYear,minutes:t.hour*60+t.minute,timeZone:t.timeZoneId}},n1=n=>new Date(t1(n).epochMilliseconds);/**
 * postprocessing v6.39.5 build Wed Sep 09 2026
 * https://github.com/pmndrs/postprocessing
 * Copyright 2015-2026 Raoul van Rüschen
 * @license Zlib
 */var r1=(()=>{const n=new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),e=new Float32Array([0,0,2,0,0,2]),t=new cu;return t.setAttribute("position",new M0(n,3)),t.setAttribute("uv",new M0(e,2)),t})(),i1=class os{static get fullscreenGeometry(){return r1}constructor(e="Pass",t=new A0,r=new Al){this.name=e,this.renderer=null,this.scene=t,this.camera=r,this.screen=null,this.rtt=!0,this.needsSwap=!0,this.needsDepthBlit=!1,this.needsDepthTexture=!1,this.enabled=!0}get renderToScreen(){return!this.rtt}set renderToScreen(e){if(this.rtt===e){const t=this.fullscreenMaterial;t!==null&&(t.needsUpdate=!0),this.rtt=!e}}set mainScene(e){}set mainCamera(e){}setRenderer(e){this.renderer=e}isEnabled(){return this.enabled}setEnabled(e){this.enabled=e}get fullscreenMaterial(){return this.screen!==null?this.screen.material:null}set fullscreenMaterial(e){let t=this.screen;t!==null?t.material=e:(t=new su(os.fullscreenGeometry,e),t.frustumCulled=!1,this.scene===null&&(this.scene=new A0),this.scene.add(t),this.screen=t)}getFullscreenMaterial(){return this.fullscreenMaterial}setFullscreenMaterial(e){this.fullscreenMaterial=e}getDepthTexture(){return null}setDepthTexture(e,t=iu){}render(e,t,r,i,o){throw new Error("Render method not implemented!")}setSize(e,t){}initialize(e,t,r){}dispose(){for(const e of Object.keys(this)){const t=this[e];(t instanceof ou||t instanceof Co||t instanceof au||t instanceof os)&&this[e].dispose()}this.fullscreenMaterial!==null&&this.fullscreenMaterial.dispose()}},_d={NONE:0,DEPTH:1,CONVOLUTION:2},z={SKIP:9,SET:30,ADD:0,ALPHA:1,AVERAGE:2,COLOR:3,COLOR_BURN:4,COLOR_DODGE:5,DARKEN:6,DIFFERENCE:7,DIVIDE:8,DST:9,EXCLUSION:10,HARD_LIGHT:11,HARD_MIX:12,HUE:13,INVERT:14,INVERT_RGB:15,LIGHTEN:16,LINEAR_BURN:17,LINEAR_DODGE:18,LINEAR_LIGHT:19,LUMINOSITY:20,MULTIPLY:21,NEGATION:22,NORMAL:23,OVERLAY:24,PIN_LIGHT:25,REFLECT:26,SATURATION:27,SCREEN:28,SOFT_LIGHT:29,SRC:30,SUBTRACT:31,VIVID_LIGHT:32},o1="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",a1="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,src.a*opacity);}",s1="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=(dst.rgb+src.rgb)*0.5;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",c1="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.xy,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",u1="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=mix(step(0.0,b)*(1.0-min(vec3(1.0),(1.0-a)/max(b,1e-9))),vec3(1.0),step(1.0,a));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",d1="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=step(0.0,a)*mix(min(vec3(1.0),a/max(1.0-b,1e-9)),vec3(1.0),step(1.0,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",l1="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",h1="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=abs(dst.rgb-src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",m1="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb/max(src.rgb,1e-9);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",f1="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-2.0*dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",g1="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb,1.0);vec3 b=min(src.rgb,1.0);vec3 c=mix(2.0*a*b,1.0-2.0*(1.0-a)*(1.0-b),step(0.5,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",p1="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=step(1.0,dst.rgb+src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",y1="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.x,a.yz));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",_1="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",E1="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=src.rgb*max(1.0-dst.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",T1="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",w1="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",v1="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb+src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",S1="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(2.0*src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",b1="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.xy,b.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",R1="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",D1="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-abs(1.0-dst.rgb-src.rgb),0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",A1="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,opacity);}",M1="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=2.0*src.rgb*dst.rgb;vec3 b=1.0-2.0*(1.0-src.rgb)*(1.0-dst.rgb);vec3 c=mix(a,b,step(0.5,dst.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",x1="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 c=mix(mix(src2,dst.rgb,step(0.5*dst.rgb,src.rgb)),max(src2-1.0,vec3(0.0)),step(dst.rgb,src2-1.0));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",I1="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb*dst.rgb/max(1.0-src.rgb,1e-9),1.0);vec3 c=mix(a,src.rgb,step(1.0,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",C1="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.x,b.y,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",N1="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-min(dst.rgb*src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",O1="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 d=dst.rgb+(src2-1.0);vec3 w=step(0.5,src.rgb);vec3 a=dst.rgb-(1.0-src2)*dst.rgb*(1.0-dst.rgb);vec3 b=mix(d*(sqrt(dst.rgb)-dst.rgb),d*dst.rgb*((16.0*dst.rgb-12.0)*dst.rgb+3.0),w*(1.0-step(0.25,dst.rgb)));vec3 c=mix(a,b,w);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",L1="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return src;}",P1="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",U1="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=mix(max(1.0-min((1.0-dst.rgb)/(2.0*src.rgb),1.0),0.0),min(dst.rgb/(2.0*(1.0-src.rgb)),1.0),step(0.5,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",$1=new Map([[z.ADD,o1],[z.ALPHA,a1],[z.AVERAGE,s1],[z.COLOR,c1],[z.COLOR_BURN,u1],[z.COLOR_DODGE,d1],[z.DARKEN,l1],[z.DIFFERENCE,h1],[z.DIVIDE,m1],[z.DST,null],[z.EXCLUSION,f1],[z.HARD_LIGHT,g1],[z.HARD_MIX,p1],[z.HUE,y1],[z.INVERT,_1],[z.INVERT_RGB,E1],[z.LIGHTEN,T1],[z.LINEAR_BURN,w1],[z.LINEAR_DODGE,v1],[z.LINEAR_LIGHT,S1],[z.LUMINOSITY,b1],[z.MULTIPLY,R1],[z.NEGATION,D1],[z.NORMAL,A1],[z.OVERLAY,M1],[z.PIN_LIGHT,x1],[z.REFLECT,I1],[z.SATURATION,C1],[z.SCREEN,N1],[z.SOFT_LIGHT,O1],[z.SRC,L1],[z.SUBTRACT,P1],[z.VIVID_LIGHT,U1]]),H1=class extends ru{constructor(n,e=1){super(),this._blendFunction=n,this.opacity=new A(e)}getOpacity(){return this.opacity.value}setOpacity(n){this.opacity.value=n}get blendFunction(){return this._blendFunction}set blendFunction(n){this._blendFunction=n,this.dispatchEvent({type:"change"})}getBlendFunction(){return this.blendFunction}setBlendFunction(n){this.blendFunction=n}getShaderCode(){return $1.get(this.blendFunction)}},F1=class extends ru{constructor(n,e,{attributes:t=_d.NONE,blendFunction:r=z.NORMAL,defines:i=new Map,uniforms:o=new Map,extensions:a=null,vertexShader:s=null}={}){super(),this.name=n,this.renderer=null,this.attributes=t,this.fragmentShader=e,this.vertexShader=s,this.defines=i,this.uniforms=o,this.extensions=a,this.blendMode=new H1(r),this.blendMode.addEventListener("change",c=>this.setChanged()),this._inputColorSpace=Rl,this._outputColorSpace=Dl}get inputColorSpace(){return this._inputColorSpace}set inputColorSpace(n){this._inputColorSpace=n,this.setChanged()}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(n){this._outputColorSpace=n,this.setChanged()}set mainScene(n){}set mainCamera(n){}getName(){return this.name}setRenderer(n){this.renderer=n}getDefines(){return this.defines}getUniforms(){return this.uniforms}getExtensions(){return this.extensions}getBlendMode(){return this.blendMode}getAttributes(){return this.attributes}setAttributes(n){this.attributes=n,this.setChanged()}getFragmentShader(){return this.fragmentShader}setFragmentShader(n){this.fragmentShader=n,this.setChanged()}getVertexShader(){return this.vertexShader}setVertexShader(n){this.vertexShader=n,this.setChanged()}setChanged(){this.dispatchEvent({type:"change"})}setDepthTexture(n,e=iu){}update(n,e,t){}setSize(n,e){}initialize(n,e,t){}dispose(){for(const n of Object.keys(this)){const e=this[n];(e instanceof ou||e instanceof Co||e instanceof au||e instanceof i1)&&this[n].dispose()}}},G1="Invariant failed";function po(n,e){if(!n)throw new Error(G1)}const z1=new M;function Ed(n,e,t=new M,r){const{x:i,y:o,z:a}=n,s=e.x,c=e.y,u=e.z,d=i*i*s,l=o*o*c,f=a*a*u,g=d+l+f,p=Math.sqrt(1/g);if(!Number.isFinite(p))return;const y=z1.copy(n).multiplyScalar(p);if(g<((r==null?void 0:r.centerTolerance)??.1))return t.copy(y);const _=y.multiply(e).multiplyScalar(2);let T=(1-p)*n.length()/(_.length()/2),v=0,S,D,R,G;do{T-=v,S=1/(1+T*s),D=1/(1+T*c),R=1/(1+T*u);const Y=S*S,q=D*D,L=R*R,J=Y*S,W=q*D,$=L*R;G=d*Y+l*q+f*L-1,v=G/((d*J*s+l*W*c+f*$*u)*-2)}while(Math.abs(G)>1e-12);return t.set(i*S,o*D,a*R)}const Jn=new M,wa=new M,va=new M,as=class{constructor(e,t,r){this.radii=new M(e,t,r)}get minimumRadius(){return Math.min(this.radii.x,this.radii.y,this.radii.z)}get maximumRadius(){return Math.max(this.radii.x,this.radii.y,this.radii.z)}get flattening(){return 1-this.minimumRadius/this.maximumRadius}get eccentricity(){return Math.sqrt(this.eccentricitySquared)}get eccentricitySquared(){const e=this.maximumRadius**2,t=this.minimumRadius**2;return(e-t)/e}reciprocalRadii(e=new M){const{x:t,y:r,z:i}=this.radii;return e.set(1/t,1/r,1/i)}reciprocalRadiiSquared(e=new M){const{x:t,y:r,z:i}=this.radii;return e.set(1/t**2,1/r**2,1/i**2)}projectOnSurface(e,t=new M,r){return Ed(e,this.reciprocalRadiiSquared(),t,r)}getSurfaceNormal(e,t=new M){return t.multiplyVectors(this.reciprocalRadiiSquared(Jn),e).normalize()}getEastNorthUpVectors(e,t=new M,r=new M,i=new M){this.getSurfaceNormal(e,i),t.set(-e.y,e.x,0).normalize(),r.crossVectors(i,t).normalize()}getEastNorthUpFrame(e,t=new Ne){const r=Jn,i=wa,o=va;return this.getEastNorthUpVectors(e,r,i,o),t.makeBasis(r,i,o).setPosition(e)}getNorthUpEastFrame(e,t=new Ne){const r=Jn,i=wa,o=va;return this.getEastNorthUpVectors(e,r,i,o),t.makeBasis(i,o,r).setPosition(e)}getIntersection(e,t=new M){const r=this.reciprocalRadii(Jn),i=wa.copy(r).multiply(e.origin),o=va.copy(r).multiply(e.direction),a=i.lengthSq(),s=o.lengthSq(),c=i.dot(o),u=c**2-s*(a-1);if(a===1)return t.copy(e.origin);if(a>1){if(c>=0||u<0)return;const d=Math.sqrt(u),l=(-c-d)/s,f=(-c+d)/s;return e.at(Math.min(l,f),t)}if(a<1){const d=c**2-s*(a-1),l=Math.sqrt(d),f=(-c+l)/s;return e.at(f,t)}if(c<0)return e.at(-c/s,t)}getOsculatingSphereCenter(e,t,r=new M){po(this.radii.x===this.radii.y);const i=this.radii.x**2,o=this.radii.z**2,a=Jn.set(e.x/i,e.y/i,e.z/o).normalize();return r.copy(a.multiplyScalar(-t).add(e))}getNormalAtHorizon(e,t,r=new M){po(this.radii.x===this.radii.y);const i=this.radii.x**2,o=this.radii.z**2,a=e,s=t;let c=(a.x*s.x+a.y*s.y)/i+a.z*s.z/o;c/=(a.x**2+a.y**2)/i+a.z**2/o;const u=Jn.copy(s).multiplyScalar(-c).add(e);return r.set(u.x/i,u.y/i,u.z/o).normalize()}};as.WGS84=new as(6378137,6378137,6356752314245179e-9);let Yt=as;const ki=new M,fc=new M,jr=class ss{constructor(e=0,t=0,r=0){this.longitude=e,this.latitude=t,this.height=r}set(e,t,r){return this.longitude=e,this.latitude=t,r!=null&&(this.height=r),this}clone(){return new ss(this.longitude,this.latitude,this.height)}copy(e){return this.longitude=e.longitude,this.latitude=e.latitude,this.height=e.height,this}equals(e){return e.longitude===this.longitude&&e.latitude===this.latitude&&e.height===this.height}setLongitude(e){return this.longitude=e,this}setLatitude(e){return this.latitude=e,this}setHeight(e){return this.height=e,this}normalize(){return this.longitude<ss.MIN_LONGITUDE&&(this.longitude+=Math.PI*2),this}setFromECEF(e,t){const r=((t==null?void 0:t.ellipsoid)??Yt.WGS84).reciprocalRadiiSquared(ki),i=Ed(e,r,fc,t);if(i==null)throw new Error(`Could not project position to ellipsoid surface: ${e.toArray()}`);const o=ki.multiplyVectors(i,r).normalize();this.longitude=Math.atan2(o.y,o.x),this.latitude=Math.asin(o.z);const a=ki.subVectors(e,i);return this.height=Math.sign(a.dot(e))*a.length(),this}toECEF(e=new M,t){const r=(t==null?void 0:t.ellipsoid)??Yt.WGS84,i=ki.multiplyVectors(r.radii,r.radii),o=Math.cos(this.latitude),a=fc.set(o*Math.cos(this.longitude),o*Math.sin(this.longitude),Math.sin(this.latitude)).normalize();return e.multiplyVectors(i,a),e.divideScalar(Math.sqrt(a.dot(e))).add(a.multiplyScalar(this.height))}fromArray(e,t=0){return this.longitude=e[t],this.latitude=e[t+1],this.height=e[t+2],this}toArray(e=[],t=0){return e[t]=this.longitude,e[t+1]=this.latitude,e[t+2]=this.height,e}*[Symbol.iterator](){yield this.longitude,yield this.latitude,yield this.height}};jr.MIN_LONGITUDE=-Math.PI,jr.MAX_LONGITUDE=Math.PI,jr.MIN_LATITUDE=-Math.PI/2,jr.MAX_LATITUDE=Math.PI/2;let Td=jr;class Y1 extends Ps{load(e,t,r,i){const o=new xl(this.manager);o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(this.withCredentials),o.load(e,a=>{po(a instanceof ArrayBuffer);try{t(a)}catch(s){i!=null?i(s):console.error(s),this.manager.itemError(e)}},r,i)}}const k1="This is not an object",j1="This is not a Float16Array object",gc="This constructor is not a subclass of Float16Array",wd="The constructor property value is not an object",W1="Species constructor didn't return TypedArray object",B1="Derived constructor created TypedArray object which was too small length",ei="Attempting to access detached ArrayBuffer",cs="Cannot convert undefined or null to object",us="Cannot mix BigInt and other types, use explicit conversions",pc="@@iterator property is not callable",yc="Reduce of empty array with no initial value",V1="The comparison function must be either a function or undefined",Sa="Offset is out of bounds";function ne(n){return(e,...t)=>nt(n,e,t)}function Ir(n,e){return ne(wr(n,e).get)}const{apply:nt,construct:Wr,defineProperty:q1,get:ba,getOwnPropertyDescriptor:wr,getPrototypeOf:Ci,has:ds,ownKeys:vd,set:_c,setPrototypeOf:Sd}=Reflect,Z1=Proxy,{EPSILON:X1,MAX_SAFE_INTEGER:Ec,isFinite:bd,isNaN:vr}=Number,{iterator:kt,species:K1,toStringTag:i0,for:Q1}=Symbol,Sr=Object,{create:qo,defineProperty:Ni,freeze:J1,is:Tc}=Sr,ls=Sr.prototype,em=ls.__lookupGetter__?ne(ls.__lookupGetter__):(n,e)=>{if(n==null)throw ie(cs);let t=Sr(n);do{const r=wr(t,e);if(r!==void 0)return en(r,"get")?r.get:void 0}while((t=Ci(t))!==null)},en=Sr.hasOwn||ne(ls.hasOwnProperty),Rd=Array,Dd=Rd.isArray,Zo=Rd.prototype,tm=ne(Zo.join),nm=ne(Zo.push),rm=ne(Zo.toLocaleString),o0=Zo[kt],im=ne(o0),{abs:om,trunc:Ad}=Math,Xo=ArrayBuffer,am=Xo.isView,Md=Xo.prototype,sm=ne(Md.slice),cm=Ir(Md,"byteLength"),hs=typeof SharedArrayBuffer<"u"?SharedArrayBuffer:null,um=hs&&Ir(hs.prototype,"byteLength"),a0=Ci(Uint8Array),dm=a0.from,ve=a0.prototype,lm=ve[kt],hm=ne(ve.keys),mm=ne(ve.values),fm=ne(ve.entries),gm=ne(ve.set),wc=ne(ve.reverse),pm=ne(ve.fill),ym=ne(ve.copyWithin),vc=ne(ve.sort),Lr=ne(ve.slice),_m=ne(ve.subarray),_e=Ir(ve,"buffer"),xn=Ir(ve,"byteOffset"),X=Ir(ve,"length"),xd=Ir(ve,i0),Em=Uint8Array,lt=Uint16Array,Sc=(...n)=>nt(dm,lt,n),s0=Uint32Array,Tm=Float32Array,kn=Ci([][kt]()),Ko=ne(kn.next),wm=ne(function*(){}().next),vm=Ci(kn),Sm=DataView.prototype,bm=ne(Sm.getUint16),ie=TypeError,Ra=RangeError,Id=WeakSet,Cd=Id.prototype,Rm=ne(Cd.add),Dm=ne(Cd.has),Qo=WeakMap,c0=Qo.prototype,yo=ne(c0.get),Am=ne(c0.has),u0=ne(c0.set),Nd=new Qo,Mm=qo(null,{next:{value:function(){const n=yo(Nd,this);return Ko(n)}},[kt]:{value:function(){return this}}});function Br(n){if(n[kt]===o0&&kn.next===Ko)return n;const e=qo(Mm);return u0(Nd,e,im(n)),e}const Od=new Qo,Ld=qo(vm,{next:{value:function(){const n=yo(Od,this);return wm(n)},writable:!0,configurable:!0}});for(const n of vd(kn))n!=="next"&&Ni(Ld,n,wr(kn,n));function bc(n){const e=qo(Ld);return u0(Od,e,n),e}function _o(n){return n!==null&&typeof n=="object"||typeof n=="function"}function Rc(n){return n!==null&&typeof n=="object"}function Eo(n){return xd(n)!==void 0}function ms(n){const e=xd(n);return e==="BigInt64Array"||e==="BigUint64Array"}function xm(n){try{return Dd(n)?!1:(cm(n),!0)}catch{return!1}}function Pd(n){if(hs===null)return!1;try{return um(n),!0}catch{return!1}}function Im(n){return xm(n)||Pd(n)}function Dc(n){return Dd(n)?n[kt]===o0&&kn.next===Ko:!1}function Cm(n){return Eo(n)?n[kt]===lm&&kn.next===Ko:!1}function ji(n){if(typeof n!="string")return!1;const e=+n;return n!==e+""||!bd(e)?!1:e===Ad(e)}const To=Q1("__Float16Array__");function Nm(n){if(!Rc(n))return!1;const e=Ci(n);if(!Rc(e))return!1;const t=e.constructor;if(t===void 0)return!1;if(!_o(t))throw ie(wd);return ds(t,To)}const fs=1/X1;function Om(n){return n+fs-fs}const Ud=6103515625e-14,Lm=65504,$d=.0009765625,Ac=$d*Ud,Pm=$d*fs;function Um(n){const e=+n;if(!bd(e)||e===0)return e;const t=e>0?1:-1,r=om(e);if(r<Ud)return t*Om(r/Ac)*Ac;const i=(1+Pm)*r,o=i-(i-r);return o>Lm||vr(o)?t*(1/0):t*o}const Hd=new Xo(4),Fd=new Tm(Hd),Gd=new s0(Hd),Rt=new lt(512),Dt=new Em(512);for(let n=0;n<256;++n){const e=n-127;e<-24?(Rt[n]=0,Rt[n|256]=32768,Dt[n]=24,Dt[n|256]=24):e<-14?(Rt[n]=1024>>-e-14,Rt[n|256]=1024>>-e-14|32768,Dt[n]=-e-1,Dt[n|256]=-e-1):e<=15?(Rt[n]=e+15<<10,Rt[n|256]=e+15<<10|32768,Dt[n]=13,Dt[n|256]=13):e<128?(Rt[n]=31744,Rt[n|256]=64512,Dt[n]=24,Dt[n|256]=24):(Rt[n]=31744,Rt[n|256]=64512,Dt[n]=13,Dt[n|256]=13)}function Ct(n){Fd[0]=Um(n);const e=Gd[0],t=e>>23&511;return Rt[t]+((e&8388607)>>Dt[t])}const d0=new s0(2048);for(let n=1;n<1024;++n){let e=n<<13,t=0;for(;!(e&8388608);)e<<=1,t-=8388608;e&=-8388609,t+=947912704,d0[n]=e|t}for(let n=1024;n<2048;++n)d0[n]=939524096+(n-1024<<13);const Cr=new s0(64);for(let n=1;n<31;++n)Cr[n]=n<<23;Cr[31]=1199570944;Cr[32]=2147483648;for(let n=33;n<63;++n)Cr[n]=2147483648+(n-32<<23);Cr[63]=3347054592;const zd=new lt(64);for(let n=1;n<64;++n)n!==32&&(zd[n]=1024);function K(n){const e=n>>10;return Gd[0]=d0[zd[e]+(n&1023)]+Cr[e],Fd[0]}function qt(n){const e=+n;return vr(e)||e===0?0:Ad(e)}function Da(n){const e=qt(n);return e<0?0:e<Ec?e:Ec}function Wi(n,e){if(!_o(n))throw ie(k1);const t=n.constructor;if(t===void 0)return e;if(!_o(t))throw ie(wd);return t[K1]??e}function ti(n){if(Pd(n))return!1;try{return sm(n,0,0),!1}catch{}return!0}function Mc(n,e){const t=vr(n),r=vr(e);if(t&&r)return 0;if(t)return 1;if(r||n<e)return-1;if(n>e)return 1;if(n===0&&e===0){const i=Tc(n,0),o=Tc(e,0);if(!i&&o)return-1;if(i&&!o)return 1}return 0}const l0=2,wo=new Qo;function sr(n){return Am(wo,n)||!am(n)&&Nm(n)}function Z(n){if(!sr(n))throw ie(j1)}function Bi(n,e){const t=sr(n),r=Eo(n);if(!t&&!r)throw ie(W1);if(typeof e=="number"){let i;if(t){const o=P(n);i=X(o)}else i=X(n);if(i<e)throw ie(B1)}if(ms(n))throw ie(us)}function P(n){const e=yo(wo,n);if(e!==void 0){const i=_e(e);if(ti(i))throw ie(ei);return e}const t=n.buffer;if(ti(t))throw ie(ei);const r=Wr(Wt,[t,n.byteOffset,n.length],n.constructor);return yo(wo,r)}function xc(n){const e=X(n),t=[];for(let r=0;r<e;++r)t[r]=K(n[r]);return t}const Yd=new Id;for(const n of vd(ve)){if(n===i0)continue;const e=wr(ve,n);en(e,"get")&&typeof e.get=="function"&&Rm(Yd,e.get)}const $m=J1({get(n,e,t){return ji(e)&&en(n,e)?K(ba(n,e)):Dm(Yd,em(n,e))?ba(n,e):ba(n,e,t)},set(n,e,t,r){return ji(e)&&en(n,e)?_c(n,e,Ct(t)):_c(n,e,t,r)},getOwnPropertyDescriptor(n,e){if(ji(e)&&en(n,e)){const t=wr(n,e);return t.value=K(t.value),t}return wr(n,e)},defineProperty(n,e,t){return ji(e)&&en(n,e)&&en(t,"value")&&(t.value=Ct(t.value)),q1(n,e,t)}});let Wt=class Ee{constructor(e,t,r){let i;if(sr(e))i=Wr(lt,[P(e)],new.target);else if(_o(e)&&!Im(e)){let a,s;if(Eo(e)){a=e,s=X(e);const c=_e(e);if(ti(c))throw ie(ei);if(ms(e))throw ie(us);const u=new Xo(s*l0);i=Wr(lt,[u],new.target)}else{const c=e[kt];if(c!=null&&typeof c!="function")throw ie(pc);c!=null?Dc(e)?(a=e,s=e.length):(a=[...e],s=a.length):(a=e,s=Da(a.length)),i=Wr(lt,[s],new.target)}for(let c=0;c<s;++c)i[c]=Ct(a[c])}else i=Wr(lt,arguments,new.target);const o=new Z1(i,$m);return u0(wo,o,i),o}static from(e,...t){const r=this;if(!ds(r,To))throw ie(gc);if(r===Ee){if(sr(e)&&t.length===0){const d=P(e),l=new lt(_e(d),xn(d),X(d));return new Ee(_e(Lr(l)))}if(t.length===0)return new Ee(_e(Sc(e,Ct)));const c=t[0],u=t[1];return new Ee(_e(Sc(e,function(d,...l){return Ct(nt(c,this,[d,...Br(l)]))},u)))}let i,o;const a=e[kt];if(a!=null&&typeof a!="function")throw ie(pc);if(a!=null)Dc(e)?(i=e,o=e.length):Cm(e)?(i=e,o=X(e)):(i=[...e],o=i.length);else{if(e==null)throw ie(cs);i=Sr(e),o=Da(i.length)}const s=new r(o);if(t.length===0)for(let c=0;c<o;++c)s[c]=i[c];else{const c=t[0],u=t[1];for(let d=0;d<o;++d)s[d]=nt(c,u,[i[d],d])}return s}static of(...e){const t=this;if(!ds(t,To))throw ie(gc);const r=e.length;if(t===Ee){const o=new Ee(r),a=P(o);for(let s=0;s<r;++s)a[s]=Ct(e[s]);return o}const i=new t(r);for(let o=0;o<r;++o)i[o]=e[o];return i}keys(){Z(this);const e=P(this);return hm(e)}values(){Z(this);const e=P(this);return bc(function*(){for(const t of mm(e))yield K(t)}())}entries(){Z(this);const e=P(this);return bc(function*(){for(const[t,r]of fm(e))yield[t,K(r)]}())}at(e){Z(this);const t=P(this),r=X(t),i=qt(e),o=i>=0?i:r+i;if(!(o<0||o>=r))return K(t[o])}with(e,t){Z(this);const r=P(this),i=X(r),o=qt(e),a=o>=0?o:i+o,s=+t;if(a<0||a>=i)throw Ra(Sa);const c=new lt(_e(r),xn(r),X(r)),u=new Ee(_e(Lr(c))),d=P(u);return d[a]=Ct(s),u}map(e,...t){Z(this);const r=P(this),i=X(r),o=t[0],a=Wi(r,Ee);if(a===Ee){const c=new Ee(i),u=P(c);for(let d=0;d<i;++d){const l=K(r[d]);u[d]=Ct(nt(e,o,[l,d,this]))}return c}const s=new a(i);Bi(s,i);for(let c=0;c<i;++c){const u=K(r[c]);s[c]=nt(e,o,[u,c,this])}return s}filter(e,...t){Z(this);const r=P(this),i=X(r),o=t[0],a=[];for(let u=0;u<i;++u){const d=K(r[u]);nt(e,o,[d,u,this])&&nm(a,d)}const s=Wi(r,Ee),c=new s(a);return Bi(c),c}reduce(e,...t){Z(this);const r=P(this),i=X(r);if(i===0&&t.length===0)throw ie(yc);let o,a;t.length===0?(o=K(r[0]),a=1):(o=t[0],a=0);for(let s=a;s<i;++s)o=e(o,K(r[s]),s,this);return o}reduceRight(e,...t){Z(this);const r=P(this),i=X(r);if(i===0&&t.length===0)throw ie(yc);let o,a;t.length===0?(o=K(r[i-1]),a=i-2):(o=t[0],a=i-1);for(let s=a;s>=0;--s)o=e(o,K(r[s]),s,this);return o}forEach(e,...t){Z(this);const r=P(this),i=X(r),o=t[0];for(let a=0;a<i;++a)nt(e,o,[K(r[a]),a,this])}find(e,...t){Z(this);const r=P(this),i=X(r),o=t[0];for(let a=0;a<i;++a){const s=K(r[a]);if(nt(e,o,[s,a,this]))return s}}findIndex(e,...t){Z(this);const r=P(this),i=X(r),o=t[0];for(let a=0;a<i;++a){const s=K(r[a]);if(nt(e,o,[s,a,this]))return a}return-1}findLast(e,...t){Z(this);const r=P(this),i=X(r),o=t[0];for(let a=i-1;a>=0;--a){const s=K(r[a]);if(nt(e,o,[s,a,this]))return s}}findLastIndex(e,...t){Z(this);const r=P(this),i=X(r),o=t[0];for(let a=i-1;a>=0;--a){const s=K(r[a]);if(nt(e,o,[s,a,this]))return a}return-1}every(e,...t){Z(this);const r=P(this),i=X(r),o=t[0];for(let a=0;a<i;++a)if(!nt(e,o,[K(r[a]),a,this]))return!1;return!0}some(e,...t){Z(this);const r=P(this),i=X(r),o=t[0];for(let a=0;a<i;++a)if(nt(e,o,[K(r[a]),a,this]))return!0;return!1}set(e,...t){Z(this);const r=P(this),i=qt(t[0]);if(i<0)throw Ra(Sa);if(e==null)throw ie(cs);if(ms(e))throw ie(us);if(sr(e))return gm(P(this),P(e),i);if(Eo(e)){const c=_e(e);if(ti(c))throw ie(ei)}const o=X(r),a=Sr(e),s=Da(a.length);if(i===1/0||s+i>o)throw Ra(Sa);for(let c=0;c<s;++c)r[c+i]=Ct(a[c])}reverse(){Z(this);const e=P(this);return wc(e),this}toReversed(){Z(this);const e=P(this),t=new lt(_e(e),xn(e),X(e)),r=new Ee(_e(Lr(t))),i=P(r);return wc(i),r}fill(e,...t){Z(this);const r=P(this);return pm(r,Ct(e),...Br(t)),this}copyWithin(e,t,...r){Z(this);const i=P(this);return ym(i,e,t,...Br(r)),this}sort(e){Z(this);const t=P(this),r=e!==void 0?e:Mc;return vc(t,(i,o)=>r(K(i),K(o))),this}toSorted(e){Z(this);const t=P(this);if(e!==void 0&&typeof e!="function")throw new ie(V1);const r=e!==void 0?e:Mc,i=new lt(_e(t),xn(t),X(t)),o=new Ee(_e(Lr(i))),a=P(o);return vc(a,(s,c)=>r(K(s),K(c))),o}slice(e,t){Z(this);const r=P(this),i=Wi(r,Ee);if(i===Ee){const p=new lt(_e(r),xn(r),X(r));return new Ee(_e(Lr(p,e,t)))}const o=X(r),a=qt(e),s=t===void 0?o:qt(t);let c;a===-1/0?c=0:a<0?c=o+a>0?o+a:0:c=o<a?o:a;let u;s===-1/0?u=0:s<0?u=o+s>0?o+s:0:u=o<s?o:s;const d=u-c>0?u-c:0,l=new i(d);if(Bi(l,d),d===0)return l;const f=_e(r);if(ti(f))throw ie(ei);let g=0;for(;c<u;)l[g]=K(r[c]),++c,++g;return l}subarray(e,t){Z(this);const r=P(this),i=Wi(r,Ee),o=new lt(_e(r),xn(r),X(r)),a=_m(o,e,t),s=new i(_e(a),xn(a),X(a));return Bi(s),s}indexOf(e,...t){Z(this);const r=P(this),i=X(r);let o=qt(t[0]);if(o===1/0)return-1;o<0&&(o+=i,o<0&&(o=0));for(let a=o;a<i;++a)if(en(r,a)&&K(r[a])===e)return a;return-1}lastIndexOf(e,...t){Z(this);const r=P(this),i=X(r);let o=t.length>=1?qt(t[0]):i-1;if(o===-1/0)return-1;o>=0?o=o<i-1?o:i-1:o+=i;for(let a=o;a>=0;--a)if(en(r,a)&&K(r[a])===e)return a;return-1}includes(e,...t){Z(this);const r=P(this),i=X(r);let o=qt(t[0]);if(o===1/0)return!1;o<0&&(o+=i,o<0&&(o=0));const a=vr(e);for(let s=o;s<i;++s){const c=K(r[s]);if(a&&vr(c)||c===e)return!0}return!1}join(e){Z(this);const t=P(this),r=xc(t);return tm(r,e)}toLocaleString(...e){Z(this);const t=P(this),r=xc(t);return rm(r,...Br(e))}get[i0](){if(sr(this))return"Float16Array"}};Ni(Wt,"BYTES_PER_ELEMENT",{value:l0});Ni(Wt,To,{});Sd(Wt,a0);const vo=Wt.prototype;Ni(vo,"BYTES_PER_ELEMENT",{value:l0});Ni(vo,kt,{value:vo.values,writable:!0,configurable:!0});Sd(vo,ve);function Hm(n,e,...t){return K(bm(n,e,...Br(t)))}function Ic(n){return n instanceof Int8Array||n instanceof Uint8Array||n instanceof Uint8ClampedArray||n instanceof Int16Array||n instanceof Uint16Array||n instanceof Int32Array||n instanceof Uint32Array||n instanceof Wt||n instanceof Float32Array||n instanceof Float64Array}class Fm extends Ps{constructor(e,t){super(t),this.parser=e}load(e,t,r,i){const o=new Y1(this.manager);o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(this.withCredentials),o.load(e,a=>{try{t(this.parser(a))}catch(s){i!=null?i(s):console.error(s),this.manager.itemError(e)}},r,i)}}function Gm(n){const e=n instanceof Int8Array?Il:n instanceof Uint8Array?I0:n instanceof Uint8ClampedArray?I0:n instanceof Int16Array?Cl:n instanceof Uint16Array?Nl:n instanceof Int32Array?Ol:n instanceof Uint32Array?Ll:n instanceof Wt?uu:n instanceof Float32Array?C0:n instanceof Float64Array?C0:null;return po(e!=null),e}class Aa extends Ps{constructor(e,t,r={},i){super(i),this.textureClass=e,this.parser=t,this.options={format:Ml,minFilter:x0,magFilter:x0,...r}}load(e,t,r,i){const o=new this.textureClass,a=new Fm(this.parser,this.manager);return a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(this.withCredentials),a.load(e,s=>{o.image.data=s instanceof Wt?new Uint16Array(s.buffer):s;const{width:c,height:u,depth:d,...l}=this.options;c!=null&&(o.image.width=c),u!=null&&(o.image.height=u),"depth"in o.image&&d!=null&&(o.image.depth=d),o.type=Gm(s),Object.assign(o,l),o.needsUpdate=!0,t==null||t(o)},r,i),o}}const So=Ls.clamp,gs=Ls.degToRad;function zm(n,e,t,r=0,i=1){return Ls.mapLinear(n,e,t,r,i)}function Ym(n){return Math.min(Math.max(n,0),1)}function fe(n){return(e,t)=>{e instanceof Co?Object.defineProperty(e,t,{enumerable:!0,get(){var r;return((r=this.defines)==null?void 0:r[n])!=null},set(r){var i;r!==this[t]&&(r?(this.defines??(this.defines={}),this.defines[n]="1"):(i=this.defines)==null||delete i[n],this.needsUpdate=!0)}}):Object.defineProperty(e,t,{enumerable:!0,get(){return this.defines.has(n)},set(r){r!==this[t]&&(r?this.defines.set(n,"1"):this.defines.delete(n),this.setChanged())}})}}function Cc(n){return typeof n=="number"?Math.floor(n):typeof n=="string"?parseInt(n,10):typeof n=="boolean"?+n:0}function km(n,{min:e=Number.MIN_SAFE_INTEGER,max:t=Number.MAX_SAFE_INTEGER}={}){return(r,i)=>{r instanceof Co?Object.defineProperty(r,i,{enumerable:!0,get(){var a;const o=(a=this.defines)==null?void 0:a[n];return o!=null?Cc(o):0},set(o){const a=this[i];o!==a&&(this.defines??(this.defines={}),this.defines[n]=So(o,e,t).toFixed(0),this.needsUpdate=!0)}}):Object.defineProperty(r,i,{enumerable:!0,get(){const o=this.defines.get(n);return o!=null?Cc(o):0},set(o){const a=this[i];o!==a&&(this.defines.set(n,So(o,e,t).toFixed(0)),this.setChanged())}})}}const jm=/^[ \t]*#include +"([\w\d./]+)"/gm;function Jo(n,e){return n.replace(jm,(t,r)=>{const i=r.split("/").reduce((o,a)=>typeof o!="string"&&o!=null?o[a]:void 0,e);if(typeof i!="string")throw new Error(`Could not find include for ${r}.`);return Jo(i,e)})}let Vi;function Wm(){if(Vi!=null)return Vi;const n=new Uint32Array([268435456]);return Vi=new Uint8Array(n.buffer,n.byteOffset,n.byteLength)[0]===0,Vi}function Bm(n,e,t,r=!0){if(r===Wm())return new e(n);const i=Object.assign(new DataView(n),{getFloat16(a,s){return Hm(this,a,s)}}),o=new e(i.byteLength/e.BYTES_PER_ELEMENT);for(let a=0,s=0;a<o.length;++a,s+=e.BYTES_PER_ELEMENT)o[a]=i[t](s,r);return o}const Ma=(n,e)=>Bm(n,Wt,"getFloat16",e);const Vm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*(?:i\s*\+\+|\+\+\s*i)\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qm(n,e,t,r){let i="";for(let o=parseInt(e,10);o<parseInt(t,10);++o)i+=r.replace(/\[\s*i\s*\]/g,`[${o}]`).replace(/UNROLLED_LOOP_INDEX/g,`${o}`);return i}function Zm(n){return n.replace(Vm,qm)}const Xm=`// Reference: https://github.com/mrdoob/three.js/blob/r171/examples/jsm/csm/CSMShader.js

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
`,Km=`// cSpell:words logdepthbuf

#ifdef DEPTH_PACKING
float readDepthValue(const sampler2D depthBuffer, const vec2 uv) {
  #if DEPTH_PACKING == 3201
  return unpackRGBAToDepth(texture(depthBuffer, uv));
  #else // DEPTH_PACKING == 3201
  return texture(depthBuffer, uv).r;
  #endif // DEPTH_PACKING == 3201
}
#endif // DEPTH_PACKING

float reverseLogDepth(const float depth, const float near, const float far) {
  #if defined(USE_LOGDEPTHBUF) || defined(USE_LOGARITHMIC_DEPTH_BUFFER)
  float d = pow(2.0, depth * log2(far + 1.0)) - 1.0;
  float a = far / (far - near);
  float b = far * near / (near - far);
  return a + b / d;
  #else // defined(USE_LOGARITHMIC_DEPTH_BUFFER) || defined(USE_LOGARITHMIC_DEPTH_BUFFER)
  return depth;
  #endif // defined(USE_LOGARITHMIC_DEPTH_BUFFER) || defined(USE_LOGARITHMIC_DEPTH_BUFFER)
}

float linearizeDepth(const float depth, const float near, const float far) {
  float ndc = depth * 2.0 - 1.0;
  return 2.0 * near * far / (far + near - ndc * (far - near));
}
`,Qm=`// Reference: https://advances.realtimerendering.com/s2014/index.html#_NEXT_GENERATION_POST

float interleavedGradientNoise(const vec2 coord) {
  const vec3 magic = vec3(0.06711056, 0.00583715, 52.9829189);
  return fract(magic.z * fract(dot(coord, magic.xy)));
}
`,Jm=`#if !defined(saturate)
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
`,ef=`// Reference: https://jcgt.org/published/0003/02/01/paper.pdf

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
`,tf=`float raySphereFirstIntersection(
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
`,nf=`vec3 screenToView(
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
`,rf=`// Reference: https://www.gamedev.net/tutorials/programming/graphics/contact-hardening-soft-shadows-made-fast-r4906/

vec2 vogelDisk(const int index, const int sampleCount, const float phi) {
  const float goldenAngle = 2.39996322972865332;
  float r = sqrt(float(index) + 0.5) / sqrt(float(sampleCount));
  float theta = float(index) * goldenAngle + phi;
  return r * vec2(cos(theta), sin(theta));
}
`,of=Xm,af=Km,sf=Qm,cf=Jm,uf=ef,kd=tf,df=nf,lf=rf,hf="eac103980f20c0956f2d3215833e73514be08462",xa=`https://media.githubusercontent.com/media/takram-design-engineering/three-geospatial/${hf}/packages/atmosphere/assets`,ea=64,ta=16,h0=32,m0=128,f0=32,g0=8,mf=g0*f0,ff=m0,gf=h0,na=256,ra=64,bo=1/1e3,pf=new M;function ia(n,e,t,r){const i=t.projectOnSurface(n,pf);return i!=null?t.getOsculatingSphereCenter(i,e,r).negate():r.setScalar(0)}const p0=`// Based on: https://github.com/ebruneton/precomputed_atmospheric_scattering/blob/master/atmosphere/functions.glsl

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

Number ClampCosine(const Number mu) {
  return clamp(mu, Number(-1.0), Number(1.0));
}

Length ClampDistance(const Length d) {
  return max(d, 0.0 * m);
}

Length ClampRadius(const AtmosphereParameters atmosphere, const Length r) {
  return clamp(r, atmosphere.bottom_radius, atmosphere.top_radius);
}

Length SafeSqrt(const Area a) {
  return sqrt(max(a, 0.0 * m2));
}

Length DistanceToTopAtmosphereBoundary(const AtmosphereParameters atmosphere,
    const Length r, const Number mu) {
  assert(r <= atmosphere.top_radius);
  assert(mu >= -1.0 && mu <= 1.0);
  Area discriminant = r * r * (mu * mu - 1.0) +
      atmosphere.top_radius * atmosphere.top_radius;
  return ClampDistance(-r * mu + SafeSqrt(discriminant));
}

Length DistanceToBottomAtmosphereBoundary(const AtmosphereParameters atmosphere,
    const Length r, const Number mu) {
  assert(r >= atmosphere.bottom_radius);
  assert(mu >= -1.0 && mu <= 1.0);
  Area discriminant = r * r * (mu * mu - 1.0) +
      atmosphere.bottom_radius * atmosphere.bottom_radius;
  return ClampDistance(-r * mu - SafeSqrt(discriminant));
}

bool RayIntersectsGround(const AtmosphereParameters atmosphere,
    const Length r, const Number mu) {
  assert(r >= atmosphere.bottom_radius);
  assert(mu >= -1.0 && mu <= 1.0);
  return mu < 0.0 && r * r * (mu * mu - 1.0) +
      atmosphere.bottom_radius * atmosphere.bottom_radius >= 0.0 * m2;
}

Number GetTextureCoordFromUnitRange(const Number x, const int texture_size) {
  return 0.5 / Number(texture_size) + x * (1.0 - 1.0 / Number(texture_size));
}

vec2 GetTransmittanceTextureUvFromRMu(const AtmosphereParameters atmosphere,
    const Length r, const Number mu) {
  assert(r >= atmosphere.bottom_radius && r <= atmosphere.top_radius);
  assert(mu >= -1.0 && mu <= 1.0);
  // Distance to top atmosphere boundary for a horizontal ray at ground level.
  Length H = sqrt(atmosphere.top_radius * atmosphere.top_radius -
      atmosphere.bottom_radius * atmosphere.bottom_radius);
  // Distance to the horizon.
  Length rho =
      SafeSqrt(r * r - atmosphere.bottom_radius * atmosphere.bottom_radius);
  // Distance to the top atmosphere boundary for the ray (r,mu), and its minimum
  // and maximum values over all mu - obtained for (r,1) and (r,mu_horizon).
  Length d = DistanceToTopAtmosphereBoundary(atmosphere, r, mu);
  Length d_min = atmosphere.top_radius - r;
  Length d_max = rho + H;
  Number x_mu = (d - d_min) / (d_max - d_min);
  Number x_r = rho / H;
  return vec2(GetTextureCoordFromUnitRange(x_mu, TRANSMITTANCE_TEXTURE_WIDTH),
              GetTextureCoordFromUnitRange(x_r, TRANSMITTANCE_TEXTURE_HEIGHT));
}

DimensionlessSpectrum GetTransmittanceToTopAtmosphereBoundary(
    const AtmosphereParameters atmosphere,
    const TransmittanceTexture transmittance_texture,
    const Length r, const Number mu) {
  assert(r >= atmosphere.bottom_radius && r <= atmosphere.top_radius);
  vec2 uv = GetTransmittanceTextureUvFromRMu(atmosphere, r, mu);
  // @shotamatsuda: Added for the precomputation stage in half-float precision.
  #ifdef TRANSMITTANCE_PRECISION_LOG
  // Manually interpolate the transmittance instead of the optical depth.
  const vec2 size = vec2(TRANSMITTANCE_TEXTURE_WIDTH, TRANSMITTANCE_TEXTURE_HEIGHT);
  const vec3 texel_size = vec3(1.0 / size, 0.0);
  vec2 coord = (uv * size) - 0.5;
  vec2 i = (floor(coord) + 0.5) * texel_size.xy;
  vec2 f = fract(coord);
  vec4 t1 = exp(-texture(transmittance_texture, i));
  vec4 t2 = exp(-texture(transmittance_texture, i + texel_size.xz));
  vec4 t3 = exp(-texture(transmittance_texture, i + texel_size.zy));
  vec4 t4 = exp(-texture(transmittance_texture, i + texel_size.xy));
  return DimensionlessSpectrum(mix(mix(t1, t2, f.x), mix(t3, t4, f.x), f.y));
  #else // TRANSMITTANCE_PRECISION_LOG
  return DimensionlessSpectrum(texture(transmittance_texture, uv));
  #endif // TRANSMITTANCE_PRECISION_LOG
}

DimensionlessSpectrum GetTransmittance(
    const AtmosphereParameters atmosphere,
    const TransmittanceTexture transmittance_texture,
    const Length r, const Number mu, const Length d,
    const bool ray_r_mu_intersects_ground) {
  assert(r >= atmosphere.bottom_radius && r <= atmosphere.top_radius);
  assert(mu >= -1.0 && mu <= 1.0);
  assert(d >= 0.0 * m);

  Length r_d = ClampRadius(atmosphere, sqrt(d * d + 2.0 * r * mu * d + r * r));
  Number mu_d = ClampCosine((r * mu + d) / r_d);

  if (ray_r_mu_intersects_ground) {
    return min(
        GetTransmittanceToTopAtmosphereBoundary(
            atmosphere, transmittance_texture, r_d, -mu_d) /
        GetTransmittanceToTopAtmosphereBoundary(
            atmosphere, transmittance_texture, r, -mu),
        DimensionlessSpectrum(1.0));
  } else {
    return min(
        GetTransmittanceToTopAtmosphereBoundary(
            atmosphere, transmittance_texture, r, mu) /
        GetTransmittanceToTopAtmosphereBoundary(
            atmosphere, transmittance_texture, r_d, mu_d),
        DimensionlessSpectrum(1.0));
  }
}

DimensionlessSpectrum GetTransmittanceToSun(
    const AtmosphereParameters atmosphere,
    const TransmittanceTexture transmittance_texture,
    const Length r, const Number mu_s) {
  Number sin_theta_h = atmosphere.bottom_radius / r;
  Number cos_theta_h = -sqrt(max(1.0 - sin_theta_h * sin_theta_h, 0.0));
  return GetTransmittanceToTopAtmosphereBoundary(
          atmosphere, transmittance_texture, r, mu_s) *
      smoothstep(-sin_theta_h * atmosphere.sun_angular_radius / rad,
                 sin_theta_h * atmosphere.sun_angular_radius / rad,
                 mu_s - cos_theta_h);
}

InverseSolidAngle RayleighPhaseFunction(const Number nu) {
  InverseSolidAngle k = 3.0 / (16.0 * PI * sr);
  return k * (1.0 + nu * nu);
}

InverseSolidAngle MiePhaseFunction(const Number g, const Number nu) {
  InverseSolidAngle k = 3.0 / (8.0 * PI * sr) * (1.0 - g * g) / (2.0 + g * g);
  return k * (1.0 + nu * nu) / pow(1.0 + g * g - 2.0 * g * nu, 1.5);
}

vec4 GetScatteringTextureUvwzFromRMuMuSNu(const AtmosphereParameters atmosphere,
    const Length r, const Number mu, const Number mu_s, const Number nu,
    const bool ray_r_mu_intersects_ground) {
  assert(r >= atmosphere.bottom_radius && r <= atmosphere.top_radius);
  assert(mu >= -1.0 && mu <= 1.0);
  assert(mu_s >= -1.0 && mu_s <= 1.0);
  assert(nu >= -1.0 && nu <= 1.0);

  // Distance to top atmosphere boundary for a horizontal ray at ground level.
  Length H = sqrt(atmosphere.top_radius * atmosphere.top_radius -
      atmosphere.bottom_radius * atmosphere.bottom_radius);
  // Distance to the horizon.
  Length rho =
      SafeSqrt(r * r - atmosphere.bottom_radius * atmosphere.bottom_radius);
  Number u_r = GetTextureCoordFromUnitRange(rho / H, SCATTERING_TEXTURE_R_SIZE);

  // Discriminant of the quadratic equation for the intersections of the ray
  // (r,mu) with the ground (see RayIntersectsGround).
  Length r_mu = r * mu;
  Area discriminant =
      r_mu * r_mu - r * r + atmosphere.bottom_radius * atmosphere.bottom_radius;
  Number u_mu;
  if (ray_r_mu_intersects_ground) {
    // Distance to the ground for the ray (r,mu), and its minimum and maximum
    // values over all mu - obtained for (r,-1) and (r,mu_horizon).
    Length d = -r_mu - SafeSqrt(discriminant);
    Length d_min = r - atmosphere.bottom_radius;
    Length d_max = rho;
    u_mu = 0.5 - 0.5 * GetTextureCoordFromUnitRange(d_max == d_min ? 0.0 :
        (d - d_min) / (d_max - d_min), SCATTERING_TEXTURE_MU_SIZE / 2);
  } else {
    // Distance to the top atmosphere boundary for the ray (r,mu), and its
    // minimum and maximum values over all mu - obtained for (r,1) and
    // (r,mu_horizon).
    Length d = -r_mu + SafeSqrt(discriminant + H * H);
    Length d_min = atmosphere.top_radius - r;
    Length d_max = rho + H;
    u_mu = 0.5 + 0.5 * GetTextureCoordFromUnitRange(
        (d - d_min) / (d_max - d_min), SCATTERING_TEXTURE_MU_SIZE / 2);
  }

  Length d = DistanceToTopAtmosphereBoundary(
      atmosphere, atmosphere.bottom_radius, mu_s);
  Length d_min = atmosphere.top_radius - atmosphere.bottom_radius;
  Length d_max = H;
  Number a = (d - d_min) / (d_max - d_min);
  Length D = DistanceToTopAtmosphereBoundary(
      atmosphere, atmosphere.bottom_radius, atmosphere.mu_s_min);
  Number A = (D - d_min) / (d_max - d_min);
  // An ad-hoc function equal to 0 for mu_s = mu_s_min (because then d = D and
  // thus a = A), equal to 1 for mu_s = 1 (because then d = d_min and thus
  // a = 0), and with a large slope around mu_s = 0, to get more texture
  // samples near the horizon.
  Number u_mu_s = GetTextureCoordFromUnitRange(
      max(1.0 - a / A, 0.0) / (1.0 + a), SCATTERING_TEXTURE_MU_S_SIZE);

  Number u_nu = (nu + 1.0) / 2.0;
  return vec4(u_nu, u_mu_s, u_mu, u_r);
}

vec2 GetIrradianceTextureUvFromRMuS(const AtmosphereParameters atmosphere,
    const Length r, const Number mu_s) {
  assert(r >= atmosphere.bottom_radius && r <= atmosphere.top_radius);
  assert(mu_s >= -1.0 && mu_s <= 1.0);
  Number x_r = (r - atmosphere.bottom_radius) /
      (atmosphere.top_radius - atmosphere.bottom_radius);
  Number x_mu_s = mu_s * 0.5 + 0.5;
  return vec2(GetTextureCoordFromUnitRange(x_mu_s, IRRADIANCE_TEXTURE_WIDTH),
              GetTextureCoordFromUnitRange(x_r, IRRADIANCE_TEXTURE_HEIGHT));
}

IrradianceSpectrum GetIrradiance(
    const AtmosphereParameters atmosphere,
    const IrradianceTexture irradiance_texture,
    const Length r, const Number mu_s) {
  vec2 uv = GetIrradianceTextureUvFromRMuS(atmosphere, r, mu_s);
  return IrradianceSpectrum(texture(irradiance_texture, uv));
}
`,y0=`// Based on: https://github.com/ebruneton/precomputed_atmospheric_scattering/blob/master/atmosphere/definitions.glsl

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
 */

#define assert(x)

#define Length float
#define Wavelength float
#define Angle float
#define SolidAngle float
#define Power float
#define LuminousPower float

#define Number float
#define InverseLength float
#define Area float
#define Volume float
#define NumberDensity float
#define Irradiance float
#define Radiance float
#define SpectralPower float
#define SpectralIrradiance float
#define SpectralRadiance float
#define SpectralRadianceDensity float
#define ScatteringCoefficient float
#define InverseSolidAngle float
#define LuminousIntensity float
#define Luminance float
#define Illuminance float

// A generic function from Wavelength to some other type.
#define AbstractSpectrum vec3
// A function from Wavelength to Number.
#define DimensionlessSpectrum vec3
// A function from Wavelength to SpectralPower.
#define PowerSpectrum vec3
// A function from Wavelength to SpectralIrradiance.
#define IrradianceSpectrum vec3
// A function from Wavelength to SpectralRadiance.
#define RadianceSpectrum vec3
// A function from Wavelength to SpectralRadianceDensity.
#define RadianceDensitySpectrum vec3
// A function from Wavelength to ScatteringCoefficient.
#define ScatteringSpectrum vec3

// A position in 3D (3 length values).
#define Position vec3
// A unit direction vector in 3D (3 unit-less values).
#define Direction vec3
// A vector of 3 luminance values.
#define Luminance3 vec3
// A vector of 3 illuminance values.
#define Illuminance3 vec3

#define TransmittanceTexture sampler2D
#define AbstractScatteringTexture sampler3D
#define ReducedScatteringTexture sampler3D
#define ScatteringTexture sampler3D
#define ScatteringDensityTexture sampler3D
#define IrradianceTexture sampler2D

const Length m = 1.0;
const Wavelength nm = 1.0;
const Angle rad = 1.0;
const SolidAngle sr = 1.0;
const Power watt = 1.0;
const LuminousPower lm = 1.0;

#if !defined(PI)
const float PI = 3.14159265358979323846;
#endif // !defined(PI)

const Length km = 1000.0 * m;
const Area m2 = m * m;
const Volume m3 = m * m * m;
const Angle pi = PI * rad;
const Angle deg = pi / 180.0;
const Irradiance watt_per_square_meter = watt / m2;
const Radiance watt_per_square_meter_per_sr = watt / (m2 * sr);
const SpectralIrradiance watt_per_square_meter_per_nm = watt / (m2 * nm);
const SpectralRadiance watt_per_square_meter_per_sr_per_nm = watt / (m2 * sr * nm);
const SpectralRadianceDensity watt_per_cubic_meter_per_sr_per_nm = watt / (m3 * sr * nm);
const LuminousIntensity cd = lm / sr;
const LuminousIntensity kcd = 1000.0 * cd;
const Luminance cd_per_square_meter = cd / m2;
const Luminance kcd_per_square_meter = kcd / m2;

struct DensityProfileLayer {
  Length width;
  Number exp_term;
  InverseLength exp_scale;
  InverseLength linear_term;
  Number constant_term;
};

struct DensityProfile {
  DensityProfileLayer layers[2];
};

// See AtmosphereParameter.ts for further details.
struct AtmosphereParameters {
  IrradianceSpectrum solar_irradiance;
  Angle sun_angular_radius;
  Length bottom_radius;
  Length top_radius;
  DensityProfile rayleigh_density;
  ScatteringSpectrum rayleigh_scattering;
  DensityProfile mie_density;
  ScatteringSpectrum mie_scattering;
  ScatteringSpectrum mie_extinction;
  Number mie_phase_function_g;
  DensityProfile absorption_density;
  ScatteringSpectrum absorption_extinction;
  DimensionlessSpectrum ground_albedo;
  Number mu_s_min;
};
`,_0=`// Based on: https://github.com/ebruneton/precomputed_atmospheric_scattering/blob/master/atmosphere/functions.glsl

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

#ifdef COMBINED_SCATTERING_TEXTURES
vec3 GetExtrapolatedSingleMieScattering(
    const AtmosphereParameters atmosphere, const vec4 scattering) {
  // Algebraically this can never be negative, but rounding errors can produce
  // that effect for sufficiently short view rays.
  // @shotamatsuda: Avoid division by infinitesimal values.
  // See https://github.com/takram-design-engineering/three-geospatial/issues/47
  if (scattering.r < 1e-5) {
    return vec3(0.0);
  }
  return scattering.rgb * scattering.a / scattering.r *
	    (atmosphere.rayleigh_scattering.r / atmosphere.mie_scattering.r) *
	    (atmosphere.mie_scattering / atmosphere.rayleigh_scattering);
}
#endif // COMBINED_SCATTERING_TEXTURES

IrradianceSpectrum GetCombinedScattering(
    const AtmosphereParameters atmosphere,
    const ReducedScatteringTexture scattering_texture,
    const ReducedScatteringTexture single_mie_scattering_texture,
    const Length r, const Number mu, const Number mu_s, const Number nu,
    const bool ray_r_mu_intersects_ground,
    out IrradianceSpectrum single_mie_scattering) {
  vec4 uvwz = GetScatteringTextureUvwzFromRMuMuSNu(
      atmosphere, r, mu, mu_s, nu, ray_r_mu_intersects_ground);
  Number tex_coord_x = uvwz.x * Number(SCATTERING_TEXTURE_NU_SIZE - 1);
  Number tex_x = floor(tex_coord_x);
  Number lerp = tex_coord_x - tex_x;
  vec3 uvw0 = vec3((tex_x + uvwz.y) / Number(SCATTERING_TEXTURE_NU_SIZE),
      uvwz.z, uvwz.w);
  vec3 uvw1 = vec3((tex_x + 1.0 + uvwz.y) / Number(SCATTERING_TEXTURE_NU_SIZE),
      uvwz.z, uvwz.w);
#ifdef COMBINED_SCATTERING_TEXTURES
  vec4 combined_scattering =
      texture(scattering_texture, uvw0) * (1.0 - lerp) +
      texture(scattering_texture, uvw1) * lerp;
  IrradianceSpectrum scattering = IrradianceSpectrum(combined_scattering);
  single_mie_scattering =
      GetExtrapolatedSingleMieScattering(atmosphere, combined_scattering);
#else // COMBINED_SCATTERING_TEXTURES
  IrradianceSpectrum scattering = IrradianceSpectrum(
      texture(scattering_texture, uvw0) * (1.0 - lerp) +
      texture(scattering_texture, uvw1) * lerp);
  single_mie_scattering = IrradianceSpectrum(
      texture(single_mie_scattering_texture, uvw0) * (1.0 - lerp) +
      texture(single_mie_scattering_texture, uvw1) * lerp);
#endif // COMBINED_SCATTERING_TEXTURES
  return scattering;
}

// @shotamatsuda: Added for reading higher-order scattering texture.
#ifdef HAS_HIGHER_ORDER_SCATTERING_TEXTURE
IrradianceSpectrum GetScattering(
    const AtmosphereParameters atmosphere,
    const ReducedScatteringTexture scattering_texture,
    const Length r, const Number mu, const Number mu_s, const Number nu,
    const bool ray_r_mu_intersects_ground) {
  vec4 uvwz = GetScatteringTextureUvwzFromRMuMuSNu(
      atmosphere, r, mu, mu_s, nu, ray_r_mu_intersects_ground);
  Number tex_coord_x = uvwz.x * Number(SCATTERING_TEXTURE_NU_SIZE - 1);
  Number tex_x = floor(tex_coord_x);
  Number lerp = tex_coord_x - tex_x;
  vec3 uvw0 = vec3((tex_x + uvwz.y) / Number(SCATTERING_TEXTURE_NU_SIZE),
      uvwz.z, uvwz.w);
  vec3 uvw1 = vec3((tex_x + 1.0 + uvwz.y) / Number(SCATTERING_TEXTURE_NU_SIZE),
      uvwz.z, uvwz.w);
  IrradianceSpectrum scattering = IrradianceSpectrum(
      texture(scattering_texture, uvw0) * (1.0 - lerp) +
      texture(scattering_texture, uvw1) * lerp);
  return scattering;
}
#endif // HAS_HIGHER_ORDER_SCATTERING_TEXTURE

RadianceSpectrum GetSkyRadiance(
    const AtmosphereParameters atmosphere,
    const TransmittanceTexture transmittance_texture,
    const ReducedScatteringTexture scattering_texture,
    const ReducedScatteringTexture single_mie_scattering_texture,
    Position camera, const Direction view_ray, const Length shadow_length,
    const Direction sun_direction,
    out DimensionlessSpectrum transmittance) {
  // Compute the distance to the top atmosphere boundary along the view ray,
  // assuming the viewer is in space (or NaN if the view ray does not intersect
  // the atmosphere).
  Length r = length(camera);
  Length rmu = dot(camera, view_ray);
  // @shotamatsuda: Use SafeSqrt instead.
  // See: https://github.com/takram-design-engineering/three-geospatial/pull/26
  Length distance_to_top_atmosphere_boundary = -rmu -
      SafeSqrt(rmu * rmu - r * r +
          atmosphere.top_radius * atmosphere.top_radius);
  // If the viewer is in space and the view ray intersects the atmosphere, move
  // the viewer to the top atmosphere boundary (along the view ray):
  if (distance_to_top_atmosphere_boundary > 0.0 * m) {
    camera = camera + view_ray * distance_to_top_atmosphere_boundary;
    r = atmosphere.top_radius;
    rmu += distance_to_top_atmosphere_boundary;
  } else if (r > atmosphere.top_radius) {
    // If the view ray does not intersect the atmosphere, simply return 0.
    transmittance = DimensionlessSpectrum(1.0);
    return RadianceSpectrum(0.0 * watt_per_square_meter_per_sr_per_nm);
  }
  // Compute the r, mu, mu_s and nu parameters needed for the texture lookups.
  Number mu = rmu / r;
  Number mu_s = dot(camera, sun_direction) / r;
  Number nu = dot(view_ray, sun_direction);

  // @shotamatsuda: For rendering points below the bottom atmosphere.
  #ifdef GROUND
  bool ray_r_mu_intersects_ground = RayIntersectsGround(atmosphere, r, mu);
  #else // GROUND
  bool ray_r_mu_intersects_ground = false;
  #endif // GROUND

  transmittance = ray_r_mu_intersects_ground ? DimensionlessSpectrum(0.0) :
      GetTransmittanceToTopAtmosphereBoundary(
          atmosphere, transmittance_texture, r, mu);
  IrradianceSpectrum single_mie_scattering;
  IrradianceSpectrum scattering;
  if (shadow_length == 0.0 * m) {
    scattering = GetCombinedScattering(
        atmosphere, scattering_texture, single_mie_scattering_texture,
        r, mu, mu_s, nu, ray_r_mu_intersects_ground,
        single_mie_scattering);
  } else {
    // Case of light shafts (shadow_length is the total length noted l in our
    // paper): we omit the scattering between the camera and the point at
    // distance l, by implementing Eq. (18) of the paper (shadow_transmittance
    // is the T(x,x_s) term, scattering is the S|x_s=x+lv term).
    Length d = shadow_length;
    Length r_p =
        ClampRadius(atmosphere, sqrt(d * d + 2.0 * r * mu * d + r * r));
    Number mu_p = (r * mu + d) / r_p;
    Number mu_s_p = (r * mu_s + d * nu) / r_p;

    scattering = GetCombinedScattering(
        atmosphere, scattering_texture, single_mie_scattering_texture,
        r_p, mu_p, mu_s_p, nu, ray_r_mu_intersects_ground,
        single_mie_scattering);
    DimensionlessSpectrum shadow_transmittance =
        GetTransmittance(atmosphere, transmittance_texture,
            r, mu, shadow_length, ray_r_mu_intersects_ground);
    // @shotamatsuda: Occlude only single Rayleigh scattering by the shadow.
#ifdef HAS_HIGHER_ORDER_SCATTERING_TEXTURE
    IrradianceSpectrum higher_order_scattering = GetScattering(
        atmosphere, higher_order_scattering_texture,
        r_p, mu_p, mu_s_p, nu, ray_r_mu_intersects_ground);
    IrradianceSpectrum single_scattering = scattering - higher_order_scattering;
    scattering = single_scattering * shadow_transmittance + higher_order_scattering;
#else // HAS_HIGHER_ORDER_SCATTERING_TEXTURE
    scattering = scattering * shadow_transmittance;
#endif // HAS_HIGHER_ORDER_SCATTERING_TEXTURE
    single_mie_scattering = single_mie_scattering * shadow_transmittance;
  }
  return scattering * RayleighPhaseFunction(nu) + single_mie_scattering *
      MiePhaseFunction(atmosphere.mie_phase_function_g, nu);
}

// @shotamatsuda: Returns the point on the ray closest to the origin.
vec3 ClosestPointOnRay(const Position camera, const Position point) {
  Position ray = point - camera;
  Number t = clamp(-dot(camera, ray) / dot(ray, ray), 0.0, 1.0);
  return camera + t * ray;
}

vec2 RaySphereIntersections(
    const Position camera, const Direction direction, const Length radius) {
  float b = 2.0 * dot(direction, camera);
  float c = dot(camera, camera) - radius * radius;
  float discriminant = b * b - 4.0 * c;
  float Q = sqrt(discriminant);
  return vec2(-b - Q, -b + Q) * 0.5;
}

// @shotamatsuda: Clip the view ray at the bottom atmosphere boundary.
bool ClipAtBottomAtmosphere(
    const AtmosphereParameters atmosphere,
    const Direction view_ray, inout Position camera, inout Position point) {
  const Length eps = 0.0;
  Length bottom_radius = atmosphere.bottom_radius + eps;
  Length r_camera = length(camera);
  Length r_point = length(point);
  bool camera_below = r_camera < bottom_radius;
  bool point_below = r_point < bottom_radius;

  vec2 t = RaySphereIntersections(camera, view_ray, bottom_radius);
  Position intersection = camera + view_ray * (camera_below ? t.y : t.x);
  camera = camera_below ? intersection : camera;
  point = point_below ? intersection : point;

  return camera_below && point_below;
}

RadianceSpectrum GetSkyRadianceToPoint(
    const AtmosphereParameters atmosphere,
    const TransmittanceTexture transmittance_texture,
    const ReducedScatteringTexture scattering_texture,
    const ReducedScatteringTexture single_mie_scattering_texture,
    Position camera, Position point, const Length shadow_length,
    const Direction sun_direction, out DimensionlessSpectrum transmittance) {
  // @shotamatsuda: Avoid artifacts when the ray does not intersect the top
  // atmosphere boundary.
  if (length(ClosestPointOnRay(camera, point)) > atmosphere.top_radius) {
    transmittance = vec3(1.0);
    return vec3(0.0);
  }

  Direction view_ray = normalize(point - camera);
  if (ClipAtBottomAtmosphere(atmosphere, view_ray, camera, point)) {
    transmittance = vec3(1.0);
    return vec3(0.0);
  }

  // Compute the distance to the top atmosphere boundary along the view ray,
  // assuming the viewer is in space (or NaN if the view ray does not intersect
  // the atmosphere).
  Length r = length(camera);
  Length rmu = dot(camera, view_ray);
  // @shotamatsuda: Use SafeSqrt instead.
  // See: https://github.com/takram-design-engineering/three-geospatial/pull/26
  Length distance_to_top_atmosphere_boundary = -rmu -
      SafeSqrt(rmu * rmu - r * r +
          atmosphere.top_radius * atmosphere.top_radius);
  // If the viewer is in space and the view ray intersects the atmosphere, move
  // the viewer to the top atmosphere boundary (along the view ray):
  if (distance_to_top_atmosphere_boundary > 0.0 * m) {
    camera = camera + view_ray * distance_to_top_atmosphere_boundary;
    r = atmosphere.top_radius;
    rmu += distance_to_top_atmosphere_boundary;
  }

  // Compute the r, mu, mu_s and nu parameters for the first texture lookup.
  Number mu = rmu / r;
  Number mu_s = dot(camera, sun_direction) / r;
  Number nu = dot(view_ray, sun_direction);
  Length d = length(point - camera);
  bool ray_r_mu_intersects_ground = RayIntersectsGround(atmosphere, r, mu);

  // @shotamatsuda: Hack to avoid rendering artifacts near the horizon, due to
  // finite atmosphere texture resolution and finite floating point precision.
  // See: https://github.com/ebruneton/precomputed_atmospheric_scattering/pull/32
  if (!ray_r_mu_intersects_ground) {
    Number mu_horizon = -SafeSqrt(1.0 -
        (atmosphere.bottom_radius * atmosphere.bottom_radius) / (r * r));
    const Number eps = 0.004;
    mu = max(mu, mu_horizon + eps);
  }

  transmittance = GetTransmittance(atmosphere, transmittance_texture,
      r, mu, d, ray_r_mu_intersects_ground);

  IrradianceSpectrum single_mie_scattering;
  IrradianceSpectrum scattering = GetCombinedScattering(
      atmosphere, scattering_texture, single_mie_scattering_texture,
      r, mu, mu_s, nu, ray_r_mu_intersects_ground,
      single_mie_scattering);

  // Compute the r, mu, mu_s and nu parameters for the second texture lookup.
  // If shadow_length is not 0 (case of light shafts), we want to ignore the
  // scattering along the last shadow_length meters of the view ray, which we
  // do by subtracting shadow_length from d (this way scattering_p is equal to
  // the S|x_s=x_0-lv term in Eq. (17) of our paper).
  d = max(d - shadow_length, 0.0 * m);
  Length r_p = ClampRadius(atmosphere, sqrt(d * d + 2.0 * r * mu * d + r * r));
  Number mu_p = (r * mu + d) / r_p;
  Number mu_s_p = (r * mu_s + d * nu) / r_p;

  IrradianceSpectrum single_mie_scattering_p;
  IrradianceSpectrum scattering_p = GetCombinedScattering(
      atmosphere, scattering_texture, single_mie_scattering_texture,
      r_p, mu_p, mu_s_p, nu, ray_r_mu_intersects_ground,
      single_mie_scattering_p);

  // Combine the lookup results to get the scattering between camera and point.
  DimensionlessSpectrum shadow_transmittance = transmittance;
  if (shadow_length > 0.0 * m) {
    // This is the T(x,x_s) term in Eq. (17) of our paper, for light shafts.
    shadow_transmittance = GetTransmittance(atmosphere, transmittance_texture,
        r, mu, d, ray_r_mu_intersects_ground);
  }
  // @shotamatsuda: Occlude only single Rayleigh scattering by the shadow.
#ifdef HAS_HIGHER_ORDER_SCATTERING_TEXTURE
  IrradianceSpectrum higher_order_scattering = GetScattering(
      atmosphere, higher_order_scattering_texture,
      r, mu, mu_s, nu, ray_r_mu_intersects_ground);
  IrradianceSpectrum single_scattering = scattering - higher_order_scattering;
  IrradianceSpectrum higher_order_scattering_p = GetScattering(
      atmosphere, higher_order_scattering_texture,
      r_p, mu_p, mu_s_p, nu, ray_r_mu_intersects_ground);
  IrradianceSpectrum single_scattering_p =
      scattering_p - higher_order_scattering_p;
  scattering =
      single_scattering - shadow_transmittance * single_scattering_p +
      higher_order_scattering - transmittance * higher_order_scattering_p;
#else // HAS_HIGHER_ORDER_SCATTERING_TEXTURE
  scattering = scattering - shadow_transmittance * scattering_p;
#endif // HAS_HIGHER_ORDER_SCATTERING_TEXTURE

  single_mie_scattering =
      single_mie_scattering - shadow_transmittance * single_mie_scattering_p;
#ifdef COMBINED_SCATTERING_TEXTURES
  single_mie_scattering = GetExtrapolatedSingleMieScattering(
      atmosphere, vec4(scattering, single_mie_scattering.r));
#endif // COMBINED_SCATTERING_TEXTURES

  // Hack to avoid rendering artifacts when the sun is below the horizon.
  single_mie_scattering = single_mie_scattering *
      smoothstep(Number(0.0), Number(0.01), mu_s);

  return scattering * RayleighPhaseFunction(nu) + single_mie_scattering *
      MiePhaseFunction(atmosphere.mie_phase_function_g, nu);
}

IrradianceSpectrum GetSunAndSkyIrradiance(
    const AtmosphereParameters atmosphere,
    const TransmittanceTexture transmittance_texture,
    const IrradianceTexture irradiance_texture,
    const Position point, const Direction normal, const Direction sun_direction,
    out IrradianceSpectrum sky_irradiance) {
  Length r = length(point);
  Number mu_s = dot(point, sun_direction) / r;

  // Indirect irradiance (approximated if the surface is not horizontal).
  sky_irradiance = GetIrradiance(atmosphere, irradiance_texture, r, mu_s) *
      (1.0 + dot(normal, point) / r) * 0.5;

  // Direct irradiance.
  return atmosphere.solar_irradiance *
      GetTransmittanceToSun(
          atmosphere, transmittance_texture, r, mu_s) *
      max(dot(normal, sun_direction), 0.0);
}

// @shotamatsuda: Added for the clouds.
IrradianceSpectrum GetSunAndSkyScalarIrradiance(
    const AtmosphereParameters atmosphere,
    const TransmittanceTexture transmittance_texture,
    const IrradianceTexture irradiance_texture,
    const Position point, const Direction sun_direction,
    out IrradianceSpectrum sky_irradiance) {
  Length r = length(point);
  Number mu_s = dot(point, sun_direction) / r;

  // Indirect irradiance. Integral over sphere yields 2π.
  sky_irradiance = GetIrradiance(atmosphere, irradiance_texture, r, mu_s) *
      2.0 * PI;

  // Direct irradiance. Omit the cosine term.
  return atmosphere.solar_irradiance *
      GetTransmittanceToSun(atmosphere, transmittance_texture, r, mu_s);
}

Luminance3 GetSolarLuminance() {
  return ATMOSPHERE.solar_irradiance /
      (PI * ATMOSPHERE.sun_angular_radius * ATMOSPHERE.sun_angular_radius) *
      SUN_SPECTRAL_RADIANCE_TO_LUMINANCE;
}

Luminance3 GetSkyLuminance(
    const Position camera, Direction view_ray, const Length shadow_length,
    const Direction sun_direction, out DimensionlessSpectrum transmittance) {
  return GetSkyRadiance(ATMOSPHERE, transmittance_texture,
      scattering_texture, single_mie_scattering_texture,
      camera, view_ray, shadow_length, sun_direction,
      transmittance) * SKY_SPECTRAL_RADIANCE_TO_LUMINANCE;
}

Luminance3 GetSkyLuminanceToPoint(
    const Position camera, const Position point, const Length shadow_length,
    const Direction sun_direction, out DimensionlessSpectrum transmittance) {
  return GetSkyRadianceToPoint(ATMOSPHERE, transmittance_texture,
      scattering_texture, single_mie_scattering_texture,
      camera, point, shadow_length, sun_direction, transmittance) *
      SKY_SPECTRAL_RADIANCE_TO_LUMINANCE;
}

Illuminance3 GetSunAndSkyIlluminance(
    const Position p, const Direction normal, const Direction sun_direction,
    out IrradianceSpectrum sky_irradiance) {
  IrradianceSpectrum sun_irradiance = GetSunAndSkyIrradiance(
      ATMOSPHERE, transmittance_texture, irradiance_texture, p, normal,
      sun_direction, sky_irradiance);
  sky_irradiance *= SKY_SPECTRAL_RADIANCE_TO_LUMINANCE;
  return sun_irradiance * SUN_SPECTRAL_RADIANCE_TO_LUMINANCE;
}

// @shotamatsuda: Added for the clouds.
Illuminance3 GetSunAndSkyScalarIlluminance(
    const Position p, const Direction sun_direction,
    out IrradianceSpectrum sky_irradiance) {
  IrradianceSpectrum sun_irradiance = GetSunAndSkyScalarIrradiance(
      ATMOSPHERE, transmittance_texture, irradiance_texture, p,
      sun_direction, sky_irradiance);
  sky_irradiance *= SKY_SPECTRAL_RADIANCE_TO_LUMINANCE;
  return sun_irradiance * SUN_SPECTRAL_RADIANCE_TO_LUMINANCE;
}

#define GetSolarRadiance GetSolarLuminance
#define GetSkyRadiance GetSkyLuminance
#define GetSkyRadianceToPoint GetSkyLuminanceToPoint
#define GetSunAndSkyIrradiance GetSunAndSkyIlluminance
#define GetSunAndSkyScalarIrradiance GetSunAndSkyScalarIlluminance
`,yf=new M(.2126,.7152,.0722),_f=["solarIrradiance","sunAngularRadius","bottomRadius","topRadius","rayleighDensity","rayleighScattering","mieDensity","mieScattering","mieExtinction","miePhaseFunctionG","absorptionDensity","absorptionExtinction","groundAlbedo","muSMin","skyRadianceToLuminance","sunRadianceToLuminance"];function Ef(n,e){if(e!=null)for(const t of _f){const r=e[t];r!=null&&(n[t]instanceof M?n[t].copy(r):n[t]=r)}}class er{constructor(e,t,r,i,o){this.width=e,this.expTerm=t,this.expScale=r,this.linearTerm=i,this.constantTerm=o}toUniform(){return new A({width:this.width,exp_term:this.expTerm,exp_scale:this.expScale,linear_term:this.linearTerm,constant_term:this.constantTerm})}}const ps=class{constructor(e){this.solarIrradiance=new M(1.474,1.8504,1.91198),this.sunAngularRadius=.004675,this.bottomRadius=636e4,this.topRadius=642e4,this.rayleighDensity=[new er(0,0,0,0,0),new er(0,1,-.125,0,0)],this.rayleighScattering=new M(.005802,.013558,.0331),this.mieDensity=[new er(0,0,0,0,0),new er(0,1,-.833333,0,0)],this.mieScattering=new M(.003996,.003996,.003996),this.mieExtinction=new M(.00444,.00444,.00444),this.miePhaseFunctionG=.8,this.absorptionDensity=[new er(25,0,0,1/15,-2/3),new er(0,0,0,-1/15,8/3)],this.absorptionExtinction=new M(65e-5,.001881,85e-6),this.groundAlbedo=new Ln().setScalar(.1),this.muSMin=Math.cos(gs(120)),this.sunRadianceToLuminance=new M(98242.786222,69954.398112,66475.012354),this.skyRadianceToLuminance=new M(114974.916437,71305.954816,65310.548555),this.sunRadianceToRelativeLuminance=new M,this.skyRadianceToRelativeLuminance=new M,Ef(this,e);const t=yf.dot(this.sunRadianceToLuminance);this.sunRadianceToRelativeLuminance.copy(this.sunRadianceToLuminance).divideScalar(t),this.skyRadianceToRelativeLuminance.copy(this.skyRadianceToLuminance).divideScalar(t)}toUniform(){return new A({solar_irradiance:this.solarIrradiance,sun_angular_radius:this.sunAngularRadius,bottom_radius:this.bottomRadius*bo,top_radius:this.topRadius*bo,rayleigh_density:{layers:this.rayleighDensity.map(e=>e.toUniform().value)},rayleigh_scattering:this.rayleighScattering,mie_density:{layers:this.mieDensity.map(e=>e.toUniform().value)},mie_scattering:this.mieScattering,mie_extinction:this.mieExtinction,mie_phase_function_g:this.miePhaseFunctionG,absorption_density:{layers:this.absorptionDensity.map(e=>e.toUniform().value)},absorption_extinction:this.absorptionExtinction,ground_albedo:this.groundAlbedo,mu_s_min:this.muSMin})}};ps.DEFAULT=new ps;let oa=ps;const Tf=`precision highp sampler2DArray;

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

#include "bruneton/definitions"

uniform AtmosphereParameters ATMOSPHERE;
uniform vec3 SUN_SPECTRAL_RADIANCE_TO_LUMINANCE;
uniform vec3 SKY_SPECTRAL_RADIANCE_TO_LUMINANCE;

uniform sampler2D transmittance_texture;
uniform sampler3D scattering_texture;
uniform sampler2D irradiance_texture;
uniform sampler3D single_mie_scattering_texture;
uniform sampler3D higher_order_scattering_texture;

#include "bruneton/common"
#include "bruneton/runtime"

uniform sampler2D normalBuffer;

uniform mat4 projectionMatrix;
uniform mat4 viewMatrix;
uniform mat4 inverseProjectionMatrix;
uniform mat4 inverseViewMatrix;
uniform float bottomRadius;
uniform mat4 worldToECEFMatrix;
uniform float geometricErrorCorrectionAmount;
uniform vec3 sunDirection;
uniform float cosSunAngularRadius;
uniform vec3 moonDirection;
uniform float moonAngularRadius;
uniform float lunarRadianceScale;
uniform float albedoScale;

#include "sky"

#ifdef HAS_LIGHTING_MASK
uniform sampler2D lightingMaskBuffer;
#endif // HAS_LIGHTING_MASK

// prettier-ignore
#define LIGHTING_MASK_CHANNEL_ LIGHTING_MASK_CHANNEL

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
varying vec3 vGeometryAltitudeCorrection;
varying vec3 vEllipsoidRadiiSquared;

vec3 readNormal(const vec2 uv, out bool degenerate) {
  vec3 normal = texture(normalBuffer, uv).xyz;
  degenerate = normal == vec3(0.0);
  #ifdef OCT_ENCODED_NORMAL
  return unpackVec2ToNormal(normal.xy);
  #else // OCT_ENCODED_NORMAL
  return 2.0 * normal - 1.0;
  #endif // OCT_ENCODED_NORMAL
}

void correctGeometricError(inout vec3 positionECEF, inout vec3 normalECEF) {
  // TODO: The error is pronounced at the edge of the ellipsoid due to the
  // large difference between the sphere position and the unprojected position
  // at the current fragment. Calculating the sphere position from the fragment
  // UV may resolve this.

  // Correct way is slerp, but this will be small-angle interpolation anyways.
  vec3 sphereNormal = normalize(positionECEF / vEllipsoidRadiiSquared);
  vec3 spherePosition = ATMOSPHERE.bottom_radius * sphereNormal;
  normalECEF = mix(normalECEF, sphereNormal, geometricErrorCorrectionAmount);
  positionECEF = mix(positionECEF, spherePosition, geometricErrorCorrectionAmount);
}

#if defined(SUN_LIGHT) || defined(SKY_LIGHT)

vec3 getSunSkyIrradiance(
  const vec3 positionECEF,
  const vec3 normal,
  const vec3 inputColor,
  const float sunTransmittance
) {
  // Assume lambertian BRDF. If both SUN_LIGHT and SKY_LIGHT are not defined,
  // regard the inputColor as radiance at the texel.
  vec3 diffuse = inputColor * albedoScale * RECIPROCAL_PI;
  vec3 skyIrradiance;
  vec3 sunIrradiance = GetSunAndSkyIrradiance(positionECEF, normal, sunDirection, skyIrradiance);

  #ifdef HAS_SHADOW
  sunIrradiance *= sunTransmittance;
  #endif // HAS_SHADOW

  #if defined(SUN_LIGHT) && defined(SKY_LIGHT)
  return diffuse * (sunIrradiance + skyIrradiance);
  #elif defined(SUN_LIGHT)
  return diffuse * sunIrradiance;
  #elif defined(SKY_LIGHT)
  return diffuse * skyIrradiance;
  #endif // defined(SUN_LIGHT) && defined(SKY_LIGHT)
}

#endif // defined(SUN_LIGHT) || defined(SKY_LIGHT)

#if defined(TRANSMITTANCE) || defined(INSCATTER)

void applyTransmittanceInscatter(const vec3 positionECEF, float shadowLength, inout vec3 radiance) {
  vec3 transmittance;
  vec3 inscatter = GetSkyRadianceToPoint(
    vCameraPosition,
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
  #if defined(HAS_LIGHTING_MASK) && defined(DEBUG_SHOW_LIGHTING_MASK)
  outputColor.rgb = vec3(texture(lightingMaskBuffer, uv).LIGHTING_MASK_CHANNEL_);
  outputColor.a = 1.0;
  return;
  #endif // defined(HAS_LIGHTING_MASK) && defined(DEBUG_SHOW_LIGHTING_MASK)

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

  vec3 rayDirection = normalize(vRayDirection);
  vec3 dRDdx = dFdx(rayDirection);
  vec3 dRDdy = dFdy(rayDirection);
  float fragmentAngle = length(dRDdx + dRDdy) / length(rayDirection);

  float depth = readDepthValue(depthBuffer, uv);
  if (depth >= 1.0 - 1e-8) {
    #ifdef SKY
    outputColor.rgb = getSkyRadiance(
      vCameraPosition,
      rayDirection,
      shadowLength,
      sunDirection,
      moonDirection,
      moonAngularRadius,
      lunarRadianceScale,
      fragmentAngle
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
  vec3 worldPosition = (inverseViewMatrix * vec4(viewPosition, 1.0)).xyz;
  vec3 positionECEF = (worldToECEFMatrix * vec4(worldPosition, 1.0)).xyz;
  positionECEF = positionECEF * METER_TO_LENGTH_UNIT + vGeometryAltitudeCorrection;

  vec3 viewNormal;
  bool degenerateNormal = false;
  #ifdef RECONSTRUCT_NORMAL
  vec3 dVPdx = dFdx(viewPosition);
  vec3 dVPdy = dFdy(viewPosition);
  viewNormal = normalize(cross(dVPdx, dVPdy));
  #elif defined(HAS_NORMALS)
  viewNormal = readNormal(uv, degenerateNormal);
  #endif // defined(HAS_NORMALS)

  #if defined(RECONSTRUCT_NORMAL) || defined(HAS_NORMALS)
  vec3 worldNormal = (inverseViewMatrix * vec4(viewNormal, 0.0)).xyz;
  vec3 normalECEF = (worldToECEFMatrix * vec4(worldNormal, 0.0)).xyz;
  #else // defined(RECONSTRUCT_NORMAL) || defined(HAS_NORMALS)
  vec3 normalECEF = normalize(positionECEF);
  #endif // defined(RECONSTRUCT_NORMAL) || defined(HAS_NORMALS)

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
  #if defined(SUN_LIGHT) || defined(SKY_LIGHT)
  // WORKAROUND: When both post-process lighting and sky options are enabled,
  // stars have degenerate normals. We use this to disable irradiance, which is
  // irrelevant for them.
  if (!degenerateNormal) {
    radiance = getSunSkyIrradiance(positionECEF, normalECEF, inputColor.rgb, sunTransmittance);
  } else {
    radiance = inputColor.rgb;
  }
  #ifdef HAS_LIGHTING_MASK
  float lightingMask = texture(lightingMaskBuffer, uv).LIGHTING_MASK_CHANNEL_;
  radiance = mix(inputColor.rgb, radiance, lightingMask);
  #endif // HAS_LIGHTING_MASK
  #else // defined(SUN_LIGHT) || defined(SKY_LIGHT)
  radiance = inputColor.rgb;
  #endif // defined(SUN_LIGHT) || defined(SKY_LIGHT)

  #if defined(TRANSMITTANCE) || defined(INSCATTER)
  applyTransmittanceInscatter(positionECEF, shadowLength, radiance);
  #endif // defined(TRANSMITTANCE) || defined(INSCATTER)

  outputColor = vec4(radiance, inputColor.a);

  #ifdef HAS_OVERLAY
  outputColor.rgb = outputColor.rgb * (1.0 - overlay.a) + overlay.rgb;
  #endif // HAS_OVERLAY
}
`,wf=`uniform mat4 inverseViewMatrix;
uniform mat4 inverseProjectionMatrix;
uniform vec3 cameraPosition;
uniform mat4 worldToECEFMatrix;
uniform vec3 altitudeCorrection;
uniform float geometricErrorCorrectionAmount;
uniform vec3 ellipsoidRadii;

varying vec3 vCameraPosition;
varying vec3 vRayDirection;
varying vec3 vGeometryAltitudeCorrection;
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

  vec3 cameraPositionECEF = (worldToECEFMatrix * vec4(origin, 1.0)).xyz;
  vCameraPosition = (cameraPositionECEF + altitudeCorrection) * METER_TO_LENGTH_UNIT;
  vRayDirection = (worldToECEFMatrix * vec4(direction, 0.0)).xyz;

  vGeometryAltitudeCorrection = altitudeCorrection * METER_TO_LENGTH_UNIT;
  // Gradually turn off the altitude correction on geometries as the geometric
  // error correction takes effect, because that on the ideal sphere will be
  // over corrected.
  // See: https://github.com/takram-design-engineering/three-geospatial/pull/23#issuecomment-2542914656
  #ifdef CORRECT_GEOMETRIC_ERROR
  vGeometryAltitudeCorrection *= 1.0 - geometricErrorCorrectionAmount;
  #endif // CORRECT_GEOMETRIC_ERROR

  vec3 radii = ellipsoidRadii * METER_TO_LENGTH_UNIT;
  vEllipsoidRadiiSquared = radii * radii;
}
`,jd=`vec3 getLunarRadiance(const float moonAngularRadius) {
  // Not a physical number but the order of 10^-6 relative to the sun may fit.
  vec3 radiance =
    ATMOSPHERE.solar_irradiance *
    0.000002 /
    (PI * moonAngularRadius * moonAngularRadius) *
    SUN_SPECTRAL_RADIANCE_TO_LUMINANCE;
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
  const float shadowLength,
  const vec3 sunDirection,
  const vec3 moonDirection,
  const float moonAngularRadius,
  const float lunarRadianceScale,
  const float fragmentAngle
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

  #ifdef SUN
  float viewDotSun = dot(rayDirection, sunDirection);
  if (viewDotSun > cosSunAngularRadius) {
    float angle = acos(clamp(viewDotSun, -1.0, 1.0));
    float antialias = smoothstep(
      ATMOSPHERE.sun_angular_radius,
      ATMOSPHERE.sun_angular_radius - fragmentAngle,
      angle
    );
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
`;var vf=Object.defineProperty,Je=(n,e,t,r)=>{for(var i=void 0,o=n.length-1,a;o>=0;o--)(a=n[o])&&(i=a(e,t,i)||i);return i&&vf(e,t,i),i};const Sf=new M,bf=new M,Rf=new Td,Df={blendFunction:z.NORMAL,octEncodedNormal:!1,reconstructNormal:!1,ellipsoid:Yt.WGS84,correctAltitude:!0,correctGeometricError:!0,sunLight:!1,skyLight:!1,transmittance:!0,inscatter:!0,albedoScale:1,sky:!1,sun:!0,moon:!0,moonAngularRadius:.0045,lunarRadianceScale:1,ground:!0};class et extends F1{constructor(e=new Pl,t,r=oa.DEFAULT){const{blendFunction:i,normalBuffer:o=null,octEncodedNormal:a,reconstructNormal:s,irradianceTexture:c=null,scatteringTexture:u=null,transmittanceTexture:d=null,singleMieScatteringTexture:l=null,higherOrderScatteringTexture:f=null,ellipsoid:g,correctAltitude:p,correctGeometricError:y,sunDirection:_,sunLight:T,skyLight:v,transmittance:S,inscatter:D,albedoScale:R,sky:G,sun:Y,moon:q,moonDirection:L,moonAngularRadius:J,lunarRadianceScale:W,ground:$}={...Df,...t};super("AerialPerspectiveEffect",Zm(Jo(Tf,{core:{depth:af,packing:uf,math:cf,transform:df,raySphereIntersection:kd,cascadedShadowMaps:of,interleavedGradientNoise:sf,vogelDisk:lf},bruneton:{common:p0,definitions:y0,runtime:_0},sky:jd})),{blendFunction:i,vertexShader:wf,attributes:_d.DEPTH,uniforms:new Map(Object.entries({normalBuffer:new A(o),projectionMatrix:new A(new Ne),viewMatrix:new A(new Ne),inverseProjectionMatrix:new A(new Ne),inverseViewMatrix:new A(new Ne),cameraPosition:new A(new M),bottomRadius:new A(r.bottomRadius),ellipsoidRadii:new A(new M),worldToECEFMatrix:new A(new Ne),altitudeCorrection:new A(new M),geometricErrorCorrectionAmount:new A(0),sunDirection:new A((_==null?void 0:_.clone())??new M),cosSunAngularRadius:new A(r.sunAngularRadius),albedoScale:new A(R),moonDirection:new A((L==null?void 0:L.clone())??new M),moonAngularRadius:new A(J),lunarRadianceScale:new A(W),overlayBuffer:new A(null),shadowBuffer:new A(null),shadowMapSize:new A(new No),shadowIntervals:new A([]),shadowMatrices:new A([]),inverseShadowMatrices:new A([]),shadowFar:new A(0),shadowTopHeight:new A(0),shadowRadius:new A(3),stbnTexture:new A(null),frame:new A(0),shadowLengthBuffer:new A(null),lightingMaskBuffer:new A(null),ATMOSPHERE:r.toUniform(),SUN_SPECTRAL_RADIANCE_TO_LUMINANCE:new A(r.sunRadianceToRelativeLuminance),SKY_SPECTRAL_RADIANCE_TO_LUMINANCE:new A(r.skyRadianceToRelativeLuminance),irradiance_texture:new A(c),scattering_texture:new A(u),transmittance_texture:new A(d),single_mie_scattering_texture:new A(null),higher_order_scattering_texture:new A(null)})),defines:new Map([["TRANSMITTANCE_TEXTURE_WIDTH",na.toFixed(0)],["TRANSMITTANCE_TEXTURE_HEIGHT",ra.toFixed(0)],["SCATTERING_TEXTURE_R_SIZE",h0.toFixed(0)],["SCATTERING_TEXTURE_MU_SIZE",m0.toFixed(0)],["SCATTERING_TEXTURE_MU_S_SIZE",f0.toFixed(0)],["SCATTERING_TEXTURE_NU_SIZE",g0.toFixed(0)],["IRRADIANCE_TEXTURE_WIDTH",ea.toFixed(0)],["IRRADIANCE_TEXTURE_HEIGHT",ta.toFixed(0)],["METER_TO_LENGTH_UNIT",bo.toFixed(7)]])}),this.camera=e,this.atmosphere=r,this.overlay=null,this.shadow=null,this.shadowLength=null,this.lightingMask=null,this.hasNormals=!1,this.combinedScatteringTextures=!1,this.hasHigherOrderScatteringTexture=!1,this.shadowSampleCount=8,this.octEncodedNormal=a,this.reconstructNormal=s,this.singleMieScatteringTexture=l,this.higherOrderScatteringTexture=f,this.ellipsoid=g,this.correctAltitude=p,this.correctGeometricError=y,this.sunLight=T,this.skyLight=v,this.transmittance=S,this.inscatter=D,this.sky=G,this.sun=Y,this.moon=q,this.ground=$}get mainCamera(){return this.camera}set mainCamera(e){this.camera=e}copyCameraSettings(e){const{projectionMatrix:t,matrixWorldInverse:r,projectionMatrixInverse:i,matrixWorld:o}=e,a=this.uniforms;a.get("projectionMatrix").value.copy(t),a.get("viewMatrix").value.copy(r),a.get("inverseProjectionMatrix").value.copy(i),a.get("inverseViewMatrix").value.copy(o);const s=e.getWorldPosition(a.get("cameraPosition").value),c=a.get("worldToECEFMatrix").value,u=Sf.copy(s).applyMatrix4(c);try{const l=Rf.setFromECEF(u).height,f=bf.set(0,this.ellipsoid.maximumRadius,-Math.max(0,l)).applyMatrix4(t);a.get("geometricErrorCorrectionAmount").value=Ym(zm(f.y,41.5,13.8,0,1))}catch{return}const d=a.get("altitudeCorrection");this.correctAltitude?ia(u,this.atmosphere.bottomRadius,this.ellipsoid,d.value):d.value.setScalar(0)}updateOverlay(){let e=!1;const{uniforms:t,defines:r,overlay:i}=this,o=r.has("HAS_OVERLAY"),a=i!=null;return a!==o&&(a?r.set("HAS_OVERLAY","1"):(r.delete("HAS_OVERLAY"),t.get("overlayBuffer").value=null),e=!0),a&&(t.get("overlayBuffer").value=i.map),e}updateShadow(){let e=!1;const{uniforms:t,defines:r,shadow:i}=this,o=r.has("HAS_SHADOW"),a=i!=null;if(a!==o&&(a?r.set("HAS_SHADOW","1"):(r.delete("HAS_SHADOW"),t.get("shadowBuffer").value=null),e=!0),a){const s=r.get("SHADOW_CASCADE_COUNT"),c=`${i.cascadeCount}`;s!==c&&(r.set("SHADOW_CASCADE_COUNT",i.cascadeCount.toFixed(0)),e=!0),t.get("shadowBuffer").value=i.map,t.get("shadowMapSize").value=i.mapSize,t.get("shadowIntervals").value=i.intervals,t.get("shadowMatrices").value=i.matrices,t.get("inverseShadowMatrices").value=i.inverseMatrices,t.get("shadowFar").value=i.far,t.get("shadowTopHeight").value=i.topHeight}return e}updateShadowLength(){let e=!1;const{uniforms:t,defines:r,shadowLength:i}=this,o=r.has("HAS_SHADOW_LENGTH"),a=i!=null;return a!==o&&(a?r.set("HAS_SHADOW_LENGTH","1"):(r.delete("HAS_SHADOW_LENGTH"),t.get("shadowLengthBuffer").value=null),e=!0),a&&(t.get("shadowLengthBuffer").value=i.map),e}updateLightingMask(){let e=!1;const{uniforms:t,defines:r,lightingMask:i}=this,o=r.has("HAS_LIGHTING_MASK"),a=i!=null;if(a!==o&&(a?r.set("HAS_LIGHTING_MASK","1"):(r.delete("HAS_LIGHTING_MASK"),t.get("lightingMaskBuffer").value=null),e=!0),a){t.get("lightingMaskBuffer").value=i.map;const s=r.get("LIGHTING_MASK_CHANNEL"),c=i.channel;c!==s&&(/^[rgba]$/.test(c)?(r.set("LIGHTING_MASK_CHANNEL",c),e=!0):console.error(`Expression validation failed: ${c}`))}return e}update(e,t,r){this.copyCameraSettings(this.camera);let i=!1;i||(i=this.updateOverlay()),i||(i=this.updateShadow()),i||(i=this.updateShadowLength()),i||(i=this.updateLightingMask()),i&&this.setChanged(),++this.uniforms.get("frame").value}get normalBuffer(){return this.uniforms.get("normalBuffer").value}set normalBuffer(e){this.uniforms.get("normalBuffer").value=e,this.hasNormals=e!=null}get irradianceTexture(){return this.uniforms.get("irradiance_texture").value}set irradianceTexture(e){this.uniforms.get("irradiance_texture").value=e}get scatteringTexture(){return this.uniforms.get("scattering_texture").value}set scatteringTexture(e){this.uniforms.get("scattering_texture").value=e}get transmittanceTexture(){return this.uniforms.get("transmittance_texture").value}set transmittanceTexture(e){this.uniforms.get("transmittance_texture").value=e}get singleMieScatteringTexture(){return this.uniforms.get("single_mie_scattering_texture").value}set singleMieScatteringTexture(e){this.uniforms.get("single_mie_scattering_texture").value=e,this.combinedScatteringTextures=e==null}get higherOrderScatteringTexture(){return this.uniforms.get("higher_order_scattering_texture").value}set higherOrderScatteringTexture(e){this.uniforms.get("higher_order_scattering_texture").value=e,this.hasHigherOrderScatteringTexture=e!=null}get ellipsoid(){return this._ellipsoid}set ellipsoid(e){this._ellipsoid=e,this.uniforms.get("ellipsoidRadii").value.copy(e.radii)}get worldToECEFMatrix(){return this.uniforms.get("worldToECEFMatrix").value}get sunDirection(){return this.uniforms.get("sunDirection").value}get sunAngularRadius(){return this.uniforms.get("ATMOSPHERE").value.sun_angular_radius}set sunAngularRadius(e){this.uniforms.get("ATMOSPHERE").value.sun_angular_radius=e,this.uniforms.get("cosSunAngularRadius").value=Math.cos(e)}get albedoScale(){return this.uniforms.get("albedoScale").value}set albedoScale(e){this.uniforms.get("albedoScale").value=e}get moonDirection(){return this.uniforms.get("moonDirection").value}get moonAngularRadius(){return this.uniforms.get("moonAngularRadius").value}set moonAngularRadius(e){this.uniforms.get("moonAngularRadius").value=e}get lunarRadianceScale(){return this.uniforms.get("lunarRadianceScale").value}set lunarRadianceScale(e){this.uniforms.get("lunarRadianceScale").value=e}get stbnTexture(){return this.uniforms.get("stbnTexture").value}set stbnTexture(e){this.uniforms.get("stbnTexture").value=e}get shadowRadius(){return this.uniforms.get("shadowRadius").value}set shadowRadius(e){this.uniforms.get("shadowRadius").value=e}}Je([fe("OCT_ENCODED_NORMAL")],et.prototype,"octEncodedNormal");Je([fe("RECONSTRUCT_NORMAL")],et.prototype,"reconstructNormal");Je([fe("HAS_NORMALS")],et.prototype,"hasNormals");Je([fe("COMBINED_SCATTERING_TEXTURES")],et.prototype,"combinedScatteringTextures");Je([fe("HAS_HIGHER_ORDER_SCATTERING_TEXTURE")],et.prototype,"hasHigherOrderScatteringTexture");Je([fe("CORRECT_GEOMETRIC_ERROR")],et.prototype,"correctGeometricError");Je([fe("SUN_LIGHT")],et.prototype,"sunLight");Je([fe("SKY_LIGHT")],et.prototype,"skyLight");Je([fe("TRANSMITTANCE")],et.prototype,"transmittance");Je([fe("INSCATTER")],et.prototype,"inscatter");Je([fe("SKY")],et.prototype,"sky");Je([fe("SUN")],et.prototype,"sun");Je([fe("MOON")],et.prototype,"moon");Je([fe("GROUND")],et.prototype,"ground");Je([km("SHADOW_SAMPLE_COUNT",{min:1,max:16})],et.prototype,"shadowSampleCount");var Af=Object.defineProperty,Wd=(n,e,t,r)=>{for(var i=void 0,o=n.length-1,a;o>=0;o--)(a=n[o])&&(i=a(e,t,i)||i);return i&&Af(e,t,i),i};const Mf=new M;function xf(n,e){let t="",r="";for(let i=1;i<e;++i)t+=`layout(location = ${i}) out float renderTarget${i};
`,r+=`renderTarget${i} = 0.0;
`;return n.replace("#include <mrt_layout>",t).replace("#include <mrt_output>",r)}const E0={ellipsoid:Yt.WGS84,correctAltitude:!0,renderTargetCount:1};class aa extends Ul{constructor(e,t=oa.DEFAULT){const{irradianceTexture:r=null,scatteringTexture:i=null,transmittanceTexture:o=null,singleMieScatteringTexture:a=null,higherOrderScatteringTexture:s=null,ellipsoid:c,correctAltitude:u,sunDirection:d,sunAngularRadius:l,renderTargetCount:f,...g}={...E0,...e};super({toneMapped:!1,depthWrite:!1,depthTest:!1,...g,uniforms:{cameraPosition:new A(new M),worldToECEFMatrix:new A(new Ne),altitudeCorrection:new A(new M),sunDirection:new A((d==null?void 0:d.clone())??new M),cosSunAngularRadius:new A(t.sunAngularRadius),ATMOSPHERE:t.toUniform(),SUN_SPECTRAL_RADIANCE_TO_LUMINANCE:new A(t.sunRadianceToRelativeLuminance),SKY_SPECTRAL_RADIANCE_TO_LUMINANCE:new A(t.skyRadianceToRelativeLuminance),irradiance_texture:new A(r),scattering_texture:new A(i),transmittance_texture:new A(o),single_mie_scattering_texture:new A(null),higher_order_scattering_texture:new A(null),...g.uniforms},defines:{PI:`${Math.PI}`,TRANSMITTANCE_TEXTURE_WIDTH:na.toFixed(0),TRANSMITTANCE_TEXTURE_HEIGHT:ra.toFixed(0),SCATTERING_TEXTURE_R_SIZE:h0.toFixed(0),SCATTERING_TEXTURE_MU_SIZE:m0.toFixed(0),SCATTERING_TEXTURE_MU_S_SIZE:f0.toFixed(0),SCATTERING_TEXTURE_NU_SIZE:g0.toFixed(0),IRRADIANCE_TEXTURE_WIDTH:ea.toFixed(0),IRRADIANCE_TEXTURE_HEIGHT:ta.toFixed(0),METER_TO_LENGTH_UNIT:bo.toFixed(7),...g.defines}}),this.atmosphere=t,this.combinedScatteringTextures=!1,this.hasHigherOrderScatteringTexture=!1,this.singleMieScatteringTexture=a,this.higherOrderScatteringTexture=s,this.ellipsoid=c,this.correctAltitude=u,l!=null&&(this.sunAngularRadius=l),this.renderTargetCount=f}copyCameraSettings(e){const t=this.uniforms,r=e.getWorldPosition(t.cameraPosition.value),i=Mf.copy(r).applyMatrix4(t.worldToECEFMatrix.value),o=t.altitudeCorrection.value;this.correctAltitude?ia(i,this.atmosphere.bottomRadius,this.ellipsoid,o):o.setScalar(0)}onBeforeCompile(e,t){e.fragmentShader=xf(e.fragmentShader,this.renderTargetCount)}onBeforeRender(e,t,r,i,o,a){this.copyCameraSettings(r)}get irradianceTexture(){return this.uniforms.irradiance_texture.value}set irradianceTexture(e){this.uniforms.irradiance_texture.value=e}get scatteringTexture(){return this.uniforms.scattering_texture.value}set scatteringTexture(e){this.uniforms.scattering_texture.value=e}get transmittanceTexture(){return this.uniforms.transmittance_texture.value}set transmittanceTexture(e){this.uniforms.transmittance_texture.value=e}get singleMieScatteringTexture(){return this.uniforms.single_mie_scattering_texture.value}set singleMieScatteringTexture(e){this.uniforms.single_mie_scattering_texture.value=e,this.combinedScatteringTextures=e==null}get higherOrderScatteringTexture(){return this.uniforms.higher_order_scattering_texture.value}set higherOrderScatteringTexture(e){this.uniforms.higher_order_scattering_texture.value=e,this.hasHigherOrderScatteringTexture=e!=null}get worldToECEFMatrix(){return this.uniforms.worldToECEFMatrix.value}get sunDirection(){return this.uniforms.sunDirection.value}get sunAngularRadius(){return this.uniforms.ATMOSPHERE.value.sun_angular_radius}set sunAngularRadius(e){this.uniforms.ATMOSPHERE.value.sun_angular_radius=e,this.uniforms.cosSunAngularRadius.value=Math.cos(e)}get renderTargetCount(){return this._renderTargetCount}set renderTargetCount(e){e!==this.renderTargetCount&&(this._renderTargetCount=e,this.needsUpdate=!0)}}Wd([fe("COMBINED_SCATTERING_TEXTURES")],aa.prototype,"combinedScatteringTextures");Wd([fe("HAS_HIGHER_ORDER_SCATTERING_TEXTURE")],aa.prototype,"hasHigherOrderScatteringTexture");var Nt;(function(n){n.Sun="Sun",n.Moon="Moon",n.Mercury="Mercury",n.Venus="Venus",n.Earth="Earth",n.Mars="Mars",n.Jupiter="Jupiter",n.Saturn="Saturn",n.Uranus="Uranus",n.Neptune="Neptune",n.Pluto="Pluto",n.SSB="SSB",n.EMB="EMB",n.Star1="Star1",n.Star2="Star2",n.Star3="Star3",n.Star4="Star4",n.Star5="Star5",n.Star6="Star6",n.Star7="Star7",n.Star8="Star8"})(Nt||(Nt={}));Nt.Star1,Nt.Star2,Nt.Star3,Nt.Star4,Nt.Star5,Nt.Star6,Nt.Star7,Nt.Star8;var Nc;(function(n){n[n.From2000=0]="From2000",n[n.Into2000=1]="Into2000"})(Nc||(Nc={}));var Oc;(function(n){n[n.Pericenter=0]="Pericenter",n[n.Apocenter=1]="Apocenter"})(Oc||(Oc={}));var Lc;(function(n){n.Penumbral="penumbral",n.Partial="partial",n.Annular="annular",n.Total="total"})(Lc||(Lc={}));var Pc;(function(n){n[n.Invalid=0]="Invalid",n[n.Ascending=1]="Ascending",n[n.Descending=-1]="Descending"})(Pc||(Pc={}));function Bd(n){return Math.sqrt(Math.max(n,0))}function If(n){return Math.max(n,0)}function Cf(n,e,t){const{bottomRadius:r}=n;return t<0&&e**2*(t**2-1)+r**2>=0}function Nf(n,e,t){const{topRadius:r}=n,i=e**2*(t**2-1)+r**2;return If(-e*t+Bd(i))}function Ro(n,e){return .5/e+n*(1-1/e)}const Of=new M,Uc=new M,Lf=new M,$c=new WeakMap;function Pf(n){n.image;let e=Ic(n.image.data)?n.image.data:Ic(n.userData.imageData)?n.userData.imageData:void 0;if(n.type===uu&&e instanceof Uint16Array){const t=$c.get(e.buffer);t==null?(e=new Wt(e.buffer),$c.set(e.buffer,e)):e=t}return e}function qi(n,e,t){const r=e*4;return t.set(n[r],n[r+1],n[r+2])}function Vd(n,e,t){const r=Pf(n);if(r==null)return t.setScalar(0);n.image;const{width:i,height:o}=n.image,a=So(e.x,0,1)*(i-1),s=So(e.y,0,1)*(o-1),c=Math.floor(a),u=Math.floor(s),d=a-c,l=s-u,f=d,g=l,p=c%i,y=(p+1)%i,_=u%o,T=(_+1)%o,v=qi(r,_*i+p,Of),S=qi(r,_*i+y,Uc),D=v.lerp(S,f),R=qi(r,T*i+p,Uc),G=qi(r,T*i+y,Lf),Y=R.lerp(G,f);return t.copy(D.lerp(Y,g))}function Uf(n,e,t,r){const{topRadius:i,bottomRadius:o}=n,a=Math.sqrt(i**2-o**2),s=Bd(e**2-o**2),c=Nf(n,e,t),u=i-e,d=s+a,l=(c-u)/(d-u),f=s/a;return r.set(Ro(l,na),Ro(f,ra))}const $f=new M,Ia=new M,Hf=new No;function Hc(n,e,t,r=new Ln,{ellipsoid:i=Yt.WGS84,correctAltitude:o=!0}={},a=oa.DEFAULT){const s=$f.copy(e);if(o){const p=i.projectOnSurface(e,Ia);p!=null&&s.sub(i.getOsculatingSphereCenter(p,a.bottomRadius,Ia))}const c=Ia;let u=s.length(),d=s.dot(t);const{topRadius:l}=a,f=-d-Math.sqrt(d**2-u**2+l**2);if(f>0&&(u=l,d+=f),u>l)c.set(1,1,1);else{const p=d/u;if(Cf(a,u,p))c.setScalar(0);else{const y=Uf(a,u,p,Hf);Vd(n,y,c)}}const g=c.multiply(a.solarIrradiance).multiply(a.sunRadianceToRelativeLuminance);return r.setFromVector3(g)}function Ff({topRadius:n,bottomRadius:e},t,r,i){const o=(t-e)/(n-e),a=r*.5+.5;return i.set(Ro(a,ea),Ro(o,ta))}const Gf=1/Math.sqrt(Math.PI),Ca=Math.sqrt(3)/(2*Math.sqrt(Math.PI)),zf=new M,Na=new M,Yf=new No,kf=new lu,jf={ellipsoid:Yt.WGS84,correctAltitude:!0};class Wf extends $l{constructor(e,t=oa.DEFAULT){super(),this.atmosphere=t,this.worldToECEFMatrix=new Ne;const{irradianceTexture:r=null,ellipsoid:i,correctAltitude:o,sunDirection:a}={...jf,...e};this.irradianceTexture=r,this.ellipsoid=i,this.correctAltitude=o,this.sunDirection=(a==null?void 0:a.clone())??new M}update(){if(this.irradianceTexture==null)return;const e=this.worldToECEFMatrix,t=kf.setFromMatrix4(e).transpose(),r=this.getWorldPosition(zf).applyMatrix4(e);if(this.correctAltitude){const d=this.ellipsoid.projectOnSurface(r,Na);d!=null&&r.add(ia(d,this.atmosphere.bottomRadius,this.ellipsoid,Na))}const i=r.length(),o=r.dot(this.sunDirection)/i,a=Ff(this.atmosphere,i,o,Yf),s=Vd(this.irradianceTexture,a,Na);s.multiply(this.atmosphere.skyRadianceToRelativeLuminance);const c=this.ellipsoid.getSurfaceNormal(r).applyMatrix3(t),u=this.sh.coefficients;u[0].copy(s).multiplyScalar(Gf),u[1].copy(s).multiplyScalar(Ca*c.y),u[2].copy(s).multiplyScalar(Ca*c.z),u[3].copy(s).multiplyScalar(Ca*c.x)}}const Bf=`precision highp float;
precision highp sampler3D;

#define RECIPROCAL_PI 0.3183098861837907

#include "core/raySphereIntersection"

#include "bruneton/definitions"

uniform AtmosphereParameters ATMOSPHERE;
uniform vec3 SUN_SPECTRAL_RADIANCE_TO_LUMINANCE;
uniform vec3 SKY_SPECTRAL_RADIANCE_TO_LUMINANCE;

uniform sampler2D transmittance_texture;
uniform sampler3D scattering_texture;
uniform sampler2D irradiance_texture;
uniform sampler3D single_mie_scattering_texture;
uniform sampler3D higher_order_scattering_texture;

#include "bruneton/common"
#include "bruneton/runtime"

uniform vec3 sunDirection;
uniform float cosSunAngularRadius;
uniform vec3 moonDirection;
uniform float moonAngularRadius;
uniform float lunarRadianceScale;
uniform vec3 groundAlbedo;

#include "sky"

#ifdef HAS_SHADOW_LENGTH
uniform sampler2D shadowLengthBuffer;
#endif // HAS_SHADOW_LENGTH

in vec2 vUv;
in vec3 vCameraPosition;
in vec3 vRayDirection;

layout(location = 0) out vec4 outputColor;

#include <mrt_layout>

void main() {
  float shadowLength = 0.0;
  #ifdef HAS_SHADOW_LENGTH
  shadowLength = texture(shadowLengthBuffer, vUv).r;
  #endif // HAS_SHADOW_LENGTH

  vec3 cameraPosition = vCameraPosition;
  vec3 rayDirection = normalize(vRayDirection);
  vec3 dRDdx = dFdx(rayDirection);
  vec3 dRDdy = dFdy(rayDirection);
  float fragmentAngle = length(dRDdx + dRDdy) / length(rayDirection);

  #ifdef GROUND_ALBEDO

  float r = length(cameraPosition);
  float mu = dot(cameraPosition, rayDirection) / r;
  bool intersectsGround = RayIntersectsGround(ATMOSPHERE, r, mu);
  if (intersectsGround) {
    float distanceToGround = raySphereFirstIntersection(
      cameraPosition,
      rayDirection,
      ATMOSPHERE.bottom_radius
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
      ATMOSPHERE.bottom_radius * surfaceNormal,
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
      lunarRadianceScale,
      fragmentAngle
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
    lunarRadianceScale,
    fragmentAngle
  );

  #endif // GROUND_ALBEDO

  outputColor.a = 1.0;

  #include <mrt_output>
}
`,Vf=`precision highp float;
precision highp sampler3D;

uniform mat4 inverseProjectionMatrix;
uniform mat4 inverseViewMatrix;
uniform vec3 cameraPosition;
uniform mat4 worldToECEFMatrix;
uniform vec3 altitudeCorrection;

layout(location = 0) in vec3 position;

out vec2 vUv;
out vec3 vCameraPosition;
out vec3 vRayDirection;

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

  vec3 cameraPositionECEF = (worldToECEFMatrix * vec4(origin, 1.0)).xyz;
  vCameraPosition = (cameraPositionECEF + altitudeCorrection) * METER_TO_LENGTH_UNIT;
  vRayDirection = (worldToECEFMatrix * vec4(direction, 0.0)).xyz;

  gl_Position = vec4(position.xy, 1.0, 1.0);
}
`;var qf=Object.defineProperty,T0=(n,e,t,r)=>{for(var i=void 0,o=n.length-1,a;o>=0;o--)(a=n[o])&&(i=a(e,t,i)||i);return i&&qf(e,t,i),i};const Zf={...E0,sun:!0,moon:!0,moonAngularRadius:.0045,lunarRadianceScale:1,ground:!0,groundAlbedo:new Ln(0)};class sa extends aa{constructor(e){const{sun:t,moon:r,moonDirection:i,moonAngularRadius:o,lunarRadianceScale:a,ground:s,groundAlbedo:c,...u}={...Zf,...e};super({name:"SkyMaterial",glslVersion:du,vertexShader:Vf,fragmentShader:Jo(Bf,{core:{raySphereIntersection:kd},bruneton:{common:p0,definitions:y0,runtime:_0},sky:jd}),...u,uniforms:{inverseProjectionMatrix:new A(new Ne),inverseViewMatrix:new A(new Ne),moonDirection:new A((i==null?void 0:i.clone())??new M),moonAngularRadius:new A(o),lunarRadianceScale:new A(a),groundAlbedo:new A(c.clone()),shadowLengthBuffer:new A(null),...u.uniforms},defines:{PERSPECTIVE_CAMERA:"1"},depthWrite:!1,depthTest:!0}),this.shadowLength=null,this.sun=t,this.moon=r,this.ground=s}onBeforeRender(e,t,r,i,o,a){super.onBeforeRender(e,t,r,i,o,a);const{uniforms:s,defines:c}=this;s.inverseProjectionMatrix.value.copy(r.projectionMatrixInverse),s.inverseViewMatrix.value.copy(r.matrixWorld);const u=c.PERSPECTIVE_CAMERA!=null,d=r.isPerspectiveCamera===!0;d!==u&&(d?c.PERSPECTIVE_CAMERA="1":delete c.PERSPECTIVE_CAMERA,this.needsUpdate=!0);const l=this.groundAlbedo,f=c.GROUND_ALBEDO!=null,g=l.r!==0||l.g!==0||l.b!==0;g!==f&&(g?this.defines.GROUND_ALBEDO="1":delete this.defines.GROUND_ALBEDO,this.needsUpdate=!0);const p=this.shadowLength,y=c.HAS_SHADOW_LENGTH!=null,_=p!=null;_!==y&&(_?c.HAS_SHADOW_LENGTH="1":(delete c.HAS_SHADOW_LENGTH,s.shadowLengthBuffer.value=null),this.needsUpdate=!0),_&&(s.shadowLengthBuffer.value=p.map)}get moonDirection(){return this.uniforms.moonDirection.value}get moonAngularRadius(){return this.uniforms.moonAngularRadius.value}set moonAngularRadius(e){this.uniforms.moonAngularRadius.value=e}get lunarRadianceScale(){return this.uniforms.lunarRadianceScale.value}set lunarRadianceScale(e){this.uniforms.lunarRadianceScale.value=e}get groundAlbedo(){return this.uniforms.groundAlbedo.value}}T0([fe("SUN")],sa.prototype,"sun");T0([fe("MOON")],sa.prototype,"moon");T0([fe("GROUND")],sa.prototype,"ground");const Xf=`precision highp float;
precision highp sampler3D;

#include "bruneton/definitions"

uniform AtmosphereParameters ATMOSPHERE;
uniform vec3 SUN_SPECTRAL_RADIANCE_TO_LUMINANCE;
uniform vec3 SKY_SPECTRAL_RADIANCE_TO_LUMINANCE;

uniform sampler2D transmittance_texture;
uniform sampler3D scattering_texture;
uniform sampler2D irradiance_texture;
uniform sampler3D single_mie_scattering_texture;
uniform sampler3D higher_order_scattering_texture;

#include "bruneton/common"
#include "bruneton/runtime"

uniform vec3 sunDirection;

in vec3 vCameraPosition;
in vec3 vRayDirection;

layout(location = 0) out vec4 outputColor;

#include <mrt_layout>

in vec3 vColor;

void main() {
  #if !defined(PERSPECTIVE_CAMERA)
  outputColor = vec4(0.0);
  discard; // Rendering celestial objects without perspective doesn't make sense.
  #endif // !defined(PERSPECTIVE_CAMERA)

  #ifdef BACKGROUND
  vec3 rayDirection = normalize(vRayDirection);
  float r = length(vCameraPosition);
  float mu = dot(vCameraPosition, rayDirection) / r;

  if (RayIntersectsGround(ATMOSPHERE, r, mu)) {
    discard;
  }

  vec3 transmittance;
  vec3 radiance = GetSkyRadiance(
    vCameraPosition,
    normalize(vRayDirection),
    0.0, // Shadow length
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
`,Kf=`precision highp float;
precision highp sampler3D;

#define saturate(x) clamp(x, 0.0, 1.0)

uniform mat4 projectionMatrix;
uniform mat4 modelViewMatrix;
uniform mat4 viewMatrix;
uniform mat4 matrixWorld;
uniform vec3 cameraPosition;
uniform float cameraFar;
uniform mat4 worldToECEFMatrix;
uniform vec3 altitudeCorrection;
uniform float pointSize;
uniform vec2 magnitudeRange;
uniform float intensity;

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
  vColor = vec3(intensity * color);
  vColor *= saturate((v.z - v.y) / (v.x - v.y));

  #ifdef BACKGROUND
  vec3 worldDirection = normalize(matrixWorld * vec4(position, 1.0)).xyz;
  vec3 cameraPositionECEF = (worldToECEFMatrix * vec4(cameraPosition, 1.0)).xyz;
  vCameraPosition = (cameraPositionECEF + altitudeCorrection) * METER_TO_LENGTH_UNIT;
  vRayDirection = (worldToECEFMatrix * vec4(worldDirection, 0.0)).xyz;
  gl_Position =
    projectionMatrix * viewMatrix * vec4(cameraPosition + worldDirection * cameraFar, 1.0);
  #else // BACKGROUND
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  #endif // BACKGROUND

  gl_PointSize = pointSize;
}
`;var Qf=Object.defineProperty,qd=(n,e,t,r)=>{for(var i=void 0,o=n.length-1,a;o>=0;o--)(a=n[o])&&(i=a(e,t,i)||i);return i&&Qf(e,t,i),i};const Jf={...E0,pointSize:1,intensity:1,background:!0,ground:!0};class Zd extends aa{constructor(e){const{pointSize:t,intensity:r,background:i,ground:o,...a}={...Jf,...e};super({name:"StarsMaterial",glslVersion:du,vertexShader:Kf,fragmentShader:Jo(Xf,{bruneton:{common:p0,definitions:y0,runtime:_0}}),...a,uniforms:{projectionMatrix:new A(new Ne),modelViewMatrix:new A(new Ne),viewMatrix:new A(new Ne),matrixWorld:new A(new Ne),cameraFar:new A(0),pointSize:new A(0),magnitudeRange:new A(new No(-2,8)),intensity:new A(r),...a.uniforms},defines:{PERSPECTIVE_CAMERA:"1"},depthWrite:!0,depthTest:!0}),this.pointSize=t,this.background=i,this.ground=o}onBeforeRender(e,t,r,i,o,a){super.onBeforeRender(e,t,r,i,o,a);const s=this.uniforms;s.projectionMatrix.value.copy(r.projectionMatrix),s.modelViewMatrix.value.copy(r.modelViewMatrix),s.viewMatrix.value.copy(r.matrixWorldInverse),s.matrixWorld.value.copy(o.matrixWorld),s.cameraFar.value=r.far,s.pointSize.value=this.pointSize*e.getPixelRatio();const c=r.isPerspectiveCamera===!0;this.defines.PERSPECTIVE_CAMERA!=null!==c&&(c?this.defines.PERSPECTIVE_CAMERA="1":delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}get magnitudeRange(){return this.uniforms.magnitudeRange.value}get intensity(){return this.uniforms.intensity.value}set intensity(e){this.uniforms.intensity.value=e}}qd([fe("BACKGROUND")],Zd.prototype,"background");qd([fe("GROUND")],Zd.prototype,"ground");/**
    @preserve

    Astronomy library for JavaScript (browser and Node.js).
    https://github.com/cosinekitty/astronomy

    MIT License

    Copyright (c) 2019-2023 Don Cross <cosinekitty@gmail.com>

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
*//**
 * @fileoverview Astronomy calculation library for browser scripting and Node.js.
 * @author Don Cross <cosinekitty@gmail.com>
 * @license MIT
 */const Xd=173.1446326846693,ir=14959787069098932e-8,me=.017453292519943295,Fc=.26179938779914946,Do=57.29577951308232,Kd=3.819718634205488,e2=365.24217,Gc=new Date("2000-01-01T12:00:00Z"),Zt=2*Math.PI,fn=3600*(180/Math.PI),cr=484813681109536e-20,t2=180*60*60,n2=2*t2,r2=7292115e-11,Qd=24*3600,Jd=.9972695717592592,ys=.996647180302104,i2=ys*ys,_s=6378.1366,o2=_s/ir,el=81.30056,w0=.0002959122082855911,Es=2825345909524226e-22,Ts=8459715185680659e-23,ws=1292024916781969e-23,vs=1524358900784276e-23;function de(n){if(!Number.isFinite(n))throw console.trace(),`Value is not a finite number: ${n}`;return n}function tr(n){return n-Math.floor(n)}var x;(function(n){n.Sun="Sun",n.Moon="Moon",n.Mercury="Mercury",n.Venus="Venus",n.Earth="Earth",n.Mars="Mars",n.Jupiter="Jupiter",n.Saturn="Saturn",n.Uranus="Uranus",n.Neptune="Neptune",n.Pluto="Pluto",n.SSB="SSB",n.EMB="EMB",n.Star1="Star1",n.Star2="Star2",n.Star3="Star3",n.Star4="Star4",n.Star5="Star5",n.Star6="Star6",n.Star7="Star7",n.Star8="Star8"})(x||(x={}));const a2=[x.Star1,x.Star2,x.Star3,x.Star4,x.Star5,x.Star6,x.Star7,x.Star8],s2=[{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0}];function c2(n){const e=a2.indexOf(n);return e>=0?s2[e]:null}function v0(n){const e=c2(n);return e&&e.dist>0?e:null}var St;(function(n){n[n.From2000=0]="From2000",n[n.Into2000=1]="Into2000"})(St||(St={}));const En={Mercury:[[[[4.40250710144,0,0],[.40989414977,1.48302034195,26087.9031415742],[.050462942,4.47785489551,52175.8062831484],[.00855346844,1.16520322459,78263.70942472259],[.00165590362,4.11969163423,104351.61256629678],[.00034561897,.77930768443,130439.51570787099],[7583476e-11,3.71348404924,156527.41884944518]],[[26087.90313685529,0,0],[.01131199811,6.21874197797,26087.9031415742],[.00292242298,3.04449355541,52175.8062831484],[.00075775081,6.08568821653,78263.70942472259],[.00019676525,2.80965111777,104351.61256629678]]],[[[.11737528961,1.98357498767,26087.9031415742],[.02388076996,5.03738959686,52175.8062831484],[.01222839532,3.14159265359,0],[.0054325181,1.79644363964,78263.70942472259],[.0012977877,4.83232503958,104351.61256629678],[.00031866927,1.58088495658,130439.51570787099],[7963301e-11,4.60972126127,156527.41884944518]],[[.00274646065,3.95008450011,26087.9031415742],[.00099737713,3.14159265359,0]]],[[[.39528271651,0,0],[.07834131818,6.19233722598,26087.9031415742],[.00795525558,2.95989690104,52175.8062831484],[.00121281764,6.01064153797,78263.70942472259],[.00021921969,2.77820093972,104351.61256629678],[4354065e-11,5.82894543774,130439.51570787099]],[[.0021734774,4.65617158665,26087.9031415742],[.00044141826,1.42385544001,52175.8062831484]]]],Venus:[[[[3.17614666774,0,0],[.01353968419,5.59313319619,10213.285546211],[.00089891645,5.30650047764,20426.571092422],[5477194e-11,4.41630661466,7860.4193924392],[3455741e-11,2.6996444782,11790.6290886588],[2372061e-11,2.99377542079,3930.2096962196],[1317168e-11,5.18668228402,26.2983197998],[1664146e-11,4.25018630147,1577.3435424478],[1438387e-11,4.15745084182,9683.5945811164],[1200521e-11,6.15357116043,30639.856638633]],[[10213.28554621638,0,0],[.00095617813,2.4640651111,10213.285546211],[7787201e-11,.6247848222,20426.571092422]]],[[[.05923638472,.26702775812,10213.285546211],[.00040107978,1.14737178112,20426.571092422],[.00032814918,3.14159265359,0]],[[.00287821243,1.88964962838,10213.285546211]]],[[[.72334820891,0,0],[.00489824182,4.02151831717,10213.285546211],[1658058e-11,4.90206728031,20426.571092422],[1378043e-11,1.12846591367,11790.6290886588],[1632096e-11,2.84548795207,7860.4193924392],[498395e-11,2.58682193892,9683.5945811164],[221985e-11,2.01346696541,19367.1891622328],[237454e-11,2.55136053886,15720.8387848784]],[[.00034551041,.89198706276,10213.285546211]]]],Earth:[[[[1.75347045673,0,0],[.03341656453,4.66925680415,6283.0758499914],[.00034894275,4.62610242189,12566.1516999828],[3417572e-11,2.82886579754,3.523118349],[3497056e-11,2.74411783405,5753.3848848968],[3135899e-11,3.62767041756,77713.7714681205],[2676218e-11,4.41808345438,7860.4193924392],[2342691e-11,6.13516214446,3930.2096962196],[1273165e-11,2.03709657878,529.6909650946],[1324294e-11,.74246341673,11506.7697697936],[901854e-11,2.04505446477,26.2983197998],[1199167e-11,1.10962946234,1577.3435424478],[857223e-11,3.50849152283,398.1490034082],[779786e-11,1.17882681962,5223.6939198022],[99025e-10,5.23268072088,5884.9268465832],[753141e-11,2.53339052847,5507.5532386674],[505267e-11,4.58292599973,18849.2275499742],[492392e-11,4.20505711826,775.522611324],[356672e-11,2.91954114478,.0673103028],[284125e-11,1.89869240932,796.2980068164],[242879e-11,.34481445893,5486.777843175],[317087e-11,5.84901948512,11790.6290886588],[271112e-11,.31486255375,10977.078804699],[206217e-11,4.80646631478,2544.3144198834],[205478e-11,1.86953770281,5573.1428014331],[202318e-11,2.45767790232,6069.7767545534],[126225e-11,1.08295459501,20.7753954924],[155516e-11,.83306084617,213.299095438]],[[6283.0758499914,0,0],[.00206058863,2.67823455808,6283.0758499914],[4303419e-11,2.63512233481,12566.1516999828]],[[8721859e-11,1.07253635559,6283.0758499914]]],[[],[[.00227777722,3.4137662053,6283.0758499914],[3805678e-11,3.37063423795,12566.1516999828]]],[[[1.00013988784,0,0],[.01670699632,3.09846350258,6283.0758499914],[.00013956024,3.05524609456,12566.1516999828],[308372e-10,5.19846674381,77713.7714681205],[1628463e-11,1.17387558054,5753.3848848968],[1575572e-11,2.84685214877,7860.4193924392],[924799e-11,5.45292236722,11506.7697697936],[542439e-11,4.56409151453,3930.2096962196],[47211e-10,3.66100022149,5884.9268465832],[85831e-11,1.27079125277,161000.6857376741],[57056e-11,2.01374292245,83996.84731811189],[55736e-11,5.2415979917,71430.69561812909],[174844e-11,3.01193636733,18849.2275499742],[243181e-11,4.2734953079,11790.6290886588]],[[.00103018607,1.10748968172,6283.0758499914],[1721238e-11,1.06442300386,12566.1516999828]],[[4359385e-11,5.78455133808,6283.0758499914]]]],Mars:[[[[6.20347711581,0,0],[.18656368093,5.0503710027,3340.6124266998],[.01108216816,5.40099836344,6681.2248533996],[.00091798406,5.75478744667,10021.8372800994],[.00027744987,5.97049513147,3.523118349],[.00010610235,2.93958560338,2281.2304965106],[.00012315897,.84956094002,2810.9214616052],[8926784e-11,4.15697846427,.0172536522],[8715691e-11,6.11005153139,13362.4497067992],[6797556e-11,.36462229657,398.1490034082],[7774872e-11,3.33968761376,5621.8429232104],[3575078e-11,1.6618650571,2544.3144198834],[4161108e-11,.22814971327,2942.4634232916],[3075252e-11,.85696614132,191.4482661116],[2628117e-11,.64806124465,3337.0893083508],[2937546e-11,6.07893711402,.0673103028],[2389414e-11,5.03896442664,796.2980068164],[2579844e-11,.02996736156,3344.1355450488],[1528141e-11,1.14979301996,6151.533888305],[1798806e-11,.65634057445,529.6909650946],[1264357e-11,3.62275122593,5092.1519581158],[1286228e-11,3.06796065034,2146.1654164752],[1546404e-11,2.91579701718,1751.539531416],[1024902e-11,3.69334099279,8962.4553499102],[891566e-11,.18293837498,16703.062133499],[858759e-11,2.4009381194,2914.0142358238],[832715e-11,2.46418619474,3340.5951730476],[83272e-10,4.49495782139,3340.629680352],[712902e-11,3.66335473479,1059.3819301892],[748723e-11,3.82248614017,155.4203994342],[723861e-11,.67497311481,3738.761430108],[635548e-11,2.92182225127,8432.7643848156],[655162e-11,.48864064125,3127.3133312618],[550474e-11,3.81001042328,.9803210682],[55275e-10,4.47479317037,1748.016413067],[425966e-11,.55364317304,6283.0758499914],[415131e-11,.49662285038,213.299095438],[472167e-11,3.62547124025,1194.4470102246],[306551e-11,.38052848348,6684.7479717486],[312141e-11,.99853944405,6677.7017350506],[293198e-11,4.22131299634,20.7753954924],[302375e-11,4.48618007156,3532.0606928114],[274027e-11,.54222167059,3340.545116397],[281079e-11,5.88163521788,1349.8674096588],[231183e-11,1.28242156993,3870.3033917944],[283602e-11,5.7688543494,3149.1641605882],[236117e-11,5.75503217933,3333.498879699],[274033e-11,.13372524985,3340.6797370026],[299395e-11,2.78323740866,6254.6266625236]],[[3340.61242700512,0,0],[.01457554523,3.60433733236,3340.6124266998],[.00168414711,3.92318567804,6681.2248533996],[.00020622975,4.26108844583,10021.8372800994],[3452392e-11,4.7321039319,3.523118349],[2586332e-11,4.60670058555,13362.4497067992],[841535e-11,4.45864030426,2281.2304965106]],[[.00058152577,2.04961712429,3340.6124266998],[.00013459579,2.45738706163,6681.2248533996]]],[[[.03197134986,3.76832042431,3340.6124266998],[.00298033234,4.10616996305,6681.2248533996],[.00289104742,0,0],[.00031365539,4.4465105309,10021.8372800994],[34841e-9,4.7881254926,13362.4497067992]],[[.00217310991,6.04472194776,3340.6124266998],[.00020976948,3.14159265359,0],[.00012834709,1.60810667915,6681.2248533996]]],[[[1.53033488271,0,0],[.1418495316,3.47971283528,3340.6124266998],[.00660776362,3.81783443019,6681.2248533996],[.00046179117,4.15595316782,10021.8372800994],[8109733e-11,5.55958416318,2810.9214616052],[7485318e-11,1.77239078402,5621.8429232104],[5523191e-11,1.3643630377,2281.2304965106],[382516e-10,4.49407183687,13362.4497067992],[2306537e-11,.09081579001,2544.3144198834],[1999396e-11,5.36059617709,3337.0893083508],[2484394e-11,4.9254563992,2942.4634232916],[1960195e-11,4.74249437639,3344.1355450488],[1167119e-11,2.11260868341,5092.1519581158],[1102816e-11,5.00908403998,398.1490034082],[899066e-11,4.40791133207,529.6909650946],[992252e-11,5.83861961952,6151.533888305],[807354e-11,2.10217065501,1059.3819301892],[797915e-11,3.44839203899,796.2980068164],[740975e-11,1.49906336885,2146.1654164752]],[[.01107433345,2.03250524857,3340.6124266998],[.00103175887,2.37071847807,6681.2248533996],[128772e-9,0,0],[.0001081588,2.70888095665,10021.8372800994]],[[.00044242249,.47930604954,3340.6124266998],[8138042e-11,.86998389204,6681.2248533996]]]],Jupiter:[[[[.59954691494,0,0],[.09695898719,5.06191793158,529.6909650946],[.00573610142,1.44406205629,7.1135470008],[.00306389205,5.41734730184,1059.3819301892],[.00097178296,4.14264726552,632.7837393132],[.00072903078,3.64042916389,522.5774180938],[.00064263975,3.41145165351,103.0927742186],[.00039806064,2.29376740788,419.4846438752],[.00038857767,1.27231755835,316.3918696566],[.00027964629,1.7845459182,536.8045120954],[.0001358973,5.7748104079,1589.0728952838],[8246349e-11,3.5822792584,206.1855484372],[8768704e-11,3.63000308199,949.1756089698],[7368042e-11,5.0810119427,735.8765135318],[626315e-10,.02497628807,213.299095438],[6114062e-11,4.51319998626,1162.4747044078],[4905396e-11,1.32084470588,110.2063212194],[5305285e-11,1.30671216791,14.2270940016],[5305441e-11,4.18625634012,1052.2683831884],[4647248e-11,4.69958103684,3.9321532631],[3045023e-11,4.31676431084,426.598190876],[2609999e-11,1.56667394063,846.0828347512],[2028191e-11,1.06376530715,3.1813937377],[1764763e-11,2.14148655117,1066.49547719],[1722972e-11,3.88036268267,1265.5674786264],[1920945e-11,.97168196472,639.897286314],[1633223e-11,3.58201833555,515.463871093],[1431999e-11,4.29685556046,625.6701923124],[973272e-11,4.09764549134,95.9792272178]],[[529.69096508814,0,0],[.00489503243,4.2208293947,529.6909650946],[.00228917222,6.02646855621,7.1135470008],[.00030099479,4.54540782858,1059.3819301892],[.0002072092,5.45943156902,522.5774180938],[.00012103653,.16994816098,536.8045120954],[6067987e-11,4.42422292017,103.0927742186],[5433968e-11,3.98480737746,419.4846438752],[4237744e-11,5.89008707199,14.2270940016]],[[.00047233601,4.32148536482,7.1135470008],[.00030649436,2.929777887,529.6909650946],[.00014837605,3.14159265359,0]]],[[[.02268615702,3.55852606721,529.6909650946],[.00109971634,3.90809347197,1059.3819301892],[.00110090358,0,0],[8101428e-11,3.60509572885,522.5774180938],[6043996e-11,4.25883108339,1589.0728952838],[6437782e-11,.30627119215,536.8045120954]],[[.00078203446,1.52377859742,529.6909650946]]],[[[5.20887429326,0,0],[.25209327119,3.49108639871,529.6909650946],[.00610599976,3.84115365948,1059.3819301892],[.00282029458,2.57419881293,632.7837393132],[.00187647346,2.07590383214,522.5774180938],[.00086792905,.71001145545,419.4846438752],[.00072062974,.21465724607,536.8045120954],[.00065517248,5.9799588479,316.3918696566],[.00029134542,1.67759379655,103.0927742186],[.00030135335,2.16132003734,949.1756089698],[.00023453271,3.54023522184,735.8765135318],[.00022283743,4.19362594399,1589.0728952838],[.00023947298,.2745803748,7.1135470008],[.00013032614,2.96042965363,1162.4747044078],[970336e-10,1.90669633585,206.1855484372],[.00012749023,2.71550286592,1052.2683831884],[7057931e-11,2.18184839926,1265.5674786264],[6137703e-11,6.26418240033,846.0828347512],[2616976e-11,2.00994012876,1581.959348283]],[[.0127180152,2.64937512894,529.6909650946],[.00061661816,3.00076460387,1059.3819301892],[.00053443713,3.89717383175,522.5774180938],[.00031185171,4.88276958012,536.8045120954],[.00041390269,0,0]]]],Saturn:[[[[.87401354025,0,0],[.11107659762,3.96205090159,213.299095438],[.01414150957,4.58581516874,7.1135470008],[.00398379389,.52112032699,206.1855484372],[.00350769243,3.30329907896,426.598190876],[.00206816305,.24658372002,103.0927742186],[792713e-9,3.84007056878,220.4126424388],[.00023990355,4.66976924553,110.2063212194],[.00016573588,.43719228296,419.4846438752],[.00014906995,5.76903183869,316.3918696566],[.0001582029,.93809155235,632.7837393132],[.00014609559,1.56518472,3.9321532631],[.00013160301,4.44891291899,14.2270940016],[.00015053543,2.71669915667,639.897286314],[.00013005299,5.98119023644,11.0457002639],[.00010725067,3.12939523827,202.2533951741],[5863206e-11,.23656938524,529.6909650946],[5227757e-11,4.20783365759,3.1813937377],[6126317e-11,1.76328667907,277.0349937414],[5019687e-11,3.17787728405,433.7117378768],[459255e-10,.61977744975,199.0720014364],[4005867e-11,2.24479718502,63.7358983034],[2953796e-11,.98280366998,95.9792272178],[387367e-10,3.22283226966,138.5174968707],[2461186e-11,2.03163875071,735.8765135318],[3269484e-11,.77492638211,949.1756089698],[1758145e-11,3.2658010994,522.5774180938],[1640172e-11,5.5050445305,846.0828347512],[1391327e-11,4.02333150505,323.5054166574],[1580648e-11,4.37265307169,309.2783226558],[1123498e-11,2.83726798446,415.5524906121],[1017275e-11,3.71700135395,227.5261894396],[848642e-11,3.1915017083,209.3669421749]],[[213.2990952169,0,0],[.01297370862,1.82834923978,213.299095438],[.00564345393,2.88499717272,7.1135470008],[.00093734369,1.06311793502,426.598190876],[.00107674962,2.27769131009,206.1855484372],[.00040244455,2.04108104671,220.4126424388],[.00019941774,1.2795439047,103.0927742186],[.00010511678,2.7488034213,14.2270940016],[6416106e-11,.38238295041,639.897286314],[4848994e-11,2.43037610229,419.4846438752],[4056892e-11,2.92133209468,110.2063212194],[3768635e-11,3.6496533078,3.9321532631]],[[.0011644133,1.17988132879,7.1135470008],[.00091841837,.0732519584,213.299095438],[.00036661728,0,0],[.00015274496,4.06493179167,206.1855484372]]],[[[.04330678039,3.60284428399,213.299095438],[.00240348302,2.85238489373,426.598190876],[.00084745939,0,0],[.00030863357,3.48441504555,220.4126424388],[.00034116062,.57297307557,206.1855484372],[.0001473407,2.11846596715,639.897286314],[9916667e-11,5.79003188904,419.4846438752],[6993564e-11,4.7360468972,7.1135470008],[4807588e-11,5.43305312061,316.3918696566]],[[.00198927992,4.93901017903,213.299095438],[.00036947916,3.14159265359,0],[.00017966989,.5197943111,426.598190876]]],[[[9.55758135486,0,0],[.52921382865,2.39226219573,213.299095438],[.01873679867,5.2354960466,206.1855484372],[.01464663929,1.64763042902,426.598190876],[.00821891141,5.93520042303,316.3918696566],[.00547506923,5.0153261898,103.0927742186],[.0037168465,2.27114821115,220.4126424388],[.00361778765,3.13904301847,7.1135470008],[.00140617506,5.70406606781,632.7837393132],[.00108974848,3.29313390175,110.2063212194],[.00069006962,5.94099540992,419.4846438752],[.00061053367,.94037691801,639.897286314],[.00048913294,1.55733638681,202.2533951741],[.00034143772,.19519102597,277.0349937414],[.00032401773,5.47084567016,949.1756089698],[.00020936596,.46349251129,735.8765135318],[9796004e-11,5.20477537945,1265.5674786264],[.00011993338,5.98050967385,846.0828347512],[208393e-9,1.52102476129,433.7117378768],[.00015298404,3.0594381494,529.6909650946],[6465823e-11,.17732249942,1052.2683831884],[.00011380257,1.7310542704,522.5774180938],[3419618e-11,4.94550542171,1581.959348283]],[[.0618298134,.2584351148,213.299095438],[.00506577242,.71114625261,206.1855484372],[.00341394029,5.79635741658,426.598190876],[.00188491195,.47215589652,220.4126424388],[.00186261486,3.14159265359,0],[.00143891146,1.40744822888,7.1135470008]],[[.00436902572,4.78671677509,213.299095438]]]],Uranus:[[[[5.48129294297,0,0],[.09260408234,.89106421507,74.7815985673],[.01504247898,3.6271926092,1.4844727083],[.00365981674,1.89962179044,73.297125859],[.00272328168,3.35823706307,149.5631971346],[.00070328461,5.39254450063,63.7358983034],[.00068892678,6.09292483287,76.2660712756],[.00061998615,2.26952066061,2.9689454166],[.00061950719,2.85098872691,11.0457002639],[.0002646877,3.14152083966,71.8126531507],[.00025710476,6.11379840493,454.9093665273],[.0002107885,4.36059339067,148.0787244263],[.00017818647,1.74436930289,36.6485629295],[.00014613507,4.73732166022,3.9321532631],[.00011162509,5.8268179635,224.3447957019],[.0001099791,.48865004018,138.5174968707],[9527478e-11,2.95516862826,35.1640902212],[7545601e-11,5.236265824,109.9456887885],[4220241e-11,3.23328220918,70.8494453042],[40519e-9,2.277550173,151.0476698429],[3354596e-11,1.0654900738,4.4534181249],[2926718e-11,4.62903718891,9.5612275556],[349034e-10,5.48306144511,146.594251718],[3144069e-11,4.75199570434,77.7505439839],[2922333e-11,5.35235361027,85.8272988312],[2272788e-11,4.36600400036,70.3281804424],[2051219e-11,1.51773566586,.1118745846],[2148602e-11,.60745949945,38.1330356378],[1991643e-11,4.92437588682,277.0349937414],[1376226e-11,2.04283539351,65.2203710117],[1666902e-11,3.62744066769,380.12776796],[1284107e-11,3.11347961505,202.2533951741],[1150429e-11,.93343589092,3.1813937377],[1533221e-11,2.58594681212,52.6901980395],[1281604e-11,.54271272721,222.8603229936],[1372139e-11,4.19641530878,111.4301614968],[1221029e-11,.1990065003,108.4612160802],[946181e-11,1.19253165736,127.4717966068],[1150989e-11,4.17898916639,33.6796175129]],[[74.7815986091,0,0],[.00154332863,5.24158770553,74.7815985673],[.00024456474,1.71260334156,1.4844727083],[9258442e-11,.4282973235,11.0457002639],[8265977e-11,1.50218091379,63.7358983034],[915016e-10,1.41213765216,149.5631971346]]],[[[.01346277648,2.61877810547,74.7815985673],[623414e-9,5.08111189648,149.5631971346],[.00061601196,3.14159265359,0],[9963722e-11,1.61603805646,76.2660712756],[992616e-10,.57630380333,73.297125859]],[[.00034101978,.01321929936,74.7815985673]]],[[[19.21264847206,0,0],[.88784984413,5.60377527014,74.7815985673],[.03440836062,.32836099706,73.297125859],[.0205565386,1.7829515933,149.5631971346],[.0064932241,4.52247285911,76.2660712756],[.00602247865,3.86003823674,63.7358983034],[.00496404167,1.40139935333,454.9093665273],[.00338525369,1.58002770318,138.5174968707],[.00243509114,1.57086606044,71.8126531507],[.00190522303,1.99809394714,1.4844727083],[.00161858838,2.79137786799,148.0787244263],[.00143706183,1.38368544947,11.0457002639],[.00093192405,.17437220467,36.6485629295],[.00071424548,4.24509236074,224.3447957019],[.00089806014,3.66105364565,109.9456887885],[.00039009723,1.66971401684,70.8494453042],[.00046677296,1.39976401694,35.1640902212],[.00039025624,3.36234773834,277.0349937414],[.00036755274,3.88649278513,146.594251718],[.00030348723,.70100838798,151.0476698429],[.00029156413,3.180563367,77.7505439839],[.00022637073,.72518687029,529.6909650946],[.00011959076,1.7504339214,984.6003316219],[.00025620756,5.25656086672,380.12776796]],[[.01479896629,3.67205697578,74.7815985673]]]],Neptune:[[[[5.31188633046,0,0],[.0179847553,2.9010127389,38.1330356378],[.01019727652,.48580922867,1.4844727083],[.00124531845,4.83008090676,36.6485629295],[.00042064466,5.41054993053,2.9689454166],[.00037714584,6.09221808686,35.1640902212],[.00033784738,1.24488874087,76.2660712756],[.00016482741,7727998e-11,491.5579294568],[9198584e-11,4.93747051954,39.6175083461],[899425e-10,.27462171806,175.1660598002]],[[38.13303563957,0,0],[.00016604172,4.86323329249,1.4844727083],[.00015744045,2.27887427527,38.1330356378]]],[[[.03088622933,1.44104372644,38.1330356378],[.00027780087,5.91271884599,76.2660712756],[.00027623609,0,0],[.00015355489,2.52123799551,36.6485629295],[.00015448133,3.50877079215,39.6175083461]]],[[[30.07013205828,0,0],[.27062259632,1.32999459377,38.1330356378],[.01691764014,3.25186135653,36.6485629295],[.00807830553,5.18592878704,1.4844727083],[.0053776051,4.52113935896,35.1640902212],[.00495725141,1.5710564165,491.5579294568],[.00274571975,1.84552258866,175.1660598002],[.0001201232,1.92059384991,1021.2488945514],[.00121801746,5.79754470298,76.2660712756],[.00100896068,.3770272493,73.297125859],[.00135134092,3.37220609835,39.6175083461],[7571796e-11,1.07149207335,388.4651552382]]]]};function u2(n){var e,t,r,i,o,a,s;const c=2e3+(n-14)/e2;return c<-500?(e=(c-1820)/100,-20+32*e*e):c<500?(e=c/100,t=e*e,r=e*t,i=t*t,o=t*r,a=r*r,10583.6-1014.41*e+33.78311*t-5.952053*r-.1798452*i+.022174192*o+.0090316521*a):c<1600?(e=(c-1e3)/100,t=e*e,r=e*t,i=t*t,o=t*r,a=r*r,1574.2-556.01*e+71.23472*t+.319781*r-.8503463*i-.005050998*o+.0083572073*a):c<1700?(e=c-1600,t=e*e,r=e*t,120-.9808*e-.01532*t+r/7129):c<1800?(e=c-1700,t=e*e,r=e*t,i=t*t,8.83+.1603*e-.0059285*t+13336e-8*r-i/1174e3):c<1860?(e=c-1800,t=e*e,r=e*t,i=t*t,o=t*r,a=r*r,s=r*i,13.72-.332447*e+.0068612*t+.0041116*r-37436e-8*i+121272e-10*o-1699e-10*a+875e-12*s):c<1900?(e=c-1860,t=e*e,r=e*t,i=t*t,o=t*r,7.62+.5737*e-.251754*t+.01680668*r-.0004473624*i+o/233174):c<1920?(e=c-1900,t=e*e,r=e*t,i=t*t,-2.79+1.494119*e-.0598939*t+.0061966*r-197e-6*i):c<1941?(e=c-1920,t=e*e,r=e*t,21.2+.84493*e-.0761*t+.0020936*r):c<1961?(e=c-1950,t=e*e,r=e*t,29.07+.407*e-t/233+r/2547):c<1986?(e=c-1975,t=e*e,r=e*t,45.45+1.067*e-t/260-r/718):c<2005?(e=c-2e3,t=e*e,r=e*t,i=t*t,o=t*r,63.86+.3345*e-.060374*t+.0017275*r+651814e-9*i+2373599e-11*o):c<2050?(e=c-2e3,62.92+.32217*e+.005589*e*e):c<2150?(e=(c-1820)/100,-20+32*e*e-.5628*(2150-c)):(e=(c-1820)/100,-20+32*e*e)}let d2=u2;function zc(n){return n+d2(n)/86400}class cn{constructor(e){if(e instanceof cn){this.date=e.date,this.ut=e.ut,this.tt=e.tt;return}const t=1e3*3600*24;if(e instanceof Date&&Number.isFinite(e.getTime())){this.date=e,this.ut=(e.getTime()-Gc.getTime())/t,this.tt=zc(this.ut);return}if(Number.isFinite(e)){this.date=new Date(Gc.getTime()+e*t),this.ut=e,this.tt=zc(this.ut);return}throw"Argument must be a Date object, an AstroTime object, or a numeric UTC Julian date."}static FromTerrestrialTime(e){let t=new cn(e);for(;;){const r=e-t.tt;if(Math.abs(r)<1e-12)return t;t=t.AddDays(r)}}toString(){return this.date.toISOString()}AddDays(e){return new cn(this.ut+e)}}function l2(n,e,t){return new cn(n.ut+t*(e.ut-n.ut))}function tt(n){return n instanceof cn?n:new cn(n)}function h2(n){function e(f){return f%n2*cr}const t=n.tt/36525,r=e(128710479305e-5+t*1295965810481e-4),i=e(335779.526232+t*17395272628478e-4),o=e(107226070369e-5+t*1602961601209e-3),a=e(450160.398036-t*69628905431e-4);let s=Math.sin(a),c=Math.cos(a),u=(-172064161-174666*t)*s+33386*c,d=(92052331+9086*t)*c+15377*s,l=2*(i-o+a);return s=Math.sin(l),c=Math.cos(l),u+=(-13170906-1675*t)*s-13696*c,d+=(5730336-3015*t)*c-4587*s,l=2*(i+a),s=Math.sin(l),c=Math.cos(l),u+=(-2276413-234*t)*s+2796*c,d+=(978459-485*t)*c+1374*s,l=2*a,s=Math.sin(l),c=Math.cos(l),u+=(2074554+207*t)*s-698*c,d+=(-897492+470*t)*c-291*s,s=Math.sin(r),c=Math.cos(r),u+=(1475877-3633*t)*s+11817*c,d+=(73871-184*t)*c-1924*s,{dpsi:-135e-6+u*1e-7,deps:388e-6+d*1e-7}}function tl(n){var e=n.tt/36525,t=((((-434e-10*e-576e-9)*e+.0020034)*e-1831e-7)*e-46.836769)*e+84381.406;return t/3600}var Zi;function nl(n){if(!Zi||Math.abs(Zi.tt-n.tt)>1e-6){const e=h2(n),t=tl(n),r=t+e.deps/3600;Zi={tt:n.tt,dpsi:e.dpsi,deps:e.deps,ee:e.dpsi*Math.cos(t*me)/15,mobl:t,tobl:r}}return Zi}function m2(n,e){const t=n*me,r=Math.cos(t),i=Math.sin(t);return[e[0],e[1]*r-e[2]*i,e[1]*i+e[2]*r]}function f2(n,e){return m2(tl(n),e)}function g2(n){const e=n.tt/36525;function t(B,ee){const he=[];let pe;for(pe=0;pe<=ee-B;++pe)he.push(0);return{min:B,array:he}}function r(B,ee,he,pe){const Se=[];for(let mn=0;mn<=ee-B;++mn)Se.push(t(he,pe));return{min:B,array:Se}}function i(B,ee,he){const pe=B.array[ee-B.min];return pe.array[he-pe.min]}function o(B,ee,he,pe){const Se=B.array[ee-B.min];Se.array[he-Se.min]=pe}let a,s,c,u,d,l,f,g,p,y,_,T,v,S,D,R,G,Y,q,L,J,W,$,le=r(-6,6,1,4),ge=r(-6,6,1,4);function Me(B,ee){return i(le,B,ee)}function ut(B,ee){return i(ge,B,ee)}function dt(B,ee,he){return o(le,B,ee,he)}function hn(B,ee,he){return o(ge,B,ee,he)}function qn(B,ee,he,pe,Se){Se(B*he-ee*pe,ee*he+B*pe)}function Q(B){return Math.sin(Zt*B)}f=e*e,p=0,$=0,_=0,T=3422.7;var Mt=Q(.19833+.05611*e),la=Q(.27869+.04508*e),ha=Q(.16827-.36903*e),ma=Q(.34734-5.37261*e),fa=Q(.10498-5.37899*e),Li=Q(.42681-.41855*e),wl=Q(.14943-5.37511*e);for(Y=.84*Mt+.31*la+14.27*ha+7.26*ma+.28*fa+.24*Li,q=2.94*Mt+.31*la+14.27*ha+9.34*ma+1.12*fa+.83*Li,L=-6.4*Mt-1.89*Li,J=.21*Mt+.31*la+14.27*ha-88.7*ma-15.3*fa+.24*Li-1.86*wl,W=Y-L,g=-3332e-9*Q(.59734-5.37261*e)-539e-9*Q(.35498-5.37899*e)-64e-9*Q(.39943-5.37511*e),v=Zt*tr(.60643382+1336.85522467*e-313e-8*f)+Y/fn,S=Zt*tr(.37489701+1325.55240982*e+2565e-8*f)+q/fn,D=Zt*tr(.99312619+99.99735956*e-44e-8*f)+L/fn,R=Zt*tr(.25909118+1342.2278298*e-892e-8*f)+J/fn,G=Zt*tr(.82736186+1236.85308708*e-397e-8*f)+W/fn,d=1;d<=4;++d){switch(d){case 1:c=S,s=4,u=1.000002208;break;case 2:c=D,s=3,u=.997504612-.002495388*e;break;case 3:c=R,s=4,u=1.000002708+139.978*g;break;case 4:c=G,s=6,u=1;break;default:throw`Internal error: I = ${d}`}for(dt(0,d,1),dt(1,d,Math.cos(c)*u),hn(0,d,0),hn(1,d,Math.sin(c)*u),l=2;l<=s;++l)qn(Me(l-1,d),ut(l-1,d),Me(1,d),ut(1,d),(B,ee)=>(dt(l,d,B),hn(l,d,ee)));for(l=1;l<=s;++l)dt(-l,d,Me(l,d)),hn(-l,d,-ut(l,d))}function D0(B,ee,he,pe){for(var Se={x:1,y:0},mn=[0,B,ee,he,pe],Bt=1;Bt<=4;++Bt)mn[Bt]!==0&&qn(Se.x,Se.y,Me(mn[Bt],Bt),ut(mn[Bt],Bt),(ga,Zn)=>(Se.x=ga,Se.y=Zn));return Se}function w(B,ee,he,pe,Se,mn,Bt,ga){var Zn=D0(Se,mn,Bt,ga);p+=B*Zn.y,$+=ee*Zn.y,_+=he*Zn.x,T+=pe*Zn.x}w(13.902,14.06,-.001,.2607,0,0,0,4),w(.403,-4.01,.394,.0023,0,0,0,3),w(2369.912,2373.36,.601,28.2333,0,0,0,2),w(-125.154,-112.79,-.725,-.9781,0,0,0,1),w(1.979,6.98,-.445,.0433,1,0,0,4),w(191.953,192.72,.029,3.0861,1,0,0,2),w(-8.466,-13.51,.455,-.1093,1,0,0,1),w(22639.5,22609.07,.079,186.5398,1,0,0,0),w(18.609,3.59,-.094,.0118,1,0,0,-1),w(-4586.465,-4578.13,-.077,34.3117,1,0,0,-2),w(3.215,5.44,.192,-.0386,1,0,0,-3),w(-38.428,-38.64,.001,.6008,1,0,0,-4),w(-.393,-1.43,-.092,.0086,1,0,0,-6),w(-.289,-1.59,.123,-.0053,0,1,0,4),w(-24.42,-25.1,.04,-.3,0,1,0,2),w(18.023,17.93,.007,.1494,0,1,0,1),w(-668.146,-126.98,-1.302,-.3997,0,1,0,0),w(.56,.32,-.001,-.0037,0,1,0,-1),w(-165.145,-165.06,.054,1.9178,0,1,0,-2),w(-1.877,-6.46,-.416,.0339,0,1,0,-4),w(.213,1.02,-.074,.0054,2,0,0,4),w(14.387,14.78,-.017,.2833,2,0,0,2),w(-.586,-1.2,.054,-.01,2,0,0,1),w(769.016,767.96,.107,10.1657,2,0,0,0),w(1.75,2.01,-.018,.0155,2,0,0,-1),w(-211.656,-152.53,5.679,-.3039,2,0,0,-2),w(1.225,.91,-.03,-.0088,2,0,0,-3),w(-30.773,-34.07,-.308,.3722,2,0,0,-4),w(-.57,-1.4,-.074,.0109,2,0,0,-6),w(-2.921,-11.75,.787,-.0484,1,1,0,2),w(1.267,1.52,-.022,.0164,1,1,0,1),w(-109.673,-115.18,.461,-.949,1,1,0,0),w(-205.962,-182.36,2.056,1.4437,1,1,0,-2),w(.233,.36,.012,-.0025,1,1,0,-3),w(-4.391,-9.66,-.471,.0673,1,1,0,-4),w(.283,1.53,-.111,.006,1,-1,0,4),w(14.577,31.7,-1.54,.2302,1,-1,0,2),w(147.687,138.76,.679,1.1528,1,-1,0,0),w(-1.089,.55,.021,0,1,-1,0,-1),w(28.475,23.59,-.443,-.2257,1,-1,0,-2),w(-.276,-.38,-.006,-.0036,1,-1,0,-3),w(.636,2.27,.146,-.0102,1,-1,0,-4),w(-.189,-1.68,.131,-.0028,0,2,0,2),w(-7.486,-.66,-.037,-.0086,0,2,0,0),w(-8.096,-16.35,-.74,.0918,0,2,0,-2),w(-5.741,-.04,0,-9e-4,0,0,2,2),w(.255,0,0,0,0,0,2,1),w(-411.608,-.2,0,-.0124,0,0,2,0),w(.584,.84,0,.0071,0,0,2,-1),w(-55.173,-52.14,0,-.1052,0,0,2,-2),w(.254,.25,0,-.0017,0,0,2,-3),w(.025,-1.67,0,.0031,0,0,2,-4),w(1.06,2.96,-.166,.0243,3,0,0,2),w(36.124,50.64,-1.3,.6215,3,0,0,0),w(-13.193,-16.4,.258,-.1187,3,0,0,-2),w(-1.187,-.74,.042,.0074,3,0,0,-4),w(-.293,-.31,-.002,.0046,3,0,0,-6),w(-.29,-1.45,.116,-.0051,2,1,0,2),w(-7.649,-10.56,.259,-.1038,2,1,0,0),w(-8.627,-7.59,.078,-.0192,2,1,0,-2),w(-2.74,-2.54,.022,.0324,2,1,0,-4),w(1.181,3.32,-.212,.0213,2,-1,0,2),w(9.703,11.67,-.151,.1268,2,-1,0,0),w(-.352,-.37,.001,-.0028,2,-1,0,-1),w(-2.494,-1.17,-.003,-.0017,2,-1,0,-2),w(.36,.2,-.012,-.0043,2,-1,0,-4),w(-1.167,-1.25,.008,-.0106,1,2,0,0),w(-7.412,-6.12,.117,.0484,1,2,0,-2),w(-.311,-.65,-.032,.0044,1,2,0,-4),w(.757,1.82,-.105,.0112,1,-2,0,2),w(2.58,2.32,.027,.0196,1,-2,0,0),w(2.533,2.4,-.014,-.0212,1,-2,0,-2),w(-.344,-.57,-.025,.0036,0,3,0,-2),w(-.992,-.02,0,0,1,0,2,2),w(-45.099,-.02,0,-.001,1,0,2,0),w(-.179,-9.52,0,-.0833,1,0,2,-2),w(-.301,-.33,0,.0014,1,0,2,-4),w(-6.382,-3.37,0,-.0481,1,0,-2,2),w(39.528,85.13,0,-.7136,1,0,-2,0),w(9.366,.71,0,-.0112,1,0,-2,-2),w(.202,.02,0,0,1,0,-2,-4),w(.415,.1,0,.0013,0,1,2,0),w(-2.152,-2.26,0,-.0066,0,1,2,-2),w(-1.44,-1.3,0,.0014,0,1,-2,2),w(.384,-.04,0,0,0,1,-2,-2),w(1.938,3.6,-.145,.0401,4,0,0,0),w(-.952,-1.58,.052,-.013,4,0,0,-2),w(-.551,-.94,.032,-.0097,3,1,0,0),w(-.482,-.57,.005,-.0045,3,1,0,-2),w(.681,.96,-.026,.0115,3,-1,0,0),w(-.297,-.27,.002,-9e-4,2,2,0,-2),w(.254,.21,-.003,0,2,-2,0,-2),w(-.25,-.22,.004,.0014,1,3,0,-2),w(-3.996,0,0,4e-4,2,0,2,0),w(.557,-.75,0,-.009,2,0,2,-2),w(-.459,-.38,0,-.0053,2,0,-2,2),w(-1.298,.74,0,4e-4,2,0,-2,0),w(.538,1.14,0,-.0141,2,0,-2,-2),w(.263,.02,0,0,1,1,2,0),w(.426,.07,0,-6e-4,1,1,-2,-2),w(-.304,.03,0,3e-4,1,-1,2,0),w(-.372,-.19,0,-.0027,1,-1,-2,2),w(.418,0,0,0,0,0,4,0),w(-.33,-.04,0,0,3,0,2,0);function xt(B,ee,he,pe,Se){return B*D0(ee,he,pe,Se).y}y=0,y+=xt(-526.069,0,0,1,-2),y+=xt(-3.352,0,0,1,-4),y+=xt(44.297,1,0,1,-2),y+=xt(-6,1,0,1,-4),y+=xt(20.599,-1,0,1,0),y+=xt(-30.598,-1,0,1,-2),y+=xt(-24.649,-2,0,1,0),y+=xt(-2,-2,0,1,-2),y+=xt(-22.571,0,1,1,-2),y+=xt(10.985,0,-1,1,-2),p+=.82*Q(.7736-62.5512*e)+.31*Q(.0466-125.1025*e)+.35*Q(.5785-25.1042*e)+.66*Q(.4591+1335.8075*e)+.64*Q(.313-91.568*e)+1.14*Q(.148+1331.2898*e)+.21*Q(.5918+1056.5859*e)+.44*Q(.5784+1322.8595*e)+.24*Q(.2275-5.7374*e)+.28*Q(.2965+2.6929*e)+.33*Q(.3132+6.3368*e),a=R+$/fn;let vl=(1.000002708+139.978*g)*(18518.511+1.189+_)*Math.sin(a)-6.24*Math.sin(3*a)+y;return{geo_eclip_lon:Zt*tr((v+p/fn)/Zt),geo_eclip_lat:Math.PI/(180*3600)*vl,distance_au:fn*o2/(.999953253*T)}}function rl(n,e){return[n.rot[0][0]*e[0]+n.rot[1][0]*e[1]+n.rot[2][0]*e[2],n.rot[0][1]*e[0]+n.rot[1][1]*e[1]+n.rot[2][1]*e[2],n.rot[0][2]*e[0]+n.rot[1][2]*e[1]+n.rot[2][2]*e[2]]}function Ss(n,e,t){const r=il(e,t);return rl(r,n)}function il(n,e){const t=n.tt/36525;let r=84381.406,i=((((-951e-10*t+132851e-9)*t-.00114045)*t-1.0790069)*t+5038.481507)*t,o=((((3337e-10*t-467e-9)*t-.00772503)*t+.0512623)*t-.025754)*t+r,a=((((-56e-9*t+170663e-9)*t-.00121197)*t-2.3814292)*t+10.556403)*t;r*=cr,i*=cr,o*=cr,a*=cr;const s=Math.sin(r),c=Math.cos(r),u=Math.sin(-i),d=Math.cos(-i),l=Math.sin(-o),f=Math.cos(-o),g=Math.sin(a),p=Math.cos(a),y=p*d-u*g*f,_=p*u*c+g*f*d*c-s*g*l,T=p*u*s+g*f*d*s+c*g*l,v=-g*d-u*p*f,S=-g*u*c+p*f*d*c-s*p*l,D=-g*u*s+p*f*d*s+c*p*l,R=u*l,G=-l*d*c-s*f,Y=-l*d*s+f*c;if(e===St.Into2000)return new hi([[y,_,T],[v,S,D],[R,G,Y]]);if(e===St.From2000)return new hi([[y,v,R],[_,S,G],[T,D,Y]]);throw"Invalid precess direction"}function p2(n){const e=.779057273264+.00273781191135448*n.ut,t=n.ut%1;let r=360*((e+t)%1);return r<0&&(r+=360),r}let Xi;function ca(n){if(!Xi||Xi.tt!==n.tt){const e=n.tt/36525;let t=15*nl(n).ee;const r=p2(n);let o=((t+.014506+((((-368e-10*e-29956e-9)*e-44e-8)*e+1.3915817)*e+4612.156534)*e)/3600+r)%360/15;o<0&&(o+=24),Xi={tt:n.tt,st:o}}return Xi.st}function y2(n){const e=tt(n);return ca(e)}function _2(n,e){const t=n.latitude*me,r=Math.sin(t),i=Math.cos(t),o=1/Math.hypot(i,ys*r),a=i2*o,s=n.height/1e3,c=_s*o+s,u=_s*a+s,d=(15*e+n.longitude)*me,l=Math.sin(d),f=Math.cos(d);return{pos:[c*i*f/ir,c*i*l/ir,u*r/ir],vel:[-7292115e-11*c*i*l*86400/ir,r2*c*i*f*86400/ir,0]}}function Yc(n,e,t){const r=ol(e,t);return rl(r,n)}function ol(n,e){const t=nl(n),r=t.mobl*me,i=t.tobl*me,o=t.dpsi*cr,a=Math.cos(r),s=Math.sin(r),c=Math.cos(i),u=Math.sin(i),d=Math.cos(o),l=Math.sin(o),f=d,g=-l*a,p=-l*s,y=l*c,_=d*a*c+s*u,T=d*s*c-a*u,v=l*u,S=d*a*u-s*c,D=d*s*u+a*c;if(e===St.From2000)return new hi([[f,y,v],[g,_,S],[p,T,D]]);if(e===St.Into2000)return new hi([[f,g,p],[y,_,T],[v,S,D]]);throw"Invalid precess direction"}function al(n,e,t){return t===St.Into2000?Ss(Yc(n,e,t),e,t):Yc(Ss(n,e,t),e,t)}function E2(n,e){const t=ca(n),r=_2(e,t).pos;return al(r,n,St.Into2000)}class Ze{constructor(e,t,r,i){this.x=e,this.y=t,this.z=r,this.t=i}Length(){return Math.hypot(this.x,this.y,this.z)}}class Tn{constructor(e,t,r,i,o,a,s){this.x=e,this.y=t,this.z=r,this.vx=i,this.vy=o,this.vz=a,this.t=s}}class T2{constructor(e,t,r){this.lat=de(e),this.lon=de(t),this.dist=de(r)}}class kc{constructor(e,t,r,i){this.ra=de(e),this.dec=de(t),this.dist=de(r),this.vec=i}}class hi{constructor(e){this.rot=e}}class w2{constructor(e,t,r,i){this.azimuth=de(e),this.altitude=de(t),this.ra=de(r),this.dec=de(i)}}function v2(n,e){return new Ze(n[0],n[1],n[2],e)}function S2(n,e){const t=v2(n,e),r=t.x*t.x+t.y*t.y,i=Math.sqrt(r+t.z*t.z);if(r===0){if(t.z===0)throw"Indeterminate sky coordinates";return new kc(0,t.z<0?-90:90,i,t)}let o=Kd*Math.atan2(t.y,t.x);o<0&&(o+=24);const a=Do*Math.atan2(n[2],Math.sqrt(r));return new kc(o,a,i,t)}function Oa(n,e){const t=n*me,r=Math.cos(t),i=Math.sin(t);return[r*e[0]+i*e[1],r*e[1]-i*e[0],e[2]]}function S0(n,e,t,r,i){let o=tt(n);Oi(e),de(t),de(r);const a=Math.sin(e.latitude*me),s=Math.cos(e.latitude*me),c=Math.sin(e.longitude*me),u=Math.cos(e.longitude*me),d=Math.sin(r*me),l=Math.cos(r*me),f=Math.sin(t*Fc),g=Math.cos(t*Fc);let p=[s*u,s*c,a],y=[-a*u,-a*c,s],_=[c,-u,0];const T=-15*ca(o);let v=Oa(T,p),S=Oa(T,y),D=Oa(T,_),R=[l*g,l*f,d];const G=R[0]*v[0]+R[1]*v[1]+R[2]*v[2],Y=R[0]*S[0]+R[1]*S[1]+R[2]*S[2],q=R[0]*D[0]+R[1]*D[1]+R[2]*D[2];let L=Math.hypot(Y,q),J;L>0?(J=-57.29577951308232*Math.atan2(q,Y),J<0&&(J+=360)):J=0;let W=Do*Math.atan2(L,G),$=t,le=r;if(i){let ge=W,Me=j2(i,90-W);if(W-=Me,Me>0&&W>3e-4){const ut=Math.sin(W*me),dt=Math.cos(W*me),hn=Math.sin(ge*me),qn=Math.cos(ge*me),Q=[];for(let Mt=0;Mt<3;++Mt)Q.push((R[Mt]-qn*v[Mt])/hn*ut+v[Mt]*dt);L=Math.hypot(Q[0],Q[1]),L>0?($=Kd*Math.atan2(Q[1],Q[0]),$<0&&($+=24)):$=0,le=Do*Math.atan2(Q[2],L)}}return new w2(J,90-W,$,le)}function Oi(n){if(!(n instanceof sl))throw`Not an instance of the Observer class: ${n}`;if(de(n.latitude),de(n.longitude),de(n.height),n.latitude<-90||n.latitude>90)throw`Latitude ${n.latitude} is out of range. Must be -90..+90.`;return n}class sl{constructor(e,t,r){this.latitude=e,this.longitude=t,this.height=r,Oi(this)}}function b0(n,e,t,r,i){Oi(t);const o=tt(e),a=E2(o,t),s=ml(n,o,i),c=[s.x-a[0],s.y-a[1],s.z-a[2]],u=al(c,o,St.From2000);return S2(u,o)}function mi(n){const e=tt(n),t=g2(e),r=t.distance_au*Math.cos(t.geo_eclip_lat),i=[r*Math.cos(t.geo_eclip_lon),r*Math.sin(t.geo_eclip_lon),t.distance_au*Math.sin(t.geo_eclip_lat)],o=f2(e,i),a=Ss(o,e,St.Into2000);return new Ze(a[0],a[1],a[2],e)}function cl(n){const e=tt(n),t=1e-5,r=e.AddDays(-1e-5),i=e.AddDays(1e-5),o=mi(r),a=mi(i);return new Tn((o.x+a.x)/2,(o.y+a.y)/2,(o.z+a.z)/2,(a.x-o.x)/(2*t),(a.y-o.y)/(2*t),(a.z-o.z)/(2*t),e)}function b2(n){const e=tt(n),t=cl(e),r=1+el;return new Tn(t.x/r,t.y/r,t.z/r,t.vx/r,t.vy/r,t.vz/r,e)}function lr(n,e,t){let r=1,i=0;for(let o of n){let a=0;for(let[c,u,d]of o)a+=c*Math.cos(u+e*d);let s=r*a;t&&(s%=Zt),i+=s,r*=e}return i}function La(n,e){let t=1,r=0,i=0,o=0;for(let a of n){let s=0,c=0;for(let[u,d,l]of a){let f=d+e*l;s+=u*l*Math.sin(f),o>0&&(c+=u*Math.cos(f))}i+=o*r*c-t*s,r=t,t*=e,++o}return i}const Vr=365250,bs=0,Rs=1,Ds=2;function As(n){return new Ie(n[0]+44036e-11*n[1]-190919e-12*n[2],-479966e-12*n[0]+.917482137087*n[1]-.397776982902*n[2],.397776982902*n[1]+.917482137087*n[2])}function ul(n,e,t){const r=t*Math.cos(e),i=Math.cos(n),o=Math.sin(n);return[r*i,r*o,t*Math.sin(e)]}function eo(n,e){const t=e.tt/Vr,r=lr(n[bs],t,!0),i=lr(n[Rs],t,!1),o=lr(n[Ds],t,!1),a=ul(r,i,o);return As(a).ToAstroVector(e)}function Ms(n,e){const t=e/Vr,r=lr(n[bs],t,!0),i=lr(n[Rs],t,!1),o=lr(n[Ds],t,!1),a=La(n[bs],t),s=La(n[Rs],t),c=La(n[Ds],t),u=Math.cos(r),d=Math.sin(r),l=Math.cos(i),f=Math.sin(i),g=+(c*l*u)-o*f*u*s-o*l*d*a,p=+(c*l*d)-o*f*d*s+o*l*u*a,y=+(c*f)+o*l*s,_=ul(r,i,o),T=[g/Vr,p/Vr,y/Vr],v=As(_),S=As(T);return new jn(e,v,S)}function Ki(n,e,t,r){const i=r/(r+w0),o=eo(En[t],e);n.x+=i*o.x,n.y+=i*o.y,n.z+=i*o.z}function R2(n){const e=new Ze(0,0,0,n);return Ki(e,n,x.Jupiter,Es),Ki(e,n,x.Saturn,Ts),Ki(e,n,x.Uranus,ws),Ki(e,n,x.Neptune,vs),e}const xs=51,D2=29200,Ao=146,Xt=201,On=[[-73e4,[-26.118207232108,-14.376168177825,3.384402515299],[.0016339372163656,-.0027861699588508,-.0013585880229445]],[-700800,[41.974905202127,-.448502952929,-12.770351505989],[.00073458569351457,.0022785014891658,.00048619778602049]],[-671600,[14.706930780744,44.269110540027,9.353698474772],[-.00210001479998,.00022295915939915,.00070143443551414]],[-642400,[-29.441003929957,-6.43016153057,6.858481011305],[.00084495803960544,-.0030783914758711,-.0012106305981192]],[-613200,[39.444396946234,-6.557989760571,-13.913760296463],[.0011480029005873,.0022400006880665,.00035168075922288]],[-584e3,[20.2303809507,43.266966657189,7.382966091923],[-.0019754081700585,.00053457141292226,.00075929169129793]],[-554800,[-30.65832536462,2.093818874552,9.880531138071],[61010603013347e-18,-.0031326500935382,-.00099346125151067]],[-525600,[35.737703251673,-12.587706024764,-14.677847247563],[.0015802939375649,.0021347678412429,.00019074436384343]],[-496400,[25.466295188546,41.367478338417,5.216476873382],[-.0018054401046468,.0008328308359951,.00080260156912107]],[-467200,[-29.847174904071,10.636426313081,12.297904180106],[-.00063257063052907,-.0029969577578221,-.00074476074151596]],[-438e3,[30.774692107687,-18.236637015304,-14.945535879896],[.0020113162005465,.0019353827024189,-20937793168297e-19]],[-408800,[30.243153324028,38.656267888503,2.938501750218],[-.0016052508674468,.0011183495337525,.00083333973416824]],[-379600,[-27.288984772533,18.643162147874,14.023633623329],[-.0011856388898191,-.0027170609282181,-.00049015526126399]],[-350400,[24.519605196774,-23.245756064727,-14.626862367368],[.0024322321483154,.0016062008146048,-.00023369181613312]],[-321200,[34.505274805875,35.125338586954,.557361475637],[-.0013824391637782,.0013833397561817,.00084823598806262]],[-292e3,[-23.275363915119,25.818514298769,15.055381588598],[-.0016062295460975,-.0023395961498533,-.00024377362639479]],[-262800,[17.050384798092,-27.180376290126,-13.608963321694],[.0028175521080578,.0011358749093955,-.00049548725258825]],[-233600,[38.093671910285,30.880588383337,-1.843688067413],[-.0011317697153459,.0016128814698472,.00084177586176055]],[-204400,[-18.197852930878,31.932869934309,15.438294826279],[-.0019117272501813,-.0019146495909842,-19657304369835e-18]],[-175200,[8.528924039997,-29.618422200048,-11.805400994258],[.0031034370787005,.0005139363329243,-.00077293066202546]],[-146e3,[40.94685725864,25.904973592021,-4.256336240499],[-.00083652705194051,.0018129497136404,.0008156422827306]],[-116800,[-12.326958895325,36.881883446292,15.217158258711],[-.0021166103705038,-.001481442003599,.00017401209844705]],[-87600,[-.633258375909,-30.018759794709,-9.17193287495],[.0032016994581737,-.00025279858672148,-.0010411088271861]],[-58400,[42.936048423883,20.344685584452,-6.588027007912],[-.00050525450073192,.0019910074335507,.00077440196540269]],[-29200,[-5.975910552974,40.61180995846,14.470131723673],[-.0022184202156107,-.0010562361130164,.00033652250216211]],[0,[-9.875369580774,-27.978926224737,-5.753711824704],[.0030287533248818,-.0011276087003636,-.0012651326732361]],[29200,[43.958831986165,14.214147973292,-8.808306227163],[-.00014717608981871,.0021404187242141,.00071486567806614]],[58400,[.67813676352,43.094461639362,13.243238780721],[-.0022358226110718,-.00063233636090933,.00047664798895648]],[87600,[-18.282602096834,-23.30503958666,-1.766620508028],[.0025567245263557,-.0019902940754171,-.0013943491701082]],[116800,[43.873338744526,7.700705617215,-10.814273666425],[.00023174803055677,.0022402163127924,.00062988756452032]],[146e3,[7.392949027906,44.382678951534,11.629500214854],[-.002193281545383,-.00021751799585364,.00059556516201114]],[175200,[-24.981690229261,-16.204012851426,2.466457544298],[.001819398914958,-.0026765419531201,-.0013848283502247]],[204400,[42.530187039511,.845935508021,-12.554907527683],[.00065059779150669,.0022725657282262,.00051133743202822]],[233600,[13.999526486822,44.462363044894,9.669418486465],[-.0021079296569252,.00017533423831993,.00069128485798076]],[262800,[-29.184024803031,-7.371243995762,6.493275957928],[.00093581363109681,-.0030610357109184,-.0012364201089345]],[292e3,[39.831980671753,-6.078405766765,-13.909815358656],[.0011117769689167,.0022362097830152,.00036230548231153]],[321200,[20.294955108476,43.417190420251,7.450091985932],[-.0019742157451535,.00053102050468554,.00075938408813008]],[350400,[-30.66999230216,2.318743558955,9.973480913858],[45605107450676e-18,-.0031308219926928,-.00099066533301924]],[379600,[35.626122155983,-12.897647509224,-14.777586508444],[.0016015684949743,.0021171931182284,.00018002516202204]],[408800,[26.133186148561,41.232139187599,5.00640132622],[-.0017857704419579,.00086046232702817,.00080614690298954]],[438e3,[-29.57674022923,11.863535943587,12.631323039872],[-.00072292830060955,-.0029587820140709,-.000708242964503]],[467200,[29.910805787391,-19.159019294,-15.013363865194],[.0020871080437997,.0018848372554514,-38528655083926e-18]],[496400,[31.375957451819,38.050372720763,2.433138343754],[-.0015546055556611,.0011699815465629,.00083565439266001]],[525600,[-26.360071336928,20.662505904952,14.414696258958],[-.0013142373118349,-.0026236647854842,-.00042542017598193]],[554800,[22.599441488648,-24.508879898306,-14.484045731468],[.0025454108304806,.0014917058755191,-.00030243665086079]],[584e3,[35.877864013014,33.894226366071,-.224524636277],[-.0012941245730845,.0014560427668319,.00084762160640137]],[613200,[-21.538149762417,28.204068269761,15.321973799534],[-.001731211740901,-.0021939631314577,-.0001631691327518]],[642400,[13.971521374415,-28.339941764789,-13.083792871886],[.0029334630526035,.00091860931752944,-.00059939422488627]],[671600,[39.526942044143,28.93989736011,-2.872799527539],[-.0010068481658095,.001702113288809,.00083578230511981]],[700800,[-15.576200701394,34.399412961275,15.466033737854],[-.0020098814612884,-.0017191109825989,70414782780416e-18]],[73e4,[4.24325283709,-30.118201690825,-10.707441231349],[.0031725847067411,.0001609846120227,-.00090672150593868]]];class Ie{constructor(e,t,r){this.x=e,this.y=t,this.z=r}clone(){return new Ie(this.x,this.y,this.z)}ToAstroVector(e){return new Ze(this.x,this.y,this.z,e)}static zero(){return new Ie(0,0,0)}quadrature(){return this.x*this.x+this.y*this.y+this.z*this.z}add(e){return new Ie(this.x+e.x,this.y+e.y,this.z+e.z)}sub(e){return new Ie(this.x-e.x,this.y-e.y,this.z-e.z)}incr(e){this.x+=e.x,this.y+=e.y,this.z+=e.z}decr(e){this.x-=e.x,this.y-=e.y,this.z-=e.z}mul(e){return new Ie(e*this.x,e*this.y,e*this.z)}div(e){return new Ie(this.x/e,this.y/e,this.z/e)}mean(e){return new Ie((this.x+e.x)/2,(this.y+e.y)/2,(this.z+e.z)/2)}neg(){return new Ie(-this.x,-this.y,-this.z)}}class jn{constructor(e,t,r){this.tt=e,this.r=t,this.v=r}clone(){return new jn(this.tt,this.r,this.v)}sub(e){return new jn(this.tt,this.r.sub(e.r),this.v.sub(e.v))}}function A2(n){let[e,[t,r,i],[o,a,s]]=n;return new jn(e,new Ie(t,r,i),new Ie(o,a,s))}function Qi(n,e,t,r){const i=r/(r+w0),o=Ms(En[t],e);return n.r.incr(o.r.mul(i)),n.v.incr(o.v.mul(i)),o}function Pr(n,e,t){const r=t.sub(n),i=r.quadrature();return r.mul(e/(i*Math.sqrt(i)))}class ua{constructor(e){let t=new jn(e,new Ie(0,0,0),new Ie(0,0,0));this.Jupiter=Qi(t,e,x.Jupiter,Es),this.Saturn=Qi(t,e,x.Saturn,Ts),this.Uranus=Qi(t,e,x.Uranus,ws),this.Neptune=Qi(t,e,x.Neptune,vs),this.Jupiter.r.decr(t.r),this.Jupiter.v.decr(t.v),this.Saturn.r.decr(t.r),this.Saturn.v.decr(t.v),this.Uranus.r.decr(t.r),this.Uranus.v.decr(t.v),this.Neptune.r.decr(t.r),this.Neptune.v.decr(t.v),this.Sun=new jn(e,t.r.mul(-1),t.v.mul(-1))}Acceleration(e){let t=Pr(e,w0,this.Sun.r);return t.incr(Pr(e,Es,this.Jupiter.r)),t.incr(Pr(e,Ts,this.Saturn.r)),t.incr(Pr(e,ws,this.Uranus.r)),t.incr(Pr(e,vs,this.Neptune.r)),t}}class da{constructor(e,t,r,i){this.tt=e,this.r=t,this.v=r,this.a=i}clone(){return new da(this.tt,this.r.clone(),this.v.clone(),this.a.clone())}}class dl{constructor(e,t){this.bary=e,this.grav=t}}function Mo(n,e,t,r){return new Ie(e.x+n*(t.x+n*r.x/2),e.y+n*(t.y+n*r.y/2),e.z+n*(t.z+n*r.z/2))}function jc(n,e,t){return new Ie(e.x+n*t.x,e.y+n*t.y,e.z+n*t.z)}function Is(n,e){const t=n-e.tt,r=new ua(n),i=Mo(t,e.r,e.v,e.a),o=r.Acceleration(i).mean(e.a),a=Mo(t,e.r,e.v,o),s=e.v.add(o.mul(t)),c=r.Acceleration(a),u=new da(n,a,s,c);return new dl(r,u)}const M2=[];function ll(n,e){const t=Math.floor(n);return t<0?0:t>=e?e-1:t}function Cs(n){const e=A2(n),t=new ua(e.tt),r=e.r.add(t.Sun.r),i=e.v.add(t.Sun.v),o=t.Acceleration(r),a=new da(e.tt,r,i,o);return new dl(t,a)}function x2(n,e){const t=On[0][0];if(e<t||e>On[xs-1][0])return null;const r=ll((e-t)/D2,xs-1);if(!n[r]){const o=n[r]=[];o[0]=Cs(On[r]).grav,o[Xt-1]=Cs(On[r+1]).grav;let a,s=o[0].tt;for(a=1;a<Xt-1;++a)o[a]=Is(s+=Ao,o[a-1]).grav;s=o[Xt-1].tt;var i=[];for(i[Xt-1]=o[Xt-1],a=Xt-2;a>0;--a)i[a]=Is(s-=Ao,i[a+1]).grav;for(a=Xt-2;a>0;--a){const c=a/(Xt-1);o[a].r=o[a].r.mul(1-c).add(i[a].r.mul(c)),o[a].v=o[a].v.mul(1-c).add(i[a].v.mul(c)),o[a].a=o[a].a.mul(1-c).add(i[a].a.mul(c))}}return n[r]}function Wc(n,e,t){let r=Cs(n);const i=Math.ceil((e-r.grav.tt)/t);for(let o=0;o<i;++o)r=Is(o+1===i?e:r.grav.tt+t,r.grav);return r}function hl(n,e){let t,r,i;const o=x2(M2,n.tt);if(o){const a=ll((n.tt-o[0].tt)/Ao,Xt-1),s=o[a],c=o[a+1],u=s.a.mean(c.a),d=Mo(n.tt-s.tt,s.r,s.v,u),l=jc(n.tt-s.tt,s.v,u),f=Mo(n.tt-c.tt,c.r,c.v,u),g=jc(n.tt-c.tt,c.v,u),p=(n.tt-s.tt)/Ao;t=d.mul(1-p).add(f.mul(p)),r=l.mul(1-p).add(g.mul(p))}else{let a;n.tt<On[0][0]?a=Wc(On[0],n.tt,-146):a=Wc(On[xs-1],n.tt,146),t=a.grav.r,r=a.grav.v,i=a.bary}return i||(i=new ua(n.tt)),t=t.sub(i.Sun.r),r=r.sub(i.Sun.v),new Tn(t.x,t.y,t.z,r.x,r.y,r.z,n)}function xo(n,e){var t=tt(e);if(n in En)return eo(En[n],t);if(n===x.Pluto){const a=hl(t);return new Ze(a.x,a.y,a.z,t)}if(n===x.Sun)return new Ze(0,0,0,t);if(n===x.Moon){var r=eo(En.Earth,t),i=mi(t);return new Ze(r.x+i.x,r.y+i.y,r.z+i.z,t)}if(n===x.EMB){const a=eo(En.Earth,t),s=mi(t),c=1+el;return new Ze(a.x+s.x/c,a.y+s.y/c,a.z+s.z/c,t)}if(n===x.SSB)return R2(t);const o=v0(n);if(o){const a=new T2(o.dec,15*o.ra,o.dist);return k2(a,t)}throw`HelioVector: Unknown body "${n}"`}function I2(n,e){let t=e,r=0;for(let i=0;i<10;++i){const o=n(t),a=o.Length()/Xd;if(a>1)throw"Object is too distant for light-travel solver.";const s=e.AddDays(-a);if(r=Math.abs(s.tt-t.tt),r<1e-9)return o;t=s}throw`Light-travel time solver did not converge: dt = ${r}`}class C2{constructor(e,t,r,i){this.observerBody=e,this.targetBody=t,this.aberration=r,this.observerPos=i}Position(e){this.aberration&&(this.observerPos=xo(this.observerBody,e));const t=xo(this.targetBody,e);return new Ze(t.x-this.observerPos.x,t.y-this.observerPos.y,t.z-this.observerPos.z,e)}}function N2(n,e,t,r){const i=tt(n);if(v0(t)){const s=xo(t,i);{const c=L2(e,i),u=new Ze(s.x-c.x,s.y-c.y,s.z-c.z,i),d=Xd/u.Length();return new Ze(u.x+c.vx/d,u.y+c.vy/d,u.z+c.vz/d,i)}}let o;o=new Ze(0,0,0,i);const a=new C2(e,t,r,o);return I2(s=>a.Position(s),i)}function ml(n,e,t){const r=tt(e);switch(n){case x.Earth:return new Ze(0,0,0,r);case x.Moon:return mi(r);default:const i=N2(r,x.Earth,n,t);return i.t=r,i}}function O2(n,e){return new Tn(n.r.x,n.r.y,n.r.z,n.v.x,n.v.y,n.v.z,e)}function L2(n,e){const t=tt(e);switch(n){case x.Sun:return new Tn(0,0,0,0,0,0,t);case x.SSB:const r=new ua(t.tt);return new Tn(-r.Sun.r.x,-r.Sun.r.y,-r.Sun.r.z,-r.Sun.v.x,-r.Sun.v.y,-r.Sun.v.z,t);case x.Mercury:case x.Venus:case x.Earth:case x.Mars:case x.Jupiter:case x.Saturn:case x.Uranus:case x.Neptune:const i=Ms(En[n],t.tt);return O2(i,t);case x.Pluto:return hl(t);case x.Moon:case x.EMB:const o=Ms(En.Earth,t.tt),a=n==x.Moon?cl(t):b2(t);return new Tn(a.x+o.r.x,a.y+o.r.y,a.z+o.r.z,a.vx+o.v.x,a.vy+o.v.y,a.vz+o.v.z,t);default:if(v0(n)){const s=xo(n,t);return new Tn(s.x,s.y,s.z,0,0,0,t)}throw`HelioState: Unsupported body "${n}"`}}function P2(n,e,t,r,i){let o=(i+t)/2-r,a=(i-t)/2,s=r,c;if(o==0){if(a==0||(c=-s/a,c<-1||c>1))return null}else{let l=a*a-4*o*s;if(l<=0)return null;let f=Math.sqrt(l),g=(-a+f)/(2*o),p=(-a-f)/(2*o);if(-1<=g&&g<=1){if(-1<=p&&p<=1)return null;c=g}else if(-1<=p&&p<=1)c=p;else return null}let u=n+c*e,d=(2*o*c+a)/e;return{t:u,df_dt:d}}function U2(n,e,t,r){const i=de(r.dt_tolerance_seconds||1),o=Math.abs(i/Qd);let a=r.init_f1||n(e),s=r.init_f2||n(t),c=NaN,u=0,d=r.iter_limit||20,l=!0;for(;;){if(++u>d)throw"Excessive iteration in Search()";let f=l2(e,t,.5),g=f.ut-e.ut;if(Math.abs(g)<o)return f;l?c=n(f):l=!0;let p=P2(f.ut,t.ut-f.ut,a,c,s);if(p){let y=tt(p.t),_=n(y);if(p.df_dt!==0){if(Math.abs(_/p.df_dt)<o)return y;let T=1.2*Math.abs(_/p.df_dt);if(T<g/10){let v=y.AddDays(-T),S=y.AddDays(+T);if((v.ut-e.ut)*(v.ut-t.ut)<0&&(S.ut-e.ut)*(S.ut-t.ut)<0){let D=n(v),R=n(S);if(D<0&&R>=0){a=D,s=R,e=v,t=S,c=_,l=!1;continue}}}}}if(a<0&&c>=0){t=f,s=c;continue}if(c<0&&s>=0){e=f,a=c;continue}return null}}function Bc(n,e,t,r,i,o){if(!Number.isFinite(o)||o<-90||o>90)throw`Invalid altitude angle: ${o}`;return F2(n,e,t,r,i,0,o)}class $2{constructor(e,t,r,i){this.tx=e,this.ty=t,this.ax=r,this.ay=i}}function Ns(n,e,t,r,i,o,a){if(o<0&&a>=0)return new $2(r,i,o,a);if(o>=0&&a<0)return null;if(n>17)throw"Excessive recursion in rise/set ascent search.";const s=i.ut-r.ut;if(s*Qd<1||Math.min(Math.abs(o),Math.abs(a))>t*(s/2))return null;const u=new cn((r.ut+i.ut)/2),d=e(u);return Ns(1+n,e,t,r,u,o,d)||Ns(1+n,e,t,u,i,d,a)}function H2(n,e){if(e<-90||e>90)throw`Invalid geographic latitude: ${e}`;let t,r;switch(n){case x.Moon:t=4.5,r=8.2;break;case x.Sun:t=.8,r=.5;break;case x.Mercury:t=-1.6,r=1;break;case x.Venus:t=-.8,r=.6;break;case x.Mars:t=-.5,r=.4;break;case x.Jupiter:case x.Saturn:case x.Uranus:case x.Neptune:case x.Pluto:t=-.2,r=.2;break;case x.Star1:case x.Star2:case x.Star3:case x.Star4:case x.Star5:case x.Star6:case x.Star7:case x.Star8:t=-.008,r=.008;break;default:throw`Body not allowed for altitude search: ${n}`}const i=me*e;return Math.abs((360/Jd-t)*Math.cos(i))+Math.abs(r*Math.sin(i))}function F2(n,e,t,r,i,o,a){if(Oi(e),de(i),de(o),de(a),a<-90||a>90)throw`Invalid target altitude angle: ${a}`;const s=H2(n,e.latitude);function c(p){const y=b0(n,p,e,!0,!0),T=S0(p,e,y.ra,y.dec).altitude+Do*Math.asin(o/y.dist);return t*(T-a)}const u=tt(r);let d=u,l=u,f=c(d),g=f;for(;;){i<0?(d=l.AddDays(-.42),f=c(d)):(l=d.AddDays(.42),g=c(l));const p=Ns(0,c,s,d,l,f,g);if(p){const y=U2(c,p.tx,p.ty,{dt_tolerance_seconds:.1,init_f1:p.ax,init_f2:p.ay});if(y){if(i<0){if(y.ut<u.ut+i)return null}else if(y.ut>u.ut+i)return null;return y}throw`Rise/set search failed after finding ascent: t1=${d}, t2=${l}, a1=${f}, a2=${g}`}if(i<0){if(d.ut<u.ut+i)return null;l=d,g=f}else{if(l.ut>u.ut+i)return null;d=l,f=g}}}class G2{constructor(e,t){this.time=e,this.hor=t}}function z2(n,e,t,r,i=1){Oi(e);let o=tt(r),a=0;if(n===x.Earth)throw"Cannot search for hour angle of the Earth.";if(de(t),de(i),i===0)throw"Direction must be positive or negative.";for(;;){++a;let s=ca(o),c=b0(n,o,e,!0,!0),u=(t+c.ra-e.longitude/15-s)%24;if(a===1?i>0?u<0&&(u+=24):u>0&&(u-=24):u<-12?u+=24:u>12&&(u-=24),Math.abs(u)*3600<.1){const l=S0(o,e,c.ra,c.dec,"normal");return new G2(o,l)}let d=u/24*Jd;o=o.AddDays(d)}}var Vc;(function(n){n[n.Pericenter=0]="Pericenter",n[n.Apocenter=1]="Apocenter"})(Vc||(Vc={}));function Y2(n,e){return new hi([[e.rot[0][0]*n.rot[0][0]+e.rot[1][0]*n.rot[0][1]+e.rot[2][0]*n.rot[0][2],e.rot[0][1]*n.rot[0][0]+e.rot[1][1]*n.rot[0][1]+e.rot[2][1]*n.rot[0][2],e.rot[0][2]*n.rot[0][0]+e.rot[1][2]*n.rot[0][1]+e.rot[2][2]*n.rot[0][2]],[e.rot[0][0]*n.rot[1][0]+e.rot[1][0]*n.rot[1][1]+e.rot[2][0]*n.rot[1][2],e.rot[0][1]*n.rot[1][0]+e.rot[1][1]*n.rot[1][1]+e.rot[2][1]*n.rot[1][2],e.rot[0][2]*n.rot[1][0]+e.rot[1][2]*n.rot[1][1]+e.rot[2][2]*n.rot[1][2]],[e.rot[0][0]*n.rot[2][0]+e.rot[1][0]*n.rot[2][1]+e.rot[2][0]*n.rot[2][2],e.rot[0][1]*n.rot[2][0]+e.rot[1][1]*n.rot[2][1]+e.rot[2][1]*n.rot[2][2],e.rot[0][2]*n.rot[2][0]+e.rot[1][2]*n.rot[2][1]+e.rot[2][2]*n.rot[2][2]]])}function k2(n,e){e=tt(e);const t=n.lat*me,r=n.lon*me,i=n.dist*Math.cos(t);return new Ze(i*Math.cos(r),i*Math.sin(r),n.dist*Math.sin(t),e)}function j2(n,e){let t;if(de(e),e<-90||e>90)return 0;if(n==="normal"||n==="jplhor"){let r=e;r<-1&&(r=-1),t=1.02/Math.tan((r+10.3/(r+5.11))*me)/60,n==="normal"&&e<-1&&(t*=(e+90)/89)}else if(!n)t=0;else throw`Invalid refraction option: ${n}`;return t}function W2(n,e){return new Ze(n.rot[0][0]*e.x+n.rot[1][0]*e.y+n.rot[2][0]*e.z,n.rot[0][1]*e.x+n.rot[1][1]*e.y+n.rot[2][1]*e.z,n.rot[0][2]*e.x+n.rot[1][2]*e.y+n.rot[2][2]*e.z,e.t)}function B2(n){n=tt(n);const e=il(n,St.From2000),t=ol(n,St.From2000);return Y2(e,t)}var qc;(function(n){n.Penumbral="penumbral",n.Partial="partial",n.Annular="annular",n.Total="total"})(qc||(qc={}));var Zc;(function(n){n[n.Invalid=0]="Invalid",n[n.Ascending=1]="Ascending",n[n.Descending=-1]="Descending"})(Zc||(Zc={}));const Io=24*60,V2=24*60*60*1e3,q2=Math.PI/12,Z2=.2666,I3={latitude:51.256,longitude:7.15},C3="Europe/Berlin",X2=64,In=new Map,Os=n=>{const e=vn(n.minutes,0,Io-1),t=Math.floor(e),r=n1({...n,dayOfYear:vn(Math.round(n.dayOfYear),1,Oo(n.year)),minutes:t});return new Date(r.getTime()+(e-t)*6e4)},N3=(n,e)=>r0(n,e),fl=({latitude:n,longitude:e})=>new sl(n,e,0),K2=(n,e)=>{const t=r0(n,e.timeZone);return t.year===e.year&&t.dayOfYear===e.dayOfYear},Pa=(n,e)=>!n||!K2(n.date,e)?null:r0(n.date,e.timeZone).minutes+n.date.getUTCSeconds()/60+n.date.getUTCMilliseconds()/6e4,Q2=n=>{const e=new cn(n),t=W2(B2(e),ml(x.Sun,e,!0)),r=y2(e)*q2,i=Math.cos(r),o=Math.sin(r),a=i*t.x+o*t.y,s=-o*t.x+i*t.y,c=1/Math.hypot(a,s,t.z);return[a*c,s*c,t.z*c]},J2=(n,e,t)=>{const{year:r,dayOfYear:i}=n,o=vn(Math.round(i),1,Oo(r)),a={...n,year:r,dayOfYear:o},s=Os({...a,minutes:0}),c=Wl({year:r,dayOfYear:o},1),d=(Os({...a,...c,minutes:0}).getTime()-s.getTime())/V2,l=fl(e),f=Pa(Bc(x.Sun,l,1,s,d,t),a),g=Pa(Bc(x.Sun,l,-1,s,d,t),a),p=z2(x.Sun,l,0,s,1),y=Pa(p.time,a)??Io/2,_=e3({...a,minutes:0},e).elevationDegrees>=t;return{sunriseMinutes:f??(_?0:y),solarNoonMinutes:y,sunsetMinutes:g??(_?Io:y),polarDay:f===null&&g===null&&_,polarNight:f===null&&g===null&&!_}},O3=(n,e,t)=>Array.from({length:Oo(n.year)},(r,i)=>gl({...n,dayOfYear:i+1},e,t)),gl=(n,e,{minimumElevationDegrees:t=Z2}={})=>{const r=JSON.stringify([n.year,n.dayOfYear,n.timeZone,e.latitude,e.longitude,t]),i=In.get(r);if(i)return In.delete(r),In.set(r,i),i;const o=Object.freeze(J2(n,e,t));if(In.set(r,o),In.size>X2){const a=In.keys().next().value;a!==void 0&&In.delete(a)}return o},L3=(n,e)=>{const t=vn(Math.round(n.dayOfYear),1,Oo(n.year)),r=gl({...n,dayOfYear:t},e);if(r.polarNight)return null;const i=r.polarDay?0:Math.ceil(r.sunriseMinutes),o=r.polarDay?Io-1:Math.floor(r.sunsetMinutes);return i>o?null:{year:n.year,dayOfYear:t,minutes:vn(Math.round(n.minutes),i,o),timeZone:n.timeZone}},e3=(n,e)=>{const t=Os(n),r=fl(e),i=b0(x.Sun,t,r,!0,!0),o=S0(t,r,i.ra,i.dec);return{instant:t,azimuthDegrees:o.azimuth,elevationDegrees:o.altitude}},Xc=new Ln("#fff2d8"),Kc=1e-8,Ua=3e4,Qc=-1e3,Jc=1e7,t3=5e6,n3=8e6,r3=new M,fi=n=>Number.isFinite(n.x)&&Number.isFinite(n.y)&&Number.isFinite(n.z),eu=n=>!Number.isFinite(n.longitude)||Math.abs(n.longitude)>180?"longitude must be a finite value in degrees within [-180, 180]":!Number.isFinite(n.latitude)||Math.abs(n.latitude)>90?"latitude must be a finite value in degrees within [-90, 90]":!Number.isFinite(n.altitudeMeters)||n.altitudeMeters<Qc||n.altitudeMeters>Jc?`altitudeMeters must be within [${Qc}, ${Jc}]`:null,P3=(n,e,t)=>{if(!Number.isFinite(n.getTime()))return"instant must be a valid Date";const r=eu(e);if(r)return`observer ${r}`;if(!t)return null;const i=eu(t.observer);return i?`sky reference observer ${i}`:fi(t.scenePosition)?null:"sky reference scenePosition must contain finite metre coordinates"},pl=n=>{if(!fi(n.directionToSunECEF))return"sun direction contains a non-finite component";if(Math.abs(n.directionToSunECEF.length()-1)>1e-6)return"sun direction is not normalized";if(!n.ecefToSceneMatrix.elements.every(Number.isFinite))return"ECEF-to-scene matrix contains a non-finite component";const e=n.ecefToSceneMatrix.elements,t=[new M(e[0],e[4],e[8]),new M(e[1],e[5],e[9]),new M(e[2],e[6],e[10])];if(t.some(o=>Math.abs(o.length()-1)>1e-6)||Math.abs(t[0].dot(t[1]))>1e-6||Math.abs(t[0].dot(t[2]))>1e-6||Math.abs(t[1].dot(t[2]))>1e-6||Math.abs(e[3])>1e-12||Math.abs(e[7])>1e-12||Math.abs(e[11])>1e-12||Math.abs(e[12])>1e-12||Math.abs(e[13])>1e-12||Math.abs(e[14])>1e-12||Math.abs(e[15]-1)>1e-12)return"ECEF-to-scene matrix is not an affine orthonormal rotation";const r=n.ecefToSceneMatrix.determinant();if(!Number.isFinite(r)||Math.abs(r-1)>1e-6)return"ECEF-to-scene matrix is not a proper orthonormal rotation";if(!fi(n.ellipsoidCenterECEF))return"ellipsoid center contains a non-finite component";const i=n.ellipsoidCenterECEF.length();return i<t3||i>n3?"ellipsoid center is outside the plausible WGS84 distance range":null},U3=n=>{var t;const e=pl(n.skyFrame);return e||(fi(n.directionToSun)?Math.abs(n.directionToSun.length()-1)>1e-6?"scene sun direction is not normalized":![n.color.r,n.color.g,n.color.b].every(Number.isFinite)||![n.radiance.r,n.radiance.g,n.radiance.b].every(Number.isFinite)||!Number.isFinite(n.relativeIntensity)||n.relativeIntensity<0||n.relativeIntensity>1||!Number.isFinite(n.azimuthDegrees)||!Number.isFinite(n.elevationDegrees)?"sunlight color, intensity, or angles contain invalid values":(t=n.skyIrradianceCoefficients)!=null&&t.some(r=>!fi(r))?"sky irradiance contains a non-finite coefficient":null:"scene sun direction contains a non-finite component")},$a={useTransmittanceLut:!0,useIrradianceLut:!0},i3=({east:n,north:e,up:t})=>new Ne().set(n.x,n.y,n.z,0,t.x,t.y,t.z,0,-e.x,-e.y,-e.z,0,0,0,0,1);function R0({longitude:n,latitude:e,altitudeMeters:t}){const r=new Td(gs(n),gs(e),t).toECEF(),i=new M,o=new M,a=new M;return Yt.WGS84.getEastNorthUpVectors(r,i,o,a),{observerECEF:r,east:i,north:o,up:a}}const yl=(n,{east:e,north:t,up:r},i)=>i.set(n.dot(e),n.dot(r),-n.dot(t)).normalize(),_l=(n,e,t)=>{const r=t?R0(t.observer):e,i=i3(r);t!=null&&t.sceneFromLocal&&i.premultiply(t.sceneFromLocal);const o=i.clone().invert(),a=((t==null?void 0:t.scenePosition)??new M).clone().applyMatrix4(o).sub(r.observerECEF);return{directionToSunECEF:n.clone(),ecefToSceneMatrix:i,ellipsoidCenterECEF:a}},o3=(n,e,{observerECEF:t,east:r,north:i,up:o})=>n!=null&&n.irradianceTexture?(n.worldToECEFMatrix.makeBasis(r,o,r3.copy(i).negate()).setPosition(t),n.sunDirection.copy(e),n.position.set(0,0,0),n.updateMatrixWorld(!0),n.update(),n.sh.coefficients.map(a=>a.clone())):null,El=n=>{const e=O0(Math.asin(vn(n.y,-1,1)));return{azimuthDegrees:(O0(Math.atan2(n.x,-n.z))+360)%360,elevationDegrees:e}},$3=(n,e)=>{const t=R0(e.observer),r=yl(n.skyFrame.directionToSunECEF,t,new M);return e.sceneFromLocal&&r.transformDirection(e.sceneFromLocal),{...n,directionToSun:r,...El(r),skyFrame:_l(n.skyFrame.directionToSunECEF,t,e)}},a3=(n,e,t,r=null,i)=>{const o=R0(e),{observerECEF:a,up:s}=o,c=new M(...Q2(n)),u=yl(c,o,new M);i!=null&&i.sceneFromLocal&&u.transformDirection(i.sceneFromLocal);const d=_l(c,o,i),l=o3(r,c,o),{azimuthDegrees:f,elevationDegrees:g}=El(u);if(!t){const S=Math.sqrt(vn(u.y,0,1));return{directionToSun:u,color:Xc.clone(),relativeIntensity:S,radiance:Xc.clone().multiplyScalar(S),atmosphericTransmittanceReady:!1,atmosphericIrradianceReady:l!==null,skyIrradianceCoefficients:l,azimuthDegrees:f,elevationDegrees:g,skyFrame:d}}const p=Hc(t,a,c,new Ln,{ellipsoid:Yt.WGS84,correctAltitude:!0}),y=Hc(t,a,s,new Ln,{ellipsoid:Yt.WGS84,correctAltitude:!0}),_=Math.max(p.r,p.g,p.b,0),T=Math.max(y.r,y.g,y.b,Kc),v=_>Kc?p.clone().multiplyScalar(1/_):new Ln(0,0,0);return{directionToSun:u,color:v,relativeIntensity:vn(_/T,0,1),radiance:p,atmosphericTransmittanceReady:!0,atmosphericIrradianceReady:l!==null,skyIrradianceCoefficients:l,azimuthDegrees:f,elevationDegrees:g,skyFrame:d}};class H3{constructor(){Le(this,"transmittanceTexture",null);Le(this,"irradianceTexture",null);Le(this,"scatteringTexture",null);Le(this,"skyLightProbe",new Wf({ellipsoid:Yt.WGS84,correctAltitude:!0}));Le(this,"transmittanceLoading",!1);Le(this,"irradianceLoading",!1);Le(this,"scatteringLoading",!1);Le(this,"transmittanceRetryAt",0);Le(this,"irradianceRetryAt",0);Le(this,"scatteringRetryAt",0);Le(this,"disposed",!1)}get ready(){return this.transmittanceTexture!==null&&this.irradianceTexture!==null}get skyReady(){return this.skyTextures!==null}get skyTextures(){return!this.transmittanceTexture||!this.irradianceTexture||!this.scatteringTexture?null:{transmittanceTexture:this.transmittanceTexture,irradianceTexture:this.irradianceTexture,scatteringTexture:this.scatteringTexture}}get isSkyLoading(){return this.transmittanceLoading||this.irradianceLoading||this.scatteringLoading}isLoadingFor(e=$a){return e.useTransmittanceLut&&this.transmittanceLoading||e.useIrradianceLut&&this.irradianceLoading}ensure(e,t=$a){if(this.disposed)return;const r=()=>{this.isLoadingFor(t)||e()};t.useTransmittanceLut&&this.ensureTransmittance(r),t.useIrradianceLut&&this.ensureIrradiance(r)}ensureSky(e){if(this.disposed||this.skyReady)return;let t=!1;const r=()=>{!t&&!this.isSkyLoading&&(t=!0,e())};this.ensureTransmittance(r),this.ensureIrradiance(r),this.ensureScattering(r)}ensureTransmittance(e){this.transmittanceTexture||this.transmittanceLoading||Date.now()<this.transmittanceRetryAt||(this.transmittanceLoading=!0,new Aa(N0,Ma,{width:na,height:ra}).load(`${xa}/transmittance.bin`,t=>{if(this.transmittanceLoading=!1,this.disposed){t.dispose();return}this.transmittanceRetryAt=0,this.transmittanceTexture=t,e()},void 0,t=>{this.transmittanceLoading=!1,this.disposed||(this.transmittanceRetryAt=Date.now()+Ua,console.error("[SHADOW] Takram transmittance LUT failed",t),e())}))}ensureIrradiance(e){this.irradianceTexture||this.irradianceLoading||Date.now()<this.irradianceRetryAt||(this.irradianceLoading=!0,new Aa(N0,Ma,{width:ea,height:ta}).load(`${xa}/irradiance.bin`,t=>{if(this.irradianceLoading=!1,this.disposed){t.dispose();return}this.irradianceRetryAt=0,this.irradianceTexture=t,this.skyLightProbe.irradianceTexture=t,e()},void 0,t=>{this.irradianceLoading=!1,this.disposed||(this.irradianceRetryAt=Date.now()+Ua,console.error("[SHADOW] Takram irradiance LUT failed",t),e())}))}ensureScattering(e){this.scatteringTexture||this.scatteringLoading||Date.now()<this.scatteringRetryAt||(this.scatteringLoading=!0,new Aa(Hl,Ma,{width:mf,height:ff,depth:gf}).load(`${xa}/scattering.bin`,t=>{if(this.scatteringLoading=!1,this.disposed){t.dispose();return}this.scatteringRetryAt=0,this.scatteringTexture=t,e()},void 0,t=>{this.scatteringLoading=!1,this.disposed||(this.scatteringRetryAt=Date.now()+Ua,console.error("[SHADOW] Takram scattering LUT failed",t),e())}))}evaluate(e,t,r=$a,i){return a3(e,t,r.useTransmittanceLut?this.transmittanceTexture:null,r.useIrradianceLut?this.skyLightProbe:null,i)}dispose(){var e,t,r;this.disposed||(this.disposed=!0,this.transmittanceLoading=!1,this.irradianceLoading=!1,this.scatteringLoading=!1,this.transmittanceRetryAt=0,this.irradianceRetryAt=0,this.scatteringRetryAt=0,(e=this.transmittanceTexture)==null||e.dispose(),(t=this.irradianceTexture)==null||t.dispose(),(r=this.scatteringTexture)==null||r.dispose(),this.transmittanceTexture=null,this.irradianceTexture=null,this.scatteringTexture=null,this.skyLightProbe.irradianceTexture=null,this.skyLightProbe.sh.zero())}}const s3="shadow-simulation-atmospheric-sky",c3=2,u3=-100,to="carmaOutputToSrgb",Ha="carmaDisplayExposure",d3=new M,l3=new M;class h3 extends sa{constructor(){super(...arguments);Le(this,"observerScenePosition",new M);Le(this,"hasObserverScenePosition",!1);Le(this,"viewCamera",null)}copyCameraSettings(t){if(super.copyCameraSettings(t),!this.hasObserverScenePosition)return;const r=this.uniforms;if(r.cameraPosition.value.copy(this.observerScenePosition),!this.correctAltitude)return;const i=d3.copy(this.observerScenePosition).applyMatrix4(r.worldToECEFMatrix.value);ia(i,this.atmosphere.bottomRadius,this.ellipsoid,r.altitudeCorrection.value)}onBeforeRender(t,r,i,o,a,s){super.onBeforeRender(t,r,this.viewCamera??i,o,a,s)}}const m3=n=>{n.uniforms.toneMappingExposure=new A(1),n.uniforms[to]=new A(!1),n.uniforms[Ha]=new A(c3),n.fragmentShader=n.fragmentShader.replace("precision highp sampler3D;",`precision highp sampler3D;

uniform bool ${to};
uniform float ${Ha};
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
  if (RayIntersectsGround(
    ATMOSPHERE,
    length(cameraPosition),
    dot(cameraPosition, rayDirection) / length(cameraPosition)
  )) {
    vec3 localUp = normalize(cameraPosition);
    float radius = max(length(cameraPosition), ATMOSPHERE.bottom_radius);
    float tangentMu = -sqrt(max(
      0.0,
      1.0 - ATMOSPHERE.bottom_radius * ATMOSPHERE.bottom_radius / (radius * radius)
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
  }`).replace("outputColor.a = 1.0;",`outputColor.rgb *= ${Ha};
  outputColor.a = 1.0;
  if (${to}) {
    // SkyMaterial is raw GLSL: match terrain's AgX on the display target.
    // Offscreen samples stay linear HDR until the shared final composite.
    outputColor.rgb = AgXToneMapping(outputColor.rgb);
    outputColor = carmaLinearToSrgb(outputColor);
  }`)},F3=n=>{const e=new h3({groundAlbedo:n,moon:!1,side:Fl,sun:!0});m3(e),e.depthTest=!1,e.depthWrite=!1;const t=new cu;t.setAttribute("position",new Gl([-1,-1,0,3,-1,0,-1,3,0],3));const r=new su(t,e);return r.name=s3,r.visible=!1,r.frustumCulled=!1,r.renderOrder=u3,r.castShadow=!1,r.receiveShadow=!1,r.onBeforeRender=i=>{e.uniforms.toneMappingExposure.value=i.toneMappingExposure,e.uniforms[to].value=i.getRenderTarget()===null},{mesh:r,update(i,o){return o?pl(i)?!1:(r.visible=!0,e.irradianceTexture=o.irradianceTexture,e.scatteringTexture=o.scatteringTexture,e.transmittanceTexture=o.transmittanceTexture,e.sunDirection.copy(i.directionToSunECEF),e.worldToECEFMatrix.copy(i.ecefToSceneMatrix).invert().setPosition(l3.copy(i.ellipsoidCenterECEF).negate()),!0):(r.visible=!1,!1)},updateViewCamera(i){e.viewCamera=i},updateObserverScenePosition(i){e.observerScenePosition.copy(i),e.hasObserverScenePosition=!0},updateGroundAlbedo(i){e.groundAlbedo.copy(i)},dispose(){t.dispose(),e.dispose()}}},hr={MERCATOR:"mercator",WGS84_ECEF:"wgs84-ecef",LOCAL_SPHERE:"local-sphere"},f3={DHHN2016:"dhhn2016",ELLIPSOIDAL:"ellipsoidal"},G3={TANGENT:"tangent",SPHERE:"sphere",ELLIPSOID:"ellipsoid",QUASIGEOID:"quasigeoid",TERRAIN:"terrain"},z3=n=>n===hr.MERCATOR?0:n===hr.WGS84_ECEF?1:2,Y3=n=>n===f3.ELLIPSOIDAL?1:0,g3=n=>[n[0],n[1]],Tl=(n,e,t,r=new M)=>r.set(t*Math.cos(e)*Math.cos(n),t*Math.cos(e)*Math.sin(n),t*Math.sin(e)),k3=(n,e,t=0)=>{const r=no(n[0]),i=no(n[1]),o=hu(r,i,0),a=Us.MercatorCoordinate.fromLngLat(g3(n),0);return{anchorNormalHeightMeters:t,originLngLat:n,originMercator:a,mercatorUnitsPerMeter:a.meterInMercatorCoordinateUnits(),originEcef:o,ecefToEnuRotation:new lu().setFromMatrix4(zl(o)),sphereRadiusMeters:e,originSphereEcef:Tl(r,i,e)}},j3=(n,e,t)=>{const r=new Us.MercatorCoordinate(n.originMercator.x+e*n.mercatorUnitsPerMeter,n.originMercator.y+t*n.mercatorUnitsPerMeter,0).toLngLat();return[r.lng,r.lat]},p3=(n,e,t,r,i=new M)=>{const o=Us.MercatorCoordinate.fromLngLat([e,t],r);return i.set((o.x-n.originMercator.x)/n.mercatorUnitsPerMeter,(o.z-n.originMercator.z)/n.mercatorUnitsPerMeter,(o.y-n.originMercator.y)/n.mercatorUnitsPerMeter)},y3=(n,e)=>{const t=n.x,r=n.y,i=n.z;return e.set(t,i,-r)},_3=(n,e,t,r,i,o=new M)=>{if(i===hr.MERCATOR)return p3(n,e,t,r,o);const a=no(e),s=no(t),c=i===hr.WGS84_ECEF?hu(a,s,r,o):Tl(a,s,n.sphereRadiusMeters+r,o);return c.sub(i===hr.WGS84_ECEF?n.originEcef:n.originSphereEcef).applyMatrix3(n.ecefToEnuRotation),y3(c,o)},W3=(n,e,t,r=0)=>_3(n,e,t,r,hr.WGS84_ECEF).y-r;export{H3 as A,p3 as B,g3 as C,C3 as D,z3 as E,Y3 as F,Pi as L,A3 as N,G3 as R,f3 as T,hr as a,F3 as b,k3 as c,kl as d,O3 as e,L3 as f,jl as g,e3 as h,Ui as i,$i as j,Hi as k,j3 as l,Fi as m,Gi as n,zi as o,_3 as p,N3 as q,W3 as r,Oo as s,gl as t,Wl as u,c3 as v,$3 as w,P3 as x,U3 as y,I3 as z};
