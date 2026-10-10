var Sl=Object.defineProperty;var Cl=(n,e,t)=>e in n?Sl(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var Pe=(n,e,t)=>Cl(n,typeof e!="symbol"?e+"":e,t);import{ac as nu,aq as xl,aL as Al,dW as ru,dX as D,W as iu,aS as Uo,aN as ou,S as S0,O as Il,M as au,q as su,r as C0,V as C,s as Te,k as Ps,D as Ol,a as Nl,b as Ll,L as x0,dy as Us,dt as Pl,bI as Ul,U as A0,bJ as $l,bK as Fl,bb as Hl,aW as zl,H as cu,F as I0,j as $o,t as kl,dY as Yl,m as uu,v as dr,aB as Gl,a7 as jl,dh as Wl,af as ql}from"./three.module-ChcGQZK5.js";import{c as Dn}from"./clamp-co6UzHBn.js";import{r as O0,d as uo}from"./angles-DdEU-Mjq.js";import"./index-tR1Ti_vO.js";import"./index-CSJjS6Ct.js";import{a as $s}from"./maplibre-gl-BvLDYGIs.js";import{c as du,n as Vl}from"./camera-local-mercator-fit-LFWR2WRR.js";const ki={MAPPED_NOT_SURVEYED:"mapped-not-surveyed"},Yi={NODE:"node",WAY_BOUNDS_CENTER:"way-bounds-center"},Gi={MAPPED:"mapped",MUNICIPALITY_PUBLISHED:"municipality-published"},ji={APPROXIMATE_TERRAIN:"approximate-terrain"},Wi={NRW_DGM1_WCS:"nrw-dgm1-wcs"},qi={CONTAINING_1M_PIXEL_CENTER:"containing-1m-pixel-center"},Vi={AUTHORED_APPROXIMATE_SILHOUETTE:"authored-approximate-silhouette"},a4=[{id:"wdr-nordhelle",name:"WDR Sender Nordhelle",longitudeDegrees:7.7566997,latitudeDegrees:51.1480857,heightMeters:150,groundNormalHeightMeters:662.09,positionEvidence:{status:ki.MAPPED_NOT_SURVEYED,sourceUrl:"https://www.openstreetmap.org/way/462542377",osmVersion:2,osmEditedAt:"2026-05-18T11:57:44Z",method:Yi.WAY_BOUNDS_CENTER},heightEvidence:{status:Gi.MAPPED,sourceUrl:"https://www.openstreetmap.org/way/462542377",conflictingHeightMeters:130,conflictingSourceUrl:"https://www.meinerzhagen.de/fileadmin/user_upload/Meinerzhagen/TourismusFreizeit/Freizeitangebote/Sportliches/Wandern/MVG_Wanderbus_Broschuere_2017_WEB.pdf"},groundEvidence:{status:ji.APPROXIMATE_TERRAIN,source:Wi.NRW_DGM1_WCS,verticalDatum:"DHHN2016",horizontalCrs:"EPSG:25832",sampleMethod:qi.CONTAINING_1M_PIXEL_CENTER,requestBoundsUtm32Meters:[413032,5667022,413042,5667032],sampleCenterUtm32Meters:[413037.5,56670275e-1],sourceUrl:"https://www.wcs.nrw.de/geobasis/wcs_nw_dgm?SERVICE=WCS&VERSION=2.0.1&REQUEST=GetCoverage&COVERAGEID=nw_dgm&FORMAT=image%2Ftiff&SUBSET=x%28413032%2C413042%29&SUBSET=y%285667022%2C5667032%29"},geometryEvidence:Vi.AUTHORED_APPROXIMATE_SILHOUETTE,parts:[{baseHeightMeters:0,heightMeters:76,radiusBottomMeters:4.2,radiusTopMeters:2.2,radialSegments:16,color:"#bcbcb4"},{baseHeightMeters:70,heightMeters:2,radiusBottomMeters:5.4,radiusTopMeters:5.4,radialSegments:16,color:"#888a88"},{baseHeightMeters:76,heightMeters:26,radiusBottomMeters:2.2,radiusTopMeters:1.5,radialSegments:16,color:"#e0ded5"},{baseHeightMeters:86,heightMeters:1.5,radiusBottomMeters:4.5,radiusTopMeters:4.5,radialSegments:16,color:"#8c8c86"},{baseHeightMeters:98,heightMeters:2,radiusBottomMeters:3.5,radiusTopMeters:3.5,radialSegments:16,color:"#e1ddd3"},{baseHeightMeters:102,heightMeters:48,radiusBottomMeters:1.3,radiusTopMeters:.55,radialSegments:12,color:"#eeeae1"},{baseHeightMeters:109,heightMeters:5,radiusBottomMeters:1.2,radiusTopMeters:1.12,radialSegments:12,color:"#ac4f44"},{baseHeightMeters:124,heightMeters:5,radiusBottomMeters:.96,radiusTopMeters:.88,radialSegments:12,color:"#ac4f44"},{baseHeightMeters:139,heightMeters:5,radiusBottomMeters:.72,radiusTopMeters:.64,radialSegments:12,color:"#ac4f44"}]},{id:"nato-nordhelle",name:"NATO-Fernmeldeturm Nordhelle",longitudeDegrees:7.7589117,latitudeDegrees:51.1494475,heightMeters:56,groundNormalHeightMeters:656.77,positionEvidence:{status:ki.MAPPED_NOT_SURVEYED,sourceUrl:"https://www.openstreetmap.org/node/2812442525",osmVersion:4,osmEditedAt:"2023-01-11T18:00:38Z",method:Yi.NODE},heightEvidence:{status:Gi.MAPPED,sourceUrl:"https://www.openstreetmap.org/node/2812442525"},groundEvidence:{status:ji.APPROXIMATE_TERRAIN,source:Wi.NRW_DGM1_WCS,verticalDatum:"DHHN2016",horizontalCrs:"EPSG:25832",sampleMethod:qi.CONTAINING_1M_PIXEL_CENTER,requestBoundsUtm32Meters:[413189,5667171,413199,5667181],sampleCenterUtm32Meters:[413194.5,56671765e-1],sourceUrl:"https://www.wcs.nrw.de/geobasis/wcs_nw_dgm?SERVICE=WCS&VERSION=2.0.1&REQUEST=GetCoverage&COVERAGEID=nw_dgm&FORMAT=image%2Ftiff&SUBSET=x%28413189%2C413199%29&SUBSET=y%285667171%2C5667181%29"},geometryEvidence:Vi.AUTHORED_APPROXIMATE_SILHOUETTE,parts:[{baseHeightMeters:0,heightMeters:43,radiusBottomMeters:3.5,radiusTopMeters:2.2,radialSegments:16,color:"#a6a7a0"},{baseHeightMeters:34,heightMeters:1.5,radiusBottomMeters:5.4,radiusTopMeters:5.4,radialSegments:16,color:"#878a87"},{baseHeightMeters:41,heightMeters:2,radiusBottomMeters:5.1,radiusTopMeters:5.1,radialSegments:16,color:"#caccc6"},{baseHeightMeters:43,heightMeters:13,radiusBottomMeters:1.1,radiusTopMeters:.35,radialSegments:12,color:"#d8d9d1"}]},{id:"ebbegebirge-waldberg",name:"Fernmeldeturm Ebbegebirge / Waldbergsender",longitudeDegrees:7.7732476,latitudeDegrees:51.1467095,heightMeters:150,groundNormalHeightMeters:638.4,positionEvidence:{status:ki.MAPPED_NOT_SURVEYED,sourceUrl:"https://www.openstreetmap.org/node/297576774",osmVersion:10,osmEditedAt:"2026-06-30T15:47:18Z",method:Yi.NODE},heightEvidence:{status:Gi.MAPPED,sourceUrl:"https://www.openstreetmap.org/node/297576774"},groundEvidence:{status:ji.APPROXIMATE_TERRAIN,source:Wi.NRW_DGM1_WCS,verticalDatum:"DHHN2016",horizontalCrs:"EPSG:25832",sampleMethod:qi.CONTAINING_1M_PIXEL_CENTER,requestBoundsUtm32Meters:[414187,5666850,414197,5666860],sampleCenterUtm32Meters:[414192.5,56668555e-1],sourceUrl:"https://www.wcs.nrw.de/geobasis/wcs_nw_dgm?SERVICE=WCS&VERSION=2.0.1&REQUEST=GetCoverage&COVERAGEID=nw_dgm&FORMAT=image%2Ftiff&SUBSET=x%28414187%2C414197%29&SUBSET=y%285666850%2C5666860%29"},geometryEvidence:Vi.AUTHORED_APPROXIMATE_SILHOUETTE,parts:[{baseHeightMeters:0,heightMeters:72,radiusBottomMeters:6,radiusTopMeters:3.1,radialSegments:16,color:"#b7b8b0"},{baseHeightMeters:68,heightMeters:4,radiusBottomMeters:9.5,radiusTopMeters:9.5,radialSegments:20,color:"#9b9c96"},{baseHeightMeters:72,heightMeters:6,radiusBottomMeters:9.5,radiusTopMeters:8,radialSegments:20,color:"#d2d1c8"},{baseHeightMeters:78,heightMeters:27,radiusBottomMeters:3.1,radiusTopMeters:2,radialSegments:16,color:"#b7b8b0"},{baseHeightMeters:86,heightMeters:1.5,radiusBottomMeters:6,radiusTopMeters:6,radialSegments:16,color:"#8d908c"},{baseHeightMeters:98,heightMeters:1.5,radiusBottomMeters:4.5,radiusTopMeters:4.5,radialSegments:16,color:"#8d908c"},{baseHeightMeters:105,heightMeters:45,radiusBottomMeters:1.45,radiusTopMeters:.45,radialSegments:12,color:"#ebe9df"},{baseHeightMeters:112,heightMeters:5,radiusBottomMeters:1.31,radiusTopMeters:1.2,radialSegments:12,color:"#b65248"},{baseHeightMeters:127,heightMeters:5,radiusBottomMeters:.98,radiusTopMeters:.87,radialSegments:12,color:"#b65248"},{baseHeightMeters:142,heightMeters:5,radiusBottomMeters:.64,radiusTopMeters:.53,radialSegments:12,color:"#b65248"}]},{id:"robert-kolb",name:"Robert-Kolb-Turm",longitudeDegrees:7.7561592,latitudeDegrees:51.1484355,heightMeters:18,groundNormalHeightMeters:663.5,positionEvidence:{status:ki.MAPPED_NOT_SURVEYED,sourceUrl:"https://www.openstreetmap.org/way/462542374",osmVersion:4,osmEditedAt:"2020-02-16T16:58:11Z",method:Yi.WAY_BOUNDS_CENTER},heightEvidence:{status:Gi.MUNICIPALITY_PUBLISHED,sourceUrl:"https://www.herscheid.de/freizeit-tourismus/wandern"},groundEvidence:{status:ji.APPROXIMATE_TERRAIN,source:Wi.NRW_DGM1_WCS,verticalDatum:"DHHN2016",horizontalCrs:"EPSG:25832",sampleMethod:qi.CONTAINING_1M_PIXEL_CENTER,requestBoundsUtm32Meters:[412995,5667062,413005,5667072],sampleCenterUtm32Meters:[413000.5,56670675e-1],sourceUrl:"https://www.wcs.nrw.de/geobasis/wcs_nw_dgm?SERVICE=WCS&VERSION=2.0.1&REQUEST=GetCoverage&COVERAGEID=nw_dgm&FORMAT=image%2Ftiff&SUBSET=x%28412995%2C413005%29&SUBSET=y%285667062%2C5667072%29"},geometryEvidence:Vi.AUTHORED_APPROXIMATE_SILHOUETTE,parts:[{baseHeightMeters:0,heightMeters:13.5,radiusBottomMeters:4,radiusTopMeters:3.4,radialSegments:4,color:"#777167"},{baseHeightMeters:13.5,heightMeters:3,radiusBottomMeters:3.4,radiusTopMeters:3.4,radialSegments:4,color:"#575451"},{baseHeightMeters:16.5,heightMeters:1.5,radiusBottomMeters:3.9,radiusTopMeters:3.6,radialSegments:4,color:"#a39c8b"}]}],Zl=864e5,Fo=n=>new Date(Date.UTC(n,1,29)).getUTCMonth()===1?366:365,Bl=(n,e,t)=>Math.floor((Date.UTC(n,e,t)-Date.UTC(n,0,1))/Zl)+1,Xl=(n,e)=>new Date(Date.UTC(n,0,e)),Kl=(n,e)=>{const t=Xl(n.year,n.dayOfYear+e);return{year:t.getUTCFullYear(),dayOfYear:Bl(t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate())}};class h extends Array{constructor(e,t){if(super(e),this.sign=t,Object.setPrototypeOf(this,h.prototype),e>h.__kMaxLength)throw new RangeError("Maximum BigInt size exceeded")}static BigInt(e){var t=Math.floor,r=Number.isFinite;if(typeof e=="number"){if(e===0)return h.__zero();if(h.__isOneDigitInt(e))return 0>e?h.__oneDigit(-e,!0):h.__oneDigit(e,!1);if(!r(e)||t(e)!==e)throw new RangeError("The number "+e+" cannot be converted to BigInt because it is not an integer");return h.__fromDouble(e)}if(typeof e=="string"){const i=h.__fromString(e);if(i===null)throw new SyntaxError("Cannot convert "+e+" to a BigInt");return i}if(typeof e=="boolean")return e===!0?h.__oneDigit(1,!1):h.__zero();if(typeof e=="object"){if(e.constructor===h)return e;const i=h.__toPrimitive(e);return h.BigInt(i)}throw new TypeError("Cannot convert "+e+" to a BigInt")}toDebugString(){const e=["BigInt["];for(const t of this)e.push((t&&(t>>>0).toString(16))+", ");return e.push("]"),e.join("")}toString(e=10){if(2>e||36<e)throw new RangeError("toString() radix argument must be between 2 and 36");return this.length===0?"0":e&e-1?h.__toStringGeneric(this,e,!1):h.__toStringBasePowerOfTwo(this,e)}valueOf(){throw new Error("Convert JSBI instances to native numbers using `toNumber`.")}static toNumber(e){const t=e.length;if(t===0)return 0;if(t===1){const _=e.__unsignedDigit(0);return e.sign?-_:_}const r=e.__digit(t-1),i=h.__clz30(r),o=30*t-i;if(1024<o)return e.sign?-1/0:1/0;let a=o-1,s=r,c=t-1;const u=i+3;let d=u===32?0:s<<u;d>>>=12;const l=u-12;let f=12<=u?0:s<<20+u,g=20+u;for(0<l&&0<c&&(c--,s=e.__digit(c),d|=s>>>30-l,f=s<<l+2,g=l+2);0<g&&0<c;)c--,s=e.__digit(c),f|=30<=g?s<<g-30:s>>>30-g,g-=30;const p=h.__decideRounding(e,g,c,s);if((p===1||p===0&&(1&f)==1)&&(f=f+1>>>0,f===0&&(d++,d>>>20!=0&&(d=0,a++,1023<a))))return e.sign?-1/0:1/0;const y=e.sign?-2147483648:0;return a=a+1023<<20,h.__kBitConversionInts[h.__kBitConversionIntHigh]=y|a|d,h.__kBitConversionInts[h.__kBitConversionIntLow]=f,h.__kBitConversionDouble[0]}static unaryMinus(e){if(e.length===0)return e;const t=e.__copy();return t.sign=!e.sign,t}static bitwiseNot(e){return e.sign?h.__absoluteSubOne(e).__trim():h.__absoluteAddOne(e,!0)}static exponentiate(e,t){if(t.sign)throw new RangeError("Exponent must be positive");if(t.length===0)return h.__oneDigit(1,!1);if(e.length===0)return e;if(e.length===1&&e.__digit(0)===1)return e.sign&&!(1&t.__digit(0))?h.unaryMinus(e):e;if(1<t.length)throw new RangeError("BigInt too big");let r=t.__unsignedDigit(0);if(r===1)return e;if(r>=h.__kMaxLengthBits)throw new RangeError("BigInt too big");if(e.length===1&&e.__digit(0)===2){const a=1+(0|r/30),s=e.sign&&(1&r)!=0,c=new h(a,s);c.__initializeDigits();const u=1<<r%30;return c.__setDigit(a-1,u),c}let i=null,o=e;for(1&r&&(i=e),r>>=1;r!==0;r>>=1)o=h.multiply(o,o),1&r&&(i===null?i=o:i=h.multiply(i,o));return i}static multiply(e,t){if(e.length===0)return e;if(t.length===0)return t;let r=e.length+t.length;30<=e.__clzmsd()+t.__clzmsd()&&r--;const i=new h(r,e.sign!==t.sign);i.__initializeDigits();for(let o=0;o<e.length;o++)h.__multiplyAccumulate(t,e.__digit(o),i,o);return i.__trim()}static divide(e,t){if(t.length===0)throw new RangeError("Division by zero");if(0>h.__absoluteCompare(e,t))return h.__zero();const r=e.sign!==t.sign,i=t.__unsignedDigit(0);let o;if(t.length===1&&32767>=i){if(i===1)return r===e.sign?e:h.unaryMinus(e);o=h.__absoluteDivSmall(e,i,null)}else o=h.__absoluteDivLarge(e,t,!0,!1);return o.sign=r,o.__trim()}static remainder(e,t){if(t.length===0)throw new RangeError("Division by zero");if(0>h.__absoluteCompare(e,t))return e;const r=t.__unsignedDigit(0);if(t.length===1&&32767>=r){if(r===1)return h.__zero();const o=h.__absoluteModSmall(e,r);return o===0?h.__zero():h.__oneDigit(o,e.sign)}const i=h.__absoluteDivLarge(e,t,!1,!0);return i.sign=e.sign,i.__trim()}static add(e,t){const r=e.sign;return r===t.sign?h.__absoluteAdd(e,t,r):0<=h.__absoluteCompare(e,t)?h.__absoluteSub(e,t,r):h.__absoluteSub(t,e,!r)}static subtract(e,t){const r=e.sign;return r===t.sign?0<=h.__absoluteCompare(e,t)?h.__absoluteSub(e,t,r):h.__absoluteSub(t,e,!r):h.__absoluteAdd(e,t,r)}static leftShift(e,t){return t.length===0||e.length===0?e:t.sign?h.__rightShiftByAbsolute(e,t):h.__leftShiftByAbsolute(e,t)}static signedRightShift(e,t){return t.length===0||e.length===0?e:t.sign?h.__leftShiftByAbsolute(e,t):h.__rightShiftByAbsolute(e,t)}static unsignedRightShift(){throw new TypeError("BigInts have no unsigned right shift; use >> instead")}static lessThan(e,t){return 0>h.__compareToBigInt(e,t)}static lessThanOrEqual(e,t){return 0>=h.__compareToBigInt(e,t)}static greaterThan(e,t){return 0<h.__compareToBigInt(e,t)}static greaterThanOrEqual(e,t){return 0<=h.__compareToBigInt(e,t)}static equal(e,t){if(e.sign!==t.sign||e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e.__digit(r)!==t.__digit(r))return!1;return!0}static notEqual(e,t){return!h.equal(e,t)}static bitwiseAnd(e,t){var r=Math.max;if(!e.sign&&!t.sign)return h.__absoluteAnd(e,t).__trim();if(e.sign&&t.sign){const i=r(e.length,t.length)+1;let o=h.__absoluteSubOne(e,i);const a=h.__absoluteSubOne(t);return o=h.__absoluteOr(o,a,o),h.__absoluteAddOne(o,!0,o).__trim()}return e.sign&&([e,t]=[t,e]),h.__absoluteAndNot(e,h.__absoluteSubOne(t)).__trim()}static bitwiseXor(e,t){var r=Math.max;if(!e.sign&&!t.sign)return h.__absoluteXor(e,t).__trim();if(e.sign&&t.sign){const a=r(e.length,t.length),s=h.__absoluteSubOne(e,a),c=h.__absoluteSubOne(t);return h.__absoluteXor(s,c,s).__trim()}const i=r(e.length,t.length)+1;e.sign&&([e,t]=[t,e]);let o=h.__absoluteSubOne(t,i);return o=h.__absoluteXor(o,e,o),h.__absoluteAddOne(o,!0,o).__trim()}static bitwiseOr(e,t){var r=Math.max;const i=r(e.length,t.length);if(!e.sign&&!t.sign)return h.__absoluteOr(e,t).__trim();if(e.sign&&t.sign){let a=h.__absoluteSubOne(e,i);const s=h.__absoluteSubOne(t);return a=h.__absoluteAnd(a,s,a),h.__absoluteAddOne(a,!0,a).__trim()}e.sign&&([e,t]=[t,e]);let o=h.__absoluteSubOne(t,i);return o=h.__absoluteAndNot(o,e,o),h.__absoluteAddOne(o,!0,o).__trim()}static asIntN(e,t){var r=Math.floor;if(t.length===0)return t;if(e=r(e),0>e)throw new RangeError("Invalid value: not (convertible to) a safe integer");if(e===0)return h.__zero();if(e>=h.__kMaxLengthBits)return t;const i=0|(e+29)/30;if(t.length<i)return t;const o=t.__unsignedDigit(i-1),a=1<<(e-1)%30;if(t.length===i&&o<a)return t;if((o&a)!==a)return h.__truncateToNBits(e,t);if(!t.sign)return h.__truncateAndSubFromPowerOfTwo(e,t,!0);if(!(o&a-1)){for(let s=i-2;0<=s;s--)if(t.__digit(s)!==0)return h.__truncateAndSubFromPowerOfTwo(e,t,!1);return t.length===i&&o===a?t:h.__truncateToNBits(e,t)}return h.__truncateAndSubFromPowerOfTwo(e,t,!1)}static asUintN(e,t){var r=Math.floor;if(t.length===0)return t;if(e=r(e),0>e)throw new RangeError("Invalid value: not (convertible to) a safe integer");if(e===0)return h.__zero();if(t.sign){if(e>h.__kMaxLengthBits)throw new RangeError("BigInt too big");return h.__truncateAndSubFromPowerOfTwo(e,t,!1)}if(e>=h.__kMaxLengthBits)return t;const i=0|(e+29)/30;if(t.length<i)return t;const o=e%30;return t.length==i&&(o===0||!(t.__digit(i-1)>>>o))?t:h.__truncateToNBits(e,t)}static ADD(e,t){if(e=h.__toPrimitive(e),t=h.__toPrimitive(t),typeof e=="string")return typeof t!="string"&&(t=t.toString()),e+t;if(typeof t=="string")return e.toString()+t;if(e=h.__toNumeric(e),t=h.__toNumeric(t),h.__isBigInt(e)&&h.__isBigInt(t))return h.add(e,t);if(typeof e=="number"&&typeof t=="number")return e+t;throw new TypeError("Cannot mix BigInt and other types, use explicit conversions")}static LT(e,t){return h.__compare(e,t,0)}static LE(e,t){return h.__compare(e,t,1)}static GT(e,t){return h.__compare(e,t,2)}static GE(e,t){return h.__compare(e,t,3)}static EQ(e,t){for(;;){if(h.__isBigInt(e))return h.__isBigInt(t)?h.equal(e,t):h.EQ(t,e);if(typeof e=="number"){if(h.__isBigInt(t))return h.__equalToNumber(t,e);if(typeof t!="object")return e==t;t=h.__toPrimitive(t)}else if(typeof e=="string"){if(h.__isBigInt(t))return e=h.__fromString(e),e!==null&&h.equal(e,t);if(typeof t!="object")return e==t;t=h.__toPrimitive(t)}else if(typeof e=="boolean"){if(h.__isBigInt(t))return h.__equalToNumber(t,+e);if(typeof t!="object")return e==t;t=h.__toPrimitive(t)}else if(typeof e=="symbol"){if(h.__isBigInt(t))return!1;if(typeof t!="object")return e==t;t=h.__toPrimitive(t)}else if(typeof e=="object"){if(typeof t=="object"&&t.constructor!==h)return e==t;e=h.__toPrimitive(e)}else return e==t}}static NE(e,t){return!h.EQ(e,t)}static DataViewGetBigInt64(e,t,r=!1){return h.asIntN(64,h.DataViewGetBigUint64(e,t,r))}static DataViewGetBigUint64(e,t,r=!1){const[i,o]=r?[4,0]:[0,4],a=e.getUint32(t+i,r),s=e.getUint32(t+o,r),c=new h(3,!1);return c.__setDigit(0,1073741823&s),c.__setDigit(1,(268435455&a)<<2|s>>>30),c.__setDigit(2,a>>>28),c.__trim()}static DataViewSetBigInt64(e,t,r,i=!1){h.DataViewSetBigUint64(e,t,r,i)}static DataViewSetBigUint64(e,t,r,i=!1){r=h.asUintN(64,r);let o=0,a=0;if(0<r.length&&(a=r.__digit(0),1<r.length)){const u=r.__digit(1);a|=u<<30,o=u>>>2,2<r.length&&(o|=r.__digit(2)<<28)}const[s,c]=i?[4,0]:[0,4];e.setUint32(t+s,o,i),e.setUint32(t+c,a,i)}static __zero(){return new h(0,!1)}static __oneDigit(e,t){const r=new h(1,t);return r.__setDigit(0,e),r}__copy(){const e=new h(this.length,this.sign);for(let t=0;t<this.length;t++)e[t]=this[t];return e}__trim(){let e=this.length,t=this[e-1];for(;t===0;)e--,t=this[e-1],this.pop();return e===0&&(this.sign=!1),this}__initializeDigits(){for(let e=0;e<this.length;e++)this[e]=0}static __decideRounding(e,t,r,i){if(0<t)return-1;let o;if(0>t)o=-t-1;else{if(r===0)return-1;r--,i=e.__digit(r),o=29}let a=1<<o;if(!(i&a))return-1;if(a-=1,(i&a)!=0)return 1;for(;0<r;)if(r--,e.__digit(r)!==0)return 1;return 0}static __fromDouble(e){h.__kBitConversionDouble[0]=e;const t=2047&h.__kBitConversionInts[h.__kBitConversionIntHigh]>>>20,r=t-1023,i=(0|r/30)+1,o=new h(i,0>e);let a=1048575&h.__kBitConversionInts[h.__kBitConversionIntHigh]|1048576,s=h.__kBitConversionInts[h.__kBitConversionIntLow];const c=20,u=r%30;let d,l=0;if(u<20){const f=c-u;l=f+32,d=a>>>f,a=a<<32-f|s>>>f,s<<=32-f}else if(u===20)l=32,d=a,a=s,s=0;else{const f=u-c;l=32-f,d=a<<f|s>>>32-f,a=s<<f,s=0}o.__setDigit(i-1,d);for(let f=i-2;0<=f;f--)0<l?(l-=30,d=a>>>2,a=a<<30|s>>>2,s<<=30):d=0,o.__setDigit(f,d);return o.__trim()}static __isWhitespace(e){return 13>=e&&9<=e||(159>=e?e==32:131071>=e?e==160||e==5760:196607>=e?(e&=131071,10>=e||e==40||e==41||e==47||e==95||e==4096):e==65279)}static __fromString(e,t=0){let r=0;const i=e.length;let o=0;if(o===i)return h.__zero();let a=e.charCodeAt(o);for(;h.__isWhitespace(a);){if(++o===i)return h.__zero();a=e.charCodeAt(o)}if(a===43){if(++o===i)return null;a=e.charCodeAt(o),r=1}else if(a===45){if(++o===i)return null;a=e.charCodeAt(o),r=-1}if(t===0){if(t=10,a===48){if(++o===i)return h.__zero();if(a=e.charCodeAt(o),a===88||a===120){if(t=16,++o===i)return null;a=e.charCodeAt(o)}else if(a===79||a===111){if(t=8,++o===i)return null;a=e.charCodeAt(o)}else if(a===66||a===98){if(t=2,++o===i)return null;a=e.charCodeAt(o)}}}else if(t===16&&a===48){if(++o===i)return h.__zero();if(a=e.charCodeAt(o),a===88||a===120){if(++o===i)return null;a=e.charCodeAt(o)}}if(r!=0&&t!==10)return null;for(;a===48;){if(++o===i)return h.__zero();a=e.charCodeAt(o)}const s=i-o;let c=h.__kMaxBitsPerChar[t],u=h.__kBitsPerCharTableMultiplier-1;if(s>1073741824/c)return null;const d=c*s+u>>>h.__kBitsPerCharTableShift,l=new h(0|(d+29)/30,!1),f=10>t?t:10,g=10<t?t-10:0;if(t&t-1){l.__initializeDigits();let p=!1,y=0;do{let _=0,w=1;for(;;){let b;if(a-48>>>0<f)b=a-48;else if((32|a)-97>>>0<g)b=(32|a)-87;else{p=!0;break}const S=w*t;if(1073741823<S)break;if(w=S,_=_*t+b,y++,++o===i){p=!0;break}a=e.charCodeAt(o)}u=30*h.__kBitsPerCharTableMultiplier-1;const T=0|(c*y+u>>>h.__kBitsPerCharTableShift)/30;l.__inplaceMultiplyAdd(w,_,T)}while(!p)}else{c>>=h.__kBitsPerCharTableShift;const p=[],y=[];let _=!1;do{let w=0,T=0;for(;;){let b;if(a-48>>>0<f)b=a-48;else if((32|a)-97>>>0<g)b=(32|a)-87;else{_=!0;break}if(T+=c,w=w<<c|b,++o===i){_=!0;break}if(a=e.charCodeAt(o),30<T+c)break}p.push(w),y.push(T)}while(!_);h.__fillFromParts(l,p,y)}if(o!==i){if(!h.__isWhitespace(a))return null;for(o++;o<i;o++)if(a=e.charCodeAt(o),!h.__isWhitespace(a))return null}return l.sign=r==-1,l.__trim()}static __fillFromParts(e,t,r){let i=0,o=0,a=0;for(let s=t.length-1;0<=s;s--){const c=t[s],u=r[s];o|=c<<a,a+=u,a===30?(e.__setDigit(i++,o),a=0,o=0):30<a&&(e.__setDigit(i++,1073741823&o),a-=30,o=c>>>u-a)}if(o!==0){if(i>=e.length)throw new Error("implementation bug");e.__setDigit(i++,o)}for(;i<e.length;i++)e.__setDigit(i,0)}static __toStringBasePowerOfTwo(e,t){const r=e.length;let i=t-1;i=(85&i>>>1)+(85&i),i=(51&i>>>2)+(51&i),i=(15&i>>>4)+(15&i);const o=i,a=t-1,s=e.__digit(r-1),c=h.__clz30(s);let u=0|(30*r-c+o-1)/o;if(e.sign&&u++,268435456<u)throw new Error("string too long");const d=Array(u);let l=u-1,f=0,g=0;for(let y=0;y<r-1;y++){const _=e.__digit(y),w=(f|_<<g)&a;d[l--]=h.__kConversionChars[w];const T=o-g;for(f=_>>>T,g=30-T;g>=o;)d[l--]=h.__kConversionChars[f&a],f>>>=o,g-=o}const p=(f|s<<g)&a;for(d[l--]=h.__kConversionChars[p],f=s>>>o-g;f!==0;)d[l--]=h.__kConversionChars[f&a],f>>>=o;if(e.sign&&(d[l--]="-"),l!=-1)throw new Error("implementation bug");return d.join("")}static __toStringGeneric(e,t,r){const i=e.length;if(i===0)return"";if(i===1){let y=e.__unsignedDigit(0).toString(t);return r===!1&&e.sign&&(y="-"+y),y}const o=30*i-h.__clz30(e.__digit(i-1)),a=h.__kMaxBitsPerChar[t],s=a-1;let c=o*h.__kBitsPerCharTableMultiplier;c+=s-1,c=0|c/s;const u=c+1>>1,d=h.exponentiate(h.__oneDigit(t,!1),h.__oneDigit(u,!1));let l,f;const g=d.__unsignedDigit(0);if(d.length===1&&32767>=g){l=new h(e.length,!1),l.__initializeDigits();let y=0;for(let _=2*e.length-1;0<=_;_--){const w=y<<15|e.__halfDigit(_);l.__setHalfDigit(_,0|w/g),y=0|w%g}f=y.toString(t)}else{const y=h.__absoluteDivLarge(e,d,!0,!0);l=y.quotient;const _=y.remainder.__trim();f=h.__toStringGeneric(_,t,!0)}l.__trim();let p=h.__toStringGeneric(l,t,!0);for(;f.length<u;)f="0"+f;return r===!1&&e.sign&&(p="-"+p),p+f}static __unequalSign(e){return e?-1:1}static __absoluteGreater(e){return e?-1:1}static __absoluteLess(e){return e?1:-1}static __compareToBigInt(e,t){const r=e.sign;if(r!==t.sign)return h.__unequalSign(r);const i=h.__absoluteCompare(e,t);return 0<i?h.__absoluteGreater(r):0>i?h.__absoluteLess(r):0}static __compareToNumber(e,t){if(h.__isOneDigitInt(t)){const r=e.sign,i=0>t;if(r!==i)return h.__unequalSign(r);if(e.length===0){if(i)throw new Error("implementation bug");return t===0?0:-1}if(1<e.length)return h.__absoluteGreater(r);const o=Math.abs(t),a=e.__unsignedDigit(0);return a>o?h.__absoluteGreater(r):a<o?h.__absoluteLess(r):0}return h.__compareToDouble(e,t)}static __compareToDouble(e,t){if(t!==t)return t;if(t===1/0)return-1;if(t===-1/0)return 1;const r=e.sign;if(r!==0>t)return h.__unequalSign(r);if(t===0)throw new Error("implementation bug: should be handled elsewhere");if(e.length===0)return-1;h.__kBitConversionDouble[0]=t;const i=2047&h.__kBitConversionInts[h.__kBitConversionIntHigh]>>>20;if(i==2047)throw new Error("implementation bug: handled elsewhere");const o=i-1023;if(0>o)return h.__absoluteGreater(r);const a=e.length;let s=e.__digit(a-1);const c=h.__clz30(s),u=30*a-c,d=o+1;if(u<d)return h.__absoluteLess(r);if(u>d)return h.__absoluteGreater(r);let l=1048576|1048575&h.__kBitConversionInts[h.__kBitConversionIntHigh],f=h.__kBitConversionInts[h.__kBitConversionIntLow];const g=20,p=29-c;if(p!==(0|(u-1)%30))throw new Error("implementation bug");let y,_=0;if(20>p){const w=g-p;_=w+32,y=l>>>w,l=l<<32-w|f>>>w,f<<=32-w}else if(p===20)_=32,y=l,l=f,f=0;else{const w=p-g;_=32-w,y=l<<w|f>>>32-w,l=f<<w,f=0}if(s>>>=0,y>>>=0,s>y)return h.__absoluteGreater(r);if(s<y)return h.__absoluteLess(r);for(let w=a-2;0<=w;w--){0<_?(_-=30,y=l>>>2,l=l<<30|f>>>2,f<<=30):y=0;const T=e.__unsignedDigit(w);if(T>y)return h.__absoluteGreater(r);if(T<y)return h.__absoluteLess(r)}if(l!==0||f!==0){if(_===0)throw new Error("implementation bug");return h.__absoluteLess(r)}return 0}static __equalToNumber(e,t){var r=Math.abs;return h.__isOneDigitInt(t)?t===0?e.length===0:e.length===1&&e.sign===0>t&&e.__unsignedDigit(0)===r(t):h.__compareToDouble(e,t)===0}static __comparisonResultToBool(e,t){return t===0?0>e:t===1?0>=e:t===2?0<e:t===3?0<=e:void 0}static __compare(e,t,r){if(e=h.__toPrimitive(e),t=h.__toPrimitive(t),typeof e=="string"&&typeof t=="string")switch(r){case 0:return e<t;case 1:return e<=t;case 2:return e>t;case 3:return e>=t}if(h.__isBigInt(e)&&typeof t=="string")return t=h.__fromString(t),t!==null&&h.__comparisonResultToBool(h.__compareToBigInt(e,t),r);if(typeof e=="string"&&h.__isBigInt(t))return e=h.__fromString(e),e!==null&&h.__comparisonResultToBool(h.__compareToBigInt(e,t),r);if(e=h.__toNumeric(e),t=h.__toNumeric(t),h.__isBigInt(e)){if(h.__isBigInt(t))return h.__comparisonResultToBool(h.__compareToBigInt(e,t),r);if(typeof t!="number")throw new Error("implementation bug");return h.__comparisonResultToBool(h.__compareToNumber(e,t),r)}if(typeof e!="number")throw new Error("implementation bug");if(h.__isBigInt(t))return h.__comparisonResultToBool(h.__compareToNumber(t,e),2^r);if(typeof t!="number")throw new Error("implementation bug");return r===0?e<t:r===1?e<=t:r===2?e>t:r===3?e>=t:void 0}__clzmsd(){return h.__clz30(this.__digit(this.length-1))}static __absoluteAdd(e,t,r){if(e.length<t.length)return h.__absoluteAdd(t,e,r);if(e.length===0)return e;if(t.length===0)return e.sign===r?e:h.unaryMinus(e);let i=e.length;(e.__clzmsd()===0||t.length===e.length&&t.__clzmsd()===0)&&i++;const o=new h(i,r);let a=0,s=0;for(;s<t.length;s++){const c=e.__digit(s)+t.__digit(s)+a;a=c>>>30,o.__setDigit(s,1073741823&c)}for(;s<e.length;s++){const c=e.__digit(s)+a;a=c>>>30,o.__setDigit(s,1073741823&c)}return s<o.length&&o.__setDigit(s,a),o.__trim()}static __absoluteSub(e,t,r){if(e.length===0)return e;if(t.length===0)return e.sign===r?e:h.unaryMinus(e);const i=new h(e.length,r);let o=0,a=0;for(;a<t.length;a++){const s=e.__digit(a)-t.__digit(a)-o;o=1&s>>>30,i.__setDigit(a,1073741823&s)}for(;a<e.length;a++){const s=e.__digit(a)-o;o=1&s>>>30,i.__setDigit(a,1073741823&s)}return i.__trim()}static __absoluteAddOne(e,t,r=null){const i=e.length;r===null?r=new h(i,t):r.sign=t;let o=1;for(let a=0;a<i;a++){const s=e.__digit(a)+o;o=s>>>30,r.__setDigit(a,1073741823&s)}return o!=0&&r.__setDigitGrow(i,1),r}static __absoluteSubOne(e,t){const r=e.length;t=t||r;const i=new h(t,!1);let o=1;for(let a=0;a<r;a++){const s=e.__digit(a)-o;o=1&s>>>30,i.__setDigit(a,1073741823&s)}if(o!=0)throw new Error("implementation bug");for(let a=r;a<t;a++)i.__setDigit(a,0);return i}static __absoluteAnd(e,t,r=null){let i=e.length,o=t.length,a=o;if(i<o){a=i;const u=e,d=i;e=t,i=o,t=u,o=d}let s=a;r===null?r=new h(s,!1):s=r.length;let c=0;for(;c<a;c++)r.__setDigit(c,e.__digit(c)&t.__digit(c));for(;c<s;c++)r.__setDigit(c,0);return r}static __absoluteAndNot(e,t,r=null){const i=e.length,o=t.length;let a=o;i<o&&(a=i);let s=i;r===null?r=new h(s,!1):s=r.length;let c=0;for(;c<a;c++)r.__setDigit(c,e.__digit(c)&~t.__digit(c));for(;c<i;c++)r.__setDigit(c,e.__digit(c));for(;c<s;c++)r.__setDigit(c,0);return r}static __absoluteOr(e,t,r=null){let i=e.length,o=t.length,a=o;if(i<o){a=i;const u=e,d=i;e=t,i=o,t=u,o=d}let s=i;r===null?r=new h(s,!1):s=r.length;let c=0;for(;c<a;c++)r.__setDigit(c,e.__digit(c)|t.__digit(c));for(;c<i;c++)r.__setDigit(c,e.__digit(c));for(;c<s;c++)r.__setDigit(c,0);return r}static __absoluteXor(e,t,r=null){let i=e.length,o=t.length,a=o;if(i<o){a=i;const u=e,d=i;e=t,i=o,t=u,o=d}let s=i;r===null?r=new h(s,!1):s=r.length;let c=0;for(;c<a;c++)r.__setDigit(c,e.__digit(c)^t.__digit(c));for(;c<i;c++)r.__setDigit(c,e.__digit(c));for(;c<s;c++)r.__setDigit(c,0);return r}static __absoluteCompare(e,t){const r=e.length-t.length;if(r!=0)return r;let i=e.length-1;for(;0<=i&&e.__digit(i)===t.__digit(i);)i--;return 0>i?0:e.__unsignedDigit(i)>t.__unsignedDigit(i)?1:-1}static __multiplyAccumulate(e,t,r,i){if(t===0)return;const o=32767&t,a=t>>>15;let s=0,c=0;for(let u,d=0;d<e.length;d++,i++){u=r.__digit(i);const l=e.__digit(d),f=32767&l,g=l>>>15,p=h.__imul(f,o),y=h.__imul(f,a),_=h.__imul(g,o),w=h.__imul(g,a);u+=c+p+s,s=u>>>30,u&=1073741823,u+=((32767&y)<<15)+((32767&_)<<15),s+=u>>>30,c=w+(y>>>15)+(_>>>15),r.__setDigit(i,1073741823&u)}for(;s!=0||c!==0;i++){let u=r.__digit(i);u+=s+c,c=0,s=u>>>30,r.__setDigit(i,1073741823&u)}}static __internalMultiplyAdd(e,t,r,i,o){let a=r,s=0;for(let c=0;c<i;c++){const u=e.__digit(c),d=h.__imul(32767&u,t),l=h.__imul(u>>>15,t),f=d+((32767&l)<<15)+s+a;a=f>>>30,s=l>>>15,o.__setDigit(c,1073741823&f)}if(o.length>i)for(o.__setDigit(i++,a+s);i<o.length;)o.__setDigit(i++,0);else if(a+s!==0)throw new Error("implementation bug")}__inplaceMultiplyAdd(e,t,r){r>this.length&&(r=this.length);const i=32767&e,o=e>>>15;let a=0,s=t;for(let c=0;c<r;c++){const u=this.__digit(c),d=32767&u,l=u>>>15,f=h.__imul(d,i),g=h.__imul(d,o),p=h.__imul(l,i),y=h.__imul(l,o);let _=s+f+a;a=_>>>30,_&=1073741823,_+=((32767&g)<<15)+((32767&p)<<15),a+=_>>>30,s=y+(g>>>15)+(p>>>15),this.__setDigit(c,1073741823&_)}if(a!=0||s!==0)throw new Error("implementation bug")}static __absoluteDivSmall(e,t,r=null){r===null&&(r=new h(e.length,!1));let i=0;for(let o,a=2*e.length-1;0<=a;a-=2){o=(i<<15|e.__halfDigit(a))>>>0;const s=0|o/t;i=0|o%t,o=(i<<15|e.__halfDigit(a-1))>>>0;const c=0|o/t;i=0|o%t,r.__setDigit(a>>>1,s<<15|c)}return r}static __absoluteModSmall(e,t){let r=0;for(let i=2*e.length-1;0<=i;i--)r=0|((r<<15|e.__halfDigit(i))>>>0)%t;return r}static __absoluteDivLarge(e,t,r,i){const o=t.__halfDigitLength(),a=t.length,s=e.__halfDigitLength()-o;let c=null;r&&(c=new h(s+2>>>1,!1),c.__initializeDigits());const u=new h(o+2>>>1,!1);u.__initializeDigits();const d=h.__clz15(t.__halfDigit(o-1));0<d&&(t=h.__specialLeftShift(t,d,0));const l=h.__specialLeftShift(e,d,1),f=t.__halfDigit(o-1);let g=0;for(let p,y=s;0<=y;y--){p=32767;const _=l.__halfDigit(y+o);if(_!==f){const T=(_<<15|l.__halfDigit(y+o-1))>>>0;p=0|T/f;let b=0|T%f;const S=t.__halfDigit(o-2),R=l.__halfDigit(y+o-2);for(;h.__imul(p,S)>>>0>(b<<16|R)>>>0&&(p--,b+=f,!(32767<b)););}h.__internalMultiplyAdd(t,p,0,a,u);let w=l.__inplaceSub(u,y,o+1);w!==0&&(w=l.__inplaceAdd(t,y,o),l.__setHalfDigit(y+o,32767&l.__halfDigit(y+o)+w),p--),r&&(1&y?g=p<<15:c.__setDigit(y>>>1,g|p))}if(i)return l.__inplaceRightShift(d),r?{quotient:c,remainder:l}:l;if(r)return c;throw new Error("unreachable")}static __clz15(e){return h.__clz30(e)-15}__inplaceAdd(e,t,r){let i=0;for(let o=0;o<r;o++){const a=this.__halfDigit(t+o)+e.__halfDigit(o)+i;i=a>>>15,this.__setHalfDigit(t+o,32767&a)}return i}__inplaceSub(e,t,r){let i=0;if(1&t){t>>=1;let o=this.__digit(t),a=32767&o,s=0;for(;s<r-1>>>1;s++){const d=e.__digit(s),l=(o>>>15)-(32767&d)-i;i=1&l>>>15,this.__setDigit(t+s,(32767&l)<<15|32767&a),o=this.__digit(t+s+1),a=(32767&o)-(d>>>15)-i,i=1&a>>>15}const c=e.__digit(s),u=(o>>>15)-(32767&c)-i;if(i=1&u>>>15,this.__setDigit(t+s,(32767&u)<<15|32767&a),t+s+1>=this.length)throw new RangeError("out of bounds");!(1&r)&&(o=this.__digit(t+s+1),a=(32767&o)-(c>>>15)-i,i=1&a>>>15,this.__setDigit(t+e.length,1073709056&o|32767&a))}else{t>>=1;let o=0;for(;o<e.length-1;o++){const d=this.__digit(t+o),l=e.__digit(o),f=(32767&d)-(32767&l)-i;i=1&f>>>15;const g=(d>>>15)-(l>>>15)-i;i=1&g>>>15,this.__setDigit(t+o,(32767&g)<<15|32767&f)}const a=this.__digit(t+o),s=e.__digit(o),c=(32767&a)-(32767&s)-i;i=1&c>>>15;let u=0;!(1&r)&&(u=(a>>>15)-(s>>>15)-i,i=1&u>>>15),this.__setDigit(t+o,(32767&u)<<15|32767&c)}return i}__inplaceRightShift(e){if(e===0)return;let t=this.__digit(0)>>>e;const r=this.length-1;for(let i=0;i<r;i++){const o=this.__digit(i+1);this.__setDigit(i,1073741823&o<<30-e|t),t=o>>>e}this.__setDigit(r,t)}static __specialLeftShift(e,t,r){const i=e.length,o=new h(i+r,!1);if(t===0){for(let s=0;s<i;s++)o.__setDigit(s,e.__digit(s));return 0<r&&o.__setDigit(i,0),o}let a=0;for(let s=0;s<i;s++){const c=e.__digit(s);o.__setDigit(s,1073741823&c<<t|a),a=c>>>30-t}return 0<r&&o.__setDigit(i,a),o}static __leftShiftByAbsolute(e,t){const r=h.__toShiftAmount(t);if(0>r)throw new RangeError("BigInt too big");const i=0|r/30,o=r%30,a=e.length,s=o!==0&&e.__digit(a-1)>>>30-o!=0,c=a+i+(s?1:0),u=new h(c,e.sign);if(o===0){let d=0;for(;d<i;d++)u.__setDigit(d,0);for(;d<c;d++)u.__setDigit(d,e.__digit(d-i))}else{let d=0;for(let l=0;l<i;l++)u.__setDigit(l,0);for(let l=0;l<a;l++){const f=e.__digit(l);u.__setDigit(l+i,1073741823&f<<o|d),d=f>>>30-o}if(s)u.__setDigit(a+i,d);else if(d!==0)throw new Error("implementation bug")}return u.__trim()}static __rightShiftByAbsolute(e,t){const r=e.length,i=e.sign,o=h.__toShiftAmount(t);if(0>o)return h.__rightShiftByMaximum(i);const a=0|o/30,s=o%30;let c=r-a;if(0>=c)return h.__rightShiftByMaximum(i);let u=!1;if(i){if(e.__digit(a)&(1<<s)-1)u=!0;else for(let l=0;l<a;l++)if(e.__digit(l)!==0){u=!0;break}}u&&s===0&&!~e.__digit(r-1)&&c++;let d=new h(c,i);if(s===0){d.__setDigit(c-1,0);for(let l=a;l<r;l++)d.__setDigit(l-a,e.__digit(l))}else{let l=e.__digit(a)>>>s;const f=r-a-1;for(let g=0;g<f;g++){const p=e.__digit(g+a+1);d.__setDigit(g,1073741823&p<<30-s|l),l=p>>>s}d.__setDigit(f,l)}return u&&(d=h.__absoluteAddOne(d,!0,d)),d.__trim()}static __rightShiftByMaximum(e){return e?h.__oneDigit(1,!0):h.__zero()}static __toShiftAmount(e){if(1<e.length)return-1;const t=e.__unsignedDigit(0);return t>h.__kMaxLengthBits?-1:t}static __toPrimitive(e,t="default"){if(typeof e!="object"||e.constructor===h)return e;if(typeof Symbol<"u"&&typeof Symbol.toPrimitive=="symbol"&&e[Symbol.toPrimitive]){const o=e[Symbol.toPrimitive](t);if(typeof o!="object")return o;throw new TypeError("Cannot convert object to primitive value")}const r=e.valueOf;if(r){const o=r.call(e);if(typeof o!="object")return o}const i=e.toString;if(i){const o=i.call(e);if(typeof o!="object")return o}throw new TypeError("Cannot convert object to primitive value")}static __toNumeric(e){return h.__isBigInt(e)?e:+e}static __isBigInt(e){return typeof e=="object"&&e!==null&&e.constructor===h}static __truncateToNBits(e,t){const r=0|(e+29)/30,i=new h(r,t.sign),o=r-1;for(let s=0;s<o;s++)i.__setDigit(s,t.__digit(s));let a=t.__digit(o);if(e%30!=0){const s=32-e%30;a=a<<s>>>s}return i.__setDigit(o,a),i.__trim()}static __truncateAndSubFromPowerOfTwo(e,t,r){var i=Math.min;const o=0|(e+29)/30,a=new h(o,r);let s=0;const c=o-1;let u=0;for(const g=i(c,t.length);s<g;s++){const p=0-t.__digit(s)-u;u=1&p>>>30,a.__setDigit(s,1073741823&p)}for(;s<c;s++)a.__setDigit(s,0|1073741823&-u);let d=c<t.length?t.__digit(c):0;const l=e%30;let f;if(l==0)f=0-d-u,f&=1073741823;else{const g=32-l;d=d<<g>>>g;const p=1<<32-g;f=p-d-u,f&=p-1}return a.__setDigit(c,f),a.__trim()}__digit(e){return this[e]}__unsignedDigit(e){return this[e]>>>0}__setDigit(e,t){this[e]=0|t}__setDigitGrow(e,t){this[e]=0|t}__halfDigitLength(){const e=this.length;return 32767>=this.__unsignedDigit(e-1)?2*e-1:2*e}__halfDigit(e){return 32767&this[e>>>1]>>>15*(1&e)}__setHalfDigit(e,t){const r=e>>>1,i=this.__digit(r),o=1&e?32767&i|t<<15:1073709056&i|32767&t;this.__setDigit(r,o)}static __digitPow(e,t){let r=1;for(;0<t;)1&t&&(r*=e),t>>>=1,e*=e;return r}static __detectBigEndian(){return h.__kBitConversionDouble[0]=-0,h.__kBitConversionInts[0]!==0}static __isOneDigitInt(e){return(1073741823&e)===e}}h.__kMaxLength=33554432,h.__kMaxLengthBits=h.__kMaxLength<<5,h.__kMaxBitsPerChar=[0,0,32,51,64,75,83,90,96,102,107,111,115,119,122,126,128,131,134,136,139,141,143,145,147,149,151,153,154,156,158,159,160,162,163,165,166],h.__kBitsPerCharTableShift=5,h.__kBitsPerCharTableMultiplier=1<<h.__kBitsPerCharTableShift,h.__kConversionChars=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],h.__kBitConversionBuffer=new ArrayBuffer(8),h.__kBitConversionDouble=new Float64Array(h.__kBitConversionBuffer),h.__kBitConversionInts=new Int32Array(h.__kBitConversionBuffer),h.__kBitConversionIntHigh=h.__detectBigEndian()?0:1,h.__kBitConversionIntLow=h.__detectBigEndian()?1:0,h.__clz30=Math.clz32?function(n){return Math.clz32(n)-2}:function(n){return n===0?30:0|29-(0|Math.log(n>>>0)/Math.LN2)},h.__imul=Math.imul||function(n,e){return 0|n*e};const mt=h.BigInt(0),ai=h.BigInt(1),Fs=h.BigInt(2),Ql=h.BigInt(10),Jl=h.BigInt(24),e1=h.BigInt(60),t1=h.BigInt(1e3),vi=h.BigInt(1e6),Qr=h.BigInt(1e9),lu=h.multiply(h.BigInt(3600),Qr),n1=h.multiply(e1,Qr),Rn=h.multiply(lu,Jl);function Qt(n){return typeof n=="bigint"?h.BigInt(n.toString(10)):n}function hu(n){return h.equal(h.remainder(n,Fs),mt)}function Ln(n){return h.lessThan(n,mt)?h.unaryMinus(n):n}function lo(n,e){return h.lessThan(n,e)?-1:h.greaterThan(n,e)?1:0}function zr(n,e){return{quotient:h.divide(n,e),remainder:h.remainder(n,e)}}var N0,L0;const I="slot-epochNanoSeconds",O="slot-iso-date",ie="slot-iso-date-time",de="slot-time",M="slot-calendar",mu="slot-date-brand",fu="slot-year-month-brand",gu="slot-month-day-brand",Z="slot-time-zone",He="slot-years",ze="slot-months",rt="slot-weeks",ke="slot-days",Ye="slot-hours",Ge="slot-minutes",je="slot-seconds",We="slot-milliseconds",qe="slot-microseconds",it="slot-nanoseconds",pu="date",yu="ym",_u="md",vu="time",wu="datetime",Eu="instant",Zn="original",rr="timezone-canonical",za="timezone-original",kr="calendar-id",Tu="locale",ka="options",bu=new WeakMap,Ya=Symbol.for("@@Temporal__GetSlots");(N0=globalThis)[Ya]||(N0[Ya]=function(n){return bu.get(n)});const Ho=globalThis[Ya],Ga=Symbol.for("@@Temporal__CreateSlots");(L0=globalThis)[Ga]||(L0[Ga]=function(n){bu.set(n,Object.create(null))});const ln=globalThis[Ga];function Qe(n,...e){if(!n||typeof n!="object")return!1;const t=Ho(n);return!!t&&e.every(r=>r in t)}function m(n,e){var r;const t=(r=Ho(n))==null?void 0:r[e];if(t===void 0)throw new TypeError(`Missing internal slot ${e}`);return t}function P(n,e,t){const r=Ho(n);if(r===void 0)throw new TypeError("Missing slots for the given container");if(r[e])throw new TypeError(`${e} already has set`);r[e]=t}const ja={};function hn(n,e){Object.defineProperty(n.prototype,Symbol.toStringTag,{value:e,writable:!1,enumerable:!1,configurable:!0});const t=Object.getOwnPropertyNames(n);for(let i=0;i<t.length;i++){const o=t[i],a=Object.getOwnPropertyDescriptor(n,o);a.configurable&&a.enumerable&&(a.enumerable=!1,Object.defineProperty(n,o,a))}const r=Object.getOwnPropertyNames(n.prototype);for(let i=0;i<r.length;i++){const o=r[i],a=Object.getOwnPropertyDescriptor(n.prototype,o);a.configurable&&a.enumerable&&(a.enumerable=!1,Object.defineProperty(n.prototype,o,a))}Wa(e,n),Wa(`${e}.prototype`,n.prototype)}function Wa(n,e){const t=`%${n}%`;if(ja[t]!==void 0)throw new Error(`intrinsic ${n} already exists`);ja[t]=e}function xe(n){return ja[n]}function ar(n,e){let t=n;if(t===0)return{div:t,mod:t};const r=Math.sign(t);t=Math.abs(t);const i=Math.trunc(1+Math.log10(t));if(e>=i)return{div:0*r,mod:r*t};if(e===0)return{div:r*t,mod:0*r};const o=t.toPrecision(i);return{div:r*Number.parseInt(o.slice(0,i-e),10),mod:r*Number.parseInt(o.slice(i-e),10)}}function wa(n,e,t){let r=n,i=t;if(r===0)return i;const o=Math.sign(r)||Math.sign(i);r=Math.abs(r),i=Math.abs(i);const a=r.toPrecision(Math.trunc(1+Math.log10(r)));if(i===0)return o*Number.parseInt(a+"0".repeat(e),10);const s=a+i.toPrecision(Math.trunc(1+Math.log10(i))).padStart(e,"0");return o*Number.parseInt(s,10)}function zo(n,e){const t=e==="negative";switch(n){case"ceil":return t?"zero":"infinity";case"floor":return t?"infinity":"zero";case"expand":return"infinity";case"trunc":return"zero";case"halfCeil":return t?"half-zero":"half-infinity";case"halfFloor":return t?"half-infinity":"half-zero";case"halfExpand":return"half-infinity";case"halfTrunc":return"half-zero";case"halfEven":return"half-even"}}function ko(n,e,t,r,i){return i==="zero"?n:i==="infinity"?e:t<0?n:t>0?e:i==="half-zero"?n:i==="half-infinity"?e:r?n:e}class F{constructor(e){this.totalNs=Qt(e),this.sec=h.toNumber(h.divide(this.totalNs,Qr)),this.subsec=h.toNumber(h.remainder(this.totalNs,Qr))}static validateNew(e,t){if(h.greaterThan(Ln(e),F.MAX))throw new RangeError(`${t} of duration time units cannot exceed ${F.MAX} s`);return new F(e)}static fromEpochNsDiff(e,t){const r=h.subtract(Qt(e),Qt(t));return new F(r)}static fromComponents(e,t,r,i,o,a){const s=h.add(h.add(h.add(h.add(h.add(h.BigInt(a),h.multiply(h.BigInt(o),t1)),h.multiply(h.BigInt(i),vi)),h.multiply(h.BigInt(r),Qr)),h.multiply(h.BigInt(t),n1)),h.multiply(h.BigInt(e),lu));return F.validateNew(s,"total")}abs(){return new F(Ln(this.totalNs))}add(e){return F.validateNew(h.add(this.totalNs,e.totalNs),"sum")}add24HourDays(e){return F.validateNew(h.add(this.totalNs,h.multiply(h.BigInt(e),Rn)),"sum")}addToEpochNs(e){return h.add(Qt(e),this.totalNs)}cmp(e){return lo(this.totalNs,e.totalNs)}divmod(e){const{quotient:t,remainder:r}=zr(this.totalNs,h.BigInt(e));return{quotient:h.toNumber(t),remainder:new F(r)}}fdiv(e){const t=Qt(e),r=h.BigInt(t);let{quotient:i,remainder:o}=zr(this.totalNs,r);const a=[];let s;const c=(h.lessThan(this.totalNs,mt)?-1:1)*Math.sign(h.toNumber(t));for(;!h.equal(o,mt)&&a.length<50;)o=h.multiply(o,Ql),{quotient:s,remainder:o}=zr(o,r),a.push(Math.abs(h.toNumber(s)));return c*+(Ln(i).toString()+"."+a.join(""))}isZero(){return h.equal(this.totalNs,mt)}round(e,t){const r=Qt(e);if(h.equal(r,ai))return this;const{quotient:i,remainder:o}=zr(this.totalNs,r),a=h.lessThan(this.totalNs,mt)?"negative":"positive",s=h.multiply(Ln(i),r),c=h.add(s,r),u=lo(Ln(h.multiply(o,Fs)),r),d=zo(t,a),l=h.equal(Ln(this.totalNs),s)?s:ko(s,c,u,hu(i),d),f=a==="positive"?l:h.unaryMinus(l);return F.validateNew(f,"rounding")}sign(){return this.cmp(new F(mt))}subtract(e){return F.validateNew(h.subtract(this.totalNs,e.totalNs),"difference")}}F.MAX=h.BigInt("9007199254740991999999999"),F.ZERO=new F(mt);const P0=/[A-Za-z._][A-Za-z._0-9+-]*/,wi=new RegExp(`(?:${/(?:[+-](?:[01][0-9]|2[0-3])(?::?[0-5][0-9])?)/.source}|(?:${P0.source})(?:\\/(?:${P0.source}))*)`),Mu=/(?:[+-]\d{6}|\d{4})/,ho=/(?:0[1-9]|1[0-2])/,qa=/(?:0[1-9]|[12]\d|3[01])/,r1=new RegExp(`(${Mu.source})(?:-(${ho.source})-(${qa.source})|(${ho.source})(${qa.source}))`),Du=/(\d{2})(?::(\d{2})(?::(\d{2})(?:[.,](\d{1,9}))?)?|(\d{2})(?:(\d{2})(?:[.,](\d{1,9}))?)?)?/,Ru=/((?:[+-])(?:[01][0-9]|2[0-3])(?::?(?:[0-5][0-9])(?::?(?:[0-5][0-9])(?:[.,](?:\d{1,9}))?)?)?)/,Su=new RegExp(`([zZ])|${Ru.source}?`),pr=/\[(!)?([a-z_][a-z0-9_-]*)=([A-Za-z0-9]+(?:-[A-Za-z0-9]+)*)\]/g,i1=new RegExp([`^${r1.source}`,`(?:(?:[tT]|\\s+)${Du.source}(?:${Su.source})?)?`,`(?:\\[!?(${wi.source})\\])?`,`((?:${pr.source})*)$`].join("")),o1=new RegExp([`^[tT]?${Du.source}`,`(?:${Su.source})?`,`(?:\\[!?${wi.source}\\])?`,`((?:${pr.source})*)$`].join("")),a1=new RegExp(`^(${Mu.source})-?(${ho.source})(?:\\[!?${wi.source}\\])?((?:${pr.source})*)$`),s1=new RegExp(`^(?:--)?(${ho.source})-?(${qa.source})(?:\\[!?${wi.source}\\])?((?:${pr.source})*)$`),Ea=/(\d+)(?:[.,](\d{1,9}))?/,c1=new RegExp(`(?:${Ea.source}H)?(?:${Ea.source}M)?(?:${Ea.source}S)?`),u1=new RegExp(`^([+-])?P${/(?:(\d+)Y)?(?:(\d+)M)?(?:(\d+)W)?(?:(\d+)D)?/.source}(?:T(?!$)${c1.source})?$`,"i"),Sn=864e5,mo=1e6*Sn,d1=6e10,Cu=1e8*Sn,yr=Ht(Cu),si=h.unaryMinus(yr),l1=h.add(h.subtract(si,Rn),ai),h1=h.subtract(h.add(yr,Rn),ai),m1=146097*Sn,U0=-271821,$0=275760,Jr=Date.UTC(1847,0,1),f1=["iso8601","hebrew","islamic","islamic-umalqura","islamic-tbla","islamic-civil","islamic-rgsa","islamicc","persian","ethiopic","ethioaa","ethiopic-amete-alem","coptic","chinese","dangi","roc","indian","buddhist","japanese","gregory"],g1=new Set(["ACT","AET","AGT","ART","AST","BET","BST","CAT","CNT","CST","CTT","EAT","ECT","IET","IST","JST","MIT","NET","NST","PLT","PNT","PRT","PST","SST","VST"]);function le(n){return typeof n=="object"&&n!==null||typeof n=="function"}function Yo(n){if(typeof n=="bigint")throw new TypeError("Cannot convert BigInt to number");return Number(n)}function Go(n){if(typeof n=="symbol")throw new TypeError("Cannot convert a Symbol value to a String");return String(n)}function N(n){const e=Yo(n);if(e===0)return 0;if(Number.isNaN(e)||e===1/0||e===-1/0)throw new RangeError("invalid number value");const t=Math.trunc(e);return t===0?0:t}function F0(n,e){const t=N(n);if(t<=0)throw e!==void 0?new RangeError(`property '${e}' cannot be a a number less than one`):new RangeError("Cannot convert a number less than one to a positive integer");return t}function Rt(n){const e=Yo(n);if(Number.isNaN(e))throw new RangeError("not a number");if(e===1/0||e===-1/0)throw new RangeError("infinity is out of range");if(!function(t){if(typeof t!="number"||Number.isNaN(t)||t===1/0||t===-1/0)return!1;const r=Math.abs(t);return Math.floor(r)===r}(e))throw new RangeError(`unsupported fractional value ${n}`);return e===0?0:e}function ci(n,e){return String(n).padStart(e,"0")}function ve(n){if(typeof n!="string")throw new TypeError(`expected a string, not ${String(n)}`);return n}function Va(n,e){if(le(n)){const t=n==null?void 0:n.toString();if(typeof t=="string"||typeof t=="number")return t;throw new TypeError("Cannot convert object to primitive value")}return n}const Za=["era","eraYear","year","month","monthCode","day","hour","minute","second","millisecond","microsecond","nanosecond","offset","timeZone"],p1={era:Go,eraYear:N,year:N,month:F0,monthCode:function(n){const e=ve(Va(n));if(e.length<3||e.length>4||e[0]!=="M"||"0123456789".indexOf(e[1])===-1||"0123456789".indexOf(e[2])===-1||e[1]+e[2]==="00"&&e[3]!=="L"||e[3]!=="L"&&e[3]!==void 0)throw new RangeError(`bad month code ${e}; must match M01-M99 or M00L-M99L`);return e},day:F0,hour:N,minute:N,second:N,millisecond:N,microsecond:N,nanosecond:N,offset:function(n){const e=ve(Va(n));return Ir(e),e},timeZone:Be},y1={hour:0,minute:0,second:0,millisecond:0,microsecond:0,nanosecond:0},_r=[["years","year","date"],["months","month","date"],["weeks","week","date"],["days","day","date"],["hours","hour","time"],["minutes","minute","time"],["seconds","second","time"],["milliseconds","millisecond","time"],["microseconds","microsecond","time"],["nanoseconds","nanosecond","time"]],H0=Object.fromEntries(_r.map(n=>[n[0],n[1]])),_1=Object.fromEntries(_r.map(([n,e])=>[e,n])),ei=_r.map(([,n])=>n),vr={day:mo,hour:36e11,minute:6e10,second:1e9,millisecond:1e6,microsecond:1e3,nanosecond:1},fo=["days","hours","microseconds","milliseconds","minutes","months","nanoseconds","seconds","weeks","years"],v1=Intl.DateTimeFormat,z0=new Map;function xu(n){const e=mi(n);let t=z0.get(e);return t===void 0&&(t=new v1("en-us",{timeZone:e,hour12:!1,era:"short",year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric"}),z0.set(e,t)),t}function Re(n){return Qe(n,I)&&!Qe(n,Z,M)}function ce(n){return Qe(n,He,ze,ke,Ye,Ge,je,We,qe,it)}function ue(n){return Qe(n,mu)}function he(n){return Qe(n,de)}function ne(n){return Qe(n,ie)}function Se(n){return Qe(n,fu)}function ht(n){return Qe(n,gu)}function $(n){return Qe(n,I,Z,M)}function v(n,e){if(!e(n))throw new TypeError("invalid receiver: method called with the wrong type of this-object")}function Cr(n){if(Qe(n,M)||Qe(n,Z))throw new TypeError("with() does not support a calendar or timeZone property");if(he(n))throw new TypeError("with() does not accept Temporal.PlainTime, use withPlainTime() instead");if(n.calendar!==void 0)throw new TypeError("with() does not support a calendar property");if(n.timeZone!==void 0)throw new TypeError("with() does not support a timeZone property")}function Ei(n,e){return e==="never"||e==="auto"&&n==="iso8601"?"":`[${e==="critical"?"!":""}u-ca=${n}]`}function jo(n){let e,t,r=!1;for(pr.lastIndex=0;t=pr.exec(n);){const{1:i,2:o,3:a}=t;if(o==="u-ca"){if(e===void 0)e=a,r=i==="!";else if(i==="!"||r)throw new RangeError(`Invalid annotations in ${n}: more than one u-ca present with critical flag`)}else if(i==="!")throw new RangeError(`Unrecognized annotation: !${o}=${a}`)}return e}function qt(n){const e=i1.exec(n);if(!e)throw new RangeError(`invalid RFC 9557 string: ${n}`);const t=jo(e[16]);let r=e[1];if(r==="-000000")throw new RangeError(`invalid RFC 9557 string: ${n}`);const i=+r,o=+(e[2]??e[4]??1),a=+(e[3]??e[5]??1),s=e[6]!==void 0,c=+(e[6]??0),u=+(e[7]??e[10]??0);let d=+(e[8]??e[11]??0);d===60&&(d=59);const l=(e[9]??e[12]??"")+"000000000",f=+l.slice(0,3),g=+l.slice(3,6),p=+l.slice(6,9);let y,_=!1;e[13]?(y=void 0,_=!0):e[14]&&(y=e[14]);const w=e[15];return js(i,o,a,c,u,d,f,g,p),{year:i,month:o,day:a,time:s?{hour:c,minute:u,second:d,millisecond:f,microsecond:g,nanosecond:p}:"start-of-day",tzAnnotation:w,offset:y,z:_,calendar:t}}function Au(n){const e=o1.exec(n);let t,r,i,o,a,s,c;if(e){c=jo(e[10]),t=+(e[1]??0),r=+(e[2]??e[5]??0),i=+(e[3]??e[6]??0),i===60&&(i=59);const u=(e[4]??e[7]??"")+"000000000";if(o=+u.slice(0,3),a=+u.slice(3,6),s=+u.slice(6,9),e[8])throw new RangeError("Z designator not supported for PlainTime")}else{let u,d;if({time:u,z:d,calendar:c}=qt(n),u==="start-of-day")throw new RangeError(`time is missing in string: ${n}`);if(d)throw new RangeError("Z designator not supported for PlainTime");({hour:t,minute:r,second:i,millisecond:o,microsecond:a,nanosecond:s}=u)}if(Zo(t,r,i,o,a,s),/[tT ][0-9][0-9]/.test(n))return{hour:t,minute:r,second:i,millisecond:o,microsecond:a,nanosecond:s,calendar:c};try{const{month:u,day:d}=zs(n);zn(1972,u,d)}catch{try{const{year:u,month:d}=Hs(n);zn(u,d,1)}catch{return{hour:t,minute:r,second:i,millisecond:o,microsecond:a,nanosecond:s,calendar:c}}}throw new RangeError(`invalid RFC 9557 time-only string ${n}; may need a T prefix`)}function Hs(n){const e=a1.exec(n);let t,r,i,o;if(e){i=jo(e[3]);let a=e[1];if(a==="-000000")throw new RangeError(`invalid RFC 9557 string: ${n}`);if(t=+a,r=+e[2],o=1,i!==void 0&&i!=="iso8601")throw new RangeError("YYYY-MM format is only valid with iso8601 calendar")}else{let a;if({year:t,month:r,calendar:i,day:o,z:a}=qt(n),a)throw new RangeError("Z designator not supported for PlainYearMonth")}return{year:t,month:r,calendar:i,referenceISODay:o}}function zs(n){const e=s1.exec(n);let t,r,i,o;if(e){if(i=jo(e[3]),t=+e[1],r=+e[2],i!==void 0&&i!=="iso8601")throw new RangeError("MM-DD format is only valid with iso8601 calendar")}else{let a;if({month:t,day:r,calendar:i,year:o,z:a}=qt(n),a)throw new RangeError("Z designator not supported for PlainMonthDay")}return{month:t,day:r,calendar:i,referenceISOYear:o}}const Iu=new RegExp(`^${wi.source}$`,"i"),Ou=new RegExp(`^${/([+-])([01][0-9]|2[0-3])(?::?([0-5][0-9])?)?/.source}$`);function Nu(n){const e=E1.test(n)?"Seconds not allowed in offset time zone":"Invalid time zone";throw new RangeError(`${e}: ${n}`)}function Mn(n){return Iu.test(n)||Nu(n),Ou.test(n)?{offsetMinutes:Ir(n)/6e10}:{tzName:n}}function ti(n,e,t,r){let i=n,o=e,a=t;switch(r){case"reject":zn(i,o,a);break;case"constrain":({year:i,month:o,day:a}=Xu(i,o,a))}return{year:i,month:o,day:a}}function Wo(n,e,t,r,i,o,a){let s=n,c=e,u=t,d=r,l=i,f=o;switch(a){case"reject":Zo(s,c,u,d,l,f);break;case"constrain":s=Ve(s,0,23),c=Ve(c,0,59),u=Ve(u,0,59),d=Ve(d,0,999),l=Ve(l,0,999),f=Ve(f,0,999)}return{hour:s,minute:c,second:u,millisecond:d,microsecond:l,nanosecond:f}}function Lu(n){if(!le(n))throw new TypeError("invalid duration-like");const e={years:void 0,months:void 0,weeks:void 0,days:void 0,hours:void 0,minutes:void 0,seconds:void 0,milliseconds:void 0,microseconds:void 0,nanoseconds:void 0};let t=!1;for(let r=0;r<fo.length;r++){const i=fo[r],o=n[i];o!==void 0&&(t=!0,e[i]=Rt(o))}if(!t)throw new TypeError("invalid duration-like");return e}function Ne({years:n,months:e,weeks:t,days:r},i,o,a){return{years:n,months:a??e,weeks:o??t,days:i??r}}function W(n,e){return{isoDate:n,time:e}}function j(n){return sn(n,"overflow",["constrain","reject"],"constrain")}function ni(n){return sn(n,"disambiguation",["compatible","earlier","later","reject"],"compatible")}function xt(n,e){return sn(n,"roundingMode",["ceil","floor","expand","trunc","halfCeil","halfFloor","halfExpand","halfTrunc","halfEven"],e)}function ao(n,e){return sn(n,"offset",["prefer","use","ignore","reject"],e)}function Ti(n){return sn(n,"calendarName",["auto","always","never","critical"],"auto")}function xr(n){let e=n.roundingIncrement;if(e===void 0)return 1;const t=N(e);if(t<1||t>1e9)throw new RangeError(`roundingIncrement must be at least 1 and at most 1e9, not ${e}`);return t}function Ar(n,e,t){const r=t?e:e-1;if(n>r)throw new RangeError(`roundingIncrement must be at least 1 and less than ${r}, not ${n}`);if(e%n!=0)throw new RangeError(`Rounding increment must divide evenly into ${e}`)}function bi(n){const e=n.fractionalSecondDigits;if(e===void 0)return"auto";if(typeof e!="number"){if(Go(e)!=="auto")throw new RangeError(`fractionalSecondDigits must be 'auto' or 0 through 9, not ${e}`);return"auto"}const t=Math.floor(e);if(!Number.isFinite(t)||t<0||t>9)throw new RangeError(`fractionalSecondDigits must be 'auto' or 0 through 9, not ${e}`);return t}function Mi(n,e){switch(n){case"minute":return{precision:"minute",unit:"minute",increment:1};case"second":return{precision:0,unit:"second",increment:1};case"millisecond":return{precision:3,unit:"millisecond",increment:1};case"microsecond":return{precision:6,unit:"microsecond",increment:1};case"nanosecond":return{precision:9,unit:"nanosecond",increment:1}}switch(e){case"auto":return{precision:e,unit:"nanosecond",increment:1};case 0:return{precision:e,unit:"second",increment:1};case 1:case 2:case 3:return{precision:e,unit:"millisecond",increment:10**(3-e)};case 4:case 5:case 6:return{precision:e,unit:"microsecond",increment:10**(6-e)};case 7:case 8:case 9:return{precision:e,unit:"nanosecond",increment:10**(9-e)};default:throw new RangeError(`fractionalSecondDigits must be 'auto' or 0 through 9, not ${e}`)}}const dn=Symbol("~required~");function at(n,e,t,r,i=[]){let o=[];for(let u=0;u<_r.length;u++){const d=_r[u],l=d[1],f=d[2];t!=="datetime"&&t!==f||o.push(l)}o=o.concat(i);let a=r;a===dn?a=void 0:a!==void 0&&o.push(a);let s=[];s=s.concat(o);for(let u=0;u<o.length;u++){const d=o[u],l=_1[d];l!==void 0&&s.push(l)}let c=sn(n,e,s,a);if(c===void 0&&r===dn)throw new RangeError(`${e} is required`);return c&&c in H0?H0[c]:c}function Ta(n){const e=n.relativeTo;if(e===void 0)return{};let t,r,i,o,a,s="option",c=!1;if(le(e)){if($(e))return{zonedRelativeTo:e};if(ue(e))return{plainRelativeTo:e};if(ne(e))return{plainRelativeTo:Ze(m(e,ie).isoDate,m(e,M))};i=xi(e);const u=pt(i,e,["year","month","monthCode","day"],["hour","minute","second","millisecond","microsecond","nanosecond","offset","timeZone"],[]);({isoDate:t,time:r}=Ri(i,u,"constrain")),{offset:a,timeZone:o}=u,a===void 0&&(s="wall")}else{let u,d,l,f,g;if({year:l,month:f,day:g,time:r,calendar:i,tzAnnotation:u,offset:a,z:d}=qt(ve(e)),u)o=Be(u),d?s="exact":a||(s="wall"),c=!0;else if(d)throw new RangeError("Z designator not supported for PlainDate relativeTo; either remove the Z or add a bracketed time zone");i||(i="iso8601"),i=Je(i),t={year:l,month:f,day:g}}return o===void 0?{plainRelativeTo:Ze(t,i)}:{zonedRelativeTo:Ie(go(t,r,s,s==="option"?Ir(a):0,o,"compatible","reject",c),o,i)}}function Jt(n){return m(n,He)!==0?"year":m(n,ze)!==0?"month":m(n,rt)!==0?"week":m(n,ke)!==0?"day":m(n,Ye)!==0?"hour":m(n,Ge)!==0?"minute":m(n,je)!==0?"second":m(n,We)!==0?"millisecond":m(n,qe)!==0?"microsecond":"nanosecond"}function on(n,e){return ei.indexOf(n)>ei.indexOf(e)?e:n}function Pt(n){return n==="year"||n==="month"||n==="week"}function en(n){return Pt(n)||n==="day"?"date":"time"}function xn(n){return xe("%calendarImpl%")(n)}function Di(n){return xe("%calendarImpl%")(m(n,M))}function Ke(n,e,t="date"){const r=Object.create(null),i=xn(n).isoToDate(e,{year:!0,monthCode:!0,day:!0});return r.monthCode=i.monthCode,t!=="month-day"&&t!=="date"||(r.day=i.day),t!=="year-month"&&t!=="date"||(r.year=i.year),r}function pt(n,e,t,r,i){const o=xn(n).extraFields(t),a=t.concat(r,o),s=Object.create(null);let c=!1;a.sort();for(let u=0;u<a.length;u++){const d=a[u],l=e[d];if(l!==void 0)c=!0,s[d]=(0,p1[d])(l);else if(i!=="partial"){if(i.includes(d))throw new TypeError(`required property '${d}' missing or undefined`);s[d]=y1[d]}}if(i==="partial"&&!c)throw new TypeError("no supported properties found");return s}function Ba(n,e="complete"){const t=["hour","microsecond","millisecond","minute","nanosecond","second"];let r=!1;const i=Object.create(null);for(let o=0;o<t.length;o++){const a=t[o],s=n[a];s!==void 0?(i[a]=N(s),r=!0):e==="complete"&&(i[a]=0)}if(!r)throw new TypeError("invalid time-like");return i}function Yr(n,e){if(le(n)){if(ue(n))return j(A(e)),Ze(m(n,O),m(n,M));if($(n)){const c=Et(m(n,Z),m(n,I));return j(A(e)),Ze(c.isoDate,m(n,M))}if(ne(n))return j(A(e)),Ze(m(n,ie).isoDate,m(n,M));const s=xi(n);return Ze(Cn(s,pt(s,n,["year","month","monthCode","day"],[],[]),j(A(e))),s)}let{year:t,month:r,day:i,calendar:o,z:a}=qt(ve(n));if(a)throw new RangeError("Z designator not supported for PlainDate");return o||(o="iso8601"),o=Je(o),j(A(e)),Ze({year:t,month:r,day:i},o)}function Ri(n,e,t){return W(Cn(n,e,t),Wo(e.hour,e.minute,e.second,e.millisecond,e.microsecond,e.nanosecond,t))}function Gr(n,e){let t,r,i;if(le(n)){if(ne(n))return j(A(e)),yt(m(n,ie),m(n,M));if($(n)){const s=Et(m(n,Z),m(n,I));return j(A(e)),yt(s,m(n,M))}if(ue(n))return j(A(e)),yt(W(m(n,O),{deltaDays:0,hour:0,minute:0,second:0,millisecond:0,microsecond:0,nanosecond:0}),m(n,M));i=xi(n);const o=pt(i,n,["year","month","monthCode","day"],["hour","minute","second","millisecond","microsecond","nanosecond"],[]),a=j(A(e));({isoDate:t,time:r}=Ri(i,o,a))}else{let o,a,s,c;if({year:a,month:s,day:c,time:r,calendar:i,z:o}=qt(ve(n)),o)throw new RangeError("Z designator not supported for PlainDateTime");r==="start-of-day"&&(r={deltaDays:0,hour:0,minute:0,second:0,millisecond:0,microsecond:0,nanosecond:0}),js(a,s,c,r.hour,r.minute,r.second,r.millisecond,r.microsecond,r.nanosecond),i||(i="iso8601"),i=Je(i),j(A(e)),t={year:a,month:s,day:c}}return yt(W(t,r),i)}function wt(n){const e=xe("%Temporal.Duration%");if(ce(n))return new e(m(n,He),m(n,ze),m(n,rt),m(n,ke),m(n,Ye),m(n,Ge),m(n,je),m(n,We),m(n,qe),m(n,it));if(!le(n))return function(i){const{years:o,months:a,weeks:s,days:c,hours:u,minutes:d,seconds:l,milliseconds:f,microseconds:g,nanoseconds:p}=function(y){const _=u1.exec(y);if(!_)throw new RangeError(`invalid duration: ${y}`);if(_.every((mn,Kn)=>Kn<2||mn===void 0))throw new RangeError(`invalid duration: ${y}`);const w=_[1]==="-"?-1:1,T=_[2]===void 0?0:N(_[2])*w,b=_[3]===void 0?0:N(_[3])*w,S=_[4]===void 0?0:N(_[4])*w,R=_[5]===void 0?0:N(_[5])*w,z=_[6]===void 0?0:N(_[6])*w,Y=_[7],V=_[8],U=_[9],ee=_[10],G=_[11];let H=0,fe=0,ye=0;if(Y!==void 0){if(V??U??ee??G)throw new RangeError("only the smallest unit can be fractional");ye=3600*N((Y+"000000000").slice(0,9))*w}else if(H=V===void 0?0:N(V)*w,U!==void 0){if(ee??G)throw new RangeError("only the smallest unit can be fractional");ye=60*N((U+"000000000").slice(0,9))*w}else fe=ee===void 0?0:N(ee)*w,G!==void 0&&(ye=N((G+"000000000").slice(0,9))*w);const Ae=ye%1e3,ut=Math.trunc(ye/1e3)%1e3,dt=Math.trunc(ye/1e6)%1e3;return fe+=Math.trunc(ye/1e9)%60,H+=Math.trunc(ye/6e10),Bo(T,b,S,R,z,H,fe,dt,ut,Ae),{years:T,months:b,weeks:S,days:R,hours:z,minutes:H,seconds:fe,milliseconds:dt,microseconds:ut,nanoseconds:Ae}}(i);return new(xe("%Temporal.Duration%"))(o,a,s,c,u,d,l,f,g,p)}(ve(n));const t={years:0,months:0,weeks:0,days:0,hours:0,minutes:0,seconds:0,milliseconds:0,microseconds:0,nanoseconds:0};let r=Lu(n);for(let i=0;i<fo.length;i++){const o=fo[i],a=r[o];a!==void 0&&(t[o]=a)}return new e(t.years,t.months,t.weeks,t.days,t.hours,t.minutes,t.seconds,t.milliseconds,t.microseconds,t.nanoseconds)}function jr(n){let e;if(le(n)){if(Re(n)||$(n))return $t(m(n,I));e=Va(n)}else e=n;const{year:t,month:r,day:i,time:o,offset:a,z:s}=function(y){const _=qt(y);if(!_.z&&!_.offset)throw new RangeError("Temporal.Instant requires a time zone offset");return _}(ve(e)),{hour:c=0,minute:u=0,second:d=0,millisecond:l=0,microsecond:f=0,nanosecond:g=0}=o==="start-of-day"?{}:o,p=hi(t,r,i,c,u,d,l,f,g-(s?0:Ir(a)));return hr(p.isoDate),$t(Ce(p))}function k0(n,e){if(le(n)){if(ht(n))return j(A(e)),sr(m(n,O),m(n,M));let s;return Qe(n,M)?s=m(n,M):(s=n.calendar,s===void 0&&(s="iso8601"),s=Ci(s)),sr(po(s,pt(s,n,["year","month","monthCode","day"],[],[]),j(A(e))),s)}let{month:t,day:r,referenceISOYear:i,calendar:o}=zs(ve(n));if(o===void 0&&(o="iso8601"),o=Je(o),j(A(e)),o==="iso8601")return sr({year:1972,month:t,day:r},o);let a={year:i,month:t,day:r};return Bn(a),a=po(o,Ke(o,a,"month-day"),"constrain"),sr(a,o)}function wn(n,e){let t;if(le(n)){if(he(n))return j(A(e)),nn(m(n,de));if(ne(n))return j(A(e)),nn(m(n,ie).time);if($(n)){const u=Et(m(n,Z),m(n,I));return j(A(e)),nn(u.time)}const{hour:r,minute:i,second:o,millisecond:a,microsecond:s,nanosecond:c}=Ba(n);t=Wo(r,i,o,a,s,c,j(A(e)))}else t=Au(ve(n)),j(A(e));return nn(t)}function Pu(n){return n===void 0?{deltaDays:0,hour:0,minute:0,second:0,millisecond:0,microsecond:0,nanosecond:0}:m(wn(n),de)}function Wr(n,e){if(le(n)){if(Se(n))return j(A(e)),lr(m(n,O),m(n,M));const s=xi(n);return lr(ui(s,pt(s,n,["year","month","monthCode"],[],[]),j(A(e))),s)}let{year:t,month:r,referenceISODay:i,calendar:o}=Hs(ve(n));o===void 0&&(o="iso8601"),o=Je(o),j(A(e));let a={year:t,month:r,day:i};return Ws(a),a=ui(o,Ke(o,a,"year-month"),"constrain"),lr(a,o)}function go(n,e,t,r,i,o,a,s){if(e==="start-of-day")return _n(i,n);const c=W(n,e);if(t==="wall"||a==="ignore")return Le(i,c,o);if(t==="exact"||a==="use"){const l=hi(n.year,n.month,n.day,e.hour,e.minute,e.second,e.millisecond,e.microsecond,e.nanosecond-r);hr(l.isoDate);const f=Ce(l);return Yt(f),f}hr(n);const u=Ce(c),d=di(i,c);for(let l=0;l<d.length;l++){const f=d[l],g=h.toNumber(h.subtract(u,f)),p=En(g,6e10,"halfExpand");if(g===r||s&&p===r)return f}if(a==="reject"){const l=Xa(r),f=li(c,"iso8601","auto");throw new RangeError(`Offset ${l} is invalid for ${f} in ${i}`)}return ju(d,i,c,o)}function qr(n,e){let t,r,i,o,a,s,c,u=!1,d="option";if(le(n)){if($(n)){const y=A(e);return ni(y),ao(y,"reject"),j(y),Ie(m(n,I),m(n,Z),m(n,M))}a=xi(n);const f=pt(a,n,["year","month","monthCode","day"],["hour","minute","second","millisecond","microsecond","nanosecond","offset","timeZone"],["timeZone"]);({offset:o,timeZone:i}=f),o===void 0&&(d="wall");const g=A(e);s=ni(g),c=ao(g,"reject");const p=j(g);({isoDate:t,time:r}=Ri(a,f,p))}else{let f,g,p,y,_;({year:p,month:y,day:_,time:r,tzAnnotation:f,offset:o,z:g,calendar:a}=function(T){const b=qt(T);if(!b.tzAnnotation)throw new RangeError("Temporal.ZonedDateTime requires a time zone ID in brackets");return b}(ve(n))),i=Be(f),g?d="exact":o||(d="wall"),a||(a="iso8601"),a=Je(a),u=!0;const w=A(e);s=ni(w),c=ao(w,"reject"),j(w),t={year:p,month:y,day:_}}let l=0;return d==="option"&&(l=Ir(o)),Ie(go(t,r,d,l,i,s,c,u),i,a)}function Uu(n,e,t){Bn(e),ln(n),P(n,O,e),P(n,M,t),P(n,mu,!0)}function Ze(n,e){const t=xe("%Temporal.PlainDate%"),r=Object.create(t.prototype);return Uu(r,n,e),r}function $u(n,e,t){kn(e),ln(n),P(n,ie,e),P(n,M,t)}function yt(n,e){const t=xe("%Temporal.PlainDateTime%"),r=Object.create(t.prototype);return $u(r,n,e),r}function Fu(n,e,t){Bn(e),ln(n),P(n,O,e),P(n,M,t),P(n,gu,!0)}function sr(n,e){const t=xe("%Temporal.PlainMonthDay%"),r=Object.create(t.prototype);return Fu(r,n,e),r}function Hu(n,e){ln(n),P(n,de,e)}function nn(n){const e=xe("%Temporal.PlainTime%"),t=Object.create(e.prototype);return Hu(t,n),t}function zu(n,e,t){Ws(e),ln(n),P(n,O,e),P(n,M,t),P(n,fu,!0)}function lr(n,e){const t=xe("%Temporal.PlainYearMonth%"),r=Object.create(t.prototype);return zu(r,n,e),r}function ku(n,e){Yt(e),ln(n),P(n,I,e)}function $t(n){const e=xe("%Temporal.Instant%"),t=Object.create(e.prototype);return ku(t,n),t}function Yu(n,e,t,r){Yt(e),ln(n),P(n,I,e),P(n,Z,t),P(n,M,r)}function Ie(n,e,t="iso8601"){const r=xe("%Temporal.ZonedDateTime%"),i=Object.create(r.prototype);return Yu(i,n,e,t),i}function Y0(n){return Za.filter(e=>n[e]!==void 0)}function Hn(n,e,t){const r=Y0(t),i=xn(n).fieldKeysToIgnore(r),o=Object.create(null),a=Y0(e);for(let s=0;s<Za.length;s++){let c;const u=Za[s];a.includes(u)&&!i.includes(u)&&(c=e[u]),r.includes(u)&&(c=t[u]),c!==void 0&&(o[u]=c)}return o}function ft(n,e,t,r){const i=xn(n).dateAdd(e,t,r);return Bn(i),i}function Si(n,e,t,r){return xn(n).dateUntil(e,t,r)}function Ci(n){if(le(n)&&Qe(n,M))return m(n,M);const e=ve(n);try{return Je(e)}catch{}let t;try{({calendar:t}=qt(e))}catch{try{({calendar:t}=Au(e))}catch{try{({calendar:t}=Hs(e))}catch{({calendar:t}=zs(e))}}}return t||(t="iso8601"),Je(t)}function xi(n){if(Qe(n,M))return m(n,M);const{calendar:e}=n;return e===void 0?"iso8601":Ci(e)}function kt(n,e){return Je(n)===Je(e)}function Cn(n,e,t){const r=xn(n);r.resolveFields(e,"date");const i=r.dateToISO(e,t);return Bn(i),i}function ui(n,e,t){const r=xn(n);r.resolveFields(e,"year-month"),e.day=1;const i=r.dateToISO(e,t);return Ws(i),i}function po(n,e,t){const r=xn(n);r.resolveFields(e,"month-day");const i=r.monthDayToISOReferenceDate(e,t);return Bn(i),i}function Be(n){if(le(n)&&$(n))return m(n,Z);const e=ve(n);if(e==="UTC")return"UTC";const{tzName:t,offsetMinutes:r}=function(o){const{tzAnnotation:a,offset:s,z:c}=function(u){if(Iu.test(u))return{tzAnnotation:u,offset:void 0,z:!1};try{const{tzAnnotation:d,offset:l,z:f}=qt(u);if(f||d||l)return{tzAnnotation:d,offset:l,z:f}}catch{}Nu(u)}(o);return a?Mn(a):c?Mn("UTC"):s?Mn(s):void 0}(e);if(r!==void 0)return ks(r);const i=yo(t);if(!i)throw new RangeError(`Unrecognized time zone ${t}`);return i.identifier}function Gu(n,e){if(n===e)return!0;const t=Mn(n).offsetMinutes,r=Mn(e).offsetMinutes;if(t===void 0&&r===void 0){const i=yo(e);if(!i)return!1;const o=yo(n);return!!o&&o.primaryIdentifier===i.primaryIdentifier}return t===r}function rn(n,e){const t=Mn(n).offsetMinutes;return t!==void 0?6e10*t:Ka(n,e)}function Xa(n){const e=n<0?"-":"+",t=Math.abs(n),r=Math.floor(t/36e11),i=Math.floor(t/6e10)%60,o=Math.floor(t/1e9)%60,a=t%1e9;return`${e}${qo(r,i,o,a,o===0&&a===0?"minute":"auto")}`}function Et(n,e){const t=rn(n,e);let{isoDate:{year:r,month:i,day:o},time:{hour:a,minute:s,second:c,millisecond:u,microsecond:d,nanosecond:l}}=Vu(e);return hi(r,i,o,a,s,c,u,d,l+t)}function Le(n,e,t){return ju(di(n,e),n,e,t)}function ju(n,e,t,r){const i=n.length;if(i===1)return n[0];if(i)switch(r){case"compatible":case"earlier":return n[0];case"later":return n[i-1];case"reject":throw new RangeError("multiple instants found")}if(r==="reject")throw new RangeError("multiple instants found");const o=Ce(t),a=h.subtract(o,Rn);Yt(a);const s=rn(e,a),c=h.add(o,Rn);Yt(c);const u=rn(e,c)-s;switch(r){case"earlier":{const d=F.fromComponents(0,0,0,0,0,-u),l=wr(t.time,d);return di(e,W(st(t.isoDate.year,t.isoDate.month,t.isoDate.day+l.deltaDays),l))[0]}case"compatible":case"later":{const d=F.fromComponents(0,0,0,0,0,u),l=wr(t.time,d),f=di(e,W(st(t.isoDate.year,t.isoDate.month,t.isoDate.day+l.deltaDays),l));return f[f.length-1]}}}function di(n,e){if(n==="UTC")return hr(e.isoDate),[Ce(e)];const t=Mn(n).offsetMinutes;if(t!==void 0){const r=hi(e.isoDate.year,e.isoDate.month,e.isoDate.day,e.time.hour,e.time.minute-t,e.time.second,e.time.millisecond,e.time.microsecond,e.time.nanosecond);hr(r.isoDate);const i=Ce(r);return Yt(i),[i]}return hr(e.isoDate),function(r,i){let o=Ce(i),a=h.subtract(o,Rn);h.lessThan(a,si)&&(a=o);let s=h.add(o,Rn);h.greaterThan(s,yr)&&(s=o);const c=Ka(r,a),u=Ka(r,s);return(c===u?[c]:[c,u]).map(l=>{const f=h.subtract(o,h.BigInt(l)),g=function(p,y){const{epochMilliseconds:_,time:{millisecond:w,microsecond:T,nanosecond:b}}=Vu(y),{year:S,month:R,day:z,hour:Y,minute:V,second:U}=Zu(p,_);return hi(S,R,z,Y,V,U,w,T,b)}(r,f);if(Er(i,g)===0)return Yt(f),f}).filter(l=>l!==void 0)}(n,e)}function _n(n,e){const t=W(e,{deltaDays:0,hour:0,minute:0,second:0,millisecond:0,microsecond:0,nanosecond:0}),r=di(n,t);if(r.length)return r[0];const i=Ce(t),o=h.subtract(i,Rn);return Yt(o),Gs(n,o)}function Ai(n){let e;return e=n<0||n>9999?(n<0?"-":"+")+ci(Math.abs(n),6):ci(n,4),e}function gt(n){return ci(n,2)}function Wu(n,e){let t;if(e==="auto"){if(n===0)return"";t=ci(n,9).replace(/0+$/,"")}else{if(e===0)return"";t=ci(n,9).slice(0,e)}return`.${t}`}function qo(n,e,t,r,i){let o=`${gt(n)}:${gt(e)}`;return i==="minute"||(o+=`:${gt(t)}`,o+=Wu(r,i)),o}function G0(n,e,t){let r=e;r===void 0&&(r="UTC");const i=m(n,I),o=li(Et(r,i),"iso8601",t,"never");let a="Z";return e!==void 0&&(a=qu(rn(r,i))),`${o}${a}`}function Zi(n,e){const t=m(n,He),r=m(n,ze),i=m(n,rt),o=m(n,ke),a=m(n,Ye),s=m(n,Ge),c=vo(n);let u="";t!==0&&(u+=`${Math.abs(t)}Y`),r!==0&&(u+=`${Math.abs(r)}M`),i!==0&&(u+=`${Math.abs(i)}W`),o!==0&&(u+=`${Math.abs(o)}D`);let d="";a!==0&&(d+=`${Math.abs(a)}H`),s!==0&&(d+=`${Math.abs(s)}M`);const l=F.fromComponents(0,0,m(n,je),m(n,We),m(n,qe),m(n,it));l.isZero()&&!["second","millisecond","microsecond","nanosecond"].includes(Jt(n))&&e==="auto"||(d+=`${Math.abs(l.sec)}${Wu(Math.abs(l.subsec),e)}S`);let f=`${c<0?"-":""}P${u}`;return d&&(f=`${f}T${d}`),f}function j0(n,e="auto"){const{year:t,month:r,day:i}=m(n,O);return`${Ai(t)}-${gt(r)}-${gt(i)}${Ei(m(n,M),e)}`}function W0({hour:n,minute:e,second:t,millisecond:r,microsecond:i,nanosecond:o},a){return qo(n,e,t,1e6*r+1e3*i+o,a)}function li(n,e,t,r="auto"){const{isoDate:{year:i,month:o,day:a},time:{hour:s,minute:c,second:u,millisecond:d,microsecond:l,nanosecond:f}}=n;return`${Ai(i)}-${gt(o)}-${gt(a)}T${qo(s,c,u,1e6*d+1e3*l+f,t)}${Ei(e,r)}`}function q0(n,e="auto"){const{year:t,month:r,day:i}=m(n,O);let o=`${gt(r)}-${gt(i)}`;const a=m(n,M);e!=="always"&&e!=="critical"&&a==="iso8601"||(o=`${Ai(t)}-${o}`);const s=Ei(a,e);return s&&(o+=s),o}function V0(n,e="auto"){const{year:t,month:r,day:i}=m(n,O);let o=`${Ai(t)}-${gt(r)}`;const a=m(n,M);e!=="always"&&e!=="critical"&&a==="iso8601"||(o+=`-${gt(i)}`);const s=Ei(a,e);return s&&(o+=s),o}function Z0(n,e,t="auto",r="auto",i="auto",o=void 0){let a=m(n,I);if(o){const{unit:d,increment:l,roundingMode:f}=o;a=ts(a,l,d,f)}const s=m(n,Z),c=rn(s,a);let u=li(Et(s,a),"iso8601",e,"never");return i!=="never"&&(u+=qu(c)),r!=="never"&&(u+=`[${r==="critical"?"!":""}${s}]`),u+=Ei(m(n,M),t),u}function B0(n){return Ou.test(n)}function Ir(n){const e=T1.exec(n);if(!e)throw new RangeError(`invalid time zone offset: ${n}; must match ±HH:MM[:SS.SSSSSSSSS]`);return(e[1]==="-"?-1:1)*(1e9*(60*(60*+e[2]+ +(e[3]||0))+ +(e[4]||0))+ +((e[5]||0)+"000000000").slice(0,9))}let In;const w1=Object.assign(Object.create(null),{"/":!0,"-":!0,_:!0});function yo(n){var o;if(In===void 0){const a=(o=Intl.supportedValuesOf)==null?void 0:o.call(Intl,"timeZone");if(a){In=new Map;for(let s=0;s<a.length;s++){const c=a[s];In.set(mi(c),c)}}else In=null}const e=mi(n);let t=In==null?void 0:In.get(e);if(t)return{identifier:t,primaryIdentifier:t};try{t=xu(n).resolvedOptions().timeZone}catch{return}if(e==="antarctica/south_pole"&&(t="Antarctica/McMurdo"),g1.has(n))throw new RangeError(`${n} is a legacy time zone identifier from ICU. Use ${t} instead`);const r=[...e].map((a,s)=>s===0||w1[e[s-1]]?a.toUpperCase():a).join("").split("/");if(r.length===1)return e==="gb-eire"?{identifier:"GB-Eire",primaryIdentifier:t}:{identifier:e.length<=3||/[-0-9]/.test(e)?e.toUpperCase():r[0],primaryIdentifier:t};if(r[0]==="Etc")return{identifier:`Etc/${["Zulu","Greenwich","Universal"].includes(r[1])?r[1]:r[1].toUpperCase()}`,primaryIdentifier:t};if(r[0]==="Us")return{identifier:`US/${r[1]}`,primaryIdentifier:t};const i=new Map([["Act","ACT"],["Lhi","LHI"],["Nsw","NSW"],["Dar_Es_Salaam","Dar_es_Salaam"],["Port_Of_Spain","Port_of_Spain"],["Port-Au-Prince","Port-au-Prince"],["Isle_Of_Man","Isle_of_Man"],["Comodrivadavia","ComodRivadavia"],["Knox_In","Knox_IN"],["Dumontdurville","DumontDUrville"],["Mcmurdo","McMurdo"],["Denoronha","DeNoronha"],["Easterisland","EasterIsland"],["Bajanorte","BajaNorte"],["Bajasur","BajaSur"]]);return r[1]=i.get(r[1])??r[1],r.length>2&&(r[2]=i.get(r[2])??r[2]),{identifier:r.join("/"),primaryIdentifier:t}}function $n(n,e){const{year:t,month:r,day:i,hour:o,minute:a,second:s}=Zu(n,e);let c=e%1e3;return c<0&&(c+=1e3),1e6*(Ys({isoDate:{year:t,month:r,day:i},time:{hour:o,minute:a,second:s,millisecond:c}})-e)}function Ka(n,e){return $n(n,Tt(e,"floor"))}function ks(n){const e=n<0?"-":"+",t=Math.abs(n);return`${e}${qo(Math.floor(t/60),t%60,0,0,"minute")}`}function qu(n){return ks(En(n,d1,"halfExpand")/6e10)}function Ys({isoDate:{year:n,month:e,day:t},time:{hour:r,minute:i,second:o,millisecond:a}}){const s=n%400,c=(n-s)/400,u=new Date;return u.setUTCHours(r,i,o,a),u.setUTCFullYear(s,e-1,t),u.getTime()+m1*c}function Ce(n){const e=Ys(n),t=1e3*n.time.microsecond+n.time.nanosecond;return h.add(Ht(e),h.BigInt(t))}function Vu(n){let e=Tt(n,"trunc"),t=h.toNumber(h.remainder(n,vi));t<0&&(t+=1e6,e-=1);const r=Math.floor(t/1e3)%1e3,i=t%1e3,o=new Date(e);return{epochMilliseconds:e,isoDate:{year:o.getUTCFullYear(),month:o.getUTCMonth()+1,day:o.getUTCDate()},time:{hour:o.getUTCHours(),minute:o.getUTCMinutes(),second:o.getUTCSeconds(),millisecond:o.getUTCMilliseconds(),microsecond:r,nanosecond:i}}}function Gs(n,e){if(n==="UTC")return null;const t=Tt(e,"floor");if(t<Jr)return Gs(n,Ht(Jr));const r=Date.now(),i=Math.max(t,r)+366*Sn*3;let o=t,a=$n(n,o),s=o,c=a;for(;a===c&&o<i;){if(s=o+2*Sn*7,s>Cu)return null;c=$n(n,s),a===c&&(o=s)}return a===c?null:Ht(id(u=>$n(n,u),o,s,a,c))}function Qa(n,e){if(n==="UTC")return null;const t=Tt(e,"ceil"),r=Date.now(),i=r+366*Sn*3;if(t>i){const u=Qa(n,Ht(i));if(u===null||h.lessThan(u,Ht(r)))return u}if(n==="Africa/Casablanca"||n==="Africa/El_Aaiun"){const u=Date.UTC(2088,0,1);if(u<t)return Qa(n,Ht(u))}let o=t-1;if(o<Jr)return null;let a=$n(n,o),s=o,c=a;for(;a===c&&o>Jr;){if(s=o-2*Sn*7,s<Jr)return null;c=$n(n,s),a===c&&(o=s)}return a===c?null:Ht(id(u=>$n(n,u),s,o,c,a))}function Zu(n,e){return function(t){const r=t.split(/[^\w]+/);if(r.length!==7)throw new RangeError(`expected 7 parts in "${t}`);const i=+r[0],o=+r[1];let a=+r[2];const s=r[3];if(s[0]==="b"||s[0]==="B")a=1-a;else if(s[0]!=="a"&&s[0]!=="A")throw new RangeError(`Unknown era ${s} in "${t}`);const c=r[4]==="24"?0:+r[4],u=+r[5],d=+r[6];if(!(Number.isFinite(a)&&Number.isFinite(i)&&Number.isFinite(o)&&Number.isFinite(c)&&Number.isFinite(u)&&Number.isFinite(d)))throw new RangeError(`Invalid number in "${t}`);return{year:a,month:i,day:o,hour:c,minute:u,second:d}}(xu(n).format(e))}function _o(n){return n!==void 0&&!(n%4!=0||n%100==0&&n%400!=0)}function Fn(n,e){return{standard:[31,28,31,30,31,30,31,31,30,31,30,31],leapyear:[31,29,31,30,31,30,31,31,30,31,30,31]}[_o(n)?"leapyear":"standard"][e-1]}function vo(n){const e=[m(n,He),m(n,ze),m(n,rt),m(n,ke),m(n,Ye),m(n,Ge),m(n,je),m(n,We),m(n,qe),m(n,it)];for(let t=0;t<e.length;t++){const r=e[t];if(r!==0)return r<0?-1:1}return 0}function Vo(n){const e=["years","months","weeks","days"];for(let t=0;t<e.length;t++){const r=n[e[t]];if(r!==0)return r<0?-1:1}return 0}function Bu(n){const e=Vo(n.date);return e!==0?e:n.time.sign()}function Pn(n,e){let t=n,r=e;if(!Number.isFinite(t)||!Number.isFinite(r))throw new RangeError("infinity is out of range");return r-=1,t+=Math.floor(r/12),r%=12,r<0&&(r+=12),r+=1,{year:t,month:r}}function st(n,e,t){let r=n,i=e,o=t;if(!Number.isFinite(o))throw new RangeError("infinity is out of range");({year:r,month:i}=Pn(r,i));const a=146097;if(Math.abs(o)>a){const u=Math.trunc(o/a);r+=400*u,o-=u*a}let s=0,c=i>2?r:r-1;for(;s=_o(c)?366:365,o<-s;)r-=1,c-=1,o+=s;for(c+=1;s=_o(c)?366:365,o>s;)r+=1,c+=1,o-=s;for(;o<1;)({year:r,month:i}=Pn(r,i-1)),o+=Fn(r,i);for(;o>Fn(r,i);)o-=Fn(r,i),{year:r,month:i}=Pn(r,i+1);return{year:r,month:i,day:o}}function hi(n,e,t,r,i,o,a,s,c){const u=vn(r,i,o,a,s,c);return W(st(n,e,t+u.deltaDays),u)}function vn(n,e,t,r,i,o){let a,s=n,c=e,u=t,d=r,l=i,f=o;({div:a,mod:f}=ar(f,3)),l+=a,f<0&&(l-=1,f+=1e3),{div:a,mod:l}=ar(l,3),d+=a,l<0&&(d-=1,l+=1e3),u+=Math.trunc(d/1e3),d%=1e3,d<0&&(u-=1,d+=1e3),c+=Math.trunc(u/60),u%=60,u<0&&(c-=1,u+=60),s+=Math.trunc(c/60),c%=60,c<0&&(s-=1,c+=60);let g=Math.trunc(s/24);return s%=24,s<0&&(g-=1,s+=24),g+=0,s+=0,c+=0,u+=0,d+=0,l+=0,f+=0,{deltaDays:g,hour:s,minute:c,second:u,millisecond:d,microsecond:l,nanosecond:f}}function X0(n,e){const t=Ne(n,0);if(Vo(t)===0)return n.days;const r=m(e,O),i=ft(m(e,M),r,t,"constrain"),o=Yn(r.year,r.month-1,r.day),a=Yn(i.year,i.month-1,i.day)-o;return n.days+a}function ct(n){return new(xe("%Temporal.Duration%"))(-m(n,He),-m(n,ze),-m(n,rt),-m(n,ke),-m(n,Ye),-m(n,Ge),-m(n,je),-m(n,We),-m(n,qe),-m(n,it))}function Ve(n,e,t){return Math.min(t,Math.max(e,n))}function Xu(n,e,t){const r=Ve(e,1,12);return{year:n,month:r,day:Ve(t,1,Fn(n,r))}}function be(n,e,t){if(n<e||n>t)throw new RangeError(`value out of range: ${e} <= ${n} <= ${t}`)}function zn(n,e,t){be(e,1,12),be(t,1,Fn(n,e))}function Bn(n){kn(W(n,{deltaDays:0,hour:12,minute:0,second:0,millisecond:0,microsecond:0,nanosecond:0}))}function Zo(n,e,t,r,i,o){be(n,0,23),be(e,0,59),be(t,0,59),be(r,0,999),be(i,0,999),be(o,0,999)}function js(n,e,t,r,i,o,a,s,c){zn(n,e,t),Zo(r,i,o,a,s,c)}function kn(n){const e=Ce(n);(h.lessThan(e,l1)||h.greaterThan(e,h1))&&Yt(e)}function Ja(n){Ce(n)}function Yt(n){if(h.lessThan(n,si)||h.greaterThan(n,yr))throw new RangeError("date/time value is outside of supported range")}function Ws({year:n,month:e}){be(n,U0,$0),n===U0?be(e,4,12):n===$0&&be(e,1,9)}function Bo(n,e,t,r,i,o,a,s,c,u){let d=0;const l=[n,e,t,r,i,o,a,s,c,u];for(let w=0;w<l.length;w++){const T=l[w];if(T===1/0||T===-1/0)throw new RangeError("infinite values not allowed as duration fields");if(T!==0){const b=T<0?-1:1;if(d!==0&&b!==d)throw new RangeError("mixed-sign values not allowed as duration fields");d=b}}if(Math.abs(n)>=2**32||Math.abs(e)>=2**32||Math.abs(t)>=2**32)throw new RangeError("years, months, and weeks must be < 2³²");const f=ar(s,3),g=ar(c,6),p=ar(u,9),y=ar(1e6*f.mod+1e3*g.mod+p.mod,9).div,_=86400*r+3600*i+60*o+a+f.div+g.div+p.div+y;if(!Number.isSafeInteger(_))throw new RangeError("total of duration time units cannot exceed 9007199254740991.999999999 s")}function ir(n){return{date:{years:m(n,He),months:m(n,ze),weeks:m(n,rt),days:m(n,ke)},time:F.fromComponents(m(n,Ye),m(n,Ge),m(n,je),m(n,We),m(n,qe),m(n,it))}}function Ft(n){const e=F.fromComponents(m(n,Ye),m(n,Ge),m(n,je),m(n,We),m(n,qe),m(n,it)).add24HourDays(m(n,ke));return{date:{years:m(n,He),months:m(n,ze),weeks:m(n,rt),days:0},time:e}}function Ku(n){const e=Ft(n),t=Math.trunc(e.time.sec/86400);return Bo(e.date.years,e.date.months,e.date.weeks,t,0,0,0,0,0,0),{...e.date,days:t}}function _t(n,e){const t=n.time.sign();let r=n.time.abs().subsec,i=0,o=0,a=n.time.abs().sec,s=0,c=0,u=0;switch(e){case"year":case"month":case"week":case"day":i=Math.trunc(r/1e3),r%=1e3,o=Math.trunc(i/1e3),i%=1e3,a+=Math.trunc(o/1e3),o%=1e3,s=Math.trunc(a/60),a%=60,c=Math.trunc(s/60),s%=60,u=Math.trunc(c/24),c%=24;break;case"hour":i=Math.trunc(r/1e3),r%=1e3,o=Math.trunc(i/1e3),i%=1e3,a+=Math.trunc(o/1e3),o%=1e3,s=Math.trunc(a/60),a%=60,c=Math.trunc(s/60),s%=60;break;case"minute":i=Math.trunc(r/1e3),r%=1e3,o=Math.trunc(i/1e3),i%=1e3,a+=Math.trunc(o/1e3),o%=1e3,s=Math.trunc(a/60),a%=60;break;case"second":i=Math.trunc(r/1e3),r%=1e3,o=Math.trunc(i/1e3),i%=1e3,a+=Math.trunc(o/1e3),o%=1e3;break;case"millisecond":i=Math.trunc(r/1e3),r%=1e3,o=wa(a,3,Math.trunc(i/1e3)),i%=1e3,a=0;break;case"microsecond":i=wa(a,6,Math.trunc(r/1e3)),r%=1e3,a=0;break;case"nanosecond":r=wa(a,9,r),a=0}return new(xe("%Temporal.Duration%"))(n.date.years,n.date.months,n.date.weeks,n.date.days+t*u,t*c,t*s,t*a,t*o,t*i,t*r)}function an(n,e){return Vo(n),e.sign(),{date:n,time:e}}function Yn(n,e,t){return Ys({isoDate:{year:n,month:e+1,day:t},time:{hour:0,minute:0,second:0,millisecond:0}})/Sn}function hr({year:n,month:e,day:t}){if(Math.abs(Yn(n,e-1,t))>1e8)throw new RangeError("date/time value is outside the supported range")}function qs(n,e){const t=e.hour-n.hour,r=e.minute-n.minute,i=e.second-n.second,o=e.millisecond-n.millisecond,a=e.microsecond-n.microsecond,s=e.nanosecond-n.nanosecond;return F.fromComponents(t,r,i,o,a,s)}function Vs(n,e,t,r,i){let o=F.fromEpochNsDiff(e,n);return o=wo(o,t,r,i),an({years:0,months:0,weeks:0,days:0},o)}function Qu(n,e,t,r){Ja(n),Ja(e);let i=qs(n.time,e.time);const o=i.sign(),a=Gt(n.isoDate,e.isoDate);let s=e.isoDate;a===o&&(s=st(s.year,s.month,s.day+o),i=i.add24HourDays(-o));const c=on("day",r),u=Si(t,n.isoDate,s,c);return r!==c&&(i=i.add24HourDays(u.days),u.days=0),an(u,i)}function Ju(n,e,t,r,i){const o=h.subtract(e,n);if(h.equal(o,mt))return{date:{years:0,months:0,weeks:0,days:0},time:F.ZERO};const a=h.lessThan(o,mt)?-1:1,s=Et(t,n),c=Et(t,e);let u,d=0,l=a===1?2:1,f=qs(s.time,c.time);for(f.sign()===-a&&d++;d<=l;d++){u=W(st(c.isoDate.year,c.isoDate.month,c.isoDate.day-d*a),s.time);const p=Le(t,u,"compatible");if(f=F.fromEpochNsDiff(e,p),f.sign()!==-a)break}const g=on("day",i);return an(Si(r,s.isoDate,u.isoDate,g),f)}function ed(n,e,t,r,i,o,a,s,c){let u,d,l,f,g=e;switch(s){case"year":{const H=En(g.date.years,a,"trunc");u=H,d=H+a*n,l={years:u,months:0,weeks:0,days:0},f={...l,years:d};break}case"month":{const H=En(g.date.months,a,"trunc");u=H,d=H+a*n,l=Ne(g.date,0,0,u),f=Ne(g.date,0,0,d);break}case"week":{const H=Ne(g.date,0,0),fe=ft(o,r.isoDate,H,"constrain"),ye=Si(o,fe,st(fe.year,fe.month,fe.day+g.date.days),"week"),Ae=En(g.date.weeks+ye.weeks,a,"trunc");u=Ae,d=Ae+a*n,l=Ne(g.date,0,u),f=Ne(g.date,0,d);break}case"day":{const H=En(g.date.days,a,"trunc");u=H,d=H+a*n,l=Ne(g.date,u),f=Ne(g.date,d);break}}const p=ft(o,r.isoDate,l,"constrain"),y=ft(o,r.isoDate,f,"constrain");let _,w;const T=W(p,r.time),b=W(y,r.time);i?(_=Le(i,T,"compatible"),w=Le(i,b,"compatible")):(_=Ce(T),w=Ce(b));const S=F.fromEpochNsDiff(t,_),R=F.fromEpochNsDiff(w,_),z=zo(c,n<0?"negative":"positive"),Y=S.add(S).abs().subtract(R.abs()).sign(),V=Math.abs(u)/a%2==0,U=S.isZero()?Math.abs(u):S.cmp(R)?ko(Math.abs(u),Math.abs(d),Y,V,z):Math.abs(d),ee=new F(h.add(h.multiply(R.totalNs,h.BigInt(u)),h.multiply(S.totalNs,h.BigInt(a*n)))).fdiv(R.totalNs),G=U===Math.abs(d);return g={date:G?f:l,time:F.ZERO},{nudgeResult:{duration:g,nudgedEpochNs:G?w:_,didExpandCalendarUnit:G},total:ee}}function Xo(n,e,t,r,i,o,a,s,c){let u=n;const d=Pt(s)||r&&s==="day",l=Bu(u)<0?-1:1;let f;return d?{nudgeResult:f}=ed(l,u,e,t,r,i,a,s,c):f=r?function(g,p,y,_,w,T,b,S){let R=p;const z=ft(w,y.isoDate,R.date,"constrain"),Y=W(z,y.time),V=W(st(z.year,z.month,z.day+g),y.time),U=Le(_,Y,"compatible"),ee=Le(_,V,"compatible"),G=F.fromEpochNsDiff(ee,U);if(G.sign()!==g)throw new RangeError("time zone returned inconsistent Instants");const H=h.BigInt(vr[b]*T);let fe=R.time.round(H,S);const ye=fe.subtract(G),Ae=ye.sign()!==-g;let ut,dt;return Ae?(ut=g,fe=ye.round(H,S),dt=fe.addToEpochNs(ee)):(ut=0,dt=fe.addToEpochNs(U)),{duration:an(Ne(R.date,R.date.days+ut),fe),nudgedEpochNs:dt,didExpandCalendarUnit:Ae}}(l,u,t,r,i,a,s,c):function(g,p,y,_,w,T){let b=g;const S=b.time.add24HourDays(b.date.days),R=S.round(h.BigInt(_*vr[w]),T),z=R.subtract(S),{quotient:Y}=S.divmod(mo),{quotient:V}=R.divmod(mo),U=Math.sign(V-Y)===S.sign(),ee=z.addToEpochNs(p);let G=0,H=R;return en(y)==="date"&&(G=V,H=R.add(F.fromComponents(24*-V,0,0,0,0,0))),{duration:{date:Ne(b.date,G),time:H},nudgedEpochNs:ee,didExpandCalendarUnit:U}}(u,e,o,a,s,c),u=f.duration,f.didExpandCalendarUnit&&s!=="week"&&(u=function(g,p,y,_,w,T,b,S){let R=p;if(S===b)return R;const z=ei.indexOf(b);for(let Y=ei.indexOf(S)-1;Y>=z;Y--){const V=ei[Y];if(V==="week"&&b!=="week")continue;let U;switch(V){case"year":U={years:R.date.years+g,months:0,weeks:0,days:0};break;case"month":{const H=R.date.months+g;U=Ne(R.date,0,0,H);break}case"week":{const H=R.date.weeks+g;U=Ne(R.date,0,H);break}}const ee=W(ft(T,_.isoDate,U,"constrain"),_.time);let G;if(G=w?Le(w,ee,"compatible"):Ce(ee),lo(y,G)===-g)break;R={date:U,time:F.ZERO}}return R}(l,u,f.nudgedEpochNs,t,r,i,o,on(s,"day"))),u}function K0(n,e,t,r,i,o){return Pt(o)||r&&o==="day"?ed(Bu(n)<0?-1:1,n,e,t,r,i,1,o,"trunc").total:ri(n.time.add24HourDays(n.date.days),o)}function td(n,e,t,r,i,o,a){if(Er(n,e)==0)return{date:{years:0,months:0,weeks:0,days:0},time:F.ZERO};kn(n),kn(e);const s=Qu(n,e,t,r);return o==="nanosecond"&&i===1?s:Xo(s,Ce(e),n,null,t,r,i,o,a)}function nd(n,e,t,r,i,o,a,s){if(en(i)==="time")return Vs(n,e,o,a,s);const c=Ju(n,e,t,r,i);return a==="nanosecond"&&o===1?c:Xo(c,e,Et(t,n),t,r,i,o,a,s)}function Or(n,e,t,r,i,o){const a=_r.reduce((g,p)=>{const y=p[0],_=p[1],w=p[2];return t!=="datetime"&&w!==t||r.includes(_)||g.push(_,y),g},[]);let s=at(e,"largestUnit",t,"auto");if(r.includes(s))throw new RangeError(`largestUnit must be one of ${a.join(", ")}, not ${s}`);const c=xr(e);let u=xt(e,"trunc");n==="since"&&(u=function(g){switch(g){case"ceil":return"floor";case"floor":return"ceil";case"halfCeil":return"halfFloor";case"halfFloor":return"halfCeil";default:return g}}(u));const d=at(e,"smallestUnit",t,i);if(r.includes(d))throw new RangeError(`smallestUnit must be one of ${a.join(", ")}, not ${d}`);const l=on(o,d);if(s==="auto"&&(s=l),on(s,d)!==s)throw new RangeError(`largestUnit ${s} cannot be smaller than smallestUnit ${d}`);const f={hour:24,minute:60,second:60,millisecond:1e3,microsecond:1e3,nanosecond:1e3}[d];return f!==void 0&&Ar(c,f,!1),{largestUnit:s,roundingIncrement:c,roundingMode:u,smallestUnit:d}}function Q0(n,e,t,r){const i=jr(t),o=Or(n,A(r),"time",[],"nanosecond","second");let a=_t(Vs(m(e,I),m(i,I),o.roundingIncrement,o.smallestUnit,o.roundingMode),o.largestUnit);return n==="since"&&(a=ct(a)),a}function J0(n,e,t,r){const i=Yr(t),o=m(e,M),a=m(i,M);if(!kt(o,a))throw new RangeError(`cannot compute difference between dates of ${o} and ${a} calendars`);const s=Or(n,A(r),"date",[],"day","day"),c=xe("%Temporal.Duration%"),u=m(e,O),d=m(i,O);if(Gt(u,d)===0)return new c;let l={date:Si(o,u,d,s.largestUnit),time:F.ZERO};if(s.smallestUnit!=="day"||s.roundingIncrement!==1){const g=W(u,{deltaDays:0,hour:0,minute:0,second:0,millisecond:0,microsecond:0,nanosecond:0});l=Xo(l,Ce(W(d,{deltaDays:0,hour:0,minute:0,second:0,millisecond:0,microsecond:0,nanosecond:0})),g,null,o,s.largestUnit,s.roundingIncrement,s.smallestUnit,s.roundingMode)}let f=_t(l,"day");return n==="since"&&(f=ct(f)),f}function ec(n,e,t,r){const i=Gr(t),o=m(e,M),a=m(i,M);if(!kt(o,a))throw new RangeError(`cannot compute difference between dates of ${o} and ${a} calendars`);const s=Or(n,A(r),"datetime",[],"nanosecond","day"),c=xe("%Temporal.Duration%"),u=m(e,ie),d=m(i,ie);if(Er(u,d)===0)return new c;let l=_t(td(u,d,o,s.largestUnit,s.roundingIncrement,s.smallestUnit,s.roundingMode),s.largestUnit);return n==="since"&&(l=ct(l)),l}function tc(n,e,t,r){const i=wn(t),o=Or(n,A(r),"time",[],"nanosecond","hour");let a=qs(m(e,de),m(i,de));a=wo(a,o.roundingIncrement,o.smallestUnit,o.roundingMode);let s=_t(an({years:0,months:0,weeks:0,days:0},a),o.largestUnit);return n==="since"&&(s=ct(s)),s}function nc(n,e,t,r){const i=Wr(t),o=m(e,M),a=m(i,M);if(!kt(o,a))throw new RangeError(`cannot compute difference between months of ${o} and ${a} calendars`);const s=Or(n,A(r),"date",["week","day"],"month","year"),c=xe("%Temporal.Duration%");if(Gt(m(e,O),m(i,O))==0)return new c;const u=Ke(o,m(e,O),"year-month");u.day=1;const d=Cn(o,u,"constrain"),l=Ke(o,m(i,O),"year-month");l.day=1;const f=Cn(o,l,"constrain");let g={date:Ne(Si(o,d,f,s.largestUnit),0,0),time:F.ZERO};if(s.smallestUnit!=="month"||s.roundingIncrement!==1){const y=W(d,{deltaDays:0,hour:0,minute:0,second:0,millisecond:0,microsecond:0,nanosecond:0});g=Xo(g,Ce(W(f,{deltaDays:0,hour:0,minute:0,second:0,millisecond:0,microsecond:0,nanosecond:0})),y,null,o,s.largestUnit,s.roundingIncrement,s.smallestUnit,s.roundingMode)}let p=_t(g,"day");return n==="since"&&(p=ct(p)),p}function rc(n,e,t,r){const i=qr(t),o=m(e,M),a=m(i,M);if(!kt(o,a))throw new RangeError(`cannot compute difference between dates of ${o} and ${a} calendars`);const s=Or(n,A(r),"datetime",[],"nanosecond","hour"),c=m(e,I),u=m(i,I),d=xe("%Temporal.Duration%");let l;if(en(s.largestUnit)!=="date")l=_t(Vs(c,u,s.roundingIncrement,s.smallestUnit,s.roundingMode),s.largestUnit);else{const f=m(e,Z);if(!Gu(f,m(i,Z)))throw new RangeError("When calculating difference between time zones, largestUnit must be 'hours' or smaller because day lengths can vary between time zones due to DST or time zone offset changes.");if(h.equal(c,u))return new d;l=_t(nd(c,u,f,o,s.largestUnit,s.roundingIncrement,s.smallestUnit,s.roundingMode),"hour")}return n==="since"&&(l=ct(l)),l}function wr({hour:n,minute:e,second:t,millisecond:r,microsecond:i,nanosecond:o},a){let s=t,c=o;return s+=a.sec,c+=a.subsec,vn(n,e,s,r,i,c)}function es(n,e){const t=e.addToEpochNs(n);return Yt(t),t}function Vr(n,e,t,r,i="constrain"){if(Vo(r.date)===0)return es(n,r.time);const o=Et(e,n);return es(Le(e,W(ft(t,o.isoDate,r.date,i),o.time),"compatible"),r.time)}function ic(n,e,t){let r=wt(t);n==="subtract"&&(r=ct(r));const i=on(Jt(e),Jt(r));if(Pt(i))throw new RangeError("For years, months, or weeks arithmetic, use date arithmetic relative to a starting point");const o=Ft(e),a=Ft(r);return _t(an({years:0,months:0,weeks:0,days:0},o.time.add(a.time)),i)}function oc(n,e,t){let r=wt(t);n==="subtract"&&(r=ct(r));const i=Jt(r);if(en(i)==="date")throw new RangeError(`Duration field ${i} not supported by Temporal.Instant. Try Temporal.ZonedDateTime instead.`);const o=Ft(r);return $t(es(m(e,I),o.time))}function ac(n,e,t,r){const i=m(e,M);let o=wt(t);n==="subtract"&&(o=ct(o));const a=Ku(o),s=j(A(r));return Ze(ft(i,m(e,O),a,s),i)}function sc(n,e,t,r){let i=wt(t);n==="subtract"&&(i=ct(i));const o=j(A(r)),a=m(e,M),s=Ft(i),c=m(e,ie),u=wr(c.time,s.time),d=Ne(s.date,u.deltaDays);return Bo(d.years,d.months,d.weeks,d.days,0,0,0,0,0,0),yt(W(ft(a,c.isoDate,d,o),u),a)}function cc(n,e,t){let r=wt(t);n==="subtract"&&(r=ct(r));const i=Ft(r),{hour:o,minute:a,second:s,millisecond:c,microsecond:u,nanosecond:d}=wr(m(e,de),i.time);return nn(Wo(o,a,s,c,u,d,"reject"))}function uc(n,e,t,r){let i=wt(t);n==="subtract"&&(i=ct(i));const o=j(A(r)),a=vo(i),s=m(e,M),c=Ke(s,m(e,O),"year-month");c.day=1;let u=Cn(s,c,"constrain");if(a<0){const l=ft(s,u,{months:1},"constrain");u=st(l.year,l.month,l.day-1)}const d=Ku(i);return Bn(u),lr(ui(s,Ke(s,ft(s,u,d,o),"year-month"),o),s)}function dc(n,e,t,r){let i=wt(t);n==="subtract"&&(i=ct(i));const o=j(A(r)),a=m(e,Z),s=m(e,M),c=ir(i);return Ie(Vr(m(e,I),a,s,c,o),a,s)}function En(n,e,t){const r=Math.trunc(n/e),i=n%e,o=n<0?"negative":"positive",a=Math.abs(r),s=a+1,c=ot(Math.abs(2*i)-e),u=a%2==0,d=zo(t,o),l=i===0?a:ko(a,s,c,u,d);return e*(o==="positive"?l:-l)}function ts(n,e,t,r){const i=vr[t]*e;return function(o,a,s){const c=Qt(o),u=Qt(a),d=h.divide(c,u),l=h.remainder(c,u),f=zo(s,"positive");let g,p;h.lessThan(c,mt)?(g=h.subtract(d,ai),p=d):(g=d,p=h.add(d,ai));const y=lo(Ln(h.multiply(l,Fs)),u)*(h.lessThan(c,mt)?-1:1)+0,_=h.equal(l,mt)?d:ko(g,p,y,hu(g),f);return h.multiply(_,u)}(n,h.BigInt(i),r)}function ns(n,e,t,r){Ja(n);const{year:i,month:o,day:a}=n.isoDate,s=rs(n.time,e,t,r);return W(st(i,o,a+s.deltaDays),s)}function rs({hour:n,minute:e,second:t,millisecond:r,microsecond:i,nanosecond:o},a,s,c){let u;switch(s){case"day":case"hour":u=1e3*(1e3*(1e3*(60*(60*n+e)+t)+r)+i)+o;break;case"minute":u=1e3*(1e3*(1e3*(60*e+t)+r)+i)+o;break;case"second":u=1e3*(1e3*(1e3*t+r)+i)+o;break;case"millisecond":u=1e3*(1e3*r+i)+o;break;case"microsecond":u=1e3*i+o;break;case"nanosecond":u=o}const d=vr[s],l=En(u,d*a,c)/d;switch(s){case"day":return{deltaDays:l,hour:0,minute:0,second:0,millisecond:0,microsecond:0,nanosecond:0};case"hour":return vn(l,0,0,0,0,0);case"minute":return vn(n,l,0,0,0,0);case"second":return vn(n,e,l,0,0,0);case"millisecond":return vn(n,e,t,l,0,0);case"microsecond":return vn(n,e,t,r,l,0);case"nanosecond":return vn(n,e,t,r,i,l);default:throw new Error(`Invalid unit ${s}`)}}function wo(n,e,t,r){const i=vr[t];return n.round(h.BigInt(i*e),r)}function ri(n,e){const t=vr[e];return n.fdiv(h.BigInt(t))}function Gt(n,e){return n.year!==e.year?ot(n.year-e.year):n.month!==e.month?ot(n.month-e.month):n.day!==e.day?ot(n.day-e.day):0}function is(n,e){return n.hour!==e.hour?ot(n.hour-e.hour):n.minute!==e.minute?ot(n.minute-e.minute):n.second!==e.second?ot(n.second-e.second):n.millisecond!==e.millisecond?ot(n.millisecond-e.millisecond):n.microsecond!==e.microsecond?ot(n.microsecond-e.microsecond):n.nanosecond!==e.nanosecond?ot(n.nanosecond-e.nanosecond):0}function Er(n,e){const t=Gt(n.isoDate,e.isoDate);return t!==0?t:is(n.time,e.time)}function rd(n){const e=Eo(n);return globalThis.BigInt!==void 0?globalThis.BigInt(e.toString(10)):e}function Tt(n,e){const t=Qt(n),{quotient:r,remainder:i}=zr(t,vi);let o=h.toNumber(r);return e==="floor"&&h.toNumber(i)<0&&(o-=1),e==="ceil"&&h.toNumber(i)>0&&(o+=1),o}function Ht(n){if(!Number.isInteger(n))throw new RangeError("epoch milliseconds must be an integer");return h.multiply(h.BigInt(n),vi)}function Eo(n){let e=n;if(typeof n=="object"){const t=n[Symbol.toPrimitive];t&&typeof t=="function"&&(e=t.call(n,"number"))}if(typeof e=="number")throw new TypeError("cannot convert number to bigint");return typeof e=="bigint"?h.BigInt(e.toString(10)):h.BigInt(e)}const os=(()=>{let n=h.BigInt(Date.now()%1e6);return()=>{const e=Date.now(),t=h.BigInt(e),r=h.add(Ht(e),n);return n=h.remainder(t,vi),h.greaterThan(r,yr)?yr:h.lessThan(r,si)?si:r}})();function Ur(){return new Intl.DateTimeFormat().resolvedOptions().timeZone}function ot(n){return n<0?-1:n>0?1:n}function A(n){if(n===void 0)return Object.create(null);if(le(n)&&n!==null)return n;throw new TypeError("Options parameter must be an object, not "+(n===null?"null":typeof n))}function Gn(n,e){const t=Object.create(null);return t[n]=e,t}function sn(n,e,t,r){let i=n[e];if(i!==void 0){if(i=Go(i),!t.includes(i))throw new RangeError(`${e} must be one of ${t.join(", ")}, not ${i}`);return i}if(r===dn)throw new RangeError(`${e} option is required`);return r}function Je(n){const e=mi(n);if(!f1.includes(mi(e)))throw new RangeError(`invalid calendar identifier ${e}`);switch(e){case"ethiopic-amete-alem":return"ethioaa";case"islamicc":return"islamic-civil"}return e}function mi(n){let e="";for(let t=0;t<n.length;t++){const r=n.charCodeAt(t);e+=r>=65&&r<=90?String.fromCharCode(r+32):String.fromCharCode(r)}return e}function An(n){throw new TypeError(`Do not use built-in arithmetic operators with Temporal objects. When comparing, use ${n==="PlainMonthDay"?"Temporal.PlainDate.compare(obj1.toPlainDate(year), obj2.toPlainDate(year))":`Temporal.${n}.compare(obj1, obj2)`}, not obj1 > obj2. When coercing to strings, use \`\${obj}\` or String(obj), not '' + obj. When coercing to numbers, use properties or methods of the object, not \`+obj\`. When concatenating with strings, use \`\${str}\${obj}\` or str.concat(obj), not str + obj. In React, coerce to a string before rendering a Temporal object.`)}const E1=new RegExp(`^${Ru.source}$`),T1=new RegExp(`^${/([+-])([01][0-9]|2[0-3])(?::?([0-5][0-9])(?::?([0-5][0-9])(?:[.,](\d{1,9}))?)?)?/.source}$`);function id(n,e,t,r=n(e),i=n(t)){let o=e,a=t,s=r,c=i;for(;a-o>1;){let u=Math.trunc((o+a)/2);const d=n(u);d===s?(o=u,s=d):d===c&&(a=u,c=d)}return a}function od(n){return[...n]}function ad(n,e){if(n!=="gregory"&&n!=="iso8601")return;const t=Ii[n];let r=e.year;const{dayOfWeek:i,dayOfYear:o,daysInYear:a}=t.isoToDate(e,{dayOfWeek:!0,dayOfYear:!0,daysInYear:!0}),s=t.getFirstDayOfWeek(),c=t.getMinimalDaysInFirstWeek();let u=(i+7-s)%7,d=(i-o+7001-s)%7,l=Math.floor((o-1+d)/7);if(7-d>=c&&++l,l==0)l=function(f,g,p,y){let _=(y-f-p+1)%7;_<0&&(_+=7);let w=Math.floor((p+_-1)/7);return 7-_>=g&&++w,w}(s,c,o+t.isoToDate(t.dateAdd(e,{years:-1},"constrain"),{daysInYear:!0}).daysInYear,i),r--;else if(o>=a-5){let f=(u+a-o)%7;f<0&&(f+=7),6-f>=c&&o+7-u>a&&(l=1,r++)}return{week:l,year:r}}function lc(n,e,t,r,i){if(e!==i.year){if(n*(e-i.year)>0)return!0}else if(t!==i.month){if(n*(t-i.month)>0)return!0}else if(r!==i.day&&n*(r-i.day)>0)return!0;return!1}const Ii={};function jn(n){if(!n.startsWith("M"))throw new RangeError(`Invalid month code: ${n}.  Month codes must start with M.`);const e=+n.slice(1);if(Number.isNaN(e))throw new RangeError(`Invalid month code: ${n}`);return e}function zt(n,e=!1){return`M${`${n}`.padStart(2,"0")}${e?"L":""}`}function Zs(n,e=void 0,t=12){let{month:r,monthCode:i}=n;if(i===void 0){if(r===void 0)throw new TypeError("Either month or monthCode are required");e==="reject"&&be(r,1,t),e==="constrain"&&(r=Ve(r,1,t)),i=zt(r)}else{const o=jn(i);if(i!==zt(o))throw new RangeError(`Invalid month code: ${i}`);if(r!==void 0&&r!==o)throw new RangeError(`monthCode ${i} and month ${r} must match if both are present`);if(r=o,r<1||r>t)throw new RangeError(`Invalid monthCode: ${i}`)}return{...n,month:r,monthCode:i}}Ii.iso8601={resolveFields(n,e){if((e==="date"||e==="year-month")&&n.year===void 0)throw new TypeError("year is required");if((e==="date"||e==="month-day")&&n.day===void 0)throw new TypeError("day is required");Object.assign(n,Zs(n))},dateToISO:(n,e)=>ti(n.year,n.month,n.day,e),monthDayToISOReferenceDate(n,e){const{month:t,day:r}=ti(n.year??1972,n.month,n.day,e);return{month:t,day:r,year:1972}},extraFields:()=>[],fieldKeysToIgnore(n){const e=new Set;for(let t=0;t<n.length;t++){const r=n[t];e.add(r),r==="month"?e.add("monthCode"):r==="monthCode"&&e.add("month")}return od(e)},dateAdd(n,{years:e=0,months:t=0,weeks:r=0,days:i=0},o){let{year:a,month:s,day:c}=n;return a+=e,s+=t,{year:a,month:s}=Pn(a,s),{year:a,month:s,day:c}=ti(a,s,c,o),c+=i+7*r,st(a,s,c)},dateUntil(n,e,t){const r=-Gt(n,e);if(r===0)return{years:0,months:0,weeks:0,days:0};let i,o=0,a=0;if(t==="year"||t==="month"){let d=e.year-n.year;for(d!==0&&(d-=r);!lc(r,n.year+d,n.month,n.day,e);)o=d,d+=r;let l=r;for(i=Pn(n.year+o,n.month+l);!lc(r,i.year,i.month,n.day,e);)a=l,l+=r,i=Pn(i.year,i.month+r);t==="month"&&(a+=12*o,o=0)}i=Pn(n.year+o,n.month+a);const s=Xu(i.year,i.month,n.day);let c=0,u=Yn(e.year,e.month-1,e.day)-Yn(s.year,s.month-1,s.day);return t==="week"&&(c=Math.trunc(u/7),u%=7),{years:o,months:a,weeks:c,days:u}},isoToDate({year:n,month:e,day:t},r){const i={era:void 0,eraYear:void 0,year:n,month:e,day:t,daysInWeek:7,monthsInYear:12};if(r.monthCode&&(i.monthCode=zt(e)),r.dayOfWeek){const o=e+(e<3?10:-2),a=n-(e<3?1:0),s=Math.floor(a/100),c=a-100*s,u=(t+Math.floor(2.6*o-.2)+(c+Math.floor(c/4))+(Math.floor(s/4)-2*s))%7;i.dayOfWeek=u+(u<=0?7:0)}if(r.dayOfYear){let o=t;for(let a=e-1;a>0;a--)o+=Fn(n,a);i.dayOfYear=o}return r.weekOfYear&&(i.weekOfYear=ad("iso8601",{year:n,month:e,day:t})),r.daysInMonth&&(i.daysInMonth=Fn(n,e)),(r.daysInYear||r.inLeapYear)&&(i.inLeapYear=_o(n),i.daysInYear=i.inLeapYear?366:365),i},getFirstDayOfWeek:()=>1,getMinimalDaysInFirstWeek:()=>4};class Ee{constructor(e){if(this.map=new Map,this.calls=0,this.hits=0,this.misses=0,e!==void 0){let t=0;for(const r of e.map.entries()){if(++t>Ee.MAX_CACHE_ENTRIES)break;this.map.set(...r)}}}get(e){const t=this.map.get(e);return t&&(this.hits++,this.report()),this.calls++,t}set(e,t){this.map.set(e,t),this.misses++,this.report()}report(){}setObject(e){if(Ee.objectMap.get(e))throw new RangeError("object already cached");Ee.objectMap.set(e,this),this.report()}static getCacheForObject(e){let t=Ee.objectMap.get(e);return t||(t=new Ee,Ee.objectMap.set(e,t)),t}}function sd({isoYear:n,isoMonth:e,isoDay:t}){return`${Ai(n)}-${gt(e)}-${gt(t)}T00:00Z`}function ba(n,e){return{years:n.year-e.year,months:n.month-e.month,days:n.day-e.day}}Ee.objectMap=new WeakMap,Ee.MAX_CACHE_ENTRIES=1e3;class Xn{constructor(){this.eras=[],this.hasEra=!1,this.erasBeginMidYear=!1}getFormatter(){return this.formatter===void 0&&(this.formatter=new Intl.DateTimeFormat(`en-US-u-ca-${this.id}`,{day:"numeric",month:"numeric",year:"numeric",era:"short",timeZone:"UTC"})),this.formatter}getCalendarParts(e){let t=this.getFormatter(),r=new Date(e);if(e==="-271821-04-19T00:00Z"){const i=t.resolvedOptions();t=new Intl.DateTimeFormat(i.locale,{...i,timeZone:"Etc/GMT+1"}),r=new Date("-271821-04-20T00:00Z")}try{return t.formatToParts(r)}catch{throw new RangeError(`Invalid ISO date: ${e}`)}}isoToCalendarDate(e,t){const{year:r,month:i,day:o}=e,a=JSON.stringify({func:"isoToCalendarDate",isoYear:r,isoMonth:i,isoDay:o,id:this.id}),s=t.get(a);if(s)return s;const c=sd({isoYear:r,isoMonth:i,isoDay:o}),u=this.getCalendarParts(c),d={};for(let f=0;f<u.length;f++){const{type:g,value:p}=u[f];if(g!=="year"&&g!=="relatedYear"||(this.hasEra?d.eraYear=+p:d.year=+p),g==="month"){const y=/^([0-9]*)(.*?)$/.exec(p);if(!y||y.length!=3||!y[1]&&!y[2])throw new RangeError(`Unexpected month: ${p}`);if(d.month=y[1]?+y[1]:1,d.month<1)throw new RangeError(`Invalid month ${p} from ${c}[u-ca-${this.id}] (probably due to https://bugs.chromium.org/p/v8/issues/detail?id=10527)`);if(d.month>13)throw new RangeError(`Invalid month ${p} from ${c}[u-ca-${this.id}] (probably due to https://bugs.chromium.org/p/v8/issues/detail?id=10529)`);y[2]&&(d.monthExtra=y[2])}g==="day"&&(d.day=+p),this.hasEra&&g==="era"&&p!=null&&p!==""&&(d.era=p.split(" (")[0].normalize("NFD").replace(/[^-0-9 \p{L}]/gu,"").replace(/ /g,"-").toLowerCase())}if(this.hasEra&&d.eraYear===void 0)throw new RangeError(`Intl.DateTimeFormat.formatToParts lacks relatedYear in ${this.id} calendar. Try Node 14+ or modern browsers.`);if(this.hasEra){const f=this.eras.find(g=>d.era===g.genericName);f&&(d.era=f.code)}if(this.reviseIntlEra){const{era:f,eraYear:g}=this.reviseIntlEra(d,e);d.era=f,d.eraYear=g}this.checkIcuBugs&&this.checkIcuBugs(e);const l=this.adjustCalendarDate(d,t,"constrain",!0);if(l.year===void 0)throw new RangeError(`Missing year converting ${JSON.stringify(e)}`);if(l.month===void 0)throw new RangeError(`Missing month converting ${JSON.stringify(e)}`);if(l.day===void 0)throw new RangeError(`Missing day converting ${JSON.stringify(e)}`);return t.set(a,l),["constrain","reject"].forEach(f=>{const g=JSON.stringify({func:"calendarToIsoDate",year:l.year,month:l.month,day:l.day,overflow:f,id:this.id});t.set(g,e)}),l}validateCalendarDate(e){const{month:t,year:r,day:i,eraYear:o,monthCode:a,monthExtra:s}=e;if(s!==void 0)throw new RangeError("Unexpected `monthExtra` value");if(r===void 0&&o===void 0)throw new TypeError("year or eraYear is required");if(t===void 0&&a===void 0)throw new TypeError("month or monthCode is required");if(i===void 0)throw new RangeError("Missing day");if(a!==void 0){if(typeof a!="string")throw new RangeError("monthCode must be a string, not "+typeof a);if(!/^M([01]?\d)(L?)$/.test(a))throw new RangeError(`Invalid monthCode: ${a}`)}if(this.hasEra&&e.era===void 0!=(e.eraYear===void 0))throw new TypeError("properties era and eraYear must be provided together")}adjustCalendarDate(e,t=void 0,r="constrain",i=!1){if(this.calendarType==="lunisolar")throw new RangeError("Override required for lunisolar calendars");let o=e;this.validateCalendarDate(o);const a=this.monthsInYear(o,t);let{month:s,monthCode:c}=o;return{month:s,monthCode:c}=Zs(o,r,a),{...o,month:s,monthCode:c}}regulateMonthDayNaive(e,t,r){const i=this.monthsInYear(e,r);let{month:o,day:a}=e;return t==="reject"?(be(o,1,i),be(a,1,this.maximumMonthLength(e))):(o=Ve(o,1,i),a=Ve(a,1,this.maximumMonthLength({...e,month:o}))),{...e,month:o,day:a}}calendarToIsoDate(e,t="constrain",r){const i=e;let o=this.adjustCalendarDate(e,r,t,!1);o=this.regulateMonthDayNaive(o,t,r);const{year:a,month:s,day:c}=o,u=JSON.stringify({func:"calendarToIsoDate",year:a,month:s,day:c,overflow:t,id:this.id});let d,l=r.get(u);if(l||i.year!==void 0&&i.month!==void 0&&i.day!==void 0&&(i.year!==o.year||i.month!==o.month||i.day!==o.day)&&(d=JSON.stringify({func:"calendarToIsoDate",year:i.year,month:i.month,day:i.day,overflow:t,id:this.id}),l=r.get(d),l))return l;let f=this.estimateIsoDate({year:a,month:s,day:c});const g=T=>{let b=this.addDaysIso(f,T);if(o.day>this.minimumMonthLength(o)){let S=this.isoToCalendarDate(b,r);for(;S.month!==s||S.year!==a;){if(t==="reject")throw new RangeError(`day ${c} does not exist in month ${s} of year ${a}`);b=this.addDaysIso(b,-1),S=this.isoToCalendarDate(b,r)}}return b};let p=0,y=this.isoToCalendarDate(f,r),_=ba(o,y);if(_.years!==0||_.months!==0||_.days!==0){const T=365*_.years+30*_.months+_.days;f=this.addDaysIso(f,T),y=this.isoToCalendarDate(f,r),_=ba(o,y),_.years===0&&_.months===0?f=g(_.days):p=this.compareCalendarDates(o,y)}let w=8;for(;p;){f=this.addDaysIso(f,p*w);const T=y;y=this.isoToCalendarDate(f,r);const b=p;if(p=this.compareCalendarDates(o,y),p){if(_=ba(o,y),_.years===0&&_.months===0)f=g(_.days),p=0;else if(b&&p!==b)if(w>1)w/=2;else{if(t==="reject")throw new RangeError(`Can't find ISO date from calendar date: ${JSON.stringify({...i})}`);this.compareCalendarDates(y,T)>0&&(f=this.addDaysIso(f,-1)),p=0}}}if(r.set(u,f),d&&r.set(d,f),o.year===void 0||o.month===void 0||o.day===void 0||o.monthCode===void 0||this.hasEra&&(o.era===void 0||o.eraYear===void 0))throw new RangeError("Unexpected missing property");return f}compareCalendarDates(e,t){return e.year!==t.year?ot(e.year-t.year):e.month!==t.month?ot(e.month-t.month):e.day!==t.day?ot(e.day-t.day):0}regulateDate(e,t="constrain",r){const i=this.calendarToIsoDate(e,t,r);return this.isoToCalendarDate(i,r)}addDaysIso(e,t){return st(e.year,e.month,e.day+t)}addDaysCalendar(e,t,r){const i=this.calendarToIsoDate(e,"constrain",r),o=this.addDaysIso(i,t);return this.isoToCalendarDate(o,r)}addMonthsCalendar(e,t,r,i){let o=e;const{day:a}=o;for(let s=0,c=Math.abs(t);s<c;s++){const{month:u}=o,d=o,l=t<0?-Math.max(a,this.daysInPreviousMonth(o,i)):this.daysInMonth(o,i),f=this.calendarToIsoDate(o,"constrain",i);let g=this.addDaysIso(f,l);if(o=this.isoToCalendarDate(g,i),t>0){const p=this.monthsInYear(d,i);for(;o.month-1!=u%p;)g=this.addDaysIso(g,-1),o=this.isoToCalendarDate(g,i)}o.day!==a&&(o=this.regulateDate({...o,day:a},"constrain",i))}if(r==="reject"&&o.day!==a)throw new RangeError(`Day ${a} does not exist in resulting calendar month`);return o}addCalendar(e,{years:t=0,months:r=0,weeks:i=0,days:o=0},a,s){const{year:c,day:u,monthCode:d}=e,l=this.adjustCalendarDate({year:c+t,monthCode:d,day:u},s),f=this.addMonthsCalendar(l,r,a,s),g=o+7*i;return this.addDaysCalendar(f,g,s)}untilCalendar(e,t,r,i){let o=0,a=0,s=0,c=0;switch(r){case"day":o=this.calendarDaysUntil(e,t,i);break;case"week":{const u=this.calendarDaysUntil(e,t,i);o=u%7,a=(u-o)/7;break}case"month":case"year":{const u=this.compareCalendarDates(t,e);if(!u)return{years:0,months:0,weeks:0,days:0};const d=t.year-e.year,l=t.day-e.day;if(r==="year"&&d){let p=0;t.monthCode>e.monthCode&&(p=1),t.monthCode<e.monthCode&&(p=-1),p||(p=Math.sign(l)),c=p*u<0?d-u:d}let f,g=c?this.addCalendar(e,{years:c},"constrain",i):e;do s+=u,f=g,g=this.addMonthsCalendar(f,u,"constrain",i),g.day!==e.day&&(g=this.regulateDate({...g,day:e.day},"constrain",i));while(this.compareCalendarDates(t,g)*u>=0);s-=u,o=this.calendarDaysUntil(f,t,i);break}}return{years:c,months:s,weeks:a,days:o}}daysInMonth(e,t){const{day:r}=e,i=this.maximumMonthLength(e),o=this.minimumMonthLength(e);if(o===i)return o;const a=r<=i-o?i:o,s=this.calendarToIsoDate(e,"constrain",t),c=this.addDaysIso(s,a),u=this.isoToCalendarDate(c,t),d=this.addDaysIso(c,-u.day);return this.isoToCalendarDate(d,t).day}daysInPreviousMonth(e,t){const{day:r,month:i,year:o}=e;let a={year:i>1?o:o-1,month:i,day:1};const s=i>1?i-1:this.monthsInYear(a,t);a={...a,month:s};const c=this.minimumMonthLength(a),u=this.maximumMonthLength(a);if(c===u)return u;const d=this.calendarToIsoDate(e,"constrain",t),l=this.addDaysIso(d,-r);return this.isoToCalendarDate(l,t).day}startOfCalendarYear(e){return{year:e.year,month:1,monthCode:"M01",day:1}}startOfCalendarMonth(e){return{year:e.year,month:e.month,day:1}}calendarDaysUntil(e,t,r){const i=this.calendarToIsoDate(e,"constrain",r),o=this.calendarToIsoDate(t,"constrain",r);return Yn(o.year,o.month-1,o.day)-Yn(i.year,i.month-1,i.day)}monthDaySearchStartYear(e,t){return 1972}monthDayFromFields(e,t,r){let i,o,a,s,c,{era:u,eraYear:d,year:l,month:f,monthCode:g,day:p}=e;if(f!==void 0&&l===void 0&&(!this.hasEra||u===void 0||d===void 0))throw new TypeError("when month is present, year (or era and eraYear) are required");(g===void 0||l!==void 0||this.hasEra&&d!==void 0)&&({monthCode:g,day:p}=this.isoToCalendarDate(this.calendarToIsoDate(e,t,r),r));const y={year:this.monthDaySearchStartYear(g,p),month:12,day:31},_=this.isoToCalendarDate(y,r),w=_.monthCode>g||_.monthCode===g&&_.day>=p?_.year:_.year-1;for(let T=0;T<20;T++){const b=this.adjustCalendarDate({day:p,monthCode:g,year:w-T},r),S=this.calendarToIsoDate(b,"constrain",r),R=this.isoToCalendarDate(S,r);if({year:i,month:o,day:a}=S,R.monthCode===g&&R.day===p)return{month:o,day:a,year:i};if(t==="constrain"){const z=this.maxLengthOfMonthCodeInAnyYear(R.monthCode);if(R.monthCode===g&&R.day===z&&p>z)return{month:o,day:a,year:i};(s===void 0||R.monthCode===s.monthCode&&R.day>s.day)&&(s=R,c=S)}}if(t==="constrain"&&c!==void 0)return c;throw new RangeError(`No recent ${this.id} year with monthCode ${g} and day ${p}`)}getFirstDayOfWeek(){}getMinimalDaysInFirstWeek(){}}class b1 extends Xn{constructor(){super(...arguments),this.id="hebrew",this.calendarType="lunisolar",this.months={Tishri:{leap:1,regular:1,monthCode:"M01",days:30},Heshvan:{leap:2,regular:2,monthCode:"M02",days:{min:29,max:30}},Kislev:{leap:3,regular:3,monthCode:"M03",days:{min:29,max:30}},Tevet:{leap:4,regular:4,monthCode:"M04",days:29},Shevat:{leap:5,regular:5,monthCode:"M05",days:30},Adar:{leap:void 0,regular:6,monthCode:"M06",days:29},"Adar I":{leap:6,regular:void 0,monthCode:"M05L",days:30},"Adar II":{leap:7,regular:void 0,monthCode:"M06",days:29},Nisan:{leap:8,regular:7,monthCode:"M07",days:30},Iyar:{leap:9,regular:8,monthCode:"M08",days:29},Sivan:{leap:10,regular:9,monthCode:"M09",days:30},Tamuz:{leap:11,regular:10,monthCode:"M10",days:29},Av:{leap:12,regular:11,monthCode:"M11",days:30},Elul:{leap:13,regular:12,monthCode:"M12",days:29}}}inLeapYear(e){const{year:t}=e;return(7*t+1)%19<7}monthsInYear(e){return this.inLeapYear(e)?13:12}minimumMonthLength(e){return this.minMaxMonthLength(e,"min")}maximumMonthLength(e){return this.minMaxMonthLength(e,"max")}minMaxMonthLength(e,t){const{month:r,year:i}=e,o=this.getMonthCode(i,r),a=Object.entries(this.months).find(c=>c[1].monthCode===o);if(a===void 0)throw new RangeError(`unmatched Hebrew month: ${r}`);const s=a[1].days;return typeof s=="number"?s:s[t]}maxLengthOfMonthCodeInAnyYear(e){return["M04","M06","M08","M10","M12"].includes(e)?29:30}estimateIsoDate(e){const{year:t}=e;return{year:t-3760,month:1,day:1}}getMonthCode(e,t){return this.inLeapYear({year:e})?t===6?zt(5,!0):zt(t<6?t:t-1):zt(t)}adjustCalendarDate(e,t,r="constrain",i=!1){let{year:o,month:a,monthCode:s,day:c,monthExtra:u}=e;if(o===void 0)throw new TypeError("Missing property: year");if(i){if(u){const d=this.months[u];if(!d)throw new RangeError(`Unrecognized month from formatToParts: ${u}`);a=this.inLeapYear({year:o})?d.leap:d.regular}return s=this.getMonthCode(o,a),{year:o,month:a,day:c,monthCode:s}}if(this.validateCalendarDate(e),a===void 0)if(s.endsWith("L")){if(s!=="M05L")throw new RangeError(`Hebrew leap month must have monthCode M05L, not ${s}`);if(a=6,!this.inLeapYear({year:o})){if(r==="reject")throw new RangeError(`Hebrew monthCode M05L is invalid in year ${o} which is not a leap year`);a=6,s="M06"}}else{a=jn(s),this.inLeapYear({year:o})&&a>=6&&a++;const d=this.monthsInYear({year:o});if(a<1||a>d)throw new RangeError(`Invalid monthCode: ${s}`)}else if(r==="reject"?(be(a,1,this.monthsInYear({year:o})),be(c,1,this.maximumMonthLength({year:o,month:a}))):(a=Ve(a,1,this.monthsInYear({year:o})),c=Ve(c,1,this.maximumMonthLength({year:o,month:a}))),s===void 0)s=this.getMonthCode(o,a);else if(this.getMonthCode(o,a)!==s)throw new RangeError(`monthCode ${s} doesn't correspond to month ${a} in Hebrew year ${o}`);return{...e,day:c,month:a,monthCode:s,year:o}}}class Nr extends Xn{constructor(){super(...arguments),this.calendarType="lunar",this.DAYS_PER_ISLAMIC_YEAR=354+11/30,this.DAYS_PER_ISO_YEAR=365.2425}inLeapYear(e,t){const r={year:e.year,month:1,monthCode:"M01",day:1},i={year:e.year+1,month:1,monthCode:"M01",day:1};return this.calendarDaysUntil(r,i,t)===355}monthsInYear(){return 12}minimumMonthLength(){return 29}maximumMonthLength(){return 30}maxLengthOfMonthCodeInAnyYear(){return 30}estimateIsoDate(e){const{year:t}=this.adjustCalendarDate(e);return{year:Math.floor(t*this.DAYS_PER_ISLAMIC_YEAR/this.DAYS_PER_ISO_YEAR)+622,month:1,day:1}}}class M1 extends Nr{constructor(){super(...arguments),this.id="islamic"}}class D1 extends Nr{constructor(){super(...arguments),this.id="islamic-umalqura"}}class R1 extends Nr{constructor(){super(...arguments),this.id="islamic-tbla"}}class S1 extends Nr{constructor(){super(...arguments),this.id="islamic-civil"}}class C1 extends Nr{constructor(){super(...arguments),this.id="islamic-rgsa"}}class x1 extends Nr{constructor(){super(...arguments),this.id="islamicc"}}class A1 extends Xn{constructor(){super(...arguments),this.id="persian",this.calendarType="solar"}inLeapYear(e,t){return this.daysInMonth({year:e.year,month:12,day:1},t)===30}monthsInYear(){return 12}minimumMonthLength(e){const{month:t}=e;return t===12?29:t<=6?31:30}maximumMonthLength(e){const{month:t}=e;return t===12?30:t<=6?31:30}maxLengthOfMonthCodeInAnyYear(e){return jn(e)<=6?31:30}estimateIsoDate(e){const{year:t}=this.adjustCalendarDate(e);return{year:t+621,month:1,day:1}}}class I1 extends Xn{constructor(){super(...arguments),this.id="indian",this.calendarType="solar",this.months={1:{length:30,month:3,day:22,leap:{length:31,month:3,day:21}},2:{length:31,month:4,day:21},3:{length:31,month:5,day:22},4:{length:31,month:6,day:22},5:{length:31,month:7,day:23},6:{length:31,month:8,day:23},7:{length:30,month:9,day:23},8:{length:30,month:10,day:23},9:{length:30,month:11,day:22},10:{length:30,month:12,day:22},11:{length:30,month:1,nextYear:!0,day:21},12:{length:30,month:2,nextYear:!0,day:20}},this.vulnerableToBceBug=new Date("0000-01-01T00:00Z").toLocaleDateString("en-US-u-ca-indian",{timeZone:"UTC"})!=="10/11/-79 Saka"}inLeapYear(e){return Bs(e.year+78)}monthsInYear(){return 12}minimumMonthLength(e){return this.getMonthInfo(e).length}maximumMonthLength(e){return this.getMonthInfo(e).length}maxLengthOfMonthCodeInAnyYear(e){const t=jn(e);let r=this.months[t];return r=r.leap??r,r.length}getMonthInfo(e){const{month:t}=e;let r=this.months[t];if(r===void 0)throw new RangeError(`Invalid month: ${t}`);return this.inLeapYear(e)&&r.leap&&(r=r.leap),r}estimateIsoDate(e){const t=this.adjustCalendarDate(e),r=this.getMonthInfo(t);return st(t.year+78+(r.nextYear?1:0),r.month,r.day+t.day-1)}checkIcuBugs(e){if(this.vulnerableToBceBug&&e.year<1)throw new RangeError(`calendar '${this.id}' is broken for ISO dates before 0001-01-01 (see https://bugs.chromium.org/p/v8/issues/detail?id=10529)`)}}function Bs(n){return n%4==0&&(n%100!=0||n%400==0)}class cd extends Xn{constructor(e,t){super(),this.calendarType="solar",this.id=e,this.isoEpoch=t}inLeapYear(e){const{year:t}=this.estimateIsoDate({month:1,day:1,year:e.year});return Bs(t)}monthsInYear(){return 12}minimumMonthLength(e){const{month:t}=e;return t===2?this.inLeapYear(e)?29:28:[4,6,9,11].indexOf(t)>=0?30:31}maximumMonthLength(e){return this.minimumMonthLength(e)}maxLengthOfMonthCodeInAnyYear(e){return[31,29,31,30,31,30,31,31,30,31,30,31][jn(e)-1]}estimateIsoDate(e){const t=this.adjustCalendarDate(e);return ti(t.year+this.isoEpoch.year,t.month+this.isoEpoch.month,t.day+this.isoEpoch.day,"constrain")}}class ud extends Xn{constructor(e,t){super(),this.hasEra=!0,this.calendarType="solar",this.id=e;const{eras:r,anchorEra:i}=function(o){let a,s=o;if(s.length===0)throw new RangeError("Invalid era data: eras are required");if(s.length===1&&s[0].reverseOf)throw new RangeError("Invalid era data: anchor era cannot count years backwards");if(s.length===1&&!s[0].code)throw new RangeError("Invalid era data: at least one named era is required");if(s.filter(u=>u.reverseOf!=null).length>1)throw new RangeError("Invalid era data: only one era can count years backwards");s.forEach(u=>{if(u.isAnchor||!u.anchorEpoch&&!u.reverseOf){if(a)throw new RangeError("Invalid era data: cannot have multiple anchor eras");a=u,u.anchorEpoch={year:u.hasYearZero?0:1}}else if(!u.code)throw new RangeError("If era name is blank, it must be the anchor era")}),s=s.filter(u=>u.code),s.forEach(u=>{const{reverseOf:d}=u;if(d){const l=s.find(f=>f.code===d);if(l===void 0)throw new RangeError(`Invalid era data: unmatched reverseOf era: ${d}`);u.reverseOf=l,u.anchorEpoch=l.anchorEpoch,u.isoEpoch=l.isoEpoch}u.anchorEpoch.month===void 0&&(u.anchorEpoch.month=1),u.anchorEpoch.day===void 0&&(u.anchorEpoch.day=1)}),s.sort((u,d)=>{if(u.reverseOf)return 1;if(d.reverseOf)return-1;if(!u.isoEpoch||!d.isoEpoch)throw new RangeError("Invalid era data: missing ISO epoch");return d.isoEpoch.year-u.isoEpoch.year});const c=s[s.length-1].reverseOf;if(c&&c!==s[s.length-2])throw new RangeError("Invalid era data: invalid reverse-sign era");return s.forEach((u,d)=>{u.genericName="era"+(s.length-1-d)}),{eras:s,anchorEra:a||s[0]}}(t);this.anchorEra=i,this.eras=r}inLeapYear(e){const{year:t}=this.estimateIsoDate({month:1,day:1,year:e.year});return Bs(t)}monthsInYear(){return 12}minimumMonthLength(e){const{month:t}=e;return t===2?this.inLeapYear(e)?29:28:[4,6,9,11].indexOf(t)>=0?30:31}maximumMonthLength(e){return this.minimumMonthLength(e)}maxLengthOfMonthCodeInAnyYear(e){return[31,29,31,30,31,30,31,31,30,31,30,31][jn(e)-1]}completeEraYear(e){const t=(s,c,u)=>{const d=e[s];if(d!=null&&d!=c&&!(u||[]).includes(d)){const l=u==null?void 0:u[0];throw new RangeError(`Input ${s} ${d} doesn't match calculated value ${l?`${c} (also called ${l})`:c}`)}},r=s=>{let c;const u={...e,year:s},d=this.eras.find((l,f)=>{if(f===this.eras.length-1){if(l.reverseOf){if(s>0)throw new RangeError(`Signed year ${s} is invalid for era ${l.code}`);return c=l.anchorEpoch.year-s,!0}return c=s-l.anchorEpoch.year+(l.hasYearZero?0:1),!0}return this.compareCalendarDates(u,l.anchorEpoch)>=0&&(c=s-l.anchorEpoch.year+(l.hasYearZero?0:1),!0)});if(!d)throw new RangeError(`Year ${s} was not matched by any era`);return{eraYear:c,era:d.code,eraNames:d.names}};let{year:i,eraYear:o,era:a}=e;if(i!=null){const s=r(i);({eraYear:o,era:a}=s),t("era",a,s==null?void 0:s.eraNames),t("eraYear",o)}else{if(o==null)throw new RangeError("Either year or eraYear and era are required");{if(a===void 0)throw new RangeError("era and eraYear must be provided together");const s=this.eras.find(({code:c,names:u=[]})=>c===a||u.includes(a));if(!s)throw new RangeError(`Era ${a} (ISO year ${o}) was not matched by any era`);i=s.reverseOf?s.anchorEpoch.year-o:o+s.anchorEpoch.year-(s.hasYearZero?0:1),t("year",i),{eraYear:o,era:a}=r(i)}}return{...e,year:i,eraYear:o,era:a}}adjustCalendarDate(e,t,r="constrain"){let i=e;const{month:o,monthCode:a}=i;return o===void 0&&(i={...i,month:jn(a)}),this.validateCalendarDate(i),i=this.completeEraYear(i),super.adjustCalendarDate(i,t,r)}estimateIsoDate(e){const t=this.adjustCalendarDate(e),{year:r,month:i,day:o}=t,{anchorEra:a}=this;return ti(r+a.isoEpoch.year-(a.hasYearZero?0:1),i,o,"constrain")}}class Xs extends ud{constructor(e,t){super(e,t)}isoToCalendarDate(e){const{year:t,month:r,day:i}=e,o=zt(r),a=t-this.anchorEra.isoEpoch.year+1;return this.completeEraYear({year:a,month:r,monthCode:o,day:i})}}const Ut={inLeapYear(n){const{year:e}=n;return(e+1)%4==0},monthsInYear:()=>13,minimumMonthLength(n){const{month:e}=n;return e===13?this.inLeapYear(n)?6:5:30},maximumMonthLength(n){return this.minimumMonthLength(n)},maxLengthOfMonthCodeInAnyYear:n=>n==="M13"?6:30};class O1 extends cd{constructor(e,t){super(e,t),this.inLeapYear=Ut.inLeapYear,this.monthsInYear=Ut.monthsInYear,this.minimumMonthLength=Ut.minimumMonthLength,this.maximumMonthLength=Ut.maximumMonthLength,this.maxLengthOfMonthCodeInAnyYear=Ut.maxLengthOfMonthCodeInAnyYear}}class dd extends ud{constructor(e,t){super(e,t),this.inLeapYear=Ut.inLeapYear,this.monthsInYear=Ut.monthsInYear,this.minimumMonthLength=Ut.minimumMonthLength,this.maximumMonthLength=Ut.maximumMonthLength,this.maxLengthOfMonthCodeInAnyYear=Ut.maxLengthOfMonthCodeInAnyYear}}class N1 extends O1{constructor(){super("ethioaa",{year:-5492,month:7,day:17})}}class L1 extends dd{constructor(){super("coptic",[{code:"coptic",isoEpoch:{year:284,month:8,day:29}},{code:"coptic-inverse",reverseOf:"coptic"}])}}class P1 extends dd{constructor(){super("ethiopic",[{code:"ethioaa",names:["ethiopic-amete-alem","mundi"],isoEpoch:{year:-5492,month:7,day:17}},{code:"ethiopic",names:["incar"],isoEpoch:{year:8,month:8,day:27},anchorEpoch:{year:5501}}])}}class U1 extends Xs{constructor(){super("roc",[{code:"roc",names:["minguo"],isoEpoch:{year:1912,month:1,day:1}},{code:"roc-inverse",names:["before-roc"],reverseOf:"roc"}])}}class $1 extends cd{constructor(){super("buddhist",{year:-543,month:1,day:1})}}class F1 extends Xs{constructor(){super("gregory",[{code:"gregory",names:["ad","ce"],isoEpoch:{year:1,month:1,day:1}},{code:"gregory-inverse",names:["be","bce"],reverseOf:"gregory"}])}reviseIntlEra(e){let{era:t,eraYear:r}=e;return t==="b"&&(t="gregory-inverse"),t==="a"&&(t="gregory"),{era:t,eraYear:r}}getFirstDayOfWeek(){return 1}getMinimalDaysInFirstWeek(){return 1}}class H1 extends Xs{constructor(){super("japanese",[{code:"reiwa",isoEpoch:{year:2019,month:5,day:1},anchorEpoch:{year:2019,month:5,day:1}},{code:"heisei",isoEpoch:{year:1989,month:1,day:8},anchorEpoch:{year:1989,month:1,day:8}},{code:"showa",isoEpoch:{year:1926,month:12,day:25},anchorEpoch:{year:1926,month:12,day:25}},{code:"taisho",isoEpoch:{year:1912,month:7,day:30},anchorEpoch:{year:1912,month:7,day:30}},{code:"meiji",isoEpoch:{year:1868,month:9,day:8},anchorEpoch:{year:1868,month:9,day:8}},{code:"japanese",names:["japanese","gregory","ad","ce"],isoEpoch:{year:1,month:1,day:1}},{code:"japanese-inverse",names:["japanese-inverse","gregory-inverse","bc","bce"],reverseOf:"japanese"}]),this.erasBeginMidYear=!0}reviseIntlEra(e,t){const{era:r,eraYear:i}=e,{year:o}=t;return this.eras.find(a=>a.code===r)?{era:r,eraYear:i}:o<1?{era:"japanese-inverse",eraYear:1-o}:{era:"japanese",eraYear:o}}}class ld extends Xn{constructor(){super(...arguments),this.calendarType="lunisolar"}inLeapYear(e,t){const r=this.getMonthList(e.year,t);return Object.entries(r).length===13}monthsInYear(e,t){return this.inLeapYear(e,t)?13:12}minimumMonthLength(){return 29}maximumMonthLength(){return 30}maxLengthOfMonthCodeInAnyYear(e){return["M01L","M09L","M10L","M11L","M12L"].includes(e)?29:30}monthDaySearchStartYear(e,t){const r={M01L:[1651,1651],M02L:[1947,1765],M03L:[1966,1955],M04L:[1963,1944],M05L:[1971,1952],M06L:[1960,1941],M07L:[1968,1938],M08L:[1957,1718],M09L:[1832,1832],M10L:[1870,1870],M11L:[1814,1814],M12L:[1890,1890]}[e]??[1972,1972];return t<30?r[0]:r[1]}getMonthList(e,t){if(e===void 0)throw new TypeError("Missing year");const r=JSON.stringify({func:"getMonthList",calendarYear:e,id:this.id}),i=t.get(r);if(i)return i;const o=this.getFormatter(),a=(_,w)=>{const T=sd({isoYear:_,isoMonth:2,isoDay:1}),b=new Date(T);b.setUTCDate(w+1);const S=o.formatToParts(b),R=S.find(U=>U.type==="month").value,z=+S.find(U=>U.type==="day").value,Y=S.find(U=>U.type==="relatedYear");let V;if(Y===void 0)throw new RangeError(`Intl.DateTimeFormat.formatToParts lacks relatedYear in ${this.id} calendar. Try Node 14+ or modern browsers.`);return V=+Y.value,{calendarMonthString:R,calendarDay:z,calendarYearToVerify:V}};let s=17,{calendarMonthString:c,calendarDay:u,calendarYearToVerify:d}=a(e,s);c!=="1"&&(s+=29,{calendarMonthString:c,calendarDay:u}=a(e,s)),s-=u-5;const l={};let f,g,p=1,y=!1;do({calendarMonthString:c,calendarDay:u,calendarYearToVerify:d}=a(e,s)),f&&(l[g].daysInMonth=f+30-u),d!==e?y=!0:(l[c]={monthIndex:p++},s+=30),f=u,g=c;while(!y);return l[g].daysInMonth=f+30-u,t.set(r,l),l}estimateIsoDate(e){const{year:t,month:r}=e;return{year:t,month:r>=12?12:r+1,day:1}}adjustCalendarDate(e,t,r="constrain",i=!1){let{year:o,month:a,monthExtra:s,day:c,monthCode:u}=e;if(o===void 0)throw new TypeError("Missing property: year");if(i){if(s&&s!=="bis")throw new RangeError(`Unexpected leap month suffix: ${s}`);const d=zt(a,s!==void 0),l=`${a}${s||""}`,f=this.getMonthList(o,t)[l];if(f===void 0)throw new RangeError(`Unmatched month ${l} in Chinese year ${o}`);return a=f.monthIndex,{year:o,month:a,day:c,monthCode:d}}if(this.validateCalendarDate(e),a===void 0){const d=this.getMonthList(o,t);let l=u.replace(/^M|L$/g,g=>g==="L"?"bis":"");l[0]==="0"&&(l=l.slice(1));let f=d[l];if(a=f&&f.monthIndex,a===void 0&&u.endsWith("L")&&u!="M13L"&&r==="constrain"){const g=+u.replace(/^M0?|L$/g,"");f=d[g],f&&(a=f.monthIndex,u=zt(g))}if(a===void 0)throw new RangeError(`Unmatched month ${u} in Chinese year ${o}`)}else if(u===void 0){const d=this.getMonthList(o,t),l=Object.entries(d),f=l.length;r==="reject"?(be(a,1,f),be(c,1,this.maximumMonthLength())):(a=Ve(a,1,f),c=Ve(c,1,this.maximumMonthLength()));const g=l.find(p=>p[1].monthIndex===a);if(g===void 0)throw new RangeError(`Invalid month ${a} in Chinese year ${o}`);u=zt(+g[0].replace("bis",""),g[0].indexOf("bis")!==-1)}else{const d=this.getMonthList(o,t);let l=u.replace(/^M|L$/g,g=>g==="L"?"bis":"");l[0]==="0"&&(l=l.slice(1));const f=d[l];if(!f)throw new RangeError(`Unmatched monthCode ${u} in Chinese year ${o}`);if(a!==f.monthIndex)throw new RangeError(`monthCode ${u} doesn't correspond to month ${a} in Chinese year ${o}`)}return{...e,year:o,month:a,monthCode:u,day:c}}}class z1 extends ld{constructor(){super(...arguments),this.id="chinese"}}class k1 extends ld{constructor(){super(...arguments),this.id="dangi"}}class Y1{constructor(e){this.helper=e}extraFields(e){return this.helper.hasEra&&e.includes("year")?["era","eraYear"]:[]}resolveFields(e){if(this.helper.calendarType!=="lunisolar"){const t=new Ee;Zs(e,void 0,this.helper.monthsInYear({year:e.year??1972},t))}}dateToISO(e,t){const r=new Ee,i=this.helper.calendarToIsoDate(e,t,r);return r.setObject(i),i}monthDayToISOReferenceDate(e,t){const r=new Ee,i=this.helper.monthDayFromFields(e,t,r);return r.setObject(i),i}fieldKeysToIgnore(e){const t=new Set;for(let r=0;r<e.length;r++){const i=e[r];switch(t.add(i),i){case"era":t.add("eraYear"),t.add("year");break;case"eraYear":t.add("era"),t.add("year");break;case"year":t.add("era"),t.add("eraYear");break;case"month":t.add("monthCode"),this.helper.erasBeginMidYear&&(t.add("era"),t.add("eraYear"));break;case"monthCode":t.add("month"),this.helper.erasBeginMidYear&&(t.add("era"),t.add("eraYear"));break;case"day":this.helper.erasBeginMidYear&&(t.add("era"),t.add("eraYear"))}}return od(t)}dateAdd(e,{years:t,months:r,weeks:i,days:o},a){const s=Ee.getCacheForObject(e),c=this.helper.isoToCalendarDate(e,s),u=this.helper.addCalendar(c,{years:t,months:r,weeks:i,days:o},a,s),d=this.helper.calendarToIsoDate(u,"constrain",s);return Ee.getCacheForObject(d)||new Ee(s).setObject(d),d}dateUntil(e,t,r){const i=Ee.getCacheForObject(e),o=Ee.getCacheForObject(t),a=this.helper.isoToCalendarDate(e,i),s=this.helper.isoToCalendarDate(t,o);return this.helper.untilCalendar(a,s,r,i)}isoToDate(e,t){const r=Ee.getCacheForObject(e),i=this.helper.isoToCalendarDate(e,r);if(t.dayOfWeek&&(i.dayOfWeek=Ii.iso8601.isoToDate(e,{dayOfWeek:!0}).dayOfWeek),t.dayOfYear){const o=this.helper.startOfCalendarYear(i),a=this.helper.calendarDaysUntil(o,i,r);i.dayOfYear=a+1}if(t.weekOfYear&&(i.weekOfYear=ad(this.helper.id,e)),i.daysInWeek=7,t.daysInMonth&&(i.daysInMonth=this.helper.daysInMonth(i,r)),t.daysInYear){const o=this.helper.startOfCalendarYear(i),a=this.helper.addCalendar(o,{years:1},"constrain",r);i.daysInYear=this.helper.calendarDaysUntil(o,a,r)}return t.monthsInYear&&(i.monthsInYear=this.helper.monthsInYear(i,r)),t.inLeapYear&&(i.inLeapYear=this.helper.inLeapYear(i,r)),i}getFirstDayOfWeek(){return this.helper.getFirstDayOfWeek()}getMinimalDaysInFirstWeek(){return this.helper.getMinimalDaysInFirstWeek()}}for(const n of[b1,A1,P1,N1,L1,z1,k1,U1,I1,$1,F1,H1,M1,D1,R1,S1,C1,x1]){const e=new n;Ii[e.id]=new Y1(e)}Wa("calendarImpl",function(n){return Ii[n]});const fi=Intl.DateTimeFormat;function Jn(n,e){let t=m(n,e);return typeof t=="function"&&(t=new fi(m(n,Tu),t(m(n,ka))),function(r,i,o){const a=Ho(r);if(a===void 0)throw new TypeError("Missing slots for the given container");if(a[i]===void 0)throw new TypeError(`tried to reset ${i} which was not set`);a[i]=o}(n,e,t)),t}function $r(n){return Qe(n,Zn)}class gi{constructor(e=void 0,t=void 0){(function(r,i,o){const a=o!==void 0;let s;if(a){const l=["localeMatcher","calendar","numberingSystem","hour12","hourCycle","timeZone","weekday","era","year","month","day","dayPeriod","hour","minute","second","fractionalSecondDigits","timeZoneName","formatMatcher","dateStyle","timeStyle"];s=function(g){if(g==null)throw new TypeError(`Expected object not ${g}`);return Object(g)}(o);const f=Object.create(null);for(let g=0;g<l.length;g++){const p=l[g];Object.prototype.hasOwnProperty.call(s,p)&&(f[p]=s[p])}s=f}else s=Object.create(null);const c=new fi(i,s),u=c.resolvedOptions();if(ln(r),a){const l=Object.assign(Object.create(null),u);for(const f in l)Object.prototype.hasOwnProperty.call(s,f)||delete l[f];l.hour12=s.hour12,l.hourCycle=s.hourCycle,P(r,ka,l)}else P(r,ka,s);P(r,Tu,u.locale),P(r,Zn,c),P(r,rr,u.timeZone),P(r,kr,u.calendar),P(r,pu,K1),P(r,yu,B1),P(r,_u,X1),P(r,vu,Z1),P(r,wu,Q1),P(r,Eu,J1);const d=a?s.timeZone:void 0;if(d===void 0)P(r,za,u.timeZone);else{const l=Go(d);if(l.startsWith("−"))throw new RangeError("Unicode minus (U+2212) is not supported in time zone offsets");P(r,za,Be(l))}})(this,e,t)}get format(){v(this,$r);const e=j1.bind(this);return Object.defineProperties(e,{length:{value:1,enumerable:!1,writable:!1,configurable:!0},name:{value:"",enumerable:!1,writable:!1,configurable:!0}}),e}formatRange(e,t){return v(this,$r),q1.call(this,e,t)}formatToParts(e,...t){return v(this,$r),W1.call(this,e,...t)}formatRangeToParts(e,t){return v(this,$r),V1.call(this,e,t)}resolvedOptions(){return v(this,$r),G1.call(this)}}"formatToParts"in fi.prototype||delete gi.prototype.formatToParts,"formatRangeToParts"in fi.prototype||delete gi.prototype.formatRangeToParts;const vt=function(n=void 0,e=void 0){return new gi(n,e)};function G1(){const n=m(this,Zn).resolvedOptions();return n.timeZone=m(this,za),n}function j1(n,...e){let t,r,i=Tr(n,this);return i.formatter?(t=i.formatter,r=[Tt(i.epochNs,"floor")]):(t=m(this,Zn),r=[n,...e]),t.format(...r)}function W1(n,...e){let t,r,i=Tr(n,this);return i.formatter?(t=i.formatter,r=[Tt(i.epochNs,"floor")]):(t=m(this,Zn),r=[n,...e]),t.formatToParts(...r)}function q1(n,e){if(n===void 0||e===void 0)throw new TypeError("Intl.DateTimeFormat.formatRange requires two values");const t=To(n),r=To(e);let i,o=[t,r];if(cn(t)!==cn(r))throw new TypeError("Intl.DateTimeFormat.formatRange accepts two values of the same type");if(cn(t)){if(!hd(t,r))throw new TypeError("Intl.DateTimeFormat.formatRange accepts two values of the same type");const{epochNs:a,formatter:s}=Tr(t,this),{epochNs:c,formatter:u}=Tr(r,this);s&&(i=s,o=[Tt(a,"floor"),Tt(c,"floor")])}return i||(i=m(this,Zn)),i.formatRange(...o)}function V1(n,e){if(n===void 0||e===void 0)throw new TypeError("Intl.DateTimeFormat.formatRange requires two values");const t=To(n),r=To(e);let i,o=[t,r];if(cn(t)!==cn(r))throw new TypeError("Intl.DateTimeFormat.formatRangeToParts accepts two values of the same type");if(cn(t)){if(!hd(t,r))throw new TypeError("Intl.DateTimeFormat.formatRangeToParts accepts two values of the same type");const{epochNs:a,formatter:s}=Tr(t,this),{epochNs:c,formatter:u}=Tr(r,this);s&&(i=s,o=[Tt(a,"floor"),Tt(c,"floor")])}return i||(i=m(this,Zn)),i.formatRangeToParts(...o)}function Oi(n={},e={}){const t=Object.assign({},n),r=["year","month","day","hour","minute","second","weekday","dayPeriod","timeZoneName","dateStyle","timeStyle"];for(let i=0;i<r.length;i++){const o=r[i];t[o]=o in e?e[o]:t[o],t[o]!==!1&&t[o]!==void 0||delete t[o]}return t}function Z1(n){const e=Oi(n,{year:!1,month:!1,day:!1,weekday:!1,timeZoneName:!1,dateStyle:!1});if(e.timeStyle!=="long"&&e.timeStyle!=="full"||(delete e.timeStyle,Object.assign(e,{hour:"numeric",minute:"2-digit",second:"2-digit"})),!Qo(e)){if(Ni(n))throw new TypeError(`cannot format Temporal.PlainTime with options [${Object.keys(n)}]`);Object.assign(e,{hour:"numeric",minute:"numeric",second:"numeric"})}return e}function B1(n){const e={short:{year:"2-digit",month:"numeric"},medium:{year:"numeric",month:"short"},long:{year:"numeric",month:"long"},full:{year:"numeric",month:"long"}},t=Oi(n,{day:!1,hour:!1,minute:!1,second:!1,weekday:!1,dayPeriod:!1,timeZoneName:!1,timeStyle:!1});if("dateStyle"in t&&t.dateStyle){const r=t.dateStyle;delete t.dateStyle,Object.assign(t,e[r])}if(!("year"in t||"month"in t||"era"in t)){if(Ni(n))throw new TypeError(`cannot format PlainYearMonth with options [${Object.keys(n)}]`);Object.assign(t,{year:"numeric",month:"numeric"})}return t}function X1(n){const e={short:{month:"numeric",day:"numeric"},medium:{month:"short",day:"numeric"},long:{month:"long",day:"numeric"},full:{month:"long",day:"numeric"}},t=Oi(n,{year:!1,hour:!1,minute:!1,second:!1,weekday:!1,dayPeriod:!1,timeZoneName:!1,timeStyle:!1});if("dateStyle"in t&&t.dateStyle){const r=t.dateStyle;delete t.dateStyle,Object.assign(t,e[r])}if(!("month"in t)&&!("day"in t)){if(Ni(n))throw new TypeError(`cannot format PlainMonthDay with options [${Object.keys(n)}]`);Object.assign(t,{month:"numeric",day:"numeric"})}return t}function K1(n){const e=Oi(n,{hour:!1,minute:!1,second:!1,dayPeriod:!1,timeZoneName:!1,timeStyle:!1});if(!Ko(e)){if(Ni(n))throw new TypeError(`cannot format PlainDate with options [${Object.keys(n)}]`);Object.assign(e,{year:"numeric",month:"numeric",day:"numeric"})}return e}function Q1(n){const e=Oi(n,{timeZoneName:!1});if((e.timeStyle==="long"||e.timeStyle==="full")&&(delete e.timeStyle,Object.assign(e,{hour:"numeric",minute:"2-digit",second:"2-digit"}),e.dateStyle)&&(Object.assign(e,{short:{year:"numeric",month:"numeric",day:"numeric"},medium:{year:"numeric",month:"short",day:"numeric"},long:{year:"numeric",month:"long",day:"numeric"},full:{year:"numeric",month:"long",day:"numeric",weekday:"long"}}[e.dateStyle]),delete e.dateStyle),!Qo(e)&&!Ko(e)){if(Ni(n))throw new TypeError(`cannot format PlainDateTime with options [${Object.keys(n)}]`);Object.assign(e,{year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric"})}return e}function J1(n){let e=n;return Qo(e)||Ko(e)||(e=Object.assign({},e,{year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric"})),e}function Ko(n){return"year"in n||"month"in n||"day"in n||"weekday"in n||"dateStyle"in n||"era"in n}function Qo(n){return"hour"in n||"minute"in n||"second"in n||"timeStyle"in n||"dayPeriod"in n||"fractionalSecondDigits"in n}function Ni(n){return Ko(n)||Qo(n)||"dateStyle"in n||"timeStyle"in n||"timeZoneName"in n}function cn(n){return ue(n)||he(n)||ne(n)||$(n)||Se(n)||ht(n)||Re(n)}function To(n){return cn(n)?n:Yo(n)}function hd(n,e){return!(!cn(n)||!cn(e)||he(n)&&!he(e)||ue(n)&&!ue(e)||ne(n)&&!ne(e)||$(n)&&!$(e)||Se(n)&&!Se(e)||ht(n)&&!ht(e)||Re(n)&&!Re(e))}function Tr(n,e){if(he(n)){const t={isoDate:{year:1970,month:1,day:1},time:m(n,de)};return{epochNs:Le(m(e,rr),t,"compatible"),formatter:Jn(e,vu)}}if(Se(n)){const t=m(n,M),r=m(e,kr);if(t!==r)throw new RangeError(`cannot format PlainYearMonth with calendar ${t} in locale with calendar ${r}`);const i=W(m(n,O),{deltaDays:0,hour:12,minute:0,second:0,millisecond:0,microsecond:0,nanosecond:0});return{epochNs:Le(m(e,rr),i,"compatible"),formatter:Jn(e,yu)}}if(ht(n)){const t=m(n,M),r=m(e,kr);if(t!==r)throw new RangeError(`cannot format PlainMonthDay with calendar ${t} in locale with calendar ${r}`);const i=W(m(n,O),{deltaDays:0,hour:12,minute:0,second:0,millisecond:0,microsecond:0,nanosecond:0});return{epochNs:Le(m(e,rr),i,"compatible"),formatter:Jn(e,_u)}}if(ue(n)){const t=m(n,M),r=m(e,kr);if(t!=="iso8601"&&t!==r)throw new RangeError(`cannot format PlainDate with calendar ${t} in locale with calendar ${r}`);const i=W(m(n,O),{deltaDays:0,hour:12,minute:0,second:0,millisecond:0,microsecond:0,nanosecond:0});return{epochNs:Le(m(e,rr),i,"compatible"),formatter:Jn(e,pu)}}if(ne(n)){const t=m(n,M),r=m(e,kr);if(t!=="iso8601"&&t!==r)throw new RangeError(`cannot format PlainDateTime with calendar ${t} in locale with calendar ${r}`);const i=m(n,ie);return{epochNs:Le(m(e,rr),i,"compatible"),formatter:Jn(e,wu)}}if($(n))throw new TypeError("Temporal.ZonedDateTime not supported in DateTimeFormat methods. Use toLocaleString() instead.");return Re(n)?{epochNs:m(n,I),formatter:Jn(e,Eu)}:{}}function md(n){const e=Object.create(null);return e.years=m(n,He),e.months=m(n,ze),e.weeks=m(n,rt),e.days=m(n,ke),e.hours=m(n,Ye),e.minutes=m(n,Ge),e.seconds=m(n,je),e.milliseconds=m(n,We),e.microseconds=m(n,qe),e.nanoseconds=m(n,it),e}gi.prototype.constructor=vt,Object.defineProperty(vt,"prototype",{value:gi.prototype,writable:!1,enumerable:!1,configurable:!1}),vt.supportedLocalesOf=fi.supportedLocalesOf,hn(vt,"Intl.DateTimeFormat");var eu;const{format:eh,formatToParts:th}=((eu=Intl.DurationFormat)==null?void 0:eu.prototype)??Object.create(null);function fd(n){Intl.DurationFormat.prototype.resolvedOptions.call(this);const e=md(wt(n));return eh.call(this,e)}var tu;(tu=Intl.DurationFormat)!=null&&tu.prototype&&(Intl.DurationFormat.prototype.format=fd,Intl.DurationFormat.prototype.formatToParts=function(n){Intl.DurationFormat.prototype.resolvedOptions.call(this);const e=md(wt(n));return th.call(this,e)});class Ks{constructor(e){if(arguments.length<1)throw new TypeError("missing argument: epochNanoseconds is required");ku(this,Eo(e))}get epochMilliseconds(){return v(this,Re),Tt(m(this,I),"floor")}get epochNanoseconds(){return v(this,Re),rd(h.BigInt(m(this,I)))}add(e){return v(this,Re),oc("add",this,e)}subtract(e){return v(this,Re),oc("subtract",this,e)}until(e,t=void 0){return v(this,Re),Q0("until",this,e,t)}since(e,t=void 0){return v(this,Re),Q0("since",this,e,t)}round(e){if(v(this,Re),e===void 0)throw new TypeError("options parameter is required");const t=typeof e=="string"?Gn("smallestUnit",e):A(e),r=xr(t),i=xt(t,"halfExpand"),o=at(t,"smallestUnit","time",dn);return Ar(r,{hour:24,minute:1440,second:86400,millisecond:864e5,microsecond:864e8,nanosecond:864e11}[o],!0),$t(ts(m(this,I),r,o,i))}equals(e){v(this,Re);const t=jr(e),r=m(this,I),i=m(t,I);return h.equal(h.BigInt(r),h.BigInt(i))}toString(e=void 0){v(this,Re);const t=A(e),r=bi(t),i=xt(t,"trunc"),o=at(t,"smallestUnit","time",void 0);if(o==="hour")throw new RangeError('smallestUnit must be a time unit other than "hour"');let a=t.timeZone;a!==void 0&&(a=Be(a));const{precision:s,unit:c,increment:u}=Mi(o,r);return G0($t(ts(m(this,I),u,c,i)),a,s)}toJSON(){return v(this,Re),G0(this,void 0,"auto")}toLocaleString(e=void 0,t=void 0){return v(this,Re),new vt(e,t).format(this)}valueOf(){An("Instant")}toZonedDateTimeISO(e){v(this,Re);const t=Be(e);return Ie(m(this,I),t,"iso8601")}static fromEpochMilliseconds(e){return $t(Ht(Yo(e)))}static fromEpochNanoseconds(e){return $t(Eo(e))}static from(e){return jr(e)}static compare(e,t){const r=jr(e),i=jr(t),o=m(r,I),a=m(i,I);return h.lessThan(o,a)?-1:h.greaterThan(o,a)?1:0}}hn(Ks,"Temporal.Instant");class Qs{constructor(e,t,r,i="iso8601"){const o=N(e),a=N(t),s=N(r),c=Je(i===void 0?"iso8601":ve(i));zn(o,a,s),Uu(this,{year:o,month:a,day:s},c)}get calendarId(){return v(this,ue),m(this,M)}get era(){return Ue(this,"era")}get eraYear(){return Ue(this,"eraYear")}get year(){return Ue(this,"year")}get month(){return Ue(this,"month")}get monthCode(){return Ue(this,"monthCode")}get day(){return Ue(this,"day")}get dayOfWeek(){return Ue(this,"dayOfWeek")}get dayOfYear(){return Ue(this,"dayOfYear")}get weekOfYear(){var e;return(e=Ue(this,"weekOfYear"))==null?void 0:e.week}get yearOfWeek(){var e;return(e=Ue(this,"weekOfYear"))==null?void 0:e.year}get daysInWeek(){return Ue(this,"daysInWeek")}get daysInMonth(){return Ue(this,"daysInMonth")}get daysInYear(){return Ue(this,"daysInYear")}get monthsInYear(){return Ue(this,"monthsInYear")}get inLeapYear(){return Ue(this,"inLeapYear")}with(e,t=void 0){if(v(this,ue),!le(e))throw new TypeError("invalid argument");Cr(e);const r=m(this,M);let i=Ke(r,m(this,O));return i=Hn(r,i,pt(r,e,["year","month","monthCode","day"],[],"partial")),Ze(Cn(r,i,j(A(t))),r)}withCalendar(e){v(this,ue);const t=Ci(e);return Ze(m(this,O),t)}add(e,t=void 0){return v(this,ue),ac("add",this,e,t)}subtract(e,t=void 0){return v(this,ue),ac("subtract",this,e,t)}until(e,t=void 0){return v(this,ue),J0("until",this,e,t)}since(e,t=void 0){return v(this,ue),J0("since",this,e,t)}equals(e){v(this,ue);const t=Yr(e);return Gt(m(this,O),m(t,O))===0&&kt(m(this,M),m(t,M))}toString(e=void 0){return v(this,ue),j0(this,Ti(A(e)))}toJSON(){return v(this,ue),j0(this)}toLocaleString(e=void 0,t=void 0){return v(this,ue),new vt(e,t).format(this)}valueOf(){An("PlainDate")}toPlainDateTime(e=void 0){v(this,ue);const t=Pu(e);return yt(W(m(this,O),t),m(this,M))}toZonedDateTime(e){let t,r;if(v(this,ue),le(e)){const a=e.timeZone;a===void 0?t=Be(e):(t=Be(a),r=e.plainTime)}else t=Be(e);const i=m(this,O);let o;return r===void 0?o=_n(t,i):(r=wn(r),o=Le(t,W(i,m(r,de)),"compatible")),Ie(o,t,m(this,M))}toPlainYearMonth(){v(this,ue);const e=m(this,M);return lr(ui(e,Ke(e,m(this,O)),"constrain"),e)}toPlainMonthDay(){v(this,ue);const e=m(this,M);return sr(po(e,Ke(e,m(this,O)),"constrain"),e)}static from(e,t=void 0){return Yr(e,t)}static compare(e,t){const r=Yr(e),i=Yr(t);return Gt(m(r,O),m(i,O))}}function Ue(n,e){v(n,ue);const t=m(n,O);return Di(n).isoToDate(t,{[e]:!0})[e]}hn(Qs,"Temporal.PlainDate");class Js{constructor(e,t,r,i=0,o=0,a=0,s=0,c=0,u=0,d="iso8601"){const l=N(e),f=N(t),g=N(r),p=i===void 0?0:N(i),y=o===void 0?0:N(o),_=a===void 0?0:N(a),w=s===void 0?0:N(s),T=c===void 0?0:N(c),b=u===void 0?0:N(u),S=Je(d===void 0?"iso8601":ve(d));js(l,f,g,p,y,_,w,T,b),$u(this,{isoDate:{year:l,month:f,day:g},time:{hour:p,minute:y,second:_,millisecond:w,microsecond:T,nanosecond:b}},S)}get calendarId(){return v(this,ne),m(this,M)}get year(){return $e(this,"year")}get month(){return $e(this,"month")}get monthCode(){return $e(this,"monthCode")}get day(){return $e(this,"day")}get hour(){return er(this,"hour")}get minute(){return er(this,"minute")}get second(){return er(this,"second")}get millisecond(){return er(this,"millisecond")}get microsecond(){return er(this,"microsecond")}get nanosecond(){return er(this,"nanosecond")}get era(){return $e(this,"era")}get eraYear(){return $e(this,"eraYear")}get dayOfWeek(){return $e(this,"dayOfWeek")}get dayOfYear(){return $e(this,"dayOfYear")}get weekOfYear(){var e;return(e=$e(this,"weekOfYear"))==null?void 0:e.week}get yearOfWeek(){var e;return(e=$e(this,"weekOfYear"))==null?void 0:e.year}get daysInWeek(){return $e(this,"daysInWeek")}get daysInYear(){return $e(this,"daysInYear")}get daysInMonth(){return $e(this,"daysInMonth")}get monthsInYear(){return $e(this,"monthsInYear")}get inLeapYear(){return $e(this,"inLeapYear")}with(e,t=void 0){if(v(this,ne),!le(e))throw new TypeError("invalid argument");Cr(e);const r=m(this,M),i=m(this,ie);let o={...Ke(r,i.isoDate),...i.time};return o=Hn(r,o,pt(r,e,["year","month","monthCode","day"],["hour","minute","second","millisecond","microsecond","nanosecond"],"partial")),yt(Ri(r,o,j(A(t))),r)}withPlainTime(e=void 0){v(this,ne);const t=Pu(e);return yt(W(m(this,ie).isoDate,t),m(this,M))}withCalendar(e){v(this,ne);const t=Ci(e);return yt(m(this,ie),t)}add(e,t=void 0){return v(this,ne),sc("add",this,e,t)}subtract(e,t=void 0){return v(this,ne),sc("subtract",this,e,t)}until(e,t=void 0){return v(this,ne),ec("until",this,e,t)}since(e,t=void 0){return v(this,ne),ec("since",this,e,t)}round(e){if(v(this,ne),e===void 0)throw new TypeError("options parameter is required");const t=typeof e=="string"?Gn("smallestUnit",e):A(e),r=xr(t),i=xt(t,"halfExpand"),o=at(t,"smallestUnit","time",dn,["day"]),a={day:1,hour:24,minute:60,second:60,millisecond:1e3,microsecond:1e3,nanosecond:1e3}[o];Ar(r,a,a===1);const s=m(this,ie);return yt(r===1&&o==="nanosecond"?s:ns(s,r,o,i),m(this,M))}equals(e){v(this,ne);const t=Gr(e);return Er(m(this,ie),m(t,ie))===0&&kt(m(this,M),m(t,M))}toString(e=void 0){v(this,ne);const t=A(e),r=Ti(t),i=bi(t),o=xt(t,"trunc"),a=at(t,"smallestUnit","time",void 0);if(a==="hour")throw new RangeError('smallestUnit must be a time unit other than "hour"');const{precision:s,unit:c,increment:u}=Mi(a,i),d=ns(m(this,ie),u,c,o);return kn(d),li(d,m(this,M),s,r)}toJSON(){return v(this,ne),li(m(this,ie),m(this,M),"auto")}toLocaleString(e=void 0,t=void 0){return v(this,ne),new vt(e,t).format(this)}valueOf(){An("PlainDateTime")}toZonedDateTime(e,t=void 0){v(this,ne);const r=Be(e),i=ni(A(t));return Ie(Le(r,m(this,ie),i),r,m(this,M))}toPlainDate(){return v(this,ne),Ze(m(this,ie).isoDate,m(this,M))}toPlainTime(){return v(this,ne),nn(m(this,ie).time)}static from(e,t=void 0){return Gr(e,t)}static compare(e,t){const r=Gr(e),i=Gr(t);return Er(m(r,ie),m(i,ie))}}function $e(n,e){v(n,ne);const t=m(n,ie).isoDate;return Di(n).isoToDate(t,{[e]:!0})[e]}function er(n,e){return v(n,ne),m(n,ie).time[e]}hn(Js,"Temporal.PlainDateTime");class br{constructor(e=0,t=0,r=0,i=0,o=0,a=0,s=0,c=0,u=0,d=0){const l=e===void 0?0:Rt(e),f=t===void 0?0:Rt(t),g=r===void 0?0:Rt(r),p=i===void 0?0:Rt(i),y=o===void 0?0:Rt(o),_=a===void 0?0:Rt(a),w=s===void 0?0:Rt(s),T=c===void 0?0:Rt(c),b=u===void 0?0:Rt(u),S=d===void 0?0:Rt(d);Bo(l,f,g,p,y,_,w,T,b,S),ln(this),P(this,He,l),P(this,ze,f),P(this,rt,g),P(this,ke,p),P(this,Ye,y),P(this,Ge,_),P(this,je,w),P(this,We,T),P(this,qe,b),P(this,it,S)}get years(){return v(this,ce),m(this,He)}get months(){return v(this,ce),m(this,ze)}get weeks(){return v(this,ce),m(this,rt)}get days(){return v(this,ce),m(this,ke)}get hours(){return v(this,ce),m(this,Ye)}get minutes(){return v(this,ce),m(this,Ge)}get seconds(){return v(this,ce),m(this,je)}get milliseconds(){return v(this,ce),m(this,We)}get microseconds(){return v(this,ce),m(this,qe)}get nanoseconds(){return v(this,ce),m(this,it)}get sign(){return v(this,ce),vo(this)}get blank(){return v(this,ce),vo(this)===0}with(e){v(this,ce);const t=Lu(e),{years:r=m(this,He),months:i=m(this,ze),weeks:o=m(this,rt),days:a=m(this,ke),hours:s=m(this,Ye),minutes:c=m(this,Ge),seconds:u=m(this,je),milliseconds:d=m(this,We),microseconds:l=m(this,qe),nanoseconds:f=m(this,it)}=t;return new br(r,i,o,a,s,c,u,d,l,f)}negated(){return v(this,ce),ct(this)}abs(){return v(this,ce),new br(Math.abs(m(this,He)),Math.abs(m(this,ze)),Math.abs(m(this,rt)),Math.abs(m(this,ke)),Math.abs(m(this,Ye)),Math.abs(m(this,Ge)),Math.abs(m(this,je)),Math.abs(m(this,We)),Math.abs(m(this,qe)),Math.abs(m(this,it)))}add(e){return v(this,ce),ic("add",this,e)}subtract(e){return v(this,ce),ic("subtract",this,e)}round(e){if(v(this,ce),e===void 0)throw new TypeError("options parameter is required");const t=Jt(this),r=typeof e=="string"?Gn("smallestUnit",e):A(e);let i=at(r,"largestUnit","datetime",void 0,["auto"]),{plainRelativeTo:o,zonedRelativeTo:a}=Ta(r);const s=xr(r),c=xt(r,"halfExpand");let u=at(r,"smallestUnit","datetime",void 0),d=!0;u||(d=!1,u="nanosecond");const l=on(t,u);let f=!0;if(i||(f=!1,i=l),i==="auto"&&(i=l),!d&&!f)throw new RangeError("at least one of smallestUnit or largestUnit is required");if(on(i,u)!==i)throw new RangeError(`largestUnit ${i} cannot be smaller than smallestUnit ${u}`);const g={hour:24,minute:60,second:60,millisecond:1e3,microsecond:1e3,nanosecond:1e3}[u];if(g!==void 0&&Ar(s,g,!1),s>1&&en(u)==="date"&&i!==u)throw new RangeError("For calendar units with roundingIncrement > 1, use largestUnit = smallestUnit");if(a){let y=ir(this);const _=m(a,Z),w=m(a,M),T=m(a,I);return y=nd(T,Vr(T,_,w,y),_,w,i,s,u,c),en(i)==="date"&&(i="hour"),_t(y,i)}if(o){let y=Ft(this);const _=wr({deltaDays:0,hour:0,minute:0,second:0,millisecond:0,microsecond:0,nanosecond:0},y.time),w=m(o,O),T=m(o,M),b=ft(T,w,Ne(y.date,_.deltaDays),"constrain");return y=td(W(w,{deltaDays:0,hour:0,minute:0,second:0,millisecond:0,microsecond:0,nanosecond:0}),W(b,_),T,i,s,u,c),_t(y,i)}if(Pt(t))throw new RangeError(`a starting point is required for ${t}s balancing`);if(Pt(i))throw new RangeError(`a starting point is required for ${i}s balancing`);let p=Ft(this);if(u==="day"){const{quotient:y,remainder:_}=p.time.divmod(mo);let w=p.date.days+y+ri(_,"day");w=En(w,s,c),p=an({years:0,months:0,weeks:0,days:w},F.ZERO)}else p=an({years:0,months:0,weeks:0,days:0},wo(p.time,s,u,c));return _t(p,i)}total(e){if(v(this,ce),e===void 0)throw new TypeError("options argument is required");const t=typeof e=="string"?Gn("unit",e):A(e);let{plainRelativeTo:r,zonedRelativeTo:i}=Ta(t);const o=at(t,"unit","datetime",dn);if(i){const s=ir(this),c=m(i,Z),u=m(i,M),d=m(i,I);return function(l,f,g,p,y){return en(y)==="time"?ri(F.fromEpochNsDiff(f,l),y):K0(Ju(l,f,g,p,y),f,Et(g,l),g,p,y)}(d,Vr(d,c,u,s),c,u,o)}if(r){const s=Ft(this);let c=wr({deltaDays:0,hour:0,minute:0,second:0,millisecond:0,microsecond:0,nanosecond:0},s.time);const u=m(r,O),d=m(r,M),l=ft(d,u,Ne(s.date,c.deltaDays),"constrain");return function(f,g,p,y){if(Er(f,g)==0)return 0;kn(f),kn(g);const _=Qu(f,g,p,y);return y==="nanosecond"?h.toNumber(_.time.totalNs):K0(_,Ce(g),f,null,p,y)}(W(u,{deltaDays:0,hour:0,minute:0,second:0,millisecond:0,microsecond:0,nanosecond:0}),W(l,c),d,o)}const a=Jt(this);if(Pt(a))throw new RangeError(`a starting point is required for ${a}s total`);if(Pt(o))throw new RangeError(`a starting point is required for ${o}s total`);return ri(Ft(this).time,o)}toString(e=void 0){v(this,ce);const t=A(e),r=bi(t),i=xt(t,"trunc"),o=at(t,"smallestUnit","time",void 0);if(o==="hour"||o==="minute")throw new RangeError('smallestUnit must be a time unit other than "hours" or "minutes"');const{precision:a,unit:s,increment:c}=Mi(o,r);if(s==="nanosecond"&&c===1)return Zi(this,a);const u=Jt(this);let d=ir(this);const l=wo(d.time,c,s,i);return d=an(d.date,l),Zi(_t(d,on(u,"second")),a)}toJSON(){return v(this,ce),Zi(this,"auto")}toLocaleString(e=void 0,t=void 0){if(v(this,ce),typeof Intl.DurationFormat=="function"){const r=new Intl.DurationFormat(e,t);return fd.call(r,this)}return console.warn("Temporal.Duration.prototype.toLocaleString() requires Intl.DurationFormat."),Zi(this,"auto")}valueOf(){An("Duration")}static from(e){return wt(e)}static compare(e,t,r=void 0){const i=wt(e),o=wt(t),a=A(r),{plainRelativeTo:s,zonedRelativeTo:c}=Ta(a);if(m(i,He)===m(o,He)&&m(i,ze)===m(o,ze)&&m(i,rt)===m(o,rt)&&m(i,ke)===m(o,ke)&&m(i,Ye)===m(o,Ye)&&m(i,Ge)===m(o,Ge)&&m(i,je)===m(o,je)&&m(i,We)===m(o,We)&&m(i,qe)===m(o,qe)&&m(i,it)===m(o,it))return 0;const u=Jt(i),d=Jt(o),l=ir(i),f=ir(o);if(c&&(en(u)==="date"||en(d)==="date")){const w=m(c,Z),T=m(c,M),b=m(c,I),S=Vr(b,w,T,l),R=Vr(b,w,T,f);return ot(h.toNumber(h.subtract(S,R)))}let g=l.date.days,p=f.date.days;if(Pt(u)||Pt(d)){if(!s)throw new RangeError("A starting point is required for years, months, or weeks comparison");g=X0(l.date,s),p=X0(f.date,s)}const y=l.time.add24HourDays(g),_=f.time.add24HourDays(p);return y.cmp(_)}}hn(br,"Temporal.Duration");class e0{constructor(e,t,r="iso8601",i=1972){const o=N(e),a=N(t),s=Je(r===void 0?"iso8601":ve(r)),c=N(i);zn(c,o,a),Fu(this,{year:c,month:o,day:a},s)}get monthCode(){return hc(this,"monthCode")}get day(){return hc(this,"day")}get calendarId(){return v(this,ht),m(this,M)}with(e,t=void 0){if(v(this,ht),!le(e))throw new TypeError("invalid argument");Cr(e);const r=m(this,M);let i=Ke(r,m(this,O),"month-day");return i=Hn(r,i,pt(r,e,["year","month","monthCode","day"],[],"partial")),sr(po(r,i,j(A(t))),r)}equals(e){v(this,ht);const t=k0(e);return Gt(m(this,O),m(t,O))===0&&kt(m(this,M),m(t,M))}toString(e=void 0){return v(this,ht),q0(this,Ti(A(e)))}toJSON(){return v(this,ht),q0(this)}toLocaleString(e=void 0,t=void 0){return v(this,ht),new vt(e,t).format(this)}valueOf(){An("PlainMonthDay")}toPlainDate(e){if(v(this,ht),!le(e))throw new TypeError("argument should be an object");const t=m(this,M);return Ze(Cn(t,Hn(t,Ke(t,m(this,O),"month-day"),pt(t,e,["year"],[],[])),"constrain"),t)}static from(e,t=void 0){return k0(e,t)}}function hc(n,e){v(n,ht);const t=m(n,O);return Di(n).isoToDate(t,{[e]:!0})[e]}function Ma(n){return Et(n,os())}hn(e0,"Temporal.PlainMonthDay");const gd={instant:()=>$t(os()),plainDateTimeISO:(n=Ur())=>yt(Ma(Be(n)),"iso8601"),plainDateISO:(n=Ur())=>Ze(Ma(Be(n)).isoDate,"iso8601"),plainTimeISO:(n=Ur())=>nn(Ma(Be(n)).time),timeZoneId:()=>Ur(),zonedDateTimeISO:(n=Ur())=>{const e=Be(n);return Ie(os(),e,"iso8601")},[Symbol.toStringTag]:"Temporal.Now"};Object.defineProperty(gd,Symbol.toStringTag,{value:"Temporal.Now",writable:!1,enumerable:!1,configurable:!0});class Li{constructor(e=0,t=0,r=0,i=0,o=0,a=0){const s=e===void 0?0:N(e),c=t===void 0?0:N(t),u=r===void 0?0:N(r),d=i===void 0?0:N(i),l=o===void 0?0:N(o),f=a===void 0?0:N(a);Zo(s,c,u,d,l,f),Hu(this,{hour:s,minute:c,second:u,millisecond:d,microsecond:l,nanosecond:f})}get hour(){return v(this,he),m(this,de).hour}get minute(){return v(this,he),m(this,de).minute}get second(){return v(this,he),m(this,de).second}get millisecond(){return v(this,he),m(this,de).millisecond}get microsecond(){return v(this,he),m(this,de).microsecond}get nanosecond(){return v(this,he),m(this,de).nanosecond}with(e,t=void 0){if(v(this,he),!le(e))throw new TypeError("invalid argument");Cr(e);const r=Ba(e,"partial"),i=Ba(this);let{hour:o,minute:a,second:s,millisecond:c,microsecond:u,nanosecond:d}=Object.assign(i,r);const l=j(A(t));return{hour:o,minute:a,second:s,millisecond:c,microsecond:u,nanosecond:d}=Wo(o,a,s,c,u,d,l),new Li(o,a,s,c,u,d)}add(e){return v(this,he),cc("add",this,e)}subtract(e){return v(this,he),cc("subtract",this,e)}until(e,t=void 0){return v(this,he),tc("until",this,e,t)}since(e,t=void 0){return v(this,he),tc("since",this,e,t)}round(e){if(v(this,he),e===void 0)throw new TypeError("options parameter is required");const t=typeof e=="string"?Gn("smallestUnit",e):A(e),r=xr(t),i=xt(t,"halfExpand"),o=at(t,"smallestUnit","time",dn);return Ar(r,{hour:24,minute:60,second:60,millisecond:1e3,microsecond:1e3,nanosecond:1e3}[o],!1),nn(rs(m(this,de),r,o,i))}equals(e){v(this,he);const t=wn(e);return is(m(this,de),m(t,de))===0}toString(e=void 0){v(this,he);const t=A(e),r=bi(t),i=xt(t,"trunc"),o=at(t,"smallestUnit","time",void 0);if(o==="hour")throw new RangeError('smallestUnit must be a time unit other than "hour"');const{precision:a,unit:s,increment:c}=Mi(o,r);return W0(rs(m(this,de),c,s,i),a)}toJSON(){return v(this,he),W0(m(this,de),"auto")}toLocaleString(e=void 0,t=void 0){return v(this,he),new vt(e,t).format(this)}valueOf(){An("PlainTime")}static from(e,t=void 0){return wn(e,t)}static compare(e,t){const r=wn(e),i=wn(t);return is(m(r,de),m(i,de))}}hn(Li,"Temporal.PlainTime");class t0{constructor(e,t,r="iso8601",i=1){const o=N(e),a=N(t),s=Je(r===void 0?"iso8601":ve(r)),c=N(i);zn(o,a,c),zu(this,{year:o,month:a,day:c},s)}get year(){return Zt(this,"year")}get month(){return Zt(this,"month")}get monthCode(){return Zt(this,"monthCode")}get calendarId(){return v(this,Se),m(this,M)}get era(){return Zt(this,"era")}get eraYear(){return Zt(this,"eraYear")}get daysInMonth(){return Zt(this,"daysInMonth")}get daysInYear(){return Zt(this,"daysInYear")}get monthsInYear(){return Zt(this,"monthsInYear")}get inLeapYear(){return Zt(this,"inLeapYear")}with(e,t=void 0){if(v(this,Se),!le(e))throw new TypeError("invalid argument");Cr(e);const r=m(this,M);let i=Ke(r,m(this,O),"year-month");return i=Hn(r,i,pt(r,e,["year","month","monthCode"],[],"partial")),lr(ui(r,i,j(A(t))),r)}add(e,t=void 0){return v(this,Se),uc("add",this,e,t)}subtract(e,t=void 0){return v(this,Se),uc("subtract",this,e,t)}until(e,t=void 0){return v(this,Se),nc("until",this,e,t)}since(e,t=void 0){return v(this,Se),nc("since",this,e,t)}equals(e){v(this,Se);const t=Wr(e);return Gt(m(this,O),m(t,O))===0&&kt(m(this,M),m(t,M))}toString(e=void 0){return v(this,Se),V0(this,Ti(A(e)))}toJSON(){return v(this,Se),V0(this)}toLocaleString(e=void 0,t=void 0){return v(this,Se),new vt(e,t).format(this)}valueOf(){An("PlainYearMonth")}toPlainDate(e){if(v(this,Se),!le(e))throw new TypeError("argument should be an object");const t=m(this,M);return Ze(Cn(t,Hn(t,Ke(t,m(this,O),"year-month"),pt(t,e,["day"],[],[])),"constrain"),t)}static from(e,t=void 0){return Wr(e,t)}static compare(e,t){const r=Wr(e),i=Wr(t);return Gt(m(r,O),m(i,O))}}function Zt(n,e){v(n,Se);const t=m(n,O);return Di(n).isoToDate(t,{[e]:!0})[e]}hn(t0,"Temporal.PlainYearMonth");const nh=vt.prototype.resolvedOptions;class n0{constructor(e,t,r="iso8601"){if(arguments.length<1)throw new TypeError("missing argument: epochNanoseconds is required");const i=Eo(e);let o=ve(t);const{tzName:a,offsetMinutes:s}=Mn(o);if(s===void 0){const c=yo(a);if(!c)throw new RangeError(`unknown time zone ${a}`);o=c.identifier}else o=ks(s);Yu(this,i,o,Je(r===void 0?"iso8601":ve(r)))}get calendarId(){return v(this,$),m(this,M)}get timeZoneId(){return v(this,$),m(this,Z)}get year(){return Fe(this,"year")}get month(){return Fe(this,"month")}get monthCode(){return Fe(this,"monthCode")}get day(){return Fe(this,"day")}get hour(){return tr(this,"hour")}get minute(){return tr(this,"minute")}get second(){return tr(this,"second")}get millisecond(){return tr(this,"millisecond")}get microsecond(){return tr(this,"microsecond")}get nanosecond(){return tr(this,"nanosecond")}get era(){return Fe(this,"era")}get eraYear(){return Fe(this,"eraYear")}get epochMilliseconds(){return v(this,$),Tt(m(this,I),"floor")}get epochNanoseconds(){return v(this,$),rd(m(this,I))}get dayOfWeek(){return Fe(this,"dayOfWeek")}get dayOfYear(){return Fe(this,"dayOfYear")}get weekOfYear(){var e;return(e=Fe(this,"weekOfYear"))==null?void 0:e.week}get yearOfWeek(){var e;return(e=Fe(this,"weekOfYear"))==null?void 0:e.year}get hoursInDay(){v(this,$);const e=m(this,Z),t=Ot(this).isoDate,r=st(t.year,t.month,t.day+1),i=_n(e,t),o=_n(e,r);return ri(F.fromEpochNsDiff(o,i),"hour")}get daysInWeek(){return Fe(this,"daysInWeek")}get daysInMonth(){return Fe(this,"daysInMonth")}get daysInYear(){return Fe(this,"daysInYear")}get monthsInYear(){return Fe(this,"monthsInYear")}get inLeapYear(){return Fe(this,"inLeapYear")}get offset(){return v(this,$),Xa(rn(m(this,Z),m(this,I)))}get offsetNanoseconds(){return v(this,$),rn(m(this,Z),m(this,I))}with(e,t=void 0){if(v(this,$),!le(e))throw new TypeError("invalid zoned-date-time-like");Cr(e);const r=m(this,M),i=m(this,Z),o=rn(i,m(this,I)),a=Ot(this);let s={...Ke(r,a.isoDate),...a.time,offset:Xa(o)};s=Hn(r,s,pt(r,e,["year","month","monthCode","day"],["hour","minute","second","millisecond","microsecond","nanosecond","offset"],"partial"));const c=A(t),u=ni(c),d=ao(c,"prefer"),l=Ri(r,s,j(c)),f=Ir(s.offset);return Ie(go(l.isoDate,l.time,"option",f,i,u,d,!1),i,r)}withPlainTime(e=void 0){v(this,$);const t=m(this,Z),r=m(this,M),i=Ot(this).isoDate;let o;return o=e===void 0?_n(t,i):Le(t,W(i,m(wn(e),de)),"compatible"),Ie(o,t,r)}withTimeZone(e){v(this,$);const t=Be(e);return Ie(m(this,I),t,m(this,M))}withCalendar(e){v(this,$);const t=Ci(e);return Ie(m(this,I),m(this,Z),t)}add(e,t=void 0){return v(this,$),dc("add",this,e,t)}subtract(e,t=void 0){return v(this,$),dc("subtract",this,e,t)}until(e,t=void 0){return v(this,$),rc("until",this,e,t)}since(e,t=void 0){return v(this,$),rc("since",this,e,t)}round(e){if(v(this,$),e===void 0)throw new TypeError("options parameter is required");const t=typeof e=="string"?Gn("smallestUnit",e):A(e),r=xr(t),i=xt(t,"halfExpand"),o=at(t,"smallestUnit","time",dn,["day"]),a={day:1,hour:24,minute:60,second:60,millisecond:1e3,microsecond:1e3,nanosecond:1e3}[o];if(Ar(r,a,a===1),o==="nanosecond"&&r===1)return Ie(m(this,I),m(this,Z),m(this,M));const s=m(this,Z),c=m(this,I),u=Ot(this);let d;if(o==="day"){const l=u.isoDate,f=st(l.year,l.month,l.day+1),g=_n(s,l),p=_n(s,f),y=h.subtract(p,g);d=F.fromEpochNsDiff(c,g).round(y,i).addToEpochNs(g)}else{const l=ns(u,r,o,i),f=rn(s,c);d=go(l.isoDate,l.time,"option",f,s,"compatible","prefer",!1)}return Ie(d,s,m(this,M))}equals(e){v(this,$);const t=qr(e),r=m(this,I),i=m(t,I);return!!h.equal(h.BigInt(r),h.BigInt(i))&&!!Gu(m(this,Z),m(t,Z))&&kt(m(this,M),m(t,M))}toString(e=void 0){v(this,$);const t=A(e),r=Ti(t),i=bi(t),o=function(f){return sn(f,"offset",["auto","never"],"auto")}(t),a=xt(t,"trunc"),s=at(t,"smallestUnit","time",void 0);if(s==="hour")throw new RangeError('smallestUnit must be a time unit other than "hour"');const c=function(f){return sn(f,"timeZoneName",["auto","never","critical"],"auto")}(t),{precision:u,unit:d,increment:l}=Mi(s,i);return Z0(this,u,r,c,o,{unit:d,increment:l,roundingMode:a})}toLocaleString(e=void 0,t=void 0){v(this,$);const r=A(t),i=Object.create(null);if(function(c,u,d,l){if(u==null)return;const f=Reflect.ownKeys(u);for(let g=0;g<f.length;g++){const p=f[g];if(!d.some(y=>Object.is(y,p))&&Object.prototype.propertyIsEnumerable.call(u,p)){const y=u[p];c[p]=y}}}(i,r,["timeZone"]),r.timeZone!==void 0)throw new TypeError("ZonedDateTime toLocaleString does not accept a timeZone option");if(i.year===void 0&&i.month===void 0&&i.day===void 0&&i.era===void 0&&i.weekday===void 0&&i.dateStyle===void 0&&i.hour===void 0&&i.minute===void 0&&i.second===void 0&&i.fractionalSecondDigits===void 0&&i.timeStyle===void 0&&i.dayPeriod===void 0&&i.timeZoneName===void 0&&(i.timeZoneName="short"),i.timeZone=m(this,Z),B0(i.timeZone))throw new RangeError("toLocaleString does not currently support offset time zones");const o=new vt(e,i),a=nh.call(o).calendar,s=m(this,M);if(s!=="iso8601"&&a!=="iso8601"&&!kt(a,s))throw new RangeError(`cannot format ZonedDateTime with calendar ${s} in locale with calendar ${a}`);return o.format($t(m(this,I)))}toJSON(){return v(this,$),Z0(this,"auto")}valueOf(){An("ZonedDateTime")}startOfDay(){v(this,$);const e=m(this,Z);return Ie(_n(e,Ot(this).isoDate),e,m(this,M))}getTimeZoneTransition(e){v(this,$);const t=m(this,Z);if(e===void 0)throw new TypeError("options parameter is required");const r=sn(typeof e=="string"?Gn("direction",e):A(e),"direction",["next","previous"],dn);if(r===void 0)throw new TypeError("direction option is required");if(B0(t)||t==="UTC")return null;const i=m(this,I),o=r==="next"?Gs(t,i):Qa(t,i);return o===null?null:Ie(o,t,m(this,M))}toInstant(){return v(this,$),$t(m(this,I))}toPlainDate(){return v(this,$),Ze(Ot(this).isoDate,m(this,M))}toPlainTime(){return v(this,$),nn(Ot(this).time)}toPlainDateTime(){return v(this,$),yt(Ot(this),m(this,M))}static from(e,t=void 0){return qr(e,t)}static compare(e,t){const r=qr(e),i=qr(t),o=m(r,I),a=m(i,I);return h.lessThan(h.BigInt(o),h.BigInt(a))?-1:h.greaterThan(h.BigInt(o),h.BigInt(a))?1:0}}function Ot(n){return Et(m(n,Z),m(n,I))}function Fe(n,e){v(n,$);const t=Ot(n).isoDate;return Di(n).isoToDate(t,{[e]:!0})[e]}function tr(n,e){return v(n,$),Ot(n).time[e]}hn(n0,"Temporal.ZonedDateTime");var rh=Object.freeze({__proto__:null,Duration:br,Instant:Ks,Now:gd,PlainDate:Qs,PlainDateTime:Js,PlainMonthDay:e0,PlainTime:Li,PlainYearMonth:t0,ZonedDateTime:n0});const ih=[Ks,Qs,Js,br,e0,Li,t0,n0];for(const n of ih){const e=Object.getOwnPropertyDescriptor(n,"prototype");(e.configurable||e.enumerable||e.writable)&&(e.configurable=!1,e.enumerable=!1,e.writable=!1,Object.defineProperty(n,"prototype",e))}const oh=globalThis.Temporal,r0=oh??rh,ah=({year:n,dayOfYear:e})=>r0.PlainDate.from({year:n,month:1,day:1}).add({days:e-1}),sh=n=>{const e=ah(n),t=Math.round(n.minutes);return r0.ZonedDateTime.from({timeZone:n.timeZone,year:e.year,month:e.month,day:e.day,hour:Math.floor(t/60),minute:t%60},{disambiguation:"compatible"})},i0=(n,e)=>{const t=r0.Instant.fromEpochMilliseconds(n.getTime()).toZonedDateTimeISO(e);return{year:t.year,dayOfYear:t.dayOfYear,minutes:t.hour*60+t.minute,timeZone:t.timeZoneId}},ch=n=>new Date(sh(n).epochMilliseconds);/**
 * postprocessing v6.39.4 build Mon Jul 27 2026
 * https://github.com/pmndrs/postprocessing
 * Copyright 2015-2026 Raoul van Rüschen
 * @license Zlib
 */var uh=(()=>{const n=new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),e=new Float32Array([0,0,2,0,0,2]),t=new su;return t.setAttribute("position",new C0(n,3)),t.setAttribute("uv",new C0(e,2)),t})(),dh=class as{static get fullscreenGeometry(){return uh}constructor(e="Pass",t=new S0,r=new Il){this.name=e,this.renderer=null,this.scene=t,this.camera=r,this.screen=null,this.rtt=!0,this.needsSwap=!0,this.needsDepthBlit=!1,this.needsDepthTexture=!1,this.enabled=!0}get renderToScreen(){return!this.rtt}set renderToScreen(e){if(this.rtt===e){const t=this.fullscreenMaterial;t!==null&&(t.needsUpdate=!0),this.rtt=!e}}set mainScene(e){}set mainCamera(e){}setRenderer(e){this.renderer=e}isEnabled(){return this.enabled}setEnabled(e){this.enabled=e}get fullscreenMaterial(){return this.screen!==null?this.screen.material:null}set fullscreenMaterial(e){let t=this.screen;t!==null?t.material=e:(t=new au(as.fullscreenGeometry,e),t.frustumCulled=!1,this.scene===null&&(this.scene=new S0),this.scene.add(t),this.screen=t)}getFullscreenMaterial(){return this.fullscreenMaterial}setFullscreenMaterial(e){this.fullscreenMaterial=e}getDepthTexture(){return null}setDepthTexture(e,t=ru){}render(e,t,r,i,o){throw new Error("Render method not implemented!")}setSize(e,t){}initialize(e,t,r){}dispose(){for(const e of Object.keys(this)){const t=this[e];(t instanceof iu||t instanceof Uo||t instanceof ou||t instanceof as)&&this[e].dispose()}this.fullscreenMaterial!==null&&this.fullscreenMaterial.dispose()}},pd={NONE:0,DEPTH:1,CONVOLUTION:2},k={SKIP:9,SET:30,ADD:0,ALPHA:1,AVERAGE:2,COLOR:3,COLOR_BURN:4,COLOR_DODGE:5,DARKEN:6,DIFFERENCE:7,DIVIDE:8,DST:9,EXCLUSION:10,HARD_LIGHT:11,HARD_MIX:12,HUE:13,INVERT:14,INVERT_RGB:15,LIGHTEN:16,LINEAR_BURN:17,LINEAR_DODGE:18,LINEAR_LIGHT:19,LUMINOSITY:20,MULTIPLY:21,NEGATION:22,NORMAL:23,OVERLAY:24,PIN_LIGHT:25,REFLECT:26,SATURATION:27,SCREEN:28,SOFT_LIGHT:29,SRC:30,SUBTRACT:31,VIVID_LIGHT:32},lh="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",hh="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,src.a*opacity);}",mh="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=(dst.rgb+src.rgb)*0.5;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",fh="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.xy,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",gh="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=mix(step(0.0,b)*(1.0-min(vec3(1.0),(1.0-a)/max(b,1e-9))),vec3(1.0),step(1.0,a));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",ph="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=step(0.0,a)*mix(min(vec3(1.0),a/max(1.0-b,1e-9)),vec3(1.0),step(1.0,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",yh="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",_h="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=abs(dst.rgb-src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",vh="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb/max(src.rgb,1e-9);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",wh="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-2.0*dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Eh="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb,1.0);vec3 b=min(src.rgb,1.0);vec3 c=mix(2.0*a*b,1.0-2.0*(1.0-a)*(1.0-b),step(0.5,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Th="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=step(1.0,dst.rgb+src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",bh="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.x,a.yz));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Mh="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Dh="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=src.rgb*max(1.0-dst.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Rh="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Sh="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Ch="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb+src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",xh="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(2.0*src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Ah="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.xy,b.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Ih="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Oh="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-abs(1.0-dst.rgb-src.rgb),0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Nh="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,opacity);}",Lh="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=2.0*src.rgb*dst.rgb;vec3 b=1.0-2.0*(1.0-src.rgb)*(1.0-dst.rgb);vec3 c=mix(a,b,step(0.5,dst.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Ph="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 c=mix(mix(src2,dst.rgb,step(0.5*dst.rgb,src.rgb)),max(src2-1.0,vec3(0.0)),step(dst.rgb,src2-1.0));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Uh="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb*dst.rgb/max(1.0-src.rgb,1e-9),1.0);vec3 c=mix(a,src.rgb,step(1.0,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",$h="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.x,b.y,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Fh="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-min(dst.rgb*src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Hh="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 d=dst.rgb+(src2-1.0);vec3 w=step(0.5,src.rgb);vec3 a=dst.rgb-(1.0-src2)*dst.rgb*(1.0-dst.rgb);vec3 b=mix(d*(sqrt(dst.rgb)-dst.rgb),d*dst.rgb*((16.0*dst.rgb-12.0)*dst.rgb+3.0),w*(1.0-step(0.25,dst.rgb)));vec3 c=mix(a,b,w);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",zh="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return src;}",kh="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Yh="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=mix(max(1.0-min((1.0-dst.rgb)/(2.0*src.rgb),1.0),0.0),min(dst.rgb/(2.0*(1.0-src.rgb)),1.0),step(0.5,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Gh=new Map([[k.ADD,lh],[k.ALPHA,hh],[k.AVERAGE,mh],[k.COLOR,fh],[k.COLOR_BURN,gh],[k.COLOR_DODGE,ph],[k.DARKEN,yh],[k.DIFFERENCE,_h],[k.DIVIDE,vh],[k.DST,null],[k.EXCLUSION,wh],[k.HARD_LIGHT,Eh],[k.HARD_MIX,Th],[k.HUE,bh],[k.INVERT,Mh],[k.INVERT_RGB,Dh],[k.LIGHTEN,Rh],[k.LINEAR_BURN,Sh],[k.LINEAR_DODGE,Ch],[k.LINEAR_LIGHT,xh],[k.LUMINOSITY,Ah],[k.MULTIPLY,Ih],[k.NEGATION,Oh],[k.NORMAL,Nh],[k.OVERLAY,Lh],[k.PIN_LIGHT,Ph],[k.REFLECT,Uh],[k.SATURATION,$h],[k.SCREEN,Fh],[k.SOFT_LIGHT,Hh],[k.SRC,zh],[k.SUBTRACT,kh],[k.VIVID_LIGHT,Yh]]),jh=class extends nu{constructor(n,e=1){super(),this._blendFunction=n,this.opacity=new D(e)}getOpacity(){return this.opacity.value}setOpacity(n){this.opacity.value=n}get blendFunction(){return this._blendFunction}set blendFunction(n){this._blendFunction=n,this.dispatchEvent({type:"change"})}getBlendFunction(){return this.blendFunction}setBlendFunction(n){this.blendFunction=n}getShaderCode(){return Gh.get(this.blendFunction)}},Wh=class extends nu{constructor(n,e,{attributes:t=pd.NONE,blendFunction:r=k.NORMAL,defines:i=new Map,uniforms:o=new Map,extensions:a=null,vertexShader:s=null}={}){super(),this.name=n,this.renderer=null,this.attributes=t,this.fragmentShader=e,this.vertexShader=s,this.defines=i,this.uniforms=o,this.extensions=a,this.blendMode=new jh(r),this.blendMode.addEventListener("change",c=>this.setChanged()),this._inputColorSpace=xl,this._outputColorSpace=Al}get inputColorSpace(){return this._inputColorSpace}set inputColorSpace(n){this._inputColorSpace=n,this.setChanged()}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(n){this._outputColorSpace=n,this.setChanged()}set mainScene(n){}set mainCamera(n){}getName(){return this.name}setRenderer(n){this.renderer=n}getDefines(){return this.defines}getUniforms(){return this.uniforms}getExtensions(){return this.extensions}getBlendMode(){return this.blendMode}getAttributes(){return this.attributes}setAttributes(n){this.attributes=n,this.setChanged()}getFragmentShader(){return this.fragmentShader}setFragmentShader(n){this.fragmentShader=n,this.setChanged()}getVertexShader(){return this.vertexShader}setVertexShader(n){this.vertexShader=n,this.setChanged()}setChanged(){this.dispatchEvent({type:"change"})}setDepthTexture(n,e=ru){}update(n,e,t){}setSize(n,e){}initialize(n,e,t){}dispose(){for(const n of Object.keys(this)){const e=this[n];(e instanceof iu||e instanceof Uo||e instanceof ou||e instanceof dh)&&this[n].dispose()}}};const qh=new C;function yd(n,e,t=new C,r){const{x:i,y:o,z:a}=n,s=e.x,c=e.y,u=e.z,d=i*i*s,l=o*o*c,f=a*a*u,g=d+l+f,p=Math.sqrt(1/g);if(!Number.isFinite(p))return;const y=qh.copy(n).multiplyScalar(p);if(g<((r==null?void 0:r.centerTolerance)??.1))return t.copy(y);const _=y.multiply(e).multiplyScalar(2);let w=(1-p)*n.length()/(_.length()/2),T=0,b,S,R,z;do{w-=T,b=1/(1+w*s),S=1/(1+w*c),R=1/(1+w*u);const Y=b*b,V=S*S,U=R*R,ee=Y*b,G=V*S,H=U*R;z=d*Y+l*V+f*U-1,T=z/((d*ee*s+l*G*c+f*H*u)*-2)}while(Math.abs(z)>1e-12);return t.set(i*b,o*S,a*R)}const Bi=new C,mc=new C,fc=new C,ss=class{constructor(e,t,r){this.radii=new C(e,t,r)}get minimumRadius(){return Math.min(this.radii.x,this.radii.y,this.radii.z)}get maximumRadius(){return Math.max(this.radii.x,this.radii.y,this.radii.z)}reciprocalRadii(e=new C){const{x:t,y:r,z:i}=this.radii;return e.set(1/t,1/r,1/i)}reciprocalRadiiSquared(e=new C){const{x:t,y:r,z:i}=this.radii;return e.set(1/t**2,1/r**2,1/i**2)}projectOnSurface(e,t=new C,r){return yd(e,this.reciprocalRadiiSquared(),t,r)}getSurfaceNormal(e,t=new C){return t.multiplyVectors(this.reciprocalRadiiSquared(Bi),e).normalize()}getEastNorthUpVectors(e,t=new C,r=new C,i=new C){this.getSurfaceNormal(e,i),t.set(-e.y,e.x,0).normalize(),r.crossVectors(i,t).normalize()}getEastNorthUpFrame(e,t=new Te){const r=Bi,i=mc,o=fc;return this.getEastNorthUpVectors(e,r,i,o),t.makeBasis(r,i,o).setPosition(e)}getIntersection(e,t=new C){const r=this.reciprocalRadii(Bi),i=mc.copy(r).multiply(e.origin),o=fc.copy(r).multiply(e.direction),a=i.lengthSq(),s=o.lengthSq(),c=i.dot(o),u=c**2-s*(a-1);if(a===1)return t.copy(e.origin);if(a>1){if(c>=0||u<0)return;const d=Math.sqrt(u),l=(-c-d)/s,f=(-c+d)/s;return e.at(Math.min(l,f),t)}if(a<1){const d=c**2-s*(a-1),l=Math.sqrt(d),f=(-c+l)/s;return e.at(f,t)}if(c<0)return e.at(-c/s,t)}getOsculatingSphereCenter(e,t,r=new C){const i=this.radii.x**2,o=Bi.set(e.x/i,e.y/i,e.z/this.radii.z**2).normalize();return r.copy(o.multiplyScalar(-t).add(e))}};ss.WGS84=new ss(6378137,6378137,6356752314245179e-9);let jt=ss;const Xi=new C,gc=new C,Zr=class cs{constructor(e=0,t=0,r=0){this.longitude=e,this.latitude=t,this.height=r}set(e,t,r){return this.longitude=e,this.latitude=t,r!=null&&(this.height=r),this}clone(){return new cs(this.longitude,this.latitude,this.height)}copy(e){return this.longitude=e.longitude,this.latitude=e.latitude,this.height=e.height,this}equals(e){return e.longitude===this.longitude&&e.latitude===this.latitude&&e.height===this.height}setLongitude(e){return this.longitude=e,this}setLatitude(e){return this.latitude=e,this}setHeight(e){return this.height=e,this}normalize(){return this.longitude<cs.MIN_LONGITUDE&&(this.longitude+=Math.PI*2),this}setFromECEF(e,t){const r=((t==null?void 0:t.ellipsoid)??jt.WGS84).reciprocalRadiiSquared(Xi),i=yd(e,r,gc,t);if(i==null)throw new Error(`Could not project position to ellipsoid surface: ${e.toArray()}`);const o=Xi.multiplyVectors(i,r).normalize();this.longitude=Math.atan2(o.y,o.x),this.latitude=Math.asin(o.z);const a=Xi.subVectors(e,i);return this.height=Math.sign(a.dot(e))*a.length(),this}toECEF(e=new C,t){const r=(t==null?void 0:t.ellipsoid)??jt.WGS84,i=Xi.multiplyVectors(r.radii,r.radii),o=Math.cos(this.latitude),a=gc.set(o*Math.cos(this.longitude),o*Math.sin(this.longitude),Math.sin(this.latitude)).normalize();return e.multiplyVectors(i,a),e.divideScalar(Math.sqrt(a.dot(e))).add(a.multiplyScalar(this.height))}fromArray(e,t=0){return this.longitude=e[t],this.latitude=e[t+1],this.height=e[t+2],this}toArray(e=[],t=0){return e[t]=this.longitude,e[t+1]=this.latitude,e[t+2]=this.height,e}*[Symbol.iterator](){yield this.longitude,yield this.latitude,yield this.height}};Zr.MIN_LONGITUDE=-Math.PI,Zr.MAX_LONGITUDE=Math.PI,Zr.MIN_LATITUDE=-Math.PI/2,Zr.MAX_LATITUDE=Math.PI/2;let _d=Zr;var Vh="Invariant failed";function vd(n,e){if(!n)throw new Error(Vh)}class Zh extends Us{load(e,t,r,i){const o=new Pl(this.manager);o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(this.withCredentials),o.load(e,a=>{vd(a instanceof ArrayBuffer);try{t(a)}catch(s){i!=null?i(s):console.error(s),this.manager.itemError(e)}},r,i)}}const Bh="This is not an object",Xh="This is not a Float16Array object",pc="This constructor is not a subclass of Float16Array",wd="The constructor property value is not an object",Kh="Species constructor didn't return TypedArray object",Qh="Derived constructor created TypedArray object which was too small length",ii="Attempting to access detached ArrayBuffer",us="Cannot convert undefined or null to object",ds="Cannot mix BigInt and other types, use explicit conversions",yc="@@iterator property is not callable",_c="Reduce of empty array with no initial value",Jh="The comparison function must be either a function or undefined",Da="Offset is out of bounds";function re(n){return(e,...t)=>nt(n,e,t)}function Lr(n,e){return re(Mr(n,e).get)}const{apply:nt,construct:Br,defineProperty:em,get:Ra,getOwnPropertyDescriptor:Mr,getPrototypeOf:Pi,has:ls,ownKeys:Ed,set:vc,setPrototypeOf:Td}=Reflect,tm=Proxy,{EPSILON:nm,MAX_SAFE_INTEGER:wc,isFinite:bd,isNaN:Dr}=Number,{iterator:Wt,species:rm,toStringTag:o0,for:im}=Symbol,Rr=Object,{create:Jo,defineProperty:Ui,freeze:om,is:Ec}=Rr,hs=Rr.prototype,am=hs.__lookupGetter__?re(hs.__lookupGetter__):(n,e)=>{if(n==null)throw se(us);let t=Rr(n);do{const r=Mr(t,e);if(r!==void 0)return tn(r,"get")?r.get:void 0}while((t=Pi(t))!==null)},tn=Rr.hasOwn||re(hs.hasOwnProperty),Md=Array,Dd=Md.isArray,ea=Md.prototype,sm=re(ea.join),cm=re(ea.push),um=re(ea.toLocaleString),a0=ea[Wt],dm=re(a0),{abs:lm,trunc:Rd}=Math,ta=ArrayBuffer,hm=ta.isView,Sd=ta.prototype,mm=re(Sd.slice),fm=Lr(Sd,"byteLength"),ms=typeof SharedArrayBuffer<"u"?SharedArrayBuffer:null,gm=ms&&Lr(ms.prototype,"byteLength"),s0=Pi(Uint8Array),pm=s0.from,Me=s0.prototype,ym=Me[Wt],_m=re(Me.keys),vm=re(Me.values),wm=re(Me.entries),Em=re(Me.set),Tc=re(Me.reverse),Tm=re(Me.fill),bm=re(Me.copyWithin),bc=re(Me.sort),Fr=re(Me.slice),Mm=re(Me.subarray),we=Lr(Me,"buffer"),On=Lr(Me,"byteOffset"),X=Lr(Me,"length"),Cd=Lr(Me,o0),Dm=Uint8Array,lt=Uint16Array,Mc=(...n)=>nt(pm,lt,n),c0=Uint32Array,Rm=Float32Array,Wn=Pi([][Wt]()),na=re(Wn.next),Sm=re(function*(){}().next),Cm=Pi(Wn),xm=DataView.prototype,Am=re(xm.getUint16),se=TypeError,Sa=RangeError,xd=WeakSet,Ad=xd.prototype,Im=re(Ad.add),Om=re(Ad.has),ra=WeakMap,u0=ra.prototype,bo=re(u0.get),Nm=re(u0.has),d0=re(u0.set),Id=new ra,Lm=Jo(null,{next:{value:function(){const n=bo(Id,this);return na(n)}},[Wt]:{value:function(){return this}}});function Xr(n){if(n[Wt]===a0&&Wn.next===na)return n;const e=Jo(Lm);return d0(Id,e,dm(n)),e}const Od=new ra,Nd=Jo(Cm,{next:{value:function(){const n=bo(Od,this);return Sm(n)},writable:!0,configurable:!0}});for(const n of Ed(Wn))n!=="next"&&Ui(Nd,n,Mr(Wn,n));function Dc(n){const e=Jo(Nd);return d0(Od,e,n),e}function Mo(n){return n!==null&&typeof n=="object"||typeof n=="function"}function Rc(n){return n!==null&&typeof n=="object"}function Do(n){return Cd(n)!==void 0}function fs(n){const e=Cd(n);return e==="BigInt64Array"||e==="BigUint64Array"}function Pm(n){try{return Dd(n)?!1:(fm(n),!0)}catch{return!1}}function Ld(n){if(ms===null)return!1;try{return gm(n),!0}catch{return!1}}function Um(n){return Pm(n)||Ld(n)}function Sc(n){return Dd(n)?n[Wt]===a0&&Wn.next===na:!1}function $m(n){return Do(n)?n[Wt]===ym&&Wn.next===na:!1}function Ki(n){if(typeof n!="string")return!1;const e=+n;return n!==e+""||!bd(e)?!1:e===Rd(e)}const Ro=im("__Float16Array__");function Fm(n){if(!Rc(n))return!1;const e=Pi(n);if(!Rc(e))return!1;const t=e.constructor;if(t===void 0)return!1;if(!Mo(t))throw se(wd);return ls(t,Ro)}const gs=1/nm;function Hm(n){return n+gs-gs}const Pd=6103515625e-14,zm=65504,Ud=.0009765625,Cc=Ud*Pd,km=Ud*gs;function Ym(n){const e=+n;if(!bd(e)||e===0)return e;const t=e>0?1:-1,r=lm(e);if(r<Pd)return t*Hm(r/Cc)*Cc;const i=(1+km)*r,o=i-(i-r);return o>zm||Dr(o)?t*(1/0):t*o}const $d=new ta(4),Fd=new Rm($d),Hd=new c0($d),St=new lt(512),Ct=new Dm(512);for(let n=0;n<256;++n){const e=n-127;e<-24?(St[n]=0,St[n|256]=32768,Ct[n]=24,Ct[n|256]=24):e<-14?(St[n]=1024>>-e-14,St[n|256]=1024>>-e-14|32768,Ct[n]=-e-1,Ct[n|256]=-e-1):e<=15?(St[n]=e+15<<10,St[n|256]=e+15<<10|32768,Ct[n]=13,Ct[n|256]=13):e<128?(St[n]=31744,St[n|256]=64512,Ct[n]=24,Ct[n|256]=24):(St[n]=31744,St[n|256]=64512,Ct[n]=13,Ct[n|256]=13)}function Nt(n){Fd[0]=Ym(n);const e=Hd[0],t=e>>23&511;return St[t]+((e&8388607)>>Ct[t])}const l0=new c0(2048);for(let n=1;n<1024;++n){let e=n<<13,t=0;for(;!(e&8388608);)e<<=1,t-=8388608;e&=-8388609,t+=947912704,l0[n]=e|t}for(let n=1024;n<2048;++n)l0[n]=939524096+(n-1024<<13);const Pr=new c0(64);for(let n=1;n<31;++n)Pr[n]=n<<23;Pr[31]=1199570944;Pr[32]=2147483648;for(let n=33;n<63;++n)Pr[n]=2147483648+(n-32<<23);Pr[63]=3347054592;const zd=new lt(64);for(let n=1;n<64;++n)n!==32&&(zd[n]=1024);function K(n){const e=n>>10;return Hd[0]=l0[zd[e]+(n&1023)]+Pr[e],Fd[0]}function Bt(n){const e=+n;return Dr(e)||e===0?0:Rd(e)}function Ca(n){const e=Bt(n);return e<0?0:e<wc?e:wc}function Qi(n,e){if(!Mo(n))throw se(Bh);const t=n.constructor;if(t===void 0)return e;if(!Mo(t))throw se(wd);return t[rm]??e}function oi(n){if(Ld(n))return!1;try{return mm(n,0,0),!1}catch{}return!0}function xc(n,e){const t=Dr(n),r=Dr(e);if(t&&r)return 0;if(t)return 1;if(r||n<e)return-1;if(n>e)return 1;if(n===0&&e===0){const i=Ec(n,0),o=Ec(e,0);if(!i&&o)return-1;if(i&&!o)return 1}return 0}const h0=2,So=new ra;function cr(n){return Nm(So,n)||!hm(n)&&Fm(n)}function B(n){if(!cr(n))throw se(Xh)}function Ji(n,e){const t=cr(n),r=Do(n);if(!t&&!r)throw se(Kh);if(typeof e=="number"){let i;if(t){const o=L(n);i=X(o)}else i=X(n);if(i<e)throw se(Qh)}if(fs(n))throw se(ds)}function L(n){const e=bo(So,n);if(e!==void 0){const i=we(e);if(oi(i))throw se(ii);return e}const t=n.buffer;if(oi(t))throw se(ii);const r=Br(J,[t,n.byteOffset,n.length],n.constructor);return bo(So,r)}function Ac(n){const e=X(n),t=[];for(let r=0;r<e;++r)t[r]=K(n[r]);return t}const kd=new xd;for(const n of Ed(Me)){if(n===o0)continue;const e=Mr(Me,n);tn(e,"get")&&typeof e.get=="function"&&Im(kd,e.get)}const Gm=om({get(n,e,t){return Ki(e)&&tn(n,e)?K(Ra(n,e)):Om(kd,am(n,e))?Ra(n,e):Ra(n,e,t)},set(n,e,t,r){return Ki(e)&&tn(n,e)?vc(n,e,Nt(t)):vc(n,e,t,r)},getOwnPropertyDescriptor(n,e){if(Ki(e)&&tn(n,e)){const t=Mr(n,e);return t.value=K(t.value),t}return Mr(n,e)},defineProperty(n,e,t){return Ki(e)&&tn(n,e)&&tn(t,"value")&&(t.value=Nt(t.value)),em(n,e,t)}});class J{constructor(e,t,r){let i;if(cr(e))i=Br(lt,[L(e)],new.target);else if(Mo(e)&&!Um(e)){let a,s;if(Do(e)){a=e,s=X(e);const c=we(e);if(oi(c))throw se(ii);if(fs(e))throw se(ds);const u=new ta(s*h0);i=Br(lt,[u],new.target)}else{const c=e[Wt];if(c!=null&&typeof c!="function")throw se(yc);c!=null?Sc(e)?(a=e,s=e.length):(a=[...e],s=a.length):(a=e,s=Ca(a.length)),i=Br(lt,[s],new.target)}for(let c=0;c<s;++c)i[c]=Nt(a[c])}else i=Br(lt,arguments,new.target);const o=new tm(i,Gm);return d0(So,o,i),o}static from(e,...t){const r=this;if(!ls(r,Ro))throw se(pc);if(r===J){if(cr(e)&&t.length===0){const d=L(e),l=new lt(we(d),On(d),X(d));return new J(we(Fr(l)))}if(t.length===0)return new J(we(Mc(e,Nt)));const c=t[0],u=t[1];return new J(we(Mc(e,function(d,...l){return Nt(nt(c,this,[d,...Xr(l)]))},u)))}let i,o;const a=e[Wt];if(a!=null&&typeof a!="function")throw se(yc);if(a!=null)Sc(e)?(i=e,o=e.length):$m(e)?(i=e,o=X(e)):(i=[...e],o=i.length);else{if(e==null)throw se(us);i=Rr(e),o=Ca(i.length)}const s=new r(o);if(t.length===0)for(let c=0;c<o;++c)s[c]=i[c];else{const c=t[0],u=t[1];for(let d=0;d<o;++d)s[d]=nt(c,u,[i[d],d])}return s}static of(...e){const t=this;if(!ls(t,Ro))throw se(pc);const r=e.length;if(t===J){const o=new J(r),a=L(o);for(let s=0;s<r;++s)a[s]=Nt(e[s]);return o}const i=new t(r);for(let o=0;o<r;++o)i[o]=e[o];return i}keys(){B(this);const e=L(this);return _m(e)}values(){B(this);const e=L(this);return Dc(function*(){for(const t of vm(e))yield K(t)}())}entries(){B(this);const e=L(this);return Dc(function*(){for(const[t,r]of wm(e))yield[t,K(r)]}())}at(e){B(this);const t=L(this),r=X(t),i=Bt(e),o=i>=0?i:r+i;if(!(o<0||o>=r))return K(t[o])}with(e,t){B(this);const r=L(this),i=X(r),o=Bt(e),a=o>=0?o:i+o,s=+t;if(a<0||a>=i)throw Sa(Da);const c=new lt(we(r),On(r),X(r)),u=new J(we(Fr(c))),d=L(u);return d[a]=Nt(s),u}map(e,...t){B(this);const r=L(this),i=X(r),o=t[0],a=Qi(r,J);if(a===J){const c=new J(i),u=L(c);for(let d=0;d<i;++d){const l=K(r[d]);u[d]=Nt(nt(e,o,[l,d,this]))}return c}const s=new a(i);Ji(s,i);for(let c=0;c<i;++c){const u=K(r[c]);s[c]=nt(e,o,[u,c,this])}return s}filter(e,...t){B(this);const r=L(this),i=X(r),o=t[0],a=[];for(let u=0;u<i;++u){const d=K(r[u]);nt(e,o,[d,u,this])&&cm(a,d)}const s=Qi(r,J),c=new s(a);return Ji(c),c}reduce(e,...t){B(this);const r=L(this),i=X(r);if(i===0&&t.length===0)throw se(_c);let o,a;t.length===0?(o=K(r[0]),a=1):(o=t[0],a=0);for(let s=a;s<i;++s)o=e(o,K(r[s]),s,this);return o}reduceRight(e,...t){B(this);const r=L(this),i=X(r);if(i===0&&t.length===0)throw se(_c);let o,a;t.length===0?(o=K(r[i-1]),a=i-2):(o=t[0],a=i-1);for(let s=a;s>=0;--s)o=e(o,K(r[s]),s,this);return o}forEach(e,...t){B(this);const r=L(this),i=X(r),o=t[0];for(let a=0;a<i;++a)nt(e,o,[K(r[a]),a,this])}find(e,...t){B(this);const r=L(this),i=X(r),o=t[0];for(let a=0;a<i;++a){const s=K(r[a]);if(nt(e,o,[s,a,this]))return s}}findIndex(e,...t){B(this);const r=L(this),i=X(r),o=t[0];for(let a=0;a<i;++a){const s=K(r[a]);if(nt(e,o,[s,a,this]))return a}return-1}findLast(e,...t){B(this);const r=L(this),i=X(r),o=t[0];for(let a=i-1;a>=0;--a){const s=K(r[a]);if(nt(e,o,[s,a,this]))return s}}findLastIndex(e,...t){B(this);const r=L(this),i=X(r),o=t[0];for(let a=i-1;a>=0;--a){const s=K(r[a]);if(nt(e,o,[s,a,this]))return a}return-1}every(e,...t){B(this);const r=L(this),i=X(r),o=t[0];for(let a=0;a<i;++a)if(!nt(e,o,[K(r[a]),a,this]))return!1;return!0}some(e,...t){B(this);const r=L(this),i=X(r),o=t[0];for(let a=0;a<i;++a)if(nt(e,o,[K(r[a]),a,this]))return!0;return!1}set(e,...t){B(this);const r=L(this),i=Bt(t[0]);if(i<0)throw Sa(Da);if(e==null)throw se(us);if(fs(e))throw se(ds);if(cr(e))return Em(L(this),L(e),i);if(Do(e)){const c=we(e);if(oi(c))throw se(ii)}const o=X(r),a=Rr(e),s=Ca(a.length);if(i===1/0||s+i>o)throw Sa(Da);for(let c=0;c<s;++c)r[c+i]=Nt(a[c])}reverse(){B(this);const e=L(this);return Tc(e),this}toReversed(){B(this);const e=L(this),t=new lt(we(e),On(e),X(e)),r=new J(we(Fr(t))),i=L(r);return Tc(i),r}fill(e,...t){B(this);const r=L(this);return Tm(r,Nt(e),...Xr(t)),this}copyWithin(e,t,...r){B(this);const i=L(this);return bm(i,e,t,...Xr(r)),this}sort(e){B(this);const t=L(this),r=e!==void 0?e:xc;return bc(t,(i,o)=>r(K(i),K(o))),this}toSorted(e){B(this);const t=L(this);if(e!==void 0&&typeof e!="function")throw new se(Jh);const r=e!==void 0?e:xc,i=new lt(we(t),On(t),X(t)),o=new J(we(Fr(i))),a=L(o);return bc(a,(s,c)=>r(K(s),K(c))),o}slice(e,t){B(this);const r=L(this),i=Qi(r,J);if(i===J){const p=new lt(we(r),On(r),X(r));return new J(we(Fr(p,e,t)))}const o=X(r),a=Bt(e),s=t===void 0?o:Bt(t);let c;a===-1/0?c=0:a<0?c=o+a>0?o+a:0:c=o<a?o:a;let u;s===-1/0?u=0:s<0?u=o+s>0?o+s:0:u=o<s?o:s;const d=u-c>0?u-c:0,l=new i(d);if(Ji(l,d),d===0)return l;const f=we(r);if(oi(f))throw se(ii);let g=0;for(;c<u;)l[g]=K(r[c]),++c,++g;return l}subarray(e,t){B(this);const r=L(this),i=Qi(r,J),o=new lt(we(r),On(r),X(r)),a=Mm(o,e,t),s=new i(we(a),On(a),X(a));return Ji(s),s}indexOf(e,...t){B(this);const r=L(this),i=X(r);let o=Bt(t[0]);if(o===1/0)return-1;o<0&&(o+=i,o<0&&(o=0));for(let a=o;a<i;++a)if(tn(r,a)&&K(r[a])===e)return a;return-1}lastIndexOf(e,...t){B(this);const r=L(this),i=X(r);let o=t.length>=1?Bt(t[0]):i-1;if(o===-1/0)return-1;o>=0?o=o<i-1?o:i-1:o+=i;for(let a=o;a>=0;--a)if(tn(r,a)&&K(r[a])===e)return a;return-1}includes(e,...t){B(this);const r=L(this),i=X(r);let o=Bt(t[0]);if(o===1/0)return!1;o<0&&(o+=i,o<0&&(o=0));const a=Dr(e);for(let s=o;s<i;++s){const c=K(r[s]);if(a&&Dr(c)||c===e)return!0}return!1}join(e){B(this);const t=L(this),r=Ac(t);return sm(r,e)}toLocaleString(...e){B(this);const t=L(this),r=Ac(t);return um(r,...Xr(e))}get[o0](){if(cr(this))return"Float16Array"}}Ui(J,"BYTES_PER_ELEMENT",{value:h0});Ui(J,Ro,{});Td(J,s0);const Co=J.prototype;Ui(Co,"BYTES_PER_ELEMENT",{value:h0});Ui(Co,Wt,{value:Co.values,writable:!0,configurable:!0});Td(Co,Me);function jm(n,e,...t){return K(Am(n,e,...Xr(t)))}function Wm(n){return n instanceof Int8Array||n instanceof Uint8Array||n instanceof Uint8ClampedArray||n instanceof Int16Array||n instanceof Uint16Array||n instanceof Int32Array||n instanceof Uint32Array||n instanceof J||n instanceof Float32Array||n instanceof Float64Array}let eo;function qm(){if(eo!=null)return eo;const n=new Uint32Array([268435456]);return eo=new Uint8Array(n.buffer,n.byteOffset,n.byteLength)[0]===0,eo}function Vm(n,e,t,r=!0){if(r===qm())return new e(n);const i=Object.assign(new DataView(n),{getFloat16(a,s){return jm(this,a,s)}}),o=new e(i.byteLength/e.BYTES_PER_ELEMENT);for(let a=0,s=0;a<o.length;++a,s+=e.BYTES_PER_ELEMENT)o[a]=i[t](s,r);return o}const xa=(n,e)=>Vm(n,J,"getFloat16",e);class Zm extends Us{load(e,t,r,i){const o=new Zh(this.manager);o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(this.withCredentials),o.load(e,a=>{try{t(this.parseTypedArray(a))}catch(s){i!=null?i(s):console.error(s),this.manager.itemError(e)}},r,i)}}function Bm(n){return class extends Zm{constructor(){super(...arguments),this.parseTypedArray=n}}}function Xm(n){const e=n instanceof Int8Array?Ul:n instanceof Uint8Array?A0:n instanceof Uint8ClampedArray?A0:n instanceof Int16Array?$l:n instanceof Uint16Array?Fl:n instanceof Int32Array?Hl:n instanceof Uint32Array?zl:n instanceof J?cu:n instanceof Float32Array?I0:n instanceof Float64Array?I0:null;return vd(e!=null),e}const Km={format:Ll,minFilter:x0,magFilter:x0};class Qm extends Us{constructor(){super(...arguments),this.parameters={}}load(e,t,r,i){const o=new this.Texture,a=new this.TypedArrayLoader(this.manager);a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(this.withCredentials),a.load(e,s=>{o.image.data=s instanceof J?new Uint16Array(s.buffer):s;const{width:c,height:u,depth:d,...l}=this.parameters;c!=null&&(o.image.width=c),u!=null&&(o.image.height=u),"depth"in o.image&&d!=null&&(o.image.depth=d),o.type=Xm(s),Object.assign(o,l),o.needsUpdate=!0,t(o)},r,i)}}function Yd(n,e,t){return class extends Qm{constructor(){super(...arguments),this.Texture=n,this.TypedArrayLoader=Bm(e),this.parameters={...Km,...t}}}}function Jm(n,e){return Yd(Ol,n,e)}function ef(n,e){return Yd(Nl,n,e)}function tf(n,e){return new(Jm(n,e))}function Ic(n,e){return new(ef(n,e))}const xo=Ps.clamp,ps=Ps.degToRad;function nf(n,e,t,r=0,i=1){return Ps.mapLinear(n,e,t,r,i)}function rf(n){return Math.min(Math.max(n,0),1)}function et(n){return(e,t)=>{e instanceof Uo?Object.defineProperty(e,t,{enumerable:!0,get(){var r;return((r=this.defines)==null?void 0:r[n])!=null},set(r){var i;r!==this[t]&&(r?(this.defines??(this.defines={}),this.defines[n]="1"):(i=this.defines)==null||delete i[n],this.needsUpdate=!0)}}):Object.defineProperty(e,t,{enumerable:!0,get(){return this.defines.has(n)},set(r){r!==this[t]&&(r?this.defines.set(n,"1"):this.defines.delete(n),this.setChanged())}})}}function of(n,{min:e=Number.MIN_SAFE_INTEGER,max:t=Number.MAX_SAFE_INTEGER}={}){return(r,i)=>{r instanceof Uo?Object.defineProperty(r,i,{enumerable:!0,get(){var o;const a=(o=this.defines)==null?void 0:o[n];return a!=null?parseInt(a):0},set(o){const a=this[i];o!==a&&(this.defines??(this.defines={}),this.defines[n]=xo(o,e,t).toFixed(0),this.needsUpdate=!0)}}):Object.defineProperty(r,i,{enumerable:!0,get(){const o=this.defines.get(n);return o!=null?parseInt(o):0},set(o){const a=this[i];o!==a&&(this.defines.set(n,xo(o,e,t).toFixed(0)),this.setChanged())}})}}var $i=Uint8Array,Gd=Uint16Array,af=Uint32Array,sf=new $i([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),cf=new $i([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),jd=function(n,e){for(var t=new Gd(31),r=0;r<31;++r)t[r]=e+=1<<n[r-1];for(var i=new af(t[30]),r=1;r<30;++r)for(var o=t[r];o<t[r+1];++o)i[o]=o-t[r]<<5|r;return[t,i]},Wd=jd(sf,2),uf=Wd[0],df=Wd[1];uf[28]=258,df[258]=28;jd(cf,0);var lf=new Gd(32768);for(var oe=0;oe<32768;++oe){var gn=(oe&43690)>>>1|(oe&21845)<<1;gn=(gn&52428)>>>2|(gn&13107)<<2,gn=(gn&61680)>>>4|(gn&3855)<<4,lf[oe]=((gn&65280)>>>8|(gn&255)<<8)>>>1}var ia=new $i(288);for(var oe=0;oe<144;++oe)ia[oe]=8;for(var oe=144;oe<256;++oe)ia[oe]=9;for(var oe=256;oe<280;++oe)ia[oe]=7;for(var oe=280;oe<288;++oe)ia[oe]=8;var hf=new $i(32);for(var oe=0;oe<32;++oe)hf[oe]=5;var mf=new $i(0),ff=typeof TextDecoder<"u"&&new TextDecoder,gf=0;try{ff.decode(mf,{stream:!0}),gf=1}catch{}const pf=/^[ \t]*#include +"([\w\d./]+)"/gm;function qn(n,e){return n.replace(pf,(t,r)=>{const i=r.split("/").reduce((o,a)=>typeof o!="string"&&o!=null?o[a]:void 0,e);if(typeof i!="string")throw new Error(`Could not find include for ${r}.`);return qn(i,e)})}const yf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*(?:i\s*\+\+|\+\+\s*i)\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _f(n,e,t,r){let i="";for(let o=parseInt(e);o<parseInt(t);++o)i+=r.replace(/\[\s*i\s*\]/g,"["+o+"]").replace(/UNROLLED_LOOP_INDEX/g,`${o}`);return i}function vf(n){return n.replace(yf,_f)}const wf=`// Reference: https://github.com/mrdoob/three.js/blob/r171/examples/jsm/csm/CSMShader.js

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
`,Ef=`// cSpell:words logdepthbuf

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
`,Tf=`// Reference: https://advances.realtimerendering.com/s2014/index.html#_NEXT_GENERATION_POST

float interleavedGradientNoise(const vec2 coord) {
  const vec3 magic = vec3(0.06711056, 0.00583715, 52.9829189);
  return fract(magic.z * fract(dot(coord, magic.xy)));
}
`,bf=`#if !defined(saturate)
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
`,Mf=`// Reference: https://jcgt.org/published/0003/02/01/paper.pdf

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
`,Df=`float raySphereFirstIntersection(
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
`,Rf=`vec3 screenToView(
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
`,Sf=`// Reference: https://www.gamedev.net/tutorials/programming/graphics/contact-hardening-soft-shadows-made-fast-r4906/

vec2 vogelDisk(const int index, const int sampleCount, const float phi) {
  const float goldenAngle = 2.39996322972865332;
  float r = sqrt(float(index) + 0.5) / sqrt(float(sampleCount));
  float theta = float(index) * goldenAngle + phi;
  return r * vec2(cos(theta), sin(theta));
}
`,Cf=wf,xf=Ef,Af=Tf,If=bf,Of=Mf,qd=Df,Nf=Rf,Lf=Sf,m0=`// Based on the following work and adapted to Three.js.
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
`,Sr=`uniform vec3 u_solar_irradiance;
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
`,Pf=["solarIrradiance","sunAngularRadius","bottomRadius","topRadius","rayleighScattering","mieScattering","miePhaseFunctionG","muSMin","skyRadianceToLuminance","sunRadianceToLuminance","luminousEfficiency"];function Uf(n,e){if(e!=null)for(const t of Pf){const r=e[t];r!=null&&(n[t]instanceof C?n[t].copy(r):n[t]=r)}}const ys=class{constructor(e){this.solarIrradiance=new C(1.474,1.8504,1.91198),this.sunAngularRadius=.004675,this.bottomRadius=636e4,this.topRadius=642e4,this.rayleighScattering=new C(.005802,.013558,.0331),this.mieScattering=new C(.003996,.003996,.003996),this.miePhaseFunctionG=.8,this.muSMin=Math.cos(ps(120)),this.skyRadianceToLuminance=new C(114974.916437,71305.954816,65310.548555),this.sunRadianceToLuminance=new C(98242.786222,69954.398112,66475.012354),this.luminousEfficiency=new C(.2126,.7152,.0722),this.skyRadianceToRelativeLuminance=new C,this.sunRadianceToRelativeLuminance=new C,Uf(this,e);const t=this.luminousEfficiency.dot(this.skyRadianceToLuminance);this.skyRadianceToRelativeLuminance.copy(this.skyRadianceToLuminance).divideScalar(t),this.sunRadianceToRelativeLuminance.copy(this.sunRadianceToLuminance).divideScalar(t)}};ys.DEFAULT=new ys;let oa=ys;const aa=64,sa=16,f0=32,g0=128,p0=32,y0=8,$f=y0*p0,Ff=g0,Hf=f0,ca=256,ua=64,mr=1/1e3,zf="82e00c5222d6cbc222af69abdf6d3f4fc9f63030",Aa=`https://media.githubusercontent.com/media/takram-design-engineering/three-geospatial/${zf}/packages/atmosphere/assets`,kf=new C;function da(n,e,t,r,i=!0){const o=t.projectOnSurface(n,kf);return o!=null?t.getOsculatingSphereCenter(!i||o.lengthSq()<n.lengthSq()?o:n,e,r):r.setScalar(0)}const Yf=`precision highp sampler2DArray;

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
`,Gf=`uniform mat4 inverseViewMatrix;
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
`,Vd=`vec3 getLunarRadiance(const float moonAngularRadius) {
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
`;var jf=Object.defineProperty,Mt=(n,e,t,r)=>{for(var i=void 0,o=n.length-1,a;o>=0;o--)(a=n[o])&&(i=a(e,t,i)||i);return i&&jf(e,t,i),i};const Wf=new C,qf=new C,Vf=new _d,Zf={blendFunction:k.NORMAL,octEncodedNormal:!1,reconstructNormal:!1,ellipsoid:jt.WGS84,correctAltitude:!0,correctGeometricError:!0,photometric:!0,sunIrradiance:!1,skyIrradiance:!1,transmittance:!0,inscatter:!0,irradianceScale:1,sky:!1,sun:!0,moon:!0,moonAngularRadius:.0045,lunarRadianceScale:1};class Dt extends Wh{constructor(e=new kl,t,r=oa.DEFAULT){const{blendFunction:i,normalBuffer:o=null,octEncodedNormal:a,reconstructNormal:s,irradianceTexture:c=null,scatteringTexture:u=null,transmittanceTexture:d=null,ellipsoid:l,correctAltitude:f,correctGeometricError:g,photometric:p,sunDirection:y,sunIrradiance:_,skyIrradiance:w,transmittance:T,inscatter:b,irradianceScale:S,sky:R,sun:z,moon:Y,moonDirection:V,moonAngularRadius:U,lunarRadianceScale:ee}={...Zf,...t};super("AerialPerspectiveEffect",vf(qn(Yf,{core:{depth:xf,packing:Of,math:If,transform:Nf,raySphereIntersection:qd,cascadedShadowMaps:Cf,interleavedGradientNoise:Af,vogelDisk:Lf},parameters:Sr,functions:m0,sky:Vd})),{blendFunction:i,vertexShader:qn(Gf,{parameters:Sr}),attributes:pd.DEPTH,uniforms:new Map(Object.entries({normalBuffer:new D(o),projectionMatrix:new D(new Te),viewMatrix:new D(new Te),inverseProjectionMatrix:new D(new Te),inverseViewMatrix:new D(new Te),cameraPosition:new D(new C),bottomRadius:new D(r.bottomRadius),ellipsoidRadii:new D(new C),ellipsoidCenter:new D(new C),inverseEllipsoidMatrix:new D(new Te),altitudeCorrection:new D(new C),sunDirection:new D((y==null?void 0:y.clone())??new C),irradianceScale:new D(S),idealSphereAlpha:new D(0),moonDirection:new D((V==null?void 0:V.clone())??new C),moonAngularRadius:new D(U),lunarRadianceScale:new D(ee),overlayBuffer:new D(null),shadowBuffer:new D(null),shadowMapSize:new D(new $o),shadowIntervals:new D([]),shadowMatrices:new D([]),inverseShadowMatrices:new D([]),shadowFar:new D(0),shadowTopHeight:new D(0),shadowRadius:new D(3),stbnTexture:new D(null),frame:new D(0),shadowLengthBuffer:new D(null),u_solar_irradiance:new D(r.solarIrradiance),u_sun_angular_radius:new D(r.sunAngularRadius),u_bottom_radius:new D(r.bottomRadius*mr),u_top_radius:new D(r.topRadius*mr),u_rayleigh_scattering:new D(r.rayleighScattering),u_mie_scattering:new D(r.mieScattering),u_mie_phase_function_g:new D(r.miePhaseFunctionG),u_mu_s_min:new D(r.muSMin),u_irradiance_texture:new D(c),u_scattering_texture:new D(u),u_single_mie_scattering_texture:new D(u),u_transmittance_texture:new D(d)})),defines:new Map([["TRANSMITTANCE_TEXTURE_WIDTH",ca.toFixed(0)],["TRANSMITTANCE_TEXTURE_HEIGHT",ua.toFixed(0)],["SCATTERING_TEXTURE_R_SIZE",f0.toFixed(0)],["SCATTERING_TEXTURE_MU_SIZE",g0.toFixed(0)],["SCATTERING_TEXTURE_MU_S_SIZE",p0.toFixed(0)],["SCATTERING_TEXTURE_NU_SIZE",y0.toFixed(0)],["IRRADIANCE_TEXTURE_WIDTH",aa.toFixed(0)],["IRRADIANCE_TEXTURE_HEIGHT",sa.toFixed(0)],["METER_TO_LENGTH_UNIT",mr.toFixed(7)],["SUN_SPECTRAL_RADIANCE_TO_LUMINANCE",`vec3(${r.sunRadianceToRelativeLuminance.toArray().map(G=>G.toFixed(12)).join(",")})`],["SKY_SPECTRAL_RADIANCE_TO_LUMINANCE",`vec3(${r.skyRadianceToRelativeLuminance.toArray().map(G=>G.toFixed(12)).join(",")})`]])}),this.camera=e,this.atmosphere=r,this.ellipsoidMatrix=new Te,this.overlay=null,this.shadow=null,this.shadowLength=null,this.shadowSampleCount=8,this.octEncodedNormal=a,this.reconstructNormal=s,this.ellipsoid=l,this.correctAltitude=f,this.correctGeometricError=g,this.photometric=p,this.sunIrradiance=_,this.skyIrradiance=w,this.transmittance=T,this.inscatter=b,this.sky=R,this.sun=z,this.moon=Y}get mainCamera(){return this.camera}set mainCamera(e){this.camera=e}copyCameraSettings(e){const{projectionMatrix:t,matrixWorldInverse:r,projectionMatrixInverse:i,matrixWorld:o}=e,a=this.uniforms;a.get("projectionMatrix").value.copy(t),a.get("viewMatrix").value.copy(r),a.get("inverseProjectionMatrix").value.copy(i),a.get("inverseViewMatrix").value.copy(o);const s=e.getWorldPosition(a.get("cameraPosition").value),c=a.get("inverseEllipsoidMatrix").value.copy(this.ellipsoidMatrix).invert(),u=Wf.copy(s).applyMatrix4(c).sub(a.get("ellipsoidCenter").value);try{const l=Vf.setFromECEF(u).height,f=qf.set(0,this.ellipsoid.maximumRadius,-l).applyMatrix4(t);a.get("idealSphereAlpha").value=rf(nf(f.y,41.5,13.8,0,1))}catch{return}const d=a.get("altitudeCorrection");this.correctAltitude?da(u,this.atmosphere.bottomRadius,this.ellipsoid,d.value):d.value.setScalar(0)}updateComposition(){const{uniforms:e,defines:t,overlay:r,shadow:i,shadowLength:o}=this,a=t.has("HAS_OVERLAY"),s=r!=null;s!==a&&(s?t.set("HAS_OVERLAY","1"):(t.delete("HAS_OVERLAY"),e.get("overlayBuffer").value=null),this.setChanged()),s&&(e.get("overlayBuffer").value=r.map);const c=t.has("HAS_SHADOW"),u=i!=null;if(u!==c&&(u?t.set("HAS_SHADOW","1"):(t.delete("HAS_SHADOW"),e.get("shadowBuffer").value=null),this.setChanged()),u){const f=t.get("SHADOW_CASCADE_COUNT"),g=`${i.cascadeCount}`;f!==g&&(t.set("SHADOW_CASCADE_COUNT",i.cascadeCount.toFixed(0)),this.setChanged()),e.get("shadowBuffer").value=i.map,e.get("shadowMapSize").value=i.mapSize,e.get("shadowIntervals").value=i.intervals,e.get("shadowMatrices").value=i.matrices,e.get("inverseShadowMatrices").value=i.inverseMatrices,e.get("shadowFar").value=i.far,e.get("shadowTopHeight").value=i.topHeight}const d=t.has("HAS_SHADOW_LENGTH"),l=o!=null;l!==d&&(l?t.set("HAS_SHADOW_LENGTH","1"):(t.delete("HAS_SHADOW_LENGTH"),e.get("shadowLengthBuffer").value=null),this.setChanged()),l&&(e.get("shadowLengthBuffer").value=o.map)}update(e,t,r){this.copyCameraSettings(this.camera),this.updateComposition(),++this.uniforms.get("frame").value}get normalBuffer(){return this.uniforms.get("normalBuffer").value}set normalBuffer(e){this.uniforms.get("normalBuffer").value=e}get irradianceTexture(){return this.uniforms.get("u_irradiance_texture").value}set irradianceTexture(e){this.uniforms.get("u_irradiance_texture").value=e}get scatteringTexture(){return this.uniforms.get("u_scattering_texture").value}set scatteringTexture(e){this.uniforms.get("u_scattering_texture").value=e,this.uniforms.get("u_single_mie_scattering_texture").value=e}get transmittanceTexture(){return this.uniforms.get("u_transmittance_texture").value}set transmittanceTexture(e){this.uniforms.get("u_transmittance_texture").value=e}get useHalfFloat(){return!0}set useHalfFloat(e){}get ellipsoid(){return this._ellipsoid}set ellipsoid(e){this._ellipsoid=e,this.uniforms.get("ellipsoidRadii").value.copy(e.radii)}get ellipsoidCenter(){return this.uniforms.get("ellipsoidCenter").value}get sunDirection(){return this.uniforms.get("sunDirection").value}get irradianceScale(){return this.uniforms.get("irradianceScale").value}set irradianceScale(e){this.uniforms.get("irradianceScale").value=e}get moonDirection(){return this.uniforms.get("moonDirection").value}get moonAngularRadius(){return this.uniforms.get("moonAngularRadius").value}set moonAngularRadius(e){this.uniforms.get("moonAngularRadius").value=e}get lunarRadianceScale(){return this.uniforms.get("lunarRadianceScale").value}set lunarRadianceScale(e){this.uniforms.get("lunarRadianceScale").value=e}get stbnTexture(){return this.uniforms.get("stbnTexture").value}set stbnTexture(e){this.uniforms.get("stbnTexture").value=e}get shadowRadius(){return this.uniforms.get("shadowRadius").value}set shadowRadius(e){this.uniforms.get("shadowRadius").value=e}}Mt([et("OCT_ENCODED_NORMAL")],Dt.prototype,"octEncodedNormal");Mt([et("RECONSTRUCT_NORMAL")],Dt.prototype,"reconstructNormal");Mt([et("CORRECT_GEOMETRIC_ERROR")],Dt.prototype,"correctGeometricError");Mt([et("PHOTOMETRIC")],Dt.prototype,"photometric");Mt([et("SUN_IRRADIANCE")],Dt.prototype,"sunIrradiance");Mt([et("SKY_IRRADIANCE")],Dt.prototype,"skyIrradiance");Mt([et("TRANSMITTANCE")],Dt.prototype,"transmittance");Mt([et("INSCATTER")],Dt.prototype,"inscatter");Mt([et("SKY")],Dt.prototype,"sky");Mt([et("SUN")],Dt.prototype,"sun");Mt([et("MOON")],Dt.prototype,"moon");Mt([of("SHADOW_SAMPLE_COUNT",{min:1,max:16})],Dt.prototype,"shadowSampleCount");var Bf=Object.defineProperty,Xf=(n,e,t,r)=>{for(var i=void 0,o=n.length-1,a;o>=0;o--)(a=n[o])&&(i=a(e,t,i)||i);return i&&Bf(e,t,i),i};const Kf=new C;function Qf(n,e){let t="",r="";for(let i=1;i<e;++i)t+=`layout(location = ${i}) out float renderTarget${i};
`,r+=`renderTarget${i} = 0.0;
`;return n.replace("#include <mrt_layout>",t).replace("#include <mrt_output>",r)}const _0={ellipsoid:jt.WGS84,correctAltitude:!0,photometric:!0,renderTargetCount:1};class v0 extends Yl{constructor(e,t=oa.DEFAULT){const{irradianceTexture:r=null,scatteringTexture:i=null,transmittanceTexture:o=null,useHalfFloat:a,ellipsoid:s,correctAltitude:c,photometric:u,sunDirection:d,sunAngularRadius:l,renderTargetCount:f,...g}={..._0,...e};super({toneMapped:!1,depthWrite:!1,depthTest:!1,...g,uniforms:{cameraPosition:new D(new C),ellipsoidCenter:new D(new C),inverseEllipsoidMatrix:new D(new Te),altitudeCorrection:new D(new C),sunDirection:new D((d==null?void 0:d.clone())??new C),u_solar_irradiance:new D(t.solarIrradiance),u_sun_angular_radius:new D(l??t.sunAngularRadius),u_bottom_radius:new D(t.bottomRadius*mr),u_top_radius:new D(t.topRadius*mr),u_rayleigh_scattering:new D(t.rayleighScattering),u_mie_scattering:new D(t.mieScattering),u_mie_phase_function_g:new D(t.miePhaseFunctionG),u_mu_s_min:new D(t.muSMin),u_irradiance_texture:new D(r),u_scattering_texture:new D(i),u_single_mie_scattering_texture:new D(i),u_transmittance_texture:new D(o),...g.uniforms},defines:{PI:`${Math.PI}`,TRANSMITTANCE_TEXTURE_WIDTH:ca.toFixed(0),TRANSMITTANCE_TEXTURE_HEIGHT:ua.toFixed(0),SCATTERING_TEXTURE_R_SIZE:f0.toFixed(0),SCATTERING_TEXTURE_MU_SIZE:g0.toFixed(0),SCATTERING_TEXTURE_MU_S_SIZE:p0.toFixed(0),SCATTERING_TEXTURE_NU_SIZE:y0.toFixed(0),IRRADIANCE_TEXTURE_WIDTH:aa.toFixed(0),IRRADIANCE_TEXTURE_HEIGHT:sa.toFixed(0),METER_TO_LENGTH_UNIT:mr.toFixed(7),SUN_SPECTRAL_RADIANCE_TO_LUMINANCE:`vec3(${t.sunRadianceToRelativeLuminance.toArray().map(p=>p.toFixed(12)).join(",")})`,SKY_SPECTRAL_RADIANCE_TO_LUMINANCE:`vec3(${t.skyRadianceToRelativeLuminance.toArray().map(p=>p.toFixed(12)).join(",")})`,...g.defines}}),this.atmosphere=t,this.ellipsoidMatrix=new Te,this.atmosphere=t,this.ellipsoid=s,this.correctAltitude=c,this.photometric=u,this.renderTargetCount=f}copyCameraSettings(e){const t=this.uniforms,r=e.getWorldPosition(t.cameraPosition.value),i=t.inverseEllipsoidMatrix.value.copy(this.ellipsoidMatrix).invert(),o=Kf.copy(r).applyMatrix4(i).sub(t.ellipsoidCenter.value),a=t.altitudeCorrection.value;this.correctAltitude?da(o,this.atmosphere.bottomRadius,this.ellipsoid,a):a.setScalar(0)}onBeforeCompile(e,t){e.fragmentShader=Qf(e.fragmentShader,this.renderTargetCount)}onBeforeRender(e,t,r,i,o,a){this.copyCameraSettings(r)}get irradianceTexture(){return this.uniforms.u_irradiance_texture.value}set irradianceTexture(e){this.uniforms.u_irradiance_texture.value=e}get scatteringTexture(){return this.uniforms.u_scattering_texture.value}set scatteringTexture(e){this.uniforms.u_scattering_texture.value=e,this.uniforms.u_single_mie_scattering_texture.value=e}get transmittanceTexture(){return this.uniforms.u_transmittance_texture.value}set transmittanceTexture(e){this.uniforms.u_transmittance_texture.value=e}get useHalfFloat(){return!0}set useHalfFloat(e){}get ellipsoidCenter(){return this.uniforms.ellipsoidCenter.value}get sunDirection(){return this.uniforms.sunDirection.value}get sunAngularRadius(){return this.uniforms.u_sun_angular_radius.value}set sunAngularRadius(e){this.uniforms.u_sun_angular_radius.value=e}get renderTargetCount(){return this._renderTargetCount}set renderTargetCount(e){e!==this.renderTargetCount&&(this._renderTargetCount=e,this.needsUpdate=!0)}}Xf([et("PHOTOMETRIC")],v0.prototype,"photometric");var Lt;(function(n){n.Sun="Sun",n.Moon="Moon",n.Mercury="Mercury",n.Venus="Venus",n.Earth="Earth",n.Mars="Mars",n.Jupiter="Jupiter",n.Saturn="Saturn",n.Uranus="Uranus",n.Neptune="Neptune",n.Pluto="Pluto",n.SSB="SSB",n.EMB="EMB",n.Star1="Star1",n.Star2="Star2",n.Star3="Star3",n.Star4="Star4",n.Star5="Star5",n.Star6="Star6",n.Star7="Star7",n.Star8="Star8"})(Lt||(Lt={}));Lt.Star1,Lt.Star2,Lt.Star3,Lt.Star4,Lt.Star5,Lt.Star6,Lt.Star7,Lt.Star8;var Oc;(function(n){n[n.From2000=0]="From2000",n[n.Into2000=1]="Into2000"})(Oc||(Oc={}));var Nc;(function(n){n[n.Pericenter=0]="Pericenter",n[n.Apocenter=1]="Apocenter"})(Nc||(Nc={}));var Lc;(function(n){n.Penumbral="penumbral",n.Partial="partial",n.Annular="annular",n.Total="total"})(Lc||(Lc={}));var Pc;(function(n){n[n.Invalid=0]="Invalid",n[n.Ascending=1]="Ascending",n[n.Descending=-1]="Descending"})(Pc||(Pc={}));function Zd(n){return Math.sqrt(Math.max(n,0))}function Jf(n){return Math.max(n,0)}function e2(n,e,t){const{bottomRadius:r}=n;return t<0&&e**2*(t**2-1)+r**2>=0}function t2(n,e,t){const{topRadius:r}=n,i=e**2*(t**2-1)+r**2;return Jf(-e*t+Zd(i))}function Ao(n,e){return .5/e+n*(1-1/e)}var n2="Invariant failed";function r2(n,e){if(!n)throw new Error(n2)}const i2=new C,Uc=new C,o2=new C;function to(n,e,t){const r=e*4;return t.set(n[r],n[r+1],n[r+2])}function Bd(n,e,t){const{width:r,height:i}=n.image;r2(Wm(n.image.data));let o=n.image.data;n.type===cu&&o instanceof Uint16Array&&(o=new J(o.buffer));const a=xo(e.x,0,1)*(r-1),s=xo(e.y,0,1)*(i-1),c=Math.floor(a),u=Math.floor(s),d=a-c,l=s-u,f=d,g=l,p=c%r,y=(p+1)%r,_=u%i,w=(_+1)%i,T=to(o,_*r+p,i2),b=to(o,_*r+y,Uc),S=T.lerp(b,f),R=to(o,w*r+p,Uc),z=to(o,w*r+y,o2),Y=R.lerp(z,f);return t.copy(S.lerp(Y,g))}function a2(n,e,t,r){const{topRadius:i,bottomRadius:o}=n,a=Math.sqrt(i**2-o**2),s=Zd(e**2-o**2),c=t2(n,e,t),u=i-e,d=s+a,l=(c-u)/(d-u),f=s/a;return r.set(Ao(l,ca),Ao(f,ua))}const s2=new C,Ia=new C,c2=new $o;function $c(n,e,t,r=new dr,{ellipsoid:i=jt.WGS84,correctAltitude:o=!0,photometric:a=!0}={},s=oa.DEFAULT){const c=s2.copy(e);if(o){const y=i.projectOnSurface(e,Ia);y!=null&&c.sub(i.getOsculatingSphereCenter(y,s.bottomRadius,Ia))}const u=Ia;let d=c.length(),l=c.dot(t);const{topRadius:f}=s,g=-l-Math.sqrt(l**2-d**2+f**2);if(g>0&&(d=f,l+=g),d>f)u.set(1,1,1);else{const y=l/d;if(e2(s,d,y))u.setScalar(0);else{const _=a2(s,d,y,c2);Bd(n,_,u)}}const p=u.multiply(s.solarIrradiance);return a&&p.multiply(s.sunRadianceToRelativeLuminance),r.setFromVector3(p)}var Fi=Uint8Array,Xd=Uint16Array,u2=Uint32Array,d2=new Fi([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),l2=new Fi([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Kd=function(n,e){for(var t=new Xd(31),r=0;r<31;++r)t[r]=e+=1<<n[r-1];for(var i=new u2(t[30]),r=1;r<30;++r)for(var o=t[r];o<t[r+1];++o)i[o]=o-t[r]<<5|r;return[t,i]},Qd=Kd(d2,2),h2=Qd[0],m2=Qd[1];h2[28]=258,m2[258]=28;Kd(l2,0);var f2=new Xd(32768);for(var ae=0;ae<32768;++ae){var pn=(ae&43690)>>>1|(ae&21845)<<1;pn=(pn&52428)>>>2|(pn&13107)<<2,pn=(pn&61680)>>>4|(pn&3855)<<4,f2[ae]=((pn&65280)>>>8|(pn&255)<<8)>>>1}var la=new Fi(288);for(var ae=0;ae<144;++ae)la[ae]=8;for(var ae=144;ae<256;++ae)la[ae]=9;for(var ae=256;ae<280;++ae)la[ae]=7;for(var ae=280;ae<288;++ae)la[ae]=8;var g2=new Fi(32);for(var ae=0;ae<32;++ae)g2[ae]=5;var p2=new Fi(0),y2=typeof TextDecoder<"u"&&new TextDecoder,_2=0;try{y2.decode(p2,{stream:!0}),_2=1}catch{}function v2({topRadius:n,bottomRadius:e},t,r,i){const o=(t-e)/(n-e),a=r*.5+.5;return i.set(Ao(a,aa),Ao(o,sa))}const w2=1/Math.sqrt(Math.PI),Oa=Math.sqrt(3)/(2*Math.sqrt(Math.PI)),E2=new C,Na=new C,T2=new $o,b2=new Te,M2={ellipsoid:jt.WGS84,correctAltitude:!0,photometric:!0};class D2 extends Gl{constructor(e,t=oa.DEFAULT){super(),this.atmosphere=t,this.ellipsoidCenter=new C,this.ellipsoidMatrix=new Te;const{irradianceTexture:r=null,ellipsoid:i,correctAltitude:o,photometric:a,sunDirection:s}={...M2,...e};this.irradianceTexture=r,this.ellipsoid=i,this.correctAltitude=o,this.photometric=a,this.sunDirection=(s==null?void 0:s.clone())??new C}update(){if(this.irradianceTexture==null)return;const e=b2.copy(this.ellipsoidMatrix).invert(),t=this.getWorldPosition(E2).applyMatrix4(e).sub(this.ellipsoidCenter);if(this.correctAltitude){const u=this.ellipsoid.projectOnSurface(t,Na);u!=null&&t.sub(da(u,this.atmosphere.bottomRadius,this.ellipsoid,Na))}const r=t.length(),i=t.dot(this.sunDirection)/r,o=v2(this.atmosphere,r,i,T2),a=Bd(this.irradianceTexture,o,Na);this.photometric&&a.multiply(this.atmosphere.skyRadianceToRelativeLuminance);const s=this.ellipsoid.getSurfaceNormal(t).applyMatrix4(this.ellipsoidMatrix),c=this.sh.coefficients;c[0].copy(a).multiplyScalar(w2),c[1].copy(a).multiplyScalar(Oa*s.y),c[2].copy(a).multiplyScalar(Oa*s.z),c[3].copy(a).multiplyScalar(Oa*s.x)}}const R2=`precision highp float;
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
`,S2=`precision highp float;
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
`;var C2=Object.defineProperty,Jd=(n,e,t,r)=>{for(var i=void 0,o=n.length-1,a;o>=0;o--)(a=n[o])&&(i=a(e,t,i)||i);return i&&C2(e,t,i),i};const x2={..._0,sun:!0,moon:!0,moonAngularRadius:.0045,lunarRadianceScale:1};class w0 extends v0{constructor(e){const{sun:t,moon:r,moonDirection:i,moonAngularRadius:o,lunarRadianceScale:a,groundAlbedo:s,...c}={...x2,...e};super({name:"SkyMaterial",glslVersion:uu,vertexShader:qn(S2,{parameters:Sr}),fragmentShader:qn(R2,{core:{raySphereIntersection:qd},parameters:Sr,functions:m0,sky:Vd}),...c,uniforms:{inverseProjectionMatrix:new D(new Te),inverseViewMatrix:new D(new Te),moonDirection:new D((i==null?void 0:i.clone())??new C),moonAngularRadius:new D(o),lunarRadianceScale:new D(a),groundAlbedo:new D((s==null?void 0:s.clone())??new dr(0)),shadowLengthBuffer:new D(null),...c.uniforms},defines:{PERSPECTIVE_CAMERA:"1"},depthTest:!0}),this.shadowLength=null,this.sun=t,this.moon=r}onBeforeRender(e,t,r,i,o,a){super.onBeforeRender(e,t,r,i,o,a);const{uniforms:s,defines:c}=this;s.inverseProjectionMatrix.value.copy(r.projectionMatrixInverse),s.inverseViewMatrix.value.copy(r.matrixWorld);const u=c.PERSPECTIVE_CAMERA!=null,d=r.isPerspectiveCamera===!0;d!==u&&(d?c.PERSPECTIVE_CAMERA="1":delete c.PERSPECTIVE_CAMERA,this.needsUpdate=!0);const l=this.groundAlbedo,f=c.GROUND_ALBEDO!=null,g=l.r!==0||l.g!==0||l.b!==0;g!==f&&(g?this.defines.GROUND_ALBEDO="1":delete this.defines.GROUND_ALBEDO,this.needsUpdate=!0);const p=this.shadowLength,y=c.HAS_SHADOW_LENGTH!=null,_=p!=null;_!==y&&(_?c.HAS_SHADOW_LENGTH="1":(delete c.HAS_SHADOW_LENGTH,s.shadowLengthBuffer.value=null),this.needsUpdate=!0),_&&(s.shadowLengthBuffer.value=p.map)}get moonDirection(){return this.uniforms.moonDirection.value}get moonAngularRadius(){return this.uniforms.moonAngularRadius.value}set moonAngularRadius(e){this.uniforms.moonAngularRadius.value=e}get lunarRadianceScale(){return this.uniforms.lunarRadianceScale.value}set lunarRadianceScale(e){this.uniforms.lunarRadianceScale.value=e}get groundAlbedo(){return this.uniforms.groundAlbedo.value}}Jd([et("SUN")],w0.prototype,"sun");Jd([et("MOON")],w0.prototype,"moon");const A2=`precision highp float;
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
`,I2=`precision highp float;
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
`;var O2=Object.defineProperty,N2=(n,e,t,r)=>{for(var i=void 0,o=n.length-1,a;o>=0;o--)(a=n[o])&&(i=a(e,t,i)||i);return i&&O2(e,t,i),i};const L2={..._0,pointSize:1,radianceScale:1,background:!0};class P2 extends v0{constructor(e){const{pointSize:t,radianceScale:r,background:i,...o}={...L2,...e};super({name:"StarsMaterial",glslVersion:uu,vertexShader:qn(I2,{parameters:Sr}),fragmentShader:qn(A2,{parameters:Sr,functions:m0}),...o,uniforms:{projectionMatrix:new D(new Te),modelViewMatrix:new D(new Te),viewMatrix:new D(new Te),matrixWorld:new D(new Te),cameraFar:new D(0),pointSize:new D(0),magnitudeRange:new D(new $o(-2,8)),radianceScale:new D(r),...o.uniforms},defines:{PERSPECTIVE_CAMERA:"1"}}),this.pointSize=t,this.background=i}onBeforeRender(e,t,r,i,o,a){super.onBeforeRender(e,t,r,i,o,a);const s=this.uniforms;s.projectionMatrix.value.copy(r.projectionMatrix),s.modelViewMatrix.value.copy(r.modelViewMatrix),s.viewMatrix.value.copy(r.matrixWorldInverse),s.matrixWorld.value.copy(o.matrixWorld),s.cameraFar.value=r.far,s.pointSize.value=this.pointSize*e.getPixelRatio();const c=r.isPerspectiveCamera===!0;this.defines.PERSPECTIVE_CAMERA!=null!==c&&(c?this.defines.PERSPECTIVE_CAMERA="1":delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}get magnitudeRange(){return this.uniforms.magnitudeRange.value}get radianceScale(){return this.uniforms.radianceScale.value}set radianceScale(e){this.uniforms.radianceScale.value=e}}N2([et("BACKGROUND")],P2.prototype,"background");/**
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
 */const el=173.1446326846693,or=14959787069098932e-8,pe=.017453292519943295,Fc=.26179938779914946,Io=57.29577951308232,tl=3.819718634205488,U2=365.24217,Hc=new Date("2000-01-01T12:00:00Z"),Xt=2*Math.PI,yn=3600*(180/Math.PI),ur=484813681109536e-20,$2=180*60*60,F2=2*$2,H2=7292115e-11,nl=24*3600,rl=.9972695717592592,_s=.996647180302104,z2=_s*_s,vs=6378.1366,k2=vs/or,il=81.30056,E0=.0002959122082855911,ws=2825345909524226e-22,Es=8459715185680659e-23,Ts=1292024916781969e-23,bs=1524358900784276e-23;function me(n){if(!Number.isFinite(n))throw console.trace(),`Value is not a finite number: ${n}`;return n}function nr(n){return n-Math.floor(n)}var x;(function(n){n.Sun="Sun",n.Moon="Moon",n.Mercury="Mercury",n.Venus="Venus",n.Earth="Earth",n.Mars="Mars",n.Jupiter="Jupiter",n.Saturn="Saturn",n.Uranus="Uranus",n.Neptune="Neptune",n.Pluto="Pluto",n.SSB="SSB",n.EMB="EMB",n.Star1="Star1",n.Star2="Star2",n.Star3="Star3",n.Star4="Star4",n.Star5="Star5",n.Star6="Star6",n.Star7="Star7",n.Star8="Star8"})(x||(x={}));const Y2=[x.Star1,x.Star2,x.Star3,x.Star4,x.Star5,x.Star6,x.Star7,x.Star8],G2=[{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0}];function j2(n){const e=Y2.indexOf(n);return e>=0?G2[e]:null}function T0(n){const e=j2(n);return e&&e.dist>0?e:null}var bt;(function(n){n[n.From2000=0]="From2000",n[n.Into2000=1]="Into2000"})(bt||(bt={}));const Tn={Mercury:[[[[4.40250710144,0,0],[.40989414977,1.48302034195,26087.9031415742],[.050462942,4.47785489551,52175.8062831484],[.00855346844,1.16520322459,78263.70942472259],[.00165590362,4.11969163423,104351.61256629678],[.00034561897,.77930768443,130439.51570787099],[7583476e-11,3.71348404924,156527.41884944518]],[[26087.90313685529,0,0],[.01131199811,6.21874197797,26087.9031415742],[.00292242298,3.04449355541,52175.8062831484],[.00075775081,6.08568821653,78263.70942472259],[.00019676525,2.80965111777,104351.61256629678]]],[[[.11737528961,1.98357498767,26087.9031415742],[.02388076996,5.03738959686,52175.8062831484],[.01222839532,3.14159265359,0],[.0054325181,1.79644363964,78263.70942472259],[.0012977877,4.83232503958,104351.61256629678],[.00031866927,1.58088495658,130439.51570787099],[7963301e-11,4.60972126127,156527.41884944518]],[[.00274646065,3.95008450011,26087.9031415742],[.00099737713,3.14159265359,0]]],[[[.39528271651,0,0],[.07834131818,6.19233722598,26087.9031415742],[.00795525558,2.95989690104,52175.8062831484],[.00121281764,6.01064153797,78263.70942472259],[.00021921969,2.77820093972,104351.61256629678],[4354065e-11,5.82894543774,130439.51570787099]],[[.0021734774,4.65617158665,26087.9031415742],[.00044141826,1.42385544001,52175.8062831484]]]],Venus:[[[[3.17614666774,0,0],[.01353968419,5.59313319619,10213.285546211],[.00089891645,5.30650047764,20426.571092422],[5477194e-11,4.41630661466,7860.4193924392],[3455741e-11,2.6996444782,11790.6290886588],[2372061e-11,2.99377542079,3930.2096962196],[1317168e-11,5.18668228402,26.2983197998],[1664146e-11,4.25018630147,1577.3435424478],[1438387e-11,4.15745084182,9683.5945811164],[1200521e-11,6.15357116043,30639.856638633]],[[10213.28554621638,0,0],[.00095617813,2.4640651111,10213.285546211],[7787201e-11,.6247848222,20426.571092422]]],[[[.05923638472,.26702775812,10213.285546211],[.00040107978,1.14737178112,20426.571092422],[.00032814918,3.14159265359,0]],[[.00287821243,1.88964962838,10213.285546211]]],[[[.72334820891,0,0],[.00489824182,4.02151831717,10213.285546211],[1658058e-11,4.90206728031,20426.571092422],[1378043e-11,1.12846591367,11790.6290886588],[1632096e-11,2.84548795207,7860.4193924392],[498395e-11,2.58682193892,9683.5945811164],[221985e-11,2.01346696541,19367.1891622328],[237454e-11,2.55136053886,15720.8387848784]],[[.00034551041,.89198706276,10213.285546211]]]],Earth:[[[[1.75347045673,0,0],[.03341656453,4.66925680415,6283.0758499914],[.00034894275,4.62610242189,12566.1516999828],[3417572e-11,2.82886579754,3.523118349],[3497056e-11,2.74411783405,5753.3848848968],[3135899e-11,3.62767041756,77713.7714681205],[2676218e-11,4.41808345438,7860.4193924392],[2342691e-11,6.13516214446,3930.2096962196],[1273165e-11,2.03709657878,529.6909650946],[1324294e-11,.74246341673,11506.7697697936],[901854e-11,2.04505446477,26.2983197998],[1199167e-11,1.10962946234,1577.3435424478],[857223e-11,3.50849152283,398.1490034082],[779786e-11,1.17882681962,5223.6939198022],[99025e-10,5.23268072088,5884.9268465832],[753141e-11,2.53339052847,5507.5532386674],[505267e-11,4.58292599973,18849.2275499742],[492392e-11,4.20505711826,775.522611324],[356672e-11,2.91954114478,.0673103028],[284125e-11,1.89869240932,796.2980068164],[242879e-11,.34481445893,5486.777843175],[317087e-11,5.84901948512,11790.6290886588],[271112e-11,.31486255375,10977.078804699],[206217e-11,4.80646631478,2544.3144198834],[205478e-11,1.86953770281,5573.1428014331],[202318e-11,2.45767790232,6069.7767545534],[126225e-11,1.08295459501,20.7753954924],[155516e-11,.83306084617,213.299095438]],[[6283.0758499914,0,0],[.00206058863,2.67823455808,6283.0758499914],[4303419e-11,2.63512233481,12566.1516999828]],[[8721859e-11,1.07253635559,6283.0758499914]]],[[],[[.00227777722,3.4137662053,6283.0758499914],[3805678e-11,3.37063423795,12566.1516999828]]],[[[1.00013988784,0,0],[.01670699632,3.09846350258,6283.0758499914],[.00013956024,3.05524609456,12566.1516999828],[308372e-10,5.19846674381,77713.7714681205],[1628463e-11,1.17387558054,5753.3848848968],[1575572e-11,2.84685214877,7860.4193924392],[924799e-11,5.45292236722,11506.7697697936],[542439e-11,4.56409151453,3930.2096962196],[47211e-10,3.66100022149,5884.9268465832],[85831e-11,1.27079125277,161000.6857376741],[57056e-11,2.01374292245,83996.84731811189],[55736e-11,5.2415979917,71430.69561812909],[174844e-11,3.01193636733,18849.2275499742],[243181e-11,4.2734953079,11790.6290886588]],[[.00103018607,1.10748968172,6283.0758499914],[1721238e-11,1.06442300386,12566.1516999828]],[[4359385e-11,5.78455133808,6283.0758499914]]]],Mars:[[[[6.20347711581,0,0],[.18656368093,5.0503710027,3340.6124266998],[.01108216816,5.40099836344,6681.2248533996],[.00091798406,5.75478744667,10021.8372800994],[.00027744987,5.97049513147,3.523118349],[.00010610235,2.93958560338,2281.2304965106],[.00012315897,.84956094002,2810.9214616052],[8926784e-11,4.15697846427,.0172536522],[8715691e-11,6.11005153139,13362.4497067992],[6797556e-11,.36462229657,398.1490034082],[7774872e-11,3.33968761376,5621.8429232104],[3575078e-11,1.6618650571,2544.3144198834],[4161108e-11,.22814971327,2942.4634232916],[3075252e-11,.85696614132,191.4482661116],[2628117e-11,.64806124465,3337.0893083508],[2937546e-11,6.07893711402,.0673103028],[2389414e-11,5.03896442664,796.2980068164],[2579844e-11,.02996736156,3344.1355450488],[1528141e-11,1.14979301996,6151.533888305],[1798806e-11,.65634057445,529.6909650946],[1264357e-11,3.62275122593,5092.1519581158],[1286228e-11,3.06796065034,2146.1654164752],[1546404e-11,2.91579701718,1751.539531416],[1024902e-11,3.69334099279,8962.4553499102],[891566e-11,.18293837498,16703.062133499],[858759e-11,2.4009381194,2914.0142358238],[832715e-11,2.46418619474,3340.5951730476],[83272e-10,4.49495782139,3340.629680352],[712902e-11,3.66335473479,1059.3819301892],[748723e-11,3.82248614017,155.4203994342],[723861e-11,.67497311481,3738.761430108],[635548e-11,2.92182225127,8432.7643848156],[655162e-11,.48864064125,3127.3133312618],[550474e-11,3.81001042328,.9803210682],[55275e-10,4.47479317037,1748.016413067],[425966e-11,.55364317304,6283.0758499914],[415131e-11,.49662285038,213.299095438],[472167e-11,3.62547124025,1194.4470102246],[306551e-11,.38052848348,6684.7479717486],[312141e-11,.99853944405,6677.7017350506],[293198e-11,4.22131299634,20.7753954924],[302375e-11,4.48618007156,3532.0606928114],[274027e-11,.54222167059,3340.545116397],[281079e-11,5.88163521788,1349.8674096588],[231183e-11,1.28242156993,3870.3033917944],[283602e-11,5.7688543494,3149.1641605882],[236117e-11,5.75503217933,3333.498879699],[274033e-11,.13372524985,3340.6797370026],[299395e-11,2.78323740866,6254.6266625236]],[[3340.61242700512,0,0],[.01457554523,3.60433733236,3340.6124266998],[.00168414711,3.92318567804,6681.2248533996],[.00020622975,4.26108844583,10021.8372800994],[3452392e-11,4.7321039319,3.523118349],[2586332e-11,4.60670058555,13362.4497067992],[841535e-11,4.45864030426,2281.2304965106]],[[.00058152577,2.04961712429,3340.6124266998],[.00013459579,2.45738706163,6681.2248533996]]],[[[.03197134986,3.76832042431,3340.6124266998],[.00298033234,4.10616996305,6681.2248533996],[.00289104742,0,0],[.00031365539,4.4465105309,10021.8372800994],[34841e-9,4.7881254926,13362.4497067992]],[[.00217310991,6.04472194776,3340.6124266998],[.00020976948,3.14159265359,0],[.00012834709,1.60810667915,6681.2248533996]]],[[[1.53033488271,0,0],[.1418495316,3.47971283528,3340.6124266998],[.00660776362,3.81783443019,6681.2248533996],[.00046179117,4.15595316782,10021.8372800994],[8109733e-11,5.55958416318,2810.9214616052],[7485318e-11,1.77239078402,5621.8429232104],[5523191e-11,1.3643630377,2281.2304965106],[382516e-10,4.49407183687,13362.4497067992],[2306537e-11,.09081579001,2544.3144198834],[1999396e-11,5.36059617709,3337.0893083508],[2484394e-11,4.9254563992,2942.4634232916],[1960195e-11,4.74249437639,3344.1355450488],[1167119e-11,2.11260868341,5092.1519581158],[1102816e-11,5.00908403998,398.1490034082],[899066e-11,4.40791133207,529.6909650946],[992252e-11,5.83861961952,6151.533888305],[807354e-11,2.10217065501,1059.3819301892],[797915e-11,3.44839203899,796.2980068164],[740975e-11,1.49906336885,2146.1654164752]],[[.01107433345,2.03250524857,3340.6124266998],[.00103175887,2.37071847807,6681.2248533996],[128772e-9,0,0],[.0001081588,2.70888095665,10021.8372800994]],[[.00044242249,.47930604954,3340.6124266998],[8138042e-11,.86998389204,6681.2248533996]]]],Jupiter:[[[[.59954691494,0,0],[.09695898719,5.06191793158,529.6909650946],[.00573610142,1.44406205629,7.1135470008],[.00306389205,5.41734730184,1059.3819301892],[.00097178296,4.14264726552,632.7837393132],[.00072903078,3.64042916389,522.5774180938],[.00064263975,3.41145165351,103.0927742186],[.00039806064,2.29376740788,419.4846438752],[.00038857767,1.27231755835,316.3918696566],[.00027964629,1.7845459182,536.8045120954],[.0001358973,5.7748104079,1589.0728952838],[8246349e-11,3.5822792584,206.1855484372],[8768704e-11,3.63000308199,949.1756089698],[7368042e-11,5.0810119427,735.8765135318],[626315e-10,.02497628807,213.299095438],[6114062e-11,4.51319998626,1162.4747044078],[4905396e-11,1.32084470588,110.2063212194],[5305285e-11,1.30671216791,14.2270940016],[5305441e-11,4.18625634012,1052.2683831884],[4647248e-11,4.69958103684,3.9321532631],[3045023e-11,4.31676431084,426.598190876],[2609999e-11,1.56667394063,846.0828347512],[2028191e-11,1.06376530715,3.1813937377],[1764763e-11,2.14148655117,1066.49547719],[1722972e-11,3.88036268267,1265.5674786264],[1920945e-11,.97168196472,639.897286314],[1633223e-11,3.58201833555,515.463871093],[1431999e-11,4.29685556046,625.6701923124],[973272e-11,4.09764549134,95.9792272178]],[[529.69096508814,0,0],[.00489503243,4.2208293947,529.6909650946],[.00228917222,6.02646855621,7.1135470008],[.00030099479,4.54540782858,1059.3819301892],[.0002072092,5.45943156902,522.5774180938],[.00012103653,.16994816098,536.8045120954],[6067987e-11,4.42422292017,103.0927742186],[5433968e-11,3.98480737746,419.4846438752],[4237744e-11,5.89008707199,14.2270940016]],[[.00047233601,4.32148536482,7.1135470008],[.00030649436,2.929777887,529.6909650946],[.00014837605,3.14159265359,0]]],[[[.02268615702,3.55852606721,529.6909650946],[.00109971634,3.90809347197,1059.3819301892],[.00110090358,0,0],[8101428e-11,3.60509572885,522.5774180938],[6043996e-11,4.25883108339,1589.0728952838],[6437782e-11,.30627119215,536.8045120954]],[[.00078203446,1.52377859742,529.6909650946]]],[[[5.20887429326,0,0],[.25209327119,3.49108639871,529.6909650946],[.00610599976,3.84115365948,1059.3819301892],[.00282029458,2.57419881293,632.7837393132],[.00187647346,2.07590383214,522.5774180938],[.00086792905,.71001145545,419.4846438752],[.00072062974,.21465724607,536.8045120954],[.00065517248,5.9799588479,316.3918696566],[.00029134542,1.67759379655,103.0927742186],[.00030135335,2.16132003734,949.1756089698],[.00023453271,3.54023522184,735.8765135318],[.00022283743,4.19362594399,1589.0728952838],[.00023947298,.2745803748,7.1135470008],[.00013032614,2.96042965363,1162.4747044078],[970336e-10,1.90669633585,206.1855484372],[.00012749023,2.71550286592,1052.2683831884],[7057931e-11,2.18184839926,1265.5674786264],[6137703e-11,6.26418240033,846.0828347512],[2616976e-11,2.00994012876,1581.959348283]],[[.0127180152,2.64937512894,529.6909650946],[.00061661816,3.00076460387,1059.3819301892],[.00053443713,3.89717383175,522.5774180938],[.00031185171,4.88276958012,536.8045120954],[.00041390269,0,0]]]],Saturn:[[[[.87401354025,0,0],[.11107659762,3.96205090159,213.299095438],[.01414150957,4.58581516874,7.1135470008],[.00398379389,.52112032699,206.1855484372],[.00350769243,3.30329907896,426.598190876],[.00206816305,.24658372002,103.0927742186],[792713e-9,3.84007056878,220.4126424388],[.00023990355,4.66976924553,110.2063212194],[.00016573588,.43719228296,419.4846438752],[.00014906995,5.76903183869,316.3918696566],[.0001582029,.93809155235,632.7837393132],[.00014609559,1.56518472,3.9321532631],[.00013160301,4.44891291899,14.2270940016],[.00015053543,2.71669915667,639.897286314],[.00013005299,5.98119023644,11.0457002639],[.00010725067,3.12939523827,202.2533951741],[5863206e-11,.23656938524,529.6909650946],[5227757e-11,4.20783365759,3.1813937377],[6126317e-11,1.76328667907,277.0349937414],[5019687e-11,3.17787728405,433.7117378768],[459255e-10,.61977744975,199.0720014364],[4005867e-11,2.24479718502,63.7358983034],[2953796e-11,.98280366998,95.9792272178],[387367e-10,3.22283226966,138.5174968707],[2461186e-11,2.03163875071,735.8765135318],[3269484e-11,.77492638211,949.1756089698],[1758145e-11,3.2658010994,522.5774180938],[1640172e-11,5.5050445305,846.0828347512],[1391327e-11,4.02333150505,323.5054166574],[1580648e-11,4.37265307169,309.2783226558],[1123498e-11,2.83726798446,415.5524906121],[1017275e-11,3.71700135395,227.5261894396],[848642e-11,3.1915017083,209.3669421749]],[[213.2990952169,0,0],[.01297370862,1.82834923978,213.299095438],[.00564345393,2.88499717272,7.1135470008],[.00093734369,1.06311793502,426.598190876],[.00107674962,2.27769131009,206.1855484372],[.00040244455,2.04108104671,220.4126424388],[.00019941774,1.2795439047,103.0927742186],[.00010511678,2.7488034213,14.2270940016],[6416106e-11,.38238295041,639.897286314],[4848994e-11,2.43037610229,419.4846438752],[4056892e-11,2.92133209468,110.2063212194],[3768635e-11,3.6496533078,3.9321532631]],[[.0011644133,1.17988132879,7.1135470008],[.00091841837,.0732519584,213.299095438],[.00036661728,0,0],[.00015274496,4.06493179167,206.1855484372]]],[[[.04330678039,3.60284428399,213.299095438],[.00240348302,2.85238489373,426.598190876],[.00084745939,0,0],[.00030863357,3.48441504555,220.4126424388],[.00034116062,.57297307557,206.1855484372],[.0001473407,2.11846596715,639.897286314],[9916667e-11,5.79003188904,419.4846438752],[6993564e-11,4.7360468972,7.1135470008],[4807588e-11,5.43305312061,316.3918696566]],[[.00198927992,4.93901017903,213.299095438],[.00036947916,3.14159265359,0],[.00017966989,.5197943111,426.598190876]]],[[[9.55758135486,0,0],[.52921382865,2.39226219573,213.299095438],[.01873679867,5.2354960466,206.1855484372],[.01464663929,1.64763042902,426.598190876],[.00821891141,5.93520042303,316.3918696566],[.00547506923,5.0153261898,103.0927742186],[.0037168465,2.27114821115,220.4126424388],[.00361778765,3.13904301847,7.1135470008],[.00140617506,5.70406606781,632.7837393132],[.00108974848,3.29313390175,110.2063212194],[.00069006962,5.94099540992,419.4846438752],[.00061053367,.94037691801,639.897286314],[.00048913294,1.55733638681,202.2533951741],[.00034143772,.19519102597,277.0349937414],[.00032401773,5.47084567016,949.1756089698],[.00020936596,.46349251129,735.8765135318],[9796004e-11,5.20477537945,1265.5674786264],[.00011993338,5.98050967385,846.0828347512],[208393e-9,1.52102476129,433.7117378768],[.00015298404,3.0594381494,529.6909650946],[6465823e-11,.17732249942,1052.2683831884],[.00011380257,1.7310542704,522.5774180938],[3419618e-11,4.94550542171,1581.959348283]],[[.0618298134,.2584351148,213.299095438],[.00506577242,.71114625261,206.1855484372],[.00341394029,5.79635741658,426.598190876],[.00188491195,.47215589652,220.4126424388],[.00186261486,3.14159265359,0],[.00143891146,1.40744822888,7.1135470008]],[[.00436902572,4.78671677509,213.299095438]]]],Uranus:[[[[5.48129294297,0,0],[.09260408234,.89106421507,74.7815985673],[.01504247898,3.6271926092,1.4844727083],[.00365981674,1.89962179044,73.297125859],[.00272328168,3.35823706307,149.5631971346],[.00070328461,5.39254450063,63.7358983034],[.00068892678,6.09292483287,76.2660712756],[.00061998615,2.26952066061,2.9689454166],[.00061950719,2.85098872691,11.0457002639],[.0002646877,3.14152083966,71.8126531507],[.00025710476,6.11379840493,454.9093665273],[.0002107885,4.36059339067,148.0787244263],[.00017818647,1.74436930289,36.6485629295],[.00014613507,4.73732166022,3.9321532631],[.00011162509,5.8268179635,224.3447957019],[.0001099791,.48865004018,138.5174968707],[9527478e-11,2.95516862826,35.1640902212],[7545601e-11,5.236265824,109.9456887885],[4220241e-11,3.23328220918,70.8494453042],[40519e-9,2.277550173,151.0476698429],[3354596e-11,1.0654900738,4.4534181249],[2926718e-11,4.62903718891,9.5612275556],[349034e-10,5.48306144511,146.594251718],[3144069e-11,4.75199570434,77.7505439839],[2922333e-11,5.35235361027,85.8272988312],[2272788e-11,4.36600400036,70.3281804424],[2051219e-11,1.51773566586,.1118745846],[2148602e-11,.60745949945,38.1330356378],[1991643e-11,4.92437588682,277.0349937414],[1376226e-11,2.04283539351,65.2203710117],[1666902e-11,3.62744066769,380.12776796],[1284107e-11,3.11347961505,202.2533951741],[1150429e-11,.93343589092,3.1813937377],[1533221e-11,2.58594681212,52.6901980395],[1281604e-11,.54271272721,222.8603229936],[1372139e-11,4.19641530878,111.4301614968],[1221029e-11,.1990065003,108.4612160802],[946181e-11,1.19253165736,127.4717966068],[1150989e-11,4.17898916639,33.6796175129]],[[74.7815986091,0,0],[.00154332863,5.24158770553,74.7815985673],[.00024456474,1.71260334156,1.4844727083],[9258442e-11,.4282973235,11.0457002639],[8265977e-11,1.50218091379,63.7358983034],[915016e-10,1.41213765216,149.5631971346]]],[[[.01346277648,2.61877810547,74.7815985673],[623414e-9,5.08111189648,149.5631971346],[.00061601196,3.14159265359,0],[9963722e-11,1.61603805646,76.2660712756],[992616e-10,.57630380333,73.297125859]],[[.00034101978,.01321929936,74.7815985673]]],[[[19.21264847206,0,0],[.88784984413,5.60377527014,74.7815985673],[.03440836062,.32836099706,73.297125859],[.0205565386,1.7829515933,149.5631971346],[.0064932241,4.52247285911,76.2660712756],[.00602247865,3.86003823674,63.7358983034],[.00496404167,1.40139935333,454.9093665273],[.00338525369,1.58002770318,138.5174968707],[.00243509114,1.57086606044,71.8126531507],[.00190522303,1.99809394714,1.4844727083],[.00161858838,2.79137786799,148.0787244263],[.00143706183,1.38368544947,11.0457002639],[.00093192405,.17437220467,36.6485629295],[.00071424548,4.24509236074,224.3447957019],[.00089806014,3.66105364565,109.9456887885],[.00039009723,1.66971401684,70.8494453042],[.00046677296,1.39976401694,35.1640902212],[.00039025624,3.36234773834,277.0349937414],[.00036755274,3.88649278513,146.594251718],[.00030348723,.70100838798,151.0476698429],[.00029156413,3.180563367,77.7505439839],[.00022637073,.72518687029,529.6909650946],[.00011959076,1.7504339214,984.6003316219],[.00025620756,5.25656086672,380.12776796]],[[.01479896629,3.67205697578,74.7815985673]]]],Neptune:[[[[5.31188633046,0,0],[.0179847553,2.9010127389,38.1330356378],[.01019727652,.48580922867,1.4844727083],[.00124531845,4.83008090676,36.6485629295],[.00042064466,5.41054993053,2.9689454166],[.00037714584,6.09221808686,35.1640902212],[.00033784738,1.24488874087,76.2660712756],[.00016482741,7727998e-11,491.5579294568],[9198584e-11,4.93747051954,39.6175083461],[899425e-10,.27462171806,175.1660598002]],[[38.13303563957,0,0],[.00016604172,4.86323329249,1.4844727083],[.00015744045,2.27887427527,38.1330356378]]],[[[.03088622933,1.44104372644,38.1330356378],[.00027780087,5.91271884599,76.2660712756],[.00027623609,0,0],[.00015355489,2.52123799551,36.6485629295],[.00015448133,3.50877079215,39.6175083461]]],[[[30.07013205828,0,0],[.27062259632,1.32999459377,38.1330356378],[.01691764014,3.25186135653,36.6485629295],[.00807830553,5.18592878704,1.4844727083],[.0053776051,4.52113935896,35.1640902212],[.00495725141,1.5710564165,491.5579294568],[.00274571975,1.84552258866,175.1660598002],[.0001201232,1.92059384991,1021.2488945514],[.00121801746,5.79754470298,76.2660712756],[.00100896068,.3770272493,73.297125859],[.00135134092,3.37220609835,39.6175083461],[7571796e-11,1.07149207335,388.4651552382]]]]};function W2(n){var e,t,r,i,o,a,s;const c=2e3+(n-14)/U2;return c<-500?(e=(c-1820)/100,-20+32*e*e):c<500?(e=c/100,t=e*e,r=e*t,i=t*t,o=t*r,a=r*r,10583.6-1014.41*e+33.78311*t-5.952053*r-.1798452*i+.022174192*o+.0090316521*a):c<1600?(e=(c-1e3)/100,t=e*e,r=e*t,i=t*t,o=t*r,a=r*r,1574.2-556.01*e+71.23472*t+.319781*r-.8503463*i-.005050998*o+.0083572073*a):c<1700?(e=c-1600,t=e*e,r=e*t,120-.9808*e-.01532*t+r/7129):c<1800?(e=c-1700,t=e*e,r=e*t,i=t*t,8.83+.1603*e-.0059285*t+13336e-8*r-i/1174e3):c<1860?(e=c-1800,t=e*e,r=e*t,i=t*t,o=t*r,a=r*r,s=r*i,13.72-.332447*e+.0068612*t+.0041116*r-37436e-8*i+121272e-10*o-1699e-10*a+875e-12*s):c<1900?(e=c-1860,t=e*e,r=e*t,i=t*t,o=t*r,7.62+.5737*e-.251754*t+.01680668*r-.0004473624*i+o/233174):c<1920?(e=c-1900,t=e*e,r=e*t,i=t*t,-2.79+1.494119*e-.0598939*t+.0061966*r-197e-6*i):c<1941?(e=c-1920,t=e*e,r=e*t,21.2+.84493*e-.0761*t+.0020936*r):c<1961?(e=c-1950,t=e*e,r=e*t,29.07+.407*e-t/233+r/2547):c<1986?(e=c-1975,t=e*e,r=e*t,45.45+1.067*e-t/260-r/718):c<2005?(e=c-2e3,t=e*e,r=e*t,i=t*t,o=t*r,63.86+.3345*e-.060374*t+.0017275*r+651814e-9*i+2373599e-11*o):c<2050?(e=c-2e3,62.92+.32217*e+.005589*e*e):c<2150?(e=(c-1820)/100,-20+32*e*e-.5628*(2150-c)):(e=(c-1820)/100,-20+32*e*e)}let q2=W2;function zc(n){return n+q2(n)/86400}class un{constructor(e){if(e instanceof un){this.date=e.date,this.ut=e.ut,this.tt=e.tt;return}const t=1e3*3600*24;if(e instanceof Date&&Number.isFinite(e.getTime())){this.date=e,this.ut=(e.getTime()-Hc.getTime())/t,this.tt=zc(this.ut);return}if(Number.isFinite(e)){this.date=new Date(Hc.getTime()+e*t),this.ut=e,this.tt=zc(this.ut);return}throw"Argument must be a Date object, an AstroTime object, or a numeric UTC Julian date."}static FromTerrestrialTime(e){let t=new un(e);for(;;){const r=e-t.tt;if(Math.abs(r)<1e-12)return t;t=t.AddDays(r)}}toString(){return this.date.toISOString()}AddDays(e){return new un(this.ut+e)}}function V2(n,e,t){return new un(n.ut+t*(e.ut-n.ut))}function tt(n){return n instanceof un?n:new un(n)}function Z2(n){function e(f){return f%F2*ur}const t=n.tt/36525,r=e(128710479305e-5+t*1295965810481e-4),i=e(335779.526232+t*17395272628478e-4),o=e(107226070369e-5+t*1602961601209e-3),a=e(450160.398036-t*69628905431e-4);let s=Math.sin(a),c=Math.cos(a),u=(-172064161-174666*t)*s+33386*c,d=(92052331+9086*t)*c+15377*s,l=2*(i-o+a);return s=Math.sin(l),c=Math.cos(l),u+=(-13170906-1675*t)*s-13696*c,d+=(5730336-3015*t)*c-4587*s,l=2*(i+a),s=Math.sin(l),c=Math.cos(l),u+=(-2276413-234*t)*s+2796*c,d+=(978459-485*t)*c+1374*s,l=2*a,s=Math.sin(l),c=Math.cos(l),u+=(2074554+207*t)*s-698*c,d+=(-897492+470*t)*c-291*s,s=Math.sin(r),c=Math.cos(r),u+=(1475877-3633*t)*s+11817*c,d+=(73871-184*t)*c-1924*s,{dpsi:-135e-6+u*1e-7,deps:388e-6+d*1e-7}}function ol(n){var e=n.tt/36525,t=((((-434e-10*e-576e-9)*e+.0020034)*e-1831e-7)*e-46.836769)*e+84381.406;return t/3600}var no;function al(n){if(!no||Math.abs(no.tt-n.tt)>1e-6){const e=Z2(n),t=ol(n),r=t+e.deps/3600;no={tt:n.tt,dpsi:e.dpsi,deps:e.deps,ee:e.dpsi*Math.cos(t*pe)/15,mobl:t,tobl:r}}return no}function B2(n,e){const t=n*pe,r=Math.cos(t),i=Math.sin(t);return[e[0],e[1]*r-e[2]*i,e[1]*i+e[2]*r]}function X2(n,e){return B2(ol(n),e)}function K2(n){const e=n.tt/36525;function t(q,te){const ge=[];let _e;for(_e=0;_e<=te-q;++_e)ge.push(0);return{min:q,array:ge}}function r(q,te,ge,_e){const De=[];for(let fn=0;fn<=te-q;++fn)De.push(t(ge,_e));return{min:q,array:De}}function i(q,te,ge){const _e=q.array[te-q.min];return _e.array[ge-_e.min]}function o(q,te,ge,_e){const De=q.array[te-q.min];De.array[ge-De.min]=_e}let a,s,c,u,d,l,f,g,p,y,_,w,T,b,S,R,z,Y,V,U,ee,G,H,fe=r(-6,6,1,4),ye=r(-6,6,1,4);function Ae(q,te){return i(fe,q,te)}function ut(q,te){return i(ye,q,te)}function dt(q,te,ge){return o(fe,q,te,ge)}function mn(q,te,ge){return o(ye,q,te,ge)}function Kn(q,te,ge,_e,De){De(q*ge-te*_e,te*ge+q*_e)}function Q(q){return Math.sin(Xt*q)}f=e*e,p=0,H=0,_=0,w=3422.7;var At=Q(.19833+.05611*e),ga=Q(.27869+.04508*e),pa=Q(.16827-.36903*e),ya=Q(.34734-5.37261*e),_a=Q(.10498-5.37899*e),zi=Q(.42681-.41855*e),Dl=Q(.14943-5.37511*e);for(Y=.84*At+.31*ga+14.27*pa+7.26*ya+.28*_a+.24*zi,V=2.94*At+.31*ga+14.27*pa+9.34*ya+1.12*_a+.83*zi,U=-6.4*At-1.89*zi,ee=.21*At+.31*ga+14.27*pa-88.7*ya-15.3*_a+.24*zi-1.86*Dl,G=Y-U,g=-3332e-9*Q(.59734-5.37261*e)-539e-9*Q(.35498-5.37899*e)-64e-9*Q(.39943-5.37511*e),T=Xt*nr(.60643382+1336.85522467*e-313e-8*f)+Y/yn,b=Xt*nr(.37489701+1325.55240982*e+2565e-8*f)+V/yn,S=Xt*nr(.99312619+99.99735956*e-44e-8*f)+U/yn,R=Xt*nr(.25909118+1342.2278298*e-892e-8*f)+ee/yn,z=Xt*nr(.82736186+1236.85308708*e-397e-8*f)+G/yn,d=1;d<=4;++d){switch(d){case 1:c=b,s=4,u=1.000002208;break;case 2:c=S,s=3,u=.997504612-.002495388*e;break;case 3:c=R,s=4,u=1.000002708+139.978*g;break;case 4:c=z,s=6,u=1;break;default:throw`Internal error: I = ${d}`}for(dt(0,d,1),dt(1,d,Math.cos(c)*u),mn(0,d,0),mn(1,d,Math.sin(c)*u),l=2;l<=s;++l)Kn(Ae(l-1,d),ut(l-1,d),Ae(1,d),ut(1,d),(q,te)=>(dt(l,d,q),mn(l,d,te)));for(l=1;l<=s;++l)dt(-l,d,Ae(l,d)),mn(-l,d,-ut(l,d))}function R0(q,te,ge,_e){for(var De={x:1,y:0},fn=[0,q,te,ge,_e],Vt=1;Vt<=4;++Vt)fn[Vt]!==0&&Kn(De.x,De.y,Ae(fn[Vt],Vt),ut(fn[Vt],Vt),(va,Qn)=>(De.x=va,De.y=Qn));return De}function E(q,te,ge,_e,De,fn,Vt,va){var Qn=R0(De,fn,Vt,va);p+=q*Qn.y,H+=te*Qn.y,_+=ge*Qn.x,w+=_e*Qn.x}E(13.902,14.06,-.001,.2607,0,0,0,4),E(.403,-4.01,.394,.0023,0,0,0,3),E(2369.912,2373.36,.601,28.2333,0,0,0,2),E(-125.154,-112.79,-.725,-.9781,0,0,0,1),E(1.979,6.98,-.445,.0433,1,0,0,4),E(191.953,192.72,.029,3.0861,1,0,0,2),E(-8.466,-13.51,.455,-.1093,1,0,0,1),E(22639.5,22609.07,.079,186.5398,1,0,0,0),E(18.609,3.59,-.094,.0118,1,0,0,-1),E(-4586.465,-4578.13,-.077,34.3117,1,0,0,-2),E(3.215,5.44,.192,-.0386,1,0,0,-3),E(-38.428,-38.64,.001,.6008,1,0,0,-4),E(-.393,-1.43,-.092,.0086,1,0,0,-6),E(-.289,-1.59,.123,-.0053,0,1,0,4),E(-24.42,-25.1,.04,-.3,0,1,0,2),E(18.023,17.93,.007,.1494,0,1,0,1),E(-668.146,-126.98,-1.302,-.3997,0,1,0,0),E(.56,.32,-.001,-.0037,0,1,0,-1),E(-165.145,-165.06,.054,1.9178,0,1,0,-2),E(-1.877,-6.46,-.416,.0339,0,1,0,-4),E(.213,1.02,-.074,.0054,2,0,0,4),E(14.387,14.78,-.017,.2833,2,0,0,2),E(-.586,-1.2,.054,-.01,2,0,0,1),E(769.016,767.96,.107,10.1657,2,0,0,0),E(1.75,2.01,-.018,.0155,2,0,0,-1),E(-211.656,-152.53,5.679,-.3039,2,0,0,-2),E(1.225,.91,-.03,-.0088,2,0,0,-3),E(-30.773,-34.07,-.308,.3722,2,0,0,-4),E(-.57,-1.4,-.074,.0109,2,0,0,-6),E(-2.921,-11.75,.787,-.0484,1,1,0,2),E(1.267,1.52,-.022,.0164,1,1,0,1),E(-109.673,-115.18,.461,-.949,1,1,0,0),E(-205.962,-182.36,2.056,1.4437,1,1,0,-2),E(.233,.36,.012,-.0025,1,1,0,-3),E(-4.391,-9.66,-.471,.0673,1,1,0,-4),E(.283,1.53,-.111,.006,1,-1,0,4),E(14.577,31.7,-1.54,.2302,1,-1,0,2),E(147.687,138.76,.679,1.1528,1,-1,0,0),E(-1.089,.55,.021,0,1,-1,0,-1),E(28.475,23.59,-.443,-.2257,1,-1,0,-2),E(-.276,-.38,-.006,-.0036,1,-1,0,-3),E(.636,2.27,.146,-.0102,1,-1,0,-4),E(-.189,-1.68,.131,-.0028,0,2,0,2),E(-7.486,-.66,-.037,-.0086,0,2,0,0),E(-8.096,-16.35,-.74,.0918,0,2,0,-2),E(-5.741,-.04,0,-9e-4,0,0,2,2),E(.255,0,0,0,0,0,2,1),E(-411.608,-.2,0,-.0124,0,0,2,0),E(.584,.84,0,.0071,0,0,2,-1),E(-55.173,-52.14,0,-.1052,0,0,2,-2),E(.254,.25,0,-.0017,0,0,2,-3),E(.025,-1.67,0,.0031,0,0,2,-4),E(1.06,2.96,-.166,.0243,3,0,0,2),E(36.124,50.64,-1.3,.6215,3,0,0,0),E(-13.193,-16.4,.258,-.1187,3,0,0,-2),E(-1.187,-.74,.042,.0074,3,0,0,-4),E(-.293,-.31,-.002,.0046,3,0,0,-6),E(-.29,-1.45,.116,-.0051,2,1,0,2),E(-7.649,-10.56,.259,-.1038,2,1,0,0),E(-8.627,-7.59,.078,-.0192,2,1,0,-2),E(-2.74,-2.54,.022,.0324,2,1,0,-4),E(1.181,3.32,-.212,.0213,2,-1,0,2),E(9.703,11.67,-.151,.1268,2,-1,0,0),E(-.352,-.37,.001,-.0028,2,-1,0,-1),E(-2.494,-1.17,-.003,-.0017,2,-1,0,-2),E(.36,.2,-.012,-.0043,2,-1,0,-4),E(-1.167,-1.25,.008,-.0106,1,2,0,0),E(-7.412,-6.12,.117,.0484,1,2,0,-2),E(-.311,-.65,-.032,.0044,1,2,0,-4),E(.757,1.82,-.105,.0112,1,-2,0,2),E(2.58,2.32,.027,.0196,1,-2,0,0),E(2.533,2.4,-.014,-.0212,1,-2,0,-2),E(-.344,-.57,-.025,.0036,0,3,0,-2),E(-.992,-.02,0,0,1,0,2,2),E(-45.099,-.02,0,-.001,1,0,2,0),E(-.179,-9.52,0,-.0833,1,0,2,-2),E(-.301,-.33,0,.0014,1,0,2,-4),E(-6.382,-3.37,0,-.0481,1,0,-2,2),E(39.528,85.13,0,-.7136,1,0,-2,0),E(9.366,.71,0,-.0112,1,0,-2,-2),E(.202,.02,0,0,1,0,-2,-4),E(.415,.1,0,.0013,0,1,2,0),E(-2.152,-2.26,0,-.0066,0,1,2,-2),E(-1.44,-1.3,0,.0014,0,1,-2,2),E(.384,-.04,0,0,0,1,-2,-2),E(1.938,3.6,-.145,.0401,4,0,0,0),E(-.952,-1.58,.052,-.013,4,0,0,-2),E(-.551,-.94,.032,-.0097,3,1,0,0),E(-.482,-.57,.005,-.0045,3,1,0,-2),E(.681,.96,-.026,.0115,3,-1,0,0),E(-.297,-.27,.002,-9e-4,2,2,0,-2),E(.254,.21,-.003,0,2,-2,0,-2),E(-.25,-.22,.004,.0014,1,3,0,-2),E(-3.996,0,0,4e-4,2,0,2,0),E(.557,-.75,0,-.009,2,0,2,-2),E(-.459,-.38,0,-.0053,2,0,-2,2),E(-1.298,.74,0,4e-4,2,0,-2,0),E(.538,1.14,0,-.0141,2,0,-2,-2),E(.263,.02,0,0,1,1,2,0),E(.426,.07,0,-6e-4,1,1,-2,-2),E(-.304,.03,0,3e-4,1,-1,2,0),E(-.372,-.19,0,-.0027,1,-1,-2,2),E(.418,0,0,0,0,0,4,0),E(-.33,-.04,0,0,3,0,2,0);function It(q,te,ge,_e,De){return q*R0(te,ge,_e,De).y}y=0,y+=It(-526.069,0,0,1,-2),y+=It(-3.352,0,0,1,-4),y+=It(44.297,1,0,1,-2),y+=It(-6,1,0,1,-4),y+=It(20.599,-1,0,1,0),y+=It(-30.598,-1,0,1,-2),y+=It(-24.649,-2,0,1,0),y+=It(-2,-2,0,1,-2),y+=It(-22.571,0,1,1,-2),y+=It(10.985,0,-1,1,-2),p+=.82*Q(.7736-62.5512*e)+.31*Q(.0466-125.1025*e)+.35*Q(.5785-25.1042*e)+.66*Q(.4591+1335.8075*e)+.64*Q(.313-91.568*e)+1.14*Q(.148+1331.2898*e)+.21*Q(.5918+1056.5859*e)+.44*Q(.5784+1322.8595*e)+.24*Q(.2275-5.7374*e)+.28*Q(.2965+2.6929*e)+.33*Q(.3132+6.3368*e),a=R+H/yn;let Rl=(1.000002708+139.978*g)*(18518.511+1.189+_)*Math.sin(a)-6.24*Math.sin(3*a)+y;return{geo_eclip_lon:Xt*nr((T+p/yn)/Xt),geo_eclip_lat:Math.PI/(180*3600)*Rl,distance_au:yn*k2/(.999953253*w)}}function sl(n,e){return[n.rot[0][0]*e[0]+n.rot[1][0]*e[1]+n.rot[2][0]*e[2],n.rot[0][1]*e[0]+n.rot[1][1]*e[1]+n.rot[2][1]*e[2],n.rot[0][2]*e[0]+n.rot[1][2]*e[1]+n.rot[2][2]*e[2]]}function Ms(n,e,t){const r=cl(e,t);return sl(r,n)}function cl(n,e){const t=n.tt/36525;let r=84381.406,i=((((-951e-10*t+132851e-9)*t-.00114045)*t-1.0790069)*t+5038.481507)*t,o=((((3337e-10*t-467e-9)*t-.00772503)*t+.0512623)*t-.025754)*t+r,a=((((-56e-9*t+170663e-9)*t-.00121197)*t-2.3814292)*t+10.556403)*t;r*=ur,i*=ur,o*=ur,a*=ur;const s=Math.sin(r),c=Math.cos(r),u=Math.sin(-i),d=Math.cos(-i),l=Math.sin(-o),f=Math.cos(-o),g=Math.sin(a),p=Math.cos(a),y=p*d-u*g*f,_=p*u*c+g*f*d*c-s*g*l,w=p*u*s+g*f*d*s+c*g*l,T=-g*d-u*p*f,b=-g*u*c+p*f*d*c-s*p*l,S=-g*u*s+p*f*d*s+c*p*l,R=u*l,z=-l*d*c-s*f,Y=-l*d*s+f*c;if(e===bt.Into2000)return new pi([[y,_,w],[T,b,S],[R,z,Y]]);if(e===bt.From2000)return new pi([[y,T,R],[_,b,z],[w,S,Y]]);throw"Invalid precess direction"}function Q2(n){const e=.779057273264+.00273781191135448*n.ut,t=n.ut%1;let r=360*((e+t)%1);return r<0&&(r+=360),r}let ro;function ha(n){if(!ro||ro.tt!==n.tt){const e=n.tt/36525;let t=15*al(n).ee;const r=Q2(n);let o=((t+.014506+((((-368e-10*e-29956e-9)*e-44e-8)*e+1.3915817)*e+4612.156534)*e)/3600+r)%360/15;o<0&&(o+=24),ro={tt:n.tt,st:o}}return ro.st}function J2(n){const e=tt(n);return ha(e)}function e3(n,e){const t=n.latitude*pe,r=Math.sin(t),i=Math.cos(t),o=1/Math.hypot(i,_s*r),a=z2*o,s=n.height/1e3,c=vs*o+s,u=vs*a+s,d=(15*e+n.longitude)*pe,l=Math.sin(d),f=Math.cos(d);return{pos:[c*i*f/or,c*i*l/or,u*r/or],vel:[-7292115e-11*c*i*l*86400/or,H2*c*i*f*86400/or,0]}}function kc(n,e,t){const r=ul(e,t);return sl(r,n)}function ul(n,e){const t=al(n),r=t.mobl*pe,i=t.tobl*pe,o=t.dpsi*ur,a=Math.cos(r),s=Math.sin(r),c=Math.cos(i),u=Math.sin(i),d=Math.cos(o),l=Math.sin(o),f=d,g=-l*a,p=-l*s,y=l*c,_=d*a*c+s*u,w=d*s*c-a*u,T=l*u,b=d*a*u-s*c,S=d*s*u+a*c;if(e===bt.From2000)return new pi([[f,y,T],[g,_,b],[p,w,S]]);if(e===bt.Into2000)return new pi([[f,g,p],[y,_,w],[T,b,S]]);throw"Invalid precess direction"}function dl(n,e,t){return t===bt.Into2000?Ms(kc(n,e,t),e,t):kc(Ms(n,e,t),e,t)}function t3(n,e){const t=ha(n),r=e3(e,t).pos;return dl(r,n,bt.Into2000)}class Xe{constructor(e,t,r,i){this.x=e,this.y=t,this.z=r,this.t=i}Length(){return Math.hypot(this.x,this.y,this.z)}}class bn{constructor(e,t,r,i,o,a,s){this.x=e,this.y=t,this.z=r,this.vx=i,this.vy=o,this.vz=a,this.t=s}}class n3{constructor(e,t,r){this.lat=me(e),this.lon=me(t),this.dist=me(r)}}class Yc{constructor(e,t,r,i){this.ra=me(e),this.dec=me(t),this.dist=me(r),this.vec=i}}class pi{constructor(e){this.rot=e}}class r3{constructor(e,t,r,i){this.azimuth=me(e),this.altitude=me(t),this.ra=me(r),this.dec=me(i)}}function i3(n,e){return new Xe(n[0],n[1],n[2],e)}function o3(n,e){const t=i3(n,e),r=t.x*t.x+t.y*t.y,i=Math.sqrt(r+t.z*t.z);if(r===0){if(t.z===0)throw"Indeterminate sky coordinates";return new Yc(0,t.z<0?-90:90,i,t)}let o=tl*Math.atan2(t.y,t.x);o<0&&(o+=24);const a=Io*Math.atan2(n[2],Math.sqrt(r));return new Yc(o,a,i,t)}function La(n,e){const t=n*pe,r=Math.cos(t),i=Math.sin(t);return[r*e[0]+i*e[1],r*e[1]-i*e[0],e[2]]}function b0(n,e,t,r,i){let o=tt(n);Hi(e),me(t),me(r);const a=Math.sin(e.latitude*pe),s=Math.cos(e.latitude*pe),c=Math.sin(e.longitude*pe),u=Math.cos(e.longitude*pe),d=Math.sin(r*pe),l=Math.cos(r*pe),f=Math.sin(t*Fc),g=Math.cos(t*Fc);let p=[s*u,s*c,a],y=[-a*u,-a*c,s],_=[c,-u,0];const w=-15*ha(o);let T=La(w,p),b=La(w,y),S=La(w,_),R=[l*g,l*f,d];const z=R[0]*T[0]+R[1]*T[1]+R[2]*T[2],Y=R[0]*b[0]+R[1]*b[1]+R[2]*b[2],V=R[0]*S[0]+R[1]*S[1]+R[2]*S[2];let U=Math.hypot(Y,V),ee;U>0?(ee=-57.29577951308232*Math.atan2(V,Y),ee<0&&(ee+=360)):ee=0;let G=Io*Math.atan2(U,z),H=t,fe=r;if(i){let ye=G,Ae=R3(i,90-G);if(G-=Ae,Ae>0&&G>3e-4){const ut=Math.sin(G*pe),dt=Math.cos(G*pe),mn=Math.sin(ye*pe),Kn=Math.cos(ye*pe),Q=[];for(let At=0;At<3;++At)Q.push((R[At]-Kn*T[At])/mn*ut+T[At]*dt);U=Math.hypot(Q[0],Q[1]),U>0?(H=tl*Math.atan2(Q[1],Q[0]),H<0&&(H+=24)):H=0,fe=Io*Math.atan2(Q[2],U)}}return new r3(ee,90-G,H,fe)}function Hi(n){if(!(n instanceof ll))throw`Not an instance of the Observer class: ${n}`;if(me(n.latitude),me(n.longitude),me(n.height),n.latitude<-90||n.latitude>90)throw`Latitude ${n.latitude} is out of range. Must be -90..+90.`;return n}class ll{constructor(e,t,r){this.latitude=e,this.longitude=t,this.height=r,Hi(this)}}function M0(n,e,t,r,i){Hi(t);const o=tt(e),a=t3(o,t),s=yl(n,o,i),c=[s.x-a[0],s.y-a[1],s.z-a[2]],u=dl(c,o,bt.From2000);return o3(u,o)}function yi(n){const e=tt(n),t=K2(e),r=t.distance_au*Math.cos(t.geo_eclip_lat),i=[r*Math.cos(t.geo_eclip_lon),r*Math.sin(t.geo_eclip_lon),t.distance_au*Math.sin(t.geo_eclip_lat)],o=X2(e,i),a=Ms(o,e,bt.Into2000);return new Xe(a[0],a[1],a[2],e)}function hl(n){const e=tt(n),t=1e-5,r=e.AddDays(-1e-5),i=e.AddDays(1e-5),o=yi(r),a=yi(i);return new bn((o.x+a.x)/2,(o.y+a.y)/2,(o.z+a.z)/2,(a.x-o.x)/(2*t),(a.y-o.y)/(2*t),(a.z-o.z)/(2*t),e)}function a3(n){const e=tt(n),t=hl(e),r=1+il;return new bn(t.x/r,t.y/r,t.z/r,t.vx/r,t.vy/r,t.vz/r,e)}function fr(n,e,t){let r=1,i=0;for(let o of n){let a=0;for(let[c,u,d]of o)a+=c*Math.cos(u+e*d);let s=r*a;t&&(s%=Xt),i+=s,r*=e}return i}function Pa(n,e){let t=1,r=0,i=0,o=0;for(let a of n){let s=0,c=0;for(let[u,d,l]of a){let f=d+e*l;s+=u*l*Math.sin(f),o>0&&(c+=u*Math.cos(f))}i+=o*r*c-t*s,r=t,t*=e,++o}return i}const Kr=365250,Ds=0,Rs=1,Ss=2;function Cs(n){return new Oe(n[0]+44036e-11*n[1]-190919e-12*n[2],-479966e-12*n[0]+.917482137087*n[1]-.397776982902*n[2],.397776982902*n[1]+.917482137087*n[2])}function ml(n,e,t){const r=t*Math.cos(e),i=Math.cos(n),o=Math.sin(n);return[r*i,r*o,t*Math.sin(e)]}function so(n,e){const t=e.tt/Kr,r=fr(n[Ds],t,!0),i=fr(n[Rs],t,!1),o=fr(n[Ss],t,!1),a=ml(r,i,o);return Cs(a).ToAstroVector(e)}function xs(n,e){const t=e/Kr,r=fr(n[Ds],t,!0),i=fr(n[Rs],t,!1),o=fr(n[Ss],t,!1),a=Pa(n[Ds],t),s=Pa(n[Rs],t),c=Pa(n[Ss],t),u=Math.cos(r),d=Math.sin(r),l=Math.cos(i),f=Math.sin(i),g=+(c*l*u)-o*f*u*s-o*l*d*a,p=+(c*l*d)-o*f*d*s+o*l*u*a,y=+(c*f)+o*l*s,_=ml(r,i,o),w=[g/Kr,p/Kr,y/Kr],T=Cs(_),b=Cs(w);return new Vn(e,T,b)}function io(n,e,t,r){const i=r/(r+E0),o=so(Tn[t],e);n.x+=i*o.x,n.y+=i*o.y,n.z+=i*o.z}function s3(n){const e=new Xe(0,0,0,n);return io(e,n,x.Jupiter,ws),io(e,n,x.Saturn,Es),io(e,n,x.Uranus,Ts),io(e,n,x.Neptune,bs),e}const As=51,c3=29200,Oo=146,Kt=201,Un=[[-73e4,[-26.118207232108,-14.376168177825,3.384402515299],[.0016339372163656,-.0027861699588508,-.0013585880229445]],[-700800,[41.974905202127,-.448502952929,-12.770351505989],[.00073458569351457,.0022785014891658,.00048619778602049]],[-671600,[14.706930780744,44.269110540027,9.353698474772],[-.00210001479998,.00022295915939915,.00070143443551414]],[-642400,[-29.441003929957,-6.43016153057,6.858481011305],[.00084495803960544,-.0030783914758711,-.0012106305981192]],[-613200,[39.444396946234,-6.557989760571,-13.913760296463],[.0011480029005873,.0022400006880665,.00035168075922288]],[-584e3,[20.2303809507,43.266966657189,7.382966091923],[-.0019754081700585,.00053457141292226,.00075929169129793]],[-554800,[-30.65832536462,2.093818874552,9.880531138071],[61010603013347e-18,-.0031326500935382,-.00099346125151067]],[-525600,[35.737703251673,-12.587706024764,-14.677847247563],[.0015802939375649,.0021347678412429,.00019074436384343]],[-496400,[25.466295188546,41.367478338417,5.216476873382],[-.0018054401046468,.0008328308359951,.00080260156912107]],[-467200,[-29.847174904071,10.636426313081,12.297904180106],[-.00063257063052907,-.0029969577578221,-.00074476074151596]],[-438e3,[30.774692107687,-18.236637015304,-14.945535879896],[.0020113162005465,.0019353827024189,-20937793168297e-19]],[-408800,[30.243153324028,38.656267888503,2.938501750218],[-.0016052508674468,.0011183495337525,.00083333973416824]],[-379600,[-27.288984772533,18.643162147874,14.023633623329],[-.0011856388898191,-.0027170609282181,-.00049015526126399]],[-350400,[24.519605196774,-23.245756064727,-14.626862367368],[.0024322321483154,.0016062008146048,-.00023369181613312]],[-321200,[34.505274805875,35.125338586954,.557361475637],[-.0013824391637782,.0013833397561817,.00084823598806262]],[-292e3,[-23.275363915119,25.818514298769,15.055381588598],[-.0016062295460975,-.0023395961498533,-.00024377362639479]],[-262800,[17.050384798092,-27.180376290126,-13.608963321694],[.0028175521080578,.0011358749093955,-.00049548725258825]],[-233600,[38.093671910285,30.880588383337,-1.843688067413],[-.0011317697153459,.0016128814698472,.00084177586176055]],[-204400,[-18.197852930878,31.932869934309,15.438294826279],[-.0019117272501813,-.0019146495909842,-19657304369835e-18]],[-175200,[8.528924039997,-29.618422200048,-11.805400994258],[.0031034370787005,.0005139363329243,-.00077293066202546]],[-146e3,[40.94685725864,25.904973592021,-4.256336240499],[-.00083652705194051,.0018129497136404,.0008156422827306]],[-116800,[-12.326958895325,36.881883446292,15.217158258711],[-.0021166103705038,-.001481442003599,.00017401209844705]],[-87600,[-.633258375909,-30.018759794709,-9.17193287495],[.0032016994581737,-.00025279858672148,-.0010411088271861]],[-58400,[42.936048423883,20.344685584452,-6.588027007912],[-.00050525450073192,.0019910074335507,.00077440196540269]],[-29200,[-5.975910552974,40.61180995846,14.470131723673],[-.0022184202156107,-.0010562361130164,.00033652250216211]],[0,[-9.875369580774,-27.978926224737,-5.753711824704],[.0030287533248818,-.0011276087003636,-.0012651326732361]],[29200,[43.958831986165,14.214147973292,-8.808306227163],[-.00014717608981871,.0021404187242141,.00071486567806614]],[58400,[.67813676352,43.094461639362,13.243238780721],[-.0022358226110718,-.00063233636090933,.00047664798895648]],[87600,[-18.282602096834,-23.30503958666,-1.766620508028],[.0025567245263557,-.0019902940754171,-.0013943491701082]],[116800,[43.873338744526,7.700705617215,-10.814273666425],[.00023174803055677,.0022402163127924,.00062988756452032]],[146e3,[7.392949027906,44.382678951534,11.629500214854],[-.002193281545383,-.00021751799585364,.00059556516201114]],[175200,[-24.981690229261,-16.204012851426,2.466457544298],[.001819398914958,-.0026765419531201,-.0013848283502247]],[204400,[42.530187039511,.845935508021,-12.554907527683],[.00065059779150669,.0022725657282262,.00051133743202822]],[233600,[13.999526486822,44.462363044894,9.669418486465],[-.0021079296569252,.00017533423831993,.00069128485798076]],[262800,[-29.184024803031,-7.371243995762,6.493275957928],[.00093581363109681,-.0030610357109184,-.0012364201089345]],[292e3,[39.831980671753,-6.078405766765,-13.909815358656],[.0011117769689167,.0022362097830152,.00036230548231153]],[321200,[20.294955108476,43.417190420251,7.450091985932],[-.0019742157451535,.00053102050468554,.00075938408813008]],[350400,[-30.66999230216,2.318743558955,9.973480913858],[45605107450676e-18,-.0031308219926928,-.00099066533301924]],[379600,[35.626122155983,-12.897647509224,-14.777586508444],[.0016015684949743,.0021171931182284,.00018002516202204]],[408800,[26.133186148561,41.232139187599,5.00640132622],[-.0017857704419579,.00086046232702817,.00080614690298954]],[438e3,[-29.57674022923,11.863535943587,12.631323039872],[-.00072292830060955,-.0029587820140709,-.000708242964503]],[467200,[29.910805787391,-19.159019294,-15.013363865194],[.0020871080437997,.0018848372554514,-38528655083926e-18]],[496400,[31.375957451819,38.050372720763,2.433138343754],[-.0015546055556611,.0011699815465629,.00083565439266001]],[525600,[-26.360071336928,20.662505904952,14.414696258958],[-.0013142373118349,-.0026236647854842,-.00042542017598193]],[554800,[22.599441488648,-24.508879898306,-14.484045731468],[.0025454108304806,.0014917058755191,-.00030243665086079]],[584e3,[35.877864013014,33.894226366071,-.224524636277],[-.0012941245730845,.0014560427668319,.00084762160640137]],[613200,[-21.538149762417,28.204068269761,15.321973799534],[-.001731211740901,-.0021939631314577,-.0001631691327518]],[642400,[13.971521374415,-28.339941764789,-13.083792871886],[.0029334630526035,.00091860931752944,-.00059939422488627]],[671600,[39.526942044143,28.93989736011,-2.872799527539],[-.0010068481658095,.001702113288809,.00083578230511981]],[700800,[-15.576200701394,34.399412961275,15.466033737854],[-.0020098814612884,-.0017191109825989,70414782780416e-18]],[73e4,[4.24325283709,-30.118201690825,-10.707441231349],[.0031725847067411,.0001609846120227,-.00090672150593868]]];class Oe{constructor(e,t,r){this.x=e,this.y=t,this.z=r}clone(){return new Oe(this.x,this.y,this.z)}ToAstroVector(e){return new Xe(this.x,this.y,this.z,e)}static zero(){return new Oe(0,0,0)}quadrature(){return this.x*this.x+this.y*this.y+this.z*this.z}add(e){return new Oe(this.x+e.x,this.y+e.y,this.z+e.z)}sub(e){return new Oe(this.x-e.x,this.y-e.y,this.z-e.z)}incr(e){this.x+=e.x,this.y+=e.y,this.z+=e.z}decr(e){this.x-=e.x,this.y-=e.y,this.z-=e.z}mul(e){return new Oe(e*this.x,e*this.y,e*this.z)}div(e){return new Oe(this.x/e,this.y/e,this.z/e)}mean(e){return new Oe((this.x+e.x)/2,(this.y+e.y)/2,(this.z+e.z)/2)}neg(){return new Oe(-this.x,-this.y,-this.z)}}class Vn{constructor(e,t,r){this.tt=e,this.r=t,this.v=r}clone(){return new Vn(this.tt,this.r,this.v)}sub(e){return new Vn(this.tt,this.r.sub(e.r),this.v.sub(e.v))}}function u3(n){let[e,[t,r,i],[o,a,s]]=n;return new Vn(e,new Oe(t,r,i),new Oe(o,a,s))}function oo(n,e,t,r){const i=r/(r+E0),o=xs(Tn[t],e);return n.r.incr(o.r.mul(i)),n.v.incr(o.v.mul(i)),o}function Hr(n,e,t){const r=t.sub(n),i=r.quadrature();return r.mul(e/(i*Math.sqrt(i)))}class ma{constructor(e){let t=new Vn(e,new Oe(0,0,0),new Oe(0,0,0));this.Jupiter=oo(t,e,x.Jupiter,ws),this.Saturn=oo(t,e,x.Saturn,Es),this.Uranus=oo(t,e,x.Uranus,Ts),this.Neptune=oo(t,e,x.Neptune,bs),this.Jupiter.r.decr(t.r),this.Jupiter.v.decr(t.v),this.Saturn.r.decr(t.r),this.Saturn.v.decr(t.v),this.Uranus.r.decr(t.r),this.Uranus.v.decr(t.v),this.Neptune.r.decr(t.r),this.Neptune.v.decr(t.v),this.Sun=new Vn(e,t.r.mul(-1),t.v.mul(-1))}Acceleration(e){let t=Hr(e,E0,this.Sun.r);return t.incr(Hr(e,ws,this.Jupiter.r)),t.incr(Hr(e,Es,this.Saturn.r)),t.incr(Hr(e,Ts,this.Uranus.r)),t.incr(Hr(e,bs,this.Neptune.r)),t}}class fa{constructor(e,t,r,i){this.tt=e,this.r=t,this.v=r,this.a=i}clone(){return new fa(this.tt,this.r.clone(),this.v.clone(),this.a.clone())}}class fl{constructor(e,t){this.bary=e,this.grav=t}}function No(n,e,t,r){return new Oe(e.x+n*(t.x+n*r.x/2),e.y+n*(t.y+n*r.y/2),e.z+n*(t.z+n*r.z/2))}function Gc(n,e,t){return new Oe(e.x+n*t.x,e.y+n*t.y,e.z+n*t.z)}function Is(n,e){const t=n-e.tt,r=new ma(n),i=No(t,e.r,e.v,e.a),o=r.Acceleration(i).mean(e.a),a=No(t,e.r,e.v,o),s=e.v.add(o.mul(t)),c=r.Acceleration(a),u=new fa(n,a,s,c);return new fl(r,u)}const d3=[];function gl(n,e){const t=Math.floor(n);return t<0?0:t>=e?e-1:t}function Os(n){const e=u3(n),t=new ma(e.tt),r=e.r.add(t.Sun.r),i=e.v.add(t.Sun.v),o=t.Acceleration(r),a=new fa(e.tt,r,i,o);return new fl(t,a)}function l3(n,e){const t=Un[0][0];if(e<t||e>Un[As-1][0])return null;const r=gl((e-t)/c3,As-1);if(!n[r]){const o=n[r]=[];o[0]=Os(Un[r]).grav,o[Kt-1]=Os(Un[r+1]).grav;let a,s=o[0].tt;for(a=1;a<Kt-1;++a)o[a]=Is(s+=Oo,o[a-1]).grav;s=o[Kt-1].tt;var i=[];for(i[Kt-1]=o[Kt-1],a=Kt-2;a>0;--a)i[a]=Is(s-=Oo,i[a+1]).grav;for(a=Kt-2;a>0;--a){const c=a/(Kt-1);o[a].r=o[a].r.mul(1-c).add(i[a].r.mul(c)),o[a].v=o[a].v.mul(1-c).add(i[a].v.mul(c)),o[a].a=o[a].a.mul(1-c).add(i[a].a.mul(c))}}return n[r]}function jc(n,e,t){let r=Os(n);const i=Math.ceil((e-r.grav.tt)/t);for(let o=0;o<i;++o)r=Is(o+1===i?e:r.grav.tt+t,r.grav);return r}function pl(n,e){let t,r,i;const o=l3(d3,n.tt);if(o){const a=gl((n.tt-o[0].tt)/Oo,Kt-1),s=o[a],c=o[a+1],u=s.a.mean(c.a),d=No(n.tt-s.tt,s.r,s.v,u),l=Gc(n.tt-s.tt,s.v,u),f=No(n.tt-c.tt,c.r,c.v,u),g=Gc(n.tt-c.tt,c.v,u),p=(n.tt-s.tt)/Oo;t=d.mul(1-p).add(f.mul(p)),r=l.mul(1-p).add(g.mul(p))}else{let a;n.tt<Un[0][0]?a=jc(Un[0],n.tt,-146):a=jc(Un[As-1],n.tt,146),t=a.grav.r,r=a.grav.v,i=a.bary}return i||(i=new ma(n.tt)),t=t.sub(i.Sun.r),r=r.sub(i.Sun.v),new bn(t.x,t.y,t.z,r.x,r.y,r.z,n)}function Lo(n,e){var t=tt(e);if(n in Tn)return so(Tn[n],t);if(n===x.Pluto){const a=pl(t);return new Xe(a.x,a.y,a.z,t)}if(n===x.Sun)return new Xe(0,0,0,t);if(n===x.Moon){var r=so(Tn.Earth,t),i=yi(t);return new Xe(r.x+i.x,r.y+i.y,r.z+i.z,t)}if(n===x.EMB){const a=so(Tn.Earth,t),s=yi(t),c=1+il;return new Xe(a.x+s.x/c,a.y+s.y/c,a.z+s.z/c,t)}if(n===x.SSB)return s3(t);const o=T0(n);if(o){const a=new n3(o.dec,15*o.ra,o.dist);return D3(a,t)}throw`HelioVector: Unknown body "${n}"`}function h3(n,e){let t=e,r=0;for(let i=0;i<10;++i){const o=n(t),a=o.Length()/el;if(a>1)throw"Object is too distant for light-travel solver.";const s=e.AddDays(-a);if(r=Math.abs(s.tt-t.tt),r<1e-9)return o;t=s}throw`Light-travel time solver did not converge: dt = ${r}`}class m3{constructor(e,t,r,i){this.observerBody=e,this.targetBody=t,this.aberration=r,this.observerPos=i}Position(e){this.aberration&&(this.observerPos=Lo(this.observerBody,e));const t=Lo(this.targetBody,e);return new Xe(t.x-this.observerPos.x,t.y-this.observerPos.y,t.z-this.observerPos.z,e)}}function f3(n,e,t,r){const i=tt(n);if(T0(t)){const s=Lo(t,i);{const c=p3(e,i),u=new Xe(s.x-c.x,s.y-c.y,s.z-c.z,i),d=el/u.Length();return new Xe(u.x+c.vx/d,u.y+c.vy/d,u.z+c.vz/d,i)}}let o;o=new Xe(0,0,0,i);const a=new m3(e,t,r,o);return h3(s=>a.Position(s),i)}function yl(n,e,t){const r=tt(e);switch(n){case x.Earth:return new Xe(0,0,0,r);case x.Moon:return yi(r);default:const i=f3(r,x.Earth,n,t);return i.t=r,i}}function g3(n,e){return new bn(n.r.x,n.r.y,n.r.z,n.v.x,n.v.y,n.v.z,e)}function p3(n,e){const t=tt(e);switch(n){case x.Sun:return new bn(0,0,0,0,0,0,t);case x.SSB:const r=new ma(t.tt);return new bn(-r.Sun.r.x,-r.Sun.r.y,-r.Sun.r.z,-r.Sun.v.x,-r.Sun.v.y,-r.Sun.v.z,t);case x.Mercury:case x.Venus:case x.Earth:case x.Mars:case x.Jupiter:case x.Saturn:case x.Uranus:case x.Neptune:const i=xs(Tn[n],t.tt);return g3(i,t);case x.Pluto:return pl(t);case x.Moon:case x.EMB:const o=xs(Tn.Earth,t.tt),a=n==x.Moon?hl(t):a3(t);return new bn(a.x+o.r.x,a.y+o.r.y,a.z+o.r.z,a.vx+o.v.x,a.vy+o.v.y,a.vz+o.v.z,t);default:if(T0(n)){const s=Lo(n,t);return new bn(s.x,s.y,s.z,0,0,0,t)}throw`HelioState: Unsupported body "${n}"`}}function y3(n,e,t,r,i){let o=(i+t)/2-r,a=(i-t)/2,s=r,c;if(o==0){if(a==0||(c=-s/a,c<-1||c>1))return null}else{let l=a*a-4*o*s;if(l<=0)return null;let f=Math.sqrt(l),g=(-a+f)/(2*o),p=(-a-f)/(2*o);if(-1<=g&&g<=1){if(-1<=p&&p<=1)return null;c=g}else if(-1<=p&&p<=1)c=p;else return null}let u=n+c*e,d=(2*o*c+a)/e;return{t:u,df_dt:d}}function _3(n,e,t,r){const i=me(r.dt_tolerance_seconds||1),o=Math.abs(i/nl);let a=r.init_f1||n(e),s=r.init_f2||n(t),c=NaN,u=0,d=r.iter_limit||20,l=!0;for(;;){if(++u>d)throw"Excessive iteration in Search()";let f=V2(e,t,.5),g=f.ut-e.ut;if(Math.abs(g)<o)return f;l?c=n(f):l=!0;let p=y3(f.ut,t.ut-f.ut,a,c,s);if(p){let y=tt(p.t),_=n(y);if(p.df_dt!==0){if(Math.abs(_/p.df_dt)<o)return y;let w=1.2*Math.abs(_/p.df_dt);if(w<g/10){let T=y.AddDays(-w),b=y.AddDays(+w);if((T.ut-e.ut)*(T.ut-t.ut)<0&&(b.ut-e.ut)*(b.ut-t.ut)<0){let S=n(T),R=n(b);if(S<0&&R>=0){a=S,s=R,e=T,t=b,c=_,l=!1;continue}}}}}if(a<0&&c>=0){t=f,s=c;continue}if(c<0&&s>=0){e=f,a=c;continue}return null}}function Wc(n,e,t,r,i,o){if(!Number.isFinite(o)||o<-90||o>90)throw`Invalid altitude angle: ${o}`;return E3(n,e,t,r,i,0,o)}class v3{constructor(e,t,r,i){this.tx=e,this.ty=t,this.ax=r,this.ay=i}}function Ns(n,e,t,r,i,o,a){if(o<0&&a>=0)return new v3(r,i,o,a);if(o>=0&&a<0)return null;if(n>17)throw"Excessive recursion in rise/set ascent search.";const s=i.ut-r.ut;if(s*nl<1||Math.min(Math.abs(o),Math.abs(a))>t*(s/2))return null;const u=new un((r.ut+i.ut)/2),d=e(u);return Ns(1+n,e,t,r,u,o,d)||Ns(1+n,e,t,u,i,d,a)}function w3(n,e){if(e<-90||e>90)throw`Invalid geographic latitude: ${e}`;let t,r;switch(n){case x.Moon:t=4.5,r=8.2;break;case x.Sun:t=.8,r=.5;break;case x.Mercury:t=-1.6,r=1;break;case x.Venus:t=-.8,r=.6;break;case x.Mars:t=-.5,r=.4;break;case x.Jupiter:case x.Saturn:case x.Uranus:case x.Neptune:case x.Pluto:t=-.2,r=.2;break;case x.Star1:case x.Star2:case x.Star3:case x.Star4:case x.Star5:case x.Star6:case x.Star7:case x.Star8:t=-.008,r=.008;break;default:throw`Body not allowed for altitude search: ${n}`}const i=pe*e;return Math.abs((360/rl-t)*Math.cos(i))+Math.abs(r*Math.sin(i))}function E3(n,e,t,r,i,o,a){if(Hi(e),me(i),me(o),me(a),a<-90||a>90)throw`Invalid target altitude angle: ${a}`;const s=w3(n,e.latitude);function c(p){const y=M0(n,p,e,!0,!0),w=b0(p,e,y.ra,y.dec).altitude+Io*Math.asin(o/y.dist);return t*(w-a)}const u=tt(r);let d=u,l=u,f=c(d),g=f;for(;;){i<0?(d=l.AddDays(-.42),f=c(d)):(l=d.AddDays(.42),g=c(l));const p=Ns(0,c,s,d,l,f,g);if(p){const y=_3(c,p.tx,p.ty,{dt_tolerance_seconds:.1,init_f1:p.ax,init_f2:p.ay});if(y){if(i<0){if(y.ut<u.ut+i)return null}else if(y.ut>u.ut+i)return null;return y}throw`Rise/set search failed after finding ascent: t1=${d}, t2=${l}, a1=${f}, a2=${g}`}if(i<0){if(d.ut<u.ut+i)return null;l=d,g=f}else{if(l.ut>u.ut+i)return null;d=l,f=g}}}class T3{constructor(e,t){this.time=e,this.hor=t}}function b3(n,e,t,r,i=1){Hi(e);let o=tt(r),a=0;if(n===x.Earth)throw"Cannot search for hour angle of the Earth.";if(me(t),me(i),i===0)throw"Direction must be positive or negative.";for(;;){++a;let s=ha(o),c=M0(n,o,e,!0,!0),u=(t+c.ra-e.longitude/15-s)%24;if(a===1?i>0?u<0&&(u+=24):u>0&&(u-=24):u<-12?u+=24:u>12&&(u-=24),Math.abs(u)*3600<.1){const l=b0(o,e,c.ra,c.dec,"normal");return new T3(o,l)}let d=u/24*rl;o=o.AddDays(d)}}var qc;(function(n){n[n.Pericenter=0]="Pericenter",n[n.Apocenter=1]="Apocenter"})(qc||(qc={}));function M3(n,e){return new pi([[e.rot[0][0]*n.rot[0][0]+e.rot[1][0]*n.rot[0][1]+e.rot[2][0]*n.rot[0][2],e.rot[0][1]*n.rot[0][0]+e.rot[1][1]*n.rot[0][1]+e.rot[2][1]*n.rot[0][2],e.rot[0][2]*n.rot[0][0]+e.rot[1][2]*n.rot[0][1]+e.rot[2][2]*n.rot[0][2]],[e.rot[0][0]*n.rot[1][0]+e.rot[1][0]*n.rot[1][1]+e.rot[2][0]*n.rot[1][2],e.rot[0][1]*n.rot[1][0]+e.rot[1][1]*n.rot[1][1]+e.rot[2][1]*n.rot[1][2],e.rot[0][2]*n.rot[1][0]+e.rot[1][2]*n.rot[1][1]+e.rot[2][2]*n.rot[1][2]],[e.rot[0][0]*n.rot[2][0]+e.rot[1][0]*n.rot[2][1]+e.rot[2][0]*n.rot[2][2],e.rot[0][1]*n.rot[2][0]+e.rot[1][1]*n.rot[2][1]+e.rot[2][1]*n.rot[2][2],e.rot[0][2]*n.rot[2][0]+e.rot[1][2]*n.rot[2][1]+e.rot[2][2]*n.rot[2][2]]])}function D3(n,e){e=tt(e);const t=n.lat*pe,r=n.lon*pe,i=n.dist*Math.cos(t);return new Xe(i*Math.cos(r),i*Math.sin(r),n.dist*Math.sin(t),e)}function R3(n,e){let t;if(me(e),e<-90||e>90)return 0;if(n==="normal"||n==="jplhor"){let r=e;r<-1&&(r=-1),t=1.02/Math.tan((r+10.3/(r+5.11))*pe)/60,n==="normal"&&e<-1&&(t*=(e+90)/89)}else if(!n)t=0;else throw`Invalid refraction option: ${n}`;return t}function S3(n,e){return new Xe(n.rot[0][0]*e.x+n.rot[1][0]*e.y+n.rot[2][0]*e.z,n.rot[0][1]*e.x+n.rot[1][1]*e.y+n.rot[2][1]*e.z,n.rot[0][2]*e.x+n.rot[1][2]*e.y+n.rot[2][2]*e.z,e.t)}function C3(n){n=tt(n);const e=cl(n,bt.From2000),t=ul(n,bt.From2000);return M3(e,t)}var Vc;(function(n){n.Penumbral="penumbral",n.Partial="partial",n.Annular="annular",n.Total="total"})(Vc||(Vc={}));var Zc;(function(n){n[n.Invalid=0]="Invalid",n[n.Ascending=1]="Ascending",n[n.Descending=-1]="Descending"})(Zc||(Zc={}));const Po=24*60,x3=24*60*60*1e3,A3=Math.PI/12,I3=.2666,u4={latitude:51.256,longitude:7.15},d4="Europe/Berlin",O3=64,Nn=new Map,Ls=n=>{const e=Dn(n.minutes,0,Po-1),t=Math.floor(e),r=ch({...n,dayOfYear:Dn(Math.round(n.dayOfYear),1,Fo(n.year)),minutes:t});return new Date(r.getTime()+(e-t)*6e4)},l4=(n,e)=>i0(n,e),_l=({latitude:n,longitude:e})=>new ll(n,e,0),N3=(n,e)=>{const t=i0(n,e.timeZone);return t.year===e.year&&t.dayOfYear===e.dayOfYear},Ua=(n,e)=>!n||!N3(n.date,e)?null:i0(n.date,e.timeZone).minutes+n.date.getUTCSeconds()/60+n.date.getUTCMilliseconds()/6e4,L3=n=>{const e=new un(n),t=S3(C3(e),yl(x.Sun,e,!0)),r=J2(e)*A3,i=Math.cos(r),o=Math.sin(r),a=i*t.x+o*t.y,s=-o*t.x+i*t.y,c=1/Math.hypot(a,s,t.z);return[a*c,s*c,t.z*c]},P3=(n,e,t)=>{const{year:r,dayOfYear:i}=n,o=Dn(Math.round(i),1,Fo(r)),a={...n,year:r,dayOfYear:o},s=Ls({...a,minutes:0}),c=Kl({year:r,dayOfYear:o},1),d=(Ls({...a,...c,minutes:0}).getTime()-s.getTime())/x3,l=_l(e),f=Ua(Wc(x.Sun,l,1,s,d,t),a),g=Ua(Wc(x.Sun,l,-1,s,d,t),a),p=b3(x.Sun,l,0,s,1),y=Ua(p.time,a)??Po/2,_=U3({...a,minutes:0},e).elevationDegrees>=t;return{sunriseMinutes:f??(_?0:y),solarNoonMinutes:y,sunsetMinutes:g??(_?Po:y),polarDay:f===null&&g===null&&_,polarNight:f===null&&g===null&&!_}},h4=(n,e,t)=>Array.from({length:Fo(n.year)},(r,i)=>vl({...n,dayOfYear:i+1},e,t)),vl=(n,e,{minimumElevationDegrees:t=I3}={})=>{const r=JSON.stringify([n.year,n.dayOfYear,n.timeZone,e.latitude,e.longitude,t]),i=Nn.get(r);if(i)return Nn.delete(r),Nn.set(r,i),i;const o=Object.freeze(P3(n,e,t));if(Nn.set(r,o),Nn.size>O3){const a=Nn.keys().next().value;a!==void 0&&Nn.delete(a)}return o},m4=(n,e)=>{const t=Dn(Math.round(n.dayOfYear),1,Fo(n.year)),r=vl({...n,dayOfYear:t},e);if(r.polarNight)return null;const i=r.polarDay?0:Math.ceil(r.sunriseMinutes),o=r.polarDay?Po-1:Math.floor(r.sunsetMinutes);return i>o?null:{year:n.year,dayOfYear:t,minutes:Dn(Math.round(n.minutes),i,o),timeZone:n.timeZone}},U3=(n,e)=>{const t=Ls(n),r=_l(e),i=M0(x.Sun,t,r,!0,!0),o=b0(t,r,i.ra,i.dec);return{instant:t,azimuthDegrees:o.azimuth,elevationDegrees:o.altitude}},Bc=new dr("#fff2d8"),Xc=1e-8,$a=3e4,Kc=-1e3,Qc=1e7,$3=5e6,F3=8e6,_i=n=>Number.isFinite(n.x)&&Number.isFinite(n.y)&&Number.isFinite(n.z),Jc=n=>!Number.isFinite(n.longitude)||Math.abs(n.longitude)>180?"longitude must be a finite value in degrees within [-180, 180]":!Number.isFinite(n.latitude)||Math.abs(n.latitude)>90?"latitude must be a finite value in degrees within [-90, 90]":!Number.isFinite(n.altitudeMeters)||n.altitudeMeters<Kc||n.altitudeMeters>Qc?`altitudeMeters must be within [${Kc}, ${Qc}]`:null,f4=(n,e,t)=>{if(!Number.isFinite(n.getTime()))return"instant must be a valid Date";const r=Jc(e);if(r)return`observer ${r}`;if(!t)return null;const i=Jc(t.observer);return i?`sky reference observer ${i}`:_i(t.scenePosition)?null:"sky reference scenePosition must contain finite metre coordinates"},wl=n=>{if(!_i(n.directionToSunECEF))return"sun direction contains a non-finite component";if(Math.abs(n.directionToSunECEF.length()-1)>1e-6)return"sun direction is not normalized";if(!n.ecefToSceneMatrix.elements.every(Number.isFinite))return"ECEF-to-scene matrix contains a non-finite component";const e=n.ecefToSceneMatrix.elements,t=[new C(e[0],e[4],e[8]),new C(e[1],e[5],e[9]),new C(e[2],e[6],e[10])];if(t.some(o=>Math.abs(o.length()-1)>1e-6)||Math.abs(t[0].dot(t[1]))>1e-6||Math.abs(t[0].dot(t[2]))>1e-6||Math.abs(t[1].dot(t[2]))>1e-6||Math.abs(e[3])>1e-12||Math.abs(e[7])>1e-12||Math.abs(e[11])>1e-12||Math.abs(e[12])>1e-12||Math.abs(e[13])>1e-12||Math.abs(e[14])>1e-12||Math.abs(e[15]-1)>1e-12)return"ECEF-to-scene matrix is not an affine orthonormal rotation";const r=n.ecefToSceneMatrix.determinant();if(!Number.isFinite(r)||Math.abs(r-1)>1e-6)return"ECEF-to-scene matrix is not a proper orthonormal rotation";if(!_i(n.ellipsoidCenterECEF))return"ellipsoid center contains a non-finite component";const i=n.ellipsoidCenterECEF.length();return i<$3||i>F3?"ellipsoid center is outside the plausible WGS84 distance range":null},g4=n=>{var t;const e=wl(n.skyFrame);return e||(_i(n.directionToSun)?Math.abs(n.directionToSun.length()-1)>1e-6?"scene sun direction is not normalized":![n.color.r,n.color.g,n.color.b].every(Number.isFinite)||![n.radiance.r,n.radiance.g,n.radiance.b].every(Number.isFinite)||!Number.isFinite(n.relativeIntensity)||n.relativeIntensity<0||n.relativeIntensity>1||!Number.isFinite(n.azimuthDegrees)||!Number.isFinite(n.elevationDegrees)?"sunlight color, intensity, or angles contain invalid values":(t=n.skyIrradianceCoefficients)!=null&&t.some(r=>!_i(r))?"sky irradiance contains a non-finite coefficient":null:"scene sun direction contains a non-finite component")},Fa={useTransmittanceLut:!0,useIrradianceLut:!0},H3=({east:n,north:e,up:t})=>new Te().set(n.x,n.y,n.z,0,t.x,t.y,t.z,0,-e.x,-e.y,-e.z,0,0,0,0,1);function D0({longitude:n,latitude:e,altitudeMeters:t}){const r=new _d(ps(n),ps(e),t).toECEF(),i=new C,o=new C,a=new C;return jt.WGS84.getEastNorthUpVectors(r,i,o,a),{observerECEF:r,east:i,north:o,up:a}}const El=(n,{east:e,north:t,up:r},i)=>i.set(n.dot(e),n.dot(r),-n.dot(t)).normalize(),Tl=(n,e,t)=>{const r=t?D0(t.observer):e,i=H3(r);t!=null&&t.sceneFromLocal&&i.premultiply(t.sceneFromLocal);const o=i.clone().invert(),a=((t==null?void 0:t.scenePosition)??new C).clone().applyMatrix4(o).sub(r.observerECEF);return{directionToSunECEF:n.clone(),ecefToSceneMatrix:i,ellipsoidCenterECEF:a}},z3=(n,e,{observerECEF:t,east:r,north:i,up:o})=>n!=null&&n.irradianceTexture?(n.ellipsoidMatrix.set(r.x,r.y,r.z,0,o.x,o.y,o.z,0,-i.x,-i.y,-i.z,0,0,0,0,1),n.ellipsoidCenter.copy(t).negate(),n.sunDirection.copy(e),n.position.set(0,0,0),n.updateMatrixWorld(!0),n.update(),n.sh.coefficients.map(a=>a.clone())):null,bl=n=>{const e=O0(Math.asin(Dn(n.y,-1,1)));return{azimuthDegrees:(O0(Math.atan2(n.x,-n.z))+360)%360,elevationDegrees:e}},p4=(n,e)=>{const t=D0(e.observer),r=El(n.skyFrame.directionToSunECEF,t,new C);return e.sceneFromLocal&&r.transformDirection(e.sceneFromLocal),{...n,directionToSun:r,...bl(r),skyFrame:Tl(n.skyFrame.directionToSunECEF,t,e)}},k3=(n,e,t,r=null,i)=>{const o=D0(e),{observerECEF:a,up:s}=o,c=new C(...L3(n)),u=El(c,o,new C);i!=null&&i.sceneFromLocal&&u.transformDirection(i.sceneFromLocal);const d=Tl(c,o,i),l=z3(r,c,o),{azimuthDegrees:f,elevationDegrees:g}=bl(u);if(!t){const b=Math.sqrt(Dn(u.y,0,1));return{directionToSun:u,color:Bc.clone(),relativeIntensity:b,radiance:Bc.clone().multiplyScalar(b),atmosphericTransmittanceReady:!1,atmosphericIrradianceReady:l!==null,skyIrradianceCoefficients:l,azimuthDegrees:f,elevationDegrees:g,skyFrame:d}}const p=$c(t,a,c,new dr,{ellipsoid:jt.WGS84,correctAltitude:!0,photometric:!0}),y=$c(t,a,s,new dr,{ellipsoid:jt.WGS84,correctAltitude:!0,photometric:!0}),_=Math.max(p.r,p.g,p.b,0),w=Math.max(y.r,y.g,y.b,Xc),T=_>Xc?p.clone().multiplyScalar(1/_):new dr(0,0,0);return{directionToSun:u,color:T,relativeIntensity:Dn(_/w,0,1),radiance:p,atmosphericTransmittanceReady:!0,atmosphericIrradianceReady:l!==null,skyIrradianceCoefficients:l,azimuthDegrees:f,elevationDegrees:g,skyFrame:d}};class y4{constructor(){Pe(this,"transmittanceTexture",null);Pe(this,"irradianceTexture",null);Pe(this,"scatteringTexture",null);Pe(this,"skyLightProbe",new D2({ellipsoid:jt.WGS84,correctAltitude:!0,photometric:!0}));Pe(this,"transmittanceLoading",!1);Pe(this,"irradianceLoading",!1);Pe(this,"scatteringLoading",!1);Pe(this,"transmittanceRetryAt",0);Pe(this,"irradianceRetryAt",0);Pe(this,"scatteringRetryAt",0);Pe(this,"disposed",!1)}get ready(){return this.transmittanceTexture!==null&&this.irradianceTexture!==null}get skyReady(){return this.skyTextures!==null}get skyTextures(){return!this.transmittanceTexture||!this.irradianceTexture||!this.scatteringTexture?null:{transmittanceTexture:this.transmittanceTexture,irradianceTexture:this.irradianceTexture,scatteringTexture:this.scatteringTexture}}get isSkyLoading(){return this.transmittanceLoading||this.irradianceLoading||this.scatteringLoading}isLoadingFor(e=Fa){return e.useTransmittanceLut&&this.transmittanceLoading||e.useIrradianceLut&&this.irradianceLoading}ensure(e,t=Fa){if(this.disposed)return;const r=()=>{this.isLoadingFor(t)||e()};t.useTransmittanceLut&&this.ensureTransmittance(r),t.useIrradianceLut&&this.ensureIrradiance(r)}ensureSky(e){if(this.disposed||this.skyReady)return;let t=!1;const r=()=>{!t&&!this.isSkyLoading&&(t=!0,e())};this.ensureTransmittance(r),this.ensureIrradiance(r),this.ensureScattering(r)}ensureTransmittance(e){this.transmittanceTexture||this.transmittanceLoading||Date.now()<this.transmittanceRetryAt||(this.transmittanceLoading=!0,Ic(xa,{width:ca,height:ua}).load(`${Aa}/transmittance.bin`,t=>{if(this.transmittanceLoading=!1,this.disposed){t.dispose();return}this.transmittanceRetryAt=0,this.transmittanceTexture=t,e()},void 0,t=>{this.transmittanceLoading=!1,this.disposed||(this.transmittanceRetryAt=Date.now()+$a,console.error("[SHADOW] Takram transmittance LUT failed",t),e())}))}ensureIrradiance(e){this.irradianceTexture||this.irradianceLoading||Date.now()<this.irradianceRetryAt||(this.irradianceLoading=!0,Ic(xa,{width:aa,height:sa}).load(`${Aa}/irradiance.bin`,t=>{if(this.irradianceLoading=!1,this.disposed){t.dispose();return}this.irradianceRetryAt=0,this.irradianceTexture=t,this.skyLightProbe.irradianceTexture=t,e()},void 0,t=>{this.irradianceLoading=!1,this.disposed||(this.irradianceRetryAt=Date.now()+$a,console.error("[SHADOW] Takram irradiance LUT failed",t),e())}))}ensureScattering(e){this.scatteringTexture||this.scatteringLoading||Date.now()<this.scatteringRetryAt||(this.scatteringLoading=!0,tf(xa,{width:$f,height:Ff,depth:Hf}).load(`${Aa}/scattering.bin`,t=>{if(this.scatteringLoading=!1,this.disposed){t.dispose();return}this.scatteringRetryAt=0,this.scatteringTexture=t,e()},void 0,t=>{this.scatteringLoading=!1,this.disposed||(this.scatteringRetryAt=Date.now()+$a,console.error("[SHADOW] Takram scattering LUT failed",t),e())}))}evaluate(e,t,r=Fa,i){return k3(e,t,r.useTransmittanceLut?this.transmittanceTexture:null,r.useIrradianceLut?this.skyLightProbe:null,i)}dispose(){var e,t,r;this.disposed||(this.disposed=!0,this.transmittanceLoading=!1,this.irradianceLoading=!1,this.scatteringLoading=!1,this.transmittanceRetryAt=0,this.irradianceRetryAt=0,this.scatteringRetryAt=0,(e=this.transmittanceTexture)==null||e.dispose(),(t=this.irradianceTexture)==null||t.dispose(),(r=this.scatteringTexture)==null||r.dispose(),this.transmittanceTexture=null,this.irradianceTexture=null,this.scatteringTexture=null,this.skyLightProbe.irradianceTexture=null,this.skyLightProbe.sh.zero())}}const Y3="shadow-simulation-atmospheric-sky",G3=2,co="carmaOutputToSrgb",Ha="carmaDisplayExposure",j3=new C;class W3 extends w0{constructor(){super(...arguments);Pe(this,"observerScenePosition",new C);Pe(this,"hasObserverScenePosition",!1);Pe(this,"viewCamera",null)}copyCameraSettings(t){if(super.copyCameraSettings(t),!this.hasObserverScenePosition)return;const r=this.uniforms;if(r.cameraPosition.value.copy(this.observerScenePosition),!this.correctAltitude)return;const i=j3.copy(this.observerScenePosition).applyMatrix4(r.inverseEllipsoidMatrix.value).sub(r.ellipsoidCenter.value);da(i,this.atmosphere.bottomRadius,this.ellipsoid,r.altitudeCorrection.value)}onBeforeRender(t,r,i,o,a,s){super.onBeforeRender(t,r,this.viewCamera??i,o,a,s)}}const q3=n=>{n.uniforms.toneMappingExposure=new D(1),n.uniforms[co]=new D(!1),n.uniforms[Ha]=new D(G3),n.fragmentShader=n.fragmentShader.replace("precision highp sampler3D;",`precision highp sampler3D;

uniform bool ${co};
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
  }`).replace("outputColor.a = 1.0;",`outputColor.rgb *= ${Ha};
  outputColor.a = 1.0;
  if (${co}) {
    // SkyMaterial is raw GLSL: match terrain's AgX on the display target.
    // Offscreen samples stay linear HDR until the shared final composite.
    outputColor.rgb = AgXToneMapping(outputColor.rgb);
    outputColor = carmaLinearToSrgb(outputColor);
  }`)},_4=n=>{const e=new W3({groundAlbedo:n,moon:!1,photometric:!0,side:jl,sun:!0});q3(e),e.depthTest=!1,e.depthWrite=!1;const t=new su;t.setAttribute("position",new Wl([-1,-1,0,3,-1,0,-1,3,0],3));const r=new au(t,e);return r.name=Y3,r.visible=!1,r.frustumCulled=!1,r.renderOrder=-100,r.castShadow=!1,r.receiveShadow=!1,r.onBeforeRender=i=>{e.uniforms.toneMappingExposure.value=i.toneMappingExposure,e.uniforms[co].value=i.getRenderTarget()===null},{mesh:r,update(i,o){return o?wl(i)?!1:(r.visible=!0,e.irradianceTexture=o.irradianceTexture,e.scatteringTexture=o.scatteringTexture,e.transmittanceTexture=o.transmittanceTexture,e.sunDirection.copy(i.directionToSunECEF),e.ellipsoidCenter.copy(i.ellipsoidCenterECEF),e.ellipsoidMatrix.copy(i.ecefToSceneMatrix),!0):(r.visible=!1,!1)},updateViewCamera(i){e.viewCamera=i},updateObserverScenePosition(i){e.observerScenePosition.copy(i),e.hasObserverScenePosition=!0},updateGroundAlbedo(i){e.groundAlbedo.copy(i)},dispose(){t.dispose(),e.dispose()}}},gr={MERCATOR:"mercator",WGS84_ECEF:"wgs84-ecef",LOCAL_SPHERE:"local-sphere"},V3={DHHN2016:"dhhn2016",ELLIPSOIDAL:"ellipsoidal"},v4={TANGENT:"tangent",SPHERE:"sphere",ELLIPSOID:"ellipsoid",QUASIGEOID:"quasigeoid",TERRAIN:"terrain"},w4=n=>n===gr.MERCATOR?0:n===gr.WGS84_ECEF?1:2,E4=n=>n===V3.ELLIPSOIDAL?1:0,Z3=n=>[n[0],n[1]],Ml=(n,e,t,r=new C)=>r.set(t*Math.cos(e)*Math.cos(n),t*Math.cos(e)*Math.sin(n),t*Math.sin(e)),T4=(n,e,t=0)=>{const r=uo(n[0]),i=uo(n[1]),o=du(r,i,0),a=$s.MercatorCoordinate.fromLngLat(Z3(n),0);return{anchorNormalHeightMeters:t,originLngLat:n,originMercator:a,mercatorUnitsPerMeter:a.meterInMercatorCoordinateUnits(),originEcef:o,ecefToEnuRotation:new ql().setFromMatrix4(Vl(o)),sphereRadiusMeters:e,originSphereEcef:Ml(r,i,e)}},b4=(n,e,t)=>{const r=new $s.MercatorCoordinate(n.originMercator.x+e*n.mercatorUnitsPerMeter,n.originMercator.y+t*n.mercatorUnitsPerMeter,0).toLngLat();return[r.lng,r.lat]},B3=(n,e,t,r,i=new C)=>{const o=$s.MercatorCoordinate.fromLngLat([e,t],r);return i.set((o.x-n.originMercator.x)/n.mercatorUnitsPerMeter,(o.z-n.originMercator.z)/n.mercatorUnitsPerMeter,(o.y-n.originMercator.y)/n.mercatorUnitsPerMeter)},X3=(n,e)=>{const t=n.x,r=n.y,i=n.z;return e.set(t,i,-r)},K3=(n,e,t,r,i,o=new C)=>{if(i===gr.MERCATOR)return B3(n,e,t,r,o);const a=uo(e),s=uo(t),c=i===gr.WGS84_ECEF?du(a,s,r,o):Ml(a,s,n.sphereRadiusMeters+r,o);return c.sub(i===gr.WGS84_ECEF?n.originEcef:n.originSphereEcef).applyMatrix3(n.ecefToEnuRotation),X3(c,o)},M4=(n,e,t,r=0)=>K3(n,e,t,r,gr.WGS84_ECEF).y-r;export{y4 as A,B3 as B,Z3 as C,d4 as D,w4 as E,E4 as F,ki as L,a4 as N,v4 as R,V3 as T,gr as a,_4 as b,T4 as c,Bl as d,h4 as e,m4 as f,Xl as g,U3 as h,Yi as i,Gi as j,ji as k,b4 as l,Wi as m,qi as n,Vi as o,K3 as p,l4 as q,M4 as r,Fo as s,vl as t,Kl as u,G3 as v,p4 as w,f4 as x,g4 as y,u4 as z};
