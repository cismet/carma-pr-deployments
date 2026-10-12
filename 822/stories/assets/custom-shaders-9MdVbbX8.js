import{c as Hn}from"./clamp-co6UzHBn.js";import{a as ld}from"./index-DWqP_kth.js";import{g as af,c as Ro}from"./index-CSJjS6Ct.js";import{d as sf,a as fd,T as kn}from"./pi-mVFkAveX.js";import{V as Vn,Q as ud,s as uo}from"./three.module-Bu5QN8-P.js";import{o as cf}from"./camera-local-mercator-fit-oHnI8OLm.js";import"./angles-C8Q03_rB.js";import{n as hd}from"./negative-pi-to-pi-B-FiLZ9M.js";function u(e){return e!=null}function T(e){this.name="DeveloperError",this.message=e;let t;try{throw new Error}catch(n){t=n.stack}this.stack=t}u(Object.create)&&(T.prototype=Object.create(Error.prototype),T.prototype.constructor=T);T.prototype.toString=function(){let e=`${this.name}: ${this.message}`;return u(this.stack)&&(e+=`
${this.stack.toString()}`),e};T.throwInstantiationError=function(){throw new T("This function defines an interface and should not be called directly.")};const h={};h.typeOf={};function dd(e){return`${e} is required, actual value was undefined`}function ko(e,t,n){return`Expected ${n} to be typeof ${t}, actual typeof was ${e}`}h.defined=function(e,t){if(!u(t))throw new T(dd(e))};h.typeOf.func=function(e,t){if(typeof t!="function")throw new T(ko(typeof t,"function",e))};h.typeOf.string=function(e,t){if(typeof t!="string")throw new T(ko(typeof t,"string",e))};h.typeOf.number=function(e,t){if(typeof t!="number")throw new T(ko(typeof t,"number",e))};h.typeOf.number.lessThan=function(e,t,n){if(h.typeOf.number(e,t),t>=n)throw new T(`Expected ${e} to be less than ${n}, actual value was ${t}`)};h.typeOf.number.lessThanOrEquals=function(e,t,n){if(h.typeOf.number(e,t),t>n)throw new T(`Expected ${e} to be less than or equal to ${n}, actual value was ${t}`)};h.typeOf.number.greaterThan=function(e,t,n){if(h.typeOf.number(e,t),t<=n)throw new T(`Expected ${e} to be greater than ${n}, actual value was ${t}`)};h.typeOf.number.greaterThanOrEquals=function(e,t,n){if(h.typeOf.number(e,t),t<n)throw new T(`Expected ${e} to be greater than or equal to ${n}, actual value was ${t}`)};h.typeOf.object=function(e,t){if(typeof t!="object")throw new T(ko(typeof t,"object",e))};h.typeOf.bool=function(e,t){if(typeof t!="boolean")throw new T(ko(typeof t,"boolean",e))};h.typeOf.bigint=function(e,t){if(typeof t!="bigint")throw new T(ko(typeof t,"bigint",e))};h.typeOf.number.equals=function(e,t,n,o){if(h.typeOf.number(e,n),h.typeOf.number(t,o),n!==o)throw new T(`${e} must be equal to ${t}, the actual values are ${n} and ${o}`)};var zn=function(e){e==null&&(e=new Date().getTime()),this.N=624,this.M=397,this.MATRIX_A=2567483615,this.UPPER_MASK=2147483648,this.LOWER_MASK=2147483647,this.mt=new Array(this.N),this.mti=this.N+1,e.constructor==Array?this.init_by_array(e,e.length):this.init_seed(e)};zn.prototype.init_seed=function(e){for(this.mt[0]=e>>>0,this.mti=1;this.mti<this.N;this.mti++){var e=this.mt[this.mti-1]^this.mt[this.mti-1]>>>30;this.mt[this.mti]=(((e&4294901760)>>>16)*1812433253<<16)+(e&65535)*1812433253+this.mti,this.mt[this.mti]>>>=0}};zn.prototype.init_by_array=function(e,t){var n,o,i;for(this.init_seed(19650218),n=1,o=0,i=this.N>t?this.N:t;i;i--){var a=this.mt[n-1]^this.mt[n-1]>>>30;this.mt[n]=(this.mt[n]^(((a&4294901760)>>>16)*1664525<<16)+(a&65535)*1664525)+e[o]+o,this.mt[n]>>>=0,n++,o++,n>=this.N&&(this.mt[0]=this.mt[this.N-1],n=1),o>=t&&(o=0)}for(i=this.N-1;i;i--){var a=this.mt[n-1]^this.mt[n-1]>>>30;this.mt[n]=(this.mt[n]^(((a&4294901760)>>>16)*1566083941<<16)+(a&65535)*1566083941)-n,this.mt[n]>>>=0,n++,n>=this.N&&(this.mt[0]=this.mt[this.N-1],n=1)}this.mt[0]=2147483648};zn.prototype.random_int=function(){var e,t=new Array(0,this.MATRIX_A);if(this.mti>=this.N){var n;for(this.mti==this.N+1&&this.init_seed(5489),n=0;n<this.N-this.M;n++)e=this.mt[n]&this.UPPER_MASK|this.mt[n+1]&this.LOWER_MASK,this.mt[n]=this.mt[n+this.M]^e>>>1^t[e&1];for(;n<this.N-1;n++)e=this.mt[n]&this.UPPER_MASK|this.mt[n+1]&this.LOWER_MASK,this.mt[n]=this.mt[n+(this.M-this.N)]^e>>>1^t[e&1];e=this.mt[this.N-1]&this.UPPER_MASK|this.mt[0]&this.LOWER_MASK,this.mt[this.N-1]=this.mt[this.M-1]^e>>>1^t[e&1],this.mti=0}return e=this.mt[this.mti++],e^=e>>>11,e^=e<<7&2636928640,e^=e<<15&4022730752,e^=e>>>18,e>>>0};zn.prototype.random_int31=function(){return this.random_int()>>>1};zn.prototype.random_incl=function(){return this.random_int()*(1/4294967295)};zn.prototype.random=function(){return this.random_int()*(1/4294967296)};zn.prototype.random_excl=function(){return(this.random_int()+.5)*(1/4294967296)};zn.prototype.random_long=function(){var e=this.random_int()>>>5,t=this.random_int()>>>6;return(e*67108864+t)*(1/9007199254740992)};var md=zn;const lf=af(md),A={};A.EPSILON1=.1;A.EPSILON2=.01;A.EPSILON3=.001;A.EPSILON4=1e-4;A.EPSILON5=1e-5;A.EPSILON6=1e-6;A.EPSILON7=1e-7;A.EPSILON8=1e-8;A.EPSILON9=1e-9;A.EPSILON10=1e-10;A.EPSILON11=1e-11;A.EPSILON12=1e-12;A.EPSILON13=1e-13;A.EPSILON14=1e-14;A.EPSILON15=1e-15;A.EPSILON16=1e-16;A.EPSILON17=1e-17;A.EPSILON18=1e-18;A.EPSILON19=1e-19;A.EPSILON20=1e-20;A.EPSILON21=1e-21;A.GRAVITATIONALPARAMETER=3986004418e5;A.SOLAR_RADIUS=6955e5;A.LUNAR_RADIUS=1737400;A.SIXTY_FOUR_KILOBYTES=64*1024;A.FOUR_GIGABYTES=4*1024*1024*1024;A.sign=Math.sign??function(t){return t=+t,t===0||t!==t?t:t>0?1:-1};A.signNotZero=function(e){return e<0?-1:1};A.toSNorm=function(e,t){return t=t??255,Math.round((A.clamp(e,-1,1)*.5+.5)*t)};A.fromSNorm=function(e,t){return t=t??255,A.clamp(e,0,t)/t*2-1};A.normalize=function(e,t,n){return n=Math.max(n-t,0),n===0?0:A.clamp((e-t)/n,0,1)};A.sinh=Math.sinh??function(t){return(Math.exp(t)-Math.exp(-t))/2};A.cosh=Math.cosh??function(t){return(Math.exp(t)+Math.exp(-t))/2};A.lerp=function(e,t,n){return(1-n)*e+n*t};A.PI=Math.PI;A.ONE_OVER_PI=1/Math.PI;A.PI_OVER_TWO=Math.PI/2;A.PI_OVER_THREE=Math.PI/3;A.PI_OVER_FOUR=Math.PI/4;A.PI_OVER_SIX=Math.PI/6;A.THREE_PI_OVER_TWO=3*Math.PI/2;A.TWO_PI=2*Math.PI;A.ONE_OVER_TWO_PI=1/(2*Math.PI);A.RADIANS_PER_DEGREE=Math.PI/180;A.DEGREES_PER_RADIAN=180/Math.PI;A.RADIANS_PER_ARCSECOND=A.RADIANS_PER_DEGREE/3600;A.toRadians=function(e){if(!u(e))throw new T("degrees is required.");return e*A.RADIANS_PER_DEGREE};A.toDegrees=function(e){if(!u(e))throw new T("radians is required.");return e*A.DEGREES_PER_RADIAN};A.convertLongitudeRange=function(e){if(!u(e))throw new T("angle is required.");const t=A.TWO_PI,n=e-Math.floor(e/t)*t;return n<-Math.PI?n+t:n>=Math.PI?n-t:n};A.clampToLatitudeRange=function(e){if(!u(e))throw new T("angle is required.");return A.clamp(e,-1*A.PI_OVER_TWO,A.PI_OVER_TWO)};A.negativePiToPi=function(e){if(!u(e))throw new T("angle is required.");return e>=-A.PI&&e<=A.PI?e:A.zeroToTwoPi(e+A.PI)-A.PI};A.zeroToTwoPi=function(e){if(!u(e))throw new T("angle is required.");if(e>=0&&e<=A.TWO_PI)return e;const t=A.mod(e,A.TWO_PI);return Math.abs(t)<A.EPSILON14&&Math.abs(e)>A.EPSILON14?A.TWO_PI:t};A.mod=function(e,t){if(!u(e))throw new T("m is required.");if(!u(t))throw new T("n is required.");if(t===0)throw new T("divisor cannot be 0.");return A.sign(e)===A.sign(t)&&Math.abs(e)<Math.abs(t)?e:(e%t+t)%t};A.equalsEpsilon=function(e,t,n,o){if(!u(e))throw new T("left is required.");if(!u(t))throw new T("right is required.");n=n??0,o=o??n;const i=Math.abs(e-t);return i<=o||i<=n*Math.max(Math.abs(e),Math.abs(t))};A.lessThan=function(e,t,n){if(!u(e))throw new T("first is required.");if(!u(t))throw new T("second is required.");if(!u(n))throw new T("absoluteEpsilon is required.");return e-t<-n};A.lessThanOrEquals=function(e,t,n){if(!u(e))throw new T("first is required.");if(!u(t))throw new T("second is required.");if(!u(n))throw new T("absoluteEpsilon is required.");return e-t<n};A.greaterThan=function(e,t,n){if(!u(e))throw new T("first is required.");if(!u(t))throw new T("second is required.");if(!u(n))throw new T("absoluteEpsilon is required.");return e-t>n};A.greaterThanOrEquals=function(e,t,n){if(!u(e))throw new T("first is required.");if(!u(t))throw new T("second is required.");if(!u(n))throw new T("absoluteEpsilon is required.");return e-t>-n};const zi=[1];A.factorial=function(e){if(typeof e!="number"||e<0)throw new T("A number greater than or equal to 0 is required.");const t=zi.length;if(e>=t){let n=zi[t-1];for(let o=t;o<=e;o++){const i=n*o;zi.push(i),n=i}}return zi[e]};A.incrementWrap=function(e,t,n){if(n=n??0,!u(e))throw new T("n is required.");if(t<=n)throw new T("maximumValue must be greater than minimumValue.");return++e,e>t&&(e=n),e};A.isPowerOfTwo=function(e){if(typeof e!="number"||e<0||e>4294967295)throw new T("A number between 0 and (2^32)-1 is required.");return e!==0&&(e&e-1)===0};A.nextPowerOfTwo=function(e){if(typeof e!="number"||e<0||e>2147483648)throw new T("A number between 0 and 2^31 is required.");return--e,e|=e>>1,e|=e>>2,e|=e>>4,e|=e>>8,e|=e>>16,++e,e};A.previousPowerOfTwo=function(e){if(typeof e!="number"||e<0||e>4294967295)throw new T("A number between 0 and (2^32)-1 is required.");return e|=e>>1,e|=e>>2,e|=e>>4,e|=e>>8,e|=e>>16,e|=e>>32,e=(e>>>0)-(e>>>1),e};A.clamp=function(e,t,n){return h.typeOf.number("value",e),h.typeOf.number("min",t),h.typeOf.number("max",n),e<t?t:e>n?n:e};let ff=new lf;A.setRandomNumberSeed=function(e){if(!u(e))throw new T("seed is required.");ff=new lf(e)};A.nextRandomNumber=function(){return ff.random()};A.randomBetween=function(e,t){return A.nextRandomNumber()*(t-e)+e};A.acosClamped=function(e){if(!u(e))throw new T("value is required.");return Math.acos(A.clamp(e,-1,1))};A.asinClamped=function(e){if(!u(e))throw new T("value is required.");return Math.asin(A.clamp(e,-1,1))};A.chordLength=function(e,t){if(!u(e))throw new T("angle is required.");if(!u(t))throw new T("radius is required.");return 2*t*Math.sin(e*.5)};A.logBase=function(e,t){if(!u(e))throw new T("number is required.");if(!u(t))throw new T("base is required.");return Math.log(e)/Math.log(t)};A.cbrt=Math.cbrt??function(t){const n=Math.pow(Math.abs(t),.3333333333333333);return t<0?-n:n};A.log2=Math.log2??function(t){return Math.log(t)*Math.LOG2E};A.fog=function(e,t){const n=e*t;return 1-Math.exp(-(n*n))};A.fastApproximateAtan=function(e){return h.typeOf.number("x",e),e*(-.1784*Math.abs(e)-.0663*e*e+1.0301)};A.fastApproximateAtan2=function(e,t){h.typeOf.number("x",e),h.typeOf.number("y",t);let n,o=Math.abs(e);n=Math.abs(t);const i=Math.max(o,n);n=Math.min(o,n);const a=n/i;if(isNaN(a))throw new T("either x or y must be nonzero");return o=A.fastApproximateAtan(a),o=Math.abs(t)>Math.abs(e)?A.PI_OVER_TWO-o:o,o=e<0?A.PI-o:o,o=t<0?-o:o,o};function l(e,t,n){this.x=e??0,this.y=t??0,this.z=n??0}l.fromSpherical=function(e,t){h.typeOf.object("spherical",e),u(t)||(t=new l);const n=e.clock,o=e.cone,i=e.magnitude??1,a=i*Math.sin(o);return t.x=a*Math.cos(n),t.y=a*Math.sin(n),t.z=i*Math.cos(o),t};l.fromElements=function(e,t,n,o){return u(o)?(o.x=e,o.y=t,o.z=n,o):new l(e,t,n)};l.clone=function(e,t){if(u(e))return u(t)?(t.x=e.x,t.y=e.y,t.z=e.z,t):new l(e.x,e.y,e.z)};l.fromCartesian4=l.clone;l.packedLength=3;l.pack=function(e,t,n){return h.typeOf.object("value",e),h.defined("array",t),n=n??0,t[n++]=e.x,t[n++]=e.y,t[n]=e.z,t};l.unpack=function(e,t,n){return h.defined("array",e),t=t??0,u(n)||(n=new l),n.x=e[t++],n.y=e[t++],n.z=e[t],n};l.packArray=function(e,t){h.defined("array",e);const n=e.length,o=n*3;if(!u(t))t=new Array(o);else{if(!Array.isArray(t)&&t.length!==o)throw new T("If result is a typed array, it must have exactly array.length * 3 elements");t.length!==o&&(t.length=o)}for(let i=0;i<n;++i)l.pack(e[i],t,i*3);return t};l.unpackArray=function(e,t){if(h.defined("array",e),h.typeOf.number.greaterThanOrEquals("array.length",e.length,3),e.length%3!==0)throw new T("array length must be a multiple of 3.");const n=e.length;u(t)?t.length=n/3:t=new Array(n/3);for(let o=0;o<n;o+=3){const i=o/3;t[i]=l.unpack(e,o,t[i])}return t};l.fromArray=l.unpack;l.maximumComponent=function(e){return h.typeOf.object("cartesian",e),Math.max(e.x,e.y,e.z)};l.minimumComponent=function(e){return h.typeOf.object("cartesian",e),Math.min(e.x,e.y,e.z)};l.minimumByComponent=function(e,t,n){return h.typeOf.object("first",e),h.typeOf.object("second",t),h.typeOf.object("result",n),n.x=Math.min(e.x,t.x),n.y=Math.min(e.y,t.y),n.z=Math.min(e.z,t.z),n};l.maximumByComponent=function(e,t,n){return h.typeOf.object("first",e),h.typeOf.object("second",t),h.typeOf.object("result",n),n.x=Math.max(e.x,t.x),n.y=Math.max(e.y,t.y),n.z=Math.max(e.z,t.z),n};l.clamp=function(e,t,n,o){h.typeOf.object("value",e),h.typeOf.object("min",t),h.typeOf.object("max",n),h.typeOf.object("result",o);const i=A.clamp(e.x,t.x,n.x),a=A.clamp(e.y,t.y,n.y),r=A.clamp(e.z,t.z,n.z);return o.x=i,o.y=a,o.z=r,o};l.magnitudeSquared=function(e){return h.typeOf.object("cartesian",e),e.x*e.x+e.y*e.y+e.z*e.z};l.magnitude=function(e){return Math.sqrt(l.magnitudeSquared(e))};const Er=new l;l.distance=function(e,t){return h.typeOf.object("left",e),h.typeOf.object("right",t),l.subtract(e,t,Er),l.magnitude(Er)};l.distanceSquared=function(e,t){return h.typeOf.object("left",e),h.typeOf.object("right",t),l.subtract(e,t,Er),l.magnitudeSquared(Er)};l.normalize=function(e,t){h.typeOf.object("cartesian",e),h.typeOf.object("result",t);const n=l.magnitude(e);if(t.x=e.x/n,t.y=e.y/n,t.z=e.z/n,isNaN(t.x)||isNaN(t.y)||isNaN(t.z))throw new T("normalized result is not a number");return t};l.dot=function(e,t){return h.typeOf.object("left",e),h.typeOf.object("right",t),e.x*t.x+e.y*t.y+e.z*t.z};l.multiplyComponents=function(e,t,n){return h.typeOf.object("left",e),h.typeOf.object("right",t),h.typeOf.object("result",n),n.x=e.x*t.x,n.y=e.y*t.y,n.z=e.z*t.z,n};l.divideComponents=function(e,t,n){return h.typeOf.object("left",e),h.typeOf.object("right",t),h.typeOf.object("result",n),n.x=e.x/t.x,n.y=e.y/t.y,n.z=e.z/t.z,n};l.add=function(e,t,n){return h.typeOf.object("left",e),h.typeOf.object("right",t),h.typeOf.object("result",n),n.x=e.x+t.x,n.y=e.y+t.y,n.z=e.z+t.z,n};l.subtract=function(e,t,n){return h.typeOf.object("left",e),h.typeOf.object("right",t),h.typeOf.object("result",n),n.x=e.x-t.x,n.y=e.y-t.y,n.z=e.z-t.z,n};l.multiplyByScalar=function(e,t,n){return h.typeOf.object("cartesian",e),h.typeOf.number("scalar",t),h.typeOf.object("result",n),n.x=e.x*t,n.y=e.y*t,n.z=e.z*t,n};l.divideByScalar=function(e,t,n){return h.typeOf.object("cartesian",e),h.typeOf.number("scalar",t),h.typeOf.object("result",n),n.x=e.x/t,n.y=e.y/t,n.z=e.z/t,n};l.negate=function(e,t){return h.typeOf.object("cartesian",e),h.typeOf.object("result",t),t.x=-e.x,t.y=-e.y,t.z=-e.z,t};l.abs=function(e,t){return h.typeOf.object("cartesian",e),h.typeOf.object("result",t),t.x=Math.abs(e.x),t.y=Math.abs(e.y),t.z=Math.abs(e.z),t};const ic=new l;l.lerp=function(e,t,n,o){return h.typeOf.object("start",e),h.typeOf.object("end",t),h.typeOf.number("t",n),h.typeOf.object("result",o),l.multiplyByScalar(t,n,ic),o=l.multiplyByScalar(e,1-n,o),l.add(ic,o,o)};const Ii=new l,Yr=new l;l.angleBetween=function(e,t){h.typeOf.object("left",e),h.typeOf.object("right",t),l.normalize(e,Ii),l.normalize(t,Yr);const n=l.dot(Ii,Yr),o=l.magnitude(l.cross(Ii,Yr,Ii));return Math.atan2(o,n)};const pd=new l;l.mostOrthogonalAxis=function(e,t){h.typeOf.object("cartesian",e),h.typeOf.object("result",t);const n=l.normalize(e,pd);return l.abs(n,n),n.x<=n.y?n.x<=n.z?t=l.clone(l.UNIT_X,t):t=l.clone(l.UNIT_Z,t):n.y<=n.z?t=l.clone(l.UNIT_Y,t):t=l.clone(l.UNIT_Z,t),t};l.projectVector=function(e,t,n){h.defined("a",e),h.defined("b",t),h.defined("result",n);const o=l.dot(e,t)/l.dot(t,t);return l.multiplyByScalar(t,o,n)};l.equals=function(e,t){return e===t||u(e)&&u(t)&&e.x===t.x&&e.y===t.y&&e.z===t.z};l.equalsArray=function(e,t,n){return e.x===t[n]&&e.y===t[n+1]&&e.z===t[n+2]};l.equalsEpsilon=function(e,t,n,o){return e===t||u(e)&&u(t)&&A.equalsEpsilon(e.x,t.x,n,o)&&A.equalsEpsilon(e.y,t.y,n,o)&&A.equalsEpsilon(e.z,t.z,n,o)};l.cross=function(e,t,n){h.typeOf.object("left",e),h.typeOf.object("right",t),h.typeOf.object("result",n);const o=e.x,i=e.y,a=e.z,r=t.x,s=t.y,c=t.z,f=i*c-a*s,d=a*r-o*c,m=o*s-i*r;return n.x=f,n.y=d,n.z=m,n};l.midpoint=function(e,t,n){return h.typeOf.object("left",e),h.typeOf.object("right",t),h.typeOf.object("result",n),n.x=(e.x+t.x)*.5,n.y=(e.y+t.y)*.5,n.z=(e.z+t.z)*.5,n};l.fromDegrees=function(e,t,n,o,i){return h.typeOf.number("longitude",e),h.typeOf.number("latitude",t),e=A.toRadians(e),t=A.toRadians(t),l.fromRadians(e,t,n,o,i)};let Bt=new l,po=new l;l._ellipsoidRadiiSquared=new l(6378137*6378137,6378137*6378137,6356752314245179e-9*6356752314245179e-9);l.fromRadians=function(e,t,n,o,i){h.typeOf.number("longitude",e),h.typeOf.number("latitude",t),n=n??0;const a=u(o)?o.radiiSquared:l._ellipsoidRadiiSquared,r=Math.cos(t);Bt.x=r*Math.cos(e),Bt.y=r*Math.sin(e),Bt.z=Math.sin(t),Bt=l.normalize(Bt,Bt),l.multiplyComponents(a,Bt,po);const s=Math.sqrt(l.dot(Bt,po));return po=l.divideByScalar(po,s,po),Bt=l.multiplyByScalar(Bt,n,Bt),u(i)||(i=new l),l.add(po,Bt,i)};l.fromDegreesArray=function(e,t,n){if(h.defined("coordinates",e),e.length<2||e.length%2!==0)throw new T("the number of coordinates must be a multiple of 2 and at least 2");const o=e.length;u(n)?n.length=o/2:n=new Array(o/2);for(let i=0;i<o;i+=2){const a=e[i],r=e[i+1],s=i/2;n[s]=l.fromDegrees(a,r,0,t,n[s])}return n};l.fromRadiansArray=function(e,t,n){if(h.defined("coordinates",e),e.length<2||e.length%2!==0)throw new T("the number of coordinates must be a multiple of 2 and at least 2");const o=e.length;u(n)?n.length=o/2:n=new Array(o/2);for(let i=0;i<o;i+=2){const a=e[i],r=e[i+1],s=i/2;n[s]=l.fromRadians(a,r,0,t,n[s])}return n};l.fromDegreesArrayHeights=function(e,t,n){if(h.defined("coordinates",e),e.length<3||e.length%3!==0)throw new T("the number of coordinates must be a multiple of 3 and at least 3");const o=e.length;u(n)?n.length=o/3:n=new Array(o/3);for(let i=0;i<o;i+=3){const a=e[i],r=e[i+1],s=e[i+2],c=i/3;n[c]=l.fromDegrees(a,r,s,t,n[c])}return n};l.fromRadiansArrayHeights=function(e,t,n){if(h.defined("coordinates",e),e.length<3||e.length%3!==0)throw new T("the number of coordinates must be a multiple of 3 and at least 3");const o=e.length;u(n)?n.length=o/3:n=new Array(o/3);for(let i=0;i<o;i+=3){const a=e[i],r=e[i+1],s=e[i+2],c=i/3;n[c]=l.fromRadians(a,r,s,t,n[c])}return n};l.ZERO=Object.freeze(new l(0,0,0));l.ONE=Object.freeze(new l(1,1,1));l.UNIT_X=Object.freeze(new l(1,0,0));l.UNIT_Y=Object.freeze(new l(0,1,0));l.UNIT_Z=Object.freeze(new l(0,0,1));l.prototype.clone=function(e){return l.clone(this,e)};l.prototype.equals=function(e){return l.equals(this,e)};l.prototype.equalsEpsilon=function(e,t,n){return l.equalsEpsilon(this,e,t,n)};l.prototype.toString=function(){return`(${this.x}, ${this.y}, ${this.z})`};const _d=new l,gd=new l;function uf(e,t,n,o,i){if(!u(e))throw new T("cartesian is required.");if(!u(t))throw new T("oneOverRadii is required.");if(!u(n))throw new T("oneOverRadiiSquared is required.");if(!u(o))throw new T("centerToleranceSquared is required.");const a=e.x,r=e.y,s=e.z,c=t.x,f=t.y,d=t.z,m=a*a*c*c,p=r*r*f*f,_=s*s*d*d,g=m+p+_,b=Math.sqrt(1/g),E=l.multiplyByScalar(e,b,_d);if(g<o)return isFinite(b)?l.clone(E,i):void 0;const v=n.x,C=n.y,x=n.z,R=gd;R.x=E.x*v*2,R.y=E.y*C*2,R.z=E.z*x*2;let N=(1-b)*l.magnitude(e)/(.5*l.magnitude(R)),F=0,q,D,B,L,G,Y,y,w,S,I,k;do{N-=F,B=1/(1+N*v),L=1/(1+N*C),G=1/(1+N*x),Y=B*B,y=L*L,w=G*G,S=Y*B,I=y*L,k=w*G,q=m*Y+p*y+_*w-1,D=m*S*v+p*I*C+_*k*x;const V=-2*D;F=q/V}while(Math.abs(q)>A.EPSILON12);return u(i)?(i.x=a*B,i.y=r*L,i.z=s*G,i):new l(a*B,r*L,s*G)}function ne(e,t,n){this.longitude=e??0,this.latitude=t??0,this.height=n??0}ne.fromRadians=function(e,t,n,o){return h.typeOf.number("longitude",e),h.typeOf.number("latitude",t),n=n??0,u(o)?(o.longitude=e,o.latitude=t,o.height=n,o):new ne(e,t,n)};ne.fromDegrees=function(e,t,n,o){return h.typeOf.number("longitude",e),h.typeOf.number("latitude",t),e=A.toRadians(e),t=A.toRadians(t),ne.fromRadians(e,t,n,o)};const yd=new l,bd=new l,Td=new l;ne._ellipsoidOneOverRadii=new l(1/6378137,1/6378137,1/6356752314245179e-9);ne._ellipsoidOneOverRadiiSquared=new l(1/(6378137*6378137),1/(6378137*6378137),1/(6356752314245179e-9*6356752314245179e-9));ne._ellipsoidCenterToleranceSquared=A.EPSILON1;ne.fromCartesian=function(e,t,n){const o=u(t)?t.oneOverRadii:ne._ellipsoidOneOverRadii,i=u(t)?t.oneOverRadiiSquared:ne._ellipsoidOneOverRadiiSquared,a=u(t)?t._centerToleranceSquared:ne._ellipsoidCenterToleranceSquared,r=uf(e,o,i,a,bd);if(!u(r))return;let s=l.multiplyComponents(r,i,yd);s=l.normalize(s,s);const c=l.subtract(e,r,Td),f=Math.atan2(s.y,s.x),d=Math.asin(s.z),m=A.sign(l.dot(c,e))*l.magnitude(c);return u(n)?(n.longitude=f,n.latitude=d,n.height=m,n):new ne(f,d,m)};ne.toCartesian=function(e,t,n){return h.defined("cartographic",e),l.fromRadians(e.longitude,e.latitude,e.height,t,n)};ne.clone=function(e,t){if(u(e))return u(t)?(t.longitude=e.longitude,t.latitude=e.latitude,t.height=e.height,t):new ne(e.longitude,e.latitude,e.height)};ne.equals=function(e,t){return e===t||u(e)&&u(t)&&e.longitude===t.longitude&&e.latitude===t.latitude&&e.height===t.height};ne.equalsEpsilon=function(e,t,n){return n=n??0,e===t||u(e)&&u(t)&&Math.abs(e.longitude-t.longitude)<=n&&Math.abs(e.latitude-t.latitude)<=n&&Math.abs(e.height-t.height)<=n};ne.ZERO=Object.freeze(new ne(0,0,0));ne.prototype.clone=function(e){return ne.clone(this,e)};ne.prototype.equals=function(e){return ne.equals(this,e)};ne.prototype.equalsEpsilon=function(e,t){return ne.equalsEpsilon(this,e,t)};ne.prototype.toString=function(){return`(${this.longitude}, ${this.latitude}, ${this.height})`};function U(e,t){this.x=e??0,this.y=t??0}U.fromElements=function(e,t,n){return u(n)?(n.x=e,n.y=t,n):new U(e,t)};U.clone=function(e,t){if(u(e))return u(t)?(t.x=e.x,t.y=e.y,t):new U(e.x,e.y)};U.fromCartesian3=U.clone;U.fromCartesian4=U.clone;U.packedLength=2;U.pack=function(e,t,n){return h.typeOf.object("value",e),h.defined("array",t),n=n??0,t[n++]=e.x,t[n]=e.y,t};U.unpack=function(e,t,n){return h.defined("array",e),t=t??0,u(n)||(n=new U),n.x=e[t++],n.y=e[t],n};U.packArray=function(e,t){h.defined("array",e);const n=e.length,o=n*2;if(!u(t))t=new Array(o);else{if(!Array.isArray(t)&&t.length!==o)throw new T("If result is a typed array, it must have exactly array.length * 2 elements");t.length!==o&&(t.length=o)}for(let i=0;i<n;++i)U.pack(e[i],t,i*2);return t};U.unpackArray=function(e,t){if(h.defined("array",e),h.typeOf.number.greaterThanOrEquals("array.length",e.length,2),e.length%2!==0)throw new T("array length must be a multiple of 2.");const n=e.length;u(t)?t.length=n/2:t=new Array(n/2);for(let o=0;o<n;o+=2){const i=o/2;t[i]=U.unpack(e,o,t[i])}return t};U.fromArray=U.unpack;U.maximumComponent=function(e){return h.typeOf.object("cartesian",e),Math.max(e.x,e.y)};U.minimumComponent=function(e){return h.typeOf.object("cartesian",e),Math.min(e.x,e.y)};U.minimumByComponent=function(e,t,n){return h.typeOf.object("first",e),h.typeOf.object("second",t),h.typeOf.object("result",n),n.x=Math.min(e.x,t.x),n.y=Math.min(e.y,t.y),n};U.maximumByComponent=function(e,t,n){return h.typeOf.object("first",e),h.typeOf.object("second",t),h.typeOf.object("result",n),n.x=Math.max(e.x,t.x),n.y=Math.max(e.y,t.y),n};U.clamp=function(e,t,n,o){h.typeOf.object("value",e),h.typeOf.object("min",t),h.typeOf.object("max",n),h.typeOf.object("result",o);const i=A.clamp(e.x,t.x,n.x),a=A.clamp(e.y,t.y,n.y);return o.x=i,o.y=a,o};U.magnitudeSquared=function(e){return h.typeOf.object("cartesian",e),e.x*e.x+e.y*e.y};U.magnitude=function(e){return Math.sqrt(U.magnitudeSquared(e))};const wr=new U;U.distance=function(e,t){return h.typeOf.object("left",e),h.typeOf.object("right",t),U.subtract(e,t,wr),U.magnitude(wr)};U.distanceSquared=function(e,t){return h.typeOf.object("left",e),h.typeOf.object("right",t),U.subtract(e,t,wr),U.magnitudeSquared(wr)};U.normalize=function(e,t){h.typeOf.object("cartesian",e),h.typeOf.object("result",t);const n=U.magnitude(e);if(t.x=e.x/n,t.y=e.y/n,isNaN(t.x)||isNaN(t.y))throw new T("normalized result is not a number");return t};U.dot=function(e,t){return h.typeOf.object("left",e),h.typeOf.object("right",t),e.x*t.x+e.y*t.y};U.cross=function(e,t){return h.typeOf.object("left",e),h.typeOf.object("right",t),e.x*t.y-e.y*t.x};U.multiplyComponents=function(e,t,n){return h.typeOf.object("left",e),h.typeOf.object("right",t),h.typeOf.object("result",n),n.x=e.x*t.x,n.y=e.y*t.y,n};U.divideComponents=function(e,t,n){return h.typeOf.object("left",e),h.typeOf.object("right",t),h.typeOf.object("result",n),n.x=e.x/t.x,n.y=e.y/t.y,n};U.add=function(e,t,n){return h.typeOf.object("left",e),h.typeOf.object("right",t),h.typeOf.object("result",n),n.x=e.x+t.x,n.y=e.y+t.y,n};U.subtract=function(e,t,n){return h.typeOf.object("left",e),h.typeOf.object("right",t),h.typeOf.object("result",n),n.x=e.x-t.x,n.y=e.y-t.y,n};U.multiplyByScalar=function(e,t,n){return h.typeOf.object("cartesian",e),h.typeOf.number("scalar",t),h.typeOf.object("result",n),n.x=e.x*t,n.y=e.y*t,n};U.divideByScalar=function(e,t,n){return h.typeOf.object("cartesian",e),h.typeOf.number("scalar",t),h.typeOf.object("result",n),n.x=e.x/t,n.y=e.y/t,n};U.negate=function(e,t){return h.typeOf.object("cartesian",e),h.typeOf.object("result",t),t.x=-e.x,t.y=-e.y,t};U.abs=function(e,t){return h.typeOf.object("cartesian",e),h.typeOf.object("result",t),t.x=Math.abs(e.x),t.y=Math.abs(e.y),t};const rc=new U;U.lerp=function(e,t,n,o){return h.typeOf.object("start",e),h.typeOf.object("end",t),h.typeOf.number("t",n),h.typeOf.object("result",o),U.multiplyByScalar(t,n,rc),o=U.multiplyByScalar(e,1-n,o),U.add(rc,o,o)};const ac=new U,sc=new U;U.angleBetween=function(e,t){return h.typeOf.object("left",e),h.typeOf.object("right",t),U.normalize(e,ac),U.normalize(t,sc),A.acosClamped(U.dot(ac,sc))};const Ed=new U;U.mostOrthogonalAxis=function(e,t){h.typeOf.object("cartesian",e),h.typeOf.object("result",t);const n=U.normalize(e,Ed);return U.abs(n,n),n.x<=n.y?t=U.clone(U.UNIT_X,t):t=U.clone(U.UNIT_Y,t),t};U.equals=function(e,t){return e===t||u(e)&&u(t)&&e.x===t.x&&e.y===t.y};U.equalsArray=function(e,t,n){return e.x===t[n]&&e.y===t[n+1]};U.equalsEpsilon=function(e,t,n,o){return e===t||u(e)&&u(t)&&A.equalsEpsilon(e.x,t.x,n,o)&&A.equalsEpsilon(e.y,t.y,n,o)};U.ZERO=Object.freeze(new U(0,0));U.ONE=Object.freeze(new U(1,1));U.UNIT_X=Object.freeze(new U(1,0));U.UNIT_Y=Object.freeze(new U(0,1));U.prototype.clone=function(e){return U.clone(this,e)};U.prototype.equals=function(e){return U.equals(this,e)};U.prototype.equalsEpsilon=function(e,t,n){return U.equalsEpsilon(this,e,t,n)};U.prototype.toString=function(){return`(${this.x}, ${this.y})`};function hf(e,t,n,o){t=t??0,n=n??0,o=o??0,h.typeOf.number.greaterThanOrEquals("x",t,0),h.typeOf.number.greaterThanOrEquals("y",n,0),h.typeOf.number.greaterThanOrEquals("z",o,0),e._radii=new l(t,n,o),e._radiiSquared=new l(t*t,n*n,o*o),e._radiiToTheFourth=new l(t*t*t*t,n*n*n*n,o*o*o*o),e._oneOverRadii=new l(t===0?0:1/t,n===0?0:1/n,o===0?0:1/o),e._oneOverRadiiSquared=new l(t===0?0:1/(t*t),n===0?0:1/(n*n),o===0?0:1/(o*o)),e._minimumRadius=Math.min(t,n,o),e._maximumRadius=Math.max(t,n,o),e._centerToleranceSquared=A.EPSILON1,e._radiiSquared.z!==0&&(e._squaredXOverSquaredZ=e._radiiSquared.x/e._radiiSquared.z)}function ae(e,t,n){this._radii=void 0,this._radiiSquared=void 0,this._radiiToTheFourth=void 0,this._oneOverRadii=void 0,this._oneOverRadiiSquared=void 0,this._minimumRadius=void 0,this._maximumRadius=void 0,this._centerToleranceSquared=void 0,this._squaredXOverSquaredZ=void 0,hf(this,e,t,n)}Object.defineProperties(ae.prototype,{radii:{get:function(){return this._radii}},radiiSquared:{get:function(){return this._radiiSquared}},radiiToTheFourth:{get:function(){return this._radiiToTheFourth}},oneOverRadii:{get:function(){return this._oneOverRadii}},oneOverRadiiSquared:{get:function(){return this._oneOverRadiiSquared}},minimumRadius:{get:function(){return this._minimumRadius}},maximumRadius:{get:function(){return this._maximumRadius}}});ae.clone=function(e,t){if(!u(e))return;const n=e._radii;return u(t)?(l.clone(n,t._radii),l.clone(e._radiiSquared,t._radiiSquared),l.clone(e._radiiToTheFourth,t._radiiToTheFourth),l.clone(e._oneOverRadii,t._oneOverRadii),l.clone(e._oneOverRadiiSquared,t._oneOverRadiiSquared),t._minimumRadius=e._minimumRadius,t._maximumRadius=e._maximumRadius,t._centerToleranceSquared=e._centerToleranceSquared,t):new ae(n.x,n.y,n.z)};ae.fromCartesian3=function(e,t){return u(t)||(t=new ae),u(e)&&hf(t,e.x,e.y,e.z),t};ae.WGS84=Object.freeze(new ae(6378137,6378137,6356752314245179e-9));ae.UNIT_SPHERE=Object.freeze(new ae(1,1,1));ae.MOON=Object.freeze(new ae(A.LUNAR_RADIUS,A.LUNAR_RADIUS,A.LUNAR_RADIUS));ae.MARS=Object.freeze(new ae(3396190,3396190,3376200));ae._default=ae.WGS84;Object.defineProperties(ae,{default:{get:function(){return ae._default},set:function(e){h.typeOf.object("value",e),ae._default=e,l._ellipsoidRadiiSquared=e.radiiSquared,ne._ellipsoidOneOverRadii=e.oneOverRadii,ne._ellipsoidOneOverRadiiSquared=e.oneOverRadiiSquared,ne._ellipsoidCenterToleranceSquared=e._centerToleranceSquared}}});ae.prototype.clone=function(e){return ae.clone(this,e)};ae.packedLength=l.packedLength;ae.pack=function(e,t,n){return h.typeOf.object("value",e),h.defined("array",t),n=n??0,l.pack(e._radii,t,n),t};ae.unpack=function(e,t,n){h.defined("array",e),t=t??0;const o=l.unpack(e,t);return ae.fromCartesian3(o,n)};ae.prototype.geocentricSurfaceNormal=l.normalize;ae.prototype.geodeticSurfaceNormalCartographic=function(e,t){h.typeOf.object("cartographic",e);const n=e.longitude,o=e.latitude,i=Math.cos(o),a=i*Math.cos(n),r=i*Math.sin(n),s=Math.sin(o);return u(t)||(t=new l),t.x=a,t.y=r,t.z=s,l.normalize(t,t)};ae.prototype.geodeticSurfaceNormal=function(e,t){if(h.typeOf.object("cartesian",e),isNaN(e.x)||isNaN(e.y)||isNaN(e.z))throw new T("cartesian has a NaN component");if(!l.equalsEpsilon(e,l.ZERO,A.EPSILON14))return u(t)||(t=new l),t=l.multiplyComponents(e,this._oneOverRadiiSquared,t),l.normalize(t,t)};const wd=new l,Ad=new l;ae.prototype.cartographicToCartesian=function(e,t){const n=wd,o=Ad;this.geodeticSurfaceNormalCartographic(e,n),l.multiplyComponents(this._radiiSquared,n,o);const i=Math.sqrt(l.dot(n,o));return l.divideByScalar(o,i,o),l.multiplyByScalar(n,e.height,n),u(t)||(t=new l),l.add(o,n,t)};ae.prototype.cartographicArrayToCartesianArray=function(e,t){h.defined("cartographics",e);const n=e.length;u(t)?t.length=n:t=new Array(n);for(let o=0;o<n;o++)t[o]=this.cartographicToCartesian(e[o],t[o]);return t};const Od=new l,Sd=new l,xd=new l;ae.prototype.cartesianToCartographic=function(e,t){const n=this.scaleToGeodeticSurface(e,Sd);if(!u(n))return;const o=this.geodeticSurfaceNormal(n,Od),i=l.subtract(e,n,xd),a=Math.atan2(o.y,o.x),r=Math.asin(o.z),s=A.sign(l.dot(i,e))*l.magnitude(i);return u(t)?(t.longitude=a,t.latitude=r,t.height=s,t):new ne(a,r,s)};ae.prototype.cartesianArrayToCartographicArray=function(e,t){h.defined("cartesians",e);const n=e.length;u(t)?t.length=n:t=new Array(n);for(let o=0;o<n;++o)t[o]=this.cartesianToCartographic(e[o],t[o]);return t};ae.prototype.scaleToGeodeticSurface=function(e,t){return uf(e,this._oneOverRadii,this._oneOverRadiiSquared,this._centerToleranceSquared,t)};ae.prototype.scaleToGeocentricSurface=function(e,t){h.typeOf.object("cartesian",e),u(t)||(t=new l);const n=e.x,o=e.y,i=e.z,a=this._oneOverRadiiSquared,r=1/Math.sqrt(n*n*a.x+o*o*a.y+i*i*a.z);return l.multiplyByScalar(e,r,t)};ae.prototype.transformPositionToScaledSpace=function(e,t){return u(t)||(t=new l),l.multiplyComponents(e,this._oneOverRadii,t)};ae.prototype.transformPositionFromScaledSpace=function(e,t){return u(t)||(t=new l),l.multiplyComponents(e,this._radii,t)};ae.prototype.equals=function(e){return this===e||u(e)&&l.equals(this._radii,e._radii)};ae.prototype.toString=function(){return this._radii.toString()};ae.prototype.getSurfaceNormalIntersectionWithZAxis=function(e,t,n){if(h.typeOf.object("position",e),!A.equalsEpsilon(this._radii.x,this._radii.y,A.EPSILON15))throw new T("Ellipsoid must be an ellipsoid of revolution (radii.x == radii.y)");h.typeOf.number.greaterThan("Ellipsoid.radii.z",this._radii.z,0),t=t??0;const o=this._squaredXOverSquaredZ;if(u(n)||(n=new l),n.x=0,n.y=0,n.z=e.z*(1-o),!(Math.abs(n.z)>=this._radii.z-t))return n};const Cd=new l;ae.prototype.getLocalCurvature=function(e,t){h.typeOf.object("surfacePosition",e),u(t)||(t=new U);const n=this.getSurfaceNormalIntersectionWithZAxis(e,0,Cd),o=l.distance(e,n),i=this.minimumRadius*o/this.maximumRadius**2,a=o*i**2;return U.fromElements(1/o,1/a,t)};const vd=[.14887433898163,.43339539412925,.67940956829902,.86506336668898,.97390652851717,0],Rd=[.29552422471475,.26926671930999,.21908636251598,.14945134915058,.066671344308684,0];function cc(e,t,n){h.typeOf.number("a",e),h.typeOf.number("b",t),h.typeOf.func("func",n);const o=.5*(t+e),i=.5*(t-e);let a=0;for(let r=0;r<5;r++){const s=i*vd[r];a+=Rd[r]*(n(o+s)+n(o-s))}return a*=i,a}ae.prototype.surfaceArea=function(e){h.typeOf.object("rectangle",e);const t=e.west;let n=e.east;const o=e.south,i=e.north;for(;n<t;)n+=A.TWO_PI;const a=this._radiiSquared,r=a.x,s=a.y,c=a.z,f=r*s;return cc(o,i,function(d){const m=Math.cos(d),p=Math.sin(d);return Math.cos(d)*cc(t,n,function(_){const g=Math.cos(_),b=Math.sin(_);return Math.sqrt(f*p*p+c*(s*g*g+r*b*b)*m*m)})})};function In(e){this._ellipsoid=e??ae.default,this._semimajorAxis=this._ellipsoid.maximumRadius,this._oneOverSemimajorAxis=1/this._semimajorAxis}Object.defineProperties(In.prototype,{ellipsoid:{get:function(){return this._ellipsoid}}});In.prototype.project=function(e,t){const n=this._semimajorAxis,o=e.longitude*n,i=e.latitude*n,a=e.height;return u(t)?(t.x=o,t.y=i,t.z=a,t):new l(o,i,a)};In.prototype.unproject=function(e,t){if(!u(e))throw new T("cartesian is required");const n=this._oneOverSemimajorAxis,o=e.x*n,i=e.y*n,a=e.z;return u(t)?(t.longitude=o,t.latitude=i,t.height=a,t):new ne(o,i,a)};const zd={OUTSIDE:-1,INTERSECTING:0,INSIDE:1},Ke=Object.freeze(zd);function oo(e,t){this.start=e??0,this.stop=t??0}function P(e,t,n,o,i,a,r,s,c){this[0]=e??0,this[1]=o??0,this[2]=r??0,this[3]=t??0,this[4]=i??0,this[5]=s??0,this[6]=n??0,this[7]=a??0,this[8]=c??0}P.packedLength=9;P.pack=function(e,t,n){return h.typeOf.object("value",e),h.defined("array",t),n=n??0,t[n++]=e[0],t[n++]=e[1],t[n++]=e[2],t[n++]=e[3],t[n++]=e[4],t[n++]=e[5],t[n++]=e[6],t[n++]=e[7],t[n++]=e[8],t};P.unpack=function(e,t,n){return h.defined("array",e),t=t??0,u(n)||(n=new P),n[0]=e[t++],n[1]=e[t++],n[2]=e[t++],n[3]=e[t++],n[4]=e[t++],n[5]=e[t++],n[6]=e[t++],n[7]=e[t++],n[8]=e[t++],n};P.packArray=function(e,t){h.defined("array",e);const n=e.length,o=n*9;if(!u(t))t=new Array(o);else{if(!Array.isArray(t)&&t.length!==o)throw new T("If result is a typed array, it must have exactly array.length * 9 elements");t.length!==o&&(t.length=o)}for(let i=0;i<n;++i)P.pack(e[i],t,i*9);return t};P.unpackArray=function(e,t){if(h.defined("array",e),h.typeOf.number.greaterThanOrEquals("array.length",e.length,9),e.length%9!==0)throw new T("array length must be a multiple of 9.");const n=e.length;u(t)?t.length=n/9:t=new Array(n/9);for(let o=0;o<n;o+=9){const i=o/9;t[i]=P.unpack(e,o,t[i])}return t};P.clone=function(e,t){if(u(e))return u(t)?(t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t):new P(e[0],e[3],e[6],e[1],e[4],e[7],e[2],e[5],e[8])};P.fromArray=P.unpack;P.fromColumnMajorArray=function(e,t){return h.defined("values",e),P.clone(e,t)};P.fromRowMajorArray=function(e,t){return h.defined("values",e),u(t)?(t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],t):new P(e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8])};P.fromQuaternion=function(e,t){h.typeOf.object("quaternion",e);const n=e.x*e.x,o=e.x*e.y,i=e.x*e.z,a=e.x*e.w,r=e.y*e.y,s=e.y*e.z,c=e.y*e.w,f=e.z*e.z,d=e.z*e.w,m=e.w*e.w,p=n-r-f+m,_=2*(o-d),g=2*(i+c),b=2*(o+d),E=-n+r-f+m,v=2*(s-a),C=2*(i-c),x=2*(s+a),R=-n-r+f+m;return u(t)?(t[0]=p,t[1]=b,t[2]=C,t[3]=_,t[4]=E,t[5]=x,t[6]=g,t[7]=v,t[8]=R,t):new P(p,_,g,b,E,v,C,x,R)};P.fromHeadingPitchRoll=function(e,t){h.typeOf.object("headingPitchRoll",e);const n=Math.cos(-e.pitch),o=Math.cos(-e.heading),i=Math.cos(e.roll),a=Math.sin(-e.pitch),r=Math.sin(-e.heading),s=Math.sin(e.roll),c=n*o,f=-i*r+s*a*o,d=s*r+i*a*o,m=n*r,p=i*o+s*a*r,_=-s*o+i*a*r,g=-a,b=s*n,E=i*n;return u(t)?(t[0]=c,t[1]=m,t[2]=g,t[3]=f,t[4]=p,t[5]=b,t[6]=d,t[7]=_,t[8]=E,t):new P(c,f,d,m,p,_,g,b,E)};P.fromScale=function(e,t){return h.typeOf.object("scale",e),u(t)?(t[0]=e.x,t[1]=0,t[2]=0,t[3]=0,t[4]=e.y,t[5]=0,t[6]=0,t[7]=0,t[8]=e.z,t):new P(e.x,0,0,0,e.y,0,0,0,e.z)};P.fromUniformScale=function(e,t){return h.typeOf.number("scale",e),u(t)?(t[0]=e,t[1]=0,t[2]=0,t[3]=0,t[4]=e,t[5]=0,t[6]=0,t[7]=0,t[8]=e,t):new P(e,0,0,0,e,0,0,0,e)};P.fromCrossProduct=function(e,t){return h.typeOf.object("vector",e),u(t)?(t[0]=0,t[1]=e.z,t[2]=-e.y,t[3]=-e.z,t[4]=0,t[5]=e.x,t[6]=e.y,t[7]=-e.x,t[8]=0,t):new P(0,-e.z,e.y,e.z,0,-e.x,-e.y,e.x,0)};P.fromRotationX=function(e,t){h.typeOf.number("angle",e);const n=Math.cos(e),o=Math.sin(e);return u(t)?(t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=n,t[5]=o,t[6]=0,t[7]=-o,t[8]=n,t):new P(1,0,0,0,n,-o,0,o,n)};P.fromRotationY=function(e,t){h.typeOf.number("angle",e);const n=Math.cos(e),o=Math.sin(e);return u(t)?(t[0]=n,t[1]=0,t[2]=-o,t[3]=0,t[4]=1,t[5]=0,t[6]=o,t[7]=0,t[8]=n,t):new P(n,0,o,0,1,0,-o,0,n)};P.fromRotationZ=function(e,t){h.typeOf.number("angle",e);const n=Math.cos(e),o=Math.sin(e);return u(t)?(t[0]=n,t[1]=o,t[2]=0,t[3]=-o,t[4]=n,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t):new P(n,-o,0,o,n,0,0,0,1)};P.toArray=function(e,t){return h.typeOf.object("matrix",e),u(t)?(t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t):[e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8]]};P.getElementIndex=function(e,t){return h.typeOf.number.greaterThanOrEquals("row",t,0),h.typeOf.number.lessThanOrEquals("row",t,2),h.typeOf.number.greaterThanOrEquals("column",e,0),h.typeOf.number.lessThanOrEquals("column",e,2),e*3+t};P.getColumn=function(e,t,n){h.typeOf.object("matrix",e),h.typeOf.number.greaterThanOrEquals("index",t,0),h.typeOf.number.lessThanOrEquals("index",t,2),h.typeOf.object("result",n);const o=t*3,i=e[o],a=e[o+1],r=e[o+2];return n.x=i,n.y=a,n.z=r,n};P.setColumn=function(e,t,n,o){h.typeOf.object("matrix",e),h.typeOf.number.greaterThanOrEquals("index",t,0),h.typeOf.number.lessThanOrEquals("index",t,2),h.typeOf.object("cartesian",n),h.typeOf.object("result",o),o=P.clone(e,o);const i=t*3;return o[i]=n.x,o[i+1]=n.y,o[i+2]=n.z,o};P.getRow=function(e,t,n){h.typeOf.object("matrix",e),h.typeOf.number.greaterThanOrEquals("index",t,0),h.typeOf.number.lessThanOrEquals("index",t,2),h.typeOf.object("result",n);const o=e[t],i=e[t+3],a=e[t+6];return n.x=o,n.y=i,n.z=a,n};P.setRow=function(e,t,n,o){return h.typeOf.object("matrix",e),h.typeOf.number.greaterThanOrEquals("index",t,0),h.typeOf.number.lessThanOrEquals("index",t,2),h.typeOf.object("cartesian",n),h.typeOf.object("result",o),o=P.clone(e,o),o[t]=n.x,o[t+3]=n.y,o[t+6]=n.z,o};const Id=new l;P.setScale=function(e,t,n){h.typeOf.object("matrix",e),h.typeOf.object("scale",t),h.typeOf.object("result",n);const o=P.getScale(e,Id),i=t.x/o.x,a=t.y/o.y,r=t.z/o.z;return n[0]=e[0]*i,n[1]=e[1]*i,n[2]=e[2]*i,n[3]=e[3]*a,n[4]=e[4]*a,n[5]=e[5]*a,n[6]=e[6]*r,n[7]=e[7]*r,n[8]=e[8]*r,n};const Pd=new l;P.setUniformScale=function(e,t,n){h.typeOf.object("matrix",e),h.typeOf.number("scale",t),h.typeOf.object("result",n);const o=P.getScale(e,Pd),i=t/o.x,a=t/o.y,r=t/o.z;return n[0]=e[0]*i,n[1]=e[1]*i,n[2]=e[2]*i,n[3]=e[3]*a,n[4]=e[4]*a,n[5]=e[5]*a,n[6]=e[6]*r,n[7]=e[7]*r,n[8]=e[8]*r,n};const Xr=new l;P.getScale=function(e,t){return h.typeOf.object("matrix",e),h.typeOf.object("result",t),t.x=l.magnitude(l.fromElements(e[0],e[1],e[2],Xr)),t.y=l.magnitude(l.fromElements(e[3],e[4],e[5],Xr)),t.z=l.magnitude(l.fromElements(e[6],e[7],e[8],Xr)),t};const lc=new l;P.getMaximumScale=function(e){return P.getScale(e,lc),l.maximumComponent(lc)};const Md=new l;P.setRotation=function(e,t,n){h.typeOf.object("matrix",e),h.typeOf.object("result",n);const o=P.getScale(e,Md);return n[0]=t[0]*o.x,n[1]=t[1]*o.x,n[2]=t[2]*o.x,n[3]=t[3]*o.y,n[4]=t[4]*o.y,n[5]=t[5]*o.y,n[6]=t[6]*o.z,n[7]=t[7]*o.z,n[8]=t[8]*o.z,n};const Nd=new l;P.getRotation=function(e,t){h.typeOf.object("matrix",e),h.typeOf.object("result",t);const n=P.getScale(e,Nd);return t[0]=e[0]/n.x,t[1]=e[1]/n.x,t[2]=e[2]/n.x,t[3]=e[3]/n.y,t[4]=e[4]/n.y,t[5]=e[5]/n.y,t[6]=e[6]/n.z,t[7]=e[7]/n.z,t[8]=e[8]/n.z,t};P.multiply=function(e,t,n){h.typeOf.object("left",e),h.typeOf.object("right",t),h.typeOf.object("result",n);const o=e[0]*t[0]+e[3]*t[1]+e[6]*t[2],i=e[1]*t[0]+e[4]*t[1]+e[7]*t[2],a=e[2]*t[0]+e[5]*t[1]+e[8]*t[2],r=e[0]*t[3]+e[3]*t[4]+e[6]*t[5],s=e[1]*t[3]+e[4]*t[4]+e[7]*t[5],c=e[2]*t[3]+e[5]*t[4]+e[8]*t[5],f=e[0]*t[6]+e[3]*t[7]+e[6]*t[8],d=e[1]*t[6]+e[4]*t[7]+e[7]*t[8],m=e[2]*t[6]+e[5]*t[7]+e[8]*t[8];return n[0]=o,n[1]=i,n[2]=a,n[3]=r,n[4]=s,n[5]=c,n[6]=f,n[7]=d,n[8]=m,n};P.add=function(e,t,n){return h.typeOf.object("left",e),h.typeOf.object("right",t),h.typeOf.object("result",n),n[0]=e[0]+t[0],n[1]=e[1]+t[1],n[2]=e[2]+t[2],n[3]=e[3]+t[3],n[4]=e[4]+t[4],n[5]=e[5]+t[5],n[6]=e[6]+t[6],n[7]=e[7]+t[7],n[8]=e[8]+t[8],n};P.subtract=function(e,t,n){return h.typeOf.object("left",e),h.typeOf.object("right",t),h.typeOf.object("result",n),n[0]=e[0]-t[0],n[1]=e[1]-t[1],n[2]=e[2]-t[2],n[3]=e[3]-t[3],n[4]=e[4]-t[4],n[5]=e[5]-t[5],n[6]=e[6]-t[6],n[7]=e[7]-t[7],n[8]=e[8]-t[8],n};P.multiplyByVector=function(e,t,n){h.typeOf.object("matrix",e),h.typeOf.object("cartesian",t),h.typeOf.object("result",n);const o=t.x,i=t.y,a=t.z,r=e[0]*o+e[3]*i+e[6]*a,s=e[1]*o+e[4]*i+e[7]*a,c=e[2]*o+e[5]*i+e[8]*a;return n.x=r,n.y=s,n.z=c,n};P.multiplyByScalar=function(e,t,n){return h.typeOf.object("matrix",e),h.typeOf.number("scalar",t),h.typeOf.object("result",n),n[0]=e[0]*t,n[1]=e[1]*t,n[2]=e[2]*t,n[3]=e[3]*t,n[4]=e[4]*t,n[5]=e[5]*t,n[6]=e[6]*t,n[7]=e[7]*t,n[8]=e[8]*t,n};P.multiplyByScale=function(e,t,n){return h.typeOf.object("matrix",e),h.typeOf.object("scale",t),h.typeOf.object("result",n),n[0]=e[0]*t.x,n[1]=e[1]*t.x,n[2]=e[2]*t.x,n[3]=e[3]*t.y,n[4]=e[4]*t.y,n[5]=e[5]*t.y,n[6]=e[6]*t.z,n[7]=e[7]*t.z,n[8]=e[8]*t.z,n};P.multiplyByUniformScale=function(e,t,n){return h.typeOf.object("matrix",e),h.typeOf.number("scale",t),h.typeOf.object("result",n),n[0]=e[0]*t,n[1]=e[1]*t,n[2]=e[2]*t,n[3]=e[3]*t,n[4]=e[4]*t,n[5]=e[5]*t,n[6]=e[6]*t,n[7]=e[7]*t,n[8]=e[8]*t,n};P.negate=function(e,t){return h.typeOf.object("matrix",e),h.typeOf.object("result",t),t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t[3]=-e[3],t[4]=-e[4],t[5]=-e[5],t[6]=-e[6],t[7]=-e[7],t[8]=-e[8],t};P.transpose=function(e,t){h.typeOf.object("matrix",e),h.typeOf.object("result",t);const n=e[0],o=e[3],i=e[6],a=e[1],r=e[4],s=e[7],c=e[2],f=e[5],d=e[8];return t[0]=n,t[1]=o,t[2]=i,t[3]=a,t[4]=r,t[5]=s,t[6]=c,t[7]=f,t[8]=d,t};function Dd(e){let t=0;for(let n=0;n<9;++n){const o=e[n];t+=o*o}return Math.sqrt(t)}const Ga=[1,0,0],qa=[2,2,1];function Ld(e){let t=0;for(let n=0;n<3;++n){const o=e[P.getElementIndex(qa[n],Ga[n])];t+=2*o*o}return Math.sqrt(t)}function Fd(e,t){const n=A.EPSILON15;let o=0,i=1;for(let f=0;f<3;++f){const d=Math.abs(e[P.getElementIndex(qa[f],Ga[f])]);d>o&&(i=f,o=d)}let a=1,r=0;const s=Ga[i],c=qa[i];if(Math.abs(e[P.getElementIndex(c,s)])>n){const f=e[P.getElementIndex(c,c)],d=e[P.getElementIndex(s,s)],m=e[P.getElementIndex(c,s)],p=(f-d)/2/m;let _;p<0?_=-1/(-p+Math.sqrt(1+p*p)):_=1/(p+Math.sqrt(1+p*p)),a=1/Math.sqrt(1+_*_),r=_*a}return t=P.clone(P.IDENTITY,t),t[P.getElementIndex(s,s)]=t[P.getElementIndex(c,c)]=a,t[P.getElementIndex(c,s)]=r,t[P.getElementIndex(s,c)]=-r,t}const Pi=new P,fc=new P;P.computeEigenDecomposition=function(e,t){h.typeOf.object("matrix",e);const n=A.EPSILON20,o=10;let i=0,a=0;u(t)||(t={});const r=t.unitary=P.clone(P.IDENTITY,t.unitary),s=t.diagonal=P.clone(e,t.diagonal),c=n*Dd(s);for(;a<o&&Ld(s)>c;)Fd(s,Pi),P.transpose(Pi,fc),P.multiply(s,Pi,s),P.multiply(fc,s,s),P.multiply(r,Pi,r),++i>2&&(++a,i=0);return t};P.abs=function(e,t){return h.typeOf.object("matrix",e),h.typeOf.object("result",t),t[0]=Math.abs(e[0]),t[1]=Math.abs(e[1]),t[2]=Math.abs(e[2]),t[3]=Math.abs(e[3]),t[4]=Math.abs(e[4]),t[5]=Math.abs(e[5]),t[6]=Math.abs(e[6]),t[7]=Math.abs(e[7]),t[8]=Math.abs(e[8]),t};P.determinant=function(e){h.typeOf.object("matrix",e);const t=e[0],n=e[3],o=e[6],i=e[1],a=e[4],r=e[7],s=e[2],c=e[5],f=e[8];return t*(a*f-c*r)+i*(c*o-n*f)+s*(n*r-a*o)};P.inverse=function(e,t){h.typeOf.object("matrix",e),h.typeOf.object("result",t);const n=e[0],o=e[1],i=e[2],a=e[3],r=e[4],s=e[5],c=e[6],f=e[7],d=e[8],m=P.determinant(e);if(Math.abs(m)<=A.EPSILON15)throw new T("matrix is not invertible");t[0]=r*d-f*s,t[1]=f*i-o*d,t[2]=o*s-r*i,t[3]=c*s-a*d,t[4]=n*d-c*i,t[5]=a*i-n*s,t[6]=a*f-c*r,t[7]=c*o-n*f,t[8]=n*r-a*o;const p=1/m;return P.multiplyByScalar(t,p,t)};const Bd=new P;P.inverseTranspose=function(e,t){return h.typeOf.object("matrix",e),h.typeOf.object("result",t),P.inverse(P.transpose(e,Bd),t)};P.equals=function(e,t){return e===t||u(e)&&u(t)&&e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]&&e[3]===t[3]&&e[4]===t[4]&&e[5]===t[5]&&e[6]===t[6]&&e[7]===t[7]&&e[8]===t[8]};P.equalsEpsilon=function(e,t,n){return n=n??0,e===t||u(e)&&u(t)&&Math.abs(e[0]-t[0])<=n&&Math.abs(e[1]-t[1])<=n&&Math.abs(e[2]-t[2])<=n&&Math.abs(e[3]-t[3])<=n&&Math.abs(e[4]-t[4])<=n&&Math.abs(e[5]-t[5])<=n&&Math.abs(e[6]-t[6])<=n&&Math.abs(e[7]-t[7])<=n&&Math.abs(e[8]-t[8])<=n};P.IDENTITY=Object.freeze(new P(1,0,0,0,1,0,0,0,1));P.ZERO=Object.freeze(new P(0,0,0,0,0,0,0,0,0));P.COLUMN0ROW0=0;P.COLUMN0ROW1=1;P.COLUMN0ROW2=2;P.COLUMN1ROW0=3;P.COLUMN1ROW1=4;P.COLUMN1ROW2=5;P.COLUMN2ROW0=6;P.COLUMN2ROW1=7;P.COLUMN2ROW2=8;Object.defineProperties(P.prototype,{length:{get:function(){return P.packedLength}}});P.prototype.clone=function(e){return P.clone(this,e)};P.prototype.equals=function(e){return P.equals(this,e)};P.equalsArray=function(e,t,n){return e[0]===t[n]&&e[1]===t[n+1]&&e[2]===t[n+2]&&e[3]===t[n+3]&&e[4]===t[n+4]&&e[5]===t[n+5]&&e[6]===t[n+6]&&e[7]===t[n+7]&&e[8]===t[n+8]};P.prototype.equalsEpsilon=function(e,t){return P.equalsEpsilon(this,e,t)};P.prototype.toString=function(){return`(${this[0]}, ${this[3]}, ${this[6]})
(${this[1]}, ${this[4]}, ${this[7]})
(${this[2]}, ${this[5]}, ${this[8]})`};function W(e,t,n,o){this.x=e??0,this.y=t??0,this.z=n??0,this.w=o??0}W.fromElements=function(e,t,n,o,i){return u(i)?(i.x=e,i.y=t,i.z=n,i.w=o,i):new W(e,t,n,o)};W.fromColor=function(e,t){return h.typeOf.object("color",e),u(t)?(t.x=e.red,t.y=e.green,t.z=e.blue,t.w=e.alpha,t):new W(e.red,e.green,e.blue,e.alpha)};W.clone=function(e,t){if(u(e))return u(t)?(t.x=e.x,t.y=e.y,t.z=e.z,t.w=e.w,t):new W(e.x,e.y,e.z,e.w)};W.packedLength=4;W.pack=function(e,t,n){return h.typeOf.object("value",e),h.defined("array",t),n=n??0,t[n++]=e.x,t[n++]=e.y,t[n++]=e.z,t[n]=e.w,t};W.unpack=function(e,t,n){return h.defined("array",e),t=t??0,u(n)||(n=new W),n.x=e[t++],n.y=e[t++],n.z=e[t++],n.w=e[t],n};W.packArray=function(e,t){h.defined("array",e);const n=e.length,o=n*4;if(!u(t))t=new Array(o);else{if(!Array.isArray(t)&&t.length!==o)throw new T("If result is a typed array, it must have exactly array.length * 4 elements");t.length!==o&&(t.length=o)}for(let i=0;i<n;++i)W.pack(e[i],t,i*4);return t};W.unpackArray=function(e,t){if(h.defined("array",e),h.typeOf.number.greaterThanOrEquals("array.length",e.length,4),e.length%4!==0)throw new T("array length must be a multiple of 4.");const n=e.length;u(t)?t.length=n/4:t=new Array(n/4);for(let o=0;o<n;o+=4){const i=o/4;t[i]=W.unpack(e,o,t[i])}return t};W.fromArray=W.unpack;W.maximumComponent=function(e){return h.typeOf.object("cartesian",e),Math.max(e.x,e.y,e.z,e.w)};W.minimumComponent=function(e){return h.typeOf.object("cartesian",e),Math.min(e.x,e.y,e.z,e.w)};W.minimumByComponent=function(e,t,n){return h.typeOf.object("first",e),h.typeOf.object("second",t),h.typeOf.object("result",n),n.x=Math.min(e.x,t.x),n.y=Math.min(e.y,t.y),n.z=Math.min(e.z,t.z),n.w=Math.min(e.w,t.w),n};W.maximumByComponent=function(e,t,n){return h.typeOf.object("first",e),h.typeOf.object("second",t),h.typeOf.object("result",n),n.x=Math.max(e.x,t.x),n.y=Math.max(e.y,t.y),n.z=Math.max(e.z,t.z),n.w=Math.max(e.w,t.w),n};W.clamp=function(e,t,n,o){h.typeOf.object("value",e),h.typeOf.object("min",t),h.typeOf.object("max",n),h.typeOf.object("result",o);const i=A.clamp(e.x,t.x,n.x),a=A.clamp(e.y,t.y,n.y),r=A.clamp(e.z,t.z,n.z),s=A.clamp(e.w,t.w,n.w);return o.x=i,o.y=a,o.z=r,o.w=s,o};W.magnitudeSquared=function(e){return h.typeOf.object("cartesian",e),e.x*e.x+e.y*e.y+e.z*e.z+e.w*e.w};W.magnitude=function(e){return Math.sqrt(W.magnitudeSquared(e))};const Ar=new W;W.distance=function(e,t){return h.typeOf.object("left",e),h.typeOf.object("right",t),W.subtract(e,t,Ar),W.magnitude(Ar)};W.distanceSquared=function(e,t){return h.typeOf.object("left",e),h.typeOf.object("right",t),W.subtract(e,t,Ar),W.magnitudeSquared(Ar)};W.normalize=function(e,t){h.typeOf.object("cartesian",e),h.typeOf.object("result",t);const n=W.magnitude(e);if(t.x=e.x/n,t.y=e.y/n,t.z=e.z/n,t.w=e.w/n,isNaN(t.x)||isNaN(t.y)||isNaN(t.z)||isNaN(t.w))throw new T("normalized result is not a number");return t};W.dot=function(e,t){return h.typeOf.object("left",e),h.typeOf.object("right",t),e.x*t.x+e.y*t.y+e.z*t.z+e.w*t.w};W.multiplyComponents=function(e,t,n){return h.typeOf.object("left",e),h.typeOf.object("right",t),h.typeOf.object("result",n),n.x=e.x*t.x,n.y=e.y*t.y,n.z=e.z*t.z,n.w=e.w*t.w,n};W.divideComponents=function(e,t,n){return h.typeOf.object("left",e),h.typeOf.object("right",t),h.typeOf.object("result",n),n.x=e.x/t.x,n.y=e.y/t.y,n.z=e.z/t.z,n.w=e.w/t.w,n};W.add=function(e,t,n){return h.typeOf.object("left",e),h.typeOf.object("right",t),h.typeOf.object("result",n),n.x=e.x+t.x,n.y=e.y+t.y,n.z=e.z+t.z,n.w=e.w+t.w,n};W.subtract=function(e,t,n){return h.typeOf.object("left",e),h.typeOf.object("right",t),h.typeOf.object("result",n),n.x=e.x-t.x,n.y=e.y-t.y,n.z=e.z-t.z,n.w=e.w-t.w,n};W.multiplyByScalar=function(e,t,n){return h.typeOf.object("cartesian",e),h.typeOf.number("scalar",t),h.typeOf.object("result",n),n.x=e.x*t,n.y=e.y*t,n.z=e.z*t,n.w=e.w*t,n};W.divideByScalar=function(e,t,n){return h.typeOf.object("cartesian",e),h.typeOf.number("scalar",t),h.typeOf.object("result",n),n.x=e.x/t,n.y=e.y/t,n.z=e.z/t,n.w=e.w/t,n};W.negate=function(e,t){return h.typeOf.object("cartesian",e),h.typeOf.object("result",t),t.x=-e.x,t.y=-e.y,t.z=-e.z,t.w=-e.w,t};W.abs=function(e,t){return h.typeOf.object("cartesian",e),h.typeOf.object("result",t),t.x=Math.abs(e.x),t.y=Math.abs(e.y),t.z=Math.abs(e.z),t.w=Math.abs(e.w),t};const uc=new W;W.lerp=function(e,t,n,o){return h.typeOf.object("start",e),h.typeOf.object("end",t),h.typeOf.number("t",n),h.typeOf.object("result",o),W.multiplyByScalar(t,n,uc),o=W.multiplyByScalar(e,1-n,o),W.add(uc,o,o)};const Ud=new W;W.mostOrthogonalAxis=function(e,t){h.typeOf.object("cartesian",e),h.typeOf.object("result",t);const n=W.normalize(e,Ud);return W.abs(n,n),n.x<=n.y?n.x<=n.z?n.x<=n.w?t=W.clone(W.UNIT_X,t):t=W.clone(W.UNIT_W,t):n.z<=n.w?t=W.clone(W.UNIT_Z,t):t=W.clone(W.UNIT_W,t):n.y<=n.z?n.y<=n.w?t=W.clone(W.UNIT_Y,t):t=W.clone(W.UNIT_W,t):n.z<=n.w?t=W.clone(W.UNIT_Z,t):t=W.clone(W.UNIT_W,t),t};W.equals=function(e,t){return e===t||u(e)&&u(t)&&e.x===t.x&&e.y===t.y&&e.z===t.z&&e.w===t.w};W.equalsArray=function(e,t,n){return e.x===t[n]&&e.y===t[n+1]&&e.z===t[n+2]&&e.w===t[n+3]};W.equalsEpsilon=function(e,t,n,o){return e===t||u(e)&&u(t)&&A.equalsEpsilon(e.x,t.x,n,o)&&A.equalsEpsilon(e.y,t.y,n,o)&&A.equalsEpsilon(e.z,t.z,n,o)&&A.equalsEpsilon(e.w,t.w,n,o)};W.ZERO=Object.freeze(new W(0,0,0,0));W.ONE=Object.freeze(new W(1,1,1,1));W.UNIT_X=Object.freeze(new W(1,0,0,0));W.UNIT_Y=Object.freeze(new W(0,1,0,0));W.UNIT_Z=Object.freeze(new W(0,0,1,0));W.UNIT_W=Object.freeze(new W(0,0,0,1));W.prototype.clone=function(e){return W.clone(this,e)};W.prototype.equals=function(e){return W.equals(this,e)};W.prototype.equalsEpsilon=function(e,t,n){return W.equalsEpsilon(this,e,t,n)};W.prototype.toString=function(){return`(${this.x}, ${this.y}, ${this.z}, ${this.w})`};const ms=new Float32Array(1),yt=new Uint8Array(ms.buffer),Gd=new Uint32Array([287454020]),qd=new Uint8Array(Gd.buffer),df=qd[0]===68;W.packFloat=function(e,t){return h.typeOf.number("value",e),u(t)||(t=new W),ms[0]=e,df?(t.x=yt[0],t.y=yt[1],t.z=yt[2],t.w=yt[3]):(t.x=yt[3],t.y=yt[2],t.z=yt[1],t.w=yt[0]),t};W.unpackFloat=function(e){return h.typeOf.object("packedFloat",e),df?(yt[0]=e.x,yt[1]=e.y,yt[2]=e.z,yt[3]=e.w):(yt[0]=e.w,yt[1]=e.z,yt[2]=e.y,yt[3]=e.x),ms[0]};const ue={};ue.EMPTY_OBJECT=Object.freeze({});ue.EMPTY_ARRAY=Object.freeze([]);function Ye(e){this.name="RuntimeError",this.message=e;let t;try{throw new Error}catch(n){t=n.stack}this.stack=t}u(Object.create)&&(Ye.prototype=Object.create(Error.prototype),Ye.prototype.constructor=Ye);Ye.prototype.toString=function(){let e=`${this.name}: ${this.message}`;return u(this.stack)&&(e+=`
${this.stack.toString()}`),e};function M(e,t,n,o,i,a,r,s,c,f,d,m,p,_,g,b){this[0]=e??0,this[1]=i??0,this[2]=c??0,this[3]=p??0,this[4]=t??0,this[5]=a??0,this[6]=f??0,this[7]=_??0,this[8]=n??0,this[9]=r??0,this[10]=d??0,this[11]=g??0,this[12]=o??0,this[13]=s??0,this[14]=m??0,this[15]=b??0}M.packedLength=16;M.pack=function(e,t,n){return h.typeOf.object("value",e),h.defined("array",t),n=n??0,t[n++]=e[0],t[n++]=e[1],t[n++]=e[2],t[n++]=e[3],t[n++]=e[4],t[n++]=e[5],t[n++]=e[6],t[n++]=e[7],t[n++]=e[8],t[n++]=e[9],t[n++]=e[10],t[n++]=e[11],t[n++]=e[12],t[n++]=e[13],t[n++]=e[14],t[n]=e[15],t};M.unpack=function(e,t,n){return h.defined("array",e),t=t??0,u(n)||(n=new M),n[0]=e[t++],n[1]=e[t++],n[2]=e[t++],n[3]=e[t++],n[4]=e[t++],n[5]=e[t++],n[6]=e[t++],n[7]=e[t++],n[8]=e[t++],n[9]=e[t++],n[10]=e[t++],n[11]=e[t++],n[12]=e[t++],n[13]=e[t++],n[14]=e[t++],n[15]=e[t],n};M.packArray=function(e,t){h.defined("array",e);const n=e.length,o=n*16;if(!u(t))t=new Array(o);else{if(!Array.isArray(t)&&t.length!==o)throw new T("If result is a typed array, it must have exactly array.length * 16 elements");t.length!==o&&(t.length=o)}for(let i=0;i<n;++i)M.pack(e[i],t,i*16);return t};M.unpackArray=function(e,t){if(h.defined("array",e),h.typeOf.number.greaterThanOrEquals("array.length",e.length,16),e.length%16!==0)throw new T("array length must be a multiple of 16.");const n=e.length;u(t)?t.length=n/16:t=new Array(n/16);for(let o=0;o<n;o+=16){const i=o/16;t[i]=M.unpack(e,o,t[i])}return t};M.clone=function(e,t){if(u(e))return u(t)?(t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t):new M(e[0],e[4],e[8],e[12],e[1],e[5],e[9],e[13],e[2],e[6],e[10],e[14],e[3],e[7],e[11],e[15])};M.fromArray=M.unpack;M.fromColumnMajorArray=function(e,t){return h.defined("values",e),M.clone(e,t)};M.fromRowMajorArray=function(e,t){return h.defined("values",e),u(t)?(t[0]=e[0],t[1]=e[4],t[2]=e[8],t[3]=e[12],t[4]=e[1],t[5]=e[5],t[6]=e[9],t[7]=e[13],t[8]=e[2],t[9]=e[6],t[10]=e[10],t[11]=e[14],t[12]=e[3],t[13]=e[7],t[14]=e[11],t[15]=e[15],t):new M(e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8],e[9],e[10],e[11],e[12],e[13],e[14],e[15])};M.fromRotationTranslation=function(e,t,n){return h.typeOf.object("rotation",e),t=t??l.ZERO,u(n)?(n[0]=e[0],n[1]=e[1],n[2]=e[2],n[3]=0,n[4]=e[3],n[5]=e[4],n[6]=e[5],n[7]=0,n[8]=e[6],n[9]=e[7],n[10]=e[8],n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,n):new M(e[0],e[3],e[6],t.x,e[1],e[4],e[7],t.y,e[2],e[5],e[8],t.z,0,0,0,1)};M.fromTranslationQuaternionRotationScale=function(e,t,n,o){h.typeOf.object("translation",e),h.typeOf.object("rotation",t),h.typeOf.object("scale",n),u(o)||(o=new M);const i=n.x,a=n.y,r=n.z,s=t.x*t.x,c=t.x*t.y,f=t.x*t.z,d=t.x*t.w,m=t.y*t.y,p=t.y*t.z,_=t.y*t.w,g=t.z*t.z,b=t.z*t.w,E=t.w*t.w,v=s-m-g+E,C=2*(c-b),x=2*(f+_),R=2*(c+b),N=-s+m-g+E,F=2*(p-d),q=2*(f-_),D=2*(p+d),B=-s-m+g+E;return o[0]=v*i,o[1]=R*i,o[2]=q*i,o[3]=0,o[4]=C*a,o[5]=N*a,o[6]=D*a,o[7]=0,o[8]=x*r,o[9]=F*r,o[10]=B*r,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,o};M.fromTranslationRotationScale=function(e,t){return h.typeOf.object("translationRotationScale",e),M.fromTranslationQuaternionRotationScale(e.translation,e.rotation,e.scale,t)};M.fromTranslation=function(e,t){return h.typeOf.object("translation",e),M.fromRotationTranslation(P.IDENTITY,e,t)};M.fromScale=function(e,t){return h.typeOf.object("scale",e),u(t)?(t[0]=e.x,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=e.y,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=e.z,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t):new M(e.x,0,0,0,0,e.y,0,0,0,0,e.z,0,0,0,0,1)};M.fromUniformScale=function(e,t){return h.typeOf.number("scale",e),u(t)?(t[0]=e,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=e,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=e,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t):new M(e,0,0,0,0,e,0,0,0,0,e,0,0,0,0,1)};M.fromRotation=function(e,t){return h.typeOf.object("rotation",e),u(t)||(t=new M),t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=0,t[4]=e[3],t[5]=e[4],t[6]=e[5],t[7]=0,t[8]=e[6],t[9]=e[7],t[10]=e[8],t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t};const _o=new l,go=new l,Ho=new l;M.fromCamera=function(e,t){h.typeOf.object("camera",e);const n=e.position,o=e.direction,i=e.up;h.typeOf.object("camera.position",n),h.typeOf.object("camera.direction",o),h.typeOf.object("camera.up",i),l.normalize(o,_o),l.normalize(l.cross(_o,i,go),go),l.normalize(l.cross(go,_o,Ho),Ho);const a=go.x,r=go.y,s=go.z,c=_o.x,f=_o.y,d=_o.z,m=Ho.x,p=Ho.y,_=Ho.z,g=n.x,b=n.y,E=n.z,v=a*-g+r*-b+s*-E,C=m*-g+p*-b+_*-E,x=c*g+f*b+d*E;return u(t)?(t[0]=a,t[1]=m,t[2]=-c,t[3]=0,t[4]=r,t[5]=p,t[6]=-f,t[7]=0,t[8]=s,t[9]=_,t[10]=-d,t[11]=0,t[12]=v,t[13]=C,t[14]=x,t[15]=1,t):new M(a,r,s,v,m,p,_,C,-c,-f,-d,x,0,0,0,1)};M.computePerspectiveFieldOfView=function(e,t,n,o,i){h.typeOf.number.greaterThan("fovY",e,0),h.typeOf.number.lessThan("fovY",e,Math.PI),h.typeOf.number.greaterThan("near",n,0),h.typeOf.number.greaterThan("far",o,0),h.typeOf.object("result",i);const r=1/Math.tan(e*.5),s=r/t,c=(o+n)/(n-o),f=2*o*n/(n-o);return i[0]=s,i[1]=0,i[2]=0,i[3]=0,i[4]=0,i[5]=r,i[6]=0,i[7]=0,i[8]=0,i[9]=0,i[10]=c,i[11]=-1,i[12]=0,i[13]=0,i[14]=f,i[15]=0,i};M.computeOrthographicOffCenter=function(e,t,n,o,i,a,r){h.typeOf.number("left",e),h.typeOf.number("right",t),h.typeOf.number("bottom",n),h.typeOf.number("top",o),h.typeOf.number("near",i),h.typeOf.number("far",a),h.typeOf.object("result",r);let s=1/(t-e),c=1/(o-n),f=1/(a-i);const d=-(t+e)*s,m=-(o+n)*c,p=-(a+i)*f;return s*=2,c*=2,f*=-2,r[0]=s,r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=c,r[6]=0,r[7]=0,r[8]=0,r[9]=0,r[10]=f,r[11]=0,r[12]=d,r[13]=m,r[14]=p,r[15]=1,r};M.computePerspectiveOffCenter=function(e,t,n,o,i,a,r){h.typeOf.number("left",e),h.typeOf.number("right",t),h.typeOf.number("bottom",n),h.typeOf.number("top",o),h.typeOf.number("near",i),h.typeOf.number("far",a),h.typeOf.object("result",r);const s=2*i/(t-e),c=2*i/(o-n),f=(t+e)/(t-e),d=(o+n)/(o-n),m=-(a+i)/(a-i),p=-1,_=-2*a*i/(a-i);return r[0]=s,r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=c,r[6]=0,r[7]=0,r[8]=f,r[9]=d,r[10]=m,r[11]=p,r[12]=0,r[13]=0,r[14]=_,r[15]=0,r};M.computeInfinitePerspectiveOffCenter=function(e,t,n,o,i,a){h.typeOf.number("left",e),h.typeOf.number("right",t),h.typeOf.number("bottom",n),h.typeOf.number("top",o),h.typeOf.number("near",i),h.typeOf.object("result",a);const r=2*i/(t-e),s=2*i/(o-n),c=(t+e)/(t-e),f=(o+n)/(o-n),d=-1,m=-1,p=-2*i;return a[0]=r,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=s,a[6]=0,a[7]=0,a[8]=c,a[9]=f,a[10]=d,a[11]=m,a[12]=0,a[13]=0,a[14]=p,a[15]=0,a};M.computeViewportTransformation=function(e,t,n,o){u(o)||(o=new M),e=e??ue.EMPTY_OBJECT;const i=e.x??0,a=e.y??0,r=e.width??0,s=e.height??0;t=t??0,n=n??1;const c=r*.5,f=s*.5,d=(n-t)*.5,m=c,p=f,_=d,g=i+c,b=a+f,E=t+d,v=1;return o[0]=m,o[1]=0,o[2]=0,o[3]=0,o[4]=0,o[5]=p,o[6]=0,o[7]=0,o[8]=0,o[9]=0,o[10]=_,o[11]=0,o[12]=g,o[13]=b,o[14]=E,o[15]=v,o};M.computeView=function(e,t,n,o,i){return h.typeOf.object("position",e),h.typeOf.object("direction",t),h.typeOf.object("up",n),h.typeOf.object("right",o),h.typeOf.object("result",i),i[0]=o.x,i[1]=n.x,i[2]=-t.x,i[3]=0,i[4]=o.y,i[5]=n.y,i[6]=-t.y,i[7]=0,i[8]=o.z,i[9]=n.z,i[10]=-t.z,i[11]=0,i[12]=-l.dot(o,e),i[13]=-l.dot(n,e),i[14]=l.dot(t,e),i[15]=1,i};M.toArray=function(e,t){return h.typeOf.object("matrix",e),u(t)?(t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t):[e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8],e[9],e[10],e[11],e[12],e[13],e[14],e[15]]};M.getElementIndex=function(e,t){return h.typeOf.number.greaterThanOrEquals("row",t,0),h.typeOf.number.lessThanOrEquals("row",t,3),h.typeOf.number.greaterThanOrEquals("column",e,0),h.typeOf.number.lessThanOrEquals("column",e,3),e*4+t};M.getColumn=function(e,t,n){h.typeOf.object("matrix",e),h.typeOf.number.greaterThanOrEquals("index",t,0),h.typeOf.number.lessThanOrEquals("index",t,3),h.typeOf.object("result",n);const o=t*4,i=e[o],a=e[o+1],r=e[o+2],s=e[o+3];return n.x=i,n.y=a,n.z=r,n.w=s,n};M.setColumn=function(e,t,n,o){h.typeOf.object("matrix",e),h.typeOf.number.greaterThanOrEquals("index",t,0),h.typeOf.number.lessThanOrEquals("index",t,3),h.typeOf.object("cartesian",n),h.typeOf.object("result",o),o=M.clone(e,o);const i=t*4;return o[i]=n.x,o[i+1]=n.y,o[i+2]=n.z,o[i+3]=n.w,o};M.getRow=function(e,t,n){h.typeOf.object("matrix",e),h.typeOf.number.greaterThanOrEquals("index",t,0),h.typeOf.number.lessThanOrEquals("index",t,3),h.typeOf.object("result",n);const o=e[t],i=e[t+4],a=e[t+8],r=e[t+12];return n.x=o,n.y=i,n.z=a,n.w=r,n};M.setRow=function(e,t,n,o){return h.typeOf.object("matrix",e),h.typeOf.number.greaterThanOrEquals("index",t,0),h.typeOf.number.lessThanOrEquals("index",t,3),h.typeOf.object("cartesian",n),h.typeOf.object("result",o),o=M.clone(e,o),o[t]=n.x,o[t+4]=n.y,o[t+8]=n.z,o[t+12]=n.w,o};M.setTranslation=function(e,t,n){return h.typeOf.object("matrix",e),h.typeOf.object("translation",t),h.typeOf.object("result",n),n[0]=e[0],n[1]=e[1],n[2]=e[2],n[3]=e[3],n[4]=e[4],n[5]=e[5],n[6]=e[6],n[7]=e[7],n[8]=e[8],n[9]=e[9],n[10]=e[10],n[11]=e[11],n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=e[15],n};const kd=new l;M.setScale=function(e,t,n){h.typeOf.object("matrix",e),h.typeOf.object("scale",t),h.typeOf.object("result",n);const o=M.getScale(e,kd),i=t.x/o.x,a=t.y/o.y,r=t.z/o.z;return n[0]=e[0]*i,n[1]=e[1]*i,n[2]=e[2]*i,n[3]=e[3],n[4]=e[4]*a,n[5]=e[5]*a,n[6]=e[6]*a,n[7]=e[7],n[8]=e[8]*r,n[9]=e[9]*r,n[10]=e[10]*r,n[11]=e[11],n[12]=e[12],n[13]=e[13],n[14]=e[14],n[15]=e[15],n};const Vd=new l;M.setUniformScale=function(e,t,n){h.typeOf.object("matrix",e),h.typeOf.number("scale",t),h.typeOf.object("result",n);const o=M.getScale(e,Vd),i=t/o.x,a=t/o.y,r=t/o.z;return n[0]=e[0]*i,n[1]=e[1]*i,n[2]=e[2]*i,n[3]=e[3],n[4]=e[4]*a,n[5]=e[5]*a,n[6]=e[6]*a,n[7]=e[7],n[8]=e[8]*r,n[9]=e[9]*r,n[10]=e[10]*r,n[11]=e[11],n[12]=e[12],n[13]=e[13],n[14]=e[14],n[15]=e[15],n};const $r=new l;M.getScale=function(e,t){return h.typeOf.object("matrix",e),h.typeOf.object("result",t),t.x=l.magnitude(l.fromElements(e[0],e[1],e[2],$r)),t.y=l.magnitude(l.fromElements(e[4],e[5],e[6],$r)),t.z=l.magnitude(l.fromElements(e[8],e[9],e[10],$r)),t};const hc=new l;M.getMaximumScale=function(e){return M.getScale(e,hc),l.maximumComponent(hc)};const jd=new l;M.setRotation=function(e,t,n){h.typeOf.object("matrix",e),h.typeOf.object("result",n);const o=M.getScale(e,jd);return n[0]=t[0]*o.x,n[1]=t[1]*o.x,n[2]=t[2]*o.x,n[3]=e[3],n[4]=t[3]*o.y,n[5]=t[4]*o.y,n[6]=t[5]*o.y,n[7]=e[7],n[8]=t[6]*o.z,n[9]=t[7]*o.z,n[10]=t[8]*o.z,n[11]=e[11],n[12]=e[12],n[13]=e[13],n[14]=e[14],n[15]=e[15],n};const Hd=new l;M.getRotation=function(e,t){h.typeOf.object("matrix",e),h.typeOf.object("result",t);const n=M.getScale(e,Hd);return t[0]=e[0]/n.x,t[1]=e[1]/n.x,t[2]=e[2]/n.x,t[3]=e[4]/n.y,t[4]=e[5]/n.y,t[5]=e[6]/n.y,t[6]=e[8]/n.z,t[7]=e[9]/n.z,t[8]=e[10]/n.z,t};M.multiply=function(e,t,n){h.typeOf.object("left",e),h.typeOf.object("right",t),h.typeOf.object("result",n);const o=e[0],i=e[1],a=e[2],r=e[3],s=e[4],c=e[5],f=e[6],d=e[7],m=e[8],p=e[9],_=e[10],g=e[11],b=e[12],E=e[13],v=e[14],C=e[15],x=t[0],R=t[1],N=t[2],F=t[3],q=t[4],D=t[5],B=t[6],L=t[7],G=t[8],Y=t[9],y=t[10],w=t[11],S=t[12],I=t[13],k=t[14],V=t[15],H=o*x+s*R+m*N+b*F,j=i*x+c*R+p*N+E*F,$=a*x+f*R+_*N+v*F,te=r*x+d*R+g*N+C*F,se=o*q+s*D+m*B+b*L,ce=i*q+c*D+p*B+E*L,le=a*q+f*D+_*B+v*L,pe=r*q+d*D+g*B+C*L,De=o*G+s*Y+m*y+b*w,Ze=i*G+c*Y+p*y+E*w,Qe=a*G+f*Y+_*y+v*w,Pe=r*G+d*Y+g*y+C*w,at=o*S+s*I+m*k+b*V,vt=i*S+c*I+p*k+E*V,Dt=a*S+f*I+_*k+v*V,an=r*S+d*I+g*k+C*V;return n[0]=H,n[1]=j,n[2]=$,n[3]=te,n[4]=se,n[5]=ce,n[6]=le,n[7]=pe,n[8]=De,n[9]=Ze,n[10]=Qe,n[11]=Pe,n[12]=at,n[13]=vt,n[14]=Dt,n[15]=an,n};M.add=function(e,t,n){return h.typeOf.object("left",e),h.typeOf.object("right",t),h.typeOf.object("result",n),n[0]=e[0]+t[0],n[1]=e[1]+t[1],n[2]=e[2]+t[2],n[3]=e[3]+t[3],n[4]=e[4]+t[4],n[5]=e[5]+t[5],n[6]=e[6]+t[6],n[7]=e[7]+t[7],n[8]=e[8]+t[8],n[9]=e[9]+t[9],n[10]=e[10]+t[10],n[11]=e[11]+t[11],n[12]=e[12]+t[12],n[13]=e[13]+t[13],n[14]=e[14]+t[14],n[15]=e[15]+t[15],n};M.subtract=function(e,t,n){return h.typeOf.object("left",e),h.typeOf.object("right",t),h.typeOf.object("result",n),n[0]=e[0]-t[0],n[1]=e[1]-t[1],n[2]=e[2]-t[2],n[3]=e[3]-t[3],n[4]=e[4]-t[4],n[5]=e[5]-t[5],n[6]=e[6]-t[6],n[7]=e[7]-t[7],n[8]=e[8]-t[8],n[9]=e[9]-t[9],n[10]=e[10]-t[10],n[11]=e[11]-t[11],n[12]=e[12]-t[12],n[13]=e[13]-t[13],n[14]=e[14]-t[14],n[15]=e[15]-t[15],n};M.multiplyTransformation=function(e,t,n){h.typeOf.object("left",e),h.typeOf.object("right",t),h.typeOf.object("result",n);const o=e[0],i=e[1],a=e[2],r=e[4],s=e[5],c=e[6],f=e[8],d=e[9],m=e[10],p=e[12],_=e[13],g=e[14],b=t[0],E=t[1],v=t[2],C=t[4],x=t[5],R=t[6],N=t[8],F=t[9],q=t[10],D=t[12],B=t[13],L=t[14],G=o*b+r*E+f*v,Y=i*b+s*E+d*v,y=a*b+c*E+m*v,w=o*C+r*x+f*R,S=i*C+s*x+d*R,I=a*C+c*x+m*R,k=o*N+r*F+f*q,V=i*N+s*F+d*q,H=a*N+c*F+m*q,j=o*D+r*B+f*L+p,$=i*D+s*B+d*L+_,te=a*D+c*B+m*L+g;return n[0]=G,n[1]=Y,n[2]=y,n[3]=0,n[4]=w,n[5]=S,n[6]=I,n[7]=0,n[8]=k,n[9]=V,n[10]=H,n[11]=0,n[12]=j,n[13]=$,n[14]=te,n[15]=1,n};M.multiplyByMatrix3=function(e,t,n){h.typeOf.object("matrix",e),h.typeOf.object("rotation",t),h.typeOf.object("result",n);const o=e[0],i=e[1],a=e[2],r=e[4],s=e[5],c=e[6],f=e[8],d=e[9],m=e[10],p=t[0],_=t[1],g=t[2],b=t[3],E=t[4],v=t[5],C=t[6],x=t[7],R=t[8],N=o*p+r*_+f*g,F=i*p+s*_+d*g,q=a*p+c*_+m*g,D=o*b+r*E+f*v,B=i*b+s*E+d*v,L=a*b+c*E+m*v,G=o*C+r*x+f*R,Y=i*C+s*x+d*R,y=a*C+c*x+m*R;return n[0]=N,n[1]=F,n[2]=q,n[3]=0,n[4]=D,n[5]=B,n[6]=L,n[7]=0,n[8]=G,n[9]=Y,n[10]=y,n[11]=0,n[12]=e[12],n[13]=e[13],n[14]=e[14],n[15]=e[15],n};M.multiplyByTranslation=function(e,t,n){h.typeOf.object("matrix",e),h.typeOf.object("translation",t),h.typeOf.object("result",n);const o=t.x,i=t.y,a=t.z,r=o*e[0]+i*e[4]+a*e[8]+e[12],s=o*e[1]+i*e[5]+a*e[9]+e[13],c=o*e[2]+i*e[6]+a*e[10]+e[14];return n[0]=e[0],n[1]=e[1],n[2]=e[2],n[3]=e[3],n[4]=e[4],n[5]=e[5],n[6]=e[6],n[7]=e[7],n[8]=e[8],n[9]=e[9],n[10]=e[10],n[11]=e[11],n[12]=r,n[13]=s,n[14]=c,n[15]=e[15],n};M.multiplyByScale=function(e,t,n){h.typeOf.object("matrix",e),h.typeOf.object("scale",t),h.typeOf.object("result",n);const o=t.x,i=t.y,a=t.z;return o===1&&i===1&&a===1?M.clone(e,n):(n[0]=o*e[0],n[1]=o*e[1],n[2]=o*e[2],n[3]=e[3],n[4]=i*e[4],n[5]=i*e[5],n[6]=i*e[6],n[7]=e[7],n[8]=a*e[8],n[9]=a*e[9],n[10]=a*e[10],n[11]=e[11],n[12]=e[12],n[13]=e[13],n[14]=e[14],n[15]=e[15],n)};M.multiplyByUniformScale=function(e,t,n){return h.typeOf.object("matrix",e),h.typeOf.number("scale",t),h.typeOf.object("result",n),n[0]=e[0]*t,n[1]=e[1]*t,n[2]=e[2]*t,n[3]=e[3],n[4]=e[4]*t,n[5]=e[5]*t,n[6]=e[6]*t,n[7]=e[7],n[8]=e[8]*t,n[9]=e[9]*t,n[10]=e[10]*t,n[11]=e[11],n[12]=e[12],n[13]=e[13],n[14]=e[14],n[15]=e[15],n};M.multiplyByVector=function(e,t,n){h.typeOf.object("matrix",e),h.typeOf.object("cartesian",t),h.typeOf.object("result",n);const o=t.x,i=t.y,a=t.z,r=t.w,s=e[0]*o+e[4]*i+e[8]*a+e[12]*r,c=e[1]*o+e[5]*i+e[9]*a+e[13]*r,f=e[2]*o+e[6]*i+e[10]*a+e[14]*r,d=e[3]*o+e[7]*i+e[11]*a+e[15]*r;return n.x=s,n.y=c,n.z=f,n.w=d,n};M.multiplyByPointAsVector=function(e,t,n){h.typeOf.object("matrix",e),h.typeOf.object("cartesian",t),h.typeOf.object("result",n);const o=t.x,i=t.y,a=t.z,r=e[0]*o+e[4]*i+e[8]*a,s=e[1]*o+e[5]*i+e[9]*a,c=e[2]*o+e[6]*i+e[10]*a;return n.x=r,n.y=s,n.z=c,n};M.multiplyByPoint=function(e,t,n){h.typeOf.object("matrix",e),h.typeOf.object("cartesian",t),h.typeOf.object("result",n);const o=t.x,i=t.y,a=t.z,r=e[0]*o+e[4]*i+e[8]*a+e[12],s=e[1]*o+e[5]*i+e[9]*a+e[13],c=e[2]*o+e[6]*i+e[10]*a+e[14];return n.x=r,n.y=s,n.z=c,n};M.multiplyByScalar=function(e,t,n){return h.typeOf.object("matrix",e),h.typeOf.number("scalar",t),h.typeOf.object("result",n),n[0]=e[0]*t,n[1]=e[1]*t,n[2]=e[2]*t,n[3]=e[3]*t,n[4]=e[4]*t,n[5]=e[5]*t,n[6]=e[6]*t,n[7]=e[7]*t,n[8]=e[8]*t,n[9]=e[9]*t,n[10]=e[10]*t,n[11]=e[11]*t,n[12]=e[12]*t,n[13]=e[13]*t,n[14]=e[14]*t,n[15]=e[15]*t,n};M.negate=function(e,t){return h.typeOf.object("matrix",e),h.typeOf.object("result",t),t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t[3]=-e[3],t[4]=-e[4],t[5]=-e[5],t[6]=-e[6],t[7]=-e[7],t[8]=-e[8],t[9]=-e[9],t[10]=-e[10],t[11]=-e[11],t[12]=-e[12],t[13]=-e[13],t[14]=-e[14],t[15]=-e[15],t};M.transpose=function(e,t){h.typeOf.object("matrix",e),h.typeOf.object("result",t);const n=e[1],o=e[2],i=e[3],a=e[6],r=e[7],s=e[11];return t[0]=e[0],t[1]=e[4],t[2]=e[8],t[3]=e[12],t[4]=n,t[5]=e[5],t[6]=e[9],t[7]=e[13],t[8]=o,t[9]=a,t[10]=e[10],t[11]=e[14],t[12]=i,t[13]=r,t[14]=s,t[15]=e[15],t};M.abs=function(e,t){return h.typeOf.object("matrix",e),h.typeOf.object("result",t),t[0]=Math.abs(e[0]),t[1]=Math.abs(e[1]),t[2]=Math.abs(e[2]),t[3]=Math.abs(e[3]),t[4]=Math.abs(e[4]),t[5]=Math.abs(e[5]),t[6]=Math.abs(e[6]),t[7]=Math.abs(e[7]),t[8]=Math.abs(e[8]),t[9]=Math.abs(e[9]),t[10]=Math.abs(e[10]),t[11]=Math.abs(e[11]),t[12]=Math.abs(e[12]),t[13]=Math.abs(e[13]),t[14]=Math.abs(e[14]),t[15]=Math.abs(e[15]),t};M.equals=function(e,t){return e===t||u(e)&&u(t)&&e[12]===t[12]&&e[13]===t[13]&&e[14]===t[14]&&e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]&&e[4]===t[4]&&e[5]===t[5]&&e[6]===t[6]&&e[8]===t[8]&&e[9]===t[9]&&e[10]===t[10]&&e[3]===t[3]&&e[7]===t[7]&&e[11]===t[11]&&e[15]===t[15]};M.equalsEpsilon=function(e,t,n){return n=n??0,e===t||u(e)&&u(t)&&Math.abs(e[0]-t[0])<=n&&Math.abs(e[1]-t[1])<=n&&Math.abs(e[2]-t[2])<=n&&Math.abs(e[3]-t[3])<=n&&Math.abs(e[4]-t[4])<=n&&Math.abs(e[5]-t[5])<=n&&Math.abs(e[6]-t[6])<=n&&Math.abs(e[7]-t[7])<=n&&Math.abs(e[8]-t[8])<=n&&Math.abs(e[9]-t[9])<=n&&Math.abs(e[10]-t[10])<=n&&Math.abs(e[11]-t[11])<=n&&Math.abs(e[12]-t[12])<=n&&Math.abs(e[13]-t[13])<=n&&Math.abs(e[14]-t[14])<=n&&Math.abs(e[15]-t[15])<=n};M.getTranslation=function(e,t){return h.typeOf.object("matrix",e),h.typeOf.object("result",t),t.x=e[12],t.y=e[13],t.z=e[14],t};M.getMatrix3=function(e,t){return h.typeOf.object("matrix",e),h.typeOf.object("result",t),t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[4],t[4]=e[5],t[5]=e[6],t[6]=e[8],t[7]=e[9],t[8]=e[10],t};const Wd=new P,Yd=new P,Xd=new W,$d=new W(0,0,0,1);M.inverse=function(e,t){h.typeOf.object("matrix",e),h.typeOf.object("result",t);const n=e[0],o=e[4],i=e[8],a=e[12],r=e[1],s=e[5],c=e[9],f=e[13],d=e[2],m=e[6],p=e[10],_=e[14],g=e[3],b=e[7],E=e[11],v=e[15];let C=p*v,x=_*E,R=m*v,N=_*b,F=m*E,q=p*b,D=d*v,B=_*g,L=d*E,G=p*g,Y=d*b,y=m*g;const w=C*s+N*c+F*f-(x*s+R*c+q*f),S=x*r+D*c+G*f-(C*r+B*c+L*f),I=R*r+B*s+Y*f-(N*r+D*s+y*f),k=q*r+L*s+y*c-(F*r+G*s+Y*c),V=x*o+R*i+q*a-(C*o+N*i+F*a),H=C*n+B*i+L*a-(x*n+D*i+G*a),j=N*n+D*o+y*a-(R*n+B*o+Y*a),$=F*n+G*o+Y*i-(q*n+L*o+y*i);C=i*f,x=a*c,R=o*f,N=a*s,F=o*c,q=i*s,D=n*f,B=a*r,L=n*c,G=i*r,Y=n*s,y=o*r;const te=C*b+N*E+F*v-(x*b+R*E+q*v),se=x*g+D*E+G*v-(C*g+B*E+L*v),ce=R*g+B*b+Y*v-(N*g+D*b+y*v),le=q*g+L*b+y*E-(F*g+G*b+Y*E),pe=R*p+q*_+x*m-(F*_+C*m+N*p),De=L*_+C*d+B*p-(D*p+G*_+x*d),Ze=D*m+y*_+N*d-(Y*_+R*d+B*m),Qe=Y*p+F*d+G*m-(L*m+y*p+q*d);let Pe=n*w+o*S+i*I+a*k;if(Math.abs(Pe)<A.EPSILON21){if(P.equalsEpsilon(M.getMatrix3(e,Wd),Yd,A.EPSILON7)&&W.equals(M.getRow(e,3,Xd),$d))return t[0]=0,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=0,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=0,t[11]=0,t[12]=-e[12],t[13]=-e[13],t[14]=-e[14],t[15]=1,t;throw new Ye("matrix is not invertible because its determinate is zero.")}return Pe=1/Pe,t[0]=w*Pe,t[1]=S*Pe,t[2]=I*Pe,t[3]=k*Pe,t[4]=V*Pe,t[5]=H*Pe,t[6]=j*Pe,t[7]=$*Pe,t[8]=te*Pe,t[9]=se*Pe,t[10]=ce*Pe,t[11]=le*Pe,t[12]=pe*Pe,t[13]=De*Pe,t[14]=Ze*Pe,t[15]=Qe*Pe,t};M.inverseTransformation=function(e,t){h.typeOf.object("matrix",e),h.typeOf.object("result",t);const n=e[0],o=e[1],i=e[2],a=e[4],r=e[5],s=e[6],c=e[8],f=e[9],d=e[10],m=e[12],p=e[13],_=e[14],g=-n*m-o*p-i*_,b=-a*m-r*p-s*_,E=-c*m-f*p-d*_;return t[0]=n,t[1]=a,t[2]=c,t[3]=0,t[4]=o,t[5]=r,t[6]=f,t[7]=0,t[8]=i,t[9]=s,t[10]=d,t[11]=0,t[12]=g,t[13]=b,t[14]=E,t[15]=1,t};const Zd=new M;M.inverseTranspose=function(e,t){return h.typeOf.object("matrix",e),h.typeOf.object("result",t),M.inverse(M.transpose(e,Zd),t)};M.IDENTITY=Object.freeze(new M(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1));M.ZERO=Object.freeze(new M(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0));M.COLUMN0ROW0=0;M.COLUMN0ROW1=1;M.COLUMN0ROW2=2;M.COLUMN0ROW3=3;M.COLUMN1ROW0=4;M.COLUMN1ROW1=5;M.COLUMN1ROW2=6;M.COLUMN1ROW3=7;M.COLUMN2ROW0=8;M.COLUMN2ROW1=9;M.COLUMN2ROW2=10;M.COLUMN2ROW3=11;M.COLUMN3ROW0=12;M.COLUMN3ROW1=13;M.COLUMN3ROW2=14;M.COLUMN3ROW3=15;Object.defineProperties(M.prototype,{length:{get:function(){return M.packedLength}}});M.prototype.clone=function(e){return M.clone(this,e)};M.prototype.equals=function(e){return M.equals(this,e)};M.equalsArray=function(e,t,n){return e[0]===t[n]&&e[1]===t[n+1]&&e[2]===t[n+2]&&e[3]===t[n+3]&&e[4]===t[n+4]&&e[5]===t[n+5]&&e[6]===t[n+6]&&e[7]===t[n+7]&&e[8]===t[n+8]&&e[9]===t[n+9]&&e[10]===t[n+10]&&e[11]===t[n+11]&&e[12]===t[n+12]&&e[13]===t[n+13]&&e[14]===t[n+14]&&e[15]===t[n+15]};M.prototype.equalsEpsilon=function(e,t){return M.equalsEpsilon(this,e,t)};M.prototype.toString=function(){return`(${this[0]}, ${this[4]}, ${this[8]}, ${this[12]})
(${this[1]}, ${this[5]}, ${this[9]}, ${this[13]})
(${this[2]}, ${this[6]}, ${this[10]}, ${this[14]})
(${this[3]}, ${this[7]}, ${this[11]}, ${this[15]})`};function Oi(e,t,n){h.defined("array",e),h.defined("itemToFind",t),h.defined("comparator",n);let o=0,i=e.length-1,a,r;for(;o<=i;){if(a=~~((o+i)/2),r=n(e[a],t),r<0){o=a+1;continue}if(r>0){i=a-1;continue}return a}return~(i+1)}function ps(e,t,n,o,i){this.xPoleWander=e,this.yPoleWander=t,this.xPoleOffset=n,this.yPoleOffset=o,this.ut1MinusUtc=i}function ka(e){if(e===null||isNaN(e))throw new T("year is required and must be a number.");return e%4===0&&e%100!==0||e%400===0}const dc=[31,28,31,30,31,30,31,31,30,31,30,31];function _s(e,t,n,o,i,a,r,s){e=e??1,t=t??1,n=n??1,o=o??0,i=i??0,a=a??0,r=r??0,s=s??!1,b(),E(),this.year=e,this.month=t,this.day=n,this.hour=o,this.minute=i,this.second=a,this.millisecond=r,this.isLeapSecond=s;function b(){h.typeOf.number.greaterThanOrEquals("Year",e,1),h.typeOf.number.lessThanOrEquals("Year",e,9999),h.typeOf.number.greaterThanOrEquals("Month",t,1),h.typeOf.number.lessThanOrEquals("Month",t,12),h.typeOf.number.greaterThanOrEquals("Day",n,1),h.typeOf.number.lessThanOrEquals("Day",n,31),h.typeOf.number.greaterThanOrEquals("Hour",o,0),h.typeOf.number.lessThanOrEquals("Hour",o,23),h.typeOf.number.greaterThanOrEquals("Minute",i,0),h.typeOf.number.lessThanOrEquals("Minute",i,59),h.typeOf.bool("IsLeapSecond",s),h.typeOf.number.greaterThanOrEquals("Second",a,0),h.typeOf.number.lessThanOrEquals("Second",a,s?60:59),h.typeOf.number.greaterThanOrEquals("Millisecond",r,0),h.typeOf.number.lessThan("Millisecond",r,1e3)}function E(){const v=t===2&&ka(e)?dc[t-1]+1:dc[t-1];if(n>v)throw new T("Month and Day represents invalid date")}}function Me(e,t){this.julianDate=e,this.offset=t}const Kd={SECONDS_PER_MILLISECOND:.001,SECONDS_PER_MINUTE:60,MINUTES_PER_HOUR:60,HOURS_PER_DAY:24,SECONDS_PER_HOUR:3600,MINUTES_PER_DAY:1440,SECONDS_PER_DAY:86400,DAYS_PER_JULIAN_CENTURY:36525,PICOSECOND:1e-9,MODIFIED_JULIAN_DATE_DIFFERENCE:24000005e-1},je=Object.freeze(Kd),Qd={UTC:0,TAI:1},Ee=Object.freeze(Qd),mf=new _s,Mi=[31,28,31,30,31,30,31,31,30,31,30,31],Ni=29;function gs(e,t){return J.compare(e.julianDate,t.julianDate)}const No=new Me;function Ur(e){No.julianDate=e;const t=J.leapSeconds;let n=Oi(t,No,gs);n<0&&(n=~n),n>=t.length&&(n=t.length-1);let o=t[n].offset;n>0&&J.secondsDifference(t[n].julianDate,e)>o&&(n--,o=t[n].offset),J.addSeconds(e,o,e)}function mc(e,t){No.julianDate=e;const n=J.leapSeconds;let o=Oi(n,No,gs);if(o<0&&(o=~o),o===0)return J.addSeconds(e,-n[0].offset,t);if(o>=n.length)return J.addSeconds(e,-n[o-1].offset,t);const i=J.secondsDifference(n[o].julianDate,e);if(i===0)return J.addSeconds(e,-n[o].offset,t);if(!(i<=1))return J.addSeconds(e,-n[--o].offset,t)}function Wn(e,t,n){const o=t/je.SECONDS_PER_DAY|0;return e+=o,t-=je.SECONDS_PER_DAY*o,t<0&&(e--,t+=je.SECONDS_PER_DAY),n.dayNumber=e,n.secondsOfDay=t,n}function ys(e,t,n,o,i,a,r){const s=(t-14)/12|0,c=e+4800+s;let f=(1461*c/4|0)+(367*(t-2-12*s)/12|0)-(3*((c+100)/100|0)/4|0)+n-32075;o=o-12,o<0&&(o+=24);const d=a+(o*je.SECONDS_PER_HOUR+i*je.SECONDS_PER_MINUTE+r*je.SECONDS_PER_MILLISECOND);return d>=43200&&(f-=1),[f,d]}const Jd=/^(\d{4})$/,em=/^(\d{4})-(\d{2})$/,tm=/^(\d{4})-?(\d{3})$/,nm=/^(\d{4})-?W(\d{2})-?(\d{1})?$/,om=/^(\d{4})-?(\d{2})-?(\d{2})$/,bs=/([Z+\-])?(\d{2})?:?(\d{2})?$/,im=/^(\d{2})(\.\d+)?/.source+bs.source,rm=/^(\d{2}):?(\d{2})(\.\d+)?/.source+bs.source,am=/^(\d{2}):?(\d{2}):?(\d{2})(\.\d+)?/.source+bs.source,Wt="Invalid ISO 8601 date.";function J(e,t,n){this.dayNumber=void 0,this.secondsOfDay=void 0,e=e??0,t=t??0,n=n??Ee.UTC;const o=e|0;t=t+(e-o)*je.SECONDS_PER_DAY,Wn(o,t,this),n===Ee.UTC&&Ur(this)}J.fromGregorianDate=function(e,t){if(!(e instanceof _s))throw new T("date must be a valid GregorianDate.");const n=ys(e.year,e.month,e.day,e.hour,e.minute,e.second,e.millisecond);return u(t)?(Wn(n[0],n[1],t),Ur(t),t):new J(n[0],n[1],Ee.UTC)};J.fromDate=function(e,t){if(!(e instanceof Date)||isNaN(e.getTime()))throw new T("date must be a valid JavaScript Date.");const n=ys(e.getUTCFullYear(),e.getUTCMonth()+1,e.getUTCDate(),e.getUTCHours(),e.getUTCMinutes(),e.getUTCSeconds(),e.getUTCMilliseconds());return u(t)?(Wn(n[0],n[1],t),Ur(t),t):new J(n[0],n[1],Ee.UTC)};J.fromIso8601=function(e,t){if(typeof e!="string")throw new T(Wt);e=e.replace(",",".");let n=e.split("T"),o,i=1,a=1,r=0,s=0,c=0,f=0;const d=n[0],m=n[1];let p,_;if(!u(d))throw new T(Wt);let g;if(n=d.match(om),n!==null){if(g=d.split("-").length-1,g>0&&g!==2)throw new T(Wt);o=+n[1],i=+n[2],a=+n[3]}else if(n=d.match(em),n!==null)o=+n[1],i=+n[2];else if(n=d.match(Jd),n!==null)o=+n[1];else{let C;if(n=d.match(tm),n!==null){if(o=+n[1],C=+n[2],_=ka(o),C<1||_&&C>366||!_&&C>365)throw new T(Wt)}else if(n=d.match(nm),n!==null){o=+n[1];const x=+n[2],R=+n[3]||0;if(g=d.split("-").length-1,g>0&&(!u(n[3])&&g!==1||u(n[3])&&g!==2))throw new T(Wt);const N=new Date(Date.UTC(o,0,4));C=x*7+R-N.getUTCDay()-3}else throw new T(Wt);p=new Date(Date.UTC(o,0,1)),p.setUTCDate(C),i=p.getUTCMonth()+1,a=p.getUTCDate()}if(_=ka(o),i<1||i>12||a<1||(i!==2||!_)&&a>Mi[i-1]||_&&i===2&&a>Ni)throw new T(Wt);let b;if(u(m)){if(n=m.match(am),n!==null){if(g=m.split(":").length-1,g>0&&g!==2&&g!==3)throw new T(Wt);r=+n[1],s=+n[2],c=+n[3],f=+(n[4]||0)*1e3,b=5}else if(n=m.match(rm),n!==null){if(g=m.split(":").length-1,g>2)throw new T(Wt);r=+n[1],s=+n[2],c=+(n[3]||0)*60,b=4}else if(n=m.match(im),n!==null)r=+n[1],s=+(n[2]||0)*60,b=3;else throw new T(Wt);if(s>=60||c>=61||r>24||r===24&&(s>0||c>0||f>0))throw new T(Wt);const C=n[b],x=+n[b+1],R=+(n[b+2]||0);switch(C){case"+":r=r-x,s=s-R;break;case"-":r=r+x,s=s+R;break;case"Z":break;default:s=s+new Date(Date.UTC(o,i-1,a,r,s)).getTimezoneOffset();break}}const E=c===60;for(E&&c--;s>=60;)s-=60,r++;for(;r>=24;)r-=24,a++;for(p=_&&i===2?Ni:Mi[i-1];a>p;)a-=p,i++,i>12&&(i-=12,o++),p=_&&i===2?Ni:Mi[i-1];for(;s<0;)s+=60,r--;for(;r<0;)r+=24,a--;for(;a<1;)i--,i<1&&(i+=12,o--),p=_&&i===2?Ni:Mi[i-1],a+=p;const v=ys(o,i,a,r,s,c,f);return u(t)?(Wn(v[0],v[1],t),Ur(t)):t=new J(v[0],v[1],Ee.UTC),E&&J.addSeconds(t,1,t),t};J.now=function(e){return J.fromDate(new Date,e)};const Di=new J(0,0,Ee.TAI);J.toGregorianDate=function(e,t){if(!u(e))throw new T("julianDate is required.");let n=!1,o=mc(e,Di);u(o)||(J.addSeconds(e,-1,Di),o=mc(Di,Di),n=!0);let i=o.dayNumber;const a=o.secondsOfDay;a>=43200&&(i+=1);let r=i+68569|0;const s=4*r/146097|0;r=r-((146097*s+3)/4|0)|0;const c=4e3*(r+1)/1461001|0;r=r-(1461*c/4|0)+31|0;const f=80*r/2447|0,d=r-(2447*f/80|0)|0;r=f/11|0;const m=f+2-12*r|0,p=100*(s-49)+c+r|0;let _=a/je.SECONDS_PER_HOUR|0,g=a-_*je.SECONDS_PER_HOUR;const b=g/je.SECONDS_PER_MINUTE|0;g=g-b*je.SECONDS_PER_MINUTE;let E=g|0;const v=(g-E)/je.SECONDS_PER_MILLISECOND;return _+=12,_>23&&(_-=24),n&&(E+=1),u(t)?(t.year=p,t.month=m,t.day=d,t.hour=_,t.minute=b,t.second=E,t.millisecond=v,t.isLeapSecond=n,t):new _s(p,m,d,_,b,E,v,n)};J.toDate=function(e){if(!u(e))throw new T("julianDate is required.");const t=J.toGregorianDate(e,mf);let n=t.second;return t.isLeapSecond&&(n-=1),new Date(Date.UTC(t.year,t.month-1,t.day,t.hour,t.minute,n,t.millisecond))};J.toIso8601=function(e,t){if(!u(e))throw new T("julianDate is required.");const n=J.toGregorianDate(e,mf);let o=n.year,i=n.month,a=n.day,r=n.hour;const s=n.minute,c=n.second,f=n.millisecond;o===1e4&&i===1&&a===1&&r===0&&s===0&&c===0&&f===0&&(o=9999,i=12,a=31,r=24);let d;if(!u(t)&&f!==0){const m=f*.01;return d=m<1e-6?m.toFixed(20).replace(".","").replace(/0+$/,""):m.toString().replace(".",""),`${o.toString().padStart(4,"0")}-${i.toString().padStart(2,"0")}-${a.toString().padStart(2,"0")}T${r.toString().padStart(2,"0")}:${s.toString().padStart(2,"0")}:${c.toString().padStart(2,"0")}.${d}Z`}return!u(t)||t===0?`${o.toString().padStart(4,"0")}-${i.toString().padStart(2,"0")}-${a.toString().padStart(2,"0")}T${r.toString().padStart(2,"0")}:${s.toString().padStart(2,"0")}:${c.toString().padStart(2,"0")}Z`:(d=(f*.01).toFixed(t).replace(".","").slice(0,t),`${o.toString().padStart(4,"0")}-${i.toString().padStart(2,"0")}-${a.toString().padStart(2,"0")}T${r.toString().padStart(2,"0")}:${s.toString().padStart(2,"0")}:${c.toString().padStart(2,"0")}.${d}Z`)};J.clone=function(e,t){if(u(e))return u(t)?(t.dayNumber=e.dayNumber,t.secondsOfDay=e.secondsOfDay,t):new J(e.dayNumber,e.secondsOfDay,Ee.TAI)};J.compare=function(e,t){if(!u(e))throw new T("left is required.");if(!u(t))throw new T("right is required.");const n=e.dayNumber-t.dayNumber;return n!==0?n:e.secondsOfDay-t.secondsOfDay};J.equals=function(e,t){return e===t||u(e)&&u(t)&&e.dayNumber===t.dayNumber&&e.secondsOfDay===t.secondsOfDay};J.equalsEpsilon=function(e,t,n){return n=n??0,e===t||u(e)&&u(t)&&Math.abs(J.secondsDifference(e,t))<=n};J.totalDays=function(e){if(!u(e))throw new T("julianDate is required.");return e.dayNumber+e.secondsOfDay/je.SECONDS_PER_DAY};J.secondsDifference=function(e,t){if(!u(e))throw new T("left is required.");if(!u(t))throw new T("right is required.");return(e.dayNumber-t.dayNumber)*je.SECONDS_PER_DAY+(e.secondsOfDay-t.secondsOfDay)};J.daysDifference=function(e,t){if(!u(e))throw new T("left is required.");if(!u(t))throw new T("right is required.");const n=e.dayNumber-t.dayNumber,o=(e.secondsOfDay-t.secondsOfDay)/je.SECONDS_PER_DAY;return n+o};J.computeTaiMinusUtc=function(e){No.julianDate=e;const t=J.leapSeconds;let n=Oi(t,No,gs);return n<0&&(n=~n,--n,n<0&&(n=0)),t[n].offset};J.addSeconds=function(e,t,n){if(!u(e))throw new T("julianDate is required.");if(!u(t))throw new T("seconds is required.");if(!u(n))throw new T("result is required.");return Wn(e.dayNumber,e.secondsOfDay+t,n)};J.addMinutes=function(e,t,n){if(!u(e))throw new T("julianDate is required.");if(!u(t))throw new T("minutes is required.");if(!u(n))throw new T("result is required.");const o=e.secondsOfDay+t*je.SECONDS_PER_MINUTE;return Wn(e.dayNumber,o,n)};J.addHours=function(e,t,n){if(!u(e))throw new T("julianDate is required.");if(!u(t))throw new T("hours is required.");if(!u(n))throw new T("result is required.");const o=e.secondsOfDay+t*je.SECONDS_PER_HOUR;return Wn(e.dayNumber,o,n)};J.addDays=function(e,t,n){if(!u(e))throw new T("julianDate is required.");if(!u(t))throw new T("days is required.");if(!u(n))throw new T("result is required.");const o=e.dayNumber+t;return Wn(o,e.secondsOfDay,n)};J.lessThan=function(e,t){return J.compare(e,t)<0};J.lessThanOrEquals=function(e,t){return J.compare(e,t)<=0};J.greaterThan=function(e,t){return J.compare(e,t)>0};J.greaterThanOrEquals=function(e,t){return J.compare(e,t)>=0};J.prototype.clone=function(e){return J.clone(this,e)};J.prototype.equals=function(e){return J.equals(this,e)};J.prototype.equalsEpsilon=function(e,t){return J.equalsEpsilon(this,e,t)};J.prototype.toString=function(){return J.toIso8601(this)};J.leapSeconds=[new Me(new J(2441317,43210,Ee.TAI),10),new Me(new J(2441499,43211,Ee.TAI),11),new Me(new J(2441683,43212,Ee.TAI),12),new Me(new J(2442048,43213,Ee.TAI),13),new Me(new J(2442413,43214,Ee.TAI),14),new Me(new J(2442778,43215,Ee.TAI),15),new Me(new J(2443144,43216,Ee.TAI),16),new Me(new J(2443509,43217,Ee.TAI),17),new Me(new J(2443874,43218,Ee.TAI),18),new Me(new J(2444239,43219,Ee.TAI),19),new Me(new J(2444786,43220,Ee.TAI),20),new Me(new J(2445151,43221,Ee.TAI),21),new Me(new J(2445516,43222,Ee.TAI),22),new Me(new J(2446247,43223,Ee.TAI),23),new Me(new J(2447161,43224,Ee.TAI),24),new Me(new J(2447892,43225,Ee.TAI),25),new Me(new J(2448257,43226,Ee.TAI),26),new Me(new J(2448804,43227,Ee.TAI),27),new Me(new J(2449169,43228,Ee.TAI),28),new Me(new J(2449534,43229,Ee.TAI),29),new Me(new J(2450083,43230,Ee.TAI),30),new Me(new J(2450630,43231,Ee.TAI),31),new Me(new J(2451179,43232,Ee.TAI),32),new Me(new J(2453736,43233,Ee.TAI),33),new Me(new J(2454832,43234,Ee.TAI),34),new Me(new J(2456109,43235,Ee.TAI),35),new Me(new J(2457204,43236,Ee.TAI),36),new Me(new J(2457754,43237,Ee.TAI),37)];var pf={exports:{}},ii={exports:{}};/*! https://mths.be/punycode v1.4.0 by @mathias */ii.exports;var pc;function sm(){return pc||(pc=1,function(e,t){(function(n){var o=t&&!t.nodeType&&t,i=!e.nodeType&&e,a=typeof Ro=="object"&&Ro;(a.global===a||a.window===a||a.self===a)&&(n=a);var r,s=2147483647,c=36,f=1,d=26,m=38,p=700,_=72,g=128,b="-",E=/^xn--/,v=/[^\x20-\x7E]/,C=/[\x2E\u3002\uFF0E\uFF61]/g,x={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},R=c-f,N=Math.floor,F=String.fromCharCode,q;function D(j){throw new RangeError(x[j])}function B(j,$){for(var te=j.length,se=[];te--;)se[te]=$(j[te]);return se}function L(j,$){var te=j.split("@"),se="";te.length>1&&(se=te[0]+"@",j=te[1]),j=j.replace(C,".");var ce=j.split("."),le=B(ce,$).join(".");return se+le}function G(j){for(var $=[],te=0,se=j.length,ce,le;te<se;)ce=j.charCodeAt(te++),ce>=55296&&ce<=56319&&te<se?(le=j.charCodeAt(te++),(le&64512)==56320?$.push(((ce&1023)<<10)+(le&1023)+65536):($.push(ce),te--)):$.push(ce);return $}function Y(j){return B(j,function($){var te="";return $>65535&&($-=65536,te+=F($>>>10&1023|55296),$=56320|$&1023),te+=F($),te}).join("")}function y(j){return j-48<10?j-22:j-65<26?j-65:j-97<26?j-97:c}function w(j,$){return j+22+75*(j<26)-(($!=0)<<5)}function S(j,$,te){var se=0;for(j=te?N(j/p):j>>1,j+=N(j/$);j>R*d>>1;se+=c)j=N(j/R);return N(se+(R+1)*j/(j+m))}function I(j){var $=[],te=j.length,se,ce=0,le=g,pe=_,De,Ze,Qe,Pe,at,vt,Dt,an,Xn;for(De=j.lastIndexOf(b),De<0&&(De=0),Ze=0;Ze<De;++Ze)j.charCodeAt(Ze)>=128&&D("not-basic"),$.push(j.charCodeAt(Ze));for(Qe=De>0?De+1:0;Qe<te;){for(Pe=ce,at=1,vt=c;Qe>=te&&D("invalid-input"),Dt=y(j.charCodeAt(Qe++)),(Dt>=c||Dt>N((s-ce)/at))&&D("overflow"),ce+=Dt*at,an=vt<=pe?f:vt>=pe+d?d:vt-pe,!(Dt<an);vt+=c)Xn=c-an,at>N(s/Xn)&&D("overflow"),at*=Xn;se=$.length+1,pe=S(ce-Pe,se,Pe==0),N(ce/se)>s-le&&D("overflow"),le+=N(ce/se),ce%=se,$.splice(ce++,0,le)}return Y($)}function k(j){var $,te,se,ce,le,pe,De,Ze,Qe,Pe,at,vt=[],Dt,an,Xn,Wr;for(j=G(j),Dt=j.length,$=g,te=0,le=_,pe=0;pe<Dt;++pe)at=j[pe],at<128&&vt.push(F(at));for(se=ce=vt.length,ce&&vt.push(b);se<Dt;){for(De=s,pe=0;pe<Dt;++pe)at=j[pe],at>=$&&at<De&&(De=at);for(an=se+1,De-$>N((s-te)/an)&&D("overflow"),te+=(De-$)*an,$=De,pe=0;pe<Dt;++pe)if(at=j[pe],at<$&&++te>s&&D("overflow"),at==$){for(Ze=te,Qe=c;Pe=Qe<=le?f:Qe>=le+d?d:Qe-le,!(Ze<Pe);Qe+=c)Wr=Ze-Pe,Xn=c-Pe,vt.push(F(w(Pe+Wr%Xn,0))),Ze=N(Wr/Xn);vt.push(F(w(Ze,0))),le=S(te,an,se==ce),te=0,++se}++te,++$}return vt.join("")}function V(j){return L(j,function($){return E.test($)?I($.slice(4).toLowerCase()):$})}function H(j){return L(j,function($){return v.test($)?"xn--"+k($):$})}if(r={version:"1.3.2",ucs2:{decode:G,encode:Y},decode:I,encode:k,toASCII:H,toUnicode:V},o&&i)if(e.exports==o)i.exports=r;else for(q in r)r.hasOwnProperty(q)&&(o[q]=r[q]);else n.punycode=r})(Ro)}(ii,ii.exports)),ii.exports}var Zr={exports:{}};/*!
 * URI.js - Mutating URLs
 * IPv6 Support
 *
 * Version: 1.19.11
 *
 * Author: Rodney Rehm
 * Web: http://medialize.github.io/URI.js/
 *
 * Licensed under
 *   MIT License http://www.opensource.org/licenses/mit-license
 *
 */var _c;function cm(){return _c||(_c=1,function(e){(function(t,n){e.exports?e.exports=n():t.IPv6=n(t)})(Ro,function(t){var n=t&&t.IPv6;function o(a){var r=a.toLowerCase(),s=r.split(":"),c=s.length,f=8;s[0]===""&&s[1]===""&&s[2]===""?(s.shift(),s.shift()):s[0]===""&&s[1]===""?s.shift():s[c-1]===""&&s[c-2]===""&&s.pop(),c=s.length,s[c-1].indexOf(".")!==-1&&(f=7);var d;for(d=0;d<c&&s[d]!=="";d++);if(d<f)for(s.splice(d,1,"0000");s.length<f;)s.splice(d,0,"0000");for(var m,p=0;p<f;p++){m=s[p].split("");for(var _=0;_<3&&(m[0]==="0"&&m.length>1);_++)m.splice(0,1);s[p]=m.join("")}var g=-1,b=0,E=0,v=-1,C=!1;for(p=0;p<f;p++)C?s[p]==="0"?E+=1:(C=!1,E>b&&(g=v,b=E)):s[p]==="0"&&(C=!0,v=p,E=1);E>b&&(g=v,b=E),b>1&&s.splice(g,b,""),c=s.length;var x="";for(s[0]===""&&(x=":"),p=0;p<c&&(x+=s[p],p!==c-1);p++)x+=":";return s[c-1]===""&&(x+=":"),x}function i(){return t.IPv6===this&&(t.IPv6=n),this}return{best:o,noConflict:i}})}(Zr)),Zr.exports}var Kr={exports:{}};/*!
 * URI.js - Mutating URLs
 * Second Level Domain (SLD) Support
 *
 * Version: 1.19.11
 *
 * Author: Rodney Rehm
 * Web: http://medialize.github.io/URI.js/
 *
 * Licensed under
 *   MIT License http://www.opensource.org/licenses/mit-license
 *
 */var gc;function lm(){return gc||(gc=1,function(e){(function(t,n){e.exports?e.exports=n():t.SecondLevelDomains=n(t)})(Ro,function(t){var n=t&&t.SecondLevelDomains,o={list:{ac:" com gov mil net org ",ae:" ac co gov mil name net org pro sch ",af:" com edu gov net org ",al:" com edu gov mil net org ",ao:" co ed gv it og pb ",ar:" com edu gob gov int mil net org tur ",at:" ac co gv or ",au:" asn com csiro edu gov id net org ",ba:" co com edu gov mil net org rs unbi unmo unsa untz unze ",bb:" biz co com edu gov info net org store tv ",bh:" biz cc com edu gov info net org ",bn:" com edu gov net org ",bo:" com edu gob gov int mil net org tv ",br:" adm adv agr am arq art ato b bio blog bmd cim cng cnt com coop ecn edu eng esp etc eti far flog fm fnd fot fst g12 ggf gov imb ind inf jor jus lel mat med mil mus net nom not ntr odo org ppg pro psc psi qsl rec slg srv tmp trd tur tv vet vlog wiki zlg ",bs:" com edu gov net org ",bz:" du et om ov rg ",ca:" ab bc mb nb nf nl ns nt nu on pe qc sk yk ",ck:" biz co edu gen gov info net org ",cn:" ac ah bj com cq edu fj gd gov gs gx gz ha hb he hi hl hn jl js jx ln mil net nm nx org qh sc sd sh sn sx tj tw xj xz yn zj ",co:" com edu gov mil net nom org ",cr:" ac c co ed fi go or sa ",cy:" ac biz com ekloges gov ltd name net org parliament press pro tm ",do:" art com edu gob gov mil net org sld web ",dz:" art asso com edu gov net org pol ",ec:" com edu fin gov info med mil net org pro ",eg:" com edu eun gov mil name net org sci ",er:" com edu gov ind mil net org rochest w ",es:" com edu gob nom org ",et:" biz com edu gov info name net org ",fj:" ac biz com info mil name net org pro ",fk:" ac co gov net nom org ",fr:" asso com f gouv nom prd presse tm ",gg:" co net org ",gh:" com edu gov mil org ",gn:" ac com gov net org ",gr:" com edu gov mil net org ",gt:" com edu gob ind mil net org ",gu:" com edu gov net org ",hk:" com edu gov idv net org ",hu:" 2000 agrar bolt casino city co erotica erotika film forum games hotel info ingatlan jogasz konyvelo lakas media news org priv reklam sex shop sport suli szex tm tozsde utazas video ",id:" ac co go mil net or sch web ",il:" ac co gov idf k12 muni net org ",in:" ac co edu ernet firm gen gov i ind mil net nic org res ",iq:" com edu gov i mil net org ",ir:" ac co dnssec gov i id net org sch ",it:" edu gov ",je:" co net org ",jo:" com edu gov mil name net org sch ",jp:" ac ad co ed go gr lg ne or ",ke:" ac co go info me mobi ne or sc ",kh:" com edu gov mil net org per ",ki:" biz com de edu gov info mob net org tel ",km:" asso com coop edu gouv k medecin mil nom notaires pharmaciens presse tm veterinaire ",kn:" edu gov net org ",kr:" ac busan chungbuk chungnam co daegu daejeon es gangwon go gwangju gyeongbuk gyeonggi gyeongnam hs incheon jeju jeonbuk jeonnam k kg mil ms ne or pe re sc seoul ulsan ",kw:" com edu gov net org ",ky:" com edu gov net org ",kz:" com edu gov mil net org ",lb:" com edu gov net org ",lk:" assn com edu gov grp hotel int ltd net ngo org sch soc web ",lr:" com edu gov net org ",lv:" asn com conf edu gov id mil net org ",ly:" com edu gov id med net org plc sch ",ma:" ac co gov m net org press ",mc:" asso tm ",me:" ac co edu gov its net org priv ",mg:" com edu gov mil nom org prd tm ",mk:" com edu gov inf name net org pro ",ml:" com edu gov net org presse ",mn:" edu gov org ",mo:" com edu gov net org ",mt:" com edu gov net org ",mv:" aero biz com coop edu gov info int mil museum name net org pro ",mw:" ac co com coop edu gov int museum net org ",mx:" com edu gob net org ",my:" com edu gov mil name net org sch ",nf:" arts com firm info net other per rec store web ",ng:" biz com edu gov mil mobi name net org sch ",ni:" ac co com edu gob mil net nom org ",np:" com edu gov mil net org ",nr:" biz com edu gov info net org ",om:" ac biz co com edu gov med mil museum net org pro sch ",pe:" com edu gob mil net nom org sld ",ph:" com edu gov i mil net ngo org ",pk:" biz com edu fam gob gok gon gop gos gov net org web ",pl:" art bialystok biz com edu gda gdansk gorzow gov info katowice krakow lodz lublin mil net ngo olsztyn org poznan pwr radom slupsk szczecin torun warszawa waw wroc wroclaw zgora ",pr:" ac biz com edu est gov info isla name net org pro prof ",ps:" com edu gov net org plo sec ",pw:" belau co ed go ne or ",ro:" arts com firm info nom nt org rec store tm www ",rs:" ac co edu gov in org ",sb:" com edu gov net org ",sc:" com edu gov net org ",sh:" co com edu gov net nom org ",sl:" com edu gov net org ",st:" co com consulado edu embaixada gov mil net org principe saotome store ",sv:" com edu gob org red ",sz:" ac co org ",tr:" av bbs bel biz com dr edu gen gov info k12 name net org pol tel tsk tv web ",tt:" aero biz cat co com coop edu gov info int jobs mil mobi museum name net org pro tel travel ",tw:" club com ebiz edu game gov idv mil net org ",mu:" ac co com gov net or org ",mz:" ac co edu gov org ",na:" co com ",nz:" ac co cri geek gen govt health iwi maori mil net org parliament school ",pa:" abo ac com edu gob ing med net nom org sld ",pt:" com edu gov int net nome org publ ",py:" com edu gov mil net org ",qa:" com edu gov mil net org ",re:" asso com nom ",ru:" ac adygeya altai amur arkhangelsk astrakhan bashkiria belgorod bir bryansk buryatia cbg chel chelyabinsk chita chukotka chuvashia com dagestan e-burg edu gov grozny int irkutsk ivanovo izhevsk jar joshkar-ola kalmykia kaluga kamchatka karelia kazan kchr kemerovo khabarovsk khakassia khv kirov koenig komi kostroma kranoyarsk kuban kurgan kursk lipetsk magadan mari mari-el marine mil mordovia mosreg msk murmansk nalchik net nnov nov novosibirsk nsk omsk orenburg org oryol penza perm pp pskov ptz rnd ryazan sakhalin samara saratov simbirsk smolensk spb stavropol stv surgut tambov tatarstan tom tomsk tsaritsyn tsk tula tuva tver tyumen udm udmurtia ulan-ude vladikavkaz vladimir vladivostok volgograd vologda voronezh vrn vyatka yakutia yamal yekaterinburg yuzhno-sakhalinsk ",rw:" ac co com edu gouv gov int mil net ",sa:" com edu gov med net org pub sch ",sd:" com edu gov info med net org tv ",se:" a ac b bd c d e f g h i k l m n o org p parti pp press r s t tm u w x y z ",sg:" com edu gov idn net org per ",sn:" art com edu gouv org perso univ ",sy:" com edu gov mil net news org ",th:" ac co go in mi net or ",tj:" ac biz co com edu go gov info int mil name net nic org test web ",tn:" agrinet com defense edunet ens fin gov ind info intl mincom nat net org perso rnrt rns rnu tourism ",tz:" ac co go ne or ",ua:" biz cherkassy chernigov chernovtsy ck cn co com crimea cv dn dnepropetrovsk donetsk dp edu gov if in ivano-frankivsk kh kharkov kherson khmelnitskiy kiev kirovograd km kr ks kv lg lugansk lutsk lviv me mk net nikolaev od odessa org pl poltava pp rovno rv sebastopol sumy te ternopil uzhgorod vinnica vn zaporizhzhe zhitomir zp zt ",ug:" ac co go ne or org sc ",uk:" ac bl british-library co cym gov govt icnet jet lea ltd me mil mod national-library-scotland nel net nhs nic nls org orgn parliament plc police sch scot soc ",us:" dni fed isa kids nsn ",uy:" com edu gub mil net org ",ve:" co com edu gob info mil net org web ",vi:" co com k12 net org ",vn:" ac biz com edu gov health info int name net org pro ",ye:" co com gov ltd me net org plc ",yu:" ac co edu gov org ",za:" ac agric alt bourse city co cybernet db edu gov grondar iaccess imt inca landesign law mil net ngo nis nom olivetti org pix school tm web ",zm:" ac co com edu gov net org sch ",com:"ar br cn de eu gb gr hu jpn kr no qc ru sa se uk us uy za ",net:"gb jp se uk ",org:"ae",de:"com "},has:function(i){var a=i.lastIndexOf(".");if(a<=0||a>=i.length-1)return!1;var r=i.lastIndexOf(".",a-1);if(r<=0||r>=a-1)return!1;var s=o.list[i.slice(a+1)];return s?s.indexOf(" "+i.slice(r+1,a)+" ")>=0:!1},is:function(i){var a=i.lastIndexOf(".");if(a<=0||a>=i.length-1)return!1;var r=i.lastIndexOf(".",a-1);if(r>=0)return!1;var s=o.list[i.slice(a+1)];return s?s.indexOf(" "+i.slice(0,a)+" ")>=0:!1},get:function(i){var a=i.lastIndexOf(".");if(a<=0||a>=i.length-1)return null;var r=i.lastIndexOf(".",a-1);if(r<=0||r>=a-1)return null;var s=o.list[i.slice(a+1)];return!s||s.indexOf(" "+i.slice(r+1,a)+" ")<0?null:i.slice(r+1)},noConflict:function(){return t.SecondLevelDomains===this&&(t.SecondLevelDomains=n),this}};return o})}(Kr)),Kr.exports}/*!
 * URI.js - Mutating URLs
 *
 * Version: 1.19.11
 *
 * Author: Rodney Rehm
 * Web: http://medialize.github.io/URI.js/
 *
 * Licensed under
 *   MIT License http://www.opensource.org/licenses/mit-license
 *
 */(function(e){(function(t,n){e.exports?e.exports=n(sm(),cm(),lm()):t.URI=n(t.punycode,t.IPv6,t.SecondLevelDomains,t)})(Ro,function(t,n,o,i){var a=i&&i.URI;function r(y,w){var S=arguments.length>=1,I=arguments.length>=2;if(!(this instanceof r))return S?I?new r(y,w):new r(y):new r;if(y===void 0){if(S)throw new TypeError("undefined is not a valid argument for URI");typeof location<"u"?y=location.href+"":y=""}if(y===null&&S)throw new TypeError("null is not a valid argument for URI");return this.href(y),w!==void 0?this.absoluteTo(w):this}function s(y){return/^[0-9]+$/.test(y)}r.version="1.19.11";var c=r.prototype,f=Object.prototype.hasOwnProperty;function d(y){return y.replace(/([.*+?^=!:${}()|[\]\/\\])/g,"\\$1")}function m(y){return y===void 0?"Undefined":String(Object.prototype.toString.call(y)).slice(8,-1)}function p(y){return m(y)==="Array"}function _(y,w){var S={},I,k;if(m(w)==="RegExp")S=null;else if(p(w))for(I=0,k=w.length;I<k;I++)S[w[I]]=!0;else S[w]=!0;for(I=0,k=y.length;I<k;I++){var V=S&&S[y[I]]!==void 0||!S&&w.test(y[I]);V&&(y.splice(I,1),k--,I--)}return y}function g(y,w){var S,I;if(p(w)){for(S=0,I=w.length;S<I;S++)if(!g(y,w[S]))return!1;return!0}var k=m(w);for(S=0,I=y.length;S<I;S++)if(k==="RegExp"){if(typeof y[S]=="string"&&y[S].match(w))return!0}else if(y[S]===w)return!0;return!1}function b(y,w){if(!p(y)||!p(w)||y.length!==w.length)return!1;y.sort(),w.sort();for(var S=0,I=y.length;S<I;S++)if(y[S]!==w[S])return!1;return!0}function E(y){var w=/^\/+|\/+$/g;return y.replace(w,"")}r._parts=function(){return{protocol:null,username:null,password:null,hostname:null,urn:null,port:null,path:null,query:null,fragment:null,preventInvalidHostname:r.preventInvalidHostname,duplicateQueryParameters:r.duplicateQueryParameters,escapeQuerySpace:r.escapeQuerySpace}},r.preventInvalidHostname=!1,r.duplicateQueryParameters=!1,r.escapeQuerySpace=!0,r.protocol_expression=/^[a-z][a-z0-9.+-]*$/i,r.idn_expression=/[^a-z0-9\._-]/i,r.punycode_expression=/(xn--)/i,r.ip4_expression=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,r.ip6_expression=/^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/,r.find_uri_expression=/\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))/ig,r.findUri={start:/\b(?:([a-z][a-z0-9.+-]*:\/\/)|www\.)/gi,end:/[\s\r\n]|$/,trim:/[`!()\[\]{};:'".,<>?«»“”„‘’]+$/,parens:/(\([^\)]*\)|\[[^\]]*\]|\{[^}]*\}|<[^>]*>)/g},r.leading_whitespace_expression=/^[\x00-\x20\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+/,r.ascii_tab_whitespace=/[\u0009\u000A\u000D]+/g,r.defaultPorts={http:"80",https:"443",ftp:"21",gopher:"70",ws:"80",wss:"443"},r.hostProtocols=["http","https"],r.invalid_hostname_characters=/[^a-zA-Z0-9\.\-:_]/,r.domAttributes={a:"href",blockquote:"cite",link:"href",base:"href",script:"src",form:"action",img:"src",area:"href",iframe:"src",embed:"src",source:"src",track:"src",input:"src",audio:"src",video:"src"},r.getDomAttribute=function(y){if(!(!y||!y.nodeName)){var w=y.nodeName.toLowerCase();if(!(w==="input"&&y.type!=="image"))return r.domAttributes[w]}};function v(y){return escape(y)}function C(y){return encodeURIComponent(y).replace(/[!'()*]/g,v).replace(/\*/g,"%2A")}r.encode=C,r.decode=decodeURIComponent,r.iso8859=function(){r.encode=escape,r.decode=unescape},r.unicode=function(){r.encode=C,r.decode=decodeURIComponent},r.characters={pathname:{encode:{expression:/%(24|26|2B|2C|3B|3D|3A|40)/ig,map:{"%24":"$","%26":"&","%2B":"+","%2C":",","%3B":";","%3D":"=","%3A":":","%40":"@"}},decode:{expression:/[\/\?#]/g,map:{"/":"%2F","?":"%3F","#":"%23"}}},reserved:{encode:{expression:/%(21|23|24|26|27|28|29|2A|2B|2C|2F|3A|3B|3D|3F|40|5B|5D)/ig,map:{"%3A":":","%2F":"/","%3F":"?","%23":"#","%5B":"[","%5D":"]","%40":"@","%21":"!","%24":"$","%26":"&","%27":"'","%28":"(","%29":")","%2A":"*","%2B":"+","%2C":",","%3B":";","%3D":"="}}},urnpath:{encode:{expression:/%(21|24|27|28|29|2A|2B|2C|3B|3D|40)/ig,map:{"%21":"!","%24":"$","%27":"'","%28":"(","%29":")","%2A":"*","%2B":"+","%2C":",","%3B":";","%3D":"=","%40":"@"}},decode:{expression:/[\/\?#:]/g,map:{"/":"%2F","?":"%3F","#":"%23",":":"%3A"}}}},r.encodeQuery=function(y,w){var S=r.encode(y+"");return w===void 0&&(w=r.escapeQuerySpace),w?S.replace(/%20/g,"+"):S},r.decodeQuery=function(y,w){y+="",w===void 0&&(w=r.escapeQuerySpace);try{return r.decode(w?y.replace(/\+/g,"%20"):y)}catch{return y}};var x={encode:"encode",decode:"decode"},R,N=function(y,w){return function(S){try{return r[w](S+"").replace(r.characters[y][w].expression,function(I){return r.characters[y][w].map[I]})}catch{return S}}};for(R in x)r[R+"PathSegment"]=N("pathname",x[R]),r[R+"UrnPathSegment"]=N("urnpath",x[R]);var F=function(y,w,S){return function(I){var k;S?k=function($){return r[w](r[S]($))}:k=r[w];for(var V=(I+"").split(y),H=0,j=V.length;H<j;H++)V[H]=k(V[H]);return V.join(y)}};r.decodePath=F("/","decodePathSegment"),r.decodeUrnPath=F(":","decodeUrnPathSegment"),r.recodePath=F("/","encodePathSegment","decode"),r.recodeUrnPath=F(":","encodeUrnPathSegment","decode"),r.encodeReserved=N("reserved","encode"),r.parse=function(y,w){var S;return w||(w={preventInvalidHostname:r.preventInvalidHostname}),y=y.replace(r.leading_whitespace_expression,""),y=y.replace(r.ascii_tab_whitespace,""),S=y.indexOf("#"),S>-1&&(w.fragment=y.substring(S+1)||null,y=y.substring(0,S)),S=y.indexOf("?"),S>-1&&(w.query=y.substring(S+1)||null,y=y.substring(0,S)),y=y.replace(/^(https?|ftp|wss?)?:+[/\\]*/i,"$1://"),y=y.replace(/^[/\\]{2,}/i,"//"),y.substring(0,2)==="//"?(w.protocol=null,y=y.substring(2),y=r.parseAuthority(y,w)):(S=y.indexOf(":"),S>-1&&(w.protocol=y.substring(0,S)||null,w.protocol&&!w.protocol.match(r.protocol_expression)?w.protocol=void 0:y.substring(S+1,S+3).replace(/\\/g,"/")==="//"?(y=y.substring(S+3),y=r.parseAuthority(y,w)):(y=y.substring(S+1),w.urn=!0))),w.path=y,w},r.parseHost=function(y,w){y||(y=""),y=y.replace(/\\/g,"/");var S=y.indexOf("/"),I,k;if(S===-1&&(S=y.length),y.charAt(0)==="[")I=y.indexOf("]"),w.hostname=y.substring(1,I)||null,w.port=y.substring(I+2,S)||null,w.port==="/"&&(w.port=null);else{var V=y.indexOf(":"),H=y.indexOf("/"),j=y.indexOf(":",V+1);j!==-1&&(H===-1||j<H)?(w.hostname=y.substring(0,S)||null,w.port=null):(k=y.substring(0,S).split(":"),w.hostname=k[0]||null,w.port=k[1]||null)}return w.hostname&&y.substring(S).charAt(0)!=="/"&&(S++,y="/"+y),w.preventInvalidHostname&&r.ensureValidHostname(w.hostname,w.protocol),w.port&&r.ensureValidPort(w.port),y.substring(S)||"/"},r.parseAuthority=function(y,w){return y=r.parseUserinfo(y,w),r.parseHost(y,w)},r.parseUserinfo=function(y,w){var S=y,I=y.indexOf("\\");I!==-1&&(y=y.replace(/\\/g,"/"));var k=y.indexOf("/"),V=y.lastIndexOf("@",k>-1?k:y.length-1),H;return V>-1&&(k===-1||V<k)?(H=y.substring(0,V).split(":"),w.username=H[0]?r.decode(H[0]):null,H.shift(),w.password=H[0]?r.decode(H.join(":")):null,y=S.substring(V+1)):(w.username=null,w.password=null),y},r.parseQuery=function(y,w){if(!y)return{};if(y=y.replace(/&+/g,"&").replace(/^\?*&*|&+$/g,""),!y)return{};for(var S={},I=y.split("&"),k=I.length,V,H,j,$=0;$<k;$++)V=I[$].split("="),H=r.decodeQuery(V.shift(),w),j=V.length?r.decodeQuery(V.join("="),w):null,H!=="__proto__"&&(f.call(S,H)?((typeof S[H]=="string"||S[H]===null)&&(S[H]=[S[H]]),S[H].push(j)):S[H]=j);return S},r.build=function(y){var w="",S=!1;return y.protocol&&(w+=y.protocol+":"),!y.urn&&(w||y.hostname)&&(w+="//",S=!0),w+=r.buildAuthority(y)||"",typeof y.path=="string"&&(y.path.charAt(0)!=="/"&&S&&(w+="/"),w+=y.path),typeof y.query=="string"&&y.query&&(w+="?"+y.query),typeof y.fragment=="string"&&y.fragment&&(w+="#"+y.fragment),w},r.buildHost=function(y){var w="";if(y.hostname)r.ip6_expression.test(y.hostname)?w+="["+y.hostname+"]":w+=y.hostname;else return"";return y.port&&(w+=":"+y.port),w},r.buildAuthority=function(y){return r.buildUserinfo(y)+r.buildHost(y)},r.buildUserinfo=function(y){var w="";return y.username&&(w+=r.encode(y.username)),y.password&&(w+=":"+r.encode(y.password)),w&&(w+="@"),w},r.buildQuery=function(y,w,S){var I="",k,V,H,j;for(V in y)if(V!=="__proto__"&&f.call(y,V))if(p(y[V]))for(k={},H=0,j=y[V].length;H<j;H++)y[V][H]!==void 0&&k[y[V][H]+""]===void 0&&(I+="&"+r.buildQueryParameter(V,y[V][H],S),w!==!0&&(k[y[V][H]+""]=!0));else y[V]!==void 0&&(I+="&"+r.buildQueryParameter(V,y[V],S));return I.substring(1)},r.buildQueryParameter=function(y,w,S){return r.encodeQuery(y,S)+(w!==null?"="+r.encodeQuery(w,S):"")},r.addQuery=function(y,w,S){if(typeof w=="object")for(var I in w)f.call(w,I)&&r.addQuery(y,I,w[I]);else if(typeof w=="string"){if(y[w]===void 0){y[w]=S;return}else typeof y[w]=="string"&&(y[w]=[y[w]]);p(S)||(S=[S]),y[w]=(y[w]||[]).concat(S)}else throw new TypeError("URI.addQuery() accepts an object, string as the name parameter")},r.setQuery=function(y,w,S){if(typeof w=="object")for(var I in w)f.call(w,I)&&r.setQuery(y,I,w[I]);else if(typeof w=="string")y[w]=S===void 0?null:S;else throw new TypeError("URI.setQuery() accepts an object, string as the name parameter")},r.removeQuery=function(y,w,S){var I,k,V;if(p(w))for(I=0,k=w.length;I<k;I++)y[w[I]]=void 0;else if(m(w)==="RegExp")for(V in y)w.test(V)&&(y[V]=void 0);else if(typeof w=="object")for(V in w)f.call(w,V)&&r.removeQuery(y,V,w[V]);else if(typeof w=="string")S!==void 0?m(S)==="RegExp"?!p(y[w])&&S.test(y[w])?y[w]=void 0:y[w]=_(y[w],S):y[w]===String(S)&&(!p(S)||S.length===1)?y[w]=void 0:p(y[w])&&(y[w]=_(y[w],S)):y[w]=void 0;else throw new TypeError("URI.removeQuery() accepts an object, string, RegExp as the first parameter")},r.hasQuery=function(y,w,S,I){switch(m(w)){case"String":break;case"RegExp":for(var k in y)if(f.call(y,k)&&w.test(k)&&(S===void 0||r.hasQuery(y,k,S)))return!0;return!1;case"Object":for(var V in w)if(f.call(w,V)&&!r.hasQuery(y,V,w[V]))return!1;return!0;default:throw new TypeError("URI.hasQuery() accepts a string, regular expression or object as the name parameter")}switch(m(S)){case"Undefined":return w in y;case"Boolean":var H=!!(p(y[w])?y[w].length:y[w]);return S===H;case"Function":return!!S(y[w],w,y);case"Array":if(!p(y[w]))return!1;var j=I?g:b;return j(y[w],S);case"RegExp":return p(y[w])?I?g(y[w],S):!1:!!(y[w]&&y[w].match(S));case"Number":S=String(S);case"String":return p(y[w])?I?g(y[w],S):!1:y[w]===S;default:throw new TypeError("URI.hasQuery() accepts undefined, boolean, string, number, RegExp, Function as the value parameter")}},r.joinPaths=function(){for(var y=[],w=[],S=0,I=0;I<arguments.length;I++){var k=new r(arguments[I]);y.push(k);for(var V=k.segment(),H=0;H<V.length;H++)typeof V[H]=="string"&&w.push(V[H]),V[H]&&S++}if(!w.length||!S)return new r("");var j=new r("").segment(w);return(y[0].path()===""||y[0].path().slice(0,1)==="/")&&j.path("/"+j.path()),j.normalize()},r.commonPath=function(y,w){var S=Math.min(y.length,w.length),I;for(I=0;I<S;I++)if(y.charAt(I)!==w.charAt(I)){I--;break}return I<1?y.charAt(0)===w.charAt(0)&&y.charAt(0)==="/"?"/":"":((y.charAt(I)!=="/"||w.charAt(I)!=="/")&&(I=y.substring(0,I).lastIndexOf("/")),y.substring(0,I+1))},r.withinString=function(y,w,S){S||(S={});var I=S.start||r.findUri.start,k=S.end||r.findUri.end,V=S.trim||r.findUri.trim,H=S.parens||r.findUri.parens,j=/[a-z0-9-]=["']?$/i;for(I.lastIndex=0;;){var $=I.exec(y);if(!$)break;var te=$.index;if(S.ignoreHtml){var se=y.slice(Math.max(te-3,0),te);if(se&&j.test(se))continue}for(var ce=te+y.slice(te).search(k),le=y.slice(te,ce),pe=-1;;){var De=H.exec(le);if(!De)break;var Ze=De.index+De[0].length;pe=Math.max(pe,Ze)}if(pe>-1?le=le.slice(0,pe)+le.slice(pe).replace(V,""):le=le.replace(V,""),!(le.length<=$[0].length)&&!(S.ignore&&S.ignore.test(le))){ce=te+le.length;var Qe=w(le,te,ce,y);if(Qe===void 0){I.lastIndex=ce;continue}Qe=String(Qe),y=y.slice(0,te)+Qe+y.slice(ce),I.lastIndex=te+Qe.length}}return I.lastIndex=0,y},r.ensureValidHostname=function(y,w){var S=!!y,I=!!w,k=!1;if(I&&(k=g(r.hostProtocols,w)),k&&!S)throw new TypeError("Hostname cannot be empty, if protocol is "+w);if(y&&y.match(r.invalid_hostname_characters)){if(!t)throw new TypeError('Hostname "'+y+'" contains characters other than [A-Z0-9.-:_] and Punycode.js is not available');if(t.toASCII(y).match(r.invalid_hostname_characters))throw new TypeError('Hostname "'+y+'" contains characters other than [A-Z0-9.-:_]')}},r.ensureValidPort=function(y){if(y){var w=Number(y);if(!(s(w)&&w>0&&w<65536))throw new TypeError('Port "'+y+'" is not a valid port')}},r.noConflict=function(y){if(y){var w={URI:this.noConflict()};return i.URITemplate&&typeof i.URITemplate.noConflict=="function"&&(w.URITemplate=i.URITemplate.noConflict()),i.IPv6&&typeof i.IPv6.noConflict=="function"&&(w.IPv6=i.IPv6.noConflict()),i.SecondLevelDomains&&typeof i.SecondLevelDomains.noConflict=="function"&&(w.SecondLevelDomains=i.SecondLevelDomains.noConflict()),w}else i.URI===this&&(i.URI=a);return this},c.build=function(y){return y===!0?this._deferred_build=!0:(y===void 0||this._deferred_build)&&(this._string=r.build(this._parts),this._deferred_build=!1),this},c.clone=function(){return new r(this)},c.valueOf=c.toString=function(){return this.build(!1)._string};function q(y){return function(w,S){return w===void 0?this._parts[y]||"":(this._parts[y]=w||null,this.build(!S),this)}}function D(y,w){return function(S,I){return S===void 0?this._parts[y]||"":(S!==null&&(S=S+"",S.charAt(0)===w&&(S=S.substring(1))),this._parts[y]=S,this.build(!I),this)}}c.protocol=q("protocol"),c.username=q("username"),c.password=q("password"),c.hostname=q("hostname"),c.port=q("port"),c.query=D("query","?"),c.fragment=D("fragment","#"),c.search=function(y,w){var S=this.query(y,w);return typeof S=="string"&&S.length?"?"+S:S},c.hash=function(y,w){var S=this.fragment(y,w);return typeof S=="string"&&S.length?"#"+S:S},c.pathname=function(y,w){if(y===void 0||y===!0){var S=this._parts.path||(this._parts.hostname?"/":"");return y?(this._parts.urn?r.decodeUrnPath:r.decodePath)(S):S}else return this._parts.urn?this._parts.path=y?r.recodeUrnPath(y):"":this._parts.path=y?r.recodePath(y):"/",this.build(!w),this},c.path=c.pathname,c.href=function(y,w){var S;if(y===void 0)return this.toString();this._string="",this._parts=r._parts();var I=y instanceof r,k=typeof y=="object"&&(y.hostname||y.path||y.pathname);if(y.nodeName){var V=r.getDomAttribute(y);y=y[V]||"",k=!1}if(!I&&k&&y.pathname!==void 0&&(y=y.toString()),typeof y=="string"||y instanceof String)this._parts=r.parse(String(y),this._parts);else if(I||k){var H=I?y._parts:y;for(S in H)S!=="query"&&f.call(this._parts,S)&&(this._parts[S]=H[S]);H.query&&this.query(H.query,!1)}else throw new TypeError("invalid input");return this.build(!w),this},c.is=function(y){var w=!1,S=!1,I=!1,k=!1,V=!1,H=!1,j=!1,$=!this._parts.urn;switch(this._parts.hostname&&($=!1,S=r.ip4_expression.test(this._parts.hostname),I=r.ip6_expression.test(this._parts.hostname),w=S||I,k=!w,V=k&&o&&o.has(this._parts.hostname),H=k&&r.idn_expression.test(this._parts.hostname),j=k&&r.punycode_expression.test(this._parts.hostname)),y.toLowerCase()){case"relative":return $;case"absolute":return!$;case"domain":case"name":return k;case"sld":return V;case"ip":return w;case"ip4":case"ipv4":case"inet4":return S;case"ip6":case"ipv6":case"inet6":return I;case"idn":return H;case"url":return!this._parts.urn;case"urn":return!!this._parts.urn;case"punycode":return j}return null};var B=c.protocol,L=c.port,G=c.hostname;c.protocol=function(y,w){if(y&&(y=y.replace(/:(\/\/)?$/,""),!y.match(r.protocol_expression)))throw new TypeError('Protocol "'+y+`" contains characters other than [A-Z0-9.+-] or doesn't start with [A-Z]`);return B.call(this,y,w)},c.scheme=c.protocol,c.port=function(y,w){return this._parts.urn?y===void 0?"":this:(y!==void 0&&(y===0&&(y=null),y&&(y+="",y.charAt(0)===":"&&(y=y.substring(1)),r.ensureValidPort(y))),L.call(this,y,w))},c.hostname=function(y,w){if(this._parts.urn)return y===void 0?"":this;if(y!==void 0){var S={preventInvalidHostname:this._parts.preventInvalidHostname},I=r.parseHost(y,S);if(I!=="/")throw new TypeError('Hostname "'+y+'" contains characters other than [A-Z0-9.-]');y=S.hostname,this._parts.preventInvalidHostname&&r.ensureValidHostname(y,this._parts.protocol)}return G.call(this,y,w)},c.origin=function(y,w){if(this._parts.urn)return y===void 0?"":this;if(y===void 0){var S=this.protocol(),I=this.authority();return I?(S?S+"://":"")+this.authority():""}else{var k=r(y);return this.protocol(k.protocol()).authority(k.authority()).build(!w),this}},c.host=function(y,w){if(this._parts.urn)return y===void 0?"":this;if(y===void 0)return this._parts.hostname?r.buildHost(this._parts):"";var S=r.parseHost(y,this._parts);if(S!=="/")throw new TypeError('Hostname "'+y+'" contains characters other than [A-Z0-9.-]');return this.build(!w),this},c.authority=function(y,w){if(this._parts.urn)return y===void 0?"":this;if(y===void 0)return this._parts.hostname?r.buildAuthority(this._parts):"";var S=r.parseAuthority(y,this._parts);if(S!=="/")throw new TypeError('Hostname "'+y+'" contains characters other than [A-Z0-9.-]');return this.build(!w),this},c.userinfo=function(y,w){if(this._parts.urn)return y===void 0?"":this;if(y===void 0){var S=r.buildUserinfo(this._parts);return S&&S.substring(0,S.length-1)}else return y[y.length-1]!=="@"&&(y+="@"),r.parseUserinfo(y,this._parts),this.build(!w),this},c.resource=function(y,w){var S;return y===void 0?this.path()+this.search()+this.hash():(S=r.parse(y),this._parts.path=S.path,this._parts.query=S.query,this._parts.fragment=S.fragment,this.build(!w),this)},c.subdomain=function(y,w){if(this._parts.urn)return y===void 0?"":this;if(y===void 0){if(!this._parts.hostname||this.is("IP"))return"";var S=this._parts.hostname.length-this.domain().length-1;return this._parts.hostname.substring(0,S)||""}else{var I=this._parts.hostname.length-this.domain().length,k=this._parts.hostname.substring(0,I),V=new RegExp("^"+d(k));if(y&&y.charAt(y.length-1)!=="."&&(y+="."),y.indexOf(":")!==-1)throw new TypeError("Domains cannot contain colons");return y&&r.ensureValidHostname(y,this._parts.protocol),this._parts.hostname=this._parts.hostname.replace(V,y),this.build(!w),this}},c.domain=function(y,w){if(this._parts.urn)return y===void 0?"":this;if(typeof y=="boolean"&&(w=y,y=void 0),y===void 0){if(!this._parts.hostname||this.is("IP"))return"";var S=this._parts.hostname.match(/\./g);if(S&&S.length<2)return this._parts.hostname;var I=this._parts.hostname.length-this.tld(w).length-1;return I=this._parts.hostname.lastIndexOf(".",I-1)+1,this._parts.hostname.substring(I)||""}else{if(!y)throw new TypeError("cannot set domain empty");if(y.indexOf(":")!==-1)throw new TypeError("Domains cannot contain colons");if(r.ensureValidHostname(y,this._parts.protocol),!this._parts.hostname||this.is("IP"))this._parts.hostname=y;else{var k=new RegExp(d(this.domain())+"$");this._parts.hostname=this._parts.hostname.replace(k,y)}return this.build(!w),this}},c.tld=function(y,w){if(this._parts.urn)return y===void 0?"":this;if(typeof y=="boolean"&&(w=y,y=void 0),y===void 0){if(!this._parts.hostname||this.is("IP"))return"";var S=this._parts.hostname.lastIndexOf("."),I=this._parts.hostname.substring(S+1);return w!==!0&&o&&o.list[I.toLowerCase()]&&o.get(this._parts.hostname)||I}else{var k;if(y)if(y.match(/[^a-zA-Z0-9-]/))if(o&&o.is(y))k=new RegExp(d(this.tld())+"$"),this._parts.hostname=this._parts.hostname.replace(k,y);else throw new TypeError('TLD "'+y+'" contains characters other than [A-Z0-9]');else{if(!this._parts.hostname||this.is("IP"))throw new ReferenceError("cannot set TLD on non-domain host");k=new RegExp(d(this.tld())+"$"),this._parts.hostname=this._parts.hostname.replace(k,y)}else throw new TypeError("cannot set TLD empty");return this.build(!w),this}},c.directory=function(y,w){if(this._parts.urn)return y===void 0?"":this;if(y===void 0||y===!0){if(!this._parts.path&&!this._parts.hostname)return"";if(this._parts.path==="/")return"/";var S=this._parts.path.length-this.filename().length-1,I=this._parts.path.substring(0,S)||(this._parts.hostname?"/":"");return y?r.decodePath(I):I}else{var k=this._parts.path.length-this.filename().length,V=this._parts.path.substring(0,k),H=new RegExp("^"+d(V));return this.is("relative")||(y||(y="/"),y.charAt(0)!=="/"&&(y="/"+y)),y&&y.charAt(y.length-1)!=="/"&&(y+="/"),y=r.recodePath(y),this._parts.path=this._parts.path.replace(H,y),this.build(!w),this}},c.filename=function(y,w){if(this._parts.urn)return y===void 0?"":this;if(typeof y!="string"){if(!this._parts.path||this._parts.path==="/")return"";var S=this._parts.path.lastIndexOf("/"),I=this._parts.path.substring(S+1);return y?r.decodePathSegment(I):I}else{var k=!1;y.charAt(0)==="/"&&(y=y.substring(1)),y.match(/\.?\//)&&(k=!0);var V=new RegExp(d(this.filename())+"$");return y=r.recodePath(y),this._parts.path=this._parts.path.replace(V,y),k?this.normalizePath(w):this.build(!w),this}},c.suffix=function(y,w){if(this._parts.urn)return y===void 0?"":this;if(y===void 0||y===!0){if(!this._parts.path||this._parts.path==="/")return"";var S=this.filename(),I=S.lastIndexOf("."),k,V;return I===-1?"":(k=S.substring(I+1),V=/^[a-z0-9%]+$/i.test(k)?k:"",y?r.decodePathSegment(V):V)}else{y.charAt(0)==="."&&(y=y.substring(1));var H=this.suffix(),j;if(H)y?j=new RegExp(d(H)+"$"):j=new RegExp(d("."+H)+"$");else{if(!y)return this;this._parts.path+="."+r.recodePath(y)}return j&&(y=r.recodePath(y),this._parts.path=this._parts.path.replace(j,y)),this.build(!w),this}},c.segment=function(y,w,S){var I=this._parts.urn?":":"/",k=this.path(),V=k.substring(0,1)==="/",H=k.split(I);if(y!==void 0&&typeof y!="number"&&(S=w,w=y,y=void 0),y!==void 0&&typeof y!="number")throw new Error('Bad segment "'+y+'", must be 0-based integer');if(V&&H.shift(),y<0&&(y=Math.max(H.length+y,0)),w===void 0)return y===void 0?H:H[y];if(y===null||H[y]===void 0)if(p(w)){H=[];for(var j=0,$=w.length;j<$;j++)!w[j].length&&(!H.length||!H[H.length-1].length)||(H.length&&!H[H.length-1].length&&H.pop(),H.push(E(w[j])))}else(w||typeof w=="string")&&(w=E(w),H[H.length-1]===""?H[H.length-1]=w:H.push(w));else w?H[y]=E(w):H.splice(y,1);return V&&H.unshift(""),this.path(H.join(I),S)},c.segmentCoded=function(y,w,S){var I,k,V;if(typeof y!="number"&&(S=w,w=y,y=void 0),w===void 0){if(I=this.segment(y,w,S),!p(I))I=I!==void 0?r.decode(I):void 0;else for(k=0,V=I.length;k<V;k++)I[k]=r.decode(I[k]);return I}if(!p(w))w=typeof w=="string"||w instanceof String?r.encode(w):w;else for(k=0,V=w.length;k<V;k++)w[k]=r.encode(w[k]);return this.segment(y,w,S)};var Y=c.query;return c.query=function(y,w){if(y===!0)return r.parseQuery(this._parts.query,this._parts.escapeQuerySpace);if(typeof y=="function"){var S=r.parseQuery(this._parts.query,this._parts.escapeQuerySpace),I=y.call(this,S);return this._parts.query=r.buildQuery(I||S,this._parts.duplicateQueryParameters,this._parts.escapeQuerySpace),this.build(!w),this}else return y!==void 0&&typeof y!="string"?(this._parts.query=r.buildQuery(y,this._parts.duplicateQueryParameters,this._parts.escapeQuerySpace),this.build(!w),this):Y.call(this,y,w)},c.setQuery=function(y,w,S){var I=r.parseQuery(this._parts.query,this._parts.escapeQuerySpace);if(typeof y=="string"||y instanceof String)I[y]=w!==void 0?w:null;else if(typeof y=="object")for(var k in y)f.call(y,k)&&(I[k]=y[k]);else throw new TypeError("URI.addQuery() accepts an object, string as the name parameter");return this._parts.query=r.buildQuery(I,this._parts.duplicateQueryParameters,this._parts.escapeQuerySpace),typeof y!="string"&&(S=w),this.build(!S),this},c.addQuery=function(y,w,S){var I=r.parseQuery(this._parts.query,this._parts.escapeQuerySpace);return r.addQuery(I,y,w===void 0?null:w),this._parts.query=r.buildQuery(I,this._parts.duplicateQueryParameters,this._parts.escapeQuerySpace),typeof y!="string"&&(S=w),this.build(!S),this},c.removeQuery=function(y,w,S){var I=r.parseQuery(this._parts.query,this._parts.escapeQuerySpace);return r.removeQuery(I,y,w),this._parts.query=r.buildQuery(I,this._parts.duplicateQueryParameters,this._parts.escapeQuerySpace),typeof y!="string"&&(S=w),this.build(!S),this},c.hasQuery=function(y,w,S){var I=r.parseQuery(this._parts.query,this._parts.escapeQuerySpace);return r.hasQuery(I,y,w,S)},c.setSearch=c.setQuery,c.addSearch=c.addQuery,c.removeSearch=c.removeQuery,c.hasSearch=c.hasQuery,c.normalize=function(){return this._parts.urn?this.normalizeProtocol(!1).normalizePath(!1).normalizeQuery(!1).normalizeFragment(!1).build():this.normalizeProtocol(!1).normalizeHostname(!1).normalizePort(!1).normalizePath(!1).normalizeQuery(!1).normalizeFragment(!1).build()},c.normalizeProtocol=function(y){return typeof this._parts.protocol=="string"&&(this._parts.protocol=this._parts.protocol.toLowerCase(),this.build(!y)),this},c.normalizeHostname=function(y){return this._parts.hostname&&(this.is("IDN")&&t?this._parts.hostname=t.toASCII(this._parts.hostname):this.is("IPv6")&&n&&(this._parts.hostname=n.best(this._parts.hostname)),this._parts.hostname=this._parts.hostname.toLowerCase(),this.build(!y)),this},c.normalizePort=function(y){return typeof this._parts.protocol=="string"&&this._parts.port===r.defaultPorts[this._parts.protocol]&&(this._parts.port=null,this.build(!y)),this},c.normalizePath=function(y){var w=this._parts.path;if(!w)return this;if(this._parts.urn)return this._parts.path=r.recodeUrnPath(this._parts.path),this.build(!y),this;if(this._parts.path==="/")return this;w=r.recodePath(w);var S,I="",k,V;for(w.charAt(0)!=="/"&&(S=!0,w="/"+w),(w.slice(-3)==="/.."||w.slice(-2)==="/.")&&(w+="/"),w=w.replace(/(\/(\.\/)+)|(\/\.$)/g,"/").replace(/\/{2,}/g,"/"),S&&(I=w.substring(1).match(/^(\.\.\/)+/)||"",I&&(I=I[0]));k=w.search(/\/\.\.(\/|$)/),k!==-1;){if(k===0){w=w.substring(3);continue}V=w.substring(0,k).lastIndexOf("/"),V===-1&&(V=k),w=w.substring(0,V)+w.substring(k+3)}return S&&this.is("relative")&&(w=I+w.substring(1)),this._parts.path=w,this.build(!y),this},c.normalizePathname=c.normalizePath,c.normalizeQuery=function(y){return typeof this._parts.query=="string"&&(this._parts.query.length?this.query(r.parseQuery(this._parts.query,this._parts.escapeQuerySpace)):this._parts.query=null,this.build(!y)),this},c.normalizeFragment=function(y){return this._parts.fragment||(this._parts.fragment=null,this.build(!y)),this},c.normalizeSearch=c.normalizeQuery,c.normalizeHash=c.normalizeFragment,c.iso8859=function(){var y=r.encode,w=r.decode;r.encode=escape,r.decode=decodeURIComponent;try{this.normalize()}finally{r.encode=y,r.decode=w}return this},c.unicode=function(){var y=r.encode,w=r.decode;r.encode=C,r.decode=unescape;try{this.normalize()}finally{r.encode=y,r.decode=w}return this},c.readable=function(){var y=this.clone();y.username("").password("").normalize();var w="";if(y._parts.protocol&&(w+=y._parts.protocol+"://"),y._parts.hostname&&(y.is("punycode")&&t?(w+=t.toUnicode(y._parts.hostname),y._parts.port&&(w+=":"+y._parts.port)):w+=y.host()),y._parts.hostname&&y._parts.path&&y._parts.path.charAt(0)!=="/"&&(w+="/"),w+=y.path(!0),y._parts.query){for(var S="",I=0,k=y._parts.query.split("&"),V=k.length;I<V;I++){var H=(k[I]||"").split("=");S+="&"+r.decodeQuery(H[0],this._parts.escapeQuerySpace).replace(/&/g,"%26"),H[1]!==void 0&&(S+="="+r.decodeQuery(H[1],this._parts.escapeQuerySpace).replace(/&/g,"%26"))}w+="?"+S.substring(1)}return w+=r.decodeQuery(y.hash(),!0),w},c.absoluteTo=function(y){var w=this.clone(),S=["protocol","username","password","hostname","port"],I,k,V;if(this._parts.urn)throw new Error("URNs do not have any generally defined hierarchical components");if(y instanceof r||(y=new r(y)),w._parts.protocol||(w._parts.protocol=y._parts.protocol,this._parts.hostname))return w;for(k=0;V=S[k];k++)w._parts[V]=y._parts[V];return w._parts.path?(w._parts.path.substring(-2)===".."&&(w._parts.path+="/"),w.path().charAt(0)!=="/"&&(I=y.directory(),I=I||(y.path().indexOf("/")===0?"/":""),w._parts.path=(I?I+"/":"")+w._parts.path,w.normalizePath())):(w._parts.path=y._parts.path,w._parts.query||(w._parts.query=y._parts.query)),w.build(),w},c.relativeTo=function(y){var w=this.clone().normalize(),S,I,k,V,H;if(w._parts.urn)throw new Error("URNs do not have any generally defined hierarchical components");if(y=new r(y).normalize(),S=w._parts,I=y._parts,V=w.path(),H=y.path(),V.charAt(0)!=="/")throw new Error("URI is already relative");if(H.charAt(0)!=="/")throw new Error("Cannot calculate a URI relative to another relative URI");if(S.protocol===I.protocol&&(S.protocol=null),S.username!==I.username||S.password!==I.password||S.protocol!==null||S.username!==null||S.password!==null)return w.build();if(S.hostname===I.hostname&&S.port===I.port)S.hostname=null,S.port=null;else return w.build();if(V===H)return S.path="",w.build();if(k=r.commonPath(V,H),!k)return w.build();var j=I.path.substring(k.length).replace(/[^\/]*$/,"").replace(/.*?\//g,"../");return S.path=j+S.path.substring(k.length)||"./",w.build()},c.equals=function(y){var w=this.clone(),S=new r(y),I={},k={},V={},H,j,$;if(w.normalize(),S.normalize(),w.toString()===S.toString())return!0;if(H=w.query(),j=S.query(),w.query(""),S.query(""),w.toString()!==S.toString()||H.length!==j.length)return!1;I=r.parseQuery(H,this._parts.escapeQuerySpace),k=r.parseQuery(j,this._parts.escapeQuerySpace);for($ in I)if(f.call(I,$)){if(p(I[$])){if(!b(I[$],k[$]))return!1}else if(I[$]!==k[$])return!1;V[$]=!0}for($ in k)if(f.call(k,$)&&!V[$])return!1;return!0},c.preventInvalidHostname=function(y){return this._parts.preventInvalidHostname=!!y,this},c.duplicateQueryParameters=function(y){return this._parts.duplicateQueryParameters=!!y,this},c.escapeQuerySpace=function(y){return this._parts.escapeQuerySpace=!!y,this},r})})(pf);var fm=pf.exports;const vn=af(fm);function um(e){return(e.length===0||e[e.length-1]!=="/")&&(e=`${e}/`),e}function xt(e,t){if(e===null||typeof e!="object")return e;t=t??!1;const n=new e.constructor;for(const o in e)if(e.hasOwnProperty(o)){let i=e[o];t&&(i=xt(i,t)),n[o]=i}return n}function Ct(e,t,n){n=n??!1;const o={},i=u(e),a=u(t);let r,s,c;if(i)for(r in e)e.hasOwnProperty(r)&&(s=e[r],a&&n&&typeof s=="object"&&t.hasOwnProperty(r)?(c=t[r],typeof c=="object"?o[r]=Ct(s,c,n):o[r]=s):o[r]=s);if(a)for(r in t)t.hasOwnProperty(r)&&!o.hasOwnProperty(r)&&(c=t[r],o[r]=c);return o}function Si(){let e,t;const n=new Promise(function(o,i){e=o,t=i});return{resolve:e,reject:t,promise:n}}function mi(e,t){let n;return typeof document<"u"&&(n=document),mi._implementation(e,t,n)}mi._implementation=function(e,t,n){if(!u(e))throw new T("relative uri is required.");if(!u(t)){if(typeof n>"u")return e;t=n.baseURI??n.location.href}const o=new vn(e);return o.scheme()!==""?o.toString():o.absoluteTo(t).toString()};function hm(e,t){if(!u(e))throw new T("uri is required.");let n="";const o=e.lastIndexOf("/");return o!==-1&&(n=e.substring(0,o+1)),t&&(e=new vn(e),e.query().length!==0&&(n+=`?${e.query()}`),e.fragment().length!==0&&(n+=`#${e.fragment()}`)),n}function dm(e){if(!u(e))throw new T("uri is required.");const t=new vn(e);t.normalize();let n=t.path(),o=n.lastIndexOf("/");return o!==-1&&(n=n.substr(o+1)),o=n.lastIndexOf("."),o===-1?n="":n=n.substr(o+1),n}const yc={};function bc(e,t,n){u(t)||(t=e.width),u(n)||(n=e.height);let o=yc[t];u(o)||(o={},yc[t]=o);let i=o[n];if(!u(i)){const a=document.createElement("canvas");a.width=t,a.height=n,i=a.getContext("2d",{willReadFrequently:!0}),i.globalCompositeOperation="copy",o[n]=i}return i.drawImage(e,0,0,t,n),i.getImageData(0,0,t,n).data}const mm=/^blob:/i;function _f(e){return h.typeOf.string("uri",e),mm.test(e)}let sn;function Va(e){u(sn)||(sn=document.createElement("a")),sn.href=window.location.href;const t=sn.host,n=sn.protocol;return sn.href=e,sn.href=sn.href,n!==sn.protocol||t!==sn.host}const pm=/^data:/i;function gf(e){return h.typeOf.string("uri",e),pm.test(e)}function _m(e){const t=document.createElement("script");return t.async=!0,t.src=e,new Promise((n,o)=>{window.crossOriginIsolated&&t.setAttribute("crossorigin","anonymous");const i=document.getElementsByTagName("head")[0];t.onload=function(){t.onload=void 0,i.removeChild(t),n()},t.onerror=function(a){o(a)},i.appendChild(t)})}function gm(e){if(!u(e))throw new T("obj is required.");let t="";for(const n in e)if(e.hasOwnProperty(n)){const o=e[n],i=`${encodeURIComponent(n)}=`;if(Array.isArray(o))for(let a=0,r=o.length;a<r;++a)t+=`${i+encodeURIComponent(o[a])}&`;else t+=`${i+encodeURIComponent(o)}&`}return t=t.slice(0,-1),t}function ym(e){if(!u(e))throw new T("queryString is required.");const t={};if(e==="")return t;const n=e.replace(/\+/g,"%20").split(/[&;]/);for(let o=0,i=n.length;o<i;++o){const a=n[o].split("="),r=decodeURIComponent(a[0]);let s=a[1];u(s)?s=decodeURIComponent(s):s="";const c=t[r];typeof c=="string"?t[r]=[c,s]:Array.isArray(c)?c.push(s):t[r]=s}return t}const bm={UNISSUED:0,ISSUED:1,ACTIVE:2,RECEIVED:3,CANCELLED:4,FAILED:5},Xe=Object.freeze(bm),Tm={TERRAIN:0,IMAGERY:1,TILES3D:2,OTHER:3},Em=Object.freeze(Tm);function Or(e){e=e??ue.EMPTY_OBJECT;const t=e.throttleByServer??!1,n=e.throttle??!1;this.url=e.url,this.requestFunction=e.requestFunction,this.cancelFunction=e.cancelFunction,this.priorityFunction=e.priorityFunction,this.priority=e.priority??0,this.throttle=n,this.throttleByServer=t,this.type=e.type??Em.OTHER,this.serverKey=e.serverKey,this.state=Xe.UNISSUED,this.deferred=void 0,this.cancelled=!1}Or.prototype.cancel=function(){this.cancelled=!0};Or.prototype.clone=function(e){return u(e)?(e.url=this.url,e.requestFunction=this.requestFunction,e.cancelFunction=this.cancelFunction,e.priorityFunction=this.priorityFunction,e.priority=this.priority,e.throttle=this.throttle,e.throttleByServer=this.throttleByServer,e.type=this.type,e.serverKey=this.serverKey,e.state=Xe.UNISSUED,e.deferred=void 0,e.cancelled=!1,e):new Or(this)};function wm(e){const t={};if(!e)return t;const n=e.split(`\r
`);for(let o=0;o<n.length;++o){const i=n[o],a=i.indexOf(": ");if(a>0){const r=i.substring(0,a),s=i.substring(a+2);t[r]=s}}return t}function pi(e,t,n){this.statusCode=e,this.response=t,this.responseHeaders=n,typeof this.responseHeaders=="string"&&(this.responseHeaders=wm(this.responseHeaders))}pi.prototype.toString=function(){let e="Request has failed.";return u(this.statusCode)&&(e+=` Status Code: ${this.statusCode}`),e};function Vo(){this._listeners=new Map,this._toRemove=new Map,this._toAdd=new Map,this._invokingListeners=!1,this._listenerCount=0}Object.defineProperties(Vo.prototype,{numberOfListeners:{get:function(){return this._listenerCount}}});Vo.prototype.addEventListener=function(e,t){h.typeOf.func("listener",e);const n=this,o=n._invokingListeners?n._toAdd:n._listeners;return Ts(this,o,e,t)&&n._listenerCount++,function(){n.removeEventListener(e,t)}};function Ts(e,t,n,o){t.has(n)||t.set(n,new Set);const i=t.get(n);return i.has(o)?!1:(i.add(o),!0)}Vo.prototype.removeEventListener=function(e,t){h.typeOf.func("listener",e);const n=ja(this,this._listeners,e,t),o=ja(this,this._toAdd,e,t),i=n||o;return i&&this._listenerCount--,i};function ja(e,t,n,o){const i=t.get(n);if(!i||!i.has(o))return!1;if(e._invokingListeners){if(!Ts(e,e._toRemove,n,o))return!1}else i.delete(o),i.size===0&&t.delete(n);return!0}Vo.prototype.raiseEvent=function(){this._invokingListeners=!0;for(const[e,t]of this._listeners.entries())if(u(e))for(const n of t)e.apply(n,arguments);this._invokingListeners=!1;for(const[e,t]of this._toAdd.entries())for(const n of t)Ts(this,this._listeners,e,n);this._toAdd.clear();for(const[e,t]of this._toRemove.entries())for(const n of t)ja(this,this._listeners,e,n);this._toRemove.clear()};function ho(e){h.typeOf.object("options",e),h.defined("options.comparator",e.comparator),this._comparator=e.comparator,this._array=[],this._length=0,this._maximumLength=void 0}Object.defineProperties(ho.prototype,{length:{get:function(){return this._length}},internalArray:{get:function(){return this._array}},maximumLength:{get:function(){return this._maximumLength},set:function(e){h.typeOf.number.greaterThanOrEquals("maximumLength",e,0);const t=this._length;if(e<t){const n=this._array;for(let o=e;o<t;++o)n[o]=void 0;this._length=e,n.length=e}this._maximumLength=e}},comparator:{get:function(){return this._comparator}}});function Es(e,t,n){const o=e[t];e[t]=e[n],e[n]=o}ho.prototype.reserve=function(e){e=e??this._length,this._array.length=e};ho.prototype.heapify=function(e){e=e??0;const t=this._length,n=this._comparator,o=this._array;let i=-1,a=!0;for(;a;){const r=2*(e+1),s=r-1;s<t&&n(o[s],o[e])<0?i=s:i=e,r<t&&n(o[r],o[i])<0&&(i=r),i!==e?(Es(o,i,e),e=i):a=!1}};ho.prototype.resort=function(){const e=this._length;for(let t=Math.ceil(e/2);t>=0;--t)this.heapify(t)};ho.prototype.insert=function(e){h.defined("element",e);const t=this._array,n=this._comparator,o=this._maximumLength;let i=this._length++;for(i<t.length?t[i]=e:t.push(e);i!==0;){const r=Math.floor((i-1)/2);if(n(t[i],t[r])<0)Es(t,i,r),i=r;else break}let a;return u(o)&&this._length>o&&(a=t[o],this._length=o),a};ho.prototype.pop=function(e){if(e=e??0,this._length===0)return;h.typeOf.number.lessThan("index",e,this._length);const t=this._array,n=t[e];return Es(t,e,--this._length),this.heapify(e),t[this._length]=void 0,n};function Am(e,t){return e.priority-t.priority}const Re={numberOfAttemptedRequests:0,numberOfActiveRequests:0,numberOfCancelledRequests:0,numberOfCancelledActiveRequests:0,numberOfFailedRequests:0,numberOfActiveRequestsEver:0,lastNumberOfActiveRequests:0};let zo=20;const bt=new ho({comparator:Am});bt.maximumLength=zo;bt.reserve(zo);const fn=[];let Rn={};const Om=typeof document<"u"?new vn(document.location.href):new vn,Gr=new Vo;function Fe(){}Fe.maximumRequests=50;Fe.maximumRequestsPerServer=18;Fe.requestsByServer={};Fe.throttleRequests=!0;Fe.debugShowStatistics=!1;Fe.requestCompletedEvent=Gr;Object.defineProperties(Fe,{statistics:{get:function(){return Re}},priorityHeapLength:{get:function(){return zo},set:function(e){if(e<zo)for(;bt.length>e;){const t=bt.pop();ro(t)}zo=e,bt.maximumLength=e,bt.reserve(e)}}});function yf(e){u(e.priorityFunction)&&(e.priority=e.priorityFunction())}Fe.serverHasOpenSlots=function(e,t){t=t??1;const n=Fe.requestsByServer[e]??Fe.maximumRequestsPerServer;return Rn[e]+t<=n};Fe.heapHasOpenSlots=function(e){return bt.length+e<=zo};function bf(e){return e.state===Xe.UNISSUED&&(e.state=Xe.ISSUED,e.deferred=Si()),e.deferred.promise}function Sm(e){return function(t){if(e.state===Xe.CANCELLED)return;const n=e.deferred;--Re.numberOfActiveRequests,--Rn[e.serverKey],Gr.raiseEvent(),e.state=Xe.RECEIVED,e.deferred=void 0,n.resolve(t)}}function xm(e){return function(t){e.state!==Xe.CANCELLED&&(++Re.numberOfFailedRequests,--Re.numberOfActiveRequests,--Rn[e.serverKey],Gr.raiseEvent(t),e.state=Xe.FAILED,e.deferred.reject(t))}}function Tf(e){const t=bf(e);return e.state=Xe.ACTIVE,fn.push(e),++Re.numberOfActiveRequests,++Re.numberOfActiveRequestsEver,++Rn[e.serverKey],e.requestFunction().then(Sm(e)).catch(xm(e)),t}function ro(e){const t=e.state===Xe.ACTIVE;if(e.state=Xe.CANCELLED,++Re.numberOfCancelledRequests,u(e.deferred)){const n=e.deferred;e.deferred=void 0,n.reject()}t&&(--Re.numberOfActiveRequests,--Rn[e.serverKey],++Re.numberOfCancelledActiveRequests),u(e.cancelFunction)&&e.cancelFunction()}Fe.update=function(){let e,t,n=0;const o=fn.length;for(e=0;e<o;++e){if(t=fn[e],t.cancelled&&ro(t),t.state!==Xe.ACTIVE){++n;continue}n>0&&(fn[e-n]=t)}fn.length-=n;const i=bt.internalArray,a=bt.length;for(e=0;e<a;++e)yf(i[e]);bt.resort();const r=Math.max(Fe.maximumRequests-fn.length,0);let s=0;for(;s<r&&bt.length>0;){if(t=bt.pop(),t.cancelled){ro(t);continue}if(t.throttleByServer&&!Fe.serverHasOpenSlots(t.serverKey)){ro(t);continue}Tf(t),++s}Cm()};Fe.getServerKey=function(e){h.typeOf.string("url",e);let t=new vn(e);t.scheme()===""&&(t=t.absoluteTo(Om),t.normalize());let n=t.authority();/:/.test(n)||(n=`${n}:${t.scheme()==="https"?"443":"80"}`);const o=Rn[n];return u(o)||(Rn[n]=0),n};Fe.request=function(e){if(h.typeOf.object("request",e),h.typeOf.string("request.url",e.url),h.typeOf.func("request.requestFunction",e.requestFunction),gf(e.url)||_f(e.url))return Gr.raiseEvent(),e.state=Xe.RECEIVED,e.requestFunction();if(++Re.numberOfAttemptedRequests,u(e.serverKey)||(e.serverKey=Fe.getServerKey(e.url)),Fe.throttleRequests&&e.throttleByServer&&!Fe.serverHasOpenSlots(e.serverKey))return;if(!Fe.throttleRequests||!e.throttle)return Tf(e);if(fn.length>=Fe.maximumRequests)return;yf(e);const t=bt.insert(e);if(u(t)){if(t===e)return;ro(t)}return bf(e)};function Cm(){Fe.debugShowStatistics&&(Re.numberOfActiveRequests===0&&Re.lastNumberOfActiveRequests>0&&(Re.numberOfAttemptedRequests>0&&(console.log(`Number of attempted requests: ${Re.numberOfAttemptedRequests}`),Re.numberOfAttemptedRequests=0),Re.numberOfCancelledRequests>0&&(console.log(`Number of cancelled requests: ${Re.numberOfCancelledRequests}`),Re.numberOfCancelledRequests=0),Re.numberOfCancelledActiveRequests>0&&(console.log(`Number of cancelled active requests: ${Re.numberOfCancelledActiveRequests}`),Re.numberOfCancelledActiveRequests=0),Re.numberOfFailedRequests>0&&(console.log(`Number of failed requests: ${Re.numberOfFailedRequests}`),Re.numberOfFailedRequests=0)),Re.lastNumberOfActiveRequests=Re.numberOfActiveRequests)}Fe.clearForSpecs=function(){for(;bt.length>0;){const t=bt.pop();ro(t)}const e=fn.length;for(let t=0;t<e;++t)ro(fn[t]);fn.length=0,Rn={},Re.numberOfAttemptedRequests=0,Re.numberOfActiveRequests=0,Re.numberOfCancelledRequests=0,Re.numberOfCancelledActiveRequests=0,Re.numberOfFailedRequests=0,Re.numberOfActiveRequestsEver=0,Re.lastNumberOfActiveRequests=0};Fe.numberOfActiveRequestsByServer=function(e){return Rn[e]};Fe.requestHeap=bt;const jo={};let Do={};jo.add=function(e,t){if(!u(e))throw new T("host is required.");if(!u(t)||t<=0)throw new T("port is required to be greater than 0.");const n=`${e.toLowerCase()}:${t}`;u(Do[n])||(Do[n]=!0)};jo.remove=function(e,t){if(!u(e))throw new T("host is required.");if(!u(t)||t<=0)throw new T("port is required to be greater than 0.");const n=`${e.toLowerCase()}:${t}`;u(Do[n])&&delete Do[n]};function vm(e){const t=new vn(e);t.normalize();let n=t.authority();if(n.length!==0){if(t.authority(n),n.indexOf("@")!==-1&&(n=n.split("@")[1]),n.indexOf(":")===-1){let o=t.scheme();if(o.length===0&&(o=window.location.protocol,o=o.substring(0,o.length-1)),o==="http")n+=":80";else if(o==="https")n+=":443";else return}return n}}jo.contains=function(e){if(!u(e))throw new T("url is required.");const t=vm(e);return!!(u(t)&&u(Do[t]))};jo.clear=function(){Do={}};const Ef=function(){try{const e=new XMLHttpRequest;return e.open("GET","#",!0),e.responseType="blob",e.responseType==="blob"}catch{return!1}}();function ee(e){e=e??ue.EMPTY_OBJECT,typeof e=="string"&&(e={url:e}),h.typeOf.string("options.url",e.url),this._url=void 0,this._templateValues=dn(e.templateValues,{}),this._queryParameters=dn(e.queryParameters,{}),this.headers=dn(e.headers,{}),this.request=e.request??new Or,this.proxy=e.proxy,this.retryCallback=e.retryCallback,this.retryAttempts=e.retryAttempts??0,this._retryCount=0,e.parseUrl??!0?this.parseUrl(e.url,!0,!0):this._url=e.url,this._credits=e.credits}function dn(e,t){return u(e)?xt(e):t}ee.createIfNeeded=function(e){return e instanceof ee?e.getDerivedResource({request:e.request}):typeof e!="string"?e:new ee({url:e})};let yo;ee.supportsImageBitmapOptions=function(){return u(yo)?yo:typeof createImageBitmap!="function"?(yo=Promise.resolve(!1),yo):(yo=ee.fetchBlob({url:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAABGdBTUEAAE4g3rEiDgAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAADElEQVQI12Ng6GAAAAEUAIngE3ZiAAAAAElFTkSuQmCC"}).then(function(t){const n={imageOrientation:"flipY",premultiplyAlpha:"none",colorSpaceConversion:"none"};return Promise.all([createImageBitmap(t,n),createImageBitmap(t)])}).then(function(t){const n=bc(t[0]),o=bc(t[1]);return n[1]!==o[1]}).catch(function(){return!1}),yo)};Object.defineProperties(ee,{isBlobSupported:{get:function(){return Ef}}});Object.defineProperties(ee.prototype,{queryParameters:{get:function(){return this._queryParameters}},templateValues:{get:function(){return this._templateValues}},url:{get:function(){return this.getUrlComponent(!0,!0)},set:function(e){this.parseUrl(e,!1,!1)}},extension:{get:function(){return dm(this._url)}},isDataUri:{get:function(){return gf(this._url)}},isBlobUri:{get:function(){return _f(this._url)}},isCrossOriginUrl:{get:function(){return Va(this._url)}},hasHeaders:{get:function(){return Object.keys(this.headers).length>0}},credits:{get:function(){return this._credits}}});ee.prototype.toString=function(){return this.getUrlComponent(!0,!0)};ee.prototype.parseUrl=function(e,t,n,o){let i=new vn(e);const a=Rm(i.query());this._queryParameters=t?Sr(a,this.queryParameters,n):a,i.search(""),i.fragment(""),u(o)&&i.scheme()===""&&(i=i.absoluteTo(mi(o))),this._url=i.toString()};function Rm(e){return e.length===0?{}:e.indexOf("=")===-1?{[e]:void 0}:ym(e)}function Sr(e,t,n){if(!n)return Ct(e,t);const o=xt(e,!0);for(const i in t)if(t.hasOwnProperty(i)){let a=o[i];const r=t[i];u(a)?(Array.isArray(a)||(a=o[i]=[a]),o[i]=a.concat(r)):o[i]=Array.isArray(r)?r.slice():r}return o}ee.prototype.getUrlComponent=function(e,t){if(this.isDataUri)return this._url;let n=this._url;e&&(n=`${n}${zm(this.queryParameters)}`),n=n.replace(/%7B/g,"{").replace(/%7D/g,"}");const o=this._templateValues;return Object.keys(o).length>0&&(n=n.replace(/{(.*?)}/g,function(i,a){const r=o[a];return u(r)?encodeURIComponent(r):i})),t&&u(this.proxy)&&(n=this.proxy.getURL(n)),n};function zm(e){const t=Object.keys(e);return t.length===0?"":t.length===1&&!u(e[t[0]])?`?${t[0]}`:`?${gm(e)}`}ee.prototype.setQueryParameters=function(e,t){t?this._queryParameters=Sr(this._queryParameters,e,!1):this._queryParameters=Sr(e,this._queryParameters,!1)};ee.prototype.appendQueryParameters=function(e){this._queryParameters=Sr(e,this._queryParameters,!0)};ee.prototype.setTemplateValues=function(e,t){t?this._templateValues=Ct(this._templateValues,e):this._templateValues=Ct(e,this._templateValues)};ee.prototype.getDerivedResource=function(e){const t=this.clone();if(t._retryCount=0,u(e.url)){const n=e.preserveQueryParameters??!1;t.parseUrl(e.url,!0,n,this._url)}return u(e.queryParameters)&&(t._queryParameters=Ct(e.queryParameters,t.queryParameters)),u(e.templateValues)&&(t._templateValues=Ct(e.templateValues,t.templateValues)),u(e.headers)&&(t.headers=Ct(e.headers,t.headers)),u(e.proxy)&&(t.proxy=e.proxy),u(e.request)&&(t.request=e.request),u(e.retryCallback)&&(t.retryCallback=e.retryCallback),u(e.retryAttempts)&&(t.retryAttempts=e.retryAttempts),t};ee.prototype.retryOnError=function(e){const t=this.retryCallback;if(typeof t!="function"||this._retryCount>=this.retryAttempts)return Promise.resolve(!1);const n=this;return Promise.resolve(t(this,e)).then(function(o){return++n._retryCount,o})};ee.prototype.clone=function(e){return u(e)?(e._url=this._url,e._queryParameters=xt(this._queryParameters),e._templateValues=xt(this._templateValues),e.headers=xt(this.headers),e.proxy=this.proxy,e.retryCallback=this.retryCallback,e.retryAttempts=this.retryAttempts,e._retryCount=0,e.request=this.request.clone(),e):new ee({url:this._url,queryParameters:this.queryParameters,templateValues:this.templateValues,headers:this.headers,proxy:this.proxy,retryCallback:this.retryCallback,retryAttempts:this.retryAttempts,request:this.request.clone(),parseUrl:!1,credits:u(this.credits)?this.credits.slice():void 0})};ee.prototype.getBaseUri=function(e){return hm(this.getUrlComponent(e),e)};ee.prototype.appendForwardSlash=function(){this._url=um(this._url)};ee.prototype.fetchArrayBuffer=function(){return this.fetch({responseType:"arraybuffer"})};ee.fetchArrayBuffer=function(e){return new ee(e).fetchArrayBuffer()};ee.prototype.fetchBlob=function(){return this.fetch({responseType:"blob"})};ee.fetchBlob=function(e){return new ee(e).fetchBlob()};ee.prototype.fetchImage=function(e){e=e??ue.EMPTY_OBJECT;const t=e.preferImageBitmap??!1,n=e.preferBlob??!1,o=e.flipY??!1,i=e.skipColorSpaceConversion??!1;if(ws(this.request),!Ef||this.isDataUri||this.isBlobUri||!this.hasHeaders&&!n)return Ha({resource:this,flipY:o,skipColorSpaceConversion:i,preferImageBitmap:t});const a=this.fetchBlob();if(!u(a))return;let r,s,c,f;return ee.supportsImageBitmapOptions().then(function(d){return r=d,s=r&&t,a}).then(function(d){if(!u(d))return;if(f=d,s)return ee.createImageBitmapFromBlob(d,{flipY:o,premultiplyAlpha:!1,skipColorSpaceConversion:i});const m=window.URL.createObjectURL(d);return c=new ee({url:m}),Ha({resource:c,flipY:o,skipColorSpaceConversion:i,preferImageBitmap:!1})}).then(function(d){if(u(d))return d.blob=f,s||window.URL.revokeObjectURL(c.url),d}).catch(function(d){return u(c)&&window.URL.revokeObjectURL(c.url),d.blob=f,Promise.reject(d)})};function Ha(e){const t=e.resource,n=e.flipY,o=e.skipColorSpaceConversion,i=e.preferImageBitmap,a=t.request;a.url=t.url,a.requestFunction=function(){let s=!1;!t.isDataUri&&!t.isBlobUri&&(s=t.isCrossOriginUrl);const c=Si();return ee._Implementations.createImage(a,s,c,n,o,i),c.promise};const r=Fe.request(a);if(u(r))return r.catch(function(s){return a.state!==Xe.FAILED?Promise.reject(s):t.retryOnError(s).then(function(c){return c?(a.state=Xe.UNISSUED,a.deferred=void 0,Ha({resource:t,flipY:n,skipColorSpaceConversion:o,preferImageBitmap:i})):Promise.reject(s)})})}ee.fetchImage=function(e){return new ee(e).fetchImage({flipY:e.flipY,skipColorSpaceConversion:e.skipColorSpaceConversion,preferBlob:e.preferBlob,preferImageBitmap:e.preferImageBitmap})};ee.prototype.fetchText=function(){return this.fetch({responseType:"text"})};ee.fetchText=function(e){return new ee(e).fetchText()};ee.prototype.fetchJson=function(){const e=this.fetch({responseType:"text",headers:{Accept:"application/json,*/*;q=0.01"}});if(u(e))return e.then(function(t){if(u(t))return JSON.parse(t)})};ee.fetchJson=function(e){return new ee(e).fetchJson()};ee.prototype.fetchXML=function(){return this.fetch({responseType:"document",overrideMimeType:"text/xml"})};ee.fetchXML=function(e){return new ee(e).fetchXML()};ee.prototype.fetchJsonp=function(e){e=e??"callback",ws(this.request);let t;do t=`loadJsonp${A.nextRandomNumber().toString().substring(2,8)}`;while(u(window[t]));return wf(this,e,t)};function wf(e,t,n){const o={};o[t]=n,e.setQueryParameters(o);const i=e.request,a=e.url;i.url=a,i.requestFunction=function(){const s=Si();return window[n]=function(c){s.resolve(c);try{delete window[n]}catch{window[n]=void 0}},ee._Implementations.loadAndExecuteScript(a,n,s),s.promise};const r=Fe.request(i);if(u(r))return r.catch(function(s){return i.state!==Xe.FAILED?Promise.reject(s):e.retryOnError(s).then(function(c){return c?(i.state=Xe.UNISSUED,i.deferred=void 0,wf(e,t,n)):Promise.reject(s)})})}ee.fetchJsonp=function(e){return new ee(e).fetchJsonp(e.callbackParameterName)};ee.prototype._makeRequest=function(e){const t=this;ws(t.request);const n=t.request,o=t.url;n.url=o,n.requestFunction=function(){const a=e.responseType,r=Ct(e.headers,t.headers),s=e.overrideMimeType,c=e.method,f=e.data,d=Si(),m=ee._Implementations.loadWithXhr(o,a,c,f,r,d,s);return u(m)&&u(m.abort)&&(n.cancelFunction=function(){m.abort()}),d.promise};const i=Fe.request(n);if(u(i))return i.then(function(a){return n.cancelFunction=void 0,a}).catch(function(a){return n.cancelFunction=void 0,n.state!==Xe.FAILED?Promise.reject(a):t.retryOnError(a).then(function(r){return r?(n.state=Xe.UNISSUED,n.deferred=void 0,t.fetch(e)):Promise.reject(a)})})};function ws(e){if(e.state===Xe.ISSUED||e.state===Xe.ACTIVE)throw new Ye("The Resource is already being fetched.");e.state=Xe.UNISSUED,e.deferred=void 0}const Im=/^data:(.*?)(;base64)?,(.*)$/;function ur(e,t){const n=decodeURIComponent(t);return e?atob(n):n}function Tc(e,t){const n=ur(e,t),o=new ArrayBuffer(n.length),i=new Uint8Array(o);for(let a=0;a<n.length;a++)i[a]=n.charCodeAt(a);return o}function Pm(e,t){t=t??"";const n=e[1],o=!!e[2],i=e[3];let a,r;switch(t){case"":case"text":return ur(o,i);case"arraybuffer":return Tc(o,i);case"blob":return a=Tc(o,i),new Blob([a],{type:n});case"document":return r=new DOMParser,r.parseFromString(ur(o,i),n);case"json":return JSON.parse(ur(o,i));default:throw new T(`Unhandled responseType: ${t}`)}}ee.prototype.fetch=function(e){return e=dn(e,{}),e.method="GET",this._makeRequest(e)};ee.fetch=function(e){return new ee(e).fetch({responseType:e.responseType,overrideMimeType:e.overrideMimeType})};ee.prototype.delete=function(e){return e=dn(e,{}),e.method="DELETE",this._makeRequest(e)};ee.delete=function(e){return new ee(e).delete({responseType:e.responseType,overrideMimeType:e.overrideMimeType,data:e.data})};ee.prototype.head=function(e){return e=dn(e,{}),e.method="HEAD",this._makeRequest(e)};ee.head=function(e){return new ee(e).head({responseType:e.responseType,overrideMimeType:e.overrideMimeType})};ee.prototype.options=function(e){return e=dn(e,{}),e.method="OPTIONS",this._makeRequest(e)};ee.options=function(e){return new ee(e).options({responseType:e.responseType,overrideMimeType:e.overrideMimeType})};ee.prototype.post=function(e,t){return h.defined("data",e),t=dn(t,{}),t.method="POST",t.data=e,this._makeRequest(t)};ee.post=function(e){return new ee(e).post(e.data,{responseType:e.responseType,overrideMimeType:e.overrideMimeType})};ee.prototype.put=function(e,t){return h.defined("data",e),t=dn(t,{}),t.method="PUT",t.data=e,this._makeRequest(t)};ee.put=function(e){return new ee(e).put(e.data,{responseType:e.responseType,overrideMimeType:e.overrideMimeType})};ee.prototype.patch=function(e,t){return h.defined("data",e),t=dn(t,{}),t.method="PATCH",t.data=e,this._makeRequest(t)};ee.patch=function(e){return new ee(e).patch(e.data,{responseType:e.responseType,overrideMimeType:e.overrideMimeType})};ee._Implementations={};ee._Implementations.loadImageElement=function(e,t,n){const o=new Image;o.onload=function(){o.naturalWidth===0&&o.naturalHeight===0&&o.width===0&&o.height===0&&(o.width=300,o.height=150),n.resolve(o)},o.onerror=function(i){n.reject(i)},t&&(jo.contains(e)?o.crossOrigin="use-credentials":o.crossOrigin=""),o.src=e};ee._Implementations.createImage=function(e,t,n,o,i,a){const r=e.url;ee.supportsImageBitmapOptions().then(function(s){if(!(s&&a)){ee._Implementations.loadImageElement(r,t,n);return}const c="blob",f="GET",d=Si(),m=ee._Implementations.loadWithXhr(r,c,f,void 0,void 0,d,void 0,void 0,void 0);return u(m)&&u(m.abort)&&(e.cancelFunction=function(){m.abort()}),d.promise.then(function(p){if(!u(p)){n.reject(new Ye(`Successfully retrieved ${r} but it contained no content.`));return}return ee.createImageBitmapFromBlob(p,{flipY:o,premultiplyAlpha:!1,skipColorSpaceConversion:i})}).then(function(p){n.resolve(p)})}).catch(function(s){n.reject(s)})};ee.createImageBitmapFromBlob=function(e,t){return h.defined("options",t),h.typeOf.bool("options.flipY",t.flipY),h.typeOf.bool("options.premultiplyAlpha",t.premultiplyAlpha),h.typeOf.bool("options.skipColorSpaceConversion",t.skipColorSpaceConversion),createImageBitmap(e,{imageOrientation:t.flipY?"flipY":"none",premultiplyAlpha:t.premultiplyAlpha?"premultiply":"none",colorSpaceConversion:t.skipColorSpaceConversion?"none":"default"})};function Mm(e,t,n,o,i,a,r){fetch(e,{method:n,headers:i}).then(async s=>{if(!s.ok){const c={};s.headers.forEach((f,d)=>{c[d]=f}),a.reject(new pi(s.status,s,c));return}switch(t){case"text":a.resolve(s.text());break;case"json":a.resolve(s.json());break;default:a.resolve(new Uint8Array(await s.arrayBuffer()).buffer);break}}).catch(()=>{a.reject(new pi)})}const Nm=typeof XMLHttpRequest>"u";ee._Implementations.loadWithXhr=function(e,t,n,o,i,a,r){const s=Im.exec(e);if(s!==null){a.resolve(Pm(s,t));return}if(Nm){Mm(e,t,n,o,i,a);return}const c=new XMLHttpRequest;if(jo.contains(e)&&(c.withCredentials=!0),c.open(n,e,!0),u(r)&&u(c.overrideMimeType)&&c.overrideMimeType(r),u(i))for(const d in i)i.hasOwnProperty(d)&&c.setRequestHeader(d,i[d]);u(t)&&(c.responseType=t);let f=!1;return typeof e=="string"&&(f=e.indexOf("file://")===0||typeof window<"u"&&window.location.origin==="file://"),c.onload=function(){if((c.status<200||c.status>=300)&&!(f&&c.status===0)){a.reject(new pi(c.status,c.response,c.getAllResponseHeaders()));return}const d=c.response,m=c.responseType;if(n==="HEAD"||n==="OPTIONS"){const _=c.getAllResponseHeaders().trim().split(/[\r\n]+/),g={};_.forEach(function(b){const E=b.split(": "),v=E.shift();g[v]=E.join(": ")}),a.resolve(g);return}if(c.status===204)a.resolve(void 0);else if(u(d)&&(!u(t)||m===t))a.resolve(d);else if(t==="json"&&typeof d=="string")try{a.resolve(JSON.parse(d))}catch(p){a.reject(p)}else(m===""||m==="document")&&u(c.responseXML)&&c.responseXML.hasChildNodes()?a.resolve(c.responseXML):(m===""||m==="text")&&u(c.responseText)?a.resolve(c.responseText):a.reject(new Ye("Invalid XMLHttpRequest response type."))},c.onerror=function(d){a.reject(new pi)},c.send(o),c};ee._Implementations.loadAndExecuteScript=function(e,t,n){return _m(e).catch(function(o){n.reject(o)})};ee._DefaultImplementations={};ee._DefaultImplementations.createImage=ee._Implementations.createImage;ee._DefaultImplementations.loadWithXhr=ee._Implementations.loadWithXhr;ee._DefaultImplementations.loadAndExecuteScript=ee._Implementations.loadAndExecuteScript;ee.DEFAULT=Object.freeze(new ee({url:typeof document>"u"?"":document.location.href.split("?")[0]}));function _i(e){e=e??ue.EMPTY_OBJECT,this._dates=void 0,this._samples=void 0,this._dateColumn=-1,this._xPoleWanderRadiansColumn=-1,this._yPoleWanderRadiansColumn=-1,this._ut1MinusUtcSecondsColumn=-1,this._xCelestialPoleOffsetRadiansColumn=-1,this._yCelestialPoleOffsetRadiansColumn=-1,this._taiMinusUtcSecondsColumn=-1,this._columnCount=0,this._lastIndex=-1,this._addNewLeapSeconds=e.addNewLeapSeconds??!0,u(e.data)?Ec(this,e.data):Ec(this,{columnNames:["dateIso8601","modifiedJulianDateUtc","xPoleWanderRadians","yPoleWanderRadians","ut1MinusUtcSeconds","lengthOfDayCorrectionSeconds","xCelestialPoleOffsetRadians","yCelestialPoleOffsetRadians","taiMinusUtcSeconds"],samples:[]})}_i.fromUrl=async function(e,t){h.defined("url",e),t=t??ue.EMPTY_OBJECT;const n=ee.createIfNeeded(e);let o;try{o=await n.fetchJson()}catch{throw new Ye(`An error occurred while retrieving the EOP data from the URL ${n.url}.`)}return new _i({addNewLeapSeconds:t.addNewLeapSeconds,data:o})};_i.NONE=Object.freeze({compute:function(e,t){return u(t)?(t.xPoleWander=0,t.yPoleWander=0,t.xPoleOffset=0,t.yPoleOffset=0,t.ut1MinusUtc=0):t=new ps(0,0,0,0,0),t}});_i.prototype.compute=function(e,t){if(!u(this._samples))return;if(u(t)||(t=new ps(0,0,0,0,0)),this._samples.length===0)return t.xPoleWander=0,t.yPoleWander=0,t.xPoleOffset=0,t.yPoleOffset=0,t.ut1MinusUtc=0,t;const n=this._dates,o=this._lastIndex;let i=0,a=0;if(u(o)){const s=n[o],c=n[o+1],f=J.lessThanOrEquals(s,e),d=!u(c),m=d||J.greaterThanOrEquals(c,e);if(f&&m)return i=o,!d&&c.equals(e)&&++i,a=i+1,Ac(this,n,this._samples,e,i,a,t),t}let r=Oi(n,e,J.compare,this._dateColumn);return r>=0?(r<n.length-1&&n[r+1].equals(e)&&++r,i=r,a=r):(a=~r,i=a-1,i<0&&(i=0)),this._lastIndex=i,Ac(this,n,this._samples,e,i,a,t),t};function Dm(e,t){return J.compare(e.julianDate,t)}function Ec(e,t){if(!u(t.columnNames))throw new Ye("Error in loaded EOP data: The columnNames property is required.");if(!u(t.samples))throw new Ye("Error in loaded EOP data: The samples property is required.");const n=t.columnNames.indexOf("modifiedJulianDateUtc"),o=t.columnNames.indexOf("xPoleWanderRadians"),i=t.columnNames.indexOf("yPoleWanderRadians"),a=t.columnNames.indexOf("ut1MinusUtcSeconds"),r=t.columnNames.indexOf("xCelestialPoleOffsetRadians"),s=t.columnNames.indexOf("yCelestialPoleOffsetRadians"),c=t.columnNames.indexOf("taiMinusUtcSeconds");if(n<0||o<0||i<0||a<0||r<0||s<0||c<0)throw new Ye("Error in loaded EOP data: The columnNames property must include modifiedJulianDateUtc, xPoleWanderRadians, yPoleWanderRadians, ut1MinusUtcSeconds, xCelestialPoleOffsetRadians, yCelestialPoleOffsetRadians, and taiMinusUtcSeconds columns");const f=e._samples=t.samples,d=e._dates=[];e._dateColumn=n,e._xPoleWanderRadiansColumn=o,e._yPoleWanderRadiansColumn=i,e._ut1MinusUtcSecondsColumn=a,e._xCelestialPoleOffsetRadiansColumn=r,e._yCelestialPoleOffsetRadiansColumn=s,e._taiMinusUtcSecondsColumn=c,e._columnCount=t.columnNames.length,e._lastIndex=void 0;let m;const p=e._addNewLeapSeconds;for(let _=0,g=f.length;_<g;_+=e._columnCount){const b=f[_+n],E=f[_+c],v=b+je.MODIFIED_JULIAN_DATE_DIFFERENCE,C=new J(v,E,Ee.TAI);if(d.push(C),p){if(E!==m&&u(m)){const x=J.leapSeconds,R=Oi(x,C,Dm);if(R<0){const N=new Me(C,E);x.splice(~R,0,N)}}m=E}}}function wc(e,t,n,o,i){const a=n*o;i.xPoleWander=t[a+e._xPoleWanderRadiansColumn],i.yPoleWander=t[a+e._yPoleWanderRadiansColumn],i.xPoleOffset=t[a+e._xCelestialPoleOffsetRadiansColumn],i.yPoleOffset=t[a+e._yCelestialPoleOffsetRadiansColumn],i.ut1MinusUtc=t[a+e._ut1MinusUtcSecondsColumn]}function Wo(e,t,n){return t+e*(n-t)}function Ac(e,t,n,o,i,a,r){const s=e._columnCount;if(a>t.length-1)return r.xPoleWander=0,r.yPoleWander=0,r.xPoleOffset=0,r.yPoleOffset=0,r.ut1MinusUtc=0,r;const c=t[i],f=t[a];if(c.equals(f)||o.equals(c))return wc(e,n,i,s,r),r;if(o.equals(f))return wc(e,n,a,s,r),r;const d=J.secondsDifference(o,c)/J.secondsDifference(f,c),m=i*s,p=a*s;let _=n[m+e._ut1MinusUtcSecondsColumn],g=n[p+e._ut1MinusUtcSecondsColumn];const b=g-_;if(b>.5||b<-.5){const E=n[m+e._taiMinusUtcSecondsColumn],v=n[p+e._taiMinusUtcSecondsColumn];E!==v&&(f.equals(o)?_=g:g-=v-E)}return r.xPoleWander=Wo(d,n[m+e._xPoleWanderRadiansColumn],n[p+e._xPoleWanderRadiansColumn]),r.yPoleWander=Wo(d,n[m+e._yPoleWanderRadiansColumn],n[p+e._yPoleWanderRadiansColumn]),r.xPoleOffset=Wo(d,n[m+e._xCelestialPoleOffsetRadiansColumn],n[p+e._xCelestialPoleOffsetRadiansColumn]),r.yPoleOffset=Wo(d,n[m+e._yCelestialPoleOffsetRadiansColumn],n[p+e._yCelestialPoleOffsetRadiansColumn]),r.ut1MinusUtc=Wo(d,_,g),r}function ct(e,t,n){this.heading=e??0,this.pitch=t??0,this.roll=n??0}ct.fromQuaternion=function(e,t){if(!u(e))throw new T("quaternion is required");u(t)||(t=new ct);const n=2*(e.w*e.y-e.z*e.x),o=1-2*(e.x*e.x+e.y*e.y),i=2*(e.w*e.x+e.y*e.z),a=1-2*(e.y*e.y+e.z*e.z),r=2*(e.w*e.z+e.x*e.y);return t.heading=-Math.atan2(r,a),t.roll=Math.atan2(i,o),t.pitch=-A.asinClamped(n),t};ct.fromDegrees=function(e,t,n,o){if(!u(e))throw new T("heading is required");if(!u(t))throw new T("pitch is required");if(!u(n))throw new T("roll is required");return u(o)||(o=new ct),o.heading=e*A.RADIANS_PER_DEGREE,o.pitch=t*A.RADIANS_PER_DEGREE,o.roll=n*A.RADIANS_PER_DEGREE,o};ct.clone=function(e,t){if(u(e))return u(t)?(t.heading=e.heading,t.pitch=e.pitch,t.roll=e.roll,t):new ct(e.heading,e.pitch,e.roll)};ct.equals=function(e,t){return e===t||u(e)&&u(t)&&e.heading===t.heading&&e.pitch===t.pitch&&e.roll===t.roll};ct.equalsEpsilon=function(e,t,n,o){return e===t||u(e)&&u(t)&&A.equalsEpsilon(e.heading,t.heading,n,o)&&A.equalsEpsilon(e.pitch,t.pitch,n,o)&&A.equalsEpsilon(e.roll,t.roll,n,o)};ct.prototype.clone=function(e){return ct.clone(this,e)};ct.prototype.equals=function(e){return ct.equals(this,e)};ct.prototype.equalsEpsilon=function(e,t,n){return ct.equalsEpsilon(this,e,t,n)};ct.prototype.toString=function(){return`(${this.heading}, ${this.pitch}, ${this.roll})`};const Af=/((?:.*\/)|^)Cesium\.js(?:\?|\#|$)/;function Lm(){const e=document.getElementsByTagName("script");for(let t=0,n=e.length;t<n;++t){const o=e[t].getAttribute("src"),i=Af.exec(o);if(i!==null)return i[1]}}let Li;function Of(e){return typeof document>"u"?e:(u(Li)||(Li=document.createElement("a")),Li.href=e,Li.href)}let no;function Sf(){var t;if(u(no))return no;let e;if(typeof CESIUM_BASE_URL<"u"?e=CESIUM_BASE_URL:u((t=import.meta)==null?void 0:t.url)?e=mi(".",import.meta.url):typeof define=="object"&&u(define.amd)&&!define.amd.toUrlUndefined&&u(require.toUrl)?e=mi("..",Ht("Core/buildModuleUrl.js")):e=Lm(),!u(e))throw new T("Unable to determine Cesium base URL automatically, try defining a global variable called CESIUM_BASE_URL.");return no=new ee({url:Of(e)}),no.appendForwardSlash(),no}function Fm(e){return Of(require.toUrl(`../${e}`))}function xf(e){return Sf().getDerivedResource({url:e}).url}let Fi;function Ht(e){return u(Fi)||(typeof define=="object"&&u(define.amd)&&!define.amd.toUrlUndefined&&u(require.toUrl)?Fi=Fm:Fi=xf),Fi(e)}Ht._cesiumScriptRegex=Af;Ht._buildModuleUrlFromBaseUrl=xf;Ht._clearBaseResource=function(){no=void 0};Ht.setBaseUrl=function(e){no=ee.DEFAULT.getDerivedResource({url:e})};Ht.getCesiumBaseUrl=Sf;function Cf(e,t,n){this.x=e,this.y=t,this.s=n}function As(e){e=e??ue.EMPTY_OBJECT,this._xysFileUrlTemplate=ee.createIfNeeded(e.xysFileUrlTemplate),this._interpolationOrder=e.interpolationOrder??9,this._sampleZeroJulianEphemerisDate=e.sampleZeroJulianEphemerisDate??24423965e-1,this._sampleZeroDateTT=new J(this._sampleZeroJulianEphemerisDate,0,Ee.TAI),this._stepSizeDays=e.stepSizeDays??1,this._samplesPerXysFile=e.samplesPerXysFile??1e3,this._totalSamples=e.totalSamples??27426,this._samples=new Array(this._totalSamples*3),this._chunkDownloadsInProgress=[];const t=this._interpolationOrder,n=this._denominators=new Array(t+1),o=this._xTable=new Array(t+1),i=Math.pow(this._stepSizeDays,t);for(let a=0;a<=t;++a){n[a]=i,o[a]=a*this._stepSizeDays;for(let r=0;r<=t;++r)r!==a&&(n[a]*=a-r);n[a]=1/n[a]}this._work=new Array(t+1),this._coef=new Array(t+1)}const Bm=new J(0,0,Ee.TAI);function Wa(e,t,n){const o=Bm;return o.dayNumber=t,o.secondsOfDay=n,J.daysDifference(o,e._sampleZeroDateTT)}As.prototype.preload=function(e,t,n,o){const i=Wa(this,e,t),a=Wa(this,n,o);let r=i/this._stepSizeDays-this._interpolationOrder/2|0;r<0&&(r=0);let s=a/this._stepSizeDays-this._interpolationOrder/2|0+this._interpolationOrder;s>=this._totalSamples&&(s=this._totalSamples-1);const c=r/this._samplesPerXysFile|0,f=s/this._samplesPerXysFile|0,d=[];for(let m=c;m<=f;++m)d.push(Ya(this,m));return Promise.all(d)};As.prototype.computeXysRadians=function(e,t,n){const o=Wa(this,e,t);if(o<0)return;const i=o/this._stepSizeDays|0;if(i>=this._totalSamples)return;const a=this._interpolationOrder;let r=i-(a/2|0);r<0&&(r=0);let s=r+a;s>=this._totalSamples&&(s=this._totalSamples-1,r=s-a,r<0&&(r=0));let c=!1;const f=this._samples;if(u(f[r*3])||(Ya(this,r/this._samplesPerXysFile|0),c=!0),u(f[s*3])||(Ya(this,s/this._samplesPerXysFile|0),c=!0),c)return;u(n)?(n.x=0,n.y=0,n.s=0):n=new Cf(0,0,0);const d=o-r*this._stepSizeDays,m=this._work,p=this._denominators,_=this._coef,g=this._xTable;let b,E;for(b=0;b<=a;++b)m[b]=d-g[b];for(b=0;b<=a;++b){for(_[b]=1,E=0;E<=a;++E)E!==b&&(_[b]*=m[E]);_[b]*=p[b];let v=(r+b)*3;n.x+=_[b]*f[v++],n.y+=_[b]*f[v++],n.s+=_[b]*f[v]}return n};function Ya(e,t){if(e._chunkDownloadsInProgress[t])return e._chunkDownloadsInProgress[t];let n;const o=e._xysFileUrlTemplate;u(o)?n=o.getDerivedResource({templateValues:{0:t}}):n=new ee({url:Ht(`Assets/IAU2006_XYS/IAU2006_XYS_${t}.json`)});const i=n.fetchJson().then(function(a){e._chunkDownloadsInProgress[t]=!1;const r=e._samples,s=a.samples,c=t*e._samplesPerXysFile*3;for(let f=0,d=s.length;f<d;++f)r[c+f]=s[f]});return e._chunkDownloadsInProgress[t]=i,i}let Mn;const He={requestFullscreen:void 0,exitFullscreen:void 0,fullscreenEnabled:void 0,fullscreenElement:void 0,fullscreenchange:void 0,fullscreenerror:void 0},It={};Object.defineProperties(It,{element:{get:function(){if(It.supportsFullscreen())return document[He.fullscreenElement]}},changeEventName:{get:function(){if(It.supportsFullscreen())return He.fullscreenchange}},errorEventName:{get:function(){if(It.supportsFullscreen())return He.fullscreenerror}},enabled:{get:function(){if(It.supportsFullscreen())return document[He.fullscreenEnabled]}},fullscreen:{get:function(){if(It.supportsFullscreen())return It.element!==null}}});It.supportsFullscreen=function(){if(u(Mn))return Mn;Mn=!1;const e=document.body;if(typeof e.requestFullscreen=="function")return He.requestFullscreen="requestFullscreen",He.exitFullscreen="exitFullscreen",He.fullscreenEnabled="fullscreenEnabled",He.fullscreenElement="fullscreenElement",He.fullscreenchange="fullscreenchange",He.fullscreenerror="fullscreenerror",Mn=!0,Mn;const t=["webkit","moz","o","ms","khtml"];let n;for(let o=0,i=t.length;o<i;++o){const a=t[o];n=`${a}RequestFullscreen`,typeof e[n]=="function"?(He.requestFullscreen=n,Mn=!0):(n=`${a}RequestFullScreen`,typeof e[n]=="function"&&(He.requestFullscreen=n,Mn=!0)),n=`${a}ExitFullscreen`,typeof document[n]=="function"?He.exitFullscreen=n:(n=`${a}CancelFullScreen`,typeof document[n]=="function"&&(He.exitFullscreen=n)),n=`${a}FullscreenEnabled`,document[n]!==void 0?He.fullscreenEnabled=n:(n=`${a}FullScreenEnabled`,document[n]!==void 0&&(He.fullscreenEnabled=n)),n=`${a}FullscreenElement`,document[n]!==void 0?He.fullscreenElement=n:(n=`${a}FullScreenElement`,document[n]!==void 0&&(He.fullscreenElement=n)),n=`${a}fullscreenchange`,document[`on${n}`]!==void 0&&(a==="ms"&&(n="MSFullscreenChange"),He.fullscreenchange=n),n=`${a}fullscreenerror`,document[`on${n}`]!==void 0&&(a==="ms"&&(n="MSFullscreenError"),He.fullscreenerror=n)}return Mn};It.requestFullscreen=function(e,t){It.supportsFullscreen()&&e[He.requestFullscreen]({vrDisplay:t})};It.exitFullscreen=function(){It.supportsFullscreen()&&document[He.exitFullscreen]()};It._names=He;let Tt;typeof navigator<"u"?Tt=navigator:Tt={};function so(e){const t=e.split(".");for(let n=0,o=t.length;n<o;++n)t[n]=parseInt(t[n],10);return t}let Bi,vf;function Os(){if(!u(Bi)&&(Bi=!1,!qr())){const e=/ Chrome\/([\.0-9]+)/.exec(Tt.userAgent);e!==null&&(Bi=!0,vf=so(e[1]))}return Bi}function Um(){return Os()&&vf}let Ui,Rf;function zf(){if(!u(Ui)&&(Ui=!1,!Os()&&!qr()&&/ Safari\/[\.0-9]+/.test(Tt.userAgent))){const e=/ Version\/([\.0-9]+)/.exec(Tt.userAgent);e!==null&&(Ui=!0,Rf=so(e[1]))}return Ui}function Gm(){return zf()&&Rf}let Gi,Xa;function If(){if(!u(Gi)){Gi=!1;const e=/ AppleWebKit\/([\.0-9]+)(\+?)/.exec(Tt.userAgent);e!==null&&(Gi=!0,Xa=so(e[1]),Xa.isNightly=!!e[2])}return Gi}function qm(){return If()&&Xa}let Yo,$a;function Pf(){if(!u(Yo)){Yo=!1;let e;Tt.appName==="Microsoft Internet Explorer"?(e=/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(Tt.userAgent),e!==null&&(Yo=!0,$a=so(e[1]))):Tt.appName==="Netscape"&&(e=/Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(Tt.userAgent),e!==null&&(Yo=!0,$a=so(e[1])))}return Yo}function km(){return Pf()&&$a}let qi,Mf;function qr(){if(!u(qi)){qi=!1;const e=/ Edg\/([\.0-9]+)/.exec(Tt.userAgent);e!==null&&(qi=!0,Mf=so(e[1]))}return qi}function Vm(){return qr()&&Mf}let ki,Ss;function kr(){if(!u(ki)){ki=!1;const e=/Firefox\/([\.0-9]+)/.exec(Tt.userAgent);e!==null&&(ki=!0,Ss=so(e[1]))}return ki}let Qr;function jm(){return u(Qr)||(Qr=/Windows/i.test(Tt.appVersion)),Qr}let Jr;function Hm(){return u(Jr)||(Jr=navigator.platform==="iPhone"||navigator.platform==="iPod"||navigator.platform==="iPad"),Jr}function Wm(){return kr()&&Ss}let ea;function Ym(){return u(ea)||(ea=!kr()&&typeof PointerEvent<"u"&&(!u(Tt.pointerEnabled)||Tt.pointerEnabled)),ea}let Nf,Vi;function Df(){if(!u(Vi)){const e=document.createElement("canvas");e.setAttribute("style","image-rendering: -moz-crisp-edges;image-rendering: pixelated;");const t=e.style.imageRendering;Vi=u(t)&&t!=="",Vi&&(Nf=t)}return Vi}function Xm(){return Df()?Nf:void 0}function gt(){if(!gt.initialized)throw new T("You must call FeatureDetection.supportsWebP.initialize and wait for the promise to resolve before calling FeatureDetection.supportsWebP");return gt._result}gt._promise=void 0;gt._result=void 0;gt.initialize=function(){return u(gt._promise)||(gt._promise=new Promise(e=>{const t=new Image;t.onload=function(){gt._result=t.width>0&&t.height>0,e(gt._result)},t.onerror=function(){gt._result=!1,e(gt._result)},t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA"})),gt._promise};Object.defineProperties(gt,{initialized:{get:function(){return u(gt._result)}}});const xo=[];typeof ArrayBuffer<"u"&&(xo.push(Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array),typeof Uint8ClampedArray<"u"&&xo.push(Uint8ClampedArray),typeof Uint8ClampedArray<"u"&&xo.push(Uint8ClampedArray),typeof BigInt64Array<"u"&&xo.push(BigInt64Array),typeof BigUint64Array<"u"&&xo.push(BigUint64Array));const ot={isChrome:Os,chromeVersion:Um,isSafari:zf,safariVersion:Gm,isWebkit:If,webkitVersion:qm,isInternetExplorer:Pf,internetExplorerVersion:km,isEdge:qr,edgeVersion:Vm,isFirefox:kr,firefoxVersion:Wm,isWindows:jm,isIPadOrIOS:Hm,hardwareConcurrency:Tt.hardwareConcurrency??3,supportsPointerEvents:Ym,supportsImageRenderingPixelated:Df,supportsWebP:gt,imageRenderingValue:Xm,typedArrayTypes:xo};ot.supportsBasis=function(e){return ot.supportsWebAssembly()&&e.context.supportsBasis};ot.supportsFullscreen=function(){return It.supportsFullscreen()};ot.supportsTypedArrays=function(){return typeof ArrayBuffer<"u"};ot.supportsBigInt64Array=function(){return typeof BigInt64Array<"u"};ot.supportsBigUint64Array=function(){return typeof BigUint64Array<"u"};ot.supportsBigInt=function(){return typeof BigInt<"u"};ot.supportsWebWorkers=function(){return typeof Worker<"u"};ot.supportsWebAssembly=function(){return typeof WebAssembly<"u"};ot.supportsWebgl2=function(e){return h.defined("scene",e),e.context.webgl2};ot.supportsEsmWebWorkers=function(){return!kr()||parseInt(Ss)>=114};function K(e,t,n,o){this.x=e??0,this.y=t??0,this.z=n??0,this.w=o??0}let Xo=new l;K.fromAxisAngle=function(e,t,n){h.typeOf.object("axis",e),h.typeOf.number("angle",t);const o=t/2,i=Math.sin(o);Xo=l.normalize(e,Xo);const a=Xo.x*i,r=Xo.y*i,s=Xo.z*i,c=Math.cos(o);return u(n)?(n.x=a,n.y=r,n.z=s,n.w=c,n):new K(a,r,s,c)};const $m=[1,2,0],Zm=new Array(3);K.fromRotationMatrix=function(e,t){h.typeOf.object("matrix",e);let n,o,i,a,r;const s=e[P.COLUMN0ROW0],c=e[P.COLUMN1ROW1],f=e[P.COLUMN2ROW2],d=s+c+f;if(d>0)n=Math.sqrt(d+1),r=.5*n,n=.5/n,o=(e[P.COLUMN1ROW2]-e[P.COLUMN2ROW1])*n,i=(e[P.COLUMN2ROW0]-e[P.COLUMN0ROW2])*n,a=(e[P.COLUMN0ROW1]-e[P.COLUMN1ROW0])*n;else{const m=$m;let p=0;c>s&&(p=1),f>s&&f>c&&(p=2);const _=m[p],g=m[_];n=Math.sqrt(e[P.getElementIndex(p,p)]-e[P.getElementIndex(_,_)]-e[P.getElementIndex(g,g)]+1);const b=Zm;b[p]=.5*n,n=.5/n,r=(e[P.getElementIndex(g,_)]-e[P.getElementIndex(_,g)])*n,b[_]=(e[P.getElementIndex(_,p)]+e[P.getElementIndex(p,_)])*n,b[g]=(e[P.getElementIndex(g,p)]+e[P.getElementIndex(p,g)])*n,o=-b[0],i=-b[1],a=-b[2]}return u(t)?(t.x=o,t.y=i,t.z=a,t.w=r,t):new K(o,i,a,r)};const Oc=new K;let Sc=new K,ta=new K,xc=new K;K.fromHeadingPitchRoll=function(e,t){return h.typeOf.object("headingPitchRoll",e),xc=K.fromAxisAngle(l.UNIT_X,e.roll,Oc),ta=K.fromAxisAngle(l.UNIT_Y,-e.pitch,t),t=K.multiply(ta,xc,ta),Sc=K.fromAxisAngle(l.UNIT_Z,-e.heading,Oc),K.multiply(Sc,t,t)};const ji=new l,na=new l,$t=new K,Cc=new K,Hi=new K;K.packedLength=4;K.pack=function(e,t,n){return h.typeOf.object("value",e),h.defined("array",t),n=n??0,t[n++]=e.x,t[n++]=e.y,t[n++]=e.z,t[n]=e.w,t};K.unpack=function(e,t,n){return h.defined("array",e),t=t??0,u(n)||(n=new K),n.x=e[t],n.y=e[t+1],n.z=e[t+2],n.w=e[t+3],n};K.packedInterpolationLength=3;K.convertPackedArrayForInterpolation=function(e,t,n,o){K.unpack(e,n*4,Hi),K.conjugate(Hi,Hi);for(let i=0,a=n-t+1;i<a;i++){const r=i*3;K.unpack(e,(t+i)*4,$t),K.multiply($t,Hi,$t),$t.w<0&&K.negate($t,$t),K.computeAxis($t,ji);const s=K.computeAngle($t);u(o)||(o=[]),o[r]=ji.x*s,o[r+1]=ji.y*s,o[r+2]=ji.z*s}};K.unpackInterpolationResult=function(e,t,n,o,i){u(i)||(i=new K),l.fromArray(e,0,na);const a=l.magnitude(na);return K.unpack(t,o*4,Cc),a===0?K.clone(K.IDENTITY,$t):K.fromAxisAngle(na,a,$t),K.multiply($t,Cc,i)};K.clone=function(e,t){if(u(e))return u(t)?(t.x=e.x,t.y=e.y,t.z=e.z,t.w=e.w,t):new K(e.x,e.y,e.z,e.w)};K.conjugate=function(e,t){return h.typeOf.object("quaternion",e),h.typeOf.object("result",t),t.x=-e.x,t.y=-e.y,t.z=-e.z,t.w=e.w,t};K.magnitudeSquared=function(e){return h.typeOf.object("quaternion",e),e.x*e.x+e.y*e.y+e.z*e.z+e.w*e.w};K.magnitude=function(e){return Math.sqrt(K.magnitudeSquared(e))};K.normalize=function(e,t){h.typeOf.object("result",t);const n=1/K.magnitude(e),o=e.x*n,i=e.y*n,a=e.z*n,r=e.w*n;return t.x=o,t.y=i,t.z=a,t.w=r,t};K.inverse=function(e,t){h.typeOf.object("result",t);const n=K.magnitudeSquared(e);return t=K.conjugate(e,t),K.multiplyByScalar(t,1/n,t)};K.add=function(e,t,n){return h.typeOf.object("left",e),h.typeOf.object("right",t),h.typeOf.object("result",n),n.x=e.x+t.x,n.y=e.y+t.y,n.z=e.z+t.z,n.w=e.w+t.w,n};K.subtract=function(e,t,n){return h.typeOf.object("left",e),h.typeOf.object("right",t),h.typeOf.object("result",n),n.x=e.x-t.x,n.y=e.y-t.y,n.z=e.z-t.z,n.w=e.w-t.w,n};K.negate=function(e,t){return h.typeOf.object("quaternion",e),h.typeOf.object("result",t),t.x=-e.x,t.y=-e.y,t.z=-e.z,t.w=-e.w,t};K.dot=function(e,t){return h.typeOf.object("left",e),h.typeOf.object("right",t),e.x*t.x+e.y*t.y+e.z*t.z+e.w*t.w};K.multiply=function(e,t,n){h.typeOf.object("left",e),h.typeOf.object("right",t),h.typeOf.object("result",n);const o=e.x,i=e.y,a=e.z,r=e.w,s=t.x,c=t.y,f=t.z,d=t.w,m=r*s+o*d+i*f-a*c,p=r*c-o*f+i*d+a*s,_=r*f+o*c-i*s+a*d,g=r*d-o*s-i*c-a*f;return n.x=m,n.y=p,n.z=_,n.w=g,n};K.multiplyByScalar=function(e,t,n){return h.typeOf.object("quaternion",e),h.typeOf.number("scalar",t),h.typeOf.object("result",n),n.x=e.x*t,n.y=e.y*t,n.z=e.z*t,n.w=e.w*t,n};K.divideByScalar=function(e,t,n){return h.typeOf.object("quaternion",e),h.typeOf.number("scalar",t),h.typeOf.object("result",n),n.x=e.x/t,n.y=e.y/t,n.z=e.z/t,n.w=e.w/t,n};K.computeAxis=function(e,t){h.typeOf.object("quaternion",e),h.typeOf.object("result",t);const n=e.w;if(Math.abs(n-1)<A.EPSILON6||Math.abs(n+1)<A.EPSILON6)return t.x=1,t.y=t.z=0,t;const o=1/Math.sqrt(1-n*n);return t.x=e.x*o,t.y=e.y*o,t.z=e.z*o,t};K.computeAngle=function(e){return h.typeOf.object("quaternion",e),Math.abs(e.w-1)<A.EPSILON6?0:2*Math.acos(e.w)};let oa=new K;K.lerp=function(e,t,n,o){return h.typeOf.object("start",e),h.typeOf.object("end",t),h.typeOf.number("t",n),h.typeOf.object("result",o),oa=K.multiplyByScalar(t,n,oa),o=K.multiplyByScalar(e,1-n,o),K.add(oa,o,o)};let vc=new K,ia=new K,ra=new K;K.slerp=function(e,t,n,o){h.typeOf.object("start",e),h.typeOf.object("end",t),h.typeOf.number("t",n),h.typeOf.object("result",o);let i=K.dot(e,t),a=t;if(i<0&&(i=-i,a=vc=K.negate(t,vc)),1-i<A.EPSILON6)return K.lerp(e,a,n,o);const r=Math.acos(i);return ia=K.multiplyByScalar(e,Math.sin((1-n)*r),ia),ra=K.multiplyByScalar(a,Math.sin(n*r),ra),o=K.add(ia,ra,o),K.multiplyByScalar(o,1/Math.sin(r),o)};K.log=function(e,t){h.typeOf.object("quaternion",e),h.typeOf.object("result",t);const n=A.acosClamped(e.w);let o=0;return n!==0&&(o=n/Math.sin(n)),l.multiplyByScalar(e,o,t)};K.exp=function(e,t){h.typeOf.object("cartesian",e),h.typeOf.object("result",t);const n=l.magnitude(e);let o=0;return n!==0&&(o=Math.sin(n)/n),t.x=e.x*o,t.y=e.y*o,t.z=e.z*o,t.w=Math.cos(n),t};const Km=new l,Qm=new l,li=new K,Co=new K;K.computeInnerQuadrangle=function(e,t,n,o){h.typeOf.object("q0",e),h.typeOf.object("q1",t),h.typeOf.object("q2",n),h.typeOf.object("result",o);const i=K.conjugate(t,li);K.multiply(i,n,Co);const a=K.log(Co,Km);K.multiply(i,e,Co);const r=K.log(Co,Qm);return l.add(a,r,a),l.multiplyByScalar(a,.25,a),l.negate(a,a),K.exp(a,li),K.multiply(t,li,o)};K.squad=function(e,t,n,o,i,a){h.typeOf.object("q0",e),h.typeOf.object("q1",t),h.typeOf.object("s0",n),h.typeOf.object("s1",o),h.typeOf.number("t",i),h.typeOf.object("result",a);const r=K.slerp(e,t,i,li),s=K.slerp(n,o,i,Co);return K.slerp(r,s,2*i*(1-i),a)};const Jm=new K,Lf=1.9011074535173003,xr=ot.supportsTypedArrays()?new Float32Array(8):[],Cr=ot.supportsTypedArrays()?new Float32Array(8):[],bn=ot.supportsTypedArrays()?new Float32Array(8):[],Tn=ot.supportsTypedArrays()?new Float32Array(8):[];for(let e=0;e<7;++e){const t=e+1,n=2*t+1;xr[e]=1/(t*n),Cr[e]=t/n}xr[7]=Lf/(8*17);Cr[7]=Lf*8/17;K.fastSlerp=function(e,t,n,o){h.typeOf.object("start",e),h.typeOf.object("end",t),h.typeOf.number("t",n),h.typeOf.object("result",o);let i=K.dot(e,t),a;i>=0?a=1:(a=-1,i=-i);const r=i-1,s=1-n,c=n*n,f=s*s;for(let _=7;_>=0;--_)bn[_]=(xr[_]*c-Cr[_])*r,Tn[_]=(xr[_]*f-Cr[_])*r;const d=a*n*(1+bn[0]*(1+bn[1]*(1+bn[2]*(1+bn[3]*(1+bn[4]*(1+bn[5]*(1+bn[6]*(1+bn[7])))))))),m=s*(1+Tn[0]*(1+Tn[1]*(1+Tn[2]*(1+Tn[3]*(1+Tn[4]*(1+Tn[5]*(1+Tn[6]*(1+Tn[7])))))))),p=K.multiplyByScalar(e,m,Jm);return K.multiplyByScalar(t,d,o),K.add(p,o,o)};K.fastSquad=function(e,t,n,o,i,a){h.typeOf.object("q0",e),h.typeOf.object("q1",t),h.typeOf.object("s0",n),h.typeOf.object("s1",o),h.typeOf.number("t",i),h.typeOf.object("result",a);const r=K.fastSlerp(e,t,i,li),s=K.fastSlerp(n,o,i,Co);return K.fastSlerp(r,s,2*i*(1-i),a)};K.equals=function(e,t){return e===t||u(e)&&u(t)&&e.x===t.x&&e.y===t.y&&e.z===t.z&&e.w===t.w};K.equalsEpsilon=function(e,t,n){return n=n??0,e===t||u(e)&&u(t)&&Math.abs(e.x-t.x)<=n&&Math.abs(e.y-t.y)<=n&&Math.abs(e.z-t.z)<=n&&Math.abs(e.w-t.w)<=n};K.ZERO=Object.freeze(new K(0,0,0,0));K.IDENTITY=Object.freeze(new K(0,0,0,1));K.prototype.clone=function(e){return K.clone(this,e)};K.prototype.equals=function(e){return K.equals(this,e)};K.prototype.equalsEpsilon=function(e,t){return K.equalsEpsilon(this,e,t)};K.prototype.toString=function(){return`(${this.x}, ${this.y}, ${this.z}, ${this.w})`};const _e={},aa={up:{south:"east",north:"west",west:"south",east:"north"},down:{south:"west",north:"east",west:"north",east:"south"},south:{up:"west",down:"east",west:"down",east:"up"},north:{up:"east",down:"west",west:"up",east:"down"},west:{up:"north",down:"south",north:"down",south:"up"},east:{up:"south",down:"north",north:"up",south:"down"}},bo={north:[-1,0,0],east:[0,1,0],up:[0,0,1],south:[1,0,0],west:[0,-1,0],down:[0,0,-1]},sa={},Rt={east:new l,north:new l,up:new l,west:new l,south:new l,down:new l};let Nn=new l,Dn=new l,Ln=new l;_e.localFrameToFixedFrameGenerator=function(e,t){if(!aa.hasOwnProperty(e)||!aa[e].hasOwnProperty(t))throw new T("firstAxis and secondAxis must be east, north, up, west, south or down.");const n=aa[e][t];let o;const i=e+t;return u(sa[i])?o=sa[i]:(o=function(a,r,s){if(!u(a))throw new T("origin is required.");if(isNaN(a.x)||isNaN(a.y)||isNaN(a.z))throw new T("origin has a NaN component");if(u(s)||(s=new M),l.equalsEpsilon(a,l.ZERO,A.EPSILON14))l.unpack(bo[e],0,Nn),l.unpack(bo[t],0,Dn),l.unpack(bo[n],0,Ln);else if(A.equalsEpsilon(a.x,0,A.EPSILON14)&&A.equalsEpsilon(a.y,0,A.EPSILON14)){const c=A.sign(a.z);l.unpack(bo[e],0,Nn),e!=="east"&&e!=="west"&&l.multiplyByScalar(Nn,c,Nn),l.unpack(bo[t],0,Dn),t!=="east"&&t!=="west"&&l.multiplyByScalar(Dn,c,Dn),l.unpack(bo[n],0,Ln),n!=="east"&&n!=="west"&&l.multiplyByScalar(Ln,c,Ln)}else{r=r??ae.default,r.geodeticSurfaceNormal(a,Rt.up);const c=Rt.up,f=Rt.east;f.x=-a.y,f.y=a.x,f.z=0,l.normalize(f,Rt.east),l.cross(c,f,Rt.north),l.multiplyByScalar(Rt.up,-1,Rt.down),l.multiplyByScalar(Rt.east,-1,Rt.west),l.multiplyByScalar(Rt.north,-1,Rt.south),Nn=Rt[e],Dn=Rt[t],Ln=Rt[n]}return s[0]=Nn.x,s[1]=Nn.y,s[2]=Nn.z,s[3]=0,s[4]=Dn.x,s[5]=Dn.y,s[6]=Dn.z,s[7]=0,s[8]=Ln.x,s[9]=Ln.y,s[10]=Ln.z,s[11]=0,s[12]=a.x,s[13]=a.y,s[14]=a.z,s[15]=1,s},sa[i]=o),o};_e.eastNorthUpToFixedFrame=_e.localFrameToFixedFrameGenerator("east","north");_e.northEastDownToFixedFrame=_e.localFrameToFixedFrameGenerator("north","east");_e.northUpEastToFixedFrame=_e.localFrameToFixedFrameGenerator("north","up");_e.northWestUpToFixedFrame=_e.localFrameToFixedFrameGenerator("north","west");const ep=new K,tp=new l(1,1,1),np=new M;_e.headingPitchRollToFixedFrame=function(e,t,n,o,i){h.typeOf.object("HeadingPitchRoll",t),o=o??_e.eastNorthUpToFixedFrame;const a=K.fromHeadingPitchRoll(t,ep),r=M.fromTranslationQuaternionRotationScale(l.ZERO,a,tp,np);return i=o(e,n,i),M.multiply(i,r,i)};const op=new M,ip=new P;_e.headingPitchRollQuaternion=function(e,t,n,o,i){h.typeOf.object("HeadingPitchRoll",t);const a=_e.headingPitchRollToFixedFrame(e,t,n,o,op),r=M.getMatrix3(a,ip);return K.fromRotationMatrix(r,i)};const rp=new l(1,1,1),ap=new l,Rc=new M,sp=new M,cp=new P,lp=new K;_e.fixedFrameToHeadingPitchRoll=function(e,t,n,o){h.defined("transform",e),t=t??ae.default,n=n??_e.eastNorthUpToFixedFrame,u(o)||(o=new ct);const i=M.getTranslation(e,ap);if(l.equals(i,l.ZERO))return o.heading=0,o.pitch=0,o.roll=0,o;let a=M.inverseTransformation(n(i,t,Rc),Rc),r=M.setScale(e,rp,sp);r=M.setTranslation(r,l.ZERO,r),a=M.multiply(a,r,a);let s=K.fromRotationMatrix(M.getMatrix3(a,cp),lp);return s=K.normalize(s,s),ct.fromQuaternion(s,o)};const fp=6*3600+41*60+50.54841,up=8640184812866e-6,hp=.093104,dp=-62e-7,mp=11772758384668e-32,pp=72921158553e-15,_p=A.TWO_PI/86400;let Wi=new J;_e.computeIcrfToCentralBodyFixedMatrix=function(e,t){let n=_e.computeIcrfToFixedMatrix(e,t);return u(n)||(n=_e.computeTemeToPseudoFixedMatrix(e,t)),n};_e.computeTemeToPseudoFixedMatrix=function(e,t){if(!u(e))throw new T("date is required.");Wi=J.addSeconds(e,-J.computeTaiMinusUtc(e),Wi);const n=Wi.dayNumber,o=Wi.secondsOfDay;let i;const a=n-2451545;o>=43200?i=(a+.5)/je.DAYS_PER_JULIAN_CENTURY:i=(a-.5)/je.DAYS_PER_JULIAN_CENTURY;const s=(fp+i*(up+i*(hp+i*dp)))*_p%A.TWO_PI,c=pp+mp*(n-24515455e-1),f=(o+je.SECONDS_PER_DAY*.5)%je.SECONDS_PER_DAY,d=s+c*f,m=Math.cos(d),p=Math.sin(d);return u(t)?(t[0]=m,t[1]=-p,t[2]=0,t[3]=p,t[4]=m,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t):new P(m,p,0,-p,m,0,0,0,1)};_e.iau2006XysData=new As;_e.earthOrientationParameters=_i.NONE;const Za=32.184,gp=2451545;_e.preloadIcrfFixed=function(e){const t=e.start.dayNumber,n=e.start.secondsOfDay+Za,o=e.stop.dayNumber,i=e.stop.secondsOfDay+Za;return _e.iau2006XysData.preload(t,n,o,i)};_e.computeIcrfToFixedMatrix=function(e,t){if(!u(e))throw new T("date is required.");u(t)||(t=new P);const n=_e.computeFixedToIcrfMatrix(e,t);if(u(n))return P.transpose(n,t)};const yp=32.184,bp=2451545,Yi=new ct,Tp=new P,Ep=new J;_e.computeMoonFixedToIcrfMatrix=function(e,t){if(!u(e))throw new T("date is required.");const n=J.addSeconds(e,yp,Ep),o=J.totalDays(n)-bp,i=A.toRadians(12.112)-A.toRadians(.052992)*o,a=A.toRadians(24.224)-A.toRadians(.105984)*o,r=A.toRadians(227.645)+A.toRadians(13.012)*o,s=A.toRadians(261.105)+A.toRadians(13.340716)*o,c=A.toRadians(358)+A.toRadians(.9856)*o;return Yi.pitch=A.toRadians(180)-A.toRadians(3.878)*Math.sin(i)-A.toRadians(.12)*Math.sin(a)+A.toRadians(.07)*Math.sin(r)-A.toRadians(.017)*Math.sin(s),Yi.roll=A.toRadians(66.53-90)+A.toRadians(1.543)*Math.cos(i)+A.toRadians(.24)*Math.cos(a)-A.toRadians(.028)*Math.cos(r)+A.toRadians(.007)*Math.cos(s),Yi.heading=A.toRadians(244.375-90)+A.toRadians(13.17635831)*o+A.toRadians(3.558)*Math.sin(i)+A.toRadians(.121)*Math.sin(a)-A.toRadians(.064)*Math.sin(r)+A.toRadians(.016)*Math.sin(s)+A.toRadians(.025)*Math.sin(c),P.fromHeadingPitchRoll(Yi,Tp)};_e.computeIcrfToMoonFixedMatrix=function(e,t){if(!u(e))throw new T("date is required.");u(t)||(t=new P);const n=_e.computeMoonFixedToIcrfMatrix(e,t);if(u(n))return P.transpose(n,t)};const wp=new Cf(0,0,0),Ap=new ps(0,0,0,0,0),ca=new P,la=new P;_e.computeFixedToIcrfMatrix=function(e,t){if(!u(e))throw new T("date is required.");u(t)||(t=new P);const n=_e.earthOrientationParameters.compute(e,Ap);if(!u(n))return;const o=e.dayNumber,i=e.secondsOfDay+Za,a=_e.iau2006XysData.computeXysRadians(o,i,wp);if(!u(a))return;const r=a.x+n.xPoleOffset,s=a.y+n.yPoleOffset,c=1/(1+Math.sqrt(1-r*r-s*s)),f=ca;f[0]=1-c*r*r,f[3]=-c*r*s,f[6]=r,f[1]=-c*r*s,f[4]=1-c*s*s,f[7]=s,f[2]=-r,f[5]=-s,f[8]=1-c*(r*r+s*s);const d=P.fromRotationZ(-a.s,la),m=P.multiply(f,d,ca),p=e.dayNumber,_=e.secondsOfDay-J.computeTaiMinusUtc(e)+n.ut1MinusUtc,g=p-2451545,b=_/je.SECONDS_PER_DAY;let E=.779057273264+b+.00273781191135448*(g+b);E=E%1*A.TWO_PI;const v=P.fromRotationZ(E,la),C=P.multiply(m,v,ca),x=Math.cos(n.xPoleWander),R=Math.cos(n.yPoleWander),N=Math.sin(n.xPoleWander),F=Math.sin(n.yPoleWander);let q=o-gp+i/je.SECONDS_PER_DAY;q/=36525;const D=-47e-6*q*A.RADIANS_PER_DEGREE/3600,B=Math.cos(D),L=Math.sin(D),G=la;return G[0]=x*B,G[1]=x*L,G[2]=N,G[3]=-R*L+F*N*B,G[4]=R*B+F*N*L,G[5]=-F*x,G[6]=-F*L-R*N*B,G[7]=F*B-R*N*L,G[8]=R*x,P.multiply(C,G,t)};const Op=new W;_e.pointToWindowCoordinates=function(e,t,n,o){return o=_e.pointToGLWindowCoordinates(e,t,n,o),o.y=2*t[5]-o.y,o};_e.pointToGLWindowCoordinates=function(e,t,n,o){if(!u(e))throw new T("modelViewProjectionMatrix is required.");if(!u(t))throw new T("viewportTransformation is required.");if(!u(n))throw new T("point is required.");u(o)||(o=new U);const i=Op;return M.multiplyByVector(e,W.fromElements(n.x,n.y,n.z,1,i),i),W.multiplyByScalar(i,1/i.w,i),M.multiplyByVector(t,i,i),U.fromCartesian4(i,o)};const Sp=new l,xp=new l,Cp=new l;_e.rotationMatrixFromPositionVelocity=function(e,t,n,o){if(!u(e))throw new T("position is required.");if(!u(t))throw new T("velocity is required.");const i=(n??ae.default).geodeticSurfaceNormal(e,Sp);let a=l.cross(t,i,xp);l.equalsEpsilon(a,l.ZERO,A.EPSILON6)&&(a=l.clone(l.UNIT_X,a));const r=l.cross(a,t,Cp);return l.normalize(r,r),l.cross(t,r,a),l.negate(a,a),l.normalize(a,a),u(o)||(o=new P),o[0]=t.x,o[1]=t.y,o[2]=t.z,o[3]=a.x,o[4]=a.y,o[5]=a.z,o[6]=r.x,o[7]=r.y,o[8]=r.z,o};const Ff=new M(0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,1),Bf=new ne,Ka=new l,vp=new l,Rp=new P,Qa=new M,Uf=new M;_e.basisTo2D=function(e,t,n){if(!u(e))throw new T("projection is required.");if(!u(t))throw new T("matrix is required.");if(!u(n))throw new T("result is required.");const o=M.getTranslation(t,vp),i=e.ellipsoid;let a;if(l.equals(o,l.ZERO))a=l.clone(l.ZERO,Ka);else{const d=i.cartesianToCartographic(o,Bf);a=e.project(d,Ka),l.fromElements(a.z,a.x,a.y,a)}const r=_e.eastNorthUpToFixedFrame(o,i,Qa),s=M.inverseTransformation(r,Uf),c=M.getMatrix3(t,Rp),f=M.multiplyByMatrix3(s,c,n);return M.multiply(Ff,f,n),M.setTranslation(n,a,n),n};_e.ellipsoidTo2DModelMatrix=function(e,t,n){if(!u(e))throw new T("projection is required.");if(!u(t))throw new T("center is required.");if(!u(n))throw new T("result is required.");const o=e.ellipsoid,i=_e.eastNorthUpToFixedFrame(t,o,Qa),a=M.inverseTransformation(i,Uf),r=o.cartesianToCartographic(t,Bf),s=e.project(r,Ka);l.fromElements(s.z,s.x,s.y,s);const c=M.fromTranslation(s,Qa);return M.multiply(Ff,a,n),M.multiply(c,n,n),n};function fe(e,t,n,o){this.west=e??0,this.south=t??0,this.east=n??0,this.north=o??0}Object.defineProperties(fe.prototype,{width:{get:function(){return fe.computeWidth(this)}},height:{get:function(){return fe.computeHeight(this)}}});fe.packedLength=4;fe.pack=function(e,t,n){return h.typeOf.object("value",e),h.defined("array",t),n=n??0,t[n++]=e.west,t[n++]=e.south,t[n++]=e.east,t[n]=e.north,t};fe.unpack=function(e,t,n){return h.defined("array",e),t=t??0,u(n)||(n=new fe),n.west=e[t++],n.south=e[t++],n.east=e[t++],n.north=e[t],n};fe.computeWidth=function(e){h.typeOf.object("rectangle",e);let t=e.east;const n=e.west;return t<n&&(t+=A.TWO_PI),t-n};fe.computeHeight=function(e){return h.typeOf.object("rectangle",e),e.north-e.south};fe.fromDegrees=function(e,t,n,o,i){return e=A.toRadians(e??0),t=A.toRadians(t??0),n=A.toRadians(n??0),o=A.toRadians(o??0),u(i)?(i.west=e,i.south=t,i.east=n,i.north=o,i):new fe(e,t,n,o)};fe.fromRadians=function(e,t,n,o,i){return u(i)?(i.west=e??0,i.south=t??0,i.east=n??0,i.north=o??0,i):new fe(e,t,n,o)};fe.fromCartographicArray=function(e,t){h.defined("cartographics",e);let n=Number.MAX_VALUE,o=-Number.MAX_VALUE,i=Number.MAX_VALUE,a=-Number.MAX_VALUE,r=Number.MAX_VALUE,s=-Number.MAX_VALUE;for(let c=0,f=e.length;c<f;c++){const d=e[c];n=Math.min(n,d.longitude),o=Math.max(o,d.longitude),r=Math.min(r,d.latitude),s=Math.max(s,d.latitude);const m=d.longitude>=0?d.longitude:d.longitude+A.TWO_PI;i=Math.min(i,m),a=Math.max(a,m)}return o-n>a-i&&(n=i,o=a,o>A.PI&&(o=o-A.TWO_PI),n>A.PI&&(n=n-A.TWO_PI)),u(t)?(t.west=n,t.south=r,t.east=o,t.north=s,t):new fe(n,r,o,s)};fe.fromCartesianArray=function(e,t,n){h.defined("cartesians",e),t=t??ae.default;let o=Number.MAX_VALUE,i=-Number.MAX_VALUE,a=Number.MAX_VALUE,r=-Number.MAX_VALUE,s=Number.MAX_VALUE,c=-Number.MAX_VALUE;for(let f=0,d=e.length;f<d;f++){const m=t.cartesianToCartographic(e[f]);o=Math.min(o,m.longitude),i=Math.max(i,m.longitude),s=Math.min(s,m.latitude),c=Math.max(c,m.latitude);const p=m.longitude>=0?m.longitude:m.longitude+A.TWO_PI;a=Math.min(a,p),r=Math.max(r,p)}return i-o>r-a&&(o=a,i=r,i>A.PI&&(i=i-A.TWO_PI),o>A.PI&&(o=o-A.TWO_PI)),u(n)?(n.west=o,n.south=s,n.east=i,n.north=c,n):new fe(o,s,i,c)};const zp=new l,Ip=new l,Pp=new l,Mp=new l,Np=new l,Ja=new Array(5);for(let e=0;e<Ja.length;++e)Ja[e]=new l;fe.fromBoundingSphere=function(e,t,n){h.typeOf.object("boundingSphere",e);const o=e.center,i=e.radius;if(u(t)||(t=ae.default),u(n)||(n=new fe),l.equals(o,l.ZERO))return fe.clone(fe.MAX_VALUE,n),n;const a=_e.eastNorthUpToFixedFrame(o,t,zp),r=M.multiplyByPointAsVector(a,l.UNIT_X,Ip);l.normalize(r,r);const s=M.multiplyByPointAsVector(a,l.UNIT_Y,Pp);l.normalize(s,s),l.multiplyByScalar(s,i,s),l.multiplyByScalar(r,i,r);const c=l.negate(s,Np),f=l.negate(r,Mp),d=Ja;let m=d[0];return l.add(o,s,m),m=d[1],l.add(o,f,m),m=d[2],l.add(o,c,m),m=d[3],l.add(o,r,m),d[4]=o,fe.fromCartesianArray(d,t,n)};fe.clone=function(e,t){if(u(e))return u(t)?(t.west=e.west,t.south=e.south,t.east=e.east,t.north=e.north,t):new fe(e.west,e.south,e.east,e.north)};fe.equalsEpsilon=function(e,t,n){return n=n??0,e===t||u(e)&&u(t)&&Math.abs(e.west-t.west)<=n&&Math.abs(e.south-t.south)<=n&&Math.abs(e.east-t.east)<=n&&Math.abs(e.north-t.north)<=n};fe.prototype.clone=function(e){return fe.clone(this,e)};fe.prototype.equals=function(e){return fe.equals(this,e)};fe.equals=function(e,t){return e===t||u(e)&&u(t)&&e.west===t.west&&e.south===t.south&&e.east===t.east&&e.north===t.north};fe.prototype.equalsEpsilon=function(e,t){return fe.equalsEpsilon(this,e,t)};fe._validate=function(e){h.typeOf.object("rectangle",e);const t=e.north;h.typeOf.number.greaterThanOrEquals("north",t,-A.PI_OVER_TWO),h.typeOf.number.lessThanOrEquals("north",t,A.PI_OVER_TWO);const n=e.south;h.typeOf.number.greaterThanOrEquals("south",n,-A.PI_OVER_TWO),h.typeOf.number.lessThanOrEquals("south",n,A.PI_OVER_TWO);const o=e.west;h.typeOf.number.greaterThanOrEquals("west",o,-Math.PI),h.typeOf.number.lessThanOrEquals("west",o,Math.PI);const i=e.east;h.typeOf.number.greaterThanOrEquals("east",i,-Math.PI),h.typeOf.number.lessThanOrEquals("east",i,Math.PI)};fe.southwest=function(e,t){return h.typeOf.object("rectangle",e),u(t)?(t.longitude=e.west,t.latitude=e.south,t.height=0,t):new ne(e.west,e.south)};fe.northwest=function(e,t){return h.typeOf.object("rectangle",e),u(t)?(t.longitude=e.west,t.latitude=e.north,t.height=0,t):new ne(e.west,e.north)};fe.northeast=function(e,t){return h.typeOf.object("rectangle",e),u(t)?(t.longitude=e.east,t.latitude=e.north,t.height=0,t):new ne(e.east,e.north)};fe.southeast=function(e,t){return h.typeOf.object("rectangle",e),u(t)?(t.longitude=e.east,t.latitude=e.south,t.height=0,t):new ne(e.east,e.south)};fe.center=function(e,t){h.typeOf.object("rectangle",e);let n=e.east;const o=e.west;n<o&&(n+=A.TWO_PI);const i=A.negativePiToPi((o+n)*.5),a=(e.south+e.north)*.5;return u(t)?(t.longitude=i,t.latitude=a,t.height=0,t):new ne(i,a)};fe.intersection=function(e,t,n){h.typeOf.object("rectangle",e),h.typeOf.object("otherRectangle",t);let o=e.east,i=e.west,a=t.east,r=t.west;o<i&&a>0?o+=A.TWO_PI:a<r&&o>0&&(a+=A.TWO_PI),o<i&&r<0?r+=A.TWO_PI:a<r&&i<0&&(i+=A.TWO_PI);const s=A.negativePiToPi(Math.max(i,r)),c=A.negativePiToPi(Math.min(o,a));if((e.west<e.east||t.west<t.east)&&c<=s)return;const f=Math.max(e.south,t.south),d=Math.min(e.north,t.north);if(!(f>=d))return u(n)?(n.west=s,n.south=f,n.east=c,n.north=d,n):new fe(s,f,c,d)};fe.simpleIntersection=function(e,t,n){h.typeOf.object("rectangle",e),h.typeOf.object("otherRectangle",t);const o=Math.max(e.west,t.west),i=Math.max(e.south,t.south),a=Math.min(e.east,t.east),r=Math.min(e.north,t.north);if(!(i>=r||o>=a))return u(n)?(n.west=o,n.south=i,n.east=a,n.north=r,n):new fe(o,i,a,r)};fe.union=function(e,t,n){h.typeOf.object("rectangle",e),h.typeOf.object("otherRectangle",t),u(n)||(n=new fe);let o=e.east,i=e.west,a=t.east,r=t.west;o<i&&a>0?o+=A.TWO_PI:a<r&&o>0&&(a+=A.TWO_PI),o<i&&r<0?r+=A.TWO_PI:a<r&&i<0&&(i+=A.TWO_PI);const s=A.negativePiToPi(Math.min(i,r)),c=A.negativePiToPi(Math.max(o,a));return n.west=s,n.south=Math.min(e.south,t.south),n.east=c,n.north=Math.max(e.north,t.north),n};fe.expand=function(e,t,n){return h.typeOf.object("rectangle",e),h.typeOf.object("cartographic",t),u(n)||(n=new fe),n.west=Math.min(e.west,t.longitude),n.south=Math.min(e.south,t.latitude),n.east=Math.max(e.east,t.longitude),n.north=Math.max(e.north,t.latitude),n};fe.contains=function(e,t){h.typeOf.object("rectangle",e),h.typeOf.object("cartographic",t);let n=t.longitude;const o=t.latitude,i=e.west;let a=e.east;return a<i&&(a+=A.TWO_PI,n<0&&(n+=A.TWO_PI)),(n>i||A.equalsEpsilon(n,i,A.EPSILON14))&&(n<a||A.equalsEpsilon(n,a,A.EPSILON14))&&o>=e.south&&o<=e.north};const Dp=new ne;fe.subsample=function(e,t,n,o){h.typeOf.object("rectangle",e),t=t??ae.default,n=n??0,u(o)||(o=[]);let i=0;const a=e.north,r=e.south,s=e.east,c=e.west,f=Dp;f.height=n,f.longitude=c,f.latitude=a,o[i]=t.cartographicToCartesian(f,o[i]),i++,f.longitude=s,o[i]=t.cartographicToCartesian(f,o[i]),i++,f.latitude=r,o[i]=t.cartographicToCartesian(f,o[i]),i++,f.longitude=c,o[i]=t.cartographicToCartesian(f,o[i]),i++,a<0?f.latitude=a:r>0?f.latitude=r:f.latitude=0;for(let d=1;d<8;++d)f.longitude=-Math.PI+d*A.PI_OVER_TWO,fe.contains(e,f)&&(o[i]=t.cartographicToCartesian(f,o[i]),i++);return f.latitude===0&&(f.longitude=c,o[i]=t.cartographicToCartesian(f,o[i]),i++,f.longitude=s,o[i]=t.cartographicToCartesian(f,o[i]),i++),o.length=i,o};fe.subsection=function(e,t,n,o,i,a){if(h.typeOf.object("rectangle",e),h.typeOf.number.greaterThanOrEquals("westLerp",t,0),h.typeOf.number.lessThanOrEquals("westLerp",t,1),h.typeOf.number.greaterThanOrEquals("southLerp",n,0),h.typeOf.number.lessThanOrEquals("southLerp",n,1),h.typeOf.number.greaterThanOrEquals("eastLerp",o,0),h.typeOf.number.lessThanOrEquals("eastLerp",o,1),h.typeOf.number.greaterThanOrEquals("northLerp",i,0),h.typeOf.number.lessThanOrEquals("northLerp",i,1),h.typeOf.number.lessThanOrEquals("westLerp",t,o),h.typeOf.number.lessThanOrEquals("southLerp",n,i),u(a)||(a=new fe),e.west<=e.east){const s=e.east-e.west;a.west=e.west+t*s,a.east=e.west+o*s}else{const s=A.TWO_PI+e.east-e.west;a.west=A.negativePiToPi(e.west+t*s),a.east=A.negativePiToPi(e.west+o*s)}const r=e.north-e.south;return a.south=e.south+n*r,a.north=e.south+i*r,t===1&&(a.west=e.east),o===1&&(a.east=e.east),n===1&&(a.south=e.north),i===1&&(a.north=e.north),a};fe.MAX_VALUE=Object.freeze(new fe(-Math.PI,-A.PI_OVER_TWO,Math.PI,A.PI_OVER_TWO));function Q(e,t){this.center=l.clone(e??l.ZERO),this.radius=t??0}const xs=new l,Cs=new l,vs=new l,Rs=new l,zs=new l,Is=new l,Ps=new l,st=new l,Ms=new l,Ns=new l,Ds=new l,Ls=new l,Lp=4/3*A.PI;Q.fromPoints=function(e,t){if(u(t)||(t=new Q),!u(e)||e.length===0)return t.center=l.clone(l.ZERO,t.center),t.radius=0,t;const n=l.clone(e[0],Ps),o=l.clone(n,xs),i=l.clone(n,Cs),a=l.clone(n,vs),r=l.clone(n,Rs),s=l.clone(n,zs),c=l.clone(n,Is),f=e.length;let d;for(d=1;d<f;d++){l.clone(e[d],n);const D=n.x,B=n.y,L=n.z;D<o.x&&l.clone(n,o),D>r.x&&l.clone(n,r),B<i.y&&l.clone(n,i),B>s.y&&l.clone(n,s),L<a.z&&l.clone(n,a),L>c.z&&l.clone(n,c)}const m=l.magnitudeSquared(l.subtract(r,o,st)),p=l.magnitudeSquared(l.subtract(s,i,st)),_=l.magnitudeSquared(l.subtract(c,a,st));let g=o,b=r,E=m;p>E&&(E=p,g=i,b=s),_>E&&(E=_,g=a,b=c);const v=Ms;v.x=(g.x+b.x)*.5,v.y=(g.y+b.y)*.5,v.z=(g.z+b.z)*.5;let C=l.magnitudeSquared(l.subtract(b,v,st)),x=Math.sqrt(C);const R=Ns;R.x=o.x,R.y=i.y,R.z=a.z;const N=Ds;N.x=r.x,N.y=s.y,N.z=c.z;const F=l.midpoint(R,N,Ls);let q=0;for(d=0;d<f;d++){l.clone(e[d],n);const D=l.magnitude(l.subtract(n,F,st));D>q&&(q=D);const B=l.magnitudeSquared(l.subtract(n,v,st));if(B>C){const L=Math.sqrt(B);x=(x+L)*.5,C=x*x;const G=L-x;v.x=(x*v.x+G*n.x)/L,v.y=(x*v.y+G*n.y)/L,v.z=(x*v.z+G*n.z)/L}}return x<q?(l.clone(v,t.center),t.radius=x):(l.clone(F,t.center),t.radius=q),t};const zc=new In,Fp=new l,Bp=new l,fa=new ne,ua=new ne;Q.fromRectangle2D=function(e,t,n){return Q.fromRectangleWithHeights2D(e,t,0,0,n)};Q.fromRectangleWithHeights2D=function(e,t,n,o,i){if(u(i)||(i=new Q),!u(e))return i.center=l.clone(l.ZERO,i.center),i.radius=0,i;zc._ellipsoid=ae.default,t=t??zc,fe.southwest(e,fa),fa.height=n,fe.northeast(e,ua),ua.height=o;const a=t.project(fa,Fp),r=t.project(ua,Bp),s=r.x-a.x,c=r.y-a.y,f=r.z-a.z;i.radius=Math.sqrt(s*s+c*c+f*f)*.5;const d=i.center;return d.x=a.x+s*.5,d.y=a.y+c*.5,d.z=a.z+f*.5,i};const Up=[];Q.fromRectangle3D=function(e,t,n,o){if(t=t??ae.default,n=n??0,u(o)||(o=new Q),!u(e))return o.center=l.clone(l.ZERO,o.center),o.radius=0,o;const i=fe.subsample(e,t,n,Up);return Q.fromPoints(i,o)};Q.fromVertices=function(e,t,n,o){if(u(o)||(o=new Q),!u(e)||e.length===0)return o.center=l.clone(l.ZERO,o.center),o.radius=0,o;t=t??l.ZERO,n=n??3,h.typeOf.number.greaterThanOrEquals("stride",n,3);const i=Ps;i.x=e[0]+t.x,i.y=e[1]+t.y,i.z=e[2]+t.z;const a=l.clone(i,xs),r=l.clone(i,Cs),s=l.clone(i,vs),c=l.clone(i,Rs),f=l.clone(i,zs),d=l.clone(i,Is),m=e.length;let p;for(p=0;p<m;p+=n){const L=e[p]+t.x,G=e[p+1]+t.y,Y=e[p+2]+t.z;i.x=L,i.y=G,i.z=Y,L<a.x&&l.clone(i,a),L>c.x&&l.clone(i,c),G<r.y&&l.clone(i,r),G>f.y&&l.clone(i,f),Y<s.z&&l.clone(i,s),Y>d.z&&l.clone(i,d)}const _=l.magnitudeSquared(l.subtract(c,a,st)),g=l.magnitudeSquared(l.subtract(f,r,st)),b=l.magnitudeSquared(l.subtract(d,s,st));let E=a,v=c,C=_;g>C&&(C=g,E=r,v=f),b>C&&(C=b,E=s,v=d);const x=Ms;x.x=(E.x+v.x)*.5,x.y=(E.y+v.y)*.5,x.z=(E.z+v.z)*.5;let R=l.magnitudeSquared(l.subtract(v,x,st)),N=Math.sqrt(R);const F=Ns;F.x=a.x,F.y=r.y,F.z=s.z;const q=Ds;q.x=c.x,q.y=f.y,q.z=d.z;const D=l.midpoint(F,q,Ls);let B=0;for(p=0;p<m;p+=n){i.x=e[p]+t.x,i.y=e[p+1]+t.y,i.z=e[p+2]+t.z;const L=l.magnitude(l.subtract(i,D,st));L>B&&(B=L);const G=l.magnitudeSquared(l.subtract(i,x,st));if(G>R){const Y=Math.sqrt(G);N=(N+Y)*.5,R=N*N;const y=Y-N;x.x=(N*x.x+y*i.x)/Y,x.y=(N*x.y+y*i.y)/Y,x.z=(N*x.z+y*i.z)/Y}}return N<B?(l.clone(x,o.center),o.radius=N):(l.clone(D,o.center),o.radius=B),o};Q.fromEncodedCartesianVertices=function(e,t,n){if(u(n)||(n=new Q),!u(e)||!u(t)||e.length!==t.length||e.length===0)return n.center=l.clone(l.ZERO,n.center),n.radius=0,n;const o=Ps;o.x=e[0]+t[0],o.y=e[1]+t[1],o.z=e[2]+t[2];const i=l.clone(o,xs),a=l.clone(o,Cs),r=l.clone(o,vs),s=l.clone(o,Rs),c=l.clone(o,zs),f=l.clone(o,Is),d=e.length;let m;for(m=0;m<d;m+=3){const B=e[m]+t[m],L=e[m+1]+t[m+1],G=e[m+2]+t[m+2];o.x=B,o.y=L,o.z=G,B<i.x&&l.clone(o,i),B>s.x&&l.clone(o,s),L<a.y&&l.clone(o,a),L>c.y&&l.clone(o,c),G<r.z&&l.clone(o,r),G>f.z&&l.clone(o,f)}const p=l.magnitudeSquared(l.subtract(s,i,st)),_=l.magnitudeSquared(l.subtract(c,a,st)),g=l.magnitudeSquared(l.subtract(f,r,st));let b=i,E=s,v=p;_>v&&(v=_,b=a,E=c),g>v&&(v=g,b=r,E=f);const C=Ms;C.x=(b.x+E.x)*.5,C.y=(b.y+E.y)*.5,C.z=(b.z+E.z)*.5;let x=l.magnitudeSquared(l.subtract(E,C,st)),R=Math.sqrt(x);const N=Ns;N.x=i.x,N.y=a.y,N.z=r.z;const F=Ds;F.x=s.x,F.y=c.y,F.z=f.z;const q=l.midpoint(N,F,Ls);let D=0;for(m=0;m<d;m+=3){o.x=e[m]+t[m],o.y=e[m+1]+t[m+1],o.z=e[m+2]+t[m+2];const B=l.magnitude(l.subtract(o,q,st));B>D&&(D=B);const L=l.magnitudeSquared(l.subtract(o,C,st));if(L>x){const G=Math.sqrt(L);R=(R+G)*.5,x=R*R;const Y=G-R;C.x=(R*C.x+Y*o.x)/G,C.y=(R*C.y+Y*o.y)/G,C.z=(R*C.z+Y*o.z)/G}}return R<D?(l.clone(C,n.center),n.radius=R):(l.clone(q,n.center),n.radius=D),n};Q.fromCornerPoints=function(e,t,n){h.typeOf.object("corner",e),h.typeOf.object("oppositeCorner",t),u(n)||(n=new Q);const o=l.midpoint(e,t,n.center);return n.radius=l.distance(o,t),n};Q.fromEllipsoid=function(e,t){return h.typeOf.object("ellipsoid",e),u(t)||(t=new Q),l.clone(l.ZERO,t.center),t.radius=e.maximumRadius,t};const Gp=new l;Q.fromBoundingSpheres=function(e,t){if(u(t)||(t=new Q),!u(e)||e.length===0)return t.center=l.clone(l.ZERO,t.center),t.radius=0,t;const n=e.length;if(n===1)return Q.clone(e[0],t);if(n===2)return Q.union(e[0],e[1],t);const o=[];let i;for(i=0;i<n;i++)o.push(e[i].center);t=Q.fromPoints(o,t);const a=t.center;let r=t.radius;for(i=0;i<n;i++){const s=e[i];r=Math.max(r,l.distance(a,s.center,Gp)+s.radius)}return t.radius=r,t};const qp=new l,kp=new l,Vp=new l;Q.fromOrientedBoundingBox=function(e,t){h.defined("orientedBoundingBox",e),u(t)||(t=new Q);const n=e.halfAxes,o=P.getColumn(n,0,qp),i=P.getColumn(n,1,kp),a=P.getColumn(n,2,Vp);return l.add(o,i,o),l.add(o,a,o),t.center=l.clone(e.center,t.center),t.radius=l.magnitude(o),t};const jp=new l,Hp=new l;Q.fromTransformation=function(e,t){h.typeOf.object("transformation",e),u(t)||(t=new Q);const n=M.getTranslation(e,jp),o=M.getScale(e,Hp),i=.5*l.magnitude(o);return t.center=l.clone(n,t.center),t.radius=i,t};Q.clone=function(e,t){if(u(e))return u(t)?(t.center=l.clone(e.center,t.center),t.radius=e.radius,t):new Q(e.center,e.radius)};Q.packedLength=4;Q.pack=function(e,t,n){h.typeOf.object("value",e),h.defined("array",t),n=n??0;const o=e.center;return t[n++]=o.x,t[n++]=o.y,t[n++]=o.z,t[n]=e.radius,t};Q.unpack=function(e,t,n){h.defined("array",e),t=t??0,u(n)||(n=new Q);const o=n.center;return o.x=e[t++],o.y=e[t++],o.z=e[t++],n.radius=e[t],n};const Wp=new l,Yp=new l;Q.union=function(e,t,n){h.typeOf.object("left",e),h.typeOf.object("right",t),u(n)||(n=new Q);const o=e.center,i=e.radius,a=t.center,r=t.radius,s=l.subtract(a,o,Wp),c=l.magnitude(s);if(i>=c+r)return e.clone(n),n;if(r>=c+i)return t.clone(n),n;const f=(i+c+r)*.5,d=l.multiplyByScalar(s,(-i+f)/c,Yp);return l.add(d,o,d),l.clone(d,n.center),n.radius=f,n};const Xp=new l;Q.expand=function(e,t,n){h.typeOf.object("sphere",e),h.typeOf.object("point",t),n=Q.clone(e,n);const o=l.magnitude(l.subtract(t,n.center,Xp));return o>n.radius&&(n.radius=o),n};Q.intersectPlane=function(e,t){h.typeOf.object("sphere",e),h.typeOf.object("plane",t);const n=e.center,o=e.radius,i=t.normal,a=l.dot(i,n)+t.distance;return a<-o?Ke.OUTSIDE:a<o?Ke.INTERSECTING:Ke.INSIDE};Q.transform=function(e,t,n){return h.typeOf.object("sphere",e),h.typeOf.object("transform",t),u(n)||(n=new Q),n.center=M.multiplyByPoint(t,e.center,n.center),n.radius=M.getMaximumScale(t)*e.radius,n};const $p=new l;Q.distanceSquaredTo=function(e,t){h.typeOf.object("sphere",e),h.typeOf.object("cartesian",t);const n=l.subtract(e.center,t,$p),o=l.magnitude(n)-e.radius;return o<=0?0:o*o};Q.transformWithoutScale=function(e,t,n){return h.typeOf.object("sphere",e),h.typeOf.object("transform",t),u(n)||(n=new Q),n.center=M.multiplyByPoint(t,e.center,n.center),n.radius=e.radius,n};const Zp=new l;Q.computePlaneDistances=function(e,t,n,o){h.typeOf.object("sphere",e),h.typeOf.object("position",t),h.typeOf.object("direction",n),u(o)||(o=new oo);const i=l.subtract(e.center,t,Zp),a=l.dot(n,i);return o.start=a-e.radius,o.stop=a+e.radius,o};const Ic=new l,Kp=new l,Qp=new l,Jp=new l,e0=new l,t0=new ne,Gf=new Array(8);for(let e=0;e<8;++e)Gf[e]=new l;const Pc=new In;Q.projectTo2D=function(e,t,n){h.typeOf.object("sphere",e),Pc._ellipsoid=ae.default,t=t??Pc;const o=t.ellipsoid;let i=e.center;const a=e.radius;let r;l.equals(i,l.ZERO)?r=l.clone(l.UNIT_X,Ic):r=o.geodeticSurfaceNormal(i,Ic);const s=l.cross(l.UNIT_Z,r,Kp);l.normalize(s,s);const c=l.cross(r,s,Qp);l.normalize(c,c),l.multiplyByScalar(r,a,r),l.multiplyByScalar(c,a,c),l.multiplyByScalar(s,a,s);const f=l.negate(c,e0),d=l.negate(s,Jp),m=Gf;let p=m[0];l.add(r,c,p),l.add(p,s,p),p=m[1],l.add(r,c,p),l.add(p,d,p),p=m[2],l.add(r,f,p),l.add(p,d,p),p=m[3],l.add(r,f,p),l.add(p,s,p),l.negate(r,r),p=m[4],l.add(r,c,p),l.add(p,s,p),p=m[5],l.add(r,c,p),l.add(p,d,p),p=m[6],l.add(r,f,p),l.add(p,d,p),p=m[7],l.add(r,f,p),l.add(p,s,p);const _=m.length;for(let v=0;v<_;++v){const C=m[v];l.add(i,C,C);const x=o.cartesianToCartographic(C,t0);t.project(x,C)}n=Q.fromPoints(m,n),i=n.center;const g=i.x,b=i.y,E=i.z;return i.x=E,i.y=g,i.z=b,n};Q.isOccluded=function(e,t){return h.typeOf.object("sphere",e),h.typeOf.object("occluder",t),!t.isBoundingSphereVisible(e)};Q.equals=function(e,t){return e===t||u(e)&&u(t)&&l.equals(e.center,t.center)&&e.radius===t.radius};Q.prototype.intersectPlane=function(e){return Q.intersectPlane(this,e)};Q.prototype.distanceSquaredTo=function(e){return Q.distanceSquaredTo(this,e)};Q.prototype.computePlaneDistances=function(e,t,n){return Q.computePlaneDistances(this,e,t,n)};Q.prototype.isOccluded=function(e){return Q.isOccluded(this,e)};Q.prototype.equals=function(e){return Q.equals(this,e)};Q.prototype.clone=function(e){return Q.clone(this,e)};Q.prototype.volume=function(){const e=this.radius;return Lp*e*e*e};function wt(e,t,n){this.minimum=l.clone(e??l.ZERO),this.maximum=l.clone(t??l.ZERO),u(n)?n=l.clone(n):n=l.midpoint(this.minimum,this.maximum,new l),this.center=n}wt.fromCorners=function(e,t,n){return h.defined("minimum",e),h.defined("maximum",t),u(n)||(n=new wt),n.minimum=l.clone(e,n.minimum),n.maximum=l.clone(t,n.maximum),n.center=l.midpoint(e,t,n.center),n};wt.fromPoints=function(e,t){if(u(t)||(t=new wt),!u(e)||e.length===0)return t.minimum=l.clone(l.ZERO,t.minimum),t.maximum=l.clone(l.ZERO,t.maximum),t.center=l.clone(l.ZERO,t.center),t;let n=e[0].x,o=e[0].y,i=e[0].z,a=e[0].x,r=e[0].y,s=e[0].z;const c=e.length;for(let m=1;m<c;m++){const p=e[m],_=p.x,g=p.y,b=p.z;n=Math.min(_,n),a=Math.max(_,a),o=Math.min(g,o),r=Math.max(g,r),i=Math.min(b,i),s=Math.max(b,s)}const f=t.minimum;f.x=n,f.y=o,f.z=i;const d=t.maximum;return d.x=a,d.y=r,d.z=s,t.center=l.midpoint(f,d,t.center),t};wt.clone=function(e,t){if(u(e))return u(t)?(t.minimum=l.clone(e.minimum,t.minimum),t.maximum=l.clone(e.maximum,t.maximum),t.center=l.clone(e.center,t.center),t):new wt(e.minimum,e.maximum,e.center)};wt.equals=function(e,t){return e===t||u(e)&&u(t)&&l.equals(e.center,t.center)&&l.equals(e.minimum,t.minimum)&&l.equals(e.maximum,t.maximum)};let Xi=new l;wt.intersectPlane=function(e,t){h.defined("box",e),h.defined("plane",t),Xi=l.subtract(e.maximum,e.minimum,Xi);const n=l.multiplyByScalar(Xi,.5,Xi),o=t.normal,i=n.x*Math.abs(o.x)+n.y*Math.abs(o.y)+n.z*Math.abs(o.z),a=l.dot(e.center,o)+t.distance;return a-i>0?Ke.INSIDE:a+i<0?Ke.OUTSIDE:Ke.INTERSECTING};wt.prototype.clone=function(e){return wt.clone(this,e)};wt.prototype.intersectPlane=function(e){return wt.intersectPlane(this,e)};wt.prototype.equals=function(e){return wt.equals(this,e)};const Jt={};Jt.computeDiscriminant=function(e,t,n){if(typeof e!="number")throw new T("a is a required number.");if(typeof t!="number")throw new T("b is a required number.");if(typeof n!="number")throw new T("c is a required number.");return t*t-4*e*n};function Mc(e,t,n){const o=e+t;return A.sign(e)!==A.sign(t)&&Math.abs(o/Math.max(Math.abs(e),Math.abs(t)))<n?0:o}Jt.computeRealRoots=function(e,t,n){if(typeof e!="number")throw new T("a is a required number.");if(typeof t!="number")throw new T("b is a required number.");if(typeof n!="number")throw new T("c is a required number.");let o;if(e===0)return t===0?[]:[-n/t];if(t===0){if(n===0)return[0,0];const c=Math.abs(n),f=Math.abs(e);if(c<f&&c/f<A.EPSILON14)return[0,0];if(c>f&&f/c<A.EPSILON14)return[];if(o=-n/e,o<0)return[];const d=Math.sqrt(o);return[-d,d]}else if(n===0)return o=-t/e,o<0?[o,0]:[0,o];const i=t*t,a=4*e*n,r=Mc(i,-a,A.EPSILON14);if(r<0)return[];const s=-.5*Mc(t,A.sign(t)*Math.sqrt(r),A.EPSILON14);return t>0?[s/e,n/s]:[n/s,s/e]};const xi={};xi.computeDiscriminant=function(e,t,n,o){if(typeof e!="number")throw new T("a is a required number.");if(typeof t!="number")throw new T("b is a required number.");if(typeof n!="number")throw new T("c is a required number.");if(typeof o!="number")throw new T("d is a required number.");const i=e*e,a=t*t,r=n*n,s=o*o;return 18*e*t*n*o+a*r-27*i*s-4*(e*r*n+a*t*o)};function ha(e,t,n,o){const i=e,a=t/3,r=n/3,s=o,c=i*r,f=a*s,d=a*a,m=r*r,p=i*r-d,_=i*s-a*r,g=a*s-m,b=4*p*g-_*_;let E,v;if(b<0){let $,te,se;d*f>=c*m?($=i,te=p,se=-2*a*p+i*_):($=s,te=g,se=-s*_+2*r*g);const le=-(se<0?-1:1)*Math.abs($)*Math.sqrt(-b);v=-se+le;const pe=v/2,De=pe<0?-Math.pow(-pe,1/3):Math.pow(pe,1/3),Ze=v===le?-De:-te/De;return E=te<=0?De+Ze:-se/(De*De+Ze*Ze+te),d*f>=c*m?[(E-a)/i]:[-s/(E+r)]}const C=p,x=-2*a*p+i*_,R=g,N=-s*_+2*r*g,F=Math.sqrt(b),q=Math.sqrt(3)/2;let D=Math.abs(Math.atan2(i*F,-x)/3);E=2*Math.sqrt(-C);let B=Math.cos(D);v=E*B;let L=E*(-B/2-q*Math.sin(D));const G=v+L>2*a?v-a:L-a,Y=i,y=G/Y;D=Math.abs(Math.atan2(s*F,-N)/3),E=2*Math.sqrt(-R),B=Math.cos(D),v=E*B,L=E*(-B/2-q*Math.sin(D));const w=-s,S=v+L<2*r?v+r:L+r,I=w/S,k=Y*S,V=-G*S-Y*w,H=G*w,j=(r*V-a*H)/(-a*V+r*k);return y<=j?y<=I?j<=I?[y,j,I]:[y,I,j]:[I,y,j]:y<=I?[j,y,I]:j<=I?[j,I,y]:[I,j,y]}xi.computeRealRoots=function(e,t,n,o){if(typeof e!="number")throw new T("a is a required number.");if(typeof t!="number")throw new T("b is a required number.");if(typeof n!="number")throw new T("c is a required number.");if(typeof o!="number")throw new T("d is a required number.");let i,a;if(e===0)return Jt.computeRealRoots(t,n,o);if(t===0){if(n===0){if(o===0)return[0,0,0];a=-o/e;const r=a<0?-Math.pow(-a,1/3):Math.pow(a,1/3);return[r,r,r]}else if(o===0)return i=Jt.computeRealRoots(e,0,n),i.Length===0?[0]:[i[0],0,i[1]];return ha(e,0,n,o)}else{if(n===0)return o===0?(a=-t/e,a<0?[a,0,0]:[0,0,a]):ha(e,t,0,o);if(o===0)return i=Jt.computeRealRoots(e,t,n),i.length===0?[0]:i[1]<=0?[i[0],i[1],0]:i[0]>=0?[0,i[0],i[1]]:[i[0],0,i[1]]}return ha(e,t,n,o)};const Fs={};Fs.computeDiscriminant=function(e,t,n,o,i){if(typeof e!="number")throw new T("a is a required number.");if(typeof t!="number")throw new T("b is a required number.");if(typeof n!="number")throw new T("c is a required number.");if(typeof o!="number")throw new T("d is a required number.");if(typeof i!="number")throw new T("e is a required number.");const a=e*e,r=a*e,s=t*t,c=s*t,f=n*n,d=f*n,m=o*o,p=m*o,_=i*i,g=_*i;return s*f*m-4*c*p-4*e*d*m+18*e*t*n*p-27*a*m*m+256*r*g+i*(18*c*n*o-4*s*d+16*e*f*f-80*e*t*f*o-6*e*s*m+144*a*n*m)+_*(144*e*s*n-27*s*s-128*a*f-192*a*t*o)};function Yt(e,t,n,o){const i=e*e,a=t-3*i/8,r=n-t*e/2+i*e/8,s=o-n*e/4+t*i/16-3*i*i/256,c=xi.computeRealRoots(1,2*a,a*a-4*s,-r*r);if(c.length>0){const f=-e/4,d=c[c.length-1];if(Math.abs(d)<A.EPSILON14){const m=Jt.computeRealRoots(1,a,s);if(m.length===2){const p=m[0],_=m[1];let g;if(p>=0&&_>=0){const b=Math.sqrt(p),E=Math.sqrt(_);return[f-E,f-b,f+b,f+E]}else{if(p>=0&&_<0)return g=Math.sqrt(p),[f-g,f+g];if(p<0&&_>=0)return g=Math.sqrt(_),[f-g,f+g]}}return[]}else if(d>0){const m=Math.sqrt(d),p=(a+d-r/m)/2,_=(a+d+r/m)/2,g=Jt.computeRealRoots(1,m,p),b=Jt.computeRealRoots(1,-m,_);return g.length!==0?(g[0]+=f,g[1]+=f,b.length!==0?(b[0]+=f,b[1]+=f,g[1]<=b[0]?[g[0],g[1],b[0],b[1]]:b[1]<=g[0]?[b[0],b[1],g[0],g[1]]:g[0]>=b[0]&&g[1]<=b[1]?[b[0],g[0],g[1],b[1]]:b[0]>=g[0]&&b[1]<=g[1]?[g[0],b[0],b[1],g[1]]:g[0]>b[0]&&g[0]<b[1]?[b[0],g[0],b[1],g[1]]:[g[0],b[0],g[1],b[1]]):g):b.length!==0?(b[0]+=f,b[1]+=f,b):[]}}return[]}function $o(e,t,n,o){const i=n*n,a=t*t,r=e*e,s=-2*t,c=n*e+a-4*o,f=r*o-n*t*e+i,d=xi.computeRealRoots(1,s,c,f);if(d.length>0){const m=d[0],p=t-m,_=p*p,g=e/2,b=p/2,E=_-4*o,v=_+4*Math.abs(o),C=r-4*m,x=r+4*Math.abs(m);let R,N;if(m<0||E*x<C*v){const Y=Math.sqrt(C);R=Y/2,N=Y===0?0:(e*b-n)/Y}else{const Y=Math.sqrt(E);R=Y===0?0:(e*b-n)/Y,N=Y/2}let F,q;g===0&&R===0?(F=0,q=0):A.sign(g)===A.sign(R)?(F=g+R,q=m/F):(q=g-R,F=m/q);let D,B;b===0&&N===0?(D=0,B=0):A.sign(b)===A.sign(N)?(D=b+N,B=o/D):(B=b-N,D=o/B);const L=Jt.computeRealRoots(1,F,D),G=Jt.computeRealRoots(1,q,B);if(L.length!==0)return G.length!==0?L[1]<=G[0]?[L[0],L[1],G[0],G[1]]:G[1]<=L[0]?[G[0],G[1],L[0],L[1]]:L[0]>=G[0]&&L[1]<=G[1]?[G[0],L[0],L[1],G[1]]:G[0]>=L[0]&&G[1]<=L[1]?[L[0],G[0],G[1],L[1]]:L[0]>G[0]&&L[0]<G[1]?[G[0],L[0],G[1],L[1]]:[L[0],G[0],L[1],G[1]]:L;if(G.length!==0)return G}return[]}Fs.computeRealRoots=function(e,t,n,o,i){if(typeof e!="number")throw new T("a is a required number.");if(typeof t!="number")throw new T("b is a required number.");if(typeof n!="number")throw new T("c is a required number.");if(typeof o!="number")throw new T("d is a required number.");if(typeof i!="number")throw new T("e is a required number.");if(Math.abs(e)<A.EPSILON15)return xi.computeRealRoots(t,n,o,i);const a=t/e,r=n/e,s=o/e,c=i/e;let f=a<0?1:0;switch(f+=r<0?f+1:f,f+=s<0?f+1:f,f+=c<0?f+1:f,f){case 0:return Yt(a,r,s,c);case 1:return $o(a,r,s,c);case 2:return $o(a,r,s,c);case 3:return Yt(a,r,s,c);case 4:return Yt(a,r,s,c);case 5:return $o(a,r,s,c);case 6:return Yt(a,r,s,c);case 7:return Yt(a,r,s,c);case 8:return $o(a,r,s,c);case 9:return Yt(a,r,s,c);case 10:return Yt(a,r,s,c);case 11:return $o(a,r,s,c);case 12:return Yt(a,r,s,c);case 13:return Yt(a,r,s,c);case 14:return Yt(a,r,s,c);case 15:return Yt(a,r,s,c);default:return}};function Lo(e,t){t=l.clone(t??l.ZERO),l.equals(t,l.ZERO)||l.normalize(t,t),this.origin=l.clone(e??l.ZERO),this.direction=t}Lo.clone=function(e,t){if(u(e))return u(t)?(t.origin=l.clone(e.origin),t.direction=l.clone(e.direction),t):new Lo(e.origin,e.direction)};Lo.getPoint=function(e,t,n){return h.typeOf.object("ray",e),h.typeOf.number("t",t),u(n)||(n=new l),n=l.multiplyByScalar(e.direction,t,n),l.add(e.origin,n,n)};const Ce={};Ce.rayPlane=function(e,t,n){if(!u(e))throw new T("ray is required.");if(!u(t))throw new T("plane is required.");u(n)||(n=new l);const o=e.origin,i=e.direction,a=t.normal,r=l.dot(a,i);if(Math.abs(r)<A.EPSILON15)return;const s=(-t.distance-l.dot(a,o))/r;if(!(s<0))return n=l.multiplyByScalar(i,s,n),l.add(o,n,n)};const n0=new l,o0=new l,qf=new l,Nc=new l,Dc=new l;Ce.rayTriangleParametric=function(e,t,n,o,i){if(!u(e))throw new T("ray is required.");if(!u(t))throw new T("p0 is required.");if(!u(n))throw new T("p1 is required.");if(!u(o))throw new T("p2 is required.");i=i??!1;const a=e.origin,r=e.direction,s=l.subtract(n,t,n0),c=l.subtract(o,t,o0),f=l.cross(r,c,qf),d=l.dot(s,f);let m,p,_,g,b;if(i){if(d<A.EPSILON6||(m=l.subtract(a,t,Nc),_=l.dot(m,f),_<0||_>d)||(p=l.cross(m,s,Dc),g=l.dot(r,p),g<0||_+g>d))return;b=l.dot(c,p)/d}else{if(Math.abs(d)<A.EPSILON6)return;const E=1/d;if(m=l.subtract(a,t,Nc),_=l.dot(m,f)*E,_<0||_>1||(p=l.cross(m,s,Dc),g=l.dot(r,p)*E,g<0||_+g>1))return;b=l.dot(c,p)*E}return b};Ce.rayTriangle=function(e,t,n,o,i,a){const r=Ce.rayTriangleParametric(e,t,n,o,i);if(!(!u(r)||r<0))return u(a)||(a=new l),l.multiplyByScalar(e.direction,r,a),l.add(e.origin,a,a)};const i0=new Lo;Ce.lineSegmentTriangle=function(e,t,n,o,i,a,r){if(!u(e))throw new T("v0 is required.");if(!u(t))throw new T("v1 is required.");if(!u(n))throw new T("p0 is required.");if(!u(o))throw new T("p1 is required.");if(!u(i))throw new T("p2 is required.");const s=i0;l.clone(e,s.origin),l.subtract(t,e,s.direction),l.normalize(s.direction,s.direction);const c=Ce.rayTriangleParametric(s,n,o,i,a);if(!(!u(c)||c<0||c>l.distance(e,t)))return u(r)||(r=new l),l.multiplyByScalar(s.direction,c,r),l.add(s.origin,r,r)};function r0(e,t,n,o){const i=t*t-4*e*n;if(i<0)return;if(i>0){const r=1/(2*e),s=Math.sqrt(i),c=(-t+s)*r,f=(-t-s)*r;return c<f?(o.root0=c,o.root1=f):(o.root0=f,o.root1=c),o}const a=-t/(2*e);if(a!==0)return o.root0=o.root1=a,o}const a0={root0:0,root1:0};function kf(e,t,n){u(n)||(n=new oo);const o=e.origin,i=e.direction,a=t.center,r=t.radius*t.radius,s=l.subtract(o,a,qf),c=l.dot(i,i),f=2*l.dot(i,s),d=l.magnitudeSquared(s)-r,m=r0(c,f,d,a0);if(u(m))return n.start=m.root0,n.stop=m.root1,n}Ce.raySphere=function(e,t,n){if(!u(e))throw new T("ray is required.");if(!u(t))throw new T("sphere is required.");if(n=kf(e,t,n),!(!u(n)||n.stop<0))return n.start=Math.max(n.start,0),n};const s0=new Lo;Ce.lineSegmentSphere=function(e,t,n,o){if(!u(e))throw new T("p0 is required.");if(!u(t))throw new T("p1 is required.");if(!u(n))throw new T("sphere is required.");const i=s0;l.clone(e,i.origin);const a=l.subtract(t,e,i.direction),r=l.magnitude(a);if(l.normalize(a,a),o=kf(i,n,o),!(!u(o)||o.stop<0||o.start>r))return o.start=Math.max(o.start,0),o.stop=Math.min(o.stop,r),o};const c0=new l,l0=new l;Ce.rayEllipsoid=function(e,t){if(!u(e))throw new T("ray is required.");if(!u(t))throw new T("ellipsoid is required.");const n=t.oneOverRadii,o=l.multiplyComponents(n,e.origin,c0),i=l.multiplyComponents(n,e.direction,l0),a=l.magnitudeSquared(o),r=l.dot(o,i);let s,c,f,d,m;if(a>1){if(r>=0)return;const p=r*r;if(s=a-1,c=l.magnitudeSquared(i),f=c*s,p<f)return;if(p>f){d=r*r-f,m=-r+Math.sqrt(d);const g=m/c,b=s/m;return g<b?new oo(g,b):{start:b,stop:g}}const _=Math.sqrt(s/c);return new oo(_,_)}else if(a<1)return s=a-1,c=l.magnitudeSquared(i),f=c*s,d=r*r-f,m=-r+Math.sqrt(d),new oo(0,m/c);if(r<0)return c=l.magnitudeSquared(i),new oo(0,-r/c)};function $n(e,t,n){const o=e+t;return A.sign(e)!==A.sign(t)&&Math.abs(o/Math.max(Math.abs(e),Math.abs(t)))<n?0:o}Ce.quadraticVectorExpression=function(e,t,n,o,i){const a=o*o,r=i*i,s=(e[P.COLUMN1ROW1]-e[P.COLUMN2ROW2])*r,c=i*(o*$n(e[P.COLUMN1ROW0],e[P.COLUMN0ROW1],A.EPSILON15)+t.y),f=e[P.COLUMN0ROW0]*a+e[P.COLUMN2ROW2]*r+o*t.x+n,d=r*$n(e[P.COLUMN2ROW1],e[P.COLUMN1ROW2],A.EPSILON15),m=i*(o*$n(e[P.COLUMN2ROW0],e[P.COLUMN0ROW2])+t.z);let p;const _=[];if(m===0&&d===0){if(p=Jt.computeRealRoots(s,c,f),p.length===0)return _;const D=p[0],B=Math.sqrt(Math.max(1-D*D,0));if(_.push(new l(o,i*D,i*-B)),_.push(new l(o,i*D,i*B)),p.length===2){const L=p[1],G=Math.sqrt(Math.max(1-L*L,0));_.push(new l(o,i*L,i*-G)),_.push(new l(o,i*L,i*G))}return _}const g=m*m,b=d*d,E=s*s,v=m*d,C=E+b,x=2*(c*s+v),R=2*f*s+c*c-b+g,N=2*(f*c-v),F=f*f-g;if(C===0&&x===0&&R===0&&N===0)return _;p=Fs.computeRealRoots(C,x,R,N,F);const q=p.length;if(q===0)return _;for(let D=0;D<q;++D){const B=p[D],L=B*B,G=Math.max(1-L,0),Y=Math.sqrt(G);let y;A.sign(s)===A.sign(f)?y=$n(s*L+f,c*B,A.EPSILON12):A.sign(f)===A.sign(c*B)?y=$n(s*L,c*B+f,A.EPSILON12):y=$n(s*L+c*B,f,A.EPSILON12);const w=$n(d*B,m,A.EPSILON15),S=y*w;S<0?_.push(new l(o,i*B,i*Y)):S>0?_.push(new l(o,i*B,i*-Y)):Y!==0?(_.push(new l(o,i*B,i*-Y)),_.push(new l(o,i*B,i*Y)),++D):_.push(new l(o,i*B,i*Y))}return _};const da=new l,Lc=new l,Fc=new l,$i=new l,f0=new l,u0=new P,h0=new P,d0=new P,m0=new P,p0=new P,Bc=new P,Uc=new P,Gc=new l,_0=new l,g0=new ne;Ce.grazingAltitudeLocation=function(e,t){if(!u(e))throw new T("ray is required.");if(!u(t))throw new T("ellipsoid is required.");const n=e.origin,o=e.direction;if(!l.equals(n,l.ZERO)){const F=t.geodeticSurfaceNormal(n,da);if(l.dot(o,F)>=0)return n}const i=u(this.rayEllipsoid(e,t)),a=t.transformPositionToScaledSpace(o,da),r=l.normalize(a,a),s=l.mostOrthogonalAxis(a,$i),c=l.normalize(l.cross(s,r,Lc),Lc),f=l.normalize(l.cross(r,c,Fc),Fc),d=u0;d[0]=r.x,d[1]=r.y,d[2]=r.z,d[3]=c.x,d[4]=c.y,d[5]=c.z,d[6]=f.x,d[7]=f.y,d[8]=f.z;const m=P.transpose(d,h0),p=P.fromScale(t.radii,d0),_=P.fromScale(t.oneOverRadii,m0),g=p0;g[0]=0,g[1]=-o.z,g[2]=o.y,g[3]=o.z,g[4]=0,g[5]=-o.x,g[6]=-o.y,g[7]=o.x,g[8]=0;const b=P.multiply(P.multiply(m,_,Bc),g,Bc),E=P.multiply(P.multiply(b,p,Uc),d,Uc),v=P.multiplyByVector(b,n,f0),C=Ce.quadraticVectorExpression(E,l.negate(v,da),0,0,1);let x,R;const N=C.length;if(N>0){let F=l.clone(l.ZERO,_0),q=Number.NEGATIVE_INFINITY;for(let B=0;B<N;++B){x=P.multiplyByVector(p,P.multiplyByVector(d,C[B],Gc),Gc);const L=l.normalize(l.subtract(x,n,$i),$i),G=l.dot(L,o);G>q&&(q=G,F=l.clone(x,F))}const D=t.cartesianToCartographic(F,g0);return q=A.clamp(q,0,1),R=l.magnitude(l.subtract(F,n,$i))*Math.sqrt(1-q*q),R=i?-R:R,D.height=R,t.cartographicToCartesian(D,new l)}};const y0=new l;Ce.lineSegmentPlane=function(e,t,n,o){if(!u(e))throw new T("endPoint0 is required.");if(!u(t))throw new T("endPoint1 is required.");if(!u(n))throw new T("plane is required.");u(o)||(o=new l);const i=l.subtract(t,e,y0),a=n.normal,r=l.dot(a,i);if(Math.abs(r)<A.EPSILON6)return;const s=l.dot(a,e),c=-(n.distance+s)/r;if(!(c<0||c>1))return l.multiplyByScalar(i,c,o),l.add(e,o,o),o};Ce.trianglePlaneIntersection=function(e,t,n,o){if(!u(e)||!u(t)||!u(n)||!u(o))throw new T("p0, p1, p2, and plane are required.");const i=o.normal,a=o.distance,r=l.dot(i,e)+a<0,s=l.dot(i,t)+a<0,c=l.dot(i,n)+a<0;let f=0;f+=r?1:0,f+=s?1:0,f+=c?1:0;let d,m;if((f===1||f===2)&&(d=new l,m=new l),f===1){if(r)return Ce.lineSegmentPlane(e,t,o,d),Ce.lineSegmentPlane(e,n,o,m),{positions:[e,t,n,d,m],indices:[0,3,4,1,2,4,1,4,3]};if(s)return Ce.lineSegmentPlane(t,n,o,d),Ce.lineSegmentPlane(t,e,o,m),{positions:[e,t,n,d,m],indices:[1,3,4,2,0,4,2,4,3]};if(c)return Ce.lineSegmentPlane(n,e,o,d),Ce.lineSegmentPlane(n,t,o,m),{positions:[e,t,n,d,m],indices:[2,3,4,0,1,4,0,4,3]}}else if(f===2)if(r)if(s){if(!c)return Ce.lineSegmentPlane(e,n,o,d),Ce.lineSegmentPlane(t,n,o,m),{positions:[e,t,n,d,m],indices:[0,1,4,0,4,3,2,3,4]}}else return Ce.lineSegmentPlane(n,t,o,d),Ce.lineSegmentPlane(e,t,o,m),{positions:[e,t,n,d,m],indices:[2,0,4,2,4,3,1,3,4]};else return Ce.lineSegmentPlane(t,e,o,d),Ce.lineSegmentPlane(n,e,o,m),{positions:[e,t,n,d,m],indices:[1,2,4,1,4,3,0,3,4]}};function Te(e,t){if(h.typeOf.object("normal",e),!A.equalsEpsilon(l.magnitude(e),1,A.EPSILON6))throw new T("normal must be normalized.");h.typeOf.number("distance",t),this.normal=l.clone(e),this.distance=t}Te.fromPointNormal=function(e,t,n){if(h.typeOf.object("point",e),h.typeOf.object("normal",t),!A.equalsEpsilon(l.magnitude(t),1,A.EPSILON6))throw new T("normal must be normalized.");const o=-l.dot(t,e);return u(n)?(l.clone(t,n.normal),n.distance=o,n):new Te(t,o)};const b0=new l;Te.fromCartesian4=function(e,t){h.typeOf.object("coefficients",e);const n=l.fromCartesian4(e,b0),o=e.w;if(!A.equalsEpsilon(l.magnitude(n),1,A.EPSILON6))throw new T("normal must be normalized.");return u(t)?(l.clone(n,t.normal),t.distance=o,t):new Te(n,o)};Te.getPointDistance=function(e,t){return h.typeOf.object("plane",e),h.typeOf.object("point",t),l.dot(e.normal,t)+e.distance};const T0=new l;Te.projectPointOntoPlane=function(e,t,n){h.typeOf.object("plane",e),h.typeOf.object("point",t),u(n)||(n=new l);const o=Te.getPointDistance(e,t),i=l.multiplyByScalar(e.normal,o,T0);return l.subtract(t,i,n)};const E0=new M,w0=new W,A0=new l;Te.transform=function(e,t,n){h.typeOf.object("plane",e),h.typeOf.object("transform",t);const o=e.normal,i=e.distance,a=M.inverseTranspose(t,E0);let r=W.fromElements(o.x,o.y,o.z,i,w0);r=M.multiplyByVector(a,r,r);const s=l.fromCartesian4(r,A0);return r=W.divideByScalar(r,l.magnitude(s),r),Te.fromCartesian4(r,n)};Te.clone=function(e,t){return h.typeOf.object("plane",e),u(t)?(l.clone(e.normal,t.normal),t.distance=e.distance,t):new Te(e.normal,e.distance)};Te.equals=function(e,t){return h.typeOf.object("left",e),h.typeOf.object("right",t),e.distance===t.distance&&l.equals(e.normal,t.normal)};Te.ORIGIN_XY_PLANE=Object.freeze(new Te(l.UNIT_Z,0));Te.ORIGIN_YZ_PLANE=Object.freeze(new Te(l.UNIT_X,0));Te.ORIGIN_ZX_PLANE=Object.freeze(new Te(l.UNIT_Y,0));const ma=new W;function mn(e,t){if(h.defined("origin",e),t=t??ae.default,e=t.scaleToGeodeticSurface(e),!u(e))throw new T("origin must not be at the center of the ellipsoid.");const n=_e.eastNorthUpToFixedFrame(e,t);this._ellipsoid=t,this._origin=e,this._xAxis=l.fromCartesian4(M.getColumn(n,0,ma)),this._yAxis=l.fromCartesian4(M.getColumn(n,1,ma));const o=l.fromCartesian4(M.getColumn(n,2,ma));this._plane=Te.fromPointNormal(e,o)}Object.defineProperties(mn.prototype,{ellipsoid:{get:function(){return this._ellipsoid}},origin:{get:function(){return this._origin}},plane:{get:function(){return this._plane}},xAxis:{get:function(){return this._xAxis}},yAxis:{get:function(){return this._yAxis}},zAxis:{get:function(){return this._plane.normal}}});const O0=new wt;mn.fromPoints=function(e,t){h.defined("cartesians",e);const n=wt.fromPoints(e,O0);return new mn(n.center,t)};const Vf=new Lo,vr=new l;mn.prototype.projectPointOntoPlane=function(e,t){h.defined("cartesian",e);const n=Vf;n.origin=e,l.normalize(e,n.direction);let o=Ce.rayPlane(n,this._plane,vr);if(u(o)||(l.negate(n.direction,n.direction),o=Ce.rayPlane(n,this._plane,vr)),u(o)){const i=l.subtract(o,this._origin,o),a=l.dot(this._xAxis,i),r=l.dot(this._yAxis,i);return u(t)?(t.x=a,t.y=r,t):new U(a,r)}};mn.prototype.projectPointsOntoPlane=function(e,t){h.defined("cartesians",e),u(t)||(t=[]);let n=0;const o=e.length;for(let i=0;i<o;i++){const a=this.projectPointOntoPlane(e[i],t[n]);u(a)&&(t[n]=a,n++)}return t.length=n,t};mn.prototype.projectPointToNearestOnPlane=function(e,t){h.defined("cartesian",e),u(t)||(t=new U);const n=Vf;n.origin=e,l.clone(this._plane.normal,n.direction);let o=Ce.rayPlane(n,this._plane,vr);u(o)||(l.negate(n.direction,n.direction),o=Ce.rayPlane(n,this._plane,vr));const i=l.subtract(o,this._origin,o),a=l.dot(this._xAxis,i),r=l.dot(this._yAxis,i);return t.x=a,t.y=r,t};mn.prototype.projectPointsToNearestOnPlane=function(e,t){h.defined("cartesians",e),u(t)||(t=[]);const n=e.length;t.length=n;for(let o=0;o<n;o++)t[o]=this.projectPointToNearestOnPlane(e[o],t[o]);return t};const S0=new l;mn.prototype.projectPointOntoEllipsoid=function(e,t){h.defined("cartesian",e),u(t)||(t=new l);const n=this._ellipsoid,o=this._origin,i=this._xAxis,a=this._yAxis,r=S0;return l.multiplyByScalar(i,e.x,r),t=l.add(o,r,t),l.multiplyByScalar(a,e.y,r),l.add(t,r,t),n.scaleToGeocentricSurface(t,t),t};mn.prototype.projectPointsOntoEllipsoid=function(e,t){h.defined("cartesians",e);const n=e.length;u(t)?t.length=n:t=new Array(n);for(let o=0;o<n;++o)t[o]=this.projectPointOntoEllipsoid(e[o],t[o]);return t};function Ae(e,t){this.center=l.clone(e??l.ZERO),this.halfAxes=P.clone(t??P.ZERO)}Ae.packedLength=l.packedLength+P.packedLength;Ae.pack=function(e,t,n){return h.typeOf.object("value",e),h.defined("array",t),n=n??0,l.pack(e.center,t,n),P.pack(e.halfAxes,t,n+l.packedLength),t};Ae.unpack=function(e,t,n){return h.defined("array",e),t=t??0,u(n)||(n=new Ae),l.unpack(e,t,n.center),P.unpack(e,t+l.packedLength,n.halfAxes),n};const x0=new l,C0=new l,v0=new l,R0=new l,z0=new l,I0=new l,P0=new P,M0={unitary:new P,diagonal:new P};Ae.fromPoints=function(e,t){if(u(t)||(t=new Ae),!u(e)||e.length===0)return t.halfAxes=P.ZERO,t.center=l.ZERO,t;let n;const o=e.length,i=l.clone(e[0],x0);for(n=1;n<o;n++)l.add(i,e[n],i);const a=1/o;l.multiplyByScalar(i,a,i);let r=0,s=0,c=0,f=0,d=0,m=0,p;for(n=0;n<o;n++)p=l.subtract(e[n],i,C0),r+=p.x*p.x,s+=p.x*p.y,c+=p.x*p.z,f+=p.y*p.y,d+=p.y*p.z,m+=p.z*p.z;r*=a,s*=a,c*=a,f*=a,d*=a,m*=a;const _=P0;_[0]=r,_[1]=s,_[2]=c,_[3]=s,_[4]=f,_[5]=d,_[6]=c,_[7]=d,_[8]=m;const g=P.computeEigenDecomposition(_,M0),b=P.clone(g.unitary,t.halfAxes);let E=P.getColumn(b,0,R0),v=P.getColumn(b,1,z0),C=P.getColumn(b,2,I0),x=-Number.MAX_VALUE,R=-Number.MAX_VALUE,N=-Number.MAX_VALUE,F=Number.MAX_VALUE,q=Number.MAX_VALUE,D=Number.MAX_VALUE;for(n=0;n<o;n++)p=e[n],x=Math.max(l.dot(E,p),x),R=Math.max(l.dot(v,p),R),N=Math.max(l.dot(C,p),N),F=Math.min(l.dot(E,p),F),q=Math.min(l.dot(v,p),q),D=Math.min(l.dot(C,p),D);E=l.multiplyByScalar(E,.5*(F+x),E),v=l.multiplyByScalar(v,.5*(q+R),v),C=l.multiplyByScalar(C,.5*(D+N),C);const B=l.add(E,v,t.center);l.add(B,C,B);const L=v0;return L.x=x-F,L.y=R-q,L.z=N-D,l.multiplyByScalar(L,.5,L),P.multiplyByScale(t.halfAxes,L,t.halfAxes),t};const jf=new l,N0=new l;function qc(e,t,n,o,i,a,r,s,c,f,d){if(!u(i)||!u(a)||!u(r)||!u(s)||!u(c)||!u(f))throw new T("all extents (minimum/maximum X/Y/Z) are required.");u(d)||(d=new Ae);const m=d.halfAxes;P.setColumn(m,0,t,m),P.setColumn(m,1,n,m),P.setColumn(m,2,o,m);let p=jf;p.x=(i+a)/2,p.y=(r+s)/2,p.z=(c+f)/2;const _=N0;_.x=(a-i)/2,_.y=(s-r)/2,_.z=(f-c)/2;const g=d.center;return p=P.multiplyByVector(m,p,p),l.add(e,p,g),P.multiplyByScale(m,_,m),d}const kc=new ne,D0=new l,L0=new ne,F0=new ne,B0=new ne,U0=new ne,G0=new ne,q0=new l,Vc=new l,k0=new l,jc=new l,V0=new l,j0=new U,H0=new U,W0=new U,Y0=new U,X0=new U,$0=new l,Z0=new l,K0=new l,Q0=new l,J0=new U,e_=new l,t_=new l,n_=new l,o_=new Te(l.UNIT_X,0);Ae.fromRectangle=function(e,t,n,o,i){if(!u(e))throw new T("rectangle is required");if(e.width<0||e.width>A.TWO_PI)throw new T("Rectangle width must be between 0 and 2 * pi");if(e.height<0||e.height>A.PI)throw new T("Rectangle height must be between 0 and pi");if(u(o)&&!A.equalsEpsilon(o.radii.x,o.radii.y,A.EPSILON15))throw new T("Ellipsoid must be an ellipsoid of revolution (radii.x == radii.y)");t=t??0,n=n??0,o=o??ae.default;let a,r,s,c,f,d,m;if(e.width<=A.PI){const q=fe.center(e,kc),D=o.cartographicToCartesian(q,D0),B=new mn(D,o);m=B.plane;const L=q.longitude,G=e.south<0&&e.north>0?0:q.latitude,Y=ne.fromRadians(L,e.north,n,L0),y=ne.fromRadians(e.west,e.north,n,F0),w=ne.fromRadians(e.west,G,n,B0),S=ne.fromRadians(e.west,e.south,n,U0),I=ne.fromRadians(L,e.south,n,G0),k=o.cartographicToCartesian(Y,q0);let V=o.cartographicToCartesian(y,Vc);const H=o.cartographicToCartesian(w,k0);let j=o.cartographicToCartesian(S,jc);const $=o.cartographicToCartesian(I,V0),te=B.projectPointToNearestOnPlane(k,j0),se=B.projectPointToNearestOnPlane(V,H0),ce=B.projectPointToNearestOnPlane(H,W0),le=B.projectPointToNearestOnPlane(j,Y0),pe=B.projectPointToNearestOnPlane($,X0);return a=Math.min(se.x,ce.x,le.x),r=-a,c=Math.max(se.y,te.y),s=Math.min(le.y,pe.y),y.height=S.height=t,V=o.cartographicToCartesian(y,Vc),j=o.cartographicToCartesian(S,jc),f=Math.min(Te.getPointDistance(m,V),Te.getPointDistance(m,j)),d=n,qc(B.origin,B.xAxis,B.yAxis,B.zAxis,a,r,s,c,f,d,i)}const p=e.south>0,_=e.north<0,g=p?e.south:_?e.north:0,b=fe.center(e,kc).longitude,E=l.fromRadians(b,g,n,o,$0);E.z=0;const C=Math.abs(E.x)<A.EPSILON10&&Math.abs(E.y)<A.EPSILON10?l.UNIT_X:l.normalize(E,Z0),x=l.UNIT_Z,R=l.cross(C,x,K0);m=Te.fromPointNormal(E,C,o_);const N=l.fromRadians(b+A.PI_OVER_TWO,g,n,o,Q0);r=l.dot(Te.projectPointOntoPlane(m,N,J0),R),a=-r,c=l.fromRadians(0,e.north,_?t:n,o,e_).z,s=l.fromRadians(0,e.south,p?t:n,o,t_).z;const F=l.fromRadians(e.east,g,n,o,n_);return f=Te.getPointDistance(m,F),d=0,qc(E,R,x,C,a,r,s,c,f,d,i)};Ae.fromTransformation=function(e,t){return h.typeOf.object("transformation",e),u(t)||(t=new Ae),t.center=M.getTranslation(e,t.center),t.halfAxes=M.getMatrix3(e,t.halfAxes),t.halfAxes=P.multiplyByScalar(t.halfAxes,.5,t.halfAxes),t};Ae.clone=function(e,t){if(u(e))return u(t)?(l.clone(e.center,t.center),P.clone(e.halfAxes,t.halfAxes),t):new Ae(e.center,e.halfAxes)};Ae.intersectPlane=function(e,t){if(!u(e))throw new T("box is required.");if(!u(t))throw new T("plane is required.");const n=e.center,o=t.normal,i=e.halfAxes,a=o.x,r=o.y,s=o.z,c=Math.abs(a*i[P.COLUMN0ROW0]+r*i[P.COLUMN0ROW1]+s*i[P.COLUMN0ROW2])+Math.abs(a*i[P.COLUMN1ROW0]+r*i[P.COLUMN1ROW1]+s*i[P.COLUMN1ROW2])+Math.abs(a*i[P.COLUMN2ROW0]+r*i[P.COLUMN2ROW1]+s*i[P.COLUMN2ROW2]),f=l.dot(o,n)+t.distance;return f<=-c?Ke.OUTSIDE:f>=c?Ke.INSIDE:Ke.INTERSECTING};const Hf=new l,Wf=new l,Yf=new l,i_=new l,Hc=new l,r_=new l;Ae.distanceSquaredTo=function(e,t){if(!u(e))throw new T("box is required.");if(!u(t))throw new T("cartesian is required.");const n=l.subtract(t,e.center,jf),o=e.halfAxes;let i=P.getColumn(o,0,Hf),a=P.getColumn(o,1,Wf),r=P.getColumn(o,2,Yf);const s=l.magnitude(i),c=l.magnitude(a),f=l.magnitude(r);let d=!0,m=!0,p=!0;s>0?l.divideByScalar(i,s,i):d=!1,c>0?l.divideByScalar(a,c,a):m=!1,f>0?l.divideByScalar(r,f,r):p=!1;const _=!d+!m+!p;let g,b,E;if(_===1){let R=i;g=a,b=r,m?p||(R=r,b=i):(R=a,g=i),E=l.cross(g,b,Hc),R===i?i=E:R===a?a=E:R===r&&(r=E)}else if(_===2){g=i,m?g=a:p&&(g=r);let R=l.UNIT_Y;R.equalsEpsilon(g,A.EPSILON3)&&(R=l.UNIT_X),b=l.cross(g,R,i_),l.normalize(b,b),E=l.cross(g,b,Hc),l.normalize(E,E),g===i?(a=b,r=E):g===a?(r=b,i=E):g===r&&(i=b,a=E)}else _===3&&(i=l.UNIT_X,a=l.UNIT_Y,r=l.UNIT_Z);const v=r_;v.x=l.dot(n,i),v.y=l.dot(n,a),v.z=l.dot(n,r);let C=0,x;return v.x<-s?(x=v.x+s,C+=x*x):v.x>s&&(x=v.x-s,C+=x*x),v.y<-c?(x=v.y+c,C+=x*x):v.y>c&&(x=v.y-c,C+=x*x),v.z<-f?(x=v.z+f,C+=x*x):v.z>f&&(x=v.z-f,C+=x*x),C};const a_=new l,s_=new l;Ae.computePlaneDistances=function(e,t,n,o){if(!u(e))throw new T("box is required.");if(!u(t))throw new T("position is required.");if(!u(n))throw new T("direction is required.");u(o)||(o=new oo);let i=Number.POSITIVE_INFINITY,a=Number.NEGATIVE_INFINITY;const r=e.center,s=e.halfAxes,c=P.getColumn(s,0,Hf),f=P.getColumn(s,1,Wf),d=P.getColumn(s,2,Yf),m=l.add(c,f,a_);l.add(m,d,m),l.add(m,r,m);const p=l.subtract(m,t,s_);let _=l.dot(n,p);return i=Math.min(_,i),a=Math.max(_,a),l.add(r,c,m),l.add(m,f,m),l.subtract(m,d,m),l.subtract(m,t,p),_=l.dot(n,p),i=Math.min(_,i),a=Math.max(_,a),l.add(r,c,m),l.subtract(m,f,m),l.add(m,d,m),l.subtract(m,t,p),_=l.dot(n,p),i=Math.min(_,i),a=Math.max(_,a),l.add(r,c,m),l.subtract(m,f,m),l.subtract(m,d,m),l.subtract(m,t,p),_=l.dot(n,p),i=Math.min(_,i),a=Math.max(_,a),l.subtract(r,c,m),l.add(m,f,m),l.add(m,d,m),l.subtract(m,t,p),_=l.dot(n,p),i=Math.min(_,i),a=Math.max(_,a),l.subtract(r,c,m),l.add(m,f,m),l.subtract(m,d,m),l.subtract(m,t,p),_=l.dot(n,p),i=Math.min(_,i),a=Math.max(_,a),l.subtract(r,c,m),l.subtract(m,f,m),l.add(m,d,m),l.subtract(m,t,p),_=l.dot(n,p),i=Math.min(_,i),a=Math.max(_,a),l.subtract(r,c,m),l.subtract(m,f,m),l.subtract(m,d,m),l.subtract(m,t,p),_=l.dot(n,p),i=Math.min(_,i),a=Math.max(_,a),o.start=i,o.stop=a,o};const c_=new l,l_=new l,f_=new l;Ae.computeCorners=function(e,t){h.typeOf.object("box",e),u(t)||(t=[new l,new l,new l,new l,new l,new l,new l,new l]);const n=e.center,o=e.halfAxes,i=P.getColumn(o,0,c_),a=P.getColumn(o,1,l_),r=P.getColumn(o,2,f_);return l.clone(n,t[0]),l.subtract(t[0],i,t[0]),l.subtract(t[0],a,t[0]),l.subtract(t[0],r,t[0]),l.clone(n,t[1]),l.subtract(t[1],i,t[1]),l.subtract(t[1],a,t[1]),l.add(t[1],r,t[1]),l.clone(n,t[2]),l.subtract(t[2],i,t[2]),l.add(t[2],a,t[2]),l.subtract(t[2],r,t[2]),l.clone(n,t[3]),l.subtract(t[3],i,t[3]),l.add(t[3],a,t[3]),l.add(t[3],r,t[3]),l.clone(n,t[4]),l.add(t[4],i,t[4]),l.subtract(t[4],a,t[4]),l.subtract(t[4],r,t[4]),l.clone(n,t[5]),l.add(t[5],i,t[5]),l.subtract(t[5],a,t[5]),l.add(t[5],r,t[5]),l.clone(n,t[6]),l.add(t[6],i,t[6]),l.add(t[6],a,t[6]),l.subtract(t[6],r,t[6]),l.clone(n,t[7]),l.add(t[7],i,t[7]),l.add(t[7],a,t[7]),l.add(t[7],r,t[7]),t};const u_=new P;Ae.computeTransformation=function(e,t){h.typeOf.object("box",e),u(t)||(t=new M);const n=e.center,o=P.multiplyByUniformScale(e.halfAxes,2,u_);return M.fromRotationTranslation(o,n,t)};const h_=new Q;Ae.isOccluded=function(e,t){if(!u(e))throw new T("box is required.");if(!u(t))throw new T("occluder is required.");const n=Q.fromOrientedBoundingBox(e,h_);return!t.isBoundingSphereVisible(n)};Ae.prototype.intersectPlane=function(e){return Ae.intersectPlane(this,e)};Ae.prototype.distanceSquaredTo=function(e){return Ae.distanceSquaredTo(this,e)};Ae.prototype.computePlaneDistances=function(e,t,n){return Ae.computePlaneDistances(this,e,t,n)};Ae.prototype.computeCorners=function(e){return Ae.computeCorners(this,e)};Ae.prototype.computeTransformation=function(e){return Ae.computeTransformation(this,e)};Ae.prototype.isOccluded=function(e){return Ae.isOccluded(this,e)};Ae.equals=function(e,t){return e===t||u(e)&&u(t)&&l.equals(e.center,t.center)&&P.equals(e.halfAxes,t.halfAxes)};Ae.prototype.clone=function(e){return Ae.clone(this,e)};Ae.prototype.equals=function(e){return Ae.equals(this,e)};const d_={DEPTH_BUFFER_BIT:256,STENCIL_BUFFER_BIT:1024,COLOR_BUFFER_BIT:16384,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,ZERO:0,ONE:1,SRC_COLOR:768,ONE_MINUS_SRC_COLOR:769,SRC_ALPHA:770,ONE_MINUS_SRC_ALPHA:771,DST_ALPHA:772,ONE_MINUS_DST_ALPHA:773,DST_COLOR:774,ONE_MINUS_DST_COLOR:775,SRC_ALPHA_SATURATE:776,FUNC_ADD:32774,BLEND_EQUATION:32777,BLEND_EQUATION_RGB:32777,BLEND_EQUATION_ALPHA:34877,FUNC_SUBTRACT:32778,FUNC_REVERSE_SUBTRACT:32779,BLEND_DST_RGB:32968,BLEND_SRC_RGB:32969,BLEND_DST_ALPHA:32970,BLEND_SRC_ALPHA:32971,CONSTANT_COLOR:32769,ONE_MINUS_CONSTANT_COLOR:32770,CONSTANT_ALPHA:32771,ONE_MINUS_CONSTANT_ALPHA:32772,BLEND_COLOR:32773,ARRAY_BUFFER:34962,ELEMENT_ARRAY_BUFFER:34963,ARRAY_BUFFER_BINDING:34964,ELEMENT_ARRAY_BUFFER_BINDING:34965,STREAM_DRAW:35040,STATIC_DRAW:35044,DYNAMIC_DRAW:35048,BUFFER_SIZE:34660,BUFFER_USAGE:34661,CURRENT_VERTEX_ATTRIB:34342,FRONT:1028,BACK:1029,FRONT_AND_BACK:1032,CULL_FACE:2884,BLEND:3042,DITHER:3024,STENCIL_TEST:2960,DEPTH_TEST:2929,SCISSOR_TEST:3089,POLYGON_OFFSET_FILL:32823,SAMPLE_ALPHA_TO_COVERAGE:32926,SAMPLE_COVERAGE:32928,NO_ERROR:0,INVALID_ENUM:1280,INVALID_VALUE:1281,INVALID_OPERATION:1282,OUT_OF_MEMORY:1285,CW:2304,CCW:2305,LINE_WIDTH:2849,ALIASED_POINT_SIZE_RANGE:33901,ALIASED_LINE_WIDTH_RANGE:33902,CULL_FACE_MODE:2885,FRONT_FACE:2886,DEPTH_RANGE:2928,DEPTH_WRITEMASK:2930,DEPTH_CLEAR_VALUE:2931,DEPTH_FUNC:2932,STENCIL_CLEAR_VALUE:2961,STENCIL_FUNC:2962,STENCIL_FAIL:2964,STENCIL_PASS_DEPTH_FAIL:2965,STENCIL_PASS_DEPTH_PASS:2966,STENCIL_REF:2967,STENCIL_VALUE_MASK:2963,STENCIL_WRITEMASK:2968,STENCIL_BACK_FUNC:34816,STENCIL_BACK_FAIL:34817,STENCIL_BACK_PASS_DEPTH_FAIL:34818,STENCIL_BACK_PASS_DEPTH_PASS:34819,STENCIL_BACK_REF:36003,STENCIL_BACK_VALUE_MASK:36004,STENCIL_BACK_WRITEMASK:36005,VIEWPORT:2978,SCISSOR_BOX:3088,COLOR_CLEAR_VALUE:3106,COLOR_WRITEMASK:3107,UNPACK_ALIGNMENT:3317,PACK_ALIGNMENT:3333,MAX_TEXTURE_SIZE:3379,MAX_VIEWPORT_DIMS:3386,SUBPIXEL_BITS:3408,RED_BITS:3410,GREEN_BITS:3411,BLUE_BITS:3412,ALPHA_BITS:3413,DEPTH_BITS:3414,STENCIL_BITS:3415,POLYGON_OFFSET_UNITS:10752,POLYGON_OFFSET_FACTOR:32824,TEXTURE_BINDING_2D:32873,SAMPLE_BUFFERS:32936,SAMPLES:32937,SAMPLE_COVERAGE_VALUE:32938,SAMPLE_COVERAGE_INVERT:32939,COMPRESSED_TEXTURE_FORMATS:34467,DONT_CARE:4352,FASTEST:4353,NICEST:4354,GENERATE_MIPMAP_HINT:33170,BYTE:5120,UNSIGNED_BYTE:5121,SHORT:5122,UNSIGNED_SHORT:5123,INT:5124,UNSIGNED_INT:5125,FLOAT:5126,DEPTH_COMPONENT:6402,ALPHA:6406,RGB:6407,RGBA:6408,LUMINANCE:6409,LUMINANCE_ALPHA:6410,UNSIGNED_SHORT_4_4_4_4:32819,UNSIGNED_SHORT_5_5_5_1:32820,UNSIGNED_SHORT_5_6_5:33635,FRAGMENT_SHADER:35632,VERTEX_SHADER:35633,MAX_VERTEX_ATTRIBS:34921,MAX_VERTEX_UNIFORM_VECTORS:36347,MAX_VARYING_VECTORS:36348,MAX_COMBINED_TEXTURE_IMAGE_UNITS:35661,MAX_VERTEX_TEXTURE_IMAGE_UNITS:35660,MAX_TEXTURE_IMAGE_UNITS:34930,MAX_FRAGMENT_UNIFORM_VECTORS:36349,SHADER_TYPE:35663,DELETE_STATUS:35712,LINK_STATUS:35714,VALIDATE_STATUS:35715,ATTACHED_SHADERS:35717,ACTIVE_UNIFORMS:35718,ACTIVE_ATTRIBUTES:35721,SHADING_LANGUAGE_VERSION:35724,CURRENT_PROGRAM:35725,NEVER:512,LESS:513,EQUAL:514,LEQUAL:515,GREATER:516,NOTEQUAL:517,GEQUAL:518,ALWAYS:519,KEEP:7680,REPLACE:7681,INCR:7682,DECR:7683,INVERT:5386,INCR_WRAP:34055,DECR_WRAP:34056,VENDOR:7936,RENDERER:7937,VERSION:7938,NEAREST:9728,LINEAR:9729,NEAREST_MIPMAP_NEAREST:9984,LINEAR_MIPMAP_NEAREST:9985,NEAREST_MIPMAP_LINEAR:9986,LINEAR_MIPMAP_LINEAR:9987,TEXTURE_MAG_FILTER:10240,TEXTURE_MIN_FILTER:10241,TEXTURE_WRAP_S:10242,TEXTURE_WRAP_T:10243,TEXTURE_2D:3553,TEXTURE:5890,TEXTURE_CUBE_MAP:34067,TEXTURE_BINDING_CUBE_MAP:34068,TEXTURE_CUBE_MAP_POSITIVE_X:34069,TEXTURE_CUBE_MAP_NEGATIVE_X:34070,TEXTURE_CUBE_MAP_POSITIVE_Y:34071,TEXTURE_CUBE_MAP_NEGATIVE_Y:34072,TEXTURE_CUBE_MAP_POSITIVE_Z:34073,TEXTURE_CUBE_MAP_NEGATIVE_Z:34074,MAX_CUBE_MAP_TEXTURE_SIZE:34076,TEXTURE0:33984,TEXTURE1:33985,TEXTURE2:33986,TEXTURE3:33987,TEXTURE4:33988,TEXTURE5:33989,TEXTURE6:33990,TEXTURE7:33991,TEXTURE8:33992,TEXTURE9:33993,TEXTURE10:33994,TEXTURE11:33995,TEXTURE12:33996,TEXTURE13:33997,TEXTURE14:33998,TEXTURE15:33999,TEXTURE16:34e3,TEXTURE17:34001,TEXTURE18:34002,TEXTURE19:34003,TEXTURE20:34004,TEXTURE21:34005,TEXTURE22:34006,TEXTURE23:34007,TEXTURE24:34008,TEXTURE25:34009,TEXTURE26:34010,TEXTURE27:34011,TEXTURE28:34012,TEXTURE29:34013,TEXTURE30:34014,TEXTURE31:34015,ACTIVE_TEXTURE:34016,REPEAT:10497,CLAMP_TO_EDGE:33071,MIRRORED_REPEAT:33648,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,INT_VEC2:35667,INT_VEC3:35668,INT_VEC4:35669,BOOL:35670,BOOL_VEC2:35671,BOOL_VEC3:35672,BOOL_VEC4:35673,FLOAT_MAT2:35674,FLOAT_MAT3:35675,FLOAT_MAT4:35676,SAMPLER_2D:35678,SAMPLER_CUBE:35680,VERTEX_ATTRIB_ARRAY_ENABLED:34338,VERTEX_ATTRIB_ARRAY_SIZE:34339,VERTEX_ATTRIB_ARRAY_STRIDE:34340,VERTEX_ATTRIB_ARRAY_TYPE:34341,VERTEX_ATTRIB_ARRAY_NORMALIZED:34922,VERTEX_ATTRIB_ARRAY_POINTER:34373,VERTEX_ATTRIB_ARRAY_BUFFER_BINDING:34975,IMPLEMENTATION_COLOR_READ_TYPE:35738,IMPLEMENTATION_COLOR_READ_FORMAT:35739,COMPILE_STATUS:35713,LOW_FLOAT:36336,MEDIUM_FLOAT:36337,HIGH_FLOAT:36338,LOW_INT:36339,MEDIUM_INT:36340,HIGH_INT:36341,FRAMEBUFFER:36160,RENDERBUFFER:36161,RGBA4:32854,RGB5_A1:32855,RGB565:36194,DEPTH_COMPONENT16:33189,STENCIL_INDEX:6401,STENCIL_INDEX8:36168,DEPTH_STENCIL:34041,RENDERBUFFER_WIDTH:36162,RENDERBUFFER_HEIGHT:36163,RENDERBUFFER_INTERNAL_FORMAT:36164,RENDERBUFFER_RED_SIZE:36176,RENDERBUFFER_GREEN_SIZE:36177,RENDERBUFFER_BLUE_SIZE:36178,RENDERBUFFER_ALPHA_SIZE:36179,RENDERBUFFER_DEPTH_SIZE:36180,RENDERBUFFER_STENCIL_SIZE:36181,FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE:36048,FRAMEBUFFER_ATTACHMENT_OBJECT_NAME:36049,FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL:36050,FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE:36051,COLOR_ATTACHMENT0:36064,DEPTH_ATTACHMENT:36096,STENCIL_ATTACHMENT:36128,DEPTH_STENCIL_ATTACHMENT:33306,NONE:0,FRAMEBUFFER_COMPLETE:36053,FRAMEBUFFER_INCOMPLETE_ATTACHMENT:36054,FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:36055,FRAMEBUFFER_INCOMPLETE_DIMENSIONS:36057,FRAMEBUFFER_UNSUPPORTED:36061,FRAMEBUFFER_BINDING:36006,RENDERBUFFER_BINDING:36007,MAX_RENDERBUFFER_SIZE:34024,INVALID_FRAMEBUFFER_OPERATION:1286,UNPACK_FLIP_Y_WEBGL:37440,UNPACK_PREMULTIPLY_ALPHA_WEBGL:37441,CONTEXT_LOST_WEBGL:37442,UNPACK_COLORSPACE_CONVERSION_WEBGL:37443,BROWSER_DEFAULT_WEBGL:37444,COMPRESSED_RGB_S3TC_DXT1_EXT:33776,COMPRESSED_RGBA_S3TC_DXT1_EXT:33777,COMPRESSED_RGBA_S3TC_DXT3_EXT:33778,COMPRESSED_RGBA_S3TC_DXT5_EXT:33779,COMPRESSED_RGB_PVRTC_4BPPV1_IMG:35840,COMPRESSED_RGB_PVRTC_2BPPV1_IMG:35841,COMPRESSED_RGBA_PVRTC_4BPPV1_IMG:35842,COMPRESSED_RGBA_PVRTC_2BPPV1_IMG:35843,COMPRESSED_RGBA_ASTC_4x4_WEBGL:37808,COMPRESSED_RGB_ETC1_WEBGL:36196,COMPRESSED_RGBA_BPTC_UNORM:36492,HALF_FLOAT_OES:36193,DOUBLE:5130,READ_BUFFER:3074,UNPACK_ROW_LENGTH:3314,UNPACK_SKIP_ROWS:3315,UNPACK_SKIP_PIXELS:3316,PACK_ROW_LENGTH:3330,PACK_SKIP_ROWS:3331,PACK_SKIP_PIXELS:3332,COLOR:6144,DEPTH:6145,STENCIL:6146,RED:6403,RGB8:32849,RGBA8:32856,RGB10_A2:32857,TEXTURE_BINDING_3D:32874,UNPACK_SKIP_IMAGES:32877,UNPACK_IMAGE_HEIGHT:32878,TEXTURE_3D:32879,TEXTURE_WRAP_R:32882,MAX_3D_TEXTURE_SIZE:32883,UNSIGNED_INT_2_10_10_10_REV:33640,MAX_ELEMENTS_VERTICES:33e3,MAX_ELEMENTS_INDICES:33001,TEXTURE_MIN_LOD:33082,TEXTURE_MAX_LOD:33083,TEXTURE_BASE_LEVEL:33084,TEXTURE_MAX_LEVEL:33085,MIN:32775,MAX:32776,DEPTH_COMPONENT24:33190,MAX_TEXTURE_LOD_BIAS:34045,TEXTURE_COMPARE_MODE:34892,TEXTURE_COMPARE_FUNC:34893,CURRENT_QUERY:34917,QUERY_RESULT:34918,QUERY_RESULT_AVAILABLE:34919,STREAM_READ:35041,STREAM_COPY:35042,STATIC_READ:35045,STATIC_COPY:35046,DYNAMIC_READ:35049,DYNAMIC_COPY:35050,MAX_DRAW_BUFFERS:34852,DRAW_BUFFER0:34853,DRAW_BUFFER1:34854,DRAW_BUFFER2:34855,DRAW_BUFFER3:34856,DRAW_BUFFER4:34857,DRAW_BUFFER5:34858,DRAW_BUFFER6:34859,DRAW_BUFFER7:34860,DRAW_BUFFER8:34861,DRAW_BUFFER9:34862,DRAW_BUFFER10:34863,DRAW_BUFFER11:34864,DRAW_BUFFER12:34865,DRAW_BUFFER13:34866,DRAW_BUFFER14:34867,DRAW_BUFFER15:34868,MAX_FRAGMENT_UNIFORM_COMPONENTS:35657,MAX_VERTEX_UNIFORM_COMPONENTS:35658,SAMPLER_3D:35679,SAMPLER_2D_SHADOW:35682,FRAGMENT_SHADER_DERIVATIVE_HINT:35723,PIXEL_PACK_BUFFER:35051,PIXEL_UNPACK_BUFFER:35052,PIXEL_PACK_BUFFER_BINDING:35053,PIXEL_UNPACK_BUFFER_BINDING:35055,FLOAT_MAT2x3:35685,FLOAT_MAT2x4:35686,FLOAT_MAT3x2:35687,FLOAT_MAT3x4:35688,FLOAT_MAT4x2:35689,FLOAT_MAT4x3:35690,SRGB:35904,SRGB8:35905,SRGB8_ALPHA8:35907,COMPARE_REF_TO_TEXTURE:34894,RGBA32F:34836,RGB32F:34837,RGBA16F:34842,RGB16F:34843,VERTEX_ATTRIB_ARRAY_INTEGER:35069,MAX_ARRAY_TEXTURE_LAYERS:35071,MIN_PROGRAM_TEXEL_OFFSET:35076,MAX_PROGRAM_TEXEL_OFFSET:35077,MAX_VARYING_COMPONENTS:35659,TEXTURE_2D_ARRAY:35866,TEXTURE_BINDING_2D_ARRAY:35869,R11F_G11F_B10F:35898,UNSIGNED_INT_10F_11F_11F_REV:35899,RGB9_E5:35901,UNSIGNED_INT_5_9_9_9_REV:35902,TRANSFORM_FEEDBACK_BUFFER_MODE:35967,MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS:35968,TRANSFORM_FEEDBACK_VARYINGS:35971,TRANSFORM_FEEDBACK_BUFFER_START:35972,TRANSFORM_FEEDBACK_BUFFER_SIZE:35973,TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN:35976,RASTERIZER_DISCARD:35977,MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS:35978,MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS:35979,INTERLEAVED_ATTRIBS:35980,SEPARATE_ATTRIBS:35981,TRANSFORM_FEEDBACK_BUFFER:35982,TRANSFORM_FEEDBACK_BUFFER_BINDING:35983,RGBA32UI:36208,RGB32UI:36209,RGBA16UI:36214,RGB16UI:36215,RGBA8UI:36220,RGB8UI:36221,RGBA32I:36226,RGB32I:36227,RGBA16I:36232,RGB16I:36233,RGBA8I:36238,RGB8I:36239,RED_INTEGER:36244,RGB_INTEGER:36248,RGBA_INTEGER:36249,SAMPLER_2D_ARRAY:36289,SAMPLER_2D_ARRAY_SHADOW:36292,SAMPLER_CUBE_SHADOW:36293,UNSIGNED_INT_VEC2:36294,UNSIGNED_INT_VEC3:36295,UNSIGNED_INT_VEC4:36296,INT_SAMPLER_2D:36298,INT_SAMPLER_3D:36299,INT_SAMPLER_CUBE:36300,INT_SAMPLER_2D_ARRAY:36303,UNSIGNED_INT_SAMPLER_2D:36306,UNSIGNED_INT_SAMPLER_3D:36307,UNSIGNED_INT_SAMPLER_CUBE:36308,UNSIGNED_INT_SAMPLER_2D_ARRAY:36311,DEPTH_COMPONENT32F:36012,DEPTH32F_STENCIL8:36013,FLOAT_32_UNSIGNED_INT_24_8_REV:36269,FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING:33296,FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE:33297,FRAMEBUFFER_ATTACHMENT_RED_SIZE:33298,FRAMEBUFFER_ATTACHMENT_GREEN_SIZE:33299,FRAMEBUFFER_ATTACHMENT_BLUE_SIZE:33300,FRAMEBUFFER_ATTACHMENT_ALPHA_SIZE:33301,FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE:33302,FRAMEBUFFER_ATTACHMENT_STENCIL_SIZE:33303,FRAMEBUFFER_DEFAULT:33304,UNSIGNED_INT_24_8:34042,DEPTH24_STENCIL8:35056,UNSIGNED_NORMALIZED:35863,DRAW_FRAMEBUFFER_BINDING:36006,READ_FRAMEBUFFER:36008,DRAW_FRAMEBUFFER:36009,READ_FRAMEBUFFER_BINDING:36010,RENDERBUFFER_SAMPLES:36011,FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER:36052,MAX_COLOR_ATTACHMENTS:36063,COLOR_ATTACHMENT1:36065,COLOR_ATTACHMENT2:36066,COLOR_ATTACHMENT3:36067,COLOR_ATTACHMENT4:36068,COLOR_ATTACHMENT5:36069,COLOR_ATTACHMENT6:36070,COLOR_ATTACHMENT7:36071,COLOR_ATTACHMENT8:36072,COLOR_ATTACHMENT9:36073,COLOR_ATTACHMENT10:36074,COLOR_ATTACHMENT11:36075,COLOR_ATTACHMENT12:36076,COLOR_ATTACHMENT13:36077,COLOR_ATTACHMENT14:36078,COLOR_ATTACHMENT15:36079,FRAMEBUFFER_INCOMPLETE_MULTISAMPLE:36182,MAX_SAMPLES:36183,HALF_FLOAT:5131,RG:33319,RG_INTEGER:33320,R8:33321,RG8:33323,R16F:33325,R32F:33326,RG16F:33327,RG32F:33328,R8I:33329,R8UI:33330,R16I:33331,R16UI:33332,R32I:33333,R32UI:33334,RG8I:33335,RG8UI:33336,RG16I:33337,RG16UI:33338,RG32I:33339,RG32UI:33340,VERTEX_ARRAY_BINDING:34229,R8_SNORM:36756,RG8_SNORM:36757,RGB8_SNORM:36758,RGBA8_SNORM:36759,SIGNED_NORMALIZED:36764,COPY_READ_BUFFER:36662,COPY_WRITE_BUFFER:36663,COPY_READ_BUFFER_BINDING:36662,COPY_WRITE_BUFFER_BINDING:36663,UNIFORM_BUFFER:35345,UNIFORM_BUFFER_BINDING:35368,UNIFORM_BUFFER_START:35369,UNIFORM_BUFFER_SIZE:35370,MAX_VERTEX_UNIFORM_BLOCKS:35371,MAX_FRAGMENT_UNIFORM_BLOCKS:35373,MAX_COMBINED_UNIFORM_BLOCKS:35374,MAX_UNIFORM_BUFFER_BINDINGS:35375,MAX_UNIFORM_BLOCK_SIZE:35376,MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS:35377,MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS:35379,UNIFORM_BUFFER_OFFSET_ALIGNMENT:35380,ACTIVE_UNIFORM_BLOCKS:35382,UNIFORM_TYPE:35383,UNIFORM_SIZE:35384,UNIFORM_BLOCK_INDEX:35386,UNIFORM_OFFSET:35387,UNIFORM_ARRAY_STRIDE:35388,UNIFORM_MATRIX_STRIDE:35389,UNIFORM_IS_ROW_MAJOR:35390,UNIFORM_BLOCK_BINDING:35391,UNIFORM_BLOCK_DATA_SIZE:35392,UNIFORM_BLOCK_ACTIVE_UNIFORMS:35394,UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES:35395,UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER:35396,UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER:35398,INVALID_INDEX:4294967295,MAX_VERTEX_OUTPUT_COMPONENTS:37154,MAX_FRAGMENT_INPUT_COMPONENTS:37157,MAX_SERVER_WAIT_TIMEOUT:37137,OBJECT_TYPE:37138,SYNC_CONDITION:37139,SYNC_STATUS:37140,SYNC_FLAGS:37141,SYNC_FENCE:37142,SYNC_GPU_COMMANDS_COMPLETE:37143,UNSIGNALED:37144,SIGNALED:37145,ALREADY_SIGNALED:37146,TIMEOUT_EXPIRED:37147,CONDITION_SATISFIED:37148,WAIT_FAILED:37149,SYNC_FLUSH_COMMANDS_BIT:1,VERTEX_ATTRIB_ARRAY_DIVISOR:35070,ANY_SAMPLES_PASSED:35887,ANY_SAMPLES_PASSED_CONSERVATIVE:36202,SAMPLER_BINDING:35097,RGB10_A2UI:36975,INT_2_10_10_10_REV:36255,TRANSFORM_FEEDBACK:36386,TRANSFORM_FEEDBACK_PAUSED:36387,TRANSFORM_FEEDBACK_ACTIVE:36388,TRANSFORM_FEEDBACK_BINDING:36389,COMPRESSED_R11_EAC:37488,COMPRESSED_SIGNED_R11_EAC:37489,COMPRESSED_RG11_EAC:37490,COMPRESSED_SIGNED_RG11_EAC:37491,COMPRESSED_RGB8_ETC2:37492,COMPRESSED_SRGB8_ETC2:37493,COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2:37494,COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2:37495,COMPRESSED_RGBA8_ETC2_EAC:37496,COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:37497,TEXTURE_IMMUTABLE_FORMAT:37167,MAX_ELEMENT_INDEX:36203,TEXTURE_IMMUTABLE_LEVELS:33503,MAX_TEXTURE_MAX_ANISOTROPY_EXT:34047},z=Object.freeze(d_),de={BYTE:z.BYTE,UNSIGNED_BYTE:z.UNSIGNED_BYTE,SHORT:z.SHORT,UNSIGNED_SHORT:z.UNSIGNED_SHORT,INT:z.INT,UNSIGNED_INT:z.UNSIGNED_INT,FLOAT:z.FLOAT,DOUBLE:z.DOUBLE};de.getSizeInBytes=function(e){if(!u(e))throw new T("value is required.");switch(e){case de.BYTE:return Int8Array.BYTES_PER_ELEMENT;case de.UNSIGNED_BYTE:return Uint8Array.BYTES_PER_ELEMENT;case de.SHORT:return Int16Array.BYTES_PER_ELEMENT;case de.UNSIGNED_SHORT:return Uint16Array.BYTES_PER_ELEMENT;case de.INT:return Int32Array.BYTES_PER_ELEMENT;case de.UNSIGNED_INT:return Uint32Array.BYTES_PER_ELEMENT;case de.FLOAT:return Float32Array.BYTES_PER_ELEMENT;case de.DOUBLE:return Float64Array.BYTES_PER_ELEMENT;default:throw new T("componentDatatype is not a valid value.")}};de.fromTypedArray=function(e){if(e instanceof Int8Array)return de.BYTE;if(e instanceof Uint8Array)return de.UNSIGNED_BYTE;if(e instanceof Int16Array)return de.SHORT;if(e instanceof Uint16Array)return de.UNSIGNED_SHORT;if(e instanceof Int32Array)return de.INT;if(e instanceof Uint32Array)return de.UNSIGNED_INT;if(e instanceof Float32Array)return de.FLOAT;if(e instanceof Float64Array)return de.DOUBLE;throw new T("array must be an Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, or Float64Array.")};de.validate=function(e){return u(e)&&(e===de.BYTE||e===de.UNSIGNED_BYTE||e===de.SHORT||e===de.UNSIGNED_SHORT||e===de.INT||e===de.UNSIGNED_INT||e===de.FLOAT||e===de.DOUBLE)};de.createTypedArray=function(e,t){if(!u(e))throw new T("componentDatatype is required.");if(!u(t))throw new T("valuesOrLength is required.");switch(e){case de.BYTE:return new Int8Array(t);case de.UNSIGNED_BYTE:return new Uint8Array(t);case de.SHORT:return new Int16Array(t);case de.UNSIGNED_SHORT:return new Uint16Array(t);case de.INT:return new Int32Array(t);case de.UNSIGNED_INT:return new Uint32Array(t);case de.FLOAT:return new Float32Array(t);case de.DOUBLE:return new Float64Array(t);default:throw new T("componentDatatype is not a valid value.")}};de.createArrayBufferView=function(e,t,n,o){if(!u(e))throw new T("componentDatatype is required.");if(!u(t))throw new T("buffer is required.");switch(n=n??0,o=o??(t.byteLength-n)/de.getSizeInBytes(e),e){case de.BYTE:return new Int8Array(t,n,o);case de.UNSIGNED_BYTE:return new Uint8Array(t,n,o);case de.SHORT:return new Int16Array(t,n,o);case de.UNSIGNED_SHORT:return new Uint16Array(t,n,o);case de.INT:return new Int32Array(t,n,o);case de.UNSIGNED_INT:return new Uint32Array(t,n,o);case de.FLOAT:return new Float32Array(t,n,o);case de.DOUBLE:return new Float64Array(t,n,o);default:throw new T("componentDatatype is not a valid value.")}};de.fromName=function(e){switch(e){case"BYTE":return de.BYTE;case"UNSIGNED_BYTE":return de.UNSIGNED_BYTE;case"SHORT":return de.SHORT;case"UNSIGNED_SHORT":return de.UNSIGNED_SHORT;case"INT":return de.INT;case"UNSIGNED_INT":return de.UNSIGNED_INT;case"FLOAT":return de.FLOAT;case"DOUBLE":return de.DOUBLE;default:throw new T("name is not a valid value.")}};const oe=Object.freeze(de);function re(e,t,n,o){this[0]=e??0,this[1]=n??0,this[2]=t??0,this[3]=o??0}re.packedLength=4;re.pack=function(e,t,n){return h.typeOf.object("value",e),h.defined("array",t),n=n??0,t[n++]=e[0],t[n++]=e[1],t[n++]=e[2],t[n++]=e[3],t};re.unpack=function(e,t,n){return h.defined("array",e),t=t??0,u(n)||(n=new re),n[0]=e[t++],n[1]=e[t++],n[2]=e[t++],n[3]=e[t++],n};re.packArray=function(e,t){h.defined("array",e);const n=e.length,o=n*4;if(!u(t))t=new Array(o);else{if(!Array.isArray(t)&&t.length!==o)throw new T("If result is a typed array, it must have exactly array.length * 4 elements");t.length!==o&&(t.length=o)}for(let i=0;i<n;++i)re.pack(e[i],t,i*4);return t};re.unpackArray=function(e,t){if(h.defined("array",e),h.typeOf.number.greaterThanOrEquals("array.length",e.length,4),e.length%4!==0)throw new T("array length must be a multiple of 4.");const n=e.length;u(t)?t.length=n/4:t=new Array(n/4);for(let o=0;o<n;o+=4){const i=o/4;t[i]=re.unpack(e,o,t[i])}return t};re.clone=function(e,t){if(u(e))return u(t)?(t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t):new re(e[0],e[2],e[1],e[3])};re.fromArray=re.unpack;re.fromColumnMajorArray=function(e,t){return h.defined("values",e),re.clone(e,t)};re.fromRowMajorArray=function(e,t){return h.defined("values",e),u(t)?(t[0]=e[0],t[1]=e[2],t[2]=e[1],t[3]=e[3],t):new re(e[0],e[1],e[2],e[3])};re.fromScale=function(e,t){return h.typeOf.object("scale",e),u(t)?(t[0]=e.x,t[1]=0,t[2]=0,t[3]=e.y,t):new re(e.x,0,0,e.y)};re.fromUniformScale=function(e,t){return h.typeOf.number("scale",e),u(t)?(t[0]=e,t[1]=0,t[2]=0,t[3]=e,t):new re(e,0,0,e)};re.fromRotation=function(e,t){h.typeOf.number("angle",e);const n=Math.cos(e),o=Math.sin(e);return u(t)?(t[0]=n,t[1]=o,t[2]=-o,t[3]=n,t):new re(n,-o,o,n)};re.toArray=function(e,t){return h.typeOf.object("matrix",e),u(t)?(t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t):[e[0],e[1],e[2],e[3]]};re.getElementIndex=function(e,t){return h.typeOf.number.greaterThanOrEquals("row",t,0),h.typeOf.number.lessThanOrEquals("row",t,1),h.typeOf.number.greaterThanOrEquals("column",e,0),h.typeOf.number.lessThanOrEquals("column",e,1),e*2+t};re.getColumn=function(e,t,n){h.typeOf.object("matrix",e),h.typeOf.number.greaterThanOrEquals("index",t,0),h.typeOf.number.lessThanOrEquals("index",t,1),h.typeOf.object("result",n);const o=t*2,i=e[o],a=e[o+1];return n.x=i,n.y=a,n};re.setColumn=function(e,t,n,o){h.typeOf.object("matrix",e),h.typeOf.number.greaterThanOrEquals("index",t,0),h.typeOf.number.lessThanOrEquals("index",t,1),h.typeOf.object("cartesian",n),h.typeOf.object("result",o),o=re.clone(e,o);const i=t*2;return o[i]=n.x,o[i+1]=n.y,o};re.getRow=function(e,t,n){h.typeOf.object("matrix",e),h.typeOf.number.greaterThanOrEquals("index",t,0),h.typeOf.number.lessThanOrEquals("index",t,1),h.typeOf.object("result",n);const o=e[t],i=e[t+2];return n.x=o,n.y=i,n};re.setRow=function(e,t,n,o){return h.typeOf.object("matrix",e),h.typeOf.number.greaterThanOrEquals("index",t,0),h.typeOf.number.lessThanOrEquals("index",t,1),h.typeOf.object("cartesian",n),h.typeOf.object("result",o),o=re.clone(e,o),o[t]=n.x,o[t+2]=n.y,o};const m_=new U;re.setScale=function(e,t,n){h.typeOf.object("matrix",e),h.typeOf.object("scale",t),h.typeOf.object("result",n);const o=re.getScale(e,m_),i=t.x/o.x,a=t.y/o.y;return n[0]=e[0]*i,n[1]=e[1]*i,n[2]=e[2]*a,n[3]=e[3]*a,n};const p_=new U;re.setUniformScale=function(e,t,n){h.typeOf.object("matrix",e),h.typeOf.number("scale",t),h.typeOf.object("result",n);const o=re.getScale(e,p_),i=t/o.x,a=t/o.y;return n[0]=e[0]*i,n[1]=e[1]*i,n[2]=e[2]*a,n[3]=e[3]*a,n};const Wc=new U;re.getScale=function(e,t){return h.typeOf.object("matrix",e),h.typeOf.object("result",t),t.x=U.magnitude(U.fromElements(e[0],e[1],Wc)),t.y=U.magnitude(U.fromElements(e[2],e[3],Wc)),t};const Yc=new U;re.getMaximumScale=function(e){return re.getScale(e,Yc),U.maximumComponent(Yc)};const __=new U;re.setRotation=function(e,t,n){h.typeOf.object("matrix",e),h.typeOf.object("result",n);const o=re.getScale(e,__);return n[0]=t[0]*o.x,n[1]=t[1]*o.x,n[2]=t[2]*o.y,n[3]=t[3]*o.y,n};const g_=new U;re.getRotation=function(e,t){h.typeOf.object("matrix",e),h.typeOf.object("result",t);const n=re.getScale(e,g_);return t[0]=e[0]/n.x,t[1]=e[1]/n.x,t[2]=e[2]/n.y,t[3]=e[3]/n.y,t};re.multiply=function(e,t,n){h.typeOf.object("left",e),h.typeOf.object("right",t),h.typeOf.object("result",n);const o=e[0]*t[0]+e[2]*t[1],i=e[0]*t[2]+e[2]*t[3],a=e[1]*t[0]+e[3]*t[1],r=e[1]*t[2]+e[3]*t[3];return n[0]=o,n[1]=a,n[2]=i,n[3]=r,n};re.add=function(e,t,n){return h.typeOf.object("left",e),h.typeOf.object("right",t),h.typeOf.object("result",n),n[0]=e[0]+t[0],n[1]=e[1]+t[1],n[2]=e[2]+t[2],n[3]=e[3]+t[3],n};re.subtract=function(e,t,n){return h.typeOf.object("left",e),h.typeOf.object("right",t),h.typeOf.object("result",n),n[0]=e[0]-t[0],n[1]=e[1]-t[1],n[2]=e[2]-t[2],n[3]=e[3]-t[3],n};re.multiplyByVector=function(e,t,n){h.typeOf.object("matrix",e),h.typeOf.object("cartesian",t),h.typeOf.object("result",n);const o=e[0]*t.x+e[2]*t.y,i=e[1]*t.x+e[3]*t.y;return n.x=o,n.y=i,n};re.multiplyByScalar=function(e,t,n){return h.typeOf.object("matrix",e),h.typeOf.number("scalar",t),h.typeOf.object("result",n),n[0]=e[0]*t,n[1]=e[1]*t,n[2]=e[2]*t,n[3]=e[3]*t,n};re.multiplyByScale=function(e,t,n){return h.typeOf.object("matrix",e),h.typeOf.object("scale",t),h.typeOf.object("result",n),n[0]=e[0]*t.x,n[1]=e[1]*t.x,n[2]=e[2]*t.y,n[3]=e[3]*t.y,n};re.multiplyByUniformScale=function(e,t,n){return h.typeOf.object("matrix",e),h.typeOf.number("scale",t),h.typeOf.object("result",n),n[0]=e[0]*t,n[1]=e[1]*t,n[2]=e[2]*t,n[3]=e[3]*t,n};re.negate=function(e,t){return h.typeOf.object("matrix",e),h.typeOf.object("result",t),t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t[3]=-e[3],t};re.transpose=function(e,t){h.typeOf.object("matrix",e),h.typeOf.object("result",t);const n=e[0],o=e[2],i=e[1],a=e[3];return t[0]=n,t[1]=o,t[2]=i,t[3]=a,t};re.abs=function(e,t){return h.typeOf.object("matrix",e),h.typeOf.object("result",t),t[0]=Math.abs(e[0]),t[1]=Math.abs(e[1]),t[2]=Math.abs(e[2]),t[3]=Math.abs(e[3]),t};re.equals=function(e,t){return e===t||u(e)&&u(t)&&e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]&&e[3]===t[3]};re.equalsArray=function(e,t,n){return e[0]===t[n]&&e[1]===t[n+1]&&e[2]===t[n+2]&&e[3]===t[n+3]};re.equalsEpsilon=function(e,t,n){return n=n??0,e===t||u(e)&&u(t)&&Math.abs(e[0]-t[0])<=n&&Math.abs(e[1]-t[1])<=n&&Math.abs(e[2]-t[2])<=n&&Math.abs(e[3]-t[3])<=n};re.IDENTITY=Object.freeze(new re(1,0,0,1));re.ZERO=Object.freeze(new re(0,0,0,0));re.COLUMN0ROW0=0;re.COLUMN0ROW1=1;re.COLUMN1ROW0=2;re.COLUMN1ROW1=3;Object.defineProperties(re.prototype,{length:{get:function(){return re.packedLength}}});re.prototype.clone=function(e){return re.clone(this,e)};re.prototype.equals=function(e){return re.equals(this,e)};re.prototype.equalsEpsilon=function(e,t){return re.equalsEpsilon(this,e,t)};re.prototype.toString=function(){return`(${this[0]}, ${this[2]})
(${this[1]}, ${this[3]})`};const Ie={SCALAR:"SCALAR",VEC2:"VEC2",VEC3:"VEC3",VEC4:"VEC4",MAT2:"MAT2",MAT3:"MAT3",MAT4:"MAT4"};Ie.getMathType=function(e){switch(e){case Ie.SCALAR:return Number;case Ie.VEC2:return U;case Ie.VEC3:return l;case Ie.VEC4:return W;case Ie.MAT2:return re;case Ie.MAT3:return P;case Ie.MAT4:return M;default:throw new T("attributeType is not a valid value.")}};Ie.getNumberOfComponents=function(e){switch(e){case Ie.SCALAR:return 1;case Ie.VEC2:return 2;case Ie.VEC3:return 3;case Ie.VEC4:case Ie.MAT2:return 4;case Ie.MAT3:return 9;case Ie.MAT4:return 16;default:throw new T("attributeType is not a valid value.")}};Ie.getAttributeLocationCount=function(e){switch(e){case Ie.SCALAR:case Ie.VEC2:case Ie.VEC3:case Ie.VEC4:return 1;case Ie.MAT2:return 2;case Ie.MAT3:return 3;case Ie.MAT4:return 4;default:throw new T("attributeType is not a valid value.")}};Ie.getGlslType=function(e){switch(h.typeOf.string("attributeType",e),e){case Ie.SCALAR:return"float";case Ie.VEC2:return"vec2";case Ie.VEC3:return"vec3";case Ie.VEC4:return"vec4";case Ie.MAT2:return"mat2";case Ie.MAT3:return"mat3";case Ie.MAT4:return"mat4";default:throw new T("attributeType is not a valid value.")}};const Xf=Object.freeze(Ie),Xc=1/256,$c=256,Se={};Se.octEncodeInRange=function(e,t,n){h.defined("vector",e),h.defined("result",n);const o=l.magnitudeSquared(e);if(Math.abs(o-1)>A.EPSILON6)throw new T("vector must be normalized.");if(n.x=e.x/(Math.abs(e.x)+Math.abs(e.y)+Math.abs(e.z)),n.y=e.y/(Math.abs(e.x)+Math.abs(e.y)+Math.abs(e.z)),e.z<0){const i=n.x,a=n.y;n.x=(1-Math.abs(a))*A.signNotZero(i),n.y=(1-Math.abs(i))*A.signNotZero(a)}return n.x=A.toSNorm(n.x,t),n.y=A.toSNorm(n.y,t),n};Se.octEncode=function(e,t){return Se.octEncodeInRange(e,255,t)};const Zo=new U,Zc=new Uint8Array(1);function Zi(e){return Zc[0]=e,Zc[0]}Se.octEncodeToCartesian4=function(e,t){return Se.octEncodeInRange(e,65535,Zo),t.x=Zi(Zo.x*Xc),t.y=Zi(Zo.x),t.z=Zi(Zo.y*Xc),t.w=Zi(Zo.y),t};Se.octDecodeInRange=function(e,t,n,o){if(h.defined("result",o),e<0||e>n||t<0||t>n)throw new T(`x and y must be unsigned normalized integers between 0 and ${n}`);if(o.x=A.fromSNorm(e,n),o.y=A.fromSNorm(t,n),o.z=1-(Math.abs(o.x)+Math.abs(o.y)),o.z<0){const i=o.x;o.x=(1-Math.abs(o.y))*A.signNotZero(i),o.y=(1-Math.abs(i))*A.signNotZero(o.y)}return l.normalize(o,o)};Se.octDecode=function(e,t,n){return Se.octDecodeInRange(e,t,255,n)};Se.octDecodeFromCartesian4=function(e,t){h.typeOf.object("encoded",e),h.typeOf.object("result",t);const n=e.x,o=e.y,i=e.z,a=e.w;if(n<0||n>255||o<0||o>255||i<0||i>255||a<0||a>255)throw new T("x, y, z, and w must be unsigned normalized integers between 0 and 255");const r=n*$c+o,s=i*$c+a;return Se.octDecodeInRange(r,s,65535,t)};Se.octPackFloat=function(e){return h.defined("encoded",e),256*e.x+e.y};const es=new U;Se.octEncodeFloat=function(e){return Se.octEncode(e,es),Se.octPackFloat(es)};Se.octDecodeFloat=function(e,t){h.defined("value",e);const n=e/256,o=Math.floor(n),i=(n-o)*256;return Se.octDecode(o,i,t)};Se.octPack=function(e,t,n,o){h.defined("v1",e),h.defined("v2",t),h.defined("v3",n),h.defined("result",o);const i=Se.octEncodeFloat(e),a=Se.octEncodeFloat(t),r=Se.octEncode(n,es);return o.x=65536*r.x+i,o.y=65536*r.y+a,o};Se.octUnpack=function(e,t,n,o){h.defined("packed",e),h.defined("v1",t),h.defined("v2",n),h.defined("v3",o);let i=e.x/65536;const a=Math.floor(i),r=(i-a)*65536;i=e.y/65536;const s=Math.floor(i),c=(i-s)*65536;Se.octDecodeFloat(r,t),Se.octDecodeFloat(c,n),Se.octDecode(a,s,o)};Se.compressTextureCoordinates=function(e){h.defined("textureCoordinates",e);const t=e.x*4095|0,n=e.y*4095|0;return 4096*t+n};Se.decompressTextureCoordinates=function(e,t){h.defined("compressed",e),h.defined("result",t);const n=e/4096,o=Math.floor(n);return t.x=o/4095,t.y=(e-o*4096)/4095,t};function pa(e){return e>>1^-(e&1)}Se.zigZagDeltaDecode=function(e,t,n){h.defined("uBuffer",e),h.defined("vBuffer",t),h.typeOf.number.equals("uBuffer.length","vBuffer.length",e.length,t.length),u(n)&&h.typeOf.number.equals("uBuffer.length","heightBuffer.length",e.length,n.length);const o=e.length;let i=0,a=0,r=0;for(let s=0;s<o;++s)i+=pa(e[s]),a+=pa(t[s]),e[s]=i,t[s]=a,u(n)&&(r+=pa(n[s]),n[s]=r)};Se.dequantize=function(e,t,n,o){h.defined("typedArray",e),h.defined("componentDatatype",t),h.defined("type",n),h.defined("count",o);const i=Xf.getNumberOfComponents(n);let a;switch(t){case oe.BYTE:a=127;break;case oe.UNSIGNED_BYTE:a=255;break;case oe.SHORT:a=32767;break;case oe.UNSIGNED_SHORT:a=65535;break;case oe.INT:a=2147483647;break;case oe.UNSIGNED_INT:a=4294967295;break;default:throw new T(`Cannot dequantize component datatype: ${t}`)}const r=new Float32Array(o*i);for(let s=0;s<o;s++)for(let c=0;c<i;c++){const f=s*i+c;r[f]=Math.max(e[f]/a,-1)}return r};Se.decodeRGB565=function(e,t){h.defined("typedArray",e);const n=e.length*3;u(t)&&h.typeOf.number.equals("result.length","typedArray.length * 3",t.length,n);const o=e.length;u(t)||(t=new Float32Array(o*3));const i=31,a=63,r=1/31,s=1/63;for(let c=0;c<o;c++){const f=e[c],d=f>>11,m=f>>5&a,p=f&i,_=3*c;t[_]=d*r,t[_+1]=m*s,t[_+2]=p*r}return t};function Pt(e){this._ellipsoid=e??ae.WGS84,this._semimajorAxis=this._ellipsoid.maximumRadius,this._oneOverSemimajorAxis=1/this._semimajorAxis}Object.defineProperties(Pt.prototype,{ellipsoid:{get:function(){return this._ellipsoid}}});Pt.mercatorAngleToGeodeticLatitude=function(e){return A.PI_OVER_TWO-2*Math.atan(Math.exp(-e))};Pt.geodeticLatitudeToMercatorAngle=function(e){e>Pt.MaximumLatitude?e=Pt.MaximumLatitude:e<-Pt.MaximumLatitude&&(e=-Pt.MaximumLatitude);const t=Math.sin(e);return .5*Math.log((1+t)/(1-t))};Pt.MaximumLatitude=Pt.mercatorAngleToGeodeticLatitude(Math.PI);Pt.prototype.project=function(e,t){const n=this._semimajorAxis,o=e.longitude*n,i=Pt.geodeticLatitudeToMercatorAngle(e.latitude)*n,a=e.height;return u(t)?(t.x=o,t.y=i,t.z=a,t):new l(o,i,a)};Pt.prototype.unproject=function(e,t){if(!u(e))throw new T("cartesian is required");const n=this._oneOverSemimajorAxis,o=e.x*n,i=Pt.mercatorAngleToGeodeticLatitude(e.y*n),a=e.z;return u(t)?(t.longitude=o,t.latitude=i,t.height=a,t):new ne(o,i,a)};function y_(){return!0}function dt(e,t){t=t??"This object was destroyed, i.e., destroy() was called.";function n(){throw new T(t)}for(const o in e)typeof e[o]=="function"&&(e[o]=n);e.isDestroyed=y_}function $f(){if(!u(tt._canTransferArrayBuffer)){const e=Bs("transferTypedArrayTest");e.postMessage=e.webkitPostMessage??e.postMessage;const t=99,n=new Int8Array([t]);try{e.postMessage({array:n},[n.buffer])}catch{return tt._canTransferArrayBuffer=!1,tt._canTransferArrayBuffer}tt._canTransferArrayBuffer=new Promise(o=>{e.onmessage=function(i){const a=i.data.array,r=u(a)&&a[0]===t;o(r),e.terminate(),tt._canTransferArrayBuffer=r}})}return tt._canTransferArrayBuffer}const ts=new Vo;function _a(e){let t;try{t=new Blob([e],{type:"application/javascript"})}catch{const i=window.BlobBuilder||window.WebKitBlobBuilder||window.MozBlobBuilder||window.MSBlobBuilder,a=new i;a.append(e),t=a.getBlob("application/javascript")}return(window.URL||window.webkitURL).createObjectURL(t)}function Bs(e){const t=new vn(e),n=t.scheme().length!==0&&t.fragment().length===0,o=e.replace(/\.js$/,""),i={};let a,r;if(Va(e))r=e;else if(!n){const s=Ht(`${tt._workerModulePrefix}/${o}.js`);Va(s)&&(r=s)}if(r){const s=`import "${r}";`;return a=_a(s),i.type="module",new Worker(a,i)}if(!n&&typeof CESIUM_WORKERS<"u"){const s=`
      importScripts("${_a(CESIUM_WORKERS)}");
      CesiumWorkers["${o}"]();
    `;return a=_a(s),new Worker(a,i)}if(a=e,n||(a=Ht(`${tt._workerModulePrefix+o}.js`)),!ot.supportsEsmWebWorkers())throw new Ye("This browser is not supported. Please update your browser to continue.");return i.type="module",new Worker(a,i)}async function b_(e,t){const n={modulePath:void 0,wasmBinaryFile:void 0,wasmBinary:void 0};if(!ot.supportsWebAssembly()){if(!u(t.fallbackModulePath))throw new Ye(`This browser does not support Web Assembly, and no backup module was provided for ${e._workerPath}`);return n.modulePath=Ht(t.fallbackModulePath),n}n.wasmBinaryFile=Ht(t.wasmBinaryFile);const o=await ee.fetchArrayBuffer({url:n.wasmBinaryFile});return n.wasmBinary=o,n}function tt(e,t){this._workerPath=e,this._maximumActiveTasks=t??Number.POSITIVE_INFINITY,this._activeTasks=0,this._nextID=0,this._webAssemblyPromise=void 0}const T_=(e,t,n,o)=>{const i=({data:a})=>{if(a.id===t){if(u(a.error)){let r=a.error;r.name==="RuntimeError"?(r=new Ye(a.error.message),r.stack=a.error.stack):r.name==="DeveloperError"?(r=new T(a.error.message),r.stack=a.error.stack):r.name==="Error"&&(r=new Error(a.error.message),r.stack=a.error.stack),ts.raiseEvent(r),o(r)}else ts.raiseEvent(),n(a.result);e.removeEventListener("message",i)}};return i},E_=[];async function w_(e,t,n){const o=await Promise.resolve($f());u(n)?o||(n.length=0):n=E_;const i=e._nextID++,a=new Promise((r,s)=>{e._worker.addEventListener("message",T_(e._worker,i,r,s))});return e._worker.postMessage({id:i,baseUrl:Ht.getCesiumBaseUrl().url,parameters:t,canTransferArrayBuffer:o},n),a}async function A_(e,t,n){++e._activeTasks;try{const o=await w_(e,t,n);return--e._activeTasks,o}catch(o){throw--e._activeTasks,o}}tt.prototype.scheduleTask=function(e,t){if(u(this._worker)||(this._worker=Bs(this._workerPath)),!(this._activeTasks>=this._maximumActiveTasks))return A_(this,e,t)};tt.prototype.initWebAssemblyModule=async function(e){if(u(this._webAssemblyPromise))return this._webAssemblyPromise;const t=async()=>{const n=this._worker=Bs(this._workerPath),o=await b_(this,e),i=await Promise.resolve($f());let a;const r=o.wasmBinary;u(r)&&i&&(a=[r]);const s=new Promise((c,f)=>{n.onmessage=function({data:d}){u(d)?c(d.result):f(new Ye("Could not configure wasm module"))}});return n.postMessage({canTransferArrayBuffer:i,parameters:{webAssemblyConfig:o}},a),s};return this._webAssemblyPromise=t(),this._webAssemblyPromise};tt.prototype.isDestroyed=function(){return!1};tt.prototype.destroy=function(){return u(this._worker)&&this._worker.terminate(),dt(this)};tt.taskCompletedEvent=ts;tt._defaultWorkerModulePrefix="Workers/";tt._workerModulePrefix=tt._defaultWorkerModulePrefix;tt._canTransferArrayBuffer=void 0;const rt={UNSIGNED_BYTE:z.UNSIGNED_BYTE,UNSIGNED_SHORT:z.UNSIGNED_SHORT,UNSIGNED_INT:z.UNSIGNED_INT};rt.getSizeInBytes=function(e){switch(e){case rt.UNSIGNED_BYTE:return Uint8Array.BYTES_PER_ELEMENT;case rt.UNSIGNED_SHORT:return Uint16Array.BYTES_PER_ELEMENT;case rt.UNSIGNED_INT:return Uint32Array.BYTES_PER_ELEMENT}throw new T("indexDatatype is required and must be a valid IndexDatatype constant.")};rt.fromSizeInBytes=function(e){switch(e){case 2:return rt.UNSIGNED_SHORT;case 4:return rt.UNSIGNED_INT;case 1:return rt.UNSIGNED_BYTE;default:throw new T("Size in bytes cannot be mapped to an IndexDatatype")}};rt.validate=function(e){return u(e)&&(e===rt.UNSIGNED_BYTE||e===rt.UNSIGNED_SHORT||e===rt.UNSIGNED_INT)};rt.createTypedArray=function(e,t){if(!u(e))throw new T("numberOfVertices is required.");return e>=A.SIXTY_FOUR_KILOBYTES?new Uint32Array(t):new Uint16Array(t)};rt.createTypedArrayFromArrayBuffer=function(e,t,n,o){if(!u(e))throw new T("numberOfVertices is required.");if(!u(t))throw new T("sourceArray is required.");if(!u(n))throw new T("byteOffset is required.");return e>=A.SIXTY_FOUR_KILOBYTES?new Uint32Array(t,n,o):new Uint16Array(t,n,o)};rt.fromTypedArray=function(e){if(e instanceof Uint8Array)return rt.UNSIGNED_BYTE;if(e instanceof Uint16Array)return rt.UNSIGNED_SHORT;if(e instanceof Uint32Array)return rt.UNSIGNED_INT;throw new T("array must be a Uint8Array, Uint16Array, or Uint32Array.")};const $e=Object.freeze(rt),O_={NONE:0,GEODESIC:1,RHUMB:2},io=Object.freeze(O_);function Be(e,t,n,o){this.x=e??0,this.y=t??0,this.width=n??0,this.height=o??0}Be.packedLength=4;Be.pack=function(e,t,n){return h.typeOf.object("value",e),h.defined("array",t),n=n??0,t[n++]=e.x,t[n++]=e.y,t[n++]=e.width,t[n]=e.height,t};Be.unpack=function(e,t,n){return h.defined("array",e),t=t??0,u(n)||(n=new Be),n.x=e[t++],n.y=e[t++],n.width=e[t++],n.height=e[t],n};Be.fromPoints=function(e,t){if(u(t)||(t=new Be),!u(e)||e.length===0)return t.x=0,t.y=0,t.width=0,t.height=0,t;const n=e.length;let o=e[0].x,i=e[0].y,a=e[0].x,r=e[0].y;for(let s=1;s<n;s++){const c=e[s],f=c.x,d=c.y;o=Math.min(f,o),a=Math.max(f,a),i=Math.min(d,i),r=Math.max(d,r)}return t.x=o,t.y=i,t.width=a-o,t.height=r-i,t};const Kc=new In,S_=new ne,x_=new ne;Be.fromRectangle=function(e,t,n){if(u(n)||(n=new Be),!u(e))return n.x=0,n.y=0,n.width=0,n.height=0,n;Kc._ellipsoid=ae.default,t=t??Kc;const o=t.project(fe.southwest(e,S_)),i=t.project(fe.northeast(e,x_));return U.subtract(i,o,i),n.x=o.x,n.y=o.y,n.width=i.x,n.height=i.y,n};Be.clone=function(e,t){if(u(e))return u(t)?(t.x=e.x,t.y=e.y,t.width=e.width,t.height=e.height,t):new Be(e.x,e.y,e.width,e.height)};Be.union=function(e,t,n){h.typeOf.object("left",e),h.typeOf.object("right",t),u(n)||(n=new Be);const o=Math.min(e.x,t.x),i=Math.min(e.y,t.y),a=Math.max(e.x+e.width,t.x+t.width),r=Math.max(e.y+e.height,t.y+t.height);return n.x=o,n.y=i,n.width=a-o,n.height=r-i,n};Be.expand=function(e,t,n){h.typeOf.object("rectangle",e),h.typeOf.object("point",t),n=Be.clone(e,n);const o=t.x-n.x,i=t.y-n.y;return o>n.width?n.width=o:o<0&&(n.width-=o,n.x=t.x),i>n.height?n.height=i:i<0&&(n.height-=i,n.y=t.y),n};Be.intersect=function(e,t){h.typeOf.object("left",e),h.typeOf.object("right",t);const n=e.x,o=e.y,i=t.x,a=t.y;return n>i+t.width||n+e.width<i||o+e.height<a||o>a+t.height?Ke.OUTSIDE:Ke.INTERSECTING};Be.equals=function(e,t){return e===t||u(e)&&u(t)&&e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height};Be.prototype.clone=function(e){return Be.clone(this,e)};Be.prototype.intersect=function(e){return Be.intersect(this,e)};Be.prototype.equals=function(e){return Be.equals(this,e)};const C_={NONE:0,TRIANGLES:1,LINES:2,POLYLINES:3},ri=Object.freeze(C_),ht={POINTS:z.POINTS,LINES:z.LINES,LINE_LOOP:z.LINE_LOOP,LINE_STRIP:z.LINE_STRIP,TRIANGLES:z.TRIANGLES,TRIANGLE_STRIP:z.TRIANGLE_STRIP,TRIANGLE_FAN:z.TRIANGLE_FAN};ht.isLines=function(e){return e===ht.LINES||e===ht.LINE_LOOP||e===ht.LINE_STRIP};ht.isTriangles=function(e){return e===ht.TRIANGLES||e===ht.TRIANGLE_STRIP||e===ht.TRIANGLE_FAN};ht.validate=function(e){return e===ht.POINTS||e===ht.LINES||e===ht.LINE_LOOP||e===ht.LINE_STRIP||e===ht.TRIANGLES||e===ht.TRIANGLE_STRIP||e===ht.TRIANGLE_FAN};const xe=Object.freeze(ht);function Le(e){e=e??ue.EMPTY_OBJECT,h.typeOf.object("options.attributes",e.attributes),this.attributes=e.attributes,this.indices=e.indices,this.primitiveType=e.primitiveType??xe.TRIANGLES,this.boundingSphere=e.boundingSphere,this.geometryType=e.geometryType??ri.NONE,this.boundingSphereCV=e.boundingSphereCV,this.offsetAttribute=e.offsetAttribute}Le.computeNumberOfVertices=function(e){h.typeOf.object("geometry",e);let t=-1;for(const n in e.attributes)if(e.attributes.hasOwnProperty(n)&&u(e.attributes[n])&&u(e.attributes[n].values)){const o=e.attributes[n],i=o.values.length/o.componentsPerAttribute;if(t!==i&&t!==-1)throw new T("All attribute lists must have the same number of attributes.");t=i}return t};const v_=new ne,R_=new l,Qc=new M,z_=[new ne,new ne,new ne],I_=[new U,new U,new U],P_=[new U,new U,new U],M_=new l,N_=new K,D_=new M,L_=new re;Le._textureCoordinateRotationPoints=function(e,t,n,o){let i;const a=fe.center(o,v_),r=ne.toCartesian(a,n,R_),s=_e.eastNorthUpToFixedFrame(r,n,Qc),c=M.inverse(s,Qc),f=I_,d=z_;d[0].longitude=o.west,d[0].latitude=o.south,d[1].longitude=o.west,d[1].latitude=o.north,d[2].longitude=o.east,d[2].latitude=o.south;let m=M_;for(i=0;i<3;i++)ne.toCartesian(d[i],n,m),m=M.multiplyByPointAsVector(c,m,m),f[i].x=m.x,f[i].y=m.y;const p=K.fromAxisAngle(l.UNIT_Z,-t,N_),_=P.fromQuaternion(p,D_),g=e.length;let b=Number.POSITIVE_INFINITY,E=Number.POSITIVE_INFINITY,v=Number.NEGATIVE_INFINITY,C=Number.NEGATIVE_INFINITY;for(i=0;i<g;i++)m=M.multiplyByPointAsVector(c,e[i],m),m=P.multiplyByVector(_,m,m),b=Math.min(b,m.x),E=Math.min(E,m.y),v=Math.max(v,m.x),C=Math.max(C,m.y);const x=re.fromRotation(t,L_),R=P_;R[0].x=b,R[0].y=E,R[1].x=b,R[1].y=C,R[2].x=v,R[2].y=E;const N=f[0],F=f[2].x-N.x,q=f[1].y-N.y;for(i=0;i<3;i++){const Y=R[i];re.multiplyByVector(x,Y,Y),Y.x=(Y.x-N.x)/F,Y.y=(Y.y-N.y)/q}const D=R[0],B=R[1],L=R[2],G=new Array(6);return U.pack(D,G),U.pack(B,G,2),U.pack(L,G,4),G};function Oe(e){if(e=e??ue.EMPTY_OBJECT,!u(e.componentDatatype))throw new T("options.componentDatatype is required.");if(!u(e.componentsPerAttribute))throw new T("options.componentsPerAttribute is required.");if(e.componentsPerAttribute<1||e.componentsPerAttribute>4)throw new T("options.componentsPerAttribute must be between 1 and 4.");if(!u(e.values))throw new T("options.values is required.");this.componentDatatype=e.componentDatatype,this.componentsPerAttribute=e.componentsPerAttribute,this.normalize=e.normalize??!1,this.values=e.values}function Ci(e){e=e??ue.EMPTY_OBJECT,this.position=e.position,this.normal=e.normal,this.st=e.st,this.bitangent=e.bitangent,this.tangent=e.tangent,this.color=e.color}const F_={NONE:0,TOP:1,ALL:2},Rr=Object.freeze(F_);function ye(e){e=e??ue.EMPTY_OBJECT,this.position=e.position??!1,this.normal=e.normal??!1,this.st=e.st??!1,this.bitangent=e.bitangent??!1,this.tangent=e.tangent??!1,this.color=e.color??!1}ye.POSITION_ONLY=Object.freeze(new ye({position:!0}));ye.POSITION_AND_NORMAL=Object.freeze(new ye({position:!0,normal:!0}));ye.POSITION_NORMAL_AND_ST=Object.freeze(new ye({position:!0,normal:!0,st:!0}));ye.POSITION_AND_ST=Object.freeze(new ye({position:!0,st:!0}));ye.POSITION_AND_COLOR=Object.freeze(new ye({position:!0,color:!0}));ye.ALL=Object.freeze(new ye({position:!0,normal:!0,st:!0,tangent:!0,bitangent:!0}));ye.DEFAULT=ye.POSITION_NORMAL_AND_ST;ye.packedLength=6;ye.pack=function(e,t,n){if(!u(e))throw new T("value is required");if(!u(t))throw new T("array is required");return n=n??0,t[n++]=e.position?1:0,t[n++]=e.normal?1:0,t[n++]=e.st?1:0,t[n++]=e.tangent?1:0,t[n++]=e.bitangent?1:0,t[n]=e.color?1:0,t};ye.unpack=function(e,t,n){if(!u(e))throw new T("array is required");return t=t??0,u(n)||(n=new ye),n.position=e[t++]===1,n.normal=e[t++]===1,n.st=e[t++]===1,n.tangent=e[t++]===1,n.bitangent=e[t++]===1,n.color=e[t]===1,n};ye.clone=function(e,t){if(u(e))return u(t)||(t=new ye),t.position=e.position,t.normal=e.normal,t.st=e.st,t.tangent=e.tangent,t.bitangent=e.bitangent,t.color=e.color,t};const B_=new l;function Mt(e){e=e??ue.EMPTY_OBJECT;const t=e.minimum,n=e.maximum;if(h.typeOf.object("min",t),h.typeOf.object("max",n),u(e.offsetAttribute)&&e.offsetAttribute===Rr.TOP)throw new T("GeometryOffsetAttribute.TOP is not a supported options.offsetAttribute for this geometry.");const o=e.vertexFormat??ye.DEFAULT;this._minimum=l.clone(t),this._maximum=l.clone(n),this._vertexFormat=o,this._offsetAttribute=e.offsetAttribute,this._workerName="createBoxGeometry"}Mt.fromDimensions=function(e){e=e??ue.EMPTY_OBJECT;const t=e.dimensions;h.typeOf.object("dimensions",t),h.typeOf.number.greaterThanOrEquals("dimensions.x",t.x,0),h.typeOf.number.greaterThanOrEquals("dimensions.y",t.y,0),h.typeOf.number.greaterThanOrEquals("dimensions.z",t.z,0);const n=l.multiplyByScalar(t,.5,new l);return new Mt({minimum:l.negate(n,new l),maximum:n,vertexFormat:e.vertexFormat,offsetAttribute:e.offsetAttribute})};Mt.fromAxisAlignedBoundingBox=function(e){return h.typeOf.object("boundingBox",e),new Mt({minimum:e.minimum,maximum:e.maximum})};Mt.packedLength=2*l.packedLength+ye.packedLength+1;Mt.pack=function(e,t,n){return h.typeOf.object("value",e),h.defined("array",t),n=n??0,l.pack(e._minimum,t,n),l.pack(e._maximum,t,n+l.packedLength),ye.pack(e._vertexFormat,t,n+2*l.packedLength),t[n+2*l.packedLength+ye.packedLength]=e._offsetAttribute??-1,t};const Zf=new l,Kf=new l,Qf=new ye,Jc={minimum:Zf,maximum:Kf,vertexFormat:Qf,offsetAttribute:void 0};Mt.unpack=function(e,t,n){h.defined("array",e),t=t??0;const o=l.unpack(e,t,Zf),i=l.unpack(e,t+l.packedLength,Kf),a=ye.unpack(e,t+2*l.packedLength,Qf),r=e[t+2*l.packedLength+ye.packedLength];return u(n)?(n._minimum=l.clone(o,n._minimum),n._maximum=l.clone(i,n._maximum),n._vertexFormat=ye.clone(a,n._vertexFormat),n._offsetAttribute=r===-1?void 0:r,n):(Jc.offsetAttribute=r===-1?void 0:r,new Mt(Jc))};Mt.createGeometry=function(e){const t=e._minimum,n=e._maximum,o=e._vertexFormat;if(l.equals(t,n))return;const i=new Ci;let a,r;if(o.position&&(o.st||o.normal||o.tangent||o.bitangent)){if(o.position&&(r=new Float64Array(6*4*3),r[0]=t.x,r[1]=t.y,r[2]=n.z,r[3]=n.x,r[4]=t.y,r[5]=n.z,r[6]=n.x,r[7]=n.y,r[8]=n.z,r[9]=t.x,r[10]=n.y,r[11]=n.z,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=n.x,r[16]=t.y,r[17]=t.z,r[18]=n.x,r[19]=n.y,r[20]=t.z,r[21]=t.x,r[22]=n.y,r[23]=t.z,r[24]=n.x,r[25]=t.y,r[26]=t.z,r[27]=n.x,r[28]=n.y,r[29]=t.z,r[30]=n.x,r[31]=n.y,r[32]=n.z,r[33]=n.x,r[34]=t.y,r[35]=n.z,r[36]=t.x,r[37]=t.y,r[38]=t.z,r[39]=t.x,r[40]=n.y,r[41]=t.z,r[42]=t.x,r[43]=n.y,r[44]=n.z,r[45]=t.x,r[46]=t.y,r[47]=n.z,r[48]=t.x,r[49]=n.y,r[50]=t.z,r[51]=n.x,r[52]=n.y,r[53]=t.z,r[54]=n.x,r[55]=n.y,r[56]=n.z,r[57]=t.x,r[58]=n.y,r[59]=n.z,r[60]=t.x,r[61]=t.y,r[62]=t.z,r[63]=n.x,r[64]=t.y,r[65]=t.z,r[66]=n.x,r[67]=t.y,r[68]=n.z,r[69]=t.x,r[70]=t.y,r[71]=n.z,i.position=new Oe({componentDatatype:oe.DOUBLE,componentsPerAttribute:3,values:r})),o.normal){const f=new Float32Array(72);f[0]=0,f[1]=0,f[2]=1,f[3]=0,f[4]=0,f[5]=1,f[6]=0,f[7]=0,f[8]=1,f[9]=0,f[10]=0,f[11]=1,f[12]=0,f[13]=0,f[14]=-1,f[15]=0,f[16]=0,f[17]=-1,f[18]=0,f[19]=0,f[20]=-1,f[21]=0,f[22]=0,f[23]=-1,f[24]=1,f[25]=0,f[26]=0,f[27]=1,f[28]=0,f[29]=0,f[30]=1,f[31]=0,f[32]=0,f[33]=1,f[34]=0,f[35]=0,f[36]=-1,f[37]=0,f[38]=0,f[39]=-1,f[40]=0,f[41]=0,f[42]=-1,f[43]=0,f[44]=0,f[45]=-1,f[46]=0,f[47]=0,f[48]=0,f[49]=1,f[50]=0,f[51]=0,f[52]=1,f[53]=0,f[54]=0,f[55]=1,f[56]=0,f[57]=0,f[58]=1,f[59]=0,f[60]=0,f[61]=-1,f[62]=0,f[63]=0,f[64]=-1,f[65]=0,f[66]=0,f[67]=-1,f[68]=0,f[69]=0,f[70]=-1,f[71]=0,i.normal=new Oe({componentDatatype:oe.FLOAT,componentsPerAttribute:3,values:f})}if(o.st){const f=new Float32Array(48);f[0]=0,f[1]=0,f[2]=1,f[3]=0,f[4]=1,f[5]=1,f[6]=0,f[7]=1,f[8]=1,f[9]=0,f[10]=0,f[11]=0,f[12]=0,f[13]=1,f[14]=1,f[15]=1,f[16]=0,f[17]=0,f[18]=1,f[19]=0,f[20]=1,f[21]=1,f[22]=0,f[23]=1,f[24]=1,f[25]=0,f[26]=0,f[27]=0,f[28]=0,f[29]=1,f[30]=1,f[31]=1,f[32]=1,f[33]=0,f[34]=0,f[35]=0,f[36]=0,f[37]=1,f[38]=1,f[39]=1,f[40]=0,f[41]=0,f[42]=1,f[43]=0,f[44]=1,f[45]=1,f[46]=0,f[47]=1,i.st=new Oe({componentDatatype:oe.FLOAT,componentsPerAttribute:2,values:f})}if(o.tangent){const f=new Float32Array(72);f[0]=1,f[1]=0,f[2]=0,f[3]=1,f[4]=0,f[5]=0,f[6]=1,f[7]=0,f[8]=0,f[9]=1,f[10]=0,f[11]=0,f[12]=-1,f[13]=0,f[14]=0,f[15]=-1,f[16]=0,f[17]=0,f[18]=-1,f[19]=0,f[20]=0,f[21]=-1,f[22]=0,f[23]=0,f[24]=0,f[25]=1,f[26]=0,f[27]=0,f[28]=1,f[29]=0,f[30]=0,f[31]=1,f[32]=0,f[33]=0,f[34]=1,f[35]=0,f[36]=0,f[37]=-1,f[38]=0,f[39]=0,f[40]=-1,f[41]=0,f[42]=0,f[43]=-1,f[44]=0,f[45]=0,f[46]=-1,f[47]=0,f[48]=-1,f[49]=0,f[50]=0,f[51]=-1,f[52]=0,f[53]=0,f[54]=-1,f[55]=0,f[56]=0,f[57]=-1,f[58]=0,f[59]=0,f[60]=1,f[61]=0,f[62]=0,f[63]=1,f[64]=0,f[65]=0,f[66]=1,f[67]=0,f[68]=0,f[69]=1,f[70]=0,f[71]=0,i.tangent=new Oe({componentDatatype:oe.FLOAT,componentsPerAttribute:3,values:f})}if(o.bitangent){const f=new Float32Array(72);f[0]=0,f[1]=1,f[2]=0,f[3]=0,f[4]=1,f[5]=0,f[6]=0,f[7]=1,f[8]=0,f[9]=0,f[10]=1,f[11]=0,f[12]=0,f[13]=1,f[14]=0,f[15]=0,f[16]=1,f[17]=0,f[18]=0,f[19]=1,f[20]=0,f[21]=0,f[22]=1,f[23]=0,f[24]=0,f[25]=0,f[26]=1,f[27]=0,f[28]=0,f[29]=1,f[30]=0,f[31]=0,f[32]=1,f[33]=0,f[34]=0,f[35]=1,f[36]=0,f[37]=0,f[38]=1,f[39]=0,f[40]=0,f[41]=1,f[42]=0,f[43]=0,f[44]=1,f[45]=0,f[46]=0,f[47]=1,f[48]=0,f[49]=0,f[50]=1,f[51]=0,f[52]=0,f[53]=1,f[54]=0,f[55]=0,f[56]=1,f[57]=0,f[58]=0,f[59]=1,f[60]=0,f[61]=0,f[62]=1,f[63]=0,f[64]=0,f[65]=1,f[66]=0,f[67]=0,f[68]=1,f[69]=0,f[70]=0,f[71]=1,i.bitangent=new Oe({componentDatatype:oe.FLOAT,componentsPerAttribute:3,values:f})}a=new Uint16Array(6*2*3),a[0]=0,a[1]=1,a[2]=2,a[3]=0,a[4]=2,a[5]=3,a[6]=6,a[7]=5,a[8]=4,a[9]=7,a[10]=6,a[11]=4,a[12]=8,a[13]=9,a[14]=10,a[15]=8,a[16]=10,a[17]=11,a[18]=14,a[19]=13,a[20]=12,a[21]=15,a[22]=14,a[23]=12,a[24]=18,a[25]=17,a[26]=16,a[27]=19,a[28]=18,a[29]=16,a[30]=20,a[31]=21,a[32]=22,a[33]=20,a[34]=22,a[35]=23}else r=new Float64Array(8*3),r[0]=t.x,r[1]=t.y,r[2]=t.z,r[3]=n.x,r[4]=t.y,r[5]=t.z,r[6]=n.x,r[7]=n.y,r[8]=t.z,r[9]=t.x,r[10]=n.y,r[11]=t.z,r[12]=t.x,r[13]=t.y,r[14]=n.z,r[15]=n.x,r[16]=t.y,r[17]=n.z,r[18]=n.x,r[19]=n.y,r[20]=n.z,r[21]=t.x,r[22]=n.y,r[23]=n.z,i.position=new Oe({componentDatatype:oe.DOUBLE,componentsPerAttribute:3,values:r}),a=new Uint16Array(6*2*3),a[0]=4,a[1]=5,a[2]=6,a[3]=4,a[4]=6,a[5]=7,a[6]=1,a[7]=0,a[8]=3,a[9]=1,a[10]=3,a[11]=2,a[12]=1,a[13]=6,a[14]=5,a[15]=1,a[16]=2,a[17]=6,a[18]=2,a[19]=3,a[20]=7,a[21]=2,a[22]=7,a[23]=6,a[24]=3,a[25]=0,a[26]=4,a[27]=3,a[28]=4,a[29]=7,a[30]=0,a[31]=1,a[32]=5,a[33]=0,a[34]=5,a[35]=4;const s=l.subtract(n,t,B_),c=l.magnitude(s)*.5;if(u(e._offsetAttribute)){const f=r.length,d=e._offsetAttribute===Rr.NONE?0:1,m=new Uint8Array(f/3).fill(d);i.applyOffset=new Oe({componentDatatype:oe.UNSIGNED_BYTE,componentsPerAttribute:1,values:m})}return new Le({attributes:i,indices:a,primitiveType:xe.TRIANGLES,boundingSphere:new Q(l.ZERO,c),offsetAttribute:e._offsetAttribute})};let ga;Mt.getUnitBox=function(){return u(ga)||(ga=Mt.createGeometry(Mt.fromDimensions({dimensions:new l(1,1,1),vertexFormat:ye.POSITION_ONLY}))),ga};function ns(e){if(e=e??ue.EMPTY_OBJECT,!u(e.geometry))throw new T("options.geometry is required.");this.geometry=e.geometry,this.modelMatrix=M.clone(e.modelMatrix??M.IDENTITY),this.id=e.id,this.pickPrimitive=e.pickPrimitive,this.attributes=e.attributes??{},this.westHemisphereGeometry=void 0,this.eastHemisphereGeometry=void 0}const el=new l,tl=new l,nl=new l;function U_(e,t,n,o,i){h.defined("point",e),h.defined("p0",t),h.defined("p1",n),h.defined("p2",o),u(i)||(i=new l);let a,r,s,c,f,d,m,p;if(u(t.z)){if(l.equalsEpsilon(e,t,A.EPSILON14))return l.clone(l.UNIT_X,i);if(l.equalsEpsilon(e,n,A.EPSILON14))return l.clone(l.UNIT_Y,i);if(l.equalsEpsilon(e,o,A.EPSILON14))return l.clone(l.UNIT_Z,i);a=l.subtract(n,t,el),r=l.subtract(o,t,tl),s=l.subtract(e,t,nl),c=l.dot(a,a),f=l.dot(a,r),d=l.dot(a,s),m=l.dot(r,r),p=l.dot(r,s)}else{if(U.equalsEpsilon(e,t,A.EPSILON14))return l.clone(l.UNIT_X,i);if(U.equalsEpsilon(e,n,A.EPSILON14))return l.clone(l.UNIT_Y,i);if(U.equalsEpsilon(e,o,A.EPSILON14))return l.clone(l.UNIT_Z,i);a=U.subtract(n,t,el),r=U.subtract(o,t,tl),s=U.subtract(e,t,nl),c=U.dot(a,a),f=U.dot(a,r),d=U.dot(a,s),m=U.dot(r,r),p=U.dot(r,s)}i.y=m*d-f*p,i.z=c*p-f*d;const _=c*m-f*f;if(_!==0)return i.y/=_,i.z/=_,i.x=1-i.y-i.z,i}function qe(){this.high=l.clone(l.ZERO),this.low=l.clone(l.ZERO)}qe.encode=function(e,t){h.typeOf.number("value",e),u(t)||(t={high:0,low:0});let n;return e>=0?(n=Math.floor(e/65536)*65536,t.high=n,t.low=e-n):(n=Math.floor(-e/65536)*65536,t.high=-n,t.low=e+n),t};const En={high:0,low:0};qe.fromCartesian=function(e,t){h.typeOf.object("cartesian",e),u(t)||(t=new qe);const n=t.high,o=t.low;return qe.encode(e.x,En),n.x=En.high,o.x=En.low,qe.encode(e.y,En),n.y=En.high,o.y=En.low,qe.encode(e.z,En),n.z=En.high,o.z=En.low,t};const ya=new qe;qe.writeElements=function(e,t,n){h.defined("cartesianArray",t),h.typeOf.number("index",n),h.typeOf.number.greaterThanOrEquals("index",n,0),qe.fromCartesian(e,ya);const o=ya.high,i=ya.low;t[n]=o.x,t[n+1]=o.y,t[n+2]=o.z,t[n+3]=i.x,t[n+4]=i.y,t[n+5]=i.z};const Us={};Us.calculateACMR=function(e){e=e??ue.EMPTY_OBJECT;const t=e.indices;let n=e.maximumIndex;const o=e.cacheSize??24;if(!u(t))throw new T("indices is required.");const i=t.length;if(i<3||i%3!==0)throw new T("indices length must be a multiple of three.");if(n<=0)throw new T("maximumIndex must be greater than zero.");if(o<3)throw new T("cacheSize must be greater than two.");if(!u(n)){n=0;let s=0,c=t[s];for(;s<i;)c>n&&(n=c),++s,c=t[s]}const a=[];for(let s=0;s<n+1;s++)a[s]=0;let r=o+1;for(let s=0;s<i;++s)r-a[t[s]]>o&&(a[t[s]]=r,++r);return(r-o+1)/(i/3)};Us.tipsify=function(e){e=e??ue.EMPTY_OBJECT;const t=e.indices,n=e.maximumIndex,o=e.cacheSize??24;let i;function a(G,Y,y,w){for(;Y.length>=1;){const S=Y[Y.length-1];if(Y.splice(Y.length-1,1),G[S].numLiveTriangles>0)return S}for(;i<w;){if(G[i].numLiveTriangles>0)return++i,i-1;++i}return-1}function r(G,Y,y,w,S,I,k){let V=-1,H,j=-1,$=0;for(;$<y.length;){const te=y[$];w[te].numLiveTriangles&&(H=0,S-w[te].timeStamp+2*w[te].numLiveTriangles<=Y&&(H=S-w[te].timeStamp),(H>j||j===-1)&&(j=H,V=te)),++$}return V===-1?a(w,I,G,k):V}if(!u(t))throw new T("indices is required.");const s=t.length;if(s<3||s%3!==0)throw new T("indices length must be a multiple of three.");if(n<=0)throw new T("maximumIndex must be greater than zero.");if(o<3)throw new T("cacheSize must be greater than two.");let c=0,f=0,d=t[f];const m=s;if(u(n))c=n+1;else{for(;f<m;)d>c&&(c=d),++f,d=t[f];if(c===-1)return 0;++c}const p=[];let _;for(_=0;_<c;_++)p[_]={numLiveTriangles:0,timeStamp:0,vertexTriangles:[]};f=0;let g=0;for(;f<m;)p[t[f]].vertexTriangles.push(g),++p[t[f]].numLiveTriangles,p[t[f+1]].vertexTriangles.push(g),++p[t[f+1]].numLiveTriangles,p[t[f+2]].vertexTriangles.push(g),++p[t[f+2]].numLiveTriangles,++g,f+=3;let b=0,E=o+1;i=1;let v=[];const C=[];let x,R,N=0;const F=[],q=s/3,D=[];for(_=0;_<q;_++)D[_]=!1;let B,L;for(;b!==-1;){v=[],R=p[b],L=R.vertexTriangles.length;for(let G=0;G<L;++G)if(g=R.vertexTriangles[G],!D[g]){D[g]=!0,f=g+g+g;for(let Y=0;Y<3;++Y)B=t[f],v.push(B),C.push(B),F[N]=B,++N,x=p[B],--x.numLiveTriangles,E-x.timeStamp>o&&(x.timeStamp=E,++E),++f}b=r(t,o,v,p,E,C,c)}return F};const ze={};function zr(e,t,n,o,i){e[t++]=n,e[t++]=o,e[t++]=o,e[t++]=i,e[t++]=i,e[t]=n}function G_(e){const t=e.length,n=t/3*6,o=$e.createTypedArray(t,n);let i=0;for(let a=0;a<t;a+=3,i+=6)zr(o,i,e[a],e[a+1],e[a+2]);return o}function q_(e){const t=e.length;if(t>=3){const n=(t-2)*6,o=$e.createTypedArray(t,n);zr(o,0,e[0],e[1],e[2]);let i=6;for(let a=3;a<t;++a,i+=6)zr(o,i,e[a-1],e[a],e[a-2]);return o}return new Uint16Array}function k_(e){if(e.length>0){const t=e.length-1,n=(t-1)*6,o=$e.createTypedArray(t,n),i=e[0];let a=0;for(let r=1;r<t;++r,a+=6)zr(o,a,i,e[r],e[r+1]);return o}return new Uint16Array}ze.toWireframe=function(e){if(!u(e))throw new T("geometry is required.");const t=e.indices;if(u(t)){switch(e.primitiveType){case xe.TRIANGLES:e.indices=G_(t);break;case xe.TRIANGLE_STRIP:e.indices=q_(t);break;case xe.TRIANGLE_FAN:e.indices=k_(t);break;default:throw new T("geometry.primitiveType must be TRIANGLES, TRIANGLE_STRIP, or TRIANGLE_FAN.")}e.primitiveType=xe.LINES}return e};ze.createLineSegmentsForVectors=function(e,t,n){if(t=t??"normal",!u(e))throw new T("geometry is required.");if(!u(e.attributes.position))throw new T("geometry.attributes.position is required.");if(!u(e.attributes[t]))throw new T(`geometry.attributes must have an attribute with the same name as the attributeName parameter, ${t}.`);n=n??1e4;const o=e.attributes.position.values,i=e.attributes[t].values,a=o.length,r=new Float64Array(2*a);let s=0;for(let d=0;d<a;d+=3)r[s++]=o[d],r[s++]=o[d+1],r[s++]=o[d+2],r[s++]=o[d]+i[d]*n,r[s++]=o[d+1]+i[d+1]*n,r[s++]=o[d+2]+i[d+2]*n;let c;const f=e.boundingSphere;return u(f)&&(c=new Q(f.center,f.radius+n)),new Le({attributes:{position:new Oe({componentDatatype:oe.DOUBLE,componentsPerAttribute:3,values:r})},primitiveType:xe.LINES,boundingSphere:c})};ze.createAttributeLocations=function(e){if(!u(e))throw new T("geometry is required.");const t=["position","positionHigh","positionLow","position3DHigh","position3DLow","position2DHigh","position2DLow","pickColor","normal","st","tangent","bitangent","extrudeDirection","compressedAttributes"],n=e.attributes,o={};let i=0,a;const r=t.length;for(a=0;a<r;++a){const s=t[a];u(n[s])&&(o[s]=i++)}for(const s in n)n.hasOwnProperty(s)&&!u(o[s])&&(o[s]=i++);return o};ze.reorderForPreVertexCache=function(e){if(!u(e))throw new T("geometry is required.");const t=Le.computeNumberOfVertices(e),n=e.indices;if(u(n)){const o=new Int32Array(t);for(let p=0;p<t;p++)o[p]=-1;const i=n,a=i.length,r=$e.createTypedArray(t,a);let s=0,c=0,f=0,d;for(;s<a;)d=o[i[s]],d!==-1?r[c]=d:(d=i[s],o[d]=f,r[c]=f,++f),++s,++c;e.indices=r;const m=e.attributes;for(const p in m)if(m.hasOwnProperty(p)&&u(m[p])&&u(m[p].values)){const _=m[p],g=_.values;let b=0;const E=_.componentsPerAttribute,v=oe.createTypedArray(_.componentDatatype,f*E);for(;b<t;){const C=o[b];if(C!==-1)for(let x=0;x<E;x++)v[E*C+x]=g[E*b+x];++b}_.values=v}}return e};ze.reorderForPostVertexCache=function(e,t){if(!u(e))throw new T("geometry is required.");const n=e.indices;if(e.primitiveType===xe.TRIANGLES&&u(n)){const o=n.length;let i=0;for(let a=0;a<o;a++)n[a]>i&&(i=n[a]);e.indices=Us.tipsify({indices:n,maximumIndex:i,cacheSize:t})}return e};function ol(e){const t={};for(const n in e)if(e.hasOwnProperty(n)&&u(e[n])&&u(e[n].values)){const o=e[n];t[n]=new Oe({componentDatatype:o.componentDatatype,componentsPerAttribute:o.componentsPerAttribute,normalize:o.normalize,values:[]})}return t}function V_(e,t,n){for(const o in t)if(t.hasOwnProperty(o)&&u(t[o])&&u(t[o].values)){const i=t[o];for(let a=0;a<i.componentsPerAttribute;++a)e[o].values.push(i.values[n*i.componentsPerAttribute+a])}}ze.fitToUnsignedShortIndices=function(e){if(!u(e))throw new T("geometry is required.");if(u(e.indices)&&e.primitiveType!==xe.TRIANGLES&&e.primitiveType!==xe.LINES&&e.primitiveType!==xe.POINTS)throw new T("geometry.primitiveType must equal to PrimitiveType.TRIANGLES, PrimitiveType.LINES, or PrimitiveType.POINTS.");const t=[],n=Le.computeNumberOfVertices(e);if(u(e.indices)&&n>=A.SIXTY_FOUR_KILOBYTES){let o=[],i=[],a=0,r=ol(e.attributes);const s=e.indices,c=s.length;let f;e.primitiveType===xe.TRIANGLES?f=3:e.primitiveType===xe.LINES?f=2:e.primitiveType===xe.POINTS&&(f=1);for(let d=0;d<c;d+=f){for(let m=0;m<f;++m){const p=s[d+m];let _=o[p];u(_)||(_=a++,o[p]=_,V_(r,e.attributes,p)),i.push(_)}a+f>=A.SIXTY_FOUR_KILOBYTES&&(t.push(new Le({attributes:r,indices:i,primitiveType:e.primitiveType,boundingSphere:e.boundingSphere,boundingSphereCV:e.boundingSphereCV})),o=[],i=[],a=0,r=ol(e.attributes))}i.length!==0&&t.push(new Le({attributes:r,indices:i,primitiveType:e.primitiveType,boundingSphere:e.boundingSphere,boundingSphereCV:e.boundingSphereCV}))}else t.push(e);return t};const il=new l,j_=new ne;ze.projectTo2D=function(e,t,n,o,i){if(!u(e))throw new T("geometry is required.");if(!u(t))throw new T("attributeName is required.");if(!u(n))throw new T("attributeName3D is required.");if(!u(o))throw new T("attributeName2D is required.");if(!u(e.attributes[t]))throw new T(`geometry must have attribute matching the attributeName argument: ${t}.`);if(e.attributes[t].componentDatatype!==oe.DOUBLE)throw new T("The attribute componentDatatype must be ComponentDatatype.DOUBLE.");const a=e.attributes[t];i=u(i)?i:new In;const r=i.ellipsoid,s=a.values,c=new Float64Array(s.length);let f=0;for(let d=0;d<s.length;d+=3){const m=l.fromArray(s,d,il),p=r.cartesianToCartographic(m,j_);if(!u(p))throw new T(`Could not project point (${m.x}, ${m.y}, ${m.z}) to 2D.`);const _=i.project(p,il);c[f++]=_.x,c[f++]=_.y,c[f++]=_.z}return e.attributes[n]=a,e.attributes[o]=new Oe({componentDatatype:oe.DOUBLE,componentsPerAttribute:3,values:c}),delete e.attributes[t],e};const ba={high:0,low:0};ze.encodeAttribute=function(e,t,n,o){if(!u(e))throw new T("geometry is required.");if(!u(t))throw new T("attributeName is required.");if(!u(n))throw new T("attributeHighName is required.");if(!u(o))throw new T("attributeLowName is required.");if(!u(e.attributes[t]))throw new T(`geometry must have attribute matching the attributeName argument: ${t}.`);if(e.attributes[t].componentDatatype!==oe.DOUBLE)throw new T("The attribute componentDatatype must be ComponentDatatype.DOUBLE.");const i=e.attributes[t],a=i.values,r=a.length,s=new Float32Array(r),c=new Float32Array(r);for(let d=0;d<r;++d)qe.encode(a[d],ba),s[d]=ba.high,c[d]=ba.low;const f=i.componentsPerAttribute;return e.attributes[n]=new Oe({componentDatatype:oe.FLOAT,componentsPerAttribute:f,values:s}),e.attributes[o]=new Oe({componentDatatype:oe.FLOAT,componentsPerAttribute:f,values:c}),delete e.attributes[t],e};let Zt=new l;function Ta(e,t){if(u(t)){const n=t.values,o=n.length;for(let i=0;i<o;i+=3)l.unpack(n,i,Zt),M.multiplyByPoint(e,Zt,Zt),l.pack(Zt,n,i)}}function Ea(e,t){if(u(t)){const n=t.values,o=n.length;for(let i=0;i<o;i+=3)l.unpack(n,i,Zt),P.multiplyByVector(e,Zt,Zt),Zt=l.normalize(Zt,Zt),l.pack(Zt,n,i)}}const Ki=new M,Qi=new P;ze.transformToWorldCoordinates=function(e){if(!u(e))throw new T("instance is required.");const t=e.modelMatrix;if(M.equals(t,M.IDENTITY))return e;const n=e.geometry.attributes;Ta(t,n.position),Ta(t,n.prevPosition),Ta(t,n.nextPosition),(u(n.normal)||u(n.tangent)||u(n.bitangent))&&(M.inverse(t,Ki),M.transpose(Ki,Ki),M.getMatrix3(Ki,Qi),Ea(Qi,n.normal),Ea(Qi,n.tangent),Ea(Qi,n.bitangent));const o=e.geometry.boundingSphere;return u(o)&&(e.geometry.boundingSphere=Q.transform(o,t,o)),e.modelMatrix=M.clone(M.IDENTITY),e};function H_(e,t){const n=e.length,o={},i=e[0][t].attributes;let a;for(a in i)if(i.hasOwnProperty(a)&&u(i[a])&&u(i[a].values)){const r=i[a];let s=r.values.length,c=!0;for(let f=1;f<n;++f){const d=e[f][t].attributes[a];if(!u(d)||r.componentDatatype!==d.componentDatatype||r.componentsPerAttribute!==d.componentsPerAttribute||r.normalize!==d.normalize){c=!1;break}s+=d.values.length}c&&(o[a]=new Oe({componentDatatype:r.componentDatatype,componentsPerAttribute:r.componentsPerAttribute,normalize:r.normalize,values:oe.createTypedArray(r.componentDatatype,s)}))}return o}const W_=new l;function wa(e,t){const n=e.length;let o,i,a,r;const s=e[0].modelMatrix,c=u(e[0][t].indices),f=e[0][t].primitiveType;for(i=1;i<n;++i){if(!M.equals(e[i].modelMatrix,s))throw new T("All instances must have the same modelMatrix.");if(u(e[i][t].indices)!==c)throw new T("All instance geometries must have an indices or not have one.");if(e[i][t].primitiveType!==f)throw new T("All instance geometries must have the same primitiveType.")}const d=H_(e,t);let m,p,_;for(o in d)if(d.hasOwnProperty(o))for(m=d[o].values,r=0,i=0;i<n;++i)for(p=e[i][t].attributes[o].values,_=p.length,a=0;a<_;++a)m[r++]=p[a];let g;if(c){let C=0;for(i=0;i<n;++i)C+=e[i][t].indices.length;const x=Le.computeNumberOfVertices(new Le({attributes:d,primitiveType:xe.POINTS})),R=$e.createTypedArray(x,C);let N=0,F=0;for(i=0;i<n;++i){const q=e[i][t].indices,D=q.length;for(r=0;r<D;++r)R[N++]=F+q[r];F+=Le.computeNumberOfVertices(e[i][t])}g=R}let b=new l,E=0,v;for(i=0;i<n;++i){if(v=e[i][t].boundingSphere,!u(v)){b=void 0;break}l.add(v.center,b,b)}if(u(b))for(l.divideByScalar(b,n,b),i=0;i<n;++i){v=e[i][t].boundingSphere;const C=l.magnitude(l.subtract(v.center,b,W_))+v.radius;C>E&&(E=C)}return new Le({attributes:d,indices:g,primitiveType:f,boundingSphere:u(b)?new Q(b,E):void 0})}ze.combineInstances=function(e){if(!u(e)||e.length<1)throw new T("instances is required and must have length greater than zero.");const t=[],n=[],o=e.length;for(let a=0;a<o;++a){const r=e[a];u(r.geometry)?t.push(r):u(r.westHemisphereGeometry)&&u(r.eastHemisphereGeometry)&&n.push(r)}const i=[];return t.length>0&&i.push(wa(t,"geometry")),n.length>0&&(i.push(wa(n,"westHemisphereGeometry")),i.push(wa(n,"eastHemisphereGeometry"))),i};const Ut=new l,Ko=new l,To=new l,Eo=new l;ze.computeNormal=function(e){if(!u(e))throw new T("geometry is required.");if(!u(e.attributes.position)||!u(e.attributes.position.values))throw new T("geometry.attributes.position.values is required.");if(!u(e.indices))throw new T("geometry.indices is required.");if(e.indices.length<2||e.indices.length%3!==0)throw new T("geometry.indices length must be greater than 0 and be a multiple of 3.");if(e.primitiveType!==xe.TRIANGLES)throw new T("geometry.primitiveType must be PrimitiveType.TRIANGLES.");const t=e.indices,n=e.attributes,o=n.position.values,i=n.position.values.length/3,a=t.length,r=new Array(i),s=new Array(a/3),c=new Array(a);let f;for(f=0;f<i;f++)r[f]={indexOffset:0,count:0,currentCount:0};let d=0;for(f=0;f<a;f+=3){const g=t[f],b=t[f+1],E=t[f+2],v=g*3,C=b*3,x=E*3;Ko.x=o[v],Ko.y=o[v+1],Ko.z=o[v+2],To.x=o[C],To.y=o[C+1],To.z=o[C+2],Eo.x=o[x],Eo.y=o[x+1],Eo.z=o[x+2],r[g].count++,r[b].count++,r[E].count++,l.subtract(To,Ko,To),l.subtract(Eo,Ko,Eo),s[d]=l.cross(To,Eo,new l),d++}let m=0;for(f=0;f<i;f++)r[f].indexOffset+=m,m+=r[f].count;d=0;let p;for(f=0;f<a;f+=3){p=r[t[f]];let g=p.indexOffset+p.currentCount;c[g]=d,p.currentCount++,p=r[t[f+1]],g=p.indexOffset+p.currentCount,c[g]=d,p.currentCount++,p=r[t[f+2]],g=p.indexOffset+p.currentCount,c[g]=d,p.currentCount++,d++}const _=new Float32Array(i*3);for(f=0;f<i;f++){const g=f*3;if(p=r[f],l.clone(l.ZERO,Ut),p.count>0){for(d=0;d<p.count;d++)l.add(Ut,s[c[p.indexOffset+d]],Ut);l.equalsEpsilon(l.ZERO,Ut,A.EPSILON10)&&l.clone(s[c[p.indexOffset]],Ut)}l.equalsEpsilon(l.ZERO,Ut,A.EPSILON10)&&(Ut.z=1),l.normalize(Ut,Ut),_[g]=Ut.x,_[g+1]=Ut.y,_[g+2]=Ut.z}return e.attributes.normal=new Oe({componentDatatype:oe.FLOAT,componentsPerAttribute:3,values:_}),e};const Y_=new l,rl=new l,X_=new l;ze.computeTangentAndBitangent=function(e){if(!u(e))throw new T("geometry is required.");const t=e.attributes,n=e.indices;if(!u(t.position)||!u(t.position.values))throw new T("geometry.attributes.position.values is required.");if(!u(t.normal)||!u(t.normal.values))throw new T("geometry.attributes.normal.values is required.");if(!u(t.st)||!u(t.st.values))throw new T("geometry.attributes.st.values is required.");if(!u(n))throw new T("geometry.indices is required.");if(n.length<2||n.length%3!==0)throw new T("geometry.indices length must be greater than 0 and be a multiple of 3.");if(e.primitiveType!==xe.TRIANGLES)throw new T("geometry.primitiveType must be PrimitiveType.TRIANGLES.");const o=e.attributes.position.values,i=e.attributes.normal.values,a=e.attributes.st.values,r=e.attributes.position.values.length/3,s=n.length,c=new Array(r*3);let f;for(f=0;f<c.length;f++)c[f]=0;let d,m,p;for(f=0;f<s;f+=3){const b=n[f],E=n[f+1],v=n[f+2];d=b*3,m=E*3,p=v*3;const C=b*2,x=E*2,R=v*2,N=o[d],F=o[d+1],q=o[d+2],D=a[C],B=a[C+1],L=a[x+1]-B,G=a[R+1]-B,Y=1/((a[x]-D)*G-(a[R]-D)*L),y=(G*(o[m]-N)-L*(o[p]-N))*Y,w=(G*(o[m+1]-F)-L*(o[p+1]-F))*Y,S=(G*(o[m+2]-q)-L*(o[p+2]-q))*Y;c[d]+=y,c[d+1]+=w,c[d+2]+=S,c[m]+=y,c[m+1]+=w,c[m+2]+=S,c[p]+=y,c[p+1]+=w,c[p+2]+=S}const _=new Float32Array(r*3),g=new Float32Array(r*3);for(f=0;f<r;f++){d=f*3,m=d+1,p=d+2;const b=l.fromArray(i,d,Y_),E=l.fromArray(c,d,X_),v=l.dot(b,E);l.multiplyByScalar(b,v,rl),l.normalize(l.subtract(E,rl,E),E),_[d]=E.x,_[m]=E.y,_[p]=E.z,l.normalize(l.cross(b,E,E),E),g[d]=E.x,g[m]=E.y,g[p]=E.z}return e.attributes.tangent=new Oe({componentDatatype:oe.FLOAT,componentsPerAttribute:3,values:_}),e.attributes.bitangent=new Oe({componentDatatype:oe.FLOAT,componentsPerAttribute:3,values:g}),e};const Qo=new U,Xt=new l,al=new l,sl=new l;let Ji=new U;ze.compressVertices=function(e){if(!u(e))throw new T("geometry is required.");const t=e.attributes.extrudeDirection;let n,o;if(u(t)){const F=t.values;o=F.length/3;const q=new Float32Array(o*2);let D=0;for(n=0;n<o;++n){if(l.fromArray(F,n*3,Xt),l.equals(Xt,l.ZERO)){D+=2;continue}Ji=Se.octEncodeInRange(Xt,65535,Ji),q[D++]=Ji.x,q[D++]=Ji.y}return e.attributes.compressedAttributes=new Oe({componentDatatype:oe.FLOAT,componentsPerAttribute:2,values:q}),delete e.attributes.extrudeDirection,e}const i=e.attributes.normal,a=e.attributes.st,r=u(i),s=u(a);if(!r&&!s)return e;const c=e.attributes.tangent,f=e.attributes.bitangent,d=u(c),m=u(f);let p,_,g,b;r&&(p=i.values),s&&(_=a.values),d&&(g=c.values),m&&(b=f.values),o=(r?p.length:_.length)/(r?3:2);let C=o,x=s&&r?2:1;x+=d||m?1:0,C*=x;const R=new Float32Array(C);let N=0;for(n=0;n<o;++n){s&&(U.fromArray(_,n*2,Qo),R[N++]=Se.compressTextureCoordinates(Qo));const F=n*3;r&&u(g)&&u(b)?(l.fromArray(p,F,Xt),l.fromArray(g,F,al),l.fromArray(b,F,sl),Se.octPack(Xt,al,sl,Qo),R[N++]=Qo.x,R[N++]=Qo.y):(r&&(l.fromArray(p,F,Xt),R[N++]=Se.octEncodeFloat(Xt)),d&&(l.fromArray(g,F,Xt),R[N++]=Se.octEncodeFloat(Xt)),m&&(l.fromArray(b,F,Xt),R[N++]=Se.octEncodeFloat(Xt)))}return e.attributes.compressedAttributes=new Oe({componentDatatype:oe.FLOAT,componentsPerAttribute:x,values:R}),r&&delete e.attributes.normal,s&&delete e.attributes.st,m&&delete e.attributes.bitangent,d&&delete e.attributes.tangent,e};function $_(e){if(u(e.indices))return e;const t=Le.computeNumberOfVertices(e);if(t<3)throw new T("The number of vertices must be at least three.");if(t%3!==0)throw new T("The number of vertices must be a multiple of three.");const n=$e.createTypedArray(t,t);for(let o=0;o<t;++o)n[o]=o;return e.indices=n,e}function Z_(e){const t=Le.computeNumberOfVertices(e);if(t<3)throw new T("The number of vertices must be at least three.");const n=$e.createTypedArray(t,(t-2)*3);n[0]=1,n[1]=0,n[2]=2;let o=3;for(let i=3;i<t;++i)n[o++]=i-1,n[o++]=0,n[o++]=i;return e.indices=n,e.primitiveType=xe.TRIANGLES,e}function K_(e){const t=Le.computeNumberOfVertices(e);if(t<3)throw new T("The number of vertices must be at least 3.");const n=$e.createTypedArray(t,(t-2)*3);n[0]=0,n[1]=1,n[2]=2,t>3&&(n[3]=0,n[4]=2,n[5]=3);let o=6;for(let i=3;i<t-1;i+=2)n[o++]=i,n[o++]=i-1,n[o++]=i+1,i+2<t&&(n[o++]=i,n[o++]=i+1,n[o++]=i+2);return e.indices=n,e.primitiveType=xe.TRIANGLES,e}function Q_(e){if(u(e.indices))return e;const t=Le.computeNumberOfVertices(e);if(t<2)throw new T("The number of vertices must be at least two.");if(t%2!==0)throw new T("The number of vertices must be a multiple of 2.");const n=$e.createTypedArray(t,t);for(let o=0;o<t;++o)n[o]=o;return e.indices=n,e}function J_(e){const t=Le.computeNumberOfVertices(e);if(t<2)throw new T("The number of vertices must be at least two.");const n=$e.createTypedArray(t,(t-1)*2);n[0]=0,n[1]=1;let o=2;for(let i=2;i<t;++i)n[o++]=i-1,n[o++]=i;return e.indices=n,e.primitiveType=xe.LINES,e}function eg(e){const t=Le.computeNumberOfVertices(e);if(t<2)throw new T("The number of vertices must be at least two.");const n=$e.createTypedArray(t,t*2);n[0]=0,n[1]=1;let o=2;for(let i=2;i<t;++i)n[o++]=i-1,n[o++]=i;return n[o++]=t-1,n[o]=0,e.indices=n,e.primitiveType=xe.LINES,e}function tg(e){switch(e.primitiveType){case xe.TRIANGLE_FAN:return Z_(e);case xe.TRIANGLE_STRIP:return K_(e);case xe.TRIANGLES:return $_(e);case xe.LINE_STRIP:return J_(e);case xe.LINE_LOOP:return eg(e);case xe.LINES:return Q_(e)}return e}function qn(e,t){Math.abs(e.y)<A.EPSILON6&&(t?e.y=-A.EPSILON6:e.y=A.EPSILON6)}function ng(e,t,n){if(e.y!==0&&t.y!==0&&n.y!==0){qn(e,e.y<0),qn(t,t.y<0),qn(n,n.y<0);return}const o=Math.abs(e.y),i=Math.abs(t.y),a=Math.abs(n.y);let r;o>i?o>a?r=A.sign(e.y):r=A.sign(n.y):i>a?r=A.sign(t.y):r=A.sign(n.y);const s=r<0;qn(e,s),qn(t,s),qn(n,s)}const cl=new l;function Gt(e,t,n,o){l.add(e,l.multiplyByScalar(l.subtract(t,e,cl),e.y/(e.y-t.y),cl),n),l.clone(n,o),qn(n,!0),qn(o,!1)}const Zn=new l,Kn=new l,Qn=new l,Jn=new l,Aa={positions:new Array(7),indices:new Array(3*3)};function og(e,t,n){if(e.x>=0||t.x>=0||n.x>=0)return;ng(e,t,n);const o=e.y<0,i=t.y<0,a=n.y<0;let r=0;r+=o?1:0,r+=i?1:0,r+=a?1:0;const s=Aa.indices;r===1?(s[1]=3,s[2]=4,s[5]=6,s[7]=6,s[8]=5,o?(Gt(e,t,Zn,Qn),Gt(e,n,Kn,Jn),s[0]=0,s[3]=1,s[4]=2,s[6]=1):i?(Gt(t,n,Zn,Qn),Gt(t,e,Kn,Jn),s[0]=1,s[3]=2,s[4]=0,s[6]=2):a&&(Gt(n,e,Zn,Qn),Gt(n,t,Kn,Jn),s[0]=2,s[3]=0,s[4]=1,s[6]=0)):r===2&&(s[2]=4,s[4]=4,s[5]=3,s[7]=5,s[8]=6,o?i?a||(Gt(n,e,Zn,Qn),Gt(n,t,Kn,Jn),s[0]=0,s[1]=1,s[3]=0,s[6]=2):(Gt(t,n,Zn,Qn),Gt(t,e,Kn,Jn),s[0]=2,s[1]=0,s[3]=2,s[6]=1):(Gt(e,t,Zn,Qn),Gt(e,n,Kn,Jn),s[0]=1,s[1]=2,s[3]=1,s[6]=0));const c=Aa.positions;return c[0]=e,c[1]=t,c[2]=n,c.length=3,(r===1||r===2)&&(c[3]=Zn,c[4]=Kn,c[5]=Qn,c[6]=Jn,c.length=7),Aa}function ll(e,t){const n=e.attributes;if(n.position.values.length===0)return;for(const i in n)if(n.hasOwnProperty(i)&&u(n[i])&&u(n[i].values)){const a=n[i];a.values=oe.createTypedArray(a.componentDatatype,a.values)}const o=Le.computeNumberOfVertices(e);return e.indices=$e.createTypedArray(o,e.indices),t&&(e.boundingSphere=Q.fromVertices(n.position.values)),e}function Fo(e){const t=e.attributes,n={};for(const o in t)if(t.hasOwnProperty(o)&&u(t[o])&&u(t[o].values)){const i=t[o];n[o]=new Oe({componentDatatype:i.componentDatatype,componentsPerAttribute:i.componentsPerAttribute,normalize:i.normalize,values:[]})}return new Le({attributes:n,indices:[],primitiveType:e.primitiveType})}function Gs(e,t,n){const o=u(e.geometry.boundingSphere);t=ll(t,o),n=ll(n,o),u(n)&&!u(t)?e.geometry=n:!u(n)&&u(t)?e.geometry=t:(e.westHemisphereGeometry=t,e.eastHemisphereGeometry=n,e.geometry=void 0)}function qs(e,t){const n=new e,o=new e,i=new e;return function(a,r,s,c,f,d,m,p){const _=e.fromArray(f,a*t,n),g=e.fromArray(f,r*t,o),b=e.fromArray(f,s*t,i);e.multiplyByScalar(_,c.x,_),e.multiplyByScalar(g,c.y,g),e.multiplyByScalar(b,c.z,b);const E=e.add(_,g,_);e.add(E,b,E),p&&e.normalize(E,E),e.pack(E,d,m*t)}}const ig=qs(W,4),hr=qs(l,3),Jf=qs(U,2),rg=function(e,t,n,o,i,a,r){const s=i[e]*o.x,c=i[t]*o.y,f=i[n]*o.z;a[r]=s+c+f>A.EPSILON6?1:0},fi=new l,os=new l,is=new l,ag=new l;function er(e,t,n,o,i,a,r,s,c,f,d,m,p,_,g,b){if(!u(a)&&!u(r)&&!u(s)&&!u(c)&&!u(f)&&_===0)return;const E=l.fromArray(i,e*3,fi),v=l.fromArray(i,t*3,os),C=l.fromArray(i,n*3,is),x=U_(o,E,v,C,ag);if(u(x)){if(u(a)&&hr(e,t,n,x,a,m.normal.values,b,!0),u(f)){const R=l.fromArray(f,e*3,fi),N=l.fromArray(f,t*3,os),F=l.fromArray(f,n*3,is);l.multiplyByScalar(R,x.x,R),l.multiplyByScalar(N,x.y,N),l.multiplyByScalar(F,x.z,F);let q;!l.equals(R,l.ZERO)||!l.equals(N,l.ZERO)||!l.equals(F,l.ZERO)?(q=l.add(R,N,R),l.add(q,F,q),l.normalize(q,q)):(q=fi,q.x=0,q.y=0,q.z=0),l.pack(q,m.extrudeDirection.values,b*3)}if(u(d)&&rg(e,t,n,x,d,m.applyOffset.values,b),u(r)&&hr(e,t,n,x,r,m.tangent.values,b,!0),u(s)&&hr(e,t,n,x,s,m.bitangent.values,b,!0),u(c)&&Jf(e,t,n,x,c,m.st.values,b),_>0)for(let R=0;R<_;R++){const N=p[R];sg(e,t,n,x,b,g[N],m[N])}}}function sg(e,t,n,o,i,a,r){const s=a.componentsPerAttribute,c=a.values,f=r.values;switch(s){case 4:ig(e,t,n,o,c,f,i,!1);break;case 3:hr(e,t,n,o,c,f,i,!1);break;case 2:Jf(e,t,n,o,c,f,i,!1);break;default:f[i]=c[e]*o.x+c[t]*o.y+c[n]*o.z}}function ln(e,t,n,o,i,a){const r=e.position.values.length/3;if(i!==-1){const s=o[i],c=n[s];return c===-1?(n[s]=r,e.position.values.push(a.x,a.y,a.z),t.push(r),r):(t.push(c),c)}return e.position.values.push(a.x,a.y,a.z),t.push(r),r}const cg={position:!0,normal:!0,bitangent:!0,tangent:!0,st:!0,extrudeDirection:!0,applyOffset:!0};function fl(e){const t=e.geometry,n=t.attributes,o=n.position.values,i=u(n.normal)?n.normal.values:void 0,a=u(n.bitangent)?n.bitangent.values:void 0,r=u(n.tangent)?n.tangent.values:void 0,s=u(n.st)?n.st.values:void 0,c=u(n.extrudeDirection)?n.extrudeDirection.values:void 0,f=u(n.applyOffset)?n.applyOffset.values:void 0,d=t.indices,m=[];for(const q in n)n.hasOwnProperty(q)&&!cg[q]&&u(n[q])&&m.push(q);const p=m.length,_=Fo(t),g=Fo(t);let b,E,v,C,x;const R=[];R.length=o.length/3;const N=[];for(N.length=o.length/3,x=0;x<R.length;++x)R[x]=-1,N[x]=-1;const F=d.length;for(x=0;x<F;x+=3){const q=d[x],D=d[x+1],B=d[x+2];let L=l.fromArray(o,q*3),G=l.fromArray(o,D*3),Y=l.fromArray(o,B*3);const y=og(L,G,Y);if(u(y)&&y.positions.length>3){const w=y.positions,S=y.indices,I=S.length;for(let k=0;k<I;++k){const V=S[k],H=w[V];H.y<0?(b=g.attributes,E=g.indices,v=R):(b=_.attributes,E=_.indices,v=N),C=ln(b,E,v,d,V<3?x+V:-1,H),er(q,D,B,H,o,i,r,a,s,c,f,b,m,p,n,C)}}else u(y)&&(L=y.positions[0],G=y.positions[1],Y=y.positions[2]),L.y<0?(b=g.attributes,E=g.indices,v=R):(b=_.attributes,E=_.indices,v=N),C=ln(b,E,v,d,x,L),er(q,D,B,L,o,i,r,a,s,c,f,b,m,p,n,C),C=ln(b,E,v,d,x+1,G),er(q,D,B,G,o,i,r,a,s,c,f,b,m,p,n,C),C=ln(b,E,v,d,x+2,Y),er(q,D,B,Y,o,i,r,a,s,c,f,b,m,p,n,C)}Gs(e,g,_)}const eu=Te.fromPointNormal(l.ZERO,l.UNIT_Y),lg=new l,fg=new l;function wo(e,t,n,o,i,a,r){if(!u(r))return;const s=l.fromArray(o,e*3,fi);l.equalsEpsilon(s,n,A.EPSILON10)?a.applyOffset.values[i]=r[e]:a.applyOffset.values[i]=r[t]}function ul(e){const t=e.geometry,n=t.attributes,o=n.position.values,i=u(n.applyOffset)?n.applyOffset.values:void 0,a=t.indices,r=Fo(t),s=Fo(t);let c;const f=a.length,d=[];d.length=o.length/3;const m=[];for(m.length=o.length/3,c=0;c<d.length;++c)d[c]=-1,m[c]=-1;for(c=0;c<f;c+=2){const p=a[c],_=a[c+1],g=l.fromArray(o,p*3,fi),b=l.fromArray(o,_*3,os);let E;Math.abs(g.y)<A.EPSILON6&&(g.y<0?g.y=-A.EPSILON6:g.y=A.EPSILON6),Math.abs(b.y)<A.EPSILON6&&(b.y<0?b.y=-A.EPSILON6:b.y=A.EPSILON6);let v=r.attributes,C=r.indices,x=m,R=s.attributes,N=s.indices,F=d;const q=Ce.lineSegmentPlane(g,b,eu,is);if(u(q)){const D=l.multiplyByScalar(l.UNIT_Y,5*A.EPSILON9,lg);g.y<0&&(l.negate(D,D),v=s.attributes,C=s.indices,x=d,R=r.attributes,N=r.indices,F=m);const B=l.add(q,D,fg);E=ln(v,C,x,a,c,g),wo(p,_,g,o,E,v,i),E=ln(v,C,x,a,-1,B),wo(p,_,B,o,E,v,i),l.negate(D,D),l.add(q,D,B),E=ln(R,N,F,a,-1,B),wo(p,_,B,o,E,R,i),E=ln(R,N,F,a,c+1,b),wo(p,_,b,o,E,R,i)}else{let D,B,L;g.y<0?(D=s.attributes,B=s.indices,L=d):(D=r.attributes,B=r.indices,L=m),E=ln(D,B,L,a,c,g),wo(p,_,g,o,E,D,i),E=ln(D,B,L,a,c+1,b),wo(p,_,b,o,E,D,i)}}Gs(e,s,r)}const hl=new U,ug=new U,tu=new l,nu=new l,rs=new l,hg=new l,dg=new l,mg=new l,dl=new W;function ml(e){const t=e.attributes,n=t.position.values,o=t.prevPosition.values,i=t.nextPosition.values,a=n.length;for(let r=0;r<a;r+=3){const s=l.unpack(n,r,tu);if(s.x>0)continue;const c=l.unpack(o,r,nu);(s.y<0&&c.y>0||s.y>0&&c.y<0)&&(r-3>0?(o[r]=n[r-3],o[r+1]=n[r-2],o[r+2]=n[r-1]):l.pack(s,o,r));const f=l.unpack(i,r,rs);(s.y<0&&f.y>0||s.y>0&&f.y<0)&&(r+3<a?(i[r]=n[r+3],i[r+1]=n[r+4],i[r+2]=n[r+5]):l.pack(s,i,r))}}const pg=5*A.EPSILON9,tr=A.EPSILON6;function _g(e){const t=e.geometry,n=t.attributes,o=n.position.values,i=n.prevPosition.values,a=n.nextPosition.values,r=n.expandAndWidth.values,s=u(n.st)?n.st.values:void 0,c=u(n.color)?n.color.values:void 0,f=Fo(t),d=Fo(t);let m,p,_,g=!1;const b=o.length/3;for(m=0;m<b;m+=4){const E=m,v=m+2,C=l.fromArray(o,E*3,tu),x=l.fromArray(o,v*3,nu);if(Math.abs(C.y)<tr)for(C.y=tr*(x.y<0?-1:1),o[m*3+1]=C.y,o[(m+1)*3+1]=C.y,p=E*3;p<E*3+4*3;p+=3)i[p]=o[m*3],i[p+1]=o[m*3+1],i[p+2]=o[m*3+2];if(Math.abs(x.y)<tr)for(x.y=tr*(C.y<0?-1:1),o[(m+2)*3+1]=x.y,o[(m+3)*3+1]=x.y,p=E*3;p<E*3+4*3;p+=3)a[p]=o[(m+2)*3],a[p+1]=o[(m+2)*3+1],a[p+2]=o[(m+2)*3+2];let R=f.attributes,N=f.indices,F=d.attributes,q=d.indices;const D=Ce.lineSegmentPlane(C,x,eu,hg);if(u(D)){g=!0;const B=l.multiplyByScalar(l.UNIT_Y,pg,dg);C.y<0&&(l.negate(B,B),R=d.attributes,N=d.indices,F=f.attributes,q=f.indices);const L=l.add(D,B,mg);R.position.values.push(C.x,C.y,C.z,C.x,C.y,C.z),R.position.values.push(L.x,L.y,L.z),R.position.values.push(L.x,L.y,L.z),R.prevPosition.values.push(i[E*3],i[E*3+1],i[E*3+2]),R.prevPosition.values.push(i[E*3+3],i[E*3+4],i[E*3+5]),R.prevPosition.values.push(C.x,C.y,C.z,C.x,C.y,C.z),R.nextPosition.values.push(L.x,L.y,L.z),R.nextPosition.values.push(L.x,L.y,L.z),R.nextPosition.values.push(L.x,L.y,L.z),R.nextPosition.values.push(L.x,L.y,L.z),l.negate(B,B),l.add(D,B,L),F.position.values.push(L.x,L.y,L.z),F.position.values.push(L.x,L.y,L.z),F.position.values.push(x.x,x.y,x.z,x.x,x.y,x.z),F.prevPosition.values.push(L.x,L.y,L.z),F.prevPosition.values.push(L.x,L.y,L.z),F.prevPosition.values.push(L.x,L.y,L.z),F.prevPosition.values.push(L.x,L.y,L.z),F.nextPosition.values.push(x.x,x.y,x.z,x.x,x.y,x.z),F.nextPosition.values.push(a[v*3],a[v*3+1],a[v*3+2]),F.nextPosition.values.push(a[v*3+3],a[v*3+4],a[v*3+5]);const G=U.fromArray(r,E*2,hl),Y=Math.abs(G.y);R.expandAndWidth.values.push(-1,Y,1,Y),R.expandAndWidth.values.push(-1,-Y,1,-Y),F.expandAndWidth.values.push(-1,Y,1,Y),F.expandAndWidth.values.push(-1,-Y,1,-Y);let y=l.magnitudeSquared(l.subtract(D,C,rs));if(y/=l.magnitudeSquared(l.subtract(x,C,rs)),u(c)){const w=W.fromArray(c,E*4,dl),S=W.fromArray(c,v*4,dl),I=A.lerp(w.x,S.x,y),k=A.lerp(w.y,S.y,y),V=A.lerp(w.z,S.z,y),H=A.lerp(w.w,S.w,y);for(p=E*4;p<E*4+2*4;++p)R.color.values.push(c[p]);for(R.color.values.push(I,k,V,H),R.color.values.push(I,k,V,H),F.color.values.push(I,k,V,H),F.color.values.push(I,k,V,H),p=v*4;p<v*4+2*4;++p)F.color.values.push(c[p])}if(u(s)){const w=U.fromArray(s,E*2,hl),S=U.fromArray(s,(m+3)*2,ug),I=A.lerp(w.x,S.x,y);for(p=E*2;p<E*2+2*2;++p)R.st.values.push(s[p]);for(R.st.values.push(I,w.y),R.st.values.push(I,S.y),F.st.values.push(I,w.y),F.st.values.push(I,S.y),p=v*2;p<v*2+2*2;++p)F.st.values.push(s[p])}_=R.position.values.length/3-4,N.push(_,_+2,_+1),N.push(_+1,_+2,_+3),_=F.position.values.length/3-4,q.push(_,_+2,_+1),q.push(_+1,_+2,_+3)}else{let B,L;for(C.y<0?(B=d.attributes,L=d.indices):(B=f.attributes,L=f.indices),B.position.values.push(C.x,C.y,C.z),B.position.values.push(C.x,C.y,C.z),B.position.values.push(x.x,x.y,x.z),B.position.values.push(x.x,x.y,x.z),p=m*3;p<m*3+4*3;++p)B.prevPosition.values.push(i[p]),B.nextPosition.values.push(a[p]);for(p=m*2;p<m*2+4*2;++p)B.expandAndWidth.values.push(r[p]),u(s)&&B.st.values.push(s[p]);if(u(c))for(p=m*4;p<m*4+4*4;++p)B.color.values.push(c[p]);_=B.position.values.length/3-4,L.push(_,_+2,_+1),L.push(_+1,_+2,_+3)}}g&&(ml(d),ml(f)),Gs(e,d,f)}ze.splitLongitude=function(e){if(!u(e))throw new T("instance is required.");const t=e.geometry,n=t.boundingSphere;if(u(n)&&(n.center.x-n.radius>0||Q.intersectPlane(n,Te.ORIGIN_ZX_PLANE)!==Ke.INTERSECTING))return e;if(t.geometryType!==ri.NONE)switch(t.geometryType){case ri.POLYLINES:_g(e);break;case ri.TRIANGLES:fl(e);break;case ri.LINES:ul(e);break}else tg(t),t.primitiveType===xe.TRIANGLES?fl(e):t.primitiveType===xe.LINES&&ul(e);return e};function Oa(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n*6<1?e+(t-e)*6*n:n*2<1?t:n*3<2?e+(t-e)*(2/3-n)*6:e}function O(e,t,n,o){this.red=e??1,this.green=t??1,this.blue=n??1,this.alpha=o??1}O.fromCartesian4=function(e,t){return h.typeOf.object("cartesian",e),u(t)?(t.red=e.x,t.green=e.y,t.blue=e.z,t.alpha=e.w,t):new O(e.x,e.y,e.z,e.w)};O.fromBytes=function(e,t,n,o,i){return e=O.byteToFloat(e??255),t=O.byteToFloat(t??255),n=O.byteToFloat(n??255),o=O.byteToFloat(o??255),u(i)?(i.red=e,i.green=t,i.blue=n,i.alpha=o,i):new O(e,t,n,o)};O.fromAlpha=function(e,t,n){return h.typeOf.object("color",e),h.typeOf.number("alpha",t),u(n)?(n.red=e.red,n.green=e.green,n.blue=e.blue,n.alpha=t,n):new O(e.red,e.green,e.blue,t)};let Sa,ks,Sn;ot.supportsTypedArrays()&&(Sa=new ArrayBuffer(4),ks=new Uint32Array(Sa),Sn=new Uint8Array(Sa));O.fromRgba=function(e,t){return ks[0]=e,O.fromBytes(Sn[0],Sn[1],Sn[2],Sn[3],t)};O.fromHsl=function(e,t,n,o,i){e=(e??0)%1,t=t??0,n=n??0,o=o??1;let a=n,r=n,s=n;if(t!==0){let c;n<.5?c=n*(1+t):c=n+t-n*t;const f=2*n-c;a=Oa(f,c,e+1/3),r=Oa(f,c,e),s=Oa(f,c,e-1/3)}return u(i)?(i.red=a,i.green=r,i.blue=s,i.alpha=o,i):new O(a,r,s,o)};O.fromRandom=function(e,t){e=e??ue.EMPTY_OBJECT;let n=e.red;if(!u(n)){const r=e.minimumRed??0,s=e.maximumRed??1;h.typeOf.number.lessThanOrEquals("minimumRed",r,s),n=r+A.nextRandomNumber()*(s-r)}let o=e.green;if(!u(o)){const r=e.minimumGreen??0,s=e.maximumGreen??1;h.typeOf.number.lessThanOrEquals("minimumGreen",r,s),o=r+A.nextRandomNumber()*(s-r)}let i=e.blue;if(!u(i)){const r=e.minimumBlue??0,s=e.maximumBlue??1;h.typeOf.number.lessThanOrEquals("minimumBlue",r,s),i=r+A.nextRandomNumber()*(s-r)}let a=e.alpha;if(!u(a)){const r=e.minimumAlpha??0,s=e.maximumAlpha??1;h.typeOf.number.lessThanOrEquals("minimumAlpha",r,s),a=r+A.nextRandomNumber()*(s-r)}return u(t)?(t.red=n,t.green=o,t.blue=i,t.alpha=a,t):new O(n,o,i,a)};const gg=/^#([0-9a-f])([0-9a-f])([0-9a-f])([0-9a-f])?$/i,yg=/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})?$/i,bg=/^rgba?\s*\(\s*([0-9.]+%?)\s*[,\s]+\s*([0-9.]+%?)\s*[,\s]+\s*([0-9.]+%?)(?:\s*[,\s/]+\s*([0-9.]+))?\s*\)$/i,Tg=/^hsla?\s*\(\s*([0-9.]+)\s*[,\s]+\s*([0-9.]+%)\s*[,\s]+\s*([0-9.]+%)(?:\s*[,\s/]+\s*([0-9.]+))?\s*\)$/i;O.fromCssColorString=function(e,t){h.typeOf.string("color",e),u(t)||(t=new O),e=e.trim();const n=O[e.toUpperCase()];if(u(n))return O.clone(n,t),t;let o=gg.exec(e);return o!==null?(t.red=parseInt(o[1],16)/15,t.green=parseInt(o[2],16)/15,t.blue=parseInt(o[3],16)/15,t.alpha=parseInt(o[4]??"f",16)/15,t):(o=yg.exec(e),o!==null?(t.red=parseInt(o[1],16)/255,t.green=parseInt(o[2],16)/255,t.blue=parseInt(o[3],16)/255,t.alpha=parseInt(o[4]??"ff",16)/255,t):(o=bg.exec(e),o!==null?(t.red=parseFloat(o[1])/(o[1].substr(-1)==="%"?100:255),t.green=parseFloat(o[2])/(o[2].substr(-1)==="%"?100:255),t.blue=parseFloat(o[3])/(o[3].substr(-1)==="%"?100:255),t.alpha=parseFloat(o[4]??"1.0"),t):(o=Tg.exec(e),o!==null?O.fromHsl(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,parseFloat(o[4]??"1.0"),t):(t=void 0,t))))};O.packedLength=4;O.pack=function(e,t,n){return h.typeOf.object("value",e),h.defined("array",t),n=n??0,t[n++]=e.red,t[n++]=e.green,t[n++]=e.blue,t[n]=e.alpha,t};O.unpack=function(e,t,n){return h.defined("array",e),t=t??0,u(n)||(n=new O),n.red=e[t++],n.green=e[t++],n.blue=e[t++],n.alpha=e[t],n};O.byteToFloat=function(e){return e/255};O.floatToByte=function(e){return e===1?255:e*256|0};O.clone=function(e,t){if(u(e))return u(t)?(t.red=e.red,t.green=e.green,t.blue=e.blue,t.alpha=e.alpha,t):new O(e.red,e.green,e.blue,e.alpha)};O.equals=function(e,t){return e===t||u(e)&&u(t)&&e.red===t.red&&e.green===t.green&&e.blue===t.blue&&e.alpha===t.alpha};O.equalsArray=function(e,t,n){return e.red===t[n]&&e.green===t[n+1]&&e.blue===t[n+2]&&e.alpha===t[n+3]};O.prototype.clone=function(e){return O.clone(this,e)};O.prototype.equals=function(e){return O.equals(this,e)};O.prototype.equalsEpsilon=function(e,t){return this===e||u(e)&&Math.abs(this.red-e.red)<=t&&Math.abs(this.green-e.green)<=t&&Math.abs(this.blue-e.blue)<=t&&Math.abs(this.alpha-e.alpha)<=t};O.prototype.toString=function(){return`(${this.red}, ${this.green}, ${this.blue}, ${this.alpha})`};O.prototype.toCssColorString=function(){const e=O.floatToByte(this.red),t=O.floatToByte(this.green),n=O.floatToByte(this.blue);return this.alpha===1?`rgb(${e},${t},${n})`:`rgba(${e},${t},${n},${this.alpha})`};O.prototype.toCssHexString=function(){let e=O.floatToByte(this.red).toString(16);e.length<2&&(e=`0${e}`);let t=O.floatToByte(this.green).toString(16);t.length<2&&(t=`0${t}`);let n=O.floatToByte(this.blue).toString(16);if(n.length<2&&(n=`0${n}`),this.alpha<1){let o=O.floatToByte(this.alpha).toString(16);return o.length<2&&(o=`0${o}`),`#${e}${t}${n}${o}`}return`#${e}${t}${n}`};O.prototype.toBytes=function(e){const t=O.floatToByte(this.red),n=O.floatToByte(this.green),o=O.floatToByte(this.blue),i=O.floatToByte(this.alpha);return u(e)?(e[0]=t,e[1]=n,e[2]=o,e[3]=i,e):[t,n,o,i]};O.prototype.toRgba=function(){return Sn[0]=O.floatToByte(this.red),Sn[1]=O.floatToByte(this.green),Sn[2]=O.floatToByte(this.blue),Sn[3]=O.floatToByte(this.alpha),ks[0]};O.prototype.brighten=function(e,t){return h.typeOf.number("magnitude",e),h.typeOf.number.greaterThanOrEquals("magnitude",e,0),h.typeOf.object("result",t),e=1-e,t.red=1-(1-this.red)*e,t.green=1-(1-this.green)*e,t.blue=1-(1-this.blue)*e,t.alpha=this.alpha,t};O.prototype.darken=function(e,t){return h.typeOf.number("magnitude",e),h.typeOf.number.greaterThanOrEquals("magnitude",e,0),h.typeOf.object("result",t),e=1-e,t.red=this.red*e,t.green=this.green*e,t.blue=this.blue*e,t.alpha=this.alpha,t};O.prototype.withAlpha=function(e,t){return O.fromAlpha(this,e,t)};O.add=function(e,t,n){return h.typeOf.object("left",e),h.typeOf.object("right",t),h.typeOf.object("result",n),n.red=e.red+t.red,n.green=e.green+t.green,n.blue=e.blue+t.blue,n.alpha=e.alpha+t.alpha,n};O.subtract=function(e,t,n){return h.typeOf.object("left",e),h.typeOf.object("right",t),h.typeOf.object("result",n),n.red=e.red-t.red,n.green=e.green-t.green,n.blue=e.blue-t.blue,n.alpha=e.alpha-t.alpha,n};O.multiply=function(e,t,n){return h.typeOf.object("left",e),h.typeOf.object("right",t),h.typeOf.object("result",n),n.red=e.red*t.red,n.green=e.green*t.green,n.blue=e.blue*t.blue,n.alpha=e.alpha*t.alpha,n};O.divide=function(e,t,n){return h.typeOf.object("left",e),h.typeOf.object("right",t),h.typeOf.object("result",n),n.red=e.red/t.red,n.green=e.green/t.green,n.blue=e.blue/t.blue,n.alpha=e.alpha/t.alpha,n};O.mod=function(e,t,n){return h.typeOf.object("left",e),h.typeOf.object("right",t),h.typeOf.object("result",n),n.red=e.red%t.red,n.green=e.green%t.green,n.blue=e.blue%t.blue,n.alpha=e.alpha%t.alpha,n};O.lerp=function(e,t,n,o){return h.typeOf.object("start",e),h.typeOf.object("end",t),h.typeOf.number("t",n),h.typeOf.object("result",o),o.red=A.lerp(e.red,t.red,n),o.green=A.lerp(e.green,t.green,n),o.blue=A.lerp(e.blue,t.blue,n),o.alpha=A.lerp(e.alpha,t.alpha,n),o};O.multiplyByScalar=function(e,t,n){return h.typeOf.object("color",e),h.typeOf.number("scalar",t),h.typeOf.object("result",n),n.red=e.red*t,n.green=e.green*t,n.blue=e.blue*t,n.alpha=e.alpha*t,n};O.divideByScalar=function(e,t,n){return h.typeOf.object("color",e),h.typeOf.number("scalar",t),h.typeOf.object("result",n),n.red=e.red/t,n.green=e.green/t,n.blue=e.blue/t,n.alpha=e.alpha/t,n};O.ALICEBLUE=Object.freeze(O.fromCssColorString("#F0F8FF"));O.ANTIQUEWHITE=Object.freeze(O.fromCssColorString("#FAEBD7"));O.AQUA=Object.freeze(O.fromCssColorString("#00FFFF"));O.AQUAMARINE=Object.freeze(O.fromCssColorString("#7FFFD4"));O.AZURE=Object.freeze(O.fromCssColorString("#F0FFFF"));O.BEIGE=Object.freeze(O.fromCssColorString("#F5F5DC"));O.BISQUE=Object.freeze(O.fromCssColorString("#FFE4C4"));O.BLACK=Object.freeze(O.fromCssColorString("#000000"));O.BLANCHEDALMOND=Object.freeze(O.fromCssColorString("#FFEBCD"));O.BLUE=Object.freeze(O.fromCssColorString("#0000FF"));O.BLUEVIOLET=Object.freeze(O.fromCssColorString("#8A2BE2"));O.BROWN=Object.freeze(O.fromCssColorString("#A52A2A"));O.BURLYWOOD=Object.freeze(O.fromCssColorString("#DEB887"));O.CADETBLUE=Object.freeze(O.fromCssColorString("#5F9EA0"));O.CHARTREUSE=Object.freeze(O.fromCssColorString("#7FFF00"));O.CHOCOLATE=Object.freeze(O.fromCssColorString("#D2691E"));O.CORAL=Object.freeze(O.fromCssColorString("#FF7F50"));O.CORNFLOWERBLUE=Object.freeze(O.fromCssColorString("#6495ED"));O.CORNSILK=Object.freeze(O.fromCssColorString("#FFF8DC"));O.CRIMSON=Object.freeze(O.fromCssColorString("#DC143C"));O.CYAN=Object.freeze(O.fromCssColorString("#00FFFF"));O.DARKBLUE=Object.freeze(O.fromCssColorString("#00008B"));O.DARKCYAN=Object.freeze(O.fromCssColorString("#008B8B"));O.DARKGOLDENROD=Object.freeze(O.fromCssColorString("#B8860B"));O.DARKGRAY=Object.freeze(O.fromCssColorString("#A9A9A9"));O.DARKGREEN=Object.freeze(O.fromCssColorString("#006400"));O.DARKGREY=O.DARKGRAY;O.DARKKHAKI=Object.freeze(O.fromCssColorString("#BDB76B"));O.DARKMAGENTA=Object.freeze(O.fromCssColorString("#8B008B"));O.DARKOLIVEGREEN=Object.freeze(O.fromCssColorString("#556B2F"));O.DARKORANGE=Object.freeze(O.fromCssColorString("#FF8C00"));O.DARKORCHID=Object.freeze(O.fromCssColorString("#9932CC"));O.DARKRED=Object.freeze(O.fromCssColorString("#8B0000"));O.DARKSALMON=Object.freeze(O.fromCssColorString("#E9967A"));O.DARKSEAGREEN=Object.freeze(O.fromCssColorString("#8FBC8F"));O.DARKSLATEBLUE=Object.freeze(O.fromCssColorString("#483D8B"));O.DARKSLATEGRAY=Object.freeze(O.fromCssColorString("#2F4F4F"));O.DARKSLATEGREY=O.DARKSLATEGRAY;O.DARKTURQUOISE=Object.freeze(O.fromCssColorString("#00CED1"));O.DARKVIOLET=Object.freeze(O.fromCssColorString("#9400D3"));O.DEEPPINK=Object.freeze(O.fromCssColorString("#FF1493"));O.DEEPSKYBLUE=Object.freeze(O.fromCssColorString("#00BFFF"));O.DIMGRAY=Object.freeze(O.fromCssColorString("#696969"));O.DIMGREY=O.DIMGRAY;O.DODGERBLUE=Object.freeze(O.fromCssColorString("#1E90FF"));O.FIREBRICK=Object.freeze(O.fromCssColorString("#B22222"));O.FLORALWHITE=Object.freeze(O.fromCssColorString("#FFFAF0"));O.FORESTGREEN=Object.freeze(O.fromCssColorString("#228B22"));O.FUCHSIA=Object.freeze(O.fromCssColorString("#FF00FF"));O.GAINSBORO=Object.freeze(O.fromCssColorString("#DCDCDC"));O.GHOSTWHITE=Object.freeze(O.fromCssColorString("#F8F8FF"));O.GOLD=Object.freeze(O.fromCssColorString("#FFD700"));O.GOLDENROD=Object.freeze(O.fromCssColorString("#DAA520"));O.GRAY=Object.freeze(O.fromCssColorString("#808080"));O.GREEN=Object.freeze(O.fromCssColorString("#008000"));O.GREENYELLOW=Object.freeze(O.fromCssColorString("#ADFF2F"));O.GREY=O.GRAY;O.HONEYDEW=Object.freeze(O.fromCssColorString("#F0FFF0"));O.HOTPINK=Object.freeze(O.fromCssColorString("#FF69B4"));O.INDIANRED=Object.freeze(O.fromCssColorString("#CD5C5C"));O.INDIGO=Object.freeze(O.fromCssColorString("#4B0082"));O.IVORY=Object.freeze(O.fromCssColorString("#FFFFF0"));O.KHAKI=Object.freeze(O.fromCssColorString("#F0E68C"));O.LAVENDER=Object.freeze(O.fromCssColorString("#E6E6FA"));O.LAVENDAR_BLUSH=Object.freeze(O.fromCssColorString("#FFF0F5"));O.LAWNGREEN=Object.freeze(O.fromCssColorString("#7CFC00"));O.LEMONCHIFFON=Object.freeze(O.fromCssColorString("#FFFACD"));O.LIGHTBLUE=Object.freeze(O.fromCssColorString("#ADD8E6"));O.LIGHTCORAL=Object.freeze(O.fromCssColorString("#F08080"));O.LIGHTCYAN=Object.freeze(O.fromCssColorString("#E0FFFF"));O.LIGHTGOLDENRODYELLOW=Object.freeze(O.fromCssColorString("#FAFAD2"));O.LIGHTGRAY=Object.freeze(O.fromCssColorString("#D3D3D3"));O.LIGHTGREEN=Object.freeze(O.fromCssColorString("#90EE90"));O.LIGHTGREY=O.LIGHTGRAY;O.LIGHTPINK=Object.freeze(O.fromCssColorString("#FFB6C1"));O.LIGHTSEAGREEN=Object.freeze(O.fromCssColorString("#20B2AA"));O.LIGHTSKYBLUE=Object.freeze(O.fromCssColorString("#87CEFA"));O.LIGHTSLATEGRAY=Object.freeze(O.fromCssColorString("#778899"));O.LIGHTSLATEGREY=O.LIGHTSLATEGRAY;O.LIGHTSTEELBLUE=Object.freeze(O.fromCssColorString("#B0C4DE"));O.LIGHTYELLOW=Object.freeze(O.fromCssColorString("#FFFFE0"));O.LIME=Object.freeze(O.fromCssColorString("#00FF00"));O.LIMEGREEN=Object.freeze(O.fromCssColorString("#32CD32"));O.LINEN=Object.freeze(O.fromCssColorString("#FAF0E6"));O.MAGENTA=Object.freeze(O.fromCssColorString("#FF00FF"));O.MAROON=Object.freeze(O.fromCssColorString("#800000"));O.MEDIUMAQUAMARINE=Object.freeze(O.fromCssColorString("#66CDAA"));O.MEDIUMBLUE=Object.freeze(O.fromCssColorString("#0000CD"));O.MEDIUMORCHID=Object.freeze(O.fromCssColorString("#BA55D3"));O.MEDIUMPURPLE=Object.freeze(O.fromCssColorString("#9370DB"));O.MEDIUMSEAGREEN=Object.freeze(O.fromCssColorString("#3CB371"));O.MEDIUMSLATEBLUE=Object.freeze(O.fromCssColorString("#7B68EE"));O.MEDIUMSPRINGGREEN=Object.freeze(O.fromCssColorString("#00FA9A"));O.MEDIUMTURQUOISE=Object.freeze(O.fromCssColorString("#48D1CC"));O.MEDIUMVIOLETRED=Object.freeze(O.fromCssColorString("#C71585"));O.MIDNIGHTBLUE=Object.freeze(O.fromCssColorString("#191970"));O.MINTCREAM=Object.freeze(O.fromCssColorString("#F5FFFA"));O.MISTYROSE=Object.freeze(O.fromCssColorString("#FFE4E1"));O.MOCCASIN=Object.freeze(O.fromCssColorString("#FFE4B5"));O.NAVAJOWHITE=Object.freeze(O.fromCssColorString("#FFDEAD"));O.NAVY=Object.freeze(O.fromCssColorString("#000080"));O.OLDLACE=Object.freeze(O.fromCssColorString("#FDF5E6"));O.OLIVE=Object.freeze(O.fromCssColorString("#808000"));O.OLIVEDRAB=Object.freeze(O.fromCssColorString("#6B8E23"));O.ORANGE=Object.freeze(O.fromCssColorString("#FFA500"));O.ORANGERED=Object.freeze(O.fromCssColorString("#FF4500"));O.ORCHID=Object.freeze(O.fromCssColorString("#DA70D6"));O.PALEGOLDENROD=Object.freeze(O.fromCssColorString("#EEE8AA"));O.PALEGREEN=Object.freeze(O.fromCssColorString("#98FB98"));O.PALETURQUOISE=Object.freeze(O.fromCssColorString("#AFEEEE"));O.PALEVIOLETRED=Object.freeze(O.fromCssColorString("#DB7093"));O.PAPAYAWHIP=Object.freeze(O.fromCssColorString("#FFEFD5"));O.PEACHPUFF=Object.freeze(O.fromCssColorString("#FFDAB9"));O.PERU=Object.freeze(O.fromCssColorString("#CD853F"));O.PINK=Object.freeze(O.fromCssColorString("#FFC0CB"));O.PLUM=Object.freeze(O.fromCssColorString("#DDA0DD"));O.POWDERBLUE=Object.freeze(O.fromCssColorString("#B0E0E6"));O.PURPLE=Object.freeze(O.fromCssColorString("#800080"));O.RED=Object.freeze(O.fromCssColorString("#FF0000"));O.ROSYBROWN=Object.freeze(O.fromCssColorString("#BC8F8F"));O.ROYALBLUE=Object.freeze(O.fromCssColorString("#4169E1"));O.SADDLEBROWN=Object.freeze(O.fromCssColorString("#8B4513"));O.SALMON=Object.freeze(O.fromCssColorString("#FA8072"));O.SANDYBROWN=Object.freeze(O.fromCssColorString("#F4A460"));O.SEAGREEN=Object.freeze(O.fromCssColorString("#2E8B57"));O.SEASHELL=Object.freeze(O.fromCssColorString("#FFF5EE"));O.SIENNA=Object.freeze(O.fromCssColorString("#A0522D"));O.SILVER=Object.freeze(O.fromCssColorString("#C0C0C0"));O.SKYBLUE=Object.freeze(O.fromCssColorString("#87CEEB"));O.SLATEBLUE=Object.freeze(O.fromCssColorString("#6A5ACD"));O.SLATEGRAY=Object.freeze(O.fromCssColorString("#708090"));O.SLATEGREY=O.SLATEGRAY;O.SNOW=Object.freeze(O.fromCssColorString("#FFFAFA"));O.SPRINGGREEN=Object.freeze(O.fromCssColorString("#00FF7F"));O.STEELBLUE=Object.freeze(O.fromCssColorString("#4682B4"));O.TAN=Object.freeze(O.fromCssColorString("#D2B48C"));O.TEAL=Object.freeze(O.fromCssColorString("#008080"));O.THISTLE=Object.freeze(O.fromCssColorString("#D8BFD8"));O.TOMATO=Object.freeze(O.fromCssColorString("#FF6347"));O.TURQUOISE=Object.freeze(O.fromCssColorString("#40E0D0"));O.VIOLET=Object.freeze(O.fromCssColorString("#EE82EE"));O.WHEAT=Object.freeze(O.fromCssColorString("#F5DEB3"));O.WHITE=Object.freeze(O.fromCssColorString("#FFFFFF"));O.WHITESMOKE=Object.freeze(O.fromCssColorString("#F5F5F5"));O.YELLOW=Object.freeze(O.fromCssColorString("#FFFF00"));O.YELLOWGREEN=Object.freeze(O.fromCssColorString("#9ACD32"));O.TRANSPARENT=Object.freeze(new O(0,0,0,0));function Bo(e,t,n,o,i){this._format=e,this._datatype=t,this._width=n,this._height=o,this._buffer=i}Object.defineProperties(Bo.prototype,{internalFormat:{get:function(){return this._format}},pixelDatatype:{get:function(){return this._datatype}},width:{get:function(){return this._width}},height:{get:function(){return this._height}},bufferView:{get:function(){return this._buffer}},arrayBufferView:{get:function(){return this._buffer}}});Bo.clone=function(e){if(u(e))return new Bo(e._format,e._datatype,e._width,e._height,e._buffer)};Bo.prototype.clone=function(){return Bo.clone(this)};const pl=A.EPSILON10;function co(e,t,n,o){if(h.defined("equalsEpsilon",t),!u(e))return;n=n??!1;const i=u(o),a=e.length;if(a<2)return e;let r,s=e[0],c,f,d=0,m=-1;for(r=1;r<a;++r)c=e[r],t(s,c,pl)?(u(f)||(f=e.slice(0,r),d=r-1,m=0),i&&o.push(r)):(u(f)&&(f.push(c),d=r,i&&(m=o.length)),s=c);return n&&t(e[0],e[a-1],pl)&&(i&&(u(f)?o.splice(m,0,d):o.push(a-1)),u(f)?f.length-=1:f=e.slice(0,-1)),u(f)?f:e}const ao={},Eg=new l,ou=new l,iu=new l,ru=new l,au=new Ae;ao.validOutline=function(e){h.defined("positions",e);const n=Ae.fromPoints(e,au).halfAxes,o=P.getColumn(n,0,ou),i=P.getColumn(n,1,iu),a=P.getColumn(n,2,ru),r=l.magnitude(o),s=l.magnitude(i),c=l.magnitude(a);return!(r===0&&(s===0||c===0)||s===0&&c===0)};ao.computeProjectTo2DArguments=function(e,t,n,o){h.defined("positions",e),h.defined("centerResult",t),h.defined("planeAxis1Result",n),h.defined("planeAxis2Result",o);const i=Ae.fromPoints(e,au),a=i.halfAxes,r=P.getColumn(a,0,ou),s=P.getColumn(a,1,iu),c=P.getColumn(a,2,ru),f=l.magnitude(r),d=l.magnitude(s),m=l.magnitude(c),p=Math.min(f,d,m);if(f===0&&(d===0||m===0)||d===0&&m===0)return!1;let _,g;return(p===d||p===m)&&(_=r),p===f?_=s:p===m&&(g=s),(p===f||p===d)&&(g=c),l.normalize(_,n),l.normalize(g,o),l.clone(i.center,t),!0};function su(e,t,n,o,i){const a=l.subtract(e,t,Eg),r=l.dot(n,a),s=l.dot(o,a);return U.fromElements(r,s,i)}ao.createProjectPointsTo2DFunction=function(e,t,n){return function(o){const i=new Array(o.length);for(let a=0;a<o.length;a++)i[a]=su(o[a],e,t,n);return i}};ao.createProjectPointTo2DFunction=function(e,t,n){return function(o,i){return su(o,e,t,n,i)}};function as(e,t,n){if(e===0)return t*n;const o=e*e,i=o*o,a=i*o,r=a*o,s=r*o,c=s*o,f=n,d=Math.sin(2*f),m=Math.sin(4*f),p=Math.sin(6*f),_=Math.sin(8*f),g=Math.sin(10*f),b=Math.sin(12*f);return t*((1-o/4-3*i/64-5*a/256-175*r/16384-441*s/65536-4851*c/1048576)*f-(3*o/8+3*i/32+45*a/1024+105*r/4096+2205*s/131072+6237*c/524288)*d+(15*i/256+45*a/1024+525*r/16384+1575*s/65536+155925*c/8388608)*m-(35*a/3072+175*r/12288+3675*s/262144+13475*c/1048576)*p+(315*r/131072+2205*s/524288+43659*c/8388608)*_-(693*s/1310720+6237*c/5242880)*g+1001*c/8388608*b)}function wg(e,t,n){const o=e/n;if(t===0)return o;const i=o*o,a=i*o,r=a*o,s=t,c=s*s,f=c*c,d=f*c,m=d*c,p=m*c,_=p*c,g=Math.sin(2*o),b=Math.cos(2*o),E=Math.sin(4*o),v=Math.cos(4*o),C=Math.sin(6*o),x=Math.cos(6*o),R=Math.sin(8*o),N=Math.cos(8*o),F=Math.sin(10*o),q=Math.cos(10*o),D=Math.sin(12*o);return o+o*c/4+7*o*f/64+15*o*d/256+579*o*m/16384+1515*o*p/65536+16837*o*_/1048576+(3*o*f/16+45*o*d/256-o*(32*i-561)*m/4096-o*(232*i-1677)*p/16384+o*(399985-90560*i+512*r)*_/5242880)*b+(21*o*d/256+483*o*m/4096-o*(224*i-1969)*p/16384-o*(33152*i-112599)*_/1048576)*v+(151*o*m/4096+4681*o*p/65536+1479*o*_/16384-453*a*_/32768)*x+(1097*o*p/65536+42783*o*_/1048576)*N+8011*o*_/1048576*q+(3*c/8+3*f/16+213*d/2048-3*i*d/64+255*m/4096-33*i*m/512+20861*p/524288-33*i*p/512+r*p/1024+28273*_/1048576-471*i*_/8192+9*r*_/4096)*g+(21*f/256+21*d/256+533*m/8192-21*i*m/512+197*p/4096-315*i*p/4096+584039*_/16777216-12517*i*_/131072+7*r*_/2048)*E+(151*d/6144+151*m/4096+5019*p/131072-453*i*p/16384+26965*_/786432-8607*i*_/131072)*C+(1097*m/131072+1097*p/65536+225797*_/10485760-1097*i*_/65536)*R+(8011*p/2621440+8011*_/1048576)*F+293393*_/251658240*D}function Uo(e,t){if(e===0)return Math.log(Math.tan(.5*(A.PI_OVER_TWO+t)));const n=e*Math.sin(t);return Math.log(Math.tan(.5*(A.PI_OVER_TWO+t)))-e/2*Math.log((1+n)/(1-n))}function Ag(e,t,n,o,i){const a=Uo(e._ellipticity,n),r=Uo(e._ellipticity,i);return Math.atan2(A.negativePiToPi(o-t),r-a)}function Og(e,t,n,o,i,a,r){const s=e._heading,c=a-o;let f=0;if(A.equalsEpsilon(Math.abs(s),A.PI_OVER_TWO,A.EPSILON8))if(t===n)f=t*Math.cos(i)*A.negativePiToPi(c);else{const d=Math.sin(i);f=t*Math.cos(i)*A.negativePiToPi(c)/Math.sqrt(1-e._ellipticitySquared*d*d)}else{const d=as(e._ellipticity,t,i);f=(as(e._ellipticity,t,r)-d)/Math.cos(s)}return Math.abs(f)}const Sg=new l,xa=new l;function cu(e,t,n,o){const i=l.normalize(o.cartographicToCartesian(t,xa),Sg),a=l.normalize(o.cartographicToCartesian(n,xa),xa);h.typeOf.number.greaterThanOrEquals("value",Math.abs(Math.abs(l.angleBetween(i,a))-Math.PI),.0125);const r=o.maximumRadius,s=o.minimumRadius,c=r*r,f=s*s;e._ellipticitySquared=(c-f)/c,e._ellipticity=Math.sqrt(e._ellipticitySquared),e._start=ne.clone(t,e._start),e._start.height=0,e._end=ne.clone(n,e._end),e._end.height=0,e._heading=Ag(e,t.longitude,t.latitude,n.longitude,n.latitude),e._distance=Og(e,o.maximumRadius,o.minimumRadius,t.longitude,t.latitude,n.longitude,n.latitude)}function lu(e,t,n,o,i,a){if(n===0)return ne.clone(e,a);const r=i*i;let s,c,f;if(Math.abs(A.PI_OVER_TWO-Math.abs(t))>A.EPSILON8){const d=as(i,o,e.latitude),m=n*Math.cos(t),p=d+m;if(c=wg(p,i,o),Math.abs(t)<A.EPSILON10)s=A.negativePiToPi(e.longitude);else{const _=Uo(i,e.latitude),g=Uo(i,c);f=Math.tan(t)*(g-_),s=A.negativePiToPi(e.longitude+f)}}else{c=e.latitude;let d;if(i===0)d=o*Math.cos(e.latitude);else{const m=Math.sin(e.latitude);d=o*Math.cos(e.latitude)/Math.sqrt(1-r*m*m)}f=n/d,t>0?s=A.negativePiToPi(e.longitude+f):s=A.negativePiToPi(e.longitude-f)}return u(a)?(a.longitude=s,a.latitude=c,a.height=0,a):new ne(s,c,0)}function Et(e,t,n){const o=n??ae.default;this._ellipsoid=o,this._start=new ne,this._end=new ne,this._heading=void 0,this._distance=void 0,this._ellipticity=void 0,this._ellipticitySquared=void 0,u(e)&&u(t)&&cu(this,e,t,o)}Object.defineProperties(Et.prototype,{ellipsoid:{get:function(){return this._ellipsoid}},surfaceDistance:{get:function(){return h.defined("distance",this._distance),this._distance}},start:{get:function(){return this._start}},end:{get:function(){return this._end}},heading:{get:function(){return h.defined("distance",this._distance),this._heading}}});Et.fromStartHeadingDistance=function(e,t,n,o,i){h.defined("start",e),h.defined("heading",t),h.defined("distance",n),h.typeOf.number.greaterThan("distance",n,0);const a=o??ae.default,r=a.maximumRadius,s=a.minimumRadius,c=r*r,f=s*s,d=Math.sqrt((c-f)/c);t=A.negativePiToPi(t);const m=lu(e,t,n,a.maximumRadius,d);return!u(i)||u(o)&&!o.equals(i.ellipsoid)?new Et(e,m,a):(i.setEndPoints(e,m),i)};Et.prototype.setEndPoints=function(e,t){h.defined("start",e),h.defined("end",t),cu(this,e,t,this._ellipsoid)};Et.prototype.interpolateUsingFraction=function(e,t){return this.interpolateUsingSurfaceDistance(e*this._distance,t)};Et.prototype.interpolateUsingSurfaceDistance=function(e,t){if(h.typeOf.number("distance",e),!u(this._distance)||this._distance===0)throw new T("EllipsoidRhumbLine must have distinct start and end set.");return lu(this._start,this._heading,e,this._ellipsoid.maximumRadius,this._ellipticity,t)};Et.prototype.findIntersectionWithLongitude=function(e,t){if(h.typeOf.number("intersectionLongitude",e),!u(this._distance)||this._distance===0)throw new T("EllipsoidRhumbLine must have distinct start and end set.");const n=this._ellipticity,o=this._heading,i=Math.abs(o),a=this._start;if(e=A.negativePiToPi(e),A.equalsEpsilon(Math.abs(e),Math.PI,A.EPSILON14)&&(e=A.sign(a.longitude)*Math.PI),u(t)||(t=new ne),Math.abs(A.PI_OVER_TWO-i)<=A.EPSILON8)return t.longitude=e,t.latitude=a.latitude,t.height=0,t;if(A.equalsEpsilon(Math.abs(A.PI_OVER_TWO-i),A.PI_OVER_TWO,A.EPSILON8))return A.equalsEpsilon(e,a.longitude,A.EPSILON12)?void 0:(t.longitude=e,t.latitude=A.PI_OVER_TWO*A.sign(A.PI_OVER_TWO-o),t.height=0,t);const r=a.latitude,s=n*Math.sin(r),c=Math.tan(.5*(A.PI_OVER_TWO+r))*Math.exp((e-a.longitude)/Math.tan(o)),f=(1+s)/(1-s);let d=a.latitude,m;do{m=d;const p=n*Math.sin(m),_=(1+p)/(1-p);d=2*Math.atan(c*Math.pow(_/f,n/2))-A.PI_OVER_TWO}while(!A.equalsEpsilon(d,m,A.EPSILON12));return t.longitude=e,t.latitude=d,t.height=0,t};Et.prototype.findIntersectionWithLatitude=function(e,t){if(h.typeOf.number("intersectionLatitude",e),!u(this._distance)||this._distance===0)throw new T("EllipsoidRhumbLine must have distinct start and end set.");const n=this._ellipticity,o=this._heading,i=this._start;if(A.equalsEpsilon(Math.abs(o),A.PI_OVER_TWO,A.EPSILON8))return;const a=Uo(n,i.latitude),r=Uo(n,e),s=Math.tan(o)*(r-a),c=A.negativePiToPi(i.longitude+s);return u(t)?(t.longitude=c,t.latitude=e,t.height=0,t):new ne(c,e,0)};function ss(e,t){this.positions=u(e)?e:[],this.holes=u(t)?t:[]}function xg(e,t,n=2){const o=t&&t.length,i=o?t[0]*n:e.length;let a=fu(e,0,i,n,!0);const r=[];if(!a||a.next===a.prev)return r;let s,c,f;if(o&&(a=Ig(e,t,a,n)),e.length>80*n){s=e[0],c=e[1];let d=s,m=c;for(let p=n;p<i;p+=n){const _=e[p],g=e[p+1];_<s&&(s=_),g<c&&(c=g),_>d&&(d=_),g>m&&(m=g)}f=Math.max(d-s,m-c),f=f!==0?32767/f:0}return gi(a,r,n,s,c,f,0),r}function fu(e,t,n,o,i){let a;if(i===kg(e,t,n,o)>0)for(let r=t;r<n;r+=o)a=_l(r/o|0,e[r],e[r+1],a);else for(let r=n-o;r>=t;r-=o)a=_l(r/o|0,e[r],e[r+1],a);return a&&Go(a,a.next)&&(bi(a),a=a.next),a}function lo(e,t){if(!e)return e;t||(t=e);let n=e,o;do if(o=!1,!n.steiner&&(Go(n,n.next)||We(n.prev,n,n.next)===0)){if(bi(n),n=t=n.prev,n===n.next)break;o=!0}else n=n.next;while(o||n!==t);return t}function gi(e,t,n,o,i,a,r){if(!e)return;!r&&a&&Lg(e,o,i,a);let s=e;for(;e.prev!==e.next;){const c=e.prev,f=e.next;if(a?vg(e,o,i,a):Cg(e)){t.push(c.i,e.i,f.i),bi(e),e=f.next,s=f.next;continue}if(e=f,e===s){r?r===1?(e=Rg(lo(e),t),gi(e,t,n,o,i,a,2)):r===2&&zg(e,t,n,o,i,a):gi(lo(e),t,n,o,i,a,1);break}}}function Cg(e){const t=e.prev,n=e,o=e.next;if(We(t,n,o)>=0)return!1;const i=t.x,a=n.x,r=o.x,s=t.y,c=n.y,f=o.y,d=Math.min(i,a,r),m=Math.min(s,c,f),p=Math.max(i,a,r),_=Math.max(s,c,f);let g=o.next;for(;g!==t;){if(g.x>=d&&g.x<=p&&g.y>=m&&g.y<=_&&ai(i,s,a,c,r,f,g.x,g.y)&&We(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function vg(e,t,n,o){const i=e.prev,a=e,r=e.next;if(We(i,a,r)>=0)return!1;const s=i.x,c=a.x,f=r.x,d=i.y,m=a.y,p=r.y,_=Math.min(s,c,f),g=Math.min(d,m,p),b=Math.max(s,c,f),E=Math.max(d,m,p),v=cs(_,g,t,n,o),C=cs(b,E,t,n,o);let x=e.prevZ,R=e.nextZ;for(;x&&x.z>=v&&R&&R.z<=C;){if(x.x>=_&&x.x<=b&&x.y>=g&&x.y<=E&&x!==i&&x!==r&&ai(s,d,c,m,f,p,x.x,x.y)&&We(x.prev,x,x.next)>=0||(x=x.prevZ,R.x>=_&&R.x<=b&&R.y>=g&&R.y<=E&&R!==i&&R!==r&&ai(s,d,c,m,f,p,R.x,R.y)&&We(R.prev,R,R.next)>=0))return!1;R=R.nextZ}for(;x&&x.z>=v;){if(x.x>=_&&x.x<=b&&x.y>=g&&x.y<=E&&x!==i&&x!==r&&ai(s,d,c,m,f,p,x.x,x.y)&&We(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;R&&R.z<=C;){if(R.x>=_&&R.x<=b&&R.y>=g&&R.y<=E&&R!==i&&R!==r&&ai(s,d,c,m,f,p,R.x,R.y)&&We(R.prev,R,R.next)>=0)return!1;R=R.nextZ}return!0}function Rg(e,t){let n=e;do{const o=n.prev,i=n.next.next;!Go(o,i)&&hu(o,n,n.next,i)&&yi(o,i)&&yi(i,o)&&(t.push(o.i,n.i,i.i),bi(n),bi(n.next),n=e=i),n=n.next}while(n!==e);return lo(n)}function zg(e,t,n,o,i,a){let r=e;do{let s=r.next.next;for(;s!==r.prev;){if(r.i!==s.i&&Ug(r,s)){let c=du(r,s);r=lo(r,r.next),c=lo(c,c.next),gi(r,t,n,o,i,a,0),gi(c,t,n,o,i,a,0);return}s=s.next}r=r.next}while(r!==e)}function Ig(e,t,n,o){const i=[];for(let a=0,r=t.length;a<r;a++){const s=t[a]*o,c=a<r-1?t[a+1]*o:e.length,f=fu(e,s,c,o,!1);f===f.next&&(f.steiner=!0),i.push(Bg(f))}i.sort(Pg);for(let a=0;a<i.length;a++)n=Mg(i[a],n);return n}function Pg(e,t){let n=e.x-t.x;if(n===0&&(n=e.y-t.y,n===0)){const o=(e.next.y-e.y)/(e.next.x-e.x),i=(t.next.y-t.y)/(t.next.x-t.x);n=o-i}return n}function Mg(e,t){const n=Ng(e,t);if(!n)return t;const o=du(n,e);return lo(o,o.next),lo(n,n.next)}function Ng(e,t){let n=t;const o=e.x,i=e.y;let a=-1/0,r;if(Go(e,n))return n;do{if(Go(e,n.next))return n.next;if(i<=n.y&&i>=n.next.y&&n.next.y!==n.y){const m=n.x+(i-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(m<=o&&m>a&&(a=m,r=n.x<n.next.x?n:n.next,m===o))return r}n=n.next}while(n!==t);if(!r)return null;const s=r,c=r.x,f=r.y;let d=1/0;n=r;do{if(o>=n.x&&n.x>=c&&o!==n.x&&uu(i<f?o:a,i,c,f,i<f?a:o,i,n.x,n.y)){const m=Math.abs(i-n.y)/(o-n.x);yi(n,e)&&(m<d||m===d&&(n.x>r.x||n.x===r.x&&Dg(r,n)))&&(r=n,d=m)}n=n.next}while(n!==s);return r}function Dg(e,t){return We(e.prev,e,t.prev)<0&&We(t.next,e,e.next)<0}function Lg(e,t,n,o){let i=e;do i.z===0&&(i.z=cs(i.x,i.y,t,n,o)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==e);i.prevZ.nextZ=null,i.prevZ=null,Fg(i)}function Fg(e){let t,n=1;do{let o=e,i;e=null;let a=null;for(t=0;o;){t++;let r=o,s=0;for(let f=0;f<n&&(s++,r=r.nextZ,!!r);f++);let c=n;for(;s>0||c>0&&r;)s!==0&&(c===0||!r||o.z<=r.z)?(i=o,o=o.nextZ,s--):(i=r,r=r.nextZ,c--),a?a.nextZ=i:e=i,i.prevZ=a,a=i;o=r}a.nextZ=null,n*=2}while(t>1);return e}function cs(e,t,n,o,i){return e=(e-n)*i|0,t=(t-o)*i|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function Bg(e){let t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function uu(e,t,n,o,i,a,r,s){return(i-r)*(t-s)>=(e-r)*(a-s)&&(e-r)*(o-s)>=(n-r)*(t-s)&&(n-r)*(a-s)>=(i-r)*(o-s)}function ai(e,t,n,o,i,a,r,s){return!(e===r&&t===s)&&uu(e,t,n,o,i,a,r,s)}function Ug(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!Gg(e,t)&&(yi(e,t)&&yi(t,e)&&qg(e,t)&&(We(e.prev,e,t.prev)||We(e,t.prev,t))||Go(e,t)&&We(e.prev,e,e.next)>0&&We(t.prev,t,t.next)>0)}function We(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function Go(e,t){return e.x===t.x&&e.y===t.y}function hu(e,t,n,o){const i=or(We(e,t,n)),a=or(We(e,t,o)),r=or(We(n,o,e)),s=or(We(n,o,t));return!!(i!==a&&r!==s||i===0&&nr(e,n,t)||a===0&&nr(e,o,t)||r===0&&nr(n,e,o)||s===0&&nr(n,t,o))}function nr(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function or(e){return e>0?1:e<0?-1:0}function Gg(e,t){let n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&hu(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function yi(e,t){return We(e.prev,e,e.next)<0?We(e,t,e.next)>=0&&We(e,e.prev,t)>=0:We(e,t,e.prev)<0||We(e,e.next,t)<0}function qg(e,t){let n=e,o=!1;const i=(e.x+t.x)/2,a=(e.y+t.y)/2;do n.y>a!=n.next.y>a&&n.next.y!==n.y&&i<(n.next.x-n.x)*(a-n.y)/(n.next.y-n.y)+n.x&&(o=!o),n=n.next;while(n!==e);return o}function du(e,t){const n=ls(e.i,e.x,e.y),o=ls(t.i,t.x,t.y),i=e.next,a=t.prev;return e.next=t,t.prev=e,n.next=i,i.prev=n,o.next=n,n.prev=o,a.next=o,o.prev=a,o}function _l(e,t,n,o){const i=ls(e,t,n);return o?(i.next=o.next,i.prev=o,o.next.prev=i,o.next=i):(i.prev=i,i.next=i),i}function bi(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function ls(e,t,n){return{i:e,x:t,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function kg(e,t,n,o){let i=0;for(let a=t,r=n-o;a<n;a+=o)i+=(e[r]-e[a])*(e[a+1]+e[r+1]),r=a;return i}const dr={CLOCKWISE:z.CW,COUNTER_CLOCKWISE:z.CCW};dr.validate=function(e){return e===dr.CLOCKWISE||e===dr.COUNTER_CLOCKWISE};const qo=Object.freeze(dr),Vg=new l,jg=new l,Ft={};Ft.computeArea2D=function(e){h.defined("positions",e),h.typeOf.number.greaterThanOrEquals("positions.length",e.length,3);const t=e.length;let n=0;for(let o=t-1,i=0;i<t;o=i++){const a=e[o],r=e[i];n+=a.x*r.y-r.x*a.y}return n*.5};Ft.computeWindingOrder2D=function(e){return Ft.computeArea2D(e)>0?qo.COUNTER_CLOCKWISE:qo.CLOCKWISE};Ft.triangulate=function(e,t){h.defined("positions",e);const n=U.packArray(e);return xg(n,t,2)};const mu=new l,pu=new l,_u=new l,gl=new l,yl=new l,bl=new l,An=new l,gu=new U,yu=new U,bu=new U,Io=new U;Ft.computeSubdivision=function(e,t,n,o,i){i=i??A.RADIANS_PER_DEGREE;const a=u(o);h.typeOf.object("ellipsoid",e),h.defined("positions",t),h.defined("indices",n),h.typeOf.number.greaterThanOrEquals("indices.length",n.length,3),h.typeOf.number.equals("indices.length % 3","0",n.length%3,0),h.typeOf.number.greaterThan("granularity",i,0);const r=n.slice(0);let s;const c=t.length,f=new Array(c*3),d=new Array(c*2);let m=0,p=0;for(s=0;s<c;s++){const x=t[s];if(f[m++]=x.x,f[m++]=x.y,f[m++]=x.z,a){const R=o[s];d[p++]=R.x,d[p++]=R.y}}const _=[],g={},b=e.maximumRadius,E=A.chordLength(i,b),v=E*E;for(;r.length>0;){const x=r.pop(),R=r.pop(),N=r.pop(),F=l.fromArray(f,N*3,mu),q=l.fromArray(f,R*3,pu),D=l.fromArray(f,x*3,_u);let B,L,G;a&&(B=U.fromArray(d,N*2,gu),L=U.fromArray(d,R*2,yu),G=U.fromArray(d,x*2,bu));const Y=l.multiplyByScalar(l.normalize(F,gl),b,gl),y=l.multiplyByScalar(l.normalize(q,yl),b,yl),w=l.multiplyByScalar(l.normalize(D,bl),b,bl),S=l.magnitudeSquared(l.subtract(Y,y,An)),I=l.magnitudeSquared(l.subtract(y,w,An)),k=l.magnitudeSquared(l.subtract(w,Y,An)),V=Math.max(S,I,k);let H,j,$;V>v?S===V?(H=`${Math.min(N,R)} ${Math.max(N,R)}`,s=g[H],u(s)||(j=l.add(F,q,An),l.multiplyByScalar(j,.5,j),f.push(j.x,j.y,j.z),s=f.length/3-1,g[H]=s,a&&($=U.add(B,L,Io),U.multiplyByScalar($,.5,$),d.push($.x,$.y))),r.push(N,s,x),r.push(s,R,x)):I===V?(H=`${Math.min(R,x)} ${Math.max(R,x)}`,s=g[H],u(s)||(j=l.add(q,D,An),l.multiplyByScalar(j,.5,j),f.push(j.x,j.y,j.z),s=f.length/3-1,g[H]=s,a&&($=U.add(L,G,Io),U.multiplyByScalar($,.5,$),d.push($.x,$.y))),r.push(R,s,N),r.push(s,x,N)):k===V&&(H=`${Math.min(x,N)} ${Math.max(x,N)}`,s=g[H],u(s)||(j=l.add(D,F,An),l.multiplyByScalar(j,.5,j),f.push(j.x,j.y,j.z),s=f.length/3-1,g[H]=s,a&&($=U.add(G,B,Io),U.multiplyByScalar($,.5,$),d.push($.x,$.y))),r.push(x,s,R),r.push(s,N,R)):(_.push(N),_.push(R),_.push(x))}const C={attributes:{position:new Oe({componentDatatype:oe.DOUBLE,componentsPerAttribute:3,values:f})},indices:_,primitiveType:xe.TRIANGLES};return a&&(C.attributes.st=new Oe({componentDatatype:oe.FLOAT,componentsPerAttribute:2,values:d})),new Le(C)};const Hg=new ne,Wg=new ne,Yg=new ne,Ca=new ne;Ft.computeRhumbLineSubdivision=function(e,t,n,o,i){i=i??A.RADIANS_PER_DEGREE;const a=u(o);h.typeOf.object("ellipsoid",e),h.defined("positions",t),h.defined("indices",n),h.typeOf.number.greaterThanOrEquals("indices.length",n.length,3),h.typeOf.number.equals("indices.length % 3","0",n.length%3,0),h.typeOf.number.greaterThan("granularity",i,0);const r=n.slice(0);let s;const c=t.length,f=new Array(c*3),d=new Array(c*2);let m=0,p=0;for(s=0;s<c;s++){const N=t[s];if(f[m++]=N.x,f[m++]=N.y,f[m++]=N.z,a){const F=o[s];d[p++]=F.x,d[p++]=F.y}}const _=[],g={},b=e.maximumRadius,E=A.chordLength(i,b),v=new Et(void 0,void 0,e),C=new Et(void 0,void 0,e),x=new Et(void 0,void 0,e);for(;r.length>0;){const N=r.pop(),F=r.pop(),q=r.pop(),D=l.fromArray(f,q*3,mu),B=l.fromArray(f,F*3,pu),L=l.fromArray(f,N*3,_u);let G,Y,y;a&&(G=U.fromArray(d,q*2,gu),Y=U.fromArray(d,F*2,yu),y=U.fromArray(d,N*2,bu));const w=e.cartesianToCartographic(D,Hg),S=e.cartesianToCartographic(B,Wg),I=e.cartesianToCartographic(L,Yg);v.setEndPoints(w,S);const k=v.surfaceDistance;C.setEndPoints(S,I);const V=C.surfaceDistance;x.setEndPoints(I,w);const H=x.surfaceDistance,j=Math.max(k,V,H);let $,te,se,ce,le;j>E?k===j?($=`${Math.min(q,F)} ${Math.max(q,F)}`,s=g[$],u(s)||(te=v.interpolateUsingFraction(.5,Ca),se=(w.height+S.height)*.5,ce=l.fromRadians(te.longitude,te.latitude,se,e,An),f.push(ce.x,ce.y,ce.z),s=f.length/3-1,g[$]=s,a&&(le=U.add(G,Y,Io),U.multiplyByScalar(le,.5,le),d.push(le.x,le.y))),r.push(q,s,N),r.push(s,F,N)):V===j?($=`${Math.min(F,N)} ${Math.max(F,N)}`,s=g[$],u(s)||(te=C.interpolateUsingFraction(.5,Ca),se=(S.height+I.height)*.5,ce=l.fromRadians(te.longitude,te.latitude,se,e,An),f.push(ce.x,ce.y,ce.z),s=f.length/3-1,g[$]=s,a&&(le=U.add(Y,y,Io),U.multiplyByScalar(le,.5,le),d.push(le.x,le.y))),r.push(F,s,q),r.push(s,N,q)):H===j&&($=`${Math.min(N,q)} ${Math.max(N,q)}`,s=g[$],u(s)||(te=x.interpolateUsingFraction(.5,Ca),se=(I.height+w.height)*.5,ce=l.fromRadians(te.longitude,te.latitude,se,e,An),f.push(ce.x,ce.y,ce.z),s=f.length/3-1,g[$]=s,a&&(le=U.add(y,G,Io),U.multiplyByScalar(le,.5,le),d.push(le.x,le.y))),r.push(N,s,F),r.push(s,q,F)):(_.push(q),_.push(F),_.push(N))}const R={attributes:{position:new Oe({componentDatatype:oe.DOUBLE,componentsPerAttribute:3,values:f})},indices:_,primitiveType:xe.TRIANGLES};return a&&(R.attributes.st=new Oe({componentDatatype:oe.FLOAT,componentsPerAttribute:2,values:d})),new Le(R)};Ft.scaleToGeodeticHeight=function(e,t,n,o){n=n??ae.default;let i=Vg,a=jg;if(t=t??0,o=o??!0,u(e)){const r=e.length;for(let s=0;s<r;s+=3)l.fromArray(e,s,a),o&&(a=n.scaleToGeodeticSurface(a,a)),t!==0&&(i=n.geodeticSurfaceNormal(a,i),l.multiplyByScalar(i,t,i),l.add(a,i,a)),e[s]=a.x,e[s+1]=a.y,e[s+2]=a.z}return e};function Pn(){this._array=[],this._offset=0,this._length=0}Object.defineProperties(Pn.prototype,{length:{get:function(){return this._length}}});Pn.prototype.enqueue=function(e){this._array.push(e),this._length++};Pn.prototype.dequeue=function(){if(this._length===0)return;const e=this._array;let t=this._offset;const n=e[t];return e[t]=void 0,t++,t>10&&t*2>e.length&&(this._array=e.slice(t),t=0),this._offset=t,this._length--,n};Pn.prototype.peek=function(){if(this._length!==0)return this._array[this._offset]};Pn.prototype.contains=function(e){return this._array.indexOf(e)!==-1};Pn.prototype.clear=function(){this._array.length=this._offset=this._length=0};Pn.prototype.sort=function(e){this._offset>0&&(this._array=this._array.slice(this._offset),this._offset=0),this._array.sort(e)};const ve={};ve.computeHierarchyPackedLength=function(e,t){let n=0;const o=[e];for(;o.length>0;){const i=o.pop();if(!u(i))continue;n+=2;const a=i.positions,r=i.holes;if(u(a)&&a.length>0&&(n+=a.length*t.packedLength),u(r)){const s=r.length;for(let c=0;c<s;++c)o.push(r[c])}}return n};ve.packPolygonHierarchy=function(e,t,n,o){const i=[e];for(;i.length>0;){const a=i.pop();if(!u(a))continue;const r=a.positions,s=a.holes;if(t[n++]=u(r)?r.length:0,t[n++]=u(s)?s.length:0,u(r)){const c=r.length;for(let f=0;f<c;++f,n+=o.packedLength)o.pack(r[f],t,n)}if(u(s)){const c=s.length;for(let f=0;f<c;++f)i.push(s[f])}}return n};ve.unpackPolygonHierarchy=function(e,t,n){const o=e[t++],i=e[t++],a=new Array(o),r=i>0?new Array(i):void 0;for(let s=0;s<o;++s,t+=n.packedLength)a[s]=n.unpack(e,t);for(let s=0;s<i;++s)r[s]=ve.unpackPolygonHierarchy(e,t,n),t=r[s].startingIndex,delete r[s].startingIndex;return{positions:a,holes:r,startingIndex:t}};const eo=new U;function Tu(e,t,n,o){return U.subtract(t,e,eo),U.multiplyByScalar(eo,n/o,eo),U.add(e,eo,eo),[eo.x,eo.y]}const Fn=new l;function Xg(e,t,n,o){return l.subtract(t,e,Fn),l.multiplyByScalar(Fn,n/o,Fn),l.add(e,Fn,Fn),[Fn.x,Fn.y,Fn.z]}ve.subdivideLineCount=function(e,t,n){const i=l.distance(e,t)/n,a=Math.max(0,Math.ceil(A.log2(i)));return Math.pow(2,a)};const Vr=new ne,jr=new ne,$g=new ne,Zg=new l,Ir=new Et;ve.subdivideRhumbLineCount=function(e,t,n,o){const i=e.cartesianToCartographic(t,Vr),a=e.cartesianToCartographic(n,jr),s=new Et(i,a,e).surfaceDistance/o,c=Math.max(0,Math.ceil(A.log2(s)));return Math.pow(2,c)};ve.subdivideTexcoordLine=function(e,t,n,o,i,a){const r=ve.subdivideLineCount(n,o,i),s=U.distance(e,t),c=s/r,f=a;f.length=r*2;let d=0;for(let m=0;m<r;m++){const p=Tu(e,t,m*c,s);f[d++]=p[0],f[d++]=p[1]}return f};ve.subdivideLine=function(e,t,n,o){const i=ve.subdivideLineCount(e,t,n),a=l.distance(e,t),r=a/i;u(o)||(o=[]);const s=o;s.length=i*3;let c=0;for(let f=0;f<i;f++){const d=Xg(e,t,f*r,a);s[c++]=d[0],s[c++]=d[1],s[c++]=d[2]}return s};ve.subdivideTexcoordRhumbLine=function(e,t,n,o,i,a,r){const s=n.cartesianToCartographic(o,Vr),c=n.cartesianToCartographic(i,jr);Ir.setEndPoints(s,c);const f=Ir.surfaceDistance/a,d=Math.max(0,Math.ceil(A.log2(f))),m=Math.pow(2,d),p=U.distance(e,t),_=p/m,g=r;g.length=m*2;let b=0;for(let E=0;E<m;E++){const v=Tu(e,t,E*_,p);g[b++]=v[0],g[b++]=v[1]}return g};ve.subdivideRhumbLine=function(e,t,n,o,i){const a=e.cartesianToCartographic(t,Vr),r=e.cartesianToCartographic(n,jr),s=new Et(a,r,e);if(u(i)||(i=[]),s.surfaceDistance<=o)return i.length=3,i[0]=t.x,i[1]=t.y,i[2]=t.z,i;const c=s.surfaceDistance/o,f=Math.max(0,Math.ceil(A.log2(c))),d=Math.pow(2,f),m=s.surfaceDistance/d,p=i;p.length=d*3;let _=0;for(let g=0;g<d;g++){const b=s.interpolateUsingSurfaceDistance(g*m,$g),E=e.cartographicToCartesian(b,Zg);p[_++]=E.x,p[_++]=E.y,p[_++]=E.z}return p};const Kg=new l,Qg=new l,Jg=new l,ey=new l;ve.scaleToGeodeticHeightExtruded=function(e,t,n,o,i){o=o??ae.default;const a=Kg;let r=Qg;const s=Jg;let c=ey;if(u(e)&&u(e.attributes)&&u(e.attributes.position)){const f=e.attributes.position.values,d=f.length/2;for(let m=0;m<d;m+=3)l.fromArray(f,m,s),o.geodeticSurfaceNormal(s,a),c=o.scaleToGeodeticSurface(s,c),r=l.multiplyByScalar(a,n,r),r=l.add(c,r,r),f[m+d]=r.x,f[m+1+d]=r.y,f[m+2+d]=r.z,i&&(c=l.clone(s,c)),r=l.multiplyByScalar(a,t,r),r=l.add(c,r,r),f[m]=r.x,f[m+1]=r.y,f[m+2]=r.z}return e};ve.polygonOutlinesFromHierarchy=function(e,t,n){const o=[],i=new Pn;i.enqueue(e);let a,r,s;for(;i.length!==0;){const c=i.dequeue();let f=c.positions;if(t)for(s=f.length,a=0;a<s;a++)n.scaleToGeodeticSurface(f[a],f[a]);if(f=co(f,l.equalsEpsilon,!0),f.length<3)continue;const d=c.holes?c.holes.length:0;for(a=0;a<d;a++){const m=c.holes[a];let p=m.positions;if(t)for(s=p.length,r=0;r<s;++r)n.scaleToGeodeticSurface(p[r],p[r]);if(p=co(p,l.equalsEpsilon,!0),p.length<3)continue;o.push(p);let _=0;for(u(m.holes)&&(_=m.holes.length),r=0;r<_;r++)i.enqueue(m.holes[r])}o.push(f)}return o};const ty=new ne;function ny(e,t,n){const o=n.cartesianToCartographic(e,Vr),i=n.cartesianToCartographic(t,jr);if(Math.sign(o.latitude)===Math.sign(i.latitude))return;Ir.setEndPoints(o,i);const a=Ir.findIntersectionWithLatitude(0,ty);if(!u(a))return;let r=Math.min(o.longitude,i.longitude),s=Math.max(o.longitude,i.longitude);if(Math.abs(s-r)>A.PI){const c=r;r=s,s=c}if(!(a.longitude<r||a.longitude>s))return n.cartographicToCartesian(a)}function oy(e,t,n,o){if(o===io.RHUMB)return ny(e,t,n);const i=Ce.lineSegmentPlane(e,t,Te.ORIGIN_XY_PLANE);if(u(i))return n.scaleToGeodeticSurface(i,i)}const iy=new ne;function ry(e,t,n){const o=[];let i,a,r,s,c,f=0;for(;f<e.length;){i=e[f],a=e[(f+1)%e.length],r=A.sign(i.z),s=A.sign(a.z);const d=m=>t.cartesianToCartographic(m,iy).longitude;if(r===0)o.push({position:f,type:r,visited:!1,next:s,theta:d(i)});else if(s!==0){if(c=oy(i,a,t,n),++f,!u(c))continue;e.splice(f,0,c),o.push({position:f,type:r,visited:!1,next:s,theta:d(c)})}++f}return o}function Eu(e,t,n,o,i,a,r){const s=[];let c=a;const f=m=>p=>p.position===m,d=[];do{const m=n[c];s.push(m);const p=o.findIndex(f(c)),_=o[p];if(!u(_)){++c;continue}const{visited:g,type:b,next:E}=_;if(_.visited=!0,b===0){if(E===0){const R=o[p-(r?1:-1)];if((R==null?void 0:R.position)===c+1)R.visited=!0;else{++c;continue}}if(!g&&r&&E>0||a===c&&!r&&E<0){++c;continue}}if(!(r?b>=0:b<=0)){++c;continue}g||d.push(c);const C=p+(r?1:-1),x=o[C];if(!u(x)){++c;continue}c=x.position}while(c<n.length&&c>=0&&c!==a&&s.length<n.length);e.splice(t,i,s);for(const m of d)t=Eu(e,++t,n,o,0,m,!r);return t}ve.splitPolygonsOnEquator=function(e,t,n,o){u(o)||(o=[]),o.splice(0,0,...e),o.length=e.length;let i=0;for(;i<o.length;){const a=o[i],r=a.slice();if(a.length<3){o[i]=r,++i;continue}const s=ry(r,t,n);if(r.length===a.length||s.length<=1){o[i]=r,++i;continue}s.sort((f,d)=>f.theta-d.theta);const c=r[0].z>=0;i=Eu(o,i,r,s,1,0,c)}return o};ve.polygonsFromHierarchy=function(e,t,n,o,i,a){const r=[],s=[],c=new Pn;c.enqueue(e);let f=u(a);for(;c.length!==0;){const d=c.dequeue();let m=d.positions;const p=d.holes;let _,g;if(o)for(g=m.length,_=0;_<g;_++)i.scaleToGeodeticSurface(m[_],m[_]);if(t||(m=co(m,l.equalsEpsilon,!0)),m.length<3)continue;let b=n(m);if(!u(b))continue;const E=[];let v=Ft.computeWindingOrder2D(b);if(v===qo.CLOCKWISE&&(b.reverse(),m=m.slice().reverse()),f){f=!1;let F=[m];if(F=a(F,F),F.length>1){for(const q of F)c.enqueue(new ss(q,p));continue}}let C=m.slice();const x=u(p)?p.length:0,R=[];let N;for(_=0;_<x;_++){const F=p[_];let q=F.positions;if(o)for(g=q.length,N=0;N<g;++N)i.scaleToGeodeticSurface(q[N],q[N]);if(t||(q=co(q,l.equalsEpsilon,!0)),q.length<3)continue;const D=n(q);if(!u(D))continue;v=Ft.computeWindingOrder2D(D),v===qo.CLOCKWISE&&(D.reverse(),q=q.slice().reverse()),R.push(q),E.push(C.length),C=C.concat(q),b=b.concat(D);let B=0;for(u(F.holes)&&(B=F.holes.length),N=0;N<B;N++)c.enqueue(F.holes[N])}r.push({outerRing:m,holes:R}),s.push({positions:C,positions2D:b,holes:E})}return{hierarchy:r,polygons:s}};const ay=new U,sy=new l,cy=new K,ly=new P;ve.computeBoundingRectangle=function(e,t,n,o,i){const a=K.fromAxisAngle(e,o,cy),r=P.fromQuaternion(a,ly);let s=Number.POSITIVE_INFINITY,c=Number.NEGATIVE_INFINITY,f=Number.POSITIVE_INFINITY,d=Number.NEGATIVE_INFINITY;const m=n.length;for(let p=0;p<m;++p){const _=l.clone(n[p],sy);P.multiplyByVector(r,_,_);const g=t(_,ay);u(g)&&(s=Math.min(s,g.x),c=Math.max(c,g.x),f=Math.min(f,g.y),d=Math.max(d,g.y))}return i.x=s,i.y=f,i.width=c-s,i.height=d-f,i};ve.createGeometryFromPositions=function(e,t,n,o,i,a,r){let s=Ft.triangulate(t.positions2D,t.holes);s.length<3&&(s=[0,1,2]);const c=t.positions,f=u(n),d=f?n.positions:void 0;if(i){const m=c.length,p=new Array(m*3);let _=0;for(let E=0;E<m;E++){const v=c[E];p[_++]=v.x,p[_++]=v.y,p[_++]=v.z}const g={attributes:{position:new Oe({componentDatatype:oe.DOUBLE,componentsPerAttribute:3,values:p})},indices:s,primitiveType:xe.TRIANGLES};f&&(g.attributes.st=new Oe({componentDatatype:oe.FLOAT,componentsPerAttribute:2,values:U.packArray(d)}));const b=new Le(g);return a.normal?ze.computeNormal(b):b}if(r===io.GEODESIC)return Ft.computeSubdivision(e,c,s,d,o);if(r===io.RHUMB)return Ft.computeRhumbLineSubdivision(e,c,s,d,o)};const Tl=[],El=[],fy=new l,uy=new l;ve.computeWallGeometry=function(e,t,n,o,i,a){let r,s,c,f,d,m,p,_,g,b=e.length,E=0,v=0;const C=u(t),x=C?t.positions:void 0;if(i)for(s=b*3*2,r=new Array(s*2),C&&(g=b*2*2,_=new Array(g*2)),c=0;c<b;c++)f=e[c],d=e[(c+1)%b],r[E]=r[E+s]=f.x,++E,r[E]=r[E+s]=f.y,++E,r[E]=r[E+s]=f.z,++E,r[E]=r[E+s]=d.x,++E,r[E]=r[E+s]=d.y,++E,r[E]=r[E+s]=d.z,++E,C&&(m=x[c],p=x[(c+1)%b],_[v]=_[v+g]=m.x,++v,_[v]=_[v+g]=m.y,++v,_[v]=_[v+g]=p.x,++v,_[v]=_[v+g]=p.y,++v);else{const D=A.chordLength(o,n.maximumRadius);let B=0;if(a===io.GEODESIC)for(c=0;c<b;c++)B+=ve.subdivideLineCount(e[c],e[(c+1)%b],D);else if(a===io.RHUMB)for(c=0;c<b;c++)B+=ve.subdivideRhumbLineCount(n,e[c],e[(c+1)%b],D);for(s=(B+b)*3,r=new Array(s*2),C&&(g=(B+b)*2,_=new Array(g*2)),c=0;c<b;c++){f=e[c],d=e[(c+1)%b];let L,G;C&&(m=x[c],p=x[(c+1)%b]),a===io.GEODESIC?(L=ve.subdivideLine(f,d,D,El),C&&(G=ve.subdivideTexcoordLine(m,p,f,d,D,Tl))):a===io.RHUMB&&(L=ve.subdivideRhumbLine(n,f,d,D,El),C&&(G=ve.subdivideTexcoordRhumbLine(m,p,n,f,d,D,Tl)));const Y=L.length;for(let y=0;y<Y;++y,++E)r[E]=L[y],r[E+s]=L[y];if(r[E]=d.x,r[E+s]=d.x,++E,r[E]=d.y,r[E+s]=d.y,++E,r[E]=d.z,r[E+s]=d.z,++E,C){const y=G.length;for(let w=0;w<y;++w,++v)_[v]=G[w],_[v+g]=G[w];_[v]=p.x,_[v+g]=p.x,++v,_[v]=p.y,_[v+g]=p.y,++v}}}b=r.length;const R=$e.createTypedArray(b/3,b-e.length*6);let N=0;for(b/=6,c=0;c<b;c++){const D=c,B=D+1,L=D+b,G=L+1;f=l.fromArray(r,D*3,fy),d=l.fromArray(r,B*3,uy),!l.equalsEpsilon(f,d,A.EPSILON10,A.EPSILON10)&&(R[N++]=D,R[N++]=L,R[N++]=B,R[N++]=B,R[N++]=L,R[N++]=G)}const F={attributes:new Ci({position:new Oe({componentDatatype:oe.DOUBLE,componentsPerAttribute:3,values:r})}),indices:R,primitiveType:xe.TRIANGLES};return C&&(F.attributes.st=new Oe({componentDatatype:oe.FLOAT,componentsPerAttribute:2,values:_})),new Le(F)};const hy=new l,dy=new Be,my=new U,py=new U,_y=new l,gy=new l,yy=new l,Jo=new l,by=new l,Ty=new l,wl=new K,Ey=new P,wy=new P,Ay=new l;function Oy(e,t,n,o,i,a,r,s,c){const f=e.positions;let d=Ft.triangulate(e.positions2D,e.holes);d.length<3&&(d=[0,1,2]);const m=$e.createTypedArray(f.length,d.length);m.set(d);let p=Ey;if(o!==0){let G=K.fromAxisAngle(r,o,wl);if(p=P.fromQuaternion(G,p),t.tangent||t.bitangent){G=K.fromAxisAngle(r,-o,wl);const Y=P.fromQuaternion(G,wy);s=l.normalize(P.multiplyByVector(Y,s,s),s),t.bitangent&&(c=l.normalize(l.cross(r,s,c),c))}}else p=P.clone(P.IDENTITY,p);const _=py;t.st&&(_.x=n.x,_.y=n.y);const g=f.length,b=g*3,E=new Float64Array(b),v=t.normal?new Float32Array(b):void 0,C=t.tangent?new Float32Array(b):void 0,x=t.bitangent?new Float32Array(b):void 0,R=t.st?new Float32Array(g*2):void 0;let N=0,F=0,q=0,D=0,B=0;for(let G=0;G<g;G++){const Y=f[G];if(E[N++]=Y.x,E[N++]=Y.y,E[N++]=Y.z,t.st)if(u(i)&&i.positions.length===g)R[B++]=i.positions[G].x,R[B++]=i.positions[G].y;else{const y=P.multiplyByVector(p,Y,hy),w=a(y,my);U.subtract(w,_,w);const S=A.clamp(w.x/n.width,0,1),I=A.clamp(w.y/n.height,0,1);R[B++]=S,R[B++]=I}t.normal&&(v[F++]=r.x,v[F++]=r.y,v[F++]=r.z),t.tangent&&(C[D++]=s.x,C[D++]=s.y,C[D++]=s.z),t.bitangent&&(x[q++]=c.x,x[q++]=c.y,x[q++]=c.z)}const L=new Ci;return t.position&&(L.position=new Oe({componentDatatype:oe.DOUBLE,componentsPerAttribute:3,values:E})),t.normal&&(L.normal=new Oe({componentDatatype:oe.FLOAT,componentsPerAttribute:3,values:v})),t.tangent&&(L.tangent=new Oe({componentDatatype:oe.FLOAT,componentsPerAttribute:3,values:C})),t.bitangent&&(L.bitangent=new Oe({componentDatatype:oe.FLOAT,componentsPerAttribute:3,values:x})),t.st&&(L.st=new Oe({componentDatatype:oe.FLOAT,componentsPerAttribute:2,values:R})),new Le({attributes:L,indices:m,primitiveType:xe.TRIANGLES})}function xn(e){e=e??ue.EMPTY_OBJECT;const t=e.polygonHierarchy,n=e.textureCoordinates;h.defined("options.polygonHierarchy",t);const o=e.vertexFormat??ye.DEFAULT;this._vertexFormat=ye.clone(o),this._polygonHierarchy=t,this._stRotation=e.stRotation??0,this._ellipsoid=ae.clone(e.ellipsoid??ae.default),this._workerName="createCoplanarPolygonGeometry",this._textureCoordinates=n,this.packedLength=ve.computeHierarchyPackedLength(t,l)+ye.packedLength+ae.packedLength+(u(n)?ve.computeHierarchyPackedLength(n,U):1)+2}xn.fromPositions=function(e){e=e??ue.EMPTY_OBJECT,h.defined("options.positions",e.positions);const t={polygonHierarchy:{positions:e.positions},vertexFormat:e.vertexFormat,stRotation:e.stRotation,ellipsoid:e.ellipsoid,textureCoordinates:e.textureCoordinates};return new xn(t)};xn.pack=function(e,t,n){return h.typeOf.object("value",e),h.defined("array",t),n=n??0,n=ve.packPolygonHierarchy(e._polygonHierarchy,t,n,l),ae.pack(e._ellipsoid,t,n),n+=ae.packedLength,ye.pack(e._vertexFormat,t,n),n+=ye.packedLength,t[n++]=e._stRotation,u(e._textureCoordinates)?n=ve.packPolygonHierarchy(e._textureCoordinates,t,n,U):t[n++]=-1,t[n++]=e.packedLength,t};const Sy=ae.clone(ae.UNIT_SPHERE),xy=new ye,Cy={polygonHierarchy:{}};xn.unpack=function(e,t,n){h.defined("array",e),t=t??0;const o=ve.unpackPolygonHierarchy(e,t,l);t=o.startingIndex,delete o.startingIndex;const i=ae.unpack(e,t,Sy);t+=ae.packedLength;const a=ye.unpack(e,t,xy);t+=ye.packedLength;const r=e[t++],s=e[t]===-1?void 0:ve.unpackPolygonHierarchy(e,t,U);u(s)?(t=s.startingIndex,delete s.startingIndex):t++;const c=e[t++];return u(n)||(n=new xn(Cy)),n._polygonHierarchy=o,n._ellipsoid=ae.clone(i,n._ellipsoid),n._vertexFormat=ye.clone(a,n._vertexFormat),n._stRotation=r,n._textureCoordinates=s,n.packedLength=c,n};xn.createGeometry=function(e){const t=e._vertexFormat,n=e._polygonHierarchy,o=e._stRotation,i=e._textureCoordinates,a=u(i);let r=n.positions;if(r=co(r,l.equalsEpsilon,!0),r.length<3)return;let s=_y,c=gy,f=yy,d=by;const m=Ty;if(!ao.computeProjectTo2DArguments(r,Jo,d,m))return;if(s=l.cross(d,m,s),s=l.normalize(s,s),!l.equalsEpsilon(Jo,l.ZERO,A.EPSILON6)){const B=e._ellipsoid.geodeticSurfaceNormal(Jo,Ay);l.dot(s,B)<0&&(s=l.negate(s,s),d=l.negate(d,d))}const _=ao.createProjectPointsTo2DFunction(Jo,d,m),g=ao.createProjectPointTo2DFunction(Jo,d,m);t.tangent&&(c=l.clone(d,c)),t.bitangent&&(f=l.clone(m,f));const b=ve.polygonsFromHierarchy(n,a,_,!1),E=b.hierarchy,v=b.polygons,C=function(B){return B},x=a?ve.polygonsFromHierarchy(i,!0,C,!1).polygons:void 0;if(E.length===0)return;r=E[0].outerRing;const R=Q.fromPoints(r),N=ve.computeBoundingRectangle(s,g,r,o,dy),F=[];for(let B=0;B<v.length;B++){const L=new ns({geometry:Oy(v[B],t,N,o,a?x[B]:void 0,g,s,c,f)});F.push(L)}const q=ze.combineInstances(F)[0];q.attributes.position.values=new Float64Array(q.attributes.position.values),q.indices=$e.createTypedArray(q.attributes.position.values.length/3,q.indices);const D=q.attributes;return t.position||delete D.position,new Le({attributes:D,indices:q.indices,primitiveType:q.primitiveType,boundingSphere:R})};function vy(e){const t=e._uSquared,n=e._ellipsoid.maximumRadius,o=e._ellipsoid.minimumRadius,i=(n-o)/n,a=Math.cos(e._startHeading),r=Math.sin(e._startHeading),s=(1-i)*Math.tan(e._start.latitude),c=1/Math.sqrt(1+s*s),f=c*s,d=Math.atan2(s,a),m=c*r,p=m*m,_=1-p,g=Math.sqrt(_),b=t/4,E=b*b,v=E*b,C=E*E,x=1+b-3*E/4+5*v/4-175*C/64,R=1-b+15*E/8-35*v/8,N=1-3*b+35*E/4,F=1-5*b,q=x*d-R*Math.sin(2*d)*b/2-N*Math.sin(4*d)*E/16-F*Math.sin(6*d)*v/48-Math.sin(8*d)*5*C/512,D=e._constants;D.a=n,D.b=o,D.f=i,D.cosineHeading=a,D.sineHeading=r,D.tanU=s,D.cosineU=c,D.sineU=f,D.sigma=d,D.sineAlpha=m,D.sineSquaredAlpha=p,D.cosineSquaredAlpha=_,D.cosineAlpha=g,D.u2Over4=b,D.u4Over16=E,D.u6Over64=v,D.u8Over256=C,D.a0=x,D.a1=R,D.a2=N,D.a3=F,D.distanceRatio=q}function Ry(e,t){return e*t*(4+e*(4-3*t))/16}function wu(e,t,n,o,i,a,r){const s=Ry(e,n);return(1-s)*e*t*(o+s*i*(r+s*a*(2*r*r-1)))}function zy(e,t,n,o,i,a,r){const s=(t-n)/t,c=a-o,f=Math.atan((1-s)*Math.tan(i)),d=Math.atan((1-s)*Math.tan(r)),m=Math.cos(f),p=Math.sin(f),_=Math.cos(d),g=Math.sin(d),b=m*_,E=m*g,v=p*g,C=p*_;let x=c,R=A.TWO_PI,N=Math.cos(x),F=Math.sin(x),q,D,B,L,G;do{N=Math.cos(x),F=Math.sin(x);const j=E-C*N;B=Math.sqrt(_*_*F*F+j*j),D=v+b*N,q=Math.atan2(B,D);let $;B===0?($=0,L=1):($=b*F/B,L=1-$*$),R=x,G=D-2*v/L,isFinite(G)||(G=0),x=c+wu(s,$,L,q,B,D,G)}while(Math.abs(x-R)>A.EPSILON12);const Y=L*(t*t-n*n)/(n*n),y=1+Y*(4096+Y*(Y*(320-175*Y)-768))/16384,w=Y*(256+Y*(Y*(74-47*Y)-128))/1024,S=G*G,I=w*B*(G+w*(D*(2*S-1)-w*G*(4*B*B-3)*(4*S-3)/6)/4),k=n*y*(q-I),V=Math.atan2(_*F,E-C*N),H=Math.atan2(m*F,E*N-C);e._distance=k,e._startHeading=V,e._endHeading=H,e._uSquared=Y}const Iy=new l,va=new l;function Au(e,t,n,o){const i=l.normalize(o.cartographicToCartesian(t,va),Iy),a=l.normalize(o.cartographicToCartesian(n,va),va);h.typeOf.number.greaterThanOrEquals("value",Math.abs(Math.abs(l.angleBetween(i,a))-Math.PI),.0125),zy(e,o.maximumRadius,o.minimumRadius,t.longitude,t.latitude,n.longitude,n.latitude),e._start=ne.clone(t,e._start),e._end=ne.clone(n,e._end),e._start.height=0,e._end.height=0,vy(e)}function vi(e,t,n){const o=n??ae.default;this._ellipsoid=o,this._start=new ne,this._end=new ne,this._constants={},this._startHeading=void 0,this._endHeading=void 0,this._distance=void 0,this._uSquared=void 0,u(e)&&u(t)&&Au(this,e,t,o)}Object.defineProperties(vi.prototype,{ellipsoid:{get:function(){return this._ellipsoid}},surfaceDistance:{get:function(){return h.defined("distance",this._distance),this._distance}},start:{get:function(){return this._start}},end:{get:function(){return this._end}},startHeading:{get:function(){return h.defined("distance",this._distance),this._startHeading}},endHeading:{get:function(){return h.defined("distance",this._distance),this._endHeading}}});vi.prototype.setEndPoints=function(e,t){h.defined("start",e),h.defined("end",t),Au(this,e,t,this._ellipsoid)};vi.prototype.interpolateUsingFraction=function(e,t){return this.interpolateUsingSurfaceDistance(this._distance*e,t)};vi.prototype.interpolateUsingSurfaceDistance=function(e,t){h.defined("distance",this._distance);const n=this._constants,o=n.distanceRatio+e/n.b,i=Math.cos(2*o),a=Math.cos(4*o),r=Math.cos(6*o),s=Math.sin(2*o),c=Math.sin(4*o),f=Math.sin(6*o),d=Math.sin(8*o),m=o*o,p=o*m,_=n.u8Over256,g=n.u2Over4,b=n.u6Over64,E=n.u4Over16;let v=2*p*_*i/3+o*(1-g+7*E/4-15*b/4+579*_/64-(E-15*b/4+187*_/16)*i-(5*b/4-115*_/16)*a-29*_*r/16)+(g/2-E+71*b/32-85*_/16)*s+(5*E/16-5*b/4+383*_/96)*c-m*((b-11*_/2)*s+5*_*c/2)+(29*b/96-29*_/16)*f+539*_*d/1536;const C=Math.asin(Math.sin(v)*n.cosineAlpha),x=Math.atan(n.a/n.b*Math.tan(C));v=v-n.sigma;const R=Math.cos(2*n.sigma+v),N=Math.sin(v),F=Math.cos(v),q=n.cosineU*F,D=n.sineU*N,L=Math.atan2(N*n.sineHeading,q-D*n.cosineHeading)-wu(n.f,n.sineAlpha,n.cosineSquaredAlpha,v,N,F,R);return u(t)?(t.longitude=this._start.longitude+L,t.latitude=x,t.height=0,t):new ne(this._start.longitude+L,x,0)};const At={};At.numberOfPoints=function(e,t,n){const o=l.distance(e,t);return Math.ceil(o/n)};At.numberOfPointsRhumbLine=function(e,t,n){const o=Math.pow(e.longitude-t.longitude,2)+Math.pow(e.latitude-t.latitude,2);return Math.max(1,Math.ceil(Math.sqrt(o/(n*n))))};const Py=new ne;At.extractHeights=function(e,t){const n=e.length,o=new Array(n);for(let i=0;i<n;i++){const a=e[i];o[i]=t.cartesianToCartographic(a,Py).height}return o};const My=new M,Ny=new l,Al=new l,Dy=new Te(l.UNIT_X,0),Ol=new l,Ly=new Te(l.UNIT_X,0),Fy=new l,By=new l,Vs=[];function Ou(e,t,n){const o=Vs;o.length=e;let i;if(t===n){for(i=0;i<e;i++)o[i]=t;return o}const r=(n-t)/e;for(i=0;i<e;i++){const s=t+i*r;o[i]=s}return o}const Hr=new ne,Pr=new ne,jn=new l,js=new l,Uy=new l,Ra=new vi;let ei=new Et;function Gy(e,t,n,o,i,a,r,s){const c=o.scaleToGeodeticSurface(e,js),f=o.scaleToGeodeticSurface(t,Uy),d=At.numberOfPoints(e,t,n),m=o.cartesianToCartographic(c,Hr),p=o.cartesianToCartographic(f,Pr),_=Ou(d,i,a);Ra.setEndPoints(m,p);const g=Ra.surfaceDistance/d;let b=s;m.height=i;let E=o.cartographicToCartesian(m,jn);l.pack(E,r,b),b+=3;for(let v=1;v<d;v++){const C=Ra.interpolateUsingSurfaceDistance(v*g,Pr);C.height=_[v],E=o.cartographicToCartesian(C,jn),l.pack(E,r,b),b+=3}return b}function qy(e,t,n,o,i,a,r,s){const c=o.cartesianToCartographic(e,Hr),f=o.cartesianToCartographic(t,Pr),d=At.numberOfPointsRhumbLine(c,f,n);c.height=0,f.height=0;const m=Ou(d,i,a);ei.ellipsoid.equals(o)||(ei=new Et(void 0,void 0,o)),ei.setEndPoints(c,f);const p=ei.surfaceDistance/d;let _=s;c.height=i;let g=o.cartographicToCartesian(c,jn);l.pack(g,r,_),_+=3;for(let b=1;b<d;b++){const E=ei.interpolateUsingSurfaceDistance(b*p,Pr);E.height=m[b],g=o.cartographicToCartesian(E,jn),l.pack(g,r,_),_+=3}return _}At.wrapLongitude=function(e,t){const n=[],o=[];if(u(e)&&e.length>0){t=t??M.IDENTITY;const i=M.inverseTransformation(t,My),a=M.multiplyByPoint(i,l.ZERO,Ny),r=l.normalize(M.multiplyByPointAsVector(i,l.UNIT_Y,Al),Al),s=Te.fromPointNormal(a,r,Dy),c=l.normalize(M.multiplyByPointAsVector(i,l.UNIT_X,Ol),Ol),f=Te.fromPointNormal(a,c,Ly);let d=1;n.push(l.clone(e[0]));let m=n[0];const p=e.length;for(let _=1;_<p;++_){const g=e[_];if(Te.getPointDistance(f,m)<0||Te.getPointDistance(f,g)<0){const b=Ce.lineSegmentPlane(m,g,s,Fy);if(u(b)){const E=l.multiplyByScalar(r,5e-9,By);Te.getPointDistance(s,m)<0&&l.negate(E,E),n.push(l.add(b,E,new l)),o.push(d+1),l.negate(E,E),n.push(l.add(b,E,new l)),d=1}}n.push(l.clone(e[_])),d++,m=g}o.push(d)}return{positions:n,lengths:o}};At.generateArc=function(e){u(e)||(e={});const t=e.positions;if(!u(t))throw new T("options.positions is required.");const n=t.length,o=e.ellipsoid??ae.default;let i=e.height??0;const a=Array.isArray(i);if(n<1)return[];if(n===1){const b=o.scaleToGeodeticSurface(t[0],js);if(i=a?i[0]:i,i!==0){const E=o.geodeticSurfaceNormal(b,jn);l.multiplyByScalar(E,i,E),l.add(b,E,b)}return[b.x,b.y,b.z]}let r=e.minDistance;if(!u(r)){const b=e.granularity??A.RADIANS_PER_DEGREE;r=A.chordLength(b,o.maximumRadius)}let s=0,c;for(c=0;c<n-1;c++)s+=At.numberOfPoints(t[c],t[c+1],r);const f=(s+1)*3,d=new Array(f);let m=0;for(c=0;c<n-1;c++){const b=t[c],E=t[c+1],v=a?i[c]:i,C=a?i[c+1]:i;m=Gy(b,E,r,o,v,C,d,m)}Vs.length=0;const p=t[n-1],_=o.cartesianToCartographic(p,Hr);_.height=a?i[n-1]:i;const g=o.cartographicToCartesian(_,jn);return l.pack(g,d,f-3),d};const Sl=new ne,ky=new ne;At.generateRhumbArc=function(e){u(e)||(e={});const t=e.positions;if(!u(t))throw new T("options.positions is required.");const n=t.length,o=e.ellipsoid??ae.default;let i=e.height??0;const a=Array.isArray(i);if(n<1)return[];if(n===1){const v=o.scaleToGeodeticSurface(t[0],js);if(i=a?i[0]:i,i!==0){const C=o.geodeticSurfaceNormal(v,jn);l.multiplyByScalar(C,i,C),l.add(v,C,v)}return[v.x,v.y,v.z]}const r=e.granularity??A.RADIANS_PER_DEGREE;let s=0,c,f=o.cartesianToCartographic(t[0],Sl),d;for(c=0;c<n-1;c++)d=o.cartesianToCartographic(t[c+1],ky),s+=At.numberOfPointsRhumbLine(f,d,r),f=ne.clone(d,Sl);const m=(s+1)*3,p=new Array(m);let _=0;for(c=0;c<n-1;c++){const v=t[c],C=t[c+1],x=a?i[c]:i,R=a?i[c+1]:i;_=qy(v,C,r,o,x,R,p,_)}Vs.length=0;const g=t[n-1],b=o.cartesianToCartographic(g,Hr);b.height=a?i[n-1]:i;const E=o.cartographicToCartesian(b,jn);return l.pack(E,p,m-3),p};At.generateCartesianArc=function(e){const t=At.generateArc(e),n=t.length/3,o=new Array(n);for(let i=0;i<n;i++)o[i]=l.unpack(t,i*3);return o};At.generateCartesianRhumbArc=function(e){const t=At.generateRhumbArc(e),n=t.length/3,o=new Array(n);for(let i=0;i<n;i++)o[i]=l.unpack(t,i*3);return o};function jt(e){this.planes=e??[]}const Ti=[new l,new l,new l];l.clone(l.UNIT_X,Ti[0]);l.clone(l.UNIT_Y,Ti[1]);l.clone(l.UNIT_Z,Ti[2]);const Bn=new l,Vy=new l,Su=new Te(new l(1,0,0),0);jt.fromBoundingSphere=function(e,t){if(!u(e))throw new T("boundingSphere is required.");u(t)||(t=new jt);const n=Ti.length,o=t.planes;o.length=2*n;const i=e.center,a=e.radius;let r=0;for(let s=0;s<n;++s){const c=Ti[s];let f=o[r],d=o[r+1];u(f)||(f=o[r]=new W),u(d)||(d=o[r+1]=new W),l.multiplyByScalar(c,-a,Bn),l.add(i,Bn,Bn),f.x=c.x,f.y=c.y,f.z=c.z,f.w=-l.dot(c,Bn),l.multiplyByScalar(c,a,Bn),l.add(i,Bn,Bn),d.x=-c.x,d.y=-c.y,d.z=-c.z,d.w=-l.dot(l.negate(c,Vy),Bn),r+=2}return t};jt.prototype.computeVisibility=function(e){if(!u(e))throw new T("boundingVolume is required.");const t=this.planes;let n=!1;for(let o=0,i=t.length;o<i;++o){const a=e.intersectPlane(Te.fromCartesian4(t[o],Su));if(a===Ke.OUTSIDE)return Ke.OUTSIDE;a===Ke.INTERSECTING&&(n=!0)}return n?Ke.INTERSECTING:Ke.INSIDE};jt.prototype.computeVisibilityWithPlaneMask=function(e,t){if(!u(e))throw new T("boundingVolume is required.");if(!u(t))throw new T("parentPlaneMask is required.");if(t===jt.MASK_OUTSIDE||t===jt.MASK_INSIDE)return t;let n=jt.MASK_INSIDE;const o=this.planes;for(let i=0,a=o.length;i<a;++i){const r=i<31?1<<i:0;if(i<31&&!(t&r))continue;const s=e.intersectPlane(Te.fromCartesian4(o[i],Su));if(s===Ke.OUTSIDE)return jt.MASK_OUTSIDE;s===Ke.INTERSECTING&&(n|=r)}return n};jt.MASK_OUTSIDE=4294967295;jt.MASK_INSIDE=0;jt.MASK_INDETERMINATE=2147483647;function Nt(e,t){e=e??0,this._near=e,t=t??Number.MAX_VALUE,this._far=t}Object.defineProperties(Nt.prototype,{near:{get:function(){return this._near},set:function(e){this._near=e}},far:{get:function(){return this._far},set:function(e){this._far=e}}});Nt.packedLength=2;Nt.pack=function(e,t,n){if(!u(e))throw new T("value is required");if(!u(t))throw new T("array is required");return n=n??0,t[n++]=e.near,t[n]=e.far,t};Nt.unpack=function(e,t,n){if(!u(e))throw new T("array is required");return t=t??0,u(n)||(n=new Nt),n.near=e[t++],n.far=e[t],n};Nt.equals=function(e,t){return e===t||u(e)&&u(t)&&e.near===t.near&&e.far===t.far};Nt.clone=function(e,t){if(u(e))return u(t)||(t=new Nt),t.near=e.near,t.far=e.far,t};Nt.prototype.clone=function(e){return Nt.clone(this,e)};Nt.prototype.equals=function(e){return Nt.equals(this,e)};function pn(e){e=e??ue.EMPTY_OBJECT,this.left=e.left,this._left=void 0,this.right=e.right,this._right=void 0,this.top=e.top,this._top=void 0,this.bottom=e.bottom,this._bottom=void 0,this.near=e.near??1,this._near=this.near,this.far=e.far??5e8,this._far=this.far,this._cullingVolume=new jt,this._perspectiveMatrix=new M,this._infinitePerspective=new M}function fs(e){if(!u(e.right)||!u(e.left)||!u(e.top)||!u(e.bottom)||!u(e.near)||!u(e.far))throw new T("right, left, top, bottom, near, or far parameters are not set.");const{top:t,bottom:n,right:o,left:i,near:a,far:r}=e;if(t!==e._top||n!==e._bottom||i!==e._left||o!==e._right||a!==e._near||r!==e._far){if(e.near<=0||e.near>e.far)throw new T("near must be greater than zero and less than far.");e._left=i,e._right=o,e._top=t,e._bottom=n,e._near=a,e._far=r,e._perspectiveMatrix=M.computePerspectiveOffCenter(i,o,n,t,a,r,e._perspectiveMatrix),e._infinitePerspective=M.computeInfinitePerspectiveOffCenter(i,o,n,t,a,e._infinitePerspective)}}Object.defineProperties(pn.prototype,{projectionMatrix:{get:function(){return fs(this),this._perspectiveMatrix}},infiniteProjectionMatrix:{get:function(){return fs(this),this._infinitePerspective}}});const jy=new l,Hy=new l,Wy=new l,Yy=new l;pn.prototype.computeCullingVolume=function(e,t,n){if(!u(e))throw new T("position is required.");if(!u(t))throw new T("direction is required.");if(!u(n))throw new T("up is required.");const o=this._cullingVolume.planes,i=this.top,a=this.bottom,r=this.right,s=this.left,c=this.near,f=this.far,d=l.cross(t,n,jy),m=Hy;l.multiplyByScalar(t,c,m),l.add(e,m,m);const p=Wy;l.multiplyByScalar(t,f,p),l.add(e,p,p);const _=Yy;l.multiplyByScalar(d,s,_),l.add(m,_,_),l.subtract(_,e,_),l.normalize(_,_),l.cross(_,n,_),l.normalize(_,_);let g=o[0];return u(g)||(g=o[0]=new W),g.x=_.x,g.y=_.y,g.z=_.z,g.w=-l.dot(_,e),l.multiplyByScalar(d,r,_),l.add(m,_,_),l.subtract(_,e,_),l.cross(n,_,_),l.normalize(_,_),g=o[1],u(g)||(g=o[1]=new W),g.x=_.x,g.y=_.y,g.z=_.z,g.w=-l.dot(_,e),l.multiplyByScalar(n,a,_),l.add(m,_,_),l.subtract(_,e,_),l.cross(d,_,_),l.normalize(_,_),g=o[2],u(g)||(g=o[2]=new W),g.x=_.x,g.y=_.y,g.z=_.z,g.w=-l.dot(_,e),l.multiplyByScalar(n,i,_),l.add(m,_,_),l.subtract(_,e,_),l.cross(_,d,_),l.normalize(_,_),g=o[3],u(g)||(g=o[3]=new W),g.x=_.x,g.y=_.y,g.z=_.z,g.w=-l.dot(_,e),g=o[4],u(g)||(g=o[4]=new W),g.x=t.x,g.y=t.y,g.z=t.z,g.w=-l.dot(t,m),l.negate(t,_),g=o[5],u(g)||(g=o[5]=new W),g.x=_.x,g.y=_.y,g.z=_.z,g.w=-l.dot(_,p),this._cullingVolume};pn.prototype.getPixelDimensions=function(e,t,n,o,i){if(fs(this),!u(e)||!u(t))throw new T("Both drawingBufferWidth and drawingBufferHeight are required.");if(e<=0)throw new T("drawingBufferWidth must be greater than zero.");if(t<=0)throw new T("drawingBufferHeight must be greater than zero.");if(!u(n))throw new T("distance is required.");if(!u(o))throw new T("pixelRatio is required");if(o<=0)throw new T("pixelRatio must be greater than zero.");if(!u(i))throw new T("A result object is required.");const a=1/this.near;let r=this.top*a;const s=2*o*n*r/t;r=this.right*a;const c=2*o*n*r/e;return i.x=c,i.y=s,i};pn.prototype.clone=function(e){return u(e)||(e=new pn),e.right=this.right,e.left=this.left,e.top=this.top,e.bottom=this.bottom,e.near=this.near,e.far=this.far,e._left=void 0,e._right=void 0,e._top=void 0,e._bottom=void 0,e._near=void 0,e._far=void 0,e};pn.prototype.equals=function(e){return u(e)&&e instanceof pn&&this.right===e.right&&this.left===e.left&&this.top===e.top&&this.bottom===e.bottom&&this.near===e.near&&this.far===e.far};pn.prototype.equalsEpsilon=function(e,t,n){return e===this||u(e)&&e instanceof pn&&A.equalsEpsilon(this.right,e.right,t,n)&&A.equalsEpsilon(this.left,e.left,t,n)&&A.equalsEpsilon(this.top,e.top,t,n)&&A.equalsEpsilon(this.bottom,e.bottom,t,n)&&A.equalsEpsilon(this.near,e.near,t,n)&&A.equalsEpsilon(this.far,e.far,t,n)};function Ot(e){e=e??ue.EMPTY_OBJECT,this._offCenterFrustum=new pn,this.fov=e.fov,this._fov=void 0,this._fovy=void 0,this._sseDenominator=void 0,this.aspectRatio=e.aspectRatio,this._aspectRatio=void 0,this.near=e.near??1,this._near=this.near,this.far=e.far??5e8,this._far=this.far,this.xOffset=e.xOffset??0,this._xOffset=this.xOffset,this.yOffset=e.yOffset??0,this._yOffset=this.yOffset}Ot.packedLength=6;Ot.pack=function(e,t,n){return h.typeOf.object("value",e),h.defined("array",t),n=n??0,t[n++]=e.fov,t[n++]=e.aspectRatio,t[n++]=e.near,t[n++]=e.far,t[n++]=e.xOffset,t[n]=e.yOffset,t};Ot.unpack=function(e,t,n){return h.defined("array",e),t=t??0,u(n)||(n=new Ot),n.fov=e[t++],n.aspectRatio=e[t++],n.near=e[t++],n.far=e[t++],n.xOffset=e[t++],n.yOffset=e[t],n};function Kt(e){if(!u(e.fov)||!u(e.aspectRatio)||!u(e.near)||!u(e.far))throw new T("fov, aspectRatio, near, or far parameters are not set.");if(!(e.fov!==e._fov||e.aspectRatio!==e._aspectRatio||e.near!==e._near||e.far!==e._far||e.xOffset!==e._xOffset||e.yOffset!==e._yOffset))return;if(h.typeOf.number.greaterThanOrEquals("fov",e.fov,0),h.typeOf.number.lessThan("fov",e.fov,Math.PI),h.typeOf.number.greaterThanOrEquals("aspectRatio",e.aspectRatio,0),h.typeOf.number.greaterThanOrEquals("near",e.near,0),e.near>e.far)throw new T("near must be less than far.");e._aspectRatio=e.aspectRatio,e._fov=e.fov,e._fovy=e.aspectRatio<=1?e.fov:Math.atan(Math.tan(e.fov*.5)/e.aspectRatio)*2,e._near=e.near,e._far=e.far,e._sseDenominator=2*Math.tan(.5*e._fovy),e._xOffset=e.xOffset,e._yOffset=e.yOffset;const n=e._offCenterFrustum;n.top=e.near*Math.tan(.5*e._fovy),n.bottom=-n.top,n.right=e.aspectRatio*n.top,n.left=-n.right,n.near=e.near,n.far=e.far,n.right+=e.xOffset,n.left+=e.xOffset,n.top+=e.yOffset,n.bottom+=e.yOffset}Object.defineProperties(Ot.prototype,{projectionMatrix:{get:function(){return Kt(this),this._offCenterFrustum.projectionMatrix}},infiniteProjectionMatrix:{get:function(){return Kt(this),this._offCenterFrustum.infiniteProjectionMatrix}},fovy:{get:function(){return Kt(this),this._fovy}},sseDenominator:{get:function(){return Kt(this),this._sseDenominator}},offCenterFrustum:{get:function(){return Kt(this),this._offCenterFrustum}}});Ot.prototype.computeCullingVolume=function(e,t,n){return Kt(this),this._offCenterFrustum.computeCullingVolume(e,t,n)};Ot.prototype.getPixelDimensions=function(e,t,n,o,i){return Kt(this),this._offCenterFrustum.getPixelDimensions(e,t,n,o,i)};Ot.prototype.clone=function(e){return u(e)||(e=new Ot),e.aspectRatio=this.aspectRatio,e.fov=this.fov,e.near=this.near,e.far=this.far,e._aspectRatio=void 0,e._fov=void 0,e._near=void 0,e._far=void 0,this._offCenterFrustum.clone(e._offCenterFrustum),e};Ot.prototype.equals=function(e){return!u(e)||!(e instanceof Ot)?!1:(Kt(this),Kt(e),this.fov===e.fov&&this.aspectRatio===e.aspectRatio&&this._offCenterFrustum.equals(e._offCenterFrustum))};Ot.prototype.equalsEpsilon=function(e,t,n){return!u(e)||!(e instanceof Ot)?!1:(Kt(this),Kt(e),A.equalsEpsilon(this.fov,e.fov,t,n)&&A.equalsEpsilon(this.aspectRatio,e.aspectRatio,t,n)&&this._offCenterFrustum.equalsEpsilon(e._offCenterFrustum,t,n))};function us(e,t,n){this.heading=e??0,this.pitch=t??0,this.range=n??0}us.clone=function(e,t){if(u(e))return u(t)||(t=new us),t.heading=e.heading,t.pitch=e.pitch,t.range=e.range,t};function Cn(){}Cn._transcodeTaskProcessor=new tt("transcodeKTX2",Number.POSITIVE_INFINITY);Cn._readyPromise=void 0;function Xy(){const e=Cn._transcodeTaskProcessor.initWebAssemblyModule({wasmBinaryFile:"ThirdParty/basis_transcoder.wasm"}).then(function(t){if(t)return Cn._transcodeTaskProcessor;throw new Ye("KTX2 transcoder could not be initialized.")});Cn._readyPromise=e}Cn.transcode=function(e,t){return h.defined("supportedTargetFormats",t),u(Cn._readyPromise)||Xy(),Cn._readyPromise.then(function(n){let o=e;e instanceof ArrayBuffer&&(o=new Uint8Array(e));const i={supportedTargetFormats:t,ktx2Buffer:o};return n.scheduleTask(i,[o.buffer])}).then(function(n){const o=n.length,i=Object.keys(n[0]);for(let a=0;a<o;a++){const r=n[a];for(let s=0;s<i.length;s++){const c=r[i[s]];r[i[s]]=new Bo(c.internalFormat,c.datatype,c.width,c.height,c.levelBuffer)}}if(i.length===1){for(let a=0;a<o;++a)n[a]=n[a][i[0]];o===1&&(n=n[0])}return n}).catch(function(n){throw n})};function Ei(e,t,n){e=e??0,t=t??0,n=n??0,this.value=new Float32Array([e,t,n])}Object.defineProperties(Ei.prototype,{componentDatatype:{get:function(){return oe.FLOAT}},componentsPerAttribute:{get:function(){return 3}},normalize:{get:function(){return!1}}});Ei.fromCartesian3=function(e){return h.defined("offset",e),new Ei(e.x,e.y,e.z)};Ei.toValue=function(e,t){return h.defined("offset",e),u(t)||(t=new Float32Array([e.x,e.y,e.z])),t[0]=e.x,t[1]=e.y,t[2]=e.z,t};const be={UNSIGNED_BYTE:z.UNSIGNED_BYTE,UNSIGNED_SHORT:z.UNSIGNED_SHORT,UNSIGNED_INT:z.UNSIGNED_INT,FLOAT:z.FLOAT,HALF_FLOAT:z.HALF_FLOAT_OES,UNSIGNED_INT_24_8:z.UNSIGNED_INT_24_8,UNSIGNED_SHORT_4_4_4_4:z.UNSIGNED_SHORT_4_4_4_4,UNSIGNED_SHORT_5_5_5_1:z.UNSIGNED_SHORT_5_5_5_1,UNSIGNED_SHORT_5_6_5:z.UNSIGNED_SHORT_5_6_5};be.toWebGLConstant=function(e,t){switch(e){case be.UNSIGNED_BYTE:return z.UNSIGNED_BYTE;case be.UNSIGNED_SHORT:return z.UNSIGNED_SHORT;case be.UNSIGNED_INT:return z.UNSIGNED_INT;case be.FLOAT:return z.FLOAT;case be.HALF_FLOAT:return t.webgl2?z.HALF_FLOAT:z.HALF_FLOAT_OES;case be.UNSIGNED_INT_24_8:return z.UNSIGNED_INT_24_8;case be.UNSIGNED_SHORT_4_4_4_4:return z.UNSIGNED_SHORT_4_4_4_4;case be.UNSIGNED_SHORT_5_5_5_1:return z.UNSIGNED_SHORT_5_5_5_1;case be.UNSIGNED_SHORT_5_6_5:return be.UNSIGNED_SHORT_5_6_5}};be.isPacked=function(e){return e===be.UNSIGNED_INT_24_8||e===be.UNSIGNED_SHORT_4_4_4_4||e===be.UNSIGNED_SHORT_5_5_5_1||e===be.UNSIGNED_SHORT_5_6_5};be.sizeInBytes=function(e){switch(e){case be.UNSIGNED_BYTE:return 1;case be.UNSIGNED_SHORT:case be.UNSIGNED_SHORT_4_4_4_4:case be.UNSIGNED_SHORT_5_5_5_1:case be.UNSIGNED_SHORT_5_6_5:case be.HALF_FLOAT:return 2;case be.UNSIGNED_INT:case be.FLOAT:case be.UNSIGNED_INT_24_8:return 4}};be.validate=function(e){return e===be.UNSIGNED_BYTE||e===be.UNSIGNED_SHORT||e===be.UNSIGNED_INT||e===be.FLOAT||e===be.HALF_FLOAT||e===be.UNSIGNED_INT_24_8||e===be.UNSIGNED_SHORT_4_4_4_4||e===be.UNSIGNED_SHORT_5_5_5_1||e===be.UNSIGNED_SHORT_5_6_5};be.getTypedArrayConstructor=function(e){const t=be.sizeInBytes(e);return t===Uint8Array.BYTES_PER_ELEMENT?Uint8Array:t===Uint16Array.BYTES_PER_ELEMENT?Uint16Array:t===Float32Array.BYTES_PER_ELEMENT&&e===be.FLOAT?Float32Array:Uint32Array};const he=Object.freeze(be),Z={DEPTH_COMPONENT:z.DEPTH_COMPONENT,DEPTH_STENCIL:z.DEPTH_STENCIL,ALPHA:z.ALPHA,RED:z.RED,RG:z.RG,RGB:z.RGB,RGBA:z.RGBA,RED_INTEGER:z.RED_INTEGER,RG_INTEGER:z.RG_INTEGER,RGB_INTEGER:z.RGB_INTEGER,RGBA_INTEGER:z.RGBA_INTEGER,LUMINANCE:z.LUMINANCE,LUMINANCE_ALPHA:z.LUMINANCE_ALPHA,RGB_DXT1:z.COMPRESSED_RGB_S3TC_DXT1_EXT,RGBA_DXT1:z.COMPRESSED_RGBA_S3TC_DXT1_EXT,RGBA_DXT3:z.COMPRESSED_RGBA_S3TC_DXT3_EXT,RGBA_DXT5:z.COMPRESSED_RGBA_S3TC_DXT5_EXT,RGB_PVRTC_4BPPV1:z.COMPRESSED_RGB_PVRTC_4BPPV1_IMG,RGB_PVRTC_2BPPV1:z.COMPRESSED_RGB_PVRTC_2BPPV1_IMG,RGBA_PVRTC_4BPPV1:z.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG,RGBA_PVRTC_2BPPV1:z.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG,RGBA_ASTC:z.COMPRESSED_RGBA_ASTC_4x4_WEBGL,RGB_ETC1:z.COMPRESSED_RGB_ETC1_WEBGL,RGB8_ETC2:z.COMPRESSED_RGB8_ETC2,RGBA8_ETC2_EAC:z.COMPRESSED_RGBA8_ETC2_EAC,RGBA_BC7:z.COMPRESSED_RGBA_BPTC_UNORM};Z.componentsLength=function(e){switch(e){case Z.RGB:case Z.RGB_INTEGER:return 3;case Z.RGBA:case Z.RGBA_INTEGER:return 4;case Z.LUMINANCE_ALPHA:case Z.RG:case Z.RG_INTEGER:return 2;case Z.ALPHA:case Z.RED:case Z.RED_INTEGER:case Z.LUMINANCE:return 1;default:return 1}};Z.validate=function(e){return e===Z.DEPTH_COMPONENT||e===Z.DEPTH_STENCIL||e===Z.ALPHA||e===Z.RED||e===Z.RG||e===Z.RGB||e===Z.RGBA||e===Z.RED_INTEGER||e===Z.RG_INTEGER||e===Z.RGB_INTEGER||e===Z.RGBA_INTEGER||e===Z.LUMINANCE||e===Z.LUMINANCE_ALPHA||e===Z.RGB_DXT1||e===Z.RGBA_DXT1||e===Z.RGBA_DXT3||e===Z.RGBA_DXT5||e===Z.RGB_PVRTC_4BPPV1||e===Z.RGB_PVRTC_2BPPV1||e===Z.RGBA_PVRTC_4BPPV1||e===Z.RGBA_PVRTC_2BPPV1||e===Z.RGBA_ASTC||e===Z.RGB_ETC1||e===Z.RGB8_ETC2||e===Z.RGBA8_ETC2_EAC||e===Z.RGBA_BC7};Z.isColorFormat=function(e){return e===Z.RED||e===Z.ALPHA||e===Z.RGB||e===Z.RGBA||e===Z.LUMINANCE||e===Z.LUMINANCE_ALPHA};Z.isDepthFormat=function(e){return e===Z.DEPTH_COMPONENT||e===Z.DEPTH_STENCIL};Z.isCompressedFormat=function(e){return e===Z.RGB_DXT1||e===Z.RGBA_DXT1||e===Z.RGBA_DXT3||e===Z.RGBA_DXT5||e===Z.RGB_PVRTC_4BPPV1||e===Z.RGB_PVRTC_2BPPV1||e===Z.RGBA_PVRTC_4BPPV1||e===Z.RGBA_PVRTC_2BPPV1||e===Z.RGBA_ASTC||e===Z.RGB_ETC1||e===Z.RGB8_ETC2||e===Z.RGBA8_ETC2_EAC||e===Z.RGBA_BC7};Z.isDXTFormat=function(e){return e===Z.RGB_DXT1||e===Z.RGBA_DXT1||e===Z.RGBA_DXT3||e===Z.RGBA_DXT5};Z.isPVRTCFormat=function(e){return e===Z.RGB_PVRTC_4BPPV1||e===Z.RGB_PVRTC_2BPPV1||e===Z.RGBA_PVRTC_4BPPV1||e===Z.RGBA_PVRTC_2BPPV1};Z.isASTCFormat=function(e){return e===Z.RGBA_ASTC};Z.isETC1Format=function(e){return e===Z.RGB_ETC1};Z.isETC2Format=function(e){return e===Z.RGB8_ETC2||e===Z.RGBA8_ETC2_EAC};Z.isBC7Format=function(e){return e===Z.RGBA_BC7};Z.compressedTextureSizeInBytes=function(e,t,n){switch(e){case Z.RGB_DXT1:case Z.RGBA_DXT1:case Z.RGB_ETC1:case Z.RGB8_ETC2:return Math.floor((t+3)/4)*Math.floor((n+3)/4)*8;case Z.RGBA_DXT3:case Z.RGBA_DXT5:case Z.RGBA_ASTC:case Z.RGBA8_ETC2_EAC:return Math.floor((t+3)/4)*Math.floor((n+3)/4)*16;case Z.RGB_PVRTC_4BPPV1:case Z.RGBA_PVRTC_4BPPV1:return Math.floor((Math.max(t,8)*Math.max(n,8)*4+7)/8);case Z.RGB_PVRTC_2BPPV1:case Z.RGBA_PVRTC_2BPPV1:return Math.floor((Math.max(t,16)*Math.max(n,8)*2+7)/8);case Z.RGBA_BC7:return Math.ceil(t/4)*Math.ceil(n/4)*16;default:return 0}};Z.textureSizeInBytes=function(e,t,n,o){let i=Z.componentsLength(e);return he.isPacked(t)&&(i=1),i*he.sizeInBytes(t)*n*o};Z.texture3DSizeInBytes=function(e,t,n,o,i){let a=Z.componentsLength(e);return he.isPacked(t)&&(a=1),a*he.sizeInBytes(t)*n*o*i};Z.alignmentInBytes=function(e,t,n){const o=Z.textureSizeInBytes(e,t,n,1)%4;return o===0?4:o===2?2:1};Z.createTypedArray=function(e,t,n,o){const i=he.getTypedArrayConstructor(t),a=Z.componentsLength(e)*n*o;return new i(a)};Z.flipY=function(e,t,n,o,i){if(i===1)return e;const a=Z.createTypedArray(t,n,o,i),r=Z.componentsLength(t),s=o*r;for(let c=0;c<i;++c){const f=c*o*r,d=(i-c-1)*o*r;for(let m=0;m<s;++m)a[d+m]=e[f+m]}return a};Z.toInternalFormat=function(e,t,n){if(!n.webgl2)return e;if(e===Z.DEPTH_STENCIL)return z.DEPTH24_STENCIL8;if(e===Z.DEPTH_COMPONENT){if(t===he.UNSIGNED_SHORT)return z.DEPTH_COMPONENT16;if(t===he.UNSIGNED_INT)return z.DEPTH_COMPONENT24}if(t===he.FLOAT)switch(e){case Z.RGBA:return z.RGBA32F;case Z.RGB:return z.RGB32F;case Z.RG:return z.RG32F;case Z.RED:return z.R32F}if(t===he.HALF_FLOAT)switch(e){case Z.RGBA:return z.RGBA16F;case Z.RGB:return z.RGB16F;case Z.RG:return z.RG16F;case Z.RED:return z.R16F}if(t===he.UNSIGNED_BYTE)switch(e){case Z.RGBA:return z.RGBA8;case Z.RGB:return z.RGB8;case Z.RG:return z.RG8;case Z.RED:return z.R8}if(t===he.INT)switch(e){case Z.RGBA_INTEGER:return z.RGBA32I;case Z.RGB_INTEGER:return z.RGB32I;case Z.RG_INTEGER:return z.RG32I;case Z.RED_INTEGER:return z.R32I}if(t===he.UNSIGNED_INT)switch(e){case Z.RGBA_INTEGER:return z.RGBA32UI;case Z.RGB_INTEGER:return z.RGB32UI;case Z.RG_INTEGER:return z.RG32UI;case Z.RED_INTEGER:return z.R32UI}return e};const me=Object.freeze(Z);function Hs(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){const t=Math.random()*16|0;return(e==="x"?t:t&3|8).toString(16)})}let xu;Cu.setKTX2SupportedFormats=function(e,t,n,o,i,a){xu={s3tc:e,pvrtc:t,astc:n,etc:o,etc1:i,bc7:a}};function Cu(e){h.defined("resourceOrUrlOrBuffer",e);let t;return e instanceof ArrayBuffer||ArrayBuffer.isView(e)?t=Promise.resolve(e):t=ee.createIfNeeded(e).fetchArrayBuffer(),t.then(function(n){return Cn.transcode(n,xu)})}function $y(e,t){if(!u(e))throw new T("array is required.");if(!u(t)||t<1)throw new T("numberOfArrays must be greater than 0.");const n=[],o=e.length;let i=0;for(;i<o;){const a=Math.ceil((o-i)/t--);n.push(e.slice(i,i+a)),i+=a}return n}const Zy=new l;function ie(e){this._size=e.size,this._datatype=e.datatype,this.getValue=e.getValue}const lt={};lt[z.FLOAT]="float";lt[z.FLOAT_VEC2]="vec2";lt[z.FLOAT_VEC3]="vec3";lt[z.FLOAT_VEC4]="vec4";lt[z.INT]="int";lt[z.INT_VEC2]="ivec2";lt[z.INT_VEC3]="ivec3";lt[z.INT_VEC4]="ivec4";lt[z.BOOL]="bool";lt[z.BOOL_VEC2]="bvec2";lt[z.BOOL_VEC3]="bvec3";lt[z.BOOL_VEC4]="bvec4";lt[z.FLOAT_MAT2]="mat2";lt[z.FLOAT_MAT3]="mat3";lt[z.FLOAT_MAT4]="mat4";lt[z.SAMPLER_2D]="sampler2D";lt[z.SAMPLER_CUBE]="samplerCube";ie.prototype.getDeclaration=function(e){let t=`uniform ${lt[this._datatype]} ${e}`;const n=this._size;return n===1?t+=";":t+=`[${n.toString()}];`,t};const mr={czm_viewport:new ie({size:1,datatype:z.FLOAT_VEC4,getValue:function(e){return e.viewportCartesian4}}),czm_viewportOrthographic:new ie({size:1,datatype:z.FLOAT_MAT4,getValue:function(e){return e.viewportOrthographic}}),czm_viewportTransformation:new ie({size:1,datatype:z.FLOAT_MAT4,getValue:function(e){return e.viewportTransformation}}),czm_globeDepthTexture:new ie({size:1,datatype:z.SAMPLER_2D,getValue:function(e){return e.globeDepthTexture}}),czm_model:new ie({size:1,datatype:z.FLOAT_MAT4,getValue:function(e){return e.model}}),czm_inverseModel:new ie({size:1,datatype:z.FLOAT_MAT4,getValue:function(e){return e.inverseModel}}),czm_view:new ie({size:1,datatype:z.FLOAT_MAT4,getValue:function(e){return e.view}}),czm_view3D:new ie({size:1,datatype:z.FLOAT_MAT4,getValue:function(e){return e.view3D}}),czm_viewRotation:new ie({size:1,datatype:z.FLOAT_MAT3,getValue:function(e){return e.viewRotation}}),czm_viewRotation3D:new ie({size:1,datatype:z.FLOAT_MAT3,getValue:function(e){return e.viewRotation3D}}),czm_inverseView:new ie({size:1,datatype:z.FLOAT_MAT4,getValue:function(e){return e.inverseView}}),czm_inverseView3D:new ie({size:1,datatype:z.FLOAT_MAT4,getValue:function(e){return e.inverseView3D}}),czm_inverseViewRotation:new ie({size:1,datatype:z.FLOAT_MAT3,getValue:function(e){return e.inverseViewRotation}}),czm_inverseViewRotation3D:new ie({size:1,datatype:z.FLOAT_MAT3,getValue:function(e){return e.inverseViewRotation3D}}),czm_projection:new ie({size:1,datatype:z.FLOAT_MAT4,getValue:function(e){return e.projection}}),czm_inverseProjection:new ie({size:1,datatype:z.FLOAT_MAT4,getValue:function(e){return e.inverseProjection}}),czm_infiniteProjection:new ie({size:1,datatype:z.FLOAT_MAT4,getValue:function(e){return e.infiniteProjection}}),czm_modelView:new ie({size:1,datatype:z.FLOAT_MAT4,getValue:function(e){return e.modelView}}),czm_modelView3D:new ie({size:1,datatype:z.FLOAT_MAT4,getValue:function(e){return e.modelView3D}}),czm_modelViewRelativeToEye:new ie({size:1,datatype:z.FLOAT_MAT4,getValue:function(e){return e.modelViewRelativeToEye}}),czm_inverseModelView:new ie({size:1,datatype:z.FLOAT_MAT4,getValue:function(e){return e.inverseModelView}}),czm_inverseModelView3D:new ie({size:1,datatype:z.FLOAT_MAT4,getValue:function(e){return e.inverseModelView3D}}),czm_viewProjection:new ie({size:1,datatype:z.FLOAT_MAT4,getValue:function(e){return e.viewProjection}}),czm_inverseViewProjection:new ie({size:1,datatype:z.FLOAT_MAT4,getValue:function(e){return e.inverseViewProjection}}),czm_modelViewProjection:new ie({size:1,datatype:z.FLOAT_MAT4,getValue:function(e){return e.modelViewProjection}}),czm_inverseModelViewProjection:new ie({size:1,datatype:z.FLOAT_MAT4,getValue:function(e){return e.inverseModelViewProjection}}),czm_modelViewProjectionRelativeToEye:new ie({size:1,datatype:z.FLOAT_MAT4,getValue:function(e){return e.modelViewProjectionRelativeToEye}}),czm_modelViewInfiniteProjection:new ie({size:1,datatype:z.FLOAT_MAT4,getValue:function(e){return e.modelViewInfiniteProjection}}),czm_orthographicIn3D:new ie({size:1,datatype:z.FLOAT,getValue:function(e){return e.orthographicIn3D?1:0}}),czm_normal:new ie({size:1,datatype:z.FLOAT_MAT3,getValue:function(e){return e.normal}}),czm_normal3D:new ie({size:1,datatype:z.FLOAT_MAT3,getValue:function(e){return e.normal3D}}),czm_inverseNormal:new ie({size:1,datatype:z.FLOAT_MAT3,getValue:function(e){return e.inverseNormal}}),czm_inverseNormal3D:new ie({size:1,datatype:z.FLOAT_MAT3,getValue:function(e){return e.inverseNormal3D}}),czm_eyeHeight:new ie({size:1,datatype:z.FLOAT,getValue:function(e){return e.eyeHeight}}),czm_eyeHeight2D:new ie({size:1,datatype:z.FLOAT_VEC2,getValue:function(e){return e.eyeHeight2D}}),czm_eyeEllipsoidNormalEC:new ie({size:1,datatype:z.FLOAT_VEC3,getValue:function(e){return e.eyeEllipsoidNormalEC}}),czm_eyeEllipsoidCurvature:new ie({size:1,datatype:z.FLOAT_VEC2,getValue:function(e){return e.eyeEllipsoidCurvature}}),czm_modelToEnu:new ie({size:1,datatype:z.FLOAT_MAT4,getValue:function(e){return e.modelToEnu}}),czm_enuToModel:new ie({size:1,datatype:z.FLOAT_MAT4,getValue:function(e){return e.enuToModel}}),czm_entireFrustum:new ie({size:1,datatype:z.FLOAT_VEC2,getValue:function(e){return e.entireFrustum}}),czm_currentFrustum:new ie({size:1,datatype:z.FLOAT_VEC2,getValue:function(e){return e.currentFrustum}}),czm_frustumPlanes:new ie({size:1,datatype:z.FLOAT_VEC4,getValue:function(e){return e.frustumPlanes}}),czm_farDepthFromNearPlusOne:new ie({size:1,datatype:z.FLOAT,getValue:function(e){return e.farDepthFromNearPlusOne}}),czm_log2FarDepthFromNearPlusOne:new ie({size:1,datatype:z.FLOAT,getValue:function(e){return e.log2FarDepthFromNearPlusOne}}),czm_oneOverLog2FarDepthFromNearPlusOne:new ie({size:1,datatype:z.FLOAT,getValue:function(e){return e.oneOverLog2FarDepthFromNearPlusOne}}),czm_sunPositionWC:new ie({size:1,datatype:z.FLOAT_VEC3,getValue:function(e){return e.sunPositionWC}}),czm_sunPositionColumbusView:new ie({size:1,datatype:z.FLOAT_VEC3,getValue:function(e){return e.sunPositionColumbusView}}),czm_sunDirectionEC:new ie({size:1,datatype:z.FLOAT_VEC3,getValue:function(e){return e.sunDirectionEC}}),czm_sunDirectionWC:new ie({size:1,datatype:z.FLOAT_VEC3,getValue:function(e){return e.sunDirectionWC}}),czm_moonDirectionEC:new ie({size:1,datatype:z.FLOAT_VEC3,getValue:function(e){return e.moonDirectionEC}}),czm_lightDirectionEC:new ie({size:1,datatype:z.FLOAT_VEC3,getValue:function(e){return e.lightDirectionEC}}),czm_lightDirectionWC:new ie({size:1,datatype:z.FLOAT_VEC3,getValue:function(e){return e.lightDirectionWC}}),czm_lightColor:new ie({size:1,datatype:z.FLOAT_VEC3,getValue:function(e){return e.lightColor}}),czm_lightColorHdr:new ie({size:1,datatype:z.FLOAT_VEC3,getValue:function(e){return e.lightColorHdr}}),czm_encodedCameraPositionMCHigh:new ie({size:1,datatype:z.FLOAT_VEC3,getValue:function(e){return e.encodedCameraPositionMCHigh}}),czm_encodedCameraPositionMCLow:new ie({size:1,datatype:z.FLOAT_VEC3,getValue:function(e){return e.encodedCameraPositionMCLow}}),czm_viewerPositionWC:new ie({size:1,datatype:z.FLOAT_VEC3,getValue:function(e){return M.getTranslation(e.inverseView,Zy)}}),czm_frameNumber:new ie({size:1,datatype:z.FLOAT,getValue:function(e){return e.frameState.frameNumber}}),czm_morphTime:new ie({size:1,datatype:z.FLOAT,getValue:function(e){return e.frameState.morphTime}}),czm_sceneMode:new ie({size:1,datatype:z.FLOAT,getValue:function(e){return e.frameState.mode}}),czm_pass:new ie({size:1,datatype:z.FLOAT,getValue:function(e){return e.pass}}),czm_backgroundColor:new ie({size:1,datatype:z.FLOAT_VEC4,getValue:function(e){return e.backgroundColor}}),czm_brdfLut:new ie({size:1,datatype:z.SAMPLER_2D,getValue:function(e){return e.brdfLut}}),czm_environmentMap:new ie({size:1,datatype:z.SAMPLER_CUBE,getValue:function(e){return e.environmentMap}}),czm_specularEnvironmentMaps:new ie({size:1,datatype:z.SAMPLER_CUBE,getValue:function(e){return e.specularEnvironmentMaps}}),czm_specularEnvironmentMapsMaximumLOD:new ie({size:1,datatype:z.FLOAT,getValue:function(e){return e.specularEnvironmentMapsMaximumLOD}}),czm_sphericalHarmonicCoefficients:new ie({size:9,datatype:z.FLOAT_VEC3,getValue:function(e){return e.sphericalHarmonicCoefficients}}),czm_temeToPseudoFixed:new ie({size:1,datatype:z.FLOAT_MAT3,getValue:function(e){return e.temeToPseudoFixedMatrix}}),czm_pixelRatio:new ie({size:1,datatype:z.FLOAT,getValue:function(e){return e.pixelRatio}}),czm_fogDensity:new ie({size:1,datatype:z.FLOAT,getValue:function(e){return e.fogDensity}}),czm_fogVisualDensityScalar:new ie({size:1,datatype:z.FLOAT,getValue:function(e){return e.fogVisualDensityScalar}}),czm_fogMinimumBrightness:new ie({size:1,datatype:z.FLOAT,getValue:function(e){return e.fogMinimumBrightness}}),czm_atmosphereHsbShift:new ie({size:1,datatype:z.FLOAT_VEC3,getValue:function(e){return e.atmosphereHsbShift}}),czm_atmosphereLightIntensity:new ie({size:1,datatype:z.FLOAT,getValue:function(e){return e.atmosphereLightIntensity}}),czm_atmosphereRayleighCoefficient:new ie({size:1,datatype:z.FLOAT_VEC3,getValue:function(e){return e.atmosphereRayleighCoefficient}}),czm_atmosphereRayleighScaleHeight:new ie({size:1,datatype:z.FLOAT,getValue:function(e){return e.atmosphereRayleighScaleHeight}}),czm_atmosphereMieCoefficient:new ie({size:1,datatype:z.FLOAT_VEC3,getValue:function(e){return e.atmosphereMieCoefficient}}),czm_atmosphereMieScaleHeight:new ie({size:1,datatype:z.FLOAT,getValue:function(e){return e.atmosphereMieScaleHeight}}),czm_atmosphereMieAnisotropy:new ie({size:1,datatype:z.FLOAT,getValue:function(e){return e.atmosphereMieAnisotropy}}),czm_atmosphereDynamicLighting:new ie({size:1,datatype:z.FLOAT,getValue:function(e){return e.atmosphereDynamicLighting}}),czm_splitPosition:new ie({size:1,datatype:z.FLOAT,getValue:function(e){return e.splitPosition}}),czm_geometricToleranceOverMeter:new ie({size:1,datatype:z.FLOAT,getValue:function(e){return e.geometricToleranceOverMeter}}),czm_minimumDisableDepthTestDistance:new ie({size:1,datatype:z.FLOAT,getValue:function(e){return e.minimumDisableDepthTestDistance}}),czm_invertClassificationColor:new ie({size:1,datatype:z.FLOAT_VEC4,getValue:function(e){return e.invertClassificationColor}}),czm_gamma:new ie({size:1,datatype:z.FLOAT,getValue:function(e){return e.gamma}}),czm_ellipsoidRadii:new ie({size:1,datatype:z.FLOAT_VEC3,getValue:function(e){return e.ellipsoid.radii}}),czm_ellipsoidInverseRadii:new ie({size:1,datatype:z.FLOAT_VEC3,getValue:function(e){return e.ellipsoid.oneOverRadii}})},pr={STREAM_DRAW:z.STREAM_DRAW,STATIC_DRAW:z.STATIC_DRAW,DYNAMIC_DRAW:z.DYNAMIC_DRAW,validate:function(e){return e===pr.STREAM_DRAW||e===pr.STATIC_DRAW||e===pr.DYNAMIC_DRAW}},Qt=Object.freeze(pr);function nt(e){if(e=e??ue.EMPTY_OBJECT,h.defined("options.context",e.context),!u(e.typedArray)&&!u(e.sizeInBytes))throw new T("Either options.sizeInBytes or options.typedArray is required.");if(u(e.typedArray)&&u(e.sizeInBytes))throw new T("Cannot pass in both options.sizeInBytes and options.typedArray.");if(u(e.typedArray)&&(h.typeOf.object("options.typedArray",e.typedArray),h.typeOf.number("options.typedArray.byteLength",e.typedArray.byteLength)),!Qt.validate(e.usage))throw new T("usage is invalid.");const t=e.context._gl,n=e.bufferTarget,o=e.typedArray;let i=e.sizeInBytes;const a=e.usage,r=u(o);r&&(i=o.byteLength),h.typeOf.number.greaterThan("sizeInBytes",i,0);const s=t.createBuffer();t.bindBuffer(n,s),t.bufferData(n,r?o:i,a),t.bindBuffer(n,null),this._id=Hs(),this._gl=t,this._webgl2=e.context._webgl2,this._bufferTarget=n,this._sizeInBytes=i,this._usage=a,this._buffer=s,this.vertexArrayDestroyable=!0}nt.createVertexBuffer=function(e){return h.defined("options.context",e.context),new nt({context:e.context,bufferTarget:z.ARRAY_BUFFER,typedArray:e.typedArray,sizeInBytes:e.sizeInBytes,usage:e.usage})};nt.createIndexBuffer=function(e){if(h.defined("options.context",e.context),!$e.validate(e.indexDatatype))throw new T("Invalid indexDatatype.");if(e.indexDatatype===$e.UNSIGNED_INT&&!e.context.elementIndexUint)throw new T("IndexDatatype.UNSIGNED_INT requires OES_element_index_uint, which is not supported on this system.  Check context.elementIndexUint.");const t=e.context,n=e.indexDatatype,o=$e.getSizeInBytes(n),i=new nt({context:t,bufferTarget:z.ELEMENT_ARRAY_BUFFER,typedArray:e.typedArray,sizeInBytes:e.sizeInBytes,usage:e.usage}),a=i.sizeInBytes/o;return Object.defineProperties(i,{indexDatatype:{get:function(){return n}},bytesPerIndex:{get:function(){return o}},numberOfIndices:{get:function(){return a}}}),i};Object.defineProperties(nt.prototype,{sizeInBytes:{get:function(){return this._sizeInBytes}},usage:{get:function(){return this._usage}}});nt.prototype._getBuffer=function(){return this._buffer};nt.prototype.copyFromArrayView=function(e,t){t=t??0,h.defined("arrayView",e),h.typeOf.number.lessThanOrEquals("offsetInBytes + arrayView.byteLength",t+e.byteLength,this._sizeInBytes);const n=this._gl,o=this._bufferTarget;n.bindBuffer(o,this._buffer),n.bufferSubData(o,t,e),n.bindBuffer(o,null)};nt.prototype.copyFromBuffer=function(e,t,n,o){if(!this._webgl2)throw new T("A WebGL 2 context is required.");if(!u(e))throw new T("readBuffer must be defined.");if(!u(o)||o<=0)throw new T("sizeInBytes must be defined and be greater than zero.");if(!u(t)||t<0||t+o>e._sizeInBytes)throw new T("readOffset must be greater than or equal to zero and readOffset + sizeInBytes must be less than of equal to readBuffer.sizeInBytes.");if(!u(n)||n<0||n+o>this._sizeInBytes)throw new T("writeOffset must be greater than or equal to zero and writeOffset + sizeInBytes must be less than of equal to this.sizeInBytes.");if(this._buffer===e._buffer&&(n>=t&&n<t+o||t>n&&t<n+o))throw new T("When readBuffer is equal to this, the ranges [readOffset + sizeInBytes) and [writeOffset, writeOffset + sizeInBytes) must not overlap.");if(this._bufferTarget===z.ELEMENT_ARRAY_BUFFER&&e._bufferTarget!==z.ELEMENT_ARRAY_BUFFER||this._bufferTarget!==z.ELEMENT_ARRAY_BUFFER&&e._bufferTarget===z.ELEMENT_ARRAY_BUFFER)throw new T("Can not copy an index buffer into another buffer type.");const i=z.COPY_READ_BUFFER,a=z.COPY_WRITE_BUFFER,r=this._gl;r.bindBuffer(a,this._buffer),r.bindBuffer(i,e._buffer),r.copyBufferSubData(i,a,t,n,o),r.bindBuffer(a,null),r.bindBuffer(i,null)};nt.prototype.getBufferData=function(e,t,n,o){if(t=t??0,n=n??0,!this._webgl2)throw new T("A WebGL 2 context is required.");if(!u(e))throw new T("arrayView is required.");let i,a,r=e.byteLength;if(u(o)?(i=o,u(r)?a=1:(r=e.length,a=e.BYTES_PER_ELEMENT)):u(r)?(i=r-n,a=1):(r=e.length,i=r-n,a=e.BYTES_PER_ELEMENT),n<0||n>r)throw new T("destinationOffset must be greater than zero and less than the arrayView length.");if(n+i>r)throw new T("destinationOffset + length must be less than or equal to the arrayViewLength.");if(t<0||t>this._sizeInBytes)throw new T("sourceOffset must be greater than zero and less than the buffers size.");if(t+i*a>this._sizeInBytes)throw new T("sourceOffset + length must be less than the buffers size.");const s=this._gl,c=z.COPY_READ_BUFFER;s.bindBuffer(c,this._buffer),s.getBufferSubData(c,t,e,n,o),s.bindBuffer(c,null)};nt.prototype.isDestroyed=function(){return!1};nt.prototype.destroy=function(){return this._gl.deleteBuffer(this._buffer),dt(this)};const Ky={ENVIRONMENT:0,COMPUTE:1,GLOBE:2,TERRAIN_CLASSIFICATION:3,CESIUM_3D_TILE:4,CESIUM_3D_TILE_CLASSIFICATION:5,CESIUM_3D_TILE_CLASSIFICATION_IGNORE_SHOW:6,OPAQUE:7,TRANSLUCENT:8,VOXELS:9,GAUSSIAN_SPLATS:10,OVERLAY:11,NUMBER_OF_PASSES:12},vo=Object.freeze(Ky),Ve={CULL:1,OCCLUDE:2,EXECUTE_IN_CLOSEST_FRUSTUM:4,DEBUG_SHOW_BOUNDING_VOLUME:8,CAST_SHADOWS:16,RECEIVE_SHADOWS:32,PICK_ONLY:64,DEPTH_FOR_TRANSLUCENT_CLASSIFICATION:128};function un(e){e=e??ue.EMPTY_OBJECT,this._boundingVolume=e.boundingVolume,this._orientedBoundingBox=e.orientedBoundingBox,this._modelMatrix=e.modelMatrix,this._primitiveType=e.primitiveType??xe.TRIANGLES,this._vertexArray=e.vertexArray,this._count=e.count,this._offset=e.offset??0,this._instanceCount=e.instanceCount??0,this._shaderProgram=e.shaderProgram,this._uniformMap=e.uniformMap,this._renderState=e.renderState,this._framebuffer=e.framebuffer,this._pass=e.pass,this._owner=e.owner,this._debugOverlappingFrustums=0,this._pickId=e.pickId,this._pickMetadataAllowed=e.pickMetadataAllowed===!0,this._pickedMetadataInfo=void 0,this._flags=0,this.cull=e.cull??!0,this.occlude=e.occlude??!0,this.executeInClosestFrustum=e.executeInClosestFrustum??!1,this.debugShowBoundingVolume=e.debugShowBoundingVolume??!1,this.castShadows=e.castShadows??!1,this.receiveShadows=e.receiveShadows??!1,this.pickOnly=e.pickOnly??!1,this.depthForTranslucentClassification=e.depthForTranslucentClassification??!1,this.dirty=!0,this.lastDirtyTime=0,this.derivedCommands={}}function _t(e,t){return(e._flags&t)===t}function Un(e,t,n){n?e._flags|=t:e._flags&=~t}Object.defineProperties(un.prototype,{boundingVolume:{get:function(){return this._boundingVolume},set:function(e){this._boundingVolume!==e&&(this._boundingVolume=e,this.dirty=!0)}},orientedBoundingBox:{get:function(){return this._orientedBoundingBox},set:function(e){this._orientedBoundingBox!==e&&(this._orientedBoundingBox=e,this.dirty=!0)}},cull:{get:function(){return _t(this,Ve.CULL)},set:function(e){_t(this,Ve.CULL)!==e&&(Un(this,Ve.CULL,e),this.dirty=!0)}},occlude:{get:function(){return _t(this,Ve.OCCLUDE)},set:function(e){_t(this,Ve.OCCLUDE)!==e&&(Un(this,Ve.OCCLUDE,e),this.dirty=!0)}},modelMatrix:{get:function(){return this._modelMatrix},set:function(e){this._modelMatrix!==e&&(this._modelMatrix=e,this.dirty=!0)}},primitiveType:{get:function(){return this._primitiveType},set:function(e){this._primitiveType!==e&&(this._primitiveType=e,this.dirty=!0)}},vertexArray:{get:function(){return this._vertexArray},set:function(e){this._vertexArray!==e&&(this._vertexArray=e,this.dirty=!0)}},count:{get:function(){return this._count},set:function(e){this._count!==e&&(this._count=e,this.dirty=!0)}},offset:{get:function(){return this._offset},set:function(e){this._offset!==e&&(this._offset=e,this.dirty=!0)}},instanceCount:{get:function(){return this._instanceCount},set:function(e){this._instanceCount!==e&&(this._instanceCount=e,this.dirty=!0)}},shaderProgram:{get:function(){return this._shaderProgram},set:function(e){this._shaderProgram!==e&&(this._shaderProgram=e,this.dirty=!0)}},castShadows:{get:function(){return _t(this,Ve.CAST_SHADOWS)},set:function(e){_t(this,Ve.CAST_SHADOWS)!==e&&(Un(this,Ve.CAST_SHADOWS,e),this.dirty=!0)}},receiveShadows:{get:function(){return _t(this,Ve.RECEIVE_SHADOWS)},set:function(e){_t(this,Ve.RECEIVE_SHADOWS)!==e&&(Un(this,Ve.RECEIVE_SHADOWS,e),this.dirty=!0)}},uniformMap:{get:function(){return this._uniformMap},set:function(e){this._uniformMap!==e&&(this._uniformMap=e,this.dirty=!0)}},renderState:{get:function(){return this._renderState},set:function(e){this._renderState!==e&&(this._renderState=e,this.dirty=!0)}},framebuffer:{get:function(){return this._framebuffer},set:function(e){this._framebuffer!==e&&(this._framebuffer=e,this.dirty=!0)}},pass:{get:function(){return this._pass},set:function(e){this._pass!==e&&(this._pass=e,this.dirty=!0)}},executeInClosestFrustum:{get:function(){return _t(this,Ve.EXECUTE_IN_CLOSEST_FRUSTUM)},set:function(e){_t(this,Ve.EXECUTE_IN_CLOSEST_FRUSTUM)!==e&&(Un(this,Ve.EXECUTE_IN_CLOSEST_FRUSTUM,e),this.dirty=!0)}},owner:{get:function(){return this._owner},set:function(e){this._owner!==e&&(this._owner=e,this.dirty=!0)}},debugShowBoundingVolume:{get:function(){return _t(this,Ve.DEBUG_SHOW_BOUNDING_VOLUME)},set:function(e){_t(this,Ve.DEBUG_SHOW_BOUNDING_VOLUME)!==e&&(Un(this,Ve.DEBUG_SHOW_BOUNDING_VOLUME,e),this.dirty=!0)}},debugOverlappingFrustums:{get:function(){return this._debugOverlappingFrustums},set:function(e){this._debugOverlappingFrustums!==e&&(this._debugOverlappingFrustums=e,this.dirty=!0)}},pickId:{get:function(){return this._pickId},set:function(e){this._pickId!==e&&(this._pickId=e,this.dirty=!0)}},pickMetadataAllowed:{get:function(){return this._pickMetadataAllowed}},pickedMetadataInfo:{get:function(){return this._pickedMetadataInfo},set:function(e){this._pickedMetadataInfo!==e&&(this._pickedMetadataInfo=e,this.dirty=!0)}},pickOnly:{get:function(){return _t(this,Ve.PICK_ONLY)},set:function(e){_t(this,Ve.PICK_ONLY)!==e&&(Un(this,Ve.PICK_ONLY,e),this.dirty=!0)}},depthForTranslucentClassification:{get:function(){return _t(this,Ve.DEPTH_FOR_TRANSLUCENT_CLASSIFICATION)},set:function(e){_t(this,Ve.DEPTH_FOR_TRANSLUCENT_CLASSIFICATION)!==e&&(Un(this,Ve.DEPTH_FOR_TRANSLUCENT_CLASSIFICATION,e),this.dirty=!0)}}});un.shallowClone=function(e,t){if(u(e))return u(t)||(t=new un),t._boundingVolume=e._boundingVolume,t._orientedBoundingBox=e._orientedBoundingBox,t._modelMatrix=e._modelMatrix,t._primitiveType=e._primitiveType,t._vertexArray=e._vertexArray,t._count=e._count,t._offset=e._offset,t._instanceCount=e._instanceCount,t._shaderProgram=e._shaderProgram,t._uniformMap=e._uniformMap,t._renderState=e._renderState,t._framebuffer=e._framebuffer,t._pass=e._pass,t._owner=e._owner,t._debugOverlappingFrustums=e._debugOverlappingFrustums,t._pickId=e._pickId,t._pickMetadataAllowed=e._pickMetadataAllowed,t._pickedMetadataInfo=e._pickedMetadataInfo,t._flags=e._flags,t.dirty=!0,t.lastDirtyTime=0,t};un.prototype.execute=function(e,t){e.draw(this,t)};const ge={_maximumCombinedTextureImageUnits:0,_maximumCubeMapSize:0,_maximumFragmentUniformVectors:0,_maximumTextureImageUnits:0,_maximumRenderbufferSize:0,_maximumTextureSize:0,_maximumVaryingVectors:0,_maximumVertexAttributes:0,_maximumVertexTextureImageUnits:0,_maximumVertexUniformVectors:0,_minimumAliasedLineWidth:0,_maximumAliasedLineWidth:0,_minimumAliasedPointSize:0,_maximumAliasedPointSize:0,_maximumViewportWidth:0,_maximumViewportHeight:0,_maximumTextureFilterAnisotropy:0,_maximumDrawBuffers:0,_maximumColorAttachments:0,_maximumSamples:0,_highpFloatSupported:!1,_highpIntSupported:!1};Object.defineProperties(ge,{maximumCombinedTextureImageUnits:{get:function(){return ge._maximumCombinedTextureImageUnits}},maximumCubeMapSize:{get:function(){return ge._maximumCubeMapSize}},maximumFragmentUniformVectors:{get:function(){return ge._maximumFragmentUniformVectors}},maximumTextureImageUnits:{get:function(){return ge._maximumTextureImageUnits}},maximumRenderbufferSize:{get:function(){return ge._maximumRenderbufferSize}},maximumTextureSize:{get:function(){return ge._maximumTextureSize}},maximumVaryingVectors:{get:function(){return ge._maximumVaryingVectors}},maximumVertexAttributes:{get:function(){return ge._maximumVertexAttributes}},maximumVertexTextureImageUnits:{get:function(){return ge._maximumVertexTextureImageUnits}},maximumVertexUniformVectors:{get:function(){return ge._maximumVertexUniformVectors}},minimumAliasedLineWidth:{get:function(){return ge._minimumAliasedLineWidth}},maximumAliasedLineWidth:{get:function(){return ge._maximumAliasedLineWidth}},minimumAliasedPointSize:{get:function(){return ge._minimumAliasedPointSize}},maximumAliasedPointSize:{get:function(){return ge._maximumAliasedPointSize}},maximumViewportWidth:{get:function(){return ge._maximumViewportWidth}},maximumViewportHeight:{get:function(){return ge._maximumViewportHeight}},maximumTextureFilterAnisotropy:{get:function(){return ge._maximumTextureFilterAnisotropy}},maximumDrawBuffers:{get:function(){return ge._maximumDrawBuffers}},maximumColorAttachments:{get:function(){return ge._maximumColorAttachments}},maximumSamples:{get:function(){return ge._maximumSamples}},highpFloatSupported:{get:function(){return ge._highpFloatSupported}},highpIntSupported:{get:function(){return ge._highpIntSupported}}});function za(e,t,n){const o=e._gl;o.framebufferTexture2D(o.FRAMEBUFFER,t,n._target,n._texture,0)}function ir(e,t,n){const o=e._gl;o.framebufferRenderbuffer(o.FRAMEBUFFER,t,o.RENDERBUFFER,n._getRenderbuffer())}function on(e){e=e??ue.EMPTY_OBJECT;const t=e.context;h.defined("options.context",t);const n=t._gl,o=ge.maximumColorAttachments;if(this._gl=n,this._framebuffer=n.createFramebuffer(),this._colorTextures=[],this._colorRenderbuffers=[],this._activeColorAttachments=[],this._depthTexture=void 0,this._depthRenderbuffer=void 0,this._stencilRenderbuffer=void 0,this._depthStencilTexture=void 0,this._depthStencilRenderbuffer=void 0,this.destroyAttachments=e.destroyAttachments??!0,u(e.colorTextures)&&u(e.colorRenderbuffers))throw new T("Cannot have both color texture and color renderbuffer attachments.");if(u(e.depthTexture)&&u(e.depthRenderbuffer))throw new T("Cannot have both a depth texture and depth renderbuffer attachment.");if(u(e.depthStencilTexture)&&u(e.depthStencilRenderbuffer))throw new T("Cannot have both a depth-stencil texture and depth-stencil renderbuffer attachment.");const i=u(e.depthTexture)||u(e.depthRenderbuffer),a=u(e.depthStencilTexture)||u(e.depthStencilRenderbuffer);if(i&&a)throw new T("Cannot have both a depth and depth-stencil attachment.");if(u(e.stencilRenderbuffer)&&a)throw new T("Cannot have both a stencil and depth-stencil attachment.");if(i&&u(e.stencilRenderbuffer))throw new T("Cannot have both a depth and stencil attachment.");if(this._bind(),u(e.colorTextures)){const r=e.colorTextures,s=this._colorTextures.length=this._activeColorAttachments.length=r.length;if(s>o)throw new T("The number of color attachments exceeds the number supported.");for(let c=0;c<s;++c){const f=r[c];if(!me.isColorFormat(f.pixelFormat))throw new T("The color-texture pixel-format must be a color format.");if(f.pixelDatatype===he.FLOAT&&!t.colorBufferFloat)throw new T("The color texture pixel datatype is FLOAT and the WebGL implementation does not support the EXT_color_buffer_float or WEBGL_color_buffer_float extensions. See Context.colorBufferFloat.");if(f.pixelDatatype===he.HALF_FLOAT&&!t.colorBufferHalfFloat)throw new T("The color texture pixel datatype is HALF_FLOAT and the WebGL implementation does not support the EXT_color_buffer_half_float extension. See Context.colorBufferHalfFloat.");const d=this._gl.COLOR_ATTACHMENT0+c;za(this,d,f),this._activeColorAttachments[c]=d,this._colorTextures[c]=f}}if(u(e.colorRenderbuffers)){const r=e.colorRenderbuffers,s=this._colorRenderbuffers.length=this._activeColorAttachments.length=r.length;if(s>o)throw new T("The number of color attachments exceeds the number supported.");for(let c=0;c<s;++c){const f=r[c],d=this._gl.COLOR_ATTACHMENT0+c;ir(this,d,f),this._activeColorAttachments[c]=d,this._colorRenderbuffers[c]=f}}if(u(e.depthTexture)){const r=e.depthTexture;if(r.pixelFormat!==me.DEPTH_COMPONENT)throw new T("The depth-texture pixel-format must be DEPTH_COMPONENT.");za(this,this._gl.DEPTH_ATTACHMENT,r),this._depthTexture=r}if(u(e.depthRenderbuffer)){const r=e.depthRenderbuffer;ir(this,this._gl.DEPTH_ATTACHMENT,r),this._depthRenderbuffer=r}if(u(e.stencilRenderbuffer)){const r=e.stencilRenderbuffer;ir(this,this._gl.STENCIL_ATTACHMENT,r),this._stencilRenderbuffer=r}if(u(e.depthStencilTexture)){const r=e.depthStencilTexture;if(r.pixelFormat!==me.DEPTH_STENCIL)throw new T("The depth-stencil pixel-format must be DEPTH_STENCIL.");za(this,this._gl.DEPTH_STENCIL_ATTACHMENT,r),this._depthStencilTexture=r}if(u(e.depthStencilRenderbuffer)){const r=e.depthStencilRenderbuffer;ir(this,this._gl.DEPTH_STENCIL_ATTACHMENT,r),this._depthStencilRenderbuffer=r}this._unBind()}Object.defineProperties(on.prototype,{status:{get:function(){this._bind();const e=this._gl.checkFramebufferStatus(this._gl.FRAMEBUFFER);return this._unBind(),e}},numberOfColorAttachments:{get:function(){return this._activeColorAttachments.length}},depthTexture:{get:function(){return this._depthTexture}},depthRenderbuffer:{get:function(){return this._depthRenderbuffer}},stencilRenderbuffer:{get:function(){return this._stencilRenderbuffer}},depthStencilTexture:{get:function(){return this._depthStencilTexture}},depthStencilRenderbuffer:{get:function(){return this._depthStencilRenderbuffer}},hasDepthAttachment:{get:function(){return!!(this.depthTexture||this.depthRenderbuffer||this.depthStencilTexture||this.depthStencilRenderbuffer)}}});on.prototype._bind=function(){const e=this._gl;e.bindFramebuffer(e.FRAMEBUFFER,this._framebuffer)};on.prototype._unBind=function(){const e=this._gl;e.bindFramebuffer(e.FRAMEBUFFER,null)};on.prototype.bindDraw=function(){const e=this._gl;e.bindFramebuffer(e.DRAW_FRAMEBUFFER,this._framebuffer)};on.prototype.bindRead=function(){const e=this._gl;e.bindFramebuffer(e.READ_FRAMEBUFFER,this._framebuffer)};on.prototype._getActiveColorAttachments=function(){return this._activeColorAttachments};on.prototype.getColorTexture=function(e){if(!u(e)||e<0||e>=this._colorTextures.length)throw new T("index is required, must be greater than or equal to zero and must be less than the number of color attachments.");return this._colorTextures[e]};on.prototype.getColorRenderbuffer=function(e){if(!u(e)||e<0||e>=this._colorRenderbuffers.length)throw new T("index is required, must be greater than or equal to zero and must be less than the number of color attachments.");return this._colorRenderbuffers[e]};on.prototype.isDestroyed=function(){return!1};on.prototype.destroy=function(){if(this.destroyAttachments){const e=this._colorTextures;for(let n=0;n<e.length;++n){const o=e[n];u(o)&&o.destroy()}const t=this._colorRenderbuffers;for(let n=0;n<t.length;++n){const o=t[n];u(o)&&o.destroy()}this._depthTexture=this._depthTexture&&this._depthTexture.destroy(),this._depthRenderbuffer=this._depthRenderbuffer&&this._depthRenderbuffer.destroy(),this._stencilRenderbuffer=this._stencilRenderbuffer&&this._stencilRenderbuffer.destroy(),this._depthStencilTexture=this._depthStencilTexture&&this._depthStencilTexture.destroy(),this._depthStencilRenderbuffer=this._depthStencilRenderbuffer&&this._depthStencilRenderbuffer.destroy()}return this._gl.deleteFramebuffer(this._framebuffer),dt(this)};function vu(e){if(typeof e!="object"||e===null)return e;let t;const n=Object.keys(e);for(let o=0;o<n.length;o++)t=n[o],e.hasOwnProperty(t)&&t!=="_applyFunctions"&&(e[t]=vu(e[t]));return Object.freeze(e)}function xl(e){return e===z.FUNC_ADD||e===z.FUNC_SUBTRACT||e===z.FUNC_REVERSE_SUBTRACT||e===z.MIN||e===z.MAX}function rr(e){return e===z.ZERO||e===z.ONE||e===z.SRC_COLOR||e===z.ONE_MINUS_SRC_COLOR||e===z.DST_COLOR||e===z.ONE_MINUS_DST_COLOR||e===z.SRC_ALPHA||e===z.ONE_MINUS_SRC_ALPHA||e===z.DST_ALPHA||e===z.ONE_MINUS_DST_ALPHA||e===z.CONSTANT_COLOR||e===z.ONE_MINUS_CONSTANT_COLOR||e===z.CONSTANT_ALPHA||e===z.ONE_MINUS_CONSTANT_ALPHA||e===z.SRC_ALPHA_SATURATE}function Qy(e){return e===z.FRONT||e===z.BACK||e===z.FRONT_AND_BACK}function Jy(e){return e===z.NEVER||e===z.LESS||e===z.EQUAL||e===z.LEQUAL||e===z.GREATER||e===z.NOTEQUAL||e===z.GEQUAL||e===z.ALWAYS}function Cl(e){return e===z.NEVER||e===z.LESS||e===z.EQUAL||e===z.LEQUAL||e===z.GREATER||e===z.NOTEQUAL||e===z.GEQUAL||e===z.ALWAYS}function Ao(e){return e===z.ZERO||e===z.KEEP||e===z.REPLACE||e===z.INCR||e===z.DECR||e===z.INVERT||e===z.INCR_WRAP||e===z.DECR_WRAP}function pt(e){const t=e??ue.EMPTY_OBJECT,n=t.cull??ue.EMPTY_OBJECT,o=t.polygonOffset??ue.EMPTY_OBJECT,i=t.scissorTest??ue.EMPTY_OBJECT,a=i.rectangle??ue.EMPTY_OBJECT,r=t.depthRange??ue.EMPTY_OBJECT,s=t.depthTest??ue.EMPTY_OBJECT,c=t.colorMask??ue.EMPTY_OBJECT,f=t.blending??ue.EMPTY_OBJECT,d=f.color??ue.EMPTY_OBJECT,m=t.stencilTest??ue.EMPTY_OBJECT,p=m.frontOperation??ue.EMPTY_OBJECT,_=m.backOperation??ue.EMPTY_OBJECT,g=t.sampleCoverage??ue.EMPTY_OBJECT,b=t.viewport;if(this.frontFace=t.frontFace??qo.COUNTER_CLOCKWISE,this.cull={enabled:n.enabled??!1,face:n.face??z.BACK},this.lineWidth=t.lineWidth??1,this.polygonOffset={enabled:o.enabled??!1,factor:o.factor??0,units:o.units??0},this.scissorTest={enabled:i.enabled??!1,rectangle:Be.clone(a)},this.depthRange={near:r.near??0,far:r.far??1},this.depthTest={enabled:s.enabled??!1,func:s.func??z.LESS},this.colorMask={red:c.red??!0,green:c.green??!0,blue:c.blue??!0,alpha:c.alpha??!0},this.depthMask=t.depthMask??!0,this.stencilMask=t.stencilMask??-1,this.blending={enabled:f.enabled??!1,color:new O(d.red??0,d.green??0,d.blue??0,d.alpha??0),equationRgb:f.equationRgb??z.FUNC_ADD,equationAlpha:f.equationAlpha??z.FUNC_ADD,functionSourceRgb:f.functionSourceRgb??z.ONE,functionSourceAlpha:f.functionSourceAlpha??z.ONE,functionDestinationRgb:f.functionDestinationRgb??z.ZERO,functionDestinationAlpha:f.functionDestinationAlpha??z.ZERO},this.stencilTest={enabled:m.enabled??!1,frontFunction:m.frontFunction??z.ALWAYS,backFunction:m.backFunction??z.ALWAYS,reference:m.reference??0,mask:m.mask??-1,frontOperation:{fail:p.fail??z.KEEP,zFail:p.zFail??z.KEEP,zPass:p.zPass??z.KEEP},backOperation:{fail:_.fail??z.KEEP,zFail:_.zFail??z.KEEP,zPass:_.zPass??z.KEEP}},this.sampleCoverage={enabled:g.enabled??!1,value:g.value??1,invert:g.invert??!1},this.viewport=u(b)?new Be(b.x,b.y,b.width,b.height):void 0,this.lineWidth<ge.minimumAliasedLineWidth||this.lineWidth>ge.maximumAliasedLineWidth)throw new T("renderState.lineWidth is out of range.  Check minimumAliasedLineWidth and maximumAliasedLineWidth.");if(!qo.validate(this.frontFace))throw new T("Invalid renderState.frontFace.");if(!Qy(this.cull.face))throw new T("Invalid renderState.cull.face.");if(this.scissorTest.rectangle.width<0||this.scissorTest.rectangle.height<0)throw new T("renderState.scissorTest.rectangle.width and renderState.scissorTest.rectangle.height must be greater than or equal to zero.");if(this.depthRange.near>this.depthRange.far)throw new T("renderState.depthRange.near can not be greater than renderState.depthRange.far.");if(this.depthRange.near<0)throw new T("renderState.depthRange.near must be greater than or equal to zero.");if(this.depthRange.far>1)throw new T("renderState.depthRange.far must be less than or equal to one.");if(!Jy(this.depthTest.func))throw new T("Invalid renderState.depthTest.func.");if(this.blending.color.red<0||this.blending.color.red>1||this.blending.color.green<0||this.blending.color.green>1||this.blending.color.blue<0||this.blending.color.blue>1||this.blending.color.alpha<0||this.blending.color.alpha>1)throw new T("renderState.blending.color components must be greater than or equal to zero and less than or equal to one.");if(!xl(this.blending.equationRgb))throw new T("Invalid renderState.blending.equationRgb.");if(!xl(this.blending.equationAlpha))throw new T("Invalid renderState.blending.equationAlpha.");if(!rr(this.blending.functionSourceRgb))throw new T("Invalid renderState.blending.functionSourceRgb.");if(!rr(this.blending.functionSourceAlpha))throw new T("Invalid renderState.blending.functionSourceAlpha.");if(!rr(this.blending.functionDestinationRgb))throw new T("Invalid renderState.blending.functionDestinationRgb.");if(!rr(this.blending.functionDestinationAlpha))throw new T("Invalid renderState.blending.functionDestinationAlpha.");if(!Cl(this.stencilTest.frontFunction))throw new T("Invalid renderState.stencilTest.frontFunction.");if(!Cl(this.stencilTest.backFunction))throw new T("Invalid renderState.stencilTest.backFunction.");if(!Ao(this.stencilTest.frontOperation.fail))throw new T("Invalid renderState.stencilTest.frontOperation.fail.");if(!Ao(this.stencilTest.frontOperation.zFail))throw new T("Invalid renderState.stencilTest.frontOperation.zFail.");if(!Ao(this.stencilTest.frontOperation.zPass))throw new T("Invalid renderState.stencilTest.frontOperation.zPass.");if(!Ao(this.stencilTest.backOperation.fail))throw new T("Invalid renderState.stencilTest.backOperation.fail.");if(!Ao(this.stencilTest.backOperation.zFail))throw new T("Invalid renderState.stencilTest.backOperation.zFail.");if(!Ao(this.stencilTest.backOperation.zPass))throw new T("Invalid renderState.stencilTest.backOperation.zPass.");if(u(this.viewport)){if(this.viewport.width<0)throw new T("renderState.viewport.width must be greater than or equal to zero.");if(this.viewport.height<0)throw new T("renderState.viewport.height must be greater than or equal to zero.");if(this.viewport.width>ge.maximumViewportWidth)throw new T(`renderState.viewport.width must be less than or equal to the maximum viewport width (${ge.maximumViewportWidth.toString()}).  Check maximumViewportWidth.`);if(this.viewport.height>ge.maximumViewportHeight)throw new T(`renderState.viewport.height must be less than or equal to the maximum viewport height (${ge.maximumViewportHeight.toString()}).  Check maximumViewportHeight.`)}this.id=0,this._applyFunctions=[]}let eb=0,hn={};pt.fromCache=function(e){const t=JSON.stringify(e);let n=hn[t];if(u(n))return++n.referenceCount,n.state;let o=new pt(e);const i=JSON.stringify(o);return n=hn[i],u(n)||(o.id=eb++,o=vu(o),n={referenceCount:0,state:o},hn[i]=n),++n.referenceCount,hn[t]={referenceCount:1,state:n.state},n.state};pt.removeFromCache=function(e){const t=new pt(e),n=JSON.stringify(t),o=hn[n],i=JSON.stringify(e),a=hn[i];u(a)&&(--a.referenceCount,a.referenceCount===0&&(delete hn[i],u(o)&&--o.referenceCount)),u(o)&&o.referenceCount===0&&delete hn[n]};pt.getCache=function(){return hn};pt.clearCache=function(){hn={}};function mo(e,t,n){n?e.enable(t):e.disable(t)}function Ru(e,t){e.frontFace(t.frontFace)}function zu(e,t){const n=t.cull,o=n.enabled;mo(e,e.CULL_FACE,o),o&&e.cullFace(n.face)}function Iu(e,t){e.lineWidth(t.lineWidth)}function Pu(e,t){const n=t.polygonOffset,o=n.enabled;mo(e,e.POLYGON_OFFSET_FILL,o),o&&e.polygonOffset(n.factor,n.units)}function Mu(e,t,n){const o=t.scissorTest,i=u(n.scissorTest)?n.scissorTest.enabled:o.enabled;if(mo(e,e.SCISSOR_TEST,i),i){const a=u(n.scissorTest)?n.scissorTest.rectangle:o.rectangle;e.scissor(a.x,a.y,a.width,a.height)}}function Nu(e,t){const n=t.depthRange;e.depthRange(n.near,n.far)}function Du(e,t){const n=t.depthTest,o=n.enabled;mo(e,e.DEPTH_TEST,o),o&&e.depthFunc(n.func)}function Lu(e,t){const n=t.colorMask;e.colorMask(n.red,n.green,n.blue,n.alpha)}function Fu(e,t){e.depthMask(t.depthMask)}function Bu(e,t){e.stencilMask(t.stencilMask)}function tb(e,t){e.blendColor(t.red,t.green,t.blue,t.alpha)}function Uu(e,t,n){const o=t.blending,i=u(n.blendingEnabled)?n.blendingEnabled:o.enabled;mo(e,e.BLEND,i),i&&(tb(e,o.color),e.blendEquationSeparate(o.equationRgb,o.equationAlpha),e.blendFuncSeparate(o.functionSourceRgb,o.functionDestinationRgb,o.functionSourceAlpha,o.functionDestinationAlpha))}function Gu(e,t){const n=t.stencilTest,o=n.enabled;if(mo(e,e.STENCIL_TEST,o),o){const i=n.frontFunction,a=n.backFunction,r=n.reference,s=n.mask;e.stencilFunc(i,r,s),e.stencilFuncSeparate(e.BACK,a,r,s),e.stencilFuncSeparate(e.FRONT,i,r,s);const c=n.frontOperation,f=c.fail,d=c.zFail,m=c.zPass;e.stencilOpSeparate(e.FRONT,f,d,m);const p=n.backOperation,_=p.fail,g=p.zFail,b=p.zPass;e.stencilOpSeparate(e.BACK,_,g,b)}}function qu(e,t){const n=t.sampleCoverage,o=n.enabled;mo(e,e.SAMPLE_COVERAGE,o),o&&e.sampleCoverage(n.value,n.invert)}const nb=new Be;function ku(e,t,n){let o=t.viewport??n.viewport;u(o)||(o=nb,o.width=n.context.drawingBufferWidth,o.height=n.context.drawingBufferHeight),n.context.uniformState.viewport=o,e.viewport(o.x,o.y,o.width,o.height)}pt.apply=function(e,t,n){Ru(e,t),zu(e,t),Iu(e,t),Pu(e,t),Nu(e,t),Du(e,t),Lu(e,t),Fu(e,t),Bu(e,t),Gu(e,t),qu(e,t),Mu(e,t,n),Uu(e,t,n),ku(e,t,n)};function ob(e,t){const n=[];return e.frontFace!==t.frontFace&&n.push(Ru),(e.cull.enabled!==t.cull.enabled||e.cull.face!==t.cull.face)&&n.push(zu),e.lineWidth!==t.lineWidth&&n.push(Iu),(e.polygonOffset.enabled!==t.polygonOffset.enabled||e.polygonOffset.factor!==t.polygonOffset.factor||e.polygonOffset.units!==t.polygonOffset.units)&&n.push(Pu),(e.depthRange.near!==t.depthRange.near||e.depthRange.far!==t.depthRange.far)&&n.push(Nu),(e.depthTest.enabled!==t.depthTest.enabled||e.depthTest.func!==t.depthTest.func)&&n.push(Du),(e.colorMask.red!==t.colorMask.red||e.colorMask.green!==t.colorMask.green||e.colorMask.blue!==t.colorMask.blue||e.colorMask.alpha!==t.colorMask.alpha)&&n.push(Lu),e.depthMask!==t.depthMask&&n.push(Fu),e.stencilMask!==t.stencilMask&&n.push(Bu),(e.stencilTest.enabled!==t.stencilTest.enabled||e.stencilTest.frontFunction!==t.stencilTest.frontFunction||e.stencilTest.backFunction!==t.stencilTest.backFunction||e.stencilTest.reference!==t.stencilTest.reference||e.stencilTest.mask!==t.stencilTest.mask||e.stencilTest.frontOperation.fail!==t.stencilTest.frontOperation.fail||e.stencilTest.frontOperation.zFail!==t.stencilTest.frontOperation.zFail||e.stencilTest.backOperation.fail!==t.stencilTest.backOperation.fail||e.stencilTest.backOperation.zFail!==t.stencilTest.backOperation.zFail||e.stencilTest.backOperation.zPass!==t.stencilTest.backOperation.zPass)&&n.push(Gu),(e.sampleCoverage.enabled!==t.sampleCoverage.enabled||e.sampleCoverage.value!==t.sampleCoverage.value||e.sampleCoverage.invert!==t.sampleCoverage.invert)&&n.push(qu),n}pt.partialApply=function(e,t,n,o,i,a){if(t!==n){let d=n._applyFunctions[t.id];u(d)||(d=ob(t,n),n._applyFunctions[t.id]=d);const m=d.length;for(let p=0;p<m;++p)d[p](e,n)}const r=u(o.scissorTest)?o.scissorTest:t.scissorTest,s=u(i.scissorTest)?i.scissorTest:n.scissorTest;(r!==s||a)&&Mu(e,n,i);const c=u(o.blendingEnabled)?o.blendingEnabled:t.blending.enabled,f=u(i.blendingEnabled)?i.blendingEnabled:n.blending.enabled;(c!==f||f&&t.blending!==n.blending)&&Uu(e,n,i),(t!==n||o!==i||o.context!==i.context)&&ku(e,n,i)};pt.getState=function(e){if(!u(e))throw new T("renderState is required.");return{frontFace:e.frontFace,cull:{enabled:e.cull.enabled,face:e.cull.face},lineWidth:e.lineWidth,polygonOffset:{enabled:e.polygonOffset.enabled,factor:e.polygonOffset.factor,units:e.polygonOffset.units},scissorTest:{enabled:e.scissorTest.enabled,rectangle:Be.clone(e.scissorTest.rectangle)},depthRange:{near:e.depthRange.near,far:e.depthRange.far},depthTest:{enabled:e.depthTest.enabled,func:e.depthTest.func},colorMask:{red:e.colorMask.red,green:e.colorMask.green,blue:e.colorMask.blue,alpha:e.colorMask.alpha},depthMask:e.depthMask,stencilMask:e.stencilMask,blending:{enabled:e.blending.enabled,color:O.clone(e.blending.color),equationRgb:e.blending.equationRgb,equationAlpha:e.blending.equationAlpha,functionSourceRgb:e.blending.functionSourceRgb,functionSourceAlpha:e.blending.functionSourceAlpha,functionDestinationRgb:e.blending.functionDestinationRgb,functionDestinationAlpha:e.blending.functionDestinationAlpha},stencilTest:{enabled:e.stencilTest.enabled,frontFunction:e.stencilTest.frontFunction,backFunction:e.stencilTest.backFunction,reference:e.stencilTest.reference,mask:e.stencilTest.mask,frontOperation:{fail:e.stencilTest.frontOperation.fail,zFail:e.stencilTest.frontOperation.zFail,zPass:e.stencilTest.frontOperation.zPass},backOperation:{fail:e.stencilTest.backOperation.fail,zFail:e.stencilTest.backOperation.zFail,zPass:e.stencilTest.backOperation.zPass}},sampleCoverage:{enabled:e.sampleCoverage.enabled,value:e.sampleCoverage.value,invert:e.sampleCoverage.invert},viewport:u(e.viewport)?Be.clone(e.viewport):void 0}};function ib(e,t,n,o){switch(t.type){case e.FLOAT:return new Vu(e,t,n,o);case e.FLOAT_VEC2:return new ju(e,t,n,o);case e.FLOAT_VEC3:return new Hu(e,t,n,o);case e.FLOAT_VEC4:return new Wu(e,t,n,o);case e.SAMPLER_2D:case e.SAMPLER_3D:case e.SAMPLER_CUBE:return new Mr(e,t,n,o);case e.UNSIGNED_INT_SAMPLER_2D:return new Mr(e,t,n,o);case e.INT:case e.BOOL:return new Yu(e,t,n,o);case e.INT_VEC2:case e.BOOL_VEC2:return new Xu(e,t,n,o);case e.INT_VEC3:case e.BOOL_VEC3:return new $u(e,t,n,o);case e.INT_VEC4:case e.BOOL_VEC4:return new Zu(e,t,n,o);case e.FLOAT_MAT2:return new Ku(e,t,n,o);case e.FLOAT_MAT3:return new Qu(e,t,n,o);case e.FLOAT_MAT4:return new Ju(e,t,n,o);default:throw new Ye(`Unrecognized uniform type: ${t.type} for uniform "${n}".`)}}function Vu(e,t,n,o){this.name=n,this.value=void 0,this._value=0,this._gl=e,this._location=o}Vu.prototype.set=function(){this.value!==this._value&&(this._value=this.value,this._gl.uniform1f(this._location,this.value))};function ju(e,t,n,o){this.name=n,this.value=void 0,this._value=new U,this._gl=e,this._location=o}ju.prototype.set=function(){const e=this.value;U.equals(e,this._value)||(U.clone(e,this._value),this._gl.uniform2f(this._location,e.x,e.y))};function Hu(e,t,n,o){this.name=n,this.value=void 0,this._value=void 0,this._gl=e,this._location=o}Hu.prototype.set=function(){const e=this.value;if(u(e.red))O.equals(e,this._value)||(this._value=O.clone(e,this._value),this._gl.uniform3f(this._location,e.red,e.green,e.blue));else if(u(e.x))l.equals(e,this._value)||(this._value=l.clone(e,this._value),this._gl.uniform3f(this._location,e.x,e.y,e.z));else throw new T(`Invalid vec3 value for uniform "${this.name}".`)};function Wu(e,t,n,o){this.name=n,this.value=void 0,this._value=void 0,this._gl=e,this._location=o}Wu.prototype.set=function(){const e=this.value;if(u(e.red))O.equals(e,this._value)||(this._value=O.clone(e,this._value),this._gl.uniform4f(this._location,e.red,e.green,e.blue,e.alpha));else if(u(e.x))W.equals(e,this._value)||(this._value=W.clone(e,this._value),this._gl.uniform4f(this._location,e.x,e.y,e.z,e.w));else throw new T(`Invalid vec4 value for uniform "${this.name}".`)};function Mr(e,t,n,o){this.name=n,this.value=void 0,this._gl=e,this._location=o,this.textureUnitIndex=void 0}Mr.prototype.set=function(){const e=this._gl;e.activeTexture(e.TEXTURE0+this.textureUnitIndex);const t=this.value;e.bindTexture(t._target,t._texture)};Mr.prototype._setSampler=function(e){return this.textureUnitIndex=e,this._gl.uniform1i(this._location,e),e+1};function Yu(e,t,n,o){this.name=n,this.value=void 0,this._value=0,this._gl=e,this._location=o}Yu.prototype.set=function(){this.value!==this._value&&(this._value=this.value,this._gl.uniform1i(this._location,this.value))};function Xu(e,t,n,o){this.name=n,this.value=void 0,this._value=new U,this._gl=e,this._location=o}Xu.prototype.set=function(){const e=this.value;U.equals(e,this._value)||(U.clone(e,this._value),this._gl.uniform2i(this._location,e.x,e.y))};function $u(e,t,n,o){this.name=n,this.value=void 0,this._value=new l,this._gl=e,this._location=o}$u.prototype.set=function(){const e=this.value;l.equals(e,this._value)||(l.clone(e,this._value),this._gl.uniform3i(this._location,e.x,e.y,e.z))};function Zu(e,t,n,o){this.name=n,this.value=void 0,this._value=new W,this._gl=e,this._location=o}Zu.prototype.set=function(){const e=this.value;W.equals(e,this._value)||(W.clone(e,this._value),this._gl.uniform4i(this._location,e.x,e.y,e.z,e.w))};const rb=new Float32Array(4);function Ku(e,t,n,o){this.name=n,this.value=void 0,this._value=new re,this._gl=e,this._location=o}Ku.prototype.set=function(){if(!re.equalsArray(this.value,this._value,0)){re.clone(this.value,this._value);const e=re.toArray(this.value,rb);this._gl.uniformMatrix2fv(this._location,!1,e)}};const ab=new Float32Array(9);function Qu(e,t,n,o){this.name=n,this.value=void 0,this._value=new P,this._gl=e,this._location=o}Qu.prototype.set=function(){if(!P.equalsArray(this.value,this._value,0)){P.clone(this.value,this._value);const e=P.toArray(this.value,ab);this._gl.uniformMatrix3fv(this._location,!1,e)}};const sb=new Float32Array(16);function Ju(e,t,n,o){this.name=n,this.value=void 0,this._value=new M,this._gl=e,this._location=o}Ju.prototype.set=function(){if(!M.equalsArray(this.value,this._value,0)){M.clone(this.value,this._value);const e=M.toArray(this.value,sb);this._gl.uniformMatrix4fv(this._location,!1,e)}};function cb(e,t,n,o){switch(t.type){case e.FLOAT:return new eh(e,t,n,o);case e.FLOAT_VEC2:return new th(e,t,n,o);case e.FLOAT_VEC3:return new nh(e,t,n,o);case e.FLOAT_VEC4:return new oh(e,t,n,o);case e.SAMPLER_2D:case e.SAMPLER_3D:case e.SAMPLER_CUBE:return new Ws(e,t,n,o);case e.INT:case e.BOOL:return new ih(e,t,n,o);case e.INT_VEC2:case e.BOOL_VEC2:return new rh(e,t,n,o);case e.INT_VEC3:case e.BOOL_VEC3:return new ah(e,t,n,o);case e.INT_VEC4:case e.BOOL_VEC4:return new sh(e,t,n,o);case e.FLOAT_MAT2:return new ch(e,t,n,o);case e.FLOAT_MAT3:return new lh(e,t,n,o);case e.FLOAT_MAT4:return new fh(e,t,n,o);default:throw new Ye(`Unrecognized uniform type: ${t.type} for uniform "${n}".`)}}function eh(e,t,n,o){const i=o.length;this.name=n,this.value=new Array(i),this._value=new Float32Array(i),this._gl=e,this._location=o[0]}eh.prototype.set=function(){const e=this.value,t=e.length,n=this._value;let o=!1;for(let i=0;i<t;++i){const a=e[i];a!==n[i]&&(n[i]=a,o=!0)}o&&this._gl.uniform1fv(this._location,n)};function th(e,t,n,o){const i=o.length;this.name=n,this.value=new Array(i),this._value=new Float32Array(i*2),this._gl=e,this._location=o[0]}th.prototype.set=function(){const e=this.value,t=e.length,n=this._value;let o=!1,i=0;for(let a=0;a<t;++a){const r=e[a];U.equalsArray(r,n,i)||(U.pack(r,n,i),o=!0),i+=2}o&&this._gl.uniform2fv(this._location,n)};function nh(e,t,n,o){const i=o.length;this.name=n,this.value=new Array(i),this._value=new Float32Array(i*3),this._gl=e,this._location=o[0]}nh.prototype.set=function(){const e=this.value,t=e.length,n=this._value;let o=!1,i=0;for(let a=0;a<t;++a){const r=e[a];if(u(r.red))(r.red!==n[i]||r.green!==n[i+1]||r.blue!==n[i+2])&&(n[i]=r.red,n[i+1]=r.green,n[i+2]=r.blue,o=!0);else if(u(r.x))l.equalsArray(r,n,i)||(l.pack(r,n,i),o=!0);else throw new T("Invalid vec3 value.");i+=3}o&&this._gl.uniform3fv(this._location,n)};function oh(e,t,n,o){const i=o.length;this.name=n,this.value=new Array(i),this._value=new Float32Array(i*4),this._gl=e,this._location=o[0]}oh.prototype.set=function(){const e=this.value,t=e.length,n=this._value;let o=!1,i=0;for(let a=0;a<t;++a){const r=e[a];if(u(r.red))O.equalsArray(r,n,i)||(O.pack(r,n,i),o=!0);else if(u(r.x))W.equalsArray(r,n,i)||(W.pack(r,n,i),o=!0);else throw new T("Invalid vec4 value.");i+=4}o&&this._gl.uniform4fv(this._location,n)};function Ws(e,t,n,o){const i=o.length;this.name=n,this.value=new Array(i),this._value=new Float32Array(i),this._gl=e,this._locations=o,this.textureUnitIndex=void 0}Ws.prototype.set=function(){const e=this._gl,t=e.TEXTURE0+this.textureUnitIndex,n=this.value,o=n.length;for(let i=0;i<o;++i){const a=n[i];e.activeTexture(t+i),e.bindTexture(a._target,a._texture)}};Ws.prototype._setSampler=function(e){this.textureUnitIndex=e;const t=this._locations,n=t.length;for(let o=0;o<n;++o){const i=e+o;this._gl.uniform1i(t[o],i)}return e+n};function ih(e,t,n,o){const i=o.length;this.name=n,this.value=new Array(i),this._value=new Int32Array(i),this._gl=e,this._location=o[0]}ih.prototype.set=function(){const e=this.value,t=e.length,n=this._value;let o=!1;for(let i=0;i<t;++i){const a=e[i];a!==n[i]&&(n[i]=a,o=!0)}o&&this._gl.uniform1iv(this._location,n)};function rh(e,t,n,o){const i=o.length;this.name=n,this.value=new Array(i),this._value=new Int32Array(i*2),this._gl=e,this._location=o[0]}rh.prototype.set=function(){const e=this.value,t=e.length,n=this._value;let o=!1,i=0;for(let a=0;a<t;++a){const r=e[a];U.equalsArray(r,n,i)||(U.pack(r,n,i),o=!0),i+=2}o&&this._gl.uniform2iv(this._location,n)};function ah(e,t,n,o){const i=o.length;this.name=n,this.value=new Array(i),this._value=new Int32Array(i*3),this._gl=e,this._location=o[0]}ah.prototype.set=function(){const e=this.value,t=e.length,n=this._value;let o=!1,i=0;for(let a=0;a<t;++a){const r=e[a];l.equalsArray(r,n,i)||(l.pack(r,n,i),o=!0),i+=3}o&&this._gl.uniform3iv(this._location,n)};function sh(e,t,n,o){const i=o.length;this.name=n,this.value=new Array(i),this._value=new Int32Array(i*4),this._gl=e,this._location=o[0]}sh.prototype.set=function(){const e=this.value,t=e.length,n=this._value;let o=!1,i=0;for(let a=0;a<t;++a){const r=e[a];W.equalsArray(r,n,i)||(W.pack(r,n,i),o=!0),i+=4}o&&this._gl.uniform4iv(this._location,n)};function ch(e,t,n,o){const i=o.length;this.name=n,this.value=new Array(i),this._value=new Float32Array(i*4),this._gl=e,this._location=o[0]}ch.prototype.set=function(){const e=this.value,t=e.length,n=this._value;let o=!1,i=0;for(let a=0;a<t;++a){const r=e[a];re.equalsArray(r,n,i)||(re.pack(r,n,i),o=!0),i+=4}o&&this._gl.uniformMatrix2fv(this._location,!1,n)};function lh(e,t,n,o){const i=o.length;this.name=n,this.value=new Array(i),this._value=new Float32Array(i*9),this._gl=e,this._location=o[0]}lh.prototype.set=function(){const e=this.value,t=e.length,n=this._value;let o=!1,i=0;for(let a=0;a<t;++a){const r=e[a];P.equalsArray(r,n,i)||(P.pack(r,n,i),o=!0),i+=9}o&&this._gl.uniformMatrix3fv(this._location,!1,n)};function fh(e,t,n,o){const i=o.length;this.name=n,this.value=new Array(i),this._value=new Float32Array(i*16),this._gl=e,this._location=o[0]}fh.prototype.set=function(){const e=this.value,t=e.length,n=this._value;let o=!1,i=0;for(let a=0;a<t;++a){const r=e[a];M.equalsArray(r,n,i)||(M.pack(r,n,i),o=!0),i+=16}o&&this._gl.uniformMatrix4fv(this._location,!1,n)};let lb=0;function en(e){let t=e.vertexShaderText,n=e.fragmentShaderText;typeof spector<"u"&&(t=t.replace(/^#line/gm,"//#line"),n=n.replace(/^#line/gm,"//#line"));const o=fb(t,n);this._gl=e.gl,this._logShaderCompilation=e.logShaderCompilation,this._debugShaders=e.debugShaders,this._attributeLocations=e.attributeLocations,this._program=void 0,this._numberOfVertexAttributes=void 0,this._vertexAttributes=void 0,this._uniformsByName=void 0,this._uniforms=void 0,this._automaticUniforms=void 0,this._manualUniforms=void 0,this._duplicateUniformNames=o.duplicateUniformNames,this._cachedShader=void 0,this.maximumTextureUnitIndex=void 0,this._vertexShaderSource=e.vertexShaderSource,this._vertexShaderText=e.vertexShaderText,this._fragmentShaderSource=e.fragmentShaderSource,this._fragmentShaderText=o.fragmentShaderText,this.id=lb++}en.fromCache=function(e){return e=e??ue.EMPTY_OBJECT,h.defined("options.context",e.context),e.context.shaderCache.getShaderProgram(e)};en.replaceCache=function(e){return e=e??ue.EMPTY_OBJECT,h.defined("options.context",e.context),e.context.shaderCache.replaceShaderProgram(e)};Object.defineProperties(en.prototype,{vertexShaderSource:{get:function(){return this._vertexShaderSource}},fragmentShaderSource:{get:function(){return this._fragmentShaderSource}},vertexAttributes:{get:function(){return _r(this),this._vertexAttributes}},numberOfVertexAttributes:{get:function(){return _r(this),this._numberOfVertexAttributes}},allUniforms:{get:function(){return _r(this),this._uniformsByName}}});function vl(e){const t=[],n=e.match(/uniform.*?(?![^{]*})(?=[=\[;])/g);if(u(n)){const o=n.length;for(let i=0;i<o;i++){const a=n[i].trim(),r=a.slice(a.lastIndexOf(" ")+1);t.push(r)}}return t}function fb(e,t){const n={};if(!ge.highpFloatSupported||!ge.highpIntSupported){let o,i,a,r;const s=vl(e),c=vl(t),f=s.length,d=c.length;for(o=0;o<f;o++)for(i=0;i<d;i++)if(s[o]===c[i]){a=s[o],r=`czm_mediump_${a}`;const m=new RegExp(`${a}\\b`,"g");t=t.replace(m,r),n[r]=a}}return{fragmentShaderText:t,duplicateUniformNames:n}}const cn="[Cesium WebGL] ";function ub(e,t){const n=t._vertexShaderText,o=t._fragmentShaderText,i=e.createShader(e.VERTEX_SHADER);e.shaderSource(i,n),e.compileShader(i);const a=e.createShader(e.FRAGMENT_SHADER);e.shaderSource(a,o),e.compileShader(a);const r=e.createProgram();e.attachShader(r,i),e.attachShader(r,a);const s=t._attributeLocations;if(u(s))for(const p in s)s.hasOwnProperty(p)&&e.bindAttribLocation(r,s[p],p);e.linkProgram(r);let c;if(e.getProgramParameter(r,e.LINK_STATUS))return t._logShaderCompilation&&(c=e.getShaderInfoLog(i),u(c)&&c.length>0&&console.log(`${cn}Vertex shader compile log: ${c}`),c=e.getShaderInfoLog(a),u(c)&&c.length>0&&console.log(`${cn}Fragment shader compile log: ${c}`),c=e.getProgramInfoLog(r),u(c)&&c.length>0&&console.log(`${cn}Shader program link log: ${c}`)),e.deleteShader(i),e.deleteShader(a),r;let f;const d=t._debugShaders;throw e.getShaderParameter(a,e.COMPILE_STATUS)?e.getShaderParameter(i,e.COMPILE_STATUS)?(c=e.getProgramInfoLog(r),console.error(`${cn}Shader program link log: ${c}`),m(i,"vertex"),m(a,"fragment"),f=`Program failed to link.  Link log: ${c}`):(c=e.getShaderInfoLog(i),console.error(`${cn}Vertex shader compile log: ${c}`),console.error(`${cn} Vertex shader source:
${n}`),f=`Vertex shader failed to compile.  Compile log: ${c}`):(c=e.getShaderInfoLog(a),console.error(`${cn}Fragment shader compile log: ${c}`),console.error(`${cn} Fragment shader source:
${o}`),f=`Fragment shader failed to compile.  Compile log: ${c}`),e.deleteShader(i),e.deleteShader(a),e.deleteProgram(r),new Ye(f);function m(p,_){if(!u(d))return;const g=d.getTranslatedShaderSource(p);if(g===""){console.error(`${cn}${_} shader translation failed.`);return}console.error(`${cn}Translated ${_} shaderSource:
${g}`)}}function hb(e,t,n){const o={};for(let i=0;i<n;++i){const a=e.getActiveAttrib(t,i),r=e.getAttribLocation(t,a.name);o[a.name]={name:a.name,type:a.type,index:r}}return o}function db(e,t){const n={},o=[],i=[],a=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<a;++r){const s=e.getActiveUniform(t,r),c="[0]",f=s.name.indexOf(c,s.name.length-c.length)!==-1?s.name.slice(0,s.name.length-3):s.name;if(f.indexOf("gl_")!==0)if(s.name.indexOf("[")<0){const d=e.getUniformLocation(t,f);if(d!==null){const m=ib(e,s,f,d);n[f]=m,o.push(m),m._setSampler&&i.push(m)}}else{let d,m,p,_;const g=f.indexOf("[");if(g>=0){if(d=n[f.slice(0,g)],!u(d))continue;m=d._locations,m.length<=1&&(p=d.value,_=e.getUniformLocation(t,f),_!==null&&(m.push(_),p.push(e.getUniform(t,_))))}else{m=[];for(let b=0;b<s.size;++b)_=e.getUniformLocation(t,`${f}[${b}]`),_!==null&&m.push(_);d=cb(e,s,f,m),n[f]=d,o.push(d),d._setSampler&&i.push(d)}}}return{uniformsByName:n,uniforms:o,samplerUniforms:i}}function mb(e,t){const n=[],o=[];for(const i in t)if(t.hasOwnProperty(i)){const a=t[i];let r=i;const s=e._duplicateUniformNames[r];u(s)&&(a.name=s,r=s);const c=mr[r];u(c)?n.push({uniform:a,automaticUniform:c}):o.push(a)}return{automaticUniforms:n,manualUniforms:o}}function pb(e,t,n){e.useProgram(t);let o=0;const i=n.length;for(let a=0;a<i;++a)o=n[a]._setSampler(o);return e.useProgram(null),o}function _r(e){u(e._program)||uh(e)}function uh(e){const t=e._program,n=e._gl,o=ub(n,e,e._debugShaders),i=n.getProgramParameter(o,n.ACTIVE_ATTRIBUTES),a=db(n,o),r=mb(e,a.uniformsByName);e._program=o,e._numberOfVertexAttributes=i,e._vertexAttributes=hb(n,o,i),e._uniformsByName=a.uniformsByName,e._uniforms=a.uniforms,e._automaticUniforms=r.automaticUniforms,e._manualUniforms=r.manualUniforms,e.maximumTextureUnitIndex=pb(n,o,a.samplerUniforms),t&&e._gl.deleteProgram(t),typeof spector<"u"&&(e._program.__SPECTOR_rebuildProgram=function(s,c,f,d){const m=e._vertexShaderText,p=e._fragmentShaderText,_=/ ! = /g;e._vertexShaderText=s.replace(_," != "),e._fragmentShaderText=c.replace(_," != ");try{uh(e),f(e._program)}catch(g){e._vertexShaderText=m,e._fragmentShaderText=p;const E=/(?:Compile|Link) error: ([^]*)/.exec(g.message);d(E?E[1]:g.message)}})}en.prototype._bind=function(){_r(this),this._gl.useProgram(this._program)};en.prototype._setUniforms=function(e,t,n){let o,i;if(u(e)){const s=this._manualUniforms;for(o=s.length,i=0;i<o;++i){const c=s[i];if(!u(e[c.name]))throw new T(`Unknown uniform: ${c.name}`);c.value=e[c.name]()}}const a=this._automaticUniforms;for(o=a.length,i=0;i<o;++i){const s=a[i];s.uniform.value=s.automaticUniform.getValue(t)}const r=this._uniforms;for(o=r.length,i=0;i<o;++i)r[i].set();if(n){const s=this._gl,c=this._program;if(s.validateProgram(c),!s.getProgramParameter(c,s.VALIDATE_STATUS))throw new T(`Program validation failed.  Program info log: ${s.getProgramInfoLog(c)}`)}};en.prototype.isDestroyed=function(){return!1};en.prototype.destroy=function(){this._cachedShader.cache.releaseShaderProgram(this)};en.prototype.finalDestroy=function(){return this._gl.deleteProgram(this._program),dt(this)};function Ri(e,t,n,o,i,a,r,s,c,f,d){this._context=e,this._texture=t,this._textureTarget=n,this._targetFace=o,this._pixelDatatype=r,this._internalFormat=i,this._pixelFormat=a,this._size=s,this._preMultiplyAlpha=c,this._flipY=f,this._initialized=d}Object.defineProperties(Ri.prototype,{pixelFormat:{get:function(){return this._pixelFormat}},pixelDatatype:{get:function(){return this._pixelDatatype}},_target:{get:function(){return this._targetFace}}});Ri.prototype.copyFrom=function(e){h.defined("options",e);const{xOffset:t=0,yOffset:n=0,source:o,skipColorSpaceConversion:i=!1}=e;if(h.defined("options.source",o),h.typeOf.number.greaterThanOrEquals("xOffset",t,0),h.typeOf.number.greaterThanOrEquals("yOffset",n,0),t+o.width>this._size)throw new T("xOffset + options.source.width must be less than or equal to width.");if(n+o.height>this._size)throw new T("yOffset + options.source.height must be less than or equal to height.");const{width:a,height:r}=o,s=this._context._gl,c=this._textureTarget,f=this._targetFace;s.activeTexture(s.TEXTURE0),s.bindTexture(c,this._texture);let d=o.arrayBufferView;const m=this._size,p=this._pixelFormat,_=this._internalFormat,g=this._pixelDatatype,b=this._preMultiplyAlpha,E=this._flipY;let v=4;u(d)&&(v=me.alignmentInBytes(p,g,a)),s.pixelStorei(s.UNPACK_ALIGNMENT,v),i?s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.NONE):s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL);let C=!1;if(!this._initialized){let x;t===0&&n===0&&a===m&&r===m?(u(d)?(s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),E&&(d=me.flipY(d,p,g,m,m)),x=d):(s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E),x=o),C=!0):(s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),x=me.createTypedArray(p,g,m,m)),s.texImage2D(f,0,_,m,m,0,p,he.toWebGLConstant(g,this._context),x),this._initialized=!0}C||(u(d)?(s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),E&&(d=me.flipY(d,p,g,a,r)),s.texSubImage2D(f,0,t,n,a,r,p,he.toWebGLConstant(g,this._context),d)):(s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E),s.texSubImage2D(f,0,t,n,p,he.toWebGLConstant(g,this._context),o))),s.bindTexture(c,null)};Ri.prototype.copyFromFramebuffer=function(e,t,n,o,i,a){if(e=e??0,t=t??0,n=n??0,o=o??0,i=i??this._size,a=a??this._size,h.typeOf.number.greaterThanOrEquals("xOffset",e,0),h.typeOf.number.greaterThanOrEquals("yOffset",t,0),h.typeOf.number.greaterThanOrEquals("framebufferXOffset",n,0),h.typeOf.number.greaterThanOrEquals("framebufferYOffset",o,0),e+i>this._size)throw new T("xOffset + source.width must be less than or equal to width.");if(t+a>this._size)throw new T("yOffset + source.height must be less than or equal to height.");if(this._pixelDatatype===he.FLOAT)throw new T("Cannot call copyFromFramebuffer when the texture pixel data type is FLOAT.");if(this._pixelDatatype===he.HALF_FLOAT)throw new T("Cannot call copyFromFramebuffer when the texture pixel data type is HALF_FLOAT.");const r=this._context._gl,s=this._textureTarget;r.activeTexture(r.TEXTURE0),r.bindTexture(s,this._texture),r.copyTexSubImage2D(this._targetFace,0,e,t,n,o,i,a),r.bindTexture(s,null),this._initialized=!0};Ri.prototype.copyMipmapFromFramebuffer=function(e,t,n,o,i){if(e=e??0,t=t??0,n=n??this._size,o=o??this._size,i=i??0,h.typeOf.number.greaterThanOrEquals("xOffset",e,0),h.typeOf.number.greaterThanOrEquals("yOffset",t,0),e+n>this._size)throw new T("xOffset + source.width must be less than or equal to width.");if(t+o>this._size)throw new T("yOffset + source.height must be less than or equal to height.");if(this._pixelDatatype===he.FLOAT)throw new T("Cannot call copyFromFramebuffer when the texture pixel data type is FLOAT.");if(this._pixelDatatype===he.HALF_FLOAT)throw new T("Cannot call copyFromFramebuffer when the texture pixel data type is HALF_FLOAT.");const a=this._context._gl,r=this._textureTarget;a.activeTexture(a.TEXTURE0),a.bindTexture(r,this._texture),a.copyTexImage2D(this._targetFace,i,this._internalFormat,e,t,n,o,0),a.bindTexture(r,null),this._initialized=!0};const gr={DONT_CARE:z.DONT_CARE,FASTEST:z.FASTEST,NICEST:z.NICEST,validate:function(e){return e===gr.DONT_CARE||e===gr.FASTEST||e===gr.NICEST}},Nr=Object.freeze(gr),yr={NEAREST:z.NEAREST,LINEAR:z.LINEAR};yr.validate=function(e){return e===yr.NEAREST||e===yr.LINEAR};const fo=Object.freeze(yr),Gn={NEAREST:z.NEAREST,LINEAR:z.LINEAR,NEAREST_MIPMAP_NEAREST:z.NEAREST_MIPMAP_NEAREST,LINEAR_MIPMAP_NEAREST:z.LINEAR_MIPMAP_NEAREST,NEAREST_MIPMAP_LINEAR:z.NEAREST_MIPMAP_LINEAR,LINEAR_MIPMAP_LINEAR:z.LINEAR_MIPMAP_LINEAR};Gn.validate=function(e){return e===Gn.NEAREST||e===Gn.LINEAR||e===Gn.NEAREST_MIPMAP_NEAREST||e===Gn.LINEAR_MIPMAP_NEAREST||e===Gn.NEAREST_MIPMAP_LINEAR||e===Gn.LINEAR_MIPMAP_LINEAR};const mt=Object.freeze(Gn),br={CLAMP_TO_EDGE:z.CLAMP_TO_EDGE,REPEAT:z.REPEAT,MIRRORED_REPEAT:z.MIRRORED_REPEAT,validate:function(e){return e===br.CLAMP_TO_EDGE||e===br.REPEAT||e===br.MIRRORED_REPEAT}},On=Object.freeze(br);function _n(e){e=e??ue.EMPTY_OBJECT;const{wrapR:t=On.CLAMP_TO_EDGE,wrapS:n=On.CLAMP_TO_EDGE,wrapT:o=On.CLAMP_TO_EDGE,minificationFilter:i=mt.LINEAR,magnificationFilter:a=fo.LINEAR,maximumAnisotropy:r=1}=e;if(!On.validate(t))throw new T("Invalid sampler.wrapR.");if(!On.validate(n))throw new T("Invalid sampler.wrapS.");if(!On.validate(o))throw new T("Invalid sampler.wrapT.");if(!mt.validate(i))throw new T("Invalid sampler.minificationFilter.");if(!fo.validate(a))throw new T("Invalid sampler.magnificationFilter.");h.typeOf.number.greaterThanOrEquals("maximumAnisotropy",r,1),this._wrapR=t,this._wrapS=n,this._wrapT=o,this._minificationFilter=i,this._magnificationFilter=a,this._maximumAnisotropy=r}Object.defineProperties(_n.prototype,{wrapR:{get:function(){return this._wrapR}},wrapS:{get:function(){return this._wrapS}},wrapT:{get:function(){return this._wrapT}},minificationFilter:{get:function(){return this._minificationFilter}},magnificationFilter:{get:function(){return this._magnificationFilter}},maximumAnisotropy:{get:function(){return this._maximumAnisotropy}}});_n.equals=function(e,t){return e===t||u(e)&&u(t)&&e._wrapR===t._wrapR&&e._wrapS===t._wrapS&&e._wrapT===t._wrapT&&e._minificationFilter===t._minificationFilter&&e._magnificationFilter===t._magnificationFilter&&e._maximumAnisotropy===t._maximumAnisotropy};_n.NEAREST=Object.freeze(new _n({wrapR:On.CLAMP_TO_EDGE,wrapS:On.CLAMP_TO_EDGE,wrapT:On.CLAMP_TO_EDGE,minificationFilter:mt.NEAREST,magnificationFilter:fo.NEAREST}));function _b(e,t,n,o){const i=u(t.vertexBuffer),a=u(t.value),r=t.value?t.value.length:t.componentsPerAttribute;if(!i&&!a)throw new T("attribute must have a vertexBuffer or a value.");if(i&&a)throw new T("attribute cannot have both a vertexBuffer and a value.  It must have either a vertexBuffer property defining per-vertex data or a value property defining data for all vertices.");if(r!==1&&r!==2&&r!==3&&r!==4)throw a?new T("attribute.value.length must be in the range [1, 4]."):new T("attribute.componentsPerAttribute must be in the range [1, 4].");if(u(t.componentDatatype)&&!oe.validate(t.componentDatatype))throw new T("attribute must have a valid componentDatatype or not specify it.");if(u(t.strideInBytes)&&t.strideInBytes>255)throw new T("attribute must have a strideInBytes less than or equal to 255 or not specify it.");if(u(t.instanceDivisor)&&t.instanceDivisor>0&&!o.instancedArrays)throw new T("instanced arrays is not supported");if(u(t.instanceDivisor)&&t.instanceDivisor<0)throw new T("attribute must have an instanceDivisor greater than or equal to zero");if(u(t.instanceDivisor)&&a)throw new T("attribute cannot have have an instanceDivisor if it is not backed by a buffer");if(u(t.instanceDivisor)&&t.instanceDivisor>0&&t.index===0)throw new T("attribute zero cannot have an instanceDivisor greater than 0");const s={index:t.index??n,enabled:t.enabled??!0,vertexBuffer:t.vertexBuffer,value:a?t.value.slice(0):void 0,componentsPerAttribute:r,componentDatatype:t.componentDatatype??oe.FLOAT,normalize:t.normalize??!1,offsetInBytes:t.offsetInBytes??0,strideInBytes:t.strideInBytes??0,instanceDivisor:t.instanceDivisor??0};if(i)s.vertexAttrib=function(c){const f=this.index;c.bindBuffer(c.ARRAY_BUFFER,this.vertexBuffer._getBuffer()),c.vertexAttribPointer(f,this.componentsPerAttribute,this.componentDatatype,this.normalize,this.strideInBytes,this.offsetInBytes),c.enableVertexAttribArray(f),this.instanceDivisor>0&&(o.glVertexAttribDivisor(f,this.instanceDivisor),o._vertexAttribDivisors[f]=this.instanceDivisor,o._previousDrawInstanced=!0)},s.disableVertexAttribArray=function(c){c.disableVertexAttribArray(this.index),this.instanceDivisor>0&&o.glVertexAttribDivisor(n,0)};else{switch(s.componentsPerAttribute){case 1:s.vertexAttrib=function(c){c.vertexAttrib1fv(this.index,this.value)};break;case 2:s.vertexAttrib=function(c){c.vertexAttrib2fv(this.index,this.value)};break;case 3:s.vertexAttrib=function(c){c.vertexAttrib3fv(this.index,this.value)};break;case 4:s.vertexAttrib=function(c){c.vertexAttrib4fv(this.index,this.value)};break}s.disableVertexAttribArray=function(c){}}e.push(s)}function hh(e,t,n){for(let o=0;o<t.length;++o){const i=t[o];i.enabled&&i.vertexAttrib(e)}u(n)&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n._getBuffer())}function tn(e){e=e??ue.EMPTY_OBJECT,h.defined("options.context",e.context),h.defined("options.attributes",e.attributes);const t=e.context,n=t._gl,o=e.attributes,i=e.indexBuffer;let a;const r=[];let s=1,c=!1,f=!1,d=o.length;for(a=0;a<d;++a)_b(r,o[a],a,t);for(d=r.length,a=0;a<d;++a){const _=r[a];if(u(_.vertexBuffer)&&_.instanceDivisor===0){const g=_.strideInBytes||_.componentsPerAttribute*oe.getSizeInBytes(_.componentDatatype);s=_.vertexBuffer.sizeInBytes/g;break}}for(a=0;a<d;++a)r[a].instanceDivisor>0&&(c=!0),u(r[a].value)&&(f=!0);const m={};for(a=0;a<d;++a){const _=r[a].index;if(m[_])throw new T(`Index ${_} is used by more than one attribute.`);m[_]=!0}let p;t.vertexArrayObject&&(p=t.glCreateVertexArray(),t.glBindVertexArray(p),hh(n,r,i),t.glBindVertexArray(null)),this._numberOfVertices=s,this._hasInstancedAttributes=c,this._hasConstantAttributes=f,this._context=t,this._gl=n,this._vao=p,this._attributes=r,this._indexBuffer=i}function Rl(e){return e.values.length/e.componentsPerAttribute}function gb(e){return oe.getSizeInBytes(e.componentDatatype)*e.componentsPerAttribute}function yb(e){let t,n,o;const i=[];for(n in e)e.hasOwnProperty(n)&&u(e[n])&&u(e[n].values)&&(i.push(n),e[n].componentDatatype===oe.DOUBLE&&(e[n].componentDatatype=oe.FLOAT,e[n].values=oe.createTypedArray(oe.FLOAT,e[n].values)));let a;const r=i.length;if(r>0)for(a=Rl(e[i[0]]),t=1;t<r;++t){const f=Rl(e[i[t]]);if(f!==a)throw new Ye(`Each attribute list must have the same number of vertices.  Attribute ${i[t]} has a different number of vertices (${f.toString()}) than attribute ${i[0]} (${a.toString()}).`)}i.sort(function(f,d){return oe.getSizeInBytes(e[d].componentDatatype)-oe.getSizeInBytes(e[f].componentDatatype)});let s=0;const c={};for(t=0;t<r;++t)n=i[t],o=e[n],c[n]=s,s+=gb(o);if(s>0){const f=oe.getSizeInBytes(e[i[0]].componentDatatype),d=s%f;d!==0&&(s+=f-d);const m=a*s,p=new ArrayBuffer(m),_={};for(t=0;t<r;++t){n=i[t];const g=oe.getSizeInBytes(e[n].componentDatatype);_[n]={pointer:oe.createTypedArray(e[n].componentDatatype,p),index:c[n]/g,strideInComponentType:s/g}}for(t=0;t<a;++t)for(let g=0;g<r;++g){n=i[g],o=e[n];const b=o.values,E=_[n],v=E.pointer,C=o.componentsPerAttribute;for(let x=0;x<C;++x)v[E.index+x]=b[t*C+x];E.index+=E.strideInComponentType}return{buffer:p,offsetsInBytes:c,vertexSizeInBytes:s}}}tn.fromGeometry=function(e){e=e??ue.EMPTY_OBJECT,h.defined("options.context",e.context);const t=e.context,n=e.geometry??ue.EMPTY_OBJECT,o=e.bufferUsage??Qt.DYNAMIC_DRAW,i=e.attributeLocations??ue.EMPTY_OBJECT,a=e.interleave??!1,r=e.vertexArrayAttributes;let s,c,f;const d=u(r)?r:[],m=n.attributes;if(a){const g=yb(m);if(u(g)){f=nt.createVertexBuffer({context:t,typedArray:g.buffer,usage:o});const b=g.offsetsInBytes,E=g.vertexSizeInBytes;for(s in m)m.hasOwnProperty(s)&&u(m[s])&&(c=m[s],u(c.values)?d.push({index:i[s],vertexBuffer:f,componentDatatype:c.componentDatatype,componentsPerAttribute:c.componentsPerAttribute,normalize:c.normalize,offsetInBytes:b[s],strideInBytes:E}):d.push({index:i[s],value:c.value,componentDatatype:c.componentDatatype,normalize:c.normalize}))}}else for(s in m)if(m.hasOwnProperty(s)&&u(m[s])){c=m[s];let g=c.componentDatatype;g===oe.DOUBLE&&(g=oe.FLOAT);let b={};f=void 0,u(c.values)&&(f=nt.createVertexBuffer({context:t,typedArray:oe.createTypedArray(g,c.values),usage:o}),b={index:i[s],vertexBuffer:f,value:c.value,componentDatatype:g,componentsPerAttribute:c.componentsPerAttribute,normalize:c.normalize}),u(c.typedArray)&&(f=nt.createVertexBuffer({context:t,typedArray:c.typedArray,usage:o}),b={index:i[s],vertexBuffer:f,value:void 0,componentDatatype:g,componentsPerAttribute:Xf.getNumberOfComponents(c.type),normalize:c.normalized,instanceDivisor:c.instanceDivisor}),d.push(b)}let p;const _=n.indices;return u(_)&&(Le.computeNumberOfVertices(n)>=A.SIXTY_FOUR_KILOBYTES&&t.elementIndexUint?p=nt.createIndexBuffer({context:t,typedArray:new Uint32Array(_),usage:o,indexDatatype:$e.UNSIGNED_INT}):p=nt.createIndexBuffer({context:t,typedArray:new Uint16Array(_),usage:o,indexDatatype:$e.UNSIGNED_SHORT})),new tn({context:t,attributes:d,indexBuffer:p})};Object.defineProperties(tn.prototype,{numberOfAttributes:{get:function(){return this._attributes.length}},numberOfVertices:{get:function(){return this._numberOfVertices}},indexBuffer:{get:function(){return this._indexBuffer}}});tn.prototype.getAttribute=function(e){return h.defined("index",e),this._attributes[e]};function bb(e){const t=e._context,n=e._hasInstancedAttributes;if(!n&&!t._previousDrawInstanced)return;t._previousDrawInstanced=n;const o=t._vertexAttribDivisors,i=e._attributes,a=ge.maximumVertexAttributes;let r;if(n){const s=i.length;for(r=0;r<s;++r){const c=i[r];if(c.enabled){const f=c.instanceDivisor,d=c.index;f!==o[d]&&(t.glVertexAttribDivisor(d,f),o[d]=f)}}}else for(r=0;r<a;++r)o[r]>0&&(t.glVertexAttribDivisor(r,0),o[r]=0)}function Tb(e,t){const n=e._attributes,o=n.length;for(let i=0;i<o;++i){const a=n[i];a.enabled&&u(a.value)&&a.vertexAttrib(t)}}tn.prototype._bind=function(){u(this._vao)?(this._context.glBindVertexArray(this._vao),this._context.instancedArrays&&bb(this),this._hasConstantAttributes&&Tb(this,this._gl)):hh(this._gl,this._attributes,this._indexBuffer)};tn.prototype._unBind=function(){if(u(this._vao))this._context.glBindVertexArray(null);else{const e=this._attributes,t=this._gl;for(let n=0;n<e.length;++n){const o=e[n];o.enabled&&o.disableVertexAttribArray(t)}this._indexBuffer&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,null)}};tn.prototype.isDestroyed=function(){return!1};tn.prototype.destroy=function(){const e=this._attributes;for(let n=0;n<e.length;++n){const o=e[n].vertexBuffer;u(o)&&!o.isDestroyed()&&o.vertexArrayDestroyable&&o.destroy()}const t=this._indexBuffer;return u(t)&&!t.isDestroyed()&&t.vertexArrayDestroyable&&t.destroy(),u(this._vao)&&this._context.glDeleteVertexArray(this._vao),dt(this)};function Ne(e){e=e??ue.EMPTY_OBJECT,h.defined("options.context",e.context);const{context:t,source:n,pixelFormat:o=me.RGBA,pixelDatatype:i=he.UNSIGNED_BYTE,flipY:a=!0,skipColorSpaceConversion:r=!1,sampler:s=new _n}=e,c=e.preMultiplyAlpha||o===me.RGB||o===me.LUMINANCE;let{width:f,height:d}=e;if(u(n)){if(!Object.values(Ne.FaceName).every(x=>u(n[x])))throw new T(`options.source requires faces ${Object.values(Ne.FaceName).join(", ")}.`);({width:f,height:d}=n.positiveX);for(const x of Ne.faceNames()){const R=n[x];if(Number(R.width)!==f||Number(R.height)!==d)throw new T("Each face in options.source must have the same width and height.")}}const m=f;if(!u(f)||!u(d))throw new T("options requires a source field to create an initialized cube map or width and height fields to create a blank cube map.");if(f!==d)throw new T("Width must equal height.");if(m<=0)throw new T("Width and height must be greater than zero.");if(m>ge.maximumCubeMapSize)throw new T(`Width and height must be less than or equal to the maximum cube map size (${ge.maximumCubeMapSize}). Check maximumCubeMapSize.`);if(!me.validate(o))throw new T("Invalid options.pixelFormat.");if(me.isDepthFormat(o))throw new T("options.pixelFormat cannot be DEPTH_COMPONENT or DEPTH_STENCIL.");if(!he.validate(i))throw new T("Invalid options.pixelDatatype.");if(i===he.FLOAT&&!t.floatingPointTexture)throw new T("When options.pixelDatatype is FLOAT, this WebGL implementation must support the OES_texture_float extension.");if(i===he.HALF_FLOAT&&!t.halfFloatingPointTexture)throw new T("When options.pixelDatatype is HALF_FLOAT, this WebGL implementation must support the OES_texture_half_float extension.");const p=me.textureSizeInBytes(o,i,m,m)*6,_=me.toInternalFormat(o,i,t),g=t._gl,b=g.TEXTURE_CUBE_MAP,E=g.createTexture();this._context=t,this._textureFilterAnisotropic=t._textureFilterAnisotropic,this._textureTarget=b,this._texture=E,this._pixelFormat=o,this._pixelDatatype=i,this._size=m,this._hasMipmap=!1,this._sizeInBytes=p,this._preMultiplyAlpha=c,this._flipY=a;const v=u(n);function C(x){return new Ri(t,E,b,x,_,o,i,m,c,a,v)}this._positiveX=C(g.TEXTURE_CUBE_MAP_POSITIVE_X),this._negativeX=C(g.TEXTURE_CUBE_MAP_NEGATIVE_X),this._positiveY=C(g.TEXTURE_CUBE_MAP_POSITIVE_Y),this._negativeY=C(g.TEXTURE_CUBE_MAP_NEGATIVE_Y),this._positiveZ=C(g.TEXTURE_CUBE_MAP_POSITIVE_Z),this._negativeZ=C(g.TEXTURE_CUBE_MAP_NEGATIVE_Z),this._sampler=s,dh(this,s),g.activeTexture(g.TEXTURE0),g.bindTexture(b,E),r?g.pixelStorei(g.UNPACK_COLORSPACE_CONVERSION_WEBGL,g.NONE):g.pixelStorei(g.UNPACK_COLORSPACE_CONVERSION_WEBGL,g.BROWSER_DEFAULT_WEBGL);for(const x of Ne.faceNames())Ys(this[x],n==null?void 0:n[x],0);g.bindTexture(b,null)}Ne.prototype.copyFace=function(e,t,n,o){const i=e.context,a=new on({context:i,colorTextures:[t],destroyAttachments:!1});a._bind(),this[n].copyMipmapFromFramebuffer(0,0,t.width,t.height,o??0),a._unBind(),a.destroy()};Ne.FaceName=Object.freeze({POSITIVEX:"positiveX",NEGATIVEX:"negativeX",POSITIVEY:"positiveY",NEGATIVEY:"negativeY",POSITIVEZ:"positiveZ",NEGATIVEZ:"negativeZ"});function*Eb(){yield Ne.FaceName.POSITIVEX,yield Ne.FaceName.NEGATIVEX,yield Ne.FaceName.POSITIVEY,yield Ne.FaceName.NEGATIVEY,yield Ne.FaceName.POSITIVEZ,yield Ne.FaceName.NEGATIVEZ}Ne.faceNames=function(){return Eb()};function Ys(e,t,n){n=n??0;const o=e._targetFace,i=Math.max(Math.floor(e._size/2**n),1),a=e._pixelFormat,r=e._pixelDatatype,s=e._internalFormat,c=e._flipY,f=e._preMultiplyAlpha,d=e._context,m=d._gl;if(!u(t)){m.texImage2D(o,n,s,i,i,0,a,he.toWebGLConstant(r,d),null);return}let{arrayBufferView:p}=t,_=4;u(p)&&(_=me.alignmentInBytes(a,r,i)),m.pixelStorei(m.UNPACK_ALIGNMENT,_),u(p)?(m.pixelStorei(m.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),m.pixelStorei(m.UNPACK_FLIP_Y_WEBGL,!1),c&&(p=me.flipY(p,a,r,i,i)),m.texImage2D(o,n,s,i,i,0,a,he.toWebGLConstant(r,d),p)):(m.pixelStorei(m.UNPACK_PREMULTIPLY_ALPHA_WEBGL,f),m.pixelStorei(m.UNPACK_FLIP_Y_WEBGL,c),m.texImage2D(o,n,s,a,he.toWebGLConstant(r,d),t))}Ne.loadFace=Ys;Object.defineProperties(Ne.prototype,{positiveX:{get:function(){return this._positiveX}},negativeX:{get:function(){return this._negativeX}},positiveY:{get:function(){return this._positiveY}},negativeY:{get:function(){return this._negativeY}},positiveZ:{get:function(){return this._positiveZ}},negativeZ:{get:function(){return this._negativeZ}},sampler:{get:function(){return this._sampler},set:function(e){dh(this,e),this._sampler=e}},pixelFormat:{get:function(){return this._pixelFormat}},pixelDatatype:{get:function(){return this._pixelDatatype}},width:{get:function(){return this._size}},height:{get:function(){return this._size}},sizeInBytes:{get:function(){return this._hasMipmap?Math.floor(this._sizeInBytes*4/3):this._sizeInBytes}},preMultiplyAlpha:{get:function(){return this._preMultiplyAlpha}},flipY:{get:function(){return this._flipY}},_target:{get:function(){return this._textureTarget}}});Ne.getDirection=function(e,t){switch(e){case Ne.FaceName.POSITIVEX:return l.clone(l.UNIT_X,t);case Ne.FaceName.NEGATIVEX:return l.negate(l.UNIT_X,t);case Ne.FaceName.POSITIVEY:return l.clone(l.UNIT_Y,t);case Ne.FaceName.NEGATIVEY:return l.negate(l.UNIT_Y,t);case Ne.FaceName.POSITIVEZ:return l.clone(l.UNIT_Z,t);case Ne.FaceName.NEGATIVEZ:return l.negate(l.UNIT_Z,t)}};function dh(e,t){let{minificationFilter:n,magnificationFilter:o}=t;const i=[mt.NEAREST_MIPMAP_NEAREST,mt.NEAREST_MIPMAP_LINEAR,mt.LINEAR_MIPMAP_NEAREST,mt.LINEAR_MIPMAP_LINEAR].includes(n),a=e._context,r=e._pixelDatatype;(r===he.FLOAT&&!a.textureFloatLinear||r===he.HALF_FLOAT&&!a.textureHalfFloatLinear)&&(n=i?mt.NEAREST_MIPMAP_NEAREST:mt.NEAREST,o=fo.NEAREST);const s=a._gl,c=e._textureTarget;s.activeTexture(s.TEXTURE0),s.bindTexture(c,e._texture),s.texParameteri(c,s.TEXTURE_MIN_FILTER,n),s.texParameteri(c,s.TEXTURE_MAG_FILTER,o),s.texParameteri(c,s.TEXTURE_WRAP_S,t.wrapS),s.texParameteri(c,s.TEXTURE_WRAP_T,t.wrapT),u(e._textureFilterAnisotropic)&&s.texParameteri(c,e._textureFilterAnisotropic.TEXTURE_MAX_ANISOTROPY_EXT,t.maximumAnisotropy),s.bindTexture(c,null)}Ne.prototype.loadMipmaps=function(e,t){if(h.defined("source",e),!Array.isArray(e))throw new T("source must be an array");const n=Math.log2(this._size);if(e.length!==n)throw new T("all mip levels must be defined");t=t??!1;const o=this._context._gl,i=this._texture,a=this._textureTarget;o.activeTexture(o.TEXTURE0),o.bindTexture(a,i),t?o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,o.NONE):o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,o.BROWSER_DEFAULT_WEBGL);for(let r=0;r<e.length;r++){const s=e[r],c=r+1;for(const f of Ne.faceNames())Ys(this[f],s[f],c)}o.bindTexture(a,null),this._hasMipmap=!0};Ne.prototype.generateMipmap=function(e){if(e=e??Nr.DONT_CARE,this._size>1&&!A.isPowerOfTwo(this._size))throw new T("width and height must be a power of two to call generateMipmap().");if(!Nr.validate(e))throw new T("hint is invalid.");this._hasMipmap=!0;const t=this._context._gl,n=this._textureTarget;t.hint(t.GENERATE_MIPMAP_HINT,e),t.activeTexture(t.TEXTURE0),t.bindTexture(n,this._texture),t.generateMipmap(n),t.bindTexture(n,null)};Ne.createVertexArray=function(e){const t=Mt.createGeometry(Mt.fromDimensions({dimensions:new l(2,2,2),vertexFormat:ye.POSITION_ONLY})),n=this._attributeLocations=ze.createAttributeLocations(t);return tn.fromGeometry({context:e,geometry:t,attributeLocations:n,bufferUsage:Qt.STATIC_DRAW})};Ne.prototype.isDestroyed=function(){return!1};Ne.prototype.destroy=function(){return this._context._gl.deleteTexture(this._texture),this._positiveX=dt(this._positiveX),this._negativeX=dt(this._negativeX),this._positiveY=dt(this._positiveY),this._negativeY=dt(this._negativeY),this._positiveZ=dt(this._positiveZ),this._negativeZ=dt(this._negativeZ),dt(this)};const wb=`/**
 * A built-in GLSL floating-point constant for converting radians to degrees.
 *
 * @alias czm_degreesPerRadian
 * @glslConstant
 *
 * @see CesiumMath.DEGREES_PER_RADIAN
 *
 * @example
 * // GLSL declaration
 * const float czm_degreesPerRadian = ...;
 *
 * // Example
 * float deg = czm_degreesPerRadian * rad;
 */
const float czm_degreesPerRadian = 57.29577951308232;
`,Ab=`/**
 * A built-in GLSL vec2 constant for defining the depth range.
 * This is a workaround to a bug where IE11 does not implement gl_DepthRange.
 *
 * @alias czm_depthRange
 * @glslConstant
 *
 * @example
 * // GLSL declaration
 * float depthRangeNear = czm_depthRange.near;
 * float depthRangeFar = czm_depthRange.far;
 *
 */
const czm_depthRangeStruct czm_depthRange = czm_depthRangeStruct(0.0, 1.0);
`,Ob=`/**
 * 0.1
 *
 * @name czm_epsilon1
 * @glslConstant
 */
const float czm_epsilon1 = 0.1;
`,Sb=`/**
 * 0.01
 *
 * @name czm_epsilon2
 * @glslConstant
 */
const float czm_epsilon2 = 0.01;
`,xb=`/**
 * 0.001
 *
 * @name czm_epsilon3
 * @glslConstant
 */
const float czm_epsilon3 = 0.001;
`,Cb=`/**
 * 0.0001
 *
 * @name czm_epsilon4
 * @glslConstant
 */
const float czm_epsilon4 = 0.0001;
`,vb=`/**
 * 0.00001
 *
 * @name czm_epsilon5
 * @glslConstant
 */
const float czm_epsilon5 = 0.00001;
`,Rb=`/**
 * 0.000001
 *
 * @name czm_epsilon6
 * @glslConstant
 */
const float czm_epsilon6 = 0.000001;
`,zb=`/**
 * 0.0000001
 *
 * @name czm_epsilon7
 * @glslConstant
 */
const float czm_epsilon7 = 0.0000001;
`,Ib=`/**
 * DOC_TBA
 *
 * @name czm_infinity
 * @glslConstant
 */
const float czm_infinity = 5906376272000.0;  // Distance from the Sun to Pluto in meters.  TODO: What is best given lowp, mediump, and highp?
`,Pb=`/**
 * A built-in GLSL floating-point constant for <code>1/pi</code>.
 *
 * @alias czm_oneOverPi
 * @glslConstant
 *
 * @see CesiumMath.ONE_OVER_PI
 *
 * @example
 * // GLSL declaration
 * const float czm_oneOverPi = ...;
 *
 * // Example
 * float pi = 1.0 / czm_oneOverPi;
 */
const float czm_oneOverPi = 0.3183098861837907;
`,Mb=`/**
 * A built-in GLSL floating-point constant for <code>1/2pi</code>.
 *
 * @alias czm_oneOverTwoPi
 * @glslConstant
 *
 * @see CesiumMath.ONE_OVER_TWO_PI
 *
 * @example
 * // GLSL declaration
 * const float czm_oneOverTwoPi = ...;
 *
 * // Example
 * float pi = 2.0 * czm_oneOverTwoPi;
 */
const float czm_oneOverTwoPi = 0.15915494309189535;
`,Nb=`/**
 * The automatic GLSL constant for {@link Pass#CESIUM_3D_TILE}
 *
 * @name czm_passCesium3DTile
 * @glslConstant
 *
 * @see czm_pass
 */
const float czm_passCesium3DTile = 4.0;
`,Db=`/**
 * The automatic GLSL constant for {@link Pass#CESIUM_3D_TILE_CLASSIFICATION}
 *
 * @name czm_passCesium3DTileClassification
 * @glslConstant
 *
 * @see czm_pass
 */
const float czm_passCesium3DTileClassification = 5.0;
`,Lb=`/**
 * The automatic GLSL constant for {@link Pass#CESIUM_3D_TILE_CLASSIFICATION_IGNORE_SHOW}
 *
 * @name czm_passCesium3DTileClassificationIgnoreShow
 * @glslConstant
 *
 * @see czm_pass
 */
const float czm_passCesium3DTileClassificationIgnoreShow = 6.0;
`,Fb=`/**
 * The automatic GLSL constant for {@link Pass#CLASSIFICATION}
 *
 * @name czm_passClassification
 * @glslConstant
 *
 * @see czm_pass
 */
const float czm_passClassification = 7.0;
`,Bb=`/**
 * The automatic GLSL constant for {@link Pass#COMPUTE}
 *
 * @name czm_passCompute
 * @glslConstant
 *
 * @see czm_pass
 */
const float czm_passCompute = 1.0;
`,Ub=`/**
 * The automatic GLSL constant for {@link Pass#ENVIRONMENT}
 *
 * @name czm_passEnvironment
 * @glslConstant
 *
 * @see czm_pass
 */
const float czm_passEnvironment = 0.0;
`,Gb=`/**
 * The automatic GLSL constant for {@link Pass#GAUSSIAN_SPLATS}
 *
 * @name czm_passGaussianSplats
 * @glslConstant
 *
 * @see czm_pass
 */
const float czm_passGaussianSplats = 10.0;
`,qb=`/**
 * The automatic GLSL constant for {@link Pass#GLOBE}
 *
 * @name czm_passGlobe
 * @glslConstant
 *
 * @see czm_pass
 */
const float czm_passGlobe = 2.0;
`,kb=`/**
 * The automatic GLSL constant for {@link Pass#OPAQUE}
 *
 * @name czm_passOpaque
 * @glslConstant
 *
 * @see czm_pass
 */
const float czm_passOpaque = 7.0;
`,Vb=`/**
 * The automatic GLSL constant for {@link Pass#OVERLAY}
 *
 * @name czm_passOverlay
 * @glslConstant
 *
 * @see czm_pass
 */
const float czm_passOverlay = 11.0;
`,jb=`/**
 * The automatic GLSL constant for {@link Pass#TERRAIN_CLASSIFICATION}
 *
 * @name czm_passTerrainClassification
 * @glslConstant
 *
 * @see czm_pass
 */
const float czm_passTerrainClassification = 3.0;
`,Hb=`/**
 * The automatic GLSL constant for {@link Pass#TRANSLUCENT}
 *
 * @name czm_passTranslucent
 * @glslConstant
 *
 * @see czm_pass
 */
const float czm_passTranslucent = 8.0;
`,Wb=`/**
 * The automatic GLSL constant for {@link Pass#VOXELS}
 *
 * @name czm_passVoxels
 * @glslConstant
 *
 * @see czm_pass
 */
const float czm_passVoxels = 9.0;
`,Yb=`/**
 * A built-in GLSL floating-point constant for <code>Math.PI</code>.
 *
 * @alias czm_pi
 * @glslConstant
 *
 * @see CesiumMath.PI
 *
 * @example
 * // GLSL declaration
 * const float czm_pi = ...;
 *
 * // Example
 * float twoPi = 2.0 * czm_pi;
 */
const float czm_pi = 3.141592653589793;
`,Xb=`/**
 * A built-in GLSL floating-point constant for <code>pi/4</code>.
 *
 * @alias czm_piOverFour
 * @glslConstant
 *
 * @see CesiumMath.PI_OVER_FOUR
 *
 * @example
 * // GLSL declaration
 * const float czm_piOverFour = ...;
 *
 * // Example
 * float pi = 4.0 * czm_piOverFour;
 */
const float czm_piOverFour = 0.7853981633974483;
`,$b=`/**
 * A built-in GLSL floating-point constant for <code>pi/6</code>.
 *
 * @alias czm_piOverSix
 * @glslConstant
 *
 * @see CesiumMath.PI_OVER_SIX
 *
 * @example
 * // GLSL declaration
 * const float czm_piOverSix = ...;
 *
 * // Example
 * float pi = 6.0 * czm_piOverSix;
 */
const float czm_piOverSix = 0.5235987755982988;
`,Zb=`/**
 * A built-in GLSL floating-point constant for <code>pi/3</code>.
 *
 * @alias czm_piOverThree
 * @glslConstant
 *
 * @see CesiumMath.PI_OVER_THREE
 *
 * @example
 * // GLSL declaration
 * const float czm_piOverThree = ...;
 *
 * // Example
 * float pi = 3.0 * czm_piOverThree;
 */
const float czm_piOverThree = 1.0471975511965976;
`,Kb=`/**
 * A built-in GLSL floating-point constant for <code>pi/2</code>.
 *
 * @alias czm_piOverTwo
 * @glslConstant
 *
 * @see CesiumMath.PI_OVER_TWO
 *
 * @example
 * // GLSL declaration
 * const float czm_piOverTwo = ...;
 *
 * // Example
 * float pi = 2.0 * czm_piOverTwo;
 */
const float czm_piOverTwo = 1.5707963267948966;
`,Qb=`/**
 * A built-in GLSL floating-point constant for converting degrees to radians.
 *
 * @alias czm_radiansPerDegree
 * @glslConstant
 *
 * @see CesiumMath.RADIANS_PER_DEGREE
 *
 * @example
 * // GLSL declaration
 * const float czm_radiansPerDegree = ...;
 *
 * // Example
 * float rad = czm_radiansPerDegree * deg;
 */
const float czm_radiansPerDegree = 0.017453292519943295;
`,Jb=`/**
 * The constant identifier for the 2D {@link SceneMode}
 *
 * @name czm_sceneMode2D
 * @glslConstant
 * @see czm_sceneMode
 * @see czm_sceneModeColumbusView
 * @see czm_sceneMode3D
 * @see czm_sceneModeMorphing
 */
const float czm_sceneMode2D = 2.0;
`,eT=`/**
 * The constant identifier for the 3D {@link SceneMode}
 *
 * @name czm_sceneMode3D
 * @glslConstant
 * @see czm_sceneMode
 * @see czm_sceneMode2D
 * @see czm_sceneModeColumbusView
 * @see czm_sceneModeMorphing
 */
const float czm_sceneMode3D = 3.0;
`,tT=`/**
 * The constant identifier for the Columbus View {@link SceneMode}
 *
 * @name czm_sceneModeColumbusView
 * @glslConstant
 * @see czm_sceneMode
 * @see czm_sceneMode2D
 * @see czm_sceneMode3D
 * @see czm_sceneModeMorphing
 */
const float czm_sceneModeColumbusView = 1.0;
`,nT=`/**
 * The constant identifier for the Morphing {@link SceneMode}
 *
 * @name czm_sceneModeMorphing
 * @glslConstant
 * @see czm_sceneMode
 * @see czm_sceneMode2D
 * @see czm_sceneModeColumbusView
 * @see czm_sceneMode3D
 */
const float czm_sceneModeMorphing = 0.0;
`,oT=`/**
 * A built-in GLSL floating-point constant for one solar radius.
 *
 * @alias czm_solarRadius
 * @glslConstant
 *
 * @see CesiumMath.SOLAR_RADIUS
 *
 * @example
 * // GLSL declaration
 * const float czm_solarRadius = ...;
 */
const float czm_solarRadius = 695500000.0;
`,iT=`/**
 * A built-in GLSL floating-point constant for <code>3pi/2</code>.
 *
 * @alias czm_threePiOver2
 * @glslConstant
 *
 * @see CesiumMath.THREE_PI_OVER_TWO
 *
 * @example
 * // GLSL declaration
 * const float czm_threePiOver2 = ...;
 *
 * // Example
 * float pi = (2.0 / 3.0) * czm_threePiOver2;
 */
const float czm_threePiOver2 = 4.71238898038469;
`,rT=`/**
 * A built-in GLSL floating-point constant for <code>2pi</code>.
 *
 * @alias czm_twoPi
 * @glslConstant
 *
 * @see CesiumMath.TWO_PI
 *
 * @example
 * // GLSL declaration
 * const float czm_twoPi = ...;
 *
 * // Example
 * float pi = czm_twoPi / 2.0;
 */
const float czm_twoPi = 6.283185307179586;
`,aT=`/**
 * The maximum latitude, in radians, both North and South, supported by a Web Mercator
 * (EPSG:3857) projection.  Technically, the Mercator projection is defined
 * for any latitude up to (but not including) 90 degrees, but it makes sense
 * to cut it off sooner because it grows exponentially with increasing latitude.
 * The logic behind this particular cutoff value, which is the one used by
 * Google Maps, Bing Maps, and Esri, is that it makes the projection
 * square.  That is, the rectangle is equal in the X and Y directions.
 *
 * The constant value is computed as follows:
 *   czm_pi * 0.5 - (2.0 * atan(exp(-czm_pi)))
 *
 * @name czm_webMercatorMaxLatitude
 * @glslConstant
 */
const float czm_webMercatorMaxLatitude = 1.4844222297453324;
`,sT=`/**
 * @name czm_depthRangeStruct
 * @glslStruct
 */
struct czm_depthRangeStruct
{
    float near;
    float far;
};
`,cT=`/**
 * Holds material information that can be used for lighting. Returned by all czm_getMaterial functions.
 *
 * @name czm_material
 * @glslStruct
 *
 * @property {vec3} diffuse Incoming light that scatters evenly in all directions.
 * @property {float} specular Intensity of incoming light reflecting in a single direction.
 * @property {float} shininess The sharpness of the specular reflection.  Higher values create a smaller, more focused specular highlight.
 * @property {vec3} normal Surface's normal in eye coordinates. It is used for effects such as normal mapping. The default is the surface's unmodified normal.
 * @property {vec3} emission Light emitted by the material equally in all directions. The default is vec3(0.0), which emits no light.
 * @property {float} alpha Alpha of this material. 0.0 is completely transparent; 1.0 is completely opaque.
 */
struct czm_material
{
    vec3 diffuse;
    float specular;
    float shininess;
    vec3 normal;
    vec3 emission;
    float alpha;
};
`,lT=`/**
 * Used as input to every material's czm_getMaterial function.
 *
 * @name czm_materialInput
 * @glslStruct
 *
 * @property {float} s 1D texture coordinates.
 * @property {vec2} st 2D texture coordinates.
 * @property {vec3} str 3D texture coordinates.
 * @property {vec3} normalEC Unperturbed surface normal in eye coordinates.
 * @property {mat3} tangentToEyeMatrix Matrix for converting a tangent space normal to eye space.
 * @property {vec3} positionToEyeEC Vector from the fragment to the eye in eye coordinates.  The magnitude is the distance in meters from the fragment to the eye.
 * @property {float} height The height of the terrain in meters above or below the ellipsoid.  Only available for globe materials.
 * @property {float} slope The slope of the terrain in radians.  0 is flat; pi/2 is vertical.  Only available for globe materials.
 * @property {float} aspect The aspect of the terrain in radians.  0 is East, pi/2 is North, pi is West, 3pi/2 is South.  Only available for globe materials.
* @property {float} waterMask The value of the water mask. 0 is land, 1 is water. Only available for globe materials.
 */
struct czm_materialInput
{
    float s;
    vec2 st;
    vec3 str;
    vec3 normalEC;
    mat3 tangentToEyeMatrix;
    vec3 positionToEyeEC;
    float height;
    float slope;
    float aspect;
    float waterMask;
};
`,fT=`/**
 * Struct for representing a material for a {@link Model}. The model
 * rendering pipeline will pass this struct between material, custom shaders,
 * and lighting stages. This is not to be confused with {@link czm_material}
 * which is used by the older Fabric materials system, although they are similar.
 * <p>
 * All color values (diffuse, specular, emissive) are in linear color space.
 * </p>
 *
 * @name czm_modelMaterial
 * @glslStruct
 *
 * @property {vec4} baseColor The base color of the material.
 * @property {vec3} diffuse Incoming light that scatters evenly in all directions.
 * @property {float} alpha Alpha of this material. 0.0 is completely transparent; 1.0 is completely opaque.
 * @property {vec3} specular Color of reflected light at normal incidence in PBR materials. This is sometimes referred to as f0 in the literature.
 * @property {float} roughness A number from 0.0 to 1.0 representing how rough the surface is. Values near 0.0 produce glossy surfaces, while values near 1.0 produce rough surfaces.
 * @property {vec3} normalEC Surface's normal in eye coordinates. It is used for effects such as normal mapping. The default is the surface's unmodified normal.
 * @property {float} occlusion Ambient occlusion recieved at this point on the material. 1.0 means fully lit, 0.0 means fully occluded.
 * @property {vec3} emissive Light emitted by the material equally in all directions. The default is vec3(0.0), which emits no light.
 */
struct czm_modelMaterial {
    vec4 baseColor;
    vec3 diffuse;
    float alpha;
    vec3 specular;
    float roughness;
    vec3 normalEC;
    float occlusion;
    vec3 emissive;
#ifdef USE_SPECULAR
    float specularWeight;
#endif
#ifdef USE_ANISOTROPY
    vec3 anisotropicT;
    vec3 anisotropicB;
    float anisotropyStrength;
#endif
#ifdef USE_CLEARCOAT
    float clearcoatFactor;
    float clearcoatRoughness;
    vec3 clearcoatNormal;
    // Add clearcoatF0 when KHR_materials_ior is implemented
#endif
};
`,uT=`/**
 * Struct for representing the output of a custom vertex shader.
 * 
 * @name czm_modelVertexOutput
 * @glslStruct
 *
 * @see {@link CustomShader}
 * @see {@link Model}
 *
 * @property {vec3} positionMC The position of the vertex in model coordinates
 * @property {float} pointSize A custom value for gl_PointSize. This is only used for point primitives. 
 */
struct czm_modelVertexOutput {
  vec3 positionMC;
  float pointSize;
};
`,hT=`/**
 * DOC_TBA
 *
 * @name czm_ray
 * @glslStruct
 */
struct czm_ray
{
    vec3 origin;
    vec3 direction;
};
`,dT=`/**
 * DOC_TBA
 *
 * @name czm_raySegment
 * @glslStruct
 */
struct czm_raySegment
{
    float start;
    float stop;
};

/**
 * DOC_TBA
 *
 * @name czm_emptyRaySegment
 * @glslConstant 
 */
const czm_raySegment czm_emptyRaySegment = czm_raySegment(-czm_infinity, -czm_infinity);

/**
 * DOC_TBA
 *
 * @name czm_fullRaySegment
 * @glslConstant 
 */
const czm_raySegment czm_fullRaySegment = czm_raySegment(0.0, czm_infinity);
`,mT=`struct czm_shadowParameters
{
#ifdef USE_CUBE_MAP_SHADOW
    vec3 texCoords;
#else
    vec2 texCoords;
#endif

    float depthBias;
    float depth;
    float nDotL;
    vec2 texelStepSize;
    float normalShadingSmooth;
    float darkness;
};
`,pT=`/**
 * Converts an HSB color (hue, saturation, brightness) to RGB
 * HSB <-> RGB conversion with minimal branching: {@link http://lolengine.net/blog/2013/07/27/rgb-to-hsv-in-glsl}
 *
 * @name czm_HSBToRGB
 * @glslFunction
 * 
 * @param {vec3} hsb The color in HSB.
 *
 * @returns {vec3} The color in RGB.
 *
 * @example
 * vec3 hsb = czm_RGBToHSB(rgb);
 * hsb.z *= 0.1;
 * rgb = czm_HSBToRGB(hsb);
 */

const vec4 K_HSB2RGB = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);

vec3 czm_HSBToRGB(vec3 hsb)
{
    vec3 p = abs(fract(hsb.xxx + K_HSB2RGB.xyz) * 6.0 - K_HSB2RGB.www);
    return hsb.z * mix(K_HSB2RGB.xxx, clamp(p - K_HSB2RGB.xxx, 0.0, 1.0), hsb.y);
}
`,_T=`/**
 * Converts an HSL color (hue, saturation, lightness) to RGB
 * HSL <-> RGB conversion: {@link http://www.chilliant.com/rgb2hsv.html}
 *
 * @name czm_HSLToRGB
 * @glslFunction
 * 
 * @param {vec3} rgb The color in HSL.
 *
 * @returns {vec3} The color in RGB.
 *
 * @example
 * vec3 hsl = czm_RGBToHSL(rgb);
 * hsl.z *= 0.1;
 * rgb = czm_HSLToRGB(hsl);
 */

vec3 hueToRGB(float hue)
{
    float r = abs(hue * 6.0 - 3.0) - 1.0;
    float g = 2.0 - abs(hue * 6.0 - 2.0);
    float b = 2.0 - abs(hue * 6.0 - 4.0);
    return clamp(vec3(r, g, b), 0.0, 1.0);
}

vec3 czm_HSLToRGB(vec3 hsl)
{
    vec3 rgb = hueToRGB(hsl.x);
    float c = (1.0 - abs(2.0 * hsl.z - 1.0)) * hsl.y;
    return (rgb - 0.5) * c + hsl.z;
}
`,gT=`/**
 * Converts an RGB color to HSB (hue, saturation, brightness)
 * HSB <-> RGB conversion with minimal branching: {@link http://lolengine.net/blog/2013/07/27/rgb-to-hsv-in-glsl}
 *
 * @name czm_RGBToHSB
 * @glslFunction
 * 
 * @param {vec3} rgb The color in RGB.
 *
 * @returns {vec3} The color in HSB.
 *
 * @example
 * vec3 hsb = czm_RGBToHSB(rgb);
 * hsb.z *= 0.1;
 * rgb = czm_HSBToRGB(hsb);
 */

const vec4 K_RGB2HSB = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);

vec3 czm_RGBToHSB(vec3 rgb)
{
    vec4 p = mix(vec4(rgb.bg, K_RGB2HSB.wz), vec4(rgb.gb, K_RGB2HSB.xy), step(rgb.b, rgb.g));
    vec4 q = mix(vec4(p.xyw, rgb.r), vec4(rgb.r, p.yzx), step(p.x, rgb.r));

    float d = q.x - min(q.w, q.y);
    return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + czm_epsilon7)), d / (q.x + czm_epsilon7), q.x);
}
`,yT=`/**
 * Converts an RGB color to HSL (hue, saturation, lightness)
 * HSL <-> RGB conversion: {@link http://www.chilliant.com/rgb2hsv.html}
 *
 * @name czm_RGBToHSL
 * @glslFunction
 * 
 * @param {vec3} rgb The color in RGB.
 *
 * @returns {vec3} The color in HSL.
 *
 * @example
 * vec3 hsl = czm_RGBToHSL(rgb);
 * hsl.z *= 0.1;
 * rgb = czm_HSLToRGB(hsl);
 */
 
vec3 RGBtoHCV(vec3 rgb)
{
    // Based on work by Sam Hocevar and Emil Persson
    vec4 p = (rgb.g < rgb.b) ? vec4(rgb.bg, -1.0, 2.0 / 3.0) : vec4(rgb.gb, 0.0, -1.0 / 3.0);
    vec4 q = (rgb.r < p.x) ? vec4(p.xyw, rgb.r) : vec4(rgb.r, p.yzx);
    float c = q.x - min(q.w, q.y);
    float h = abs((q.w - q.y) / (6.0 * c + czm_epsilon7) + q.z);
    return vec3(h, c, q.x);
}

vec3 czm_RGBToHSL(vec3 rgb)
{
    vec3 hcv = RGBtoHCV(rgb);
    float l = hcv.z - hcv.y * 0.5;
    float s = hcv.y / (1.0 - abs(l * 2.0 - 1.0) + czm_epsilon7);
    return vec3(hcv.x, s, l);
}
`,bT=`/**
 * Converts an RGB color to CIE Yxy.
 * <p>The conversion is described in
 * {@link http://content.gpwiki.org/index.php/D3DBook:High-Dynamic_Range_Rendering#Luminance_Transform|Luminance Transform}
 * </p>
 * 
 * @name czm_RGBToXYZ
 * @glslFunction
 * 
 * @param {vec3} rgb The color in RGB.
 *
 * @returns {vec3} The color in CIE Yxy.
 *
 * @example
 * vec3 xyz = czm_RGBToXYZ(rgb);
 * xyz.x = max(xyz.x - luminanceThreshold, 0.0);
 * rgb = czm_XYZToRGB(xyz);
 */
vec3 czm_RGBToXYZ(vec3 rgb)
{
    const mat3 RGB2XYZ = mat3(0.4124, 0.2126, 0.0193,
                              0.3576, 0.7152, 0.1192,
                              0.1805, 0.0722, 0.9505);
    vec3 xyz = RGB2XYZ * rgb;
    vec3 Yxy;
    Yxy.r = xyz.g;
    float temp = dot(vec3(1.0), xyz);
    Yxy.gb = xyz.rg / temp;
    return Yxy;
}
`,TT=`/**
 * Converts a CIE Yxy color to RGB.
 * <p>The conversion is described in
 * {@link http://content.gpwiki.org/index.php/D3DBook:High-Dynamic_Range_Rendering#Luminance_Transform|Luminance Transform}
 * </p>
 * 
 * @name czm_XYZToRGB
 * @glslFunction
 * 
 * @param {vec3} Yxy The color in CIE Yxy.
 *
 * @returns {vec3} The color in RGB.
 *
 * @example
 * vec3 xyz = czm_RGBToXYZ(rgb);
 * xyz.x = max(xyz.x - luminanceThreshold, 0.0);
 * rgb = czm_XYZToRGB(xyz);
 */
vec3 czm_XYZToRGB(vec3 Yxy)
{
    const mat3 XYZ2RGB = mat3( 3.2405, -0.9693,  0.0556,
                              -1.5371,  1.8760, -0.2040,
                              -0.4985,  0.0416,  1.0572);
    vec3 xyz;
    xyz.r = Yxy.r * Yxy.g / Yxy.b;
    xyz.g = Yxy.r;
    xyz.b = Yxy.r * (1.0 - Yxy.g - Yxy.b) / Yxy.b;
    
    return XYZ2RGB * xyz;
}
`,ET=`// See:
//    https://knarkowicz.wordpress.com/2016/01/06/aces-filmic-tone-mapping-curve/

vec3 czm_acesTonemapping(vec3 color) {
    float g = 0.985;
    float a = 0.065;
    float b = 0.0001;
    float c = 0.433;
    float d = 0.238;

    color = (color * (color + a) - b) / (color * (g * color + c) + d);

    color = clamp(color, 0.0, 1.0);

    return color;
}
`,wT=`/**
 * @private
 */
float czm_alphaWeight(float a)
{
    float z = (gl_FragCoord.z - czm_viewportTransformation[3][2]) / czm_viewportTransformation[2][2];

    // See Weighted Blended Order-Independent Transparency for examples of different weighting functions:
    // http://jcgt.org/published/0002/02/09/
    return pow(a + 0.01, 4.0) + max(1e-2, min(3.0 * 1e3, 0.003 / (1e-5 + pow(abs(z) / 200.0, 4.0))));
}
`,AT=`/**
 * Procedural anti-aliasing by blurring two colors that meet at a sharp edge.
 *
 * @name czm_antialias
 * @glslFunction
 *
 * @param {vec4} color1 The color on one side of the edge.
 * @param {vec4} color2 The color on the other side of the edge.
 * @param {vec4} currentcolor The current color, either <code>color1</code> or <code>color2</code>.
 * @param {float} dist The distance to the edge in texture coordinates.
 * @param {float} [fuzzFactor=0.1] Controls the blurriness between the two colors.
 * @returns {vec4} The anti-aliased color.
 *
 * @example
 * // GLSL declarations
 * vec4 czm_antialias(vec4 color1, vec4 color2, vec4 currentColor, float dist, float fuzzFactor);
 * vec4 czm_antialias(vec4 color1, vec4 color2, vec4 currentColor, float dist);
 *
 * // get the color for a material that has a sharp edge at the line y = 0.5 in texture space
 * float dist = abs(textureCoordinates.t - 0.5);
 * vec4 currentColor = mix(bottomColor, topColor, step(0.5, textureCoordinates.t));
 * vec4 color = czm_antialias(bottomColor, topColor, currentColor, dist, 0.1);
 */
vec4 czm_antialias(vec4 color1, vec4 color2, vec4 currentColor, float dist, float fuzzFactor)
{
    float val1 = clamp(dist / fuzzFactor, 0.0, 1.0);
    float val2 = clamp((dist - 0.5) / fuzzFactor, 0.0, 1.0);
    val1 = val1 * (1.0 - val2);
    val1 = val1 * val1 * (3.0 - (2.0 * val1));
    val1 = pow(val1, 0.5); //makes the transition nicer
    
    vec4 midColor = (color1 + color2) * 0.5;
    return mix(midColor, currentColor, val1);
}

vec4 czm_antialias(vec4 color1, vec4 color2, vec4 currentColor, float dist)
{
    return czm_antialias(color1, color2, currentColor, dist, 0.1);
}
`,OT=`/**
 * Apply a HSB color shift to an RGB color.
 *
 * @param {vec3} rgb The color in RGB space.
 * @param {vec3} hsbShift The amount to shift each component. The xyz components correspond to hue, saturation, and brightness. Shifting the hue by +/- 1.0 corresponds to shifting the hue by a full cycle. Saturation and brightness are clamped between 0 and 1 after the adjustment
 * @param {bool} ignoreBlackPixels If true, black pixels will be unchanged. This is necessary in some shaders such as atmosphere-related effects.
 *
 * @return {vec3} The RGB color after shifting in HSB space and clamping saturation and brightness to a valid range.
 */
vec3 czm_applyHSBShift(vec3 rgb, vec3 hsbShift, bool ignoreBlackPixels) {
    // Convert rgb color to hsb
    vec3 hsb = czm_RGBToHSB(rgb);

    // Perform hsb shift
    // Hue cycles around so no clamp is needed.
    hsb.x += hsbShift.x; // hue
    hsb.y = clamp(hsb.y + hsbShift.y, 0.0, 1.0); // saturation

    // brightness
    //
    // Some shaders such as atmosphere-related effects need to leave black
    // pixels unchanged
    if (ignoreBlackPixels) {
        hsb.z = hsb.z > czm_epsilon7 ? hsb.z + hsbShift.z : 0.0;
    } else {
        hsb.z = hsb.z + hsbShift.z;
    }
    hsb.z = clamp(hsb.z, 0.0, 1.0);

    // Convert shifted hsb back to rgb
    return czm_HSBToRGB(hsb);
}
`,ST=`/**
 * Approximately computes spherical coordinates given a normal.
 * Uses approximate inverse trigonometry for speed and consistency,
 * since inverse trigonometry can differ from vendor-to-vendor and when compared with the CPU.
 *
 * @name czm_approximateSphericalCoordinates
 * @glslFunction
 *
 * @param {vec3} normal arbitrary-length normal.
 *
 * @returns {vec2} Approximate latitude and longitude spherical coordinates.
 */
vec2 czm_approximateSphericalCoordinates(vec3 normal) {
    // Project into plane with vertical for latitude
    float latitudeApproximation = czm_fastApproximateAtan(sqrt(normal.x * normal.x + normal.y * normal.y), normal.z);
    float longitudeApproximation = czm_fastApproximateAtan(normal.x, normal.y);
    return vec2(latitudeApproximation, longitudeApproximation);
}
`,xT=`/**
 * Compute a rational approximation to tanh(x)
 *
 * @param {float} x A real number input
 * @returns {float} An approximation for tanh(x)
*/
float czm_approximateTanh(float x) {
    float x2 = x * x;
    return max(-1.0, min(1.0, x * (27.0 + x2) / (27.0 + 9.0 * x2)));
}
`,CT=`/**
 * Determines if the fragment is back facing
 *
 * @name czm_backFacing
 * @glslFunction 
 * 
 * @returns {bool} <code>true</code> if the fragment is back facing; otherwise, <code>false</code>.
 */
bool czm_backFacing()
{
    // !gl_FrontFacing doesn't work as expected on Mac/Intel so use the more verbose form instead. See https://github.com/CesiumGS/cesium/pull/8494.
    return gl_FrontFacing == false;
}
`,vT=`/**
 * Branchless ternary operator to be used when it's inexpensive to explicitly
 * evaluate both possibilities for a float expression.
 *
 * @name czm_branchFreeTernary
 * @glslFunction
 *
 * @param {bool} comparison A comparison statement
 * @param {float} a Value to return if the comparison is true.
 * @param {float} b Value to return if the comparison is false.
 *
 * @returns {float} equivalent of comparison ? a : b
 */
float czm_branchFreeTernary(bool comparison, float a, float b) {
    float useA = float(comparison);
    return a * useA + b * (1.0 - useA);
}

/**
 * Branchless ternary operator to be used when it's inexpensive to explicitly
 * evaluate both possibilities for a vec2 expression.
 *
 * @name czm_branchFreeTernary
 * @glslFunction
 *
 * @param {bool} comparison A comparison statement
 * @param {vec2} a Value to return if the comparison is true.
 * @param {vec2} b Value to return if the comparison is false.
 *
 * @returns {vec2} equivalent of comparison ? a : b
 */
vec2 czm_branchFreeTernary(bool comparison, vec2 a, vec2 b) {
    float useA = float(comparison);
    return a * useA + b * (1.0 - useA);
}

/**
 * Branchless ternary operator to be used when it's inexpensive to explicitly
 * evaluate both possibilities for a vec3 expression.
 *
 * @name czm_branchFreeTernary
 * @glslFunction
 *
 * @param {bool} comparison A comparison statement
 * @param {vec3} a Value to return if the comparison is true.
 * @param {vec3} b Value to return if the comparison is false.
 *
 * @returns {vec3} equivalent of comparison ? a : b
 */
vec3 czm_branchFreeTernary(bool comparison, vec3 a, vec3 b) {
    float useA = float(comparison);
    return a * useA + b * (1.0 - useA);
}

/**
 * Branchless ternary operator to be used when it's inexpensive to explicitly
 * evaluate both possibilities for a vec4 expression.
 *
 * @name czm_branchFreeTernary
 * @glslFunction
 *
 * @param {bool} comparison A comparison statement
 * @param {vec3} a Value to return if the comparison is true.
 * @param {vec3} b Value to return if the comparison is false.
 *
 * @returns {vec3} equivalent of comparison ? a : b
 */
vec4 czm_branchFreeTernary(bool comparison, vec4 a, vec4 b) {
    float useA = float(comparison);
    return a * useA + b * (1.0 - useA);
}
`,RT=`
vec4 czm_cascadeColor(vec4 weights)
{
    return vec4(1.0, 0.0, 0.0, 1.0) * weights.x +
           vec4(0.0, 1.0, 0.0, 1.0) * weights.y +
           vec4(0.0, 0.0, 1.0, 1.0) * weights.z +
           vec4(1.0, 0.0, 1.0, 1.0) * weights.w;
}
`,zT=`
uniform vec4 shadowMap_cascadeDistances;

float czm_cascadeDistance(vec4 weights)
{
    return dot(shadowMap_cascadeDistances, weights);
}
`,IT=`
uniform mat4 shadowMap_cascadeMatrices[4];

mat4 czm_cascadeMatrix(vec4 weights)
{
    return shadowMap_cascadeMatrices[0] * weights.x +
           shadowMap_cascadeMatrices[1] * weights.y +
           shadowMap_cascadeMatrices[2] * weights.z +
           shadowMap_cascadeMatrices[3] * weights.w;
}
`,PT=`
uniform vec4 shadowMap_cascadeSplits[2];

vec4 czm_cascadeWeights(float depthEye)
{
    // One component is set to 1.0 and all others set to 0.0.
    vec4 near = step(shadowMap_cascadeSplits[0], vec4(depthEye));
    vec4 far = step(depthEye, shadowMap_cascadeSplits[1]);
    return near * far;
}
`,MT=`float getSignedDistance(vec2 uv, highp sampler2D clippingDistance) {
    float signedDistance = texture(clippingDistance, uv).r;
    return (signedDistance - 0.5) * 2.0;
}

void czm_clipPolygons(highp sampler2D clippingDistance, int extentsLength, vec2 clippingPosition, int regionIndex) {
    // Position is completely outside of polygons bounds
    vec2 rectUv = clippingPosition;
    if (regionIndex < 0 || rectUv.x <= 0.0 || rectUv.y <= 0.0 || rectUv.x >= 1.0 || rectUv.y >= 1.0) {
        #ifdef CLIPPING_INVERSE 
            discard;
        #endif
        return;
    }

    vec2 clippingDistanceTextureDimensions = vec2(textureSize(clippingDistance, 0));
    vec2 sampleOffset = max(1.0 / clippingDistanceTextureDimensions, vec2(0.005));
    float dimension = float(extentsLength);
    if (extentsLength > 2) {
       dimension = ceil(log2(float(extentsLength)));
    }

    vec2 textureOffset = vec2(mod(float(regionIndex), dimension), floor(float(regionIndex) / dimension)) / dimension;
    vec2 uv = textureOffset + rectUv / dimension;

    float signedDistance = getSignedDistance(uv, clippingDistance);

    #ifdef CLIPPING_INVERSE
    if (signedDistance > 0.0)  {
        discard;
    }
    #else
    if (signedDistance < 0.0)  {
        discard;
    }
    #endif
}
`,NT=`/**
 * DOC_TBA
 *
 * @name czm_columbusViewMorph
 * @glslFunction
 */
vec4 czm_columbusViewMorph(vec4 position2D, vec4 position3D, float time)
{
    // Just linear for now.
    vec3 p = mix(position2D.xyz, position3D.xyz, time);
    return vec4(p, 1.0);
}
`,DT=`/**
 * Compute the atmosphere color, applying Rayleigh and Mie scattering. This
 * builtin uses automatic uniforms so the atmophere settings are synced with the
 * state of the Scene, even in other contexts like Model.
 *
 * @name czm_computeAtmosphereColor
 * @glslFunction
 *
 * @param {vec3} positionWC Position of the fragment in world coords (low precision)
 * @param {vec3} lightDirection Light direction from the sun or other light source.
 * @param {vec3} rayleighColor The Rayleigh scattering color computed by a scattering function
 * @param {vec3} mieColor The Mie scattering color computed by a scattering function
 * @param {float} opacity The opacity computed by a scattering function.
 */
vec4 czm_computeAtmosphereColor(
    vec3 positionWC,
    vec3 lightDirection,
    vec3 rayleighColor,
    vec3 mieColor,
    float opacity
) {
    // Setup the primary ray: from the camera position to the vertex position.
    vec3 cameraToPositionWC = positionWC - czm_viewerPositionWC;
    vec3 cameraToPositionWCDirection = normalize(cameraToPositionWC);

    float cosAngle = dot(cameraToPositionWCDirection, lightDirection);
    float cosAngleSq = cosAngle * cosAngle;

    float G = czm_atmosphereMieAnisotropy;
    float GSq = G * G;

    // The Rayleigh phase function.
    float rayleighPhase = 3.0 / (50.2654824574) * (1.0 + cosAngleSq);
    // The Mie phase function.
    float miePhase = 3.0 / (25.1327412287) * ((1.0 - GSq) * (cosAngleSq + 1.0)) / (pow(1.0 + GSq - 2.0 * cosAngle * G, 1.5) * (2.0 + GSq));

    // The final color is generated by combining the effects of the Rayleigh and Mie scattering.
    vec3 rayleigh = rayleighPhase * rayleighColor;
    vec3 mie = miePhase * mieColor;

    vec3 color = (rayleigh + mie) * czm_atmosphereLightIntensity;

    return vec4(color, opacity);
}

/**
 * Compute the atmosphere color, applying Rayleigh and Mie scattering. This
 * builtin uses automatic uniforms so the atmophere settings are synced with the
 * state of the Scene, even in other contexts like Model.
 *
 * @name czm_computeAtmosphereColor
 * @glslFunction
 *
 * @param {czm_ray} primaryRay Ray from the origin to sky fragment to in world coords (low precision)
 * @param {vec3} lightDirection Light direction from the sun or other light source.
 * @param {vec3} rayleighColor The Rayleigh scattering color computed by a scattering function
 * @param {vec3} mieColor The Mie scattering color computed by a scattering function
 * @param {float} opacity The opacity computed by a scattering function.
 */
vec4 czm_computeAtmosphereColor(
    czm_ray primaryRay,
    vec3 lightDirection,
    vec3 rayleighColor,
    vec3 mieColor,
    float opacity
) {
    vec3 direction = normalize(primaryRay.direction);

    float cosAngle = dot(direction, lightDirection);
    float cosAngleSq = cosAngle * cosAngle;

    float G = czm_atmosphereMieAnisotropy;
    float GSq = G * G;

    // The Rayleigh phase function.
    float rayleighPhase = 3.0 / (50.2654824574) * (1.0 + cosAngleSq);
    // The Mie phase function.
    float miePhase = 3.0 / (25.1327412287) * ((1.0 - GSq) * (cosAngleSq + 1.0)) / (pow(1.0 + GSq - 2.0 * cosAngle * G, 1.5) * (2.0 + GSq));

    // The final color is generated by combining the effects of the Rayleigh and Mie scattering.
    vec3 rayleigh = rayleighPhase * rayleighColor;
    vec3 mie = miePhase * mieColor;

    vec3 color = (rayleigh + mie) * czm_atmosphereLightIntensity;

    return vec4(color, opacity);
}

`,LT=`/**
 * Compute atmosphere scattering for the ground atmosphere and fog. This method
 * uses automatic uniforms so it is always synced with the scene settings.
 *
 * @name czm_computeGroundAtmosphereScattering
 * @glslfunction
 *
 * @param {vec3} positionWC The position of the fragment in world coordinates.
 * @param {vec3} lightDirection The direction of the light to calculate the scattering from.
 * @param {vec3} rayleighColor The variable the Rayleigh scattering will be written to.
 * @param {vec3} mieColor The variable the Mie scattering will be written to.
 * @param {float} opacity The variable the transmittance will be written to.
 */
void czm_computeGroundAtmosphereScattering(vec3 positionWC, vec3 lightDirection, out vec3 rayleighColor, out vec3 mieColor, out float opacity) {
    vec3 cameraToPositionWC = positionWC - czm_viewerPositionWC;
    vec3 cameraToPositionWCDirection = normalize(cameraToPositionWC);
    czm_ray primaryRay = czm_ray(czm_viewerPositionWC, cameraToPositionWCDirection);

    float atmosphereInnerRadius = length(positionWC);

    czm_computeScattering(
        primaryRay,
        length(cameraToPositionWC),
        lightDirection,
        atmosphereInnerRadius,
        rayleighColor,
        mieColor,
        opacity
    );
}
`,FT=`/**
 * Returns a position in model coordinates relative to eye taking into
 * account the current scene mode: 3D, 2D, or Columbus view.
 * <p>
 * This uses standard position attributes, <code>position3DHigh</code>, 
 * <code>position3DLow</code>, <code>position2DHigh</code>, and <code>position2DLow</code>, 
 * and should be used when writing a vertex shader for an {@link Appearance}.
 * </p>
 *
 * @name czm_computePosition
 * @glslFunction
 *
 * @returns {vec4} The position relative to eye.
 *
 * @example
 * vec4 p = czm_computePosition();
 * v_positionEC = (czm_modelViewRelativeToEye * p).xyz;
 * gl_Position = czm_modelViewProjectionRelativeToEye * p;
 *
 * @see czm_translateRelativeToEye
 */
vec4 czm_computePosition();
`,BT=`/**
 * This function computes the colors contributed by Rayliegh and Mie scattering on a given ray, as well as
 * the transmittance value for the ray. This function uses automatic uniforms
 * so the atmosphere settings are always synced with the current scene.
 *
 * @name czm_computeScattering
 * @glslfunction
 *
 * @param {czm_ray} primaryRay The ray from the camera to the position.
 * @param {float} primaryRayLength The length of the primary ray.
 * @param {vec3} lightDirection The direction of the light to calculate the scattering from.
 * @param {vec3} rayleighColor The variable the Rayleigh scattering will be written to.
 * @param {vec3} mieColor The variable the Mie scattering will be written to.
 * @param {float} opacity The variable the transmittance will be written to.
 */
void czm_computeScattering(
    czm_ray primaryRay,
    float primaryRayLength,
    vec3 lightDirection,
    float atmosphereInnerRadius,
    out vec3 rayleighColor,
    out vec3 mieColor,
    out float opacity
) {
    const float ATMOSPHERE_THICKNESS = 111e3; // The thickness of the atmosphere in meters.
    const int PRIMARY_STEPS_MAX = 16; // Maximum number of times the ray from the camera to the world position (primary ray) is sampled.
    const int LIGHT_STEPS_MAX = 4; // Maximum number of times the light is sampled from the light source's intersection with the atmosphere to a sample position on the primary ray.

    // Initialize the default scattering amounts to 0.
    rayleighColor = vec3(0.0);
    mieColor = vec3(0.0);
    opacity = 0.0;

    float atmosphereOuterRadius = atmosphereInnerRadius + ATMOSPHERE_THICKNESS;

    vec3 origin = vec3(0.0);

    // Calculate intersection from the camera to the outer ring of the atmosphere.
    czm_raySegment primaryRayAtmosphereIntersect = czm_raySphereIntersectionInterval(primaryRay, origin, atmosphereOuterRadius);

    // Return empty colors if no intersection with the atmosphere geometry.
    if (primaryRayAtmosphereIntersect == czm_emptyRaySegment) {
        return;
    }

    // To deal with smaller values of PRIMARY_STEPS (e.g. 4)
    // we implement a split strategy: sky or horizon.
    // For performance reasons, instead of a if/else branch
    // a soft choice is implemented through a weight 0.0 <= w_stop_gt_lprl <= 1.0
    float x = 1e-7 * primaryRayAtmosphereIntersect.stop / length(primaryRayLength);
    // Value close to 0.0: close to the horizon
    // Value close to 1.0: above in the sky
    float w_stop_gt_lprl = 0.5 * (1.0 + czm_approximateTanh(x));

    // The ray should start from the first intersection with the outer atmopshere, or from the camera position, if it is inside the atmosphere.
    float start_0 = primaryRayAtmosphereIntersect.start;
    primaryRayAtmosphereIntersect.start = max(primaryRayAtmosphereIntersect.start, 0.0);
    // The ray should end at the exit from the atmosphere or at the distance to the vertex, whichever is smaller.
    primaryRayAtmosphereIntersect.stop = min(primaryRayAtmosphereIntersect.stop, length(primaryRayLength));

    // For the number of ray steps, distinguish inside or outside atmosphere (outer space)
    // (1) from outer space we have to use more ray steps to get a realistic rendering
    // (2) within atmosphere we need fewer steps for faster rendering
    float x_o_a = start_0 - ATMOSPHERE_THICKNESS; // ATMOSPHERE_THICKNESS used as an ad-hoc constant, no precise meaning here, only the order of magnitude matters
    float w_inside_atmosphere = 1.0 - 0.5 * (1.0 + czm_approximateTanh(x_o_a));
    int PRIMARY_STEPS = PRIMARY_STEPS_MAX - int(w_inside_atmosphere * 12.0); // Number of times the ray from the camera to the world position (primary ray) is sampled.
    int LIGHT_STEPS = LIGHT_STEPS_MAX - int(w_inside_atmosphere * 2.0); // Number of times the light is sampled from the light source's intersection with the atmosphere to a sample position on the primary ray.

    // Setup for sampling positions along the ray - starting from the intersection with the outer ring of the atmosphere.
    float rayPositionLength = primaryRayAtmosphereIntersect.start;
    // (1) Outside the atmosphere: constant rayStepLength
    // (2) Inside atmosphere: variable rayStepLength to compensate the rough rendering of the smaller number of ray steps
    float totalRayLength = primaryRayAtmosphereIntersect.stop - rayPositionLength;
    float rayStepLengthIncrease = w_inside_atmosphere * ((1.0 - w_stop_gt_lprl) * totalRayLength / (float(PRIMARY_STEPS * (PRIMARY_STEPS + 1)) / 2.0));
    float rayStepLength = max(1.0 - w_inside_atmosphere, w_stop_gt_lprl) * totalRayLength / max(7.0 * w_inside_atmosphere, float(PRIMARY_STEPS));

    vec3 rayleighAccumulation = vec3(0.0);
    vec3 mieAccumulation = vec3(0.0);
    vec2 opticalDepth = vec2(0.0);
    vec2 heightScale = vec2(czm_atmosphereRayleighScaleHeight, czm_atmosphereMieScaleHeight);

    // Sample positions on the primary ray.
    for (int i = 0; i < PRIMARY_STEPS_MAX; ++i) {

        // The loop should be: for (int i = 0; i < PRIMARY_STEPS; ++i) {...} but WebGL1 cannot
        // loop with non-constant condition, so it has to break early instead
        if (i >= PRIMARY_STEPS) {
            break;
        }

        // Calculate sample position along viewpoint ray.
        vec3 samplePosition = primaryRay.origin + primaryRay.direction * (rayPositionLength + rayStepLength);

        // Calculate height of sample position above ellipsoid.
        float sampleHeight = length(samplePosition) - atmosphereInnerRadius;

        // Calculate and accumulate density of particles at the sample position.
        vec2 sampleDensity = exp(-sampleHeight / heightScale) * rayStepLength;
        opticalDepth += sampleDensity;

        // Generate ray from the sample position segment to the light source, up to the outer ring of the atmosphere.
        czm_ray lightRay = czm_ray(samplePosition, lightDirection);
        czm_raySegment lightRayAtmosphereIntersect = czm_raySphereIntersectionInterval(lightRay, origin, atmosphereOuterRadius);

        float lightStepLength = lightRayAtmosphereIntersect.stop / float(LIGHT_STEPS);
        float lightPositionLength = 0.0;

        vec2 lightOpticalDepth = vec2(0.0);

        // Sample positions along the light ray, to accumulate incidence of light on the latest sample segment.
        for (int j = 0; j < LIGHT_STEPS_MAX; ++j) {

            // The loop should be: for (int j = 0; i < LIGHT_STEPS; ++j) {...} but WebGL1 cannot
            // loop with non-constant condition, so it has to break early instead
            if (j >= LIGHT_STEPS) {
                break;
            }

            // Calculate sample position along light ray.
            vec3 lightPosition = samplePosition + lightDirection * (lightPositionLength + lightStepLength * 0.5);

            // Calculate height of the light sample position above ellipsoid.
            float lightHeight = length(lightPosition) - atmosphereInnerRadius;

            // Calculate density of photons at the light sample position.
            lightOpticalDepth += exp(-lightHeight / heightScale) * lightStepLength;

            // Increment distance on light ray.
            lightPositionLength += lightStepLength;
        }

        // Compute attenuation via the primary ray and the light ray.
        vec3 attenuation = exp(-((czm_atmosphereMieCoefficient * (opticalDepth.y + lightOpticalDepth.y)) + (czm_atmosphereRayleighCoefficient * (opticalDepth.x + lightOpticalDepth.x))));

        // Accumulate the scattering.
        rayleighAccumulation += sampleDensity.x * attenuation;
        mieAccumulation += sampleDensity.y * attenuation;

        // Increment distance on primary ray.
        rayPositionLength += (rayStepLength += rayStepLengthIncrease);
    }

    // Compute the scattering amount.
    rayleighColor = czm_atmosphereRayleighCoefficient * rayleighAccumulation;
    mieColor = czm_atmosphereMieCoefficient * mieAccumulation;

    // Compute the transmittance i.e. how much light is passing through the atmosphere.
    opacity = length(exp(-((czm_atmosphereMieCoefficient * opticalDepth.y) + (czm_atmosphereRayleighCoefficient * opticalDepth.x))));
}
`,UT=`/**
 * @private
 */
vec2 cordic(float angle)
{
// Scale the vector by the appropriate factor for the 24 iterations to follow.
    vec2 vector = vec2(6.0725293500888267e-1, 0.0);
// Iteration 1
    float sense = (angle < 0.0) ? -1.0 : 1.0;
 //   float factor = sense * 1.0;  // 2^-0
    mat2 rotation = mat2(1.0, sense, -sense, 1.0);
    vector = rotation * vector;
    angle -= sense * 7.8539816339744828e-1;  // atan(2^-0)
// Iteration 2
    sense = (angle < 0.0) ? -1.0 : 1.0;
    float factor = sense * 5.0e-1;  // 2^-1
    rotation[0][1] = factor;
    rotation[1][0] = -factor;
    vector = rotation * vector;
    angle -= sense * 4.6364760900080609e-1;  // atan(2^-1)
// Iteration 3
    sense = (angle < 0.0) ? -1.0 : 1.0;
    factor = sense * 2.5e-1;  // 2^-2
    rotation[0][1] = factor;
    rotation[1][0] = -factor;
    vector = rotation * vector;
    angle -= sense * 2.4497866312686414e-1;  // atan(2^-2)
// Iteration 4
    sense = (angle < 0.0) ? -1.0 : 1.0;
    factor = sense * 1.25e-1;  // 2^-3
    rotation[0][1] = factor;
    rotation[1][0] = -factor;
    vector = rotation * vector;
    angle -= sense * 1.2435499454676144e-1;  // atan(2^-3)
// Iteration 5
    sense = (angle < 0.0) ? -1.0 : 1.0;
    factor = sense * 6.25e-2;  // 2^-4
    rotation[0][1] = factor;
    rotation[1][0] = -factor;
    vector = rotation * vector;
    angle -= sense * 6.2418809995957350e-2;  // atan(2^-4)
// Iteration 6
    sense = (angle < 0.0) ? -1.0 : 1.0;
    factor = sense * 3.125e-2;  // 2^-5
    rotation[0][1] = factor;
    rotation[1][0] = -factor;
    vector = rotation * vector;
    angle -= sense * 3.1239833430268277e-2;  // atan(2^-5)
// Iteration 7
    sense = (angle < 0.0) ? -1.0 : 1.0;
    factor = sense * 1.5625e-2;  // 2^-6
    rotation[0][1] = factor;
    rotation[1][0] = -factor;
    vector = rotation * vector;
    angle -= sense * 1.5623728620476831e-2;  // atan(2^-6)
// Iteration 8
    sense = (angle < 0.0) ? -1.0 : 1.0;
    factor = sense * 7.8125e-3;  // 2^-7
    rotation[0][1] = factor;
    rotation[1][0] = -factor;
    vector = rotation * vector;
    angle -= sense * 7.8123410601011111e-3;  // atan(2^-7)
// Iteration 9
    sense = (angle < 0.0) ? -1.0 : 1.0;
    factor = sense * 3.90625e-3;  // 2^-8
    rotation[0][1] = factor;
    rotation[1][0] = -factor;
    vector = rotation * vector;
    angle -= sense * 3.9062301319669718e-3;  // atan(2^-8)
// Iteration 10
    sense = (angle < 0.0) ? -1.0 : 1.0;
    factor = sense * 1.953125e-3;  // 2^-9
    rotation[0][1] = factor;
    rotation[1][0] = -factor;
    vector = rotation * vector;
    angle -= sense * 1.9531225164788188e-3;  // atan(2^-9)
// Iteration 11
    sense = (angle < 0.0) ? -1.0 : 1.0;
    factor = sense * 9.765625e-4;  // 2^-10
    rotation[0][1] = factor;
    rotation[1][0] = -factor;
    vector = rotation * vector;
    angle -= sense * 9.7656218955931946e-4;  // atan(2^-10)
// Iteration 12
    sense = (angle < 0.0) ? -1.0 : 1.0;
    factor = sense * 4.8828125e-4;  // 2^-11
    rotation[0][1] = factor;
    rotation[1][0] = -factor;
    vector = rotation * vector;
    angle -= sense * 4.8828121119489829e-4;  // atan(2^-11)
// Iteration 13
    sense = (angle < 0.0) ? -1.0 : 1.0;
    factor = sense * 2.44140625e-4;  // 2^-12
    rotation[0][1] = factor;
    rotation[1][0] = -factor;
    vector = rotation * vector;
    angle -= sense * 2.4414062014936177e-4;  // atan(2^-12)
// Iteration 14
    sense = (angle < 0.0) ? -1.0 : 1.0;
    factor = sense * 1.220703125e-4;  // 2^-13
    rotation[0][1] = factor;
    rotation[1][0] = -factor;
    vector = rotation * vector;
    angle -= sense * 1.2207031189367021e-4;  // atan(2^-13)
// Iteration 15
    sense = (angle < 0.0) ? -1.0 : 1.0;
    factor = sense * 6.103515625e-5;  // 2^-14
    rotation[0][1] = factor;
    rotation[1][0] = -factor;
    vector = rotation * vector;
    angle -= sense * 6.1035156174208773e-5;  // atan(2^-14)
// Iteration 16
    sense = (angle < 0.0) ? -1.0 : 1.0;
    factor = sense * 3.0517578125e-5;  // 2^-15
    rotation[0][1] = factor;
    rotation[1][0] = -factor;
    vector = rotation * vector;
    angle -= sense * 3.0517578115526096e-5;  // atan(2^-15)
// Iteration 17
    sense = (angle < 0.0) ? -1.0 : 1.0;
    factor = sense * 1.52587890625e-5;  // 2^-16
    rotation[0][1] = factor;
    rotation[1][0] = -factor;
    vector = rotation * vector;
    angle -= sense * 1.5258789061315762e-5;  // atan(2^-16)
// Iteration 18
    sense = (angle < 0.0) ? -1.0 : 1.0;
    factor = sense * 7.62939453125e-6;  // 2^-17
    rotation[0][1] = factor;
    rotation[1][0] = -factor;
    vector = rotation * vector;
    angle -= sense * 7.6293945311019700e-6;  // atan(2^-17)
// Iteration 19
    sense = (angle < 0.0) ? -1.0 : 1.0;
    factor = sense * 3.814697265625e-6;  // 2^-18
    rotation[0][1] = factor;
    rotation[1][0] = -factor;
    vector = rotation * vector;
    angle -= sense * 3.8146972656064961e-6;  // atan(2^-18)
// Iteration 20
    sense = (angle < 0.0) ? -1.0 : 1.0;
    factor = sense * 1.9073486328125e-6;  // 2^-19
    rotation[0][1] = factor;
    rotation[1][0] = -factor;
    vector = rotation * vector;
    angle -= sense * 1.9073486328101870e-6;  // atan(2^-19)
// Iteration 21
    sense = (angle < 0.0) ? -1.0 : 1.0;
    factor = sense * 9.5367431640625e-7;  // 2^-20
    rotation[0][1] = factor;
    rotation[1][0] = -factor;
    vector = rotation * vector;
    angle -= sense * 9.5367431640596084e-7;  // atan(2^-20)
// Iteration 22
    sense = (angle < 0.0) ? -1.0 : 1.0;
    factor = sense * 4.76837158203125e-7;  // 2^-21
    rotation[0][1] = factor;
    rotation[1][0] = -factor;
    vector = rotation * vector;
    angle -= sense * 4.7683715820308884e-7;  // atan(2^-21)
// Iteration 23
    sense = (angle < 0.0) ? -1.0 : 1.0;
    factor = sense * 2.384185791015625e-7;  // 2^-22
    rotation[0][1] = factor;
    rotation[1][0] = -factor;
    vector = rotation * vector;
    angle -= sense * 2.3841857910155797e-7;  // atan(2^-22)
// Iteration 24
    sense = (angle < 0.0) ? -1.0 : 1.0;
    factor = sense * 1.1920928955078125e-7;  // 2^-23
    rotation[0][1] = factor;
    rotation[1][0] = -factor;
    vector = rotation * vector;
//    angle -= sense * 1.1920928955078068e-7;  // atan(2^-23)

    return vector;
}

/**
 * Computes the cosine and sine of the provided angle using the CORDIC algorithm.
 *
 * @name czm_cosineAndSine
 * @glslFunction
 *
 * @param {float} angle The angle in radians.
 *
 * @returns {vec2} The resulting cosine of the angle (as the x coordinate) and sine of the angle (as the y coordinate).
 *
 * @example
 * vec2 v = czm_cosineAndSine(czm_piOverSix);
 * float cosine = v.x;
 * float sine = v.y;
 */
vec2 czm_cosineAndSine(float angle)
{
    if (angle < -czm_piOverTwo || angle > czm_piOverTwo)
    {
        if (angle < 0.0)
        {
            return -cordic(angle + czm_pi);
        }
        else
        {
            return -cordic(angle - czm_pi);
        }
    }
    else
    {
        return cordic(angle);
    }
}
`,GT=`/**
 * Decompresses texture coordinates that were packed into a single float.
 *
 * @name czm_decompressTextureCoordinates
 * @glslFunction
 *
 * @param {float} encoded The compressed texture coordinates.
 * @returns {vec2} The decompressed texture coordinates.
 */
 vec2 czm_decompressTextureCoordinates(float encoded)
 {
    float temp = encoded / 4096.0;
    float xZeroTo4095 = floor(temp);
    float stx = xZeroTo4095 / 4095.0;
    float sty = (encoded - xZeroTo4095 * 4096.0) / 4095.0;
    return vec2(stx, sty);
 }
`,qT=`// emulated noperspective
#if (__VERSION__ == 300 || defined(GL_EXT_frag_depth)) && !defined(LOG_DEPTH)
out float v_WindowZ;
#endif

/**
 * Emulates GL_DEPTH_CLAMP, which is not available in WebGL 1 or 2.
 * GL_DEPTH_CLAMP clamps geometry that is outside the near and far planes, 
 * capping the shadow volume. More information here: 
 * https://www.khronos.org/registry/OpenGL/extensions/ARB/ARB_depth_clamp.txt.
 *
 * When GL_EXT_frag_depth is available we emulate GL_DEPTH_CLAMP by ensuring 
 * no geometry gets clipped by setting the clip space z value to 0.0 and then
 * sending the unaltered screen space z value (using emulated noperspective
 * interpolation) to the frag shader where it is clamped to [0,1] and then
 * written with gl_FragDepth (see czm_writeDepthClamp). This technique is based on:
 * https://stackoverflow.com/questions/5960757/how-to-emulate-gl-depth-clamp-nv.
 *
 * When GL_EXT_frag_depth is not available, which is the case on some mobile 
 * devices, we must attempt to fix this only in the vertex shader. 
 * The approach is to clamp the z value to the far plane, which closes the 
 * shadow volume but also distorts the geometry, so there can still be artifacts
 * on frustum seams.
 *
 * @name czm_depthClamp
 * @glslFunction
 *
 * @param {vec4} coords The vertex in clip coordinates.
 * @returns {vec4} The modified vertex.
 *
 * @example
 * gl_Position = czm_depthClamp(czm_modelViewProjection * vec4(position, 1.0));
 *
 * @see czm_writeDepthClamp
 */
vec4 czm_depthClamp(vec4 coords)
{
#ifndef LOG_DEPTH
#if __VERSION__ == 300 || defined(GL_EXT_frag_depth)
    v_WindowZ = (0.5 * (coords.z / coords.w) + 0.5) * coords.w;
    coords.z = 0.0;
#else
    coords.z = min(coords.z, coords.w);
#endif
#endif
    return coords;
}
`,kT=`/**
 * Computes a 3x3 rotation matrix that transforms vectors from an ellipsoid's east-north-up coordinate system 
 * to eye coordinates.  In east-north-up coordinates, x points east, y points north, and z points along the 
 * surface normal.  East-north-up can be used as an ellipsoid's tangent space for operations such as bump mapping.
 * <br /><br />
 * The ellipsoid is assumed to be centered at the model coordinate's origin.
 *
 * @name czm_eastNorthUpToEyeCoordinates
 * @glslFunction
 *
 * @param {vec3} positionMC The position on the ellipsoid in model coordinates.
 * @param {vec3} normalEC The normalized ellipsoid surface normal, at <code>positionMC</code>, in eye coordinates.
 *
 * @returns {mat3} A 3x3 rotation matrix that transforms vectors from the east-north-up coordinate system to eye coordinates.
 *
 * @example
 * // Transform a vector defined in the east-north-up coordinate 
 * // system, (0, 0, 1) which is the surface normal, to eye 
 * // coordinates.
 * mat3 m = czm_eastNorthUpToEyeCoordinates(positionMC, normalEC);
 * vec3 normalEC = m * vec3(0.0, 0.0, 1.0);
 */
mat3 czm_eastNorthUpToEyeCoordinates(vec3 positionMC, vec3 normalEC)
{
    vec3 tangentMC = normalize(vec3(-positionMC.y, positionMC.x, 0.0));  // normalized surface tangent in model coordinates
    vec3 tangentEC = normalize(czm_normal3D * tangentMC);                // normalized surface tangent in eye coordinates
    vec3 bitangentEC = normalize(cross(normalEC, tangentEC));            // normalized surface bitangent in eye coordinates

    return mat3(
        tangentEC.x,   tangentEC.y,   tangentEC.z,
        bitangentEC.x, bitangentEC.y, bitangentEC.z,
        normalEC.x,    normalEC.y,    normalEC.z);
}
`,VT=`/**
 * DOC_TBA
 *
 * @name czm_ellipsoidContainsPoint
 * @glslFunction
 *
 */
bool czm_ellipsoidContainsPoint(vec3 ellipsoid_inverseRadii, vec3 point)
{
    vec3 scaled = ellipsoid_inverseRadii * (czm_inverseModelView * vec4(point, 1.0)).xyz;
    return (dot(scaled, scaled) <= 1.0);
}
`,jT=`/**
 * Approximate uv coordinates based on the ellipsoid normal.
 *
 * @name czm_ellipsoidTextureCoordinates
 * @glslFunction
 */
vec2 czm_ellipsoidTextureCoordinates(vec3 normal)
{
    return vec2(atan(normal.y, normal.x) * czm_oneOverTwoPi + 0.5, asin(normal.z) * czm_oneOverPi + 0.5);
}
`,HT=`/**
 * Compares <code>left</code> and <code>right</code> componentwise. Returns <code>true</code>
 * if they are within <code>epsilon</code> and <code>false</code> otherwise. The inputs
 * <code>left</code> and <code>right</code> can be <code>float</code>s, <code>vec2</code>s,
 * <code>vec3</code>s, or <code>vec4</code>s.
 *
 * @name czm_equalsEpsilon
 * @glslFunction
 *
 * @param {} left The first vector.
 * @param {} right The second vector.
 * @param {float} epsilon The epsilon to use for equality testing.
 * @returns {bool} <code>true</code> if the components are within <code>epsilon</code> and <code>false</code> otherwise.
 *
 * @example
 * // GLSL declarations
 * bool czm_equalsEpsilon(float left, float right, float epsilon);
 * bool czm_equalsEpsilon(vec2 left, vec2 right, float epsilon);
 * bool czm_equalsEpsilon(vec3 left, vec3 right, float epsilon);
 * bool czm_equalsEpsilon(vec4 left, vec4 right, float epsilon);
 */
bool czm_equalsEpsilon(vec4 left, vec4 right, float epsilon) {
    return all(lessThanEqual(abs(left - right), vec4(epsilon)));
}

bool czm_equalsEpsilon(vec3 left, vec3 right, float epsilon) {
    return all(lessThanEqual(abs(left - right), vec3(epsilon)));
}

bool czm_equalsEpsilon(vec2 left, vec2 right, float epsilon) {
    return all(lessThanEqual(abs(left - right), vec2(epsilon)));
}

bool czm_equalsEpsilon(float left, float right, float epsilon) {
    return (abs(left - right) <= epsilon);
}
`,WT=`/**
 * DOC_TBA
 *
 * @name czm_eyeOffset
 * @glslFunction
 *
 * @param {vec4} positionEC DOC_TBA.
 * @param {vec3} eyeOffset DOC_TBA.
 *
 * @returns {vec4} DOC_TBA.
 */
vec4 czm_eyeOffset(vec4 positionEC, vec3 eyeOffset)
{
    // This equation is approximate in x and y.
    vec4 p = positionEC;
    vec4 zEyeOffset = normalize(p) * eyeOffset.z;
    p.xy += eyeOffset.xy + zEyeOffset.xy;
    p.z += zEyeOffset.z;
    return p;
}
`,YT=`/**
 * Transforms a position from eye to window coordinates.  The transformation
 * from eye to clip coordinates is done using {@link czm_projection}.
 * The transform from normalized device coordinates to window coordinates is
 * done using {@link czm_viewportTransformation}, which assumes a depth range
 * of <code>near = 0</code> and <code>far = 1</code>.
 * <br /><br />
 * This transform is useful when there is a need to manipulate window coordinates
 * in a vertex shader as done by {@link BillboardCollection}.
 *
 * @name czm_eyeToWindowCoordinates
 * @glslFunction
 *
 * @param {vec4} position The position in eye coordinates to transform.
 *
 * @returns {vec4} The transformed position in window coordinates.
 *
 * @see czm_modelToWindowCoordinates
 * @see czm_projection
 * @see czm_viewportTransformation
 * @see BillboardCollection
 *
 * @example
 * vec4 positionWC = czm_eyeToWindowCoordinates(positionEC);
 */
vec4 czm_eyeToWindowCoordinates(vec4 positionEC)
{
    vec4 q = czm_projection * positionEC;                        // clip coordinates
    q.xyz /= q.w;                                                // normalized device coordinates
    q.xyz = (czm_viewportTransformation * vec4(q.xyz, 1.0)).xyz; // window coordinates
    return q;
}
`,XT=`/**
 * Approxiamtes atan over the range [0, 1]. Safe to flip output for negative input.
 *
 * Based on Michal Drobot's approximation from ShaderFastLibs, which in turn is based on
 * "Efficient approximations for the arctangent function," Rajan, S. Sichun Wang Inkol, R. Joyal, A., May 2006.
 * Adapted from ShaderFastLibs under MIT License.
 *
 * Chosen for the following characteristics over range [0, 1]:
 * - basically no error at 0 and 1, important for getting around range limit (naive atan2 via atan requires infinite range atan)
 * - no visible artifacts from first-derivative discontinuities, unlike latitude via range-reduced sqrt asin approximations (at equator)
 *
 * The original code is x * (-0.1784 * abs(x) - 0.0663 * x * x + 1.0301);
 * Removed the abs() in here because it isn't needed, the input range is guaranteed as [0, 1] by how we're approximating atan2.
 *
 * @name czm_fastApproximateAtan
 * @glslFunction
 *
 * @param {float} x Value between 0 and 1 inclusive.
 *
 * @returns {float} Approximation of atan(x)
 */
float czm_fastApproximateAtan(float x) {
    return x * (-0.1784 * x - 0.0663 * x * x + 1.0301);
}

/**
 * Approximation of atan2.
 *
 * Range reduction math based on nvidia's cg reference implementation for atan2: http://developer.download.nvidia.com/cg/atan2.html
 * However, we replaced their atan curve with Michael Drobot's (see above).
 *
 * @name czm_fastApproximateAtan
 * @glslFunction
 *
 * @param {float} x Value between -1 and 1 inclusive.
 * @param {float} y Value between -1 and 1 inclusive.
 *
 * @returns {float} Approximation of atan2(x, y)
 */
float czm_fastApproximateAtan(float x, float y) {
    // atan approximations are usually only reliable over [-1, 1], or, in our case, [0, 1] due to modifications.
    // So range-reduce using abs and by flipping whether x or y is on top.
    float t = abs(x); // t used as swap and atan result.
    float opposite = abs(y);
    float adjacent = max(t, opposite);
    opposite = min(t, opposite);

    t = czm_fastApproximateAtan(opposite / adjacent);

    // Undo range reduction
    t = czm_branchFreeTernary(abs(y) > abs(x), czm_piOverTwo - t, t);
    t = czm_branchFreeTernary(x < 0.0, czm_pi - t, t);
    t = czm_branchFreeTernary(y < 0.0, -t, t);
    return t;
}
`,$T=`/**
 * Gets the color with fog at a distance from the camera.
 *
 * @name czm_fog
 * @glslFunction
 *
 * @param {float} distanceToCamera The distance to the camera in meters.
 * @param {vec3} color The original color.
 * @param {vec3} fogColor The color of the fog.
 *
 * @returns {vec3} The color adjusted for fog at the distance from the camera.
 */
vec3 czm_fog(float distanceToCamera, vec3 color, vec3 fogColor)
{
    float scalar = distanceToCamera * czm_fogDensity;
    float fog = 1.0 - exp(-(scalar * scalar));
    return mix(color, fogColor, fog);
}

/**
 * Gets the color with fog at a distance from the camera.
 *
 * @name czm_fog
 * @glslFunction
 *
 * @param {float} distanceToCamera The distance to the camera in meters.
 * @param {vec3} color The original color.
 * @param {vec3} fogColor The color of the fog.
 * @param {float} fogModifierConstant A constant to modify the appearance of fog.
 *
 * @returns {vec3} The color adjusted for fog at the distance from the camera.
 */
vec3 czm_fog(float distanceToCamera, vec3 color, vec3 fogColor, float fogModifierConstant)
{
    float scalar = distanceToCamera * czm_fogDensity;
    float fog = 1.0 - exp(-((fogModifierConstant * scalar + fogModifierConstant) * (scalar * (1.0 + fogModifierConstant))));
    return mix(color, fogColor, fog);
}
`,ZT=`/**
 * Converts a color from RGB space to linear space.
 *
 * @name czm_gammaCorrect
 * @glslFunction
 *
 * @param {vec3} color The color in RGB space.
 * @returns {vec3} The color in linear space.
 */
vec3 czm_gammaCorrect(vec3 color) {
#ifdef HDR
    color = pow(color, vec3(czm_gamma));
#endif
    return color;
}

vec4 czm_gammaCorrect(vec4 color) {
#ifdef HDR
    color.rgb = pow(color.rgb, vec3(czm_gamma));
#endif
    return color;
}
`,KT=`/**
 * DOC_TBA
 *
 * @name czm_geodeticSurfaceNormal
 * @glslFunction
 *
 * @param {vec3} positionOnEllipsoid DOC_TBA
 * @param {vec3} ellipsoidCenter DOC_TBA
 * @param {vec3} oneOverEllipsoidRadiiSquared DOC_TBA
 * 
 * @returns {vec3} DOC_TBA.
 */
vec3 czm_geodeticSurfaceNormal(vec3 positionOnEllipsoid, vec3 ellipsoidCenter, vec3 oneOverEllipsoidRadiiSquared)
{
    return normalize((positionOnEllipsoid - ellipsoidCenter) * oneOverEllipsoidRadiiSquared);
}
`,QT=`/**
 * An czm_material with default values. Every material's czm_getMaterial
 * should use this default material as a base for the material it returns.
 * The default normal value is given by materialInput.normalEC.
 *
 * @name czm_getDefaultMaterial
 * @glslFunction
 *
 * @param {czm_materialInput} input The input used to construct the default material.
 *
 * @returns {czm_material} The default material.
 *
 * @see czm_materialInput
 * @see czm_material
 * @see czm_getMaterial
 */
czm_material czm_getDefaultMaterial(czm_materialInput materialInput)
{
    czm_material material;
    material.diffuse = vec3(0.0);
    material.specular = 0.0;
    material.shininess = 1.0;
    material.normal = materialInput.normalEC;
    material.emission = vec3(0.0);
    material.alpha = 1.0;
    return material;
}
`,JT=`/**
 * Select which direction vector to use for dynamic atmosphere lighting based on an enum value
 *
 * @name czm_getDynamicAtmosphereLightDirection
 * @glslfunction
 * @see DynamicAtmosphereLightingType.js
 *
 * @param {vec3} positionWC the position of the vertex/fragment in world coordinates. This is normalized and returned when dynamic lighting is turned off.
 * @param {float} lightEnum The enum value for selecting between light sources.
 * @return {vec3} The normalized light direction vector. Depending on the enum value, it is either positionWC, czm_lightDirectionWC or czm_sunDirectionWC
 */
vec3 czm_getDynamicAtmosphereLightDirection(vec3 positionWC, float lightEnum) {
    const float NONE = 0.0;
    const float SCENE_LIGHT = 1.0;
    const float SUNLIGHT = 2.0;

    vec3 lightDirection =
        positionWC * float(lightEnum == NONE) +
        czm_lightDirectionWC * float(lightEnum == SCENE_LIGHT) +
        czm_sunDirectionWC * float(lightEnum == SUNLIGHT);
    return normalize(lightDirection);
}
`,eE=`/**
 * Calculates the intensity of diffusely reflected light.
 *
 * @name czm_getLambertDiffuse
 * @glslFunction
 *
 * @param {vec3} lightDirectionEC Unit vector pointing to the light source in eye coordinates.
 * @param {vec3} normalEC The surface normal in eye coordinates.
 *
 * @returns {float} The intensity of the diffuse reflection.
 *
 * @see czm_phong
 *
 * @example
 * float diffuseIntensity = czm_getLambertDiffuse(lightDirectionEC, normalEC);
 * float specularIntensity = czm_getSpecular(lightDirectionEC, toEyeEC, normalEC, 200);
 * vec3 color = (diffuseColor * diffuseIntensity) + (specularColor * specularIntensity);
 */
float czm_getLambertDiffuse(vec3 lightDirectionEC, vec3 normalEC)
{
    return max(dot(lightDirectionEC, normalEC), 0.0);
}
`,tE=`/**
 * Calculates the specular intensity of reflected light.
 *
 * @name czm_getSpecular
 * @glslFunction
 *
 * @param {vec3} lightDirectionEC Unit vector pointing to the light source in eye coordinates.
 * @param {vec3} toEyeEC Unit vector pointing to the eye position in eye coordinates.
 * @param {vec3} normalEC The surface normal in eye coordinates.
 * @param {float} shininess The sharpness of the specular reflection.  Higher values create a smaller, more focused specular highlight.
 *
 * @returns {float} The intensity of the specular highlight.
 *
 * @see czm_phong
 *
 * @example
 * float diffuseIntensity = czm_getLambertDiffuse(lightDirectionEC, normalEC);
 * float specularIntensity = czm_getSpecular(lightDirectionEC, toEyeEC, normalEC, 200);
 * vec3 color = (diffuseColor * diffuseIntensity) + (specularColor * specularIntensity);
 */
float czm_getSpecular(vec3 lightDirectionEC, vec3 toEyeEC, vec3 normalEC, float shininess)
{
    vec3 toReflectedLight = reflect(-lightDirectionEC, normalEC);
    float specular = max(dot(toReflectedLight, toEyeEC), 0.0);

    // pow has undefined behavior if both parameters <= 0.
    // Prevent this by making sure shininess is at least czm_epsilon2.
    return pow(specular, max(shininess, czm_epsilon2));
}
`,nE=`/**
 * @private
 */
vec4 czm_getWaterNoise(sampler2D normalMap, vec2 uv, float time, float angleInRadians)
{
    float cosAngle = cos(angleInRadians);
    float sinAngle = sin(angleInRadians);

    // time dependent sampling directions
    vec2 s0 = vec2(1.0/17.0, 0.0);
    vec2 s1 = vec2(-1.0/29.0, 0.0);
    vec2 s2 = vec2(1.0/101.0, 1.0/59.0);
    vec2 s3 = vec2(-1.0/109.0, -1.0/57.0);

    // rotate sampling direction by specified angle
    s0 = vec2((cosAngle * s0.x) - (sinAngle * s0.y), (sinAngle * s0.x) + (cosAngle * s0.y));
    s1 = vec2((cosAngle * s1.x) - (sinAngle * s1.y), (sinAngle * s1.x) + (cosAngle * s1.y));
    s2 = vec2((cosAngle * s2.x) - (sinAngle * s2.y), (sinAngle * s2.x) + (cosAngle * s2.y));
    s3 = vec2((cosAngle * s3.x) - (sinAngle * s3.y), (sinAngle * s3.x) + (cosAngle * s3.y));

    vec2 uv0 = (uv/103.0) + (time * s0);
    vec2 uv1 = uv/107.0 + (time * s1) + vec2(0.23);
    vec2 uv2 = uv/vec2(897.0, 983.0) + (time * s2) + vec2(0.51);
    vec2 uv3 = uv/vec2(991.0, 877.0) + (time * s3) + vec2(0.71);

    uv0 = fract(uv0);
    uv1 = fract(uv1);
    uv2 = fract(uv2);
    uv3 = fract(uv3);
    vec4 noise = (texture(normalMap, uv0)) +
                 (texture(normalMap, uv1)) +
                 (texture(normalMap, uv2)) +
                 (texture(normalMap, uv3));

    // average and scale to between -1 and 1
    return ((noise / 4.0) - 0.5) * 2.0;
}
`,oE=`/**
 * Adjusts the hue of a color.
 * 
 * @name czm_hue
 * @glslFunction
 * 
 * @param {vec3} rgb The color.
 * @param {float} adjustment The amount to adjust the hue of the color in radians.
 *
 * @returns {float} The color with the hue adjusted.
 *
 * @example
 * vec3 adjustHue = czm_hue(color, czm_pi); // The same as czm_hue(color, -czm_pi)
 */
vec3 czm_hue(vec3 rgb, float adjustment)
{
    const mat3 toYIQ = mat3(0.299,     0.587,     0.114,
                            0.595716, -0.274453, -0.321263,
                            0.211456, -0.522591,  0.311135);
    const mat3 toRGB = mat3(1.0,  0.9563,  0.6210,
                            1.0, -0.2721, -0.6474,
                            1.0, -1.107,   1.7046);
    
    vec3 yiq = toYIQ * rgb;
    float hue = atan(yiq.z, yiq.y) + adjustment;
    float chroma = sqrt(yiq.z * yiq.z + yiq.y * yiq.y);
    
    vec3 color = vec3(yiq.x, chroma * cos(hue), chroma * sin(hue));
    return toRGB * color;
}
`,iE=`/**
 * Converts a color in linear space to RGB space.
 *
 * @name czm_inverseGamma
 * @glslFunction
 *
 * @param {vec3} color The color in linear space.
 * @returns {vec3} The color in RGB space.
 */
vec3 czm_inverseGamma(vec3 color) {
    return pow(color, vec3(1.0 / czm_gamma));
}
`,rE=`/**
 * Determines if a time interval is empty.
 *
 * @name czm_isEmpty
 * @glslFunction 
 * 
 * @param {czm_raySegment} interval The interval to test.
 * 
 * @returns {bool} <code>true</code> if the time interval is empty; otherwise, <code>false</code>.
 *
 * @example
 * bool b0 = czm_isEmpty(czm_emptyRaySegment);      // true
 * bool b1 = czm_isEmpty(czm_raySegment(0.0, 1.0)); // false
 * bool b2 = czm_isEmpty(czm_raySegment(1.0, 1.0)); // false, contains 1.0.
 */
bool czm_isEmpty(czm_raySegment interval)
{
    return (interval.stop < 0.0);
}
`,aE=`/**
 * Determines if a time interval is empty.
 *
 * @name czm_isFull
 * @glslFunction 
 * 
 * @param {czm_raySegment} interval The interval to test.
 * 
 * @returns {bool} <code>true</code> if the time interval is empty; otherwise, <code>false</code>.
 *
 * @example
 * bool b0 = czm_isEmpty(czm_emptyRaySegment);      // true
 * bool b1 = czm_isEmpty(czm_raySegment(0.0, 1.0)); // false
 * bool b2 = czm_isEmpty(czm_raySegment(1.0, 1.0)); // false, contains 1.0.
 */
bool czm_isFull(czm_raySegment interval)
{
    return (interval.start == 0.0 && interval.stop == czm_infinity);
}
`,sE=`/**
 * Computes the fraction of a Web Wercator rectangle at which a given geodetic latitude is located.
 *
 * @name czm_latitudeToWebMercatorFraction
 * @glslFunction
 *
 * @param {float} latitude The geodetic latitude, in radians.
 * @param {float} southMercatorY The Web Mercator coordinate of the southern boundary of the rectangle.
 * @param {float} oneOverMercatorHeight The total height of the rectangle in Web Mercator coordinates.
 *
 * @returns {float} The fraction of the rectangle at which the latitude occurs.  If the latitude is the southern
 *          boundary of the rectangle, the return value will be zero.  If it is the northern boundary, the return
 *          value will be 1.0.  Latitudes in between are mapped according to the Web Mercator projection.
 */ 
float czm_latitudeToWebMercatorFraction(float latitude, float southMercatorY, float oneOverMercatorHeight)
{
    float sinLatitude = sin(latitude);
    float mercatorY = 0.5 * log((1.0 + sinLatitude) / (1.0 - sinLatitude));
    
    return (mercatorY - southMercatorY) * oneOverMercatorHeight;
}
`,cE=`/**
 * Computes distance from an point in 2D to a line in 2D.
 *
 * @name czm_lineDistance
 * @glslFunction
 *
 * param {vec2} point1 A point along the line.
 * param {vec2} point2 A point along the line.
 * param {vec2} point A point that may or may not be on the line.
 * returns {float} The distance from the point to the line.
 */
float czm_lineDistance(vec2 point1, vec2 point2, vec2 point) {
    return abs((point2.y - point1.y) * point.x - (point2.x - point1.x) * point.y + point2.x * point1.y - point2.y * point1.x) / distance(point2, point1);
}
`,lE=`/**
 * Converts a linear RGB color to an sRGB color.
 *
 * @param {vec3|vec4} linearIn The color in linear color space.
 * @returns {vec3|vec4} The color in sRGB color space. The vector type matches the input.
 */
vec3 czm_linearToSrgb(vec3 linearIn) 
{
    return pow(linearIn, vec3(1.0/2.2));
}

vec4 czm_linearToSrgb(vec4 linearIn) 
{
    vec3 srgbOut = pow(linearIn.rgb, vec3(1.0/2.2));
    return vec4(srgbOut, linearIn.a);
}
`,fE=`/**
 * Computes the luminance of a color. 
 *
 * @name czm_luminance
 * @glslFunction
 *
 * @param {vec3} rgb The color.
 * 
 * @returns {float} The luminance.
 *
 * @example
 * float light = czm_luminance(vec3(0.0)); // 0.0
 * float dark = czm_luminance(vec3(1.0));  // ~1.0 
 */
float czm_luminance(vec3 rgb)
{
    // Algorithm from Chapter 10 of Graphics Shaders.
    const vec3 W = vec3(0.2125, 0.7154, 0.0721);
    return dot(rgb, W);
}
`,uE=`/**
 * Find the maximum component of a vector.
 *
 * @name czm_maximumComponent
 * @glslFunction
 *
 * @param {vec2|vec3|vec4} v The input vector.
 * @returns {float} The value of the largest component.
 */
float czm_maximumComponent(vec2 v)
{
    return max(v.x, v.y);
}
float czm_maximumComponent(vec3 v)
{
    return max(max(v.x, v.y), v.z);
}
float czm_maximumComponent(vec4 v)
{
    return max(max(max(v.x, v.y), v.z), v.w);
}
`,hE=`/**
 * Computes the size of a pixel in meters at a distance from the eye.
 * <p>
 * Use this version when passing in a custom pixel ratio. For example, passing in 1.0 will return meters per native device pixel.
 * </p>
 * @name czm_metersPerPixel
 * @glslFunction
 *
 * @param {vec3} positionEC The position to get the meters per pixel in eye coordinates.
 * @param {float} pixelRatio The scaling factor from pixel space to coordinate space
 *
 * @returns {float} The meters per pixel at positionEC.
 */
float czm_metersPerPixel(vec4 positionEC, float pixelRatio)
{
    float width = czm_viewport.z;
    float height = czm_viewport.w;
    float pixelWidth;
    float pixelHeight;

    float top = czm_frustumPlanes.x;
    float bottom = czm_frustumPlanes.y;
    float left = czm_frustumPlanes.z;
    float right = czm_frustumPlanes.w;

    if (czm_sceneMode == czm_sceneMode2D || czm_orthographicIn3D == 1.0)
    {
        float frustumWidth = right - left;
        float frustumHeight = top - bottom;
        pixelWidth = frustumWidth / width;
        pixelHeight = frustumHeight / height;
    }
    else
    {
        float distanceToPixel = -positionEC.z;
        float inverseNear = 1.0 / czm_currentFrustum.x;
        float tanTheta = top * inverseNear;
        pixelHeight = 2.0 * distanceToPixel * tanTheta / height;
        tanTheta = right * inverseNear;
        pixelWidth = 2.0 * distanceToPixel * tanTheta / width;
    }

    return max(pixelWidth, pixelHeight) * pixelRatio;
}

/**
 * Computes the size of a pixel in meters at a distance from the eye.
 * <p>
 * Use this version when scaling by pixel ratio.
 * </p>
 * @name czm_metersPerPixel
 * @glslFunction
 *
 * @param {vec3} positionEC The position to get the meters per pixel in eye coordinates.
 *
 * @returns {float} The meters per pixel at positionEC.
 */
float czm_metersPerPixel(vec4 positionEC)
{
    return czm_metersPerPixel(positionEC, czm_pixelRatio);
}
`,dE=`/**
 * Transforms a position from model to window coordinates.  The transformation
 * from model to clip coordinates is done using {@link czm_modelViewProjection}.
 * The transform from normalized device coordinates to window coordinates is
 * done using {@link czm_viewportTransformation}, which assumes a depth range
 * of <code>near = 0</code> and <code>far = 1</code>.
 * <br /><br />
 * This transform is useful when there is a need to manipulate window coordinates
 * in a vertex shader as done by {@link BillboardCollection}.
 * <br /><br />
 * This function should not be confused with {@link czm_viewportOrthographic},
 * which is an orthographic projection matrix that transforms from window 
 * coordinates to clip coordinates.
 *
 * @name czm_modelToWindowCoordinates
 * @glslFunction
 *
 * @param {vec4} position The position in model coordinates to transform.
 *
 * @returns {vec4} The transformed position in window coordinates.
 *
 * @see czm_eyeToWindowCoordinates
 * @see czm_modelViewProjection
 * @see czm_viewportTransformation
 * @see czm_viewportOrthographic
 * @see BillboardCollection
 *
 * @example
 * vec4 positionWC = czm_modelToWindowCoordinates(positionMC);
 */
vec4 czm_modelToWindowCoordinates(vec4 position)
{
    vec4 positionEC = czm_modelView * position;
    vec4 q = czm_projection * positionEC;
    q.xyz /= q.w;                                                // normalized device coordinates
    q.xyz = (czm_viewportTransformation * vec4(q.xyz, 1.0)).xyz; // window coordinates
    return q;
}
`,mE=`/**
 * DOC_TBA
 *
 * @name czm_multiplyWithColorBalance
 * @glslFunction
 */
vec3 czm_multiplyWithColorBalance(vec3 left, vec3 right)
{
    // Algorithm from Chapter 10 of Graphics Shaders.
    const vec3 W = vec3(0.2125, 0.7154, 0.0721);
    
    vec3 target = left * right;
    float leftLuminance = dot(left, W);
    float rightLuminance = dot(right, W);
    float targetLuminance = dot(target, W);
    
    return ((leftLuminance + rightLuminance) / (2.0 * targetLuminance)) * target;
}
`,pE=`/**
 * Computes a value that scales with distance.  The scaling is clamped at the near and
 * far distances, and does not extrapolate.  This function works with the
 * {@link NearFarScalar} JavaScript class.
 *
 * @name czm_nearFarScalar
 * @glslFunction
 *
 * @param {vec4} nearFarScalar A vector with 4 components: Near distance (x), Near value (y), Far distance (z), Far value (w).
 * @param {float} cameraDistSq The square of the current distance from the camera.
 *
 * @returns {float} The value at this distance.
 */
float czm_nearFarScalar(vec4 nearFarScalar, float cameraDistSq)
{
    float valueAtMin = nearFarScalar.y;
    float valueAtMax = nearFarScalar.w;
    float nearDistanceSq = nearFarScalar.x * nearFarScalar.x;
    float farDistanceSq = nearFarScalar.z * nearFarScalar.z;

    float t = (cameraDistSq - nearDistanceSq) / (farDistanceSq - nearDistanceSq);

    t = pow(clamp(t, 0.0, 1.0), 0.2);

    return mix(valueAtMin, valueAtMax, t);
}
`,_E=` /**
  * Decodes a unit-length vector in 'oct' encoding to a normalized 3-component Cartesian vector.
  * The 'oct' encoding is described in "A Survey of Efficient Representations of Independent Unit Vectors",
  * Cigolle et al 2014: http://jcgt.org/published/0003/02/01/
  *
  * @name czm_octDecode
  * @param {vec2} encoded The oct-encoded, unit-length vector
  * @param {float} range The maximum value of the SNORM range. The encoded vector is stored in log2(rangeMax+1) bits.
  * @returns {vec3} The decoded and normalized vector
  */
  vec3 czm_octDecode(vec2 encoded, float range)
  {
      if (encoded.x == 0.0 && encoded.y == 0.0) {
          return vec3(0.0, 0.0, 0.0);
      }

     encoded = encoded / range * 2.0 - 1.0;
     vec3 v = vec3(encoded.x, encoded.y, 1.0 - abs(encoded.x) - abs(encoded.y));
     if (v.z < 0.0)
     {
         v.xy = (1.0 - abs(v.yx)) * czm_signNotZero(v.xy);
     }

     return normalize(v);
  }

/**
 * Decodes a unit-length vector in 'oct' encoding to a normalized 3-component Cartesian vector.
 * The 'oct' encoding is described in "A Survey of Efficient Representations of Independent Unit Vectors",
 * Cigolle et al 2014: http://jcgt.org/published/0003/02/01/
 *
 * @name czm_octDecode
 * @param {vec2} encoded The oct-encoded, unit-length vector
 * @returns {vec3} The decoded and normalized vector
 */
 vec3 czm_octDecode(vec2 encoded)
 {
    return czm_octDecode(encoded, 255.0);
 }

 /**
 * Decodes a unit-length vector in 'oct' encoding packed into a floating-point number to a normalized 3-component Cartesian vector.
 * The 'oct' encoding is described in "A Survey of Efficient Representations of Independent Unit Vectors",
 * Cigolle et al 2014: http://jcgt.org/published/0003/02/01/
 *
 * @name czm_octDecode
 * @param {float} encoded The oct-encoded, unit-length vector
 * @returns {vec3} The decoded and normalized vector
 */
 vec3 czm_octDecode(float encoded)
 {
    float temp = encoded / 256.0;
    float x = floor(temp);
    float y = (temp - x) * 256.0;
    return czm_octDecode(vec2(x, y));
 }

/**
 * Decodes three unit-length vectors in 'oct' encoding packed into two floating-point numbers to normalized 3-component Cartesian vectors.
 * The 'oct' encoding is described in "A Survey of Efficient Representations of Independent Unit Vectors",
 * Cigolle et al 2014: http://jcgt.org/published/0003/02/01/
 *
 * @name czm_octDecode
 * @param {vec2} encoded The packed oct-encoded, unit-length vectors.
 * @param {vec3} vector1 One decoded and normalized vector.
 * @param {vec3} vector2 One decoded and normalized vector.
 * @param {vec3} vector3 One decoded and normalized vector.
 */
  void czm_octDecode(vec2 encoded, out vec3 vector1, out vec3 vector2, out vec3 vector3)
 {
    float temp = encoded.x / 65536.0;
    float x = floor(temp);
    float encodedFloat1 = (temp - x) * 65536.0;

    temp = encoded.y / 65536.0;
    float y = floor(temp);
    float encodedFloat2 = (temp - y) * 65536.0;

    vector1 = czm_octDecode(encodedFloat1);
    vector2 = czm_octDecode(encodedFloat2);
    vector3 = czm_octDecode(vec2(x, y));
 }

`,gE=`/**
 * Packs a depth value into a vec4 that can be represented by unsigned bytes.
 *
 * @name czm_packDepth
 * @glslFunction
 *
 * @param {float} depth The floating-point depth.
 * @returns {vec4} The packed depth.
 */
vec4 czm_packDepth(float depth)
{
    // See Aras Pranckevičius' post Encoding Floats to RGBA
    // http://aras-p.info/blog/2009/07/30/encoding-floats-to-rgba-the-final/
    vec4 enc = vec4(1.0, 255.0, 65025.0, 16581375.0) * depth;
    enc = fract(enc);
    enc -= enc.yzww * vec4(1.0 / 255.0, 1.0 / 255.0, 1.0 / 255.0, 0.0);
    return enc;
}
`,yE=`vec3 lambertianDiffuse(vec3 diffuseColor)
{
    return diffuseColor / czm_pi;
}

vec3 fresnelSchlick2(vec3 f0, vec3 f90, float VdotH)
{
    float versine = 1.0 - VdotH;
    // pow(versine, 5.0) is slow. See https://stackoverflow.com/a/68793086/10082269
    float versineSquared = versine * versine;
    return f0 + (f90 - f0) * versineSquared * versineSquared * versine;
}

#ifdef USE_ANISOTROPY
/**
 * @param {float} bitangentRoughness Material roughness (along the anisotropy bitangent)
 * @param {float} tangentialRoughness Anisotropic roughness (along the anisotropy tangent)
 * @param {vec3} lightDirection The direction from the fragment to the light source, transformed to tangent-bitangent-normal coordinates
 * @param {vec3} viewDirection The direction from the fragment to the camera, transformed to tangent-bitangent-normal coordinates
 */
float smithVisibilityGGX_anisotropic(float bitangentRoughness, float tangentialRoughness, vec3 lightDirection, vec3 viewDirection)
{
    vec3 roughnessScale = vec3(tangentialRoughness, bitangentRoughness, 1.0);
    float GGXV = lightDirection.z * length(roughnessScale * viewDirection);
    float GGXL = viewDirection.z * length(roughnessScale * lightDirection);
    float v = 0.5 / (GGXV + GGXL);
    return clamp(v, 0.0, 1.0);
}

/**
 * @param {float} bitangentRoughness Material roughness (along the anisotropy bitangent)
 * @param {float} tangentialRoughness Anisotropic roughness (along the anisotropy tangent)
 * @param {vec3} halfwayDirection The unit vector halfway between light and view directions, transformed to tangent-bitangent-normal coordinates
 */
float GGX_anisotropic(float bitangentRoughness, float tangentialRoughness, vec3 halfwayDirection)
{
    float roughnessSquared = bitangentRoughness * tangentialRoughness;
    vec3 f = halfwayDirection * vec3(bitangentRoughness, tangentialRoughness, roughnessSquared);
    float w2 = roughnessSquared / dot(f, f);
    return roughnessSquared * w2 * w2 / czm_pi;
}
#endif

/**
 * Estimate the geometric self-shadowing of the microfacets in a surface,
 * using the Smith Joint GGX visibility function.
 * Note: Vis = G / (4 * NdotL * NdotV)
 * see Eric Heitz. 2014. Understanding the Masking-Shadowing Function in Microfacet-Based BRDFs. Journal of Computer Graphics Techniques, 3
 * see Real-Time Rendering. Page 331 to 336.
 * see https://google.github.io/filament/Filament.md.html#materialsystem/specularbrdf/geometricshadowing(specularg)
 *
 * @param {float} alphaRoughness The roughness of the material, expressed as the square of perceptual roughness.
 * @param {float} NdotL The cosine of the angle between the surface normal and the direction to the light source.
 * @param {float} NdotV The cosine of the angle between the surface normal and the direction to the camera.
 */
float smithVisibilityGGX(float alphaRoughness, float NdotL, float NdotV)
{
    float alphaRoughnessSq = alphaRoughness * alphaRoughness;

    float GGXV = NdotL * sqrt(NdotV * NdotV * (1.0 - alphaRoughnessSq) + alphaRoughnessSq);
    float GGXL = NdotV * sqrt(NdotL * NdotL * (1.0 - alphaRoughnessSq) + alphaRoughnessSq);

    float GGX = GGXV + GGXL;
    if (GGX > 0.0)
    {
        return 0.5 / GGX;
    }
    return 0.0;
}

/**
 * Estimate the fraction of the microfacets in a surface that are aligned with 
 * the halfway vector, which is aligned halfway between the directions from
 * the fragment to the camera and from the fragment to the light source.
 *
 * @param {float} alphaRoughness The roughness of the material, expressed as the square of perceptual roughness.
 * @param {float} NdotH The cosine of the angle between the surface normal and the halfway vector.
 * @return {float} The fraction of microfacets aligned to the halfway vector.
 */
float GGX(float alphaRoughness, float NdotH)
{
    float alphaRoughnessSquared = alphaRoughness * alphaRoughness;
    float f = (NdotH * alphaRoughnessSquared - NdotH) * NdotH + 1.0;
    return alphaRoughnessSquared / (czm_pi * f * f);
}

/**
 * Compute the strength of the specular reflection due to direct lighting.
 *
 * @param {vec3} normal The surface normal.
 * @param {vec3} lightDirection The unit vector pointing from the fragment to the light source.
 * @param {vec3} viewDirection The unit vector pointing from the fragment to the camera.
 * @param {vec3} halfwayDirection The unit vector pointing from the fragment to halfway between the light source and the camera.
 * @param {float} alphaRoughness The roughness of the material, expressed as the square of perceptual roughness.
 * @return {float} The strength of the specular reflection.
 */
float computeDirectSpecularStrength(vec3 normal, vec3 lightDirection, vec3 viewDirection, vec3 halfwayDirection, float alphaRoughness)
{
    float NdotL = clamp(dot(normal, lightDirection), 0.0, 1.0);
    float NdotV = clamp(dot(normal, viewDirection), 0.0, 1.0);
    float G = smithVisibilityGGX(alphaRoughness, NdotL, NdotV);
    float NdotH = clamp(dot(normal, halfwayDirection), 0.0, 1.0);
    float D = GGX(alphaRoughness, NdotH);
    return G * D;
}

/**
 * Compute the diffuse and specular contributions using physically based
 * rendering. This function only handles direct lighting.
 * <p>
 * This function only handles the lighting calculations. Metallic/roughness
 * and specular/glossy must be handled separately. See {@MaterialStageFS}
 * </p>
 *
 * @name czm_pbrLighting
 * @glslFunction
 *
 * @param {vec3} viewDirectionEC Unit vector pointing from the fragment to the eye position
 * @param {vec3} normalEC The surface normal in eye coordinates
 * @param {vec3} lightDirectionEC Unit vector pointing to the light source in eye coordinates.
 * @param {czm_modelMaterial} The material properties.
 * @return {vec3} The computed HDR color
 */
vec3 czm_pbrLighting(vec3 viewDirectionEC, vec3 normalEC, vec3 lightDirectionEC, czm_modelMaterial material)
{
    vec3 halfwayDirectionEC = normalize(viewDirectionEC + lightDirectionEC);
    float VdotH = clamp(dot(viewDirectionEC, halfwayDirectionEC), 0.0, 1.0);
    float NdotL = clamp(dot(normalEC, lightDirectionEC), 0.001, 1.0);

    vec3 f0 = material.specular;
    float reflectance = czm_maximumComponent(f0);
    // Typical dielectrics will have reflectance 0.04, so f90 will be 1.0.
    // In this case, at grazing angle, all incident energy is reflected.
    vec3 f90 = vec3(clamp(reflectance * 25.0, 0.0, 1.0));
    vec3 F = fresnelSchlick2(f0, f90, VdotH);

    #if defined(USE_SPECULAR)
        F *= material.specularWeight;
    #endif

    float alphaRoughness = material.roughness * material.roughness;
    #ifdef USE_ANISOTROPY
        mat3 tbn = mat3(material.anisotropicT, material.anisotropicB, normalEC);
        vec3 lightDirection = lightDirectionEC * tbn;
        vec3 viewDirection = viewDirectionEC * tbn;
        vec3 halfwayDirection = halfwayDirectionEC * tbn;
        float anisotropyStrength = material.anisotropyStrength;
        float tangentialRoughness = mix(alphaRoughness, 1.0, anisotropyStrength * anisotropyStrength);
        float bitangentRoughness = clamp(alphaRoughness, 0.001, 1.0);
        float G = smithVisibilityGGX_anisotropic(bitangentRoughness, tangentialRoughness, lightDirection, viewDirection);
        float D = GGX_anisotropic(bitangentRoughness, tangentialRoughness, halfwayDirection);
        vec3 specularContribution = F * G * D;
    #else
        float specularStrength = computeDirectSpecularStrength(normalEC, lightDirectionEC, viewDirectionEC, halfwayDirectionEC, alphaRoughness);
        vec3 specularContribution = F * specularStrength;
    #endif

    vec3 diffuseColor = material.diffuse;
    // F here represents the specular contribution
    vec3 diffuseContribution = (1.0 - F) * lambertianDiffuse(diffuseColor);

    // Lo = (diffuse + specular) * Li * NdotL
    return (diffuseContribution + specularContribution) * NdotL;
}
`,bE=`// KhronosGroup https://github.com/KhronosGroup/ToneMapping/tree/main/PBR_Neutral

// Input color is non-negative and resides in the Linear Rec. 709 color space.
// Output color is also Linear Rec. 709, but in the [0, 1] range.

vec3 czm_pbrNeutralTonemapping(vec3 color) {
    const float startCompression = 0.8 - 0.04;
    const float desaturation = 0.15;

    float x = min(color.r, min(color.g, color.b));
    float offset = czm_branchFreeTernary(x < 0.08, x - 6.25 * x * x, 0.04);
    color -= offset;

    float peak = max(color.r, max(color.g, color.b));
    if (peak < startCompression) return color;

    const float d = 1.0 - startCompression;
    float newPeak = 1.0 - d * d / (peak + d - startCompression);
    color *= newPeak / peak;

    float g = 1.0 - 1.0 / (desaturation * (peak - newPeak) + 1.0);
    return mix(color, newPeak * vec3(1.0, 1.0, 1.0), g);
}
`,TE=`float czm_private_getLambertDiffuseOfMaterial(vec3 lightDirectionEC, czm_material material)
{
    return czm_getLambertDiffuse(lightDirectionEC, material.normal);
}

float czm_private_getSpecularOfMaterial(vec3 lightDirectionEC, vec3 toEyeEC, czm_material material)
{
    return czm_getSpecular(lightDirectionEC, toEyeEC, material.normal, material.shininess);
}

/**
 * Computes a color using the Phong lighting model.
 *
 * @name czm_phong
 * @glslFunction
 *
 * @param {vec3} toEye A normalized vector from the fragment to the eye in eye coordinates.
 * @param {czm_material} material The fragment's material.
 *
 * @returns {vec4} The computed color.
 *
 * @example
 * vec3 positionToEyeEC = // ...
 * czm_material material = // ...
 * vec3 lightDirectionEC = // ...
 * out_FragColor = czm_phong(normalize(positionToEyeEC), material, lightDirectionEC);
 *
 * @see czm_getMaterial
 */
vec4 czm_phong(vec3 toEye, czm_material material, vec3 lightDirectionEC)
{
    // Diffuse from directional light sources at eye (for top-down)
    float diffuse = czm_private_getLambertDiffuseOfMaterial(vec3(0.0, 0.0, 1.0), material);
    if (czm_sceneMode == czm_sceneMode3D) {
        // (and horizon views in 3D)
        diffuse += czm_private_getLambertDiffuseOfMaterial(vec3(0.0, 1.0, 0.0), material);
    }

    float specular = czm_private_getSpecularOfMaterial(lightDirectionEC, toEye, material);

    // Temporary workaround for adding ambient.
    vec3 materialDiffuse = material.diffuse * 0.5;

    vec3 ambient = materialDiffuse;
    vec3 color = ambient + material.emission;
    color += materialDiffuse * diffuse * czm_lightColor;
    color += material.specular * specular * czm_lightColor;

    return vec4(color, material.alpha);
}

vec4 czm_private_phong(vec3 toEye, czm_material material, vec3 lightDirectionEC)
{
    float diffuse = czm_private_getLambertDiffuseOfMaterial(lightDirectionEC, material);
    float specular = czm_private_getSpecularOfMaterial(lightDirectionEC, toEye, material);

    vec3 ambient = vec3(0.0);
    vec3 color = ambient + material.emission;
    color += material.diffuse * diffuse * czm_lightColor;
    color += material.specular * specular * czm_lightColor;

    return vec4(color, material.alpha);
}
`,EE=`/**
 * Computes distance from a point to a plane.
 *
 * @name czm_planeDistance
 * @glslFunction
 *
 * param {vec4} plane A Plane in Hessian Normal Form. See Plane.js
 * param {vec3} point A point in the same space as the plane.
 * returns {float} The distance from the point to the plane.
 */
float czm_planeDistance(vec4 plane, vec3 point) {
    return (dot(plane.xyz, point) + plane.w);
}

/**
 * Computes distance from a point to a plane.
 *
 * @name czm_planeDistance
 * @glslFunction
 *
 * param {vec3} planeNormal Normal for a plane in Hessian Normal Form. See Plane.js
 * param {float} planeDistance Distance for a plane in Hessian Normal form. See Plane.js
 * param {vec3} point A point in the same space as the plane.
 * returns {float} The distance from the point to the plane.
 */
float czm_planeDistance(vec3 planeNormal, float planeDistance, vec3 point) {
    return (dot(planeNormal, point) + planeDistance);
}
`,wE=`/**
 * Computes the point along a ray at the given time.  <code>time</code> can be positive, negative, or zero.
 *
 * @name czm_pointAlongRay
 * @glslFunction
 *
 * @param {czm_ray} ray The ray to compute the point along.
 * @param {float} time The time along the ray.
 * 
 * @returns {vec3} The point along the ray at the given time.
 * 
 * @example
 * czm_ray ray = czm_ray(vec3(0.0), vec3(1.0, 0.0, 0.0)); // origin, direction
 * vec3 v = czm_pointAlongRay(ray, 2.0); // (2.0, 0.0, 0.0)
 */
vec3 czm_pointAlongRay(czm_ray ray, float time)
{
    return ray.origin + (time * ray.direction);
}
`,AE=`/**
 * DOC_TBA
 *
 * @name czm_rayEllipsoidIntersectionInterval
 * @glslFunction
 */
czm_raySegment czm_rayEllipsoidIntersectionInterval(czm_ray ray, vec3 ellipsoid_center, vec3 ellipsoid_inverseRadii)
{
   // ray and ellipsoid center in eye coordinates.  radii in model coordinates.
    vec3 q = ellipsoid_inverseRadii * (czm_inverseModelView * vec4(ray.origin, 1.0)).xyz;
    vec3 w = ellipsoid_inverseRadii * (czm_inverseModelView * vec4(ray.direction, 0.0)).xyz;

    q = q - ellipsoid_inverseRadii * (czm_inverseModelView * vec4(ellipsoid_center, 1.0)).xyz;

    float q2 = dot(q, q);
    float qw = dot(q, w);

    if (q2 > 1.0) // Outside ellipsoid.
    {
        if (qw >= 0.0) // Looking outward or tangent (0 intersections).
        {
            return czm_emptyRaySegment;
        }
        else // qw < 0.0.
        {
            float qw2 = qw * qw;
            float difference = q2 - 1.0; // Positively valued.
            float w2 = dot(w, w);
            float product = w2 * difference;

            if (qw2 < product) // Imaginary roots (0 intersections).
            {
                return czm_emptyRaySegment;
            }
            else if (qw2 > product) // Distinct roots (2 intersections).
            {
                float discriminant = qw * qw - product;
                float temp = -qw + sqrt(discriminant); // Avoid cancellation.
                float root0 = temp / w2;
                float root1 = difference / temp;
                if (root0 < root1)
                {
                    czm_raySegment i = czm_raySegment(root0, root1);
                    return i;
                }
                else
                {
                    czm_raySegment i = czm_raySegment(root1, root0);
                    return i;
                }
            }
            else // qw2 == product.  Repeated roots (2 intersections).
            {
                float root = sqrt(difference / w2);
                czm_raySegment i = czm_raySegment(root, root);
                return i;
            }
        }
    }
    else if (q2 < 1.0) // Inside ellipsoid (2 intersections).
    {
        float difference = q2 - 1.0; // Negatively valued.
        float w2 = dot(w, w);
        float product = w2 * difference; // Negatively valued.
        float discriminant = qw * qw - product;
        float temp = -qw + sqrt(discriminant); // Positively valued.
        czm_raySegment i = czm_raySegment(0.0, temp / w2);
        return i;
    }
    else // q2 == 1.0. On ellipsoid.
    {
        if (qw < 0.0) // Looking inward.
        {
            float w2 = dot(w, w);
            czm_raySegment i = czm_raySegment(0.0, -qw / w2);
            return i;
        }
        else // qw >= 0.0.  Looking outward or tangent.
        {
            return czm_emptyRaySegment;
        }
    }
}
`,OE=`/**
 * Compute the intersection interval of a ray with a sphere.
 *
 * @name czm_raySphereIntersectionInterval
 * @glslFunction
 *
 * @param {czm_ray} ray The ray.
 * @param {vec3} center The center of the sphere.
 * @param {float} radius The radius of the sphere.
 * @return {czm_raySegment} The intersection interval of the ray with the sphere.
 */
czm_raySegment czm_raySphereIntersectionInterval(czm_ray ray, vec3 center, float radius)
{
    vec3 o = ray.origin;
    vec3 d = ray.direction;

    vec3 oc = o - center;

    float a = dot(d, d);
    float b = 2.0 * dot(d, oc);
    float c = dot(oc, oc) - (radius * radius);

    float det = (b * b) - (4.0 * a * c);

    if (det < 0.0) {
        return czm_emptyRaySegment;
    }

    float sqrtDet = sqrt(det);

    float t0 = (-b - sqrtDet) / (2.0 * a);
    float t1 = (-b + sqrtDet) / (2.0 * a);

    czm_raySegment result = czm_raySegment(t0, t1);
    return result;
}
`,SE=`float czm_readDepth(sampler2D depthTexture, vec2 texCoords)
{
    return czm_reverseLogDepth(texture(depthTexture, texCoords).r);
}
`,xE=`/**
 * Reads a value previously transformed with {@link czm_writeNonPerspective}
 * by dividing it by \`w\`, the value used in the perspective divide.
 * This function is intended to be called in a fragment shader to access a
 * \`varying\` that should not be subject to perspective interpolation.
 * For example, screen-space texture coordinates. The value should have been
 * previously written in the vertex shader with a call to
 * {@link czm_writeNonPerspective}.
 *
 * @name czm_readNonPerspective
 * @glslFunction
 *
 * @param {float|vec2|vec3|vec4} value The non-perspective value to be read.
 * @param {float} oneOverW One over the perspective divide value, \`w\`. Usually this is simply \`gl_FragCoord.w\`.
 * @returns {float|vec2|vec3|vec4} The usable value.
 */
float czm_readNonPerspective(float value, float oneOverW) {
    return value * oneOverW;
}

vec2 czm_readNonPerspective(vec2 value, float oneOverW) {
    return value * oneOverW;
}

vec3 czm_readNonPerspective(vec3 value, float oneOverW) {
    return value * oneOverW;
}

vec4 czm_readNonPerspective(vec4 value, float oneOverW) {
    return value * oneOverW;
}
`,CE=`float czm_reverseLogDepth(float logZ)
{
#ifdef LOG_DEPTH
    float near = czm_currentFrustum.x;
    float far = czm_currentFrustum.y;
    float log2Depth = logZ * czm_log2FarDepthFromNearPlusOne;
    float depthFromNear = exp2(log2Depth) - 1.0;
    return far * (1.0 - near / (depthFromNear + near)) / (far - near);
#endif
    return logZ;
}
`,vE=`/**
 * Round a floating point value. This function exists because round() doesn't
 * exist in GLSL 1.00. 
 *
 * @param {float|vec2|vec3|vec4} value The value to round
 * @param {float|vec2|vec3|vec3} The rounded value. The type matches the input.
 */
float czm_round(float value) {
  return floor(value + 0.5);
}

vec2 czm_round(vec2 value) {
  return floor(value + 0.5);
}

vec3 czm_round(vec3 value) {
  return floor(value + 0.5);
}

vec4 czm_round(vec4 value) {
  return floor(value + 0.5);
}
`,RE=`/**
 * Adjusts the saturation of a color.
 * 
 * @name czm_saturation
 * @glslFunction
 * 
 * @param {vec3} rgb The color.
 * @param {float} adjustment The amount to adjust the saturation of the color.
 *
 * @returns {float} The color with the saturation adjusted.
 *
 * @example
 * vec3 greyScale = czm_saturation(color, 0.0);
 * vec3 doubleSaturation = czm_saturation(color, 2.0);
 */
vec3 czm_saturation(vec3 rgb, float adjustment)
{
    // Algorithm from Chapter 16 of OpenGL Shading Language
    const vec3 W = vec3(0.2125, 0.7154, 0.0721);
    vec3 intensity = vec3(dot(rgb, W));
    return mix(intensity, rgb, adjustment);
}
`,zE=`
float czm_sampleShadowMap(highp samplerCube shadowMap, vec3 d)
{
    return czm_unpackDepth(czm_textureCube(shadowMap, d));
}

float czm_sampleShadowMap(highp sampler2D shadowMap, vec2 uv)
{
#ifdef USE_SHADOW_DEPTH_TEXTURE
    return texture(shadowMap, uv).r;
#else
    return czm_unpackDepth(texture(shadowMap, uv));
#endif
}

float czm_shadowDepthCompare(samplerCube shadowMap, vec3 uv, float depth)
{
    return step(depth, czm_sampleShadowMap(shadowMap, uv));
}

float czm_shadowDepthCompare(sampler2D shadowMap, vec2 uv, float depth)
{
    return step(depth, czm_sampleShadowMap(shadowMap, uv));
}
`,IE=`
float czm_private_shadowVisibility(float visibility, float nDotL, float normalShadingSmooth, float darkness)
{
#ifdef USE_NORMAL_SHADING
#ifdef USE_NORMAL_SHADING_SMOOTH
    float strength = clamp(nDotL / normalShadingSmooth, 0.0, 1.0);
#else
    float strength = step(0.0, nDotL);
#endif
    visibility *= strength;
#endif

    visibility = max(visibility, darkness);
    return visibility;
}

#ifdef USE_CUBE_MAP_SHADOW
float czm_shadowVisibility(samplerCube shadowMap, czm_shadowParameters shadowParameters)
{
    float depthBias = shadowParameters.depthBias;
    float depth = shadowParameters.depth;
    float nDotL = shadowParameters.nDotL;
    float normalShadingSmooth = shadowParameters.normalShadingSmooth;
    float darkness = shadowParameters.darkness;
    vec3 uvw = shadowParameters.texCoords;

    depth -= depthBias;
    float visibility = czm_shadowDepthCompare(shadowMap, uvw, depth);
    return czm_private_shadowVisibility(visibility, nDotL, normalShadingSmooth, darkness);
}
#else
float czm_shadowVisibility(sampler2D shadowMap, czm_shadowParameters shadowParameters)
{
    float depthBias = shadowParameters.depthBias;
    float depth = shadowParameters.depth;
    float nDotL = shadowParameters.nDotL;
    float normalShadingSmooth = shadowParameters.normalShadingSmooth;
    float darkness = shadowParameters.darkness;
    vec2 uv = shadowParameters.texCoords;

    depth -= depthBias;
#ifdef USE_SOFT_SHADOWS
    vec2 texelStepSize = shadowParameters.texelStepSize;
    float radius = 1.0;
    float dx0 = -texelStepSize.x * radius;
    float dy0 = -texelStepSize.y * radius;
    float dx1 = texelStepSize.x * radius;
    float dy1 = texelStepSize.y * radius;
    float visibility = (
        czm_shadowDepthCompare(shadowMap, uv, depth) +
        czm_shadowDepthCompare(shadowMap, uv + vec2(dx0, dy0), depth) +
        czm_shadowDepthCompare(shadowMap, uv + vec2(0.0, dy0), depth) +
        czm_shadowDepthCompare(shadowMap, uv + vec2(dx1, dy0), depth) +
        czm_shadowDepthCompare(shadowMap, uv + vec2(dx0, 0.0), depth) +
        czm_shadowDepthCompare(shadowMap, uv + vec2(dx1, 0.0), depth) +
        czm_shadowDepthCompare(shadowMap, uv + vec2(dx0, dy1), depth) +
        czm_shadowDepthCompare(shadowMap, uv + vec2(0.0, dy1), depth) +
        czm_shadowDepthCompare(shadowMap, uv + vec2(dx1, dy1), depth)
    ) * (1.0 / 9.0);
#else
    float visibility = czm_shadowDepthCompare(shadowMap, uv, depth);
#endif

    return czm_private_shadowVisibility(visibility, nDotL, normalShadingSmooth, darkness);
}
#endif
`,PE=`/**
 * Returns 1.0 if the given value is positive or zero, and -1.0 if it is negative.  This is similar to the GLSL
 * built-in function <code>sign</code> except that returns 1.0 instead of 0.0 when the input value is 0.0.
 * 
 * @name czm_signNotZero
 * @glslFunction
 *
 * @param {} value The value for which to determine the sign.
 * @returns {} 1.0 if the value is positive or zero, -1.0 if the value is negative.
 */
float czm_signNotZero(float value)
{
    return value >= 0.0 ? 1.0 : -1.0;
}

vec2 czm_signNotZero(vec2 value)
{
    return vec2(czm_signNotZero(value.x), czm_signNotZero(value.y));
}

vec3 czm_signNotZero(vec3 value)
{
    return vec3(czm_signNotZero(value.x), czm_signNotZero(value.y), czm_signNotZero(value.z));
}

vec4 czm_signNotZero(vec4 value)
{
    return vec4(czm_signNotZero(value.x), czm_signNotZero(value.y), czm_signNotZero(value.z), czm_signNotZero(value.w));
}
`,ME=`/**
 * Computes a color from the third order spherical harmonic coefficients and a normalized direction vector.
 * <p>
 * The order of the coefficients is [L00, L1_1, L10, L11, L2_2, L2_1, L20, L21, L22].
 * </p>
 *
 * @name czm_sphericalHarmonics
 * @glslFunction
 *
 * @param {vec3} normal The normalized direction.
 * @param {vec3[9]} coefficients The third order spherical harmonic coefficients.
 * @returns {vec3} The color at the direction.
 *
 * @see https://graphics.stanford.edu/papers/envmap/envmap.pdf
 */
vec3 czm_sphericalHarmonics(vec3 normal, vec3 coefficients[9])
{
    vec3 L00 = coefficients[0];
    vec3 L1_1 = coefficients[1];
    vec3 L10 = coefficients[2];
    vec3 L11 = coefficients[3];
    vec3 L2_2 = coefficients[4];
    vec3 L2_1 = coefficients[5];
    vec3 L20 = coefficients[6];
    vec3 L21 = coefficients[7];
    vec3 L22 = coefficients[8];

    float x = normal.x;
    float y = normal.y;
    float z = normal.z;

    vec3 L =
          L00
        + L1_1 * y
        + L10 * z
        + L11 * x
        + L2_2 * (y * x)
        + L2_1 * (y * z)
        + L20 * (3.0 * z * z - 1.0)
        + L21 * (z * x)
        + L22 * (x * x - y * y);
        
    return max(L, vec3(0.0));
}
`,NE=`/**
 * Converts an sRGB color to a linear RGB color.
 *
 * @param {vec3|vec4} srgbIn The color in sRGB space
 * @returns {vec3|vec4} The color in linear color space. The vector type matches the input.
 */
vec3 czm_srgbToLinear(vec3 srgbIn)
{
    return pow(srgbIn, vec3(2.2));
}

vec4 czm_srgbToLinear(vec4 srgbIn) 
{
    vec3 linearOut = pow(srgbIn.rgb, vec3(2.2));
    return vec4(linearOut, srgbIn.a);
}
`,DE=`/**
 * Creates a matrix that transforms vectors from tangent space to eye space.
 *
 * @name czm_tangentToEyeSpaceMatrix
 * @glslFunction
 *
 * @param {vec3} normalEC The normal vector in eye coordinates.
 * @param {vec3} tangentEC The tangent vector in eye coordinates.
 * @param {vec3} bitangentEC The bitangent vector in eye coordinates.
 *
 * @returns {mat3} The matrix that transforms from tangent space to eye space.
 *
 * @example
 * mat3 tangentToEye = czm_tangentToEyeSpaceMatrix(normalEC, tangentEC, bitangentEC);
 * vec3 normal = tangentToEye * texture(normalMap, st).xyz;
 */
mat3 czm_tangentToEyeSpaceMatrix(vec3 normalEC, vec3 tangentEC, vec3 bitangentEC)
{
    vec3 normal = normalize(normalEC);
    vec3 tangent = normalize(tangentEC);
    vec3 bitangent = normalize(bitangentEC);
    return mat3(tangent.x  , tangent.y  , tangent.z,
                bitangent.x, bitangent.y, bitangent.z,
                normal.x   , normal.y   , normal.z);
}
`,LE=`/**
 * A wrapper around the texture (WebGL2) / textureCube (WebGL1)
 * function to allow for WebGL 1 support.
 * 
 * @name czm_textureCube
 * @glslFunction
 *
 * @param {samplerCube} sampler The sampler.
 * @param {vec3} p The coordinate at which to sample the texture.
 */
vec4 czm_textureCube(samplerCube sampler, vec3 p) {
#if __VERSION__ == 300
    return texture(sampler, p);
#else
    return textureCube(sampler, p);
#endif
}

/**
 * A wrapper around the textureLod (WebGL2) / textureCube (WebGL1)
 * function to allow for WebGL 1 support in fragment shaders.
 *
 * @name czm_textureCubeLod
 * @glslFunction
 *
 * @param {samplerCube} sampler The sampler.
 * @param {vec3} p The coordinate at which to sample the texture.
 * @param {float} lod The mipmap level from which to sample.
 */
vec4 czm_textureCube(samplerCube sampler, vec3 p, float lod) {
#if __VERSION__ == 300
    return textureLod(sampler, p, lod);
#elif defined(GL_EXT_shader_texture_lod)
    return textureCubeLodEXT(sampler, p, lod);
#endif
}`,FE=`/**
 * Transforms a plane.
 * 
 * @name czm_transformPlane
 * @glslFunction
 *
 * @param {vec4} plane The plane in Hessian Normal Form.
 * @param {mat4} transform The inverse-transpose of a transformation matrix.
 */
vec4 czm_transformPlane(vec4 plane, mat4 transform) {
    vec4 transformedPlane = transform * plane;
    // Convert the transformed plane to Hessian Normal Form
    float normalMagnitude = length(transformedPlane.xyz);
    return transformedPlane / normalMagnitude;
}
`,BE=`/**
 * Translates a position (or any <code>vec3</code>) that was encoded with {@link EncodedCartesian3},
 * and then provided to the shader as separate <code>high</code> and <code>low</code> bits to
 * be relative to the eye.  As shown in the example, the position can then be transformed in eye
 * or clip coordinates using {@link czm_modelViewRelativeToEye} or {@link czm_modelViewProjectionRelativeToEye},
 * respectively.
 * <p>
 * This technique, called GPU RTE, eliminates jittering artifacts when using large coordinates as
 * described in {@link http://help.agi.com/AGIComponents/html/BlogPrecisionsPrecisions.htm|Precisions, Precisions}.
 * </p>
 *
 * @name czm_translateRelativeToEye
 * @glslFunction
 *
 * @param {vec3} high The position's high bits.
 * @param {vec3} low The position's low bits.
 * @returns {vec3} The position translated to be relative to the camera's position.
 *
 * @example
 * in vec3 positionHigh;
 * in vec3 positionLow;
 *
 * void main()
 * {
 *   vec4 p = czm_translateRelativeToEye(positionHigh, positionLow);
 *   gl_Position = czm_modelViewProjectionRelativeToEye * p;
 * }
 *
 * @see czm_modelViewRelativeToEye
 * @see czm_modelViewProjectionRelativeToEye
 * @see czm_computePosition
 * @see EncodedCartesian3
 */
vec4 czm_translateRelativeToEye(vec3 high, vec3 low)
{
    vec3 highDifference = high - czm_encodedCameraPositionMCHigh;
    // This check handles the case when NaN values have gotten into \`highDifference\`.
    // Such a thing could happen on devices running iOS.
    if (length(highDifference) == 0.0) {  
        highDifference = vec3(0);  
    }
    vec3 lowDifference = low - czm_encodedCameraPositionMCLow;

    return vec4(highDifference + lowDifference, 1.0);
}
`,UE=`/**
 * @private
 */
vec4 czm_translucentPhong(vec3 toEye, czm_material material, vec3 lightDirectionEC)
{
    // Diffuse from directional light sources at eye (for top-down and horizon views)
    float diffuse = czm_getLambertDiffuse(vec3(0.0, 0.0, 1.0), material.normal);

    if (czm_sceneMode == czm_sceneMode3D) {
        // (and horizon views in 3D)
        diffuse += czm_getLambertDiffuse(vec3(0.0, 1.0, 0.0), material.normal);
    }

    diffuse = clamp(diffuse, 0.0, 1.0);

    float specular = czm_getSpecular(lightDirectionEC, toEye, material.normal, material.shininess);

    // Temporary workaround for adding ambient.
    vec3 materialDiffuse = material.diffuse * 0.5;

    vec3 ambient = materialDiffuse;
    vec3 color = ambient + material.emission;
    color += materialDiffuse * diffuse * czm_lightColor;
    color += material.specular * specular * czm_lightColor;

    return vec4(color, material.alpha);
}
`,GE=`/**
 * Returns the transpose of the matrix.  The input <code>matrix</code> can be
 * a <code>mat2</code>, <code>mat3</code>, or <code>mat4</code>.
 *
 * @name czm_transpose
 * @glslFunction
 *
 * @param {} matrix The matrix to transpose.
 *
 * @returns {} The transposed matrix.
 *
 * @example
 * // GLSL declarations
 * mat2 czm_transpose(mat2 matrix);
 * mat3 czm_transpose(mat3 matrix);
 * mat4 czm_transpose(mat4 matrix);
 *
 * // Transpose a 3x3 rotation matrix to find its inverse.
 * mat3 eastNorthUpToEye = czm_eastNorthUpToEyeCoordinates(
 *     positionMC, normalEC);
 * mat3 eyeToEastNorthUp = czm_transpose(eastNorthUpToEye);
 */
mat2 czm_transpose(mat2 matrix)
{
    return mat2(
        matrix[0][0], matrix[1][0],
        matrix[0][1], matrix[1][1]);
}

mat3 czm_transpose(mat3 matrix)
{
    return mat3(
        matrix[0][0], matrix[1][0], matrix[2][0],
        matrix[0][1], matrix[1][1], matrix[2][1],
        matrix[0][2], matrix[1][2], matrix[2][2]);
}

mat4 czm_transpose(mat4 matrix)
{
    return mat4(
        matrix[0][0], matrix[1][0], matrix[2][0], matrix[3][0],
        matrix[0][1], matrix[1][1], matrix[2][1], matrix[3][1],
        matrix[0][2], matrix[1][2], matrix[2][2], matrix[3][2],
        matrix[0][3], matrix[1][3], matrix[2][3], matrix[3][3]);
}
`,qE=`vec2 getLookupUv(vec2 dimensions, int i) {
    int pixY = i / int(dimensions.x);
    int pixX = i - (pixY * int(dimensions.x));
    float pixelWidth = 1.0 / dimensions.x;
    float pixelHeight = 1.0 / dimensions.y;
    float u = (float(pixX) + 0.5) * pixelWidth; // sample from center of pixel
    float v = (float(pixY) + 0.5) * pixelHeight;
    return vec2(u, v);
}

vec4 czm_unpackClippingExtents(highp sampler2D extentsTexture, int index) {
    vec2 textureDimensions = vec2(textureSize(extentsTexture, 0));
    return texture(extentsTexture, getLookupUv(textureDimensions, index));
}`,kE=`/**
 * Unpacks a vec4 depth value to a float in [0, 1) range.
 *
 * @name czm_unpackDepth
 * @glslFunction
 *
 * @param {vec4} packedDepth The packed depth.
 *
 * @returns {float} The floating-point depth in [0, 1) range.
 */
float czm_unpackDepth(vec4 packedDepth)
{
    // See Aras Pranckevičius' post Encoding Floats to RGBA
    // http://aras-p.info/blog/2009/07/30/encoding-floats-to-rgba-the-final/
    return dot(packedDepth, vec4(1.0, 1.0 / 255.0, 1.0 / 65025.0, 1.0 / 16581375.0));
}
`,VE=`/**
 * Unpack an IEEE 754 single-precision float that is packed as a little-endian unsigned normalized vec4.
 *
 * @name czm_unpackFloat
 * @glslFunction
 *
 * @param {vec4} packedFloat The packed float.
 *
 * @returns {float} The floating-point depth in arbitrary range.
 */
float czm_unpackFloat(vec4 packedFloat)
{
    // Convert to [0.0, 255.0] and round to integer
    packedFloat = floor(packedFloat * 255.0 + 0.5);
    float sign = 1.0 - step(128.0, packedFloat[3]) * 2.0;
    float exponent = 2.0 * mod(packedFloat[3], 128.0) + step(128.0, packedFloat[2]) - 127.0;    
    if (exponent == -127.0)
    {
        return 0.0;
    }
    float mantissa = mod(packedFloat[2], 128.0) * 65536.0 + packedFloat[1] * 256.0 + packedFloat[0] + float(0x800000);
    float result = sign * exp2(exponent - 23.0) * mantissa;
    return result;
}
`,jE=`/**
 * Unpack unsigned integers of 1-4 bytes. in WebGL 1, there is no uint type,
 * so the return value is an int.
 * <p>
 * There are also precision limitations in WebGL 1. highp int is still limited
 * to 24 bits. Above the value of 2^24 = 16777216, precision loss may occur.
 * </p>
 *
 * @param {float|vec2|vec3|vec4} packed The packed value. For vectors, the components are listed in little-endian order.
 *
 * @return {int} The unpacked value.
 */
 int czm_unpackUint(float packedValue) {
   float rounded = czm_round(packedValue * 255.0);
   return int(rounded);
 }

 int czm_unpackUint(vec2 packedValue) {
   vec2 rounded = czm_round(packedValue * 255.0);
   return int(dot(rounded, vec2(1.0, 256.0)));
 }

 int czm_unpackUint(vec3 packedValue) {
   vec3 rounded = czm_round(packedValue * 255.0);
   return int(dot(rounded, vec3(1.0, 256.0, 65536.0)));
 }

 int czm_unpackUint(vec4 packedValue) {
   vec4 rounded = czm_round(packedValue * 255.0);
   return int(dot(rounded, vec4(1.0, 256.0, 65536.0, 16777216.0)));
 }
`,HE=`/**
 * Transform metadata values following the EXT_structural_metadata spec
 * by multiplying by scale and adding the offset. Operations are always
 * performed component-wise, even for matrices.
 * 
 * @param {float|vec2|vec3|vec4|mat2|mat3|mat4} offset The offset to add
 * @param {float|vec2|vec3|vec4|mat2|mat3|mat4} scale The scale factor to multiply
 * @param {float|vec2|vec3|vec4|mat2|mat3|mat4} value The original value.
 *
 * @return {float|vec2|vec3|vec4|mat2|mat3|mat4} The transformed value of the same scalar/vector/matrix type as the input.
 */
float czm_valueTransform(float offset, float scale, float value) {
  return scale * value + offset;
}

vec2 czm_valueTransform(vec2 offset, vec2 scale, vec2 value) {
  return scale * value + offset;
}

vec3 czm_valueTransform(vec3 offset, vec3 scale, vec3 value) {
  return scale * value + offset;
}

vec4 czm_valueTransform(vec4 offset, vec4 scale, vec4 value) {
  return scale * value + offset;
}

mat2 czm_valueTransform(mat2 offset, mat2 scale, mat2 value) {
  return matrixCompMult(scale, value) + offset;
}

mat3 czm_valueTransform(mat3 offset, mat3 scale, mat3 value) {
  return matrixCompMult(scale, value) + offset;
}

mat4 czm_valueTransform(mat4 offset, mat4 scale, mat4 value) {
  return matrixCompMult(scale, value) + offset;
}
`,WE=`#ifdef LOG_DEPTH
// 1.0 at the near plane, increasing linearly from there.
out float v_depthFromNearPlusOne;
#ifdef SHADOW_MAP
out vec3 v_logPositionEC;
#endif
#endif

vec4 czm_updatePositionDepth(vec4 coords) {
#if defined(LOG_DEPTH)

#ifdef SHADOW_MAP
    vec3 logPositionEC = (czm_inverseProjection * coords).xyz;
    v_logPositionEC = logPositionEC;
#endif

    // With the very high far/near ratios used with the logarithmic depth
    // buffer, floating point rounding errors can cause linear depth values
    // to end up on the wrong side of the far plane, even for vertices that
    // are really nowhere near it. Since we always write a correct logarithmic
    // depth value in the fragment shader anyway, we just need to make sure
    // such errors don't cause the primitive to be clipped entirely before
    // we even get to the fragment shader.
    coords.z = clamp(coords.z / coords.w, -1.0, 1.0) * coords.w;
#endif

    return coords;
}

/**
 * Writes the logarithmic depth to gl_Position using the already computed gl_Position.
 *
 * @name czm_vertexLogDepth
 * @glslFunction
 */
void czm_vertexLogDepth()
{
#ifdef LOG_DEPTH
    v_depthFromNearPlusOne = (gl_Position.w - czm_currentFrustum.x) + 1.0;
    gl_Position = czm_updatePositionDepth(gl_Position);
#endif
}

/**
 * Writes the logarithmic depth to gl_Position using the provided clip coordinates.
 * <p>
 * An example use case for this function would be moving the vertex in window coordinates
 * before converting back to clip coordinates. Use the original vertex clip coordinates.
 * </p>
 * @name czm_vertexLogDepth
 * @glslFunction
 *
 * @param {vec4} clipCoords The vertex in clip coordinates.
 *
 * @example
 * czm_vertexLogDepth(czm_projection * vec4(positionEyeCoordinates, 1.0));
 */
void czm_vertexLogDepth(vec4 clipCoords)
{
#ifdef LOG_DEPTH
    v_depthFromNearPlusOne = (clipCoords.w - czm_currentFrustum.x) + 1.0;
    czm_updatePositionDepth(clipCoords);
#endif
}
`,YE=`vec4 czm_screenToEyeCoordinates(vec4 screenCoordinate)
{
    // Reconstruct NDC coordinates
    float x = 2.0 * screenCoordinate.x - 1.0;
    float y = 2.0 * screenCoordinate.y - 1.0;
    float z = (screenCoordinate.z - czm_viewportTransformation[3][2]) / czm_viewportTransformation[2][2];
    vec4 q = vec4(x, y, z, 1.0);

    // Reverse the perspective division to obtain clip coordinates.
    q /= screenCoordinate.w;

    // Reverse the projection transformation to obtain eye coordinates.
    if (!(czm_inverseProjection == mat4(0.0))) // IE and Edge sometimes do something weird with != between mat4s
    {
        q = czm_inverseProjection * q;
    }
    else
    {
        float top = czm_frustumPlanes.x;
        float bottom = czm_frustumPlanes.y;
        float left = czm_frustumPlanes.z;
        float right = czm_frustumPlanes.w;

        float near = czm_currentFrustum.x;
        float far = czm_currentFrustum.y;

        q.x = (q.x * (right - left) + left + right) * 0.5;
        q.y = (q.y * (top - bottom) + bottom + top) * 0.5;
        q.z = (q.z * (near - far) - near - far) * 0.5;
        q.w = 1.0;
    }

    return q;
}

/**
 * Transforms a position from window to eye coordinates.
 * The transform from window to normalized device coordinates is done using components
 * of (@link czm_viewport} and {@link czm_viewportTransformation} instead of calculating
 * the inverse of <code>czm_viewportTransformation</code>. The transformation from
 * normalized device coordinates to clip coordinates is done using <code>fragmentCoordinate.w</code>,
 * which is expected to be the scalar used in the perspective divide. The transformation
 * from clip to eye coordinates is done using {@link czm_inverseProjection}.
 *
 * @name czm_windowToEyeCoordinates
 * @glslFunction
 *
 * @param {vec4} fragmentCoordinate The position in window coordinates to transform.
 *
 * @returns {vec4} The transformed position in eye coordinates.
 *
 * @see czm_modelToWindowCoordinates
 * @see czm_eyeToWindowCoordinates
 * @see czm_inverseProjection
 * @see czm_viewport
 * @see czm_viewportTransformation
 *
 * @example
 * vec4 positionEC = czm_windowToEyeCoordinates(gl_FragCoord);
 */
vec4 czm_windowToEyeCoordinates(vec4 fragmentCoordinate)
{
    vec2 screenCoordXY = (fragmentCoordinate.xy - czm_viewport.xy) / czm_viewport.zw;
    return czm_screenToEyeCoordinates(vec4(screenCoordXY, fragmentCoordinate.zw));
}

vec4 czm_screenToEyeCoordinates(vec2 screenCoordinateXY, float depthOrLogDepth)
{
    // See reverseLogDepth.glsl. This is separate to re-use the pow.
#if defined(LOG_DEPTH) || defined(LOG_DEPTH_READ_ONLY)
    float near = czm_currentFrustum.x;
    float far = czm_currentFrustum.y;
    float log2Depth = depthOrLogDepth * czm_log2FarDepthFromNearPlusOne;
    float depthFromNear = exp2(log2Depth) - 1.0;
    float depthFromCamera = depthFromNear + near;
    vec4 screenCoord = vec4(screenCoordinateXY, far * (1.0 - near / depthFromCamera) / (far - near), 1.0);
    vec4 eyeCoordinate = czm_screenToEyeCoordinates(screenCoord);
    eyeCoordinate.w = 1.0 / depthFromCamera; // Better precision
#else
    vec4 screenCoord = vec4(screenCoordinateXY, depthOrLogDepth, 1.0);
    vec4 eyeCoordinate = czm_screenToEyeCoordinates(screenCoord);
#endif
    return eyeCoordinate;
}

/**
 * Transforms a position given as window x/y and a depth or a log depth from window to eye coordinates.
 * This function produces more accurate results for window positions with log depth than
 * conventionally unpacking the log depth using czm_reverseLogDepth and using the standard version
 * of czm_windowToEyeCoordinates.
 *
 * @name czm_windowToEyeCoordinates
 * @glslFunction
 *
 * @param {vec2} fragmentCoordinateXY The XY position in window coordinates to transform.
 * @param {float} depthOrLogDepth A depth or log depth for the fragment.
 *
 * @see czm_modelToWindowCoordinates
 * @see czm_eyeToWindowCoordinates
 * @see czm_inverseProjection
 * @see czm_viewport
 * @see czm_viewportTransformation
 *
 * @returns {vec4} The transformed position in eye coordinates.
 */
vec4 czm_windowToEyeCoordinates(vec2 fragmentCoordinateXY, float depthOrLogDepth)
{
    vec2 screenCoordXY = (fragmentCoordinateXY.xy - czm_viewport.xy) / czm_viewport.zw;
    return czm_screenToEyeCoordinates(screenCoordXY, depthOrLogDepth);
}
`,XE=`// emulated noperspective
#if !defined(LOG_DEPTH)
in float v_WindowZ;
#endif

/**
 * Emulates GL_DEPTH_CLAMP. Clamps a fragment to the near and far plane
 * by writing the fragment's depth. See czm_depthClamp for more details.
 *
 * @name czm_writeDepthClamp
 * @glslFunction
 *
 * @example
 * out_FragColor = color;
 * czm_writeDepthClamp();
 *
 * @see czm_depthClamp
 */
void czm_writeDepthClamp()
{
#if (!defined(LOG_DEPTH) && (__VERSION__ == 300 || defined(GL_EXT_frag_depth)))
    gl_FragDepth = clamp(v_WindowZ * gl_FragCoord.w, 0.0, 1.0);
#endif
}
`,$E=`#ifdef LOG_DEPTH
in float v_depthFromNearPlusOne;

#ifdef POLYGON_OFFSET
uniform vec2 u_polygonOffset;
#endif

#endif

/**
 * Writes the fragment depth to the logarithmic depth buffer.
 * <p>
 * Use this when the vertex shader does not call {@link czm_vertexLogDepth}, for example, when
 * ray-casting geometry using a full screen quad.
 * </p>
 * @name czm_writeLogDepth
 * @glslFunction
 *
 * @param {float} depth The depth coordinate, where 1.0 is on the near plane and
 *                      depth increases in eye-space units from there
 *
 * @example
 * czm_writeLogDepth((czm_projection * v_positionEyeCoordinates).w + 1.0);
 */
void czm_writeLogDepth(float depth)
{
#if (defined(LOG_DEPTH) && (__VERSION__ == 300 || defined(GL_EXT_frag_depth)))
    // Discard the vertex if it's not between the near and far planes.
    // We allow a bit of epsilon on the near plane comparison because a 1.0
    // from the vertex shader (indicating the vertex should be _on_ the near
    // plane) will not necessarily come here as exactly 1.0.
    if (depth <= 0.9999999 || depth > czm_farDepthFromNearPlusOne) {
        discard;
    }

#ifdef POLYGON_OFFSET
    // Polygon offset: m * factor + r * units
    float factor = u_polygonOffset[0];
    float units = u_polygonOffset[1];

#if (__VERSION__ == 300 || defined(GL_OES_standard_derivatives))
    // This factor doesn't work in IE 10
    if (factor != 0.0) {
        // m = sqrt(dZdX^2 + dZdY^2);
        float x = dFdx(depth);
        float y = dFdy(depth);
        float m = sqrt(x * x + y * y);

        // Apply the factor before computing the log depth.
        depth += m * factor;
    }
#endif

#endif

    gl_FragDepth = log2(depth) * czm_oneOverLog2FarDepthFromNearPlusOne;

#ifdef POLYGON_OFFSET
    // Apply the units after the log depth.
    gl_FragDepth += czm_epsilon7 * units;
#endif

#endif
}

/**
 * Writes the fragment depth to the logarithmic depth buffer.
 * <p>
 * Use this when the vertex shader calls {@link czm_vertexLogDepth}.
 * </p>
 *
 * @name czm_writeLogDepth
 * @glslFunction
 */
void czm_writeLogDepth() {
#ifdef LOG_DEPTH
    czm_writeLogDepth(v_depthFromNearPlusOne);
#endif
}
`,ZE=`/**
 * Transforms a value for non-perspective interpolation by multiplying
 * it by w, the value used in the perspective divide. This function is
 * intended to be called in a vertex shader to compute the value of a
 * \`varying\` that should not be subject to perspective interpolation.
 * For example, screen-space texture coordinates. The fragment shader
 * must call {@link czm_readNonPerspective} to retrieve the final
 * non-perspective value.
 *
 * @name czm_writeNonPerspective
 * @glslFunction
 *
 * @param {float|vec2|vec3|vec4} value The value to be interpolated without accounting for perspective.
 * @param {float} w The perspective divide value. Usually this is the computed \`gl_Position.w\`.
 * @returns {float|vec2|vec3|vec4} The transformed value, intended to be stored in a \`varying\` and read in the
 *          fragment shader with {@link czm_readNonPerspective}.
 */
float czm_writeNonPerspective(float value, float w) {
    return value * w;
}

vec2 czm_writeNonPerspective(vec2 value, float w) {
    return value * w;
}

vec3 czm_writeNonPerspective(vec3 value, float w) {
    return value * w;
}

vec4 czm_writeNonPerspective(vec4 value, float w) {
    return value * w;
}
`,Ia={czm_degreesPerRadian:wb,czm_depthRange:Ab,czm_epsilon1:Ob,czm_epsilon2:Sb,czm_epsilon3:xb,czm_epsilon4:Cb,czm_epsilon5:vb,czm_epsilon6:Rb,czm_epsilon7:zb,czm_infinity:Ib,czm_oneOverPi:Pb,czm_oneOverTwoPi:Mb,czm_passCesium3DTile:Nb,czm_passCesium3DTileClassification:Db,czm_passCesium3DTileClassificationIgnoreShow:Lb,czm_passClassification:Fb,czm_passCompute:Bb,czm_passEnvironment:Ub,czm_passGaussianSplats:Gb,czm_passGlobe:qb,czm_passOpaque:kb,czm_passOverlay:Vb,czm_passTerrainClassification:jb,czm_passTranslucent:Hb,czm_passVoxels:Wb,czm_pi:Yb,czm_piOverFour:Xb,czm_piOverSix:$b,czm_piOverThree:Zb,czm_piOverTwo:Kb,czm_radiansPerDegree:Qb,czm_sceneMode2D:Jb,czm_sceneMode3D:eT,czm_sceneModeColumbusView:tT,czm_sceneModeMorphing:nT,czm_solarRadius:oT,czm_threePiOver2:iT,czm_twoPi:rT,czm_webMercatorMaxLatitude:aT,czm_depthRangeStruct:sT,czm_material:cT,czm_materialInput:lT,czm_modelMaterial:fT,czm_modelVertexOutput:uT,czm_ray:hT,czm_raySegment:dT,czm_shadowParameters:mT,czm_HSBToRGB:pT,czm_HSLToRGB:_T,czm_RGBToHSB:gT,czm_RGBToHSL:yT,czm_RGBToXYZ:bT,czm_XYZToRGB:TT,czm_acesTonemapping:ET,czm_alphaWeight:wT,czm_antialias:AT,czm_applyHSBShift:OT,czm_approximateSphericalCoordinates:ST,czm_approximateTanh:xT,czm_backFacing:CT,czm_branchFreeTernary:vT,czm_cascadeColor:RT,czm_cascadeDistance:zT,czm_cascadeMatrix:IT,czm_cascadeWeights:PT,czm_clipPolygons:MT,czm_columbusViewMorph:NT,czm_computeAtmosphereColor:DT,czm_computeGroundAtmosphereScattering:LT,czm_computePosition:FT,czm_computeScattering:BT,czm_cosineAndSine:UT,czm_decompressTextureCoordinates:GT,czm_depthClamp:qT,czm_eastNorthUpToEyeCoordinates:kT,czm_ellipsoidContainsPoint:VT,czm_ellipsoidTextureCoordinates:jT,czm_equalsEpsilon:HT,czm_eyeOffset:WT,czm_eyeToWindowCoordinates:YT,czm_fastApproximateAtan:XT,czm_fog:$T,czm_gammaCorrect:ZT,czm_geodeticSurfaceNormal:KT,czm_getDefaultMaterial:QT,czm_getDynamicAtmosphereLightDirection:JT,czm_getLambertDiffuse:eE,czm_getSpecular:tE,czm_getWaterNoise:nE,czm_hue:oE,czm_inverseGamma:iE,czm_isEmpty:rE,czm_isFull:aE,czm_latitudeToWebMercatorFraction:sE,czm_lineDistance:cE,czm_linearToSrgb:lE,czm_luminance:fE,czm_maximumComponent:uE,czm_metersPerPixel:hE,czm_modelToWindowCoordinates:dE,czm_multiplyWithColorBalance:mE,czm_nearFarScalar:pE,czm_octDecode:_E,czm_packDepth:gE,czm_pbrLighting:yE,czm_pbrNeutralTonemapping:bE,czm_phong:TE,czm_planeDistance:EE,czm_pointAlongRay:wE,czm_rayEllipsoidIntersectionInterval:AE,czm_raySphereIntersectionInterval:OE,czm_readDepth:SE,czm_readNonPerspective:xE,czm_reverseLogDepth:CE,czm_round:vE,czm_saturation:RE,czm_shadowDepthCompare:zE,czm_shadowVisibility:IE,czm_signNotZero:PE,czm_sphericalHarmonics:ME,czm_srgbToLinear:NE,czm_tangentToEyeSpaceMatrix:DE,czm_textureCube:LE,czm_transformPlane:FE,czm_translateRelativeToEye:BE,czm_translucentPhong:UE,czm_transpose:GE,czm_unpackClippingExtents:qE,czm_unpackDepth:kE,czm_unpackFloat:VE,czm_unpackUint:jE,czm_valueTransform:HE,czm_vertexLogDepth:WE,czm_windowToEyeCoordinates:YE,czm_writeDepthClamp:XE,czm_writeLogDepth:$E,czm_writeNonPerspective:ZE};function KE(e,t){let n=e;return n=n.replaceAll("version 300 es",""),n=n.replaceAll(/(texture\()/g,"texture2D("),t?(n=n.replaceAll(/\n\s*(in)\s+(vec\d|mat\d|float)/g,`
varying $2`),/out_FragData_(\d+)/.test(n)&&(n=`#extension GL_EXT_draw_buffers : enable
${n}`,n=n.replaceAll(/layout\s+\(location\s*=\s*\d+\)\s*out\s+vec4\s+out_FragData_\d+;/g,""),n=n.replaceAll(/out_FragData_(\d+)/g,"gl_FragData[$1]")),n=n.replaceAll(/layout\s+\(location\s*=\s*0\)\s*out\s+vec4\s+out_FragColor;/g,""),n=n.replaceAll(/out_FragColor/g,"gl_FragColor"),n=n.replaceAll(/out_FragColor\[(\d+)\]/g,"gl_FragColor[$1]"),/gl_FragDepth/.test(n)&&(n=`#extension GL_EXT_frag_depth : enable
${n}`,n=n.replaceAll(/gl_FragDepth/g,"gl_FragDepthEXT")),n=`#ifdef GL_EXT_shader_texture_lod
#extension GL_EXT_shader_texture_lod : enable
#endif
${n}`,n=`#ifdef GL_OES_standard_derivatives
#extension GL_OES_standard_derivatives : enable
#endif
${n}`):(n=n.replaceAll(/(in)\s+(vec\d|mat\d|float)/g,"attribute $2"),n=n.replaceAll(/(out)\s+(vec\d|mat\d|float)\s+([\w]+);/g,"varying $2 $3;")),n=`#version 100
${n}`,n}function mh(e){return e=e.replace(/\/\/.*/g,""),e.replace(/\/\*\*[\s\S]*?\*\//gm,function(t){const n=t.match(/\n/gm).length;let o="";for(let i=0;i<n;++i)o+=`
`;return o})}function ph(e,t,n){let o;for(let i=0;i<n.length;++i)n[i].name===e&&(o=n[i]);return u(o)||(t=mh(t),o={name:e,glslSource:t,dependsOn:[],requiredBy:[],evaluated:!1},n.push(o)),o}function _h(e,t){if(e.evaluated)return;e.evaluated=!0;let n=e.glslSource.match(/\bczm_[a-zA-Z0-9_]*/g);u(n)&&n!==null&&(n=n.filter(function(o,i){return n.indexOf(o)===i}),n.forEach(function(o){if(o!==e.name&&Ue._czmBuiltinsAndUniforms.hasOwnProperty(o)){const i=ph(o,Ue._czmBuiltinsAndUniforms[o],t);e.dependsOn.push(i),i.requiredBy.push(e),_h(i,t)}}))}function QE(e){const t=[],n=[];for(;e.length>0;){const i=e.pop();n.push(i),i.requiredBy.length===0&&t.push(i)}for(;t.length>0;){const i=t.shift();e.push(i);for(let a=0;a<i.dependsOn.length;++a){const r=i.dependsOn[a],s=r.requiredBy.indexOf(i);r.requiredBy.splice(s,1),r.requiredBy.length===0&&t.push(r)}}const o=[];for(let i=0;i<n.length;++i)n[i].requiredBy.length!==0&&o.push(n[i]);if(o.length!==0){let i=`A circular dependency was found in the following built-in functions/structs/constants: 
`;for(let a=0;a<o.length;++a)i=`${i+o[a].name}
`;throw new T(i)}}function JE(e){const t=[],n=ph("main",e,t);_h(n,t),QE(t);let o="";for(let i=t.length-1;i>=0;--i)o=`${o+t[i].glslSource}
`;return o.replace(n.glslSource,"")}function gh(e,t,n){let o,i,a="";const r=e.sources;if(u(r))for(o=0,i=r.length;o<i;++o)a+=`
#line 0
${r[o]}`;a=mh(a);let s;a=a.replace(/#version\s+(.*?)\n/gm,function(b,E){if(u(s)&&s!==E)throw new T(`inconsistent versions found: ${s} and ${E}`);return s=E,`
`});const c=[];a=a.replace(/#extension.*\n/gm,function(b){return c.push(b),`
`}),a=a.replace(/precision\s(lowp|mediump|highp)\s(float|int);/,"");const f=e.pickColorQualifier;u(f)&&(a=Ue.createPickFragmentShaderSource(a,f));let d="";const m=c.length;for(o=0;o<m;o++)d+=c[o];t&&(d+=`#ifdef GL_FRAGMENT_PRECISION_HIGH
    precision highp float;
    precision highp int;
#else
    precision mediump float;
    precision mediump int;
    #define highp mediump
#endif

`);const p=e.defines;if(u(p))for(o=0,i=p.length;o<i;++o){const b=p[o];b.length!==0&&(d+=`#define ${b}
`)}n.textureFloatLinear&&(d+=`#define OES_texture_float_linear

`),n.floatingPointTexture&&(d+=`#define OES_texture_float

`);let _="";e.includeBuiltIns&&(_=JE(a)),d+=`
#line 0
`;const g=_+a;return n.webgl2&&t&&!/layout\s*\(location\s*=\s*0\)\s*out\s+vec4\s+out_FragColor;/g.test(g)&&!/czm_out_FragColor/g.test(g)&&/out_FragColor/g.test(g)&&(d+=`layout(location = 0) out vec4 out_FragColor;

`),d+=_,d+=a,n.webgl2?d=`#version 300 es
${d}`:d=KE(d,t),d}function Ue(e){e=e??ue.EMPTY_OBJECT;const t=e.pickColorQualifier;if(u(t)&&t!=="uniform"&&t!=="in")throw new T("options.pickColorQualifier must be 'uniform' or 'in'.");this.defines=u(e.defines)?e.defines.slice(0):[],this.sources=u(e.sources)?e.sources.slice(0):[],this.pickColorQualifier=t,this.includeBuiltIns=e.includeBuiltIns??!0}Ue.prototype.clone=function(){return new Ue({sources:this.sources,defines:this.defines,pickColorQualifier:this.pickColorQualifier,includeBuiltIns:this.includeBuiltIns})};Ue.replaceMain=function(e,t){return t=`void ${t}()`,e.replace(/void\s+main\s*\(\s*(?:void)?\s*\)/g,t)};Ue.prototype.getCacheKey=function(){const t=this.defines.slice().sort().join(","),n=this.pickColorQualifier,o=this.includeBuiltIns,i=this.sources.join(`
`);return`${t}:${n}:${o}:${i}`};Ue.prototype.createCombinedVertexShader=function(e){return gh(this,!1,e)};Ue.prototype.createCombinedFragmentShader=function(e){return gh(this,!0,e)};Ue._czmBuiltinsAndUniforms={};for(const e in Ia)Ia.hasOwnProperty(e)&&(Ue._czmBuiltinsAndUniforms[e]=Ia[e]);for(const e in mr)if(mr.hasOwnProperty(e)){const t=mr[e];typeof t.getDeclaration=="function"&&(Ue._czmBuiltinsAndUniforms[e]=t.getDeclaration(e))}Ue.createPickVertexShaderSource=function(e){return`${Ue.replaceMain(e,"czm_old_main")}
in vec4 pickColor; 
out vec4 czm_pickColor; 
void main() 
{ 
    czm_old_main(); 
    czm_pickColor = pickColor; 
}`};Ue.createPickFragmentShaderSource=function(e,t){const n=Ue.replaceMain(e,"czm_old_main"),o=`${t} vec4 czm_pickColor; 
void main() 
{ 
    czm_old_main(); 
    if (out_FragColor.a == 0.0) { 
       discard; 
    } 
    out_FragColor = czm_pickColor; 
}`;return`${n}
${o}`};function ew(e,t){const n=e.defines,o=n.length;for(let i=0;i<o;++i)if(n[i]===t)return!0;return!1}function yh(e,t){const n=e.sources,o=n.length;for(let i=0;i<o;++i)if(n[i].indexOf(t)!==-1)return!0;return!1}function bh(e,t){const n=t.length;for(let o=0;o<n;++o){const i=t[o];if(yh(e,i))return i}}const tw=["v_normalEC","v_normal"];Ue.findNormalVarying=function(e){return yh(e,"#ifdef HAS_NORMALS")?ew(e,"HAS_NORMALS")?"v_normalEC":void 0:bh(e,tw)};const nw=["v_positionEC"];Ue.findPositionVarying=function(e){return bh(e,nw)};function St(e){e=e??ue.EMPTY_OBJECT,h.defined("options.context",e.context);const{context:t,source:n,pixelFormat:o=me.RGBA,pixelDatatype:i=he.UNSIGNED_BYTE,flipY:a=!0,skipColorSpaceConversion:r=!1,sampler:s=new _n}=e;let{width:c,height:f}=e;u(n)&&(u(c)||(c=n.videoWidth??n.naturalWidth??n.width),u(f)||(f=n.videoHeight??n.naturalHeight??n.height));const d=e.preMultiplyAlpha||o===me.RGB||o===me.LUMINANCE,m=me.toInternalFormat(o,i,t),p=me.isCompressedFormat(m);if(!u(c)||!u(f))throw new T("options requires a source field to create an initialized texture or width and height fields to create a blank texture.");if(h.typeOf.number.greaterThan("width",c,0),c>ge.maximumTextureSize)throw new T(`Width must be less than or equal to the maximum texture size (${ge.maximumTextureSize}).  Check maximumTextureSize.`);if(h.typeOf.number.greaterThan("height",f,0),f>ge.maximumTextureSize)throw new T(`Height must be less than or equal to the maximum texture size (${ge.maximumTextureSize}).  Check maximumTextureSize.`);if(!me.validate(o))throw new T("Invalid options.pixelFormat.");if(!p&&!he.validate(i))throw new T("Invalid options.pixelDatatype.");if(o===me.DEPTH_COMPONENT&&i!==he.UNSIGNED_SHORT&&i!==he.UNSIGNED_INT)throw new T("When options.pixelFormat is DEPTH_COMPONENT, options.pixelDatatype must be UNSIGNED_SHORT or UNSIGNED_INT.");if(o===me.DEPTH_STENCIL&&i!==he.UNSIGNED_INT_24_8)throw new T("When options.pixelFormat is DEPTH_STENCIL, options.pixelDatatype must be UNSIGNED_INT_24_8.");if(i===he.FLOAT&&!t.floatingPointTexture)throw new T("When options.pixelDatatype is FLOAT, this WebGL implementation must support the OES_texture_float extension.  Check context.floatingPointTexture.");if(i===he.HALF_FLOAT&&!t.halfFloatingPointTexture)throw new T("When options.pixelDatatype is HALF_FLOAT, this WebGL implementation must support the OES_texture_half_float extension. Check context.halfFloatingPointTexture.");if(me.isDepthFormat(o)){if(u(n))throw new T("When options.pixelFormat is DEPTH_COMPONENT or DEPTH_STENCIL, source cannot be provided.");if(!t.depthTexture)throw new T("When options.pixelFormat is DEPTH_COMPONENT or DEPTH_STENCIL, this WebGL implementation must support WEBGL_depth_texture.  Check context.depthTexture.")}if(p){if(!u(n)||!u(n.arrayBufferView))throw new T("When options.pixelFormat is compressed, options.source.arrayBufferView must be defined.");if(me.isDXTFormat(m)&&!t.s3tc)throw new T("When options.pixelFormat is S3TC compressed, this WebGL implementation must support the WEBGL_compressed_texture_s3tc extension. Check context.s3tc.");if(me.isPVRTCFormat(m)&&!t.pvrtc)throw new T("When options.pixelFormat is PVRTC compressed, this WebGL implementation must support the WEBGL_compressed_texture_pvrtc extension. Check context.pvrtc.");if(me.isASTCFormat(m)&&!t.astc)throw new T("When options.pixelFormat is ASTC compressed, this WebGL implementation must support the WEBGL_compressed_texture_astc extension. Check context.astc.");if(me.isETC2Format(m)&&!t.etc)throw new T("When options.pixelFormat is ETC2 compressed, this WebGL implementation must support the WEBGL_compressed_texture_etc extension. Check context.etc.");if(me.isETC1Format(m)&&!t.etc1)throw new T("When options.pixelFormat is ETC1 compressed, this WebGL implementation must support the WEBGL_compressed_texture_etc1 extension. Check context.etc1.");if(me.isBC7Format(m)&&!t.bc7)throw new T("When options.pixelFormat is BC7 compressed, this WebGL implementation must support the EXT_texture_compression_bptc extension. Check context.bc7.");if(me.compressedTextureSizeInBytes(m,c,f)!==n.arrayBufferView.byteLength)throw new T("The byte length of the array buffer is invalid for the compressed texture with the given width and height.")}const _=t._gl,g=p?me.compressedTextureSizeInBytes(o,c,f):me.textureSizeInBytes(o,i,c,f);this._id=e.id??Hs(),this._context=t,this._textureFilterAnisotropic=t._textureFilterAnisotropic,this._textureTarget=_.TEXTURE_2D,this._texture=_.createTexture(),this._internalFormat=m,this._pixelFormat=o,this._pixelDatatype=i,this._width=c,this._height=f,this._dimensions=new U(c,f),this._hasMipmap=!1,this._sizeInBytes=g,this._preMultiplyAlpha=d,this._flipY=a,this._initialized=!1,this._sampler=void 0,this._sampler=s,Ah(this,s),_.activeTexture(_.TEXTURE0),_.bindTexture(this._textureTarget,this._texture),u(n)?(r?_.pixelStorei(_.UNPACK_COLORSPACE_CONVERSION_WEBGL,_.NONE):_.pixelStorei(_.UNPACK_COLORSPACE_CONVERSION_WEBGL,_.BROWSER_DEFAULT_WEBGL),u(n.arrayBufferView)?me.isCompressedFormat(m)?ow(this,n):Th(this,n):u(n.framebuffer)?rw(this,n):Eh(this,n),this._initialized=!0):wh(this),_.bindTexture(this._textureTarget,null)}function ow(e,t){const o=e._context._gl,i=e._textureTarget,a=e._internalFormat,{width:r,height:s}=e;if(o.pixelStorei(o.UNPACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,!1),o.compressedTexImage2D(i,0,a,r,s,0,t.arrayBufferView),u(t.mipLevels)){let c=r,f=s;for(let d=0;d<t.mipLevels.length;++d)c=Dr(c),f=Dr(f),o.compressedTexImage2D(i,d+1,a,c,f,0,t.mipLevels[d])}}function Th(e,t){const n=e._context,o=n._gl,i=e._textureTarget,a=e._internalFormat,{width:r,height:s,pixelFormat:c,pixelDatatype:f,flipY:d}=e,m=me.alignmentInBytes(c,f,r);o.pixelStorei(o.UNPACK_ALIGNMENT,m),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,!1);let{arrayBufferView:p}=t;if(d&&(p=me.flipY(p,c,f,r,s)),o.texImage2D(i,0,a,r,s,0,c,he.toWebGLConstant(f,n),p),u(t.mipLevels)){let _=r,g=s;for(let b=0;b<t.mipLevels.length;++b)_=Dr(_),g=Dr(g),o.texImage2D(i,b+1,a,_,g,0,c,he.toWebGLConstant(f,n),t.mipLevels[b])}}function iw(e,t,n,o,i,a){const r=e._context,s=r._gl,{pixelFormat:c,pixelDatatype:f}=e,d=me.alignmentInBytes(c,f,i);s.pixelStorei(s.UNPACK_ALIGNMENT,d),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),e.flipY&&(t=me.flipY(t,c,f,i,a)),s.texSubImage2D(e._textureTarget,0,n,o,i,a,c,he.toWebGLConstant(f,r),t)}function rw(e,t){const n=e._context,o=n._gl;o.pixelStorei(o.UNPACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,!1),t.framebuffer!==n.defaultFramebuffer&&t.framebuffer._bind(),o.copyTexImage2D(e._textureTarget,0,e._internalFormat,t.xOffset,t.yOffset,e.width,e.height,0),t.framebuffer!==n.defaultFramebuffer&&t.framebuffer._unBind()}function Eh(e,t){const n=e._context,o=n._gl;o.pixelStorei(o.UNPACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,e.preMultiplyAlpha),o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,e.flipY),o.texImage2D(e._textureTarget,0,e._internalFormat,e.pixelFormat,he.toWebGLConstant(e.pixelDatatype,n),t)}function aw(e,t,n,o){const i=e._context,a=i._gl;a.pixelStorei(a.UNPACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,e.preMultiplyAlpha),a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,e.flipY),a.texSubImage2D(e._textureTarget,0,n,o,e.pixelFormat,he.toWebGLConstant(e.pixelDatatype,i),t)}function Dr(e){const t=Math.floor(e/2)|0;return Math.max(t,1)}function wh(e){const t=e._context;t._gl.texImage2D(e._textureTarget,0,e._internalFormat,e._width,e._height,0,e._pixelFormat,he.toWebGLConstant(e._pixelDatatype,t),null)}St.create=function(e){return new St(e)};St.fromFramebuffer=function(e){e=e??ue.EMPTY_OBJECT,h.defined("options.context",e.context);const t=e.context,{pixelFormat:n=me.RGB,framebufferXOffset:o=0,framebufferYOffset:i=0,width:a=t.drawingBufferWidth,height:r=t.drawingBufferHeight,framebuffer:s}=e;if(!me.validate(n))throw new T("Invalid pixelFormat.");if(me.isDepthFormat(n)||me.isCompressedFormat(n))throw new T("pixelFormat cannot be DEPTH_COMPONENT, DEPTH_STENCIL or a compressed format.");if(h.defined("options.context",t),h.typeOf.number.greaterThanOrEquals("framebufferXOffset",o,0),h.typeOf.number.greaterThanOrEquals("framebufferYOffset",i,0),o+a>t.drawingBufferWidth)throw new T("framebufferXOffset + width must be less than or equal to drawingBufferWidth");if(i+r>t.drawingBufferHeight)throw new T("framebufferYOffset + height must be less than or equal to drawingBufferHeight.");return new St({context:t,width:a,height:r,pixelFormat:n,source:{framebuffer:u(s)?s:t.defaultFramebuffer,xOffset:o,yOffset:i,width:a,height:r}})};Object.defineProperties(St.prototype,{id:{get:function(){return this._id}},sampler:{get:function(){return this._sampler},set:function(e){Ah(this,e),this._sampler=e}},pixelFormat:{get:function(){return this._pixelFormat}},pixelDatatype:{get:function(){return this._pixelDatatype}},dimensions:{get:function(){return this._dimensions}},preMultiplyAlpha:{get:function(){return this._preMultiplyAlpha}},flipY:{get:function(){return this._flipY}},width:{get:function(){return this._width}},height:{get:function(){return this._height}},sizeInBytes:{get:function(){return this._hasMipmap?Math.floor(this._sizeInBytes*4/3):this._sizeInBytes}},_target:{get:function(){return this._textureTarget}}});function Ah(e,t){let{minificationFilter:n,magnificationFilter:o}=t;const i=[mt.NEAREST_MIPMAP_NEAREST,mt.NEAREST_MIPMAP_LINEAR,mt.LINEAR_MIPMAP_NEAREST,mt.LINEAR_MIPMAP_LINEAR].includes(n),a=e._context,r=e._pixelFormat,s=e._pixelDatatype;(s===he.FLOAT&&!a.textureFloatLinear||s===he.HALF_FLOAT&&!a.textureHalfFloatLinear)&&(n=i?mt.NEAREST_MIPMAP_NEAREST:mt.NEAREST,o=fo.NEAREST),a.webgl2&&me.isDepthFormat(r)&&(n=mt.NEAREST,o=fo.NEAREST);const c=a._gl,f=e._textureTarget;c.activeTexture(c.TEXTURE0),c.bindTexture(f,e._texture),c.texParameteri(f,c.TEXTURE_MIN_FILTER,n),c.texParameteri(f,c.TEXTURE_MAG_FILTER,o),c.texParameteri(f,c.TEXTURE_WRAP_S,t.wrapS),c.texParameteri(f,c.TEXTURE_WRAP_T,t.wrapT),u(e._textureFilterAnisotropic)&&c.texParameteri(f,e._textureFilterAnisotropic.TEXTURE_MAX_ANISOTROPY_EXT,t.maximumAnisotropy),c.bindTexture(f,null)}St.prototype.copyFrom=function(e){h.defined("options",e);const{xOffset:t=0,yOffset:n=0,source:o,skipColorSpaceConversion:i=!1}=e;if(h.defined("options.source",o),me.isDepthFormat(this._pixelFormat))throw new T("Cannot call copyFrom when the texture pixel format is DEPTH_COMPONENT or DEPTH_STENCIL.");if(me.isCompressedFormat(this._pixelFormat))throw new T("Cannot call copyFrom with a compressed texture pixel format.");h.typeOf.number.greaterThanOrEquals("xOffset",t,0),h.typeOf.number.greaterThanOrEquals("yOffset",n,0),h.typeOf.number.lessThanOrEquals("xOffset + options.source.width",t+o.width,this._width),h.typeOf.number.lessThanOrEquals("yOffset + options.source.height",n+o.height,this._height);const r=this._context._gl,s=this._textureTarget;r.activeTexture(r.TEXTURE0),r.bindTexture(s,this._texture);let{width:c,height:f}=o;u(o.videoWidth)&&u(o.videoHeight)?(c=o.videoWidth,f=o.videoHeight):u(o.naturalWidth)&&u(o.naturalHeight)&&(c=o.naturalWidth,f=o.naturalHeight),i?r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.NONE):r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL);let d=!1;this._initialized||(t===0&&n===0&&c===this._width&&f===this._height?(u(o.arrayBufferView)?Th(this,o):Eh(this,o),d=!0):(r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),wh(this)),this._initialized=!0),d||(u(o.arrayBufferView)?iw(this,o.arrayBufferView,t,n,c,f):aw(this,o,t,n)),r.bindTexture(s,null)};St.prototype.copyFromFramebuffer=function(e,t,n,o,i,a){if(e=e??0,t=t??0,n=n??0,o=o??0,i=i??this._width,a=a??this._height,me.isDepthFormat(this._pixelFormat))throw new T("Cannot call copyFromFramebuffer when the texture pixel format is DEPTH_COMPONENT or DEPTH_STENCIL.");if(this._pixelDatatype===he.FLOAT)throw new T("Cannot call copyFromFramebuffer when the texture pixel data type is FLOAT.");if(this._pixelDatatype===he.HALF_FLOAT)throw new T("Cannot call copyFromFramebuffer when the texture pixel data type is HALF_FLOAT.");if(me.isCompressedFormat(this._pixelFormat))throw new T("Cannot call copyFrom with a compressed texture pixel format.");h.typeOf.number.greaterThanOrEquals("xOffset",e,0),h.typeOf.number.greaterThanOrEquals("yOffset",t,0),h.typeOf.number.greaterThanOrEquals("framebufferXOffset",n,0),h.typeOf.number.greaterThanOrEquals("framebufferYOffset",o,0),h.typeOf.number.lessThanOrEquals("xOffset + width",e+i,this._width),h.typeOf.number.lessThanOrEquals("yOffset + height",t+a,this._height);const r=this._context._gl,s=this._textureTarget;r.activeTexture(r.TEXTURE0),r.bindTexture(s,this._texture),r.copyTexSubImage2D(s,0,e,t,n,o,i,a),r.bindTexture(s,null),this._initialized=!0};St.prototype.generateMipmap=function(e){if(e=e??Nr.DONT_CARE,me.isDepthFormat(this._pixelFormat))throw new T("Cannot call generateMipmap when the texture pixel format is DEPTH_COMPONENT or DEPTH_STENCIL.");if(me.isCompressedFormat(this._pixelFormat))throw new T("Cannot call generateMipmap with a compressed pixel format.");if(!this._context.webgl2){if(this._width>1&&!A.isPowerOfTwo(this._width))throw new T("width must be a power of two to call generateMipmap() in a WebGL1 context.");if(this._height>1&&!A.isPowerOfTwo(this._height))throw new T("height must be a power of two to call generateMipmap() in a WebGL1 context.")}if(!Nr.validate(e))throw new T("hint is invalid.");this._hasMipmap=!0;const t=this._context._gl,n=this._textureTarget;t.hint(t.GENERATE_MIPMAP_HINT,e),t.activeTexture(t.TEXTURE0),t.bindTexture(n,this._texture),t.generateMipmap(n),t.bindTexture(n,null)};St.prototype.isDestroyed=function(){return!1};St.prototype.destroy=function(){return this._context._gl.deleteTexture(this._texture),dt(this)};const Tr={MORPHING:0,COLUMBUS_VIEW:1,SCENE2D:2,SCENE3D:3};Tr.getMorphTime=function(e){return e===Tr.SCENE3D?1:e===Tr.MORPHING?void 0:0};const ke=Object.freeze(Tr),sw={ADD:z.FUNC_ADD,SUBTRACT:z.FUNC_SUBTRACT,REVERSE_SUBTRACT:z.FUNC_REVERSE_SUBTRACT,MIN:z.MIN,MAX:z.MAX},Oo=Object.freeze(sw),cw={ZERO:z.ZERO,ONE:z.ONE,SOURCE_COLOR:z.SRC_COLOR,ONE_MINUS_SOURCE_COLOR:z.ONE_MINUS_SRC_COLOR,DESTINATION_COLOR:z.DST_COLOR,ONE_MINUS_DESTINATION_COLOR:z.ONE_MINUS_DST_COLOR,SOURCE_ALPHA:z.SRC_ALPHA,ONE_MINUS_SOURCE_ALPHA:z.ONE_MINUS_SRC_ALPHA,DESTINATION_ALPHA:z.DST_ALPHA,ONE_MINUS_DESTINATION_ALPHA:z.ONE_MINUS_DST_ALPHA,CONSTANT_COLOR:z.CONSTANT_COLOR,ONE_MINUS_CONSTANT_COLOR:z.ONE_MINUS_CONSTANT_COLOR,CONSTANT_ALPHA:z.CONSTANT_ALPHA,ONE_MINUS_CONSTANT_ALPHA:z.ONE_MINUS_CONSTANT_ALPHA,SOURCE_ALPHA_SATURATE:z.SRC_ALPHA_SATURATE},qt=Object.freeze(cw),lw={DISABLED:Object.freeze({enabled:!1}),ALPHA_BLEND:Object.freeze({enabled:!0,equationRgb:Oo.ADD,equationAlpha:Oo.ADD,functionSourceRgb:qt.SOURCE_ALPHA,functionSourceAlpha:qt.ONE,functionDestinationRgb:qt.ONE_MINUS_SOURCE_ALPHA,functionDestinationAlpha:qt.ONE_MINUS_SOURCE_ALPHA}),PRE_MULTIPLIED_ALPHA_BLEND:Object.freeze({enabled:!0,equationRgb:Oo.ADD,equationAlpha:Oo.ADD,functionSourceRgb:qt.ONE,functionSourceAlpha:qt.ONE,functionDestinationRgb:qt.ONE_MINUS_SOURCE_ALPHA,functionDestinationAlpha:qt.ONE_MINUS_SOURCE_ALPHA}),ADDITIVE_BLEND:Object.freeze({enabled:!0,equationRgb:Oo.ADD,equationAlpha:Oo.ADD,functionSourceRgb:qt.SOURCE_ALPHA,functionSourceAlpha:qt.ONE,functionDestinationRgb:qt.ONE,functionDestinationAlpha:qt.ONE})},Xs=Object.freeze(lw),fw={FRONT:z.FRONT,BACK:z.BACK,FRONT_AND_BACK:z.FRONT_AND_BACK},si=Object.freeze(fw);function Yn(e){e=e??ue.EMPTY_OBJECT,this.material=e.material,this.translucent=e.translucent??!0,this._vertexShaderSource=e.vertexShaderSource,this._fragmentShaderSource=e.fragmentShaderSource,this._renderState=e.renderState,this._closed=e.closed??!1}Object.defineProperties(Yn.prototype,{vertexShaderSource:{get:function(){return this._vertexShaderSource}},fragmentShaderSource:{get:function(){return this._fragmentShaderSource}},renderState:{get:function(){return this._renderState}},closed:{get:function(){return this._closed}}});Yn.prototype.getFragmentShaderSource=function(){const e=[];return this.flat&&e.push("#define FLAT"),this.faceForward&&e.push("#define FACE_FORWARD"),u(this.material)&&e.push(this.material.shaderSource),e.push(this.fragmentShaderSource),e.join(`
`)};Yn.prototype.isTranslucent=function(){return u(this.material)&&this.material.isTranslucent()||!u(this.material)&&this.translucent};Yn.prototype.getRenderState=function(){const e=this.isTranslucent(),t=xt(this.renderState,!1);return e?(t.depthMask=!1,t.blending=Xs.ALPHA_BLEND):t.depthMask=!0,t};Yn.getDefaultRenderState=function(e,t,n){let o={depthTest:{enabled:!0}};return e&&(o.depthMask=!1,o.blending=Xs.ALPHA_BLEND),t&&(o.cull={enabled:!0,face:si.BACK}),u(n)&&(o=Ct(n,o,!0)),o};const uw=`uniform sampler2D image;

czm_material czm_getMaterial(czm_materialInput materialInput)
{
    czm_material material = czm_getDefaultMaterial(materialInput);
    vec4 rampColor = texture(image, vec2(materialInput.aspect / (2.0 * czm_pi), 0.5));
    rampColor = czm_gammaCorrect(rampColor);
    material.diffuse = rampColor.rgb;
    material.alpha = rampColor.a;
    return material;
}
`,hw=`uniform sampler2D image;
uniform float strength;
uniform vec2 repeat;

czm_material czm_getMaterial(czm_materialInput materialInput)
{
    czm_material material = czm_getDefaultMaterial(materialInput);

    vec2 st = materialInput.st;

    vec2 centerPixel = fract(repeat * st);
    float centerBump = texture(image, centerPixel).channel;

    float imageWidth = float(imageDimensions.x);
    vec2 rightPixel = fract(repeat * (st + vec2(1.0 / imageWidth, 0.0)));
    float rightBump = texture(image, rightPixel).channel;

    float imageHeight = float(imageDimensions.y);
    vec2 leftPixel = fract(repeat * (st + vec2(0.0, 1.0 / imageHeight)));
    float topBump = texture(image, leftPixel).channel;

    vec3 normalTangentSpace = normalize(vec3(centerBump - rightBump, centerBump - topBump, clamp(1.0 - strength, 0.1, 1.0)));
    vec3 normalEC = materialInput.tangentToEyeMatrix * normalTangentSpace;

    material.normal = normalEC;
    material.diffuse = vec3(0.01);

    return material;
}
`,dw=`uniform vec4 lightColor;
uniform vec4 darkColor;
uniform vec2 repeat;

czm_material czm_getMaterial(czm_materialInput materialInput)
{
    czm_material material = czm_getDefaultMaterial(materialInput);

    vec2 st = materialInput.st;

    // From Stefan Gustavson's Procedural Textures in GLSL in OpenGL Insights
    float b = mod(floor(repeat.s * st.s) + floor(repeat.t * st.t), 2.0);  // 0.0 or 1.0

    // Find the distance from the closest separator (region between two colors)
    float scaledWidth = fract(repeat.s * st.s);
    scaledWidth = abs(scaledWidth - floor(scaledWidth + 0.5));
    float scaledHeight = fract(repeat.t * st.t);
    scaledHeight = abs(scaledHeight - floor(scaledHeight + 0.5));
    float value = min(scaledWidth, scaledHeight);

    vec4 currentColor = mix(lightColor, darkColor, b);
    vec4 color = czm_antialias(lightColor, darkColor, currentColor, value, 0.03);

    color = czm_gammaCorrect(color);
    material.diffuse = color.rgb;
    material.alpha = color.a;

    return material;
}
`,mw=`uniform vec4 lightColor;
uniform vec4 darkColor;
uniform vec2 repeat;

czm_material czm_getMaterial(czm_materialInput materialInput)
{
    czm_material material = czm_getDefaultMaterial(materialInput);

    // From Stefan Gustavson's Procedural Textures in GLSL in OpenGL Insights
    float b = smoothstep(0.3, 0.32, length(fract(repeat * materialInput.st) - 0.5));  // 0.0 or 1.0

    vec4 color = mix(lightColor, darkColor, b);
    color = czm_gammaCorrect(color);
    material.diffuse = color.rgb;
    material.alpha = color.a;

    return material;
}
`,pw=`uniform sampler2D heights;
uniform sampler2D colors;

// This material expects heights to be sorted from lowest to highest.

float getHeight(int idx, float invTexSize)
{
    vec2 uv = vec2((float(idx) + 0.5) * invTexSize, 0.5);
#ifdef OES_texture_float
    return texture(heights, uv).x;
#else
    return czm_unpackFloat(texture(heights, uv));
#endif
}

czm_material czm_getMaterial(czm_materialInput materialInput)
{
    czm_material material = czm_getDefaultMaterial(materialInput);

    float height = materialInput.height;
    float invTexSize = 1.0 / float(heightsDimensions.x);

    float minHeight = getHeight(0, invTexSize);
    float maxHeight = getHeight(heightsDimensions.x - 1, invTexSize);

    // early-out when outside the height range
    if (height < minHeight || height > maxHeight) {
        material.diffuse = vec3(0.0);
        material.alpha = 0.0;
        return material;
    }

    // Binary search to find heights above and below.
    int idxBelow = 0;
    int idxAbove = heightsDimensions.x;
    float heightBelow = minHeight;
    float heightAbove = maxHeight;

    // while loop not allowed, so use for loop with max iterations.
    // maxIterations of 16 supports a texture size up to 65536 (2^16).
    const int maxIterations = 16;
    for (int i = 0; i < maxIterations; i++) {
        if (idxBelow >= idxAbove - 1) {
            break;
        }

        int idxMid = (idxBelow + idxAbove) / 2;
        float heightTex = getHeight(idxMid, invTexSize);

        if (height > heightTex) {
            idxBelow = idxMid;
            heightBelow = heightTex;
        } else {
            idxAbove = idxMid;
            heightAbove = heightTex;
        }
    }

    float lerper = heightBelow == heightAbove ? 1.0 : (height - heightBelow) / (heightAbove - heightBelow);
    vec2 colorUv = vec2(invTexSize * (float(idxBelow) + 0.5 + lerper), 0.5);
    vec4 color = texture(colors, colorUv);

    // undo preumultiplied alpha
    if (color.a > 0.0) 
    {
        color.rgb /= color.a;
    }
    
    color.rgb = czm_gammaCorrect(color.rgb);

    material.diffuse = color.rgb;
    material.alpha = color.a;
    return material;
}
`,_w=`uniform vec4 color;
uniform float spacing;
uniform float width;

czm_material czm_getMaterial(czm_materialInput materialInput)
{
    czm_material material = czm_getDefaultMaterial(materialInput);

    float distanceToContour = mod(materialInput.height, spacing);

#if (__VERSION__ == 300 || defined(GL_OES_standard_derivatives))
    float dxc = abs(dFdx(materialInput.height));
    float dyc = abs(dFdy(materialInput.height));
    float dF = max(dxc, dyc) * czm_pixelRatio * width;
    float alpha = (distanceToContour < dF) ? 1.0 : 0.0;
#else
    // If no derivatives available (IE 10?), use pixel ratio
    float alpha = (distanceToContour < (czm_pixelRatio * width)) ? 1.0 : 0.0;
#endif

    vec4 outColor = czm_gammaCorrect(vec4(color.rgb, alpha * color.a));
    material.diffuse = outColor.rgb;
    material.alpha = outColor.a;

    return material;
}
`,gw=`uniform sampler2D image;
uniform float minimumHeight;
uniform float maximumHeight;

czm_material czm_getMaterial(czm_materialInput materialInput)
{
    czm_material material = czm_getDefaultMaterial(materialInput);
    float scaledHeight = clamp((materialInput.height - minimumHeight) / (maximumHeight - minimumHeight), 0.0, 1.0);
    vec4 rampColor = texture(image, vec2(scaledHeight, 0.5));
    rampColor = czm_gammaCorrect(rampColor);
    material.diffuse = rampColor.rgb;
    material.alpha = rampColor.a;
    return material;
}
`,yw=`uniform vec4 fadeInColor;
uniform vec4 fadeOutColor;
uniform float maximumDistance;
uniform bool repeat;
uniform vec2 fadeDirection;
uniform vec2 time;

float getTime(float t, float coord)
{
    float scalar = 1.0 / maximumDistance;
    float q  = distance(t, coord) * scalar;
    if (repeat)
    {
        float r = distance(t, coord + 1.0) * scalar;
        float s = distance(t, coord - 1.0) * scalar;
        q = min(min(r, s), q);
    }
    return clamp(q, 0.0, 1.0);
}

czm_material czm_getMaterial(czm_materialInput materialInput)
{
    czm_material material = czm_getDefaultMaterial(materialInput);

    vec2 st = materialInput.st;
    float s = getTime(time.x, st.s) * fadeDirection.s;
    float t = getTime(time.y, st.t) * fadeDirection.t;

    float u = length(vec2(s, t));
    vec4 color = mix(fadeInColor, fadeOutColor, u);

    color = czm_gammaCorrect(color);
    material.emission = color.rgb;
    material.alpha = color.a;

    return material;
}
`,bw=`uniform vec4 color;
uniform float cellAlpha;
uniform vec2 lineCount;
uniform vec2 lineThickness;
uniform vec2 lineOffset;

czm_material czm_getMaterial(czm_materialInput materialInput)
{
    czm_material material = czm_getDefaultMaterial(materialInput);

    vec2 st = materialInput.st;

    float scaledWidth = fract(lineCount.s * st.s - lineOffset.s);
    scaledWidth = abs(scaledWidth - floor(scaledWidth + 0.5));
    float scaledHeight = fract(lineCount.t * st.t - lineOffset.t);
    scaledHeight = abs(scaledHeight - floor(scaledHeight + 0.5));

    float value;

    // Fuzz Factor - Controls blurriness of lines
#if (__VERSION__ == 300 || defined(GL_OES_standard_derivatives))
    const float fuzz = 1.2;
    vec2 thickness = (lineThickness * czm_pixelRatio) - 1.0;

    // From "3D Engine Design for Virtual Globes" by Cozzi and Ring, Listing 4.13.
    vec2 dx = abs(dFdx(st));
    vec2 dy = abs(dFdy(st));
    vec2 dF = vec2(max(dx.s, dy.s), max(dx.t, dy.t)) * lineCount;
    value = min(
        smoothstep(dF.s * thickness.s, dF.s * (fuzz + thickness.s), scaledWidth),
        smoothstep(dF.t * thickness.t, dF.t * (fuzz + thickness.t), scaledHeight));
#else
    // If no derivatives available (IE 10?), revert to view-dependent fuzz
    const float fuzz = 0.05;

    vec2 range = 0.5 - (lineThickness * 0.05);
    value = min(
        1.0 - smoothstep(range.s, range.s + fuzz, scaledWidth),
        1.0 - smoothstep(range.t, range.t + fuzz, scaledHeight));
#endif

    // Edges taken from RimLightingMaterial.glsl
    // See http://www.fundza.com/rman_shaders/surface/fake_rim/fake_rim1.html
    float dRim = 1.0 - abs(dot(materialInput.normalEC, normalize(materialInput.positionToEyeEC)));
    float sRim = smoothstep(0.8, 1.0, dRim);
    value *= (1.0 - sRim);

    vec4 halfColor;
    halfColor.rgb = color.rgb * 0.5;
    halfColor.a = color.a * (1.0 - ((1.0 - cellAlpha) * value));
    halfColor = czm_gammaCorrect(halfColor);
    material.diffuse = halfColor.rgb;
    material.emission = halfColor.rgb;
    material.alpha = halfColor.a;

    return material;
}
`,Tw=`uniform sampler2D image;
uniform float strength;
uniform vec2 repeat;

czm_material czm_getMaterial(czm_materialInput materialInput)
{
    czm_material material = czm_getDefaultMaterial(materialInput);
    
    vec4 textureValue = texture(image, fract(repeat * materialInput.st));
    vec3 normalTangentSpace = textureValue.channels;
    normalTangentSpace.xy = normalTangentSpace.xy * 2.0 - 1.0;
    normalTangentSpace.z = clamp(1.0 - strength, 0.1, 1.0);
    normalTangentSpace = normalize(normalTangentSpace);
    vec3 normalEC = materialInput.tangentToEyeMatrix * normalTangentSpace;
    
    material.normal = normalEC;
    
    return material;
}
`,Ew=`uniform vec4 color;

float getPointOnLine(vec2 p0, vec2 p1, float x)
{
    float slope = (p0.y - p1.y) / (p0.x - p1.x);
    return slope * (x - p0.x) + p0.y;
}

czm_material czm_getMaterial(czm_materialInput materialInput)
{
    czm_material material = czm_getDefaultMaterial(materialInput);

    vec2 st = materialInput.st;

#if (__VERSION__ == 300 || defined(GL_OES_standard_derivatives))
    float base = 1.0 - abs(fwidth(st.s)) * 10.0 * czm_pixelRatio;
#else
     // If no derivatives available (IE 10?), 2.5% of the line will be the arrow head
    float base = 0.975;
#endif

    vec2 center = vec2(1.0, 0.5);
    float ptOnUpperLine = getPointOnLine(vec2(base, 1.0), center, st.s);
    float ptOnLowerLine = getPointOnLine(vec2(base, 0.0), center, st.s);

    float halfWidth = 0.15;
    float s = step(0.5 - halfWidth, st.t);
    s *= 1.0 - step(0.5 + halfWidth, st.t);
    s *= 1.0 - step(base, st.s);

    float t = step(base, materialInput.st.s);
    t *= 1.0 - step(ptOnUpperLine, st.t);
    t *= step(ptOnLowerLine, st.t);

    // Find the distance from the closest separator (region between two colors)
    float dist;
    if (st.s < base)
    {
        float d1 = abs(st.t - (0.5 - halfWidth));
        float d2 = abs(st.t - (0.5 + halfWidth));
        dist = min(d1, d2);
    }
    else
    {
        float d1 = czm_infinity;
        if (st.t < 0.5 - halfWidth && st.t > 0.5 + halfWidth)
        {
            d1 = abs(st.s - base);
        }
        float d2 = abs(st.t - ptOnUpperLine);
        float d3 = abs(st.t - ptOnLowerLine);
        dist = min(min(d1, d2), d3);
    }

    vec4 outsideColor = vec4(0.0);
    vec4 currentColor = mix(outsideColor, color, clamp(s + t, 0.0, 1.0));
    vec4 outColor = czm_antialias(outsideColor, color, currentColor, dist);

    outColor = czm_gammaCorrect(outColor);
    material.diffuse = outColor.rgb;
    material.alpha = outColor.a;
    return material;
}
`,ww=`uniform vec4 color;
uniform vec4 gapColor;
uniform float dashLength;
uniform float dashPattern;
in float v_polylineAngle;

const float maskLength = 16.0;

mat2 rotate(float rad) {
    float c = cos(rad);
    float s = sin(rad);
    return mat2(
        c, s,
        -s, c
    );
}

czm_material czm_getMaterial(czm_materialInput materialInput)
{
    czm_material material = czm_getDefaultMaterial(materialInput);

    vec2 pos = rotate(v_polylineAngle) * gl_FragCoord.xy;

    // Get the relative position within the dash from 0 to 1
    float dashPosition = fract(pos.x / (dashLength * czm_pixelRatio));
    // Figure out the mask index.
    float maskIndex = floor(dashPosition * maskLength);
    // Test the bit mask.
    float maskTest = floor(dashPattern / pow(2.0, maskIndex));
    vec4 fragColor = (mod(maskTest, 2.0) < 1.0) ? gapColor : color;
    if (fragColor.a < 0.005) {   // matches 0/255 and 1/255
        discard;
    }

    fragColor = czm_gammaCorrect(fragColor);
    material.emission = fragColor.rgb;
    material.alpha = fragColor.a;
    return material;
}
`,Aw=`uniform vec4 color;
uniform float glowPower;
uniform float taperPower;

czm_material czm_getMaterial(czm_materialInput materialInput)
{
    czm_material material = czm_getDefaultMaterial(materialInput);

    vec2 st = materialInput.st;
    float glow = glowPower / abs(st.t - 0.5) - (glowPower / 0.5);

    if (taperPower <= 0.99999) {
        glow *= min(1.0, taperPower / (0.5 - st.s * 0.5) - (taperPower / 0.5));
    }

    vec4 fragColor;
    fragColor.rgb = max(vec3(glow - 1.0 + color.rgb), color.rgb);
    fragColor.a = clamp(0.0, 1.0, glow) * color.a;
    fragColor = czm_gammaCorrect(fragColor);

    material.emission = fragColor.rgb;
    material.alpha = fragColor.a;

    return material;
}
`,Ow=`uniform vec4 color;
uniform vec4 outlineColor;
uniform float outlineWidth;

in float v_width;

czm_material czm_getMaterial(czm_materialInput materialInput)
{
    czm_material material = czm_getDefaultMaterial(materialInput);

    vec2 st = materialInput.st;
    float halfInteriorWidth =  0.5 * (v_width - outlineWidth) / v_width;
    float b = step(0.5 - halfInteriorWidth, st.t);
    b *= 1.0 - step(0.5 + halfInteriorWidth, st.t);

    // Find the distance from the closest separator (region between two colors)
    float d1 = abs(st.t - (0.5 - halfInteriorWidth));
    float d2 = abs(st.t - (0.5 + halfInteriorWidth));
    float dist = min(d1, d2);

    vec4 currentColor = mix(outlineColor, color, b);
    vec4 outColor = czm_antialias(outlineColor, color, currentColor, dist);
    outColor = czm_gammaCorrect(outColor);

    material.diffuse = outColor.rgb;
    material.alpha = outColor.a;

    return material;
}
`,Sw=`uniform vec4 color;
uniform vec4 rimColor;
uniform float width;

czm_material czm_getMaterial(czm_materialInput materialInput)
{
    czm_material material = czm_getDefaultMaterial(materialInput);

    // See http://www.fundza.com/rman_shaders/surface/fake_rim/fake_rim1.html
    float d = 1.0 - dot(materialInput.normalEC, normalize(materialInput.positionToEyeEC));
    float s = smoothstep(1.0 - width, 1.0, d);

    vec4 outColor = czm_gammaCorrect(color);
    vec4 outRimColor = czm_gammaCorrect(rimColor);

    material.diffuse = outColor.rgb;
    material.emission = outRimColor.rgb * s;
    material.alpha = mix(outColor.a, outRimColor.a, s);

    return material;
}
`,xw=`uniform sampler2D image;

czm_material czm_getMaterial(czm_materialInput materialInput)
{
    czm_material material = czm_getDefaultMaterial(materialInput);
    vec4 rampColor = texture(image, vec2(materialInput.slope / (czm_pi / 2.0), 0.5));
    rampColor = czm_gammaCorrect(rampColor);
    material.diffuse = rampColor.rgb;
    material.alpha = rampColor.a;
    return material;
}
`,Cw=`uniform vec4 evenColor;
uniform vec4 oddColor;
uniform float offset;
uniform float repeat;
uniform bool horizontal;

czm_material czm_getMaterial(czm_materialInput materialInput)
{
    czm_material material = czm_getDefaultMaterial(materialInput);

    // Based on the Stripes Fragment Shader in the Orange Book (11.1.2)
    float coord = mix(materialInput.st.s, materialInput.st.t, float(horizontal));
    float value = fract((coord - offset) * (repeat * 0.5));
    float dist = min(value, min(abs(value - 0.5), 1.0 - value));

    vec4 currentColor = mix(evenColor, oddColor, step(0.5, value));
    vec4 color = czm_antialias(evenColor, oddColor, currentColor, dist);
    color = czm_gammaCorrect(color);

    material.diffuse = color.rgb;
    material.alpha = color.a;

    return material;
}
`,vw=`uniform vec4 waterColor;
uniform vec4 landColor;

czm_material czm_getMaterial(czm_materialInput materialInput)
{
    czm_material material = czm_getDefaultMaterial(materialInput);

    vec4 outColor = mix(landColor, waterColor, materialInput.waterMask);
    outColor = czm_gammaCorrect(outColor);

    material.diffuse = outColor.rgb;
    material.alpha = outColor.a;

    return material;
}
`,Rw=`// Thanks for the contribution Jonas
// http://29a.ch/2012/7/19/webgl-terrain-rendering-water-fog

uniform sampler2D specularMap;
uniform sampler2D normalMap;
uniform vec4 baseWaterColor;
uniform vec4 blendColor;
uniform float frequency;
uniform float animationSpeed;
uniform float amplitude;
uniform float specularIntensity;
uniform float fadeFactor;

czm_material czm_getMaterial(czm_materialInput materialInput)
{
    czm_material material = czm_getDefaultMaterial(materialInput);

    float time = czm_frameNumber * animationSpeed;

    // fade is a function of the distance from the fragment and the frequency of the waves
    float fade = max(1.0, (length(materialInput.positionToEyeEC) / 10000000000.0) * frequency * fadeFactor);

    float specularMapValue = texture(specularMap, materialInput.st).r;

    // note: not using directional motion at this time, just set the angle to 0.0;
    vec4 noise = czm_getWaterNoise(normalMap, materialInput.st * frequency, time, 0.0);
    vec3 normalTangentSpace = noise.xyz * vec3(1.0, 1.0, (1.0 / amplitude));

    // fade out the normal perturbation as we move further from the water surface
    normalTangentSpace.xy /= fade;

    // attempt to fade out the normal perturbation as we approach non water areas (low specular map value)
    normalTangentSpace = mix(vec3(0.0, 0.0, 50.0), normalTangentSpace, specularMapValue);

    normalTangentSpace = normalize(normalTangentSpace);

    // get ratios for alignment of the new normal vector with a vector perpendicular to the tangent plane
    float tsPerturbationRatio = clamp(dot(normalTangentSpace, vec3(0.0, 0.0, 1.0)), 0.0, 1.0);

    // fade out water effect as specular map value decreases
    material.alpha = mix(blendColor.a, baseWaterColor.a, specularMapValue) * specularMapValue;

    // base color is a blend of the water and non-water color based on the value from the specular map
    // may need a uniform blend factor to better control this
    material.diffuse = mix(blendColor.rgb, baseWaterColor.rgb, specularMapValue);

    // diffuse highlights are based on how perturbed the normal is
    material.diffuse += (0.1 * tsPerturbationRatio);

    material.diffuse = material.diffuse;

    material.normal = normalize(materialInput.tangentToEyeMatrix * normalTangentSpace);

    material.specular = specularIntensity;
    material.shininess = 10.0;

    return material;
}
`;function X(e){this.type=void 0,this.shaderSource=void 0,this.materials=void 0,this.uniforms=void 0,this._uniforms=void 0,this.translucent=void 0,this._minificationFilter=e.minificationFilter??mt.LINEAR,this._magnificationFilter=e.magnificationFilter??fo.LINEAR,this._strict=void 0,this._template=void 0,this._count=void 0,this._texturePaths={},this._loadedImages=[],this._loadedCubeMaps=[],this._textures={},this._updateFunctions=[],this._defaultTexture=void 0,this._initializationPromises=[],this._initializationError=void 0,zw(e,this),Object.defineProperties(this,{type:{value:this.type,writable:!1},minificationFilter:{get:function(){return this._minificationFilter},set:function(t){this._minificationFilter=t}},magnificationFilter:{get:function(){return this._magnificationFilter},set:function(t){this._magnificationFilter=t}}}),u(X._uniformList[this.type])||(X._uniformList[this.type]=Object.keys(this._uniforms))}X._uniformList={};X.fromType=function(e,t){if(!u(X._materialCache.getMaterial(e)))throw new T(`material with type '${e}' does not exist.`);const n=new X({fabric:{type:e}});if(u(t))for(const o in t)t.hasOwnProperty(o)&&(n.uniforms[o]=t[o]);return n};X.fromTypeAsync=async function(e,t){if(!u(X._materialCache.getMaterial(e)))throw new T(`material with type '${e}' does not exist.`);const n=[],o=new X({fabric:{type:e,uniforms:t}});if(Oh(o,n),await Promise.all(n),n.length=0,u(o._initializationError))throw o._initializationError;return o};function Oh(e,t){t.push(...e._initializationPromises);const n=e.materials;for(const o in n)if(n.hasOwnProperty(o)){const i=n[o];Oh(i,t)}}X.prototype.isTranslucent=function(){if(u(this.translucent))return typeof this.translucent=="function"?this.translucent():this.translucent;let e=!0;const t=this._translucentFunctions,n=t.length;for(let o=0;o<n;++o){const i=t[o];if(typeof i=="function"?e=e&&i():e=e&&i,!e)break}return e};X.prototype.update=function(e){this._defaultTexture=e.defaultTexture;let t,n;const o=this._loadedImages;let i=o.length;for(t=0;t<i;++t){const c=o[t];n=c.id;let f=c.image,d;Array.isArray(f)&&(d=f.slice(1,f.length).map(function(b){return b.bufferView}),f=f[0]);const m=new _n({minificationFilter:this._minificationFilter,magnificationFilter:this._magnificationFilter});let p;u(f.internalFormat)?p=new St({context:e,pixelFormat:f.internalFormat,width:f.width,height:f.height,source:{arrayBufferView:f.bufferView,mipLevels:d},sampler:m}):p=new St({context:e,source:f,sampler:m});const _=this._textures[n];u(_)&&_!==this._defaultTexture&&_.destroy(),this._textures[n]=p;const g=`${n}Dimensions`;if(this.uniforms.hasOwnProperty(g)){const b=this.uniforms[g];b.x=p._width,b.y=p._height}}o.length=0;const a=this._loadedCubeMaps;for(i=a.length,t=0;t<i;++t){const c=a[t];n=c.id;const f=c.images,d=new Ne({context:e,source:{positiveX:f[0],negativeX:f[1],positiveY:f[2],negativeY:f[3],positiveZ:f[4],negativeZ:f[5]},sampler:new _n({minificationFilter:this._minificationFilter,magnificationFilter:this._magnificationFilter})});this._textures[n]=d}a.length=0;const r=this._updateFunctions;for(i=r.length,t=0;t<i;++t)r[t](this,e);const s=this.materials;for(const c in s)s.hasOwnProperty(c)&&s[c].update(e)};X.prototype.isDestroyed=function(){return!1};X.prototype.destroy=function(){const e=this._textures;for(const n in e)if(e.hasOwnProperty(n)){const o=e[n];o!==this._defaultTexture&&o.destroy()}const t=this.materials;for(const n in t)t.hasOwnProperty(n)&&t[n].destroy();return dt(this)};function zw(e,t){e=e??ue.EMPTY_OBJECT,t._strict=e.strict??!1,t._count=e.count??0,t._template=xt(e.fabric??ue.EMPTY_OBJECT),t.fabric=xt(e.fabric??ue.EMPTY_OBJECT),t._template.uniforms=xt(t._template.uniforms??ue.EMPTY_OBJECT),t._template.materials=xt(t._template.materials??ue.EMPTY_OBJECT),t.type=u(t._template.type)?t._template.type:Hs(),t.shaderSource="",t.materials={},t.uniforms={},t._uniforms={},t._translucentFunctions=[];let n;const o=X._materialCache.getMaterial(t.type);if(u(o)){const a=xt(o.fabric,!0);t._template=Ct(t._template,a,!0),n=o.translucent}Nw(t),Lw(t),Gw(t),kw(t),u(o)||X._materialCache.addMaterial(t.type,t);const i=t._translucentFunctions.length===0?!0:void 0;if(n=n??i,n=e.translucent??n,u(n))if(typeof n=="function"){const a=function(){return n(t)};t._translucentFunctions.push(a)}else t._translucentFunctions.push(n)}function Pa(e,t,n,o){if(u(e)){for(const i in e)if(e.hasOwnProperty(i)){const a=t.indexOf(i)!==-1;(o&&!a||!o&&a)&&n(i,t)}}}function zl(e,t){let n=`fabric: property name '${e}' is not valid. It should be `;for(let o=0;o<t.length;o++){const i=`'${t[o]}'`;n+=o===t.length-1?`or ${i}.`:`${i}, `}throw new T(n)}function Iw(e,t){const n=`fabric: uniforms and materials cannot share the same property '${e}'`;throw new T(n)}const Pw=["type","materials","uniforms","components","source"],Mw=["diffuse","specular","shininess","normal","emission","alpha"];function Nw(e){const t=e._template,n=t.uniforms,o=t.materials,i=t.components;if(u(i)&&u(t.source))throw new T("fabric: cannot have source and components in the same template.");Pa(t,Pw,zl,!0),Pa(i,Mw,zl,!0);const a=[];for(const r in o)o.hasOwnProperty(r)&&a.push(r);Pa(n,a,Iw,!1)}function Dw(e,t){const n=t._template.materials;for(const o in n)if(n.hasOwnProperty(o)&&e.indexOf(o)>-1)return!0;return!1}function Lw(e){const t=e._template.components,n=e._template.source;if(u(n))e.shaderSource+=`${n}
`;else{if(e.shaderSource+=`czm_material czm_getMaterial(czm_materialInput materialInput)
{
`,e.shaderSource+=`czm_material material = czm_getDefaultMaterial(materialInput);
`,u(t)){const o=Object.keys(e._template.materials).length>0;for(const i in t)if(t.hasOwnProperty(i))if(i==="diffuse"||i==="emission"){const r=o&&Dw(t[i],e)?t[i]:`czm_gammaCorrect(${t[i]})`;e.shaderSource+=`material.${i} = ${r}; 
`}else i==="alpha"?e.shaderSource+=`material.alpha = ${t.alpha}; 
`:e.shaderSource+=`material.${i} = ${t[i]};
`}e.shaderSource+=`return material;
}
`}}const Il={mat2:re,mat3:P,mat4:M},Fw=/\.ktx2$/i;function Bw(e){let t;return function(n,o){const i=n.uniforms,a=i[e],r=t!==a,s=!u(a)||a===X.DefaultImageId;t=a;let c=n._textures[e],f,d;if(a instanceof HTMLVideoElement){if(a.readyState>=2){if(r&&u(c)&&(c!==o.defaultTexture&&c.destroy(),c=void 0),!u(c)||c===o.defaultTexture){const m=new _n({minificationFilter:n._minificationFilter,magnificationFilter:n._magnificationFilter});c=new St({context:o,source:a,sampler:m}),n._textures[e]=c;return}c.copyFrom({source:a})}else u(c)||(n._textures[e]=o.defaultTexture);return}if(a instanceof St&&a!==c){n._texturePaths[e]=void 0;const m=n._textures[e];u(m)&&m!==n._defaultTexture&&m.destroy(),n._textures[e]=a,f=`${e}Dimensions`,i.hasOwnProperty(f)&&(d=i[f],d.x=a._width,d.y=a._height);return}if(r&&u(c)&&s&&(c!==n._defaultTexture&&c.destroy(),c=void 0,n._texturePaths[e]=void 0),u(c)||(c=n._textures[e]=n._defaultTexture,f=`${e}Dimensions`,i.hasOwnProperty(f)&&(d=i[f],d.x=c._width,d.y=c._height)),!s){if((a instanceof HTMLCanvasElement||a instanceof HTMLImageElement||a instanceof ImageBitmap||a instanceof OffscreenCanvas)&&a!==n._texturePaths[e]){n._loadedImages.push({id:e,image:a}),n._texturePaths[e]=a;return}Sh(n,e)}}}function Sh(e,t){const o=e.uniforms[t];if(o===X.DefaultImageId)return Promise.resolve();const i=ee.createIfNeeded(o);if(!(i instanceof ee))return Promise.resolve();const a=ee.createIfNeeded(e._texturePaths[t]);if(!(!u(a)||a.url!==i.url))return Promise.resolve();let s;return Fw.test(i.url)?s=Cu(i.url):s=i.fetchImage(),Promise.resolve(s).then(function(c){e._loadedImages.push({id:t,image:c})}).catch(function(c){e._initializationError=c;const f=e._textures[t];u(f)&&f!==e._defaultTexture&&f.destroy(),e._textures[t]=e._defaultTexture}),e._texturePaths[t]=o,s}function Uw(e){return function(t,n){const o=t.uniforms[e];if(o instanceof Ne){const i=t._textures[e];i!==t._defaultTexture&&i.destroy(),t._texturePaths[e]=void 0,t._textures[e]=o;return}u(t._textures[e])||(t._textures[e]=n.defaultCubeMap),xh(t,e)}}function xh(e,t){const o=e.uniforms[t];if(o===X.DefaultCubeMapId)return Promise.resolve();const i=o.positiveX+o.negativeX+o.positiveY+o.negativeY+o.positiveZ+o.negativeZ;if(i===e._texturePaths[t])return Promise.resolve();const a=[ee.createIfNeeded(o.positiveX).fetchImage(),ee.createIfNeeded(o.negativeX).fetchImage(),ee.createIfNeeded(o.positiveY).fetchImage(),ee.createIfNeeded(o.negativeY).fetchImage(),ee.createIfNeeded(o.positiveZ).fetchImage(),ee.createIfNeeded(o.negativeZ).fetchImage()],r=Promise.all(a);return r.then(function(s){e._loadedCubeMaps.push({id:t,images:s})}).catch(function(s){e._initializationError=s}),e._texturePaths[t]=i,r}function Gw(e){const t=e._template.uniforms;for(const n in t)t.hasOwnProperty(n)&&Ch(e,n)}function Ch(e,t){const n=e._strict,o=e._template.uniforms,i=o[t],a=qw(i);if(!u(a))throw new T(`fabric: uniform '${t}' has invalid type.`);let r;if(a==="channels"){if(r=wi(e,t,i,!1),r===0&&n)throw new T(`strict: shader source does not use channels '${t}'.`)}else{if(a==="sampler2D"){const f=`${t}Dimensions`;Vw(e,f)>0&&(o[f]={type:"ivec3",x:1,y:1},Ch(e,f))}if(!new RegExp(`uniform\\s+${a}\\s+${t}\\s*;`).test(e.shaderSource)){const f=`uniform ${a} ${t};`;e.shaderSource=f+e.shaderSource}const c=`${t}_${e._count++}`;if(r=wi(e,t,c),r===1&&n)throw new T(`strict: shader source does not use uniform '${t}'.`);if(e.uniforms[t]=i,a==="sampler2D")e._uniforms[c]=function(){return e._textures[t]},e._updateFunctions.push(Bw(t)),e._initializationPromises.push(Sh(e,t));else if(a==="samplerCube")e._uniforms[c]=function(){return e._textures[t]},e._updateFunctions.push(Uw(t)),e._initializationPromises.push(xh(e,t));else if(a.indexOf("mat")!==-1){const f=new Il[a];e._uniforms[c]=function(){return Il[a].fromColumnMajorArray(e.uniforms[t],f)}}else e._uniforms[c]=function(){return e.uniforms[t]}}}function qw(e){let t=e.type;if(!u(t)){const n=typeof e;if(n==="number")t="float";else if(n==="boolean")t="bool";else if(n==="string"||e instanceof ee||e instanceof HTMLCanvasElement||e instanceof HTMLImageElement||e instanceof ImageBitmap||e instanceof OffscreenCanvas)/^([rgba]){1,4}$/i.test(e)?t="channels":e===X.DefaultCubeMapId?t="samplerCube":t="sampler2D";else if(n==="object")if(Array.isArray(e))(e.length===4||e.length===9||e.length===16)&&(t=`mat${Math.sqrt(e.length)}`);else{let o=0;for(const i in e)e.hasOwnProperty(i)&&(o+=1);o>=2&&o<=4?t=`vec${o}`:o===6&&(t="samplerCube")}}return t}function kw(e){const t=e._strict,n=e._template.materials;for(const o in n)if(n.hasOwnProperty(o)){const i=new X({strict:t,fabric:n[o],count:e._count});e._count=i._count,e._uniforms=Ct(e._uniforms,i._uniforms,!0),e.materials[o]=i,e._translucentFunctions=e._translucentFunctions.concat(i._translucentFunctions);const a="czm_getMaterial",r=`${a}_${e._count++}`;wi(i,a,r),e.shaderSource=i.shaderSource+e.shaderSource;const s=`${r}(materialInput)`;if(wi(e,o,s)===0&&t)throw new T(`strict: shader source does not use material '${o}'.`)}}function wi(e,t,n,o){o=o??!0;let i=0;const a="([\\w])?",r=`([\\w${o?".":""}])?`,s=new RegExp(r+t+a,"g");return e.shaderSource=e.shaderSource.replace(s,function(c,f,d){return f||d?c:(i+=1,n)}),i}function Vw(e,t,n){return wi(e,t,t,n)}X._materialCache={_materials:{},addMaterial:function(e,t){this._materials[e]=t},getMaterial:function(e){return this._materials[e]}};X.DefaultImageId="czm_defaultImage";X.DefaultCubeMapId="czm_defaultCubeMap";X.ColorType="Color";X._materialCache.addMaterial(X.ColorType,{fabric:{type:X.ColorType,uniforms:{color:new O(1,0,0,.5)},components:{diffuse:"color.rgb",alpha:"color.a"}},translucent:function(e){return e.uniforms.color.alpha<1}});X.ImageType="Image";X._materialCache.addMaterial(X.ImageType,{fabric:{type:X.ImageType,uniforms:{image:X.DefaultImageId,repeat:new U(1,1),color:new O(1,1,1,1)},components:{diffuse:"texture(image, fract(repeat * materialInput.st)).rgb * color.rgb",alpha:"texture(image, fract(repeat * materialInput.st)).a * color.a"}},translucent:function(e){return e.uniforms.color.alpha<1}});X.DiffuseMapType="DiffuseMap";X._materialCache.addMaterial(X.DiffuseMapType,{fabric:{type:X.DiffuseMapType,uniforms:{image:X.DefaultImageId,channels:"rgb",repeat:new U(1,1)},components:{diffuse:"texture(image, fract(repeat * materialInput.st)).channels"}},translucent:!1});X.AlphaMapType="AlphaMap";X._materialCache.addMaterial(X.AlphaMapType,{fabric:{type:X.AlphaMapType,uniforms:{image:X.DefaultImageId,channel:"a",repeat:new U(1,1)},components:{alpha:"texture(image, fract(repeat * materialInput.st)).channel"}},translucent:!0});X.SpecularMapType="SpecularMap";X._materialCache.addMaterial(X.SpecularMapType,{fabric:{type:X.SpecularMapType,uniforms:{image:X.DefaultImageId,channel:"r",repeat:new U(1,1)},components:{specular:"texture(image, fract(repeat * materialInput.st)).channel"}},translucent:!1});X.EmissionMapType="EmissionMap";X._materialCache.addMaterial(X.EmissionMapType,{fabric:{type:X.EmissionMapType,uniforms:{image:X.DefaultImageId,channels:"rgb",repeat:new U(1,1)},components:{emission:"texture(image, fract(repeat * materialInput.st)).channels"}},translucent:!1});X.BumpMapType="BumpMap";X._materialCache.addMaterial(X.BumpMapType,{fabric:{type:X.BumpMapType,uniforms:{image:X.DefaultImageId,channel:"r",strength:.8,repeat:new U(1,1)},source:hw},translucent:!1});X.NormalMapType="NormalMap";X._materialCache.addMaterial(X.NormalMapType,{fabric:{type:X.NormalMapType,uniforms:{image:X.DefaultImageId,channels:"rgb",strength:.8,repeat:new U(1,1)},source:Tw},translucent:!1});X.GridType="Grid";X._materialCache.addMaterial(X.GridType,{fabric:{type:X.GridType,uniforms:{color:new O(0,1,0,1),cellAlpha:.1,lineCount:new U(8,8),lineThickness:new U(1,1),lineOffset:new U(0,0)},source:bw},translucent:function(e){const t=e.uniforms;return t.color.alpha<1||t.cellAlpha<1}});X.StripeType="Stripe";X._materialCache.addMaterial(X.StripeType,{fabric:{type:X.StripeType,uniforms:{horizontal:!0,evenColor:new O(1,1,1,.5),oddColor:new O(0,0,1,.5),offset:0,repeat:5},source:Cw},translucent:function(e){const t=e.uniforms;return t.evenColor.alpha<1||t.oddColor.alpha<1}});X.CheckerboardType="Checkerboard";X._materialCache.addMaterial(X.CheckerboardType,{fabric:{type:X.CheckerboardType,uniforms:{lightColor:new O(1,1,1,.5),darkColor:new O(0,0,0,.5),repeat:new U(5,5)},source:dw},translucent:function(e){const t=e.uniforms;return t.lightColor.alpha<1||t.darkColor.alpha<1}});X.DotType="Dot";X._materialCache.addMaterial(X.DotType,{fabric:{type:X.DotType,uniforms:{lightColor:new O(1,1,0,.75),darkColor:new O(0,1,1,.75),repeat:new U(5,5)},source:mw},translucent:function(e){const t=e.uniforms;return t.lightColor.alpha<1||t.darkColor.alpha<1}});X.WaterType="Water";X._materialCache.addMaterial(X.WaterType,{fabric:{type:X.WaterType,uniforms:{baseWaterColor:new O(.2,.3,.6,1),blendColor:new O(0,1,.699,1),specularMap:X.DefaultImageId,normalMap:X.DefaultImageId,frequency:10,animationSpeed:.01,amplitude:1,specularIntensity:.5,fadeFactor:1},source:Rw},translucent:function(e){const t=e.uniforms;return t.baseWaterColor.alpha<1||t.blendColor.alpha<1}});X.RimLightingType="RimLighting";X._materialCache.addMaterial(X.RimLightingType,{fabric:{type:X.RimLightingType,uniforms:{color:new O(1,0,0,.7),rimColor:new O(1,1,1,.4),width:.3},source:Sw},translucent:function(e){const t=e.uniforms;return t.color.alpha<1||t.rimColor.alpha<1}});X.FadeType="Fade";X._materialCache.addMaterial(X.FadeType,{fabric:{type:X.FadeType,uniforms:{fadeInColor:new O(1,0,0,1),fadeOutColor:new O(0,0,0,0),maximumDistance:.5,repeat:!0,fadeDirection:{x:!0,y:!0},time:new U(.5,.5)},source:yw},translucent:function(e){const t=e.uniforms;return t.fadeInColor.alpha<1||t.fadeOutColor.alpha<1}});X.PolylineArrowType="PolylineArrow";X._materialCache.addMaterial(X.PolylineArrowType,{fabric:{type:X.PolylineArrowType,uniforms:{color:new O(1,1,1,1)},source:Ew},translucent:!0});X.PolylineDashType="PolylineDash";X._materialCache.addMaterial(X.PolylineDashType,{fabric:{type:X.PolylineDashType,uniforms:{color:new O(1,0,1,1),gapColor:new O(0,0,0,0),dashLength:16,dashPattern:255},source:ww},translucent:!0});X.PolylineGlowType="PolylineGlow";X._materialCache.addMaterial(X.PolylineGlowType,{fabric:{type:X.PolylineGlowType,uniforms:{color:new O(0,.5,1,1),glowPower:.25,taperPower:1},source:Aw},translucent:!0});X.PolylineOutlineType="PolylineOutline";X._materialCache.addMaterial(X.PolylineOutlineType,{fabric:{type:X.PolylineOutlineType,uniforms:{color:new O(1,1,1,1),outlineColor:new O(1,0,0,1),outlineWidth:1},source:Ow},translucent:function(e){const t=e.uniforms;return t.color.alpha<1||t.outlineColor.alpha<1}});X.ElevationContourType="ElevationContour";X._materialCache.addMaterial(X.ElevationContourType,{fabric:{type:X.ElevationContourType,uniforms:{spacing:100,color:new O(1,0,0,1),width:1},source:_w},translucent:!1});X.ElevationRampType="ElevationRamp";X._materialCache.addMaterial(X.ElevationRampType,{fabric:{type:X.ElevationRampType,uniforms:{image:X.DefaultImageId,minimumHeight:0,maximumHeight:1e4},source:gw},translucent:!1});X.SlopeRampMaterialType="SlopeRamp";X._materialCache.addMaterial(X.SlopeRampMaterialType,{fabric:{type:X.SlopeRampMaterialType,uniforms:{image:X.DefaultImageId},source:xw},translucent:!1});X.AspectRampMaterialType="AspectRamp";X._materialCache.addMaterial(X.AspectRampMaterialType,{fabric:{type:X.AspectRampMaterialType,uniforms:{image:X.DefaultImageId},source:uw},translucent:!1});X.ElevationBandType="ElevationBand";X._materialCache.addMaterial(X.ElevationBandType,{fabric:{type:X.ElevationBandType,uniforms:{heights:X.DefaultImageId,colors:X.DefaultImageId},source:pw},translucent:!0});X.WaterMaskType="WaterMask";X._materialCache.addMaterial(X.WaterMaskType,{fabric:{type:X.WaterMaskType,source:vw,uniforms:{waterColor:new O(1,1,1,1),landColor:new O(0,0,0,0)}},translucent:!1});const jw={NEVER:z.NEVER,LESS:z.LESS,EQUAL:z.EQUAL,LESS_OR_EQUAL:z.LEQUAL,GREATER:z.GREATER,NOT_EQUAL:z.NOTEQUAL,GREATER_OR_EQUAL:z.GEQUAL,ALWAYS:z.ALWAYS},Hw=Object.freeze(jw);function gn(e,t,n){if(!u(e))throw new T("context is required");if(!u(t))throw new T("attributes is required");if(!u(n))throw new T("numberOfInstances is required");if(this._attributes=t,this._numberOfInstances=n,t.length===0)return;const o=Ww(t),i=e.floatingPointTexture,a=o===he.FLOAT&&!i,r=Yw(t,a),s=Xw(r,t,a),c=Math.floor(ge.maximumTextureSize/s),f=Math.min(n,c),d=s*f,m=Math.ceil(n/f),p=1/d,_=p*.5,g=1/m,b=g*.5;this._textureDimensions=new U(d,m),this._textureStep=new W(p,_,g,b),this._pixelDatatype=a?he.UNSIGNED_BYTE:o,this._packFloats=a,this._offsets=r,this._stride=s,this._texture=void 0;const E=4*d*m;this._batchValues=o===he.FLOAT&&!a?new Float32Array(E):new Uint8Array(E),this._batchValuesDirty=!1}Object.defineProperties(gn.prototype,{attributes:{get:function(){return this._attributes}},numberOfInstances:{get:function(){return this._numberOfInstances}}});function Ww(e){let t=!1;const n=e.length;for(let o=0;o<n;++o)if(e[o].componentDatatype!==oe.UNSIGNED_BYTE){t=!0;break}return t?he.FLOAT:he.UNSIGNED_BYTE}function vh(e,t){const n=e[t].componentsPerAttribute;return n===2?U:n===3?l:n===4?W:Number}function Yw(e,t){const n=new Array(e.length);let o=0;const i=e.length;for(let a=0;a<i;++a){const s=e[a].componentDatatype;n[a]=o,s!==oe.UNSIGNED_BYTE&&t?o+=4:++o}return n}function Xw(e,t,n){const o=e.length,i=e[o-1];return t[o-1].componentDatatype!==oe.UNSIGNED_BYTE&&n?i+4:i+1}const ci=new W;function $w(e,t,n){let o=W.unpack(e,t,ci);const i=W.unpackFloat(o);o=W.unpack(e,t+4,ci);const a=W.unpackFloat(o);o=W.unpack(e,t+8,ci);const r=W.unpackFloat(o);o=W.unpack(e,t+12,ci);const s=W.unpackFloat(o);return W.fromElements(i,a,r,s,n)}function Zw(e,t,n){let o=W.packFloat(e.x,ci);W.pack(o,t,n),o=W.packFloat(e.y,o),W.pack(o,t,n+4),o=W.packFloat(e.z,o),W.pack(o,t,n+8),o=W.packFloat(e.w,o),W.pack(o,t,n+12)}const Pl=new W;gn.prototype.getBatchedAttribute=function(e,t,n){if(e<0||e>=this._numberOfInstances)throw new T("instanceIndex is out of range.");if(t<0||t>=this._attributes.length)throw new T("attributeIndex is out of range");const o=this._attributes,i=this._offsets[t],r=4*this._stride*e+4*i;let s;this._packFloats&&o[t].componentDatatype!==he.UNSIGNED_BYTE?s=$w(this._batchValues,r,Pl):s=W.unpack(this._batchValues,r,Pl);const c=vh(o,t);return u(c.fromCartesian4)?c.fromCartesian4(s,n):u(c.clone)?c.clone(s,n):s.x};const Kw=[void 0,void 0,new U,new l,new W],Qw=new W;gn.prototype.setBatchedAttribute=function(e,t,n){if(e<0||e>=this._numberOfInstances)throw new T("instanceIndex is out of range.");if(t<0||t>=this._attributes.length)throw new T("attributeIndex is out of range");if(!u(n))throw new T("value is required.");const o=this._attributes,i=Kw[o[t].componentsPerAttribute],a=this.getBatchedAttribute(e,t,i),r=vh(this._attributes,t);if(u(r.equals)?r.equals(a,n):a===n)return;const c=Qw;c.x=u(n.x)?n.x:n,c.y=u(n.y)?n.y:0,c.z=u(n.z)?n.z:0,c.w=u(n.w)?n.w:0;const f=this._offsets[t],m=4*this._stride*e+4*f;this._packFloats&&o[t].componentDatatype!==he.UNSIGNED_BYTE?Zw(c,this._batchValues,m):W.pack(c,this._batchValues,m),this._batchValuesDirty=!0};function Jw(e,t){const n=e._textureDimensions;e._texture=new St({context:t,pixelFormat:me.RGBA,pixelDatatype:e._pixelDatatype,width:n.x,height:n.y,sampler:_n.NEAREST,flipY:!1})}function e1(e){const t=e._textureDimensions;e._texture.copyFrom({source:{width:t.x,height:t.y,arrayBufferView:e._batchValues}})}gn.prototype.update=function(e){u(this._texture)&&!this._batchValuesDirty||this._attributes.length===0||(this._batchValuesDirty=!1,u(this._texture)||Jw(this,e.context),e1(this))};gn.prototype.getUniformMapCallback=function(){const e=this;return function(t){return e._attributes.length===0?t:Ct(t,{batchTexture:function(){return e._texture},batchTextureDimensions:function(){return e._textureDimensions},batchTextureStep:function(){return e._textureStep}})}};function t1(e){const t=e._stride;return e._textureDimensions.y===1?`uniform vec4 batchTextureStep; 
vec2 computeSt(float batchId) 
{ 
    float stepX = batchTextureStep.x; 
    float centerX = batchTextureStep.y; 
    float numberOfAttributes = float(${t}); 
    return vec2(centerX + (batchId * numberOfAttributes * stepX), 0.5); 
} 
`:`uniform vec4 batchTextureStep; 
uniform vec2 batchTextureDimensions; 
vec2 computeSt(float batchId) 
{ 
    float stepX = batchTextureStep.x; 
    float centerX = batchTextureStep.y; 
    float stepY = batchTextureStep.z; 
    float centerY = batchTextureStep.w; 
    float numberOfAttributes = float(${t}); 
    float xId = mod(batchId * numberOfAttributes, batchTextureDimensions.x); 
    float yId = floor(batchId * numberOfAttributes / batchTextureDimensions.x); 
    return vec2(centerX + (xId * stepX), centerY + (yId * stepY)); 
} 
`}function n1(e){return e===1?"float":`vec${e}`}function o1(e){return e===1?".x":e===2?".xy":e===3?".xyz":""}function i1(e,t){const o=e._attributes[t],i=o.componentsPerAttribute,a=o.functionName,r=n1(i),s=o1(i),c=e._offsets[t];let f=`${r} ${a}(float batchId) 
{ 
    vec2 st = computeSt(batchId); 
    st.x += batchTextureStep.x * float(${c}); 
`;return e._packFloats&&o.componentDatatype!==he.UNSIGNED_BYTE?f+=`vec4 textureValue; 
textureValue.x = czm_unpackFloat(texture(batchTexture, st)); 
textureValue.y = czm_unpackFloat(texture(batchTexture, st + vec2(batchTextureStep.x, 0.0))); 
textureValue.z = czm_unpackFloat(texture(batchTexture, st + vec2(batchTextureStep.x * 2.0, 0.0))); 
textureValue.w = czm_unpackFloat(texture(batchTexture, st + vec2(batchTextureStep.x * 3.0, 0.0))); 
`:f+=`    vec4 textureValue = texture(batchTexture, st); 
`,f+=`    ${r} value = textureValue${s}; 
`,e._pixelDatatype===he.UNSIGNED_BYTE&&o.componentDatatype===oe.UNSIGNED_BYTE&&!o.normalize?f+=`value *= 255.0; 
`:e._pixelDatatype===he.FLOAT&&o.componentDatatype===oe.UNSIGNED_BYTE&&o.normalize&&(f+=`value /= 255.0; 
`),f+=`    return value; 
} 
`,f}gn.prototype.getVertexShaderCallback=function(){const e=this._attributes;if(e.length===0)return function(o){return o};let t=`uniform highp sampler2D batchTexture; 
`;t+=`${t1(this)}
`;const n=e.length;for(let o=0;o<n;++o)t+=i1(this,o);return function(o){const i=o.indexOf("void main"),a=o.substring(0,i),r=o.substring(i);return`${a}
${t}
${r}`}};gn.prototype.isDestroyed=function(){return!1};gn.prototype.destroy=function(){return this._texture=this._texture&&this._texture.destroy(),dt(this)};function r1(e,t,n){let o=!n;const i=e.length;let a;if(!o&&i>1){const r=e[0].modelMatrix;for(a=1;a<i;++a)if(!M.equals(r,e[a].modelMatrix)){o=!0;break}}if(o)for(a=0;a<i;++a)u(e[a].geometry)&&ze.transformToWorldCoordinates(e[a]);else M.multiplyTransformation(t,e[0].modelMatrix,t)}function Ma(e,t){const n=e.attributes,o=n.position,i=o.values.length/o.componentsPerAttribute;n.batchId=new Oe({componentDatatype:oe.FLOAT,componentsPerAttribute:1,values:new Float32Array(i)});const a=n.batchId.values;for(let r=0;r<i;++r)a[r]=t}function a1(e){const t=e.length;for(let n=0;n<t;++n){const o=e[n];u(o.geometry)?Ma(o.geometry,n):u(o.westHemisphereGeometry)&&u(o.eastHemisphereGeometry)&&(Ma(o.westHemisphereGeometry,n),Ma(o.eastHemisphereGeometry,n))}}function s1(e){const t=e.instances,n=e.projection,o=e.elementIndexUintSupported,i=e.scene3DOnly,a=e.vertexCacheOptimize,r=e.compressVertices,s=e.modelMatrix;let c,f,d,m=t.length;for(c=0;c<m;++c)if(u(t[c].geometry)){d=t[c].geometry.primitiveType;break}for(c=1;c<m;++c)if(u(t[c].geometry)&&t[c].geometry.primitiveType!==d)throw new T("All instance geometries must have the same primitiveType.");if(r1(t,s,i),!i)for(c=0;c<m;++c)u(t[c].geometry)&&ze.splitLongitude(t[c]);if(a1(t),a)for(c=0;c<m;++c){const _=t[c];u(_.geometry)?(ze.reorderForPostVertexCache(_.geometry),ze.reorderForPreVertexCache(_.geometry)):u(_.westHemisphereGeometry)&&u(_.eastHemisphereGeometry)&&(ze.reorderForPostVertexCache(_.westHemisphereGeometry),ze.reorderForPreVertexCache(_.westHemisphereGeometry),ze.reorderForPostVertexCache(_.eastHemisphereGeometry),ze.reorderForPreVertexCache(_.eastHemisphereGeometry))}let p=ze.combineInstances(t);for(m=p.length,c=0;c<m;++c){f=p[c];const _=f.attributes;if(i)for(const g in _)_.hasOwnProperty(g)&&_[g].componentDatatype===oe.DOUBLE&&ze.encodeAttribute(f,g,`${g}3DHigh`,`${g}3DLow`);else for(const g in _)if(_.hasOwnProperty(g)&&_[g].componentDatatype===oe.DOUBLE){const b=`${g}3D`,E=`${g}2D`;ze.projectTo2D(f,g,b,E,n),u(f.boundingSphere)&&g==="position"&&(f.boundingSphereCV=Q.fromVertices(f.attributes.position2D.values)),ze.encodeAttribute(f,b,`${b}High`,`${b}Low`),ze.encodeAttribute(f,E,`${E}High`,`${E}Low`)}r&&ze.compressVertices(f)}if(!o){let _=[];for(m=p.length,c=0;c<m;++c)f=p[c],_=_.concat(ze.fitToUnsignedShortIndices(f));p=_}return p}function Na(e,t,n,o){let i,a,r;const s=o.length-1;if(s>=0){const f=o[s];i=f.offset+f.count,r=f.index,a=n[r].indices.length}else i=0,r=0,a=n[r].indices.length;const c=e.length;for(let f=0;f<c;++f){const m=e[f][t];if(!u(m))continue;const p=m.indices.length;i+p>a&&(i=0,a=n[++r].indices.length),o.push({index:r,offset:i,count:p}),i+=p}}function c1(e,t){const n=[];return Na(e,"geometry",t,n),Na(e,"westHemisphereGeometry",t,n),Na(e,"eastHemisphereGeometry",t,n),n}const nn={};nn.combineGeometry=function(e){let t,n;const o=e.instances,i=o.length;let a,r,s=!1;i>0&&(t=s1(e),t.length>0&&(n=ze.createAttributeLocations(t[0]),e.createPickOffsets&&(a=c1(o,t))),u(o[0].attributes)&&u(o[0].attributes.offset)&&(r=new Array(i),s=!0));const c=new Array(i),f=new Array(i);for(let d=0;d<i;++d){const m=o[d],p=m.geometry;u(p)&&(c[d]=p.boundingSphere,f[d]=p.boundingSphereCV,s&&(r[d]=m.geometry.offsetAttribute));const _=m.eastHemisphereGeometry,g=m.westHemisphereGeometry;u(_)&&u(g)&&(u(_.boundingSphere)&&u(g.boundingSphere)&&(c[d]=Q.union(_.boundingSphere,g.boundingSphere)),u(_.boundingSphereCV)&&u(g.boundingSphereCV)&&(f[d]=Q.union(_.boundingSphereCV,g.boundingSphereCV)))}return{geometries:t,modelMatrix:e.modelMatrix,attributeLocations:n,pickOffsets:a,offsetInstanceExtend:r,boundingSpheres:c,boundingSpheresCV:f}};function l1(e,t){const n=e.attributes;for(const o in n)if(n.hasOwnProperty(o)){const i=n[o];u(i)&&u(i.values)&&t.push(i.values.buffer)}u(e.indices)&&t.push(e.indices.buffer)}function f1(e,t){const n=e.length;for(let o=0;o<n;++o)l1(e[o],t)}function u1(e){let t=1;const n=e.length;for(let o=0;o<n;o++){const i=e[o];if(++t,!u(i))continue;const a=i.attributes;t+=7+2*Q.packedLength+(u(i.indices)?i.indices.length:0);for(const r in a)if(a.hasOwnProperty(r)&&u(a[r])){const s=a[r];t+=5+s.values.length}}return t}nn.packCreateGeometryResults=function(e,t){const n=new Float64Array(u1(e)),o=[],i={},a=e.length;let r=0;n[r++]=a;for(let s=0;s<a;s++){const c=e[s],f=u(c);if(n[r++]=f?1:0,!f)continue;n[r++]=c.primitiveType,n[r++]=c.geometryType,n[r++]=c.offsetAttribute??-1;const d=u(c.boundingSphere)?1:0;n[r++]=d,d&&Q.pack(c.boundingSphere,n,r),r+=Q.packedLength;const m=u(c.boundingSphereCV)?1:0;n[r++]=m,m&&Q.pack(c.boundingSphereCV,n,r),r+=Q.packedLength;const p=c.attributes,_=[];for(const b in p)p.hasOwnProperty(b)&&u(p[b])&&(_.push(b),u(i[b])||(i[b]=o.length,o.push(b)));n[r++]=_.length;for(let b=0;b<_.length;b++){const E=_[b],v=p[E];n[r++]=i[E],n[r++]=v.componentDatatype,n[r++]=v.componentsPerAttribute,n[r++]=v.normalize?1:0,n[r++]=v.values.length,n.set(v.values,r),r+=v.values.length}const g=u(c.indices)?c.indices.length:0;n[r++]=g,g>0&&(n.set(c.indices,r),r+=g)}return t.push(n.buffer),{stringTable:o,packedData:n}};nn.unpackCreateGeometryResults=function(e){const t=e.stringTable,n=e.packedData;let o;const i=new Array(n[0]);let a=0,r=1;for(;r<n.length;){if(!(n[r++]===1)){i[a++]=void 0;continue}const c=n[r++],f=n[r++];let d=n[r++];d===-1&&(d=void 0);let m,p;n[r++]===1&&(m=Q.unpack(n,r)),r+=Q.packedLength,n[r++]===1&&(p=Q.unpack(n,r)),r+=Q.packedLength;let b,E,v;const C=new Ci,x=n[r++];for(o=0;o<x;o++){const N=t[n[r++]],F=n[r++];v=n[r++];const q=n[r++]!==0;b=n[r++],E=oe.createTypedArray(F,b);for(let D=0;D<b;D++)E[D]=n[r++];C[N]=new Oe({componentDatatype:F,componentsPerAttribute:v,normalize:q,values:E})}let R;if(b=n[r++],b>0){const N=E.length/v;for(R=$e.createTypedArray(N,b),o=0;o<b;o++)R[o]=n[r++]}i[a++]=new Le({primitiveType:c,geometryType:f,boundingSphere:m,boundingSphereCV:p,indices:R,attributes:C,offsetAttribute:d})}return i};function h1(e,t){const n=e.length,o=new Float64Array(1+n*19);let i=0;o[i++]=n;for(let a=0;a<n;a++){const r=e[a];if(M.pack(r.modelMatrix,o,i),i+=M.packedLength,u(r.attributes)&&u(r.attributes.offset)){const s=r.attributes.offset.value;o[i]=s[0],o[i+1]=s[1],o[i+2]=s[2]}i+=3}return t.push(o.buffer),o}function d1(e){const t=e,n=new Array(t[0]);let o=0,i=1;for(;i<t.length;){const a=M.unpack(t,i);let r;i+=M.packedLength,u(t[i])&&(r={offset:new Ei(t[i],t[i+1],t[i+2])}),i+=3,n[o++]={modelMatrix:a,attributes:r}}return n}nn.packCombineGeometryParameters=function(e,t){const n=e.createGeometryResults,o=n.length;for(let i=0;i<o;i++)t.push(n[i].packedData.buffer);return{createGeometryResults:e.createGeometryResults,packedInstances:h1(e.instances,t),ellipsoid:e.ellipsoid,isGeographic:e.projection instanceof In,elementIndexUintSupported:e.elementIndexUintSupported,scene3DOnly:e.scene3DOnly,vertexCacheOptimize:e.vertexCacheOptimize,compressVertices:e.compressVertices,modelMatrix:e.modelMatrix,createPickOffsets:e.createPickOffsets}};nn.unpackCombineGeometryParameters=function(e){const t=d1(e.packedInstances),n=e.createGeometryResults,o=n.length;let i=0;for(let s=0;s<o;s++){const c=nn.unpackCreateGeometryResults(n[s]),f=c.length;for(let d=0;d<f;d++){const m=c[d],p=t[i];p.geometry=m,++i}}const a=ae.clone(e.ellipsoid),r=e.isGeographic?new In(a):new Pt(a);return{instances:t,ellipsoid:a,projection:r,elementIndexUintSupported:e.elementIndexUintSupported,scene3DOnly:e.scene3DOnly,vertexCacheOptimize:e.vertexCacheOptimize,compressVertices:e.compressVertices,modelMatrix:M.clone(e.modelMatrix),createPickOffsets:e.createPickOffsets}};function Ml(e){const t=e.length,n=1+(Q.packedLength+1)*t,o=new Float32Array(n);let i=0;o[i++]=t;for(let a=0;a<t;++a){const r=e[a];u(r)?(o[i++]=1,Q.pack(e[a],o,i)):o[i++]=0,i+=Q.packedLength}return o}function Nl(e){const t=new Array(e[0]);let n=0,o=1;for(;o<e.length;)e[o++]===1&&(t[n]=Q.unpack(e,o)),++n,o+=Q.packedLength;return t}nn.packCombineGeometryResults=function(e,t){u(e.geometries)&&f1(e.geometries,t);const n=Ml(e.boundingSpheres),o=Ml(e.boundingSpheresCV);return t.push(n.buffer,o.buffer),{geometries:e.geometries,attributeLocations:e.attributeLocations,modelMatrix:e.modelMatrix,pickOffsets:e.pickOffsets,offsetInstanceExtend:e.offsetInstanceExtend,boundingSpheres:n,boundingSpheresCV:o}};nn.unpackCombineGeometryResults=function(e){return{geometries:e.geometries,attributeLocations:e.attributeLocations,modelMatrix:e.modelMatrix,pickOffsets:e.pickOffsets,offsetInstanceExtend:e.offsetInstanceExtend,boundingSpheres:Nl(e.boundingSpheres),boundingSpheresCV:Nl(e.boundingSpheresCV)}};const m1={READY:0,CREATING:1,CREATED:2,COMBINING:3,COMBINED:4,COMPLETE:5,FAILED:6},et=Object.freeze(m1),Lt={DISABLED:0,ENABLED:1,CAST_ONLY:2,RECEIVE_ONLY:3};Lt.NUMBER_OF_SHADOW_MODES=4;Lt.castShadows=function(e){return e===Lt.ENABLED||e===Lt.CAST_ONLY};Lt.receiveShadows=function(e){return e===Lt.ENABLED||e===Lt.RECEIVE_ONLY};Lt.fromCastReceive=function(e,t){return e&&t?Lt.ENABLED:e?Lt.CAST_ONLY:t?Lt.RECEIVE_ONLY:Lt.DISABLED};const hs=Object.freeze(Lt);function Ge(e){if(e=e??ue.EMPTY_OBJECT,this.geometryInstances=e.geometryInstances,this.appearance=e.appearance,this._appearance=void 0,this._material=void 0,this.depthFailAppearance=e.depthFailAppearance,this._depthFailAppearance=void 0,this._depthFailMaterial=void 0,this.modelMatrix=M.clone(e.modelMatrix??M.IDENTITY),this._modelMatrix=new M,this.show=e.show??!0,this._vertexCacheOptimize=e.vertexCacheOptimize??!1,this._interleave=e.interleave??!1,this._releaseGeometryInstances=e.releaseGeometryInstances??!0,this._allowPicking=e.allowPicking??!0,this._asynchronous=e.asynchronous??!0,this._compressVertices=e.compressVertices??!0,this.cull=e.cull??!0,this.debugShowBoundingVolume=e.debugShowBoundingVolume??!1,this.rtcCenter=e.rtcCenter,u(this.rtcCenter)&&(!u(this.geometryInstances)||Array.isArray(this.geometryInstances)&&this.geometryInstances.length!==1))throw new T("Relative-to-center rendering only supports one geometry instance.");this.shadows=e.shadows??hs.DISABLED,this._translucent=void 0,this._state=et.READY,this._geometries=[],this._error=void 0,this._numberOfInstances=0,this._boundingSpheres=[],this._boundingSphereWC=[],this._boundingSphereCV=[],this._boundingSphere2D=[],this._boundingSphereMorph=[],this._perInstanceAttributeCache=new Map,this._instanceIds=[],this._lastPerInstanceAttributeIndex=0,this._va=[],this._attributeLocations=void 0,this._primitiveType=void 0,this._frontFaceRS=void 0,this._backFaceRS=void 0,this._sp=void 0,this._depthFailAppearance=void 0,this._spDepthFail=void 0,this._frontFaceDepthFailRS=void 0,this._backFaceDepthFailRS=void 0,this._pickIds=[],this._colorCommands=[],this._pickCommands=[],this._createBoundingVolumeFunction=e._createBoundingVolumeFunction,this._createRenderStatesFunction=e._createRenderStatesFunction,this._createShaderProgramFunction=e._createShaderProgramFunction,this._createCommandsFunction=e._createCommandsFunction,this._updateAndQueueCommandsFunction=e._updateAndQueueCommandsFunction,this._createPickOffsets=e._createPickOffsets,this._pickOffsets=void 0,this._createGeometryResults=void 0,this._ready=!1,this._batchTable=void 0,this._batchTableAttributeIndices=void 0,this._offsetInstanceExtend=void 0,this._batchTableOffsetAttribute2DIndex=void 0,this._batchTableOffsetsUpdated=!1,this._instanceBoundingSpheres=void 0,this._instanceBoundingSpheresCV=void 0,this._tempBoundingSpheres=void 0,this._recomputeBoundingSpheres=!1,this._batchTableBoundingSpheresUpdated=!1,this._batchTableBoundingSphereAttributeIndices=void 0}Object.defineProperties(Ge.prototype,{vertexCacheOptimize:{get:function(){return this._vertexCacheOptimize}},interleave:{get:function(){return this._interleave}},releaseGeometryInstances:{get:function(){return this._releaseGeometryInstances}},allowPicking:{get:function(){return this._allowPicking}},asynchronous:{get:function(){return this._asynchronous}},compressVertices:{get:function(){return this._compressVertices}},ready:{get:function(){return this._ready}}});function p1(e){const t=e.length,n=[],o=e[0].attributes;let i;for(i in o)if(o.hasOwnProperty(i)&&u(o[i])){const a=o[i];let r=!0;for(let s=1;s<t;++s){const c=e[s].attributes[i];if(!u(c)||a.componentDatatype!==c.componentDatatype||a.componentsPerAttribute!==c.componentsPerAttribute||a.normalize!==c.normalize){r=!1;break}}r&&n.push(i)}return n}const _1=new U,g1=new l,Rh=new W;function zh(e){const t=e.length;if(t===1)return e[0];if(t===2)return U.unpack(e,0,_1);if(t===3)return l.unpack(e,0,g1);if(t===4)return W.unpack(e,0,Rh)}function y1(e,t){const n=e.geometryInstances,o=Array.isArray(n)?n:[n],i=o.length;if(i===0)return;const a=p1(o),r=a.length,s=[],c={},f={};let d,p=o[0].attributes,_,g,b;for(_=0;_<r;++_)g=a[_],b=p[g],c[g]=_,s.push({functionName:`czm_batchTable_${g}`,componentDatatype:b.componentDatatype,componentsPerAttribute:b.componentsPerAttribute,normalize:b.normalize});a.indexOf("distanceDisplayCondition")!==-1&&(s.push({functionName:"czm_batchTable_boundingSphereCenter3DHigh",componentDatatype:oe.FLOAT,componentsPerAttribute:3},{functionName:"czm_batchTable_boundingSphereCenter3DLow",componentDatatype:oe.FLOAT,componentsPerAttribute:3},{functionName:"czm_batchTable_boundingSphereCenter2DHigh",componentDatatype:oe.FLOAT,componentsPerAttribute:3},{functionName:"czm_batchTable_boundingSphereCenter2DLow",componentDatatype:oe.FLOAT,componentsPerAttribute:3},{functionName:"czm_batchTable_boundingSphereRadius",componentDatatype:oe.FLOAT,componentsPerAttribute:1}),f.center3DHigh=s.length-5,f.center3DLow=s.length-4,f.center2DHigh=s.length-3,f.center2DLow=s.length-2,f.radius=s.length-1),a.indexOf("offset")!==-1&&(s.push({functionName:"czm_batchTable_offset2D",componentDatatype:oe.FLOAT,componentsPerAttribute:3}),d=s.length-1),s.push({functionName:"czm_batchTable_pickColor",componentDatatype:oe.UNSIGNED_BYTE,componentsPerAttribute:4,normalize:!0});const E=s.length,v=new gn(t,s,i);for(_=0;_<i;++_){const C=o[_];p=C.attributes;for(let q=0;q<r;++q){g=a[q],b=p[g];const D=zh(b.value),B=c[g];v.setBatchedAttribute(_,B,D)}const x={primitive:C.pickPrimitive??e};u(C.id)&&(x.id=C.id);const R=t.createPickId(x);e._pickIds.push(R);const N=R.color,F=Rh;F.x=O.floatToByte(N.red),F.y=O.floatToByte(N.green),F.z=O.floatToByte(N.blue),F.w=O.floatToByte(N.alpha),v.setBatchedAttribute(_,E-1,F)}e._batchTable=v,e._batchTableAttributeIndices=c,e._batchTableBoundingSphereAttributeIndices=f,e._batchTableOffsetAttribute2DIndex=d}function b1(e){let t;return Array.isArray(e.values)?t=e.values.slice(0):t=new e.values.constructor(e.values),new Oe({componentDatatype:e.componentDatatype,componentsPerAttribute:e.componentsPerAttribute,normalize:e.normalize,values:t})}function T1(e){const t=e.attributes,n=new Ci;for(const i in t)t.hasOwnProperty(i)&&u(t[i])&&(n[i]=b1(t[i]));let o;if(u(e.indices)){const i=e.indices;Array.isArray(i)?o=i.slice(0):o=new i.constructor(i)}return new Le({attributes:n,indices:o,primitiveType:e.primitiveType,boundingSphere:Q.clone(e.boundingSphere)})}function E1(e,t){return{geometry:t,attributes:e.attributes,modelMatrix:M.clone(e.modelMatrix),pickPrimitive:e.pickPrimitive,id:e.id}}const w1=/in\s+vec(?:3|4)\s+(.*)3DHigh;/g;Ge._modifyShaderPosition=function(e,t,n){let o,i="",a="",r="";for(;(o=w1.exec(t))!==null;){const s=o[1],c=`vec4 czm_compute${s[0].toUpperCase()}${s.substr(1)}()`;c!=="vec4 czm_computePosition()"&&(i+=`${c};
`),u(e.rtcCenter)?(t=t.replace(/in\s+vec(?:3|4)\s+position3DHigh;/g,""),t=t.replace(/in\s+vec(?:3|4)\s+position3DLow;/g,""),i+=`uniform mat4 u_modifiedModelView;
`,a+=`in vec4 position;
`,r+=`${c}
{
    return u_modifiedModelView * position;
}

`,t=t.replace(/czm_modelViewRelativeToEye\s+\*\s+/g,""),t=t.replace(/czm_modelViewProjectionRelativeToEye/g,"czm_projection")):n?r+=`${c}
{
    return czm_translateRelativeToEye(${s}3DHigh, ${s}3DLow);
}

`:(a+=`in vec3 ${s}2DHigh;
in vec3 ${s}2DLow;
`,r+=`${c}
{
    vec4 p;
    if (czm_morphTime == 1.0)
    {
        p = czm_translateRelativeToEye(${s}3DHigh, ${s}3DLow);
    }
    else if (czm_morphTime == 0.0)
    {
        p = czm_translateRelativeToEye(${s}2DHigh.zxy, ${s}2DLow.zxy);
    }
    else
    {
        p = czm_columbusViewMorph(
                czm_translateRelativeToEye(${s}2DHigh.zxy, ${s}2DLow.zxy),
                czm_translateRelativeToEye(${s}3DHigh, ${s}3DLow),
                czm_morphTime);
    }
    return p;
}

`)}return[i,a,t,r].join(`
`)};Ge._appendShowToShader=function(e,t){return u(e._batchTableAttributeIndices.show)?`${Ue.replaceMain(t,"czm_non_show_main")}
void main() 
{ 
    czm_non_show_main(); 
    gl_Position *= czm_batchTable_show(batchId); 
}`:t};Ge._updateColorAttribute=function(e,t,n){if(!u(e._batchTableAttributeIndices.color)&&!u(e._batchTableAttributeIndices.depthFailColor)||t.search(/in\s+vec4\s+color;/g)===-1)return t;if(n&&!u(e._batchTableAttributeIndices.depthFailColor))throw new T("A depthFailColor per-instance attribute is required when using a depth fail appearance that uses a color attribute.");let o=t;return o=o.replace(/in\s+vec4\s+color;/g,""),n?o=o.replace(/(\b)color(\b)/g,"$1czm_batchTable_depthFailColor(batchId)$2"):o=o.replace(/(\b)color(\b)/g,"$1czm_batchTable_color(batchId)$2"),o};function Dl(e){return`${Ue.replaceMain(e,"czm_non_pick_main")}
out vec4 v_pickColor; 
void main() 
{ 
    czm_non_pick_main(); 
    v_pickColor = czm_batchTable_pickColor(batchId); 
}`}function Ll(e){return`in vec4 v_pickColor;
${e}`}Ge._updatePickColorAttribute=function(e){let t=e.replace(/in\s+vec4\s+pickColor;/g,"");return t=t.replace(/(\b)pickColor(\b)/g,"$1czm_batchTable_pickColor(batchId)$2"),t};Ge._appendOffsetToShader=function(e,t){if(!u(e._batchTableAttributeIndices.offset))return t;let n=`in float batchId;
`;n+="in float applyOffset;";let o=t.replace(/in\s+float\s+batchId;/g,n),i=`vec4 $1 = czm_computePosition();
`;return i+=`    if (czm_sceneMode == czm_sceneMode3D)
`,i+=`    {
`,i+="        $1 = $1 + vec4(czm_batchTable_offset(batchId) * applyOffset, 0.0);",i+=`    }
`,i+=`    else
`,i+=`    {
`,i+="        $1 = $1 + vec4(czm_batchTable_offset2D(batchId) * applyOffset, 0.0);",i+=`    }
`,o=o.replace(/vec4\s+([A-Za-z0-9_]+)\s+=\s+czm_computePosition\(\);/g,i),o};Ge._appendDistanceDisplayConditionToShader=function(e,t,n){if(!u(e._batchTableAttributeIndices.distanceDisplayCondition))return t;const o=Ue.replaceMain(t,"czm_non_distanceDisplayCondition_main");let i=`void main() 
{ 
    czm_non_distanceDisplayCondition_main(); 
    vec2 distanceDisplayCondition = czm_batchTable_distanceDisplayCondition(batchId);
    vec3 boundingSphereCenter3DHigh = czm_batchTable_boundingSphereCenter3DHigh(batchId);
    vec3 boundingSphereCenter3DLow = czm_batchTable_boundingSphereCenter3DLow(batchId);
    float boundingSphereRadius = czm_batchTable_boundingSphereRadius(batchId);
`;return n?i+=`    vec4 centerRTE = czm_translateRelativeToEye(boundingSphereCenter3DHigh, boundingSphereCenter3DLow);
`:i+=`    vec3 boundingSphereCenter2DHigh = czm_batchTable_boundingSphereCenter2DHigh(batchId);
    vec3 boundingSphereCenter2DLow = czm_batchTable_boundingSphereCenter2DLow(batchId);
    vec4 centerRTE;
    if (czm_morphTime == 1.0)
    {
        centerRTE = czm_translateRelativeToEye(boundingSphereCenter3DHigh, boundingSphereCenter3DLow);
    }
    else if (czm_morphTime == 0.0)
    {
        centerRTE = czm_translateRelativeToEye(boundingSphereCenter2DHigh.zxy, boundingSphereCenter2DLow.zxy);
    }
    else
    {
        centerRTE = czm_columbusViewMorph(
                czm_translateRelativeToEye(boundingSphereCenter2DHigh.zxy, boundingSphereCenter2DLow.zxy),
                czm_translateRelativeToEye(boundingSphereCenter3DHigh, boundingSphereCenter3DLow),
                czm_morphTime);
    }
`,i+=`    float radiusSq = boundingSphereRadius * boundingSphereRadius; 
    float distanceSq; 
    if (czm_sceneMode == czm_sceneMode2D) 
    { 
        distanceSq = czm_eyeHeight2D.y - radiusSq; 
    } 
    else 
    { 
        distanceSq = dot(centerRTE.xyz, centerRTE.xyz) - radiusSq; 
    } 
    distanceSq = max(distanceSq, 0.0); 
    float nearSq = distanceDisplayCondition.x * distanceDisplayCondition.x; 
    float farSq = distanceDisplayCondition.y * distanceDisplayCondition.y; 
    float show = (distanceSq >= nearSq && distanceSq <= farSq) ? 1.0 : 0.0; 
    gl_Position *= show; 
}`,`${o}
${i}`};function Fl(e,t){if(!e.compressVertices)return t;const n=t.search(/in\s+vec3\s+normal;/g)!==-1,o=t.search(/in\s+vec2\s+st;/g)!==-1;if(!n&&!o)return t;const i=t.search(/in\s+vec3\s+tangent;/g)!==-1,a=t.search(/in\s+vec3\s+bitangent;/g)!==-1;let r=o&&n?2:1;r+=i||a?1:0;const s=r>1?`vec${r}`:"float",c="compressedAttributes",f=`in ${s} ${c};`;let d="",m="";if(o){d+=`vec2 st;
`;const g=r>1?`${c}.x`:c;m+=`    st = czm_decompressTextureCoordinates(${g});
`}n&&i&&a?(d+=`vec3 normal;
vec3 tangent;
vec3 bitangent;
`,m+=`    czm_octDecode(${c}.${o?"yz":"xy"}, normal, tangent, bitangent);
`):(n&&(d+=`vec3 normal;
`,m+=`    normal = czm_octDecode(${c}${r>1?`.${o?"y":"x"}`:""});
`),i&&(d+=`vec3 tangent;
`,m+=`    tangent = czm_octDecode(${c}.${o&&n?"z":"y"});
`),a&&(d+=`vec3 bitangent;
`,m+=`    bitangent = czm_octDecode(${c}.${o&&n?"z":"y"});
`));let p=t;p=p.replace(/in\s+vec3\s+normal;/g,""),p=p.replace(/in\s+vec2\s+st;/g,""),p=p.replace(/in\s+vec3\s+tangent;/g,""),p=p.replace(/in\s+vec3\s+bitangent;/g,""),p=Ue.replaceMain(p,"czm_non_compressed_main");const _=`void main() 
{ 
${m}    czm_non_compressed_main(); 
}`;return[f,d,p,_].join(`
`)}function A1(e){let t=Ue.replaceMain(e,"czm_non_depth_clamp_main");return t+=`void main() {
    czm_non_depth_clamp_main();
    gl_Position = czm_depthClamp(gl_Position);}
`,t}function O1(e){let t=Ue.replaceMain(e,"czm_non_depth_clamp_main");return t+=`void main() {
    czm_non_depth_clamp_main();
    #if defined(LOG_DEPTH)
        czm_writeLogDepth();
    #else
        czm_writeDepthClamp();
    #endif
}
`,t}function Bl(e,t){const n=e.vertexAttributes;for(const o in n)if(n.hasOwnProperty(o)&&!u(t[o]))throw new T(`Appearance/Geometry mismatch.  The appearance requires vertex shader attribute input '${o}', which was not computed as part of the Geometry.  Use the appearance's vertexFormat property when constructing the geometry.`)}function S1(e,t){return function(){return e[t]}}const Da=Math.max(ot.hardwareConcurrency-1,1);let ar;const x1=new tt("combineGeometry");function C1(e,t){let n,o,i,a;const r=e._instanceIds;if(e._state===et.READY){n=Array.isArray(e.geometryInstances)?e.geometryInstances:[e.geometryInstances];const s=e._numberOfInstances=n.length,c=[];let f=[];for(i=0;i<s;++i){if(o=n[i].geometry,r.push(n[i].id),u(o._workerName)&&u(o._workerPath)||!u(o._workerName)&&!u(o._workerPath))throw new T("Must define either _workerName or _workerPath for asynchronous geometry.");f.push({moduleName:o._workerName,modulePath:o._workerPath,geometry:o})}if(!u(ar))for(ar=new Array(Da),i=0;i<Da;i++)ar[i]=new tt("createGeometry");let d;for(f=$y(f,Da),i=0;i<f.length;i++){let m=0;const p=f[i],_=p.length;for(a=0;a<_;++a)d=p[a],o=d.geometry,u(o.constructor.pack)&&(d.offset=m,m+=o.constructor.packedLength??o.packedLength);let g;if(m>0){const b=new Float64Array(m);for(g=[b.buffer],a=0;a<_;++a)d=p[a],o=d.geometry,u(o.constructor.pack)&&(o.constructor.pack(o,b,d.offset),d.geometry=b)}c.push(ar[i].scheduleTask({subTasks:f[i]},g))}e._state=et.CREATING,Promise.all(c).then(function(m){e._createGeometryResults=m,e._state=et.CREATED}).catch(function(m){ui(e,t,et.FAILED,m)})}else if(e._state===et.CREATED){const s=[];n=Array.isArray(e.geometryInstances)?e.geometryInstances:[e.geometryInstances];const c=t.scene3DOnly,f=t.mapProjection,d=x1.scheduleTask(nn.packCombineGeometryParameters({createGeometryResults:e._createGeometryResults,instances:n,ellipsoid:f.ellipsoid,projection:f,elementIndexUintSupported:t.context.elementIndexUint,scene3DOnly:c,vertexCacheOptimize:e.vertexCacheOptimize,compressVertices:e.compressVertices,modelMatrix:e.modelMatrix,createPickOffsets:e._createPickOffsets},s),s);e._createGeometryResults=void 0,e._state=et.COMBINING,Promise.resolve(d).then(function(m){const p=nn.unpackCombineGeometryResults(m);e._geometries=p.geometries,e._attributeLocations=p.attributeLocations,e.modelMatrix=M.clone(p.modelMatrix,e.modelMatrix),e._pickOffsets=p.pickOffsets,e._offsetInstanceExtend=p.offsetInstanceExtend,e._instanceBoundingSpheres=p.boundingSpheres,e._instanceBoundingSpheresCV=p.boundingSpheresCV,u(e._geometries)&&e._geometries.length>0?(e._recomputeBoundingSpheres=!0,e._state=et.COMBINED):ui(e,t,et.FAILED,void 0)}).catch(function(m){ui(e,t,et.FAILED,m)})}}function v1(e,t){const n=Array.isArray(e.geometryInstances)?e.geometryInstances:[e.geometryInstances],o=e._numberOfInstances=n.length,i=new Array(o),a=e._instanceIds;let r,s,c=0;for(s=0;s<o;s++){r=n[s];const p=r.geometry;let _;u(p.attributes)&&u(p.primitiveType)?_=T1(p):_=p.constructor.createGeometry(p),i[c++]=E1(r,_),a.push(r.id)}i.length=c;const f=t.scene3DOnly,d=t.mapProjection,m=nn.combineGeometry({instances:i,ellipsoid:d.ellipsoid,projection:d,elementIndexUintSupported:t.context.elementIndexUint,scene3DOnly:f,vertexCacheOptimize:e.vertexCacheOptimize,compressVertices:e.compressVertices,modelMatrix:e.modelMatrix,createPickOffsets:e._createPickOffsets});e._geometries=m.geometries,e._attributeLocations=m.attributeLocations,e.modelMatrix=M.clone(m.modelMatrix,e.modelMatrix),e._pickOffsets=m.pickOffsets,e._offsetInstanceExtend=m.offsetInstanceExtend,e._instanceBoundingSpheres=m.boundingSpheres,e._instanceBoundingSpheresCV=m.boundingSpheresCV,u(e._geometries)&&e._geometries.length>0?(e._recomputeBoundingSpheres=!0,e._state=et.COMBINED):ui(e,t,et.FAILED,void 0)}function R1(e,t){const n=e._batchTableAttributeIndices.offset;if(!e._recomputeBoundingSpheres||!u(n)){e._recomputeBoundingSpheres=!1;return}let o;const i=e._offsetInstanceExtend,a=e._instanceBoundingSpheres,r=a.length;let s=e._tempBoundingSpheres;if(!u(s)){for(s=new Array(r),o=0;o<r;o++)s[o]=new Q;e._tempBoundingSpheres=s}for(o=0;o<r;++o){let b=s[o];const E=e._batchTable.getBatchedAttribute(o,n,new l);b=a[o].clone(b),Nh(b,E,i[o])}const c=[],f=[],d=[];for(o=0;o<r;++o){const b=s[o];b.center.x-b.radius>0||Q.intersectPlane(b,Te.ORIGIN_ZX_PLANE)!==Ke.INTERSECTING?c.push(b):(f.push(b),d.push(b))}let m=c[0],p=d[0],_=f[0];for(o=1;o<c.length;o++)m=Q.union(m,c[o]);for(o=1;o<d.length;o++)p=Q.union(p,d[o]);for(o=1;o<f.length;o++)_=Q.union(_,f[o]);const g=[];for(u(m)&&g.push(m),u(p)&&g.push(p),u(_)&&g.push(_),o=0;o<g.length;o++){const b=g[o].clone(e._boundingSpheres[o]);e._boundingSpheres[o]=b,e._boundingSphereCV[o]=Q.projectTo2D(b,t.mapProjection,e._boundingSphereCV[o])}Ge._updateBoundingVolumes(e,t,e.modelMatrix,!0),e._recomputeBoundingSpheres=!1}const Ul=new qe,Ih=new ne,Ph=new l,Mh=new Q;function z1(e,t){if(!u(e._batchTableAttributeIndices.distanceDisplayCondition)||e._batchTableBoundingSpheresUpdated)return;const o=e._batchTableBoundingSphereAttributeIndices,i=o.center3DHigh,a=o.center3DLow,r=o.center2DHigh,s=o.center2DLow,c=o.radius,f=t.mapProjection,d=f.ellipsoid,m=e._batchTable,p=e._instanceBoundingSpheres,_=p.length;for(let g=0;g<_;++g){let b=p[g];if(!u(b))continue;const E=e.modelMatrix;u(E)&&(b=Q.transform(b,E,Mh));const v=b.center,C=b.radius;let x=qe.fromCartesian(v,Ul);if(m.setBatchedAttribute(g,i,x.high),m.setBatchedAttribute(g,a,x.low),!t.scene3DOnly){const R=d.cartesianToCartographic(v,Ih),N=f.project(R,Ph);x=qe.fromCartesian(N,Ul),m.setBatchedAttribute(g,r,x.high),m.setBatchedAttribute(g,s,x.low)}m.setBatchedAttribute(g,c,C)}e._batchTableBoundingSpheresUpdated=!0}const La=new l,I1=new l;function Gl(e,t){if(!u(e._batchTableAttributeIndices.offset)||e._batchTableOffsetsUpdated||t.scene3DOnly)return;const o=e._batchTableOffsetAttribute2DIndex,i=t.mapProjection,a=i.ellipsoid,r=e._batchTable,s=e._instanceBoundingSpheres,c=s.length;for(let f=0;f<c;++f){let d=s[f];if(!u(d))continue;const m=r.getBatchedAttribute(f,e._batchTableAttributeIndices.offset);if(l.equals(m,l.ZERO)){r.setBatchedAttribute(f,o,l.ZERO);continue}const p=e.modelMatrix;u(p)&&(d=Q.transform(d,p,Mh));let _=d.center;_=a.scaleToGeodeticSurface(_,I1);let g=a.cartesianToCartographic(_,Ih);const b=i.project(g,Ph),E=l.add(m,_,La);g=a.cartesianToCartographic(E,g);const v=i.project(g,La),C=l.subtract(v,b,La),x=C.x;C.x=C.z,C.z=C.y,C.y=x,r.setBatchedAttribute(f,o,C)}e._batchTableOffsetsUpdated=!0}function P1(e,t){const n=e._attributeLocations,o=e._geometries,i=t.scene3DOnly,a=t.context,r=[],s=o.length;for(let c=0;c<s;++c){const f=o[c];if(r.push(tn.fromGeometry({context:a,geometry:f,attributeLocations:n,bufferUsage:Qt.STATIC_DRAW,interleave:e._interleave})),u(e._createBoundingVolumeFunction))e._createBoundingVolumeFunction(t,f);else if(e._boundingSpheres.push(Q.clone(f.boundingSphere)),e._boundingSphereWC.push(new Q),!i){const d=f.boundingSphereCV.center,m=d.x,p=d.y,_=d.z;d.x=_,d.y=m,d.z=p,e._boundingSphereCV.push(Q.clone(f.boundingSphereCV)),e._boundingSphere2D.push(new Q),e._boundingSphereMorph.push(new Q)}}e._va=r,e._primitiveType=o[0].primitiveType,e.releaseGeometryInstances&&(e.geometryInstances=void 0),e._geometries=void 0,ui(e,t,et.COMPLETE,void 0)}function M1(e,t,n,o){let i=n.getRenderState(),a;o?(a=xt(i,!1),a.cull={enabled:!0,face:si.BACK},e._frontFaceRS=pt.fromCache(a),a.cull.face=si.FRONT,e._backFaceRS=pt.fromCache(a)):(e._frontFaceRS=pt.fromCache(i),e._backFaceRS=e._frontFaceRS),a=xt(i,!1),u(e._depthFailAppearance)&&(a.depthTest.enabled=!1),u(e._depthFailAppearance)&&(i=e._depthFailAppearance.getRenderState(),a=xt(i,!1),a.depthTest.func=Hw.GREATER,o?(a.cull={enabled:!0,face:si.BACK},e._frontFaceDepthFailRS=pt.fromCache(a),a.cull.face=si.FRONT,e._backFaceDepthFailRS=pt.fromCache(a)):(e._frontFaceDepthFailRS=pt.fromCache(a),e._backFaceDepthFailRS=e._frontFaceRS))}function N1(e,t,n){const o=t.context,i=e._attributeLocations;let a=e._batchTable.getVertexShaderCallback()(n.vertexShaderSource);a=Ge._appendOffsetToShader(e,a),a=Ge._appendShowToShader(e,a),a=Ge._appendDistanceDisplayConditionToShader(e,a,t.scene3DOnly),a=Dl(a),a=Ge._updateColorAttribute(e,a,!1),a=Fl(e,a),a=Ge._modifyShaderPosition(e,a,t.scene3DOnly);let r=n.getFragmentShaderSource();r=Ll(r),e._sp=en.replaceCache({context:o,shaderProgram:e._sp,vertexShaderSource:a,fragmentShaderSource:r,attributeLocations:i}),Bl(e._sp,i),u(e._depthFailAppearance)&&(a=e._batchTable.getVertexShaderCallback()(e._depthFailAppearance.vertexShaderSource),a=Ge._appendShowToShader(e,a),a=Ge._appendDistanceDisplayConditionToShader(e,a,t.scene3DOnly),a=Dl(a),a=Ge._updateColorAttribute(e,a,!0),a=Fl(e,a),a=Ge._modifyShaderPosition(e,a,t.scene3DOnly),a=A1(a),r=e._depthFailAppearance.getFragmentShaderSource(),r=Ll(r),r=O1(r),e._spDepthFail=en.replaceCache({context:o,shaderProgram:e._spDepthFail,vertexShaderSource:a,fragmentShaderSource:r,attributeLocations:i}),Bl(e._spDepthFail,i))}const ti=new M,ql=new l;function kl(e,t,n,o){const i=u(n)?n._uniforms:void 0,a={},r=t.uniforms;if(u(r)){for(const c in r)if(r.hasOwnProperty(c)){if(u(i)&&u(i[c]))throw new T(`Appearance and material have a uniform with the same name: ${c}`);a[c]=S1(r,c)}}let s=Ct(a,i);return s=e._batchTable.getUniformMapCallback()(s),u(e.rtcCenter)&&(s.u_modifiedModelView=function(){const c=o.context.uniformState.view;return M.multiply(c,e._modelMatrix,ti),M.multiplyByPoint(ti,e.rtcCenter,ql),M.setTranslation(ti,ql,ti),ti}),s}function D1(e,t,n,o,i,a,r,s){const c=kl(e,t,n,s);let f;u(e._depthFailAppearance)&&(f=kl(e,e._depthFailAppearance,e._depthFailAppearance.material,s));const d=o?vo.TRANSLUCENT:vo.OPAQUE;let m=i?2:1;m*=u(e._depthFailAppearance)?2:1,a.length=e._va.length*m;const p=a.length;let _=0;for(let g=0;g<p;++g){let b;i&&(b=a[g],u(b)||(b=a[g]=new un({owner:e,primitiveType:e._primitiveType})),b.vertexArray=e._va[_],b.renderState=e._backFaceRS,b.shaderProgram=e._sp,b.uniformMap=c,b.pass=d,++g),b=a[g],u(b)||(b=a[g]=new un({owner:e,primitiveType:e._primitiveType})),b.vertexArray=e._va[_],b.renderState=e._frontFaceRS,b.shaderProgram=e._sp,b.uniformMap=c,b.pass=d,u(e._depthFailAppearance)&&(i&&(++g,b=a[g],u(b)||(b=a[g]=new un({owner:e,primitiveType:e._primitiveType})),b.vertexArray=e._va[_],b.renderState=e._backFaceDepthFailRS,b.shaderProgram=e._spDepthFail,b.uniformMap=f,b.pass=d),++g,b=a[g],u(b)||(b=a[g]=new un({owner:e,primitiveType:e._primitiveType})),b.vertexArray=e._va[_],b.renderState=e._frontFaceDepthFailRS,b.shaderProgram=e._spDepthFail,b.uniformMap=f,b.pass=d),++_}}Ge._updateBoundingVolumes=function(e,t,n,o){let i,a,r;if(o||!M.equals(n,e._modelMatrix))for(M.clone(n,e._modelMatrix),a=e._boundingSpheres.length,i=0;i<a;++i)r=e._boundingSpheres[i],u(r)&&(e._boundingSphereWC[i]=Q.transform(r,n,e._boundingSphereWC[i]),t.scene3DOnly||(e._boundingSphere2D[i]=Q.clone(e._boundingSphereCV[i],e._boundingSphere2D[i]),e._boundingSphereMorph[i]=Q.union(e._boundingSphereWC[i],e._boundingSphereCV[i])));const s=e.appearance.pixelSize;if(u(s))for(a=e._boundingSpheres.length,i=0;i<a;++i){r=e._boundingSpheres[i];const c=e._boundingSphereWC[i],d=t.camera.getPixelSize(r,t.context.drawingBufferWidth,t.context.drawingBufferHeight)*s;c.radius=r.radius+d}};function L1(e,t,n,o,i,a,r,s){if(t.mode!==ke.SCENE3D&&!M.equals(i,M.IDENTITY))throw new T("Primitive.modelMatrix is only supported in 3D mode.");Ge._updateBoundingVolumes(e,t,i);let c;t.mode===ke.SCENE3D?c=e._boundingSphereWC:t.mode===ke.COLUMBUS_VIEW?c=e._boundingSphereCV:t.mode===ke.SCENE2D&&u(e._boundingSphere2D)?c=e._boundingSphere2D:u(e._boundingSphereMorph)&&(c=e._boundingSphereMorph);const f=t.commandList,d=t.passes;if(d.render||d.pick){const m=e.allowPicking,p=hs.castShadows(e.shadows),_=hs.receiveShadows(e.shadows),g=n.length;let b=s?2:1;b*=u(e._depthFailAppearance)?2:1;for(let E=0;E<g;++E){const v=Math.floor(E/b),C=n[E];C.modelMatrix=i,C.boundingVolume=c[v],C.cull=a,C.debugShowBoundingVolume=r,C.castShadows=p,C.receiveShadows=_,m?C.pickId="v_pickColor":C.pickId=void 0,f.push(C)}}}Ge.prototype.update=function(e){if(!u(this.geometryInstances)&&this._va.length===0||u(this.geometryInstances)&&Array.isArray(this.geometryInstances)&&this.geometryInstances.length===0||!u(this.appearance)||e.mode!==ke.SCENE3D&&e.scene3DOnly||!e.passes.render&&!e.passes.pick)return;if(u(this._error))throw this._error;if(u(this.rtcCenter)&&!e.scene3DOnly)throw new T("RTC rendering is only available for 3D only scenes.");if(this._state===et.FAILED)return;const t=e.context;if(u(this._batchTable)||y1(this,t),this._batchTable.attributes.length>0){if(ge.maximumVertexTextureImageUnits===0)throw new Ye("Vertex texture fetch support is required to render primitives with per-instance attributes. The maximum number of vertex texture image units must be greater than zero.");this._batchTable.update(e)}if(this._state!==et.COMPLETE&&this._state!==et.COMBINED&&(this.asynchronous?C1(this,e):v1(this,e)),this._state===et.COMBINED&&(z1(this,e),Gl(this,e),P1(this,e)),!this.show||this._state!==et.COMPLETE)return;this._batchTableOffsetsUpdated||Gl(this,e),this._recomputeBoundingSpheres&&R1(this,e);const n=this.appearance,o=n.material;let i=!1,a=!1;this._appearance!==n?(this._appearance=n,this._material=o,i=!0,a=!0):this._material!==o&&(this._material=o,a=!0);const r=this.depthFailAppearance,s=u(r)?r.material:void 0;this._depthFailAppearance!==r?(this._depthFailAppearance=r,this._depthFailMaterial=s,i=!0,a=!0):this._depthFailMaterial!==s&&(this._depthFailMaterial=s,a=!0);const c=this._appearance.isTranslucent();this._translucent!==c&&(this._translucent=c,i=!0),u(this._material)&&this._material.update(t);const f=n.closed&&c;i&&(this._createRenderStatesFunction??M1)(this,t,n,f),a&&(this._createShaderProgramFunction??N1)(this,e,n),(i||a)&&(this._createCommandsFunction??D1)(this,n,o,c,f,this._colorCommands,this._pickCommands,e),(this._updateAndQueueCommandsFunction??L1)(this,e,this._colorCommands,this._pickCommands,this.modelMatrix,this.cull,this.debugShowBoundingVolume,f)};const F1=new Q,B1=new Q;function Nh(e,t,n){if(n===Rr.TOP){const o=Q.clone(e,F1),i=Q.clone(e,B1);i.center=l.add(i.center,t,i.center),e=Q.union(o,i,e)}else n===Rr.ALL&&(e.center=l.add(e.center,t,e.center));return e}function U1(e,t,n){return function(){const o=e.getBatchedAttribute(t,n),i=e.attributes[n],a=i.componentsPerAttribute,r=oe.createTypedArray(i.componentDatatype,a);return u(o.constructor.pack)?o.constructor.pack(o,r,0):r[0]=o,r}}function G1(e,t,n,o,i){return function(a){if(!u(a)||!u(a.length)||a.length<1||a.length>4)throw new T("value must be and array with length between 1 and 4.");const r=zh(a);e.setBatchedAttribute(t,n,r),i==="offset"&&(o._recomputeBoundingSpheres=!0,o._batchTableOffsetsUpdated=!1)}}const q1=new l;function k1(e,t,n){t.boundingSphere={get:function(){let o=e._instanceBoundingSpheres[n];if(u(o)){o=o.clone();const i=e.modelMatrix,a=t.offset;u(a)&&Nh(o,l.fromArray(a.get(),0,q1),e._offsetInstanceExtend[n]),u(i)&&(o=Q.transform(o,i))}return o}},t.boundingSphereCV={get:function(){return e._instanceBoundingSpheresCV[n]}}}function V1(e,t,n){t.pickId={get:function(){return e._pickIds[n]}}}Ge.prototype.getGeometryInstanceAttributes=function(e){if(!u(e))throw new T("id is required");if(!u(this._batchTable))throw new T("must call update before calling getGeometryInstanceAttributes");let t=this._perInstanceAttributeCache.get(e);if(u(t))return t;let n=-1;const o=this._lastPerInstanceAttributeIndex,i=this._instanceIds,a=i.length;for(let f=0;f<a;++f){const d=(o+f)%a;if(e===i[d]){n=d;break}}if(n===-1)return;const r=this._batchTable,s=this._batchTableAttributeIndices;t={};const c={};for(const f in s)if(s.hasOwnProperty(f)){const d=s[f];c[f]={get:U1(r,n,d),set:G1(r,n,d,this,f)}}return k1(this,c,n),V1(this,c,n),Object.defineProperties(t,c),this._lastPerInstanceAttributeIndex=n,this._perInstanceAttributeCache.set(e,t),t};Ge.prototype.isDestroyed=function(){return!1};Ge.prototype.destroy=function(){let e,t;this._sp=this._sp&&this._sp.destroy(),this._spDepthFail=this._spDepthFail&&this._spDepthFail.destroy();const n=this._va;for(e=n.length,t=0;t<e;++t)n[t].destroy();this._va=void 0;const o=this._pickIds;for(e=o.length,t=0;t<e;++t)o[t].destroy();return this._pickIds=void 0,this._batchTable=this._batchTable&&this._batchTable.destroy(),this._instanceIds=void 0,this._perInstanceAttributeCache=void 0,this._attributeLocations=void 0,dt(this)};function ui(e,t,n,o){e._error=o,e._state=n,t.afterRender.push(function(){return e._ready=e._state===et.COMPLETE||e._state===et.FAILED,!0})}const j1=`void clipLineSegmentToNearPlane(
    vec3 p0,
    vec3 p1,
    out vec4 positionWC,
    out bool clipped,
    out bool culledByNearPlane,
    out vec4 clippedPositionEC)
{
    culledByNearPlane = false;
    clipped = false;

    vec3 p0ToP1 = p1 - p0;
    float magnitude = length(p0ToP1);
    vec3 direction = normalize(p0ToP1);

    // Distance that p0 is behind the near plane. Negative means p0 is
    // in front of the near plane.
    float endPoint0Distance =  czm_currentFrustum.x + p0.z;

    // Camera looks down -Z.
    // When moving a point along +Z: LESS VISIBLE
    //   * Points in front of the camera move closer to the camera.
    //   * Points behind the camrea move farther away from the camera.
    // When moving a point along -Z: MORE VISIBLE
    //   * Points in front of the camera move farther away from the camera.
    //   * Points behind the camera move closer to the camera.

    // Positive denominator: -Z, becoming more visible
    // Negative denominator: +Z, becoming less visible
    // Nearly zero: parallel to near plane
    float denominator = -direction.z;

    if (endPoint0Distance > 0.0 && abs(denominator) < czm_epsilon7)
    {
        // p0 is behind the near plane and the line to p1 is nearly parallel to
        // the near plane, so cull the segment completely.
        culledByNearPlane = true;
    }
    else if (endPoint0Distance > 0.0)
    {
        // p0 is behind the near plane, and the line to p1 is moving distinctly
        // toward or away from it.

        // t = (-plane distance - dot(plane normal, ray origin)) / dot(plane normal, ray direction)
        float t = endPoint0Distance / denominator;
        if (t < 0.0 || t > magnitude)
        {
            // Near plane intersection is not between the two points.
            // We already confirmed p0 is behind the naer plane, so now
            // we know the entire segment is behind it.
            culledByNearPlane = true;
        }
        else
        {
            // Segment crosses the near plane, update p0 to lie exactly on it.
            p0 = p0 + t * direction;

            // Numerical noise might put us a bit on the wrong side of the near plane.
            // Don't let that happen.
            p0.z = min(p0.z, -czm_currentFrustum.x);

            clipped = true;
        }
    }

    clippedPositionEC = vec4(p0, 1.0);
    positionWC = czm_eyeToWindowCoordinates(clippedPositionEC);
}

vec4 getPolylineWindowCoordinatesEC(vec4 positionEC, vec4 prevEC, vec4 nextEC, float expandDirection, float width, bool usePrevious, out float angle)
{
    // expandDirection +1 is to the _left_ when looking from positionEC toward nextEC.

#ifdef POLYLINE_DASH
    // Compute the window coordinates of the points.
    vec4 positionWindow = czm_eyeToWindowCoordinates(positionEC);
    vec4 previousWindow = czm_eyeToWindowCoordinates(prevEC);
    vec4 nextWindow = czm_eyeToWindowCoordinates(nextEC);

    // Determine the relative screen space direction of the line.
    vec2 lineDir;
    if (usePrevious) {
        lineDir = normalize(positionWindow.xy - previousWindow.xy);
    }
    else {
        lineDir = normalize(nextWindow.xy - positionWindow.xy);
    }
    angle = atan(lineDir.x, lineDir.y) - 1.570796327; // precomputed atan(1,0)

    // Quantize the angle so it doesn't change rapidly between segments.
    angle = floor(angle / czm_piOverFour + 0.5) * czm_piOverFour;
#endif

    vec4 clippedPrevWC, clippedPrevEC;
    bool prevSegmentClipped, prevSegmentCulled;
    clipLineSegmentToNearPlane(prevEC.xyz, positionEC.xyz, clippedPrevWC, prevSegmentClipped, prevSegmentCulled, clippedPrevEC);

    vec4 clippedNextWC, clippedNextEC;
    bool nextSegmentClipped, nextSegmentCulled;
    clipLineSegmentToNearPlane(nextEC.xyz, positionEC.xyz, clippedNextWC, nextSegmentClipped, nextSegmentCulled, clippedNextEC);

    bool segmentClipped, segmentCulled;
    vec4 clippedPositionWC, clippedPositionEC;
    clipLineSegmentToNearPlane(positionEC.xyz, usePrevious ? prevEC.xyz : nextEC.xyz, clippedPositionWC, segmentClipped, segmentCulled, clippedPositionEC);

    if (segmentCulled)
    {
        return vec4(0.0, 0.0, 0.0, 1.0);
    }

    vec2 directionToPrevWC = normalize(clippedPrevWC.xy - clippedPositionWC.xy);
    vec2 directionToNextWC = normalize(clippedNextWC.xy - clippedPositionWC.xy);

    // If a segment was culled, we can't use the corresponding direction
    // computed above. We should never see both of these be true without
    // \`segmentCulled\` above also being true.
    if (prevSegmentCulled)
    {
        directionToPrevWC = -directionToNextWC;
    }
    else if (nextSegmentCulled)
    {
        directionToNextWC = -directionToPrevWC;
    }

    vec2 thisSegmentForwardWC, otherSegmentForwardWC;
    if (usePrevious)
    {
        thisSegmentForwardWC = -directionToPrevWC;
        otherSegmentForwardWC = directionToNextWC;
    }
    else
    {
        thisSegmentForwardWC = directionToNextWC;
        otherSegmentForwardWC =  -directionToPrevWC;
    }

    vec2 thisSegmentLeftWC = vec2(-thisSegmentForwardWC.y, thisSegmentForwardWC.x);

    vec2 leftWC = thisSegmentLeftWC;
    float expandWidth = width * 0.5;

    // When lines are split at the anti-meridian, the position may be at the
    // same location as the next or previous position, and we need to handle
    // that to avoid producing NaNs.
    if (!czm_equalsEpsilon(prevEC.xyz - positionEC.xyz, vec3(0.0), czm_epsilon1) && !czm_equalsEpsilon(nextEC.xyz - positionEC.xyz, vec3(0.0), czm_epsilon1))
    {
        vec2 otherSegmentLeftWC = vec2(-otherSegmentForwardWC.y, otherSegmentForwardWC.x);

        vec2 leftSumWC = thisSegmentLeftWC + otherSegmentLeftWC;
        float leftSumLength = length(leftSumWC);
        leftWC = leftSumLength < czm_epsilon6 ? thisSegmentLeftWC : (leftSumWC / leftSumLength);

        // The sine of the angle between the two vectors is given by the formula
        //         |a x b| = |a||b|sin(theta)
        // which is
        //     float sinAngle = length(cross(vec3(leftWC, 0.0), vec3(-thisSegmentForwardWC, 0.0)));
        // Because the z components of both vectors are zero, the x and y coordinate will be zero.
        // Therefore, the sine of the angle is just the z component of the cross product.
        vec2 u = -thisSegmentForwardWC;
        vec2 v = leftWC;
        float sinAngle = abs(u.x * v.y - u.y * v.x);
        expandWidth = clamp(expandWidth / sinAngle, 0.0, width * 2.0);
    }

    vec2 offset = leftWC * expandDirection * expandWidth * czm_pixelRatio;
    return vec4(clippedPositionWC.xy + offset, -clippedPositionWC.z, 1.0) * (czm_projection * clippedPositionEC).w;
}

vec4 getPolylineWindowCoordinates(vec4 position, vec4 previous, vec4 next, float expandDirection, float width, bool usePrevious, out float angle)
{
    vec4 positionEC = czm_modelViewRelativeToEye * position;
    vec4 prevEC = czm_modelViewRelativeToEye * previous;
    vec4 nextEC = czm_modelViewRelativeToEye * next;
    return getPolylineWindowCoordinatesEC(positionEC, prevEC, nextEC, expandDirection, width, usePrevious, angle);
}
`,H1=`#ifdef VECTOR_TILE
uniform vec4 u_highlightColor;
#endif

in vec2 v_st;

void main()
{
    czm_materialInput materialInput;

    vec2 st = v_st;
    st.t = czm_readNonPerspective(st.t, gl_FragCoord.w);

    materialInput.s = st.s;
    materialInput.st = st;
    materialInput.str = vec3(st, 0.0);

    czm_material material = czm_getMaterial(materialInput);
    out_FragColor = vec4(material.diffuse + material.emission, material.alpha);
#ifdef VECTOR_TILE
    out_FragColor *= u_highlightColor;
#endif

    czm_writeLogDepth();
}
`,W1={UNLIT:0,PBR:1},ni=Object.freeze(W1),Y1=`in vec3 position3DHigh;
in vec3 position3DLow;
in vec3 position2DHigh;
in vec3 position2DLow;
in vec3 prevPosition3DHigh;
in vec3 prevPosition3DLow;
in vec3 prevPosition2DHigh;
in vec3 prevPosition2DLow;
in vec3 nextPosition3DHigh;
in vec3 nextPosition3DLow;
in vec3 nextPosition2DHigh;
in vec3 nextPosition2DLow;
in vec4 texCoordExpandAndBatchIndex;

out vec2  v_st;
out float v_width;
out vec4 v_pickColor;
out float v_polylineAngle;

void main()
{
    float texCoord = texCoordExpandAndBatchIndex.x;
    float expandDir = texCoordExpandAndBatchIndex.y;
    bool usePrev = texCoordExpandAndBatchIndex.z < 0.0;
    float batchTableIndex = texCoordExpandAndBatchIndex.w;

    vec2 widthAndShow = batchTable_getWidthAndShow(batchTableIndex);
    float width = widthAndShow.x + 0.5;
    float show = widthAndShow.y;

    if (width < 1.0)
    {
        show = 0.0;
    }

    vec4 pickColor = batchTable_getPickColor(batchTableIndex);

    vec4 p, prev, next;
    if (czm_morphTime == 1.0)
    {
        p = czm_translateRelativeToEye(position3DHigh.xyz, position3DLow.xyz);
        prev = czm_translateRelativeToEye(prevPosition3DHigh.xyz, prevPosition3DLow.xyz);
        next = czm_translateRelativeToEye(nextPosition3DHigh.xyz, nextPosition3DLow.xyz);
    }
    else if (czm_morphTime == 0.0)
    {
        p = czm_translateRelativeToEye(position2DHigh.zxy, position2DLow.zxy);
        prev = czm_translateRelativeToEye(prevPosition2DHigh.zxy, prevPosition2DLow.zxy);
        next = czm_translateRelativeToEye(nextPosition2DHigh.zxy, nextPosition2DLow.zxy);
    }
    else
    {
        p = czm_columbusViewMorph(
                czm_translateRelativeToEye(position2DHigh.zxy, position2DLow.zxy),
                czm_translateRelativeToEye(position3DHigh.xyz, position3DLow.xyz),
                czm_morphTime);
        prev = czm_columbusViewMorph(
                czm_translateRelativeToEye(prevPosition2DHigh.zxy, prevPosition2DLow.zxy),
                czm_translateRelativeToEye(prevPosition3DHigh.xyz, prevPosition3DLow.xyz),
                czm_morphTime);
        next = czm_columbusViewMorph(
                czm_translateRelativeToEye(nextPosition2DHigh.zxy, nextPosition2DLow.zxy),
                czm_translateRelativeToEye(nextPosition3DHigh.xyz, nextPosition3DLow.xyz),
                czm_morphTime);
    }

    #ifdef DISTANCE_DISPLAY_CONDITION
        vec3 centerHigh = batchTable_getCenterHigh(batchTableIndex);
        vec4 centerLowAndRadius = batchTable_getCenterLowAndRadius(batchTableIndex);
        vec3 centerLow = centerLowAndRadius.xyz;
        float radius = centerLowAndRadius.w;
        vec2 distanceDisplayCondition = batchTable_getDistanceDisplayCondition(batchTableIndex);

        float lengthSq;
        if (czm_sceneMode == czm_sceneMode2D)
        {
            lengthSq = czm_eyeHeight2D.y;
        }
        else
        {
            vec4 center = czm_translateRelativeToEye(centerHigh.xyz, centerLow.xyz);
            lengthSq = max(0.0, dot(center.xyz, center.xyz) - radius * radius);
        }

        float nearSq = distanceDisplayCondition.x * distanceDisplayCondition.x;
        float farSq = distanceDisplayCondition.y * distanceDisplayCondition.y;
        if (lengthSq < nearSq || lengthSq > farSq)
        {
            show = 0.0;
        }
    #endif

    float polylineAngle;
    vec4 positionWC = getPolylineWindowCoordinates(p, prev, next, expandDir, width, usePrev, polylineAngle);
    gl_Position = czm_viewportOrthographic * positionWC * show;

    v_st.s = texCoord;
    v_st.t = czm_writeNonPerspective(clamp(expandDir, 0.0, 1.0), gl_Position.w);

    v_width = width;
    v_pickColor = pickColor;
    v_polylineAngle = polylineAngle;
}
`;function it(e,t){e=e??ue.EMPTY_OBJECT,this._show=e.show??!0,this._width=e.width??1,this._loop=e.loop??!1,this._distanceDisplayCondition=e.distanceDisplayCondition,this._material=e.material,u(this._material)||(this._material=X.fromType(X.ColorType,{color:new O(1,1,1,1)}));let n=e.positions;u(n)||(n=[]),this._positions=n,this._actualPositions=co(n,l.equalsEpsilon),this._loop&&this._actualPositions.length>2&&(this._actualPositions===this._positions&&(this._actualPositions=n.slice()),this._actualPositions.push(l.clone(this._actualPositions[0]))),this._length=this._actualPositions.length,this._id=e.id;let o;u(t)&&(o=M.clone(t.modelMatrix)),this._modelMatrix=o,this._segments=At.wrapLongitude(this._actualPositions,o),this._actualLength=void 0,this._propertiesChanged=new Uint32Array(Lh),this._polylineCollection=t,this._dirty=!1,this._pickId=void 0,this._boundingVolume=Q.fromPoints(this._actualPositions),this._boundingVolumeWC=Q.transform(this._boundingVolume,this._modelMatrix),this._boundingVolume2D=new Q}const Dh=it.POSITION_INDEX=0,X1=it.SHOW_INDEX=1,$1=it.WIDTH_INDEX=2,Z1=it.MATERIAL_INDEX=3,hi=it.POSITION_SIZE_INDEX=4,K1=it.DISTANCE_DISPLAY_CONDITION=5,Lh=it.NUMBER_OF_PROPERTIES=6;function wn(e,t){++e._propertiesChanged[t];const n=e._polylineCollection;u(n)&&(n._updatePolyline(e,t),e._dirty=!0)}Object.defineProperties(it.prototype,{show:{get:function(){return this._show},set:function(e){if(!u(e))throw new T("value is required.");e!==this._show&&(this._show=e,wn(this,X1))}},positions:{get:function(){return this._positions},set:function(e){if(!u(e))throw new T("value is required.");let t=co(e,l.equalsEpsilon);this._loop&&t.length>2&&(t===e&&(t=e.slice()),t.push(l.clone(t[0]))),(this._actualPositions.length!==t.length||this._actualPositions.length!==this._length)&&wn(this,hi),this._positions=e,this._actualPositions=t,this._length=t.length,this._boundingVolume=Q.fromPoints(this._actualPositions,this._boundingVolume),this._boundingVolumeWC=Q.transform(this._boundingVolume,this._modelMatrix,this._boundingVolumeWC),wn(this,Dh),this.update()}},material:{get:function(){return this._material},set:function(e){if(!u(e))throw new T("material is required.");this._material!==e&&(this._material=e,wn(this,Z1))}},width:{get:function(){return this._width},set:function(e){if(!u(e))throw new T("value is required.");const t=this._width;e!==t&&(this._width=e,wn(this,$1))}},loop:{get:function(){return this._loop},set:function(e){if(!u(e))throw new T("value is required.");if(e!==this._loop){let t=this._actualPositions;e?t.length>2&&!l.equals(t[0],t[t.length-1])&&(t.length===this._positions.length&&(this._actualPositions=t=this._positions.slice()),t.push(l.clone(t[0]))):t.length>2&&l.equals(t[0],t[t.length-1])&&(t.length-1===this._positions.length?this._actualPositions=this._positions:t.pop()),this._loop=e,wn(this,hi)}}},id:{get:function(){return this._id},set:function(e){this._id=e,u(this._pickId)&&(this._pickId.object.id=e)}},pickId:{get:function(){return this._pickId}},isDestroyed:{get:function(){return!u(this._polylineCollection)}},distanceDisplayCondition:{get:function(){return this._distanceDisplayCondition},set:function(e){if(u(e)&&e.far<=e.near)throw new T("far distance must be greater than near distance.");Nt.equals(e,this._distanceDisplayCondition)||(this._distanceDisplayCondition=Nt.clone(e,this._distanceDisplayCondition),wn(this,K1))}}});it.prototype.update=function(){let e=M.IDENTITY;u(this._polylineCollection)&&(e=this._polylineCollection.modelMatrix);const t=this._segments.positions.length,n=this._segments.lengths,o=this._propertiesChanged[Dh]>0||this._propertiesChanged[hi]>0;if((!M.equals(e,this._modelMatrix)||o)&&(this._segments=At.wrapLongitude(this._actualPositions,e),this._boundingVolumeWC=Q.transform(this._boundingVolume,e,this._boundingVolumeWC)),this._modelMatrix=M.clone(e,this._modelMatrix),this._segments.positions.length!==t)wn(this,hi);else{const i=n.length;for(let a=0;a<i;++a)if(n[a]!==this._segments.lengths[a]){wn(this,hi);break}}};it.prototype.getPickId=function(e){return u(this._pickId)||(this._pickId=e.createPickId({primitive:this,collection:this._polylineCollection,id:this._id})),this._pickId};it.prototype._clean=function(){this._dirty=!1;const e=this._propertiesChanged;for(let t=0;t<Lh-1;++t)e[t]=0};it.prototype._destroy=function(){this._pickId=this._pickId&&this._pickId.destroy(),this._material=this._material&&this._material.destroy(),this._polylineCollection=void 0};const Q1=it.SHOW_INDEX,J1=it.WIDTH_INDEX,ds=it.POSITION_INDEX,eA=it.MATERIAL_INDEX,Vl=it.POSITION_SIZE_INDEX,tA=it.DISTANCE_DISPLAY_CONDITION,Fh=it.NUMBER_OF_PROPERTIES,zt={texCoordExpandAndBatchIndex:0,position3DHigh:1,position3DLow:2,position2DHigh:3,position2DLow:4,prevPosition3DHigh:5,prevPosition3DLow:6,prevPosition2DHigh:7,prevPosition2DLow:8,nextPosition3DHigh:9,nextPosition3DLow:10,nextPosition2DHigh:11,nextPosition2DLow:12};function rn(e){e=e??ue.EMPTY_OBJECT,this.show=e.show??!0,this.modelMatrix=M.clone(e.modelMatrix??M.IDENTITY),this._modelMatrix=M.clone(M.IDENTITY),this.debugShowBoundingVolume=e.debugShowBoundingVolume??!1,this._opaqueRS=void 0,this._translucentRS=void 0,this._colorCommands=[],this._polylinesUpdated=!1,this._polylinesRemoved=!1,this._createVertexArray=!1,this._propertiesChanged=new Uint32Array(Fh),this._polylines=[],this._polylineBuckets={},this._positionBufferUsage={bufferUsage:Qt.STATIC_DRAW,frameCount:0},this._mode=void 0,this._polylinesToUpdate=[],this._vertexArrays=[],this._positionBuffer=void 0,this._texCoordExpandAndBatchIndexBuffer=void 0,this._batchTable=void 0,this._createBatchTable=!1,this._useHighlightColor=!1,this._highlightColor=O.clone(O.WHITE);const t=this;this._uniformMap={u_highlightColor:function(){return t._highlightColor}}}Object.defineProperties(rn.prototype,{length:{get:function(){return $s(this),this._polylines.length}}});rn.prototype.add=function(e){const t=new it(e,this);return t._index=this._polylines.length,this._polylines.push(t),this._createVertexArray=!0,this._createBatchTable=!0,t};rn.prototype.remove=function(e){if(this.contains(e)){if(this._polylinesRemoved=!0,this._createVertexArray=!0,this._createBatchTable=!0,u(e._bucket)){const t=e._bucket;t.shaderProgram=t.shaderProgram&&t.shaderProgram.destroy()}return e._destroy(),!0}return!1};rn.prototype.removeAll=function(){Zs(this),kh(this),this._polylineBuckets={},this._polylinesRemoved=!1,this._polylines.length=0,this._polylinesToUpdate.length=0,this._createVertexArray=!0};rn.prototype.contains=function(e){return u(e)&&e._polylineCollection===this};rn.prototype.get=function(e){if(!u(e))throw new T("index is required.");return $s(this),this._polylines[e]};function nA(e,t){u(e._batchTable)&&e._batchTable.destroy();const n=[{functionName:"batchTable_getWidthAndShow",componentDatatype:oe.UNSIGNED_BYTE,componentsPerAttribute:2},{functionName:"batchTable_getPickColor",componentDatatype:oe.UNSIGNED_BYTE,componentsPerAttribute:4,normalize:!0},{functionName:"batchTable_getCenterHigh",componentDatatype:oe.FLOAT,componentsPerAttribute:3},{functionName:"batchTable_getCenterLowAndRadius",componentDatatype:oe.FLOAT,componentsPerAttribute:4},{functionName:"batchTable_getDistanceDisplayCondition",componentDatatype:oe.FLOAT,componentsPerAttribute:2}];e._batchTable=new gn(t,n,e._polylines.length)}const Bh=new qe,Uh=new W,Gh=new U;rn.prototype.update=function(e){if($s(this),this._polylines.length===0||!this.show)return;cA(this,e);const t=e.context,n=e.mapProjection;let o,i=this._propertiesChanged;if(this._createBatchTable){if(ge.maximumVertexTextureImageUnits===0)throw new Ye("Vertex texture fetch support is required to render polylines. The maximum number of vertex texture image units must be greater than zero.");nA(this,t),this._createBatchTable=!1}if(this._createVertexArray||iA(this))Wl(this,t,n);else if(this._polylinesUpdated){const c=this._polylinesToUpdate;if(this._mode!==ke.SCENE3D){const f=c.length;for(let d=0;d<f;++d)o=c[d],o.update()}if(i[Vl]||i[eA])Wl(this,t,n);else{const f=c.length,d=this._polylineBuckets;for(let m=0;m<f;++m){o=c[m],i=o._propertiesChanged;const p=o._bucket;let _=0;for(const g in d)if(d.hasOwnProperty(g)){if(d[g]===p){i[ds]&&p.writeUpdate(_,o,this._positionBuffer,n);break}_+=d[g].lengthOfPositions}if((i[Q1]||i[J1])&&this._batchTable.setBatchedAttribute(o._index,0,new U(o._width,o._show)),this._batchTable.attributes.length>2){if(i[ds]||i[Vl]){const g=e.mode===ke.SCENE2D?o._boundingVolume2D:o._boundingVolumeWC,b=qe.fromCartesian(g.center,Bh),E=W.fromElements(b.low.x,b.low.y,b.low.z,g.radius,Uh);this._batchTable.setBatchedAttribute(o._index,2,b.high),this._batchTable.setBatchedAttribute(o._index,3,E)}if(i[tA]){const g=Gh;g.x=0,g.y=Number.MAX_VALUE;const b=o.distanceDisplayCondition;u(b)&&(g.x=b.near,g.y=b.far),this._batchTable.setBatchedAttribute(o._index,4,g)}}o._clean()}}c.length=0,this._polylinesUpdated=!1}i=this._propertiesChanged;for(let c=0;c<Fh;++c)i[c]=0;let a=M.IDENTITY;e.mode===ke.SCENE3D&&(a=this.modelMatrix);const r=e.passes,s=e.morphTime!==0;if((!u(this._opaqueRS)||this._opaqueRS.depthTest.enabled!==s)&&(this._opaqueRS=pt.fromCache({depthMask:s,depthTest:{enabled:s}})),(!u(this._translucentRS)||this._translucentRS.depthTest.enabled!==s)&&(this._translucentRS=pt.fromCache({blending:Xs.ALPHA_BLEND,depthMask:!s,depthTest:{enabled:s}})),this._batchTable.update(e),r.render||r.pick){const c=this._colorCommands;oA(this,e,c,a)}};const oi=new Q,jl=new Q;function oA(e,t,n,o){const i=t.context,a=t.commandList,r=n.length;let s=0,c=!0;const f=e._vertexArrays,d=e.debugShowBoundingVolume,p=e._batchTable.getUniformMapCallback(),_=f.length;for(let g=0;g<_;++g){const b=f[g],E=b.buckets,v=E.length;for(let C=0;C<v;++C){const x=E[C];let R=x.offset;const N=x.bucket.shaderProgram,F=x.bucket.polylines,q=F.length;let D,B,L=0,G,Y;for(let y=0;y<q;++y){const w=F[y],S=aA(w._material);if(S!==D){if(u(D)&&L>0){const H=B.isTranslucent();s>=r?(G=new un({owner:e}),n.push(G)):G=n[s],++s,Y=Ct(p(B._uniforms),e._uniformMap),G.boundingVolume=Q.clone(oi,G.boundingVolume),G.modelMatrix=o,G.shaderProgram=N,G.vertexArray=b.va,G.renderState=H?e._translucentRS:e._opaqueRS,G.pass=H?vo.TRANSLUCENT:vo.OPAQUE,G.debugShowBoundingVolume=d,G.pickId="v_pickColor",G.uniformMap=Y,G.count=L,G.offset=R,R+=L,L=0,c=!0,a.push(G)}B=w._material,B.update(i),D=S}const I=w._locatorBuckets,k=I.length;for(let H=0;H<k;++H){const j=I[H];j.locator===x&&(L+=j.count)}let V;t.mode===ke.SCENE3D?V=w._boundingVolumeWC:t.mode===ke.COLUMBUS_VIEW?V=w._boundingVolume2D:t.mode===ke.SCENE2D?u(w._boundingVolume2D)&&(V=Q.clone(w._boundingVolume2D,jl),V.center.x=0):u(w._boundingVolumeWC)&&u(w._boundingVolume2D)&&(V=Q.union(w._boundingVolumeWC,w._boundingVolume2D,jl)),c?(c=!1,Q.clone(V,oi)):Q.union(V,oi,oi)}u(D)&&L>0&&(s>=r?(G=new un({owner:e}),n.push(G)):G=n[s],++s,Y=Ct(p(B._uniforms),e._uniformMap),G.boundingVolume=Q.clone(oi,G.boundingVolume),G.modelMatrix=o,G.shaderProgram=N,G.vertexArray=b.va,G.renderState=B.isTranslucent()?e._translucentRS:e._opaqueRS,G.pass=B.isTranslucent()?vo.TRANSLUCENT:vo.OPAQUE,G.debugShowBoundingVolume=d,G.pickId="v_pickColor",G.uniformMap=Y,G.count=L,G.offset=R,c=!0,a.push(G)),D=void 0}}n.length=s}rn.prototype.isDestroyed=function(){return!1};rn.prototype.destroy=function(){return qh(this),Zs(this),kh(this),this._batchTable=this._batchTable&&this._batchTable.destroy(),dt(this)};function iA(e){let t=!1;const n=e._propertiesChanged,o=e._positionBufferUsage;return n[ds]?(o.bufferUsage!==Qt.STREAM_DRAW&&(t=!0,o.bufferUsage=Qt.STREAM_DRAW),o.frameCount=100):o.bufferUsage!==Qt.STATIC_DRAW&&(o.frameCount===0?(t=!0,o.bufferUsage=Qt.STATIC_DRAW):o.frameCount--),t}const Hl=[0,0,0];function Wl(e,t,n){e._createVertexArray=!1,Zs(e),qh(e),sA(e);const o=[[]];let i=o[0];const a=e._batchTable,r=e._useHighlightColor,s=[0];let c=0;const f=[[]];let d=0;const m=e._polylineBuckets;let p,_;for(p in m)m.hasOwnProperty(p)&&(_=m[p],_.updateShader(t,a,r),d+=_.lengthOfPositions);if(d>0){const g=e._mode,b=new Float32Array(6*d*3),E=new Float32Array(d*4);let v,C=0,x=0,R=0;for(p in m)if(m.hasOwnProperty(p)){_=m[p],_.write(b,E,C,x,R,a,t,n),g===ke.MORPHING&&(u(v)||(v=new Float32Array(6*d*3)),_.writeForMorph(v,C));const Y=_.lengthOfPositions;C+=6*Y*3,x+=Y*4,R+=Y*4,c=_.updateIndices(o,s,f,c)}const N=e._positionBufferUsage.bufferUsage,F=Qt.STATIC_DRAW;e._positionBuffer=nt.createVertexBuffer({context:t,typedArray:b,usage:N});let q;u(v)&&(q=nt.createVertexBuffer({context:t,typedArray:v,usage:N})),e._texCoordExpandAndBatchIndexBuffer=nt.createVertexBuffer({context:t,typedArray:E,usage:F});const D=3*Float32Array.BYTES_PER_ELEMENT,B=4*Float32Array.BYTES_PER_ELEMENT;let L=0;const G=o.length;for(let Y=0;Y<G;++Y)if(i=o[Y],i.length>0){const y=new Uint16Array(i),w=nt.createIndexBuffer({context:t,typedArray:y,usage:Qt.STATIC_DRAW,indexDatatype:$e.UNSIGNED_SHORT});L+=s[Y];const S=6*(Y*(D*A.SIXTY_FOUR_KILOBYTES)-L*D),I=D+S,k=D+I,V=D+k,H=D+V,j=D+H,$=Y*(B*A.SIXTY_FOUR_KILOBYTES)-L*B,te=[{index:zt.position3DHigh,componentsPerAttribute:3,componentDatatype:oe.FLOAT,offsetInBytes:S,strideInBytes:6*D},{index:zt.position3DLow,componentsPerAttribute:3,componentDatatype:oe.FLOAT,offsetInBytes:I,strideInBytes:6*D},{index:zt.position2DHigh,componentsPerAttribute:3,componentDatatype:oe.FLOAT,offsetInBytes:S,strideInBytes:6*D},{index:zt.position2DLow,componentsPerAttribute:3,componentDatatype:oe.FLOAT,offsetInBytes:I,strideInBytes:6*D},{index:zt.prevPosition3DHigh,componentsPerAttribute:3,componentDatatype:oe.FLOAT,offsetInBytes:k,strideInBytes:6*D},{index:zt.prevPosition3DLow,componentsPerAttribute:3,componentDatatype:oe.FLOAT,offsetInBytes:V,strideInBytes:6*D},{index:zt.prevPosition2DHigh,componentsPerAttribute:3,componentDatatype:oe.FLOAT,offsetInBytes:k,strideInBytes:6*D},{index:zt.prevPosition2DLow,componentsPerAttribute:3,componentDatatype:oe.FLOAT,offsetInBytes:V,strideInBytes:6*D},{index:zt.nextPosition3DHigh,componentsPerAttribute:3,componentDatatype:oe.FLOAT,offsetInBytes:H,strideInBytes:6*D},{index:zt.nextPosition3DLow,componentsPerAttribute:3,componentDatatype:oe.FLOAT,offsetInBytes:j,strideInBytes:6*D},{index:zt.nextPosition2DHigh,componentsPerAttribute:3,componentDatatype:oe.FLOAT,offsetInBytes:H,strideInBytes:6*D},{index:zt.nextPosition2DLow,componentsPerAttribute:3,componentDatatype:oe.FLOAT,offsetInBytes:j,strideInBytes:6*D},{index:zt.texCoordExpandAndBatchIndex,componentsPerAttribute:4,componentDatatype:oe.FLOAT,vertexBuffer:e._texCoordExpandAndBatchIndexBuffer,offsetInBytes:$}];let se,ce,le,pe;g===ke.SCENE3D?(ce=e._positionBuffer,se="vertexBuffer",le=Hl,pe="value"):g===ke.SCENE2D||g===ke.COLUMBUS_VIEW?(ce=Hl,se="value",le=e._positionBuffer,pe="vertexBuffer"):(ce=q,se="vertexBuffer",le=e._positionBuffer,pe="vertexBuffer"),te[0][se]=ce,te[1][se]=ce,te[2][pe]=le,te[3][pe]=le,te[4][se]=ce,te[5][se]=ce,te[6][pe]=le,te[7][pe]=le,te[8][se]=ce,te[9][se]=ce,te[10][pe]=le,te[11][pe]=le;const De=new tn({context:t,attributes:te,indexBuffer:w});e._vertexArrays.push({va:De,buckets:f[Y]})}}}function rA(e,t){return t instanceof St?t.id:t}const sr=[];function aA(e){const t=X._uniformList[e.type],n=t.length;sr.length=2*n;let o=0;for(let i=0;i<n;++i){const a=t[i];sr[o]=a,sr[o+1]=e._uniforms[a](),o+=2}return`${e.type}:${JSON.stringify(sr,rA)}`}function sA(e){const t=e._mode,n=e._modelMatrix,o=e._polylineBuckets={},i=e._polylines,a=i.length;for(let r=0;r<a;++r){const s=i[r];if(s._actualPositions.length>1){s.update();const c=s.material;let f=o[c.type];u(f)||(f=o[c.type]=new yn(c,t,n)),f.addPolyline(s)}}}function cA(e,t){const n=t.mode;(e._mode!==n||!M.equals(e._modelMatrix,e.modelMatrix))&&(e._mode=n,e._modelMatrix=M.clone(e.modelMatrix),e._createVertexArray=!0)}function $s(e){if(e._polylinesRemoved){e._polylinesRemoved=!1;const t=[],n=[];let o=0,i;const a=e._polylines.length;for(let r=0;r<a;++r)i=e._polylines[r],i.isDestroyed||(i._index=o++,n.push(i),t.push(i));e._polylines=t,e._polylinesToUpdate=n}}function Zs(e){const t=e._polylines,n=t.length;for(let o=0;o<n;++o)if(!t[o].isDestroyed){const i=t[o]._bucket;u(i)&&(i.shaderProgram=i.shaderProgram&&i.shaderProgram.destroy())}}function qh(e){const t=e._vertexArrays.length;for(let n=0;n<t;++n)e._vertexArrays[n].va.destroy();e._vertexArrays.length=0}rn.prototype._updatePolyline=function(e,t){this._polylinesUpdated=!0,e._dirty||this._polylinesToUpdate.push(e),++this._propertiesChanged[t]};function kh(e){const t=e._polylines,n=t.length;for(let o=0;o<n;++o)t[o].isDestroyed||t[o]._destroy()}function Fa(e,t,n){this.count=e,this.offset=t,this.bucket=n}function yn(e,t,n){this.polylines=[],this.lengthOfPositions=0,this.material=e,this.shaderProgram=void 0,this.mode=t,this.modelMatrix=n}yn.prototype.addPolyline=function(e){this.polylines.push(e),e._actualLength=this.getPolylinePositionsLength(e),this.lengthOfPositions+=e._actualLength,e._bucket=this};yn.prototype.updateShader=function(e,t,n){if(u(this.shaderProgram))return;const o=["DISTANCE_DISPLAY_CONDITION"];n&&o.push("VECTOR_TILE"),this.material.shaderSource.search(/in\s+float\s+v_polylineAngle;/g)!==-1&&o.push("POLYLINE_DASH"),ot.isInternetExplorer()||o.push("CLIP_POLYLINE");const i=new Ue({defines:o,sources:[`in vec4 v_pickColor;
`,this.material.shaderSource,H1]}),a=t.getVertexShaderCallback()(Y1),r=new Ue({defines:o,sources:[j1,a]});this.shaderProgram=en.fromCache({context:e,vertexShaderSource:r,fragmentShaderSource:i,attributeLocations:zt})};function Vh(e){return l.dot(l.UNIT_X,e._boundingVolume.center)<0||e._boundingVolume.intersectPlane(Te.ORIGIN_ZX_PLANE)===Ke.INTERSECTING}yn.prototype.getPolylinePositionsLength=function(e){let t;if(this.mode===ke.SCENE3D||!Vh(e))return t=e._actualPositions.length,t*4-4;let n=0;const o=e._segments.lengths;t=o.length;for(let i=0;i<t;++i)n+=o[i]*4-4;return n};const Je=new l,kt=new l,Vt=new l,Lr=new l,lA=new W,fA=new U;yn.prototype.write=function(e,t,n,o,i,a,r,s){const c=this.mode,f=s.ellipsoid.maximumRadius*A.PI,d=this.polylines,m=d.length;for(let p=0;p<m;++p){const _=d[p],g=_.width,b=_.show&&g>0,E=_._index,v=this.getSegments(_,s),C=v.positions,x=v.lengths,R=C.length,N=_.getPickId(r).color;let F=0,q=0,D;for(let k=0;k<R;++k){k===0?_._loop?D=C[R-2]:(D=Lr,l.subtract(C[0],C[1],D),l.add(C[0],D,D)):D=C[k-1],l.clone(D,kt),l.clone(C[k],Je),k===R-1?_._loop?D=C[1]:(D=Lr,l.subtract(C[R-1],C[R-2],D),l.add(C[R-1],D,D)):D=C[k+1],l.clone(D,Vt);const V=x[F];k===q+V&&(q+=V,++F);const H=k-q===0,j=k===q+x[F]-1;c===ke.SCENE2D&&(kt.z=0,Je.z=0,Vt.z=0),(c===ke.SCENE2D||c===ke.MORPHING)&&(H||j)&&f-Math.abs(Je.x)<1&&((Je.x<0&&kt.x>0||Je.x>0&&kt.x<0)&&l.clone(Je,kt),(Je.x<0&&Vt.x>0||Je.x>0&&Vt.x<0)&&l.clone(Je,Vt));const $=H?2:0,te=j?2:4;for(let se=$;se<te;++se){qe.writeElements(Je,e,n),qe.writeElements(kt,e,n+6),qe.writeElements(Vt,e,n+12);const ce=se-2<0?-1:1;t[i]=k/(R-1),t[i+1]=2*(se%2)-1,t[i+2]=ce,t[i+3]=E,n+=6*3,i+=4}}const B=lA;B.x=O.floatToByte(N.red),B.y=O.floatToByte(N.green),B.z=O.floatToByte(N.blue),B.w=O.floatToByte(N.alpha);const L=fA;L.x=g,L.y=b?1:0;const G=c===ke.SCENE2D?_._boundingVolume2D:_._boundingVolumeWC,Y=qe.fromCartesian(G.center,Bh),y=Y.high,w=W.fromElements(Y.low.x,Y.low.y,Y.low.z,G.radius,Uh),S=Gh;S.x=0,S.y=Number.MAX_VALUE;const I=_.distanceDisplayCondition;u(I)&&(S.x=I.near,S.y=I.far),a.setBatchedAttribute(E,0,L),a.setBatchedAttribute(E,1,B),a.attributes.length>2&&(a.setBatchedAttribute(E,2,y),a.setBatchedAttribute(E,3,w),a.setBatchedAttribute(E,4,S))}};const uA=new l,hA=new l,dA=new l,Yl=new l;yn.prototype.writeForMorph=function(e,t){const n=this.modelMatrix,o=this.polylines,i=o.length;for(let a=0;a<i;++a){const r=o[a],s=r._segments.positions,c=r._segments.lengths,f=s.length;let d=0,m=0;for(let p=0;p<f;++p){let _;p===0?r._loop?_=s[f-2]:(_=Yl,l.subtract(s[0],s[1],_),l.add(s[0],_,_)):_=s[p-1],_=M.multiplyByPoint(n,_,hA);const g=M.multiplyByPoint(n,s[p],uA);let b;p===f-1?r._loop?b=s[1]:(b=Yl,l.subtract(s[f-1],s[f-2],b),l.add(s[f-1],b,b)):b=s[p+1],b=M.multiplyByPoint(n,b,dA);const E=c[d];p===m+E&&(m+=E,++d);const v=p-m===0,C=p===m+c[d]-1,x=v?2:0,R=C?2:4;for(let N=x;N<R;++N)qe.writeElements(g,e,t),qe.writeElements(_,e,t+6),qe.writeElements(b,e,t+12),t+=6*3}}};const mA=new Array(1);yn.prototype.updateIndices=function(e,t,n,o){let i=n.length-1,a=new Fa(0,o,this);n[i].push(a);let r=0,s=e[e.length-1],c=0;s.length>0&&(c=s[s.length-1]+1);const f=this.polylines,d=f.length;for(let m=0;m<d;++m){const p=f[m];p._locatorBuckets=[];let _;if(this.mode===ke.SCENE3D){_=mA;const b=p._actualPositions.length;if(b>0)_[0]=b;else continue}else _=p._segments.lengths;const g=_.length;if(g>0){let b=0;for(let E=0;E<g;++E){const v=_[E]-1;for(let C=0;C<v;++C)c+4>A.SIXTY_FOUR_KILOBYTES&&(p._locatorBuckets.push({locator:a,count:b}),b=0,t.push(4),s=[],e.push(s),c=0,a.count=r,r=0,o=0,a=new Fa(0,0,this),n[++i]=[a]),s.push(c,c+2,c+1),s.push(c+1,c+2,c+3),b+=6,r+=6,o+=6,c+=4}p._locatorBuckets.push({locator:a,count:b}),c+4>A.SIXTY_FOUR_KILOBYTES&&(t.push(0),s=[],e.push(s),c=0,a.count=r,o=0,r=0,a=new Fa(0,0,this),n[++i]=[a])}p._clean()}return a.count=r,o};yn.prototype.getPolylineStartIndex=function(e){const t=this.polylines;let n=0;const o=t.length;for(let i=0;i<o;++i){const a=t[i];if(a===e)break;n+=a._actualLength}return n};const So={positions:void 0,lengths:void 0},Xl=new Array(1),pA=new l,_A=new ne;yn.prototype.getSegments=function(e,t){let n=e._actualPositions;if(this.mode===ke.SCENE3D)return Xl[0]=n.length,So.positions=n,So.lengths=Xl,So;Vh(e)&&(n=e._segments.positions);const o=t.ellipsoid,i=[],a=this.modelMatrix,r=n.length;let s,c=pA;for(let f=0;f<r;++f)s=n[f],c=M.multiplyByPoint(a,s,c),i.push(t.project(o.cartesianToCartographic(c,_A)));if(i.length>0){e._boundingVolume2D=Q.fromPoints(i,e._boundingVolume2D);const f=e._boundingVolume2D.center;e._boundingVolume2D.center=new l(f.z,f.x,f.y)}return So.positions=i,So.lengths=e._segments.lengths,So};let $l;yn.prototype.writeUpdate=function(e,t,n,o){const i=this.mode,a=o.ellipsoid.maximumRadius*A.PI;let r=t._actualLength;if(r){e+=this.getPolylineStartIndex(t);let s=$l;const c=6*r*3;!u(s)||s.length<c?s=$l=new Float32Array(c):s.length>c&&(s=new Float32Array(s.buffer,0,c));const f=this.getSegments(t,o),d=f.positions,m=f.lengths;let p=0,_=0,g=0,b;r=d.length;for(let E=0;E<r;++E){E===0?t._loop?b=d[r-2]:(b=Lr,l.subtract(d[0],d[1],b),l.add(d[0],b,b)):b=d[E-1],l.clone(b,kt),l.clone(d[E],Je),E===r-1?t._loop?b=d[1]:(b=Lr,l.subtract(d[r-1],d[r-2],b),l.add(d[r-1],b,b)):b=d[E+1],l.clone(b,Vt);const v=m[_];E===g+v&&(g+=v,++_);const C=E-g===0,x=E===g+m[_]-1;i===ke.SCENE2D&&(kt.z=0,Je.z=0,Vt.z=0),(i===ke.SCENE2D||i===ke.MORPHING)&&(C||x)&&a-Math.abs(Je.x)<1&&((Je.x<0&&kt.x>0||Je.x>0&&kt.x<0)&&l.clone(Je,kt),(Je.x<0&&Vt.x>0||Je.x>0&&Vt.x<0)&&l.clone(Je,Vt));const R=C?2:0,N=x?2:4;for(let F=R;F<N;++F)qe.writeElements(Je,s,p),qe.writeElements(kt,s,p+6),qe.writeElements(Vt,s,p+12),p+=6*3}n.copyFromArrayView(s,6*3*Float32Array.BYTES_PER_ELEMENT*e)}};const gA={FLOAT:"float",VEC2:"vec2",VEC3:"vec3",VEC4:"vec4",INT:"int",INT_VEC2:"ivec2",INT_VEC3:"ivec3",INT_VEC4:"ivec4",BOOL:"bool",BOOL_VEC2:"bvec2",BOOL_VEC3:"bvec3",BOOL_VEC4:"bvec4",MAT2:"mat2",MAT3:"mat3",MAT4:"mat4",SAMPLER_2D:"sampler2D",SAMPLER_CUBE:"samplerCube"},to=Object.freeze(gA),we=e=>typeof e=="number"&&Number.isFinite(e);function jh(e,t,n){return e+(t-e)*n}const Ks=e=>e,yA=e=>e*e,bA=e=>e*(2-e),TA=e=>e<.5?2*e*e:-1+(4-2*e)*e,EA=e=>e*e*e,wA=e=>{const t=e-1;return t*t*t+1},AA=e=>{if(e<.5)return 4*e*e*e;const t=2*e-2;return(t*t*t+2)/2},OA=e=>1-Math.sqrt(1-e*e),SA=e=>{const t=e-1;return Math.sqrt(1-t*t)},xA=e=>{if(e<.5){const n=2*e;return(1-Math.sqrt(1-n*n))/2}const t=-2*e+2;return(Math.sqrt(1-t*t)+1)/2},CA=e=>1-Math.cos(e*sf),vA=e=>Math.sin(e*sf),RA=e=>-(Math.cos(fd*e)-1)/2,zA=e=>e===0?0:Math.pow(2,10*(e-1)),IA=e=>e===1?1:1-Math.pow(2,-10*e),PA=e=>e===0||e===1?e:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,Qs={LINEAR_NONE:Ks,QUADRATIC_IN:yA,QUADRATIC_OUT:bA,QUADRATIC_IN_OUT:TA,CUBIC_IN:EA,CUBIC_OUT:wA,CUBIC_IN_OUT:AA,CIRCULAR_IN:OA,CIRCULAR_OUT:SA,CIRCULAR_IN_OUT:xA,SINUSOIDAL_IN:CA,SINUSOIDAL_OUT:vA,SINUSOIDAL_IN_OUT:RA,EXPONENTIAL_IN:zA,EXPONENTIAL_OUT:IA,EXPONENTIAL_IN_OUT:PA},MA=({startedAtMs:e,durationMs:t,nowMs:n})=>!we(e)||!we(t)||!we(n)||t<0?null:t===0?1:Hn((n-e)/t,0,1),Js=({startedAtMs:e,durationMs:t,nowMs:n,easing:o=Ks})=>{const i=MA({startedAtMs:e,durationMs:t,nowMs:n});if(i===null)return null;const a=o(i);return we(a)?Hn(a,0,1):null},sS=({start:e,target:t,startedAtMs:n,durationMs:o,nowMs:i,easing:a=Ks})=>{if(!we(e)||!we(t))return null;const r=Js({startedAtMs:n,durationMs:o,nowMs:i,easing:a});return r===null?null:jh(e,t,r)};function NA(e,t){return hd(t-e)}const DA={PERSPECTIVE:"PerspectiveCamera",ORTHOGRAPHIC:"OrthographicCamera"},LA=960,FA=1e-6,BA=({aspect:e,viewportWidthPx:t,viewportHeightPx:n})=>we(e)&&e>0?e:we(t)&&we(n)&&t>0&&n>0?t/n:void 0,UA=(e,t)=>we(e)&&e>0&&we(t)&&t>0?Math.atan(Math.tan(e*.5)*t)*2:void 0,GA=(e,t)=>{if(!(!we(e)||e<=0||!we(t)||t<=0))return t>1?Math.atan(Math.tan(e*.5)/t)*2:e},Fr=(e,t={})=>{const n=BA(t),o=UA(e.fov,n),i=[e.fov,e.fovHorizontal,o].filter(a=>we(a)&&a>0);return i.length>0?Math.max(...i):void 0},qA=e=>{var n;const t=(n=e==null?void 0:e.orthographicScale)==null?void 0:n.metersPerCssPixel;return(e==null?void 0:e.type)===DA.ORTHOGRAPHIC&&we(t)&&t>0?t:null},cS=e=>we(e)&&e>0?{metersPerCssPixel:e}:void 0,ec=({viewportWidthPx:e,viewportHeightPx:t})=>{if(we(e)&&we(t)&&e>0&&t>0){const n=Math.max(e,t)*.5;return we(n)&&n>0?n:null}return LA},tc=e=>{if(!we(e))return null;const t=Math.tan(e*.5);return we(t)&&Math.abs(t)>=FA?t:null},Br=e=>{const t=tc(e);return t!==null&&t>0?Math.log(t):null},Hh=e=>{if(!we(e))return null;const t=Math.exp(e),n=2*Math.atan(t);return we(n)&&n>0?n:null},kA=({startFovRad:e,targetFovRad:t,progress:n})=>{const o=Br(e),i=Br(t);if(o===null||i===null||!we(n))return null;const a=o+(i-o)*n;return Hh(a)},lS=({startRangeM:e,startFovRad:t,targetFovRad:n,progress:o,minRangeM:i=.01,viewportWidthPx:a,viewportHeightPx:r})=>{const s=kA({startFovRad:t,targetFovRad:n,progress:o});return s===null?null:WA({currentRangeM:e,currentFovRad:t,targetFovRad:s,minRangeM:i,viewportWidthPx:a,viewportHeightPx:r})},Wh=({rangeM:e,fovRad:t,viewportWidthPx:n,viewportHeightPx:o})=>{const i=ec({viewportWidthPx:n,viewportHeightPx:o}),a=tc(t);if(i===null||a===null||!we(e)||e<=0)return null;const s=e*Math.abs(a)/i;return we(s)&&s>0?s:null},VA=({intrinsics:e,rangeM:t,viewportWidthPx:n,viewportHeightPx:o})=>{const i=qA(e);if(i!==null)return i;const a=Fr(e,{viewportWidthPx:n,viewportHeightPx:o});return!we(a)||a<=0||!we(t)||t<=0?null:Wh({rangeM:t,fovRad:a,viewportWidthPx:n,viewportHeightPx:o})},Yh=({metersPerCssPixel:e,fovRad:t,minRangeM:n=.01,viewportWidthPx:o,viewportHeightPx:i})=>{const a=ec({viewportWidthPx:o,viewportHeightPx:i}),r=tc(t);if(a===null||r===null||!we(e)||e<=0)return null;const c=e*a/Math.abs(r);return we(c)&&c>=n?c:null},fS=({metersPerCssPixel:e,rangeM:t,viewportWidthPx:n,viewportHeightPx:o})=>{const i=ec({viewportWidthPx:n,viewportHeightPx:o});if(i===null||!we(e)||e<=0||!we(t)||t<=0)return null;const a=e*i/t,r=Math.atan(Math.abs(a))*2;return we(r)&&r>0?r:null},jA=({direction:e,zoomDelta:t})=>{if(!we(t)||t<=0)return null;const n=Math.pow(2,e==="out"?t:-t);return we(n)&&n>0?n:null},HA=({metersPerCssPixel:e,direction:t,zoomDelta:n})=>{const o=jA({direction:t,zoomDelta:n});if(o===null||!we(e)||e<=0)return null;const i=e*o;return we(i)&&i>0?i:null},uS=({intrinsics:e,currentRangeM:t,direction:n,zoomDelta:o,minRangeM:i=.01,viewportWidthPx:a,viewportHeightPx:r})=>{const s=VA({intrinsics:e,rangeM:t,viewportWidthPx:a,viewportHeightPx:r}),c=s!==null?HA({metersPerCssPixel:s,direction:n,zoomDelta:o}):null,f=Fr(e,{viewportWidthPx:a,viewportHeightPx:r});return c===null||!we(f)||f<=0?null:Yh({metersPerCssPixel:c,fovRad:f,minRangeM:i,viewportWidthPx:a,viewportHeightPx:r})},WA=({currentRangeM:e,currentFovRad:t,targetFovRad:n,minRangeM:o=.01,viewportWidthPx:i,viewportHeightPx:a})=>{const r=Wh({rangeM:e,fovRad:t,viewportWidthPx:i,viewportHeightPx:a});return r===null?null:Yh({metersPerCssPixel:r,fovRad:n,minRangeM:o,viewportWidthPx:i,viewportHeightPx:a})},YA=new Vn(1,0,0),XA=new Vn(0,1,0),$A=new Vn(0,0,-1),hS=e=>{const t=$A.clone().applyQuaternion(e).normalize(),n=XA.clone().applyQuaternion(e).normalize(),o=YA.clone().applyQuaternion(e).normalize();return{forward:t,up:n,right:o}},ZA=({forward:e,right:t,up:n})=>new ud().setFromRotationMatrix(new uo().makeBasis(t.clone().normalize(),n.clone().normalize(),e.clone().negate().normalize())),KA=new Vn(1,0,0),QA=new Vn(0,0,1),JA=new Vn(0,-1,0),Xh=new uo().makeBasis(KA,QA,JA),eO=Xh.clone().transpose(),$h=new uo,tO=(e=new uo)=>e.copy(Xh),nO=(e=new uo)=>e.copy(eO),oO=(e,t=e.clone())=>t.copy(e).transformDirection(nO($h)),iO=(e,t=e.clone())=>t.copy(e).transformDirection(tO($h)),Zh=new uo,rO=new uo,Ba=(e,t,n=e.clone())=>{const o=n.copy(e).transformDirection(cf(t,Zh));return oO(o,n)},dS=(e,t,n=e.clone())=>{const o=iO(e,n),i=rO.copy(cf(t,Zh)).invert();return o.transformDirection(i).normalize()},mS=(e,t)=>{const n=Ba(e.forward,t),o=Ba(e.right,t);Ba(e.up,t);const i=o.clone().normalize(),a=new Vn().crossVectors(i,n).normalize(),r=new Vn().crossVectors(a,i).normalize();return ZA({forward:r,right:i,up:a})},Po=e=>typeof e=="number"&&Number.isFinite(e),aO=e=>{if(e&&Po(e.fovy)&&e.fovy>0)return e.fovy;if(!(!e||!Po(e.fov)||e.fov<=0))return Po(e.aspectRatio)&&e.aspectRatio>1?Math.atan(Math.tan(e.fov*.5)/e.aspectRatio)*2:e.fov},sO=e=>{if(!(!e||!Po(e.fov)||e.fov<=0))return e.fov},cO=(e,t)=>{!Po(t)||t<=0||(e.fov=Po(e.aspectRatio)&&e.aspectRatio>1?Math.atan(Math.tan(t*.5)*e.aspectRatio)*2:t)};new Q;const lO=500,pS=(e,t,n,{durationMs:o=lO,easing:i=Qs.SINUSOIDAL_IN_OUT,onComplete:a,onCancel:r}={})=>{const s=e.camera;if(!s||e.isDestroyed())return()=>{};const c=s.heading,f=s.pitch,d=l.distance(t,s.position),m=NA(c,n.heading),p=n.pitch-f,_=n.range-d;if(Math.abs(m)<1e-6&&Math.abs(p)<1e-6&&Math.abs(_)<.001)return()=>{};let g=!1;const b=performance.now(),E=(R,N,F)=>{s.lookAt(t,new us(R,N,F));try{s.lookAtTransform(M.IDENTITY)}catch{}},v=R=>{if(!e.isDestroyed()){e.preRender.removeEventListener(x);try{s.lookAtTransform(M.IDENTITY)}catch{}e.requestRender(),r==null||r()}},C=()=>{e.isDestroyed()||(E(n.heading,n.pitch,n.range),e.preRender.removeEventListener(x),e.requestRender(),a==null||a())},x=()=>{if(g||e.isDestroyed()){v();return}const R=performance.now()-b,N=o<=0?1:Math.min(R/o,1),F=A.clamp(i(N),0,1),q=c+m*F,D=f+p*F,B=d+_*F;E(q,D,B),e.requestRender(),N>=1&&C()};return e.preRender.addEventListener(x),e.requestRender(),()=>{g=!0,v()}},_S=(e,t,n={})=>{const o=e.camera;return o?(o.lookAtTransform(M.IDENTITY),o.flyTo({destination:t.position,orientation:{direction:t.direction,up:t.up},duration:n.duration,complete:n.onComplete,cancel:n.onCancel}),n.applyFov!==!1&&t.fov!==void 0&&o.frustum instanceof Ot&&cO(o.frustum,t.fov),e.requestRender(),!0):!1},fO=1e-4,Ua=1e-6,Zl=1e-6,di=0,Kl=e=>{const{camera:t}=e,{frustum:n}=t,o=n.projectionMatrix;return{position:l.clone(t.positionWC),direction:l.clone(t.directionWC),up:l.clone(t.upWC),right:l.clone(t.rightWC),projectionMatrix:o?M.clone(o,new M):null,frustumFovY:aO(n)??0}},uO=(e,t)=>l.equalsEpsilon(e.position,t.position,di,fO),hO=(e,t)=>l.equalsEpsilon(e.direction,t.direction,di,Ua)&&l.equalsEpsilon(e.up,t.up,di,Ua)&&l.equalsEpsilon(e.right,t.right,di,Ua),dO=(e,t)=>e.projectionMatrix&&t.projectionMatrix?M.equalsEpsilon(e.projectionMatrix,t.projectionMatrix,Zl):e.projectionMatrix||t.projectionMatrix?!1:A.equalsEpsilon(e.frustumFovY,t.frustumFovY,di,Zl),mO=(e,t)=>!e&&!t?!0:!e||!t?!1:uO(e,t)&&hO(e,t)&&dO(e,t),Kh=Qs.CUBIC_OUT,Qh=e=>{var i,a;if(!(e.camera.frustum instanceof Ot))return null;const t=e.camera.frustum.aspectRatio;if(typeof t=="number"&&Number.isFinite(t)&&t>0)return t;const n=(i=e.canvas)==null?void 0:i.clientWidth,o=(a=e.canvas)==null?void 0:a.clientHeight;return typeof n=="number"&&Number.isFinite(n)&&n>0&&typeof o=="number"&&Number.isFinite(o)&&o>0?n/o:null},gS=({scene:e,startedAtMs:t,durationMs:n,easing:o,startFovRad:i,targetFovRad:a})=>{const r=Qh(e),s=r!==null?Fr({fov:i},{aspect:r}):void 0,c=r!==null?Fr({fov:a},{aspect:r}):void 0;return{startedAtMs:t,durationMs:n,easing:o,startFovRad:i,targetFovRad:a,startLongerEdgeFovRad:typeof s=="number"?s:null,targetLongerEdgeFovRad:typeof c=="number"?c:null,startLogTanHalfLongerEdgeFov:typeof s=="number"?Br(s):null,targetLogTanHalfLongerEdgeFov:typeof c=="number"?Br(c):null}},yS=({scene:e,curve:t,nowMs:n})=>t?Jh({curve:t,nowMs:n}):e.camera.frustum instanceof Ot?sO(e.camera.frustum)??null:null,bS=({scene:e,curve:t,nowMs:n})=>{const o=Jh({curve:t,nowMs:n}),i=Qh(e);if(typeof o=="number"&&i!==null){const r=GA(o,i);return typeof r=="number"?r:null}const a=Js({startedAtMs:t.startedAtMs,durationMs:t.durationMs,nowMs:n,easing:t.easing??Kh});return a===null?null:t.startFovRad+(t.targetFovRad-t.startFovRad)*a},Jh=({curve:e,nowMs:t})=>{const n=Js({startedAtMs:e.startedAtMs,durationMs:e.durationMs,nowMs:t,easing:e.easing??Kh});if(n===null)return null;if(typeof e.startLogTanHalfLongerEdgeFov=="number"&&typeof e.targetLogTanHalfLongerEdgeFov=="number"){const o=e.startLogTanHalfLongerEdgeFov+(e.targetLogTanHalfLongerEdgeFov-e.startLogTanHalfLongerEdgeFov)*n,i=Hh(o);return typeof i=="number"?i:null}return typeof e.startLongerEdgeFovRad=="number"&&typeof e.targetLongerEdgeFovRad=="number"?e.startLongerEdgeFovRad+(e.targetLongerEdgeFovRad-e.startLongerEdgeFovRad)*n:null},pO=2,_O=5,gO=3,yO=1,bO=O.WHITE,TO=Qs.SINUSOIDAL_IN_OUT,ed="__carmaAxisVisualizerId",Ql=0,Jl=1e-7,ef=(e,t,{durationMs:n=200,easing:o=TO,onUpdate:i,onComplete:a,onCancel:r})=>{if(n<=0)return i(t),a==null||a(),()=>{};let s=!1;const c=performance.now();let f=0;const d=m=>{if(s)return;const p=m-c,_=Math.min(p/n,1),g=o(_),b=jh(e,t,g);if(i(b),_>=1){a==null||a();return}f=window.requestAnimationFrame(d)};return f=window.requestAnimationFrame(d),()=>{s||(s=!0,window.cancelAnimationFrame(f),r==null||r())}},tf=(e,t)=>{const n=l.normalize(t,new l),o=Math.abs(l.dot(n,l.UNIT_Z))>.9?l.UNIT_X:l.UNIT_Z,i=l.normalize(l.cross(n,o,new l),new l),a=l.normalize(l.cross(i,n,new l),new l),r=M.clone(M.IDENTITY,new M);return M.setColumn(r,0,new W(i.x,i.y,i.z,0),r),M.setColumn(r,1,new W(a.x,a.y,a.z,0),r),M.setColumn(r,2,new W(n.x,n.y,n.z,0),r),M.setColumn(r,3,new W(e.x,e.y,e.z,1),r),r},nf=e=>{if(!e)return!1;try{return!e.isDestroyed()}catch{return!1}},of=e=>Math.max(1,e.canvas.clientHeight),EO=(e,t)=>{const n=e.primitives;for(let o=n.length-1;o>=0;o-=1){const i=n.get(o);if(i&&i[ed]===t)try{n.remove(i)}catch{}}},TS=(e,{origin:t,upVector:n,lengthMultiplier:o=pO,dashPixelLength:i=_O,gapPixelLength:a=gO,color:r=bO,width:s=yO})=>{let c=l.clone(t),f=l.normalize(n,new l),d=null,m,p=!1,_=!1,g=!0,b=1,E=null,v=null,C=null,x=null,R=null;const N=r,F=()=>{try{v==null||v()}catch{}},q=S=>{const I=(d==null?void 0:d.frustumFovY)||1;return S*Math.tan(I/2)*2/(m??1)},D=()=>d?l.distance(d.position,c)*o:1e5,B=()=>{if(!d)return{dashMeters:1e3,gapMeters:500};const S=l.distance(d.position,c),I=q(S);return{dashMeters:i*I,gapMeters:a*I}},L=S=>{if(!C||!x)return;const I=x.uniforms.color;I?(I.red=N.red,I.green=N.green,I.blue=N.blue,I.alpha=S):x.uniforms.color=N.withAlpha(S),F()},G=()=>{if(!E)return;if(C)try{E.primitives.remove(C)}catch{}EO(E,e);const S=D(),{dashMeters:I,gapMeters:k}=B(),V=S*2,H=I+k,j=Math.floor(V/H);C=new rn,C.modelMatrix=tf(c,f),x=X.fromType("Color",{color:N.withAlpha(b)});for(let $=0;$<j;$+=1){const te=-S+$*H,se=te+I;C.add({positions:[new l(0,0,te),new l(0,0,se)],width:s,material:x,show:g})}C[ed]=e,E.primitives.add(C)},Y=()=>{if(!C||!E)return;C.modelMatrix=tf(c,f);const S=D(),{dashMeters:I,gapMeters:k}=B(),V=S*2,H=I+k,j=Math.floor(V/H);if(C.length!==j){G();return}for(let $=0;$<j;$+=1){const te=C.get($);if(!te)continue;const se=-S+$*H,ce=se+I;te.positions=[new l(0,0,se),new l(0,0,ce)],te.show=g}F()},y=()=>{R==null||R(),R=null},w={get id(){return e},get isAttached(){return p},get origin(){return c},get isVisible(){return g},getPickExclusions:()=>C?[C]:[],attach:(S,I)=>{if(_)throw new Error("Cannot attach destroyed visualizer");p&&w.detach(),E=S,v=I,d=Kl(E),m=of(E),G(),p=!0,F()},detach:()=>{if(!(!p||!E)){if(y(),C&&nf(E))try{E.primitives.remove(C)}catch{}C=null,x=null,p=!1,F()}},destroy:()=>{_||(w.detach(),_=!0,E=null,v=null)},update:(S,I)=>{if(_)return;const k=nf(E)?E:null,V=k?Kl(k):null,H=k!==null?of(k):void 0,j=l.normalize(I,new l),$=!l.equalsEpsilon(c,S,Ql,Jl),te=!l.equalsEpsilon(f,j,Ql,Jl),se=V!==null&&!mO(d,V);!$&&!te&&!se&&!(H!==void 0&&m!==H)||(l.clone(S,c),l.clone(j,f),V&&(d=V),H!==void 0&&(m=H),p&&Y())},show:()=>{if(!_){if(y(),g=!0,b=1,C)for(let S=0;S<C.length;S+=1){const I=C.get(S);I&&(I.show=!0)}L(b)}},hide:()=>{if(!_){if(y(),g=!1,b=0,C)for(let S=0;S<C.length;S+=1){const I=C.get(S);I&&(I.show=!1)}L(b)}},fadeIn:S=>{if(!(_||!p)){if(y(),g=!0,C)for(let I=0;I<C.length;I+=1){const k=C.get(I);k&&(k.show=!0)}R=ef(b,1,{durationMs:S,onUpdate:I=>{b=I,L(I)}})}},fadeOut:(S,I)=>{_||!p||(y(),R=ef(b,0,{durationMs:S,onUpdate:k=>{b=k,L(k)},onComplete:()=>{if(g=!1,C)for(let k=0;k<C.length;k+=1){const V=C.get(k);V&&(V.show=!1)}F(),I==null||I()}}))}};return w},ft=new Array(16),ut=new Array(16),wO=new M,AO=new M,OO=new l,SO=1e-12,xO=(e,t=1,n=0,o=0)=>{const i=Math.max(t,o),a=Math.cos(n),r=Math.sin(n);return ft[0]=i*a,ft[1]=i*r,ft[2]=0,ft[3]=0,ft[4]=-i*r,ft[5]=i*a,ft[6]=0,ft[7]=0,ft[8]=0,ft[9]=0,ft[10]=1,ft[11]=0,ft[12]=e.x,ft[13]=e.y,ft[14]=e.z,ft[15]=1,M.fromArray(ft,0,new M)},ES=(e,t,n,o,i=1,a=1,r=1,s=new M)=>(ut[0]=t.x*i,ut[1]=t.y*i,ut[2]=t.z*i,ut[3]=0,ut[4]=n.x*a,ut[5]=n.y*a,ut[6]=n.z*a,ut[7]=0,ut[8]=o.x*r,ut[9]=o.y*r,ut[10]=o.z*r,ut[11]=0,ut[12]=e.x,ut[13]=e.y,ut[14]=e.z,ut[15]=1,M.fromArray(ut,0,s)),wS=(e,t,n=new l)=>{const o=t*4;return l.fromElements(e[o],e[o+1],e[o+2],n)},AS=e=>l.magnitudeSquared(e)<=SO?null:l.normalize(e,new l),OS=(e,t=ae.WGS84)=>t.geodeticSurfaceNormal(e,new l),SS=(e,t,n=ae.WGS84)=>{const o=_e.eastNorthUpToFixedFrame(t,n,wO),i=M.inverseTransformation(o,AO),a=M.multiplyByPoint(i,e,OO);return{east:a.x,north:a.y,up:a.z}},Mo={COLOR:"color",CHROME_MIRROR:"chrome-mirror",FROSTED_GLASS:"frosted-glass"},td=24,nd=O.WHITE.withAlpha(.65),CO=nd.alpha,od=1e-6,nc=.001,vO=1e-8,rf=1e-9,id=ye.POSITION_ONLY,RO=ye.POSITION_AND_ST,rd=Yn.getDefaultRenderState(!0,!1),zO=e=>Math.max(Number.isFinite(e)?e:0,od),IO=(e,t)=>{const n=Math.max(0,t-nc);return Hn(typeof e=="number"&&Number.isFinite(e)?e:0,0,n)},PO=(e,t)=>Hn(e/t,0,1-nc),ad=e=>{const t=typeof e=="number"&&Number.isFinite(e)?e:kn;return Hn(t,0,kn)},sd=e=>Math.max(8,Math.floor(typeof e=="number"&&Number.isFinite(e)?e:td)),MO=e=>typeof e=="number"&&Number.isFinite(e)?e:0,NO=(e,t)=>Hn(typeof e=="number"&&Number.isFinite(e)?e:t,0,1),DO=e=>e===Mo.CHROME_MIRROR||e===Mo.FROSTED_GLASS?e:Mo.COLOR,LO=(e,t)=>Math.abs(e-kn)<=t,FO=(e,t)=>{const n=Math.max(1,e);if(t<=rf)return 1;if(LO(t,vO))return n;const o=t/kn*n,i=Math.round(o);return Math.abs(o-i)<=rf?Math.max(1,i):Math.max(1,Math.ceil(o))},cd=(e,t)=>{const n=Math.max(1,e),o=Hn(t,0,kn),i=FO(n,o),a=i>=n;return{segments:n,pointCount:a?i:i+1,isFullCircle:a,stepRad:kn/n}},Ai=(e,t=1)=>{const n=Math.max(t,0);return Array.from({length:e.pointCount},(o,i)=>{const a=e.stepRad*i;return new l(Math.cos(a)*n,Math.sin(a)*n,0)})},BO=(e,t)=>{const n=Ai(e),o=Ai(e,t).reverse();return new ss(n,[new ss(o)])},UO=({sampling:e,normalizedInnerRadius:t})=>{const n=Ai(e);if(t<=0)return[l.ZERO,...n];const o=Ai(e,t).reverse();return[...n,...o]},GO=({innerRadiusRatio:e=0,angleRad:t=kn,segments:n=td,vertexFormat:o=id})=>{const i=sd(n),a=ad(t),r=Hn(Number.isFinite(e)?e:0,0,1-nc),s=cd(i,a);return s.isFullCircle?r>0?new xn({polygonHierarchy:BO(s,r),vertexFormat:o}):xn.fromPositions({positions:Ai(s),vertexFormat:o}):xn.fromPositions({positions:UO({sampling:s,normalizedInnerRadius:r}),vertexFormat:o})},qO=`
in vec3 position3DHigh;
in vec3 position3DLow;
in vec2 st;
in float batchId;

out vec2 v_st;
out vec3 v_positionEC;

void main()
{
    vec4 p = czm_computePosition();
    v_st = st;
    v_positionEC = (czm_modelViewRelativeToEye * p).xyz;
    gl_Position = czm_modelViewProjectionRelativeToEye * p;
}`,kO=`
in vec3 position3DHigh;
in vec3 position3DLow;
in float batchId;

void main()
{
    vec4 p = czm_computePosition();
    gl_Position = czm_modelViewProjectionRelativeToEye * p;
}`,cr=e=>Number.isFinite(e)?e.toFixed(6):"0.0",oc=e=>`vec4(${cr(e.red)}, ${cr(e.green)}, ${cr(e.blue)}, ${cr(e.alpha)})`,VO=e=>`
in vec2 v_st;
in vec3 v_positionEC;

void main()
{
    vec4 color = ${oc(e)};
    vec2 centered = v_st * 2.0 - 1.0;
    float radial = clamp(1.0 - length(centered), 0.0, 1.0);
    vec3 pseudoNormal = normalize(vec3(centered.xy * 0.72, max(0.28, radial)));
    vec3 viewDir = normalize(-v_positionEC);
    float facing = clamp(abs(dot(pseudoNormal, viewDir)), 0.0, 1.0);
    float fresnel = pow(1.0 - facing, 3.6);
    float banding = 0.5 + 0.5 * sin(v_st.y * 30.0 + v_st.x * 10.0);
    float sweep = 0.5 + 0.5 * cos((v_st.x - v_st.y) * 18.0);
    float highlight = clamp(0.22 + banding * 0.36 + sweep * 0.22 + fresnel * 0.35, 0.0, 1.0);
    vec3 chrome = mix(color.rgb * 0.24, vec3(1.0), highlight);
    vec3 glow = chrome * (0.12 + fresnel * 0.20 + radial * 0.05);
    out_FragColor = vec4(chrome + glow, color.a);
}`,jO=e=>`
in vec2 v_st;
in vec3 v_positionEC;

float hash(vec2 p)
{
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

void main()
{
    vec4 color = ${oc(e)};
    vec2 centered = v_st * 2.0 - 1.0;
    float radial = clamp(1.0 - length(centered), 0.0, 1.0);
    vec3 pseudoNormal = normalize(vec3(centered.xy * 0.55, max(0.2, radial)));
    vec3 viewDir = normalize(-v_positionEC);
    float facing = clamp(abs(dot(pseudoNormal, viewDir)), 0.0, 1.0);
    float rim = pow(1.0 - facing, 2.4);
    float grain = hash(floor(v_st * 52.0)) * 0.08;
    float haze = 0.30 + radial * 0.12 + rim * 0.18 + grain;
    vec3 frosted = mix(color.rgb, vec3(1.0), clamp(haze, 0.0, 0.72));
    vec3 glow = frosted * (0.08 + rim * 0.10);
    float alpha = color.a * clamp(0.42 + radial * 0.24 + rim * 0.12, 0.0, 1.0);
    out_FragColor = vec4(frosted + glow, alpha);
}`,HO=(e,t)=>new Yn({translucent:!0,closed:!1,renderState:rd,vertexShaderSource:qO,fragmentShaderSource:e===Mo.CHROME_MIRROR?VO(t):jO(t)}),WO=e=>`
void main()
{
    out_FragColor = ${oc(e)};
}`,YO=e=>new Yn({translucent:e.alpha<1,closed:!1,renderState:rd,vertexShaderSource:kO,fragmentShaderSource:WO(e)}),XO=({id:e,geometry:t,color:n,opacity:o,materialPreset:i,modelMatrix:a,asynchronous:r=!0})=>{const s=O.fromAlpha(n,o,new O);return i===Mo.COLOR?new Ge({geometryInstances:new ns({id:`${e}-fill`,geometry:t}),appearance:YO(s),allowPicking:!1,asynchronous:r,releaseGeometryInstances:!0,show:!0,modelMatrix:a}):new Ge({geometryInstances:new ns({id:`${e}-fill`,geometry:t}),appearance:HO(i,s),allowPicking:!1,asynchronous:r,releaseGeometryInstances:!0,show:!0,modelMatrix:a})},$O=e=>{const t=zO(e.radius),n=IO(e.innerRadius,t),o=sd(e.segments),i=ad(e.angleRad),a=cd(o,i),r=MO(e.rotationRad),s=e.modelMatrix??M.IDENTITY,c=DO(e.materialPreset),f=e.color??nd,d=NO(e.opacity,f.alpha??CO),m=ZO(l.ZERO,t,r);return{normalizedInnerRadius:PO(n,t),arcSampling:a,color:f,opacity:d,materialPreset:c,vertexFormat:c===Mo.COLOR?id:RO,modelMatrix:M.multiply(s,m,new M)}},ZO=(e,t=1,n=0)=>xO(e,t,n,od),KO=(e,t)=>{const n=$O(t),o=GO({innerRadiusRatio:n.normalizedInnerRadius,angleRad:t.angleRad,segments:n.arcSampling.segments,vertexFormat:n.vertexFormat});return XO({id:e,geometry:o,color:n.color,opacity:n.opacity,materialPreset:n.materialPreset,modelMatrix:n.modelMatrix,asynchronous:t.asynchronous})},QO=(e,t)=>KO(e,{...t,angleRad:kn,rotationRad:0}),xS=(e,t)=>QO(e,{...t,innerRadius:0});ld("[CESIUM|ELEVATION] Using core elevation helpers from @carma-mapping/engines/cesium/core.");const lr=`
void fragmentMain(FragmentInput fsInput, inout czm_modelMaterial material)
{
    // Apply color correction and gamma in one step
    vec3 color = pow(
        clamp((material.diffuse - u_blackPoint) / (u_whitePoint - u_blackPoint), 0.0, 1.0),
        u_gammaCorrection
    );
    
    // Apply saturation only if not 1.0
    if (u_saturation != 1.0) {
        float luminance = 0.2126 * color.r + 0.7152 * color.g + 0.0722 * color.b;
        color = mix(vec3(luminance), color, u_saturation);
    }
    
    material.diffuse = color;
    
    // Apply fog if intensity > 0
    if (u_fogIntensity > 0.0) {
        float distance = length(fsInput.attributes.positionEC);
        float fogFactor = min(1.0 - exp(-distance * u_fogIntensity), u_maxFog);
        material.diffuse = mix(material.diffuse, u_fogColor, fogFactor);
    }
}
`,fr=(e,t,n,o)=>({u_fogIntensity:{type:to.FLOAT,value:0},u_maxFog:{type:to.FLOAT,value:1},u_fogColor:{type:to.VEC3,value:new l(.7,.8,.9)},u_gammaCorrection:{type:to.VEC3,value:new l(...e)},u_blackPoint:{type:to.VEC3,value:new l(...t)},u_whitePoint:{type:to.VEC3,value:new l(...n)},u_saturation:{type:to.FLOAT,value:o}});ni.PBR,ni.UNLIT,fr([1,1,1.25],[.02,.02,.02],[.75,.75,.75],1),ni.UNLIT,fr([1.25,1.25,1.23],[0,0,0],[.9,.9,.92],1),ni.UNLIT,fr([1,1,1],[0,0,0],[1,1,1],1),ni.UNLIT,fr([1,1,1.25],[-.1,-.1,-.1],[.9,.9,.9],0);export{cO as $,Ye as A,Q as B,l as C,T as D,Qs as E,ue as F,ns as G,us as H,$e as I,ee as J,Or as K,Em as L,M,ae as N,Ae as O,Ot as P,Se as Q,Mo as R,rn as S,_e as T,X as U,xn as V,K as W,P as X,W as Y,Kl as Z,mO as _,DA as a,on as a$,dS as a0,mS as a1,Wh as a2,GA as a3,fS as a4,WA as a5,nO as a6,jA as a7,yS as a8,Qh as a9,xe as aA,ze as aB,In as aC,Ci as aD,J as aE,ve as aF,co as aG,ao as aH,At as aI,Ft as aJ,io as aK,Te as aL,Et as aM,Ce as aN,qe as aO,Pt as aP,je as aQ,qo as aR,ri as aS,Be as aT,re as aU,ot as aV,_s as aW,ka as aX,me as aY,Hs as aZ,St as a_,bS as aa,gS as ab,Js as ac,Kh as ad,lS as ae,sS as af,uS as ag,NA as ah,TS as ai,_S as aj,pS as ak,AS as al,OS as am,wS as an,ss as ao,SS as ap,mn as aq,vi as ar,ES as as,hs as at,ke as au,ye as av,Rr as aw,Oe as ax,oe as ay,Le as az,UA as b,dt as b0,Qt as b1,tn as b2,nt as b3,Ne as b4,Nt as b5,Yn as b6,Ue as b7,pt as b8,Hw as b9,Ht as bA,lf as bB,wt as bC,vn as bD,Ee as bE,Cu as bF,gf as bG,mi as bH,bc as bI,pi as bJ,Nr as bK,ni as bL,pn as bM,ct as bN,Oo as bO,qt as bP,to as bQ,bA as bR,Xs as ba,en as bb,un as bc,vo as bd,Ct as be,j1 as bf,H1 as bg,si as bh,Ei as bi,Mt as bj,xt as bk,z as bl,ge as bm,Xf as bn,he as bo,_n as bp,Fe as bq,Xe as br,Lo as bs,Ke as bt,jt as bu,oo as bv,On as bw,mt as bx,fo as by,Pn as bz,cS as c,O as d,xS as e,QO as f,KO as g,GO as h,we as i,Ge as j,xO as k,jh as l,U as m,hS as n,VA as o,u as p,Fr as q,aO as r,Yh as s,ne as t,A as u,fe as v,Oi as w,h as x,tt as y,Vo as z};
